// ─────────────────────────────────────────────────────────────────────────────
// SpacedRetrievalEngine.js
// Voyagers — automatic spaced-review question substitution (Spec v1.1 §4.5)
//
// Algorithm (matches spec exactly):
//   L01 (idx 0): 10 fresh, no review
//   L02 (idx 1): 9 fresh + 1 from L01
//   L03 (idx 2): 8 fresh + 1 from L01 + 1 from L02
//   L04+ (idx ≥ 3): 8 fresh + 1 from [2-3 back] + 1 from [5-8 back]
//
// Usage:
//   import { buildSpacedQuiz } from './SpacedRetrievalEngine';
//   const questions = buildSpacedQuiz(screen.questions, lessonId, subjectData);
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Pick a random element from an array. Returns undefined if array is empty.
 */
function pick(arr) {
  if (!arr || arr.length === 0) return undefined;
  return arr[Math.floor(Math.random() * arr.length)];
}

/**
 * Extract normalized quiz questions from a lesson object.
 * Adds _spacedFrom / _spacedFromTitle for optional UI labelling.
 */
function extractQuestions(lesson) {
  if (!lesson?.screens) return [];
  const quizScreen = lesson.screens.find(s => s.type === 'quiz');
  if (!quizScreen?.questions?.length) return [];
  return quizScreen.questions.map(q => ({
    ...q,
    // Normalize type → format so MasteryQuiz / QuizQuestion receive the field
    // they expect (same normalization applied in renderScreen quiz case).
    format: q.format || (q.type === 'inference' ? 'multiple-choice' : q.type),
    _spacedFrom:      lesson.id,
    _spacedFromTitle: lesson.title || lesson.id,
  }));
}

/**
 * buildSpacedQuiz
 *
 * @param {object[]} currentQuestions  - The quiz questions written for the current lesson
 * @param {string}   lessonId          - ID of the current lesson (e.g. 'iw-11-12-03')
 * @param {object}   subjectData       - VOY_DATA entry for this subject { lessons: [...] }
 * @returns {object[]}  10-question array with 0-2 spaced-review questions substituted in
 */
export function buildSpacedQuiz(currentQuestions, lessonId, subjectData) {
  const fresh = Array.isArray(currentQuestions) ? currentQuestions.slice(0, 10) : [];

  // Guard: need subject lesson data to do spaced retrieval
  if (!subjectData?.lessons?.length || !lessonId) return fresh;

  const lessons   = subjectData.lessons;
  const lessonIdx = lessons.findIndex(l => l.id === lessonId);

  // Lesson not found in subject, or it's truly the first lesson — no review
  if (lessonIdx <= 0) return fresh;

  // ── L02 (idx 1): 9 fresh + 1 from L01 ───────────────────────────────────
  if (lessonIdx === 1) {
    const reviewQ = pick(extractQuestions(lessons[0]));
    if (!reviewQ) return fresh;
    return [...fresh.slice(0, 9), reviewQ];
  }

  // ── L03 (idx 2): 8 fresh + 1 from L01 + 1 from L02 ─────────────────────
  if (lessonIdx === 2) {
    const q0 = pick(extractQuestions(lessons[0]));
    const q1 = pick(extractQuestions(lessons[1]));
    const result = fresh.slice(0, 8);
    if (q0) result.push(q0);
    if (q1) result.push(q1);
    return result;
  }

  // ── L04+ (idx ≥ 3): 8 fresh + 1 near (2-3 back) + 1 far (5-8 back) ─────
  const result = fresh.slice(0, 8);

  // Near window: pick randomly from lessons 2-3 positions back
  const nearIdxRange = [];
  for (let d = 2; d <= 3; d++) {
    const i = lessonIdx - d;
    if (i >= 0) nearIdxRange.push(i);
  }
  // Shuffle the candidate indices so we don't always bias toward "3 back"
  const nearIdx = pick(nearIdxRange);
  if (nearIdx !== undefined) {
    const nearQ = pick(extractQuestions(lessons[nearIdx]));
    if (nearQ) result.push(nearQ);
  }

  // Far window: pick randomly from lessons 5-8 positions back
  const farIdxRange = [];
  for (let d = 5; d <= 8; d++) {
    const i = lessonIdx - d;
    if (i >= 0) farIdxRange.push(i);
  }
  if (farIdxRange.length > 0) {
    const farIdx = pick(farIdxRange);
    if (farIdx !== undefined) {
      const farQ = pick(extractQuestions(lessons[farIdx]));
      if (farQ) result.push(farQ);
    }
  } else if (result.length < 10) {
    // Fallback when not enough prior lessons: pick from any lesson earlier than near
    for (let i = lessonIdx - 4; i >= 0; i--) {
      const fallbackQ = pick(extractQuestions(lessons[i]));
      if (fallbackQ) { result.push(fallbackQ); break; }
    }
  }

  return result;
}
