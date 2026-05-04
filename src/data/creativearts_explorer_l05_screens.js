// ─────────────────────────────────────────────────────────────────────────────
// Creative Arts  |  L05 — Music Theory: Notes, Rhythm, Melody
// Age band : explorers (6–8)   Guide: muse
// ─────────────────────────────────────────────────────────────────────────────

const CA_L05 = {
  ageBand:   `explorers`,
  subjectId: `creative-arts`,
  guide:     `muse`,

  lessons: [
    {
      id:        `ca-6-8-05`,
      title:     `Music Theory: Notes, Rhythm, Melody`,
      duration:  12,
      xpReward:  50,
      badge:     `music-theory-explorer`,
      badgeName: `Music Theory Explorer`,

      screens: [

        {
          id: `l05-welcome`,
          type: `welcome`,
          guideText: `Here's something that might change how you hear music, {name}: underneath every song you've ever loved — no matter how different they are from each other — there is a structure. Notes at precise frequencies. Rhythms that repeat in counted patterns. Melodies built from scales humans have been using for thousands of years. Music is, in a real sense, mathematics you can hear and physics turned into emotion. And here's the beautiful paradox: understanding that structure doesn't take the magic away. It multiplies it. Once you know what's happening, you hear it more deeply. Today we begin that understanding.`,
          headline: `Music Theory: Notes, Rhythm, Melody`,
          subtitle: `Music is mathematics you can hear, and physics turned into emotion — and underneath every song you've ever loved is a structure. Understanding that structure doesn't take the magic away. It multiplies it`,
          visual: `/explorer-assets/creative-arts/l05-welcome.png`,
        },

        {
          id: `l05-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Notes: The Building Blocks of Music`,
          paragraphs: [
            `A **musical note** is a sound with a specific pitch — determined by the frequency of the sound wave (how fast it vibrates). Western music uses **12 notes** that repeat in higher and lower versions called **octaves**. These 12 notes are the white and black keys on a piano repeating across the keyboard. The notes are named **A, B, C, D, E, F, G** — and then they repeat. The black keys are **sharps** (slightly higher) or **flats** (slightly lower) of the white keys. From any note to the next occurrence of the same note is one octave — the same sound, just higher or lower. Every piece of music ever written is built from these same 12 notes.`,
          ],
          image: `/explorer-assets/creative-arts/l05-magazine-1.png`,
          imageCaption: `Western music uses just 12 notes — all music ever written comes from this same set, arranged differently`,
        },

        {
          id: `l05-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Rhythm: Music in Time`,
          paragraphs: [
            `**Rhythm** is the pattern of sounds and silences in time. The **beat** is the steady pulse underlying the music — like a heartbeat. The **tempo** is how fast or slow that beat moves (measured in BPM — beats per minute). Notes have different durations: a **whole note** lasts 4 beats, a **half note** lasts 2, a **quarter note** lasts 1, an **eighth note** lasts half a beat. A **measure** (or bar) is a unit of music containing a set number of beats. Most pop music has 4 beats per measure — known as 4/4 time. **Rests** are the silences — equally important as the sounds. Rhythm is what makes music feel like it's moving forward.`,
          ],
          image: `/explorer-assets/creative-arts/l05-magazine-2.png`,
          imageCaption: `Beat, tempo, note durations, rests — rhythm is what makes music move through time`,
        },

        {
          id: `l05-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Melody: Notes in Sequence`,
          paragraphs: [
            `A **melody** is a sequence of notes played one at a time — it's the part of music you can sing or hum. Great melodies have a **shape**: they rise and fall, create tension and release, go somewhere and come back. The relationship between notes in a melody is called **intervals** — how far apart the notes are. Small intervals (moving to the next note up or down) feel smooth and connected. Large intervals (jumping many notes at once) feel dramatic and surprising. The melody of "Happy Birthday" is instantly recognisable because of its specific note sequence and rhythm — change even a few notes and it becomes a completely different song.`,
          ],
          image: `/explorer-assets/creative-arts/l05-magazine-3.png`,
          imageCaption: `Melody rises, falls, creates tension and release — it's the part your brain latches onto and remembers`,
        },

        {
          id: `l05-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Harmony: Notes Together`,
          paragraphs: [
            `When multiple notes are played at the **same time**, they create **harmony**. Some combinations sound pleasing — these are **consonant**. Others create tension — these are **dissonant**. **Chords** are groups of notes played together that form the harmonic foundation of a song. Most songs in Western music use just a few chords arranged in patterns called **chord progressions**. One chord progression is used in literally thousands of popular songs across completely different genres and decades — which shows how much of music's emotional power comes from a small set of deeply satisfying harmonic relationships that the human ear responds to.`,
          ],
          image: `/explorer-assets/creative-arts/l05-magazine-4.png`,
          imageCaption: `Harmony is notes sounding together — consonant combinations feel pleasing, dissonant ones create tension`,
        },

        {
          id: `l05-game`,
          type: `interactive`,
          format: `drag-match`,
          guideText: `Alright, {name} — time to put what you've learned to the test. Look at each scene and match it to where it belongs. Take your time — you've got this.`,
          buckets: [
            {
              id: `melody`,
              label: `🎵 This is part of the MELODY`,
              color: `#A78BFA`,
            },
            {
              id: `rhythm`,
              label: `🥁 This is part of the RHYTHM`,
              color: `#F59E0B`,
            },
          ],
          items: [
            {
              id: `l05-g1`,
              image: `l05-game-1.png`,
              label: `The catchy tune you find yourself humming long after a song has finished.`,
              matchPhrase: `Melody is the sequence of notes played one at a time — it's the part the brain latches onto and remembers. That tune you can't get out of your head? That's the melody doing its job.`,
              correctMatch: `melody`,
            },
            {
              id: `l05-g2`,
              image: `l05-game-2.png`,
              label: `The steady beat you tap your foot to without even thinking about it while a song plays.`,
              matchPhrase: `The beat is the steady underlying pulse of music — like a heartbeat. Your foot finds it automatically because rhythm is the most primal element of music, connecting directly to your body's own natural pulses.`,
              correctMatch: `rhythm`,
            },
            {
              id: `l05-g3`,
              image: `l05-game-3.png`,
              label: `The rising and falling series of notes that makes a song sound like itself and no other song.`,
              matchPhrase: `That recognisable shape — the specific way notes rise and fall in a sequence — is the melody. It's what makes "Happy Birthday" instantly identifiable even without words. Change the note sequence and it becomes a completely different song.`,
              correctMatch: `melody`,
            },
            {
              id: `l05-g4`,
              image: `l05-game-4.png`,
              label: `The pattern of long and short sounds that gives a song its driving forward energy.`,
              matchPhrase: `Rhythm is music organised in time — the pattern of note durations and silences that makes music feel like it's moving. Without rhythm, notes are just sounds floating in the air. With it, music has momentum, pulse, and life.`,
              correctMatch: `rhythm`,
            },
          ],
        },

        {
          id: `l05-quiz`,
          type: `quiz`,
          guideText: `Let's see how much you remember, {name}. Answer each question and I'll tell you how you did.`,
          questions: [
            {
              id: `l05-q1`,
              format: `multiple-choice`,
              question: `What is an octave?`,
              options: [
                `A group of eight musicians playing together`,
                `The distance from one note to the next occurrence of the same note at a higher or lower pitch`,
                `Eight measures of music played in sequence`,
                `The eight notes of a major scale`,
              ],
              correctIndex: 1,
              explanation: `An octave is the distance from one note to the next occurrence of the same note name — but higher or lower in pitch. The note C, for example, sounds recognisably like a C whether it's played low on the piano or high — same name, same character, different pitch. The word "octave" comes from the Latin for eight because in the traditional Western scale, there are eight steps between a note and its octave.`,
            },
            {
              id: `l05-q2`,
              format: `multiple-choice`,
              question: `What is the difference between beat and tempo?`,
              options: [
                `They are the same thing described differently`,
                `The beat is the rhythm pattern; tempo is the volume of the music`,
                `The beat is the steady pulse; tempo is how fast or slow that pulse is`,
                `Beat is for drums; tempo is for melody instruments`,
              ],
              correctIndex: 2,
              explanation: `The beat is the steady underlying pulse of music — the thing your foot taps to. Tempo is how fast or slow that beat moves, measured in beats per minute (BPM). A song can have the same beat pattern but feel completely different depending on its tempo — a slow version of a fast song can change its emotional character entirely. Tempo is one of the most powerful tools a musician has for shaping how a piece feels.`,
            },
            {
              id: `l05-q3`,
              format: `multiple-choice`,
              question: `What is a melody?`,
              options: [
                `Multiple notes played at the same time to create harmony`,
                `The rhythm pattern that supports the main song`,
                `A sequence of notes played one at a time — the part you can sing or hum`,
                `The chord progression that gives a song its emotional feel`,
              ],
              correctIndex: 2,
              explanation: `A melody is a sequence of single notes played one at a time — it's the part of music that has a recognisable shape and that you can sing, hum, or whistle. It rises and falls, creates tension and release, and carries the emotional story of the music. Harmony (multiple notes at once) supports and enriches the melody, but the melody is the thread that the listener follows and remembers.`,
            },
            {
              id: `l05-q4`,
              format: `true-false`,
              question: `Rhythm in music includes both the sounds AND the silences — the gaps between notes are just as important as the notes themselves.`,
              correctAnswer: true,
              explanation: `True. Rests — the silences in music — are as structurally important as the notes themselves. Music without rests would be a continuous wall of sound with no shape or breath. The silences create space, emphasis, anticipation, and punctuation. Some of the most powerful moments in music are the pauses — what comes after the silence can carry enormous emotional impact because of what came before it.`,
            },
            {
              id: `l05-q5`,
              format: `fill-blank`,
              question: `A sequence of notes played one at a time — the part you can sing or hum — is called a ___.`,
              options: [
                `melody`,
                `harmony`,
                `chord`,
                `beat`,
              ],
              correctIndex: 0,
              explanation: `A melody is the sequence of single notes that gives a piece of music its recognisable shape and emotional character. It's what you hum in the shower, whistle while you walk, and remember long after the song has finished playing. Melody is distinguished from harmony (multiple notes at once) and rhythm (the time organisation) — together, all three create the full experience of music.`,
            },
            {
              id: `l05-q6`,
              format: `multiple-choice`,
              question: `What is the difference between melody and harmony?`,
              options: [
                `Melody is played by instruments; harmony is always sung by voices`,
                `Melody is a sequence of notes played one at a time; harmony is multiple notes played at the same time`,
                `Melody is the rhythm of a song; harmony is the tempo`,
                `Melody is fast music; harmony is slow music`,
              ],
              correctIndex: 1,
              explanation: `The distinction is simple but fundamental: melody is horizontal — notes played one after another in a sequence you can follow. Harmony is vertical — notes played simultaneously that create a chord. The melody is what you sing; the harmony is the chords underneath. Together they create the full emotional texture of a piece of music, with melody carrying the tune and harmony giving it its emotional colour and depth.`,
            },
          ],
        },

        {
          id: `l05-realworld`,
          type: `real-world`,
          guideText: `Music theory is the shared language that musicians use to communicate, compose, and understand the music they make. Every professional musician — whether they play classical, jazz, pop, or create electronic music — uses the same fundamental concepts of notes, rhythm, melody, and harmony. Understanding these concepts doesn't make music less emotional; it gives you the tools to create emotion intentionally.`,
          familyAdventure: `Listen to a favourite family song together with new ears. Try to identify: the beat (tap your foot), the tempo (fast, medium, or slow), the melody (which part can you hum?), and the harmony (can you hear chords underneath?). Listen for moments where the melody rises and where it falls. Listen for tension and release. Then listen to a song in a completely different genre — how do these elements change? What emotion does each create?`,
          creativePrompt: `Create your own rhythm pattern using only your body — no instruments needed. Decide on 4 beats per bar. Fill each bar with a mix of claps (1 beat each) and double-claps (half a beat each). Write it out using letters if you like: C for clap, d-d for double-clap, R for rest. Practise your 4-bar pattern until you can repeat it without mistakes. Then teach it to someone in your family and clap it together. You just composed and performed a piece of rhythm music.`,
        },

        {
          id: `l05-celebration`,
          type: `celebration`,
          message: `How beautiful, {name}! You now know that every song you've ever loved is built from notes, rhythm, melody, and harmony working together — and that structure is not the opposite of feeling, it's what makes feeling possible. Music has been speaking to the human heart for as long as humans have existed. Now you can hear how it works. Muse thinks that's one of the most wonderful things there is.`,
          badge: `music-theory-explorer`,
          badgeName: `Music Theory Explorer`,
          xpEarned: 50,
        },

      ], // screens
    },
  ], // lessons
};

export default CA_L05;

// ─── Dev asset check ─────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const mags  = CA_L05.lessons[0].screens.filter(s => s.type === 'magazine').length;
  const game  = CA_L05.lessons[0].screens.find(s => s.type === 'interactive')?.config?.items?.length ?? 0;
  const quiz  = CA_L05.lessons[0].screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  console.log(`[LESSON-CREATIVE-ARTS-L05] Loaded: "Music Theory: Notes, Rhythm, Melody" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
  Promise.all([
    fetch('/explorer-assets/creative-arts/l05-magazine-1.png', { method: 'HEAD' }),
    fetch('/explorer-assets/creative-arts/l05-magazine-2.png', { method: 'HEAD' }),
    fetch('/explorer-assets/creative-arts/l05-magazine-3.png', { method: 'HEAD' }),
    fetch('/explorer-assets/creative-arts/l05-magazine-4.png', { method: 'HEAD' }),
  ]).then(() => console.log('[LESSON-CREATIVE-ARTS-L05] Magazine assets OK'))
    .catch(() => console.warn('[LESSON-CREATIVE-ARTS-L05] One or more magazine assets missing'));
}
