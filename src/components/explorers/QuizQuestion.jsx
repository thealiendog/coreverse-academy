// QuizQuestion — renders one question; three formats: multiple-choice, true-false, fill-blank
// Soft retry: wrong options shake + get visual "tried" state but stay tappable.
// Long-press any option to hear it read aloud.
import { useState, useRef } from 'react';
import { sfx } from '../games/sounds';

const STYLE = `
  @keyframes quiz-shake {
    0%,100%{transform:translateX(0)}
    20%    {transform:translateX(-8px)}
    40%    {transform:translateX(8px)}
    60%    {transform:translateX(-5px)}
    80%    {transform:translateX(5px)}
  }
  .quiz-shake { animation: quiz-shake 0.42s ease !important; }
  @media (min-width: 768px) {
    .quiz-option { min-height: 80px !important; font-size: 1.08rem !important; }
  }
`;

export default function QuizQuestion({ question, accent, wrongOptions, onAnswer, onSpeak }) {
  const { format, options = [], correctIndex, correctAnswer } = question;
  const [shaking, setShaking]   = useState(null); // option index currently shaking

  // Long-press tracking — keyed by option index
  const lpTimers = useRef(new Map());
  const lpFired  = useRef(new Set());

  const startLP = (idx, label) => {
    lpFired.current.delete(idx);
    clearTimeout(lpTimers.current.get(idx));
    lpTimers.current.set(idx, setTimeout(() => {
      lpFired.current.add(idx);
      lpTimers.current.delete(idx);
      onSpeak?.(label);
    }, 600));
  };
  const cancelLP  = (idx) => { clearTimeout(lpTimers.current.get(idx)); lpTimers.current.delete(idx); };
  const consumeLP = (idx) => { const f = lpFired.current.has(idx); lpFired.current.delete(idx); return f; };

  const handleTap = (idx, label, isCorrect) => {
    if (consumeLP(idx)) return; // long press was handled — skip tap
    if (!isCorrect) {
      setShaking(idx);
      sfx.buzz();
      setTimeout(() => setShaking(null), 440);
    } else {
      sfx.chime();
    }
    onAnswer(isCorrect, label, idx);
  };

  // ── True / False ─────────────────────────────────────────────────────────────
  if (format === 'true-false') {
    const tfOpts     = ['True', 'False'];
    const correctIdx = correctAnswer === true ? 0 : 1;
    return (
      <>
        <style>{STYLE}</style>
        <div style={{ display: 'flex', gap: 14, padding: '4px 0' }}>
          {tfOpts.map((label, i) => {
            const isWrong  = wrongOptions.has(i);
            const isTrue   = i === 0;
            return (
              <button
                key={i}
                className={`quiz-option${shaking === i ? ' quiz-shake' : ''}`}
                onTouchStart={() => startLP(i, label)}
                onTouchEnd={()   => cancelLP(i)}
                onTouchMove={()  => cancelLP(i)}
                onClick={() => handleTap(i, label, i === correctIdx)}
                style={{
                  flex: 1, minHeight: 80, border: `2.5px solid ${isWrong ? '#EF4444' : isTrue ? '#10B98155' : '#EF444455'}`,
                  borderRadius: 18, background: isWrong ? 'rgba(239,68,68,0.1)' : isTrue ? 'rgba(16,185,129,0.07)' : 'rgba(239,68,68,0.07)',
                  color: isWrong ? '#FCA5A5' : isTrue ? '#10B981' : '#F87171',
                  fontSize: '1.1rem', fontWeight: 800, cursor: 'pointer',
                  touchAction: 'manipulation', display: 'flex', alignItems: 'center',
                  justifyContent: 'center', gap: 8, transition: 'border-color 0.12s',
                }}
              >
                <span style={{ fontSize: '1.4rem' }}>{isTrue ? '✓' : '✗'}</span>
                {label}
              </button>
            );
          })}
        </div>
      </>
    );
  }

  // ── Multiple choice + Fill-blank (identical layout) ──────────────────────────
  return (
    <>
      <style>{STYLE}</style>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {options.map((opt, i) => {
          const isWrong = wrongOptions.has(i);
          return (
            <button
              key={i}
              className={`quiz-option${shaking === i ? ' quiz-shake' : ''}`}
              onTouchStart={() => startLP(i, opt)}
              onTouchEnd={()   => cancelLP(i)}
              onTouchMove={()  => cancelLP(i)}
              onClick={() => handleTap(i, opt, i === correctIndex)}
              style={{
                width: '100%', minHeight: 60, textAlign: 'left',
                border: `2px solid ${isWrong ? '#EF4444' : 'rgba(255,255,255,0.13)'}`,
                borderRadius: 14, padding: '0 16px',
                background: isWrong ? 'rgba(239,68,68,0.08)' : 'rgba(255,255,255,0.05)',
                color: isWrong ? '#FCA5A5' : 'rgba(255,255,255,0.9)',
                fontSize: '0.97rem', fontWeight: 600, cursor: 'pointer',
                touchAction: 'manipulation', display: 'flex', alignItems: 'center', gap: 12,
                transition: 'border-color 0.12s, background 0.12s',
              }}
            >
              <span style={{
                width: 28, height: 28, borderRadius: '50%', flexShrink: 0,
                background: isWrong ? 'rgba(239,68,68,0.18)' : 'rgba(255,255,255,0.08)',
                border: `1.5px solid ${isWrong ? '#EF4444' : 'rgba(255,255,255,0.18)'}`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '0.72rem', fontWeight: 800,
                color: isWrong ? '#EF4444' : 'rgba(255,255,255,0.4)',
              }}>
                {isWrong ? '✗' : String.fromCharCode(65 + i)}
              </span>
              {opt}
            </button>
          );
        })}
      </div>
    </>
  );
}
