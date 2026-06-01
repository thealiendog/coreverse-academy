// ─────────────────────────────────────────────────────────────────────────────
// SequenceGame.jsx — Voyager game format: sequence
//
// Screen schema:
//   { type: 'sequence', headline, intro, items[], completionMessage }
//   items[]: { id, text, position }  (position = correct 1-based rank)
//
// Behaviour: items presented in shuffled order. Up/Down arrows to reorder.
// "Check order" → correct positions turn green, wrong turn red.
// If not all correct → Retry button. If all correct → Continue button.
// ─────────────────────────────────────────────────────────────────────────────
import { useState } from 'react';

function shuffleArr(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function SequenceGame({ screen, accent, childName, guideAvatar, onComplete }) {
  const r = t => (t || '').replace(/\{name\}/g, childName);
  const items = screen.items || [];

  // Normalize: items may use 'text' or 'label' for display content
  const normalize = item => ({ ...item, text: item.text || item.label || '' });
  const [order,    setOrder]    = useState(() => shuffleArr(items.map(normalize)));
  const [checked,  setChecked]  = useState(false);
  const [attempts, setAttempts] = useState(0);

  const correctness = checked ? order.map((item, idx) => item.position === idx + 1) : [];
  const allCorrect  = checked && correctness.every(Boolean);

  function moveItem(idx, dir) {
    if (checked) return;
    const next = [...order];
    const swapIdx = idx + dir;
    if (swapIdx < 0 || swapIdx >= next.length) return;
    [next[idx], next[swapIdx]] = [next[swapIdx], next[idx]];
    setOrder(next);
  }

  function handleCheck() {
    setAttempts(a => a + 1);
    setChecked(true);
  }

  function handleRetry() {
    setOrder(shuffleArr(items));
    setChecked(false);
  }

  const itemStyle = (idx) => {
    if (!checked) return {
      background: 'rgba(255,255,255,0.05)',
      border: '1px solid rgba(255,255,255,0.12)',
      borderRadius: 10, padding: '12px 14px',
      color: '#e2d9f3', fontSize: '0.92rem', lineHeight: 1.5,
    };
    const correct = correctness[idx];
    return {
      background: correct ? 'rgba(74,222,128,0.12)' : 'rgba(248,113,113,0.10)',
      border: `1px solid ${correct ? '#4ade80' : '#f87171'}`,
      borderRadius: 10, padding: '12px 14px',
      color: correct ? '#4ade80' : '#f87171', fontSize: '0.92rem', lineHeight: 1.5,
    };
  };

  const arrowBtn = (enabled) => ({
    background: enabled ? 'rgba(255,255,255,0.08)' : 'rgba(255,255,255,0.03)',
    border: '1px solid rgba(255,255,255,0.1)',
    borderRadius: 6, color: enabled ? 'rgba(255,255,255,0.6)' : 'rgba(255,255,255,0.15)',
    fontSize: '0.8rem', cursor: enabled ? 'pointer' : 'default',
    padding: '4px 8px', lineHeight: 1,
  });

  return (
    <div style={{ height: '100%', overflowY: 'auto', padding: '20px 18px 28px', display: 'flex', flexDirection: 'column', gap: 14 }}>
      {/* Badge */}
      <p style={{ alignSelf: 'flex-start', background: `${accent}22`, border: `1px solid ${accent}44`, borderRadius: 8, padding: '4px 12px', color: accent, fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', margin: 0 }}>
        Sequence
      </p>

      <p style={{ color: '#e2d9f3', fontSize: '1.05rem', fontWeight: 700, lineHeight: 1.45, margin: 0 }}>
        {r(screen.headline || 'Put these in the correct order')}
      </p>

      {screen.intro && (
        <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.88rem', lineHeight: 1.6, margin: 0 }}>
          {r(screen.intro)}
        </p>
      )}

      {!checked && (
        <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.8rem', margin: 0 }}>
          Use the arrows to reorder, then check your answer.
        </p>
      )}

      {/* Item list */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        {order.map((item, idx) => (
          <div key={item.id} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            {/* Position number */}
            <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.8rem', fontWeight: 700, minWidth: 20, textAlign: 'right' }}>
              {idx + 1}.
            </span>

            {/* Item card */}
            <div style={{ ...itemStyle(idx), flex: 1 }}>
              {r(item.text)}
            </div>

            {/* Arrow controls */}
            {!checked && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                <button onClick={() => moveItem(idx, -1)} disabled={idx === 0} style={arrowBtn(idx !== 0)}>▲</button>
                <button onClick={() => moveItem(idx, 1)} disabled={idx === order.length - 1} style={arrowBtn(idx !== order.length - 1)}>▼</button>
              </div>
            )}

            {/* Correct/wrong indicator */}
            {checked && (
              <span style={{ fontSize: '1rem', flexShrink: 0 }}>{correctness[idx] ? '✓' : '✗'}</span>
            )}
          </div>
        ))}
      </div>

      {/* Feedback on check */}
      {checked && !allCorrect && (
        <div style={{ background: 'rgba(248,113,113,0.08)', border: '1px solid rgba(248,113,113,0.25)', borderRadius: 10, padding: '12px 14px' }}>
          <p style={{ color: '#fca5a5', fontSize: '0.88rem', margin: 0 }}>
            Not quite — the highlighted items are out of place. Try again.
          </p>
        </div>
      )}

      {checked && allCorrect && screen.completionMessage && (
        <div style={{ background: 'rgba(74,222,128,0.08)', border: '1px solid rgba(74,222,128,0.25)', borderRadius: 10, padding: '12px 14px' }}>
          <p style={{ color: '#86efac', fontSize: '0.88rem', margin: 0 }}>{r(screen.completionMessage)}</p>
        </div>
      )}

      {/* Action buttons */}
      {!checked && (
        <button
          onClick={handleCheck}
          style={{ padding: '14px 28px', fontWeight: 700, fontSize: '1rem', border: 'none', borderRadius: 12, cursor: 'pointer', background: accent, color: '#fff', boxShadow: `0 0 18px ${accent}44`, alignSelf: 'stretch' }}
        >
          Check order →
        </button>
      )}

      {checked && !allCorrect && (
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
