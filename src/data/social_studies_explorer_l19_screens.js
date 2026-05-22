// ─────────────────────────────────────────────────────────────────────────────
// SOCIAL STUDIES  |  L19 — Cultures and Traditions
// Age band : explorers (6–8)   Guide: atlas
// Standards: C3 D2.His.5.K-2 / D2.His.6.K-2
// CALIBRATED: Explorer spec v1 (May 2026)
// ─────────────────────────────────────────────────────────────────────────────

const SOCIAL_STUDIES_L19 = {
  ageBand: `explorers`,
  subjectId: `social_studies`,
  guide: `atlas`,

  lessons: [
    {
      id: `social-studies-6-8-19`,
      title: `Cultures and Traditions`,
      duration: 12,
      xpReward: 50,
      badge: `cultures-traditions-explorer`,
      badgeName: `Cultures and Traditions Explorer`,

      screens: [
        {
          id: `l19-welcome`,
          type: `welcome`,
          guideText: `Hi {name}. Atlas here. Today we celebrate the world's cultures. Food. Music. Clothing. Holidays. Each culture is a beautiful way of being human. Let's explore them.`,
          headline: `Cultures and Traditions`,
          subtitle: `The beautiful variety of ways people live`,
          visual: `/explorer-assets/social-studies/l19-welcome.webp`,
        },

        {
          id: `l19-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `What Is Culture?`,
          paragraphs: [
            `Culture is the way a group of people lives. It includes everything that makes their life unique.`,
            `Food. Clothing. Language. Music. Dance. Stories. Holidays. Traditions. Each group of people has its own culture. There are thousands of cultures on Earth. Each one is beautiful in its own way.`,
          ],
          image: `/explorer-assets/social-studies/l19-s1-many-cultures.webp`,
          imageCaption: `Culture is the way a group lives. Food, music, clothing, stories, traditions.`,
          vocab: [
            { word: `culture`, definition: `The way a group of people live.`,
              audioPrompt: `Culture is the way a group of people live, {name}. Food, music, clothing, language, holidays. Each culture grew over many years. Shaped by place and history. Each one is beautiful.` },
            { word: `unique`, definition: `One of a kind.`,
              audioPrompt: `Unique means one of a kind, {name}. Each culture is unique. Mexican culture is different from Japanese culture. African culture is different from Italian culture. Each has its own beauty.` },
            { word: `across`, definition: `From one side to the other. Across the world.`,
              audioPrompt: `Across means from one side to the other, {name}. Across the world, cultures vary. Across countries, foods are different. Across helps us think about big spaces and connections.` },
          ],
        },

        {
          id: `l19-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Food You Can Taste`,
          paragraphs: [
            `Want to taste a culture? Try its food. Every culture has special foods.`,
            `Tacos and tamales from Mexico. Pasta and pizza from Italy. Sushi and rice from Japan. Curry and naan from India. Dumplings and tea from China. Each food tells a story of the land it comes from. Food is geography you can taste.`,
          ],
          image: `/explorer-assets/social-studies/l19-s2-food-celebrations.webp`,
          imageCaption: `Food across cultures: tacos, sushi, pasta, curry, dumplings. Each tells a story.`,
          vocab: [
            { word: `food`, definition: `What people eat.`,
              audioPrompt: `Food is what people eat, {name}. Each culture has special foods. Foods come from what grows in the land. From what people learned tastes good over hundreds of years. Food is one of the best ways to learn culture.` },
            { word: `recipe`, definition: `Instructions for making food.`,
              audioPrompt: `A recipe is instructions for making food, {name}. Recipes pass down through families. Grandmother to mother to child. They carry the taste of home through time. Recipes are treasures.` },
            { word: `passed down`, definition: `Given from older people to younger.`,
              audioPrompt: `Passed down means given from older to younger, {name}. Recipes get passed down. So do songs, dances, and ways of doing things. That is how culture stays alive across many years.` },
          ],
        },

        {
          id: `l19-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Music, Dance, and Art`,
          paragraphs: [
            `Cultures have their own music, dance, and art.`,
            `Mariachi bands in Mexico. Taiko drums in Japan. Drumming circles in West Africa. Sitar music in India. Fiddle music in Ireland. Samba in Brazil. Every culture has them. They sound and look different. That is what makes them beautiful.`,
          ],
          image: `/explorer-assets/social-studies/l19-s3-music-art.webp`,
          imageCaption: `Music and dance across cultures. Each one unique and beautiful.`,
          vocab: [
            { word: `music`, definition: `Sounds organized into beautiful patterns.`,
              audioPrompt: `Music is sounds in beautiful patterns, {name}. Every culture has its own music. Different instruments. Different rhythms. Music helps people celebrate, work, and connect across the world.` },
            { word: `dance`, definition: `Moving the body to music.`,
              audioPrompt: `Dance is moving the body to music, {name}. Every culture has dances. Some celebrate. Some tell stories. Some are prayers. The same body, the same music, but the dance can be different everywhere.` },
            { word: `art`, definition: `Beautiful things people make.`,
              audioPrompt: `Art is beautiful things people make, {name}. Paintings, sculptures, crafts, jewelry. Each culture has its own art. It reflects what people find beautiful and important.` },
          ],
        },

        {
          id: `l19-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Clothing and Celebrations`,
          paragraphs: [
            `Many cultures have special clothing.`,
            `Saris in India. Kimonos in Japan. Kilts in Scotland. Each is beautiful. Each tells a story. Cultures also celebrate. Lunar New Year in China. Diwali in India. Carnival in Brazil. Eid for many Muslims. Christmas for many Christians. Each celebration brings communities together.`,
          ],
          image: `/explorer-assets/social-studies/l19-s4-clothing-celebrations.webp`,
          imageCaption: `Clothing and celebrations: saris, kimonos, Diwali, Carnival, Eid.`,
          vocab: [
            { word: `traditional`, definition: `Passed down across many years.`,
              audioPrompt: `Traditional means passed down across many years, {name}. Traditional clothing is what people in a culture have worn for a long time. Many people wear it on special days. It connects them to their ancestors.` },
            { word: `celebration`, definition: `A special event bringing people together.`,
              audioPrompt: `A celebration is a special event, {name}. Bringing people together. Cultures have many celebrations. Holidays, weddings, birth parties, festivals. Each one marks something important.` },
            { word: `festival`, definition: `A big celebration of something important.`,
              audioPrompt: `A festival is a big celebration, {name}. They bring whole communities together. With food, music, dance. Festivals are where culture comes alive. You see it, hear it, taste it, feel it.` },
          ],
        },

        {
          id: `l19-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Languages and Stories`,
          paragraphs: [
            `Each culture has its own language. Sometimes more than one.`,
            `There are over 7,000 languages on Earth. Each has its own beauty. Each culture also has its own stories. Folktales. Myths. Family tales. Stories teach kids what to value. They pass wisdom forward across many years.`,
          ],
          image: `/explorer-assets/social-studies/l19-s5-language-stories.webp`,
          imageCaption: `Over 7,000 languages on Earth. Each culture has its own stories.`,
          vocab: [
            { word: `language`, definition: `Words and how to use them.`,
              audioPrompt: `A language is words and how to use them, {name}. Over 7,000 languages on Earth. Spanish, Mandarin, English, Hindi, Arabic. Each one has its own sounds. Each one opens a world.` },
            { word: `story`, definition: `A tale that teaches or entertains.`,
              audioPrompt: `A story is a tale that teaches or entertains, {name}. Cultures pass down stories. Fables, myths, folktales. They teach values. They warn of danger. They celebrate heroes. Stories are how cultures stay alive.` },
            { word: `wisdom`, definition: `Deep knowledge about life.`,
              audioPrompt: `Wisdom is deep knowledge about life, {name}. Cultural stories carry wisdom. The tortoise and the hare teaches that steady effort wins. Each story shares wisdom across many years.` },
          ],
        },

        {
          id: `l19-mag-6`,
          type: `magazine`,
          section: 6,
          headline: `Diversity Is Beautiful`,
          paragraphs: [
            `Here is the big idea, {name}. The variety of cultures on Earth is beautiful.`,
            `No culture is better than another. Different is just different. Each one offers something special. Mexican joy. Japanese beauty. African community. Indian family. Each has gifts. Learning about other cultures makes us richer. We do not lose our own.`,
          ],
          image: `/explorer-assets/social-studies/l19-s6-diversity-beautiful.webp`,
          imageCaption: `Diversity is beautiful. Each culture has gifts. All of us richer together.`,
          vocab: [
            { word: `diversity`, definition: `Many different kinds together.`,
              audioPrompt: `Diversity means many different kinds together, {name}. Diversity of cultures makes the world beautiful. Many languages. Many foods. Many music styles. Each one is valuable. Celebrate diversity.` },
            { word: `valuable`, definition: `Having worth.`,
              audioPrompt: `Valuable means having worth, {name}. Every culture is valuable. Not just famous ones. Not just popular ones. Each one developed its own beauty and wisdom. Each one matters.` },
            { word: `curious`, definition: `Wanting to know more.`,
              audioPrompt: `Curious means wanting to know more, {name}. Be curious about other cultures. Try foods. Hear music. Learn words. Read stories from other places. Curiosity opens worlds. It makes you richer.` },
          ],
        },

        {
          id: `l19-game`,
          type: `interactive`,
          format: `drag-identify`,
          guideText: `Sort each part of culture, {name}. Is it food, music, clothing, or a festival?`,
          buckets: [
            { id: `food`,     label: `Food`,     color: `#FBBF24` },
            { id: `music`,    label: `Music`,    color: `#A78BFA` },
            { id: `clothing`, label: `Clothing`, color: `#F472B6` },
            { id: `festival`, label: `Festival`, color: `#34D399` },
          ],
          items: [
            { id: `l19-g1`, image: `l19-game-1.webp`, label: `Tacos from Mexico`,
              matchPhrase: `Yes! Tacos are food. Made with corn tortillas from Mexico.`, correctMatch: `food` },
            { id: `l19-g2`, image: `l19-game-2.webp`, label: `Sushi from Japan`,
              matchPhrase: `Right! Sushi is food. Rice and fish from Japan.`, correctMatch: `food` },
            { id: `l19-g3`, image: `l19-game-3.webp`, label: `Mariachi bands playing trumpets`,
              matchPhrase: `Yes! Mariachi is music. From Mexico.`, correctMatch: `music` },
            { id: `l19-g4`, image: `l19-game-4.webp`, label: `A sitar from India`,
              matchPhrase: `Right! The sitar is a music instrument from India.`, correctMatch: `music` },
            { id: `l19-g5`, image: `l19-game-5.webp`, label: `A kimono from Japan`,
              matchPhrase: `Yes! A kimono is clothing. Worn on special days in Japan.`, correctMatch: `clothing` },
            { id: `l19-g6`, image: `l19-game-6.webp`, label: `A sari from India`,
              matchPhrase: `Right! A sari is clothing. Beautiful flowing fabric from India.`, correctMatch: `clothing` },
            { id: `l19-g7`, image: `l19-game-7.webp`, label: `Chinese New Year with dragon dances`,
              matchPhrase: `Yes! That is a festival. A big celebration in China.`, correctMatch: `festival` },
            { id: `l19-g8`, image: `l19-game-8.webp`, label: `Diwali, the festival of lights from India`,
              matchPhrase: `Right! Diwali is a festival. Lights, family, and joy.`, correctMatch: `festival` },
          ],
        },

        {
          id: `l19-quiz`,
          type: `quiz`,
          guideText: `Let's see what you remember, {name}.`,
          questions: [
            { id: `l19-q1`, format: `multiple-choice`,
              question: `What is culture?`,
              options: [`A type of yogurt`, `The way a group of people live. Food, music, language, traditions.`, `Only food`, `Only music`],
              correctIndex: 1,
              explanation: `Culture is how a group lives. Food, clothing, language, music, dance, holidays, traditions.` },
            { id: `l19-q2`, format: `multiple-choice`,
              question: `How many languages are spoken on Earth?`,
              options: [`Just 10`, `Over 7,000`, `Only one`, `Two`],
              correctIndex: 1,
              explanation: `Over 7,000 languages. Each has its own beauty. Some have millions of speakers. Some only a few.` },
            { id: `l19-q3`, format: `multiple-choice`,
              question: `What do traditions tell us?`,
              options: [`Nothing important`, `What cultures value, passed down across many years`, `Only about food`, `They are random`],
              correctIndex: 1,
              explanation: `Traditions tell us what cultures value. Family. Faith. Joy. Each tradition carries meaning.` },
            { id: `l19-q4`, format: `true-false`,
              question: `Cultures pass down stories that carry wisdom forward across many years.`,
              correctAnswer: true,
              explanation: `True! Stories teach. They warn. They celebrate. Every culture has them. They share wisdom.` },
            { id: `l19-q5`, format: `fill-blank`,
              question: `The variety of cultures on Earth is called ___. It makes the world beautiful.`,
              options: [`diversity`, `delicious`, `darkness`, `desert`],
              correctIndex: 0,
              explanation: `Diversity! Many different cultures together. Different foods, music, languages, traditions. Beautiful.` },
            { id: `l19-q6`, format: `multiple-choice`,
              question: `Why should we learn about other cultures?`,
              options: [`To replace our own`, `We learn amazing things and become richer. We do not lose our own.`, `It is boring`, `It is required`],
              correctIndex: 1,
              explanation: `Learning about other cultures makes us richer. We gain new ideas, foods, music. We do not lose our own.` },
          ],
        },

        {
          id: `l19-realworld`,
          type: `real-world`,
          guideText: `There are over 200 countries on Earth. But thousands of cultures. Each country often has many cultures inside it. The US has Mexican-American, Italian-American, Vietnamese-American, and so many more. Mixing cultures is how our world grows.`,
          familyAdventure: `Plan a family culture night. Pick a culture to learn about. Find that country on a globe. Try a recipe. Listen to music. Learn a few words. Notice how the food, music, and traditions all come from the land.`,
          creativePrompt: {
            intro: `Draw a picture of YOUR family's culture. Show what you eat. What you wear on special days. One tradition you have.`,
            floor: `Write 3 sentences about your culture. Use the sentence starters below.`,
            stretch: `Write 5 sentences. Add why you love it.`,
            frames: [
              `In my family, we eat ___.`,
              `On special days, we wear ___.`,
              `One tradition we have is ___.`,
              `We celebrate ___ together.`,
              `I love my culture because ___.`,
            ],
          },
        },

        {
          id: `l19-celebration`,
          type: `celebration`,
          message: `Wonderful, {name}! You see how beautiful cultures are. Food. Music. Dance. Clothing. Language. Stories. Festivals. Each one a treasure. The world has thousands of cultures. All different. All valuable. Celebrate yours. Honor others. We are all part of the human family. Atlas the Bear.`,
          badge: `cultures-traditions-explorer`,
          badgeName: `Cultures and Traditions Explorer`,
          xpEarned: 50,
        },
      ],
    },
  ],
};

export default SOCIAL_STUDIES_L19;

// ─── Dev asset check ──────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const mags = SOCIAL_STUDIES_L19.lessons[0].screens.filter(s => s.type === 'magazine').length;
  const game = SOCIAL_STUDIES_L19.lessons[0].screens.find(s => s.type === 'interactive')?.items?.length ?? 0;
  const quiz = SOCIAL_STUDIES_L19.lessons[0].screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  console.log(`[LESSON-SOCIAL-STUDIES-L19] Loaded: "Cultures and Traditions" with ${mags} magazine sections, ${game} game items, ${quiz} quiz questions`);
}
