// ─────────────────────────────────────────────────────────────────────────────
// SCIENCE UE  |  L16 — Habitats and Ecosystems
// Age band : upper_explorers (9–10)   Guide: cosmo
// Standards: NGSS 5-LS2-1, 3-LS4-3, 3-LS4-4 — Matter cycles through
//            ecosystems; organisms thrive in habitats with specific factors;
//            environmental changes affect populations
// CALIBRATED: UE spec v1.1 — real domain terms, em-dashes sparing
// SCOPE: 4 concepts — habitats vs ecosystems, biotic vs abiotic factors,
//        ecosystems work as systems, why protecting them matters
// VERSION: v1
// ─────────────────────────────────────────────────────────────────────────────

const SCIENCE_UE_L16 = {
  ageBand: `upper_explorers`,
  subjectId: `science`,
  guide: `cosmo`,

  lessons: [
    {
      id: `science-9-10-16`,
      title: `Habitats and Ecosystems`,
      duration: 18,
      xpReward: 75,
      badge: `ecosystem-explorer`,
      badgeName: `Ecosystem Explorer`,

      screens: [
        {
          id: `l16-welcome`,
          type: `welcome`,
          guideText: `Hey {name}, Cosmo here. Now that you understand energy, plants, animals, and Earth's systems, we put it all together. Every living thing lives in a HABITAT, which is part of a larger ECOSYSTEM. Ecosystems are some of the most amazing and complicated things on Earth. They include living and non-living parts working together. By the end of today, you'll understand why otters live in kelp forests but not deserts, and why every ecosystem is a delicate balance worth protecting. Let's go.`,
          headline: `Habitats and Ecosystems`,
          subtitle: `Where living things call home, and how they fit there perfectly`,
          visual: `/ue-assets/science/l16-welcome.webp`,
        },

        {
          id: `l16-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Habitats vs Ecosystems`,
          paragraphs: [
            `A HABITAT is the specific place where a particular plant or animal lives. The habitat of a sea otter is the kelp forests off the Pacific coast. The habitat of a polar bear is the Arctic ice. The habitat of an oak tree is the temperate forest. Each species has SPECIFIC needs (food, shelter, climate, water) that its habitat provides. Take a species out of its habitat and it usually struggles. Polar bears don't do well in deserts. Cactuses don't grow in rainforests. Each organism is adapted to its specific home.`,
            `An ECOSYSTEM is bigger than a habitat. It's a whole community of living things plus the non-living parts of their environment. A pond ecosystem includes the fish, frogs, plants, insects, AND the water, mud, sunlight, and temperature. The Sahara desert is an ecosystem that includes the lizards, plants, dunes, wind, and heat. Every ecosystem has multiple species living together, plus the soil, water, weather, and chemicals that support them. Ecosystems can be small (a tide pool) or huge (the entire Amazon rainforest).`,
          ],
          image: `/ue-assets/science/l16-s1-habitat-ecosystem.webp`,
          imageCaption: `Habitat: where one species lives. Ecosystem: many species + non-living factors together.`,
          vocab: [
            { word: `habitat`,
              definition: `The specific place where a particular plant or animal lives. Each species needs a habitat that provides what it needs to survive: food, shelter, climate, water.`,
              audioPrompt: `A habitat is the specific place where a particular plant or animal lives, {name}. The habitat of a sea otter is the kelp forests off the Pacific coast. The habitat of a polar bear is the Arctic ice. The habitat of an oak tree is the temperate forest. Each species has specific needs. Food. Shelter. Climate. Water. Its habitat provides these things. Take a species out of its habitat and it usually struggles. Polar bears can't live in deserts. Cactuses can't grow in rainforests.` },
            { word: `adaptation`,
              definition: `A physical feature or behavior that helps an organism survive in its specific habitat. Developed over generations because individuals with the feature survived better.`,
              audioPrompt: `An adaptation is a physical feature or behavior that helps an organism survive in its specific habitat, {name}. Polar bears have thick fur and white coats for Arctic survival. Cactuses have thick waxy stems to store water in deserts. Otters have dense waterproof fur and webbed feet for ocean life. Some birds have long beaks to reach inside flowers. Each adaptation developed over many generations because individuals with that feature survived better. Adaptations are how each species fits its habitat so well.` },
          ],
        },

        {
          id: `l16-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Biotic and Abiotic Factors`,
          paragraphs: [
            `Every ecosystem has two basic kinds of parts. BIOTIC FACTORS are the LIVING things in an ecosystem: plants, animals, fungi, bacteria. ABIOTIC FACTORS are the NON-LIVING things: water, air, soil, temperature, sunlight, rocks. Both kinds matter. An ecosystem needs the right combination of both. Plants need water, sunlight, and good soil (abiotic) along with pollinators and decomposers (biotic). Animals need shelter, food, and water (which involves both kinds of factors).`,
            `Biotic and abiotic factors INTERACT constantly. Rain (abiotic) helps plants grow (biotic). Plants produce oxygen (biotic) that animals breathe. Animals produce waste (biotic) that becomes nutrients in the soil (abiotic). Sunlight (abiotic) drives photosynthesis. Decomposers (biotic) break down dead things (becoming biotic), returning chemicals to soil and air (abiotic). The interactions form a complex WEB. Change one part of an ecosystem and others change in response. Sometimes the changes are small. Sometimes they cascade in unexpected ways.`,
          ],
          image: `/ue-assets/science/l16-s2-biotic-abiotic.webp`,
          imageCaption: `Living parts (biotic) + non-living parts (abiotic) interacting constantly.`,
          vocab: [
            { word: `ecosystem`,
              definition: `A community of living organisms plus the non-living parts of their environment. Includes plants, animals, water, soil, air, and weather, all interacting.`,
              audioPrompt: `An ecosystem is a community of living organisms plus the non-living parts of their environment, {name}. A pond ecosystem includes the fish, frogs, plants, and insects. It also includes the water, mud, sunlight, and temperature. Every ecosystem has multiple species living together, plus the soil, water, weather, and chemicals that support them. Ecosystems can be small (a tide pool, a backyard garden) or huge (the entire Amazon rainforest). All parts interact constantly, and changes to one part affect others.` },
            { word: `biodiversity`,
              definition: `The variety of different species living in an ecosystem. High biodiversity makes ecosystems more resilient and stable. Scientists use it as a measure of ecosystem health.`,
              audioPrompt: `Biodiversity is the variety of different species living in an ecosystem, {name}. A rainforest with thousands of plant species, hundreds of bird species, and countless insects has high biodiversity. A parking lot has almost none. High biodiversity makes ecosystems more resilient and stable. When one species is lost, others can often fill similar roles. Low biodiversity means fewer backup options. When a problem hits, fewer species can absorb the impact. Scientists use biodiversity as one measure of ecosystem health.` },
          ],
        },

        {
          id: `l16-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Major Ecosystem Types`,
          paragraphs: [
            `Earth has many DIFFERENT ECOSYSTEM TYPES, each with its own characteristic plants, animals, and conditions. FORESTS cover huge areas with trees as the dominant plant. Tropical rainforests (like the Amazon) are warm and wet all year, with incredible biodiversity. Temperate forests (like in Virginia, where Caro and Chris have Shadowpeak Retreat) have four seasons. DESERTS get very little rain (less than 25 cm per year). The Joshua Tree desert (where Caro and Chris are building Alien Dog Campground) is a great example. Deserts can be hot or cold, but always dry.`,
            `GRASSLANDS are dominated by grasses with few trees. The African savanna with its lions, zebras, and acacias is the classic example. AQUATIC ecosystems include freshwater (lakes, rivers, ponds) and marine (oceans, coral reefs, kelp forests). MARINE ecosystems cover most of Earth's surface and contain enormous biodiversity. TUNDRAS are cold, treeless areas near the poles where moss and lichens dominate. Each ecosystem type has specific organisms adapted to its conditions. A cactus thrives in desert but would drown in a swamp. A penguin thrives on Antarctic ice but couldn't survive in a tropical forest.`,
          ],
          image: `/ue-assets/science/l16-s3-types.webp`,
          imageCaption: `Forests, deserts, grasslands, aquatic systems, tundras. Each with unique life.`,
          vocab: [
            { word: `biotic factor`,
              definition: `The living parts of an ecosystem: plants, animals, fungi, bacteria, etc. Biotic factors interact with each other and with non-living abiotic factors.`,
              audioPrompt: `A biotic factor is one of the living parts of an ecosystem, {name}. Plants. Animals. Fungi. Bacteria. All living things in the ecosystem count as biotic factors. They interact with each other constantly. Predators hunt prey. Pollinators help plants reproduce. Decomposers break down dead things. Biotic factors also interact with non-living parts of the environment, called abiotic factors. Plants pull water from soil. Animals drink water from rivers. Together, biotic and abiotic factors make up the whole ecosystem.` },
            { word: `biome`,
              definition: `A large region of Earth defined by its climate and the types of organisms that live there. Rainforest, desert, grassland, tundra, and ocean are major biomes.`,
              audioPrompt: `A biome is a large region of Earth defined by its climate and the types of organisms that live there, {name}. Rainforests are hot and wet all year. Deserts are dry. Grasslands have grasses but few trees. Tundras are cold and treeless. Oceans are marine. Each biome contains many ecosystems. For example, the desert biome contains many individual desert ecosystems. Climate determines what biome a region is. And the biome determines what species can survive there.` },
          ],
        },

        {
          id: `l16-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `When Ecosystems Are Disturbed`,
          paragraphs: [
            `Ecosystems can be DAMAGED in many ways. POLLUTION (oil spills, plastic, chemical runoff) hurts species directly. HABITAT DESTRUCTION (cutting down forests, draining wetlands, paving over land) removes places where species can live. CLIMATE CHANGE shifts temperatures and weather patterns faster than species can adapt. INVASIVE SPECIES (organisms moved by humans to places they didn't evolve) can outcompete native species. OVERHUNTING and OVERFISHING reduce populations below sustainable levels.`,
            `When an ecosystem is disturbed, the effects often CASCADE. Remove a top predator, and prey species can overpopulate. The prey species eat too much plant material, which damages the plants. Plant damage can affect soil, which affects water flow, which affects other species, and so on. Cosmo's example: when sea otters were nearly wiped out by hunters in the 1800s, sea urchins (which otters eat) exploded in number. The urchins ate too much kelp. Kelp forests collapsed, taking dozens of other species with them. When otters were protected and recovered, kelp forests recovered too. This is how powerful one species can be. The good news: conservation works. Many ecosystems CAN recover when humans give them a chance.`,
          ],
          image: `/ue-assets/science/l16-s4-disturbance.webp`,
          imageCaption: `Pollution, habitat loss, climate change, invasive species. Real threats. Recovery is possible.`,
          vocab: [
            { word: `abiotic factor`,
              definition: `The non-living parts of an ecosystem: water, air, soil, temperature, sunlight, rocks. Abiotic factors shape what life can live there.`,
              audioPrompt: `An abiotic factor is one of the non-living parts of an ecosystem, {name}. Water. Air. Soil. Temperature. Sunlight. Rocks. None of these are alive, but they shape what living things can survive in an area. Plants need sunlight (abiotic) to photosynthesize. Animals need water (abiotic) to drink. Each habitat has specific abiotic factors that match what the species there have adapted to. Change the abiotic factors significantly (like by polluting the water or shifting the temperature) and the biotic factors get affected too.` },
            { word: `invasive species`,
              definition: `An organism moved by humans to a place it didn't evolve. Without natural predators, invasive species often reproduce rapidly and outcompete native species.`,
              audioPrompt: `An invasive species is an organism moved by humans (intentionally or accidentally) to a place it didn't evolve, {name}. Without natural predators or competition, invasive species often reproduce rapidly and outcompete native species. Burmese pythons were released in Florida and now eat native animals in huge numbers. Water hyacinth (a plant) was brought to new water systems and now clogs them. Invasive species are one of the leading causes of biodiversity loss worldwide. Prevention is far easier than removal once established.` },
          ],
        },

        {
          id: `l16-game`,
          type: `interactive`,
          format: `investigation`,
          guideText: `Investigation time, {name}. Four examples of things that affect ecosystems. For each one, identify whether it's a BIOTIC FACTOR (living), ABIOTIC FACTOR (non-living), or a TYPE OF DISTURBANCE (something disrupting the ecosystem)?\n\nOne is sneakier than it looks.`,
          options: [
            { id: `biotic`,      label: `Biotic Factor`,      color: `#34D399`, description: `Living parts of an ecosystem: plants, animals, fungi, etc.` },
            { id: `abiotic`,     label: `Abiotic Factor`,     color: `#60A5FA`, description: `Non-living parts: water, soil, temperature, sunlight, etc.` },
            { id: `disturbance`, label: `Type of Disturbance`, color: `#F87171`, description: `Something disrupting the ecosystem: pollution, invasive species, climate change, habitat destruction.` },
          ],
          cases: [
            {
              id: `case-1`,
              caseTitle: `Element #1: A river otter`,
              clues: [
                { text: `Lives in a river ecosystem.` },
                { text: `Eats fish, crabs, and other small animals.` },
                { text: `Helps control the population of certain prey species.` },
              ],
              correctAnswer: `biotic`,
              realWorldExample: `River otters are a living part of riverside ecosystems.`,
              explanation: `Living creature, part of the ecosystem. Pure biotic factor. Otters interact with many other biotic factors (prey, predators) and abiotic factors (water, rocks).`,
            },
            {
              id: `case-2`,
              caseTitle: `Element #2: Annual rainfall in a region`,
              clues: [
                { text: `Deserts get less than 25 cm per year.` },
                { text: `Tropical rainforests get over 200 cm per year.` },
                { text: `The amount of rain shapes what species can live in the area.` },
              ],
              correctAnswer: `abiotic`,
              realWorldExample: `Rainfall is one of the most important abiotic factors.`,
              explanation: `Water falling from the sky isn't living, but it has huge influence on what biotic factors can survive in an area. Pure abiotic factor.`,
            },
            {
              id: `case-3`,
              caseTitle: `Element #3: A factory dumping chemicals into a river`,
              clues: [
                { text: `The chemicals kill many fish.` },
                { text: `Birds that eat the fish are also affected.` },
                { text: `Plants growing along the riverbank die.` },
              ],
              correctAnswer: `disturbance`,
              realWorldExample: `Industrial pollution is a major ecosystem disturbance.`,
              explanation: `Pollution disrupting the ecosystem and causing damage that cascades through multiple species. Pure disturbance. The chemicals themselves are abiotic, but the EVENT (factory dumping into a river) is a disturbance.`,
            },
            {
              id: `case-4`,
              caseTitle: `Element #4 — The Tricky One: Burmese pythons in Florida's Everglades`,
              clues: [
                { text: `Pythons are LIVING animals.` },
                { text: `They were imported as pets and released into the wild.` },
                { text: `Now they're eating native species in huge numbers and damaging the Everglades ecosystem.` },
              ],
              correctAnswer: `disturbance`,
              realWorldExample: `Burmese pythons are a famous example of invasive species disturbance.`,
              explanation: `Tricky because pythons ARE living things (which would make them biotic factors). But they're not part of the NATURAL Everglades ecosystem. They were introduced by humans and are now disturbing it. So the most accurate answer is "type of disturbance" (specifically invasive species). Lesson: living things become disturbances when they're moved by humans to places they didn't evolve. The same python in its natural Southeast Asian habitat would just be a biotic factor. Context matters.`,
            },
          ],
        },

        {
          id: `l16-quiz`,
          type: `quiz`,
          guideText: `Let's see what stuck, {name}.`,
          questions: [
            { id: `l16-q1`, format: `multiple-choice`,
              question: `What's the difference between a HABITAT and an ECOSYSTEM?`,
              options: [
                `They're the same`,
                `A habitat is the specific place ONE species lives. An ecosystem is a community of many species PLUS the non-living parts of their environment.`,
                `Habitats are bigger`,
                `Ecosystems are only forests`,
              ],
              correctIndex: 1,
              explanation: `A habitat is one species' home. An ecosystem is bigger — the whole community of life plus the non-living factors. Many habitats exist within each ecosystem.` },

            { id: `l16-q2`, format: `multiple-choice`,
              question: `What's a BIOTIC FACTOR?`,
              options: [
                `Just plants`,
                `Any LIVING part of an ecosystem: plants, animals, fungi, bacteria`,
                `Sunlight`,
                `Rocks`,
              ],
              correctIndex: 1,
              explanation: `Biotic factors are the living parts of an ecosystem. Every plant, animal, fungus, and microbe is a biotic factor. They interact with each other and with the non-living abiotic factors.` },

            { id: `l16-q3`, format: `multiple-choice`,
              question: `What's an ABIOTIC FACTOR?`,
              options: [
                `An animal`,
                `A NON-living part of an ecosystem: water, air, soil, temperature, sunlight, rocks`,
                `A type of plant`,
                `Only sunlight`,
              ],
              correctIndex: 1,
              explanation: `Abiotic factors are the non-living parts of an ecosystem. Water, air, soil, temperature, sunlight, rocks. Even though they're not alive, they shape what life can exist in an area.` },

            { id: `l16-q4`, format: `multiple-choice`,
              question: `Which is an example of an ECOSYSTEM?`,
              options: [
                `Just one tree`,
                `A pond — including the fish, frogs, plants, AND the water, mud, sunlight, and temperature`,
                `A car`,
                `Just the air`,
              ],
              correctIndex: 1,
              explanation: `An ecosystem includes both living and non-living parts working together. A pond ecosystem includes all the species in it plus the water, soil, sunlight, and chemistry that supports them.` },

            { id: `l16-q5`, format: `true-false`,
              question: `True or false: Each species is usually adapted to a SPECIFIC habitat and would struggle if moved somewhere different.`,
              correctAnswer: true,
              explanation: `True. Polar bears thrive on Arctic ice but would die in a desert. Cactuses thrive in deserts but would drown in a swamp. Each species evolved with specific habitat conditions. Moving species out of their habitats often causes problems for them — and sometimes for the new ecosystem too.` },

            { id: `l16-q6`, format: `multiple-choice`,
              question: `What are some MAJOR types of ecosystems?`,
              options: [
                `Only forests`,
                `Forests (tropical, temperate), deserts, grasslands, aquatic (freshwater, marine), and tundras`,
                `Just oceans`,
                `All ecosystems are the same`,
              ],
              correctIndex: 1,
              explanation: `Earth has many ecosystem types. Forests, deserts, grasslands, aquatic, and tundras are major categories. Each has characteristic species adapted to specific climate, water, and soil conditions.` },

            { id: `l16-q7`, format: `multiple-choice`,
              question: `What can happen when one species is removed from an ecosystem?`,
              options: [
                `Nothing`,
                `Cascading effects can disrupt other species, sometimes the whole ecosystem. Like when sea otters were hunted, kelp forests collapsed.`,
                `Only that species changes`,
                `It's always a positive change`,
              ],
              correctIndex: 1,
              explanation: `Ecosystems are webs. Remove one species (especially a "keystone" species), and effects cascade. Sea otter loss → urchin overpopulation → kelp forest collapse → dozens of other species affected. This is why protecting individual species matters for whole ecosystems.` },

            { id: `l16-q8`, format: `multiple-choice`,
              question: `What's one TYPE of DISTURBANCE that hurts ecosystems?`,
              options: [
                `Normal weather`,
                `Pollution, habitat destruction, climate change, invasive species, or overhunting — any of these can damage ecosystems`,
                `Plants existing`,
                `Animals being alive`,
              ],
              correctIndex: 1,
              explanation: `Major disturbances include pollution, habitat destruction, climate change, invasive species, and overhunting. Most are caused by humans. Many ecosystems CAN recover when these are reduced or removed. Conservation works.` },
          ],
        },

        {
          id: `l16-reflection`,
          type: `reflection`,
          guideText: `Before we wrap, {name}, pick ONE question and actually answer it. Your response gets saved, and I'll remember it next time we talk.`,
          prompts: [
            { id: `r1`, text: `What ecosystem do YOU live in? Think about your climate, the species around you, and the non-living features (mountains, rivers, etc.).` },
            { id: `r2`, text: `Pick an ecosystem you'd love to visit (rainforest, desert, kelp forest, tundra, etc.). What's one species you'd want to see? Why does it fit that ecosystem?` },
            { id: `r3`, text: `Many of Coreverse's families live in California (lots of unique ecosystems!). What's one local ecosystem worth protecting?` },
            { id: `r4`, text: `If you could undo ONE human-caused disturbance to an ecosystem, what would you choose? Why?` },
          ],
        },

        {
          id: `l16-realworld`,
          type: `real-world`,
          guideText: `Understanding ecosystems is crucial for protecting Earth's biodiversity and resources. Conservation biologists study how ecosystems work and how to keep them healthy. Park rangers protect ecosystems. Climate scientists monitor changes. Farmers learn to work with local ecosystems instead of against them. Many companies are starting to think about their ecological impact. Every person can help, even with small choices like reducing plastic, supporting protected lands, or learning about the species in their own neighborhood.`,
          familyAdventure: `Family Ecosystem Map. As a family, pick ONE ecosystem near you (a local park, a riverside, a backyard, a beach). Spend 30 minutes there observing. Identify FIVE biotic factors (living things) and FIVE abiotic factors (non-living parts). Talk about how they interact. This is the same kind of work ecologists do in the field. The deeper you look, the more you'll find.`,
          creativePrompt: {
            intro: `Imagine you're a conservation biologist proposing to protect a specific ecosystem. Write your proposal.`,
            floor: `Write at least 5 sentences. Name the ecosystem. Describe what makes it special. Explain why it needs protection.`,
            stretch: `Write 8 to 10 sentences. Include biotic factors (key species), abiotic factors (climate, geography), threats it faces, and your specific proposal.`,
            open: `Write as much as you want. Build a full conservation proposal. Cover the ecosystem in detail, its species, the cascading risks if it's lost, the disturbances threatening it, and a specific plan for protection. Include how local people could benefit.`,
            frames: [
              `I propose protecting the ___ ecosystem.`,
              `This ecosystem is home to ___ (key species).`,
              `It faces threats from ___.`,
              `If we lose it, the cascading effects would include ___.`,
              `My plan is to ___.`,
            ],
          },
        },

        {
          id: `l16-celebration`,
          type: `celebration`,
          message: `Great work, {name}. You can now define habitats and ecosystems, name biotic and abiotic factors, recognize major ecosystem types, and understand how disturbance causes cascading effects. Next lesson: we trace how ENERGY flows through ecosystems. FOOD CHAINS, from the Sun, through plants, into animals, and back to the soil. See you there. — Cosmo.`,
          badge: `ecosystem-explorer`,
          badgeName: `Ecosystem Explorer`,
          xpEarned: 75,
        },
      ],
    },
  ],
};

export default SCIENCE_UE_L16;

// ─── Dev asset check ──────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const screens = SCIENCE_UE_L16.lessons[0].screens;
  const mags = screens.filter(s => s.type === 'magazine').length;
  const game = screens.find(s => s.type === 'interactive')?.cases?.length ?? 0;
  const quiz = screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  const refl = screens.find(s => s.type === 'reflection')?.prompts?.length ?? 0;
  const totalVocab = screens.filter(s => s.type === 'magazine').reduce((sum, s) => sum + (s.vocab?.length || 0), 0);
  console.log(`[LESSON-SCIENCE-UE-L16 v1] Loaded with ${mags} magazine sections, ${totalVocab} vocab terms, ${game} game cases, ${quiz} quiz Qs, ${refl} reflection prompts`);
}
