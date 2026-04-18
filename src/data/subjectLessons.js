// ── Central lesson loader ─────────────────────────────────────────────────────
// Returns { l1, l2, l3, l4 } for any subject ID.
// Adapter files take priority; generic loaders are the fallback for Originals.
// Core Academic subjects (math/ela/sci/ss) return [] for missing bands.

import { getLessons } from './lessons';
import { getLevel2Lessons } from './lessons_level2';
import { getLevel3Lessons } from './lessons_level3';
import { getLevel4Lessons } from './lessons_level4';
import { INNERWORLD_EXPLORERS } from './innerworld_explorers';
import MONEYBUSINESS_EXPLORERS from './moneybusiness_explorers_adapter';
import COSMOS_EXPLORERS from './cosmos_explorers_adapter';
import FUTURESKILLS_EXPLORERS from './futureskills_explorers_adapter';
import SOCIALLEADERSHIP_EXPLORERS from './socialleadership_explorers_adapter';
import LIFEWELLNESS_EXPLORERS from './lifewellness_explorers_adapter';
import CREATIVEARTS_EXPLORERS from './creativearts_explorers_adapter';
import HISTORYWORLD_EXPLORERS from './historyworld_explorers_adapter';
import INNERWORLD_UPPEREXPLORERS from './innerworld_upperexplorers_adapter';
import COSMOS_UPPEREXPLORERS from './cosmos_upperexplorers_adapter';
import FUTURESKILLS_UPPEREXPLORERS from './futureskills_upperexplorers_adapter';
import SOCIALLEADERSHIP_UPPEREXPLORERS from './socialleadership_upperexplorers_adapter';
import LIFEWELLNESS_UPPEREXPLORERS from './lifewellness_upperexplorers_adapter';
import CREATIVEARTS_UPPEREXPLORERS from './creativearts_upperexplorers_adapter';
import HISTORYWORLD_UPPEREXPLORERS from './historyworld_upperexplorers_adapter';
import MONEYBUSINESS_UPPEREXPLORERS from './moneybusiness_upperexplorers_adapter';
import MONEYBUSINESS_VOYAGERS from './moneybusiness_voyagers_adapter';
import FUTURESKILLS_VOYAGERS from './futureskills_voyagers_adapter';
import SOCIALLEADERSHIP_VOYAGERS from './socialleadership_voyagers_adapter';
import LIFEWELLNESS_VOYAGERS from './lifewellness_voyagers_adapter';
import CREATIVEARTS_VOYAGERS from './creativearts_voyagers_adapter';
import HISTORYWORLD_VOYAGERS from './historyworld_voyagers_adapter';
import INNERWORLD_VOYAGERS from './innerworld_voyagers_adapter';
import COSMOS_VOYAGERS from './cosmos_voyagers_adapter';
import MATH_VOYAGERS from './math_voyagers_adapter';
import ELA_LITTLESTARS from './ela_littlestars_adapter';
import ELA_EXPLORERS from './ela_explorers_adapter';
import ELA_UPPEREXPLORERS from './ela_upperexplorers_adapter';
import ELA_VOYAGERS from './ela_voyagers_adapter';
import SCI_LITTLESTARS from './sci_littlestars_adapter';
import SCI_EXPLORERS from './sci_explorers_adapter';
import SCI_UPPEREXPLORERS from './sci_upperexplorers_adapter';
import SCI_VOYAGERS from './sci_voyagers_adapter';
import SS_EXPLORERS from './ss_explorers_adapter';
import SS_UPPEREXPLORERS from './ss_upperexplorers_adapter';
import SS_VOYAGERS from './ss_voyagers_adapter';
import SS_LITTLESTARS from './ss_littlestars_adapter';
import INNERWORLD_LITTLESTARS from './innerworld_littlestars_adapter';
import COSMOS_LITTLESTARS from './cosmos_littlestars_adapter';
import MONEYBUSINESS_LITTLESTARS from './moneybusiness_littlestars_adapter';
import FUTURESKILLS_LITTLESTARS from './futureskills_littlestars_adapter';
import MATH_UPPEREXPLORERS from './math_upperexplorers_adapter';
import MATH_LITTLESTARS from './math_littlestars_adapter';
import MATH_EXPLORERS from './math_explorers_adapter';
import SOCIALLEADERSHIP_LITTLESTARS from './socialleadership_littlestars_adapter';
import LIFEWELLNESS_LITTLESTARS from './lifewellness_littlestars_adapter';
import CREATIVEARTS_LITTLESTARS from './creativearts_littlestars_adapter';
import SPANISH_LITTLESTARS from './spanish_littlestars_adapter';
import HISTORYWORLD_LITTLESTARS from './historyworld_littlestars_adapter';
import FRONTIER_LITTLESTARS from './frontier_littlestars_adapter';
import SPANISH_EXPLORERS from './spanish_explorers_adapter';
import SPANISH_UPPEREXPLORERS from './spanish_upperexplorers_adapter';
import SPANISH_VOYAGERS from './spanish_voyagers_adapter';
import FRONTIER_EXPLORERS from './frontier_explorers_adapter';
import FRONTIER_UPPEREXPLORERS from './frontier_upperexplorers_adapter';
import FRONTIER_VOYAGERS from './frontier_voyagers_adapter';

// Subjects that should never use generic fallback content for missing bands
const ACADEMIC_IDS = new Set(['math', 'ela', 'sci', 'ss']);

const L1_MAP = {
  'ela':           ELA_LITTLESTARS,
  'sci':           SCI_LITTLESTARS,
  'ss':            SS_LITTLESTARS,
  'inner-world':   INNERWORLD_LITTLESTARS,
  'cosmos':        COSMOS_LITTLESTARS,
  'money':         MONEYBUSINESS_LITTLESTARS,
  'future-skills': FUTURESKILLS_LITTLESTARS,
  'math':          MATH_LITTLESTARS,
  'leadership':    SOCIALLEADERSHIP_LITTLESTARS,
  'wellness':      LIFEWELLNESS_LITTLESTARS,
  'creative-arts': CREATIVEARTS_LITTLESTARS,
  'languages':     SPANISH_LITTLESTARS,
  'history':       HISTORYWORLD_LITTLESTARS,
  'frontier':      FRONTIER_LITTLESTARS,
};

const L2_MAP = {
  'ela':           ELA_EXPLORERS,
  'inner-world':   INNERWORLD_EXPLORERS,
  'money':         MONEYBUSINESS_EXPLORERS,
  'cosmos':        COSMOS_EXPLORERS,
  'sci':           SCI_EXPLORERS,
  'future-skills': FUTURESKILLS_EXPLORERS,
  'leadership':    SOCIALLEADERSHIP_EXPLORERS,
  'wellness':      LIFEWELLNESS_EXPLORERS,
  'creative-arts': CREATIVEARTS_EXPLORERS,
  'history':       HISTORYWORLD_EXPLORERS,
  'ss':            SS_EXPLORERS,
  'math':          MATH_EXPLORERS,
  'languages':     SPANISH_EXPLORERS,
  'frontier':      FRONTIER_EXPLORERS,
};

const L3_MAP = {
  'ela':           ELA_UPPEREXPLORERS,
  'inner-world':   INNERWORLD_UPPEREXPLORERS,
  'cosmos':        COSMOS_UPPEREXPLORERS,
  'sci':           SCI_UPPEREXPLORERS,
  'money':         MONEYBUSINESS_UPPEREXPLORERS,
  'future-skills': FUTURESKILLS_UPPEREXPLORERS,
  'leadership':    SOCIALLEADERSHIP_UPPEREXPLORERS,
  'wellness':      LIFEWELLNESS_UPPEREXPLORERS,
  'creative-arts': CREATIVEARTS_UPPEREXPLORERS,
  'history':       HISTORYWORLD_UPPEREXPLORERS,
  'ss':            SS_UPPEREXPLORERS,
  'math':          MATH_UPPEREXPLORERS,
  'languages':     SPANISH_UPPEREXPLORERS,
  'frontier':      FRONTIER_UPPEREXPLORERS,
};

const L4_MAP = {
  'ela':           ELA_VOYAGERS,
  'inner-world':   INNERWORLD_VOYAGERS,
  'cosmos':        COSMOS_VOYAGERS,
  'sci':           SCI_VOYAGERS,
  'math':          MATH_VOYAGERS,
  'money':         MONEYBUSINESS_VOYAGERS,
  'future-skills': FUTURESKILLS_VOYAGERS,
  'leadership':    SOCIALLEADERSHIP_VOYAGERS,
  'wellness':      LIFEWELLNESS_VOYAGERS,
  'creative-arts': CREATIVEARTS_VOYAGERS,
  'history':       HISTORYWORLD_VOYAGERS,
  'ss':            SS_VOYAGERS,
  'languages':     SPANISH_VOYAGERS,
  'frontier':      FRONTIER_VOYAGERS,
};

export function getSubjectLessons(subjectId) {
  const academic = ACADEMIC_IDS.has(subjectId);
  return {
    l1: L1_MAP[subjectId] ?? (academic ? [] : getLessons(subjectId)),
    l2: L2_MAP[subjectId] ?? (academic ? [] : getLevel2Lessons(subjectId)),
    l3: L3_MAP[subjectId] ?? (academic ? [] : getLevel3Lessons(subjectId)),
    l4: L4_MAP[subjectId] ?? (academic ? [] : getLevel4Lessons(subjectId)),
  };
}
