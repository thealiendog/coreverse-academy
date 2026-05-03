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

        // PHASE 2 — MAGAZINE STORY (4 sections)
        {
          type:          'magazine',
          section:       1,
          totalSections: 4,
          headline:      `Producers: Plants Power Everything`,
          paragraphs: [
            `Energy flows from the Sun through plants to animals through food chains. Every living thing has a role, and removing any piece can affect the whole system. It all begins with producers.`,
            `Plants are called producers because they MAKE their own food. Using sunlight, water, and carbon dioxide, they carry out a process called photosynthesis — converting the Sun's energy into sugar they can use. Every plant you've ever seen is a solar-powered food factory.`,
            `Plants — and algae in the ocean — are the foundation of almost every food chain on Earth. Without them, there would be nothing for animals to eat. The Sun's energy only enters the food chain because producers capture it first.`,
          ],
          image:        '/explorer-assets/cosmos/l05-magazine-producers.png',
          imageCaption: `Producers — plants capture the Sun's energy through photosynthesis, powering every food chain`,
          vocab: [
            { word: 'producers',     definition: `Living things — mostly plants — that make their own food using sunlight through photosynthesis. They are the foundation of almost every food chain on Earth.`,                     audioPrompt: `Producers — living things, mostly plants, that make their own food using sunlight through photosynthesis. They are the foundation of almost every food chain on Earth.` },
            { word: 'photosynthesis', definition: `The process by which plants convert sunlight, water, and carbon dioxide into sugar — it's how plants make their own food and how the Sun's energy enters the food chain.`, audioPrompt: `Photosynthesis — the process by which plants convert sunlight, water, and carbon dioxide into sugar. It's how plants make their own food and how the Sun's energy enters the food chain.` },
          ],
        },
        {
          type:          'magazine',
          section:       2,
          totalSections: 4,
          headline:      `Consumers: Animals That Eat`,
          paragraphs: [
            `Animals are called consumers because they eat other things instead of making their own food. There are three kinds. Herbivores eat only plants — rabbits, deer, cows. Carnivores eat only animals — lions, eagles, sharks. Omnivores eat both plants and animals — bears, humans, raccoons.`,
            `Each level of eating is called a trophic level. Plants are the first trophic level. Animals that eat plants are the second. Animals that eat those animals are the third — and so on up the chain. Energy passes from one level to the next with every meal.`,
            `Here's a surprising fact: at each step of the food chain, about 90% of the energy is lost as heat. Only 10% is passed on to the next level. This is why there are always far more plants than herbivores, and far more herbivores than carnivores.`,
          ],
          image:        '/explorer-assets/cosmos/l05-magazine-consumers.png',
          imageCaption: `Consumers — herbivores, carnivores, and omnivores each occupy a different level of the food chain`,
          vocab: [
            { word: 'consumers',  definition: `Animals that eat other living things instead of making their own food — divided into herbivores (plant-eaters), carnivores (meat-eaters), and omnivores (both).`, audioPrompt: `Consumers — animals that eat other living things instead of making their own food. Divided into herbivores, which eat plants, carnivores, which eat meat, and omnivores, which eat both.` },
            { word: 'herbivore',  definition: `An animal that eats only plants — examples include rabbits, deer, and cows. Herbivores are the first consumers in most food chains, eating directly from producers.`,    audioPrompt: `Herbivore — an animal that eats only plants. Examples include rabbits, deer, and cows. Herbivores are the first consumers in most food chains, eating directly from producers.` },
          ],
        },
        {
          type:          'magazine',
          section:       3,
          totalSections: 4,
          headline:      `Decomposers: Nature's Recyclers`,
          paragraphs: [
            `When plants and animals die, something has to deal with all that matter. That's the job of decomposers. Fungi, bacteria, and some insects — like earthworms and beetles — eat dead things and break them down into nutrients that return to the soil.`,
            `This is how nutrients get recycled back to plants so they can grow again. Without decomposers, Earth would slowly fill up with dead things — and plants would eventually run out of the nutrients they need to survive. Decomposers are the hidden cleanup crew that keeps the whole system running.`,
            `A single handful of healthy soil contains billions of bacteria and hundreds of metres of fungal threads — all busily breaking things down and recycling nutrients. The most important recycling programme on Earth happens in the ground beneath your feet.`,
          ],
          image:        '/explorer-assets/cosmos/l05-magazine-decomposers.png',
          imageCaption: `Decomposers — fungi, bacteria, and worms break down dead things and return nutrients to the soil`,
          vocab: [
            { word: 'decomposers', definition: `Living things — including fungi, bacteria, and some insects — that break down dead plants and animals and return their nutrients to the soil, completing the cycle.`, audioPrompt: `Decomposers — living things including fungi, bacteria, and some insects that break down dead plants and animals and return their nutrients to the soil, completing the cycle.` },
            { word: 'nutrients',   definition: `Substances that living things need to grow and survive — decomposers release nutrients from dead matter back into the soil where plants can absorb them again.`,     audioPrompt: `Nutrients — substances that living things need to grow and survive. Decomposers release nutrients from dead matter back into the soil where plants can absorb them again.` },
          ],
        },
        {
          type:          'magazine',
          section:       4,
          totalSections: 4,
          headline:      `Food Webs: It's More Complex Than a Chain`,
          paragraphs: [
            `Real feeding relationships aren't simple chains — they're webs. A mouse might be eaten by an owl, a fox, a hawk, AND a snake. A fox might eat mice, rabbits, berries, AND insects. When many food chains overlap and connect, it creates a food web.`,
            `Food webs show us how interconnected life really is. Remove one species, and it ripples through the entire system in unexpected ways. Remove wolves from a landscape and deer populations explode, overgrazing vegetation, changing rivers, and reshaping the land. One species matters more than you'd think.`,
            `This is why protecting biodiversity matters — every species plays a role. Even the smallest creature, like an earthworm or a bee, is a thread in the web. Pull too many threads and the whole web unravels.`,
          ],
          image:        '/explorer-assets/cosmos/l05-magazine-food-web.png',
          imageCaption: `Food webs — overlapping chains of who eats who, where removing one species affects the whole system`,
          vocab: [
            { word: 'food web',     definition: `An interconnected system of many overlapping food chains — showing how most animals eat and are eaten by multiple species, not just one.`,                                audioPrompt: `Food web — an interconnected system of many overlapping food chains, showing how most animals eat and are eaten by multiple species, not just one.` },
            { word: 'biodiversity', definition: `The variety of different species in an ecosystem — the greater the biodiversity, the more stable and resilient the food web when one species is lost or changes.`, audioPrompt: `Biodiversity — the variety of different species in an ecosystem. The greater the biodiversity, the more stable and resilient the food web when one species is lost or changes.` },
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
            { image: 'l05-game-grass.png',  label: `Grass growing in a sunny meadow, converting sunlight into food.`, correctMatch: 'producer',    objectPosition: 'center 50%', matchPhrase: `Producer! Grass makes its own food from sunlight through photosynthesis — it doesn't eat anything. As a producer, it's the entry point for the Sun's energy into the food chain. Every food chain on land starts here.` },
            { image: 'l05-game-rabbit.png', label: `A rabbit eating grass in a field.`,                               correctMatch: 'herbivore',   objectPosition: 'center 50%', matchPhrase: `Herbivore! Rabbits eat only plants — they're the first consumers in the chain, eating directly from producers. They can't make their own food like plants can, so they get their energy by eating the grass that captured the Sun's energy first.` },
            { image: 'l05-game-eagle.png',  label: `An eagle catching a mouse in flight.`,                           correctMatch: 'carnivore',   objectPosition: 'center 50%', matchPhrase: `Carnivore! Eagles eat only animals — they're higher-level consumers in the food chain. By the time the Sun's energy reaches an eagle, it's passed through plants and herbivores, losing 90% at each step. Eagles earn every meal.` },
            { image: 'l05-game-worm.png',   label: `An earthworm breaking down a fallen leaf.`,                      correctMatch: 'decomposer',  objectPosition: 'center 50%', matchPhrase: `Decomposer! Earthworms break down dead plant and animal matter and return nutrients to the soil — without them, plants would run out of nutrients and the whole food chain would collapse. The worm is the unsung hero of every ecosystem.` },
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
    fetch('/explorer-assets/cosmos/l05-magazine-producers.png',   { method: 'HEAD' }),
    fetch('/explorer-assets/cosmos/l05-magazine-consumers.png',   { method: 'HEAD' }),
    fetch('/explorer-assets/cosmos/l05-magazine-decomposers.png', { method: 'HEAD' }),
    fetch('/explorer-assets/cosmos/l05-magazine-food-web.png',    { method: 'HEAD' }),
  ]).then(([r1, r2, r3, r4]) => {
    console.log(`[ASSET-CHECK-COSMOS-L05] producers: ${r1.ok}, consumers: ${r2.ok}, decomposers: ${r3.ok}, food-web: ${r4.ok}`);
  }).catch(() => {
    console.log('[ASSET-CHECK-COSMOS-L05] Could not verify image assets — network check failed');
  });
})();

export default cosmos_explorer_l05_screens;
