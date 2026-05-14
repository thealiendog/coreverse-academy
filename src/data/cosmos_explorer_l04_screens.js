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

        // PHASE 2 — MAGAZINE STORY (6 sections)
        {
          type:          'magazine',
          section:       1,
          totalSections: 6,
          headline:      `The Seven Signs of Life`,
          paragraphs: [
            `All living things share seven characteristics that separate them from non-living things. Something must do ALL seven to count as alive.`,
            `They are: (1) made of cells, (2) need energy, (3) grow, (4) respond to their environment, (5) reproduce, (6) keep stable inside, and (7) evolve.`,
          ],
          image:        '/explorer-assets/cosmos/l04-s1-seven-signs.png',
          imageCaption: `The seven signs of life — all seven required to be truly alive`,
          vocab: [
            { word: 'characteristic', definition: `A quality or feature that defines something. Living things share seven characteristics that make them alive.`, audioPrompt: `Characteristic — a quality or feature that defines something. Living things share seven characteristics that make them alive.` },
            { word: 'alive',          definition: `Meeting all seven signs of life. Something must do ALL seven to be alive — not just some.`, audioPrompt: `Alive — meeting all seven signs of life. Something must do all seven to be alive, not just some.` },
          ],
        },
        {
          type:          'magazine',
          section:       2,
          totalSections: 6,
          headline:      `The Fire Test`,
          paragraphs: [
            `A fire moves, grows, and even consumes fuel like it's eating. But fire is NOT alive.`,
            `It has no cells, can't reproduce, and doesn't keep a stable internal environment. It fails the test. The seven signs together are what make life truly extraordinary.`,
          ],
          image:        '/explorer-assets/cosmos/l04-s2-fire-test.png',
          imageCaption: `Fire grows and moves — but fails the seven-sign test. Not alive.`,
          vocab: [
            { word: 'non-living', definition: `Something that's never been alive — like fire, rocks, or water. Fire grows and consumes fuel but is still non-living.`, audioPrompt: `Non-living — something that's never been alive, like fire, rocks, or water. Fire grows and consumes fuel but is still non-living.` },
            { word: 'reproduce',  definition: `To make more of yourself. Every living thing can reproduce — fire can't, which is one reason it isn't alive.`, audioPrompt: `Reproduce — to make more of yourself. Every living thing can reproduce. Fire can't, which is one reason it isn't alive.` },
          ],
        },
        {
          type:          'magazine',
          section:       3,
          totalSections: 6,
          headline:      `Cells: The Building Blocks`,
          paragraphs: [
            `Every living thing is made of cells — the smallest unit of life. Some living things are just ONE cell, like bacteria.`,
            `A single bacterium is a complete living thing in a microscopic package. Humans, by comparison, are made of about 37 trillion cells.`,
          ],
          image:        '/explorer-assets/cosmos/l04-s3-cells.png',
          imageCaption: `From one cell to 37 trillion — cells are the building blocks of every living thing`,
          vocab: [
            { word: 'cell',     definition: `The smallest unit of life. Every living thing is made of one or more cells — each one a tiny living factory.`, audioPrompt: `Cell — the smallest unit of life. Every living thing is made of one or more cells, each one a tiny living factory.` },
            { word: 'bacteria', definition: `Tiny single-celled living things. One bacterium is a complete living thing in just one microscopic cell.`, audioPrompt: `Bacteria — tiny single-celled living things. One bacterium is a complete living thing in just one microscopic cell.` },
          ],
        },
        {
          type:          'magazine',
          section:       4,
          totalSections: 6,
          headline:      `DNA: The Instruction Manual`,
          paragraphs: [
            `Every single cell in your body contains a complete copy of your DNA — the chemical code that tells each cell what to do and what to make.`,
            `The same DNA is in your skin, your brain, your heart. It's the blueprint that makes you, you.`,
          ],
          image:        '/explorer-assets/cosmos/l04-s4-dna.png',
          imageCaption: `DNA — the chemical instruction manual inside every one of your cells`,
          vocab: [
            { word: 'DNA',       definition: `The chemical instruction manual inside every cell. DNA is the code that tells cells what to do and makes each living thing unique.`, audioPrompt: `DNA — the chemical instruction manual inside every cell. DNA is the code that tells cells what to do and makes each living thing unique.` },
            { word: 'blueprint', definition: `A plan or pattern for building something. Your DNA is the blueprint that makes you, you — unique from every other living thing.`, audioPrompt: `Blueprint — a plan or pattern for building something. Your DNA is the blueprint that makes you, you, unique from every other living thing.` },
          ],
        },
        {
          type:          'magazine',
          section:       5,
          totalSections: 6,
          headline:      `The Five Kingdoms`,
          paragraphs: [
            `Scientists organise all life on Earth into five main kingdoms: Animals, Plants, Fungi, Bacteria, and Protists.`,
            `There are an estimated 8.7 million species of life on Earth — and we've only discovered about 1.2 million. Most of life is still unknown.`,
          ],
          image:        '/explorer-assets/cosmos/l04-s5-five-kingdoms.png',
          imageCaption: `Five kingdoms of life — and 8.7 million species, most of them still undiscovered`,
          vocab: [
            { word: 'kingdoms', definition: `The major groups scientists use to organise all living things — Animals, Plants, Fungi, Bacteria, and Protists.`, audioPrompt: `Kingdoms — the major groups scientists use to organise all living things: Animals, Plants, Fungi, Bacteria, and Protists.` },
            { word: 'species',  definition: `A group of living things that share characteristics and can reproduce together. There are an estimated 8.7 million species on Earth.`, audioPrompt: `Species — a group of living things that share characteristics and can reproduce together. There are an estimated 8.7 million species on Earth.` },
          ],
        },
        {
          type:          'magazine',
          section:       6,
          totalSections: 6,
          headline:      `Life Finds a Way`,
          paragraphs: [
            `Tardigrades — microscopic water bears — can survive in outer space, boiling water, and solid ice. They're basically indestructible.`,
            `Bacteria thrive in scalding hot springs. Trees talk to each other through underground fungal networks. Life finds a way into every corner of our planet.`,
          ],
          image:        '/explorer-assets/cosmos/l04-s6-life-finds-a-way.png',
          imageCaption: `Life finds a way — from outer space to boiling springs to underground tree networks`,
          vocab: [
            { word: 'tardigrade',   definition: `A microscopic "water bear" — one of the toughest creatures on Earth. Can survive outer space, boiling water, and solid ice.`, audioPrompt: `Tardigrade — a microscopic water bear, one of the toughest creatures on Earth. Can survive outer space, boiling water, and solid ice.` },
            { word: 'extremophile', definition: `A living thing that thrives in extreme conditions — like bacteria living in boiling hot springs or freezing ice.`, audioPrompt: `Extremophile — a living thing that thrives in extreme conditions, like bacteria living in boiling hot springs or freezing ice.` },
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
    fetch('/explorer-assets/cosmos/l04-s1-seven-signs.png',       { method: 'HEAD' }),
    fetch('/explorer-assets/cosmos/l04-s2-fire-test.png',         { method: 'HEAD' }),
    fetch('/explorer-assets/cosmos/l04-s3-cells.png',             { method: 'HEAD' }),
    fetch('/explorer-assets/cosmos/l04-s4-dna.png',               { method: 'HEAD' }),
    fetch('/explorer-assets/cosmos/l04-s5-five-kingdoms.png',     { method: 'HEAD' }),
    fetch('/explorer-assets/cosmos/l04-s6-life-finds-a-way.png',  { method: 'HEAD' }),
  ]).then(([r1, r2, r3, r4, r5, r6]) => {
    console.log(`[ASSET-CHECK-COSMOS-L04] seven-signs: ${r1.ok}, fire-test: ${r2.ok}, cells: ${r3.ok}, dna: ${r4.ok}, five-kingdoms: ${r5.ok}, life-finds-a-way: ${r6.ok}`);
  }).catch(() => {
    console.log('[ASSET-CHECK-COSMOS-L04] Could not verify image assets — network check failed');
  });
})();

export default cosmos_explorer_l04_screens;
