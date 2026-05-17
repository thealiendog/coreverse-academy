// ─────────────────────────────────────────────────────────────────────────────
// SCIENCE  |  L03 — Living and Non-Living Things
// Age band : explorers (6–8)   Guide: cosmo
// Standards: NGSS K-LS1-1 (patterns of what plants and animals need to survive)
// ─────────────────────────────────────────────────────────────────────────────

const SCIENCE_L03 = {
  ageBand:   `explorers`,
  subjectId: `science`,
  guide:     `cosmo`,

  lessons: [
    {
      id:        `science-6-8-03`,
      title:     `Living and Non-Living Things`,
      duration:  12,
      xpReward:  50,
      badge:     `living-things-explorer`,
      badgeName: `Living Things Explorer`,

      screens: [

        {
          id: `l03-welcome`,
          type: `welcome`,
          guideText: `Hey {name}, Cosmo here! Look around. Some things are ALIVE — trees, ants, you, me. Other things are NOT ALIVE — rocks, chairs, water, the sun. Science calls them LIVING and NON-LIVING. But how do you TELL the difference? Today we'll learn the FIVE big signs of life. Once you know them, you can tell living from non-living anywhere in the world. Let's go!`,
          headline: `Living and Non-Living Things`,
          subtitle: `How scientists tell what's ALIVE from what's not`,
          visual: `/explorer-assets/science/l03-welcome.webp`,
        },

        {
          id: `l03-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Two Big Groups`,
          paragraphs: [
            `Scientists divide the world into TWO HUGE GROUPS — LIVING things and NON-LIVING things.`,
            `LIVING things include plants, animals, people, fish, insects, mushrooms, even tiny germs. NON-LIVING things include rocks, chairs, water, metal, air, the sun, your phone. But here's the cool part — sometimes it's TRICKY to tell. Is a leaf living or non-living? What about a seed? An egg? A piece of bread? Today we'll learn the rules scientists use to decide.`,
          ],
          image: `/explorer-assets/science/l03-s1-two-groups.webp`,
          imageCaption: `Two big groups: LIVING (plants, animals, people) and NON-LIVING (rocks, water, chairs).`,
          vocab: [
            { word: `living`,         definition: `Alive. Plants, animals, and people are LIVING things.`,
              audioPrompt: `Living, {name}, means alive. Plants, animals, people, fish, bugs, even tiny bacteria — all living things. Living things share some special signs that we'll learn today. Once you know the signs, you can spot living things anywhere — from the top of mountains to the bottom of the ocean.` },
            { word: `non-living`,     definition: `Not alive. Rocks, water, chairs, the sun are NON-LIVING things.`,
              audioPrompt: `Non-living, {name}, means not alive. Rocks, water, sand, chairs, cars, your phone — all non-living. Non-living things don't have the special signs of life. They can be useful, beautiful, or even powerful — but they're not alive. Scientists learn to tell the difference quickly.` },
            { word: `groups`,         definition: `Categories. Scientists sort the world into GROUPS to study it.`,
              audioPrompt: `Groups, {name}, are categories. Scientists love groups. They sort the whole world into them. Living and non-living. Plants and animals. Liquids and solids. Sorting things into groups helps scientists notice patterns. It makes the world easier to understand.` },
          ],
        },

        {
          id: `l03-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Sign 1: Need Food and Water`,
          paragraphs: [
            `The FIRST sign of life — living things NEED FOOD AND WATER to survive.`,
            `You eat. You drink. Your pet does too. Plants drink water through their roots and "eat" sunlight (we'll learn how later). All living things need ENERGY from food and water. Without them, they die. Rocks? They don't eat. They don't drink. They sit there forever, the same. Chairs don't get hungry. Water doesn't drink water. Needing food and water is a HUGE clue that something is alive.`,
          ],
          image: `/explorer-assets/science/l03-s2-needs-food-water.webp`,
          imageCaption: `Sign 1: Living things need food and water. Rocks don't eat. Cars don't drink. Living things do.`,
          vocab: [
            { word: `food`,           definition: `What gives living things energy. All living things NEED FOOD.`,
              audioPrompt: `Food, {name}, is what gives living things energy. You eat to grow and play. Your pet eats. Plants make their own food from sunlight. Even tiny bacteria need food. Without food, living things can't keep going. Energy from food keeps them alive.` },
            { word: `water`,          definition: `What every living thing needs to survive. WATER is essential to life.`,
              audioPrompt: `Water, {name}, is what every living thing needs to survive. Animals drink it. Plants pull it from the ground. Even your body is mostly water. Without it, living things die in just a few days. Scientists looking for life on other planets always look for water first.` },
            { word: `energy`,         definition: `The power to do things. Food and water give living things ENERGY.`,
              audioPrompt: `Energy, {name}, is the power to do things. Run. Grow. Think. Move. Heal. Living things get their energy from food and water. Non-living things don't need energy that way. They sit still — or move only when something else pushes them. Living things use energy from inside.` },
          ],
        },

        {
          id: `l03-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Sign 2: GROW Over Time`,
          paragraphs: [
            `The SECOND sign — living things GROW.`,
            `You started as a tiny baby. Now you're bigger. You'll grow more. Same with plants — a seed becomes a sprout, then a tall plant. Same with animals — a kitten becomes a cat. Same with trees — an acorn becomes a giant oak. All living things grow. Non-living things? They don't grow. A rock doesn't become a bigger rock by itself. A chair doesn't grow into a giant chair. Growth is a big sign of life.`,
          ],
          image: `/explorer-assets/science/l03-s3-grow.webp`,
          imageCaption: `Sign 2: Living things grow. Seeds become plants. Babies become big. Living things change size.`,
          vocab: [
            { word: `grow`,           definition: `To get bigger or change over time. Living things GROW.`,
              audioPrompt: `To grow, {name}, is to get bigger or change over time. All living things grow. From small to bigger. From simple to more complex. From baby to adult. Growing is how living things develop. It happens with food, water, and time. Non-living things stay the same — or break down. They don't grow.` },
            { word: `change`,         definition: `To become different. Living things CHANGE as they grow.`,
              audioPrompt: `To change, {name}, is to become different. Living things change as they grow. A caterpillar turns into a butterfly. A seed turns into a tree. A baby turns into a kid. Each change is part of being alive. Living things never stay exactly the same. They're always changing.` },
            { word: `over time`,      definition: `Across many days or years. Growth happens OVER TIME, slowly.`,
              audioPrompt: `Over time, {name}, means across many days or years. Growth happens over time. Slowly. You don't notice yourself growing today — but compare a photo of you from a year ago, and you can see it. Same with plants. Same with animals. Living things change slowly. Patience reveals their growth.` },
          ],
        },

        {
          id: `l03-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Sign 3: Make More of Themselves`,
          paragraphs: [
            `The THIRD sign — living things make MORE LIVING THINGS like themselves. Scientists call this REPRODUCING.`,
            `Dogs have puppies. Cats have kittens. Birds lay eggs. Plants make seeds. People have babies. Even tiny bacteria split themselves to make more bacteria. Living things keep their kind going by making MORE of themselves. Non-living things can't do this. A rock can't make a baby rock. A car can't have car-children. (Cars get BUILT by humans — that's different.) Reproducing is a clear sign of life.`,
          ],
          image: `/explorer-assets/science/l03-s4-reproduce.webp`,
          imageCaption: `Sign 3: Living things make MORE of themselves. Puppies, kittens, seeds, babies. Rocks can't.`,
          vocab: [
            { word: `reproduce`,      definition: `To make more of your own kind. Living things REPRODUCE.`,
              audioPrompt: `To reproduce, {name}, is to make more of your own kind. Dogs make puppies. Plants make seeds. Birds lay eggs that hatch into baby birds. People have babies. This is how every kind of living thing keeps going generation after generation. Without reproduction, the kind would disappear.` },
            { word: `seeds`,          definition: `Tiny living things plants make to grow new plants. Plants REPRODUCE with seeds.`,
              audioPrompt: `Seeds, {name}, are tiny living things plants make to grow new plants. Apples have seeds. Sunflowers have seeds. So do oak trees — their seeds are acorns. When a seed falls in the right place with water and sun, it grows into a new plant. Seeds are how most plants reproduce.` },
            { word: `babies`,         definition: `Young living things just starting out. Animals make BABIES; plants make seeds.`,
              audioPrompt: `Babies, {name}, are young living things just starting out. Baby animals — like puppies, kittens, ducklings, lambs. Baby humans — that's you, not too long ago. Every adult living thing was once a baby. Reproduction is how the cycle keeps going. New babies grow up into adults who make more babies.` },
          ],
        },

        {
          id: `l03-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Sign 4: Respond to Surroundings`,
          paragraphs: [
            `The FOURTH sign — living things RESPOND to what's around them.`,
            `Touch a plant — its leaves might fold up. Make a loud noise — a dog turns toward you. Sun comes out — flowers open. Cold weather comes — animals grow thicker fur. Living things NOTICE their world and REACT. Non-living things don't react like this. Throw a rock — it just falls. It doesn't try to dodge or get scared. Living things have something rocks don't — the ability to SENSE and RESPOND.`,
          ],
          image: `/explorer-assets/science/l03-s5-respond.webp`,
          imageCaption: `Sign 4: Living things respond. Plants lean toward sun. Animals react to sounds. Life notices.`,
          vocab: [
            { word: `respond`,        definition: `To react to something. Living things RESPOND to their surroundings.`,
              audioPrompt: `To respond, {name}, is to react to something. Living things respond. Touch a sensitive plant — it folds up. Yell — a cat jumps. Pour water on a flower — it perks up. Each response shows that something inside the living thing is paying attention. Non-living things can't do this. They don't 'notice' anything.` },
            { word: `react`,          definition: `To answer back when something happens. Living things REACT.`,
              audioPrompt: `To react, {name}, means to answer back when something happens. You react to a hot stove by pulling your hand back. A dog reacts to a treat by wagging its tail. A plant reacts to sunlight by leaning toward it. Reactions show that living things sense their surroundings and respond on purpose.` },
            { word: `sense`,          definition: `To detect what's around you. Living things SENSE the world.`,
              audioPrompt: `To sense, {name}, is to detect what's around you. Living things sense their world — using sight, sound, touch, smell, taste, or other senses. Plants sense light and water. Animals sense danger and food. People sense everything. Sensing comes BEFORE responding. First you notice. Then you react.` },
          ],
        },

        {
          id: `l03-mag-6`,
          type: `magazine`,
          section: 6,
          headline: `What About Once-Living Things?`,
          paragraphs: [
            `Now here's a tricky case. What about things that WERE alive but aren't anymore?`,
            `A fallen leaf. A piece of wood. A seashell. A feather. These were once parts of living things. But once they fall off, they STOP being alive. We call these ONCE-LIVING things. They're not living anymore (they don't grow, eat, or reproduce). But they came FROM something living. Different from non-living things like rocks, which were never alive at all. Three categories now: LIVING, NON-LIVING, ONCE-LIVING. Cool, right?`,
          ],
          image: `/explorer-assets/science/l03-s6-once-living.webp`,
          imageCaption: `Once-living things: fallen leaves, wood, shells. Not alive now — but came from something alive.`,
          vocab: [
            { word: `once-living`,    definition: `Something that used to be alive but isn't anymore. Like a fallen leaf.`,
              audioPrompt: `Once-living, {name}, means something that used to be alive but isn't anymore. A fallen leaf. A piece of wood. A seashell. They were part of a living thing once, but once they're separated and stop functioning, they're no longer alive. Different from rocks, which were never alive at all.` },
            { word: `was alive`,      definition: `Used to be alive at some time. Once-living things WERE ALIVE before.`,
              audioPrompt: `Was alive, {name}, means used to be alive at some time. A piece of wood was once part of a living tree. A seashell was once made by a living snail. These things have a history of life. Then something changed — the leaf fell, the snail died, the wood got cut. After that, they became once-living.` },
            { word: `categories`,     definition: `Different types or groups. Now we have THREE categories — living, non-living, once-living.`,
              audioPrompt: `Categories, {name}, are different types or groups. Scientists love categories. Now we have three for our world: living things, non-living things, and once-living things. Each has its own rules. Sorting things into categories helps you understand them. The whole world becomes easier to think about.` },
          ],
        },

        {
          id: `l03-game`,
          type: `interactive`,
          format: `drag-match`,
          guideText: `Let's see what you remember, {name}.`,
          buckets: [
            { id: `fact`, label: `✅ Yes, that's true!`, color: `#34D399` },
            { id: `myth`, label: `❌ No way!`,         color: `#F87171` },
          ],
          items: [
            { id: `l03-g1`, image: `l03-game-1.webp`, label: `Living things GROW — they get bigger and change over time.`,
              matchPhrase: `Yes! Seeds become plants. Babies become kids. Kittens become cats. All living things grow. Non-living things stay the same size by themselves.`,
              correctMatch: `fact` },
            { id: `l03-g2`, image: `l03-game-2.webp`, label: `Living things need WATER to survive.`,
              matchPhrase: `True! Every living thing needs water. Animals drink it. Plants pull it from the ground. Without water, living things die in days. Scientists looking for life on other planets always look for water first.`,
              correctMatch: `fact` },
            { id: `l03-g3`, image: `l03-game-3.webp`, label: `Rocks are ALIVE because they exist and have shapes.`,
              matchPhrase: `Definitely not! Rocks don't eat. Don't drink. Don't grow. Don't reproduce. Don't respond. They're non-living. They've never been alive. Existing isn't the same as being alive.`,
              correctMatch: `myth` },
            { id: `l03-g4`, image: `l03-game-4.webp`, label: `Cars are alive — they grow from baby cars and have car families.`,
              matchPhrase: `No way! Cars don't grow. They get BUILT by humans. They don't reproduce, eat, or respond on their own. Cars move, but they need humans to drive them. Cars are non-living.`,
              correctMatch: `myth` },
          ],
        },

        {
          id: `l03-quiz`,
          type: `quiz`,
          guideText: `Let's see what you remember, {name}.`,
          questions: [
            { id: `l03-q1`, format: `multiple-choice`,
              question: `Which of these is a LIVING thing?`,
              options: [`A rock`, `A puppy`, `A chair`, `A glass of water`],
              correctIndex: 1,
              explanation: `A puppy! It eats, drinks, grows, responds, and (when grown up) can reproduce. All five signs of life. Rocks, chairs, and water don't do these things.` },
            { id: `l03-q2`, format: `multiple-choice`,
              question: `What do ALL living things need to survive?`,
              options: [`Wi-Fi and video games`, `Food and water`, `Only sunlight`, `Nothing — they just exist`],
              correctIndex: 1,
              explanation: `Food and water! Every living thing needs these. They give energy. Without them, living things die. It's the first sign of life.` },
            { id: `l03-q3`, format: `multiple-choice`,
              question: `Living things GROW over time. What's an example?`,
              options: [`A rock stays the same shape forever`, `A seed becoming a tree, a baby becoming an adult`, `A chair gets older but stays the same`, `Water stays as water`],
              correctIndex: 1,
              explanation: `Seeds becoming trees, babies becoming adults — that's growth. Living things change over time. Non-living things stay the same.` },
            { id: `l03-q4`, format: `true-false`,
              question: `Living things can make MORE of their own kind — like puppies, seeds, or babies.`,
              correctAnswer: true,
              explanation: `True! Living things reproduce. Dogs make puppies. Plants make seeds. People have babies. Non-living things can't make more of themselves.` },
            { id: `l03-q5`, format: `fill-blank`,
              question: `A fallen leaf is called ___-living — it used to be alive, but isn't now.`,
              options: [`once`, `super`, `never`, `always`],
              correctIndex: 0,
              explanation: `Once-living! A fallen leaf was once part of a living tree. After it falls, it's no longer alive — but it came from something alive. Different from rocks, which were never alive.` },
            { id: `l03-q6`, format: `multiple-choice`,
              question: `What does it mean when scientists say living things "RESPOND" to their surroundings?`,
              options: [`They send emails`, `They sense and react to what's around them — like a plant leaning toward the sun`, `They write letters`, `They sleep all day`],
              correctIndex: 1,
              explanation: `They sense and react! A plant leans toward sun. A dog turns when called. Living things notice their world. Non-living things don't.` },
          ],
        },

        {
          id: `l03-realworld`,
          type: `real-world`,
          guideText: `Here's something cool, {name}. Scientists looking for life on OTHER PLANETS use these exact same rules. When they study Mars, they look for water. They look for growth patterns. They look for signs of things RESPONDING to surroundings. Just like you, but with billion-dollar telescopes and rovers! The five signs of life you just learned are the SAME ones scientists use across the entire universe. You're thinking like a real astrobiologist now.`,
          familyAdventure: `Take a HOUSEHOLD LIFE WALK. Walk around your home — inside and outside if possible. As a family, point at things and say "LIVING," "NON-LIVING," or "ONCE-LIVING." A plant: LIVING. A chair: NON-LIVING. The wood floor: ONCE-LIVING (came from a tree!). Make it a game. Count how many of each you find. Notice — once-living things are everywhere.`,
          creativePrompt: `On a piece of paper, draw THREE columns. Label them LIVING, NON-LIVING, and ONCE-LIVING. Fill each column with at least 5 things you can think of. (LIVING: dog, tree, ant, you, fish. NON-LIVING: rock, water, chair, sun, metal. ONCE-LIVING: paper, wood, leather, leaf, seashell.) See how the whole world fits into these three groups.`,
        },

        {
          id: `l03-celebration`,
          type: `celebration`,
          message: `YES, {name}! You can now spot LIVING things, NON-LIVING things, and ONCE-LIVING things. You know the FIVE signs of life — needs food/water, grows, makes more of itself, responds to surroundings, and (we'll learn more later) is made of cells. These rules work on Earth — and even on Mars. You're thinking like a real biologist. See you next lesson!`,
          badge: `living-things-explorer`,
          badgeName: `Living Things Explorer`,
          xpEarned: 50,
        },

      ],
    },
  ],
};

export default SCIENCE_L03;

// ─── Dev asset check ─────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const mags  = SCIENCE_L03.lessons[0].screens.filter(s => s.type === 'magazine').length;
  const game  = SCIENCE_L03.lessons[0].screens.find(s => s.type === 'interactive')?.items?.length ?? 0;
  const quiz  = SCIENCE_L03.lessons[0].screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  console.log(`[LESSON-SCIENCE-L03] Loaded: "Living and Non-Living Things" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
}
