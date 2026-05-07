// StoryBeatScreen — new Explorer screen type for image-first, text-light story beats
// Replaces 4-section magazine format with 6 story-beats per lesson.
// Design: full-bleed image (55% vh) → headline → prose (~40-60 words) → key vocab card.
// Audio + karaoke: same pipeline as MagazineScreen (prewarm, stripPronunciationGuides,
// spoken-to-visual alignment map). Tap-to-advance after audio completes.

// ── Per-word karaoke highlight (identical to MagazineScreen) ─────────────────
function renderKaraokeSpans(text, karaokeIdx, accent, wordOffset = 0) {
  const chunks = text.split(/(\s+)/);
  let wordCount = wordOffset;
  return chunks.map((chunk, i) => {
    if (!chunk) return null;
    if (/^\s+$/.test(chunk)) return <span key={i}>{chunk}</span>;
    const thisIdx = wordCount++;
    const isActive = thisIdx === karaokeIdx;
    return (
      <span key={i} style={{
        color:      isActive ? accent : 'inherit',
        textShadow: isActive ? `0 0 14px ${accent}99` : 'none',
        fontWeight: isActive ? 700 : 'inherit',
        transition: 'color 0.08s ease, text-shadow 0.08s ease',
      }}>
        {chunk}
      </span>
    );
  });
}

// ── Prose paragraph with karaoke + optional in-prose tappable vocab ───────────
// wordOffset = headlineWordCount so indices follow on from headline karaoke.
function renderProse(text, inProseVocab, karaokeIdx, accent, onVocabTap, wordOffset = 0) {
  const vocabMap = new Map((inProseVocab || []).map(v => [v.word.toLowerCase(), v]));
  const chunks = text.split(/(\s+)/);
  let wordCount = wordOffset;
  return chunks.map((chunk, i) => {
    if (!chunk) return null;
    if (/^\s+$/.test(chunk)) return <span key={i}>{chunk}</span>;
    const thisIdx = wordCount++;
    const isActive = thisIdx === karaokeIdx;
    const cleanKey = chunk.toLowerCase().replace(/[^a-z]/g, '');
    const vocabEntry = vocabMap.get(cleanKey);
    return (
      <span
        key={i}
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
}

export default function StoryBeatScreen({
  screen,
  speaking, loadingAudio, audioPaused,
  karaokeWords, karaokeIdx,
  accent,
  onReplay, onPauseResume,
  onVocabTap,
  showVocabHint, onDismissVocabHint,
  headlineWordCount = 0,
}) {
  const {
    beat, totalBeats,
    headline    = '',
    paragraph   = '',
    image,
    imageCaption,
    keyVocab,
    inProseVocab = [],
  } = screen;

  const isAudioActive = speaking || loadingAudio || audioPaused;

  return (
    <div style={{
      display: 'flex', flexDirection: 'column',
      minHeight: '100%', background: '#0f172a',
      overflowY: 'auto',
    }}>
      <style>{`
        @keyframes sb-card-pulse {
          0%, 100% { box-shadow: 0 4px 20px var(--sb-accent-shadow); }
          50%       { box-shadow: 0 6px 28px var(--sb-accent-shadow-bright); }
        }
      `}</style>

      {/* ── IMAGE ZONE — full-bleed, 55 vh ──────────────────────────────────── */}
      <div style={{
        position: 'relative', width: '100%', height: '55vh',
        flexShrink: 0, overflow: 'hidden', background: '#1e293b',
      }}>
        <img
          src={image}
          alt={headline}
          style={{
            width: '100%', height: '100%',
            objectFit: 'cover', objectPosition: 'center', display: 'block',
          }}
          onError={e => { e.currentTarget.style.opacity = '0.15'; }}
        />

        {/* Bottom gradient — bleeds into text zone for seamless feel */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to bottom, transparent 45%, rgba(15,23,42,0.85) 100%)',
          pointerEvents: 'none',
        }} />

        {/* Beat badge — bottom-left of image */}
        {beat && totalBeats && (
          <div style={{
            position: 'absolute', bottom: 12, left: 14,
            background: `${accent}25`, border: `1.5px solid ${accent}60`,
            borderRadius: 20, padding: '4px 12px',
            fontSize: '0.7rem', fontWeight: 700, color: accent,
            letterSpacing: '0.06em', textTransform: 'uppercase',
            backdropFilter: 'blur(6px)', WebkitBackdropFilter: 'blur(6px)',
          }}>
            Beat {beat} of {totalBeats}
        </div>
        )}

        {/* Audio control — bottom-right of image */}
        <button
          onClick={isAudioActive ? onPauseResume : onReplay}
          style={{
            position: 'absolute', bottom: 10, right: 10,
            width: 40, height: 40, borderRadius: '50%', border: 'none',
            background: isAudioActive ? accent : 'rgba(0,0,0,0.55)',
            color:      isAudioActive ? '#000' : 'rgba(255,255,255,0.85)',
            fontSize: '1rem', cursor: 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            touchAction: 'manipulation', transition: 'background 0.2s',
            backdropFilter: 'blur(4px)', WebkitBackdropFilter: 'blur(4px)',
          }}
        >
          {audioPaused ? '▶' : isAudioActive ? '⏸' : '▶'}
        </button>

        {/* Image caption */}
        {imageCaption && (
          <div style={{
            position: 'absolute', bottom: 0, left: 0, right: 52,
            padding: '4px 14px 5px', fontSize: '0.68rem',
            color: 'rgba(255,255,255,0.5)', fontStyle: 'italic',
          }}>
            {imageCaption}
          </div>
        )}
      </div>

      {/* ── TEXT ZONE ───────────────────────────────────────────────────────── */}
      <div style={{ flex: 1, padding: '20px 20px 40px' }}>

        {/* Headline */}
        <h2 style={{
          fontSize: '1.5rem', fontWeight: 800, color: '#fff',
          marginTop: 2, marginBottom: 14, lineHeight: 1.2,
          letterSpacing: '-0.02em',
        }}>
          {renderKaraokeSpans(headline, karaokeIdx, accent, 0)}
        </h2>

        {/* Prose paragraph with karaoke */}
        <p style={{
          color: 'rgba(255,255,255,0.85)', lineHeight: 1.8,
          fontSize: '1.05rem', marginTop: 0, marginBottom: 24,
        }}>
          {renderProse(paragraph, inProseVocab, karaokeIdx, accent, onVocabTap, headlineWordCount)}
        </p>

        {/* ── KEY VOCAB CARD — flashcard moment ───────────────────────────── */}
        {keyVocab && (
          <button
            onClick={() => onVocabTap(keyVocab)}
            style={{
              '--sb-accent-shadow':        `${accent}22`,
              '--sb-accent-shadow-bright': `${accent}40`,
              width: '100%', textAlign: 'left',
              background: `linear-gradient(135deg, ${accent}1a 0%, ${accent}08 100%)`,
              border: `1.5px solid ${accent}50`,
              borderRadius: 18, padding: '16px 18px 14px',
              cursor: 'pointer', touchAction: 'manipulation',
              boxShadow: `0 4px 20px ${accent}22`,
              transition: 'box-shadow 0.2s, transform 0.15s',
              display: 'block',
            }}
          >
            {/* "KEY WORD" label */}
            <div style={{
              fontSize: '0.62rem', fontWeight: 800,
              letterSpacing: '0.14em', textTransform: 'uppercase',
              color: `${accent}88`, marginBottom: 7,
            }}>
              Key Word
            </div>

            {/* The word itself */}
            <div style={{
              fontSize: '1.3rem', fontWeight: 800, color: accent,
              marginBottom: 7, letterSpacing: '-0.01em', lineHeight: 1.1,
            }}>
              {keyVocab.word}
            </div>

            {/* Definition */}
            <div style={{
              fontSize: '0.88rem', color: 'rgba(255,255,255,0.62)',
              lineHeight: 1.55, marginBottom: 10,
            }}>
              {keyVocab.definition}
            </div>

            {/* Tap cue */}
            <div style={{
              display: 'flex', alignItems: 'center', gap: 5,
              fontSize: '0.7rem', color: `${accent}80`, fontWeight: 600,
            }}>
              <span style={{ fontSize: '0.85rem' }}>🔊</span>
              Tap to hear
            </div>
          </button>
        )}

        {/* Vocab hint — mirrors MagazineScreen hint */}
        {showVocabHint && keyVocab && (
          <div
            onClick={onDismissVocabHint}
            style={{
              marginTop: 16, padding: '12px 16px',
              background: `${accent}18`, border: `1.5px solid ${accent}66`,
              borderRadius: 14, display: 'flex', alignItems: 'center', gap: 10,
              cursor: 'pointer',
              animation: 'hint-in 0.4s cubic-bezier(0.34,1.56,0.64,1) both',
              touchAction: 'manipulation',
            }}
          >
            <span style={{
              fontSize: '1.3rem',
              animation: 'hint-bounce 1.2s ease-in-out infinite',
              display: 'inline-block', flexShrink: 0,
            }}>
              ☝️
            </span>
            <span style={{ color: accent, fontWeight: 700, fontSize: '0.9rem', lineHeight: 1.4 }}>
              Tap the card to hear what this word means!
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
