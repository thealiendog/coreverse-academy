import { useState, useEffect, useMemo, useRef, useCallback } from 'react';
import { useParams, useNavigate, useSearchParams } from 'react-router-dom';
import { getCurrentChild, getCurrentParent, updateChildProgress, awardBadge } from '../lib/storage';
import { getAvatar, getSubject } from '../lib/constants';
import { sendLessonCompleteEmail } from '../lib/email';
import { getLesson } from '../data/lessons';
import { getLevel2Lesson } from '../data/lessons_level2';
import { getLevel3Lesson } from '../data/lessons_level3';
import { getLevel4Lesson } from '../data/lessons_level4';
import { INNERWORLD_EXPLORERS } from '../data/innerworld_explorers';
import MONEYBUSINESS_EXPLORERS from '../data/moneybusiness_explorers_adapter';
import COSMOS_EXPLORERS from '../data/cosmos_explorers_adapter';
import FUTURESKILLS_EXPLORERS from '../data/futureskills_explorers_adapter';
import SOCIALLEADERSHIP_EXPLORERS from '../data/socialleadership_explorers_adapter';
import LIFEWELLNESS_EXPLORERS from '../data/lifewellness_explorers_adapter';
import CREATIVEARTS_EXPLORERS from '../data/creativearts_explorers_adapter';
import HISTORYWORLD_EXPLORERS from '../data/historyworld_explorers_adapter';
import INNERWORLD_UPPEREXPLORERS from '../data/innerworld_upperexplorers_adapter';
import COSMOS_UPPEREXPLORERS from '../data/cosmos_upperexplorers_adapter';
import FUTURESKILLS_UPPEREXPLORERS from '../data/futureskills_upperexplorers_adapter';
import SOCIALLEADERSHIP_UPPEREXPLORERS from '../data/socialleadership_upperexplorers_adapter';
import LIFEWELLNESS_UPPEREXPLORERS from '../data/lifewellness_upperexplorers_adapter';
import CREATIVEARTS_UPPEREXPLORERS from '../data/creativearts_upperexplorers_adapter';
import HISTORYWORLD_UPPEREXPLORERS from '../data/historyworld_upperexplorers_adapter';
import MONEYBUSINESS_UPPEREXPLORERS from '../data/moneybusiness_upperexplorers_adapter';
import MONEYBUSINESS_VOYAGERS from '../data/moneybusiness_voyagers_adapter';
import FUTURESKILLS_VOYAGERS from '../data/futureskills_voyagers_adapter';
import SOCIALLEADERSHIP_VOYAGERS from '../data/socialleadership_voyagers_adapter';
import LIFEWELLNESS_VOYAGERS from '../data/lifewellness_voyagers_adapter';
import CREATIVEARTS_VOYAGERS from '../data/creativearts_voyagers_adapter';
import HISTORYWORLD_VOYAGERS from '../data/historyworld_voyagers_adapter';
import INNERWORLD_VOYAGERS from '../data/innerworld_voyagers_adapter';
import COSMOS_VOYAGERS from '../data/cosmos_voyagers_adapter';
import MATH_VOYAGERS from '../data/math_voyagers_adapter';
import ELA_LITTLESTARS from '../data/ela_littlestars_adapter';
import ELA_EXPLORERS from '../data/ela_explorers_adapter';
import ELA_UPPEREXPLORERS from '../data/ela_upperexplorers_adapter';
import ELA_VOYAGERS from '../data/ela_voyagers_adapter';
import SCI_LITTLESTARS from '../data/sci_littlestars_adapter';
import SCI_EXPLORERS from '../data/sci_explorers_adapter';
import SCI_UPPEREXPLORERS from '../data/sci_upperexplorers_adapter';
import SCI_VOYAGERS from '../data/sci_voyagers_adapter';
import SS_EXPLORERS from '../data/ss_explorers_adapter';
import SS_UPPEREXPLORERS from '../data/ss_upperexplorers_adapter';
import SS_VOYAGERS from '../data/ss_voyagers_adapter';
import SS_LITTLESTARS from '../data/ss_littlestars_adapter';
import INNERWORLD_LITTLESTARS from '../data/innerworld_littlestars_adapter';
import COSMOS_LITTLESTARS from '../data/cosmos_littlestars_adapter';
import MONEYBUSINESS_LITTLESTARS from '../data/moneybusiness_littlestars_adapter';
import FUTURESKILLS_LITTLESTARS from '../data/futureskills_littlestars_adapter';
import MATH_UPPEREXPLORERS from '../data/math_upperexplorers_adapter';
import MATH_LITTLESTARS from '../data/math_littlestars_adapter';
import MATH_EXPLORERS from '../data/math_explorers_adapter';
import SOCIALLEADERSHIP_LITTLESTARS from '../data/socialleadership_littlestars_adapter';
import LIFEWELLNESS_LITTLESTARS from '../data/lifewellness_littlestars_adapter';
import CREATIVEARTS_LITTLESTARS from '../data/creativearts_littlestars_adapter';
import SPANISH_LITTLESTARS from '../data/spanish_littlestars_adapter';
import HISTORYWORLD_LITTLESTARS from '../data/historyworld_littlestars_adapter';
import FRONTIER_LITTLESTARS from '../data/frontier_littlestars_adapter';
import SPANISH_EXPLORERS from '../data/spanish_explorers_adapter';
import SPANISH_UPPEREXPLORERS from '../data/spanish_upperexplorers_adapter';
import SPANISH_VOYAGERS from '../data/spanish_voyagers_adapter';
import FRONTIER_EXPLORERS from '../data/frontier_explorers_adapter';
import FRONTIER_UPPEREXPLORERS from '../data/frontier_upperexplorers_adapter';
import FRONTIER_VOYAGERS from '../data/frontier_voyagers_adapter';
import NovaChat from '../components/NovaChat';
import { LsVisualFrame, detectVisual, VISUAL_INSTRUCTIONS } from '../components/LsVisuals';
import { askNova } from '../lib/nova';

const CONFETTI_COLORS = ['#7C3AED', '#A78BFA', '#F59E0B', '#FCD34D', '#10B981', '#60A5FA', '#F472B6'];

// ── Little Stars sound effects (Web Audio API — no external files) ─────────────
function playWebAudioTone(frequency, duration, volume = 0.22) {
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const osc  = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.type = 'sine';
    osc.frequency.value = frequency;
    gain.gain.setValueAtTime(volume, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);
    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + duration + 0.05);
  } catch { /* no audio context — ignore */ }
}
const playChime   = () => playWebAudioTone(800, 0.18);
const playPop     = () => playWebAudioTone(440, 0.09);
const playFanfare = () => {
  [[523, 0], [659, 0.14], [784, 0.28]].forEach(([f, d]) =>
    setTimeout(() => playWebAudioTone(f, 0.20), d * 1000)
  );
};

// ── Floating stars for Little Stars interactions ──────────────────────────────
function FloatingStars({ count = 3, triggerKey }) {
  if (!triggerKey) return null;
  const xs = count === 5 ? [15, 30, 50, 68, 83] : [28, 50, 72];
  return (
    <div className="fixed inset-0 pointer-events-none z-[60] overflow-hidden">
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            left: `${xs[i]}%`,
            bottom: '38%',
            fontSize: '2.4rem',
            lineHeight: 1,
            animation: `ls-star-rise 1.1s ease-out ${i * 0.09}s both`,
          }}
        >⭐</div>
      ))}
    </div>
  );
}

// ── Split text into sentences ─────────────────────────────────────────────────
function splitSentences(text) {
  if (!text) return [''];
  const parts = text.match(/[^.!?]+[.!?]+\s*/g);
  if (!parts || parts.length <= 1) return [text.trim()];
  return parts.map(s => s.trim()).filter(Boolean);
}

// ── Karaoke word highlighting ─────────────────────────────────────────────────
// displayText: the text shown on screen
// spokenWords: array of words the guide is currently speaking
// spokenIdx:   index of the word being spoken right now (-1 = not speaking)
// className/style: passed to outer span
function KaraokeText({ displayText, spokenWords, spokenIdx, className = '', style = {} }) {
  if (!displayText) return null;
  const words = displayText.split(/\s+/);

  // Find where displayText starts within spokenWords (to handle spoken prefixes
  // like "Here's the big idea: …" when the screen only shows the text after)
  let offset = 0;
  if (spokenWords.length && words.length) {
    const clean = w => w.toLowerCase().replace(/[^a-z0-9]/g, '');
    for (let i = 0; i <= spokenWords.length - words.length; i++) {
      if (clean(spokenWords[i]) === clean(words[0]) &&
          clean(spokenWords[Math.min(i + 1, spokenWords.length - 1)]) === clean(words[Math.min(1, words.length - 1)])) {
        offset = i;
        break;
      }
    }
  }

  const isSpeaking = spokenIdx >= 0;

  return (
    <span className={className} style={style}>
      {words.map((word, i) => {
        const gi       = i + offset; // global index in spoken word stream
        const isCur    = isSpeaking && spokenIdx === gi;
        const isPast   = isSpeaking && spokenIdx > gi;
        const isFuture = isSpeaking && spokenIdx < gi;
        return (
          <span
            key={i}
            style={{
              display: 'inline',
              color: isCur    ? '#ffffff'
                   : isPast   ? 'rgba(255,255,255,0.75)'
                   : isFuture ? 'rgba(255,255,255,0.4)'
                   :            'rgba(255,255,255,0.85)',
              textShadow: isCur ? '0 0 10px rgba(124,58,237,0.6)' : 'none',
              fontWeight: isCur ? 700 : 'inherit',
              transition: 'color 0.12s ease, text-shadow 0.12s ease',
            }}
          >
            {word}{' '}
          </span>
        );
      })}
    </span>
  );
}

// ── Floating stars for celebration ───────────────────────────────────────────
function StarField() {
  const stars = useMemo(() =>
    Array.from({ length: 22 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: 5 + Math.random() * 85,
      size: 3 + Math.random() * 7,
      delay: Math.random() * 4,
      duration: 2.2 + Math.random() * 3.2,
      color: CONFETTI_COLORS[i % CONFETTI_COLORS.length],
    })), []
  );
  return (
    <div className="fixed inset-0 pointer-events-none z-[54] overflow-hidden">
      {stars.map(s => (
        <div
          key={s.id}
          style={{
            position: 'absolute',
            left: `${s.x}%`,
            top: `${s.y}%`,
            width: s.size,
            height: s.size,
            background: s.color,
            borderRadius: '50%',
            boxShadow: `0 0 ${s.size * 2}px ${s.color}`,
            animation: `lesson-star-float-kf ${s.duration}s ease-in-out ${s.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
}

// ── Confetti rain for celebration ─────────────────────────────────────────────
function Confetti() {
  const pieces = useMemo(() =>
    Array.from({ length: 55 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      color: CONFETTI_COLORS[i % CONFETTI_COLORS.length],
      delay: Math.random() * 2.8,
      duration: 2.6 + Math.random() * 2.2,
      size: 5 + Math.floor(Math.random() * 9),
      round: Math.random() > 0.5,
      rot: Math.floor(Math.random() * 360),
    })), []
  );
  return (
    <div className="fixed inset-0 pointer-events-none z-[55] overflow-hidden">
      {pieces.map(p => (
        <div
          key={p.id}
          style={{
            position: 'absolute',
            left: `${p.x}%`,
            top: -20,
            width: p.size,
            height: p.size,
            background: p.color,
            borderRadius: p.round ? '50%' : '2px',
            transform: `rotate(${p.rot}deg)`,
            animation: `lesson-confetti-fall ${p.duration}s ease-in ${p.delay}s both`,
          }}
        />
      ))}
    </div>
  );
}

// ── Option card helper for QC and Quiz ───────────────────────────────────────
// variant: 'quiz' (gold correct) | 'qc' (green correct)
function OptionCard({ label, text, delay, isCorrect, isWrong, isReveal, onClick, disabled, variant = 'quiz' }) {
  let bg    = 'rgba(255,255,255,0.04)';
  let border = 'rgba(255,255,255,0.10)';
  let color  = 'rgba(255,255,255,0.82)';
  let anim   = `lesson-option-up 0.42s cubic-bezier(0.16,1,0.3,1) ${delay}s both`;

  if (isCorrect) {
    if (variant === 'qc') {
      bg = 'rgba(16,185,129,0.12)'; border = '#10B981'; color = '#6EE7B7';
      anim += ', lesson-correct-green-pulse 0.6s ease-out 0.05s both';
    } else {
      bg = 'rgba(245,158,11,0.12)'; border = '#F59E0B'; color = '#FCD34D';
      anim += ', lesson-correct-pulse 0.6s ease-out 0.05s both';
    }
  } else if (isWrong) {
    bg = 'rgba(239,68,68,0.12)'; border = '#EF4444'; color = '#FCA5A5';
    anim += ', lesson-shake 0.45s ease both';
  } else if (isReveal) {
    bg = 'rgba(255,255,255,0.02)'; border = 'rgba(255,255,255,0.06)'; color = 'rgba(255,255,255,0.35)';
  }

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="w-full text-left px-6 py-4 rounded-xl text-sm font-medium transition-colors duration-200 disabled:cursor-default hover:enabled:brightness-110"
      style={{ background: bg, border: `1px solid ${border}`, color, animation: anim }}
    >
      <span className="font-bold mr-3" style={{ color: 'rgba(255,255,255,0.35)' }}>{label}.</span>
      {text}
    </button>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
export default function LessonPlayer() {
  const { subjectId, lessonIdx } = useParams();
  const [searchParams] = useSearchParams();
  const navigate  = useNavigate();
  const child     = getCurrentChild();
  const parent    = getCurrentParent();
  const idx       = parseInt(lessonIdx, 10);
  const level     = parseInt(searchParams.get('level') || '1', 10);
  const progressKey = level === 1 ? subjectId : `${subjectId}__${level}`;
  const levelGetters = { 1: getLesson, 2: getLevel2Lesson, 3: getLevel3Lesson, 4: getLevel4Lesson };
  const littleStarsOverrides = { 'ela': ELA_LITTLESTARS, 'sci': SCI_LITTLESTARS, 'ss': SS_LITTLESTARS, 'inner-world': INNERWORLD_LITTLESTARS, 'cosmos': COSMOS_LITTLESTARS, 'money': MONEYBUSINESS_LITTLESTARS, 'future-skills': FUTURESKILLS_LITTLESTARS, 'math': MATH_LITTLESTARS, 'leadership': SOCIALLEADERSHIP_LITTLESTARS, 'wellness': LIFEWELLNESS_LITTLESTARS, 'creative-arts': CREATIVEARTS_LITTLESTARS, 'languages': SPANISH_LITTLESTARS, 'history': HISTORYWORLD_LITTLESTARS, 'frontier': FRONTIER_LITTLESTARS };
  const explorerOverrides = { 'ela': ELA_EXPLORERS, 'inner-world': INNERWORLD_EXPLORERS, 'money': MONEYBUSINESS_EXPLORERS, 'cosmos': COSMOS_EXPLORERS, 'sci': SCI_EXPLORERS, 'future-skills': FUTURESKILLS_EXPLORERS, 'leadership': SOCIALLEADERSHIP_EXPLORERS, 'wellness': LIFEWELLNESS_EXPLORERS, 'creative-arts': CREATIVEARTS_EXPLORERS, 'history': HISTORYWORLD_EXPLORERS, 'ss': SS_EXPLORERS, 'math': MATH_EXPLORERS, 'languages': SPANISH_EXPLORERS, 'frontier': FRONTIER_EXPLORERS };
  const upperExplorerOverrides = { 'ela': ELA_UPPEREXPLORERS, 'inner-world': INNERWORLD_UPPEREXPLORERS, 'cosmos': COSMOS_UPPEREXPLORERS, 'sci': SCI_UPPEREXPLORERS, 'money': MONEYBUSINESS_UPPEREXPLORERS, 'future-skills': FUTURESKILLS_UPPEREXPLORERS, 'leadership': SOCIALLEADERSHIP_UPPEREXPLORERS, 'wellness': LIFEWELLNESS_UPPEREXPLORERS, 'creative-arts': CREATIVEARTS_UPPEREXPLORERS, 'history': HISTORYWORLD_UPPEREXPLORERS, 'ss': SS_UPPEREXPLORERS, 'math': MATH_UPPEREXPLORERS, 'languages': SPANISH_UPPEREXPLORERS, 'frontier': FRONTIER_UPPEREXPLORERS };
  const voyagerOverrides = { 'ela': ELA_VOYAGERS, 'inner-world': INNERWORLD_VOYAGERS, 'cosmos': COSMOS_VOYAGERS, 'sci': SCI_VOYAGERS, 'math': MATH_VOYAGERS, 'money': MONEYBUSINESS_VOYAGERS, 'future-skills': FUTURESKILLS_VOYAGERS, 'leadership': SOCIALLEADERSHIP_VOYAGERS, 'wellness': LIFEWELLNESS_VOYAGERS, 'creative-arts': CREATIVEARTS_VOYAGERS, 'history': HISTORYWORLD_VOYAGERS, 'ss': SS_VOYAGERS, 'languages': SPANISH_VOYAGERS, 'frontier': FRONTIER_VOYAGERS };
  const lesson = (level === 1 && littleStarsOverrides[subjectId])
    ? (littleStarsOverrides[subjectId][idx] || null)
    : (level === 2 && explorerOverrides[subjectId])
      ? (explorerOverrides[subjectId][idx] || null)
      : (level === 3 && upperExplorerOverrides[subjectId])
        ? (upperExplorerOverrides[subjectId][idx] || null)
        : (level === 4 && voyagerOverrides[subjectId])
          ? (voyagerOverrides[subjectId][idx] || null)
          : (levelGetters[level] || getLesson)(subjectId, idx);
  const subject     = getSubject(subjectId);
  const guideId     = (subject?.guide || lesson?.guide || 'nova').toLowerCase();
  const guideAvatar = getAvatar(guideId);

  // ── Step system ────────────────────────────────────────────────────────────
  // 0=intro · 1=hook · 2…N+1=learn blocks · N+2=spark · N+3=quickcheck
  // N+4=quiz · N+5=explore · N+6=badge   (N = learnItems.length)
  const learnItems = useMemo(() => {
    const l = lesson?.learn;
    return Array.isArray(l) ? l.filter(Boolean) : (l ? [l] : []);
  }, [lesson]);
  const N = learnItems.length;
  const TOTAL_STEPS = 7 + N;

  const [step,          setStep]         = useState(0);
  const [sparkAnswer,   setSparkAnswer]  = useState('');
  const [exploreAnswer, setExploreAnswer]= useState('');
  const [quizAnswers,   setQuizAnswers]  = useState([]);
  const [quizCurrent,   setQuizCurrent]  = useState(0);
  const [score,         setScore]        = useState(null);
  const [badgeAwarded,  setBadgeAwarded] = useState(false);
  const [quizSelected,  setQuizSelected] = useState(null);
  const [quizWrongIdx,  setQuizWrongIdx] = useState(null);
  const [qcSelected,    setQcSelected]   = useState(null);
  const [qcWrong,       setQcWrong]      = useState(false);

  // Even learn blocks (0,2,4…) → emoji reactions; odd (1,3,5…) → True/False
  // Emoji set A (🚀🧠⚡) for even blocks, Set B (🔥💡🤩) for odd blocks (fallback)
  const [tfData,       setTfData]      = useState(null); // { statement, isTrue }
  const [tfLoading,    setTfLoading]   = useState(false);
  const [tfAnswered,   setTfAnswered]  = useState(null); // null | true | false (was answer correct)
  const [tfFeedback,   setTfFeedback]  = useState(null); // text for guide to speak after answer
  const [tappedEmoji,  setTappedEmoji] = useState(null); // index of tapped emoji button

  // ── Karaoke highlight ─────────────────────────────────────────────────────
  const [karaokeWords, setKaraokeWords] = useState([]); // words of currently spoken text
  const [karaokeIdx,   setKaraokeIdx]  = useState(-1);  // index of active word in spoken stream
  const karaokeRef     = useRef([]);                    // array of scheduled timeout IDs

  // ── Little Stars AI activities ────────────────────────────────────────────
  const [lsActivities,    setLsActivities]    = useState({}); // keyed by `${subjectId}_${idx}_${learnIdx}`
  const [lsActivityTapped, setLsActivityTapped] = useState(null); // index tapped on current activity
  const [lsActivityShake,  setLsActivityShake]  = useState(null); // index shaking on wrong tap

  // ── Little Stars visual illustrations ────────────────────────────────────
  const [lsVisualTaps, setLsVisualTaps] = useState(0); // tap count for current visual

  // ── Little Stars mode ─────────────────────────────────────────────────────
  const isLittleStars = level === 1;
  const [lsSentenceIdx, setLsSentenceIdx] = useState(0); // current sentence-pair index
  const [starBurst,     setStarBurst]     = useState(null); // { count, key } → trigger star anim
  const lsHasSpokenRef = useRef(false);  // true once guide has spoken the current pair
  const lsAutoRef      = useRef(null);   // timeout handle for inter-pair auto-advance

  // ── Derived step info ──────────────────────────────────────────────────────
  const isLearnStep = step >= 2 && step < 2 + N;
  const learnIdx    = isLearnStep ? step - 2 : 0;
  const stepType    = step === 0             ? 'intro'
                    : step === 1             ? 'hook'
                    : isLearnStep            ? 'learn'
                    : step === 2 + N         ? 'spark'
                    : step === 3 + N         ? 'quickcheck'
                    : step === 4 + N         ? 'quiz'
                    : step === 5 + N         ? 'explore'
                    :                          'badge';
  const currentLearnBlock = isLearnStep ? learnItems[learnIdx] : '';
  const passScore = Math.max(2, Math.ceil((lesson?.quiz?.length || 5) * 0.6));
  const name      = child?.name || 'friend';
  const arrivalText = (lesson?.arrival || '').replace(/\{\{name\}\}/g, name);

  // Little Stars sentence-pair logic — applies to ALL text steps (hook, learn, spark, explore)
  const lsStepText = isLittleStars ? (
    stepType === 'hook'    ? arrivalText :
    stepType === 'learn'   ? currentLearnBlock :
    stepType === 'spark'   ? (lesson?.spark || '') :
    stepType === 'explore' ? (lesson?.explore || '') :
    ''
  ) : '';
  const lsSentences   = lsStepText ? splitSentences(lsStepText) : [];
  const lsPairs       = [];
  for (let i = 0; i < lsSentences.length; i += 2)
    lsPairs.push(lsSentences.slice(i, i + 2).join(' '));
  const lsCurrentPair  = (isLittleStars && lsStepText && lsPairs.length)
    ? (lsPairs[Math.min(lsSentenceIdx, lsPairs.length - 1)] || lsStepText)
    : (isLearnStep ? currentLearnBlock : lsStepText);
  const lsIsLastPair   = !isLittleStars || !lsStepText || lsSentenceIdx >= lsPairs.length - 1;
  const lsShowEngagement = lsIsLastPair; // engagement only on last pair (or for non-LS)

  // Little Stars AI activity — fetched eagerly when a LS learn step starts
  const lsActivityKey  = isLittleStars && isLearnStep ? `${subjectId}_${idx}_${learnIdx}` : null;
  const lsActivityEntry = lsActivityKey ? (lsActivities[lsActivityKey] ?? null) : null;
  // lsActivityEntry is null (not fetched), 'loading', 'error', or the activity object
  const lsActivity     = (lsActivityEntry && lsActivityEntry !== 'loading' && lsActivityEntry !== 'error')
    ? lsActivityEntry : null;
  const lsActivityInstruction = (isLittleStars && isLearnStep && lsIsLastPair && lsActivity)
    ? lsActivity.instruction : null;

  // Visual illustration: shown after each LS sentence pair (replaces auto-advance + engagement)
  const lsVisualName = (isLittleStars && isLearnStep) ? detectVisual(lsCurrentPair) : null;

  // Fires whenever the guide starts speaking any text.
  // Schedules one setTimeout per word, with duration proportional to character count.
  // Longer words get more time; minimum 150ms per word.
  const handleSpeakStart = useCallback((text, duration) => {
    karaokeRef.current.forEach(id => clearTimeout(id));
    karaokeRef.current = [];
    setKaraokeIdx(-1);
    if (!text || !duration || duration <= 0) return;
    const words = text.split(/\s+/).filter(Boolean);
    if (words.length < 2) return;
    setKaraokeWords(words);

    // avgTimePerChar distributes total audio duration across characters
    const totalChars = words.reduce((sum, w) => sum + w.length, 0);
    const avgTimePerChar = (duration * 1000) / totalChars; // ms per character

    let cumMs = 0;
    const ids = words.map((word, i) => {
      const id = setTimeout(() => setKaraokeIdx(i), cumMs);
      cumMs += Math.max(150, word.length * avgTimePerChar);
      return id;
    });
    // Dim after last word finishes
    ids.push(setTimeout(() => setKaraokeIdx(-1), cumMs + 300));
    karaokeRef.current = ids;
  }, []);

  const handleSpeakEnd = useCallback(() => {
    karaokeRef.current.forEach(id => clearTimeout(id));
    karaokeRef.current = [];
    setKaraokeIdx(-1);
    setKaraokeWords([]);
  }, []);

  // Reset per-step transient state when step changes
  useEffect(() => {
    karaokeRef.current.forEach(id => clearTimeout(id));
    karaokeRef.current = [];
    setKaraokeIdx(-1);
    setKaraokeWords([]);
    setTfAnswered(null);
    setTfFeedback(null);
    setTappedEmoji(null);
    setQcSelected(null);
    setQcWrong(false);
    setLsSentenceIdx(0);
    clearTimeout(lsAutoRef.current);
    lsHasSpokenRef.current = false;
    setLsActivityTapped(null);
    setLsActivityShake(null);
    setLsVisualTaps(0);
  }, [step]);

  // Cleanup karaoke timeouts on unmount
  useEffect(() => () => {
    karaokeRef.current.forEach(id => clearTimeout(id));
    clearTimeout(lsAutoRef.current);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Little Stars: reset hasSpoken ref and visual tap count when sentence pair changes
  useEffect(() => {
    lsHasSpokenRef.current = false;
    clearTimeout(lsAutoRef.current);
    setLsVisualTaps(0);
  }, [lsSentenceIdx, step]);

  // Little Stars: fetch AI activity eagerly when a LS learn step starts
  useEffect(() => {
    if (!isLittleStars || !isLearnStep) return;
    const key = `${subjectId}_${idx}_${learnIdx}`;
    if (lsActivities[key] !== undefined) return; // already fetched or loading
    // Check localStorage cache first
    const cacheKey = `ls_activity_${key}`;
    try {
      const cached = localStorage.getItem(cacheKey);
      if (cached) {
        const parsed = JSON.parse(cached);
        setLsActivities(prev => ({ ...prev, [key]: parsed }));
        return;
      }
    } catch { /* ignore cache errors */ }
    // Fetch from API
    setLsActivities(prev => ({ ...prev, [key]: 'loading' }));
    fetch('/.netlify/functions/ls-activity', {
      method:  'POST',
      headers: { 'Content-Type': 'application/json' },
      body:    JSON.stringify({ sectionText: currentLearnBlock }),
    })
      .then(r => r.json())
      .then(data => {
        if (data.error) throw new Error(data.error);
        try { localStorage.setItem(cacheKey, JSON.stringify(data)); } catch { /* storage full */ }
        setLsActivities(prev => ({ ...prev, [key]: data }));
      })
      .catch(() => setLsActivities(prev => ({ ...prev, [key]: 'error' })));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [step]);

  // Little Stars: when guide finishes reading a non-last pair, auto-advance to next pair
  // For learn steps: visual taps are the advancement mechanism (no auto-timer)
  // For other steps (hook, spark, explore): auto-advance after 1.5s
  useEffect(() => {
    if (karaokeIdx >= 0) { lsHasSpokenRef.current = true; return; }
    if (!lsHasSpokenRef.current) return;         // speech hasn't started yet
    if (!isLittleStars || !lsStepText) return;  // not a LS text step
    if (lsIsLastPair) return;                   // last pair — wait for child action
    if (isLearnStep) return;                    // learn steps: visual taps handle advancement
    lsAutoRef.current = setTimeout(() => {
      setLsSentenceIdx(i => i + 1);
    }, 1500);
    return () => clearTimeout(lsAutoRef.current);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [karaokeIdx]);

  // Auto-clear star burst after animation finishes
  useEffect(() => {
    if (!starBurst) return;
    const t = setTimeout(() => setStarBurst(null), 1600);
    return () => clearTimeout(t);
  }, [starBurst?.key]);

  // Generate T/F question for odd learn blocks (1, 3, 5…)
  useEffect(() => {
    if (!isLearnStep || learnIdx % 2 === 0) return;
    setTfData(null);
    setTfLoading(true);
    askNova({
      childName:    child?.name    || 'friend',
      childAge:     child?.age     || 8,
      avatarId:     guideId,
      subjectLabel: subject?.label || '',
      lessonTitle:  lesson?.title  || '',
      learnContent: currentLearnBlock,
      history:      [],
      question:     `Based only on the content above, write a true or false question. Reply with EXACTLY two lines — nothing else:\nLine 1: a simple, clear statement (one sentence)\nLine 2: the single word True or False`,
    }).then(reply => {
      const lines = reply.trim().split('\n').filter(l => l.trim());
      if (lines.length >= 2) {
        const last = lines[lines.length - 1].trim().toLowerCase();
        const stmt = lines.slice(0, -1).join(' ').trim();
        if ((last === 'true' || last === 'false') && stmt) {
          setTfData({ statement: stmt, isTrue: last === 'true' });
        } else {
          setTfData(null); // fall back to emoji engagement
        }
      } else {
        setTfData(null);
      }
      setTfLoading(false);
    }).catch(() => {
      setTfLoading(false);
      setTfData(null);
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [step]);

  if (!child) { navigate('/child/select'); return null; }
  if (!lesson) {
    return (
      <div className="min-h-screen bg-[#080618] flex items-center justify-center text-white/50">
        Lesson not found.
      </div>
    );
  }

  function advance() { setStep(s => s + 1); }

  function triggerStars(count) {
    if (!isLittleStars) return;
    setStarBurst(b => ({ count, key: (b?.key || 0) + 1 }));
  }

  function handleLsVisualTap() {
    const next = lsVisualTaps + 1;
    setLsVisualTaps(next);
    if (next >= 3) {
      playChime();
      triggerStars(5);
      if (lsIsLastPair) {
        setTimeout(advance, 1500);
      } else {
        clearTimeout(lsAutoRef.current);
        setTimeout(() => setLsSentenceIdx(i => i + 1), 1500);
      }
    }
  }

  function handleQcSelect(optIdx) {
    if (qcSelected !== null) return;
    setQcSelected(optIdx);
    if (optIdx === lesson.quickCheck.correct) {
      if (isLittleStars) { playChime(); triggerStars(5); }
      setTimeout(() => advance(), 850);
    } else {
      setQcWrong(true);
      setTimeout(() => { setQcSelected(null); setQcWrong(false); }, 1000);
    }
  }

  function handleQuizSelect(optIdx) {
    if (quizSelected !== null) return;
    const isCorrect = optIdx === lesson.quiz[quizCurrent].correct;
    setQuizSelected(optIdx);
    if (isCorrect && isLittleStars) { playChime(); triggerStars(5); }
    if (!isCorrect) {
      setQuizWrongIdx(optIdx);
      setTimeout(() => setQuizWrongIdx(null), 600);
    }
    const newAnswers = [...quizAnswers, isCorrect];
    setQuizAnswers(newAnswers);

    if (quizCurrent < lesson.quiz.length - 1) {
      setTimeout(() => {
        setQuizCurrent(c => c + 1);
        setQuizSelected(null);
        setQuizWrongIdx(null);
      }, 750);
    } else {
      const finalScore = newAnswers.filter(Boolean).length;
      setScore(finalScore);
      if (finalScore >= passScore && !badgeAwarded) {
        if (parent) {
          updateChildProgress(parent.id, child.id, progressKey, idx);
          awardBadge(parent.id, child.id, lesson.badge);
          sendLessonCompleteEmail({
            parentEmail:  parent.email,
            parentName:   parent.name,
            childName:    child.name,
            lessonTitle:  lesson.title,
            subjectLabel: subject.label,
            badge:        lesson.badge,
            explore:      lesson.explore || '',
          });
        }
        setBadgeAwarded(true);
      }
      setTimeout(() => advance(), 850);
    }
  }

  const pct = Math.round((step / (TOTAL_STEPS - 1)) * 100);

  // ── Little Stars AI activity block ───────────────────────────────────────
  function LsActivityBlock({ activity }) {
    const choices = activity.emojis || activity.options;
    const isCount = activity.type === 'tap_count';
    return (
      <div className="space-y-5">
        <p className="text-white/90 font-bold text-center" style={{ fontSize: '1.35rem', lineHeight: 1.4 }}>
          {activity.instruction}
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          {choices.map((choice, i) => {
            const isTapped  = lsActivityTapped === i;
            const isShaking = lsActivityShake === i;
            const isCorrect = isTapped && i === activity.correctIndex;
            const isWrong   = isTapped && i !== activity.correctIndex;
            return (
              <button
                key={i}
                onClick={() => {
                  if (lsActivityTapped !== null) return;
                  setLsActivityTapped(i);
                  if (i === activity.correctIndex) {
                    playChime();
                    triggerStars(5);
                    setTimeout(advance, 2000);
                  } else {
                    playPop();
                    setLsActivityShake(i);
                    setTimeout(() => {
                      setLsActivityTapped(null);
                      setLsActivityShake(null);
                    }, 800);
                  }
                }}
                disabled={lsActivityTapped !== null && !isShaking}
                className={`flex items-center justify-center rounded-2xl font-bold transition-all
                  ${isShaking ? 'lesson-shake' : ''}
                  ${isCorrect ? 'lesson-correct-green-pulse' : ''}
                  ${!isTapped ? 'hover:scale-105 active:scale-95' : ''}`}
                style={{
                  width: 120, height: 120, fontSize: isCount ? '2rem' : '3rem',
                  background: isCorrect ? 'rgba(16,185,129,0.25)' : isWrong ? 'rgba(239,68,68,0.18)' : 'rgba(255,255,255,0.07)',
                  border: isCorrect ? '2px solid #10B981' : isWrong ? '2px solid #EF4444' : '2px solid rgba(255,255,255,0.14)',
                }}
              >
                {choice}
              </button>
            );
          })}
        </div>
        {lsActivityTapped !== null && lsActivityTapped !== activity.correctIndex && lsActivityShake === null && (
          <p className="text-red-400 text-center font-semibold text-sm lesson-fade-in">Try again! 🌟</p>
        )}
        {lsActivity && lsActivityTapped === activity.correctIndex && (
          <p className="text-emerald-400 text-center font-bold text-base lesson-fade-in">🎉 That's right!</p>
        )}
      </div>
    );
  }

  // ── Engagement component for learn steps ──────────────────────────────────
  // Even blocks (0,2,4…): emoji reactions — Odd blocks (1,3,5…): True/False
  const isTfBlock = learnIdx % 2 !== 0;

  const EMOJI_SET_A = [{ emoji: '🚀', label: 'Wow!' }, { emoji: '🧠', label: 'Big brain!' }, { emoji: '⚡', label: 'So cool!' }];
  const EMOJI_SET_B = [{ emoji: '🔥', label: 'Fire!' }, { emoji: '💡', label: 'I get it!' }, { emoji: '🤩', label: 'Amazing!' }];

  function EngagementBlock() {
    // Odd blocks (1, 3, 5…) → True/False
    if (isTfBlock) {
      if (tfLoading) {
        return (
          <div className="flex items-center gap-2 justify-center py-4">
            <div className="nova-dot-1 w-1.5 h-1.5 rounded-full bg-white/30" />
            <div className="nova-dot-2 w-1.5 h-1.5 rounded-full bg-white/30" />
            <div className="nova-dot-3 w-1.5 h-1.5 rounded-full bg-white/30" />
          </div>
        );
      }
      if (tfData) {
        const handleTfAnswer = (answeredTrue) => {
          const correct = answeredTrue === tfData.isTrue;
          if (correct && isLittleStars) { playChime(); triggerStars(3); }
          setTfAnswered(correct);
          setTfFeedback(correct
            ? "That's right! Nice job!"
            : `Not quite! The answer is ${tfData.isTrue ? 'True' : 'False'}. Let's keep going!`
          );
        };
        const tfBtnStyle = isLittleStars
          ? { height: 70, fontSize: '1.1rem', fontWeight: 700, borderRadius: 16 }
          : {};
        return (
          <div className="space-y-4">
            <div
              className="rounded-xl p-5 text-center"
              style={{ background: 'rgba(124,58,237,0.08)', border: '1px solid rgba(124,58,237,0.25)' }}
            >
              <p className="text-xs font-semibold tracking-widest uppercase text-white/35 mb-2">True or False?</p>
              <p className={`text-white/90 leading-relaxed font-medium ${isLittleStars ? 'text-lg' : 'text-sm'}`}>{tfData.statement}</p>
            </div>
            {tfAnswered === null ? (
              <div className={`flex ${isLittleStars ? 'flex-col' : ''} gap-3`}>
                <button
                  onClick={() => handleTfAnswer(true)}
                  className="flex-1 py-3 rounded-xl font-semibold transition-all hover:scale-[1.03] active:scale-[0.97]"
                  style={{ background: 'rgba(16,185,129,0.15)', border: '1px solid rgba(16,185,129,0.40)', color: '#6EE7B7', ...tfBtnStyle }}
                >
                  ✓ True
                </button>
                <button
                  onClick={() => handleTfAnswer(false)}
                  className="flex-1 py-3 rounded-xl font-semibold transition-all hover:scale-[1.03] active:scale-[0.97]"
                  style={{ background: 'rgba(239,68,68,0.12)', border: '1px solid rgba(239,68,68,0.35)', color: '#FCA5A5', ...tfBtnStyle }}
                >
                  ✗ False
                </button>
              </div>
            ) : (
              <div
                className="rounded-xl px-5 py-4 text-center font-semibold lesson-zoom-in"
                style={{
                  fontSize: isLittleStars ? '1.1rem' : '0.875rem',
                  ...(tfAnswered
                    ? { background: 'rgba(16,185,129,0.14)', border: '1px solid #10B981', color: '#6EE7B7' }
                    : { background: 'rgba(239,68,68,0.12)', border: '1px solid #EF4444', color: '#FCA5A5' }),
                }}
              >
                {tfAnswered ? '🎉 Correct!' : `The answer was ${tfData.isTrue ? 'True' : 'False'}`}
              </div>
            )}
          </div>
        );
      }
      // T/F generation failed — fall through to Set B emoji reactions
    }

    // Even blocks (0, 2, 4…) → Set A  |  odd fallback → Set B
    const reactions = isTfBlock ? EMOJI_SET_B : EMOJI_SET_A;
    const emojiSize = isLittleStars ? 120 : 80;
    const emojiFontSize = isLittleStars ? 52 : 34;
    return (
      <div className="space-y-4">
        <p className="text-white/35 text-xs text-center tracking-widest uppercase">How do you feel about that?</p>
        <div className={`flex ${isLittleStars ? 'gap-4 justify-center' : 'gap-4 justify-center'}`}>
          {reactions.map((r, i) => (
            <button
              key={r.label}
              onClick={() => {
                if (isLittleStars) { playPop(); triggerStars(3); playFanfare(); }
                setTappedEmoji(i);
                setTimeout(advance, isLittleStars ? 1200 : 480);
              }}
              disabled={tappedEmoji !== null}
              className={`flex flex-col items-center gap-2 rounded-2xl disabled:cursor-default
                ${tappedEmoji === i ? 'lesson-emoji-bounce' : 'hover:scale-105 active:scale-95 transition-transform'}`}
              style={{
                background: tappedEmoji === i ? 'rgba(124,58,237,0.22)' : 'rgba(255,255,255,0.07)',
                border:     tappedEmoji === i ? '1px solid rgba(124,58,237,0.55)' : '1px solid rgba(255,255,255,0.14)',
                width: emojiSize, height: emojiSize,
                padding: isLittleStars ? 12 : undefined,
                minWidth: emojiSize,
              }}
            >
              <span style={{ fontSize: emojiFontSize, lineHeight: 1 }}>{r.emoji}</span>
              <span className={`text-white/70 font-semibold whitespace-nowrap ${isLittleStars ? 'text-sm' : 'text-xs'}`}>{r.label}</span>
            </button>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#080618] flex flex-col overflow-hidden">
      {/* Little Stars floating stars overlay */}
      <FloatingStars count={starBurst?.count || 3} triggerKey={starBurst?.key} />

      {/* ── Fixed top bar ──────────────────────────────────────── */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-[#080618]/92 backdrop-blur border-b border-white/5">
        <div className="max-w-2xl mx-auto px-4 py-3 flex items-center gap-4">
          <button
            onClick={() => navigate(`/child/subject/${subjectId}`)}
            className="text-white/30 hover:text-white/70 transition-colors flex-shrink-0"
            aria-label="Back"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
          </button>
          <div className="flex-1">
            <div className="h-1.5 bg-white/8 rounded-full overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-700 ease-out"
                style={{ width: `${pct}%`, background: subject.color }}
              />
            </div>
          </div>
          <span className="text-white/25 text-xs flex-shrink-0 tabular-nums">
            {step + 1}/{TOTAL_STEPS}
          </span>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════ */}
      {/* STEP 0 — INTRO                                            */}
      {/* ══════════════════════════════════════════════════════════ */}
      {stepType === 'intro' && (
        <div className="min-h-screen flex flex-col items-center justify-center px-6 pt-20 pb-44 relative">
          <div className="fixed inset-0 pointer-events-none" style={{
            background: `
              radial-gradient(ellipse 75% 55% at 28% 22%, ${subject.color}28 0%, transparent 60%),
              radial-gradient(ellipse 55% 45% at 78% 82%, ${subject.color}16 0%, transparent 55%)
            `,
          }} />

          <div className="relative z-10 max-w-lg w-full text-center">
            {/* Guide portrait */}
            <div className="lesson-zoom-in mb-6" style={{ animationDelay: '0.1s' }}>
              <div
                className="w-36 h-36 rounded-full overflow-hidden mx-auto mb-4 glow-pulse"
                style={{ boxShadow: `0 0 72px ${guideAvatar.accent}55, 0 0 0 3px ${guideAvatar.accent}40` }}
              >
                <img src={guideAvatar.image} alt={guideAvatar.name} className="w-full h-full object-cover" />
              </div>
              <p className="text-sm font-semibold tracking-widest uppercase mb-1" style={{ color: guideAvatar.accent }}>
                {guideAvatar.name}
              </p>
              <span className="text-white/25 text-xs">Lesson {idx + 1} · {subject.label}</span>
            </div>

            {/* Lesson title */}
            <h1 className="text-4xl font-semibold text-white mb-10 leading-tight lesson-slide-up" style={{ fontFamily: 'Georgia, serif', animationDelay: '0.3s' }}>
              {lesson.title}
            </h1>

            {/* Let's begin button */}
            <div className="lesson-fade-in" style={{ animationDelay: '0.9s' }}>
              <button
                onClick={advance}
                className="px-12 rounded-2xl font-semibold text-white transition-all hover:scale-105 hover:shadow-2xl active:scale-95"
                style={{
                  background: `linear-gradient(135deg, ${subject.color}ee, ${subject.color}99)`,
                  boxShadow: `0 4px 44px ${subject.color}48`,
                  height: isLittleStars ? 70 : 56,
                  fontSize: isLittleStars ? '1.25rem' : '1.125rem',
                }}
              >
                Let's begin ✦
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ══════════════════════════════════════════════════════════ */}
      {/* STEP 1 — HOOK                                             */}
      {/* ══════════════════════════════════════════════════════════ */}
      {stepType === 'hook' && (
        <div className="min-h-screen flex flex-col items-center justify-center px-6 pt-20 pb-44">
          <div className="max-w-lg w-full">
            <p className="text-xs font-semibold text-white/30 tracking-widest uppercase mb-8 text-center lesson-fade-in">
              {isLittleStars && lsPairs.length > 1 ? `Part ${lsSentenceIdx + 1} of ${lsPairs.length}` : "Today's Lesson"}
            </p>

            <div
              key={`hook-${lsSentenceIdx}`}
              onClick={isLittleStars && !lsIsLastPair ? () => {
                clearTimeout(lsAutoRef.current);
                setLsSentenceIdx(i => i + 1);
              } : undefined}
              className="lesson-zoom-in rounded-2xl mb-8 text-left"
              style={{
                animationDelay: '0.12s',
                background: 'rgba(15,11,46,0.88)',
                border: `1px solid ${subject.color}28`,
                backdropFilter: 'blur(16px)',
                boxShadow: `0 4px 40px ${subject.color}12`,
                padding: isLittleStars ? '2rem' : '1.75rem',
                cursor: isLittleStars && !lsIsLastPair ? 'pointer' : 'default',
                animation: 'lesson-slide-from-right-kf 0.50s cubic-bezier(0.16,1,0.3,1) both',
              }}
            >
              {/* Guide mini-badge inside card */}
              <div className="flex items-center gap-3 mb-5">
                <div className="w-9 h-9 rounded-full overflow-hidden flex-shrink-0" style={{ boxShadow: `0 0 0 2px ${guideAvatar.accent}38` }}>
                  <img src={guideAvatar.image} alt={guideAvatar.name} className="w-full h-full object-cover" />
                </div>
                <p className="text-xs font-semibold tracking-widest uppercase" style={{ color: guideAvatar.accent }}>
                  {guideAvatar.name} says
                </p>
              </div>
              {isLittleStars ? (
                <KaraokeText
                  displayText={lsCurrentPair}
                  spokenWords={karaokeWords}
                  spokenIdx={karaokeIdx}
                  style={{ fontSize: '1.5rem', lineHeight: 2, fontWeight: 500, display: 'block' }}
                />
              ) : (
                <KaraokeText
                  displayText={arrivalText}
                  spokenWords={karaokeWords}
                  spokenIdx={karaokeIdx}
                  className="leading-relaxed text-base"
                />
              )}
              {isLittleStars && !lsIsLastPair && (
                <p className="text-white/20 text-xs text-center mt-6">Tap to continue →</p>
              )}
            </div>

            {lsIsLastPair && (
              <div className="lesson-slide-up" style={{ animationDelay: '0.5s' }}>
                <button
                  onClick={advance}
                  className="w-full rounded-2xl font-semibold text-white transition-all hover:scale-[1.01] hover:shadow-xl active:scale-[0.99]"
                  style={{
                    background: `linear-gradient(135deg, ${subject.color}ee, ${subject.color}99)`,
                    height: isLittleStars ? 70 : 56,
                    fontSize: isLittleStars ? '1.2rem' : '1rem',
                  }}
                >
                  Continue →
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ══════════════════════════════════════════════════════════ */}
      {/* LEARN STEPS (one block per screen)                        */}
      {/* ══════════════════════════════════════════════════════════ */}
      {isLearnStep && (
        <div className="min-h-screen flex flex-col items-center justify-center px-6 pt-20 pb-44">
          <div className={`w-full ${isLittleStars ? 'max-w-lg' : 'max-w-lg'}`}>
            <p className="text-xs font-semibold text-white/30 tracking-widest uppercase mb-8 text-center lesson-fade-in">
              {isLittleStars && lsPairs.length > 1
                ? `Part ${lsSentenceIdx + 1} of ${lsPairs.length}`
                : `Learn · ${learnIdx + 1} of ${N}`}
            </p>

            {/* Content card — tappable on LS to skip auto-advance */}
            <div
              key={`${step}-${lsSentenceIdx}`}
              onClick={isLittleStars && !lsIsLastPair ? () => {
                clearTimeout(lsAutoRef.current);
                setLsSentenceIdx(i => i + 1);
              } : undefined}
              className="rounded-2xl mb-6"
              style={{
                background: 'rgba(15,11,46,0.88)',
                border: `1px solid ${subject.color}28`,
                boxShadow: `0 4px 28px ${subject.color}0a`,
                padding: isLittleStars ? '2rem' : '1.5rem',
                animation: 'lesson-slide-from-right-kf 0.50s cubic-bezier(0.16,1,0.3,1) both',
                cursor: (isLittleStars && !lsIsLastPair) ? 'pointer' : 'default',
              }}
            >
              {!isLittleStars && (
                <div className="flex gap-3 items-start">
                  <div
                    className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5"
                    style={{ background: `${subject.color}28`, color: subject.color }}
                  >
                    {learnIdx + 1}
                  </div>
                  <KaraokeText
                    displayText={currentLearnBlock}
                    spokenWords={karaokeWords}
                    spokenIdx={karaokeIdx}
                    className="leading-relaxed text-sm"
                  />
                </div>
              )}
              {isLittleStars && (
                <KaraokeText
                  displayText={lsCurrentPair}
                  spokenWords={karaokeWords}
                  spokenIdx={karaokeIdx}
                  style={{
                    fontSize: '1.5rem',
                    lineHeight: 2,
                    fontWeight: 500,
                    display: 'block',
                  }}
                />
              )}
              {/* LS tap-to-skip hint */}
              {isLittleStars && !lsIsLastPair && (
                <p className="text-white/20 text-xs text-center mt-6">Tap to continue →</p>
              )}
            </div>

            {/* LS: visual illustration after each sentence pair (replaces engagement + auto-timer) */}
            {isLittleStars && lsVisualName && lsVisualTaps < 3 && (
              <div className="lesson-slide-up" style={{ animationDelay: '0.6s' }}>
                <p className="text-white/70 font-bold text-center mb-3" style={{ fontSize: '1.1rem' }}>
                  {VISUAL_INSTRUCTIONS[lsVisualName]}
                </p>
                <LsVisualFrame
                  name={lsVisualName}
                  tapCount={lsVisualTaps}
                  onTap={handleLsVisualTap}
                />
              </div>
            )}

            {/* Non-LS engagement — only shown on last sentence pair */}
            {!isLittleStars && lsShowEngagement && (
              <div className="lesson-slide-up" style={{ animationDelay: '0.8s' }}>
                <EngagementBlock />
              </div>
            )}
          </div>
        </div>
      )}

      {/* ══════════════════════════════════════════════════════════ */}
      {/* SPARK — BIG IDEA                                          */}
      {/* ══════════════════════════════════════════════════════════ */}
      {stepType === 'spark' && (
        <div className="min-h-screen flex flex-col items-center justify-center px-6 pt-20 pb-44">
          <div className="max-w-lg w-full">
            <p className="text-xs font-semibold text-white/30 tracking-widest uppercase mb-8 text-center lesson-fade-in">
              {isLittleStars && lsPairs.length > 1 ? `Part ${lsSentenceIdx + 1} of ${lsPairs.length}` : 'Big Idea ✦'}
            </p>

            <div
              key={`spark-${lsSentenceIdx}`}
              onClick={isLittleStars && !lsIsLastPair ? () => {
                clearTimeout(lsAutoRef.current);
                setLsSentenceIdx(i => i + 1);
              } : undefined}
              className="rounded-3xl mb-8 text-center lesson-zoom-in lesson-spark-glow"
              style={{
                background: 'linear-gradient(135deg, rgba(124,58,237,0.14) 0%, rgba(76,29,149,0.08) 100%)',
                border: '1px solid rgba(124,58,237,0.38)',
                padding: isLittleStars ? '2rem' : '2rem',
                cursor: isLittleStars && !lsIsLastPair ? 'pointer' : 'default',
                animation: 'lesson-slide-from-right-kf 0.50s cubic-bezier(0.16,1,0.3,1) both',
              }}
            >
              <div className="w-2 h-2 rounded-full mx-auto mb-6" style={{ background: subject.color }} />
              {isLittleStars ? (
                <KaraokeText
                  displayText={lsCurrentPair}
                  spokenWords={karaokeWords}
                  spokenIdx={karaokeIdx}
                  style={{ fontSize: '1.5rem', lineHeight: 2, fontWeight: 500, display: 'block' }}
                />
              ) : (
                <p className="text-2xl font-semibold leading-snug" style={{ fontFamily: 'Georgia, serif' }}>
                  <KaraokeText
                    displayText={lesson.spark}
                    spokenWords={karaokeWords}
                    spokenIdx={karaokeIdx}
                  />
                </p>
              )}
              {isLittleStars && !lsIsLastPair && (
                <p className="text-white/20 text-xs text-center mt-6">Tap to continue →</p>
              )}
            </div>

            {lsIsLastPair && (
              <div className="lesson-slide-up" style={{ animationDelay: '0.45s' }}>
                <p className="text-white/40 text-sm mb-3">What do you think? Share your ideas:</p>
                <textarea
                  value={sparkAnswer}
                  onChange={e => setSparkAnswer(e.target.value)}
                  placeholder="Write anything that comes to mind..."
                  rows={5}
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder-white/20 focus:outline-none focus:border-[#7C3AED]/55 focus:ring-2 focus:ring-[#7C3AED]/18 resize-none text-sm leading-relaxed transition-all"
                />
                <button
                  onClick={advance}
                  className="mt-5 w-full py-4 rounded-2xl font-semibold text-white transition-all hover:scale-[1.01] hover:shadow-xl active:scale-[0.99]"
                  style={{ background: subject.color }}
                >
                  {sparkAnswer.trim() ? 'Continue →' : 'Skip for now'}
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ══════════════════════════════════════════════════════════ */}
      {/* QUICK CHECK                                               */}
      {/* ══════════════════════════════════════════════════════════ */}
      {stepType === 'quickcheck' && lesson.quickCheck && (
        <div className="min-h-screen flex flex-col items-center justify-center px-6 pt-20 pb-44">
          <div className="max-w-lg w-full">
            <p className="text-xs font-semibold text-white/30 tracking-widest uppercase mb-8 text-center lesson-fade-in">
              Quick Check
            </p>

            <div
              className="rounded-2xl p-8 mb-6 lesson-zoom-in"
              style={{
                background: 'rgba(15,11,46,0.88)',
                border: `1px solid ${subject.color}28`,
                boxShadow: `0 0 44px ${subject.color}12`,
                animationDelay: '0.04s',
              }}
            >
              <p className="text-xl font-semibold leading-snug text-center" style={{ fontFamily: 'Georgia, serif' }}>
                <KaraokeText
                  displayText={lesson.quickCheck.question}
                  spokenWords={karaokeWords}
                  spokenIdx={karaokeIdx}
                />
              </p>
            </div>

            {qcWrong && (
              <p className="text-red-400 text-sm text-center mb-4 font-medium lesson-fade-in">
                Not quite — try again!
              </p>
            )}

            <div className="space-y-3">
              {lesson.quickCheck.options.map((opt, i) => {
                const isSelected = qcSelected === i;
                const isCorrect  = i === lesson.quickCheck.correct;
                const showResult = qcSelected !== null;
                return (
                  <OptionCard
                    key={i}
                    label={String.fromCharCode(65 + i)}
                    text={opt}
                    delay={0.14 + i * 0.08}
                    isCorrect={showResult && isSelected && isCorrect}
                    isWrong={showResult && isSelected && !isCorrect}
                    isReveal={showResult && !isSelected}
                    onClick={() => handleQcSelect(i)}
                    disabled={qcSelected !== null}
                    variant="qc"
                  />
                );
              })}
            </div>
            <p className="text-white/20 text-xs text-center mt-6">Answer correctly to continue</p>
          </div>
        </div>
      )}

      {/* Quick check skipped if lesson has none */}
      {stepType === 'quickcheck' && !lesson.quickCheck && (() => { advance(); return null; })()}

      {/* ══════════════════════════════════════════════════════════ */}
      {/* QUIZ (one question per screen)                            */}
      {/* ══════════════════════════════════════════════════════════ */}
      {stepType === 'quiz' && score === null && (
        <div className="min-h-screen flex flex-col items-center justify-center px-6 pt-20 pb-44">
          <div className="max-w-lg w-full">
            <div className="flex items-center justify-between mb-5">
              <p className="text-xs font-semibold text-white/30 tracking-widest uppercase">Quiz</p>
              <span className="text-white/30 text-xs tabular-nums">{quizCurrent + 1} / {lesson.quiz.length}</span>
            </div>
            <div className="h-1 bg-white/8 rounded-full mb-8 overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-500"
                style={{ width: `${(quizCurrent / lesson.quiz.length) * 100}%`, background: subject.color }}
              />
            </div>

            <div key={quizCurrent}>
              <div
                className="rounded-2xl p-7 mb-6"
                style={{
                  background: 'rgba(15,11,46,0.88)',
                  border: `1px solid ${subject.color}28`,
                  boxShadow: `0 0 52px ${subject.color}12`,
                  animation: 'lesson-slide-from-top-kf 0.45s cubic-bezier(0.16,1,0.3,1) both',
                }}
              >
                <p className="text-xl font-semibold leading-snug" style={{ fontFamily: 'Georgia, serif' }}>
                  <KaraokeText
                    displayText={lesson.quiz[quizCurrent].question}
                    spokenWords={karaokeWords}
                    spokenIdx={karaokeIdx}
                  />
                </p>
              </div>

              <div className="space-y-3">
                {lesson.quiz[quizCurrent].options.map((opt, i) => {
                  const isSelected  = quizSelected === i;
                  const isCorrect   = i === lesson.quiz[quizCurrent].correct;
                  const isWrong     = i === quizWrongIdx;
                  const showCorrect = quizSelected !== null && isCorrect && !isSelected;
                  return (
                    <OptionCard
                      key={i}
                      label={String.fromCharCode(65 + i)}
                      text={opt}
                      delay={0.08 + i * 0.07}
                      isCorrect={isSelected && isCorrect}
                      isWrong={isWrong}
                      isReveal={quizSelected !== null && !isSelected && !showCorrect}
                      onClick={() => handleQuizSelect(i)}
                      disabled={quizSelected !== null}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ══════════════════════════════════════════════════════════ */}
      {/* EXPLORE — ACTIVITY                                        */}
      {/* ══════════════════════════════════════════════════════════ */}
      {stepType === 'explore' && (
        <div className="min-h-screen flex flex-col items-center justify-center px-6 pt-20 pb-44">
          <div className="max-w-lg w-full">
            <p className="text-xs font-semibold text-white/30 tracking-widest uppercase mb-8 text-center lesson-fade-in">
              {isLittleStars && lsPairs.length > 1 ? `Part ${lsSentenceIdx + 1} of ${lsPairs.length}` : 'Your Mission'}
            </p>

            {isLittleStars ? (
              <div
                key={`explore-${lsSentenceIdx}`}
                onClick={!lsIsLastPair ? () => {
                  clearTimeout(lsAutoRef.current);
                  setLsSentenceIdx(i => i + 1);
                } : undefined}
                className="rounded-2xl mb-8 lesson-zoom-in lesson-explore-glow"
                style={{
                  background: 'linear-gradient(145deg, rgba(124,58,237,0.12) 0%, rgba(15,11,46,0.96) 65%)',
                  border: '1px solid rgba(124,58,237,0.42)',
                  padding: '2rem',
                  cursor: !lsIsLastPair ? 'pointer' : 'default',
                  animation: 'lesson-slide-from-right-kf 0.50s cubic-bezier(0.16,1,0.3,1) both',
                }}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0" style={{ boxShadow: `0 0 0 2px ${guideAvatar.accent}38` }}>
                    <img src={guideAvatar.image} alt={guideAvatar.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <p className="text-[10px] font-semibold tracking-widest uppercase text-white/35 mb-0.5">Your Mission</p>
                    <p className="text-sm font-semibold" style={{ color: guideAvatar.accent }}>{guideAvatar.name} says:</p>
                  </div>
                </div>
                <KaraokeText
                  displayText={lsCurrentPair}
                  spokenWords={karaokeWords}
                  spokenIdx={karaokeIdx}
                  style={{ fontSize: '1.5rem', lineHeight: 2, fontWeight: 500, display: 'block' }}
                />
                {!lsIsLastPair && (
                  <p className="text-white/20 text-xs text-center mt-6">Tap to continue →</p>
                )}
              </div>
            ) : (
              (() => {
                const bullets = (lesson.explore || '')
                  .replace(/\. /g, '.\n')
                  .split(/\n+/)
                  .map(s => s.trim().replace(/\.$/, ''))
                  .filter(Boolean);
                return (
                  <div
                    className="rounded-2xl p-7 mb-8 lesson-zoom-in lesson-explore-glow"
                    style={{
                      background: 'linear-gradient(145deg, rgba(124,58,237,0.12) 0%, rgba(15,11,46,0.96) 65%)',
                      border: '1px solid rgba(124,58,237,0.42)',
                      animationDelay: '0.04s',
                    }}
                  >
                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0" style={{ boxShadow: `0 0 0 2px ${guideAvatar.accent}38` }}>
                        <img src={guideAvatar.image} alt={guideAvatar.name} className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <p className="text-[10px] font-semibold tracking-widest uppercase text-white/35 mb-0.5">Your Mission</p>
                        <p className="text-sm font-semibold" style={{ color: guideAvatar.accent }}>{guideAvatar.name} says:</p>
                      </div>
                    </div>
                    {bullets.length > 1 ? (
                      <ul className="space-y-2.5">
                        {bullets.map((bullet, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2.5 text-white/75 text-sm leading-relaxed"
                            style={{
                              animation: `lesson-slide-from-right-kf 0.44s cubic-bezier(0.16,1,0.3,1) ${0.18 + i * 0.18}s both`,
                              opacity: 0,
                            }}
                          >
                            <span className="mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: '#A78BFA' }} />
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <KaraokeText
                        displayText={lesson.explore}
                        spokenWords={karaokeWords}
                        spokenIdx={karaokeIdx}
                        className="leading-relaxed text-sm"
                      />
                    )}
                  </div>
                );
              })()
            )}

            {lsIsLastPair && (
              <div className="lesson-slide-up" style={{ animationDelay: '0.32s' }}>
                <p className="text-white/40 text-sm mb-3">Your response:</p>
                <textarea
                  value={exploreAnswer}
                  onChange={e => setExploreAnswer(e.target.value)}
                  placeholder="Take your time with this one..."
                  rows={6}
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder-white/20 focus:outline-none focus:border-[#7C3AED]/55 focus:ring-2 focus:ring-[#7C3AED]/18 resize-none text-sm leading-relaxed transition-all"
                />
                <button
                  onClick={advance}
                  className="mt-5 w-full py-4 rounded-2xl font-semibold text-white transition-all hover:scale-[1.01] hover:shadow-xl"
                  style={{ background: subject.color }}
                >
                  {exploreAnswer.trim() ? 'Done! →' : 'Skip for now'}
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ══════════════════════════════════════════════════════════ */}
      {/* BADGE — CELEBRATION                                       */}
      {/* ══════════════════════════════════════════════════════════ */}
      {stepType === 'badge' && (
        <div className="min-h-screen flex flex-col items-center justify-center px-6 pt-20 pb-44 text-center">
          {score >= passScore ? (
            <>
              <Confetti />
              <StarField />

              <div
                className="lesson-badge-drop w-40 h-40 rounded-full flex items-center justify-center mb-7"
                style={{
                  background: `radial-gradient(circle at 38% 32%, ${guideAvatar.accent}, ${guideAvatar.color})`,
                  boxShadow: `0 0 90px ${guideAvatar.accent}55, 0 0 0 4px ${guideAvatar.accent}22`,
                }}
              >
                <div className="text-center px-3">
                  <p className="text-white/90 text-[10px] font-semibold tracking-widest uppercase mb-1">Badge</p>
                  <p className="text-white font-bold text-sm leading-tight">{lesson.badge}</p>
                </div>
              </div>

              <div
                className="w-16 h-16 rounded-full overflow-hidden mb-4 lesson-fade-in"
                style={{ boxShadow: `0 0 0 2px ${guideAvatar.accent}42`, animationDelay: '0.45s' }}
              >
                <img src={guideAvatar.image} alt={guideAvatar.name} className="w-full h-full object-cover" />
              </div>

              <h1 className="text-5xl font-semibold text-white mb-2 lesson-slide-up leading-tight" style={{ fontFamily: 'Georgia, serif', animationDelay: '0.55s' }}>
                You did it,<br />{name}!
              </h1>
              <p className="text-base mb-2 lesson-fade-in" style={{ color: guideAvatar.accent, animationDelay: '0.72s' }}>
                {guideAvatar.name} is so proud of you
              </p>

              <div className="flex items-center gap-2 bg-white/5 rounded-full px-5 py-2 mb-8 lesson-fade-in" style={{ animationDelay: '0.88s' }}>
                <div className="w-2 h-2 rounded-full bg-emerald-400" />
                <span className="text-emerald-300 text-sm font-semibold">{score}/{lesson.quiz.length} correct</span>
              </div>

              {lesson.celebrationText && (
                <div
                  className="bg-[#0F0B2E] border border-white/8 rounded-2xl p-5 mb-6 max-w-sm w-full text-left lesson-slide-up"
                  style={{ animationDelay: '0.95s' }}
                >
                  <p className="text-white/65 text-sm leading-relaxed">
                    {lesson.celebrationText.replace(/\{\{name\}\}/g, name)}
                  </p>
                </div>
              )}

              <div className="bg-[#0F0B2E] border border-white/8 rounded-2xl p-5 mb-8 max-w-sm w-full lesson-slide-up" style={{ animationDelay: '1.05s' }}>
                <p className="text-white/55 text-sm">Badge earned:</p>
                <p className="font-bold text-lg mt-1" style={{ color: guideAvatar.accent }}>{lesson.badge}</p>
              </div>

              <div className="max-w-sm w-full lesson-fade-in" style={{ animationDelay: '1.15s' }}>
                <button
                  onClick={() => navigate(`/child/subject/${subjectId}`)}
                  className="w-full py-4 rounded-2xl font-semibold text-white text-lg mb-3 transition-all hover:scale-[1.02] hover:shadow-2xl"
                  style={{ background: `linear-gradient(135deg, ${subject.color}, ${subject.color}bb)` }}
                >
                  Keep going →
                </button>
                <button
                  onClick={() => navigate('/child/dashboard')}
                  className="text-white/30 hover:text-white/60 text-sm transition-colors"
                >
                  Back to dashboard
                </button>
              </div>
            </>
          ) : (
            <>
              <div
                className="w-28 h-28 rounded-full flex items-center justify-center mb-6 lesson-zoom-in"
                style={{ background: `${subject.color}20`, border: `2px solid ${subject.color}40` }}
              >
                <div className="w-20 h-20 rounded-full overflow-hidden" style={{ boxShadow: `0 0 0 2px ${guideAvatar.accent}30` }}>
                  <img src={guideAvatar.image} alt={guideAvatar.name} className="w-full h-full object-cover" />
                </div>
              </div>

              <h1 className="text-2xl font-semibold text-white mb-3 lesson-slide-up" style={{ fontFamily: 'Georgia, serif', animationDelay: '0.1s' }}>
                Almost there, {name}!
              </h1>
              <p className="text-white/50 mb-2 lesson-fade-in" style={{ animationDelay: '0.22s' }}>
                You got {score}/{lesson.quiz.length} — you need {passScore} to earn the badge.
              </p>
              <p className="text-sm mb-8 lesson-fade-in" style={{ color: guideAvatar.accent, animationDelay: '0.34s' }}>
                {guideAvatar.name} believes in you. Try reviewing and retaking the quiz.
              </p>

              <div className="max-w-sm w-full lesson-fade-in" style={{ animationDelay: '0.5s' }}>
                <button
                  onClick={() => {
                    setQuizAnswers([]);
                    setQuizCurrent(0);
                    setScore(null);
                    setQuizSelected(null);
                    setQuizWrongIdx(null);
                    setStep(2); // back to first learn block
                  }}
                  className="w-full py-4 rounded-2xl font-semibold text-white text-lg mb-3 transition-all hover:scale-[1.02]"
                  style={{ background: `linear-gradient(135deg, ${subject.color}, ${subject.color}bb)` }}
                >
                  Review and try again
                </button>
                <button
                  onClick={() => navigate(`/child/subject/${subjectId}`)}
                  className="text-white/30 hover:text-white/60 text-sm transition-colors"
                >
                  Back to lessons
                </button>
              </div>
            </>
          )}
        </div>
      )}

      {/* Guide companion — floats bottom-right throughout */}
      <NovaChat
        child={child}
        lesson={lesson}
        subject={subject}
        stepType={stepType}
        learnBlock={isLittleStars && isLearnStep ? lsCurrentPair : currentLearnBlock}
        speakOverride={isLittleStars && lsStepText && stepType !== 'learn' ? lsCurrentPair : undefined}
        suppressChain={isLittleStars && !lsIsLastPair}
        lsActivityInstruction={lsActivityInstruction}
        quizCurrent={quizCurrent}
        guide={guideId}
        tfStatement={isLittleStars ? null : (tfData?.statement || null)}
        tfFeedback={tfFeedback}
        onFeedbackEnd={() => setTimeout(advance, 800)}
        onSpeakStart={handleSpeakStart}
        onSpeakEnd={handleSpeakEnd}
      />
    </div>
  );
}
