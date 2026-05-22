// ─────────────────────────────────────────────────────────────────────────────
// SOCIAL STUDIES  |  L09 — Weather and Climate Regions
// Age band : explorers (6–8)   Guide: atlas
// Standards: C3 D2.Geo.4.K-2
// CALIBRATED: Explorer spec v1 (May 2026)
// ─────────────────────────────────────────────────────────────────────────────

const SOCIAL_STUDIES_L09 = {
  ageBand: `explorers`,
  subjectId: `social_studies`,
  guide: `atlas`,

  lessons: [
    {
      id: `social-studies-6-8-09`,
      title: `Weather and Climate Regions`,
      duration: 12,
      xpReward: 50,
      badge: `weather-climate-explorer`,
      badgeName: `Weather and Climate Explorer`,

      screens: [
        {
          id: `l09-welcome`,
          type: `welcome`,
          guideText: `Hi {name}. Atlas here. Today we look at weather and climate. Weather is what is happening outside today. Climate is what a place is usually like. Different parts of Earth have very different climates. Let's find out why.`,
          headline: `Weather and Climate Regions`,
          subtitle: `What's happening in the sky and what it means for us`,
          visual: `/explorer-assets/social-studies/l09-welcome.webp`,
        },

        {
          id: `l09-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `What's the Sky Doing?`,
          paragraphs: [
            `Look outside. Is it sunny? Rainy? Windy? Snowy? That is weather.`,
            `Weather is what the air is doing right now. It can change a lot. Today is sunny. Tomorrow might be rainy. Weather changes every day. We pay attention to it so we know what to wear.`,
          ],
          image: `/explorer-assets/social-studies/l09-s1-weather.webp`,
          imageCaption: `Weather is what is happening in the sky today.`,
          vocab: [
            { word: `weather`, definition: `What the air is doing today.`,
              audioPrompt: `Weather is what the air is doing today, {name}. Sunny or rainy. Hot or cold. Windy or still. Weather changes from day to day. People check the forecast to plan their day.` },
            { word: `temperature`, definition: `How hot or cold the air is.`,
              audioPrompt: `Temperature is how hot or cold the air is, {name}. We use a thermometer to measure it. High temperature is warm. Low temperature is cold. Temperature changes all day.` },
            { word: `and`, definition: `A word that adds things together.`,
              audioPrompt: `And is a word that adds things together, {name}. The sky is sunny and warm. The day is windy and cool. And lets us link two ideas in a sentence.` },
          ],
        },

        {
          id: `l09-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Weather vs. Climate`,
          paragraphs: [
            `Weather is today. Climate is what a place is usually like over many years.`,
            `If someone says "I wore a coat in Miami today," that is weather. If someone says "Miami is usually warm," that is climate. Climate tells us the pattern. The big picture. Not just one day.`,
          ],
          image: `/explorer-assets/social-studies/l09-s2-weather-vs-climate.webp`,
          imageCaption: `Weather is today. Climate is the pattern over years.`,
          vocab: [
            { word: `climate`, definition: `What a place is usually like over many years.`,
              audioPrompt: `Climate is what a place is usually like, {name}. Over many years. Not just today. Some places are usually hot. Some are usually cold. Some are usually wet. That is climate.` },
            { word: `pattern`, definition: `Something that happens the same way over and over.`,
              audioPrompt: `A pattern is something that happens the same way, {name}. Over and over. Climate is a weather pattern. In the desert, dry is the pattern. In the tropics, rain is the pattern.` },
            { word: `usually`, definition: `Most of the time. The normal way.`,
              audioPrompt: `Usually means most of the time, {name}. Most days, not every day. A climate is what a place is usually like. Some days might be different. But the usual way is what matters.` },
          ],
        },

        {
          id: `l09-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Tropical: Hot and Wet`,
          paragraphs: [
            `Earth has different climate regions. The first one is tropical.`,
            `Tropical climates are near the equator. The middle of Earth. They are hot and wet all year. Rainforests like the Amazon are tropical. It rains almost every day. Many animals live there.`,
          ],
          image: `/explorer-assets/social-studies/l09-s3-tropical.webp`,
          imageCaption: `Tropical: hot and wet all year. Rainforests.`,
          vocab: [
            { word: `tropical`, definition: `A climate near the equator that is hot and wet.`,
              audioPrompt: `Tropical means near the equator, {name}. Hot and wet all year. It rains a lot. Plants grow fast. Many animals live in tropical places. The Amazon and the Congo are tropical.` },
            { word: `equator`, definition: `The middle line of Earth.`,
              audioPrompt: `The equator is the middle line of Earth, {name}. Places near the equator are hot all year. Why? Because they get direct sunlight. Brazil and Kenya are near the equator.` },
            { word: `rainforest`, definition: `A thick wet forest with lots of rain.`,
              audioPrompt: `A rainforest is a thick wet forest, {name}. It gets lots of rain. The Amazon in South America is the biggest. So many animals and plants live there. It cleans the air.` },
          ],
        },

        {
          id: `l09-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Temperate: Four Seasons`,
          paragraphs: [
            `Next is temperate. This might be the climate you know best.`,
            `Temperate climates have four seasons. Spring, summer, fall, winter. Not too hot. Not too cold. Most of the United States, Europe, and China are temperate. Good for growing food.`,
          ],
          image: `/explorer-assets/social-studies/l09-s4-temperate.webp`,
          imageCaption: `Temperate: four seasons. Spring, summer, fall, winter.`,
          vocab: [
            { word: `temperate`, definition: `A climate with four seasons. Not too hot or cold.`,
              audioPrompt: `Temperate means a climate with four seasons, {name}. Spring, summer, fall, winter. Mild changes. Most of the US, Europe, and China are temperate. Great for farming.` },
            { word: `season`, definition: `One of the four parts of a year.`,
              audioPrompt: `A season is one of the four parts of a year, {name}. Spring brings flowers. Summer is warm. Fall has leaves turning. Winter is cold and sometimes snowy. Each one feels different.` },
            { word: `mild`, definition: `Not extreme. Gentle.`,
              audioPrompt: `Mild means not extreme, {name}. Temperate places have mild weather most of the year. Not too hot. Not too cold. Just somewhere in between. That makes them comfortable to live in.` },
          ],
        },

        {
          id: `l09-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Polar and Dry`,
          paragraphs: [
            `Two more climates are very extreme. Polar and dry.`,
            `Polar climates are near the North and South Poles. Very, very cold. Covered in ice. Antarctica is polar. Dry climates have very little rain. The Sahara Desert is dry. Both are hard places to live.`,
          ],
          image: `/explorer-assets/social-studies/l09-s5-polar-dry.webp`,
          imageCaption: `Polar: very cold, frozen. Dry: very little rain, hot deserts.`,
          vocab: [
            { word: `polar`, definition: `A climate near the poles. Very cold and icy.`,
              audioPrompt: `Polar means a climate near the poles, {name}. Very, very cold. Covered in ice. Antarctica is the coldest place on Earth. Polar bears live in the Arctic. Penguins in Antarctica.` },
            { word: `dry`, definition: `A climate with very little rain.`,
              audioPrompt: `Dry means a climate with very little rain, {name}. Deserts are dry. The Sahara in Africa is dry. Special plants like cactus live there. They store water for the dry days.` },
            { word: `extreme`, definition: `Very far from normal. Very hot or very cold.`,
              audioPrompt: `Extreme means very far from normal, {name}. Polar climates are extremely cold. Deserts are extremely dry. Both are hard places. But amazing animals and plants live there too.` },
          ],
        },

        {
          id: `l09-mag-6`,
          type: `magazine`,
          section: 6,
          headline: `Climate Shapes How We Live`,
          paragraphs: [
            `Here is the big idea, {name}. Climate shapes how people live.`,
            `What you eat. What you wear. What your home looks like. Climate decides a lot of it. People who live in the Arctic build warm homes. People in the tropics build airy ones. Climate matters.`,
          ],
          image: `/explorer-assets/social-studies/l09-s6-climate-shapes-life.webp`,
          imageCaption: `Climate shapes food, clothes, homes, even culture.`,
          vocab: [
            { word: `adapt`, definition: `To change to fit a new situation.`,
              audioPrompt: `To adapt means to change to fit, {name}. People adapt to their climate. They build the right homes. Grow the right food. Wear the right clothes. Humans are very good at adapting.` },
            { word: `region`, definition: `An area of Earth with similar climate.`,
              audioPrompt: `A region is an area with similar climate, {name}. Tropical region. Temperate region. Polar region. Dry region. Each region has its own plants, animals, and ways people live.` },
            { word: `culture`, definition: `The way a group of people live.`,
              audioPrompt: `Culture is the way a group of people live, {name}. Their food, music, holidays, clothing. Climate shapes culture too. Festivals often match the seasons. Foods match what grows there.` },
          ],
        },

        {
          id: `l09-game`,
          type: `interactive`,
          format: `drag-identify`,
          guideText: `Sort each one by climate, {name}. Tropical, temperate, polar, or dry?`,
          buckets: [
            { id: `tropical`,  label: `Tropical`,  color: `#34D399` },
            { id: `temperate`, label: `Temperate`, color: `#60A5FA` },
            { id: `polar`,     label: `Polar`,     color: `#A78BFA` },
            { id: `dry`,       label: `Dry`,       color: `#FBBF24` },
          ],
          items: [
            { id: `l09-g1`, image: `l09-game-1.webp`, label: `Hot and wet all year`,
              matchPhrase: `Yes! That is tropical. Hot and wet all year near the equator.`, correctMatch: `tropical` },
            { id: `l09-g2`, image: `l09-game-2.webp`, label: `Amazon rainforest`,
              matchPhrase: `Right! The Amazon is tropical. Lots of rain and life.`, correctMatch: `tropical` },
            { id: `l09-g3`, image: `l09-game-3.webp`, label: `Spring, summer, fall, winter`,
              matchPhrase: `Yes! Four seasons means temperate. Mild changes through the year.`, correctMatch: `temperate` },
            { id: `l09-g4`, image: `l09-game-4.webp`, label: `Most of the United States`,
              matchPhrase: `Right! The US has a temperate climate. Most parts have four seasons.`, correctMatch: `temperate` },
            { id: `l09-g5`, image: `l09-game-5.webp`, label: `Freezing cold all year, covered in ice`,
              matchPhrase: `Yes! That is polar. Very cold. Ice everywhere.`, correctMatch: `polar` },
            { id: `l09-g6`, image: `l09-game-6.webp`, label: `Antarctica`,
              matchPhrase: `Right! Antarctica is polar. The coldest place on Earth.`, correctMatch: `polar` },
            { id: `l09-g7`, image: `l09-game-7.webp`, label: `Very little rain, hot desert`,
              matchPhrase: `Yes! That is a dry climate. Hot and dry. Cactus and camels.`, correctMatch: `dry` },
            { id: `l09-g8`, image: `l09-game-8.webp`, label: `The Sahara Desert`,
              matchPhrase: `Right! The Sahara is dry. The biggest hot desert on Earth.`, correctMatch: `dry` },
          ],
        },

        {
          id: `l09-quiz`,
          type: `quiz`,
          guideText: `Let's see what you remember, {name}.`,
          questions: [
            { id: `l09-q1`, format: `multiple-choice`,
              question: `What is weather?`,
              options: [`The pattern over many years`, `What the air is doing today`, `A landform`, `Only summer`],
              correctIndex: 1,
              explanation: `Weather is what the air is doing today. Sunny, rainy, windy, snowy. It changes a lot.` },
            { id: `l09-q2`, format: `multiple-choice`,
              question: `What is climate?`,
              options: [`Today's weather`, `What a place is usually like over many years`, `A type of rain`, `Only winter`],
              correctIndex: 1,
              explanation: `Climate is the long-term pattern. What a place is usually like over many years.` },
            { id: `l09-q3`, format: `multiple-choice`,
              question: `Which climate is hot and wet, near the equator?`,
              options: [`Polar`, `Tropical`, `Temperate`, `Dry`],
              correctIndex: 1,
              explanation: `Tropical! Hot and wet all year. The Amazon rainforest is tropical.` },
            { id: `l09-q4`, format: `true-false`,
              question: `Temperate climates have four seasons: spring, summer, fall, and winter.`,
              correctAnswer: true,
              explanation: `True! Most of the US, Europe, and China are temperate. They have four seasons.` },
            { id: `l09-q5`, format: `fill-blank`,
              question: `___ climates are near the poles and are very cold with ice.`,
              options: [`Polar`, `Tropical`, `Dry`, `Sunny`],
              correctIndex: 0,
              explanation: `Polar! Antarctica is polar. The coldest place on Earth.` },
            { id: `l09-q6`, format: `multiple-choice`,
              question: `How does climate shape how people live?`,
              options: [`It does not`, `It shapes food, clothes, and homes`, `Only in winter`, `Only adults`],
              correctIndex: 1,
              explanation: `Climate shapes a lot. Food. Clothes. Homes. Even culture. People adapt to their climate.` },
          ],
        },

        {
          id: `l09-realworld`,
          type: `real-world`,
          guideText: `Earth's climate is changing. Faster than normal. Scientists call this climate change. It is making some places hotter. Some wetter. Ice at the poles is melting. Many people are working to slow it down. With solar panels, wind power, and other ideas.`,
          familyAdventure: `Talk about your climate together. Do you live in a tropical, temperate, polar, or dry place? How does your climate shape your daily life? What do you wear? What do you eat? How is your home built?`,
          creativePrompt: {
            intro: `Pick one climate region. Draw a person living in that place. Show what they wear and what their home looks like.`,
            floor: `Write 3 sentences about your person. Use the sentence starters below.`,
            stretch: `Write 5 sentences. Add what they eat and how they spend their day.`,
            frames: [
              `My person lives in a ___ climate.`,
              `They wear ___.`,
              `Their home is made of ___.`,
              `They eat ___ that grows there.`,
              `Their day looks like ___.`,
            ],
          },
        },

        {
          id: `l09-celebration`,
          type: `celebration`,
          message: `Great job, {name}! You know weather and climate. Weather is today. Climate is the pattern over years. Earth has four big climate regions: tropical, temperate, polar, and dry. Climate shapes food, clothes, homes, and culture. You are learning so much. Atlas the Bear.`,
          badge: `weather-climate-explorer`,
          badgeName: `Weather and Climate Explorer`,
          xpEarned: 50,
        },
      ],
    },
  ],
};

export default SOCIAL_STUDIES_L09;

// ─── Dev asset check ──────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const mags = SOCIAL_STUDIES_L09.lessons[0].screens.filter(s => s.type === 'magazine').length;
  const game = SOCIAL_STUDIES_L09.lessons[0].screens.find(s => s.type === 'interactive')?.items?.length ?? 0;
  const quiz = SOCIAL_STUDIES_L09.lessons[0].screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  console.log(`[LESSON-SOCIAL-STUDIES-L09] Loaded: "Weather and Climate" with ${mags} magazine sections, ${game} game items, ${quiz} quiz questions`);
}
