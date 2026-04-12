import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getCurrentChild } from '../lib/storage';
import { getSubject, getAvatar, AGE_BANDS, ageToAgeBand } from '../lib/constants';
import { getLessons } from '../data/lessons';
import { getLevel2Lessons } from '../data/lessons_level2';
import { getLevel3Lessons } from '../data/lessons_level3';
import { getLevel4Lessons } from '../data/lessons_level4';
import { INNERWORLD_EXPLORERS } from '../data/innerworld_explorers';
import MONEYBUSINESS_EXPLORERS from '../data/moneybusiness_explorers_adapter';
import COSMOS_EXPLORERS from '../data/cosmos_explorers_adapter';
import FUTURESKILLS_EXPLORERS from '../data/futureskills_explorers_adapter';
import SOCIALLEADERSHIP_EXPLORERS from '../data/socialleadership_explorers_adapter';
import LIFEWELLNESS_EXPLORERS from '../data/lifewellness_explorers_adapter';
import CREATIVEARTS_EXPLORERS from '../data/creativearts_explorers_adapter';
import HISTORYWORLD_EXPLORERS from '../data/historyworld_explorers_adapter';
import INNERWORLD_UPPEREXPLORERS from '../data/innerworld_upperexplorers_adapter';
import COSMOS_UPPEREXPLORERS from '../data/cosmos_upperexplorers_adapter';
import FUTURESKILLS_UPPEREXPLORERS from '../data/futureskills_upperexplorers_adapter';
import SOCIALLEADERSHIP_UPPEREXPLORERS from '../data/socialleadership_upperexplorers_adapter';
import LIFEWELLNESS_UPPEREXPLORERS from '../data/lifewellness_upperexplorers_adapter';
import MONEYBUSINESS_UPPEREXPLORERS from '../data/moneybusiness_upperexplorers_adapter';

export default function SubjectView() {
  const { subjectId } = useParams();
  const navigate = useNavigate();
  const child = getCurrentChild();
  const s = getSubject(subjectId);
  // Default to child's age band; fallback to Explorers (level 2) if no child
  const childBand = child ? ageToAgeBand(child.age) : AGE_BANDS[1];
  const [level, setLevel] = useState(childBand.level);

  // child may be null (parent browsing) — show preview with no progress
  const av = child ? getAvatar(child.avatar) : getAvatar('nova');
  const progress = child?.progress || {};

  const l1Lessons = getLessons(subjectId);
  // Subject-specific Explorers curricula override level 2
  const l2Lessons = subjectId === 'inner-world' ? INNERWORLD_EXPLORERS
    : subjectId === 'money'          ? MONEYBUSINESS_EXPLORERS
    : subjectId === 'cosmos'         ? COSMOS_EXPLORERS
    : subjectId === 'future-skills'  ? FUTURESKILLS_EXPLORERS
    : subjectId === 'leadership'     ? SOCIALLEADERSHIP_EXPLORERS
    : subjectId === 'wellness'       ? LIFEWELLNESS_EXPLORERS
    : subjectId === 'creative-arts'  ? CREATIVEARTS_EXPLORERS
    : subjectId === 'history'        ? HISTORYWORLD_EXPLORERS
    : getLevel2Lessons(subjectId);
  // Subject-specific Upper Explorers curricula override level 3
  const l3Lessons = subjectId === 'inner-world' ? INNERWORLD_UPPEREXPLORERS
    : subjectId === 'cosmos'        ? COSMOS_UPPEREXPLORERS
    : subjectId === 'money'         ? MONEYBUSINESS_UPPEREXPLORERS
    : subjectId === 'future-skills'  ? FUTURESKILLS_UPPEREXPLORERS
    : subjectId === 'leadership'     ? SOCIALLEADERSHIP_UPPEREXPLORERS
    : subjectId === 'wellness'       ? LIFEWELLNESS_UPPEREXPLORERS
    : getLevel3Lessons(subjectId);
  const l4Lessons = getLevel4Lessons(subjectId);

  const lessonsByLevel = { 1: l1Lessons, 2: l2Lessons, 3: l3Lessons, 4: l4Lessons };
  const lessonData = lessonsByLevel[level] || [];
  const progressKey = level === 1 ? subjectId : `${subjectId}__${level}`;
  const doneLessons = progress[progressKey] || 0;
  const hasContent = lessonData.length > 0;
  const activeBand = AGE_BANDS.find(b => b.level === level) || AGE_BANDS[1];

  function handleLessonClick(i) {
    if (!hasContent) return;
    if (i > doneLessons) return;
    if (!child) { navigate('/child/select'); return; }
    const url = level === 1
      ? `/child/lesson/${subjectId}/${i}`
      : `/child/lesson/${subjectId}/${i}?level=${level}`;
    navigate(url);
  }

  return (
    <div className="min-h-screen bg-[#080618] transition-page">
      {/* Background glow */}
      <div className="fixed inset-0 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{ background: `radial-gradient(ellipse 60% 40% at 50% 0%, ${s.color}20 0%, transparent 70%)` }}
        />
      </div>

      <div className="relative z-10 max-w-2xl mx-auto px-4 py-8">
        {/* Back */}
        <button
          onClick={() => navigate('/child/dashboard')}
          className="flex items-center gap-2 text-white/40 hover:text-white mb-8 transition-colors text-sm"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
          My dashboard
        </button>

        {/* Subject header */}
        <div className="text-center mb-10">
          <div className="w-3 h-3 rounded-full mx-auto mb-4" style={{ background: s.color }}/>
          <h1 className="text-4xl font-semibold text-white mb-3" style={{ fontFamily: 'Georgia, serif' }}>
            {s.label}
          </h1>
          <p className="text-base mb-4" style={{ color: av.accent }}>
            {av.name} is your guide
          </p>
          <div className="inline-flex items-center gap-2 bg-white/5 rounded-full px-4 py-1.5">
            <div className="w-2 h-2 rounded-full" style={{ background: s.color }}/>
            <span className="text-white/50 text-sm">
              {doneLessons} of {lessonData.length} lessons done
            </span>
          </div>
        </div>

        {/* Avatar speech bubble */}
        <div className="flex gap-4 mb-6 bg-[#0F0B2E] rounded-2xl p-5 border border-white/8">
          <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0" style={{ boxShadow: `0 0 0 2px ${av.accent}30` }}>
            <img src={av.image} alt={av.name} className="w-full h-full object-cover" />
          </div>
          <div>
            <p className="text-xs font-semibold mb-1" style={{ color: av.accent }}>{av.name} says:</p>
            <p className="text-white/65 text-sm leading-relaxed">{getAvatarSpeech(av.id, s.label)}</p>
          </div>
        </div>

        {/* Age band tabs */}
        <div className="flex gap-1 mb-6 bg-white/4 rounded-2xl p-1">
          {AGE_BANDS.map(band => {
            const available = (lessonsByLevel[band.level] || []).length > 0;
            const isActive  = level === band.level;
            const isChildBand = band.level === childBand.level;
            return (
              <button
                key={band.id}
                onClick={() => available && setLevel(band.level)}
                disabled={!available}
                className={`flex-1 py-2 rounded-xl transition-all duration-200 text-center relative
                  ${isActive
                    ? 'bg-[#0F0B2E] text-white shadow-sm'
                    : available
                      ? 'text-white/35 hover:text-white/60'
                      : 'text-white/12 cursor-not-allowed'}`}
              >
                <span className="block text-[9px] font-medium opacity-70 leading-tight">Ages {band.ages}</span>
                <span className="block text-[11px] font-semibold leading-tight mt-0.5">{band.label}</span>
                {isChildBand && !isActive && (
                  <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-[#A78BFA]" />
                )}
              </button>
            );
          })}
        </div>

        {/* Active band label */}
        <div className="flex items-center justify-between mb-4">
          <p className="text-white/30 text-xs font-semibold tracking-widest uppercase">
            {activeBand.label} · {lessonData.length} lessons
          </p>
          {childBand.level === level && (
            <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full" style={{ background: 'rgba(167,139,250,0.12)', color: '#A78BFA' }}>
              {child ? `${child.name}'s band` : 'Your band'}
            </span>
          )}
        </div>

        {/* Lesson list */}
        {hasContent ? (
          <div className="space-y-3">
            {lessonData.map((lesson, i) => {
              const isDone     = i < doneLessons;
              const isUnlocked = i <= doneLessons;
              const isCurrent  = i === doneLessons;

              return (
                <button
                  key={i}
                  onClick={() => handleLessonClick(i)}
                  disabled={!isUnlocked}
                  className={`w-full text-left rounded-2xl p-5 border transition-all duration-200
                    ${isDone
                      ? 'border-emerald-500/30 bg-emerald-500/8 hover:border-emerald-500/50 hover:scale-[1.01]'
                      : isUnlocked
                        ? 'border-white/12 bg-white/4 hover:border-white/25 hover:bg-white/7 hover:scale-[1.01]'
                        : 'border-white/5 bg-white/2 opacity-40 cursor-not-allowed'}`}
                >
                  <div className="flex items-center gap-4">
                    {/* Number / check */}
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold flex-shrink-0 transition-all
                        ${isDone ? 'bg-emerald-500 text-white' : ''}`}
                      style={!isDone ? { background: s.color + (isUnlocked ? '28' : '12'), color: isUnlocked ? s.color : 'rgba(255,255,255,0.2)' } : {}}
                    >
                      {isDone ? (
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                          <path d="M2.5 7l3 3 6-6" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      ) : i + 1}
                    </div>

                    <div className="flex-1 min-w-0">
                      <p className={`font-semibold truncate ${isDone ? 'text-emerald-400' : isUnlocked ? 'text-white' : 'text-white/30'}`}>
                        {lesson.title}
                      </p>
                      <p className="text-xs text-white/30 mt-0.5">
                        {isDone       ? 'Completed'
                          : isUnlocked  ? (lesson.duration ? `~${lesson.duration}` : 'Tap to start')
                          : 'Complete previous lesson first'}
                      </p>
                    </div>

                    {isCurrent && (
                      <div
                        className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                        style={{ background: s.color + '30' }}
                      >
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: s.color }}>
                          <polygon points="5 3 19 12 5 21 5 3"/>
                        </svg>
                      </div>
                    )}
                    {isDone && (
                      <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 bg-emerald-500/15">
                        <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
                          <path d="M2.5 7l3 3 6-6" stroke="#34d399" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-10 border border-dashed border-white/8 rounded-2xl">
            <p className="text-white/30 text-sm">Coming soon</p>
          </div>
        )}
      </div>
    </div>
  );
}

function getAvatarSpeech(avatarId, subjectLabel) {
  const speeches = {
    nova:  `Ready to explore? ${subjectLabel} is one of the most fascinating things you'll ever study. Let's discover it together!`,
    sage:  `Take a gentle breath. In ${subjectLabel}, we slow down and listen to the wisdom that lives inside you.`,
    byte:  `Every expert was once a beginner. In ${subjectLabel}, we build step by step — you'll amaze yourself.`,
    ace:   `${subjectLabel} is a tool, and knowing how to use it changes everything. Let's build something real.`,
    muse:  `Expression is your superpower. ${subjectLabel} is where your imagination leads. There are no wrong answers here.`,
    valor: `Every great journey starts where you are. In ${subjectLabel}, we build courage, character, and heart.`,
    terra: `The world is alive and full of stories. ${subjectLabel} teaches us to listen and understand.`,
    lyra:  `Words and ideas are magic. In ${subjectLabel}, you'll find your voice and discover ideas worth sharing.`,
  };
  return speeches[avatarId] || `Welcome to ${subjectLabel}! Let's learn something wonderful today.`;
}
