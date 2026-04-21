import { useEffect, useState } from 'react';

// Image grid — used when step.images is an array of paths
function ImageGrid({ images, labels }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
      {images.map((src, i) => (
        <div key={i} style={{ textAlign: 'center' }}>
          <img
            src={src}
            alt={labels?.[i] || ''}
            style={{ width: '100%', aspectRatio: '1', objectFit: 'cover', borderRadius: 14, display: 'block' }}
            draggable={false}
          />
          {labels?.[i] && (
            <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.85rem', fontWeight: 700, margin: '5px 0 0' }}>
              {labels[i]}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}

export default function StoryScreen({ step, childName, guideAvatar, onComplete, speaking, disabled }) {
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

  const text = (step.guideText || '').replace(/\{name\}/g, childName || 'friend');

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 20,
      padding: '16px 20px',
      opacity: visible ? 1 : 0,
      transform: visible ? 'translateY(0)' : 'translateY(20px)',
      transition: 'all 0.5s ease',
    }}>
      {/* Image grid (multiple images) */}
      {step.images?.length > 0 && (
        <div style={{ width: '100%', maxWidth: 360 }}>
          <ImageGrid images={step.images} labels={step.imageLabels} />
        </div>
      )}

      {/* Single image */}
      {!step.images && step.image && (
        <img
          src={step.image}
          alt=""
          style={{ width: '100%', maxWidth: 360, borderRadius: 20, objectFit: 'cover', maxHeight: 220 }}
          draggable={false}
        />
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
        onClick={() => { if (!disabled) onComplete(); }}
        style={{
          background: 'rgba(255,255,255,0.08)',
          color: disabled ? 'rgba(255,255,255,0.2)' : 'rgba(255,255,255,0.5)',
          border: '1px solid rgba(255,255,255,0.15)',
          borderRadius: 100,
          padding: '10px 28px',
          fontSize: '0.9rem',
          fontWeight: 600,
          cursor: disabled ? 'default' : 'pointer',
          pointerEvents: disabled ? 'none' : 'auto',
        }}
      >
        Continue →
      </button>
    </div>
  );
}
