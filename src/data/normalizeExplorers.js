// Shared normalizer: converts the hook/bigIdea/sections/activity schema
// (used by cosmos_explorers.js and moneybusiness_explorers.js)
// into the arrival/spark/learn[]/explore schema expected by LessonPlayer.

function correctIdx(options, answer) {
  const idx = options.findIndex(o => o === answer);
  return idx >= 0 ? idx : 0;
}

export function normalizeLesson(lesson) {
  const q     = lesson.quiz || [];
  const guide = (lesson.guide || 'nova').toLowerCase();

  return {
    title:           lesson.title,
    guide,
    avatar:          guide,
    badge:           lesson.badge || 'Explorer',
    duration:        lesson.duration || '',
    unit:            lesson.unit || `${lesson.subject || 'Explorers'} · Ages 6–8`,
    familyAdventure: lesson.familyAdventure || '',
    arrival:         lesson.hook   || lesson.arrival || '',
    spark:           lesson.bigIdea || lesson.spark  || '',
    learn:           lesson.learn  ?? (lesson.sections || []).map(s => s.content),
    explore:         lesson.explore ?? (lesson.activity?.instructions || ''),
    quickCheck: lesson.quickCheck ?? (q[0] ? {
      question: q[0].question,
      options:  q[0].options,
      correct:  correctIdx(q[0].options, q[0].answer),
    } : { question: '', options: [], correct: 0 }),
    quiz: lesson.quiz?.every(qi => qi.correct !== undefined)
      ? lesson.quiz
      : q.map(qi => ({
          question: qi.question,
          options:  qi.options,
          correct:  correctIdx(qi.options, qi.answer),
        })),
    celebrationText: lesson.celebrationText
      || `Great work, {{name}}! You completed "${lesson.title}". Keep exploring!`,
    // Pass through game sequence if present (used by GameLessonPlayer)
    ...(lesson.gameSequence ? { gameSequence: lesson.gameSequence } : {}),
  };
}

export function normalizeAll(lessons) {
  return lessons.map(normalizeLesson);
}
