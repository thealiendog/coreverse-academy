#!/usr/bin/env node
/**
 * validate-routing-integrity.mjs
 *
 * Build-time guardrail: verifies that every Explorer subject wired in
 * NEW_FORMAT_LESSONS is fully connected through all four routing layers:
 *   SubjectView.jsx  →  l2Lessons ternary
 *   SubjectView.jsx  →  getExplorerLessonId()
 *   ExplorerLessonPlayer.jsx  →  EXPLORER_DATA
 *   src/data/  →  *_explorer_l*_screens.js files
 *
 * Checks:
 *   1. NEW_FORMAT_LESSONS coverage — every subject has an arm in the l2Lessons ternary
 *   2. EXPLORER_DATA coverage — every EXPLORER_DATA subject is in NEW_FORMAT_LESSONS
 *   3. Adapter coverage — every *_explorers_adapter.js for a NEW_FORMAT_LESSONS subject
 *      is imported in SubjectView.jsx and wired into the l2Lessons ternary
 *   4. Bidirectional ID consistency — every ID in NEW_FORMAT_LESSONS has a screen file;
 *      every screen file for a NEW_FORMAT_LESSONS subject is registered in NEW_FORMAT_LESSONS
 *   5. getExplorerLessonId() coverage — every NEW_FORMAT_LESSONS subject has a matching branch
 *
 * A new subject is fully wired only when all 5 checks pass.
 * See docs/explorer-engine-contract.md for the Subject Wiring Checklist.
 *
 * Exits 1 if any error is found.
 */

import fs   from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname     = path.dirname(fileURLToPath(import.meta.url));
const DATA_DIR      = path.join(__dirname, '../src/data');
const SUBJECT_VIEW  = path.join(__dirname, '../src/pages/SubjectView.jsx');
const LESSON_PLAYER = path.join(__dirname, '../src/components/explorers/ExplorerLessonPlayer.jsx');

// ── Subject ↔ file slug mapping ───────────────────────────────────────────────
// Maps file prefix slug → runtime subjectId (URL param + EXPLORER_DATA key)
// Keep this in sync when adding new subjects.
const SLUG_TO_SUBJECT = {
  innerworld:       'inner-world',
  cosmos:           'cosmos',
  moneybusiness:    'money',
  futureskills:     'future-skills',
  socialleadership: 'leadership',
  lifewellness:     'wellness',
  creativearts:     'creative-arts',
  historyworld:     'history',
  ela:              'ela',
  sci:              'sci',
  ss:               'ss',
  math:             'math',
  frontier:         'frontier',
  spanish:          'languages',
};

// Inverse: runtime subjectId → file slug prefix
const SUBJECT_TO_SLUG = Object.fromEntries(
  Object.entries(SLUG_TO_SUBJECT).map(([slug, subject]) => [subject, slug])
);

// Some L01 files predate the lNN naming convention and use legacy names.
// When the expected file {slug}_explorer_l01_screens.js is missing, also
// accept the legacy filename listed here.
const LEGACY_L01_FILES = {
  innerworld: 'innerworld_explorer_screens.js',
};

// ── Source files ──────────────────────────────────────────────────────────────

const svSrc = fs.readFileSync(SUBJECT_VIEW,  'utf8');
const lpSrc = fs.readFileSync(LESSON_PLAYER, 'utf8');

// ── Parse: NEW_FORMAT_LESSONS ─────────────────────────────────────────────────
// Returns { [subjectId]: string[] } — the registered lesson ID arrays.

function extractNewFormatLessons(src) {
  // The block ends at the closing brace of the object literal
  const m = src.match(/const NEW_FORMAT_LESSONS\s*=\s*\{([\s\S]*?)\n\};/);
  if (!m) throw new Error('Cannot find NEW_FORMAT_LESSONS in SubjectView.jsx');
  const block = m[1];

  const result = {};
  // Each entry is: 'subject-id': ['id-01', 'id-02', ...]
  // The array may span multiple lines, so match up to the closing bracket
  const entryRe = /'([^']+)'\s*:\s*\[([^\]]+)\]/g;
  let match;
  while ((match = entryRe.exec(block)) !== null) {
    const subjectId = match[1];
    const ids = (match[2].match(/'([^']+)'/g) || []).map(s => s.replace(/'/g, ''));
    result[subjectId] = ids;
  }
  return result;
}

// ── Parse: l2Lessons ternary subjects ─────────────────────────────────────────
// Returns string[] of subjectIds that appear in the l2Lessons ternary chain.

function extractL2ArmSubjects(src) {
  // The l2Lessons ternary starts after "// Subject-specific Explorers curricula"
  // and ends just before "// Subject-specific Upper Explorers"
  const m = src.match(
    /Subject-specific Explorers curricula override level 2([\s\S]+?)Subject-specific Upper Explorers/
  );
  if (!m) throw new Error('Cannot find l2Lessons ternary block in SubjectView.jsx');
  const block = m[1];

  const subjects = [];
  const re = /subjectId === '([^']+)'/g;
  let match;
  while ((match = re.exec(block)) !== null) {
    subjects.push(match[1]);
  }
  return subjects;
}

// ── Parse: getExplorerLessonId branches ───────────────────────────────────────
// Returns string[] of subjectIds that have a branch in the function.

function extractGetExplorerLessonIdSubjects(src) {
  const m = src.match(/function getExplorerLessonId\s*\([^)]*\)\s*\{([\s\S]+?)\n\}/);
  if (!m) throw new Error('Cannot find getExplorerLessonId() in SubjectView.jsx');
  const body = m[1];

  const subjects = [];
  const re = /subjectId === '([^']+)'/g;
  let match;
  while ((match = re.exec(body)) !== null) {
    subjects.push(match[1]);
  }
  return subjects;
}

// ── Parse: EXPLORER_DATA subjects ─────────────────────────────────────────────
// Returns string[] of subjectIds that are keys in EXPLORER_DATA.

function extractExplorerDataSubjects(src) {
  // Find the EXPLORER_DATA block — it starts with 'const EXPLORER_DATA = {'
  // and ends with the closing '\n};'
  const m = src.match(/const EXPLORER_DATA\s*=\s*\{([\s\S]+?)\n\};/);
  if (!m) throw new Error('Cannot find EXPLORER_DATA in ExplorerLessonPlayer.jsx');
  const block = m[1];

  const subjects = [];
  // Top-level keys are indented with 2 spaces: '  \'subject\': {'
  const re = /^\s+'([^']+)'\s*:\s*\{/gm;
  let match;
  while ((match = re.exec(block)) !== null) {
    subjects.push(match[1]);
  }
  return subjects;
}

// ── Discover files ─────────────────────────────────────────────────────────────

function getExplorerAdapters() {
  return fs.readdirSync(DATA_DIR)
    .filter(f => /^.+_explorers_adapter\.js$/.test(f))
    .map(f => {
      const slug      = f.replace(/_explorers_adapter\.js$/, '');
      const subjectId = SLUG_TO_SUBJECT[slug] || null;
      return { filename: f, slug, subjectId };
    });
}

function getScreenFiles() {
  return fs.readdirSync(DATA_DIR)
    .filter(f => /^.+_explorer_l\d+_screens\.js$/.test(f))
    .map(f => {
      const slug      = f.replace(/_explorer_l\d+_screens\.js$/, '');
      const nnMatch   = f.match(/_l(\d+)_screens\.js$/);
      const nn        = nnMatch ? nnMatch[1] : null;
      const subjectId = SLUG_TO_SUBJECT[slug] || null;
      return { filename: f, slug, nn, subjectId };
    });
}

// Extract the zero-padded lesson number from an ID like 'sp-6-8-05' → '05'
function lessonNumFromId(lessonId) {
  const m = lessonId.match(/-(\d+)$/);
  return m ? m[1] : null;
}

// ── Reporting ─────────────────────────────────────────────────────────────────

let totalErrors = 0;

function fail(msg) {
  console.error(`✗  ${msg}`);
  totalErrors++;
}

function pass(msg) {
  console.log(`✓  ${msg}`);
}

// ── Parse all source data ─────────────────────────────────────────────────────

let newFormatLessons, l2ArmSubjects, geliSubjects, explorerDataSubjects;
try {
  newFormatLessons     = extractNewFormatLessons(svSrc);
  l2ArmSubjects        = extractL2ArmSubjects(svSrc);
  geliSubjects         = extractGetExplorerLessonIdSubjects(svSrc);
  explorerDataSubjects = extractExplorerDataSubjects(lpSrc);
} catch (e) {
  console.error(`PARSE ERROR: ${e.message}`);
  console.error('Cannot continue — fix the parse error above first.');
  process.exit(1);
}

const newFormatSubjects = Object.keys(newFormatLessons);
const totalIds          = Object.values(newFormatLessons).flat().length;

// ── CHECK 1: NEW_FORMAT_LESSONS → l2Lessons ternary ──────────────────────────

console.log('\n── CHECK 1: NEW_FORMAT_LESSONS subjects have an l2Lessons arm ───────────');
let check1Pass = true;
for (const subjectId of newFormatSubjects) {
  if (!l2ArmSubjects.includes(subjectId)) {
    fail(
      `'${subjectId}' is in NEW_FORMAT_LESSONS but has no arm in the l2Lessons ternary ` +
      `(SubjectView.jsx) — lesson cards will fall back to getLevel2Lessons() and show old data`
    );
    check1Pass = false;
  }
}
if (check1Pass) pass(`all ${newFormatSubjects.length} NEW_FORMAT_LESSONS subjects have an l2Lessons arm`);

// ── CHECK 2: EXPLORER_DATA → NEW_FORMAT_LESSONS ───────────────────────────────

console.log('\n── CHECK 2: EXPLORER_DATA subjects are in NEW_FORMAT_LESSONS ────────────');
let check2Pass = true;
for (const subjectId of explorerDataSubjects) {
  if (!newFormatLessons[subjectId]) {
    fail(
      `'${subjectId}' is in EXPLORER_DATA (ExplorerLessonPlayer.jsx) but missing from ` +
      `NEW_FORMAT_LESSONS (SubjectView.jsx) — lesson clicks for this subject will never ` +
      `route to /explorer/:subjectId/:lessonId`
    );
    check2Pass = false;
  }
}
if (check2Pass) pass(`all ${explorerDataSubjects.length} EXPLORER_DATA subjects are in NEW_FORMAT_LESSONS`);

// ── CHECK 3: Adapter coverage ─────────────────────────────────────────────────
// For every *_explorers_adapter.js whose subjectId is in NEW_FORMAT_LESSONS:
//   - adapter must be imported in SubjectView.jsx
//   - subjectId must appear in l2Lessons ternary

console.log('\n── CHECK 3: Explorer adapters imported and wired into l2Lessons ─────────');
const adapters  = getExplorerAdapters();
let check3Pass  = true;
let check3Count = 0;

for (const { filename, slug, subjectId } of adapters) {
  // Only validate adapters for subjects that are in NEW_FORMAT_LESSONS
  if (!subjectId || !newFormatLessons[subjectId]) continue;

  check3Count++;
  const adapterBase = `${slug}_explorers_adapter`;

  // Check the adapter is imported in SubjectView.jsx
  if (!svSrc.includes(adapterBase)) {
    fail(
      `${filename}: subjectId '${subjectId}' is in NEW_FORMAT_LESSONS but ` +
      `'${adapterBase}' is not imported in SubjectView.jsx — lesson cards will not render`
    );
    check3Pass = false;
    continue;
  }

  // Check the subjectId has an arm in the l2Lessons ternary
  if (!l2ArmSubjects.includes(subjectId)) {
    // Already caught by CHECK 1, but report specifically for the adapter
    fail(
      `${filename}: adapter is imported but subjectId '${subjectId}' has no arm ` +
      `in the l2Lessons ternary — the import is dead code`
    );
    check3Pass = false;
  }
}

if (check3Pass) pass(`all ${check3Count} NEW_FORMAT_LESSONS adapters are imported and wired`);

// ── CHECK 4: Bidirectional ID consistency ─────────────────────────────────────

console.log('\n── CHECK 4: Bidirectional ID consistency ────────────────────────────────');
let check4Pass = true;

// 4a: Every ID in NEW_FORMAT_LESSONS has a matching screen file on disk
for (const [subjectId, lessonIds] of Object.entries(newFormatLessons)) {
  const slug = SUBJECT_TO_SLUG[subjectId];
  if (!slug) {
    fail(
      `No SUBJECT_TO_SLUG mapping for subjectId '${subjectId}' — ` +
      `add it to validate-routing-integrity.mjs`
    );
    check4Pass = false;
    continue;
  }

  for (const lessonId of lessonIds) {
    const nn = lessonNumFromId(lessonId);
    if (!nn) {
      fail(`Cannot parse lesson number from ID '${lessonId}' — expected format like 'sp-6-8-01'`);
      check4Pass = false;
      continue;
    }
    const expectedFile = `${slug}_explorer_l${nn}_screens.js`;
    const legacyFile   = parseInt(nn, 10) === 1 ? (LEGACY_L01_FILES[slug] || null) : null;
    const fileExists   =
      fs.existsSync(path.join(DATA_DIR, expectedFile)) ||
      (legacyFile && fs.existsSync(path.join(DATA_DIR, legacyFile)));

    if (!fileExists) {
      fail(
        `NEW_FORMAT_LESSONS['${subjectId}'] includes '${lessonId}' → ` +
        `expected file '${expectedFile}' not found in src/data/`
      );
      check4Pass = false;
    }
  }
}

// 4b: Every screen file for a NEW_FORMAT_LESSONS subject has its lesson registered
const screenFiles = getScreenFiles();
for (const { filename, subjectId, nn } of screenFiles) {
  // Only check files whose subjectId is registered in NEW_FORMAT_LESSONS
  if (!subjectId || !newFormatLessons[subjectId]) continue;

  const registeredIds = newFormatLessons[subjectId];
  const hasMatch      = registeredIds.some(id => {
    const idNum = lessonNumFromId(id);
    return idNum !== null && parseInt(idNum, 10) === parseInt(nn, 10);
  });

  if (!hasMatch) {
    fail(
      `${filename}: lesson number ${nn} exists on disk but no matching ID ` +
      `in NEW_FORMAT_LESSONS['${subjectId}'] — file will never be routed to`
    );
    check4Pass = false;
  }
}

if (check4Pass) {
  pass(
    `bidirectional consistency verified — ` +
    `${totalIds} registered IDs ↔ ${screenFiles.filter(f => f.subjectId && newFormatLessons[f.subjectId]).length} NEW_FORMAT screen files`
  );
}

// ── CHECK 5: getExplorerLessonId() branches ───────────────────────────────────

console.log('\n── CHECK 5: getExplorerLessonId() has a branch for every NEW_FORMAT_LESSONS subject ─');
let check5Pass = true;
for (const subjectId of newFormatSubjects) {
  if (!geliSubjects.includes(subjectId)) {
    fail(
      `'${subjectId}' is in NEW_FORMAT_LESSONS but has no branch in getExplorerLessonId() ` +
      `(SubjectView.jsx) — clicking a lesson card will route to /child/lesson/... instead of ` +
      `/explorer/:subjectId/:lessonId`
    );
    check5Pass = false;
  }
}
if (check5Pass) pass(`all ${newFormatSubjects.length} NEW_FORMAT_LESSONS subjects have a getExplorerLessonId() branch`);

// ── Summary ───────────────────────────────────────────────────────────────────

console.log(`\nRouting integrity: ${totalErrors} error(s) across 5 checks`);
if (totalErrors > 0) {
  console.error(
    '\nFix all errors above before shipping a new subject.\n' +
    'See docs/explorer-engine-contract.md §"Subject Wiring Checklist" for the 10-step guide.'
  );
  process.exit(1);
}
