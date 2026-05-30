import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getCurrentChild } from '../lib/storage';
import { getSubject, AGE_BANDS, ageToAgeBand, CORE_ACADEMICS, getAvatar } from '../lib/constants';
import AnimalIcon from '../components/AnimalIcon';
import { getLessons } from '../data/lessons';
import { getLevel2Lessons } from '../data/lessons_level2';
import { getLevel3Lessons } from '../data/lessons_level3';
import { getLevel4Lessons } from '../data/lessons_level4';
import { INNERWORLD_EXPLORERS } from '../data/innerworld_explorers';
import MONEYBUSINESS_EXPLORERS from '../data/moneybusiness_explorers_adapter';
import COSMOS_EXPLORERS from '../data/cosmos_explorers_adapter';
import FUTURESKILLS_EXPLORERS from '../data/futureskills_explorers_adapter';
import SOCIALLEADERSHIP_EXPLORERS from '../data/socialleadership_explorers_adapter';
import LIFEWELLNESS_EXPLORERS from '../data/lifewellness_explorers_adapter';
import CREATIVEARTS_EXPLORERS from '../data/creativearts_explorers_adapter';
import HISTORYWORLD_EXPLORERS from '../data/historyworld_explorers_adapter';
import SPANISH_EXPLORERS from '../data/spanish_explorers_adapter';
import MATH_EXPLORERS from '../data/math_explorers_adapter';
import INNERWORLD_UPPEREXPLORERS from '../data/innerworld_upperexplorers_adapter';
import COSMOS_UPPEREXPLORERS from '../data/cosmos_upperexplorers_adapter';
import FUTURESKILLS_UPPEREXPLORERS from '../data/futureskills_upperexplorers_adapter';
import SOCIALLEADERSHIP_UPPEREXPLORERS from '../data/socialleadership_upperexplorers_adapter';
import LIFEWELLNESS_UPPEREXPLORERS from '../data/lifewellness_upperexplorers_adapter';
import CREATIVEARTS_UPPEREXPLORERS from '../data/creativearts_upperexplorers_adapter';
import HISTORYWORLD_UPPEREXPLORERS from '../data/historyworld_upperexplorers_adapter';
import MONEYBUSINESS_UPPEREXPLORERS from '../data/moneybusiness_upperexplorers_adapter';
import MONEYBUSINESS_VOYAGERS from '../data/moneybusiness_voyagers_adapter';
import FUTURESKILLS_VOYAGERS from '../data/futureskills_voyagers_adapter';
import SOCIALLEADERSHIP_VOYAGERS from '../data/socialleadership_voyagers_adapter';
import LIFEWELLNESS_VOYAGERS from '../data/lifewellness_voyagers_adapter';
import CREATIVEARTS_VOYAGERS from '../data/creativearts_voyagers_adapter';
import HISTORYWORLD_VOYAGERS from '../data/historyworld_voyagers_adapter';
import INNERWORLD_VOYAGERS from '../data/innerworld_voyagers_adapter';
import COSMOS_VOYAGERS from '../data/cosmos_voyagers_adapter';
import MATH_VOYAGERS from '../data/math_voyagers_adapter';
import ELA_LITTLESTARS               from '../data/ela_littlestars_adapter';
import ELA_EXPLORERS                 from '../data/ela_explorers_adapter';
import ELA_UPPEREXPLORERS            from '../data/ela_upperexplorers_adapter';
import ELA_VOYAGERS                  from '../data/ela_voyagers_adapter';
import SCI_LITTLESTARS               from '../data/sci_littlestars_adapter';
import SCI_EXPLORERS                 from '../data/sci_explorers_adapter';
import SCI_UPPEREXPLORERS            from '../data/sci_upperexplorers_adapter';
import SCI_VOYAGERS                  from '../data/sci_voyagers_adapter';
import SS_LITTLESTARS                from '../data/ss_littlestars_adapter';
import SS_EXPLORERS                  from '../data/ss_explorers_adapter';
import SS_UPPEREXPLORERS_UE          from '../data/ss_upperexplorers_ue_adapter';
import MATH_UPPEREXPLORERS_UE        from '../data/math_upperexplorers_ue_adapter';
import SS_VOYAGERS                   from '../data/ss_voyagers_adapter';
import INNERWORLD_LITTLESTARS        from '../data/innerworld_littlestars_adapter';
import COSMOS_LITTLESTARS            from '../data/cosmos_littlestars_adapter';
import MATH_LITTLESTARS              from '../data/math_littlestars_adapter';
import MONEYBUSINESS_LITTLESTARS     from '../data/moneybusiness_littlestars_adapter';
import FUTURESKILLS_LITTLESTARS      from '../data/futureskills_littlestars_adapter';
import SOCIALLEADERSHIP_LITTLESTARS  from '../data/socialleadership_littlestars_adapter';
import LIFEWELLNESS_LITTLESTARS      from '../data/lifewellness_littlestars_adapter';
import CREATIVEARTS_LITTLESTARS      from '../data/creativearts_littlestars_adapter';
import HISTORYWORLD_LITTLESTARS      from '../data/historyworld_littlestars_adapter';
import SPANISH_LITTLESTARS           from '../data/spanish_littlestars_adapter';
import FRONTIER_LITTLESTARS          from '../data/frontier_littlestars_adapter';
import FRONTIER_EXPLORERS            from '../data/frontier_explorers_adapter';

// ── Subject ID aliases ────────────────────────────────────────────────────────
// constants.js uses short IDs ('sci', 'ss') for some subjects. The new-format
// infrastructure (NEW_FORMAT_LESSONS, EXPLORER_DATA, screen file prefixes) uses
// the longer canonical keys ('science', 'social_studies'). This map bridges the
// gap so URL param subjectId can differ from the canonical new-format key.
const SUBJECT_ID_ALIASES = {
  'sci': 'science',
  'ss':  'social_studies',
};
const resolveSubjectId = (rawId) => SUBJECT_ID_ALIASES[rawId] || rawId;

// ── Upper Explorer (ages 9-10) new-format lesson routing ─────────────────────
// Lesson IDs here route to /upper-explorer/:subjectId/:lessonId.
// Add IDs as UE screen files are authored (one per wave).
const NEW_FORMAT_UE_LESSONS = {
  // Social Studies UE — all 20 lessons wired
  'social_studies': [
    'social-studies-9-10-01',
    'social-studies-9-10-02',
    'social-studies-9-10-03',
    'social-studies-9-10-04',
    'social-studies-9-10-05',
    'social-studies-9-10-06',
    'social-studies-9-10-07',
    'social-studies-9-10-08',
    'social-studies-9-10-09',
    'social-studies-9-10-10',
    'social-studies-9-10-11',
    'social-studies-9-10-12',
    'social-studies-9-10-13',
    'social-studies-9-10-14',
    'social-studies-9-10-15',
    'social-studies-9-10-16',
    'social-studies-9-10-17',
    'social-studies-9-10-18',
    'social-studies-9-10-19',
    'social-studies-9-10-20',
  ],
  // ELA UE — Wave 1 (L01–L20)
  'ela': [
    'ela-9-10-01',
    'ela-9-10-02',
    'ela-9-10-03',
    'ela-9-10-04',
    'ela-9-10-05',
    'ela-9-10-06',
    'ela-9-10-07',
    'ela-9-10-08',
    'ela-9-10-09',
    'ela-9-10-10',
    'ela-9-10-11',
    'ela-9-10-12',
    'ela-9-10-13',
    'ela-9-10-14',
    'ela-9-10-15',
    'ela-9-10-16',
    'ela-9-10-17',
    'ela-9-10-18',
    'ela-9-10-19',
    'ela-9-10-20',
  ],
  // History & World UE — Wave 1 (L01–L13)
  'history': [
    'hw-9-10-01',
    'hw-9-10-02',
    'hw-9-10-03',
    'hw-9-10-04',
    'hw-9-10-05',
    'hw-9-10-06',
    'hw-9-10-07',
    'hw-9-10-08',
    'hw-9-10-09',
    'hw-9-10-10',
    'hw-9-10-11',
    'hw-9-10-12',
    'hw-9-10-13',
    'hw-9-10-14',
    'hw-9-10-15',
    'hw-9-10-16',
    'hw-9-10-17',
    'hw-9-10-18',
    'hw-9-10-19',
    'hw-9-10-20',
  ],
  // Science UE — Wave 1 (L01–L05) + Wave 2 (L06–L09) + Wave 3 (L10–L13)
  'science': [
    'science-9-10-01',
    'science-9-10-02',
    'science-9-10-03',
    'science-9-10-04',
    'science-9-10-05',
    'science-9-10-06',
    'science-9-10-07',
    'science-9-10-08',
    'science-9-10-09',
    'science-9-10-10',
    'science-9-10-11',
    'science-9-10-12',
    'science-9-10-13',
    'science-9-10-14',
    'science-9-10-15',
    'science-9-10-16',
    'science-9-10-17',
    'science-9-10-18',
    'science-9-10-19',
    'science-9-10-20',
  ],
  // Math UE — Wave 1 (L01–L04) + Wave 2 (L05–L08)
  'math': [
    'math-9-10-01',
    'math-9-10-02',
    'math-9-10-03',
    'math-9-10-04',
    'math-9-10-05',
    'math-9-10-06',
    'math-9-10-07',
    'math-9-10-08',
    'math-9-10-09',
    'math-9-10-10',
    'math-9-10-11',
    'math-9-10-12',
    'math-9-10-13',
    'math-9-10-14',
    'math-9-10-15',
    'math-9-10-16',
    'math-9-10-17',
    'math-9-10-18',
    'math-9-10-19',
    'math-9-10-20',
  ],
  // Money & Business UE — Wave 1 (L01–L20)
  'money': ['mb-9-10-01', 'mb-9-10-02', 'mb-9-10-03', 'mb-9-10-04', 'mb-9-10-05', 'mb-9-10-06', 'mb-9-10-07', 'mb-9-10-08', 'mb-9-10-09', 'mb-9-10-10', 'mb-9-10-11', 'mb-9-10-12', 'mb-9-10-13', 'mb-9-10-14', 'mb-9-10-15', 'mb-9-10-16', 'mb-9-10-17', 'mb-9-10-18', 'mb-9-10-19', 'mb-9-10-20'],
  // Cosmos UE — L01–L20
  'cosmos': ['cs-9-10-01', 'cs-9-10-02', 'cs-9-10-03', 'cs-9-10-04', 'cs-9-10-05', 'cs-9-10-06', 'cs-9-10-07', 'cs-9-10-08', 'cs-9-10-09', 'cs-9-10-10', 'cs-9-10-11', 'cs-9-10-12', 'cs-9-10-13', 'cs-9-10-14', 'cs-9-10-15', 'cs-9-10-16', 'cs-9-10-17', 'cs-9-10-18', 'cs-9-10-19', 'cs-9-10-20'],
  // Inner World UE — L01–L15, L17–L20
  'inner-world': ['iw-9-10-01', 'iw-9-10-02', 'iw-9-10-03', 'iw-9-10-04', 'iw-9-10-05', 'iw-9-10-06', 'iw-9-10-07', 'iw-9-10-08', 'iw-9-10-09', 'iw-9-10-10', 'iw-9-10-11', 'iw-9-10-12', 'iw-9-10-13', 'iw-9-10-14', 'iw-9-10-15', 'iw-9-10-17', 'iw-9-10-18', 'iw-9-10-19', 'iw-9-10-20'],
  // Social Leadership UE — L01–L09, L12–L20
  'sl': ['sl-9-10-01', 'sl-9-10-02', 'sl-9-10-03', 'sl-9-10-04', 'sl-9-10-05', 'sl-9-10-06', 'sl-9-10-07', 'sl-9-10-08', 'sl-9-10-09', 'sl-9-10-12', 'sl-9-10-13', 'sl-9-10-14', 'sl-9-10-15', 'sl-9-10-16', 'sl-9-10-17', 'sl-9-10-18', 'sl-9-10-19', 'sl-9-10-20'],
  // Life Wellness UE — L01–L20
  'lw': ['lw-9-10-01', 'lw-9-10-02', 'lw-9-10-03', 'lw-9-10-04', 'lw-9-10-05', 'lw-9-10-06', 'lw-9-10-07', 'lw-9-10-08', 'lw-9-10-09', 'lw-9-10-10', 'lw-9-10-11', 'lw-9-10-12', 'lw-9-10-13', 'lw-9-10-14', 'lw-9-10-15', 'lw-9-10-16', 'lw-9-10-17', 'lw-9-10-18', 'lw-9-10-19', 'lw-9-10-20'],
  // Future Skills UE — L01–L20
  'fs': ['fs-9-10-01', 'fs-9-10-02', 'fs-9-10-03', 'fs-9-10-04', 'fs-9-10-05', 'fs-9-10-06', 'fs-9-10-07', 'fs-9-10-08', 'fs-9-10-09', 'fs-9-10-10', 'fs-9-10-11', 'fs-9-10-12', 'fs-9-10-13', 'fs-9-10-14', 'fs-9-10-15', 'fs-9-10-16', 'fs-9-10-17', 'fs-9-10-18', 'fs-9-10-19', 'fs-9-10-20'],
  // Creative Arts UE — L01–L20
  'ca': ['ca-9-10-01', 'ca-9-10-02', 'ca-9-10-03', 'ca-9-10-04', 'ca-9-10-05', 'ca-9-10-06', 'ca-9-10-07', 'ca-9-10-08', 'ca-9-10-09', 'ca-9-10-10', 'ca-9-10-11', 'ca-9-10-12', 'ca-9-10-13', 'ca-9-10-14', 'ca-9-10-15', 'ca-9-10-16', 'ca-9-10-17', 'ca-9-10-18', 'ca-9-10-19', 'ca-9-10-20'],
  // Frontier UE — L01–L14
  'fp': ['fp-9-10-01', 'fp-9-10-02', 'fp-9-10-03', 'fp-9-10-04', 'fp-9-10-05', 'fp-9-10-06', 'fp-9-10-07', 'fp-9-10-08', 'fp-9-10-09', 'fp-9-10-10', 'fp-9-10-11', 'fp-9-10-12', 'fp-9-10-13', 'fp-9-10-14'],
};

function getUELessonId(subjectId, level, index) {
  if (subjectId === 'social_studies' && level === 3) {
    return `social-studies-9-10-${String(index + 1).padStart(2, '0')}`;
  }
  if (subjectId === 'math' && level === 3) {
    return `math-9-10-${String(index + 1).padStart(2, '0')}`;
  }
  if (subjectId === 'ela' && level === 3) {
    return `ela-9-10-${String(index + 1).padStart(2, '0')}`;
  }
  if (subjectId === 'history' && level === 3) {
    return `hw-9-10-${String(index + 1).padStart(2, '0')}`;
  }
  if (subjectId === 'science' && level === 3) {
    return `science-9-10-${String(index + 1).padStart(2, '0')}`;
  }
  if (subjectId === 'money' && level === 3) {
    return `mb-9-10-${String(index + 1).padStart(2, '0')}`;
  }
  if (subjectId === 'cosmos' && level === 3) {
    return `cs-9-10-${String(index + 1).padStart(2, '0')}`;
  }
  if (subjectId === 'inner-world' && level === 3) {
    return `iw-9-10-${String(index + 1).padStart(2, '0')}`;
  }
  return null;
}

// ── New-format lesson routing ─────────────────────────────────────────────────
// Add a lesson ID here when it's been converted to the screen-based format.
// Its card will then route to /explorer/:subjectId/:lessonId instead of /lesson/*.
const NEW_FORMAT_LESSONS = {
  'inner-world': ['iw-6-8-01', 'iw-6-8-02', 'iw-6-8-03', 'iw-6-8-04', 'iw-6-8-05', 'iw-6-8-06', 'iw-6-8-07', 'iw-6-8-08', 'iw-6-8-09', 'iw-6-8-10', 'iw-6-8-11', 'iw-6-8-12', 'iw-6-8-13', 'iw-6-8-14', 'iw-6-8-15', 'iw-6-8-16', 'iw-6-8-17', 'iw-6-8-18', 'iw-6-8-19', 'iw-6-8-20'],
  'cosmos':      ['cs-6-8-01', 'cs-6-8-02', 'cs-6-8-03', 'cs-6-8-04', 'cs-6-8-05', 'cs-6-8-06', 'cs-6-8-07', 'cs-6-8-08', 'cs-6-8-09', 'cs-6-8-10', 'cs-6-8-11', 'cs-6-8-12', 'cs-6-8-13', 'cs-6-8-14', 'cs-6-8-15', 'cs-6-8-16', 'cs-6-8-17', 'cs-6-8-18', 'cs-6-8-19', 'cs-6-8-20'],
  'money':        ['mb-6-8-01', 'mb-6-8-02', 'mb-6-8-03', 'mb-6-8-04', 'mb-6-8-05', 'mb-6-8-06', 'mb-6-8-07', 'mb-6-8-08', 'mb-6-8-09', 'mb-6-8-10', 'mb-6-8-11', 'mb-6-8-12', 'mb-6-8-13', 'mb-6-8-14', 'mb-6-8-15', 'mb-6-8-16', 'mb-6-8-17', 'mb-6-8-18', 'mb-6-8-19', 'mb-6-8-20'],
  'future-skills': ['fs-6-8-01', 'fs-6-8-02', 'fs-6-8-03', 'fs-6-8-04', 'fs-6-8-05', 'fs-6-8-06', 'fs-6-8-07', 'fs-6-8-08', 'fs-6-8-09', 'fs-6-8-10', 'fs-6-8-11', 'fs-6-8-12', 'fs-6-8-13', 'fs-6-8-14', 'fs-6-8-15', 'fs-6-8-16', 'fs-6-8-17', 'fs-6-8-18', 'fs-6-8-19', 'fs-6-8-20'],
  'leadership':    ['sl-6-8-01', 'sl-6-8-02', 'sl-6-8-03', 'sl-6-8-04', 'sl-6-8-05', 'sl-6-8-06', 'sl-6-8-07', 'sl-6-8-08', 'sl-6-8-09', 'sl-6-8-10', 'sl-6-8-11', 'sl-6-8-12', 'sl-6-8-13', 'sl-6-8-14', 'sl-6-8-15', 'sl-6-8-16', 'sl-6-8-17', 'sl-6-8-18', 'sl-6-8-19', 'sl-6-8-20'],
  'wellness':      ['lw-6-8-01', 'lw-6-8-02', 'lw-6-8-03', 'lw-6-8-04', 'lw-6-8-05', 'lw-6-8-06', 'lw-6-8-07', 'lw-6-8-08', 'lw-6-8-09', 'lw-6-8-10', 'lw-6-8-11', 'lw-6-8-12', 'lw-6-8-13', 'lw-6-8-14', 'lw-6-8-15', 'lw-6-8-16', 'lw-6-8-17', 'lw-6-8-18', 'lw-6-8-19', 'lw-6-8-20'],
  'creative-arts': ['ca-6-8-01', 'ca-6-8-02', 'ca-6-8-03', 'ca-6-8-04', 'ca-6-8-05', 'ca-6-8-06', 'ca-6-8-07', 'ca-6-8-08', 'ca-6-8-09', 'ca-6-8-10', 'ca-6-8-11', 'ca-6-8-12', 'ca-6-8-13', 'ca-6-8-14', 'ca-6-8-15', 'ca-6-8-16', 'ca-6-8-17', 'ca-6-8-18', 'ca-6-8-19', 'ca-6-8-20'],
  // Spanish lessons added here as screen files are authored
  'languages':     ['sp-6-8-01', 'sp-6-8-02', 'sp-6-8-03', 'sp-6-8-04', 'sp-6-8-05', 'sp-6-8-06', 'sp-6-8-07', 'sp-6-8-08', 'sp-6-8-09', 'sp-6-8-10', 'sp-6-8-11', 'sp-6-8-12', 'sp-6-8-13', 'sp-6-8-14', 'sp-6-8-15', 'sp-6-8-16', 'sp-6-8-17', 'sp-6-8-18', 'sp-6-8-19', 'sp-6-8-20'],
  // History & World — L01–L20 (CAPSTONE) — 20/20 COMPLETE
  'history':       ['hw-6-8-01', 'hw-6-8-02', 'hw-6-8-03', 'hw-6-8-04', 'hw-6-8-05', 'hw-6-8-06', 'hw-6-8-07', 'hw-6-8-08', 'hw-6-8-09', 'hw-6-8-10', 'hw-6-8-11', 'hw-6-8-12', 'hw-6-8-13', 'hw-6-8-14', 'hw-6-8-15', 'hw-6-8-16', 'hw-6-8-17', 'hw-6-8-18', 'hw-6-8-19', 'hw-6-8-20'],
  // ELA — L01 wired; remaining lessons wired as screen files are authored
  'ela':           ['ela-6-8-01', 'ela-6-8-02', 'ela-6-8-03', 'ela-6-8-04', 'ela-6-8-05', 'ela-6-8-06', 'ela-6-8-07', 'ela-6-8-08', 'ela-6-8-09', 'ela-6-8-10', 'ela-6-8-11', 'ela-6-8-12', 'ela-6-8-13', 'ela-6-8-14', 'ela-6-8-15', 'ela-6-8-16', 'ela-6-8-17', 'ela-6-8-18', 'ela-6-8-19', 'ela-6-8-20'],
  // Science — L01 wired; remaining lessons wired as screen files are authored
  'science':       ['science-6-8-01', 'science-6-8-02', 'science-6-8-03', 'science-6-8-04', 'science-6-8-05', 'science-6-8-06', 'science-6-8-07', 'science-6-8-08', 'science-6-8-09', 'science-6-8-10', 'science-6-8-11', 'science-6-8-12', 'science-6-8-13', 'science-6-8-14', 'science-6-8-15', 'science-6-8-16', 'science-6-8-17', 'science-6-8-18', 'science-6-8-19', 'science-6-8-20'],
  // Social Studies — lessons wired as screen files are authored
  'social_studies': ['social-studies-6-8-01', 'social-studies-6-8-02', 'social-studies-6-8-03', 'social-studies-6-8-04', 'social-studies-6-8-05', 'social-studies-6-8-06', 'social-studies-6-8-07', 'social-studies-6-8-08', 'social-studies-6-8-09', 'social-studies-6-8-10', 'social-studies-6-8-11', 'social-studies-6-8-12', 'social-studies-6-8-13', 'social-studies-6-8-14', 'social-studies-6-8-15', 'social-studies-6-8-16', 'social-studies-6-8-17', 'social-studies-6-8-18', 'social-studies-6-8-19', 'social-studies-6-8-20'],
  // Math — L01 wired; remaining lessons wired as screen files are authored
  'math':            ['math-6-8-01', 'math-6-8-02', 'math-6-8-03', 'math-6-8-04', 'math-6-8-05', 'math-6-8-06', 'math-6-8-07', 'math-6-8-08', 'math-6-8-09', 'math-6-8-10', 'math-6-8-11', 'math-6-8-12', 'math-6-8-13', 'math-6-8-14', 'math-6-8-15', 'math-6-8-16', 'math-6-8-17', 'math-6-8-18', 'math-6-8-19', 'math-6-8-20'],
  // Frontier & Philosophy — all 20 lessons
  'frontier':        ['fp-6-8-01', 'fp-6-8-02', 'fp-6-8-03', 'fp-6-8-04', 'fp-6-8-05', 'fp-6-8-06', 'fp-6-8-07', 'fp-6-8-08', 'fp-6-8-09', 'fp-6-8-10', 'fp-6-8-11', 'fp-6-8-12', 'fp-6-8-13', 'fp-6-8-14', 'fp-6-8-15', 'fp-6-8-16', 'fp-6-8-17', 'fp-6-8-18', 'fp-6-8-19', 'fp-6-8-20'],
};

// Returns the new-format lesson ID for a given subject/level/index, or null if
// no predictable ID scheme exists for that subject yet.
function getExplorerLessonId(subjectId, level, index) {
  if (subjectId === 'inner-world' && level === 2) {
    return `iw-6-8-${String(index + 1).padStart(2, '0')}`;
  }
  if (subjectId === 'cosmos' && level === 2) {
    return `cs-6-8-${String(index + 1).padStart(2, '0')}`;
  }
  if (subjectId === 'money' && level === 2) {
    return `mb-6-8-${String(index + 1).padStart(2, '0')}`;
  }
  if (subjectId === 'future-skills' && level === 2) {
    return `fs-6-8-${String(index + 1).padStart(2, '0')}`;
  }
  if (subjectId === 'leadership' && level === 2) {
    return `sl-6-8-${String(index + 1).padStart(2, '0')}`;
  }
  if (subjectId === 'wellness' && level === 2) {
    return `lw-6-8-${String(index + 1).padStart(2, '0')}`;
  }
  if (subjectId === 'creative-arts' && level === 2) {
    return `ca-6-8-${String(index + 1).padStart(2, '0')}`;
  }
  if (subjectId === 'languages' && level === 2) {
    return `sp-6-8-${String(index + 1).padStart(2, '0')}`;
  }
  if (subjectId === 'history' && level === 2) {
    return `hw-6-8-${String(index + 1).padStart(2, '0')}`;
  }
  if (subjectId === 'ela' && level === 2) {
    return `ela-6-8-${String(index + 1).padStart(2, '0')}`;
  }
  if (subjectId === 'science' && level === 2) {
    return `science-6-8-${String(index + 1).padStart(2, '0')}`;
  }
  if (subjectId === 'social_studies' && level === 2) {
    return `social-studies-6-8-${String(index + 1).padStart(2, '0')}`;
  }
  if (subjectId === 'math' && level === 2) {
    return `math-6-8-${String(index + 1).padStart(2, '0')}`;
  }
  if (subjectId === 'frontier' && level === 2) {
    return `fp-6-8-${String(index + 1).padStart(2, '0')}`;
  }
  return null;
}

export default function SubjectView() {
  const { subjectId } = useParams();
  const navigate = useNavigate();
  const child = getCurrentChild();
  const s = getSubject(subjectId);
  const guideAvatar = getAvatar((s.guide || 'nova').toLowerCase());
  // Age band is fixed to the child's age — not selectable
  const childBand = child ? ageToAgeBand(child.age) : AGE_BANDS[1];
  const level = childBand.level;

  useEffect(() => { window.scrollTo(0, 0); }, []);

  const progress = child?.progress || {};
  const academicSubject = CORE_ACADEMICS.find(a => a.id === subjectId);

  // Subject-specific Little Stars curricula override level 1
  const l1Lessons = subjectId === 'ela'          ? ELA_LITTLESTARS
    : subjectId === 'sci'                        ? SCI_LITTLESTARS
    : subjectId === 'ss'                         ? SS_LITTLESTARS
    : subjectId === 'inner-world'                ? INNERWORLD_LITTLESTARS
    : subjectId === 'cosmos'                     ? COSMOS_LITTLESTARS
    : subjectId === 'math'                       ? MATH_LITTLESTARS
    : subjectId === 'money'                      ? MONEYBUSINESS_LITTLESTARS
    : subjectId === 'future-skills'              ? FUTURESKILLS_LITTLESTARS
    : subjectId === 'leadership'                 ? SOCIALLEADERSHIP_LITTLESTARS
    : subjectId === 'wellness'                   ? LIFEWELLNESS_LITTLESTARS
    : subjectId === 'creative-arts'              ? CREATIVEARTS_LITTLESTARS
    : subjectId === 'history'                    ? HISTORYWORLD_LITTLESTARS
    : subjectId === 'languages'                  ? SPANISH_LITTLESTARS
    : subjectId === 'frontier'                   ? FRONTIER_LITTLESTARS
    : getLessons(subjectId);
  // Subject-specific Explorers curricula override level 2
  const l2Lessons = subjectId === 'ela'          ? ELA_EXPLORERS
    : subjectId === 'inner-world'                ? INNERWORLD_EXPLORERS
    : subjectId === 'money'                      ? MONEYBUSINESS_EXPLORERS
    : subjectId === 'cosmos'                     ? COSMOS_EXPLORERS
    : subjectId === 'sci'                        ? SCI_EXPLORERS
    : subjectId === 'future-skills'              ? FUTURESKILLS_EXPLORERS
    : subjectId === 'leadership'                 ? SOCIALLEADERSHIP_EXPLORERS
    : subjectId === 'wellness'                   ? LIFEWELLNESS_EXPLORERS
    : subjectId === 'creative-arts'              ? CREATIVEARTS_EXPLORERS
    : subjectId === 'history'                    ? HISTORYWORLD_EXPLORERS
    : subjectId === 'languages'                  ? SPANISH_EXPLORERS
    : subjectId === 'ss'                         ? SS_EXPLORERS
    : subjectId === 'science'                    ? SCI_EXPLORERS
    : subjectId === 'social_studies'             ? getLevel2Lessons(subjectId)
    : subjectId === 'math'                       ? MATH_EXPLORERS
    : subjectId === 'frontier'                   ? FRONTIER_EXPLORERS
    : getLevel2Lessons(subjectId);
  // Subject-specific Upper Explorers curricula override level 3
  const l3Lessons = subjectId === 'ela'          ? ELA_UPPEREXPLORERS
    : subjectId === 'inner-world'                ? INNERWORLD_UPPEREXPLORERS
    : subjectId === 'cosmos'                     ? COSMOS_UPPEREXPLORERS
    : subjectId === 'sci'                        ? SCI_UPPEREXPLORERS
    : subjectId === 'money'                      ? MONEYBUSINESS_UPPEREXPLORERS
    : subjectId === 'future-skills'              ? FUTURESKILLS_UPPEREXPLORERS
    : subjectId === 'leadership'                 ? SOCIALLEADERSHIP_UPPEREXPLORERS
    : subjectId === 'wellness'                   ? LIFEWELLNESS_UPPEREXPLORERS
    : subjectId === 'creative-arts'              ? CREATIVEARTS_UPPEREXPLORERS
    : subjectId === 'history'                    ? HISTORYWORLD_UPPEREXPLORERS
    : subjectId === 'ss'                         ? SS_UPPEREXPLORERS_UE
    : subjectId === 'math'                       ? MATH_UPPEREXPLORERS_UE
    : getLevel3Lessons(subjectId);
  // Subject-specific Voyagers curricula override level 4
  const l4Lessons = subjectId === 'ela'          ? ELA_VOYAGERS
    : subjectId === 'inner-world'                ? INNERWORLD_VOYAGERS
    : subjectId === 'cosmos'                     ? COSMOS_VOYAGERS
    : subjectId === 'sci'                        ? SCI_VOYAGERS
    : subjectId === 'math'                       ? MATH_VOYAGERS
    : subjectId === 'money'                      ? MONEYBUSINESS_VOYAGERS
    : subjectId === 'future-skills'              ? FUTURESKILLS_VOYAGERS
    : subjectId === 'leadership'                 ? SOCIALLEADERSHIP_VOYAGERS
    : subjectId === 'wellness'                   ? LIFEWELLNESS_VOYAGERS
    : subjectId === 'creative-arts'              ? CREATIVEARTS_VOYAGERS
    : subjectId === 'history'                    ? HISTORYWORLD_VOYAGERS
    : subjectId === 'ss'                         ? SS_VOYAGERS
    : getLevel4Lessons(subjectId);

  const lessonsByLevel = { 1: l1Lessons, 2: l2Lessons, 3: l3Lessons, 4: l4Lessons };
  const lessonData = lessonsByLevel[level] || [];
  const progressKey = level === 1 ? subjectId : `${subjectId}__${level}`;
  const doneLessons = progress[progressKey] || 0;
  const hasContent = lessonData.length > 0;

  // Math v2 lessons use MathLessonPlayer instead of UpperExplorerLessonPlayer.
  // Add lesson IDs here as they are rebuilt in the manipulative-first format.
  const MATH_V2_LESSONS = new Set(['math-9-10-01']);

  function handleLessonClick(i) {
    if (!hasContent) return;
    if (!child) { navigate('/child/select'); return; }
    const canonicalId = resolveSubjectId(subjectId);

    // Check UE screen-based format first (level 3)
    const ueId = getUELessonId(canonicalId, level, i);
    if (ueId && NEW_FORMAT_UE_LESSONS[canonicalId]?.includes(ueId)) {
      // Math v2 override: route to MathLessonPlayer for rebuilt lessons
      if (canonicalId === 'math' && MATH_V2_LESSONS.has(ueId)) {
        navigate(`/math-lesson/${ueId}`);
        return;
      }
      navigate(`/upper-explorer/${canonicalId}/${ueId}`);
      return;
    }

    // Check Explorer screen-based format (level 2)
    const lessonId = getExplorerLessonId(canonicalId, level, i);
    if (lessonId && NEW_FORMAT_LESSONS[canonicalId]?.includes(lessonId)) {
      navigate(`/explorer/${canonicalId}/${lessonId}`);
      return;
    }

    navigate(`/child/lesson/${subjectId}/${i}?level=${level}`);
  }

  return (
    <div className="min-h-screen bg-[#080618] transition-page">
      {/* Background glow */}
      <div className="fixed inset-0 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{ background: `radial-gradient(ellipse 60% 40% at 50% 0%, ${s.color}20 0%, transparent 70%)` }}
        />
      </div>

      <div className="relative z-10 max-w-2xl mx-auto px-4 py-8">
        {/* Back */}
        <button
          onClick={() => navigate('/child/dashboard')}
          className="flex items-center gap-2 text-white/40 hover:text-white mb-8 transition-colors text-sm"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
          My dashboard
        </button>

        {/* Subject header */}
        <div className="text-center mb-10">
          <div className="mb-4 flex justify-center">
            <img
              src={guideAvatar.image}
              alt={guideAvatar.name}
              style={{
                width: 88, height: 88,
                borderRadius: '50%',
                objectFit: 'cover',
                border: `3px solid ${s.color}55`,
                boxShadow: `0 0 24px ${s.color}55`,
              }}
            />
          </div>
          <h1 className="text-4xl font-semibold text-white mb-3" style={{ fontFamily: 'Georgia, serif' }}>
            {s.label}
          </h1>
          <div className="flex flex-col items-center gap-2 mb-4">
            <p className="text-base" style={{ color: s.color }}>
              {s.guide} the {s.guideAnimal} is your guide
            </p>
            {academicSubject?.standard && (
              <span
                className="text-[10px] font-semibold px-2.5 py-0.5 rounded-full"
                style={{ background: s.color + '20', color: s.color }}
              >
                {academicSubject.standard}
              </span>
            )}
          </div>
          <div className="inline-flex items-center gap-2 bg-white/5 rounded-full px-4 py-1.5">
            <div className="w-2 h-2 rounded-full" style={{ background: s.color }}/>
            <span className="text-white/50 text-sm">
              {doneLessons} of {lessonData.length} lessons done
            </span>
          </div>
        </div>

        {/* Speech bubble */}
        <div className="flex gap-4 mb-6 bg-[#0F0B2E] rounded-2xl p-5 border border-white/8">
          <div
            className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0"
            style={{ boxShadow: `0 0 0 2px ${guideAvatar.accent}55` }}
          >
            <img src={guideAvatar.image} alt={guideAvatar.name} className="w-full h-full object-cover" />
          </div>
          <div>
            <p className="text-xs font-semibold mb-1" style={{ color: guideAvatar.accent }}>
              {guideAvatar.name} says:
            </p>
            <p className="text-white/65 text-sm leading-relaxed">{getGuideIntro(subjectId, s.label)}</p>
          </div>
        </div>

        {/* Band label (read-only) */}
        <div className="flex items-center justify-between mb-4">
          <p className="text-white/30 text-xs font-semibold tracking-widest uppercase">
            {childBand.label} · Ages {childBand.ages} · {lessonData.length} lessons
          </p>
          {!child?.age && (
            <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full" style={{ background: 'rgba(251,191,36,0.12)', color: '#FBBF24' }}>
              Set age in settings
            </span>
          )}
        </div>

        {/* Lesson list */}
        {hasContent ? (
          <div className="space-y-3">
            {lessonData.map((lesson, i) => {
              const isDone     = i < doneLessons;
              const isUnlocked = true; // beta: all lessons unlocked
              const isCurrent  = i === doneLessons;

              return (
                <button
                  key={i}
                  onClick={() => handleLessonClick(i)}
                  disabled={!isUnlocked}
                  className={`w-full text-left rounded-2xl p-5 border transition-all duration-200
                    ${isDone
                      ? 'border-emerald-500/30 bg-emerald-500/8 hover:border-emerald-500/50 hover:scale-[1.01]'
                      : isUnlocked
                        ? 'border-white/12 bg-white/4 hover:border-white/25 hover:bg-white/7 hover:scale-[1.01]'
                        : 'border-white/5 bg-white/2 opacity-40 cursor-not-allowed'}`}
                >
                  <div className="flex items-center gap-4">
                    {/* Number / check */}
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold flex-shrink-0 transition-all
                        ${isDone ? 'bg-emerald-500 text-white' : ''}`}
                      style={!isDone ? { background: s.color + (isUnlocked ? '28' : '12'), color: isUnlocked ? s.color : 'rgba(255,255,255,0.2)' } : {}}
                    >
                      {isDone ? (
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                          <path d="M2.5 7l3 3 6-6" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      ) : i + 1}
                    </div>

                    <div className="flex-1 min-w-0">
                      <p className={`font-semibold truncate ${isDone ? 'text-emerald-400' : isUnlocked ? 'text-white' : 'text-white/30'}`}>
                        {lesson.title}
                      </p>
                      <p className="text-xs text-white/30 mt-0.5">
                        {isDone       ? 'Completed'
                          : isUnlocked  ? (lesson.duration ? `~${lesson.duration}` : 'Tap to start')
                          : 'Complete previous lesson first'}
                      </p>
                    </div>

                    {isCurrent && (
                      <div
                        className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                        style={{ background: s.color + '30' }}
                      >
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: s.color }}>
                          <polygon points="5 3 19 12 5 21 5 3"/>
                        </svg>
                      </div>
                    )}
                    {isDone && (
                      <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 bg-emerald-500/15">
                        <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
                          <path d="M2.5 7l3 3 6-6" stroke="#34d399" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-10 border border-dashed border-white/8 rounded-2xl">
            <p className="text-white/30 text-sm">Coming soon</p>
          </div>
        )}
      </div>
    </div>
  );
}

function getGuideIntro(subjectId, subjectLabel) {
  const intros = {
    'inner-world':   "Take a gentle breath. Your inner world is full of wisdom — we just slow down and listen to it together.",
    'cosmos':        "Ready to explore? The universe is vast and full of wonder. Let's discover its secrets together!",
    'history':       "Every civilization has a story worth knowing. Let's travel through time and meet the people who shaped our world.",
    'future-skills': "Every expert was once a beginner. We build skills step by step — and you'll amaze yourself.",
    'money':         "Money is a tool, and knowing how to use it changes everything. Let's build real-world wisdom.",
    'creative-arts': "Expression is your superpower. Here, your imagination leads — there are no wrong answers.",
    'wellness':      "Your body and mind are extraordinary. Let's learn how to take care of them every single day.",
    'leadership':    "Every great journey starts where you are. We'll build courage, character, and heart together.",
    'languages':     "¡Hola! Language opens doors to new worlds and new friends. Let's start our adventure in Spanish!",
    'frontier':      "The biggest questions have the most interesting answers. Let's explore the edge of what's known.",
    'math':          "Every number tells a story. Together we'll uncover the patterns and logic that make math beautiful.",
    'ela':           "Words and ideas are magic. Here you'll find your voice and discover ideas worth sharing.",
    'sci':           "Science is how we ask questions and find real answers. Let's investigate the world around us!",
    'ss':            "Understanding people, places, and history helps us understand ourselves. Let's explore together.",
  };
  return intros[subjectId] || `Welcome to ${subjectLabel}! Let's learn something wonderful today.`;
}
