import { useState, useEffect, useRef, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getCurrentChild, getCurrentParent, updateChildProgress } from '../../lib/storage';
import { getAvatar } from '../../lib/constants';

// Screen types
import WelcomeScreen     from './screens/WelcomeScreen';
import StoryScreen       from './screens/StoryScreen';
import TeachScreen       from './screens/TeachScreen';
import FamilyScreen      from './screens/FamilyScreen';
import CelebrationScreen from './screens/CelebrationScreen';

// Game templates
import TapTheRightOne  from './templates/TapTheRightOne';
import CountAndTap     from './templates/CountAndTap';
import SortIntoBuckets from './templates/SortIntoBuckets';
import YesOrNo         from './templates/YesOrNo';
import CauseAndEffect  from './templates/CauseAndEffect';
import GuidedDemo      from './templates/GuidedDemo';

// Lesson data — level 1 overrides keyed by subjectId
import INNERWORLD_LITTLESTARS from '../../data/innerworld_littlestars_adapter';
import ELA_LITTLESTARS         from '../../data/ela_littlestars_adapter';
import SCI_LITTLESTARS         from '../../data/sci_littlestars_adapter';
import SS_LITTLESTARS          from '../../data/ss_littlestars_adapter';
import COSMOS_LITTLESTARS      from '../../data/cosmos_littlestars_adapter';
import MATH_LITTLESTARS        from '../../data/math_littlestars_adapter';
import MONEYBUSINESS_LITTLESTARS from '../../data/moneybusiness_littlestars_adapter';
import FUTURESKILLS_LITTLESTARS  from '../../data/futureskills_littlestars_adapter';
import SOCIALLEADERSHIP_LITTLESTARS from '../../data/socialleadership_littlestars_adapter';
import LIFEWELLNESS_LITTLESTARS  from '../../data/lifewellness_littlestars_adapter';
import CREATIVEARTS_LITTLESTARS  from '../../data/creativearts_littlestars_adapter';
import HISTORYWORLD_LITTLESTARS  from '../../data/historyworld_littlestars_adapter';
import SPANISH_LITTLESTARS       from '../../data/spanish_littlestars_adapter';
import FRONTIER_LITTLESTARS      from '../../data/frontier_littlestars_adapter';

const LESSON_MAP = {
  'inner-world': INNERWORLD_LITTLESTARS,
  'ela':         ELA_LITTLESTARS,
  'sci':         SCI_LITTLESTARS,
  'ss':          SS_LITTLESTARS,
  'cosmos':      COSMOS_LITTLESTARS,
  'math':        MATH_LITTLESTARS,
  'money':       MONEYBUSINESS_LITTLESTARS,
  'future-skills': FUTURESKILLS_LITTLESTARS,
  'leadership':  SOCIALLEADERSHIP_LITTLESTARS,
  'wellness':    LIFEWELLNESS_LITTLESTARS,
  'creative-arts': CREATIVEARTS_LITTLESTARS,
  'history':     HISTORYWORLD_LITTLESTARS,
  'languages':   SPANISH_LITTLESTARS,
  'frontier':    FRONTIER_LITTLESTARS,
};

// ── Guide speech bubble ───────────────────────────────────────────────────────
function GuideBubble({ text, speaking, guideAvatar }) {
  if (!text) return null;
  return (
    <div style={{
      background: 'rgba(255,255,255,0.08)',
      border: `1.5px solid ${guideAvatar?.accent || '#7C3AED'}44`,
      borderRadius: 16,
      padding: '8px 14px',
      maxWidth: 'min(260px, calc(100vw - 130px))',
      fontSize: '0.88rem',
      color: 'rgba(255,255,255,0.9)',
      fontWeight: 600,
      lineHeight: 1.4,
      position: 'relative',
    }}>
      {text}
      {speaking && (
        <span style={{ display:'inline-flex', gap:3, marginLeft:6, verticalAlign:'middle' }}>
          {[0,1,2].map(i => (
            <span key={i} style={{
              width:5, height:5, borderRadius:'50%',
              background: guideAvatar?.accent || '#7C3AED',
              display:'inline-block',
              animation: `gb-dot 1s ease-in-out ${i * 0.18}s infinite`,
            }} />
          ))}
        </span>
      )}
      <style>{`@keyframes gb-dot{0%,80%,100%{transform:scale(0.6);opacity:0.4}40%{transform:scale(1);opacity:1}}`}</style>
    </div>
  );
}

// ── Progress bar ──────────────────────────────────────────────────────────────
function ProgressBar({ current, total, accent }) {
  const pct = total > 1 ? (current / (total - 1)) * 100 : 100;
  return (
    <div style={{ padding: '14px 20px 0', display:'flex', alignItems:'center', gap:10 }}>
      <div style={{
        flex: 1,
        height: 8,
        borderRadius: 100,
        background: 'rgba(255,255,255,0.1)',
        overflow: 'hidden',
      }}>
        <div style={{
          height: '100%',
          width: `${pct}%`,
          borderRadius: 100,
          background: accent || '#7C3AED',
          boxShadow: `0 0 10px ${accent || '#7C3AED'}88`,
          transition: 'width 0.5s ease',
        }} />
      </div>
      <span style={{ color:'rgba(255,255,255,0.4)', fontSize:'0.8rem', fontWeight:700, flexShrink:0 }}>
        {current + 1}/{total}
      </span>
    </div>
  );
}

// ── Main component ────────────────────────────────────────────────────────────
export default function GameLessonPlayer() {
  const { subjectId, lessonIdx } = useParams();
  const navigate = useNavigate();

  const child   = getCurrentChild();
  const idx     = parseInt(lessonIdx, 10);
  const lessons = LESSON_MAP[subjectId] || [];
  const lesson  = lessons[idx] || null;

  const guideId     = (lesson?.guide || lesson?.avatar || 'sage').toLowerCase();
  const guideAvatar = getAvatar(guideId);
  const childName   = child?.name || 'friend';

  const gameSequence = lesson?.gameSequence || null;

  // Next-lesson navigation (celebration screen forward arrow)
  const nextLessonId  = lesson?.nextLesson;
  const nextLessonIdx = nextLessonId ? lessons.findIndex(l => l.id === nextLessonId) : -1;
  const hasNextLesson = nextLessonIdx !== -1;

  const [screenIdx,         setScreenIdx]         = useState(0);
  const [speaking,          setSpeaking]          = useState(false);
  const [bubble,            setBubble]            = useState('');
  const [interactionLocked, setInteractionLocked] = useState(true);
  const [canAdvance,        setCanAdvance]        = useState(false);
  const [isPaused,          setIsPaused]          = useState(false);
  const [winPulse,          setWinPulse]          = useState(false);
  const [readingIdx,        setReadingIdx]        = useState(-1); // tap-right card currently being read aloud
  const [karaokeWords,      setKaraokeWords]      = useState([]); // words of text currently being spoken
  const [karaokeIdx,        setKaraokeIdx]        = useState(-1); // index of the actively spoken word


  const audioRef        = useRef(null);
  const bubbleTimer     = useRef(null);
  const fallbackTimerRef = useRef(null);
  const speakGenRef     = useRef(0); // incremented on every speak() call; stale fetches bail out
  const totalRef        = useRef(0); // kept in sync with gameSequence.length; read by advance()
  const lastSpeakTime   = useRef(0);
  const lastSpokenText  = useRef('');
  const karaokeRef      = useRef([]); // scheduled karaoke timeout IDs

  // ── Stable advance — uses functional setScreenIdx so setTimeout closures
  //    always read current state, not a stale render's screenIdx. ────────────
  const advance = useCallback(() => {
    setScreenIdx(prev => {
      const next = prev + 1;
      return next < totalRef.current ? next : prev;
    });
  }, []);

  // ── Speak ──────────────────────────────────────────────────────────────────
  const speak = useCallback(async (text, onDone) => {
    if (!text) { onDone?.(); return; }

    // Timestamp debounce: block identical text spoken within 3 seconds.
    // Catches any double-invoke path (StrictMode, stale closures, re-renders)
    // before any audio or fetch is started.
    const now = Date.now();
    if (text === lastSpokenText.current && now - lastSpeakTime.current < 3000) {
      console.log('[speak] BLOCKED duplicate:', text.slice(0, 60));
      return; // don't call onDone — the original invocation's onDone owns the flow
    }
    lastSpokenText.current = text;
    lastSpeakTime.current  = now;

    // Increment generation — any in-flight fetch from a previous call will see
    // a stale gen and discard its audio, preventing the double-speech race.
    const gen = ++speakGenRef.current;

    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.src = '';
      audioRef.current = null;
    }
    window.speechSynthesis?.cancel();
    clearTimeout(bubbleTimer.current);

    const resolved = text.replace(/\{name\}/g, childName);
    setBubble(resolved.slice(0, 120) + (resolved.length > 120 ? '…' : ''));
    setSpeaking(true);

    let done = false;
    const finish = () => {
      if (done) return;
      done = true;
      setSpeaking(false);
      bubbleTimer.current = setTimeout(() => setBubble(''), 3000);
      onDone?.();
    };

    // Dead-man's switch: if onended never fires (mobile Audio API quirk),
    // force completion after 20s so the screen never gets permanently stuck.
    const deadman = setTimeout(finish, 20000);

    function trySpeechSynthesis() {
      if (gen !== speakGenRef.current) { clearTimeout(deadman); return; }
      const synthTimer = setTimeout(finish, 12000);
      try {
        if (!window.speechSynthesis) { clearTimeout(synthTimer); finish(); return; }
        window.speechSynthesis.cancel();
        const utt = new SpeechSynthesisUtterance(resolved);
        utt.rate    = 0.92;
        utt.onend   = () => { clearTimeout(synthTimer); finish(); };
        utt.onerror = () => { clearTimeout(synthTimer); finish(); };
        window.speechSynthesis.speak(utt);
      } catch {
        clearTimeout(synthTimer);
        finish();
      }
    }

    try {
      const res = await fetch('/.netlify/functions/nova-speak', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify({ text: resolved }),
      });
      if (!res.ok) throw new Error('tts-unavailable');
      const { audio } = await res.json();

      // Bail out if a newer speak() call has already started — discard this audio.
      if (gen !== speakGenRef.current) { clearTimeout(deadman); return; }

      const el = new Audio(`data:audio/mpeg;base64,${audio}`);
      audioRef.current = el;
      let playStarted = false;
      let cachedDur = null;
      el.onloadedmetadata = () => { cachedDur = el.duration; };
      el.onplay = () => {
        const dur = cachedDur
          || (Number.isFinite(el.duration) && el.duration > 0 ? el.duration : null)
          || resolved.split(/\s+/).length * 0.40;
        // Schedule per-word highlights proportional to character length (min 150ms/word)
        karaokeRef.current.forEach(id => clearTimeout(id));
        karaokeRef.current = [];
        setKaraokeIdx(-1);
        const kWords = resolved.split(/\s+/).filter(Boolean);
        if (kWords.length >= 2 && dur > 0) {
          setKaraokeWords(kWords);
          const totalChars = kWords.reduce((sum, w) => sum + w.length, 0);
          const msPerChar  = (dur * 1000) / totalChars;
          let cumMs = 0;
          const ids = kWords.map((word, i) => {
            const id = setTimeout(() => setKaraokeIdx(i), cumMs);
            cumMs += Math.max(150, word.length * msPerChar);
            return id;
          });
          ids.push(setTimeout(() => setKaraokeIdx(-1), cumMs + 300));
          karaokeRef.current = ids;
        }
      };
      el.onended = () => {
        clearTimeout(deadman);
        audioRef.current = null;
        karaokeRef.current.forEach(id => clearTimeout(id));
        karaokeRef.current = [];
        setKaraokeIdx(-1);
        setKaraokeWords([]);
        finish();
      };
      // Only fall back to speech synthesis if ElevenLabs never started playing.
      // If playStarted=true, onerror is a mid-stream glitch — just finish() cleanly
      // rather than layering speech synthesis on top of a partially-playing audio.
      el.onerror = () => {
        clearTimeout(deadman);
        audioRef.current = null;
        if (playStarted) finish();
        else trySpeechSynthesis();
      };

      const playErr = await el.play().catch(err => err);
      if (playErr instanceof Error) {
        // Autoplay blocked (iOS Safari before first user gesture)
        clearTimeout(deadman);
        audioRef.current = null;
        trySpeechSynthesis();
      } else {
        playStarted = true; // ElevenLabs audio is now playing — no speech synthesis fallback
      }
      // play() succeeded: onended will fire and clear deadman — no premature timeout
    } catch {
      clearTimeout(deadman);
      trySpeechSynthesis();
    }
  }, [childName]);

  // ── Build speech text — ONE field spoken per screen type ─────────────────
  //
  //   welcome / story / teach / family / cause-effect → guideText only
  //   tap-right / count / sort                        → instruction only
  //   yes-no                                          → scenario + tap cue
  //   celebration                                     → "You did it!" + guideText
  //
  // This is the only place TTS text is assembled. Never concatenate multiple
  // fields — that is what caused the double-speech bug.
  function buildSpeechText(step) {
    const r = t => (t || '').replace(/\{name\}/g, childName);
    switch (step.type) {
      case 'celebration':
        return r(step.guideText)
          ? `You did it, ${childName}! Amazing job! ${r(step.guideText)}`
          : `You did it, ${childName}! Amazing job!`;
      case 'yes-no':
        return [r(step.scenario), 'Tap the green check for yes, or the red X for no!']
          .filter(Boolean).join(' ');
      case 'tap-right':
      case 'count':
      case 'sort':
        return r(step.instruction);
      default:
        // welcome, story, teach, family, cause-effect — guideText only
        return r(step.guideText);
    }
  }

  // ── Replay text (avatar tap) — same one-field rule ────────────────────────
  function buildReplayText(step) {
    return buildSpeechText(step);
  }

  // ── Screen type sets (module-scoped constants referenced inside effects) ────
  const GAME_TYPES         = new Set(['tap-right', 'yes-no', 'count', 'sort', 'cause-effect', 'guided-demo']);
  const AUTO_ADVANCE_TYPES = new Set(['welcome', 'story', 'teach', 'family']);
  // Fallback delay per auto-advance type — fires if audio onended never arrives.
  // Game-type fallbacks are intentionally short — if speech fails, cards must unlock
  // quickly so a broken TTS call can't brick the lesson for a 3-5 year old.
  // cause-effect / guided-demo stay at the 20000ms default (long automated sequences).
  const AUTO_FALLBACK_MS   = { welcome: 8000, story: 12000, teach: 10000, family: 12000, 'tap-right': 6000, 'yes-no': 6000, count: 6000, sort: 6000 };

  // ── Single speak + lock + auto-advance useEffect ───────────────────────────
  // GameLessonPlayer is the ONLY place that calls TTS. Templates are purely
  // presentational — they receive readingIdx (for card highlights) and disabled
  // (for interaction lock) as props instead of managing speech themselves.
  //
  // Flow for each screen type:
  //   auto-advance  — speak intro → onended → 2s pause → advance
  //                   (fallback: advance after AUTO_FALLBACK_MS if onended never fires)
  //   tap-right/readOptions — speak intro → read each option label → unlock cards
  //   other game    — speak intro → unlock cards (forward arrow stays disabled until onReady)
  //   celebration   — speak intro → unlock (forward arrow = home button, shown immediately)
  useEffect(() => {
    // Reset karaoke whenever the screen changes.
    karaokeRef.current.forEach(id => clearTimeout(id));
    karaokeRef.current = [];
    setKaraokeIdx(-1);
    setKaraokeWords([]);

    if (!gameSequence) return;
    const step   = gameSequence[screenIdx];
    const text   = buildSpeechText(step);
    const isGame = GAME_TYPES.has(step.type);
    const isAuto = AUTO_ADVANCE_TYPES.has(step.type);

    // Save lesson completion when the celebration screen is reached.
    if (step.type === 'celebration') {
      const parent = getCurrentParent();
      if (parent && child) {
        updateChildProgress(parent.id, child.id, subjectId, idx);
      }
    }

    setInteractionLocked(true);
    setCanAdvance(!isGame); // game screens: arrow disabled until template calls onReady
    setReadingIdx(-1);

    let cancelled  = false;
    let advanceDone = false;
    clearTimeout(fallbackTimerRef.current);

    // Idempotent advance — whichever of primary/fallback fires first wins.
    const doAdvance = () => {
      if (advanceDone || cancelled) return;
      advanceDone = true;
      clearTimeout(fallbackTimerRef.current);
      if (!cancelled) {
        setInteractionLocked(false);
        setScreenIdx(prev => Math.min(prev + 1, gameSequence.length - 1));
      }
    };

    // Set the top-level fallback timer.
    const fallbackMs = AUTO_FALLBACK_MS[step.type] || 20000;
    fallbackTimerRef.current = isAuto
      ? setTimeout(doAdvance, fallbackMs)
      : setTimeout(() => { if (!cancelled) { setReadingIdx(-1); setInteractionLocked(false); } }, fallbackMs);

    // Called once the intro speech finishes (or immediately if no text).
    const onIntroDone = () => {
      if (cancelled) return;

      if (step.type === 'tap-right' && step.readOptions && step.items?.length) {
        // Read each option label one-by-one, highlighting that card while speaking.
        // Fallback timer stays active and covers this phase too.
        const items = step.items;
        let idx = 0;
        function readOption() {
          if (cancelled) return;
          if (idx >= items.length) {
            clearTimeout(fallbackTimerRef.current);
            setReadingIdx(-1);
            setInteractionLocked(false);
            return;
          }
          setReadingIdx(idx);
          speak(items[idx]?.label || '', () => {
            if (!cancelled) { idx++; setTimeout(readOption, 350); }
          });
        }
        setTimeout(readOption, 400);
      } else if (isAuto) {
        // Speech finished naturally — wait 2s then advance.
        setInteractionLocked(false);
        clearTimeout(fallbackTimerRef.current);
        fallbackTimerRef.current = setTimeout(doAdvance, 2000);
      } else {
        // Other game types (no readOptions) and celebration — just unlock.
        clearTimeout(fallbackTimerRef.current);
        setInteractionLocked(false);
      }
    };

    if (text) {
      speak(text, onIntroDone);
    } else {
      onIntroDone();
    }

    return () => {
      cancelled = true;
      clearTimeout(fallbackTimerRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [screenIdx]);

  // ── Cleanup on unmount ─────────────────────────────────────────────────────
  useEffect(() => () => {
    if (window.speechSynthesis) window.speechSynthesis.cancel();
    if (audioRef.current) { audioRef.current.pause(); audioRef.current.src = ''; }
    clearTimeout(bubbleTimer.current);
    karaokeRef.current.forEach(id => clearTimeout(id));
  }, []);

  // ── No game sequence → navigate to regular LessonPlayer (no ?level=1 so no loop) ───
  if (!lesson || !gameSequence) {
    navigate(`/child/lesson/${subjectId}/${lessonIdx}`, { replace: true });
    return null;
  }

  const currentStep = gameSequence[screenIdx];
  const total       = gameSequence.length;
  totalRef.current  = total; // keep ref in sync on every render for advance()

  function goBack() {
    if (screenIdx > 0) setScreenIdx(screenIdx - 1);
  }

  // Called by game templates when interaction is successfully completed —
  // enables the forward arrow so the child can tap to proceed.
  function handleReady() {
    setCanAdvance(true);
  }

  // Called by templates on correct answer — briefly pulses the guide avatar.
  function handleWin() {
    setWinPulse(true);
    setTimeout(() => setWinPulse(false), 600);
  }

  function handleWrong(message) {
    if (message) speak(message);
  }

  function handleNarrate(message, onDone) {
    if (message) speak(message, onDone);
    else onDone?.();
  }

  function handlePause() {
    if (!isPaused) {
      // Pause audio
      if (audioRef.current) audioRef.current.pause();
      window.speechSynthesis?.pause?.();
    } else {
      // Resume audio
      if (audioRef.current) audioRef.current.play().catch(() => {});
      window.speechSynthesis?.resume?.();
    }
    setIsPaused(p => !p);
  }

  // ── Render screen ─────────────────────────────────────────────────────────
  function renderScreen(step) {
    const common = { step, childName, guideAvatar, onComplete: advance, speaking, disabled: interactionLocked, speak, karaokeWords, karaokeIdx };
    switch (step.type) {
      case 'welcome':      return <WelcomeScreen     {...common} />;
      case 'story':        return <StoryScreen       {...common} />;
      case 'teach':        return <TeachScreen       {...common} />;
      case 'family':       return <FamilyScreen      {...common} />;
      case 'celebration':  return <CelebrationScreen {...common} />;
      case 'tap-right':    return <TapTheRightOne  step={step} onComplete={advance} onReady={handleReady} onWrong={handleWrong} onWin={handleWin} disabled={interactionLocked} readingIdx={readingIdx} karaokeWords={karaokeWords} karaokeIdx={karaokeIdx} />;
      case 'count':        return <CountAndTap     step={step} onReady={handleReady} disabled={interactionLocked} karaokeWords={karaokeWords} karaokeIdx={karaokeIdx} />;
      case 'sort':         return <SortIntoBuckets step={step} onReady={handleReady} disabled={interactionLocked} karaokeWords={karaokeWords} karaokeIdx={karaokeIdx} />;
      case 'yes-no':       return <YesOrNo         step={step} onComplete={advance} onReady={handleReady} onWrong={handleWrong} onWin={handleWin} disabled={interactionLocked} karaokeWords={karaokeWords} karaokeIdx={karaokeIdx} />;
      case 'cause-effect': return <CauseAndEffect  step={step} onComplete={advance} onNarrate={handleNarrate} disabled={interactionLocked} karaokeWords={karaokeWords} karaokeIdx={karaokeIdx} />;
      case 'guided-demo':  return <GuidedDemo      step={step} onComplete={advance} onNarrate={handleNarrate} disabled={interactionLocked} karaokeWords={karaokeWords} karaokeIdx={karaokeIdx} />;
      default:             return (
        <div style={{ textAlign:'center', padding:40 }}>
          <p style={{ color:'rgba(255,255,255,0.5)' }}>Unknown step type: {step.type}</p>
        </div>
      );
    }
  }

  const accent = guideAvatar?.accent || '#7C3AED';

  const isCelebration = currentStep.type === 'celebration';
  const navBtnBase = {
    width: 60,
    height: 60,
    borderRadius: '50%',
    border: 'none',
    background: 'transparent',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    touchAction: 'manipulation',
    WebkitTapHighlightColor: 'transparent',
    padding: 0,
  };

  return (
    <div style={{
      width: '100%',
      minHeight: '100dvh',
      maxHeight: '100dvh',
      background: '#080618',
      display: 'flex',
      flexDirection: 'column',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      overflow: 'hidden',
      touchAction: 'manipulation',
      WebkitUserSelect: 'none',
      userSelect: 'none',
      position: 'relative',
    }}>
      <style>{`
        body { overscroll-behavior: none; touch-action: manipulation; }
        button, [role="button"], a {
          -webkit-tap-highlight-color: transparent;
          touch-action: manipulation;
        }
        button:active { opacity: 0.82 !important; }
        @keyframes next-lesson-pulse {
          0%,100% { box-shadow: 0 0 0 0 rgba(52,211,153,0.7), 0 0 16px rgba(52,211,153,0.4); transform: scale(1); }
          50%     { box-shadow: 0 0 0 10px rgba(52,211,153,0), 0 0 32px rgba(52,211,153,0.7); transform: scale(1.08); }
        }
        @keyframes guide-ring {
          0%,100% { opacity: 0.45; transform: scale(1); }
          50%      { opacity: 1;   transform: scale(1.14); }
        }
        @keyframes guide-win-pulse {
          0%   { transform: scale(1); }
          40%  { transform: scale(1.32); }
          70%  { transform: scale(0.95); }
          100% { transform: scale(1); }
        }
        @keyframes screen-enter {
          from { opacity:0; transform: translateY(18px) }
          to   { opacity:1; transform: translateY(0) }
        }
      `}</style>


      {/* Progress bar */}
      <ProgressBar current={screenIdx} total={total} accent={accent} />

      {/* Guide panel */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        padding: '8px 16px',
        flexShrink: 0,
        minHeight: 0,
      }}>
        {/* Avatar — tap to replay audio */}
        <div
          onClick={() => speak(buildReplayText(currentStep))}
          style={{
            position: 'relative',
            width: 80,
            height: 80,
            flexShrink: 0,
            cursor: 'pointer',
            touchAction: 'manipulation',
            animation: winPulse ? 'guide-win-pulse 0.6s cubic-bezier(0.34,1.56,0.64,1) both' : 'none',
          }}
        >
          {/* Animated pulse ring — separate from avatar so inline styles don't conflict */}
          {speaking && (
            <div style={{
              position: 'absolute',
              inset: -5,
              borderRadius: '50%',
              border: `3px solid ${accent}`,
              animation: 'guide-ring 1.2s ease-in-out infinite',
              pointerEvents: 'none',
              boxShadow: `0 0 16px ${accent}88`,
            }} />
          )}
          {/* Avatar circle */}
          <div style={{
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            overflow: 'hidden',
            border: `3px solid ${speaking ? accent : accent + '66'}`,
            boxShadow: speaking ? `0 0 20px ${accent}55` : `0 0 8px ${accent}22`,
            transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
          }}>
            <img
              src={guideAvatar?.image || '/avatars/sage.png'}
              alt={guideAvatar?.name}
              style={{ width:'100%', height:'100%', objectFit:'cover', display:'block' }}
            />
          </div>
        </div>

        {/* Speech bubble */}
        <GuideBubble text={bubble} speaking={speaking} guideAvatar={guideAvatar} />
      </div>

      {/* Main game area — fills remaining space, scrollable only inside */}
      <div style={{ flex: 1, display:'flex', flexDirection:'column', overflow:'hidden', minHeight: 0 }}>
        <div
          key={screenIdx}
          style={{
            flex: 1,
            animation: 'screen-enter 0.35s ease both',
            overflowY: 'auto',
            overscrollBehavior: 'contain',
            WebkitOverflowScrolling: 'touch',
          }}
        >
          {renderScreen(currentStep)}
        </div>
      </div>

      {/* ── Icon nav bar ── */}
      <div style={{
        height: 70,
        flexShrink: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        background: 'rgba(8,6,24,0.88)',
        borderTop: '1px solid rgba(255,255,255,0.07)',
        paddingBottom: 'env(safe-area-inset-bottom)',
      }}>
        {isCelebration ? (
          <>
            {/* LEFT: back arrow → subject lesson list */}
            <button
              onClick={() => navigate(`/child/subject/${subjectId}?level=1`)}
              style={{ ...navBtnBase, opacity: 0.75 }}
            >
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <polygon points="24,4 8,16 24,28" fill="rgba(255,255,255,0.9)" />
              </svg>
            </button>

            {/* CENTER: lesson list grid icon → subject lesson list */}
            <button
              onClick={() => navigate(`/child/subject/${subjectId}?level=1`)}
              style={{ ...navBtnBase, opacity: 0.85 }}
            >
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                <rect x="3"  y="3"  width="9" height="9" rx="2" fill="rgba(255,255,255,0.9)" />
                <rect x="16" y="3"  width="9" height="9" rx="2" fill="rgba(255,255,255,0.9)" />
                <rect x="3"  y="16" width="9" height="9" rx="2" fill="rgba(255,255,255,0.9)" />
                <rect x="16" y="16" width="9" height="9" rx="2" fill="rgba(255,255,255,0.55)" />
              </svg>
            </button>

            {/* RIGHT: pulsing green forward arrow → next lesson */}
            {hasNextLesson ? (
              <button
                onClick={() => navigate(`/child/lesson/${subjectId}/${nextLessonIdx}?level=1`)}
                style={{
                  ...navBtnBase,
                  width: 56,
                  height: 56,
                  borderRadius: '50%',
                  background: 'rgba(52,211,153,0.18)',
                  animation: 'next-lesson-pulse 1.6s ease-in-out infinite',
                }}
              >
                <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
                  <polygon points="8,4 24,16 8,28" fill="#34D399" />
                </svg>
              </button>
            ) : (
              <div style={{ width: 60 }} />
            )}
          </>
        ) : (
          <>
            {/* Back arrow */}
            <button
              onClick={goBack}
              style={{
                ...navBtnBase,
                opacity: screenIdx > 0 ? 0.75 : 0.2,
                pointerEvents: screenIdx > 0 ? 'auto' : 'none',
              }}
            >
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <polygon points="24,4 8,16 24,28" fill="rgba(255,255,255,0.9)" />
              </svg>
            </button>

            {/* Pause / resume */}
            <button onClick={handlePause} style={{ ...navBtnBase, opacity: 0.85 }}>
              {isPaused ? (
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <polygon points="6,3 30,16 6,29" fill="rgba(255,255,255,0.9)" />
                </svg>
              ) : (
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <rect x="6"  y="5" width="7" height="22" rx="2.5" fill="rgba(255,255,255,0.9)" />
                  <rect x="19" y="5" width="7" height="22" rx="2.5" fill="rgba(255,255,255,0.9)" />
                </svg>
              )}
            </button>

            {/* Forward arrow */}
            <button
              onClick={() => { if (canAdvance) advance(); }}
              style={{
                ...navBtnBase,
                opacity: canAdvance ? 1 : 0.2,
                pointerEvents: canAdvance ? 'auto' : 'none',
              }}
            >
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <polygon points="8,4 24,16 8,28" fill={canAdvance ? accent : 'rgba(255,255,255,0.9)'} />
              </svg>
            </button>
          </>
        )}
      </div>

      {/* ── Pause overlay ── */}
      {isPaused && (
        <div style={{
          position: 'fixed',
          inset: 0,
          zIndex: 40,
          background: 'rgba(8,6,24,0.85)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 20,
        }}>
          {/* Guide avatar */}
          <img
            src={guideAvatar?.image || '/avatars/sage.png'}
            alt={guideAvatar?.name}
            style={{
              width: 100,
              height: 100,
              borderRadius: '50%',
              objectFit: 'cover',
              border: `3px solid ${accent}`,
              boxShadow: `0 0 20px ${accent}44`,
            }}
            draggable={false}
          />

          {/* "Paused" label */}
          <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.9rem', fontWeight: 700, margin: 0, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
            Paused
          </p>

          {/* Play + Home buttons side by side */}
          <div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
            {/* Resume (play) */}
            <button
              onClick={handlePause}
              style={{
                width: 80,
                height: 80,
                borderRadius: '50%',
                border: '3px solid #34D399',
                background: 'rgba(52,211,153,0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                touchAction: 'manipulation',
                boxShadow: '0 0 20px rgba(52,211,153,0.3)',
              }}
            >
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <polygon points="7,3 29,16 7,29" fill="#34D399" />
              </svg>
            </button>

            {/* Home */}
            <button
              onClick={() => navigate('/child/dashboard')}
              style={{
                width: 80,
                height: 80,
                borderRadius: '50%',
                border: '2px solid rgba(255,255,255,0.25)',
                background: 'rgba(255,255,255,0.08)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                touchAction: 'manipulation',
              }}
            >
              <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
                <path d="M15 3L2 13h3v14h8v-8h4v8h8V13h3L15 3z" fill="rgba(255,255,255,0.8)" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
