/**
 * optimize-images.mjs
 *
 * Converts PNG files in a target directory to WebP (quality 85, lossless for icons).
 * Run against any subject asset folder before committing new lesson images.
 *
 * Usage:
 *   node scripts/optimize-images.mjs public/explorer-assets/history
 *   node scripts/optimize-images.mjs public/explorer-assets/cosmos
 *   node scripts/optimize-images.mjs public/explorer-assets   # all subjects
 *
 * To wire up as a pre-commit hook, add to .husky/pre-commit:
 *   node scripts/optimize-images.mjs public/explorer-assets
 *
 * Requirements: sharp (already a devDependency)
 *   npm install --save-dev sharp
 */

import sharp from 'sharp';
import { readdir, stat, unlink } from 'fs/promises';
import { join, extname, basename } from 'path';

const QUALITY = 85; // adjust 80-90 to trade size vs. fidelity

async function findPngs(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const results = [];
  for (const entry of entries) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...await findPngs(full));
    } else if (entry.isFile() && extname(entry.name).toLowerCase() === '.png') {
      results.push(full);
    }
  }
  return results;
}

async function formatBytes(bytes) {
  return `${(bytes / 1024).toFixed(1)} KB`;
}

async function main() {
  const targetDir = process.argv[2];
  if (!targetDir) {
    console.error('Usage: node scripts/optimize-images.mjs <directory>');
    process.exit(1);
  }

  const pngs = await findPngs(targetDir);
  if (pngs.length === 0) {
    console.log(`No PNG files found in ${targetDir}`);
    return;
  }

  console.log(`\nConverting ${pngs.length} PNG(s) → WebP (quality ${QUALITY})…\n`);

  let totalBefore = 0;
  let totalAfter = 0;

  for (const pngPath of pngs) {
    const webpPath = pngPath.replace(/\.png$/i, '.webp');
    const before = (await stat(pngPath)).size;

    await sharp(pngPath).webp({ quality: QUALITY }).toFile(webpPath);

    const after = (await stat(webpPath)).size;
    const saving = (((before - after) / before) * 100).toFixed(1);

    totalBefore += before;
    totalAfter += after;

    console.log(
      `  ${basename(pngPath)}\n` +
      `    PNG: ${await formatBytes(before)}  →  WebP: ${await formatBytes(after)}  (${saving}% smaller)\n`
    );

    // Remove original PNG after successful conversion
    await unlink(pngPath);
  }

  const totalSaving = (((totalBefore - totalAfter) / totalBefore) * 100).toFixed(1);
  console.log(
    `─────────────────────────────────────────────\n` +
    `Total: ${await formatBytes(totalBefore)} → ${await formatBytes(totalAfter)} (${totalSaving}% reduction)\n`
  );
}

main().catch(err => { console.error(err); process.exit(1); });
