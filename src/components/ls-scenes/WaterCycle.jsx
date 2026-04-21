import { useState, useEffect } from 'react';
import { sfx, injectCSS } from './sfx.js';

const CSS = `
@keyframes wc-vapor { 0%{transform:translateY(0);opacity:0.7}100%{transform:translateY(-60px);opacity:0} }
@keyframes wc-drip  { 0%{transform:translateY(-20px);opacity:0}20%{opacity:1}100%{transform:translateY(100px);opacity:0} }
@keyframes wc-wave  { 0%,100%{d:path("M0,10 Q50,0 100,10 Q150,20 200,10 L200,30 L0,30 Z")}50%{d:path("M0,10 Q50,20 100,10 Q150,0 200,10 L200,30 L0,30 Z")} }
@keyframes wc-sunray{ 0%,100%{opacity:0.6;transform:scaleY(1)}50%{opacity:1;transform:scaleY(1.15)} }
@keyframes wc-cloud { 0%,100%{transform:translateX(0)}50%{transform:translateX(8px)} }
`;

const STAGES = [
  { label:"The sun heats the water. Tap to watch!", bg:'linear-gradient(180deg,#87CEEB 0%,#B0E2FF 60%,#1E90FF 100%)' },
  { label:"Warm water rises as vapor! Tap again!", bg:'linear-gradient(180deg,#87CEEB 0%,#C8E6FF 60%,#5BA8E5 100%)' },
  { label:"Vapor makes a big cloud! Tap for rain!", bg:'linear-gradient(180deg,#9E9E9E 0%,#BDBDBD 50%,#4682B4 100%)' },
  { label:"Rain falls back down! 🌧️ Great job!", bg:'linear-gradient(180deg,#7B8794 0%,#A0AEC0 50%,#2C6694 100%)' },
];

export default function WaterCycle({ onTap }) {
  useEffect(() => injectCSS('ls-wc', CSS), []);
  const [stage, setStage] = useState(0);

  function tap() {
    if (stage === 0 || stage === 2) sfx.whoosh();
    if (stage === 3) sfx.drip();
    else sfx.chime();
    onTap();
    setStage(s => Math.min(s+1,3));
  }

  return (
    <div onClick={tap} style={{ width:'100%', height:260, background:STAGES[stage].bg, borderRadius:20, position:'relative', overflow:'hidden', cursor:'pointer', transition:'background 0.8s ease' }}>
      <svg width="100%" height="260" viewBox="0 0 400 260" style={{ position:'absolute', inset:0 }}>

        {/* Sun */}
        <g transform="translate(60,55)">
          <circle r="32" fill="#FCD34D" style={{ filter:'drop-shadow(0 0 16px rgba(252,211,77,0.8))' }}/>
          {stage === 0 && Array.from({length:8}).map((_,i) => {
            const a = i*45*Math.PI/180;
            return <line key={i} x1={Math.cos(a)*36} y1={Math.sin(a)*36} x2={Math.cos(a)*50} y2={Math.sin(a)*50}
              stroke="#F59E0B" strokeWidth="3" strokeLinecap="round"
              style={{ transformOrigin:'0 0', animation:`wc-sunray 1.5s ease-in-out ${i*0.18}s infinite` }}/>;
          })}
        </g>

        {/* Stage 0: water body */}
        {stage === 0 && (
          <g transform="translate(80,215)">
            <path d="M0,10 Q50,0 100,10 Q150,20 200,10 L200,30 L0,30 Z" fill="#1E90FF" opacity="0.8"/>
            <path d="M0,15 Q50,5 100,15 Q150,25 200,15" stroke="white" strokeWidth="2" fill="none" opacity="0.4"/>
          </g>
        )}

        {/* Stage 1: vapor rising */}
        {stage >= 1 && stage <= 2 && (
          [100,155,200,250,300].map((x,i) => (
            <ellipse key={i} cx={x} cy={230} rx="6" ry="18" fill="white" opacity="0.4"
              style={{ animation:`wc-vapor 1.8s ease-out ${i*0.3}s infinite` }}/>
          ))
        )}

        {/* Stage 2+: cloud */}
        {stage >= 2 && (
          <g transform="translate(200,75)" style={{ animation:'wc-cloud 3s ease-in-out infinite' }}>
            <ellipse cx="0" cy="0" rx="70" ry="40" fill={stage===3?'#6B7280':'#E0E0E0'}/>
            <ellipse cx="-45" cy="10" rx="42" ry="30" fill={stage===3?'#7B8794':'#F0F0F0'}/>
            <ellipse cx="45" cy="10" rx="42" ry="30" fill={stage===3?'#7B8794':'#F0F0F0'}/>
            <ellipse cx="0" cy="20" rx="55" ry="22" fill={stage===3?'#8896A4':'#E8E8E8'}/>
          </g>
        )}

        {/* Stage 3: rain */}
        {stage >= 3 && (
          [150,175,200,225,250,170,215].map((x,i) => (
            <line key={i} x1={x} y1={130} x2={x-8} y2={165} stroke="#60A5FA" strokeWidth="2.5" strokeLinecap="round"
              style={{ animation:`wc-drip 1.2s ease-in ${i*0.17}s infinite` }}/>
          ))
        )}

        {/* Stage 3: puddle */}
        {stage >= 3 && (
          <ellipse cx="200" cy="245" rx="90" ry="12" fill="#1E90FF" opacity="0.5"/>
        )}
      </svg>

      <div style={{ position:'absolute', bottom:12, left:0, right:0, textAlign:'center', background:'rgba(0,0,0,0.25)', padding:'6px 0', color:'white', fontWeight:700, fontSize:'0.85rem' }}>
        {STAGES[stage].label}
      </div>
    </div>
  );
}
