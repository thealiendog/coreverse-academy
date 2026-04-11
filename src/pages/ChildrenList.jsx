import { useNavigate } from 'react-router-dom';
import { getCurrentParent } from '../lib/storage';
import { getAvatar, getSubject } from '../lib/constants';
import Button from '../components/Button';

export default function ChildrenList() {
  const navigate = useNavigate();
  const parent = getCurrentParent();
  if (!parent) { navigate('/parent/login'); return null; }
  const children = parent.children || [];

  return (
    <div className="transition-page">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-semibold text-white" style={{ fontFamily: 'Georgia, serif' }}>My Children</h1>
          <p className="text-white/40 text-sm mt-1">{children.length} enrolled</p>
        </div>
        <Button size="sm" onClick={() => navigate('/parent/children/add')}>+ Add Child</Button>
      </div>

      {children.length === 0 ? (
        <div className="text-center py-24 text-white/40">
          <p className="text-lg mb-4">No children added yet.</p>
          <Button onClick={() => navigate('/parent/children/add')}>Add Your First Child</Button>
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          {children.map(child => {
            const av = getAvatar(child.avatar);
            const progress = child.progress || {};
            const totalLessons = (child.subjects || []).reduce((a, sid) => {
              const s = getSubject(sid);
              return a + (s?.lessons?.length || 3);
            }, 0);
            const completedLessons = Object.values(progress).reduce((a, v) => a + v, 0);
            const pct = totalLessons ? Math.round((completedLessons / totalLessons) * 100) : 0;

            return (
              <div key={child.id} className="bg-[#0F0B2E] border border-white/5 rounded-2xl p-6">
                <div className="flex flex-wrap items-start gap-4 mb-5">
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl flex-shrink-0"
                    style={{ background: av.color + '80' }}>
                    {av.emoji}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <h2 className="text-xl font-semibold text-white" style={{ fontFamily: 'Georgia, serif' }}>{child.name}</h2>
                      <span className="text-xs px-2 py-0.5 rounded-full border border-white/10 text-white/40">
                        Age {child.age} · {child.grade}
                      </span>
                    </div>
                    <p className="text-sm" style={{ color: av.accent }}>{av.name} the {av.animal} · {av.subject}</p>
                    <p className="text-xs text-white/30 mt-0.5">PIN: {child.pin || '1234'}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-white">{pct}%</p>
                    <p className="text-xs text-white/30">progress</p>
                  </div>
                </div>

                <div className="h-1.5 bg-white/5 rounded-full overflow-hidden mb-4">
                  <div className="h-full rounded-full progress-fill" style={{ width: `${pct}%`, background: av.accent }}/>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {(child.subjects || []).map(sid => {
                    const s = getSubject(sid);
                    const done = progress[sid] || 0;
                    return (
                      <div key={sid} className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs border" style={{ borderColor: s.color + '30', background: s.color + '10' }}>
                        <span style={{ color: s.color }}>{s.label}</span>
                        <span className="text-white/30">{done}/{s.lessons?.length||3}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
