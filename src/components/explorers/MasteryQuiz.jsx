// MasteryQuiz — Phase 4: 5-question mixed quiz with soft retry, karaoke, lookahead prefetch
// Formats: multiple-choice, true-false, fill-blank
// Tracks per-question details for lesson progress record.
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
const FINISH_PHRASE = "Great job! You finished the quiz!";

// Karaoke: highlight words in a text block as audio plays
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
  const [wrongOptions, setWrongOptions] = useState(new Set()); // option indices tried wrong

  // Per-question tracking
  const questionDetailsRef = useRef([]);
  const firstTryCountRef   = useRef(0);
  const correctPhraseIdx   = useRef(0);
  const retryPhraseIdx     = useRef(0);
  const qStartTimeRef      = useRef(Date.now());
  const qAttemptsRef       = useRef(0);
  const mountedRef         = useRef(true);

  useEffect(() => { return () => { mountedRef.current = false; }; }, []);

  // Prefetch on mount: Q1 audio + all retry / correct / finish phrases
  useEffect(() => {
    const q1 = questions[0]?.question;
    const toFetch = [
      ...(q1 ? [q1] : []),
      ...CORRECT_PHRASES,
      ...RETRY_PHRASES,
      FINISH_PHRASE,
    ];
    console.log('[QUIZ] Mount — prefetching Q1 + retry phrases');
    toFetch.forEach(p => { if (p) onPrewarm?.(p); });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // When question changes: speak it + reset per-question state + prefetch next
  useEffect(() => {
    const q = questions[qIdx];
    if (!q) return;

    console.log(`[QUIZ] Q${qIdx + 1} shown: "${q.question}"`);
    qStartTimeRef.current = Date.now();
    qAttemptsRef.current  = 0;
    setWrongOptions(new Set());
    onSpeak?.(q.question);

    // Lookahead — prefetch next question audio while this one plays
    const nextQ = questions[qIdx + 1];
    if (nextQ) {
      console.log(`[QUIZ] Prefetching Q${qIdx + 2} question audio in background`);
      onPrewarm?.(nextQ.question);
    }
  }, [qIdx]); // eslint-disable-line react-hooks/exhaustive-deps

  const handleAnswer = (isCorrect, optionText, optionIdx) => {
    if (!mountedRef.current) return;
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

          {/* Question text with karaoke */}
          <div style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1rem', lineHeight: 1.55, fontWeight: 500 }}>
            {renderKaraoke(currentQ.question, karaokeWords, karaokeIdx, accent)}
          </div>
        </div>
      </div>

      {/* Question UI */}
      <div style={{ flex: 1, overflowY: 'auto', padding: '16px 14px', WebkitOverflowScrolling: 'touch' }}>
        <QuizQuestion
          key={qIdx}
          question={currentQ}
          accent={accent}
          wrongOptions={wrongOptions}
          onAnswer={handleAnswer}
          onSpeak={onSpeak}
        />
      </div>
    </div>
  );
}
