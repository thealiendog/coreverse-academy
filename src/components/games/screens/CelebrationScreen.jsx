import { useState, useEffect, useRef } from 'react';
import { sfx } from '../sounds';
import { useNavigate } from 'react-router-dom';

const CONFETTI_COLORS = ['#FCD34D', '#F59E0B', '#7C3AED', '#A78BFA', '#10B981', '#60A5FA', '#F472B6', '#34D399'];

function Confetti() {
  const pieces = Array.from({ length: 40 }).map((_, i) => ({
    id: i,
    x: Math.random() * 100,
    color: CONFETTI_COLORS[i % CONFETTI_COLORS.length],
    delay: Math.random() * 1.2,
    size: 8 + Math.random() * 10,
    dur: 1.8 + Math.random() * 1.2,
  }));

  return (
    <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 50, overflow: 'hidden' }}>
      <style>{`
        @keyframes conf-fall {
          0%  { transform: translateY(-60px) rotate(0deg);   opacity: 1; }
          100%{ transform: translateY(110vh) rotate(720deg); opacity: 0.4; }
        }
      `}</style>
      {pieces.map(p => (
        <div key={p.id} style={{
          position: 'absolute',
          top: 0,
          left: `${p.x}%`,
          width: p.size,
          height: p.size,
          borderRadius: Math.random() > 0.5 ? '50%' : 2,
          background: p.color,
          animation: `conf-fall ${p.dur}s ease-in ${p.delay}s both`,
        }} />
      ))}
    </div>
  );
}

export default function CelebrationScreen({ step, childName, guideAvatar, onComplete }) {
  const [phase, setPhase] = useState(0); // 0=burst, 1=badge, 2=button
  const navigate = useNavigate();

  useEffect(() => {
    sfx.fanfare();
    const t1 = setTimeout(() => setPhase(1), 600);
    const t2 = setTimeout(() => setPhase(2), 1400);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  const badgeName = step.badge || 'Champion';
  const text = (step.guideText || `You did it, ${childName || 'friend'}!`)
    .replace(/\{name\}/g, childName || 'friend');

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 24,
      padding: '32px 20px',
      textAlign: 'center',
      minHeight: '60vh',
      justifyContent: 'center',
    }}>
      <Confetti />

      {/* Star burst */}
      <div style={{
        fontSize: '5rem',
        animation: 'cel-burst 0.6s cubic-bezier(0.34,1.8,0.64,1) both',
      }}>
        🌟
        <style>{`@keyframes cel-burst{0%{transform:scale(0) rotate(-30deg)}100%{transform:scale(1) rotate(0deg)}}`}</style>
      </div>

      {/* You did it text */}
      <h2 style={{
        color: '#FCD34D',
        fontSize: 'clamp(1.6rem, 5vw, 2.2rem)',
        fontWeight: 900,
        margin: 0,
        textShadow: '0 0 30px rgba(252,211,77,0.6)',
        opacity: phase >= 1 ? 1 : 0,
        transform: phase >= 1 ? 'translateY(0)' : 'translateY(20px)',
        transition: 'all 0.5s ease',
      }}>
        You did it! 🎉
      </h2>

      {/* Badge earned */}
      <div style={{
        opacity: phase >= 1 ? 1 : 0,
        transform: phase >= 1 ? 'scale(1)' : 'scale(0.8)',
        transition: 'all 0.5s cubic-bezier(0.34,1.56,0.64,1) 0.1s',
        background: `linear-gradient(135deg, ${guideAvatar?.color || '#1a0a2e'}, rgba(252,211,77,0.1))`,
        border: '2px solid #FCD34D66',
        borderRadius: 20,
        padding: '20px 28px',
        maxWidth: 340,
        width: '100%',
        boxShadow: '0 8px 32px rgba(252,211,77,0.2)',
      }}>
        <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem', fontWeight: 700, margin: '0 0 8px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
          Badge Earned
        </p>
        <p style={{ color: '#FCD34D', fontSize: '1.4rem', fontWeight: 900, margin: '0 0 10px' }}>
          🏅 {badgeName}
        </p>
        <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1rem', lineHeight: 1.5, margin: 0 }}>
          {text}
        </p>
      </div>

      {/* Done button */}
      <button
        onClick={() => navigate('/child/dashboard')}
        style={{
          opacity: phase >= 2 ? 1 : 0,
          transform: phase >= 2 ? 'scale(1)' : 'scale(0.8)',
          transition: 'all 0.5s cubic-bezier(0.34,1.56,0.64,1)',
          background: 'linear-gradient(135deg, #FCD34D, #F59E0B)',
          color: '#1a0a2e',
          border: 'none',
          borderRadius: 100,
          padding: '18px 52px',
          fontSize: '1.3rem',
          fontWeight: 900,
          cursor: 'pointer',
          boxShadow: '0 8px 32px rgba(252,211,77,0.4)',
        }}
      >
        Keep going! 🚀
      </button>
    </div>
  );
}
