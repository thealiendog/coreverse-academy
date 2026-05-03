// ============================================================
// COREVERSE EXPLORERS — Cosmos · Lesson 4
// "Living Things: What Makes Something Alive?"
// Ages 6–8 | Guide: Nova | ExplorerLessonPlayer format
// ============================================================

const cosmos_explorer_l04_screens = {
  ageBand:   'explorers',
  subjectId: 'cosmos',
  guide:     'nova',
  lessons: [
    {
      id:        'cs-6-8-04',
      title:     `Living Things: What Makes Something Alive?`,
      duration:  12,
      xpReward:  50,
      badge:     'life-scientist',
      badgeName: `Life Scientist`,
      screens: [
        // PHASE 1 — WELCOME
        {
          type:      'welcome',
          guideText: `Is a fire alive? It moves, it grows, it consumes fuel and releases gases, and it dies when it runs out of fuel. But a fire is NOT alive. So what exactly makes something living? Scientists have spent centuries figuring this out — and today you're going to know the answer.`,
        },

        // PHASE 2 — MAGAZINE STORY (4 sections)
        {
          type:          'magazine',
          section:       1,
          totalSections: 4,
          headline:      `What Makes Something Alive?`,
          paragraphs: [
            `All living things share seven characteristics that separate them from non-living things. These seven signs of life define what it means to be alive — and something must do ALL seven to count.`,
            `Here they are: (1) made of cells, (2) need energy — they eat, absorb sunlight, or break down chemicals, (3) grow and develop, (4) respond to their environment, (5) reproduce — make more of themselves, (6) maintain a stable internal environment like body temperature, and (7) evolve over generations.`,
            `Fire moves, grows, and even "eats" fuel — but it has no cells, can't reproduce, and doesn't maintain a stable internal environment. It fails the test. These seven signs together are what make life extraordinary.`,
          ],
          image:        '/explorer-assets/cosmos/l04-magazine-seven-signs.png',
          imageCaption: `The seven signs of life — all seven are required for something to truly be alive`,
          vocab: [
            { word: 'characteristics', definition: `Qualities or features that define something — the seven characteristics of life are the features that all living things share, and non-living things do not.`, audioPrompt: `Characteristics — qualities or features that define something. The seven characteristics of life are the features that all living things share, and non-living things do not.` },
            { word: 'reproduce',       definition: `To make more of yourself — one of the seven signs of life. Every living thing can reproduce, whether by seeds, eggs, cell division, or birth.`,             audioPrompt: `Reproduce — to make more of yourself, one of the seven signs of life. Every living thing can reproduce, whether by seeds, eggs, cell division, or birth.` },
          ],
        },
        {
          type:          'magazine',
          section:       2,
          totalSections: 4,
          headline:      `Cells: The Smallest Unit of Life`,
          paragraphs: [
            `Every living thing is made of cells — the smallest unit of life. Some living things are made of just ONE cell, like bacteria. A single bacterium is a complete living thing, doing everything it needs to survive inside one microscopic package.`,
            `Humans are made of about 37 trillion cells. Every one of those cells is like a tiny factory — taking in nutrients, producing energy, and carrying out the processes that keep you alive. And here's something extraordinary: every single cell in your body contains a complete copy of your DNA.`,
            `DNA is the instruction manual for life — a code that tells each cell what to do and what to make. The same DNA is in your skin cells, your brain cells, your heart cells. It's the blueprint that makes you, you.`,
          ],
          image:        '/explorer-assets/cosmos/l04-magazine-cells.png',
          imageCaption: `Cells — the smallest unit of life, from single-celled bacteria to 37 trillion in a human body`,
          vocab: [
            { word: 'cell', definition: `The smallest unit of life — every living thing is made of one or more cells, each one a tiny living factory that carries out all the processes needed to survive.`, audioPrompt: `Cell — the smallest unit of life. Every living thing is made of one or more cells, each one a tiny living factory that carries out all the processes needed to survive.` },
            { word: 'DNA',  definition: `The chemical instruction manual found inside every cell — it contains the code that tells cells what to do and makes every living thing unique.`,                    audioPrompt: `DNA — the chemical instruction manual found inside every cell. It contains the code that tells cells what to do and makes every living thing unique.` },
          ],
        },
        {
          type:          'magazine',
          section:       3,
          totalSections: 4,
          headline:      `The Five Kingdoms of Life`,
          paragraphs: [
            `Scientists organise all life on Earth into groups called kingdoms. The main five are: Animals — us, dogs, fish, insects. Plants — trees, flowers, grass. Fungi — mushrooms, mould, yeast. Bacteria — microscopic single-celled organisms. And Protists — single-celled organisms that aren't bacteria, like amoeba.`,
            `Scientists estimate there are 8.7 million species of life on Earth — and we've only discovered about 1.2 million of them. The vast majority of life on our planet is still unknown to us. Most undiscovered species are insects and deep-sea creatures, in the parts of the world humans rarely reach.`,
            `Every one of those millions of species, from the tiniest bacterium to the blue whale, meets all seven signs of life. Different shapes, different sizes, different kingdoms — but the same fundamental definition of being alive.`,
          ],
          image:        '/explorer-assets/cosmos/l04-magazine-kingdoms.png',
          imageCaption: `The five kingdoms of life — Animals, Plants, Fungi, Bacteria, and Protists`,
          vocab: [
            { word: 'kingdoms', definition: `The major groupings scientists use to organise all living things — the five main kingdoms are Animals, Plants, Fungi, Bacteria, and Protists.`,                             audioPrompt: `Kingdoms — the major groupings scientists use to organise all living things. The five main kingdoms are Animals, Plants, Fungi, Bacteria, and Protists.` },
            { word: 'species',  definition: `A group of living things that share the same characteristics and can reproduce together — scientists estimate there are 8.7 million species of life on Earth.`, audioPrompt: `Species — a group of living things that share the same characteristics and can reproduce together. Scientists estimate there are 8.7 million species of life on Earth.` },
          ],
        },
        {
          type:          'magazine',
          section:       4,
          totalSections: 4,
          headline:      `Life at Its Strangest`,
          paragraphs: [
            `Life on Earth is far weirder than you might expect. Tardigrades — also called water bears — are microscopic animals that can survive in the vacuum of outer space, in boiling water, and in solid ice. They're basically indestructible.`,
            `Some bacteria live in scalding hot springs or inside polar ice. Trees communicate with each other through underground fungal networks, sharing nutrients and chemical signals. One species of jellyfish can revert back to its juvenile state when stressed — essentially resetting its life cycle and potentially living forever.`,
            `Life finds a way into almost every corner of our planet — and the strangest examples remind us that the seven signs of life are a framework, not a limit. Whatever shape it takes, wherever it lives, life is endlessly inventive.`,
          ],
          image:        '/explorer-assets/cosmos/l04-magazine-extremes.png',
          imageCaption: `Extremophiles and oddities — life surviving in outer space, boiling springs, and frozen tundra`,
          vocab: [
            { word: 'tardigrade',    definition: `A microscopic animal — also called a water bear — that can survive extreme conditions including outer space, boiling water, and solid ice. One of the hardiest living things on Earth.`, audioPrompt: `Tardigrade — a microscopic animal, also called a water bear, that can survive extreme conditions including outer space, boiling water, and solid ice. One of the hardiest living things on Earth.` },
            { word: 'extremophile', definition: `A living thing that thrives in extreme conditions — like bacteria living in boiling hot springs or freezing ice — showing that life can adapt to almost any environment.`,               audioPrompt: `Extremophile — a living thing that thrives in extreme conditions, like bacteria living in boiling hot springs or freezing ice, showing that life can adapt to almost any environment.` },
          ],
        },

        // PHASE 3 — INTERACTIVE
        {
          type:          'interactive',
          activityType:  'drag-match',
          instruction:   `Tap each card, then tap whether it's living or never living!`,
          guideText:     `Remember the seven signs of life — something must meet ALL seven to be alive. Some of these examples look like they might be alive. Some are tricky! Can you sort them correctly?`,
          columnHeaders: [`What Is It?`, `Living or Never Living?`],
          items: [
            { image: 'l04-game-mushroom.png',  label: `A mushroom growing on a decaying log.`,              correctMatch: 'living',       objectPosition: 'center 50%', matchPhrase: `Living! Mushrooms are fungi — one of the five kingdoms of life. They're made of cells, they grow, they reproduce by releasing spores, and they respond to their environment. A mushroom meets all seven signs of life.` },
            { image: 'l04-game-fire.png',      label: `A fire burning in a fireplace.`,                     correctMatch: 'never-living', objectPosition: 'center 50%', matchPhrase: `Never living! Fire moves, grows, and consumes fuel — but it has no cells, can't reproduce, and doesn't maintain a stable internal environment. It fails the seven-sign test. Fire is a chemical reaction, not a living thing.` },
            { image: 'l04-game-bacterium.png', label: `A single bacterium viewed under a microscope.`,      correctMatch: 'living',       objectPosition: 'center 50%', matchPhrase: `Living! A bacterium is a complete living thing in a single cell — the simplest form of life. It takes in energy, grows, responds to its environment, and reproduces. One tiny cell, all seven signs of life.` },
            { image: 'l04-game-crystal.png',   label: `A crystal slowly growing inside a cave.`,            correctMatch: 'never-living', objectPosition: 'center 50%', matchPhrase: `Never living! Crystals grow — but they don't have cells, don't need energy, can't reproduce, and don't respond to their environment. Growth alone isn't enough to be alive. Crystals are a beautiful trick question.` },
          ],
          buckets: [
            { id: 'living',       label: `🌱 Living`,       color: '#34D399' },
            { id: 'never-living', label: `⚙️ Never Living`, color: '#F59E0B' },
          ],
        },

        // PHASE 4 — MASTERY QUIZ
        {
          type:      'quiz',
          guideText: `Quiz time, {name}! Let's see what you've learned about what makes something alive. Answer all 6 questions to earn your Life Scientist badge!`,
          questions: [
            {
              format:       'multiple-choice',
              question:     `How many characteristics do all living things share?`,
              options:      [`3`, `5`, `7`, `10`],
              correctIndex: 2,
            },
            {
              format:       'multiple-choice',
              question:     `What is the smallest unit of life?`,
              options:      [`An atom`, `A molecule`, `A cell`, `A gene`],
              correctIndex: 2,
            },
            {
              format:       'multiple-choice',
              question:     `Is a fire alive? Why or why not?`,
              options:      [`Yes — it moves and grows`, `Yes — it consumes fuel and releases waste`, `No — it doesn't have cells, can't reproduce, and doesn't meet all seven signs of life`, `Scientists still aren't sure`],
              correctIndex: 2,
            },
            {
              format:        'true-false',
              question:      `Every cell in your body contains a complete copy of your DNA.`,
              correctAnswer: true,
            },
            {
              format:       'fill-blank',
              question:     `Scientists estimate there are ___ million species of life on Earth, but we've only discovered about 1.2 million.`,
              options:      [`8.7`, `4.5`, `12`, `100`],
              correctIndex: 0,
            },
            {
              format:       'multiple-choice',
              question:     `Which of the following is a characteristic ALL living things share?`,
              options:      [`They can fly`, `They have a skeleton`, `They are made of cells`, `They live in water`],
              correctIndex: 2,
            },
          ],
        },

        // PHASE 5 — REAL-WORLD CONNECTION
        {
          type:            'real-world',
          guideText:       `Try this at home — see how many living things you can spot, and how many different kingdoms!`,
          familyAdventure: `Go on a life-spotting walk outside. Count how many different living things you can find — plants, insects, birds, fungi, even bacteria (look for mould on decaying things). Try to find at least 20 different species. How many kingdoms of life can you spot in one walk?`,
          creativePrompt:  `Look around your home and make two lists: LIVING (or once was living) and NEVER LIVING. Things like wood, cotton, and paper were once living. Things like plastic, metal, and glass were never alive. Test each item against the seven signs of life. Which ones surprised you?`,
        },

        // PHASE 6 — CELEBRATION
        {
          type:      'celebration',
          xpEarned:  50,
          badge:     'life-scientist',
          badgeName: `Life Scientist`,
          message:   `Brilliant work, {name}! You now know that fire isn't alive, that your body contains 37 trillion tiny living factories, and that there are still millions of species on Earth no one has ever named. Life is the most extraordinary thing in the cosmos — and you're made of it. Nova is so proud to share the universe with you.`,
        },
      ],
    },
  ],
};

// Log on module load — confirms lesson wired correctly + verifies image assets at runtime
(() => {
  const l    = cosmos_explorer_l04_screens.lessons[0];
  const mags = l.screens.filter(s => s.type === 'magazine').length;
  const game = l.screens.find(s => s.type === 'interactive')?.items?.length || 0;
  const quiz = l.screens.find(s => s.type === 'quiz')?.questions?.length || 0;
  console.log(`[LESSON-COSMOS-L04] Loaded: "Living Things: What Makes Something Alive?" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
  Promise.all([
    fetch('/explorer-assets/cosmos/l04-magazine-seven-signs.png', { method: 'HEAD' }),
    fetch('/explorer-assets/cosmos/l04-magazine-cells.png',       { method: 'HEAD' }),
    fetch('/explorer-assets/cosmos/l04-magazine-kingdoms.png',    { method: 'HEAD' }),
    fetch('/explorer-assets/cosmos/l04-magazine-extremes.png',    { method: 'HEAD' }),
  ]).then(([r1, r2, r3, r4]) => {
    console.log(`[ASSET-CHECK-COSMOS-L04] seven-signs: ${r1.ok}, cells: ${r2.ok}, kingdoms: ${r3.ok}, extremes: ${r4.ok}`);
  }).catch(() => {
    console.log('[ASSET-CHECK-COSMOS-L04] Could not verify image assets — network check failed');
  });
})();

export default cosmos_explorer_l04_screens;
