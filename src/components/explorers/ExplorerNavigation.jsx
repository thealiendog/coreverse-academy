// ExplorerNavigation — bottom nav bar for ExplorerLessonPlayer
// Back arrow | progress dots | audio toggle | next arrow (+countdown badge)

export default function ExplorerNavigation({
  screenIdx, total, accent, audioEnabled, speaking,
  onBack, onNext, onToggleAudio, isCelebration, countdown,
}) {
  const btnBase = {
    width: 52, height: 52, borderRadius: '50%', border: 'none',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    cursor: 'pointer', touchAction: 'manipulation', flexShrink: 0,
    WebkitTapHighlightColor: 'transparent', fontSize: '1.4rem',
  };

  return (
    <div className="explorer-nav" style={{
      height: 72,
      flexShrink: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 10px',
      background: 'rgba(0,0,0,0.45)',
      borderTop: '1px solid rgba(255,255,255,0.07)',
      gap: 4,
    }}>
      {/* Back */}
      <button onClick={onBack} style={{ ...btnBase, background: 'rgba(255,255,255,0.09)', color: 'rgba(255,255,255,0.7)' }}>
        ‹
      </button>

      {/* Dots + audio toggle */}
      <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10 }}>
        {/* Progress dots */}
        <div style={{ display: 'flex', gap: 5, alignItems: 'center' }}>
          {Array.from({ length: total }).map((_, i) => (
            <div key={i} style={{
              width:      i === screenIdx ? 18 : 6,
              height:     6,
              borderRadius: 3,
              background: i === screenIdx ? accent : (i < screenIdx ? `${accent}66` : 'rgba(255,255,255,0.18)'),
              transition: 'width 0.3s ease, background 0.3s ease',
            }} />
          ))}
        </div>

        {/* Audio toggle */}
        <button
          onClick={onToggleAudio}
          style={{
            ...btnBase,
            width: 36, height: 36,
            background: audioEnabled ? `${accent}22` : 'rgba(255,255,255,0.07)',
            color:      audioEnabled ? accent : 'rgba(255,255,255,0.35)',
            fontSize:   '1rem',
          }}
        >
          {audioEnabled ? '🔊' : '🔇'}
        </button>
      </div>

      {/* Next — with countdown badge */}
      <div style={{ position: 'relative' }}>
        <button
          onClick={onNext}
          style={{
            ...btnBase,
            background: isCelebration ? '#10B981' : accent,
            color:      '#000',
            fontWeight: 700,
          }}
        >
          {isCelebration ? '🏠' : '›'}
        </button>

        {/* Countdown badge — appears during auto-advance countdown */}
        {countdown !== null && countdown > 0 && (
          <div style={{
            position:       'absolute',
            top:            -4,
            right:          -4,
            width:          22,
            height:         22,
            borderRadius:   '50%',
            background:     '#F59E0B',
            color:          '#000',
            fontSize:       '0.72rem',
            fontWeight:     800,
            display:        'flex',
            alignItems:     'center',
            justifyContent: 'center',
            pointerEvents:  'none',
            boxShadow:      '0 2px 8px rgba(245,158,11,0.6)',
          }}>
            {countdown}
          </div>
        )}
      </div>
    </div>
  );
}
