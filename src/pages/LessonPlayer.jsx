import { useState, useMemo } from 'react';
import { useParams, useNavigate, useSearchParams } from 'react-router-dom';
import { getCurrentChild, getCurrentParent, updateChildProgress, awardBadge } from '../lib/storage';
import { getAvatar, getSubject } from '../lib/constants';
import { sendLessonCompleteEmail } from '../lib/email';
import { getLesson } from '../data/lessons';
import { getLevel2Lesson } from '../data/lessons_level2';
import { getLevel3Lesson } from '../data/lessons_level3';
import { getLevel4Lesson } from '../data/lessons_level4';
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
import MONEYBUSINESS_UPPEREXPLORERS from '../data/moneybusiness_upperexplorers_adapter';
import NovaChat from '../components/NovaChat';

const SECTIONS = ['Arrival', 'Spark', 'Learn', 'Explore', 'Quick Check', 'Quiz', 'Celebration'];
const CONFETTI_COLORS = ['#7C3AED', '#A78BFA', '#F59E0B', '#FCD34D', '#10B981', '#60A5FA', '#F472B6'];

// ── Word-by-word animated text reveal ────────────────────────────────────────
function WordReveal({ text, baseDelay = 0, speed = 0.065, className = '' }) {
  return (
    <span className={className}>
      {text.split(' ').map((word, i) => (
        <span
          key={i}
          className="lesson-word"
          style={{ animationDelay: `${baseDelay + i * speed}s`, marginRight: '0.28em' }}
        >
          {word}
        </span>
      ))}
    </span>
  );
}

// ── Floating stars for celebration ───────────────────────────────────────────
function StarField() {
  const stars = useMemo(() =>
    Array.from({ length: 22 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: 5 + Math.random() * 85,
      size: 3 + Math.random() * 7,
      delay: Math.random() * 4,
      duration: 2.2 + Math.random() * 3.2,
      color: CONFETTI_COLORS[i % CONFETTI_COLORS.length],
    })), []
  );
  return (
    <div className="fixed inset-0 pointer-events-none z-[54] overflow-hidden">
      {stars.map(s => (
        <div
          key={s.id}
          style={{
            position: 'absolute',
            left: `${s.x}%`,
            top: `${s.y}%`,
            width: s.size,
            height: s.size,
            background: s.color,
            borderRadius: '50%',
            boxShadow: `0 0 ${s.size * 2}px ${s.color}`,
            animation: `lesson-star-float-kf ${s.duration}s ease-in-out ${s.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
}

// ── Confetti rain for celebration ─────────────────────────────────────────────
function Confetti() {
  const pieces = useMemo(() =>
    Array.from({ length: 55 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      color: CONFETTI_COLORS[i % CONFETTI_COLORS.length],
      delay: Math.random() * 2.8,
      duration: 2.6 + Math.random() * 2.2,
      size: 5 + Math.floor(Math.random() * 9),
      round: Math.random() > 0.5,
      rot: Math.floor(Math.random() * 360),
    })), []
  );
  return (
    <div className="fixed inset-0 pointer-events-none z-[55] overflow-hidden">
      {pieces.map(p => (
        <div
          key={p.id}
          style={{
            position: 'absolute',
            left: `${p.x}%`,
            top: -20,
            width: p.size,
            height: p.size,
            background: p.color,
            borderRadius: p.round ? '50%' : '2px',
            transform: `rotate(${p.rot}deg)`,
            animation: `lesson-confetti-fall ${p.duration}s ease-in ${p.delay}s both`,
          }}
        />
      ))}
    </div>
  );
}

// ── Option card helper for QC and Quiz ───────────────────────────────────────
// variant: 'quiz' (gold correct) | 'qc' (green correct)
function OptionCard({ label, text, delay, isCorrect, isWrong, isReveal, onClick, disabled, variant = 'quiz' }) {
  let bg    = 'rgba(255,255,255,0.04)';
  let border = 'rgba(255,255,255,0.10)';
  let color  = 'rgba(255,255,255,0.82)';
  let anim   = `lesson-option-up 0.42s cubic-bezier(0.16,1,0.3,1) ${delay}s both`;

  if (isCorrect) {
    if (variant === 'qc') {
      bg = 'rgba(16,185,129,0.12)'; border = '#10B981'; color = '#6EE7B7';
      anim += ', lesson-correct-green-pulse 0.6s ease-out 0.05s both';
    } else {
      bg = 'rgba(245,158,11,0.12)'; border = '#F59E0B'; color = '#FCD34D';
      anim += ', lesson-correct-pulse 0.6s ease-out 0.05s both';
    }
  } else if (isWrong) {
    bg = 'rgba(239,68,68,0.12)'; border = '#EF4444'; color = '#FCA5A5';
    anim += ', lesson-shake 0.45s ease both';
  } else if (isReveal) {
    bg = 'rgba(255,255,255,0.02)'; border = 'rgba(255,255,255,0.06)'; color = 'rgba(255,255,255,0.35)';
  }

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="w-full text-left px-6 py-4 rounded-xl text-sm font-medium transition-colors duration-200 disabled:cursor-default hover:enabled:brightness-110"
      style={{
        background: bg,
        border: `1px solid ${border}`,
        color,
        animation: anim,
      }}
    >
      <span className="font-bold mr-3" style={{ color: 'rgba(255,255,255,0.35)' }}>
        {label}.
      </span>
      {text}
    </button>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
export default function LessonPlayer() {
  const { subjectId, lessonIdx } = useParams();
  const [searchParams] = useSearchParams();
  const navigate  = useNavigate();
  const child     = getCurrentChild();
  const parent    = getCurrentParent();
  const idx       = parseInt(lessonIdx, 10);
  const level     = parseInt(searchParams.get('level') || '1', 10);
  const progressKey = level === 1 ? subjectId : `${subjectId}__${level}`;
  const levelGetters = { 1: getLesson, 2: getLevel2Lesson, 3: getLevel3Lesson, 4: getLevel4Lesson };
  const explorerOverrides = { 'inner-world': INNERWORLD_EXPLORERS, 'money': MONEYBUSINESS_EXPLORERS, 'cosmos': COSMOS_EXPLORERS, 'future-skills': FUTURESKILLS_EXPLORERS, 'leadership': SOCIALLEADERSHIP_EXPLORERS, 'wellness': LIFEWELLNESS_EXPLORERS, 'creative-arts': CREATIVEARTS_EXPLORERS, 'history': HISTORYWORLD_EXPLORERS };
  const upperExplorerOverrides = { 'inner-world': INNERWORLD_UPPEREXPLORERS, 'cosmos': COSMOS_UPPEREXPLORERS, 'money': MONEYBUSINESS_UPPEREXPLORERS };
  const lesson = (level === 2 && explorerOverrides[subjectId])
    ? (explorerOverrides[subjectId][idx] || null)
    : (level === 3 && upperExplorerOverrides[subjectId])
      ? (upperExplorerOverrides[subjectId][idx] || null)
      : (levelGetters[level] || getLesson)(subjectId, idx);
  const subject   = getSubject(subjectId);
  const guideAvatar = getAvatar(lesson?.guide || lesson?.avatar || child?.avatar);

  const [section,       setSection]       = useState(0);
  const [sparkAnswer,   setSparkAnswer]   = useState('');
  const [exploreAnswer, setExploreAnswer] = useState('');
  const [qcSelected,    setQcSelected]    = useState(null);
  const [qcWrong,       setQcWrong]       = useState(false);
  const [quizAnswers,   setQuizAnswers]   = useState([]);
  const [quizCurrent,   setQuizCurrent]   = useState(0);
  const [score,         setScore]         = useState(null);
  const [badgeAwarded,  setBadgeAwarded]  = useState(false);
  const [quizSelected,  setQuizSelected]  = useState(null);
  const [quizWrongIdx,  setQuizWrongIdx]  = useState(null);

  if (!child) { navigate('/child/select'); return null; }
  if (!lesson) {
    return (
      <div className="min-h-screen bg-[#080618] flex items-center justify-center text-white/50">
        Lesson not found.
      </div>
    );
  }

  const passScore   = Math.max(2, Math.ceil((lesson.quiz?.length || 5) * 0.6));
  const name        = child.name;
  const arrivalText = lesson.arrival.replace(/\{\{name\}\}/g, name);
  const ctaDelay    = Math.min(0.6 + arrivalText.split(' ').length * 0.058 + 0.4, 4.0);

  function advance() { setSection(s => s + 1); }

  function handleQcSelect(optIdx) {
    if (qcSelected !== null) return;
    setQcSelected(optIdx);
    if (optIdx === lesson.quickCheck.correct) {
      setTimeout(() => advance(), 850);
    } else {
      setQcWrong(true);
      setTimeout(() => { setQcSelected(null); setQcWrong(false); }, 1000);
    }
  }

  function handleQuizSelect(optIdx) {
    if (quizSelected !== null) return;
    const isCorrect  = optIdx === lesson.quiz[quizCurrent].correct;
    setQuizSelected(optIdx);
    if (!isCorrect) {
      setQuizWrongIdx(optIdx);
      setTimeout(() => setQuizWrongIdx(null), 600);
    }
    const newAnswers = [...quizAnswers, isCorrect];
    setQuizAnswers(newAnswers);

    if (quizCurrent < lesson.quiz.length - 1) {
      setTimeout(() => {
        setQuizCurrent(c => c + 1);
        setQuizSelected(null);
        setQuizWrongIdx(null);
      }, 750);
    } else {
      const finalScore = newAnswers.filter(Boolean).length;
      setScore(finalScore);
      if (finalScore >= passScore && !badgeAwarded) {
        if (parent) {
          updateChildProgress(parent.id, child.id, progressKey, idx);
          awardBadge(parent.id, child.id, lesson.badge);
          sendLessonCompleteEmail({
            parentEmail:  parent.email,
            parentName:   parent.name,
            childName:    child.name,
            lessonTitle:  lesson.title,
            subjectLabel: subject.label,
            badge:        lesson.badge,
            explore:      lesson.explore || '',
          });
        }
        setBadgeAwarded(true);
      }
      setTimeout(() => advance(), 850);
    }
  }

  const pct = Math.round((section / (SECTIONS.length - 1)) * 100);

  return (
    <div className="min-h-screen bg-[#080618] flex flex-col overflow-hidden">

      {/* ── Fixed top bar ──────────────────────────────────────── */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-[#080618]/92 backdrop-blur border-b border-white/5">
        <div className="max-w-2xl mx-auto px-4 py-3 flex items-center gap-4">
          <button
            onClick={() => navigate(`/child/subject/${subjectId}`)}
            className="text-white/30 hover:text-white/70 transition-colors flex-shrink-0"
            aria-label="Back"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
          </button>
          <div className="flex-1">
            <div className="h-1.5 bg-white/8 rounded-full overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-700 ease-out"
                style={{ width: `${pct}%`, background: subject.color }}
              />
            </div>
          </div>
          <span className="text-white/25 text-xs flex-shrink-0 tabular-nums">
            {section + 1}/{SECTIONS.length}
          </span>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════ */}
      {/* SECTION 0 — ARRIVAL                                       */}
      {/* ══════════════════════════════════════════════════════════ */}
      {section === 0 && (
        <div className="min-h-screen flex flex-col items-center justify-center px-6 pt-20 pb-44 relative">
          {/* Subject color wash */}
          <div className="fixed inset-0 pointer-events-none" style={{
            background: `
              radial-gradient(ellipse 75% 55% at 28% 22%, ${subject.color}28 0%, transparent 60%),
              radial-gradient(ellipse 55% 45% at 78% 82%, ${subject.color}16 0%, transparent 55%)
            `,
          }} />

          <div className="relative z-10 max-w-lg w-full text-center">
            {/* Guide identity */}
            <div className="lesson-fade-in mb-8" style={{ animationDelay: '0.1s' }}>
              <div
                className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-3 glow-pulse"
                style={{ boxShadow: `0 0 48px ${guideAvatar.accent}45, 0 0 0 2px ${guideAvatar.accent}30` }}
              >
                <img src={guideAvatar.image} alt={guideAvatar.name} className="w-full h-full object-cover" />
              </div>
              <p className="text-xs font-semibold tracking-widest uppercase mb-1" style={{ color: guideAvatar.accent }}>
                {guideAvatar.name} the {guideAvatar.animal}
              </p>
              <span className="text-white/25 text-xs">Lesson {idx + 1} · {subject.label}</span>
            </div>

            {/* Lesson title — word by word */}
            <h1 className="text-4xl font-semibold text-white mb-8 leading-tight" style={{ fontFamily: 'Georgia, serif' }}>
              <WordReveal text={lesson.title} baseDelay={0.28} speed={0.075} />
            </h1>

            {/* Arrival text card */}
            <div
              className="lesson-slide-up rounded-2xl p-6 mb-10 text-left"
              style={{
                animationDelay: '0.5s',
                background: 'rgba(15,11,46,0.88)',
                border: `1px solid ${subject.color}28`,
                backdropFilter: 'blur(16px)',
                boxShadow: `0 4px 40px ${subject.color}10`,
              }}
            >
              <p className="text-white/78 leading-relaxed text-base">
                <WordReveal text={arrivalText} baseDelay={0.62} speed={0.056} />
              </p>
            </div>

            {/* CTA — fades in after text finishes */}
            <div className="lesson-fade-in" style={{ animationDelay: `${ctaDelay}s` }}>
              <button
                onClick={advance}
                className="px-12 py-4 rounded-2xl font-semibold text-white text-lg transition-all hover:scale-105 hover:shadow-2xl active:scale-95"
                style={{
                  background: `linear-gradient(135deg, ${subject.color}ee, ${subject.color}99)`,
                  boxShadow: `0 4px 44px ${subject.color}48`,
                }}
              >
                Let's begin
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ══════════════════════════════════════════════════════════ */}
      {/* SECTION 1 — SPARK                                         */}
      {/* ══════════════════════════════════════════════════════════ */}
      {section === 1 && (
        <div className="min-h-screen flex flex-col items-center justify-center px-6 pt-20 pb-44">
          <div className="max-w-lg w-full">
            <p className="text-xs font-semibold text-white/30 tracking-widest uppercase mb-8 text-center lesson-fade-in">
              Spark
            </p>

            {/* Pulsing question card */}
            <div
              className="rounded-3xl p-8 mb-8 text-center lesson-zoom-in lesson-spark-glow"
              style={{
                background: 'linear-gradient(135deg, rgba(124,58,237,0.14) 0%, rgba(76,29,149,0.08) 100%)',
                border: '1px solid rgba(124,58,237,0.38)',
              }}
            >
              <div className="w-2 h-2 rounded-full mx-auto mb-6" style={{ background: subject.color }} />
              <p className="text-2xl font-semibold text-white leading-snug" style={{ fontFamily: 'Georgia, serif' }}>
                <WordReveal text={lesson.spark} baseDelay={0.18} speed={0.07} />
              </p>
            </div>

            {/* Answer input */}
            <div className="lesson-slide-up" style={{ animationDelay: '0.45s' }}>
              <p className="text-white/40 text-sm mb-3">What do you think? Share your ideas:</p>
              <textarea
                value={sparkAnswer}
                onChange={e => setSparkAnswer(e.target.value)}
                placeholder="Write anything that comes to mind..."
                rows={5}
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder-white/20 focus:outline-none focus:border-[#7C3AED]/55 focus:ring-2 focus:ring-[#7C3AED]/18 resize-none text-sm leading-relaxed transition-all"
              />
              <button
                onClick={advance}
                className="mt-5 w-full py-4 rounded-2xl font-semibold text-white transition-all hover:scale-[1.01] hover:shadow-xl active:scale-[0.99]"
                style={{ background: subject.color }}
              >
                {sparkAnswer.trim() ? 'Continue →' : 'Skip for now'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ══════════════════════════════════════════════════════════ */}
      {/* SECTION 2 — LEARN                                         */}
      {/* ══════════════════════════════════════════════════════════ */}
      {section === 2 && (
        <div className="min-h-screen px-6 pt-24 pb-44 max-w-2xl mx-auto w-full">
          <p className="text-xs font-semibold text-white/30 tracking-widest uppercase mb-3 text-center lesson-fade-in">
            Learn
          </p>
          <h2
            className="text-2xl font-semibold text-white mb-10 text-center lesson-zoom-in"
            style={{ fontFamily: 'Georgia, serif', animationDelay: '0.08s' }}
          >
            {lesson.title}
          </h2>

          {/* Each paragraph = its own card, slides in from right with 300ms stagger */}
          <div className="space-y-4 mb-10">
            {lesson.learn.map((para, i) => (
              <div
                key={i}
                className="rounded-2xl p-5 relative overflow-hidden"
                style={{
                  background: 'rgba(15,11,46,0.80)',
                  border: `1px solid ${subject.color}28`,
                  boxShadow: `0 4px 28px ${subject.color}0a`,
                  animation: `lesson-slide-from-right-kf 0.50s cubic-bezier(0.16,1,0.3,1) ${0.05 + i * 0.30}s both`,
                }}
              >
                {/* Subject icon — top right */}
                <div
                  className="absolute top-4 right-4 w-7 h-7 rounded-lg flex items-center justify-center text-[10px] font-bold flex-shrink-0"
                  style={{ background: `${subject.color}22`, color: subject.color, letterSpacing: 0 }}
                >
                  {subject.label.slice(0, 2)}
                </div>

                <div className="flex gap-3 pr-8">
                  <div
                    className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5"
                    style={{ background: `${subject.color}28`, color: subject.color }}
                  >
                    {i + 1}
                  </div>
                  <p className="text-white/82 leading-relaxed text-sm">{para}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="lesson-fade-in" style={{ animationDelay: `${0.12 + lesson.learn.length * 0.11}s` }}>
            <button
              onClick={advance}
              className="w-full py-4 rounded-2xl font-semibold text-white transition-all hover:scale-[1.01] hover:shadow-xl"
              style={{ background: subject.color }}
            >
              I've read this ✓
            </button>
          </div>
        </div>
      )}

      {/* ══════════════════════════════════════════════════════════ */}
      {/* SECTION 3 — EXPLORE                                       */}
      {/* ══════════════════════════════════════════════════════════ */}
      {section === 3 && (
        <div className="min-h-screen flex flex-col items-center justify-center px-6 pt-20 pb-44">
          <div className="max-w-lg w-full">
            <p className="text-xs font-semibold text-white/30 tracking-widest uppercase mb-8 text-center lesson-fade-in">
              Explore
            </p>

            {/* Mission briefing card — animated purple border */}
            {(() => {
              const bullets = lesson.explore
                .replace(/\. /g, '.\n')
                .split(/\n+/)
                .map(s => s.trim().replace(/\.$/, ''))
                .filter(Boolean);
              return (
                <div
                  className="rounded-2xl p-7 mb-8 lesson-zoom-in lesson-explore-glow"
                  style={{
                    background: 'linear-gradient(145deg, rgba(124,58,237,0.12) 0%, rgba(15,11,46,0.96) 65%)',
                    border: '1px solid rgba(124,58,237,0.42)',
                    animationDelay: '0.04s',
                  }}
                >
                  <div className="flex items-center gap-3 mb-5">
                    <div
                      className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0"
                      style={{ boxShadow: `0 0 0 2px ${guideAvatar.accent}38` }}
                    >
                      <img src={guideAvatar.image} alt={guideAvatar.name} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <p className="text-[10px] font-semibold tracking-widest uppercase text-white/35 mb-0.5">Your Mission</p>
                      <p className="text-sm font-semibold" style={{ color: guideAvatar.accent }}>{guideAvatar.name} says:</p>
                    </div>
                  </div>
                  {bullets.length > 1 ? (
                    <ul className="space-y-2.5">
                      {bullets.map((bullet, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2.5 text-white/75 text-sm leading-relaxed"
                          style={{
                            animation: `lesson-slide-from-right-kf 0.44s cubic-bezier(0.16,1,0.3,1) ${0.18 + i * 0.18}s both`,
                            opacity: 0,
                          }}
                        >
                          <span
                            className="mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0"
                            style={{ background: '#A78BFA' }}
                          />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-white/75 leading-relaxed text-sm">{lesson.explore}</p>
                  )}
                </div>
              );
            })()}

            {/* Response area */}
            <div className="lesson-slide-up" style={{ animationDelay: '0.32s' }}>
              <p className="text-white/40 text-sm mb-3">Your response:</p>
              <textarea
                value={exploreAnswer}
                onChange={e => setExploreAnswer(e.target.value)}
                placeholder="Take your time with this one..."
                rows={6}
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder-white/20 focus:outline-none focus:border-[#7C3AED]/55 focus:ring-2 focus:ring-[#7C3AED]/18 resize-none text-sm leading-relaxed transition-all"
              />
              <button
                onClick={advance}
                className="mt-5 w-full py-4 rounded-2xl font-semibold text-white transition-all hover:scale-[1.01] hover:shadow-xl"
                style={{ background: subject.color }}
              >
                {exploreAnswer.trim() ? 'Mission complete →' : 'Skip for now'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ══════════════════════════════════════════════════════════ */}
      {/* SECTION 4 — QUICK CHECK                                   */}
      {/* ══════════════════════════════════════════════════════════ */}
      {section === 4 && (
        <div className="min-h-screen flex flex-col items-center justify-center px-6 pt-20 pb-44">
          <div className="max-w-lg w-full">
            <p className="text-xs font-semibold text-white/30 tracking-widest uppercase mb-8 text-center lesson-fade-in">
              Quick Check
            </p>

            {/* Big question display */}
            <div
              className="rounded-2xl p-8 mb-6 lesson-zoom-in"
              style={{
                background: 'rgba(15,11,46,0.88)',
                border: `1px solid ${subject.color}28`,
                boxShadow: `0 0 44px ${subject.color}12`,
                animationDelay: '0.04s',
              }}
            >
              <p className="text-xl font-semibold text-white leading-snug text-center" style={{ fontFamily: 'Georgia, serif' }}>
                {lesson.quickCheck.question}
              </p>
            </div>

            {qcWrong && (
              <p className="text-red-400 text-sm text-center mb-4 font-medium lesson-fade-in">
                Not quite — try again!
              </p>
            )}

            <div className="space-y-3">
              {lesson.quickCheck.options.map((opt, i) => {
                const isSelected = qcSelected === i;
                const isCorrect  = i === lesson.quickCheck.correct;
                const showResult = qcSelected !== null;
                return (
                  <OptionCard
                    key={i}
                    label={String.fromCharCode(65 + i)}
                    text={opt}
                    delay={0.14 + i * 0.08}
                    isCorrect={showResult && isSelected && isCorrect}
                    isWrong={showResult && isSelected && !isCorrect}
                    isReveal={showResult && !isSelected}
                    onClick={() => handleQcSelect(i)}
                    disabled={qcSelected !== null}
                    variant="qc"
                  />
                );
              })}
            </div>
            <p className="text-white/20 text-xs text-center mt-6">Answer correctly to continue</p>
          </div>
        </div>
      )}

      {/* ══════════════════════════════════════════════════════════ */}
      {/* SECTION 5 — QUIZ                                          */}
      {/* ══════════════════════════════════════════════════════════ */}
      {section === 5 && score === null && (
        <div className="min-h-screen flex flex-col items-center justify-center px-6 pt-20 pb-44">
          <div className="max-w-lg w-full">
            {/* Quiz header stays stable */}
            <div className="flex items-center justify-between mb-5">
              <p className="text-xs font-semibold text-white/30 tracking-widest uppercase">Quiz</p>
              <span className="text-white/30 text-xs tabular-nums">{quizCurrent + 1} / {lesson.quiz.length}</span>
            </div>
            <div className="h-1 bg-white/8 rounded-full mb-8 overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-500"
                style={{ width: `${(quizCurrent / lesson.quiz.length) * 100}%`, background: subject.color }}
              />
            </div>

            {/* Keyed on quizCurrent — remounts & re-animates per question */}
            <div key={quizCurrent}>
              {/* Question slides in from top */}
              <div
                className="rounded-2xl p-7 mb-6"
                style={{
                  background: 'rgba(15,11,46,0.88)',
                  border: `1px solid ${subject.color}28`,
                  boxShadow: `0 0 52px ${subject.color}12`,
                  animation: 'lesson-slide-from-top-kf 0.45s cubic-bezier(0.16,1,0.3,1) both',
                }}
              >
                <p className="text-xl font-semibold text-white leading-snug" style={{ fontFamily: 'Georgia, serif' }}>
                  {lesson.quiz[quizCurrent].question}
                </p>
              </div>

              {/* Options slide up with stagger */}
              <div className="space-y-3">
                {lesson.quiz[quizCurrent].options.map((opt, i) => {
                  const isSelected = quizSelected === i;
                  const isCorrect  = i === lesson.quiz[quizCurrent].correct;
                  const isWrong    = i === quizWrongIdx;
                  const showCorrect = quizSelected !== null && isCorrect && !isSelected;
                  return (
                    <OptionCard
                      key={i}
                      label={String.fromCharCode(65 + i)}
                      text={opt}
                      delay={0.08 + i * 0.07}
                      isCorrect={isSelected && isCorrect}
                      isWrong={isWrong}
                      isReveal={quizSelected !== null && !isSelected && !showCorrect}
                      onClick={() => handleQuizSelect(i)}
                      disabled={quizSelected !== null}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ══════════════════════════════════════════════════════════ */}
      {/* SECTION 6 — CELEBRATION                                   */}
      {/* ══════════════════════════════════════════════════════════ */}
      {section === 6 && (
        <div className="min-h-screen flex flex-col items-center justify-center px-6 pt-20 pb-44 text-center">
          {score >= passScore ? (
            <>
              <Confetti />
              <StarField />

              {/* Badge drops in */}
              <div
                className="lesson-badge-drop w-40 h-40 rounded-full flex items-center justify-center mb-7"
                style={{
                  background: `radial-gradient(circle at 38% 32%, ${guideAvatar.accent}, ${guideAvatar.color})`,
                  boxShadow: `0 0 90px ${guideAvatar.accent}55, 0 0 0 4px ${guideAvatar.accent}22`,
                }}
              >
                <div className="text-center px-3">
                  <p className="text-white/90 text-[10px] font-semibold tracking-widest uppercase mb-1">Badge</p>
                  <p className="text-white font-bold text-sm leading-tight">{lesson.badge}</p>
                </div>
              </div>

              <div
                className="w-16 h-16 rounded-full overflow-hidden mb-4 lesson-fade-in"
                style={{ boxShadow: `0 0 0 2px ${guideAvatar.accent}42`, animationDelay: '0.45s' }}
              >
                <img src={guideAvatar.image} alt={guideAvatar.name} className="w-full h-full object-cover" />
              </div>

              <h1
                className="text-5xl font-semibold text-white mb-2 lesson-slide-up leading-tight"
                style={{ fontFamily: 'Georgia, serif', animationDelay: '0.55s' }}
              >
                You did it,<br />{name}!
              </h1>
              <p
                className="text-base mb-2 lesson-fade-in"
                style={{ color: guideAvatar.accent, animationDelay: '0.72s' }}
              >
                {guideAvatar.name} is so proud of you
              </p>

              <div
                className="flex items-center gap-2 bg-white/5 rounded-full px-5 py-2 mb-8 lesson-fade-in"
                style={{ animationDelay: '0.88s' }}
              >
                <div className="w-2 h-2 rounded-full bg-emerald-400" />
                <span className="text-emerald-300 text-sm font-semibold">{score}/{lesson.quiz.length} correct</span>
              </div>

              {lesson.celebrationText && (
                <div
                  className="bg-[#0F0B2E] border border-white/8 rounded-2xl p-5 mb-6 max-w-sm w-full text-left lesson-slide-up"
                  style={{ animationDelay: '0.95s' }}
                >
                  <p className="text-white/65 text-sm leading-relaxed">
                    {lesson.celebrationText.replace(/\{\{name\}\}/g, name)}
                  </p>
                </div>
              )}

              <div
                className="bg-[#0F0B2E] border border-white/8 rounded-2xl p-5 mb-8 max-w-sm w-full lesson-slide-up"
                style={{ animationDelay: '1.05s' }}
              >
                <p className="text-white/55 text-sm">Badge earned:</p>
                <p className="font-bold text-lg mt-1" style={{ color: guideAvatar.accent }}>{lesson.badge}</p>
              </div>

              <div className="max-w-sm w-full lesson-fade-in" style={{ animationDelay: '1.15s' }}>
                <button
                  onClick={() => navigate(`/child/subject/${subjectId}`)}
                  className="w-full py-4 rounded-2xl font-semibold text-white text-lg mb-3 transition-all hover:scale-[1.02] hover:shadow-2xl"
                  style={{ background: `linear-gradient(135deg, ${subject.color}, ${subject.color}bb)` }}
                >
                  Keep going →
                </button>
                <button
                  onClick={() => navigate('/child/dashboard')}
                  className="text-white/30 hover:text-white/60 text-sm transition-colors"
                >
                  Back to dashboard
                </button>
              </div>
            </>
          ) : (
            <>
              {/* Retry screen */}
              <div
                className="w-28 h-28 rounded-full flex items-center justify-center mb-6 lesson-zoom-in"
                style={{ background: `${subject.color}20`, border: `2px solid ${subject.color}40` }}
              >
                <div
                  className="w-20 h-20 rounded-full overflow-hidden"
                  style={{ boxShadow: `0 0 0 2px ${guideAvatar.accent}30` }}
                >
                  <img src={guideAvatar.image} alt={guideAvatar.name} className="w-full h-full object-cover" />
                </div>
              </div>

              <h1
                className="text-2xl font-semibold text-white mb-3 lesson-slide-up"
                style={{ fontFamily: 'Georgia, serif', animationDelay: '0.1s' }}
              >
                Almost there, {name}!
              </h1>
              <p className="text-white/50 mb-2 lesson-fade-in" style={{ animationDelay: '0.22s' }}>
                You got {score}/{lesson.quiz.length} — you need {passScore} to earn the badge.
              </p>
              <p
                className="text-sm mb-8 lesson-fade-in"
                style={{ color: guideAvatar.accent, animationDelay: '0.34s' }}
              >
                {guideAvatar.name} believes in you. Try reviewing and retaking the quiz.
              </p>

              <div className="max-w-sm w-full lesson-fade-in" style={{ animationDelay: '0.5s' }}>
                <button
                  onClick={() => {
                    setQuizAnswers([]);
                    setQuizCurrent(0);
                    setScore(null);
                    setQuizSelected(null);
                    setQuizWrongIdx(null);
                    setSection(2);
                  }}
                  className="w-full py-4 rounded-2xl font-semibold text-white text-lg mb-3 transition-all hover:scale-[1.02]"
                  style={{ background: `linear-gradient(135deg, ${subject.color}, ${subject.color}bb)` }}
                >
                  Review and try again
                </button>
                <button
                  onClick={() => navigate(`/child/subject/${subjectId}`)}
                  className="text-white/30 hover:text-white/60 text-sm transition-colors"
                >
                  Back to lessons
                </button>
              </div>
            </>
          )}
        </div>
      )}

      {/* Nova AI companion — floats bottom-right */}
      <NovaChat child={child} lesson={lesson} subject={subject} section={section} quizCurrent={quizCurrent} guide={lesson?.guide || lesson?.avatar} />
    </div>
  );
}
