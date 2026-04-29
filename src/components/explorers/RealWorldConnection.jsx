// RealWorldConnection — Phase 5: family adventure + creative prompt
// Karaoke highlight active word in whichever section is currently being spoken.
import { useEffect } from 'react';

// Render a text block with per-word karaoke. Determines if THIS section is active
// by comparing the joined karaokeWords against this section's word list.
function renderKaraokeBlock(text, karaokeWords, karaokeIdx, accent) {
  if (!text) return null;
  const sectionWords = text.split(/\s+/).filter(Boolean);
  const isActive = karaokeWords.length > 0 && karaokeWords.join(' ') === sectionWords.join(' ');

  const chunks = text.split(/(\s+)/);
  let wordCount = 0;
  return chunks.map((chunk, i) => {
    if (!chunk || /^\s+$/.test(chunk)) return <span key={i}>{chunk}</span>;
    const idx = wordCount++;
    const highlight = isActive && idx === karaokeIdx;
    return (
      <span key={i} style={{
        color:      highlight ? accent : 'inherit',
        textShadow: highlight ? `0 0 14px ${accent}99` : 'none',
        fontWeight: highlight ? 700 : 'inherit',
        transition: 'color 0.08s ease, text-shadow 0.08s ease',
      }}>
        {chunk}
      </span>
    );
  });
}

export default function RealWorldConnection({
  screen, guideAvatar, speaking, accent, onReplay,
  childName, karaokeWords, karaokeIdx,
}) {
  const r = t => (t || '').replace(/\{name\}/g, childName || 'friend');
  const guideText       = r(screen.guideText);
  const familyAdventure = screen.familyAdventure || '';
  const creativePrompt  = screen.creativePrompt  || '';

  // Verify karaoke log — every 5th word change to avoid spam
  useEffect(() => {
    if (karaokeIdx >= 0 && karaokeIdx % 5 === 0 && karaokeWords.length > 0) {
      const word = karaokeWords[karaokeIdx];
      if (word) console.log(`[KARAOKE] Real-world — highlighting word: '${word}' at index ${karaokeIdx}`);
    }
  }, [karaokeIdx]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div style={{ height: '100%', overflowY: 'auto', padding: '24px 18px', display: 'flex', flexDirection: 'column', gap: 20 }}>
      {/* Guide intro with karaoke */}
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
        <img
          src={guideAvatar?.image || '/avatars/sage.png'} alt=""
          style={{ width: 52, height: 52, borderRadius: '50%', objectFit: 'cover', border: `2px solid ${accent}`, flexShrink: 0 }}
        />
        <div style={{ background: 'rgba(255,255,255,0.06)', border: `1px solid ${accent}33`, borderRadius: 14, padding: '12px 14px', fontSize: '0.95rem', color: 'rgba(255,255,255,0.85)', lineHeight: 1.6 }}>
          {renderKaraokeBlock(guideText, karaokeWords, karaokeIdx, accent)}
        </div>
      </div>

      {/* Family Adventure with karaoke */}
      {familyAdventure && (
        <div style={{ background: 'rgba(245,158,11,0.1)', border: '1.5px solid #F59E0B44', borderRadius: 16, padding: '18px 16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
            <span style={{ fontSize: '1.4rem' }}>🏠</span>
            <span style={{ color: '#F59E0B', fontWeight: 700, fontSize: '0.9rem', letterSpacing: '0.04em', textTransform: 'uppercase' }}>Family Adventure</span>
          </div>
          <p style={{ color: 'rgba(255,255,255,0.85)', lineHeight: 1.65, fontSize: '0.97rem', margin: 0 }}>
            {renderKaraokeBlock(familyAdventure, karaokeWords, karaokeIdx, '#F59E0B')}
          </p>
        </div>
      )}

      {/* Creative Prompt with karaoke */}
      {creativePrompt && (
        <div style={{ background: 'rgba(167,139,250,0.1)', border: '1.5px solid #A78BFA44', borderRadius: 16, padding: '18px 16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
            <span style={{ fontSize: '1.4rem' }}>✏️</span>
            <span style={{ color: '#A78BFA', fontWeight: 700, fontSize: '0.9rem', letterSpacing: '0.04em', textTransform: 'uppercase' }}>Create Something</span>
          </div>
          <p style={{ color: 'rgba(255,255,255,0.85)', lineHeight: 1.65, fontSize: '0.97rem', margin: 0 }}>
            {renderKaraokeBlock(creativePrompt, karaokeWords, karaokeIdx, '#A78BFA')}
          </p>
        </div>
      )}
    </div>
  );
}
