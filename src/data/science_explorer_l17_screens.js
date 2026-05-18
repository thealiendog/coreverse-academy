// ─────────────────────────────────────────────────────────────────────────────
// SCIENCE  |  L17 — Food Chains: Who Eats What
// Age band : explorers (6–8)   Guide: cosmo
// Standards: NGSS 5-LS2-1 / 5-PS3-1 (energy flow in food chains)
// ─────────────────────────────────────────────────────────────────────────────

const SCIENCE_L17 = {
  ageBand:   `explorers`,
  subjectId: `science`,
  guide:     `cosmo`,

  lessons: [
    {
      id:        `science-6-8-17`,
      title:     `Food Chains: Who Eats What`,
      duration:  12,
      xpReward:  50,
      badge:     `food-chain-explorer`,
      badgeName: `Food Chain Explorer`,

      screens: [

        {
          id: `l17-welcome`,
          type: `welcome`,
          guideText: `Hey {name}, Cosmo here! Last lesson we explored HABITATS. Today we look at WHO EATS WHAT in those habitats. A grasshopper eats grass. A bird eats the grasshopper. A fox eats the bird. That's a FOOD CHAIN. Today you'll see how energy flows from the sun all the way through plants, animals, and back to the soil. Every living thing has a role. Let's go!`,
          headline: `Food Chains: Who Eats What`,
          subtitle: `How energy flows from the sun, through plants, into animals, and back to the earth`,
          visual: `/explorer-assets/science/l17-welcome.webp`,
        },

        {
          id: `l17-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Energy on the Move`,
          paragraphs: [
            `Remember from earlier lessons — almost all energy on Earth starts with the SUN. Today we'll see how that energy MOVES through living things.`,
            `Sun gives energy to PLANTS. Plants are eaten by ANIMALS (or used by animals like cows). Those animals are eaten by OTHER animals. When everything dies, DECOMPOSERS (like worms and mushrooms) break them down — returning nutrients to the soil, where plants grow again. This whole cycle is the FOOD CHAIN. Energy moves from one living thing to the next. Like a baton being passed in a race. Sun starts the race. The food chain carries the energy.`,
          ],
          image: `/explorer-assets/science/l17-s1-energy-flow.webp`,
          imageCaption: `Energy flows: sun → plants → animals → decomposers → soil → plants. The food chain in motion.`,
          vocab: [
            { word: `food chain`,     definition: `A sequence showing who EATS whom in nature. Sun → plant → animal → animal.`,
              audioPrompt: `A food chain, {name}, is a sequence showing who eats whom in nature. It starts with sunlight. Sunlight feeds plants. Plants feed animals. Animals feed other animals. When things die, decomposers break them down. Everything is part of food chains. They show how energy moves through ecosystems.` },
            { word: `flow`,           definition: `To move smoothly. Energy FLOWS through food chains from sun to plants to animals.`,
              audioPrompt: `To flow, {name}, is to move smoothly. Energy flows through food chains. Like water flowing from a high place to a low place. Energy flows from the sun (the source) down through plants, then animals, then more animals, then decomposers. Always flowing in one direction — from sun to soil — through living things.` },
            { word: `cycle`,          definition: `A pattern that REPEATS. Food chains and ecosystems work in CYCLES.`,
              audioPrompt: `A cycle, {name}, is a pattern that repeats. Food chains create cycles. Living things eat each other. Eventually, they die. Decomposers break them down. Soil becomes rich. New plants grow from the soil. Then animals eat the plants. The cycle continues — over and over. Nature is full of cycles like this.` },
          ],
        },

        {
          id: `l17-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `PRODUCERS: Plants Make Food`,
          paragraphs: [
            `At the BOTTOM of every food chain are the PRODUCERS — that's PLANTS.`,
            `Producers are special because they MAKE their own food. Remember photosynthesis from L04? Plants take SUNLIGHT, WATER, and AIR — and turn them into FOOD. They don't eat anything. They make food from scratch. That's why they're called producers — they PRODUCE (make) food. ALL the energy in a food chain originally came from a producer. Every animal you've ever seen got its energy — directly or indirectly — from a plant. No plants = no animals = no food chain.`,
          ],
          image: `/explorer-assets/science/l17-s2-producers.webp`,
          imageCaption: `Producers = plants. They MAKE their own food from sunlight. Food chain starts with them.`,
          vocab: [
            { word: `producer`,       definition: `A living thing that MAKES its own food. PLANTS are PRODUCERS.`,
              audioPrompt: `A producer, {name}, is a living thing that makes its own food. Plants are producers. They make food using sunlight, water, and air (through photosynthesis). They don't eat other living things — they create food from scratch. Producers are at the bottom of every food chain. Without them, the whole food chain falls apart.` },
            { word: `produce`,        definition: `To MAKE. Plants PRODUCE food for themselves and for animals to eat.`,
              audioPrompt: `To produce, {name}, is to make. Plants produce food. They take sunlight, water, and air, and produce food using photosynthesis. They also produce oxygen for us to breathe! Plants are nature's food factories. They run on sun power and produce energy that the whole food chain depends on.` },
            { word: `bottom`,         definition: `The LOWEST level. Producers are at the BOTTOM of food chains.`,
              audioPrompt: `Bottom, {name}, means the lowest level. Producers are at the bottom of food chains. They're the foundation — the first level. Above them are animals that eat them. Above those animals are bigger animals that eat them. But it all starts with producers at the bottom. Without them, no food chain.` },
          ],
        },

        {
          id: `l17-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `HERBIVORES: Plant Eaters`,
          paragraphs: [
            `Next up — animals that ONLY EAT PLANTS. We call them HERBIVORES.`,
            `Herbivores eat grass, leaves, fruits, seeds, and other plant parts. They depend completely on producers (plants) for their energy. Examples — RABBITS, DEER, COWS, HORSES, ELEPHANTS, KOALAS, GIRAFFES. Herbivores are usually GENTLE animals (they don't hunt). They often have FLAT TEETH for grinding plants. Many live in HERDS for safety. Herbivores convert plant energy into ANIMAL energy. They're the next step in the food chain after producers.`,
          ],
          image: `/explorer-assets/science/l17-s3-herbivores.webp`,
          imageCaption: `Herbivores ONLY eat plants. Rabbits, deer, cows, elephants. They take plant energy into the next step.`,
          vocab: [
            { word: `herbivore`,      definition: `An animal that ONLY EATS PLANTS. Rabbits and cows are HERBIVORES.`,
              audioPrompt: `An herbivore, {name}, is an animal that only eats plants. Rabbits, deer, cows, horses, elephants, giraffes — all herbivores. They eat grass, leaves, fruits, seeds, and other plant parts. They don't eat meat. Herbivores depend completely on plants for their energy. The word 'herbivore' means 'plant eater.'` },
            { word: `plant eater`,    definition: `What herbivores DO — they EAT plants only.`,
              audioPrompt: `Plant eater, {name}, is what herbivores do — they eat plants only. Plant eaters have special teeth and stomachs for plants. Flat teeth for grinding leaves. Long digestive systems that take time to break down plant matter. Plants are harder to digest than meat. Plant eaters need to eat a LOT of plants to get enough energy.` },
            { word: `herds`,          definition: `Groups of animals living together. Many herbivores live in HERDS for safety.`,
              audioPrompt: `Herds, {name}, are groups of animals living together. Many herbivores live in herds. Like cows in fields. Buffalo on plains. Deer in forests. Elephants in groups. Living together helps them stay safe from predators. With many eyes watching, it's harder for hunters to sneak up. Group safety is a smart adaptation.` },
          ],
        },

        {
          id: `l17-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `CARNIVORES: Meat Eaters`,
          paragraphs: [
            `Now for the HUNTERS — animals that EAT OTHER ANIMALS. They're CARNIVORES.`,
            `Carnivores get their energy by hunting and eating OTHER animals (usually herbivores). Examples — LIONS, WOLVES, TIGERS, EAGLES, SHARKS, ALLIGATORS, FOXES. Carnivores often have SHARP TEETH for biting, STRONG MUSCLES for chasing, GREAT SENSES for hunting (hearing, smell, sight). Some carnivores hunt alone (eagles). Others hunt in groups (wolves). They're at HIGHER levels of the food chain. They depend on herbivores. Without herbivores, carnivores starve.`,
          ],
          image: `/explorer-assets/science/l17-s4-carnivores.webp`,
          imageCaption: `Carnivores ONLY eat other animals. Lions, wolves, eagles, sharks. Sharp teeth, strong senses, great hunters.`,
          vocab: [
            { word: `carnivore`,      definition: `An animal that ONLY EATS OTHER ANIMALS. Lions and wolves are CARNIVORES.`,
              audioPrompt: `A carnivore, {name}, is an animal that only eats other animals. Lions, wolves, tigers, eagles, sharks, alligators, foxes — all carnivores. The word 'carnivore' means 'meat eater.' Carnivores depend on hunting to survive. They have sharp teeth, strong muscles, and amazing senses to help them hunt.` },
            { word: `hunt`,           definition: `To CHASE and CATCH animals to eat. Carnivores HUNT for food.`,
              audioPrompt: `To hunt, {name}, means to chase and catch animals to eat. Carnivores hunt for food. They use their senses to find prey. Their muscles to chase. Their teeth and claws to catch. Some carnivores hunt alone — they need stealth and speed. Some hunt in groups — they need teamwork. Each is good at hunting in its own way.` },
            { word: `predator`,       definition: `An animal that HUNTS other animals. Carnivores are PREDATORS.`,
              audioPrompt: `A predator, {name}, is an animal that hunts other animals. Carnivores are predators. They prey on (hunt and eat) other animals. Predators have evolved sharp teeth, claws, and excellent senses for hunting. The animals they hunt are called PREY. The relationship between predator and prey is one of the most important in nature.` },
          ],
        },

        {
          id: `l17-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `OMNIVORES: Eat Both`,
          paragraphs: [
            `Some animals eat BOTH plants AND other animals. They're OMNIVORES.`,
            `Omnivores can eat a wide variety of food. Examples — BEARS (berries AND fish), PIGS (plants AND insects), RACCOONS (anything), FOXES (small animals AND fruits). And guess what — HUMANS are omnivores too! We eat vegetables, fruits, grains, AND meat, fish, dairy. Omnivores have teeth that work for BOTH cutting (like carnivore teeth) AND grinding (like herbivore teeth). Their stomachs can handle both kinds of food. Eating both gives omnivores LOTS of options — making them very ADAPTABLE.`,
          ],
          image: `/explorer-assets/science/l17-s5-omnivores.webp`,
          imageCaption: `Omnivores eat BOTH. Bears, foxes, raccoons — and HUMANS! Teeth and stomachs for both plant and meat.`,
          vocab: [
            { word: `omnivore`,       definition: `An animal that eats BOTH plants AND other animals. Bears and humans are OMNIVORES.`,
              audioPrompt: `An omnivore, {name}, is an animal that eats both plants and other animals. Bears, pigs, raccoons, foxes — all omnivores. HUMANS are omnivores too. We can eat plants (vegetables, fruits, grains) and animals (meat, fish, dairy). Omnivores have a wide variety of foods to choose from. That makes them very adaptable.` },
            { word: `variety`,        definition: `Many different things. Omnivores eat a wide VARIETY of foods.`,
              audioPrompt: `Variety, {name}, means many different things. Omnivores eat a wide variety of foods. Plants AND meat. Fruits AND nuts. Insects AND seeds. The variety helps them survive in many different habitats. If one type of food isn't available, they can switch to another. Variety is a survival superpower.` },
            { word: `adaptable`,      definition: `Able to CHANGE based on conditions. Omnivores are ADAPTABLE because they can eat many things.`,
              audioPrompt: `Adaptable, {name}, means able to change based on conditions. Omnivores are very adaptable. If meat is scarce, they eat more plants. If plants are scarce, they eat more meat. They can survive when picky eaters can't. That's why omnivores like bears, raccoons, and humans have spread across many habitats. Adaptability is a survival skill.` },
          ],
        },

        {
          id: `l17-mag-6`,
          type: `magazine`,
          section: 6,
          headline: `DECOMPOSERS: The Recyclers`,
          paragraphs: [
            `Here's the SECRET CREW that finishes every food chain — DECOMPOSERS.`,
            `When a plant or animal dies, its body still has energy and nutrients in it. Decomposers BREAK DOWN dead things and return nutrients to the soil. Examples — MUSHROOMS (and other fungi), BACTERIA (tiny living things), WORMS, BEETLES. They eat dead plants and dead animals. As they eat, they release nutrients back into the soil. Then plants use those nutrients to grow. Then animals eat the plants. The cycle continues! Without decomposers, the world would be COVERED in dead stuff. They're nature's recyclers.`,
          ],
          image: `/explorer-assets/science/l17-s6-decomposers.webp`,
          imageCaption: `Decomposers: mushrooms, worms, bacteria. Break down dead things, return nutrients to soil. Nature's recyclers.`,
          vocab: [
            { word: `decomposer`,     definition: `A living thing that breaks down DEAD things, returning nutrients to soil.`,
              audioPrompt: `A decomposer, {name}, is a living thing that breaks down dead things, returning nutrients to soil. Decomposers include mushrooms, bacteria, worms, and beetles. They eat dead plants and animals. As they break things down, the nutrients return to the soil. Plants use those nutrients to grow. Without decomposers, nature couldn't recycle. The world would pile up with dead things.` },
            { word: `break down`,     definition: `To take APART. Decomposers BREAK DOWN dead things into nutrients.`,
              audioPrompt: `To break down, {name}, means to take apart. Decomposers break down dead things. Like a worm eating a dead leaf — it slowly breaks the leaf into tiny pieces. Then bacteria break those down even smaller. Eventually, all that's left are nutrients — like calcium, nitrogen, and other minerals — which go back into the soil.` },
            { word: `recyclers`,      definition: `Things that USE the same materials again. Decomposers are nature's RECYCLERS.`,
              audioPrompt: `Recyclers, {name}, are things that use the same materials again. Decomposers are nature's recyclers. They take materials from dead things and recycle them back into the soil — where new plants can use them. Nature doesn't waste anything. Every living thing eventually gets recycled. The carbon in your body has been recycled MANY times over Earth's history.` },
          ],
        },

        {
          id: `l17-game`,
          type: `interactive`,
          format: `drag-match`,
          guideText: `Let's see what you remember, {name}.`,
          buckets: [
            { id: `fact`, label: `✅ Yes, that's true!`, color: `#34D399` },
            { id: `myth`, label: `❌ No way!`,         color: `#F87171` },
          ],
          items: [
            { id: `l17-g1`, image: `l17-game-1.webp`, label: `Every food chain STARTS with the SUN — sunlight feeds plants, plants feed animals.`,
              matchPhrase: `Yes! All food chains begin with sunlight. Plants capture it to make food. Animals get energy from plants. Without the sun, no food chain. The sun is the start.`,
              correctMatch: `fact` },
            { id: `l17-g2`, image: `l17-game-2.webp`, label: `PLANTS are PRODUCERS — they make their own food and feed the rest of the food chain.`,
              matchPhrase: `True! Plants are producers. They make food from sunlight using photosynthesis. They feed herbivores. Herbivores feed carnivores. The food chain begins with producers.`,
              correctMatch: `fact` },
            { id: `l17-g3`, image: `l17-game-3.webp`, label: `LIONS love eating SALAD and would prefer leaves and grass over meat.`,
              matchPhrase: `Not at all! Lions are CARNIVORES — they eat only meat. Their bodies are designed for hunting and eating other animals. They couldn't get enough energy from plants alone.`,
              correctMatch: `myth` },
            { id: `l17-g4`, image: `l17-game-4.webp`, label: `Plants, animals, and decomposers have NO CONNECTION at all — they exist separately.`,
              matchPhrase: `Definitely not! Everything in the food chain is connected. Plants feed animals. Animals are eaten by other animals. Decomposers break down dead things, returning nutrients to soil for plants. All connected.`,
              correctMatch: `myth` },
          ],
        },

        {
          id: `l17-quiz`,
          type: `quiz`,
          guideText: `Let's see what you remember, {name}.`,
          questions: [
            { id: `l17-q1`, format: `multiple-choice`,
              question: `What is a FOOD CHAIN?`,
              options: [`A type of metal chain`, `A sequence showing who EATS whom — sun, plants, animals, decomposers`, `A grocery store`, `A type of bird`],
              correctIndex: 1,
              explanation: `A food chain shows who eats whom in nature. It traces how energy moves: sun → plants → herbivores → carnivores → decomposers → back to soil.` },
            { id: `l17-q2`, format: `multiple-choice`,
              question: `What are PRODUCERS in a food chain?`,
              options: [`Cars`, `PLANTS — they MAKE their own food from sunlight`, `Just trees`, `Animals`],
              correctIndex: 1,
              explanation: `Producers are plants. They make their own food from sunlight, water, and air. They're at the bottom of every food chain. All energy in the food chain originally came from a producer.` },
            { id: `l17-q3`, format: `multiple-choice`,
              question: `What's an HERBIVORE?`,
              options: [`An animal that eats meat only`, `An animal that ONLY EATS PLANTS — like rabbits and deer`, `A type of flower`, `A type of fish`],
              correctIndex: 1,
              explanation: `Herbivores only eat plants. Rabbits, deer, cows, elephants, giraffes. They get their energy directly from plants.` },
            { id: `l17-q4`, format: `true-false`,
              question: `Humans are OMNIVORES — we eat both plants AND animals (meat, fish, dairy).`,
              correctAnswer: true,
              explanation: `True! Humans are omnivores. We can eat plants (vegetables, fruits, grains) and animals (meat, fish, dairy). That makes us adaptable — we can survive in many habitats.` },
            { id: `l17-q5`, format: `fill-blank`,
              question: `Mushrooms, worms, and bacteria are ___ — they break down dead things and return nutrients to soil.`,
              options: [`decomposers`, `dragons`, `dinosaurs`, `desks`],
              correctIndex: 0,
              explanation: `Decomposers! They're nature's recyclers. They break down dead plants and animals, returning nutrients to soil. Plants use those nutrients to grow.` },
            { id: `l17-q6`, format: `multiple-choice`,
              question: `What happens WITHOUT decomposers?`,
              options: [`Nothing changes`, `Dead things would PILE UP and nutrients wouldn't return to soil`, `It would rain more`, `Plants would grow faster`],
              correctIndex: 1,
              explanation: `Without decomposers, dead plants and animals would pile up forever! And nutrients wouldn't recycle back into soil. Decomposers are essential for nature's cycle.` },
          ],
        },

        {
          id: `l17-realworld`,
          type: `real-world`,
          guideText: `Here's something cool, {name}. The food chains in different habitats are AMAZING. In the ARCTIC, food chains are short: sun → tiny plants → krill (tiny shrimp) → fish → seals → polar bears. In the RAINFOREST, food chains are super complex: sun → trees → caterpillars → birds → snakes → eagles → and lots of decomposers everywhere. In OCEANS, the food chain often starts with tiny PLANKTON — microscopic plants that feed everything from shrimp to whales. Every habitat has its own food chains. Each is unique. All start with the sun. All end with decomposers recycling everything back to soil.`,
          familyAdventure: `Build a FOOD CHAIN together. On paper, draw a food chain for a habitat you like. For example, a meadow: sun → grass → grasshopper → frog → snake → hawk → (when hawk dies) decomposers → back to soil. Use arrows to show energy moving. Then try another habitat — ocean, forest, desert. Talk about how energy moves from one living thing to the next.`,
          creativePrompt: `Pick your FAVORITE food. Trace it BACK to the sun. Example: I love peanut butter. Peanut butter comes from PEANUTS (a plant). Peanuts get energy from SUN, WATER, AIR. So my sandwich = sun energy! Try this for cereal, chicken, milk, anything. Notice — everything we eat traces back to the sun. We're all running on solar power.`,
        },

        {
          id: `l17-celebration`,
          type: `celebration`,
          message: `Awesome work, {name}! You now understand FOOD CHAINS. PRODUCERS (plants) make food. HERBIVORES (rabbits, deer) eat plants. CARNIVORES (lions, eagles) eat other animals. OMNIVORES (bears, humans) eat both. DECOMPOSERS (mushrooms, worms) recycle dead things. Energy flows from the sun through it all. Every living thing has a role. Nature is the BEST recycler. See you next lesson!`,
          badge: `food-chain-explorer`,
          badgeName: `Food Chain Explorer`,
          xpEarned: 50,
        },

      ],
    },
  ],
};

export default SCIENCE_L17;

// ─── Dev asset check ─────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const mags  = SCIENCE_L17.lessons[0].screens.filter(s => s.type === 'magazine').length;
  const game  = SCIENCE_L17.lessons[0].screens.find(s => s.type === 'interactive')?.items?.length ?? 0;
  const quiz  = SCIENCE_L17.lessons[0].screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  console.log(`[LESSON-SCIENCE-L17] Loaded: "Food Chains" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
}
