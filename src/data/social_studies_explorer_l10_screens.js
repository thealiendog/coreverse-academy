// ─────────────────────────────────────────────────────────────────────────────
// SOCIAL STUDIES  |  L10 — People and Places
// Age band : explorers (6–8)   Guide: atlas
// Standards: C3 D2.Geo.4.K-2 / D2.Geo.6.K-2 / D2.Geo.8.K-2
// CALIBRATED: Explorer spec v1 (May 2026)
// ─────────────────────────────────────────────────────────────────────────────

const SOCIAL_STUDIES_L10 = {
  ageBand: `explorers`,
  subjectId: `social_studies`,
  guide: `atlas`,

  lessons: [
    {
      id: `social-studies-6-8-10`,
      title: `People and Places`,
      duration: 12,
      xpReward: 50,
      badge: `people-places-explorer`,
      badgeName: `People and Places Explorer`,

      screens: [
        {
          id: `l10-welcome`,
          type: `welcome`,
          guideText: `Hi {name}. Atlas here. You know about continents, oceans, landforms, and climate. Today we put it together. How does where you live shape who you are? Place matters more than you think. Let's explore.`,
          headline: `People and Places`,
          subtitle: `How where you live shapes your food, clothes, home, and culture`,
          visual: `/explorer-assets/social-studies/l10-welcome.webp`,
        },

        {
          id: `l10-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `People Live Everywhere`,
          paragraphs: [
            `Humans are amazing. We live in almost every kind of place on Earth.`,
            `In hot rainforests. In cold mountains. In dry deserts. On tiny islands. In huge cities. On wide plains. About 8 billion people live across Earth. We figure out how to live almost anywhere.`,
          ],
          image: `/explorer-assets/social-studies/l10-s1-people-everywhere.webp`,
          imageCaption: `Humans live almost everywhere. 8 billion people across Earth.`,
          vocab: [
            { word: `adapt`, definition: `To change to fit a new situation.`,
              audioPrompt: `To adapt means to change to fit, {name}. Humans are great at adapting. We can live in the cold, the heat, the dry, the wet. Our minds help us figure out how to live almost anywhere.` },
            { word: `survive`, definition: `To stay alive.`,
              audioPrompt: `To survive means to stay alive, {name}. Humans survive in many climates. We build homes. We grow food. We help each other. Survival is about being smart and working together.` },
            { word: `then`, definition: `Next in time. After that.`,
              audioPrompt: `Then is a word that shows next in time, {name}. First we find a place. Then we build a home. Then we grow food. Then helps us put steps in order.` },
          ],
        },

        {
          id: `l10-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Where People Settle`,
          paragraphs: [
            `Where people choose to live depends on the land and the climate.`,
            `People settle where life is easier. Near fresh water. With good soil for growing food. With mild weather. With trees, animals, and resources. That is why many big cities are near rivers or coasts.`,
          ],
          image: `/explorer-assets/social-studies/l10-s2-land-shapes-life.webp`,
          imageCaption: `People settle where life is easier. Near water, good soil, and resources.`,
          vocab: [
            { word: `settle`, definition: `To move somewhere and stay.`,
              audioPrompt: `To settle means to move and stay, {name}. People settle in places where life is easier. With water, food, and shelter. Big cities grew where settling was easy. Empty places had harder conditions.` },
            { word: `fertile`, definition: `Land where plants grow well.`,
              audioPrompt: `Fertile means land where plants grow well, {name}. Fertile soil is great for farming. Crops grow strong. Animals find food. People settle in fertile places because food is easy to grow.` },
            { word: `resource`, definition: `A useful thing from nature.`,
              audioPrompt: `A resource is a useful thing from nature, {name}. Water for drinking. Wood for building. Fish for eating. Soil for farming. People settle where there are good resources.` },
          ],
        },

        {
          id: `l10-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Food Comes From Place`,
          paragraphs: [
            `One thing place shapes is food. People eat what grows where they live.`,
            `Near oceans, people eat fish. In Asia, rice grows easily, so rice is a main food. In Italy, wheat grows, so people eat pasta and bread. In Mexico, corn grows, so people eat tortillas. Food is geography you can taste.`,
          ],
          image: `/explorer-assets/social-studies/l10-s3-food-from-place.webp`,
          imageCaption: `Food comes from place. Rice in Asia. Pasta in Italy. Tortillas in Mexico.`,
          vocab: [
            { word: `crop`, definition: `A plant grown for food.`,
              audioPrompt: `A crop is a plant grown for food, {name}. Different crops grow in different places. Rice in wet warm places. Wheat in mild places. Corn likes warm summers. Farmers know what to grow.` },
            { word: `local`, definition: `From the place you live.`,
              audioPrompt: `Local means from the place you live, {name}. Local food comes from nearby. Before trucks and planes, all food was local. Many families today still eat local food. It is fresh and supports nearby farmers.` },
            { word: `taste`, definition: `The flavor of food in your mouth.`,
              audioPrompt: `Taste is the flavor of food, {name}. Food from different places tastes different. Spicy food in India. Salty food near oceans. Sweet fruits in the tropics. Each place has its own flavors.` },
          ],
        },

        {
          id: `l10-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Homes Match the Place`,
          paragraphs: [
            `Place shapes homes too.`,
            `In cold places, homes have thick walls and small windows to keep heat in. In hot places, homes have big windows for breezes. In deserts, adobe houses stay cool. In the Arctic, some people built igloos out of ice. Every home is built for its place.`,
          ],
          image: `/explorer-assets/social-studies/l10-s4-homes-built.webp`,
          imageCaption: `Homes match the place. Cold = thick walls. Hot = big windows. Desert = adobe.`,
          vocab: [
            { word: `home`, definition: `Where people live.`,
              audioPrompt: `A home is where people live, {name}. Homes match the climate. Warm homes for cold places. Cool homes for hot places. Strong homes for windy places. Each home is built for where it stands.` },
            { word: `adobe`, definition: `Houses made of mud brick. Stay cool in deserts.`,
              audioPrompt: `Adobe is houses made of mud brick, {name}. The thick walls keep the inside cool when the desert is hot. Adobe houses have been built for thousands of years in deserts.` },
            { word: `igloo`, definition: `A home made of ice in the Arctic.`,
              audioPrompt: `An igloo is a home made of ice, {name}. Some people in the Arctic built them. The ice blocks held in body heat. Inside an igloo, you could be warm even when it was freezing outside.` },
          ],
        },

        {
          id: `l10-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Cultures Shaped by Place`,
          paragraphs: [
            `Beyond food and homes, place shapes whole cultures.`,
            `People near oceans often have fishing traditions. Mountain people have songs about climbing. Desert people often welcome travelers and share water. Each culture grew out of the land it lives on. That is part of what makes them beautiful.`,
          ],
          image: `/explorer-assets/social-studies/l10-s5-cultures-shaped.webp`,
          imageCaption: `Cultures grow from the land. Ocean cultures fish. Mountain cultures climb.`,
          vocab: [
            { word: `culture`, definition: `The way a group of people live.`,
              audioPrompt: `Culture is the way a group of people live, {name}. Their food, music, holidays, language, art. Cultures grow from place over many years. Each culture is shaped by the land its people live on.` },
            { word: `tradition`, definition: `Something people do the same way over many years.`,
              audioPrompt: `A tradition is something people do the same way, {name}. Across many years. A special meal at a holiday. A song at weddings. Traditions pass down through families. They connect us to those before us.` },
            { word: `diverse`, definition: `Having many different kinds.`,
              audioPrompt: `Diverse means many different kinds, {name}. Earth has diverse cultures. Thousands of languages. Many foods. Many kinds of music. Diversity makes the world rich and beautiful.` },
          ],
        },

        {
          id: `l10-mag-6`,
          type: `magazine`,
          section: 6,
          headline: `We Belong to Earth`,
          paragraphs: [
            `Here is the big idea, {name}. We belong to Earth. We don't just live on it. We live with it.`,
            `Our food comes from the land. Our homes are built from things on the land. The air we breathe is made partly by trees. We are part of nature. The more we remember this, the more we care for Earth.`,
          ],
          image: `/explorer-assets/social-studies/l10-s6-we-belong.webp`,
          imageCaption: `We belong to Earth. Food, homes, breath, culture. All from the land.`,
          vocab: [
            { word: `connected`, definition: `Linked together.`,
              audioPrompt: `Connected means linked together, {name}. People are connected to the land. To the food we grow. To the trees that make our air. We are not separate from nature. We are part of it.` },
            { word: `belong`, definition: `To be part of something.`,
              audioPrompt: `To belong means to be part of something, {name}. We belong to Earth. Earth is our home. Without Earth, no humans. Belonging to Earth means we should take care of it.` },
            { word: `take care`, definition: `To protect and watch over.`,
              audioPrompt: `Take care means to protect and watch over, {name}. We take care of Earth. We recycle. We plant trees. We save water. Earth takes care of us. So we take care of Earth too.` },
          ],
        },

        {
          id: `l10-game`,
          type: `interactive`,
          format: `drag-identify`,
          guideText: `Sort each one, {name}. Is it food, a home, clothing, or part of culture?`,
          buckets: [
            { id: `food`,     label: `Food`,     color: `#FBBF24` },
            { id: `home`,     label: `Home`,     color: `#A78BFA` },
            { id: `clothing`, label: `Clothing`, color: `#F472B6` },
            { id: `culture`,  label: `Culture`,  color: `#34D399` },
          ],
          items: [
            { id: `l10-g1`, image: `l10-game-1.webp`, label: `A bowl of rice`,
              matchPhrase: `Yes! Rice is food. Grown in wet warm places like Asia.`, correctMatch: `food` },
            { id: `l10-g2`, image: `l10-game-2.webp`, label: `Tortillas made of corn`,
              matchPhrase: `Right! Tortillas are food. Corn grows well in Mexico.`, correctMatch: `food` },
            { id: `l10-g3`, image: `l10-game-3.webp`, label: `An igloo made of ice`,
              matchPhrase: `Yes! An igloo is a home. Built for cold Arctic places.`, correctMatch: `home` },
            { id: `l10-g4`, image: `l10-game-4.webp`, label: `An adobe house with thick walls`,
              matchPhrase: `Right! Adobe is a home. Thick walls keep it cool in deserts.`, correctMatch: `home` },
            { id: `l10-g5`, image: `l10-game-5.webp`, label: `A heavy fur coat`,
              matchPhrase: `Yes! A fur coat is clothing. For very cold places.`, correctMatch: `clothing` },
            { id: `l10-g6`, image: `l10-game-6.webp`, label: `A light cotton dress`,
              matchPhrase: `Right! Cotton is clothing. Light and cool for hot places.`, correctMatch: `clothing` },
            { id: `l10-g7`, image: `l10-game-7.webp`, label: `A holiday parade with music and dance`,
              matchPhrase: `Yes! A parade is part of culture. People celebrate together.`, correctMatch: `culture` },
            { id: `l10-g8`, image: `l10-game-8.webp`, label: `A traditional family dance`,
              matchPhrase: `Right! Dance is culture. Passed down through families and time.`, correctMatch: `culture` },
          ],
        },

        {
          id: `l10-quiz`,
          type: `quiz`,
          guideText: `Let's see what you remember, {name}.`,
          questions: [
            { id: `l10-q1`, format: `multiple-choice`,
              question: `Where do humans live on Earth?`,
              options: [`Only cities`, `Almost everywhere`, `Only one continent`, `Only homes`],
              correctIndex: 1,
              explanation: `Humans live almost everywhere. About 8 billion of us. We adapt to many places.` },
            { id: `l10-q2`, format: `multiple-choice`,
              question: `Why do people settle in certain places?`,
              options: [`Random`, `Where life is easier with water, soil, and resources`, `Only where it is hot`, `Just by accident`],
              correctIndex: 1,
              explanation: `Where life is easier. Water. Good soil. Mild weather. Resources. That is why cities often grew near rivers and coasts.` },
            { id: `l10-q3`, format: `multiple-choice`,
              question: `How does place shape food?`,
              options: [`It does not`, `People eat what grows where they live`, `All food is the same`, `Adults pick food`],
              correctIndex: 1,
              explanation: `Food comes from place. Rice in Asia. Pasta in Italy. Tortillas in Mexico. Each place grows what works there.` },
            { id: `l10-q4`, format: `true-false`,
              question: `Homes are built to fit the climate. Adobe in deserts. Igloos in the Arctic.`,
              correctAnswer: true,
              explanation: `True! Each kind of home is built for its place. Smart adapting through hundreds of years.` },
            { id: `l10-q5`, format: `fill-blank`,
              question: `___ is the way a group of people live. Food, music, holidays, traditions.`,
              options: [`Culture`, `Carrots`, `Castles`, `Coats`],
              correctIndex: 0,
              explanation: `Culture! The way of life of a group of people. Shaped by their place and history.` },
            { id: `l10-q6`, format: `multiple-choice`,
              question: `What is the big idea of this lesson?`,
              options: [`Earth does not matter`, `People and places are deeply connected`, `Only some people matter`, `Nothing matters`],
              correctIndex: 1,
              explanation: `People and places are connected. We belong to Earth. Our food, homes, and cultures all come from the land.` },
          ],
        },

        {
          id: `l10-realworld`,
          type: `real-world`,
          guideText: `There are over 7,000 languages on Earth. Thousands of foods. Thousands of music styles. Each one grew in a specific place. When you try food from another culture, you taste their place. When you hear their music, you hear their land. Earth's variety gave us this beautiful variety of cultures.`,
          familyAdventure: `Plan a family culture night. Pick a culture to learn about. Find that country on a globe. Try a recipe. Listen to music from there. Learn a few words of the language. Notice how food, music, and traditions all come from the land.`,
          creativePrompt: {
            intro: `Draw a picture of yourself in your own culture. Show your food, home, and one tradition your family has.`,
            floor: `Write 3 sentences about your culture. Use the sentence starters below.`,
            stretch: `Write 5 sentences. Add what you love about it.`,
            frames: [
              `In my family, we eat ___.`,
              `My home is ___.`,
              `One tradition we have is ___.`,
              `We celebrate ___.`,
              `I love my culture because ___.`,
            ],
          },
        },

        {
          id: `l10-celebration`,
          type: `celebration`,
          message: `Wonderful, {name}! You finished the geography block. You understand maps, globes, continents, oceans, landforms, and climate. And now you know how place shapes people. Food. Homes. Clothes. Culture. We belong to Earth, and Earth belongs to us. Economics block next. Atlas the Bear.`,
          badge: `people-places-explorer`,
          badgeName: `People and Places Explorer`,
          xpEarned: 50,
        },
      ],
    },
  ],
};

export default SOCIAL_STUDIES_L10;

// ─── Dev asset check ──────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const mags = SOCIAL_STUDIES_L10.lessons[0].screens.filter(s => s.type === 'magazine').length;
  const game = SOCIAL_STUDIES_L10.lessons[0].screens.find(s => s.type === 'interactive')?.items?.length ?? 0;
  const quiz = SOCIAL_STUDIES_L10.lessons[0].screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  console.log(`[LESSON-SOCIAL-STUDIES-L10] Loaded: "People and Places" with ${mags} magazine sections, ${game} game items, ${quiz} quiz questions`);
}
