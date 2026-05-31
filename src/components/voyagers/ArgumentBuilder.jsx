// ─────────────────────────────────────────────────────────────────────────────
// ArgumentBuilder.jsx — Voyager interaction format 2 (Spec v1.1)
// Position pick → evidence selection → counterargument response → reflection
//
// Screen schema:
//   { type: 'argument-builder', headline, positions[], evidence[], counterargument, reflectionPrompt }
//   positions[]:    { id, label, summary }
//   evidence[]:     { id, claim, source }
//   counterargument: string (the objection text)
//
// Mobile-first: "tap to add" replaces drag-and-drop (reliable on touch).
// Evidence can be reordered in the selected pile with ▲▼ buttons.
// ─────────────────────────────────────────────────────────────────────────────
import { useState } from 'react';

const MAX_EVIDENCE = 4;

export default function ArgumentBuilder({ screen, accent, childName, guideAvatar, onComplete }) {
  const r = t => (t || '').replace(/\{name\}/g, childName);

  const positions        = screen.positions || [];
  const evidencePool     = screen.evidence  || [];
  // counterargument: accept string or {id, text, promptInstruction} object
  const counterObj       = typeof screen.counterargument === 'object' ? screen.counterargument : null;
  const counterargument  = counterObj ? counterObj.text : (screen.counterargument || '');
  const counterPromptHint = counterObj?.promptInstruction || 'Write 2–3 sentences responding to this objection.';
  const reflectionPrompt = screen.reflectionPrompt || '';

  // ── State ──────────────────────────────────────────────────────────────────
  const [phase,             setPhase]             = useState('position');   // 'position' | 'evidence' | 'counter' | 'reflection'
  const [selectedPosition,  setSelectedPosition]  = useState(null);         // position id
  const [selectedEvidence,  setSelectedEvidence]  = useState([]);           // ordered array of evidence ids
  const [counterText,       setCounterText]        = useState('');
  const [reflectionText,    setReflectionText]     = useState('');

  // ── Helpers ────────────────────────────────────────────────────────────────
  function addEvidence(id) {
    if (selectedEvidence.includes(id)) {
      setSelectedEvidence(prev => prev.filter(e => e !== id));
    } else if (selectedEvidence.length < MAX_EVIDENCE) {
      setSelectedEvidence(prev => [...prev, id]);
    }
  }
  function moveUp(idx) {
    if (idx === 0) return;
    setSelectedEvidence(prev => {
      const next = [...prev];
      [next[idx - 1], next[idx]] = [next[idx], next[idx - 1]];
      return next;
    });
  }
  function moveDown(idx) {
    setSelectedEvidence(prev => {
      if (idx >= prev.length - 1) return prev;
      const next = [...prev];
      [next[idx], next[idx + 1]] = [next[idx + 1], next[idx]];
      return next;
    });
  }
  function getEvidence(id) { return evidencePool.find(e => e.id === id); }
  function getPosition(id) { return positions.find(p => p.id === id); }

  // ── Shared styles ──────────────────────────────────────────────────────────
  const card = (active, color = accent) => ({
    borderRadius: 14,
    border:       `1.5px solid ${active ? color + '77' : 'rgba(255,255,255,0.1)'}`,
    background:   active ? `${color}18` : 'rgba(255,255,255,0.04)',
    padding:      '14px 16px',
    cursor:       'pointer',
    transition:   'all 0.18s ease',
  });

  const continueBtn = (enabled) => ({
    padding: '14px 28px', fontWeight: 700, fontSize: '1rem',
    border: 'none', borderRadius: 12, cursor: enabled ? 'pointer' : 'default',
    background:  enabled ? accent : 'rgba(255,255,255,0.08)',
    color:       enabled ? '#fff' : 'rgba(255,255,255,0.3)',
    boxShadow:   enabled ? `0 0 18px ${accent}44` : 'none',
    transition:  'all 0.2s',
    alignSelf:   'stretch',
  });

  // ── Phase: pick a position ─────────────────────────────────────────────────
  if (phase === 'position') {
    return (
      <div className="voy-reading-shell" style={shell}>
        {/* Headline */}
        <p style={headline}>{r(screen.headline || '')}</p>
        <p style={sub}>Pick the position you want to defend. You'll build an argument for it using evidence from this lesson.</p>

        {positions.map(pos => (
          <div
            key={pos.id}
            onClick={() => setSelectedPosition(pos.id)}
            style={card(selectedPosition === pos.id)}
          >
            <p style={{ color: selectedPosition === pos.id ? accent : '#e2d9f3', fontWeight: 700, fontSize: '0.95rem', margin: '0 0 6px' }}>
              {pos.label}
            </p>
            {pos.summary && (
              <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.88rem', lineHeight: 1.55, margin: 0 }}>{pos.summary}</p>
            )}
          </div>
        ))}

        <button
          style={continueBtn(!!selectedPosition)}
          onClick={() => { if (selectedPosition) setPhase('evidence'); }}
        >
          Build my argument →
        </button>
      </div>
    );
  }

  // ── Phase: select evidence ─────────────────────────────────────────────────
  if (phase === 'evidence') {
    const pos = getPosition(selectedPosition);
    return (
      <div className="voy-reading-shell" style={shell}>
        <div style={{ background: `${accent}14`, border: `1px solid ${accent}33`, borderRadius: 12, padding: '10px 14px' }}>
          <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', margin: '0 0 4px' }}>Your position</p>
          <p style={{ color: accent, fontWeight: 700, fontSize: '0.95rem', margin: 0 }}>{pos?.label}</p>
        </div>

        <p style={sub}>Tap up to 4 pieces of evidence that best support your position. Then put them in order — strongest first.</p>

        {/* Evidence pool */}
        <p style={sectionLabel}>Evidence pool</p>
        {evidencePool.map(ev => {
          const selected = selectedEvidence.includes(ev.id);
          const full = !selected && selectedEvidence.length >= MAX_EVIDENCE;
          return (
            <div
              key={ev.id}
              onClick={() => !full && addEvidence(ev.id)}
              style={{
                ...card(selected, '#34D399'),
                opacity: full ? 0.45 : 1,
                cursor: full ? 'default' : 'pointer',
              }}
            >
              <p style={{ color: selected ? '#34D399' : '#e2d9f3', fontSize: '0.9rem', lineHeight: 1.55, margin: '0 0 4px', fontWeight: selected ? 600 : 400 }}>
                {ev.claim || ev.text}
              </p>
              {ev.source && (
                <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.75rem', margin: 0 }}>Source: {ev.source}</p>
              )}
              <p style={{ color: selected ? '#34D399' : 'rgba(255,255,255,0.3)', fontSize: '0.78rem', fontWeight: 700, margin: '6px 0 0', textAlign: 'right' }}>
                {selected ? '✓ Selected — tap to remove' : full ? 'Remove one to add this' : '+ Tap to add'}
              </p>
            </div>
          );
        })}

        {/* Selected pile with reorder */}
        {selectedEvidence.length > 0 && (
          <>
            <p style={sectionLabel}>Your argument ({selectedEvidence.length}/{MAX_EVIDENCE}) — put strongest first</p>
            {selectedEvidence.map((evId, idx) => {
              const ev = getEvidence(evId);
              if (!ev) return null;
              return (
                <div key={evId} style={{ display: 'flex', gap: 8, alignItems: 'flex-start' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 4, paddingTop: 2 }}>
                    <button onClick={() => moveUp(idx)}   style={iconBtn('#34D399')} disabled={idx === 0}>▲</button>
                    <button onClick={() => moveDown(idx)} style={iconBtn('#34D399')} disabled={idx === selectedEvidence.length - 1}>▼</button>
                  </div>
                  <div style={{ ...card(true, '#34D399'), flex: 1, padding: '10px 14px' }}>
                    <p style={{ color: '#34D399', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.04em', margin: '0 0 3px' }}>#{idx + 1}</p>
                    <p style={{ color: '#e2d9f3', fontSize: '0.88rem', lineHeight: 1.5, margin: 0 }}>{ev.claim || ev.text}</p>
                  </div>
                </div>
              );
            })}
          </>
        )}

        <button
          style={continueBtn(selectedEvidence.length >= 2)}
          onClick={() => { if (selectedEvidence.length >= 2) setPhase('counter'); }}
        >
          {selectedEvidence.length >= 2 ? 'Handle the counterargument →' : `Select at least 2 pieces of evidence`}
        </button>
      </div>
    );
  }

  // ── Phase: counterargument response ───────────────────────────────────────
  if (phase === 'counter') {
    return (
      <div className="voy-reading-shell" style={shell}>
        <p style={headline}>Handle the counterargument</p>

        {/* Their built argument summary */}
        <div style={{ background: `${accent}10`, border: `1px solid ${accent}30`, borderRadius: 14, padding: '14px 16px' }}>
          <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', margin: '0 0 6px' }}>Your argument</p>
          <p style={{ color: accent, fontWeight: 700, fontSize: '0.88rem', margin: '0 0 8px' }}>{getPosition(selectedPosition)?.label}</p>
          {selectedEvidence.map((evId, idx) => {
            const ev = getEvidence(evId);
            return ev ? (
              <p key={evId} style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.85rem', lineHeight: 1.5, margin: '0 0 4px', paddingLeft: 8, borderLeft: `2px solid ${accent}44` }}>
                {idx + 1}. {ev.claim || ev.text}
              </p>
            ) : null;
          })}
        </div>

        {/* Counterargument card */}
        <div style={{ background: 'rgba(239,68,68,0.08)', border: '1.5px solid rgba(239,68,68,0.3)', borderRadius: 14, padding: '14px 16px' }}>
          <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', margin: '0 0 6px' }}>Someone argues</p>
          <p style={{ color: '#FCA5A5', fontSize: '0.95rem', lineHeight: 1.6, margin: 0 }}>{r(counterargument)}</p>
        </div>

        <p style={sub}>{counterPromptHint}</p>

        <textarea
          value={counterText}
          onChange={e => setCounterText(e.target.value)}
          placeholder="Your response to the counterargument…"
          rows={4}
          style={textArea(counterText, accent)}
        />

        <button
          style={continueBtn(counterText.trim().length > 0)}
          onClick={() => { if (counterText.trim()) setPhase(reflectionPrompt ? 'reflection' : 'done'); }}
        >
          {reflectionPrompt ? 'One more step →' : 'Finish →'}
        </button>
      </div>
    );
  }

  // ── Phase: reflection ──────────────────────────────────────────────────────
  if (phase === 'reflection') {
    return (
      <div className="voy-reading-shell" style={shell}>
        <p style={headline}>Reflect</p>

        <div style={{ background: `${accent}10`, border: `1px solid ${accent}30`, borderRadius: 12, padding: '14px 16px' }}>
          <p style={{ color: '#e2d9f3', fontSize: '0.95rem', lineHeight: 1.6, margin: 0 }}>{r(reflectionPrompt)}</p>
        </div>

        <textarea
          value={reflectionText}
          onChange={e => setReflectionText(e.target.value)}
          placeholder="Your thoughts… (optional)"
          rows={4}
          style={textArea(reflectionText, accent)}
        />

        <button style={continueBtn(true)} onClick={onComplete}>
          Continue →
        </button>
      </div>
    );
  }

  // Fallback: done
  return null;
}

// ── Shared style objects ───────────────────────────────────────────────────
const shell = {
  height: '100%', overflowY: 'auto', padding: '20px 18px 28px',
  display: 'flex', flexDirection: 'column', gap: 14,
};
const headline = {
  color: '#e2d9f3', fontSize: '1.05rem', fontWeight: 700,
  lineHeight: 1.45, margin: 0,
};
const sub = {
  color: 'rgba(255,255,255,0.55)', fontSize: '0.88rem',
  lineHeight: 1.6, margin: 0,
};
const sectionLabel = {
  color: 'rgba(255,255,255,0.35)', fontSize: '0.72rem', fontWeight: 700,
  letterSpacing: '0.06em', textTransform: 'uppercase', margin: '4px 0 -4px',
};
const iconBtn = (color) => ({
  width: 28, height: 28, borderRadius: 6, border: `1px solid ${color}44`,
  background: `${color}18`, color, fontWeight: 700, fontSize: '0.75rem',
  cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
  padding: 0, lineHeight: 1,
  transition: 'opacity 0.15s',
});
const textArea = (value, accent) => ({
  width: '100%', padding: '14px 16px',
  background: 'rgba(255,255,255,0.06)',
  border: `1.5px solid ${value ? accent + '66' : 'rgba(255,255,255,0.12)'}`,
  borderRadius: 12, color: '#fff', fontSize: '0.96rem', lineHeight: 1.6,
  resize: 'vertical', outline: 'none', fontFamily: 'inherit',
  transition: 'border-color 0.2s', boxSizing: 'border-box',
});
