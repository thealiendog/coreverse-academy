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
import INNERWORLD_L02     from '../../data/innerworld_explorer_l02_screens';
import INNERWORLD_L03     from '../../data/innerworld_explorer_l03_screens';
import INNERWORLD_L04     from '../../data/innerworld_explorer_l04_screens';
import INNERWORLD_L05     from '../../data/innerworld_explorer_l05_screens';
import INNERWORLD_L06     from '../../data/innerworld_explorer_l06_screens';
import INNERWORLD_L07     from '../../data/innerworld_explorer_l07_screens';
import INNERWORLD_L08     from '../../data/innerworld_explorer_l08_screens';
import INNERWORLD_L09     from '../../data/innerworld_explorer_l09_screens';
import INNERWORLD_L10     from '../../data/innerworld_explorer_l10_screens';
import INNERWORLD_L11     from '../../data/innerworld_explorer_l11_screens';
import INNERWORLD_L12     from '../../data/innerworld_explorer_l12_screens';
import INNERWORLD_L13     from '../../data/innerworld_explorer_l13_screens';
import INNERWORLD_L14     from '../../data/innerworld_explorer_l14_screens';
import INNERWORLD_L15     from '../../data/innerworld_explorer_l15_screens';
import INNERWORLD_L16     from '../../data/innerworld_explorer_l16_screens';
import INNERWORLD_L17     from '../../data/innerworld_explorer_l17_screens';
import INNERWORLD_L18     from '../../data/innerworld_explorer_l18_screens';
import INNERWORLD_L19     from '../../data/innerworld_explorer_l19_screens';
import INNERWORLD_L20     from '../../data/innerworld_explorer_l20_screens';

import COSMOS_L01        from '../../data/cosmos_explorer_l01_screens';
import COSMOS_L02        from '../../data/cosmos_explorer_l02_screens';
import COSMOS_L03        from '../../data/cosmos_explorer_l03_screens';
import COSMOS_L04        from '../../data/cosmos_explorer_l04_screens';
import COSMOS_L05        from '../../data/cosmos_explorer_l05_screens';
import COSMOS_L06        from '../../data/cosmos_explorer_l06_screens';
import COSMOS_L07        from '../../data/cosmos_explorer_l07_screens';
import COSMOS_L08        from '../../data/cosmos_explorer_l08_screens';
import COSMOS_L09        from '../../data/cosmos_explorer_l09_screens';
import COSMOS_L10        from '../../data/cosmos_explorer_l10_screens';
import COSMOS_L11        from '../../data/cosmos_explorer_l11_screens';
import COSMOS_L12        from '../../data/cosmos_explorer_l12_screens';
import COSMOS_L13        from '../../data/cosmos_explorer_l13_screens';
import COSMOS_L14        from '../../data/cosmos_explorer_l14_screens';
import COSMOS_L15        from '../../data/cosmos_explorer_l15_screens';
import COSMOS_L16        from '../../data/cosmos_explorer_l16_screens';
import COSMOS_L17        from '../../data/cosmos_explorer_l17_screens';
import COSMOS_L18        from '../../data/cosmos_explorer_l18_screens';
import COSMOS_L19        from '../../data/cosmos_explorer_l19_screens';
import COSMOS_L20        from '../../data/cosmos_explorer_l20_screens';

// ── Money & Business lesson imports ──────────────────────────────────────────
import MB_L01 from '../../data/moneybusiness_explorer_l01_screens';
import MB_L02 from '../../data/moneybusiness_explorer_l02_screens';
import MB_L03 from '../../data/moneybusiness_explorer_l03_screens';
import MB_L04 from '../../data/moneybusiness_explorer_l04_screens';
import MB_L05 from '../../data/moneybusiness_explorer_l05_screens';
import MB_L06 from '../../data/moneybusiness_explorer_l06_screens';
import MB_L07 from '../../data/moneybusiness_explorer_l07_screens';
import MB_L08 from '../../data/moneybusiness_explorer_l08_screens';
import MB_L09 from '../../data/moneybusiness_explorer_l09_screens';
import MB_L10 from '../../data/moneybusiness_explorer_l10_screens';
import MB_L11 from '../../data/moneybusiness_explorer_l11_screens';
import MB_L12 from '../../data/moneybusiness_explorer_l12_screens';
import MB_L13 from '../../data/moneybusiness_explorer_l13_screens';
import MB_L14 from '../../data/moneybusiness_explorer_l14_screens';
import MB_L15 from '../../data/moneybusiness_explorer_l15_screens';
import MB_L16 from '../../data/moneybusiness_explorer_l16_screens';
import MB_L17 from '../../data/moneybusiness_explorer_l17_screens';
import MB_L18 from '../../data/moneybusiness_explorer_l18_screens';
import MB_L19 from '../../data/moneybusiness_explorer_l19_screens';
import MB_L20 from '../../data/moneybusiness_explorer_l20_screens';

// ── Future Skills lesson imports ──────────────────────────────────────────────
import FS_L01 from '../../data/futureskills_explorer_l01_screens';
import FS_L02 from '../../data/futureskills_explorer_l02_screens';
import FS_L03 from '../../data/futureskills_explorer_l03_screens';
import FS_L04 from '../../data/futureskills_explorer_l04_screens';
import FS_L05 from '../../data/futureskills_explorer_l05_screens';
import FS_L06 from '../../data/futureskills_explorer_l06_screens';
import FS_L07 from '../../data/futureskills_explorer_l07_screens';
import FS_L08 from '../../data/futureskills_explorer_l08_screens';
import FS_L09 from '../../data/futureskills_explorer_l09_screens';
import FS_L10 from '../../data/futureskills_explorer_l10_screens';
import FS_L11 from '../../data/futureskills_explorer_l11_screens';
import FS_L12 from '../../data/futureskills_explorer_l12_screens';
import FS_L13 from '../../data/futureskills_explorer_l13_screens';
import FS_L14 from '../../data/futureskills_explorer_l14_screens';
import FS_L15 from '../../data/futureskills_explorer_l15_screens';
import FS_L16 from '../../data/futureskills_explorer_l16_screens';
import FS_L17 from '../../data/futureskills_explorer_l17_screens';
import FS_L18 from '../../data/futureskills_explorer_l18_screens';
import FS_L19 from '../../data/futureskills_explorer_l19_screens';
import FS_L20 from '../../data/futureskills_explorer_l20_screens';
import SL_L01 from '../../data/socialleadership_explorer_l01_screens';
import SL_L02 from '../../data/socialleadership_explorer_l02_screens';
import SL_L03 from '../../data/socialleadership_explorer_l03_screens';
import SL_L04 from '../../data/socialleadership_explorer_l04_screens';
import SL_L05 from '../../data/socialleadership_explorer_l05_screens';
import SL_L06 from '../../data/socialleadership_explorer_l06_screens';
import SL_L07 from '../../data/socialleadership_explorer_l07_screens';
import SL_L08 from '../../data/socialleadership_explorer_l08_screens';
import SL_L09 from '../../data/socialleadership_explorer_l09_screens';
import SL_L10 from '../../data/socialleadership_explorer_l10_screens';
import SL_L11 from '../../data/socialleadership_explorer_l11_screens';
import SL_L12 from '../../data/socialleadership_explorer_l12_screens';
import SL_L13 from '../../data/socialleadership_explorer_l13_screens';
import SL_L14 from '../../data/socialleadership_explorer_l14_screens';
import SL_L15 from '../../data/socialleadership_explorer_l15_screens';
import SL_L16 from '../../data/socialleadership_explorer_l16_screens';
import SL_L17 from '../../data/socialleadership_explorer_l17_screens';
import SL_L18 from '../../data/socialleadership_explorer_l18_screens';
import SL_L19 from '../../data/socialleadership_explorer_l19_screens';
import SL_L20 from '../../data/socialleadership_explorer_l20_screens';

import LW_L01 from '../../data/lifewellness_explorer_l01_screens';
import LW_L02 from '../../data/lifewellness_explorer_l02_screens';
import LW_L03 from '../../data/lifewellness_explorer_l03_screens';
import LW_L04 from '../../data/lifewellness_explorer_l04_screens';
import LW_L05 from '../../data/lifewellness_explorer_l05_screens';
import LW_L06 from '../../data/lifewellness_explorer_l06_screens';
import LW_L07 from '../../data/lifewellness_explorer_l07_screens';
import LW_L08 from '../../data/lifewellness_explorer_l08_screens';
import LW_L09 from '../../data/lifewellness_explorer_l09_screens';
import LW_L10 from '../../data/lifewellness_explorer_l10_screens';
import LW_L11 from '../../data/lifewellness_explorer_l11_screens';
import LW_L12 from '../../data/lifewellness_explorer_l12_screens';
import LW_L13 from '../../data/lifewellness_explorer_l13_screens';
import LW_L14 from '../../data/lifewellness_explorer_l14_screens';
import LW_L15 from '../../data/lifewellness_explorer_l15_screens';
import LW_L16 from '../../data/lifewellness_explorer_l16_screens';
import LW_L17 from '../../data/lifewellness_explorer_l17_screens';
import LW_L18 from '../../data/lifewellness_explorer_l18_screens';
import LW_L19 from '../../data/lifewellness_explorer_l19_screens';
import LW_L20 from '../../data/lifewellness_explorer_l20_screens';
import CA_L01 from '../../data/creativearts_explorer_l01_screens';
import CA_L02 from '../../data/creativearts_explorer_l02_screens';
import CA_L03 from '../../data/creativearts_explorer_l03_screens';
import CA_L04 from '../../data/creativearts_explorer_l04_screens';
import CA_L05 from '../../data/creativearts_explorer_l05_screens';
import CA_L06 from '../../data/creativearts_explorer_l06_screens';
import CA_L07 from '../../data/creativearts_explorer_l07_screens';
import CA_L08 from '../../data/creativearts_explorer_l08_screens';
import CA_L09 from '../../data/creativearts_explorer_l09_screens';
import CA_L10 from '../../data/creativearts_explorer_l10_screens';
import CA_L11 from '../../data/creativearts_explorer_l11_screens';
import CA_L12 from '../../data/creativearts_explorer_l12_screens';
import CA_L13 from '../../data/creativearts_explorer_l13_screens';
import CA_L14 from '../../data/creativearts_explorer_l14_screens';
import CA_L15 from '../../data/creativearts_explorer_l15_screens';
import CA_L16 from '../../data/creativearts_explorer_l16_screens';
import CA_L17 from '../../data/creativearts_explorer_l17_screens';
import CA_L18 from '../../data/creativearts_explorer_l18_screens';
import CA_L19 from '../../data/creativearts_explorer_l19_screens';
import CA_L20 from '../../data/creativearts_explorer_l20_screens';

const EXPLORER_DATA = {
  'inner-world': {
    ...INNERWORLD_SCREENS,
    lessons: [...INNERWORLD_SCREENS.lessons, ...INNERWORLD_L02.lessons, ...INNERWORLD_L03.lessons, ...INNERWORLD_L04.lessons, ...INNERWORLD_L05.lessons, ...INNERWORLD_L06.lessons, ...INNERWORLD_L07.lessons, ...INNERWORLD_L08.lessons, ...INNERWORLD_L09.lessons, ...INNERWORLD_L10.lessons, ...INNERWORLD_L11.lessons, ...INNERWORLD_L12.lessons, ...INNERWORLD_L13.lessons, ...INNERWORLD_L14.lessons, ...INNERWORLD_L15.lessons, ...INNERWORLD_L16.lessons, ...INNERWORLD_L17.lessons, ...INNERWORLD_L18.lessons, ...INNERWORLD_L19.lessons, ...INNERWORLD_L20.lessons],
  },
  'cosmos': {
    ageBand:   'explorers',
    subjectId: 'cosmos',
    guide:     'Nova',
    lessons:   [...COSMOS_L01.lessons, ...COSMOS_L02.lessons, ...COSMOS_L03.lessons, ...COSMOS_L04.lessons, ...COSMOS_L05.lessons, ...COSMOS_L06.lessons, ...COSMOS_L07.lessons, ...COSMOS_L08.lessons, ...COSMOS_L09.lessons, ...COSMOS_L10.lessons, ...COSMOS_L11.lessons, ...COSMOS_L12.lessons, ...COSMOS_L13.lessons, ...COSMOS_L14.lessons, ...COSMOS_L15.lessons, ...COSMOS_L16.lessons, ...COSMOS_L17.lessons, ...COSMOS_L18.lessons, ...COSMOS_L19.lessons, ...COSMOS_L20.lessons],
  },
  'money': {
    ageBand:   'explorers',
    subjectId: 'money',
    guide:     'Ace',
    lessons:   [...MB_L01.lessons, ...MB_L02.lessons, ...MB_L03.lessons, ...MB_L04.lessons, ...MB_L05.lessons, ...MB_L06.lessons, ...MB_L07.lessons, ...MB_L08.lessons, ...MB_L09.lessons, ...MB_L10.lessons, ...MB_L11.lessons, ...MB_L12.lessons, ...MB_L13.lessons, ...MB_L14.lessons, ...MB_L15.lessons, ...MB_L16.lessons, ...MB_L17.lessons, ...MB_L18.lessons, ...MB_L19.lessons, ...MB_L20.lessons],
  },

  'future-skills': {
    ageBand:   'explorers',
    subjectId: 'future-skills',
    guide:     'Byte',
    lessons:   [...FS_L01.lessons, ...FS_L02.lessons, ...FS_L03.lessons, ...FS_L04.lessons, ...FS_L05.lessons, ...FS_L06.lessons, ...FS_L07.lessons, ...FS_L08.lessons, ...FS_L09.lessons, ...FS_L10.lessons, ...FS_L11.lessons, ...FS_L12.lessons, ...FS_L13.lessons, ...FS_L14.lessons, ...FS_L15.lessons, ...FS_L16.lessons, ...FS_L17.lessons, ...FS_L18.lessons, ...FS_L19.lessons, ...FS_L20.lessons],
  },

  'leadership': {
    ageBand:   'explorers',
    subjectId: 'leadership',
    guide:     'Valor',
    lessons:   [...SL_L01.lessons, ...SL_L02.lessons, ...SL_L03.lessons, ...SL_L04.lessons, ...SL_L05.lessons, ...SL_L06.lessons, ...SL_L07.lessons, ...SL_L08.lessons, ...SL_L09.lessons, ...SL_L10.lessons, ...SL_L11.lessons, ...SL_L12.lessons, ...SL_L13.lessons, ...SL_L14.lessons, ...SL_L15.lessons, ...SL_L16.lessons, ...SL_L17.lessons, ...SL_L18.lessons, ...SL_L19.lessons, ...SL_L20.lessons],
  },

  'wellness': {
    ageBand:   'explorers',
    subjectId: 'wellness',
    guide:     'Terra',
    lessons:   [...LW_L01.lessons, ...LW_L02.lessons, ...LW_L03.lessons, ...LW_L04.lessons, ...LW_L05.lessons, ...LW_L06.lessons, ...LW_L07.lessons, ...LW_L08.lessons, ...LW_L09.lessons, ...LW_L10.lessons, ...LW_L11.lessons, ...LW_L12.lessons, ...LW_L13.lessons, ...LW_L14.lessons, ...LW_L15.lessons, ...LW_L16.lessons, ...LW_L17.lessons, ...LW_L18.lessons, ...LW_L19.lessons, ...LW_L20.lessons],
  },

  'creative-arts': {
    ageBand:   'explorers',
    subjectId: 'creative-arts',
    guide:     'Muse',
    lessons:   [...CA_L01.lessons, ...CA_L02.lessons, ...CA_L03.lessons, ...CA_L04.lessons, ...CA_L05.lessons, ...CA_L06.lessons, ...CA_L07.lessons, ...CA_L08.lessons, ...CA_L09.lessons, ...CA_L10.lessons, ...CA_L11.lessons, ...CA_L12.lessons, ...CA_L13.lessons, ...CA_L14.lessons, ...CA_L15.lessons, ...CA_L16.lessons, ...CA_L17.lessons, ...CA_L18.lessons, ...CA_L19.lessons, ...CA_L20.lessons],
  },
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

// ── Letter grade from first-try accuracy ─────────────────────────────────────
function getGrade(acc) {
  if (acc >= 0.95) return 'A+';
  if (acc >= 0.90) return 'A';
  if (acc >= 0.85) return 'B+';
  if (acc >= 0.80) return 'B';
  if (acc >= 0.75) return 'C+';
  if (acc >= 0.70) return 'C';
  return 'Practice More';
}

// ── Audio session unlock — module-level, persists for the SPA session ────────
// iOS requires at least one user gesture to authorize audio playback. Once the
// user taps the welcome screen (or the retry overlay), we mark the session as
// unlocked. Post-welcome speak() calls skip the fallback timer — iOS allows
// them via sticky-activation (user has previously interacted with the page).
// Resets on hard reload, which is correct (iOS requires one gesture per load).
let _audioSessionUnlocked = false;
function markAudioSessionUnlocked() {
  if (_audioSessionUnlocked) return;
  _audioSessionUnlocked = true;
  console.log('[iOS-UNLOCK] AudioContext unlocked, will persist for session');
}
function isAudioSessionUnlocked() { return _audioSessionUnlocked; }

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
  const [countdown,       setCountdown]       = useState(null); // null | 3 | 2 | 1
  const [audioPaused,     setAudioPaused]     = useState(false);
  const [audioFallback,   setAudioFallback]   = useState(false); // Fix 1/5: show "Tap to hear Sage"
  const [welcomeReady,    setWelcomeReady]    = useState(false); // Fix 2: prewarm complete, show tap cue

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
  const audioPrewarmRef           = useRef(new Map()); // text → Promise | { blobUrl, alignment } pre-fetched results
  const isPausedRef               = useRef(false);    // true while user has paused — blocks all audio triggers
  const audioFailTimerRef         = useRef(null);     // Fix 5: 500ms timer to detect audio-never-started
  const welcomePlayedRef          = useRef(false);    // Fix 2: true after welcome audio tap-to-play fired
  const welcomePlayFnRef          = useRef(null);     // Fix 2: stores the speak() chain, called from onWelcomeTap
  const lessonStartTimeRef        = useRef(Date.now()); // set once on mount
  const lessonProgressRef         = useRef({ interactiveDetails: null, questionDetails: [], firstTryAccuracy: 0 });
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
      // iOS autoplay retry — if speak() already set src+load() before gesture arrived,
      // the el.play() call from the async context was silently blocked. Retry it now,
      // synchronously inside this gesture event, so iOS grants permission.
      const existingEl = persistentAudioRef.current;
      if (existingEl && existingEl.src && existingEl.paused && !existingEl.ended && !isPausedRef.current) {
        console.log('[TAP] Sync play() called — retrying autoplay-blocked audio in gesture handler');
        existingEl.play().catch(() => {});
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
    // Clean up any cached blob URLs
    audioPrewarmRef.current.forEach(v => { if (v?.blobUrl) URL.revokeObjectURL(v.blobUrl); });
    audioPrewarmRef.current.clear();
  }, []);

  // ── Pre-warm welcome audio immediately on mount (Fix 2: Day 1.8 Fix 8 restore) ─
  // Fetches + pre-buffers first screen audio before user taps.
  // Sets welcomeReady when done so the tap-cue can animate in.
  useEffect(() => {
    const firstScreen = screens[0];
    if (!firstScreen || firstScreen.type !== 'welcome') return;
    const text = getScreenText(firstScreen, childName);
    if (!text) return;
    console.log('[PREWARM] Mount — starting welcome audio pre-fetch...');
    prewarmAudio(text).then(result => {
      if (result?.blobUrl) {
        console.log('[PREWARM] Welcome audio ready — tap cue active');
        setWelcomeReady(true);
      }
    });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

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

    const speakCallTime = Date.now();

    try {
      const voiceId = voiceIdRef.current;
      const modelId = modelIdRef.current;

      // ── Pre-warm cache check ─────────────────────────────────────────────
      // Cache holds: a Promise (in-progress fetch) or { blobUrl, alignment } (ready).
      // We await the Promise so speak() never races with an in-progress prewarm.
      // The blobUrl gives instant audio (no network wait); playback still uses
      // persistentAudioRef (the gesture-authorized element) via src+load below.
      let blobUrl, alignment;
      const cached = audioPrewarmRef.current.get(text);
      if (cached) {
        let result = cached;
        if (cached instanceof Promise) {
          console.log(`[PREWARM] Awaiting in-progress prewarm for "${text.slice(0, 40)}..."`);
          result = await cached;
          if (gen !== speakGenRef.current) { clearTimeout(deadman); return; }
        }
        if (result?.blobUrl) {
          blobUrl   = result.blobUrl;
          alignment = result.alignment;
          audioPrewarmRef.current.delete(text);
          if (blobUrlRef.current) { URL.revokeObjectURL(blobUrlRef.current); blobUrlRef.current = null; }
          console.log(`[PREWARM] Cache hit — blobUrl ready, zero network wait (${Date.now() - speakCallTime}ms)`);
        }
      }

      if (!blobUrl) {
        // Normal network fetch
        const res = await fetch('/.netlify/functions/nova-speak', {
          method:  'POST',
          headers: { 'Content-Type': 'application/json' },
          body:    JSON.stringify({ text, voiceId, ...(modelId && { modelId }) }),
          signal:  abortController.signal,
        });
        if (!res.ok) throw new Error('tts-unavailable');

        const alignmentHeader = res.headers.get('X-Alignment');
        alignment = alignmentHeader ? JSON.parse(alignmentHeader) : null;
        const blob = await res.blob();

        if (gen !== speakGenRef.current) {
          clearTimeout(deadman); onDone?.(); return;
        }
        if (blobUrlRef.current) { URL.revokeObjectURL(blobUrlRef.current); blobUrlRef.current = null; }
        blobUrl = URL.createObjectURL(blob);
      }

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
      // Always use the persistent (gesture-authorized) element — assign blob src now.
      // blobUrl is in-memory, so this is effectively zero-latency even on prewarm hits.
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

      // 'playing' event → disarm fail-safety timer + clear loading indicator.
      // Registered BEFORE el.play() so it catches events that fire during play() resolution.
      if (audioFailTimerRef.current) { clearTimeout(audioFailTimerRef.current); audioFailTimerRef.current = null; }
      const onPlaying = () => {
        if (audioFailTimerRef.current) { clearTimeout(audioFailTimerRef.current); audioFailTimerRef.current = null; }
        setAudioFallback(false);
        setLoadingAudio(false);
        console.log(`[AUDIO-CHECK] Audio playing successfully — ${new Date().toISOString()}`);
      };
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

      // Arm fail-safety timer BEFORE await el.play() — critical for correctness.
      // Race: 'playing' can fire during play() resolution before the timer ref is set,
      // making onPlaying()'s clearTimeout a no-op. Belt-and-suspenders: also check
      // !el.paused + isAudioSessionUnlocked() inside callback.
      audioFailTimerRef.current = setTimeout(() => {
        audioFailTimerRef.current = null;
        if (done) return;
        const curEl = persistentAudioRef.current;
        if (curEl && !curEl.paused && !curEl.ended) {
          // 'playing' fired before timer was armed — audio IS playing.
          console.log('[AUDIO-CHECK] Audio playing successfully, no fallback needed');
          return;
        }
        if (isAudioSessionUnlocked()) {
          // Post-welcome: iOS allows play() via sticky activation; audio is buffering slowly.
          // Don't show fallback — onerror + 35s deadman handle genuine stalls.
          console.log('[AUDIO-CHECK] Session unlocked — audio buffering on slow network, no fallback');
          return;
        }
        // Pre-unlock (welcome): show icon prompt so user can trigger gesture.
        console.log('[AUDIO-FALLBACK] Audio did not start in 1500ms — reason: session-not-unlocked, showing icon prompt');
        setAudioFallback(true);
      }, 1500); // 1500ms: generous slack for slow mobile networks + iOS buffering time

      console.log(`[AUDIO-CHECK] Screen mount — play() called at ${new Date().toISOString()}`);
      const playErr = await el.play().catch(err => err);
      if (playErr instanceof Error) {
        // play() rejected — disarm timer before handling
        if (audioFailTimerRef.current) { clearTimeout(audioFailTimerRef.current); audioFailTimerRef.current = null; }
        if (playErr.name === 'NotAllowedError') {
          // iOS gesture policy blocked play(). Don't call finish() — element stays loaded.
          // Icon-only overlay lets user retry inside a gesture.
          console.log('[AUDIO-FALLBACK] Showing prompt — reason: NotAllowedError (gesture policy)');
          setAudioFallback(true);
          // deadman still running — fires finish() at 35s as last resort
          return;
        }
        clearTimeout(deadman);
        finish();
        return;
      }
      // play() resolved — timer already armed; 'playing' event or timer will settle state

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
    if (audioFailTimerRef.current) { clearTimeout(audioFailTimerRef.current); audioFailTimerRef.current = null; }
    const el = persistentAudioRef.current;
    if (el) {
      // Null handlers BEFORE pause so no stale onended fires on the tail of playback
      el.onended      = null;
      el.onerror      = null;
      el.ontimeupdate = null;
      el.onplay       = null;
      el.pause();
    }
    karaokeRef.current.forEach(id => clearTimeout(id));
    karaokeRef.current = [];
    setSpeaking(false);
    setLoadingAudio(false);
    setAudioFallback(false);
    setKaraokeIdx(-1);
    setKaraokeWords([]);
  }, []);

  // ── Pre-warm audio cache — Promise-based so speak() can await in-progress fetches ──
  // Stores Promise immediately → speak() can await it rather than spawning a duplicate fetch.
  // After resolution, map entry is replaced with { blobUrl, alignment } for direct access.
  const prewarmAudio = useCallback((text) => {
    if (!text || !audioEnabledRef.current) return Promise.resolve(null);
    const existing = audioPrewarmRef.current.get(text);
    if (existing) return existing instanceof Promise ? existing : Promise.resolve(existing);

    const p = (async () => {
      try {
        const res = await fetch('/.netlify/functions/nova-speak', {
          method:  'POST',
          headers: { 'Content-Type': 'application/json' },
          body:    JSON.stringify({ text, voiceId: voiceIdRef.current, ...(modelIdRef.current && { modelId: modelIdRef.current }) }),
          // No AbortController — prewarm runs independently of the main speak() lifecycle
        });
        if (!res.ok) { audioPrewarmRef.current.delete(text); return null; }
        const alignmentHeader = res.headers.get('X-Alignment');
        const alignment = alignmentHeader ? JSON.parse(alignmentHeader) : null;
        const blob = await res.blob();
        const blobUrl = URL.createObjectURL(blob);
        // Store blobUrl only — do NOT pre-create a new Audio() here.
        // A new Audio element created in a non-gesture Promise callback is not
        // gesture-authorized on iOS 13-14; play() on it throws NotAllowedError
        // even after the user has tapped the welcome screen. The persistent
        // gesture-authorized element (persistentAudioRef) handles playback;
        // the blobUrl gives us the network-zero-latency win without the iOS risk.
        const result = { blobUrl, alignment };
        // Replace Promise with result so future callers get it directly
        audioPrewarmRef.current.set(text, result);
        console.log(`[PREWARM] Audio ready (blobUrl, ${blob.size} bytes) — no preppedEl`);
        return result;
      } catch {
        audioPrewarmRef.current.delete(text);
        return null;
      }
    })();

    // Store the Promise immediately — speak() can await it if called mid-fetch
    audioPrewarmRef.current.set(text, p);
    return p;
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // ── Lesson progress callbacks — called by InteractiveExplore / MasteryQuiz ──
  const onInteractiveComplete = useCallback((details) => {
    lessonProgressRef.current.interactiveDetails = details;
    console.log('[LESSON] Interactive details recorded:', JSON.stringify(details));
  }, []);

  const onQuizComplete = useCallback((questionDetails, firstTryAccuracy) => {
    lessonProgressRef.current.questionDetails    = questionDetails;
    lessonProgressRef.current.firstTryAccuracy   = firstTryAccuracy;
    console.log('[LESSON] Quiz details recorded. firstTryAccuracy:', firstTryAccuracy.toFixed(2));
  }, []);

  // Prefetch RealWorldConnection audio when kid reaches the last quiz question
  const onLastQuizQuestion = useCallback(() => {
    const nextIdx    = screenIdxRef.current + 1;
    const nextScreen = screens[nextIdx];
    if (!nextScreen || nextScreen.type !== 'real-world') return;
    const r = t => (t || '').replace(/\{name\}/g, childName);
    const toPrewarm = [
      r(nextScreen.guideText),
      'Family Adventure',
      nextScreen.familyAdventure || '',
      'Create Something',
      nextScreen.creativePrompt  || '',
    ].filter(Boolean);
    console.log('[PREWARM] Last quiz question — prefetching RealWorldConnection audio');
    toPrewarm.forEach(t => prewarmAudio(t));
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // ── Fix 1+2: Gesture-based audio retry / welcome tap ─────────────────────
  // Called from "Tap to hear Sage" button (welcome) or "Tap to hear" overlay.
  // Must stay synchronous: silent prime → play() — NO awaits in between.
  const retryAudio = useCallback(() => {
    console.log('[AUDIO-FALLBACK] User tapped, retrying audio with fresh gesture');
    markAudioSessionUnlocked(); // overlay tap also counts as gesture — unlock for session
    // Silent audio prime — unlocks iOS AudioContext inside gesture handler
    try {
      const s = new Audio('data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA');
      s.play().catch(() => {});
      console.log('[iOS-UNLOCK] Silent audio primed at', new Date().toISOString());
    } catch { /* no audio support */ }

    setAudioFallback(false);

    // Attempt play on existing element first (element already has src+load from prewarm)
    const el = persistentAudioRef.current;
    if (el && el.src && !el.ended) {
      console.log('[TAP] Welcome audio play() called synchronously');
      el.play().catch(err => {
        console.error('[TAP] Play failed:', err);
      });
      return;
    }

    // Element gone — fall back to async speak() for current screen
    const screen = screens[screenIdxRef.current];
    if (screen) {
      const text = getScreenText(screen, childName);
      if (text) speak(text);
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // ── Welcome-tap handler — fires Sage greeting inside a user gesture ─────────
  // iOS requires el.play() to be called synchronously within a touchstart/click handler.
  // We store the full speak() chain in welcomePlayFnRef (set by the [screenIdx] effect)
  // and call it here — giving speak() a gesture context while keeping countdown wiring intact.
  const onWelcomeTap = useCallback(() => {
    if (welcomePlayedRef.current) return; // ignore double-taps
    welcomePlayedRef.current = true;
    setWelcomeReady(false); // hide the tap-cue immediately
    markAudioSessionUnlocked(); // welcome tap = first user gesture — unlock audio for session

    // Silent audio prime — unlocks iOS AudioContext synchronously inside this gesture
    try {
      const s = new Audio('data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA');
      s.play().catch(() => {});
      console.log('[iOS-UNLOCK] Silent audio primed at', new Date().toISOString());
    } catch { /* no audio support */ }

    console.log('[TAP] Welcome tap — calling welcomePlayFnRef');
    welcomePlayFnRef.current?.();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

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

    // Reset karaoke + hint + pause state
    karaokeRef.current.forEach(id => clearTimeout(id));
    karaokeRef.current = [];
    setKaraokeIdx(-1);
    setKaraokeWords([]);
    setShowVocabHint(false);
    setAudioPaused(false);
    isPausedRef.current = false;

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
        if (isPausedRef.current) {
          console.log('[PAUSE-BLOCK] Skipped auto-advance tick — audio is paused');
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
      // Sequence: headline (noKaraoke) → 150ms → paragraphs (karaoke) → vocab hint → countdown
      // Body audio is pre-fetched in parallel so it's ready the moment the title finishes.
      const headline = screen.headline || '';
      const paraText = (screen.paragraphs || []).join(' ');

      // Pre-fetch body audio NOW — headline will play while body downloads in background
      if (paraText) {
        console.log(`[PREWARM] Section ${screen.section} — pre-fetching body audio in background...`);
        prewarmAudio(paraText).then(() => {
          console.log(`[PREWARM] Section ${screen.section} title + body fetched, ready`);
        });
      }

      console.log(`[TTS] Screen ${screenIdx} magazine — Reading title: "${headline}"`);
      speak(headline, () => {
        if (cancelled) return;
        const titleEndTime = Date.now();
        const t1 = setTimeout(() => {
          if (cancelled) return;
          if (isPausedRef.current) {
            console.log('[PAUSE-BLOCK] Skipped body audio in chain timer — audio is paused');
            return;
          }
          console.log(`[CHAIN] Title ended, playing body (gap: ${Date.now() - titleEndTime}ms)`);
          console.log(`[TTS] Screen ${screenIdx} magazine — Reading paragraphs: "${paraText.slice(0, 60)}..."`);
          speak(paraText, () => {
            if (cancelled) return;
            console.log(`[AUTO-ADVANCE] Audio ended at ${new Date().toISOString()}, starting 1s buffer...`);
            // One-time vocab hint / tutorial
            if (screen.vocab?.length > 0 && !localStorage.getItem('explorer_vocab_hint_shown')) {
              setShowVocabHint(true);
              console.log(`[TUTORIAL] Vocab tutorial shown for child ${child?.name || 'unknown'} (id: ${child?.id || 'no-id'})`);
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
                // Start countdown after hint + 1s buffer
                const tCD = setTimeout(() => {
                  if (!cancelled) {
                    console.log('[AUTO-ADVANCE] Buffer complete, starting countdown 3-2-1...');
                    startCountdownForScreen();
                  }
                }, 2600);
                timers.push(tCD);
              }, { noKaraoke: true });
            } else {
              const tBuffer = setTimeout(() => {
                if (cancelled) return;
                console.log('[AUTO-ADVANCE] Buffer complete, starting countdown 3-2-1...');
                startCountdownForScreen();
              }, 1000);
              timers.push(tBuffer);
            }
          });
        }, 150); // 150ms — body audio is pre-cached so it plays instantly
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
                  });
                }, 400);
                timers.push(t3);
              });
            }, 300);
            timers.push(t2);
          });
        }, 400);
        timers.push(t1);
      });

    } else if (screen.type === 'welcome') {
      // Fix 2: welcome audio is NOT auto-played here.
      // Store the speak() chain in welcomePlayFnRef — onWelcomeTap calls it inside a gesture,
      // so iOS gets gesture auth and iPad gets <200ms latency from the prewarm cache.
      welcomePlayedRef.current = false; // allow replay if user navigates back to welcome
      welcomePlayFnRef.current = null;
      const text = getScreenText(screen, childName);
      if (text) {
        welcomePlayFnRef.current = () => {
          if (cancelled) return;
          console.log('[TTS] Screen welcome — starting Sage greeting via gesture');
          speak(text, () => {
            if (cancelled) return;
            console.log('[AUTO-ADVANCE] Welcome audio ended, starting 1s buffer...');
            const tBuffer = setTimeout(() => {
              if (cancelled) return;
              console.log('[AUTO-ADVANCE] Buffer complete, starting countdown 3-2-1...');
              startCountdownForScreen();
            }, 1000);
            timers.push(tBuffer);
          });
        };
      }

    } else if (screen.type !== 'interactive' && screen.type !== 'quiz') {
      // interactive and quiz drive their own audio via onSpeak prop
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
        console.log('[CELEBRATION] Lesson complete — playing full enhanced fanfare (2.2s)');
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

  function pauseResumeAudio() {
    const el = persistentAudioRef.current;
    if (!el) return;
    if (audioPaused) {
      // Resume — clear global paused flag before play() so all downstream checks pass
      isPausedRef.current = false;
      el.play().catch(() => {});
      setAudioPaused(false);
      setSpeaking(true);
      console.log(`[PAUSE] State → playing. Resuming audio from ${el.currentTime.toFixed(2)}s`);
    } else if (speaking) {
      // Pause — set global flag first, then stop audio and countdown
      isPausedRef.current = true;
      el.pause();
      // Cancel countdown so it doesn't auto-advance while audio is paused
      if (countdownIntervalRef.current) {
        clearInterval(countdownIntervalRef.current);
        countdownIntervalRef.current = null;
      }
      setCountdown(null);
      setAudioPaused(true);
      setSpeaking(false);
      console.log(`[PAUSE] State → paused. Stopped audio at ${el.currentTime.toFixed(2)}s`);
    }
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
    audioPaused,
    karaokeWords,
    karaokeIdx,
    accent,
    onReplay:           replayAudio,
    onPauseResume:      pauseResumeAudio,
    onVocabTap:         (vocab) => setVocabOpen(vocab),
    onComplete:         goNext,
    showVocabHint,
    onDismissVocabHint: () => { setShowVocabHint(false); localStorage.setItem('explorer_vocab_hint_shown', 'true'); },
    // Audio + lesson progress hooks for interactive / quiz
    onSpeak:                speak,
    onPrewarm:              prewarmAudio,
    onStopAudio:            stopAudio,
    onInteractiveComplete,
    onQuizComplete,
    onLastQuestion:         onLastQuizQuestion,
    // Fix 2: welcome screen gesture-based audio
    welcomeReady,
    onWelcomeTap,
  };

  function renderScreen(screen) {
    switch (screen.type) {
      case 'welcome':    return <ExplorerWelcomeScreen {...commonProps} />;
      case 'magazine':   return <MagazineScreen        {...commonProps} />;
      case 'interactive':return <InteractiveExplore    {...commonProps} />;
      case 'quiz':       return <MasteryQuiz           {...commonProps} />;
      case 'real-world': return <RealWorldConnection   {...commonProps} />;
      case 'celebration': {
        const prog = lessonProgressRef.current;
        const fta  = prog.firstTryAccuracy || 0;
        const lessonRecord = {
          childId:                   child?.id || null,
          lessonId,
          subjectId,
          ageBand:                   'explorers',
          startedAt:                 lessonStartTimeRef.current,
          firstTryAccuracy:          fta,
          masteryScore:              100,
          letterGrade:               getGrade(fta),
          xpEarned:                  fta >= 0.8 ? 50 : 30,
          badgeEarned:               screen.badge || lesson.badge || '',
          questionDetails:           prog.questionDetails || [],
          interactiveDetails:        prog.interactiveDetails || null,
          creativePromptCompleted:   false,
          familyAdventureViewed:     false,
        };
        return <ExplorerCelebration {...commonProps} subjectId={subjectId} lessonTitle={lesson.title} lessonRecord={lessonRecord} />;
      }
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
      position:     'fixed',
      inset:        0,
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
        @keyframes vocab-pulse {
          0%, 100% { text-shadow: 0 0 0 rgba(96,165,250,0); }
          50%      { text-shadow: 0 0 12px rgba(96,165,250,0.9), 0 0 24px rgba(96,165,250,0.5); }
        }
        @keyframes af-fade-in {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes af-ripple {
          0%   { transform: scale(1);   opacity: 0.65; }
          100% { transform: scale(1.9); opacity: 0; }
        }
        @keyframes af-breathe {
          0%, 100% { transform: scale(1); }
          50%       { transform: scale(1.1); }
        }
        .vocab-tutorial-pulse {
          animation: vocab-pulse 1s ease-in-out infinite;
          display: inline;
        }

        /* ── Responsive layout ──────────────────────────────────────── */

        /* Explorer outer shell — position:fixed inset:0 is set inline */
        .explorer-shell {
          width: 100%;
          max-width: 100%;
        }
        @media (min-width: 768px) {
          .explorer-shell { font-size: 20px; }
          .explorer-header { padding: 16px 32px 14px !important; }
          .explorer-header-label { font-size: 0.85rem !important; }
          .explorer-nav { height: 92px !important; }
          .explorer-nav-btn { width: 64px !important; height: 64px !important; font-size: 1.8rem !important; }
          .explorer-nav-dot-active { width: 28px !important; }
        }
        @media (min-width: 1024px) {
          .explorer-shell { font-size: 21px; }
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
          background: #080618;
          flex-shrink: 0;
        }
        .magazine-text-col {
          padding: 16px 18px 24px;
        }
        @media (min-width: 768px) {
          .magazine-image-col { aspect-ratio: 4/3; }
          .magazine-text-col { padding: 28px 44px 36px; }
          .mag-headline { font-size: 2.2rem !important; }
          .mag-para { font-size: 1.2rem !important; line-height: 1.85 !important; }
          .mag-replay-btn { width: 56px !important; height: 56px !important; font-size: 1.4rem !important; top: 12px !important; right: 12px !important; }
        }
        @media (min-width: 1024px) {
          .magazine-outer {
            display: flex;
            flex-direction: row;
            overflow: hidden;
          }
          .magazine-image-col {
            width: 44%;
            aspect-ratio: unset;
            height: 100%;
            overflow: hidden;
          }
          .magazine-text-col {
            flex: 1;
            overflow-y: auto;
            overscroll-behavior: contain;
            -webkit-overflow-scrolling: touch;
            padding: 32px 44px 36px;
          }
          .mag-headline { font-size: 2.4rem !important; }
          .mag-para { font-size: 1.25rem !important; }
        }

        /* Real-world — wider on iPad */
        @media (min-width: 768px) {
          .real-world-scroll { padding: 36px 48px !important; }
          .real-world-card   { padding: 26px 24px !important; }
          .real-world-text   { font-size: 1.2rem !important; }
        }
        @media (min-width: 1024px) {
          .real-world-scroll { max-width: 820px; margin: 0 auto; }
          .real-world-text   { font-size: 1.25rem !important; }
        }

        /* Celebration — wider on iPad */
        @media (min-width: 768px) {
          .celebration-wrap { max-width: 620px; margin: 0 auto; }
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
        nextDisabled={currentScreen.type === 'quiz'}
        countdown={countdown}
      />

      {/* Audio-fail / gesture-unlock overlay — icon-only, no text (Fix 1/5 + Day 2.9) */}
      {audioFallback && (
        <div
          aria-label={`Tap to hear ${guideAvatar?.name || 'Guide'}`}
          onClick={retryAudio}
          style={{
            position:    'absolute',
            inset:       0,
            display:     'flex',
            alignItems:  'center',
            justifyContent: 'center',
            background:  'rgba(0,0,0,0.48)',
            zIndex:      90,
            cursor:      'pointer',
            touchAction: 'manipulation',
            animation:   'af-fade-in 0.2s ease both',
          }}
        >
          <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            {/* Expanding ripple ring */}
            <div style={{
              position:     'absolute',
              width:        88,
              height:       88,
              borderRadius: '50%',
              border:       `3px solid ${accent}`,
              animation:    'af-ripple 1.8s ease-out infinite',
              pointerEvents:'none',
            }} />
            {/* Speaker icon circle */}
            <div style={{
              width:          88,
              height:         88,
              borderRadius:   '50%',
              background:     accent,
              display:        'flex',
              alignItems:     'center',
              justifyContent: 'center',
              fontSize:       '2rem',
              animation:      'af-breathe 2s ease-in-out infinite',
              boxShadow:      `0 8px 32px ${accent}66`,
            }}>
              🔊
            </div>
          </div>
        </div>
      )}

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
