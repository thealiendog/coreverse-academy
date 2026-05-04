#!/usr/bin/env node
/**
 * migrate-sl-lw-ca-screens.mjs
 *
 * Migrates all 60 SL / LW / CA Explorer screen data files from the
 * draft schema to the engine contract.
 *
 * Idempotent: screens that are already in the correct shape are written back
 * without modification.
 *
 * Usage:
 *   node scripts/migrate-sl-lw-ca-screens.mjs [--dry-run]
 *
 * What it does per file:
 *   magazine    — unwraps content:{heading,body,image,caption}
 *                 → flat {headline, paragraphs[], image, imageCaption}
 *   interactive — lifts config:{buckets,items} to flat, renames
 *                 item.correctBucket → item.correctMatch, adds guideText
 *   quiz        — renames format: 'mc' → 'multiple-choice',
 *                              'tf' → 'true-false', adds guideText
 *   real-world  — unwraps content:{description,familyAdventure,realWorldConnection}
 *                 → flat {guideText, familyAdventure, creativePrompt}
 *   celebration — unwraps content:{message} → flat {message},
 *                 hoists badge/badgeName/xpEarned from lesson level
 */

import fs   from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { createRequire } from 'module';

const require    = createRequire(import.meta.url);
const __dirname  = path.dirname(fileURLToPath(import.meta.url));
const DATA_DIR   = path.join(__dirname, '../src/data');
const DRY_RUN    = process.argv.includes('--dry-run');

// ── File lists ────────────────────────────────────────────────────────────────

const SL_FILES = Array.from({length: 20}, (_, i) =>
  `socialleadership_explorer_l${String(i+1).padStart(2,'0')}_screens.js`);
const LW_FILES = Array.from({length: 20}, (_, i) =>
  `lifewellness_explorer_l${String(i+1).padStart(2,'0')}_screens.js`);
const CA_FILES = Array.from({length: 20}, (_, i) =>
  `creativearts_explorer_l${String(i+1).padStart(2,'0')}_screens.js`);
// FutureSkills L17-L20 were authored in the same draft schema
const FS_FILES = [17,18,19,20].map(i =>
  `futureskills_explorer_l${String(i).padStart(2,'0')}_screens.js`);

const ALL_FILES = [...SL_FILES, ...LW_FILES, ...CA_FILES, ...FS_FILES];

// ── Screen migrators ──────────────────────────────────────────────────────────

function migrateMagazine(screen) {
  if (!screen.content) return screen;   // already migrated
  const c = screen.content;
  const paragraphs = (c.body || '')
    .split(/\n\n+/)
    .map(p => p.trim())
    .filter(Boolean);
  const out = {
    id:           screen.id,
    type:         'magazine',
    section:      screen.section,
    headline:     c.heading   || '',
    paragraphs,
    image:        c.image     || '',
    imageCaption: c.caption   || '',
  };
  if (screen.totalSections !== undefined) out.totalSections = screen.totalSections;
  if (screen.vocab)                       out.vocab         = screen.vocab;
  return out;
}

function migrateInteractive(screen) {
  const alreadyMigrated = !screen.config;
  const source  = alreadyMigrated ? screen : screen.config;
  const rawItems   = source.items   || [];
  const rawBuckets = source.buckets || [];

  const items = rawItems.map(item => {
    const out = { ...item };
    if ('correctBucket' in out) {
      out.correctMatch = out.correctBucket;
      delete out.correctBucket;
    }
    return out;
  });

  const guideText = screen.guideText ||
    `Alright, {name} — time to put what you've learned to the test. ` +
    `Look at each scene and match it to where it belongs. Take your time — you've got this.`;

  return {
    id:        screen.id,
    type:      'interactive',
    format:    screen.format || 'drag-match',
    guideText,
    buckets:   rawBuckets,
    items,
  };
}

function migrateQuiz(screen) {
  const FORMAT_MAP = {
    'mc':              'multiple-choice',
    'tf':              'true-false',
    'fill-blank':      'fill-blank',
    'multiple-choice': 'multiple-choice',
    'true-false':      'true-false',
  };
  const questions = (screen.questions || []).map(q => ({
    ...q,
    format: FORMAT_MAP[q.format] || q.format,
  }));
  const guideText = screen.guideText ||
    `Let's see how much you remember, {name}. Answer each question and I'll tell you how you did.`;
  return {
    id:        screen.id,
    type:      'quiz',
    guideText,
    questions,
  };
}

function migrateRealWorld(screen) {
  if (!screen.content) return screen;   // already migrated
  const c = screen.content;
  return {
    id:              screen.id,
    type:            'real-world',
    guideText:       c.realWorldConnection || '',
    familyAdventure: c.familyAdventure     || '',
    creativePrompt:  c.description         || '',
  };
}

function migrateCelebration(screen, lesson) {
  const message = screen.content
    ? screen.content.message
    : (screen.message || '');
  return {
    id:        screen.id,
    type:      'celebration',
    message,
    badge:     screen.badge     || lesson?.badge     || '',
    badgeName: screen.badgeName || lesson?.badgeName || '',
    xpEarned:  screen.xpEarned  || lesson?.xpReward  || 50,
  };
}

function migrateLesson(lesson) {
  const screens = lesson.screens.map(screen => {
    switch (screen.type) {
      case 'welcome':     return screen;
      case 'magazine':    return migrateMagazine(screen);
      case 'interactive': return migrateInteractive(screen);
      case 'quiz':        return migrateQuiz(screen);
      case 'real-world':  return migrateRealWorld(screen);
      case 'celebration': return migrateCelebration(screen, lesson);
      default:            return screen;
    }
  });
  return { ...lesson, screens };
}

// ── Eval file data ────────────────────────────────────────────────────────────

function evalFileData(filePath) {
  const src = fs.readFileSync(filePath, 'utf8');

  const constMatch = src.match(/^const\s+(\w+)\s*=/m);
  if (!constMatch) throw new Error('Cannot find const declaration');
  const constName = constMatch[1];

  // Slice off the dev block and export statement safely
  const devIdx = src.indexOf('// ─── Dev asset check');
  let code = (devIdx !== -1 ? src.slice(0, devIdx) : src).trim();
  code = code.replace(/\nexport default \w+;/, '').trim();

  // eslint-disable-next-line no-new-func
  const data = new Function(`${code}\nreturn ${constName};`)();
  if (!data || !data.lessons) throw new Error(`Eval returned invalid data (constName=${constName})`);

  return { constName, data, src };
}

// ── JS value serialiser ───────────────────────────────────────────────────────

function jsString(str) {
  // Use backticks for all strings (consistent with data file style)
  // Escape backticks and ${} inside
  const escaped = str
    .replace(/\\/g, '\\\\')
    .replace(/`/g, '\\`')
    .replace(/\$\{/g, '\\${');
  return '`' + escaped + '`';
}

function jsVal(val, depth = 0) {
  const pad  = '  '.repeat(depth);
  const pad1 = '  '.repeat(depth + 1);

  if (val === null || val === undefined) return String(val);
  if (typeof val === 'boolean') return String(val);
  if (typeof val === 'number')  return String(val);
  if (typeof val === 'string')  return jsString(val);

  if (Array.isArray(val)) {
    if (val.length === 0) return '[]';
    const items = val.map(v => `${pad1}${jsVal(v, depth + 1)}`).join(',\n');
    return `[\n${items},\n${pad}]`;
  }

  if (typeof val === 'object') {
    const entries = Object.entries(val)
      .map(([k, v]) => `${pad1}${k}: ${jsVal(v, depth + 1)}`)
      .join(',\n');
    return `{\n${entries},\n${pad}}`;
  }

  return JSON.stringify(val);
}

// ── Full file reconstructor ───────────────────────────────────────────────────

function buildFileSource(constName, data, originalSrc) {
  // Preserve original header comment
  const headerMatch = originalSrc.match(/^((?:\/\/[^\n]*\n)+)/);
  const header      = headerMatch ? headerMatch[1].trimEnd() : '';

  // Preserve dev asset check block
  const devIdx  = originalSrc.indexOf('// ─── Dev asset check');
  const devBlock = devIdx !== -1 ? originalSrc.slice(devIdx).trim() : '';

  // Build lessons source
  const lesson = data.lessons[0]; // all files have exactly one lesson
  const screensSrc = lesson.screens
    .map(s => '        ' + jsVal(s, 4))
    .join(',\n\n');

  const src = `${header}

const ${constName} = {
  ageBand:   ${jsString(data.ageBand)},
  subjectId: ${jsString(data.subjectId)},
  guide:     ${jsString(data.guide)},

  lessons: [
    {
      id:        ${jsString(lesson.id)},
      title:     ${jsString(lesson.title)},
      duration:  ${lesson.duration},
      xpReward:  ${lesson.xpReward},
      badge:     ${jsString(lesson.badge)},
      badgeName: ${jsString(lesson.badgeName)},

      screens: [

${screensSrc},

      ], // screens
    },
  ], // lessons
};

export default ${constName};

${devBlock}`;

  return src.trim() + '\n';
}

// ── Main ──────────────────────────────────────────────────────────────────────

let passed = 0;
let failed = 0;

for (const filename of ALL_FILES) {
  const filePath = path.join(DATA_DIR, filename);

  if (!fs.existsSync(filePath)) {
    console.error(`MISSING  ${filename}`);
    failed++;
    continue;
  }

  try {
    const { constName, data, src } = evalFileData(filePath);
    const migratedData  = { ...data, lessons: data.lessons.map(migrateLesson) };
    const newSrc        = buildFileSource(constName, migratedData, src);

    if (!DRY_RUN) {
      fs.writeFileSync(filePath, newSrc, 'utf8');
    } else {
      // In dry-run, print the first migrated lesson's screen types as a sanity check
      const types = migratedData.lessons[0].screens.map(s => s.type);
      console.log(`[DRY] ${filename} — screens: ${types.join(', ')}`);
    }
    console.log(`✓  ${filename}`);
    passed++;
  } catch (e) {
    console.error(`✗  ${filename} — ${e.message}`);
    failed++;
  }
}

console.log(`\n${DRY_RUN ? '[DRY RUN] ' : ''}Migration complete: ${passed} passed, ${failed} failed`);
if (failed > 0) process.exit(1);
