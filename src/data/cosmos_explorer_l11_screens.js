// ============================================================
// COREVERSE EXPLORERS — Cosmos · Lesson 11
// "Plants and Photosynthesis"
// Ages 6–8 | Guide: Nova | ExplorerLessonPlayer format
// ============================================================

const cosmos_explorer_l11_screens = {
  ageBand:   'explorers',
  subjectId: 'cosmos',
  guide:     'nova',
  lessons: [
    {
      id:        'cs-6-8-11',
      title:     `Plants and Photosynthesis`,
      duration:  12,
      xpReward:  50,
      badge:     'plant-scientist',
      badgeName: `Plant Scientist`,
      screens: [
        // PHASE 1 — WELCOME
        {
          type:      'welcome',
          guideText: `Plants do something no animal can do: they make food out of thin air and sunlight. They take carbon dioxide — a gas we breathe out — water, and light energy, and turn it into sugar to fuel their growth. And in the process, they release the oxygen we need to breathe. Plants keep us alive.`,
        },

        // PHASE 2 — MAGAZINE STORY (6 sections)
        {
          type:          'magazine',
          section:       1,
          totalSections: 6,
          headline:      `The Photosynthesis Recipe`,
          paragraphs: [
            `Photosynthesis happens mainly in the leaves of plants. The recipe: carbon dioxide from air + water from roots + sunlight = sugar for the plant, and oxygen released into the air.`,
            `Three ingredients in. Two outputs. The most important chemical reaction on Earth, happening in every green leaf you've ever seen.`,
          ],
          image:        '/explorer-assets/cosmos/l11-s1-photosynthesis.png',
          imageCaption: `Plants turn air, water, and sunlight into food — and release oxygen as a bonus`,
          vocab: [
            { word: 'photosynthesis', definition: `How plants make food using sunlight, water, and carbon dioxide. The chemical reaction that powers almost all life on Earth.`, audioPrompt: `Photosynthesis — how plants make food using sunlight, water, and carbon dioxide. The chemical reaction that powers almost all life on Earth.` },
            { word: 'glucose',        definition: `The sugar that plants make through photosynthesis — their energy source. Glucose is the food a plant feeds itself.`, audioPrompt: `Glucose — the sugar that plants make through photosynthesis, their energy source. Glucose is the food a plant feeds itself.` },
          ],
        },
        {
          type:          'magazine',
          section:       2,
          totalSections: 6,
          headline:      `Why Plants Are Green`,
          paragraphs: [
            `The green pigment in leaves is called chlorophyll. It captures the Sun's light energy and powers the whole reaction.`,
            `Chlorophyll absorbs red and blue light — but reflects green light back. That reflected green is what reaches your eyes. That's why plants are green.`,
          ],
          image:        '/explorer-assets/cosmos/l11-s2-chlorophyll.png',
          imageCaption: `Plants look green because chlorophyll reflects green light — and absorbs all the rest`,
          vocab: [
            { word: 'chlorophyll', definition: `The green pigment in plant leaves that captures sunlight to power photosynthesis. Chlorophyll is the engine of every leaf.`, audioPrompt: `Chlorophyll — the green pigment in plant leaves that captures sunlight to power photosynthesis. Chlorophyll is the engine of every leaf.` },
            { word: 'pigment',     definition: `A substance that gives something its color. Chlorophyll is the pigment that makes leaves green.`, audioPrompt: `Pigment — a substance that gives something its color. Chlorophyll is the pigment that makes leaves green.` },
          ],
        },
        {
          type:          'magazine',
          section:       3,
          totalSections: 6,
          headline:      `Plants Made the Oxygen`,
          paragraphs: [
            `Before plants evolved 500 million years ago, Earth's atmosphere had almost no free oxygen at all.`,
            `It was plants — and the algae and bacteria before them — that filled the air with oxygen, transforming Earth into a world where complex animals could live.`,
          ],
          image:        '/explorer-assets/cosmos/l11-s3-earth-transformed.png',
          imageCaption: `Without plants, Earth's atmosphere would still be empty of oxygen — and we wouldn't exist`,
          vocab: [
            { word: 'atmosphere', definition: `The layer of gases surrounding Earth. Plants filled it with oxygen over hundreds of millions of years.`, audioPrompt: `Atmosphere — the layer of gases surrounding Earth. Plants filled it with oxygen over hundreds of millions of years.` },
            { word: 'oxygen',     definition: `The gas in the air that animals (including you) breathe. Plants make oxygen as a by-product of photosynthesis.`, audioPrompt: `Oxygen — the gas in the air that animals, including you, breathe. Plants make oxygen as a by-product of photosynthesis.` },
          ],
        },
        {
          type:          'magazine',
          section:       4,
          totalSections: 6,
          headline:      `The Breath Cycle`,
          paragraphs: [
            `When you breathe out carbon dioxide, a plant somewhere breathes it in. When a plant releases oxygen, you breathe it in.`,
            `Every breath you take is part of a cycle running between animals and plants that has continued unbroken for hundreds of millions of years.`,
          ],
          image:        '/explorer-assets/cosmos/l11-s4-breath-cycle.png',
          imageCaption: `Every breath you take is part of an unbroken cycle between plants and animals`,
          vocab: [
            { word: 'carbon dioxide', definition: `A gas animals breathe out. Plants absorb carbon dioxide during photosynthesis — using it to make their food.`, audioPrompt: `Carbon dioxide — a gas animals breathe out. Plants absorb carbon dioxide during photosynthesis, using it to make their food.` },
            { word: 'cycle',          definition: `A process that repeats over and over. The breath cycle between plants and animals never stops — it's been running for hundreds of millions of years.`, audioPrompt: `Cycle — a process that repeats over and over. The breath cycle between plants and animals never stops. It's been running for hundreds of millions of years.` },
          ],
        },
        {
          type:          'magazine',
          section:       5,
          totalSections: 6,
          headline:      `Plant Parts and Their Jobs`,
          paragraphs: [
            `Every part of a plant has a specific job. Roots anchor the plant and absorb water. Stems carry water up and hold the plant upright.`,
            `Leaves are the photosynthesis factories. Flowers attract pollinators like bees. Fruits protect seeds and help them spread.`,
          ],
          image:        '/explorer-assets/cosmos/l11-s5-plant-parts.png',
          imageCaption: `Roots, stem, leaves, flowers, fruits — each part has a specific job in keeping a plant alive`,
          vocab: [
            { word: 'root',       definition: `The underground part of a plant. Roots anchor the plant in the soil and absorb water and minerals.`, audioPrompt: `Root — the underground part of a plant. Roots anchor the plant in the soil and absorb water and minerals.` },
            { word: 'pollinator', definition: `An animal like a bee or butterfly that carries pollen between flowers — letting plants reproduce.`, audioPrompt: `Pollinator — an animal like a bee or butterfly that carries pollen between flowers, letting plants reproduce.` },
          ],
        },
        {
          type:          'magazine',
          section:       6,
          totalSections: 6,
          headline:      `Strange and Wonderful`,
          paragraphs: [
            `There are about 390,000 known plant species — from tiny algae to massive trees. The tallest is a coast redwood in California, 380 feet tall.`,
            `The Venus flytrap snaps shut to eat insects. The Pando aspen grove in Utah is a single connected plant covering 106 acres — 80,000 years old.`,
          ],
          image:        '/explorer-assets/cosmos/l11-s6-strange-plants.png',
          imageCaption: `Plants are stranger than they look — flytraps that eat bugs, aspen groves that are one organism`,
          vocab: [
            { word: 'species',       definition: `A group of living things that share traits and can reproduce together. There are about 390,000 plant species on Earth.`, audioPrompt: `Species — a group of living things that share traits and can reproduce together. There are about 390,000 plant species on Earth.` },
            { word: 'superorganism', definition: `Many individuals working as one. The Pando aspen grove is one superorganism — 106 acres of trees, all connected by shared roots.`, audioPrompt: `Superorganism — many individuals working as one. The Pando aspen grove is one superorganism, 106 acres of trees, all connected by shared roots.` },
          ],
        },

        // PHASE 3 — INTERACTIVE
        {
          type:          'interactive',
          activityType:  'drag-match',
          instruction:   `Tap each card, then tap which plant part it describes!`,
          guideText:     `Every part of a plant has its own important job — roots, stems, leaves, and flowers all work together to keep the plant alive and growing. Can you match each description to the right plant part?`,
          columnHeaders: [`What It Does`, `Plant Part`],
          items: [
            { image: 'l11-game-roots.png',  label: `Reaching deep into soil to anchor the plant and absorb water and minerals.`,          correctMatch: 'root',   objectPosition: 'center 50%', matchPhrase: `Root! Roots have two vital jobs: anchoring the plant firmly in the ground so it doesn't fall over, and absorbing the water and minerals from soil that the plant needs to grow. Without roots, a plant would dry out and blow away.` },
            { image: 'l11-game-stem.png',   label: `Carrying water up from the roots to the leaves while holding the plant upright.`,     correctMatch: 'stem',   objectPosition: 'center 50%', matchPhrase: `Stem! The stem is the plant's transport highway — moving water and minerals up from the roots to the leaves, and sending sugars made in the leaves back down to the rest of the plant. It also holds the plant upright so the leaves can reach the sunlight.` },
            { image: 'l11-game-leaf.png',   label: `Spread wide and flat to catch sunlight and power photosynthesis.`,                    correctMatch: 'leaf',   objectPosition: 'center 50%', matchPhrase: `Leaf! Leaves are the plant's food factories — packed with chlorophyll that captures sunlight and uses it to convert carbon dioxide and water into glucose and oxygen. Their flat, wide shape is designed to maximise the surface area catching light.` },
            { image: 'l11-game-flower.png', label: `Producing bright colours and scents to attract bees and butterflies for pollination.`, correctMatch: 'flower', objectPosition: 'center 50%', matchPhrase: `Flower! Flowers exist for one purpose: reproduction. Their colours, shapes, and scents attract pollinators like bees and butterflies, which carry pollen between plants and allow seeds to form. Without flowers — and the pollinators they attract — most plants couldn't reproduce.` },
          ],
          buckets: [
            { id: 'root',   label: `🌱 Root`,   color: '#34D399' },
            { id: 'stem',   label: `🪵 Stem`,   color: '#60A5FA' },
            { id: 'leaf',   label: `🍃 Leaf`,   color: '#F59E0B' },
            { id: 'flower', label: `🌸 Flower`, color: '#818CF8' },
          ],
        },

        // PHASE 4 — MASTERY QUIZ
        {
          type:      'quiz',
          guideText: `Quiz time, {name}! Let's see what you've learned about plants and photosynthesis. Answer all 6 questions to earn your Plant Scientist badge!`,
          questions: [
            {
              format:       'multiple-choice',
              question:     `What three things does a plant need for photosynthesis?`,
              options:      [`Oxygen, minerals, and sunlight`, `Carbon dioxide, water, and light energy`, `Soil, rain, and moonlight`, `Sugar, air, and heat`],
              correctIndex: 1,
            },
            {
              format:       'multiple-choice',
              question:     `What does chlorophyll do?`,
              options:      [`Absorbs water from soil`, `Captures light energy to power photosynthesis`, `Produces carbon dioxide`, `Protects the plant from insects`],
              correctIndex: 1,
            },
            {
              format:       'multiple-choice',
              question:     `What two things does photosynthesis produce?`,
              options:      [`Carbon dioxide and water`, `Nitrogen and carbon`, `Glucose (sugar) and oxygen`, `Chlorophyll and leaves`],
              correctIndex: 2,
            },
            {
              format:        'true-false',
              question:      `Plants are green because chlorophyll absorbs red and blue light and reflects green light back.`,
              correctAnswer: true,
            },
            {
              format:       'fill-blank',
              question:     `Rainforests alone produce about ___% of Earth's oxygen.`,
              options:      [`20`, `50`, `5`, `80`],
              correctIndex: 0,
            },
            {
              format:       'multiple-choice',
              question:     `What is the job of a plant's roots?`,
              options:      [`Making glucose from sunlight`, `Attracting pollinators`, `Anchoring the plant and absorbing water and minerals from soil`, `Producing seeds for reproduction`],
              correctIndex: 2,
            },
          ],
        },

        // PHASE 5 — REAL-WORLD CONNECTION
        {
          type:            'real-world',
          guideText:       `Try the light experiment — put two identical plants in different spots, one sunny and one dark, and watch what happens over a week!`,
          familyAdventure: `Grow something from seed together this week. Beans, sunflowers, and herbs all grow quickly. Plant them in a cup with potting soil, water regularly, and place in a sunny window. Keep a growth journal with measurements and drawings every few days. Watch photosynthesis power life from almost nothing.`,
          creativePrompt:  `Get two identical plants or two cuttings from the same plant. Put one in a sunny spot and one in a dark closet. Water both the same amount. Observe them daily for a week. What happens to the one without light? This is proof that plants need light to make their food. Draw or photograph your results.`,
        },

        // PHASE 6 — CELEBRATION
        {
          type:      'celebration',
          xpEarned:  50,
          badge:     'plant-scientist',
          badgeName: `Plant Scientist`,
          message:   `Brilliant work, {name}! You now know that plants make food from thin air, sunlight, and water — and that every breath of oxygen you take was produced by a plant. The whole web of life on Earth depends on photosynthesis. Nova is so proud to share the universe with you.`,
        },
      ],
    },
  ],
};

// Log on module load — confirms lesson wired correctly + verifies image assets at runtime
(() => {
  const l    = cosmos_explorer_l11_screens.lessons[0];
  const mags = l.screens.filter(s => s.type === 'magazine').length;
  const game = l.screens.find(s => s.type === 'interactive')?.items?.length || 0;
  const quiz = l.screens.find(s => s.type === 'quiz')?.questions?.length || 0;
  console.log(`[LESSON-COSMOS-L11] Loaded: "Plants and Photosynthesis" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
  Promise.all([
    fetch('/explorer-assets/cosmos/l11-s1-photosynthesis.png',   { method: 'HEAD' }),
    fetch('/explorer-assets/cosmos/l11-s2-chlorophyll.png',      { method: 'HEAD' }),
    fetch('/explorer-assets/cosmos/l11-s3-earth-transformed.png',{ method: 'HEAD' }),
    fetch('/explorer-assets/cosmos/l11-s4-breath-cycle.png',     { method: 'HEAD' }),
    fetch('/explorer-assets/cosmos/l11-s5-plant-parts.png',      { method: 'HEAD' }),
    fetch('/explorer-assets/cosmos/l11-s6-strange-plants.png',   { method: 'HEAD' }),
  ]).then(([r1, r2, r3, r4, r5, r6]) => {
    console.log(`[ASSET-CHECK-COSMOS-L11] photosynthesis: ${r1.ok}, chlorophyll: ${r2.ok}, earth-transformed: ${r3.ok}, breath-cycle: ${r4.ok}, plant-parts: ${r5.ok}, strange-plants: ${r6.ok}`);
  }).catch(() => {
    console.log('[ASSET-CHECK-COSMOS-L11] Could not verify image assets — network check failed');
  });
})();

export default cosmos_explorer_l11_screens;
