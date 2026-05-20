// ============================================================
// COREVERSE EXPLORERS — Spanish · Lesson 1
// "Hola y Adiós: Hello and Goodbye in Spanish"
// Ages 6–8 | Guide: Luna the Parrot | ExplorerLessonPlayer format
// Calibration: TPR gestures + repetitive chants + 6 words max
// ============================================================

const spanish_explorer_l01_screens = {
  ageBand:   'explorers',
  subjectId: 'languages',
  guide:     'luna',
  lessons: [
    {
      id:        'sp-6-8-01',
      title:     `Hola y Adiós: Hello and Goodbye in Spanish`,
      duration:  12,
      xpReward:  50,
      badge:     'spanish-starter',
      badgeName: `Spanish Starter`,
      screens: [
        // PHASE 1 — WELCOME (Luna chants the words)
        {
          type:      'welcome',
          guideText: `¡Hola, {name}! I'm Luna, your Spanish guide. Today you learn your FIRST Spanish words — words that millions of kids around the world say every day. Listen carefully... ¡Hola! ¡Adiós! ¡Hola! ¡Adiós! That means HELLO and GOODBYE. Say it with me! ¡HOLA! ¡ADIÓS! Ready? ¡Vamos! Let's go!`,
        },

        // PHASE 2 — MAGAZINE STORY (6 sections — TPR + repetition)
        {
          type:          'magazine',
          section:       1,
          totalSections: 6,
          headline:      `¡Hola! (Say: OH-lah)`,
          paragraphs: [
            `HOLA means HELLO in Spanish! When you see a friend, you say "¡Hola!" Just like "Hi!" or "Hello!" in English.`,
            `Try it! Wave your hand and say it loud: ¡HOLA! ¡HOLA! ¡HOLA! Do you feel like saying hi to everyone now? That's how Spanish kids feel too!`,
          ],
          image:        '/explorer-assets/languages/l01-s1-hola.png',
          imageCaption: `¡Hola! — Wave and say HELLO!`,
          vocab: [
            { word: 'hola',  definition: `Hello in Spanish. Say it like: OH-lah.`,                              audioPrompt: `Hola — say it like oh-lah. It means hello in Spanish. Hola! Hola!` },
            { word: 'wave',  definition: `When you move your hand back and forth to say hi.`,                  audioPrompt: `Wave — when you move your hand back and forth to say hi. Wave and say hola!` },
          ],
        },
        {
          type:          'magazine',
          section:       2,
          totalSections: 6,
          headline:      `¡Adiós! (Say: ah-dee-OHS)`,
          paragraphs: [
            `ADIÓS means GOODBYE in Spanish! When you leave a friend, you say "¡Adiós!" It sounds like "ah-dee-OHS."`,
            `Try it! Wave your hand as if saying bye. Now say: ¡ADIÓS! ¡ADIÓS! ¡ADIÓS! See? You already know TWO Spanish words!`,
          ],
          image:        '/explorer-assets/languages/l01-s2-adios.png',
          imageCaption: `¡Adiós! — Wave goodbye!`,
          vocab: [
            { word: 'adiós', definition: `Goodbye in Spanish. Say it like: ah-dee-OHS.`,                       audioPrompt: `Adiós — say it like ah-dee-OHS. It means goodbye in Spanish. Adiós! Adiós!` },
            { word: 'leave', definition: `When you go away from a place — like leaving school to go home.`,    audioPrompt: `Leave — when you go away from a place. We say adiós when we leave.` },
          ],
        },
        {
          type:          'magazine',
          section:       3,
          totalSections: 6,
          headline:      `¡Sí y No! (Say: SEE and NO)`,
          paragraphs: [
            `Two more easy ones! SÍ means YES. NO means NO. They sound just like the English NO — easy!`,
            `When Luna says ¿Sí? you nod your head YES. When Luna says ¿No? you shake your head NO. Try it now! NOD: ¡SÍ! SHAKE: ¡NO!`,
          ],
          image:        '/explorer-assets/languages/l01-s3-si-no.png',
          imageCaption: `¡Sí! Nod your head YES. ¡No! Shake your head NO.`,
          vocab: [
            { word: 'sí', definition: `Yes in Spanish. Say it like: SEE. Nod your head!`,                       audioPrompt: `Sí — say it like SEE. It means yes in Spanish. Sí! Sí! Nod your head!` },
            { word: 'no', definition: `No in Spanish. Sounds just like English NO. Shake your head!`,           audioPrompt: `No — it sounds just like the English no. Shake your head! No! No!` },
          ],
        },
        {
          type:          'magazine',
          section:       4,
          totalSections: 6,
          headline:      `¡Gracias! (Say: GRAH-see-ahs)`,
          paragraphs: [
            `GRACIAS means THANK YOU in Spanish! It's one of the most important words you can know — in ANY language.`,
            `When someone gives you something, you put your hands together near your heart and say: ¡GRACIAS! Try it! ¡GRACIAS! ¡GRACIAS! ¡GRACIAS!`,
          ],
          image:        '/explorer-assets/languages/l01-s4-gracias.png',
          imageCaption: `¡Gracias! — Hands on heart, say THANK YOU!`,
          vocab: [
            { word: 'gracias',   definition: `Thank you in Spanish. Say it like: GRAH-see-ahs.`,                audioPrompt: `Gracias — say it like GRAH-see-ahs. It means thank you in Spanish. Gracias! Gracias!` },
            { word: 'thank you', definition: `Words you say when someone does something kind for you.`,         audioPrompt: `Thank you — words you say when someone does something kind for you. We say gracias!` },
          ],
        },
        {
          type:          'magazine',
          section:       5,
          totalSections: 6,
          headline:      `¡Por favor! (Say: por fah-VOR)`,
          paragraphs: [
            `POR FAVOR means PLEASE in Spanish! When you ask for something nicely, you say "por favor" — just like saying "please" in English.`,
            `Practice with Luna! "Una galleta, ¡por favor!" That means "A cookie, please!" Say it: ¡POR FAVOR! ¡POR FAVOR!`,
          ],
          image:        '/explorer-assets/languages/l01-s5-por-favor.png',
          imageCaption: `¡Por favor! — Asking nicely with PLEASE!`,
          vocab: [
            { word: 'por favor', definition: `Please in Spanish. Say it like: por fah-VOR.`,                   audioPrompt: `Por favor — say it like por fah-VOR. It means please in Spanish. Por favor!` },
            { word: 'please',    definition: `A nice word you say when you ask for something.`,                 audioPrompt: `Please — a nice word you say when you ask for something. In Spanish: por favor!` },
          ],
        },
        {
          type:          'magazine',
          section:       6,
          totalSections: 6,
          headline:      `Luna's Greeting Chant!`,
          paragraphs: [
            `Now let's CHANT all your new words together! Listen to Luna, then say them with her. Clap your hands to the rhythm! Ready?`,
            `¡Hola! ¡Adiós! ¡Sí! ¡No! ¡Hola! ¡Adiós! ¡Sí! ¡No! ¡Gracias! ¡Por favor! ¡Gracias! ¡Por favor! ¡Olé!`,
          ],
          image:        '/explorer-assets/languages/l01-s6-chant.png',
          imageCaption: `Sing the chant with Luna!`,
          vocab: [
            { word: 'chant',   definition: `To say words together in a rhythm — like a happy little song.`,    audioPrompt: `Chant — to say words together in a rhythm, like a happy little song. Let's chant! Hola! Adiós! Sí! No! Gracias! Por favor! Hola! Adiós! Sí! No! Gracias! Por favor! Olé!` },
            { word: 'olé',     definition: `A happy Spanish cheer — like saying "Yay!" or "Hooray!"`,           audioPrompt: `Olé! It's a happy Spanish cheer, like saying yay or hooray. Olé!` },
          ],
        },

        // PHASE 3 — INTERACTIVE (hear Spanish → match to gesture/picture)
        {
          type:          'interactive',
          activityType:  'drag-match',
          instruction:   `Match each Spanish word to what it means in English!`,
          guideText:     `Let's play, {name}! Tap a Spanish word, then tap what it means. You've got this!`,
          columnHeaders: [`Spanish Word`, `Means In English`],
          items: [
            { image: 'l01-game-hola.png',     label: `¡Hola!`,       correctMatch: 'hello',   objectPosition: 'center 50%', matchPhrase: `¡Sí! Hola means HELLO! Wave and say hola!` },
            { image: 'l01-game-adios.png',    label: `¡Adiós!`,      correctMatch: 'goodbye', objectPosition: 'center 50%', matchPhrase: `¡Muy bien! Adiós means GOODBYE! Wave when you leave!` },
            { image: 'l01-game-gracias.png',  label: `¡Gracias!`,    correctMatch: 'thanks',  objectPosition: 'center 50%', matchPhrase: `¡Perfecto! Gracias means THANK YOU! Hands on heart!` },
            { image: 'l01-game-porfavor.png', label: `¡Por favor!`,  correctMatch: 'please',  objectPosition: 'center 50%', matchPhrase: `¡Sí, sí! Por favor means PLEASE! Always ask nicely!` },
          ],
          buckets: [
            { id: 'hello',   label: `Hello`,    color: '#FBBF24' },
            { id: 'goodbye', label: `Goodbye`,  color: '#A78BFA' },
            { id: 'thanks',  label: `Thank You`, color: '#F472B6' },
            { id: 'please',  label: `Please`,   color: '#34D399' },
          ],
        },

        // PHASE 4 — MASTERY QUIZ (recognition, not translation)
        {
          type:      'quiz',
          guideText: `¡Quiz time, {name}! Answer all 6 questions to earn your Spanish Starter badge! ¡Vamos!`,
          questions: [
            { format: 'multiple-choice', question: `What does "¡Hola!" mean?`,
              options: [`Goodbye`, `Hello`, `Thank you`, `Please`],
              correctIndex: 1 },
            { format: 'multiple-choice', question: `What does "¡Adiós!" mean?`,
              options: [`Hello`, `Yes`, `Goodbye`, `No`],
              correctIndex: 2 },
            { format: 'multiple-choice', question: `If you want to say YES in Spanish, you say...`,
              options: [`No`, `Sí`, `Hola`, `Adiós`],
              correctIndex: 1 },
            { format: 'true-false', question: `"Gracias" means THANK YOU in Spanish.`,
              correctAnswer: true },
            { format: 'multiple-choice', question: `When you ask for something nicely, you say...`,
              options: [`Adiós`, `No`, `Por favor`, `Olé`],
              correctIndex: 2 },
            { format: 'fill-blank', question: `When you see a friend, you wave and say "¡___!"`,
              options: [`Hola`, `Adiós`, `No`, `Gracias`],
              correctIndex: 0 },
          ],
        },

        // PHASE 5 — REAL-WORLD CONNECTION (TPR with family)
        {
          type:            'real-world',
          guideText:       `¡Buen trabajo, {name}! That means GREAT JOB! Now let's bring Spanish into your real life — Spanish is for USING, not just learning!`,
          familyAdventure: `Today, try saying ¡HOLA! to everyone in your family when you see them. And ¡ADIÓS! when you leave a room. Use ¡GRACIAS! when someone helps you, and ¡POR FAVOR! when you ask for something. Make it a game — how many Spanish words can you use today?`,
          creativePrompt:  `Make a "Spanish Word Card" for your room. Get a piece of paper. Draw 6 boxes. In each one, draw or write: HOLA (a wave), ADIÓS (a wave goodbye), SÍ (a nod), NO (a head shake), GRACIAS (hands on heart), POR FAVOR (hands together). Tape it on your wall. Practice every morning!`,
        },

        // PHASE 6 — CELEBRATION
        {
          type:      'celebration',
          xpEarned:  50,
          badge:     'spanish-starter',
          badgeName: `Spanish Starter`,
          message:   `¡MUY BIEN, {name}! That means VERY GOOD! You just learned SIX real Spanish words: hola, adiós, sí, no, gracias, por favor. You can ALREADY have a tiny conversation with a Spanish-speaking kid! That's amazing for your first lesson. Luna is so proud of you. ¡Hasta luego, mi amigo! That means: see you later, my friend!`,
        },
      ],
    },
  ],
};

// Log on module load — confirms lesson wired correctly + verifies image assets at runtime
(() => {
  const l    = spanish_explorer_l01_screens.lessons[0];
  const mags = l.screens.filter(s => s.type === 'magazine').length;
  const game = l.screens.find(s => s.type === 'interactive')?.items?.length || 0;
  const quiz = l.screens.find(s => s.type === 'quiz')?.questions?.length || 0;
  console.log(`[LESSON-SPANISH-L01] Loaded: "Hola y Adiós" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
  Promise.all([
    fetch('/explorer-assets/languages/l01-s1-hola.png',      { method: 'HEAD' }),
    fetch('/explorer-assets/languages/l01-s2-adios.png',     { method: 'HEAD' }),
    fetch('/explorer-assets/languages/l01-s3-si-no.png',     { method: 'HEAD' }),
    fetch('/explorer-assets/languages/l01-s4-gracias.png',   { method: 'HEAD' }),
    fetch('/explorer-assets/languages/l01-s5-por-favor.png', { method: 'HEAD' }),
    fetch('/explorer-assets/languages/l01-s6-chant.png',     { method: 'HEAD' }),
  ]).then(([r1, r2, r3, r4, r5, r6]) => {
    console.log(`[ASSET-CHECK-SPANISH-L01] s1: ${r1.ok}, s2: ${r2.ok}, s3: ${r3.ok}, s4: ${r4.ok}, s5: ${r5.ok}, s6: ${r6.ok}`);
  }).catch(() => {
    console.log('[ASSET-CHECK-SPANISH-L01] Could not verify image assets — network check failed');
  });
})();

export default spanish_explorer_l01_screens;
