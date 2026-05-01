// QuizQuestion — renders one question; three formats: multiple-choice, true-false, fill-blank
// Soft retry: wrong options shake + get visual "tried" state but stay tappable.
// Karaoke: option button glows + per-word highlight when Sage is reading that option.
// Long-press any option to hear it read aloud again.
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
  @keyframes quiz-correct-pop {
    0%   { transform: scale(1); }
    40%  { transform: scale(1.08); }
    100% { transform: scale(1); }
  }
  .quiz-shake   { animation: quiz-shake       0.42s ease !important; }
  .quiz-correct { animation: quiz-correct-pop 0.40s ease both; }
  @media (min-width: 768px) {
    .quiz-option { min-height: 80px !important; font-size: 1.08rem !important; }
  }
`;

// Check if Sage is currently reading this text (karaokeWords matches)
function isBeingRead(text, karaokeWords) {
  if (!karaokeWords || karaokeWords.length === 0 || !text) return false;
  const words = text.split(/\s+/).filter(Boolean);
  return karaokeWords.join(' ') === words.join(' ');
}

// Render text with per-word karaoke highlight
function renderKaraokeText(text, karaokeWords, karaokeIdx, accent) {
  const chunks = text.split(/(\s+)/);
  let wordCount = 0;
  return chunks.map((chunk, i) => {
    if (!chunk || /^\s+$/.test(chunk)) return <span key={i}>{chunk}</span>;
    const idx = wordCount++;
    const hi  = idx === karaokeIdx;
    return (
      <span key={i} style={{
        color:      hi ? accent : 'inherit',
        textShadow: hi ? `0 0 12px ${accent}99` : 'none',
        fontWeight: hi ? 700 : 'inherit',
        transition: 'color 0.08s ease',
      }}>{chunk}</span>
    );
  });
}

export default function QuizQuestion({ question, accent, wrongOptions, onAnswer, onSpeak, karaokeWords, karaokeIdx }) {
  const { format, options = [], correctIndex, correctAnswer } = question;
  const [shaking,      setShaking]      = useState(null);
  const [tappedCorrect, setTappedCorrect] = useState(null); // idx of correctly-tapped option

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
    if (consumeLP(idx)) return;
    if (tappedCorrect !== null) return; // already answered — ignore taps
    if (!isCorrect) {
      setShaking(idx);
      sfx.buzz();
      setTimeout(() => setShaking(null), 440);
    } else {
      setTappedCorrect(idx);
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
            const isWrong    = wrongOptions.has(i);
            const reading    = isBeingRead(label, karaokeWords);
            const isTrue     = i === 0;
            const isCorrect  = tappedCorrect === i;
            const isSibling  = tappedCorrect !== null && tappedCorrect !== i;
            return (
              <button
                key={i}
                className={`quiz-option${shaking === i ? ' quiz-shake' : ''}${isCorrect ? ' quiz-correct' : ''}`}
                onTouchStart={() => startLP(i, label)}
                onTouchEnd={()   => cancelLP(i)}
                onTouchMove={()  => cancelLP(i)}
                onClick={() => handleTap(i, label, i === correctIdx)}
                style={{
                  flex: 1, minHeight: 80,
                  border:     isCorrect ? '4px solid #22c55e' : `2.5px solid ${isWrong ? '#EF4444' : reading ? accent : isTrue ? '#10B98155' : '#EF444455'}`,
                  borderRadius: 18,
                  background: isCorrect ? 'rgba(34,197,94,0.15)' : isWrong ? 'rgba(239,68,68,0.1)' : reading ? `${accent}22` : isTrue ? 'rgba(16,185,129,0.07)' : 'rgba(239,68,68,0.07)',
                  boxShadow:  isCorrect ? '0 0 20px #22c55e88' : reading ? `0 0 0 3px ${accent}33` : 'none',
                  color:      isCorrect ? '#22c55e' : isWrong ? '#FCA5A5' : isTrue ? '#10B981' : '#F87171',
                  opacity:    isSibling ? 0.4 : 1,
                  fontSize: '1.1rem', fontWeight: 800, cursor: tappedCorrect !== null ? 'default' : 'pointer',
                  touchAction: 'manipulation', display: 'flex', alignItems: 'center',
                  justifyContent: 'center', gap: 8,
                  transition: 'border-color 0.12s, background 0.12s, box-shadow 0.12s, opacity 0.2s',
                  WebkitTapHighlightColor: 'transparent',
                }}
              >
                <span style={{ fontSize: '1.4rem' }}>{isCorrect ? '✅' : isTrue ? '✓' : '✗'}</span>
                {label}
              </button>
            );
          })}
        </div>
      </>
    );
  }

  // ── Multiple choice + Fill-blank ─────────────────────────────────────────────
  return (
    <>
      <style>{STYLE}</style>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {options.map((opt, i) => {
          const isWrong   = wrongOptions.has(i);
          const reading   = isBeingRead(opt, karaokeWords);
          const isCorrect = tappedCorrect === i;
          const isSibling = tappedCorrect !== null && tappedCorrect !== i;
          return (
            <button
              key={i}
              className={`quiz-option${shaking === i ? ' quiz-shake' : ''}${isCorrect ? ' quiz-correct' : ''}`}
              onTouchStart={() => startLP(i, opt)}
              onTouchEnd={()   => cancelLP(i)}
              onTouchMove={()  => cancelLP(i)}
              onClick={() => handleTap(i, opt, i === correctIndex)}
              style={{
                width: '100%', minHeight: 60, textAlign: 'left',
                border:     isCorrect ? '4px solid #22c55e' : `2px solid ${isWrong ? '#EF4444' : reading ? accent : 'rgba(255,255,255,0.13)'}`,
                borderRadius: 14, padding: '0 16px',
                background: isCorrect ? 'rgba(34,197,94,0.12)' : isWrong ? 'rgba(239,68,68,0.08)' : reading ? `${accent}18` : 'rgba(255,255,255,0.05)',
                boxShadow:  isCorrect ? '0 0 20px #22c55e88' : reading ? `0 0 0 3px ${accent}33` : 'none',
                color:      isCorrect ? '#22c55e' : isWrong ? '#FCA5A5' : 'rgba(255,255,255,0.9)',
                opacity:    isSibling ? 0.4 : 1,
                fontSize: '0.97rem', fontWeight: 600, cursor: tappedCorrect !== null ? 'default' : 'pointer',
                touchAction: 'manipulation', display: 'flex', alignItems: 'center', gap: 12,
                transition: 'border-color 0.12s, background 0.12s, box-shadow 0.12s, opacity 0.2s',
                WebkitTapHighlightColor: 'transparent',
              }}
            >
              {/* Letter badge — becomes green checkmark on correct */}
              <span style={{
                width: 28, height: 28, borderRadius: '50%', flexShrink: 0,
                background: isCorrect ? 'rgba(34,197,94,0.2)' : isWrong ? 'rgba(239,68,68,0.18)' : reading ? `${accent}33` : 'rgba(255,255,255,0.08)',
                border: `1.5px solid ${isCorrect ? '#22c55e' : isWrong ? '#EF4444' : reading ? accent : 'rgba(255,255,255,0.18)'}`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: isCorrect ? '1rem' : '0.72rem', fontWeight: 800,
                color: isCorrect ? '#22c55e' : isWrong ? '#EF4444' : reading ? accent : 'rgba(255,255,255,0.4)',
              }}>
                {isCorrect ? '✓' : isWrong ? '✗' : String.fromCharCode(65 + i)}
              </span>

              {/* Option text — per-word karaoke when Sage is reading this option */}
              <span style={{ flex: 1 }}>
                {reading
                  ? renderKaraokeText(opt, karaokeWords, karaokeIdx, accent)
                  : opt
                }
              </span>
            </button>
          );
        })}
      </div>
    </>
  );
}
