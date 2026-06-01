// ─────────────────────────────────────────────────────────────────────────────
// BranchingDecision.jsx — Voyager game format: branching-decision
//
// Screen schema:
//   { type: 'branching-decision', headline, intro, decisions[], completionMessage }
//   decisions[]: { id, prompt, options[] }
//   options[]:   { id, label, consequence }
//
// Behaviour: show prompt → user picks an option → see consequence →
// advance to next decision → after all decisions, show completion screen.
// Intentionally no "wrong" answer — all choices reveal honest consequences.
// ─────────────────────────────────────────────────────────────────────────────
import { useState } from 'react';

export default function BranchingDecision({ screen, accent, childName, guideAvatar, onComplete }) {
  const r = t => (t || '').replace(/\{name\}/g, childName);
  const decisions = screen.decisions || [];

  const [phase,       setPhase]      = useState('intro');       // 'intro' | 'deciding' | 'done'
  const [decisionIdx, setDecisionIdx] = useState(0);
  const [pickedId,    setPickedId]   = useState(null);
  const [showConseq,  setShowConseq] = useState(false);
  const [choiceLog,   setChoiceLog]  = useState([]);            // [{decisionId, optionLabel}]

  const currentDecision = decisions[decisionIdx];
  const isLast = decisionIdx === decisions.length - 1;

  function handlePick(optId) {
    if (pickedId) return;
    const opt = currentDecision?.options?.find(o => o.id === optId);
    setPickedId(optId);
    setShowConseq(true);
    setChoiceLog(prev => [...prev, { decisionId: currentDecision?.id, optionLabel: opt?.label || '' }]);
  }

  function advance() {
    setShowConseq(false);
    setPickedId(null);
    if (isLast) {
      setPhase('done');
    } else {
      setDecisionIdx(i => i + 1);
      setPhase('deciding');
    }
  }

  const pickedOption = currentDecision?.options?.find(o => o.id === pickedId);

  // ── Intro phase ──────────────────────────────────────────────────────────
  if (phase === 'intro') {
    return (
      <div style={shell}>
        <p style={badge(accent)}>Branching Decision</p>
        <p style={headline}>{r(screen.headline || 'Your decisions, your path')}</p>

        {screen.intro && (
          <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 14, padding: '14px 16px' }}>
            <p style={{ color: '#e2d9f3', fontSize: '0.93rem', lineHeight: 1.7, margin: 0 }}>{r(screen.intro)}</p>
          </div>
        )}

        <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.85rem', lineHeight: 1.55, margin: 0 }}>
          You'll face {decisions.length} decision{decisions.length !== 1 ? 's' : ''}. Your choices shape the outcome. No choice is labelled wrong — all have real consequences.
        </p>

        <button onClick={() => setPhase('deciding')} style={btn(true, accent)}>
          Start →
        </button>
      </div>
    );
  }

  // ── Done phase ───────────────────────────────────────────────────────────
  if (phase === 'done') {
    return (
      <div style={shell}>
        <p style={badge(accent, 'rgba(167,139,250,0.15)', '#A78BFA')}>Path complete</p>
        <p style={headline}>Your decisions</p>

        <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 14, padding: '14px 16px', display: 'flex', flexDirection: 'column', gap: 10 }}>
          {choiceLog.map((entry, idx) => (
            <div key={idx}>
              <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.04em', margin: '0 0 2px' }}>Decision {idx + 1}</p>
              <p style={{ color: '#e2d9f3', fontSize: '0.88rem', lineHeight: 1.5, margin: 0 }}>{r(entry.optionLabel)}</p>
            </div>
          ))}
        </div>

        {screen.completionMessage && (
          <div style={{ background: `${accent}10`, border: `1px solid ${accent}30`, borderRadius: 12, padding: '14px 16px' }}>
            <p style={{ color: '#e2d9f3', fontSize: '0.93rem', lineHeight: 1.6, margin: 0 }}>{r(screen.completionMessage)}</p>
          </div>
        )}

        <button onClick={onComplete} style={btn(true, accent)}>
          Continue →
        </button>
      </div>
    );
  }

  // ── Deciding phase ───────────────────────────────────────────────────────
  return (
    <div style={shell}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <span style={{ background: `${accent}22`, border: `1px solid ${accent}44`, borderRadius: 8, padding: '4px 10px', color: accent, fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.05em' }}>
          Decision {decisionIdx + 1} of {decisions.length}
        </span>
      </div>

      <p style={headline}>{r(currentDecision?.prompt || '')}</p>

      {(currentDecision?.options || []).map(opt => (
        <div
          key={opt.id}
          onClick={() => !showConseq && handlePick(opt.id)}
          style={{
            borderRadius: 14, padding: '14px 16px',
            cursor: showConseq ? 'default' : 'pointer',
            border: `1.5px solid ${pickedId === opt.id && showConseq ? accent + '77' : 'rgba(255,255,255,0.12)'}`,
            background: pickedId === opt.id && showConseq ? `${accent}18` : 'rgba(255,255,255,0.04)',
            transition: 'all 0.18s ease',
            opacity: showConseq && pickedId !== opt.id ? 0.4 : 1,
          }}
        >
          <span style={{ color: accent, fontWeight: 700, fontSize: '0.8rem', marginRight: 8 }}>
            {String.fromCharCode(65 + (currentDecision?.options || []).indexOf(opt))}.
          </span>
          <span style={{ color: '#e2d9f3', fontSize: '0.93rem', lineHeight: 1.55 }}>{r(opt.label)}</span>
        </div>
      ))}

      {/* Consequence reveal */}
      {showConseq && pickedOption && (
        <>
          <div style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: 14, padding: '14px 16px' }}>
            <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', margin: '0 0 6px' }}>What happens</p>
            <p style={{ color: '#e2d9f3', fontSize: '0.93rem', lineHeight: 1.65, margin: 0 }}>
              {r(pickedOption.consequence || '')}
            </p>
          </div>

          <button onClick={advance} style={btn(true, accent)}>
            {isLast ? 'See summary →' : 'Next decision →'}
          </button>
        </>
      )}
    </div>
  );
}

// ── Shared styles ──────────────────────────────────────────────────────────
const shell = {
  height: '100%', overflowY: 'auto', padding: '20px 18px 28px',
  display: 'flex', flexDirection: 'column', gap: 14,
};
const headline = {
  color: '#e2d9f3', fontSize: '1.05rem', fontWeight: 700,
  lineHeight: 1.45, margin: 0,
};
const badge = (accent, bg, color) => ({
  alignSelf: 'flex-start',
  background: bg || `${accent}22`,
  border: `1px solid ${color || accent}44`,
  borderRadius: 8, padding: '4px 12px',
  color: color || accent,
  fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', margin: 0,
});
const btn = (enabled, accent) => ({
  padding: '14px 28px', fontWeight: 700, fontSize: '1rem',
  border: 'none', borderRadius: 12, cursor: enabled ? 'pointer' : 'default',
  background:  enabled ? accent : 'rgba(255,255,255,0.08)',
  color:       enabled ? '#fff' : 'rgba(255,255,255,0.3)',
  boxShadow:   enabled ? `0 0 18px ${accent}44` : 'none',
  transition:  'all 0.2s', alignSelf: 'stretch',
});
