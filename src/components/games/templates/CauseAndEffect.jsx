import { useState, useEffect, useRef } from 'react';
import KaraokeText from '../KaraokeText';

// Fully automatic guided breathing exercise — no tapping required.
//
// Flow (per cycle):
//   onNarrate("Breathe in!") + balloon grows over 3s
//   → 4s total (grow + 1s hold) → next phase
//   → onNarrate("Breathe out!") + balloon shrinks over 3s
//   → 4s total (shrink + 1s hold) → next cycle
//
// After all cycles: onNarrate(finalMessage, onComplete) — advance when speech ends
//
// Pause/resume: isPaused prop cancels the current pending timer and saves its
// remaining time. On resume, the timer is recreated with the saved time.
// The audio element is paused/resumed by GameLessonPlayer independently.
// CSS transitions freeze naturally (no new setScale calls while paused).

const GROW_MS   = 3000; // balloon expand duration (matches CSS transition)
const SHRINK_MS = 3000; // balloon shrink duration
const HOLD_MS   = 1000; // pause between phases

export default function CauseAndEffect({ step, onComplete, onNarrate, disabled, isPaused = false, karaokeWords = [], karaokeIdx = -1 }) {
  const cycles   = step.cycles || [];
  const finalMsg = step.finalMessage || 'Great job! You feel so calm!';
  const hasImage = !!step.image;

  const [scale,   setScale]   = useState(0.85);
  const [label,   setLabel]   = useState('');
  const [isDone,  setIsDone]  = useState(false);

  const cancelledRef    = useRef(false);
  const pendingTimerRef = useRef(null); // { id, fn, startedAt, ms } — current scheduled phase timer

  // Reset when step changes (new screen).
  useEffect(() => {
    setScale(0.85);
    setLabel('');
    setIsDone(false);
  }, [step]);

  // Pause / resume the internal timer chain.
  // When isPaused becomes true: cancel the pending timer, save remaining time.
  // When isPaused becomes false: restore the timer with the saved remaining time.
  useEffect(() => {
    if (isPaused) {
      if (pendingTimerRef.current?.id != null) {
        clearTimeout(pendingTimerRef.current.id);
        const elapsed   = Date.now() - pendingTimerRef.current.startedAt;
        const remaining = Math.max(0, pendingTimerRef.current.ms - elapsed);
        pendingTimerRef.current = { ...pendingTimerRef.current, id: null, remaining };
      }
    } else {
      // Restore timer if one was saved on pause (id === null is the sentinel).
      const saved = pendingTimerRef.current;
      if (saved && saved.id === null && saved.remaining !== undefined) {
        const ms        = saved.remaining;
        const fn        = saved.fn;
        const startedAt = Date.now();
        const id        = setTimeout(() => {
          if (cancelledRef.current) return;
          pendingTimerRef.current = null;
          fn();
        }, ms);
        pendingTimerRef.current = { id, fn, startedAt, ms };
      }
    }
  }, [isPaused]);

  // Start the automatic sequence once the intro speech finishes (disabled → false).
  useEffect(() => {
    if (disabled) return;
    if (!cycles.length) { onComplete?.(); return; }

    cancelledRef.current = false;

    // Schedule a phase timer and track it for pause/resume.
    function schedulePhase(fn, ms) {
      if (cancelledRef.current) return;
      const startedAt = Date.now();
      const id = setTimeout(() => {
        if (cancelledRef.current) return;
        pendingTimerRef.current = null;
        fn();
      }, ms);
      pendingTimerRef.current = { id, fn, startedAt, ms };
    }

    // Build sequential phase list — each phase fires after the previous one completes.
    // Phase delays are relative (each delay starts counting when the previous phase fires).
    let phaseIdx = 0;
    const phases = [];

    for (let i = 0; i < cycles.length; i++) {
      const cycle   = cycles[i];
      const inText  = cycle.in  || 'Breathe in!';
      const outText = cycle.out || 'Breathe out!';

      // Breathe IN: delay=0 for first cycle; SHRINK+HOLD for subsequent cycles
      // (delay from the previous breathe-out phase completing).
      phases.push({
        delay:  i === 0 ? 0 : (SHRINK_MS + HOLD_MS),
        action: () => { setScale(1.3); setLabel(inText);  onNarrate?.(inText);  },
      });

      // Breathe OUT: GROW+HOLD delay after breathe-in fires.
      phases.push({
        delay:  GROW_MS + HOLD_MS,
        action: () => { setScale(0.65); setLabel(outText); onNarrate?.(outText); },
      });
    }

    // Final phase: closing message — advance only when speech ends via callback.
    phases.push({
      delay:  SHRINK_MS + HOLD_MS,
      action: () => { setScale(0.9); setLabel(finalMsg); setIsDone(true); onNarrate?.(finalMsg, onComplete); },
    });

    function runNext() {
      if (cancelledRef.current) return;
      if (phaseIdx >= phases.length) return;
      const phase = phases[phaseIdx++];
      schedulePhase(() => {
        phase.action();
        runNext(); // schedule the next phase after this one fires
      }, phase.delay);
    }

    runNext();

    return () => {
      cancelledRef.current = true;
      if (pendingTimerRef.current?.id != null) {
        clearTimeout(pendingTimerRef.current.id);
      }
      pendingTimerRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [disabled]);

  return (
    <div style={{
      padding: '24px 16px 32px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      overflowY: 'auto',
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
        {label ? <KaraokeText text={label} karaokeWords={karaokeWords} karaokeIdx={karaokeIdx} /> : ' '}
      </p>
    </div>
  );
}
