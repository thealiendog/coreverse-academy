// RealWorldConnection — Phase 5: family adventure + creative prompt
export default function RealWorldConnection({ screen, guideAvatar, speaking, accent, onReplay }) {
  return (
    <div style={{ height: '100%', overflowY: 'auto', padding: '24px 18px', display: 'flex', flexDirection: 'column', gap: 20 }}>
      {/* Guide intro */}
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
        <img src={guideAvatar?.image || '/avatars/sage.png'} alt="" style={{ width: 52, height: 52, borderRadius: '50%', objectFit: 'cover', border: `2px solid ${accent}`, flexShrink: 0 }} />
        <div style={{ background: 'rgba(255,255,255,0.06)', border: `1px solid ${accent}33`, borderRadius: 14, padding: '12px 14px', fontSize: '0.95rem', color: 'rgba(255,255,255,0.85)', lineHeight: 1.6 }}>
          {screen.guideText}
        </div>
      </div>

      {/* Family Adventure */}
      {screen.familyAdventure && (
        <div style={{ background: 'rgba(245,158,11,0.1)', border: '1.5px solid #F59E0B44', borderRadius: 16, padding: '18px 16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
            <span style={{ fontSize: '1.4rem' }}>🏠</span>
            <span style={{ color: '#F59E0B', fontWeight: 700, fontSize: '0.9rem', letterSpacing: '0.04em', textTransform: 'uppercase' }}>Family Adventure</span>
          </div>
          <p style={{ color: 'rgba(255,255,255,0.85)', lineHeight: 1.65, fontSize: '0.97rem', margin: 0 }}>{screen.familyAdventure}</p>
        </div>
      )}

      {/* Creative Prompt */}
      {screen.creativePrompt && (
        <div style={{ background: 'rgba(167,139,250,0.1)', border: '1.5px solid #A78BFA44', borderRadius: 16, padding: '18px 16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
            <span style={{ fontSize: '1.4rem' }}>✏️</span>
            <span style={{ color: '#A78BFA', fontWeight: 700, fontSize: '0.9rem', letterSpacing: '0.04em', textTransform: 'uppercase' }}>Create Something</span>
          </div>
          <p style={{ color: 'rgba(255,255,255,0.85)', lineHeight: 1.65, fontSize: '0.97rem', margin: 0 }}>{screen.creativePrompt}</p>
        </div>
      )}
    </div>
  );
}
