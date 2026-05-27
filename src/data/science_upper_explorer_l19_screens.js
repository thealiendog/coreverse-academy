// ─────────────────────────────────────────────────────────────────────────────
// SCIENCE UE  |  L19 — Life Cycles: How Living Things Grow and Change
// Age band : upper_explorers (9–10)   Guide: cosmo
// Standards: NGSS 3-LS1-1 — Organisms have unique and diverse life cycles
//            but all have a common pattern of birth, growth, reproduction,
//            and death
// CALIBRATED: UE spec v1.1 — real domain terms, em-dashes sparing
// SCOPE: 4 concepts — universal pattern of birth/growth/reproduce/die,
//        plant life cycles, animal life cycles (including metamorphosis),
//        why life cycles matter for ecosystems and humans
// VERSION: v1
// ─────────────────────────────────────────────────────────────────────────────

const SCIENCE_UE_L19 = {
  ageBand: `upper_explorers`,
  subjectId: `science`,
  guide: `cosmo`,

  lessons: [
    {
      id: `science-9-10-19`,
      title: `Life Cycles: How Living Things Grow and Change`,
      duration: 18,
      xpReward: 75,
      badge: `life-cycle-tracker`,
      badgeName: `Life Cycle Tracker`,

      screens: [
        {
          id: `l19-welcome`,
          type: `welcome`,
          guideText: `Hey {name}, Cosmo here. Every single living thing on Earth follows a basic pattern. It's born. It grows. It eventually reproduces. It dies. Then the cycle continues with the next generation. We call this pattern a LIFE CYCLE. But the SPECIFIC details vary wildly. A redwood tree's life cycle takes 1000+ years. A bacterium's takes 20 minutes. A butterfly TRANSFORMS through completely different body shapes. Today we look at the patterns life follows. Let's go.`,
          headline: `Life Cycles`,
          subtitle: `Every living thing goes through stages, from tiny start to grown-up`,
          visual: `/ue-assets/science/l19-welcome.webp`,
        },

        {
          id: `l19-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `The Universal Pattern`,
          paragraphs: [
            `Every living thing follows the same basic LIFE CYCLE pattern. BIRTH (or hatching, or seed sprouting, or cell dividing). GROWTH and DEVELOPMENT (getting bigger, getting stronger, becoming more like the adult version). REPRODUCTION (most species can produce offspring at some point). DEATH. Then the offspring continue the cycle. This is true for bacteria, oak trees, otters, butterflies, humans, and everything else alive on Earth. It's one of biology's deepest patterns.`,
            `The DURATION of life cycles varies enormously. A bacterium can complete its whole life cycle in 20 minutes. A mayfly might live for just one day as an adult. A human can live for over 100 years. A bristlecone pine tree can live over 5,000 years. Same basic pattern, wildly different time scales. Some organisms can also REPRODUCE many times in their life (like otters, who have several pups over their lifetime). Others reproduce only once and then die (like certain salmon, which swim upstream to lay eggs, then die almost immediately after).`,
          ],
          image: `/ue-assets/science/l19-s1-universal.webp`,
          imageCaption: `Birth, growth, reproduction, death. Every living thing follows this basic pattern.`,
          vocab: [
            { word: `life cycle`,
              definition: `The series of stages every living thing goes through: birth, growth, reproduction, and death. The pattern is universal but the details vary by species.`,
              audioPrompt: `A life cycle is the series of stages every living thing goes through, {name}. Birth or hatching or sprouting at the start. Growth and development. Reproduction at some point. Then death. The offspring continue the cycle. Every living thing on Earth follows this basic pattern. Bacteria. Oak trees. Otters. Humans. The duration varies wildly. A bacterium can complete its cycle in 20 minutes. A bristlecone pine tree can live over 5000 years. Same basic pattern, completely different time scales. Some species reproduce many times. Others reproduce once and die.` },
            { word: `offspring`,
              definition: `The new individuals produced when a living thing reproduces. Offspring carry on the life cycle of their species by growing, reproducing, and eventually producing their own offspring.`,
              audioPrompt: `Offspring are the new individuals produced when a living thing reproduces, {name}. A human baby is an offspring. A puppy is an offspring. A seedling that sprouted from a seed is an offspring. Offspring carry on the life cycle of their species. They grow, reproduce, and eventually die, producing their own offspring. Some species have many offspring at once. A fish might lay thousands of eggs. Others have very few, like otters, which usually have one pup at a time. Each strategy works in different environments.` },
          ],
        },

        {
          id: `l19-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Plant Life Cycles`,
          paragraphs: [
            `PLANT LIFE CYCLES usually start with a SEED. The seed contains a tiny embryonic plant plus some stored food. When conditions are right (enough water, warmth, right time of year), the seed GERMINATES, meaning it starts to grow. Roots push down into the soil. A stem and leaves push up toward the light. The young plant is called a SEEDLING. Over time, it grows into a MATURE PLANT (an adult).`,
            `Once mature, most plants reproduce. FLOWERING PLANTS produce flowers that attract pollinators (bees, butterflies, birds). Pollination leads to seed formation, often inside fruits. The fruits and seeds spread by various means: animals eat them and carry seeds in their stomachs, wind blows light seeds far away, water carries them downstream, or some seeds just fall close to the parent. When a seed lands in a good spot, the cycle starts again. Trees follow this pattern over decades. Annual flowers (like sunflowers) complete the whole cycle in just one growing season. CONIFERS (pine, spruce, redwood) make cones instead of flowers but follow a similar pattern.`,
          ],
          image: `/ue-assets/science/l19-s2-plant-cycle.webp`,
          imageCaption: `Seed → seedling → mature plant → flowers/cones → seeds → repeat.`,
          vocab: [
            { word: `germinate`,
              definition: `When a seed starts to grow into a young plant. Roots push down, stem and leaves push up. Triggered by warmth, water, and right conditions.`,
              audioPrompt: `To germinate means a seed starts to grow into a young plant, {name}. Inside every seed is a tiny embryonic plant plus some stored food. When conditions are right, the seed germinates. Roots push down into the soil. A stem and leaves push up toward the light. The young plant uses the stored food in the seed until its leaves can do enough photosynthesis to feed it. Different seeds need different conditions to germinate. Some need to pass through an animal's stomach. Some just need water and warmth.` },
            { word: `seedling`,
              definition: `A young plant that has just germinated from a seed. The earliest and most vulnerable growth stage of a plant's life.`,
              audioPrompt: `A seedling is a young plant that has just germinated from a seed, {name}. It's a plant in its earliest growth stage. Right after germination, the seedling has small seed leaves called cotyledons that use food stored in the seed. As it grows more true leaves, it can do more photosynthesis and becomes less dependent on stored food. Seedlings are the most vulnerable stage of a plant's life. Too little water, too much shade, or cold temperatures can kill a seedling that would eventually become a large tree.` },
          ],
        },

        {
          id: `l19-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Animal Life Cycles and Metamorphosis`,
          paragraphs: [
            `ANIMALS have a huge variety of life cycle patterns. SOME ANIMALS grow gradually from baby to adult, just getting bigger and more developed over time. Humans, otters, dogs, elephants, and most mammals follow this pattern. Baby otters look like small otters. They grow into bigger otters. The basic body plan stays the same throughout life. Most birds and reptiles also follow this gradual pattern.`,
            `OTHER ANIMALS go through DRAMATIC TRANSFORMATIONS called METAMORPHOSIS. Butterflies are the classic example. They start as an EGG. Hatch into a CATERPILLAR (which only eats and grows). The caterpillar forms a CHRYSALIS (an enclosed structure). Inside the chrysalis, the body is completely RESTRUCTURED. It emerges as a BUTTERFLY (which is shaped totally different and can fly). The caterpillar and butterfly are the SAME ANIMAL, just at different life stages. Frogs do something similar: egg → tadpole (lives in water, has a tail) → frog (lives on land, has legs). Many insects undergo metamorphosis. It's one of the most amazing developmental processes in biology.`,
          ],
          image: `/ue-assets/science/l19-s3-metamorphosis.webp`,
          imageCaption: `Some animals grow gradually. Others transform completely. Both are valid strategies.`,
          vocab: [
            { word: `metamorphosis`,
              definition: `When an animal goes through dramatic body changes during its life cycle, like a caterpillar becoming a butterfly or a tadpole becoming a frog.`,
              audioPrompt: `Metamorphosis is when an animal goes through dramatic body changes during its life cycle, {name}. The caterpillar and the butterfly are the same animal, just at different stages. Butterflies start as eggs, hatch into caterpillars that mostly eat and grow, then form a chrysalis where their bodies are completely restructured, and emerge as adult butterflies. Frogs do something similar. Egg, then tadpole that swims, then adult frog that hops on land. Metamorphosis is one of the most amazing developmental processes in biology. Many insects use it.` },
            { word: `larva`,
              definition: `The juvenile form of an animal that undergoes metamorphosis. Caterpillars, tadpoles, and maggots are larvae. They typically focus on eating and growing before transforming into the adult form.`,
              audioPrompt: `A larva is the juvenile form of an animal that undergoes metamorphosis, {name}. Caterpillars are the larva stage of butterflies. Tadpoles are the larva stage of frogs. Maggots are the larva stage of flies. The larva looks and acts very differently from the adult. Most larvae focus on eating and growing, storing energy for the dramatic transformation ahead. After metamorphosis, the adult usually focuses on reproduction instead. Larvae are often the most important eating stage of an insect's entire life.` },
          ],
        },

        {
          id: `l19-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Why Life Cycles Matter`,
          paragraphs: [
            `Life cycles are essential for ECOSYSTEMS. Each species' reproduction rate affects how many of them there are. Some species reproduce by the thousands (like many fish or insects), with most offspring not surviving. Other species (like otters and elephants) have FEW OFFSPRING and care for them carefully. Each strategy is suited to different environments. Understanding life cycles helps biologists predict how populations will change, which is essential for conservation, farming, and managing diseases.`,
            `For HUMANS, understanding life cycles has huge practical importance. Farmers time planting to match seed germination needs. Doctors track the development of babies before birth and during childhood. Conservation biologists protect species at the most vulnerable stages of their cycles. Even pest control uses life cycle knowledge: it's often easier to stop a mosquito as a larva (water stage) than as a flying adult. Knowing how living things grow and change is part of nearly every applied biology field, from medicine to agriculture to ecology to forestry.`,
          ],
          image: `/ue-assets/science/l19-s4-importance.webp`,
          imageCaption: `Farming, medicine, conservation, pest control. All depend on understanding life cycles.`,
          vocab: [
            { word: `reproduction`,
              definition: `The process by which living things produce offspring. The continuation of life cycles. Some species reproduce many times; others reproduce once and die.`,
              audioPrompt: `Reproduction is the process by which living things produce offspring, {name}. It's how life cycles continue from one generation to the next. Some species reproduce many times in their life. Like otters, who have several pups over the years. Other species reproduce once and then die. Like certain salmon, who swim upstream to lay eggs and then die almost immediately after. Plants reproduce through seeds, spores, or other ways. Animals reproduce in many different ways too. Reproduction is essential. Without it, no species would last more than one generation.` },
            { word: `pollination`,
              definition: `The transfer of pollen from one flower to another, enabling fertilization and seed formation. Carried out by pollinators like bees, butterflies, and birds, or by wind.`,
              audioPrompt: `Pollination is the transfer of pollen from one flower to another, {name}. It's how most flowering plants reproduce. Pollen contains the male reproductive cells of a plant. When pollen lands on the right part of another flower (the pistil), fertilization can happen and seeds form. Pollinators like bees, butterflies, and hummingbirds carry pollen between flowers as they feed on nectar. Some plants use wind to spread pollen. Without pollination, most flowering plants can't make seeds. And without seeds, the plant's life cycle ends.` },
          ],
        },

        {
          id: `l19-game`,
          type: `interactive`,
          format: `investigation`,
          guideText: `Investigation time, {name}. Four life cycle scenarios. For each one, identify what's happening: GERMINATION (a seed starting to grow), GRADUAL GROWTH (an organism getting bigger but keeping the same body plan), or METAMORPHOSIS (dramatic body change between life stages)?\n\nOne is sneakier than it looks.`,
          options: [
            { id: `germination`,    label: `Germination`,    color: `#34D399`, description: `A seed starting to grow into a young plant. Roots and shoots emerging.` },
            { id: `gradual`,        label: `Gradual Growth`,  color: `#60A5FA`, description: `Organism gets bigger and more developed, but the basic body plan stays the same.` },
            { id: `metamorphosis`,  label: `Metamorphosis`,   color: `#A78BFA`, description: `Dramatic body change between life stages. Like caterpillar to butterfly, or tadpole to frog.` },
          ],
          cases: [
            {
              id: `case-1`,
              caseTitle: `Scenario #1`,
              clues: [
                { text: `A bean seed sits in moist soil.` },
                { text: `After three days, a small root emerges from one end.` },
                { text: `A few days later, a green shoot pushes up through the surface.` },
              ],
              correctAnswer: `germination`,
              realWorldExample: `Bean seeds are a common school example of germination.`,
              explanation: `Seed becoming a young plant. Roots down, shoots up. Pure germination. Most plant life cycles start this way. With enough water and warmth, seeds can germinate within days.`,
            },
            {
              id: `case-2`,
              caseTitle: `Scenario #2`,
              clues: [
                { text: `A baby otter is born weighing about 5 pounds.` },
                { text: `Over the next 2-3 years, it grows into an adult otter weighing 60-90 pounds.` },
                { text: `Throughout its life, it has the same basic body: fur, four legs, a tail, and a long body.` },
              ],
              correctAnswer: `gradual`,
              realWorldExample: `Sea otters grow gradually like most mammals.`,
              explanation: `Baby otter looks like a small adult otter. Just gets bigger and more developed. Pure gradual growth. This is how mammals, including humans, mostly grow.`,
            },
            {
              id: `case-3`,
              caseTitle: `Scenario #3`,
              clues: [
                { text: `An egg hatches into a wormlike creature with no legs.` },
                { text: `The wormlike thing eats and grows for weeks.` },
                { text: `Eventually it forms a hard case around itself.` },
                { text: `Two weeks later, a butterfly with wings and antennae emerges from the case.` },
              ],
              correctAnswer: `metamorphosis`,
              realWorldExample: `Butterfly metamorphosis is one of nature's most dramatic transformations.`,
              explanation: `Wormlike caterpillar transforming into a flying butterfly. The body plan completely changes. Pure metamorphosis. The caterpillar and butterfly are the same individual at different life stages.`,
            },
            {
              id: `case-4`,
              caseTitle: `Scenario #4 — The Tricky One`,
              clues: [
                { text: `A tadpole swims in a pond. It has a tail and gills for breathing underwater.` },
                { text: `Over weeks, it develops legs.` },
                { text: `Its tail shrinks until it disappears. Its gills are replaced by lungs.` },
                { text: `It hops onto land as a frog.` },
              ],
              correctAnswer: `metamorphosis`,
              realWorldExample: `Frog metamorphosis is just as dramatic as butterfly metamorphosis.`,
              explanation: `Tricky because the body change feels GRADUAL (no chrysalis stage, no sudden transformation). But the overall change is DRAMATIC. Tadpoles have tails, swim, and breathe with gills. Frogs have legs, hop on land, and breathe with lungs. The body plan changes completely. That's metamorphosis. Lesson: metamorphosis doesn't always happen in a sudden moment. Some species transform over weeks or months. The key is whether the body plan changes dramatically, not how fast it happens.`,
            },
          ],
        },

        {
          id: `l19-quiz`,
          type: `quiz`,
          guideText: `Let's see what stuck, {name}.`,
          questions: [
            { id: `l19-q1`, format: `multiple-choice`,
              question: `What's a LIFE CYCLE?`,
              options: [
                `Just one phase of life`,
                `The series of stages every living thing goes through: birth, growth, reproduction, death`,
                `Only for plants`,
                `Only for animals`,
              ],
              correctIndex: 1,
              explanation: `Life cycles are universal. Every species goes through the basic pattern: starts (born, hatches, sprouts), grows, reproduces, dies. The duration varies hugely, but the pattern itself is one of biology's deepest.` },

            { id: `l19-q2`, format: `multiple-choice`,
              question: `What does it mean for a seed to GERMINATE?`,
              options: [
                `It dies`,
                `It starts growing into a young plant — roots push down, stems push up`,
                `It moves`,
                `It changes color`,
              ],
              correctIndex: 1,
              explanation: `Germination is when a seed starts growing. Roots push into the soil. Stems and leaves push toward light. The seed uses its stored food until photosynthesis can take over. Most plant life cycles begin with germination.` },

            { id: `l19-q3`, format: `multiple-choice`,
              question: `What's METAMORPHOSIS?`,
              options: [
                `Just growing`,
                `When an animal goes through dramatic body changes between life stages, like a caterpillar becoming a butterfly`,
                `Death`,
                `Reproduction`,
              ],
              correctIndex: 1,
              explanation: `Metamorphosis is when an animal's body plan changes dramatically during its life. Butterflies and frogs are classic examples. The caterpillar and butterfly are the same individual, just at different stages.` },

            { id: `l19-q4`, format: `multiple-choice`,
              question: `Do all animals go through metamorphosis?`,
              options: [
                `Yes, all of them`,
                `No — many (including most mammals) grow gradually, keeping the same body plan throughout life`,
                `Only otters`,
                `Only humans`,
              ],
              correctIndex: 1,
              explanation: `Most mammals, including humans, grow gradually. Baby otters look like small otters. Adult otters look bigger. Same body plan throughout. Metamorphosis is more common in insects, amphibians, and some fish.` },

            { id: `l19-q5`, format: `true-false`,
              question: `True or false: Life cycle DURATIONS vary hugely, from 20 minutes for a bacterium to over 5,000 years for a bristlecone pine tree.`,
              correctAnswer: true,
              explanation: `True. Same basic pattern (birth, growth, reproduction, death) but wildly different time scales. Mayflies live for one day as adults. Bristlecone pines can live thousands of years. Same biology, different durations.` },

            { id: `l19-q6`, format: `multiple-choice`,
              question: `How do most PLANTS reproduce?`,
              options: [
                `They don't`,
                `Through seeds (in fruits or cones), often spread by pollinators, animals, wind, or water`,
                `By dividing in half`,
                `By laying eggs`,
              ],
              correctIndex: 1,
              explanation: `Most plants reproduce through seeds. Flowering plants attract pollinators with bright flowers. Conifers make cones. Once seeds form, they spread by various methods (animal travel, wind, water). When a seed lands in good conditions, it germinates and the cycle starts again.` },

            { id: `l19-q7`, format: `multiple-choice`,
              question: `Why does it matter to understand LIFE CYCLES?`,
              options: [
                `It doesn't`,
                `Because farming, medicine, conservation, pest control, and many other fields depend on knowing how living things grow and change`,
                `Only for school`,
                `Just for trivia`,
              ],
              correctIndex: 1,
              explanation: `Life cycle knowledge is everywhere. Farmers time planting to match seed needs. Doctors track child development. Conservation biologists protect species at vulnerable life stages. Even pest control uses life cycle knowledge. Understanding life cycles is part of nearly every applied biology field.` },

            { id: `l19-q8`, format: `multiple-choice`,
              question: `Some species REPRODUCE MANY TIMES, while others reproduce ONCE and then die. Which is true?`,
              options: [
                `Only mammals do many reproductions`,
                `Different species use different strategies: otters have multiple pups over their lifetime, but some salmon lay eggs and die soon after`,
                `All species reproduce just once`,
                `Reproduction never causes death`,
              ],
              correctIndex: 1,
              explanation: `Different species use different reproductive strategies. Otters, humans, and most mammals reproduce multiple times. Some salmon, some plants, and some insects reproduce once and then die. Both strategies work in different environments.` },
          ],
        },

        {
          id: `l19-reflection`,
          type: `reflection`,
          guideText: `Before we wrap, {name}, pick ONE question and actually answer it. Your response gets saved, and I'll remember it next time we talk.`,
          prompts: [
            { id: `r1`, text: `Look at a photo of yourself as a baby. How are you different now? Same body plan but bigger? Or have some big changes happened?` },
            { id: `r2`, text: `Imagine being able to watch the life cycle of one species in fast-forward. Which would you pick — a redwood tree, a butterfly, a salmon, or something else? Why?` },
            { id: `r3`, text: `A bristlecone pine can live for 5,000 years. A mayfly adult lives for one day. Both are alive. What does that say about what it means to live?` },
            { id: `r4`, text: `If you could plant a single seed of any plant and watch it grow over your lifetime, what would you choose, and why?` },
          ],
        },

        {
          id: `l19-realworld`,
          type: `real-world`,
          guideText: `Life cycle science applies to almost every part of human life. Farmers and gardeners time their work to seed germination and plant growth. Doctors track human development. Conservation biologists work to protect species during their most vulnerable life stages (sea turtle eggs, for example). Even mosquito control mostly happens at the larva stage. Understanding life cycles is also a doorway to understanding YOUR OWN life. The pattern of birth, growth, reproduction, death is the same one every living thing follows, including you.`,
          familyAdventure: `Family Seed Watch. Get any seed (bean, pea, sunflower, anything). Plant it in a pot. Water it. Place it in a sunny spot. Have family members check on it daily and write down what they observe. Watch it germinate, sprout, grow leaves, and develop. You're watching the start of a life cycle in real time. Most plants will go from seed to small plant in 2-4 weeks.`,
          creativePrompt: {
            intro: `Pick any living thing (plant or animal). Write a "life story" describing its complete life cycle.`,
            floor: `Write at least 5 sentences. Describe how it starts (egg, seed, etc.), how it grows, when it reproduces, and how its life ends.`,
            stretch: `Write 8 to 10 sentences. Include the different stages of its life, what makes each stage special, and how it interacts with other living things during its life.`,
            open: `Write as much as you want. Build a full biological narrative. Cover beginning, multiple growth stages, vulnerable moments, encounters with other species, reproduction, and the cycle continuing through offspring.`,
            frames: [
              `This is the life story of a ___.`,
              `It begins as ___.`,
              `As it grows, it ___.`,
              `Eventually, it reproduces by ___.`,
              `In the end, ___, but the cycle continues because ___.`,
            ],
          },
        },

        {
          id: `l19-celebration`,
          type: `celebration`,
          message: `Great work, {name}. You can now describe the universal pattern of life cycles, explain plant cycles from seed to mature plant, recognize gradual growth vs metamorphosis, and understand why life cycle knowledge matters in real life. NEXT lesson is the CAPSTONE. We zoom out and look at the big story of human science across history, and your place in what comes next. See you for the finale. — Cosmo.`,
          badge: `life-cycle-tracker`,
          badgeName: `Life Cycle Tracker`,
          xpEarned: 75,
        },
      ],
    },
  ],
};

export default SCIENCE_UE_L19;

// ─── Dev asset check ──────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const screens = SCIENCE_UE_L19.lessons[0].screens;
  const mags = screens.filter(s => s.type === 'magazine').length;
  const game = screens.find(s => s.type === 'interactive')?.cases?.length ?? 0;
  const quiz = screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  const refl = screens.find(s => s.type === 'reflection')?.prompts?.length ?? 0;
  const totalVocab = screens.filter(s => s.type === 'magazine').reduce((sum, s) => sum + (s.vocab?.length || 0), 0);
  console.log(`[LESSON-SCIENCE-UE-L19 v1] Loaded with ${mags} magazine sections, ${totalVocab} vocab terms, ${game} game cases, ${quiz} quiz Qs, ${refl} reflection prompts`);
}
