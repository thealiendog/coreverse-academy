/**
 * find_missing_prompts.mjs
 *
 * Outputs a JSON array of every image that has no Midjourney prompt block.
 * Each entry has full context for prompt authoring.
 *
 * Run: node scripts/find_missing_prompts.mjs > /tmp/missing_prompts.json
 */

import { readFileSync, existsSync } from 'fs';

const ROOT        = new URL('..', import.meta.url).pathname.replace(/\/$/, '');
const DATA_DIR    = `${ROOT}/src/data`;
const PROMPTS_DIR = `${ROOT}/docs/image-prompts`;

// ── Guide data (from constants.js) ──────────────────────────────────────────
const GUIDE_DATA = {
  'inner-world':    { guide: 'Sage',  guide_animal: 'Deer'      },
  'cosmos':         { guide: 'Nova',  guide_animal: 'Owl'       },
  'history':        { guide: 'Lyra',  guide_animal: 'Elephant'  },
  'future-skills':  { guide: 'Byte',  guide_animal: 'Fox'       },
  'money':          { guide: 'Ace',   guide_animal: 'Eagle'     },
  'creative-arts':  { guide: 'Muse',  guide_animal: 'Butterfly' },
  'wellness':       { guide: 'Terra', guide_animal: 'Wolf'      },
  'leadership':     { guide: 'Valor', guide_animal: 'Lion'      },
  'languages':      { guide: 'Luna',  guide_animal: 'Parrot'    },
  'math':           { guide: 'Remi',  guide_animal: 'Raccoon'   },
  'ela':            { guide: 'Quill', guide_animal: 'Porcupine' },
  'science':        { guide: 'Cosmo', guide_animal: 'Otter'     },
  'social_studies': { guide: 'Atlas', guide_animal: 'Bear'      },
};

// ── Subject config ──────────────────────────────────────────────────────────
const SUBJECTS = [
  { filePrefix: 'innerworld',       subjectId: 'inner-world',    name: 'Inner World',    promptPrefix: 'iw',             lessonStart: 2  },
  { filePrefix: 'cosmos',           subjectId: 'cosmos',         name: 'Cosmos',         promptPrefix: 'cosmos',         lessonStart: 1  },
  { filePrefix: 'historyworld',     subjectId: 'history',        name: 'History',        promptPrefix: 'historyworld',   lessonStart: 1  },
  { filePrefix: 'futureskills',     subjectId: 'future-skills',  name: 'Future Skills',  promptPrefix: 'futureskills',   lessonStart: 1  },
  { filePrefix: 'moneybusiness',    subjectId: 'money',          name: 'Money',          promptPrefix: 'money',          lessonStart: 1  },
  { filePrefix: 'creativearts',     subjectId: 'creative-arts',  name: 'Creative Arts',  promptPrefix: 'creativearts',   lessonStart: 1  },
  { filePrefix: 'lifewellness',     subjectId: 'wellness',       name: 'Wellness',       promptPrefix: 'wellness',       lessonStart: 1  },
  { filePrefix: 'socialleadership', subjectId: 'leadership',     name: 'Leadership',     promptPrefix: 'leadership',     lessonStart: 1  },
  { filePrefix: 'spanish',          subjectId: 'languages',      name: 'Spanish',        promptPrefix: null,             lessonStart: 1  },
  { filePrefix: 'math',             subjectId: 'math',           name: 'Math',           promptPrefix: 'math',           lessonStart: 1  },
  { filePrefix: 'ela',              subjectId: 'ela',            name: 'ELA',            promptPrefix: 'ela',            lessonStart: 1  },
  { filePrefix: 'science',          subjectId: 'science',        name: 'Science',        promptPrefix: 'science',        lessonStart: 1  },
  { filePrefix: 'social_studies',   subjectId: 'social_studies', name: 'Social Studies', promptPrefix: 'social-studies', lessonStart: 1  },
];

// ── Prompt coverage: Set of filenames covered by one MD file ────────────────
function coveredBy(mdPath) {
  const s = new Set();
  if (!existsSync(mdPath)) return s;
  const re = /^###\s+(\S+\.(?:webp|png))/gm;
  let m;
  const text = readFileSync(mdPath, 'utf8');
  while ((m = re.exec(text)) !== null) {
    const fn  = m[1];
    const alt = fn.endsWith('.webp') ? fn.slice(0,-5)+'.png' : fn.slice(0,-4)+'.webp';
    s.add(fn); s.add(alt);
  }
  return s;
}

function isCovered(filename, covered) {
  if (covered.has(filename)) return true;
  const alt = filename.endsWith('.webp') ? filename.slice(0,-5)+'.png' : filename.slice(0,-4)+'.webp';
  return covered.has(alt);
}

// ── String extraction helpers (quote-aware, no apostrophe truncation) ────────
function qs(field) {
  // Returns a regex matching: field: "...", field: `...`, or field: '...'
  // Returns groups: [full, value] for each quote style
  return [
    new RegExp(`${field}\\s*:\\s*"([^"\\n]+)"`),
    new RegExp(`${field}\\s*:\\s*\`([^\`\\n]+)\``),
    new RegExp(`${field}\\s*:\\s*'([^'\\n]+)'`),
  ];
}

function extract(text, field) {
  for (const re of qs(field)) {
    const m = re.exec(text);
    if (m) return m[1].trim();
  }
  return '';
}

// ── Parse bucket labels from the interactive screen ─────────────────────────
function parseBuckets(src) {
  // Returns { bucketId -> bucketLabel }
  const result = {};
  const re = /\{\s*id\s*:\s*['"`]([^'"`]+)['"`]\s*,\s*label\s*:\s*['"`]([^'"`]+)['"`]/g;
  let m;
  while ((m = re.exec(src)) !== null) {
    result[m[1]] = m[2];
  }
  return result;
}

// ── Parse lesson title and guide name from screen file ──────────────────────
function parseMeta(src) {
  const title = extract(src, 'title');
  const guide = extract(src, 'guide');
  return { title, guide };
}

// ── Classify by filename pattern ─────────────────────────────────────────────
function classify(filename) {
  if (/l\d+-welcome\.(webp|png)$/i.test(filename))  return 'welcome';
  if (/l\d+-s\d+-.+\.(webp|png)$/i.test(filename))  return 'magazine';
  if (/l\d+-game.+\.(webp|png)$/i.test(filename))   return 'game';
  return 'other';
}

// ── Extract all images from one screen file ──────────────────────────────────
function extractImages(src, subjectId) {
  const images = [];
  const seen   = new Set();
  const buckets = parseBuckets(src);

  // ── Welcome images: visual: '...' ─────────────────────────────────────
  const welcomeRe = /visual\s*:\s*['"`](\/[^'"`\n]+)['"`]/g;
  let m;
  while ((m = welcomeRe.exec(src)) !== null) {
    const filename = m[1].split('/').pop();
    if (seen.has(filename)) continue;
    seen.add(filename);

    const win      = src.slice(Math.max(0, m.index - 1000), m.index + 500);
    const headline = extract(win, 'headline');
    const subtitle = extract(win, 'subtitle');
    images.push({ filename, type: 'welcome', context: { headline, subtitle } });
  }

  // ── Magazine images: image: '/explorer-assets/...' ────────────────────
  const magRe = /image\s*:\s*['"`](\/(?:explorer-assets|game-assets)\/[^'"`\n]+)['"`]/g;
  while ((m = magRe.exec(src)) !== null) {
    const filename = m[1].split('/').pop();
    const imgType  = classify(filename);
    if (imgType === 'welcome') continue;
    if (seen.has(filename)) continue;
    seen.add(filename);

    const win      = src.slice(Math.max(0, m.index - 600), m.index + 800);
    const section_headline = extract(win, 'headline');
    const image_caption    = extract(win, 'imageCaption');
    images.push({ filename, type: imgType, context: { section_headline, image_caption } });
  }

  // ── Bare game item images: image: 'l##-game-x.ext' (no leading /) ────
  // Capture the full item object span to extract all fields reliably
  const bareRe = /\{\s*(?:id\s*:[^,]+,\s*)?image\s*:\s*['"`]([^'"`\/\n][^'"`\n]*\.(?:webp|png))['"`]/g;
  while ((m = bareRe.exec(src)) !== null) {
    const filename = m[1];
    if (seen.has(filename)) continue;
    seen.add(filename);

    // Grab the full item object (from opening { to closing })
    const win        = src.slice(m.index, Math.min(src.length, m.index + 600));
    const label       = extract(win, 'label');
    const match_phrase = extract(win, 'matchPhrase');
    const correctMatch = extract(win, 'correctMatch');
    const bucket_label = buckets[correctMatch] || correctMatch || '';

    // Infer fact_or_myth from bucket label or correctMatch value
    const lcBucket = bucket_label.toLowerCase();
    const lcMatch  = correctMatch.toLowerCase();
    let fact_or_myth = '';
    if (lcBucket.includes('fact') || lcMatch === 'fact')   fact_or_myth = 'fact';
    else if (lcBucket.includes('myth') || lcMatch === 'myth') fact_or_myth = 'myth';
    else fact_or_myth = bucket_label || correctMatch; // e.g. "Worry Thought", "Real Feeling"

    images.push({ filename, type: 'game', context: { label, match_phrase, fact_or_myth } });
  }

  return images;
}

// ── Main ─────────────────────────────────────────────────────────────────────
const results = [];

for (const subj of SUBJECTS) {
  const { filePrefix, subjectId, name, promptPrefix, lessonStart } = subj;
  const { guide, guide_animal } = GUIDE_DATA[subjectId] || {};

  const promptMdBase = promptPrefix
    ? `${PROMPTS_DIR}/${promptPrefix}-l`
    : null;

  for (let ln = lessonStart; ln <= 20; ln++) {
    const pad        = String(ln).padStart(2, '0');
    const screenFile = `${DATA_DIR}/${filePrefix}_explorer_l${pad}_screens.js`;
    if (!existsSync(screenFile)) continue;

    const src    = readFileSync(screenFile, 'utf8');
    const meta   = parseMeta(src);

    const mdPath    = promptMdBase ? `${promptMdBase}${pad}-prompts.md` : null;
    const mdRelPath = mdPath ? mdPath.replace(ROOT + '/', '') : null;
    const mdExists  = mdPath ? existsSync(mdPath) : false;
    const covered   = mdPath ? coveredBy(mdPath) : new Set();

    const images = extractImages(src, subjectId);

    for (const img of images) {
      if (isCovered(img.filename, covered)) continue;

      results.push({
        subject:          name,
        subject_id:       subjectId,
        guide:            guide || meta.guide || '',
        guide_animal:     guide_animal || '',
        lesson_num:       pad,
        lesson_title:     meta.title || '',
        image_filename:   img.filename,
        image_type:       img.type,
        context:          img.context,
        prompt_md_path:   mdRelPath || `docs/image-prompts/${promptPrefix ?? subjectId}-l${pad}-prompts.md`,
        prompt_md_exists: mdExists,
      });
    }
  }
}

process.stdout.write(JSON.stringify(results, null, 2) + '\n');
process.stderr.write(`Total entries: ${results.length}\n`);
