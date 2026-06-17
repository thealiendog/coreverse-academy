// ExplorerWelcomeScreen — regression tests for tap and auto-advance behaviour.
//
// Run standalone:  npx vitest run src/components/explorers/ExplorerWelcomeScreen.test.jsx
// Run via CI gate: npm run validate   (included in the validate script)
//
// Setup: jsdom environment (configured in vite.config.js).
// Each test seeds localStorage so the parent-onboarding card never blocks taps.

import { render, screen, fireEvent, act, rerender as _rerender } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import ExplorerWelcomeScreen from './ExplorerWelcomeScreen';

// Minimal props that satisfy the component without triggering audio side-effects.
const ACCENT = '#a78bfa';
function baseProps(overrides = {}) {
  return {
    screen:       { guideText: 'Hello {name}!' },
    guideAvatar:  { name: 'Sage', image: '/avatars/sage.png' },
    speaking:     false,
    loadingAudio: false,
    karaokeWords: [],
    karaokeIdx:   0,
    accent:       ACCENT,
    onReplay:     vi.fn(),
    childName:    'Alex',
    welcomeReady: true,
    onWelcomeTap: vi.fn(),
    onComplete:   vi.fn(),
    ...overrides,
  };
}

// Silence noisy [DIAG-WS] console output during tests.
beforeEach(() => {
  vi.spyOn(console, 'log').mockImplementation(() => {});
  // Seed localStorage so the parent-onboarding card is already dismissed.
  // Without this every test starts with the blocking overlay and all taps are no-ops.
  localStorage.setItem('explorer_first_lesson_seen', 'true');
});

// ── TAP AFTER AUDIO ────────────────────────────────────────────────────────────
// Regression for the bug that shipped: handleTap returned early when
// hasPlayed was true, so "Tap › to continue" was permanently unresponsive.
// After the fix, a tap while hasPlayed=true must call onComplete.

describe('TAP AFTER AUDIO', () => {
  it('calls onComplete when the user taps after audio has finished', async () => {
    const props = baseProps();
    const { rerender } = render(<ExplorerWelcomeScreen {...props} />);

    // First tap: starts audio (hasPlayed → true), onWelcomeTap fired, onComplete NOT yet.
    const container = screen.getByRole('button');
    await act(async () => { fireEvent.click(container); });
    expect(props.onWelcomeTap).toHaveBeenCalledTimes(1);
    expect(props.onComplete).not.toHaveBeenCalled();

    // Simulate audio finishing: speaking goes false (hasPlayed still true internally).
    await act(async () => {
      rerender(<ExplorerWelcomeScreen {...props} speaking={false} />);
    });

    // Second tap: hasPlayed is already true → must call onComplete.
    await act(async () => { fireEvent.click(container); });
    expect(props.onComplete).toHaveBeenCalledTimes(1);
  });

  it('does NOT call onComplete on the first tap (audio just starting)', async () => {
    const props = baseProps();
    render(<ExplorerWelcomeScreen {...props} />);

    await act(async () => {
      fireEvent.click(screen.getByRole('button'));
    });

    expect(props.onComplete).not.toHaveBeenCalled();
    expect(props.onWelcomeTap).toHaveBeenCalledTimes(1);
  });
});

// ── TAP BEFORE AUDIO ──────────────────────────────────────────────────────────
// Tapping while the play button is visible triggers audio, nothing else.

describe('TAP BEFORE AUDIO', () => {
  it('calls onWelcomeTap (not onComplete) on the very first tap', async () => {
    const props = baseProps({ welcomeReady: true, speaking: false });
    render(<ExplorerWelcomeScreen {...props} />);

    await act(async () => {
      fireEvent.click(screen.getByRole('button'));
    });

    expect(props.onWelcomeTap).toHaveBeenCalledTimes(1);
    expect(props.onComplete).not.toHaveBeenCalled();
  });

  it('does not call onWelcomeTap a second time if tapped again while speaking', async () => {
    const props = baseProps();
    const { rerender } = render(<ExplorerWelcomeScreen {...props} />);

    // First tap: audio starts.
    await act(async () => { fireEvent.click(screen.getByRole('button')); });
    expect(props.onWelcomeTap).toHaveBeenCalledTimes(1);

    // Re-render to simulate speaking beginning.
    await act(async () => {
      rerender(<ExplorerWelcomeScreen {...props} speaking={true} />);
    });

    // Tap again while speaking: hasPlayed is true → calls onComplete, not onWelcomeTap again.
    await act(async () => { fireEvent.click(screen.getByRole('button')); });
    expect(props.onWelcomeTap).toHaveBeenCalledTimes(1); // still 1
    expect(props.onComplete).toHaveBeenCalledTimes(1);
  });
});

// ── AUTO-ADVANCE (post-audio state) ───────────────────────────────────────────
// After audio finishes (speaking false, hasPlayed true), the "Tap › to continue"
// prompt must be visible and any tap must call onComplete.
// The actual timer-based auto-advance lives in VoyagerLessonPlayer; this test
// verifies that ExplorerWelcomeScreen is in the correct ready-to-advance state.

describe('AUTO-ADVANCE readiness', () => {
  it('shows "Tap › to continue" after audio completes', async () => {
    const props = baseProps();
    const { rerender } = render(<ExplorerWelcomeScreen {...props} />);

    await act(async () => { fireEvent.click(screen.getByRole('button')); });

    await act(async () => {
      rerender(<ExplorerWelcomeScreen {...props} speaking={false} loadingAudio={false} />);
    });

    expect(screen.getByText(/tap.*continue/i)).toBeTruthy();
  });

  it('calls onComplete when tapped in the post-audio continue state', async () => {
    const props = baseProps();
    const { rerender } = render(<ExplorerWelcomeScreen {...props} />);

    await act(async () => { fireEvent.click(screen.getByRole('button')); });

    await act(async () => {
      rerender(<ExplorerWelcomeScreen {...props} speaking={false} loadingAudio={false} />);
    });

    await act(async () => { fireEvent.click(screen.getByRole('button')); });
    expect(props.onComplete).toHaveBeenCalledTimes(1);
  });

  it('hides "Tap › to continue" while audio is still loading', async () => {
    const props = baseProps();
    const { rerender } = render(<ExplorerWelcomeScreen {...props} />);

    await act(async () => { fireEvent.click(screen.getByRole('button')); });

    // loadingAudio=true while the next clip is fetching.
    await act(async () => {
      rerender(<ExplorerWelcomeScreen {...props} speaking={false} loadingAudio={true} />);
    });

    expect(screen.queryByText(/tap.*continue/i)).toBeNull();
  });
});

// ── TAP DURING LOADING ────────────────────────────────────────────────────────
// While the prewarm is in-flight (welcomeReady=false, loadingAudio=true):
//   • onComplete must NOT be called
//   • onWelcomeTap must NOT be called (audio isn't ready yet)
// This guards against a secondary bug where tapping during loading
// silently sets hasPlayed=true, preventing the play button from ever appearing.

describe('TAP DURING LOADING', () => {
  it('does not call onWelcomeTap while welcomeReady is false', async () => {
    const props = baseProps({ welcomeReady: false, loadingAudio: true });
    render(<ExplorerWelcomeScreen {...props} />);

    await act(async () => {
      fireEvent.click(screen.getByRole('button'));
    });

    expect(props.onWelcomeTap).not.toHaveBeenCalled();
    expect(props.onComplete).not.toHaveBeenCalled();
  });

  it('still shows the play button after welcomeReady becomes true (tap was not consumed)', async () => {
    const props = baseProps({ welcomeReady: false, loadingAudio: true });
    const { rerender } = render(<ExplorerWelcomeScreen {...props} />);

    // Tap during loading — must NOT set hasPlayed.
    await act(async () => {
      fireEvent.click(screen.getByRole('button'));
    });

    // Now prewarm completes.
    await act(async () => {
      rerender(<ExplorerWelcomeScreen {...props} welcomeReady={true} loadingAudio={false} />);
    });

    // Play button must still be visible — hasPlayed was NOT consumed by the earlier tap.
    expect(screen.getByLabelText(/start lesson/i)).toBeTruthy();
    const playButton = document.querySelector('.wc-play-circle');
    expect(playButton).not.toBeNull();
  });
});
