// Adapter: normalizes cosmos_explorers.js schema → LessonPlayer schema
import cosmosRaw from './cosmos_explorers';

function correctIdx(options, answer) {
  const idx = options.findIndex(o => o === answer);
  return idx >= 0 ? idx : 0;
}

function normalize(lesson) {
  const q = lesson.quiz || [];
  const guide = (lesson.guide || 'nova').toLowerCase();

  return {
    title:           lesson.title,
    guide,
    avatar:          guide,
    badge:           lesson.badge || 'Star Explorer',
    duration:        lesson.duration || '',
    unit:            'Cosmos & Science · Ages 6–8',
    familyAdventure: lesson.familyAdventure || '',
    arrival:         lesson.hook || '',
    spark:           lesson.bigIdea || '',
    learn:           (lesson.sections || []).map(s => s.content),
    explore:         lesson.activity?.instructions || '',
    quickCheck: q[0] ? {
      question: q[0].question,
      options:  q[0].options,
      correct:  correctIdx(q[0].options, q[0].answer),
    } : { question: '', options: [], correct: 0 },
    quiz: q.map(qi => ({
      question: qi.question,
      options:  qi.options,
      correct:  correctIdx(qi.options, qi.answer),
    })),
    celebrationText: `Outstanding, {{name}}! You just explored "${lesson.title}" with Nova the Owl. The universe is yours to discover — keep reaching for the stars!`,
  };
}

const COSMOS_EXPLORERS = cosmosRaw.map(normalize);
export default COSMOS_EXPLORERS;
