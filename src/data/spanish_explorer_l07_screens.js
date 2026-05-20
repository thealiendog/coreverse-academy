// ============================================================
// COREVERSE EXPLORERS — Spanish · Lesson 7
// "¡La Comida! Food in Spanish"
// ============================================================

const spanish_explorer_l07_screens = {
  ageBand:   'explorers',
  subjectId: 'languages',
  guide:     'luna',
  lessons: [
    {
      id:        'sp-6-8-07',
      title:     `¡La Comida! Food in Spanish`,
      duration:  12,
      xpReward:  50,
      badge:     'food-friend',
      badgeName: `Food Friend`,
      screens: [
        {
          type:      'welcome',
          guideText: `¡Hola, {name}! Today: FOOD in Spanish — ¡la comida! Bread, milk, water, apple, cookie. Rub your tummy and get ready — this lesson will make you hungry! ¡Vamos a comer! Let's eat!`,
        },
        {
          type:          'magazine', section: 1, totalSections: 6,
          headline:      `¡Pan y Leche! (Say: PAHN and LEH-cheh)`,
          paragraphs: [
            `PAN means BREAD! LECHE means MILK! Two foods kids around the world love.`,
            `Pretend to take a bite of pan: ¡PAN! Now pretend to drink leche: ¡LECHE! ¡PAN! ¡LECHE!`,
          ],
          image:        '/explorer-assets/languages/l07-s1-pan-leche.png',
          imageCaption: `¡Pan! Bread. ¡Leche! Milk.`,
          vocab: [
            { word: 'pan',   definition: `Bread in Spanish. Say it like: PAHN.`,                              audioPrompt: `Pan — say it like PAHN. Pan means bread!` },
            { word: 'leche', definition: `Milk in Spanish. Say it like: LEH-cheh.`,                           audioPrompt: `Leche — say it like LEH-cheh. Leche means milk!` },
          ],
        },
        {
          type:          'magazine', section: 2, totalSections: 6,
          headline:      `¡Agua y Manzana! (Say: AH-gwah and mahn-SAH-nah)`,
          paragraphs: [
            `AGUA means WATER! MANZANA means APPLE! Healthy choices!`,
            `Pretend to drink agua: ¡AGUA! Pretend to bite a manzana: ¡MANZANA! Crunch crunch!`,
          ],
          image:        '/explorer-assets/languages/l07-s2-agua-manzana.png',
          imageCaption: `¡Agua! Water. ¡Manzana! Apple.`,
          vocab: [
            { word: 'agua',    definition: `Water in Spanish. Say it like: AH-gwah.`,                         audioPrompt: `Agua — say it like AH-gwah. Agua means water!` },
            { word: 'manzana', definition: `Apple in Spanish. Say it like: mahn-SAH-nah.`,                    audioPrompt: `Manzana — say it like mahn-SAH-nah. Manzana means apple!` },
          ],
        },
        {
          type:          'magazine', section: 3, totalSections: 6,
          headline:      `¡Galleta y Queso! (Say: gah-YEH-tah and KEH-so)`,
          paragraphs: [
            `GALLETA means COOKIE! YUM! QUESO means CHEESE! Like in quesadilla!`,
            `Try them: ¡GALLETA! ¡QUESO! Spanish kids love them too!`,
          ],
          image:        '/explorer-assets/languages/l07-s3-galleta-queso.png',
          imageCaption: `¡Galleta! Cookie. ¡Queso! Cheese.`,
          vocab: [
            { word: 'galleta', definition: `Cookie in Spanish. Say it like: gah-YEH-tah.`,                    audioPrompt: `Galleta — say it like gah-YEH-tah. Galleta means cookie!` },
            { word: 'queso',   definition: `Cheese in Spanish. Say it like: KEH-so.`,                          audioPrompt: `Queso — say it like KEH-so. Queso means cheese!` },
          ],
        },
        {
          type:          'magazine', section: 4, totalSections: 6,
          headline:      `¡Tengo Hambre!`,
          paragraphs: [
            `TENGO HAMBRE means "I'M HUNGRY!" Rub your tummy and say it: ¡TENGO HAMBRE!`,
            `TENGO SED means "I'M THIRSTY!" Touch your throat: ¡TENGO SED! Now you can tell anyone what you need!`,
          ],
          image:        '/explorer-assets/languages/l07-s4-hambre-sed.png',
          imageCaption: `¡Tengo hambre! I'm hungry! ¡Tengo sed! I'm thirsty!`,
          vocab: [
            { word: 'tengo hambre', definition: `I'm hungry in Spanish. Say: TEN-go AHM-breh.`,             audioPrompt: `Tengo hambre — say it like TEN-go AHM-breh. It means I'm hungry!` },
            { word: 'tengo sed',    definition: `I'm thirsty in Spanish. Say: TEN-go SED.`,                  audioPrompt: `Tengo sed — say it like TEN-go SED. It means I'm thirsty!` },
          ],
        },
        {
          type:          'magazine', section: 5, totalSections: 6,
          headline:      `¡Está Rico! (It's Yummy!)`,
          paragraphs: [
            `ESTÁ RICO means "IT'S YUMMY!" or "IT'S DELICIOUS!" When you taste something great, say: ¡ESTÁ RICO!`,
            `Rub your tummy and say: ¡ESTÁ RICO! ¡ESTÁ RICO! Spanish kids say this all the time!`,
          ],
          image:        '/explorer-assets/languages/l07-s5-rico.png',
          imageCaption: `¡Está rico! It's YUMMY!`,
          vocab: [
            { word: 'está rico', definition: `It's yummy in Spanish. Say: es-TAH REE-koh.`,                 audioPrompt: `Está rico — say it like es-TAH REE-koh. It means it's yummy!` },
            { word: 'comer',     definition: `To eat in Spanish. Say: ko-MEHR.`,                             audioPrompt: `Comer — say it like ko-MEHR. Comer means to eat!` },
          ],
        },
        {
          type:          'magazine', section: 6, totalSections: 6,
          headline:      `Luna's Food Chant!`,
          paragraphs: [
            `Time to CHANT! Pretend to eat each food as you say it!`,
            `¡PAN! ¡LECHE! ¡AGUA! ¡MANZANA! ¡GALLETA! ¡QUESO! ¡ESTÁ RICO! ¡ESTÁ RICO! ¡OLÉ!`,
          ],
          image:        '/explorer-assets/languages/l07-s6-chant.png',
          imageCaption: `Pretend-eat and chant!`,
          vocab: [
            { word: 'yummy', definition: `When food tastes really good!`,                                    audioPrompt: `Yummy — when food tastes really good. Chant! Pan! Leche! Agua! Manzana! Galleta! Queso! Está rico! Está rico! Olé!` },
            { word: 'hungry', definition: `When your tummy wants food!`,                                     audioPrompt: `Hungry — when your tummy wants food. ¡Tengo hambre!` },
          ],
        },
        {
          type:          'interactive',
          activityType:  'drag-match',
          instruction:   `Match each Spanish food to the right English food!`,
          guideText:     `Tap a Spanish food, then tap what it is!`,
          columnHeaders: [`Spanish Food`, `English Food`],
          items: [
            { image: 'l07-game-pan.png',     label: `Pan`,     correctMatch: 'bread',  objectPosition: 'center 50%', matchPhrase: `¡Sí! Pan is BREAD! Yum!` },
            { image: 'l07-game-leche.png',   label: `Leche`,   correctMatch: 'milk',   objectPosition: 'center 50%', matchPhrase: `¡Muy bien! Leche is MILK!` },
            { image: 'l07-game-manzana.png', label: `Manzana`, correctMatch: 'apple',  objectPosition: 'center 50%', matchPhrase: `¡Perfecto! Manzana is APPLE! Crunch!` },
            { image: 'l07-game-queso.png',   label: `Queso`,   correctMatch: 'cheese', objectPosition: 'center 50%', matchPhrase: `¡Sí, sí! Queso is CHEESE! Yummy!` },
          ],
          buckets: [
            { id: 'bread',  label: `Bread`,  color: '#FBBF24' },
            { id: 'milk',   label: `Milk`,   color: '#FFFFFF' },
            { id: 'apple',  label: `Apple`,  color: '#EF4444' },
            { id: 'cheese', label: `Cheese`, color: '#F59E0B' },
          ],
        },
        {
          type:      'quiz',
          guideText: `¡Quiz time, {name}! Earn your Food Friend badge!`,
          questions: [
            { format: 'multiple-choice', question: `What does "pan" mean?`,                                                      options: [`Milk`, `Bread`, `Cheese`, `Apple`],            correctIndex: 1 },
            { format: 'multiple-choice', question: `What does "agua" mean?`,                                                     options: [`Apple`, `Milk`, `Water`, `Cookie`],           correctIndex: 2 },
            { format: 'multiple-choice', question: `Which is COOKIE in Spanish?`,                                                options: [`Manzana`, `Galleta`, `Queso`, `Pan`],         correctIndex: 1 },
            { format: 'true-false', question: `"Tengo hambre" means I'M HUNGRY.`,                                                correctAnswer: true },
            { format: 'fill-blank', question: `If something is delicious, you say "¡Está ___!"`,                                 options: [`rico`, `feo`, `triste`, `frío`],              correctIndex: 0 },
            { format: 'multiple-choice', question: `Which is CHEESE in Spanish?`,                                                options: [`Galleta`, `Pan`, `Queso`, `Leche`],           correctIndex: 2 },
          ],
        },
        {
          type:            'real-world',
          guideText:       `¡Muy bien, {name}! Bring Spanish food into your real meals today!`,
          familyAdventure: `At your next meal, name every food in Spanish you can! PAN, LECHE, AGUA, MANZANA, QUESO, GALLETA. If something is yummy, shout "¡ESTÁ RICO!" Make the whole meal a Spanish adventure!`,
          creativePrompt:  `Draw your favorite Spanish breakfast! Pick 3 foods you learned. Draw them on a plate. Label each one in Spanish. Then add a happy face — because ¡ESTÁ RICO!`,
        },
        {
          type:      'celebration',
          xpEarned:  50,
          badge:     'food-friend',
          badgeName: `Food Friend`,
          message:   `¡EXCELENTE, {name}! You can name 6 foods in Spanish — and you can say "I'm hungry!" and "It's yummy!" That's REAL Spanish from REAL kitchens. Luna is so proud! ¡Hasta luego!`,
        },
      ],
    },
  ],
};

(() => {
  const l = spanish_explorer_l07_screens.lessons[0];
  const mags = l.screens.filter(s => s.type === 'magazine').length;
  console.log(`[LESSON-SPANISH-L07] Loaded with ${mags} magazine sections`);
  Promise.all([
    fetch('/explorer-assets/languages/l07-s1-pan-leche.png',     { method: 'HEAD' }),
    fetch('/explorer-assets/languages/l07-s2-agua-manzana.png',  { method: 'HEAD' }),
    fetch('/explorer-assets/languages/l07-s3-galleta-queso.png', { method: 'HEAD' }),
    fetch('/explorer-assets/languages/l07-s4-hambre-sed.png',    { method: 'HEAD' }),
    fetch('/explorer-assets/languages/l07-s5-rico.png',          { method: 'HEAD' }),
    fetch('/explorer-assets/languages/l07-s6-chant.png',         { method: 'HEAD' }),
  ]).then(([r1, r2, r3, r4, r5, r6]) => {
    console.log(`[ASSET-CHECK-SPANISH-L07] ${r1.ok} ${r2.ok} ${r3.ok} ${r4.ok} ${r5.ok} ${r6.ok}`);
  }).catch(() => {});
})();

export default spanish_explorer_l07_screens;
