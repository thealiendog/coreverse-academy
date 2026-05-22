// ─────────────────────────────────────────────────────────────────────────────
// SOCIAL STUDIES  |  L08 — Landforms
// Age band : explorers (6–8)   Guide: atlas
// Standards: C3 D2.Geo.2.K-2 / D2.Geo.4.K-2
// CALIBRATED: Explorer spec v1 (May 2026)
// ─────────────────────────────────────────────────────────────────────────────

const SOCIAL_STUDIES_L08 = {
  ageBand: `explorers`,
  subjectId: `social_studies`,
  guide: `atlas`,

  lessons: [
    {
      id: `social-studies-6-8-08`,
      title: `Landforms`,
      duration: 12,
      xpReward: 50,
      badge: `landforms-explorer`,
      badgeName: `Landforms Explorer`,

      screens: [
        {
          id: `l08-welcome`,
          type: `welcome`,
          guideText: `Hi {name}. Atlas here. You know the continents and oceans. But each continent has different shapes. Mountains, rivers, deserts, forests. These shapes are called landforms. They make the world look so different in different places. Let's explore.`,
          headline: `Landforms`,
          subtitle: `The shapes of Earth and how they shape us`,
          visual: `/explorer-assets/social-studies/l08-welcome.webp`,
        },

        {
          id: `l08-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Earth Has Many Shapes`,
          paragraphs: [
            `Earth's land is not flat and the same everywhere. It comes in many different shapes.`,
            `Some land is high, like mountains. Some is flat, like plains. Some is dry, like deserts. Some has water, like rivers. These shapes are called landforms. They make Earth amazing.`,
          ],
          image: `/explorer-assets/social-studies/l08-s1-shapes-earth.webp`,
          imageCaption: `Earth's land has many shapes. Each shape is called a landform.`,
          vocab: [
            { word: `landform`, definition: `A shape of land on Earth.`,
              audioPrompt: `A landform is a shape of land, {name}. Mountains, rivers, deserts, forests, plains. All landforms. They make Earth's surface different and beautiful in every place.` },
            { word: `shape`, definition: `The form of something.`,
              audioPrompt: `A shape is the form of something, {name}. Each landform has its own shape. Mountains are pointy. Plains are flat. Rivers are long. Each shape grew over millions of years.` },
            { word: `if`, definition: `A word that shows a condition.`,
              audioPrompt: `If is a word that shows a condition, {name}. If you live near a river, you have water. If you live in the desert, it is dry. If helps us think about cause and effect.` },
          ],
        },

        {
          id: `l08-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Mountains`,
          paragraphs: [
            `Let's start with the tallest landform. Mountains.`,
            `Mountains are huge piles of rock. They rise high above the land around them. Many have snow on top because it is colder up high. The tallest mountain is Mount Everest in Asia.`,
          ],
          image: `/explorer-assets/social-studies/l08-s2-mountains.webp`,
          imageCaption: `Mountains are tall and rocky. Often snowy on top.`,
          vocab: [
            { word: `mountain`, definition: `A tall, rocky landform that rises above the land.`,
              audioPrompt: `A mountain is a tall, rocky landform, {name}. It rises high above the land. Mountains can be thousands of feet tall. They take millions of years to form. They are beautiful and challenging.` },
            { word: `tall`, definition: `Reaching high up.`,
              audioPrompt: `Tall means reaching high up, {name}. Mountains are very tall. So tall they often have snow on top. So tall the air gets thin and cold. So tall they take your breath away.` },
            { word: `snow`, definition: `Frozen water that falls from clouds.`,
              audioPrompt: `Snow is frozen water from the sky, {name}. Mountain tops often have snow. Even in summer. The melting snow feeds streams and rivers in spring. Mountains store water for everyone.` },
          ],
        },

        {
          id: `l08-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Rivers and Lakes`,
          paragraphs: [
            `Water shapes the land too. Rivers and lakes are landforms made of fresh water.`,
            `A river is a long stream of water. It flows across the land. Often from mountains down to the ocean. A lake is a big body of water with land all around it. Both give us fresh water to drink.`,
          ],
          image: `/explorer-assets/social-studies/l08-s3-rivers-lakes.webp`,
          imageCaption: `Rivers flow. Lakes sit still. Both have fresh water.`,
          vocab: [
            { word: `river`, definition: `A long stream of fresh water flowing across the land.`,
              audioPrompt: `A river is a long stream of fresh water, {name}. It flows across the land. From mountains down to the ocean. Famous rivers are the Amazon, the Nile, and the Mississippi. They give life.` },
            { word: `lake`, definition: `A big body of fresh water with land all around.`,
              audioPrompt: `A lake is a big body of fresh water, {name}. Land is all around it. Lakes do not flow like rivers. They sit still. The Great Lakes in North America are huge. People swim and fish in lakes.` },
            { word: `fresh water`, definition: `Water without salt. Safe to drink.`,
              audioPrompt: `Fresh water is water without salt, {name}. Rivers and lakes have fresh water. Oceans have salt water. People can only drink fresh water. That is why rivers and lakes are so important.` },
          ],
        },

        {
          id: `l08-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Deserts and Forests`,
          paragraphs: [
            `Two more landforms. Deserts and forests.`,
            `A desert is a very dry place. Little rain. The Sahara in Africa is the biggest hot desert. A forest is a big area covered in trees. Forests are home to many animals. They clean the air for the planet.`,
          ],
          image: `/explorer-assets/social-studies/l08-s4-deserts-forests.webp`,
          imageCaption: `Deserts are dry. Forests are full of trees and life.`,
          vocab: [
            { word: `desert`, definition: `A very dry landform with little rain.`,
              audioPrompt: `A desert is a very dry place, {name}. Little rain. Special plants like cactus live there. They store water. The Sahara in Africa is the biggest hot desert. Some deserts can even be cold.` },
            { word: `forest`, definition: `A big area covered in many trees.`,
              audioPrompt: `A forest is a big area of trees, {name}. Many animals live there. Birds, deer, bears, and bugs. Forests clean the air for the whole planet. They are full of life.` },
            { word: `cactus`, definition: `A special plant that stores water and lives in deserts.`,
              audioPrompt: `A cactus is a special plant, {name}. It stores water in its thick stem. That helps it survive in the dry desert. Its spines protect it from animals. Cactus plants are amazing survivors.` },
          ],
        },

        {
          id: `l08-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Plains, Valleys, and Islands`,
          paragraphs: [
            `More landforms. A plain is a wide, flat area of land. Plains are great for farming. Most of our food comes from plains.`,
            `A valley is a low area between hills or mountains. Often a river runs through it. An island is a piece of land with water all around it. Hawaii is made of islands.`,
          ],
          image: `/explorer-assets/social-studies/l08-s5-plains-valleys.webp`,
          imageCaption: `Plains are flat. Valleys are low. Islands have water all around.`,
          vocab: [
            { word: `plain`, definition: `A wide, flat area of land.`,
              audioPrompt: `A plain is a wide, flat area of land, {name}. Plains are great for farming. The Great Plains in North America stretch for thousands of miles. Most of our food grows on plains.` },
            { word: `valley`, definition: `A low area between hills or mountains.`,
              audioPrompt: `A valley is a low area, {name}. It sits between hills or mountains. Often a river flows through it. Valley soil is great for growing food. Many cities are built in valleys.` },
            { word: `island`, definition: `A piece of land with water all around it.`,
              audioPrompt: `An island is a piece of land, {name}. With water all around. Hawaii is made of islands. So is Madagascar. People on islands often fish for food. They use boats to travel.` },
          ],
        },

        {
          id: `l08-mag-6`,
          type: `magazine`,
          section: 6,
          headline: `Landforms Shape How We Live`,
          paragraphs: [
            `Here is the big idea. Landforms shape how people live.`,
            `If you live near the ocean, you might eat fish. If you live in mountains, you might raise goats. If you live on a plain, you might farm. The land you live on shapes your food, your home, even your culture.`,
          ],
          image: `/explorer-assets/social-studies/l08-s6-islands-coasts.webp`,
          imageCaption: `Landforms shape how we live. Food, homes, culture all depend on the land.`,
          vocab: [
            { word: `coast`, definition: `Where land meets the ocean.`,
              audioPrompt: `A coast is where land meets the ocean, {name}. Many big cities are on coasts. New York. Los Angeles. Tokyo. Coasts have beaches, harbors, and sea breezes. Lots of people live near them.` },
            { word: `shape`, definition: `To make something a certain way.`,
              audioPrompt: `To shape means to make something a certain way, {name}. Landforms shape how we live. Mountain people herd. Coast people fish. Plain people farm. The land shapes us.` },
            { word: `connected`, definition: `Linked together.`,
              audioPrompt: `Connected means linked together, {name}. People are connected to the land they live on. Food, homes, work. All connected. Take care of the land and the land takes care of you.` },
          ],
        },

        {
          id: `l08-game`,
          type: `interactive`,
          format: `drag-identify`,
          guideText: `Sort each landform, {name}. Is it a mountain, river, desert, or island?`,
          buckets: [
            { id: `mountain`, label: `Mountain`, color: `#A78BFA` },
            { id: `river`,    label: `River`,    color: `#60A5FA` },
            { id: `desert`,   label: `Desert`,   color: `#FBBF24` },
            { id: `island`,   label: `Island`,   color: `#34D399` },
          ],
          items: [
            { id: `l08-g1`, image: `l08-game-1.webp`, label: `Tall and rocky with snow on top`,
              matchPhrase: `Yes! That is a mountain. Tall, rocky, often snowy.`, correctMatch: `mountain` },
            { id: `l08-g2`, image: `l08-game-2.webp`, label: `Mount Everest`,
              matchPhrase: `Right! Mount Everest is the tallest mountain on Earth.`, correctMatch: `mountain` },
            { id: `l08-g3`, image: `l08-game-3.webp`, label: `A long stream of water flowing to the ocean`,
              matchPhrase: `Yes! That is a river. Rivers carry fresh water.`, correctMatch: `river` },
            { id: `l08-g4`, image: `l08-game-4.webp`, label: `The Amazon and the Mississippi`,
              matchPhrase: `Right! Both are famous rivers. The Amazon is in South America, the Mississippi in North America.`, correctMatch: `river` },
            { id: `l08-g5`, image: `l08-game-5.webp`, label: `Very dry place with cactus and camels`,
              matchPhrase: `Yes! That is a desert. Hot and dry, with special plants and animals.`, correctMatch: `desert` },
            { id: `l08-g6`, image: `l08-game-6.webp`, label: `The Sahara`,
              matchPhrase: `Right! The Sahara in Africa is the biggest hot desert.`, correctMatch: `desert` },
            { id: `l08-g7`, image: `l08-game-7.webp`, label: `A piece of land with water all around it`,
              matchPhrase: `Yes! That is an island. Water on every side.`, correctMatch: `island` },
            { id: `l08-g8`, image: `l08-game-8.webp`, label: `Hawaii`,
              matchPhrase: `Right! Hawaii is made of islands. Beautiful ones surrounded by ocean.`, correctMatch: `island` },
          ],
        },

        {
          id: `l08-quiz`,
          type: `quiz`,
          guideText: `Let's see what you remember, {name}.`,
          questions: [
            { id: `l08-q1`, format: `multiple-choice`,
              question: `What is a landform?`,
              options: [`A type of cookie`, `A shape of land on Earth`, `Only one thing`, `A building`],
              correctIndex: 1,
              explanation: `A landform is a shape of land on Earth. Mountains, rivers, deserts, forests, plains. All landforms.` },
            { id: `l08-q2`, format: `multiple-choice`,
              question: `What is the tallest mountain on Earth?`,
              options: [`A small hill`, `Mount Everest in Asia`, `Mount Rushmore`, `A volcano`],
              correctIndex: 1,
              explanation: `Mount Everest! In Asia. Over 29,000 feet tall. The tallest mountain on Earth.` },
            { id: `l08-q3`, format: `multiple-choice`,
              question: `Why are plains good for farming?`,
              options: [`Too cold`, `Wide and flat with good soil`, `Lots of rocks`, `Lots of mountains`],
              correctIndex: 1,
              explanation: `Plains are wide and flat. Often with good soil. Perfect for farming food.` },
            { id: `l08-q4`, format: `true-false`,
              question: `An island is a piece of land with water all around it.`,
              correctAnswer: true,
              explanation: `True! Islands have water on every side. Hawaii is made of islands.` },
            { id: `l08-q5`, format: `fill-blank`,
              question: `A ___ is a very dry place where cactus and camels live.`,
              options: [`desert`, `forest`, `lake`, `mountain`],
              correctIndex: 0,
              explanation: `Desert! Very dry. Little rain. Special plants and animals live there.` },
            { id: `l08-q6`, format: `multiple-choice`,
              question: `How do landforms shape how people live?`,
              options: [`They do not`, `They shape food, homes, and what we do`, `Only sometimes`, `Only in summer`],
              correctIndex: 1,
              explanation: `Landforms shape our food, homes, work, and culture. Coast people fish. Mountain people herd. Plains people farm.` },
          ],
        },

        {
          id: `l08-realworld`,
          type: `real-world`,
          guideText: `Earth's landforms are still changing. Mountains are still growing taller, just very slowly. Rivers are still carving valleys deeper. Coasts are slowly shaped by waves. Earth is alive. It is being remade all the time.`,
          familyAdventure: `List the landforms near where you live. Mountains? A river? A lake? A coast? Forests? Plains? Talk about how your landforms shape your life. Do you swim, hike, or visit a beach?`,
          creativePrompt: {
            intro: `Pick your favorite landform. Draw a picture of yourself there. Show what you would do.`,
            floor: `Write 3 sentences about your favorite landform. Use the sentence starters below.`,
            stretch: `Write 5 sentences. Add what makes it special.`,
            frames: [
              `My favorite landform is ___.`,
              `In this place, I would ___.`,
              `The animals that live there are ___.`,
              `If I lived there, I would eat ___.`,
              `I love it because ___.`,
            ],
          },
        },

        {
          id: `l08-celebration`,
          type: `celebration`,
          message: `Great job, {name}! You know the big landforms now. Mountains are tall. Rivers flow. Lakes sit still. Deserts are dry. Forests have trees. Plains are flat. Islands have water all around. Each landform shapes how people live. Earth is full of different beautiful shapes. Atlas the Bear.`,
          badge: `landforms-explorer`,
          badgeName: `Landforms Explorer`,
          xpEarned: 50,
        },
      ],
    },
  ],
};

export default SOCIAL_STUDIES_L08;

// ─── Dev asset check ──────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const mags = SOCIAL_STUDIES_L08.lessons[0].screens.filter(s => s.type === 'magazine').length;
  const game = SOCIAL_STUDIES_L08.lessons[0].screens.find(s => s.type === 'interactive')?.items?.length ?? 0;
  const quiz = SOCIAL_STUDIES_L08.lessons[0].screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  console.log(`[LESSON-SOCIAL-STUDIES-L08] Loaded: "Landforms" with ${mags} magazine sections, ${game} game items, ${quiz} quiz questions`);
}
