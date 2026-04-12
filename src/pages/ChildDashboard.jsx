import { useNavigate, Navigate } from 'react-router-dom';
import { getCurrentChild, clearCurrentChild } from '../lib/storage';
import { getAvatar, getSubject, ageToAgeBand } from '../lib/constants';

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

  const av = getAvatar(child.avatar);
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
        <div className="absolute inset-0" style={{ background: `radial-gradient(ellipse 70% 50% at 50% -10%, ${av.accent}20 0%, transparent 70%)` }}/>
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

        {/* Avatar greeting — the hero section */}
        <div className="text-center mb-12">
          {/* Large avatar orb */}
          <div
            className="w-28 h-28 rounded-full overflow-hidden mx-auto mb-5 glow-pulse"
            style={{ boxShadow: `0 0 48px ${av.accent}35, 0 0 0 3px ${av.accent}30` }}
          >
            <img src={av.image} alt={av.name} className="w-full h-full object-cover" />
          </div>

          {/* Child name */}
          <h1 className="text-4xl font-semibold text-white mb-2 leading-tight" style={{ fontFamily: 'Georgia, serif' }}>
            Welcome back, {child.name}
          </h1>

          {/* Guide attribution — prominent */}
          <p className="text-base font-medium mb-1" style={{ color: av.accent }}>
            Your guide is <strong>{av.name} the {av.animal}</strong>
          </p>
          <p className="text-sm font-medium mb-0.5" style={{ color: av.accent + '99' }}>{band.shortLabel}</p>
          <p className="text-white/25 text-xs mb-4">{child.grade}</p>

          {/* Change guide button */}
          <button
            onClick={() => navigate('/child/avatar-select')}
            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-medium transition-all hover:scale-105 active:scale-95"
            style={{
              color:       av.accent,
              background:  av.accent + '14',
              border:      `1px solid ${av.accent}30`,
            }}
          >
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"/>
              <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"/>
            </svg>
            Change guide
          </button>
        </div>

        {/* Subject cards heading */}
        <h2 className="text-lg font-semibold text-white mb-4 text-center" style={{ fontFamily: 'Georgia, serif' }}>
          Your learning adventures
        </h2>

        {(!child.subjects || child.subjects.length === 0) ? (
          <div className="text-center text-white/40 py-12">
            <p>No subjects set up yet. Ask a parent to add some!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {child.subjects.map((sid, idx) => {
              const s = getSubject(sid);
              const done = progress[sid] || 0;
              const total = s?.lessons?.length || 3;
              const pct = Math.round((done / total) * 100);

              return (
                <button
                  key={sid}
                  onClick={() => navigate(`/child/subject/${sid}`)}
                  className={`text-left rounded-3xl p-6 border border-white/10 bg-gradient-to-br ${BG_GRADIENTS[idx % BG_GRADIENTS.length]} hover:border-white/25 hover:scale-[1.02] transition-all duration-200 group`}
                  style={{ boxShadow: `0 4px 24px ${s.color}15` }}
                >
                  {/* Subject name + lesson count */}
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className="w-3 h-3 rounded-full mt-1 flex-shrink-0"
                      style={{ background: s.color }}
                    />
                    <span className="text-xs font-semibold text-white/35">{done}/{total}</span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-4" style={{ fontFamily: 'Georgia, serif' }}>
                    {s.label}
                  </h3>

                  {/* Progress bar */}
                  <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full progress-fill"
                      style={{ width: `${pct}%`, background: s.color }}
                    />
                  </div>
                  <div className="flex justify-between mt-2 text-xs text-white/30">
                    <span>{pct === 0 ? "Let's start!" : pct === 100 ? 'Complete!' : `${pct}% done`}</span>
                    <span className="group-hover:text-white/55 transition-colors">Explore →</span>
                  </div>
                </button>
              );
            })}
          </div>
        )}

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
