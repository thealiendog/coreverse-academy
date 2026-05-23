// ─────────────────────────────────────────────────────────────────────────────
// SOCIAL STUDIES UE  |  L12 — World Cultures
// Age band : upper_explorers (9–10)   Guide: atlas
// Standards: C3 D2.Geo.6.3-5 / D2.His.4.3-5 / D2.Civ.7.3-5
// CALIBRATED: UE spec v1.1 + game toolkit v1
// Game format: drag-identify (cultural elements → regions)
// ─────────────────────────────────────────────────────────────────────────────

const SOCIAL_STUDIES_UE_L12 = {
  ageBand: `upper_explorers`,
  subjectId: `social_studies`,
  guide: `atlas`,

  lessons: [
    {
      id: `social-studies-9-10-12`,
      title: `World Cultures`,
      duration: 22,
      xpReward: 75,
      badge: `cultural-explorer`,
      badgeName: `Cultural Explorer`,

      screens: [
        {
          id: `l12-welcome`,
          type: `welcome`,
          guideText: `Hey {name}. We've been talking about humans on Earth — where we live, where we move. Today we look at how astonishingly different we are. Roughly 8 billion people, thousands of languages, hundreds of cuisines, countless ways of celebrating, building, dressing, and believing. Today we travel the world through its cultures. By the end, you'll recognize some patterns across cultures, and you'll have a much bigger map of humanity in your head.`,
          headline: `World Cultures`,
          subtitle: `The astonishing variety of how humans live`,
          visual: `/ue-assets/social-studies/l12-welcome.webp`,
        },

        {
          id: `l12-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `What Is Culture?`,
          paragraphs: [
            `Culture is the shared way of life of a group of people. It includes language, food, religion, music, art, holidays, clothes, traditions, family structures, and what people believe is "normal" or "polite" or "good." Every group of people develops a culture, and every individual person grows up inside one.`,
            `Culture isn't a small thing. It shapes almost every part of your life — how you greet people, what you eat for breakfast, what you wear, what holidays matter to you, what music sounds normal versus strange. Most of these things feel natural to people inside that culture. They only seem unusual when you compare them to a different culture.`,
            `Cultures change over time. They borrow from each other. They blend, especially in places where many groups live together. New cultures emerge from old ones constantly. There's no such thing as a "pure" culture that's never changed — every culture you know is a mix of older influences and current changes.`,
          ],
          image: `/ue-assets/social-studies/l12-s1-culture.webp`,
          imageCaption: `Language. Food. Music. Beliefs. Holidays. The shared way of life of a group of people.`,
          vocab: [
            { word: `culture`,
              definition: `The shared way of life of a group of people — language, food, art, beliefs, traditions, and more.`,
              audioPrompt: `Culture is the shared way of life of a group of people, {name}. It includes language, food, music, holidays, religious beliefs, art, clothing, family customs, and many ideas about what's normal or polite. Every group of humans develops a culture. Every individual grows up inside one and absorbs it without realizing. Most of what feels normal to you isn't universal — it's cultural. Looking at other cultures helps you see your own from the outside, which is one of the most interesting things you can learn to do.` },
            { word: `cultural diffusion`,
              definition: `The spread of cultural elements — ideas, food, language, music — from one group to another.`,
              audioPrompt: `Cultural diffusion is the spread of cultural elements from one group to another, {name}. It happens through trade, migration, travel, and today through the internet. Tomatoes spread from the Americas to Europe 500 years ago and became central to Italian and Spanish food. Hip-hop spread from New York across the entire world. Buddhism spread from India across Asia. Cultural diffusion is why most cultures today are blended rather than "pure" — they've been mixing with other cultures throughout their entire history.` },
          ],
        },

        {
          id: `l12-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Language and Communication`,
          paragraphs: [
            `There are roughly 7,000 languages spoken in the world today. Some have over a billion speakers — Mandarin Chinese, English, Hindi, Spanish. Others have only a few hundred. Languages aren't just labels for the same things — they carry whole ways of seeing the world. A culture's language often has words for concepts that don't translate easily into others.`,
            `For example, the Japanese word "tsundoku" means buying books and letting them pile up unread. English has no word for that, even though English speakers definitely do it. The German "schadenfreude" describes feeling pleased when something bad happens to someone you don't like. The Inuit languages have many specific words for different types of snow. Cultures notice and name what matters to them.`,
            `Languages are dying out at a fast rate. Estimates suggest about half of today's languages may be gone in a century. When a language dies, the unique perspectives, stories, and knowledge it carried often go with it. This is why some communities work hard to preserve their languages — they're not just preserving sounds, but preserving ways of thinking.`,
          ],
          image: `/ue-assets/social-studies/l12-s2-language.webp`,
          imageCaption: `7,000 languages. Each one a different way of seeing the world.`,
          vocab: [
            { word: `language`,
              definition: `A system of communication used by a group, including spoken sounds, writing, or signs.`,
              audioPrompt: `Language is a system of communication used by a group, {name}. It can be spoken, written, or signed — sign languages used by deaf communities are full languages with their own grammar and vocabulary. About 7,000 languages exist today. They aren't just labels for the same things — they carry whole worldviews. Words that seem normal in one language can be untranslatable in another, because the concept itself didn't exist as a single idea. Languages capture what their cultures find important enough to name.` },
            { word: `dialect`,
              definition: `A form of a language specific to a particular region or group, with its own vocabulary or pronunciation.`,
              audioPrompt: `A dialect is a form of a language specific to a region or group, {name}. English has dozens of dialects — British English, American English, Australian English, Caribbean English, and many more. Spanish has dialects across Spain and Latin America. Within countries, regional dialects can be strong — the English spoken in rural Mississippi sounds very different from the English spoken in Boston. Dialects aren't wrong versions of a language — they're natural variations that develop when groups of speakers are separated by geography or history.` },
          ],
        },

        {
          id: `l12-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Religion, Belief, and Celebration`,
          paragraphs: [
            `Most cultures have some form of religion or shared belief about the world — about what's sacred, what happens after we die, what's good and what's wrong. The major world religions — Christianity, Islam, Hinduism, Buddhism, Judaism, and many others — together include several billion people. Each one has shaped art, music, architecture, holidays, food, and law in deep ways.`,
            `Beyond formal religions, every culture has rituals and celebrations — things people do at certain times that have meaning. Weddings. Funerals. New Year. Coming-of-age ceremonies. Harvest festivals. Days for remembering ancestors. The specifics vary enormously, but the underlying impulse — to mark important moments together — is nearly universal.`,
            `Belief and celebration shape daily life. Christian cultures often gather on Sundays. Many Muslim communities pause for prayer five times a day. Hindus celebrate Diwali with light. Chinese cultures mark the lunar new year with red, family meals, and fireworks. Knowing a culture's major religious and celebratory practices tells you a huge amount about how people there live.`,
          ],
          image: `/ue-assets/social-studies/l12-s3-religion.webp`,
          imageCaption: `Belief, ritual, celebration — humanity's near-universal patterns.`,
          vocab: [
            { word: `tradition`,
              definition: `A custom, belief, or practice passed down from generation to generation.`,
              audioPrompt: `A tradition is a custom, belief, or practice passed down from generation to generation, {name}. Traditions can be religious — like specific holidays or prayers. They can be family-based — like a recipe passed down for generations. They can be national — like the way different countries celebrate their independence days. Traditions create continuity. They connect people across time. They give children a sense of where they came from. Even modern families have traditions, even if they don't always call them that.` },
            { word: `ritual`,
              definition: `A set of actions performed in a set way, often to mark an important occasion or express a shared belief.`,
              audioPrompt: `A ritual is a set of actions performed in a particular way to mark an occasion or express a belief, {name}. Rituals can be religious — a Catholic mass, a Muslim prayer, a Jewish Passover seder. They can be cultural — a national anthem before a game, a graduation ceremony, a family holiday tradition. Even everyday habits can become small rituals. Rituals create shared meaning. They help groups mark what's important, move through major life transitions, and feel connected to something larger than the individual.` },
          ],
        },

        {
          id: `l12-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Food, Music, and the Things That Travel`,
          paragraphs: [
            `Food is one of the clearest expressions of culture, and one of the most fun to explore. Italian cuisine centers on bread, pasta, olive oil, tomatoes, and aged cheeses. Japanese cuisine emphasizes rice, fish, seaweed, and precise presentation. Mexican cuisine is built around corn, beans, chile peppers, and complex sauces. Indian cuisine uses dozens of spices in elaborate combinations. Each cuisine reflects the climate, agriculture, and history of where it came from.`,
            `Music travels too. Hip-hop started in the Bronx in nineteen seventy-three and is now everywhere. K-pop began in South Korea and has billions of listeners worldwide. Reggae came from Jamaica. Salsa from Cuba and Puerto Rico. Each style carries the history of where it began even as it spreads to new places. Music is one of the fastest ways cultures share with each other.`,
            `In the modern world, cultures mix more than ever before. People eat sushi in Mexico City. Kids in Norway listen to Brazilian funk. American teens follow Korean fashion. This blending is sometimes celebrated as global creativity, and sometimes worried about as a loss of distinct identities. Both reactions are real. Mostly, what's happening is that cultures keep doing what they've always done — borrowing, blending, evolving.`,
          ],
          image: `/ue-assets/social-studies/l12-s4-food-music.webp`,
          imageCaption: `Food. Music. The things that travel.`,
          vocab: [
            { word: `cuisine`,
              definition: `The cooking style and food traditions of a culture or region.`,
              audioPrompt: `Cuisine is the cooking style and food traditions of a culture, {name}. Italian cuisine, Indian cuisine, Mexican cuisine, Japanese cuisine, Ethiopian cuisine — each one reflects what grew in that region, what was traded with neighbors, and what cooking techniques developed over centuries. Cuisines have deep histories. The chile peppers in Mexican food came from the Americas. The tomatoes in Italian food came from the Americas too — Italy got them only about 500 years ago. Most cuisines we think of as "ancient" actually became their modern forms relatively recently.` },
            { word: `globalization`,
              definition: `The process by which people, ideas, goods, and culture spread more freely across the world.`,
              audioPrompt: `Globalization is the process of the world becoming more connected — people, goods, ideas, and culture spreading more freely across borders, {name}. It's why you can eat sushi in Mexico City, why kids in Norway listen to Brazilian music, why the same fashion trends appear on different continents. Globalization has made some things cheaper and some cultures more visible. It's also been criticized for spreading certain cultures at the expense of smaller, local ones. Globalization is arguably the defining feature of the modern world.` },
          ],
        },

        // ── DRAG-IDENTIFY GAME — Match cultural elements to regions ────────────
        {
          id: `l12-game`,
          type: `interactive`,
          format: `drag-identify`,
          guideText: `Time to match cultural elements to the parts of the world they come from, {name}. You'll see different traditions, foods, holidays, and music styles. Drag each one into the right region. Some are tricky — read carefully. Not all of these are obvious!`,
          buckets: [
            { id: `east-asia`,     label: `East Asia`,     color: `#F87171` },
            { id: `south-asia`,    label: `South Asia`,    color: `#FBBF24` },
            { id: `middle-east`,   label: `Middle East`,   color: `#A78BFA` },
            { id: `africa`,        label: `Africa`,        color: `#34D399` },
            { id: `latin-america`, label: `Latin America`, color: `#0EA5E9` },
            { id: `europe`,        label: `Europe`,        color: `#EC4899` },
          ],
          items: [
            { id: `l12-g1`, image: `l12-game-1.webp`, label: `Diwali — the festival of lights, celebrated with lamps, sweets, and family gatherings`,
              matchPhrase: `South Asia. Diwali is a major Hindu festival, also celebrated by Sikhs and Jains, originating in India.`, correctMatch: `south-asia` },
            { id: `l12-g2`, image: `l12-game-2.webp`, label: `Sushi — vinegared rice with raw fish, vegetables, or seaweed`,
              matchPhrase: `East Asia. Sushi originated in Japan and became one of the most popular foods worldwide.`, correctMatch: `east-asia` },
            { id: `l12-g3`, image: `l12-game-3.webp`, label: `Pasta — wheat dough shaped into many forms, served with sauces`,
              matchPhrase: `Europe. Pasta is central to Italian cuisine, dating back thousands of years.`, correctMatch: `europe` },
            { id: `l12-g4`, image: `l12-game-4.webp`, label: `Salsa music — fast Latin dance music with strong rhythms, originating in Cuba and Puerto Rico`,
              matchPhrase: `Latin America. Salsa music came from Cuba and Puerto Rico and spread across the Americas.`, correctMatch: `latin-america` },
            { id: `l12-g5`, image: `l12-game-5.webp`, label: `Tagine — slow-cooked stew prepared in a cone-shaped clay pot`,
              matchPhrase: `Africa. Tagine is a classic North African dish, especially from Morocco and Algeria.`, correctMatch: `africa` },
            { id: `l12-g6`, image: `l12-game-6.webp`, label: `Ramadan — a month of fasting from dawn to sunset, ended by a major feast`,
              matchPhrase: `Middle East. Ramadan is observed by Muslims worldwide, with origins in the Middle East where Islam began.`, correctMatch: `middle-east` },
            { id: `l12-g7`, image: `l12-game-7.webp`, label: `K-pop — highly produced pop music with synchronized dance, often sung in Korean`,
              matchPhrase: `East Asia. K-pop originated in South Korea and is now one of the biggest music industries in the world.`, correctMatch: `east-asia` },
            { id: `l12-g8`, image: `l12-game-8.webp`, label: `Tacos — folded or rolled tortillas filled with meat, vegetables, beans, or cheese`,
              matchPhrase: `Latin America. Tacos originated in Mexico, with countless regional variations.`, correctMatch: `latin-america` },
            { id: `l12-g9`, image: `l12-game-9.webp`, label: `Pyramids of Giza — massive tomb structures built for ancient kings around 2500 BCE`,
              matchPhrase: `Africa. The pyramids are in Egypt, one of the most influential ancient civilizations.`, correctMatch: `africa` },
            { id: `l12-g10`, image: `l12-game-10.webp`, label: `Bagpipes — wind instrument with bag and pipes, traditional folk instrument`,
              matchPhrase: `Europe. Bagpipes are most associated with Scotland and Ireland, though similar instruments exist in other cultures.`, correctMatch: `europe` },
            { id: `l12-g11`, image: `l12-game-11.webp`, label: `Hummus — creamy dip made from chickpeas, sesame, and olive oil`,
              matchPhrase: `Middle East. Hummus is a staple food across many Middle Eastern countries.`, correctMatch: `middle-east` },
            { id: `l12-g12`, image: `l12-game-12.webp`, label: `Bollywood — major film industry producing colorful musical movies`,
              matchPhrase: `South Asia. Bollywood is based in Mumbai, India, and is the largest film industry in the world by number of films produced.`, correctMatch: `south-asia` },
          ],
        },

        {
          id: `l12-quiz`,
          type: `quiz`,
          guideText: `Quick check, {name}.`,
          questions: [
            { id: `l12-q1`, format: `multiple-choice`,
              question: `What is culture?`,
              options: [
                `Only food and music`,
                `The shared way of life of a group of people — language, food, beliefs, traditions, art, and more`,
                `Anything from another country`,
                `Things old people do`,
              ],
              correctIndex: 1,
              explanation: `Culture is everything shared by a group of people — language, food, religion, art, holidays, customs, and beliefs. It shapes nearly every part of how we live, even when we don't notice.` },
            { id: `l12-q2`, format: `multiple-choice`,
              question: `Approximately how many languages are spoken in the world today?`,
              options: [
                `About 50`,
                `About 700`,
                `About 7,000`,
                `About 70,000`,
              ],
              correctIndex: 2,
              explanation: `About 7,000 languages exist today. Some are spoken by over a billion people. Others by only a few hundred. Each language carries a unique way of seeing the world.` },
            { id: `l12-q3`, format: `multiple-choice`,
              question: `What's a tradition?`,
              options: [
                `Something nobody likes`,
                `A custom, belief, or practice passed down from generation to generation`,
                `A new invention`,
                `A type of food`,
              ],
              correctIndex: 1,
              explanation: `Traditions are practices passed down across generations. They can be religious, family-based, national, or cultural. They create continuity and connection across time.` },
            { id: `l12-q4`, format: `true-false`,
              question: `True or false: "Pure" cultures that have never been influenced by other cultures exist all over the world.`,
              correctAnswer: false,
              explanation: `False. Every culture you know has been influenced by others through trade, migration, conquest, and exchange of ideas. Cultures constantly borrow and blend. The idea of a "pure" untouched culture is a myth.` },
            { id: `l12-q5`, format: `multiple-choice`,
              question: `Sushi originated in which region?`,
              options: [
                `Latin America`,
                `Europe`,
                `East Asia`,
                `Africa`,
              ],
              correctIndex: 2,
              explanation: `Sushi originated in Japan, in East Asia. It's now one of the most globally popular foods, but its roots are clearly East Asian.` },
            { id: `l12-q6`, format: `multiple-choice`,
              question: `Which holiday is the festival of lights in Hindu and Sikh traditions?`,
              options: [
                `Ramadan`,
                `Hanukkah`,
                `Diwali`,
                `Chinese New Year`,
              ],
              correctIndex: 2,
              explanation: `Diwali is the festival of lights, celebrated mainly by Hindus, Sikhs, and Jains. It originated in South Asia, especially India.` },
            { id: `l12-q7`, format: `multiple-choice`,
              question: `Why do languages dying out matter beyond just losing words?`,
              options: [
                `They don't matter`,
                `Each language carries unique ways of seeing the world, stories, and knowledge that often disappear with it`,
                `Languages can be replaced easily`,
                `Most languages are the same`,
              ],
              correctIndex: 1,
              explanation: `Languages carry whole ways of thinking. When one dies, the unique concepts, stories, and worldviews it preserved often go with it. About half of today's languages may be gone in a century, which is a major cultural loss.` },
            { id: `l12-q8`, format: `multiple-choice`,
              question: `Salsa music originated in which region?`,
              options: [
                `Europe`,
                `Latin America (Cuba and Puerto Rico)`,
                `East Asia`,
                `Middle East`,
              ],
              correctIndex: 1,
              explanation: `Salsa music came from Cuba and Puerto Rico, in Latin America. It spread across the Americas and is now beloved worldwide, but its roots are clearly Latin American.` },
          ],
        },

        {
          id: `l12-reflection`,
          type: `reflection`,
          guideText: `Pick a prompt, {name}.`,
          prompts: [
            { id: `r1`, text: `What's one tradition from YOUR family or culture you'd want to keep forever?` },
            { id: `r2`, text: `Which culture in the game would you most want to learn more about, and why?` },
            { id: `r3`, text: `What's a food, song, or holiday from another culture you already enjoy?` },
            { id: `r4`, text: `What's something about your own culture that you think might seem unusual to someone from a very different place?` },
          ],
        },

        {
          id: `l12-realworld`,
          type: `real-world`,
          guideText: `Right now, somewhere in the world, a family is making a traditional meal their great-grandparents would recognize. Somewhere else, a kid is learning a song in a language their parents don't speak. Cultures are constantly being preserved, lost, blended, reinvented. There's no single right way to be human. There are thousands of right ways, all happening at once. Getting curious about other cultures — really curious, not just tourist curious — is one of the most rewarding things you can do in a lifetime.`,
          familyAdventure: `Together, pick a country your family has never been to. Spend 20 minutes learning about its food, music, and one major holiday. Try to find a song to listen to or a recipe to try. Talk about what surprised you. Bonus: try cooking one dish from that country together this week.`,
          creativePrompt: {
            intro: `Pick a culture you find interesting — one we covered, or one from your own background, or one you're just curious about. Write about what makes it interesting to you.`,
            floor: `Write at least 5 sentences. Use the sentence starters if helpful.`,
            stretch: `Write 8-10 sentences. Describe specific aspects — food, holidays, language, music, beliefs — that make this culture distinct.`,
            open: `Write as much as you want. Imagine you're introducing this culture to someone who's never heard of it.`,
            frames: [
              `The culture I want to write about is ___.`,
              `What first interested me about it is ___.`,
              `One specific food, holiday, or tradition that's important is ___.`,
              `Something it has in common with my own culture is ___.`,
              `Something completely different from mine is ___.`,
            ],
          },
        },

        {
          id: `l12-celebration`,
          type: `celebration`,
          message: `Great work, {name}. You can now define culture, understand why language matters, name major regional traditions, and recognize that all cultures borrow and blend constantly. The world is much bigger and more interesting than any one culture can show. Next lesson we look at the periods of history that shaped the modern world — industrialization and colonialism. — Atlas.`,
          badge: `cultural-explorer`,
          badgeName: `Cultural Explorer`,
          xpEarned: 75,
        },
      ],
    },
  ],
};

export default SOCIAL_STUDIES_UE_L12;
