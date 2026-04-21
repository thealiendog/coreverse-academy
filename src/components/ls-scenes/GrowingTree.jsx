import { useState, useEffect } from 'react';
import { sfx, injectCSS } from './sfx.js';

const CSS = `
@keyframes gt-sway { 0%,100%{transform:rotate(-2deg)}50%{transform:rotate(2deg)} }
@keyframes gt-leaf  { 0%,100%{transform:scale(1)}50%{transform:scale(1.08)} }
@keyframes gt-bloom { 0%{transform:scale(0) rotate(0deg);opacity:0} 70%{transform:scale(1.3) rotate(180deg);opacity:1} 100%{transform:scale(1) rotate(360deg);opacity:1} }
`;

const LABELS = ['Tap to plant the seed!','Sprout! Tap to grow more!','Growing tall! Tap again!','Beautiful tree! 🌸'];

export default function GrowingTree({ onTap }) {
  useEffect(() => injectCSS('ls-gt', CSS), []);
  const [stage, setStage] = useState(0);
  const [bloomed, setBloomed] = useState(false);

  function tap() {
    sfx.whoosh();
    onTap();
    const next = Math.min(stage + 1, 3);
    setStage(next);
    if (next === 3) setBloomed(true);
  }

  const skyH = 180, groundY = 185;

  return (
    <div onClick={tap} style={{ width:'100%', height:260, cursor:'pointer', background:'linear-gradient(180deg,#87CEEB 0%,#B0E2FF 68%,#6B8E4E 68%,#4A7C35 100%)', borderRadius:20, position:'relative', overflow:'hidden', userSelect:'none' }}>
      <svg width="100%" height="260" viewBox="0 0 400 260" style={{ position:'absolute', inset:0 }}>

        {/* Ground */}
        <ellipse cx="200" cy="220" rx="180" ry="16" fill="#5A8C3C" opacity="0.5"/>

        {/* Stage 0: seed */}
        {stage === 0 && (
          <g style={{ animation:'gt-leaf 1.5s ease-in-out infinite' }}>
            <ellipse cx="200" cy="222" rx="14" ry="10" fill="#7B5230"/>
            <path d="M196,222 Q200,210 204,222" stroke="#9B7240" strokeWidth="2" fill="none"/>
          </g>
        )}

        {/* Stage 1+: stem */}
        {stage >= 1 && (
          <g style={{ transformOrigin:'200px 222px', animation:'gt-sway 3s ease-in-out infinite' }}>
            <rect x="196" y={222 - (stage >= 2 ? 110 : 55)} width="8" height={stage >= 2 ? 110 : 55} rx="4" fill="#7B5230"/>
            {/* small leaves */}
            <ellipse cx="185" cy={stage >= 2 ? 155 : 185} rx={stage >= 2 ? 22 : 16} ry={stage >= 2 ? 14 : 10} fill="#5AA84F" style={{ animation:'gt-leaf 2.1s ease-in-out 0.3s infinite' }}/>
            <ellipse cx="215" cy={stage >= 2 ? 145 : 177} rx={stage >= 2 ? 22 : 16} ry={stage >= 2 ? 14 : 10} fill="#4E9A45" style={{ animation:'gt-leaf 2.1s ease-in-out 0.6s infinite' }}/>
          </g>
        )}

        {/* Stage 2+: fuller canopy */}
        {stage >= 2 && (
          <g style={{ transformOrigin:'200px 100px', animation:'gt-sway 4s ease-in-out 0.5s infinite' }}>
            <circle cx="200" cy="118" r="50" fill="#5AA84F"/>
            <circle cx="168" cy="130" r="32" fill="#4E9A45"/>
            <circle cx="232" cy="130" r="32" fill="#4E9A45"/>
            <circle cx="200" cy="100" r="36" fill="#66BB5A"/>
          </g>
        )}

        {/* Stage 3: flowers */}
        {stage >= 3 && (
          <>
            {[[170,108,'#FF6B9D'],[200,88,'#FFD700'],[230,105,'#FF8C42'],[185,132,'#C77DFF'],[215,128,'#FF6B6B']].map(([x,y,c],i) => (
              <g key={i} style={{ transformOrigin:`${x}px ${y}px`, animation:`gt-bloom 0.6s cubic-bezier(0.16,1,0.3,1) ${i*0.12}s both` }}>
                {[-1,0,1].map(dx => <ellipse key={dx} cx={x + dx*8} cy={y} rx="5" ry="8" fill={c} transform={`rotate(${dx*60} ${x} ${y})`}/>)}
                <circle cx={x} cy={y} r="5" fill="#FFE066"/>
              </g>
            ))}
          </>
        )}

        {/* Bird (stage 2+) */}
        {stage >= 2 && (
          <g style={{ animation:'gt-sway 1.8s ease-in-out infinite' }}>
            <path d="M310,90 Q322,82 335,90" stroke="#333" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
            <path d="M322,90 Q322,84 322,90" stroke="#333" strokeWidth="2.5" fill="none"/>
          </g>
        )}
      </svg>

      {/* Label */}
      <div style={{ position:'absolute', bottom:14, left:0, right:0, textAlign:'center', color:'rgba(0,0,0,0.65)', fontWeight:700, fontSize:'0.9rem' }}>
        {LABELS[stage]}
      </div>
    </div>
  );
}
