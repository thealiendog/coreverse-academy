import { useState } from 'react';
import { useParams, useNavigate, useSearchParams } from 'react-router-dom';
import { getCurrentChild, getCurrentParent, updateChildProgress, awardBadge } from '../lib/storage';
import { getAvatar, getSubject } from '../lib/constants';
import { getLesson } from '../data/lessons';
import { getLevel2Lesson } from '../data/lessons_level2';
import { getLevel3Lesson } from '../data/lessons_level3';
import { getLevel4Lesson } from '../data/lessons_level4';

const SECTIONS = ['Arrival', 'Spark', 'Learn', 'Explore', 'Quick Check', 'Quiz', 'Celebration'];

export default function LessonPlayer() {
  const { subjectId, lessonIdx } = useParams();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const child = getCurrentChild();
  const parent = getCurrentParent();
  const idx = parseInt(lessonIdx, 10);
  const level = parseInt(searchParams.get('level') || '1', 10);
  const progressKey = level === 1 ? subjectId : `${subjectId}__${level}`;
  const levelGetters = { 1: getLesson, 2: getLevel2Lesson, 3: getLevel3Lesson, 4: getLevel4Lesson };
  const lesson = (levelGetters[level] || getLesson)(subjectId, idx);
  const subject = getSubject(subjectId);
  const childAvatar = getAvatar(child?.avatar);
  const guideAvatar = lesson ? getAvatar(lesson.guide) : childAvatar;

  const [section, setSection] = useState(0);
  const [sparkAnswer, setSparkAnswer] = useState('');
  const [exploreAnswer, setExploreAnswer] = useState('');
  const [qcSelected, setQcSelected] = useState(null);
  const [qcWrong, setQcWrong] = useState(false);
  const [quizAnswers, setQuizAnswers] = useState([]);
  const [quizCurrent, setQuizCurrent] = useState(0);
  const [score, setScore] = useState(null);
  const [badgeAwarded, setBadgeAwarded] = useState(false);

  if (!child) { navigate('/child/select'); return null; }
  if (!lesson) {
    return (
      <div className="min-h-screen bg-[#080618] flex items-center justify-center text-white/50">
        Lesson not found.
      </div>
    );
  }

  const name = child.name;
  const arrivalText = lesson.arrival.replace(/\{\{name\}\}/g, name);

  function advance() {
    setSection(s => s + 1);
  }

  function handleQcSelect(optIdx) {
    if (qcSelected !== null) return;
    setQcSelected(optIdx);
    if (optIdx === lesson.quickCheck.correct) {
      setTimeout(() => advance(), 700);
    } else {
      setQcWrong(true);
      setTimeout(() => { setQcSelected(null); setQcWrong(false); }, 1000);
    }
  }

  function handleQuizSelect(optIdx) {
    const isCorrect = optIdx === lesson.quiz[quizCurrent].correct;
    const newAnswers = [...quizAnswers, isCorrect];
    setQuizAnswers(newAnswers);
    if (quizCurrent < lesson.quiz.length - 1) {
      setTimeout(() => setQuizCurrent(c => c + 1), 600);
    } else {
      const finalScore = newAnswers.filter(Boolean).length;
      setScore(finalScore);
      if (finalScore >= 3 && !badgeAwarded) {
        if (parent) {
          updateChildProgress(parent.id, child.id, progressKey, idx);
          awardBadge(parent.id, child.id, lesson.badge);
        }
        setBadgeAwarded(true);
      }
      setTimeout(() => advance(), 600);
    }
  }

  const pct = Math.round((section / (SECTIONS.length - 1)) * 100);

  return (
    <div className="min-h-screen bg-[#080618] flex flex-col">
      {/* Fixed top bar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-[#080618]/90 backdrop-blur border-b border-white/5">
        <div className="max-w-2xl mx-auto px-4 py-3 flex items-center gap-4">
          <button
            onClick={() => navigate(`/child/subject/${subjectId}`)}
            className="text-white/30 hover:text-white/70 transition-colors flex-shrink-0"
            aria-label="Back to subject"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
          </button>
          <div className="flex-1">
            <div className="h-1.5 bg-white/8 rounded-full overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-500"
                style={{ width: `${pct}%`, background: subject.color }}
              />
            </div>
          </div>
          <span className="text-white/25 text-xs flex-shrink-0">{SECTIONS[section]}</span>
        </div>
      </div>

      <div className="flex-1 max-w-2xl mx-auto w-full px-4 pt-20 pb-12">
        {/* SECTION 0: ARRIVAL */}
        {section === 0 && (
          <div className="flex flex-col items-center text-center pt-8 transition-page">
            <div
              className="w-32 h-32 rounded-full overflow-hidden mb-6 glow-pulse"
              style={{ boxShadow: `0 0 48px ${guideAvatar.accent}40, 0 0 0 3px ${guideAvatar.accent}25` }}
            >
              <img src={guideAvatar.image} alt={guideAvatar.name} className="w-full h-full object-cover" />
            </div>
            <p className="text-sm font-semibold mb-1" style={{ color: guideAvatar.accent }}>
              {guideAvatar.name} the {guideAvatar.animal}
            </p>
            <span className="text-white/30 text-xs mb-8 tracking-wide">Lesson {idx + 1} of {subject.lessons.length}</span>
            <h1 className="text-3xl font-semibold text-white mb-6 leading-snug" style={{ fontFamily: 'Georgia, serif' }}>
              {lesson.title}
            </h1>
            <div className="bg-[#0F0B2E] border border-white/8 rounded-2xl p-6 mb-10 text-left max-w-md w-full">
              <p className="text-white/70 leading-relaxed text-base">{arrivalText}</p>
            </div>
            <button
              onClick={advance}
              className="px-10 py-4 rounded-2xl font-semibold text-white text-lg transition-all hover:scale-105 hover:shadow-2xl"
              style={{ background: `linear-gradient(135deg, ${subject.color}, ${subject.color}cc)`, boxShadow: `0 4px 32px ${subject.color}35` }}
            >
              Let's begin
            </button>
          </div>
        )}

        {/* SECTION 1: SPARK */}
        {section === 1 && (
          <div className="transition-page pt-4">
            <p className="text-xs font-semibold text-white/30 tracking-widest uppercase mb-6 text-center">Spark</p>
            <div
              className="rounded-3xl p-8 mb-8 text-center"
              style={{ background: `radial-gradient(circle at 50% 40%, ${subject.color}18 0%, ${subject.color}06 70%)`, border: `1px solid ${subject.color}30` }}
            >
              <div className="w-2 h-2 rounded-full mx-auto mb-6" style={{ background: subject.color }}/>
              <p className="text-2xl font-semibold text-white leading-snug" style={{ fontFamily: 'Georgia, serif' }}>
                {lesson.spark}
              </p>
            </div>
            <p className="text-white/40 text-sm mb-3">What do you think? Share your ideas:</p>
            <textarea
              value={sparkAnswer}
              onChange={e => setSparkAnswer(e.target.value)}
              placeholder="Write anything that comes to mind..."
              rows={5}
              className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder-white/20 focus:outline-none focus:border-white/25 resize-none text-sm leading-relaxed"
            />
            <button
              onClick={advance}
              className="mt-6 w-full py-4 rounded-2xl font-semibold text-white transition-all hover:scale-[1.01]"
              style={{ background: subject.color }}
            >
              {sparkAnswer.trim() ? 'Continue' : 'Skip for now'}
            </button>
          </div>
        )}

        {/* SECTION 2: LEARN */}
        {section === 2 && (
          <div className="transition-page pt-4">
            <p className="text-xs font-semibold text-white/30 tracking-widest uppercase mb-6 text-center">Learn</p>
            <h2 className="text-2xl font-semibold text-white mb-8 text-center" style={{ fontFamily: 'Georgia, serif' }}>
              {lesson.title}
            </h2>
            <div className="space-y-5 mb-10">
              {lesson.learn.map((para, i) => (
                <div key={i} className="flex gap-4">
                  <div
                    className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5"
                    style={{ background: subject.color + '25', color: subject.color }}
                  >
                    {i + 1}
                  </div>
                  <p className="text-white/75 leading-relaxed">{para}</p>
                </div>
              ))}
            </div>
            <button
              onClick={advance}
              className="w-full py-4 rounded-2xl font-semibold text-white transition-all hover:scale-[1.01]"
              style={{ background: subject.color }}
            >
              I've read this
            </button>
          </div>
        )}

        {/* SECTION 3: EXPLORE */}
        {section === 3 && (
          <div className="transition-page pt-4">
            <p className="text-xs font-semibold text-white/30 tracking-widest uppercase mb-6 text-center">Explore</p>
            <div className="flex items-start gap-4 mb-8 bg-[#0F0B2E] border border-white/8 rounded-2xl p-6">
              <div
                className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0"
                style={{ boxShadow: `0 0 0 2px ${guideAvatar.accent}30` }}
              >
                <img src={guideAvatar.image} alt={guideAvatar.name} className="w-full h-full object-cover" />
              </div>
              <div>
                <p className="text-xs font-semibold mb-1" style={{ color: guideAvatar.accent }}>{guideAvatar.name} says:</p>
                <p className="text-white/70 text-sm leading-relaxed">{lesson.explore}</p>
              </div>
            </div>
            <p className="text-white/40 text-sm mb-3">Your response:</p>
            <textarea
              value={exploreAnswer}
              onChange={e => setExploreAnswer(e.target.value)}
              placeholder="Take your time with this one..."
              rows={6}
              className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder-white/20 focus:outline-none focus:border-white/25 resize-none text-sm leading-relaxed"
            />
            <button
              onClick={advance}
              className="mt-6 w-full py-4 rounded-2xl font-semibold text-white transition-all hover:scale-[1.01]"
              style={{ background: subject.color }}
            >
              {exploreAnswer.trim() ? 'Continue' : 'Skip for now'}
            </button>
          </div>
        )}

        {/* SECTION 4: QUICK CHECK */}
        {section === 4 && (
          <div className="transition-page pt-4">
            <p className="text-xs font-semibold text-white/30 tracking-widest uppercase mb-6 text-center">Quick Check</p>
            <div className="bg-[#0F0B2E] border border-white/8 rounded-2xl p-6 mb-6">
              <p className="text-white font-semibold text-lg leading-snug" style={{ fontFamily: 'Georgia, serif' }}>
                {lesson.quickCheck.question}
              </p>
            </div>
            {qcWrong && (
              <p className="text-red-400 text-sm text-center mb-4 font-medium">Not quite — try again!</p>
            )}
            <div className="space-y-3">
              {lesson.quickCheck.options.map((opt, i) => {
                const isSelected = qcSelected === i;
                const isCorrect = i === lesson.quickCheck.correct;
                const showResult = qcSelected !== null;
                return (
                  <button
                    key={i}
                    onClick={() => handleQcSelect(i)}
                    disabled={qcSelected !== null}
                    className={`w-full text-left px-5 py-4 rounded-xl border text-sm font-medium transition-all duration-200
                      ${showResult && isSelected && isCorrect ? 'border-emerald-500 bg-emerald-500/15 text-emerald-300' :
                        showResult && isSelected && !isCorrect ? 'border-red-500 bg-red-500/15 text-red-300' :
                        'border-white/10 bg-white/4 text-white/80 hover:border-white/25 hover:bg-white/8'}`}
                  >
                    <span className="font-bold mr-3 text-white/40">{String.fromCharCode(65 + i)}.</span>
                    {opt}
                  </button>
                );
              })}
            </div>
            <p className="text-white/25 text-xs text-center mt-6">Answer correctly to continue</p>
          </div>
        )}

        {/* SECTION 5: QUIZ */}
        {section === 5 && score === null && (
          <div className="transition-page pt-4">
            <div className="flex items-center justify-between mb-6">
              <p className="text-xs font-semibold text-white/30 tracking-widest uppercase">Quiz</p>
              <span className="text-white/30 text-xs">{quizCurrent + 1} / {lesson.quiz.length}</span>
            </div>
            <div className="h-1 bg-white/8 rounded-full mb-8 overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-300"
                style={{ width: `${((quizCurrent) / lesson.quiz.length) * 100}%`, background: subject.color }}
              />
            </div>
            <div className="bg-[#0F0B2E] border border-white/8 rounded-2xl p-6 mb-6">
              <p className="text-white font-semibold text-lg leading-snug" style={{ fontFamily: 'Georgia, serif' }}>
                {lesson.quiz[quizCurrent].question}
              </p>
            </div>
            <div className="space-y-3">
              {lesson.quiz[quizCurrent].options.map((opt, i) => (
                <button
                  key={`${quizCurrent}-${i}`}
                  onClick={() => handleQuizSelect(i)}
                  className="w-full text-left px-5 py-4 rounded-xl border border-white/10 bg-white/4 text-white/80 text-sm font-medium hover:border-white/25 hover:bg-white/8 transition-all duration-150 active:scale-[0.99]"
                >
                  <span className="font-bold mr-3 text-white/40">{String.fromCharCode(65 + i)}.</span>
                  {opt}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* SECTION 6: CELEBRATION */}
        {section === 6 && (
          <div className="flex flex-col items-center text-center pt-8 transition-page">
            {score >= 3 ? (
              <>
                {/* Badge */}
                <div
                  className="w-36 h-36 rounded-full flex items-center justify-center mb-6"
                  style={{
                    background: `radial-gradient(circle at 40% 35%, ${guideAvatar.accent}, ${guideAvatar.color})`,
                    boxShadow: `0 0 60px ${guideAvatar.accent}50, 0 0 0 4px ${guideAvatar.accent}20`,
                  }}
                >
                  <div className="text-center">
                    <p className="text-white/90 text-xs font-semibold tracking-wide uppercase mb-1">Badge</p>
                    <p className="text-white font-bold text-sm leading-tight px-2">{lesson.badge}</p>
                  </div>
                </div>

                <div
                  className="w-16 h-16 rounded-full overflow-hidden mb-4"
                  style={{ boxShadow: `0 0 0 2px ${guideAvatar.accent}40` }}
                >
                  <img src={guideAvatar.image} alt={guideAvatar.name} className="w-full h-full object-cover" />
                </div>

                <h1 className="text-3xl font-semibold text-white mb-2" style={{ fontFamily: 'Georgia, serif' }}>
                  You did it, {name}!
                </h1>
                <p className="text-base mb-2" style={{ color: guideAvatar.accent }}>
                  {guideAvatar.name} is so proud of you
                </p>

                <div className="flex items-center gap-2 bg-white/5 rounded-full px-5 py-2 mb-6">
                  <div className="w-2 h-2 rounded-full bg-emerald-400"/>
                  <span className="text-emerald-300 text-sm font-semibold">{score}/{lesson.quiz.length} correct</span>
                </div>

                {lesson.celebrationText ? (
                  <div className="bg-[#0F0B2E] border border-white/8 rounded-2xl p-5 mb-6 max-w-sm w-full text-left">
                    <p className="text-white/65 text-sm leading-relaxed">{lesson.celebrationText.replace(/\{\{name\}\}/g, name)}</p>
                  </div>
                ) : null}

                <div className="bg-[#0F0B2E] border border-white/8 rounded-2xl p-5 mb-8 max-w-sm w-full">
                  <p className="text-white/60 text-sm">Badge earned:</p>
                  <p className="text-white font-bold text-lg mt-1" style={{ color: guideAvatar.accent }}>{lesson.badge}</p>
                </div>

                <button
                  onClick={() => navigate(`/child/subject/${subjectId}`)}
                  className="w-full max-w-sm py-4 rounded-2xl font-semibold text-white text-lg mb-3 transition-all hover:scale-[1.02]"
                  style={{ background: `linear-gradient(135deg, ${subject.color}, ${subject.color}cc)` }}
                >
                  Keep going
                </button>
                <button
                  onClick={() => navigate('/child/dashboard')}
                  className="text-white/30 hover:text-white/60 text-sm transition-colors"
                >
                  Back to dashboard
                </button>
              </>
            ) : (
              <>
                {/* Retry screen */}
                <div
                  className="w-28 h-28 rounded-full flex items-center justify-center mb-6"
                  style={{ background: `${subject.color}20`, border: `2px solid ${subject.color}40` }}
                >
                  <div
                    className="w-20 h-20 rounded-full overflow-hidden"
                    style={{ boxShadow: `0 0 0 2px ${guideAvatar.accent}30` }}
                  >
                    <img src={guideAvatar.image} alt={guideAvatar.name} className="w-full h-full object-cover" />
                  </div>
                </div>

                <h1 className="text-2xl font-semibold text-white mb-3" style={{ fontFamily: 'Georgia, serif' }}>
                  Almost there, {name}!
                </h1>
                <p className="text-white/50 mb-2">You got {score}/{lesson.quiz.length} — you need 3 to earn the badge.</p>
                <p className="text-white/35 text-sm mb-8" style={{ color: guideAvatar.accent }}>
                  {guideAvatar.name} believes in you. Try reviewing and retaking the quiz.
                </p>

                <button
                  onClick={() => {
                    setQuizAnswers([]);
                    setQuizCurrent(0);
                    setScore(null);
                    setSection(2);
                  }}
                  className="w-full max-w-sm py-4 rounded-2xl font-semibold text-white text-lg mb-3 transition-all hover:scale-[1.02]"
                  style={{ background: `linear-gradient(135deg, ${subject.color}, ${subject.color}cc)` }}
                >
                  Review and try again
                </button>
                <button
                  onClick={() => navigate(`/child/subject/${subjectId}`)}
                  className="text-white/30 hover:text-white/60 text-sm transition-colors"
                >
                  Back to lessons
                </button>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
