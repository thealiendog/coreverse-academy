// ─────────────────────────────────────────────────────────────────────────────
// SCIENCE UE  |  L04 — Plants: How They Grow and Make Food
// Age band : upper_explorers (9–10)   Guide: cosmo
// Standards: NGSS 5-LS1-1, 5-PS3-1 — Plants get materials from air/water
//            and use light energy to grow
// CALIBRATED: UE spec v1.1 — real domain terms, em-dashes sparing
// SCOPE: 4 concepts — what makes plants different, photosynthesis,
//        plant parts and their jobs, why plants matter to everyone
// VERSION: v1
// ─────────────────────────────────────────────────────────────────────────────

const SCIENCE_UE_L04 = {
  ageBand: `upper_explorers`,
  subjectId: `science`,
  guide: `cosmo`,

  lessons: [
    {
      id: `science-9-10-04`,
      title: `Plants: How They Grow and Make Food`,
      duration: 18,
      xpReward: 75,
      badge: `plant-scientist`,
      badgeName: `Plant Scientist`,

      screens: [
        {
          id: `l04-welcome`,
          type: `welcome`,
          guideText: `Hey {name}, Cosmo here. Today we look at one of the most amazing groups of living things on Earth. PLANTS. They do something animals literally cannot do: they make their own food from sunlight, water, and air. They take a gas you breathe OUT and turn it into a gas you breathe IN. Without plants, life on Earth would have a very different story. Possibly no story at all. Let's go.`,
          headline: `Plants`,
          subtitle: `How they grow, make food, and keep the rest of life possible`,
          visual: `/ue-assets/science/l04-welcome.webp`,
        },

        {
          id: `l04-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `What Makes Plants Different`,
          paragraphs: [
            `PLANTS are living things that have one superpower no animal has. They make their own food from SUNLIGHT, WATER, and CARBON DIOXIDE (a gas in the air). This is called PHOTOSYNTHESIS, which we'll cover in detail in a moment. Because plants don't need to chase food, they evolved to STAY IN ONE PLACE. They grow toward light. They send roots into soil. They build leaves to catch as much sunlight as possible. Plants don't have brains or muscles, but they have complex strategies for survival.`,
            `Plants are in the Plant KINGDOM, one of the major groups of living things we covered last lesson. The Plant kingdom includes everything from tiny mosses to giant trees, from cactuses in deserts to seaweed in oceans. There are about 400,000 known plant species, and scientists keep finding new ones. They're all built on the same basic plan: roots that pull water and nutrients from soil, stems or trunks that hold them up, and leaves that catch sunlight to make food.`,
          ],
          image: `/ue-assets/science/l04-s1-plants-overview.webp`,
          imageCaption: `Roots. Stems. Leaves. Every plant is built on the same basic plan.`,
          vocab: [
            { word: `plant`,
              definition: `A living thing that makes its own food from sunlight, water, and carbon dioxide using a process called photosynthesis. Members of the Plant Kingdom.`,
              audioPrompt: `A plant is a living thing that makes its own food, {name}. From sunlight, water, and carbon dioxide. This is something no animal can do. Plants use a process called photosynthesis to convert these simple inputs into sugar, which they use as energy. Because plants don't need to chase food, they evolved to stay in one place. They grow roots to pull water from soil. They build leaves to catch sunlight. There are about 400,000 known plant species, from tiny mosses to giant redwood trees.` },
            { word: `chloroplast`,
              definition: `A tiny structure inside plant cells where photosynthesis happens. Contains chlorophyll, which captures sunlight energy. The reason plants can make their own food.`,
              audioPrompt: `A chloroplast is a tiny structure inside plant cells where photosynthesis happens, {name}. Chloroplasts contain a green pigment called chlorophyll, which captures energy from sunlight. That captured energy is used to convert carbon dioxide and water into glucose and oxygen. Chloroplasts are found in the cells of plant leaves, stems, and any green part of the plant. They have their own DNA, which suggests that billions of years ago, they were once separate organisms that merged with early plant cells. They are why plants can make their own food.` },
          ],
        },

        {
          id: `l04-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Photosynthesis: How Plants Make Food`,
          paragraphs: [
            `PHOTOSYNTHESIS is one of the most important processes on Earth. Inside plant cells are tiny green structures called CHLOROPLASTS. Inside chloroplasts is a green pigment called CHLOROPHYLL. Chlorophyll captures ENERGY from sunlight. Plants use that energy to combine CARBON DIOXIDE (from the air) with WATER (from the soil) to produce GLUCOSE (a kind of sugar) and OXYGEN. The plant uses the glucose for energy and growth. The oxygen is released into the air.`,
            `That last part is huge. The oxygen YOU breathe came from photosynthesis. Specifically, most of it came from plants and from algae in the ocean. When animals breathe out carbon dioxide and plants take it in and release oxygen, it forms a system that keeps both groups alive. Plants and animals are essentially partners. Without plants, the atmosphere wouldn't have enough oxygen for animals to breathe. Without animals exhaling carbon dioxide, plants would have less raw material for photosynthesis. The two kingdoms evolved together over billions of years.`,
          ],
          image: `/ue-assets/science/l04-s2-photosynthesis.webp`,
          imageCaption: `Sunlight + carbon dioxide + water → sugar + oxygen. Photosynthesis in one line.`,
          vocab: [
            { word: `photosynthesis`,
              definition: `The process plants use to make their own food from sunlight, water, and carbon dioxide. Produces glucose (sugar) for the plant and releases oxygen into the air.`,
              audioPrompt: `Photosynthesis is the process plants use to make their own food, {name}. Inside plant cells are tiny green structures called chloroplasts. Inside chloroplasts is a green pigment called chlorophyll. Chlorophyll captures energy from sunlight. Plants use that energy to combine carbon dioxide from the air with water from the soil. The output is glucose (a kind of sugar) and oxygen. The plant uses the sugar for energy. The oxygen is released into the air, where animals breathe it.` },
            { word: `carbon dioxide`,
              definition: `A gas in the air made of one carbon and two oxygen atoms. Plants pull it in through stomata to use in photosynthesis. Animals release it when they breathe out.`,
              audioPrompt: `Carbon dioxide is a gas in the air that plants use to make food, {name}. It is made up of one carbon atom and two oxygen atoms. Plants pull carbon dioxide in through tiny pores called stomata in their leaves. They combine it with water and sunlight energy to make glucose during photosynthesis. As a byproduct, they release oxygen into the air. When you breathe out, you release carbon dioxide. Plants take it back in. This exchange is part of what keeps Earth's atmosphere balanced for both plants and animals.` },
          ],
        },

        {
          id: `l04-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `The Parts of a Plant and Their Jobs`,
          paragraphs: [
            `ROOTS hold the plant in place and pull water and nutrients from the soil. They also store food (carrots and potatoes are actually roots and underground stems storing nutrients). The STEM (or trunk in trees) holds the plant up and contains tiny tubes called XYLEM and PHLOEM. Xylem moves water from roots to leaves. Phloem moves sugar from leaves to the rest of the plant. Plant stems are basically internal plumbing.`,
            `LEAVES are the food-making factories. Most of the photosynthesis happens here. Leaves are usually flat and wide to catch as much light as possible. They have tiny pores called STOMATA that let carbon dioxide in and oxygen out. FLOWERS are the reproductive parts of many plants. They use bright colors and smells to attract bees, butterflies, birds, or other animals that carry pollen from flower to flower. FRUITS are how plants protect their SEEDS and use animals to spread them. When a deer eats an apple and walks away before pooping out the seeds, it's helping the apple tree's children grow somewhere new.`,
          ],
          image: `/ue-assets/science/l04-s3-plant-parts.webp`,
          imageCaption: `Each part has a specific job. Together they make a whole working plant.`,
          vocab: [
            { word: `chlorophyll`,
              definition: `The green pigment inside plant cells that captures energy from sunlight to power photosynthesis. The reason most plants are green.`,
              audioPrompt: `Chlorophyll is the green pigment inside plant cells, {name}. It captures energy from sunlight, which the plant uses to power photosynthesis. Chlorophyll is the reason most plants are green. It reflects green light back to your eyes while absorbing other colors of light to use for energy. In the fall, when many trees lose their chlorophyll, you can see the yellows, oranges, and reds that were hidden underneath all summer. Chlorophyll is one of the most important molecules in the entire history of life on Earth.` },
            { word: `stomata`,
              definition: `Tiny pores on plant leaves that control gas exchange. When open, carbon dioxide enters for photosynthesis and oxygen exits. Guard cells open and close them to manage water loss.`,
              audioPrompt: `Stomata are tiny pores on the surface of plant leaves, {name}. Each pore is surrounded by two guard cells that control its opening and closing. When stomata are open, carbon dioxide enters the leaf for photosynthesis, and oxygen and water vapor exit. When stomata close, they reduce water loss, which is important in dry conditions. Most stomata are on the underside of leaves. A single leaf can have tens of thousands of stomata. They are how plants breathe: taking in what they need and releasing what they don't.` },
          ],
        },

        {
          id: `l04-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Why Plants Matter to Everyone`,
          paragraphs: [
            `Plants are at the bottom of almost every FOOD CHAIN. They convert sunlight into food that everything else depends on. Cows eat grass. You eat the cow. Or you eat the grass directly (well, you eat wheat, which is a kind of grass). Either way, the energy in your meals started as sunlight, captured by plants. Even meat-eating predators like otters and tigers depend on plants, because the animals they eat ate plants.`,
            `Plants also produce most of the oxygen in our atmosphere. They clean carbon dioxide out of the air. They hold soil in place to prevent erosion. They provide habitat for countless animals. Many medicines started as chemicals discovered in plants (aspirin comes from willow bark, the malaria treatment quinine comes from cinchona trees). Plants give us food, oxygen, medicine, building materials, clothing, paper, and beauty. Take plants out of Earth and almost everything else stops working. Take care of plants and almost everything else works better. They're not just pretty decorations. They're the foundation.`,
          ],
          image: `/ue-assets/science/l04-s4-plants-matter.webp`,
          imageCaption: `Food. Oxygen. Medicine. Habitat. Plants do a lot for everyone.`,
          vocab: [
            { word: `glucose`,
              definition: `A simple sugar made by plants during photosynthesis. The basic energy source for living things, including animals that eat plants directly or eat other animals that eat plants.`,
              audioPrompt: `Glucose is a simple sugar, {name}. It is what plants make during photosynthesis. Plants use glucose for their own energy and growth. Animals get glucose by eating plants or by eating other animals that ate plants. Your own body breaks down food into glucose, which your cells use for energy. Glucose is the basic energy source for almost all living things on Earth. The energy in every meal you eat traces back to sunlight, captured by chlorophyll in plant cells and turned into glucose. Without it, life would not work.` },
            { word: `food chain`,
              definition: `A sequence showing how energy moves from one living thing to another. Usually starts with a plant (producer), then plant-eating animals (consumers), then meat-eating animals.`,
              audioPrompt: `A food chain shows how energy moves from one living thing to another, {name}. It usually starts with a plant, which captures energy from sunlight. A plant-eating animal eats the plant. A meat-eating animal eats that animal. At each step, energy is transferred. Plants are called producers because they make their own food. Animals that eat plants are called primary consumers. Animals that eat those animals are secondary consumers. Every food chain on Earth starts with a producer, almost always a plant or algae doing photosynthesis.` },
          ],
        },

        {
          id: `l04-game`,
          type: `interactive`,
          format: `investigation`,
          guideText: `Investigation time, {name}. Four living things. For each one, decide if it's a PLANT (does photosynthesis with chlorophyll), an ANIMAL (eats plants or other animals), or another KINGDOM (something else entirely)?\n\nOne is sneakier than it looks.`,
          options: [
            { id: `plant`,         label: `Plant`,         color: `#34D399`, description: `Does photosynthesis. Has chlorophyll. Usually green. Stays in one place.` },
            { id: `animal`,        label: `Animal`,        color: `#F87171`, description: `Has to eat to get energy. Moves around. Has cells without cell walls.` },
            { id: `other-kingdom`, label: `Other Kingdom`, color: `#A78BFA`, description: `Something else: a fungus, protist, bacterium, or other living thing that isn't a plant or animal.` },
          ],
          cases: [
            {
              id: `case-1`,
              caseTitle: `Living Thing #1: A maple tree`,
              clues: [
                { text: `Has roots, a trunk, branches, and green leaves.` },
                { text: `Its leaves contain chlorophyll and do photosynthesis.` },
                { text: `Produces seeds inside winged fruits that fall from the tree in autumn.` },
              ],
              correctAnswer: `plant`,
              realWorldExample: `Maple trees are common in many parts of North America.`,
              explanation: `Roots. Stem. Leaves with chlorophyll. Photosynthesis. Seeds. Pure plant. Maple trees are classic examples of large flowering plants.`,
            },
            {
              id: `case-2`,
              caseTitle: `Living Thing #2: A river otter`,
              clues: [
                { text: `Has fur, four legs, and a long tail.` },
                { text: `Eats fish, crabs, and other small animals.` },
                { text: `Lives in a riverside burrow with its family.` },
              ],
              correctAnswer: `animal`,
              realWorldExample: `River otters are a perfect example of a mammal predator. (Also, Cosmo's family.)`,
              explanation: `Fur. Predator. Eats other living things. Pure animal. Animals can't make their own food the way plants can, so they have to find energy by eating plants or other animals. Otters are mammals, in the animal kingdom.`,
            },
            {
              id: `case-3`,
              caseTitle: `Living Thing #3: A portobello mushroom`,
              clues: [
                { text: `Grows in soil and on dead wood.` },
                { text: `Doesn't have chlorophyll and doesn't do photosynthesis.` },
                { text: `Gets energy by breaking down dead plant material.` },
              ],
              correctAnswer: `other-kingdom`,
              realWorldExample: `Mushrooms are fungi, a separate kingdom from plants and animals.`,
              explanation: `No chlorophyll. No photosynthesis. Breaks down dead matter for energy. Pure other-kingdom. Mushrooms LOOK kind of plant-like, but they're actually fungi. They're more closely related to animals than to plants. They're a great example of why surface appearances don't always tell you what kingdom something is in.`,
            },
            {
              id: `case-4`,
              caseTitle: `Living Thing #4 — The Tricky One: A coral on a tropical reef`,
              clues: [
                { text: `Looks like a colorful rock or plant attached to the ocean floor.` },
                { text: `Doesn't move around like most animals.` },
                { text: `Each "branch" of coral is actually made up of tiny animals called polyps that eat plankton.` },
              ],
              correctAnswer: `animal`,
              realWorldExample: `Coral reefs are made of millions of tiny coral animals.`,
              explanation: `Tricky because coral LOOKS like a plant or rock. It doesn't move around, attaches to something, and grows in colorful structures. But it's actually a colony of tiny ANIMALS called polyps. They have cells without cell walls (animal-like). They eat plankton (animal-like). They don't photosynthesize on their own, though many corals partner with photosynthetic algae living inside them. Lesson: appearance can be misleading. The careful test is HOW the organism gets energy, not what it looks like.`,
            },
          ],
        },

        {
          id: `l04-quiz`,
          type: `quiz`,
          guideText: `Let's see what stuck, {name}.`,
          questions: [
            { id: `l04-q1`, format: `multiple-choice`,
              question: `What is PHOTOSYNTHESIS?`,
              options: [
                `When plants take photos`,
                `The process plants use to make food from sunlight, water, and carbon dioxide`,
                `How plants reproduce`,
                `How leaves change color`,
              ],
              correctIndex: 1,
              explanation: `Photosynthesis converts sunlight, water, and carbon dioxide into glucose and oxygen. Inside plant cells, chlorophyll captures the light energy that powers the whole process.` },

            { id: `l04-q2`, format: `multiple-choice`,
              question: `What is CHLOROPHYLL?`,
              options: [
                `A type of plant`,
                `The green pigment inside plant cells that captures sunlight for photosynthesis`,
                `A vitamin`,
                `A type of leaf`,
              ],
              correctIndex: 1,
              explanation: `Chlorophyll is the green pigment that captures sunlight. It's the reason most plants are green. In autumn, when chlorophyll breaks down, you can see the other colors (yellow, orange, red) that were hidden under it.` },

            { id: `l04-q3`, format: `multiple-choice`,
              question: `What does photosynthesis PRODUCE?`,
              options: [
                `Just oxygen`,
                `Glucose (sugar) for the plant to use as energy, plus oxygen that gets released into the air`,
                `Only water`,
                `Carbon dioxide`,
              ],
              correctIndex: 1,
              explanation: `Photosynthesis produces glucose (sugar) and oxygen. The plant uses the glucose for energy. The oxygen is released into the atmosphere — which is how Earth got its breathable atmosphere in the first place.` },

            { id: `l04-q4`, format: `multiple-choice`,
              question: `What do ROOTS do for a plant?`,
              options: [
                `Make food`,
                `Hold the plant in place and pull water and nutrients from the soil`,
                `Reproduce`,
                `Catch sunlight`,
              ],
              correctIndex: 1,
              explanation: `Roots anchor the plant and absorb water and minerals from the soil. Some roots also store food (carrots are roots storing nutrients). Roots don't make food themselves — leaves do, through photosynthesis.` },

            { id: `l04-q5`, format: `true-false`,
              question: `True or false: The oxygen you breathe was made by plants and algae through photosynthesis.`,
              correctAnswer: true,
              explanation: `True. Most of the oxygen in Earth's atmosphere came from photosynthesis. Plants do part of it. Algae and bacteria in the ocean do a lot too. Without these photosynthesizers, the atmosphere wouldn't have enough oxygen for animals to breathe.` },

            { id: `l04-q6`, format: `multiple-choice`,
              question: `Why are FLOWERS important to plants?`,
              options: [
                `Just for decoration`,
                `They are the reproductive parts of many plants — bright colors and smells attract animals that carry pollen from flower to flower`,
                `They make oxygen`,
                `They hold the plant up`,
              ],
              correctIndex: 1,
              explanation: `Flowers attract pollinators (bees, butterflies, birds) that carry pollen between plants. This is how many plants reproduce. The bright colors and smells of flowers evolved specifically to attract these helpful animals.` },

            { id: `l04-q7`, format: `multiple-choice`,
              question: `Are MUSHROOMS plants?`,
              options: [
                `Yes, all mushrooms are plants`,
                `No, mushrooms are FUNGI — a separate kingdom. They don't have chlorophyll and don't do photosynthesis`,
                `Mushrooms are animals`,
                `Mushrooms aren't alive`,
              ],
              correctIndex: 1,
              explanation: `Mushrooms LOOK like plants, but they're actually fungi. They don't have chlorophyll and don't make food from sunlight. They get energy by breaking down dead material instead. Fungi are more closely related to animals than to plants.` },

            { id: `l04-q8`, format: `multiple-choice`,
              question: `Why do PLANTS matter to other living things?`,
              options: [
                `They don't really matter`,
                `They produce oxygen, sit at the bottom of food chains, clean the air, provide habitat, give us medicines, and form the foundation of almost all life on Earth`,
                `Only because they're pretty`,
                `Only some animals depend on them`,
              ],
              correctIndex: 1,
              explanation: `Plants are at the foundation of life on Earth. They produce oxygen, capture energy from sunlight that everything else uses, provide habitat, clean the air, and form the basis of nearly every food chain. Take plants out, and almost everything else stops working.` },
          ],
        },

        {
          id: `l04-reflection`,
          type: `reflection`,
          guideText: `Before we wrap, {name}, pick ONE question and actually answer it. Your response gets saved, and I'll remember it next time we talk.`,
          prompts: [
            { id: `r1`, text: `Pick a plant near you (houseplant, tree outside, vegetable in the kitchen). What parts can you identify? Can you describe its job?` },
            { id: `r2`, text: `Imagine being a plant for a day. You can't move. You make your food from sunlight. What would be the hardest thing about plant life? What might be peaceful about it?` },
            { id: `r3`, text: `If photosynthesis stopped happening tomorrow, what would change first? Think about food, air, and water.` },
            { id: `r4`, text: `What's your favorite plant — and why? Try to think of one specific thing about it that fascinates you.` },
          ],
        },

        {
          id: `l04-realworld`,
          type: `real-world`,
          guideText: `Plants quietly run most of Earth's life support system. The next meal you eat will be either plants or animals that ate plants. The next breath you take will use oxygen plants produced. The cotton in your clothes was a plant. The wood in your furniture was a tree. The medicine in your cabinet probably has plant-based ingredients. Learning to recognize plants and understand how they work is one of the most important things humans do. Caring for them is one of the most important things humans can do for ourselves.`,
          familyAdventure: `Family Photosynthesis Experiment. Take TWO healthy houseplants (or two plants from the same garden). Place one in a sunny spot. Cover the other completely with a dark cloth or box so no light reaches it. Water both equally. After 5 days, compare them. The one without light should look pale, weak, or even yellow. This is photosynthesis failing in real time. Plants without light literally can't make food.`,
          creativePrompt: {
            intro: `Imagine being a plant scientist who just discovered a brand-new plant species. Write a scientific description.`,
            floor: `Write at least 5 sentences. Name the plant. Describe its roots, stem, leaves, and any flowers. Note where you found it.`,
            stretch: `Write 8 to 10 sentences. Include all visible plant parts, where it grows best, what kind of pollinators visit its flowers, and whether you've observed it doing photosynthesis (turning toward light, releasing oxygen, etc.).`,
            open: `Write as much as you want. Build a full scientific paper. Include the plant's habitat, how its specific features help it survive there, its life cycle from seed to adult, and what other organisms it interacts with.`,
            frames: [
              `I have discovered a new plant species, which I will call ___.`,
              `Its roots ___.`,
              `Its leaves ___.`,
              `It uses photosynthesis by ___.`,
              `This plant is important to its ecosystem because ___.`,
            ],
          },
        },

        {
          id: `l04-celebration`,
          type: `celebration`,
          message: `Great work, {name}. You can now explain what makes plants different, describe photosynthesis in detail, name plant parts and their jobs, and understand why plants matter to all life. Next lesson: the other half of the Earth's biggest dance partners. ANIMALS, including how they're different from plants and the incredible variety they come in. See you there. — Cosmo.`,
          badge: `plant-scientist`,
          badgeName: `Plant Scientist`,
          xpEarned: 75,
        },
      ],
    },
  ],
};

export default SCIENCE_UE_L04;

// ─── Dev asset check ──────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const screens = SCIENCE_UE_L04.lessons[0].screens;
  const mags = screens.filter(s => s.type === 'magazine').length;
  const game = screens.find(s => s.type === 'interactive')?.cases?.length ?? 0;
  const quiz = screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  const refl = screens.find(s => s.type === 'reflection')?.prompts?.length ?? 0;
  const totalVocab = screens.filter(s => s.type === 'magazine').reduce((sum, s) => sum + (s.vocab?.length || 0), 0);
  console.log(`[LESSON-SCIENCE-UE-L04 v1] Loaded with ${mags} magazine sections, ${totalVocab} vocab terms, ${game} game cases, ${quiz} quiz Qs, ${refl} reflection prompts`);
}
