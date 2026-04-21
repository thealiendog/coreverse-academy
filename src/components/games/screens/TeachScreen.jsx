import { useEffect, useState, useRef } from 'react';

// Text label fallbacks when no image is provided (no emoji)
const TEXT_VISUALS = {
  clouds:  'Feelings change like weather',
  hearts:  'All feelings are okay',
  body:    'Listen to your body',
  star:    'You are a star',
  brain:   'Your amazing brain',
  growth:  'Keep growing',
  money:   'Save and spend wisely',
  globe:   'Our big world',
  science: 'Ask questions',
  music:   'Express yourself',
  book:    'Words have power',
  art:     'Create something beautiful',
};

export default function TeachScreen({ step, childName, guideAvatar, onComplete, speaking, disabled }) {
  const [visible, setVisible] = useState(false);
  const hasSpoken = useRef(false);

  useEffect(() => {
    setVisible(false);
    hasSpoken.current = false;
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, [step]);

  useEffect(() => {
    if (speaking) hasSpoken.current = true;
  }, [speaking]);

  // Auto-advance 1.5s after audio FULLY ends
  useEffect(() => {
    if (!speaking && hasSpoken.current) {
      const t = setTimeout(onComplete, 1500);
      return () => clearTimeout(t);
    }
  }, [speaking, onComplete]);

  const textVisual = !step.image && step.visual ? (TEXT_VISUALS[step.visual] || step.visual) : null;
  const text = (step.guideText || '').replace(/\{name\}/g, childName || 'friend');

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 20,
      padding: '20px 20px',
      opacity: visible ? 1 : 0,
      transform: visible ? 'translateY(0)' : 'translateY(16px)',
      transition: 'all 0.45s ease',
    }}>
      <style>{`@keyframes teach-pulse{0%,100%{transform:scale(1)}50%{transform:scale(1.04)}}`}</style>

      {/* Midjourney image */}
      {step.image && (
        <img
          src={step.image}
          alt=""
          style={{
            width: '100%',
            maxWidth: 360,
            maxHeight: 240,
            objectFit: 'cover',
            borderRadius: 20,
            animation: 'teach-pulse 3s ease-in-out infinite',
          }}
          draggable={false}
        />
      )}

      {/* Text visual fallback (no image) */}
      {textVisual && (
        <div style={{
          padding: '16px 24px',
          background: 'rgba(255,255,255,0.04)',
          borderRadius: 20,
          textAlign: 'center',
          color: guideAvatar?.accent || '#A78BFA',
          fontWeight: 800,
          fontSize: '1.1rem',
          letterSpacing: '0.02em',
          animation: 'teach-pulse 2s ease-in-out infinite',
        }}>
          {textVisual}
        </div>
      )}

      {/* Teach text */}
      <div style={{
        background: `linear-gradient(135deg, ${guideAvatar?.color || '#1a0a2e'}cc, rgba(255,255,255,0.03))`,
        border: `2px solid ${guideAvatar?.accent || '#7C3AED'}55`,
        borderRadius: 24,
        padding: '22px 28px',
        maxWidth: 440,
        width: '100%',
        boxShadow: `0 0 40px ${guideAvatar?.accent || '#7C3AED'}22`,
      }}>
        <p style={{
          color: '#fff',
          fontSize: 'clamp(1.2rem, 3.5vw, 1.5rem)',
          lineHeight: 1.55,
          margin: 0,
          fontWeight: 700,
          textAlign: 'center',
        }}>
          {text}
        </p>
      </div>

      <button
        onClick={() => { if (!disabled) onComplete(); }}
        style={{
          background: 'rgba(255,255,255,0.07)',
          color: disabled ? 'rgba(255,255,255,0.2)' : 'rgba(255,255,255,0.45)',
          border: '1px solid rgba(255,255,255,0.12)',
          borderRadius: 100,
          padding: '8px 24px',
          fontSize: '0.85rem',
          fontWeight: 600,
          cursor: disabled ? 'default' : 'pointer',
          pointerEvents: disabled ? 'none' : 'auto',
        }}
      >
        Got it →
      </button>
    </div>
  );
}
