// Nova — animated mystical SVG owl character
// ViewBox: 240×240  |  Default render: 260px

// Tiny glowing cosmic dust particle
function Dust({ cx, cy, r = 1.5, delay, celebrating }) {
  const anim = celebrating
    ? `nova-star-burst 1s ease-out ${delay}s both`
    : `nova-twinkle ${1.6 + delay * 0.85}s ease-in-out ${delay * 0.3}s infinite`;
  return (
    <g transform={`translate(${cx},${cy})`}>
      <g style={{ animation: anim, transformOrigin: '0px 0px' }}>
        <circle cx="0" cy="0" r={r} fill="#A78BFA" filter="url(#ng-glow-sm)" />
        {r > 1.6 && <circle cx="0" cy="0" r={r * 0.42} fill="white" opacity="0.7" />}
      </g>
    </g>
  );
}

// 8-pointed sparkle star
function Sparkle({ cx, cy, r, delay, celebrating }) {
  const anim = celebrating
    ? `nova-star-burst 1s ease-out ${delay}s both`
    : `nova-twinkle ${2 + delay * 0.9}s ease-in-out ${delay * 0.4}s infinite`;
  return (
    <g transform={`translate(${cx},${cy})`}>
      <g style={{ animation: anim, transformOrigin: '0px 0px' }}>
        <line x1={-r} y1={0} x2={r} y2={0} stroke="#A78BFA" strokeWidth={r * 0.55} strokeLinecap="round" />
        <line x1={0} y1={-r} x2={0} y2={r} stroke="#A78BFA" strokeWidth={r * 0.55} strokeLinecap="round" />
        <line x1={-r*0.7} y1={-r*0.7} x2={r*0.7} y2={r*0.7} stroke="#A78BFA" strokeWidth={r * 0.3} strokeLinecap="round" />
        <line x1={r*0.7} y1={-r*0.7} x2={-r*0.7} y2={r*0.7} stroke="#A78BFA" strokeWidth={r * 0.3} strokeLinecap="round" />
        <circle cx="0" cy="0" r={r * 0.28} fill="white" opacity="0.85" />
      </g>
    </g>
  );
}

export default function NovaSVG({ state = 'idle', size = 260 }) {
  const speaking    = state === 'speaking';
  const listening   = state === 'listening';
  const thinking    = state === 'thinking';
  const celebrating = state === 'celebrating';

  const pupilDx   = thinking ? -2.8 : listening ? 1.8 : 0;
  const pupilDy   = thinking ? -3.8 : 0;
  const headTilt  = listening ? -14  : thinking ? 7 : 0;
  const headSpring = 'transform 0.55s cubic-bezier(0.34,1.56,0.64,1)';

  return (
    <svg
      width={size} height={size}
      viewBox="0 0 240 240"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ overflow: 'visible' }}
    >
      <defs>
        {/* ── Gradients ──────────────────────────────────────── */}
        {/* Strong inner purple aura */}
        <radialGradient id="ng-aura" cx="50%" cy="40%" r="55%">
          <stop offset="0%"   stopColor="#7C3AED" stopOpacity="0" />
          <stop offset="32%"  stopColor="#7C3AED" stopOpacity="0.22" />
          <stop offset="58%"  stopColor="#A78BFA" stopOpacity="0.30" />
          <stop offset="80%"  stopColor="#4C1D95" stopOpacity="0.26" />
          <stop offset="92%"  stopColor="#7C3AED" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#F59E0B" stopOpacity="0.12" />
        </radialGradient>
        {/* Outer gold corona aura */}
        <radialGradient id="ng-aura-gold" cx="50%" cy="48%" r="50%">
          <stop offset="0%"   stopColor="#F59E0B" stopOpacity="0" />
          <stop offset="50%"  stopColor="#F59E0B" stopOpacity="0.04" />
          <stop offset="78%"  stopColor="#F59E0B" stopOpacity="0.13" />
          <stop offset="100%" stopColor="#FCD34D" stopOpacity="0.20" />
        </radialGradient>

        <radialGradient id="ng-body" cx="34%" cy="24%" r="72%">
          <stop offset="0%"   stopColor="#4C1D95" />
          <stop offset="42%"  stopColor="#3b1fa8" />
          <stop offset="75%"  stopColor="#1e0a52" />
          <stop offset="100%" stopColor="#0f0521" />
        </radialGradient>
        <linearGradient id="ng-body-sheen" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%"   stopColor="#7C3AED" stopOpacity="0.10" />
          <stop offset="48%"  stopColor="#6366f1" stopOpacity="0.05" />
          <stop offset="82%"  stopColor="#F59E0B" stopOpacity="0.05" />
          <stop offset="100%" stopColor="#A78BFA" stopOpacity="0.08" />
        </linearGradient>

        <radialGradient id="ng-head" cx="36%" cy="24%" r="68%">
          <stop offset="0%"   stopColor="#2e1275" />
          <stop offset="55%"  stopColor="#1a0852" />
          <stop offset="100%" stopColor="#0c0420" />
        </radialGradient>

        <radialGradient id="ng-belly" cx="32%" cy="20%" r="74%">
          <stop offset="0%"   stopColor="#5b28d4" />
          <stop offset="55%"  stopColor="#3b18a8" />
          <stop offset="100%" stopColor="#1a0960" />
        </radialGradient>

        <radialGradient id="ng-iris" cx="26%" cy="20%" r="74%">
          <stop offset="0%"   stopColor="#c4b5fd" />
          <stop offset="40%"  stopColor="#9f67ff" />
          <stop offset="100%" stopColor="#5b21b6" />
        </radialGradient>

        {/* Iridescent wing gradients */}
        <linearGradient id="ng-wing-l" x1="74" y1="148" x2="18" y2="195" gradientUnits="userSpaceOnUse">
          <stop offset="0%"   stopColor="#4C1D95" />
          <stop offset="44%"  stopColor="#6d28d9" />
          <stop offset="80%"  stopColor="#5b21b6" />
          <stop offset="93%"  stopColor="#7C3AED" />
          <stop offset="100%" stopColor="#F59E0B" stopOpacity="0.28" />
        </linearGradient>
        <linearGradient id="ng-wing-r" x1="166" y1="148" x2="222" y2="195" gradientUnits="userSpaceOnUse">
          <stop offset="0%"   stopColor="#4C1D95" />
          <stop offset="44%"  stopColor="#6d28d9" />
          <stop offset="80%"  stopColor="#5b21b6" />
          <stop offset="93%"  stopColor="#7C3AED" />
          <stop offset="100%" stopColor="#F59E0B" stopOpacity="0.28" />
        </linearGradient>

        {/* ── Filters ────────────────────────────────────────── */}
        <filter id="ng-glow-sm" x="-120%" y="-120%" width="340%" height="340%">
          <feGaussianBlur stdDeviation="2.5" result="blur" />
          <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
        <filter id="ng-glow-md" x="-120%" y="-120%" width="340%" height="340%">
          <feGaussianBlur stdDeviation="6" result="blur" />
          <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
        <filter id="ng-glow-eye" x="-100%" y="-100%" width="300%" height="300%">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
        <filter id="ng-glow-lg" x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="18" />
        </filter>
        {/* Moon soft bloom — wide, layered glow */}
        <filter id="ng-glow-moon" x="-150%" y="-150%" width="400%" height="400%">
          <feGaussianBlur stdDeviation="11" result="blur" />
          <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
      </defs>

      {/* ═══════════════════════════════════════════════════════ */}
      {/* LAYER 1 — Aura / energy field (deepest, behind all)   */}
      {/* ═══════════════════════════════════════════════════════ */}

      {/* Gold outer corona — wide and slow */}
      <circle
        cx="120" cy="116" r="118"
        fill="url(#ng-aura-gold)"
        filter="url(#ng-glow-lg)"
        style={{ animation: 'nova-aura-breathe 5.8s ease-in-out 1.1s infinite', transformOrigin: '120px 116px' }}
      />
      {/* Purple inner aura — main energy field */}
      <circle
        cx="120" cy="108" r="104"
        fill="url(#ng-aura)"
        filter="url(#ng-glow-lg)"
        style={{ animation: 'nova-aura-breathe 4.5s ease-in-out infinite', transformOrigin: '120px 108px' }}
      />
      {/* Tight purple halo ring directly around the character */}
      <ellipse
        cx="120" cy="140" rx="80" ry="88"
        fill="none"
        stroke="#7C3AED"
        strokeWidth="6"
        opacity="0.18"
        filter="url(#ng-glow-md)"
        style={{ animation: 'nova-aura-breathe 3.8s ease-in-out 0.4s infinite', transformOrigin: '120px 140px' }}
      />

      {/* ═══════════════════════════════════════════════════════ */}
      {/* LAYER 2 — Sacred geometry (Flower of Life, very faint) */}
      {/* ═══════════════════════════════════════════════════════ */}
      <g stroke="#A78BFA" strokeWidth="0.45" fill="none" opacity="0.065">
        {/* Center circle */}
        <circle cx="120" cy="120" r="38" />
        {/* 6 surrounding circles at distance=r */}
        <circle cx="120" cy="82"  r="38" />  {/* N */}
        <circle cx="153" cy="101" r="38" />  {/* NE */}
        <circle cx="153" cy="139" r="38" />  {/* SE */}
        <circle cx="120" cy="158" r="38" />  {/* S */}
        <circle cx="87"  cy="139" r="38" />  {/* SW */}
        <circle cx="87"  cy="101" r="38" />  {/* NW */}
        {/* Outer hexagon */}
        <polygon points="120,82 153,101 153,139 120,158 87,139 87,101" />
      </g>

      {/* ═══════════════════════════════════════════════════════ */}
      {/* LAYER 3 — Cosmic elements: moon, constellation          */}
      {/* ═══════════════════════════════════════════════════════ */}

      {/* Crescent moon */}
      <g style={{ animation: 'nova-moon-glow 4.5s ease-in-out infinite', transformOrigin: '205px 36px' }}>
        <circle cx="205" cy="36" r="16" fill="#F59E0B" opacity="0.78" filter="url(#ng-glow-sm)" />
        {/* Cutout circle — matches app background exactly */}
        <circle cx="212" cy="33" r="12.5" fill="#080618" />
        {/* Rim glow */}
        <circle cx="205" cy="36" r="18" fill="none" stroke="#F59E0B" strokeWidth="0.8" opacity="0.38" filter="url(#ng-glow-sm)" />
      </g>

      {/* ── Large crescent moon — right side of body ─────── */}
      {/* Positioned at the owl's right shoulder/body level  */}
      <g style={{ animation: 'nova-moon-glow 3.6s ease-in-out 0.6s infinite', transformOrigin: '218px 160px' }}>
        {/* Wide outer bloom */}
        <circle cx="218" cy="160" r="40" fill="#F59E0B" opacity="0.05" filter="url(#ng-glow-lg)" />
        {/* Medium glow halo */}
        <circle cx="218" cy="160" r="30" fill="#FCD34D" opacity="0.10" filter="url(#ng-glow-moon)" />
        {/* Moon body */}
        <circle cx="218" cy="160" r="24" fill="#FCD34D" opacity="0.92" filter="url(#ng-glow-moon)" />
        {/* Cutout to form crescent — offset right+up, leaving thick left-facing crescent */}
        <circle cx="229" cy="155" r="20" fill="#080618" />
        {/* Warm rim glow */}
        <circle cx="218" cy="160" r="26" fill="none" stroke="#F59E0B" strokeWidth="1.8" opacity="0.55" filter="url(#ng-glow-sm)" />
        {/* Upper crescent tip spark */}
        <circle cx="206" cy="147" r="2.2" fill="white" opacity="0.80" />
        {/* Lower crescent tip spark */}
        <circle cx="208" cy="174" r="1.8" fill="white" opacity="0.65" />
        {/* Inner sheen — bright patch on lit face */}
        <circle cx="210" cy="158" r="6" fill="white" opacity="0.10" />
      </g>

      {/* Constellation (4 stars, connected) */}
      <g opacity="0.52">
        <line x1="178" y1="58" x2="193" y2="68" stroke="#A78BFA" strokeWidth="0.5" opacity="0.65" />
        <line x1="193" y1="68" x2="206" y2="61" stroke="#A78BFA" strokeWidth="0.5" opacity="0.65" />
        <line x1="206" y1="61" x2="212" y2="74" stroke="#A78BFA" strokeWidth="0.5" opacity="0.65" />
        <circle cx="178" cy="58"  r="1.8" fill="#A78BFA" filter="url(#ng-glow-sm)" />
        <circle cx="193" cy="68"  r="2.3" fill="#A78BFA" filter="url(#ng-glow-sm)" />
        <circle cx="206" cy="61"  r="1.6" fill="#A78BFA" filter="url(#ng-glow-sm)" />
        <circle cx="212" cy="74"  r="1.8" fill="#A78BFA" filter="url(#ng-glow-sm)" />
      </g>

      {/* ═══════════════════════════════════════════════════════ */}
      {/* LAYER 4 — Cosmic nebula dust + sparkles (background)   */}
      {/* ═══════════════════════════════════════════════════════ */}
      {/* Left field */}
      <Dust    cx={16}  cy={42}  r={1.6} delay={0.0} celebrating={celebrating} />
      <Dust    cx={8}   cy={88}  r={1.2} delay={0.5} celebrating={celebrating} />
      <Dust    cx={22}  cy={135} r={1.8} delay={1.1} celebrating={celebrating} />
      <Dust    cx={10}  cy={178} r={1.4} delay={0.3} celebrating={celebrating} />
      <Dust    cx={36}  cy={215} r={2.0} delay={0.8} celebrating={celebrating} />
      {/* Right field */}
      <Dust    cx={228} cy={38}  r={1.5} delay={0.4} celebrating={celebrating} />
      <Dust    cx={235} cy={85}  r={1.2} delay={0.9} celebrating={celebrating} />
      <Dust    cx={224} cy={132} r={1.8} delay={0.2} celebrating={celebrating} />
      <Dust    cx={232} cy={182} r={1.4} delay={1.3} celebrating={celebrating} />
      <Dust    cx={218} cy={220} r={2.0} delay={0.6} celebrating={celebrating} />
      {/* Top/bottom scatter */}
      <Dust    cx={62}  cy={12}  r={1.6} delay={1.4} celebrating={celebrating} />
      <Dust    cx={100} cy={8}   r={2.2} delay={0.7} celebrating={celebrating} />
      <Dust    cx={148} cy={14}  r={1.5} delay={1.0} celebrating={celebrating} />
      <Dust    cx={48}  cy={228} r={1.8} delay={0.4} celebrating={celebrating} />
      <Dust    cx={120} cy={232} r={1.5} delay={1.1} celebrating={celebrating} />
      <Dust    cx={182} cy={224} r={2.0} delay={0.8} celebrating={celebrating} />
      {/* Sparkle stars */}
      <Sparkle cx={28}  cy={32}  r={3.2} delay={0}   celebrating={celebrating} />
      <Sparkle cx={212} cy={20}  r={2.8} delay={0.45} celebrating={celebrating} />
      <Sparkle cx={14}  cy={160} r={2.4} delay={0.9} celebrating={celebrating} />
      <Sparkle cx={228} cy={148} r={2.8} delay={0.2} celebrating={celebrating} />
      <Sparkle cx={74}  cy={220} r={2.4} delay={1.2} celebrating={celebrating} />
      <Sparkle cx={168} cy={228} r={2.8} delay={0.65} celebrating={celebrating} />

      {/* ═══════════════════════════════════════════════════════ */}
      {/* LAYER 5 — Wings (behind body)                         */}
      {/* ═══════════════════════════════════════════════════════ */}

      {/* Left wing */}
      <g className={speaking ? 'nova-wing-left' : ''} style={{ transformOrigin: '74px 148px' }}>
        <path
          d="M 74,148 C 36,128 14,162 18,195 C 22,218 64,210 68,188 Z"
          fill="url(#ng-wing-l)"
        />
        {/* Feather barb lines */}
        <path d="M 36,160 C 26,166 18,180 18,195" stroke="#A78BFA" strokeWidth="0.9" opacity="0.32" />
        <path d="M 50,154 C 38,159 28,172 28,186" stroke="#A78BFA" strokeWidth="0.9" opacity="0.26" />
        <path d="M 62,150 C 52,153 44,163 44,176" stroke="#A78BFA" strokeWidth="0.9" opacity="0.22" />
        {/* Wing tip glow */}
        <circle cx="18" cy="195" r="7"  fill="#A78BFA" opacity="0.24" filter="url(#ng-glow-md)" />
        <circle cx="18" cy="195" r="2.5" fill="white"   opacity="0.38" />
      </g>

      {/* Right wing */}
      <g className={speaking ? 'nova-wing-right' : ''} style={{ transformOrigin: '166px 148px' }}>
        <path
          d="M 166,148 C 204,128 226,162 222,195 C 218,218 176,210 172,188 Z"
          fill="url(#ng-wing-r)"
        />
        <path d="M 204,160 C 214,166 222,180 222,195" stroke="#A78BFA" strokeWidth="0.9" opacity="0.32" />
        <path d="M 190,154 C 202,159 212,172 212,186" stroke="#A78BFA" strokeWidth="0.9" opacity="0.26" />
        <path d="M 178,150 C 188,153 196,163 196,176" stroke="#A78BFA" strokeWidth="0.9" opacity="0.22" />
        <circle cx="222" cy="195" r="7"  fill="#A78BFA" opacity="0.24" filter="url(#ng-glow-md)" />
        <circle cx="222" cy="195" r="2.5" fill="white"   opacity="0.38" />
      </g>

      {/* ═══════════════════════════════════════════════════════ */}
      {/* LAYER 6 — Body + energy shimmer rings                  */}
      {/* ═══════════════════════════════════════════════════════ */}
      <g className={speaking ? 'nova-char-bob' : ''} style={{ transformOrigin: '120px 182px' }}>
        {/* Energy shimmer rings (three concentric, phase-offset) */}
        <ellipse cx="120" cy="178" rx="66" ry="70" fill="none"
          stroke="#A78BFA" strokeWidth="1"
          style={{ animation: 'nova-shimmer-ring 3.8s ease-in-out 0s infinite' }} />
        <ellipse cx="120" cy="178" rx="56" ry="60" fill="none"
          stroke="#A78BFA" strokeWidth="0.6"
          style={{ animation: 'nova-shimmer-ring 3.8s ease-in-out -1.3s infinite' }} />
        <ellipse cx="120" cy="178" rx="46" ry="50" fill="none"
          stroke="#7C3AED" strokeWidth="0.4"
          style={{ animation: 'nova-shimmer-ring 3.8s ease-in-out -2.5s infinite' }} />

        {/* Body */}
        <ellipse cx="120" cy="182" rx="52" ry="56" fill="url(#ng-body)" />
        {/* Iridescent sheen overlay */}
        <ellipse cx="120" cy="182" rx="52" ry="56" fill="url(#ng-body-sheen)" />

        {/* Belly */}
        <ellipse cx="120" cy="189" rx="31" ry="36" fill="url(#ng-belly)" />
        {/* Belly arc texture */}
        <ellipse cx="120" cy="187" rx="21" ry="23" fill="none" stroke="#A78BFA" strokeWidth="0.65" opacity="0.22" />
        <ellipse cx="120" cy="187" rx="12" ry="14" fill="none" stroke="#A78BFA" strokeWidth="0.65" opacity="0.16" />

        {/* Feet / talons */}
        <path d="M 104,234 L 95,242 M 104,234 L 104,243 M 104,234 L 113,242"
          stroke="#F59E0B" strokeWidth="2.3" strokeLinecap="round" />
        <path d="M 136,234 L 127,242 M 136,234 L 136,243 M 136,234 L 145,242"
          stroke="#F59E0B" strokeWidth="2.3" strokeLinecap="round" />
      </g>

      {/* ═══════════════════════════════════════════════════════ */}
      {/* LAYER 7 — Floating light orbs                         */}
      {/* ═══════════════════════════════════════════════════════ */}
      {/* Orb 1 — left */}
      <g transform="translate(28,120)">
        <g style={{ animation: 'nova-orb-drift-1 9s ease-in-out infinite', transformOrigin: '0px 0px' }}>
          <circle cx="0" cy="0" r="5.5" fill="#A78BFA" filter="url(#ng-glow-md)" opacity="0.45" />
          <circle cx="0" cy="0" r="2.2" fill="white"   opacity="0.55" />
        </g>
      </g>
      {/* Orb 2 — right */}
      <g transform="translate(212,100)">
        <g style={{ animation: 'nova-orb-drift-2 11s ease-in-out infinite', transformOrigin: '0px 0px' }}>
          <circle cx="0" cy="0" r="4.5" fill="#A78BFA" filter="url(#ng-glow-md)" opacity="0.40" />
          <circle cx="0" cy="0" r="1.8" fill="white"   opacity="0.5" />
        </g>
      </g>
      {/* Orb 3 — lower left */}
      <g transform="translate(32,200)">
        <g style={{ animation: 'nova-orb-drift-3 8s ease-in-out infinite', transformOrigin: '0px 0px' }}>
          <circle cx="0" cy="0" r="4"   fill="#7C3AED" filter="url(#ng-glow-md)" opacity="0.5" />
          <circle cx="0" cy="0" r="1.6" fill="white"   opacity="0.45" />
        </g>
      </g>
      {/* Orb 4 — lower right (gold tint) */}
      <g transform="translate(208,188)">
        <g style={{ animation: 'nova-orb-drift-4 10s ease-in-out infinite', transformOrigin: '0px 0px' }}>
          <circle cx="0" cy="0" r="4.5" fill="#F59E0B" filter="url(#ng-glow-md)" opacity="0.35" />
          <circle cx="0" cy="0" r="1.8" fill="white"   opacity="0.5" />
        </g>
      </g>

      {/* ═══════════════════════════════════════════════════════ */}
      {/* LAYER 8 — Head group (tilts for listening / thinking)  */}
      {/* ═══════════════════════════════════════════════════════ */}
      <g style={{ transform: `rotate(${headTilt}deg)`, transformOrigin: '120px 140px', transition: headSpring }}>

        {/* Energy ring around head */}
        <circle cx="120" cy="102" r="65" fill="none"
          stroke="#A78BFA" strokeWidth="0.55"
          style={{ animation: 'nova-shimmer-ring 4.2s ease-in-out -0.9s infinite', opacity: 0.18 }} />

        {/* Left ear tuft */}
        <g style={{
          transformOrigin: '89px 54px',
          transform: listening ? 'rotate(-11deg) scaleY(1.22)' : 'rotate(0deg) scaleY(1)',
          transition: headSpring,
        }}>
          <path d="M 86,56 L 76,18 L 110,50 Z" fill="#4C1D95" />
          <path d="M 88,56 L 80,22 L 108,52 Z" fill="#6d28d9" opacity="0.55" />
          {/* Tip glow */}
          <circle cx="76" cy="18" r="4" fill="#7C3AED" opacity="0.3" filter="url(#ng-glow-sm)" />
        </g>

        {/* Right ear tuft */}
        <path d="M 154,56 L 164,18 L 130,50 Z" fill="#4C1D95" />
        <path d="M 152,56 L 160,22 L 132,52 Z" fill="#6d28d9" opacity="0.55" />
        <circle cx="164" cy="18" r="4" fill="#7C3AED" opacity="0.3" filter="url(#ng-glow-sm)" />

        {/* Head */}
        <circle cx="120" cy="102" r="58" fill="url(#ng-head)" />
        {/* Head iridescent sheen */}
        <circle cx="120" cy="102" r="58" fill="url(#ng-body-sheen)" opacity="0.6" />

        {/* Facial disc */}
        <ellipse cx="120" cy="108" rx="40" ry="36" fill="#160a48" opacity="0.5" />

        {/* ── LEFT EYE ────────────────────── */}
        {/* Outer glow ring */}
        <circle cx="97" cy="98" r="24" fill="none" stroke="#A78BFA" strokeWidth="1.5"
          opacity="0.32" filter="url(#ng-glow-sm)" />
        {/* Eye white */}
        <circle cx="97" cy="98" r="19" fill="#ede8ff" />
        {/* Iris with glow */}
        <circle cx="97" cy="98" r="13" fill="url(#ng-iris)" filter="url(#ng-glow-eye)" />
        {/* Gold accent ring */}
        <circle cx="97" cy="98" r="9.5" fill="none" stroke="#F59E0B" strokeWidth="0.7" opacity="0.45" />
        {/* Pupil group */}
        <g style={{
          transform: `translate(${pupilDx}px,${pupilDy}px)`,
          transformOrigin: '97px 98px',
          transition: 'transform 0.45s cubic-bezier(0.34,1.2,0.64,1)',
        }}>
          <circle cx="97" cy="98" r="7.2" fill="#060318" />
          {/* Pupil inner glow */}
          <circle cx="97" cy="98" r="2.8" fill="white" opacity="0.18" filter="url(#ng-glow-sm)" />
          {/* Main catchlight */}
          <circle cx="92" cy="93" r="3.8" fill="white" opacity="0.95" />
          {/* Secondary catchlight */}
          <circle cx="101" cy="102" r="1.8" fill="white" opacity="0.55" />
          {/* Gold glint */}
          <circle cx="103" cy="94" r="1.3" fill="#F59E0B" opacity="0.55" />
        </g>
        {/* Eyelid */}
        <ellipse cx="97" cy="98" rx="19" ry="19" fill="#0c0420"
          className="nova-eyelid" style={{ transformOrigin: '97px 98px' }} />

        {/* ── RIGHT EYE ────────────────────── */}
        <circle cx="143" cy="98" r="24" fill="none" stroke="#A78BFA" strokeWidth="1.5"
          opacity="0.32" filter="url(#ng-glow-sm)" />
        <circle cx="143" cy="98" r="19" fill="#ede8ff" />
        <circle cx="143" cy="98" r="13" fill="url(#ng-iris)" filter="url(#ng-glow-eye)" />
        <circle cx="143" cy="98" r="9.5" fill="none" stroke="#F59E0B" strokeWidth="0.7" opacity="0.45" />
        <g style={{
          transform: `translate(${pupilDx}px,${pupilDy}px)`,
          transformOrigin: '143px 98px',
          transition: 'transform 0.45s cubic-bezier(0.34,1.2,0.64,1)',
        }}>
          <circle cx="143" cy="98" r="7.2" fill="#060318" />
          <circle cx="143" cy="98" r="2.8" fill="white" opacity="0.18" filter="url(#ng-glow-sm)" />
          <circle cx="138" cy="93" r="3.8" fill="white" opacity="0.95" />
          <circle cx="147" cy="102" r="1.8" fill="white" opacity="0.55" />
          <circle cx="149" cy="94" r="1.3" fill="#F59E0B" opacity="0.55" />
        </g>
        <ellipse cx="143" cy="98" rx="19" ry="19" fill="#0c0420"
          className="nova-eyelid nova-eyelid-r" style={{ transformOrigin: '143px 98px' }} />

        {/* ── BEAK ──────────────────────────── */}
        {/* Upper beak */}
        <path d="M 112,118 L 120,112 L 128,118 Z" fill="#F59E0B" />
        {/* Lower beak — drops when speaking */}
        <path
          d="M 112,118 L 120,124 L 128,118 Z"
          fill="#D97706"
          className={speaking ? 'nova-beak-talk' : ''}
          style={{ transformOrigin: '120px 118px' }}
        />
        {/* Beak highlight */}
        <path d="M 113,118 L 120,113 L 127,118" fill="none"
          stroke="#FCD34D" strokeWidth="0.7" opacity="0.5" />

        {/* ── THINKING DOTS ─────────────────── */}
        {thinking && (
          <>
            <circle cx="104" cy="52" r="3.5" fill="#A78BFA" filter="url(#ng-glow-sm)"
              className="nova-dot-1" style={{ transformOrigin: '104px 52px' }} />
            <circle cx="120" cy="44" r="3.5" fill="#A78BFA" filter="url(#ng-glow-sm)"
              className="nova-dot-2" style={{ transformOrigin: '120px 44px' }} />
            <circle cx="136" cy="52" r="3.5" fill="#A78BFA" filter="url(#ng-glow-sm)"
              className="nova-dot-3" style={{ transformOrigin: '136px 52px' }} />
          </>
        )}
      </g>

      {/* ═══════════════════════════════════════════════════════ */}
      {/* LAYER 9 — Celebrating extra burst sparkles            */}
      {/* ═══════════════════════════════════════════════════════ */}
      {celebrating && (
        <>
          <Sparkle cx={72}  cy={62}  r={5}   delay={0.06} celebrating />
          <Sparkle cx={168} cy={56}  r={5}   delay={0.02} celebrating />
          <Sparkle cx={46}  cy={132} r={4.5} delay={0.18} celebrating />
          <Sparkle cx={194} cy={124} r={4.5} delay={0.12} celebrating />
          <Sparkle cx={120} cy={34}  r={5.5} delay={0.04} celebrating />
          <Dust    cx={92}  cy={46}  r={3}   delay={0.1}  celebrating />
          <Dust    cx={148} cy={44}  r={3}   delay={0.08} celebrating />
        </>
      )}
    </svg>
  );
}
