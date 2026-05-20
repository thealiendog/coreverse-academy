// ============================================================
// COREVERSE EXPLORERS — Spanish · Lesson 5
// "Mi Cuerpo: My Body in Spanish"
// Ages 6–8 | Guide: Luna the Parrot
// ============================================================

const spanish_explorer_l05_screens = {
  ageBand:   'explorers',
  subjectId: 'languages',
  guide:     'luna',
  lessons: [
    {
      id:        'sp-6-8-05',
      title:     `Mi Cuerpo: My Body in Spanish`,
      duration:  12,
      xpReward:  50,
      badge:     'body-mover',
      badgeName: `Body Mover`,
      screens: [
        {
          type:      'welcome',
          guideText: `¡Hola, {name}! Today you learn BODY parts in Spanish! Touch your head — CABEZA! Touch your nose — NARIZ! Stand up and move with Luna. This is the BEST kind of lesson — let's go! ¡Vamos!`,
        },
        {
          type:          'magazine',
          section:       1,
          totalSections: 6,
          headline:      `¡Cabeza y Pelo! (Say: kah-BEH-sah and PEH-lo)`,
          paragraphs: [
            `CABEZA means HEAD! Touch your head! PELO means HAIR! Touch your hair!`,
            `Try it! Touch your cabeza: ¡CABEZA! Touch your pelo: ¡PELO! Easy, right?`,
          ],
          image:        '/explorer-assets/languages/l05-s1-cabeza-pelo.png',
          imageCaption: `¡Cabeza! Head. ¡Pelo! Hair.`,
          vocab: [
            { word: 'cabeza', definition: `Head in Spanish. Say it like: kah-BEH-sah.`,                         audioPrompt: `Cabeza — say it like kah-BEH-sah. Cabeza means head. Touch your cabeza!` },
            { word: 'pelo',   definition: `Hair in Spanish. Say it like: PEH-lo.`,                              audioPrompt: `Pelo — say it like PEH-lo. Pelo means hair. Touch your pelo!` },
          ],
        },
        {
          type:          'magazine',
          section:       2,
          totalSections: 6,
          headline:      `¡Ojos y Nariz! (Say: OH-hos and nah-REES)`,
          paragraphs: [
            `OJOS means EYES! Point to your eyes! NARIZ means NOSE! Touch your nose!`,
            `Say it! Point to your ojos: ¡OJOS! Touch your nariz: ¡NARIZ! You have TWO ojos and ONE nariz!`,
          ],
          image:        '/explorer-assets/languages/l05-s2-ojos-nariz.png',
          imageCaption: `¡Ojos! Eyes. ¡Nariz! Nose.`,
          vocab: [
            { word: 'ojos',  definition: `Eyes in Spanish. Say it like: OH-hos.`,                               audioPrompt: `Ojos — say it like OH-hos. Ojos means eyes. Point to your ojos!` },
            { word: 'nariz', definition: `Nose in Spanish. Say it like: nah-REES.`,                             audioPrompt: `Nariz — say it like nah-REES. Nariz means nose. Touch your nariz!` },
          ],
        },
        {
          type:          'magazine',
          section:       3,
          totalSections: 6,
          headline:      `¡Boca y Orejas! (Say: BO-kah and oh-REH-hahs)`,
          paragraphs: [
            `BOCA means MOUTH! Open your mouth! OREJAS means EARS! Wiggle your ears (or try!).`,
            `Say it: ¡BOCA! ¡OREJAS! Use your boca to talk, your orejas to listen!`,
          ],
          image:        '/explorer-assets/languages/l05-s3-boca-orejas.png',
          imageCaption: `¡Boca! Mouth. ¡Orejas! Ears.`,
          vocab: [
            { word: 'boca',   definition: `Mouth in Spanish. Say it like: BO-kah.`,                              audioPrompt: `Boca — say it like BO-kah. Boca means mouth. Open your boca!` },
            { word: 'orejas', definition: `Ears in Spanish. Say it like: oh-REH-hahs.`,                          audioPrompt: `Orejas — say it like oh-REH-hahs. Orejas means ears. Wiggle your orejas!` },
          ],
        },
        {
          type:          'magazine',
          section:       4,
          totalSections: 6,
          headline:      `¡Manos y Pies! (Say: MAH-nos and pee-EHS)`,
          paragraphs: [
            `MANOS means HANDS! Clap your hands! PIES means FEET! Stomp your feet!`,
            `Try it! Clap your manos: ¡MANOS! Stomp your pies: ¡PIES! ¡MANOS! ¡PIES!`,
          ],
          image:        '/explorer-assets/languages/l05-s4-manos-pies.png',
          imageCaption: `¡Manos! Hands. ¡Pies! Feet.`,
          vocab: [
            { word: 'manos', definition: `Hands in Spanish. Say it like: MAH-nos.`,                              audioPrompt: `Manos — say it like MAH-nos. Manos means hands. Clap your manos!` },
            { word: 'pies',  definition: `Feet in Spanish. Say it like: pee-EHS.`,                               audioPrompt: `Pies — say it like pee-EHS. Pies means feet. Stomp your pies!` },
          ],
        },
        {
          type:          'magazine',
          section:       5,
          totalSections: 6,
          headline:      `Simón Dice! (Simon Says!)`,
          paragraphs: [
            `Let's play Simón Dice — Simon Says in Spanish! Listen to Luna!`,
            `Simón dice: ¡TOCA TU CABEZA! (Touch your head!) Simón dice: ¡TOCA TU NARIZ! Simón dice: ¡TOCA TUS PIES!`,
          ],
          image:        '/explorer-assets/languages/l05-s5-simon-dice.png',
          imageCaption: `Simón Dice — Simon Says in Spanish!`,
          vocab: [
            { word: 'simón dice', definition: `Simon says in Spanish. The fun game where you do what Simon says!`, audioPrompt: `Simón dice — Simon says! Simón dice toca tu cabeza! Touch your head! Simón dice toca tu nariz!` },
            { word: 'toca',       definition: `Touch in Spanish. Say it like: TOH-kah.`,                            audioPrompt: `Toca — say it like TOH-kah. Toca means touch!` },
          ],
        },
        {
          type:          'magazine',
          section:       6,
          totalSections: 6,
          headline:      `Luna's Body Chant!`,
          paragraphs: [
            `Time to CHANT! Touch each body part as you say it!`,
            `¡CABEZA! ¡OJOS! ¡NARIZ! ¡BOCA! ¡MANOS! ¡PIES! ¡CABEZA! ¡OJOS! ¡NARIZ! ¡BOCA! ¡MANOS! ¡PIES! ¡OLÉ!`,
          ],
          image:        '/explorer-assets/languages/l05-s6-chant.png',
          imageCaption: `Touch and chant!`,
          vocab: [
            { word: 'body',  definition: `All of you — your head, arms, legs, and everything!`,                  audioPrompt: `Body — all of you. Touch each part and chant! Cabeza! Ojos! Nariz! Boca! Manos! Pies! Cabeza! Ojos! Nariz! Boca! Manos! Pies! Olé!` },
            { word: 'move',  definition: `When your body goes — like walking, dancing, jumping.`,                audioPrompt: `Move — when your body goes. Move your body to the chant!` },
          ],
        },
        {
          type:          'interactive',
          activityType:  'drag-match',
          instruction:   `Match each Spanish body word to the right English word!`,
          guideText:     `Tap a Spanish word, then tap what part of the body it is!`,
          columnHeaders: [`Spanish Word`, `Body Part`],
          items: [
            { image: 'l05-game-cabeza.png', label: `Cabeza`, correctMatch: 'head',  objectPosition: 'center 50%', matchPhrase: `¡Sí! Cabeza means HEAD! Touch your head!` },
            { image: 'l05-game-ojos.png',   label: `Ojos`,   correctMatch: 'eyes',  objectPosition: 'center 50%', matchPhrase: `¡Muy bien! Ojos means EYES! Two of them!` },
            { image: 'l05-game-manos.png',  label: `Manos`,  correctMatch: 'hands', objectPosition: 'center 50%', matchPhrase: `¡Perfecto! Manos means HANDS! Clap them!` },
            { image: 'l05-game-pies.png',   label: `Pies`,   correctMatch: 'feet',  objectPosition: 'center 50%', matchPhrase: `¡Sí, sí! Pies means FEET! Stomp them!` },
          ],
          buckets: [
            { id: 'head',  label: `Head`,  color: '#FBBF24' },
            { id: 'eyes',  label: `Eyes`,  color: '#60A5FA' },
            { id: 'hands', label: `Hands`, color: '#F472B6' },
            { id: 'feet',  label: `Feet`,  color: '#34D399' },
          ],
        },
        {
          type:      'quiz',
          guideText: `¡Quiz time, {name}! Answer all 6 questions to earn your Body Mover badge!`,
          questions: [
            { format: 'multiple-choice', question: `What does "cabeza" mean?`,
              options: [`Hand`, `Head`, `Foot`, `Eye`],
              correctIndex: 1 },
            { format: 'multiple-choice', question: `What does "ojos" mean?`,
              options: [`Ears`, `Mouth`, `Eyes`, `Nose`],
              correctIndex: 2 },
            { format: 'multiple-choice', question: `Which Spanish word means HANDS?`,
              options: [`Pies`, `Manos`, `Nariz`, `Boca`],
              correctIndex: 1 },
            { format: 'true-false', question: `"Pies" means FEET in Spanish.`,
              correctAnswer: true },
            { format: 'fill-blank', question: `Your ___ helps you talk and eat!`,
              options: [`boca`, `pelo`, `pies`, `ojos`],
              correctIndex: 0 },
            { format: 'multiple-choice', question: `If Luna says "toca tu nariz" — what do you touch?`,
              options: [`Your hands`, `Your nose`, `Your feet`, `Your mouth`],
              correctIndex: 1 },
          ],
        },
        {
          type:            'real-world',
          guideText:       `¡Muy bien, {name}! Now let's MOVE in Spanish!`,
          familyAdventure: `Play "Simón Dice" with your family! Take turns being Simón. Say things like "Simón dice TOCA TU CABEZA!" "Simón dice STOMP TUS PIES!" Make them move!`,
          creativePrompt:  `Draw a "Body Map" of yourself. Draw a big YOU on a paper. Then label all 6 body parts in Spanish: CABEZA, OJOS, NARIZ, BOCA, MANOS, PIES. Hang it on your wall!`,
        },
        {
          type:      'celebration',
          xpEarned:  50,
          badge:     'body-mover',
          badgeName: `Body Mover`,
          message:   `¡EXCELENTE, {name}! You can name 6 body parts in Spanish! Plus you played Simón Dice — that's REAL Spanish kids play. Luna is so proud! ¡Hasta luego, mi amigo!`,
        },
      ],
    },
  ],
};

(() => {
  const l    = spanish_explorer_l05_screens.lessons[0];
  const mags = l.screens.filter(s => s.type === 'magazine').length;
  const game = l.screens.find(s => s.type === 'interactive')?.items?.length || 0;
  const quiz = l.screens.find(s => s.type === 'quiz')?.questions?.length || 0;
  console.log(`[LESSON-SPANISH-L05] Loaded: "Mi Cuerpo" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
  Promise.all([
    fetch('/explorer-assets/languages/l05-s1-cabeza-pelo.png', { method: 'HEAD' }),
    fetch('/explorer-assets/languages/l05-s2-ojos-nariz.png',  { method: 'HEAD' }),
    fetch('/explorer-assets/languages/l05-s3-boca-orejas.png', { method: 'HEAD' }),
    fetch('/explorer-assets/languages/l05-s4-manos-pies.png',  { method: 'HEAD' }),
    fetch('/explorer-assets/languages/l05-s5-simon-dice.png',  { method: 'HEAD' }),
    fetch('/explorer-assets/languages/l05-s6-chant.png',       { method: 'HEAD' }),
  ]).then(([r1, r2, r3, r4, r5, r6]) => {
    console.log(`[ASSET-CHECK-SPANISH-L05] s1: ${r1.ok}, s2: ${r2.ok}, s3: ${r3.ok}, s4: ${r4.ok}, s5: ${r5.ok}, s6: ${r6.ok}`);
  }).catch(() => {
    console.log('[ASSET-CHECK-SPANISH-L05] Could not verify image assets — network check failed');
  });
})();

export default spanish_explorer_l05_screens;
