import { useState, useEffect } from 'react';
import { sfx, injectCSS } from './sfx.js';

const CSS = `
@keyframes lt-glow { 0%{transform:scale(1)}50%{transform:scale(1.4)}100%{transform:scale(1)} }
@keyframes lt-pulse{ 0%,100%{opacity:0.5}50%{opacity:1} }
`;

// Dot paths for letter 'A'
const LETTERS = [
  {
    letter: 'A',
    dots: [
      [200,45],[178,85],[165,110],[155,135],[215,95],[230,110],[245,135],
    ],
    path: 'M200,45 L155,135 M200,45 L245,135 M168,105 L232,105',
  },
  {
    letter: 'B',
    dots: [[160,45],[160,75],[160,105],[160,135],[185,45],[200,55],[200,80],[185,90],[200,110],[200,130],[185,135]],
    path: 'M160,45 L160,135 M160,45 L195,50 Q210,65 195,90 L160,90 M160,90 L195,95 Q215,112 195,135 L160,135',
  },
  {
    letter: 'S',
    dots: [[215,50],[195,45],[172,50],[160,65],[168,85],[195,90],[225,100],[232,115],[220,132],[198,138],[175,135],[160,125]],
    path: 'M215,50 Q160,40 160,70 Q160,95 200,90 Q240,85 240,115 Q240,145 185,140',
  },
];

export default function LetterTrace({ onTap }) {
  useEffect(() => injectCSS('ls-lt', CSS), []);
  const [letterIdx, setLetterIdx] = useState(0);
  const [dotIdx,    setDotIdx]    = useState(0); // next dot to tap
  const [lit,       setLit]       = useState([]);
  const [done,      setDone]      = useState(false);

  const L = LETTERS[letterIdx];

  function tapDot(i) {
    if (i !== dotIdx || done) return;
    sfx.note(i);
    onTap();
    setLit(l => [...l, i]);
    if (i === L.dots.length - 1) {
      setDone(true);
      sfx.sparkle();
      setTimeout(() => {
        const next = (letterIdx + 1) % LETTERS.length;
        setLetterIdx(next);
        setDotIdx(0);
        setLit([]);
        setDone(false);
      }, 1800);
    } else {
      setDotIdx(d => d + 1);
    }
  }

  return (
    <div style={{ width:'100%', height:260, background:'#1a1a2e', borderRadius:20, position:'relative', overflow:'hidden' }}>
      <svg width="100%" height="260" viewBox="0 0 400 260" style={{ position:'absolute', inset:0 }}>
        {/* Ghost letter guide */}
        <path d={L.path} stroke="rgba(255,255,255,0.08)" strokeWidth="32" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
        {/* Traced path */}
        <path d={L.path} stroke="rgba(124,58,237,0.35)" strokeWidth="6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="12 6"/>

        {/* Dots */}
        {L.dots.map((dot, i) => {
          const isLit  = lit.includes(i);
          const isNext = i === dotIdx && !done;
          return (
            <g key={i} style={{ cursor: isNext?'pointer':'default', transformOrigin:`${dot[0]}px ${dot[1]}px`, animation: isNext?'lt-pulse 1s ease-in-out infinite':'none' }}
               onClick={() => tapDot(i)}>
              <circle cx={dot[0]} cy={dot[1]} r={isLit?14:isNext?13:10}
                fill={isLit?'#34D399':isNext?'#7C3AED':'rgba(255,255,255,0.12)'}
                stroke={isLit?'#6EE7B7':isNext?'#A78BFA':'rgba(255,255,255,0.20)'}
                strokeWidth="2.5"
                style={{ filter: isLit?'drop-shadow(0 0 8px rgba(52,211,153,0.8))':isNext?'drop-shadow(0 0 10px rgba(124,58,237,0.9))':'none', transition:'all 0.3s ease' }}/>
              <text x={dot[0]} y={dot[1]+5} textAnchor="middle" fontSize="10" fontWeight="700" fill={isLit?'white':'rgba(255,255,255,0.5)'}>{i+1}</text>
            </g>
          );
        })}

        {/* Large letter label */}
        <text x="65" y="155" fontSize="120" fill="rgba(255,255,255,0.05)" fontWeight="900" fontFamily="Georgia,serif">{L.letter}</text>
      </svg>

      <div style={{ position:'absolute', top:12, left:0, right:0, textAlign:'center', color:'rgba(255,255,255,0.7)', fontWeight:700, fontSize:'0.9rem' }}>
        {done ? `Great letter ${L.letter}! 🌟` : `Trace the letter ${L.letter}! Tap dot ${dotIdx+1} ⟶`}
      </div>
    </div>
  );
}
