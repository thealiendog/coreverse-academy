// ─────────────────────────────────────────────────────────────────────────────
// SCIENCE  |  L16 — Habitats and Ecosystems
// Age band : explorers (6–8)   Guide: cosmo
// Standards: NGSS 2-LS4-1 / 3-LS4-3
// REWRITE v2 (May 2026): Grade 1 accessible, FOREST / OCEAN / DESERT
// 3-bucket identification game tests sorting animals by their habitat
// (Schema clean from source. Added Cosmo 🦦 sign-off to celebration message)
// ─────────────────────────────────────────────────────────────────────────────

const SCIENCE_L16 = {
  ageBand:   `explorers`,
  subjectId: `science`,
  guide:     `cosmo`,

  lessons: [
    {
      id:        `science-6-8-16`,
      title:     `Habitats and Ecosystems`,
      duration:  12,
      xpReward:  50,
      badge:     `habitat-explorer`,
      badgeName: `Habitat Explorer`,

      screens: [

        {
          id: `l16-welcome`,
          type: `welcome`,
          guideText: `Hey {name}, Cosmo here! Every animal, plant, and living thing has a HOME — a special place where it finds everything it needs to survive! That place is called a HABITAT! And when you zoom out and see ALL the living and non-living things in a place working together — that's an ECOSYSTEM! Today, we'll explore forests, oceans, deserts, and arctic ice! Let's explore!`,
          headline: `Habitats and Ecosystems`,
          subtitle: `Where living things call home — and how they fit there perfectly`,
          visual: `/explorer-assets/science/l16-welcome.webp`,
        },

        {
          id: `l16-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Every Living Thing Has a HOME`,
          paragraphs: [
            `Imagine living somewhere with NO food, NO water, and weather you can't handle, {name}! That would be terrible!`,
            `Every living thing — from tiny beetles to giant whales — lives in a HABITAT that provides what it needs! A HABITAT is the natural home of a living thing! It gives the animal or plant the right FOOD, WATER, SHELTER, and CLIMATE to survive! A squirrel's habitat is a forest with trees and nuts! A fish's habitat is water with smaller creatures to eat! A cactus's habitat is a dry, sunny desert! Every living thing is matched to its habitat — perfectly!`,
          ],
          image: `/explorer-assets/science/l16-s1-home-everywhere.webp`,
          imageCaption: `Every living thing has a HABITAT!`,
          vocab: [
            { word: `habitat`, definition: `The natural home of a living thing.`,
              audioPrompt: `A habitat is the natural home of a living thing. It provides everything that animal or plant needs to survive — food, water, shelter, and the right climate. Each creature fits its habitat perfectly!` },
            { word: `shelter`, definition: `A safe place to live.`,
              audioPrompt: `Shelter is a safe place to live. Habitats provide shelter. Birds find shelter in trees. Rabbits shelter in underground burrows. Fish shelter among coral reefs. Without shelter, animals would be exposed to bad weather!` },
            { word: `climate`, definition: `The usual weather of a place.`,
              audioPrompt: `Climate is the usual weather of a place — the average temperature, how much rain falls, what the seasons are like. Every habitat has its own climate. Rainforests are hot and wet. Deserts are hot and dry!` },
          ],
        },

        {
          id: `l16-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `FOREST Habitats: Green and Alive`,
          paragraphs: [
            `Walk into a forest — you're surrounded by LIFE! Tall trees reach for sunlight! Ferns cover the ground! Mushrooms pop up from fallen logs!`,
            `FORESTS are one of Earth's richest habitats! Squirrels leap through branches! Deer graze in clearings! Owls sleep in tree hollows by day and hunt at night! Bears fish in streams! Insects crawl under bark! Birds build nests high up in the canopy! The forest provides FOOD (berries, nuts, insects, fish), WATER (streams and rain), and SHELTER (trees, logs, burrows)! Forests cover about 30% of Earth's land — and are home to MORE than half of all land animals!`,
          ],
          image: `/explorer-assets/science/l16-s2-forest.webp`,
          imageCaption: `FORESTS teem with life!`,
          vocab: [
            { word: `forest`,       definition: `A habitat covered in trees and plants.`,
              audioPrompt: `A forest is a habitat covered in trees and plants — and home to a huge number of animals. Forests are rich, layered places. Forests cover about 30% of Earth's land and are home to more than half of all land animals!` },
            { word: `canopy`,       definition: `The roof of a forest — the top layer.`,
              audioPrompt: `The canopy is the roof of a forest — the top layer formed by the tops of tall trees. The canopy catches most of the sunlight. Birds, monkeys, tree frogs, and insects live up there!` },
            { word: `rich habitat`, definition: `A habitat with many different species.`,
              audioPrompt: `A rich habitat is one with many different species — lots of different living things. Forests are rich habitats. Millions of species share the forest. Coral reefs and rainforests are two of Earth's richest habitats!` },
          ],
        },

        {
          id: `l16-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `OCEAN Habitats: The Blue World`,
          paragraphs: [
            `The OCEAN covers more than 70% of Earth's surface! And it's FULL of life — from the sunny surface to the deep dark bottom!`,
            `Near the surface, sunlight shines through and plants grow! Small fish dart around! Dolphins leap and play! Sea turtles glide slowly through the water! Seabirds dive for fish! In CORAL REEFS — found in warm shallow water — THOUSANDS of species of colorful fish, crabs, shrimp, eels, and corals all live together! Deeper down, strange glowing creatures live in total darkness! Ocean habitats are endlessly fascinating!`,
          ],
          image: `/explorer-assets/science/l16-s3-ocean.webp`,
          imageCaption: `OCEANS cover 70% of Earth!`,
          vocab: [
            { word: `ocean`,      definition: `Earth's largest habitat — covers 70% of the surface.`,
              audioPrompt: `The ocean is Earth's largest habitat — covering more than 70% of the surface. Home to millions of species. From tiny plankton to enormous blue whales. The ocean is layers and layers of life!` },
            { word: `coral reef`, definition: `A rich underwater habitat built by coral animals.`,
              audioPrompt: `A coral reef is a rich underwater habitat built by tiny animals called corals. Corals form hard structures over thousands of years. That reef becomes home to thousands of species — colorful fish, crabs, sea turtles!` },
            { word: `diverse`,    definition: `Having many different kinds.`,
              audioPrompt: `Diverse means having many different kinds. The ocean is incredibly diverse — full of an amazing variety of species. Big and tiny. Predator and prey. Surface swimmers and bottom dwellers!` },
          ],
        },

        {
          id: `l16-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `DESERT and ARCTIC: Extreme Habitats`,
          paragraphs: [
            `Not all habitats are gentle and comfortable! Some are EXTREME! Too hot, too dry, too frozen! But life finds a way!`,
            `DESERTS are very hot and very DRY — getting very little rain! Yet camels store water in their humps! Lizards bask on hot rocks! Cacti save water inside their thick stems! ARCTIC habitats are FREEZING COLD! Polar bears have thick fat and fur to stay warm! Arctic foxes have fur that turns white in winter (camouflage!)! Seals stay warm with blubber under their skin! These animals CANNOT survive in other habitats!`,
          ],
          image: `/explorer-assets/science/l16-s4-desert-arctic.webp`,
          imageCaption: `EXTREME habitats: scorching deserts and frozen arctic!`,
          vocab: [
            { word: `desert`,  definition: `A dry habitat with very little rain.`,
              audioPrompt: `A desert is a dry habitat that gets very little rain. Deserts can be scorching hot during the day and surprisingly cold at night. Camels store fat. Lizards soak up sun. Cacti store water in thick stems!` },
            { word: `arctic`,  definition: `A freezing cold habitat at Earth's poles.`,
              audioPrompt: `The arctic is the freezing cold region near Earth's North Pole. Animals there are built for extreme cold. Polar bears have thick waterproof fur and a layer of fat called blubber. Arctic foxes grow extra fur in winter!` },
            { word: `extreme`, definition: `Very harsh — very hot, very cold, or very dry.`,
              audioPrompt: `Extreme means very harsh — far beyond comfortable. Extremely hot deserts. Extremely cold arctic ice. These extreme habitats seem impossible to live in — but animals have evolved to handle them!` },
          ],
        },

        {
          id: `l16-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `ADAPTATIONS: Built for Home`,
          paragraphs: [
            `Why can a polar bear survive in the arctic but not a tropical frog? Why can a camel cross a desert but not a salmon? Because of ADAPTATIONS!`,
            `An ADAPTATION is a special body feature or behavior that helps a living thing survive in its habitat! Polar bears: THICK FUR and FAT (stay warm in cold)! Camels: HUMPS storing fat, wide feet for sand (survive in desert)! Fish: GILLS to breathe underwater (live in ocean)! Cacti: THICK WAXY SKIN to hold water, SPINES instead of leaves! Ducks: WATERPROOF FEATHERS (stay dry in water)! Every adaptation is a perfect match between animal and habitat!`,
          ],
          image: `/explorer-assets/science/l16-s5-adaptations.webp`,
          imageCaption: `ADAPTATIONS are special features built for survival!`,
          vocab: [
            { word: `adaptation`, definition: `A special body feature that helps survive in a habitat.`,
              audioPrompt: `An adaptation is a special body feature or behavior that helps a living thing survive in its habitat. Polar bear fur is an adaptation for cold. Fish gills are an adaptation for water. Every adaptation solves a survival challenge!` },
            { word: `blubber`,    definition: `A thick layer of fat for insulation in cold.`,
              audioPrompt: `Blubber is a thick layer of fat found under the skin of animals like seals, whales, and polar bears. Blubber traps body heat and keeps the animal warm even in freezing arctic water. A perfect cold-habitat adaptation!` },
            { word: `camouflage`, definition: `An animal's ability to blend in to hide.`,
              audioPrompt: `Camouflage is an animal's ability to blend in with its surroundings to hide. An arctic fox's white fur blends with snow. A walking stick insect looks just like a twig. Hiding in plain sight!` },
          ],
        },

        {
          id: `l16-mag-6`,
          type: `magazine`,
          section: 6,
          headline: `ECOSYSTEMS: Everything Connected`,
          paragraphs: [
            `A HABITAT is where animals and plants live! But an ECOSYSTEM is BIGGER — it includes ALL living things AND all the non-living things (water, soil, air, sunlight, rocks) in a place, all WORKING TOGETHER!`,
            `In a forest ecosystem, SUNLIGHT feeds the PLANTS! PLANTS are eaten by DEER and INSECTS! DEER are eaten by WOLVES! WOLVES die and their bodies are broken down by FUNGI and BACTERIA, returning nutrients to the SOIL! The SOIL feeds the PLANTS! It's a CYCLE! Remove any piece and the WHOLE system changes! Every living and non-living part is CONNECTED!`,
          ],
          image: `/explorer-assets/science/l16-s6-everything-connected.webp`,
          imageCaption: `ECOSYSTEMS connect living and non-living things!`,
          vocab: [
            { word: `ecosystem`, definition: `All living and non-living things in a place working together.`,
              audioPrompt: `An ecosystem is all the living things AND all the non-living things in a place, all working together. A forest ecosystem. A coral reef ecosystem. Each is a complex web where everything affects everything else!` },
            { word: `connected`, definition: `Linked together.`,
              audioPrompt: `Connected means linked together. In an ecosystem, everything is connected. Remove the wolves, and deer populations explode. Deer eat all the plants. This is why protecting ecosystems matters!` },
            { word: `cycle`,     definition: `A process that goes round and round.`,
              audioPrompt: `A cycle is a process that goes round and round — endlessly repeating. In ecosystems, nutrients cycle. Plants absorb nutrients. Animals eat plants. Decomposers return nutrients to soil. Round and round!` },
          ],
        },

        {
          id: `l16-game`,
          type: `interactive`,
          format: `drag-match`,
          guideText: `Let's try it, {name}! Here are 4 animals. Drag each one to its habitat — FOREST (trees and shade!), OCEAN (salt water!), or DESERT (hot and dry!)?`,
          buckets: [
            { id: `forest`, label: `🌳 FOREST`, color: `#16A34A` },
            { id: `ocean`,  label: `🌊 OCEAN`,  color: `#0EA5E9` },
            { id: `desert`, label: `🏜️ DESERT`, color: `#FBBF24` },
          ],
          items: [
            { id: `l16-g1`, image: `l16-game-1.webp`, label: `A bushy-tailed squirrel leaping between tree branches`,
              matchPhrase: `Yes! FOREST! Squirrels live in trees. Forests give them nuts to eat and branches for shelter!`,
              correctMatch: `forest` },
            { id: `l16-g2`, image: `l16-game-2.webp`, label: `A dolphin swimming through deep blue salt water`,
              matchPhrase: `Right! OCEAN! Dolphins are ocean mammals. They swim in salt water and eat fish!`,
              correctMatch: `ocean` },
            { id: `l16-g3`, image: `l16-game-3.webp`, label: `A camel walking across hot dry sand under a blazing sun`,
              matchPhrase: `Yes! DESERT! Camels are perfectly adapted for dry heat. Humps store fat. Wide feet handle sand!`,
              correctMatch: `desert` },
            { id: `l16-g4`, image: `l16-game-4.webp`, label: `A colorful clownfish darting through a coral reef`,
              matchPhrase: `Right! OCEAN! Clownfish live in coral reefs in warm shallow ocean water!`,
              correctMatch: `ocean` },
          ],
        },

        {
          id: `l16-quiz`,
          type: `quiz`,
          guideText: `Let's see what you remember, {name}!`,
          questions: [
            { id: `l16-q1`, format: `multiple-choice`,
              question: `What is a HABITAT?`,
              options: [`A type of animal`, `The natural HOME of a living thing — food, water, shelter, climate`, `A weather pattern`, `A kind of food`],
              correctIndex: 1,
              explanation: `A habitat is the natural home of a living thing. It provides food, water, shelter, and the right climate!` },
            { id: `l16-q2`, format: `multiple-choice`,
              question: `What is an ADAPTATION?`,
              options: [`A type of food`, `A special body feature helping a living thing survive in its habitat`, `A kind of habitat`, `A weather type`],
              correctIndex: 1,
              explanation: `An adaptation is a special body feature or behavior helping a living thing survive in its habitat. Polar bear fur. Fish gills!` },
            { id: `l16-q3`, format: `multiple-choice`,
              question: `Which animal is BEST adapted for a cold arctic habitat?`,
              options: [`A tropical parrot`, `A camel`, `A POLAR BEAR — with thick fur and blubber`, `A desert lizard`],
              correctIndex: 2,
              explanation: `Polar bears are perfectly adapted for arctic life — thick waterproof fur, insulating blubber, and large paws for ice!` },
            { id: `l16-q4`, format: `true-false`,
              question: `An ECOSYSTEM includes BOTH living things AND non-living things all working together.`,
              correctAnswer: true,
              explanation: `True! An ecosystem is ALL living things AND non-living things (water, soil, air, sunlight) in a place, working together!` },
            { id: `l16-q5`, format: `fill-blank`,
              question: `Forests, oceans, and deserts are all examples of ___.`,
              options: [`habitats`, `galaxies`, `volcanoes`, `storms`],
              correctIndex: 0,
              explanation: `Habitats! Forests, oceans, and deserts are all different habitats — natural homes for different living things!` },
            { id: `l16-q6`, format: `multiple-choice`,
              question: `Why does it matter if a habitat is DESTROYED?`,
              options: [`It doesn't matter`, `The living things lose their home, food, water, and shelter — and may not survive`, `It only affects plants`, `Only big animals are affected`],
              correctIndex: 1,
              explanation: `Habitat destruction is serious! Every living thing depends on its habitat to survive. Protecting habitats matters!` },
          ],
        },

        {
          id: `l16-realworld`,
          type: `real-world`,
          guideText: `Here's something amazing, {name}! Scientists called ECOLOGISTS study ecosystems and habitats all around the world! They discover new species in rainforests, track polar bears across arctic ice, study coral reefs underwater, and count birds in forests! One of the most important things ecologists have found is that BIODIVERSITY — having MANY different species in a habitat — makes ecosystems STRONGER! This is why saving endangered species matters!`,
          familyAdventure: `Go on a LOCAL HABITAT HUNT together! Visit a park, garden, or nearby natural area! Try to identify the HABITAT (forest, meadow, pond, coastal)! Look for ANIMALS and what they're doing! Look for PLANTS and where they're growing! Notice the NON-LIVING parts — soil, water, sunlight, rocks! Ask: "How are these all connected?" Make a list of everything living and non-living you find!`,
          creativePrompt: `Design your own HABITAT and the PERFECT ANIMAL for it! Make up an extreme habitat — maybe super hot, super cold, super dark, or super windy! Then draw or describe an imaginary animal perfectly ADAPTED to live there! For a 3-sentence floor: write a sentence describing your habitat, your animal, and one adaptation. For a 5-sentence stretch: write about your habitat's climate, your animal's body features, what it eats, where it sleeps, and how it stays safe!`,
        },

        {
          id: `l16-celebration`,
          type: `celebration`,
          message: `Incredible work, {name}! You now understand HABITATS and ECOSYSTEMS! Every living thing has a HABITAT that gives it food, water, shelter, and the right climate! Animals have ADAPTATIONS — special features built for their home! FORESTS, OCEANS, DESERTS, and ARCTIC regions are all different habitats with amazing life! And ECOSYSTEMS connect ALL living and non-living things together! Cosmo is so splashy-proud! 🦦`,
          badge: `habitat-explorer`,
          badgeName: `Habitat Explorer`,
          xpEarned: 50,
        },

      ],
    },
  ],
};

export default SCIENCE_L16;

// ─── Dev asset check ─────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const mags = SCIENCE_L16.lessons[0].screens.filter(s => s.type === 'magazine').length;
  const game = SCIENCE_L16.lessons[0].screens.find(s => s.type === 'interactive')?.items?.length ?? 0;
  const quiz = SCIENCE_L16.lessons[0].screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  console.log(`[LESSON-SCIENCE-L16] Loaded: "Habitats and Ecosystems" with ${mags} magazine sections, ${game} game items, ${quiz} quiz questions`);
}
