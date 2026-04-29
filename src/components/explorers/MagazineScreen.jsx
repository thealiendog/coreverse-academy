// MagazineScreen — Phase 2: image + headline + karaoke paragraphs + vocab

// Render paragraphs with per-word karaoke highlighting and tappable vocab words.
// globalWordIdx tracks position across ALL paragraphs (matching speak()'s joined text).
function renderParagraphs(paragraphs, vocab, karaokeIdx, accent, onVocabTap) {
  const vocabMap = new Map((vocab || []).map(v => [v.word.toLowerCase(), v]));
  let wordCount = 0;

  return paragraphs.map((para, pIdx) => {
    const chunks = para.split(/(\s+)/);
    const spans = chunks.map((chunk, cIdx) => {
      if (!chunk) return null;
      if (/^\s+$/.test(chunk)) return <span key={cIdx}>{chunk}</span>;

      const thisIdx  = wordCount++;
      const isActive = thisIdx === karaokeIdx;
      const cleanKey = chunk.toLowerCase().replace(/[^a-z]/g, '');
      const vocabEntry = vocabMap.get(cleanKey);

      return (
        <span
          key={cIdx}
          onClick={vocabEntry ? () => onVocabTap(vocabEntry) : undefined}
          style={{
            color:           isActive ? accent : (vocabEntry ? '#60A5FA' : 'inherit'),
            textShadow:      isActive ? `0 0 14px ${accent}99` : 'none',
            textDecoration:  vocabEntry && !isActive ? 'underline dotted' : 'none',
            textDecorationColor: '#60A5FA',
            cursor:          vocabEntry ? 'pointer' : 'default',
            fontWeight:      isActive ? 700 : 'inherit',
            transition:      'color 0.08s ease, text-shadow 0.08s ease',
          }}
        >
          {chunk}
        </span>
      );
    });

    return (
      <p key={pIdx} style={{ color: 'rgba(255,255,255,0.85)', lineHeight: 1.75, marginBottom: 16, fontSize: '1.02rem' }}>
        {spans}
      </p>
    );
  });
}

export default function MagazineScreen({
  screen, guideAvatar, speaking, loadingAudio, karaokeWords, karaokeIdx,
  accent, onReplay, onVocabTap,
}) {
  const { section, totalSections, headline, paragraphs = [], image, imageCaption, vocab = [] } = screen;

  return (
    <div style={{ height: '100%', overflowY: 'auto', overscrollBehavior: 'contain', WebkitOverflowScrolling: 'touch' }}>
      {/* Hero image */}
      <div style={{ position: 'relative', width: '100%', aspectRatio: '16/9', background: '#111827', flexShrink: 0 }}>
        <img
          src={image}
          alt={headline}
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          onError={e => { e.currentTarget.style.opacity = '0.2'; }}
        />
        {/* Section badge */}
        <div style={{
          position:     'absolute',
          top:          12,
          left:         12,
          background:   `${accent}dd`,
          borderRadius: 20,
          padding:      '4px 12px',
          fontSize:     '0.75rem',
          fontWeight:   700,
          color:        '#000',
          letterSpacing: '0.04em',
        }}>
          {section} of {totalSections}
        </div>
        {/* Audio replay */}
        <button
          onClick={onReplay}
          style={{
            position:     'absolute',
            top:          10,
            right:        10,
            width:        38,
            height:       38,
            borderRadius: '50%',
            border:       'none',
            background:   (speaking || loadingAudio) ? accent : 'rgba(0,0,0,0.5)',
            color:        (speaking || loadingAudio) ? '#000' : 'rgba(255,255,255,0.8)',
            fontSize:     '1rem',
            cursor:       'pointer',
            display:      'flex',
            alignItems:   'center',
            justifyContent: 'center',
            touchAction:  'manipulation',
            transition:   'background 0.2s',
          }}
        >
          {(speaking || loadingAudio) ? '⏸' : '▶'}
        </button>
      </div>

      {/* Caption */}
      {imageCaption && (
        <div style={{ padding: '6px 16px', fontSize: '0.78rem', color: 'rgba(255,255,255,0.38)', fontStyle: 'italic', textAlign: 'center' }}>
          {imageCaption}
        </div>
      )}

      {/* Content */}
      <div style={{ padding: '16px 18px 24px' }}>
        {/* Headline */}
        <h2 style={{
          fontSize:     '1.45rem',
          fontWeight:   800,
          color:        '#fff',
          marginBottom: 18,
          lineHeight:   1.25,
          letterSpacing: '-0.02em',
        }}>
          {headline}
        </h2>

        {/* Paragraphs with karaoke */}
        <div>
          {renderParagraphs(paragraphs, vocab, karaokeIdx, accent, onVocabTap)}
        </div>

        {/* Vocab chips */}
        {vocab.length > 0 && (
          <div style={{ marginTop: 8 }}>
            <div style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.35)', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 8 }}>
              Tap to explore
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {vocab.map((v, i) => (
                <button
                  key={i}
                  onClick={() => onVocabTap(v)}
                  style={{
                    padding:      '6px 14px',
                    borderRadius: 20,
                    border:       '1.5px solid #60A5FA55',
                    background:   '#60A5FA11',
                    color:        '#60A5FA',
                    fontSize:     '0.85rem',
                    fontWeight:   600,
                    cursor:       'pointer',
                    touchAction:  'manipulation',
                  }}
                >
                  {v.word}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Bottom padding so nav doesn't overlap last content */}
      <div style={{ height: 8 }} />
    </div>
  );
}
