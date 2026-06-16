// Unit tests for normalizeForTTS.
// Run with: node --experimental-vm-modules src/utils/normalizeForTTS.test.js
// Or via the validate script: npm run validate
//
// Uses Node's built-in test runner (node:test) — no extra dependencies.
// Fails with non-zero exit code if any assertion fails, blocking the commit.

import { test } from 'node:test';
import assert from 'node:assert/strict';
import { normalizeForTTS } from './normalizeForTTS.js';

// ── FALSE MATCH PREVENTION ────────────────────────────────────────────────────
// Words ending in "ly" must NOT be touched by the ly→light-years rule.
// Words containing "m²", "km", "m/s" substrings must NOT be altered.

test('clearly is unchanged', () => {
  assert.equal(normalizeForTTS('clearly'), 'clearly');
});

test('only is unchanged', () => {
  assert.equal(normalizeForTTS('only'), 'only');
});

test('specifically is unchanged', () => {
  assert.equal(normalizeForTTS('specifically'), 'specifically');
});

test('previously is unchanged', () => {
  assert.equal(normalizeForTTS('previously'), 'previously');
});

test('early is unchanged', () => {
  assert.equal(normalizeForTTS('early'), 'early');
});

test('family is unchanged', () => {
  assert.equal(normalizeForTTS('family'), 'family');
});

test('fly is unchanged', () => {
  assert.equal(normalizeForTTS('fly'), 'fly');
});

test('"ly" inside a sentence with surrounding words is unchanged', () => {
  // Regression for the original bug: "clearly" inside a sentence
  assert.equal(
    normalizeForTTS('This is clearly not a light-year problem'),
    'This is clearly not a light-year problem'
  );
});

test('"ly" mid-word in a longer word is unchanged', () => {
  assert.equal(normalizeForTTS('polymer'), 'polymer');
});

test('"example" is unchanged — no m² false match', () => {
  // "exam" + "ple" contains no unit abbreviation but "m" followed by letter
  assert.equal(normalizeForTTS('example'), 'example');
});

test('"okm" is unchanged — no km unit false match', () => {
  // okm: km preceded by letter → should NOT expand
  assert.equal(normalizeForTTS('okm'), 'okm');
});

test('"exam/s" is unchanged — no m/s false match', () => {
  // m preceded by letter → should NOT expand
  assert.equal(normalizeForTTS('exam/s'), 'exam/s');
});

// ── CORRECT REPLACEMENTS ──────────────────────────────────────────────────────

test('caret exponent: 10^9 → 10 to the 9th power', () => {
  assert.equal(normalizeForTTS('10^9'), '10 to the 9th power');
});

test('caret exponent: 10^-9 → 10 to the negative 9th power', () => {
  assert.equal(normalizeForTTS('10^-9'), '10 to the negative 9th power');
});

test('caret exponent: ordinal suffix — 10^1 → 10 to the 1st power', () => {
  assert.equal(normalizeForTTS('10^1'), '10 to the 1st power');
});

test('caret exponent: ordinal suffix — 10^2 → 10 to the 2nd power', () => {
  assert.equal(normalizeForTTS('10^2'), '10 to the 2nd power');
});

test('caret exponent: ordinal suffix — 10^3 → 10 to the 3rd power', () => {
  assert.equal(normalizeForTTS('10^3'), '10 to the 3rd power');
});

test('large comma number: 93,000,000,000 → 93 billion', () => {
  assert.equal(normalizeForTTS('93,000,000,000'), '93 billion');
});

test('large comma number: 1,000,000 → 1 million', () => {
  assert.equal(normalizeForTTS('1,000,000'), '1 million');
});

test('large comma number: 4,500,000,000 → 4.5 billion', () => {
  assert.equal(normalizeForTTS('4,500,000,000'), '4.5 billion');
});

test('small comma number: commas stripped but not expanded (< 1 million)', () => {
  assert.equal(normalizeForTTS('1,234'), '1234');
});

test('km² after digit (no space): 5km² → 5 square kilometers', () => {
  assert.equal(normalizeForTTS('5km²'), '5 square kilometers');
});

test('km² after space: 5 km² → 5 square kilometers (single space, not double)', () => {
  assert.equal(normalizeForTTS('5 km²'), '5 square kilometers');
});

test('km² in sentence: The area is 5 km² total', () => {
  assert.equal(
    normalizeForTTS('The area is 5 km² total'),
    'The area is 5 square kilometers total'
  );
});

test('m/s after digit (no space): 5m/s → 5 meters per second', () => {
  assert.equal(normalizeForTTS('5m/s'), '5 meters per second');
});

test('m/s after space: 30 m/s → 30 meters per second (single space, not double)', () => {
  assert.equal(normalizeForTTS('30 m/s'), '30 meters per second');
});

test('m/s in sentence: travels at 30 m/s → travels at 30 meters per second', () => {
  assert.equal(
    normalizeForTTS('travels at 30 m/s'),
    'travels at 30 meters per second'
  );
});

test('km/s: 300,000 km/s → 300000 kilometers per second', () => {
  // comma stripped by large-number pass first (300,000 < 1M → commas stripped)
  // then km/s expanded
  assert.equal(normalizeForTTS('300,000 km/s'), '300000 kilometers per second');
});

test('°C without space: 100°C → 100 degrees Celsius', () => {
  assert.equal(normalizeForTTS('100°C'), '100 degrees Celsius');
});

test('°C with space: 100 °C → 100 degrees Celsius (single space, not double)', () => {
  assert.equal(normalizeForTTS('100 °C'), '100 degrees Celsius');
});

test('°F without space: 212°F → 212 degrees Fahrenheit', () => {
  assert.equal(normalizeForTTS('212°F'), '212 degrees Fahrenheit');
});

test('°C does not expand when followed by a letter (e.g. °Celsius)', () => {
  // The trailing \b on °C\b blocks this — °C followed by 'e' has no word boundary
  assert.equal(normalizeForTTS('100°Celsius'), '100°Celsius');
});

test('% → space + percent', () => {
  assert.equal(normalizeForTTS('50%'), '50 percent');
});

test('standalone ly surrounded by spaces → light-years', () => {
  assert.equal(normalizeForTTS(' ly '), ' light-years ');
});

test('standalone ly at end of sentence → light-years', () => {
  // "ly" preceded by space (\b fires) and followed by "." (\b fires) → correct match
  assert.equal(normalizeForTTS('distance in ly.'), 'distance in light-years.');
});

test('standalone ly with surrounding context → light-years', () => {
  assert.equal(
    normalizeForTTS('4.2 ly from Earth'),
    '4.2 light-years from Earth'
  );
});

test('null/undefined input passes through unchanged', () => {
  assert.equal(normalizeForTTS(null), null);
  assert.equal(normalizeForTTS(undefined), undefined);
  assert.equal(normalizeForTTS(''), '');
});
