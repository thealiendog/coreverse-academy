// MasteryQuiz — Phase 4: 5-question mixed quiz with soft retry, karaoke, full audio coverage
// Sage reads EVERYTHING: question → 800ms → each option in sequence.
// Kid can tap mid-read to answer immediately (audio aborts via onSpeak).
// Formats: multiple-choice, true-false, fill-blank
import { useState, useEffect, useRef } from 'react';
import QuizQuestion from './QuizQuestion';

const CORRECT_PHRASES = [
  "Great job!",
  "You got it!",
  "That's exactly right!",
  "Brilliant!",
  "Spot on!",
];
const RETRY_PHRASES = [
  "Hmm, not that one — try again!",
  "Close! Try another.",
  "Keep going, you've got this.",
];
const FINISH_PHRASE     = "Great job! You finished the quiz!";
const TRUE_FALSE_PROMPT = "Is this true, or false?";

// For fill-blank questions: replace ___ with "blank" so Sage reads it naturally
function toSpokenQuestion(q) {
  if (q.format === 'fill-blank') return q.question.replace(/___/g, 'blank');
  return q.question;
}

// All audio clips that need prefetching for a given question
function getAudioClips(q) {
  if (!q) return [];
  const clips = [toSpokenQuestion(q)];
  if (q.format === 'true-false') {
    clips.push(TRUE_FALSE_PROMPT);
  } else {
    clips.push(...(q.options || []));
  }
  return clips;
}

// Karaoke: highlight words in a text block as Sage reads
function renderKaraoke(text, karaokeWords, karaokeIdx, accent) {
  if (!text) return null;
  const sectionWords = text.split(/\s+/).filter(Boolean);
  const isActive = karaokeWords.length > 0 && karaokeWords.join(' ') === sectionWords.join(' ');
  const chunks = text.split(/(\s+)/);
  let wordCount = 0;
  return chunks.map((chunk, i) => {
    if (!chunk || /^\s+$/.test(chunk)) return <span key={i}>{chunk}</span>;
    const idx = wordCount++;
    const hi  = isActive && idx === karaokeIdx;
    return (
      <span key={i} style={{
        color:      hi ? accent : 'inherit',
        textShadow: hi ? `0 0 14px ${accent}99` : 'none',
        fontWeight: hi ? 700 : 'inherit',
        transition: 'color 0.08s ease',
      }}>{chunk}</span>
    );
  });
}

export default function MasteryQuiz({
  screen, guideAvatar, speaking, accent,
  onSpeak, onPrewarm, onComplete, onQuizComplete,
  karaokeWords, karaokeIdx,
}) {
  const questions = screen?.questions || [];

  const [qIdx,        setQIdx]        = useState(0);
  const [wrongOptions, setWrongOptions] = useState(new Set());

  // Per-question tracking
  const questionDetailsRef = useRef([]);
  const firstTryCountRef   = useRef(0);
  const correctPhraseIdx   = useRef(0);
  const retryPhraseIdx     = useRef(0);
  const qStartTimeRef      = useRef(Date.now());
  const qAttemptsRef       = useRef(0);
  const mountedRef         = useRef(true);

  // Reading-options state — for detecting mid-read taps
  const readingTimersRef   = useRef([]);   // active setTimeout IDs during option reading
  const isReadingOptsRef   = useRef(false); // true while options are being spoken

  useEffect(() => { return () => { mountedRef.current = false; }; }, []);

  function clearReadingTimers() {
    readingTimersRef.current.forEach(clearTimeout);
    readingTimersRef.current = [];
    isReadingOptsRef.current = false;
  }

  // ── Prefetch on mount: Q1 full audio set + all phrase banks ────────────────
  useEffect(() => {
    const q1Clips = getAudioClips(questions[0]);
    const toFetch = [
      ...q1Clips,
      ...CORRECT_PHRASES,
      ...RETRY_PHRASES,
      FINISH_PHRASE,
      TRUE_FALSE_PROMPT,
    ];
    console.log('[QUIZ] Mount — prefetching Q1 + retry phrases');
    toFetch.forEach(p => { if (p) onPrewarm?.(p); });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // ── When question changes: speak question → options + prefetch next ─────────
  useEffect(() => {
    const q = questions[qIdx];
    if (!q) return;

    clearReadingTimers();
    console.log(`[QUIZ] Q${qIdx + 1} shown: "${q.question}"`);
    qStartTimeRef.current = Date.now();
    qAttemptsRef.current  = 0;
    setWrongOptions(new Set());

    // Speak question (fill-blank: replace ___ with "blank")
    const spokenQ = toSpokenQuestion(q);
    console.log(`[QUIZ] Q${qIdx + 1} reading question`);
    onSpeak?.(spokenQ, () => {
      if (!mountedRef.current) return;
      // 800ms pause then read options
      const t = setTimeout(() => {
        if (!mountedRef.current) return;
        readOptions(q);
      }, 800);
      readingTimersRef.current.push(t);
    });

    // Lookahead — prefetch next question's full audio set
    const nextQ = questions[qIdx + 1];
    if (nextQ) {
      console.log(`[QUIZ] Prefetching Q${qIdx + 2} question audio in background`);
      getAudioClips(nextQ).forEach(p => { if (p) onPrewarm?.(p); });
    }

    return () => clearReadingTimers();
  }, [qIdx]); // eslint-disable-line react-hooks/exhaustive-deps

  // Reads all options for the current question in sequence
  function readOptions(q) {
    if (!mountedRef.current) return;
    isReadingOptsRef.current = true;

    if (q.format === 'true-false') {
      console.log(`[QUIZ] Q${qIdx + 1} reading options (true-false)`);
      onSpeak?.(TRUE_FALSE_PROMPT, () => { isReadingOptsRef.current = false; });
      return;
    }

    const opts = (q.options || []);
    console.log(`[QUIZ] Q${qIdx + 1} reading options (${opts.length} options)`);

    let i = 0;
    function readNext() {
      if (!mountedRef.current || i >= opts.length) {
        isReadingOptsRef.current = false;
        return;
      }
      const opt = opts[i++];
      onSpeak?.(opt, () => {
        if (!mountedRef.current) { isReadingOptsRef.current = false; return; }
        const t = setTimeout(readNext, 600);
        readingTimersRef.current.push(t);
      });
    }
    readNext();
  }

  // ── Answer handler ──────────────────────────────────────────────────────────
  const handleAnswer = (isCorrect, optionText, optionIdx) => {
    if (!mountedRef.current) return;

    // Cancel any in-progress option reading
    const wasReadingMidway = isReadingOptsRef.current || readingTimersRef.current.length > 0;
    clearReadingTimers();
    if (wasReadingMidway) {
      console.log(`[QUIZ] Q${qIdx + 1} kid tapped option mid-read — aborting audio`);
    }

    qAttemptsRef.current++;
    const q = questions[qIdx];

    console.log(`[QUIZ] Q${qIdx + 1} attempt: "${optionText}". Result: ${isCorrect ? 'correct' : 'wrong'}. Attempts on this Q: ${qAttemptsRef.current}`);

    if (!isCorrect) {
      if (optionIdx !== undefined) {
        setWrongOptions(prev => new Set([...prev, optionIdx]));
      }
      const phrase = RETRY_PHRASES[retryPhraseIdx.current % RETRY_PHRASES.length];
      retryPhraseIdx.current++;
      onSpeak?.(phrase);
      return;
    }

    // ── Correct answer ────────────────────────────────────────────────────────
    const timeSeconds = Math.round((Date.now() - qStartTimeRef.current) / 1000);
    const wasFirstTry = qAttemptsRef.current === 1;
    if (wasFirstTry) firstTryCountRef.current++;

    console.log(`[QUIZ] Q${qIdx + 1} complete. firstTry: ${wasFirstTry}, attempts: ${qAttemptsRef.current}, time: ${timeSeconds}s`);

    questionDetailsRef.current.push({
      qId:          `q${qIdx}`,
      questionText: q.question,
      firstTry:     wasFirstTry,
      attempts:     qAttemptsRef.current,
      timeSeconds,
      finalAnswer:  optionText,
    });

    const correctPhrase = CORRECT_PHRASES[correctPhraseIdx.current % CORRECT_PHRASES.length];
    correctPhraseIdx.current++;
    const isLastQ = qIdx === questions.length - 1;

    if (isLastQ) {
      const firstTryAccuracy = questions.length > 0 ? firstTryCountRef.current / questions.length : 0;
      console.log(`[QUIZ] All questions complete. firstTryAccuracy: ${firstTryAccuracy.toFixed(2)}`);
      onSpeak?.(correctPhrase, () => {
        if (!mountedRef.current) return;
        onSpeak?.(FINISH_PHRASE, () => {
          if (!mountedRef.current) return;
          onQuizComplete?.(questionDetailsRef.current, firstTryAccuracy);
          setTimeout(() => { if (mountedRef.current) onComplete?.(); }, 1500);
        });
      });
    } else {
      onSpeak?.(correctPhrase, () => {
        if (!mountedRef.current) return;
        setTimeout(() => { if (mountedRef.current) setQIdx(prev => prev + 1); }, 2000);
      });
    }
  };

  const currentQ = questions[qIdx];
  if (!currentQ) return null;

  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
      {/* Sage header with question text + karaoke */}
      <div style={{
        display: 'flex', alignItems: 'flex-start', gap: 12,
        padding: '12px 14px',
        borderBottom: '1px solid rgba(255,255,255,0.07)',
        flexShrink: 0,
      }}>
        {/* Avatar with speaking glow */}
        <div style={{ position: 'relative', flexShrink: 0 }}>
          <img
            src={guideAvatar?.image || '/avatars/sage.png'}
            alt=""
            style={{
              width: 46, height: 46, borderRadius: '50%', objectFit: 'cover',
              border: `2.5px solid ${speaking ? accent : 'rgba(255,255,255,0.15)'}`,
              transition: 'border-color 0.2s',
            }}
          />
          {speaking && (
            <div style={{
              position: 'absolute', inset: -4, borderRadius: '50%',
              border: `2px solid ${accent}`, opacity: 0.5,
              animation: 'ex-ring 1.4s ease-in-out infinite',
            }} />
          )}
        </div>

        <div style={{ flex: 1 }}>
          {/* Progress badge */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 6,
            background: `${accent}22`, border: `1px solid ${accent}44`,
            borderRadius: 20, padding: '2px 10px', marginBottom: 8,
            fontSize: '0.70rem', fontWeight: 700, color: accent, letterSpacing: '0.05em',
          }}>
            Question {qIdx + 1} of {questions.length}
          </div>

          {/* Question text with karaoke (show original text including ___ for fill-blank) */}
          <div style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1rem', lineHeight: 1.55, fontWeight: 500 }}>
            {renderKaraoke(currentQ.question, karaokeWords, karaokeIdx, accent)}
          </div>
        </div>
      </div>

      {/* Question UI — passes karaokeWords so options highlight as Sage reads them */}
      <div style={{ flex: 1, overflowY: 'auto', padding: '16px 14px', WebkitOverflowScrolling: 'touch' }}>
        <QuizQuestion
          key={qIdx}
          question={currentQ}
          accent={accent}
          wrongOptions={wrongOptions}
          onAnswer={handleAnswer}
          onSpeak={onSpeak}
          karaokeWords={karaokeWords}
          karaokeIdx={karaokeIdx}
        />
      </div>
    </div>
  );
}
