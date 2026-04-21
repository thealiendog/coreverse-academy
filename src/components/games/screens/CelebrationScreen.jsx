import { useState, useEffect } from 'react';
import { sfx } from '../sounds';
import { useNavigate } from 'react-router-dom';

const CONFETTI_COLORS = ['#FCD34D', '#F59E0B', '#7C3AED', '#A78BFA', '#10B981', '#60A5FA', '#F472B6', '#34D399'];

function Confetti() {
  const pieces = Array.from({ length: 44 }).map((_, i) => ({
    id: i,
    x: Math.random() * 100,
    color: CONFETTI_COLORS[i % CONFETTI_COLORS.length],
    delay: Math.random() * 1.4,
    size: 7 + Math.random() * 10,
    dur: 1.8 + Math.random() * 1.4,
  }));

  return (
    <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 50, overflow: 'hidden' }}>
      <style>{`
        @keyframes conf-fall {
          0%  { transform: translateY(-60px) rotate(0deg);   opacity: 1; }
          100%{ transform: translateY(110vh) rotate(720deg); opacity: 0.3; }
        }
      `}</style>
      {pieces.map(p => (
        <div key={p.id} style={{
          position: 'absolute',
          top: 0,
          left: `${p.x}%`,
          width: p.size,
          height: p.size,
          borderRadius: p.id % 3 === 0 ? '50%' : 2,
          background: p.color,
          animation: `conf-fall ${p.dur}s ease-in ${p.delay}s both`,
        }} />
      ))}
    </div>
  );
}

export default function CelebrationScreen({ step, childName, guideAvatar }) {
  const [phase, setPhase] = useState(0); // 0=avatar, 1=text+badge, 2=button
  const navigate = useNavigate();

  useEffect(() => {
    sfx.fanfare();
    const t1 = setTimeout(() => setPhase(1), 700);
    const t2 = setTimeout(() => setPhase(2), 1500);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  const badgeName = step.badge || 'Champion';
  const text = (step.guideText || `You did it, ${childName || 'friend'}!`)
    .replace(/\{name\}/g, childName || 'friend');
  const accent = guideAvatar?.accent || '#FCD34D';

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 20,
      padding: '28px 20px',
      textAlign: 'center',
      minHeight: '65vh',
      justifyContent: 'center',
    }}>
      <style>{`
        @keyframes cel-pop   { 0%{transform:scale(0) rotate(-20deg)}60%{transform:scale(1.12) rotate(4deg)}100%{transform:scale(1) rotate(0)} }
        @keyframes cel-spin  { 0%,100%{transform:rotate(-8deg)}50%{transform:rotate(8deg)} }
        @keyframes cel-glow  { 0%,100%{box-shadow:0 0 30px ${accent}55}50%{box-shadow:0 0 60px ${accent}99,0 0 100px ${accent}44} }
        @keyframes cel-float { 0%,100%{transform:translateY(0)}50%{transform:translateY(-8px)} }
      `}</style>

      <Confetti />

      {/* Guide avatar with sparkle ring — the centrepiece */}
      <div style={{
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        animation: 'cel-pop 0.7s cubic-bezier(0.34,1.56,0.64,1) both',
      }}>
        {/* Outer sparkle ring */}
        <div style={{
          position: 'absolute',
          width: 190,
          height: 190,
          borderRadius: '50%',
          border: `3px solid ${accent}`,
          animation: 'cel-glow 2s ease-in-out infinite',
        }} />
        {/* Inner ring */}
        <div style={{
          position: 'absolute',
          width: 172,
          height: 172,
          borderRadius: '50%',
          border: `1.5px solid ${accent}66`,
        }} />
        {/* Avatar */}
        <img
          src={guideAvatar?.image || '/avatars/sage.png'}
          alt={guideAvatar?.name || 'Guide'}
          style={{
            width: 156,
            height: 156,
            borderRadius: '50%',
            objectFit: 'cover',
            border: `4px solid ${accent}`,
            display: 'block',
            animation: 'cel-float 3s ease-in-out infinite',
          }}
          draggable={false}
        />
      </div>

      {/* "You did it!" */}
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
        You did it!
      </h2>

      {/* Badge card */}
      <div style={{
        opacity: phase >= 1 ? 1 : 0,
        transform: phase >= 1 ? 'scale(1)' : 'scale(0.85)',
        transition: 'all 0.5s cubic-bezier(0.34,1.56,0.64,1) 0.1s',
        background: `linear-gradient(135deg, ${guideAvatar?.color || '#1a0a2e'}, rgba(252,211,77,0.08))`,
        border: '2px solid #FCD34D55',
        borderRadius: 20,
        padding: '18px 24px',
        maxWidth: 340,
        width: '100%',
        boxShadow: '0 8px 32px rgba(252,211,77,0.15)',
      }}>
        <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.8rem', fontWeight: 700, margin: '0 0 6px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
          Badge Earned
        </p>
        <p style={{ color: '#FCD34D', fontSize: '1.35rem', fontWeight: 900, margin: '0 0 8px' }}>
          {badgeName}
        </p>
        <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.95rem', lineHeight: 1.5, margin: 0 }}>
          {text}
        </p>
      </div>

      {/* Keep going button */}
      <button
        onClick={() => navigate('/child/dashboard')}
        style={{
          opacity: phase >= 2 ? 1 : 0,
          transform: phase >= 2 ? 'scale(1)' : 'scale(0.85)',
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
        Keep going!
      </button>
    </div>
  );
}
