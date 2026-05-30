// ─────────────────────────────────────────────────────────────────────────────
// SourceEvaluation.jsx — Voyager interaction format 4 (Spec v1.1)
// 3-source ranking + reasoning + expert reveal
//
// Screen schema:
//   { type: 'source-evaluation', topic, sources[3], rankingPrompt, reasoningPrompt, reveal }
//   sources[]: { name, type, claim, evidence }
//   reveal:    string — what real source evaluation looks like for this topic
//
// UX: Tap a slot label (Most / Somewhat / Least credible) then tap a source card
// to assign it. Swapping is allowed. When all 3 are ranked, reasoning textarea
// unlocks. After submitting reasoning, reveal is shown.
// ─────────────────────────────────────────────────────────────────────────────
import { useState } from 'react';

const RANK_SLOTS = [
  { key: 'most',     label: 'Most credible',     color: '#34D399' },
  { key: 'somewhat', label: 'Somewhat credible',  color: '#FBBF24' },
  { key: 'least',    label: 'Least credible',     color: '#F87171' },
];

export default function SourceEvaluation({ screen, accent, childName, onComplete }) {
  const r = t => (t || '').replace(/\{name\}/g, childName);

  const sources         = screen.sources       || [];
  const rankingPrompt   = screen.rankingPrompt  || 'Rank these sources by credibility.';
  const reasoningPrompt = screen.reasoningPrompt || 'Explain your ranking in 2–3 sentences.';
  const reveal          = screen.reveal         || '';

  // ── State ──────────────────────────────────────────────────────────────────
  // rankings: { most: sourceIdx|null, somewhat: sourceIdx|null, least: sourceIdx|null }
  const [rankings,       setRankings]       = useState({ most: null, somewhat: null, least: null });
  const [activeSlot,     setActiveSlot]     = useState(null);   // which slot is being assigned
  const [reasoningText,  setReasoningText]  = useState('');
  const [showReveal,     setShowReveal]     = useState(false);

  // Which source indices are already assigned
  const assignedIndices = new Set(Object.values(rankings).filter(v => v !== null));
  const allRanked = RANK_SLOTS.every(s => rankings[s.key] !== null);

  function assignToSlot(sourceIdx) {
    if (!activeSlot) return;
    setRankings(prev => {
      const next = { ...prev };
      // If this source is already in another slot, clear that slot first
      for (const [k, v] of Object.entries(next)) {
        if (v === sourceIdx) next[k] = null;
      }
      // If the active slot already had something, it goes back to pool (cleared)
      next[activeSlot] = sourceIdx;
      return next;
    });
    setActiveSlot(null);
  }

  function clearSlot(slotKey) {
    setRankings(prev => ({ ...prev, [slotKey]: null }));
    setActiveSlot(null);
  }

  // ── Source card ────────────────────────────────────────────────────────────
  function SourceCard({ source, idx, compact = false }) {
    const alreadyAssigned = assignedIndices.has(idx);
    const isSelectable    = activeSlot && !alreadyAssigned;
    return (
      <div
        onClick={() => isSelectable ? assignToSlot(idx) : undefined}
        style={{
          borderRadius:  14,
          border:        `1.5px solid ${isSelectable ? accent + '88' : alreadyAssigned ? 'rgba(255,255,255,0.08)' : 'rgba(255,255,255,0.14)'}`,
          background:    isSelectable ? `${accent}14` : alreadyAssigned ? 'rgba(255,255,255,0.02)' : 'rgba(255,255,255,0.05)',
          padding:       compact ? '10px 14px' : '14px 16px',
          cursor:        isSelectable ? 'pointer' : 'default',
          opacity:       alreadyAssigned ? 0.4 : 1,
          transition:    'all 0.18s ease',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 8, marginBottom: compact ? 0 : 6 }}>
          <span style={{ color: '#e2d9f3', fontWeight: 700, fontSize: '0.9rem' }}>{source.name}</span>
          {source.type && (
            <span style={{ background: 'rgba(255,255,255,0.08)', borderRadius: 6, padding: '2px 8px', color: 'rgba(255,255,255,0.5)', fontSize: '0.7rem', fontWeight: 600, whiteSpace: 'nowrap' }}>
              {source.type}
            </span>
          )}
        </div>
        {!compact && (
          <>
            {source.claim && (
              <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.88rem', lineHeight: 1.55, margin: '0 0 6px' }}>
                <em>"{source.claim}"</em>
              </p>
            )}
            {source.evidence && (
              <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.8rem', lineHeight: 1.5, margin: 0 }}>
                Evidence: {source.evidence}
              </p>
            )}
            {isSelectable && (
              <p style={{ color: accent, fontSize: '0.78rem', fontWeight: 700, margin: '8px 0 0', textAlign: 'right' }}>
                Tap to assign →
              </p>
            )}
          </>
        )}
      </div>
    );
  }

  // ── Reveal view ────────────────────────────────────────────────────────────
  if (showReveal) {
    return (
      <div style={shell}>
        <p style={badge}>Expert source evaluation</p>
        <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 14, padding: '16px 16px' }}>
          {reveal.split('\n').filter(Boolean).map((para, i) => (
            <p key={i} style={{ color: '#e2d9f3', fontSize: '0.93rem', lineHeight: 1.7, margin: i === 0 ? 0 : '10px 0 0' }}>{r(para)}</p>
          ))}
        </div>
        <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.85rem', lineHeight: 1.55, margin: 0 }}>
          Your ranking isn't graded. The goal is building the habit of asking what kind of evidence matters.
        </p>
        <button style={continueBtn(true, accent)} onClick={onComplete}>Continue →</button>
      </div>
    );
  }

  // ── Main view ──────────────────────────────────────────────────────────────
  return (
    <div style={shell}>
      {/* Topic */}
      <div>
        <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', margin: '0 0 4px' }}>Topic</p>
        <p style={{ color: '#e2d9f3', fontSize: '1rem', fontWeight: 700, lineHeight: 1.45, margin: 0 }}>{r(screen.topic || '')}</p>
      </div>

      {/* Ranking prompt */}
      <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.88rem', lineHeight: 1.6, margin: 0 }}>
        {r(rankingPrompt)} Tap a credibility slot, then tap the source you want to place there.
      </p>

      {/* Rank slots */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {RANK_SLOTS.map(slot => {
          const assignedIdx = rankings[slot.key];
          const isActive    = activeSlot === slot.key;
          return (
            <div
              key={slot.key}
              style={{
                borderRadius: 14,
                border:       `1.5px solid ${isActive ? slot.color + '99' : assignedIdx !== null ? slot.color + '44' : 'rgba(255,255,255,0.12)'}`,
                background:   isActive ? `${slot.color}14` : assignedIdx !== null ? `${slot.color}08` : 'rgba(255,255,255,0.03)',
                padding:      '12px 14px',
                transition:   'all 0.18s ease',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: assignedIdx !== null ? 8 : 0 }}>
                <button
                  onClick={() => setActiveSlot(prev => prev === slot.key ? null : slot.key)}
                  style={{
                    background: 'none', border: 'none', cursor: 'pointer',
                    color: slot.color, fontWeight: 700, fontSize: '0.88rem',
                    padding: 0, textAlign: 'left',
                  }}
                >
                  {slot.label} {isActive ? '▲' : '▼'}
                </button>
                {assignedIdx !== null && (
                  <button
                    onClick={() => clearSlot(slot.key)}
                    style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'rgba(255,255,255,0.35)', fontSize: '0.78rem', padding: 0 }}
                  >
                    ✕ clear
                  </button>
                )}
              </div>

              {assignedIdx !== null && sources[assignedIdx] && (
                <SourceCard source={sources[assignedIdx]} idx={assignedIdx} compact />
              )}

              {isActive && (
                <p style={{ color: slot.color, fontSize: '0.78rem', margin: assignedIdx !== null ? '8px 0 0' : '4px 0 0' }}>
                  Tap a source card below to place it here
                </p>
              )}
            </div>
          );
        })}
      </div>

      {/* Source pool */}
      <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', margin: '4px 0 -4px' }}>Sources</p>
      {sources.map((src, idx) => (
        <SourceCard key={idx} source={src} idx={idx} />
      ))}

      {/* Reasoning (unlocks after all ranked) */}
      {allRanked && (
        <>
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: 4 }}>
            <p style={{ color: '#e2d9f3', fontSize: '0.93rem', lineHeight: 1.6, margin: '0 0 10px' }}>{r(reasoningPrompt)}</p>
            <textarea
              value={reasoningText}
              onChange={e => setReasoningText(e.target.value)}
              placeholder="Why did you rank them this way? What signals mattered?"
              rows={4}
              style={textArea(reasoningText, accent)}
            />
          </div>

          <button
            style={continueBtn(reasoningText.trim().length > 0, accent)}
            onClick={() => { if (reasoningText.trim()) setShowReveal(true); }}
          >
            See expert evaluation →
          </button>
        </>
      )}

      {!allRanked && (
        <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.85rem', textAlign: 'center', margin: 0 }}>
          Rank all 3 sources to continue
        </p>
      )}
    </div>
  );
}

// ── Shared style helpers ───────────────────────────────────────────────────
const shell = {
  height: '100%', overflowY: 'auto', padding: '20px 18px 28px',
  display: 'flex', flexDirection: 'column', gap: 14,
};
const badge = {
  alignSelf: 'flex-start',
  background: 'rgba(167,139,250,0.15)', border: '1px solid rgba(167,139,250,0.4)',
  borderRadius: 8, padding: '4px 12px', color: '#A78BFA',
  fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase',
};
const continueBtn = (enabled, accent) => ({
  padding: '14px 28px', fontWeight: 700, fontSize: '1rem',
  border: 'none', borderRadius: 12, cursor: enabled ? 'pointer' : 'default',
  background:  enabled ? accent : 'rgba(255,255,255,0.08)',
  color:       enabled ? '#fff' : 'rgba(255,255,255,0.3)',
  boxShadow:   enabled ? `0 0 18px ${accent}44` : 'none',
  transition:  'all 0.2s', alignSelf: 'stretch',
});
const textArea = (value, accent) => ({
  width: '100%', padding: '14px 16px',
  background: 'rgba(255,255,255,0.06)',
  border: `1.5px solid ${value ? accent + '66' : 'rgba(255,255,255,0.12)'}`,
  borderRadius: 12, color: '#fff', fontSize: '0.96rem', lineHeight: 1.6,
  resize: 'vertical', outline: 'none', fontFamily: 'inherit',
  transition: 'border-color 0.2s', boxSizing: 'border-box',
});
