// ─────────────────────────────────────────────────────────────────────────────
// InvestigationGame.jsx — Voyager game format: investigation
//
// Screen schema:
//   { type: 'investigation', headline, intro, categories[], items[] }
//   categories[]: { id, label }
//   items[]:      { id, text, categoryId }  (categoryId = correct bucket)
//
// Behaviour: items appear as unassigned cards. Tap an item to select it,
// then tap a category bucket to assign it. Submit → shows correct/wrong per
// item. If any wrong → retry. If all correct → Continue button.
// ─────────────────────────────────────────────────────────────────────────────
import { useState } from 'react';

export default function InvestigationGame({ screen, accent, childName, guideAvatar, onComplete }) {
  const r = t => (t || '').replace(/\{name\}/g, childName);
  const categories = screen.categories || [];
  const items      = screen.items      || [];

  const [assignments, setAssignments] = useState({});    // { itemId: categoryId }
  const [selected,    setSelected]    = useState(null);  // itemId currently tapped
  const [submitted,   setSubmitted]   = useState(false);

  const assignedCount = Object.keys(assignments).length;
  const allAssigned   = assignedCount === items.length;

  const correctness = submitted
    ? Object.fromEntries(items.map(item => [item.id, assignments[item.id] === item.categoryId]))
    : {};
  const allCorrect = submitted && items.every(item => correctness[item.id]);

  function handleItemTap(itemId) {
    if (submitted) return;
    setSelected(prev => prev === itemId ? null : itemId);
  }

  function handleCategoryTap(catId) {
    if (!selected || submitted) return;
    setAssignments(prev => ({ ...prev, [selected]: catId }));
    setSelected(null);
  }

  function handleSubmit() {
    if (!allAssigned) return;
    setSubmitted(true);
  }

  function handleRetry() {
    setAssignments({});
    setSelected(null);
    setSubmitted(false);
  }

  const catColors = ['#818CF8', '#34D399', '#FBBF24', '#F472B6'];

  const itemCardStyle = (itemId) => {
    const isSelected = selected === itemId;
    const isAssigned = assignments[itemId] !== undefined;
    const isCorrect  = submitted && correctness[itemId];
    const isWrong    = submitted && !correctness[itemId];
    return {
      padding: '10px 12px',
      borderRadius: 10,
      border: `1.5px solid ${isWrong ? '#f87171' : isCorrect ? '#4ade80' : isSelected ? accent : isAssigned ? `${accent}55` : 'rgba(255,255,255,0.15)'}`,
      background: isWrong ? 'rgba(248,113,113,0.10)' : isCorrect ? 'rgba(74,222,128,0.10)' : isSelected ? `${accent}22` : isAssigned ? 'rgba(255,255,255,0.06)' : 'rgba(255,255,255,0.04)',
      color: isWrong ? '#f87171' : isCorrect ? '#4ade80' : '#e2d9f3',
      fontSize: '0.88rem', lineHeight: 1.45, cursor: submitted ? 'default' : 'pointer',
      transition: 'all 0.15s ease',
    };
  };

  const catBucketStyle = (catId, colorIdx) => {
    const color = catColors[colorIdx % catColors.length];
    const isActive = selected !== null && !submitted;
    return {
      padding: '10px 14px',
      borderRadius: 10,
      border: `1.5px solid ${isActive ? color : `${color}44`}`,
      background: isActive ? `${color}18` : `${color}0a`,
      color: color,
      fontSize: '0.82rem', fontWeight: 700, cursor: isActive ? 'pointer' : 'default',
      textAlign: 'center', transition: 'all 0.15s ease',
      letterSpacing: '0.02em',
    };
  };

  return (
    <div style={{ height: '100%', overflowY: 'auto', padding: '20px 18px 28px', display: 'flex', flexDirection: 'column', gap: 14 }}>
      {/* Badge */}
      <p style={{ alignSelf: 'flex-start', background: `${accent}22`, border: `1px solid ${accent}44`, borderRadius: 8, padding: '4px 12px', color: accent, fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', margin: 0 }}>
        Investigation
      </p>

      <p style={{ color: '#e2d9f3', fontSize: '1.05rem', fontWeight: 700, lineHeight: 1.45, margin: 0 }}>
        {r(screen.headline || 'Sort each item into the right category')}
      </p>

      {screen.intro && (
        <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.88rem', lineHeight: 1.6, margin: 0 }}>
          {r(screen.intro)}
        </p>
      )}

      {!submitted && (
        <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.8rem', margin: 0 }}>
          Tap an item, then tap a category to assign it. Assign all items, then submit.
        </p>
      )}

      {/* Category buckets */}
      <div style={{ display: 'grid', gridTemplateColumns: `repeat(${Math.min(categories.length, 2)}, 1fr)`, gap: 8 }}>
        {categories.map((cat, idx) => (
          <div key={cat.id} onClick={() => handleCategoryTap(cat.id)} style={catBucketStyle(cat.id, idx)}>
            {r(cat.label)}
            {!submitted && (
              <div style={{ fontSize: '0.72rem', fontWeight: 400, opacity: 0.7, marginTop: 2 }}>
                {Object.values(assignments).filter(v => v === cat.id).length} assigned
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Items */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        {items.map(item => {
          const assignedCat = categories.find(c => c.id === assignments[item.id]);
          return (
            <div key={item.id} onClick={() => handleItemTap(item.id)} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <div style={{ ...itemCardStyle(item.id), flex: 1 }}>
                {r(item.text)}
              </div>
              {assignedCat && (
                <span style={{ fontSize: '0.73rem', color: catColors[categories.indexOf(assignedCat) % catColors.length], fontWeight: 700, whiteSpace: 'nowrap' }}>
                  {r(assignedCat.label)}
                </span>
              )}
              {submitted && !correctness[item.id] && (
                <span style={{ fontSize: '0.73rem', color: '#86efac', fontWeight: 700, whiteSpace: 'nowrap' }}>
                  → {r(categories.find(c => c.id === item.categoryId)?.label || '')}
                </span>
              )}
            </div>
          );
        })}
      </div>

      {/* Progress */}
      {!submitted && (
        <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.8rem', margin: 0 }}>
          {assignedCount} / {items.length} assigned
        </p>
      )}

      {/* Feedback */}
      {submitted && !allCorrect && (
        <div style={{ background: 'rgba(248,113,113,0.08)', border: '1px solid rgba(248,113,113,0.25)', borderRadius: 10, padding: '12px 14px' }}>
          <p style={{ color: '#fca5a5', fontSize: '0.88rem', margin: 0 }}>
            Some items are in the wrong category — correct placements shown above. Try again.
          </p>
        </div>
      )}

      {/* Buttons */}
      {!submitted && (
        <button
          onClick={handleSubmit}
          disabled={!allAssigned}
          style={{ padding: '14px 28px', fontWeight: 700, fontSize: '1rem', border: 'none', borderRadius: 12, cursor: allAssigned ? 'pointer' : 'default', background: allAssigned ? accent : 'rgba(255,255,255,0.08)', color: allAssigned ? '#fff' : 'rgba(255,255,255,0.3)', boxShadow: allAssigned ? `0 0 18px ${accent}44` : 'none', transition: 'all 0.2s', alignSelf: 'stretch' }}
        >
          Submit →
        </button>
      )}

      {submitted && !allCorrect && (
        <button
          onClick={handleRetry}
          style={{ padding: '14px 28px', fontWeight: 700, fontSize: '1rem', border: `1.5px solid ${accent}55`, borderRadius: 12, cursor: 'pointer', background: 'transparent', color: accent, alignSelf: 'stretch' }}
        >
          Try again
        </button>
      )}

      {allCorrect && (
        <button
          onClick={onComplete}
          style={{ padding: '14px 28px', fontWeight: 700, fontSize: '1rem', border: 'none', borderRadius: 12, cursor: 'pointer', background: accent, color: '#fff', boxShadow: `0 0 18px ${accent}44`, alignSelf: 'stretch' }}
        >
          Continue →
        </button>
      )}
    </div>
  );
}
