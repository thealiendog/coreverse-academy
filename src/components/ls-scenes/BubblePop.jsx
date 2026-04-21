import { useState, useEffect, useRef } from 'react';
import { sfx, injectCSS } from './sfx.js';

const CSS = `
@keyframes bp-rise  { 0%{transform:translateY(0) scale(1)}100%{transform:translateY(-280px) scale(0.7)} }
@keyframes bp-pop   { 0%{transform:scale(1);opacity:1}40%{transform:scale(1.7);opacity:0.7}100%{transform:scale(0);opacity:0} }
@keyframes bp-wobble{ 0%,100%{border-radius:60% 40% 55% 45% / 50% 55% 45% 60%}50%{border-radius:45% 55% 40% 60% / 55% 45% 60% 40%} }
`;

const COLORS = ['#EF4444','#F97316','#EAB308','#22C55E','#3B82F6','#A855F7','#EC4899','#06B6D4'];

let _uid = 0;

export default function BubblePop({ onTap }) {
  useEffect(() => injectCSS('ls-bp', CSS), []);
  const [bubbles, setBubbles] = useState([]);
  const [popped,  setPopped]  = useState(0);
  const timerRef = useRef(null);

  useEffect(() => {
    function spawn() {
      const c = COLORS[Math.floor(Math.random()*COLORS.length)];
      const sz = 36 + Math.random()*32;
      const x  = 6 + Math.random()*82; // percent
      const dur = 3.5 + Math.random()*2.5;
      const id  = ++_uid;
      setBubbles(b => [...b.slice(-18), { id, c, sz, x, dur, popped:false }]);
      // auto-remove after animation ends
      setTimeout(() => setBubbles(b => b.filter(bub => bub.id !== id)), (dur + 0.2) * 1000);
    }
    spawn(); // first bubble immediately
    timerRef.current = setInterval(spawn, 900);
    return () => clearInterval(timerRef.current);
  }, []);

  function pop(id) {
    setBubbles(b => b.map(bub => bub.id===id ? {...bub, popped:true} : bub));
    sfx.pop();
    onTap();
    setPopped(p => p+1);
    setTimeout(() => setBubbles(b => b.filter(bub => bub.id !== id)), 380);
  }

  return (
    <div style={{ width:'100%', height:260, background:'linear-gradient(180deg,#e0f7fa 0%,#b2ebf2 60%,#80deea 100%)', borderRadius:20, position:'relative', overflow:'hidden' }}>
      {bubbles.map(bub => (
        <div
          key={bub.id}
          onClick={() => !bub.popped && pop(bub.id)}
          style={{
            position:'absolute',
            left:`${bub.x}%`,
            bottom:'-60px',
            width: bub.sz,
            height: bub.sz,
            cursor: bub.popped ? 'default' : 'pointer',
            background: `radial-gradient(circle at 35% 30%, white 0%, ${bub.c}cc 45%, ${bub.c}88 100%)`,
            border: `2px solid ${bub.c}60`,
            boxShadow: `inset 0 0 8px rgba(255,255,255,0.7), 0 0 8px ${bub.c}44`,
            animation: bub.popped
              ? 'bp-pop 0.38s ease-out forwards'
              : `bp-rise ${bub.dur}s linear both, bp-wobble 2s ease-in-out infinite`,
          }}
        />
      ))}

      {/* Counter */}
      <div style={{ position:'absolute', top:12, left:0, right:0, textAlign:'center', color:'rgba(0,0,0,0.55)', fontWeight:700, fontSize:'1rem' }}>
        {popped === 0 ? 'Pop the bubbles! 💫' : `${popped} popped! Keep going!`}
      </div>
    </div>
  );
}
