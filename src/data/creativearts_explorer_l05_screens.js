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
          headline: `Music Is Structured`,
          paragraphs: [
            `Every song you've ever loved has structure underneath. Notes at exact frequencies. Rhythms in counted patterns. Melodies built from scales humans have used for thousands of years.`,
            `Knowing the structure doesn't kill the magic. It multiplies it.`,
          ],
          image: `/explorer-assets/creative-arts/l05-s1-music-structure.png`,
          imageCaption: `Music feels free. But underneath every song is an architecture as careful as any building's.`,
          vocab: [
            { word: `music theory`, definition: `The study of how music is built — the structure of notes, rhythm, melody, and harmony underneath every song.`,
              audioPrompt: `Music theory might sound dry, {name}, but it's really the study of why songs make you feel things. Why one chord sounds sad and another triumphant. Why some melodies stick in your head for years. Theory is the map of all those feelings.` },
            { word: `structure`,    definition: `The underlying pattern that organizes something. Music has it — even when it sounds spontaneous and free.`,
              audioPrompt: `Structure is what holds music together, {name}. Even jazz improvisation, which sounds completely free, follows structures: chord progressions, time signatures, scales. The freedom isn't from having no structure. It's from knowing the structure so well you can play with it.` },
            { word: `pattern`,      definition: `A repeating arrangement. Music is patterns of sound and silence organized in time.`,
              audioPrompt: `Patterns are everywhere in music, {name} — repeated rhythms, returning melodies, chord progressions that loop. Your brain LOVES patterns. It predicts them, gets rewarded when they're fulfilled, and gets pleasantly surprised when they're broken. That dance between expectation and surprise is half the joy of music.` },
          ],
        },

        {
          id: `l05-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Notes and Pitch`,
          paragraphs: [
            `A note is a sound with a specific pitch — determined by how fast the sound wave vibrates.`,
            `Western music uses just 12 notes (A through G, plus sharps and flats). They repeat in higher and lower octaves. Every song ever written uses these same 12 notes.`,
          ],
          image: `/explorer-assets/creative-arts/l05-s2-piano-octaves.png`,
          imageCaption: `Twelve notes. Repeated up and down the keyboard. Every song you've ever heard, built from this same small set.`,
          vocab: [
            { word: `note`,   definition: `A sound with specific pitch and duration. The basic building block of all music.`,
              audioPrompt: `A note is really just two decisions, {name} — what pitch to play and for how long. That's it. And from those two decisions every piece of music ever made was built. Muse finds this endlessly astonishing.` },
            { word: `pitch`,  definition: `How high or low a note sounds. Determined by how fast the sound wave vibrates — faster = higher.`,
              audioPrompt: `Pitch is the highness or lowness of a sound, {name}. A hummingbird's wings vibrate hundreds of times per second — high pitch. A bass guitar string vibrates slowly — low. All of music is built on our ability to hear differences in vibration speed.` },
            { word: `octave`, definition: `The distance from one note to the same note higher or lower. The higher one vibrates exactly twice as fast as the lower.`,
              audioPrompt: `An octave is the same sound in a different register, {name}. Sing "Somewhere Over the Rainbow" — the first two notes are an octave apart. The higher note vibrates exactly twice as fast as the lower one. You've known octaves your whole life, even without a word for them.` },
          ],
        },

        {
          id: `l05-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Rhythm`,
          paragraphs: [
            `Rhythm is the pattern of sounds and silences in time. The BEAT is the steady pulse — what you tap your foot to.`,
            `TEMPO is how fast the beat moves (in BPM). Same melody at different tempos = completely different feeling. Silences (rests) matter as much as sounds.`,
          ],
          image: `/explorer-assets/creative-arts/l05-s3-rhythm-pulse.png`,
          imageCaption: `Beat. Tempo. Rests. Rhythm is how music moves through time — and the silences matter as much as the sounds.`,
          vocab: [
            { word: `beat`,  definition: `The steady underlying pulse of music — music's heartbeat. What you tap your foot to.`,
              audioPrompt: `Close your eyes and listen to any song, {name}, and you'll feel it — a steady pulse underneath everything. That's the beat. The invisible structure all rhythm hangs on. When a song makes you nod your head, you're feeling the beat before you know it.` },
            { word: `tempo`, definition: `How fast or slow the beat moves. Measured in beats per minute (BPM).`,
              audioPrompt: `Tempo is the speed of the heartbeat, {name}. Sixty beats per minute feels like a quiet walk. A hundred and sixty feels like a sprint. The same melody at different tempos becomes a completely different emotional experience. Tempo shapes everything.` },
            { word: `rest`,  definition: `Silence in music. As structurally important as the notes themselves.`,
              audioPrompt: `Rests are music's silences, {name} — and they're not nothing. They're where the music breathes. Some of the most powerful moments in any song are the pauses. What comes after the silence carries enormous weight because of what came before it.` },
          ],
        },

        {
          id: `l05-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Melody`,
          paragraphs: [
            `A melody is a sequence of notes played one at a time — the part you can sing or hum.`,
            `Great melodies have shape: they rise and fall, create tension and release, go somewhere. Change a few notes of "Happy Birthday" and it becomes a different song.`,
          ],
          image: `/explorer-assets/creative-arts/l05-s4-melody-shape.png`,
          imageCaption: `Melody is a journey. Up, down, leap, step, return home. Your brain follows the shape — that's why melodies stick.`,
          vocab: [
            { word: `melody`,   definition: `A sequence of notes played one at a time. The singable, memorable line in a piece of music.`,
              audioPrompt: `Melody is the part of music you carry home with you, {name}. It's what you hum in the shower. A melody has shape — rises toward tension, falls toward resolution. The brain loves a journey with direction. That's why melodies that go somewhere feel satisfying.` },
            { word: `interval`, definition: `The distance in pitch between two notes. Small intervals feel smooth; large intervals feel dramatic.`,
              audioPrompt: `An interval is the space between two notes, {name} — and the size of that space changes everything. Small intervals, gentle steps, feel smooth. Large intervals — five or eight notes at once — feel bold or surprising. A lullaby steps. A dramatic theme leaps.` },
            { word: `phrase`,   definition: `A musical sentence — a short melody with a beginning, middle, and end. Most melodies are built of phrases.`,
              audioPrompt: `A musical phrase is like a sentence, {name} — it starts, goes somewhere, arrives somewhere. Some phrases end with arrival (a period). Some end with a question (a comma). Call-and-response in so many songs is really just phrases answering each other.` },
          ],
        },

        {
          id: `l05-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Harmony`,
          paragraphs: [
            `When multiple notes play AT THE SAME TIME, you get harmony.`,
            `A chord is three or more notes together. Some combinations feel resolved (consonant), others feel tense (dissonant). Most songs use just 3-4 chords.`,
          ],
          image: `/explorer-assets/creative-arts/l05-s5-chord-harmony.png`,
          imageCaption: `Notes alone are melody. Notes stacked together are harmony. Most songs you love are built from only three or four chords.`,
          vocab: [
            { word: `harmony`,    definition: `Two or more notes sounded at the same time. Can feel consonant (pleasing) or dissonant (tense).`,
              audioPrompt: `Harmony is what happens when notes sound together, {name} — and the result can feel like a warm hug or a held breath, depending on which notes combine. Music moves through tension and release using harmony. One of the most emotionally direct things in all of art.` },
            { word: `chord`,      definition: `Three or more notes played at the same time. The building blocks of a song's harmonic foundation.`,
              audioPrompt: `A chord is a decision about which notes to play at once, {name}. Three notes, chosen carefully, can feel sunny or mysterious or heartbreaking. Most popular songs are built from just three or four chords. The progression — the order they appear — creates the whole emotional journey.` },
            { word: `consonance`, definition: `Notes combining in a way that sounds resolved and pleasing. The opposite of dissonance, which creates tension.`,
              audioPrompt: `Consonance is the feeling of arrival, {name} — when notes combine and the ear relaxes. It's what you feel at the end of a song when everything resolves. Music breathes between dissonance and consonance — needs the tension to make the release mean something.` },
          ],
        },

        {
          id: `l05-mag-6`,
          type: `magazine`,
          section: 6,
          headline: `Math You Can Feel`,
          paragraphs: [
            `Notes are frequencies. Rhythms are counted patterns. Chords are mathematical relationships.`,
            `All of music is mathematics you can hear and physics turned into emotion. Structure isn't the opposite of feeling — it's what makes feeling possible.`,
          ],
          image: `/explorer-assets/creative-arts/l05-s6-math-to-feeling.png`,
          imageCaption: `Frequencies. Ratios. Counted patterns. All of it pure math — until it hits your ear and becomes pure feeling.`,
          vocab: [
            { word: `frequency`,   definition: `How fast a sound wave vibrates. The physics behind every note — measured in vibrations per second (Hz).`,
              audioPrompt: `Frequency is the physics of music, {name}. Middle A on a piano vibrates 440 times per second. Every note has its own number. Music is, quite literally, organized vibration — and your ear can tell the difference between hundreds of frequencies. Astonishing, when you think about it.` },
            { word: `composition`, definition: `The act of arranging notes, rhythms, and harmonies into a piece of music. What composers do.`,
              audioPrompt: `Composition is the act of choosing, {name} — which notes, in what order, at what tempo, with what harmonies. From those choices, a piece of music emerges that didn't exist before. The composer is the one who arranges sound into experience.` },
            { word: `expression`,  definition: `How music communicates emotion. The reason all the structure exists in the first place.`,
              audioPrompt: `Expression is why music exists at all, {name}. The structure isn't the point — it's the vehicle. Notes, rhythms, and chords all exist to carry something across that words can't quite reach. Music is structure built in service of expression. Both matter equally.` },
          ],
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
    fetch('/explorer-assets/creative-arts/l05-s1-music-structure.png', { method: 'HEAD' }),
    fetch('/explorer-assets/creative-arts/l05-s2-piano-octaves.png', { method: 'HEAD' }),
    fetch('/explorer-assets/creative-arts/l05-s3-rhythm-pulse.png', { method: 'HEAD' }),
    fetch('/explorer-assets/creative-arts/l05-s4-melody-shape.png', { method: 'HEAD' }),
    fetch('/explorer-assets/creative-arts/l05-s5-chord-harmony.png', { method: 'HEAD' }),
    fetch('/explorer-assets/creative-arts/l05-s6-math-to-feeling.png', { method: 'HEAD' }),
  ]).then(() => console.log('[LESSON-CREATIVE-ARTS-L05] Magazine assets OK'))
    .catch(() => console.warn('[LESSON-CREATIVE-ARTS-L05] One or more magazine assets missing'));
}
