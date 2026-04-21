import { useState, useEffect } from 'react';

export default function FamilyScreen({ step, childName, guideAvatar }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 200);
    return () => clearTimeout(t);
  }, []);

  const text = (step.guideText || '').replace(/\{name\}/g, childName || 'friend');

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 24,
      padding: '28px 20px',
      opacity: visible ? 1 : 0,
      transform: visible ? 'scale(1)' : 'scale(0.95)',
      transition: 'all 0.5s cubic-bezier(0.34,1.56,0.64,1)',
    }}>
      {/* Family illustration */}
      {step.image && (
        <img
          src={step.image}
          alt=""
          style={{ width:'100%', maxWidth:360, maxHeight:200, objectFit:'cover', borderRadius:20 }}
          draggable={false}
        />
      )}

      {/* Family activity card */}
      <div style={{
        background: 'linear-gradient(135deg, #1a2a4a, #0d1a2e)',
        border: '2px solid #60A5FA55',
        borderRadius: 24,
        padding: '28px 24px',
        maxWidth: 420,
        width: '100%',
        boxShadow: '0 8px 32px rgba(96,165,250,0.15)',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <p style={{ color: '#60A5FA', fontWeight: 800, fontSize: '0.85rem', letterSpacing: '0.1em', margin: '0 0 12px', textTransform: 'uppercase' }}>
          Family Adventure
        </p>
        <p style={{
          color: '#fff',
          fontSize: 'clamp(1.1rem, 3vw, 1.35rem)',
          lineHeight: 1.6,
          margin: 0,
          fontWeight: 600,
        }}>
          {text}
        </p>
      </div>

    </div>
  );
}
