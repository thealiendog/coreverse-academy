import { useNavigate } from 'react-router-dom';
import { getCurrentParent, clearCurrentParent, setCurrentChild } from '../lib/storage';
import { getAvatar } from '../lib/constants';

const TIERS = [
  {
    id: 'Enrichment',
    price: '$19',
    period: '/mo',
    description: 'For school kids adding enrichment alongside traditional schooling.',
    children: '1 child',
    subjects: '3–5 subjects',
    features: [
      'AI avatar tutors',
      'Full subject library',
      'Progress tracking',
      'Parent dashboard',
    ],
    accentColor: '#60A5FA',
    cta: { label: 'Start free trial', style: 'outline-blue' },
  },
  {
    id: 'Homeschool Family',
    price: '$49',
    period: '/mo',
    description: 'Complete curriculum for families homeschooling full-time.',
    children: 'Up to 3 children',
    subjects: 'All 12 subjects',
    features: [
      'Everything in Enrichment',
      'Unlimited lessons',
      'State compliance tools',
      'Multi-child profiles',
    ],
    popular: true,
    accentColor: '#7C3AED',
    cta: { label: 'Start free trial', style: 'filled-purple' },
  },
  {
    id: 'Homeschool Premium',
    price: '$79',
    period: '/mo',
    description: 'The full Coreverse Academy experience with live learning and curated materials.',
    children: 'Unlimited children',
    subjects: 'All 12 subjects',
    features: [
      'Everything in Family',
      'Monthly live events',
      'Curated book boxes',
      'Priority support',
    ],
    accentColor: '#D4A853',
    cta: { label: 'Start free trial', style: 'outline-gold' },
  },
];

export default function Account() {
  const navigate = useNavigate();
  const parent = getCurrentParent();
  if (!parent) { navigate('/parent/login'); return null; }

  function logout() {
    clearCurrentParent();
    navigate('/');
  }

  const tierLabel = (() => {
    const t = parent.tier;
    if (!t || t === 'Explorer' || t === 'Homeschool Family') return 'Homeschool Family';
    if (t === 'Scholar') return 'Enrichment';
    if (t === 'Luminary') return 'Homeschool Premium';
    return t;
  })();

  const currentTier = TIERS.find(t => t.id === tierLabel) || TIERS[1];

  return (
    <div className="transition-page">
      {/* Page heading */}
      <div className="mb-10">
        <h1 className="text-2xl font-light text-white tracking-tight" style={{ fontFamily: 'Georgia, serif' }}>
          Account
        </h1>
      </div>

      {/* Profile row */}
      <div className="flex items-center gap-4 mb-10 pb-8 border-b border-white/5 max-w-sm">
        <div
          className="w-11 h-11 rounded-xl flex items-center justify-center text-base font-medium text-white flex-shrink-0"
          style={{ background: currentTier.accentColor + '18', fontFamily: 'Georgia, serif' }}
        >
          {parent.name[0]}
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-white text-sm font-medium truncate">{parent.name}</p>
          <p className="text-white/35 text-xs truncate mt-0.5">{parent.email}</p>
        </div>
        <div className="text-right flex-shrink-0">
          <p className="text-white/45 text-xs">{tierLabel}</p>
          <p className="text-white/20 text-xs mt-0.5">{parent.state}</p>
        </div>
      </div>

      {/* Children's Guides */}
      {parent.children?.length > 0 && (
        <div className="mb-10 pb-8 border-b border-white/5">
          <h2 className="text-xs tracking-widest uppercase text-white/30 font-normal mb-5">Children's Guides</h2>
          <div className="space-y-3">
            {parent.children.map(child => {
              const av = getAvatar(child.avatar);
              return (
                <div
                  key={child.id}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl"
                  style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}
                >
                  <div
                    className="w-9 h-9 rounded-full overflow-hidden flex-shrink-0"
                    style={{ boxShadow: `0 0 0 1.5px ${av.accent}40` }}
                  >
                    <img src={av.image} alt={av.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-white text-sm font-medium">{child.name}</p>
                    <p className="text-xs truncate" style={{ color: av.accent + 'aa' }}>
                      {av.name} the {av.animal} · {av.specialty}
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      setCurrentChild(child);
                      navigate('/child/avatar-select?back=/parent/account');
                    }}
                    className="text-xs text-white/30 hover:text-white/65 transition-colors flex-shrink-0"
                  >
                    Change
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Plans heading */}
      <div className="flex items-baseline justify-between mb-8">
        <h2 className="text-xs tracking-widest uppercase text-white/30 font-normal">Subscription Plans</h2>
        <p className="text-white/20 text-xs">7-day free trial · cancel anytime</p>
      </div>

      {/* ── 3-column grid ── */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10 items-stretch">
        {TIERS.map(tier => {
          const isCurrent = tierLabel === tier.id;
          const isPopular = tier.popular;

          return (
            <div key={tier.id} className="flex flex-col relative">
              {/* "Most Popular" floats above the card */}
              {isPopular && (
                <div className="flex justify-center mb-2 h-5">
                  <span className="text-[10px] font-semibold tracking-widest uppercase text-[#A78BFA]">
                    Most Popular
                  </span>
                </div>
              )}
              {/* Reserve the same height above non-popular cards so grid aligns */}
              {!isPopular && <div className="mb-2 h-5"/>}

              {/* Card */}
              <div
                className="flex flex-col flex-1 rounded-2xl overflow-hidden transition-all duration-300"
                style={{
                  background: isPopular
                    ? 'rgba(124,58,237,0.07)'
                    : 'rgba(255,255,255,0.025)',
                  border: isCurrent
                    ? `1px solid ${tier.accentColor}40`
                    : isPopular
                      ? '1px solid rgba(124,58,237,0.2)'
                      : '1px solid rgba(255,255,255,0.07)',
                  boxShadow: isPopular
                    ? '0 8px 40px rgba(124,58,237,0.1)'
                    : 'none',
                }}
              >
                {/* Colored top border */}
                <div className="h-[3px] w-full flex-shrink-0" style={{ background: tier.accentColor }}/>

                <div className="flex flex-col flex-1 p-5">
                  {/* Plan name + current badge */}
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className="text-[10px] font-semibold tracking-widest uppercase"
                      style={{ color: tier.accentColor }}
                    >
                      {tier.id}
                    </span>
                    {isCurrent && (
                      <span
                        className="text-[9px] font-semibold tracking-wider uppercase px-1.5 py-0.5 rounded-full"
                        style={{ color: tier.accentColor, background: tier.accentColor + '18' }}
                      >
                        Current
                      </span>
                    )}
                  </div>

                  {/* Price */}
                  <div className="flex items-baseline gap-1 mb-1">
                    <span className="text-4xl font-light text-white tracking-tight">{tier.price}</span>
                    <span className="text-white/30 text-sm">{tier.period}</span>
                  </div>

                  {/* Description */}
                  <p className="text-white/35 text-xs leading-relaxed mb-5">{tier.description}</p>

                  {/* Divider */}
                  <div className="border-t border-white/6 mb-4"/>

                  {/* Feature list */}
                  <ul className="space-y-2 flex-1 mb-6">
                    {tier.features.map((f, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-white/45 leading-snug">
                        <span
                          className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0"
                          style={{ background: tier.accentColor }}
                        />
                        {f}
                      </li>
                    ))}
                    <li className="flex items-start gap-2 text-xs leading-snug" style={{ color: tier.accentColor + 'aa' }}>
                      <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0" style={{ background: tier.accentColor + '60' }}/>
                      7-day free trial included
                    </li>
                  </ul>

                  {/* CTA button */}
                  <CtaButton style={tier.cta.style} label={tier.cta.label} isCurrent={isCurrent} accentColor={tier.accentColor} />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Sign out */}
      <div className="pt-6 border-t border-white/5">
        <button
          onClick={logout}
          className="text-white/25 hover:text-white/55 text-xs tracking-wide transition-colors duration-200"
        >
          Sign out of account
        </button>
      </div>
    </div>
  );
}

function CtaButton({ style, label, isCurrent, accentColor }) {
  if (isCurrent) {
    return (
      <div className="flex items-center gap-1.5 text-xs" style={{ color: accentColor + 'aa' }}>
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 6L9 17l-5-5"/>
        </svg>
        Current plan
      </div>
    );
  }

  if (style === 'filled-purple') {
    return (
      <button className="w-full py-2.5 rounded-xl text-xs font-semibold text-white transition-all duration-200 hover:opacity-90 hover:-translate-y-px"
        style={{ background: '#7C3AED' }}>
        {label}
      </button>
    );
  }

  if (style === 'outline-blue') {
    return (
      <button className="w-full py-2.5 rounded-xl text-xs font-medium transition-all duration-200 hover:opacity-80 hover:-translate-y-px"
        style={{ color: '#60A5FA', border: '1px solid #60A5FA40', background: '#60A5FA0D' }}>
        {label}
      </button>
    );
  }

  // outline-gold
  return (
    <button className="w-full py-2.5 rounded-xl text-xs font-medium transition-all duration-200 hover:opacity-80 hover:-translate-y-px"
      style={{ color: '#D4A853', border: '1px solid #D4A85340', background: '#D4A8530D' }}>
      {label}
    </button>
  );
}
