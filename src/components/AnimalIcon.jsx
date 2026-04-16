// Animal silhouette icons — one per subject, 24×24 viewBox, fill/stroke currentColor
// Usage: <AnimalIcon subjectId="inner-world" color="#10B981" size={24} className="..." />

export default function AnimalIcon({ subjectId, color = 'currentColor', size = 24, className = '' }) {
  const C = color;
  const paths = {
    // ── Coreverse Originals ───────────────────────────────────────────────────
    'inner-world': ( // DEER — Sage
      <>
        {/* oval head */}
        <ellipse cx="12" cy="17" rx="5" ry="5.5" fill={C} />
        {/* left antler: trunk + two tines */}
        <path d="M9.5 12.5 L8 8.5 L6 5.5 M8 8.5 L10.5 7"
          stroke={C} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        {/* right antler */}
        <path d="M14.5 12.5 L16 8.5 L18 5.5 M16 8.5 L13.5 7"
          stroke={C} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </>
    ),

    'cosmos': ( // OWL — Nova
      <>
        {/* body */}
        <ellipse cx="12" cy="16.5" rx="6.5" ry="6" fill={C} />
        {/* head */}
        <circle cx="12" cy="10" r="5" fill={C} />
        {/* left ear tuft */}
        <path d="M8.5 6.5 L7 3 L11 6" fill={C} />
        {/* right ear tuft */}
        <path d="M15.5 6.5 L17 3 L13 6" fill={C} />
        {/* eye rings (dark holes) */}
        <circle cx="10" cy="10" r="1.8" fill="#080618" opacity="0.6" />
        <circle cx="14" cy="10" r="1.8" fill="#080618" opacity="0.6" />
      </>
    ),

    'money': ( // EAGLE — Ace
      <>
        {/* head */}
        <circle cx="12" cy="7.5" r="4" fill={C} />
        {/* body */}
        <path d="M10.5 11 L10 18.5 C10 20 11 21.5 12 21.5 C13 21.5 14 20 14 18.5 L13.5 11 Z" fill={C} />
        {/* left wing — sweeps outward */}
        <path d="M10.5 12 C9 11 6.5 11.5 4 13.5 C5 15 7 14.5 9 13.5 C10 13 10.5 12.5 10.5 12 Z" fill={C} />
        {/* right wing */}
        <path d="M13.5 12 C15 11 17.5 11.5 20 13.5 C19 15 17 14.5 15 13.5 C14 13 13.5 12.5 13.5 12 Z" fill={C} />
        {/* hooked beak */}
        <path d="M11 8.5 L14 8.5 L14.5 10.5 L12 11 Z" fill={C} />
      </>
    ),

    'future-skills': ( // FOX — Byte
      <>
        {/* head body — front facing */}
        <path d="M12 21.5 C9 21.5 7 19 7 16 C7 13 8.5 11 10.5 10.5 L9 7 L12.5 11 L16 7 L14 10.5 C16 11 17.5 13 17.5 16 C17.5 19 15 21.5 12 21.5 Z" fill={C} />
        {/* muzzle highlight line */}
        <path d="M10 17.5 Q12 19.5 14 17.5"
          stroke={C} strokeWidth="1.2" strokeLinecap="round" fill="none" opacity="0.45" />
      </>
    ),

    'leadership': ( // LION — Valor
      <>
        {/* mane — thick ring */}
        <circle cx="12" cy="12.5" r="9" stroke={C} strokeWidth="4" fill="none" />
        {/* face */}
        <circle cx="12" cy="12.5" r="5.5" fill={C} />
        {/* mane texture bumps — four outer petals */}
        <path d="M12 3 C12.5 3.5 12.5 4.5 12 4.5 C11.5 4.5 11.5 3.5 12 3 Z
                 M12 22 C11.5 21.5 11.5 20.5 12 20.5 C12.5 20.5 12.5 21.5 12 22 Z
                 M3 12.5 C3.5 12 4.5 12 4.5 12.5 C4.5 13 3.5 13 3 12.5 Z
                 M21 12.5 C20.5 13 19.5 13 19.5 12.5 C19.5 12 20.5 12 21 12.5 Z" fill={C} />
      </>
    ),

    'wellness': ( // WOLF — Terra
      <>
        {/* side-profile head, snout pointing right */}
        <path d="M4 15 C4 11 7 8 11 8 L15 8 C17.5 8.5 20 11 21 13.5 L21.5 15 L20 16.5 L18 17 C17 18 15 19 13 19 L8 19 C6 18.5 4 17 4 15 Z" fill={C} />
        {/* pointed ear at top-left of head */}
        <path d="M10 8.5 L9 3.5 L14.5 8" fill={C} />
      </>
    ),

    'creative-arts': ( // BUTTERFLY — Muse
      <>
        {/* upper-left wing */}
        <path d="M12 12 C11 9 8 6.5 5 7.5 C2.5 8.5 3 12 6 13 C8.5 13.5 11 12.5 12 12 Z" fill={C} />
        {/* upper-right wing */}
        <path d="M12 12 C13 9 16 6.5 19 7.5 C21.5 8.5 21 12 18 13 C15.5 13.5 13 12.5 12 12 Z" fill={C} />
        {/* lower-left wing */}
        <path d="M12 12 C10.5 14 7.5 15.5 5.5 14.5 C3.5 13.5 4.5 11 7 11.5 C9 12 11 12 12 12 Z" fill={C} />
        {/* lower-right wing */}
        <path d="M12 12 C13.5 14 16.5 15.5 18.5 14.5 C20.5 13.5 19.5 11 17 11.5 C15 12 13 12 12 12 Z" fill={C} />
        {/* body */}
        <ellipse cx="12" cy="12" rx="1" ry="3.5" fill={C} />
        {/* antennae */}
        <path d="M11.5 8.5 L10 6 M12.5 8.5 L14 6"
          stroke={C} strokeWidth="1" strokeLinecap="round" fill="none" />
      </>
    ),

    'history': ( // ELEPHANT — Lyra
      <>
        {/* body */}
        <ellipse cx="14" cy="16" rx="7" ry="5.5" fill={C} />
        {/* head */}
        <circle cx="8" cy="12" r="4.5" fill={C} />
        {/* large ear */}
        <ellipse cx="4.5" cy="12.5" rx="3" ry="4.5" fill={C} />
        {/* trunk — curls downward then right */}
        <path d="M6 15 C4.5 16 3.5 18 4.5 20 C5 21 6.5 21 7 20"
          stroke={C} strokeWidth="2.5" strokeLinecap="round" fill="none" />
        {/* tusk */}
        <path d="M7.5 15 C7 16.5 7.5 18.5 9 18.5"
          stroke={C} strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.55" />
      </>
    ),

    'languages': ( // STAR — TBD
      <path d="M12 2 L14.4 8.5 L21.5 9.3 L16.3 14.2 L17.9 21.5 L12 18 L6.1 21.5 L7.7 14.2 L2.5 9.3 L9.6 8.5 Z" fill={C} />
    ),

    'frontier': ( // STAR — TBD
      <path d="M12 2 L14.4 8.5 L21.5 9.3 L16.3 14.2 L17.9 21.5 L12 18 L6.1 21.5 L7.7 14.2 L2.5 9.3 L9.6 8.5 Z" fill={C} />
    ),

    // ── Core Academics ────────────────────────────────────────────────────────
    'math': ( // RACCOON — Remi
      <>
        {/* face */}
        <circle cx="12" cy="14.5" r="6.5" fill={C} />
        {/* left ear — rounded triangle */}
        <path d="M6.5 9 C6 6.5 8 5 9.5 5.5 C11 6 11 8.5 9.5 9.5 Z" fill={C} />
        {/* right ear */}
        <path d="M17.5 9 C18 6.5 16 5 14.5 5.5 C13 6 13 8.5 14.5 9.5 Z" fill={C} />
        {/* mask markings — two eye-patch ovals */}
        <ellipse cx="9.5" cy="13.5" rx="2.3" ry="2" fill={C} opacity="0.3" />
        <ellipse cx="14.5" cy="13.5" rx="2.3" ry="2" fill={C} opacity="0.3" />
        {/* snout */}
        <ellipse cx="12" cy="17.5" rx="2.5" ry="1.8" fill={C} opacity="0.6" />
      </>
    ),

    'ela': ( // PORCUPINE — Quill
      <>
        {/* body */}
        <circle cx="12" cy="15" r="6.5" fill={C} />
        {/* spines radiating from top/back */}
        <line x1="12"   y1="8.5" x2="12"   y2="4.5"  stroke={C} strokeWidth="1.5" strokeLinecap="round" />
        <line x1="14.6" y1="9.1" x2="16.5" y2="5.8"  stroke={C} strokeWidth="1.5" strokeLinecap="round" />
        <line x1="16.8" y1="11.5" x2="19.8" y2="9.5" stroke={C} strokeWidth="1.5" strokeLinecap="round" />
        <line x1="9.4"  y1="9.1" x2="7.5"  y2="5.8"  stroke={C} strokeWidth="1.5" strokeLinecap="round" />
        <line x1="7.2"  y1="11.5" x2="4.2" y2="9.5"  stroke={C} strokeWidth="1.5" strokeLinecap="round" />
        <line x1="17.5" y1="14.5" x2="21"  y2="14"   stroke={C} strokeWidth="1.5" strokeLinecap="round" />
        <line x1="6.5"  y1="14.5" x2="3"   y2="14"   stroke={C} strokeWidth="1.5" strokeLinecap="round" />
        <line x1="17"   y1="17.5" x2="20.5" y2="18.5" stroke={C} strokeWidth="1.5" strokeLinecap="round" />
        <line x1="7"    y1="17.5" x2="3.5"  y2="18.5" stroke={C} strokeWidth="1.5" strokeLinecap="round" />
        {/* snout */}
        <ellipse cx="12" cy="20" rx="2" ry="1.5" fill={C} />
      </>
    ),

    'sci': ( // OTTER — Cosmo
      <>
        {/* body — horizontal elongated oval */}
        <ellipse cx="13" cy="16.5" rx="8.5" ry="4.5" fill={C} />
        {/* head — round, upper left */}
        <circle cx="5.5" cy="12.5" r="4" fill={C} />
        {/* tail curls up-right */}
        <path d="M21 15.5 C22.5 14.5 23 16.5 21.5 18.5 C20 20 18 19 18.5 17.5"
          stroke={C} strokeWidth="3" strokeLinecap="round" fill="none" />
        {/* paw holding something */}
        <circle cx="9" cy="16" r="1.8" fill={C} opacity="0.55" />
      </>
    ),

    'ss': ( // BEAR — Atlas
      <>
        {/* head — broad */}
        <ellipse cx="12" cy="14.5" rx="7.5" ry="6.5" fill={C} />
        {/* left ear */}
        <circle cx="6.5" cy="9" r="3.3" fill={C} />
        {/* right ear */}
        <circle cx="17.5" cy="9" r="3.3" fill={C} />
        {/* snout */}
        <ellipse cx="12" cy="17.5" rx="3.5" ry="2.5" fill={C} opacity="0.55" />
      </>
    ),
  };

  const content = paths[subjectId] || paths['languages']; // fallback to star

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {content}
    </svg>
  );
}
