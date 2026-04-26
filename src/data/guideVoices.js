// ============================================================
// COREVERSE ACADEMY — Per-Guide ElevenLabs Voice IDs
// ============================================================
// Default voice (Nova) is used for guides we have not yet
// custom-voiced. Luna has a Spanish-native voice for Subject 9.
// As we test voices for other guides we update this map.
// ============================================================

export const DEFAULT_VOICE_ID = 'aUNOP2y8xEvi4nZebjIw';

export const guideVoices = {
  Nova:  'aUNOP2y8xEvi4nZebjIw',
  Sage:  'aUNOP2y8xEvi4nZebjIw',
  Byte:  'aUNOP2y8xEvi4nZebjIw',
  Ace:   'aUNOP2y8xEvi4nZebjIw',
  Muse:  'aUNOP2y8xEvi4nZebjIw',
  Valor: 'aUNOP2y8xEvi4nZebjIw',
  Terra: 'aUNOP2y8xEvi4nZebjIw',
  Lyra:  'aUNOP2y8xEvi4nZebjIw',
  Remi:  'aUNOP2y8xEvi4nZebjIw',
  Quill: 'aUNOP2y8xEvi4nZebjIw',
  Cosmo: 'aUNOP2y8xEvi4nZebjIw',
  Atlas: 'aUNOP2y8xEvi4nZebjIw',
  Luna:  'x5IDPSl4ZUbhosMmVFTk',  // Spanish-native voice for Subject 9
  Orion: 'aUNOP2y8xEvi4nZebjIw',
};

export function getVoiceForGuide(guideName) {
  if (!guideName) return DEFAULT_VOICE_ID;
  return guideVoices[guideName] || DEFAULT_VOICE_ID;
}
