// ─────────────────────────────────────────────────────────────────────────────
// Perspectives.jsx — Voyager game format: perspectives
//
// Screen schema:
//   { type: 'perspectives', headline, intro, perspectives[], synthesisPrompt?, reflectionPrompt? }
//   perspectives[]: { id, voice, era, stance, quote, argument, evidence, strengths_and_limits }
//
// Behaviour: vertical list of tappable perspective cards. Tapping a card
// expands it to show all fields. Tap again to collapse. All five must be
// expanded at least once before the Continue button appears.
// synthesisPrompt and reflectionPrompt render below the list once all viewed.
// ─────────────────────────────────────────────────────────────────────────────
import { useState } from 'react';

export default function Perspectives({ screen, accent, childName, guideAvatar, onComplete }) {
  const r = t => (t || '').replace(/\{name\}/g, childName);
  const perspectives = screen.perspectives || [];

  const [expanded,  setExpanded]  = useState(null);     // id of currently open card
  const [viewed,    setViewed]    = useState(new Set()); // ids that have been opened

  function handleToggle(id) {
    setExpanded(prev => prev === id ? null : id);
    setViewed(prev => new Set([...prev, id]));
  }

  const allViewed = perspectives.every(p => viewed.has(p.id));

  const labelStyle = {
    color: 'rgba(255,255,255,0.4)',
    fontSize: '0.7rem',
    fontWeight: 700,
    letterSpacing: '0.06em',
    textTransform: 'uppercase',
    margin: '0 0 3px',
  };

  const bodyStyle = {
    color: '#e2d9f3',
    fontSize: '0.88rem',
    lineHeight: 1.65,
    margin: 0,
  };

  return (
    <div style={{ height: '100%', overflowY: 'auto', padding: '20px 18px 32px', display: 'flex', flexDirection: 'column', gap: 14 }}>
      {/* Badge */}
      <p style={{ alignSelf: 'flex-start', background: `${accent}22`, border: `1px solid ${accent}44`, borderRadius: 8, padding: '4px 12px', color: accent, fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', margin: 0 }}>
        Perspectives
      </p>

      <p style={{ color: '#e2d9f3', fontSize: '1.05rem', fontWeight: 700, lineHeight: 1.45, margin: 0 }}>
        {r(screen.headline || 'Multiple Perspectives')}
      </p>

      {screen.intro && (
        <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.88rem', lineHeight: 1.6, margin: 0 }}>
          {r(screen.intro)}
        </p>
      )}

      {!allViewed && (
        <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.8rem', margin: 0 }}>
          Open each perspective to continue. ({viewed.size}/{perspectives.length} viewed)
        </p>
      )}

      {/* Perspective cards */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {perspectives.map((p, idx) => {
          const isOpen    = expanded === p.id;
          const wasViewed = viewed.has(p.id);
          const cardAccent = accent;

          return (
            <div
              key={p.id}
              onClick={() => handleToggle(p.id)}
              style={{
                borderRadius: 12,
                border: `1.5px solid ${isOpen ? cardAccent : wasViewed ? `${cardAccent}44` : 'rgba(255,255,255,0.15)'}`,
                background: isOpen ? `${cardAccent}12` : wasViewed ? 'rgba(255,255,255,0.04)' : 'rgba(255,255,255,0.03)',
                padding: '12px 14px',
                cursor: 'pointer',
                transition: 'all 0.18s ease',
              }}
            >
              {/* Header row — always visible */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 8 }}>
                <div style={{ flex: 1 }}>
                  <p style={{ color: isOpen ? cardAccent : wasViewed ? `${cardAccent}bb` : '#e2d9f3', fontSize: '0.93rem', fontWeight: 700, margin: '0 0 2px', lineHeight: 1.3 }}>
                    {p.voice}
                  </p>
                  {p.era && (
                    <p style={{ color: 'rgba(255,255,255,0.38)', fontSize: '0.75rem', margin: 0 }}>
                      {p.era}
                    </p>
                  )}
                </div>
                <span style={{ color: isOpen ? cardAccent : 'rgba(255,255,255,0.3)', fontSize: '1rem', flexShrink: 0, marginTop: 2 }}>
                  {isOpen ? '▲' : '▼'}
                </span>
              </div>

              {/* Stance — always visible */}
              {p.stance && (
                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.82rem', fontStyle: 'italic', margin: '6px 0 0', lineHeight: 1.45 }}>
                  {p.stance}
                </p>
              )}

              {/* Expanded content */}
              {isOpen && (
                <div style={{ marginTop: 14, display: 'flex', flexDirection: 'column', gap: 12 }}>
                  {p.quote && (
                    <div>
                      <p style={labelStyle}>Quote</p>
                      <p style={{ ...bodyStyle, fontStyle: 'italic', color: cardAccent }}>
                        "{r(p.quote)}"
                      </p>
                    </div>
                  )}
                  {p.argument && (
                    <div>
                      <p style={labelStyle}>Argument</p>
                      <p style={bodyStyle}>{r(p.argument)}</p>
                    </div>
                  )}
                  {p.evidence && (
                    <div>
                      <p style={labelStyle}>Evidence</p>
                      <p style={{ ...bodyStyle, color: 'rgba(255,255,255,0.7)' }}>{r(p.evidence)}</p>
                    </div>
                  )}
                  {p.strengths_and_limits && (
                    <div>
                      <p style={labelStyle}>Strengths & Limits</p>
                      <p style={{ ...bodyStyle, color: 'rgba(255,255,255,0.65)' }}>{r(p.strengths_and_limits)}</p>
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Synthesis + reflection — shown once all viewed */}
      {allViewed && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginTop: 4 }}>
          {screen.synthesisPrompt && (
            <div style={{ background: `${accent}0e`, border: `1px solid ${accent}33`, borderRadius: 10, padding: '12px 14px' }}>
              <p style={{ ...labelStyle, color: accent, marginBottom: 6 }}>Synthesis</p>
              <p style={{ color: '#e2d9f3', fontSize: '0.88rem', lineHeight: 1.65, margin: 0 }}>{r(screen.synthesisPrompt)}</p>
            </div>
          )}
          {screen.reflectionPrompt && (
            <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 10, padding: '12px 14px' }}>
              <p style={{ ...labelStyle, marginBottom: 6 }}>Reflect</p>
              <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.88rem', lineHeight: 1.65, margin: 0 }}>{r(screen.reflectionPrompt)}</p>
            </div>
          )}
        </div>
      )}

      {/* Continue button */}
      {allViewed && (
        <button
          onClick={onComplete}
          style={{ padding: '14px 28px', fontWeight: 700, fontSize: '1rem', border: 'none', borderRadius: 12, cursor: 'pointer', background: accent, color: '#fff', boxShadow: `0 0 18px ${accent}44`, transition: 'all 0.2s', alignSelf: 'stretch', marginTop: 4 }}
        >
          Continue →
        </button>
      )}
    </div>
  );
}
