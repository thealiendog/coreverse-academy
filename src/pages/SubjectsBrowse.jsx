import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ORIGINALS, CORE_ACADEMICS } from '../lib/constants';
import { getSubjectLessons } from '../data/subjectLessons';

const AGE_BANDS = [
  { level: 1, emoji: '⭐', label: 'Little Stars',    ages: '3–5'   },
  { level: 2, emoji: '🧭', label: 'Explorers',       ages: '6–8'   },
  { level: 3, emoji: '🚀', label: 'Upper Explorers', ages: '9–10'  },
  { level: 4, emoji: '🌟', label: 'Voyagers',        ages: '11–12' },
];

function bandLessons(subjectLessons, level) {
  return [subjectLessons.l1, subjectLessons.l2, subjectLessons.l3, subjectLessons.l4][level - 1] || [];
}

export default function SubjectsBrowse() {
  const navigate = useNavigate();
  const [expandedSubject, setExpandedSubject] = useState(null);
  const [expandedBand, setExpandedBand]       = useState(null); // `${subjectId}-${level}`

  // Pre-compute lesson data for all 14 subjects
  const allSubjects = [...ORIGINALS, ...CORE_ACADEMICS].map(s => ({
    ...s,
    lessons: getSubjectLessons(s.id),
  }));

  const totalSubjects = allSubjects.length;
  const totalLessons  = allSubjects.reduce((sum, s) => {
    const { l1, l2, l3, l4 } = s.lessons;
    return sum + l1.length + l2.length + l3.length + l4.length;
  }, 0);

  function toggleSubject(id) {
    setExpandedSubject(prev => prev === id ? null : id);
    setExpandedBand(null);
  }

  function toggleBand(subjectId, level) {
    const key = `${subjectId}-${level}`;
    setExpandedBand(prev => prev === key ? null : key);
  }

  function openLesson(subjectId, level, idx) {
    const url = level === 1
      ? `/child/lesson/${subjectId}/${idx}`
      : `/child/lesson/${subjectId}/${idx}?level=${level}`;
    navigate(url);
  }

  return (
    <div className="transition-page">
      <div className="mb-8">
        <h1 className="text-3xl font-semibold text-white" style={{ fontFamily: 'Georgia, serif' }}>
          Subjects
        </h1>
        <p className="text-white/40 text-sm mt-1">
          All {totalSubjects} learning areas · {totalLessons.toLocaleString()} total lessons
        </p>
      </div>

      {/* ── Coreverse Originals ─────────────────────────────────────── */}
      <SectionHeader label="Coreverse Originals" count={ORIGINALS.length} />
      <div className="space-y-2 mb-8">
        {allSubjects.filter(s => ORIGINALS.some(o => o.id === s.id)).map(s => (
          <SubjectRow
            key={s.id}
            subject={s}
            expandedSubject={expandedSubject}
            expandedBand={expandedBand}
            onToggleSubject={toggleSubject}
            onToggleBand={toggleBand}
            onOpenLesson={openLesson}
          />
        ))}
      </div>

      {/* ── Core Academics ──────────────────────────────────────────── */}
      <SectionHeader label="Core Academics" count={CORE_ACADEMICS.length} />
      <div className="space-y-2">
        {allSubjects.filter(s => CORE_ACADEMICS.some(a => a.id === s.id)).map(s => (
          <SubjectRow
            key={s.id}
            subject={s}
            expandedSubject={expandedSubject}
            expandedBand={expandedBand}
            onToggleSubject={toggleSubject}
            onToggleBand={toggleBand}
            onOpenLesson={openLesson}
          />
        ))}
      </div>
    </div>
  );
}

function SectionHeader({ label, count }) {
  return (
    <div className="flex items-center gap-3 mb-3">
      <p className="text-xs font-semibold text-white/30 tracking-widest uppercase whitespace-nowrap">
        {label} · {count}
      </p>
      <div className="flex-1 h-px bg-white/6" />
    </div>
  );
}

function SubjectRow({ subject: s, expandedSubject, expandedBand, onToggleSubject, onToggleBand, onOpenLesson }) {
  const isOpen = expandedSubject === s.id;
  const { l1, l2, l3, l4 } = s.lessons;
  const total = l1.length + l2.length + l3.length + l4.length;

  return (
    <div
      className={`bg-[#0F0B2E] border rounded-2xl overflow-hidden transition-all duration-200
        ${isOpen ? 'border-white/15' : 'border-white/5 hover:border-white/10'}`}
    >
      {/* Subject header */}
      <button
        onClick={() => onToggleSubject(s.id)}
        className="w-full text-left px-5 py-4 flex items-center justify-between group"
      >
        <div className="flex items-center gap-3 min-w-0">
          <span className="text-lg leading-none flex-shrink-0">{s.icon}</span>
          <span className="font-semibold text-white truncate" style={{ fontFamily: 'Georgia, serif' }}>
            {s.label}
          </span>
          {s.standard && (
            <span
              className="hidden sm:inline-block text-[9px] font-semibold px-1.5 py-0.5 rounded-full flex-shrink-0"
              style={{ background: s.color + '20', color: s.color }}
            >
              {s.standard}
            </span>
          )}
        </div>
        <div className="flex items-center gap-3 flex-shrink-0 ml-3">
          <span className="text-white/30 text-xs tabular-nums">
            {total > 0 ? `${total} lessons` : 'Coming soon'}
          </span>
          <svg
            width="14" height="14" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
            className={`text-white/25 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          >
            <path d="M6 9l6 6 6-6"/>
          </svg>
        </div>
      </button>

      {/* Age band accordion */}
      {isOpen && (
        <div className="border-t border-white/5">
          {AGE_BANDS.map(band => {
            const lessons = bandLessons(s.lessons, band.level);
            const bandKey = `${s.id}-${band.level}`;
            const isBandOpen = expandedBand === bandKey;

            return (
              <div key={band.level} className="border-b border-white/4 last:border-0">
                {/* Band header */}
                <button
                  onClick={() => lessons.length > 0 && onToggleBand(s.id, band.level)}
                  disabled={lessons.length === 0}
                  className={`w-full text-left px-5 py-3 flex items-center justify-between transition-colors
                    ${lessons.length > 0 ? 'hover:bg-white/3 cursor-pointer' : 'opacity-40 cursor-default'}`}
                >
                  <div className="flex items-center gap-2">
                    <span className="text-base leading-none">{band.emoji}</span>
                    <span className="text-sm font-medium text-white/80">{band.label}</span>
                    <span className="text-white/30 text-xs">Ages {band.ages}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-white/35 text-xs tabular-nums">
                      {lessons.length > 0 ? `${lessons.length} lessons` : 'Coming soon'}
                    </span>
                    {lessons.length > 0 && (
                      <svg
                        width="12" height="12" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                        className={`text-white/20 transition-transform duration-200 ${isBandOpen ? 'rotate-180' : ''}`}
                      >
                        <path d="M6 9l6 6 6-6"/>
                      </svg>
                    )}
                  </div>
                </button>

                {/* Lesson list */}
                {isBandOpen && lessons.length > 0 && (
                  <div className="px-5 pb-3 space-y-1">
                    {lessons.map((lesson, idx) => (
                      <button
                        key={idx}
                        onClick={() => onOpenLesson(s.id, band.level, idx)}
                        className="w-full text-left flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-white/4 transition-colors group"
                      >
                        <span
                          className="w-5 h-5 rounded flex items-center justify-center text-[9px] font-bold flex-shrink-0"
                          style={{ background: s.color + '25', color: s.color }}
                        >
                          {idx + 1}
                        </span>
                        <span className="text-white/70 text-sm leading-snug group-hover:text-white/90 transition-colors truncate">
                          {lesson.title}
                        </span>
                        <svg
                          width="10" height="10" viewBox="0 0 24 24" fill="none"
                          stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                          className="text-white/15 group-hover:text-white/40 transition-colors flex-shrink-0 ml-auto"
                        >
                          <path d="M9 18l6-6-6-6"/>
                        </svg>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
