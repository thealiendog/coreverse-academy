import { useState, useEffect } from 'react';
import { sfx, injectCSS } from './sfx.js';

const CSS = `
@keyframes fp-slide { 0%{opacity:1;transform:scale(1)}100%{opacity:0;transform:translate(var(--tx),var(--ty)) scale(0.4)} }
@keyframes fp-appear { 0%{transform:scale(0)}70%{transform:scale(1.2)}100%{transform:scale(1)} }
@keyframes fp-plate  { 0%,100%{transform:scale(1)}50%{transform:scale(1.04)} }
`;

const FOODS = [
  { e:'🍎', name:'Apple',   pos:[60,  60],  target:[185,118] },
  { e:'🥕', name:'Carrot',  pos:[330, 60],  target:[215,118] },
  { e:'🍇', name:'Grapes',  pos:[60,  195], target:[185,148] },
  { e:'🍌', name:'Banana',  pos:[330, 195], target:[215,148] },
  { e:'🥦', name:'Broccoli',pos:[195, 40],  target:[200,130] },
];

export default function FoodPlate({ onTap }) {
  useEffect(() => injectCSS('ls-fp', CSS), []);
  const [onPlate, setOnPlate] = useState([]);
  const full = onPlate.length === FOODS.length;

  function eatFood(i) {
    if (onPlate.includes(i)) return;
    sfx.pop();
    onTap();
    setOnPlate(p => [...p, i]);
  }

  return (
    <div style={{ width:'100%', height:260, background:'linear-gradient(135deg,#FFF8E1,#FFF3CD)', borderRadius:20, position:'relative', overflow:'hidden' }}>
      <svg width="100%" height="260" viewBox="0 0 400 260" style={{ position:'absolute', inset:0 }}>
        {/* Plate */}
        <g style={{ transformOrigin:'200px 135px', animation: full ? 'fp-plate 0.6s ease-in-out 3' : 'none' }}>
          <circle cx="200" cy="135" r="72" fill="#E8E8E8" stroke="#BDBDBD" strokeWidth="4"/>
          <circle cx="200" cy="135" r="60" fill="#F5F5F5"/>
          {/* Plate shine */}
          <ellipse cx="175" cy="110" rx="20" ry="10" fill="white" opacity="0.5" transform="rotate(-20 175 110)"/>
        </g>

        {/* Food on plate */}
        {onPlate.map((fi,i) => (
          <text key={fi} x={FOODS[fi].target[0]} y={FOODS[fi].target[1]+10}
            textAnchor="middle" fontSize="24"
            style={{ animation:'fp-appear 0.4s cubic-bezier(0.16,1,0.3,1) both' }}>
            {FOODS[fi].e}
          </text>
        ))}

        {/* Food items */}
        {FOODS.map((f,i) => !onPlate.includes(i) && (
          <g key={i} style={{ cursor:'pointer' }} onClick={() => eatFood(i)}>
            <circle cx={f.pos[0]} cy={f.pos[1]} r="30" fill="white" opacity="0.7" stroke="#E0E0E0" strokeWidth="1.5"/>
            <text x={f.pos[0]} y={f.pos[1]+9} textAnchor="middle" fontSize="28">{f.e}</text>
            <text x={f.pos[0]} y={f.pos[1]+28} textAnchor="middle" fontSize="9" fill="#9E9E9E">{f.name}</text>
          </g>
        ))}
      </svg>

      {/* Full plate */}
      {full && (
        <div style={{ position:'absolute', inset:0, display:'flex', alignItems:'center', justifyContent:'center', flexDirection:'column', background:'rgba(255,248,225,0.85)' }}>
          <div style={{ fontSize:'2.5rem' }}>😋</div>
          <p style={{ fontWeight:800, fontSize:'1.3rem', color:'#D97706', marginTop:8 }}>Yum! Healthy plate!</p>
        </div>
      )}

      <div style={{ position:'absolute', bottom:10, left:0, right:0, textAlign:'center', color:'rgba(0,0,0,0.5)', fontWeight:600, fontSize:'0.82rem' }}>
        {full ? '' : 'Tap food to put it on the plate!'}
      </div>
    </div>
  );
}
