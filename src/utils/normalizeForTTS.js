// normalizeForTTS — pre-processes text before ElevenLabs TTS calls.
// Expands symbols, units, and large numbers into fully spoken-out form.
// Extracted here so it can be unit-tested independently of the React player.

const SUPERSCRIPT_MAP = {
  '⁰':'0','¹':'1','²':'2','³':'3','⁴':'4',
  '⁵':'5','⁶':'6','⁷':'7','⁸':'8','⁹':'9','⁻':'-',
};
function toSuperscriptDigits(s) {
  return s.split('').map(c => SUPERSCRIPT_MAP[c] ?? c).join('');
}

const ORDINAL_SUFFIX = n => {
  const abs = Math.abs(n);
  if (abs % 100 >= 11 && abs % 100 <= 13) return `${n}th`;
  switch (abs % 10) {
    case 1: return `${n}st`;
    case 2: return `${n}nd`;
    case 3: return `${n}rd`;
    default: return `${n}th`;
  }
};

function expandExponent(base, expStr) {
  const neg = expStr.startsWith('-');
  const num = parseInt(expStr.replace('-', ''), 10);
  const ord = ORDINAL_SUFFIX(num);
  return neg
    ? `${base} to the negative ${ord} power`
    : `${base} to the ${ord} power`;
}

function largeNumberToWords(n) {
  if (n >= 1e12) {
    const v = n / 1e12;
    return `${v % 1 === 0 ? v : parseFloat(v.toPrecision(4))} trillion`;
  }
  if (n >= 1e9) {
    const v = n / 1e9;
    return `${v % 1 === 0 ? v : parseFloat(v.toPrecision(4))} billion`;
  }
  if (n >= 1e6) {
    const v = n / 1e6;
    return `${v % 1 === 0 ? v : parseFloat(v.toPrecision(4))} million`;
  }
  return null; // leave small numbers alone
}

export function normalizeForTTS(text) {
  if (!text) return text;
  let t = text;

  // Units (do first so km² isn't caught by bare km)
  // (?<![a-zA-Z]) guards prevent matching inside words (e.g. "exam²" or "okm/s")
  // while still matching units that immediately follow digits ("5km²", "3m/s").
  // \b guards are wrong for these because digits are \w, so digit→letter has no \b.
  // \s? absorbs any existing space before the unit so both "5km²" and "5 km²"
  // produce "5 square kilometers" (exactly one space, never double-space).
  // (?<![a-zA-Z]) still blocks embedding in words like "okm²" or "exam/s".
  t = t.replace(/(?<![a-zA-Z])\s?km²/g,  ' square kilometers');
  t = t.replace(/(?<![a-zA-Z])\s?m²/g,   ' square meters');
  t = t.replace(/(?<![a-zA-Z])\s?km\/s/g,' kilometers per second');
  t = t.replace(/(?<![a-zA-Z])\s?m\/s/g, ' meters per second');
  // \bly\b: word boundaries on BOTH sides prevent partial matches in "clearly", "only", "fly"
  t = t.replace(/\bly\b/g, 'light-years');
  // \s? same space-normalisation for temperature units; \b after C/F blocks "°Celsius"
  t = t.replace(/\s?°C\b/g, ' degrees Celsius');
  t = t.replace(/\s?°F\b/g, ' degrees Fahrenheit');
  t = t.replace(/%/g,    ' percent');

  // Unicode superscript scientific notation: 10⁹, 2³, etc.
  t = t.replace(/(\d+)([⁰¹²³⁴⁵⁶⁷⁸⁹⁻]+)/g, (_, base, sup) => {
    const expStr = toSuperscriptDigits(sup);
    return expandExponent(base, expStr);
  });

  // Caret scientific notation: 10^-9, 10^12, etc.
  t = t.replace(/(\d+)\^(-?\d+)/g, (_, base, exp) => expandExponent(base, exp));

  // Large numbers with commas: strip commas then convert if ≥ 1 million
  t = t.replace(/\b(\d{1,3}(?:,\d{3})+)(\.\d+)?\b/g, (match, intPart, dec) => {
    const n = parseFloat(intPart.replace(/,/g, '') + (dec || ''));
    const words = largeNumberToWords(n);
    return words ?? match.replace(/,/g, ''); // strip commas even if below million
  });

  // Bare large integers without commas (≥ 1 million)
  t = t.replace(/\b(\d{7,})\b/g, (match) => {
    const n = parseInt(match, 10);
    return largeNumberToWords(n) ?? match;
  });

  return t;
}
