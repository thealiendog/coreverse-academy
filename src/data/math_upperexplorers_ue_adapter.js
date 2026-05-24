// ── Math Upper Explorers lesson list — sourced from new-format UE screen files ──
// Used by SubjectView to render the lesson list cards for Math ages 9-10.
// Replaces math_upperexplorers_adapter so titles and durations come from
// the canonical new-format data instead of the legacy math_upperexplorers.js.

import MATH_UE_L01 from './math_upper_explorer_l01_screens';
import MATH_UE_L02 from './math_upper_explorer_l02_screens';
import MATH_UE_L03 from './math_upper_explorer_l03_screens';
import MATH_UE_L04 from './math_upper_explorer_l04_screens';

const MATH_UPPEREXPLORERS_UE = [
  ...MATH_UE_L01.lessons,
  ...MATH_UE_L02.lessons,
  ...MATH_UE_L03.lessons,
  ...MATH_UE_L04.lessons,
];

export default MATH_UPPEREXPLORERS_UE;
