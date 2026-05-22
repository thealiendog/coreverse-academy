// RealWorldConnection — Phase 5: family adventure + creative prompt
// Karaoke highlight active word in whichever section is currently being spoken.
// creativePrompt may be a plain string OR an object { intro, floor, stretch, frames[] }
import { useState, useEffect } from 'react';

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

  const cpRaw         = screen.creativePrompt;
  const isCreativeObj = cpRaw && typeof cpRaw === 'object';
  const creativePrompt = isCreativeObj ? (cpRaw.intro || '') : (cpRaw || '');

  const [creativeLevel, setCreativeLevel] = useState('floor');
  const [writeText,     setWriteText]     = useState('');

  // Karaoke log — title sections log every word, body sections every 5th word
  useEffect(() => {
    if (karaokeIdx < 0 || karaokeWords.length === 0) return;
    const joined = karaokeWords.join(' ');
    const word   = karaokeWords[karaokeIdx];
    if (!word) return;
    if (joined === 'Family Adventure') {
      console.log(`[KARAOKE] Family Adventure title — highlighting word: '${word}' at index ${karaokeIdx}`);
    } else if (joined === 'Create Something') {
      console.log(`[KARAOKE] Create Something title — highlighting word: '${word}' at index ${karaokeIdx}`);
    } else if (karaokeIdx % 5 === 0) {
      console.log(`[KARAOKE] Real-world — highlighting word: '${word}' at index ${karaokeIdx}`);
    }
  }, [karaokeIdx]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="real-world-scroll" style={{ height: '100%', overflowY: 'auto', padding: '24px 18px', display: 'flex', flexDirection: 'column', gap: 20 }}>
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
        <div className="real-world-card" style={{ background: 'rgba(245,158,11,0.1)', border: '1.5px solid #F59E0B44', borderRadius: 16, padding: '18px 16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
            <span style={{ fontSize: '1.4rem' }}>🏠</span>
            <span style={{ color: '#F59E0B', fontWeight: 700, fontSize: '0.9rem', letterSpacing: '0.04em', textTransform: 'uppercase' }}>
              {renderKaraokeBlock('Family Adventure', karaokeWords, karaokeIdx, '#F59E0B')}
            </span>
          </div>
          <p className="real-world-text" style={{ color: 'rgba(255,255,255,0.85)', lineHeight: 1.65, fontSize: '0.97rem', margin: 0 }}>
            {renderKaraokeBlock(familyAdventure, karaokeWords, karaokeIdx, '#F59E0B')}
          </p>
        </div>
      )}

      {/* Creative Prompt */}
      {(creativePrompt || isCreativeObj) && (
        <div className="real-world-card" style={{ background: 'rgba(167,139,250,0.1)', border: '1.5px solid #A78BFA44', borderRadius: 16, padding: '18px 16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
            <span style={{ fontSize: '1.4rem' }}>✏️</span>
            <span style={{ color: '#A78BFA', fontWeight: 700, fontSize: '0.9rem', letterSpacing: '0.04em', textTransform: 'uppercase' }}>
              {renderKaraokeBlock('Create Something', karaokeWords, karaokeIdx, '#A78BFA')}
            </span>
          </div>

          {isCreativeObj ? (
            <>
              {/* Intro paragraph — read aloud by guide, karaoke active */}
              <p className="real-world-text" style={{ color: 'rgba(255,255,255,0.85)', lineHeight: 1.65, fontSize: '0.97rem', margin: '0 0 14px' }}>
                {renderKaraokeBlock(creativePrompt, karaokeWords, karaokeIdx, '#A78BFA')}
              </p>

              {/* Level toggle */}
              <div style={{ display: 'flex', gap: 8, marginBottom: 14 }}>
                {['floor', 'stretch'].map(level => (
                  <button
                    key={level}
                    onClick={() => setCreativeLevel(level)}
                    style={{
                      flex: 1,
                      padding: '8px 0',
                      borderRadius: 10,
                      border: `2px solid ${creativeLevel === level ? '#A78BFA' : '#A78BFA44'}`,
                      background: creativeLevel === level ? 'rgba(167,139,250,0.2)' : 'transparent',
                      color: creativeLevel === level ? '#A78BFA' : 'rgba(255,255,255,0.5)',
                      fontWeight: 700,
                      fontSize: '0.85rem',
                      cursor: 'pointer',
                      transition: 'all 0.12s',
                    }}
                  >
                    {level === 'floor' ? 'Write 3 sentences' : 'Write 5 sentences'}
                  </button>
                ))}
              </div>

              {/* Level instruction */}
              {cpRaw[creativeLevel] && (
                <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem', lineHeight: 1.6, margin: '0 0 14px' }}>
                  {cpRaw[creativeLevel]}
                </p>
              )}

              {/* Sentence frames as tappable insert cards */}
              {Array.isArray(cpRaw.frames) && cpRaw.frames.length > 0 && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: 6, marginBottom: 14 }}>
                  {cpRaw.frames.map((frame, i) => (
                    <button
                      key={i}
                      onClick={() => setWriteText(prev => prev ? `${prev} ${frame}` : frame)}
                      style={{
                        textAlign: 'left',
                        padding: '8px 12px',
                        borderRadius: 10,
                        border: '1.5px solid #A78BFA55',
                        background: 'rgba(167,139,250,0.08)',
                        color: 'rgba(255,255,255,0.75)',
                        fontSize: '0.88rem',
                        cursor: 'pointer',
                        fontStyle: 'italic',
                        transition: 'background 0.1s',
                      }}
                    >
                      + {frame}
                    </button>
                  ))}
                </div>
              )}

              {/* Writing textarea */}
              <textarea
                value={writeText}
                onChange={e => setWriteText(e.target.value)}
                placeholder="Tap a sentence starter above, or write your own here..."
                rows={5}
                style={{
                  width: '100%',
                  boxSizing: 'border-box',
                  borderRadius: 10,
                  border: '1.5px solid #A78BFA55',
                  background: 'rgba(255,255,255,0.05)',
                  color: 'rgba(255,255,255,0.9)',
                  fontSize: '0.92rem',
                  lineHeight: 1.6,
                  padding: '10px 12px',
                  resize: 'vertical',
                  outline: 'none',
                }}
              />
            </>
          ) : (
            <p className="real-world-text" style={{ color: 'rgba(255,255,255,0.85)', lineHeight: 1.65, fontSize: '0.97rem', margin: 0 }}>
              {renderKaraokeBlock(creativePrompt, karaokeWords, karaokeIdx, '#A78BFA')}
            </p>
          )}
        </div>
      )}
    </div>
  );
}
