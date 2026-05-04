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
          vocab: [
            { word: `pitch`, definition: `How high or low a musical note sounds — determined by how fast the sound wave vibrates, with faster vibrations creating higher pitches.`, audioPrompt: `Pitch is the highness or lowness of a sound, {name}. A hummingbird's wings vibrate hundreds of times per second — that's a high pitch. A bass guitar string vibrates slowly — that's low. When you sing up a scale, each note is a faster vibration than the one before it. All of music is built from our ability to hear and reproduce those differences in vibration speed. It's remarkable when you think about it.` },
            { word: `octave`, definition: `The distance from one note to the next note with the same name but twice the vibration frequency — like two versions of the same sound, one higher, one lower.`, audioPrompt: `An octave is the same sound in a different register, {name}. Middle C and the C above it share a name and a quality — they feel related, almost like the same note — but one is higher. That's because the higher note vibrates exactly twice as fast. Sing "Somewhere Over the Rainbow" — the first two notes are an octave apart. You've known octaves your whole life, even if you didn't have a word for them.` },
            { word: `note`, definition: `A sound with a specific pitch and duration — the basic building block of all music, from the simplest melody to the most complex symphony.`, audioPrompt: `A note is really just a decision about two things, {name} — what pitch to play, and for how long. That's it. And from those two decisions — pitch and duration — every piece of music that has ever existed was built. Every symphony, every pop song, every lullaby. The same 12 pitches, arranged in different orders and durations. Muse finds this endlessly astonishing.` },
          ],
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
          vocab: [
            { word: `beat`, definition: `The steady underlying pulse of a piece of music — what you tap your foot to, and what all rhythm is organized around.`, audioPrompt: `Close your eyes and listen to any song, {name}, and you'll feel it: the steady pulse underneath everything. That's the beat — music's heartbeat. Before melody, before harmony, before lyrics, there is the beat. It's the invisible structure that all rhythm hangs on. When a song makes you nod your head or tap your foot, you're feeling the beat before you even know you are.` },
            { word: `tempo`, definition: `How fast or slow the beat moves — measured in beats per minute (BPM), which determines whether a piece feels urgent, relaxed, triumphant, or gentle.`, audioPrompt: `Tempo is the speed of the heartbeat, {name}. A slow tempo — sixty beats per minute — feels like a quiet walk. A hundred and sixty beats per minute feels like a sprint. The same melody at different tempos becomes a completely different emotional experience. Composers choose tempo as carefully as they choose notes, because speed is part of the feeling. Fast isn't always exciting. Slow isn't always sad. But tempo shapes everything.` },
            { word: `measure`, definition: `A unit of music that groups a set number of beats together — also called a bar — which gives music its regular, repeating structure.`, audioPrompt: `A measure is like a breath in music, {name} — a repeating unit that groups beats together and gives the music its structure. Most pop music groups four beats per measure: one, two, three, four — one, two, three, four. It's so regular that when a measure is cut short or stretched, you feel it immediately. Count along to your favorite song and you'll feel the measure organizing itself around you.` },
          ],
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
          vocab: [
            { word: `melody`, definition: `A sequence of notes played one at a time — the singable, memorable line that rises and falls through a piece of music.`, audioPrompt: `Melody is the part of music you carry home with you, {name}. It's what you hum in the shower. A melody has shape — it rises toward tension, falls toward resolution, steps and leaps and pauses. The melody of a song is a journey, and the brain loves a journey with direction. That's why melodies that "go somewhere" feel satisfying, and ones that wander without resolve leave you unsettled.` },
            { word: `interval`, definition: `The distance in pitch between two notes — small intervals feel smooth and connected, while large intervals feel dramatic or surprising.`, audioPrompt: `An interval is the space between two notes, {name} — and the size of that space completely changes the feeling. Small intervals, like moving up one step, feel smooth and connected. Large intervals, like jumping up five or eight steps, feel bold or surprising. Composers choose intervals deliberately: a tender lullaby moves in small, gentle steps. A dramatic theme leaps. The melody of your favorite song is built from interval choices made by someone who understood exactly how each leap would feel.` },
            { word: `phrase`, definition: `A musical sentence — a short melody that feels like it has a beginning, middle, and end, making up part of a longer piece.`, audioPrompt: `A musical phrase is like a sentence, {name} — it starts, goes somewhere, and arrives somewhere. Most melodies are built from phrases: two bars, four bars, eight bars, each one a complete musical thought. Some phrases end with a sense of arrival (a period). Some end with a sense of question (a comma). The call-and-response structure of so many songs is really just phrases answering each other. Listen for it and suddenly you hear conversations inside music.` },
          ],
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
          vocab: [
            { word: `harmony`, definition: `Two or more notes sounded at the same time — which can feel consonant (pleasing) or dissonant (tense) depending on how they interact.`, audioPrompt: `Harmony is what happens when notes sound together, {name} — and the result can feel like a warm hug or a held breath, depending on which notes combine. Some combinations feel resolved and complete. Others feel unfinished, restless, like they're asking a question. Music moves through tension and release using harmony. It's one of the most emotionally direct things in all of art.` },
            { word: `chord`, definition: `Three or more notes played at the same time to create harmony — the building blocks of a song's harmonic foundation.`, audioPrompt: `A chord is really just a decision about which notes to play at once, {name}. Three notes together, chosen carefully, can feel sunny, or mysterious, or heartbreaking — sometimes all three, depending on context. Most songs in popular music are built from just three or four chords. The chord progression — the order they appear in — is what creates the emotional journey. Change the chords and you change the whole feeling of a song.` },
            { word: `consonance`, definition: `A combination of notes that sounds stable, resolved, and pleasing to the ear — as opposed to dissonance, which creates tension.`, audioPrompt: `Consonance is the feeling of arrival, {name} — the moment when notes combine and the ear relaxes. It's what you feel at the end of a song, when everything resolves. Dissonance creates tension; consonance releases it. Music breathes between the two — it needs dissonance to make consonance feel like relief. A song that never had tension would never have release, and without release, the arrival means nothing.` },
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
    fetch('/explorer-assets/creative-arts/l05-magazine-1.png', { method: 'HEAD' }),
    fetch('/explorer-assets/creative-arts/l05-magazine-2.png', { method: 'HEAD' }),
    fetch('/explorer-assets/creative-arts/l05-magazine-3.png', { method: 'HEAD' }),
    fetch('/explorer-assets/creative-arts/l05-magazine-4.png', { method: 'HEAD' }),
  ]).then(() => console.log('[LESSON-CREATIVE-ARTS-L05] Magazine assets OK'))
    .catch(() => console.warn('[LESSON-CREATIVE-ARTS-L05] One or more magazine assets missing'));
}
