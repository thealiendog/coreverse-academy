// ─────────────────────────────────────────────────────────────────────────────
// SPANISH (LANGUAGES)  |  L06 — La Comida (Food)
// Age band : explorers (6–8)   Guide: luna
// REWRITTEN for age-appropriate Explorer band per SPANISH_CALIBRATION_SPEC
// ─────────────────────────────────────────────────────────────────────────────

const SP_L06 = {
  ageBand:   `explorers`,
  subjectId: `languages`,
  guideId:   `luna`,

  lessons: [
    {
      id:        `sp-6-8-06`,
      title:     `La Comida — Food`,
      duration:  12,
      xpReward:  50,
      badge:     `languages-l06`,
      badgeName: `Food Friend`,

      screens: [

        // ─── WELCOME ──────────────────────────────────────────────────────
        {
          id: `sp06-welcome`,
          type: `welcome`,
          guideText: `¡Hola, {name}! Today we learn FOOD words in Spanish. Bread, milk, apple, water — we'll learn them all! Let's go!`,
          headline: `La Comida`,
          subtitle: `Food in Spanish`,
          visual: `/explorer-assets/languages/sp06-welcome.png`,
        },

        // ─── MAGAZINE 1 — BREAKFAST FOODS ─────────────────────────────────
        {
          id: `sp06-mag-1`,
          type: `magazine`,
          section: 1,
          totalSections: 3,
          headline: `Breakfast Foods`,
          paragraphs: [
            `Time to eat, {name}! Let's start with breakfast words. In Spanish, bread is PAN — PAHN. Easy, right?`,
            `Milk is LECHE — LEH-cheh. And an egg is HUEVO — WAY-voh. Pan, leche, huevo. Try saying them!`,
          ],
          image: `/explorer-assets/languages/sp06-mag-1.png`,
          imageCaption: `A breakfast plate: bread, milk in a glass, and an egg.`,
          vocab: [
            {
              word: `pan`,
              definition: `Bread — PAHN.`,
              audioPrompt: `Pan, {name}. Say it like PAHN. It means bread! Just one syllable. Try it: pan!`,
            },
            {
              word: `leche`,
              definition: `Milk — LEH-cheh.`,
              audioPrompt: `Leche, {name}. Say it like LEH-cheh. It means milk! Two soft sounds. Try it: leche!`,
            },
            {
              word: `huevo`,
              definition: `Egg — WAY-voh.`,
              audioPrompt: `Huevo, {name}. Say it like WAY-voh. It means egg! The H is quiet, remember? Try it: huevo!`,
            },
          ],
        },

        // ─── MAGAZINE 2 — FRUITS ──────────────────────────────────────────
        {
          id: `sp06-mag-2`,
          type: `magazine`,
          section: 2,
          totalSections: 3,
          headline: `Fruits`,
          paragraphs: [
            `Fruits in Spanish are fun, {name}! An apple is MANZANA — mahn-SAH-nah. A banana is PLÁTANO — PLAH-tah-noh.`,
            `An orange is NARANJA — nah-RAHN-hah. Manzana, plátano, naranja. Three yummy words!`,
          ],
          image: `/explorer-assets/languages/sp06-mag-2.png`,
          imageCaption: `Three fruits: a red apple, a yellow banana, and an orange.`,
          vocab: [
            {
              word: `manzana`,
              definition: `Apple — mahn-SAH-nah.`,
              audioPrompt: `Manzana, {name}. Say it like mahn-SAH-nah. It means apple! Three little parts. Try it: manzana!`,
            },
            {
              word: `plátano`,
              definition: `Banana — PLAH-tah-noh.`,
              audioPrompt: `Plátano, {name}. Say it like PLAH-tah-noh. It means banana! The first part is loudest. Try it: plátano!`,
            },
            {
              word: `naranja`,
              definition: `Orange — nah-RAHN-hah.`,
              audioPrompt: `Naranja, {name}. Say it like nah-RAHN-hah. It means orange — the fruit AND the color! Try it: naranja!`,
            },
          ],
        },

        // ─── MAGAZINE 3 — DRINKS + ASKING FOR FOOD ────────────────────────
        {
          id: `sp06-mag-3`,
          type: `magazine`,
          section: 3,
          totalSections: 3,
          headline: `Drinks and Asking`,
          paragraphs: [
            `Now drinks, {name}! Water is AGUA — AH-gwah. Juice is JUGO — HOO-goh.`,
            `Here's a magic phrase: YO QUIERO — YOH kee-EH-roh — I want. So "yo quiero agua" means "I want water!" Try it: yo quiero agua!`,
          ],
          image: `/explorer-assets/languages/sp06-mag-3.png`,
          imageCaption: `A glass of water and a glass of orange juice on a table.`,
          vocab: [
            {
              word: `agua`,
              definition: `Water — AH-gwah.`,
              audioPrompt: `Agua, {name}. Say it like AH-gwah. It means water! Two sounds. Try it: agua!`,
            },
            {
              word: `jugo`,
              definition: `Juice — HOO-goh.`,
              audioPrompt: `Jugo, {name}. Say it like HOO-goh. It means juice! The J sounds like H in Spanish. Try it: jugo!`,
            },
            {
              word: `yo quiero`,
              definition: `I want — YOH kee-EH-roh.`,
              audioPrompt: `Yo quiero, {name}. Say it like YOH kee-EH-roh. It means "I want." Put any food word after it! Yo quiero pan. Yo quiero agua. Try it!`,
            },
          ],
        },

        // ─── INTERACTIVE GAME ─────────────────────────────────────────────
        {
          id: `sp06-game`,
          type: `interactive`,
          guideText: `Match each Spanish food to what it means, {name}!`,
          columnHeaders: [`Spanish`, `English`],
          items: [
            { id: `sp06-i1`, label: `pan`,      correctMatch: `bread` },
            { id: `sp06-i2`, label: `leche`,    correctMatch: `milk` },
            { id: `sp06-i3`, label: `manzana`,  correctMatch: `apple` },
            { id: `sp06-i4`, label: `agua`,     correctMatch: `water` },
          ],
          buckets: [
            { id: `bread`, label: `bread`, color: `#FBBF24` },
            { id: `milk`,  label: `milk`,  color: `#60A5FA` },
            { id: `apple`, label: `apple`, color: `#F87171` },
            { id: `water`, label: `water`, color: `#34D399` },
          ],
        },

        // ─── QUIZ ─────────────────────────────────────────────────────────
        {
          id: `sp06-quiz`,
          type: `quiz`,
          guideText: `¡Vamos, {name}! Let's see what you remember!`,
          questions: [
            {
              id: `sp06-q1`,
              format: `multiple-choice`,
              question: `How do you say "bread" in Spanish?`,
              options: [`leche`, `pan`, `agua`, `huevo`],
              correctIndex: 1,
              explanation: `Pan means bread! Say it like PAHN — just one syllable.`,
            },
            {
              id: `sp06-q2`,
              format: `multiple-choice`,
              question: `What does "leche" mean?`,
              options: [`bread`, `egg`, `milk`, `water`],
              correctIndex: 2,
              explanation: `Leche means milk! Say it like LEH-cheh.`,
            },
            {
              id: `sp06-q3`,
              format: `multiple-choice`,
              question: `Which word means "apple"?`,
              options: [`naranja`, `plátano`, `manzana`, `pan`],
              correctIndex: 2,
              explanation: `Manzana means apple! Say it like mahn-SAH-nah.`,
            },
            {
              id: `sp06-q4`,
              format: `true-false`,
              question: `"Yo quiero" means "I want" in Spanish.`,
              correctAnswer: true,
              explanation: `True! Yo quiero means I want. Use it with any food word: yo quiero pan!`,
            },
            {
              id: `sp06-q5`,
              format: `multiple-choice`,
              question: `How do you say "I want water" in Spanish?`,
              options: [`yo quiero pan`, `yo quiero agua`, `yo quiero leche`, `yo quiero jugo`],
              correctIndex: 1,
              explanation: `Yo quiero agua! Agua means water — say it like AH-gwah.`,
            },
            {
              id: `sp06-q6`,
              format: `fill-blank`,
              question: `Orange (the fruit) in Spanish is ___.`,
              options: [`naranja`, `manzana`, `plátano`, `huevo`],
              correctIndex: 0,
              explanation: `Naranja! Say it like nah-RAHN-hah. It means orange — both the fruit AND the color!`,
            },
          ],
        },

        // ─── REAL WORLD ───────────────────────────────────────────────────
        {
          id: `sp06-realworld`,
          type: `real-world`,
          guideText: `Try Spanish at your next meal, {name}! Say "pan" when you reach for bread. Say "agua" with your water. Your mouth will remember!`,
          familyAdventure: `Tonight at dinner, name 3 foods on your plate in Spanish! Pan? Leche? Manzana? See who in your family can name the most!`,
          creativePrompt: `Draw your perfect plate of food! Label each food in Spanish: pan, leche, manzana, agua. Show off your tasty Spanish words!`,
        },

        // ─── CELEBRATION ──────────────────────────────────────────────────
        {
          id: `sp06-celebration`,
          type: `celebration`,
          message: `¡Excelente, {name}! You learned 9 food words in Spanish! Pan, leche, huevo, manzana, plátano, naranja, agua, jugo, and yo quiero. That's a whole meal of new words! ¡Hasta la próxima!`,
          badge: `languages-l06`,
          badgeName: `Food Friend`,
          xpEarned: 50,
        },

      ],
    },
  ],
};

export default SP_L06;

