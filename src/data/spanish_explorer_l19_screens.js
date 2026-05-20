// ============================================================
// COREVERSE EXPLORERS — Spanish · Lesson 19
// "¡Mis Favoritos! Talking About Your Favorites"
// ============================================================

const spanish_explorer_l19_screens = {
  ageBand:   'explorers',
  subjectId: 'languages',
  guide:     'luna',
  lessons: [
    {
      id:        'sp-6-8-19',
      title:     `¡Mis Favoritos! Talking About Your Favorites`,
      duration:  12,
      xpReward:  50,
      badge:     'favorite-finder',
      badgeName: `Favorite Finder`,
      screens: [
        {
          type:      'welcome',
          guideText: `¡Hola, {name}! Today: how to talk about YOURSELF in Spanish! Your name, your favorites, your likes — all the things that make you YOU! ¡Vamos!`,
        },
        {
          type:          'magazine', section: 1, totalSections: 6,
          headline:      `¡Me llamo!`,
          paragraphs: [
            `ME LLAMO means "MY NAME IS"! Use it to tell someone your name!`,
            `Try it: "ME LLAMO {name}!" Point to yourself: ¡ME LLAMO! ¡ME LLAMO!`,
          ],
          image:        '/explorer-assets/languages/l19-s1-me-llamo.png',
          imageCaption: `¡Me llamo! My name is!`,
          vocab: [
            { word: 'me llamo', definition: `My name is in Spanish.`,                        audioPrompt: `Me llamo. Me llamo means my name is!` },
            { word: 'nombre',   definition: `Name in Spanish!`,                                 audioPrompt: `Nombre. Nombre means name!` },
          ],
        },
        {
          type:          'magazine', section: 2, totalSections: 6,
          headline:      `¿Cómo te llamas?`,
          paragraphs: [
            `¿CÓMO TE LLAMAS? means "WHAT'S YOUR NAME?" Ask someone with a smile!`,
            `Try it: ¿CÓMO TE LLAMAS? Then they answer: "ME LLAMO ___" Easy conversation!`,
          ],
          image:        '/explorer-assets/languages/l19-s2-como-te-llamas.png',
          imageCaption: `¿Cómo te llamas? What's your name?`,
          vocab: [
            { word: '¿cómo te llamas?', definition: `What's your name? in Spanish.`,                          audioPrompt: `Cómo te llamas — what's your name? Ask: ¿Cómo te llamas?` },
            { word: 'mucho gusto',      definition: `Nice to meet you in Spanish!`,                            audioPrompt: `Mucho gusto — nice to meet you! Say it after meeting someone new!` },
          ],
        },
        {
          type:          'magazine', section: 3, totalSections: 6,
          headline:      `¡Mi color favorito!`,
          paragraphs: [
            `Use FAVORITO to share what you LOVE! "Mi color favorito es..." means "My favorite color is..."`,
            `Try it! "Mi color favorito es AZUL!" Or VERDE, ROJO, AMARILLO — whatever YOUR favorite is!`,
          ],
          image:        '/explorer-assets/languages/l19-s3-color-favorito.png',
          imageCaption: `¡Mi color favorito! My favorite color!`,
          vocab: [
            { word: 'mi',       definition: `My in Spanish.`,                                       audioPrompt: `Mi. Mi means my!` },
            { word: 'favorito', definition: `Favorite in Spanish!`,                       audioPrompt: `Favorito. Favorito means favorite!` },
          ],
        },
        {
          type:          'magazine', section: 4, totalSections: 6,
          headline:      `¡Tengo años! (I am ___ years old!)`,
          paragraphs: [
            `TENGO ___ AÑOS means "I AM ___ YEARS OLD!" Tell people how old you are!`,
            `If you're 7: "Tengo SIETE años!" If you're 8: "Tengo OCHO años!" Try it for your age!`,
          ],
          image:        '/explorer-assets/languages/l19-s4-tengo-anos.png',
          imageCaption: `¡Tengo ___ años! I am ___ years old!`,
          vocab: [
            { word: 'tengo años', definition: `I am ___ years old in Spanish.`,                              audioPrompt: `Tengo años — I am years old. Tengo siete años or tengo ocho años!` },
            { word: 'edad',       definition: `Age in Spanish!`,                                 audioPrompt: `Edad. Edad means age!` },
          ],
        },
        {
          type:          'magazine', section: 5, totalSections: 6,
          headline:      `¡Soy!`,
          paragraphs: [
            `SOY means "I AM"! Tell people about YOU!`,
            `Try it: "Soy AMABLE!" (I am kind!) "Soy INTELIGENTE!" (I am smart!) "Soy FUERTE!" (I am strong!) You ARE all these things!`,
          ],
          image:        '/explorer-assets/languages/l19-s5-soy.png',
          imageCaption: `¡Soy! I am! Tell who YOU are!`,
          vocab: [
            { word: 'soy',         definition: `I am in Spanish.`,                                  audioPrompt: `Soy. Soy means I am! You are amable, inteligente, fuerte!` },
            { word: 'inteligente', definition: `Smart in Spanish!`,                  audioPrompt: `Inteligente. Inteligente means smart!` },
          ],
        },
        {
          type:          'magazine', section: 6, totalSections: 6,
          headline:      `Luna's About-Me Chant!`,
          paragraphs: [
            `Time to CHANT! Make it about YOU!`,
            `¡ME LLAMO! ¡TENGO AÑOS! ¡SOY AMABLE! ¡SOY INTELIGENTE! ¡SOY FUERTE! ¡MI FAVORITO! ¡OLÉ!`,
          ],
          image:        '/explorer-assets/languages/l19-s6-chant.png',
          imageCaption: `Chant about YOU!`,
          vocab: [
            { word: 'me',     definition: `Spanish for "I" or "me" — talking about YOU!`,                    audioPrompt: `Me — about you! Chant! Me llamo! Tengo años! Soy amable! Soy inteligente! Soy fuerte! Mi favorito! Olé!` },
            { word: 'identity', definition: `Who YOU are — your name, age, what you like!`,                  audioPrompt: `Identity — who you are. You're amazing!` },
          ],
        },
        {
          type:          'interactive',
          activityType:  'drag-match',
          instruction:   `Match each Spanish phrase to what it means!`,
          guideText:     `Tap a Spanish phrase, then tap what it means!`,
          columnHeaders: [`Spanish`, `English`],
          items: [
            { image: 'l19-game-mellamo.png',  label: `Me llamo`,      correctMatch: 'my-name',  objectPosition: 'center 50%', matchPhrase: `¡Sí! Me llamo means MY NAME IS!` },
            { image: 'l19-game-tengo.png',    label: `Tengo años`,    correctMatch: 'years-old',objectPosition: 'center 50%', matchPhrase: `¡Muy bien! Tengo años means I'M ___ YEARS OLD!` },
            { image: 'l19-game-soy.png',      label: `Soy`,           correctMatch: 'i-am',     objectPosition: 'center 50%', matchPhrase: `¡Perfecto! Soy means I AM!` },
            { image: 'l19-game-favorito.png', label: `Mi favorito`,   correctMatch: 'my-fav',   objectPosition: 'center 50%', matchPhrase: `¡Sí, sí! Mi favorito means MY FAVORITE!` },
          ],
          buckets: [
            { id: 'my-name',   label: `My name is`,    color: '#FBBF24' },
            { id: 'years-old', label: `I'm years old`, color: '#60A5FA' },
            { id: 'i-am',      label: `I am`,          color: '#F472B6' },
            { id: 'my-fav',    label: `My favorite`,   color: '#34D399' },
          ],
        },
        {
          type:      'quiz',
          guideText: `¡Quiz time, {name}! Earn your Favorite Finder badge!`,
          questions: [
            { format: 'multiple-choice', question: `What does "Me llamo" mean?`,                                                  options: [`I am sad`, `My name is`, `I want`, `I have`],          correctIndex: 1 },
            { format: 'multiple-choice', question: `If someone asks "¿Cómo te llamas?" they want to know your...`,                options: [`Color`, `Age`, `Name`, `Food`],                       correctIndex: 2 },
            { format: 'multiple-choice', question: `Which means "I am" in Spanish?`,                                              options: [`Tengo`, `Soy`, `Mi`, `Me`],                           correctIndex: 1 },
            { format: 'true-false', question: `"Tengo siete años" means I'm 7 years old.`,                                        correctAnswer: true },
            { format: 'fill-blank', question: `"___ favorito es el azul" — My favorite is blue.`,                                  options: [`Mi`, `Tu`, `Su`, `El`],                              correctIndex: 0 },
            { format: 'multiple-choice', question: `What does "inteligente" mean?`,                                               options: [`Kind`, `Strong`, `Smart`, `Tall`],                    correctIndex: 2 },
          ],
        },
        {
          type:            'real-world',
          guideText:       `¡Muy bien, {name}! Introduce yourself in Spanish today!`,
          familyAdventure: `Introduce yourself in Spanish to your family! TENGO ___ AÑOS! ¡SOY INTELIGENTE Y AMABLE! ¡MI COLOR FAVORITO ES ___!" Watch them be amazed!`,
          creativePrompt:  `Make a "Spanish Me!" poster! Draw a picture of yourself. Around it, write in Spanish: ME LLAMO ___, TENGO ___ AÑOS, MI COLOR FAVORITO ES ___, MI COMIDA FAVORITA ES ___, SOY ___. Hang it on your door!`,
        },
        {
          type:      'celebration',
          xpEarned:  50,
          badge:     'favorite-finder',
          badgeName: `Favorite Finder`,
          message:   `¡EXCELENTE, {name}! Now you can introduce YOURSELF in Spanish! That's the FIRST thing kids in any language learn to do. Luna is so proud! ¡Hasta luego, mi amigo!`,
        },
      ],
    },
  ],
};

(() => {
  console.log(`[LESSON-SPANISH-L19] Loaded`);
  Promise.all([
    fetch('/explorer-assets/languages/l19-s1-me-llamo.png',       { method: 'HEAD' }),
    fetch('/explorer-assets/languages/l19-s2-como-te-llamas.png', { method: 'HEAD' }),
    fetch('/explorer-assets/languages/l19-s3-color-favorito.png', { method: 'HEAD' }),
    fetch('/explorer-assets/languages/l19-s4-tengo-anos.png',     { method: 'HEAD' }),
    fetch('/explorer-assets/languages/l19-s5-soy.png',            { method: 'HEAD' }),
    fetch('/explorer-assets/languages/l19-s6-chant.png',          { method: 'HEAD' }),
  ]).then(([r1, r2, r3, r4, r5, r6]) => {
    console.log(`[ASSET-CHECK-SPANISH-L19] ${r1.ok} ${r2.ok} ${r3.ok} ${r4.ok} ${r5.ok} ${r6.ok}`);
  }).catch(() => {});
})();

export default spanish_explorer_l19_screens;
