import { useState, useEffect } from 'react';
import { sfx, injectCSS } from './sfx.js';

const CSS = `
@keyframes bo-glow   { 0%,100%{opacity:0.4;transform:scale(1)}50%{opacity:1;transform:scale(1.06)} }
@keyframes bo-correct{ 0%{transform:scale(1)}30%{transform:scale(1.4)}100%{transform:scale(1)} }
@keyframes bo-star   { 0%{transform:translateY(0) scale(1);opacity:1}100%{transform:translateY(-50px) scale(0.5);opacity:0} }
`;

const PARTS = [
  { name:'Head',  prompt:'Tap your HEAD!',  zone:[175,28,50,50],  cx:200, cy:52 },
  { name:'Hands', prompt:'Tap your HANDS!', zone:[110,120,40,55], cx:135, cy:148 },
  { name:'Belly', prompt:'Tap your BELLY!', zone:[168,115,64,65], cx:200, cy:148 },
  { name:'Legs',  prompt:'Tap your LEGS!',  zone:[158,185,85,65], cx:200, cy:218 },
  { name:'Feet',  prompt:'Tap your FEET!',  zone:[155,238,90,28], cx:200, cy:252 },
];

export default function BodyOutline({ onTap }) {
  useEffect(() => injectCSS('ls-bo', CSS), []);
  const [partIdx,  setPartIdx]  = useState(0);
  const [correct,  setCorrect]  = useState(false);
  const [stars,    setStars]    = useState([]);
  const [done,     setDone]     = useState(false);

  const current = PARTS[partIdx];

  function tapPart(i) {
    if (correct || done) return;
    if (i !== partIdx) {
      sfx.bloop();
      return;
    }
    sfx.sparkle();
    onTap();
    setCorrect(true);
    setStars(s => [...s, { id: Date.now(), x: PARTS[i].cx }]);
    setTimeout(() => {
      setCorrect(false);
      if (partIdx >= PARTS.length - 1) setDone(true);
      else setPartIdx(p => p + 1);
    }, 900);
  }

  return (
    <div style={{ width:'100%', height:260, background:'linear-gradient(135deg,#EFF6FF,#F0FDF4)', borderRadius:20, position:'relative', overflow:'hidden' }}>
      {/* Floating stars */}
      {stars.map(s => (
        <div key={s.id} style={{ position:'absolute', left: `${(s.x/400)*100}%`, bottom:'50%', fontSize:'1.5rem', pointerEvents:'none', animation:'bo-star 0.8s ease-out forwards' }}>⭐</div>
      ))}

      <svg width="100%" height="260" viewBox="0 0 400 270" style={{ position:'absolute', inset:0 }}>
        {/* Body */}
        {/* Head */}
        <circle cx="200" cy="52" r="38" fill="#FDDBB0" stroke="#E0A070" strokeWidth="2.5"/>
        {/* Eyes */}
        <circle cx="188" cy="46" r="5" fill="#1a1a1a"/>
        <circle cx="212" cy="46" r="5" fill="#1a1a1a"/>
        {/* Smile */}
        <path d="M188,62 Q200,72 212,62" stroke="#1a1a1a" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
        {/* Neck */}
        <rect x="192" y="88" width="16" height="20" rx="4" fill="#FDDBB0" stroke="#E0A070" strokeWidth="1.5"/>
        {/* Torso */}
        <rect x="162" y="106" width="76" height="78" rx="14" fill="#60A5FA" stroke="#3B82F6" strokeWidth="2"/>
        {/* Arms */}
        <rect x="112" y="110" width="52" height="22" rx="11" fill="#FDDBB0" stroke="#E0A070" strokeWidth="1.5"/>
        <rect x="236" y="110" width="52" height="22" rx="11" fill="#FDDBB0" stroke="#E0A070" strokeWidth="1.5"/>
        {/* Hands */}
        <circle cx="118" cy="148" r="18" fill="#FDDBB0" stroke="#E0A070" strokeWidth="1.5"/>
        <circle cx="282" cy="148" r="18" fill="#FDDBB0" stroke="#E0A070" strokeWidth="1.5"/>
        {/* Legs */}
        <rect x="168" y="182" width="28" height="66" rx="12" fill="#FDDBB0" stroke="#E0A070" strokeWidth="1.5"/>
        <rect x="204" y="182" width="28" height="66" rx="12" fill="#FDDBB0" stroke="#E0A070" strokeWidth="1.5"/>
        {/* Feet */}
        <ellipse cx="180" cy="252" rx="22" ry="12" fill="#FDDBB0" stroke="#E0A070" strokeWidth="1.5"/>
        <ellipse cx="220" cy="252" rx="22" ry="12" fill="#FDDBB0" stroke="#E0A070" strokeWidth="1.5"/>

        {/* Highlighted target zone */}
        {!done && PARTS.map((p,i) => {
          const isTarget = i === partIdx;
          const isDone   = i < partIdx;
          return (
            <rect key={i} x={p.zone[0]} y={p.zone[1]} width={p.zone[2]} height={p.zone[3]} rx="14"
              fill={isDone?'rgba(52,211,153,0.20)':isTarget?'rgba(124,58,237,0.18)':'transparent'}
              stroke={isDone?'#34D399':isTarget?'#7C3AED':'transparent'}
              strokeWidth={isTarget?3:1.5}
              strokeDasharray={isTarget?'8 4':'none'}
              style={{ animation: isTarget?'bo-glow 1.2s ease-in-out infinite':'none', cursor:'pointer' }}
              onClick={() => tapPart(i)}/>
          );
        })}
      </svg>

      {/* Prompt */}
      <div style={{ position:'absolute', top:10, left:0, right:0, textAlign:'center' }}>
        {done ? (
          <p style={{ color:'#22C55E', fontWeight:800, fontSize:'1.1rem' }}>Amazing! You know your body! 🎉</p>
        ) : (
          <p style={{ color:'#7C3AED', fontWeight:800, fontSize:'1rem', animation: correct?'bo-correct 0.5s ease-out':'none' }}>
            {correct ? '⭐ Great!' : current.prompt}
          </p>
        )}
      </div>
    </div>
  );
}
