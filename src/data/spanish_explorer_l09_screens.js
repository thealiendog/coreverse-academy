// ============================================================
// COREVERSE EXPLORERS — Spanish · Lesson 9
// "¡El Clima! Weather in Spanish"
// ============================================================

const spanish_explorer_l09_screens = {
  ageBand:   'explorers',
  subjectId: 'languages',
  guide:     'luna',
  lessons: [
    {
      id:        'sp-6-8-09',
      title:     `¡El Clima! Weather in Spanish`,
      duration:  12,
      xpReward:  50,
      badge:     'weather-watcher',
      badgeName: `Weather Watcher`,
      screens: [
        {
          type:      'welcome',
          guideText: `¡Hola, {name}! Look outside! Is it sunny? Rainy? Today: WEATHER in Spanish! Sol, lluvia, viento, nieve. ¡Vamos! Let's go!`,
        },
        {
          type:          'magazine', section: 1, totalSections: 6,
          headline:      `¡Sol! (Say: SOL)`,
          paragraphs: [
            `SOL means SUN! When it's bright outside, the SOL is shining!`,
            `Raise your arms like the sun: ¡SOL! ¡SOL! ¡SOL! Hace SOL means "it's sunny!"`,
          ],
          image:        '/explorer-assets/languages/l09-s1-sol.png',
          imageCaption: `¡Sol! Sun! Bright and warm!`,
          vocab: [
            { word: 'sol',     definition: `Sun in Spanish. Say it like: SOL.`,                                audioPrompt: `Sol — say it like SOL. Sol means sun! Raise your arms!` },
            { word: 'hace sol', definition: `It's sunny in Spanish. Say: AH-seh sol.`,                          audioPrompt: `Hace sol — it's sunny! Hace sol!` },
          ],
        },
        {
          type:          'magazine', section: 2, totalSections: 6,
          headline:      `¡Lluvia! (Say: YOO-vee-ah)`,
          paragraphs: [
            `LLUVIA means RAIN! Wiggle your fingers down like raindrops!`,
            `Try it! ¡LLUVIA! ¡LLUVIA! "Hace lluvia" or "Está lloviendo" means "it's raining!"`,
          ],
          image:        '/explorer-assets/languages/l09-s2-lluvia.png',
          imageCaption: `¡Lluvia! Rain falling down!`,
          vocab: [
            { word: 'lluvia',  definition: `Rain in Spanish. Say it like: YOO-vee-ah.`,                       audioPrompt: `Lluvia — say it like YOO-vee-ah. Lluvia means rain! Wiggle your fingers down!` },
            { word: 'paraguas', definition: `Umbrella in Spanish! Say it like: pah-RAH-gwahs.`,               audioPrompt: `Paraguas — say it like pah-RAH-gwahs. Paraguas means umbrella!` },
          ],
        },
        {
          type:          'magazine', section: 3, totalSections: 6,
          headline:      `¡Viento! (Say: vee-EN-toh)`,
          paragraphs: [
            `VIENTO means WIND! Whoosh your arms like wind! "¡WHOOOOSH!"`,
            `Try it! ¡VIENTO! "Hace viento" means "it's windy!" Hold on to your hat!`,
          ],
          image:        '/explorer-assets/languages/l09-s3-viento.png',
          imageCaption: `¡Viento! Wind! Whoosh!`,
          vocab: [
            { word: 'viento',     definition: `Wind in Spanish. Say it like: vee-EN-toh.`,                    audioPrompt: `Viento — say it like vee-EN-toh. Viento means wind! Whoosh!` },
            { word: 'hace viento', definition: `It's windy in Spanish. Say: AH-seh vee-EN-toh.`,              audioPrompt: `Hace viento — it's windy!` },
          ],
        },
        {
          type:          'magazine', section: 4, totalSections: 6,
          headline:      `¡Nieve! (Say: nee-EH-veh)`,
          paragraphs: [
            `NIEVE means SNOW! Brrrr! Cold! Shiver your shoulders!`,
            `Try it! ¡NIEVE! "Hace frío" means "it's cold!" Spanish kids in cold places love nieve!`,
          ],
          image:        '/explorer-assets/languages/l09-s4-nieve.png',
          imageCaption: `¡Nieve! Snow! ¡Hace frío! It's cold!`,
          vocab: [
            { word: 'nieve',  definition: `Snow in Spanish. Say it like: nee-EH-veh.`,                       audioPrompt: `Nieve — say it like nee-EH-veh. Nieve means snow! Brr!` },
            { word: 'frío',   definition: `Cold in Spanish. Say it like: FREE-oh.`,                            audioPrompt: `Frío — say it like FREE-oh. Frío means cold!` },
          ],
        },
        {
          type:          'magazine', section: 5, totalSections: 6,
          headline:      `¿Qué tiempo hace?`,
          paragraphs: [
            `¿QUÉ TIEMPO HACE? means "What's the weather like?" In Spanish, weather has the word "hace" — it sort of means "it makes."`,
            `Look outside! Answer: "Hace sol!" or "Hace lluvia!" or "Hace frío!" Tell Luna the weather!`,
          ],
          image:        '/explorer-assets/languages/l09-s5-que-tiempo.png',
          imageCaption: `¿Qué tiempo hace? What's the weather?`,
          vocab: [
            { word: '¿qué tiempo hace?', definition: `What's the weather? in Spanish.`,                       audioPrompt: `Qué tiempo hace — what's the weather? Ask: ¿Qué tiempo hace?` },
            { word: 'calor',             definition: `Heat or hot in Spanish. Say: ka-LOR.`,                  audioPrompt: `Calor — say it like ka-LOR. Calor means hot! Hace calor!` },
          ],
        },
        {
          type:          'magazine', section: 6, totalSections: 6,
          headline:      `Luna's Weather Chant!`,
          paragraphs: [
            `Time to CHANT! Do the action for each weather word!`,
            `¡SOL! ¡LLUVIA! ¡VIENTO! ¡NIEVE! ¡SOL! ¡LLUVIA! ¡VIENTO! ¡NIEVE! ¡OLÉ!`,
          ],
          image:        '/explorer-assets/languages/l09-s6-chant.png',
          imageCaption: `Chant the weather!`,
          vocab: [
            { word: 'weather', definition: `What's happening in the sky — sun, rain, wind, snow!`,             audioPrompt: `Weather — what's happening in the sky. Chant! Sol! Lluvia! Viento! Nieve! Sol! Lluvia! Viento! Nieve! Olé!` },
            { word: 'sky',     definition: `The big blue (or grey, or stormy) thing above us!`,              audioPrompt: `Sky — the big thing above us. Look at the sky!` },
          ],
        },
        {
          type:          'interactive',
          activityType:  'drag-match',
          instruction:   `Match each Spanish weather word to the right English word!`,
          guideText:     `Tap a Spanish weather word, then tap what it is!`,
          columnHeaders: [`Spanish`, `English`],
          items: [
            { image: 'l09-game-sol.png',    label: `Sol`,    correctMatch: 'sun',  objectPosition: 'center 50%', matchPhrase: `¡Sí! Sol is SUN! Bright!` },
            { image: 'l09-game-lluvia.png', label: `Lluvia`, correctMatch: 'rain', objectPosition: 'center 50%', matchPhrase: `¡Muy bien! Lluvia is RAIN!` },
            { image: 'l09-game-viento.png', label: `Viento`, correctMatch: 'wind', objectPosition: 'center 50%', matchPhrase: `¡Perfecto! Viento is WIND! Whoosh!` },
            { image: 'l09-game-nieve.png',  label: `Nieve`,  correctMatch: 'snow', objectPosition: 'center 50%', matchPhrase: `¡Sí, sí! Nieve is SNOW! Brr!` },
          ],
          buckets: [
            { id: 'sun',  label: `Sun`,  color: '#FBBF24' },
            { id: 'rain', label: `Rain`, color: '#60A5FA' },
            { id: 'wind', label: `Wind`, color: '#A78BFA' },
            { id: 'snow', label: `Snow`, color: '#FFFFFF' },
          ],
        },
        {
          type:      'quiz',
          guideText: `¡Quiz time, {name}! Earn your Weather Watcher badge!`,
          questions: [
            { format: 'multiple-choice', question: `What is "sol"?`,                                                            options: [`Rain`, `Sun`, `Wind`, `Snow`],                  correctIndex: 1 },
            { format: 'multiple-choice', question: `What is "lluvia"?`,                                                         options: [`Sun`, `Snow`, `Rain`, `Wind`],                  correctIndex: 2 },
            { format: 'multiple-choice', question: `Which Spanish word means SNOW?`,                                            options: [`Viento`, `Sol`, `Nieve`, `Lluvia`],              correctIndex: 2 },
            { format: 'true-false', question: `"Hace frío" means it's cold.`,                                                   correctAnswer: true },
            { format: 'fill-blank', question: `When you want to know the weather: "¿Qué tiempo ___?"`,                          options: [`hace`, `tiene`, `está`, `viene`],                correctIndex: 0 },
            { format: 'multiple-choice', question: `If it's WINDY in Spanish, you say...`,                                      options: [`Hace sol`, `Hace nieve`, `Hace viento`, `Hace lluvia`], correctIndex: 2 },
          ],
        },
        {
          type:            'real-world',
          guideText:       `¡Muy bien, {name}! Use Spanish weather every day!`,
          familyAdventure: `Every morning this week, look outside and tell your family the weather in Spanish! "¡HACE SOL!" or "¡HACE LLUVIA!" or "¡HACE FRÍO!" Make it part of your morning routine!`,
          creativePrompt:  `Make a "Weather Wheel" in Spanish. Cut a circle. Divide it into 4 parts. Draw and label each one: SOL, LLUVIA, VIENTO, NIEVE. Add an arrow you can spin to today's weather!`,
        },
        {
          type:      'celebration',
          xpEarned:  50,
          badge:     'weather-watcher',
          badgeName: `Weather Watcher`,
          message:   `¡EXCELENTE, {name}! Now you can talk about weather in Spanish — every single day! Luna is so proud. ¡Hasta luego!`,
        },
      ],
    },
  ],
};

(() => {
  console.log(`[LESSON-SPANISH-L09] Loaded`);
  Promise.all([
    fetch('/explorer-assets/languages/l09-s1-sol.png',       { method: 'HEAD' }),
    fetch('/explorer-assets/languages/l09-s2-lluvia.png',    { method: 'HEAD' }),
    fetch('/explorer-assets/languages/l09-s3-viento.png',    { method: 'HEAD' }),
    fetch('/explorer-assets/languages/l09-s4-nieve.png',     { method: 'HEAD' }),
    fetch('/explorer-assets/languages/l09-s5-que-tiempo.png',{ method: 'HEAD' }),
    fetch('/explorer-assets/languages/l09-s6-chant.png',     { method: 'HEAD' }),
  ]).then(([r1, r2, r3, r4, r5, r6]) => {
    console.log(`[ASSET-CHECK-SPANISH-L09] ${r1.ok} ${r2.ok} ${r3.ok} ${r4.ok} ${r5.ok} ${r6.ok}`);
  }).catch(() => {});
})();

export default spanish_explorer_l09_screens;
