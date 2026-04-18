import { useNavigate, Navigate } from 'react-router-dom';
import { getCurrentChild, clearCurrentChild } from '../lib/storage';
import { getSubject, ageToAgeBand, ORIGINALS, CORE_ACADEMICS } from '../lib/constants';
import AnimalIcon from '../components/AnimalIcon';

const BG_GRADIENTS = [
  'from-indigo-900/60 to-violet-900/40',
  'from-emerald-900/60 to-teal-900/40',
  'from-blue-900/60 to-sky-900/40',
  'from-amber-900/60 to-orange-900/40',
  'from-pink-900/60 to-rose-900/40',
  'from-purple-900/60 to-fuchsia-900/40',
  'from-green-900/60 to-emerald-900/40',
  'from-yellow-900/60 to-amber-900/40',
];

export default function ChildDashboard() {
  const navigate = useNavigate();
  const child = getCurrentChild();

  if (!child) return <Navigate to="/child/select" replace />;

  const progress = child.progress || {};
  const band = ageToAgeBand(child.age);

  function logout() {
    clearCurrentChild();
    navigate('/child/select');
  }

  return (
    <div className="min-h-screen bg-[#080618] transition-page">
      {/* Background glow */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 70% 50% at 50% -10%, #7C3AED18 0%, transparent 70%)' }}/>
        <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-t from-[#080618] to-transparent"/>
      </div>

      <div className="relative z-10 max-w-2xl mx-auto px-4 py-8">
        {/* Top bar */}
        <div className="flex items-center justify-between mb-10">
          <div/>
          <button onClick={logout} className="text-white/25 hover:text-white/55 text-xs tracking-wide transition-colors">
            Switch learner
          </button>
        </div>

        {/* Greeting */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-semibold text-white mb-2 leading-tight" style={{ fontFamily: 'Georgia, serif' }}>
            Welcome back, {child.name}
          </h1>
          <p className="text-sm font-medium text-white/40 mb-0.5">{band.shortLabel}</p>
          <p className="text-white/25 text-xs">{child.grade}</p>
        </div>

        {/* Coreverse Originals */}
        <h2 className="text-lg font-semibold text-white mb-4 text-center" style={{ fontFamily: 'Georgia, serif' }}>
          Your learning adventures
        </h2>
        <p className="text-xs font-semibold text-white/25 tracking-widest uppercase mb-3 text-center">Coreverse Originals</p>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
          {ORIGINALS.map((s, idx) => {
            const enrolled = child.subjects?.includes(s.id);
            const done  = progress[s.id] || 0;
            const total = s.lessonCount || s.lessons?.length || 3;
            const pct   = Math.round((done / total) * 100);

            if (enrolled) {
              return (
                <button
                  key={s.id}
                  onClick={() => navigate(`/child/subject/${s.id}`)}
                  className={`text-left rounded-2xl p-4 border border-white/10 bg-gradient-to-br ${BG_GRADIENTS[idx % BG_GRADIENTS.length]} hover:border-white/25 hover:scale-[1.02] transition-all duration-200 group`}
                  style={{ boxShadow: `0 4px 20px ${s.color}18` }}
                >
                  <div className="flex items-start justify-between mb-3">
                    <span style={{ filter: `drop-shadow(0 0 6px ${s.color}50)` }}>
                      <AnimalIcon subjectId={s.id} color={s.color} size={28} />
                    </span>
                    <span className="text-[10px] font-semibold text-white/35 tabular-nums">{done}/{total}</span>
                  </div>
                  <h3 className="text-sm font-bold text-white mb-3 leading-snug" style={{ fontFamily: 'Georgia, serif' }}>
                    {s.label}
                  </h3>
                  <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full rounded-full progress-fill" style={{ width: `${pct}%`, background: s.color }} />
                  </div>
                  <p className="text-[10px] text-white/30 mt-1.5 group-hover:text-white/50 transition-colors">
                    {pct === 0 ? "Let's start!" : pct === 100 ? 'Complete!' : `${pct}% done`}
                  </p>
                </button>
              );
            }

            return (
              <div
                key={s.id}
                className="rounded-2xl p-4 border border-white/5 bg-white/[0.015] opacity-40"
              >
                <span className="mb-3 block opacity-25"><AnimalIcon subjectId={s.id} color={s.color} size={28} /></span>
                <h3 className="text-sm font-bold text-white/40 mb-1 leading-snug" style={{ fontFamily: 'Georgia, serif' }}>
                  {s.label}
                </h3>
                <p className="text-[10px] text-white/20">Ask a parent to add</p>
              </div>
            );
          })}
        </div>

        {/* Core Academics */}
        <div className="flex items-center gap-3 mb-3">
          <div className="flex-1 h-px bg-white/8" />
          <p className="text-xs font-semibold text-white/25 tracking-widest uppercase whitespace-nowrap">Core Academics</p>
          <div className="flex-1 h-px bg-white/8" />
        </div>

        <div className="grid grid-cols-2 gap-3">
          {CORE_ACADEMICS.map((s, idx) => {
            const enrolled = child.subjects?.includes(s.id);
            const done  = progress[s.id] || 0;
            const total = s.lessonCount || s.lessons?.length || 3;
            const pct   = Math.round((done / total) * 100);

            if (enrolled) {
              return (
                <button
                  key={s.id}
                  onClick={() => navigate(`/child/subject/${s.id}`)}
                  className={`text-left rounded-2xl p-4 border border-white/10 bg-gradient-to-br ${BG_GRADIENTS[(idx + 4) % BG_GRADIENTS.length]} hover:border-white/25 hover:scale-[1.02] transition-all duration-200 group`}
                  style={{ boxShadow: `0 4px 20px ${s.color}18` }}
                >
                  <div className="flex items-start justify-between mb-2">
                    <span style={{ filter: `drop-shadow(0 0 6px ${s.color}50)` }}>
                      <AnimalIcon subjectId={s.id} color={s.color} size={28} />
                    </span>
                    <span className="text-[10px] font-semibold text-white/35 tabular-nums">{done}/{total}</span>
                  </div>
                  <h3 className="text-sm font-bold text-white mb-1 leading-snug" style={{ fontFamily: 'Georgia, serif' }}>
                    {s.label}
                  </h3>
                  {s.standard && (
                    <span
                      className="inline-block text-[9px] font-semibold px-1.5 py-0.5 rounded-full mb-2"
                      style={{ background: s.color + '20', color: s.color }}
                    >
                      {s.standard}
                    </span>
                  )}
                  <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full rounded-full progress-fill" style={{ width: `${pct}%`, background: s.color }} />
                  </div>
                  <p className="text-[10px] text-white/30 mt-1.5 group-hover:text-white/50 transition-colors">
                    {pct === 0 ? "Let's start!" : pct === 100 ? 'Complete!' : `${pct}% done`}
                  </p>
                </button>
              );
            }

            return (
              <div
                key={s.id}
                className="rounded-2xl p-4 border border-white/5 bg-white/[0.015] opacity-40"
              >
                <span className="mb-2 block opacity-25"><AnimalIcon subjectId={s.id} color={s.color} size={28} /></span>
                <h3 className="text-sm font-bold text-white/40 mb-1 leading-snug" style={{ fontFamily: 'Georgia, serif' }}>
                  {s.label}
                </h3>
                {s.standard && (
                  <span className="inline-block text-[9px] font-semibold px-1.5 py-0.5 rounded-full mb-1 bg-white/5 text-white/20">
                    {s.standard}
                  </span>
                )}
                <p className="text-[10px] text-white/20">Ask a parent to add</p>
              </div>
            );
          })}
        </div>

        {/* Badges section */}
        <div className="mt-10">
          <h2 className="text-lg font-semibold text-white mb-4 text-center" style={{ fontFamily: 'Georgia, serif' }}>
            Badges earned
          </h2>
          {(!child.badges || child.badges.length === 0) ? (
            <div className="text-center py-8 border border-dashed border-white/8 rounded-2xl">
              <p className="text-white/25 text-sm">Complete lessons to earn your first badge</p>
            </div>
          ) : (
            <div className="flex flex-wrap gap-2 justify-center">
              {child.badges.map((badge, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-semibold"
                  style={{ borderColor: av.accent + '50', color: av.accent, background: av.accent + '10' }}
                >
                  <div className="w-1.5 h-1.5 rounded-full" style={{ background: av.accent }}/>
                  {badge}
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="text-center mt-10 pb-8">
          <p className="text-white/15 text-xs tracking-wide">
            {av.name} is with you every step of the way
          </p>
        </div>
      </div>
    </div>
  );
}
