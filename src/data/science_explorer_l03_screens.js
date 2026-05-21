// ─────────────────────────────────────────────────────────────────────────────
// SCIENCE  |  L03 — Living and Non-Living Things
// Age band : explorers (6–8)   Guide: cosmo
// Standards: NGSS K-LS1-1
// REWRITE v2 (May 2026): Grade 1 accessible, LIVING / NON-LIVING / ONCE-LIVING
// 3-bucket identification game — the textbook L13 sort
// (Schema clean from source. Added Cosmo 🦦 sign-off to celebration message)
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
          guideText: `Hey {name}, Cosmo here! Look around! Some things are ALIVE — trees, ants, you, me! Other things are NOT ALIVE — rocks, chairs, water, the sun! Science calls them LIVING and NON-LIVING! But how do you TELL? Today we learn the FIVE BIG SIGNS OF LIFE!`,
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
            `Scientists divide the world into TWO HUGE GROUPS — LIVING things and NON-LIVING things!`,
            `LIVING things include plants, animals, people, fish, insects, mushrooms, even tiny germs! NON-LIVING things include rocks, chairs, water, metal, air, the sun, your phone! But here's the cool part — sometimes it's TRICKY to tell! Is a leaf living or non-living? What about a seed? An egg? A piece of bread? Today we learn the rules scientists use!`,
          ],
          image: `/explorer-assets/science/l03-s1-two-groups.webp`,
          imageCaption: `Two big groups: LIVING (plants, animals) and NON-LIVING (rocks, water, chairs)!`,
          vocab: [
            { word: `living`,     definition: `Alive.`,
              audioPrompt: `Living means alive. Plants, animals, people, fish, bugs, even tiny bacteria — all living! Living things share special signs we'll learn today. Once you know the signs, you can spot life anywhere!` },
            { word: `non-living`, definition: `Not alive.`,
              audioPrompt: `Non-living means not alive. Rocks, water, sand, chairs, cars, your phone — all non-living! Non-living things don't have the special signs of life. They can be useful — but they're not alive!` },
            { word: `groups`,     definition: `Categories scientists sort things into.`,
              audioPrompt: `Groups are categories. Scientists love groups. They sort the whole world into them. Living and non-living. Plants and animals. Sorting helps scientists notice patterns. Makes the world easier!` },
          ],
        },

        {
          id: `l03-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Sign 1: Need Food and Water`,
          paragraphs: [
            `The FIRST sign of life — living things NEED FOOD AND WATER to survive!`,
            `You eat! You drink! Your pet does too! Plants drink water through their roots and "eat" sunlight (we'll learn how later)! All living things need ENERGY from food and water. Without them, they die! Rocks? They don't eat. They don't drink. They sit there forever, the same. Chairs don't get hungry. Water doesn't drink water. Needing food and water is a HUGE clue!`,
          ],
          image: `/explorer-assets/science/l03-s2-needs-food-water.webp`,
          imageCaption: `Sign 1: Living things need food and water. Rocks don't!`,
          vocab: [
            { word: `food`,   definition: `What gives living things energy.`,
              audioPrompt: `Food is what gives living things energy. You eat to grow and play. Your pet eats. Plants make their own food from sunlight. Even tiny bacteria need food. Without food, living things can't keep going!` },
            { word: `water`,  definition: `What every living thing needs to survive.`,
              audioPrompt: `Water is what every living thing needs to survive. Animals drink it. Plants pull it from the ground. Even your body is mostly water. Scientists looking for life on other planets always look for water first!` },
            { word: `energy`, definition: `The power to do things.`,
              audioPrompt: `Energy is the power to do things. Run. Grow. Think. Move. Living things get their energy from food and water. Non-living things don't need energy that way. They sit still!` },
          ],
        },

        {
          id: `l03-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Sign 2: GROW Over Time`,
          paragraphs: [
            `The SECOND sign — living things GROW!`,
            `You started as a tiny baby. Now you're bigger. You'll grow more! Same with plants — a seed becomes a sprout, then a tall plant! Same with animals — a kitten becomes a cat! Same with trees — an acorn becomes a giant oak! All living things grow. Non-living things? They don't grow. A rock doesn't become a bigger rock by itself! Growth is a big sign of life!`,
          ],
          image: `/explorer-assets/science/l03-s3-grow.webp`,
          imageCaption: `Sign 2: Living things grow! Seeds become plants. Babies become big!`,
          vocab: [
            { word: `grow`,      definition: `To get bigger or change over time.`,
              audioPrompt: `To grow is to get bigger or change over time. All living things grow. From small to bigger. From baby to adult. Growing happens with food, water, and time. Non-living things stay the same!` },
            { word: `change`,    definition: `To become different.`,
              audioPrompt: `To change is to become different. Living things change as they grow. A caterpillar turns into a butterfly. A seed turns into a tree. Each change is part of being alive!` },
            { word: `over time`, definition: `Across many days or years.`,
              audioPrompt: `Over time means across many days or years. Growth happens over time. Slowly. You don't notice yourself growing today. But compare a photo from a year ago — you can see it!` },
          ],
        },

        {
          id: `l03-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Sign 3: Make More of Themselves`,
          paragraphs: [
            `The THIRD sign — living things make MORE LIVING THINGS like themselves! Scientists call this REPRODUCING!`,
            `Dogs have puppies! Cats have kittens! Birds lay eggs! Plants make seeds! People have babies! Even tiny bacteria split themselves to make more bacteria! Living things keep their kind going by making MORE of themselves! Non-living things can't do this. A rock can't make a baby rock. A car can't have car-children! (Cars get BUILT by humans — that's different!) Reproducing is a clear sign of life!`,
          ],
          image: `/explorer-assets/science/l03-s4-reproduce.webp`,
          imageCaption: `Sign 3: Living things make MORE of themselves!`,
          vocab: [
            { word: `reproduce`, definition: `To make more of your own kind.`,
              audioPrompt: `To reproduce is to make more of your own kind. Dogs make puppies. Plants make seeds. People have babies. This is how every kind of living thing keeps going. Without it, the kind would disappear!` },
            { word: `seeds`,     definition: `Tiny living things plants make.`,
              audioPrompt: `Seeds are tiny living things plants make to grow new plants. Apples have seeds. Sunflowers have seeds. So do oak trees — their seeds are acorns. When a seed falls in good dirt, a new plant grows!` },
            { word: `babies`,    definition: `Young living things just starting out.`,
              audioPrompt: `Babies are young living things just starting out. Baby animals like puppies and kittens. Baby humans — that's you, not long ago. Every adult living thing was once a baby!` },
          ],
        },

        {
          id: `l03-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Sign 4: Respond to Surroundings`,
          paragraphs: [
            `The FOURTH sign — living things RESPOND to what's around them!`,
            `Touch a plant — its leaves might fold up! Make a loud noise — a dog turns toward you! Sun comes out — flowers open! Cold weather comes — animals grow thicker fur! Living things NOTICE their world and REACT! Non-living things don't react like this. Throw a rock — it just falls. It doesn't try to dodge! Living things have something rocks don't — the ability to SENSE and RESPOND!`,
          ],
          image: `/explorer-assets/science/l03-s5-respond.webp`,
          imageCaption: `Sign 4: Living things respond! Plants lean toward sun. Animals react to sounds!`,
          vocab: [
            { word: `respond`, definition: `To react to something.`,
              audioPrompt: `To respond is to react to something. Touch a sensitive plant — it folds up. Yell — a cat jumps. Pour water on a flower — it perks up. Each response shows something is paying attention!` },
            { word: `react`,   definition: `To answer back when something happens.`,
              audioPrompt: `To react means to answer back when something happens. You react to a hot stove by pulling your hand back. A dog reacts to a treat by wagging its tail. Reactions show living things sense their world!` },
            { word: `sense`,   definition: `To detect what's around you.`,
              audioPrompt: `To sense is to detect what's around you. Living things sense their world. Plants sense light and water. Animals sense danger and food. Sensing comes BEFORE responding. First notice. Then react!` },
          ],
        },

        {
          id: `l03-mag-6`,
          type: `magazine`,
          section: 6,
          headline: `What About Once-Living Things?`,
          paragraphs: [
            `Now here's a tricky case! What about things that WERE alive but aren't anymore?`,
            `A fallen leaf! A piece of wood! A seashell! A feather! These were once parts of living things. But once they fall off, they STOP being alive. We call these ONCE-LIVING things! They're not living anymore (they don't grow, eat, or reproduce). But they came FROM something living. Different from non-living things like rocks, which were never alive at all! Three categories: LIVING, NON-LIVING, ONCE-LIVING! Cool, right?`,
          ],
          image: `/explorer-assets/science/l03-s6-once-living.webp`,
          imageCaption: `Once-living: fallen leaves, wood, shells. Came from something alive!`,
          vocab: [
            { word: `once-living`, definition: `Something that used to be alive.`,
              audioPrompt: `Once-living means something that used to be alive but isn't anymore. A fallen leaf. A piece of wood. A seashell. They were part of a living thing once. Different from rocks, which were never alive!` },
            { word: `was alive`,   definition: `Used to be alive at some time.`,
              audioPrompt: `Was alive means used to be alive at some time. A piece of wood was once part of a living tree. A seashell was once made by a living snail. These things have a history of life!` },
            { word: `categories`,  definition: `Different types or groups.`,
              audioPrompt: `Categories are different types or groups. Scientists love categories. Now we have 3 for our world: living, non-living, and once-living. Sorting things into categories makes the world easier to understand!` },
          ],
        },

        {
          id: `l03-game`,
          type: `interactive`,
          format: `drag-match`,
          guideText: `Let's try it, {name}! Here are 4 things. Drag each one — is it LIVING (alive now!), NON-LIVING (never alive!), or ONCE-LIVING (used to be alive!)?`,
          buckets: [
            { id: `living`,       label: `✅ LIVING`,      color: `#34D399` },
            { id: `non_living`,   label: `⚪ NON-LIVING`,  color: `#94A3B8` },
            { id: `once_living`,  label: `🍂 ONCE-LIVING`, color: `#F59E0B` },
          ],
          items: [
            { id: `l03-g1`, image: `l03-game-1.webp`, label: `A puppy that eats food and grows bigger every week`,
              matchPhrase: `Yes! LIVING! A puppy eats, drinks, grows, responds, and makes more puppies someday! All 5 signs of life!`,
              correctMatch: `living` },
            { id: `l03-g2`, image: `l03-game-2.webp`, label: `A rock sitting in the garden for 100 years`,
              matchPhrase: `Right! NON-LIVING! Rocks don't eat, drink, grow, or respond. They were never alive. Just rocks!`,
              correctMatch: `non_living` },
            { id: `l03-g3`, image: `l03-game-3.webp`, label: `A fallen brown leaf on the path`,
              matchPhrase: `Yes! ONCE-LIVING! The leaf was alive on the tree. Now it's fallen and dry. Came from something living!`,
              correctMatch: `once_living` },
            { id: `l03-g4`, image: `l03-game-4.webp`, label: `A wooden chair in the kitchen`,
              matchPhrase: `Tricky! ONCE-LIVING! Wood comes from trees. The tree was alive — now the wood is the chair. Once-living!`,
              correctMatch: `once_living` },
          ],
        },

        {
          id: `l03-quiz`,
          type: `quiz`,
          guideText: `Let's see what you remember, {name}!`,
          questions: [
            { id: `l03-q1`, format: `multiple-choice`,
              question: `Which of these is a LIVING thing?`,
              options: [`A rock`, `A puppy`, `A chair`, `A glass of water`],
              correctIndex: 1,
              explanation: `A puppy! It eats, drinks, grows, responds, and (when grown up) can reproduce. All 5 signs of life!` },
            { id: `l03-q2`, format: `multiple-choice`,
              question: `What do ALL living things need to survive?`,
              options: [`Wi-Fi and video games`, `Food and water`, `Only sunlight`, `Nothing — they just exist`],
              correctIndex: 1,
              explanation: `Food and water! Every living thing needs these. They give energy. Without them, living things die!` },
            { id: `l03-q3`, format: `multiple-choice`,
              question: `Living things GROW over time. What's an example?`,
              options: [`A rock stays the same shape forever`, `A seed becoming a tree, a baby becoming an adult`, `A chair gets older`, `Water stays water`],
              correctIndex: 1,
              explanation: `Seeds becoming trees, babies becoming adults — that's growth. Living things change over time!` },
            { id: `l03-q4`, format: `true-false`,
              question: `Living things can make MORE of their own kind — like puppies, seeds, or babies.`,
              correctAnswer: true,
              explanation: `True! Living things reproduce. Dogs make puppies. Plants make seeds. Non-living things can't!` },
            { id: `l03-q5`, format: `fill-blank`,
              question: `A fallen leaf is called ___-living — it used to be alive, but isn't now.`,
              options: [`once`, `super`, `never`, `always`],
              correctIndex: 0,
              explanation: `Once-living! A fallen leaf was once part of a living tree. After it falls, it's no longer alive!` },
            { id: `l03-q6`, format: `multiple-choice`,
              question: `What does it mean when scientists say living things "RESPOND" to their surroundings?`,
              options: [`They send emails`, `They sense and react to what's around them — like a plant leaning toward the sun`, `They write letters`, `They sleep all day`],
              correctIndex: 1,
              explanation: `They sense and react! A plant leans toward sun. A dog turns when called. Living things notice their world!` },
          ],
        },

        {
          id: `l03-realworld`,
          type: `real-world`,
          guideText: `Here's something cool, {name}! Scientists looking for life on OTHER PLANETS use these exact same rules! When they study Mars, they look for water. They look for growth patterns. They look for signs of things RESPONDING to surroundings. Just like you, but with billion-dollar telescopes and rovers! The signs of life you just learned are the SAME ones scientists use across the entire universe!`,
          familyAdventure: `Take a HOUSEHOLD LIFE WALK! Walk around your home — inside and outside if possible. As a family, point at things and say "LIVING," "NON-LIVING," or "ONCE-LIVING"! A plant: LIVING. A chair: NON-LIVING. The wood floor: ONCE-LIVING (came from a tree!). Make it a game. Count how many of each you find!`,
          creativePrompt: `On a piece of paper, draw THREE columns! Label them LIVING, NON-LIVING, and ONCE-LIVING! Fill each column with things you can think of (LIVING: dog, tree, ant! NON-LIVING: rock, water, metal! ONCE-LIVING: paper, wood, leather!). For a 3-sentence floor: write 3 things in each column. For a 5-sentence stretch: pick one thing from each column and write a sentence about WHY it goes there!`,
        },

        {
          id: `l03-celebration`,
          type: `celebration`,
          message: `YES, {name}! You can now spot LIVING things, NON-LIVING things, and ONCE-LIVING things! You know the signs of life — needs food/water, grows, makes more of itself, responds, and (we'll learn more later) is made of cells! These rules work on Earth and even on Mars! You're thinking like a real biologist! Cosmo is so splashy-proud! 🦦`,
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
  const mags = SCIENCE_L03.lessons[0].screens.filter(s => s.type === 'magazine').length;
  const game = SCIENCE_L03.lessons[0].screens.find(s => s.type === 'interactive')?.items?.length ?? 0;
  const quiz = SCIENCE_L03.lessons[0].screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  console.log(`[LESSON-SCIENCE-L03] Loaded: "Living and Non-Living Things" with ${mags} magazine sections, ${game} game items, ${quiz} quiz questions`);
}
