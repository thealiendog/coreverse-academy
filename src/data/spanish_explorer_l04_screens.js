// ============================================================
// COREVERSE EXPLORERS — Spanish · Lesson 4
// "Mi Familia: My Family in Spanish"
// Ages 6–8 | Guide: Luna the Parrot
// ============================================================

const spanish_explorer_l04_screens = {
  ageBand:   'explorers',
  subjectId: 'languages',
  guide:     'luna',
  lessons: [
    {
      id:        'sp-6-8-04',
      title:     `Mi Familia: My Family in Spanish`,
      duration:  12,
      xpReward:  50,
      badge:     'family-friend',
      badgeName: `Family Friend`,
      screens: [
        {
          type:      'welcome',
          guideText: `¡Hola, {name}! Today you learn FAMILY words in Spanish! Your MAMÁ. Your PAPÁ. Your HERMANO and HERMANA. Family is the most important word in any language. ¿Listo? ¡Vamos a aprender! Let's learn!`,
        },
        {
          type:          'magazine',
          section:       1,
          totalSections: 6,
          headline:      `¡Mamá y Papá!`,
          paragraphs: [
            `MAMÁ means MOM! PAPÁ means DAD! Easy, right? They sound almost the same in English.`,
            `Give a big HUG and say: ¡MAMÁ! ¡PAPÁ! ¡MAMÁ! ¡PAPÁ! Spanish kids say it just like you!`,
          ],
          image:        '/explorer-assets/languages/l04-s1-mama-papa.png',
          imageCaption: `¡Mamá! Mom! ¡Papá! Dad!`,
          vocab: [
            { word: 'mamá', definition: `Mom in Spanish.`,                                audioPrompt: `Mamá. Mamá means mom. Mamá! Mamá!` },
            { word: 'papá', definition: `Dad in Spanish.`,                                audioPrompt: `Papá. Papá means dad. Papá! Papá!` },
          ],
        },
        {
          type:          'magazine',
          section:       2,
          totalSections: 6,
          headline:      `¡Hermano y Hermana!`,
          paragraphs: [
            `HERMANO means BROTHER! HERMANA means SISTER! Notice — they look almost the same.`,
            `Hermano ends in O (boy). Hermana ends in A (girl). That's a Spanish secret! Try them: ¡HERMANO! ¡HERMANA!`,
          ],
          image:        '/explorer-assets/languages/l04-s2-hermano-hermana.png',
          imageCaption: `¡Hermano! Brother. ¡Hermana! Sister.`,
          vocab: [
            { word: 'hermano', definition: `Brother in Spanish.`,                       audioPrompt: `Hermano. Hermano means brother. Hermano!` },
            { word: 'hermana', definition: `Sister in Spanish.`,                       audioPrompt: `Hermana. Hermana means sister. Hermana!` },
          ],
        },
        {
          type:          'magazine',
          section:       3,
          totalSections: 6,
          headline:      `¡Abuelo y Abuela!`,
          paragraphs: [
            `ABUELO means GRANDPA! ABUELA means GRANDMA! Same trick — abuelo ends in O (boy), abuela ends in A (girl).`,
            `Spanish kids LOVE their abuelos! Say it: ¡ABUELO! ¡ABUELA! Big hugs to all the grandparents!`,
          ],
          image:        '/explorer-assets/languages/l04-s3-abuelos.png',
          imageCaption: `¡Abuelo! Grandpa. ¡Abuela! Grandma.`,
          vocab: [
            { word: 'abuelo', definition: `Grandpa in Spanish.`,                       audioPrompt: `Abuelo. Abuelo means grandpa!` },
            { word: 'abuela', definition: `Grandma in Spanish.`,                      audioPrompt: `Abuela. Abuela means grandma!` },
          ],
        },
        {
          type:          'magazine',
          section:       4,
          totalSections: 6,
          headline:      `¡Mi Familia!`,
          paragraphs: [
            `FAMILIA means FAMILY! It sounds just like English — easy!`,
            `Your familia is everyone you love." That means "my family!" ¡MI FAMILIA! ¡MI FAMILIA!`,
          ],
          image:        '/explorer-assets/languages/l04-s4-familia.png',
          imageCaption: `¡Familia! Family.`,
          vocab: [
            { word: 'familia', definition: `Family in Spanish.`,                  audioPrompt: `Familia. Familia means family! Mi familia!` },
            { word: 'mi',      definition: `My in Spanish.`,                                  audioPrompt: `Mi. Mi means my. Mi familia means my family!` },
          ],
        },
        {
          type:          'magazine',
          section:       5,
          totalSections: 6,
          headline:      `¡Te Quiero!`,
          paragraphs: [
            `TE QUIERO means I LOVE YOU! It's one of the sweetest things you can say in Spanish.`,
            `Family hug time! Give yourself a hug and say: ¡TE QUIERO, FAMILIA! I love you, family!`,
          ],
          image:        '/explorer-assets/languages/l04-s5-te-quiero.png',
          imageCaption: `¡Te quiero! I love you!`,
          vocab: [
            { word: 'te quiero', definition: `I love you in Spanish.`,                audioPrompt: `Te quiero. Te quiero means I love you!` },
            { word: 'amor',      definition: `Love in Spanish.`,                           audioPrompt: `Amor. Amor means love.` },
          ],
        },
        {
          type:          'magazine',
          section:       6,
          totalSections: 6,
          headline:      `Luna's Family Chant!`,
          paragraphs: [
            `Time to CHANT the family words! Touch your heart as you say each one.`,
            `¡MAMÁ! ¡PAPÁ! ¡HERMANO! ¡HERMANA! ¡ABUELO! ¡ABUELA! ¡MI FAMILIA! ¡TE QUIERO! ¡OLÉ!`,
          ],
          image:        '/explorer-assets/languages/l04-s6-chant.png',
          imageCaption: `Chant for your familia!`,
          vocab: [
            { word: 'heart',  definition: `The part of you that feels love.`,                                   audioPrompt: `Heart — the part of you that feels love. Touch your heart and chant! Mamá! Papá! Hermano! Hermana! Abuelo! Abuela! Mi familia! Te quiero! Olé!` },
            { word: 'familia chant', definition: `A happy song about your family.`,                             audioPrompt: `Familia chant — a happy song about your family!` },
          ],
        },
        {
          type:          'interactive',
          activityType:  'drag-match',
          instruction:   `Match each Spanish family word to the right English word!`,
          guideText:     `Tap a Spanish word, then tap who it means in your family!`,
          columnHeaders: [`Spanish Word`, `English Word`],
          items: [
            { image: 'l04-game-mama.png',    label: `Mamá`,    correctMatch: 'mom',     objectPosition: 'center 50%', matchPhrase: `¡Sí! Mamá means MOM! Give her a hug!` },
            { image: 'l04-game-papa.png',    label: `Papá`,    correctMatch: 'dad',     objectPosition: 'center 50%', matchPhrase: `¡Muy bien! Papá means DAD! High five!` },
            { image: 'l04-game-hermano.png', label: `Hermano`, correctMatch: 'brother', objectPosition: 'center 50%', matchPhrase: `¡Perfecto! Hermano means BROTHER! Ends in O for boy!` },
            { image: 'l04-game-abuela.png',  label: `Abuela`,  correctMatch: 'grandma', objectPosition: 'center 50%', matchPhrase: `¡Sí, sí! Abuela means GRANDMA! Hug abuela!` },
          ],
          buckets: [
            { id: 'mom',     label: `Mom`,     color: '#F472B6' },
            { id: 'dad',     label: `Dad`,     color: '#60A5FA' },
            { id: 'brother', label: `Brother`, color: '#34D399' },
            { id: 'grandma', label: `Grandma`, color: '#FBBF24' },
          ],
        },
        {
          type:      'quiz',
          guideText: `¡Quiz time, {name}! Answer all 6 questions to earn your Family Friend badge!`,
          questions: [
            { format: 'multiple-choice', question: `What does "mamá" mean?`,
              options: [`Dad`, `Mom`, `Sister`, `Brother`],
              correctIndex: 1 },
            { format: 'multiple-choice', question: `What does "papá" mean?`,
              options: [`Mom`, `Brother`, `Dad`, `Grandma`],
              correctIndex: 2 },
            { format: 'multiple-choice', question: `Which Spanish word means SISTER?`,
              options: [`Hermano`, `Hermana`, `Abuela`, `Mamá`],
              correctIndex: 1 },
            { format: 'true-false', question: `"Te quiero" means I LOVE YOU.`,
              correctAnswer: true },
            { format: 'fill-blank', question: `___ means family in Spanish.`,
              options: [`Familia`, `Amor`, `Hermano`, `Mi`],
              correctIndex: 0 },
            { format: 'multiple-choice', question: `If hermanO is brother, what's hermanA?`,
              options: [`Grandma`, `Mom`, `Sister`, `Dad`],
              correctIndex: 2 },
          ],
        },
        {
          type:            'real-world',
          guideText:       `¡Muy bien, {name}! Now let's bring Spanish into your familia tonight!`,
          familyAdventure: `Tonight, surprise everyone! Call your mom MAMÁ, your dad PAPÁ, your brother HERMANO, your sister HERMANA. Tell each one: "¡TE QUIERO!" Watch them smile!`,
          creativePrompt:  `Draw your FAMILIA. In each picture, write the Spanish word — MAMÁ, PAPÁ, HERMANO, HERMANA, ABUELO, ABUELA — for anyone in your family. Add hearts everywhere!`,
        },
        {
          type:      'celebration',
          xpEarned:  50,
          badge:     'family-friend',
          badgeName: `Family Friend`,
          message:   `¡EXCELENTE, {name}! You learned to talk about your familia in Spanish! And you learned the Spanish secret: O for boys, A for girls. ¡TE QUIERO, mi amigo! Luna is so proud!`,
        },
      ],
    },
  ],
};

(() => {
  const l    = spanish_explorer_l04_screens.lessons[0];
  const mags = l.screens.filter(s => s.type === 'magazine').length;
  const game = l.screens.find(s => s.type === 'interactive')?.items?.length || 0;
  const quiz = l.screens.find(s => s.type === 'quiz')?.questions?.length || 0;
  console.log(`[LESSON-SPANISH-L04] Loaded: "Mi Familia" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
  Promise.all([
    fetch('/explorer-assets/languages/l04-s1-mama-papa.png',       { method: 'HEAD' }),
    fetch('/explorer-assets/languages/l04-s2-hermano-hermana.png', { method: 'HEAD' }),
    fetch('/explorer-assets/languages/l04-s3-abuelos.png',         { method: 'HEAD' }),
    fetch('/explorer-assets/languages/l04-s4-familia.png',         { method: 'HEAD' }),
    fetch('/explorer-assets/languages/l04-s5-te-quiero.png',       { method: 'HEAD' }),
    fetch('/explorer-assets/languages/l04-s6-chant.png',           { method: 'HEAD' }),
  ]).then(([r1, r2, r3, r4, r5, r6]) => {
    console.log(`[ASSET-CHECK-SPANISH-L04] s1: ${r1.ok}, s2: ${r2.ok}, s3: ${r3.ok}, s4: ${r4.ok}, s5: ${r5.ok}, s6: ${r6.ok}`);
  }).catch(() => {
    console.log('[ASSET-CHECK-SPANISH-L04] Could not verify image assets — network check failed');
  });
})();

export default spanish_explorer_l04_screens;
