// ExplorerWelcomeScreen — Phase 1: guide greets the child
// DAY 2.8: Pre-reader UI — visual play button + ambient particles.
// No text prompts before first tap. Full-screen tap target. iOS gesture-safe.
import { useState, useEffect } from 'react';

// Ambient floating particles — deterministic so they never re-generate on re-render
const PARTICLES = Array.from({ length: 18 }, (_, i) => ({
  id:    i,
  left:  `${5 + (i * 5.3) % 90}%`,
  size:  4 + (i * 3) % 9,
  dur:   4.5 + (i * 0.8) % 5,
  delay: (i * 0.45) % 5,
}));

function renderKaraokeText(text, karaokeWords, karaokeIdx, accent) {
  if (!karaokeWords?.length || !text) {
    return <span style={{ color: 'rgba(255,255,255,0.88)' }}>{text}</span>;
  }
  const chunks = text.split(/(\s+)/);
  let wordCount = 0;
  return chunks.map((chunk, i) => {
    if (!chunk || /^\s+$/.test(chunk)) return <span key={i}>{chunk}</span>;
    const idx = wordCount++;
    const active = idx === karaokeIdx;
    return (
      <span key={i} style={{
        color:      active ? accent : 'rgba(255,255,255,0.88)',
        textShadow: active ? `0 0 14px ${accent}99` : 'none',
        fontWeight: active ? 700 : 'inherit',
        transition: 'color 0.08s ease, text-shadow 0.08s ease',
      }}>
        {chunk}
      </span>
    );
  });
}

export default function ExplorerWelcomeScreen({
  screen, guideAvatar, speaking, loadingAudio, karaokeWords, karaokeIdx, accent, onReplay, childName,
  welcomeReady, onWelcomeTap,
}) {
  const displayText = (screen.guideText || '').replace(/\{name\}/g, childName || 'friend');

  const [hasPlayed,      setHasPlayed]      = useState(false);
  const [showParentCard, setShowParentCard] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem('explorer_first_lesson_seen')) {
        setShowParentCard(true);
        console.log('[WELCOME] First-ever lesson — showing parent onboarding card');
      }
    } catch { /* localStorage unavailable */ }
    console.log('[WELCOME] Pre-reader UI rendered, awaiting tap');
  }, []);

  const handleTap = () => {
    if (hasPlayed || showParentCard) return;
    setHasPlayed(true);
    console.log('[WELCOME] Tap registered, Sage audio starting');
    onWelcomeTap?.();
  };

  const dismissParentCard = () => {
    try { localStorage.setItem('explorer_first_lesson_seen', 'true'); } catch {}
    setShowParentCard(false);
  };

  // Visual state flags
  const showLoading  = !hasPlayed && !speaking && !welcomeReady; // prewarm in-flight
  const showPlayBtn  = !hasPlayed && !speaking && welcomeReady;
  const showBubble   = speaking || (hasPlayed && !speaking);
  const showContinue = hasPlayed && !speaking && !loadingAudio;
  console.log(`[DIAG-WS] state: hasPlayed=${hasPlayed} speaking=${speaking} welcomeReady=${welcomeReady} loadingAudio=${loadingAudio} showLoading=${showLoading} showPlayBtn=${showPlayBtn}`);

  return (
    <div
      role="button"
      aria-label="Start lesson — tap anywhere to begin"
      onClick={handleTap}
      style={{
        position:        'relative',
        height:          '100%',
        display:         'flex',
        flexDirection:   'column',
        alignItems:      'center',
        justifyContent:  'center',
        padding:         '24px 20px',
        gap:             24,
        overflowY:       'auto',
        cursor:          !hasPlayed && !showParentCard ? 'pointer' : 'default',
        WebkitUserSelect:'none',
        userSelect:      'none',
      }}
    >
      <style>{`
        @keyframes wc-breathe {
          0%, 100% { transform: scale(1); }
          50%       { transform: scale(1.05); }
        }
        @keyframes wc-dot-pulse {
          0%, 80%, 100% { opacity: 0.2; transform: scale(0.8); }
          40%            { opacity: 1;   transform: scale(1);   }
        }
        @keyframes wc-ripple {
          0%   { transform: scale(1);   opacity: 0.65; }
          100% { transform: scale(1.9); opacity: 0; }
        }
        @keyframes wc-float {
          0%   { transform: translateY(0px)   scale(1);   opacity: 0.45; }
          65%  { opacity: 0.75; }
          100% { transform: translateY(-70px) scale(0.5); opacity: 0; }
        }
        @keyframes wc-fade-in {
          from { opacity: 0; transform: scale(0.92); }
          to   { opacity: 1; transform: scale(1); }
        }
        @keyframes wc-card-in {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        /* Play button size — 80px mobile, 100px iPad+ */
        .wc-play-circle { width: 80px; height: 80px; border-radius: 50%; }
        .wc-ripple-ring { width: 80px; height: 80px; border-radius: 50%; }
        @media (min-width: 768px) {
          .wc-play-circle { width: 100px; height: 100px; }
          .wc-ripple-ring { width: 100px; height: 100px; }
        }
      `}</style>

      {/* Ambient floating particles */}
      <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
        {PARTICLES.map(p => (
          <div key={p.id} style={{
            position:     'absolute',
            bottom:       -12,
            left:         p.left,
            width:        p.size,
            height:       p.size,
            borderRadius: '50%',
            background:   accent,
            boxShadow:    `0 0 ${p.size * 2}px ${accent}99`,
            animation:    `wc-float ${p.dur}s ${p.delay}s ease-in-out infinite`,
          }} />
        ))}
      </div>

      {/* Sage avatar — breathing pulse before tap, speaking ring during audio */}
      <div style={{
        position:  'relative',
        flexShrink: 0,
        animation: showPlayBtn ? 'wc-breathe 2s ease-in-out infinite' : 'none',
      }}>
        {/* Speaking / loading ring */}
        {(speaking || loadingAudio) && (
          <div style={{
            position:     'absolute',
            inset:        -8,
            borderRadius: '50%',
            border:       `3px solid ${accent}`,
            animation:    loadingAudio
              ? 'ex-ring 0.7s ease-in-out infinite'
              : 'ex-ring 1.3s ease-in-out infinite',
            pointerEvents: 'none',
            boxShadow:    `0 0 20px ${accent}55`,
          }} />
        )}
        <div style={{
          width:        120,
          height:       120,
          borderRadius: '50%',
          overflow:     'hidden',
          border:       `3px solid ${speaking ? accent : accent + '55'}`,
          boxShadow:    speaking
            ? `0 0 32px ${accent}55`
            : showPlayBtn
              ? `0 0 24px ${accent}44`
              : `0 0 8px ${accent}22`,
          transition:   'border-color 0.3s, box-shadow 0.3s',
        }}>
          <img
            src={guideAvatar?.image || '/avatars/sage.png'}
            alt={guideAvatar?.name || 'Guide'}
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />
        </div>
      </div>

      {/* LOADING STATE — shown while prewarm is in-flight, before play button appears */}
      {showLoading && (
        <div style={{
          display:       'flex',
          flexDirection: 'column',
          alignItems:    'center',
          gap:           10,
          animation:     'wc-fade-in 0.5s ease both',
        }}>
          {/* Three-dot pulse — cosmetically matches the dark/cosmic aesthetic */}
          <div style={{ display: 'flex', gap: 6 }}>
            {[0, 1, 2].map(i => (
              <div key={i} style={{
                width:        8,
                height:       8,
                borderRadius: '50%',
                background:   accent,
                animation:    `wc-dot-pulse 1.4s ${i * 0.22}s ease-in-out infinite`,
              }} />
            ))}
          </div>
          <div style={{
            color:       `${accent}88`,
            fontSize:    '0.75rem',
            fontWeight:  600,
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
          }}>
            Preparing…
          </div>
        </div>
      )}

      {/* PRE-READER PLAY BUTTON — visible when prewarm ready, hidden after tap */}
      {showPlayBtn && (
        <div style={{
          display:       'flex',
          flexDirection: 'column',
          alignItems:    'center',
          gap:           12,
          animation:     'wc-fade-in 0.5s ease both',
        }}>
          {/* Speaker icon — reinforces "this plays sound" */}
          <div style={{ fontSize: '1.4rem', opacity: 0.65, lineHeight: 1 }}>🔊</div>

          {/* Play button with expanding ripple ring */}
          <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            {/* Ripple — expands + fades on loop */}
            <div className="wc-ripple-ring" style={{
              position:  'absolute',
              border:    `3px solid ${accent}`,
              animation: 'wc-ripple 1.8s ease-out infinite',
              pointerEvents: 'none',
            }} />
            {/* Play circle — breathes in sync with avatar */}
            <div className="wc-play-circle" style={{
              background:     accent,
              display:        'flex',
              alignItems:     'center',
              justifyContent: 'center',
              animation:      'wc-breathe 2s ease-in-out infinite',
              boxShadow:      `0 8px 32px ${accent}66`,
            }}>
              {/* CSS triangle — play symbol */}
              <div style={{
                width:        0,
                height:       0,
                borderTop:    '13px solid transparent',
                borderBottom: '13px solid transparent',
                borderLeft:   '20px solid #000',
                marginLeft:   5, // optical centering inside circle
              }} />
            </div>
          </div>
        </div>
      )}

      {/* Guide name — fades in when Sage starts speaking */}
      {(speaking || showContinue) && (
        <div style={{ textAlign: 'center', animation: 'wc-fade-in 0.4s ease both' }}>
          <div style={{ color: accent, fontSize: '0.85rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 4 }}>
            Your Guide
          </div>
          <div style={{ color: 'rgba(255,255,255,0.95)', fontSize: '1.5rem', fontWeight: 800 }}>
            {guideAvatar?.name || 'your guide'}
          </div>
        </div>
      )}

      {/* Speech bubble with karaoke — shown while speaking and after */}
      {showBubble && (
        <div style={{
          background:   'rgba(255,255,255,0.07)',
          border:       `1.5px solid ${accent}33`,
          borderRadius: 18,
          padding:      '20px 22px',
          maxWidth:     380,
          width:        '100%',
          fontSize:     '1.05rem',
          lineHeight:   1.7,
          position:     'relative',
          animation:    'wc-fade-in 0.4s ease both',
        }}>
          {/* Bubble arrow pointing up toward avatar */}
          <div style={{
            position:    'absolute',
            top:         -10,
            left:        '50%',
            transform:   'translateX(-50%)',
            width:       0,
            height:      0,
            borderLeft:  '10px solid transparent',
            borderRight: '10px solid transparent',
            borderBottom:`10px solid ${accent}33`,
          }} />
          {renderKaraokeText(displayText, karaokeWords, karaokeIdx, accent)}
        </div>
      )}

      {/* "Tap › to continue" — only shown after audio has fully finished */}
      {showContinue && (
        <div style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.8rem', letterSpacing: '0.05em' }}>
          Tap › to continue
        </div>
      )}

      {/* Parent onboarding card — one-time overlay on first-ever lesson */}
      {showParentCard && (
        <div
          style={{
            position:        'absolute',
            inset:           0,
            background:      'rgba(0,0,0,0.82)',
            display:         'flex',
            alignItems:      'center',
            justifyContent:  'center',
            padding:         '24px',
            zIndex:          50,
          }}
          onClick={e => e.stopPropagation()} // prevent tap-through to handleTap
        >
          <div style={{
            background:    '#1e293b',
            border:        '1.5px solid rgba(255,255,255,0.12)',
            borderRadius:  20,
            padding:       '28px 24px',
            maxWidth:      340,
            width:         '100%',
            display:       'flex',
            flexDirection: 'column',
            gap:           16,
            animation:     'wc-card-in 0.35s ease both',
          }}>
            <div style={{ fontSize: '2rem', textAlign: 'center' }}>👋</div>
            <div style={{ color: 'rgba(255,255,255,0.95)', fontSize: '1rem', fontWeight: 700, textAlign: 'center', lineHeight: 1.4 }}>
              A note for parents
            </div>
            <div style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.9rem', lineHeight: 1.65, textAlign: 'center' }}>
              Tap anywhere to start. You'll need to do this once each lesson — it's how your guide's voice wakes up on your device.
            </div>
            <button
              onClick={dismissParentCard}
              style={{
                height:       52,
                background:   accent,
                color:        '#000',
                border:       'none',
                borderRadius: 14,
                fontSize:     '1rem',
                fontWeight:   800,
                cursor:       'pointer',
                touchAction:  'manipulation',
              }}
            >
              Got it!
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
