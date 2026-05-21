// ─────────────────────────────────────────────────────────────────────────────
// SCIENCE  |  L04 — Plants: How They Grow and Make Food
// Age band : explorers (6–8)   Guide: cosmo
// Standards: NGSS 2-LS2-1
// REWRITE v2 (May 2026): Grade 1 accessible, ROOTS / STEM / LEAVES 3-bucket
// identification game tests matching plant-part jobs to the right part
// (Schema clean from source. Added Cosmo 🦦 sign-off to celebration message)
// ─────────────────────────────────────────────────────────────────────────────

const SCIENCE_L04 = {
  ageBand:   `explorers`,
  subjectId: `science`,
  guide:     `cosmo`,

  lessons: [
    {
      id:        `science-6-8-04`,
      title:     `Plants: How They Grow and Make Food`,
      duration:  12,
      xpReward:  50,
      badge:     `plant-explorer`,
      badgeName: `Plant Explorer`,

      screens: [

        {
          id: `l04-welcome`,
          type: `welcome`,
          guideText: `Hey {name}, Cosmo here! Today we explore one of the COOLEST living things — PLANTS! Plants are SUPER different from us! We have to FIND food. Plants MAKE their own food! From SUNLIGHT! Plants are basically little solar-powered food factories! Let's dig in!`,
          headline: `Plants: How They Grow and Make Food`,
          subtitle: `The amazing living things that make their own food from sunshine`,
          visual: `/explorer-assets/science/l04-welcome.webp`,
        },

        {
          id: `l04-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Plants Are Everywhere`,
          paragraphs: [
            `Look around outside! PLANTS are EVERYWHERE!`,
            `Tall trees! Tiny moss between rocks! Grass in fields! Flowers in gardens! Bushes! Ferns! Vines! Cactuses in deserts! Seaweed in oceans! There are over 300,000 different KINDS of plants on Earth! From the tallest redwood (taller than a building!) to plants so tiny you need a microscope to see them! They live almost everywhere — even underwater and in freezing snow!`,
          ],
          image: `/explorer-assets/science/l04-s1-plants-everywhere.webp`,
          imageCaption: `Plants are everywhere! Over 300,000 kinds!`,
          vocab: [
            { word: `plant`,      definition: `A living thing that grows from the ground.`,
              audioPrompt: `A plant is a living thing that grows from the ground and usually makes its own food from sunlight. Plants don't move around. They don't eat other things. They stay rooted and create energy from the sun!` },
            { word: `everywhere`, definition: `In all places.`,
              audioPrompt: `Everywhere means in all places. Plants live everywhere on Earth — even places that seem impossible! The dry desert. The freezing arctic. The deep ocean. Plants have adapted to nearly every habitat!` },
            { word: `kinds`,      definition: `Different types.`,
              audioPrompt: `Kinds means different types. There are over 300,000 kinds of plants in the world. Trees, flowers, grasses, ferns, mosses, vines, cactuses. Each kind has adapted to its own habitat!` },
          ],
        },

        {
          id: `l04-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Plant Part 1: ROOTS`,
          paragraphs: [
            `Every plant has special PARTS that work together! Let's start with the ROOTS!`,
            `Roots are the parts of the plant UNDERGROUND! They have TWO important jobs! One — they ANCHOR the plant, holding it steady so wind doesn't knock it over! Two — they SUCK UP WATER and minerals from the soil! Roots are like the plant's drinking straws AND feet, all in one! Some roots grow shallow and wide. Others go deep and skinny. Either way, no roots = no plant!`,
          ],
          image: `/explorer-assets/science/l04-s2-parts-roots.webp`,
          imageCaption: `Roots: anchor the plant + suck up water!`,
          vocab: [
            { word: `roots`,  definition: `Plant parts that grow underground.`,
              audioPrompt: `Roots are the plant parts that grow underground. You usually can't see them. But they're doing two important jobs: holding the plant steady, and pulling water out of the soil. The foundation!` },
            { word: `anchor`, definition: `To hold something steady.`,
              audioPrompt: `To anchor means to hold something steady. Roots anchor plants. They grip the soil so wind doesn't blow the plant away. Strong roots equal a steady plant. Big trees have huge root systems!` },
            { word: `soil`,   definition: `The dirt where plants grow.`,
              audioPrompt: `Soil is the dirt where plants grow. But it's not just plain dirt — soil contains tiny pieces of dead leaves, rock, and minerals plants need. Roots pull water and minerals from soil!` },
          ],
        },

        {
          id: `l04-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Plant Parts 2 & 3: STEM and LEAVES`,
          paragraphs: [
            `Next up — the STEM and the LEAVES!`,
            `The STEM is the part that holds the plant UPRIGHT! It's like the plant's body. It carries water and food UP from the roots to the leaves. And carries food made by leaves DOWN to other parts! The LEAVES are the plant's FOOD FACTORIES! (We'll learn how next!) Leaves spread out wide to catch as much SUNLIGHT as possible! Different plants have different leaf shapes — needles on pine trees, big flat ones on banana plants!`,
          ],
          image: `/explorer-assets/science/l04-s3-parts-stem-leaves.webp`,
          imageCaption: `Stem holds plant upright + carries water! Leaves catch sunlight!`,
          vocab: [
            { word: `stem`,     definition: `The part of a plant that holds it upright.`,
              audioPrompt: `The stem is the part of a plant that holds it upright and carries water and food. Trees have giant stems we call trunks. Flowers have skinny stems. The stem is the plant's highway!` },
            { word: `leaves`,   definition: `Plant parts that catch sunlight and make food.`,
              audioPrompt: `Leaves are plant parts that catch sunlight and make food. They're often flat and wide to catch as much sun as possible. Usually green because of something inside called chlorophyll!` },
            { word: `sunlight`, definition: `Light from the sun.`,
              audioPrompt: `Sunlight is light from the sun. Plants need it to make their food. Leaves catch it. Plants that don't get enough sunlight grow slowly or die. That's why plants reach toward windows!` },
          ],
        },

        {
          id: `l04-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `The Magic: PHOTOSYNTHESIS`,
          paragraphs: [
            `Here's the COOLEST thing about plants — they MAKE THEIR OWN FOOD! Scientists call it PHOTOSYNTHESIS!`,
            `Inside the leaves, plants combine THREE things: SUNLIGHT (caught by the leaves), WATER (pulled up from the roots), and AIR (a gas called carbon dioxide that's all around us)! They mix them together using the sunlight as energy — and POOF, food! The "food" is a kind of sugar plants make for themselves. They use it to grow! The leaves also release OXYGEN — the same oxygen WE breathe!`,
          ],
          image: `/explorer-assets/science/l04-s4-photosynthesis.webp`,
          imageCaption: `Photosynthesis: sunlight + water + air → food + oxygen!`,
          vocab: [
            { word: `photosynthesis`, definition: `How plants make food from sunlight, water, and air.`,
              audioPrompt: `Photosynthesis is how plants make food from sunlight, water, and air. It happens inside their leaves. Photo means light. Synthesis means making. Together — making with light. Super important!` },
            { word: `make food`,      definition: `To create food from raw materials.`,
              audioPrompt: `To make food is to create food from raw materials. Plants are amazing because they MAKE their own food. We can't do that. We have to find food and eat it. Plants take sunlight, water, and air!` },
            { word: `oxygen`,         definition: `The gas we breathe to stay alive.`,
              audioPrompt: `Oxygen is the gas we breathe to stay alive. When plants make food through photosynthesis, they release oxygen. We breathe it. Every plant on Earth helps make the air we breathe!` },
          ],
        },

        {
          id: `l04-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Plant Part 4: FLOWERS AND SEEDS`,
          paragraphs: [
            `Many plants grow FLOWERS! Flowers aren't just pretty — they have a JOB!`,
            `Flowers help plants REPRODUCE! They attract bees, butterflies, and birds with bright colors and sweet smells! Those animals carry POLLEN from flower to flower! Pollen makes new SEEDS! Seeds fall to the ground and grow into NEW PLANTS! That's how plants make more of their kind! The fruits and veggies you eat — apples, tomatoes, strawberries — all come from flowers that made seeds! All plant babies come from seeds!`,
          ],
          image: `/explorer-assets/science/l04-s5-flowers-seeds.webp`,
          imageCaption: `Flowers → pollen → seeds → new plants!`,
          vocab: [
            { word: `flowers`, definition: `Plant parts that help make seeds.`,
              audioPrompt: `Flowers are plant parts that help make seeds. They attract bees, butterflies, hummingbirds with colors and smells. When those animals visit, they carry pollen. That's how seeds get made!` },
            { word: `seeds`,   definition: `Tiny living things that grow into new plants.`,
              audioPrompt: `Seeds are tiny living things that grow into new plants. Plants make them inside flowers. Seeds can be huge like a coconut, or tiny like a poppy seed. With water and sun, a seed grows!` },
            { word: `pollen`,  definition: `Tiny powdery stuff that helps make seeds.`,
              audioPrompt: `Pollen is tiny powdery stuff that helps make seeds. It's the yellow dust in flowers. Bees and butterflies pick it up on their legs, then drop it at the next flower. Bees are pollination heroes!` },
          ],
        },

        {
          id: `l04-mag-6`,
          type: `magazine`,
          section: 6,
          headline: `Why Plants Matter`,
          paragraphs: [
            `Plants give us SO MUCH! Without them, the world would be very different!`,
            `Plants give us OXYGEN to breathe! They give us FOOD — fruits, vegetables, grains, herbs! They make HABITATS for animals (a tree is a home for birds and squirrels)! They give us WOOD for houses, paper for books, cotton for clothes! They cool the air! They give us MEDICINE — many medicines come from plants! Plants are quietly doing essential jobs all the time! Caring for plants = caring for ourselves!`,
          ],
          image: `/explorer-assets/science/l04-s6-why-plants-matter.webp`,
          imageCaption: `Plants give: oxygen, food, homes, wood, medicine!`,
          vocab: [
            { word: `give us`,  definition: `Provide for us.`,
              audioPrompt: `Give us means provide for us. Plants give us so much — oxygen to breathe, food to eat, wood for houses, paper for books, cotton for clothes, medicines, and beauty. We depend on plants daily!` },
            { word: `habitat`,  definition: `A home for living things.`,
              audioPrompt: `A habitat is a home for living things. Plants create habitats for animals. Trees are homes for birds and squirrels. Bushes shelter rabbits. Underwater plants are homes for fish!` },
            { word: `medicine`, definition: `Something that helps when you're sick.`,
              audioPrompt: `Medicine is something that helps when you're sick. Many medicines come from plants. Aspirin started from tree bark. Scientists are still discovering new plant medicines today!` },
          ],
        },

        {
          id: `l04-game`,
          type: `interactive`,
          format: `drag-match`,
          guideText: `Let's try it, {name}! Here are 4 jobs plants need done. Drag each job — which plant part does it? ROOTS, STEM, or LEAVES?`,
          buckets: [
            { id: `roots`,  label: `🌱 ROOTS`,  color: `#92400E` },
            { id: `stem`,   label: `🌿 STEM`,   color: `#65A30D` },
            { id: `leaves`, label: `🍃 LEAVES`, color: `#22C55E` },
          ],
          items: [
            { id: `l04-g1`, image: `l04-game-1.webp`, label: `Sucks up water from the soil`,
              matchPhrase: `Yes! ROOTS! Roots pull water and minerals from the dirt. They're the plant's drinking straws!`,
              correctMatch: `roots` },
            { id: `l04-g2`, image: `l04-game-2.webp`, label: `Catches sunlight to make food`,
              matchPhrase: `Right! LEAVES! Leaves are the food factories. They catch sunlight and use it for photosynthesis!`,
              correctMatch: `leaves` },
            { id: `l04-g3`, image: `l04-game-3.webp`, label: `Holds the plant up tall and straight`,
              matchPhrase: `Yes! STEM! The stem is the plant's body. Holds it upright and carries water up and food down!`,
              correctMatch: `stem` },
            { id: `l04-g4`, image: `l04-game-4.webp`, label: `Anchors the plant so wind can't blow it over`,
              matchPhrase: `Right! ROOTS! Roots grip the soil and hold the plant steady. Big trees have huge root systems!`,
              correctMatch: `roots` },
          ],
        },

        {
          id: `l04-quiz`,
          type: `quiz`,
          guideText: `Let's see what you remember, {name}!`,
          questions: [
            { id: `l04-q1`, format: `multiple-choice`,
              question: `What do plant ROOTS do?`,
              options: [`Catch sunlight`, `Anchor the plant + suck up water and minerals from soil`, `Make flowers`, `Take pictures`],
              correctIndex: 1,
              explanation: `Roots anchor the plant in soil AND absorb water and minerals. The foundation!` },
            { id: `l04-q2`, format: `multiple-choice`,
              question: `Where does the plant MAKE ITS FOOD?`,
              options: [`In the roots`, `In the leaves — using sunlight, water, and air`, `In the soil`, `Plants don't make food`],
              correctIndex: 1,
              explanation: `Leaves! That's where photosynthesis happens. Sunlight + water + air = plant food!` },
            { id: `l04-q3`, format: `multiple-choice`,
              question: `What is PHOTOSYNTHESIS?`,
              options: [`How plants make food from sun, water, and air`, `A type of flower`, `A bug that eats plants`, `Plant DNA`],
              correctIndex: 0,
              explanation: `Photosynthesis is how plants make their own food. They combine sunlight, water, and air to create sugar!` },
            { id: `l04-q4`, format: `true-false`,
              question: `When plants make food through photosynthesis, they RELEASE OXYGEN we breathe.`,
              correctAnswer: true,
              explanation: `True! Plants release oxygen as a byproduct of photosynthesis. Every breath you take has oxygen made by plants!` },
            { id: `l04-q5`, format: `fill-blank`,
              question: `Plants make new plants from ___ that grow inside flowers or fruits.`,
              options: [`seeds`, `sandwiches`, `rocks`, `wires`],
              correctIndex: 0,
              explanation: `Seeds! Plants make seeds inside flowers or fruits. Seeds grow into new plants. That's how plants reproduce!` },
            { id: `l04-q6`, format: `multiple-choice`,
              question: `What do BEES and BUTTERFLIES do that helps plants?`,
              options: [`Eat them`, `Carry pollen from flower to flower — helping plants make seeds`, `Step on them`, `Nothing`],
              correctIndex: 1,
              explanation: `Bees and butterflies are pollination heroes! They carry pollen between flowers, helping plants make seeds!` },
          ],
        },

        {
          id: `l04-realworld`,
          type: `real-world`,
          guideText: `Here's something cool, {name}! Almost EVERYTHING you eat traces back to a plant! Vegetables and fruits — obviously plants! Bread? Comes from wheat! Pizza dough? Wheat! Cereal? Grains! Chocolate? Cacao plant! Coffee and tea? Plants! Even MEAT traces back to plants — because animals eat plants, then we eat animals! The whole food chain on Earth starts with plants doing photosynthesis!`,
          familyAdventure: `Grow a SEED together! Get a seed (a dried bean from your kitchen works!). Wrap it in a wet paper towel. Put it in a plastic bag. Tape it to a sunny window! Watch what happens over the next 3-7 days. The seed will sprout! You'll see roots and a stem grow! Talk about how it's using sunlight and water!`,
          creativePrompt: `Draw a PLANT and LABEL its 4 parts: ROOTS, STEM, LEAVES, and FLOWERS! Use arrows to point to each part! Next to each label, write one thing that part DOES. For a 3-sentence floor: write one sentence for ROOTS, STEM, and LEAVES jobs. For a 5-sentence stretch: write a sentence for all 4 parts PLUS one sentence about why plants matter! Put it on the fridge!`,
        },

        {
          id: `l04-celebration`,
          type: `celebration`,
          message: `Awesome work, {name}! You now know about PLANTS — their parts (roots, stem, leaves, flowers)! How they MAKE THEIR OWN FOOD through photosynthesis! How they give us oxygen, food, and shelter! Plants are quietly doing essential work for ALL of us! Next time you see a plant, you'll know what's happening inside! Cosmo is so splashy-proud! 🦦`,
          badge: `plant-explorer`,
          badgeName: `Plant Explorer`,
          xpEarned: 50,
        },

      ],
    },
  ],
};

export default SCIENCE_L04;

// ─── Dev asset check ─────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const mags = SCIENCE_L04.lessons[0].screens.filter(s => s.type === 'magazine').length;
  const game = SCIENCE_L04.lessons[0].screens.find(s => s.type === 'interactive')?.items?.length ?? 0;
  const quiz = SCIENCE_L04.lessons[0].screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  console.log(`[LESSON-SCIENCE-L04] Loaded: "Plants" with ${mags} magazine sections, ${game} game items, ${quiz} quiz questions`);
}
