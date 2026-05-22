// ============================================================
// UpperExplorerLessonPlayer — Upper Explorers (ages 9-10) lesson engine
// Fork of ExplorerLessonPlayer with three additions:
//   A) reflection screen type
//   B) creativePrompt.open tier (3-way toggle handled by RealWorldConnection)
//   C) routes at /upper-explorer/:subjectId/:lessonId
// ============================================================
import { useState, useEffect, useRef, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getCurrentChild } from '../../lib/storage';
import { getAvatar } from '../../lib/constants';
import { getVoiceForGuide, getModelForGuide } from '../../data/guideVoices';
import { unlockAudio, sfx } from '../games/sounds';

import ExplorerWelcomeScreen  from './ExplorerWelcomeScreen';
import MagazineScreen         from './MagazineScreen';
import StoryBeatScreen        from './StoryBeatScreen';
import InteractiveExplore     from './InteractiveExplore';
import MasteryQuiz            from './MasteryQuiz';
import RealWorldConnection    from './RealWorldConnection';
import ExplorerCelebration    from './ExplorerCelebration';
import ExplorerNavigation     from './ExplorerNavigation';
import VocabPopup             from './VocabPopup';

// ── UE lesson data (one import per lesson wave as they are authored) ───────────
import SS_UE_L01 from '../../data/social_studies_upper_explorer_l01_screens';

const UE_DATA = {
  'social_studies': {
    ageBand:   'upper_explorers',
    subjectId: 'social_studies',
    guide:     'Atlas',
    lessons:   [...SS_UE_L01.lessons],
  },
};

// ── Spoken→visual word index map for karaoke alignment ───────────────────────
function buildSpokenToVisualMap(visualWords, spokenWords) {
  const norm = w => w.toLowerCase().replace(/[^a-z0-9áéíóúüñ]/g, '');
  const map  = [];
  let vStart = 0;
  for (const sw of spokenWords) {
    const swn = norm(sw);
    let found = -1;
    for (let vi = vStart; vi < visualWords.length; vi++) {
      if (norm(visualWords[vi]) === swn) { found = vi; break; }
    }
    map.push(found);
    if (found !== -1) vStart = found + 1;
  }
  return map;
}

// ── ElevenLabs character timestamps → per-word start times ───────────────────
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

// ── Resolve speech text per screen type ──────────────────────────────────────
function getScreenText(screen, childName) {
  const r = t => (t || '').replace(/\{name\}/g, childName);
  switch (screen?.type) {
    case 'welcome':     return r(screen.guideText);
    case 'magazine': {
      const h = screen.headline ? `${screen.headline}. ` : '';
      return h + (screen.paragraphs || []).join(' ');
    }
    case 'story-beat': {
      const h = screen.headline ? `${screen.headline}. ` : '';
      return h + (screen.paragraph || '');
    }
    case 'interactive':  return r(screen.guideText);
    case 'quiz':         return r(screen.guideText);
    case 'reflection':   return r(screen.guideText);
    case 'real-world':   return r(screen.guideText);
    case 'celebration':  return r(screen.message);
    default:             return '';
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

// ── Reflection screen (inline) ───────────────────────────────────────────────
// Shows Atlas guideText, 4 prompt cards, optional textarea, Save & Continue.
function ReflectionScreen({ screen, guideAvatar, accent, childName, karaokeWords, karaokeIdx, onComplete }) {
  const [selectedIdx, setSelectedIdx]   = useState(null);
  const [writeText,   setWriteText]     = useState('');

  const r = t => (t || '').replace(/\{name\}/g, childName || 'friend');
  const guideText = r(screen.guideText || '');

  // Karaoke highlight for guideText
  function renderKaraokeBlock(text, kWords, kIdx, color) {
    if (!text) return null;
    const sectionWords = text.split(/\s+/).filter(Boolean);
    const isActive = kWords.length > 0 && kWords.join(' ') === sectionWords.join(' ');
    const chunks = text.split(/(\s+)/);
    let wordCount = 0;
    return chunks.map((chunk, i) => {
      if (!chunk || /^\s+$/.test(chunk)) return <span key={i}>{chunk}</span>;
      const idx = wordCount++;
      const highlight = isActive && idx === kIdx;
      return (
        <span key={i} style={{
          color:      highlight ? color : 'inherit',
          textShadow: highlight ? `0 0 14px ${color}99` : 'none',
          fontWeight: highlight ? 700 : 'inherit',
          transition: 'color 0.08s ease, text-shadow 0.08s ease',
        }}>
          {chunk}
        </span>
      );
    });
  }

  function handleSave() {
    if (selectedIdx !== null && writeText.trim()) {
      const prompt = screen.prompts?.[selectedIdx];
      if (prompt) {
        const storageKey = `reflection_${screen.id}_${prompt.id}`;
        try {
          localStorage.setItem(storageKey, JSON.stringify({
            promptId:  prompt.id,
            promptText: prompt.text,
            response:  writeText.trim(),
            savedAt:   Date.now(),
          }));
        } catch { /* localStorage full or unavailable */ }
      }
    }
    onComplete();
  }

  return (
    <div className="real-world-scroll" style={{ height: '100%', overflowY: 'auto', padding: '24px 18px', display: 'flex', flexDirection: 'column', gap: 20 }}>

      {/* Guide intro with karaoke */}
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
        <img
          src={guideAvatar?.image || '/avatars/atlas.png'} alt=""
          style={{ width: 52, height: 52, borderRadius: '50%', objectFit: 'cover', border: `2px solid ${accent}`, flexShrink: 0 }}
        />
        <div style={{ background: 'rgba(255,255,255,0.06)', border: `1px solid ${accent}33`, borderRadius: 14, padding: '12px 14px', fontSize: '0.95rem', color: 'rgba(255,255,255,0.85)', lineHeight: 1.6 }}>
          {renderKaraokeBlock(guideText, karaokeWords, karaokeIdx, accent)}
        </div>
      </div>

      {/* Reflection prompt header */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <span style={{ fontSize: '1.3rem' }}>💭</span>
        <span style={{ color: accent, fontWeight: 700, fontSize: '0.9rem', letterSpacing: '0.04em', textTransform: 'uppercase' }}>
          Choose a prompt to reflect on
        </span>
      </div>

      {/* Prompt cards */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {(screen.prompts || []).map((prompt, i) => (
          <button
            key={prompt.id}
            onClick={() => setSelectedIdx(i)}
            style={{
              textAlign:   'left',
              padding:     '14px 16px',
              borderRadius: 14,
              border:      `2px solid ${selectedIdx === i ? accent : `${accent}44`}`,
              background:  selectedIdx === i ? `${accent}18` : 'rgba(255,255,255,0.04)',
              color:       'rgba(255,255,255,0.9)',
              fontSize:    '0.97rem',
              lineHeight:  1.55,
              cursor:      'pointer',
              transition:  'all 0.12s',
              fontFamily:  'inherit',
            }}
          >
            {prompt.text}
          </button>
        ))}
      </div>

      {/* Writing area (appears when prompt is selected) */}
      {selectedIdx !== null && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          <textarea
            value={writeText}
            onChange={e => setWriteText(e.target.value)}
            placeholder="Write your thoughts here..."
            rows={6}
            style={{
              width:        '100%',
              boxSizing:    'border-box',
              borderRadius: 10,
              border:       `1.5px solid ${accent}55`,
              background:   'rgba(255,255,255,0.05)',
              color:        'rgba(255,255,255,0.9)',
              fontSize:     '0.95rem',
              lineHeight:   1.6,
              padding:      '10px 12px',
              resize:       'vertical',
              outline:      'none',
              fontFamily:   'inherit',
            }}
          />
          <button
            onClick={handleSave}
            style={{
              padding:      '12px 0',
              borderRadius: 12,
              border:       'none',
              background:   accent,
              color:        '#000',
              fontWeight:   700,
              fontSize:     '0.97rem',
              cursor:       'pointer',
              fontFamily:   'inherit',
            }}
          >
            Save &amp; Continue
          </button>
        </div>
      )}

      {/* Skip link */}
      {selectedIdx === null && (
        <button
          onClick={onComplete}
          style={{
            alignSelf:    'center',
            padding:      '8px 20px',
            borderRadius: 10,
            border:       '1px solid rgba(255,255,255,0.15)',
            background:   'transparent',
            color:        'rgba(255,255,255,0.4)',
            fontSize:     '0.85rem',
            cursor:       'pointer',
            fontFamily:   'inherit',
          }}
        >
          Skip reflection
        </button>
      )}

    </div>
  );
}

// ── Audio session unlock — module-level, persists for the SPA session ────────
let _ueAudioSessionUnlocked = false;
function markAudioSessionUnlocked() {
  if (_ueAudioSessionUnlocked) return;
  _ueAudioSessionUnlocked = true;
}
function isAudioSessionUnlocked() { return _ueAudioSessionUnlocked; }

// ─────────────────────────────────────────────────────────────────────────────
export default function UpperExplorerLessonPlayer() {
  const { subjectId, lessonId } = useParams();
  const navigate    = useNavigate();
  const child       = getCurrentChild();
  const childName   = child?.name || 'friend';

  // Resolve lesson
  const subjectData = UE_DATA[subjectId];
  const lesson      = subjectData?.lessons?.find(l => l.id === lessonId) || null;
  const guide       = subjectData?.guide || 'atlas';
  const guideAvatar = getAvatar(guide);
  const screens     = lesson?.screens || [];
  const total       = screens.length;

  // ── State ──────────────────────────────────────────────────────────────────
  const [screenIdx,    setScreenIdx]    = useState(0);
  const [speaking,     setSpeaking]     = useState(false);
  const [loadingAudio, setLoadingAudio] = useState(false);
  const [audioEnabled, setAudioEnabled] = useState(true);
  const [karaokeWords, setKaraokeWords] = useState([]);
  const [karaokeIdx,   setKaraokeIdx]   = useState(-1);
  const [vocabOpen,     setVocabOpen]     = useState(null);
  const [showVocabHint, setShowVocabHint] = useState(false);
  const [countdown,       setCountdown]       = useState(null);
  const [audioPaused,     setAudioPaused]     = useState(false);
  const [audioFallback,   setAudioFallback]   = useState(false);
  const [welcomeReady,    setWelcomeReady]    = useState(false);
  const [audioMissing,    setAudioMissing]    = useState(false);

  // ── Refs ───────────────────────────────────────────────────────────────────
  const persistentAudioRef        = useRef(null);
  const audioListenersCleanupRef  = useRef(null);
  const currentAbortControllerRef = useRef(null);
  const speakGenRef               = useRef(0);
  const blobUrlRef                = useRef(null);
  const karaokeRef                = useRef([]);
  const lastSpokenText            = useRef('');
  const lastSpeakTime             = useRef(0);
  const audioEnabledRef           = useRef(true);
  const countdownIntervalRef      = useRef(null);
  const screenIdxRef              = useRef(0);
  const countdownPausedRef        = useRef(false);
  const startCountdownFnRef       = useRef(null);
  const audioPrewarmRef           = useRef(new Map());
  const isPausedRef               = useRef(false);
  const audioFailTimerRef         = useRef(null);
  const speakStartTimeRef         = useRef(0);
  const welcomePlayedRef          = useRef(false);
  const welcomePlayFnRef          = useRef(null);
  const lessonStartTimeRef        = useRef(Date.now());
  const lessonProgressRef         = useRef({ interactiveDetails: null, questionDetails: [], firstTryAccuracy: 0 });
  audioEnabledRef.current = audioEnabled;
  screenIdxRef.current    = screenIdx;

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
      unlockAudio();
      if (!persistentAudioRef.current) {
        const el = new Audio();
        el.playsInline = true;
        el.preload     = 'auto';
        el.setAttribute('webkit-playsinline', 'true');
        el.setAttribute('playsinline', 'true');
        persistentAudioRef.current = el;
      }
      const existingEl = persistentAudioRef.current;
      if (existingEl && existingEl.src && existingEl.paused && !existingEl.ended && !isPausedRef.current) {
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
    audioPrewarmRef.current.forEach(v => { if (v?.blobUrl) URL.revokeObjectURL(v.blobUrl); });
    audioPrewarmRef.current.clear();
  }, []);

  // ── Pre-warm welcome audio on mount ──────────────────────────────────────
  useEffect(() => {
    const firstScreen = screens[0];
    if (!firstScreen || firstScreen.type !== 'welcome') {
      setWelcomeReady(true);
      return;
    }
    const text = getScreenText(firstScreen, childName);
    if (!text) { setWelcomeReady(true); return; }

    let readySet = false;
    const safetyTimer = setTimeout(() => {
      if (!readySet) { readySet = true; setWelcomeReady(true); }
    }, 5000);

    prewarmAudio(text).then(result => {
      if (!readySet) { readySet = true; clearTimeout(safetyTimer); setWelcomeReady(true); }
    }).catch(() => {
      if (!readySet) { readySet = true; clearTimeout(safetyTimer); setWelcomeReady(true); }
    });

    const firstContent = screens.find(s => s.type === 'magazine' || s.type === 'story-beat');
    if (firstContent) {
      const ct = getScreenText(firstContent, childName);
      if (ct) prewarmAudio(ct);
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // ── speak() ───────────────────────────────────────────────────────────────
  const speak = useCallback(async (text, onDone, options = {}) => {
    const { noKaraoke = false, visualText = null } = options;
    if (!text) { onDone?.(); return; }
    if (!audioEnabledRef.current) { onDone?.(); return; }

    const now = Date.now();
    if (text === lastSpokenText.current && now - lastSpeakTime.current < 500) {
      onDone?.(); return;
    }
    lastSpokenText.current = text;
    lastSpeakTime.current  = now;

    const gen = ++speakGenRef.current;

    currentAbortControllerRef.current?.abort();
    const abortController = new AbortController();
    currentAbortControllerRef.current = abortController;

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

    const wordCount = text.split(/\s+/).filter(Boolean).length;
    const deadmanMs = Math.max(35000, wordCount * 700);
    const deadman = setTimeout(() => finish(), deadmanMs);

    const speakCallTime = Date.now();

    try {
      const voiceId = voiceIdRef.current;
      const modelId = modelIdRef.current;

      let blobUrl, alignment;
      const cached = audioPrewarmRef.current.get(text);
      if (cached) {
        let result = cached;
        if (cached instanceof Promise) {
          result = await cached;
          if (gen !== speakGenRef.current) { clearTimeout(deadman); return; }
        }
        if (result?.blobUrl) {
          blobUrl   = result.blobUrl;
          alignment = result.alignment;
          audioPrewarmRef.current.delete(text);
          if (blobUrlRef.current) { URL.revokeObjectURL(blobUrlRef.current); blobUrlRef.current = null; }
        }
      }

      if (!blobUrl) {
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

        if (gen !== speakGenRef.current) { clearTimeout(deadman); return; }
        if (blobUrlRef.current) { URL.revokeObjectURL(blobUrlRef.current); blobUrlRef.current = null; }
        blobUrl = URL.createObjectURL(blob);
      }

      blobUrlRef.current = blobUrl;

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
            const visualWords = (visualText && visualText !== text)
              ? visualText.split(/\s+/).filter(Boolean)
              : null;
            const spokenToVisual = visualWords
              ? buildSpokenToVisualMap(visualWords, kWords)
              : null;
            let lastKi = -1;
            el.ontimeupdate = () => {
              const t = el.currentTime;
              let ki = -1;
              for (let i = 0; i < wordStarts.length; i++) {
                if (wordStarts[i] <= t) ki = i; else break;
              }
              if (ki !== lastKi) {
                lastKi = ki;
                const visualKi = spokenToVisual ? (spokenToVisual[ki] ?? -1) : ki;
                setKaraokeIdx(visualKi);
              }
            };
          } else {
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

      if (audioFailTimerRef.current) { clearTimeout(audioFailTimerRef.current); audioFailTimerRef.current = null; }
      const onPlaying = () => {
        if (audioFailTimerRef.current) { clearTimeout(audioFailTimerRef.current); audioFailTimerRef.current = null; }
        setAudioFallback(false);
        setLoadingAudio(false);
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

      audioFailTimerRef.current = setTimeout(() => {
        audioFailTimerRef.current = null;
        if (done) return;
        const curEl = persistentAudioRef.current;
        if (curEl && !curEl.paused && !curEl.ended) return;
        if (isAudioSessionUnlocked()) return;
        setAudioFallback(true);
      }, 1500);

      const playErr = await el.play().catch(err => err);
      if (playErr instanceof Error) {
        if (audioFailTimerRef.current) { clearTimeout(audioFailTimerRef.current); audioFailTimerRef.current = null; }
        if (playErr.name === 'NotAllowedError') {
          setAudioFallback(true);
          return;
        }
        clearTimeout(deadman);
        finish();
        return;
      }

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

  // ── Pre-warm audio cache ──────────────────────────────────────────────────
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
        });
        if (!res.ok) { audioPrewarmRef.current.delete(text); return null; }
        const alignmentHeader = res.headers.get('X-Alignment');
        const alignment = alignmentHeader ? JSON.parse(alignmentHeader) : null;
        const blob = await res.blob();
        const blobUrl = URL.createObjectURL(blob);
        const result = { blobUrl, alignment };
        audioPrewarmRef.current.set(text, result);
        return result;
      } catch {
        audioPrewarmRef.current.delete(text);
        return null;
      }
    })();

    audioPrewarmRef.current.set(text, p);
    return p;
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // ── Lesson progress callbacks ─────────────────────────────────────────────
  const onInteractiveComplete = useCallback((details) => {
    lessonProgressRef.current.interactiveDetails = details;
  }, []);

  const onQuizComplete = useCallback((questionDetails, firstTryAccuracy) => {
    lessonProgressRef.current.questionDetails  = questionDetails;
    lessonProgressRef.current.firstTryAccuracy = firstTryAccuracy;
  }, []);

  // Prewarm next screen when last quiz question is reached.
  // In UE, next after quiz is reflection, not real-world.
  const onLastQuizQuestion = useCallback(() => {
    const nextIdx    = screenIdxRef.current + 1;
    const nextScreen = screens[nextIdx];
    if (!nextScreen) return;
    const r = t => (t || '').replace(/\{name\}/g, childName);

    if (nextScreen.type === 'reflection') {
      // Prewarm reflection guideText
      const reflText = r(nextScreen.guideText);
      if (reflText) prewarmAudio(reflText);
    } else if (nextScreen.type === 'real-world') {
      const cpRaw2   = nextScreen.creativePrompt;
      const cpAudio2 = cpRaw2 && typeof cpRaw2 === 'object' ? (cpRaw2.intro || '') : (cpRaw2 || '');
      const toPrewarm = [
        r(nextScreen.guideText),
        'Family Adventure',
        nextScreen.familyAdventure || '',
        'Create Something',
        cpAudio2,
      ].filter(Boolean);
      toPrewarm.forEach(t => prewarmAudio(t));
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // ── Audio retry / welcome tap ─────────────────────────────────────────────
  const retryAudio = useCallback(() => {
    markAudioSessionUnlocked();
    try {
      const s = new Audio('data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA');
      s.play().catch(() => {});
    } catch { /* no audio support */ }

    setAudioFallback(false);

    const el = persistentAudioRef.current;
    if (el && el.src && !el.ended) {
      el.play().catch(() => {});
      return;
    }

    const screen = screens[screenIdxRef.current];
    if (screen) {
      const text = getScreenText(screen, childName);
      if (text) speak(text);
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const onWelcomeTap = useCallback(() => {
    if (welcomePlayedRef.current) return;
    welcomePlayedRef.current = true;
    setWelcomeReady(false);
    markAudioSessionUnlocked();
    try {
      const s = new Audio('data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA');
      s.play().catch(() => {});
    } catch { /* no audio support */ }
    welcomePlayFnRef.current?.();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const cancelCountdown = useCallback(() => {
    if (countdownIntervalRef.current) {
      clearInterval(countdownIntervalRef.current);
      countdownIntervalRef.current = null;
    }
    setCountdown(null);
  }, []);

  // ── Pause countdown when vocab popup opens ────────────────────────────────
  useEffect(() => {
    if (vocabOpen) {
      if (countdownIntervalRef.current) {
        clearInterval(countdownIntervalRef.current);
        countdownIntervalRef.current = null;
        countdownPausedRef.current = true;
        setCountdown(null);
      }
    } else if (countdownPausedRef.current) {
      countdownPausedRef.current = false;
      startCountdownFnRef.current?.();
    }
  }, [vocabOpen]); // eslint-disable-line react-hooks/exhaustive-deps

  // ── Speak on screen change ────────────────────────────────────────────────
  useEffect(() => {
    if (!screens.length) return;
    const screen = screens[screenIdx];
    let cancelled = false;
    const timers  = [];

    if (countdownIntervalRef.current) {
      clearInterval(countdownIntervalRef.current);
      countdownIntervalRef.current = null;
    }
    setCountdown(null);
    countdownPausedRef.current = false;
    startCountdownFnRef.current = null;

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
      const el = persistentAudioRef.current;
      if (el) { el.pause(); }
      setSpeaking(false);
      setLoadingAudio(false);
      if (countdownIntervalRef.current) {
        clearInterval(countdownIntervalRef.current);
        countdownIntervalRef.current = null;
      }
      setCountdown(null);
      setAudioMissing(false);
    };

    if (!audioEnabled) return cleanup;

    const r = t => (t || '').replace(/\{name\}/g, childName);

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
        if (isPausedRef.current) return;
        n--;
        if (n <= 0) {
          clearInterval(countdownIntervalRef.current);
          countdownIntervalRef.current = null;
          setCountdown(null);
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
    startCountdownFnRef.current = startCountdownForScreen;

    if (screen.type === 'magazine' || screen.type === 'story-beat') {
      const fullText = getScreenText(screen, childName);
      const rn = t => (t || '').replace(/\{name\}/g, childName);
      const body = screen.type === 'magazine'
        ? (screen.paragraphs || []).join(' ')
        : (screen.paragraph  || '');
      const rawVisual = (screen.headline ? `${screen.headline}. ` : '') + body;
      const visualText = rn(rawVisual);

      const nextScreen = screens[screenIdx + 1];
      if (nextScreen?.type === 'magazine' || nextScreen?.type === 'story-beat') {
        const nextText = getScreenText(nextScreen, childName);
        if (nextText) prewarmAudio(nextText);
      }

      speakStartTimeRef.current = Date.now();
      speak(fullText, () => {
        if (cancelled) return;
        const audioDurationMs = Date.now() - speakStartTimeRef.current;
        if (audioEnabledRef.current && audioDurationMs < 1000) {
          setAudioMissing(true);
          return;
        }
        if (screen.vocab?.length > 0 && !localStorage.getItem('explorer_vocab_hint_shown')) {
          setShowVocabHint(true);
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
            const tCD = setTimeout(() => {
              if (!cancelled) startCountdownForScreen();
            }, 2600);
            timers.push(tCD);
          }, { noKaraoke: true });
        } else {
          const tBuffer = setTimeout(() => {
            if (cancelled) return;
            startCountdownForScreen();
          }, 1000);
          timers.push(tBuffer);
        }
      }, { visualText });

    } else if (screen.type === 'real-world') {
      const guideText      = r(screen.guideText);
      const familyAdventure = screen.familyAdventure || '';
      const cpRaw          = screen.creativePrompt;
      const creativePrompt = cpRaw && typeof cpRaw === 'object' ? (cpRaw.intro || '') : (cpRaw || '');

      speak(guideText, () => {
        if (cancelled) return;
        const t1 = setTimeout(() => {
          if (cancelled) return;
          speak('Family Adventure', () => {
            if (cancelled) return;
            const t2 = setTimeout(() => {
              if (cancelled) return;
              speak(familyAdventure, () => {
                if (cancelled) return;
                const t3 = setTimeout(() => {
                  if (cancelled) return;
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

    } else if (screen.type === 'reflection') {
      // Read guideText once. User self-paces; no countdown.
      const text = r(screen.guideText);
      if (text) speak(text);

    } else if (screen.type === 'welcome') {
      welcomePlayedRef.current = false;
      welcomePlayFnRef.current = null;
      const text = getScreenText(screen, childName);
      if (text) {
        welcomePlayFnRef.current = () => {
          if (cancelled) return;
          speakStartTimeRef.current = Date.now();
          speak(text, () => {
            if (cancelled) return;
            const audioDurationMs = Date.now() - speakStartTimeRef.current;
            if (audioEnabledRef.current && audioDurationMs < 1000) {
              setAudioMissing(true);
              return;
            }
            const tBuffer = setTimeout(() => {
              if (cancelled) return;
              startCountdownForScreen();
            }, 1000);
            timers.push(tBuffer);
          });
        };
      }

    } else if (screen.type !== 'interactive' && screen.type !== 'quiz') {
      const text = getScreenText(screen, childName);
      if (text) speak(text);
    }

    return cleanup;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [screenIdx]);

  // ── Navigation ────────────────────────────────────────────────────────────
  function goNext() {
    unlockAudio();
    if (screenIdx < total - 1) {
      const nextScreen = screens[screenIdx + 1];
      if (nextScreen?.type === 'celebration') {
        sfx.fanfare();
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
      isPausedRef.current = false;
      el.play().catch(() => {});
      setAudioPaused(false);
      setSpeaking(true);
    } else if (speaking) {
      isPausedRef.current = true;
      el.pause();
      if (countdownIntervalRef.current) {
        clearInterval(countdownIntervalRef.current);
        countdownIntervalRef.current = null;
      }
      setCountdown(null);
      setAudioPaused(true);
      setSpeaking(false);
    }
  }

  // ── Not found ──────────────────────────────────────────────────────────────
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
    onVocabTap:         (vocab) => { stopAudio(); setVocabOpen(vocab); },
    onComplete:         goNext,
    showVocabHint,
    onDismissVocabHint: () => { setShowVocabHint(false); localStorage.setItem('explorer_vocab_hint_shown', 'true'); },
    onSpeak:                speak,
    onPrewarm:              prewarmAudio,
    onStopAudio:            stopAudio,
    onInteractiveComplete,
    onQuizComplete,
    onLastQuestion:         onLastQuizQuestion,
    welcomeReady,
    onWelcomeTap,
    subjectId,
    headlineWordCount: (currentScreen?.type === 'magazine' || currentScreen?.type === 'story-beat')
      ? (currentScreen.headline || '').split(/\s+/).filter(Boolean).length
      : 0,
  };

  function renderScreen(screen) {
    switch (screen.type) {
      case 'welcome':    return <ExplorerWelcomeScreen {...commonProps} />;
      case 'magazine':   return <MagazineScreen        {...commonProps} />;
      case 'story-beat': return <StoryBeatScreen       {...commonProps} />;
      case 'interactive':return <InteractiveExplore    {...commonProps} />;
      case 'quiz':       return <MasteryQuiz           {...commonProps} />;
      case 'reflection': return (
        <ReflectionScreen
          screen={currentScreen}
          guideAvatar={guideAvatar}
          accent={accent}
          childName={childName}
          karaokeWords={karaokeWords}
          karaokeIdx={karaokeIdx}
          onComplete={goNext}
        />
      );
      case 'real-world': return <RealWorldConnection   {...commonProps} />;
      case 'celebration': {
        const prog = lessonProgressRef.current;
        const fta  = prog.firstTryAccuracy || 0;
        const lessonRecord = {
          childId:                   child?.id || null,
          lessonId,
          subjectId,
          ageBand:                   'upper_explorers',
          startedAt:                 lessonStartTimeRef.current,
          firstTryAccuracy:          fta,
          masteryScore:              100,
          letterGrade:               getGrade(fta),
          xpEarned:                  fta >= 0.8 ? (lesson.xpReward || 75) : Math.round((lesson.xpReward || 75) * 0.6),
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
        .explorer-shell { width: 100%; max-width: 100%; }
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
        .magazine-outer {
          height: 100%;
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }
        .magazine-image-col {
          position: relative;
          width: 100%;
          flex-shrink: 0;
          max-height: 33vh;
          background: #080618;
          overflow: hidden;
        }
        .magazine-text-col {
          flex: 1;
          overflow-y: auto;
          overflow-x: hidden;
          overscroll-behavior: contain;
          -webkit-overflow-scrolling: touch;
          padding: 16px 18px 24px;
        }
        @media (min-width: 768px) {
          .magazine-image-col { max-height: 40vh; }
          .magazine-text-col { padding: 28px 44px 36px; }
          .mag-headline { font-size: 2.2rem !important; }
          .mag-para { font-size: 1.2rem !important; line-height: 1.85 !important; }
          .mag-replay-btn { width: 56px !important; height: 56px !important; font-size: 1.4rem !important; top: 12px !important; right: 12px !important; }
        }
        @media (min-width: 1024px) {
          .magazine-outer { flex-direction: row; }
          .magazine-image-col { width: 44%; max-height: unset; height: 100%; }
          .magazine-text-col { padding: 32px 44px 36px; }
          .mag-headline { font-size: 2.4rem !important; }
          .mag-para { font-size: 1.25rem !important; }
        }
        @media (min-width: 768px) {
          .real-world-scroll { padding: 36px 48px !important; }
          .real-world-card   { padding: 26px 24px !important; }
          .real-world-text   { font-size: 1.2rem !important; }
        }
        @media (min-width: 1024px) {
          .real-world-scroll { max-width: 820px; margin: 0 auto; }
          .real-world-text   { font-size: 1.25rem !important; }
        }
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

      {/* Manual tap-to-continue cue */}
      {audioMissing && (currentScreen?.type === 'magazine' || currentScreen?.type === 'welcome' || currentScreen?.type === 'story-beat') && (
        <div style={{ flexShrink: 0, padding: '6px 16px 2px', display: 'flex', justifyContent: 'center' }}>
          <button
            onClick={goNext}
            style={{
              background:    `linear-gradient(135deg, ${accent}22, ${accent}44)`,
              border:        `1.5px solid ${accent}88`,
              borderRadius:  24,
              color:         accent,
              fontSize:      '0.88rem',
              fontWeight:    700,
              letterSpacing: '0.03em',
              padding:       '8px 22px',
              cursor:        'pointer',
              touchAction:   'manipulation',
              animation:     'ex-ring 2s ease-in-out infinite',
            }}
          >
            Tap to continue →
          </button>
        </div>
      )}

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

      {/* Audio-fail overlay */}
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
            <div style={{
              position:     'absolute',
              width:        88,
              height:       88,
              borderRadius: '50%',
              border:       `3px solid ${accent}`,
              animation:    'af-ripple 1.8s ease-out infinite',
              pointerEvents:'none',
            }} />
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

      {/* Vocab popup */}
      {vocabOpen && (
        <VocabPopup
          vocab={vocabOpen}
          accent={accent}
          guideAvatar={guideAvatar}
          childName={childName}
          onClose={() => setVocabOpen(null)}
          onStop={stopAudio}
          speak={speak}
        />
      )}
    </div>
  );
}
