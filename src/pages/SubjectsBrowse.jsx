import { useState } from 'react';
import { SUBJECTS } from '../lib/constants';
import { getLessons } from '../data/lessons';
import { getLevel2Lessons } from '../data/lessons_level2';

export default function SubjectsBrowse() {
  const [expandedId, setExpandedId] = useState(null);

  function toggle(id) {
    setExpandedId(prev => prev === id ? null : id);
  }

  return (
    <div className="transition-page">
      <div className="mb-8">
        <h1 className="text-3xl font-semibold text-white" style={{ fontFamily: 'Georgia, serif' }}>Subjects</h1>
        <p className="text-white/40 text-sm mt-1">All 12 learning areas — click any subject to see its lessons</p>
      </div>

      <div className="space-y-3">
        {SUBJECTS.map(s => {
          const isOpen = expandedId === s.id;
          const l1 = getLessons(s.id);
          const l2 = getLevel2Lessons(s.id);

          return (
            <div
              key={s.id}
              className={`bg-[#0F0B2E] border rounded-2xl overflow-hidden transition-all duration-200
                ${isOpen ? 'border-white/15' : 'border-white/5 hover:border-white/10'}`}
            >
              {/* Header row — always visible, click to toggle */}
              <button
                onClick={() => toggle(s.id)}
                className="w-full text-left px-6 py-5 flex items-center justify-between group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ background: s.color }}/>
                  <span className="font-semibold text-white" style={{ fontFamily: 'Georgia, serif' }}>{s.label}</span>
                  <span className="text-white/25 text-xs ml-1">
                    {l1.length + l2.length} lessons
                  </span>
                </div>
                <svg
                  width="16" height="16" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                  className={`text-white/30 transition-transform duration-200 flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`}
                >
                  <path d="M6 9l6 6 6-6"/>
                </svg>
              </button>

              {/* Expanded detail */}
              {isOpen && (
                <div className="px-6 pb-6 border-t border-white/5">
                  <div className="grid sm:grid-cols-2 gap-6 pt-5">
                    {/* Level 1 */}
                    <LessonColumn
                      level={1}
                      lessons={l1}
                      color={s.color}
                      label="Level 1"
                    />
                    {/* Level 2 */}
                    <LessonColumn
                      level={2}
                      lessons={l2}
                      color={s.color}
                      label="Level 2"
                    />
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

function LessonColumn({ level, lessons, color, label }) {
  if (lessons.length === 0) {
    return (
      <div>
        <p className="text-xs font-semibold text-white/25 tracking-widest uppercase mb-3">{label}</p>
        <p className="text-white/20 text-sm italic">Coming soon</p>
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-center gap-2 mb-3">
        <p className="text-xs font-semibold text-white/40 tracking-widest uppercase">{label}</p>
        <div className="h-px flex-1 bg-white/5"/>
      </div>
      <div className="space-y-3">
        {lessons.map((lesson, i) => (
          <div key={i} className="flex gap-3">
            <div
              className="w-6 h-6 rounded flex items-center justify-center text-[10px] font-bold flex-shrink-0 mt-0.5"
              style={{ background: color + '20', color }}
            >
              {i + 1}
            </div>
            <div className="min-w-0">
              <p className="text-white/85 text-sm font-medium leading-snug">{lesson.title}</p>
              <p className="text-white/35 text-xs mt-0.5 leading-relaxed line-clamp-2">
                {truncateSpark(lesson.spark)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function truncateSpark(spark) {
  if (!spark) return '';
  // Use first sentence only
  const first = spark.split(/[.?!]/)[0].trim();
  return first.length > 120 ? first.slice(0, 117) + '...' : first;
}
