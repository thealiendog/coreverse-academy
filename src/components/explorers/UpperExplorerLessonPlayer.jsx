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
import SS_UE_L02 from '../../data/social_studies_upper_explorer_l02_screens';
import SS_UE_L03 from '../../data/social_studies_upper_explorer_l03_screens';
import SS_UE_L04 from '../../data/social_studies_upper_explorer_l04_screens';
import SS_UE_L05 from '../../data/social_studies_upper_explorer_l05_screens';
import SS_UE_L06 from '../../data/social_studies_upper_explorer_l06_screens';
import SS_UE_L07 from '../../data/social_studies_upper_explorer_l07_screens';
import SS_UE_L08 from '../../data/social_studies_upper_explorer_l08_screens';
import SS_UE_L09 from '../../data/social_studies_upper_explorer_l09_screens';
import SS_UE_L10 from '../../data/social_studies_upper_explorer_l10_screens';
import SS_UE_L11 from '../../data/social_studies_upper_explorer_l11_screens';
import SS_UE_L12 from '../../data/social_studies_upper_explorer_l12_screens';
import SS_UE_L13 from '../../data/social_studies_upper_explorer_l13_screens';
import SS_UE_L14 from '../../data/social_studies_upper_explorer_l14_screens';
import SS_UE_L15 from '../../data/social_studies_upper_explorer_l15_screens';
import SS_UE_L16 from '../../data/social_studies_upper_explorer_l16_screens';
import SS_UE_L17 from '../../data/social_studies_upper_explorer_l17_screens';
import SS_UE_L18 from '../../data/social_studies_upper_explorer_l18_screens';
import SS_UE_L19 from '../../data/social_studies_upper_explorer_l19_screens';
import SS_UE_L20 from '../../data/social_studies_upper_explorer_l20_screens';

import MATH_UE_L01 from '../../data/math_upper_explorer_l01_screens';
import MATH_UE_L02 from '../../data/math_upper_explorer_l02_screens';
import MATH_UE_L03 from '../../data/math_upper_explorer_l03_screens';
import MATH_UE_L04 from '../../data/math_upper_explorer_l04_screens';
import MATH_UE_L05 from '../../data/math_upper_explorer_l05_screens';
import MATH_UE_L06 from '../../data/math_upper_explorer_l06_screens';
import MATH_UE_L07 from '../../data/math_upper_explorer_l07_screens';
import MATH_UE_L08 from '../../data/math_upper_explorer_l08_screens';
import MATH_UE_L09 from '../../data/math_upper_explorer_l09_screens';
import MATH_UE_L10 from '../../data/math_upper_explorer_l10_screens';
import MATH_UE_L11 from '../../data/math_upper_explorer_l11_screens';
import MATH_UE_L12 from '../../data/math_upper_explorer_l12_screens';
import MATH_UE_L13 from '../../data/math_upper_explorer_l13_screens';
import MATH_UE_L14 from '../../data/math_upper_explorer_l14_screens';
import MATH_UE_L15 from '../../data/math_upper_explorer_l15_screens';
import MATH_UE_L16 from '../../data/math_upper_explorer_l16_screens';
import MATH_UE_L17 from '../../data/math_upper_explorer_l17_screens';
import MATH_UE_L18 from '../../data/math_upper_explorer_l18_screens';
import MATH_UE_L19 from '../../data/math_upper_explorer_l19_screens';
import MATH_UE_L20 from '../../data/math_upper_explorer_l20_screens';

import ELA_UE_L01 from '../../data/ela_upper_explorer_l01_screens';
import ELA_UE_L02 from '../../data/ela_upper_explorer_l02_screens';
import ELA_UE_L03 from '../../data/ela_upper_explorer_l03_screens';
import ELA_UE_L04 from '../../data/ela_upper_explorer_l04_screens';
import ELA_UE_L05 from '../../data/ela_upper_explorer_l05_screens';
import ELA_UE_L06 from '../../data/ela_upper_explorer_l06_screens';
import ELA_UE_L07 from '../../data/ela_upper_explorer_l07_screens';
import ELA_UE_L08 from '../../data/ela_upper_explorer_l08_screens';
import ELA_UE_L09 from '../../data/ela_upper_explorer_l09_screens';
import ELA_UE_L10 from '../../data/ela_upper_explorer_l10_screens';
import ELA_UE_L11 from '../../data/ela_upper_explorer_l11_screens';
import ELA_UE_L12 from '../../data/ela_upper_explorer_l12_screens';
import ELA_UE_L13 from '../../data/ela_upper_explorer_l13_screens';
import ELA_UE_L14 from '../../data/ela_upper_explorer_l14_screens';
import ELA_UE_L15 from '../../data/ela_upper_explorer_l15_screens';
import ELA_UE_L16 from '../../data/ela_upper_explorer_l16_screens';
import ELA_UE_L17 from '../../data/ela_upper_explorer_l17_screens';
import ELA_UE_L18 from '../../data/ela_upper_explorer_l18_screens';
import ELA_UE_L19 from '../../data/ela_upper_explorer_l19_screens';
import ELA_UE_L20 from '../../data/ela_upper_explorer_l20_screens';

import HISTORY_UE_L01 from '../../data/history_upper_explorer_l01_screens';

const UE_DATA = {
  'social_studies': {
    ageBand:   'upper_explorers',
    subjectId: 'social_studies',
    guide:     'Atlas',
    lessons:   [
      ...SS_UE_L01.lessons,
      ...SS_UE_L02.lessons,
      ...SS_UE_L03.lessons,
      ...SS_UE_L04.lessons,
      ...SS_UE_L05.lessons,
      ...SS_UE_L06.lessons,
      ...SS_UE_L07.lessons,
      ...SS_UE_L08.lessons,
      ...SS_UE_L09.lessons,
      ...SS_UE_L10.lessons,
      ...SS_UE_L11.lessons,
      ...SS_UE_L12.lessons,
      ...SS_UE_L13.lessons,
      ...SS_UE_L14.lessons,
      ...SS_UE_L15.lessons,
      ...SS_UE_L16.lessons,
      ...SS_UE_L17.lessons,
      ...SS_UE_L18.lessons,
      ...SS_UE_L19.lessons,
      ...SS_UE_L20.lessons,
    ],
  },
  'math': {
    ageBand:   'upper_explorers',
    subjectId: 'math',
    guide:     'remi',
    lessons:   [
      ...MATH_UE_L01.lessons,
      ...MATH_UE_L02.lessons,
      ...MATH_UE_L03.lessons,
      ...MATH_UE_L04.lessons,
      ...MATH_UE_L05.lessons,
      ...MATH_UE_L06.lessons,
      ...MATH_UE_L07.lessons,
      ...MATH_UE_L08.lessons,
      ...MATH_UE_L09.lessons,
      ...MATH_UE_L10.lessons,
      ...MATH_UE_L11.lessons,
      ...MATH_UE_L12.lessons,
      ...MATH_UE_L13.lessons,
      ...MATH_UE_L14.lessons,
      ...MATH_UE_L15.lessons,
      ...MATH_UE_L16.lessons,
      ...MATH_UE_L17.lessons,
      ...MATH_UE_L18.lessons,
      ...MATH_UE_L19.lessons,
      ...MATH_UE_L20.lessons,
    ],
  },
  'ela': {
    ageBand:   'upper_explorers',
    subjectId: 'ela',
    guide:     'quill',
    lessons:   [
      ...ELA_UE_L01.lessons,
      ...ELA_UE_L02.lessons,
      ...ELA_UE_L03.lessons,
      ...ELA_UE_L04.lessons,
      ...ELA_UE_L05.lessons,
      ...ELA_UE_L06.lessons,
      ...ELA_UE_L07.lessons,
      ...ELA_UE_L08.lessons,
      ...ELA_UE_L09.lessons,
      ...ELA_UE_L10.lessons,
      ...ELA_UE_L11.lessons,
      ...ELA_UE_L12.lessons,
      ...ELA_UE_L13.lessons,
      ...ELA_UE_L14.lessons,
      ...ELA_UE_L15.lessons,
      ...ELA_UE_L16.lessons,
      ...ELA_UE_L17.lessons,
      ...ELA_UE_L18.lessons,
      ...ELA_UE_L19.lessons,
      ...ELA_UE_L20.lessons,
    ],
  },
  'history': {
    ageBand:   'upper_explorers',
    subjectId: 'history',
    guide:     'lyra',
    lessons:   [
      ...HISTORY_UE_L01.lessons,
    ],
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

// ── Shared karaoke block renderer ────────────────────────────────────────────
// Used by InvestigationGame and ReflectionScreen to highlight spoken words.
function KaraokeText({ text, karaokeWords, karaokeIdx, color }) {
  if (!text) return null;
  const sectionWords = text.split(/\s+/).filter(Boolean);
  const isActive = karaokeWords.length > 0 && karaokeWords.join(' ') === sectionWords.join(' ');
  const chunks = text.split(/(\s+)/);
  let wordCount = 0;
  return chunks.map((chunk, i) => {
    if (!chunk || /^\s+$/.test(chunk)) return <span key={i}>{chunk}</span>;
    const idx = wordCount++;
    const hl  = isActive && idx === karaokeIdx;
    return (
      <span key={i} style={{
        color:      hl ? color : 'inherit',
        textShadow: hl ? `0 0 14px ${color}99` : 'none',
        fontWeight: hl ? 700 : 'inherit',
        transition: 'color 0.08s ease, text-shadow 0.08s ease',
      }}>{chunk}</span>
    );
  });
}

// ── Investigation game (inline) ───────────────────────────────────────────────
// Detective mystery flow: intro → 4 cases (one clue at a time) → done.
// Audio: Atlas reads guideText, each clue on reveal, and feedback after answer.
function InvestigationGame({
  screen, guideAvatar, accent, childName, lessonId,
  onSpeak, onPrewarm, onComplete, onInteractiveComplete,
  karaokeWords, karaokeIdx, speaking,
}) {
  const { guideText = '', options = [], cases = [] } = screen;
  const r = t => (t || '').replace(/\{name\}/g, childName || 'friend');

  // ── Restore saved progress ───────────────────────────────────────────────
  const storageKey = `investigation_${lessonId}_progress`;
  const saved = (() => {
    try { return JSON.parse(localStorage.getItem(storageKey) || 'null'); } catch { return null; }
  })();

  const [phase,          setPhase]          = useState('intro');
  const [caseIdx,        setCaseIdx]        = useState(saved?.caseIdx ?? 0);
  const [revealedClues,  setRevealedClues]  = useState(1);
  const [showOptions,    setShowOptions]    = useState(false);
  const [pickedId,       setPickedId]       = useState(null);
  const [feedbackVisible,setFeedbackVisible]= useState(false);
  const [caseResults,    setCaseResults]    = useState(saved?.results ?? {});
  const [btnVisible,     setBtnVisible]     = useState(false);

  const mountedRef = useRef(true);
  useEffect(() => () => { mountedRef.current = false; }, []);

  const currentCase = cases[caseIdx] || null;
  const isLastCase  = caseIdx === cases.length - 1;

  // ── Persist progress ─────────────────────────────────────────────────────
  useEffect(() => {
    try { localStorage.setItem(storageKey, JSON.stringify({ caseIdx, results: caseResults })); } catch { /* ok */ }
  }, [caseIdx, caseResults]); // eslint-disable-line react-hooks/exhaustive-deps

  // ── Intro mount: speak guideText, prewarm first clue ──────────────────────
  useEffect(() => {
    const text = r(guideText);
    setBtnVisible(false);
    if (text) {
      onSpeak?.(text, () => { if (mountedRef.current) setBtnVisible(true); });
    } else {
      setBtnVisible(true);
    }
    if (cases[0]?.clues?.[0]?.text) onPrewarm?.(cases[0].clues[0].text);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // ── Start / resume a case ────────────────────────────────────────────────
  function startCase(idx) {
    setCaseIdx(idx);
    setRevealedClues(1);
    setShowOptions(false);
    setPickedId(null);
    setFeedbackVisible(false);
    setBtnVisible(false);
    setPhase('case');
    const clue = cases[idx]?.clues?.[0];
    if (clue?.text) {
      onSpeak?.(clue.text, () => { if (mountedRef.current) setBtnVisible(true); });
    } else {
      setBtnVisible(true);
    }
    if (cases[idx]?.clues?.[1]?.text) onPrewarm?.(cases[idx].clues[1].text);
  }

  // ── Reveal next clue ──────────────────────────────────────────────────────
  function revealNextClue() {
    const nextClueIdx = revealedClues; // 0-based index of next clue
    const clue = currentCase?.clues?.[nextClueIdx];
    if (!clue) return;
    setRevealedClues(nextClueIdx + 1);
    setBtnVisible(false);
    onSpeak?.(clue.text, () => { if (mountedRef.current) setBtnVisible(true); });
    const after = currentCase?.clues?.[nextClueIdx + 1];
    if (after?.text) onPrewarm?.(after.text);
  }

  // ── Answer a case ─────────────────────────────────────────────────────────
  function handlePick(optionId) {
    if (pickedId) return;
    const correct = optionId === currentCase?.correctAnswer;
    setPickedId(optionId);
    setFeedbackVisible(true);
    setBtnVisible(false);
    setCaseResults(prev => ({ ...prev, [currentCase.id]: { picked: optionId, correct } }));
    const feedback = [currentCase.realWorldExample, currentCase.explanation].filter(Boolean).join(' ');
    if (feedback) {
      onSpeak?.(feedback, () => { if (mountedRef.current) setBtnVisible(true); });
    } else {
      setBtnVisible(true);
    }
  }

  // ── Advance to next case or done screen ───────────────────────────────────
  function advanceCase() {
    const updatedResults = { ...caseResults, [currentCase.id]: { picked: pickedId, correct: pickedId === currentCase?.correctAnswer } };
    if (isLastCase) {
      const correctCount = Object.values(updatedResults).filter(r => r.correct).length;
      onInteractiveComplete?.({
        correctCases:  correctCount,
        totalCases:    cases.length,
        caseResults:   updatedResults,
      });
      try { localStorage.removeItem(storageKey); } catch { /* ok */ }
      setPhase('done');
    } else {
      startCase(caseIdx + 1);
    }
  }

  // ── Derived ───────────────────────────────────────────────────────────────
  const allCluesRevealed = currentCase && revealedClues >= currentCase.clues.length;
  const correctCount = Object.values(caseResults).filter(r => r.correct).length;
  const pickedOption = options.find(o => o.id === pickedId);
  const correctOption = options.find(o => o.id === currentCase?.correctAnswer);
  const feedbackText  = currentCase
    ? [currentCase.realWorldExample, currentCase.explanation].filter(Boolean).join(' ')
    : '';

  // ── Shared styles ─────────────────────────────────────────────────────────
  const cardBase = {
    background:   'rgba(255,255,255,0.05)',
    border:       '1px solid rgba(255,255,255,0.10)',
    borderRadius: 14,
    padding:      '14px 16px',
  };
  const btn = (color = accent, secondary = false) => ({
    width:        '100%',
    padding:      '13px 0',
    borderRadius: 12,
    border:       secondary ? `1.5px solid ${color}55` : 'none',
    background:   secondary ? 'transparent' : color,
    color:        secondary ? color : '#000',
    fontWeight:   700,
    fontSize:     '1rem',
    cursor:       'pointer',
    fontFamily:   'inherit',
    touchAction:  'manipulation',
    transition:   'opacity 0.12s',
  });

  // ── INTRO PHASE ───────────────────────────────────────────────────────────
  if (phase === 'intro') {
    return (
      <div style={{ height: '100%', overflowY: 'auto', padding: '24px 18px', display: 'flex', flexDirection: 'column', gap: 20 }}>
        {/* Atlas guideText */}
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
          <img
            src={guideAvatar?.image || '/avatars/atlas.png'} alt=""
            style={{ width: 52, height: 52, borderRadius: '50%', objectFit: 'cover', border: `2px solid ${accent}`, flexShrink: 0 }}
          />
          <div style={{ ...cardBase, flex: 1, fontSize: '1rem', color: 'rgba(255,255,255,0.88)', lineHeight: 1.65 }}>
            <KaraokeText text={r(guideText)} karaokeWords={karaokeWords} karaokeIdx={karaokeIdx} color={accent} />
          </div>
        </div>

        {/* Case count preview */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: 8 }}>
          {cases.map((_, i) => (
            <div key={i} style={{ width: 10, height: 10, borderRadius: '50%', background: `${accent}44`, border: `2px solid ${accent}66` }} />
          ))}
        </div>

        {btnVisible && (
          <button onClick={() => startCase(caseIdx)} style={btn(accent)}>
            Start Investigation
          </button>
        )}
        {!btnVisible && (
          <div style={{ textAlign: 'center', color: 'rgba(255,255,255,0.25)', fontSize: '0.85rem' }}>
            {speaking ? 'Atlas is briefing you...' : 'Loading...'}
          </div>
        )}
      </div>
    );
  }

  // ── DONE PHASE ────────────────────────────────────────────────────────────
  if (phase === 'done') {
    const total = cases.length;
    const finalCorrect = Object.values(caseResults).filter(r => r.correct).length;
    return (
      <div style={{ height: '100%', overflowY: 'auto', padding: '24px 18px', display: 'flex', flexDirection: 'column', gap: 20, alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ fontSize: '3rem' }}>🔎</div>
        <div style={{ textAlign: 'center' }}>
          <h2 style={{ color: '#fff', fontWeight: 800, fontSize: '1.4rem', margin: '0 0 8px' }}>Investigation complete!</h2>
          <p style={{ color: accent, fontWeight: 700, fontSize: '1.1rem', margin: '0 0 4px' }}>
            {finalCorrect} of {total} cases correctly identified
          </p>
          <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.9rem', lineHeight: 1.6, margin: 0, maxWidth: 340 }}>
            Knowing how to spot these patterns is one of the most important things a citizen can learn. Atlas is impressed regardless.
          </p>
        </div>
        <button onClick={onComplete} style={{ ...btn(accent), maxWidth: 340 }}>
          Continue to Quiz
        </button>
      </div>
    );
  }

  // ── CASE PHASE ───────────────────────────────────────────────────────────
  if (!currentCase) return null;
  const isCorrectPick = pickedId === currentCase.correctAnswer;

  return (
    <div style={{ height: '100%', overflowY: 'auto', padding: '16px 18px 24px', display: 'flex', flexDirection: 'column', gap: 14 }}>

      {/* Progress header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexShrink: 0 }}>
        <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
          Case {caseIdx + 1} of {cases.length}
        </span>
        <div style={{ display: 'flex', gap: 5 }}>
          {cases.map((c, i) => {
            const done = caseResults[c.id];
            const isCur = i === caseIdx;
            return (
              <div key={i} style={{
                width: 8, height: 8, borderRadius: '50%',
                background: done ? (done.correct ? '#10B981' : '#F87171') : isCur ? accent : 'rgba(255,255,255,0.15)',
                transition: 'background 0.3s',
              }} />
            );
          })}
        </div>
      </div>

      {/* Case title */}
      <h2 style={{ color: '#fff', fontWeight: 800, fontSize: '1.25rem', margin: 0 }}>
        {currentCase.caseTitle}
      </h2>

      {/* Clue cards */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {currentCase.clues.slice(0, revealedClues).map((clue, i) => {
          const isNewest = i === revealedClues - 1;
          const clueText = clue.text;
          return (
            <div
              key={i}
              style={{
                ...cardBase,
                borderColor: isNewest ? `${accent}55` : 'rgba(255,255,255,0.10)',
                animation:   isNewest ? 'explorer-enter 0.28s ease both' : 'none',
              }}
            >
              <div style={{ color: accent, fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: 6 }}>
                Clue {i + 1}
              </div>
              <p style={{ color: 'rgba(255,255,255,0.88)', fontSize: '0.97rem', lineHeight: 1.65, margin: 0 }}>
                {isNewest
                  ? <KaraokeText text={clueText} karaokeWords={karaokeWords} karaokeIdx={karaokeIdx} color={accent} />
                  : clueText
                }
              </p>
            </div>
          );
        })}
      </div>

      {/* Options (after "Make Your Call" tapped) */}
      {showOptions && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', textAlign: 'center' }}>
            Your call
          </div>
          {options.map(opt => {
            const isPicked   = pickedId === opt.id;
            const isCorrectOpt = opt.id === currentCase.correctAnswer;
            // After picking: highlight correct green, wrong red, others dim
            const borderColor = feedbackVisible
              ? isCorrectOpt ? '#10B981' : isPicked ? '#F87171' : 'rgba(255,255,255,0.08)'
              : `${opt.color}66`;
            const bgColor = feedbackVisible
              ? isCorrectOpt ? 'rgba(16,185,129,0.12)' : isPicked ? 'rgba(248,113,113,0.10)' : 'rgba(255,255,255,0.02)'
              : `${opt.color}12`;
            const opacity = feedbackVisible && !isCorrectOpt && !isPicked ? 0.4 : 1;
            return (
              <button
                key={opt.id}
                disabled={!!pickedId}
                onClick={() => handlePick(opt.id)}
                style={{
                  width:        '100%',
                  padding:      '14px 16px',
                  borderRadius: 14,
                  border:       `2px solid ${borderColor}`,
                  background:   bgColor,
                  cursor:       pickedId ? 'default' : 'pointer',
                  opacity,
                  textAlign:    'left',
                  transition:   'border-color 0.2s, background 0.2s, opacity 0.2s',
                  fontFamily:   'inherit',
                  touchAction:  'manipulation',
                }}
              >
                <div style={{ color: feedbackVisible ? (isCorrectOpt ? '#10B981' : isPicked ? '#F87171' : opt.color) : opt.color, fontWeight: 800, fontSize: '1rem', marginBottom: 3 }}>
                  {opt.label}
                  {feedbackVisible && isCorrectOpt && <span style={{ marginLeft: 8 }}>✓</span>}
                  {feedbackVisible && isPicked && !isCorrectOpt && <span style={{ marginLeft: 8 }}>✗</span>}
                </div>
                <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.85rem', lineHeight: 1.4 }}>
                  {opt.description}
                </div>
              </button>
            );
          })}
        </div>
      )}

      {/* Feedback panel */}
      {feedbackVisible && (
        <div style={{
          ...cardBase,
          borderColor:  isCorrectPick ? '#10B981' : '#F87171',
          background:   isCorrectPick ? 'rgba(16,185,129,0.08)' : 'rgba(248,113,113,0.06)',
          animation:    'explorer-enter 0.3s ease both',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
            <span style={{ fontSize: '1.4rem' }}>{isCorrectPick ? '✅' : '🔍'}</span>
            <span style={{ fontWeight: 800, fontSize: '1rem', color: isCorrectPick ? '#10B981' : '#F59E0B' }}>
              {isCorrectPick ? 'Got it!' : `Not quite — it's ${correctOption?.label}`}
            </span>
          </div>
          <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.92rem', lineHeight: 1.65, margin: 0 }}>
            <KaraokeText text={feedbackText} karaokeWords={karaokeWords} karaokeIdx={karaokeIdx} color={isCorrectPick ? '#10B981' : '#F59E0B'} />
          </p>
        </div>
      )}

      {/* Action buttons */}
      {!feedbackVisible && !showOptions && btnVisible && allCluesRevealed && (
        <button onClick={() => setShowOptions(true)} style={btn(accent)}>
          Make Your Call
        </button>
      )}
      {!feedbackVisible && !showOptions && btnVisible && !allCluesRevealed && (
        <button onClick={revealNextClue} style={btn(accent, true)}>
          Next clue ({revealedClues} of {currentCase.clues.length} revealed)
        </button>
      )}
      {!feedbackVisible && (speaking || !btnVisible) && (
        <div style={{ textAlign: 'center', color: 'rgba(255,255,255,0.25)', fontSize: '0.85rem', padding: '4px 0' }}>
          {speaking ? 'Atlas is reading...' : ''}
        </div>
      )}
      {feedbackVisible && btnVisible && (
        <button onClick={advanceCase} style={btn(accent)}>
          {isLastCase ? 'Finish Investigation' : `Next case →`}
        </button>
      )}

    </div>
  );
}

// ── Branching Decision game (inline) ────────────────────────────────────────
function BranchingDecisionGame({ screen, guideAvatar, accent, childName, onSpeak, onComplete, onInteractiveComplete, karaokeWords, karaokeIdx, speaking }) {
  const r = t => (t || '').replace(/\{name\}/g, childName);
  const { decisions = [], completionMessage = '', scenarioTitle = '' } = screen;

  const [phase, setPhase]           = useState('intro');   // 'intro' | 'decision' | 'done'
  const [decisionIdx, setDecisionIdx] = useState(0);
  const [pickedId, setPickedId]     = useState(null);
  const [feedbackVisible, setFeedbackVisible] = useState(false);
  const [beginBtnVisible, setBeginBtnVisible] = useState(false);
  const [nextBtnVisible, setNextBtnVisible]   = useState(false);
  const hasSpoken = useRef(false);

  // Intro: speak guideText then show Begin button
  useEffect(() => {
    if (phase !== 'intro' || hasSpoken.current) return;
    hasSpoken.current = true;
    onSpeak(r(screen.guideText), () => setBeginBtnVisible(true));
  }, [phase]);

  function startDecision(idx) {
    setDecisionIdx(idx);
    setPickedId(null);
    setFeedbackVisible(false);
    setNextBtnVisible(false);
    setPhase('decision');
    const d = decisions[idx];
    if (d) onSpeak(r(`${d.situation} ${d.context}`));
  }

  function handlePick(optId) {
    if (pickedId) return;
    setPickedId(optId);
    setFeedbackVisible(true);
    const d = decisions[decisionIdx];
    if (d) onSpeak(r(d.explanation), () => setNextBtnVisible(true));
  }

  function advanceDecision() {
    const next = decisionIdx + 1;
    if (next < decisions.length) {
      startDecision(next);
    } else {
      setPhase('done');
      onSpeak(r(completionMessage));
    }
  }

  const d = decisions[decisionIdx] || {};
  const isLast = decisionIdx === decisions.length - 1;

  const cardBase = {
    background: '#12082a',
    border: '1px solid rgba(255,255,255,0.10)',
    borderRadius: '14px',
    padding: '16px 18px',
    marginBottom: '10px',
  };

  // Shared scroll container — fills the parent's overflow:hidden box and scrolls internally
  const scrollBox = { height: '100%', overflowY: 'auto', WebkitOverflowScrolling: 'touch', background: 'linear-gradient(160deg,#0d0521 0%,#080618 100%)', boxSizing: 'border-box' };
  const innerCol  = { maxWidth: '480px', margin: '0 auto', padding: '24px 16px 56px', display: 'flex', flexDirection: 'column', alignItems: 'center' };

  if (phase === 'intro') return (
    <div style={scrollBox}>
      <div style={innerCol}>
        <div style={{ width: '80px', height: '80px', borderRadius: '50%', overflow: 'hidden', border: `3px solid ${accent}`, boxShadow: `0 0 18px ${accent}55`, marginBottom: '18px', flexShrink: 0 }}>
          <img src={guideAvatar.image} alt="Atlas" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
        <div style={{ background: '#12082a', border: `1px solid ${accent}44`, borderRadius: '16px', padding: '20px', width: '100%', marginBottom: '24px', textAlign: 'center' }}>
          <div style={{ fontSize: '0.75rem', fontWeight: 700, color: accent, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '10px' }}>Historical Decision Game</div>
          <div style={{ fontSize: '1.25rem', fontWeight: 700, color: '#fff', marginBottom: '14px' }}>{scenarioTitle}</div>
          <p style={{ color: '#c4b5e0', fontSize: '0.95rem', lineHeight: 1.6, margin: 0 }}>
            <KaraokeText text={r(screen.guideText)} karaokeWords={karaokeWords} karaokeIdx={karaokeIdx} color={accent} />
          </p>
        </div>
        {beginBtnVisible && (
          <button onClick={() => startDecision(0)} style={{ padding: '14px 36px', background: accent, color: '#fff', fontWeight: 700, fontSize: '1rem', border: 'none', borderRadius: '12px', cursor: 'pointer', boxShadow: `0 0 18px ${accent}66` }}>
            Begin
          </button>
        )}
      </div>
    </div>
  );

  if (phase === 'done') return (
    <div style={scrollBox}>
      <div style={{ ...innerCol, alignItems: 'center', textAlign: 'center' }}>
        <div style={{ fontSize: '3rem', marginBottom: '16px' }}>🏛️</div>
        <div style={{ color: accent, fontWeight: 700, fontSize: '1.15rem', marginBottom: '16px' }}>Convention Complete</div>
        <div style={{ background: '#12082a', border: `1px solid ${accent}44`, borderRadius: '16px', padding: '20px', width: '100%', marginBottom: '28px', color: '#c4b5e0', fontSize: '0.95rem', lineHeight: 1.6 }}>
          <KaraokeText text={r(completionMessage)} karaokeWords={karaokeWords} karaokeIdx={karaokeIdx} color={accent} />
        </div>
        <button onClick={() => { onInteractiveComplete?.(); onComplete(); }} style={{ padding: '14px 36px', background: accent, color: '#fff', fontWeight: 700, fontSize: '1rem', border: 'none', borderRadius: '12px', cursor: 'pointer', boxShadow: `0 0 18px ${accent}66` }}>
          Continue to Quiz
        </button>
      </div>
    </div>
  );

  // Decision phase — scrollable within parent's fixed viewport
  return (
    <div style={scrollBox}>
      <div style={innerCol}>

        {/* Progress dots */}
        <div style={{ display: 'flex', gap: '8px', marginBottom: '20px' }}>
          {decisions.map((_, i) => (
            <div key={i} style={{ width: '10px', height: '10px', borderRadius: '50%', background: i < decisionIdx ? '#34D399' : i === decisionIdx ? accent : '#2a1a4a', border: `2px solid ${i <= decisionIdx ? accent : '#2a1a4a'}`, transition: 'background 0.3s' }} />
          ))}
        </div>

        {/* Situation card */}
        <div style={{ ...cardBase, width: '100%', border: `1px solid ${accent}55`, marginBottom: '16px' }}>
          <div style={{ fontSize: '0.7rem', fontWeight: 700, color: accent, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '8px' }}>Decision {decisionIdx + 1} of {decisions.length}</div>
          <div style={{ fontSize: '1.05rem', fontWeight: 700, color: '#fff', marginBottom: '10px' }}>{d.situation}</div>
          <p style={{ color: '#b8a9d4', fontSize: '0.88rem', lineHeight: 1.55, margin: 0 }}>
            <KaraokeText text={r(`${d.situation} ${d.context}`)} karaokeWords={karaokeWords} karaokeIdx={karaokeIdx} color={accent} />
          </p>
        </div>

        {/* Option cards */}
        <div style={{ width: '100%', marginBottom: '16px' }}>
          {(d.options || []).map(opt => {
            const isPicked   = pickedId === opt.id;
            const isHistoric = opt.id === d.historicalChoice;
            const dimmed     = pickedId && !isPicked;
            let borderColor  = '#2a1a4a';
            if (isPicked) borderColor = accent;
            if (feedbackVisible && isHistoric) borderColor = '#34D399';
            return (
              <div key={opt.id} onClick={() => handlePick(opt.id)}
                style={{ ...cardBase, border: `2px solid ${borderColor}`, cursor: pickedId ? 'default' : 'pointer', opacity: dimmed ? 0.45 : 1, transition: 'all 0.2s', marginBottom: '8px' }}>
                <div style={{ fontWeight: 700, color: '#fff', fontSize: '0.95rem', marginBottom: '6px' }}>{opt.label}</div>
                <div style={{ color: '#8a7aa8', fontSize: '0.82rem', fontStyle: 'italic' }}>{opt.preview}</div>
              </div>
            );
          })}
        </div>

        {/* Feedback panel — slides in after pick, full text visible via natural scroll */}
        {feedbackVisible && (
          <div style={{ width: '100%', background: '#0d1a12', border: '1px solid #34D39955', borderRadius: '14px', padding: '16px 18px', marginBottom: '20px' }}>
            <div style={{ fontWeight: 700, color: pickedId === d.historicalChoice ? '#34D399' : '#A78BFA', fontSize: '0.95rem', marginBottom: '8px' }}>
              {pickedId === d.historicalChoice
                ? '✅ You picked what the Framers did!'
                : `You picked differently from the Framers. Here's what they chose and why:`}
            </div>
            <p style={{ color: '#c4b5e0', fontSize: '0.88rem', lineHeight: 1.6, margin: 0 }}>
              <KaraokeText text={r(d.explanation)} karaokeWords={karaokeWords} karaokeIdx={karaokeIdx} color={accent} />
            </p>
          </div>
        )}

        {/* Next / Finish button — appears after Atlas finishes reading the explanation */}
        {nextBtnVisible && (
          <button onClick={advanceDecision}
            style={{ padding: '14px 36px', background: accent, color: '#fff', fontWeight: 700, fontSize: '1rem', border: 'none', borderRadius: '12px', cursor: 'pointer', boxShadow: `0 0 18px ${accent}66` }}>
            {isLast ? 'Finish' : 'Next Decision'}
          </button>
        )}

      </div>
    </div>
  );
}

// ── Resource Allocation game (inline) ────────────────────────────────────────
function ResourceAllocationGame({ screen, guideAvatar, accent, childName, onSpeak, onComplete, onInteractiveComplete, karaokeWords, karaokeIdx, speaking }) {
  const r = t => (t || '').replace(/\{name\}/g, childName);
  const { categories = [], totalBudget = 1000000, completionMessage = '', scenarioTitle = '' } = screen;

  const [phase, setPhase]       = useState('intro');  // 'intro' | 'budget' | 'results'
  const [btnVisible, setBtnVisible] = useState(false);
  const [allocations, setAllocations] = useState(() =>
    Object.fromEntries(categories.map(c => [c.id, c.default]))
  );
  const [revealIdx, setRevealIdx] = useState(0);
  const hasSpoken = useRef(false);

  useEffect(() => {
    if (phase !== 'intro' || hasSpoken.current) return;
    hasSpoken.current = true;
    onSpeak(r(screen.guideText), () => setBtnVisible(true));
  }, [phase]);

  const totalAllocated = categories.reduce((sum, c) => sum + (allocations[c.id] || 0), 0);
  const remaining = totalBudget - totalAllocated;
  const canLock = remaining === 0;

  function fmt(n) {
    if (n >= 1000000) return `$${(n / 1000000).toFixed(1)}M`;
    if (n >= 1000) return `$${Math.round(n / 1000)}k`;
    return `$${n}`;
  }

  function handleSlider(catId, val) {
    setAllocations(prev => ({ ...prev, [catId]: Number(val) }));
  }

  function getOutcome(cat) {
    const amt = allocations[cat.id] || 0;
    if (cat.outcomes.low?.threshold && amt < cat.outcomes.low.threshold) return { msg: cat.outcomes.low.message, tier: 'low' };
    if (cat.outcomes.high?.threshold && amt > cat.outcomes.high.threshold) return { msg: cat.outcomes.high.message, tier: 'high' };
    return { msg: cat.outcomes.mid.message, tier: 'mid' };
  }

  function lockBudget() {
    if (!canLock) return;
    setPhase('results');
    setRevealIdx(0);
    // Speak first outcome
    const firstOutcome = getOutcome(categories[0]);
    onSpeak(firstOutcome.msg, () => {
      if (categories.length > 1) {
        const second = getOutcome(categories[1]);
        setRevealIdx(1);
        onSpeak(second.msg);
      }
    });
  }

  // On results phase, advance reading as revealIdx progresses
  useEffect(() => {
    if (phase !== 'results' || revealIdx === 0) return;
    if (revealIdx >= categories.length - 1) return;
    // spoken via callback chain in lockBudget for first two; after that auto-advance
  }, [revealIdx, phase]);

  const cardBase = {
    background: '#12082a',
    border: '1px solid rgba(255,255,255,0.10)',
    borderRadius: '14px',
    padding: '16px 18px',
    marginBottom: '10px',
    boxSizing: 'border-box',
  };

  if (phase === 'intro') return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(160deg,#0d0521 0%,#080618 100%)', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '24px 16px 40px', boxSizing: 'border-box' }}>
      <div style={{ width: '80px', height: '80px', borderRadius: '50%', overflow: 'hidden', border: `3px solid ${accent}`, boxShadow: `0 0 18px ${accent}55`, marginBottom: '18px', flexShrink: 0 }}>
        <img src={guideAvatar.image} alt="Atlas" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </div>
      <div style={{ background: '#12082a', border: `1px solid ${accent}44`, borderRadius: '16px', padding: '20px', maxWidth: '480px', width: '100%', marginBottom: '24px', textAlign: 'center' }}>
        <div style={{ fontSize: '0.75rem', fontWeight: 700, color: accent, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '10px' }}>Budget Simulation</div>
        <div style={{ fontSize: '1.25rem', fontWeight: 700, color: '#fff', marginBottom: '14px' }}>{scenarioTitle}</div>
        <p style={{ color: '#c4b5e0', fontSize: '0.95rem', lineHeight: 1.6, margin: 0 }}>
          <KaraokeText text={r(screen.guideText)} karaokeWords={karaokeWords} karaokeIdx={karaokeIdx} color={accent} />
        </p>
      </div>
      {btnVisible && (
        <button onClick={() => setPhase('budget')} style={{ padding: '14px 36px', background: accent, color: '#fff', fontWeight: 700, fontSize: '1rem', border: 'none', borderRadius: '12px', cursor: 'pointer', boxShadow: `0 0 18px ${accent}66` }}>
          Begin Budgeting
        </button>
      )}
    </div>
  );

  if (phase === 'results') {
    const outcomes = categories.map(c => ({ cat: c, ...getOutcome(c) }));
    return (
      <div style={{ minHeight: '100vh', background: 'linear-gradient(160deg,#0d0521 0%,#080618 100%)', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '24px 16px 48px', boxSizing: 'border-box' }}>
        <div style={{ fontSize: '0.75rem', fontWeight: 700, color: accent, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '16px' }}>Your City Results</div>
        <div style={{ maxWidth: '480px', width: '100%', marginBottom: '24px' }}>
          {outcomes.map(({ cat, msg, tier }) => (
            <div key={cat.id} style={{ ...cardBase, border: `2px solid ${cat.color}44` }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                <span style={{ fontSize: '1.4rem' }}>{cat.emoji}</span>
                <span style={{ fontWeight: 700, color: cat.color }}>{cat.label}</span>
                <span style={{ marginLeft: 'auto', fontSize: '0.85rem', color: '#8a7aa8' }}>{fmt(allocations[cat.id])}</span>
              </div>
              <p style={{ color: '#c4b5e0', fontSize: '0.88rem', lineHeight: 1.55, margin: 0 }}>
                <KaraokeText text={msg} karaokeWords={karaokeWords} karaokeIdx={karaokeIdx} color={cat.color} />
              </p>
            </div>
          ))}
        </div>
        <div style={{ maxWidth: '480px', width: '100%', background: '#0d1a12', border: '1px solid #34D39955', borderRadius: '14px', padding: '16px 18px', marginBottom: '24px', color: '#c4b5e0', fontSize: '0.92rem', lineHeight: 1.6 }}>
          <KaraokeText text={r(completionMessage)} karaokeWords={karaokeWords} karaokeIdx={karaokeIdx} color={accent} />
        </div>
        <button onClick={() => { onInteractiveComplete?.(); onComplete(); }} style={{ padding: '14px 36px', background: accent, color: '#fff', fontWeight: 700, fontSize: '1rem', border: 'none', borderRadius: '12px', cursor: 'pointer', boxShadow: `0 0 18px ${accent}66` }}>
          Continue to Quiz
        </button>
      </div>
    );
  }

  // Budget phase
  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(160deg,#0d0521 0%,#080618 100%)', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px 16px 48px', boxSizing: 'border-box' }}>
      {/* Budget header */}
      <div style={{ maxWidth: '480px', width: '100%', marginBottom: '20px', textAlign: 'center' }}>
        <div style={{ fontSize: '1rem', fontWeight: 700, color: canLock ? '#34D399' : remaining < 0 ? '#F87171' : '#FBBF24', marginBottom: '4px' }}>
          {fmt(totalAllocated)} allocated / {fmt(totalBudget)} total
        </div>
        <div style={{ fontSize: '0.82rem', color: remaining === 0 ? '#34D399' : remaining < 0 ? '#F87171' : '#8a7aa8' }}>
          {remaining === 0 ? '✓ Budget balanced — ready to lock in' : remaining > 0 ? `${fmt(remaining)} left to allocate` : `${fmt(Math.abs(remaining))} over budget — reduce a category`}
        </div>
      </div>

      {/* Category sliders */}
      <div style={{ maxWidth: '480px', width: '100%', marginBottom: '24px' }}>
        {categories.map(cat => (
          <div key={cat.id} style={{ ...cardBase, border: `1px solid ${cat.color}33` }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px' }}>
              <span style={{ fontSize: '1.4rem' }}>{cat.emoji}</span>
              <span style={{ fontWeight: 700, color: cat.color, fontSize: '1rem' }}>{cat.label}</span>
              <span style={{ marginLeft: 'auto', fontWeight: 700, color: '#fff', fontSize: '1rem' }}>{fmt(allocations[cat.id])}</span>
            </div>
            <div style={{ color: '#8a7aa8', fontSize: '0.8rem', marginBottom: '10px' }}>{cat.description}</div>
            <input type="range"
              min={cat.min} max={cat.max} step={25000}
              value={allocations[cat.id]}
              onChange={e => handleSlider(cat.id, e.target.value)}
              style={{ width: '100%', accentColor: cat.color, cursor: 'pointer' }}
            />
            <div style={{ display: 'flex', justifyContent: 'space-between', color: '#6a5a88', fontSize: '0.72rem', marginTop: '4px' }}>
              <span>{fmt(cat.min)}</span><span>{fmt(cat.max)}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Lock in button */}
      <button onClick={lockBudget} disabled={!canLock}
        style={{ padding: '14px 36px', background: canLock ? accent : '#2a1a4a', color: canLock ? '#fff' : '#6a5a88', fontWeight: 700, fontSize: '1rem', border: 'none', borderRadius: '12px', cursor: canLock ? 'pointer' : 'not-allowed', boxShadow: canLock ? `0 0 18px ${accent}66` : 'none', transition: 'all 0.2s' }}>
        Lock In Budget
      </button>
    </div>
  );
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

// ── Problem Solving game (inline) ─────────────────────────────────────────────
// Math-first but subject-agnostic. Step-by-step problem solving with:
//   • approach selection (2-3 strategies per problem)
//   • SVG visual models (area-model, number-line, fraction-bar, array, place-value-blocks)
//   • per-step input + 3-attempt limit with kind mistake framing
//   • hint system (productive struggle with safety net)
//   • commonMistakes matching — specific explanations for known wrong answers
// NEVER uses "wrong" / "try again" framing. NEVER shows speed pressure.
function ProblemSolvingGame({
  screen, guideAvatar, accent, childName,
  onSpeak, onComplete, onInteractiveComplete,
  karaokeWords, karaokeIdx, speaking,
}) {
  const r = t => (t || '').replace(/\{name\}/g, childName || 'friend');
  const {
    guideText        = '',
    scenarioTitle    = '',
    problems         = [],
    completionMessage= '',
  } = screen;

  // ── State ────────────────────────────────────────────────────────────────
  const [phase,            setPhase]            = useState('intro');   // 'intro' | 'problem' | 'done'
  const [problemIdx,       setProblemIdx]        = useState(0);
  const [approachId,       setApproachId]        = useState(null);     // null = picker visible
  const [stepIdx,          setStepIdx]           = useState(0);
  const [stepInput,        setStepInput]         = useState('');
  const [attempts,         setAttempts]          = useState(0);
  const [hintVisible,      setHintVisible]       = useState(false);
  const [stepRevealed,     setStepRevealed]      = useState(false);    // auto-shown after 3 wrong
  const [stepCorrect,      setStepCorrect]       = useState(null);     // null | true | false
  const [wrongExplanation, setWrongExplanation]  = useState('');
  const [problemDone,      setProblemDone]       = useState(false);    // showing finalExplanation
  const [btnVisible,       setBtnVisible]        = useState(false);    // intro button gating
  const [problemResults,   setProblemResults]    = useState({});

  const mountedRef   = useRef(true);
  const hasSpokenIntro = useRef(false);
  useEffect(() => () => { mountedRef.current = false; }, []);

  const problem       = problems[problemIdx] || null;
  const isLastProblem = problemIdx === problems.length - 1;
  const approach      = problem?.approaches?.find(a => a.id === approachId) || null;
  const currentStep   = approach?.steps?.[stepIdx] || null;

  // ── Intro: speak guideText then show "Start Solving" ─────────────────────
  useEffect(() => {
    if (phase !== 'intro' || hasSpokenIntro.current) return;
    hasSpokenIntro.current = true;
    const text = r(guideText);
    if (text) {
      onSpeak(text, () => { if (mountedRef.current) setBtnVisible(true); });
    } else {
      setBtnVisible(true);
    }
  }, [phase]); // eslint-disable-line react-hooks/exhaustive-deps

  // ── Enter a problem ───────────────────────────────────────────────────────
  function startProblem(idx) {
    setProblemIdx(idx);
    setApproachId(null);
    setStepIdx(0);
    setStepInput('');
    setAttempts(0);
    setHintVisible(false);
    setStepRevealed(false);
    setStepCorrect(null);
    setWrongExplanation('');
    setProblemDone(false);
    setPhase('problem');
    const prob = problems[idx];
    if (prob?.problemStatement) onSpeak(r(prob.problemStatement));
  }

  // ── Select an approach ────────────────────────────────────────────────────
  function selectApproach(aId) {
    setApproachId(aId);
    setStepIdx(0);
    setStepInput('');
    setAttempts(0);
    setHintVisible(false);
    setStepRevealed(false);
    setStepCorrect(null);
    setWrongExplanation('');
    const app = problem?.approaches?.find(a => a.id === aId);
    const firstStep = app?.steps?.[0];
    if (firstStep?.prompt) onSpeak(firstStep.prompt);
  }

  // ── Check the current step ────────────────────────────────────────────────
  function checkAnswer() {
    if (!currentStep) return;
    const parsed  = parseFloat(stepInput.trim().replace(/,/g, ''));
    const correct = Number.isFinite(parsed) && Math.abs(parsed - currentStep.answer) < 0.001;

    if (correct) {
      setStepCorrect(true);
      setWrongExplanation('');
      onSpeak(r('Exactly — nice work.'));
      return;
    }

    const newAttempts = attempts + 1;
    setAttempts(newAttempts);
    setStepCorrect(false);

    if (newAttempts >= 3) {
      // Auto-reveal after 3 wrong attempts — never leave a child stuck
      setStepRevealed(true);
      onSpeak(r(`The answer is ${currentStep.answer}. ${currentStep.hint || ''}`));
      return;
    }

    // Check against known mistake patterns first
    const match = approach?.commonMistakes?.find(
      m => Number.isFinite(parseFloat(String(m.wrongAnswer))) &&
           Math.abs(parseFloat(String(m.wrongAnswer)) - parsed) < 0.001
    );
    if (match) {
      setWrongExplanation(match.explanation);
      onSpeak(r(match.explanation));
    } else {
      const generic = newAttempts === 1
        ? "That answer is giving us information — let's think about what happened. The hint points right at the tricky part."
        : "Let's look at the hint together — it points right at what to check.";
      setWrongExplanation(generic);
      onSpeak(r(generic));
    }
  }

  // ── Advance to the next step ──────────────────────────────────────────────
  function advanceStep() {
    const totalSteps = approach?.steps?.length || 0;
    if (stepIdx + 1 < totalSteps) {
      const next = stepIdx + 1;
      setStepIdx(next);
      setStepInput('');
      setAttempts(0);
      setHintVisible(false);
      setStepRevealed(false);
      setStepCorrect(null);
      setWrongExplanation('');
      if (approach.steps[next]?.prompt) onSpeak(approach.steps[next].prompt);
    } else {
      // All steps done — show finalExplanation
      setProblemDone(true);
      setProblemResults(prev => ({ ...prev, [problem.id]: { approachId, completed: true } }));
      if (problem.finalExplanation) onSpeak(r(problem.finalExplanation));
    }
  }

  // ── Advance to the next problem or finish ─────────────────────────────────
  function advanceProblem() {
    if (isLastProblem) {
      onInteractiveComplete?.({
        problemsCompleted: Object.keys(problemResults).length + 1,
        totalProblems:     problems.length,
      });
      setPhase('done');
      if (completionMessage) onSpeak(r(completionMessage));
    } else {
      startProblem(problemIdx + 1);
    }
  }

  // ── Visual model renderers ────────────────────────────────────────────────
  function renderVisual(visual) {
    if (!visual || visual.type === 'none') return null;
    const { type, data = {} } = visual;
    const wrap = {
      background:    'rgba(255,255,255,0.04)',
      border:        `1px solid ${accent}44`,
      borderRadius:  12,
      padding:       '14px 16px',
      margin:        '10px 0',
      display:       'flex',
      flexDirection: 'column',
      alignItems:    'center',
      gap:           8,
    };
    const vizLabel = txt => (
      <div style={{ fontSize: '0.68rem', color: accent, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}>{txt}</div>
    );

    if (type === 'area-model') {
      const { parts = [], totalLabel = '' } = data;
      const totalWidth = parts.reduce((s, p) => s + (p.width || 0), 0) || 1;
      const SVGW = 290;
      const palette = ['#A78BFA', '#34D399', '#60A5FA', '#F59E0B'];
      let xCursor = 0;
      return (
        <div style={wrap}>
          {vizLabel('Area Model')}
          <svg width="100%" viewBox={`0 0 ${SVGW} 90`} style={{ maxWidth: 340 }}>
            {parts.map((p, i) => {
              const segW = Math.round((p.width / totalWidth) * SVGW);
              const x    = xCursor;
              xCursor   += segW;
              const col  = palette[i % palette.length];
              return (
                <g key={i}>
                  <rect x={x} y={2} width={segW - 2} height={70} fill={`${col}33`} stroke={`${col}88`} strokeWidth={1.5} rx={3} />
                  <text x={x + (segW - 2) / 2} y={26} textAnchor="middle" fill="#fff"         fontSize={12} fontWeight={700}>{p.topLabel}</text>
                  <text x={x + (segW - 2) / 2} y={46} textAnchor="middle" fill="rgba(255,255,255,0.5)" fontSize={10}>{p.sideLabel}</text>
                  <text x={x + (segW - 2) / 2} y={62} textAnchor="middle" fill={col}          fontSize={12} fontWeight={700}>{p.product}</text>
                </g>
              );
            })}
            {totalLabel && (
              <text x={SVGW / 2} y={86} textAnchor="middle" fill={accent} fontSize={11} fontWeight={700}>{totalLabel}</text>
            )}
          </svg>
        </div>
      );
    }

    if (type === 'number-line') {
      const { min = 0, max = 10, marked = [], labels = [] } = data;
      const range = max - min || 1;
      const toX   = v => Math.round(((v - min) / range) * 260) + 20;
      return (
        <div style={wrap}>
          {vizLabel('Number Line')}
          <svg width="100%" viewBox="0 0 300 60" style={{ maxWidth: 340 }}>
            <line x1={20} y1={32} x2={280} y2={32} stroke="rgba(255,255,255,0.3)" strokeWidth={2} />
            {[min, max].map((v, i) => (
              <g key={i}>
                <line x1={toX(v)} y1={24} x2={toX(v)} y2={40} stroke="rgba(255,255,255,0.4)" strokeWidth={1.5} />
                <text x={toX(v)} y={54} textAnchor="middle" fill="rgba(255,255,255,0.5)" fontSize={10}>{v}</text>
              </g>
            ))}
            {marked.map((v, i) => (
              <g key={i}>
                <circle cx={toX(v)} cy={32} r={5} fill={accent} />
                <text   x={toX(v)} y={20}  textAnchor="middle" fill={accent} fontSize={10} fontWeight={700}>{v}</text>
              </g>
            ))}
            {labels.map((lbl, i) => (
              <text key={i} x={toX(lbl.value)} y={54} textAnchor="middle" fill="rgba(255,255,255,0.55)" fontSize={9}>{lbl.label}</text>
            ))}
          </svg>
        </div>
      );
    }

    if (type === 'fraction-bar') {
      const { numerator = 1, denominator = 4, compareNumerator, compareDenominator, caption = '', label = '' } = data;
      const hasCompare = compareNumerator !== undefined && compareDenominator !== undefined;

      if (hasCompare) {
        // Comparison mode — two bars stacked for side-by-side fraction comparison
        const segW1 = 270 / (denominator || 1);
        const segW2 = 270 / (compareDenominator || 1);
        const compColor = '#60A5FA';
        return (
          <div style={wrap}>
            {vizLabel('Fraction Comparison')}
            <svg width="100%" viewBox="0 0 290 108" style={{ maxWidth: 320 }}>
              {/* Top bar: main fraction (accent color) */}
              {Array.from({ length: denominator }).map((_, i) => (
                <rect key={`a-${i}`}
                  x={10 + i * segW1} y={5} width={segW1 - 2} height={28}
                  fill={i < numerator ? `${accent}55` : 'rgba(255,255,255,0.06)'}
                  stroke={`${accent}77`} strokeWidth={1} rx={2}
                />
              ))}
              <text x={145} y={44} textAnchor="middle" fill={accent} fontSize={11} fontWeight="600">
                {numerator}/{denominator}
              </text>
              {/* Bottom bar: compare fraction (blue) */}
              {Array.from({ length: compareDenominator }).map((_, i) => (
                <rect key={`b-${i}`}
                  x={10 + i * segW2} y={54} width={segW2 - 2} height={28}
                  fill={i < compareNumerator ? `${compColor}55` : 'rgba(255,255,255,0.06)'}
                  stroke={`${compColor}77`} strokeWidth={1} rx={2}
                />
              ))}
              <text x={145} y={94} textAnchor="middle" fill={compColor} fontSize={11} fontWeight="600">
                {compareNumerator}/{compareDenominator}
              </text>
            </svg>
            {(caption || label) && (
              <div style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.78rem', textAlign: 'center', marginTop: 2 }}>
                {caption || label}
              </div>
            )}
          </div>
        );
      }

      // Single fraction mode
      const segW = 270 / (denominator || 1);
      return (
        <div style={wrap}>
          {vizLabel('Fraction Bar')}
          <svg width="100%" viewBox="0 0 290 50" style={{ maxWidth: 320 }}>
            {Array.from({ length: denominator }).map((_, i) => (
              <rect key={i}
                x={10 + i * segW} y={8} width={segW - 2} height={28}
                fill={i < numerator ? `${accent}55` : 'rgba(255,255,255,0.06)'}
                stroke={`${accent}77`} strokeWidth={1} rx={2}
              />
            ))}
            <text x={145} y={46} textAnchor="middle" fill="rgba(255,255,255,0.5)" fontSize={11}>
              {label || `${numerator}/${denominator}`}
            </text>
          </svg>
          {caption && (
            <div style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.78rem', textAlign: 'center', marginTop: 2 }}>
              {caption}
            </div>
          )}
        </div>
      );
    }

    if (type === 'array') {
      const { rows = 3, cols = 4, highlightRows = 0 } = data;
      const D = 11, G = 5;
      const W = cols * (D + G) + 10;
      const H = rows * (D + G) + 10;
      return (
        <div style={wrap}>
          {vizLabel(`Array — ${rows} × ${cols}`)}
          <svg width="100%" viewBox={`0 0 ${W} ${H}`} style={{ maxWidth: Math.min(W * 2, 280) }}>
            {Array.from({ length: rows }).map((_, ri) =>
              Array.from({ length: cols }).map((_, ci) => (
                <circle key={`${ri}-${ci}`}
                  cx={5 + ci * (D + G) + D / 2}
                  cy={5 + ri * (D + G) + D / 2}
                  r={D / 2}
                  fill={ri < highlightRows ? accent : `${accent}44`}
                />
              ))
            )}
          </svg>
          <div style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.78rem' }}>
            {rows} rows × {cols} columns = {rows * cols}
          </div>
        </div>
      );
    }

    if (type === 'place-value-blocks') {
      const { thousands = 0, hundreds = 0, tens = 0, ones = 0 } = data;
      const blocks = [
        { label: 'Thousands', count: thousands, color: '#F59E0B' },
        { label: 'Hundreds',  count: hundreds,  color: '#A78BFA' },
        { label: 'Tens',      count: tens,       color: '#34D399' },
        { label: 'Ones',      count: ones,       color: '#60A5FA' },
      ].filter(b => b.count > 0);
      return (
        <div style={wrap}>
          {vizLabel('Place Value')}
          <div style={{ display: 'flex', gap: 18, flexWrap: 'wrap', justifyContent: 'center' }}>
            {blocks.map(b => (
              <div key={b.label} style={{ textAlign: 'center' }}>
                <div style={{ color: b.color, fontWeight: 800, fontSize: '1.5rem' }}>{b.count}</div>
                <div style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.7rem', marginTop: 2 }}>{b.label}</div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 2, justifyContent: 'center', maxWidth: 52, marginTop: 4 }}>
                  {Array.from({ length: Math.min(b.count, 9) }).map((_, i) => (
                    <div key={i} style={{ width: 8, height: 8, borderRadius: 2, background: b.color, opacity: 0.8 }} />
                  ))}
                  {b.count > 9 && <span style={{ fontSize: '0.65rem', color: b.color }}>×{b.count}</span>}
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    }

    if (type === 'coordinate-grid') {
      const { xMax = 10, yMax = 10, points = [], lines = [], caption = '' } = data;
      const PAD_L = 30, PAD_B = 22, PAD_T = 8, PAD_R = 8;
      const VW = 260, VH = 260;
      const plotX0 = PAD_L, plotY0 = PAD_T;
      const plotX1 = VW - PAD_R, plotY1 = VH - PAD_B;
      const plotW  = plotX1 - plotX0;
      const plotH  = plotY1 - plotY0;
      const toSX   = x => plotX0 + (x / (xMax || 1)) * plotW;
      const toSY   = y => plotY1 - (y / (yMax || 1)) * plotH;
      const xStep  = xMax > 8 ? 2 : 1;
      const yStep  = yMax > 8 ? 2 : 1;
      return (
        <div style={wrap}>
          {vizLabel('Coordinate Grid')}
          <svg width="100%" viewBox={`0 0 ${VW} ${VH}`} style={{ maxWidth: 300 }}>
            {/* Vertical gridlines */}
            {Array.from({ length: xMax + 1 }, (_, i) => (
              <line key={`vg${i}`}
                x1={toSX(i)} y1={plotY0} x2={toSX(i)} y2={plotY1}
                stroke={i === 0 ? 'rgba(255,255,255,0.35)' : 'rgba(255,255,255,0.10)'}
                strokeWidth={i === 0 ? 1.5 : 0.8}
              />
            ))}
            {/* Horizontal gridlines */}
            {Array.from({ length: yMax + 1 }, (_, j) => (
              <line key={`hg${j}`}
                x1={plotX0} y1={toSY(j)} x2={plotX1} y2={toSY(j)}
                stroke={j === 0 ? 'rgba(255,255,255,0.35)' : 'rgba(255,255,255,0.10)'}
                strokeWidth={j === 0 ? 1.5 : 0.8}
              />
            ))}
            {/* X-axis labels */}
            {Array.from({ length: xMax + 1 }, (_, i) => i % xStep === 0 && (
              <text key={`xl${i}`}
                x={toSX(i)} y={plotY1 + 14}
                textAnchor="middle" fill="rgba(255,255,255,0.45)" fontSize={8}
              >{i}</text>
            ))}
            {/* Y-axis labels */}
            {Array.from({ length: yMax + 1 }, (_, j) => j % yStep === 0 && (
              <text key={`yl${j}`}
                x={plotX0 - 5} y={toSY(j) + 3}
                textAnchor="end" fill="rgba(255,255,255,0.45)" fontSize={8}
              >{j}</text>
            ))}
            {/* Axis name labels */}
            <text x={(plotX0 + plotX1) / 2} y={VH - 1} textAnchor="middle" fill="rgba(255,255,255,0.30)" fontSize={7}>x</text>
            <text x={4} y={(plotY0 + plotY1) / 2 + 3} textAnchor="middle" fill="rgba(255,255,255,0.30)" fontSize={7}>y</text>
            {/* Line segments between points */}
            {lines.map((seg, i) => {
              const a = points[seg.from], b = points[seg.to];
              if (!a || !b) return null;
              return (
                <line key={`ln${i}`}
                  x1={toSX(a.x)} y1={toSY(a.y)} x2={toSX(b.x)} y2={toSY(b.y)}
                  stroke={`${accent}99`} strokeWidth={1.5}
                />
              );
            })}
            {/* Points */}
            {points.map((pt, i) => (
              <g key={`pt${i}`}>
                <circle cx={toSX(pt.x)} cy={toSY(pt.y)} r={5} fill={accent} />
                {pt.label && (
                  <text x={toSX(pt.x) + 8} y={toSY(pt.y) - 6}
                    fill={accent} fontSize={10} fontWeight={700}
                  >{pt.label}</text>
                )}
              </g>
            ))}
          </svg>
          {caption && (
            <div style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.78rem', textAlign: 'center', marginTop: 2 }}>
              {caption}
            </div>
          )}
        </div>
      );
    }

    return null;
  }

  // ── Shared styles ─────────────────────────────────────────────────────────
  const scrollBox  = { height: '100%', overflowY: 'auto', WebkitOverflowScrolling: 'touch', background: 'linear-gradient(160deg,#0d0521 0%,#080618 100%)', boxSizing: 'border-box' };
  const innerCol   = { maxWidth: '480px', margin: '0 auto', padding: '20px 16px 64px', display: 'flex', flexDirection: 'column' };
  const cardBase   = { background: '#12082a', border: '1px solid rgba(255,255,255,0.10)', borderRadius: '14px', padding: '16px 18px', marginBottom: '12px', boxSizing: 'border-box' };
  const primaryBtn = (disabled = false) => ({
    padding: '14px 20px', background: disabled ? '#2a1a4a' : accent,
    color: disabled ? '#6a5a88' : '#fff', fontWeight: 700, fontSize: '1rem',
    border: 'none', borderRadius: '12px', cursor: disabled ? 'not-allowed' : 'pointer',
    boxShadow: disabled ? 'none' : `0 0 18px ${accent}66`,
    width: '100%', fontFamily: 'inherit', touchAction: 'manipulation',
    transition: 'all 0.15s',
  });
  const ghostBtn = () => ({
    padding: '11px 18px', background: 'transparent',
    color: accent, fontWeight: 600, fontSize: '0.88rem',
    border: `1.5px solid ${accent}55`, borderRadius: '10px',
    cursor: 'pointer', width: '100%', fontFamily: 'inherit',
    touchAction: 'manipulation',
  });

  // ── INTRO PHASE ───────────────────────────────────────────────────────────
  if (phase === 'intro') return (
    <div style={scrollBox}>
      <div style={{ ...innerCol, alignItems: 'center' }}>
        <div style={{ width: 80, height: 80, borderRadius: '50%', overflow: 'hidden', border: `3px solid ${accent}`, boxShadow: `0 0 18px ${accent}55`, marginBottom: 18, flexShrink: 0 }}>
          <img src={guideAvatar?.image} alt="Guide" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
        <div style={{ ...cardBase, width: '100%', border: `1px solid ${accent}44`, textAlign: 'center', marginBottom: 20 }}>
          <div style={{ fontSize: '0.72rem', fontWeight: 700, color: accent, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 10 }}>Problem Solving</div>
          <div style={{ fontSize: '1.2rem', fontWeight: 700, color: '#fff', marginBottom: 14 }}>{scenarioTitle}</div>
          <p style={{ color: '#c4b5e0', fontSize: '0.95rem', lineHeight: 1.6, margin: 0 }}>
            <KaraokeText text={r(guideText)} karaokeWords={karaokeWords} karaokeIdx={karaokeIdx} color={accent} />
          </p>
        </div>
        <div style={{ display: 'flex', gap: 8, marginBottom: 24 }}>
          {problems.map((_, i) => (
            <div key={i} style={{ width: 10, height: 10, borderRadius: '50%', background: `${accent}33`, border: `2px solid ${accent}66` }} />
          ))}
        </div>
        {btnVisible
          ? <button onClick={() => startProblem(0)} style={primaryBtn()}>Start Solving</button>
          : <div style={{ color: 'rgba(255,255,255,0.25)', fontSize: '0.85rem' }}>{speaking ? 'Remi is talking...' : 'Loading...'}</div>
        }
      </div>
    </div>
  );

  // ── DONE PHASE ────────────────────────────────────────────────────────────
  if (phase === 'done') return (
    <div style={scrollBox}>
      <div style={{ ...innerCol, alignItems: 'center', textAlign: 'center' }}>
        <div style={{ fontSize: '3rem', marginBottom: 16 }}>🧮</div>
        <div style={{ color: accent, fontWeight: 700, fontSize: '1.15rem', marginBottom: 16 }}>Problems solved!</div>
        <div style={{ ...cardBase, width: '100%', border: `1px solid ${accent}44`, marginBottom: 28, color: '#c4b5e0', fontSize: '0.95rem', lineHeight: 1.6 }}>
          <KaraokeText text={r(completionMessage)} karaokeWords={karaokeWords} karaokeIdx={karaokeIdx} color={accent} />
        </div>
        <button onClick={() => { onInteractiveComplete?.({ problemsCompleted: problems.length, totalProblems: problems.length }); onComplete(); }} style={primaryBtn()}>
          Continue to Quiz
        </button>
      </div>
    </div>
  );

  // ── PROBLEM PHASE ─────────────────────────────────────────────────────────
  if (!problem) return null;

  return (
    <div style={scrollBox}>
      <div style={innerCol}>

        {/* Progress header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
          <span style={{ color: 'rgba(255,255,255,0.38)', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
            {scenarioTitle}
          </span>
          <div style={{ display: 'flex', gap: 5 }}>
            {problems.map((_, i) => (
              <div key={i} style={{
                width: 8, height: 8, borderRadius: '50%',
                background: i < problemIdx ? '#10B981' : i === problemIdx ? accent : 'rgba(255,255,255,0.12)',
                transition: 'background 0.3s',
              }} />
            ))}
          </div>
        </div>

        {/* Problem counter + statement */}
        <div style={{ fontSize: '0.68rem', fontWeight: 700, color: accent, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 8 }}>
          Problem {problemIdx + 1} of {problems.length}
        </div>
        <div style={{ ...cardBase, border: `1px solid ${accent}44` }}>
          <p style={{ color: '#fff', fontSize: '1rem', lineHeight: 1.7, margin: 0, fontWeight: 500 }}>
            {problem.problemStatement}
          </p>
        </div>

        {/* Visual model */}
        {renderVisual(problem.visual)}

        {/* ── APPROACH PICKER ── */}
        {approachId === null && !problemDone && (
          <>
            <div style={{ fontSize: '0.72rem', fontWeight: 700, color: 'rgba(255,255,255,0.38)', letterSpacing: '0.06em', textTransform: 'uppercase', margin: '14px 0 10px' }}>
              Pick your approach
            </div>
            {(problem.approaches || []).map(app => (
              <button
                key={app.id}
                onClick={() => selectApproach(app.id)}
                style={{
                  ...cardBase,
                  cursor: 'pointer', textAlign: 'left', width: '100%',
                  border: `1.5px solid ${accent}55`, fontFamily: 'inherit',
                  touchAction: 'manipulation', marginBottom: 10,
                }}
              >
                <div style={{ color: accent, fontWeight: 700, fontSize: '0.97rem', marginBottom: 4 }}>{app.label}</div>
                <div style={{ color: 'rgba(255,255,255,0.52)', fontSize: '0.85rem', lineHeight: 1.45 }}>{app.description}</div>
              </button>
            ))}
          </>
        )}

        {/* ── STEPS ── */}
        {approachId !== null && !problemDone && approach && (
          <>
            {/* Approach label + step progress bar */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, margin: '14px 0 8px' }}>
              <div style={{ width: 6, height: 6, borderRadius: '50%', background: accent, flexShrink: 0 }} />
              <span style={{ color: accent, fontWeight: 700, fontSize: '0.83rem' }}>{approach.label}</span>
            </div>
            <div style={{ display: 'flex', gap: 4, marginBottom: 14 }}>
              {approach.steps.map((_, i) => (
                <div key={i} style={{
                  flex: 1, height: 3, borderRadius: 2,
                  background: i < stepIdx ? '#10B981' : i === stepIdx ? accent : 'rgba(255,255,255,0.12)',
                  transition: 'background 0.3s',
                }} />
              ))}
            </div>

            {/* Current step card */}
            {currentStep && (
              <div style={{ ...cardBase, border: `1px solid ${accent}33` }}>

                {/* Prompt */}
                <div style={{ color: '#fff', fontWeight: 600, fontSize: '1rem', lineHeight: 1.6, marginBottom: 14 }}>
                  {currentStep.prompt}
                </div>

                {/* Input row — hidden once answered or auto-revealed */}
                {stepCorrect !== true && !stepRevealed && (
                  <div style={{ display: 'flex', gap: 10, marginBottom: 10 }}>
                    <input
                      type="number"
                      inputMode="decimal"
                      value={stepInput}
                      onChange={e => { setStepInput(e.target.value); setStepCorrect(null); setWrongExplanation(''); }}
                      onKeyDown={e => { if (e.key === 'Enter' && stepInput.trim()) checkAnswer(); }}
                      placeholder="Your answer…"
                      style={{
                        flex: 1, padding: '11px 14px', borderRadius: 10,
                        border: `1.5px solid ${stepCorrect === false ? '#F87171' : `${accent}55`}`,
                        background: 'rgba(255,255,255,0.06)', color: '#fff',
                        fontSize: '1.05rem', fontFamily: 'inherit', outline: 'none',
                        WebkitUserSelect: 'text', userSelect: 'text',
                      }}
                    />
                    <button
                      onClick={checkAnswer}
                      disabled={!stepInput.trim()}
                      style={{ ...primaryBtn(!stepInput.trim()), width: 'auto', padding: '11px 22px' }}
                    >
                      Check
                    </button>
                  </div>
                )}

                {/* Attempt counter (2nd attempt onward) */}
                {stepCorrect === false && !stepRevealed && attempts > 0 && (
                  <div style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.75rem', marginBottom: 8 }}>
                    Attempt {attempts} of 3
                  </div>
                )}

                {/* Hint toggle */}
                {stepCorrect !== true && !stepRevealed && !hintVisible && (
                  <button onClick={() => setHintVisible(true)} style={ghostBtn()}>Need a hint?</button>
                )}
                {hintVisible && stepCorrect !== true && !stepRevealed && (
                  <div style={{ background: `${accent}14`, border: `1px solid ${accent}44`, borderRadius: 10, padding: '10px 14px', marginTop: 8 }}>
                    <div style={{ color: accent, fontWeight: 700, fontSize: '0.72rem', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 5 }}>Hint</div>
                    <div style={{ color: 'rgba(255,255,255,0.82)', fontSize: '0.9rem', lineHeight: 1.55 }}>{currentStep.hint}</div>
                  </div>
                )}

                {/* Wrong + known-mistake explanation */}
                {stepCorrect === false && wrongExplanation && !stepRevealed && (
                  <div style={{ background: 'rgba(251,191,36,0.07)', border: '1px solid rgba(251,191,36,0.3)', borderRadius: 10, padding: '10px 14px', marginTop: 10 }}>
                    <div style={{ color: '#FBBF24', fontWeight: 700, fontSize: '0.78rem', marginBottom: 4 }}>
                      Many students try this — here's what's happening
                    </div>
                    <div style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.9rem', lineHeight: 1.55 }}>{wrongExplanation}</div>
                  </div>
                )}

                {/* Auto-revealed answer (3 wrong attempts) */}
                {stepRevealed && (
                  <div style={{ background: 'rgba(16,185,129,0.07)', border: '1px solid rgba(16,185,129,0.3)', borderRadius: 10, padding: '10px 14px' }}>
                    <div style={{ color: '#10B981', fontWeight: 700, fontSize: '0.85rem', marginBottom: 4 }}>
                      Answer: {currentStep.answer}
                    </div>
                    <div style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.88rem', lineHeight: 1.55 }}>{currentStep.hint}</div>
                  </div>
                )}

                {/* Correct feedback */}
                {stepCorrect === true && (
                  <div style={{ background: 'rgba(16,185,129,0.09)', border: '1px solid rgba(16,185,129,0.35)', borderRadius: 10, padding: '10px 14px' }}>
                    <div style={{ color: '#10B981', fontWeight: 700, fontSize: '0.9rem' }}>
                      ✓ {currentStep.answer} — exactly right.
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Advance step / complete problem */}
            {(stepCorrect === true || stepRevealed) && (
              <button onClick={advanceStep} style={{ ...primaryBtn(), marginTop: 4 }}>
                {stepIdx + 1 < (approach.steps?.length || 0) ? 'Next Step →' : 'See How It All Connects'}
              </button>
            )}
          </>
        )}

        {/* ── PROBLEM DONE — finalExplanation + advance ── */}
        {problemDone && (
          <>
            <div style={{ ...cardBase, background: 'rgba(16,185,129,0.05)', border: '1px solid rgba(16,185,129,0.28)', marginTop: 16 }}>
              <div style={{ color: '#10B981', fontWeight: 700, fontSize: '0.88rem', marginBottom: 8 }}>
                Answer: {problem.finalAnswer}
              </div>
              <p style={{ color: '#c4b5e0', fontSize: '0.92rem', lineHeight: 1.65, margin: 0 }}>
                <KaraokeText text={r(problem.finalExplanation || '')} karaokeWords={karaokeWords} karaokeIdx={karaokeIdx} color={accent} />
              </p>
            </div>
            <button onClick={advanceProblem} style={{ ...primaryBtn(), marginTop: 4 }}>
              {isLastProblem ? 'Finish' : 'Next Problem →'}
            </button>
          </>
        )}

      </div>
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
      case 'interactive': {
        const gameProps = { screen, guideAvatar, accent, childName, lessonId, onSpeak: speak, onPrewarm: prewarmAudio, onComplete: goNext, onInteractiveComplete, karaokeWords, karaokeIdx, speaking };
        if (screen.format === 'investigation')       return <InvestigationGame      {...gameProps} />;
        if (screen.format === 'branching-decision')  return <BranchingDecisionGame  {...gameProps} />;
        if (screen.format === 'resource-allocation') return <ResourceAllocationGame {...gameProps} />;
        if (screen.format === 'problem-solving')     return <ProblemSolvingGame     {...gameProps} />;
        return <InteractiveExplore {...commonProps} />;
      }
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
