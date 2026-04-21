import { useState, useEffect } from 'react';
import { sfx, injectCSS } from './sfx.js';

const CSS = `
@keyframes stf-water { 0%{transform:translateY(-20px);opacity:0}100%{transform:translateY(80px);opacity:0} }
@keyframes stf-grow  { 0%{transform:scaleY(0);transform-origin:bottom}100%{transform:scaleY(1)} }
@keyframes stf-petal { 0%{transform:scale(0) rotate(0deg);opacity:0}100%{transform:scale(1) rotate(var(--rot));opacity:1} }
@keyframes stf-shine { 0%,100%{opacity:0.5;transform:scale(1)}50%{opacity:0.9;transform:scale(1.08)} }
@keyframes stf-sway  { 0%,100%{transform:rotate(-3deg)}50%{transform:rotate(3deg)} }
`;

const STAGES = [
  { action:'water', label:'💧 Water the seed!',    actionLabel:'Add water →', color:'#3B82F6' },
  { action:'sun',   label:'☀️ Give it some sun!',  actionLabel:'Shine sun →',  color:'#F59E0B' },
  { action:'grow',  label:'🌺 Watch it bloom!',    actionLabel:'Bloom! →',     color:'#EC4899' },
];

const PETAL_ANGLES = [0,60,120,180,240,300];

export default function SeedToFlower({ onTap }) {
  useEffect(() => injectCSS('ls-stf', CSS), []);
  const [stage, setStage] = useState(-1); // -1=just pot, 0=watered, 1=sun, 2=bloomed
  const [drops, setDrops] = useState([]);

  function tap() {
    const next = stage + 1;
    if (next === 0) { sfx.drip(); triggerDrops(); }
    if (next === 1) { sfx.whoosh(); }
    if (next === 2) { sfx.sparkle(); sfx.chime(); }
    onTap();
    setStage(next);
  }

  function triggerDrops() {
    const ids = [0,1,2,3,4].map((_, i) => {
      const id = Date.now() + i;
      setTimeout(() => {
        setDrops(d => [...d, { id, x: 170 + Math.random()*60 }]);
        setTimeout(() => setDrops(d => d.filter(dr => dr.id !== id)), 1000);
      }, i * 150);
      return id;
    });
  }

  const showAction = stage < 2;
  const currentAction = STAGES[stage + 1] || null;

  return (
    <div style={{ width:'100%', height:260, background:'linear-gradient(180deg,#87CEEB 0%,#E8F5E9 65%,#F5F5DC 100%)', borderRadius:20, position:'relative', overflow:'hidden' }}>
      {/* Water drops */}
      {drops.map(d => (
        <div key={d.id} style={{ position:'absolute', left:`${(d.x/400)*100}%`, top:'30%', fontSize:'1.4rem', pointerEvents:'none', animation:'stf-water 0.9s ease-in forwards' }}>
          💧
        </div>
      ))}

      <svg width="100%" height="260" viewBox="0 0 400 260" style={{ position:'absolute', inset:0 }}>
        {/* Sun (stage 1+) */}
        {stage >= 1 && (
          <g style={{ animation:'stf-shine 2s ease-in-out infinite' }}>
            <circle cx="340" cy="50" r="30" fill="#FCD34D" style={{ filter:'drop-shadow(0 0 14px rgba(252,211,77,0.8))' }}/>
            {Array.from({length:6}).map((_,i)=>{const a=i*60*Math.PI/180;return <line key={i} x1={340+Math.cos(a)*34} y1={50+Math.sin(a)*34} x2={340+Math.cos(a)*46} y2={50+Math.sin(a)*46} stroke="#F59E0B" strokeWidth="3" strokeLinecap="round"/>;})}
          </g>
        )}

        {/* Flower pot */}
        <path d="M155,230 L170,195 L230,195 L245,230 Z" fill="#CD7B40"/>
        <rect x="160" y="185" width="80" height="14" rx="7" fill="#B8602C"/>
        {/* Soil */}
        <ellipse cx="200" cy="192" rx="36" ry="9" fill="#4a3728"/>

        {/* Stem (stage 0+) */}
        {stage >= 0 && (
          <rect x="197" y={stage>=1?105:155} width="6" height={stage>=1?85:35} rx="3" fill="#4A8C35"
            style={{ transformOrigin:'200px 192px', animation:'stf-grow 0.6s ease-out both' }}/>
        )}

        {/* Leaves (stage 1+) */}
        {stage >= 1 && (
          <>
            <ellipse cx="178" cy="155" rx="22" ry="12" fill="#5AA840" transform="rotate(-25 178 155)" style={{ animation:'stf-grow 0.5s ease-out 0.1s both' }}/>
            <ellipse cx="222" cy="145" rx="22" ry="12" fill="#4A9835" transform="rotate(25 222 145)" style={{ animation:'stf-grow 0.5s ease-out 0.2s both' }}/>
          </>
        )}

        {/* Flower head (stage 2) */}
        {stage >= 2 && (
          <g style={{ animation:'stf-sway 2.5s ease-in-out infinite', transformOrigin:'200px 105px' }}>
            {/* Petals */}
            {PETAL_ANGLES.map((deg,i) => {
              const a = deg*Math.PI/180;
              return (
                <ellipse key={i} cx={200+Math.cos(a)*22} cy={105+Math.sin(a)*22} rx="14" ry="9"
                  fill="#FF6B9D" transform={`rotate(${deg} ${200+Math.cos(a)*22} ${105+Math.sin(a)*22})`}
                  style={{ '--rot':`${deg}deg`, animation:`stf-petal 0.5s ease-out ${i*0.08}s both` }}/>
              );
            })}
            {/* Center */}
            <circle cx="200" cy="105" r="18" fill="#FCD34D"/>
            <circle cx="200" cy="105" r="10" fill="#F59E0B"/>
          </g>
        )}

        {/* Seed (before watering) */}
        {stage === -1 && (
          <ellipse cx="200" cy="190" rx="8" ry="6" fill="#7B5230"/>
        )}
      </svg>

      {/* Action button */}
      {currentAction && (
        <div onClick={tap} style={{ position:'absolute', bottom:14, left:'50%', transform:'translateX(-50%)', background:currentAction.color, color:'white', fontWeight:700, fontSize:'1rem', padding:'10px 28px', borderRadius:20, cursor:'pointer', boxShadow:`0 4px 20px ${currentAction.color}60`, whiteSpace:'nowrap' }}>
          {currentAction.actionLabel}
        </div>
      )}
      {stage === 2 && (
        <div style={{ position:'absolute', top:10, left:0, right:0, textAlign:'center', color:'#EC4899', fontWeight:700, fontSize:'1.1rem' }}>
          🌺 Beautiful flower! 🌺
        </div>
      )}
      {stage < 2 && (
        <div style={{ position:'absolute', top:10, left:0, right:0, textAlign:'center', color:'rgba(0,0,0,0.55)', fontWeight:600, fontSize:'0.85rem' }}>
          {STAGES[stage+1]?.label}
        </div>
      )}
    </div>
  );
}
