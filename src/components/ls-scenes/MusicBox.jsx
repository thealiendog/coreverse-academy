import { useState, useEffect } from 'react';
import { injectCSS, tone } from './sfx.js';

const CSS = `
@keyframes mb-bounce { 0%{transform:scaleY(1) translateY(0)}30%{transform:scaleY(0.85) translateY(8px)}70%{transform:scaleY(1.08)}100%{transform:scaleY(1) translateY(0)} }
@keyframes mb-note   { 0%{transform:translateY(0);opacity:1}100%{transform:translateY(-60px);opacity:0} }
`;

const BARS = [
  { note:'C', freq:262, color:'#EF4444', height:140, label:'Do' },
  { note:'D', freq:294, color:'#F97316', height:120, label:'Re' },
  { note:'E', freq:330, color:'#EAB308', height:100, label:'Mi' },
  { note:'F', freq:349, color:'#22C55E', height:115, label:'Fa' },
  { note:'G', freq:392, color:'#3B82F6', height:90,  label:'Sol' },
];

export default function MusicBox({ onTap }) {
  useEffect(() => injectCSS('ls-mb', CSS), []);
  const [playing,  setPlaying]  = useState(Array(5).fill(false));
  const [floaters, setFloaters] = useState([]);

  function tap(i) {
    tone(BARS[i].freq, 0.55, 'sine', 0.20);
    onTap();
    setPlaying(p => p.map((v,j) => j===i ? true : v));
    setTimeout(() => setPlaying(p => p.map((v,j) => j===i ? false : v)), 480);
    const id = Date.now();
    setFloaters(f => [...f, { id, i }]);
    setTimeout(() => setFloaters(f => f.filter(n => n.id !== id)), 900);
  }

  const W = 400, barW = 52, gap = 12, startX = (W - (BARS.length * (barW + gap) - gap)) / 2;

  return (
    <div style={{ width:'100%', height:260, background:'linear-gradient(180deg,#1a1a2e 0%,#16213e 100%)', borderRadius:20, position:'relative', overflow:'hidden' }}>
      {/* Floating notes */}
      {floaters.map(({id,i}) => {
        const x = startX + i*(barW+gap) + barW/2;
        return (
          <div key={id} style={{ position:'absolute', left:`${(x/400)*100}%`, bottom:'50%', color:BARS[i].color, fontSize:'1.6rem', pointerEvents:'none', animation:'mb-note 0.85s ease-out forwards' }}>
            ♪
          </div>
        );
      })}

      <svg width="100%" height="260" viewBox="0 0 400 260" style={{ position:'absolute', inset:0 }}>
        {/* Stand base */}
        <rect x="60" y="235" width="280" height="10" rx="5" fill="#374151"/>
        <rect x="100" y="232" width="200" height="6" rx="3" fill="#4B5563"/>

        {BARS.map((b,i) => {
          const x = startX + i*(barW+gap);
          const y = 225 - b.height;
          const isPlaying = playing[i];
          return (
            <g key={i} style={{ cursor:'pointer', transformOrigin:`${x+barW/2}px 225px`, animation: isPlaying?'mb-bounce 0.48s cubic-bezier(0.16,1,0.3,1)':'none' }}
               onClick={() => tap(i)}>
              {/* Bar shadow */}
              <rect x={x+3} y={y+4} width={barW} height={b.height} rx="8" fill="rgba(0,0,0,0.3)"/>
              {/* Bar */}
              <rect x={x} y={y} width={barW} height={b.height} rx="8" fill={b.color}
                style={{ filter: isPlaying?`drop-shadow(0 0 18px ${b.color})`:undefined }}/>
              {/* Bar shine */}
              <rect x={x+8} y={y+8} width={barW-24} height={b.height/3} rx="4" fill="white" opacity="0.25"/>
              {/* Note label */}
              <text x={x+barW/2} y={225+2} textAnchor="middle" fontSize="11" fontWeight="700" fill="rgba(255,255,255,0.6)">
                {b.label}
              </text>
              {/* Top circle */}
              <circle cx={x+barW/2} cy={y} r="10" fill={b.color} stroke="white" strokeWidth="2"
                style={{ filter: isPlaying?`drop-shadow(0 0 12px ${b.color})`:undefined }}/>
            </g>
          );
        })}
      </svg>

      <div style={{ position:'absolute', top:12, left:0, right:0, textAlign:'center', color:'rgba(255,255,255,0.5)', fontWeight:600, fontSize:'0.85rem' }}>
        🎵 Tap the bars to play music!
      </div>
    </div>
  );
}
