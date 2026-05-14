// ============================================================
// COREVERSE EXPLORERS — Cosmos · Lesson 5
// "Food Chains: Who Eats Who?"
// Ages 6–8 | Guide: Nova | ExplorerLessonPlayer format
// ============================================================

const cosmos_explorer_l05_screens = {
  ageBand:   'explorers',
  subjectId: 'cosmos',
  guide:     'nova',
  lessons: [
    {
      id:        'cs-6-8-05',
      title:     `Food Chains: Who Eats Who?`,
      duration:  12,
      xpReward:  50,
      badge:     'food-web-builder',
      badgeName: `Food Web Builder`,
      screens: [
        // PHASE 1 — WELCOME
        {
          type:      'welcome',
          guideText: `You eat a burger. The cow ate grass. The grass absorbed sunlight. So in a weird way, you're powered by the Sun. That chain of eating and being eaten connects almost every living thing on Earth. It's called a food chain — and it keeps our entire planet running.`,
        },

        // PHASE 2 — MAGAZINE STORY (6 sections)
        {
          type:          'magazine',
          section:       1,
          totalSections: 6,
          headline:      `Energy Starts with the Sun`,
          paragraphs: [
            `Energy flows from the Sun through plants to animals through food chains. Every living thing on Earth has a role to play.`,
            `Every meal you've ever eaten traces back to a plant. And every plant traces back to sunlight. You are powered by the Sun.`,
          ],
          image:        '/explorer-assets/cosmos/l05-s1-sun-energy.png',
          imageCaption: `Every food chain starts with the Sun — and ends, eventually, with you`,
          vocab: [
            { word: 'food chain', definition: `The chain of who eats whom, carrying energy from one living thing to the next — starting with plants and the Sun.`, audioPrompt: `Food chain — the chain of who eats whom, carrying energy from one living thing to the next, starting with plants and the Sun.` },
            { word: 'energy',     definition: `What living things use to grow, move, and survive. All energy on Earth starts with the Sun.`, audioPrompt: `Energy — what living things use to grow, move, and survive. All energy on Earth starts with the Sun.` },
          ],
        },
        {
          type:          'magazine',
          section:       2,
          totalSections: 6,
          headline:      `Producers: Plants Make Food`,
          paragraphs: [
            `Plants are called producers because they MAKE their own food. Using sunlight, water, and carbon dioxide, they create sugar in a process called photosynthesis.`,
            `Every plant you've ever seen is a solar-powered food factory. Plants are the foundation of almost every food chain on Earth.`,
          ],
          image:        '/explorer-assets/cosmos/l05-s2-producers.png',
          imageCaption: `Plants are solar-powered food factories — they capture sunlight and turn it into food`,
          vocab: [
            { word: 'producer',       definition: `A living thing — mostly plants — that makes its own food using sunlight. Producers are the foundation of every food chain.`, audioPrompt: `Producer — a living thing, mostly plants, that makes its own food using sunlight. Producers are the foundation of every food chain.` },
            { word: 'photosynthesis', definition: `How plants convert sunlight, water, and carbon dioxide into sugar. It's how the Sun's energy enters the food chain.`, audioPrompt: `Photosynthesis — how plants convert sunlight, water, and carbon dioxide into sugar. It's how the Sun's energy enters the food chain.` },
          ],
        },
        {
          type:          'magazine',
          section:       3,
          totalSections: 6,
          headline:      `Consumers: Who Eats What`,
          paragraphs: [
            `Animals are called consumers because they eat instead of making their own food. There are three kinds.`,
            `Herbivores eat only plants — rabbits, deer, cows. Carnivores eat only animals — lions, eagles, sharks. Omnivores eat both — bears, humans, raccoons.`,
          ],
          image:        '/explorer-assets/cosmos/l05-s3-consumers.png',
          imageCaption: `Three kinds of consumers — herbivores, carnivores, and omnivores`,
          vocab: [
            { word: 'herbivore', definition: `An animal that eats only plants. Rabbits, deer, and cows are herbivores — they eat directly from producers.`, audioPrompt: `Herbivore — an animal that eats only plants. Rabbits, deer, and cows are herbivores. They eat directly from producers.` },
            { word: 'omnivore',  definition: `An animal that eats both plants and animals. Bears, humans, and raccoons are omnivores — flexible eaters.`, audioPrompt: `Omnivore — an animal that eats both plants and animals. Bears, humans, and raccoons are omnivores, flexible eaters.` },
          ],
        },
        {
          type:          'magazine',
          section:       4,
          totalSections: 6,
          headline:      `The 10% Rule`,
          paragraphs: [
            `Here's a surprising fact: at each step of the food chain, about 90% of the energy is lost as heat. Only 10% is passed on.`,
            `This is why there are always far more plants than herbivores, and far more herbivores than carnivores. Energy thins out as it climbs.`,
          ],
          image:        '/explorer-assets/cosmos/l05-s4-energy-pyramid.png',
          imageCaption: `90% of energy is lost at each step — which is why the food pyramid narrows at the top`,
          vocab: [
            { word: 'trophic level', definition: `Each step in a food chain. Plants are level 1, plant-eaters are level 2, meat-eaters that eat them are level 3.`, audioPrompt: `Trophic level — each step in a food chain. Plants are level 1. Plant-eaters are level 2. Meat-eaters that eat them are level 3.` },
            { word: 'energy loss',   definition: `How much energy disappears as heat at each step in the food chain — about 90% at every level.`, audioPrompt: `Energy loss — how much energy disappears as heat at each step in the food chain. About 90% at every level.` },
          ],
        },
        {
          type:          'magazine',
          section:       5,
          totalSections: 6,
          headline:      `Decomposers: Nature's Recyclers`,
          paragraphs: [
            `When plants and animals die, decomposers — fungi, bacteria, earthworms — eat the dead matter and break it down into nutrients.`,
            `Those nutrients return to the soil so plants can grow again. Without decomposers, plants would run out of food and the whole system would collapse.`,
          ],
          image:        '/explorer-assets/cosmos/l05-s5-decomposers.png',
          imageCaption: `Decomposers are the hidden recycling crew — they keep nutrients flowing back to plants`,
          vocab: [
            { word: 'decomposer', definition: `A living thing — fungi, bacteria, earthworms — that breaks down dead matter and returns nutrients to the soil.`, audioPrompt: `Decomposer — a living thing, like fungi, bacteria, and earthworms, that breaks down dead matter and returns nutrients to the soil.` },
            { word: 'nutrient',   definition: `A substance living things need to grow. Decomposers release nutrients from dead matter back into the soil for plants.`, audioPrompt: `Nutrient — a substance living things need to grow. Decomposers release nutrients from dead matter back into the soil for plants.` },
          ],
        },
        {
          type:          'magazine',
          section:       6,
          totalSections: 6,
          headline:      `Food Webs Are Connected`,
          paragraphs: [
            `Real feeding isn't a simple chain — it's a web. A mouse might be eaten by an owl, a fox, a hawk, AND a snake. Many chains overlap.`,
            `Remove one species and it ripples through the whole system. Every species matters — even the smallest bee or earthworm is a thread in the web.`,
          ],
          image:        '/explorer-assets/cosmos/l05-s6-food-web.png',
          imageCaption: `Food webs are interconnected — pull one thread and the whole web feels it`,
          vocab: [
            { word: 'food web',     definition: `Many overlapping food chains connected together. Most animals eat (and are eaten by) multiple species, not just one.`, audioPrompt: `Food web — many overlapping food chains connected together. Most animals eat, and are eaten by, multiple species, not just one.` },
            { word: 'biodiversity', definition: `The variety of different species in an ecosystem. The more biodiversity, the stronger and more resilient the food web.`, audioPrompt: `Biodiversity — the variety of different species in an ecosystem. The more biodiversity, the stronger and more resilient the food web.` },
          ],
        },

        // PHASE 3 — INTERACTIVE
        {
          type:          'interactive',
          activityType:  'drag-match',
          instruction:   `Tap each card, then tap its role in the food chain!`,
          guideText:     `Every living thing in a food chain plays one of four roles — producer, herbivore, carnivore, or decomposer. Energy flows from one to the next. Can you sort these four into the right role?`,
          columnHeaders: [`The Living Thing`, `Its Role`],
          items: [
            { image: 'l05-game-grass.png',  label: `Grass growing in a sunny meadow, converting sunlight into food.`, correctMatch: 'producer',   objectPosition: 'center 50%', matchPhrase: `Producer! Grass makes its own food from sunlight through photosynthesis — it doesn't eat anything. As a producer, it's the entry point for the Sun's energy into the food chain. Every food chain on land starts here.` },
            { image: 'l05-game-rabbit.png', label: `A rabbit eating grass in a field.`,                               correctMatch: 'herbivore',  objectPosition: 'center 50%', matchPhrase: `Herbivore! Rabbits eat only plants — they're the first consumers in the chain, eating directly from producers. They can't make their own food like plants can, so they get their energy by eating the grass that captured the Sun's energy first.` },
            { image: 'l05-game-eagle.png',  label: `An eagle catching a mouse in flight.`,                           correctMatch: 'carnivore',  objectPosition: 'center 50%', matchPhrase: `Carnivore! Eagles eat only animals — they're higher-level consumers in the food chain. By the time the Sun's energy reaches an eagle, it's passed through plants and herbivores, losing 90% at each step. Eagles earn every meal.` },
            { image: 'l05-game-worm.png',   label: `An earthworm breaking down a fallen leaf.`,                      correctMatch: 'decomposer', objectPosition: 'center 50%', matchPhrase: `Decomposer! Earthworms break down dead plant and animal matter and return nutrients to the soil — without them, plants would run out of nutrients and the whole food chain would collapse. The worm is the unsung hero of every ecosystem.` },
          ],
          buckets: [
            { id: 'producer',   label: `🌿 Producer`,   color: '#34D399' },
            { id: 'herbivore',  label: `🐰 Herbivore`,  color: '#60A5FA' },
            { id: 'carnivore',  label: `🦁 Carnivore`,  color: '#F59E0B' },
            { id: 'decomposer', label: `🍄 Decomposer`, color: '#818CF8' },
          ],
        },

        // PHASE 4 — MASTERY QUIZ
        {
          type:      'quiz',
          guideText: `Quiz time, {name}! Let's see what you've learned about food chains. Answer all 6 questions to earn your Food Web Builder badge!`,
          questions: [
            {
              format:       'multiple-choice',
              question:     `What are producers in a food chain?`,
              options:      [`Animals that hunt other animals`, `Plants that make their own food using sunlight through photosynthesis`, `Fungi that break down dead things`, `Animals that eat plants`],
              correctIndex: 1,
            },
            {
              format:       'multiple-choice',
              question:     `What do decomposers do?`,
              options:      [`Hunt and eat large animals`, `Produce food from sunlight`, `Break down dead plants and animals and return nutrients to the soil`, `Compete with plants for sunlight`],
              correctIndex: 2,
            },
            {
              format:       'multiple-choice',
              question:     `What is an omnivore?`,
              options:      [`An animal that only eats plants`, `An animal that only eats meat`, `An animal that eats both plants and animals`, `A plant that traps and eats insects`],
              correctIndex: 2,
            },
            {
              format:        'true-false',
              question:      `Plants are called producers because they make their own food using sunlight.`,
              correctAnswer: true,
            },
            {
              format:       'fill-blank',
              question:     `In a food chain, energy starts with the ___ and flows to consumers.`,
              options:      [`Sun`, `ocean`, `soil`, `rain`],
              correctIndex: 0,
            },
            {
              format:       'multiple-choice',
              question:     `What would happen if all decomposers disappeared from Earth?`,
              options:      [`Plants would grow faster`, `Animals would have more food`, `Earth would fill up with dead things and plants would run out of nutrients`, `Food chains would stay the same`],
              correctIndex: 2,
            },
          ],
        },

        // PHASE 5 — REAL-WORLD CONNECTION
        {
          type:            'real-world',
          guideText:       `Try this tonight — trace your dinner back to the Sun. How many steps does it take?`,
          familyAdventure: `Look at the food you eat for dinner tonight and trace every ingredient back to a plant. Even meat comes from animals that ate plants. How far back can you go? Can you trace it all the way to sunlight? Bonus: find one ingredient that might have a surprising food chain behind it.`,
          creativePrompt:  `Pick an environment — a forest, ocean, or grassland. Think of 6–8 animals and plants that live there. Draw them on paper and use arrows to show who eats who (arrows point from the food to the eater). How many connections can you find? What would happen if you removed one species?`,
        },

        // PHASE 6 — CELEBRATION
        {
          type:      'celebration',
          xpEarned:  50,
          badge:     'food-web-builder',
          badgeName: `Food Web Builder`,
          message:   `Brilliant work, {name}! You now know that every meal you've ever eaten traces back to a plant, and every plant traces back to the Sun. The same energy that powers the stars powers you — flowing through grass, rabbits, and eagles alike. Nova is so proud to share the universe with you.`,
        },
      ],
    },
  ],
};

// Log on module load — confirms lesson wired correctly + verifies image assets at runtime
(() => {
  const l    = cosmos_explorer_l05_screens.lessons[0];
  const mags = l.screens.filter(s => s.type === 'magazine').length;
  const game = l.screens.find(s => s.type === 'interactive')?.items?.length || 0;
  const quiz = l.screens.find(s => s.type === 'quiz')?.questions?.length || 0;
  console.log(`[LESSON-COSMOS-L05] Loaded: "Food Chains: Who Eats Who?" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
  Promise.all([
    fetch('/explorer-assets/cosmos/l05-s1-sun-energy.png',      { method: 'HEAD' }),
    fetch('/explorer-assets/cosmos/l05-s2-producers.png',       { method: 'HEAD' }),
    fetch('/explorer-assets/cosmos/l05-s3-consumers.png',       { method: 'HEAD' }),
    fetch('/explorer-assets/cosmos/l05-s4-energy-pyramid.png',  { method: 'HEAD' }),
    fetch('/explorer-assets/cosmos/l05-s5-decomposers.png',     { method: 'HEAD' }),
    fetch('/explorer-assets/cosmos/l05-s6-food-web.png',        { method: 'HEAD' }),
  ]).then(([r1, r2, r3, r4, r5, r6]) => {
    console.log(`[ASSET-CHECK-COSMOS-L05] sun-energy: ${r1.ok}, producers: ${r2.ok}, consumers: ${r3.ok}, energy-pyramid: ${r4.ok}, decomposers: ${r5.ok}, food-web: ${r6.ok}`);
  }).catch(() => {
    console.log('[ASSET-CHECK-COSMOS-L05] Could not verify image assets — network check failed');
  });
})();

export default cosmos_explorer_l05_screens;
