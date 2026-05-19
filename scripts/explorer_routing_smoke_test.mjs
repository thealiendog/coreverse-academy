/**
 * Explorer Routing Smoke Test
 *
 * Simulates what happens when a user clicks each subject in the Explorer band.
 * Catches key mismatches between constants.js subject IDs, NEW_FORMAT_LESSONS,
 * EXPLORER_DATA, getExplorerLessonId(), and screen file existence.
 *
 * Logic:
 *   • Subject NOT in NEW_FORMAT_LESSONS → falls through to old LessonPlayer (expected, shown as info)
 *   • Subject IN NEW_FORMAT_LESSONS but missing from EXPLORER_DATA or getId branch → HARD FAIL
 *   • Subject IN NEW_FORMAT_LESSONS, routing OK, but no screen file L01 → WARNING (content pending)
 *   • Everything present → PASS
 *
 * Exit codes:
 *   0 — no hard routing failures (warnings are OK)
 *   1 — one or more subjects have routing key mismatches
 *
 * Run: node scripts/explorer_routing_smoke_test.mjs
 */

import { readFileSync, existsSync } from 'fs';

const ROOT = new URL('..', import.meta.url).pathname.replace(/\/$/, '');
const subjectViewSrc    = readFileSync(`${ROOT}/src/pages/SubjectView.jsx`, 'utf8');
const explorerPlayerSrc = readFileSync(`${ROOT}/src/components/explorers/ExplorerLessonPlayer.jsx`, 'utf8');
const constantsSrc      = readFileSync(`${ROOT}/src/lib/constants.js`, 'utf8');

// ── File prefix overrides ────────────────────────────────────────────────────
// Some subjects use a different file prefix from their canonical key.
// e.g. key 'history' → files named historyworld_explorer_l*.js
const FILE_PREFIX_OVERRIDES = {
  'history':        'historyworld',
  'creative-arts':  'creativearts',
  'future-skills':  'futureskills',
  'wellness':       'lifewellness',
  'money':          'moneybusiness',
  'leadership':     'socialleadership',
  'languages':      'spanish',
};

const resolveFilePrefix = (canonicalId) => FILE_PREFIX_OVERRIDES[canonicalId] || canonicalId;

// ── Extraction helpers ───────────────────────────────────────────────────────
function extractAliases(src) {
  const match = src.match(/const SUBJECT_ID_ALIASES\s*=\s*\{([^}]+)\}/);
  if (!match) return {};
  const aliases = {};
  for (const line of match[1].split('\n')) {
    const m = line.match(/['"`]([^'"`]+)['"`]\s*:\s*['"`]([^'"`]+)['"`]/);
    if (m) aliases[m[1]] = m[2];
  }
  return aliases;
}

function extractNewFormatKeys(src) {
  const match = src.match(/const NEW_FORMAT_LESSONS\s*=\s*\{([\s\S]+?)\};/);
  if (!match) return new Set();
  const keys = new Set();
  for (const line of match[1].split('\n')) {
    const m = line.match(/^\s*['"`]([^'"`]+)['"`]\s*:/);
    if (m) keys.add(m[1]);
  }
  return keys;
}

function extractExplorerDataKeys(src) {
  const match = src.match(/const EXPLORER_DATA\s*=\s*\{([\s\S]+?)\n\};/);
  if (!match) return new Set();
  const keys = new Set();
  for (const line of match[1].split('\n')) {
    const m = line.match(/^\s*['"`]([^'"`]+)['"`]\s*:\s*\{/);
    if (m) keys.add(m[1]);
  }
  return keys;
}

function extractGetIdBranches(src) {
  const branches = new Set();
  const re = /subjectId === ['"`]([^'"`]+)['"`] && level === 2/g;
  let m;
  while ((m = re.exec(src)) !== null) branches.add(m[1]);
  return branches;
}

function extractSubjectIds(src) {
  const subjects = [];
  const re = /\{\s*id:\s*['"`]([^'"`]+)['"`][^}]+?label:\s*['"`]([^'"`]+)['"`]/g;
  let m;
  while ((m = re.exec(src)) !== null) {
    const id = m[1];
    const label = m[2];
    if (['little-stars','explorers','upper-explorers','voyagers'].includes(id)) continue;
    if (['nova','sage','byte','ace','muse','valor','terra','lyra','luna','remi','quill','cosmo','atlas','orion'].includes(id)) continue;
    subjects.push({ id, label });
  }
  return subjects;
}

function screenFileExists(canonicalId, lessonNum) {
  const prefix = resolveFilePrefix(canonicalId);
  const pad = String(lessonNum).padStart(2, '0');
  return existsSync(`${ROOT}/src/data/${prefix}_explorer_l${pad}_screens.js`);
}

// ── Main ─────────────────────────────────────────────────────────────────────
const aliases        = extractAliases(subjectViewSrc);
const newFormatKeys  = extractNewFormatKeys(subjectViewSrc);
const explorerKeys   = extractExplorerDataKeys(explorerPlayerSrc);
const idBranches     = extractGetIdBranches(subjectViewSrc);
const subjects       = extractSubjectIds(constantsSrc);

const resolveSubjectId = (rawId) => aliases[rawId] || rawId;

let passCount = 0;
let failCount = 0;
let warnCount = 0;
let oldCount  = 0;
const failures = [];
const warnings = [];

console.log('=== Explorer Routing Smoke Test ===\n');

for (const { id: rawId, label } of subjects) {
  const canonicalId  = resolveSubjectId(rawId);
  const aliasNote    = rawId !== canonicalId ? ` (alias: '${rawId}'→'${canonicalId}')` : '';
  const filePrefix   = resolveFilePrefix(canonicalId);
  const prefixNote   = filePrefix !== canonicalId ? ` [file prefix: '${filePrefix}']` : '';

  const inNewFormat    = newFormatKeys.has(canonicalId);
  const inExplorerData = explorerKeys.has(canonicalId);
  const hasIdBranch    = idBranches.has(canonicalId);
  const hasScreenFile  = screenFileExists(canonicalId, 1);

  if (!inNewFormat) {
    // Not enrolled in new format — routes to old LessonPlayer (expected for unbuilt subjects)
    console.log(`ℹ️   ${label}: rawId='${rawId}'→canonical='${canonicalId}' → old LessonPlayer (not yet built)`);
    oldCount++;
    continue;
  }

  // Subject IS in NEW_FORMAT_LESSONS — check the rest of the routing chain
  const routingIssues = [];
  if (!inExplorerData) routingIssues.push(`missing from EXPLORER_DATA (key='${canonicalId}')`);
  if (!hasIdBranch)    routingIssues.push(`no getExplorerLessonId branch for '${canonicalId}'`);

  if (routingIssues.length > 0) {
    // Routing key mismatch — hard failure
    console.log(`❌  ${label}: rawId='${rawId}'→canonical='${canonicalId}' — ROUTING BROKEN`);
    for (const issue of routingIssues) console.log(`      • ${issue}`);
    failCount++;
    failures.push({ label, rawId, canonicalId, issues: routingIssues });
  } else if (!hasScreenFile) {
    // Routing wired correctly but content not yet built — warning
    const msg = `screen file not found: ${filePrefix}_explorer_l01_screens.js`;
    console.log(`⚠️   ${label}: rawId='${rawId}'→canonical='${canonicalId}'${aliasNote} — routing OK, content pending`);
    console.log(`      ⚠  ${msg}`);
    warnCount++;
    warnings.push({ label, canonicalId, issues: [msg] });
  } else {
    console.log(`✅  ${label}: rawId='${rawId}'→canonical='${canonicalId}'${aliasNote}${prefixNote} → ExplorerLessonPlayer`);
    passCount++;
  }
}

console.log(`\n=== Summary ===`);
console.log(`Passed: ${passCount} | Warnings (content pending): ${warnCount} | Old format: ${oldCount} | Failed: ${failCount}`);

if (warnCount > 0) {
  console.log('\nWarnings (routing wired, screen files not yet created):');
  for (const { label, issues } of warnings) {
    console.log(`  ⚠  ${label}: ${issues.join(', ')}`);
  }
}

if (failCount > 0) {
  console.log('\nRouting failures (key mismatches — must fix):');
  for (const { label, issues } of failures) {
    console.log(`  ❌  ${label}: ${issues.join(', ')}`);
  }
  process.exit(1);
} else {
  console.log('\nNo routing key mismatches detected. ✅');
  process.exit(0);
}
