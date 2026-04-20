// Sage — animated mystical SVG deer character
// ViewBox: 240×240  |  Default render: 300px
// Inner World & Consciousness — emerald / forest green palette

// Tiny glowing forest dust particle
function Dust({ cx, cy, r = 1.5, delay, celebrating }) {
  const anim = celebrating
    ? `nova-star-burst 1s ease-out ${delay}s both`
    : `nova-twinkle ${1.6 + delay * 0.85}s ease-in-out ${delay * 0.3}s infinite`;
  return (
    <g transform={`translate(${cx},${cy})`}>
      <g style={{ animation: anim, transformOrigin: '0px 0px' }}>
        <circle cx="0" cy="0" r={r} fill="#34D399" filter="url(#sg-glow-sm)" />
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
        <line x1={-r} y1={0} x2={r} y2={0} stroke="#34D399" strokeWidth={r * 0.55} strokeLinecap="round" />
        <line x1={0} y1={-r} x2={0} y2={r} stroke="#34D399" strokeWidth={r * 0.55} strokeLinecap="round" />
        <line x1={-r*0.7} y1={-r*0.7} x2={r*0.7} y2={r*0.7} stroke="#34D399" strokeWidth={r * 0.3} strokeLinecap="round" />
        <line x1={r*0.7} y1={-r*0.7} x2={-r*0.7} y2={r*0.7} stroke="#34D399" strokeWidth={r * 0.3} strokeLinecap="round" />
        <circle cx="0" cy="0" r={r * 0.28} fill="white" opacity="0.85" />
      </g>
    </g>
  );
}

export default function SageSVG({ state = 'idle', size = 300 }) {
  const speaking    = state === 'speaking';
  const listening   = state === 'listening';
  const thinking    = state === 'thinking';
  const celebrating = state === 'celebrating';

  const pupilDx    = thinking ? -2.8 : listening ? 1.8 : 0;
  const pupilDy    = thinking ? -3.8 : 0;
  const headTilt   = listening ? -14  : thinking ? 7 : 0;
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
        {/* Emerald inner aura */}
        <radialGradient id="sg-aura" cx="50%" cy="40%" r="55%">
          <stop offset="0%"   stopColor="#059669" stopOpacity="0" />
          <stop offset="32%"  stopColor="#059669" stopOpacity="0.22" />
          <stop offset="58%"  stopColor="#34D399" stopOpacity="0.30" />
          <stop offset="80%"  stopColor="#064E3B" stopOpacity="0.26" />
          <stop offset="92%"  stopColor="#10B981" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#F59E0B" stopOpacity="0.10" />
        </radialGradient>
        {/* Soft gold outer corona — warmth against forest dark */}
        <radialGradient id="sg-aura-gold" cx="50%" cy="48%" r="50%">
          <stop offset="0%"   stopColor="#F59E0B" stopOpacity="0" />
          <stop offset="50%"  stopColor="#F59E0B" stopOpacity="0.03" />
          <stop offset="78%"  stopColor="#D97706" stopOpacity="0.09" />
          <stop offset="100%" stopColor="#FCD34D" stopOpacity="0.14" />
        </radialGradient>

        <radialGradient id="sg-body" cx="34%" cy="24%" r="72%">
          <stop offset="0%"   stopColor="#065F46" />
          <stop offset="42%"  stopColor="#047857" />
          <stop offset="75%"  stopColor="#022c22" />
          <stop offset="100%" stopColor="#011a14" />
        </radialGradient>
        <linearGradient id="sg-body-sheen" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%"   stopColor="#10B981" stopOpacity="0.10" />
          <stop offset="48%"  stopColor="#059669" stopOpacity="0.05" />
          <stop offset="82%"  stopColor="#F59E0B" stopOpacity="0.04" />
          <stop offset="100%" stopColor="#34D399" stopOpacity="0.08" />
        </linearGradient>

        <radialGradient id="sg-head" cx="36%" cy="24%" r="68%">
          <stop offset="0%"   stopColor="#065F46" />
          <stop offset="55%"  stopColor="#047857" />
          <stop offset="100%" stopColor="#022c22" />
        </radialGradient>

        <radialGradient id="sg-belly" cx="32%" cy="20%" r="74%">
          <stop offset="0%"   stopColor="#10B981" />
          <stop offset="55%"  stopColor="#059669" />
          <stop offset="100%" stopColor="#047857" />
        </radialGradient>

        <radialGradient id="sg-iris" cx="26%" cy="20%" r="74%">
          <stop offset="0%"   stopColor="#a7f3d0" />
          <stop offset="40%"  stopColor="#34D399" />
          <stop offset="100%" stopColor="#065F46" />
        </radialGradient>

        {/* Antler gradients — warm amber-gold, darkest at base */}
        <linearGradient id="sg-antler-l" x1="92" y1="60" x2="64" y2="8" gradientUnits="userSpaceOnUse">
          <stop offset="0%"   stopColor="#78350f" />
          <stop offset="35%"  stopColor="#b45309" />
          <stop offset="70%"  stopColor="#D97706" />
          <stop offset="100%" stopColor="#F59E0B" />
        </linearGradient>
        <linearGradient id="sg-antler-r" x1="148" y1="60" x2="176" y2="8" gradientUnits="userSpaceOnUse">
          <stop offset="0%"   stopColor="#78350f" />
          <stop offset="35%"  stopColor="#b45309" />
          <stop offset="70%"  stopColor="#D97706" />
          <stop offset="100%" stopColor="#F59E0B" />
        </linearGradient>

        {/* Foreleg gradients */}
        <linearGradient id="sg-arm-l" x1="74" y1="148" x2="40" y2="178" gradientUnits="userSpaceOnUse">
          <stop offset="0%"   stopColor="#064E3B" />
          <stop offset="50%"  stopColor="#047857" />
          <stop offset="100%" stopColor="#065F46" />
        </linearGradient>
        <linearGradient id="sg-arm-r" x1="166" y1="148" x2="200" y2="178" gradientUnits="userSpaceOnUse">
          <stop offset="0%"   stopColor="#064E3B" />
          <stop offset="50%"  stopColor="#047857" />
          <stop offset="100%" stopColor="#065F46" />
        </linearGradient>

        {/* ── Filters ────────────────────────────────────────── */}
        <filter id="sg-glow-sm" x="-120%" y="-120%" width="340%" height="340%">
          <feGaussianBlur stdDeviation="2.5" result="blur" />
          <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
        <filter id="sg-glow-md" x="-120%" y="-120%" width="340%" height="340%">
          <feGaussianBlur stdDeviation="6" result="blur" />
          <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
        <filter id="sg-glow-eye" x="-100%" y="-100%" width="300%" height="300%">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
        <filter id="sg-glow-lg" x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="18" />
        </filter>
        {/* Leaf soft bloom */}
        <filter id="sg-glow-leaf" x="-150%" y="-150%" width="400%" height="400%">
          <feGaussianBlur stdDeviation="9" result="blur" />
          <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
      </defs>

      {/* ═══════════════════════════════════════════════════════ */}
      {/* LAYER 1 — Aura / energy field (deepest, behind all)   */}
      {/* ═══════════════════════════════════════════════════════ */}

      {/* Gold outer corona — wide and slow */}
      <circle
        cx="120" cy="116" r="118"
        fill="url(#sg-aura-gold)"
        filter="url(#sg-glow-lg)"
        style={{ animation: 'nova-aura-breathe 5.8s ease-in-out 1.1s infinite', transformOrigin: '120px 116px' }}
      />
      {/* Emerald inner aura — main energy field */}
      <circle
        cx="120" cy="108" r="104"
        fill="url(#sg-aura)"
        filter="url(#sg-glow-lg)"
        style={{ animation: 'nova-aura-breathe 4.5s ease-in-out infinite', transformOrigin: '120px 108px' }}
      />
      {/* Tight emerald halo ring */}
      <ellipse
        cx="120" cy="140" rx="80" ry="88"
        fill="none"
        stroke="#059669"
        strokeWidth="6"
        opacity="0.16"
        filter="url(#sg-glow-md)"
        style={{ animation: 'nova-aura-breathe 3.8s ease-in-out 0.4s infinite', transformOrigin: '120px 140px' }}
      />

      {/* ═══════════════════════════════════════════════════════ */}
      {/* LAYER 2 — Sacred geometry (Flower of Life, very faint) */}
      {/* ═══════════════════════════════════════════════════════ */}
      <g stroke="#34D399" strokeWidth="0.45" fill="none" opacity="0.065">
        <circle cx="120" cy="120" r="38" />
        <circle cx="120" cy="82"  r="38" />
        <circle cx="153" cy="101" r="38" />
        <circle cx="153" cy="139" r="38" />
        <circle cx="120" cy="158" r="38" />
        <circle cx="87"  cy="139" r="38" />
        <circle cx="87"  cy="101" r="38" />
        <polygon points="120,82 153,101 153,139 120,158 87,139 87,101" />
      </g>

      {/* ═══════════════════════════════════════════════════════ */}
      {/* LAYER 3 — Forest elements: leaves instead of moons     */}
      {/* ═══════════════════════════════════════════════════════ */}

      {/* Small leaf — upper right (replaces small crescent) */}
      <g style={{ animation: 'nova-moon-glow 4.5s ease-in-out infinite', transformOrigin: '210px 36px' }}>
        {/* Soft bloom */}
        <ellipse cx="210" cy="36" rx="16" ry="11" fill="#10B981" opacity="0.12" filter="url(#sg-glow-md)" />
        {/* Leaf — pointed oval, tip up */}
        <path d="M 210,50 C 196,44 194,24 210,20 C 226,24 224,44 210,50 Z"
          fill="#10B981" opacity="0.72" filter="url(#sg-glow-sm)" />
        {/* Center vein */}
        <path d="M 210,50 L 210,20" stroke="#34D399" strokeWidth="0.85" opacity="0.65" strokeLinecap="round" />
        {/* Side veins */}
        <path d="M 210,42 Q 203,37 199,30" stroke="#34D399" strokeWidth="0.5" opacity="0.42" strokeLinecap="round" />
        <path d="M 210,42 Q 217,37 221,30" stroke="#34D399" strokeWidth="0.5" opacity="0.42" strokeLinecap="round" />
        <path d="M 210,34 Q 204,30 201,24" stroke="#34D399" strokeWidth="0.4" opacity="0.30" strokeLinecap="round" />
        <path d="M 210,34 Q 216,30 219,24" stroke="#34D399" strokeWidth="0.4" opacity="0.30" strokeLinecap="round" />
        {/* Tip glow */}
        <circle cx="210" cy="20" r="2.0" fill="white" opacity="0.65" />
      </g>

      {/* Large leaf — lower right (replaces large crescent) */}
      <g style={{ animation: 'nova-moon-glow 3.6s ease-in-out 0.6s infinite', transformOrigin: '218px 160px' }}>
        {/* Wide outer bloom */}
        <ellipse cx="218" cy="160" rx="34" ry="30" fill="#10B981" opacity="0.05" filter="url(#sg-glow-lg)" />
        {/* Medium glow */}
        <ellipse cx="218" cy="160" rx="26" ry="22" fill="#34D399" opacity="0.07" filter="url(#sg-glow-leaf)" />
        {/* Leaf body */}
        <path d="M 218,192 C 194,180 188,136 218,128 C 248,136 242,180 218,192 Z"
          fill="#10B981" opacity="0.88" filter="url(#sg-glow-leaf)" />
        {/* Center vein */}
        <path d="M 218,192 L 218,128" stroke="#34D399" strokeWidth="1.9" opacity="0.58" strokeLinecap="round" />
        {/* Side veins — upper pair */}
        <path d="M 218,156 Q 206,148 198,138" stroke="#34D399" strokeWidth="1.0" opacity="0.38" strokeLinecap="round" />
        <path d="M 218,156 Q 230,148 238,138" stroke="#34D399" strokeWidth="1.0" opacity="0.38" strokeLinecap="round" />
        {/* Side veins — lower pair */}
        <path d="M 218,172 Q 208,165 202,155" stroke="#34D399" strokeWidth="0.75" opacity="0.28" strokeLinecap="round" />
        <path d="M 218,172 Q 228,165 234,155" stroke="#34D399" strokeWidth="0.75" opacity="0.28" strokeLinecap="round" />
        {/* Tip spark */}
        <circle cx="218" cy="128" r="2.2" fill="white" opacity="0.72" />
        {/* Stem base */}
        <circle cx="218" cy="192" r="1.8" fill="#34D399" opacity="0.55" />
      </g>

      {/* Small leaf cluster — upper right (replaces constellation) */}
      <g opacity="0.55">
        {/* Connecting stems */}
        <path d="M 182,64 Q 192,56 200,62" stroke="#34D399" strokeWidth="0.6" opacity="0.55" strokeLinecap="round" />
        <path d="M 200,62 Q 207,52 212,60" stroke="#34D399" strokeWidth="0.5" opacity="0.50" strokeLinecap="round" />
        {/* Small leaf 1 */}
        <path d="M 182,64 C 175,55 180,44 189,49 C 192,56 187,66 182,64 Z"
          fill="#34D399" opacity="0.62" filter="url(#sg-glow-sm)" />
        {/* Small leaf 2 */}
        <path d="M 200,62 C 193,52 199,41 208,46 C 210,53 206,64 200,62 Z"
          fill="#34D399" opacity="0.52" filter="url(#sg-glow-sm)" />
        {/* Tip glows */}
        <circle cx="182" cy="64" r="1.8" fill="#34D399" filter="url(#sg-glow-sm)" />
        <circle cx="200" cy="62" r="2.2" fill="#34D399" filter="url(#sg-glow-sm)" />
        <circle cx="212" cy="60" r="1.6" fill="#34D399" filter="url(#sg-glow-sm)" />
      </g>

      {/* ═══════════════════════════════════════════════════════ */}
      {/* LAYER 4 — Forest dust + sparkles (background)          */}
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
      <Sparkle cx={28}  cy={32}  r={3.2} delay={0}    celebrating={celebrating} />
      <Sparkle cx={212} cy={20}  r={2.8} delay={0.45} celebrating={celebrating} />
      <Sparkle cx={14}  cy={160} r={2.4} delay={0.9}  celebrating={celebrating} />
      <Sparkle cx={228} cy={148} r={2.8} delay={0.2}  celebrating={celebrating} />
      <Sparkle cx={74}  cy={220} r={2.4} delay={1.2}  celebrating={celebrating} />
      <Sparkle cx={168} cy={228} r={2.8} delay={0.65} celebrating={celebrating} />

      {/* ═══════════════════════════════════════════════════════ */}
      {/* LAYER 5 — Forelegs (behind body, flutter when speaking) */}
      {/* ═══════════════════════════════════════════════════════ */}

      {/* Left foreleg */}
      <g className={speaking ? 'nova-wing-left' : ''} style={{ transformOrigin: '74px 152px' }}>
        <path
          d="M 74,152 C 50,144 38,160 42,178 C 46,190 68,184 70,168 Z"
          fill="url(#sg-arm-l)"
        />
        {/* Leg sheen lines */}
        <path d="M 50,162 C 42,172 42,178 42,178" stroke="#34D399" strokeWidth="0.9" opacity="0.26" strokeLinecap="round" />
        <path d="M 60,157 C 50,164 46,174 46,182" stroke="#34D399" strokeWidth="0.9" opacity="0.20" strokeLinecap="round" />
        {/* Hoof — two-toed split */}
        <path d="M 44,179 L 39,188 M 44,179 L 49,188"
          stroke="#022c22" strokeWidth="2.8" strokeLinecap="round" />
        <circle cx="44" cy="179" r="4.5" fill="#022c22" opacity="0.60" />
      </g>

      {/* Right foreleg */}
      <g className={speaking ? 'nova-wing-right' : ''} style={{ transformOrigin: '166px 152px' }}>
        <path
          d="M 166,152 C 190,144 202,160 198,178 C 194,190 172,184 170,168 Z"
          fill="url(#sg-arm-r)"
        />
        <path d="M 190,162 C 198,172 198,178 198,178" stroke="#34D399" strokeWidth="0.9" opacity="0.26" strokeLinecap="round" />
        <path d="M 180,157 C 190,164 194,174 194,182" stroke="#34D399" strokeWidth="0.9" opacity="0.20" strokeLinecap="round" />
        {/* Hoof — two-toed split */}
        <path d="M 196,179 L 191,188 M 196,179 L 201,188"
          stroke="#022c22" strokeWidth="2.8" strokeLinecap="round" />
        <circle cx="196" cy="179" r="4.5" fill="#022c22" opacity="0.60" />
      </g>

      {/* ═══════════════════════════════════════════════════════ */}
      {/* LAYER 6 — Body + energy shimmer rings                  */}
      {/* ═══════════════════════════════════════════════════════ */}
      <g className={speaking ? 'nova-char-bob' : ''} style={{ transformOrigin: '120px 182px' }}>
        {/* Energy shimmer rings (three concentric, phase-offset) */}
        <ellipse cx="120" cy="178" rx="66" ry="70" fill="none"
          stroke="#34D399" strokeWidth="1"
          style={{ animation: 'nova-shimmer-ring 3.8s ease-in-out 0s infinite' }} />
        <ellipse cx="120" cy="178" rx="56" ry="60" fill="none"
          stroke="#34D399" strokeWidth="0.6"
          style={{ animation: 'nova-shimmer-ring 3.8s ease-in-out -1.3s infinite' }} />
        <ellipse cx="120" cy="178" rx="46" ry="50" fill="none"
          stroke="#059669" strokeWidth="0.4"
          style={{ animation: 'nova-shimmer-ring 3.8s ease-in-out -2.5s infinite' }} />

        {/* Body */}
        <ellipse cx="120" cy="182" rx="52" ry="56" fill="url(#sg-body)" />
        {/* Iridescent sheen overlay */}
        <ellipse cx="120" cy="182" rx="52" ry="56" fill="url(#sg-body-sheen)" />

        {/* Belly */}
        <ellipse cx="120" cy="189" rx="31" ry="36" fill="url(#sg-belly)" />
        {/* Belly arc texture */}
        <ellipse cx="120" cy="187" rx="21" ry="23" fill="none" stroke="#34D399" strokeWidth="0.65" opacity="0.22" />
        <ellipse cx="120" cy="187" rx="12" ry="14" fill="none" stroke="#34D399" strokeWidth="0.65" opacity="0.16" />

        {/* Hooves — split-toe deer */}
        <path d="M 107,234 L 100,244 M 107,234 L 114,244"
          stroke="#022c22" strokeWidth="3.0" strokeLinecap="round" />
        <path d="M 133,234 L 126,244 M 133,234 L 140,244"
          stroke="#022c22" strokeWidth="3.0" strokeLinecap="round" />
      </g>

      {/* ═══════════════════════════════════════════════════════ */}
      {/* LAYER 7 — Floating light orbs                         */}
      {/* ═══════════════════════════════════════════════════════ */}
      {/* Orb 1 — left */}
      <g transform="translate(28,120)">
        <g style={{ animation: 'nova-orb-drift-1 9s ease-in-out infinite', transformOrigin: '0px 0px' }}>
          <circle cx="0" cy="0" r="5.5" fill="#34D399" filter="url(#sg-glow-md)" opacity="0.45" />
          <circle cx="0" cy="0" r="2.2" fill="white"   opacity="0.55" />
        </g>
      </g>
      {/* Orb 2 — right */}
      <g transform="translate(212,100)">
        <g style={{ animation: 'nova-orb-drift-2 11s ease-in-out infinite', transformOrigin: '0px 0px' }}>
          <circle cx="0" cy="0" r="4.5" fill="#10B981" filter="url(#sg-glow-md)" opacity="0.40" />
          <circle cx="0" cy="0" r="1.8" fill="white"   opacity="0.5" />
        </g>
      </g>
      {/* Orb 3 — lower left */}
      <g transform="translate(32,200)">
        <g style={{ animation: 'nova-orb-drift-3 8s ease-in-out infinite', transformOrigin: '0px 0px' }}>
          <circle cx="0" cy="0" r="4"   fill="#059669" filter="url(#sg-glow-md)" opacity="0.5" />
          <circle cx="0" cy="0" r="1.6" fill="white"   opacity="0.45" />
        </g>
      </g>
      {/* Orb 4 — lower right (gold warmth) */}
      <g transform="translate(208,188)">
        <g style={{ animation: 'nova-orb-drift-4 10s ease-in-out infinite', transformOrigin: '0px 0px' }}>
          <circle cx="0" cy="0" r="4.5" fill="#F59E0B" filter="url(#sg-glow-md)" opacity="0.30" />
          <circle cx="0" cy="0" r="1.8" fill="white"   opacity="0.5" />
        </g>
      </g>

      {/* ═══════════════════════════════════════════════════════ */}
      {/* LAYER 8 — Head group (tilts for listening / thinking)  */}
      {/* ═══════════════════════════════════════════════════════ */}
      <g style={{ transform: `rotate(${headTilt}deg)`, transformOrigin: '120px 140px', transition: headSpring }}>

        {/* Energy ring around head */}
        <circle cx="120" cy="102" r="65" fill="none"
          stroke="#34D399" strokeWidth="0.55"
          style={{ animation: 'nova-shimmer-ring 4.2s ease-in-out -0.9s infinite', opacity: 0.18 }} />

        {/* ── LEFT ANTLER ─────────────────────────────────────── */}
        {/* Drawn before head so the base sits behind the skull   */}
        <g style={{
          transformOrigin: '90px 58px',
          transform: listening ? 'rotate(-6deg) scaleY(1.08)' : 'rotate(0deg) scaleY(1)',
          transition: headSpring,
        }}>
          {/* Main trunk */}
          <path d="M 93,60 C 89,46 84,32 80,18"
            stroke="url(#sg-antler-l)" strokeWidth="3.8" strokeLinecap="round" fill="none" />
          {/* Lower branch — pointing left */}
          <path d="M 88,44 Q 74,36 66,26"
            stroke="url(#sg-antler-l)" strokeWidth="2.4" strokeLinecap="round" fill="none" />
          {/* Mid branch — pointing right-up */}
          <path d="M 84,33 Q 92,22 92,11"
            stroke="url(#sg-antler-l)" strokeWidth="2.0" strokeLinecap="round" fill="none" />
          {/* Upper fork — left */}
          <path d="M 80,22 Q 68,16 64,8"
            stroke="url(#sg-antler-l)" strokeWidth="1.5" strokeLinecap="round" fill="none" />
          {/* Main tip */}
          <path d="M 80,18 L 76,7"
            stroke="url(#sg-antler-l)" strokeWidth="1.4" strokeLinecap="round" fill="none" />
          {/* Tip glows */}
          <circle cx="76"  cy="7"  r="2.2" fill="#FCD34D" opacity="0.65" filter="url(#sg-glow-sm)" />
          <circle cx="64"  cy="8"  r="1.8" fill="#F59E0B"  opacity="0.52" filter="url(#sg-glow-sm)" />
          <circle cx="66"  cy="26" r="1.6" fill="#F59E0B"  opacity="0.44" filter="url(#sg-glow-sm)" />
          <circle cx="92"  cy="11" r="1.6" fill="#F59E0B"  opacity="0.44" filter="url(#sg-glow-sm)" />
        </g>

        {/* ── RIGHT ANTLER ────────────────────────────────────── */}
        <g style={{
          transformOrigin: '150px 58px',
          transform: listening ? 'rotate(6deg) scaleY(1.08)' : 'rotate(0deg) scaleY(1)',
          transition: headSpring,
        }}>
          {/* Main trunk */}
          <path d="M 147,60 C 151,46 156,32 160,18"
            stroke="url(#sg-antler-r)" strokeWidth="3.8" strokeLinecap="round" fill="none" />
          {/* Lower branch — pointing right */}
          <path d="M 152,44 Q 166,36 174,26"
            stroke="url(#sg-antler-r)" strokeWidth="2.4" strokeLinecap="round" fill="none" />
          {/* Mid branch — pointing left-up */}
          <path d="M 156,33 Q 148,22 148,11"
            stroke="url(#sg-antler-r)" strokeWidth="2.0" strokeLinecap="round" fill="none" />
          {/* Upper fork — right */}
          <path d="M 160,22 Q 172,16 176,8"
            stroke="url(#sg-antler-r)" strokeWidth="1.5" strokeLinecap="round" fill="none" />
          {/* Main tip */}
          <path d="M 160,18 L 164,7"
            stroke="url(#sg-antler-r)" strokeWidth="1.4" strokeLinecap="round" fill="none" />
          {/* Tip glows */}
          <circle cx="164" cy="7"  r="2.2" fill="#FCD34D" opacity="0.65" filter="url(#sg-glow-sm)" />
          <circle cx="176" cy="8"  r="1.8" fill="#F59E0B"  opacity="0.52" filter="url(#sg-glow-sm)" />
          <circle cx="174" cy="26" r="1.6" fill="#F59E0B"  opacity="0.44" filter="url(#sg-glow-sm)" />
          <circle cx="148" cy="11" r="1.6" fill="#F59E0B"  opacity="0.44" filter="url(#sg-glow-sm)" />
        </g>

        {/* ── LEFT EAR ────────────────────────────────────────── */}
        <g style={{
          transformOrigin: '82px 72px',
          transform: listening ? 'rotate(-10deg) scaleY(1.18)' : 'rotate(0deg) scaleY(1)',
          transition: headSpring,
        }}>
          <path d="M 78,80 L 66,52 L 104,68 Z" fill="#064E3B" />
          <path d="M 80,80 L 70,56 L 100,70 Z" fill="#065F46" opacity="0.58" />
          {/* Inner ear — lighter, warm blush */}
          <path d="M 80,78 L 73,60 L 97,72 Z" fill="#10B981" opacity="0.22" />
          <circle cx="66" cy="52" r="3" fill="#059669" opacity="0.26" filter="url(#sg-glow-sm)" />
        </g>

        {/* ── RIGHT EAR ───────────────────────────────────────── */}
        <g style={{
          transformOrigin: '158px 72px',
          transform: listening ? 'rotate(10deg) scaleY(1.18)' : 'rotate(0deg) scaleY(1)',
          transition: headSpring,
        }}>
          <path d="M 162,80 L 174,52 L 136,68 Z" fill="#064E3B" />
          <path d="M 160,80 L 170,56 L 140,70 Z" fill="#065F46" opacity="0.58" />
          <path d="M 160,78 L 167,60 L 143,72 Z" fill="#10B981" opacity="0.22" />
          <circle cx="174" cy="52" r="3" fill="#059669" opacity="0.26" filter="url(#sg-glow-sm)" />
        </g>

        {/* Head */}
        <circle cx="120" cy="102" r="58" fill="url(#sg-head)" />
        {/* Head iridescent sheen */}
        <circle cx="120" cy="102" r="58" fill="url(#sg-body-sheen)" opacity="0.6" />

        {/* Facial disc — slight lighter warmth around face */}
        <ellipse cx="120" cy="110" rx="38" ry="32" fill="#10B981" opacity="0.10" />

        {/* ── LEFT EYE ────────────────────────────────────────── */}
        {/* Outer glow ring */}
        <circle cx="97" cy="98" r="24" fill="none" stroke="#10B981" strokeWidth="1.5"
          opacity="0.32" filter="url(#sg-glow-sm)" />
        {/* Eye white — faint green tint */}
        <circle cx="97" cy="98" r="19" fill="#f0fdf4" />
        {/* Iris with glow */}
        <circle cx="97" cy="98" r="13" fill="url(#sg-iris)" filter="url(#sg-glow-eye)" />
        {/* Gold accent ring */}
        <circle cx="97" cy="98" r="9.5" fill="none" stroke="#F59E0B" strokeWidth="0.7" opacity="0.38" />
        {/* Pupil group */}
        <g style={{
          transform: `translate(${pupilDx}px,${pupilDy}px)`,
          transformOrigin: '97px 98px',
          transition: 'transform 0.45s cubic-bezier(0.34,1.2,0.64,1)',
        }}>
          <circle cx="97" cy="98" r="7.2" fill="#011a14" />
          {/* Pupil inner glow */}
          <circle cx="97" cy="98" r="2.8" fill="white" opacity="0.15" filter="url(#sg-glow-sm)" />
          {/* Main catchlight */}
          <circle cx="92" cy="93" r="3.8" fill="white" opacity="0.95" />
          {/* Secondary catchlight */}
          <circle cx="101" cy="102" r="1.8" fill="white" opacity="0.55" />
          {/* Gold glint */}
          <circle cx="103" cy="94" r="1.3" fill="#F59E0B" opacity="0.48" />
        </g>
        {/* Eyelid — dark green matches head surface */}
        <ellipse cx="97" cy="98" rx="19" ry="19" fill="#022c22"
          className="nova-eyelid" style={{ transformOrigin: '97px 98px' }} />

        {/* ── RIGHT EYE ───────────────────────────────────────── */}
        <circle cx="143" cy="98" r="24" fill="none" stroke="#10B981" strokeWidth="1.5"
          opacity="0.32" filter="url(#sg-glow-sm)" />
        <circle cx="143" cy="98" r="19" fill="#f0fdf4" />
        <circle cx="143" cy="98" r="13" fill="url(#sg-iris)" filter="url(#sg-glow-eye)" />
        <circle cx="143" cy="98" r="9.5" fill="none" stroke="#F59E0B" strokeWidth="0.7" opacity="0.38" />
        <g style={{
          transform: `translate(${pupilDx}px,${pupilDy}px)`,
          transformOrigin: '143px 98px',
          transition: 'transform 0.45s cubic-bezier(0.34,1.2,0.64,1)',
        }}>
          <circle cx="143" cy="98" r="7.2" fill="#011a14" />
          <circle cx="143" cy="98" r="2.8" fill="white" opacity="0.15" filter="url(#sg-glow-sm)" />
          <circle cx="138" cy="93" r="3.8" fill="white" opacity="0.95" />
          <circle cx="147" cy="102" r="1.8" fill="white" opacity="0.55" />
          <circle cx="149" cy="94" r="1.3" fill="#F59E0B" opacity="0.48" />
        </g>
        <ellipse cx="143" cy="98" rx="19" ry="19" fill="#022c22"
          className="nova-eyelid nova-eyelid-r" style={{ transformOrigin: '143px 98px' }} />

        {/* ── THIRD EYE GEM ───────────────────────────────────── */}
        {/* Outer soft glow */}
        <circle cx="120" cy="76" r="9" fill="#7C3AED" opacity="0.18" filter="url(#sg-glow-md)" />
        {/* Gem body */}
        <circle cx="120" cy="76" r="4.8" fill="#7C3AED" opacity="0.86"
          style={{ animation: 'nova-aura-breathe 2.6s ease-in-out infinite', transformOrigin: '120px 76px' }} />
        {/* Gem inner glow */}
        <circle cx="120" cy="76" r="3.0" fill="#A78BFA" />
        {/* Gem catchlight */}
        <circle cx="118" cy="74" r="1.5" fill="white" opacity="0.92" />
        {/* Gem lower glint */}
        <circle cx="122" cy="78" r="0.8" fill="white" opacity="0.45" />

        {/* ── NOSE ────────────────────────────────────────────── */}
        {/* Muzzle softening — faint lighter ellipse */}
        <ellipse cx="120" cy="120" rx="13" ry="9" fill="#10B981" opacity="0.16" />
        {/* Nose — small dark inverted triangle (pointing down) */}
        <path d="M 115,114 L 125,114 L 120,119 Z" fill="#022c22" />
        {/* Nose highlight */}
        <circle cx="117" cy="115.5" r="1.5" fill="white" opacity="0.22" />

        {/* ── MOUTH ───────────────────────────────────────────── */}
        {/* Upper lip — static */}
        <path d="M 113,121 L 120,119 L 127,121 Z" fill="#047857" />
        {/* Lower lip — drops when speaking (same nova-beak-talk mechanic: translateY 4px) */}
        <path
          d="M 113,121 Q 120,127 127,121"
          fill="#065F46"
          opacity="0.90"
          className={speaking ? 'nova-beak-talk' : ''}
          style={{ transformOrigin: '120px 121px' }}
        />
        {/* Lip highlight */}
        <path d="M 114,121 L 120,119 L 126,121" fill="none"
          stroke="#34D399" strokeWidth="0.65" opacity="0.42" />

        {/* ── THINKING DOTS ───────────────────────────────────── */}
        {thinking && (
          <>
            <circle cx="104" cy="52" r="3.5" fill="#34D399" filter="url(#sg-glow-sm)"
              className="nova-dot-1" style={{ transformOrigin: '104px 52px' }} />
            <circle cx="120" cy="44" r="3.5" fill="#34D399" filter="url(#sg-glow-sm)"
              className="nova-dot-2" style={{ transformOrigin: '120px 44px' }} />
            <circle cx="136" cy="52" r="3.5" fill="#34D399" filter="url(#sg-glow-sm)"
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
