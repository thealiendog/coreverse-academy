import { useState, useEffect, useRef } from 'react';

// Fully automatic guided demonstration — no tapping required.
//
// Each phase in step.phases:
//   { narrate: string, visual: 'still' | 'shake' | 'settle', pauseAfter: ms }
//
// Flow per phase:
//   1. Set visual state (image animation changes instantly)
//   2. Call onNarrate(text, onDone) — GameLessonPlayer speaks it
//   3. When speech ends, wait pauseAfter ms, then advance to next phase
//   4. After all phases: call onComplete (auto-advance)
//
// Starts automatically when `disabled` goes false (intro speech done).

export default function GuidedDemo({ step, onComplete, onNarrate, disabled }) {
  const phases = step.phases || [];
  const image  = step.image;

  const [visual, setVisual] = useState('still');
  const [label,  setLabel]  = useState('');
  const cancelledRef = useRef(false);

  // Reset when step changes.
  useEffect(() => {
    setVisual('still');
    setLabel('');
  }, [step]);

  // Run the phase sequence once the intro speech finishes (disabled → false).
  useEffect(() => {
    if (disabled) return;
    if (!phases.length) { onComplete?.(); return; }

    cancelledRef.current = false;
    let phaseIdx = 0;

    function runNext() {
      if (cancelledRef.current) return;
      if (phaseIdx >= phases.length) {
        onComplete?.();
        return;
      }
      const phase = phases[phaseIdx++];
      setVisual(phase.visual || 'still');
      setLabel(phase.narrate || '');

      // onNarrate supports an onDone callback so we wait for speech to finish
      // before advancing to the next phase.
      onNarrate?.(phase.narrate || '', () => {
        if (cancelledRef.current) return;
        setTimeout(runNext, phase.pauseAfter ?? 600);
      });
    }

    runNext();

    return () => { cancelledRef.current = true; };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [disabled]);

  const isShaking  = visual === 'shake';
  const isSettling = visual === 'settle';

  return (
    <div style={{
      padding: '24px 16px 32px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 32,
      minHeight: '55vh',
    }}>
      <style>{`
        @keyframes gd-shake {
          0%,100% { transform: rotate(0deg)  translateX(0); }
          20%     { transform: rotate(-7deg) translateX(-8px); }
          40%     { transform: rotate(7deg)  translateX(8px); }
          60%     { transform: rotate(-5deg) translateX(-6px); }
          80%     { transform: rotate(5deg)  translateX(6px); }
        }
        @keyframes gd-settle {
          0%   { transform: scale(1.04) rotate(1deg); }
          40%  { transform: scale(0.97) rotate(-0.5deg); }
          70%  { transform: scale(1.01) rotate(0.2deg); }
          100% { transform: scale(1)    rotate(0deg); }
        }
        @keyframes gd-glow {
          0%,100% { opacity: 0.35; transform: scale(1); }
          50%     { opacity: 0.75; transform: scale(1.1); }
        }
      `}</style>

      {/* Jar image */}
      <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {/* Ambient glow — green when calm, yellow when shaking */}
        <div style={{
          position: 'absolute',
          width: 280,
          height: 280,
          borderRadius: '50%',
          background: isShaking
            ? 'radial-gradient(circle, rgba(251,191,36,0.25) 0%, transparent 70%)'
            : 'radial-gradient(circle, rgba(52,211,153,0.20) 0%, transparent 70%)',
          animation: 'gd-glow 2.5s ease-in-out infinite',
          pointerEvents: 'none',
          transition: 'background 1s ease',
        }} />

        <img
          src={image}
          alt=""
          style={{
            width: 240,
            height: 240,
            objectFit: 'contain',
            display: 'block',
            animation: isShaking  ? 'gd-shake 0.35s ease-in-out infinite'
                      : isSettling ? 'gd-settle 2s ease-out 1 forwards'
                      : 'none',
            filter: isShaking
              ? 'drop-shadow(0 0 16px rgba(251,191,36,0.7))'
              : 'drop-shadow(0 0 20px rgba(52,211,153,0.55))',
            transition: 'filter 1s ease',
            opacity: disabled ? 0.6 : 1,
          }}
          draggable={false}
        />
      </div>

      {/* Narration label */}
      <p style={{
        color:      isShaking ? '#FCD34D' : '#34D399',
        fontWeight: 800,
        fontSize:   'clamp(1.1rem, 3.5vw, 1.45rem)',
        textAlign:  'center',
        margin:     0,
        lineHeight: 1.45,
        letterSpacing: '0.01em',
        opacity:    label ? 1 : 0,
        transition: 'opacity 0.5s ease, color 0.8s ease',
        minHeight:  '3em',
        maxWidth:   340,
      }}>
        {label || ' '}
      </p>
    </div>
  );
}
