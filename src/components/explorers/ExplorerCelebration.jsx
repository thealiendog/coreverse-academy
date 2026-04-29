// ExplorerCelebration — Phase 6: XP, badge, confetti, return home
import { useEffect, useRef } from 'react';

export default function ExplorerCelebration({
  screen, guideAvatar, accent, karaokeWords, karaokeIdx, onComplete,
  lessonTitle, subjectId,
}) {
  const { xpEarned = 50, badgeName = 'Explorer', message = 'Amazing work!' } = screen;
  const saved = useRef(false);

  // Save XP + badge to localStorage once
  useEffect(() => {
    if (saved.current) return;
    saved.current = true;
    try {
      const xp = parseInt(localStorage.getItem('explorer_total_xp') || '0', 10);
      localStorage.setItem('explorer_total_xp', String(xp + xpEarned));
      const badges = JSON.parse(localStorage.getItem('explorer_badges') || '[]');
      if (!badges.includes(screen.badge)) badges.push(screen.badge);
      localStorage.setItem('explorer_badges', JSON.stringify(badges));
    } catch { /* localStorage unavailable */ }
  }, []);

  return (
    <div style={{
      height:         '100%',
      display:        'flex',
      flexDirection:  'column',
      alignItems:     'center',
      justifyContent: 'center',
      padding:        '24px 20px',
      gap:            20,
      overflowY:      'auto',
      textAlign:      'center',
    }}>
      <style>{`
        @keyframes xp-pop   { 0%{transform:scale(0.4);opacity:0} 60%{transform:scale(1.2);opacity:1} 100%{transform:scale(1);opacity:1} }
        @keyframes badge-in { 0%{transform:rotate(-12deg) scale(0.4);opacity:0} 70%{transform:rotate(4deg) scale(1.05)} 100%{transform:rotate(0) scale(1);opacity:1} }
        @keyframes confetti-fall { 0%{transform:translateY(-20px) rotate(0deg);opacity:1} 100%{transform:translateY(60px) rotate(360deg);opacity:0} }
      `}</style>

      {/* Confetti burst */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 200, overflow: 'hidden', pointerEvents: 'none' }}>
        {['#34D399','#60A5FA','#F59E0B','#EC4899','#A78BFA'].map((color, i) =>
          Array.from({ length: 5 }).map((_, j) => (
            <div key={`${i}-${j}`} style={{
              position:   'absolute',
              left:       `${(i * 20 + j * 4 + 2)}%`,
              top:        -10,
              width:      8,
              height:     8,
              borderRadius: j % 2 === 0 ? '50%' : 2,
              background: color,
              animation:  `confetti-fall ${1 + j * 0.2}s ${i * 0.15 + j * 0.08}s ease-in both`,
            }} />
          ))
        )}
      </div>

      {/* Badge */}
      <div style={{
        fontSize:  '5rem',
        animation: 'badge-in 0.6s 0.2s cubic-bezier(0.34,1.56,0.64,1) both',
      }}>
        🏅
      </div>

      {/* XP */}
      <div style={{
        fontSize:     '2.2rem',
        fontWeight:   800,
        color:        '#F59E0B',
        animation:    'xp-pop 0.5s 0.5s cubic-bezier(0.34,1.56,0.64,1) both',
        opacity:      0,
      }}>
        +{xpEarned} XP
      </div>

      {/* Badge name */}
      <div style={{
        background:   `${accent}22`,
        border:       `1.5px solid ${accent}55`,
        borderRadius: 30,
        padding:      '8px 20px',
        color:        accent,
        fontSize:     '0.9rem',
        fontWeight:   700,
        letterSpacing: '0.04em',
        animation:    'xp-pop 0.5s 0.7s cubic-bezier(0.34,1.56,0.64,1) both',
        opacity:      0,
      }}>
        🎖 {badgeName}
      </div>

      {/* Message */}
      <div style={{
        fontSize:   '1.1rem',
        color:      'rgba(255,255,255,0.88)',
        lineHeight: 1.6,
        maxWidth:   320,
        animation:  'xp-pop 0.4s 0.9s ease both',
        opacity:    0,
      }}>
        {message}
      </div>

      {/* Guide */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginTop: 4 }}>
        <img src={guideAvatar?.image || '/avatars/sage.png'} alt="" style={{ width: 44, height: 44, borderRadius: '50%', objectFit: 'cover', border: `2px solid ${accent}` }} />
        <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.85rem' }}>— {guideAvatar?.name || 'Sage'}</span>
      </div>
    </div>
  );
}
