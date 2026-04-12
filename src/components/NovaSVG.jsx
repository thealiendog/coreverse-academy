// Animated SVG owl character — Nova

// 8-pointed sparkle star, centered at local origin (0,0)
function Sparkle({ cx, cy, r, animDelay, burstDelay, celebrating }) {
  const anim = celebrating
    ? `nova-star-burst 0.95s ease-out ${burstDelay}s both`
    : `nova-twinkle ${1.8 + animDelay * 0.85}s ease-in-out ${animDelay * 0.35}s infinite`;

  return (
    <g transform={`translate(${cx},${cy})`}>
      <g style={{ animation: anim, transformOrigin: '0px 0px' }}>
        <line x1={-r}      y1={0}       x2={r}       y2={0}      stroke="#A78BFA" strokeWidth={r * 0.55} strokeLinecap="round" />
        <line x1={0}       y1={-r}      x2={0}       y2={r}      stroke="#A78BFA" strokeWidth={r * 0.55} strokeLinecap="round" />
        <line x1={-r*0.7}  y1={-r*0.7}  x2={r*0.7}   y2={r*0.7}  stroke="#A78BFA" strokeWidth={r * 0.3}  strokeLinecap="round" />
        <line x1={r*0.7}   y1={-r*0.7}  x2={-r*0.7}  y2={r*0.7}  stroke="#A78BFA" strokeWidth={r * 0.3}  strokeLinecap="round" />
      </g>
    </g>
  );
}

export default function NovaSVG({ state = 'idle', size = 180 }) {
  const speaking    = state === 'speaking';
  const listening   = state === 'listening';
  const thinking    = state === 'thinking';
  const celebrating = state === 'celebrating';

  // Pupil position shifts per state
  const pupilDx = thinking ? -2.5 : listening ? 1.5 : 0;
  const pupilDy = thinking ? -3.5 : 0;

  // Head tilt degrees (rotates around neck point)
  const headTilt   = listening ? -14 : thinking ? 7 : 0;
  const headOrigin = '100px 124px';

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 210"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ overflow: 'visible' }}
    >
      <defs>
        <radialGradient id="ng-body" cx="38%" cy="28%" r="65%">
          <stop offset="0%"   stopColor="#3b1fa8" />
          <stop offset="100%" stopColor="#0f0521" />
        </radialGradient>
        <radialGradient id="ng-head" cx="38%" cy="26%" r="65%">
          <stop offset="0%"   stopColor="#2a1275" />
          <stop offset="100%" stopColor="#0d0520" />
        </radialGradient>
        <radialGradient id="ng-belly" cx="35%" cy="22%" r="70%">
          <stop offset="0%"   stopColor="#4c28c4" />
          <stop offset="100%" stopColor="#1a0960" />
        </radialGradient>
        <radialGradient id="ng-iris" cx="28%" cy="22%" r="70%">
          <stop offset="0%"   stopColor="#9f67ff" />
          <stop offset="100%" stopColor="#5b21b6" />
        </radialGradient>
        <filter id="ng-glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
      </defs>

      {/* ── Background sparkles ─────────────────────────── */}
      <Sparkle cx={20}  cy={38}  r={3}   animDelay={0}   burstDelay={0}    celebrating={celebrating} />
      <Sparkle cx={174} cy={26}  r={2.5} animDelay={0.4} burstDelay={0.05} celebrating={celebrating} />
      <Sparkle cx={12}  cy={115} r={2}   animDelay={0.8} burstDelay={0.12} celebrating={celebrating} />
      <Sparkle cx={184} cy={96}  r={2.5} animDelay={0.2} burstDelay={0.08} celebrating={celebrating} />
      <Sparkle cx={180} cy={172} r={2}   animDelay={1.1} burstDelay={0.18} celebrating={celebrating} />
      <Sparkle cx={16}  cy={166} r={2.5} animDelay={0.6} burstDelay={0.15} celebrating={celebrating} />
      <Sparkle cx={100} cy={10}  r={3}   animDelay={1.3} burstDelay={0.22} celebrating={celebrating} />
      <Sparkle cx={156} cy={184} r={2}   animDelay={0.9} burstDelay={0.10} celebrating={celebrating} />
      <Sparkle cx={44}  cy={194} r={1.8} animDelay={1.5} burstDelay={0.25} celebrating={celebrating} />

      {/* ── Whole-owl celebrate wrapper ─────────────────── */}
      <g className={celebrating ? 'nova-celebrate' : ''} style={{ transformOrigin: '100px 170px' }}>

        {/* ── Left wing ──────────────────────────────────── */}
        <g
          className={speaking ? 'nova-wing-left' : ''}
          style={{ transformOrigin: '63px 144px' }}
        >
          <path d="M 62,130 C 26,112 15,152 24,177 C 33,198 65,186 65,164 Z" fill="url(#ng-body)" />
          {/* Feather detail lines */}
          <path d="M 36,157 C 30,148 26,161 32,172" stroke="#A78BFA" strokeWidth="1.1" opacity="0.3" />
          <path d="M 50,153 C 44,144 40,157 46,168" stroke="#A78BFA" strokeWidth="1.1" opacity="0.3" />
        </g>

        {/* ── Right wing ─────────────────────────────────── */}
        <g
          className={speaking ? 'nova-wing-right' : ''}
          style={{ transformOrigin: '137px 144px' }}
        >
          <path d="M 138,130 C 174,112 185,152 176,177 C 167,198 135,186 135,164 Z" fill="url(#ng-body)" />
          <path d="M 164,157 C 170,148 174,161 168,172" stroke="#A78BFA" strokeWidth="1.1" opacity="0.3" />
          <path d="M 150,153 C 156,144 160,157 154,168" stroke="#A78BFA" strokeWidth="1.1" opacity="0.3" />
        </g>

        {/* ── Body (bobs when speaking) ──────────────────── */}
        <g
          className={speaking ? 'nova-char-bob' : ''}
          style={{ transformOrigin: '100px 158px' }}
        >
          <ellipse cx="100" cy="158" rx="47" ry="51" fill="url(#ng-body)" />
          {/* Belly */}
          <ellipse cx="100" cy="165" rx="30" ry="35" fill="url(#ng-belly)" />
          {/* Belly arc texture */}
          <ellipse cx="100" cy="163" rx="20" ry="22" fill="none" stroke="#A78BFA" strokeWidth="0.7" opacity="0.22" />
          <ellipse cx="100" cy="163" rx="12" ry="13" fill="none" stroke="#A78BFA" strokeWidth="0.7" opacity="0.16" />
          {/* Feet */}
          <path d="M 85,202 L 76,210 M 85,202 L 85,210 M 85,202 L 94,210"
            stroke="#F59E0B" strokeWidth="2.2" strokeLinecap="round" />
          <path d="M 115,202 L 106,210 M 115,202 L 115,210 M 115,202 L 124,210"
            stroke="#F59E0B" strokeWidth="2.2" strokeLinecap="round" />
        </g>

        {/* ── Head group (tilts for listening / thinking) ── */}
        <g
          style={{
            transform:       `rotate(${headTilt}deg)`,
            transformOrigin: headOrigin,
            transition:      'transform 0.5s cubic-bezier(0.34,1.56,0.64,1)',
          }}
        >
          {/* Left ear tuft — perks up when listening */}
          <g
            style={{
              transformOrigin: '71px 57px',
              transform:       listening ? 'rotate(-10deg) scaleY(1.2)' : 'rotate(0deg) scaleY(1)',
              transition:      'transform 0.5s cubic-bezier(0.34,1.56,0.64,1)',
            }}
          >
            <path d="M 68,57 L 59,24 L 82,55 Z" fill="#3b1fa8" />
            <path d="M 69,57 L 62,28 L 79,55 Z" fill="#4c28c4" opacity="0.6" />
          </g>

          {/* Right ear tuft */}
          <path d="M 132,57 L 141,24 L 118,55 Z" fill="#3b1fa8" />
          <path d="M 131,57 L 138,28 L 121,55 Z" fill="#4c28c4" opacity="0.6" />

          {/* Head */}
          <circle cx="100" cy="88" r="51" fill="url(#ng-head)" />

          {/* Facial disc — soft inner lighter ring */}
          <ellipse cx="100" cy="93" rx="36" ry="33" fill="#1a0c52" opacity="0.5" />

          {/* ── Left eye ─────────────────────── */}
          <circle cx="80" cy="83" r="17" fill="#f0ebff" />
          <circle cx="80" cy="83" r="12" fill="url(#ng-iris)" />
          {/* Pupil group — translates per state */}
          <g style={{
            transform: `translate(${pupilDx}px,${pupilDy}px)`,
            transformOrigin: '80px 83px',
            transition: 'transform 0.4s cubic-bezier(0.34,1.2,0.64,1)',
          }}>
            <circle cx="80" cy="83" r="7"   fill="#0c0520" />
            <circle cx="76" cy="79" r="2.8" fill="white" opacity="0.9" />
            <circle cx="83" cy="86" r="1.3" fill="white" opacity="0.5" />
          </g>
          {/* Eyelid */}
          <ellipse cx="80" cy="83" rx="17" ry="17"
            fill="#0d0520"
            className="nova-eyelid"
            style={{ transformOrigin: '80px 83px' }}
          />

          {/* ── Right eye ────────────────────── */}
          <circle cx="120" cy="83" r="17" fill="#f0ebff" />
          <circle cx="120" cy="83" r="12" fill="url(#ng-iris)" />
          <g style={{
            transform: `translate(${pupilDx}px,${pupilDy}px)`,
            transformOrigin: '120px 83px',
            transition: 'transform 0.4s cubic-bezier(0.34,1.2,0.64,1)',
          }}>
            <circle cx="120" cy="83" r="7"   fill="#0c0520" />
            <circle cx="116" cy="79" r="2.8" fill="white" opacity="0.9" />
            <circle cx="123" cy="86" r="1.3" fill="white" opacity="0.5" />
          </g>
          {/* Eyelid */}
          <ellipse cx="120" cy="83" rx="17" ry="17"
            fill="#0d0520"
            className="nova-eyelid nova-eyelid-r"
            style={{ transformOrigin: '120px 83px' }}
          />

          {/* ── Beak ──────────────────────────── */}
          {/* Upper beak — fixed */}
          <path d="M 93,106 L 100,101 L 107,106 Z" fill="#F59E0B" />
          {/* Lower beak — drops down when speaking */}
          <path
            d="M 93,106 L 100,112 L 107,106 Z"
            fill="#D97706"
            className={speaking ? 'nova-beak-talk' : ''}
            style={{ transformOrigin: '100px 106px' }}
          />

          {/* ── Thinking "..." dots ───────────── */}
          {thinking && (
            <>
              <circle cx="84"  cy="43" r="3.2" fill="#A78BFA"
                className="nova-dot-1" style={{ transformOrigin: '84px 43px' }} />
              <circle cx="100" cy="36" r="3.2" fill="#A78BFA"
                className="nova-dot-2" style={{ transformOrigin: '100px 36px' }} />
              <circle cx="116" cy="43" r="3.2" fill="#A78BFA"
                className="nova-dot-3" style={{ transformOrigin: '116px 43px' }} />
            </>
          )}
        </g>

        {/* ── Celebrating extra burst sparkles ─────────── */}
        {celebrating && (
          <>
            <Sparkle cx={62}  cy={58}  r={4.5} animDelay={0} burstDelay={0.08} celebrating />
            <Sparkle cx={138} cy={52}  r={4.5} animDelay={0} burstDelay={0.02} celebrating />
            <Sparkle cx={48}  cy={125} r={4}   animDelay={0} burstDelay={0.18} celebrating />
            <Sparkle cx={152} cy={118} r={4}   animDelay={0} burstDelay={0.14} celebrating />
            <Sparkle cx={100} cy={28}  r={5}   animDelay={0} burstDelay={0.04} celebrating />
          </>
        )}
      </g>
    </svg>
  );
}
