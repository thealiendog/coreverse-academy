// Spanish Explorers adapter — converts screen-based lesson files into
// the flat card-list format that SubjectView expects from l2Lessons.
// Card rendering only reads lesson.title and lesson.duration.
// Routing is index-based via getExplorerLessonId → sp-6-8-NN.

import SP_L01 from './spanish_explorer_l01_screens';
import SP_L02 from './spanish_explorer_l02_screens';
import SP_L03 from './spanish_explorer_l03_screens';
import SP_L04 from './spanish_explorer_l04_screens';
import SP_L05 from './spanish_explorer_l05_screens';
import SP_L06 from './spanish_explorer_l06_screens';
import SP_L07 from './spanish_explorer_l07_screens';
import SP_L08 from './spanish_explorer_l08_screens';
import SP_L09 from './spanish_explorer_l09_screens';
import SP_L10 from './spanish_explorer_l10_screens';
import SP_L11 from './spanish_explorer_l11_screens';
import SP_L12 from './spanish_explorer_l12_screens';
import SP_L13 from './spanish_explorer_l13_screens';
import SP_L14 from './spanish_explorer_l14_screens';
import SP_L15 from './spanish_explorer_l15_screens';
import SP_L16 from './spanish_explorer_l16_screens';
import SP_L17 from './spanish_explorer_l17_screens';
import SP_L18 from './spanish_explorer_l18_screens';
import SP_L19 from './spanish_explorer_l19_screens';
import SP_L20 from './spanish_explorer_l20_screens';

const SPANISH_EXPLORERS = [
  SP_L01, SP_L02, SP_L03, SP_L04, SP_L05,
  SP_L06, SP_L07, SP_L08, SP_L09, SP_L10,
  SP_L11, SP_L12, SP_L13, SP_L14, SP_L15,
  SP_L16, SP_L17, SP_L18, SP_L19, SP_L20,
].map(mod => {
  const l = mod.lessons[0];
  return { title: l.title, duration: l.duration };
});

export default SPANISH_EXPLORERS;
