// MathLessonPlayer — dedicated player for Math v2 manipulative-first lessons.
// Wave A: block auto-arrange, teaching moments, concept visual, quiz rewrite,
//         Remi animation, counter narration, feedback timing fixes.
import { useState, useEffect, useRef, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getCurrentChild } from '../../lib/storage';
import { MATH_L01_V2 } from '../../data/math_upper_explorer_l01_v2_screens';
import BaseTenBlocksWorkspace from './BaseTenBlocksWorkspace';

// ── Design tokens ─────────────────────────────────────────────────────────────
const REMI_IMG   = '/avatars/remi.png';
const ACCENT     = '#C4B5FD';
const ACCENT_DIM = 'rgba(196,181,253,0.18)';
const BG         = '#080618';
const FONT       = "'Inter', system-ui, -apple-system, sans-serif";
const VOICE_ID   = 'ShhDvxS4N0arXxn6PD5o'; // Remi

// ── Lesson registry ───────────────────────────────────────────────────────────
const LESSON_REGISTRY = {
  'math-9-10-01': MATH_L01_V2,
};

// ── Global keyframes (injected once at root) ──────────────────────────────────
const GLOBAL_STYLES = `
  @keyframes feedbackIn {
    0%   { transform: scale(0.9) translateY(4px); opacity: 0; }
    100% { transform: scale(1) translateY(0); opacity: 1; }
  }
  @keyframes remiPulse {
    0%,100% { transform: scale(1);    box-shadow: 0 0 12px rgba(196,181,253,0.33); }
    50%      { transform: scale(1.07); box-shadow: 0 0 24px rgba(196,181,253,0.60); }
  }
  @keyframes blockGlow {
    0%,100% { transform: scale(1); }
    50%      { transform: scale(1.06); }
  }
  @keyframes badgePop {
    0%   { transform: scale(0.2) rotate(-15deg); opacity: 0; }
    60%  { transform: scale(1.15) rotate(5deg);  opacity: 1; }
    100% { transform: scale(1) rotate(0deg); }
  }
  @keyframes slideUp {
    0%   { transform: translateY(100%); opacity: 0; }
    100% { transform: translateY(0);    opacity: 1; }
  }
`;

// ── Sound effects (Web Audio API — no file deps, respects silent mode) ────────
function playChime() {
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const notes = [523.25, 659.25, 783.99]; // C5, E5, G5
    notes.forEach((freq, i) => {
      const osc  = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.type = 'sine';
      osc.frequency.value = freq;
      const t = ctx.currentTime + i * 0.12;
      gain.gain.setValueAtTime(0, t);
      gain.gain.linearRampToValueAtTime(0.18, t + 0.04);
      gain.gain.exponentialRampToValueAtTime(0.001, t + 0.45);
      osc.start(t);
      osc.stop(t + 0.45);
    });
    setTimeout(() => ctx.close(), 1500);
  } catch { /* silent mode / unsupported — no-op */ }
}

function playFanfare() {
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
    notes.forEach((freq, i) => {
      const osc  = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.type = 'sine';
      osc.frequency.value = freq;
      const t = ctx.currentTime + i * 0.16;
      gain.gain.setValueAtTime(0, t);
      gain.gain.linearRampToValueAtTime(0.22, t + 0.05);
      gain.gain.exponentialRampToValueAtTime(0.001, t + 0.55);
      osc.start(t);
      osc.stop(t + 0.55);
    });
    setTimeout(() => ctx.close(), 1800);
  } catch { /* silent mode / unsupported — no-op */ }
}

// ── Shared UI atoms ───────────────────────────────────────────────────────────
function ProgressBar({ current, total }) {
  const pct = total > 1 ? (current / (total - 1)) * 100 : 100;
  return (
    <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: 'rgba(255,255,255,0.06)', zIndex: 10 }}>
      <div style={{ height: '100%', width: `${pct}%`, background: ACCENT, transition: 'width 0.5s ease' }} />
    </div>
  );
}

function RemiAvatar({ size = 64, speaking = false }) {
  return (
    <div style={{ position: 'relative', flexShrink: 0 }}>
      <img
        src={REMI_IMG}
        alt="Remi"
        style={{
          width: size, height: size, borderRadius: '50%', objectFit: 'cover',
          border: `2px solid ${speaking ? ACCENT : 'rgba(196,181,253,0.25)'}`,
          transition: 'border-color 0.3s',
          animation: speaking ? 'remiPulse 1.2s ease-in-out infinite' : 'none',
        }}
      />
    </div>
  );
}

function PrimaryBtn({ children, onClick, disabled = false, color = ACCENT }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={{
        width: '100%', padding: '16px', borderRadius: 16, border: 'none',
        background: disabled ? 'rgba(255,255,255,0.08)' : color,
        color: disabled ? 'rgba(255,255,255,0.3)' : '#000',
        fontWeight: 800, fontSize: '1rem', cursor: disabled ? 'not-allowed' : 'pointer',
        transition: 'background 0.2s, color 0.2s', touchAction: 'manipulation',
        fontFamily: FONT,
      }}
    >
      {children}
    </button>
  );
}

// Back chevron — used inside each screen's header row so it can handle
// sub-state back (prev task / prev problem / prev question) before calling
// the player-level onBack that decrements screenIdx.
function BackChevron({ onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        width: 44, height: 44, borderRadius: '50%', border: 'none', flexShrink: 0,
        background: 'rgba(255,255,255,0.12)',
        color: 'rgba(255,255,255,0.8)', fontSize: '1.6rem', lineHeight: 1,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        cursor: 'pointer', touchAction: 'manipulation', padding: 0,
      }}
      aria-label="Go back"
    >
      ‹
    </button>
  );
}

function SpeakerBtn({ onClick, speaking, loading }) {
  return (
    <button
      onClick={onClick}
      style={{
        width: 36, height: 36, borderRadius: '50%', border: 'none', flexShrink: 0,
        background: (speaking || loading) ? ACCENT_DIM : 'rgba(255,255,255,0.07)',
        color: (speaking || loading) ? ACCENT : 'rgba(255,255,255,0.45)',
        fontSize: '1rem', cursor: 'pointer', touchAction: 'manipulation',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        transition: 'background 0.2s',
      }}
      aria-label="Replay audio"
    >
      {loading ? '⏳' : speaking ? '🔊' : '🔈'}
    </button>
  );
}

function FeedbackBanner({ type, message }) {
  if (!type) return null;
  const isCorrect = type === 'correct';
  return (
    <div style={{
      margin: '8px 0',
      padding: '12px 16px',
      borderRadius: 12,
      background: isCorrect ? 'rgba(52,211,153,0.15)' : 'rgba(239,68,68,0.12)',
      border: `1.5px solid ${isCorrect ? 'rgba(52,211,153,0.4)' : 'rgba(239,68,68,0.35)'}`,
      color: isCorrect ? '#34D399' : '#FCA5A5',
      fontWeight: 600, fontSize: '0.9rem', lineHeight: 1.45,
      animation: 'feedbackIn 0.25s cubic-bezier(0.34,1.56,0.64,1)',
    }}>
      {isCorrect ? '✓ ' : '✗ '}{message}
    </div>
  );
}

// ── Audio hook ────────────────────────────────────────────────────────────────
function useAudio(childName) {
  const [speaking,     setSpeaking]     = useState(false);
  const [loadingAudio, setLoadingAudio] = useState(false);
  const audioRef    = useRef(null);
  const blobUrlRef  = useRef(null);
  const speakGenRef = useRef(0);
  const abortRef    = useRef(null);

  const stopAudio = useCallback(() => {
    speakGenRef.current++;
    abortRef.current?.abort();
    if (audioRef.current) { audioRef.current.pause(); audioRef.current.src = ''; }
    setSpeaking(false);
    setLoadingAudio(false);
  }, []);

  const speak = useCallback(async (rawText, onDone) => {
    if (!rawText) { onDone?.(); return; }
    const text = rawText.replace(/\{name\}/g, childName || 'there');

    speakGenRef.current++;
    const gen = speakGenRef.current;
    abortRef.current?.abort();
    const ctrl = new AbortController();
    abortRef.current = ctrl;

    if (audioRef.current) { audioRef.current.pause(); audioRef.current.src = ''; }
    setSpeaking(true);
    setLoadingAudio(true);

    let done = false;
    const finish = () => {
      if (done) return; done = true;
      setSpeaking(false);
      setLoadingAudio(false);
      onDone?.();
    };
    const wordCount = text.split(/\s+/).filter(Boolean).length;
    const deadman = setTimeout(finish, Math.max(30000, wordCount * 750));

    try {
      const res = await fetch('/.netlify/functions/nova-speak', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify({ text, voiceId: VOICE_ID }),
        signal:  ctrl.signal,
      });
      if (gen !== speakGenRef.current) { clearTimeout(deadman); return; }
      if (!res.ok) throw new Error('tts-unavailable');

      const blob = await res.blob();
      if (gen !== speakGenRef.current) { clearTimeout(deadman); return; }

      if (blobUrlRef.current) URL.revokeObjectURL(blobUrlRef.current);
      const blobUrl = URL.createObjectURL(blob);
      blobUrlRef.current = blobUrl;

      if (!audioRef.current) {
        const el = new Audio();
        el.playsInline = true;
        el.setAttribute('webkit-playsinline', 'true');
        el.setAttribute('playsinline', 'true');
        audioRef.current = el;
      }
      const el = audioRef.current;
      el.src = blobUrl;
      setLoadingAudio(false);
      el.onended = () => { clearTimeout(deadman); finish(); };
      el.onerror = () => { clearTimeout(deadman); finish(); };
      await el.play().catch(() => { clearTimeout(deadman); finish(); });
    } catch (e) {
      clearTimeout(deadman);
      if (e.name !== 'AbortError') finish();
    }
  }, [childName]);

  useEffect(() => () => {
    speakGenRef.current++;
    abortRef.current?.abort();
    if (audioRef.current) { audioRef.current.pause(); audioRef.current.src = ''; }
    if (blobUrlRef.current) URL.revokeObjectURL(blobUrlRef.current);
  }, []);

  return { speak, stopAudio, speaking, loadingAudio };
}

// ── Counter narration hook ────────────────────────────────────────────────────
// Debounces count changes 600ms, speaks total aloud, skips initial mount value.
function useCounterNarration(speak) {
  const prevTotalRef = useRef(null); // null = not yet received first onChange
  const timerRef     = useRef(null);
  const mountedRef   = useRef(true);

  useEffect(() => {
    mountedRef.current = true;
    return () => {
      mountedRef.current = false;
      clearTimeout(timerRef.current);
    };
  }, []);

  const reset = useCallback(() => {
    prevTotalRef.current = null;
    clearTimeout(timerRef.current);
  }, []);

  const narrate = useCallback((total) => {
    console.log('[narration] narrate() called — total:', total, '| prev:', prevTotalRef.current, '| mounted:', mountedRef.current);
    if (!mountedRef.current) return;
    if (prevTotalRef.current === null) {
      // First call is the initial workspace state — record it, don't speak.
      prevTotalRef.current = total;
      console.log('[narration] first call — recorded initial total, skipping audio');
      return;
    }
    // Guard: don't restart the debounce timer when the total hasn't changed.
    // Without this guard, frequent re-renders (e.g. every-second elapsed timer
    // in ExploreScreen) would continuously reset the 600ms timer via a stale
    // inline onChange closure in the workspace's useEffect([blocks, onChange]).
    if (total === prevTotalRef.current) {
      console.log('[narration] total unchanged — debounce skipped');
      return;
    }
    clearTimeout(timerRef.current);
    console.log('[narration] scheduling debounce (1000ms) for total:', total);
    timerRef.current = setTimeout(() => {
      if (!mountedRef.current) return;
      prevTotalRef.current = total;
      console.log('[narration] debounce fired — speaking:', total);
      speak(String(total));
    }, 1000);
  }, [speak]);

  return { narrate, reset };
}

// ══════════════════════════════════════════════════════════════════════════════
// Teaching card block icons — large, visually dominant.
// Used in TeachingMomentPanel and TripleRepVisual so kids clearly see what
// each digit value looks like as physical blocks.
// ══════════════════════════════════════════════════════════════════════════════
function CardBlockIcon({ blockType, count, color }) {
  if (count === 0) {
    return (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '8px 0' }}>
        <div style={{ fontSize: '0.75rem', color, opacity: 0.4, fontWeight: 700 }}>(none)</div>
      </div>
    );
  }

  if (blockType === 'flat') {
    const n = Math.min(count, 2);
    return (
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4, alignItems: 'center', justifyContent: 'center' }}>
        {Array.from({ length: n }).map((_, i) => (
          <svg key={i} width={60} height={60} viewBox="0 0 60 60">
            <rect x={1} y={1} width={58} height={58} fill={color} stroke={color} strokeWidth={1.5} rx={5} opacity={0.9} />
            {[1,2,3,4,5,6,7,8,9].map(j => (
              <line key={`h${j}`} x1={1} y1={j * 6} x2={59} y2={j * 6} stroke="rgba(0,0,0,0.2)" strokeWidth={0.6} />
            ))}
            {[1,2,3,4,5,6,7,8,9].map(j => (
              <line key={`v${j}`} x1={j * 6} y1={1} x2={j * 6} y2={59} stroke="rgba(0,0,0,0.2)" strokeWidth={0.6} />
            ))}
          </svg>
        ))}
        {count > 2 && <span style={{ fontSize: '0.85rem', color, fontWeight: 800, marginLeft: 2 }}>×{count}</span>}
      </div>
    );
  }

  if (blockType === 'rod') {
    const n = Math.min(count, 9);
    return (
      <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'center', gap: 3, flexWrap: 'wrap' }}>
        {Array.from({ length: n }).map((_, i) => (
          <svg key={i} width={10} height={62} viewBox="0 0 10 62">
            <rect x={0.5} y={0.5} width={9} height={61} fill={color} stroke={color} strokeWidth={1} rx={2} opacity={0.9} />
            {[1,2,3,4,5,6,7,8,9].map(j => (
              <line key={j} x1={1} y1={j * 6.1} x2={9} y2={j * 6.1} stroke="rgba(0,0,0,0.2)" strokeWidth={0.5} />
            ))}
          </svg>
        ))}
        {count > 9 && <span style={{ fontSize: '0.85rem', color, fontWeight: 800, alignSelf: 'center' }}>×{count}</span>}
      </div>
    );
  }

  // unit
  const n = Math.min(count, 9);
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 3, justifyContent: 'center', maxWidth: 84 }}>
      {Array.from({ length: n }).map((_, i) => (
        <svg key={i} width={18} height={18}>
          <rect x={0.5} y={0.5} width={17} height={17} fill={color} stroke={color} strokeWidth={1} rx={3} opacity={0.9} />
        </svg>
      ))}
      {count > 9 && <span style={{ fontSize: '0.85rem', color, fontWeight: 800 }}>×{count}</span>}
    </div>
  );
}

// What the kid built — shown instead of full workspace during teaching mode.
// Renders actual colored mini-block SVGs so the kid can see what they built.
// (Replaces the text-only BuildSnapshot from Wave A.1.)
function FrozenBlockDisplay({ wsState }) {
  const { flats = 0, rods = 0, units = 0, total = 0 } = wsState || {};

  return (
    <div style={{
      flexShrink: 0, margin: '6px 16px 10px', padding: '12px 14px',
      borderRadius: 14, background: 'rgba(255,255,255,0.04)',
      border: `1.5px solid ${ACCENT}22`,
      display: 'flex', flexDirection: 'column', gap: 10,
    }}>
      {/* Total */}
      <div style={{ fontSize: '2.6rem', fontWeight: 900, color: '#fff', letterSpacing: '-0.04em', lineHeight: 1 }}>
        {total}
      </div>

      {/* Flat row */}
      {flats > 0 && (
        <div style={{ display: 'flex', alignItems: 'center', gap: 5, flexWrap: 'wrap' }}>
          {Array.from({ length: flats }, (_, i) => (
            <svg key={i} width={40} height={40}>
              <rect x={1} y={1} width={38} height={38} fill="#FBBF24" stroke="#D97706" strokeWidth={1.5} rx={4} />
              {[1,2,3].map(j => <line key={`h${j}`} x1={1} y1={j*9.5} x2={39} y2={j*9.5} stroke="#B45309" strokeWidth={0.6} />)}
              {[1,2,3].map(j => <line key={`v${j}`} x1={j*9.5} y1={1} x2={j*9.5} y2={39} stroke="#B45309" strokeWidth={0.6} />)}
            </svg>
          ))}
          <span style={{ color: '#FBBF24', fontSize: '0.75rem', fontWeight: 700, marginLeft: 2 }}>
            ×{flats} flat{flats > 1 ? 's' : ''}
          </span>
        </div>
      )}

      {/* Rod row */}
      {rods > 0 && (
        <div style={{ display: 'flex', alignItems: 'flex-end', gap: 4, flexWrap: 'wrap' }}>
          {Array.from({ length: rods }, (_, i) => (
            <svg key={i} width={12} height={56}>
              <rect x={1} y={1} width={10} height={54} fill="#34D399" stroke="#10B981" strokeWidth={1.5} rx={2} />
              {[1,2,3,4].map(j => <line key={j} x1={1} y1={j*10.8} x2={11} y2={j*10.8} stroke="#059669" strokeWidth={0.8} />)}
            </svg>
          ))}
          <span style={{ color: '#34D399', fontSize: '0.75rem', fontWeight: 700, paddingBottom: 2, marginLeft: 2 }}>
            ×{rods} rod{rods > 1 ? 's' : ''}
          </span>
        </div>
      )}

      {/* Unit row */}
      {units > 0 && (
        <div style={{ display: 'flex', alignItems: 'center', gap: 3, flexWrap: 'wrap' }}>
          {Array.from({ length: units }, (_, i) => (
            <svg key={i} width={16} height={16}>
              <rect x={1} y={1} width={14} height={14} fill="#60A5FA" stroke="#2563EB" strokeWidth={1.5} rx={3} />
            </svg>
          ))}
          <span style={{ color: '#60A5FA', fontSize: '0.75rem', fontWeight: 700, marginLeft: 2 }}>
            ×{units} unit{units > 1 ? 's' : ''}
          </span>
        </div>
      )}

      {flats === 0 && rods === 0 && units === 0 && (
        <div style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.8rem' }}>(empty)</div>
      )}
    </div>
  );
}

// Teaching moment panel — slides up from bottom after correct answer
function TeachingMomentPanel({ task, speaking, onNext }) {
  const tm = task.teachingMoment;
  if (!tm) return null;

  return (
    <div style={{
      flex: 1, minHeight: 0,
      display: 'flex', flexDirection: 'column',
      background: 'rgba(8,6,24,0.97)',
      borderTop: `1.5px solid ${ACCENT}33`,
      padding: '14px 16px 18px',
      animation: 'slideUp 0.35s cubic-bezier(0.34,1,0.64,1)',
    }}>
      {/* Equation headline */}
      <div style={{ fontSize: '0.7rem', fontWeight: 700, color: ACCENT, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 8, textAlign: 'center', flexShrink: 0 }}>
        Place Value
      </div>
      <div style={{ fontSize: 'clamp(0.95rem,3.5vw,1.15rem)', fontWeight: 900, color: '#fff', textAlign: 'center', marginBottom: 12, letterSpacing: '-0.01em', flexShrink: 0 }}>
        {tm.equation}
      </div>

      {/* Color-coded cards: digit top, big block icon middle, place label bottom */}
      <div style={{ display: 'flex', gap: 6, marginBottom: 14, flex: 1, minHeight: 0 }}>
        {tm.rows.map((row, i) => (
          <div key={i} style={{
            flex: 1,
            background: `${row.color}12`,
            border: `1.5px solid ${row.color}40`,
            borderRadius: 12,
            padding: '10px 6px 8px',
            display: 'flex', flexDirection: 'column', alignItems: 'center',
          }}>
            {/* Digit — top anchor */}
            <div style={{ fontSize: '1.8rem', fontWeight: 900, color: row.color, lineHeight: 1, flexShrink: 0 }}>
              {row.digit}
            </div>
            {/* Block icon — fills available space so it's visually dominant */}
            <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', overflow: 'hidden', padding: '6px 0' }}>
              <CardBlockIcon blockType={row.blockType} count={row.count} color={row.color} />
            </div>
            {/* Place label — bottom anchor */}
            <div style={{ fontSize: '0.58rem', fontWeight: 800, color: row.color, letterSpacing: '0.1em', textTransform: 'uppercase', textAlign: 'center', flexShrink: 0 }}>
              {row.placeLabel}
            </div>
          </div>
        ))}
      </div>

      <div style={{ flexShrink: 0 }}>
        <PrimaryBtn onClick={onNext} color="#34D399">
          Next task →
        </PrimaryBtn>
      </div>
    </div>
  );
}

// Triple-representation visual for 247 (ConceptNameScreen)
function TripleRepVisual() {
  const cols = [
    { digit: '2', place: 'HUNDREDS', blockType: 'flat', count: 2, color: '#FBBF24' },
    { digit: '4', place: 'TENS',     blockType: 'rod',  count: 4, color: '#34D399' },
    { digit: '7', place: 'ONES',     blockType: 'unit', count: 7, color: '#60A5FA' },
  ];

  return (
    <div style={{ margin: '16px 0' }}>
      {/* Number label */}
      <div style={{ textAlign: 'center', marginBottom: 10 }}>
        <span style={{ fontSize: '2rem', fontWeight: 900, color: '#fff', letterSpacing: '-0.04em' }}>
          2
        </span>
        <span style={{ fontSize: '2rem', fontWeight: 900, color: '#34D399', letterSpacing: '-0.04em' }}>
          4
        </span>
        <span style={{ fontSize: '2rem', fontWeight: 900, color: '#60A5FA', letterSpacing: '-0.04em' }}>
          7
        </span>
      </div>

      {/* Three columns — digit top, big icon middle, label bottom */}
      <div style={{ display: 'flex', gap: 8 }}>
        {cols.map(({ digit, place, blockType, count, color }) => (
          <div key={place} style={{
            flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center',
            background: `${color}12`, border: `1.5px solid ${color}40`,
            borderRadius: 14, padding: '12px 6px 10px', minHeight: 140,
          }}>
            {/* Digit */}
            <div style={{ fontSize: '1.8rem', fontWeight: 900, color, lineHeight: 1, flexShrink: 0 }}>
              {digit}
            </div>

            {/* Block icons — dominant visual in the middle */}
            <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '8px 0', width: '100%', overflow: 'hidden' }}>
              <CardBlockIcon blockType={blockType} count={count} color={color} />
            </div>

            {/* Place label */}
            <div style={{ fontSize: '0.57rem', fontWeight: 800, color, textTransform: 'uppercase', letterSpacing: '0.08em', textAlign: 'center', flexShrink: 0 }}>
              {place}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ══════════════════════════════════════════════════════════════════════════════
// Screen sub-components
// ══════════════════════════════════════════════════════════════════════════════

// ── 1. WelcomeScreen ──────────────────────────────────────────────────────────
function WelcomeScreen({ screen, speak, stopAudio, speaking, loadingAudio, onAdvance, onBack }) {
  useEffect(() => {
    speak(screen.audioPrompt);
    return stopAudio;
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', alignItems: 'center', justifyContent: 'center', padding: '32px 24px', textAlign: 'center', gap: 20 }}>
      {/* Back exits the lesson from Welcome screen */}
      <div style={{ position: 'absolute', top: 14, left: 12 }}>
        <BackChevron onClick={onBack} />
      </div>
      <RemiAvatar size={88} speaking={speaking} />

      {/* Remi self-intro — prominent on-screen text so it's visible even before audio plays */}
      <div style={{ textAlign: 'center' }}>
        <div style={{ fontSize: '1.2rem', fontWeight: 800, color: ACCENT, marginBottom: 10, lineHeight: 1.3 }}>
          Hi! I'm Remi the Raccoon
        </div>
        <h1 style={{ fontSize: 'clamp(1.6rem,6.5vw,2.4rem)', fontWeight: 900, color: '#fff', margin: 0, letterSpacing: '-0.03em', lineHeight: 1.15 }}>
          {screen.headline}
        </h1>
        <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.5)', fontWeight: 500, marginTop: 8, marginBottom: 0 }}>
          {screen.subtitle}
        </p>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: 10, color: 'rgba(255,255,255,0.35)', fontSize: '0.82rem', maxWidth: 300 }}>
        <SpeakerBtn onClick={() => speak(screen.audioPrompt)} speaking={speaking} loading={loadingAudio} />
        <span>Tap to replay my intro</span>
      </div>

      <div style={{ width: '100%', maxWidth: 340, marginTop: 8 }}>
        <PrimaryBtn onClick={onAdvance}>Let's go →</PrimaryBtn>
      </div>
    </div>
  );
}

// ── 2. BlockIntroScreen ───────────────────────────────────────────────────────
function BlockIntroScreen({ screen, speak, stopAudio, speaking, loadingAudio, onAdvance, onBack }) {
  const [highlighted, setHighlighted] = useState(null);

  useEffect(() => {
    speak(screen.audioPrompt);
    const timings = screen.highlightTimings || { unit: 4400, rod: 9800, flat: 17200, none: 24000 };
    const t1 = setTimeout(() => setHighlighted('unit'), timings.unit);
    const t2 = setTimeout(() => setHighlighted('rod'),  timings.rod);
    const t3 = setTimeout(() => setHighlighted('flat'), timings.flat);
    const t4 = setTimeout(() => setHighlighted(null),   timings.none);
    return () => { stopAudio(); [t1,t2,t3,t4].forEach(clearTimeout); };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const blocks = [
    { type: 'unit', label: 'Unit', value: '1',   fill: '#60A5FA', stroke: '#2563EB' },
    { type: 'rod',  label: 'Rod',  value: '10',  fill: '#34D399', stroke: '#10B981' },
    { type: 'flat', label: 'Flat', value: '100', fill: '#FBBF24', stroke: '#D97706' },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', padding: '24px 20px', gap: 20 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <BackChevron onClick={onBack} />
        <RemiAvatar size={44} speaking={speaking} />
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: '1rem', fontWeight: 800, color: '#fff' }}>Meet your blocks</div>
          <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.4)' }}>Each one represents a different value</div>
        </div>
        <SpeakerBtn onClick={() => speak(screen.audioPrompt)} speaking={speaking} loading={loadingAudio} />
      </div>

      <div style={{ display: 'flex', gap: 10, flex: 1, alignItems: 'stretch' }}>
        {blocks.map(({ type, label, value, fill, stroke }) => {
          const isLit = highlighted === type;
          return (
            <div
              key={type}
              style={{
                flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center',
                justifyContent: 'center', gap: 10, padding: '18px 8px', borderRadius: 18,
                background: isLit ? `${fill}1a` : 'rgba(255,255,255,0.04)',
                border: `2px solid ${isLit ? fill : 'rgba(255,255,255,0.09)'}`,
                boxShadow: isLit ? `0 0 24px ${fill}55` : 'none',
                transition: 'all 0.35s ease',
                animation: isLit ? 'blockGlow 0.9s ease-in-out infinite' : undefined,
              }}
            >
              {type === 'unit' && (
                <svg width={40} height={40}>
                  <rect x={1} y={1} width={38} height={38} fill={fill} stroke={stroke} strokeWidth={2} rx={6} />
                </svg>
              )}
              {type === 'rod' && (
                <svg width={22} height={80}>
                  <rect x={1} y={1} width={20} height={78} fill={fill} stroke={stroke} strokeWidth={2} rx={4} />
                  {[1,2,3,4,5,6,7].map(i => (
                    <line key={i} x1={2} y1={i*10} x2={20} y2={i*10} stroke={stroke} strokeWidth={1} />
                  ))}
                </svg>
              )}
              {type === 'flat' && (
                <svg width={68} height={68}>
                  <rect x={1} y={1} width={66} height={66} fill={fill} stroke={stroke} strokeWidth={2} rx={5} />
                  {[1,2,3].map(i => (
                    <line key={`h${i}`} x1={2} y1={i*16.5} x2={66} y2={i*16.5} stroke={stroke} strokeWidth={0.8} />
                  ))}
                  {[1,2,3].map(i => (
                    <line key={`v${i}`} x1={i*16.5} y1={2} x2={i*16.5} y2={66} stroke={stroke} strokeWidth={0.8} />
                  ))}
                </svg>
              )}

              <div style={{ fontWeight: 800, fontSize: '0.9rem', color: isLit ? fill : '#fff', transition: 'color 0.3s' }}>
                {label}
              </div>
              <div style={{ fontWeight: 900, fontSize: '1.4rem', color: fill, background: `${fill}18`, borderRadius: 8, padding: '3px 12px' }}>
                {value}
              </div>
              {isLit && (
                <div style={{ fontSize: '0.72rem', color: fill, fontWeight: 600, textAlign: 'center', lineHeight: 1.4, opacity: 0.85 }}>
                  {type === 'unit' && 'means ONE'}
                  {type === 'rod'  && '= 10 units'}
                  {type === 'flat' && '= 100 units'}
                </div>
              )}
            </div>
          );
        })}
      </div>

      <PrimaryBtn onClick={onAdvance}>Got it, let's build →</PrimaryBtn>
    </div>
  );
}

// ── 3. ExploreScreen ──────────────────────────────────────────────────────────
function ExploreScreen({ screen, speak, stopAudio, speaking, loadingAudio, onAdvance, onBack }) {
  const [elapsed,     setElapsed]     = useState(0);
  const [canContinue, setCanContinue] = useState(false);
  const [wsState,     setWsState]     = useState({ total: 0 });
  const minSec = screen.minDurationSec || 60;
  const { narrate } = useCounterNarration(speak);

  // Memoized so BaseTenBlocksWorkspace's useEffect([blocks, onChange]) doesn't
  // re-fire every second from the setElapsed tick → avoids resetting the
  // narration debounce timer on every render.
  const handleWsChange = useCallback(ws => {
    console.log('[workspace/explore] onChange — total:', ws.total);
    setWsState(ws);
    narrate(ws.total);
  }, [narrate]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    speak(screen.audioPrompt);
    return stopAudio;
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    const interval = setInterval(() => {
      setElapsed(t => {
        const next = t + 1;
        if (next >= minSec) setCanContinue(true);
        return next;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [minSec]);

  const remaining = Math.max(0, minSec - elapsed);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <div style={{ padding: '14px 16px 8px', display: 'flex', alignItems: 'center', gap: 10, flexShrink: 0 }}>
        <BackChevron onClick={onBack} />
        <RemiAvatar size={36} speaking={speaking} />
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: '0.82rem', fontWeight: 700, color: ACCENT }}>Free Explore</div>
          <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.4)' }}>
            {canContinue ? 'Ready when you are!' : 'Try each block — unit, rod, flat!'}
          </div>
        </div>
        <SpeakerBtn onClick={() => speak(screen.audioPrompt)} speaking={speaking} loading={loadingAudio} />
      </div>

      <div style={{ flex: 1, minHeight: 0 }}>
        <BaseTenBlocksWorkspace onChange={handleWsChange} />
      </div>

      <div style={{ padding: '12px 16px 20px', flexShrink: 0 }}>
        <PrimaryBtn onClick={onAdvance} disabled={!canContinue}>
          {canContinue ? 'Continue →' : `Explore for ${remaining}s…`}
        </PrimaryBtn>
      </div>
    </div>
  );
}

// ── 4. GuidedTasksScreen ──────────────────────────────────────────────────────
function GuidedTasksScreen({ screen, speak, stopAudio, speaking, loadingAudio, onAdvance, onBack }) {
  const [taskIdx,      setTaskIdx]      = useState(0);
  const [wsState,      setWsState]      = useState({ total: 0 });
  const [feedback,     setFeedback]     = useState(null);
  const [feedbackMsg,  setFeedbackMsg]  = useState('');
  const [wrongCount,   setWrongCount]   = useState(0);
  const [showDemo,     setShowDemo]     = useState(false);
  const [showTeaching, setShowTeaching] = useState(false);

  const tasks = screen.tasks || [];
  const task  = tasks[taskIdx];

  const { narrate: narrateCount, reset: resetNarrate } = useCounterNarration(speak);

  // Track speaking state via ref so handleWsChange (a stable useCallback) can
  // check it without adding speaking to its dep array (which would recreate the
  // callback every time speaking toggles and flood the workspace's onChange effect).
  const speakingRef = useRef(speaking);
  useEffect(() => { speakingRef.current = speaking; }, [speaking]);

  // Memoized onChange so workspace useEffect([blocks, onChange]) only fires
  // on actual block changes, not on every re-render of GuidedTasksScreen.
  // Guard: skip counter narration while Remi is already speaking lesson audio.
  const handleWsChange = useCallback(ws => {
    console.log('[workspace/guided] onChange — total:', ws.total, '| task target:', task?.target);
    setWsState(ws);
    if (!speakingRef.current) narrateCount(ws.total);
  }, [narrateCount]); // eslint-disable-line react-hooks/exhaustive-deps

  // Speak task audio on mount and on task change
  useEffect(() => {
    if (!task) return;
    const t = setTimeout(() => speak(task.audioPrompt), 300);
    return () => { clearTimeout(t); stopAudio(); };
  }, [taskIdx]); // eslint-disable-line react-hooks/exhaustive-deps

  // Reset counter narration when task changes (workspace remounts)
  useEffect(() => {
    resetNarrate();
  }, [taskIdx]); // eslint-disable-line react-hooks/exhaustive-deps

  function advanceTask() {
    stopAudio();
    setFeedback(null);
    setFeedbackMsg('');
    setWrongCount(0);
    setShowDemo(false);
    setShowTeaching(false);
    if (taskIdx < tasks.length - 1) {
      setTaskIdx(i => i + 1);
      setWsState({ total: 0 });
    } else {
      onAdvance();
    }
  }

  // FIX 3: back within sub-tasks goes to previous task; at first task goes to previous screen
  function handleBack() {
    stopAudio();
    if (showTeaching) {
      // If teaching panel is showing, close it and stay on current task
      setShowTeaching(false);
      setFeedback(null);
      setFeedbackMsg('');
      return;
    }
    if (taskIdx > 0) {
      setTaskIdx(i => i - 1);
      setWsState({ total: 0 });
      setFeedback(null);
      setFeedbackMsg('');
      setWrongCount(0);
      setShowDemo(false);
    } else {
      onBack();
    }
  }

  function handleCheck() {
    if (!task || showTeaching) return;
    // Clear previous feedback first so wrong→wrong shows fresh animation
    setFeedback(null);
    setFeedbackMsg('');

    if (wsState.total === task.target) {
      playChime();
      setFeedback('correct');
      setFeedbackMsg('Perfect! That is exactly right.');
      // After Remi celebrates, transition to teaching moment
      speak("Perfect! That's exactly right.", () => {
        setFeedback(null);
        setFeedbackMsg('');
        setShowTeaching(true);
        if (task.teachingMoment?.audioPrompt) {
          speak(task.teachingMoment.audioPrompt);
        }
      });
    } else {
      const newWrong = wrongCount + 1;
      setWrongCount(newWrong);
      setFeedback('wrong');
      const hint = task.wrongHint || `We want ${task.target}. You have ${wsState.total}. Try again.`;
      setFeedbackMsg(hint);
      speak(hint);
      // Wrong feedback STAYS until next check attempt (no auto-dismiss)
      if (newWrong >= 2) setShowDemo(true);
    }
  }

  if (!task) return null;

  const replayAudio = showTeaching && task.teachingMoment?.audioPrompt
    ? task.teachingMoment.audioPrompt
    : task.audioPrompt;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      {/* Header */}
      <div style={{ padding: '12px 16px 8px', flexShrink: 0 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
          <BackChevron onClick={handleBack} />
          <RemiAvatar size={36} speaking={speaking} />
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: '0.73rem', color: 'rgba(255,255,255,0.35)', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
              Task {taskIdx + 1} of {tasks.length}
            </div>
          </div>
          <SpeakerBtn onClick={() => speak(replayAudio)} speaking={speaking} loading={loadingAudio} />
        </div>

        {/* Progress dots */}
        <div style={{ display: 'flex', gap: 6 }}>
          {tasks.map((_, i) => (
            <div key={i} style={{
              height: 4, flex: 1, borderRadius: 2,
              background: i < taskIdx ? ACCENT : i === taskIdx ? `${ACCENT}88` : 'rgba(255,255,255,0.1)',
              transition: 'background 0.3s',
            }} />
          ))}
        </div>

        {/* Task prompt */}
        {!showTeaching && (
          <div style={{ marginTop: 14, fontSize: 'clamp(1.1rem,4.5vw,1.4rem)', fontWeight: 800, color: '#fff', lineHeight: 1.25, letterSpacing: '-0.02em' }}>
            {task.prompt}
          </div>
        )}

        {/* Feedback (only while not in teaching mode) */}
        {!showTeaching && (
          <div style={{ marginTop: 8 }}>
            <FeedbackBanner type={feedback} message={feedbackMsg} />
          </div>
        )}

        {/* "Show me how" button after 2 wrong attempts */}
        {showDemo && !feedback && !showTeaching && (
          <button
            onClick={() => {
              setShowDemo(false);
              const msg = `Here's how: ${task.wrongHint}`;
              speak(msg);
            }}
            style={{
              marginTop: 6, padding: '8px 16px', borderRadius: 10, border: `1.5px solid ${ACCENT}44`,
              background: ACCENT_DIM, color: ACCENT, fontSize: '0.83rem', fontWeight: 600,
              cursor: 'pointer', touchAction: 'manipulation', width: '100%',
            }}
          >
            Show me how →
          </button>
        )}
      </div>

      {/* Workspace — during teaching mode, compact frozen snapshot at fixed height
           so teaching panel can flex to fill the rest of the screen.
           In build mode, workspace fills all remaining space. */}
      {showTeaching ? (
        <div style={{ height: 200, flexShrink: 0 }}>
          <BaseTenBlocksWorkspace
            key={`task-${taskIdx}-frozen`}
            initialState={{ flats: wsState.flats || 0, rods: wsState.rods || 0, units: wsState.units || 0 }}
            readOnly
            compact
            hideCounter
          />
        </div>
      ) : (
        <div style={{ flex: 1, minHeight: 0 }}>
          <BaseTenBlocksWorkspace
            key={`task-${taskIdx}`}
            onChange={handleWsChange}
          />
        </div>
      )}

      {/* Footer: teaching moment OR check button */}
      {showTeaching ? (
        <TeachingMomentPanel task={task} speaking={speaking} onNext={advanceTask} />
      ) : (
        <div style={{ padding: '8px 16px 16px', flexShrink: 0 }}>
          <PrimaryBtn
            onClick={handleCheck}
            disabled={feedback === 'correct' || wsState.total === 0}
          >
            Check My Answer
          </PrimaryBtn>
        </div>
      )}
    </div>
  );
}

// ── 5. ConceptNameScreen ──────────────────────────────────────────────────────
function ConceptNameScreen({ screen, speak, stopAudio, speaking, loadingAudio, onAdvance, onBack }) {
  useEffect(() => {
    speak(screen.audioPrompt);
    return stopAudio;
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', padding: '20px 20px 24px', overflow: 'auto' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
        <BackChevron onClick={onBack} />
        <RemiAvatar size={44} speaking={speaking} />
        <div style={{ flex: 1 }}>
          <h2 style={{ fontSize: 'clamp(1.1rem,4.5vw,1.5rem)', fontWeight: 900, color: '#fff', margin: 0, letterSpacing: '-0.02em' }}>
            {screen.headline}
          </h2>
        </div>
        <SpeakerBtn onClick={() => speak(screen.audioPrompt)} speaking={speaking} loading={loadingAudio} />
      </div>

      {/* Triple representation visual for 247 */}
      <TripleRepVisual />

      {/* Body text */}
      <div style={{
        background: 'rgba(255,255,255,0.04)', border: `1.5px solid ${ACCENT}33`,
        borderRadius: 14, padding: '16px 18px',
        color: 'rgba(255,255,255,0.82)', fontSize: '0.95rem', lineHeight: 1.7,
      }}>
        {screen.body}
      </div>

      <div style={{ flex: 1 }} />
      <div style={{ marginTop: 20 }}>
        <PrimaryBtn onClick={onAdvance}>Got it →</PrimaryBtn>
      </div>
    </div>
  );
}

// ── 6. AppliedProblemsScreen ──────────────────────────────────────────────────
function AppliedProblemsScreen({ screen, speak, stopAudio, speaking, loadingAudio, onAdvance, onBack }) {
  const [probIdx,     setProbIdx]     = useState(0);
  const [wsState,     setWsState]     = useState({ total: 0, blocks: [] });
  const [feedback,    setFeedback]    = useState(null);
  const [feedbackMsg, setFeedbackMsg] = useState('');
  const [tensInput,   setTensInput]   = useState('');
  const [onesInput,   setOnesInput]   = useState('');
  const [tapFeedback,    setTapFeedback]    = useState(null);
  const [highlightBlanks, setHighlightBlanks] = useState(false);

  const problems = screen.problems || [];
  const prob = problems[probIdx];

  useEffect(() => {
    if (!prob) return;
    setFeedback(null);
    setFeedbackMsg('');
    setTapFeedback(null);
    setHighlightBlanks(false);
    setTensInput('');
    setOnesInput('');
    const t = setTimeout(() => speak(prob.audioPrompt), 300);
    return () => { clearTimeout(t); stopAudio(); };
  }, [probIdx]); // eslint-disable-line react-hooks/exhaustive-deps

  function advance() {
    setFeedback(null);
    setFeedbackMsg('');
    setHighlightBlanks(false);
    if (probIdx < problems.length - 1) {
      setProbIdx(i => i + 1);
      setWsState({ total: 0, blocks: [] });
    } else {
      stopAudio();
      onAdvance();
    }
  }

  // FIX 3: back within sub-problems goes to previous problem; at first goes to previous screen
  function handleBack() {
    stopAudio();
    if (probIdx > 0) {
      setProbIdx(i => i - 1);
      setWsState({ total: 0, blocks: [] });
      setFeedback(null);
      setFeedbackMsg('');
      setTapFeedback(null);
      setHighlightBlanks(false);
      setTensInput('');
      setOnesInput('');
    } else {
      onBack();
    }
  }

  function handleTapIdentify(block) {
    if (!prob) return;
    if (block.type === prob.correctBlockType) {
      setTapFeedback('correct');
      setFeedback('correct');
      const msg = prob.correctFeedback || 'Correct!';
      setFeedbackMsg(msg);
      speak(msg, () => setTimeout(advance, 500));
    } else {
      setTapFeedback('wrong');
      setFeedback('wrong');
      setFeedbackMsg(prob.wrongFeedback || 'Not quite. Try a different block.');
      speak(prob.wrongFeedback || 'Not quite. Try a different block.');
      // Wrong stays until they tap again (no auto-dismiss)
      setTimeout(() => { setTapFeedback(null); }, 600);
    }
  }

  function handleBuildCheck() {
    if (!prob) return;
    setFeedback(null);
    setFeedbackMsg('');
    if (wsState.total === prob.target) {
      setFeedback('correct');
      const msg = prob.correctFeedback || 'Correct!';
      setFeedbackMsg(msg);
      speak(msg, () => setTimeout(advance, 500));
    } else {
      setFeedback('wrong');
      setFeedbackMsg(prob.wrongHint || `We want ${prob.target}. Keep trying.`);
      speak(prob.wrongHint || `We want ${prob.target}. Keep trying.`);
      // Wrong stays until next check attempt
    }
  }

  function handleBuildWriteCheck() {
    if (!prob) return;
    setFeedback(null);
    setFeedbackMsg('');
    setHighlightBlanks(false);

    const tensOk  = tensInput.trim() === String(prob.correctTens);
    const onesOk  = onesInput.trim() === String(prob.correctOnes);
    const buildOk = wsState.total === prob.target;
    const blanksOk = tensOk && onesOk;

    if (buildOk && blanksOk) {
      // Case D: both correct
      const msg = `You got it! ${prob.target} = ${prob.correctTens} tens + ${prob.correctOnes} ones.`;
      setFeedback('correct');
      setFeedbackMsg(msg);
      speak(`You got it! ${prob.target} equals ${prob.correctTens} tens plus ${prob.correctOnes} ones.`, () => setTimeout(advance, 500));
    } else if (buildOk && !blanksOk) {
      // Case A: blocks right, blanks wrong/empty
      const msg = "Your blocks look perfect! Now fill in the blanks below — how many rods did you use? How many units?";
      setFeedback('wrong');
      setFeedbackMsg(msg);
      speak(msg);
      setHighlightBlanks(true);
    } else if (!buildOk && blanksOk) {
      // Case B: blanks right, blocks wrong
      const msg = `Your blanks are right! But check your blocks — you built ${wsState.total}. We want ${prob.target}.`;
      setFeedback('wrong');
      setFeedbackMsg(msg);
      speak(msg);
    } else {
      // Case C: both wrong
      const msg = `Let's check both. We're building ${prob.target} — that's ${prob.correctTens} tens (rods) and ${prob.correctOnes} ones (units). Try again.`;
      setFeedback('wrong');
      setFeedbackMsg(msg);
      speak(msg);
    }
  }

  if (!prob) return null;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      {/* Header */}
      <div style={{ padding: '12px 16px 6px', flexShrink: 0 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
          <BackChevron onClick={handleBack} />
          <RemiAvatar size={32} speaking={speaking} />
          <div style={{ flex: 1 }}>
            <span style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.3)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
              Problem {probIdx + 1} of {problems.length}
            </span>
          </div>
          <SpeakerBtn onClick={() => speak(prob.audioPrompt)} speaking={speaking} loading={loadingAudio} />
        </div>

        {prob.displayNumber && (
          <div style={{ fontSize: '2.2rem', fontWeight: 900, color: ACCENT, letterSpacing: '-0.03em', marginBottom: 4 }}>
            {prob.displayNumber}
          </div>
        )}

        <div style={{ fontSize: 'clamp(0.9rem,3.8vw,1.15rem)', fontWeight: 700, color: '#fff', lineHeight: 1.3, marginBottom: 8 }}>
          {prob.prompt}
        </div>

        <FeedbackBanner type={feedback} message={feedbackMsg} />
      </div>

      {/* Workspace — tap-identify uses full scale so the individual blocks are
           large enough to tap accurately. Build/build-write stay compact so
           multi-row layouts fit on smaller phones. */}
      <div style={{ flex: 1, minHeight: 0 }}>
        <BaseTenBlocksWorkspace
          key={`prob-${probIdx}`}
          initialState={prob.preload || null}
          compact={prob.subtype !== 'tap-identify'}
          readOnly={prob.subtype === 'tap-identify'}
          hideCounter={prob.subtype === 'tap-identify'}
          onBlockTap={prob.subtype === 'tap-identify' ? handleTapIdentify : undefined}
          onChange={setWsState}
        />
      </div>

      {/* Build-write blanks */}
      {prob.subtype === 'build-write' && (
        <div style={{ padding: '8px 16px', flexShrink: 0 }}>
          <div style={{ background: 'rgba(255,255,255,0.05)', border: '1.5px solid rgba(255,255,255,0.1)', borderRadius: 14, padding: '14px 16px', display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap', fontSize: '1rem', color: 'rgba(255,255,255,0.8)' }}>
            <span>{prob.target} =</span>
            <input
              type="number" inputMode="numeric" pattern="[0-9]*"
              value={tensInput} onChange={e => { setTensInput(e.target.value); setHighlightBlanks(false); }}
              placeholder="?"
              style={{
                width: 48, height: 38, textAlign: 'center', borderRadius: 8,
                border: `2px solid ${highlightBlanks ? '#FBBF24' : `${ACCENT}44`}`,
                background: highlightBlanks ? 'rgba(251,191,36,0.12)' : ACCENT_DIM,
                color: '#fff', fontWeight: 700, fontSize: '1rem', fontFamily: FONT,
                boxShadow: highlightBlanks ? '0 0 10px rgba(251,191,36,0.4)' : 'none',
                transition: 'border-color 0.3s, box-shadow 0.3s',
              }}
            />
            <span>tens +</span>
            <input
              type="number" inputMode="numeric" pattern="[0-9]*"
              value={onesInput} onChange={e => { setOnesInput(e.target.value); setHighlightBlanks(false); }}
              placeholder="?"
              style={{
                width: 48, height: 38, textAlign: 'center', borderRadius: 8,
                border: `2px solid ${highlightBlanks ? '#FBBF24' : `${ACCENT}44`}`,
                background: highlightBlanks ? 'rgba(251,191,36,0.12)' : ACCENT_DIM,
                color: '#fff', fontWeight: 700, fontSize: '1rem', fontFamily: FONT,
                boxShadow: highlightBlanks ? '0 0 10px rgba(251,191,36,0.4)' : 'none',
                transition: 'border-color 0.3s, box-shadow 0.3s',
              }}
            />
            <span>ones</span>
          </div>
        </div>
      )}

      {/* Footer button — only for build/build-write; tap-identify auto-advances */}
      {(prob.subtype === 'build' || prob.subtype === 'build-write') && (
        <div style={{ padding: '8px 16px 16px', flexShrink: 0 }}>
          <PrimaryBtn
            onClick={prob.subtype === 'build-write' ? handleBuildWriteCheck : handleBuildCheck}
            disabled={feedback === 'correct' || wsState.total === 0}
          >
            Check My Answer
          </PrimaryBtn>
        </div>
      )}
    </div>
  );
}

// ── 7. QuickCheckScreen ───────────────────────────────────────────────────────
function QuickCheckScreen({ screen, speak, stopAudio, speaking, loadingAudio, onAdvance, onBack, childName }) {
  const [qIdx,       setQIdx]      = useState(0);
  const [selected,   setSelected]  = useState(null);
  const [fillAnswer, setFillAnswer] = useState('');
  const [feedback,   setFeedback]  = useState(null);   // null | 'correct' | 'wrong'
  const [scored,     setScored]    = useState(false);  // prevent double-scoring
  const [score,      setScore]     = useState(0);

  const questions = screen.questions || [];
  const q = questions[qIdx];

  // Speak quiz intro (first q) or per-question audio on q change
  useEffect(() => {
    if (!q) return;
    if (qIdx === 0) {
      const intro = (screen.quizIntroAudio || 'Quick check time! Four short questions.')
        .replace(/\{name\}/g, childName || 'there');
      speak(intro, () => {
        if (q.audioPrompt) speak(q.audioPrompt);
      });
    } else {
      if (q.audioPrompt) speak(q.audioPrompt);
    }
  }, [qIdx]); // eslint-disable-line react-hooks/exhaustive-deps

  // Reset per-question state when question changes
  useEffect(() => {
    setSelected(null);
    setFillAnswer('');
    setFeedback(null);
    setScored(false);
  }, [qIdx]);

  function advanceQuestion() {
    stopAudio();
    if (qIdx < questions.length - 1) {
      setQIdx(i => i + 1);
    } else {
      onAdvance();
    }
  }

  // FIX 3: back within questions or exit to previous screen
  function handleBack() {
    stopAudio();
    if (qIdx > 0) {
      setQIdx(i => i - 1);
    } else {
      onBack();
    }
  }

  function checkAnswer(answer) {
    if (!q || feedback === 'correct') return;
    const isCorrect = answer.trim() === q.correct;
    setFeedback(isCorrect ? 'correct' : 'wrong');

    if (isCorrect) {
      if (!scored) { setScore(s => s + 1); setScored(true); }
      const explanation = q.explanation || 'Correct!';
      speak(explanation, () => setTimeout(advanceQuestion, 500));
    } else {
      speak('Not quite — try again!');
      // Wrong stays until they answer again (no auto-advance)
    }
  }

  function handleOptionTap(opt) {
    if (feedback === 'correct') return; // locked after correct
    setSelected(opt);
    setFeedback(null); // clear previous wrong before re-checking
    // Small tick so state clears before the new check renders
    setTimeout(() => checkAnswer(opt), 10);
  }

  function handleFillSubmit() {
    if (feedback === 'correct') return;
    checkAnswer(fillAnswer);
  }

  if (!q) return null;

  const wsSubtype = q.subtype === 'workspace-read' || q.subtype === 'workspace-fill';

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      {/* Header */}
      <div style={{ padding: '12px 16px 8px', flexShrink: 0 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
          <BackChevron onClick={handleBack} />
          <RemiAvatar size={32} speaking={speaking} />
          <span style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.3)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
            Q{qIdx + 1} of {questions.length}
          </span>
          <div style={{ flex: 1 }} />
          <SpeakerBtn onClick={() => speak(q.audioPrompt || q.prompt)} speaking={speaking} loading={loadingAudio} />
        </div>
        <div style={{ display: 'flex', gap: 5 }}>
          {questions.map((_, i) => (
            <div key={i} style={{ height: 4, flex: 1, borderRadius: 2, background: i < qIdx ? '#34D399' : i === qIdx ? `${ACCENT}88` : 'rgba(255,255,255,0.1)', transition: 'background 0.3s' }} />
          ))}
        </div>
      </div>

      {/* Workspace — compact so all pre-loaded blocks fit (e.g. 3 flats + 2 rods +
           6 units needs ~183px at 50% scale). hideCounter prevents giving away answer. */}
      {wsSubtype && (
        <div style={{ height: 210, flexShrink: 0, margin: '0 12px' }}>
          <BaseTenBlocksWorkspace
            key={`q-${qIdx}`}
            initialState={q.preload}
            readOnly
            compact
            hideCounter
          />
        </div>
      )}

      {/* Question prompt + feedback */}
      <div style={{ padding: '10px 16px 8px', flexShrink: 0 }}>
        <div style={{ fontSize: 'clamp(1rem,4vw,1.2rem)', fontWeight: 800, color: '#fff', lineHeight: 1.35 }}>
          {q.prompt}
        </div>
        {feedback && (
          <FeedbackBanner
            type={feedback}
            message={feedback === 'correct'
              ? (q.explanation || 'Correct!')
              : 'Not quite — try again!'}
          />
        )}
      </div>

      {/* Answer area */}
      <div style={{ flex: 1, padding: '0 16px', display: 'flex', flexDirection: 'column', gap: 10 }}>
        {/* Multiple choice */}
        {(q.subtype === 'text-choice' || q.subtype === 'workspace-read') && (q.options || []).map(opt => {
          const isSelected   = selected === opt;
          const isCorrectOpt = opt === q.correct;
          let bg = 'rgba(255,255,255,0.05)';
          let border = 'rgba(255,255,255,0.1)';
          let color = '#fff';
          if (feedback === 'correct' && isSelected && isCorrectOpt)  { bg = 'rgba(52,211,153,0.18)'; border = '#34D399'; color = '#34D399'; }
          if (feedback === 'wrong'   && isSelected && !isCorrectOpt) { bg = 'rgba(239,68,68,0.14)';  border = '#EF4444'; color = '#FCA5A5'; }
          // Don't highlight correct option on wrong — preserves challenge for retry

          return (
            <button
              key={opt}
              onClick={() => handleOptionTap(opt)}
              disabled={feedback === 'correct'}
              style={{
                width: '100%', padding: '14px 18px', borderRadius: 13,
                border: `1.5px solid ${border}`, background: bg, color,
                fontWeight: 700, fontSize: '0.95rem',
                cursor: feedback === 'correct' ? 'default' : 'pointer',
                textAlign: 'left', transition: 'background 0.15s, border-color 0.15s',
                touchAction: 'manipulation', fontFamily: FONT,
              }}
            >
              {opt}
            </button>
          );
        })}

        {/* Fill-in (standalone or workspace-fill) */}
        {(q.subtype === 'fill-in' || q.subtype === 'workspace-fill') && (
          <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
            <input
              type="number" inputMode="numeric" pattern="[0-9]*"
              value={fillAnswer}
              onChange={e => { setFillAnswer(e.target.value); if (feedback === 'wrong') setFeedback(null); }}
              onKeyDown={e => e.key === 'Enter' && feedback !== 'correct' && handleFillSubmit()}
              placeholder="Type your answer"
              disabled={feedback === 'correct'}
              autoFocus
              style={{
                flex: 1, height: 52, padding: '0 16px', borderRadius: 13,
                border: `1.5px solid ${ACCENT}44`, background: ACCENT_DIM,
                color: '#fff', fontWeight: 700, fontSize: '1.1rem', fontFamily: FONT,
              }}
            />
            <div style={{ width: 60 }}>
              <PrimaryBtn onClick={handleFillSubmit} disabled={feedback === 'correct' || !fillAnswer}>
                →
              </PrimaryBtn>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// ── 8. RealWorldScreen ────────────────────────────────────────────────────────
function RealWorldScreen({ screen, speak, stopAudio, speaking, loadingAudio, onAdvance, onBack }) {
  useEffect(() => {
    speak(screen.audioPrompt);
    return stopAudio;
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', padding: '28px 24px', gap: 20 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <BackChevron onClick={onBack} />
        <RemiAvatar size={52} speaking={speaking} />
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 'clamp(1.2rem,5vw,1.6rem)', fontWeight: 900, color: '#fff', letterSpacing: '-0.02em' }}>
            {screen.headline}
          </div>
        </div>
        <SpeakerBtn onClick={() => speak(screen.audioPrompt)} speaking={speaking} loading={loadingAudio} />
      </div>

      <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.75)', lineHeight: 1.7, margin: 0 }}>
        {screen.body}
      </p>

      <div style={{ background: `${ACCENT}12`, border: `1.5px solid ${ACCENT}33`, borderRadius: 16, padding: '18px 20px' }}>
        <div style={{ fontSize: '0.72rem', fontWeight: 700, color: ACCENT, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 8 }}>
          Family Adventure
        </div>
        <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.8)', lineHeight: 1.65, margin: 0 }}>
          {screen.familyAdventure}
        </p>
      </div>

      <div style={{ flex: 1 }} />
      <PrimaryBtn onClick={onAdvance}>I'm done →</PrimaryBtn>
    </div>
  );
}

// ── 9. CelebrationScreen ──────────────────────────────────────────────────────
function CelebrationScreen({ screen, speak, stopAudio, speaking, loadingAudio, onAdvance }) {
  useEffect(() => {
    playFanfare();
    speak(screen.audioPrompt);
    return stopAudio;
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', padding: '32px 24px', alignItems: 'center', justifyContent: 'center', textAlign: 'center', gap: 20 }}>
      <div>
        <div style={{ fontSize: '1.8rem', fontWeight: 900, color: '#fff', letterSpacing: '-0.02em' }}>
          {screen.badge}
        </div>
        <div style={{ fontSize: '0.85rem', color: ACCENT, fontWeight: 700, marginTop: 4 }}>
          Badge Earned
        </div>
      </div>

      <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(250,204,21,0.12)', border: '1.5px solid rgba(250,204,21,0.3)', borderRadius: 20, padding: '8px 20px' }}>
        <span style={{ fontSize: '1.4rem', lineHeight: 1 }}>⚡</span>
        <span style={{ fontWeight: 800, fontSize: '1.1rem', color: '#FCD34D' }}>+{screen.xp} XP</span>
      </div>

      <RemiAvatar size={56} speaking={speaking} />
      <SpeakerBtn onClick={() => speak(screen.audioPrompt)} speaking={speaking} loading={loadingAudio} />

      <div style={{ width: '100%', maxWidth: 340 }}>
        <PrimaryBtn onClick={onAdvance}>Back to lessons</PrimaryBtn>
      </div>
    </div>
  );
}

// ══════════════════════════════════════════════════════════════════════════════
// Main Player
// ══════════════════════════════════════════════════════════════════════════════
export default function MathLessonPlayer() {
  const { lessonId } = useParams();
  const navigate = useNavigate();

  const child     = getCurrentChild();
  const childName = child?.name || 'there';

  const lesson = LESSON_REGISTRY[lessonId];
  const [screenIdx, setScreenIdx] = useState(0);
  const { speak, stopAudio, speaking, loadingAudio } = useAudio(childName);

  if (!lesson) {
    return (
      <div style={{ position: 'fixed', inset: 0, background: BG, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontFamily: FONT }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '2rem', marginBottom: 12 }}>🔍</div>
          <p>Lesson not found: {lessonId}</p>
          <button onClick={() => navigate(-1)} style={{ marginTop: 16, padding: '10px 24px', borderRadius: 10, border: 'none', background: ACCENT, color: '#000', fontWeight: 700, cursor: 'pointer' }}>
            Go back
          </button>
        </div>
      </div>
    );
  }

  const screens = lesson.screens;
  const screen  = screens[screenIdx];

  function advance() {
    if (screenIdx < screens.length - 1) {
      setScreenIdx(i => i + 1);
    } else {
      if (child) {
        try {
          const saved = JSON.parse(localStorage.getItem('coreverse_progress') || '{}');
          const key   = `math__3`;
          saved[key]  = Math.max((saved[key] || 0), 1);
          localStorage.setItem('coreverse_progress', JSON.stringify(saved));
        } catch { /* ok */ }
      }
      navigate('/child/subject/math');
    }
  }

  // Back navigation: decrement screen, or exit lesson on Welcome screen (FIX 6)
  function goBack() {
    stopAudio();
    if (screenIdx > 0) {
      setScreenIdx(i => i - 1);
    } else {
      navigate('/child/subject/math');
    }
  }

  // Each screen handles its own back button with sub-state awareness.
  // Back buttons in screens call onBack (this goBack) when they've exhausted internal state.
  const sharedProps = { screen, speak, stopAudio, speaking, loadingAudio, onAdvance: advance, onBack: goBack, childName };

  return (
    <div style={{ position: 'fixed', inset: 0, background: BG, color: '#fff', fontFamily: FONT, display: 'flex', flexDirection: 'column' }}>
      <style>{GLOBAL_STYLES}</style>

      <ProgressBar current={screenIdx} total={screens.length} />

      <div style={{ flex: 1, minHeight: 0, overflow: 'hidden', marginTop: 3 }}>
        {screen.type === 'welcome'          && <WelcomeScreen         {...sharedProps} />}
        {screen.type === 'block-intro'      && <BlockIntroScreen      {...sharedProps} />}
        {screen.type === 'explore'          && <ExploreScreen         {...sharedProps} />}
        {screen.type === 'guided-tasks'     && <GuidedTasksScreen     {...sharedProps} />}
        {screen.type === 'concept-name'     && <ConceptNameScreen     {...sharedProps} />}
        {screen.type === 'applied-problems' && <AppliedProblemsScreen {...sharedProps} />}
        {screen.type === 'quick-check'      && <QuickCheckScreen      {...sharedProps} />}
        {screen.type === 'real-world'       && <RealWorldScreen       {...sharedProps} />}
        {screen.type === 'celebration'      && <CelebrationScreen     {...sharedProps} />}
      </div>
    </div>
  );
}
