// ─────────────────────────────────────────────────────────────────────────────
// SOCIAL STUDIES  |  L10 — People and Places
// Age band : explorers (6–8)   Guide: atlas
// Standards: C3 Framework D2.Geo.4.K-2 / D2.Geo.6.K-2 / D2.Geo.8.K-2 (humans and environment)
// ─────────────────────────────────────────────────────────────────────────────

const SOCIAL_STUDIES_L10 = {
  ageBand:   `explorers`,
  subjectId: `social_studies`,
  guide:     `atlas`,

  lessons: [
    {
      id:        `social-studies-6-8-10`,
      title:     `People and Places`,
      duration:  12,
      xpReward:  50,
      badge:     `people-places-explorer`,
      badgeName: `People and Places Explorer`,

      screens: [

        {
          id: `l10-welcome`,
          type: `welcome`,
          guideText: `Hello, {name}. Atlas here. We've journeyed through maps, continents, landforms, weather, and climate. Today, we put it ALL together. We answer the big question — how does WHERE we live SHAPE who we are? Where you live affects what you eat, how you build, what you wear, what stories your family tells. People and places are CONNECTED. Let's see how.`,
          headline: `People and Places`,
          subtitle: `How WHERE you live shapes EVERYTHING — food, homes, clothes, culture, life`,
          visual: `/explorer-assets/social-studies/l10-welcome.webp`,
        },

        {
          id: `l10-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `People Live EVERYWHERE`,
          paragraphs: [
            `Humans are AMAZING. We live in almost every kind of place on Earth.`,
            `People live in HOT tropical rainforests. In COLD snowy mountains. In DRY deserts. On TINY islands. In HUGE cities. On wide grassy PLAINS. By BIG rivers. Near every kind of OCEAN. There are about 8 BILLION humans on Earth right now — spread across every continent and almost every climate. We're one of the most ADAPTABLE creatures alive. We can survive in conditions that would kill most animals — because we use our minds, our hands, and our communities to figure out how. People are everywhere — and each place shapes its people.`,
          ],
          image: `/explorer-assets/social-studies/l10-s1-people-everywhere.webp`,
          imageCaption: `8 BILLION humans live across nearly every place on Earth — rainforests, deserts, mountains, islands, cities.`,
          vocab: [
            { word: `adaptable`,      definition: `Able to LIVE in many conditions. Humans are very ADAPTABLE.`,
              audioPrompt: `Adaptable, {name}, means able to live in many conditions. Humans are very adaptable. More than almost any other creature. Polar bears need cold places. Tropical frogs need warm places. But humans? We've figured out how to live in cold places, hot places, dry places, wet places, mountains, deserts, even underwater for short times. Our minds and our communities are what make us so adaptable.` },
            { word: `survive`,        definition: `To STAY ALIVE. Humans SURVIVE in nearly every climate.`,
              audioPrompt: `To survive, {name}, is to stay alive. Humans survive in nearly every climate. From arctic ice to tropical jungles. We build shelters. We make warm clothes. We grow or hunt food. We help each other. Survival isn't just luck — it's the result of thousands of years of learning. Each generation passes survival skills down to the next.` },
            { word: `everywhere`,     definition: `In MANY PLACES. Humans live ALMOST EVERYWHERE on Earth.`,
              audioPrompt: `Everywhere, {name}, means in many places. Humans live almost everywhere on Earth. Some places have more people — like cities. Some have very few — like Antarctica or the deep desert. But humans have spread across nearly every continent. We're one of the most widespread species. That's part of what makes our species amazing.` },
          ],
        },

        {
          id: `l10-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Land + Climate = WHERE We Live`,
          paragraphs: [
            `WHERE people choose to live depends on the LAND and the CLIMATE.`,
            `People naturally settle where life is EASIER. Near FRESH WATER for drinking. With GOOD SOIL for growing food. With MILD WEATHER (not too cold, not too dry). With NATURAL RESOURCES (wood, fish, animals, plants). That's why MANY of the world's biggest cities are near RIVERS, COASTS, or in FERTILE VALLEYS. Few people live in deep deserts or on ice caps because it's HARD to survive there. People can live there — but it takes more work. The land and climate quietly guide where humans choose to settle. Geography shapes population.`,
          ],
          image: `/explorer-assets/social-studies/l10-s2-land-shapes-life.webp`,
          imageCaption: `People settle where life is easier — near fresh water, good soil, mild climate, natural resources.`,
          vocab: [
            { word: `settle`,         definition: `To MOVE somewhere and STAY. People SETTLE where it's easier to live.`,
              audioPrompt: `To settle, {name}, is to move somewhere and stay. People settle where it's easier to live. With water, food, and shelter, life is easier. Without those, life is hard. Throughout history, people have moved looking for better places to settle. Big cities grew where settling was easy. Empty regions usually have harsh conditions that made settling hard.` },
            { word: `fertile`,        definition: `Land where THINGS GROW WELL. FERTILE soil is great for farming.`,
              audioPrompt: `Fertile, {name}, means land where things grow well. Fertile soil is great for farming. Crops grow strong. Plants are healthy. Animals find food. Throughout history, people have settled in fertile places — like along the Nile River in Egypt, or the Tigris and Euphrates in the Middle East. Fertile land made civilization possible. Without it, large communities couldn't survive.` },
            { word: `resources`,      definition: `USEFUL THINGS from nature — water, wood, fish, soil, minerals.`,
              audioPrompt: `Resources, {name}, are useful things from nature. Water for drinking. Wood for building. Fish for eating. Good soil for farming. Minerals for tools. Animals for food and clothing. Without resources, people can't survive. The more resources a place has, the more people it can support. That's why fertile places with rivers and forests became big civilizations.` },
          ],
        },

        {
          id: `l10-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `FOOD Comes from Place`,
          paragraphs: [
            `One of the BEST examples of how place shapes life — FOOD.`,
            `What people eat depends on WHAT GROWS where they live. Near OCEANS — fish and seafood. In tropical places — bananas, mangoes, coconuts. In Asia — RICE grows easily, so rice is a main food there. In Italy — wheat grows, so pasta and bread are common. In Mexico — corn grows, so tortillas and tamales are popular. In cold places — root vegetables that store well through winter (potatoes, carrots). What you eat for dinner tonight has a story that goes back thousands of years — to what people first figured out grew in that place. Food is geography you can taste.`,
          ],
          image: `/explorer-assets/social-studies/l10-s3-food-from-place.webp`,
          imageCaption: `Food from place: ocean = fish, tropics = mangoes, Asia = rice, Italy = pasta, Mexico = corn.`,
          vocab: [
            { word: `food`,           definition: `What we EAT. FOOD comes from where people live.`,
              audioPrompt: `Food, {name}, is what we eat. Food comes from where people live. Different places grow different things. People eat what's available locally. Over thousands of years, every culture developed a way of eating that fits its land and climate. Trying food from another culture is like tasting a piece of that place. Food is geography you can taste.` },
            { word: `crop`,           definition: `A PLANT grown for food. Different CROPS grow well in different places.`,
              audioPrompt: `A crop, {name}, is a plant grown for food. Different crops grow well in different places. Rice grows in wet warm places. Wheat grows in mild temperate places. Corn likes warmer summers. Potatoes like cooler weather. Farmers know what crops grow best where they live. Crops are how humans turn land into food.` },
            { word: `local`,          definition: `From the PLACE you live. LOCAL food comes from nearby.`,
              audioPrompt: `Local, {name}, means from the place you live. Local food comes from nearby. Before modern shipping, all food was local — people only ate what grew near them. Today, food travels around the world. But local food is fresher, supports local farmers, and connects you to your place. Many people are returning to eating more local food.` },
          ],
        },

        {
          id: `l10-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `HOMES Are Built for the Place`,
          paragraphs: [
            `The PLACE also shapes the HOMES people build.`,
            `In COLD places — sturdy homes with THICK WALLS and small windows to keep heat in. STONE houses in the mountains. LOG cabins in the forests. In TROPICAL places — homes with OPEN windows for breeze. ROOFS made of palm leaves. STILTS to keep them above floods. In DESERTS — ADOBE houses (mud brick) that stay cool in heat. Small windows to block sun. In NORTHERN places — IGLOOS made of ice (used by some Arctic peoples) or wooden houses with steep roofs to shed snow. Every kind of home was DESIGNED — over many generations — to fit the place. Smart adaptation through architecture.`,
          ],
          image: `/explorer-assets/social-studies/l10-s4-homes-built.webp`,
          imageCaption: `Homes fit their places: stone in mountains, palm roofs in tropics, adobe in deserts, log in forests.`,
          vocab: [
            { word: `home`,           definition: `Where you LIVE. HOMES are built to fit the climate and land.`,
              audioPrompt: `A home, {name}, is where you live. Homes are built to fit the climate and land. Cold places need warm homes. Hot places need cool homes. Wet places need waterproof homes. Each kind of home has been designed over many generations. Builders learn what works best for their place — and pass that knowledge to the next generation.` },
            { word: `adobe`,          definition: `Houses made of MUD BRICK. ADOBE stays COOL in deserts.`,
              audioPrompt: `Adobe, {name}, is houses made of mud brick. Adobe is great for hot, dry places like deserts. The thick mud walls absorb heat during the day, keeping inside cool. At night, they slowly release the heat, keeping inside warm. Adobe houses have been built for thousands of years in places like Mexico, the southwestern US, and parts of Africa.` },
            { word: `architecture`,   definition: `The ART of BUILDING things. ARCHITECTURE is different in every place.`,
              audioPrompt: `Architecture, {name}, is the art of building things. Architecture is different in every place — and that's a beautiful thing. Each place developed its own building styles based on its climate, land, and culture. Traditional architecture is wisdom built into buildings. Modern architecture mixes old wisdom with new technology.` },
          ],
        },

        {
          id: `l10-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `CULTURES Are Shaped by Place`,
          paragraphs: [
            `Beyond food and homes — PLACE shapes whole CULTURES.`,
            `CULTURE is the WAY a group of people LIVE — their LANGUAGE, MUSIC, DANCE, FESTIVALS, STORIES, RELIGIONS, CLOTHING, and TRADITIONS. Places near OCEANS often have cultures of FISHING and SAILING. Mountain cultures often have songs about climbs and rugged independence. Desert cultures often have traditions of HOSPITALITY (welcoming travelers and sharing water). Cold-climate cultures often celebrate fire festivals to bring warmth. Tropical cultures often have rhythmic dance and colorful clothing. Each culture is BEAUTIFUL — and each one developed because of where the people lived. The diversity of cultures on Earth is one of humanity's greatest treasures.`,
          ],
          image: `/explorer-assets/social-studies/l10-s5-cultures-shaped.webp`,
          imageCaption: `Cultures shaped by place: ocean cultures fish, mountains sing songs of climbs, deserts welcome travelers.`,
          vocab: [
            { word: `culture`,        definition: `The WAY a group of people LIVE — language, music, food, traditions, festivals.`,
              audioPrompt: `Culture, {name}, is the way a group of people live. Their language, music, food, traditions, festivals, art, religion, and stories. Cultures developed over thousands of years. Each culture is connected to its place. Cultures are like beautiful fabrics — woven from many threads of place, history, and the human spirit. They're one of humanity's greatest treasures.` },
            { word: `tradition`,      definition: `Things people do the SAME WAY across GENERATIONS. TRADITIONS connect people to place.`,
              audioPrompt: `A tradition, {name}, is something people do the same way across generations. Traditions connect people to place. Like a special meal every holiday. A song sung at weddings. A festival every spring. Traditions are how cultures stay alive. They pass wisdom from old to young. They give people a sense of belonging. Every culture has rich traditions.` },
            { word: `diversity`,      definition: `MANY DIFFERENT KINDS together. The DIVERSITY of cultures on Earth is amazing.`,
              audioPrompt: `Diversity, {name}, means many different kinds together. The diversity of cultures on Earth is amazing. Thousands of languages. Thousands of musical styles. Thousands of foods. Thousands of dances. Thousands of stories. Diversity makes the world rich. It teaches us that there are many beautiful ways to be human. Learning about other cultures opens our minds.` },
          ],
        },

        {
          id: `l10-mag-6`,
          type: `magazine`,
          section: 6,
          headline: `We Belong to the EARTH`,
          paragraphs: [
            `Here's the BIG IDEA, {name}. We are all CONNECTED to the EARTH. We don't just live ON it — we live WITH it.`,
            `Every food you eat comes from soil, water, sunlight. Every home you've slept in was built from materials from the land. Every breath you take is air made partly by trees. Even YOUR culture — your family's traditions — were shaped by the land where your ancestors lived. We're part of nature. Not separate from it. The more we remember this, the more we take CARE of our Earth — for ourselves, for plants and animals, for future generations. People and places are deeply connected. You belong to Earth — and Earth belongs to you.`,
          ],
          image: `/explorer-assets/social-studies/l10-s6-we-belong.webp`,
          imageCaption: `We belong to Earth. We don't live ON it — we live WITH it. Food, homes, breath, culture — all from the land.`,
          vocab: [
            { word: `connected`,      definition: `LINKED together. People and places are deeply CONNECTED.`,
              audioPrompt: `Connected, {name}, means linked together. People and places are deeply connected. You're connected to the land that grew your food. To the trees making your air. To the place your culture comes from. You're not separate from nature. You're part of it. Remembering this connection helps us take care of the Earth we all share.` },
            { word: `belong`,         definition: `To be PART OF something. We BELONG to the Earth, and Earth belongs to us.`,
              audioPrompt: `To belong, {name}, is to be part of something. We belong to the Earth, and Earth belongs to us. Not in the sense of owning — but in the sense of being family. Earth is our home. Without Earth, no people. Without people, Earth is still beautiful — but we're meant to belong here together. Caring for Earth is caring for ourselves.` },
            { word: `take care`,      definition: `To PROTECT and PRESERVE. We must TAKE CARE of our Earth.`,
              audioPrompt: `To take care, {name}, is to protect and preserve. We must take care of our Earth. Recycle. Save water. Plant trees. Pick up litter. Save energy. Choose products that don't hurt the planet. Every small action adds up. The Earth has taken care of us for our whole lives. Now it's our turn to take care of it.` },
          ],
        },

        {
          id: `l10-game`,
          type: `interactive`,
          format: `drag-match`,
          guideText: `Let's see what you remember, {name}.`,
          buckets: [
            { id: `fact`, label: `✅ Yes, that's true!`, color: `#34D399` },
            { id: `myth`, label: `❌ No way!`,           color: `#F87171` },
          ],
          items: [
            { id: `l10-g1`, image: `l10-game-1.webp`, label: `PLACE shapes PEOPLE — their food, homes, clothes, and culture all fit where they live.`,
              matchPhrase: `Yes! Place shapes life. People adapt to their environment. Food, clothing, homes, traditions — all shaped by climate, landforms, and resources of the place.`,
              correctMatch: `fact` },
            { id: `l10-g2`, image: `l10-game-2.webp`, label: `Earth has MANY different CULTURES — beautiful diversity of languages, music, food, and traditions.`,
              matchPhrase: `True! Thousands of cultures across Earth. Each unique. Each beautiful. Each shaped by its place and history. The diversity of cultures is one of humanity's greatest treasures.`,
              correctMatch: `fact` },
            { id: `l10-g3`, image: `l10-game-3.webp`, label: `Everyone on Earth has EXACTLY THE SAME CULTURE — same food, clothes, homes, traditions everywhere.`,
              matchPhrase: `Not at all! There are thousands of cultures on Earth. Each developed differently based on place and history. Different foods, languages, music, festivals. The world's diversity is beautiful.`,
              correctMatch: `myth` },
            { id: `l10-g4`, image: `l10-game-4.webp`, label: `WHERE someone lives has ZERO effect on their life, clothes, or traditions.`,
              matchPhrase: `Definitely not! Place hugely shapes life. From food to homes to clothes to language to celebrations — where you live influences everything. People are deeply connected to their land.`,
              correctMatch: `myth` },
          ],
        },

        {
          id: `l10-quiz`,
          type: `quiz`,
          guideText: `Let's see what you remember, {name}.`,
          questions: [
            { id: `l10-q1`, format: `multiple-choice`,
              question: `Where do humans LIVE on Earth?`,
              options: [`Only in cities`, `Almost EVERYWHERE — rainforests, deserts, mountains, islands, cities, plains`, `Only one continent`, `Only in homes`],
              correctIndex: 1,
              explanation: `Humans live almost everywhere. About 8 billion of us spread across nearly every continent and climate. We're one of the most adaptable species — we figure out how to live in nearly any conditions.` },
            { id: `l10-q2`, format: `multiple-choice`,
              question: `Why do people SETTLE in specific places?`,
              options: [`Random`, `Where life is EASIER — water, soil, mild weather, resources`, `Only where it's hot`, `Just by accident`],
              correctIndex: 1,
              explanation: `People settle where life is easier. Near fresh water. With good soil. With mild weather. With natural resources. That's why most big cities are near rivers, coasts, or in fertile valleys.` },
            { id: `l10-q3`, format: `multiple-choice`,
              question: `How does PLACE shape FOOD?`,
              options: [`It doesn't`, `What GROWS in a place becomes the food of that culture — rice in Asia, corn in Mexico`, `Only adults pick food`, `Food just appears`],
              correctIndex: 1,
              explanation: `Place shapes food. People eat what grows where they live. Rice in Asia (it grows well there). Corn in Mexico. Pasta in Italy (wheat grows there). Food is geography you can taste.` },
            { id: `l10-q4`, format: `true-false`,
              question: `HOMES are built to fit the climate — adobe in deserts, log cabins in forests, igloos in Arctic.`,
              correctAnswer: true,
              explanation: `True! Homes are designed for their place. Adobe keeps cool in hot deserts. Log cabins are warm in cold forests. Igloos work for Arctic peoples. Each kind of home is wisdom built into buildings.` },
            { id: `l10-q5`, format: `fill-blank`,
              question: `___ is the way a group of people live — their language, music, food, traditions, and festivals.`,
              options: [`Culture`, `Cookies`, `Carrots`, `Cars`],
              correctIndex: 0,
              explanation: `Culture! The way a group of people live — their language, music, food, traditions. Each culture is shaped by its place and history. There are thousands of cultures on Earth.` },
            { id: `l10-q6`, format: `multiple-choice`,
              question: `What's the BIG IDEA of this lesson?`,
              options: [`Earth doesn't matter`, `PEOPLE and PLACES are deeply CONNECTED — we belong to Earth`, `Only some people matter`, `Nothing matters`],
              correctIndex: 1,
              explanation: `People and places are deeply connected. We don't live on Earth — we live WITH it. Our food, homes, clothes, and cultures all come from the land. We belong to Earth, and Earth belongs to us.` },
          ],
        },

        {
          id: `l10-realworld`,
          type: `real-world`,
          guideText: `Here's something beautiful, {name}. There are over 7,000 LANGUAGES spoken on Earth today. Over 4,000 different RELIGIONS. Thousands of unique cuisines. Thousands of musical traditions. Thousands of dances. Each one developed in a specific place — shaped by the land, the climate, the people. When you eat food from another culture, you taste their place. When you hear music from another culture, you hear their land. When you learn another language, you hear their history. Earth's incredible variety of places gave us this incredible variety of cultures. Protecting that diversity protects something irreplaceable.`,
          familyAdventure: `Together, plan a FAMILY CULTURE NIGHT. Pick a culture you'd like to learn about. Together: 1) Find that country on a globe or map. 2) Look up what landforms and climate are there. 3) Try a recipe from that culture. 4) Listen to music or watch a dance from there. 5) Learn a few words of the language. Notice how the food, music, and traditions all come from the LAND. Place shapes culture.`,
          creativePrompt: `Draw a picture of YOURSELF as a person of YOUR culture and place. Show: what you EAT, what your HOME looks like, what you WEAR, traditions your family does. Now look at your picture — every detail comes from where you live and your family's history. You are PART of your place. You belong to it. It belongs to you.`,
        },

        {
          id: `l10-celebration`,
          type: `celebration`,
          message: `Wonderful, {name}. You've completed the GEOGRAPHY block. You understand MAPS and GLOBES, the 7 CONTINENTS and 5 OCEANS, the LANDFORMS that shape Earth, and the CLIMATES that influence life. Now you know PEOPLE and PLACES are DEEPLY CONNECTED. Food, homes, clothes, cultures — all shaped by where people live. We belong to Earth — and Earth belongs to us. GEOGRAPHY BLOCK COMPLETE! Up next — Economics. See you there. — Atlas 🐻`,
          badge:     `people-places-explorer`,
          badgeName: `People and Places Explorer`,
          xpEarned:  50,
        },

      ],
    },
  ],
};

export default SOCIAL_STUDIES_L10;

// ─── Dev asset check ─────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const mags  = SOCIAL_STUDIES_L10.lessons[0].screens.filter(s => s.type === 'magazine').length;
  const game  = SOCIAL_STUDIES_L10.lessons[0].screens.find(s => s.type === 'interactive')?.items?.length ?? 0;
  const quiz  = SOCIAL_STUDIES_L10.lessons[0].screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  console.log(`[LESSON-SOCIAL-STUDIES-L10] Loaded: "People and Places" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
}
