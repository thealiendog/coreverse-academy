import { useState, useEffect } from 'react';
import { sfx } from '../sounds';

// Default objects when none provided: colored circles with letters
const DEFAULT_OBJECTS = ['A','B','C','D','E'];
const DEFAULT_COLORS  = ['#7C3AED','#F59E0B','#10B981','#60A5FA','#F472B6'];

export default function CountAndTap({ step, onComplete }) {
  const raw     = step.objects || DEFAULT_OBJECTS;
  const N       = raw.length;
  const isImage = typeof raw[0] === 'object' && raw[0]?.image;

  const [tapped,   setTapped]   = useState(new Set());
  const [numbers,  setNumbers]  = useState({});
  const [bouncing, setBouncing] = useState(null);
  const [done,     setDone]     = useState(false);

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
        @keyframes cat-done   { 0%{transform:scale(1)}50%{transform:scale(1.12)}100%{transform:scale(1)} }
      `}</style>

      {/* Instruction */}
      <p style={{ color:'#fff', fontWeight:800, fontSize:'clamp(1.1rem,3.5vw,1.4rem)', textAlign:'center', margin:0 }}>
        {done
          ? `You counted ${N}!`
          : `${step.instruction || `Tap all ${N} items!`} (${tapped.size}/${N})`}
      </p>

      {/* Objects */}
      <div style={{ display:'flex', flexWrap:'wrap', gap:14, justifyContent:'center', maxWidth:380 }}>
        {raw.map((obj, idx) => {
          const isTapped   = tapped.has(idx);
          const isBouncing = bouncing === idx;
          const label      = typeof obj === 'object' ? (obj.label || '') : (typeof obj === 'string' && obj.length <= 3 ? obj : '');
          const imgSrc     = typeof obj === 'object' ? obj.image : null;
          const bgColor    = DEFAULT_COLORS[idx % DEFAULT_COLORS.length];

          return (
            <div key={idx} style={{ position:'relative', display:'inline-block' }}>
              {/* Floating count number */}
              {numbers[idx] && (
                <div style={{
                  position:'absolute', top:-10, left:'50%',
                  transform:'translateX(-50%)',
                  color:'#FCD34D', fontWeight:900, fontSize:'1.2rem',
                  animation:'cat-num 0.6s ease-out both',
                  pointerEvents:'none', zIndex:2,
                }}>
                  {numbers[idx]}!
                </div>
              )}

              <button
                onClick={() => handleTap(idx)}
                style={{
                  width: 88, height: 88,
                  borderRadius: 20,
                  border: isTapped ? '3px solid #34D399' : '2px solid rgba(255,255,255,0.15)',
                  background: imgSrc
                    ? 'transparent'
                    : isTapped
                      ? 'rgba(52,211,153,0.15)'
                      : bgColor + '33',
                  cursor: isTapped ? 'default' : 'pointer',
                  padding: 0,
                  overflow: 'hidden',
                  animation: isBouncing ? 'cat-bounce 0.4s ease' : done && isTapped ? 'cat-done 0.6s ease infinite' : 'none',
                  boxShadow: isTapped ? '0 0 16px rgba(52,211,153,0.4)' : 'none',
                  transition: 'border 0.2s, background 0.2s',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  position: 'relative',
                }}
              >
                {imgSrc ? (
                  <img src={imgSrc} alt={label} style={{ width:'100%', height:'100%', objectFit:'cover', display:'block', filter: isTapped ? 'none' : 'none' }} draggable={false} />
                ) : (
                  <span style={{ color: isTapped ? '#34D399' : bgColor, fontWeight:900, fontSize:'1.4rem' }}>
                    {label}
                  </span>
                )}

                {/* CSS checkmark on tapped */}
                {isTapped && (
                  <div style={{
                    position:'absolute', bottom:4, right:5,
                    width:16, height:16, borderRadius:'50%',
                    background:'#34D399',
                    display:'flex', alignItems:'center', justifyContent:'center',
                  }}>
                    <div style={{
                      width:7, height:4,
                      borderLeft:'2px solid #fff', borderBottom:'2px solid #fff',
                      transform:'rotate(-45deg) translate(1px,-1px)',
                    }} />
                  </div>
                )}
              </button>
            </div>
          );
        })}
      </div>

      {done && (
        <p style={{ color:'#FCD34D', fontWeight:900, fontSize:'1.3rem', margin:0, animation:'cat-done 1s ease infinite' }}>
          Amazing counting!
        </p>
      )}
    </div>
  );
}
