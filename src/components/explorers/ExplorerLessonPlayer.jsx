// ============================================================
// ExplorerLessonPlayer — Explorers (ages 6-8) lesson engine
// Magazine + workbook + game format. NO auto-advance.
// Manual navigation. Karaoke via ElevenLabs alignment data.
// ============================================================
import { useState, useEffect, useRef, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getCurrentChild } from '../../lib/storage';
import { getAvatar } from '../../lib/constants';
import { getVoiceForGuide, getModelForGuide } from '../../data/guideVoices';
import { unlockAudio, sfx } from '../games/sounds';

import ExplorerWelcomeScreen  from './ExplorerWelcomeScreen';
import MagazineScreen         from './MagazineScreen';
import InteractiveExplore     from './InteractiveExplore';
import MasteryQuiz            from './MasteryQuiz';
import RealWorldConnection    from './RealWorldConnection';
import ExplorerCelebration    from './ExplorerCelebration';
import ExplorerNavigation     from './ExplorerNavigation';
import VocabPopup             from './VocabPopup';

// ── Lesson data (screen-based format, ExplorerLessonPlayer only) ───────────────
import INNERWORLD_SCREENS from '../../data/innerworld_explorer_screens';

const EXPLORER_DATA = {
  'inner-world': INNERWORLD_SCREENS,
};

// ── ElevenLabs character timestamps → per-word start times ────────────────────
function charAlignmentToWordStarts(text, alignment) {
  try {
    const starts = alignment?.character_start_times_seconds;
    if (!starts?.length) return null;
    const words = text.split(/\s+/).filter(Boolean);
    const wordStarts = [];
    let from = 0;
    for (const word of words) {
      const idx = text.indexOf(word, from);
      if (idx === -1 || idx >= starts.length) return null;
      wordStarts.push(starts[idx]);
      from = idx + word.length;
    }
    return wordStarts.length === words.length ? wordStarts : null;
  } catch {
    return null;
  }
}

// ── Resolve speech text per screen type ───────────────────────────────────────
function getScreenText(screen, childName) {
  const r = t => (t || '').replace(/\{name\}/g, childName);
  switch (screen?.type) {
    case 'welcome':     return r(screen.guideText);
    case 'magazine':    return (screen.paragraphs || []).join(' ');
    case 'interactive': return r(screen.guideText);
    case 'quiz':        return r(screen.guideText);
    case 'real-world':  return r(screen.guideText);
    case 'celebration': return r(screen.message);
    default:            return '';
  }
}

// ─────────────────────────────────────────────────────────────────────────────
export default function ExplorerLessonPlayer() {
  const { subjectId, lessonId } = useParams();
  const navigate     = useNavigate();
  const child        = getCurrentChild();
  const childName    = child?.name || 'friend';

  // Resolve lesson
  const subjectData  = EXPLORER_DATA[subjectId];
  const lesson       = subjectData?.lessons?.find(l => l.id === lessonId) || null;
  const guide        = subjectData?.guide || 'sage';
  const guideAvatar  = getAvatar(guide);
  const screens      = lesson?.screens || [];
  const total        = screens.length;

  // ── State ─────────────────────────────────────────────────────────────────
  const [screenIdx,    setScreenIdx]    = useState(0);
  const [speaking,     setSpeaking]     = useState(false);
  const [loadingAudio, setLoadingAudio] = useState(false);
  const [audioEnabled, setAudioEnabled] = useState(true);
  const [karaokeWords, setKaraokeWords] = useState([]);
  const [karaokeIdx,   setKaraokeIdx]   = useState(-1);
  const [vocabOpen,     setVocabOpen]     = useState(null);
  const [showVocabHint, setShowVocabHint] = useState(false);
  const [countdown,     setCountdown]     = useState(null); // null | 3 | 2 | 1

  // ── Refs ──────────────────────────────────────────────────────────────────
  const persistentAudioRef        = useRef(null);
  const audioListenersCleanupRef  = useRef(null);
  const currentAbortControllerRef = useRef(null);
  const speakGenRef               = useRef(0);
  const blobUrlRef                = useRef(null);
  const karaokeRef                = useRef([]);
  const lastSpokenText            = useRef('');
  const lastSpeakTime             = useRef(0);
  const audioEnabledRef           = useRef(true);   // mirrors audioEnabled; read inside speak()
  const countdownIntervalRef      = useRef(null);
  const screenIdxRef              = useRef(0);      // always-current screenIdx for interval callbacks
  const countdownPausedRef        = useRef(false);  // true when vocab popup interrupted countdown
  const startCountdownFnRef       = useRef(null);   // points to current screen's startCountdownForScreen
  audioEnabledRef.current = audioEnabled;
  screenIdxRef.current    = screenIdx;

  // Voice refs — always current, avoids stale closure in speak()
  const voiceIdRef = useRef(getVoiceForGuide(guide));
  const modelIdRef = useRef(getModelForGuide(guide));
  voiceIdRef.current = getVoiceForGuide(guide);
  modelIdRef.current = getModelForGuide(guide);

  // ── iOS gesture unlock ────────────────────────────────────────────────────
  useEffect(() => {
    let unlocked = false;
    function unlock() {
      if (unlocked) return;
      unlocked = true;
      // Pre-authorize Web Audio API for iOS (must run synchronously in gesture)
      unlockAudio();
      if (!persistentAudioRef.current) {
        const el = new Audio();
        el.playsInline = true;
        el.preload     = 'auto';
        el.setAttribute('webkit-playsinline', 'true');
        el.setAttribute('playsinline', 'true');
        persistentAudioRef.current = el;
      }
      document.removeEventListener('touchstart', unlock, true);
      document.removeEventListener('click',      unlock, true);
    }
    document.addEventListener('touchstart', unlock, { capture: true, passive: true });
    document.addEventListener('click',      unlock, { capture: true, passive: true });
    return () => {
      document.removeEventListener('touchstart', unlock, true);
      document.removeEventListener('click',      unlock, true);
    };
  }, []);

  // ── Cleanup on unmount ────────────────────────────────────────────────────
  useEffect(() => () => {
    currentAbortControllerRef.current?.abort();
    audioListenersCleanupRef.current?.();
    if (persistentAudioRef.current) {
      persistentAudioRef.current.pause();
      persistentAudioRef.current.src = '';
    }
    if (blobUrlRef.current) { URL.revokeObjectURL(blobUrlRef.current); blobUrlRef.current = null; }
    karaokeRef.current.forEach(id => clearTimeout(id));
  }, []);

  // ── speak() ───────────────────────────────────────────────────────────────
  // Simplified vs GameLessonPlayer: no auto-advance, no fallback timer loop,
  // no readOptions narration. Just fetch → play → karaoke → onDone.
  const speak = useCallback(async (text, onDone, options = {}) => {
    const { noKaraoke = false } = options;
    if (!text) { onDone?.(); return; }
    if (!audioEnabledRef.current) { onDone?.(); return; }

    // 500ms debounce for StrictMode / rapid re-calls
    const now = Date.now();
    if (text === lastSpokenText.current && now - lastSpeakTime.current < 500) {
      onDone?.(); return;
    }
    lastSpokenText.current = text;
    lastSpeakTime.current  = now;

    const gen = ++speakGenRef.current;

    // Cancel any in-flight request
    currentAbortControllerRef.current?.abort();
    const abortController = new AbortController();
    currentAbortControllerRef.current = abortController;

    // Detach listeners and reset audio element
    audioListenersCleanupRef.current?.();
    audioListenersCleanupRef.current = null;
    const elAtCancel = persistentAudioRef.current;
    if (elAtCancel) {
      elAtCancel.onended      = null;
      elAtCancel.onerror      = null;
      elAtCancel.ontimeupdate = null;
      elAtCancel.onplay       = null;
      elAtCancel.pause();
      elAtCancel.src = '';
      elAtCancel.load();
    }

    // Clear karaoke
    karaokeRef.current.forEach(id => clearTimeout(id));
    karaokeRef.current = [];
    setKaraokeIdx(-1);
    setKaraokeWords([]);
    setSpeaking(true);
    setLoadingAudio(true);

    let done = false;
    const finish = () => {
      if (done) return;
      done = true;
      setSpeaking(false);
      setLoadingAudio(false);
      onDone?.();
    };

    // Dead-man's switch — 35s max (prevents permanent stall on broken audio)
    const deadman = setTimeout(() => finish(), 35000);

    try {
      const voiceId = voiceIdRef.current;
      const modelId = modelIdRef.current;

      const res = await fetch('/.netlify/functions/nova-speak', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify({ text, voiceId, ...(modelId && { modelId }) }),
        signal:  abortController.signal,
      });
      if (!res.ok) throw new Error('tts-unavailable');

      const alignmentHeader = res.headers.get('X-Alignment');
      const alignment = alignmentHeader ? JSON.parse(alignmentHeader) : null;
      const blob = await res.blob();

      if (gen !== speakGenRef.current) {
        clearTimeout(deadman); onDone?.(); return;
      }

      if (blobUrlRef.current) { URL.revokeObjectURL(blobUrlRef.current); blobUrlRef.current = null; }
      const blobUrl = URL.createObjectURL(blob);
      blobUrlRef.current = blobUrl;

      // Create audio element if not yet created (pre-gesture fallback)
      if (!persistentAudioRef.current) {
        const el = new Audio();
        el.playsInline = true;
        el.preload     = 'auto';
        el.setAttribute('webkit-playsinline', 'true');
        el.setAttribute('playsinline', 'true');
        persistentAudioRef.current = el;
      }
      const el = persistentAudioRef.current;
      el.src = blobUrl;
      el.load();

      // ── Karaoke ─────────────────────────────────────────────────────────
      if (!noKaraoke) {
        const kWords = text.split(/\s+/).filter(Boolean);
        if (kWords.length >= 2) {
          setKaraokeWords(kWords);
          setKaraokeIdx(-1);
          const wordStarts = charAlignmentToWordStarts(text, alignment);
          if (wordStarts && wordStarts.length === kWords.length) {
            // Accurate path: timeupdate drives per-word highlight
            let lastKi = -1;
            el.ontimeupdate = () => {
              const t = el.currentTime;
              let ki = -1;
              for (let i = 0; i < wordStarts.length; i++) {
                if (wordStarts[i] <= t) ki = i; else break;
              }
              if (ki !== lastKi) { lastKi = ki; setKaraokeIdx(ki); }
            };
          } else {
            // Fallback: proportional timeout estimation
            el.onplay = () => {
              const dur = (Number.isFinite(el.duration) && el.duration > 0 ? el.duration : null) || kWords.length * 0.40;
              if (!(dur > 0)) return;
              karaokeRef.current.forEach(id => clearTimeout(id));
              karaokeRef.current = [];
              const totalChars = kWords.reduce((s, w) => s + w.length, 0);
              const msPerChar  = (dur * 1000) / totalChars;
              let cumMs = 0;
              const ids = kWords.map((word, i) => {
                const id = setTimeout(() => setKaraokeIdx(i), cumMs);
                cumMs += Math.max(150, word.length * msPerChar);
                return id;
              });
              ids.push(setTimeout(() => setKaraokeIdx(-1), cumMs + 300));
              karaokeRef.current = ids;
            };
          }
        }
      }

      // Playing event → clear loading indicator
      const onPlaying = () => setLoadingAudio(false);
      el.addEventListener('playing', onPlaying);
      audioListenersCleanupRef.current = () => el.removeEventListener('playing', onPlaying);

      el.onended = () => {
        clearTimeout(deadman);
        if (blobUrlRef.current) { URL.revokeObjectURL(blobUrlRef.current); blobUrlRef.current = null; }
        karaokeRef.current.forEach(id => clearTimeout(id));
        karaokeRef.current = [];
        setKaraokeIdx(-1);
        setKaraokeWords([]);
        finish();
      };
      el.onerror = () => { clearTimeout(deadman); finish(); };

      const playErr = await el.play().catch(err => err);
      if (playErr instanceof Error) { clearTimeout(deadman); finish(); }

    } catch (e) {
      if (e?.name === 'AbortError') { clearTimeout(deadman); return; }
      clearTimeout(deadman);
      finish();
    }
  }, []); // no deps — reads all values via refs

  // ── Stop all audio immediately ────────────────────────────────────────────
  const stopAudio = useCallback(() => {
    currentAbortControllerRef.current?.abort();
    audioListenersCleanupRef.current?.();
    audioListenersCleanupRef.current = null;
    if (persistentAudioRef.current) { persistentAudioRef.current.pause(); }
    karaokeRef.current.forEach(id => clearTimeout(id));
    karaokeRef.current = [];
    setSpeaking(false);
    setLoadingAudio(false);
    setKaraokeIdx(-1);
    setKaraokeWords([]);
  }, []);

  // ── Cancel auto-advance countdown ────────────────────────────────────────
  const cancelCountdown = useCallback(() => {
    if (countdownIntervalRef.current) {
      clearInterval(countdownIntervalRef.current);
      countdownIntervalRef.current = null;
      console.log('[AUTO-ADVANCE] Cancelled by user tap');
    }
    setCountdown(null);
  }, []);

  // ── Pause / resume countdown when vocab popup opens / closes ─────────────
  useEffect(() => {
    if (vocabOpen) {
      // Popup opened — pause countdown if it's running
      if (countdownIntervalRef.current) {
        clearInterval(countdownIntervalRef.current);
        countdownIntervalRef.current = null;
        countdownPausedRef.current = true;
        setCountdown(null);
        console.log('[AUTO-ADVANCE] Paused — vocab popup open');
      }
    } else if (countdownPausedRef.current) {
      // Popup closed after having paused a countdown — restart from 3
      countdownPausedRef.current = false;
      console.log('[AUTO-ADVANCE] Resumed — vocab popup closed');
      startCountdownFnRef.current?.();
    }
  }, [vocabOpen]); // eslint-disable-line react-hooks/exhaustive-deps

  // ── Speak on screen change ─────────────────────────────────────────────────
  useEffect(() => {
    if (!screens.length) return;
    const screen = screens[screenIdx];
    let cancelled = false;
    const timers  = [];

    // Stop any existing countdown when screen changes; reset popup-pause flag
    if (countdownIntervalRef.current) {
      clearInterval(countdownIntervalRef.current);
      countdownIntervalRef.current = null;
    }
    setCountdown(null);
    countdownPausedRef.current = false;
    startCountdownFnRef.current = null;

    // Reset karaoke + hint
    karaokeRef.current.forEach(id => clearTimeout(id));
    karaokeRef.current = [];
    setKaraokeIdx(-1);
    setKaraokeWords([]);
    setShowVocabHint(false);

    const cleanup = () => {
      cancelled = true;
      timers.forEach(clearTimeout);
      currentAbortControllerRef.current?.abort();
      if (countdownIntervalRef.current) {
        clearInterval(countdownIntervalRef.current);
        countdownIntervalRef.current = null;
      }
      setCountdown(null);
    };

    if (!audioEnabled) return cleanup;

    const r = t => (t || '').replace(/\{name\}/g, childName);

    // Auto-advance: starts a 3→2→1 countdown then navigates, for welcome + magazine only.
    // Also stored in startCountdownFnRef so the vocabOpen effect can restart it.
    function startCountdownForScreen() {
      if (cancelled) return;
      let n = 3;
      setCountdown(n);
      countdownIntervalRef.current = setInterval(() => {
        if (cancelled) {
          clearInterval(countdownIntervalRef.current);
          countdownIntervalRef.current = null;
          setCountdown(null);
          return;
        }
        n--;
        if (n <= 0) {
          clearInterval(countdownIntervalRef.current);
          countdownIntervalRef.current = null;
          setCountdown(null);
          console.log(`[AUTO-ADVANCE] Screen ${screenIdx} (${screen.type}) auto-advanced after countdown`);
          if (screenIdxRef.current < total - 1) {
            setScreenIdx(prev => prev + 1);
          } else {
            navigate(`/child/subject/${subjectId}`);
          }
        } else {
          setCountdown(n);
        }
      }, 1000);
    }
    // Expose so vocabOpen effect can restart the countdown after popup closes
    startCountdownFnRef.current = startCountdownForScreen;

    if (screen.type === 'magazine') {
      // Sequence: headline (noKaraoke) → 500ms → paragraphs (karaoke) → vocab hint → countdown
      const headline = screen.headline || '';
      const paraText = (screen.paragraphs || []).join(' ');

      console.log(`[TTS] Screen ${screenIdx} magazine — Reading title: "${headline}"`);
      speak(headline, () => {
        if (cancelled) return;
        const t1 = setTimeout(() => {
          if (cancelled) return;
          console.log(`[TTS] Screen ${screenIdx} magazine — Reading paragraphs: "${paraText.slice(0, 60)}..."`);
          speak(paraText, () => {
            if (cancelled) return;
            // One-time vocab hint
            if (screen.vocab?.length > 0 && !localStorage.getItem('explorer_vocab_hint_shown')) {
              setShowVocabHint(true);
              // 5s safety dismiss even if hint audio fails
              const tHint5s = setTimeout(() => {
                if (!cancelled) {
                  setShowVocabHint(false);
                  localStorage.setItem('explorer_vocab_hint_shown', 'true');
                }
              }, 5000);
              timers.push(tHint5s);
              const hintText = "See those underlined words? Tap any of them to hear what they mean!";
              speak(hintText, () => {
                if (cancelled) return;
                localStorage.setItem('explorer_vocab_hint_shown', 'true');
                const tHide = setTimeout(() => { if (!cancelled) setShowVocabHint(false); }, 1500);
                timers.push(tHide);
                // Start countdown after hint
                const tCD = setTimeout(() => startCountdownForScreen(), 1600);
                timers.push(tCD);
              }, { noKaraoke: true });
            } else {
              startCountdownForScreen();
            }
          });
        }, 500);
        timers.push(t1);
      }, { noKaraoke: true });

    } else if (screen.type === 'real-world') {
      // Sequence:
      //   guideText (karaoke) → 400ms
      //   → "Family Adventure" title (noKaraoke) → 300ms
      //   → familyAdventure description (karaoke) → 400ms
      //   → "Create Something" title (noKaraoke) → 300ms
      //   → creativePrompt description (karaoke)
      const guideText       = r(screen.guideText);
      const familyAdventure = screen.familyAdventure || '';
      const creativePrompt  = screen.creativePrompt  || '';

      speak(guideText, () => {
        if (cancelled) return;
        const t1 = setTimeout(() => {
          if (cancelled) return;
          console.log('[TTS] Real-world card title: "Family Adventure"');
          speak('Family Adventure', () => {
            if (cancelled) return;
            const t2 = setTimeout(() => {
              if (cancelled) return;
              speak(familyAdventure, () => {
                if (cancelled) return;
                const t3 = setTimeout(() => {
                  if (cancelled) return;
                  console.log('[TTS] Real-world card title: "Create Something"');
                  speak('Create Something', () => {
                    if (cancelled) return;
                    const t4 = setTimeout(() => {
                      if (cancelled) return;
                      speak(creativePrompt, undefined);
                    }, 300);
                    timers.push(t4);
                  }, { noKaraoke: true });
                }, 400);
                timers.push(t3);
              });
            }, 300);
            timers.push(t2);
          }, { noKaraoke: true });
        }, 400);
        timers.push(t1);
      });

    } else if (screen.type === 'welcome') {
      const text = getScreenText(screen, childName);
      if (text) {
        console.log(`[TTS] Screen ${screenIdx} welcome — Reading: "${text.slice(0, 60)}..."`);
        speak(text, () => {
          if (cancelled) return;
          startCountdownForScreen();
        });
      }

    } else {
      const text = getScreenText(screen, childName);
      if (text) speak(text);
    }

    return cleanup;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [screenIdx]);

  // ── Navigation ────────────────────────────────────────────────────────────
  function goNext() {
    // Keep AudioContext fresh — iOS can suspend it between taps
    unlockAudio();
    if (screenIdx < total - 1) {
      const nextScreen = screens[screenIdx + 1];
      // Trigger fanfare HERE (inside gesture handler) so iOS AudioContext is running
      if (nextScreen?.type === 'celebration') {
        sfx.fanfare();
        console.log('[CELEBRATION] Fanfare triggered inside gesture handler — next screen is celebration');
      }
      setScreenIdx(prev => prev + 1);
    } else {
      navigate(`/child/subject/${subjectId}`);
    }
  }

  function goBack() {
    if (screenIdx > 0) setScreenIdx(prev => prev - 1);
    else navigate(-1);
  }

  function toggleAudio() {
    setAudioEnabled(prev => {
      if (prev) {
        // Muting — stop current audio immediately
        currentAbortControllerRef.current?.abort();
        persistentAudioRef.current?.pause();
        setSpeaking(false);
        setLoadingAudio(false);
        karaokeRef.current.forEach(id => clearTimeout(id));
        karaokeRef.current = [];
        setKaraokeIdx(-1);
      }
      return !prev;
    });
  }

  function replayAudio() {
    if (!screens[screenIdx]) return;
    const text = getScreenText(screens[screenIdx], childName);
    if (text) speak(text);
  }

  // ── Not found ─────────────────────────────────────────────────────────────
  if (!lesson) {
    return (
      <div style={{ minHeight: '100dvh', background: '#0f172a', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: 16 }}>
        <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '1rem' }}>Lesson not found.</p>
        <button onClick={() => navigate(-1)} style={{ padding: '10px 20px', background: '#34D399', color: '#000', border: 'none', borderRadius: 10, fontWeight: 700, cursor: 'pointer' }}>Go Back</button>
      </div>
    );
  }

  const currentScreen = screens[screenIdx];
  const accent        = guideAvatar?.accent || '#34D399';

  // ── Render screen ──────────────────────────────────────────────────────────
  const commonProps = {
    screen:             currentScreen,
    childName,
    guideAvatar,
    speaking,
    loadingAudio,
    karaokeWords,
    karaokeIdx,
    accent,
    onReplay:           replayAudio,
    onVocabTap:         (vocab) => setVocabOpen(vocab),
    onComplete:         goNext,
    showVocabHint,
    onDismissVocabHint: () => { setShowVocabHint(false); localStorage.setItem('explorer_vocab_hint_shown', 'true'); },
  };

  function renderScreen(screen) {
    switch (screen.type) {
      case 'welcome':    return <ExplorerWelcomeScreen {...commonProps} />;
      case 'magazine':   return <MagazineScreen        {...commonProps} />;
      case 'interactive':return <InteractiveExplore    {...commonProps} />;
      case 'quiz':       return <MasteryQuiz           {...commonProps} />;
      case 'real-world': return <RealWorldConnection   {...commonProps} />;
      case 'celebration':return <ExplorerCelebration   {...commonProps} subjectId={subjectId} lessonTitle={lesson.title} />;
      default:
        return (
          <div style={{ padding: 40, textAlign: 'center' }}>
            <p style={{ color: 'rgba(255,255,255,0.3)' }}>Unknown screen type: {screen.type}</p>
          </div>
        );
    }
  }

  return (
    <div className="explorer-shell" style={{
      position:     'relative',
      width:        '100%',
      minHeight:    '100dvh',
      maxHeight:    '100dvh',
      background:   '#0f172a',
      display:      'flex',
      flexDirection:'column',
      fontFamily:   'system-ui, -apple-system, sans-serif',
      overflow:     'hidden',
      touchAction:  'manipulation',
      WebkitUserSelect: 'none',
      userSelect:   'none',
    }}>
      <style>{`
        body { overscroll-behavior: none; touch-action: manipulation; }
        button, [role="button"] {
          -webkit-tap-highlight-color: transparent;
          touch-action: manipulation;
        }
        button:active { opacity: 0.82 !important; }
        @keyframes ex-ring {
          0%,100% { opacity: 0.4; transform: scale(1); }
          50%     { opacity: 1;   transform: scale(1.14); }
        }
        @keyframes explorer-enter {
          from { opacity: 0; transform: translateY(14px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes hint-in {
          0%   { opacity: 0; transform: translateY(8px) scale(0.95); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes hint-bounce {
          0%, 100% { transform: translateY(0); }
          50%      { transform: translateY(-4px); }
        }

        /* ── Responsive layout ──────────────────────────────────────── */

        /* Explorer outer shell — centre on wide screens */
        .explorer-shell {
          width: 100%;
          max-width: 100%;
          margin: 0 auto;
        }
        @media (min-width: 768px) {
          .explorer-shell { font-size: 18px; }
          .explorer-header { padding: 14px 28px 12px !important; }
          .explorer-header-label { font-size: 0.8rem !important; }
          .explorer-nav { height: 80px !important; }
          .explorer-nav-btn { width: 60px !important; height: 60px !important; font-size: 1.6rem !important; }
          .explorer-nav-dot-active { width: 24px !important; }
        }
        @media (min-width: 1024px) {
          .explorer-shell { font-size: 19px; max-width: 1100px; }
        }

        /* Magazine — single column default, two-column on iPad landscape */
        .magazine-outer {
          height: 100%;
          overflow-y: auto;
          overscroll-behavior: contain;
          -webkit-overflow-scrolling: touch;
        }
        .magazine-image-col {
          position: relative;
          width: 100%;
          aspect-ratio: 16/9;
          background: #111827;
          flex-shrink: 0;
        }
        .magazine-text-col {
          padding: 16px 18px 24px;
        }
        @media (min-width: 768px) {
          .magazine-text-col { padding: 20px 28px 28px; }
          .mag-headline { font-size: 1.7rem !important; }
          .mag-para { font-size: 1.05rem !important; line-height: 1.8 !important; }
        }
        @media (min-width: 1024px) {
          .magazine-outer {
            display: flex;
            flex-direction: row;
            overflow: hidden;
          }
          .magazine-image-col {
            width: 42%;
            aspect-ratio: unset;
            height: 100%;
            overflow: hidden;
          }
          .magazine-text-col {
            flex: 1;
            overflow-y: auto;
            overscroll-behavior: contain;
            -webkit-overflow-scrolling: touch;
            padding: 28px 36px 32px;
          }
          .mag-headline { font-size: 2rem !important; }
          .mag-para { font-size: 1.1rem !important; }
        }

        /* Real-world — wider on iPad */
        @media (min-width: 768px) {
          .real-world-scroll { padding: 32px 36px !important; }
          .real-world-card   { padding: 22px 20px !important; }
          .real-world-text   { font-size: 1.05rem !important; }
        }
        @media (min-width: 1024px) {
          .real-world-scroll { max-width: 760px; margin: 0 auto; }
          .real-world-text   { font-size: 1.1rem !important; }
        }

        /* Celebration — wider on iPad */
        @media (min-width: 768px) {
          .celebration-wrap { max-width: 560px; margin: 0 auto; }
        }
      `}</style>

      {/* Lesson header */}
      <div className="explorer-header" style={{
        padding:     '10px 16px 8px',
        flexShrink:  0,
        borderBottom:'1px solid rgba(255,255,255,0.06)',
      }}>
        <div className="explorer-header-label" style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.35)', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
          {lesson.title}
        </div>
      </div>

      {/* Screen content */}
      <div style={{ flex: 1, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
        <div
          key={screenIdx}
          style={{
            flex:      1,
            overflow: 'hidden',
            animation: 'explorer-enter 0.28s ease both',
          }}
          onTouchStart={() => { if (countdown !== null) cancelCountdown(); }}
          onClick={() => { if (countdown !== null) cancelCountdown(); }}
        >
          {renderScreen(currentScreen)}
        </div>
      </div>

      {/* Navigation bar */}
      <ExplorerNavigation
        screenIdx={screenIdx}
        total={total}
        accent={accent}
        audioEnabled={audioEnabled}
        speaking={speaking}
        onBack={goBack}
        onNext={goNext}
        onToggleAudio={toggleAudio}
        isCelebration={currentScreen.type === 'celebration'}
        countdown={countdown}
      />

      {/* Vocab popup (portal-like overlay) */}
      {vocabOpen && (
        <VocabPopup
          vocab={vocabOpen}
          accent={accent}
          guideAvatar={guideAvatar}
          onClose={() => setVocabOpen(null)}
          onStop={stopAudio}
          speak={speak}
        />
      )}
    </div>
  );
}
