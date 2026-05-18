// ─────────────────────────────────────────────────────────────────────────────
// SCIENCE  |  L16 — Habitats and Ecosystems
// Age band : explorers (6–8)   Guide: cosmo
// Standards: NGSS 2-LS4-1 / 3-LS4-3 (biodiversity, habitats, ecosystems)
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
          guideText: `Hey {name}, Cosmo here! Every animal, plant, and living thing has a HOME — a special place where it finds everything it needs to survive. That place is called a HABITAT. And when you zoom out and see ALL the living and non-living things in a place working together — that's an ECOSYSTEM. Today, we'll explore forests, oceans, deserts, and arctic ice. We'll discover how living things are BUILT for their homes. And we'll see why EVERY habitat matters. Let's explore!`,
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
            `Imagine living somewhere with NO food, NO water, and weather you absolutely can't handle. That would be terrible — and impossible.`,
            `Every living thing — from tiny beetles to giant whales — lives in a HABITAT that provides what it needs. A HABITAT is the natural home of a living thing. It gives the animal or plant the right FOOD, WATER, SHELTER, and CLIMATE to survive. A squirrel's habitat is a forest with trees and nuts. A fish's habitat is water with smaller creatures to eat. A cactus's habitat is a dry, sunny desert. Every living thing is matched to its habitat — perfectly.`,
          ],
          image: `/explorer-assets/science/l16-s1-home-everywhere.webp`,
          imageCaption: `Every living thing has a HABITAT — home that provides food, water, shelter, and the right climate.`,
          vocab: [
            { word: `habitat`,        definition: `The natural HOME of a living thing — it provides food, water, shelter, and the right climate.`,
              audioPrompt: `A habitat, {name}, is the natural home of a living thing. It provides everything that animal or plant needs to survive — food, water, shelter, and the right climate. A squirrel's habitat is the forest. A clownfish's habitat is a coral reef. A polar bear's habitat is the arctic ice. Each creature fits its habitat perfectly — because it's evolved to live there. Habitat literally means "it lives here."` },
            { word: `shelter`,        definition: `A safe PLACE to live. Habitats provide SHELTER from weather and danger.`,
              audioPrompt: `Shelter, {name}, is a safe place to live. Habitats provide shelter. Birds find shelter in trees. Rabbits shelter in underground burrows. Fish shelter among coral reefs and rocks. Without shelter, animals would be exposed to bad weather, extreme temperatures, and predators. A good habitat provides shelter — a safe home where life can happen.` },
            { word: `climate`,        definition: `The usual weather of a place — temperature, rain, seasons. Every habitat has its own CLIMATE.`,
              audioPrompt: `Climate, {name}, is the usual weather of a place — the average temperature, how much rain falls, what the seasons are like. Every habitat has its own climate. Rainforests are hot and wet. Deserts are hot and dry. The arctic is freezing cold. Animals and plants are adapted to their habitat's climate. Put them in the wrong climate, and they can't survive.` },
          ],
        },

        {
          id: `l16-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `FOREST Habitats: Green and Alive`,
          paragraphs: [
            `Walk into a forest — you're surrounded by LIFE. Tall trees reach for sunlight. Ferns cover the ground. Mushrooms pop up from fallen logs. And the animals? Everywhere.`,
            `FORESTS are one of Earth's richest habitats. Squirrels leap through branches. Deer graze in clearings. Owls sleep in tree hollows by day and hunt at night. Bears fish in streams. Insects crawl under bark. Birds build nests high up in the canopy. The forest provides FOOD (berries, nuts, insects, fish), WATER (streams and rain), and SHELTER (trees, logs, burrows). Forests cover about 30% of Earth's land — and are home to MORE than half of all land animals. Forest habitats are AMAZING.`,
          ],
          image: `/explorer-assets/science/l16-s2-forest.webp`,
          imageCaption: `FORESTS teem with life — squirrels, deer, owls, bears, insects, birds. 30% of land, 50%+ of species.`,
          vocab: [
            { word: `forest`,         definition: `A habitat covered in trees and plants — home to HUGE numbers of animals.`,
              audioPrompt: `A forest, {name}, is a habitat covered in trees and plants — and home to a huge number of animals. Forests are rich, layered places. The canopy (tree tops) is full of birds and monkeys. The middle layer has squirrels and insects. The forest floor has beetles, rabbits, and fungi. Forests cover about 30% of Earth's land and are home to more than half of all land animals.` },
            { word: `canopy`,         definition: `The ROOF of a forest — the top layer formed by treetops.`,
              audioPrompt: `The canopy, {name}, is the roof of a forest — the top layer formed by the tops of tall trees. The canopy catches most of the sunlight. Birds, monkeys, tree frogs, and insects live up there. The canopy creates shade below, keeping the forest floor cooler and moister. In rainforests, the canopy is so thick that very little rain reaches the ground directly.` },
            { word: `rich habitat`,   definition: `A habitat with MANY different species — lots of living things. Forests are RICH habitats.`,
              audioPrompt: `A rich habitat, {name}, is one with many different species — lots of different living things. Forests are rich habitats. Millions of species of insects, plants, birds, mammals, fungi, and more all share the forest. Rich habitats have lots of food, water, and shelter for many different types of creatures. Coral reefs and rainforests are two of Earth's richest habitats.` },
          ],
        },

        {
          id: `l16-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `OCEAN Habitats: The Blue World`,
          paragraphs: [
            `The OCEAN covers more than 70% of Earth's surface. And it's FULL of life — from the sunny surface to the deep dark bottom.`,
            `Near the surface, sunlight shines through and plants grow. Small fish dart around. Dolphins leap and play. Sea turtles glide slowly through the water. Seabirds dive for fish. In CORAL REEFS — found in warm shallow water — THOUSANDS of species of colorful fish, crabs, shrimp, eels, and corals all live together in one of the most DIVERSE habitats on Earth. Deeper down, strange glowing creatures live in total darkness. The ocean provides FOOD (fish, plants, tiny creatures), WATER (obviously!), and SHELTER (reefs, rocks, seaweed). Ocean habitats are endlessly fascinating.`,
          ],
          image: `/explorer-assets/science/l16-s3-ocean.webp`,
          imageCaption: `OCEANS cover 70% of Earth — teeming with fish, dolphins, sea turtles, coral reefs, and deep-sea wonders.`,
          vocab: [
            { word: `ocean`,          definition: `Earth's largest habitat — covering 70% of the surface. Home to MILLIONS of species.`,
              audioPrompt: `The ocean, {name}, is Earth's largest habitat — covering more than 70% of the surface. It's home to millions of species. From tiny plankton to enormous blue whales. From colorful coral reef fish to strange glowing deep-sea creatures. The ocean is layers and layers of life — from the sunny surface down to the dark, cold deep. It's the biggest, most diverse habitat on Earth.` },
            { word: `coral reef`,     definition: `A rich underwater habitat built by coral animals — home to thousands of species.`,
              audioPrompt: `A coral reef, {name}, is a rich underwater habitat built by tiny animals called corals. Corals form hard structures over thousands of years — creating a rocky reef. That reef becomes home to thousands of species — colorful fish, crabs, shrimp, sea turtles, eels, sponges, and more. Coral reefs are called the rainforests of the sea because they're so incredibly rich with life.` },
            { word: `diverse`,        definition: `Having MANY different kinds. The ocean is incredibly DIVERSE — full of many species.`,
              audioPrompt: `Diverse, {name}, means having many different kinds. The ocean is incredibly diverse — full of an amazing variety of species. Big and tiny. Predator and prey. Colorful and camouflaged. Deep and shallow. Surface swimmers and bottom dwellers. Biodiversity — bio meaning life, diversity meaning variety — is what makes an ecosystem healthy and strong. The ocean is one of Earth's most diverse places.` },
          ],
        },

        {
          id: `l16-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `DESERT and ARCTIC: Extreme Habitats`,
          paragraphs: [
            `Not all habitats are gentle and comfortable. Some are EXTREME. Too hot, too dry, too frozen. But life finds a way.`,
            `DESERTS are very hot and very DRY — getting very little rain. Yet camels store water in their humps and fat. Lizards bask on hot rocks. Cacti save water inside their thick stems. ARCTIC and TUNDRA habitats are FREEZING COLD. Polar bears have thick fat and fur to stay warm. Arctic foxes have fur that turns white in winter (camouflage!). Seals stay warm with blubber under their skin. These animals CANNOT survive in other habitats — and couldn't survive WITHOUT their special body features. Extreme habitats prove how POWERFUL adaptation is.`,
          ],
          image: `/explorer-assets/science/l16-s4-desert-arctic.webp`,
          imageCaption: `EXTREME habitats: scorching deserts and frozen arctic — both full of life, each with special adaptations.`,
          vocab: [
            { word: `desert`,         definition: `A dry habitat with very little rain. Animals here are adapted for heat and dryness.`,
              audioPrompt: `A desert, {name}, is a dry habitat that gets very little rain — less than 25 centimeters per year. Deserts can be scorching hot during the day and surprisingly cold at night. Animals that live there are specially adapted. Camels store fat for energy and water. Lizards are cold-blooded and soak up sun for warmth. Cacti store water in their thick stems. Life in the desert is all about surviving with very little water.` },
            { word: `arctic`,         definition: `A freezing cold habitat at Earth's poles — home to animals built for extreme cold.`,
              audioPrompt: `The arctic, {name}, is the freezing cold region near Earth's North Pole — and the tundra is the cold land nearby. Temperatures can drop to -50 degrees Celsius. Animals there are built for extreme cold. Polar bears have thick waterproof fur and a layer of fat called blubber. Arctic foxes grow extra fur in winter. Seals have blubber. The arctic seems harsh, but it's a thriving habitat for animals built for it.` },
            { word: `extreme`,        definition: `Very harsh — very hot, very cold, or very dry. EXTREME habitats still support life.`,
              audioPrompt: `Extreme, {name}, means very harsh — far beyond comfortable. Extremely hot deserts. Extremely cold arctic ice. Extremely dry wastelands. Extremely deep ocean. These extreme habitats seem impossible to live in — but animals have evolved to handle them. Extreme habitats prove that life is incredibly adaptable. Wherever there's an extreme environment on Earth, you can almost always find something living there.` },
          ],
        },

        {
          id: `l16-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `ADAPTATIONS: Built for Home`,
          paragraphs: [
            `Why can a polar bear survive in the arctic but not a tropical frog? Why can a camel cross a desert but not a salmon? Because of ADAPTATIONS.`,
            `An ADAPTATION is a special body feature or behavior that helps a living thing survive in its habitat. Polar bears: THICK FUR and FAT (stay warm in cold). Camels: HUMPS storing fat for energy, wide feet for sand (survive in desert). Fish: GILLS to breathe underwater (live in ocean). Cacti: THICK WAXY SKIN to hold water, SPINES instead of leaves (survive in desert). Ducks: WATERPROOF FEATHERS (stay dry in water). Every adaptation is a perfect match between animal and habitat. It's evolution's way of saying: "You belong HERE."`,
          ],
          image: `/explorer-assets/science/l16-s5-adaptations.webp`,
          imageCaption: `ADAPTATIONS are special features built for survival — fur, gills, humps, spines, blubber, webbed feet.`,
          vocab: [
            { word: `adaptation`,     definition: `A special BODY FEATURE or BEHAVIOR that helps a living thing survive in its habitat.`,
              audioPrompt: `An adaptation, {name}, is a special body feature or behavior that helps a living thing survive in its habitat. Adaptations come from millions of years of evolution. Animals whose features helped them survive had babies — passing on those features. Polar bear fur is an adaptation for cold. Fish gills are an adaptation for water. Camel humps store fat for long desert trips. Every adaptation is a solution to a survival challenge.` },
            { word: `blubber`,        definition: `A thick layer of fat under an animal's skin — INSULATION for cold habitats.`,
              audioPrompt: `Blubber, {name}, is a thick layer of fat found under the skin of animals like seals, whales, and polar bears. Blubber is insulation — it traps body heat and keeps the animal warm even in freezing arctic water or ice. A seal's blubber can be several centimeters thick. Without it, the animal would quickly lose body heat and die in cold water. Blubber is a perfect cold-habitat adaptation.` },
            { word: `camouflage`,     definition: `An animal's ability to BLEND IN with its surroundings to hide.`,
              audioPrompt: `Camouflage, {name}, is an animal's ability to blend in with its surroundings to hide. An arctic fox's white fur blends with snow — making it hard for predators to see it and for prey to notice it hunting. A walking stick insect looks just like a twig. A leopard's spots help it hide in dappled forest light. Camouflage is one of nature's most clever adaptations — hiding in plain sight.` },
          ],
        },

        {
          id: `l16-mag-6`,
          type: `magazine`,
          section: 6,
          headline: `ECOSYSTEMS: Everything Connected`,
          paragraphs: [
            `A HABITAT is where animals and plants live. But an ECOSYSTEM is BIGGER — it includes ALL living things AND all the non-living things (water, soil, air, sunlight, rocks) in a place, all WORKING TOGETHER.`,
            `In a forest ecosystem, SUNLIGHT feeds the PLANTS. PLANTS are eaten by DEER and INSECTS. DEER are eaten by WOLVES. WOLVES die and their bodies are broken down by FUNGI and BACTERIA, returning nutrients to the SOIL. The SOIL feeds the PLANTS. It's a CYCLE. Remove any piece — cut down the trees, or remove the wolves — and the WHOLE system changes. Ecosystems are like giant puzzles. Every piece matters. Every living and non-living part is CONNECTED to every other part.`,
          ],
          image: `/explorer-assets/science/l16-s6-everything-connected.webp`,
          imageCaption: `ECOSYSTEMS connect living and non-living things. Sun → plants → animals → decomposers → soil → plants. All linked.`,
          vocab: [
            { word: `ecosystem`,      definition: `ALL living AND non-living things in a place WORKING TOGETHER as a system.`,
              audioPrompt: `An ecosystem, {name}, is all the living things — animals, plants, fungi, bacteria — AND all the non-living things — water, soil, air, sunlight, rocks — in a place, all working together. A forest ecosystem. A coral reef ecosystem. A desert ecosystem. Each is a complex web where everything affects everything else. Ecosystems are bigger than habitats — they're the whole interconnected system.` },
            { word: `connected`,      definition: `Linked together — what happens to one part AFFECTS other parts.`,
              audioPrompt: `Connected, {name}, means linked together — what happens to one part affects other parts. In an ecosystem, everything is connected. Remove the wolves, and deer populations explode. Deer eat all the plants. Without plants, other animals leave or die. The rivers erode without plant roots holding soil. Everything ripples out. This is why protecting ecosystems matters. You can't remove one piece without affecting the whole.` },
            { word: `cycle`,          definition: `A process that goes ROUND and ROUND. Energy and nutrients CYCLE through ecosystems.`,
              audioPrompt: `A cycle, {name}, is a process that goes round and round — endlessly repeating. In ecosystems, nutrients cycle. Plants absorb nutrients from soil. Animals eat plants. Animals die. Decomposers break them down and return nutrients to soil. Plants absorb them again. Round and round. Water cycles too — from ocean to cloud to rain to river to ocean. Cycles keep ecosystems running forever.` },
          ],
        },

        {
          id: `l16-game`,
          type: `interactive`,
          format: `drag-match`,
          guideText: `Let's see what you remember, {name}.`,
          buckets: [
            { id: `fact`, label: `✅ Yes, that's true!`, color: `#34D399` },
            { id: `myth`, label: `❌ No way!`,          color: `#F87171` },
          ],
          items: [
            { id: `l16-g1`, image: `l16-game-1.webp`, label: `Animals have ADAPTATIONS — special features built for their habitats.`,
              matchPhrase: `Exactly right! Polar bears have thick fur for cold. Fish have gills for water. Camels have humps for desert. Every animal has adaptations — features that help it survive in its specific habitat. Adaptations are the key to why animals fit their homes so perfectly.`,
              correctMatch: `fact` },
            { id: `l16-g2`, image: `l16-game-2.webp`, label: `There are MANY different habitats on Earth — forests, oceans, deserts, arctic, grasslands, and more.`,
              matchPhrase: `True! Earth has a wonderful variety of habitats — each with its own climate, plants, and animals. Forests, oceans, deserts, arctic tundra, grasslands, wetlands — each is different and home to different living things. Biodiversity depends on all these different habitats existing.`,
              correctMatch: `fact` },
            { id: `l16-g3`, image: `l16-game-3.webp`, label: `Any animal can live ANYWHERE — a polar bear in the desert is totally fine!`,
              matchPhrase: `Not at all! Animals are adapted for their specific habitat. A polar bear would overheat in a hot desert — its thick fur and fat keep it warm for arctic life, not desert life. Put any animal in the wrong habitat and it can't survive. Adaptations work only in the right home.`,
              correctMatch: `myth` },
            { id: `l16-g4`, image: `l16-game-4.webp`, label: `Habitats don't matter — living things can survive anywhere with no special needs.`,
              matchPhrase: `Definitely not! Habitats matter enormously. Every living thing needs the right food, water, shelter, and climate. Take away a creature's habitat and it can't survive. That's why habitat destruction is so dangerous — it takes away the home that animals and plants need to live.`,
              correctMatch: `myth` },
          ],
        },

        {
          id: `l16-quiz`,
          type: `quiz`,
          guideText: `Let's see what you remember, {name}.`,
          questions: [
            { id: `l16-q1`, format: `multiple-choice`,
              question: `What is a HABITAT?`,
              options: [`A type of animal`, `The natural HOME of a living thing — it provides food, water, shelter, and the right climate`, `A weather pattern`, `A kind of food`],
              correctIndex: 1,
              explanation: `A habitat is the natural home of a living thing. It provides everything that creature needs — food, water, shelter, and the right climate. Every living thing has a habitat it's perfectly suited for.` },
            { id: `l16-q2`, format: `multiple-choice`,
              question: `What is an ADAPTATION?`,
              options: [`A type of food`, `A special body feature or behavior helping a living thing survive in its habitat`, `A kind of habitat`, `A weather type`],
              correctIndex: 1,
              explanation: `An adaptation is a special body feature or behavior that helps a living thing survive in its habitat. Polar bear fur, fish gills, camel humps — all adaptations perfectly matched to each animal's home.` },
            { id: `l16-q3`, format: `multiple-choice`,
              question: `Which animal is BEST adapted for a cold arctic habitat?`,
              options: [`A tropical parrot`, `A camel`, `A POLAR BEAR — with thick fur and blubber for warmth`, `A desert lizard`],
              correctIndex: 2,
              explanation: `Polar bears are perfectly adapted for arctic life — thick waterproof fur, a layer of insulating blubber, and large paws for gripping ice. A tropical parrot or desert lizard would not survive the cold.` },
            { id: `l16-q4`, format: `true-false`,
              question: `An ECOSYSTEM includes BOTH living things AND non-living things (water, soil, air, sunlight) all working together.`,
              correctAnswer: true,
              explanation: `True! An ecosystem is ALL living things (animals, plants, bacteria) AND non-living things (water, soil, air, sunlight) in a place, working together as one connected system.` },
            { id: `l16-q5`, format: `fill-blank`,
              question: `Forests, oceans, and deserts are all examples of ___.`,
              options: [`habitats`, `galaxies`, `volcanoes`, `storms`],
              correctIndex: 0,
              explanation: `Habitats! Forests, oceans, and deserts are all different habitats — natural homes for different living things, each with its own climate, food, water, and shelter.` },
            { id: `l16-q6`, format: `multiple-choice`,
              question: `Why does it matter if a habitat is DESTROYED?`,
              options: [`It doesn't matter at all`, `The living things that depended on it LOSE their home, food, water, and shelter — and may not survive`, `It only affects plants`, `Only big animals are affected`],
              correctIndex: 1,
              explanation: `Habitat destruction is very serious! Every living thing depends on its habitat for food, water, shelter, and the right climate. Destroy the habitat, and the species that lived there can't survive. This is why protecting habitats is so important.` },
          ],
        },

        {
          id: `l16-realworld`,
          type: `real-world`,
          guideText: `Here's something amazing, {name}. Scientists called ECOLOGISTS study ecosystems and habitats all around the world. They discover new species in rainforests, track polar bears across arctic ice, study coral reefs underwater, and count birds in forests. One of the most important things ecologists have found is that BIODIVERSITY — having MANY different species in a habitat — makes ecosystems STRONGER. A diverse ecosystem can handle droughts, disease, and climate change better than a simple one. This is why saving endangered species matters — each one is a unique piece of a complex ecosystem puzzle.`,
          familyAdventure: `Go on a LOCAL HABITAT HUNT together. Visit a park, garden, or nearby natural area. Try to identify the HABITAT (forest, meadow, pond, coastal). Look for ANIMALS and what they're doing. Look for PLANTS and where they're growing. Notice the NON-LIVING parts — soil, water, sunlight, rocks. Ask: "How are these all connected?" Can you find any animals adapted to their habitat? Make a list of everything living and non-living you find.`,
          creativePrompt: `Design your own HABITAT and the PERFECT ANIMAL for it. Make up an extreme habitat — maybe super hot, super cold, super dark, or super windy. Then draw or describe an imaginary animal perfectly ADAPTED to live there. What body features help it survive? What does it eat? Where does it shelter? Give your habitat and animal names!`,
        },

        {
          id: `l16-celebration`,
          type: `celebration`,
          message: `Incredible work, {name}! You now understand HABITATS and ECOSYSTEMS. Every living thing has a HABITAT that gives it food, water, shelter, and the right climate. Animals have ADAPTATIONS — special features built for their home. FORESTS, OCEANS, DESERTS, and ARCTIC regions are all different habitats with amazing life. And ECOSYSTEMS connect ALL living and non-living things together in one web. Every piece matters. Every habitat is worth protecting. Engineering and ecosystems block — OPEN! See you next lesson!`,
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
  const mags  = SCIENCE_L16.lessons[0].screens.filter(s => s.type === 'magazine').length;
  const game  = SCIENCE_L16.lessons[0].screens.find(s => s.type === 'interactive')?.items?.length ?? 0;
  const quiz  = SCIENCE_L16.lessons[0].screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  console.log(`[LESSON-SCIENCE-L16] Loaded: "Habitats and Ecosystems" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
}
