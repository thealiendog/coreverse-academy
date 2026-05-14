// ============================================================
// COREVERSE EXPLORERS — Cosmos · Lesson 12
// "Ecosystems: Everything Is Connected"
// Ages 6–8 | Guide: Nova | ExplorerLessonPlayer format
// ============================================================

const cosmos_explorer_l12_screens = {
  ageBand:   'explorers',
  subjectId: 'cosmos',
  guide:     'nova',
  lessons: [
    {
      id:        'cs-6-8-12',
      title:     `Ecosystems: Everything Is Connected`,
      duration:  12,
      xpReward:  50,
      badge:     'ecosystem-guardian',
      badgeName: `Ecosystem Guardian`,
      screens: [
        // PHASE 1 — WELCOME
        {
          type:      'welcome',
          guideText: `In the 1990s, scientists reintroduced wolves to Yellowstone National Park after they'd been gone for 70 years. What happened next shocked everyone. The wolves changed not just the animal populations, but the rivers. How could wolves change rivers? The answer reveals one of the most beautiful truths in science: everything is connected.`,
        },

        // PHASE 2 — MAGAZINE STORY (6 sections)
        {
          type:          'magazine',
          section:       1,
          totalSections: 6,
          headline:      `What Is an Ecosystem?`,
          paragraphs: [
            `An ecosystem is all the living things in an area, interacting with each other and with the non-living parts of their environment.`,
            `Ecosystems can be as huge as an ocean or as small as a single puddle. Everything in an ecosystem is connected to everything else.`,
          ],
          image:        '/explorer-assets/cosmos/l12-s1-ecosystem.png',
          imageCaption: `An ecosystem — living things and their environment, all woven together`,
          vocab: [
            { word: 'ecosystem',   definition: `All living things in an area interacting with each other and with the non-living parts of their environment.`, audioPrompt: `Ecosystem — all living things in an area interacting with each other and with the non-living parts of their environment.` },
            { word: 'environment', definition: `Everything around a living thing — both the other living things AND the non-living parts like sunlight, water, soil, and air.`, audioPrompt: `Environment — everything around a living thing. Both the other living things and the non-living parts like sunlight, water, soil, and air.` },
          ],
        },
        {
          type:          'magazine',
          section:       2,
          totalSections: 6,
          headline:      `Biotic and Abiotic`,
          paragraphs: [
            `The living parts of an ecosystem are called biotic factors — plants, animals, fungi, bacteria.`,
            `The non-living parts — sunlight, water, soil, temperature — are called abiotic factors. Both are essential. Remove the sunlight from a forest and the whole ecosystem collapses.`,
          ],
          image:        '/explorer-assets/cosmos/l12-s2-biotic-abiotic.png',
          imageCaption: `Every ecosystem has two kinds of parts — living (biotic) and non-living (abiotic)`,
          vocab: [
            { word: 'biotic factor',  definition: `A living part of an ecosystem — plants, animals, fungi, and bacteria are all biotic factors.`, audioPrompt: `Biotic factor — a living part of an ecosystem. Plants, animals, fungi, and bacteria are all biotic factors.` },
            { word: 'abiotic factor', definition: `A non-living part of an ecosystem — sunlight, water, soil, and temperature. Without them, no life is possible.`, audioPrompt: `Abiotic factor — a non-living part of an ecosystem: sunlight, water, soil, and temperature. Without them, no life is possible.` },
          ],
        },
        {
          type:          'magazine',
          section:       3,
          totalSections: 6,
          headline:      `The Wolves of Yellowstone`,
          paragraphs: [
            `In the 1990s, scientists brought wolves back to Yellowstone National Park after they had been gone for 70 years.`,
            `What happened next shocked everyone. The wolves didn't just change the animal populations — they changed the rivers themselves.`,
          ],
          image:        '/explorer-assets/cosmos/l12-s3-wolves-return.png',
          imageCaption: `Wolves returned to Yellowstone after 70 years — and changed everything`,
          vocab: [
            { word: 'reintroduce', definition: `To bring a species back to a place it once lived but had disappeared from. Scientists reintroduced wolves to Yellowstone in the 1990s.`, audioPrompt: `Reintroduce — to bring a species back to a place it once lived but had disappeared from. Scientists reintroduced wolves to Yellowstone in the 1990s.` },
            { word: 'Yellowstone', definition: `A famous National Park in the United States — the place where reintroducing wolves changed the rivers themselves.`, audioPrompt: `Yellowstone — a famous National Park in the United States. The place where reintroducing wolves changed the rivers themselves.` },
          ],
        },
        {
          type:          'magazine',
          section:       4,
          totalSections: 6,
          headline:      `A Trophic Cascade`,
          paragraphs: [
            `The wolves hunted elk. Elk started avoiding open valleys. Trees and grasses regrew on the riverbanks. Tree roots stabilised the soil. Rivers ran clearer.`,
            `One species — the wolf — triggered a chain reaction all the way down to the shape of the rivers. Scientists call this a trophic cascade.`,
          ],
          image:        '/explorer-assets/cosmos/l12-s4-trophic-cascade.png',
          imageCaption: `One species changed the elk, the trees, the riverbanks, and the rivers themselves`,
          vocab: [
            { word: 'trophic cascade', definition: `A chain of effects through an ecosystem triggered by one species — like wolves changing Yellowstone's rivers.`, audioPrompt: `Trophic cascade — a chain of effects through an ecosystem triggered by one species, like wolves changing Yellowstone's rivers.` },
            { word: 'chain reaction',  definition: `When one event causes another, which causes another, which causes another — like dominoes falling.`, audioPrompt: `Chain reaction — when one event causes another, which causes another, which causes another. Like dominoes falling.` },
          ],
        },
        {
          type:          'magazine',
          section:       5,
          totalSections: 6,
          headline:      `Types of Ecosystems`,
          paragraphs: [
            `Earth has many types of ecosystems. Tropical rainforests are the most biodiverse on Earth — warm and wet, packed with life.`,
            `Deserts are dry but full of specialised life. Tundras are cold and treeless. And marine ecosystems — oceans, reefs — cover 70% of Earth's surface.`,
          ],
          image:        '/explorer-assets/cosmos/l12-s5-ecosystem-types.png',
          imageCaption: `Rainforest, desert, tundra, ocean — each one a distinct living world`,
          vocab: [
            { word: 'biodiversity', definition: `The variety of different species in an ecosystem. Tropical rainforests have the highest biodiversity on Earth.`, audioPrompt: `Biodiversity — the variety of different species in an ecosystem. Tropical rainforests have the highest biodiversity on Earth.` },
            { word: 'habitat',      definition: `The natural environment where a species lives. Each ecosystem type is a different habitat for different creatures.`, audioPrompt: `Habitat — the natural environment where a species lives. Each ecosystem type is a different habitat for different creatures.` },
          ],
        },
        {
          type:          'magazine',
          section:       6,
          totalSections: 6,
          headline:      `Why Ecosystems Matter`,
          paragraphs: [
            `Ecosystems give us things we can't live without — clean air from photosynthesis, clean water filtered through wetlands, food pollinated by bees, medicines from wild plants.`,
            `Scientists estimate ecosystems provide humanity over $125 trillion in services every year — more than the entire global economy.`,
          ],
          image:        '/explorer-assets/cosmos/l12-s6-ecosystem-services.png',
          imageCaption: `Air, water, food, medicine — all gifts from ecosystems we can't replace`,
          vocab: [
            { word: 'ecosystem services', definition: `The benefits ecosystems provide to humans — clean air, clean water, food, climate regulation, and medicines.`, audioPrompt: `Ecosystem services — the benefits ecosystems provide to humans: clean air, clean water, food, climate regulation, and medicines.` },
            { word: 'conservation',       definition: `The act of protecting nature. Protecting ecosystems is essential to protecting human life too — we depend on them.`, audioPrompt: `Conservation — the act of protecting nature. Protecting ecosystems is essential to protecting human life too. We depend on them.` },
          ],
        },

        // PHASE 3 — INTERACTIVE
        {
          type:          'interactive',
          activityType:  'drag-match',
          instruction:   `Tap each card, then tap whether it's a biotic or abiotic part of the ecosystem!`,
          guideText:     `Every ecosystem has two types of components — biotic (living) factors and abiotic (non-living) factors. Both are essential. Can you sort these four into the right category?`,
          columnHeaders: [`What Is It?`, `Biotic or Abiotic?`],
          items: [
            { image: 'l12-game-wolf.png',      label: `A wolf hunting elk through Yellowstone's snowy valley.`,                       correctMatch: 'biotic',  objectPosition: 'center 50%', matchPhrase: `Biotic! The wolf is a living thing — a biotic factor. And as Yellowstone showed, one biotic factor can transform an entire ecosystem. The wolf's return changed the elk, the vegetation, the riverbanks, and the rivers themselves, all because living things interact.` },
            { image: 'l12-game-sunlight.png',  label: `Sunlight streaming through the forest canopy onto the forest floor.`,          correctMatch: 'abiotic', objectPosition: 'center 50%', matchPhrase: `Abiotic! Sunlight is a non-living component — an abiotic factor. But it's just as essential as any living thing. Without sunlight, plants can't photosynthesize, herbivores lose their food source, and the whole ecosystem collapses. Abiotic factors set the conditions for all life.` },
            { image: 'l12-game-river.png',     label: `A clear mountain river flowing through a valley after the wolves' return.`,    correctMatch: 'abiotic', objectPosition: 'center 50%', matchPhrase: `Abiotic! The river is a non-living abiotic factor — but it was directly changed by living things. When wolves returned to Yellowstone, elk moved away from riverbanks, vegetation grew back, banks stabilised, and the rivers ran cleaner. Abiotic and biotic factors constantly shape each other.` },
            { image: 'l12-game-pine-tree.png', label: `A tall pine tree growing at the edge of a mountain meadow.`,                  correctMatch: 'biotic',  objectPosition: 'center 50%', matchPhrase: `Biotic! The pine tree is alive — it's a biotic factor. It provides shelter for birds, food for insects, oxygen for the atmosphere, and roots that hold the soil in place. Remove all the trees from an ecosystem and the abiotic factors — soil, water, temperature — all change too.` },
          ],
          buckets: [
            { id: 'biotic',  label: `🐺 Biotic`,  color: '#34D399' },
            { id: 'abiotic', label: `☀️ Abiotic`, color: '#60A5FA' },
          ],
        },

        // PHASE 4 — MASTERY QUIZ
        {
          type:      'quiz',
          guideText: `Quiz time, {name}! Let's see what you've learned about ecosystems. Answer all 6 questions to earn your Ecosystem Guardian badge!`,
          questions: [
            {
              format:       'multiple-choice',
              question:     `What is an ecosystem?`,
              options:      [`A nature reserve protected by law`, `All living things in an area interacting with each other and their non-living environment`, `Just the animals in a habitat`, `The soil and water in a region`],
              correctIndex: 1,
            },
            {
              format:       'multiple-choice',
              question:     `What is a trophic cascade?`,
              options:      [`When water flows down a mountain`, `When one species' presence or absence causes a chain of effects throughout the whole ecosystem`, `When multiple species compete for food`, `When an ecosystem gets flooded`],
              correctIndex: 1,
            },
            {
              format:       'multiple-choice',
              question:     `What are ecosystem services?`,
              options:      [`Government programs to protect nature`, `The benefits ecosystems provide to humans, like clean air, clean water, and food`, `Services provided by park rangers`, `Tour guides in national parks`],
              correctIndex: 1,
            },
            {
              format:        'true-false',
              question:      `When wolves returned to Yellowstone, their impact spread from animals all the way to the rivers themselves.`,
              correctAnswer: true,
            },
            {
              format:       'fill-blank',
              question:     `The living parts of an ecosystem are called ___ factors.`,
              options:      [`biotic`, `abiotic`, `climate`, `trophic`],
              correctIndex: 0,
            },
            {
              format:       'multiple-choice',
              question:     `Which ecosystem type is considered the most biodiverse on Earth?`,
              options:      [`Desert`, `Tundra`, `Tropical rainforest`, `Temperate grassland`],
              correctIndex: 2,
            },
          ],
        },

        // PHASE 5 — REAL-WORLD CONNECTION
        {
          type:            'real-world',
          guideText:       `Visit a local park or nature area and try to spot both biotic and abiotic factors — how many of each can you count?`,
          familyAdventure: `Visit a local natural area — a park, nature reserve, or even a neighbourhood pond. Observe for 20 minutes without disturbing anything. Try to identify the biotic factors (living things) and abiotic factors (sunlight, water, soil, temperature). Count how many species you can find. How do they seem to interact?`,
          creativePrompt:  `Research Yellowstone National Park's ecosystem. Find 6 different species. For each one, think about: what does it eat? What eats it? How does it affect the environment around it? Draw a web connecting all of them. Then pick one species and imagine it disappears — how far does the impact spread?`,
        },

        // PHASE 6 — CELEBRATION
        {
          type:      'celebration',
          xpEarned:  50,
          badge:     'ecosystem-guardian',
          badgeName: `Ecosystem Guardian`,
          message:   `Brilliant work, {name}! You now know that wolves can change rivers, and that the health of the entire world depends on connections most people never notice. Everything in nature is connected — and now you can see the threads. Nova is so proud to share the universe with you.`,
        },
      ],
    },
  ],
};

// Log on module load — confirms lesson wired correctly + verifies image assets at runtime
(() => {
  const l    = cosmos_explorer_l12_screens.lessons[0];
  const mags = l.screens.filter(s => s.type === 'magazine').length;
  const game = l.screens.find(s => s.type === 'interactive')?.items?.length || 0;
  const quiz = l.screens.find(s => s.type === 'quiz')?.questions?.length || 0;
  console.log(`[LESSON-COSMOS-L12] Loaded: "Ecosystems: Everything Is Connected" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
  Promise.all([
    fetch('/explorer-assets/cosmos/l12-s1-ecosystem.png',          { method: 'HEAD' }),
    fetch('/explorer-assets/cosmos/l12-s2-biotic-abiotic.png',     { method: 'HEAD' }),
    fetch('/explorer-assets/cosmos/l12-s3-wolves-return.png',      { method: 'HEAD' }),
    fetch('/explorer-assets/cosmos/l12-s4-trophic-cascade.png',    { method: 'HEAD' }),
    fetch('/explorer-assets/cosmos/l12-s5-ecosystem-types.png',    { method: 'HEAD' }),
    fetch('/explorer-assets/cosmos/l12-s6-ecosystem-services.png', { method: 'HEAD' }),
  ]).then(([r1, r2, r3, r4, r5, r6]) => {
    console.log(`[ASSET-CHECK-COSMOS-L12] ecosystem: ${r1.ok}, biotic-abiotic: ${r2.ok}, wolves-return: ${r3.ok}, trophic-cascade: ${r4.ok}, ecosystem-types: ${r5.ok}, ecosystem-services: ${r6.ok}`);
  }).catch(() => {
    console.log('[ASSET-CHECK-COSMOS-L12] Could not verify image assets — network check failed');
  });
})();

export default cosmos_explorer_l12_screens;
