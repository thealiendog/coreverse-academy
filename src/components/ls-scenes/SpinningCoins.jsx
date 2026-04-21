import { useState, useEffect } from 'react';
import { sfx, injectCSS } from './sfx.js';

const CSS = `
@keyframes sc-spin { 0%{transform:rotateY(0deg)}100%{transform:rotateY(360deg)} }
@keyframes sc-float { 0%,100%{transform:translateY(0) rotateY(0deg)}50%{transform:translateY(-12px) rotateY(180deg)} }
@keyframes sc-collect { 0%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(0) translate(60px,-80px)} }
`;

const POSITIONS = [[80,100],[220,70],[320,110],[160,155]];
const LABELS    = ['','1 coin!','2 coins!','3 coins!','4 coins! 🎉'];

export default function SpinningCoins({ onTap }) {
  useEffect(() => injectCSS('ls-sc', CSS), []);
  const [collected, setCollected] = useState([false,false,false,false]);
  const count = collected.filter(Boolean).length;

  function tap(i) {
    if (collected[i]) return;
    sfx.clink();
    onTap();
    setCollected(c => c.map((v,j) => j===i ? true : v));
  }

  return (
    <div style={{ width:'100%', height:260, background:'linear-gradient(135deg,#1a1a2e 0%,#16213e 50%,#0f3460 100%)', borderRadius:20, position:'relative', overflow:'hidden', cursor:'default' }}>
      <svg width="100%" height="260" viewBox="0 0 400 260" style={{ position:'absolute', inset:0 }}>
        {/* Stars bg */}
        {[[30,20],[80,50],[150,15],[250,35],[340,22],[370,60],[60,130],[300,150],[380,120]].map(([x,y],i) => (
          <circle key={i} cx={x} cy={y} r={i%3===0?2:1.2} fill="white" opacity={0.3+0.5*(i%2)}/>
        ))}
        {/* Coins */}
        {POSITIONS.map(([x,y],i) => !collected[i] && (
          <g key={i} style={{ transformOrigin:`${x}px ${y}px`, cursor:'pointer', animation:`sc-float ${2.2+i*0.3}s ease-in-out ${i*0.4}s infinite`, perspective:200 }}
             onClick={() => tap(i)}>
            <circle cx={x} cy={y} r="34" fill="#D97706" stroke="#92400E" strokeWidth="3"/>
            <circle cx={x} cy={y} r="26" fill="#F59E0B"/>
            <circle cx={x} cy={y} r="18" fill="#FCD34D"/>
            <text x={x} y={y+6} textAnchor="middle" fontSize="18" fill="#92400E" fontWeight="bold">$</text>
          </g>
        ))}
        {/* Collected flash */}
        {collected.map((c,i) => c && (
          <text key={i} x={POSITIONS[i][0]} y={POSITIONS[i][1]} textAnchor="middle" fontSize="28" fill="#FCD34D"
            style={{ animation:'sc-collect 0.7s ease-out forwards' }}>★</text>
        ))}
      </svg>

      {/* Counter */}
      <div style={{ position:'absolute', top:14, right:20, background:'rgba(245,158,11,0.20)', border:'2px solid rgba(245,158,11,0.60)', borderRadius:12, padding:'6px 16px', color:'#FCD34D', fontWeight:800, fontSize:'1.2rem' }}>
        {LABELS[count]}
      </div>

      {count === 4 && (
        <div style={{ position:'absolute', inset:0, display:'flex', alignItems:'center', justifyContent:'center', flexDirection:'column', background:'rgba(0,0,0,0.55)' }}>
          <div style={{ fontSize:'3rem' }}>🎉</div>
          <p style={{ color:'#FCD34D', fontWeight:800, fontSize:'1.3rem', marginTop:8 }}>All collected!</p>
        </div>
      )}
    </div>
  );
}
