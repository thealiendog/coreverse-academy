import { useNavigate } from 'react-router-dom';
import { getCurrentParent, setCurrentChild, genId } from '../lib/storage';
import { getAvatar, getSubject, SUBJECTS } from '../lib/constants';
import Button from '../components/Button';

function normalizeChild(c) {
  return {
    id:       c.id       || genId(),
    name:     c.name     || 'Unknown',
    grade:    c.grade    || '',
    age:      c.age      || '',
    avatar:   c.avatar   || 'nova',
    subjects: Array.isArray(c.subjects) ? c.subjects : [],
    progress: (c.progress && typeof c.progress === 'object' && !Array.isArray(c.progress)) ? c.progress : {},
    badges:   Array.isArray(c.badges)   ? c.badges   : [],
  };
}

export default function ParentDashboard() {
  const navigate = useNavigate();
  const parent = getCurrentParent();
  if (!parent) { navigate('/parent/login'); return null; }

  const children = parent.children || [];
  const firstName = parent.name.split(' ')[0];

  const tierColors = {
    'Homeschool Family': 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30',
    Scholar:             'bg-blue-500/15 text-blue-400 border-blue-500/30',
    Luminary:            'bg-[#7C3AED]/20 text-[#A78BFA] border-[#7C3AED]/40',
  };
  const tierLabel = parent.tier === 'Explorer' ? 'Homeschool Family' : (parent.tier || 'Homeschool Family');

  return (
    <div className="transition-page">
      {/* Header */}
      <div className="mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <p className="text-white/40 text-sm mb-1">Good morning,</p>
          <h1 className="text-3xl font-semibold text-white" style={{ fontFamily: 'Georgia, serif' }}>
            {firstName}
          </h1>
        </div>
        <div className="flex items-center gap-3">
          <span className={`px-3 py-1.5 rounded-full text-xs font-semibold border ${tierColors[tierLabel] || tierColors['Homeschool Family']}`}>
            {tierLabel}
          </span>
          <Button size="sm" onClick={() => navigate('/parent/children/add')}>
            + Add Child
          </Button>
        </div>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {[
          { label: 'Children', value: children.length, sub: 'enrolled' },
          { label: 'Subjects', value: children.reduce((a,c) => a + (c.subjects?.length||0), 0), sub: 'active' },
          { label: 'Lessons', value: children.reduce((a,c) => a + Object.values(c.progress||{}).reduce((s,v)=>s+v,0), 0), sub: 'completed' },
          { label: 'State', value: parent.state || '--', sub: 'homeschool location' },
        ].map(stat => (
          <div key={stat.label} className="bg-[#0F0B2E] border border-white/5 rounded-2xl p-5">
            <p className={`font-bold text-white mb-1 leading-tight ${stat.label === 'State' ? 'text-lg' : 'text-3xl'}`}>{stat.value}</p>
            <p className="text-white/40 text-xs">{stat.label} <span className="text-white/20">/ {stat.sub}</span></p>
          </div>
        ))}
      </div>

      {/* Children section */}
      <h2 className="text-lg font-semibold text-white mb-4" style={{ fontFamily: 'Georgia, serif' }}>
        Your Children
      </h2>

      {children.length === 0 ? (
        <div className="bg-[#0F0B2E] border border-dashed border-white/10 rounded-2xl p-12 text-center">
          <div className="text-4xl mb-4">+</div>
          <p className="text-white/60 mb-2">No children added yet</p>
          <p className="text-white/30 text-sm mb-6">Add your first child to get started</p>
          <Button onClick={() => navigate('/parent/children/add')}>Add a Child</Button>
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {children.map(rawChild => {
            const child = normalizeChild(rawChild);
            const av = getAvatar(child.avatar);
            const progress = child.progress;
            const totalLessons = (child.subjects || []).reduce((a, sid) => {
              const s = getSubject(sid);
              return a + (s?.lessons?.length || 3);
            }, 0);
            const completedLessons = Object.values(progress).reduce((a,v) => a+v, 0);
            const pct = totalLessons ? Math.round((completedLessons / totalLessons) * 100) : 0;

            return (
              <button
                key={child.id}
                className="bg-[#0F0B2E] border border-white/5 rounded-2xl p-6 cursor-pointer hover:border-white/15 transition-colors text-left w-full"
                onClick={() => { setCurrentChild(child); navigate('/child/dashboard'); }}
              >
                <div className="flex items-start gap-4 mb-5">
                  <div
                    className="w-14 h-14 rounded-full overflow-hidden flex-shrink-0"
                    style={{ boxShadow: `0 0 0 2px ${av.color}60` }}
                  >
                    <img src={av.image} alt={av.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg leading-tight">{child.name}</h3>
                    <p className="text-white/40 text-sm">{child.grade} · Age {child.age}</p>
                    <p className="text-xs mt-1" style={{ color: av.accent }}>{av.name}</p>
                  </div>
                </div>

                {/* Progress */}
                <div className="space-y-3">
                  <div className="flex justify-between text-xs text-white/40">
                    <span>{completedLessons} lessons completed</span>
                    <span>{pct}%</span>
                  </div>
                  <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full progress-fill"
                      style={{ width: `${pct}%`, background: av.accent }}
                    />
                  </div>
                </div>

                {/* Subject chips */}
                {child.subjects?.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {child.subjects.slice(0, 4).map(sid => {
                      const s = getSubject(sid);
                      return (
                        <span key={sid} className="text-xs px-2 py-0.5 rounded-full border" style={{ borderColor: s.color + '50', color: s.color }}>
                          {s.label}
                        </span>
                      );
                    })}
                    {child.subjects.length > 4 && (
                      <span className="text-xs px-2 py-0.5 rounded-full border border-white/10 text-white/30">
                        +{child.subjects.length - 4}
                      </span>
                    )}
                  </div>
                )}
              </button>
            );
          })}

          {/* Add child card */}
          <button
            onClick={() => navigate('/parent/children/add')}
            className="bg-[#0F0B2E] border border-dashed border-white/10 rounded-2xl p-6 flex flex-col items-center justify-center gap-3 hover:border-[#7C3AED]/40 transition-all group min-h-[180px]"
          >
            <div className="w-12 h-12 rounded-full border border-white/10 group-hover:border-[#7C3AED]/40 flex items-center justify-center text-white/30 group-hover:text-[#7C3AED] text-2xl transition-all">
              +
            </div>
            <span className="text-white/40 group-hover:text-white/70 text-sm transition-colors">Add another child</span>
          </button>
        </div>
      )}
    </div>
  );
}
