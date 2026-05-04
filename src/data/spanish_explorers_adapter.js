// Spanish Explorers adapter — converts screen-based lesson files into
// the flat card-list format that SubjectView expects from l2Lessons.
// Card rendering only reads lesson.title and lesson.duration.
// Routing is index-based via getExplorerLessonId → sp-6-8-NN.

import SP_L01 from './spanish_explorer_l01_screens';
import SP_L02 from './spanish_explorer_l02_screens';
import SP_L03 from './spanish_explorer_l03_screens';
import SP_L04 from './spanish_explorer_l04_screens';
import SP_L05 from './spanish_explorer_l05_screens';

const allLessons = [
  ...SP_L01.lessons,
  ...SP_L02.lessons,
  ...SP_L03.lessons,
  ...SP_L04.lessons,
  ...SP_L05.lessons,
];

const SPANISH_EXPLORERS = allLessons.map(lesson => ({
  id:       lesson.id,
  title:    lesson.title,
  duration: '10–15 min',
  guide:    lesson.guideId || 'luna',
  badge:    'Explorer',
}));

export default SPANISH_EXPLORERS;
