import { useState, useEffect } from 'react';
import WinCelebration from '../WinCelebration';

// All TTS is handled by GameLessonPlayer. This component is purely presentational:
// it receives readingIdx (which card is being narrated) and disabled (interaction lock)
// as props and renders accordingly. No speak calls here.

export default function TapTheRightOne({ step, onComplete, onReady, onWrong, onWin, disabled, readingIdx = -1 }) {
  const [selected, setSelected] = useState(null);
  const [wrong,    setWrong]    = useState(null);
  const [showWin,  setShowWin]  = useState(false);

  const items = step.items || [];

  // Reset state when the step changes (new question).
  useEffect(() => {
    setSelected(null);
    setWrong(null);
    setShowWin(false);
  }, [step]);

  function handleTap(idx) {
    if (disabled || selected !== null) return;
    const item = items[idx];
    if (item?.correct) {
      setSelected(idx);
      setShowWin(true);
      onWin?.();
      onReady?.();
    } else {
      setWrong(idx);
      sfxBuzz();
      onWrong?.('Try again! That is not quite right.');
      setTimeout(() => setWrong(null), 700);
    }
  }

  return (
    <div style={{ padding: '16px 16px 24px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 20 }}>
      {showWin && <WinCelebration onDone={() => { setShowWin(false); onComplete?.(); }} />}

      {/* Instruction */}
      <p style={{
        color: '#fff',
        fontWeight: 800,
        fontSize: 'clamp(1.15rem, 3.5vw, 1.5rem)',
        textAlign: 'center',
        margin: 0,
        lineHeight: 1.3,
      }}>
        {step.instruction || 'Tap the right one!'}
      </p>

      {/* 2×2 grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 24,
        width: '100%',
        maxWidth: 380,
        padding: '20px',
        boxSizing: 'border-box',
      }}>
        {items.map((item, idx) => {
          const isCorrect = selected === idx;
          const isWrong   = wrong    === idx;
          const isReading = readingIdx === idx;

          return (
            <button
              key={idx}
              onClick={() => handleTap(idx)}
              style={{
                borderRadius: 20,
                border: isCorrect
                  ? '3px solid #34D399'
                  : isWrong
                    ? '3px solid #EF4444'
                    : isReading
                      ? '3px solid #FCD34D'
                      : '2px solid rgba(255,255,255,0.15)',
                background: isCorrect
                  ? 'rgba(52,211,153,0.18)'
                  : isWrong
                    ? 'rgba(239,68,68,0.15)'
                    : isReading
                      ? 'rgba(252,211,77,0.14)'
                      : 'rgba(255,255,255,0.06)',
                cursor: (disabled || selected !== null) ? 'default' : 'pointer',
                touchAction: 'manipulation',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'flex-start',
                gap: 8,
                padding: '8px 8px 12px',
                overflow: 'hidden',
                transition: 'all 0.2s ease',
                transform: isCorrect
                  ? 'scale(1.06)'
                  : isWrong
                    ? 'scale(0.96)'
                    : isReading
                      ? 'scale(1.04)'
                      : 'scale(1)',
                boxShadow: isCorrect
                  ? '0 0 24px rgba(52,211,153,0.5)'
                  : isWrong
                    ? '0 0 16px rgba(239,68,68,0.4)'
                    : isReading
                      ? '0 0 22px rgba(252,211,77,0.55)'
                      : 'none',
                animation: isWrong ? 'ttr-shake 0.5s ease' : isCorrect ? 'ttr-bounce 0.5s ease' : 'none',
              }}
            >
              <style>{`
                @keyframes ttr-shake {
                  0%,100%{transform:translateX(0)}
                  20%{transform:translateX(-8px)}
                  40%{transform:translateX(8px)}
                  60%{transform:translateX(-6px)}
                  80%{transform:translateX(6px)}
                }
                @keyframes ttr-bounce {
                  0%{transform:scale(1)}
                  40%{transform:scale(1.12)}
                  70%{transform:scale(0.97)}
                  100%{transform:scale(1.06)}
                }
              `}</style>
              {item.image ? (
                <img
                  src={item.image}
                  alt={item.label || ''}
                  style={{
                    width: '100%',
                    height: '110px',
                    objectFit: 'cover',
                    borderRadius: '12px',
                    display: 'block',
                    filter: isWrong ? 'brightness(0.7)' : 'none',
                  }}
                  draggable={false}
                />
              ) : (
                <span style={{ fontSize: '3rem', lineHeight: 1 }}>{item.emoji}</span>
              )}
              {item.label && (
                <span style={{
                  color: isCorrect
                    ? '#34D399'
                    : isWrong
                      ? '#FCA5A5'
                      : isReading
                        ? '#FCD34D'
                        : 'rgba(255,255,255,0.8)',
                  fontSize: '0.9rem',
                  fontWeight: 700,
                }}>
                  {item.label}
                </span>
              )}
              {isCorrect && (
                <div style={{
                  width: 22, height: 22, borderRadius: '50%',
                  background: '#34D399',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <div style={{
                    width: 10, height: 6,
                    borderLeft: '2.5px solid #fff',
                    borderBottom: '2.5px solid #fff',
                    transform: 'rotate(-45deg) translate(1px,-1px)',
                  }} />
                </div>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}

// Inline buzz so we don't need the sfx import just for wrong-answer sound
function sfxBuzz() {
  try {
    const ctx  = new (window.AudioContext || window.webkitAudioContext)();
    const osc  = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain); gain.connect(ctx.destination);
    osc.type = 'sawtooth'; osc.frequency.value = 200;
    gain.gain.setValueAtTime(0.14, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.14);
    osc.start(); osc.stop(ctx.currentTime + 0.18);
  } catch { /* no audio */ }
}
