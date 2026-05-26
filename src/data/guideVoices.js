// ============================================================
// COREVERSE ACADEMY — Per-Guide ElevenLabs Voice IDs
// ============================================================
// Each Little Stars guide has a unique ElevenLabs voice.
// Luna uses eleven_multilingual_v2 for best Spanish quality.
// All other guides use eleven_turbo_v2_5 (default).
// ============================================================

export const DEFAULT_VOICE_ID = 'XfNU2rGpBa01ckF309OY'; // Nova

export const guideVoices = {
  Sage:  'xYa75LlayhWHCRl1yJSH',  // Inner World
  Nova:  'XfNU2rGpBa01ckF309OY',  // Cosmos
  Byte:  'wP7XBmkAmRwrjtfK2KeY',  // Future Skills
  Ace:   'RPEIZnKMqlQiZyZd1Dae',  // Money & Business
  Muse:  'HfRsWv6W0kiMbBILCEFI',  // Creative Arts
  Valor: 'EozfaQ3ZX0esAp1cW5nG',  // Social & Leadership
  Terra: 't5ztDJA7pj9EyW9QIcJ2',  // Life & Wellness
  Lyra:  'NTqGiNK8P02i66yY2GOH',  // History & World
  Remi:  'ShhDvxS4N0arXxn6PD5o',  // Math
  Quill: 'XfNU2rGpBa01ckF309OY',  // ELA
  Cosmo: 'ZoiZ8fuDWInAcwPXaVeq',  // Science
  Atlas: 'NOpBlnGInO9m6vDvFkFC',  // Social Studies
  Luna:  'b2htR0pMe28pYwCY9gnP',  // Spanish
  Orion: 'Dslrhjl3ZpzrctukrQSN',  // Frontier & Philosophy
};

// Per-guide model override. eleven_multilingual_v2 gives best Spanish quality.
// Omitted guides use the default (eleven_turbo_v2_5) set in nova-speak.js.
export const guideModels = {
  Luna: 'eleven_multilingual_v2',
};

function normalize(guideName) {
  return guideName.charAt(0).toUpperCase() + guideName.slice(1).toLowerCase();
}

export function getVoiceForGuide(guideName) {
  if (!guideName) return DEFAULT_VOICE_ID;
  return guideVoices[normalize(guideName)] || DEFAULT_VOICE_ID;
}

export function getModelForGuide(guideName) {
  if (!guideName) return null;
  return guideModels[normalize(guideName)] || null;
}
