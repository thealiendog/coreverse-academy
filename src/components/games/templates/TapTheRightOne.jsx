import { useState, useEffect } from 'react';
import { sfx } from '../sounds';

// 3 floating stars on correct tap
function FloatingStars({ triggerKey }) {
  if (!triggerKey) return null;
  return (
    <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 60, overflow: 'hidden' }}>
      <style>{`@keyframes ttr-star{0%{transform:translateY(0) scale(1);opacity:1}100%{transform:translateY(-120px) scale(1.6);opacity:0}}`}</style>
      {[20, 50, 80].map((x, i) => (
        <div key={i} style={{
          position: 'absolute',
          left: `${x}%`,
          bottom: '40%',
          width: 20,
          height: 20,
          borderRadius: '50%',
          background: 'linear-gradient(135deg,#FCD34D,#F59E0B)',
          boxShadow: '0 0 12px rgba(252,211,77,0.8)',
          animation: `ttr-star 1s ease-out ${i * 0.1}s both`,
        }} />
      ))}
    </div>
  );
}

export default function TapTheRightOne({ step, onComplete, onWrong }) {
  const [selected,  setSelected]  = useState(null);
  const [wrong,     setWrong]     = useState(null);
  const [starKey,   setStarKey]   = useState(null);
  const [locked,    setLocked]    = useState(false);

  const items = step.items || [];

  useEffect(() => {
    setSelected(null);
    setWrong(null);
    setStarKey(null);
    setLocked(false);
  }, [step]);

  function handleTap(idx) {
    if (locked || selected !== null) return;
    const item = items[idx];
    if (item?.correct) {
      setSelected(idx);
      setLocked(true);
      sfx.chime();
      sfx.sparkle();
      setStarKey(Date.now());
      setTimeout(onComplete, 1800);
    } else {
      setWrong(idx);
      sfx.buzz();
      onWrong?.(`Try again! That's ${item?.label || 'not right'}.`);
      setTimeout(() => setWrong(null), 700);
    }
  }

  return (
    <div style={{ padding: '16px 16px 24px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 20 }}>
      <FloatingStars triggerKey={starKey} />

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
        gap: 14,
        width: '100%',
        maxWidth: 380,
      }}>
        {items.map((item, idx) => {
          const isCorrect = selected === idx;
          const isWrong   = wrong    === idx;

          return (
            <button
              key={idx}
              onClick={() => handleTap(idx)}
              style={{
                height: 130,
                borderRadius: 20,
                border: isCorrect
                  ? '3px solid #34D399'
                  : isWrong
                    ? '3px solid #EF4444'
                    : '2px solid rgba(255,255,255,0.15)',
                background: isCorrect
                  ? 'rgba(52,211,153,0.18)'
                  : isWrong
                    ? 'rgba(239,68,68,0.15)'
                    : 'rgba(255,255,255,0.06)',
                cursor: locked ? 'default' : 'pointer',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 8,
                transition: 'all 0.2s ease',
                transform: isCorrect
                  ? 'scale(1.06)'
                  : isWrong
                    ? 'scale(0.96)'
                    : 'scale(1)',
                boxShadow: isCorrect
                  ? '0 0 24px rgba(52,211,153,0.5)'
                  : isWrong
                    ? '0 0 16px rgba(239,68,68,0.4)'
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
                    height: '140px',
                    objectFit: 'cover',
                    borderRadius: '12px',
                    display: 'block',
                    filter: isWrong ? 'brightness(0.7)' : 'none',
                    flexShrink: 0,
                  }}
                  draggable={false}
                />
              ) : (
                <span style={{ fontSize: '3rem', lineHeight: 1 }}>{item.emoji}</span>
              )}
              {item.label && (
                <span style={{
                  color: isCorrect ? '#34D399' : isWrong ? '#FCA5A5' : 'rgba(255,255,255,0.8)',
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
