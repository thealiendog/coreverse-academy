import { useState, useEffect } from 'react';
import { sfx, injectCSS } from './sfx.js';

const CSS = `
@keyframes rp-splash { 0%{transform:scale(1)}30%{transform:scale(2.2)}60%{transform:scale(1.6)}100%{transform:scale(1)} }
@keyframes rp-ripple { 0%{transform:scale(1);opacity:0.8}100%{transform:scale(3.5);opacity:0} }
`;

const COLORS = [
  { fill:'#EF4444', label:'Red',    x:80,  y:90  },
  { fill:'#F97316', label:'Orange', x:200, y:60  },
  { fill:'#EAB308', label:'Yellow', x:315, y:90  },
  { fill:'#22C55E', label:'Green',  x:80,  y:175 },
  { fill:'#3B82F6', label:'Blue',   x:200, y:195 },
  { fill:'#A855F7', label:'Purple', x:315, y:175 },
];

export default function RainbowPaint({ onTap }) {
  useEffect(() => injectCSS('ls-rp', CSS), []);
  const [active,   setActive]   = useState(null);
  const [ripples,  setRipples]  = useState([]);
  const [bgColor,  setBgColor]  = useState(null);

  function tap(i) {
    const c = COLORS[i];
    sfx.splash();
    onTap();
    setActive(i);
    setBgColor(c.fill + '28');
    const id = Date.now();
    setRipples(r => [...r, { id, x: c.x, y: c.y, color: c.fill }]);
    setTimeout(() => setActive(null), 500);
    setTimeout(() => setRipples(r => r.filter(rp => rp.id !== id)), 900);
    setTimeout(() => setBgColor(null), 700);
  }

  return (
    <div style={{ width:'100%', height:260, background: bgColor ? `linear-gradient(135deg,#fff9f0,${bgColor})` : '#fff9f0', borderRadius:20, position:'relative', overflow:'hidden', cursor:'default', transition:'background 0.35s ease' }}>
      <svg width="100%" height="260" viewBox="0 0 400 260" style={{ position:'absolute', inset:0 }}>
        {/* Paintbrush streaks in background */}
        {COLORS.map((c,i) => active === i && (
          <ellipse key={i} cx={c.x} cy={c.y} rx="60" ry="40" fill={c.fill} opacity="0.18"/>
        ))}

        {/* Ripple rings */}
        {ripples.map(rp => (
          <circle key={rp.id} cx={rp.x} cy={rp.y} r="30" fill="none" stroke={rp.color} strokeWidth="6"
            style={{ animation:'rp-ripple 0.8s ease-out forwards' }}/>
        ))}

        {/* Color blobs */}
        {COLORS.map((c,i) => (
          <g key={i} style={{ cursor:'pointer', transformOrigin:`${c.x}px ${c.y}px`, animation: active===i ? 'rp-splash 0.5s ease-out' : 'none' }}
             onClick={() => tap(i)}>
            {/* Blob shape — irregular circle via path */}
            <ellipse cx={c.x} cy={c.y} rx="42" ry="38" fill={c.fill} filter="url(#blur)"/>
            <ellipse cx={c.x-8} cy={c.y-8} rx="24" ry="20" fill="white" opacity="0.25"/>
            <text x={c.x} y={c.y+6} textAnchor="middle" fontSize="13" fontWeight="700" fill="white" pointerEvents="none">
              {c.label}
            </text>
          </g>
        ))}

        <defs>
          <filter id="blur"><feGaussianBlur in="SourceGraphic" stdDeviation="2"/></filter>
        </defs>
      </svg>
      <div style={{ position:'absolute', bottom:10, left:0, right:0, textAlign:'center', color:'rgba(0,0,0,0.45)', fontWeight:600, fontSize:'0.85rem' }}>
        Tap each color to splash it! 🎨
      </div>
    </div>
  );
}
