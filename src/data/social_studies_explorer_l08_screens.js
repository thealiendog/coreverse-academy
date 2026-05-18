// ─────────────────────────────────────────────────────────────────────────────
// SOCIAL STUDIES  |  L08 — Landforms: Mountains, Rivers, Deserts, and More
// Age band : explorers (6–8)   Guide: atlas
// Standards: C3 Framework D2.Geo.2.K-2 / D2.Geo.4.K-2 (physical features)
// ─────────────────────────────────────────────────────────────────────────────

const SOCIAL_STUDIES_L08 = {
  ageBand:   `explorers`,
  subjectId: `social_studies`,
  guide:     `atlas`,

  lessons: [
    {
      id:        `social-studies-6-8-08`,
      title:     `Landforms: Mountains, Rivers, Deserts, and More`,
      duration:  12,
      xpReward:  50,
      badge:     `landforms-explorer`,
      badgeName: `Landforms Explorer`,

      screens: [

        {
          id: `l08-welcome`,
          type: `welcome`,
          guideText: `Hello, {name}. Atlas here. You know the 7 continents and 5 oceans. But each continent has DIFFERENT shapes — mountains, rivers, deserts, forests, plains, valleys, islands. These shapes are called LANDFORMS. They make the world beautiful and varied. They also shape HOW people live. Let's explore them.`,
          headline: `Landforms: Mountains, Rivers, Deserts, and More`,
          subtitle: `The shapes of Earth — and how they shape human life`,
          visual: `/explorer-assets/social-studies/l08-welcome.webp`,
        },

        {
          id: `l08-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Earth Has Many SHAPES`,
          paragraphs: [
            `Earth's land isn't FLAT and the same everywhere. It comes in MANY different SHAPES.`,
            `Some land is HIGH — like mountains. Some is FLAT — like plains. Some is DRY — like deserts. Some is COVERED IN TREES — like forests. Some has WATER FLOWING through it — like rivers and lakes. Some is SURROUNDED BY WATER — like islands. These different shapes are called LANDFORMS. They make Earth's surface incredibly VARIED. They also affect EVERYTHING about how people, plants, and animals live. Today we'll meet the main kinds.`,
          ],
          image: `/explorer-assets/social-studies/l08-s1-shapes-earth.webp`,
          imageCaption: `Earth's land has many shapes. Mountains, plains, deserts, forests, rivers, islands. All landforms.`,
          vocab: [
            { word: `landform`,       definition: `A SHAPE of land on Earth. Mountains, rivers, deserts are all LANDFORMS.`,
              audioPrompt: `A landform, {name}, is a shape of land on Earth. Mountains, rivers, deserts, forests, plains, valleys, islands — all landforms. They're the different ways Earth's surface is shaped. Some landforms are huge (like mountain ranges). Some are smaller (like a single hill). Landforms make Earth varied and beautiful. They also affect how people live.` },
            { word: `varied`,         definition: `Having LOTS of different KINDS. Earth's land is VARIED — many shapes.`,
              audioPrompt: `Varied, {name}, means having lots of different kinds. Earth's land is varied. It's not all the same. Some parts are tall and rocky. Some flat and grassy. Some dry and sandy. Some wet and forested. The variety makes Earth interesting. Different plants and animals live in different landforms. Different cultures developed in different landforms too.` },
            { word: `shape`,          definition: `The FORM of something. Each LANDFORM has its own SHAPE.`,
              audioPrompt: `A shape, {name}, is the form of something. Each landform has its own shape. Mountains are pointy and tall. Plains are wide and flat. Rivers are long and winding. Islands are round-ish and surrounded by water. Each shape developed over millions of years through wind, water, and Earth's movements. Each tells a story of how Earth changes.` },
          ],
        },

        {
          id: `l08-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `MOUNTAINS: Tall and Rocky`,
          paragraphs: [
            `Let's start with the TALLEST landform — MOUNTAINS.`,
            `Mountains are huge piles of ROCK that rise high above the surrounding land. The tallest is MOUNT EVEREST in Asia — 29,000 feet! Mountains form over MILLIONS of years when Earth's surface pushes UP. Many mountains have SNOW on top because it's COLDER higher up. Some mountains are part of a MOUNTAIN RANGE — like the Rockies in North America or the Andes in South America. People who live in mountains often raise GOATS or SHEEP, build sturdy homes for cold weather, and depend on streams of melted snow for water. Mountains are beautiful — and challenging — places to live.`,
          ],
          image: `/explorer-assets/social-studies/l08-s2-mountains.webp`,
          imageCaption: `MOUNTAINS: tall and rocky. Snow on tops. Mount Everest = tallest. Mountain ranges = chains of mountains.`,
          vocab: [
            { word: `mountain`,       definition: `A TALL ROCKY landform that rises high above the surrounding land.`,
              audioPrompt: `A mountain, {name}, is a tall rocky landform that rises high above the surrounding land. Mountains form over millions of years when parts of Earth's surface push up. They can be thousands of feet tall. The tallest is Mount Everest — over 29,000 feet. Mountains often have snow on top because it's colder higher up. They're hard to climb but beautiful to see.` },
            { word: `mountain range`, definition: `A CHAIN of MOUNTAINS together. The ROCKIES are a famous mountain range.`,
              audioPrompt: `A mountain range, {name}, is a chain of mountains together. Like a long row of giants. The Rockies in North America are a famous range. So are the Andes in South America, the Himalayas in Asia, the Alps in Europe. Mountain ranges stretch across hundreds or thousands of miles. They affect weather. They divide land. They're full of beauty and adventure.` },
            { word: `snow`,           definition: `Frozen WATER falling from clouds. Mountain tops often have SNOW.`,
              audioPrompt: `Snow, {name}, is frozen water falling from clouds. Mountain tops often have snow because it's so cold up there. Even in summer! As you go higher up a mountain, the air gets colder. Snow builds up over years. Melting snow feeds streams and rivers in spring. Many people depend on this melt water. Mountains catch and hold water for the world.` },
          ],
        },

        {
          id: `l08-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `RIVERS and LAKES`,
          paragraphs: [
            `Water shapes the land too. RIVERS and LAKES are landforms made of FRESH WATER.`,
            `A RIVER is a long stream of water flowing across the land — usually from mountains down to the ocean. Famous rivers include the AMAZON (in South America), the NILE (in Africa), and the MISSISSIPPI (in North America). Rivers give us FRESH WATER to drink, water for FARMING, places to FISH, and ways to TRAVEL by boat. A LAKE is a big body of water surrounded by land. The GREAT LAKES in North America are some of the biggest. Rivers and lakes are where MANY humans have built cities and farms throughout history. Where there's fresh water, there's life.`,
          ],
          image: `/explorer-assets/social-studies/l08-s3-rivers-lakes.webp`,
          imageCaption: `Rivers + lakes = fresh water. Drink, farm, fish, travel. Cities and farms grow near them.`,
          vocab: [
            { word: `river`,          definition: `A LONG stream of WATER flowing across land. RIVERS bring fresh water.`,
              audioPrompt: `A river, {name}, is a long stream of water flowing across land. Rivers usually flow from mountains down to the ocean. They bring fresh water to plants, animals, and people. Famous rivers — the Amazon in South America, the Nile in Africa, the Mississippi in North America. People have built cities along rivers for thousands of years. Where there's a river, there's life.` },
            { word: `lake`,           definition: `A BIG body of fresh WATER surrounded by LAND. LAKES are full of life.`,
              audioPrompt: `A lake, {name}, is a big body of fresh water surrounded by land. Lakes don't flow like rivers — they sit in one place. They're full of fish and other creatures. The Great Lakes in North America are some of the biggest in the world. Lake Baikal in Russia is the deepest. People swim, boat, and fish in lakes. Lakes are beautiful places.` },
            { word: `fresh water`,    definition: `Water WITHOUT salt. Rivers and lakes have FRESH WATER. Oceans have salt water.`,
              audioPrompt: `Fresh water, {name}, is water without salt. Rivers and lakes have fresh water. Oceans have salt water. Humans can only drink fresh water — salt water makes us sick. That's why rivers and lakes are SO important. They give people drinking water. They water crops. They're some of Earth's most precious resources. Only about 3 percent of Earth's water is fresh.` },
          ],
        },

        {
          id: `l08-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `DESERTS and FORESTS`,
          paragraphs: [
            `Two VERY different landforms — DESERTS (dry) and FORESTS (full of trees).`,
            `A DESERT is a very DRY place with little rain. The biggest is the SAHARA in Africa. Deserts can be HOT (like the Sahara) or COLD (like the Gobi in Asia). They have special plants like CACTUSES that can store water. People who live in deserts have learned to use less water and travel during cooler times. A FOREST is a LARGE area covered in TREES. Forests can be tropical (warm, wet, full of jungle plants), temperate (mild weather, like much of North America), or boreal (cold, mostly pine trees). Forests give homes to countless animals and clean air for the world.`,
          ],
          image: `/explorer-assets/social-studies/l08-s4-deserts-forests.webp`,
          imageCaption: `Deserts: very dry, cactuses, special survival. Forests: lots of trees, homes for animals, clean air.`,
          vocab: [
            { word: `desert`,         definition: `A very DRY landform with LITTLE RAIN. The SAHARA is the biggest hot desert.`,
              audioPrompt: `A desert, {name}, is a very dry landform with little rain. Some deserts are hot — like the Sahara in Africa. Some are cold — like the Gobi in Asia, where it can snow. All deserts have one thing in common: very little water. Special plants like cactuses store water. Special animals — lizards, snakes, camels — survive there. People who live in deserts have to be smart about water.` },
            { word: `forest`,         definition: `A LARGE area COVERED in TREES. FORESTS are home to many animals.`,
              audioPrompt: `A forest, {name}, is a large area covered in trees. Forests can be different kinds. Tropical forests near the equator are hot and wet — like the Amazon. Temperate forests have mild seasons — like in much of North America. Boreal forests in the far north are cold and mostly pine trees. All forests are home to many animals and plants. They also clean the air for the whole planet.` },
            { word: `cactus`,         definition: `A SPECIAL PLANT that can store WATER. CACTUSES live in deserts.`,
              audioPrompt: `A cactus, {name}, is a special plant that can store water. Cactuses live in deserts. They've adapted to survive without much water. Their thick stems store water for when there's a drought. Their spines protect them from animals that might eat them. Some cactuses grow tall and tree-like. Others are small and round. They're amazing survivors in tough conditions.` },
          ],
        },

        {
          id: `l08-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `PLAINS and VALLEYS`,
          paragraphs: [
            `Now for the FLATTER kinds of land — PLAINS and VALLEYS.`,
            `A PLAIN is a wide, FLAT area of land — perfect for FARMING. The GREAT PLAINS in the middle of North America stretch for thousands of miles. Most of the food we eat comes from plains — wheat, corn, beans, vegetables. A VALLEY is a LOW area between hills or mountains. Often a RIVER runs through a valley. Valleys often have very good SOIL because the river deposits rich dirt. Many famous cities are in valleys — they have good water, good farming, and protection from mountain weather. Both plains and valleys are GREAT for human communities.`,
          ],
          image: `/explorer-assets/social-studies/l08-s5-plains-valleys.webp`,
          imageCaption: `Plains: wide and flat, great for farming. Valleys: low areas between hills, good soil and water.`,
          vocab: [
            { word: `plain`,          definition: `A WIDE, FLAT area of land. PLAINS are perfect for farming.`,
              audioPrompt: `A plain, {name}, is a wide, flat area of land. Plains are perfect for farming because they're easy to plow and have good soil. The Great Plains in the middle of North America stretch for thousands of miles. Most of the food humans eat — wheat, corn, vegetables — comes from plains. They're some of the most important landforms for human survival.` },
            { word: `valley`,         definition: `A LOW area between HILLS or mountains. Often has a river running through.`,
              audioPrompt: `A valley, {name}, is a low area between hills or mountains. Often a river runs through a valley. Over time, the river carries rich dirt downhill and deposits it in the valley. That makes valley soil great for farming. Many famous cities — like ones along the Nile, the Indus, the Mississippi — started in valleys with great soil and water access.` },
            { word: `soil`,           definition: `The DIRT plants grow in. GOOD SOIL means food can grow well.`,
              audioPrompt: `Soil, {name}, is the dirt plants grow in. Good soil means food can grow well. Some soil is rich and dark — full of nutrients. Other soil is sandy or rocky — harder for plants. The best soil is often found in plains and valleys. That's why farmers like flat areas with rich soil. Without good soil, communities can't grow enough food to survive.` },
          ],
        },

        {
          id: `l08-mag-6`,
          type: `magazine`,
          section: 6,
          headline: `ISLANDS and COASTS`,
          paragraphs: [
            `Last but not least — landforms touching the OCEAN. ISLANDS and COASTS.`,
            `An ISLAND is a piece of land COMPLETELY SURROUNDED by WATER. Some islands are tiny. Others are HUGE — like Greenland or Madagascar. People who live on islands often FISH for food and travel by boat. A COAST is the part of land that meets the ocean. It might have BEACHES, CLIFFS, or harbors. Many of the world's biggest cities are on coasts — New York, Los Angeles, Tokyo, Mumbai. The ocean gives them trade, fish, fresh air, and travel. Each landform shapes the life of people who live near it. We're connected to the land.`,
          ],
          image: `/explorer-assets/social-studies/l08-s6-islands-coasts.webp`,
          imageCaption: `Islands: land surrounded by water. Coasts: where land meets ocean. Beaches, cliffs, big cities.`,
          vocab: [
            { word: `island`,         definition: `A piece of LAND completely SURROUNDED by water. Hawaii is made of ISLANDS.`,
              audioPrompt: `An island, {name}, is a piece of land completely surrounded by water. Hawaii is made of islands. Some islands are tiny — just a little patch with palm trees. Others are huge — like Greenland (the world's biggest island). Madagascar is another big one, off the coast of Africa. People who live on islands often fish for food and use boats to travel between places.` },
            { word: `coast`,          definition: `Where LAND meets the OCEAN. COASTS have beaches and many big cities.`,
              audioPrompt: `A coast, {name}, is where land meets the ocean. Coasts have beaches, cliffs, harbors, and sea breezes. Many of the world's biggest cities are on coasts — New York, Los Angeles, Tokyo, Mumbai, Sydney. The ocean gives them trade (ships can dock), fish to eat, fresh air, and travel. About 40 percent of all people live near a coast.` },
            { word: `landforms shape life`, definition: `How and WHERE people live DEPENDS on landforms. They SHAPE life.`,
              audioPrompt: `Landforms shape life, {name}. How and where people live depends on landforms. People near oceans often eat fish. People in mountains often raise goats. People on plains often farm. People in deserts use less water. People near forests use wood. Each landform gives different things — and asks for different things in return. We're connected to the land we live on.` },
          ],
        },

        {
          id: `l08-game`,
          type: `interactive`,
          format: `drag-match`,
          guideText: `Let's see what you remember, {name}.`,
          buckets: [
            { id: `fact`, label: `✅ Yes, that's true!`, color: `#34D399` },
            { id: `myth`, label: `❌ No way!`,         color: `#F87171` },
          ],
          items: [
            { id: `l08-g1`, image: `l08-game-1.webp`, label: `LANDFORMS shape how people LIVE — coastal people fish, mountain people herd, plains people farm.`,
              matchPhrase: `Yes! Landforms shape life. Where you live affects what you eat, how you build homes, what you do for work. People adapt to their landforms in beautiful, creative ways.`,
              correctMatch: `fact` },
            { id: `l08-g2`, image: `l08-game-2.webp`, label: `Earth has incredible VARIETY of landforms — mountains, deserts, forests, plains, rivers, islands.`,
              matchPhrase: `True! Earth's land has many different shapes — landforms. They make our planet varied and beautiful. Each one is home to different plants, animals, and people.`,
              correctMatch: `fact` },
            { id: `l08-g3`, image: `l08-game-3.webp`, label: `The entire Earth is COMPLETELY FLAT everywhere — no mountains, no valleys, no variety.`,
              matchPhrase: `Not at all! Earth has tons of landforms. Mountains, rivers, deserts, forests, plains, valleys, islands. Earth is incredibly varied — that's part of what makes it beautiful.`,
              correctMatch: `myth` },
            { id: `l08-g4`, image: `l08-game-4.webp`, label: `LANDFORMS have ZERO effect on human life — everyone lives exactly the same way everywhere.`,
              matchPhrase: `Definitely not! Landforms hugely shape life. People in deserts adapted to little water. People in mountains adapted to cold and altitude. People near oceans adapted to fishing. Landforms shape everything.`,
              correctMatch: `myth` },
          ],
        },

        {
          id: `l08-quiz`,
          type: `quiz`,
          guideText: `Let's see what you remember, {name}.`,
          questions: [
            { id: `l08-q1`, format: `multiple-choice`,
              question: `What is a LANDFORM?`,
              options: [`A type of cookie`, `A SHAPE of land on Earth — mountains, rivers, deserts, plains`, `Only one thing`, `A type of building`],
              correctIndex: 1,
              explanation: `A landform is a shape of land on Earth. Mountains, rivers, deserts, forests, plains, valleys, islands — all landforms. They make Earth's surface varied and beautiful.` },
            { id: `l08-q2`, format: `multiple-choice`,
              question: `What's the TALLEST MOUNTAIN on Earth?`,
              options: [`A small hill`, `MOUNT EVEREST — in Asia, over 29,000 feet tall`, `Mount Rushmore`, `A volcano`],
              correctIndex: 1,
              explanation: `Mount Everest! In Asia, in the Himalayan mountain range. Over 29,000 feet — higher than airplanes usually fly. Few people have climbed it because it's so dangerous.` },
            { id: `l08-q3`, format: `multiple-choice`,
              question: `Why are PLAINS good for farming?`,
              options: [`They're cold`, `They're WIDE and FLAT — easy to plow, often have good soil`, `They have lots of mountains`, `They're rocky`],
              correctIndex: 1,
              explanation: `Plains are wide and flat with often good soil. Perfect for farming. Most of the food humans eat — wheat, corn, vegetables — comes from plains. The Great Plains in North America stretch for thousands of miles.` },
            { id: `l08-q4`, format: `true-false`,
              question: `An ISLAND is a piece of land COMPLETELY SURROUNDED by water.`,
              correctAnswer: true,
              explanation: `True! An island is land surrounded by water on all sides. Hawaii is made of islands. Greenland is the world's biggest island. Madagascar is another huge one. People on islands often fish and travel by boat.` },
            { id: `l08-q5`, format: `fill-blank`,
              question: `A ___ is a very dry place with little rain. Cactuses and camels live there.`,
              options: [`desert`, `forest`, `lake`, `glacier`],
              correctIndex: 0,
              explanation: `Desert! Very dry, little rain. Cactuses store water. Camels go long times without drinking. The Sahara in Africa is the biggest hot desert.` },
            { id: `l08-q6`, format: `multiple-choice`,
              question: `How do LANDFORMS affect HUMAN life?`,
              options: [`They don't`, `They SHAPE what we eat, how we live, where we build cities, and what work we do`, `Only adults notice`, `Just a little bit`],
              correctIndex: 1,
              explanation: `Hugely! Landforms shape life. Coastal people fish. Mountain people herd animals. Plains people farm. Desert people save water. Forest people use wood. Each landform shapes its people.` },
          ],
        },

        {
          id: `l08-realworld`,
          type: `real-world`,
          guideText: `Here's something cool, {name}. The world's landforms are STILL CHANGING — just very slowly. Mountains are still being PUSHED UP (the Himalayas grow a few millimeters every year). Rivers are still CARVING valleys deeper. Coasts are slowly being SHAPED by waves. Glaciers (huge moving sheets of ice) are slowly RESHAPING the land they sit on. Some changes happen FAST — like when a volcano erupts and creates a new island, or when an earthquake reshapes a coast. Earth is alive and constantly being remade. The landforms you know today won't look exactly the same in a million years.`,
          familyAdventure: `Together, list the LANDFORMS near where you LIVE. Are there mountains? A river? A lake? A coast? Forests nearby? Plains? Talk about how YOUR landforms have shaped your life. Do you swim in a lake? Hike in mountains? Eat food grown on plains? Visit a beach on the coast? Notice — your landforms are part of your story.`,
          creativePrompt: `Pick your FAVORITE landform — mountain, ocean, river, desert, forest, anything. Draw a picture of yourself in that landform. What are you doing? Climbing? Swimming? Camping? Exploring? Add details — animals, plants, weather. Show what makes that landform special to YOU. Earth has so many beautiful places.`,
        },

        {
          id: `l08-celebration`,
          type: `celebration`,
          message: `Wonderful, {name}. You now know the major LANDFORMS. MOUNTAINS (tall and rocky). RIVERS (flowing fresh water). LAKES (water surrounded by land). DESERTS (very dry). FORESTS (lots of trees). PLAINS (flat farming land). VALLEYS (low areas between hills). ISLANDS (land surrounded by water). COASTS (where land meets ocean). Each landform SHAPES the life of people who live near it. Now you can see Earth more clearly than before. — Atlas 🐻`,
          badge: `landforms-explorer`,
          badgeName: `Landforms Explorer`,
          xpEarned: 50,
        },

      ],
    },
  ],
};

export default SOCIAL_STUDIES_L08;

// ─── Dev asset check ─────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const mags  = SOCIAL_STUDIES_L08.lessons[0].screens.filter(s => s.type === 'magazine').length;
  const game  = SOCIAL_STUDIES_L08.lessons[0].screens.find(s => s.type === 'interactive')?.items?.length ?? 0;
  const quiz  = SOCIAL_STUDIES_L08.lessons[0].screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  console.log(`[LESSON-SOCIAL-STUDIES-L08] Loaded: "Landforms" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
}
