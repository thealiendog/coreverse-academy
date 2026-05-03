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

        // PHASE 2 — MAGAZINE STORY (4 sections)
        {
          type:          'magazine',
          section:       1,
          totalSections: 4,
          headline:      `What Is an Ecosystem?`,
          paragraphs: [
            `An ecosystem is all the living things in an area — plants, animals, fungi, bacteria — interacting with each other AND with the non-living parts of their environment: water, sunlight, soil, temperature, and air. Everything in an ecosystem is connected to everything else.`,
            `Ecosystems can be as large as an ocean or as small as a single puddle. The living parts of an ecosystem are called biotic factors. The non-living parts — sunlight, water, temperature, soil — are called abiotic factors. Both are essential. Remove the sunlight from a forest and the whole ecosystem collapses.`,
            `Scientists study ecosystems to understand how nature works — and what happens when something changes. An ecosystem in balance is a remarkable, self-sustaining system. When something disrupts it, the effects ripple outward in ways that are often surprising and far-reaching.`,
          ],
          image:        '/explorer-assets/cosmos/l12-magazine-ecosystem.png',
          imageCaption: `An ecosystem — living things and their non-living environment, all connected and interdependent`,
          vocab: [
            { word: 'ecosystem',     definition: `All living things in an area interacting with each other and with the non-living parts of their environment — a complex, connected system that sustains life.`,                                    audioPrompt: `Ecosystem — all living things in an area interacting with each other and with the non-living parts of their environment. A complex, connected system that sustains life.` },
            { word: 'abiotic factor', definition: `A non-living component of an ecosystem — such as sunlight, water, temperature, and soil — that directly affects which living things can survive there.`, audioPrompt: `Abiotic factor — a non-living component of an ecosystem, such as sunlight, water, temperature, and soil, that directly affects which living things can survive there.` },
          ],
        },
        {
          type:          'magazine',
          section:       2,
          totalSections: 4,
          headline:      `How Wolves Changed Rivers`,
          paragraphs: [
            `When wolves returned to Yellowstone, they hunted elk. But the effect went far beyond just fewer elk. Elk started avoiding open valleys — easy places for wolves to hunt — and moved to higher, harder terrain. With fewer elk grazing in the valleys, the vegetation began to grow back. Grasses, wildflowers, shrubs, and trees reclaimed the riverbanks.`,
            `As tree roots stabilised the soil along the rivers, the banks stopped eroding. Rivers that had been running wide and murky began to run clearer and straighter. Beaver populations returned — attracted by the new trees — and built dams that created new wetland habitats. Fish populations grew. Songbird populations grew.`,
            `One species — the wolf — triggered a chain reaction through the entire ecosystem, all the way down to the shape of the rivers. This phenomenon is called a trophic cascade. It showed scientists that the most powerful force in an ecosystem isn't always the most numerous creature. Sometimes it's the one at the top.`,
          ],
          image:        '/explorer-assets/cosmos/l12-magazine-wolves-rivers.png',
          imageCaption: `The Yellowstone trophic cascade — wolves returned and changed the rivers themselves`,
          vocab: [
            { word: 'trophic cascade', definition: `A chain of effects through an ecosystem triggered by one species — like wolves changing Yellowstone's rivers by changing elk behaviour, which allowed vegetation to regrow.`, audioPrompt: `Trophic cascade — a chain of effects through an ecosystem triggered by one species, like wolves changing Yellowstone's rivers by changing elk behaviour, which allowed vegetation to regrow.` },
            { word: 'biotic factor',   definition: `A living component of an ecosystem — plants, animals, fungi, and bacteria are all biotic factors that interact with each other and with abiotic factors.`,               audioPrompt: `Biotic factor — a living component of an ecosystem. Plants, animals, fungi, and bacteria are all biotic factors that interact with each other and with abiotic factors.` },
          ],
        },
        {
          type:          'magazine',
          section:       3,
          totalSections: 4,
          headline:      `Types of Ecosystems`,
          paragraphs: [
            `Earth has many types of ecosystems, each shaped by its temperature, rainfall, and geography. Tropical rainforests are the most biodiverse ecosystems on Earth — warm and wet year-round, they support more species per square kilometre than anywhere else. Temperate forests have four seasons. Grasslands stretch across vast flat plains where rainfall is too low for dense forests.`,
            `Deserts are dry but far from lifeless — specialised plants and animals have evolved to survive with almost no water. Tundra ecosystems near the poles are cold and treeless, with a short summer growing season. Freshwater ecosystems — lakes, rivers, wetlands — cover a small fraction of Earth's surface but support an enormous diversity of life.`,
            `Marine ecosystems — from shallow coral reefs to the deep ocean — cover over 70% of Earth's surface. Each ecosystem type supports its own community of organisms that have evolved together over millions of years. Move a species between ecosystem types and it usually can't survive.`,
          ],
          image:        '/explorer-assets/cosmos/l12-magazine-ecosystem-types.png',
          imageCaption: `Earth's ecosystems — from tropical rainforests to polar tundra, each one a distinct living community`,
          vocab: [
            { word: 'biodiversity', definition: `The variety of different species in an ecosystem — tropical rainforests have the highest biodiversity on Earth, supporting more species per area than any other ecosystem.`,            audioPrompt: `Biodiversity — the variety of different species in an ecosystem. Tropical rainforests have the highest biodiversity on Earth, supporting more species per area than any other ecosystem.` },
            { word: 'habitat',      definition: `The natural environment where a species lives — each ecosystem type provides a distinct habitat, and organisms evolve over millions of years to suit the specific conditions.`, audioPrompt: `Habitat — the natural environment where a species lives. Each ecosystem type provides a distinct habitat, and organisms evolve over millions of years to suit the specific conditions.` },
          ],
        },
        {
          type:          'magazine',
          section:       4,
          totalSections: 4,
          headline:      `Ecosystem Services`,
          paragraphs: [
            `Ecosystems don't just exist for their own sake — they provide services that all human life depends on. Clean air comes from plant photosynthesis. Clean water is filtered through wetlands and soil. Food depends on pollination by bees and other insects. Forests regulate the climate by absorbing carbon dioxide. Many medicines were first discovered in wild plants.`,
            `Scientists estimate the economic value of ecosystem services to humanity is around $125–145 trillion per year — more than the entire global economy. These are services that would be impossible to replicate artificially at any realistic cost.`,
            `When ecosystems are damaged or destroyed — through deforestation, pollution, or species extinction — these services are lost. The Yellowstone story showed that protecting one species can restore an entire ecosystem. Understanding ecosystems is not just science — it's essential to understanding how to protect the world we live in.`,
          ],
          image:        '/explorer-assets/cosmos/l12-magazine-ecosystem-services.png',
          imageCaption: `Ecosystem services — clean air, clean water, food, climate regulation, and medicine, all from nature`,
          vocab: [
            { word: 'ecosystem services', definition: `The benefits that ecosystems provide to humans — including clean air, clean water, food, climate regulation, and medicines — estimated to be worth $125–145 trillion per year.`, audioPrompt: `Ecosystem services — the benefits that ecosystems provide to humans, including clean air, clean water, food, climate regulation, and medicines, estimated to be worth $125 to 145 trillion per year.` },
            { word: 'pollinator',         definition: `An animal that carries pollen between flowers, enabling plant reproduction — bees, butterflies, birds, and bats are all pollinators that food crops depend on.`,                 audioPrompt: `Pollinator — an animal that carries pollen between flowers, enabling plant reproduction. Bees, butterflies, birds, and bats are all pollinators that food crops depend on.` },
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
    fetch('/explorer-assets/cosmos/l12-magazine-ecosystem.png',          { method: 'HEAD' }),
    fetch('/explorer-assets/cosmos/l12-magazine-wolves-rivers.png',      { method: 'HEAD' }),
    fetch('/explorer-assets/cosmos/l12-magazine-ecosystem-types.png',    { method: 'HEAD' }),
    fetch('/explorer-assets/cosmos/l12-magazine-ecosystem-services.png', { method: 'HEAD' }),
  ]).then(([r1, r2, r3, r4]) => {
    console.log(`[ASSET-CHECK-COSMOS-L12] ecosystem: ${r1.ok}, wolves-rivers: ${r2.ok}, ecosystem-types: ${r3.ok}, ecosystem-services: ${r4.ok}`);
  }).catch(() => {
    console.log('[ASSET-CHECK-COSMOS-L12] Could not verify image assets — network check failed');
  });
})();

export default cosmos_explorer_l12_screens;
