import { useEffect, useState } from 'react';

// Simple emoji-based illustrations keyed by name
const ILLUSTRATIONS = {
  'four-faces': () => (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, justifyItems: 'center' }}>
      {['😊 Happy', '😢 Sad', '😠 Angry', '😨 Scared'].map((f, i) => (
        <div key={i} style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '3.5rem', lineHeight: 1 }}>{f.split(' ')[0]}</div>
          <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem', marginTop: 6, fontWeight: 700 }}>{f.split(' ')[1]}</div>
        </div>
      ))}
    </div>
  ),
  'clouds': () => (
    <div style={{ textAlign: 'center' }}>
      <div style={{ fontSize: '3rem', letterSpacing: 8 }}>☀️🌤️⛅🌧️</div>
      <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem', marginTop: 8 }}>Feelings change like weather!</p>
    </div>
  ),
  'hearts': () => (
    <div style={{ textAlign: 'center', fontSize: '3rem', letterSpacing: 6 }}>
      💛 🧡 ❤️ 💙 💚 💜
    </div>
  ),
  'body': () => (
    <div style={{ textAlign: 'center', fontSize: '4rem' }}>🧍</div>
  ),
  'star': () => (
    <div style={{ textAlign: 'center', fontSize: '4rem' }}>⭐</div>
  ),
};

export default function StoryScreen({ step, childName, guideAvatar, onComplete, speaking }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(false);
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, [step]);

  // Auto-advance 2s after guide finishes speaking (or 6s timeout fallback)
  useEffect(() => {
    if (!speaking) {
      const t = setTimeout(onComplete, 2000);
      return () => clearTimeout(t);
    }
  }, [speaking, onComplete]);

  const Illustration = step.illustration ? ILLUSTRATIONS[step.illustration] : null;
  const text = (step.guideText || '').replace(/\{name\}/g, childName || 'friend');

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 24,
      padding: '20px 20px',
      opacity: visible ? 1 : 0,
      transform: visible ? 'translateY(0)' : 'translateY(20px)',
      transition: 'all 0.5s ease',
    }}>
      {/* Illustration */}
      {Illustration && (
        <div style={{
          background: 'rgba(255,255,255,0.05)',
          borderRadius: 20,
          padding: '24px 32px',
          width: '100%',
          maxWidth: 380,
        }}>
          <Illustration />
        </div>
      )}

      {/* Story text */}
      <div style={{
        background: `linear-gradient(135deg, ${guideAvatar?.color || '#1a0a2e'}88, rgba(255,255,255,0.04))`,
        border: `1.5px solid ${guideAvatar?.accent || '#7C3AED'}33`,
        borderRadius: 20,
        padding: '20px 24px',
        maxWidth: 440,
        width: '100%',
      }}>
        <p style={{
          color: 'rgba(255,255,255,0.92)',
          fontSize: 'clamp(1.1rem, 3vw, 1.3rem)',
          lineHeight: 1.6,
          margin: 0,
          fontWeight: 600,
          textAlign: 'center',
        }}>
          {text}
        </p>
      </div>

      {/* Tap to continue hint */}
      <button
        onClick={onComplete}
        style={{
          background: 'rgba(255,255,255,0.08)',
          color: 'rgba(255,255,255,0.5)',
          border: '1px solid rgba(255,255,255,0.15)',
          borderRadius: 100,
          padding: '10px 28px',
          fontSize: '0.9rem',
          fontWeight: 600,
          cursor: 'pointer',
        }}
      >
        Continue →
      </button>
    </div>
  );
}
