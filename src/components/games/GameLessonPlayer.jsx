import { useState, useEffect, useRef, useCallback, useMemo } from 'react';
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
import DragAndMatch    from './templates/DragAndMatch';
import CountArray      from './templates/CountArray';

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

// ── Karaoke: map ElevenLabs character timestamps → per-word start times ──────
// alignment.characters is a 1-to-1 array of every character in the input text
// (including spaces). alignment.character_start_times_seconds[i] is when that
// character is spoken. We find each word's first-character index in the text
// and look up its timestamp to get the word's start time.
function charAlignmentToWordStarts(text, alignment) {
  try {
    const starts = alignment?.character_start_times_seconds;
    if (!starts?.length) return null;
    const words = text.split(/\s+/).filter(Boolean);
    const wordStarts = [];
    let searchFrom = 0;
    for (const word of words) {
      const idx = text.indexOf(word, searchFrom);
      if (idx === -1 || idx >= starts.length) return null;
      wordStarts.push(starts[idx]);
      searchFrom = idx + word.length;
    }
    return wordStarts.length === words.length ? wordStarts : null;
  } catch {
    return null;
  }
}

// ── Debug timestamp — remove with all [audio] logs when done ─────────────────
const ts = () => new Date().toISOString().slice(11, 23);

// ── Fisher-Yates shuffle (pure, returns new array) ────────────────────────────
function fisherYates(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

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


  // ── Shuffle tap-right items ONCE per screen ─────────────────────────────────
  // Computed by useMemo (not inside render) so both renderScreen and the
  // readOptions narration loop share the SAME shuffled order.  Without this,
  // the guide would say "Six" while highlighting the "One" card.
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const tapRightShuffled = useMemo(() => {
    const s = gameSequence?.[screenIdx];
    if (!s || s.type !== 'tap-right' || !s.items?.length) return null;
    return fisherYates(s.items);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [screenIdx]);

  // ── Stable currentStep reference ─────────────────────────────────────────────
  // Must be a useMemo (hook) called BEFORE the early return below, so that the
  // reference is stable across re-renders within the same screen.  If we spread
  // a new object on every render, TapTheRightOne's useEffect[step] fires on every
  // parent state change (e.g. setWinPulse) and resets showWin=false, killing
  // WinCelebration before onDone fires → screen freezes with no auto-advance.
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const currentStep = useMemo(() => {
    const s = gameSequence?.[screenIdx];
    if (!s || s.type !== 'tap-right' || !tapRightShuffled) return s ?? null;
    return { ...s, items: tapRightShuffled };
  // tapRightShuffled is itself memoized on screenIdx, so effective dep is screenIdx
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [screenIdx, tapRightShuffled]);

  const persistentAudioRef       = useRef(null); // single reused Audio element — created inside first gesture so iOS authorizes all future .play() calls
  const audioListenersCleanupRef = useRef(null); // removes current debug event listeners before reuse
  const bubbleTimer              = useRef(null);
  const fallbackTimerRef         = useRef(null);
  const speakGenRef              = useRef(0); // incremented on every speak() call; stale fetches bail out
  const totalRef                 = useRef(0); // kept in sync with gameSequence.length; read by advance()
  const lastSpeakTime            = useRef(0);
  const lastSpokenText           = useRef('');
  const karaokeRef               = useRef([]); // scheduled karaoke timeout IDs
  const blobUrlRef               = useRef(null); // active blob URL — revoked only when replaced or component unmounts
  const isPausedRef              = useRef(false); // closure-accessible mirror of isPaused — read inside callbacks where state is stale
  const pendingOnDoneRef         = useRef(null);  // onDone deferred if finish() fires while paused
  const timerInfoRef             = useRef(null);  // { fn, ms, startedAt } tracks fallbackTimerRef for pause/resume

  // ── Stable advance — uses functional setScreenIdx so setTimeout closures
  //    always read current state, not a stale render's screenIdx. ────────────
  const advance = useCallback(() => {
    setScreenIdx(prev => {
      const next = prev + 1;
      return next < totalRef.current ? next : prev;
    });
  }, []);

  // ── Speak ──────────────────────────────────────────────────────────────────
  // options.noKaraoke = true → audio plays but karaoke state is cleared and never
  // updated. Use for feedback ("Try again!"), option-label reading, and any other
  // secondary audio where karaoke on the main screen text would be misleading.
  const speak = useCallback(async (text, onDone, options = {}) => {
    const { noKaraoke = false } = options;
    if (!text) { onDone?.(); return; }

    // Timestamp debounce: block identical text spoken within 3 seconds.
    // Catches any double-invoke path (StrictMode, stale closures, re-renders)
    // before any audio or fetch is started.
    const now = Date.now();
    if (text === lastSpokenText.current && now - lastSpeakTime.current < 3000) {
      // Duplicate detected — skip the audio but still call onDone so the screen
      // can advance. This handles StrictMode double-invoke, back/forward within
      // 3s, and any other re-entry that would produce double audio.
      console.log(`[audio ${ts()}] DEBOUNCE_BLOCK — calling onDone. text="${text.slice(0, 50)}"`);
      onDone?.();
      return;
    }
    lastSpokenText.current = text;
    lastSpeakTime.current  = now;

    // Increment generation — any in-flight fetch from a previous call will see
    // a stale gen and discard its audio, preventing the double-speech race.
    const gen = ++speakGenRef.current;

    // Remove debug event listeners from previous speak() call before reusing element.
    audioListenersCleanupRef.current?.();
    audioListenersCleanupRef.current = null;

    // Pause the persistent element if it's currently playing.
    const elAtCancel = persistentAudioRef.current;
    if (elAtCancel) {
      elAtCancel.pause();
      // Don't null persistentAudioRef — we'll reuse the same element.
    }
    // Don't revoke the active blob URL here — do it just before creating the new one,
    // so iOS has the URL available throughout its async buffering cycle.
    clearTimeout(bubbleTimer.current);

    const resolved = text.replace(/\{name\}/g, childName);
    setBubble(resolved.slice(0, 120) + (resolved.length > 120 ? '…' : ''));
    setSpeaking(true);

    let done = false;
    const finish = (reason = 'unknown') => {
      if (done) return;
      done = true;
      console.log(`[audio ${ts()}] FINISH reason=${reason} gen=${gen}`);
      setSpeaking(false);
      bubbleTimer.current = setTimeout(() => setBubble(''), 3000);
      if (isPausedRef.current) {
        // Paused — defer onDone so auto-advance can't fire while frozen.
        pendingOnDoneRef.current = onDone;
      } else {
        onDone?.();
      }
    };

    // Dead-man's switch: if onended never fires (mobile Audio API quirk),
    // force completion after 20s so the screen never gets permanently stuck.
    const deadman = setTimeout(() => {
      console.log(`[audio ${ts()}] DEADMAN_FIRED gen=${gen} — onended never arrived`);
      finish('deadman');
    }, 20000);

    const fetchStart = Date.now();
    console.log(`[audio ${ts()}] FETCH_START gen=${gen} text="${resolved.slice(0, 60)}${resolved.length > 60 ? '…' : ''}"`);
    try {
      const res = await fetch('/.netlify/functions/nova-speak', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify({ text: resolved }),
      });
      console.log(`[audio ${ts()}] FETCH_RESPONSE status=${res.status} took=${Date.now() - fetchStart}ms`);
      if (!res.ok) throw new Error('tts-unavailable');

      // Alignment timestamps travel in a header; audio body is raw binary (avoids
      // iOS Safari bugs with large base64 data URIs in Audio elements).
      const alignmentHeader = res.headers.get('X-Alignment');
      const alignment = alignmentHeader ? JSON.parse(alignmentHeader) : null;
      const blob = await res.blob();
      console.log(`[audio ${ts()}] AUDIO_RECEIVED blob_bytes=${blob.size} has_alignment=${!!alignment} gen_ok=${gen === speakGenRef.current}`);

      // Bail out if a newer speak() call has already started — discard this audio.
      // Still call onDone so the screen isn't left waiting with no callback.
      if (gen !== speakGenRef.current) {
        console.log(`[audio ${ts()}] GEN_STALE gen=${gen} current=${speakGenRef.current} — discarding audio`);
        clearTimeout(deadman); onDone?.(); return;
      }

      // Revoke previous blob URL NOW — just before creating the new one.
      // Waiting until here (rather than at the top of speak()) ensures iOS has
      // had the full fetch+buffer cycle to finish loading the previous audio.
      if (blobUrlRef.current) { URL.revokeObjectURL(blobUrlRef.current); blobUrlRef.current = null; }
      const blobUrl = URL.createObjectURL(blob);
      blobUrlRef.current = blobUrl;

      // Reuse the persistent Audio element created on first user gesture.
      // If the element doesn't exist yet (very early speak() before any gesture),
      // create it now — it won't be gesture-authorized but we'll try anyway.
      if (!persistentAudioRef.current) {
        const el = new Audio();
        el.playsInline = true;
        el.preload     = 'auto';
        el.setAttribute('webkit-playsinline', 'true');
        el.setAttribute('playsinline',        'true');
        persistentAudioRef.current = el;
        console.log(`[audio ${ts()}] PERSISTENT_EL_CREATED (fallback, no gesture yet)`);
      }
      const el = persistentAudioRef.current;
      el.src = blobUrl;
      el.load();
      console.log(`[audio ${ts()}] AUDIO_LOAD gen=${gen} blob_bytes=${blob.size}`);

      let playStarted = false;

      // ── Mobile event tracing ──────────────────────────────────────────────
      const onLoadstart      = () => console.log(`[audio ${ts()}] EVT loadstart`);
      const onCanplay        = () => console.log(`[audio ${ts()}] EVT canplay duration=${el.duration?.toFixed(2)}`);
      const onCanplaythrough = () => console.log(`[audio ${ts()}] EVT canplaythrough`);
      const onPlay           = () => console.log(`[audio ${ts()}] EVT play`);
      const onPlaying        = () => console.log(`[audio ${ts()}] EVT playing`);
      const onPause          = () => console.log(`[audio ${ts()}] EVT pause currentTime=${el.currentTime?.toFixed(2)}`);
      const onStalled        = () => console.log(`[audio ${ts()}] EVT stalled`);
      const onWaiting        = () => console.log(`[audio ${ts()}] EVT waiting`);
      el.addEventListener('loadstart',      onLoadstart);
      el.addEventListener('canplay',        onCanplay);
      el.addEventListener('canplaythrough', onCanplaythrough);
      el.addEventListener('play',           onPlay);
      el.addEventListener('playing',        onPlaying);
      el.addEventListener('pause',          onPause);
      el.addEventListener('stalled',        onStalled);
      el.addEventListener('waiting',        onWaiting);
      // Store cleanup function so next speak() call can remove these before reuse.
      audioListenersCleanupRef.current = () => {
        el.removeEventListener('loadstart',      onLoadstart);
        el.removeEventListener('canplay',        onCanplay);
        el.removeEventListener('canplaythrough', onCanplaythrough);
        el.removeEventListener('play',           onPlay);
        el.removeEventListener('playing',        onPlaying);
        el.removeEventListener('pause',          onPause);
        el.removeEventListener('stalled',        onStalled);
        el.removeEventListener('waiting',        onWaiting);
      };

      // Karaoke highlighting — skipped for feedback / secondary audio
      if (noKaraoke) {
        // Clear any existing highlight so the on-screen text goes fully static
        karaokeRef.current.forEach(id => clearTimeout(id));
        karaokeRef.current = [];
        setKaraokeIdx(-1);
        setKaraokeWords([]);
      } else {
        const kWords = resolved.split(/\s+/).filter(Boolean);
        if (kWords.length >= 2) {
          setKaraokeWords(kWords);
          karaokeRef.current.forEach(id => clearTimeout(id));
          karaokeRef.current = [];
          setKaraokeIdx(-1);

          const wordStarts = charAlignmentToWordStarts(resolved, alignment);
          if (wordStarts && wordStarts.length === kWords.length) {
            // Accurate path: use ElevenLabs character timestamps + timeupdate event.
            // timeupdate fires ~every 250ms; we find the last word whose start ≤ currentTime.
            let lastKi = -1;
            el.ontimeupdate = () => {
              const t = el.currentTime;
              let ki = -1;
              for (let i = 0; i < wordStarts.length; i++) {
                if (wordStarts[i] <= t) ki = i;
                else break;
              }
              if (ki !== lastKi) { lastKi = ki; setKaraokeIdx(ki); }
            };
          } else {
            // Fallback: estimate per-word timing from character proportions.
            // Used when alignment data is unavailable (ElevenLabs error, offline, etc.).
            el.onplay = () => {
              const dur = (Number.isFinite(el.duration) && el.duration > 0 ? el.duration : null)
                || kWords.length * 0.40;
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
      el.onended = () => {
        console.log(`[audio ${ts()}] EVT ended gen=${gen} currentTime=${el.currentTime?.toFixed(2)}`);
        clearTimeout(deadman);
        // Revoke blob URL now that playback is complete and iOS no longer needs it.
        if (blobUrlRef.current) { URL.revokeObjectURL(blobUrlRef.current); blobUrlRef.current = null; }
        // Don't null persistentAudioRef — the element stays alive for future screens.
        karaokeRef.current.forEach(id => clearTimeout(id));
        karaokeRef.current = [];
        setKaraokeIdx(-1);
        setKaraokeWords([]);
        finish('onended');
      };
      el.onerror = (e) => {
        console.log(`[audio ${ts()}] EVT error playStarted=${playStarted} code=${el.error?.code} msg=${el.error?.message}`);
        clearTimeout(deadman);
        // Don't revoke blob URL here — iOS may still be loading asynchronously.
        // Don't null persistentAudioRef — element stays alive for future screens.
        finish('onerror');
      };

      console.log(`[audio ${ts()}] PLAY_CALL gen=${gen}`);
      console.log('[audio]', {
        duration:   el.duration,
        blobSize:   blob.size,
        src:        blobUrl?.slice(0, 50),
        lessonId:   lesson?.id,
      });
      const playErr = await el.play().catch(err => err);
      if (playErr instanceof Error) {
        // Autoplay blocked — with a persistent gesture-authorized element this should
        // be rare, but handle gracefully: advance silently rather than playing garbled
        // browser TTS on top of a partially-loaded audio element.
        console.log(`[audio ${ts()}] PLAY_BLOCKED ${playErr.name}: ${playErr.message}`);
        clearTimeout(deadman);
        // Don't revoke blob URL — element may still be loading asynchronously.
        // Don't null persistentAudioRef — element stays alive for future screens.
        finish('play-blocked');
      } else {
        console.log(`[audio ${ts()}] PLAY_OK gen=${gen}`);
        playStarted = true; // ElevenLabs audio is now playing — no speech synthesis fallback
      }
      // play() succeeded: onended will fire and clear deadman — no premature timeout
    } catch (e) {
      console.log(`[audio ${ts()}] FETCH_OR_PARSE_ERROR gen=${gen}`, e?.message);
      clearTimeout(deadman);
      finish('fetch-error');
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
      case 'sort-buckets':
      case 'drag-match':
      case 'count-array':
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
  const GAME_TYPES         = new Set(['tap-right', 'yes-no', 'count', 'sort', 'sort-buckets', 'cause-effect', 'guided-demo', 'drag-match', 'count-array']);
  const AUTO_ADVANCE_TYPES = new Set(['welcome', 'story', 'teach', 'family']);
  // Fallback delay per auto-advance type — fires if audio onended never arrives.
  // Game-type fallbacks are intentionally short — if speech fails, cards must unlock
  // quickly so a broken TTS call can't brick the lesson for a 3-5 year old.
  // cause-effect / guided-demo stay at the 20000ms default (long automated sequences).
  const AUTO_FALLBACK_MS   = { welcome: 8000, story: 12000, teach: 10000, family: 12000, 'tap-right': 6000, 'yes-no': 6000, count: 6000, sort: 6000, 'sort-buckets': 6000, 'drag-match': 6000, 'count-array': 6000 };

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
    clearTimeout(fallbackTimerRef.current); timerInfoRef.current = null;

    // Helper: set fallbackTimerRef AND record timing info so handlePause can
    // cancel + restore it with the correct remaining time.
    const setFallbackTimer = (fn, ms) => {
      clearTimeout(fallbackTimerRef.current);
      timerInfoRef.current  = { fn, ms, startedAt: Date.now() };
      fallbackTimerRef.current = setTimeout(fn, ms);
    };
    const clearFallbackTimer = () => {
      clearTimeout(fallbackTimerRef.current);
      fallbackTimerRef.current = null;
      timerInfoRef.current = null;
    };

    // Idempotent advance — whichever of primary/fallback fires first wins.
    // Gated on !isPausedRef.current so a restored timer can't fire mid-pause.
    const doAdvance = () => {
      if (advanceDone || cancelled || isPausedRef.current) return;
      advanceDone = true;
      clearFallbackTimer();
      if (!cancelled) {
        setInteractionLocked(false);
        setScreenIdx(prev => Math.min(prev + 1, gameSequence.length - 1));
      }
    };

    // For game screens: set a short fallback so the screen unlocks even if speech fails.
    // For auto-advance screens: NO fallback timer — speak()'s internal 20s deadman already
    // guarantees onIntroDone fires. A competing timer racing against a long ElevenLabs
    // clip was the root cause of mid-sentence cutoffs: the timer fires, doAdvance() runs,
    // the new screen's speak() pauses the still-playing audio element.
    if (!isAuto) {
      const fallbackMs = AUTO_FALLBACK_MS[step.type] || 20000;
      setFallbackTimer(() => {
        if (!cancelled) { setReadingIdx(-1); setInteractionLocked(false); }
      }, fallbackMs);
    }

    // Called once the intro speech finishes (or immediately if no text).
    const onIntroDone = () => {
      if (cancelled) return;

      if (step.type === 'tap-right' && step.readOptions && !step.hideLabels && step.items?.length) {
        // Read each option label one-by-one, highlighting that card while speaking.
        // Use tapRightShuffled so the narration order matches the on-screen card order.
        // Fallback timer stays active and covers this phase too.
        const items = tapRightShuffled || step.items;
        let idx = 0;
        function readOption() {
          if (cancelled) return;
          if (idx >= items.length) {
            clearFallbackTimer();
            setReadingIdx(-1);
            setInteractionLocked(false);
            return;
          }
          setReadingIdx(idx);
          speak(items[idx]?.label || '', () => {
            if (!cancelled) { idx++; setTimeout(readOption, 350); }
          }, { noKaraoke: true });
        }
        setTimeout(readOption, 400);
      } else if (isAuto) {
        // Speech finished naturally — wait 2s then advance.
        setInteractionLocked(false);
        clearFallbackTimer();
        setFallbackTimer(doAdvance, 2000);
      } else {
        // Other game types (no readOptions) and celebration — just unlock.
        clearFallbackTimer();
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
      clearFallbackTimer();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [screenIdx]);

  // ── iOS audio unlock ──────────────────────────────────────────────────────
  // iOS Safari's gesture authorization follows the Audio OBJECT, not the src.
  // We create ONE persistent Audio element inside the first user gesture handler
  // and store it in persistentAudioRef. All subsequent speak() calls reuse this
  // same element (.src = blobUrl; .load(); .play()), so iOS always considers the
  // play() call gesture-authorized — even on auto-advance screens between taps.
  useEffect(() => {
    let unlocked = false;
    function unlock() {
      if (unlocked) return;
      unlocked = true;
      if (!persistentAudioRef.current) {
        const el = new Audio();
        el.playsInline = true;
        el.preload     = 'auto';
        el.setAttribute('webkit-playsinline', 'true');
        el.setAttribute('playsinline',        'true');
        persistentAudioRef.current = el;
        console.log(`[audio ${ts()}] PERSISTENT_EL_CREATED on first gesture`);
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

  // ── Cleanup on unmount ─────────────────────────────────────────────────────
  useEffect(() => () => {
    audioListenersCleanupRef.current?.();
    if (persistentAudioRef.current) {
      persistentAudioRef.current.pause();
      persistentAudioRef.current.src = '';
    }
    if (blobUrlRef.current) { URL.revokeObjectURL(blobUrlRef.current); blobUrlRef.current = null; }
    clearTimeout(bubbleTimer.current);
    karaokeRef.current.forEach(id => clearTimeout(id));
  }, []);

  // ── No game sequence → navigate to regular LessonPlayer (no ?level=1 so no loop) ───
  if (!lesson || !gameSequence) {
    navigate(`/child/lesson/${subjectId}/${lessonIdx}`, { replace: true });
    return null;
  }

  // currentStep is memoized above (before the early return) so the reference stays
  // stable across re-renders within the same screen — see comment there.
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
    if (message) speak(message, undefined, { noKaraoke: true });
  }

  function handleNarrate(message, onDone) {
    if (message) speak(message, onDone);
    else onDone?.();
  }

  function handlePause() {
    if (!isPaused) {
      // ── PAUSE ─────────────────────────────────────────────────────────────
      isPausedRef.current = true;   // set before state so closures see it immediately
      setIsPaused(true);

      // Stop audio immediately — onended won't fire so auto-advance stays frozen.
      persistentAudioRef.current?.pause();

      // Cancel any pending advance/unlock timer; record remaining time for resume.
      if (fallbackTimerRef.current && timerInfoRef.current) {
        clearTimeout(fallbackTimerRef.current);
        fallbackTimerRef.current = null;
        const elapsed = Date.now() - timerInfoRef.current.startedAt;
        timerInfoRef.current = {
          ...timerInfoRef.current,
          remaining: Math.max(0, timerInfoRef.current.ms - elapsed),
        };
      }
    } else {
      // ── RESUME ────────────────────────────────────────────────────────────
      isPausedRef.current = false;  // clear before anything fires so callbacks aren't re-deferred
      setIsPaused(false);

      // Resume audio from where it paused — onended will fire normally.
      persistentAudioRef.current?.play().catch(() => {});

      // Restore any advance/unlock timer that was cancelled on pause.
      if (timerInfoRef.current?.remaining !== undefined) {
        const { fn, remaining } = timerInfoRef.current;
        timerInfoRef.current = null;
        fallbackTimerRef.current = setTimeout(fn, remaining);
      }

      // Fire any onDone that finish() deferred while paused (e.g. if audio ended
      // for a non-playback reason like PLAY_BLOCKED or fetch-error while paused).
      const deferred = pendingOnDoneRef.current;
      pendingOnDoneRef.current = null;
      deferred?.();
    }
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
      case 'tap-right':    return <TapTheRightOne  step={step} onComplete={advance} onReady={handleReady} onWrong={handleWrong} onWin={handleWin} disabled={interactionLocked || isPaused} readingIdx={readingIdx} karaokeWords={karaokeWords} karaokeIdx={karaokeIdx} />;
      case 'count':        return <CountAndTap     step={step} onReady={handleReady} disabled={interactionLocked || isPaused} karaokeWords={karaokeWords} karaokeIdx={karaokeIdx} />;
      case 'sort':
      case 'sort-buckets': return <SortIntoBuckets step={step} onReady={handleReady} onComplete={advance} onNarrate={handleNarrate} onWin={handleWin} disabled={interactionLocked || isPaused} karaokeWords={karaokeWords} karaokeIdx={karaokeIdx} />;
      case 'yes-no':       return <YesOrNo         step={step} onComplete={advance} onReady={handleReady} onWrong={handleWrong} onWin={handleWin} disabled={interactionLocked || isPaused} karaokeWords={karaokeWords} karaokeIdx={karaokeIdx} />;
      case 'cause-effect': return <CauseAndEffect  step={step} onComplete={advance} onNarrate={handleNarrate} disabled={interactionLocked} isPaused={isPaused} karaokeWords={karaokeWords} karaokeIdx={karaokeIdx} />;
      case 'guided-demo':  return <GuidedDemo      step={step} onComplete={advance} onNarrate={handleNarrate} disabled={interactionLocked} karaokeWords={karaokeWords} karaokeIdx={karaokeIdx} />;
      case 'drag-match':   return <DragAndMatch    step={step} onComplete={advance} disabled={interactionLocked || isPaused} karaokeWords={karaokeWords} karaokeIdx={karaokeIdx} />;
      case 'count-array':  return <CountArray      step={step} onComplete={advance} onNarrate={handleNarrate} disabled={interactionLocked} karaokeWords={karaokeWords} karaokeIdx={karaokeIdx} />;
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
          onClick={() => { if (!isPaused) speak(buildReplayText(currentStep)); }}
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
                opacity: (screenIdx > 0 && !isPaused) ? 0.75 : 0.2,
                pointerEvents: (screenIdx > 0 && !isPaused) ? 'auto' : 'none',
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
              onClick={() => { if (canAdvance && !isPaused) advance(); }}
              style={{
                ...navBtnBase,
                opacity: (canAdvance && !isPaused) ? 1 : 0.2,
                pointerEvents: (canAdvance && !isPaused) ? 'auto' : 'none',
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
