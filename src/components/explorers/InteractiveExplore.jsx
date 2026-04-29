// InteractiveExplore — Day 5 placeholder
export default function InteractiveExplore({ screen, accent }) {
  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '32px 24px', gap: 16, textAlign: 'center' }}>
      <div style={{ fontSize: '3.5rem' }}>🎮</div>
      <div style={{ fontSize: '1.3rem', fontWeight: 800, color: '#fff' }}>Interactive Activity</div>
      <div style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.45)', maxWidth: 280, lineHeight: 1.6 }}>
        {screen?.instruction || 'Coming in Day 5!'}
      </div>
      <div style={{ padding: '8px 20px', borderRadius: 20, background: `${accent}22`, border: `1px solid ${accent}44`, color: accent, fontSize: '0.82rem', fontWeight: 600, letterSpacing: '0.04em' }}>
        Coming Day 5
      </div>
    </div>
  );
}
