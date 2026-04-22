import { useState, useEffect } from 'react';

// Fully automatic guided breathing exercise — no tapping required.
//
// Flow (per cycle):
//   onNarrate("Breathe in!") + balloon grows over 3s
//   → 1s hold
//   → onNarrate("Breathe out!") + balloon shrinks over 3s
//   → 1s hold
//   → next cycle (repeat)
//
// After all cycles: onNarrate(finalMessage) → 2.5s → onComplete (auto-advance)
//
// The sequence starts automatically when `disabled` goes false
// (i.e., GameLessonPlayer has finished speaking the intro guideText).

const GROW_MS  = 3000; // balloon expand duration (matches CSS transition)
const SHRINK_MS = 3000; // balloon shrink duration
const HOLD_MS   = 1000; // pause between phases

export default function CauseAndEffect({ step, onComplete, onNarrate, disabled }) {
  const cycles     = step.cycles || [];
  const finalMsg   = step.finalMessage || 'Great job! You feel so calm!';
  const hasImage   = !!step.image;

  const [scale,   setScale]   = useState(0.85);
  const [label,   setLabel]   = useState('');
  const [isDone,  setIsDone]  = useState(false);

  // Reset when step changes (new screen).
  useEffect(() => {
    setScale(0.85);
    setLabel('');
    setIsDone(false);
  }, [step]);

  // Start the automatic sequence once the intro speech finishes (disabled → false).
  useEffect(() => {
    if (disabled) return;
    if (!cycles.length) { onComplete?.(); return; }

    let cancelled = false;
    const timers  = [];
    const after   = (ms, fn) => { const t = setTimeout(() => { if (!cancelled) fn(); }, ms); timers.push(t); };

    let t = 0;

    cycles.forEach(cycle => {
      const inText  = cycle.in  || 'Breathe in!';
      const outText = cycle.out || 'Breathe out!';

      // ── Breathe IN ──────────────────────────────────────────────
      after(t, () => {
        setScale(1.3);
        setLabel(inText);
        onNarrate?.(inText);
      });
      t += GROW_MS + HOLD_MS; // grow finishes + 1s hold

      // ── Breathe OUT ─────────────────────────────────────────────
      after(t, () => {
        setScale(0.65);
        setLabel(outText);
        onNarrate?.(outText);
      });
      t += SHRINK_MS + HOLD_MS; // shrink finishes + 1s hold
    });

    // ── Finished ────────────────────────────────────────────────
    after(t, () => {
      setScale(0.9);
      setLabel(finalMsg);
      setIsDone(true);
      onNarrate?.(finalMsg);
    });
    t += 2500;

    after(t, () => onComplete?.());

    return () => { cancelled = true; timers.forEach(clearTimeout); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [disabled]);

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
        @keyframes cae-glow {
          0%,100% { opacity: 0.5; transform: scale(1);    }
          50%      { opacity: 1;   transform: scale(1.06); }
        }
      `}</style>

      {/* Balloon / image */}
      <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {/* Ambient glow when expanded */}
        <div style={{
          position: 'absolute',
          width: 260,
          height: 260,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(124,58,237,0.22) 0%, transparent 70%)',
          transform: `scale(${scale})`,
          transition: `transform ${GROW_MS}ms ease-in-out`,
          pointerEvents: 'none',
        }} />

        {hasImage ? (
          <img
            src={step.image}
            alt=""
            style={{
              width: 280,
              height: 280,
              objectFit: 'contain',
              display: 'block',
              transition: `transform ${GROW_MS}ms ease-in-out, filter 0.6s ease, opacity 0.6s ease`,
              transform: `scale(${scale})`,
              filter:  isDone
                ? 'drop-shadow(0 0 24px rgba(52,211,153,0.7))'
                : scale > 1
                  ? 'drop-shadow(0 0 16px rgba(124,58,237,0.55))'
                  : 'none',
              opacity: disabled ? 0.6 : 1,
            }}
            draggable={false}
          />
        ) : (
          <div style={{
            width: 200,
            height: 200,
            borderRadius: '50%',
            background: isDone ? '#34D399' : '#7C3AED',
            transition: `transform ${GROW_MS}ms ease-in-out, background 0.6s ease`,
            transform: `scale(${scale})`,
            boxShadow: scale > 1 ? '0 0 48px rgba(124,58,237,0.6)' : '0 0 16px rgba(124,58,237,0.3)',
          }} />
        )}
      </div>

      {/* "Breathe in..." / "Breathe out..." label */}
      <p style={{
        color:      isDone ? '#34D399' : '#FCD34D',
        fontWeight: 900,
        fontSize:   'clamp(1.3rem, 4vw, 1.7rem)',
        textAlign:  'center',
        margin:     0,
        letterSpacing: '0.02em',
        opacity:    label ? 1 : 0,
        transition: 'opacity 0.6s ease, color 0.4s ease',
        minHeight:  '2em',
      }}>
        {label || ' '}
      </p>
    </div>
  );
}
