import L01 from './frontier_explorer_l01_screens';
import L02 from './frontier_explorer_l02_screens';
import L03 from './frontier_explorer_l03_screens';
import L04 from './frontier_explorer_l04_screens';
import L05 from './frontier_explorer_l05_screens';
import L06 from './frontier_explorer_l06_screens';
import L07 from './frontier_explorer_l07_screens';
import L08 from './frontier_explorer_l08_screens';
import L09 from './frontier_explorer_l09_screens';
import L10 from './frontier_explorer_l10_screens';
import L11 from './frontier_explorer_l11_screens';
import L12 from './frontier_explorer_l12_screens';
import L13 from './frontier_explorer_l13_screens';
import L14 from './frontier_explorer_l14_screens';
import L15 from './frontier_explorer_l15_screens';
import L16 from './frontier_explorer_l16_screens';
import L17 from './frontier_explorer_l17_screens';
import L18 from './frontier_explorer_l18_screens';
import L19 from './frontier_explorer_l19_screens';
import L20 from './frontier_explorer_l20_screens';

const FRONTIER_EXPLORERS = [
  L01, L02, L03, L04, L05, L06, L07, L08, L09, L10,
  L11, L12, L13, L14, L15, L16, L17, L18, L19, L20,
].map(mod => {
  const l = mod.lessons[0];
  return { title: l.title, duration: l.duration };
});

export default FRONTIER_EXPLORERS;
