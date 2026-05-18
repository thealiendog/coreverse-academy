// ─────────────────────────────────────────────────────────────────────────────
// SOCIAL STUDIES  |  L19 — Cultures and Traditions: Stories from Around the World
// Age band : explorers (6–8)   Guide: atlas
// Standards: C3 Framework D2.His.5.K-2 / D2.His.6.K-2 (perspectives, traditions)
// ─────────────────────────────────────────────────────────────────────────────

const SOCIAL_STUDIES_L19 = {
  ageBand:   `explorers`,
  subjectId: `social_studies`,
  guide:     `atlas`,

  lessons: [
    {
      id:        `social-studies-6-8-19`,
      title:     `Cultures and Traditions: Stories from Around the World`,
      duration:  12,
      xpReward:  50,
      badge:     `cultures-traditions-explorer`,
      badgeName: `Cultures and Traditions Explorer`,

      screens: [

        {
          id: `l19-welcome`,
          type: `welcome`,
          guideText: `Hello, {name}. Atlas here. Today we celebrate something beautiful — the CULTURES and TRADITIONS of the world. Each one is a unique story passed down through generations. Food, music, dance, stories, clothing, holidays — all part of culture. Let's explore the rich variety of human ways of life.`,
          headline: `Cultures and Traditions`,
          subtitle: `The beautiful variety of human ways of life — and what they teach us`,
          visual: `/explorer-assets/social-studies/l19-welcome.webp`,
        },

        {
          id: `l19-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `What IS Culture?`,
          paragraphs: [
            `CULTURE is the WAY a GROUP of people LIVE. It's everything that makes their way of life unique.`,
            `Culture includes — FOOD (what they eat), CLOTHING (what they wear), LANGUAGE (how they talk), MUSIC and DANCE (how they celebrate), STORIES (what they tell), RELIGION (what they believe), HOLIDAYS (what they celebrate), and TRADITIONS (things they do the same way for generations). Different groups of people have different cultures. People in Mexico have Mexican culture. People in Japan have Japanese culture. People in Nigeria have Nigerian culture. There are THOUSANDS of cultures on Earth — and most countries have many cultures within them. Culture is part of WHO you are.`,
          ],
          image: `/explorer-assets/social-studies/l19-s1-many-cultures.webp`,
          imageCaption: `Culture = the way a group of people live. Food, clothing, language, music, stories, traditions. Thousands of cultures.`,
          vocab: [
            { word: `culture`,        definition: `The WAY a GROUP of people LIVE — food, clothes, language, music, stories, traditions.`,
              audioPrompt: `Culture, {name}, is the way a group of people live. It includes everything that makes their way of life unique. Food, clothing, language, music, dance, stories, religion, holidays, traditions. Each culture is shaped by where the people live, their history, and their values. Cultures are like fingerprints — no two are exactly the same.` },
            { word: `way of life`,    definition: `HOW people LIVE day to day. Each culture has its own WAY OF LIFE.`,
              audioPrompt: `A way of life, {name}, is how people live day to day. Each culture has its own way of life. What they eat for breakfast. How they greet each other. What they do at celebrations. How they raise their children. The way of life is shaped by many things — geography, history, religion, family. It's beautiful in its variety.` },
            { word: `unique`,         definition: `ONE OF A KIND. Each culture is UNIQUE — different from all others.`,
              audioPrompt: `Unique, {name}, means one of a kind. Each culture is unique — different from all others. Mexican culture is different from Japanese culture. Nigerian culture is different from Italian culture. Native American culture is different from Vietnamese culture. Each one has its own unique flavor and beauty.` },
          ],
        },

        {
          id: `l19-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `FOOD: Stories You Can Taste`,
          paragraphs: [
            `Want to TASTE a culture? Try its FOOD. Every culture has special foods passed down through generations.`,
            `MEXICAN culture — tacos, tamales, mole, chocolate, fresh tortillas, salsa. ITALIAN culture — pasta, pizza, gelato, espresso, fresh bread. JAPANESE culture — sushi, rice, miso soup, tempura, matcha tea. INDIAN culture — curry, naan bread, samosas, basmati rice, mango. CHINESE culture — dumplings, fried rice, noodles, tea. ETHIOPIAN culture — injera bread, spicy stews, coffee. FRENCH culture — croissants, cheese, wine, baguettes. AMERICAN culture — burgers, BBQ, apple pie, jazz brunch. Each food tells a story of the land it comes from — what grows there, what people figured out tastes good together over hundreds of years. Eating food from another culture is like reading a piece of their history.`,
          ],
          image: `/explorer-assets/social-studies/l19-s2-food-celebrations.webp`,
          imageCaption: `Food across cultures: tacos, sushi, pasta, curry, dumplings, injera, croissants. Each tells a story of its land.`,
          vocab: [
            { word: `food`,           definition: `What people EAT. Each culture has SPECIAL foods that tell its story.`,
              audioPrompt: `Food, {name}, is what people eat. Each culture has special foods that tell its story. Mexican food. Japanese food. Italian food. Indian food. The foods of a culture come from what grows in that land and what people learned tastes good over generations. Food is one of the most delicious ways to learn about a culture.` },
            { word: `recipe`,         definition: `Instructions for MAKING food. RECIPES pass down through generations.`,
              audioPrompt: `A recipe, {name}, is instructions for making food. Recipes pass down through generations. Grandmothers teach mothers who teach kids. Each family might have its own version. Recipes are some of culture's most precious treasures. They carry the taste of home forward through time.` },
            { word: `passed down`,    definition: `Given from OLDER people to YOUNGER people. Recipes get PASSED DOWN.`,
              audioPrompt: `Passed down, {name}, means given from older people to younger people. Recipes get passed down through families. So do songs, stories, dances, and ways of doing things. That's how culture stays alive — older generations teach younger ones. Each generation receives gifts from the past and adds their own touch before passing it forward.` },
          ],
        },

        {
          id: `l19-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `MUSIC, DANCE, and ART`,
          paragraphs: [
            `Cultures also have their own MUSIC, DANCE, and ART.`,
            `In MEXICO — mariachi bands, ballet folklórico, brightly colored alebrijes (carved animals). In JAPAN — taiko drums, kabuki theater, paper origami. In WEST AFRICA — drumming circles, kente cloth, beautiful sculptures. In INDIA — sitar music, classical Indian dance, intricate henna designs. In IRELAND — fiddle music, step dancing, Celtic knots. In NATIVE AMERICAN cultures — drumming, traditional dances, beadwork. In BRAZIL — samba music, capoeira (a dance-fight), colorful crafts. Each culture's art shows what it cares about and finds beautiful. Music and dance especially are HUMAN UNIVERSALS — every culture on Earth has them. But they sound and look different everywhere. Beautiful in their variety.`,
          ],
          image: `/explorer-assets/social-studies/l19-s3-music-art.webp`,
          imageCaption: `Music, dance, art across cultures. Mariachi, taiko, drumming, sitar, fiddle, samba. Every culture has its own.`,
          vocab: [
            { word: `music`,          definition: `Sounds organized into BEAUTIFUL patterns. Every culture has its own MUSIC.`,
              audioPrompt: `Music, {name}, is sounds organized into beautiful patterns. Every culture has its own music. Different instruments. Different rhythms. Different singing styles. Music helps people celebrate, mourn, work, dance, and connect. Music is one of the oldest things humans created. Different cultures' music is amazing to explore.` },
            { word: `dance`,          definition: `Moving the BODY to music. Every culture has DANCES — celebrating, storytelling, praying.`,
              audioPrompt: `Dance, {name}, is moving the body to music. Every culture has dances. Some dances celebrate. Some tell stories. Some are prayers. Some bring people together. Some show off skills. The same dance might mean different things in different cultures. Watching dances from around the world is amazing.` },
            { word: `art`,            definition: `BEAUTIFUL things people MAKE. Every culture has its own ART — paintings, sculptures, crafts.`,
              audioPrompt: `Art, {name}, is beautiful things people make. Every culture has its own art. Paintings, sculptures, weaving, pottery, crafts, jewelry. Art reflects what a culture finds beautiful and meaningful. Some art tells stories. Some celebrates nature. Some honors ancestors. Art is one of humanity's most beautiful ways of expressing what matters.` },
          ],
        },

        {
          id: `l19-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `CLOTHING and CELEBRATIONS`,
          paragraphs: [
            `What people WEAR and how they CELEBRATE are also part of culture.`,
            `Many cultures have TRADITIONAL CLOTHING for special occasions. In INDIA — beautiful saris and sherwanis. In JAPAN — kimonos for tea ceremonies and festivals. In SCOTLAND — kilts and tartan patterns. In MEXICO — embroidered blouses and brightly colored skirts. In WEST AFRICA — beautiful flowing dashikis and patterned wraps. Each piece often tells a story or shows where someone is from. CELEBRATIONS are also unique. CHINESE NEW YEAR with dragon dances and red envelopes. DIWALI in India — festival of lights. CARNIVAL in Brazil — huge dancing parades. DAY OF THE DEAD in Mexico — celebrating ancestors. RAMADAN and EID for many Muslims. HANUKKAH for Jewish families. CHRISTMAS for many Christians. Each celebration brings communities together with food, music, family, joy.`,
          ],
          image: `/explorer-assets/social-studies/l19-s4-clothing-celebrations.webp`,
          imageCaption: `Traditional clothing + celebrations: saris, kimonos, kilts. Lunar New Year, Diwali, Carnival, Eid, Christmas.`,
          vocab: [
            { word: `traditional`,    definition: `PASSED DOWN through generations. TRADITIONAL clothing is what cultures have worn for centuries.`,
              audioPrompt: `Traditional, {name}, means passed down through generations. Traditional clothing is what cultures have worn for centuries. Many people only wear traditional clothing for special occasions today — weddings, religious ceremonies, festivals. Some still wear them daily. Traditional clothing connects people to their ancestors and culture.` },
            { word: `celebration`,    definition: `A SPECIAL EVENT bringing people together. Cultures have many CELEBRATIONS.`,
              audioPrompt: `A celebration, {name}, is a special event bringing people together. Cultures have many celebrations. Religious holidays. National days. Seasonal festivals. Family events like weddings. Birth celebrations. Coming-of-age ceremonies. Celebrations help communities mark important times with joy, food, music, and togetherness.` },
            { word: `festival`,       definition: `A BIG celebration of something IMPORTANT. FESTIVALS bring whole communities together.`,
              audioPrompt: `A festival, {name}, is a big celebration of something important. Festivals bring whole communities together. Some festivals last just one day. Some last weeks. They might honor a religious event, a season, a historical moment, or just be for fun. Festivals are where culture comes ALIVE — you see the food, hear the music, watch the dances, and feel the joy.` },
          ],
        },

        {
          id: `l19-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `LANGUAGES and STORIES`,
          paragraphs: [
            `Each culture also has its own LANGUAGE — sometimes more than one — and STORIES passed down through time.`,
            `There are over 7,000 LANGUAGES spoken on Earth! Some are spoken by millions of people (Spanish, Mandarin, English, Hindi, Arabic). Some only by small groups. Each language has its own beauty. Each STORIES tell what cultures value. AESOP'S FABLES from ancient Greece teach lessons. NORSE MYTHS from Scandinavia tell of gods and heroes. JAPANESE FOLK TALES feature clever animals. NATIVE AMERICAN stories honor nature and ancestors. AFRICAN FOLKTALES often teach wisdom through animal characters. INDIAN epics tell of brave heroes and gods. Stories are some of the oldest parts of culture — telling kids what's important, what to admire, what to be careful of. Stories pass wisdom forward through time.`,
          ],
          image: `/explorer-assets/social-studies/l19-s5-language-stories.webp`,
          imageCaption: `Over 7,000 languages on Earth! Each culture has its own stories — fables, myths, folktales — passing wisdom forward.`,
          vocab: [
            { word: `language`,       definition: `WORDS and how to use them. Over 7,000 LANGUAGES on Earth — each beautiful.`,
              audioPrompt: `A language, {name}, is words and how to use them. Over 7,000 languages on Earth — each beautiful in its own way. Spanish. Mandarin. English. Hindi. Arabic. Japanese. Vietnamese. Swahili. French. Russian. And thousands more. Each language has its own sounds, rhythms, and ways of expressing ideas. Learning languages opens worlds.` },
            { word: `story`,          definition: `A TALE that teaches or entertains. Cultures pass down STORIES through generations.`,
              audioPrompt: `A story, {name}, is a tale that teaches or entertains. Cultures pass down stories through generations. Fables, myths, folktales, legends. They teach kids what to value. They warn about danger. They celebrate heroes. They explain the world. Long before books, stories were told aloud — from parent to child, generation after generation.` },
            { word: `wisdom`,         definition: `Deep KNOWLEDGE about LIFE. Cultural stories carry WISDOM.`,
              audioPrompt: `Wisdom, {name}, is deep knowledge about life. Cultural stories carry wisdom. The story of the tortoise and the hare teaches that steady effort wins. African folktales often teach to be careful, kind, or smart. The wisdom in old stories has helped humans for thousands of years. Each generation receives this wisdom from the past.` },
          ],
        },

        {
          id: `l19-mag-6`,
          type: `magazine`,
          section: 6,
          headline: `DIVERSITY Is Beautiful`,
          paragraphs: [
            `Here's the BIG idea, {name}. The variety of CULTURES on Earth is BEAUTIFUL. Each one is VALUABLE.`,
            `No culture is "better" than another. Different is just different — not worse. Each culture developed in its own place, its own history, with its own wisdom. Each one offers something unique. The MEXICAN celebration of life. The JAPANESE attention to beauty. The AFRICAN value of community. The INDIAN focus on family and spirit. The IRISH love of storytelling. The VIETNAMESE respect for elders. The INUIT mastery of the cold. EVERY culture has gifts. When we LEARN about other cultures, we don't lose our own — we GAIN new perspectives. We become richer. The world is more beautiful BECAUSE it has so many cultures. Diversity = strength, beauty, depth. Celebrate it. Protect it. Be curious about it.`,
          ],
          image: `/explorer-assets/social-studies/l19-s6-diversity-beautiful.webp`,
          imageCaption: `Diversity = beautiful. No culture is "better." Each one offers gifts. Learning from others makes us richer.`,
          vocab: [
            { word: `diversity`,      definition: `MANY DIFFERENT kinds together. DIVERSITY of cultures makes the world beautiful.`,
              audioPrompt: `Diversity, {name}, means many different kinds together. Diversity of cultures makes the world beautiful. Many languages, foods, music, traditions, religions, art forms. Each one is valuable. Diversity is something to celebrate, not fear. The more we appreciate different cultures, the richer our own lives become.` },
            { word: `valuable`,       definition: `Having WORTH. Every culture is VALUABLE — none is better or worse than another.`,
              audioPrompt: `Valuable, {name}, means having worth. Every culture is valuable — none is better or worse than another. Each one developed its own way of doing things. Each one has wisdom. Each one has beauty. Different cultures are like different instruments in an orchestra. They sound different. Together, they make music richer than any could alone.` },
            { word: `curious`,        definition: `WANTING to KNOW. Be CURIOUS about other cultures — you'll learn amazing things.`,
              audioPrompt: `Curious, {name}, means wanting to know. Be curious about other cultures — you'll learn amazing things. Try foods you've never had. Listen to music from other countries. Watch movies from other cultures. Read books from other places. Ask questions of people from different backgrounds. Curiosity opens worlds. Curiosity makes you richer.` },
          ],
        },

        {
          id: `l19-game`,
          type: `interactive`,
          format: `drag-match`,
          guideText: `Let's see what you remember, {name}.`,
          buckets: [
            { id: `fact`, label: `✅ Yes, that's true!`, color: `#34D399` },
            { id: `myth`, label: `❌ No way!`,         color: `#F87171` },
          ],
          items: [
            { id: `l19-g1`, image: `l19-game-1.webp`, label: `EVERY culture MATTERS — none is "better" than another, each has its own value and gifts.`,
              matchPhrase: `Yes! Every culture matters. Each developed its own beauty and wisdom. None is better — just different. Diversity makes the world richer.`,
              correctMatch: `fact` },
            { id: `l19-g2`, image: `l19-game-2.webp`, label: `TRADITIONS come from HISTORY — passed down generation after generation through stories and practice.`,
              matchPhrase: `True! Traditions are gifts from the past. Each generation receives them, then passes them forward. Recipes, songs, dances, holidays — all carry forward through time.`,
              correctMatch: `fact` },
            { id: `l19-g3`, image: `l19-game-3.webp`, label: `Only ONE culture is good — all the others are WRONG or worse.`,
              matchPhrase: `Not at all! No culture is better than another. Different is just different — not worse. Every culture has wisdom, beauty, and gifts to offer. All are valuable.`,
              correctMatch: `myth` },
            { id: `l19-g4`, image: `l19-game-4.webp`, label: `All cultures around the world are EXACTLY IDENTICAL — no differences at all.`,
              matchPhrase: `Definitely not! Cultures are wonderfully different. Different foods, music, languages, clothing, celebrations, stories, beliefs. That's what makes our world so rich.`,
              correctMatch: `myth` },
          ],
        },

        {
          id: `l19-quiz`,
          type: `quiz`,
          guideText: `Let's see what you remember, {name}.`,
          questions: [
            { id: `l19-q1`, format: `multiple-choice`,
              question: `What is CULTURE?`,
              options: [`A type of yogurt`, `The WAY a GROUP of people LIVE — food, language, music, stories, traditions`, `Only food`, `Only music`],
              correctIndex: 1,
              explanation: `Culture is the way a group of people live. It includes food, clothing, language, music, dance, stories, religion, holidays, traditions. Each culture is unique.` },
            { id: `l19-q2`, format: `multiple-choice`,
              question: `How many LANGUAGES are spoken on Earth?`,
              options: [`Just 10`, `Over 7,000 — different cultures have different languages`, `Only one`, `Two`],
              correctIndex: 1,
              explanation: `Over 7,000 languages! From Spanish (millions of speakers) to small languages spoken by just a few. Each language has its own beauty and ways of expressing ideas.` },
            { id: `l19-q3`, format: `multiple-choice`,
              question: `What do TRADITIONS tell us?`,
              options: [`Nothing important`, `What cultures VALUE — passed down through generations`, `Only about food`, `They're random`],
              correctIndex: 1,
              explanation: `Traditions tell us what cultures value. Family. Faith. Hard work. Joy. Ancestors. Each tradition carries meaning. They're passed down through generations.` },
            { id: `l19-q4`, format: `true-false`,
              question: `Cultures pass down STORIES — fables, myths, folktales — that carry wisdom forward through generations.`,
              correctAnswer: true,
              explanation: `True! Every culture has stories. Aesop's fables. Norse myths. Japanese folktales. African folktales. Stories teach kids what to value, what to fear, how to live. They've passed wisdom forward for thousands of years.` },
            { id: `l19-q5`, format: `fill-blank`,
              question: `The variety of cultures on Earth is called ___ — and it makes the world beautiful.`,
              options: [`diversity`, `delicious`, `darkness`, `desert`],
              correctIndex: 0,
              explanation: `Diversity! Many different cultures together. Different foods, music, languages, traditions. Diversity is something to celebrate — it makes the world richer.` },
            { id: `l19-q6`, format: `multiple-choice`,
              question: `Why should we LEARN about other cultures?`,
              options: [`To replace our own`, `We learn AMAZING things and become richer — we don't lose our own culture`, `It's boring`, `It's required`],
              correctIndex: 1,
              explanation: `Learning about other cultures makes us richer. We don't lose our own — we GAIN new perspectives, tastes, music, ideas. Curiosity about others is one of the most beautiful human qualities.` },
          ],
        },

        {
          id: `l19-realworld`,
          type: `real-world`,
          guideText: `Here's something amazing, {name}. There are over 200 countries on Earth, but THOUSANDS of cultures. Why? Because countries often have many cultures INSIDE them. The US alone has cultures from every continent — Mexican-American, Italian-American, African-American, Chinese-American, Native American, Japanese-American, Irish-American, Vietnamese-American, and many more. Each contributes food, music, holidays, words to the bigger American story. Same in most countries. India has hundreds of cultures and languages. Nigeria has over 250 languages! Brazil mixes Native, Portuguese, African, and immigrant cultures. The truth — there's no such thing as a "pure" culture. They all mix and grow together. That's how human history works.`,
          familyAdventure: `Together, EXPLORE another culture. Pick one — maybe a culture you've never learned about. Try a recipe from that culture. Listen to music from there. Find a movie or book from there. Look up a famous person from that culture. Talk about what you learned. Notice — exploring another culture doesn't replace yours. It just adds to who you are. Try a different culture every few weeks. Watch your world grow.`,
          creativePrompt: `Draw a picture of YOUR family's culture (or one you love). Include: 1) FOOD your family or this culture eats. 2) MUSIC or DANCE you celebrate with. 3) HOLIDAYS or CELEBRATIONS that matter. 4) STORIES that are passed down. 5) Something else special. Then share it with someone — maybe explain what each part means. You're celebrating where you come from.`,
        },

        {
          id: `l19-celebration`,
          type: `celebration`,
          message: `Wonderful, {name}. You now understand CULTURE. Culture is how a group of people LIVE — food, language, music, dance, stories, clothing, traditions, celebrations. There are THOUSANDS of cultures on Earth. Every one is VALUABLE — none better than another. Traditions are gifts from history, passed down through generations. DIVERSITY makes the world beautiful. Be curious about other cultures — you'll grow richer. Celebrate where you come from. Honor where others come from. The world has room for all of us. — Atlas 🐻`,
          badge: `cultures-traditions-explorer`,
          badgeName: `Cultures and Traditions Explorer`,
          xpEarned: 50,
        },

      ],
    },
  ],
};

export default SOCIAL_STUDIES_L19;

// ─── Dev asset check ───────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const mags  = SOCIAL_STUDIES_L19.lessons[0].screens.filter(s => s.type === 'magazine').length;
  const game  = SOCIAL_STUDIES_L19.lessons[0].screens.find(s => s.type === 'interactive')?.items?.length ?? 0;
  const quiz  = SOCIAL_STUDIES_L19.lessons[0].screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  console.log(`[LESSON-SOCIAL-STUDIES-L19] Loaded: "Cultures and Traditions" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
}
