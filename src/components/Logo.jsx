export default function Logo({ size = 'md', className = '' }) {
  const sizes     = { sm: 32, md: 42, lg: 56, xl: 72 };
  const textSizes = { sm: 'text-base', md: 'text-xl', lg: 'text-3xl', xl: 'text-4xl' };
  const px = sizes[size] || 42;

  // 40×40 viewBox, center (20,20)
  const CX = 20, CY = 20;
  const R_HEX = 18;   // outer hexagon circumradius
  const R_FOL = 6;    // Seed-of-Life circle radius
  const R_IN  = 11;   // inner hexagon circumradius

  // Flat-top hexagon: vertices at 0°, 60°, 120°, 180°, 240°, 300°
  function hexPts(r, rotDeg = 0) {
    return Array.from({ length: 6 }, (_, i) => {
      const a = (Math.PI / 3) * i + (rotDeg * Math.PI) / 180;
      return `${(CX + r * Math.cos(a)).toFixed(2)},${(CY + r * Math.sin(a)).toFixed(2)}`;
    }).join(' ');
  }

  // Seed of Life: center + 6 circles at 60° intervals, radius apart
  const folCenters = [
    [CX, CY],
    ...Array.from({ length: 6 }, (_, i) => {
      const a = (Math.PI / 3) * i;
      return [CX + R_FOL * Math.cos(a), CY + R_FOL * Math.sin(a)];
    }),
  ];

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <svg
        width={px}
        height={px}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <clipPath id="lgo-clip">
            <polygon points={hexPts(R_HEX - 0.6)} />
          </clipPath>
          <radialGradient id="lgo-bg" cx="50%" cy="50%" r="50%">
            <stop offset="0%"   stopColor="#12103B" />
            <stop offset="100%" stopColor="#080618" />
          </radialGradient>
          <radialGradient id="lgo-cg" cx="50%" cy="50%" r="50%">
            <stop offset="0%"   stopColor="#7C3AED" stopOpacity="1"   />
            <stop offset="45%"  stopColor="#7C3AED" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#7C3AED" stopOpacity="0"   />
          </radialGradient>
          <filter id="lgo-glow" x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur stdDeviation="1.4" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Hex background */}
        <polygon points={hexPts(R_HEX)} fill="url(#lgo-bg)" />

        {/* Seed of Life — 7 overlapping circles, clipped to hex */}
        <g clipPath="url(#lgo-clip)">
          {folCenters.map(([x, y], i) => (
            <circle
              key={i}
              cx={+x.toFixed(3)}
              cy={+y.toFixed(3)}
              r={R_FOL}
              stroke="#A78BFA"
              strokeWidth="0.42"
              strokeOpacity={i === 0 ? 0.75 : 0.5}
              fill="none"
            />
          ))}
        </g>

        {/* Outer hexagon border */}
        <polygon
          points={hexPts(R_HEX)}
          stroke="#7C3AED"
          strokeWidth="1.05"
          strokeOpacity="0.95"
          fill="none"
        />

        {/* Inner hexagon (rotated 30° — pointy-top) */}
        <polygon
          points={hexPts(R_IN, 30)}
          stroke="#A78BFA"
          strokeWidth="0.5"
          strokeOpacity="0.4"
          fill="none"
        />

        {/* Center radial glow */}
        <circle cx={CX} cy={CY} r="7.5" fill="url(#lgo-cg)" />

        {/* Center orb — outer glow layer */}
        <circle cx={CX} cy={CY} r="2.8" fill="#7C3AED" filter="url(#lgo-glow)" />
        {/* Center orb — bright core */}
        <circle cx={CX} cy={CY} r="1.4" fill="#C4B5FD" />
        {/* Specular highlight */}
        <circle cx={CX - 0.5} cy={CY - 0.5} r="0.55" fill="white" fillOpacity="0.7" />
      </svg>

      <span
        className={`font-bold leading-tight ${textSizes[size]}`}
        style={{
          fontFamily: 'Georgia, serif',
          color: '#ffffff',
          textShadow: '0 0 18px rgba(124,58,237,0.8), 0 0 36px rgba(124,58,237,0.35)',
        }}
      >
        Coreverse Academy
      </span>
    </div>
  );
}
