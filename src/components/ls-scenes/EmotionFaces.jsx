import { useState, useEffect } from 'react';
import { sfx, injectCSS } from './sfx.js';

const CSS = `
@keyframes ef-happy  { 0%,100%{transform:translateY(0) scale(1)}50%{transform:translateY(-14px) scale(1.08)} }
@keyframes ef-sad    { 0%,100%{transform:translateY(0)}50%{transform:translateY(8px)} }
@keyframes ef-angry  { 0%,100%{transform:translateX(0)}25%{transform:translateX(-8px)}75%{transform:translateX(8px)} }
@keyframes ef-scared { 0%,100%{transform:rotate(0deg)}25%{transform:rotate(-4deg)}75%{transform:rotate(4deg)} }
@keyframes ef-big    { 0%{transform:scale(1)}30%{transform:scale(1.35)}60%{transform:scale(1.15)}100%{transform:scale(1)} }
`;

const FACES = [
  { label:'Happy!',    color:'#FCD34D', bg:'#FEF3C7', anim:'ef-happy 1.4s ease-in-out infinite',
    eyes: [{cx:16,cy:16,ry:5,rx:4}, {cx:44,cy:16,ry:5,rx:4}],
    mouth: 'M10,36 Q30,52 50,36', sound: () => sfx.chime() },
  { label:'Sad',       color:'#60A5FA', bg:'#EFF6FF', anim:'ef-sad 2s ease-in-out infinite',
    eyes: [{cx:16,cy:20,ry:4,rx:3}, {cx:44,cy:20,ry:4,rx:3}],
    mouth: 'M10,44 Q30,32 50,44', sound: () => sfx.bloop() },
  { label:'Angry!',    color:'#EF4444', bg:'#FEF2F2', anim:'ef-angry 0.5s ease-in-out infinite',
    eyes: [{cx:16,cy:18,ry:4,rx:5}, {cx:44,cy:18,ry:4,rx:5}],
    mouth: 'M14,40 Q30,32 46,40', brows: [{x1:8,y1:8,x2:22,y2:14}, {x1:38,y1:14,x2:52,y2:8}],
    sound: () => sfx.thump() },
  { label:'Surprised!',color:'#A78BFA', bg:'#F5F3FF', anim:'ef-scared 0.7s ease-in-out infinite',
    eyes: [{cx:16,cy:16,ry:7,rx:7}, {cx:44,cy:16,ry:7,rx:7}],
    mouth: 'M20,38 Q30,50 40,38', sound: () => sfx.splash() },
];

export default function EmotionFaces({ onTap }) {
  useEffect(() => injectCSS('ls-ef', CSS), []);
  const [big, setBig] = useState(null);

  function tap(i) {
    FACES[i].sound();
    onTap();
    setBig(i);
    setTimeout(() => setBig(null), 600);
  }

  return (
    <div style={{ width:'100%', height:260, background:'linear-gradient(135deg,#ffecd2,#fcb69f)', borderRadius:20, display:'flex', alignItems:'center', justifyContent:'center', gap:16, padding:'0 12px' }}>
      {FACES.map((f,i) => (
        <div key={i} onClick={() => tap(i)} style={{ cursor:'pointer', display:'flex', flexDirection:'column', alignItems:'center', gap:8 }}>
          <div style={{
            width:80, height:80, borderRadius:'50%',
            background: f.bg,
            border: `3px solid ${f.color}`,
            boxShadow: big===i ? `0 0 0 6px ${f.color}60` : 'none',
            display:'flex', alignItems:'center', justifyContent:'center',
            transformOrigin:'center',
            animation: big===i ? 'ef-big 0.6s ease-out' : f.anim,
            transition:'box-shadow 0.15s',
          }}>
            <svg width="60" height="60" viewBox="0 0 60 60">
              {/* Face circle */}
              <circle cx="30" cy="30" r="28" fill={f.color} opacity="0.85"/>
              {/* Eyes */}
              {f.eyes.map((e,j) => (
                <ellipse key={j} cx={e.cx} cy={e.cy} rx={e.rx} ry={e.ry} fill="#1a1a1a"/>
              ))}
              {/* Eyebrows (angry) */}
              {f.brows?.map((b,j) => (
                <line key={j} x1={b.x1} y1={b.y1} x2={b.x2} y2={b.y2} stroke="#1a1a1a" strokeWidth="3" strokeLinecap="round"/>
              ))}
              {/* Mouth */}
              <path d={f.mouth} stroke="#1a1a1a" strokeWidth="3" fill="none" strokeLinecap="round"/>
            </svg>
          </div>
          <span style={{ color: f.color, fontWeight:700, fontSize:'0.78rem' }}>{f.label}</span>
        </div>
      ))}
    </div>
  );
}
