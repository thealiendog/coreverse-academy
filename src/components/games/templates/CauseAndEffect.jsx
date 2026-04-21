import { useState, useEffect } from 'react';
import { sfx } from '../sounds';

// Built-in cause-effect cycles used if none provided
const DEFAULT_CYCLES = [
  {
    prompt:    'Tap the seed to plant it!',
    before:    '🌱',
    after:     '🌸',
    action:    'Plant it!',
    narration: 'You planted the seed and a flower grew!',
  },
  {
    prompt:    'Tap the coin to save it!',
    before:    '🪙',
    after:     '💰',
    action:    'Save it!',
    narration: 'You saved the coin and built a treasure!',
  },
  {
    prompt:    'Tap the sad face to help it smile!',
    before:    '😢',
    after:     '😊',
    action:    'Help it!',
    narration: 'You helped the sad face feel happy!',
  },
];

export default function CauseAndEffect({ step, onComplete, onNarrate }) {
  const cycles = step.cycles || DEFAULT_CYCLES;

  const [cycleIdx,  setCycleIdx]  = useState(0);
  const [phase,     setPhase]     = useState('before'); // 'before' | 'animating' | 'after'
  const [narrating, setNarrating] = useState(false);

  useEffect(() => {
    setCycleIdx(0);
    setPhase('before');
    setNarrating(false);
  }, [step]);

  const cycle = cycles[cycleIdx];

  function trigger() {
    if (phase !== 'before') return;
    sfx.chime();
    setPhase('animating');
    setTimeout(() => {
      setPhase('after');
      sfx.sparkle();
      setNarrating(true);
      onNarrate?.(cycle.narration);
      setTimeout(() => {
        setNarrating(false);
        const next = cycleIdx + 1;
        if (next >= cycles.length) {
          sfx.fanfare();
          setTimeout(onComplete, 1200);
        } else {
          setCycleIdx(next);
          setPhase('before');
        }
      }, 2200);
    }, 800);
  }

  return (
    <div style={{ padding: '16px 16px 28px', display:'flex', flexDirection:'column', alignItems:'center', gap:24 }}>
      <style>{`
        @keyframes cae-appear { 0%{transform:scale(0) rotate(-20deg);opacity:0}60%{transform:scale(1.2) rotate(5deg)}100%{transform:scale(1) rotate(0);opacity:1} }
        @keyframes cae-pulse  { 0%,100%{transform:scale(1)}50%{transform:scale(1.1)} }
        @keyframes cae-spin   { 0%{transform:rotate(0)}100%{transform:rotate(360deg)} }
      `}</style>

      {/* Progress dots */}
      <div style={{ display:'flex', gap:8 }}>
        {cycles.map((_, i) => (
          <div key={i} style={{
            width: i <= cycleIdx ? 14 : 10,
            height: i <= cycleIdx ? 14 : 10,
            borderRadius: '50%',
            background: i < cycleIdx ? '#34D399' : i === cycleIdx ? '#FCD34D' : 'rgba(255,255,255,0.2)',
            transition: 'all 0.3s ease',
          }} />
        ))}
      </div>

      {/* Prompt */}
      <p style={{ color:'#fff', fontWeight:800, fontSize:'clamp(1.1rem,3.5vw,1.4rem)', textAlign:'center', margin:0 }}>
        {phase === 'after' ? cycle.narration : cycle.prompt}
      </p>

      {/* Scene */}
      <div style={{
        width: 200,
        height: 160,
        background: 'rgba(255,255,255,0.05)',
        borderRadius: 24,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        border: '1.5px solid rgba(255,255,255,0.12)',
      }}>
        {phase === 'before' && (
          <span style={{ fontSize:'5rem', animation:'cae-pulse 1.5s ease-in-out infinite' }}>
            {cycle.before}
          </span>
        )}
        {phase === 'animating' && (
          <span style={{ fontSize:'5rem', animation:'cae-spin 0.8s ease-in-out' }}>
            {cycle.before}
          </span>
        )}
        {phase === 'after' && (
          <span style={{ fontSize:'5rem', animation:'cae-appear 0.6s cubic-bezier(0.34,1.56,0.64,1) both' }}>
            {cycle.after}
          </span>
        )}
      </div>

      {/* Action button */}
      <button
        onClick={trigger}
        disabled={phase !== 'before'}
        style={{
          background: phase === 'before'
            ? 'linear-gradient(135deg,#7C3AED,#A78BFA)'
            : 'rgba(255,255,255,0.08)',
          color: '#fff',
          border: 'none',
          borderRadius: 100,
          padding: '16px 44px',
          fontSize: '1.2rem',
          fontWeight: 900,
          cursor: phase === 'before' ? 'pointer' : 'default',
          boxShadow: phase === 'before' ? '0 6px 24px rgba(124,58,237,0.5)' : 'none',
          transition: 'all 0.3s ease',
          opacity: phase === 'before' ? 1 : 0.5,
        }}
      >
        {phase === 'after' ? (cycleIdx < cycles.length - 1 ? '✓ Next →' : '✓ Done!') : cycle.action}
      </button>
    </div>
  );
}
