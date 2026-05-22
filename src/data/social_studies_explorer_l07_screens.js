// ─────────────────────────────────────────────────────────────────────────────
// SOCIAL STUDIES  |  L07 — Continents and Oceans
// Age band : explorers (6–8)   Guide: atlas
// Standards: C3 D2.Geo.2.K-2
// CALIBRATED: Explorer spec v1 (May 2026)
// ─────────────────────────────────────────────────────────────────────────────

const SOCIAL_STUDIES_L07 = {
  ageBand: `explorers`,
  subjectId: `social_studies`,
  guide: `atlas`,

  lessons: [
    {
      id: `social-studies-6-8-07`,
      title: `Continents and Oceans`,
      duration: 12,
      xpReward: 50,
      badge: `continents-oceans-explorer`,
      badgeName: `Continents and Oceans Explorer`,

      screens: [
        {
          id: `l07-welcome`,
          type: `welcome`,
          guideText: `Hi {name}. Atlas here. Today we meet Earth's big pieces. Seven big pieces of land called continents. Five big bodies of water called oceans. Let's go meet them.`,
          headline: `Continents and Oceans`,
          subtitle: `Earth's seven big lands and five big waters`,
          visual: `/explorer-assets/social-studies/l07-welcome.webp`,
        },

        {
          id: `l07-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Earth's Big Pieces`,
          paragraphs: [
            `Look at a globe. You see two main things. Big pieces of land. And big bodies of water.`,
            `The big pieces of land are called continents. Earth has seven of them. The big bodies of water are called oceans. Earth has five of them. Together, they cover the whole Earth.`,
          ],
          image: `/explorer-assets/social-studies/l07-s1-big-pieces.webp`,
          imageCaption: `Seven continents plus five oceans equals the whole Earth.`,
          vocab: [
            { word: `continent`, definition: `A big piece of land on Earth.`,
              audioPrompt: `A continent is a big piece of land, {name}. Earth has seven continents. North America, South America, Europe, Africa, Asia, Australia, Antarctica. Almost all people live on a continent.` },
            { word: `ocean`, definition: `A big body of salt water.`,
              audioPrompt: `An ocean is a big body of salt water, {name}. Earth has five oceans. Pacific, Atlantic, Indian, Arctic, Southern. They cover most of Earth. They are full of fish and dolphins and whales.` },
            { word: `Earth`, definition: `Our planet. The world we live on.`,
              audioPrompt: `Earth is our planet, {name}. It has seven continents and five oceans. From space, it looks blue because of all the water. Earth is the only planet we know with life.` },
          ],
        },

        {
          id: `l07-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `The Americas`,
          paragraphs: [
            `Two continents are on the west side of the world. North America and South America.`,
            `North America has the USA, Canada, and Mexico. It has tall mountains and big forests. South America is below it. It has Brazil, Peru, and the Amazon rainforest.`,
          ],
          image: `/explorer-assets/social-studies/l07-s2-north-south-america.webp`,
          imageCaption: `North America: USA, Canada, Mexico. South America: Brazil, Peru, Amazon.`,
          vocab: [
            { word: `North America`, definition: `The continent with the USA, Canada, and Mexico.`,
              audioPrompt: `North America has the USA, Canada, and Mexico, {name}. It is probably the continent you live on. It has Rocky Mountains, big lakes, forests, and deserts. About 580 million people live here.` },
            { word: `South America`, definition: `The continent south of North America. Has Brazil and Peru.`,
              audioPrompt: `South America is south of North America, {name}. It has Brazil, Peru, Argentina, and Colombia. The Amazon rainforest is here. The biggest rainforest in the world.` },
            { word: `rainforest`, definition: `A thick wet forest full of life.`,
              audioPrompt: `A rainforest is a thick wet forest, {name}. It rains a lot. Many animals live there. The Amazon in South America is the biggest. It makes oxygen for the whole planet.` },
          ],
        },

        {
          id: `l07-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Europe and Africa`,
          paragraphs: [
            `Across the Atlantic Ocean are two more continents. Europe and Africa.`,
            `Europe is small but important. It has France, Germany, Italy, Spain, and many more. Africa is huge. It has 54 countries. The Sahara Desert is in Africa. The first humans lived there long ago.`,
          ],
          image: `/explorer-assets/social-studies/l07-s3-europe-africa.webp`,
          imageCaption: `Europe: small with many countries. Africa: huge with 54 countries.`,
          vocab: [
            { word: `Europe`, definition: `The continent with France, Italy, and Spain.`,
              audioPrompt: `Europe has France, Italy, Spain, Germany, and many more, {name}. It is small but very famous. Many big ideas in science and art started here. Cities like Paris and Rome are here.` },
            { word: `Africa`, definition: `The huge continent with 54 countries.`,
              audioPrompt: `Africa is huge, {name}. It has 54 countries. More than any other continent. The Sahara desert is here. So are lions, elephants, and giraffes. The first humans lived in Africa.` },
            { word: `desert`, definition: `A very dry place with little rain.`,
              audioPrompt: `A desert is a very dry place, {name}. The Sahara in Africa is the biggest hot desert. It is mostly sand. Some animals live there, like camels and lizards. Few plants grow.` },
          ],
        },

        {
          id: `l07-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Asia: The Biggest`,
          paragraphs: [
            `Now meet the biggest continent. Asia.`,
            `Asia is huge. It has the most people. Over 4.6 billion live there. More than half of all humans. Famous countries are China, India, Japan, and Korea. The tallest mountain on Earth, Mount Everest, is in Asia.`,
          ],
          image: `/explorer-assets/social-studies/l07-s4-asia.webp`,
          imageCaption: `Asia: biggest continent, most people, tallest mountain.`,
          vocab: [
            { word: `Asia`, definition: `The biggest continent. Has the most people.`,
              audioPrompt: `Asia is the biggest continent, {name}. Over 4.6 billion people live there. More than half of all humans. China, India, Japan, Korea, and many more countries are in Asia.` },
            { word: `Mount Everest`, definition: `The tallest mountain on Earth.`,
              audioPrompt: `Mount Everest is the tallest mountain on Earth, {name}. It is in Asia. Over 29,000 feet high. Higher than airplanes usually fly. Some people climb it as a huge challenge.` },
            { word: `billion`, definition: `A really big number. A thousand million.`,
              audioPrompt: `A billion is a really big number, {name}. A thousand million. Asia has over 4.6 billion people. That is more than half of everyone on Earth. So many people.` },
          ],
        },

        {
          id: `l07-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Australia and Antarctica`,
          paragraphs: [
            `The last two continents are special. Australia is the smallest. It is also one country. It has kangaroos, koalas, and the Great Barrier Reef.`,
            `Antarctica is at the bottom of Earth. It is freezing cold. Covered in ice. No countries live there. Only penguins, seals, and scientists studying the ice.`,
          ],
          image: `/explorer-assets/social-studies/l07-s5-australia-antarctica.webp`,
          imageCaption: `Australia: smallest, kangaroos. Antarctica: frozen, penguins.`,
          vocab: [
            { word: `Australia`, definition: `The smallest continent. Also one country.`,
              audioPrompt: `Australia is the smallest continent, {name}. It is also one country. Surrounded by ocean. It has unique animals. Kangaroos, koalas, and the famous Great Barrier Reef.` },
            { word: `Antarctica`, definition: `The frozen continent at the bottom of Earth.`,
              audioPrompt: `Antarctica is the frozen continent, {name}. At the bottom of Earth. The coldest place anywhere. Covered in thick ice. No countries. Only penguins, seals, and scientists.` },
            { word: `or`, definition: `A word that shows a choice.`,
              audioPrompt: `Or is a word that shows a choice, {name}. Continent or ocean? Land or water? North America or South America? Or helps you pick between two things.` },
          ],
        },

        {
          id: `l07-mag-6`,
          type: `magazine`,
          section: 6,
          headline: `The Five Oceans`,
          paragraphs: [
            `Now the water. Earth has five oceans. The Pacific is biggest. It is between the Americas and Asia.`,
            `The Atlantic is between the Americas and Europe and Africa. The Indian Ocean is south of Asia. The Arctic is at the top of Earth. The Southern is at the bottom. All five oceans are connected.`,
          ],
          image: `/explorer-assets/social-studies/l07-s6-five-oceans.webp`,
          imageCaption: `Five oceans: Pacific, Atlantic, Indian, Arctic, Southern. All connected.`,
          vocab: [
            { word: `Pacific`, definition: `The biggest ocean. Between the Americas and Asia.`,
              audioPrompt: `The Pacific is the biggest ocean, {name}. It is so huge it covers about a third of Earth. Bigger than all land combined. Hawaii, Japan, and the Philippines are in the Pacific.` },
            { word: `Atlantic`, definition: `The ocean between the Americas and Europe and Africa.`,
              audioPrompt: `The Atlantic Ocean is between the Americas and Europe and Africa, {name}. The second biggest. Many ships cross it. Explorers like Columbus crossed it long ago.` },
            { word: `connected`, definition: `Linked together.`,
              audioPrompt: `Connected means linked together, {name}. All five oceans are connected. Water flows between them. They are really one big world ocean with different names for different parts.` },
          ],
        },

        {
          id: `l07-game`,
          type: `interactive`,
          format: `drag-identify`,
          guideText: `Sort each name, {name}. Is it a continent or an ocean?`,
          buckets: [
            { id: `continent`, label: `Continent`, color: `#34D399` },
            { id: `ocean`,     label: `Ocean`,     color: `#60A5FA` },
          ],
          items: [
            { id: `l07-g1`, image: `l07-game-1.webp`, label: `Asia`,
              matchPhrase: `Yes! Asia is the biggest continent. Most people live there.`, correctMatch: `continent` },
            { id: `l07-g2`, image: `l07-game-2.webp`, label: `Africa`,
              matchPhrase: `Right! Africa is a continent with 54 countries.`, correctMatch: `continent` },
            { id: `l07-g3`, image: `l07-game-3.webp`, label: `North America`,
              matchPhrase: `Yes! North America is a continent. The USA is on it.`, correctMatch: `continent` },
            { id: `l07-g4`, image: `l07-game-4.webp`, label: `Australia`,
              matchPhrase: `Right! Australia is the smallest continent. Also one country.`, correctMatch: `continent` },
            { id: `l07-g5`, image: `l07-game-5.webp`, label: `Pacific`,
              matchPhrase: `Yes! The Pacific is the biggest ocean on Earth.`, correctMatch: `ocean` },
            { id: `l07-g6`, image: `l07-game-6.webp`, label: `Atlantic`,
              matchPhrase: `Right! The Atlantic is the second biggest ocean.`, correctMatch: `ocean` },
            { id: `l07-g7`, image: `l07-game-7.webp`, label: `Indian`,
              matchPhrase: `Yes! The Indian Ocean is south of Asia.`, correctMatch: `ocean` },
            { id: `l07-g8`, image: `l07-game-8.webp`, label: `Arctic`,
              matchPhrase: `Right! The Arctic Ocean is at the top of Earth. Mostly frozen.`, correctMatch: `ocean` },
          ],
        },

        {
          id: `l07-quiz`,
          type: `quiz`,
          guideText: `Let's see what you remember, {name}.`,
          questions: [
            { id: `l07-q1`, format: `multiple-choice`,
              question: `How many continents are on Earth?`,
              options: [`Three`, `Seven`, `Twelve`, `Two`],
              correctIndex: 1,
              explanation: `Seven! North America, South America, Europe, Africa, Asia, Australia, Antarctica.` },
            { id: `l07-q2`, format: `multiple-choice`,
              question: `Which is the biggest continent?`,
              options: [`Africa`, `Asia`, `Europe`, `Australia`],
              correctIndex: 1,
              explanation: `Asia! It is the biggest. Over 4.6 billion people live there.` },
            { id: `l07-q3`, format: `multiple-choice`,
              question: `How many oceans are on Earth?`,
              options: [`One`, `Five`, `Twenty`, `Three`],
              correctIndex: 1,
              explanation: `Five! Pacific, Atlantic, Indian, Arctic, Southern. All connected.` },
            { id: `l07-q4`, format: `true-false`,
              question: `Africa has 54 countries. More than any other continent.`,
              correctAnswer: true,
              explanation: `True! Africa has 54 countries. It is the second biggest continent.` },
            { id: `l07-q5`, format: `fill-blank`,
              question: `___ is the smallest continent. It is also one country.`,
              options: [`Australia`, `Africa`, `Asia`, `America`],
              correctIndex: 0,
              explanation: `Australia! Smallest continent. Also one country. Kangaroos and koalas live there.` },
            { id: `l07-q6`, format: `multiple-choice`,
              question: `Which is the biggest ocean?`,
              options: [`Indian`, `Pacific`, `Arctic`, `Atlantic`],
              correctIndex: 1,
              explanation: `Pacific! Between the Americas and Asia. It covers about a third of Earth.` },
          ],
        },

        {
          id: `l07-realworld`,
          type: `real-world`,
          guideText: `Long ago, all the continents were joined as one giant continent called Pangaea. Then over millions of years, they slowly drifted apart. They are still moving today, just very slowly. About as fast as your fingernails grow. In another million years, Earth will look different.`,
          familyAdventure: `Get a globe or world map together. Point to each continent. Say its name. Point to each ocean. Say its name. Then talk about which continents your family has visited or wants to visit.`,
          creativePrompt: {
            intro: `Pick your favorite continent. Draw a picture of yourself there. Add something special about that place.`,
            floor: `Write 3 sentences about your favorite continent. Use the sentence starters below.`,
            stretch: `Write 5 sentences. Add why you picked it.`,
            frames: [
              `My favorite continent is ___.`,
              `One special thing there is ___.`,
              `I would like to see ___.`,
              `An ocean near it is ___.`,
              `I picked it because ___.`,
            ],
          },
        },

        {
          id: `l07-celebration`,
          type: `celebration`,
          message: `Wonderful, {name}! You know Earth's big pieces now. Seven continents: North America, South America, Europe, Africa, Asia, Australia, Antarctica. Five oceans: Pacific, Atlantic, Indian, Arctic, Southern. Asia is biggest. Australia is smallest. You can find your way around the whole globe. Atlas the Bear.`,
          badge: `continents-oceans-explorer`,
          badgeName: `Continents and Oceans Explorer`,
          xpEarned: 50,
        },
      ],
    },
  ],
};

export default SOCIAL_STUDIES_L07;

// ─── Dev asset check ──────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const mags = SOCIAL_STUDIES_L07.lessons[0].screens.filter(s => s.type === 'magazine').length;
  const game = SOCIAL_STUDIES_L07.lessons[0].screens.find(s => s.type === 'interactive')?.items?.length ?? 0;
  const quiz = SOCIAL_STUDIES_L07.lessons[0].screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  console.log(`[LESSON-SOCIAL-STUDIES-L07] Loaded: "Continents and Oceans" with ${mags} magazine sections, ${game} game items, ${quiz} quiz questions`);
}
