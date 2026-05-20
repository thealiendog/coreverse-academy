// ============================================================
// COREVERSE EXPLORERS — Spanish · Lesson 13
// "¡La Ropa! Clothes in Spanish"
// ============================================================

const spanish_explorer_l13_screens = {
  ageBand:   'explorers',
  subjectId: 'languages',
  guide:     'luna',
  lessons: [
    {
      id:        'sp-6-8-13',
      title:     `¡La Ropa! Clothes in Spanish`,
      duration:  12,
      xpReward:  50,
      badge:     'clothes-explorer',
      badgeName: `Clothes Explorer`,
      screens: [
        {
          type:      'welcome',
          guideText: `¡Hola, {name}! Today: CLOTHES in Spanish! ¡La ropa! Shirt, pants, shoes, hat — let's name what you wear! Look at what you have on. ¡Vamos!`,
        },
        {
          type:          'magazine', section: 1, totalSections: 6,
          headline:      `¡Camisa!`,
          paragraphs: [
            `CAMISA means SHIRT! Touch your shirt!`,
            `Try it: ¡CAMISA! ¡CAMISA! Your shirt has a Spanish name now!`,
          ],
          image:        '/explorer-assets/languages/l13-s1-camisa.png',
          imageCaption: `¡Camisa! Shirt!`,
          vocab: [
            { word: 'camisa', definition: `Shirt in Spanish.`,                              audioPrompt: `Camisa. Camisa means shirt!` },
            { word: 'ropa',   definition: `Clothes in Spanish.`,                                audioPrompt: `Ropa. Ropa means clothes!` },
          ],
        },
        {
          type:          'magazine', section: 2, totalSections: 6,
          headline:      `¡Pantalones!`,
          paragraphs: [
            `PANTALONES means PANTS! Pat your legs!`,
            `Spanish kids say "pantalones" — even just for one pair! Try it: ¡PANTALONES! ¡PANTALONES!`,
          ],
          image:        '/explorer-assets/languages/l13-s2-pantalones.png',
          imageCaption: `¡Pantalones! Pants!`,
          vocab: [
            { word: 'pantalones', definition: `Pants in Spanish.`,                       audioPrompt: `Pantalones. Pantalones means pants!` },
            { word: 'falda',      definition: `Skirt in Spanish!`,                              audioPrompt: `Falda. Falda means skirt!` },
          ],
        },
        {
          type:          'magazine', section: 3, totalSections: 6,
          headline:      `¡Zapatos!`,
          paragraphs: [
            `ZAPATOS means SHOES! Tap your feet!`,
            `Try it: ¡ZAPATOS! Spanish kids put on zapatos every morning — just like you!`,
          ],
          image:        '/explorer-assets/languages/l13-s3-zapatos.png',
          imageCaption: `¡Zapatos! Shoes!`,
          vocab: [
            { word: 'zapatos', definition: `Shoes in Spanish.`,                            audioPrompt: `Zapatos. Zapatos means shoes!` },
            { word: 'pies',   definition: `Feet in Spanish — what zapatos go on!`,                            audioPrompt: `Pies — feet! Zapatos go on your pies!` },
          ],
        },
        {
          type:          'magazine', section: 4, totalSections: 6,
          headline:      `¡Sombrero!`,
          paragraphs: [
            `SOMBRERO means HAT! Tap your head!`,
            `Spanish hats are famous — like the big ones in Mexico! Try it: ¡SOMBRERO!`,
          ],
          image:        '/explorer-assets/languages/l13-s4-sombrero.png',
          imageCaption: `¡Sombrero! Hat!`,
          vocab: [
            { word: 'sombrero', definition: `Hat in Spanish.`,                             audioPrompt: `Sombrero. Sombrero means hat!` },
            { word: 'gorro',    definition: `Cap in Spanish!`,                                  audioPrompt: `Gorro. Gorro means cap!` },
          ],
        },
        {
          type:          'magazine', section: 5, totalSections: 6,
          headline:      `¡Chaqueta y Calcetines!`,
          paragraphs: [
            `CHAQUETA means JACKET! CALCETINES means SOCKS!`,
            `Wrap your arms around yourself: ¡CHAQUETA! Touch your ankles: ¡CALCETINES!`,
          ],
          image:        '/explorer-assets/languages/l13-s5-chaqueta-calcetines.png',
          imageCaption: `¡Chaqueta! Jacket. ¡Calcetines! Socks.`,
          vocab: [
            { word: 'chaqueta',    definition: `Jacket in Spanish.`,                       audioPrompt: `Chaqueta. Chaqueta means jacket!` },
            { word: 'calcetines',  definition: `Socks in Spanish.`,                    audioPrompt: `Calcetines. Calcetines means socks!` },
          ],
        },
        {
          type:          'magazine', section: 6, totalSections: 6,
          headline:      `Luna's Clothes Chant!`,
          paragraphs: [
            `Time to CHANT! Touch each piece of clothing as you say it!`,
            `¡CAMISA! ¡PANTALONES! ¡ZAPATOS! ¡SOMBRERO! ¡CHAQUETA! ¡CALCETINES! ¡OLÉ!`,
          ],
          image:        '/explorer-assets/languages/l13-s6-chant.png',
          imageCaption: `Touch and chant your ropa!`,
          vocab: [
            { word: 'wear', definition: `To have clothes on your body!`,                                       audioPrompt: `Wear — to have clothes on. Chant! Camisa! Pantalones! Zapatos! Sombrero! Chaqueta! Calcetines! Olé!` },
            { word: 'outfit', definition: `All the clothes you're wearing together!`,                          audioPrompt: `Outfit — all your clothes together! Your outfit in Spanish!` },
          ],
        },
        {
          type:          'interactive',
          activityType:  'drag-match',
          instruction:   `Match each Spanish clothes word to the right English word!`,
          guideText:     `Tap a Spanish clothes word, then tap what it is!`,
          columnHeaders: [`Spanish`, `English`],
          items: [
            { image: 'l13-game-camisa.png',    label: `Camisa`,     correctMatch: 'shirt', objectPosition: 'center 50%', matchPhrase: `¡Sí! Camisa is SHIRT!` },
            { image: 'l13-game-zapatos.png',   label: `Zapatos`,    correctMatch: 'shoes', objectPosition: 'center 50%', matchPhrase: `¡Muy bien! Zapatos is SHOES!` },
            { image: 'l13-game-sombrero.png',  label: `Sombrero`,   correctMatch: 'hat',   objectPosition: 'center 50%', matchPhrase: `¡Perfecto! Sombrero is HAT!` },
            { image: 'l13-game-chaqueta.png',  label: `Chaqueta`,   correctMatch: 'jacket',objectPosition: 'center 50%', matchPhrase: `¡Sí, sí! Chaqueta is JACKET!` },
          ],
          buckets: [
            { id: 'shirt',  label: `Shirt`,  color: '#60A5FA' },
            { id: 'shoes',  label: `Shoes`,  color: '#A78BFA' },
            { id: 'hat',    label: `Hat`,    color: '#FBBF24' },
            { id: 'jacket', label: `Jacket`, color: '#F472B6' },
          ],
        },
        {
          type:      'quiz',
          guideText: `¡Quiz time, {name}! Earn your Clothes Explorer badge!`,
          questions: [
            { format: 'multiple-choice', question: `What does "camisa" mean?`,                                                  options: [`Pants`, `Shirt`, `Shoes`, `Hat`],                  correctIndex: 1 },
            { format: 'multiple-choice', question: `What does "zapatos" mean?`,                                                 options: [`Socks`, `Pants`, `Shoes`, `Jacket`],               correctIndex: 2 },
            { format: 'multiple-choice', question: `Which Spanish word means HAT?`,                                             options: [`Camisa`, `Sombrero`, `Falda`, `Gorro`],             correctIndex: 1 },
            { format: 'true-false', question: `"Pantalones" means PANTS in Spanish.`,                                           correctAnswer: true },
            { format: 'fill-blank', question: `In winter you wear a ___ to stay warm.`,                                         options: [`chaqueta`, `falda`, `zapatos`, `sombrero`],         correctIndex: 0 },
            { format: 'multiple-choice', question: `What goes on your feet?`,                                                   options: [`Camisa`, `Sombrero`, `Zapatos`, `Pantalones`],      correctIndex: 2 },
          ],
        },
        {
          type:            'real-world',
          guideText:       `¡Muy bien, {name}! Get dressed in Spanish today!`,
          familyAdventure: `Tomorrow morning when you get dressed, name EVERY piece of clothing in Spanish! "¡CAMISA!" as you put it on. "¡PANTALONES!" "¡ZAPATOS!" "¡CHAQUETA!" Make getting dressed an adventure!`,
          creativePrompt:  `Draw your favorite outfit. Label every piece in Spanish — CAMISA, PANTALONES, ZAPATOS. Add a SOMBRERO on top! Color it with the colors you learned!`,
        },
        {
          type:      'celebration',
          xpEarned:  50,
          badge:     'clothes-explorer',
          badgeName: `Clothes Explorer`,
          message:   `¡EXCELENTE, {name}! You learned 6 clothes words in Spanish! Now you can describe what you wear in TWO languages. Luna is so proud! ¡Hasta luego!`,
        },
      ],
    },
  ],
};

(() => {
  console.log(`[LESSON-SPANISH-L13] Loaded`);
  Promise.all([
    fetch('/explorer-assets/languages/l13-s1-camisa.png',              { method: 'HEAD' }),
    fetch('/explorer-assets/languages/l13-s2-pantalones.png',          { method: 'HEAD' }),
    fetch('/explorer-assets/languages/l13-s3-zapatos.png',             { method: 'HEAD' }),
    fetch('/explorer-assets/languages/l13-s4-sombrero.png',            { method: 'HEAD' }),
    fetch('/explorer-assets/languages/l13-s5-chaqueta-calcetines.png', { method: 'HEAD' }),
    fetch('/explorer-assets/languages/l13-s6-chant.png',               { method: 'HEAD' }),
  ]).then(([r1, r2, r3, r4, r5, r6]) => {
    console.log(`[ASSET-CHECK-SPANISH-L13] ${r1.ok} ${r2.ok} ${r3.ok} ${r4.ok} ${r5.ok} ${r6.ok}`);
  }).catch(() => {});
})();

export default spanish_explorer_l13_screens;
