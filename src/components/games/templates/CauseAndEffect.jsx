import { useState, useEffect } from 'react';
import { sfx } from '../sounds';

// All TTS is handled by GameLessonPlayer.
// Initial intro: GameLessonPlayer speaks guideText + cycles[0].action.
// Between cycles: this component calls onNarrate() to speak the next prompt.

export default function CauseAndEffect({ step, onReady, onNarrate, disabled }) {
  const cycles = step.cycles || [];

  const [cycleIdx, setCycleIdx] = useState(0);
  const [phase,    setPhase]    = useState('before'); // 'before' | 'animating' | 'after'
  // imgScale persists across cycles so breathe-in stays big until breathe-out shrinks it.
  const [imgScale, setImgScale] = useState(0.7);

  useEffect(() => {
    setCycleIdx(0);
    setPhase('before');
    setImgScale(0.7);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [step]);

  const cycle = cycles[cycleIdx];
  if (!cycle) return null;

  const afterScale = cycle.afterScale ?? 1.15;

  function trigger() {
    if (phase !== 'before' || disabled) return;
    sfx.chime();
    setPhase('animating');
    setImgScale(afterScale);

    setTimeout(() => {
      setPhase('after');
      sfx.sparkle();
      onNarrate?.(cycle.after);

      setTimeout(() => {
        const next = cycleIdx + 1;
        if (next >= cycles.length) {
          sfx.fanfare();
          setTimeout(() => onReady?.(), 800);
        } else {
          const nextCycle = cycles[next];
          setCycleIdx(next);
          // imgScale stays at afterScale — becomes the "before" scale for next cycle
          setPhase('before');
          setTimeout(() => onNarrate?.(nextCycle.action), 500);
        }
      }, 2200);
    }, 800);
  }

  const isBefore    = phase === 'before';
  const isAfter     = phase === 'after';
  const hasImage    = !!step.image;

  return (
    <div style={{ padding: '16px 16px 28px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 20 }}>
      <style>{`
        @keyframes cae-btn-pulse {
          0%,100% { transform: scale(1);    box-shadow: 0 0 28px rgba(124,58,237,0.55); }
          50%      { transform: scale(1.12); box-shadow: 0 0 52px rgba(124,58,237,0.9);  }
        }
        @keyframes cae-glow-ring {
          0%,100% { opacity: 0.55; transform: scale(1);    }
          50%      { opacity: 1;    transform: scale(1.06); }
        }
      `}</style>

      {/* Progress dots */}
      <div style={{ display: 'flex', gap: 8 }}>
        {cycles.map((_, i) => (
          <div key={i} style={{
            width:      i <= cycleIdx ? 14 : 10,
            height:     i <= cycleIdx ? 14 : 10,
            borderRadius: '50%',
            background: i < cycleIdx ? '#34D399' : i === cycleIdx ? '#FCD34D' : 'rgba(255,255,255,0.2)',
            transition: 'all 0.3s ease',
          }} />
        ))}
      </div>

      {/* Main visual — image or fallback shape */}
      <div style={{
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 300,
        height: 300,
      }}>
        {/* Glow ring when "after" */}
        {isAfter && (
          <div style={{
            position: 'absolute',
            inset: -24,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(252,211,77,0.35) 0%, transparent 70%)',
            animation: 'cae-glow-ring 1.6s ease-in-out infinite',
            pointerEvents: 'none',
          }} />
        )}

        {hasImage ? (
          <img
            src={step.image}
            alt=""
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'contain',
              borderRadius: 24,
              transition: 'transform 0.85s cubic-bezier(0.34,1.56,0.64,1), opacity 0.45s ease, filter 0.45s ease',
              transform: `scale(${imgScale})`,
              opacity:    isBefore ? 0.72 : 1,
              filter:     isAfter  ? 'drop-shadow(0 0 22px rgba(252,211,77,0.65))' : 'none',
            }}
            draggable={false}
          />
        ) : (
          /* Fallback: simple colored circle */
          <div style={{
            width: 180,
            height: 180,
            borderRadius: '50%',
            background: isAfter ? '#34D399' : '#7C3AED',
            transition: 'transform 0.85s cubic-bezier(0.34,1.56,0.64,1), background 0.4s ease, box-shadow 0.4s ease',
            transform: `scale(${imgScale})`,
            opacity:    isBefore ? 0.72 : 1,
            boxShadow:  isAfter  ? '0 0 48px rgba(52,211,153,0.6)' : '0 0 20px rgba(124,58,237,0.4)',
          }} />
        )}
      </div>

      {/* State text label */}
      <p style={{
        color:      isAfter ? '#FCD34D' : 'rgba(255,255,255,0.85)',
        fontWeight: 800,
        fontSize:   'clamp(1.05rem, 3.5vw, 1.3rem)',
        textAlign:  'center',
        margin:     0,
        minHeight:  '1.6em',
        transition: 'color 0.4s ease',
      }}>
        {isAfter ? cycle.after : cycle.before}
      </p>

      {/* Tap circle — large, pulsing, no text; hidden during animating/after */}
      {isBefore && (
        <button
          onClick={trigger}
          style={{
            width:          96,
            height:         96,
            borderRadius:   '50%',
            border:         'none',
            background:     'rgba(124,58,237,0.85)',
            cursor:         disabled ? 'default' : 'pointer',
            touchAction:    'manipulation',
            opacity:        disabled ? 0.4 : 1,
            pointerEvents:  disabled ? 'none' : 'auto',
            animation:      disabled ? 'none' : 'cae-btn-pulse 1.5s ease-in-out infinite',
            boxShadow:      '0 0 28px rgba(124,58,237,0.55)',
          }}
        />
      )}
    </div>
  );
}
