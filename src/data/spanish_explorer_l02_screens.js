// ============================================================
// COREVERSE EXPLORERS — Spanish · Lesson 2
// "¡Uno, Dos, Tres! Numbers 1 to 6"
// Ages 6–8 | Guide: Luna the Parrot | ExplorerLessonPlayer format
// Calibration: TPR (finger counting) + chant + 6 words
// ============================================================

const spanish_explorer_l02_screens = {
  ageBand:   'explorers',
  subjectId: 'languages',
  guide:     'luna',
  lessons: [
    {
      id:        'sp-6-8-02',
      title:     `¡Uno, Dos, Tres! Numbers 1 to 6 in Spanish`,
      duration:  12,
      xpReward:  50,
      badge:     'number-counter',
      badgeName: `Number Counter`,
      screens: [
        {
          type:      'welcome',
          guideText: `¡Hola, {name}! Today you learn to COUNT in Spanish! Hold up your fingers and count with me: ¡UNO! ¡DOS! ¡TRES! ¡CUATRO! ¡CINCO! ¡SEIS! Each number gets a finger. By the end you'll count to SIX in Spanish! ¿Listo? Ready? ¡Vamos!`,
        },
        {
          type:          'magazine',
          section:       1,
          totalSections: 6,
          headline:      `¡Uno y Dos! (Say: OO-no and DOS)`,
          paragraphs: [
            `UNO means ONE. Hold up ONE finger! DOS means TWO. Hold up TWO fingers!`,
            `Say it with Luna! Hold up one finger: ¡UNO! Hold up two fingers: ¡DOS! ¡Uno, dos! ¡Uno, dos!`,
          ],
          image:        '/explorer-assets/languages/l02-s1-uno-dos.png',
          imageCaption: `¡Uno! One finger. ¡Dos! Two fingers.`,
          vocab: [
            { word: 'uno', definition: `One in Spanish. Say it like: OO-no.`,                                  audioPrompt: `Uno — say it like OO-no. Uno means one. Hold up one finger. Uno!` },
            { word: 'dos', definition: `Two in Spanish. Say it like: DOS.`,                                    audioPrompt: `Dos — say it like DOS. Dos means two. Hold up two fingers. Dos!` },
          ],
        },
        {
          type:          'magazine',
          section:       2,
          totalSections: 6,
          headline:      `¡Tres y Cuatro! (Say: TRESS and KWAH-tro)`,
          paragraphs: [
            `TRES means THREE. Hold up THREE fingers! CUATRO means FOUR. Hold up FOUR fingers!`,
            `Try them: ¡TRES! ¡CUATRO! ¡TRES! ¡CUATRO! Your hand is filling up with fingers!`,
          ],
          image:        '/explorer-assets/languages/l02-s2-tres-cuatro.png',
          imageCaption: `¡Tres! Three fingers. ¡Cuatro! Four fingers.`,
          vocab: [
            { word: 'tres',   definition: `Three in Spanish. Say it like: TRESS.`,                              audioPrompt: `Tres — say it like TRESS. Tres means three. Hold up three fingers. Tres!` },
            { word: 'cuatro', definition: `Four in Spanish. Say it like: KWAH-tro.`,                            audioPrompt: `Cuatro — say it like KWAH-tro. Cuatro means four. Hold up four fingers. Cuatro!` },
          ],
        },
        {
          type:          'magazine',
          section:       3,
          totalSections: 6,
          headline:      `¡Cinco y Seis! (Say: SEEN-ko and SAYS)`,
          paragraphs: [
            `CINCO means FIVE. Show me your whole HAND — five fingers! SEIS means SIX. Hold up one finger from your other hand!`,
            `Try them! ¡CINCO! ¡SEIS! Now you can count all the way to SIX in Spanish!`,
          ],
          image:        '/explorer-assets/languages/l02-s3-cinco-seis.png',
          imageCaption: `¡Cinco! Whole hand! ¡Seis! Six fingers!`,
          vocab: [
            { word: 'cinco', definition: `Five in Spanish. Say it like: SEEN-ko.`,                              audioPrompt: `Cinco — say it like SEEN-ko. Cinco means five. Show your whole hand. Cinco!` },
            { word: 'seis',  definition: `Six in Spanish. Say it like: SAYS.`,                                  audioPrompt: `Seis — say it like SAYS. Seis means six. Six fingers! Seis!` },
          ],
        },
        {
          type:          'magazine',
          section:       4,
          totalSections: 6,
          headline:      `Count Up!`,
          paragraphs: [
            `Now let's count UP! Hold up one finger at a time and count with Luna.`,
            `¡UNO! ¡DOS! ¡TRES! ¡CUATRO! ¡CINCO! ¡SEIS! ¡SEIS fingers! You did it!`,
          ],
          image:        '/explorer-assets/languages/l02-s4-count-up.png',
          imageCaption: `Count up: uno, dos, tres, cuatro, cinco, seis!`,
          vocab: [
            { word: 'count',  definition: `To say numbers one after another, like 1, 2, 3.`,                    audioPrompt: `Count — to say numbers one after another. Let's count in Spanish! Uno, dos, tres, cuatro, cinco, seis!` },
            { word: 'finger', definition: `One of the 5 things on your hand!`,                                  audioPrompt: `Finger — one of the five things on your hand. Hold up your fingers to count!` },
          ],
        },
        {
          type:          'magazine',
          section:       5,
          totalSections: 6,
          headline:      `Count Down!`,
          paragraphs: [
            `Now count DOWN! Start with all six fingers and put one down each time.`,
            `¡SEIS! ¡CINCO! ¡CUATRO! ¡TRES! ¡DOS! ¡UNO! ¡CERO! Cero means zero! No fingers left!`,
          ],
          image:        '/explorer-assets/languages/l02-s5-count-down.png',
          imageCaption: `Count down: seis, cinco, cuatro, tres, dos, uno!`,
          vocab: [
            { word: 'count down', definition: `To say numbers going backwards — like 6, 5, 4, 3, 2, 1!`,        audioPrompt: `Count down — to say numbers going backwards. Seis, cinco, cuatro, tres, dos, uno!` },
            { word: 'cero',       definition: `Zero in Spanish. Say it like: SEH-ro.`,                          audioPrompt: `Cero — say it like SEH-ro. Cero means zero. No fingers up!` },
          ],
        },
        {
          type:          'magazine',
          section:       6,
          totalSections: 6,
          headline:      `Luna's Number Chant!`,
          paragraphs: [
            `Time to CHANT! Clap your hands to each number. Say it loud!`,
            `¡UNO, DOS, TRES! ¡CUATRO, CINCO, SEIS! ¡UNO, DOS, TRES! ¡CUATRO, CINCO, SEIS! ¡OLÉ!`,
          ],
          image:        '/explorer-assets/languages/l02-s6-chant.png',
          imageCaption: `Clap and chant the numbers!`,
          vocab: [
            { word: 'rhythm', definition: `A pattern of beats — like clap, clap, clap.`,                        audioPrompt: `Rhythm — a pattern of beats. Let's chant! Uno, dos, tres! Cuatro, cinco, seis! Uno, dos, tres! Cuatro, cinco, seis! Olé!` },
            { word: 'clap',   definition: `When you put your hands together to make a sound.`,                  audioPrompt: `Clap — when you put your hands together to make a sound. Clap to the chant!` },
          ],
        },
        {
          type:          'interactive',
          activityType:  'drag-match',
          instruction:   `Match each Spanish number to the right amount!`,
          guideText:     `Tap a Spanish number, then tap how many it means. ¡Vamos, {name}!`,
          columnHeaders: [`Spanish Number`, `How Many?`],
          items: [
            { image: 'l02-game-uno.png',    label: `¡Uno!`,    correctMatch: 'one',   objectPosition: 'center 50%', matchPhrase: `¡Sí! Uno is ONE! One finger!` },
            { image: 'l02-game-tres.png',   label: `¡Tres!`,   correctMatch: 'three', objectPosition: 'center 50%', matchPhrase: `¡Muy bien! Tres is THREE! Three fingers!` },
            { image: 'l02-game-cinco.png',  label: `¡Cinco!`,  correctMatch: 'five',  objectPosition: 'center 50%', matchPhrase: `¡Perfecto! Cinco is FIVE! Whole hand!` },
            { image: 'l02-game-seis.png',   label: `¡Seis!`,   correctMatch: 'six',   objectPosition: 'center 50%', matchPhrase: `¡Sí, sí! Seis is SIX! Six fingers!` },
          ],
          buckets: [
            { id: 'one',   label: `1 (one)`,   color: '#FBBF24' },
            { id: 'three', label: `3 (three)`, color: '#A78BFA' },
            { id: 'five',  label: `5 (five)`,  color: '#F472B6' },
            { id: 'six',   label: `6 (six)`,   color: '#34D399' },
          ],
        },
        {
          type:      'quiz',
          guideText: `¡Quiz time, {name}! Answer all 6 questions to earn your Number Counter badge!`,
          questions: [
            { format: 'multiple-choice', question: `What does "uno" mean?`,
              options: [`Two`, `One`, `Three`, `Four`],
              correctIndex: 1 },
            { format: 'multiple-choice', question: `What does "tres" mean?`,
              options: [`Three`, `Four`, `Five`, `Six`],
              correctIndex: 0 },
            { format: 'multiple-choice', question: `Which number is FIVE in Spanish?`,
              options: [`Seis`, `Cuatro`, `Cinco`, `Dos`],
              correctIndex: 2 },
            { format: 'true-false', question: `"Seis" means SIX in Spanish.`,
              correctAnswer: true },
            { format: 'fill-blank', question: `Count with Luna: uno, dos, ___, cuatro!`,
              options: [`tres`, `cinco`, `seis`, `cero`],
              correctIndex: 0 },
            { format: 'multiple-choice', question: `Which is the SMALLEST number?`,
              options: [`Cinco`, `Tres`, `Uno`, `Seis`],
              correctIndex: 2 },
          ],
        },
        {
          type:            'real-world',
          guideText:       `¡Muy bien, {name}! Now let's bring your numbers into real life. Counting in Spanish is FUN!`,
          familyAdventure: `At dinner tonight, count the people at the table in Spanish! "¡Uno! ¡Dos! ¡Tres! ¡Cuatro!" Then count things on the table — plates, cups, forks. How high can you count tonight in Spanish?`,
          creativePrompt:  `Make a "Number Hand" poster. Trace your hand on paper. On each finger, write a Spanish number: pulgar (thumb) = UNO, then DOS, TRES, CUATRO, CINCO. Add a SEIS finger from your other hand. Color it bright!`,
        },
        {
          type:      'celebration',
          xpEarned:  50,
          badge:     'number-counter',
          badgeName: `Number Counter`,
          message:   `¡EXCELENTE, {name}! You can count to SEIS in Spanish! Spanish-speaking kids from Mexico to Spain to Colombia count the same way. You just joined them! Luna is so proud. ¡Hasta luego, mi amigo!`,
        },
      ],
    },
  ],
};

(() => {
  const l    = spanish_explorer_l02_screens.lessons[0];
  const mags = l.screens.filter(s => s.type === 'magazine').length;
  const game = l.screens.find(s => s.type === 'interactive')?.items?.length || 0;
  const quiz = l.screens.find(s => s.type === 'quiz')?.questions?.length || 0;
  console.log(`[LESSON-SPANISH-L02] Loaded: "Uno Dos Tres" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
  Promise.all([
    fetch('/explorer-assets/languages/l02-s1-uno-dos.png',     { method: 'HEAD' }),
    fetch('/explorer-assets/languages/l02-s2-tres-cuatro.png', { method: 'HEAD' }),
    fetch('/explorer-assets/languages/l02-s3-cinco-seis.png',  { method: 'HEAD' }),
    fetch('/explorer-assets/languages/l02-s4-count-up.png',    { method: 'HEAD' }),
    fetch('/explorer-assets/languages/l02-s5-count-down.png',  { method: 'HEAD' }),
    fetch('/explorer-assets/languages/l02-s6-chant.png',       { method: 'HEAD' }),
  ]).then(([r1, r2, r3, r4, r5, r6]) => {
    console.log(`[ASSET-CHECK-SPANISH-L02] s1: ${r1.ok}, s2: ${r2.ok}, s3: ${r3.ok}, s4: ${r4.ok}, s5: ${r5.ok}, s6: ${r6.ok}`);
  }).catch(() => {
    console.log('[ASSET-CHECK-SPANISH-L02] Could not verify image assets — network check failed');
  });
})();

export default spanish_explorer_l02_screens;
