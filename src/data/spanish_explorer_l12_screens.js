// ============================================================
// COREVERSE EXPLORERS — Spanish · Lesson 12
// "¡Mi Casa! My Home in Spanish"
// ============================================================

const spanish_explorer_l12_screens = {
  ageBand:   'explorers',
  subjectId: 'languages',
  guide:     'luna',
  lessons: [
    {
      id:        'sp-6-8-12',
      title:     `¡Mi Casa! My Home in Spanish`,
      duration:  12,
      xpReward:  50,
      badge:     'home-helper',
      badgeName: `Home Helper`,
      screens: [
        {
          type:      'welcome',
          guideText: `¡Hola, {name}! Today: HOME in Spanish! ¡Mi casa! Bedroom, kitchen, bathroom — every room in your house has a Spanish name! ¡Vamos!`,
        },
        {
          type:          'magazine', section: 1, totalSections: 6,
          headline:      `¡Casa! (Say: KAH-sah)`,
          paragraphs: [
            `CASA means HOUSE! "Mi casa" means "my house."`,
            `Open your arms wide and say: ¡MI CASA! ¡MI CASA! Welcome to your home in Spanish!`,
          ],
          image:        '/explorer-assets/languages/l12-s1-casa.png',
          imageCaption: `¡Mi casa! My home!`,
          vocab: [
            { word: 'casa', definition: `House in Spanish. Say: KAH-sah.`,                                    audioPrompt: `Casa — say it like KAH-sah. Casa means house!` },
            { word: 'mi casa', definition: `My house in Spanish!`,                                            audioPrompt: `Mi casa — my house! Mi casa!` },
          ],
        },
        {
          type:          'magazine', section: 2, totalSections: 6,
          headline:      `¡Cuarto y Cama! (Say: KWAR-toh and KAH-mah)`,
          paragraphs: [
            `CUARTO means ROOM! CAMA means BED!`,
            `Point to where you sleep: ¡CUARTO! Lay your hands like a bed: ¡CAMA! ¡CUARTO! ¡CAMA!`,
          ],
          image:        '/explorer-assets/languages/l12-s2-cuarto-cama.png',
          imageCaption: `¡Cuarto! Room. ¡Cama! Bed.`,
          vocab: [
            { word: 'cuarto', definition: `Room in Spanish. Say: KWAR-toh.`,                                  audioPrompt: `Cuarto — say it like KWAR-toh. Cuarto means room!` },
            { word: 'cama',   definition: `Bed in Spanish. Say: KAH-mah.`,                                    audioPrompt: `Cama — say it like KAH-mah. Cama means bed!` },
          ],
        },
        {
          type:          'magazine', section: 3, totalSections: 6,
          headline:      `¡Cocina! (Say: ko-SEE-nah)`,
          paragraphs: [
            `COCINA means KITCHEN! It's where food is made!`,
            `Pretend to cook: ¡COCINA! "En la cocina hay comida" means "In the kitchen there's food!"`,
          ],
          image:        '/explorer-assets/languages/l12-s3-cocina.png',
          imageCaption: `¡Cocina! Kitchen!`,
          vocab: [
            { word: 'cocina', definition: `Kitchen in Spanish. Say: ko-SEE-nah.`,                            audioPrompt: `Cocina — say it like ko-SEE-nah. Cocina means kitchen!` },
            { word: 'cocinar', definition: `To cook in Spanish! Say: ko-see-NAR.`,                            audioPrompt: `Cocinar — say it like ko-see-NAR. Cocinar means to cook!` },
          ],
        },
        {
          type:          'magazine', section: 4, totalSections: 6,
          headline:      `¡Baño! (Say: BAH-nyo)`,
          paragraphs: [
            `BAÑO means BATHROOM! Notice the ñ — it makes a "ny" sound!`,
            `Pretend to wash your hands: ¡BAÑO! Spanish kids say "Voy al baño" — "I'm going to the bathroom!"`,
          ],
          image:        '/explorer-assets/languages/l12-s4-bano.png',
          imageCaption: `¡Baño! Bathroom!`,
          vocab: [
            { word: 'baño',  definition: `Bathroom in Spanish. Say: BAH-nyo.`,                                audioPrompt: `Baño — say it like BAH-nyo. Baño means bathroom!` },
            { word: 'agua',  definition: `Water in Spanish — for washing! Say: AH-gwah.`,                     audioPrompt: `Agua — water! For washing hands.` },
          ],
        },
        {
          type:          'magazine', section: 5, totalSections: 6,
          headline:      `¡Puerta y Ventana! (Say: PWEHR-tah and ven-TAH-nah)`,
          paragraphs: [
            `PUERTA means DOOR! VENTANA means WINDOW!`,
            `Pretend to open a door: ¡PUERTA! Pretend to look through a window: ¡VENTANA!`,
          ],
          image:        '/explorer-assets/languages/l12-s5-puerta-ventana.png',
          imageCaption: `¡Puerta! Door. ¡Ventana! Window.`,
          vocab: [
            { word: 'puerta',  definition: `Door in Spanish. Say: PWEHR-tah.`,                                audioPrompt: `Puerta — say it like PWEHR-tah. Puerta means door!` },
            { word: 'ventana', definition: `Window in Spanish. Say: ven-TAH-nah.`,                            audioPrompt: `Ventana — say it like ven-TAH-nah. Ventana means window!` },
          ],
        },
        {
          type:          'magazine', section: 6, totalSections: 6,
          headline:      `Luna's Home Chant!`,
          paragraphs: [
            `Time to CHANT through your casa!`,
            `¡CASA! ¡CUARTO! ¡CAMA! ¡COCINA! ¡BAÑO! ¡PUERTA! ¡VENTANA! ¡OLÉ!`,
          ],
          image:        '/explorer-assets/languages/l12-s6-chant.png',
          imageCaption: `Walk through your casa as you chant!`,
          vocab: [
            { word: 'home', definition: `Where you live — your house and family!`,                            audioPrompt: `Home — where you live. Chant! Casa! Cuarto! Cama! Cocina! Baño! Puerta! Ventana! Olé!` },
            { word: 'live', definition: `To stay in a place — where you live with your family!`,              audioPrompt: `Live — to stay in a place. You live in your casa!` },
          ],
        },
        {
          type:          'interactive',
          activityType:  'drag-match',
          instruction:   `Match each Spanish room word to the right English word!`,
          guideText:     `Tap a Spanish home word, then tap what it is!`,
          columnHeaders: [`Spanish`, `English`],
          items: [
            { image: 'l12-game-casa.png',    label: `Casa`,    correctMatch: 'house',    objectPosition: 'center 50%', matchPhrase: `¡Sí! Casa is HOUSE!` },
            { image: 'l12-game-cocina.png',  label: `Cocina`,  correctMatch: 'kitchen',  objectPosition: 'center 50%', matchPhrase: `¡Muy bien! Cocina is KITCHEN!` },
            { image: 'l12-game-bano.png',    label: `Baño`,    correctMatch: 'bathroom', objectPosition: 'center 50%', matchPhrase: `¡Perfecto! Baño is BATHROOM!` },
            { image: 'l12-game-cama.png',    label: `Cama`,    correctMatch: 'bed',      objectPosition: 'center 50%', matchPhrase: `¡Sí, sí! Cama is BED!` },
          ],
          buckets: [
            { id: 'house',    label: `House`,    color: '#FBBF24' },
            { id: 'kitchen',  label: `Kitchen`,  color: '#EF4444' },
            { id: 'bathroom', label: `Bathroom`, color: '#60A5FA' },
            { id: 'bed',      label: `Bed`,      color: '#A78BFA' },
          ],
        },
        {
          type:      'quiz',
          guideText: `¡Quiz time, {name}! Earn your Home Helper badge!`,
          questions: [
            { format: 'multiple-choice', question: `What does "casa" mean?`,                                                    options: [`Room`, `House`, `Bed`, `Door`],                correctIndex: 1 },
            { format: 'multiple-choice', question: `What does "cocina" mean?`,                                                  options: [`Bathroom`, `Room`, `Kitchen`, `Window`],        correctIndex: 2 },
            { format: 'multiple-choice', question: `Which Spanish word means BED?`,                                             options: [`Cuarto`, `Cama`, `Puerta`, `Cocina`],          correctIndex: 1 },
            { format: 'true-false', question: `"Baño" means BATHROOM in Spanish.`,                                              correctAnswer: true },
            { format: 'fill-blank', question: `You open a ___ to go inside.`,                                                   options: [`puerta`, `cama`, `cocina`, `mesa`],            correctIndex: 0 },
            { format: 'multiple-choice', question: `Which is WINDOW in Spanish?`,                                               options: [`Puerta`, `Cuarto`, `Ventana`, `Casa`],         correctIndex: 2 },
          ],
        },
        {
          type:            'real-world',
          guideText:       `¡Muy bien, {name}! Walk through your home in Spanish!`,
          familyAdventure: `Walk through your home with your family. In each room, say the Spanish name! "¡COCINA!" in the kitchen. "¡BAÑO!" in the bathroom. "¡CUARTO!" in your bedroom. Open the PUERTA, look out the VENTANA!`,
          creativePrompt:  `Draw a map of your CASA! Show each room. Label each one in Spanish — COCINA, BAÑO, CUARTO. Add little PUERTAS and VENTANAS!`,
        },
        {
          type:      'celebration',
          xpEarned:  50,
          badge:     'home-helper',
          badgeName: `Home Helper`,
          message:   `¡EXCELENTE, {name}! Now your CASA is bilingual! Every room has a Spanish name. Luna is so proud! ¡Hasta luego, mi amigo!`,
        },
      ],
    },
  ],
};

(() => {
  console.log(`[LESSON-SPANISH-L12] Loaded`);
  Promise.all([
    fetch('/explorer-assets/languages/l12-s1-casa.png',            { method: 'HEAD' }),
    fetch('/explorer-assets/languages/l12-s2-cuarto-cama.png',     { method: 'HEAD' }),
    fetch('/explorer-assets/languages/l12-s3-cocina.png',          { method: 'HEAD' }),
    fetch('/explorer-assets/languages/l12-s4-bano.png',            { method: 'HEAD' }),
    fetch('/explorer-assets/languages/l12-s5-puerta-ventana.png',  { method: 'HEAD' }),
    fetch('/explorer-assets/languages/l12-s6-chant.png',           { method: 'HEAD' }),
  ]).then(([r1, r2, r3, r4, r5, r6]) => {
    console.log(`[ASSET-CHECK-SPANISH-L12] ${r1.ok} ${r2.ok} ${r3.ok} ${r4.ok} ${r5.ok} ${r6.ok}`);
  }).catch(() => {});
})();

export default spanish_explorer_l12_screens;
