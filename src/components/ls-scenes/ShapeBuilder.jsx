import { useState, useEffect } from 'react';
import { sfx, injectCSS } from './sfx.js';

const CSS = `@keyframes sb-pop { 0%{transform:scale(0) rotate(-20deg);opacity:0}70%{transform:scale(1.2) rotate(5deg)}100%{transform:scale(1) rotate(0deg);opacity:1} }`;

const COLORS = ['#EF4444','#F59E0B','#22C55E','#3B82F6','#A855F7','#EC4899','#06B6D4','#F97316'];
const SHAPE_TYPES = ['circle','square','triangle'];

export default function ShapeBuilder({ onTap }) {
  useEffect(() => injectCSS('ls-sb', CSS), []);
  const [shapes, setShapes] = useState([]);
  const [selectedShape, setSelectedShape] = useState(0);
  let colorIdx = 0;

  function placeShape(e) {
    if (e.target.dataset.toolbar) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 400;
    const y = Math.max(50, Math.min(((e.clientY - rect.top) / rect.height) * 260, 220));
    const c = COLORS[(shapes.length) % COLORS.length];
    const type = SHAPE_TYPES[selectedShape];
    sfx.pop();
    onTap();
    setShapes(s => [...s.slice(-24), { id: Date.now(), x, y, type, c }]);
  }

  function renderShape(s) {
    const sz = 30;
    if (s.type === 'circle') return <circle key={s.id} cx={s.x} cy={s.y} r={sz} fill={s.c} opacity="0.85" style={{ animation:'sb-pop 0.4s cubic-bezier(0.16,1,0.3,1) both' }}/>;
    if (s.type === 'square') return <rect key={s.id} x={s.x-sz} y={s.y-sz} width={sz*2} height={sz*2} rx="6" fill={s.c} opacity="0.85" style={{ animation:'sb-pop 0.4s cubic-bezier(0.16,1,0.3,1) both' }}/>;
    if (s.type === 'triangle') return <polygon key={s.id} points={`${s.x},${s.y-sz} ${s.x-sz*1.1},${s.y+sz*0.7} ${s.x+sz*1.1},${s.y+sz*0.7}`} fill={s.c} opacity="0.85" style={{ animation:'sb-pop 0.4s cubic-bezier(0.16,1,0.3,1) both' }}/>;
  }

  return (
    <div onClick={placeShape} style={{ width:'100%', height:260, background:'linear-gradient(135deg,#f0f4ff,#e8f5e9)', borderRadius:20, position:'relative', overflow:'hidden', cursor:'crosshair' }}>
      <svg width="100%" height="260" viewBox="0 0 400 260" style={{ position:'absolute', inset:0 }}>
        {shapes.map(s => renderShape(s))}
      </svg>

      {/* Toolbar */}
      <div data-toolbar="1" style={{ position:'absolute', top:10, left:'50%', transform:'translateX(-50%)', display:'flex', gap:8, background:'rgba(255,255,255,0.90)', borderRadius:20, padding:'6px 12px', boxShadow:'0 2px 12px rgba(0,0,0,0.12)', cursor:'default' }}>
        {SHAPE_TYPES.map((t,i) => (
          <button key={t} data-toolbar="1" onClick={e => { e.stopPropagation(); setSelectedShape(i); }}
            style={{ width:40, height:40, borderRadius:10, border: selectedShape===i?'2.5px solid #7C3AED':'2px solid rgba(0,0,0,0.08)', background: selectedShape===i?'rgba(124,58,237,0.12)':'white', cursor:'pointer', display:'flex', alignItems:'center', justifyContent:'center' }}>
            <svg width="22" height="22" viewBox="0 0 22 22">
              {t==='circle' && <circle cx="11" cy="11" r="9" fill={selectedShape===i?'#7C3AED':'#6B7280'}/>}
              {t==='square' && <rect x="2" y="2" width="18" height="18" rx="2" fill={selectedShape===i?'#7C3AED':'#6B7280'}/>}
              {t==='triangle' && <polygon points="11,2 21,20 1,20" fill={selectedShape===i?'#7C3AED':'#6B7280'}/>}
            </svg>
          </button>
        ))}
      </div>

      {shapes.length === 0 && (
        <div style={{ position:'absolute', top:'50%', left:'50%', transform:'translate(-50%,-50%)', textAlign:'center', color:'rgba(0,0,0,0.35)', fontWeight:600, fontSize:'0.9rem', pointerEvents:'none' }}>
          Tap to place shapes!
        </div>
      )}
    </div>
  );
}
