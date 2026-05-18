// ─────────────────────────────────────────────────────────────────────────────
// SCIENCE  |  L19 — Life Cycles: How Living Things Grow and Change
// Age band : explorers (6–8)   Guide: cosmo
// Standards: NGSS 3-LS1-1 (organisms have unique and diverse life cycles)
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
          guideText: `Hey {name}, Cosmo here! Every living thing on Earth — plants, animals, you — goes through STAGES of life. You started as a baby. You're growing into a kid. Then a teenager. Then an adult. Then an elder. That's your life CYCLE. Plants do it. Butterflies do it. Frogs do it. EVERY living thing has a life cycle. Today we'll explore some of the COOLEST ones. Let's go!`,
          headline: `Life Cycles: How Living Things Grow and Change`,
          subtitle: `Every living thing goes through stages — from tiny start to grown-up to making the next generation`,
          visual: `/explorer-assets/science/l19-welcome.webp`,
        },

        {
          id: `l19-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Everything Living CHANGES`,
          paragraphs: [
            `Remember from L03 — one of the signs of life is GROWTH. Every living thing GROWS.`,
            `But it's not just growing bigger — living things CHANGE. They start tiny and end up very different. A baby cat doesn't look like an adult cat. A seed doesn't look like a tree. A tadpole doesn't look like a frog. The CHANGES from start to end are called a LIFE CYCLE. Every living thing has one. Today you'll see life cycles of plants, butterflies, frogs, and mammals (like you). Each is amazing in its own way.`,
          ],
          image: `/explorer-assets/science/l19-s1-everything-changes.webp`,
          imageCaption: `Every living thing changes. From tiny start to grown-up to making the next generation. That's a LIFE CYCLE.`,
          vocab: [
            { word: `life cycle`,     definition: `The stages a living thing goes through — birth, growth, reproducing, dying.`,
              audioPrompt: `A life cycle, {name}, is the stages a living thing goes through — from birth to growth to reproducing to dying. Every living thing has one. Plants have life cycles. Animals have life cycles. So do humans. The stages happen in a CYCLE — meaning the offspring (new babies) start the cycle again. Life cycles repeat for as long as the species exists.` },
            { word: `stages`,         definition: `Different PHASES of life. STAGES include baby, child, adult, and elder.`,
              audioPrompt: `Stages, {name}, are different phases of life. A life cycle has stages. For humans — baby, child, teenager, adult, elder. For butterflies — egg, caterpillar, chrysalis, butterfly. For plants — seed, seedling, plant, flowering. Each stage looks different and does different things. Life unfolds in stages.` },
            { word: `change`,         definition: `To become DIFFERENT. Living things CHANGE through their life cycle.`,
              audioPrompt: `To change, {name}, is to become different. Living things change through their life cycle. They don't stay the same. From tiny to large. From simple to complex. From baby to adult. Change is one of the magical things about life. Without change, there'd be no growth, no learning, no new generations.` },
          ],
        },

        {
          id: `l19-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Plant Life Cycle`,
          paragraphs: [
            `Let's start with plants. The plant life cycle has FOUR main stages.`,
            `1) SEED — a tiny package containing all the instructions for a new plant. 2) SEEDLING — the seed sprouts and starts growing roots, stem, and first leaves. 3) PLANT — it grows bigger, gets stronger leaves, makes its own food through photosynthesis. 4) FLOWERING — when the plant is mature, it grows flowers, makes seeds, and those seeds will become new plants. Then the cycle starts again. Some plants live just a few months. Trees can live for HUNDREDS of years. But the cycle is the same. Seed → seedling → plant → flowering → new seeds.`,
          ],
          image: `/explorer-assets/science/l19-s2-plant-cycle.webp`,
          imageCaption: `Plant cycle: seed → seedling → plant → flowering → new seeds → seed → cycle continues.`,
          vocab: [
            { word: `seed`,           definition: `A tiny PACKAGE containing instructions for a new plant. The START of plant life.`,
              audioPrompt: `A seed, {name}, is a tiny package containing instructions for a new plant. It has all the genetic information needed to grow into the parent kind of plant. A tiny apple seed has the instructions for a whole apple tree. Seeds can stay dormant (waiting) for years. When they get water and warm soil, they sprout — and the life cycle begins.` },
            { word: `seedling`,       definition: `A young plant just SPROUTING from a seed. The baby stage of a plant.`,
              audioPrompt: `A seedling, {name}, is a young plant just sprouting from a seed. It's the baby stage of a plant. The seedling has just a few first leaves (called cotyledons) and tiny roots. It uses food stored in the seed to grow at first. Then it grows real leaves and starts making its own food. Seedlings are fragile — many don't survive — but the ones that do become full plants.` },
            { word: `flowering`,      definition: `When a plant makes FLOWERS. FLOWERING is the reproduction stage of plants.`,
              audioPrompt: `Flowering, {name}, is when a plant makes flowers. It's the reproduction stage. Flowers contain pollen and seeds. Bees and butterflies help carry pollen from flower to flower. Then seeds form inside the flowers or fruits. Once the seeds are ready, they fall to the ground or get carried somewhere by wind or animals. New plants grow from those seeds.` },
          ],
        },

        {
          id: `l19-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Butterfly Life Cycle: METAMORPHOSIS`,
          paragraphs: [
            `Now for one of the MOST AMAZING life cycles in nature — the BUTTERFLY.`,
            `Butterflies go through METAMORPHOSIS — a dramatic transformation. 1) EGG — a tiny egg laid by a mother butterfly on a leaf. 2) CATERPILLAR — egg hatches into a worm-like caterpillar that eats LOTS of leaves to grow. 3) CHRYSALIS — caterpillar forms a hard shell around itself, like a tiny cocoon. Inside the chrysalis, AMAZING things happen — the caterpillar's body completely transforms. 4) BUTTERFLY — when ready, the chrysalis opens and out comes a BEAUTIFUL butterfly with wings. The butterfly flies off, mates, and lays new eggs — starting the cycle again. It's nature's most dramatic transformation.`,
          ],
          image: `/explorer-assets/science/l19-s3-butterfly.webp`,
          imageCaption: `Butterfly cycle: egg → caterpillar → chrysalis → butterfly. Total transformation = metamorphosis.`,
          vocab: [
            { word: `metamorphosis`,  definition: `A DRAMATIC change in body shape during a life cycle. Butterflies go through METAMORPHOSIS.`,
              audioPrompt: `Metamorphosis, {name}, is a dramatic change in body shape during a life cycle. Butterflies do it. Frogs do it. The young form (caterpillar, tadpole) looks COMPLETELY different from the adult form (butterfly, frog). Inside the chrysalis or during the change, the body literally restructures itself. It's one of the most amazing processes in nature.` },
            { word: `caterpillar`,    definition: `The CHILD stage of a butterfly. Worm-like, eats lots of leaves.`,
              audioPrompt: `A caterpillar, {name}, is the child stage of a butterfly. It looks worm-like, with many tiny legs. Caterpillars eat lots and lots of leaves to grow. They can eat their body weight in food every day. As they grow, they shed their skin several times — like a snake — getting bigger each time. Eventually, when they're ready, they form a chrysalis and transform.` },
            { word: `chrysalis`,      definition: `A HARD SHELL the caterpillar forms around itself. Inside, transformation happens.`,
              audioPrompt: `A chrysalis, {name}, is a hard shell the caterpillar forms around itself. The caterpillar hangs from a branch and slowly creates this protective case. Inside, amazing things happen. The caterpillar's body BREAKS DOWN into a kind of soup, then REBUILDS into a butterfly. It takes about 2 weeks. Then the chrysalis cracks open, and out crawls a beautiful butterfly.` },
          ],
        },

        {
          id: `l19-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Frog Life Cycle: Another Metamorphosis`,
          paragraphs: [
            `Frogs also go through METAMORPHOSIS — but in water and on land.`,
            `1) EGG — a mother frog lays HUNDREDS of eggs in water (called frogspawn). 2) TADPOLE — eggs hatch into tadpoles — tiny fish-like creatures with TAILS and GILLS. They swim in water and eat algae. 3) GROWING TADPOLE — over weeks, the tadpole grows LEGS. First back legs. Then front legs. The tail starts shrinking. Gills disappear. Lungs grow. 4) FROG — finally, it climbs out of the water as a full FROG. It can breathe air, hop on land, and eat insects. Then it'll mate and lay eggs of its own. From egg to frog can take just a few months. From fish-like to land-living. That's a wild change.`,
          ],
          image: `/explorer-assets/science/l19-s4-frog.webp`,
          imageCaption: `Frog cycle: egg → tadpole (water) → growing legs → frog (land). Water-to-land transformation.`,
          vocab: [
            { word: `tadpole`,        definition: `The BABY stage of a frog. Looks like a fish, breathes through gills, swims.`,
              audioPrompt: `A tadpole, {name}, is the baby stage of a frog. It looks like a tiny fish. It breathes through gills underwater. It has a long tail for swimming. Tadpoles eat algae and plant material. They live entirely in water. Over weeks, they slowly transform — growing legs, shrinking their tail, developing lungs — until they become frogs.` },
            { word: `gills-to-lungs`, definition: `Tadpoles breathe through GILLS in water. Adult frogs breathe through LUNGS on land.`,
              audioPrompt: `Gills to lungs, {name} — tadpoles breathe through gills underwater. As they transform into frogs, they grow lungs. The gills disappear. Frogs can breathe air with lungs. This is a HUGE change. The tadpole was a water creature. The frog is a land creature (that can also swim). The transformation includes changing breathing systems entirely.` },
            { word: `water-to-land`,  definition: `Tadpoles live in WATER. Adult frogs live on LAND. A dramatic habitat change.`,
              audioPrompt: `Water to land, {name} — tadpoles live in water, swimming around. Adult frogs live on land, hopping around. That's a huge change of habitat. Their bodies, breathing, eating, and movement all adapt to land. Adult frogs can still swim in water, but they're truly land animals. Few life cycles have such a dramatic shift from one habitat to another.` },
          ],
        },

        {
          id: `l19-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Mammal Life Cycle: Gradual Growth`,
          paragraphs: [
            `Now for the kind of life cycle that includes YOU — MAMMALS.`,
            `Mammals don't do metamorphosis. Instead, they GROW GRADUALLY. 1) BABY — born small, often helpless. Drinks mother's milk. 2) CHILD — learns about the world, plays, grows fast. 3) ADULT — fully grown, can reproduce, raises children. 4) ELDER — has lived long, has wisdom from experience. Humans go through these stages. So do dogs, cats, otters, elephants, whales. Some mammals (like mice) live just a couple years. Some (like humans and whales) live for many decades. Some (like elephants) live up to 70 years. Same basic stages — different time spans.`,
          ],
          image: `/explorer-assets/science/l19-s5-mammals.webp`,
          imageCaption: `Mammal cycle: baby → child → adult → elder. Gradual growth, no metamorphosis. Humans included.`,
          vocab: [
            { word: `gradual growth`, definition: `Slow, steady CHANGE. Mammals grow GRADUALLY without dramatic metamorphosis.`,
              audioPrompt: `Gradual growth, {name}, is slow, steady change. Mammals grow gradually. There's no dramatic moment of transformation. Day by day, week by week, year by year, mammals get bigger and develop. A baby slowly becomes a child. A child slowly becomes an adult. The body changes slowly enough that you can't see it day-to-day — but compare a baby photo to a teen photo, and the difference is amazing.` },
            { word: `baby`,           definition: `The FIRST STAGE for mammals. BABIES are small, helpless, depend on parents.`,
              audioPrompt: `A baby, {name}, is the first stage for mammals. Babies are small, often helpless, and depend on parents for everything. They drink milk from their mothers. They learn slowly. They sleep a lot. They grow incredibly fast — much faster than at any other stage. The baby stage is when mammals develop the foundation for everything else.` },
            { word: `elder`,          definition: `The OLDEST stage of life. ELDERS have lived long and have wisdom.`,
              audioPrompt: `An elder, {name}, is the oldest stage of life. Elders have lived through many years and have wisdom from all their experiences. In many human cultures, elders are highly respected and teach the younger generations what they've learned. Elder mammals — like elder elephants — also pass on knowledge to their families. Old age can be a beautiful, important stage of life.` },
          ],
        },

        {
          id: `l19-mag-6`,
          type: `magazine`,
          section: 6,
          headline: `The Cycle Continues`,
          paragraphs: [
            `Every life cycle ends. But life DOESN'T end with one cycle — because new GENERATIONS keep starting their own.`,
            `A plant dies, but its seeds become new plants. A butterfly dies, but its eggs become new butterflies. A frog dies, but its tadpoles become new frogs. A human dies, but their children carry on. Life on Earth has been continuing this way for BILLIONS of years. Every living thing today came from generations and generations before them — and will (if successful) lead to more generations. You are part of an unbroken chain stretching back to the very beginning of life. That's pretty amazing.`,
          ],
          image: `/explorer-assets/science/l19-s6-cycle-continues.webp`,
          imageCaption: `Cycles continue. New generations carry life forward. You're part of an unbroken chain going back BILLIONS of years.`,
          vocab: [
            { word: `generation`,     definition: `One LEVEL of family — like grandparents, parents, children. Each is a GENERATION.`,
              audioPrompt: `A generation, {name}, is one level of family — like grandparents, parents, children. Each is a generation. Different generations have different ages and experiences. Generations of life have been continuing on Earth for billions of years. Every living thing today has thousands of generations of ancestors. The unbroken chain of generations is what life is.` },
            { word: `chain of life`,  definition: `The UNBROKEN line of generations connecting all living things back through time.`,
              audioPrompt: `The chain of life, {name}, is the unbroken line of generations connecting all living things back through time. Every living thing today is part of this chain. Your parents are your link. Their parents — your grandparents — are theirs. Going back and back through millions of years to the very first life on Earth. You're connected to ALL of life through this chain.` },
            { word: `continues`,      definition: `Keeps GOING. Life CONTINUES through new generations.`,
              audioPrompt: `Continues, {name}, means keeps going. Life continues through new generations. One life ends, another begins. The seeds fall and grow. The eggs hatch and grow. The babies are born and grow. The cycle never stops. Even when we don't see it directly — life is constantly continuing, all over Earth, in countless ways.` },
          ],
        },

        {
          id: `l19-game`,
          type: `interactive`,
          format: `drag-match`,
          guideText: `Let's see what you remember, {name}.`,
          buckets: [
            { id: `fact`, label: `✅ Yes, that's true!`, color: `#34D399` },
            { id: `myth`, label: `❌ No way!`,         color: `#F87171` },
          ],
          items: [
            { id: `l19-g1`, image: `l19-game-1.webp`, label: `Every living thing GROWS and CHANGES through stages — plants, animals, humans, all have life cycles.`,
              matchPhrase: `Yes! Every living thing has a life cycle. From tiny start to mature adult. Plants grow from seeds. Animals from babies. Humans too. Growth and change are universal in nature.`,
              correctMatch: `fact` },
            { id: `l19-g2`, image: `l19-game-2.webp`, label: `Butterflies and frogs go through METAMORPHOSIS — totally transforming their bodies during life cycles.`,
              matchPhrase: `True! Butterflies transform from caterpillars. Frogs transform from tadpoles. Their bodies completely change shape — different breathing, different habitats, different ways of moving. Dramatic transformation.`,
              correctMatch: `fact` },
            { id: `l19-g3`, image: `l19-game-3.webp`, label: `Living things are BORN as fully grown adults — no baby stage or growing process needed.`,
              matchPhrase: `Not at all! Every living thing starts small and grows. Babies, seedlings, tadpoles, caterpillars. None of them start as adults. Growing through stages is one of the universal features of life.`,
              correctMatch: `myth` },
            { id: `l19-g4`, image: `l19-game-4.webp`, label: `Life cycles STOP after the first generation — no new babies or new generations ever happen.`,
              matchPhrase: `Definitely not! Life cycles continue through generations. Seeds become new plants. Eggs become new butterflies. Babies become parents who have babies. Life has been continuing for billions of years.`,
              correctMatch: `myth` },
          ],
        },

        {
          id: `l19-quiz`,
          type: `quiz`,
          guideText: `Let's see what you remember, {name}.`,
          questions: [
            { id: `l19-q1`, format: `multiple-choice`,
              question: `What is a LIFE CYCLE?`,
              options: [`A type of bicycle`, `The STAGES a living thing goes through — birth, growth, reproducing, dying`, `A music cycle`, `Only what plants do`],
              correctIndex: 1,
              explanation: `A life cycle is the stages a living thing goes through. Every living thing has one. Each stage looks different and does different things. Then new generations start the cycle again.` },
            { id: `l19-q2`, format: `multiple-choice`,
              question: `What's the FIRST stage of a plant's life cycle?`,
              options: [`The flower`, `The SEED — contains instructions for a new plant`, `The fruit`, `The root`],
              correctIndex: 1,
              explanation: `Seed! It's a tiny package with all the instructions for a new plant. When it gets water and warmth, it sprouts and becomes a seedling. Then it grows into a full plant.` },
            { id: `l19-q3`, format: `multiple-choice`,
              question: `What is METAMORPHOSIS?`,
              options: [`A type of star`, `A DRAMATIC change in body shape during a life cycle (like butterflies and frogs)`, `A type of music`, `A type of food`],
              correctIndex: 1,
              explanation: `Metamorphosis is a dramatic change in body shape during a life cycle. Butterflies do it (caterpillar → butterfly). Frogs do it (tadpole → frog). Their bodies literally restructure.` },
            { id: `l19-q4`, format: `true-false`,
              question: `Mammals (like humans, dogs, cats) grow GRADUALLY — without dramatic metamorphosis.`,
              correctAnswer: true,
              explanation: `True! Mammals don't transform like butterflies or frogs. They grow gradually — day by day, year by year. Baby → child → adult → elder. Slow, steady growth.` },
            { id: `l19-q5`, format: `fill-blank`,
              question: `New ___ keep starting their own life cycles — that's why life continues.`,
              options: [`generations`, `mountains`, `planets`, `meals`],
              correctIndex: 0,
              explanation: `Generations! Each generation continues the cycle. Plants make new seeds. Animals have babies. The unbroken chain of generations is what makes life keep going.` },
            { id: `l19-q6`, format: `multiple-choice`,
              question: `In what habitat do TADPOLES live? Where do ADULT FROGS live?`,
              options: [`Both in space`, `TADPOLES in WATER, ADULT FROGS on LAND`, `Both in trees`, `Both in caves`],
              correctIndex: 1,
              explanation: `Tadpoles live in water (with gills like fish). Adult frogs live on land (with lungs). The transformation from tadpole to frog involves changing habitats AND ways of breathing.` },
          ],
        },

        {
          id: `l19-realworld`,
          type: `real-world`,
          guideText: `Here's something cool, {name}. Different living things have WILDLY different life cycle SPEEDS. A FRUIT FLY's whole life cycle takes 2 WEEKS. A MOUSE lives about 2 years. A CAT or DOG lives 12-15 years. HUMANS live 70-80+ years. ELEPHANTS live 60-70 years. WHALES can live 200 years. TREES can live for hundreds or even thousands of years. The OLDEST TREE on Earth is over 5,000 years old! Different speeds, same basic stages. Every living thing is going through its own cycle right now — including you.`,
          familyAdventure: `Track a LIFE CYCLE together. Get a fast-growing seed (like a bean or sunflower). Plant it in a cup of soil. Water it. Watch it sprout — see the seedling. Watch the leaves form. As the plant grows, take photos every few days. Note the date. Over weeks, you'll see the WHOLE early life cycle of a plant happening right in your home. Real science, real life cycle.`,
          creativePrompt: `Pick your FAVOURITE living thing — a person, pet, plant, or wild animal. Draw their LIFE CYCLE in 4 panels. Show them at: 1) Baby/start stage. 2) Young/growing stage. 3) Adult stage. 4) Elder stage (or the cycle continuing with their offspring). Label each stage. See how dramatic the changes are across one life.`,
        },

        {
          id: `l19-celebration`,
          type: `celebration`,
          message: `Beautiful work, {name}! You now understand LIFE CYCLES. Every living thing goes through stages — from tiny start to full grown to next generation. PLANTS go from seed to flowering. BUTTERFLIES and FROGS go through METAMORPHOSIS (dramatic transformation). MAMMALS (like you) grow gradually through baby, child, adult, elder. And the cycle CONTINUES through generations — for BILLIONS of years and counting. You're part of that ancient chain of life. See you next lesson!`,
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
  const mags  = SCIENCE_L19.lessons[0].screens.filter(s => s.type === 'magazine').length;
  const game  = SCIENCE_L19.lessons[0].screens.find(s => s.type === 'interactive')?.items?.length ?? 0;
  const quiz  = SCIENCE_L19.lessons[0].screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  console.log(`[LESSON-SCIENCE-L19] Loaded: "Life Cycles" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
}
