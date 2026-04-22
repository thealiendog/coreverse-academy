import { useState, useEffect } from 'react';
import { sfx } from '../sounds';

// CSS-only shape for default cycles — no emoji
function DefaultShape({ color, label }) {
  return (
    <div style={{
      display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10,
    }}>
      <div style={{
        width: 80, height: 80, borderRadius: '50%',
        background: color,
        boxShadow: `0 0 24px ${color}88`,
      }} />
      <span style={{ color: '#fff', fontWeight: 800, fontSize: '1rem' }}>{label}</span>
    </div>
  );
}

// Default cycles — fully image/CSS driven, no emoji
const DEFAULT_CYCLES = [
  {
    prompt:    'Tap the button to plant the seed!',
    beforeEl:  <DefaultShape color="#86EFAC" label="Seed" />,
    afterEl:   <DefaultShape color="#34D399" label="Flower" />,
    action:    'Plant it!',
    narration: 'You planted the seed and it grew!',
  },
  {
    prompt:    'Tap the button to save the coin!',
    beforeEl:  <DefaultShape color="#FCD34D" label="Coin" />,
    afterEl:   <DefaultShape color="#F59E0B" label="Saved!" />,
    action:    'Save it!',
    narration: 'You saved the coin and built a treasure!',
  },
  {
    prompt:    'Tap the button to cheer them up!',
    beforeEl:  <DefaultShape color="#60A5FA" label="Sad" />,
    afterEl:   <DefaultShape color="#34D399" label="Happy" />,
    action:    'Help it!',
    narration: 'You helped and now they feel better!',
  },
];

export default function CauseAndEffect({ step, onReady, onNarrate, disabled }) {
  const cycles = step.cycles || DEFAULT_CYCLES;

  const [cycleIdx, setCycleIdx] = useState(0);
  const [phase,    setPhase]    = useState('before'); // 'before' | 'animating' | 'after'

  useEffect(() => {
    setCycleIdx(0);
    setPhase('before');
    // All TTS handled by GameLessonPlayer.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [step]);

  const cycle = cycles[cycleIdx];

  // Resolve what to show — supports legacy `before`/`after` strings (images/text)
  // and new `beforeEl`/`afterEl` React elements
  function SceneContent({ which, anim }) {
    const el = cycle[which + 'El'];
    const src = cycle[which]; // legacy: image path or text
    if (el) return <div style={{ animation: anim }}>{el}</div>;
    if (src && (src.startsWith('/') || src.startsWith('http'))) {
      return (
        <img src={src} alt="" style={{ width: 120, height: 120, objectFit: 'cover', borderRadius: 16, animation: anim }} draggable={false} />
      );
    }
    if (src) {
      return <span style={{ color: '#fff', fontWeight: 800, fontSize: '1.2rem', animation: anim }}>{src}</span>;
    }
    return null;
  }

  function trigger() {
    if (phase !== 'before' || disabled) return;
    sfx.chime();
    setPhase('animating');
    setTimeout(() => {
      setPhase('after');
      sfx.sparkle();
      onNarrate?.(cycle.narration);
      setTimeout(() => {
        const next = cycleIdx + 1;
        if (next >= cycles.length) {
          sfx.fanfare();
          setTimeout(() => onReady?.(), 1200);
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

      {/* Prompt / narration */}
      <p style={{ color:'#fff', fontWeight:800, fontSize:'clamp(1.1rem,3.5vw,1.4rem)', textAlign:'center', margin:0 }}>
        {phase === 'after' ? cycle.narration : cycle.prompt}
      </p>

      {/* Scene canvas */}
      <div style={{
        width: 200, height: 170,
        background: 'rgba(255,255,255,0.05)',
        borderRadius: 24,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        border: '1.5px solid rgba(255,255,255,0.12)',
      }}>
        {phase === 'before'    && <SceneContent which="before" anim="cae-pulse 1.5s ease-in-out infinite" />}
        {phase === 'animating' && <SceneContent which="before" anim="cae-spin 0.8s ease-in-out" />}
        {phase === 'after'     && <SceneContent which="after"  anim="cae-appear 0.6s cubic-bezier(0.34,1.56,0.64,1) both" />}
      </div>

      {/* Action button — only shown when child can interact (before phase) */}
      {phase === 'before' && (
        <button
          onClick={trigger}
          style={{
            background: 'linear-gradient(135deg,#7C3AED,#A78BFA)',
            color: '#fff',
            border: 'none',
            borderRadius: 100,
            padding: '16px 44px',
            fontSize: '1.2rem',
            fontWeight: 900,
            cursor: 'pointer',
            boxShadow: '0 6px 24px rgba(124,58,237,0.5)',
            touchAction: 'manipulation',
          }}
        >
          {cycle.action}
        </button>
      )}
    </div>
  );
}
