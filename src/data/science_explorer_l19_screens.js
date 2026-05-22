// ─────────────────────────────────────────────────────────────────────────────
// SCIENCE  |  L19 — Life Cycles: How Living Things Grow and Change
// Age band : explorers (6–8)   Guide: cosmo
// Standards: NGSS 3-LS1-1
// REWRITE v2 (May 2026): Grade 1 accessible, PLANT / METAMORPHOSIS / MAMMAL
// 3-bucket identification game tests sorting life cycle types
// (Schema clean from source. Added Cosmo 🦦 sign-off to celebration message)
// ─────────────────────────────────────────────────────────────────────────────

const SCIENCE_L19 = {
  ageBand:   `explorers`,
  subjectId: `science`,
  guide:     `cosmo`,

  lessons: [
    {
      id:        `science-6-8-19`,
      title:     `Life Cycles: How Living Things Grow and Change`,
      duration:  12,
      xpReward:  50,
      badge:     `life-cycle-explorer`,
      badgeName: `Life Cycle Explorer`,

      screens: [

        {
          id: `l19-welcome`,
          type: `welcome`,
          guideText: `Hey {name}, Cosmo here! Every living thing on Earth — plants, animals, you — goes through STAGES of life! You started as a baby! You're growing into a kid! Then a teenager! Then an adult! Then an elder! That's your life CYCLE! Plants do it! Butterflies do it! Frogs do it! EVERY living thing has a life cycle! Let's go!`,
          headline: `Life Cycles: How Living Things Grow and Change`,
          subtitle: `Every living thing goes through stages — from tiny start to grown-up`,
          visual: `/explorer-assets/science/l19-welcome.webp`,
        },

        {
          id: `l19-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Everything Living CHANGES`,
          paragraphs: [
            `Remember from earlier — one of the signs of life is GROWTH, {name}! Every living thing GROWS!`,
            `But it's not just growing bigger — living things CHANGE! They start tiny and end up very different! A baby cat doesn't look like an adult cat! A seed doesn't look like a tree! A tadpole doesn't look like a frog! The CHANGES from start to end are called a LIFE CYCLE! Every living thing has one! Today you'll see life cycles of plants, butterflies, frogs, and mammals!`,
          ],
          image: `/explorer-assets/science/l19-s1-everything-changes.webp`,
          imageCaption: `Every living thing changes! From tiny start to grown-up to next generation!`,
          vocab: [
            { word: `life cycle`, definition: `The stages a living thing goes through.`,
              audioPrompt: `A life cycle is the stages a living thing goes through — from birth to growth to reproducing to dying. Every living thing has one. The stages happen in a CYCLE — meaning the offspring start the cycle again!` },
            { word: `stages`,     definition: `Different phases of life.`,
              audioPrompt: `Stages are different phases of life. A life cycle has stages. For humans — baby, child, teenager, adult, elder. For butterflies — egg, caterpillar, chrysalis, butterfly. Each stage looks different!` },
            { word: `change`,     definition: `To become different.`,
              audioPrompt: `To change is to become different. Living things change through their life cycle. They don't stay the same. From tiny to large. From simple to complex. Change is one of the magical things about life!` },
          ],
        },

        {
          id: `l19-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Plant Life Cycle`,
          paragraphs: [
            `Let's start with plants! The plant life cycle has FOUR main stages!`,
            `1) SEED — a tiny package containing all the instructions for a new plant! 2) SEEDLING — the seed sprouts and starts growing roots, stem, and first leaves! 3) PLANT — it grows bigger, gets stronger leaves, makes its own food through photosynthesis! 4) FLOWERING — when the plant is mature, it grows flowers, makes seeds, and those seeds will become new plants! Then the cycle starts again! Some plants live just a few months! Trees can live for HUNDREDS of years!`,
          ],
          image: `/explorer-assets/science/l19-s2-plant-cycle.webp`,
          imageCaption: `Plant cycle: seed → seedling → plant → flowering → new seeds!`,
          vocab: [
            { word: `seed`,      definition: `A tiny package with instructions for a new plant.`,
              audioPrompt: `A seed is a tiny package containing instructions for a new plant. A tiny apple seed has the instructions for a whole apple tree. When seeds get water and warm soil, they sprout — and the life cycle begins!` },
            { word: `seedling`,  definition: `A young plant just sprouting.`,
              audioPrompt: `A seedling is a young plant just sprouting from a seed. The baby stage of a plant. It has just a few first leaves and tiny roots. It uses food stored in the seed to grow at first!` },
            { word: `flowering`, definition: `When a plant makes flowers.`,
              audioPrompt: `Flowering is when a plant makes flowers. It's the reproduction stage. Flowers contain pollen and seeds. Bees and butterflies help carry pollen. Then seeds form and new plants grow!` },
          ],
        },

        {
          id: `l19-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Butterfly Life Cycle: METAMORPHOSIS`,
          paragraphs: [
            `Now for one of the MOST AMAZING life cycles in nature — the BUTTERFLY!`,
            `Butterflies go through METAMORPHOSIS — a dramatic transformation! 1) EGG — a tiny egg laid by a mother butterfly on a leaf! 2) CATERPILLAR — egg hatches into a worm-like caterpillar that eats LOTS of leaves to grow! 3) CHRYSALIS — caterpillar forms a hard shell around itself! Inside the chrysalis, AMAZING things happen — the caterpillar's body completely transforms! 4) BUTTERFLY — when ready, the chrysalis opens and out comes a BEAUTIFUL butterfly with wings! Nature's most dramatic transformation!`,
          ],
          image: `/explorer-assets/science/l19-s3-butterfly.webp`,
          imageCaption: `Butterfly cycle: egg → caterpillar → chrysalis → butterfly!`,
          vocab: [
            { word: `metamorphosis`, definition: `A dramatic change in body shape during a life cycle.`,
              audioPrompt: `Metamorphosis is a dramatic change in body shape during a life cycle. Butterflies do it. Frogs do it. The young form looks COMPLETELY different from the adult form. One of the most amazing processes in nature!` },
            { word: `caterpillar`,   definition: `The child stage of a butterfly.`,
              audioPrompt: `A caterpillar is the child stage of a butterfly. It looks worm-like, with many tiny legs. Caterpillars eat lots of leaves to grow. As they grow, they shed their skin several times!` },
            { word: `chrysalis`,     definition: `A hard shell where transformation happens.`,
              audioPrompt: `A chrysalis is a hard shell the caterpillar forms around itself. Inside, the caterpillar's body BREAKS DOWN into a kind of soup, then REBUILDS into a butterfly. Then the chrysalis cracks open!` },
          ],
        },

        {
          id: `l19-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Frog Life Cycle: Another Metamorphosis`,
          paragraphs: [
            `Frogs also go through METAMORPHOSIS — but in water and on land!`,
            `1) EGG — a mother frog lays HUNDREDS of eggs in water! 2) TADPOLE — eggs hatch into tadpoles — tiny fish-like creatures with TAILS and GILLS! They swim in water and eat algae! 3) GROWING TADPOLE — over weeks, the tadpole grows LEGS! First back legs! Then front legs! The tail starts shrinking! Gills disappear! Lungs grow! 4) FROG — finally, it climbs out of the water as a full FROG! It can breathe air, hop on land, and eat insects! Then it'll mate and lay eggs of its own!`,
          ],
          image: `/explorer-assets/science/l19-s4-frog.webp`,
          imageCaption: `Frog cycle: egg → tadpole → growing legs → frog!`,
          vocab: [
            { word: `tadpole`,        definition: `The baby stage of a frog.`,
              audioPrompt: `A tadpole is the baby stage of a frog. It looks like a tiny fish. It breathes through gills underwater. It has a long tail for swimming. Tadpoles eat algae. Over weeks, they transform!` },
            { word: `gills-to-lungs`, definition: `Tadpoles breathe through gills. Frogs through lungs.`,
              audioPrompt: `Gills to lungs — tadpoles breathe through gills underwater. As they transform into frogs, they grow lungs. Frogs can breathe air with lungs. The transformation includes changing breathing systems entirely!` },
            { word: `water-to-land`,  definition: `Tadpoles live in water. Frogs live on land.`,
              audioPrompt: `Water to land — tadpoles live in water, swimming around. Adult frogs live on land, hopping around. Their bodies, breathing, eating, and movement all adapt to land. Few life cycles have such a dramatic shift!` },
          ],
        },

        {
          id: `l19-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Mammal Life Cycle: Gradual Growth`,
          paragraphs: [
            `Now for the kind of life cycle that includes YOU — MAMMALS!`,
            `Mammals don't do metamorphosis! Instead, they GROW GRADUALLY! 1) BABY — born small, often helpless! Drinks mother's milk! 2) CHILD — learns about the world, plays, grows fast! 3) ADULT — fully grown, can reproduce, raises children! 4) ELDER — has lived long, has wisdom from experience! Humans go through these stages! So do dogs, cats, otters, elephants, whales! Some mammals (like mice) live just a couple years! Some (like humans and whales) live for many decades!`,
          ],
          image: `/explorer-assets/science/l19-s5-mammals.webp`,
          imageCaption: `Mammal cycle: baby → child → adult → elder! Humans included!`,
          vocab: [
            { word: `gradual growth`, definition: `Slow, steady change.`,
              audioPrompt: `Gradual growth is slow, steady change. Mammals grow gradually. There's no dramatic moment of transformation. Day by day, year by year, mammals get bigger. A baby slowly becomes a child!` },
            { word: `baby`,           definition: `The first stage for mammals.`,
              audioPrompt: `A baby is the first stage for mammals. Babies are small, often helpless, and depend on parents for everything. They drink milk. They grow incredibly fast — much faster than at any other stage!` },
            { word: `elder`,          definition: `The oldest stage of life.`,
              audioPrompt: `An elder is the oldest stage of life. Elders have lived through many years and have wisdom. In many human cultures, elders are highly respected and teach the younger generations. A beautiful, important stage!` },
          ],
        },

        {
          id: `l19-mag-6`,
          type: `magazine`,
          section: 6,
          headline: `The Cycle Continues`,
          paragraphs: [
            `Every life cycle ends! But life DOESN'T end with one cycle — because new GENERATIONS keep starting their own!`,
            `A plant dies, but its seeds become new plants! A butterfly dies, but its eggs become new butterflies! A frog dies, but its tadpoles become new frogs! A human dies, but their children carry on! Life on Earth has been continuing this way for BILLIONS of years! Every living thing today came from generations and generations before them — and will lead to more generations! You are part of an unbroken chain stretching back to the very beginning of life!`,
          ],
          image: `/explorer-assets/science/l19-s6-cycle-continues.webp`,
          imageCaption: `Cycles continue! New generations carry life forward!`,
          vocab: [
            { word: `generation`,    definition: `One level of family.`,
              audioPrompt: `A generation is one level of family — like grandparents, parents, children. Each is a generation. Generations of life have been continuing on Earth for billions of years. An unbroken chain!` },
            { word: `chain of life`, definition: `The unbroken line connecting all living things.`,
              audioPrompt: `The chain of life is the unbroken line of generations connecting all living things back through time. Your parents are your link. Going back through millions of years to the very first life on Earth!` },
            { word: `continues`,     definition: `Keeps going.`,
              audioPrompt: `Continues means keeps going. Life continues through new generations. One life ends, another begins. The seeds fall and grow. The babies are born and grow. The cycle never stops!` },
          ],
        },

        {
          id: `l19-game`,
          type: `interactive`,
          format: `drag-match`,
          guideText: `Let's try it, {name}! Here are 4 life cycle scenes. Drag each one — is it PLANT (seed to flower!), METAMORPHOSIS (caterpillar/tadpole transform!), or MAMMAL (baby grows slowly!)?`,
          buckets: [
            { id: `plant`,         label: `🌱 PLANT`,         color: `#16A34A` },
            { id: `metamorphosis`, label: `🦋 METAMORPHOSIS`, color: `#FBBF24` },
            { id: `mammal`,        label: `👶 MAMMAL`,        color: `#F87171` },
          ],
          items: [
            { id: `l19-g1`, image: `l19-game-1.webp`, label: `A tiny apple seed growing into a young apple tree with green leaves`,
              matchPhrase: `Yes! PLANT! Plant cycle: seed → seedling → plant → flowering → new seeds!`,
              correctMatch: `plant` },
            { id: `l19-g2`, image: `l19-game-2.webp`, label: `A caterpillar transforming inside a chrysalis into a butterfly`,
              matchPhrase: `Right! METAMORPHOSIS! Dramatic transformation: egg → caterpillar → chrysalis → butterfly!`,
              correctMatch: `metamorphosis` },
            { id: `l19-g3`, image: `l19-game-3.webp`, label: `A baby puppy growing slowly into a full-grown adult dog`,
              matchPhrase: `Yes! MAMMAL! Mammals grow gradually. Baby → child → adult — no metamorphosis!`,
              correctMatch: `mammal` },
            { id: `l19-g4`, image: `l19-game-4.webp`, label: `A tadpole with a tail growing legs and turning into a frog`,
              matchPhrase: `Right! METAMORPHOSIS! Frog metamorphosis: egg → tadpole → grows legs → frog!`,
              correctMatch: `metamorphosis` },
          ],
        },

        {
          id: `l19-quiz`,
          type: `quiz`,
          guideText: `Let's see what you remember, {name}!`,
          questions: [
            { id: `l19-q1`, format: `multiple-choice`,
              question: `What is a LIFE CYCLE?`,
              options: [`A type of bicycle`, `The STAGES a living thing goes through — birth, growth, reproducing`, `A music cycle`, `Only what plants do`],
              correctIndex: 1,
              explanation: `A life cycle is the stages a living thing goes through. Every living thing has one!` },
            { id: `l19-q2`, format: `multiple-choice`,
              question: `What's the FIRST stage of a plant's life cycle?`,
              options: [`The flower`, `The SEED — contains instructions for a new plant`, `The fruit`, `The root`],
              correctIndex: 1,
              explanation: `Seed! It's a tiny package with all the instructions for a new plant!` },
            { id: `l19-q3`, format: `multiple-choice`,
              question: `What is METAMORPHOSIS?`,
              options: [`A type of star`, `A DRAMATIC change in body shape (like butterflies and frogs)`, `A type of music`, `A type of food`],
              correctIndex: 1,
              explanation: `Metamorphosis is a dramatic change in body shape. Butterflies and frogs do it. Bodies literally restructure!` },
            { id: `l19-q4`, format: `true-false`,
              question: `Mammals (like humans, dogs, cats) grow GRADUALLY — without dramatic metamorphosis.`,
              correctAnswer: true,
              explanation: `True! Mammals grow gradually — day by day. Baby → child → adult → elder!` },
            { id: `l19-q5`, format: `fill-blank`,
              question: `New ___ keep starting their own life cycles — that's why life continues.`,
              options: [`generations`, `mountains`, `planets`, `meals`],
              correctIndex: 0,
              explanation: `Generations! Each generation continues the cycle. The unbroken chain of life!` },
            { id: `l19-q6`, format: `multiple-choice`,
              question: `Where do TADPOLES live? Where do ADULT FROGS live?`,
              options: [`Both in space`, `TADPOLES in WATER, ADULT FROGS on LAND`, `Both in trees`, `Both in caves`],
              correctIndex: 1,
              explanation: `Tadpoles live in water with gills. Adult frogs live on land with lungs. Metamorphosis changes everything!` },
          ],
        },

        {
          id: `l19-realworld`,
          type: `real-world`,
          guideText: `Here's something cool, {name}! Different living things have WILDLY different life cycle SPEEDS! A FRUIT FLY's whole life cycle takes 2 WEEKS! A MOUSE lives about 2 years! A CAT or DOG lives 12-15 years! HUMANS live 70-80+ years! ELEPHANTS live 60-70 years! WHALES can live 200 years! TREES can live for hundreds or even thousands of years! The OLDEST TREE on Earth is over 5,000 years old! Different speeds, same basic stages!`,
          familyAdventure: `Track a LIFE CYCLE together! Get a fast-growing seed (like a bean or sunflower)! Plant it in a cup of soil! Water it! Watch it sprout — see the seedling! As the plant grows, take photos every few days! Note the date! Over weeks, you'll see the WHOLE early life cycle of a plant happening right in your home! Real science!`,
          creativePrompt: `Pick your FAVORITE living thing — a person, pet, plant, or wild animal! Draw their LIFE CYCLE in 4 panels! Show them at: 1) Baby/start stage. 2) Young/growing stage. 3) Adult stage. 4) Elder stage (or the cycle continuing)! For a 3-sentence floor: write a sentence describing each of 3 stages. For a 5-sentence stretch: write about each of the 4 stages, plus one sentence about which stage looks most fun!`,
        },

        {
          id: `l19-celebration`,
          type: `celebration`,
          message: `Beautiful work, {name}! You now understand LIFE CYCLES! Every living thing goes through stages — from tiny start to full grown to next generation! PLANTS go from seed to flowering! BUTTERFLIES and FROGS go through METAMORPHOSIS! MAMMALS (like you) grow gradually through baby, child, adult, elder! And the cycle CONTINUES through generations for BILLIONS of years! You're part of that ancient chain of life! Cosmo is so splashy-proud! 🦦`,
          badge: `life-cycle-explorer`,
          badgeName: `Life Cycle Explorer`,
          xpEarned: 50,
        },

      ],
    },
  ],
};

export default SCIENCE_L19;

// ─── Dev asset check ─────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const mags = SCIENCE_L19.lessons[0].screens.filter(s => s.type === 'magazine').length;
  const game = SCIENCE_L19.lessons[0].screens.find(s => s.type === 'interactive')?.items?.length ?? 0;
  const quiz = SCIENCE_L19.lessons[0].screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  console.log(`[LESSON-SCIENCE-L19] Loaded: "Life Cycles" with ${mags} magazine sections, ${game} game items, ${quiz} quiz questions`);
}
