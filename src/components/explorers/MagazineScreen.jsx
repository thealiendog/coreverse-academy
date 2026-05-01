// MagazineScreen — Phase 2: image + headline + karaoke paragraphs + vocab + inline hint
// Responsive: single-column on mobile, two-column on iPad landscape (CSS classes from ExplorerLessonPlayer style block)

function renderParagraphs(paragraphs, vocab, karaokeIdx, accent, onVocabTap, showVocabHint) {
  const vocabMap = new Map((vocab || []).map(v => [v.word.toLowerCase(), v]));
  let wordCount = 0;
  let firstVocabPulsed = false; // only the very first vocab word gets the tutorial pulse

  return paragraphs.map((para, pIdx) => {
    const chunks = para.split(/(\s+)/);
    const spans = chunks.map((chunk, cIdx) => {
      if (!chunk) return null;
      if (/^\s+$/.test(chunk)) return <span key={cIdx}>{chunk}</span>;

      const thisIdx  = wordCount++;
      const isActive = thisIdx === karaokeIdx;
      const cleanKey = chunk.toLowerCase().replace(/[^a-z]/g, '');
      const vocabEntry = vocabMap.get(cleanKey);

      // First vocab word gets a pulsing glow during the one-time tutorial
      const isTutorialTarget = vocabEntry && showVocabHint && !firstVocabPulsed;
      if (isTutorialTarget) firstVocabPulsed = true;

      return (
        <span
          key={cIdx}
          className={isTutorialTarget ? 'vocab-tutorial-pulse' : undefined}
          onClick={vocabEntry ? () => onVocabTap(vocabEntry) : undefined}
          style={{
            color:           isActive ? accent : (vocabEntry ? '#60A5FA' : 'inherit'),
            textShadow:      isActive ? `0 0 14px ${accent}99` : 'none',
            textDecoration:  vocabEntry && !isActive ? 'underline dotted' : 'none',
            textDecorationColor: '#60A5FA',
            cursor:          vocabEntry ? 'pointer' : 'default',
            fontWeight:      isActive ? 700 : (isTutorialTarget ? 700 : 'inherit'),
            transition:      'color 0.08s ease, text-shadow 0.08s ease',
          }}
        >
          {chunk}
        </span>
      );
    });

    return (
      <p key={pIdx} className="mag-para" style={{ color: 'rgba(255,255,255,0.85)', lineHeight: 1.75, marginBottom: 16, fontSize: '1.02rem' }}>
        {spans}
      </p>
    );
  });
}

export default function MagazineScreen({
  screen, guideAvatar, speaking, loadingAudio, audioPaused, karaokeWords, karaokeIdx,
  accent, onReplay, onPauseResume, onVocabTap, showVocabHint, onDismissVocabHint,
}) {
  const { section, totalSections, headline, paragraphs = [], image, imageCaption, vocab = [] } = screen;

  return (
    <div className="magazine-outer">
      {/* Image column — full-width on mobile, left-side on iPad landscape */}
      <div className="magazine-image-col">
        <img
          src={image}
          alt={headline}
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          onError={e => { e.currentTarget.style.opacity = '0.2'; }}
        />
        {/* Pause / Resume / Replay button */}
        <button
          className="mag-replay-btn"
          onClick={audioPaused || speaking ? onPauseResume : onReplay}
          style={{
            position: 'absolute', top: 10, right: 10,
            width: 38, height: 38, borderRadius: '50%', border: 'none',
            background: (speaking || loadingAudio || audioPaused) ? accent : 'rgba(0,0,0,0.5)',
            color:      (speaking || loadingAudio || audioPaused) ? '#000' : 'rgba(255,255,255,0.8)',
            fontSize: '1rem', cursor: 'pointer', display: 'flex',
            alignItems: 'center', justifyContent: 'center',
            touchAction: 'manipulation', transition: 'background 0.2s',
          }}
        >
          {audioPaused ? '▶' : (speaking || loadingAudio) ? '⏸' : '▶'}
        </button>
        {/* Caption — shown inside image col on mobile, same on desktop */}
        {imageCaption && (
          <div style={{
            position: 'absolute', bottom: 0, left: 0, right: 0,
            padding: '6px 14px', fontSize: '0.75rem',
            color: 'rgba(255,255,255,0.6)', fontStyle: 'italic',
            textAlign: 'center',
            background: 'linear-gradient(transparent, rgba(0,0,0,0.55))',
          }}>
            {imageCaption}
          </div>
        )}
      </div>

      {/* Text column — below image on mobile, right-side on iPad landscape */}
      <div className="magazine-text-col">
        {/* Section badge — above headline, integrated in text flow */}
        <div style={{
          display: 'inline-flex', alignItems: 'center',
          background: `${accent}22`, border: `1.5px solid ${accent}55`,
          borderRadius: 20, padding: '4px 14px', marginBottom: 14,
          fontSize: '0.75rem', fontWeight: 700, color: accent, letterSpacing: '0.05em',
        }}>
          Section {section} of {totalSections}
        </div>

        {/* Headline */}
        <h2 className="mag-headline" style={{
          fontSize: '1.45rem', fontWeight: 800, color: '#fff',
          marginBottom: 18, lineHeight: 1.25, letterSpacing: '-0.02em',
          marginTop: 0,
        }}>
          {headline}
        </h2>

        {/* Paragraphs with karaoke */}
        <div>
          {renderParagraphs(paragraphs, vocab, karaokeIdx, accent, onVocabTap, showVocabHint)}
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
                    padding: '6px 14px', borderRadius: 20,
                    border: '1.5px solid #60A5FA55', background: '#60A5FA11',
                    color: '#60A5FA', fontSize: '0.85rem', fontWeight: 600,
                    cursor: 'pointer', touchAction: 'manipulation',
                  }}
                >
                  {v.word}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Vocab hint — inline, below chips, never overlaps content */}
        {showVocabHint && vocab.length > 0 && (
          <div
            onClick={onDismissVocabHint}
            style={{
              marginTop: 16,
              padding: '12px 16px',
              background: `${accent}18`,
              border: `1.5px solid ${accent}66`,
              borderRadius: 14,
              display: 'flex',
              alignItems: 'center',
              gap: 10,
              cursor: 'pointer',
              animation: 'hint-in 0.4s cubic-bezier(0.34,1.56,0.64,1) both',
              touchAction: 'manipulation',
            }}
          >
            <span style={{ fontSize: '1.3rem', animation: 'hint-bounce 1.2s ease-in-out infinite', display: 'inline-block', flexShrink: 0 }}>
              ☝️
            </span>
            <span style={{ color: accent, fontWeight: 700, fontSize: '0.9rem', lineHeight: 1.4 }}>
              Tap any underlined word above to hear what it means!
            </span>
          </div>
        )}

        <div style={{ height: 12 }} />
      </div>
    </div>
  );
}
