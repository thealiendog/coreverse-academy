// ─────────────────────────────────────────────────────────────────────────────
// SPANISH (LANGUAGES)  |  L06 — La Comida (Food)
// Age band : explorers (6–8)   Guide: luna
// Continues from L05 (Los Animales) → L07 (TBD)
// ─────────────────────────────────────────────────────────────────────────────

const SP_L06 = {
  ageBand:   `explorers`,
  subjectId: `languages`,
  guideId:   `luna`,

  lessons: [
    {
      id:        `sp-6-8-06`,
      title:     `La Comida — Food`,
      duration:  12,
      xpReward:  50,
      badge:     `languages-l06`,
      badgeName: `Food Friend`,

      screens: [

        {
          id:       `sp06-welcome`,
          type:     `welcome`,
          guideText: `¡Hola, {name}! Luna here again. You've met greetings, numbers, family, the body, and animals. Today — la comida — FOOD. Food is one of the BEST topics in any language because we all eat every day. Every Spanish-speaking country has incredible food. And many words you ALREADY know come from Spanish-speaking ancestors. Taco, chocolate, tomato — all from the Aztec language, Nahuatl, passed through Spanish to English. By the end of today, you'll be able to name your plate. ¿Listos, {name}? ¡Vamos a comer!`,
          headline: `La Comida`,
          subtitle: `Food — la comida — LAH koh-MEE-dah — the universal language of love`,
          visual:   `/explorer-assets/languages/sp06-welcome.webp`,
        },

        {
          id:            `sp06-mag-1`,
          type:          `magazine`,
          section:       1,
          totalSections: 4,
          headline:      `La Mesa — At the Table`,
          paragraphs: [
            `{name} — let's start where the food happens. La MESA — LAH MEH-sah — the TABLE. In Spanish-speaking families, la mesa is sacred. Meals are slow. People stay and talk. The table is where family lives.`,
            `Three big meals: el DESAYUNO — el deh-sah-YOO-noh — BREAKFAST. La COMIDA — LAH koh-MEE-dah — LUNCH (the BIG meal of the day in most Spanish-speaking countries — sometimes 2 hours long!). La CENA — LAH SEH-nah — DINNER (usually lighter, later — often 8 or 9 PM in Spain!).`,
            `Wait. Comida means food AND lunch? Yes! Context tells you which. "¿Qué hay de comida?" — what's for lunch? Or — what food is there? Spanish loves words that do double work. Now you know two meanings of one word — that's how fluent speakers think.`,
          ],
          image:        `/explorer-assets/languages/sp06-magazine-1.png`,
          imageCaption: `La mesa — the table. Where Spanish families gather, talk, and eat for hours. Three meals: desayuno, comida, cena.`,
          vocab: [
            {
              word:        `la mesa`,
              definition:  `The TABLE — LAH MEH-sah. The heart of Spanish family meals.`,
              audioPrompt: `La mesa, {name} — LAH MEH-sah — the table. In Spanish-speaking families, la mesa is where everyone gathers. Meals are not rushed. People stay for hours, talking, laughing, sharing. The table is more than furniture — it's a meeting place. Even small kids learn to "estar en la mesa" — to BE at the table. To belong.`,
            },
            {
              word:        `el desayuno`,
              definition:  `BREAKFAST — el deh-sah-YOO-noh. The morning meal that breaks the night's fast.`,
              audioPrompt: `El desayuno, {name} — el deh-sah-YOO-noh — breakfast. The word comes from "des" meaning "un" and "ayuno" meaning "fast." So desayuno literally means "un-fasting" — breaking the long fast from the night before. In English we say "break-fast." Same idea, different language. Words tell stories.`,
            },
            {
              word:        `la cena`,
              definition:  `DINNER — LAH SEH-nah. The evening meal, often late in Spanish culture.`,
              audioPrompt: `La cena, {name} — LAH SEH-nah — dinner. In Spain, la cena often happens at 9 or 10 at night! That's much later than most English-speaking countries. Why? The big meal happened at lunch. So dinner is lighter — maybe soup, bread, cheese. Different culture, different rhythm. Both work.`,
            },
          ],
        },

        {
          id:            `sp06-mag-2`,
          type:          `magazine`,
          section:       2,
          totalSections: 4,
          headline:      `Comidas Básicas — Foods You Already Know`,
          paragraphs: [
            `Now the foods, {name}. Some you'll recognize instantly because English borrowed them from Spanish.`,
            `EL PAN — el PAHN — BREAD. LA LECHE — LAH LEH-cheh — MILK. EL AGUA — el AH-gwah — WATER. EL QUESO — el KEH-soh — CHEESE. LA MANZANA — LAH mahn-SAH-nah — APPLE. EL PLÁTANO — el PLAH-tah-noh — BANANA (in Spain) or PLANTAIN (in Latin America — context!). LA NARANJA — LAH nah-RAHN-hah — ORANGE.`,
            `{name} — try this. Say "yo quiero pan" — YOH kee-EH-roh PAHN — "I want bread." You just made your first Spanish sentence about food. Yo = I. Quiero = want. Pan = bread. Swap pan for any food word you know. Yo quiero leche. Yo quiero queso. Yo quiero manzana. You're CONJUGATING now. That's a fluent-speaker move.`,
          ],
          image:        `/explorer-assets/languages/sp06-magazine-2.png`,
          imageCaption: `Common foods: pan (bread), leche (milk), agua (water), queso (cheese), manzana (apple), plátano (banana), naranja (orange).`,
          vocab: [
            {
              word:        `el pan`,
              definition:  `BREAD — el PAHN. The foundation of most Spanish meals.`,
              audioPrompt: `El pan, {name} — el PAHN — bread. Spanish bread is incredible — crusty outside, soft inside. In Spain, almost every meal includes pan. There's even an expression: "es más bueno que el pan" — "he is better than bread" — meaning a very, very good person. Bread is THAT important. Higher praise than gold.`,
            },
            {
              word:        `la manzana`,
              definition:  `APPLE — LAH mahn-SAH-nah. Notice how Spanish words often end in vowels.`,
              audioPrompt: `La manzana, {name} — LAH mahn-SAH-nah — apple. Listen to the rhythm — mahn-SAH-nah. Three syllables, ending in a soft "ah" sound. Spanish loves vowel endings. It's part of why Spanish sounds musical. The language flows. Words don't end in hard consonants like English often does. Spanish is meant to be sung.`,
            },
            {
              word:        `yo quiero`,
              definition:  `I WANT — YOH kee-EH-roh. Your magic phrase for asking for any food.`,
              audioPrompt: `Yo quiero, {name} — YOH kee-EH-roh — I want. This is one of the most useful phrases in any language. Yo quiero agua. Yo quiero pan. Yo quiero — and then any noun. Bonus: in a restaurant, you'd say "quisiera" — kee-see-EH-rah — "I would like" — that's more polite. But yo quiero works perfectly for now. Power phrase.`,
            },
          ],
        },

        {
          id:            `sp06-mag-3`,
          type:          `magazine`,
          section:       3,
          totalSections: 4,
          headline:      `Sabores — Flavors and Drinks`,
          paragraphs: [
            `{name} — now the FLAVORS. Sabores — sah-BOH-rehs. Every food has one.`,
            `DULCE — DOOL-seh — SWEET (like chocolate or cake). SALADO — sah-LAH-doh — SALTY (like chips or pretzels). PICANTE — pee-KAHN-teh — SPICY (LOTS of Mexican food is picante!). ÁCIDO — AH-see-doh — SOUR (like a lemon — limón). AMARGO — ah-MAR-goh — BITTER (like dark coffee).`,
            `And DRINKS — bebidas — beh-BEE-dahs. EL AGUA — water. LA LECHE — milk. EL JUGO — el HOO-goh — JUICE. EL CAFÉ — el kah-FEH — COFFEE (huge in Spanish-speaking countries — Colombia and Brazil grow some of the world's best). EL CHOCOLATE — el choh-koh-LAH-teh — CHOCOLATE. Quick story: the word "chocolate" comes from the AZTEC word XOCOLĀTL. The Aztecs of Mexico invented chocolate drinks 3000 years ago. Spanish explorers brought the word — and the drink — to Europe. Now every language uses some version of it. Whenever you say "chocolate," you're speaking a little Nahuatl. Cool, right?`,
          ],
          image:        `/explorer-assets/languages/sp06-magazine-3.png`,
          imageCaption: `Sabores: dulce (sweet), salado (salty), picante (spicy), ácido (sour), amargo (bitter). Bebidas: agua, leche, jugo, café, chocolate.`,
          vocab: [
            {
              word:        `dulce`,
              definition:  `SWEET — DOOL-seh. Also means a sweet treat or candy in many countries.`,
              audioPrompt: `Dulce, {name} — DOOL-seh — sweet. In Mexico, "dulces" means candy — the sweet treats kids love. "Dulce de leche" — DOOL-seh deh LEH-cheh — is a famous Latin American sweet sauce, made by slowly cooking milk and sugar for hours until it turns into golden caramel. Pour it over ice cream. Pour it on bread. Pour it on EVERYTHING. Dulce is happiness in a word.`,
            },
            {
              word:        `picante`,
              definition:  `SPICY — pee-KAHN-teh. The flavor of much Mexican and Latin American food.`,
              audioPrompt: `Picante, {name} — pee-KAHN-teh — spicy. Latin American food has many levels of picante, from gentle warmth to "your-mouth-is-on-fire." Hot chili peppers — chiles — are central to Mexican cooking. There are over 200 types of chiles in Mexico! Each with its own heat level and flavor. Picante isn't just pain — it's pleasure. Spice wakes up your senses.`,
            },
            {
              word:        `chocolate`,
              definition:  `CHOCOLATE — choh-koh-LAH-teh. From the Aztec word XOCOLĀTL — meaning "bitter water."`,
              audioPrompt: `Chocolate, {name} — choh-koh-LAH-teh — chocolate. The word comes from the Aztec language Nahuatl. Xocolātl meant "bitter water" — because original Aztec chocolate was a bitter, frothy drink mixed with chili. They drank it cold, not sweet. Spanish explorers brought it to Europe in the 1500s. Europeans added sugar. The rest is history. Every chocolate bar carries an ancient Aztec word inside it.`,
            },
          ],
        },

        {
          id:            `sp06-mag-4`,
          type:          `magazine`,
          section:       4,
          totalSections: 4,
          headline:      `Compartir — Sharing Is the Real Meal`,
          paragraphs: [
            `{name} — here's the BIG idea about food in Spanish-speaking cultures. COMPARTIR — kohm-par-TEER — to SHARE. Sharing food isn't just polite. It's the WHOLE POINT.`,
            `In Spain, friends eat TAPAS — TAH-pahs — small shared plates passed around the table. In Mexico, TACOS — TAH-kohs — are eaten with hands, often standing at street stands with friends. In Argentina, an ASADO — ah-SAH-doh — is a giant outdoor barbecue where the whole neighborhood comes. In Colombia, families share AREPAS — ah-REH-pahs — flat corn cakes filled with cheese, meat, or eggs. Each country, its own beloved foods. ALL share the same idea: food is meant to be shared.`,
            `The word "taco" comes from Nahuatl. "Tomate" — tomato — also from Nahuatl (tomatl). "Chocolate" — Nahuatl too. When you eat tacos with chocolate milk and tomatoes, you're enjoying 3 Aztec words on one plate. Spanish carried these gifts to the world. And now, you carry them too. Sharing food = sharing culture = sharing love. THAT is la comida.`,
          ],
          image:        `/explorer-assets/languages/sp06-magazine-4.png`,
          imageCaption: `Compartir — to share. Tapas, tacos, asado, arepas. Different countries, same idea: food brings people together.`,
          vocab: [
            {
              word:        `compartir`,
              definition:  `TO SHARE — kohm-par-TEER. The heart of Spanish-speaking food culture.`,
              audioPrompt: `Compartir, {name} — kohm-par-TEER — to share. In Spanish-speaking cultures, you don't just eat — you compartir. You pass plates around. You let everyone try a bite. "Probar" — proh-BAR — to try, to taste. "¿Quieres probar?" — kee-EH-rehs proh-BAR — "Do you want to try?" Best question at any table. Food shared tastes better. Always has. Always will.`,
            },
            {
              word:        `los tacos`,
              definition:  `TACOS — TAH-kohs. From the Aztec language — small folded tortillas filled with anything good.`,
              audioPrompt: `Los tacos, {name} — TAH-kohs — tacos. From Nahuatl, the Aztec language. Originally meant something like "plug" or "wedge" — referring to wrapped food. Today, tacos are EVERYWHERE. There are taco trucks in every American city. Tacos al pastor with pineapple. Tacos de pescado with fish. Crunchy. Soft. The taco is one of Mexico's greatest gifts to the world.`,
            },
            {
              word:        `cultura`,
              definition:  `CULTURE — kool-TOO-rah. Food carries culture — recipes pass down stories, history, and love.`,
              audioPrompt: `Cultura, {name} — kool-TOO-rah — culture. Culture means the way a group of people lives — what they eat, sing, celebrate, value. Food is one of the BIGGEST parts of culture. Every recipe carries history. Your abuela's tamales might be a recipe she learned from HER abuela who learned it from HER abuela. Food carries the memory of people who came before. When you eat it, you keep them alive. Powerful.`,
            },
          ],
        },

        {
          id:            `sp06-game`,
          type:          `interactive`,
          guideText:     `Match each Spanish food word to its English meaning, {name}!`,
          columnHeaders: [`Spanish`, `English`],
          items: [
            { id: `sp06-i1`, label: `el pan`,     correctMatch: `bread`  },
            { id: `sp06-i2`, label: `la leche`,   correctMatch: `milk`   },
            { id: `sp06-i3`, label: `la manzana`, correctMatch: `apple`  },
            { id: `sp06-i4`, label: `el queso`,   correctMatch: `cheese` },
          ],
          buckets: [
            { id: `bread`,  label: `bread`,  color: `#FBBF24` },
            { id: `milk`,   label: `milk`,   color: `#60A5FA` },
            { id: `apple`,  label: `apple`,  color: `#F87171` },
            { id: `cheese`, label: `cheese`, color: `#34D399` },
          ],
        },

        {
          id:        `sp06-quiz`,
          type:      `quiz`,
          guideText: `¡Vamos, {name}! Let's see what stuck.`,
          questions: [
            {
              id:           `sp06-q1`,
              format:       `multiple-choice`,
              question:     `What does "la comida" mean?`,
              options:      [`Only "food"`, `BOTH "food" AND "lunch" — context tells you which!`, `Just "lunch"`, `A type of bread`],
              correctIndex: 1,
              explanation:  `La comida means BOTH food AND lunch — Spanish loves words that do double work! "¿Qué hay de comida?" could mean "What's for lunch?" or "What food is there?" Context tells you.`,
            },
            {
              id:           `sp06-q2`,
              format:       `multiple-choice`,
              question:     `How would you say "I want milk" in Spanish?`,
              options:      [`Yo manzana leche`, `Yo quiero leche — YOH kee-EH-roh LEH-cheh`, `Quiero yo pan`, `Hola leche`],
              correctIndex: 1,
              explanation:  `Yo quiero leche! "Yo" = I. "Quiero" = want. "Leche" = milk. You can swap leche for ANY food word: yo quiero pan, yo quiero manzana, yo quiero queso. Powerful pattern!`,
            },
            {
              id:            `sp06-q3`,
              format:        `true-false`,
              question:      `The word "chocolate" comes from the Aztec language Nahuatl.`,
              correctAnswer: true,
              explanation:   `True! "Chocolate" comes from the Aztec word "xocolātl" — meaning "bitter water." Aztecs drank it bitter and frothy 3,000 years ago. Spanish explorers brought it to Europe, where sugar was added. The word survived intact.`,
            },
            {
              id:           `sp06-q4`,
              format:       `multiple-choice`,
              question:     `In Spain, what is "la cena" usually like?`,
              options:      [`The BIG meal at noon`, `LIGHTER and LATER — often 9 or 10 PM!`, `Only dessert`, `Breakfast`],
              correctIndex: 1,
              explanation:  `Cena is dinner — and in Spain, it's often LATE (9 or 10 PM!) and LIGHTER than lunch. Because la comida (lunch) is the BIG meal. Different cultures, different rhythms. Both work beautifully.`,
            },
            {
              id:           `sp06-q5`,
              format:       `multiple-choice`,
              question:     `Which word means "SPICY" — the flavor of much Mexican food?`,
              options:      [`Dulce`, `Salado`, `PICANTE — pee-KAHN-teh`, `Amargo`],
              correctIndex: 2,
              explanation:  `Picante means spicy! Mexico has over 200 types of chiles (chili peppers), each with different heat and flavor. Picante isn't just heat — it's a whole flavor experience that wakes up your senses.`,
            },
            {
              id:           `sp06-q6`,
              format:       `multiple-choice`,
              question:     `The Spanish verb meaning "to share" — the heart of Spanish-speaking food culture — is ___.`,
              options:      [`compartir`, `manzana`, `dulce`, `mesa`],
              correctIndex: 0,
              explanation:  `¡Compartir! KOHM-par-TEER. Food shared tastes better. Spanish-speaking cultures eat tapas, tacos, asados, arepas — all designed to be shared. The verb compartir is at the heart of the culture.`,
            },
          ],
        },

        {
          id:              `sp06-realworld`,
          type:            `real-world`,
          guideText:       `Here's something you can do TODAY, {name}. At your next meal, try naming foods in Spanish. "El agua" when you reach for water. "El pan" when you grab bread. "La leche" with your cereal. Just one or two words per meal. Saying them OUT LOUD is how they stick. Your brain remembers what your mouth practices. By Friday, you'll have a dozen new words living inside you — ready to use forever. Tiny daily habits build big skills.`,
          familyAdventure: `Together, plan a "Spanish dinner night" sometime this week. Pick ONE food from a Spanish-speaking country: tacos (Mexico), arepas (Colombia or Venezuela), paella (Spain), empanadas (Argentina or many countries), pupusas (El Salvador), tostones (Caribbean). Look up a kid-friendly recipe online. Cook it together. While you cook, name the ingredients in Spanish: el tomate, la cebolla (onion), el ajo (garlic), el queso, el pollo (chicken). Eat the meal. Talk about the country it comes from. Food is the easiest way to travel without leaving the kitchen.`,
          creativePrompt:  `Draw your "DREAM MEAL" — and label each food in Spanish! Whatever you'd want on your perfect plate. Manzana? Pan? Queso? Pollo? Chocolate? Draw the table, the plate, the foods. Write the Spanish name next to each one. Add a glass of your favorite drink — agua, leche, jugo, chocolate. Now you have a menu in Spanish. ¡Buen provecho! (boo-EHN proh-VEH-choh — "Enjoy your meal!")`,
        },

        {
          id:        `sp06-celebration`,
          type:      `celebration`,
          message:   `¡Increíble, {name}! Today you learned LA COMIDA — food in Spanish. Three meals: desayuno, comida, cena. Foods: pan, leche, manzana, queso, plátano, naranja. Flavors: dulce, salado, picante. The MAGIC PHRASE: "Yo quiero ___" for asking for any food. And the BIG idea: compartir — sharing — is the heart of every Spanish-speaking culture. Plus three Aztec words you carry every day — taco, tomate, chocolate. You're not just learning Spanish words — you're inheriting cultures. ¡Hasta la próxima!`,
          badge:     `languages-l06`,
          badgeName: `Food Friend`,
          xpEarned:  50,
        },

      ],
    },
  ],
};

export default SP_L06;

// ─── Dev asset check ───
if (import.meta.env?.DEV) {
  const mags = SP_L06.lessons[0].screens.filter(s => s.type === 'magazine').length;
  const game = SP_L06.lessons[0].screens.find(s => s.type === 'interactive')?.items?.length ?? 0;
  const quiz = SP_L06.lessons[0].screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  console.log(`[LESSON-SP-L06] Loaded: "La Comida" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
}
