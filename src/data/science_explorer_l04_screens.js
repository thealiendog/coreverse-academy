// ─────────────────────────────────────────────────────────────────────────────
// SCIENCE  |  L04 — Plants: How They Grow and Make Food
// Age band : explorers (6–8)   Guide: cosmo
// Standards: NGSS 2-LS2-1 (plants need water and light to grow)
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
          guideText: `Hey, {name}! Cosmo here. Today we explore one of the COOLEST kinds of living things — PLANTS. Plants are SUPER different from us. We have to find food. Plants MAKE their own food. From SUNLIGHT! Yeah, you heard me. Plants are basically little solar-powered food factories. Today you'll learn how they work. Let's dig in!`,
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
            `Look around outside. PLANTS are EVERYWHERE.`,
            `Tall trees. Tiny moss between rocks. Grass in fields. Flowers in gardens. Bushes. Ferns. Vines. Cactuses in deserts. Seaweed in oceans. There are over 300,000 different kinds of plants on Earth. From the tallest redwood (taller than a building!) to plants so tiny you need a microscope to see them. They live almost everywhere — even underwater and in freezing snow. Plants are the most COMMON living things on the planet.`,
          ],
          image: `/explorer-assets/science/l04-s1-plants-everywhere.webp`,
          imageCaption: `Plants are everywhere. Over 300,000 kinds. From tall trees to tiny moss. Earth is covered in green life.`,
          vocab: [
            { word: `plant`,          definition: `A living thing that grows from the ground and usually makes its own food.`,
              audioPrompt: `A plant, {name}, is a living thing that grows from the ground and usually makes its own food from sunlight. Plants are different from animals — they don't move around. They don't eat other things. They stay rooted in one place and create energy from the sun. That makes plants special among living things.` },
            { word: `everywhere`,     definition: `In all places. Plants live EVERYWHERE on Earth.`,
              audioPrompt: `Everywhere, {name}, means in all places. Plants live everywhere on Earth — even places that seem impossible. The dry desert. The freezing arctic. The deep ocean. The tallest mountains. Plants have adapted to live in nearly every habitat. They're remarkable.` },
            { word: `kinds`,          definition: `Different types. There are over 300,000 KINDS of plants in the world.`,
              audioPrompt: `Kinds, {name}, means different types. There are over 300,000 kinds of plants in the world. Trees, flowers, grasses, ferns, mosses, vines, cactuses, seaweed. Each kind has adapted to its own habitat. The plant world is incredibly diverse. Scientists are still discovering new kinds every year.` },
          ],
        },

        {
          id: `l04-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Plant Part 1: ROOTS`,
          paragraphs: [
            `Every plant has special PARTS that work together. Let's start with the ROOTS.`,
            `Roots are the parts of the plant UNDERGROUND. They have TWO important jobs. One — they ANCHOR the plant, holding it steady so wind doesn't knock it over. Two — they SUCK UP WATER and MINERALS from the soil. Roots are like the plant's drinking straws AND feet, all in one. Some roots grow shallow and wide. Others go deep and skinny. Either way, no roots = no plant.`,
          ],
          image: `/explorer-assets/science/l04-s2-parts-roots.webp`,
          imageCaption: `Roots: anchor the plant + suck up water and minerals from soil. The plant's foundation.`,
          vocab: [
            { word: `roots`,          definition: `Plant parts that grow underground. They hold the plant and absorb water.`,
              audioPrompt: `Roots, {name}, are the plant parts that grow underground. You usually can't see them. But they're doing two important jobs: holding the plant steady, and pulling water and nutrients out of the soil. Without roots, plants would fall over and dry up. Roots are the foundation.` },
            { word: `anchor`,         definition: `To hold something steady. Roots ANCHOR plants in the ground.`,
              audioPrompt: `To anchor, {name}, means to hold something steady. Roots anchor plants. They grip the soil so wind doesn't blow the plant away. So animals don't push it over. So rain doesn't wash it away. Strong roots = a steady plant. That's why big trees have huge root systems.` },
            { word: `soil`,           definition: `The dirt where plants grow. Roots pull water and food from SOIL.`,
              audioPrompt: `Soil, {name}, is the dirt where plants grow. But it's not just plain dirt — soil contains tiny pieces of dead leaves, rock, and minerals plants need. Roots reach into the soil and pull out water and these minerals. Good soil = healthy plants. Bad soil = struggling plants.` },
          ],
        },

        {
          id: `l04-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Plant Parts 2 & 3: STEM and LEAVES`,
          paragraphs: [
            `Next up — the STEM and the LEAVES.`,
            `The STEM is the part that holds the plant UPRIGHT. It's like the plant's body. It carries water and food UP from the roots to the leaves. And carries food made by leaves DOWN to other parts. The LEAVES are the plant's FOOD FACTORIES. (We'll learn how next!) Leaves spread out wide to catch as much SUNLIGHT as possible. Different plants have different leaf shapes — needles on pine trees, big flat ones on banana plants, tiny ones on succulents.`,
          ],
          image: `/explorer-assets/science/l04-s3-parts-stem-leaves.webp`,
          imageCaption: `Stem holds plant upright + carries water and food. Leaves catch sunlight and make food.`,
          vocab: [
            { word: `stem`,           definition: `The part of a plant that holds it upright and carries water and food.`,
              audioPrompt: `The stem, {name}, is the part of a plant that holds it upright and carries water and food through the plant. Trees have giant stems we call trunks. Flowers have skinny stems. Inside every stem are tiny tubes carrying water UP from the roots and food DOWN from the leaves. The stem is the plant's highway.` },
            { word: `leaves`,         definition: `Plant parts that catch sunlight and MAKE FOOD for the plant.`,
              audioPrompt: `Leaves, {name}, are plant parts that catch sunlight and make food for the plant. They're often flat and wide to catch as much sun as possible. They're usually green because of something inside them called chlorophyll. Chlorophyll is what catches the sunlight. We'll learn how that works next.` },
            { word: `sunlight`,       definition: `Light from the sun. Plants NEED sunlight to make food.`,
              audioPrompt: `Sunlight, {name}, is light from the sun. Plants need it to make their food. Leaves catch it. Plants that don't get enough sunlight grow slowly or die. That's why plants reach toward windows in your house. They're trying to catch more sun. Sunlight is plant fuel.` },
          ],
        },

        {
          id: `l04-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `The Magic: PHOTOSYNTHESIS`,
          paragraphs: [
            `Here's the COOLEST thing about plants — they MAKE THEIR OWN FOOD. Scientists call it PHOTOSYNTHESIS.`,
            `Inside the leaves, plants combine THREE things: SUNLIGHT (caught by the leaves), WATER (pulled up from the roots), and AIR (a gas called carbon dioxide that's all around us). They mix them together using the sunlight as energy — and POOF, food! The "food" is a kind of sugar plants make for themselves. They use it to grow. The leaves also release OXYGEN — the same oxygen WE breathe! Plants are basically little food-making, oxygen-pumping machines.`,
          ],
          image: `/explorer-assets/science/l04-s4-photosynthesis.webp`,
          imageCaption: `Photosynthesis: sunlight + water + air → food (sugar) + oxygen. Plants are food factories.`,
          vocab: [
            { word: `photosynthesis`, definition: `The process plants use to make food from sunlight, water, and air.`,
              audioPrompt: `Photosynthesis, {name}, is the process plants use to make food from sunlight, water, and air. It happens inside their leaves. Photo means light. Synthesis means making. Together — making with light. It's one of the most important processes on Earth. Without photosynthesis, no plants. Without plants, no oxygen, no food chain, no us.` },
            { word: `make food`,      definition: `To create food from raw materials. Plants MAKE FOOD from sun, water, and air.`,
              audioPrompt: `To make food, {name}, is to create food from raw materials. Plants are amazing because they MAKE their own food. We can't do that. We have to find food and eat it. Plants take sunlight, water, and air — and create food right inside themselves. That's a superpower we don't have.` },
            { word: `oxygen`,         definition: `The gas we breathe to stay alive. Plants RELEASE OXYGEN we need.`,
              audioPrompt: `Oxygen, {name}, is the gas we breathe to stay alive. Every breath you take has oxygen in it. Where does that oxygen come from? Plants. When plants make food through photosynthesis, they release oxygen into the air. We breathe it. Every plant on Earth helps make the air we breathe. Plants and animals depend on each other.` },
          ],
        },

        {
          id: `l04-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Plant Part 4: FLOWERS AND SEEDS`,
          paragraphs: [
            `Many plants grow FLOWERS. Flowers aren't just pretty — they have a JOB.`,
            `Flowers help plants REPRODUCE. They attract bees, butterflies, and birds with bright colors and sweet smells. Those animals carry POLLEN from flower to flower. Pollen makes new SEEDS. Seeds fall to the ground and grow into NEW PLANTS. That's how plants make more of their kind. The fruits and veggies you eat — apples, tomatoes, strawberries — all come from flowers that made seeds. Even pumpkins! All plant babies come from seeds.`,
          ],
          image: `/explorer-assets/science/l04-s5-flowers-seeds.webp`,
          imageCaption: `Flowers attract bees and butterflies → pollen → seeds → new plants. The cycle of plant life.`,
          vocab: [
            { word: `flowers`,        definition: `Plant parts that help make seeds. Often colorful to attract bees and butterflies.`,
              audioPrompt: `Flowers, {name}, are plant parts that help make seeds. They attract bees, butterflies, hummingbirds, and other animals with their colors and smells. When those animals visit, they carry pollen from flower to flower. That's how seeds get made. Flowers are how many plants reproduce.` },
            { word: `seeds`,          definition: `Tiny living things that grow into new plants. Plants make SEEDS.`,
              audioPrompt: `Seeds, {name}, are tiny living things that grow into new plants. Plants make them inside their flowers (or fruits). Seeds can be huge — like a coconut — or tiny — like a poppy seed. When a seed falls in good soil with water and sun, it grows into a brand new plant. That's how plant babies come into the world.` },
            { word: `pollen`,         definition: `Tiny powdery stuff that helps make seeds. Bees carry POLLEN between flowers.`,
              audioPrompt: `Pollen, {name}, is tiny powdery stuff that helps make seeds. It's the yellow dust you see in flowers. Bees and butterflies pick it up on their legs when they visit flowers, then drop it off at the next flower. That's how seeds get made. Pollen is the secret behind plant reproduction. Bees are pollination heroes.` },
          ],
        },

        {
          id: `l04-mag-6`,
          type: `magazine`,
          section: 6,
          headline: `Why Plants Matter`,
          paragraphs: [
            `Plants give us SO MUCH. Without them, the world would be very different.`,
            `Plants give us OXYGEN to breathe. They give us FOOD — fruits, vegetables, grains, herbs. They make HABITATS for animals (a tree is a home for birds and squirrels). They give us WOOD for houses, paper for books, cotton for clothes. They cool the air. They keep soil from washing away. They're beautiful. They're medicine — many medicines come from plants. Plants are quietly doing essential jobs all the time. Caring for plants = caring for ourselves.`,
          ],
          image: `/explorer-assets/science/l04-s6-why-plants-matter.webp`,
          imageCaption: `Plants give: oxygen, food, homes, wood, paper, clothes, medicine. Caring for plants = caring for us.`,
          vocab: [
            { word: `give us`,        definition: `Provide for us. Plants GIVE US oxygen, food, and so much more.`,
              audioPrompt: `Give us, {name}, means provide for us. Plants give us so much — oxygen to breathe, food to eat, wood for houses, paper for books, cotton for clothes, medicines, and beauty. We depend on plants every single day. Most people don't notice. But once you do — you can't unsee it.` },
            { word: `habitat`,        definition: `A home for living things. Plants create HABITATS for animals.`,
              audioPrompt: `A habitat, {name}, is a home for living things. Plants create habitats for animals. Trees are homes for birds and squirrels. Bushes shelter rabbits. Grass hides insects. Underwater plants are homes for fish. Without plants, most animals would have nowhere to live. Plants are habitat builders.` },
            { word: `medicine`,       definition: `Something that helps when you're sick. Many MEDICINES come from plants.`,
              audioPrompt: `Medicine, {name}, is something that helps when you're sick. Many medicines come from plants. Aspirin started from tree bark. Many cancer medicines come from rare flowers. Some heart medicines come from foxglove plants. Scientists are still discovering new plant medicines today. Plants might be hiding cures we don't yet know about.` },
          ],
        },

        {
          id: `l04-game`,
          type: `interactive`,
          format: `drag-match`,
          guideText: `Let's see what you remember, {name}.`,
          buckets: [
            { id: `fact`, label: `✅ Yes, that's true!`, color: `#34D399` },
            { id: `myth`, label: `❌ No way!`,         color: `#F87171` },
          ],
          items: [
            { id: `l04-g1`, image: `l04-game-1.webp`, label: `Plants need SUNLIGHT, WATER, and AIR to grow.`,
              matchPhrase: `Yes! Plants need all three. Sunlight to power photosynthesis. Water from the soil. Air (carbon dioxide) from around them. Without any one of these, plants can't make food.`,
              correctMatch: `fact` },
            { id: `l04-g2`, image: `l04-game-2.webp`, label: `Plants MAKE their own food inside their leaves — through photosynthesis.`,
              matchPhrase: `True! Plants are amazing — they combine sunlight, water, and air inside their leaves to make food (sugar). Animals can't do this. Only plants. It's called photosynthesis.`,
              correctMatch: `fact` },
            { id: `l04-g3`, image: `l04-game-3.webp`, label: `Plants eat DIRT as their main food.`,
              matchPhrase: `Not at all! Plants don't eat dirt. They get water and minerals from soil through their roots, but they MAKE their food themselves from sunlight, water, and air. No eating involved.`,
              correctMatch: `myth` },
            { id: `l04-g4`, image: `l04-game-4.webp`, label: `Plants are NOT alive — they just sit there doing nothing.`,
              matchPhrase: `Definitely not! Plants are very much alive. They grow, drink water, make food, reproduce with seeds, and respond to their surroundings (turning toward sunlight). They're living things.`,
              correctMatch: `myth` },
          ],
        },

        {
          id: `l04-quiz`,
          type: `quiz`,
          guideText: `Let's see what you remember, {name}.`,
          questions: [
            { id: `l04-q1`, format: `multiple-choice`,
              question: `What do plant ROOTS do?`,
              options: [`Catch sunlight`, `Anchor the plant + suck up water and minerals from soil`, `Make flowers`, `Take pictures`],
              correctIndex: 1,
              explanation: `Roots have two jobs: anchoring the plant in soil so it doesn't fall over, and absorbing water and minerals. They're the plant's foundation.` },
            { id: `l04-q2`, format: `multiple-choice`,
              question: `Where does the plant MAKE ITS FOOD?`,
              options: [`In the roots`, `In the leaves — using sunlight, water, and air`, `In the soil`, `Plants don't make food`],
              correctIndex: 1,
              explanation: `Leaves! That's where photosynthesis happens. Sunlight + water + air = plant food (sugar). The leaves are little food factories.` },
            { id: `l04-q3`, format: `multiple-choice`,
              question: `What is PHOTOSYNTHESIS?`,
              options: [`The process plants use to make food from sun, water, and air`, `A type of flower`, `A bug that eats plants`, `Plant DNA`],
              correctIndex: 0,
              explanation: `Photosynthesis is how plants make their own food. They combine sunlight, water, and air to create sugar (food) and release oxygen we breathe.` },
            { id: `l04-q4`, format: `true-false`,
              question: `When plants make food through photosynthesis, they RELEASE OXYGEN we breathe.`,
              correctAnswer: true,
              explanation: `True! Plants release oxygen as a byproduct of photosynthesis. Every breath you take has oxygen made by plants. Plants and animals depend on each other.` },
            { id: `l04-q5`, format: `fill-blank`,
              question: `Plants make new plants from ___ that grow inside flowers or fruits.`,
              options: [`seeds`, `sandwiches`, `rocks`, `wires`],
              correctIndex: 0,
              explanation: `Seeds! Plants make seeds inside their flowers or fruits. Seeds fall to the ground, get water and sun, and grow into new plants. That's how plants reproduce.` },
            { id: `l04-q6`, format: `multiple-choice`,
              question: `What do BEES and BUTTERFLIES do that helps plants?`,
              options: [`Eat them`, `Carry pollen from flower to flower — helping plants make seeds`, `Step on them`, `Nothing`],
              correctIndex: 1,
              explanation: `Bees and butterflies are pollination heroes! They carry pollen between flowers, which helps plants make seeds. Without them, many plants couldn't reproduce.` },
          ],
        },

        {
          id: `l04-realworld`,
          type: `real-world`,
          guideText: `Here's something cool, {name}. Almost EVERYTHING you eat traces back to a plant. Vegetables and fruits — obviously plants. Bread? Comes from wheat. Pizza dough? Wheat. Cereal? Grains. Chocolate? Cacao plant. Coffee and tea? Plants. Even MEAT traces back to plants — because animals eat plants, then we eat animals. The whole food chain on Earth starts with plants doing photosynthesis. Without plants, there'd be no food at all. They're the foundation of life on our planet.`,
          familyAdventure: `Grow a SEED together. Get a seed (a dried bean from your kitchen works!). Wrap it in a wet paper towel, put it in a plastic bag, and tape it to a sunny window. Watch what happens over the next 3-7 days. The seed will sprout! You'll see roots and a stem grow. Talk about how it's using sunlight and water to grow. Science right in your kitchen.`,
          creativePrompt: `Draw a PLANT and LABEL its 4 parts: ROOTS, STEM, LEAVES, and FLOWERS. Use arrows to point to each part. Next to each label, write one thing that part DOES. (Roots: drink water. Stem: hold plant up. Leaves: make food. Flowers: make seeds.) Put it on the fridge.`,
        },

        {
          id: `l04-celebration`,
          type: `celebration`,
          message: `Awesome work, {name}! You now know about PLANTS — their parts (roots, stem, leaves, flowers), how they MAKE THEIR OWN FOOD through photosynthesis, and how they give us oxygen, food, and shelter. Plants are quietly doing essential work for ALL of us. Next time you see a plant, you'll know what's happening inside. See you in the next lesson!`,
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
  const mags  = SCIENCE_L04.lessons[0].screens.filter(s => s.type === 'magazine').length;
  const game  = SCIENCE_L04.lessons[0].screens.find(s => s.type === 'interactive')?.items?.length ?? 0;
  const quiz  = SCIENCE_L04.lessons[0].screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  console.log(`[LESSON-SCIENCE-L04] Loaded: "Plants" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
}
