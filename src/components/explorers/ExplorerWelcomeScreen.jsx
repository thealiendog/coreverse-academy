// ExplorerWelcomeScreen — Phase 1: guide greets the child

function renderKaraokeText(text, karaokeWords, karaokeIdx, accent) {
  if (!karaokeWords?.length || !text) {
    return <span style={{ color: 'rgba(255,255,255,0.88)' }}>{text}</span>;
  }
  const chunks = text.split(/(\s+)/);
  let wordCount = 0;
  return chunks.map((chunk, i) => {
    if (!chunk || /^\s+$/.test(chunk)) return <span key={i}>{chunk}</span>;
    const idx = wordCount++;
    const active = idx === karaokeIdx;
    return (
      <span key={i} style={{
        color:      active ? accent : 'rgba(255,255,255,0.88)',
        textShadow: active ? `0 0 14px ${accent}99` : 'none',
        fontWeight: active ? 700 : 'inherit',
        transition: 'color 0.08s ease, text-shadow 0.08s ease',
      }}>
        {chunk}
      </span>
    );
  });
}

export default function ExplorerWelcomeScreen({
  screen, guideAvatar, speaking, loadingAudio, karaokeWords, karaokeIdx, accent, onReplay,
}) {
  return (
    <div style={{
      height:         '100%',
      display:        'flex',
      flexDirection:  'column',
      alignItems:     'center',
      justifyContent: 'center',
      padding:        '24px 20px',
      gap:            24,
      overflowY:      'auto',
    }}>
      {/* Guide avatar */}
      <div style={{ position: 'relative', flexShrink: 0 }}>
        {/* Pulse ring */}
        {(speaking || loadingAudio) && (
          <div style={{
            position:     'absolute',
            inset:        -8,
            borderRadius: '50%',
            border:       `3px solid ${accent}`,
            animation:    loadingAudio
              ? 'ex-ring 0.7s ease-in-out infinite'
              : 'ex-ring 1.3s ease-in-out infinite',
            pointerEvents: 'none',
            boxShadow:    `0 0 20px ${accent}55`,
          }} />
        )}
        <div
          onClick={onReplay}
          style={{
            width:        110,
            height:       110,
            borderRadius: '50%',
            overflow:     'hidden',
            border:       `3px solid ${speaking ? accent : accent + '55'}`,
            boxShadow:    speaking ? `0 0 24px ${accent}44` : `0 0 8px ${accent}22`,
            cursor:       'pointer',
            transition:   'border-color 0.3s, box-shadow 0.3s',
          }}
        >
          <img
            src={guideAvatar?.image || '/avatars/sage.png'}
            alt={guideAvatar?.name || 'Guide'}
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />
        </div>
      </div>

      {/* Guide name */}
      <div style={{ textAlign: 'center' }}>
        <div style={{ color: accent, fontSize: '0.85rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 4 }}>
          Your Guide
        </div>
        <div style={{ color: 'rgba(255,255,255,0.95)', fontSize: '1.5rem', fontWeight: 800 }}>
          {guideAvatar?.name || 'Sage'}
        </div>
      </div>

      {/* Speech bubble with karaoke */}
      <div style={{
        background:   'rgba(255,255,255,0.07)',
        border:       `1.5px solid ${accent}33`,
        borderRadius: 18,
        padding:      '20px 22px',
        maxWidth:     380,
        width:        '100%',
        fontSize:     '1.05rem',
        lineHeight:   1.7,
        position:     'relative',
      }}>
        {/* Bubble arrow pointing up toward avatar */}
        <div style={{
          position:    'absolute',
          top:         -10,
          left:        '50%',
          transform:   'translateX(-50%)',
          width:       0,
          height:      0,
          borderLeft:  '10px solid transparent',
          borderRight: '10px solid transparent',
          borderBottom: `10px solid ${accent}33`,
        }} />
        {renderKaraokeText(screen.guideText, karaokeWords, karaokeIdx, accent)}
      </div>

      {/* Tap to continue hint */}
      {!speaking && (
        <div style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.8rem', letterSpacing: '0.05em' }}>
          Tap › to continue
        </div>
      )}
    </div>
  );
}
