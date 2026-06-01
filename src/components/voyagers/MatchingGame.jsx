// ─────────────────────────────────────────────────────────────────────────────
// MatchingGame.jsx — Voyager game format: matching
//
// Screen schema:
//   { type: 'matching', headline, intro, pairs[] }
//   pairs[]: { id, left, right }
//
// Behaviour: two columns, left terms + shuffled right definitions.
// Tap a left item (selects it), then tap a right item to form a match.
// Correct match → stays green. Wrong match → brief red flash, resets.
// When all pairs matched correctly, Continue button appears.
// ─────────────────────────────────────────────────────────────────────────────
import { useState, useEffect, useRef } from 'react';

function shuffleArr(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function MatchingGame({ screen, accent, childName, guideAvatar, onComplete }) {
  const r = t => (t || '').replace(/\{name\}/g, childName);
  // Normalize: support 'concept'/'term' as aliases for 'left', 'definition'/'application' as aliases for 'right'
  const pairs = (screen.pairs || []).map(p => ({
    ...p,
    left:  p.left  || p.concept || p.term        || '',
    right: p.right || p.definition || p.application || '',
  }));

  const [rightCol,    setRightCol]    = useState(() => shuffleArr(pairs.map(p => ({ id: p.id, text: p.right }))));
  const [selectedLeft, setSelectedLeft] = useState(null);   // pair id
  const [matched,     setMatched]     = useState({});       // { leftId: rightColItemId }
  const [wrongFlash,  setWrongFlash]  = useState(null);     // rightColItem id briefly flashing red
  const flashTimer = useRef(null);

  useEffect(() => () => clearTimeout(flashTimer.current), []);

  const matchedLeftIds  = Object.keys(matched);
  const matchedRightIds = Object.values(matched);
  const allMatched      = matchedLeftIds.length === pairs.length;

  function handleLeftClick(pairId) {
    if (matchedLeftIds.includes(pairId)) return;
    setSelectedLeft(prev => prev === pairId ? null : pairId);
  }

  function handleRightClick(rightItemId) {
    if (matchedRightIds.includes(rightItemId)) return;
    if (!selectedLeft) return;

    const correct = pairs.find(p => p.id === selectedLeft)?.id === rightItemId;
    if (correct) {
      setMatched(prev => ({ ...prev, [selectedLeft]: rightItemId }));
      setSelectedLeft(null);
    } else {
      // Flash red then reset
      setWrongFlash(rightItemId);
      clearTimeout(flashTimer.current);
      flashTimer.current = setTimeout(() => {
        setWrongFlash(null);
        setSelectedLeft(null);
      }, 600);
    }
  }

  const leftItemStyle = (pairId) => {
    const isMatched  = matchedLeftIds.includes(pairId);
    const isSelected = selectedLeft === pairId;
    return {
      padding: '10px 12px',
      borderRadius: 10,
      border: `1.5px solid ${isMatched ? '#4ade80' : isSelected ? accent : 'rgba(255,255,255,0.15)'}`,
      background: isMatched ? 'rgba(74,222,128,0.12)' : isSelected ? `${accent}22` : 'rgba(255,255,255,0.04)',
      color: isMatched ? '#4ade80' : '#e2d9f3',
      fontSize: '0.9rem', lineHeight: 1.45, cursor: isMatched ? 'default' : 'pointer',
      transition: 'all 0.15s ease',
      opacity: isMatched ? 0.7 : 1,
    };
  };

  const rightItemStyle = (rightItemId) => {
    const isMatched = matchedRightIds.includes(rightItemId);
    const isWrong   = wrongFlash === rightItemId;
    const isActive  = !!selectedLeft && !isMatched;
    return {
      padding: '10px 12px',
      borderRadius: 10,
      border: `1.5px solid ${isMatched ? '#4ade80' : isWrong ? '#f87171' : isActive ? `${accent}55` : 'rgba(255,255,255,0.15)'}`,
      background: isMatched ? 'rgba(74,222,128,0.12)' : isWrong ? 'rgba(248,113,113,0.12)' : 'rgba(255,255,255,0.04)',
      color: isMatched ? '#4ade80' : isWrong ? '#f87171' : '#e2d9f3',
      fontSize: '0.9rem', lineHeight: 1.45, cursor: isMatched ? 'default' : isActive ? 'pointer' : 'default',
      transition: 'all 0.15s ease',
      opacity: isMatched ? 0.7 : 1,
    };
  };

  return (
    <div style={{ height: '100%', overflowY: 'auto', padding: '20px 18px 28px', display: 'flex', flexDirection: 'column', gap: 14 }}>
      {/* Badge */}
      <p style={{ alignSelf: 'flex-start', background: `${accent}22`, border: `1px solid ${accent}44`, borderRadius: 8, padding: '4px 12px', color: accent, fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', margin: 0 }}>
        Matching
      </p>

      <p style={{ color: '#e2d9f3', fontSize: '1.05rem', fontWeight: 700, lineHeight: 1.45, margin: 0 }}>
        {r(screen.headline || 'Match each item to its pair')}
      </p>

      {screen.intro && (
        <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.88rem', lineHeight: 1.6, margin: 0 }}>
          {r(screen.intro)}
        </p>
      )}

      <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.8rem', margin: 0 }}>
        Tap a term on the left, then its match on the right.
      </p>

      {/* Two-column grid */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, alignItems: 'start' }}>
        {/* Left column — terms in original order */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {pairs.map(pair => (
            <div key={pair.id} onClick={() => handleLeftClick(pair.id)} style={leftItemStyle(pair.id)}>
              {r(pair.left)}
            </div>
          ))}
        </div>

        {/* Right column — definitions, shuffled */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {rightCol.map(item => (
            <div key={item.id} onClick={() => handleRightClick(item.id)} style={rightItemStyle(item.id)}>
              {r(item.text)}
            </div>
          ))}
        </div>
      </div>

      {/* Progress indicator */}
      <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.8rem', margin: 0 }}>
        {matchedLeftIds.length} / {pairs.length} matched
      </p>

      {allMatched && (
        <button
          onClick={onComplete}
          style={{ padding: '14px 28px', fontWeight: 700, fontSize: '1rem', border: 'none', borderRadius: 12, cursor: 'pointer', background: accent, color: '#fff', boxShadow: `0 0 18px ${accent}44`, transition: 'all 0.2s', alignSelf: 'stretch' }}
        >
          Continue →
        </button>
      )}
    </div>
  );
}
