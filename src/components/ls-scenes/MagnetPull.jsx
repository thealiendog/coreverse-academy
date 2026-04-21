import { useState, useEffect } from 'react';
import { sfx, injectCSS } from './sfx.js';

const CSS = `
@keyframes mg-attract { 0%{transform:translateX(0)}100%{transform:translateX(var(--dx))} }
@keyframes mg-spark   { 0%{transform:scale(0);opacity:1}100%{transform:scale(2.5);opacity:0} }
@keyframes mg-pulse   { 0%,100%{opacity:0.5}50%{opacity:1} }
`;

export default function MagnetPull({ onTap }) {
  useEffect(() => injectCSS('ls-mg', CSS), []);
  const [flipped, setFlipped]   = useState(false); // right magnet polarity
  const [sparks,  setSparks]    = useState([]);
  const [attracted, setAttracted] = useState(false);

  const attract = !flipped; // opposite poles → attract

  function togglePolarity() {
    sfx.bloop();
    onTap();
    setFlipped(f => !f);
    setAttracted(false);
  }

  function moveClose() {
    if (attract) {
      sfx.whoosh();
      onTap();
      setAttracted(true);
      const id = Date.now();
      setSparks(s => [...s, { id }]);
      setTimeout(() => setSparks(s => s.filter(sp => sp.id !== id)), 800);
    } else {
      sfx.splash();
      onTap();
    }
  }

  const gap = attracted ? 14 : 80;
  const leftX  = 200 - gap/2 - 50;
  const rightX = 200 + gap/2;

  return (
    <div style={{ width:'100%', height:260, background:'linear-gradient(180deg,#0F0B2E 0%,#1a1a3e 100%)', borderRadius:20, position:'relative', overflow:'hidden' }}>
      {/* Spark rings */}
      {sparks.map(sp => (
        <div key={sp.id} style={{ position:'absolute', left:'50%', top:'42%', transform:'translate(-50%,-50%)', width:60, height:60, borderRadius:'50%', border:'3px solid #FCD34D', pointerEvents:'none', animation:'mg-spark 0.8s ease-out forwards' }}/>
      ))}

      <svg width="100%" height="260" viewBox="0 0 400 260" style={{ position:'absolute', inset:0 }}>
        {/* Field lines */}
        {attract && (
          [100,130,160].map((y,i) => (
            <path key={i} d={`M${leftX+50},${y} Q200,${y+(i-1)*8} ${rightX},${y}`}
              stroke="rgba(252,211,77,0.25)" strokeWidth="2" fill="none" strokeDasharray="8 5"
              style={{ animation:'mg-pulse 1.5s ease-in-out infinite' }}/>
          ))
        )}
        {!attract && (
          [100,130,160].map((y,i) => (
            <>
              <path key={`l${i}`} d={`M${leftX+50},${y} Q${leftX+50-30},${y} ${leftX+50-60},${y+(i-1)*4}`}
                stroke="rgba(239,68,68,0.3)" strokeWidth="2" fill="none" strokeDasharray="8 5"/>
              <path key={`r${i}`} d={`M${rightX},${y} Q${rightX+30},${y} ${rightX+60},${y+(i-1)*4}`}
                stroke="rgba(239,68,68,0.3)" strokeWidth="2" fill="none" strokeDasharray="8 5"/>
            </>
          ))
        )}

        {/* Left magnet (fixed N) */}
        <g style={{ transition:'all 0.5s cubic-bezier(0.16,1,0.3,1)' }}>
          <rect x={leftX} y="90" width="50" height="90" rx="10" fill="#3B82F6"/>
          <rect x={leftX} y="90" width="50" height="45" rx="10" fill="#EF4444"/>
          <text x={leftX+25} y="122" textAnchor="middle" fontSize="18" fontWeight="900" fill="white">N</text>
          <text x={leftX+25} y="158" textAnchor="middle" fontSize="18" fontWeight="900" fill="white">S</text>
        </g>

        {/* Right magnet (flippable) */}
        <g style={{ transition:'all 0.5s cubic-bezier(0.16,1,0.3,1)' }}>
          <rect x={rightX} y="90" width="50" height="90" rx="10" fill="#22C55E"/>
          <rect x={rightX} y="90" width="50" height="45" rx="10" fill={flipped?'#3B82F6':'#EF4444'}/>
          <text x={rightX+25} y="122" textAnchor="middle" fontSize="18" fontWeight="900" fill="white">{flipped?'S':'N'}</text>
          <text x={rightX+25} y="158" textAnchor="middle" fontSize="18" fontWeight="900" fill="white">{flipped?'N':'S'}</text>
        </g>

        {/* Status */}
        <text x="200" y="220" textAnchor="middle" fontSize="15" fontWeight="700"
          fill={attract?'#34D399':'#EF4444'}>
          {attract ? (attracted ? '⚡ Snap! They stuck together!' : '← They attract!') : '↔ They push apart!'}
        </text>
      </svg>

      {/* Controls */}
      <div style={{ position:'absolute', bottom:12, left:'50%', transform:'translateX(-50%)', display:'flex', gap:10 }}>
        <button onClick={togglePolarity} style={{ background:'rgba(255,255,255,0.12)', color:'white', border:'1.5px solid rgba(255,255,255,0.25)', borderRadius:12, padding:'8px 16px', fontWeight:700, fontSize:'0.82rem', cursor:'pointer' }}>
          🔄 Flip magnet
        </button>
        <button onClick={moveClose} style={{ background: attract?'rgba(52,211,153,0.25)':'rgba(239,68,68,0.25)', color: attract?'#34D399':'#EF4444', border:`1.5px solid ${attract?'rgba(52,211,153,0.5)':'rgba(239,68,68,0.5)'}`, borderRadius:12, padding:'8px 16px', fontWeight:700, fontSize:'0.82rem', cursor:'pointer' }}>
          {attract ? '🧲 Bring together' : '💨 Push apart'}
        </button>
      </div>
    </div>
  );
}
