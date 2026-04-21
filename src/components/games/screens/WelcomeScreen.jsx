import { useState, useEffect } from 'react';
import { sfx } from '../sounds';

export default function WelcomeScreen({ step, childName, guideAvatar, onComplete }) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setReady(true), 600);
    return () => clearTimeout(t);
  }, []);

  const greeting = (step.guideText || 'Welcome!')
    .replace(/\{name\}/g, childName || 'friend');

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '60vh',
      gap: 28,
      padding: '24px 20px',
    }}>
      {/* Animated title */}
      <div style={{
        opacity: ready ? 1 : 0,
        transform: ready ? 'translateY(0) scale(1)' : 'translateY(30px) scale(0.9)',
        transition: 'all 0.6s cubic-bezier(0.34,1.56,0.64,1)',
        textAlign: 'center',
      }}>
        <div style={{ fontSize: '4rem', marginBottom: 8 }}>
          {guideAvatar?.emoji || '✨'}
        </div>
        <h1 style={{
          fontSize: 'clamp(1.6rem, 5vw, 2.4rem)',
          fontWeight: 900,
          color: '#fff',
          margin: 0,
          lineHeight: 1.2,
          textShadow: `0 0 30px ${guideAvatar?.accent || '#7C3AED'}88`,
        }}>
          {step.title || `Hello, ${childName || 'friend'}!`}
        </h1>
      </div>

      {/* Guide greeting card */}
      <div style={{
        opacity: ready ? 1 : 0,
        transform: ready ? 'translateY(0)' : 'translateY(20px)',
        transition: 'all 0.5s ease 0.2s',
        background: 'rgba(255,255,255,0.06)',
        border: `2px solid ${guideAvatar?.accent || '#7C3AED'}44`,
        borderRadius: 20,
        padding: '20px 24px',
        maxWidth: 420,
        width: '100%',
        textAlign: 'center',
      }}>
        <p style={{
          color: 'rgba(255,255,255,0.9)',
          fontSize: 'clamp(1.1rem, 3vw, 1.4rem)',
          lineHeight: 1.5,
          margin: 0,
          fontWeight: 600,
        }}>
          {greeting}
        </p>
      </div>

      {/* Let's Go button */}
      <button
        onClick={() => { sfx.chime(); onComplete(); }}
        style={{
          opacity: ready ? 1 : 0,
          transform: ready ? 'scale(1)' : 'scale(0.8)',
          transition: 'all 0.5s cubic-bezier(0.34,1.56,0.64,1) 0.4s',
          background: `linear-gradient(135deg, ${guideAvatar?.accent || '#7C3AED'}, ${guideAvatar?.accent || '#7C3AED'}cc)`,
          color: '#fff',
          border: 'none',
          borderRadius: 100,
          padding: '18px 48px',
          fontSize: '1.4rem',
          fontWeight: 900,
          cursor: 'pointer',
          boxShadow: `0 8px 32px ${guideAvatar?.accent || '#7C3AED'}66`,
          letterSpacing: '0.02em',
        }}
      >
        Let&apos;s go! 🚀
      </button>
    </div>
  );
}
