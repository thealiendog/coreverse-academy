#!/usr/bin/env node
/**
 * smoke-test-subject.mjs
 *
 * For each screen in a subject, logs type + field values and renders a preview
 * HTML report saved as report-{subjectId}-smoke.html.
 *
 * Usage:
 *   node scripts/smoke-test-subject.mjs <subjectSlug>
 *
 * Examples:
 *   node scripts/smoke-test-subject.mjs creativearts
 *   node scripts/smoke-test-subject.mjs lifewellness
 *   node scripts/smoke-test-subject.mjs innerworld
 *
 * The report is written to /tmp/report-{subjectSlug}-smoke.html
 * Open it in a browser to visually inspect lesson content without running the app.
 */

import fs   from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DATA_DIR  = path.join(__dirname, '../src/data');

const subjectSlug = process.argv[2];
if (!subjectSlug) {
  console.error('Usage: node scripts/smoke-test-subject.mjs <subjectSlug>');
  console.error('Example: node scripts/smoke-test-subject.mjs creativearts');
  process.exit(1);
}

// ── Find all files for this subject ──────────────────────────────────────────
const files = fs
  .readdirSync(DATA_DIR)
  .filter(f => f.startsWith(`${subjectSlug}_explorer_`) && f.endsWith('_screens.js'))
  .sort();

if (files.length === 0) {
  console.error(`No files found for subject slug "${subjectSlug}"`);
  console.error(`Available slugs: ${fs.readdirSync(DATA_DIR)
    .filter(f => f.endsWith('_screens.js'))
    .map(f => f.replace(/_explorer_.*/, ''))
    .filter((v, i, a) => a.indexOf(v) === i)
    .join(', ')}`);
  process.exit(1);
}

console.log(`Smoke-testing ${files.length} lesson files for subject: ${subjectSlug}`);

// ── Eval helper ───────────────────────────────────────────────────────────────
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

// ── Collect all screens ───────────────────────────────────────────────────────
const allLessons = [];

for (const filename of files) {
  const filePath = path.join(DATA_DIR, filename);
  let data;
  try {
    data = evalFile(filePath);
  } catch (e) {
    console.error(`PARSE ERROR ${filename}: ${e.message}`);
    continue;
  }
  for (const lesson of (data.lessons || [])) {
    allLessons.push({ filename, lesson });
    // Console log summary
    console.log(`\n── ${lesson.id}: ${lesson.title}`);
    for (const screen of (lesson.screens || [])) {
      const details = [];
      if (screen.type === 'welcome')     details.push(`guideText: "${(screen.guideText || '').slice(0, 60)}..."`);
      if (screen.type === 'magazine')    details.push(`"${screen.headline}" | vocab: ${screen.vocab?.length ?? 0} entries`);
      if (screen.type === 'interactive') details.push(`${screen.items?.length ?? 0} items, ${screen.buckets?.length ?? 0} buckets`);
      if (screen.type === 'quiz')        details.push(`${screen.questions?.length ?? 0} questions`);
      if (screen.type === 'real-world')  details.push(`familyAdventure + creativePrompt`);
      if (screen.type === 'celebration') details.push(`badge: ${screen.badge}, xp: ${screen.xpEarned}`);
      console.log(`   [${screen.type.padEnd(12)}] ${screen.id} — ${details.join(' | ')}`);
    }
  }
}

// ── Build HTML report ─────────────────────────────────────────────────────────
function esc(str) {
  return String(str || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function renderVocab(vocab) {
  if (!Array.isArray(vocab)) return `<em style="color:#f87171">missing vocab array</em>`;
  return vocab.map(v => `
    <div style="margin:8px 0;padding:10px;background:#1e293b;border-radius:8px;border-left:3px solid #7c3aed">
      <div style="color:#a78bfa;font-weight:700;font-size:1rem">${esc(v.word)}</div>
      <div style="color:#94a3b8;font-size:0.85rem;margin:4px 0">${esc(v.definition)}</div>
      <div style="color:#cbd5e1;font-size:0.8rem;border-top:1px solid #334155;padding-top:6px;margin-top:6px">
        <em>🔊 ${esc(v.audioPrompt)}</em>
        <span style="margin-left:8px;color:${(v.audioPrompt || '').trim().split(/\s+/).filter(Boolean).length > 90 ? '#f87171' : '#64748b'};font-size:0.75rem">
          (${(v.audioPrompt || '').trim().split(/\s+/).filter(Boolean).length} words)
        </span>
      </div>
    </div>`).join('');
}

function renderScreen(screen) {
  let body = '';

  if (screen.type === 'welcome') {
    body = `<p><strong>guideText:</strong> ${esc(screen.guideText)}</p>`;
  }

  if (screen.type === 'magazine') {
    body = `
      <p><strong>Headline:</strong> ${esc(screen.headline)}</p>
      ${(screen.paragraphs || []).map(p => `<p style="color:#94a3b8">${esc(p)}</p>`).join('')}
      <p><strong>Image:</strong> <code>${esc(screen.image)}</code></p>
      <p><strong>Caption:</strong> ${esc(screen.imageCaption)}</p>
      <details open>
        <summary style="color:#7c3aed;cursor:pointer;font-weight:700">Vocab (${(screen.vocab || []).length} entries)</summary>
        ${renderVocab(screen.vocab)}
      </details>`;
  }

  if (screen.type === 'interactive') {
    const items = (screen.items || []).map(it =>
      `<li><strong>${esc(it.label)}</strong> → bucket: <code>${esc(it.correctMatch)}</code> ${it.image ? `| img: <code>${esc(it.image)}</code>` : '(no image)'}</li>`
    ).join('');
    const buckets = (screen.buckets || []).map(b =>
      `<li style="color:${esc(b.color)}">${esc(b.label)} (id: ${esc(b.id)})</li>`
    ).join('');
    body = `
      <p><strong>guideText:</strong> ${esc(screen.guideText)}</p>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-top:8px">
        <div><strong>Items (${(screen.items || []).length}):</strong><ul>${items}</ul></div>
        <div><strong>Buckets (${(screen.buckets || []).length}):</strong><ul>${buckets}</ul></div>
      </div>`;
  }

  if (screen.type === 'quiz') {
    const qs = (screen.questions || []).map((q, i) => `
      <div style="margin:8px 0;padding:8px;background:#1e293b;border-radius:6px">
        <div style="color:#60a5fa">Q${i + 1} [${esc(q.format)}]: ${esc(q.text)}</div>
        ${q.options ? `<ul style="color:#94a3b8;margin:4px 0">${q.options.map(o => `<li style="color:${o === q.answer ? '#34d399' : '#94a3b8'}">${esc(o)}</li>`).join('')}</ul>` : ''}
        <div style="color:#34d399">✓ ${esc(q.answer)}</div>
        ${q.explanation ? `<div style="color:#64748b;font-size:0.8rem">${esc(q.explanation)}</div>` : ''}
      </div>`).join('');
    body = `
      <p><strong>guideText:</strong> ${esc(screen.guideText)}</p>
      <p style="color:${(screen.questions || []).length >= 4 ? '#34d399' : '#f87171'}">${(screen.questions || []).length} questions</p>
      ${qs}`;
  }

  if (screen.type === 'real-world') {
    body = `
      <p><strong>guideText:</strong> ${esc(screen.guideText)}</p>
      <p><strong>Family Adventure:</strong> ${esc(screen.familyAdventure)}</p>
      <p><strong>Creative Prompt:</strong> ${esc(screen.creativePrompt)}</p>`;
  }

  if (screen.type === 'celebration') {
    body = `
      <p><strong>Message:</strong> ${esc(screen.message)}</p>
      <p><strong>Badge:</strong> ${esc(screen.badge)} — "${esc(screen.badgeName)}"</p>
      <p><strong>XP:</strong> +${esc(screen.xpEarned)}</p>`;
  }

  const typeColor = {
    welcome:     '#60a5fa',
    magazine:    '#a78bfa',
    interactive: '#34d399',
    quiz:        '#f59e0b',
    'real-world':'#f87171',
    celebration: '#fbbf24',
  }[screen.type] || '#94a3b8';

  return `
    <div style="background:#0f172a;border:1px solid #1e293b;border-radius:12px;padding:20px;margin:12px 0">
      <div style="display:flex;align-items:center;gap:10px;margin-bottom:12px">
        <span style="background:${typeColor}22;color:${typeColor};padding:4px 10px;border-radius:6px;font-size:0.8rem;font-weight:700;text-transform:uppercase">${esc(screen.type)}</span>
        <code style="color:#64748b">${esc(screen.id)}</code>
      </div>
      ${body}
    </div>`;
}

function renderLesson(filename, lesson) {
  const screens = (lesson.screens || []).map(renderScreen).join('');
  return `
    <section style="margin:32px 0;padding:24px;background:#0a0f1e;border-radius:16px;border:1px solid #1e293b">
      <h2 style="color:#f8fafc;margin:0 0 4px">${esc(lesson.id)}: ${esc(lesson.title)}</h2>
      <div style="color:#64748b;font-size:0.85rem;margin-bottom:20px">${esc(filename)}</div>
      ${screens}
    </section>`;
}

const lessonHtml = allLessons.map(({ filename, lesson }) => renderLesson(filename, lesson)).join('');

const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Smoke Test: ${esc(subjectSlug)}</title>
  <style>
    * { box-sizing: border-box; }
    body { background: #020617; color: #f8fafc; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; padding: 24px; margin: 0; }
    h1 { color: #f8fafc; }
    code { background: #1e293b; padding: 2px 6px; border-radius: 4px; font-size: 0.85em; }
    ul { margin: 4px 0; padding-left: 20px; }
    details summary { user-select: none; }
  </style>
</head>
<body>
  <h1>Smoke Report: <span style="color:#7c3aed">${esc(subjectSlug)}</span></h1>
  <p style="color:#64748b">Generated: ${new Date().toISOString()} · ${allLessons.length} lessons · ${allLessons.reduce((n, { lesson }) => n + (lesson.screens || []).length, 0)} screens</p>
  ${lessonHtml}
</body>
</html>`;

const outPath = `/tmp/report-${subjectSlug}-smoke.html`;
fs.writeFileSync(outPath, html, 'utf8');
console.log(`\nReport written to: ${outPath}`);
console.log(`Open with: open ${outPath}`);
