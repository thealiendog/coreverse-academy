import { useState, useEffect, useRef } from 'react';
import WinCelebration from '../WinCelebration';

export default function TapTheRightOne({ step, onComplete, onReady, onWrong, onWin, disabled, speak, onUnlock }) {
  const [selected,   setSelected]   = useState(null);
  const [wrong,      setWrong]      = useState(null);
  const [showWin,    setShowWin]    = useState(false);
  const [locked,     setLocked]     = useState(true);   // stays true until all options are read
  const [readingIdx, setReadingIdx] = useState(-1);     // which option card is currently highlighted

  const items = step.items || [];

  useEffect(() => {
    setSelected(null);
    setWrong(null);
    setShowWin(false);
    setLocked(true);
    setReadingIdx(-1);

    let cancelled = false;

    // Read each option label aloud in sequence, highlighting the card while speaking.
    function readOption(idx) {
      if (cancelled) return;
      if (idx >= items.length) {
        // All options read — release both locks
        setReadingIdx(-1);
        setLocked(false);
        onUnlock?.();
        return;
      }
      setReadingIdx(idx);
      const label = items[idx]?.label || '';
      speak?.(label, () => {
        if (!cancelled) setTimeout(() => readOption(idx + 1), 350);
      });
    }

    // 1. Read instruction + guideText, then read each option.
    const intro = [step.instruction, step.guideText].filter(Boolean).join('. ');
    if (intro) {
      speak?.(intro, () => {
        if (!cancelled) setTimeout(() => readOption(0), 400);
      });
    } else {
      setTimeout(() => { if (!cancelled) readOption(0); }, 200);
    }

    return () => { cancelled = true; };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [step]);

  function handleTap(idx) {
    if (locked || selected !== null || disabled) return;
    const item = items[idx];
    if (item?.correct) {
      setSelected(idx);
      setLocked(true);
      setShowWin(true);
      onWin?.();
      onReady?.();
    } else {
      setWrong(idx);
      sfxBuzz();
      onWrong?.(`Try again! That is not quite right.`);
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
          const isCorrect  = selected === idx;
          const isWrong    = wrong    === idx;
          const isReading  = readingIdx === idx;

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
                cursor: (locked || disabled) ? 'default' : 'pointer',
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
