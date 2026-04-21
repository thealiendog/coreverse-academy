import { useState, useEffect } from 'react';
import { sfx } from '../sounds';

export default function CountAndTap({ step, onComplete }) {
  const objects = step.objects || ['🍎', '🍊', '🍋', '🍇', '🫐'];
  const N = objects.length;

  const [tapped,     setTapped]     = useState(new Set());
  const [numbers,    setNumbers]    = useState({}); // idx → count label shown
  const [bouncing,   setBouncing]   = useState(null);
  const [done,       setDone]       = useState(false);

  useEffect(() => {
    setTapped(new Set());
    setNumbers({});
    setDone(false);
  }, [step]);

  function handleTap(idx) {
    if (tapped.has(idx) || done) return;
    const newTapped = new Set(tapped);
    newTapped.add(idx);
    const count = newTapped.size;
    setTapped(newTapped);
    setNumbers(prev => ({ ...prev, [idx]: count }));
    setBouncing(idx);
    sfx.count(count - 1);
    setTimeout(() => setBouncing(null), 400);

    if (count === N) {
      setDone(true);
      sfx.fanfare();
      setTimeout(onComplete, 2200);
    }
  }

  return (
    <div style={{ padding: '16px 16px 24px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 20 }}>
      <style>{`
        @keyframes cat-bounce { 0%{transform:scale(1)}30%{transform:scale(1.3)}70%{transform:scale(0.95)}100%{transform:scale(1)} }
        @keyframes cat-num    { 0%{transform:translateY(0);opacity:1}100%{transform:translateY(-28px);opacity:0} }
        @keyframes cat-done   { 0%{transform:scale(1)}50%{transform:scale(1.15)}100%{transform:scale(1)} }
      `}</style>

      {/* Instruction */}
      <p style={{ color:'#fff', fontWeight:800, fontSize:'clamp(1.1rem,3.5vw,1.4rem)', textAlign:'center', margin:0 }}>
        {done
          ? `You counted ${N}! 🎉`
          : `${step.instruction || `Tap all the ${N} items!`} (${tapped.size}/${N})`}
      </p>

      {/* Objects grid */}
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: 16,
        justifyContent: 'center',
        maxWidth: 380,
      }}>
        {objects.map((obj, idx) => {
          const isTapped  = tapped.has(idx);
          const isBouncing = bouncing === idx;

          return (
            <div key={idx} style={{ position:'relative', display:'inline-block' }}>
              {/* Floating number */}
              {numbers[idx] && (
                <div style={{
                  position: 'absolute',
                  top: -10,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  color: '#FCD34D',
                  fontWeight: 900,
                  fontSize: '1.2rem',
                  animation: 'cat-num 0.6s ease-out both',
                  pointerEvents: 'none',
                  zIndex: 2,
                }}>
                  {numbers[idx]}!
                </div>
              )}

              <button
                onClick={() => handleTap(idx)}
                style={{
                  width: 90,
                  height: 90,
                  borderRadius: 20,
                  border: isTapped
                    ? '3px solid #34D399'
                    : '2px solid rgba(255,255,255,0.15)',
                  background: isTapped
                    ? 'rgba(52,211,153,0.15)'
                    : 'rgba(255,255,255,0.07)',
                  cursor: isTapped ? 'default' : 'pointer',
                  fontSize: '3rem',
                  animation: isBouncing
                    ? 'cat-bounce 0.4s ease'
                    : done && isTapped
                      ? 'cat-done 0.6s ease infinite'
                      : 'none',
                  filter: isTapped ? 'none' : 'grayscale(0%)',
                  boxShadow: isTapped ? '0 0 16px rgba(52,211,153,0.4)' : 'none',
                  transition: 'border 0.2s, background 0.2s',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {obj}
                {isTapped && (
                  <span style={{ position:'absolute', bottom:4, right:6, fontSize:'0.7rem', color:'#34D399', fontWeight:900 }}>✓</span>
                )}
              </button>
            </div>
          );
        })}
      </div>

      {done && (
        <p style={{ color:'#FCD34D', fontWeight:900, fontSize:'1.3rem', margin:0, animation:'cat-done 1s ease infinite' }}>
          Amazing counting! ⭐
        </p>
      )}
    </div>
  );
}
