// Karaoke-style word highlighting — mirrors the implementation in LessonPlayer.jsx.
//
// Props:
//   text         — the string to display (what the user sees on screen)
//   karaokeWords — array of words currently being spoken (from GameLessonPlayer state)
//   karaokeIdx   — index of the word actively being spoken (-1 = not speaking)
//   style        — optional style object passed to the outer <span>
//   className    — optional className passed to the outer <span>
//
// When not speaking (karaokeIdx === -1) the text renders as-is via color:inherit.
// While speaking, the current word is bright + bold + glowing, past words fade to
// 75% opacity, and upcoming words dim to 40% opacity — matching LessonPlayer behaviour.

export default function KaraokeText({ text, karaokeWords = [], karaokeIdx = -1, style = {}, className = '' }) {
  if (!text) return null;
  const words = text.split(/\s+/);

  // Find where this display text starts within the spoken word stream.
  // Handles prefixes the guide speaks that aren't shown on screen (e.g. "You did it! …").
  let offset = 0;
  if (karaokeWords.length && words.length) {
    const clean = w => w.toLowerCase().replace(/[^a-z0-9]/g, '');
    for (let i = 0; i <= karaokeWords.length - words.length; i++) {
      if (
        clean(karaokeWords[i]) === clean(words[0]) &&
        clean(karaokeWords[Math.min(i + 1, karaokeWords.length - 1)]) === clean(words[Math.min(1, words.length - 1)])
      ) {
        offset = i;
        break;
      }
    }
  }

  const isSpeaking = karaokeIdx >= 0;

  return (
    <span className={className} style={style}>
      {words.map((word, i) => {
        const gi       = i + offset;
        const isCur    = isSpeaking && karaokeIdx === gi;
        const isPast   = isSpeaking && karaokeIdx > gi;
        const isFuture = isSpeaking && karaokeIdx < gi;
        return (
          <span
            key={i}
            style={{
              display: 'inline',
              color: isCur    ? '#ffffff'
                   : isPast   ? 'rgba(255,255,255,0.75)'
                   : isFuture ? 'rgba(255,255,255,0.4)'
                   :            'inherit',
              textShadow: isCur ? '0 0 10px rgba(124,58,237,0.6)' : 'none',
              fontWeight: isCur ? 700 : 'inherit',
              transition: 'color 0.12s ease, text-shadow 0.12s ease',
            }}
          >
            {word}{' '}
          </span>
        );
      })}
    </span>
  );
}
