import { useState, useEffect, useRef } from 'react';
import { sfx, injectCSS } from './sfx.js';

const CSS = `
@keyframes th-fall  { 0%{transform:translateY(0);opacity:1}100%{transform:translateY(var(--dy,60px));opacity:0} }
@keyframes th-glow  { 0%,100%{filter:drop-shadow(0 0 8px rgba(245,158,11,0.4))}50%{filter:drop-shadow(0 0 18px rgba(245,158,11,0.8))} }
@keyframes th-flip  { 0%{transform:rotate(0deg)}100%{transform:rotate(180deg)} }
`;

const TOTAL = 30;

export default function TimerHourglass({ onTap }) {
  useEffect(() => injectCSS('ls-th', CSS), []);
  const [grains,  setGrains]  = useState(TOTAL); // grains remaining in top
  const [flipped, setFlipped] = useState(false);
  const [flipping,setFlipping]= useState(false);
  const [particles,setParticles] = useState([]);
  const timerRef = useRef(null);

  useEffect(() => {
    if (grains <= 0) return;
    const interval = flipped ? 550 : 400;
    timerRef.current = setInterval(() => {
      setGrains(g => {
        if (g <= 0) { clearInterval(timerRef.current); return 0; }
        // Add falling particle
        const id = Date.now() + Math.random();
        setParticles(p => [...p.slice(-10), { id }]);
        setTimeout(() => setParticles(p => p.filter(pt => pt.id !== id)), 550);
        sfx.drip?.() || undefined;
        return g - 1;
      });
    }, interval);
    return () => clearInterval(timerRef.current);
  }, [flipped]);

  function flip() {
    if (flipping) return;
    sfx.whoosh();
    onTap();
    setFlipping(true);
    setTimeout(() => {
      setFlipped(f => !f);
      setGrains(TOTAL);
      setFlipping(false);
    }, 500);
  }

  const topFill  = (grains / TOTAL) * 58;
  const botFill  = ((TOTAL - grains) / TOTAL) * 58;

  return (
    <div style={{ width:'100%', height:260, background:'linear-gradient(180deg,#1a1a2e,#0F0B2E)', borderRadius:20, position:'relative', overflow:'hidden', display:'flex', alignItems:'center', justifyContent:'center', flexDirection:'column', gap:16 }}>
      {/* Hourglass */}
      <div onClick={flip} style={{ cursor:'pointer', position:'relative', animation: flipping?'th-flip 0.5s ease-in-out both':'none' }}>
        <svg width="140" height="200" viewBox="0 0 140 200" style={{ animation:'th-glow 2s ease-in-out infinite', filter:'drop-shadow(0 0 10px rgba(245,158,11,0.5))' }}>
          {/* Frame */}
          <path d="M10,5 L130,5 L130,15 L80,95 L130,185 L130,195 L10,195 L10,185 L60,95 L10,15 Z"
            fill="none" stroke="rgba(245,158,11,0.8)" strokeWidth="3" strokeLinejoin="round"/>
          {/* Top glass */}
          <path d="M12,16 L128,16 L78,94 L62,94 Z" fill="rgba(15,11,46,0.6)"/>
          {/* Top sand */}
          {topFill > 0 && (
            <path d={`M${20+((60-topFill)*0.4)},${16+58-topFill} L${120-((60-topFill)*0.4)},${16+58-topFill} L78,94 L62,94 Z`}
              fill="#F59E0B" opacity="0.85"/>
          )}
          {/* Bottom glass */}
          <path d="M12,184 L128,184 L78,96 L62,96 Z" fill="rgba(15,11,46,0.6)"/>
          {/* Bottom sand */}
          {botFill > 0 && (
            <path d={`M12,184 L128,184 L${100+((60-botFill)*0.35)},${184-botFill} L${40-((60-botFill)*0.35)},${184-botFill} Z`}
              fill="#F59E0B" opacity="0.85"/>
          )}
          {/* Falling grain */}
          {particles.map(pt => (
            <circle key={pt.id} cx="70" cy="97" r="3" fill="#FCD34D"
              style={{ '--dy':'58px', animation:'th-fall 0.52s ease-in forwards' }}/>
          ))}
          {/* Center pinch */}
          <circle cx="70" cy="95" r="4" fill="rgba(245,158,11,0.9)"/>
        </svg>
      </div>

      {/* Status */}
      <div style={{ textAlign:'center' }}>
        <p style={{ color:'#FCD34D', fontWeight:700, fontSize:'1rem', margin:0 }}>
          {grains === 0 ? '⏰ Time\'s up! Tap to flip!' : `${grains} grains left`}
        </p>
        <p style={{ color:'rgba(255,255,255,0.35)', fontSize:'0.78rem', marginTop:4 }}>Tap the hourglass to flip it!</p>
      </div>
    </div>
  );
}
