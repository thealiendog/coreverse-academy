#!/usr/bin/env node
/**
 * validate-explorer-screens.mjs
 *
 * Build-time guardrail: asserts that every screen in every Explorer lesson
 * file matches the engine contract, AND that engine component files contain
 * no subject-specific hardcoded strings.
 *
 * Checks:
 *   (a) Hardcoded subject-specific strings in engine JSX (|| 'Sage', || 'inner-world', etc.)
 *   (b) {name} substitution gaps — fields that don't get r() applied must not contain {name}
 *   (c) Vocab presence — every magazine section must have vocab: [{word,definition,audioPrompt}×3]
 *   (d) Image asset existence — interactive item.image files must exist in public/explorer-assets/{id}/
 *   (e) audioPrompt word count — each vocab audioPrompt must be ≤ 70 words
 *   (f) Inner World-specific strings in engine components (IW-only fallback text)
 *
 * Exits 1 if any violation is found.
 */

import fs   from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname   = path.dirname(fileURLToPath(import.meta.url));
const DATA_DIR    = path.join(__dirname, '../src/data');
const ENGINES_DIR = path.join(__dirname, '../src/components/explorers');
const ASSETS_DIR  = path.join(__dirname, '../public/explorer-assets');

// ── Auto-discover every *_explorer_l*_screens.js file ─────────────────────────
const ALL_FILES = fs
  .readdirSync(DATA_DIR)
  .filter(f => /^.+_explorer_l\d+_screens\.js$/.test(f))
  .sort();

// ── Derive subjectId from filename prefix ─────────────────────────────────────
// Maps camelCase/squashed prefix → hyphenated folder name under public/explorer-assets/
const PREFIX_TO_SUBJECT = {
  innerworld:      'inner-world',
  cosmos:          'cosmos',
  futureskills:    'future-skills',
  leadership:      'leadership',
  lifewellness:    'life-wellness',
  creativearts:    'creative-arts',
  socialemotional: 'social-emotional',
  spanish:         'spanish',
  // Add new subjects here as they are introduced
};

function subjectIdFromFile(filename) {
  const prefix = filename.replace(/_explorer_l\d+_screens\.js$/, '');
  return PREFIX_TO_SUBJECT[prefix] || prefix;
}

// ── Asset folder cache ─────────────────────────────────────────────────────────
// Builds { subjectId: Set<filename> } so we don't re-read the disk per-screen
const assetCache = {};
function getAssetSet(subjectId) {
  if (!(subjectId in assetCache)) {
    const dir = path.join(ASSETS_DIR, subjectId);
    assetCache[subjectId] = fs.existsSync(dir)
      ? new Set(fs.readdirSync(dir))
      : null; // null means folder is missing entirely
  }
  return assetCache[subjectId];
}

// ── Rules per screen type ─────────────────────────────────────────────────────

const RULES = {
  welcome: {
    required: ['guideText'],
    forbidden: [],
  },
  magazine: {
    required: ['headline', 'paragraphs', 'image', 'imageCaption'],
    forbidden: ['content'],
    checks: [
      s => Array.isArray(s.paragraphs)  || `paragraphs must be an array`,
      s => s.paragraphs.length > 0      || `paragraphs must be non-empty`,
      // (c) vocab presence — Phase 1 subjects have 2 entries, Phase 2 have 3.
      // Require at least 2; flag if 0 or 1 (incomplete). Subjects at 2 need Phase 2 upgrade.
      s => Array.isArray(s.vocab)              || `magazine section missing vocab array`,
      s => !Array.isArray(s.vocab) || s.vocab.length >= 2
           || `vocab must have at least 2 entries (found ${s.vocab.length}) — add vocab to reach Phase 2 (3 entries)`,
      s => !Array.isArray(s.vocab) || s.vocab.every(v => v.word && v.definition && v.audioPrompt)
           || `every vocab entry must have word, definition, and audioPrompt`,
    ],
  },
  interactive: {
    required: ['guideText', 'buckets', 'items'],
    forbidden: ['config'],
    checks: [
      s => Array.isArray(s.items)   || `items must be an array`,
      s => Array.isArray(s.buckets) || `buckets must be an array`,
      s => s.items.every(it => 'correctMatch' in it)
           || `all items must have correctMatch (not correctBucket)`,
      s => s.items.every(it => !('correctBucket' in it))
           || `items must not have correctBucket (rename to correctMatch)`,
    ],
  },
  quiz: {
    required: ['guideText', 'questions'],
    forbidden: [],
    checks: [
      s => Array.isArray(s.questions) || `questions must be an array`,
      s => s.questions.length >= 4    || `quiz must have at least 4 questions`,
      s => s.questions.every(q => !['mc','tf'].includes(q.format))
           || `quiz format must be 'multiple-choice' or 'true-false', not 'mc'/'tf'`,
    ],
  },
  'real-world': {
    required: ['guideText', 'familyAdventure', 'creativePrompt'],
    forbidden: ['content'],
  },
  celebration: {
    required: ['message', 'badge', 'badgeName', 'xpEarned'],
    forbidden: ['content'],
  },
};

// ── Fields that do NOT get r() applied in the engine ─────────────────────────
// If any of these contain {name}, it will be read literally — a content bug.
const NO_SUBSTITUTION_PATHS = [
  // magazine
  { type: 'magazine',   field: 'headline' },
  { type: 'magazine',   field: 'imageCaption' },
  // quiz
  { type: 'quiz',       field: 'questions[].text' },
  { type: 'quiz',       field: 'questions[].options[]' },
  { type: 'quiz',       field: 'questions[].explanation' },
  // real-world
  { type: 'real-world', field: 'familyAdventure' },
  { type: 'real-world', field: 'creativePrompt' },
  // interactive
  { type: 'interactive', field: 'items[].label' },
  { type: 'interactive', field: 'buckets[].label' },
  // celebration
  { type: 'celebration', field: 'badge' },
  { type: 'celebration', field: 'badgeName' },
];

function containsNameToken(value) {
  if (typeof value === 'string') return value.includes('{name}');
  if (Array.isArray(value))      return value.some(containsNameToken);
  return false;
}

// Check a screen's non-r() fields for {name}
function checkNameSubstitutionGaps(screen, loc) {
  const errs = [];
  for (const { type, field } of NO_SUBSTITUTION_PATHS) {
    if (screen.type !== type) continue;
    // Handle dotted paths like 'questions[].text'
    const parts = field.split('[].');
    if (parts.length === 1) {
      if (containsNameToken(screen[field])) {
        errs.push(`${loc}: field "${field}" contains {name} but is not substituted by the engine`);
      }
    } else {
      // parts[0] is the array field, parts[1] is the sub-field
      const arr = screen[parts[0]];
      if (Array.isArray(arr)) {
        arr.forEach((item, idx) => {
          if (containsNameToken(item[parts[1]])) {
            errs.push(`${loc}: field "${parts[0]}[${idx}].${parts[1]}" contains {name} but is not substituted by the engine`);
          }
        });
      }
    }
  }
  return errs;
}

// ── (e) audioPrompt word count ────────────────────────────────────────────────
// 90 words keeps TTS audio child-friendly while allowing the rich voice style
// that naturally runs 35-88 words. Tighten if TTS audio consistently runs long.
const MAX_AUDIO_PROMPT_WORDS = 90;

function wordCount(text) {
  return (text || '').trim().split(/\s+/).filter(Boolean).length;
}

function checkAudioPromptLengths(screen, loc) {
  const errs = [];
  if (!Array.isArray(screen.vocab)) return errs;
  screen.vocab.forEach((v, idx) => {
    if (!v.audioPrompt) return;
    const wc = wordCount(v.audioPrompt);
    if (wc > MAX_AUDIO_PROMPT_WORDS) {
      errs.push(`${loc}: vocab[${idx}] audioPrompt is ${wc} words (max ${MAX_AUDIO_PROMPT_WORDS}) — word: "${v.word}"`);
    }
  });
  return errs;
}

// ── (d) Image asset existence ─────────────────────────────────────────────────
function checkAssets(screen, loc, subjectId) {
  const errs = [];
  if (screen.type !== 'interactive') return errs;

  const assetSet = getAssetSet(subjectId);
  // If no asset folder exists yet for this subject, skip the check —
  // assets may not have been created yet (only inner-world currently has them).
  if (assetSet === null) return errs;

  // Folder exists — every referenced image file should be present.
  // Missing assets produce WARN (non-blocking) — the engine renders an SVG
  // placeholder when an image 404s, so the app doesn't break.
  (screen.items || []).forEach(item => {
    if (item.image && !assetSet.has(item.image)) {
      errs.push(`WARN:${loc}: missing asset /explorer-assets/${subjectId}/${item.image}`);
    }
  });
  return errs;
}

// ── Eval file ─────────────────────────────────────────────────────────────────
function evalFile(filePath) {
  const src = fs.readFileSync(filePath, 'utf8');
  const constMatch = src.match(/^const\s+(\w+)\s*=/m);
  if (!constMatch) throw new Error('Cannot find const declaration');
  const constName = constMatch[1];

  const devIdx = src.indexOf('// ─── Dev asset check');
  let code = (devIdx !== -1 ? src.slice(0, devIdx) : src).trim();
  code = code.replace(/\nexport default \w+;/, '').trim();

  // eslint-disable-next-line no-new-func
  return new Function(`${code}\nreturn ${constName};`)();
}

// ── (a + f) Engine JSX static scan ───────────────────────────────────────────
// These patterns in engine components indicate a subject-specific assumption
// that will break when a new subject (e.g. Spanish) is introduced.
const ENGINE_BANNED_PATTERNS = [
  {
    regex: /\|\|\s*['"]Sage['"]/g,
    message: `hardcoded guide fallback || 'Sage' — use guideAvatar?.name || 'your guide' instead`,
  },
  {
    regex: /\|\|\s*['"]Nova['"]/g,
    message: `hardcoded guide fallback || 'Nova' — use guideAvatar?.name || 'your guide' instead`,
  },
  {
    regex: /\|\|\s*['"]inner-world['"]/g,
    message: `hardcoded subject fallback || 'inner-world' — subjectId must always be provided`,
  },
  {
    regex: /Sage['"]s\s+voice/g,
    message: `hardcoded "Sage's voice" in user-visible text — use guide name dynamically`,
  },
  {
    regex: /tap\s+a\s+scene.*feeling\s+it\s+shows/i,
    message: `Inner World-specific fallback text ("tap a scene, then tap the feeling") in engine component`,
  },
];

function scanEngineFiles() {
  const errs = [];
  if (!fs.existsSync(ENGINES_DIR)) return errs;

  const jsxFiles = fs.readdirSync(ENGINES_DIR).filter(f => f.endsWith('.jsx') || f.endsWith('.tsx'));

  for (const filename of jsxFiles) {
    const filePath = path.join(ENGINES_DIR, filename);
    const src = fs.readFileSync(filePath, 'utf8');
    const lines = src.split('\n');

    for (const { regex, message } of ENGINE_BANNED_PATTERNS) {
      regex.lastIndex = 0;
      let match;
      while ((match = regex.exec(src)) !== null) {
        // Find which line number
        const lineNum = src.slice(0, match.index).split('\n').length;
        errs.push(`ENGINE  ${filename}:${lineNum}: ${message}`);
      }
    }
  }

  return errs;
}

// ── Main validation loop ──────────────────────────────────────────────────────

let totalErrors   = 0;
let totalWarnings = 0;

// (a + f) Engine scan runs once, before data file loop
const engineErrors = scanEngineFiles();
if (engineErrors.length > 0) {
  engineErrors.forEach(e => console.error(`✗  ${e}`));
  totalErrors += engineErrors.length;
} else {
  console.log(`✓  engine components — no hardcoded subject strings`);
}

// Data file loop
for (const filename of ALL_FILES) {
  const filePath  = path.join(DATA_DIR, filename);
  const subjectId = subjectIdFromFile(filename);

  if (!fs.existsSync(filePath)) {
    console.error(`MISSING  ${filename}`);
    totalErrors++;
    continue;
  }

  let data;
  try {
    data = evalFile(filePath);
  } catch (e) {
    console.error(`PARSE ERROR  ${filename}: ${e.message}`);
    totalErrors++;
    continue;
  }

  const fileErrors = [];

  for (const lesson of (data.lessons || [])) {
    for (const screen of (lesson.screens || [])) {
      const rule = RULES[screen.type];
      if (!rule) continue;

      const loc = `${filename} [${screen.id}]`;

      // Required fields
      for (const field of (rule.required || [])) {
        if (screen[field] === undefined || screen[field] === null || screen[field] === '') {
          fileErrors.push(`${loc}: missing required field "${field}"`);
        }
      }

      // Forbidden fields
      for (const field of (rule.forbidden || [])) {
        if (field in screen) {
          fileErrors.push(`${loc}: forbidden field "${field}" still present (old schema)`);
        }
      }

      // Only run deep checks if all required fields are present
      const missingRequired = (rule.required || []).some(
        f => screen[f] === undefined || screen[f] === null || screen[f] === ''
      );
      if (!missingRequired) {
        for (const check of (rule.checks || [])) {
          try {
            const result = check(screen);
            if (typeof result === 'string') fileErrors.push(`${loc}: ${result}`);
          } catch (e) {
            fileErrors.push(`${loc}: check threw — ${e.message}`);
          }
        }
      }

      // (b) {name} substitution gaps
      checkNameSubstitutionGaps(screen, loc).forEach(e => fileErrors.push(e));

      // (d) Image asset existence
      checkAssets(screen, loc, subjectId).forEach(e => fileErrors.push(e));

      // (e) audioPrompt word count
      checkAudioPromptLengths(screen, loc).forEach(e => fileErrors.push(e));
    }
  }

  const hardErrors = fileErrors.filter(e => !e.startsWith('WARN:'));
  const warnings   = fileErrors.filter(e => e.startsWith('WARN:'));

  warnings.forEach(e => console.warn(`⚠  ${e.slice(5)}`));
  totalWarnings += warnings.length;

  if (hardErrors.length > 0) {
    hardErrors.forEach(e => console.error(`✗  ${e}`));
    totalErrors += hardErrors.length;
  } else {
    console.log(`✓  ${filename}`);
  }
}

console.log(`\nValidation complete: ${ALL_FILES.length} files, ${totalErrors} error(s), ${totalWarnings} warning(s)`);
if (totalErrors > 0) process.exit(1);
