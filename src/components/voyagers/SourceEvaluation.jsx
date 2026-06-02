// ─────────────────────────────────────────────────────────────────────────────
// SourceEvaluation.jsx — Voyager interaction format 4 (Spec v1.1)
//
// Two modes, selected automatically by source count:
//
// RANKING MODE (sources.length <= 3):
//   3-source ranking + reasoning + expert reveal
//   Schema: { type, topic, sources[3], rankingPrompt, reasoningPrompt, reveal }
//   sources[]: { name, type, claim, evidence }
//   UX: Tap slot → tap source to assign; reason; reveal.
//
// TIER-CLASSIFICATION MODE (sources.length > 3):
//   Per-source tier assignment + reasoning + expert reveal
//   Schema: { type, headline, intro, sources[N], synthesisPrompt, reflectionPrompt }
//   sources[]: { id, tier, title, type, context, quote, evaluation }
//   UX: Expand each source card, assign it a tier from the dynamic tier set,
//       write reasoning, see expert evaluation.
// ─────────────────────────────────────────────────────────────────────────────
import { useState } from 'react';

const RANK_SLOTS = [
  { key: 'most',     label: 'Most credible',     color: '#34D399' },
  { key: 'somewhat', label: 'Somewhat credible',  color: '#FBBF24' },
  { key: 'least',    label: 'Least credible',     color: '#F87171' },
];

const TIER_COLORS = {
  'A':               '#34D399',
  'B':               '#FBBF24',
  'C-cultural':      '#60A5FA',
  'C-pseudoscience': '#F87171',
  'mixed':           '#A78BFA',
};

function tierColor(tier, accent) {
  return TIER_COLORS[tier] || accent;
}

function tierLabel(tier) {
  if (tier === 'A')               return 'Tier A';
  if (tier === 'B')               return 'Tier B';
  if (tier === 'C-cultural')      return 'Tier C (cultural)';
  if (tier === 'C-pseudoscience') return 'Tier C (pseudoscience)';
  if (tier === 'mixed')           return 'Mixed tier';
  return `Tier ${tier}`;
}

export default function SourceEvaluation({ screen, accent, childName, onComplete }) {
  const r = t => (t || '').replace(/\{name\}/g, childName);

  // Normalize sources: support name/title, claim/content, evidence fields
  const sources = (screen.sources || []).map(s => ({
    ...s,
    name:     s.name     || s.title   || '',
    claim:    s.claim    || s.content || '',
    evidence: s.evidence || '',
  }));

  const rankingPrompt   = screen.rankingPrompt   || 'Rank these sources by credibility.';
  const reasoningPrompt = screen.reasoningPrompt || 'Explain your ranking in 2–3 sentences.';

  // Build reveal from per-source evaluation fields (handles both string and object forms)
  const buildRevealFromEvaluations = () => {
    const parts = (screen.sources || []).map(s => {
      const name = s.name || s.title || '';
      const ev = s.evaluation;
      if (typeof ev === 'string' && ev) {
        return name ? `${name}\n${ev}` : ev;
      }
      if (ev && typeof ev === 'object') {
        return [
          name,
          ev.tier       ? `Tier: ${ev.tier}`           : '',
          ev.strengths  ? `Strengths: ${ev.strengths}` : '',
          ev.concerns   ? `Concerns: ${ev.concerns}`   : '',
          ev.weight     ? `Weight: ${ev.weight}`       : '',
        ].filter(Boolean).join('\n');
      }
      return name;
    }).filter(Boolean).join('\n\n');
    const synthesis  = screen.synthesisPrompt  || '';
    const reflection = screen.reflectionPrompt || '';
    return [parts, synthesis && `Synthesis: ${synthesis}`, reflection && `Reflect: ${reflection}`].filter(Boolean).join('\n\n');
  };

  const revealRaw   = screen.reveal || '';
  const revealIsObj = typeof revealRaw === 'object' && revealRaw !== null;
  const revealTitle = revealIsObj ? (revealRaw.title || '') : '';
  const reveal      = revealRaw
    ? (revealIsObj ? (revealRaw.content || []).join('\n') : revealRaw)
    : buildRevealFromEvaluations();

  // ── Shared reveal view (used by both modes) ────────────────────────────────
  function RevealView({ onDone }) {
    return (
      <div className="voy-reading-shell" style={shell}>
        <p style={badge}>Expert source evaluation</p>
        {revealTitle && (
          <p style={{ color: '#e2d9f3', fontSize: '1rem', fontWeight: 700, margin: 0 }}>{revealTitle}</p>
        )}
        <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 14, padding: '16px 16px' }}>
          {reveal.split('\n').filter(Boolean).map((para, i) => (
            <p key={i} style={{ color: '#e2d9f3', fontSize: '0.93rem', lineHeight: 1.7, margin: i === 0 ? 0 : '12px 0 0' }}>{r(para)}</p>
          ))}
        </div>
        <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.85rem', lineHeight: 1.55, margin: 0 }}>
          Your classification isn't graded. The goal is building the habit of asking what kind of evidence matters.
        </p>
        <button style={continueBtn(true, accent)} onClick={onDone}>Continue →</button>
      </div>
    );
  }

  // ── Mode selector ──────────────────────────────────────────────────────────
  if (sources.length > 3) {
    return (
      <TierClassificationMode
        screen={screen}
        sources={sources}
        accent={accent}
        r={r}
        reveal={<RevealView onDone={onComplete} />}
      />
    );
  }
  return (
    <RankingMode
      screen={screen}
      sources={sources}
      accent={accent}
      r={r}
      rankingPrompt={rankingPrompt}
      reasoningPrompt={reasoningPrompt}
      reveal={<RevealView onDone={onComplete} />}
    />
  );
}

// ── Tier-classification mode ───────────────────────────────────────────────
function TierClassificationMode({ screen, sources, accent, r, reveal }) {
  // Derive tier options dynamically from the data
  const tierOptions = [...new Set(sources.map(s => s.tier).filter(Boolean))];

  const [expanded,      setExpanded]      = useState(null);       // source id
  const [assignments,   setAssignments]   = useState({});         // { sourceId: tier }
  const [reasoningText, setReasoningText] = useState('');
  const [showReveal,    setShowReveal]    = useState(false);

  const allAssigned = sources.every(s => assignments[s.id]);

  function assignTier(sourceId, tier) {
    setAssignments(prev => ({ ...prev, [sourceId]: tier }));
  }

  if (showReveal) return reveal;

  return (
    <div className="voy-reading-shell" style={shell}>
      {/* Topic */}
      <div>
        <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', margin: '0 0 4px' }}>Source Evaluation</p>
        <p style={{ color: '#e2d9f3', fontSize: '1rem', fontWeight: 700, lineHeight: 1.45, margin: 0 }}>{r(screen.topic || screen.headline || '')}</p>
      </div>

      {screen.intro && (
        <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.88rem', lineHeight: 1.6, margin: 0 }}>{r(screen.intro)}</p>
      )}

      {!allAssigned && (
        <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.8rem', margin: 0 }}>
          Assign a tier to each source to continue. ({Object.keys(assignments).length}/{sources.length} classified)
        </p>
      )}

      {/* Tier legend */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
        {tierOptions.map(t => (
          <span key={t} style={{ background: `${tierColor(t, accent)}18`, border: `1px solid ${tierColor(t, accent)}44`, borderRadius: 8, padding: '3px 10px', color: tierColor(t, accent), fontSize: '0.72rem', fontWeight: 700 }}>
            {tierLabel(t)}
          </span>
        ))}
      </div>

      {/* Source cards */}
      {sources.map((src, idx) => {
        const isOpen    = expanded === src.id;
        const assigned  = assignments[src.id];
        const cardColor = assigned ? tierColor(assigned, accent) : 'rgba(255,255,255,0.15)';

        return (
          <div key={src.id} style={{ borderRadius: 14, border: `1.5px solid ${assigned ? cardColor : isOpen ? accent + '66' : 'rgba(255,255,255,0.14)'}`, background: assigned ? `${tierColor(assigned, accent)}0a` : 'rgba(255,255,255,0.04)', transition: 'all 0.18s ease' }}>
            {/* Header — always visible */}
            <div
              onClick={() => setExpanded(prev => prev === src.id ? null : src.id)}
              style={{ padding: '12px 14px', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 8 }}
            >
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
                  <span style={{ color: '#e2d9f3', fontWeight: 700, fontSize: '0.88rem', lineHeight: 1.35 }}>{src.name}</span>
                  {assigned && (
                    <span style={{ background: `${tierColor(assigned, accent)}22`, border: `1px solid ${tierColor(assigned, accent)}55`, borderRadius: 6, padding: '2px 8px', color: tierColor(assigned, accent), fontSize: '0.68rem', fontWeight: 700, whiteSpace: 'nowrap' }}>
                      {tierLabel(assigned)}
                    </span>
                  )}
                </div>
                {src.type && (
                  <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.75rem' }}>{src.type}</span>
                )}
              </div>
              <span style={{ color: isOpen ? accent : 'rgba(255,255,255,0.3)', fontSize: '0.9rem', flexShrink: 0, marginTop: 2 }}>
                {isOpen ? '▲' : '▼'}
              </span>
            </div>

            {/* Expanded content */}
            {isOpen && (
              <div style={{ padding: '0 14px 14px', display: 'flex', flexDirection: 'column', gap: 10 }}>
                {src.context && (
                  <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.85rem', lineHeight: 1.6, margin: 0 }}>{r(src.context)}</p>
                )}
                {src.quote && (
                  <p style={{ color: accent, fontSize: '0.88rem', fontStyle: 'italic', lineHeight: 1.6, margin: 0, borderLeft: `2px solid ${accent}44`, paddingLeft: 10 }}>
                    "{r(src.quote)}"
                  </p>
                )}
                {src.claim && (
                  <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.88rem', fontStyle: 'italic', lineHeight: 1.55, margin: 0 }}>"{r(src.claim)}"</p>
                )}
                {src.evidence && (
                  <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.8rem', lineHeight: 1.5, margin: 0 }}>Evidence: {r(src.evidence)}</p>
                )}
              </div>
            )}

            {/* Tier assignment buttons */}
            <div style={{ padding: isOpen ? '0 14px 14px' : '0 14px 12px', display: 'flex', flexWrap: 'wrap', gap: 6 }}>
              {tierOptions.map(t => {
                const isSelected = assigned === t;
                const tc = tierColor(t, accent);
                return (
                  <button
                    key={t}
                    onClick={() => assignTier(src.id, t)}
                    style={{
                      background:  isSelected ? `${tc}22` : 'rgba(255,255,255,0.04)',
                      border:      `1.5px solid ${isSelected ? tc : 'rgba(255,255,255,0.15)'}`,
                      borderRadius: 8, padding: '5px 12px',
                      color:       isSelected ? tc : 'rgba(255,255,255,0.5)',
                      fontSize: '0.75rem', fontWeight: isSelected ? 700 : 400,
                      cursor: 'pointer', transition: 'all 0.15s ease',
                    }}
                  >
                    {tierLabel(t)}
                  </button>
                );
              })}
            </div>
          </div>
        );
      })}

      {/* Reasoning (unlocks after all classified) */}
      {allAssigned && (
        <>
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: 4 }}>
            <p style={{ color: '#e2d9f3', fontSize: '0.93rem', lineHeight: 1.6, margin: '0 0 10px' }}>
              {r(screen.reasoningPrompt || 'Explain your classifications in 2–3 sentences. What signals helped you distinguish the tiers?')}
            </p>
            <textarea
              value={reasoningText}
              onChange={e => setReasoningText(e.target.value)}
              placeholder="What signals helped you classify each source?"
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

      {!allAssigned && (
        <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.85rem', textAlign: 'center', margin: 0 }}>
          Classify all {sources.length} sources to continue
        </p>
      )}
    </div>
  );
}

// ── Ranking mode (original 3-source UX, unchanged) ─────────────────────────
function RankingMode({ screen, sources, accent, r, rankingPrompt, reasoningPrompt, reveal }) {
  const [rankings,      setRankings]      = useState({ most: null, somewhat: null, least: null });
  const [activeSlot,    setActiveSlot]    = useState(null);
  const [reasoningText, setReasoningText] = useState('');
  const [showReveal,    setShowReveal]    = useState(false);

  const assignedIndices = new Set(Object.values(rankings).filter(v => v !== null));
  const allRanked = RANK_SLOTS.every(s => rankings[s.key] !== null);

  function assignToSlot(sourceIdx) {
    if (!activeSlot) return;
    setRankings(prev => {
      const next = { ...prev };
      for (const [k, v] of Object.entries(next)) {
        if (v === sourceIdx) next[k] = null;
      }
      next[activeSlot] = sourceIdx;
      return next;
    });
    setActiveSlot(null);
  }

  function clearSlot(slotKey) {
    setRankings(prev => ({ ...prev, [slotKey]: null }));
    setActiveSlot(null);
  }

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

  if (showReveal) return reveal;

  return (
    <div className="voy-reading-shell" style={shell}>
      <div>
        <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', margin: '0 0 4px' }}>Topic</p>
        <p style={{ color: '#e2d9f3', fontSize: '1rem', fontWeight: 700, lineHeight: 1.45, margin: 0 }}>{r(screen.topic || screen.headline || '')}</p>
      </div>

      <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.88rem', lineHeight: 1.6, margin: 0 }}>
        {r(rankingPrompt)} Tap a credibility slot, then tap the source you want to place there.
      </p>

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
                  style={{ background: 'none', border: 'none', cursor: 'pointer', color: slot.color, fontWeight: 700, fontSize: '0.88rem', padding: 0, textAlign: 'left' }}
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

      <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', margin: '4px 0 -4px' }}>Sources</p>
      {sources.map((src, idx) => (
        <SourceCard key={idx} source={src} idx={idx} />
      ))}

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
