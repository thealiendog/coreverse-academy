// ============================================================
// COREVERSE EXPLORERS — Spanish · Lesson 15
// "¡Países! Spanish-Speaking Countries"
// ============================================================

const spanish_explorer_l15_screens = {
  ageBand:   'explorers',
  subjectId: 'languages',
  guide:     'luna',
  lessons: [
    {
      id:        'sp-6-8-15',
      title:     `¡Países! Spanish-Speaking Countries`,
      duration:  12,
      xpReward:  50,
      badge:     'world-traveler',
      badgeName: `World Traveler`,
      screens: [
        {
          type:      'welcome',
          guideText: `¡Hola, {name}! Did you know more than 20 COUNTRIES speak Spanish? Today: meet some of them! México, España, Colombia, Argentina, Perú, Cuba. Get ready to travel! ¡Vamos!`,
        },
        {
          type:          'magazine', section: 1, totalSections: 6,
          headline:      `¡México! (Say: MEH-hee-koh)`,
          paragraphs: [
            `MÉXICO is a HUGE country just south of the United States! Famous for tacos, sombreros, and ancient pyramids!`,
            `Try it: ¡MÉXICO! "Soy de México" means "I'm from Mexico!"`,
          ],
          image:        '/explorer-assets/languages/l15-s1-mexico.png',
          imageCaption: `¡México! Tacos, sombreros, pyramids!`,
          vocab: [
            { word: 'México', definition: `A big country south of the USA where they speak Spanish!`,         audioPrompt: `México — a big country south of the USA. They speak Spanish there!` },
            { word: 'país',   definition: `Country in Spanish. Say: pah-EES.`,                                 audioPrompt: `País — say it like pah-EES. País means country!` },
          ],
        },
        {
          type:          'magazine', section: 2, totalSections: 6,
          headline:      `¡España! (Say: es-PAH-nyah)`,
          paragraphs: [
            `ESPAÑA is SPAIN — across the ocean in Europe! It's where Spanish first started!`,
            `Try it: ¡ESPAÑA! Famous for flamenco dancing and yummy food called paella!`,
          ],
          image:        '/explorer-assets/languages/l15-s2-espana.png',
          imageCaption: `¡España! Where Spanish was born!`,
          vocab: [
            { word: 'España',  definition: `The country of Spain — where Spanish started!`,                  audioPrompt: `España — Spain! Where Spanish started! Across the ocean in Europe.` },
            { word: 'español', definition: `The Spanish language! Say: es-pah-NYOL.`,                          audioPrompt: `Español — say it like es-pah-NYOL. Español means the Spanish language!` },
          ],
        },
        {
          type:          'magazine', section: 3, totalSections: 6,
          headline:      `¡Colombia! (Say: ko-LOM-bee-ah)`,
          paragraphs: [
            `COLOMBIA is in South America! Famous for coffee, music, and Carnival!`,
            `Try it: ¡COLOMBIA! Spanish-speaking kids from Colombia are bilingual amigos!`,
          ],
          image:        '/explorer-assets/languages/l15-s3-colombia.png',
          imageCaption: `¡Colombia! Coffee, music, Carnival!`,
          vocab: [
            { word: 'Colombia',       definition: `A country in South America where they speak Spanish!`,    audioPrompt: `Colombia — a country in South America! Famous for coffee!` },
            { word: 'Sudamérica',     definition: `South America in Spanish! Say: sood-ah-MEH-ree-kah.`,    audioPrompt: `Sudamérica — say it like sood-ah-MEH-ree-kah. Sudamérica means South America!` },
          ],
        },
        {
          type:          'magazine', section: 4, totalSections: 6,
          headline:      `¡Argentina! (Say: ar-hen-TEE-nah)`,
          paragraphs: [
            `ARGENTINA is far down in South America! Famous for soccer stars and tango dancing!`,
            `Try it: ¡ARGENTINA! It's so big it has mountains AND beaches AND ice glaciers!`,
          ],
          image:        '/explorer-assets/languages/l15-s4-argentina.png',
          imageCaption: `¡Argentina! Soccer, tango, mountains!`,
          vocab: [
            { word: 'Argentina', definition: `A big South American country famous for soccer!`,              audioPrompt: `Argentina — a big country in South America! Famous for fútbol!` },
            { word: 'tango',     definition: `A famous Argentinian dance! Say: TAHN-go.`,                     audioPrompt: `Tango — a famous dance from Argentina!` },
          ],
        },
        {
          type:          'magazine', section: 5, totalSections: 6,
          headline:      `¡Perú y Cuba! (Say: peh-ROO and KOO-bah)`,
          paragraphs: [
            `PERÚ is home to Machu Picchu — ancient stone cities in the mountains!`,
            `CUBA is a beautiful ISLAND in the Caribbean Sea! Try them: ¡PERÚ! ¡CUBA!`,
          ],
          image:        '/explorer-assets/languages/l15-s5-peru-cuba.png',
          imageCaption: `¡Perú! ¡Cuba! Mountains and islands!`,
          vocab: [
            { word: 'Perú',  definition: `A country in South America with ancient mountain cities!`,         audioPrompt: `Perú — a country in South America. Home of Machu Picchu in the mountains!` },
            { word: 'Cuba',  definition: `A Spanish-speaking ISLAND in the Caribbean Sea!`,                  audioPrompt: `Cuba — a beautiful island in the Caribbean Sea!` },
          ],
        },
        {
          type:          'magazine', section: 6, totalSections: 6,
          headline:      `Luna's Countries Chant!`,
          paragraphs: [
            `Time to CHANT the Spanish countries! Wave like you're saying hi to each one!`,
            `¡MÉXICO! ¡ESPAÑA! ¡COLOMBIA! ¡ARGENTINA! ¡PERÚ! ¡CUBA! ¡OLÉ!`,
          ],
          image:        '/explorer-assets/languages/l15-s6-chant.png',
          imageCaption: `Chant the Spanish-speaking countries!`,
          vocab: [
            { word: 'world',   definition: `All the countries put together!`,                                 audioPrompt: `World — all the countries together. Chant! México! España! Colombia! Argentina! Perú! Cuba! Olé!` },
            { word: 'travel',  definition: `To go to new places!`,                                            audioPrompt: `Travel — to go to new places. Travel the Spanish world!` },
          ],
        },
        {
          type:          'interactive',
          activityType:  'drag-match',
          instruction:   `Match each country to where it is!`,
          guideText:     `Tap a country, then tap where in the world it is!`,
          columnHeaders: [`Country`, `Where?`],
          items: [
            { image: 'l15-game-mexico.png',    label: `México`,    correctMatch: 'north-am', objectPosition: 'center 50%', matchPhrase: `¡Sí! México is in North America!` },
            { image: 'l15-game-espana.png',    label: `España`,    correctMatch: 'europe',   objectPosition: 'center 50%', matchPhrase: `¡Muy bien! España is in EUROPE!` },
            { image: 'l15-game-colombia.png',  label: `Colombia`,  correctMatch: 'south-am', objectPosition: 'center 50%', matchPhrase: `¡Perfecto! Colombia is in SOUTH America!` },
            { image: 'l15-game-cuba.png',      label: `Cuba`,      correctMatch: 'island',   objectPosition: 'center 50%', matchPhrase: `¡Sí, sí! Cuba is an ISLAND!` },
          ],
          buckets: [
            { id: 'north-am', label: `North America`, color: '#FBBF24' },
            { id: 'europe',   label: `Europe`,        color: '#EF4444' },
            { id: 'south-am', label: `South America`, color: '#34D399' },
            { id: 'island',   label: `Island`,        color: '#60A5FA' },
          ],
        },
        {
          type:      'quiz',
          guideText: `¡Quiz time, {name}! Earn your World Traveler badge!`,
          questions: [
            { format: 'multiple-choice', question: `Which country is south of the USA?`,                                          options: [`España`, `México`, `Perú`, `Cuba`],                 correctIndex: 1 },
            { format: 'multiple-choice', question: `Where did Spanish first start?`,                                              options: [`Argentina`, `Cuba`, `España`, `Perú`],              correctIndex: 2 },
            { format: 'multiple-choice', question: `Which country is famous for tango dancing?`,                                  options: [`Argentina`, `México`, `España`, `Cuba`],            correctIndex: 0 },
            { format: 'true-false', question: `Cuba is an island in the Caribbean Sea.`,                                          correctAnswer: true },
            { format: 'fill-blank', question: `"___ " means country in Spanish.`,                                                  options: [`País`, `Casa`, `Mundo`, `Mar`],                     correctIndex: 0 },
            { format: 'multiple-choice', question: `How many countries speak Spanish?`,                                           options: [`Just 2`, `About 5`, `More than 20!`, `Just 1`],     correctIndex: 2 },
          ],
        },
        {
          type:            'real-world',
          guideText:       `¡Muy bien, {name}! Find the Spanish countries on a real map!`,
          familyAdventure: `Get a globe or world map. Find MÉXICO, ESPAÑA, COLOMBIA, ARGENTINA, PERÚ, CUBA. Touch each one and say its name in Spanish. Ask your family if anyone has visited a Spanish-speaking country!`,
          creativePrompt:  `Draw a Spanish World Map! Draw a simple world. Mark the 6 Spanish countries with stars. Add a flag or fun drawing for each one — tacos for México, soccer ball for Argentina, mountains for Perú!`,
        },
        {
          type:      'celebration',
          xpEarned:  50,
          badge:     'world-traveler',
          badgeName: `World Traveler`,
          message:   `¡EXCELENTE, {name}! Now you know SIX Spanish-speaking countries! Spanish kids are everywhere — and now they're your amigos around the world. Luna is so proud! ¡Hasta luego!`,
        },
      ],
    },
  ],
};

(() => {
  console.log(`[LESSON-SPANISH-L15] Loaded`);
  Promise.all([
    fetch('/explorer-assets/languages/l15-s1-mexico.png',    { method: 'HEAD' }),
    fetch('/explorer-assets/languages/l15-s2-espana.png',    { method: 'HEAD' }),
    fetch('/explorer-assets/languages/l15-s3-colombia.png',  { method: 'HEAD' }),
    fetch('/explorer-assets/languages/l15-s4-argentina.png', { method: 'HEAD' }),
    fetch('/explorer-assets/languages/l15-s5-peru-cuba.png', { method: 'HEAD' }),
    fetch('/explorer-assets/languages/l15-s6-chant.png',     { method: 'HEAD' }),
  ]).then(([r1, r2, r3, r4, r5, r6]) => {
    console.log(`[ASSET-CHECK-SPANISH-L15] ${r1.ok} ${r2.ok} ${r3.ok} ${r4.ok} ${r5.ok} ${r6.ok}`);
  }).catch(() => {});
})();

export default spanish_explorer_l15_screens;
