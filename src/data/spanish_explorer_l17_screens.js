// ============================================================
// COREVERSE EXPLORERS — Spanish · Lesson 17
// "¡La Tienda! At the Store"
// ============================================================

const spanish_explorer_l17_screens = {
  ageBand:   'explorers',
  subjectId: 'languages',
  guide:     'luna',
  lessons: [
    {
      id:        'sp-6-8-17',
      title:     `¡La Tienda! At the Store`,
      duration:  12,
      xpReward:  50,
      badge:     'shop-shopper',
      badgeName: `Shop Shopper`,
      screens: [
        {
          type:      'welcome',
          guideText: `¡Hola, {name}! Today we go to the STORE — ¡la tienda! You'll learn how to ASK for what you want in Spanish. Real-life Spanish! ¡Vamos!`,
        },
        {
          type:          'magazine', section: 1, totalSections: 6,
          headline:      `¡La Tienda! (Say: lah tee-EN-dah)`,
          paragraphs: [
            `TIENDA means STORE! Where you buy things!`,
            `Pretend to walk into a store: ¡TIENDA! "Voy a la tienda" means "I'm going to the store!"`,
          ],
          image:        '/explorer-assets/languages/l17-s1-tienda.png',
          imageCaption: `¡La tienda! The store!`,
          vocab: [
            { word: 'tienda', definition: `Store in Spanish. Say: tee-EN-dah.`,                               audioPrompt: `Tienda — say it like tee-EN-dah. Tienda means store!` },
            { word: 'comprar', definition: `To buy in Spanish! Say: kom-PRAR.`,                               audioPrompt: `Comprar — say it like kom-PRAR. Comprar means to buy!` },
          ],
        },
        {
          type:          'magazine', section: 2, totalSections: 6,
          headline:      `¡Quiero! (Say: kee-EH-ro)`,
          paragraphs: [
            `QUIERO means I WANT! When you want something at the tienda, say it!`,
            `Try it: "Quiero pan" means "I want bread!" "Quiero leche!" "I want milk!" ¡QUIERO! ¡QUIERO!`,
          ],
          image:        '/explorer-assets/languages/l17-s2-quiero.png',
          imageCaption: `¡Quiero! I want!`,
          vocab: [
            { word: 'quiero', definition: `I want in Spanish. Say: kee-EH-ro.`,                                audioPrompt: `Quiero — say it like kee-EH-ro. Quiero means I want!` },
            { word: 'tengo',  definition: `I have in Spanish! Say: TEN-go.`,                                  audioPrompt: `Tengo — say it like TEN-go. Tengo means I have!` },
          ],
        },
        {
          type:          'magazine', section: 3, totalSections: 6,
          headline:      `¿Cuánto cuesta? (Say: KWAN-toh KWEHS-tah)`,
          paragraphs: [
            `¿CUÁNTO CUESTA? means "How much does it cost?" The MOST important question at the tienda!`,
            `Pretend to point at something: ¿CUÁNTO CUESTA? Then someone tells you the price!`,
          ],
          image:        '/explorer-assets/languages/l17-s3-cuanto.png',
          imageCaption: `¿Cuánto cuesta? How much?`,
          vocab: [
            { word: '¿cuánto cuesta?', definition: `How much does it cost? in Spanish.`,                      audioPrompt: `Cuánto cuesta — how much does it cost? Ask: ¿Cuánto cuesta?` },
            { word: 'dinero',         definition: `Money in Spanish! Say: dee-NEH-ro.`,                       audioPrompt: `Dinero — say it like dee-NEH-ro. Dinero means money!` },
          ],
        },
        {
          type:          'magazine', section: 4, totalSections: 6,
          headline:      `¡Por favor y Gracias!`,
          paragraphs: [
            `Remember POR FAVOR (please) and GRACIAS (thank you)? They're SUPER important at the tienda!`,
            `"Una galleta, POR FAVOR!" (A cookie, please!) Then when you get it: "¡GRACIAS!" Polite kids get the best service!`,
          ],
          image:        '/explorer-assets/languages/l17-s4-por-favor-gracias.png',
          imageCaption: `Always say por favor and gracias!`,
          vocab: [
            { word: 'por favor', definition: `Please in Spanish — polite word at the tienda!`,               audioPrompt: `Por favor — please! Always say por favor at the tienda!` },
            { word: 'gracias',   definition: `Thank you in Spanish!`,                                         audioPrompt: `Gracias — thank you! Say gracias when you get what you asked for!` },
          ],
        },
        {
          type:          'magazine', section: 5, totalSections: 6,
          headline:      `¡De Nada! (Say: deh NAH-dah)`,
          paragraphs: [
            `DE NADA means YOU'RE WELCOME! When someone says GRACIAS to you, you say "¡DE NADA!"`,
            `Try it: When mom helps you, say "¡GRACIAS, MAMÁ!" She'll say "¡DE NADA!" Polite conversation!`,
          ],
          image:        '/explorer-assets/languages/l17-s5-de-nada.png',
          imageCaption: `¡De nada! You're welcome!`,
          vocab: [
            { word: 'de nada', definition: `You're welcome in Spanish. Say: deh NAH-dah.`,                    audioPrompt: `De nada — say it like deh NAH-dah. De nada means you're welcome!` },
            { word: 'amable',  definition: `Kind in Spanish! Say: ah-MAH-bleh.`,                              audioPrompt: `Amable — say it like ah-MAH-bleh. Amable means kind!` },
          ],
        },
        {
          type:          'magazine', section: 6, totalSections: 6,
          headline:      `Luna's Shopping Chant!`,
          paragraphs: [
            `Time to CHANT! Pretend you're at a tienda!`,
            `¡TIENDA! ¡QUIERO! ¿CUÁNTO CUESTA? ¡POR FAVOR! ¡GRACIAS! ¡DE NADA! ¡OLÉ!`,
          ],
          image:        '/explorer-assets/languages/l17-s6-chant.png',
          imageCaption: `Chant like you're shopping in Spanish!`,
          vocab: [
            { word: 'shop',  definition: `To buy things at a store!`,                                          audioPrompt: `Shop — to buy things. Chant! Tienda! Quiero! Cuánto cuesta? Por favor! Gracias! De nada! Olé!` },
            { word: 'polite', definition: `Saying nice words like please and thank you!`,                     audioPrompt: `Polite — saying nice words like please and thank you. Be polite at the tienda!` },
          ],
        },
        {
          type:          'interactive',
          activityType:  'drag-match',
          instruction:   `Match each Spanish shopping phrase to what it means!`,
          guideText:     `Tap a Spanish phrase, then tap what it means!`,
          columnHeaders: [`Spanish`, `English`],
          items: [
            { image: 'l17-game-quiero.png',  label: `Quiero`,        correctMatch: 'i-want',     objectPosition: 'center 50%', matchPhrase: `¡Sí! Quiero means I WANT!` },
            { image: 'l17-game-cuanto.png',  label: `¿Cuánto?`,      correctMatch: 'how-much',   objectPosition: 'center 50%', matchPhrase: `¡Muy bien! Cuánto means HOW MUCH?` },
            { image: 'l17-game-gracias.png', label: `Gracias`,       correctMatch: 'thanks',     objectPosition: 'center 50%', matchPhrase: `¡Perfecto! Gracias means THANK YOU!` },
            { image: 'l17-game-denada.png',  label: `De nada`,       correctMatch: 'welcome',    objectPosition: 'center 50%', matchPhrase: `¡Sí, sí! De nada means YOU'RE WELCOME!` },
          ],
          buckets: [
            { id: 'i-want',   label: `I want`,         color: '#FBBF24' },
            { id: 'how-much', label: `How much?`,      color: '#60A5FA' },
            { id: 'thanks',   label: `Thank you`,      color: '#F472B6' },
            { id: 'welcome',  label: `You're welcome`, color: '#34D399' },
          ],
        },
        {
          type:      'quiz',
          guideText: `¡Quiz time, {name}! Earn your Shop Shopper badge!`,
          questions: [
            { format: 'multiple-choice', question: `What does "tienda" mean?`,                                                    options: [`House`, `Store`, `School`, `Park`],                  correctIndex: 1 },
            { format: 'multiple-choice', question: `What does "quiero" mean?`,                                                    options: [`I am`, `I have`, `I want`, `I see`],                  correctIndex: 2 },
            { format: 'multiple-choice', question: `If someone says GRACIAS to you, you say...`,                                  options: [`Adiós`, `De nada`, `Quiero`, `Hola`],                  correctIndex: 1 },
            { format: 'true-false', question: `"¿Cuánto cuesta?" means HOW MUCH does it cost?`,                                   correctAnswer: true },
            { format: 'fill-blank', question: `When you want to buy something, you say: "___ una galleta."`,                      options: [`Quiero`, `Tengo`, `Soy`, `Es`],                       correctIndex: 0 },
            { format: 'multiple-choice', question: `What does "dinero" mean?`,                                                    options: [`Store`, `Cookie`, `Money`, `Friend`],                  correctIndex: 2 },
          ],
        },
        {
          type:            'real-world',
          guideText:       `¡Muy bien, {name}! Practice Spanish at REAL stores!`,
          familyAdventure: `Next time you go to a store with your family, pretend you're in a Spanish tienda! Practice saying: "Quiero ___" (I want ___). Point to things and ask "¿Cuánto cuesta?" Use POR FAVOR and GRACIAS for every interaction!`,
          creativePrompt:  `Draw your own Spanish TIENDA! Draw a shop with shelves. Put 6 items on the shelves and label them in Spanish (use words you've learned!). Add a sign that says "¡TIENDA!" on top!`,
        },
        {
          type:      'celebration',
          xpEarned:  50,
          badge:     'shop-shopper',
          badgeName: `Shop Shopper`,
          message:   `¡EXCELENTE, {name}! You can shop in Spanish now! QUIERO, CUÁNTO CUESTA, POR FAVOR, GRACIAS — real-life words! Luna is so proud! ¡Hasta luego!`,
        },
      ],
    },
  ],
};

(() => {
  console.log(`[LESSON-SPANISH-L17] Loaded`);
  Promise.all([
    fetch('/explorer-assets/languages/l17-s1-tienda.png',          { method: 'HEAD' }),
    fetch('/explorer-assets/languages/l17-s2-quiero.png',          { method: 'HEAD' }),
    fetch('/explorer-assets/languages/l17-s3-cuanto.png',          { method: 'HEAD' }),
    fetch('/explorer-assets/languages/l17-s4-por-favor-gracias.png', { method: 'HEAD' }),
    fetch('/explorer-assets/languages/l17-s5-de-nada.png',         { method: 'HEAD' }),
    fetch('/explorer-assets/languages/l17-s6-chant.png',           { method: 'HEAD' }),
  ]).then(([r1, r2, r3, r4, r5, r6]) => {
    console.log(`[ASSET-CHECK-SPANISH-L17] ${r1.ok} ${r2.ok} ${r3.ok} ${r4.ok} ${r5.ok} ${r6.ok}`);
  }).catch(() => {});
})();

export default spanish_explorer_l17_screens;
