import { useState, useEffect, useRef } from 'react';
import { sfx, injectCSS } from './sfx.js';

const CSS = `
@keyframes pb-fall  { 0%{top:-40px;opacity:1}100%{top:260px;opacity:0.6} }
@keyframes pb-catch { 0%{transform:scale(1)}30%{transform:scale(1.4)}100%{transform:scale(1)} }
@keyframes pb-coin  { 0%,100%{transform:rotate(-8deg)}50%{transform:rotate(8deg)} }
`;

let _uid2 = 0;

export default function PiggyBank({ onTap }) {
  useEffect(() => injectCSS('ls-pb', CSS), []);
  const [coins,   setCoins]   = useState([]);
  const [caught,  setCaught]  = useState(0);
  const [catching,setCatching]= useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    function spawnCoin() {
      const x = 15 + Math.random() * 70;
      const id = ++_uid2;
      const speed = 2.2 + Math.random() * 1.8;
      setCoins(c => [...c.slice(-12), { id, x, speed }]);
      setTimeout(() => setCoins(c => c.filter(co => co.id !== id)), speed * 1000 + 200);
    }
    spawnCoin();
    timerRef.current = setInterval(spawnCoin, 1200);
    return () => clearInterval(timerRef.current);
  }, []);

  function catchCoin(id) {
    setCoins(c => c.filter(co => co.id !== id));
    sfx.clink();
    onTap();
    setCaught(n => n + 1);
    setCatching(true);
    setTimeout(() => setCatching(false), 400);
  }

  return (
    <div style={{ width:'100%', height:260, background:'linear-gradient(180deg,#FFF9F0 0%,#FDE68A 100%)', borderRadius:20, position:'relative', overflow:'hidden' }}>
      {/* Falling coins */}
      {coins.map(coin => (
        <div
          key={coin.id}
          onClick={() => catchCoin(coin.id)}
          style={{
            position:'absolute',
            left:`${coin.x}%`,
            width:44, height:44,
            borderRadius:'50%',
            background:'linear-gradient(135deg,#F59E0B,#FDE68A,#D97706)',
            border:'3px solid #B45309',
            boxShadow:'0 4px 12px rgba(245,158,11,0.5)',
            cursor:'pointer',
            display:'flex', alignItems:'center', justifyContent:'center',
            fontSize:'1.4rem',
            animation:`pb-fall ${coin.speed}s linear both`,
            zIndex:5,
          }}
        >
          $
        </div>
      ))}

      {/* Piggy bank SVG */}
      <svg width="100%" height="260" viewBox="0 0 400 260" style={{ position:'absolute', inset:0, pointerEvents:'none' }}>
        {/* Piggy body */}
        <g style={{ transformOrigin:'200px 210px', animation: catching?'pb-catch 0.4s ease-out':'none' }}>
          <ellipse cx="200" cy="210" rx="75" ry="55" fill="#FFB6C1"/>
          <ellipse cx="200" cy="185" rx="45" ry="40" fill="#FFC0CB"/>
          {/* Snout */}
          <ellipse cx="235" cy="200" rx="22" ry="16" fill="#FF69B4"/>
          <circle cx="228" cy="198" r="5" fill="#C2185B"/>
          <circle cx="242" cy="198" r="5" fill="#C2185B"/>
          {/* Eye */}
          <circle cx="218" cy="182" r="6" fill="#1a1a1a"/>
          <circle cx="220" cy="180" r="2" fill="white"/>
          {/* Ear */}
          <ellipse cx="168" cy="178" rx="14" ry="10" fill="#FF69B4" transform="rotate(-20 168 178)"/>
          {/* Coin slot */}
          <rect x="192" y="162" width="16" height="5" rx="2.5" fill="#333"/>
          {/* Legs */}
          <rect x="160" y="252" width="18" height="16" rx="6" fill="#FFB6C1"/>
          <rect x="185" y="252" width="18" height="16" rx="6" fill="#FFB6C1"/>
          <rect x="210" y="252" width="18" height="16" rx="6" fill="#FFB6C1"/>
          <rect x="235" y="252" width="18" height="16" rx="6" fill="#FFB6C1"/>
          {/* Tail */}
          <path d="M130,210 Q115,200 122,188 Q128,175 120,168" stroke="#FF69B4" strokeWidth="5" fill="none" strokeLinecap="round"/>
        </g>
      </svg>

      {/* Counter */}
      <div style={{ position:'absolute', top:12, left:0, right:0, textAlign:'center', color:'#7C3AED', fontWeight:800, fontSize:'1.1rem' }}>
        {caught === 0 ? 'Tap coins to catch them! 💰' : `${caught} coin${caught>1?'s':''} saved! 🐷`}
      </div>
    </div>
  );
}
