// Sage — animated mystical SVG deer character
// ViewBox: 240×240  |  Default render: 300px
// Inner World & Consciousness — emerald / forest green palette
//
// Anatomy (top → bottom):
//   Antlers  y=5–58   |  Ears extend to x=42/198
//   Head oval  cx=120 cy=95 rx=33 ry=44  (tall narrow teardrop)
//   Eyes  oval, wide-set, cy=86
//   Snout  cx=120 cy=136 rx=18 ry=13  (protrudes below head)
//   Neck  y=138–168
//   Body  cx=120 cy=197 rx=36 ry=38
//   4 slender legs  y=225–260 (overflow: visible)

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

  // Pupils drift wide-set, matching deer eye placement
  const pupilDx    = thinking ? -2   : listening ? 1.5  : 0;
  const pupilDy    = thinking ? -2.5 : 0;
  // Softer head tilt — large ears exaggerate rotation
  const headTilt   = listening ? -10 : thinking ? 6 : 0;
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
        <radialGradient id="sg-aura" cx="50%" cy="40%" r="55%">
          <stop offset="0%"   stopColor="#059669" stopOpacity="0" />
          <stop offset="32%"  stopColor="#059669" stopOpacity="0.20" />
          <stop offset="58%"  stopColor="#34D399" stopOpacity="0.28" />
          <stop offset="80%"  stopColor="#064E3B" stopOpacity="0.24" />
          <stop offset="100%" stopColor="#F59E0B" stopOpacity="0.08" />
        </radialGradient>
        <radialGradient id="sg-aura-gold" cx="50%" cy="48%" r="50%">
          <stop offset="0%"   stopColor="#F59E0B" stopOpacity="0" />
          <stop offset="60%"  stopColor="#D97706" stopOpacity="0.07" />
          <stop offset="100%" stopColor="#FCD34D" stopOpacity="0.13" />
        </radialGradient>

        {/* Head — dark forest green, lighter highlight top-left */}
        <radialGradient id="sg-head" cx="32%" cy="22%" r="68%">
          <stop offset="0%"   stopColor="#065F46" />
          <stop offset="48%"  stopColor="#047857" />
          <stop offset="82%"  stopColor="#033728" />
          <stop offset="100%" stopColor="#022c22" />
        </radialGradient>

        {/* Snout — noticeably lighter to read as a separate plane */}
        <radialGradient id="sg-snout" cx="35%" cy="28%" r="72%">
          <stop offset="0%"   stopColor="#6EE7B7" />
          <stop offset="45%"  stopColor="#34D399" />
          <stop offset="100%" stopColor="#10B981" />
        </radialGradient>

        {/* Body */}
        <radialGradient id="sg-body" cx="34%" cy="22%" r="72%">
          <stop offset="0%"   stopColor="#065F46" />
          <stop offset="42%"  stopColor="#047857" />
          <stop offset="78%"  stopColor="#022c22" />
          <stop offset="100%" stopColor="#011a14" />
        </radialGradient>
        <linearGradient id="sg-sheen" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%"   stopColor="#10B981" stopOpacity="0.09" />
          <stop offset="55%"  stopColor="#059669" stopOpacity="0.04" />
          <stop offset="100%" stopColor="#34D399" stopOpacity="0.07" />
        </linearGradient>

        {/* Belly — lighter warm green */}
        <radialGradient id="sg-belly" cx="32%" cy="20%" r="74%">
          <stop offset="0%"   stopColor="#10B981" />
          <stop offset="55%"  stopColor="#059669" />
          <stop offset="100%" stopColor="#047857" />
        </radialGradient>

        {/* Eyes — green iris */}
        <radialGradient id="sg-iris" cx="28%" cy="22%" r="74%">
          <stop offset="0%"   stopColor="#bbf7d0" />
          <stop offset="38%"  stopColor="#34D399" />
          <stop offset="100%" stopColor="#065F46" />
        </radialGradient>

        {/* Antlers — amber → gold toward tips */}
        <linearGradient id="sg-antler-l" x1="92" y1="58" x2="60" y2="4" gradientUnits="userSpaceOnUse">
          <stop offset="0%"   stopColor="#78350f" />
          <stop offset="30%"  stopColor="#b45309" />
          <stop offset="65%"  stopColor="#D97706" />
          <stop offset="100%" stopColor="#FCD34D" />
        </linearGradient>
        <linearGradient id="sg-antler-r" x1="148" y1="58" x2="180" y2="4" gradientUnits="userSpaceOnUse">
          <stop offset="0%"   stopColor="#78350f" />
          <stop offset="30%"  stopColor="#b45309" />
          <stop offset="65%"  stopColor="#D97706" />
          <stop offset="100%" stopColor="#FCD34D" />
        </linearGradient>

        {/* Legs */}
        <linearGradient id="sg-leg" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%"   stopColor="#065F46" />
          <stop offset="100%" stopColor="#033728" />
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
          <feGaussianBlur stdDeviation="3.5" result="blur" />
          <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
        <filter id="sg-glow-lg" x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="18" />
        </filter>
        <filter id="sg-glow-leaf" x="-150%" y="-150%" width="400%" height="400%">
          <feGaussianBlur stdDeviation="9" result="blur" />
          <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
      </defs>

      {/* ═══════════════════════════════════════════════════════ */}
      {/* LAYER 1 — Aura / energy field                         */}
      {/* ═══════════════════════════════════════════════════════ */}
      <circle cx="120" cy="120" r="118"
        fill="url(#sg-aura-gold)" filter="url(#sg-glow-lg)"
        style={{ animation: 'nova-aura-breathe 5.8s ease-in-out 1.1s infinite', transformOrigin: '120px 120px' }} />
      <circle cx="120" cy="112" r="104"
        fill="url(#sg-aura)" filter="url(#sg-glow-lg)"
        style={{ animation: 'nova-aura-breathe 4.5s ease-in-out infinite', transformOrigin: '120px 112px' }} />
      <ellipse cx="120" cy="148" rx="72" ry="82"
        fill="none" stroke="#059669" strokeWidth="5" opacity="0.14"
        filter="url(#sg-glow-md)"
        style={{ animation: 'nova-aura-breathe 3.8s ease-in-out 0.4s infinite', transformOrigin: '120px 148px' }} />

      {/* ═══════════════════════════════════════════════════════ */}
      {/* LAYER 2 — Sacred geometry                             */}
      {/* ═══════════════════════════════════════════════════════ */}
      <g stroke="#34D399" strokeWidth="0.45" fill="none" opacity="0.06">
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
      {/* LAYER 3 — Forest leaves + leaf cluster                 */}
      {/* ═══════════════════════════════════════════════════════ */}

      {/* Small leaf — upper right */}
      <g style={{ animation: 'nova-moon-glow 4.5s ease-in-out infinite', transformOrigin: '210px 36px' }}>
        <ellipse cx="210" cy="36" rx="15" ry="10" fill="#10B981" opacity="0.10" filter="url(#sg-glow-md)" />
        <path d="M 210,50 C 196,44 194,22 210,18 C 226,22 224,44 210,50 Z"
          fill="#10B981" opacity="0.70" filter="url(#sg-glow-sm)" />
        <path d="M 210,50 L 210,18" stroke="#34D399" strokeWidth="0.9" opacity="0.60" strokeLinecap="round" />
        <path d="M 210,40 Q 203,36 199,28" stroke="#34D399" strokeWidth="0.5" opacity="0.38" strokeLinecap="round" />
        <path d="M 210,40 Q 217,36 221,28" stroke="#34D399" strokeWidth="0.5" opacity="0.38" strokeLinecap="round" />
        <path d="M 210,32 Q 205,28 202,22" stroke="#34D399" strokeWidth="0.38" opacity="0.26" strokeLinecap="round" />
        <path d="M 210,32 Q 215,28 218,22" stroke="#34D399" strokeWidth="0.38" opacity="0.26" strokeLinecap="round" />
        <circle cx="210" cy="18" r="2" fill="white" opacity="0.62" />
      </g>

      {/* Large leaf — lower right */}
      <g style={{ animation: 'nova-moon-glow 3.6s ease-in-out 0.6s infinite', transformOrigin: '218px 162px' }}>
        <ellipse cx="218" cy="162" rx="32" ry="28" fill="#10B981" opacity="0.04" filter="url(#sg-glow-lg)" />
        <ellipse cx="218" cy="162" rx="24" ry="20" fill="#34D399" opacity="0.06" filter="url(#sg-glow-leaf)" />
        <path d="M 218,194 C 194,182 188,136 218,126 C 248,136 242,182 218,194 Z"
          fill="#10B981" opacity="0.86" filter="url(#sg-glow-leaf)" />
        <path d="M 218,194 L 218,126" stroke="#34D399" strokeWidth="1.8" opacity="0.55" strokeLinecap="round" />
        <path d="M 218,158 Q 206,150 198,138" stroke="#34D399" strokeWidth="1.0" opacity="0.36" strokeLinecap="round" />
        <path d="M 218,158 Q 230,150 238,138" stroke="#34D399" strokeWidth="1.0" opacity="0.36" strokeLinecap="round" />
        <path d="M 218,174 Q 208,167 202,156" stroke="#34D399" strokeWidth="0.7" opacity="0.26" strokeLinecap="round" />
        <path d="M 218,174 Q 228,167 234,156" stroke="#34D399" strokeWidth="0.7" opacity="0.26" strokeLinecap="round" />
        <circle cx="218" cy="126" r="2.2" fill="white" opacity="0.68" />
        <circle cx="218" cy="194" r="1.8" fill="#34D399" opacity="0.50" />
      </g>

      {/* Leaf cluster — upper right (replaces constellation) */}
      <g opacity="0.52">
        <path d="M 180,66 Q 190,58 200,64" stroke="#34D399" strokeWidth="0.6" opacity="0.50" strokeLinecap="round" />
        <path d="M 200,64 Q 207,54 212,62" stroke="#34D399" strokeWidth="0.5" opacity="0.45" strokeLinecap="round" />
        <path d="M 180,66 C 174,57 178,46 188,50 C 190,58 185,68 180,66 Z"
          fill="#34D399" opacity="0.60" filter="url(#sg-glow-sm)" />
        <path d="M 200,64 C 193,54 198,43 208,48 C 210,55 206,66 200,64 Z"
          fill="#34D399" opacity="0.50" filter="url(#sg-glow-sm)" />
        <circle cx="180" cy="66" r="1.8" fill="#34D399" filter="url(#sg-glow-sm)" />
        <circle cx="200" cy="64" r="2.2" fill="#34D399" filter="url(#sg-glow-sm)" />
        <circle cx="212" cy="62" r="1.6" fill="#34D399" filter="url(#sg-glow-sm)" />
      </g>

      {/* ═══════════════════════════════════════════════════════ */}
      {/* LAYER 4 — Forest dust + sparkles                       */}
      {/* ═══════════════════════════════════════════════════════ */}
      <Dust cx={16}  cy={42}  r={1.6} delay={0.0} celebrating={celebrating} />
      <Dust cx={8}   cy={88}  r={1.2} delay={0.5} celebrating={celebrating} />
      <Dust cx={22}  cy={135} r={1.8} delay={1.1} celebrating={celebrating} />
      <Dust cx={10}  cy={178} r={1.4} delay={0.3} celebrating={celebrating} />
      <Dust cx={36}  cy={215} r={2.0} delay={0.8} celebrating={celebrating} />
      <Dust cx={228} cy={38}  r={1.5} delay={0.4} celebrating={celebrating} />
      <Dust cx={235} cy={85}  r={1.2} delay={0.9} celebrating={celebrating} />
      <Dust cx={224} cy={132} r={1.8} delay={0.2} celebrating={celebrating} />
      <Dust cx={232} cy={182} r={1.4} delay={1.3} celebrating={celebrating} />
      <Dust cx={218} cy={220} r={2.0} delay={0.6} celebrating={celebrating} />
      <Dust cx={62}  cy={12}  r={1.6} delay={1.4} celebrating={celebrating} />
      <Dust cx={100} cy={8}   r={2.2} delay={0.7} celebrating={celebrating} />
      <Dust cx={148} cy={14}  r={1.5} delay={1.0} celebrating={celebrating} />
      <Dust cx={48}  cy={228} r={1.8} delay={0.4} celebrating={celebrating} />
      <Dust cx={120} cy={232} r={1.5} delay={1.1} celebrating={celebrating} />
      <Dust cx={182} cy={224} r={2.0} delay={0.8} celebrating={celebrating} />
      <Sparkle cx={28}  cy={32}  r={3.2} delay={0}    celebrating={celebrating} />
      <Sparkle cx={212} cy={20}  r={2.8} delay={0.45} celebrating={celebrating} />
      <Sparkle cx={14}  cy={160} r={2.4} delay={0.9}  celebrating={celebrating} />
      <Sparkle cx={228} cy={148} r={2.8} delay={0.2}  celebrating={celebrating} />
      <Sparkle cx={74}  cy={220} r={2.4} delay={1.2}  celebrating={celebrating} />
      <Sparkle cx={168} cy={228} r={2.8} delay={0.65} celebrating={celebrating} />

      {/* ═══════════════════════════════════════════════════════ */}
      {/* LAYER 5 — Floating orbs                               */}
      {/* ═══════════════════════════════════════════════════════ */}
      <g transform="translate(28,124)">
        <g style={{ animation: 'nova-orb-drift-1 9s ease-in-out infinite', transformOrigin: '0px 0px' }}>
          <circle cx="0" cy="0" r="5.5" fill="#34D399" filter="url(#sg-glow-md)" opacity="0.45" />
          <circle cx="0" cy="0" r="2.2" fill="white"   opacity="0.55" />
        </g>
      </g>
      <g transform="translate(212,104)">
        <g style={{ animation: 'nova-orb-drift-2 11s ease-in-out infinite', transformOrigin: '0px 0px' }}>
          <circle cx="0" cy="0" r="4.5" fill="#10B981" filter="url(#sg-glow-md)" opacity="0.40" />
          <circle cx="0" cy="0" r="1.8" fill="white"   opacity="0.5" />
        </g>
      </g>
      <g transform="translate(32,204)">
        <g style={{ animation: 'nova-orb-drift-3 8s ease-in-out infinite', transformOrigin: '0px 0px' }}>
          <circle cx="0" cy="0" r="4"   fill="#059669" filter="url(#sg-glow-md)" opacity="0.5" />
          <circle cx="0" cy="0" r="1.6" fill="white"   opacity="0.45" />
        </g>
      </g>
      <g transform="translate(208,192)">
        <g style={{ animation: 'nova-orb-drift-4 10s ease-in-out infinite', transformOrigin: '0px 0px' }}>
          <circle cx="0" cy="0" r="4.5" fill="#F59E0B" filter="url(#sg-glow-md)" opacity="0.28" />
          <circle cx="0" cy="0" r="1.8" fill="white"   opacity="0.5" />
        </g>
      </g>

      {/* ═══════════════════════════════════════════════════════ */}
      {/* LAYER 6 — Body + neck + 4 legs (bobs when speaking)   */}
      {/* ═══════════════════════════════════════════════════════ */}
      <g className={speaking ? 'nova-char-bob' : ''} style={{ transformOrigin: '120px 197px' }}>

        {/* Energy shimmer rings */}
        <ellipse cx="120" cy="190" rx="58" ry="60" fill="none"
          stroke="#34D399" strokeWidth="1"
          style={{ animation: 'nova-shimmer-ring 3.8s ease-in-out 0s infinite' }} />
        <ellipse cx="120" cy="190" rx="48" ry="50" fill="none"
          stroke="#34D399" strokeWidth="0.6"
          style={{ animation: 'nova-shimmer-ring 3.8s ease-in-out -1.3s infinite' }} />
        <ellipse cx="120" cy="190" rx="38" ry="40" fill="none"
          stroke="#059669" strokeWidth="0.4"
          style={{ animation: 'nova-shimmer-ring 3.8s ease-in-out -2.5s infinite' }} />

        {/* Neck — visible bridge between head and body */}
        <path d="M 108,138 C 106,155 106,163 111,170 Q 120,174 129,170 C 134,163 134,155 132,138"
          fill="url(#sg-body)" />
        {/* Neck sheen */}
        <path d="M 110,140 C 108,154 108,160 112,168 Q 120,172 128,168 C 132,160 132,154 130,140"
          fill="url(#sg-sheen)" />

        {/* Body */}
        <ellipse cx="120" cy="197" rx="36" ry="38" fill="url(#sg-body)" />
        <ellipse cx="120" cy="197" rx="36" ry="38" fill="url(#sg-sheen)" />

        {/* Belly */}
        <ellipse cx="120" cy="203" rx="23" ry="27" fill="url(#sg-belly)" />
        {/* Belly arc texture */}
        <ellipse cx="120" cy="201" rx="15" ry="18" fill="none" stroke="#34D399" strokeWidth="0.6" opacity="0.20" />
        <ellipse cx="120" cy="201" rx="8"  ry="10" fill="none" stroke="#34D399" strokeWidth="0.6" opacity="0.14" />

        {/* ── 4 slender legs ─────────────────────────────────── */}
        {/* Front-left */}
        <path d="M 108,228 C 106,238 105,246 104,256"
          stroke="#065F46" strokeWidth="10" strokeLinecap="round" fill="none" />
        <path d="M 109,228 C 107,238 106,246 105,256"
          stroke="#10B981" strokeWidth="3" strokeLinecap="round" fill="none" opacity="0.22" />
        {/* Front-left hoof */}
        <path d="M 104,256 L 100,265 M 104,256 L 108,265"
          stroke="#022c22" strokeWidth="4" strokeLinecap="round" />

        {/* Front-right */}
        <path d="M 132,228 C 134,238 135,246 136,256"
          stroke="#065F46" strokeWidth="10" strokeLinecap="round" fill="none" />
        <path d="M 131,228 C 133,238 134,246 135,256"
          stroke="#10B981" strokeWidth="3" strokeLinecap="round" fill="none" opacity="0.22" />
        {/* Front-right hoof */}
        <path d="M 136,256 L 132,265 M 136,256 L 140,265"
          stroke="#022c22" strokeWidth="4" strokeLinecap="round" />

        {/* Back-left — set slightly wider and further back */}
        <path d="M 98,230 C 94,240 92,250 91,258"
          stroke="#065F46" strokeWidth="9" strokeLinecap="round" fill="none" />
        <path d="M 99,230 C 95,240 93,250 92,258"
          stroke="#10B981" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.20" />
        {/* Back-left hoof */}
        <path d="M 91,258 L 87,266 M 91,258 L 95,266"
          stroke="#022c22" strokeWidth="3.5" strokeLinecap="round" />

        {/* Back-right */}
        <path d="M 142,230 C 146,240 148,250 149,258"
          stroke="#065F46" strokeWidth="9" strokeLinecap="round" fill="none" />
        <path d="M 141,230 C 145,240 147,250 148,258"
          stroke="#10B981" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.20" />
        {/* Back-right hoof */}
        <path d="M 149,258 L 145,266 M 149,258 L 153,266"
          stroke="#022c22" strokeWidth="3.5" strokeLinecap="round" />
      </g>

      {/* ═══════════════════════════════════════════════════════ */}
      {/* LAYER 7 — Head group (tilts for listening / thinking)  */}
      {/* ═══════════════════════════════════════════════════════ */}
      <g style={{ transform: `rotate(${headTilt}deg)`, transformOrigin: '120px 148px', transition: headSpring }}>

        {/* Energy ring around head */}
        <ellipse cx="120" cy="95" rx="44" ry="54" fill="none"
          stroke="#34D399" strokeWidth="0.55"
          style={{ animation: 'nova-shimmer-ring 4.2s ease-in-out -0.9s infinite', opacity: 0.16 }} />

        {/* ── LEFT ANTLER (before head — base hidden behind skull) */}
        <g style={{
          transformOrigin: '91px 57px',
          transform: listening ? 'rotate(-5deg) scaleY(1.05)' : 'rotate(0deg) scaleY(1)',
          transition: headSpring,
        }}>
          {/* Main beam sweeps up-left */}
          <path d="M 93,58 C 90,44 86,28 82,10"
            stroke="url(#sg-antler-l)" strokeWidth="4.5" strokeLinecap="round" fill="none" />
          {/* Brow tine — lowest branch, points forward-left */}
          <path d="M 90,46 Q 74,38 62,30"
            stroke="url(#sg-antler-l)" strokeWidth="3.0" strokeLinecap="round" fill="none" />
          {/* Bay tine — middle branch, points up-left */}
          <path d="M 86,34 Q 72,26 64,16"
            stroke="url(#sg-antler-l)" strokeWidth="2.4" strokeLinecap="round" fill="none" />
          {/* Tray tine — upper branch, points right-up */}
          <path d="M 84,24 Q 90,14 94,5"
            stroke="url(#sg-antler-l)" strokeWidth="2.0" strokeLinecap="round" fill="none" />
          {/* Main tip — continues upper-left */}
          <path d="M 82,16 L 76,5"
            stroke="url(#sg-antler-l)" strokeWidth="1.6" strokeLinecap="round" fill="none" />
          {/* Crown fork from main tip */}
          <path d="M 82,10 Q 70,6 66,0"
            stroke="url(#sg-antler-l)" strokeWidth="1.3" strokeLinecap="round" fill="none" />
          {/* Glowing tips */}
          <circle cx="76"  cy="5"  r="2.5" fill="#FCD34D" opacity="0.72" filter="url(#sg-glow-sm)" />
          <circle cx="66"  cy="0"  r="2.0" fill="#F59E0B"  opacity="0.58" filter="url(#sg-glow-sm)" />
          <circle cx="94"  cy="5"  r="2.0" fill="#F59E0B"  opacity="0.55" filter="url(#sg-glow-sm)" />
          <circle cx="62"  cy="30" r="1.8" fill="#F59E0B"  opacity="0.45" filter="url(#sg-glow-sm)" />
          <circle cx="64"  cy="16" r="1.6" fill="#D97706"  opacity="0.40" filter="url(#sg-glow-sm)" />
        </g>

        {/* ── RIGHT ANTLER */}
        <g style={{
          transformOrigin: '149px 57px',
          transform: listening ? 'rotate(5deg) scaleY(1.05)' : 'rotate(0deg) scaleY(1)',
          transition: headSpring,
        }}>
          {/* Main beam */}
          <path d="M 147,58 C 150,44 154,28 158,10"
            stroke="url(#sg-antler-r)" strokeWidth="4.5" strokeLinecap="round" fill="none" />
          {/* Brow tine */}
          <path d="M 150,46 Q 166,38 178,30"
            stroke="url(#sg-antler-r)" strokeWidth="3.0" strokeLinecap="round" fill="none" />
          {/* Bay tine */}
          <path d="M 154,34 Q 168,26 176,16"
            stroke="url(#sg-antler-r)" strokeWidth="2.4" strokeLinecap="round" fill="none" />
          {/* Tray tine */}
          <path d="M 156,24 Q 150,14 146,5"
            stroke="url(#sg-antler-r)" strokeWidth="2.0" strokeLinecap="round" fill="none" />
          {/* Main tip */}
          <path d="M 158,16 L 164,5"
            stroke="url(#sg-antler-r)" strokeWidth="1.6" strokeLinecap="round" fill="none" />
          {/* Crown fork */}
          <path d="M 158,10 Q 170,6 174,0"
            stroke="url(#sg-antler-r)" strokeWidth="1.3" strokeLinecap="round" fill="none" />
          <circle cx="164" cy="5"  r="2.5" fill="#FCD34D" opacity="0.72" filter="url(#sg-glow-sm)" />
          <circle cx="174" cy="0"  r="2.0" fill="#F59E0B"  opacity="0.58" filter="url(#sg-glow-sm)" />
          <circle cx="146" cy="5"  r="2.0" fill="#F59E0B"  opacity="0.55" filter="url(#sg-glow-sm)" />
          <circle cx="178" cy="30" r="1.8" fill="#F59E0B"  opacity="0.45" filter="url(#sg-glow-sm)" />
          <circle cx="176" cy="16" r="1.6" fill="#D97706"  opacity="0.40" filter="url(#sg-glow-sm)" />
        </g>

        {/* ── LEFT EAR — large leaf-shaped, 45° upper-left ─── */}
        <g style={{
          transformOrigin: '88px 84px',
          transform: listening ? 'rotate(-8deg) translateY(-3px)' : 'rotate(0deg) translateY(0px)',
          transition: headSpring,
        }}>
          {/* Outer ear — large and rounded */}
          <path d="M 88,86 C 68,84 44,68 42,50 C 40,32 66,36 88,56 C 91,68 90,80 88,86 Z"
            fill="#064E3B" />
          {/* Mid layer */}
          <path d="M 86,82 C 68,80 48,66 48,50 C 48,36 70,40 88,58 C 90,68 88,78 86,82 Z"
            fill="#065F46" opacity="0.70" />
          {/* Inner ear — warm lighter tint */}
          <path d="M 84,78 C 68,76 54,64 54,50 C 54,38 72,42 86,60 C 87,68 86,75 84,78 Z"
            fill="#10B981" opacity="0.28" />
          {/* Ear tip glow */}
          <circle cx="42" cy="50" r="6"   fill="#059669" opacity="0.28" filter="url(#sg-glow-md)" />
          <circle cx="42" cy="50" r="2.5" fill="#34D399"  opacity="0.50" />
        </g>

        {/* ── RIGHT EAR — mirror */}
        <g style={{
          transformOrigin: '152px 84px',
          transform: listening ? 'rotate(8deg) translateY(-3px)' : 'rotate(0deg) translateY(0px)',
          transition: headSpring,
        }}>
          <path d="M 152,86 C 172,84 196,68 198,50 C 200,32 174,36 152,56 C 149,68 150,80 152,86 Z"
            fill="#064E3B" />
          <path d="M 154,82 C 172,80 192,66 192,50 C 192,36 170,40 152,58 C 150,68 152,78 154,82 Z"
            fill="#065F46" opacity="0.70" />
          <path d="M 156,78 C 172,76 186,64 186,50 C 186,38 168,42 154,60 C 153,68 154,75 156,78 Z"
            fill="#10B981" opacity="0.28" />
          <circle cx="198" cy="50" r="6"   fill="#059669" opacity="0.28" filter="url(#sg-glow-md)" />
          <circle cx="198" cy="50" r="2.5" fill="#34D399"  opacity="0.50" />
        </g>

        {/* ── HEAD — elongated oval / teardrop ─────────────── */}
        {/* Main head — tall oval, narrower than Nova's circle */}
        <ellipse cx="120" cy="95" rx="33" ry="44" fill="url(#sg-body)" />
        <ellipse cx="120" cy="95" rx="33" ry="44" fill="url(#sg-sheen)" />

        {/* Facial blaze — lighter centre-line, deer-typical */}
        <ellipse cx="120" cy="108" rx="16" ry="26" fill="#10B981" opacity="0.11" />

        {/* ── SNOUT — protrudes below head oval, lighter plane */}
        {/* Glow behind snout */}
        <ellipse cx="120" cy="136" rx="22" ry="17" fill="#059669" opacity="0.18" filter="url(#sg-glow-md)" />
        {/* Snout body */}
        <ellipse cx="120" cy="136" rx="18" ry="13" fill="url(#sg-snout)" />
        {/* Snout highlight */}
        <ellipse cx="116" cy="131" rx="7"  ry="5"  fill="white" opacity="0.10" />

        {/* ── LEFT EYE — almond oval, set wide on face ────── */}
        {/* Outer glow ring */}
        <ellipse cx="101" cy="86" rx="17" ry="13" fill="none" stroke="#10B981" strokeWidth="1.4"
          opacity="0.30" filter="url(#sg-glow-sm)" />
        {/* Sclera (white) — faint green tint */}
        <ellipse cx="101" cy="86" rx="13" ry="10" fill="#f0fdf4" />
        {/* Iris */}
        <ellipse cx="101" cy="86" rx="9"  ry="7"  fill="url(#sg-iris)" filter="url(#sg-glow-eye)" />
        {/* Gold accent ring */}
        <ellipse cx="101" cy="86" rx="6.5" ry="5" fill="none" stroke="#F59E0B" strokeWidth="0.6" opacity="0.38" />
        {/* Pupil group — oval pupil */}
        <g style={{
          transform: `translate(${pupilDx}px,${pupilDy}px)`,
          transformOrigin: '101px 86px',
          transition: 'transform 0.45s cubic-bezier(0.34,1.2,0.64,1)',
        }}>
          <ellipse cx="101" cy="86" rx="5.0" ry="4.0" fill="#011a14" />
          <ellipse cx="101" cy="86" rx="2.0" ry="1.6" fill="white" opacity="0.14" filter="url(#sg-glow-sm)" />
          {/* Main catchlight */}
          <circle cx="97" cy="83" r="2.8" fill="white" opacity="0.95" />
          {/* Secondary catchlight */}
          <circle cx="104" cy="89" r="1.4" fill="white" opacity="0.50" />
          <circle cx="105" cy="83" r="1.0" fill="#F59E0B" opacity="0.45" />
        </g>
        {/* Eyelid — oval, same colour as head surface */}
        <ellipse cx="101" cy="86" rx="13" ry="10" fill="#033728"
          className="nova-eyelid" style={{ transformOrigin: '101px 86px' }} />

        {/* ── RIGHT EYE — mirror ───────────────────────────── */}
        <ellipse cx="139" cy="86" rx="17" ry="13" fill="none" stroke="#10B981" strokeWidth="1.4"
          opacity="0.30" filter="url(#sg-glow-sm)" />
        <ellipse cx="139" cy="86" rx="13" ry="10" fill="#f0fdf4" />
        <ellipse cx="139" cy="86" rx="9"  ry="7"  fill="url(#sg-iris)" filter="url(#sg-glow-eye)" />
        <ellipse cx="139" cy="86" rx="6.5" ry="5" fill="none" stroke="#F59E0B" strokeWidth="0.6" opacity="0.38" />
        <g style={{
          transform: `translate(${pupilDx}px,${pupilDy}px)`,
          transformOrigin: '139px 86px',
          transition: 'transform 0.45s cubic-bezier(0.34,1.2,0.64,1)',
        }}>
          <ellipse cx="139" cy="86" rx="5.0" ry="4.0" fill="#011a14" />
          <ellipse cx="139" cy="86" rx="2.0" ry="1.6" fill="white" opacity="0.14" filter="url(#sg-glow-sm)" />
          <circle cx="135" cy="83" r="2.8" fill="white" opacity="0.95" />
          <circle cx="142" cy="89" r="1.4" fill="white" opacity="0.50" />
          <circle cx="143" cy="83" r="1.0" fill="#F59E0B" opacity="0.45" />
        </g>
        <ellipse cx="139" cy="86" rx="13" ry="10" fill="#033728"
          className="nova-eyelid nova-eyelid-r" style={{ transformOrigin: '139px 86px' }} />

        {/* ── THIRD EYE GEM — forehead, between eyes ────────── */}
        <circle cx="120" cy="68" r="9"   fill="#7C3AED" opacity="0.16" filter="url(#sg-glow-md)" />
        <circle cx="120" cy="68" r="4.8" fill="#7C3AED" opacity="0.85"
          style={{ animation: 'nova-aura-breathe 2.6s ease-in-out infinite', transformOrigin: '120px 68px' }} />
        <circle cx="120" cy="68" r="2.8" fill="#A78BFA" />
        <circle cx="118" cy="66" r="1.4" fill="white" opacity="0.92" />

        {/* ── NOSE — small dark oval at snout tip ───────────── */}
        <ellipse cx="120" cy="142" rx="5.5" ry="4" fill="#022c22" />
        <ellipse cx="118" cy="140" rx="2"   ry="1.5" fill="white" opacity="0.20" />

        {/* ── MOUTH — below nose, same lip-sync mechanic as Nova */}
        {/* Upper lip — static */}
        <path d="M 113,146 L 120,144 L 127,146 Z" fill="#047857" />
        {/* Lower lip — translateY(4px) at 0.32s when speaking */}
        <path
          d="M 113,146 Q 120,152 127,146"
          fill="#065F46"
          opacity="0.90"
          className={speaking ? 'nova-beak-talk' : ''}
          style={{ transformOrigin: '120px 146px' }}
        />
        {/* Lip highlight */}
        <path d="M 114,146 L 120,144 L 126,146"
          fill="none" stroke="#34D399" strokeWidth="0.6" opacity="0.40" />

        {/* ── THINKING DOTS — float above antler crown ──────── */}
        {thinking && (
          <>
            <circle cx="104" cy="10" r="3.5" fill="#34D399" filter="url(#sg-glow-sm)"
              className="nova-dot-1" style={{ transformOrigin: '104px 10px' }} />
            <circle cx="120" cy="2"  r="3.5" fill="#34D399" filter="url(#sg-glow-sm)"
              className="nova-dot-2" style={{ transformOrigin: '120px 2px' }} />
            <circle cx="136" cy="10" r="3.5" fill="#34D399" filter="url(#sg-glow-sm)"
              className="nova-dot-3" style={{ transformOrigin: '136px 10px' }} />
          </>
        )}
      </g>

      {/* ═══════════════════════════════════════════════════════ */}
      {/* LAYER 8 — Celebrating extra burst sparkles            */}
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
