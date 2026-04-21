import { useEffect, useRef } from 'react';
import { sfx } from './sounds';

const MESSAGES = ['GREAT JOB!', 'AMAZING!', 'YOU DID IT!', 'AWESOME!', 'PERFECT!'];
const COLORS   = ['#FCD34D', '#34D399', '#A78BFA', '#F472B6', '#60A5FA', '#F97316', '#EC4899'];

function makeConfetti() {
  return Array.from({ length: 26 }, (_, i) => {
    const angle = (i * 360 / 26) + (Math.random() * 24 - 12);
    const dist  = 80 + Math.random() * 130;
    const rad   = angle * Math.PI / 180;
    return {
      id:    i,
      color: COLORS[i % COLORS.length],
      dx:    Math.round(Math.cos(rad) * dist),
      dy:    Math.round(Math.sin(rad) * dist),
      size:  7 + Math.random() * 9,
      dur:   0.65 + Math.random() * 0.45,
      delay: Math.random() * 0.15,
      round: i % 3 === 0,
    };
  });
}

function makeStars() {
  return Array.from({ length: 6 }, (_, i) => ({
    id:    i,
    left:  12 + i * 15,
    delay: i * 0.09,
  }));
}

export default function WinCelebration({ onDone }) {
  // Stable refs so values don't change between renders
  const msg      = useRef(MESSAGES[Math.floor(Math.random() * MESSAGES.length)]);
  const confetti = useRef(makeConfetti());
  const stars    = useRef(makeStars());

  useEffect(() => {
    sfx.fanfare();
    setTimeout(() => sfx.sparkle(), 380);
    setTimeout(() => sfx.sparkle(), 650);
    const t = setTimeout(() => onDone?.(), 1500);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 90, overflow: 'hidden' }}>
      <style>{`
        @keyframes wc-flash  { 0%{opacity:0} 25%{opacity:1} 100%{opacity:0} }
        @keyframes wc-conf   { 0%{transform:translate(0,0) scale(1);opacity:1} 100%{transform:translate(var(--wc-dx),var(--wc-dy)) scale(0.25);opacity:0} }
        @keyframes wc-star   { 0%{transform:translateY(0) scale(1);opacity:1} 100%{transform:translateY(-160px) scale(2);opacity:0} }
        @keyframes wc-text   { 0%{transform:translateX(-50%) scale(0) rotate(-10deg);opacity:0} 30%{transform:translateX(-50%) scale(1.18) rotate(4deg);opacity:1} 65%{transform:translateX(-50%) scale(1) rotate(0);opacity:1} 100%{transform:translateX(-50%) scale(0.8) rotate(0);opacity:0} }
      `}</style>

      {/* Golden screen flash */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'rgba(252,211,77,0.18)',
        animation: 'wc-flash 0.45s ease both',
      }} />

      {/* Confetti burst from screen center */}
      {confetti.current.map(p => (
        <div key={p.id} style={{
          position: 'absolute',
          left: '50%',
          top: '42%',
          width: p.size,
          height: p.size,
          marginLeft: -p.size / 2,
          marginTop:  -p.size / 2,
          borderRadius: p.round ? '50%' : 3,
          background: p.color,
          boxShadow: `0 0 6px ${p.color}99`,
          '--wc-dx': `${p.dx}px`,
          '--wc-dy': `${p.dy}px`,
          animation: `wc-conf ${p.dur}s ease-out ${p.delay}s both`,
        }} />
      ))}

      {/* Stars floating up across the screen */}
      {stars.current.map(s => (
        <div key={s.id} style={{
          position: 'absolute',
          left: `${s.left}%`,
          bottom: '35%',
          fontSize: 26,
          lineHeight: 1,
          animation: `wc-star 1.1s ease-out ${s.delay}s both`,
        }}>
          ⭐
        </div>
      ))}

      {/* Praise text */}
      <div style={{
        position: 'absolute',
        left: '50%',
        top: '30%',
        color: '#FCD34D',
        fontSize: 'clamp(2rem, 9vw, 3.2rem)',
        fontWeight: 900,
        letterSpacing: '0.02em',
        textShadow: '0 0 40px rgba(252,211,77,0.9), 0 4px 16px rgba(0,0,0,0.7)',
        whiteSpace: 'nowrap',
        animation: 'wc-text 1.5s cubic-bezier(0.34,1.56,0.64,1) both',
        fontFamily: 'system-ui, -apple-system, sans-serif',
      }}>
        {msg.current}
      </div>
    </div>
  );
}
