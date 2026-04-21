import { useState, useEffect } from 'react';
import { sfx, injectCSS } from './sfx.js';

const CSS = `@keyframes bs-sway { 0%,100%{transform:rotate(var(--angle))} }`;

export default function BalanceScale({ onTap }) {
  useEffect(() => injectCSS('ls-bs', CSS), []);
  const [left,  setLeft]  = useState(0);
  const [right, setRight] = useState(0);

  const diff  = left - right;
  const angle = Math.max(-22, Math.min(22, diff * 5));
  const leftY  = 130 + Math.sin(angle*Math.PI/180) * 50;
  const rightY = 130 - Math.sin(angle*Math.PI/180) * 50;

  function addLeft()  { sfx.thump(); onTap(); setLeft(l => Math.min(l+1,5)); }
  function addRight() { sfx.thump(); onTap(); setRight(r => Math.min(r+1,5)); }
  function reset()    { setLeft(0); setRight(0); }

  const BLOCK_COLORS = ['#EF4444','#F97316','#EAB308','#22C55E','#3B82F6'];

  return (
    <div style={{ width:'100%', height:260, background:'linear-gradient(180deg,#F0F9FF 0%,#E0F2FE 100%)', borderRadius:20, position:'relative', overflow:'hidden' }}>
      <svg width="100%" height="260" viewBox="0 0 400 260" style={{ position:'absolute', inset:0 }}>
        {/* Stand */}
        <rect x="195" y="55" width="10" height="170" rx="5" fill="#7B5230"/>
        <ellipse cx="200" cy="228" rx="60" ry="14" fill="#7B5230"/>
        <circle cx="200" cy="55" r="10" fill="#D97706"/>

        {/* Beam */}
        <g style={{ transformOrigin:'200px 55px', transform:`rotate(${angle}deg)`, transition:'transform 0.5s cubic-bezier(0.16,1,0.3,1)' }}>
          <rect x="80" y="50" width="240" height="10" rx="5" fill="#D97706"/>

          {/* Left chain */}
          <line x1="90" y1="60" x2={90-diff*2} y2={leftY} stroke="#6B7280" strokeWidth="2.5" strokeDasharray="4 3"/>
          {/* Right chain */}
          <line x1="310" y1="60" x2={310+diff*2} y2={rightY} stroke="#6B7280" strokeWidth="2.5" strokeDasharray="4 3"/>

          {/* Left pan */}
          <ellipse cx={90-diff*2} cy={leftY+4} rx="44" ry="10" fill="#9CA3AF" stroke="#6B7280" strokeWidth="1.5"/>
          {/* Right pan */}
          <ellipse cx={310+diff*2} cy={rightY+4} rx="44" ry="10" fill="#9CA3AF" stroke="#6B7280" strokeWidth="1.5"/>

          {/* Left blocks */}
          {Array.from({length:left}).map((_,i) => (
            <rect key={i} x={68-diff*2} y={leftY-8-(i*14)} width="44" height="12" rx="3" fill={BLOCK_COLORS[i%5]}/>
          ))}
          {/* Right blocks */}
          {Array.from({length:right}).map((_,i) => (
            <rect key={i} x={293+diff*2} y={rightY-8-(i*14)} width="44" height="12" rx="3" fill={BLOCK_COLORS[i%5]}/>
          ))}
        </g>
      </svg>

      {/* Buttons */}
      <div style={{ position:'absolute', bottom:12, left:0, right:0, display:'flex', justifyContent:'space-between', padding:'0 24px', alignItems:'center' }}>
        <button onClick={addLeft} style={{ background:'#EF4444', color:'white', border:'none', borderRadius:14, padding:'8px 20px', fontWeight:800, fontSize:'1.1rem', cursor:'pointer', boxShadow:'0 4px 14px rgba(239,68,68,0.45)' }}>
          + Block
        </button>
        <div style={{ textAlign:'center' }}>
          <p style={{ margin:0, fontWeight:700, color:diff===0?'#22C55E':'#F97316', fontSize:'0.85rem' }}>
            {diff===0 ? '⚖️ Balanced!' : diff>0 ? '← Left is heavier' : 'Right is heavier →'}
          </p>
          <button onClick={reset} style={{ background:'none', border:'none', color:'rgba(0,0,0,0.3)', fontSize:'0.72rem', cursor:'pointer' }}>Reset</button>
        </div>
        <button onClick={addRight} style={{ background:'#3B82F6', color:'white', border:'none', borderRadius:14, padding:'8px 20px', fontWeight:800, fontSize:'1.1rem', cursor:'pointer', boxShadow:'0 4px 14px rgba(59,130,246,0.45)' }}>
          + Block
        </button>
      </div>
    </div>
  );
}
