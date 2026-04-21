import { useEffect, useState } from 'react';

// Emoji fallbacks when no image is provided
const EMOJI_VISUALS = {
  clouds:  '☀️ 🌤️ ⛅ 🌧️',
  hearts:  '💛 🧡 ❤️ 💙 💚 💜',
  body:    '🧍',
  star:    '⭐ 🌟 ✨',
  brain:   '🧠',
  growth:  '🌱 🌿 🌳',
  money:   '💰 💵 🪙',
  globe:   '🌍 🌎 🌏',
  science: '🔬 ⚗️ 🧪',
  music:   '🎵 🎶 🎼',
  book:    '📚 📖',
  art:     '🎨 🖼️ ✏️',
};

export default function TeachScreen({ step, childName, guideAvatar, onComplete, speaking }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(false);
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, [step]);

  // Auto-advance 3s after speaking ends, or 6s fallback
  useEffect(() => {
    if (!speaking) {
      const t = setTimeout(onComplete, 3000);
      return () => clearTimeout(t);
    }
  }, [speaking, onComplete]);

  const emojiVisual = !step.image && step.visual ? (EMOJI_VISUALS[step.visual] || step.visual) : null;
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

      {/* Emoji fallback */}
      {emojiVisual && (
        <div style={{
          fontSize: '3rem',
          textAlign: 'center',
          letterSpacing: 8,
          padding: '16px 24px',
          background: 'rgba(255,255,255,0.04)',
          borderRadius: 20,
          animation: 'teach-pulse 2s ease-in-out infinite',
        }}>
          {emojiVisual}
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
        onClick={onComplete}
        style={{
          background: 'rgba(255,255,255,0.07)',
          color: 'rgba(255,255,255,0.45)',
          border: '1px solid rgba(255,255,255,0.12)',
          borderRadius: 100,
          padding: '8px 24px',
          fontSize: '0.85rem',
          fontWeight: 600,
          cursor: 'pointer',
        }}
      >
        Got it →
      </button>
    </div>
  );
}
