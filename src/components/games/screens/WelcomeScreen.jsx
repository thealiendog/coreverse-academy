import { useState, useEffect } from 'react';
import { sfx } from '../sounds';

export default function WelcomeScreen({ step, childName, guideAvatar, onComplete }) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setReady(true), 300);
    return () => clearTimeout(t);
  }, []);

  const greeting = (step.guideText || 'Welcome!')
    .replace(/\{name\}/g, childName || 'friend');

  const accent = guideAvatar?.accent || '#34D399';

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '65vh',
      gap: 24,
      padding: '24px 20px',
    }}>
      <style>{`
        @keyframes ws-float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px)} }
        @keyframes ws-ring  { 0%,100%{opacity:0.5;transform:scale(1)} 50%{opacity:0.9;transform:scale(1.06)} }
      `}</style>

      {/* Guide avatar — large, centered, floating */}
      <div style={{
        opacity: ready ? 1 : 0,
        transform: ready ? 'scale(1)' : 'scale(0.75)',
        transition: 'all 0.65s cubic-bezier(0.34,1.56,0.64,1)',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        {/* Glow ring */}
        <div style={{
          position: 'absolute',
          width: 224,
          height: 224,
          borderRadius: '50%',
          border: `3px solid ${accent}`,
          boxShadow: `0 0 40px ${accent}66, 0 0 80px ${accent}33`,
          animation: 'ws-ring 2.5s ease-in-out infinite',
        }} />
        {/* Avatar image */}
        <img
          src={guideAvatar?.image || '/avatars/sage.png'}
          alt={guideAvatar?.name || 'Guide'}
          style={{
            width: 200,
            height: 200,
            borderRadius: '50%',
            objectFit: 'cover',
            border: `4px solid ${accent}`,
            boxShadow: `0 0 24px ${accent}88`,
            animation: 'ws-float 3.5s ease-in-out infinite',
            display: 'block',
          }}
          draggable={false}
        />
      </div>

      {/* Title */}
      <h1 style={{
        opacity: ready ? 1 : 0,
        transform: ready ? 'translateY(0)' : 'translateY(16px)',
        transition: 'all 0.5s ease 0.15s',
        fontSize: 'clamp(1.5rem, 5vw, 2.2rem)',
        fontWeight: 900,
        color: '#fff',
        margin: 0,
        lineHeight: 1.2,
        textAlign: 'center',
        textShadow: `0 0 28px ${accent}88`,
      }}>
        {step.title || `Hello, ${childName || 'friend'}!`}
      </h1>

      {/* Guide greeting */}
      <div style={{
        opacity: ready ? 1 : 0,
        transform: ready ? 'translateY(0)' : 'translateY(12px)',
        transition: 'all 0.5s ease 0.25s',
        background: 'rgba(255,255,255,0.06)',
        border: `2px solid ${accent}44`,
        borderRadius: 20,
        padding: '18px 22px',
        maxWidth: 400,
        width: '100%',
        textAlign: 'center',
      }}>
        <p style={{
          color: 'rgba(255,255,255,0.92)',
          fontSize: 'clamp(1.05rem, 3vw, 1.3rem)',
          lineHeight: 1.55,
          margin: 0,
          fontWeight: 600,
        }}>
          {greeting}
        </p>
      </div>

      {/* Let's go button */}
      <button
        onClick={() => { sfx.chime(); onComplete(); }}
        style={{
          opacity: ready ? 1 : 0,
          transform: ready ? 'scale(1)' : 'scale(0.8)',
          transition: 'all 0.55s cubic-bezier(0.34,1.56,0.64,1) 0.38s',
          background: `linear-gradient(135deg, ${accent}, ${accent}cc)`,
          color: '#fff',
          border: 'none',
          borderRadius: 100,
          padding: '18px 52px',
          fontSize: '1.35rem',
          fontWeight: 900,
          cursor: 'pointer',
          boxShadow: `0 8px 32px ${accent}66`,
          letterSpacing: '0.02em',
        }}
      >
        Let&apos;s go!
      </button>
    </div>
  );
}
