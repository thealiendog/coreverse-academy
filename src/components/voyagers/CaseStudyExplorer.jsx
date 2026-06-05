// ─────────────────────────────────────────────────────────────────────────────
// CaseStudyExplorer.jsx — Voyager case-study format (cases[] accordion)
//
// Schema:
//   { type: 'case-study', headline, intro, cases[], synthesisPrompt?, reflectionPrompt? }
//   cases[]: { id, title, type, description, questions[], evaluation }
//
// UX: Intro → expand each case card → read description + questions →
//     tap "See evaluation" → evaluation reveals inline →
//     after all cases viewed, synthesisPrompt + reflectionPrompt + Continue.
// ─────────────────────────────────────────────────────────────────────────────
import { useState } from 'react';

export default function CaseStudyExplorer({ screen, accent, childName, onComplete }) {
  const r = t => (t || '').replace(/\{name\}/g, childName);

  const cases   = screen.cases || [];
  const [expanded,   setExpanded]   = useState(null);    // case id
  const [revealed,   setRevealed]   = useState({});      // { caseId: true }
  const [showSynth,  setShowSynth]  = useState(false);

  const allRevealed = cases.length > 0 && cases.every(c => revealed[c.id]);

  return (
    <div className="voy-reading-shell" style={shell}>
      {/* Header */}
      <div>
        <p style={badge}>Case Study</p>
        <p style={{ color: '#e2d9f3', fontSize: '1rem', fontWeight: 700, lineHeight: 1.45, margin: '8px 0 0' }}>
          {r(screen.headline || 'Case Study')}
        </p>
      </div>

      {screen.intro && (
        <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.88rem', lineHeight: 1.6, margin: 0 }}>
          {r(screen.intro)}
        </p>
      )}

      <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.8rem', margin: 0 }}>
        Open each case and read the evaluation to continue. ({Object.keys(revealed).length}/{cases.length} completed)
      </p>

      {/* Case cards */}
      {cases.map((c, idx) => {
        const isOpen    = expanded === c.id;
        const isRevealed = !!revealed[c.id];

        return (
          <div
            key={c.id}
            style={{
              borderRadius: 14,
              border: `1.5px solid ${isRevealed ? accent + '55' : isOpen ? accent + '44' : 'rgba(255,255,255,0.14)'}`,
              background: isRevealed ? `${accent}08` : 'rgba(255,255,255,0.04)',
              transition: 'all 0.18s ease',
            }}
          >
            {/* Header row */}
            <div
              onClick={() => setExpanded(prev => prev === c.id ? null : c.id)}
              style={{ padding: '12px 14px', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 8 }}
            >
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
                  <span style={{ color: accent, fontWeight: 700, fontSize: '0.78rem', flexShrink: 0 }}>
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                  <span style={{ color: '#e2d9f3', fontWeight: 700, fontSize: '0.88rem', lineHeight: 1.35 }}>
                    {r(c.title || '')}
                  </span>
                  {isRevealed && (
                    <span style={{ background: `${accent}22`, border: `1px solid ${accent}44`, borderRadius: 6, padding: '2px 8px', color: accent, fontSize: '0.68rem', fontWeight: 700, whiteSpace: 'nowrap' }}>
                      ✓ read
                    </span>
                  )}
                </div>
                {c.type && (
                  <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.75rem', marginLeft: 22 }}>{c.type}</span>
                )}
              </div>
              <span style={{ color: isOpen ? accent : 'rgba(255,255,255,0.3)', fontSize: '0.9rem', flexShrink: 0, marginTop: 2 }}>
                {isOpen ? '▲' : '▼'}
              </span>
            </div>

            {/* Expanded content */}
            {isOpen && (
              <div style={{ padding: '0 14px 14px', display: 'flex', flexDirection: 'column', gap: 12 }}>
                {/* Description */}
                {c.description && (
                  <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.9rem', lineHeight: 1.65, margin: 0 }}>
                    {r(c.description)}
                  </p>
                )}

                {/* Questions */}
                {(c.questions || []).length > 0 && (
                  <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 10, padding: '12px 14px', display: 'flex', flexDirection: 'column', gap: 8 }}>
                    <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', margin: 0 }}>
                      Questions to consider
                    </p>
                    {c.questions.map((q, qi) => (
                      <p key={qi} style={{ color: '#e2d9f3', fontSize: '0.88rem', lineHeight: 1.6, margin: 0 }}>
                        {qi + 1}. {r(q)}
                      </p>
                    ))}
                  </div>
                )}

                {/* Evaluation reveal */}
                {!isRevealed ? (
                  <button
                    style={revealBtn(accent)}
                    onClick={() => setRevealed(prev => ({ ...prev, [c.id]: true }))}
                  >
                    See evaluation →
                  </button>
                ) : (
                  <div style={{ background: `${accent}10`, border: `1px solid ${accent}30`, borderRadius: 12, padding: '14px 16px' }}>
                    <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', margin: '0 0 8px' }}>
                      Evaluation
                    </p>
                    <p style={{ color: '#e2d9f3', fontSize: '0.9rem', lineHeight: 1.65, margin: 0 }}>
                      {r(c.evaluation || '')}
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>
        );
      })}

      {/* Synthesis + reflection + continue (unlocks after all revealed) */}
      {allRevealed && !showSynth && (
        <button style={continueBtn(true, accent)} onClick={() => setShowSynth(true)}>
          Reflect →
        </button>
      )}

      {allRevealed && showSynth && (
        <>
          {screen.synthesisPrompt && (
            <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 12, padding: '14px 16px' }}>
              <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', margin: '0 0 6px' }}>
                Synthesis
              </p>
              <p style={{ color: '#e2d9f3', fontSize: '0.93rem', lineHeight: 1.65, margin: 0 }}>{r(screen.synthesisPrompt)}</p>
            </div>
          )}
          {screen.reflectionPrompt && (
            <div style={{ background: `${accent}10`, border: `1px solid ${accent}30`, borderRadius: 12, padding: '14px 16px' }}>
              <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', margin: '0 0 6px' }}>
                Reflect
              </p>
              <p style={{ color: '#e2d9f3', fontSize: '0.93rem', lineHeight: 1.6, margin: 0 }}>{r(screen.reflectionPrompt)}</p>
            </div>
          )}
          <button style={continueBtn(true, accent)} onClick={onComplete}>
            Continue →
          </button>
        </>
      )}

      {!allRevealed && (
        <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.85rem', textAlign: 'center', margin: 0 }}>
          Open and evaluate all {cases.length} cases to continue
        </p>
      )}
    </div>
  );
}

// ── Style helpers ──────────────────────────────────────────────────────────
const shell = {
  height: '100%', overflowY: 'auto', padding: '20px 18px 28px',
  display: 'flex', flexDirection: 'column', gap: 14,
};
const badge = {
  alignSelf: 'flex-start',
  background: 'rgba(251,191,36,0.15)', border: '1px solid rgba(251,191,36,0.4)',
  borderRadius: 8, padding: '4px 12px', color: '#FBBF24',
  fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase',
};
const revealBtn = (accent) => ({
  padding: '10px 20px', fontWeight: 700, fontSize: '0.9rem',
  border: `1.5px solid ${accent}55`, borderRadius: 10, cursor: 'pointer',
  background: `${accent}14`, color: accent,
  transition: 'all 0.18s ease', alignSelf: 'flex-start',
});
const continueBtn = (enabled, accent) => ({
  padding: '14px 28px', fontWeight: 700, fontSize: '1rem',
  border: 'none', borderRadius: 12, cursor: enabled ? 'pointer' : 'default',
  background:  enabled ? accent : 'rgba(255,255,255,0.08)',
  color:       enabled ? '#fff' : 'rgba(255,255,255,0.3)',
  boxShadow:   enabled ? `0 0 18px ${accent}44` : 'none',
  transition:  'all 0.2s', alignSelf: 'stretch',
});
