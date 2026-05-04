#!/usr/bin/env node
/**
 * validate-explorer-screens.mjs
 *
 * Build-time guardrail: asserts that every screen in every SL/LW/CA Explorer
 * lesson file matches the engine contract. Exits 1 if any violation is found.
 *
 * Add to package.json scripts:
 *   "validate": "node scripts/validate-explorer-screens.mjs"
 *
 * Or run before a build:
 *   "prebuild": "node scripts/validate-explorer-screens.mjs"
 */

import fs   from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DATA_DIR  = path.join(__dirname, '../src/data');

// Auto-discover every *_explorer_l*_screens.js file — covers all current and
// future subjects without manual maintenance.
const ALL_FILES = fs
  .readdirSync(DATA_DIR)
  .filter(f => /^.+_explorer_l\d+_screens\.js$/.test(f))
  .sort();

// ── Rules per screen type ─────────────────────────────────────────────────────

const RULES = {
  welcome: {
    required: ['guideText'],
    forbidden: [],
  },
  magazine: {
    required: ['headline', 'paragraphs', 'image', 'imageCaption'],
    forbidden: ['content'],   // old nested wrapper must not exist
    checks: [
      s => Array.isArray(s.paragraphs) || `paragraphs must be an array`,
      s => s.paragraphs.length > 0     || `paragraphs must be non-empty`,
    ],
  },
  interactive: {
    required: ['guideText', 'buckets', 'items'],
    forbidden: ['config'],    // old nested wrapper must not exist
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
    forbidden: ['content'],   // old nested wrapper must not exist
  },
  celebration: {
    required: ['message', 'badge', 'badgeName', 'xpEarned'],
    forbidden: ['content'],   // old nested wrapper must not exist
  },
};

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

// ── Validate ──────────────────────────────────────────────────────────────────

let totalErrors = 0;

for (const filename of ALL_FILES) {
  const filePath = path.join(DATA_DIR, filename);

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

      for (const field of (rule.required || [])) {
        if (screen[field] === undefined || screen[field] === null || screen[field] === '') {
          fileErrors.push(`${loc}: missing required field "${field}"`);
        }
      }

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
            if (typeof result === 'string') {
              fileErrors.push(`${loc}: ${result}`);
            }
          } catch (e) {
            fileErrors.push(`${loc}: check threw — ${e.message}`);
          }
        }
      }
    }
  }

  if (fileErrors.length > 0) {
    fileErrors.forEach(e => console.error(`✗  ${e}`));
    totalErrors += fileErrors.length;
  } else {
    console.log(`✓  ${filename}`);
  }
}

console.log(`\nValidation complete: ${ALL_FILES.length} files, ${totalErrors} error(s)`);
if (totalErrors > 0) process.exit(1);
