import { useState, useEffect, useRef } from 'react';
import { sfx, injectCSS, tone } from './sfx.js';

const CSS = `
@keyframes hb-beat { 0%,100%{transform:scale(1)}15%{transform:scale(1.28)}30%{transform:scale(1.08)}45%{transform:scale(1.22)}60%{transform:scale(1)} }
@keyframes hb-ring  { 0%{transform:scale(1);opacity:0.7}100%{transform:scale(2.8);opacity:0} }
`;

export default function Heartbeat({ onTap }) {
  useEffect(() => injectCSS('ls-hb', CSS), []);
  const [bpm,  setBpm]  = useState(72);
  const [rings,setRings]= useState([]);
  const beatRef = useRef(null);

  useEffect(() => {
    function beat() {
      tone(90, 0.06, 'sine', 0.22);
      setTimeout(() => tone(70, 0.06, 'sine', 0.18), 70);
      const id = Date.now();
      setRings(r => [...r.slice(-4), { id }]);
      setTimeout(() => setRings(r => r.filter(rg => rg.id !== id)), 1200);
    }
    beat();
    const interval = Math.round(60000 / bpm);
    beatRef.current = setInterval(beat, interval);
    return () => clearInterval(beatRef.current);
  }, [bpm]);

  function tap() {
    onTap();
    setBpm(b => Math.min(b + 18, 160));
    // Decay back
    setTimeout(() => setBpm(b => Math.max(b - 6, 72)), 3000);
  }

  const interval = Math.round(60000 / bpm);
  const animDur  = `${interval / 1000}s`;

  return (
    <div style={{ width:'100%', height:260, background:'linear-gradient(135deg,#1a0005,#3D0012,#5C0020)', borderRadius:20, position:'relative', overflow:'hidden', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', gap:20 }}>
      {/* Rings */}
      {rings.map(rg => (
        <div key={rg.id} style={{ position:'absolute', width:120, height:108, borderRadius:'50%', border:'3px solid rgba(239,68,68,0.7)', pointerEvents:'none', animation:'hb-ring 1.2s ease-out forwards' }}/>
      ))}

      {/* Heart */}
      <div onClick={tap} style={{ cursor:'pointer', position:'relative' }}>
        <svg width="130" height="118" viewBox="0 0 100 90"
          style={{ filter:'drop-shadow(0 0 24px rgba(239,68,68,0.8))', animation:`hb-beat ${animDur} ease-in-out infinite` }}>
          <path d="M50,80 C10,55 2,30 2,22 C2,8 14,2 26,2 C36,2 44,8 50,16 C56,8 64,2 74,2 C86,2 98,8 98,22 C98,30 90,55 50,80 Z"
            fill="#EF4444"/>
          {/* Highlight */}
          <path d="M30,15 C24,18 18,25 18,32" stroke="rgba(255,255,255,0.4)" strokeWidth="4" fill="none" strokeLinecap="round"/>
        </svg>
      </div>

      {/* BPM display */}
      <div style={{ textAlign:'center' }}>
        <p style={{ color:'rgba(239,68,68,0.9)', fontWeight:800, fontSize:'1.8rem', margin:0 }}>{bpm}</p>
        <p style={{ color:'rgba(255,255,255,0.45)', fontSize:'0.8rem', margin:0 }}>beats per minute</p>
      </div>
      <p style={{ color:'rgba(255,255,255,0.50)', fontSize:'0.82rem' }}>Tap the heart to make it beat faster! 💗</p>
    </div>
  );
}
