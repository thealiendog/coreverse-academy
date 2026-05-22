// ─────────────────────────────────────────────────────────────────────────────
// SCIENCE  |  L17 — Food Chains: Who Eats What
// Age band : explorers (6–8)   Guide: cosmo
// Standards: NGSS 5-LS2-1 / 5-PS3-1
// REWRITE v2 (May 2026): Grade 1 accessible, PRODUCER / HERBIVORE / CARNIVORE
// 3-bucket identification game tests sorting living things by food chain role
// (Schema clean from source. Added Cosmo 🦦 sign-off to celebration message)
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
          guideText: `Hey {name}, Cosmo here! Last lesson we explored HABITATS! Today we look at WHO EATS WHAT in those habitats! A grasshopper eats grass! A bird eats the grasshopper! A fox eats the bird! That's a FOOD CHAIN! Today you'll see how energy flows from the sun all the way through plants, animals, and back to the soil! Let's go!`,
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
            `Remember from earlier lessons, {name} — almost all energy on Earth starts with the SUN! Today we'll see how that energy MOVES through living things!`,
            `Sun gives energy to PLANTS! Plants are eaten by ANIMALS (or used by animals like cows)! Those animals are eaten by OTHER animals! When everything dies, DECOMPOSERS (like worms and mushrooms) break them down — returning nutrients to the soil, where plants grow again! This whole cycle is the FOOD CHAIN! Energy moves from one living thing to the next!`,
          ],
          image: `/explorer-assets/science/l17-s1-energy-flow.webp`,
          imageCaption: `Energy flows: sun → plants → animals → decomposers → soil → plants!`,
          vocab: [
            { word: `food chain`, definition: `A sequence showing who eats whom in nature.`,
              audioPrompt: `A food chain is a sequence showing who eats whom in nature. It starts with sunlight. Sunlight feeds plants. Plants feed animals. Animals feed other animals. Decomposers break dead things down. Everything is part of food chains!` },
            { word: `flow`,       definition: `To move smoothly.`,
              audioPrompt: `To flow is to move smoothly. Energy flows through food chains. Like water flowing from a high place to a low place. Energy flows from the sun down through plants, then animals — always in one direction!` },
            { word: `cycle`,      definition: `A pattern that repeats.`,
              audioPrompt: `A cycle is a pattern that repeats. Food chains create cycles. Living things eat each other. Eventually, they die. Decomposers break them down. Soil becomes rich. New plants grow. The cycle continues!` },
          ],
        },

        {
          id: `l17-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `PRODUCERS: Plants Make Food`,
          paragraphs: [
            `At the BOTTOM of every food chain are the PRODUCERS — that's PLANTS!`,
            `Producers are special because they MAKE their own food! Remember photosynthesis? Plants take SUNLIGHT, WATER, and AIR — and turn them into FOOD! They don't eat anything! They make food from scratch! That's why they're called producers — they PRODUCE (make) food! ALL the energy in a food chain originally came from a producer! Every animal you've ever seen got its energy — directly or indirectly — from a plant! No plants = no animals = no food chain!`,
          ],
          image: `/explorer-assets/science/l17-s2-producers.webp`,
          imageCaption: `Producers = plants! They MAKE their own food!`,
          vocab: [
            { word: `producer`, definition: `A living thing that makes its own food.`,
              audioPrompt: `A producer is a living thing that makes its own food. Plants are producers. They make food using sunlight, water, and air. They don't eat other living things — they create food from scratch. Producers are at the bottom of every food chain!` },
            { word: `produce`,  definition: `To make.`,
              audioPrompt: `To produce is to make. Plants produce food. They take sunlight, water, and air, and produce food using photosynthesis. They also produce oxygen for us to breathe! Plants are nature's food factories!` },
            { word: `bottom`,   definition: `The lowest level.`,
              audioPrompt: `Bottom means the lowest level. Producers are at the bottom of food chains. They're the foundation — the first level. Above them are animals that eat them. But it all starts with producers at the bottom!` },
          ],
        },

        {
          id: `l17-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `HERBIVORES: Plant Eaters`,
          paragraphs: [
            `Next up — animals that ONLY EAT PLANTS! We call them HERBIVORES!`,
            `Herbivores eat grass, leaves, fruits, seeds, and other plant parts! They depend completely on producers (plants) for their energy! Examples — RABBITS, DEER, COWS, HORSES, ELEPHANTS, KOALAS, GIRAFFES! Herbivores are usually GENTLE animals (they don't hunt)! They often have FLAT TEETH for grinding plants! Many live in HERDS for safety! Herbivores convert plant energy into ANIMAL energy! They're the next step in the food chain!`,
          ],
          image: `/explorer-assets/science/l17-s3-herbivores.webp`,
          imageCaption: `Herbivores ONLY eat plants! Rabbits, deer, cows, elephants!`,
          vocab: [
            { word: `herbivore`,   definition: `An animal that only eats plants.`,
              audioPrompt: `An herbivore is an animal that only eats plants. Rabbits, deer, cows, horses, elephants, giraffes — all herbivores. They eat grass, leaves, fruits, seeds. They don't eat meat. The word herbivore means plant eater!` },
            { word: `plant eater`, definition: `What herbivores do — they eat plants only.`,
              audioPrompt: `Plant eater is what herbivores do — they eat plants only. Plant eaters have special teeth and stomachs for plants. Flat teeth for grinding leaves. Long digestive systems to break down plant matter!` },
            { word: `herds`,       definition: `Groups of animals living together.`,
              audioPrompt: `Herds are groups of animals living together. Many herbivores live in herds. Like cows in fields. Buffalo on plains. Living together helps them stay safe from predators. Many eyes watching!` },
          ],
        },

        {
          id: `l17-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `CARNIVORES: Meat Eaters`,
          paragraphs: [
            `Now for the HUNTERS — animals that EAT OTHER ANIMALS! They're CARNIVORES!`,
            `Carnivores get their energy by hunting and eating OTHER animals (usually herbivores)! Examples — LIONS, WOLVES, TIGERS, EAGLES, SHARKS, ALLIGATORS, FOXES! Carnivores often have SHARP TEETH for biting, STRONG MUSCLES for chasing, GREAT SENSES for hunting (hearing, smell, sight)! Some carnivores hunt alone (eagles)! Others hunt in groups (wolves)! They're at HIGHER levels of the food chain! Without herbivores, carnivores starve!`,
          ],
          image: `/explorer-assets/science/l17-s4-carnivores.webp`,
          imageCaption: `Carnivores ONLY eat other animals! Lions, wolves, eagles, sharks!`,
          vocab: [
            { word: `carnivore`, definition: `An animal that only eats other animals.`,
              audioPrompt: `A carnivore is an animal that only eats other animals. Lions, wolves, tigers, eagles, sharks — all carnivores. The word carnivore means meat eater. Carnivores depend on hunting to survive. They have sharp teeth and strong muscles!` },
            { word: `hunt`,      definition: `To chase and catch animals to eat.`,
              audioPrompt: `To hunt means to chase and catch animals to eat. Carnivores hunt for food. They use their senses to find prey. Their muscles to chase. Their teeth and claws to catch. Some hunt alone. Some hunt in groups!` },
            { word: `predator`,  definition: `An animal that hunts other animals.`,
              audioPrompt: `A predator is an animal that hunts other animals. Carnivores are predators. They prey on other animals. Predators have evolved sharp teeth, claws, and excellent senses for hunting. The animals they hunt are called prey!` },
          ],
        },

        {
          id: `l17-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `OMNIVORES: Eat Both`,
          paragraphs: [
            `Some animals eat BOTH plants AND other animals! They're OMNIVORES!`,
            `Omnivores can eat a wide variety of food! Examples — BEARS (berries AND fish), PIGS (plants AND insects), RACCOONS (anything), FOXES (small animals AND fruits)! And guess what — HUMANS are omnivores too! We eat vegetables, fruits, grains, AND meat, fish, dairy! Omnivores have teeth that work for BOTH cutting (like carnivore teeth) AND grinding (like herbivore teeth)! Eating both gives omnivores LOTS of options — making them very ADAPTABLE!`,
          ],
          image: `/explorer-assets/science/l17-s5-omnivores.webp`,
          imageCaption: `Omnivores eat BOTH! Bears, foxes, raccoons — and HUMANS!`,
          vocab: [
            { word: `omnivore`,  definition: `An animal that eats both plants and other animals.`,
              audioPrompt: `An omnivore is an animal that eats both plants and other animals. Bears, pigs, raccoons, foxes — all omnivores. HUMANS are omnivores too! We can eat plants and animals. That makes us adaptable!` },
            { word: `variety`,   definition: `Many different things.`,
              audioPrompt: `Variety means many different things. Omnivores eat a wide variety of foods. Plants AND meat. Fruits AND nuts. The variety helps them survive in many different habitats. A survival superpower!` },
            { word: `adaptable`, definition: `Able to change based on conditions.`,
              audioPrompt: `Adaptable means able to change based on conditions. Omnivores are very adaptable. If meat is scarce, they eat more plants. If plants are scarce, they eat more meat. They can survive when picky eaters can't!` },
          ],
        },

        {
          id: `l17-mag-6`,
          type: `magazine`,
          section: 6,
          headline: `DECOMPOSERS: The Recyclers`,
          paragraphs: [
            `Here's the SECRET CREW that finishes every food chain — DECOMPOSERS!`,
            `When a plant or animal dies, its body still has energy and nutrients in it! Decomposers BREAK DOWN dead things and return nutrients to the soil! Examples — MUSHROOMS (and other fungi), BACTERIA (tiny living things), WORMS, BEETLES! They eat dead plants and dead animals! As they eat, they release nutrients back into the soil! Then plants use those nutrients to grow! Then animals eat the plants! The cycle continues! Without decomposers, the world would be COVERED in dead stuff! They're nature's recyclers!`,
          ],
          image: `/explorer-assets/science/l17-s6-decomposers.webp`,
          imageCaption: `Decomposers: mushrooms, worms, bacteria — nature's recyclers!`,
          vocab: [
            { word: `decomposer`, definition: `A living thing that breaks down dead things.`,
              audioPrompt: `A decomposer is a living thing that breaks down dead things, returning nutrients to soil. Decomposers include mushrooms, bacteria, worms, and beetles. As they break things down, nutrients return to the soil!` },
            { word: `break down`, definition: `To take apart.`,
              audioPrompt: `To break down means to take apart. Decomposers break down dead things. Like a worm eating a dead leaf — it slowly breaks the leaf into tiny pieces. Eventually, all that's left are nutrients!` },
            { word: `recyclers`,  definition: `Things that use the same materials again.`,
              audioPrompt: `Recyclers are things that use the same materials again. Decomposers are nature's recyclers. They take materials from dead things and recycle them back into the soil — where new plants can use them!` },
          ],
        },

        {
          id: `l17-game`,
          type: `interactive`,
          format: `drag-match`,
          guideText: `Let's try it, {name}! Here are 4 living things. Drag each one to its food chain role — PRODUCER (makes food from sun!), HERBIVORE (only eats plants!), or CARNIVORE (only eats meat!)?`,
          buckets: [
            { id: `producer`,  label: `🌱 PRODUCER`,  color: `#16A34A` },
            { id: `herbivore`, label: `🐰 HERBIVORE`, color: `#FBBF24` },
            { id: `carnivore`, label: `🐺 CARNIVORE`, color: `#F87171` },
          ],
          items: [
            { id: `l17-g1`, image: `l17-game-1.webp`, label: `A tall sunflower turning its head to face the sunlight`,
              matchPhrase: `Yes! PRODUCER! Sunflowers are plants — they make food from sunlight using photosynthesis!`,
              correctMatch: `producer` },
            { id: `l17-g2`, image: `l17-game-2.webp`, label: `A fluffy rabbit nibbling on green grass and clover`,
              matchPhrase: `Right! HERBIVORE! Rabbits only eat plants. They have flat teeth perfect for grinding leaves!`,
              correctMatch: `herbivore` },
            { id: `l17-g3`, image: `l17-game-3.webp`, label: `A wolf hunting a deer through the forest`,
              matchPhrase: `Yes! CARNIVORE! Wolves are meat eaters. Sharp teeth, strong muscles, great senses for hunting!`,
              correctMatch: `carnivore` },
            { id: `l17-g4`, image: `l17-game-4.webp`, label: `An oak tree growing tall with deep roots`,
              matchPhrase: `Right! PRODUCER! Trees are big plants — making food from sunlight every day!`,
              correctMatch: `producer` },
          ],
        },

        {
          id: `l17-quiz`,
          type: `quiz`,
          guideText: `Let's see what you remember, {name}!`,
          questions: [
            { id: `l17-q1`, format: `multiple-choice`,
              question: `What is a FOOD CHAIN?`,
              options: [`A type of metal chain`, `A sequence showing who EATS whom — sun, plants, animals, decomposers`, `A grocery store`, `A type of bird`],
              correctIndex: 1,
              explanation: `A food chain shows who eats whom! Sun → plants → herbivores → carnivores → decomposers!` },
            { id: `l17-q2`, format: `multiple-choice`,
              question: `What are PRODUCERS in a food chain?`,
              options: [`Cars`, `PLANTS — they MAKE their own food from sunlight`, `Just trees`, `Animals`],
              correctIndex: 1,
              explanation: `Producers are plants. They make their own food from sunlight. They're at the bottom of every food chain!` },
            { id: `l17-q3`, format: `multiple-choice`,
              question: `What's an HERBIVORE?`,
              options: [`An animal that eats meat only`, `An animal that ONLY EATS PLANTS — like rabbits and deer`, `A type of flower`, `A type of fish`],
              correctIndex: 1,
              explanation: `Herbivores only eat plants. Rabbits, deer, cows, elephants. They get energy from plants!` },
            { id: `l17-q4`, format: `true-false`,
              question: `Humans are OMNIVORES — we eat both plants AND animals.`,
              correctAnswer: true,
              explanation: `True! Humans are omnivores. We can eat plants and animals. That makes us adaptable!` },
            { id: `l17-q5`, format: `fill-blank`,
              question: `Mushrooms, worms, and bacteria are ___ — they break down dead things.`,
              options: [`decomposers`, `dragons`, `dinosaurs`, `desks`],
              correctIndex: 0,
              explanation: `Decomposers! Nature's recyclers. They break down dead things, returning nutrients to soil!` },
            { id: `l17-q6`, format: `multiple-choice`,
              question: `What happens WITHOUT decomposers?`,
              options: [`Nothing changes`, `Dead things would PILE UP and nutrients wouldn't return to soil`, `It would rain more`, `Plants would grow faster`],
              correctIndex: 1,
              explanation: `Without decomposers, dead plants and animals would pile up forever! And nutrients wouldn't recycle!` },
          ],
        },

        {
          id: `l17-realworld`,
          type: `real-world`,
          guideText: `Here's something cool, {name}! Food chains in different habitats are AMAZING! In the ARCTIC, food chains are short: sun → tiny plants → krill → fish → seals → polar bears! In the RAINFOREST, food chains are super complex: sun → trees → caterpillars → birds → snakes → eagles! In OCEANS, the food chain often starts with tiny PLANKTON — microscopic plants that feed everything from shrimp to whales! Every habitat has its own food chains! All start with the sun!`,
          familyAdventure: `Build a FOOD CHAIN together! On paper, draw a food chain for a habitat you like! For example, a meadow: sun → grass → grasshopper → frog → snake → hawk → (when hawk dies) decomposers → back to soil! Use arrows to show energy moving! Then try another habitat — ocean, forest, desert!`,
          creativePrompt: `Pick your FAVORITE food! Trace it BACK to the sun! Example: I love peanut butter! Peanut butter comes from PEANUTS (a plant)! Peanuts get energy from SUN, WATER, AIR! So my sandwich = sun energy! For a 3-sentence floor: write 3 sentences tracing your favorite food back to the sun. For a 5-sentence stretch: trace TWO different foods back to the sun, plus one sentence about which surprised you most!`,
        },

        {
          id: `l17-celebration`,
          type: `celebration`,
          message: `Awesome work, {name}! You now understand FOOD CHAINS! PRODUCERS (plants) make food! HERBIVORES (rabbits, deer) eat plants! CARNIVORES (lions, eagles) eat other animals! OMNIVORES (bears, humans) eat both! DECOMPOSERS (mushrooms, worms) recycle dead things! Energy flows from the sun through it all! Cosmo is so splashy-proud! 🦦`,
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
  const mags = SCIENCE_L17.lessons[0].screens.filter(s => s.type === 'magazine').length;
  const game = SCIENCE_L17.lessons[0].screens.find(s => s.type === 'interactive')?.items?.length ?? 0;
  const quiz = SCIENCE_L17.lessons[0].screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  console.log(`[LESSON-SCIENCE-L17] Loaded: "Food Chains" with ${mags} magazine sections, ${game} game items, ${quiz} quiz questions`);
}
