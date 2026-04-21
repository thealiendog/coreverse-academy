import { useState, useEffect } from 'react';
import { sfx, injectCSS } from './sfx.js';

const CSS = `@keyframes cs-twinkle { 0%,100%{opacity:0.5;transform:scale(0.8)}50%{opacity:1;transform:scale(1.2)} }`;

export default function CountingStars({ onTap }) {
  useEffect(() => injectCSS('ls-cs', CSS), []);
  const [stars, setStars] = useState([]);

  function addStar(e) {
    if (stars.length >= 10) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 400;
    const y = Math.min(((e.clientY - rect.top)  / rect.height) * 220, 180);
    const colors = ['#FCD34D','#A78BFA','#60A5FA','#34D399','#F472B6','#FBBF24'];
    const c = colors[stars.length % colors.length];
    sfx.sparkle();
    onTap();
    setStars(s => [...s, { id: Date.now(), x, y, c, size: 16 + Math.random()*14 }]);
  }

  return (
    <div onClick={addStar} style={{ width:'100%', height:260, background:'linear-gradient(180deg,#0d0d2b 0%,#1a1a4e 60%,#2d2060 100%)', borderRadius:20, position:'relative', overflow:'hidden', cursor: stars.length>=10 ? 'default' : 'crosshair' }}>
      <svg width="100%" height="260" viewBox="0 0 400 260" style={{ position:'absolute', inset:0 }}>
        {/* Background stars */}
        {[[20,18],[60,40],[110,12],[180,28],[260,10],[330,32],[370,18],[40,80],[310,75]].map(([x,y],i) => (
          <circle key={i} cx={x} cy={y} r="1.5" fill="white" opacity="0.35"/>
        ))}

        {/* Placed stars */}
        {stars.map((s,i) => (
          <g key={s.id} style={{ transformOrigin:`${s.x}px ${s.y}px`, animation:`cs-twinkle ${1.5+i*0.2}s ease-in-out ${i*0.15}s infinite` }}>
            {/* 5-pointed star using polygon */}
            {Array.from({length:5}).map((_,k) => {
              const outer = s.size, inner = s.size*0.42;
              const angle = (k*72 - 90) * Math.PI / 180;
              const iAngle = ((k*72 + 36) - 90) * Math.PI / 180;
              return null; // use text star instead
            })}
            <text x={s.x} y={s.y+s.size*0.45} textAnchor="middle" fontSize={s.size} fill={s.c} style={{ filter:`drop-shadow(0 0 6px ${s.c})` }}>⭐</text>
          </g>
        ))}
      </svg>

      {/* Counter */}
      <div style={{ position:'absolute', top:14, left:0, right:0, textAlign:'center', color:'#FCD34D', fontWeight:800, fontSize:'1.5rem', textShadow:'0 0 12px rgba(252,211,77,0.8)' }}>
        {stars.length === 0 ? 'Tap the sky to add stars!' : `${stars.length} ⭐${stars.length>1?'s':''}`}
      </div>
      {stars.length >= 10 && (
        <div style={{ position:'absolute', bottom:14, left:0, right:0, textAlign:'center', color:'#A78BFA', fontWeight:700, fontSize:'1.1rem' }}>
          You counted to 10! 🎉
        </div>
      )}
    </div>
  );
}
