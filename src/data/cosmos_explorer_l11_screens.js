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

        // PHASE 2 — MAGAZINE STORY (4 sections)
        {
          type:          'magazine',
          section:       1,
          totalSections: 4,
          headline:      `The Photosynthesis Recipe`,
          paragraphs: [
            `Photosynthesis happens mainly in the leaves of plants. Here's the formula: carbon dioxide from the air, plus water absorbed by the roots, plus light energy from the Sun — these three ingredients are combined to make glucose, a sugar the plant uses for energy, and oxygen, which is released into the air.`,
            `The green pigment in leaves called chlorophyll is what makes this possible. Chlorophyll captures light energy and uses it to power the chemical reaction. It absorbs red and blue light most effectively — and reflects green light back. That's why plants are green.`,
            `Every green leaf you've ever seen is a solar-powered food factory, quietly running one of the most important chemical reactions on Earth. Right now, in billions of leaves across the planet, photosynthesis is happening — making food and releasing the oxygen in every breath you take.`,
          ],
          image:        '/explorer-assets/cosmos/l11-magazine-photosynthesis.png',
          imageCaption: `Photosynthesis — sunlight, water, and CO₂ combining in a leaf to make food and release oxygen`,
          vocab: [
            { word: 'photosynthesis', definition: `The process plants use to convert sunlight, water, and carbon dioxide into glucose (sugar for energy) and oxygen — the chemical reaction that powers almost all life on Earth.`, audioPrompt: `Photosynthesis — the process plants use to convert sunlight, water, and carbon dioxide into glucose and oxygen. The chemical reaction that powers almost all life on Earth.` },
            { word: 'chlorophyll',    definition: `The green pigment in plant leaves that captures light energy to power photosynthesis — it absorbs red and blue light and reflects green, which is why plants appear green.`,    audioPrompt: `Chlorophyll — the green pigment in plant leaves that captures light energy to power photosynthesis. It absorbs red and blue light and reflects green, which is why plants appear green.` },
          ],
        },
        {
          type:          'magazine',
          section:       2,
          totalSections: 4,
          headline:      `Why Plants Matter So Much`,
          paragraphs: [
            `Plants produce the oxygen in our atmosphere. Before plants evolved about 500 million years ago, Earth's atmosphere had almost no free oxygen. It was plants — and the algae and cyanobacteria before them — that filled the air with oxygen, transforming Earth into a world where complex animal life could exist.`,
            `Plants also form the base of almost every food chain on land. Every herbivore, and every carnivore that eats herbivores, ultimately depends on plants for energy. And plants absorb carbon dioxide — a greenhouse gas — as they photosynthesize, playing a crucial role in regulating Earth's climate. Rainforests alone produce about 20% of Earth's oxygen.`,
            `When you breathe out carbon dioxide, a plant somewhere breathes it in. When a plant releases oxygen, you breathe it in. Every breath you take is part of a cycle running between animals and plants that has continued unbroken for hundreds of millions of years.`,
          ],
          image:        '/explorer-assets/cosmos/l11-magazine-plants-matter.png',
          imageCaption: `Plants and the oxygen cycle — every breath of air we breathe was produced by photosynthesis`,
          vocab: [
            { word: 'atmosphere', definition: `The layer of gases surrounding Earth — before plants evolved, Earth's atmosphere had almost no oxygen. Plants changed it into the air-breathing world we live in today.`, audioPrompt: `Atmosphere — the layer of gases surrounding Earth. Before plants evolved, Earth's atmosphere had almost no oxygen. Plants changed it into the air-breathing world we live in today.` },
            { word: 'carbon dioxide', definition: `A gas released by animals when they breathe out — plants absorb it during photosynthesis and convert it into glucose, removing it from the atmosphere.`,             audioPrompt: `Carbon dioxide — a gas released by animals when they breathe out. Plants absorb it during photosynthesis and convert it into glucose, removing it from the atmosphere.` },
          ],
        },
        {
          type:          'magazine',
          section:       3,
          totalSections: 4,
          headline:      `Plant Parts and Their Jobs`,
          paragraphs: [
            `Every part of a plant has a specific job. Roots anchor the plant in the ground and absorb water and minerals from the soil. The stem transports water and nutrients between the roots and the leaves, and supports the plant upright toward the light.`,
            `Leaves are the main photosynthesis factories. Their flat, wide shape is designed to maximise surface area for catching sunlight. Flowers attract pollinators — bees, butterflies, birds — which carry pollen between plants so seeds can form. Fruits protect seeds and help disperse them, often by being eaten by animals.`,
            `These parts work together as a complete system. Roots gather water. Stems move it upward. Leaves turn it into food. Flowers and fruits make the next generation. A plant is a beautifully engineered machine shaped by millions of years of evolution.`,
          ],
          image:        '/explorer-assets/cosmos/l11-magazine-plant-parts.png',
          imageCaption: `Plant parts — roots, stem, leaves, flowers, and fruits, each with a precise job`,
          vocab: [
            { word: 'pollination', definition: `The transfer of pollen between flowers, often carried by bees, butterflies, or birds — it allows plants to reproduce by forming seeds.`,                                                       audioPrompt: `Pollination — the transfer of pollen between flowers, often carried by bees, butterflies, or birds. It allows plants to reproduce by forming seeds.` },
            { word: 'seed dispersal', definition: `The process by which seeds are spread away from the parent plant — by animals eating fruits, by wind, or by water — giving seeds room to grow into new plants.`, audioPrompt: `Seed dispersal — the process by which seeds are spread away from the parent plant, by animals eating fruits, by wind, or by water, giving seeds room to grow into new plants.` },
          ],
        },
        {
          type:          'magazine',
          section:       4,
          totalSections: 4,
          headline:      `Plants Are Incredibly Diverse`,
          paragraphs: [
            `There are about 390,000 known plant species on Earth — from microscopic aquatic algae to enormous trees. The tallest living thing on Earth is a coast redwood tree in California, standing at 380 feet tall — taller than a 30-storey building.`,
            `The largest plant by area is a grove of quaking aspen trees in Utah called Pando. What looks like a forest of thousands of trees is actually a single organism — they all share one root system, spreading across 106 acres. Pando is estimated to be 80,000 years old.`,
            `Some plants have evolved to capture and eat insects. The Venus flytrap snaps shut when an insect touches its trigger hairs — digesting it as a source of nutrients the plant can't get from the soil. Plants are far stranger and more inventive than most people realise.`,
          ],
          image:        '/explorer-assets/cosmos/l11-magazine-plant-diversity.png',
          imageCaption: `Plant diversity — from towering redwoods to carnivorous flytraps and ancient aspen superorganisms`,
          vocab: [
            { word: 'species',      definition: `A group of living things that share the same characteristics and can reproduce together — there are about 390,000 known plant species on Earth.`,                                                        audioPrompt: `Species — a group of living things that share the same characteristics and can reproduce together. There are about 390,000 known plant species on Earth.` },
            { word: 'superorganism', definition: `A collection of individuals that together function as a single organism — the Pando aspen grove in Utah is one plant superorganism covering 106 acres on a single shared root system.`, audioPrompt: `Superorganism — a collection of individuals that together function as a single organism. The Pando aspen grove in Utah is one plant superorganism covering 106 acres on a single shared root system.` },
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
            { image: 'l11-game-roots.png',  label: `Reaching deep into soil to anchor the plant and absorb water and minerals.`,         correctMatch: 'root',   objectPosition: 'center 50%', matchPhrase: `Root! Roots have two vital jobs: anchoring the plant firmly in the ground so it doesn't fall over, and absorbing the water and minerals from soil that the plant needs to grow. Without roots, a plant would dry out and blow away.` },
            { image: 'l11-game-stem.png',   label: `Carrying water up from the roots to the leaves while holding the plant upright.`,    correctMatch: 'stem',   objectPosition: 'center 50%', matchPhrase: `Stem! The stem is the plant's transport highway — moving water and minerals up from the roots to the leaves, and sending sugars made in the leaves back down to the rest of the plant. It also holds the plant upright so the leaves can reach the sunlight.` },
            { image: 'l11-game-leaf.png',   label: `Spread wide and flat to catch sunlight and power photosynthesis.`,                   correctMatch: 'leaf',   objectPosition: 'center 50%', matchPhrase: `Leaf! Leaves are the plant's food factories — packed with chlorophyll that captures sunlight and uses it to convert carbon dioxide and water into glucose and oxygen. Their flat, wide shape is designed to maximise the surface area catching light.` },
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
    fetch('/explorer-assets/cosmos/l11-magazine-photosynthesis.png',  { method: 'HEAD' }),
    fetch('/explorer-assets/cosmos/l11-magazine-plants-matter.png',   { method: 'HEAD' }),
    fetch('/explorer-assets/cosmos/l11-magazine-plant-parts.png',     { method: 'HEAD' }),
    fetch('/explorer-assets/cosmos/l11-magazine-plant-diversity.png', { method: 'HEAD' }),
  ]).then(([r1, r2, r3, r4]) => {
    console.log(`[ASSET-CHECK-COSMOS-L11] photosynthesis: ${r1.ok}, plants-matter: ${r2.ok}, plant-parts: ${r3.ok}, plant-diversity: ${r4.ok}`);
  }).catch(() => {
    console.log('[ASSET-CHECK-COSMOS-L11] Could not verify image assets — network check failed');
  });
})();

export default cosmos_explorer_l11_screens;
