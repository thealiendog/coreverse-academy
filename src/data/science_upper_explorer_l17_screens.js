// ─────────────────────────────────────────────────────────────────────────────
// SCIENCE UE  |  L17 — Food Chains: Who Eats What
// Age band : upper_explorers (9–10)   Guide: cosmo
// Standards: NGSS 5-LS2-1, 5-PS3-1 — Matter and energy move through
//            ecosystems; energy in food traces back to the Sun
// CALIBRATED: UE spec v1.1 — real domain terms, em-dashes sparing
// SCOPE: 4 concepts — energy flow from Sun to producers to consumers,
//        food chains vs food webs, decomposers complete the cycle,
//        why top of the chain has fewer animals
// VERSION: v1
// ─────────────────────────────────────────────────────────────────────────────

const SCIENCE_UE_L17 = {
  ageBand: `upper_explorers`,
  subjectId: `science`,
  guide: `cosmo`,

  lessons: [
    {
      id: `science-9-10-17`,
      title: `Food Chains: Who Eats What`,
      duration: 18,
      xpReward: 75,
      badge: `food-chain-tracker`,
      badgeName: `Food Chain Tracker`,

      screens: [
        {
          id: `l17-welcome`,
          type: `welcome`,
          guideText: `Hey {name}, Cosmo here. Last lesson we covered ecosystems. Today we trace how ENERGY moves THROUGH an ecosystem from one living thing to the next. Sun shines on a plant. A bug eats the plant. A bird eats the bug. A bigger bird eats the smaller bird. When the big bird dies, decomposers break it down and return nutrients to the soil. That's a FOOD CHAIN. Every meal you've ever eaten is part of one. Let's go.`,
          headline: `Food Chains`,
          subtitle: `How energy flows from the Sun, through plants, into animals, and back to the earth`,
          visual: `/ue-assets/science/l17-welcome.webp`,
        },

        {
          id: `l17-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Producers: The Foundation`,
          paragraphs: [
            `Every food chain starts with PRODUCERS, which are organisms that make their own food. On land and in shallow water, producers are mostly PLANTS using photosynthesis (which you learned in L04) to convert sunlight, water, and carbon dioxide into glucose (chemical energy). In oceans, the main producers are tiny floating organisms called PHYTOPLANKTON, plus seaweeds and algae. Producers capture energy directly from the Sun and convert it into a form that other living things can use by eating them.`,
            `Without producers, no other life on Earth would exist. They're the foundation of every food chain. Think of producers as the SOLAR PANELS of nature. They take energy that would otherwise just bounce off into space and trap it in food molecules. All the food in your kitchen, all the food in any kitchen on Earth, originally came from producers. Even meat comes from animals that ate plants, which got their energy from the Sun. Trace any food back far enough and you reach producers.`,
          ],
          image: `/ue-assets/science/l17-s1-producers.webp`,
          imageCaption: `Producers turn sunlight into food. Plants, phytoplankton, algae. The foundation.`,
          vocab: [
            { word: `producer`,
              definition: `An organism that makes its own food, usually by photosynthesis. Plants, algae, and phytoplankton are producers. They're the foundation of every food chain.`,
              audioPrompt: `A producer is an organism that makes its own food, {name}. Usually through photosynthesis. Plants are the main producers on land. In oceans, the main producers are phytoplankton and algae. Producers capture energy directly from the Sun and convert it into chemical energy stored in their bodies. Without producers, no other life on Earth would exist. They're the solar panels of nature. Every food chain starts with a producer. Every meal traces back to one, even meat. The animal that became the meat ate plants.` },
            { word: `phytoplankton`,
              definition: `Microscopic organisms floating near the surface of oceans and other bodies of water that use photosynthesis to make food. They produce roughly half of Earth's oxygen and are the foundation of most aquatic food chains.`,
              audioPrompt: `Phytoplankton are microscopic organisms floating near the surface of oceans, lakes, and rivers that use photosynthesis to make their own food, {name}. They're too small to see with the naked eye, but they produce roughly half of all the oxygen on Earth. They're the foundation of almost all aquatic food chains. Tiny animals called zooplankton eat them. Fish eat the zooplankton. Larger animals eat those fish. Even whales depend on food chains that start with phytoplankton. They're among the most important life forms on Earth.` },
          ],
        },

        {
          id: `l17-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Consumers: Who Eats Whom`,
          paragraphs: [
            `CONSUMERS are organisms that eat OTHER organisms to get energy. There are different KINDS of consumers based on what they eat. PRIMARY CONSUMERS (also called HERBIVORES) eat producers (plants). Deer, cows, rabbits, and grasshoppers are primary consumers. SECONDARY CONSUMERS eat primary consumers. Foxes eating rabbits. Birds eating grasshoppers. TERTIARY CONSUMERS eat secondary consumers. A hawk eating a snake that ate a mouse that ate seeds. Each level is a different position in the food chain.`,
            `Each step UP the food chain is a TROPHIC LEVEL. Producers are the first trophic level. Primary consumers are the second. And so on. Animals that eat both plants and animals (like humans, bears, raccoons) are OMNIVORES. Animals that eat only meat are CARNIVORES. Animals that eat only plants are HERBIVORES. Otters are mostly carnivores — we eat fish, crabs, and shellfish. The path of energy through these levels is what creates a food chain.`,
          ],
          image: `/ue-assets/science/l17-s2-consumers.webp`,
          imageCaption: `Primary consumers eat producers. Secondary eat primary. Tertiary eat secondary. Energy flows up.`,
          vocab: [
            { word: `consumer`,
              definition: `An organism that eats other organisms to get energy. Includes herbivores (eat plants), carnivores (eat meat), and omnivores (eat both).`,
              audioPrompt: `A consumer is an organism that eats other organisms to get energy, {name}. Unlike producers, consumers can't make their own food. So they have to find food by eating something else. Primary consumers eat producers (plants). Deer, cows, rabbits, grasshoppers. Secondary consumers eat primary consumers. Foxes eating rabbits. Tertiary consumers eat secondary consumers. A hawk eating a snake that ate a mouse. Each step up is a different trophic level. Herbivores eat plants. Carnivores eat meat. Omnivores eat both.` },
            { word: `trophic level`,
              definition: `A position in a food chain. Producers are the first trophic level, primary consumers are the second, and so on. About 90% of energy is lost at each level up.`,
              audioPrompt: `A trophic level is a position in a food chain, {name}. Producers are the first trophic level. Primary consumers (herbivores that eat producers) are the second. Secondary consumers (which eat primary consumers) are the third. Tertiary consumers are the fourth. Each step up the trophic levels has less energy available. Roughly 90 percent of energy is lost at each step. This is why higher trophic levels have fewer organisms. A forest can support millions of plants but only a few large predators.` },
          ],
        },

        {
          id: `l17-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Decomposers Complete the Cycle`,
          paragraphs: [
            `Every food chain has a third critical group: DECOMPOSERS. These are organisms that break down DEAD things (and waste) and return nutrients to the soil. Without decomposers, dead animals and plants would pile up. Earth would run out of nutrients in the soil within a few seasons. Decomposers are nature's recycling team. The main decomposers are FUNGI (mushrooms, mold) and BACTERIA. Some insects like dung beetles and certain worms also play big roles.`,
            `When a leaf falls, decomposers slowly break it down into smaller and smaller pieces, eventually into chemicals that go back into the soil. When an animal dies, scavengers like vultures eat what they can, then bacteria and fungi finish the job, returning the animal's nutrients to the ground. Plants then pull those nutrients UP through their roots and use them to grow. This means the atoms in your body have probably been part of countless other organisms before they came to be part of you. Earth keeps recycling the same atoms in a kind of grand chemical dance. Decomposers are what keeps it going.`,
          ],
          image: `/ue-assets/science/l17-s3-decomposers.webp`,
          imageCaption: `Fungi, bacteria, scavengers. Nature's recyclers. The cycle continues.`,
          vocab: [
            { word: `decomposer`,
              definition: `An organism that breaks down dead plants and animals and returns nutrients to the soil. Mainly fungi and bacteria. Critical for recycling matter through ecosystems.`,
              audioPrompt: `A decomposer is an organism that breaks down dead plants and animals and returns nutrients to the soil, {name}. The main decomposers are fungi (mushrooms, molds) and bacteria. Some insects like dung beetles play roles too. Without decomposers, dead organisms would pile up. The nutrients in their bodies would stay locked up. Plants couldn't get them. Soil would lose what makes it fertile. Decomposers are nature's recyclers. They make sure the same atoms keep being used by new life over and over. Every ecosystem depends on them.` },
            { word: `nutrient cycle`,
              definition: `The process by which nutrients (like carbon and nitrogen) move through an ecosystem and get reused. Decomposers return nutrients to soil, plants absorb them, animals eat plants, and the cycle continues.`,
              audioPrompt: `A nutrient cycle is the process by which nutrients like carbon and nitrogen move through an ecosystem and get reused, {name}. When organisms die, decomposers break them down and return their nutrients to the soil. Plants absorb those nutrients through their roots and grow. Animals eat the plants. When those animals die, decomposers break them down again. The same atoms cycle through living things over and over. The carbon in your body might have been part of a dinosaur. Nutrient cycles keep ecosystems running without running out of materials.` },
          ],
        },

        {
          id: `l17-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Why Top Predators Are Rare`,
          paragraphs: [
            `Here's something amazing: ENERGY IS LOST at each step UP the food chain. A field of grass might support a few rabbits. Those rabbits would only feed one or two foxes for a long time. Those foxes barely feed one cougar. Roughly 90% of the energy at each level is used by the organism for its own life (breathing, moving, staying warm) or lost as heat. Only about 10% gets passed up to the next level.`,
            `This is why TOP PREDATORS are usually RARE. There can't be many of them, because there's not enough energy to support large numbers. A forest might have millions of plants, thousands of plant-eating insects, hundreds of birds, and only a few hawks. This is also why food webs are FRAGILE. Damage to a low level (like producers) cascades into the levels above. Damage to a top predator can cause prey populations to explode and ecosystems to lose balance. Every level matters. Every level depends on every other level. And the Sun is still the engine for all of it, just slightly less efficient at each step.`,
          ],
          image: `/ue-assets/science/l17-s4-pyramid.webp`,
          imageCaption: `Energy pyramid. Each level loses about 90% to the level above. That's why top predators are rare.`,
          vocab: [
            { word: `food chain`,
              definition: `The path of energy through an ecosystem, from producers to consumers to decomposers. Most ecosystems have many overlapping food chains, called a food web.`,
              audioPrompt: `A food chain is the path of energy through an ecosystem, {name}. Producers at the bottom. Primary consumers next. Then secondary and tertiary consumers. Finally decomposers, which return everything to the soil. Real ecosystems usually have many food chains that overlap, called a food web. A hawk might eat several different prey species, and each of those prey species might eat several producers. Food chains and webs show how every species in an ecosystem is connected to every other. Damage to one link affects many others.` },
            { word: `food web`,
              definition: `A map of all the overlapping food chains in an ecosystem. Most predators eat several kinds of prey, so the chains connect into a web showing how species are interconnected.`,
              audioPrompt: `A food web is a map of all the overlapping food chains in an ecosystem, {name}. Most ecosystems don't have a single straight chain. A hawk might eat mice, snakes, AND small birds. Each of those prey species eats different things too. All the chains connect and overlap into a web. This interconnectedness means ecosystems have some resilience. If one prey species declines, a predator can eat more of another. But food webs have limits. Lose too many species and the web collapses.` },
          ],
        },

        {
          id: `l17-game`,
          type: `interactive`,
          format: `investigation`,
          guideText: `Investigation time, {name}. Four roles in food chains. For each one, identify which role this organism plays: PRODUCER, CONSUMER, or DECOMPOSER?\n\nOne is sneakier than it looks.`,
          options: [
            { id: `producer`,    label: `Producer`,    color: `#34D399`, description: `Makes its own food from sunlight (or chemicals). Plants, algae, phytoplankton.` },
            { id: `consumer`,    label: `Consumer`,    color: `#FBBF24`, description: `Eats other organisms to get energy. Herbivores, carnivores, omnivores.` },
            { id: `decomposer`,  label: `Decomposer`,  color: `#A78BFA`, description: `Breaks down dead things and returns nutrients to soil. Fungi, bacteria, some insects.` },
          ],
          cases: [
            {
              id: `case-1`,
              caseTitle: `Organism #1: A redwood tree`,
              clues: [
                { text: `Stands 300 feet tall in a coastal California forest.` },
                { text: `Captures sunlight through its needles.` },
                { text: `Converts CO2 and water into glucose using photosynthesis.` },
              ],
              correctAnswer: `producer`,
              realWorldExample: `Redwoods are some of the most impressive producers on Earth.`,
              explanation: `Photosynthesis. Captures sunlight. Makes its own food. Pure producer. Redwoods are the foundation of the redwood forest food chain. Every animal in the forest depends, directly or indirectly, on producers like these.`,
            },
            {
              id: `case-2`,
              caseTitle: `Organism #2: A peregrine falcon`,
              clues: [
                { text: `One of the fastest birds in the world.` },
                { text: `Hunts smaller birds in mid-air.` },
                { text: `Eats no plants at all.` },
              ],
              correctAnswer: `consumer`,
              realWorldExample: `Peregrine falcons are top predators in many bird-rich ecosystems.`,
              explanation: `Hunts and eats other animals. Doesn't make its own food. Pure consumer. Specifically a tertiary consumer (or higher), since the birds it hunts are themselves consumers.`,
            },
            {
              id: `case-3`,
              caseTitle: `Organism #3: A turkey tail mushroom`,
              clues: [
                { text: `Grows on dead and decaying logs in forests.` },
                { text: `Slowly breaks down the wood it grows on.` },
                { text: `Releases nutrients from the dead wood back into the soil.` },
              ],
              correctAnswer: `decomposer`,
              realWorldExample: `Turkey tail mushrooms are common decomposers in temperate forests.`,
              explanation: `Breaks down dead material. Returns nutrients to soil. Pure decomposer. Fungi like this are some of nature's most important recyclers. Without them, dead logs would never break down and the forest would slowly run out of fertile soil.`,
            },
            {
              id: `case-4`,
              caseTitle: `Organism #4 — The Tricky One: A Venus flytrap`,
              clues: [
                { text: `It's a plant with green leaves.` },
                { text: `It does photosynthesis like other plants.` },
                { text: `It ALSO traps and digests insects for extra nutrients.` },
              ],
              correctAnswer: `producer`,
              realWorldExample: `Carnivorous plants are unusual, but they're still primarily plants.`,
              explanation: `Tricky because the plant EATS insects (which sounds consumer-like). But it still uses photosynthesis to make most of its food from sunlight, water, and CO2. The bug-eating is just to get a few extra nutrients (especially nitrogen) that are hard to find in the swampy soils where Venus flytraps grow. So it's primarily a PRODUCER. Lesson: a few species blur the lines. Look at what an organism PRIMARILY does. A flytrap is mostly a producer. A normal plant just happens to supplement with bugs.`,
            },
          ],
        },

        {
          id: `l17-quiz`,
          type: `quiz`,
          guideText: `Let's see what stuck, {name}.`,
          questions: [
            { id: `l17-q1`, format: `multiple-choice`,
              question: `What's a PRODUCER?`,
              options: [
                `A film maker`,
                `An organism that makes its own food — plants, algae, and phytoplankton. The foundation of every food chain.`,
                `A type of animal`,
                `A bacterium that eats things`,
              ],
              correctIndex: 1,
              explanation: `Producers make their own food. Most use photosynthesis. Plants are the main producers on land. Phytoplankton and algae are the main producers in oceans. Without producers, no other life would exist.` },

            { id: `l17-q2`, format: `multiple-choice`,
              question: `What's a CONSUMER?`,
              options: [
                `Someone who shops`,
                `An organism that eats other organisms to get energy — herbivores, carnivores, omnivores`,
                `Just a plant`,
                `A type of fungus`,
              ],
              correctIndex: 1,
              explanation: `Consumers eat other organisms to get energy. Primary consumers eat producers. Secondary consumers eat primary consumers. And so on up the food chain.` },

            { id: `l17-q3`, format: `multiple-choice`,
              question: `What's a DECOMPOSER?`,
              options: [
                `A predator`,
                `An organism that breaks down dead things and returns nutrients to soil — mainly fungi and bacteria`,
                `A baby producer`,
                `A type of plant`,
              ],
              correctIndex: 1,
              explanation: `Decomposers are nature's recyclers. They break down dead organisms and waste, returning nutrients to soil. Fungi and bacteria are the main decomposers. Without them, dead organisms would pile up forever and ecosystems would run out of nutrients.` },

            { id: `l17-q4`, format: `multiple-choice`,
              question: `Where does almost all the energy in EVERY food chain originally come from?`,
              options: [
                `The wind`,
                `The Sun — producers capture sunlight and that energy gets passed up through consumers`,
                `The ground`,
                `Each animal makes its own`,
              ],
              correctIndex: 1,
              explanation: `Sun energy gets captured by producers through photosynthesis. Then it passes to primary consumers (which eat producers), then secondary consumers, and so on. The Sun is the original power source for almost every food chain on Earth.` },

            { id: `l17-q5`, format: `true-false`,
              question: `True or false: Only about 10% of the energy at each level of a food chain gets passed up to the next level.`,
              correctAnswer: true,
              explanation: `True. Roughly 90% of energy is used by the organism for its own life (movement, body warmth, etc.) or lost as heat. Only about 10% gets passed up. This is why food chains usually only have 4 or 5 levels, and why top predators are rare.` },

            { id: `l17-q6`, format: `multiple-choice`,
              question: `Why are TOP PREDATORS like LIONS and HAWKS usually RARE?`,
              options: [
                `They prefer being alone`,
                `Because so much energy is lost at each step up the food chain, there isn't enough energy to support large numbers of top predators`,
                `They're hard to count`,
                `Random luck`,
              ],
              correctIndex: 1,
              explanation: `Each level up the food chain has less energy available. A forest might have millions of plants, thousands of insects, hundreds of birds, and only a few hawks. Top predators are limited by how much energy is left after all the levels below.` },

            { id: `l17-q7`, format: `multiple-choice`,
              question: `What's a FOOD WEB?`,
              options: [
                `A website`,
                `Many overlapping food chains in an ecosystem — most predators eat several kinds of prey, so chains connect into a web`,
                `A type of spiderweb`,
                `Just one chain`,
              ],
              correctIndex: 1,
              explanation: `Real ecosystems don't have just one straight food chain. A hawk might eat mice, snakes, and small birds. Each of those eats different things. All these chains overlap, forming a food web. This is what most ecosystems actually look like.` },

            { id: `l17-q8`, format: `multiple-choice`,
              question: `Why are DECOMPOSERS critical for ecosystems?`,
              options: [
                `They're not important`,
                `Without them, dead organisms would pile up forever and soil would run out of nutrients. Decomposers recycle nutrients back to the soil so plants can keep growing.`,
                `They're food for predators`,
                `Only humans need them`,
              ],
              correctIndex: 1,
              explanation: `Decomposers are critical recyclers. They break down dead organisms and waste, returning the chemicals to the soil. Plants pull those chemicals up through their roots and grow. Without decomposers, the cycle stops and ecosystems collapse.` },
          ],
        },

        {
          id: `l17-reflection`,
          type: `reflection`,
          guideText: `Before we wrap, {name}, pick ONE question and actually answer it. Your response gets saved, and I'll remember it next time we talk.`,
          prompts: [
            { id: `r1`, text: `Think about your last meal. Trace it back. What producer was the starting point? How many trophic levels did the food go through?` },
            { id: `r2`, text: `Decomposers like mushrooms and bacteria are unglamorous but essential. Why do you think people often forget about their importance?` },
            { id: `r3`, text: `If 90% of energy is lost at each step up the food chain, what does that suggest about whether it's "more efficient" to eat plants directly vs. eating animals that ate plants?` },
            { id: `r4`, text: `If a key producer in an ecosystem (like kelp in a kelp forest) disappeared, what do you think would happen to the rest of the food chain?` },
          ],
        },

        {
          id: `l17-realworld`,
          type: `real-world`,
          guideText: `Food chains explain a lot about agriculture, conservation, and even climate change. Farmers use food chain knowledge to control pests with natural predators instead of chemicals. Fisheries scientists track ocean food chains to know how much fishing oceans can sustain. Conservation biologists protect "keystone species" that ecosystems depend on. The fact that energy is lost at each level is also why eating plants directly (instead of animals that ate plants) requires less land and resources, which connects to discussions about climate and food sustainability.`,
          familyAdventure: `Family Food Chain Map. Pick an ecosystem near you (your backyard, a park, a tide pool, even an aquarium). Identify the food chains you can spot: which species are producers, which are primary consumers, which are predators, which are decomposers. Try to draw a simple food web showing how 5-6 species connect. You'll see how interconnected the natural world really is.`,
          creativePrompt: {
            intro: `Imagine you're a documentary maker filming the food chain of a specific ecosystem. Write your narration for one scene.`,
            floor: `Write at least 5 sentences. Pick an ecosystem. Describe one producer, one primary consumer eating it, and one secondary consumer hunting the primary consumer.`,
            stretch: `Write 8 to 10 sentences. Include producers, multiple levels of consumers, decomposers, and how they all fit together. Make it dramatic and clear like a real nature documentary.`,
            open: `Write as much as you want. Build a full narration. Use vivid language. Include the role of the Sun, the energy flow up the chain, the cycle back to the soil through decomposers, and what would happen if any link broke.`,
            frames: [
              `In this ecosystem, life begins with the ___.`,
              `Watch as the ___ feeds on the ___.`,
              `Above them, the ___ hunts.`,
              `When everything dies, ___.`,
              `The cycle continues, all powered by ___.`,
            ],
          },
        },

        {
          id: `l17-celebration`,
          type: `celebration`,
          message: `Great work, {name}. You can now describe producers, consumers (with trophic levels), and decomposers. You understand how energy flows through ecosystems, why top predators are rare, and why every level matters. Next lesson: how humans use science creatively to SOLVE PROBLEMS. ENGINEERING. See you there. — Cosmo.`,
          badge: `food-chain-tracker`,
          badgeName: `Food Chain Tracker`,
          xpEarned: 75,
        },
      ],
    },
  ],
};

export default SCIENCE_UE_L17;

// ─── Dev asset check ──────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const screens = SCIENCE_UE_L17.lessons[0].screens;
  const mags = screens.filter(s => s.type === 'magazine').length;
  const game = screens.find(s => s.type === 'interactive')?.cases?.length ?? 0;
  const quiz = screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  const refl = screens.find(s => s.type === 'reflection')?.prompts?.length ?? 0;
  const totalVocab = screens.filter(s => s.type === 'magazine').reduce((sum, s) => sum + (s.vocab?.length || 0), 0);
  console.log(`[LESSON-SCIENCE-UE-L17 v1] Loaded with ${mags} magazine sections, ${totalVocab} vocab terms, ${game} game cases, ${quiz} quiz Qs, ${refl} reflection prompts`);
}
