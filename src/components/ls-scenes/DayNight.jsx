import { useState, useEffect } from 'react';
import { sfx, injectCSS } from './sfx.js';

const CSS = `
@keyframes dn-sunbeam { 0%,100%{opacity:0.5;transform:scaleY(1)}50%{opacity:0.9;transform:scaleY(1.1)} }
@keyframes dn-twinkle { 0%,100%{opacity:0.2}50%{opacity:1} }
@keyframes dn-moon    { 0%,100%{transform:scale(1)}50%{transform:scale(1.05)} }
`;

const TIMES = [
  {
    label:'Morning! ☀️',
    sky:['#87CEEB','#B0E2FF'],
    ground:'#5A9E3C',
    sunX:80, sunY:60, sunColor:'#FCD34D',
    stars: false, moon: false,
  },
  {
    label:'Afternoon! 🌤️',
    sky:['#4AADE8','#87CEEB'],
    ground:'#4A8E35',
    sunX:200, sunY:45, sunColor:'#F59E0B',
    stars: false, moon: false, clouds: true,
  },
  {
    label:'Sunset! 🌅',
    sky:['#FF7043','#FFAB40'],
    ground:'#3A7D2C',
    sunX:330, sunY:120, sunColor:'#FF7043',
    stars: false, moon: false,
  },
  {
    label:'Night time! 🌙',
    sky:['#0d0d2b','#1a1a4e'],
    ground:'#1a3d14',
    sunX:null, sunY:null, sunColor:null,
    stars: true, moon: true,
  },
];

const STAR_POS = [[60,30],[120,15],[200,25],[280,12],[340,35],[380,20],[40,55],[160,48],[300,50]];

export default function DayNight({ onTap }) {
  useEffect(() => injectCSS('ls-dn', CSS), []);
  const [time, setTime] = useState(0);
  const t = TIMES[time];

  function tap() {
    sfx.whoosh();
    onTap();
    setTime(prev => (prev + 1) % TIMES.length);
  }

  return (
    <div onClick={tap} style={{ width:'100%', height:260, borderRadius:20, position:'relative', overflow:'hidden', cursor:'pointer', transition:'all 0.9s ease', background:`linear-gradient(180deg,${t.sky[0]} 0%,${t.sky[1]} 65%,${t.ground} 65%,#2d5a1a 100%)` }}>
      <svg width="100%" height="260" viewBox="0 0 400 260" style={{ position:'absolute', inset:0 }}>

        {/* Stars */}
        {t.stars && STAR_POS.map(([x,y],i) => (
          <circle key={i} cx={x} cy={y} r={i%3===0?2.5:1.5} fill="white"
            style={{ animation:`dn-twinkle ${1.5+i*0.3}s ease-in-out ${i*0.2}s infinite` }}/>
        ))}

        {/* Moon */}
        {t.moon && (
          <g style={{ animation:'dn-moon 3s ease-in-out infinite' }}>
            <circle cx="70" cy="60" r="32" fill="#FEF3C7"/>
            <circle cx="82" cy="50" r="28" fill="#0d0d2b"/>
            {/* Craters */}
            <circle cx="50" cy="55" r="4" fill="rgba(254,243,199,0.5)"/>
            <circle cx="58" cy="72" r="3" fill="rgba(254,243,199,0.5)"/>
          </g>
        )}

        {/* Sun */}
        {t.sunX && (
          <g>
            {Array.from({length:8}).map((_,i) => {
              const a = i*45*Math.PI/180;
              return <line key={i} x1={t.sunX+Math.cos(a)*36} y1={t.sunY+Math.sin(a)*36}
                x2={t.sunX+Math.cos(a)*54} y2={t.sunY+Math.sin(a)*54}
                stroke={t.sunColor} strokeWidth="3.5" strokeLinecap="round"
                style={{ animation:`dn-sunbeam 2s ease-in-out ${i*0.25}s infinite` }}/>;
            })}
            <circle cx={t.sunX} cy={t.sunY} r="30" fill={t.sunColor} style={{ filter:`drop-shadow(0 0 18px ${t.sunColor}90)` }}/>
          </g>
        )}

        {/* Clouds (afternoon) */}
        {t.clouds && (
          <>
            <ellipse cx="280" cy="55" rx="55" ry="28" fill="white" opacity="0.85"/>
            <ellipse cx="240" cy="63" rx="38" ry="22" fill="white" opacity="0.85"/>
            <ellipse cx="318" cy="63" rx="35" ry="22" fill="white" opacity="0.85"/>
          </>
        )}

        {/* Ground details */}
        <rect x="0" y="172" width="400" height="88" fill="transparent"/>
        {/* Trees silhouette */}
        {[60,130,240,330].map((x,i) => (
          <g key={i}>
            <rect x={x-4} y="195" width="8" height="30" fill={t.stars?'#0a2208':'#3a5a1a'}/>
            <polygon points={`${x},170 ${x-18},200 ${x+18},200`} fill={t.stars?'#0d2b0a':'#4a7a25'}/>
          </g>
        ))}
      </svg>

      <div style={{ position:'absolute', top:12, left:0, right:0, textAlign:'center', color:t.stars?'rgba(255,255,255,0.9)':'rgba(0,0,0,0.65)', fontWeight:700, fontSize:'1rem' }}>
        {t.label}
      </div>
      <div style={{ position:'absolute', bottom:10, left:0, right:0, textAlign:'center', color:t.stars?'rgba(255,255,255,0.4)':'rgba(0,0,0,0.35)', fontWeight:600, fontSize:'0.8rem' }}>
        Tap to change the time of day!
      </div>
    </div>
  );
}
