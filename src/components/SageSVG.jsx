// Sage — animated mystical deer guide (portrait bust)
// ViewBox: 240×240  |  Default render: 300px  |  overflow: visible
// Inner World & Consciousness — deep emerald / forest green palette
//
// Portrait layout (top → bottom):
//   Antler tips  y ≈ -40  (overflow above viewBox)
//   Ears tip at  x=40 / x=200
//   Head oval    cx=120 cy=116  rx=34 ry=42
//   Neck         y=158–196
//   Chest/bust   cx=120 cy=215  rx=58 ry=52
//   Lotus cluster y≈226–240 (overflow bottom)

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
        <line x1={-r * 0.7} y1={-r * 0.7} x2={r * 0.7} y2={r * 0.7} stroke="#34D399" strokeWidth={r * 0.3} strokeLinecap="round" />
        <line x1={r * 0.7} y1={-r * 0.7} x2={-r * 0.7} y2={r * 0.7} stroke="#34D399" strokeWidth={r * 0.3} strokeLinecap="round" />
        <circle cx="0" cy="0" r={r * 0.28} fill="white" opacity="0.85" />
      </g>
    </g>
  );
}

// Lotus flower petal ring helper
function LotusFlower({ cx, cy, outerR = 14, petalCount = 9, opacity = 0.75 }) {
  const angles = Array.from({ length: petalCount }, (_, i) => (i / petalCount) * 360);
  return (
    <g>
      {angles.map((deg, i) => {
        const rad = (deg * Math.PI) / 180;
        const px = cx + Math.sin(rad) * outerR * 0.58;
        const py = cy - Math.cos(rad) * outerR * 0.58;
        return (
          <ellipse
            key={i}
            cx={px} cy={py}
            rx={outerR * 0.24} ry={outerR * 0.56}
            fill="#10B981"
            opacity={opacity * 0.72}
            transform={`rotate(${deg}, ${px}, ${py})`}
          />
        );
      })}
      {/* Inner petals */}
      {[0, 60, 120, 180, 240, 300].map((deg, i) => {
        const rad = (deg * Math.PI) / 180;
        const px = cx + Math.sin(rad) * outerR * 0.28;
        const py = cy - Math.cos(rad) * outerR * 0.28;
        return (
          <ellipse
            key={i}
            cx={px} cy={py}
            rx={outerR * 0.18} ry={outerR * 0.38}
            fill="#34D399"
            opacity={opacity}
            transform={`rotate(${deg}, ${px}, ${py})`}
          />
        );
      })}
      <circle cx={cx} cy={cy} r={outerR * 0.22} fill="#6EE7B7" opacity={opacity} />
      <circle cx={cx} cy={cy} r={outerR * 0.10} fill="white" opacity={opacity * 0.85} />
    </g>
  );
}

export default function SageSVG({ state = 'idle', size = 300 }) {
  const speaking    = state === 'speaking';
  const listening   = state === 'listening';
  const thinking    = state === 'thinking';
  const celebrating = state === 'celebrating';

  // Pupil drift — default +1 gives serene downward gaze
  const pupilDx = thinking ? -2 : listening ? 1.5 : 0;
  const pupilDy = thinking ? -2.5 : listening ? 0 : 1;

  // Softer head tilt — large antlers make rotation feel amplified
  const headTilt   = listening ? -8 : thinking ? 5 : 0;
  const headSpring = 'transform 0.55s cubic-bezier(0.34,1.56,0.64,1)';

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 240 240"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ overflow: 'visible' }}
    >
      <defs>
        {/* ── Gradients ────────────────────────────────────────── */}

        {/* Aura glow — emerald */}
        <radialGradient id="sg-aura" cx="50%" cy="40%" r="55%">
          <stop offset="0%"   stopColor="#059669" stopOpacity="0" />
          <stop offset="32%"  stopColor="#059669" stopOpacity="0.22" />
          <stop offset="58%"  stopColor="#34D399" stopOpacity="0.30" />
          <stop offset="80%"  stopColor="#064E3B" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#F59E0B" stopOpacity="0.08" />
        </radialGradient>
        <radialGradient id="sg-aura-gold" cx="50%" cy="48%" r="50%">
          <stop offset="0%"   stopColor="#F59E0B" stopOpacity="0" />
          <stop offset="60%"  stopColor="#D97706" stopOpacity="0.07" />
          <stop offset="100%" stopColor="#FCD34D" stopOpacity="0.14" />
        </radialGradient>

        {/* Head — deep forest, lighter at highlight */}
        <radialGradient id="sg-head" cx="32%" cy="22%" r="68%">
          <stop offset="0%"   stopColor="#065F46" />
          <stop offset="46%"  stopColor="#047857" />
          <stop offset="82%"  stopColor="#033728" />
          <stop offset="100%" stopColor="#022c22" />
        </radialGradient>

        {/* Snout — noticeably lighter, reads as separate plane */}
        <radialGradient id="sg-snout" cx="35%" cy="28%" r="72%">
          <stop offset="0%"   stopColor="#6EE7B7" />
          <stop offset="45%"  stopColor="#34D399" />
          <stop offset="100%" stopColor="#10B981" />
        </radialGradient>

        {/* Neck */}
        <linearGradient id="sg-neck" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%"   stopColor="#047857" />
          <stop offset="55%"  stopColor="#065F46" />
          <stop offset="100%" stopColor="#033728" />
        </linearGradient>

        {/* Chest / bust */}
        <radialGradient id="sg-body" cx="34%" cy="22%" r="72%">
          <stop offset="0%"   stopColor="#065F46" />
          <stop offset="42%"  stopColor="#047857" />
          <stop offset="78%"  stopColor="#022c22" />
          <stop offset="100%" stopColor="#011a14" />
        </radialGradient>

        {/* Chest highlight (lighter front) */}
        <radialGradient id="sg-belly" cx="32%" cy="20%" r="74%">
          <stop offset="0%"   stopColor="#10B981" />
          <stop offset="55%"  stopColor="#059669" />
          <stop offset="100%" stopColor="#047857" />
        </radialGradient>

        {/* Eyes — luminous green iris */}
        <radialGradient id="sg-iris" cx="28%" cy="22%" r="74%">
          <stop offset="0%"   stopColor="#bbf7d0" />
          <stop offset="38%"  stopColor="#34D399" />
          <stop offset="100%" stopColor="#065F46" />
        </radialGradient>

        {/* Antlers — amber at base → bright gold at tips */}
        <linearGradient id="sg-antler-l" x1="96" y1="82" x2="65" y2="-38" gradientUnits="userSpaceOnUse">
          <stop offset="0%"   stopColor="#78350f" />
          <stop offset="25%"  stopColor="#b45309" />
          <stop offset="60%"  stopColor="#D97706" />
          <stop offset="100%" stopColor="#FCD34D" />
        </linearGradient>
        <linearGradient id="sg-antler-r" x1="144" y1="82" x2="175" y2="-38" gradientUnits="userSpaceOnUse">
          <stop offset="0%"   stopColor="#78350f" />
          <stop offset="25%"  stopColor="#b45309" />
          <stop offset="60%"  stopColor="#D97706" />
          <stop offset="100%" stopColor="#FCD34D" />
        </linearGradient>

        {/* ── Filters ──────────────────────────────────────────── */}
        <filter id="sg-glow-sm" x="-120%" y="-120%" width="340%" height="340%">
          <feGaussianBlur stdDeviation="2.5" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <filter id="sg-glow-md" x="-120%" y="-120%" width="340%" height="340%">
          <feGaussianBlur stdDeviation="6" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <filter id="sg-glow-eye" x="-100%" y="-100%" width="300%" height="300%">
          <feGaussianBlur stdDeviation="3.5" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <filter id="sg-glow-lg" x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="18" />
        </filter>
        <filter id="sg-glow-leaf" x="-150%" y="-150%" width="400%" height="400%">
          <feGaussianBlur stdDeviation="9" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>

      {/* ═══════════════════════════════════════════════════════ */}
      {/* LAYER 1 — Aura / energy field                         */}
      {/* ═══════════════════════════════════════════════════════ */}
      <circle cx="120" cy="120" r="118"
        fill="url(#sg-aura-gold)" filter="url(#sg-glow-lg)"
        style={{ animation: 'nova-aura-breathe 5.8s ease-in-out 1.1s infinite', transformOrigin: '120px 120px' }}
      />
      <circle cx="120" cy="112" r="104"
        fill="url(#sg-aura)" filter="url(#sg-glow-lg)"
        style={{ animation: 'nova-aura-breathe 4.5s ease-in-out infinite', transformOrigin: '120px 112px' }}
      />
      <ellipse cx="120" cy="150" rx="74" ry="84"
        fill="none" stroke="#059669" strokeWidth="5" opacity="0.13"
        filter="url(#sg-glow-md)"
        style={{ animation: 'nova-aura-breathe 3.8s ease-in-out 0.4s infinite', transformOrigin: '120px 150px' }}
      />

      {/* ═══════════════════════════════════════════════════════ */}
      {/* LAYER 2 — Sacred geometry                             */}
      {/* ═══════════════════════════════════════════════════════ */}
      <g stroke="#34D399" strokeWidth="0.45" fill="none" opacity="0.055">
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
      {/* LAYER 3 — Forest leaves                               */}
      {/* ═══════════════════════════════════════════════════════ */}

      {/* Small leaf — upper right */}
      <g style={{ animation: 'nova-moon-glow 4.5s ease-in-out infinite', transformOrigin: '210px 34px' }}>
        <path d="M 210,50 C 196,44 194,22 210,18 C 226,22 224,44 210,50 Z"
          fill="#10B981" opacity="0.68" filter="url(#sg-glow-sm)" />
        <path d="M 210,50 L 210,18" stroke="#34D399" strokeWidth="0.9" opacity="0.55" strokeLinecap="round" />
        <path d="M 210,38 Q 203,34 199,28" stroke="#34D399" strokeWidth="0.5" opacity="0.35" strokeLinecap="round" />
        <path d="M 210,38 Q 217,34 221,28" stroke="#34D399" strokeWidth="0.5" opacity="0.35" strokeLinecap="round" />
        <circle cx="210" cy="18" r="2" fill="white" opacity="0.60" />
      </g>

      {/* Large leaf — lower right */}
      <g style={{ animation: 'nova-moon-glow 3.6s ease-in-out 0.6s infinite', transformOrigin: '220px 162px' }}>
        <ellipse cx="220" cy="162" rx="26" ry="22" fill="#10B981" opacity="0.04" filter="url(#sg-glow-lg)" />
        <path d="M 220,194 C 196,182 190,136 220,126 C 250,136 244,182 220,194 Z"
          fill="#10B981" opacity="0.80" filter="url(#sg-glow-leaf)" />
        <path d="M 220,194 L 220,126" stroke="#34D399" strokeWidth="1.8" opacity="0.50" strokeLinecap="round" />
        <path d="M 220,160 Q 208,152 200,140" stroke="#34D399" strokeWidth="1.0" opacity="0.33" strokeLinecap="round" />
        <path d="M 220,160 Q 232,152 240,140" stroke="#34D399" strokeWidth="1.0" opacity="0.33" strokeLinecap="round" />
        <circle cx="220" cy="126" r="2.2" fill="white" opacity="0.65" />
      </g>

      {/* Small leaf cluster — upper right background */}
      <g opacity="0.48">
        <path d="M 188,58 C 182,48 186,36 196,40 C 198,48 193,60 188,58 Z"
          fill="#34D399" opacity="0.55" filter="url(#sg-glow-sm)" />
        <path d="M 204,52 C 197,42 202,30 212,35 C 214,42 210,54 204,52 Z"
          fill="#34D399" opacity="0.45" filter="url(#sg-glow-sm)" />
        <circle cx="188" cy="58" r="1.8" fill="#34D399" filter="url(#sg-glow-sm)" />
        <circle cx="204" cy="52" r="2.0" fill="#34D399" filter="url(#sg-glow-sm)" />
      </g>

      {/* ═══════════════════════════════════════════════════════ */}
      {/* LAYER 4 — Forest dust + sparkles                       */}
      {/* ═══════════════════════════════════════════════════════ */}
      <Dust cx={14}  cy={52}  r={1.6} delay={0.0} celebrating={celebrating} />
      <Dust cx={6}   cy={98}  r={1.2} delay={0.5} celebrating={celebrating} />
      <Dust cx={20}  cy={148} r={1.8} delay={1.1} celebrating={celebrating} />
      <Dust cx={8}   cy={196} r={1.4} delay={0.3} celebrating={celebrating} />
      <Dust cx={226} cy={50}  r={1.5} delay={0.4} celebrating={celebrating} />
      <Dust cx={234} cy={96}  r={1.2} delay={0.9} celebrating={celebrating} />
      <Dust cx={222} cy={144} r={1.8} delay={0.2} celebrating={celebrating} />
      <Dust cx={230} cy={194} r={1.4} delay={1.3} celebrating={celebrating} />
      <Sparkle cx={32}  cy={72}  r={4.5} delay={0.6} celebrating={celebrating} />
      <Sparkle cx={208} cy={66}  r={3.8} delay={1.2} celebrating={celebrating} />
      <Sparkle cx={22}  cy={170} r={3.5} delay={0.2} celebrating={celebrating} />
      <Sparkle cx={218} cy={174} r={4.2} delay={0.8} celebrating={celebrating} />

      {/* ═══════════════════════════════════════════════════════ */}
      {/* LAYER 5 — Lotus flowers (static, bottom)              */}
      {/* ═══════════════════════════════════════════════════════ */}
      <g filter="url(#sg-glow-sm)">
        {/* Central lotus */}
        <LotusFlower cx={120} cy={232} outerR={15} petalCount={9} opacity={0.82} />
        {/* Left lotus */}
        <LotusFlower cx={82}  cy={238} outerR={10} petalCount={7} opacity={0.60} />
        {/* Right lotus */}
        <LotusFlower cx={158} cy={238} outerR={10} petalCount={7} opacity={0.60} />
        {/* Far left — partial */}
        <LotusFlower cx={52}  cy={244} outerR={7}  petalCount={6} opacity={0.38} />
        {/* Far right — partial */}
        <LotusFlower cx={188} cy={244} outerR={7}  petalCount={6} opacity={0.38} />
      </g>

      {/* ═══════════════════════════════════════════════════════ */}
      {/* LAYER 6 — Bust + head (whole character bobs together) */}
      {/* ═══════════════════════════════════════════════════════ */}
      <g
        className={speaking ? 'nova-char-bob' : ''}
        style={{ transformOrigin: '120px 170px' }}
      >
        {/* ── Chest / bust ─────────────────────────────────── */}
        <ellipse cx="120" cy="215" rx="58" ry="52" fill="url(#sg-body)" />
        {/* Chest highlight — front-facing lighter zone */}
        <ellipse cx="112" cy="200" rx="24" ry="20" fill="#10B981" opacity="0.06" />
        <ellipse cx="120" cy="220" rx="32" ry="26" fill="url(#sg-belly)" opacity="0.12" />

        {/* Fawn spots — scattered on chest & neck base */}
        <circle cx="100" cy="200" r="4.2" fill="#6EE7B7" opacity="0.20" />
        <circle cx="140" cy="202" r="3.4" fill="#6EE7B7" opacity="0.18" />
        <circle cx="116" cy="190" r="3.0" fill="#6EE7B7" opacity="0.16" />
        <circle cx="150" cy="218" r="3.8" fill="#6EE7B7" opacity="0.14" />
        <circle cx="88"  cy="217" r="3.2" fill="#6EE7B7" opacity="0.16" />
        <circle cx="126" cy="210" r="2.4" fill="#6EE7B7" opacity="0.13" />
        <circle cx="105" cy="222" r="2.6" fill="#6EE7B7" opacity="0.12" />
        <circle cx="134" cy="188" r="2.0" fill="#6EE7B7" opacity="0.14" />
        {/* Glow halos on brighter spots */}
        <circle cx="100" cy="200" r="7"   fill="#34D399" opacity="0.06" filter="url(#sg-glow-sm)" />
        <circle cx="140" cy="202" r="5.5" fill="#34D399" opacity="0.06" filter="url(#sg-glow-sm)" />

        {/* ── Head group — tilts within the bob ──────────── */}
        <g style={{
          transform: `rotate(${headTilt}deg)`,
          transformOrigin: '120px 178px',
          transition: headSpring,
        }}>

          {/* ─── ANTLERS — large, majestic, above head ───── */}
          {/* Rendered first so head overlaps base of antlers */}

          {/* LEFT ANTLER */}
          {/* Main beam — sweeps left and up */}
          <path d="M 96,82 C 88,62 78,40 75,14 C 74,-2 78,-18 82,-26"
            stroke="url(#sg-antler-l)" strokeWidth="5.8" strokeLinecap="round" fill="none" />
          {/* Brow tine — first branch, sweeps forward-right */}
          <path d="M 90,68 Q 108,52 116,36"
            stroke="url(#sg-antler-l)" strokeWidth="3.8" strokeLinecap="round" fill="none" />
          {/* Bay tine — second branch, sweeps left-up */}
          <path d="M 79,42 Q 68,26 72,8"
            stroke="url(#sg-antler-l)" strokeWidth="3.0" strokeLinecap="round" fill="none" />
          {/* Tray tine — upper branch, short splay left */}
          <path d="M 76,22 Q 62,10 58,-4"
            stroke="url(#sg-antler-l)" strokeWidth="2.4" strokeLinecap="round" fill="none" />
          {/* Crown left fork */}
          <path d="M 79,-14 Q 64,-24 62,-36"
            stroke="url(#sg-antler-l)" strokeWidth="2.0" strokeLinecap="round" fill="none" />
          {/* Crown right fork */}
          <path d="M 79,-14 Q 90,-22 88,-34"
            stroke="url(#sg-antler-l)" strokeWidth="1.7" strokeLinecap="round" fill="none" />
          {/* Main beam tip */}
          <path d="M 82,-26 Q 78,-34 80,-40"
            stroke="url(#sg-antler-l)" strokeWidth="1.4" strokeLinecap="round" fill="none" />
          {/* Bay tine tip */}
          <path d="M 72,10 Q 66,2 64,-6"
            stroke="url(#sg-antler-l)" strokeWidth="1.8" strokeLinecap="round" fill="none" />
          {/* Glowing tips */}
          <circle cx="80"  cy="-40" r="2.8" fill="#FCD34D" opacity="0.78" filter="url(#sg-glow-sm)" />
          <circle cx="62"  cy="-36" r="2.2" fill="#FCD34D" opacity="0.65" filter="url(#sg-glow-sm)" />
          <circle cx="88"  cy="-34" r="2.0" fill="#F59E0B" opacity="0.60" filter="url(#sg-glow-sm)" />
          <circle cx="116" cy="36"  r="2.2" fill="#F59E0B" opacity="0.50" filter="url(#sg-glow-sm)" />
          <circle cx="58"  cy="-4"  r="1.8" fill="#D97706" opacity="0.45" filter="url(#sg-glow-sm)" />
          <circle cx="64"  cy="-6"  r="1.6" fill="#D97706" opacity="0.42" filter="url(#sg-glow-sm)" />

          {/* RIGHT ANTLER — mirror of left */}
          {/* Main beam */}
          <path d="M 144,82 C 152,62 162,40 165,14 C 166,-2 162,-18 158,-26"
            stroke="url(#sg-antler-r)" strokeWidth="5.8" strokeLinecap="round" fill="none" />
          {/* Brow tine */}
          <path d="M 150,68 Q 132,52 124,36"
            stroke="url(#sg-antler-r)" strokeWidth="3.8" strokeLinecap="round" fill="none" />
          {/* Bay tine */}
          <path d="M 161,42 Q 172,26 168,8"
            stroke="url(#sg-antler-r)" strokeWidth="3.0" strokeLinecap="round" fill="none" />
          {/* Tray tine */}
          <path d="M 164,22 Q 178,10 182,-4"
            stroke="url(#sg-antler-r)" strokeWidth="2.4" strokeLinecap="round" fill="none" />
          {/* Crown right fork */}
          <path d="M 161,-14 Q 176,-24 178,-36"
            stroke="url(#sg-antler-r)" strokeWidth="2.0" strokeLinecap="round" fill="none" />
          {/* Crown left fork */}
          <path d="M 161,-14 Q 150,-22 152,-34"
            stroke="url(#sg-antler-r)" strokeWidth="1.7" strokeLinecap="round" fill="none" />
          {/* Main beam tip */}
          <path d="M 158,-26 Q 162,-34 160,-40"
            stroke="url(#sg-antler-r)" strokeWidth="1.4" strokeLinecap="round" fill="none" />
          {/* Bay tine tip */}
          <path d="M 168,10 Q 174,2 176,-6"
            stroke="url(#sg-antler-r)" strokeWidth="1.8" strokeLinecap="round" fill="none" />
          {/* Glowing tips */}
          <circle cx="160" cy="-40" r="2.8" fill="#FCD34D" opacity="0.78" filter="url(#sg-glow-sm)" />
          <circle cx="178" cy="-36" r="2.2" fill="#FCD34D" opacity="0.65" filter="url(#sg-glow-sm)" />
          <circle cx="152" cy="-34" r="2.0" fill="#F59E0B" opacity="0.60" filter="url(#sg-glow-sm)" />
          <circle cx="124" cy="36"  r="2.2" fill="#F59E0B" opacity="0.50" filter="url(#sg-glow-sm)" />
          <circle cx="182" cy="-4"  r="1.8" fill="#D97706" opacity="0.45" filter="url(#sg-glow-sm)" />
          <circle cx="176" cy="-6"  r="1.6" fill="#D97706" opacity="0.42" filter="url(#sg-glow-sm)" />

          {/* ─── LARGE LEAF-SHAPED EARS ─────────────────── */}
          {/* Left ear — 3 depth layers */}
          <path d="M 88,96 C 70,90 42,64 40,50 C 38,36 62,36 84,58 C 87,70 88,84 88,96 Z"
            fill="#064E3B" />
          <path d="M 86,92 C 70,86 46,62 46,50 C 46,38 68,40 84,60 C 87,70 86,82 86,92 Z"
            fill="#065F46" opacity="0.65" />
          <path d="M 84,88 C 70,82 52,62 52,50 C 52,40 70,42 84,62 C 86,70 84,80 84,88 Z"
            fill="#10B981" opacity="0.20" />
          {/* Ear tip glow */}
          <circle cx="40" cy="50" r="4" fill="#34D399" opacity="0.18" filter="url(#sg-glow-sm)" />

          {/* Right ear — mirrored */}
          <path d="M 152,96 C 170,90 198,64 200,50 C 202,36 178,36 156,58 C 153,70 152,84 152,96 Z"
            fill="#064E3B" />
          <path d="M 154,92 C 170,86 194,62 194,50 C 194,38 172,40 156,60 C 153,70 154,82 154,92 Z"
            fill="#065F46" opacity="0.65" />
          <path d="M 156,88 C 170,82 188,62 188,50 C 188,40 170,42 156,62 C 154,70 156,80 156,88 Z"
            fill="#10B981" opacity="0.20" />
          <circle cx="200" cy="50" r="4" fill="#34D399" opacity="0.18" filter="url(#sg-glow-sm)" />

          {/* ─── HEAD OVAL ──────────────────────────────── */}
          <ellipse cx="120" cy="116" rx="34" ry="42" fill="url(#sg-head)" />
          {/* Subtle highlight top-left */}
          <ellipse cx="112" cy="100" rx="14" ry="18" fill="#10B981" opacity="0.06" />

          {/* ─── NECK — elegant column ──────────────────── */}
          {/* Neck shape — tapers from wide shoulders to head */}
          <path
            d="M 108,158 C 105,170 96,184 94,196 Q 120,204 146,196 C 144,184 135,170 132,158 C 126,163 114,163 108,158 Z"
            fill="url(#sg-neck)"
          />
          {/* Neck highlight line */}
          <path d="M 117,160 C 115,172 112,184 110,194" stroke="#10B981" strokeWidth="1.5" opacity="0.12" strokeLinecap="round" fill="none" />

          {/* ─── SNOUT / MUZZLE ─────────────────────────── */}
          {/* Muzzle base — lighter plane below head */}
          <ellipse cx="120" cy="140" rx="18" ry="13" fill="url(#sg-snout)" opacity="0.82" />
          {/* Blend top of muzzle into head color */}
          <ellipse cx="120" cy="134" rx="18" ry="8" fill="#047857" opacity="0.52" />
          {/* Nose — small dark oval */}
          <ellipse cx="120" cy="144" rx="5.5" ry="3.5" fill="#022c22" />
          <ellipse cx="118" cy="143" rx="1.8" ry="1.2" fill="white" opacity="0.32" />

          {/* ─── EYES — serene, slightly hooded ─────────── */}
          {/* Left eye */}
          <ellipse cx="101" cy="108" rx="14" ry="9" fill="white" />
          <ellipse cx="101" cy="108" rx="11" ry="7" fill="url(#sg-iris)" filter="url(#sg-glow-eye)" />
          <circle cx={101 + pupilDx} cy={108 + pupilDy} r="5.5" fill="#071a0d" />
          <circle cx={102 + pupilDx} cy={107 + pupilDy} r="1.8" fill="white" opacity="0.86" />
          {/* Upper eyelid hood — gives serene half-lidded expression */}
          <path d="M 87,108 C 90,102 112,102 115,108" fill="#047857" opacity="0.82" />
          {/* Animated blink eyelid */}
          <ellipse
            className="nova-eyelid"
            cx="101" cy="108" rx="14" ry="9"
            fill="#047857"
            style={{ transformOrigin: '101px 108px' }}
          />

          {/* Right eye */}
          <ellipse cx="139" cy="108" rx="14" ry="9" fill="white" />
          <ellipse cx="139" cy="108" rx="11" ry="7" fill="url(#sg-iris)" filter="url(#sg-glow-eye)" />
          <circle cx={139 + pupilDx} cy={108 + pupilDy} r="5.5" fill="#071a0d" />
          <circle cx={140 + pupilDx} cy={107 + pupilDy} r="1.8" fill="white" opacity="0.86" />
          {/* Upper eyelid hood */}
          <path d="M 125,108 C 128,102 150,102 153,108" fill="#047857" opacity="0.82" />
          {/* Animated blink eyelid */}
          <ellipse
            className="nova-eyelid-r"
            cx="139" cy="108" rx="14" ry="9"
            fill="#047857"
            style={{ transformOrigin: '139px 108px' }}
          />

          {/* ─── MOUTH / LIP-SYNC ───────────────────────── */}
          {/* Upper lip — static */}
          <path d="M 112,151 Q 120,149 128,151"
            stroke="#022c22" strokeWidth="1.6" strokeLinecap="round" fill="none" />
          {/* Lower lip — animates for speech */}
          <path
            className={speaking ? 'nova-beak-talk' : ''}
            d="M 112,153 Q 120,158 128,153"
            stroke="#022c22" strokeWidth="1.6" strokeLinecap="round" fill="none"
            style={{ transformOrigin: '120px 153px' }}
          />

          {/* ─── THIRD EYE GEM (forehead) ───────────────── */}
          <circle cx="120" cy="96" r="5.5" fill="#7C3AED" filter="url(#sg-glow-sm)"
            style={{ animation: 'nova-dot-pulse 3.2s ease-in-out infinite', transformOrigin: '120px 96px' }}
          />
          <circle cx="120" cy="96" r="3.2" fill="#A78BFA" />
          <circle cx="119" cy="95" r="1.3" fill="white" opacity="0.72" />

          {/* ─── THINKING DOTS (above antler tips) ──────── */}
          {thinking && (
            <g>
              <circle cx="100" cy="-58" r="4.5" fill="#34D399" filter="url(#sg-glow-sm)"
                style={{ animation: 'nova-dot-pulse 0.9s ease-in-out 0s infinite', transformOrigin: '100px -58px' }} />
              <circle cx="120" cy="-65" r="4.5" fill="#34D399" filter="url(#sg-glow-sm)"
                style={{ animation: 'nova-dot-pulse 0.9s ease-in-out 0.18s infinite', transformOrigin: '120px -65px' }} />
              <circle cx="140" cy="-58" r="4.5" fill="#34D399" filter="url(#sg-glow-sm)"
                style={{ animation: 'nova-dot-pulse 0.9s ease-in-out 0.36s infinite', transformOrigin: '140px -58px' }} />
            </g>
          )}

          {/* ─── CELEBRATING SPARKLES ───────────────────── */}
          {celebrating && (
            <g>
              <Sparkle cx={68}  cy={-18} r={7.5} delay={0.00} celebrating={celebrating} />
              <Sparkle cx={172} cy={-18} r={7.5} delay={0.12} celebrating={celebrating} />
              <Sparkle cx={120} cy={-34} r={9.5} delay={0.06} celebrating={celebrating} />
              <Sparkle cx={48}  cy={18}  r={5.5} delay={0.20} celebrating={celebrating} />
              <Sparkle cx={192} cy={18}  r={5.5} delay={0.28} celebrating={celebrating} />
              <Sparkle cx={90}  cy={-48} r={5.0} delay={0.16} celebrating={celebrating} />
              <Sparkle cx={150} cy={-48} r={5.0} delay={0.22} celebrating={celebrating} />
            </g>
          )}
        </g>
        {/* end head tilt group */}
      </g>
      {/* end body bob group */}

    </svg>
  );
}
