import { useState, useEffect } from 'react';
import { sfx, injectCSS, tone } from './sfx.js';

const CSS = `
@keyframes as-flap  { 0%,100%{transform:scaleX(1)}50%{transform:scaleX(0.3)} }
@keyframes as-jump  { 0%,100%{transform:translateY(0)}40%{transform:translateY(-28px)} }
@keyframes as-wag   { 0%,100%{transform:rotate(0deg)}50%{transform:rotate(30deg)} }
@keyframes as-swim  { 0%,100%{transform:translateX(0) scaleX(1)}50%{transform:translateX(14px) scaleX(-1)} }
@keyframes as-tada  { 0%,100%{transform:scale(1)}30%{transform:scale(1.4) rotate(-5deg)}60%{transform:scale(1.2) rotate(5deg)} }
`;

const ANIMALS = [
  {
    name:'Bird', color:'#F59E0B', idle:'none', active:'as-tada 0.6s ease-out',
    sound: () => [880,1100,880].forEach((f,i) => setTimeout(()=>tone(f,0.12,'sine',0.15),i*100)),
    label:'Tweet tweet! 🐦',
    draw: (cx,cy) => (
      <>
        <ellipse cx={cx} cy={cy} rx="22" ry="16" fill="#F59E0B"/>
        <ellipse cx={cx+18} cy={cy-2} rx="12" ry="8" fill="#FCD34D"/>
        <ellipse cx={cx-18} cy={cy-2} rx="12" ry="8" fill="#FCD34D"/>
        <circle cx={cx} cy={cy-10} r="12" fill="#F59E0B"/>
        <path d={`M${cx+5},${cy-10} L${cx+18},${cy-8} L${cx+5},${cy-5}`} fill="#EF4444"/>
        <circle cx={cx-3} cy={cy-14} r="3" fill="#1a1a1a"/>
        <circle cx={cx-2} cy={cy-15} r="1" fill="white"/>
      </>
    ),
  },
  {
    name:'Dog', color:'#C2956A', idle:'none', active:'as-jump 0.5s ease-out',
    sound: () => [220,330,220].forEach((f,i) => setTimeout(()=>tone(f,0.15,'sawtooth',0.12),i*80)),
    label:'Woof woof! 🐕',
    draw: (cx,cy) => (
      <>
        <ellipse cx={cx} cy={cy+8} rx="28" ry="20" fill="#C2956A"/>
        <circle cx={cx} cy={cy-12} r="18" fill="#C2956A"/>
        <ellipse cx={cx-12} cy={cy-24} rx="8" ry="12" fill="#A0785A"/>
        <ellipse cx={cx+12} cy={cy-24} rx="8" ry="12" fill="#A0785A"/>
        <ellipse cx={cx-5} cy={cy-10} rx="4" ry="4" fill="#1a1a1a"/>
        <ellipse cx={cx+5} cy={cy-10} rx="4" ry="4" fill="#1a1a1a"/>
        <ellipse cx={cx} cy={cy-4} rx="7" ry="5" fill="#D4967A"/>
        <path d={`M${cx-5},${cy+4} Q${cx},${cy+10} ${cx+5},${cy+4}`} stroke="#1a1a1a" strokeWidth="2" fill="none"/>
        <ellipse cx={cx+30} cy={cy+5} rx="4" ry="10" fill="#C2956A" style={{ transformOrigin:`${cx+26}px ${cy+5}px`, animation:'as-wag 0.6s ease-in-out infinite' }}/>
      </>
    ),
  },
  {
    name:'Cat', color:'#9CA3AF', idle:'none', active:'as-tada 0.6s ease-out',
    sound: () => [300,500,400].forEach((f,i) => setTimeout(()=>tone(f,0.18,'sine',0.13),i*120)),
    label:'Meow! 🐱',
    draw: (cx,cy) => (
      <>
        <ellipse cx={cx} cy={cy+8} rx="26" ry="18" fill="#9CA3AF"/>
        <circle cx={cx} cy={cy-10} r="17" fill="#9CA3AF"/>
        <polygon points={`${cx-14},${cy-24} ${cx-8},${cy-36} ${cx-2},${cy-24}`} fill="#6B7280"/>
        <polygon points={`${cx+14},${cy-24} ${cx+8},${cy-36} ${cx+2},${cy-24}`} fill="#6B7280"/>
        <ellipse cx={cx-5} cy={cy-12} rx="3.5" ry="4" fill="#1a1a1a"/>
        <ellipse cx={cx+5} cy={cy-12} rx="3.5" ry="4" fill="#1a1a1a"/>
        <circle cx={cx} cy={cy-6} r="4" fill="#F9A8D4"/>
        <path d={`M${cx-3},${cy-4} Q${cx},${cy} ${cx+3},${cy-4}`} stroke="#1a1a1a" strokeWidth="1.5" fill="none"/>
        {/* whiskers */}
        {[[-24,-8,-14,-7],[24,-8,14,-7],[-24,-4,-14,-5],[24,-4,14,-5]].map(([x1,y1,x2,y2],i)=>(
          <line key={i} x1={cx+x1} y1={cy+y1} x2={cx+x2} y2={cy+y2} stroke="#6B7280" strokeWidth="1.2"/>
        ))}
      </>
    ),
  },
  {
    name:'Fish', color:'#3B82F6', idle:'as-swim 2s ease-in-out infinite', active:'as-tada 0.6s ease-out',
    sound: () => [600,800,600].forEach((f,i) => setTimeout(()=>tone(f,0.08,'sine',0.12),i*60)),
    label:'Splish splash! 🐟',
    draw: (cx,cy) => (
      <>
        <ellipse cx={cx} cy={cy} rx="30" ry="18" fill="#3B82F6"/>
        <polygon points={`${cx-32},${cy} ${cx-50},${cy-14} ${cx-50},${cy+14}`} fill="#2563EB"/>
        <ellipse cx={cx+5} cy={cy-6} rx="5" ry="5" fill="#1a1a1a"/>
        <circle cx={cx+6} cy={cy-7} r="2" fill="white"/>
        <ellipse cx={cx+8} cy={cy} rx="18" ry="6" fill="#60A5FA" opacity="0.4"/>
      </>
    ),
  },
];

const LAYOUT = [[100,120],[300,120],[100,210],[300,210]];

export default function AnimalSounds({ onTap }) {
  useEffect(() => injectCSS('ls-as', CSS), []);
  const [active, setActive] = useState(null);
  const [label,  setLabel]  = useState('Tap an animal!');

  function tap(i) {
    ANIMALS[i].sound();
    onTap();
    setActive(i);
    setLabel(ANIMALS[i].label);
    setTimeout(() => setActive(null), 700);
  }

  return (
    <div style={{ width:'100%', height:260, background:'linear-gradient(180deg,#87CEEB 0%,#c8f7c5 70%,#8FBC8F 100%)', borderRadius:20, position:'relative', overflow:'hidden' }}>
      {/* Water for fish */}
      <div style={{ position:'absolute', bottom:0, left:0, right:0, height:80, background:'rgba(59,130,246,0.3)', borderTop:'2px solid rgba(59,130,246,0.5)' }}/>

      <svg width="100%" height="260" viewBox="0 0 400 260" style={{ position:'absolute', inset:0 }}>
        {ANIMALS.map((a,i) => {
          const [cx,cy] = LAYOUT[i];
          const isActive = active === i;
          return (
            <g key={i} style={{ cursor:'pointer', transformOrigin:`${cx}px ${cy}px`, animation: isActive ? a.active : a.idle }}
               onClick={() => tap(i)}>
              {a.draw(cx, cy)}
            </g>
          );
        })}
      </svg>

      <div style={{ position:'absolute', top:10, left:0, right:0, textAlign:'center', color:'rgba(0,0,0,0.65)', fontWeight:700, fontSize:'0.9rem', background:'rgba(255,255,255,0.45)', padding:'4px 0' }}>
        {label}
      </div>
    </div>
  );
}
