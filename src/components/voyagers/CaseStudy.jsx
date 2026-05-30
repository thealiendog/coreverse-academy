// ─────────────────────────────────────────────────────────────────────────────
// CaseStudy.jsx — Voyager interaction format 3 (Spec v1.1)
// Multi-decision flow: scenario → decision → consequence → … → debrief
//
// Screen schema:
//   { type: 'case-study', scenario, decisions[], debrief[] }
//   decisions[]: { prompt, options[], consequences[] }
//     options[]:      string (the choice label)
//     consequences[]: string (one per option — what happens after that choice)
//   debrief[]:   string (reflection questions shown at the end)
//
// All consequences are honest about trade-offs (per spec).
// No correct answer is highlighted — debrief surfaces nuance.
// ─────────────────────────────────────────────────────────────────────────────
import { useState } from 'react';

export default function CaseStudy({ screen, accent, childName, guideAvatar, onComplete }) {
  const r = t => (t || '').replace(/\{name\}/g, childName);

  const scenario  = screen.scenario  || '';
  const decisions = screen.decisions || [];
  const debrief   = screen.debrief   || [];

  // ── State ──────────────────────────────────────────────────────────────────
  const [phase,        setPhase]       = useState('scenario');    // 'scenario' | 'deciding' | 'consequence' | 'debrief'
  const [decisionIdx,  setDecisionIdx] = useState(0);
  const [chosenIdxs,   setChosenIdxs]  = useState([]);            // index of chosen option per decision
  const [showConseq,   setShowConseq]  = useState(false);

  const currentDecision = decisions[decisionIdx];
  const chosenOptionIdx = chosenIdxs[decisionIdx];

  // ── Handlers ───────────────────────────────────────────────────────────────
  function pickOption(optIdx) {
    setChosenIdxs(prev => {
      const next = [...prev];
      next[decisionIdx] = optIdx;
      return next;
    });
    setShowConseq(true);
  }

  function advanceAfterConsequence() {
    setShowConseq(false);
    if (decisionIdx < decisions.length - 1) {
      setDecisionIdx(prev => prev + 1);
      setPhase('deciding');
    } else {
      setPhase('debrief');
    }
  }

  // ── Phase: scenario ────────────────────────────────────────────────────────
  if (phase === 'scenario') {
    return (
      <div style={shell}>
        <p style={badge('rgba(251,191,36,0.15)', '#FBBF24')}>Case Study</p>
        <p style={headlineStyle}>{r(screen.headline || 'Real Scenario')}</p>

        <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 14, padding: '16px 16px' }}>
          {scenario.split('\n').filter(Boolean).map((para, i) => (
            <p key={i} style={{ color: '#e2d9f3', fontSize: '0.95rem', lineHeight: 1.7, margin: i === 0 ? 0 : '10px 0 0' }}>{r(para)}</p>
          ))}
        </div>

        <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.85rem', lineHeight: 1.55, margin: 0 }}>
          You'll face {decisions.length} decision{decisions.length !== 1 ? 's' : ''}. None is obviously right. Read carefully.
        </p>

        <button style={btn(true, accent)} onClick={() => setPhase('deciding')}>
          Start →
        </button>
      </div>
    );
  }

  // ── Phase: deciding ────────────────────────────────────────────────────────
  if (phase === 'deciding' && currentDecision) {
    return (
      <div style={shell}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <span style={{ background: `${accent}22`, border: `1px solid ${accent}44`, borderRadius: 8, padding: '4px 10px', color: accent, fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.05em' }}>
            Decision {decisionIdx + 1} of {decisions.length}
          </span>
        </div>

        <p style={headlineStyle}>{r(currentDecision.prompt || '')}</p>

        {(currentDecision.options || []).map((opt, idx) => (
          <div
            key={idx}
            onClick={() => !showConseq && pickOption(idx)}
            style={{
              borderRadius: 14, padding: '14px 16px', cursor: showConseq ? 'default' : 'pointer',
              border: `1.5px solid ${chosenOptionIdx === idx && showConseq ? accent + '77' : 'rgba(255,255,255,0.12)'}`,
              background: chosenOptionIdx === idx && showConseq ? `${accent}18` : 'rgba(255,255,255,0.04)',
              transition: 'all 0.18s ease',
              opacity: showConseq && chosenOptionIdx !== idx ? 0.4 : 1,
            }}
          >
            <span style={{ color: accent, fontWeight: 700, fontSize: '0.8rem', marginRight: 8 }}>
              {String.fromCharCode(65 + idx)}.
            </span>
            <span style={{ color: '#e2d9f3', fontSize: '0.93rem', lineHeight: 1.55 }}>{r(opt)}</span>
          </div>
        ))}

        {/* Consequence reveal */}
        {showConseq && chosenOptionIdx !== undefined && (
          <>
            <div style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: 14, padding: '14px 16px' }}>
              <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', margin: '0 0 6px' }}>What happens</p>
              <p style={{ color: '#e2d9f3', fontSize: '0.93rem', lineHeight: 1.65, margin: 0 }}>
                {r((currentDecision.consequences || [])[chosenOptionIdx] || 'The situation continues.')}
              </p>
            </div>

            <button style={btn(true, accent)} onClick={advanceAfterConsequence}>
              {decisionIdx < decisions.length - 1 ? 'Next decision →' : 'See debrief →'}
            </button>
          </>
        )}
      </div>
    );
  }

  // ── Phase: debrief ─────────────────────────────────────────────────────────
  if (phase === 'debrief') {
    return (
      <div style={shell}>
        <p style={badge('rgba(167,139,250,0.15)', '#A78BFA')}>Debrief</p>
        <p style={headlineStyle}>What were you really deciding?</p>

        {/* Summary of their choices */}
        <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 14, padding: '14px 16px', display: 'flex', flexDirection: 'column', gap: 10 }}>
          {decisions.map((d, idx) => {
            const chosen = (d.options || [])[chosenIdxs[idx]];
            return chosen ? (
              <div key={idx}>
                <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.04em', margin: '0 0 2px' }}>Decision {idx + 1}</p>
                <p style={{ color: '#e2d9f3', fontSize: '0.88rem', lineHeight: 1.5, margin: 0 }}>{r(chosen)}</p>
              </div>
            ) : null;
          })}
        </div>

        {/* Debrief questions */}
        {debrief.map((q, i) => (
          <div key={i} style={{ background: `${accent}10`, border: `1px solid ${accent}30`, borderRadius: 12, padding: '14px 16px' }}>
            <p style={{ color: '#e2d9f3', fontSize: '0.93rem', lineHeight: 1.6, margin: 0 }}>{r(q)}</p>
          </div>
        ))}

        <button style={btn(true, accent)} onClick={onComplete}>
          Continue →
        </button>
      </div>
    );
  }

  return null;
}

// ── Shared style helpers ───────────────────────────────────────────────────
const shell = {
  height: '100%', overflowY: 'auto', padding: '20px 18px 28px',
  display: 'flex', flexDirection: 'column', gap: 14,
};
const headlineStyle = {
  color: '#e2d9f3', fontSize: '1.05rem', fontWeight: 700,
  lineHeight: 1.45, margin: 0,
};
const badge = (bg, color) => ({
  alignSelf: 'flex-start', background: bg, border: `1px solid ${color}44`,
  borderRadius: 8, padding: '4px 12px', color, fontSize: '0.75rem',
  fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase',
});
const btn = (enabled, accent) => ({
  padding: '14px 28px', fontWeight: 700, fontSize: '1rem',
  border: 'none', borderRadius: 12, cursor: enabled ? 'pointer' : 'default',
  background:  enabled ? accent : 'rgba(255,255,255,0.08)',
  color:       enabled ? '#fff' : 'rgba(255,255,255,0.3)',
  boxShadow:   enabled ? `0 0 18px ${accent}44` : 'none',
  transition:  'all 0.2s', alignSelf: 'stretch',
});
