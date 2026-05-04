// ExplorerCelebration — Phase 6: XP, badge, confetti, fanfare, return home
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function ExplorerCelebration({
  screen, guideAvatar, accent, subjectId, childName, lessonRecord,
}) {
  const { xpEarned = 50, badgeName = 'Explorer', message = 'Amazing work!' } = screen;
  const saved    = useRef(false);
  const navigate = useNavigate();
  const [showButtons, setShowButtons] = useState(false);

  // Resolve {name} in message
  const resolvedName    = childName || 'friend';
  const resolvedMessage = message.replace(/\{name\}/g, resolvedName);

  // Save XP + badge once; play fanfare; reveal buttons after animations settle
  useEffect(() => {
    if (saved.current) return;
    saved.current = true;

    // Real audio sample — plays immediately on mount.
    // AudioContext/autoplay is already authorized from the user's recent quiz-answer tap.
    const audio = new Audio('/sounds/lesson-complete.mp3');
    audio.volume = 0.7;
    audio.play().catch(err => console.error('[CELEBRATION] Audio play failed:', err));
    console.log('[CELEBRATION] Lesson complete — playing /sounds/lesson-complete.mp3');

    try {
      const xp = parseInt(localStorage.getItem('explorer_total_xp') || '0', 10);
      localStorage.setItem('explorer_total_xp', String(xp + xpEarned));
      const badges = JSON.parse(localStorage.getItem('explorer_badges') || '[]');
      if (!badges.includes(screen.badge)) badges.push(screen.badge);
      localStorage.setItem('explorer_badges', JSON.stringify(badges));
    } catch { /* localStorage unavailable */ }

    // Write full lesson progress record
    if (lessonRecord) {
      try {
        const completedAt      = Date.now();
        const totalTimeSeconds = Math.round((completedAt - (lessonRecord.startedAt || completedAt)) / 1000);
        const record = { ...lessonRecord, completedAt, totalTimeSeconds };
        const existing = JSON.parse(localStorage.getItem('coreverse_lesson_progress') || '[]');
        existing.push(record);
        localStorage.setItem('coreverse_lesson_progress', JSON.stringify(existing));
        console.log(`[LESSON-COMPLETE] Record written. firstTryAccuracy: ${(record.firstTryAccuracy || 0).toFixed(2)}, grade: ${record.letterGrade}, time: ${totalTimeSeconds}s`);
      } catch { /* localStorage unavailable */ }
    }

    // Reveal CTA buttons after all animations have played out
    const t = setTimeout(() => setShowButtons(true), 1400);
    return () => clearTimeout(t);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="celebration-wrap" style={{
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
        @keyframes btn-rise { from{opacity:0;transform:translateY(16px)} to{opacity:1;transform:translateY(0)} }
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
      <div style={{ fontSize: '5rem', animation: 'badge-in 0.6s 0.2s cubic-bezier(0.34,1.56,0.64,1) both' }}>
        🏅
      </div>

      {/* XP */}
      <div style={{ fontSize: '2.2rem', fontWeight: 800, color: '#F59E0B', animation: 'xp-pop 0.5s 0.5s cubic-bezier(0.34,1.56,0.64,1) both', opacity: 0 }}>
        +{xpEarned} XP
      </div>

      {/* Badge name */}
      <div style={{
        background: `${accent}22`, border: `1.5px solid ${accent}55`, borderRadius: 30,
        padding: '8px 20px', color: accent, fontSize: '0.9rem', fontWeight: 700,
        letterSpacing: '0.04em', animation: 'xp-pop 0.5s 0.7s cubic-bezier(0.34,1.56,0.64,1) both', opacity: 0,
      }}>
        🎖 {badgeName}
      </div>

      {/* Message — {name} replaced */}
      <div style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.88)', lineHeight: 1.6, maxWidth: 320, animation: 'xp-pop 0.4s 0.9s ease both', opacity: 0 }}>
        {resolvedMessage}
      </div>

      {/* Guide */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginTop: 4 }}>
        <img src={guideAvatar?.image || '/avatars/sage.png'} alt="" style={{ width: 44, height: 44, borderRadius: '50%', objectFit: 'cover', border: `2px solid ${accent}` }} />
        <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.85rem' }}>— {guideAvatar?.name || 'your guide'}</span>
      </div>

      {/* CTA buttons — appear after animations settle */}
      {showButtons && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12, width: '100%', maxWidth: 320, marginTop: 8, animation: 'btn-rise 0.4s ease both' }}>
          <button
            onClick={() => navigate(subjectId ? `/child/subject/${subjectId}` : '/child/dashboard')}
            style={{ height: 64, background: accent, color: '#000', border: 'none', borderRadius: 16, fontSize: '1.05rem', fontWeight: 800, cursor: 'pointer', touchAction: 'manipulation', letterSpacing: '-0.01em', boxShadow: `0 6px 24px ${accent}55` }}
          >
            Continue Exploring →
          </button>
          <button
            onClick={() => navigate('/child/dashboard')}
            style={{ height: 56, background: 'rgba(255,255,255,0.07)', color: 'rgba(255,255,255,0.7)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 14, fontSize: '0.95rem', fontWeight: 600, cursor: 'pointer', touchAction: 'manipulation' }}
          >
            Try Another Subject
          </button>
        </div>
      )}
    </div>
  );
}
