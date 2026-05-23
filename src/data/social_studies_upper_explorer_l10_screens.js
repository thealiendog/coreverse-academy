// ─────────────────────────────────────────────────────────────────────────────
// SOCIAL STUDIES UE  |  L10 — Physical Geography and Climate
// Age band : upper_explorers (9–10)   Guide: atlas
// Standards: C3 D2.Geo.2.3-5 / D2.Geo.4.3-5 / D2.Geo.5.3-5
// CALIBRATED: UE spec v1.1 + game toolkit v1
// Game format: investigation (Climate Detective: where on Earth is this?)
// ─────────────────────────────────────────────────────────────────────────────

const SOCIAL_STUDIES_UE_L10 = {
  ageBand: `upper_explorers`,
  subjectId: `social_studies`,
  guide: `atlas`,

  lessons: [
    {
      id: `social-studies-9-10-10`,
      title: `Physical Geography and Climate`,
      duration: 22,
      xpReward: 75,
      badge: `climate-detective`,
      badgeName: `Climate Detective`,

      screens: [
        {
          id: `l10-welcome`,
          type: `welcome`,
          guideText: `Hey {name}. We're shifting gears again. The last lessons were about how humans organize ourselves — government, economies, money. Now we step outside and look at the PLANET we live on. Where on Earth do people live, and why? Why are some places deserts and others rainforests? Why is it freezing in some places and burning hot in others? Today we figure out the patterns. By the end, you'll be able to look at a place and predict what kind of climate it has.`,
          headline: `Physical Geography and Climate`,
          subtitle: `The patterns that shape where and how humans live`,
          visual: `/ue-assets/social-studies/l10-welcome.webp`,
        },

        {
          id: `l10-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Earth's Main Landforms`,
          paragraphs: [
            `Earth's surface comes in a few basic shapes, called landforms. Mountains rise up sharply from the surrounding land — like the Rockies, the Andes, the Himalayas. Plains are large flat areas, often great for farming — like the American Great Plains or the steppes of Eurasia. Plateaus are flat areas that sit high above the surrounding land — like the Tibetan Plateau or the Colorado Plateau.`,
            `Then there are valleys — low areas usually carved by rivers or glaciers. Deserts are areas with very little rainfall, often hot but sometimes cold (the Gobi Desert in Mongolia gets freezing in winter). Forests are areas dominated by trees, ranging from rainforests near the equator to boreal forests near the Arctic.`,
            `These landforms aren't random. They came from real processes over millions of years — colliding tectonic plates lifted up mountain ranges, rivers carved out valleys, glaciers scraped the land flat. When you look at a map, you're seeing the result of forces that have been at work since long before humans existed.`,
          ],
          image: `/ue-assets/social-studies/l10-s1-landforms.webp`,
          imageCaption: `Mountains. Plains. Plateaus. Valleys. Deserts. Forests. The basic shapes of Earth.`,
          vocab: [
            { word: `landform`,
              definition: `A natural feature of Earth's surface — mountain, plain, plateau, valley, etc.`,
              audioPrompt: `A landform is a natural feature of Earth's surface, {name}. Mountains, plains, plateaus, valleys, hills, canyons — these are all landforms. They were shaped by powerful processes — moving tectonic plates, flowing rivers, melting glaciers, volcanic activity, wind erosion. Landforms aren't random. Every mountain range, every river valley, every plain has a story going back millions of years. Reading the landform of a place tells you about both its past and the kind of life that grows there now.` },
            { word: `plateau`,
              definition: `A flat area of high ground that sits elevated above the surrounding landscape.`,
              audioPrompt: `A plateau is a flat area that sits high above the surrounding land, {name}. The Tibetan Plateau is the largest in the world — so high and flat it's called "the roof of the world." The Colorado Plateau in the American Southwest was carved into the Grand Canyon as rivers cut through it over millions of years. Plateaus form when land is pushed up by tectonic forces or when everything around them erodes away. The flat-but-elevated combination makes them different from both mountains and plains.` },
          ],
        },

        {
          id: `l10-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `What Determines Climate`,
          paragraphs: [
            `Climate is the long-term pattern of weather in a place — usually measured over decades or longer. Weather is what's happening today; climate is what tends to happen across years. Climate determines what plants grow, what animals live there, and what humans can do with the land.`,
            `The biggest factor in climate is LATITUDE — how close you are to the equator. Places near the equator get the sun most directly all year, so they're hot. Places near the poles get the sun at a steep angle, so they're cold. This single fact explains roughly 70 percent of climate patterns on Earth.`,
            `Other factors layer on top. Altitude matters — higher places are colder. Proximity to oceans matters — coastal places have milder weather than interior places. Mountains block storms and create dry areas on their other side, called rain shadows. Ocean currents carry warm or cold water for thousands of miles, changing the climate of nearby coasts. Put all these together, and you can predict the climate of almost any place on Earth.`,
          ],
          image: `/ue-assets/social-studies/l10-s2-climate-factors.webp`,
          imageCaption: `Latitude is the big one. Altitude, oceans, mountains, currents — all add up.`,
          vocab: [
            { word: `climate`,
              definition: `The long-term pattern of weather in a place, measured over decades or longer.`,
              audioPrompt: `Climate is the long-term pattern of weather, {name}. Weather is "today's rain" — climate is "this region gets about 30 inches of rain a year, mostly in summer, and stays warm year-round." Climate determines what plants and animals live in a place and what humans can grow there. Major factors that determine climate include latitude (how far from the equator), altitude (how high up), proximity to oceans, and major wind patterns. Climate also changes over centuries and millennia — and right now, faster than that.` },
            { word: `latitude`,
              definition: `How far north or south of the equator a place is, measured in degrees.`,
              audioPrompt: `Latitude is how far north or south of the equator a place is, {name}. The equator is zero degrees. The North Pole is 90 degrees north. The South Pole is 90 degrees south. Latitude is the biggest single factor in determining a place's climate. Places near the equator get direct sun all year and are hot. Places near the poles get sun at a steep angle and are cold. Most major climate patterns trace back to latitude.` },
          ],
        },

        {
          id: `l10-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Major Climate Zones`,
          paragraphs: [
            `Geographers have grouped Earth's climates into a few major zones. Each one has a recognizable mix of temperature, rainfall, and seasons.`,
            `Tropical zones are near the equator. They're hot all year and often very wet — think Amazon rainforest, Congo, Indonesia. Some tropical areas have a wet season and a dry season instead of constant rain. Arid zones — deserts and semi-deserts — get less than 10 inches of rain a year. They can be hot like the Sahara or cold like the Gobi. Places like Phoenix, Cairo, and Lima all sit in arid zones.`,
            `Temperate zones are the middle latitudes — the eastern US, most of Europe, parts of China and Japan, parts of southern Australia. They have four real seasons and moderate weather. Most of the world's people live in temperate zones because the conditions are good for farming. Polar zones are near the Arctic and Antarctic. They're cold all year, with long dark winters and brief summers. Very few humans live in polar zones, and the ones who do have adapted brilliantly.`,
          ],
          image: `/ue-assets/social-studies/l10-s3-climate-zones.webp`,
          imageCaption: `Tropical. Arid. Temperate. Polar. The Earth's main climate types.`,
          vocab: [
            { word: `tropical climate`,
              definition: `A hot, often wet climate found near the equator, with little seasonal change in temperature.`,
              audioPrompt: `Tropical climate is the warm, often very wet climate found near the equator, {name}. Places like the Amazon rainforest, Congo, Indonesia, and many Pacific islands have tropical climates. Temperatures stay warm year-round — there's no real winter. Some tropical regions have rain almost every day. Others have a clear wet season and dry season. Tropical climates support the most biodiversity on Earth, including most species of plants, animals, and insects.` },
            { word: `arid climate`,
              definition: `A dry climate where there's very little rainfall — usually under 10 inches a year.`,
              audioPrompt: `Arid climate means very dry, {name} — places that get less than ten inches of rain per year. Arid climates include hot deserts like the Sahara and Mojave, and cold deserts like the Gobi in Mongolia. Plants and animals in arid zones have remarkable adaptations — cacti that store water, lizards that get all their moisture from the food they eat, mammals that don't need to drink water for weeks. Humans have lived in arid zones for thousands of years but in much smaller numbers than in temperate places.` },
          ],
        },

        {
          id: `l10-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Why It All Matters`,
          paragraphs: [
            `Climate and geography don't just decide where it's hot or cold. They've shaped almost everything about human history. The great early civilizations all rose in river valleys with rich farmland — the Nile, the Tigris and Euphrates, the Indus, the Yangtze. Why? Those places had water, fertile soil, and reliable seasons.`,
            `Mountain ranges separate cultures by making travel hard. The Himalayas separated Indian and Chinese civilizations for thousands of years. The Alps shaped European politics for centuries. Deserts work the same way — the Sahara separated North African civilizations from the rest of Africa.`,
            `Climate change — both ancient and modern — has reshaped human societies many times. Long droughts have ended civilizations. Wetter periods have allowed cities to grow. Today, climate change driven by human activity is shifting climate zones again, and it will affect where people can live, grow food, and prosper. Understanding geography is part of understanding why the world looks the way it does today.`,
          ],
          image: `/ue-assets/social-studies/l10-s4-geography-history.webp`,
          imageCaption: `Geography shapes history. It always has.`,
          vocab: [
            { word: `biome`,
              definition: `A large region of Earth with a particular climate, plants, and animals — like a tropical rainforest or a desert.`,
              audioPrompt: `A biome is a large region of Earth defined by its climate, plants, and animals, {name}. Tropical rainforest is a biome. Desert is a biome. Grassland is a biome. Tundra is a biome. Each biome has plants and animals adapted to its specific conditions. Most species that live in one biome can't survive in another — that's why polar bears live in the Arctic but not the Sahara, and palm trees grow in tropics but not tundra. Biomes are one of the biggest patterns shaping life on Earth.` },
            { word: `temperate climate`,
              definition: `A climate with four distinct seasons and moderate weather, found in middle latitudes.`,
              audioPrompt: `Temperate climate means moderate — not too hot, not too cold, with four real seasons, {name}. Most of the eastern United States, Europe, and parts of East Asia have temperate climates. Temperate zones are where most of the world's population lives because the conditions are good for farming. Winters can be cold and snowy. Summers can be warm. The extremes are more moderate than in tropical or polar zones. Temperate climates are reliable enough to support dense populations and large cities.` },
          ],
        },

        // ── INVESTIGATION GAME — Climate Detective ─────────────────────────────
        {
          id: `l10-game`,
          type: `interactive`,
          format: `investigation`,
          guideText: `Climate Detective time, {name}. I'll give you four mystery places. For each one, you'll see clues about its climate and geography. You decide which type of climate zone it has — based on the evidence. Then I'll reveal where it actually is.`,
          options: [
            { id: `tropical`,  label: `Tropical`,  color: `#34D399`, description: `Hot and often wet year-round, near the equator.` },
            { id: `arid`,      label: `Arid`,      color: `#FBBF24`, description: `Very dry, low rainfall — desert or semi-desert.` },
            { id: `temperate`, label: `Temperate`, color: `#A78BFA`, description: `Four real seasons, moderate weather.` },
            { id: `polar`,     label: `Polar`,     color: `#0EA5E9`, description: `Cold all year, long dark winters, brief summer.` },
          ],
          cases: [
            {
              id: `case-1`,
              caseTitle: `Mystery Place #1`,
              clues: [
                { text: `It rains almost every day, sometimes for hours. The air is thick and humid.` },
                { text: `Temperatures stay between 75 and 90 degrees Fahrenheit all year. There's no winter.` },
                { text: `Massive trees rise over 150 feet high. Bright birds, monkeys, and millions of insects live in their branches.` },
              ],
              correctAnswer: `tropical`,
              realWorldExample: `This is the Amazon rainforest, in places like Brazil, Peru, and Colombia.`,
              explanation: `Tropical. Hot, very wet, no real seasons, and packed with biodiversity — that's the textbook tropical rainforest profile. The Amazon, Congo, and Southeast Asian rainforests all fit it.`,
            },
            {
              id: `case-2`,
              caseTitle: `Mystery Place #2`,
              clues: [
                { text: `It gets less than 4 inches of rain per year. Some years, there's no rain at all.` },
                { text: `Summer temperatures hit 120 degrees Fahrenheit. Winter nights can drop below freezing.` },
                { text: `Sand dunes stretch as far as the eye can see, with occasional camels and date palms near rare water sources.` },
              ],
              correctAnswer: `arid`,
              realWorldExample: `This is the Sahara Desert, covering most of North Africa.`,
              explanation: `Arid. Extremely low rainfall, dramatic temperature swings between day and night, and sand dunes — classic hot desert profile. The Sahara, Arabian Desert, and Sonoran Desert all share these features.`,
            },
            {
              id: `case-3`,
              caseTitle: `Mystery Place #3`,
              clues: [
                { text: `Winters get snowy and cold. Summers are warm and green. Spring is full of flowers, fall is full of colored leaves.` },
                { text: `The same farms grow corn, soybeans, and wheat — three reliable seasons of growth.` },
                { text: `Most major cities in this region have populations between half a million and 3 million people.` },
              ],
              correctAnswer: `temperate`,
              realWorldExample: `This describes the US Midwest — Iowa, Illinois, Indiana, Ohio, and surrounding states.`,
              explanation: `Temperate. Four real seasons, reliable farming, and big population centers — the temperate zone is where most of the world's people live. Most of the eastern US, much of Europe, and parts of China and Japan fit this pattern.`,
            },
            {
              id: `case-4`,
              caseTitle: `Mystery Place #4 — The Tricky One`,
              clues: [
                { text: `For 11 weeks every winter, the sun never rises above the horizon. The sky stays dark all day.` },
                { text: `Temperatures average minus 30 degrees Fahrenheit in winter. Summer briefly warms to about 50 degrees.` },
                { text: `Indigenous people have hunted, fished, and lived here for thousands of years using deep knowledge of ice, snow, and seasonal change.` },
              ],
              correctAnswer: `polar`,
              realWorldExample: `This describes parts of northern Greenland or Northern Alaska, where Inuit communities have lived for thousands of years.`,
              explanation: `Polar. Extreme cold, long dark winters with brief summers, and incredibly adapted human cultures. Polar zones are some of the hardest places on Earth to survive — and the people who do have built remarkable ways of life.`,
            },
          ],
        },

        {
          id: `l10-quiz`,
          type: `quiz`,
          guideText: `Quick test, {name}.`,
          questions: [
            { id: `l10-q1`, format: `multiple-choice`,
              question: `What's the difference between weather and climate?`,
              options: [
                `They mean the same thing`,
                `Weather is what's happening today; climate is the long-term pattern across years`,
                `Weather is colder; climate is warmer`,
                `Weather happens only at night`,
              ],
              correctIndex: 1,
              explanation: `Weather is what's happening today (it's raining, it's sunny). Climate is the long-term pattern (this place tends to be hot and wet year-round). One is short-term, the other is long-term.` },
            { id: `l10-q2`, format: `multiple-choice`,
              question: `What's the single biggest factor that determines a place's climate?`,
              options: [
                `What time it is`,
                `Latitude — how close to the equator the place is`,
                `What month it is`,
                `Whether it has trees`,
              ],
              correctIndex: 1,
              explanation: `Latitude is the biggest factor. Near the equator, the sun hits directly all year — hot. Near the poles, the sun hits at an angle — cold. This single fact explains most major climate patterns.` },
            { id: `l10-q3`, format: `multiple-choice`,
              question: `Which biome would you find near the equator with high rainfall?`,
              options: [
                `Desert`,
                `Tropical rainforest`,
                `Tundra`,
                `Boreal forest`,
              ],
              correctIndex: 1,
              explanation: `Tropical rainforests grow in hot, wet equatorial regions — the Amazon, Congo, and Southeast Asia. Their warmth and rainfall support more species than anywhere else on Earth.` },
            { id: `l10-q4`, format: `multiple-choice`,
              question: `Why do early civilizations almost always start in river valleys?`,
              options: [
                `The rivers had treasure`,
                `River valleys had water, fertile soil, and reliable seasons — perfect for farming and supporting big populations`,
                `Rivers are pretty`,
                `It was random`,
              ],
              correctIndex: 1,
              explanation: `Rivers provided water, fertile soil from yearly floods, and routes for travel and trade. The Nile, Tigris, Euphrates, Indus, and Yangtze all became cradles of civilization for these reasons.` },
            { id: `l10-q5`, format: `true-false`,
              question: `True or false: Mountain ranges have historically helped separate cultures from each other.`,
              correctAnswer: true,
              explanation: `True. Mountains make travel hard, which means cultures on opposite sides develop separately. The Himalayas kept India and China apart for thousands of years. The Alps shaped European politics. Mountains are physical barriers that become cultural ones.` },
            { id: `l10-q6`, format: `multiple-choice`,
              question: `An arid biome is one with:`,
              options: [
                `Constant rain`,
                `Very little rainfall — usually under 10 inches a year`,
                `Heavy snow`,
                `Volcanoes`,
              ],
              correctIndex: 1,
              explanation: `Arid biomes are dry — under 10 inches of rain per year. They can be hot (Sahara) or cold (Gobi). Plants and animals there have remarkable adaptations to survive on tiny amounts of water.` },
            { id: `l10-q7`, format: `multiple-choice`,
              question: `Which climate zone does most of the world's population live in?`,
              options: [
                `Tropical`,
                `Temperate`,
                `Arid`,
                `Polar`,
              ],
              correctIndex: 1,
              explanation: `Temperate. Four seasons, moderate weather, and good farming conditions make temperate zones the most heavily populated. Most of Europe, the eastern US, much of China, and parts of South America are temperate.` },
            { id: `l10-q8`, format: `multiple-choice`,
              question: `What's a biome?`,
              options: [
                `A type of plant`,
                `A large region of Earth defined by its climate, plants, and animals`,
                `A weather forecast`,
                `A tool for measuring temperature`,
              ],
              correctIndex: 1,
              explanation: `A biome is a large region with a distinct climate, plants, and animals. Rainforest, desert, tundra, grassland — all biomes. Most species are adapted to one biome and can't survive in others.` },
          ],
        },

        {
          id: `l10-reflection`,
          type: `reflection`,
          guideText: `Pick a prompt, {name}.`,
          prompts: [
            { id: `r1`, text: `What biome do you live in? What plants and animals are typical?` },
            { id: `r2`, text: `Which biome would you most want to visit, and why?` },
            { id: `r3`, text: `Which biome would be hardest for humans to live in, in your opinion?` },
            { id: `r4`, text: `How might climate change affect the biome where you live?` },
          ],
        },

        {
          id: `l10-realworld`,
          type: `real-world`,
          guideText: `Right now, every climate zone on Earth is shifting. Tropical zones are creeping toward the poles. Deserts are expanding in some places, shrinking in others. Polar ice that took tens of thousands of years to form is melting in decades. These changes affect what plants grow, where animals can live, where humans can farm, and where coastal cities might flood. Geography isn't just a school subject — it's the planet's story, written in temperature, rainfall, and time.`,
          familyAdventure: `Together, look up the climate of three places: where you live, the most distant place you can think of, and your favorite vacation spot you've ever been or always wanted to go. For each, find: typical temperature in summer and winter, typical rainfall, and biome. Talk about what surprised you. Which place would be easiest to live in? Which would be hardest?`,
          creativePrompt: {
            intro: `Imagine you're choosing where humans will build their first permanent colony on a newly-discovered Earth-like planet. Different regions have different climates. Describe the place you'd pick and why.`,
            floor: `Write at least 5 sentences. Use the sentence starters if helpful.`,
            stretch: `Write 8-10 sentences. Describe the climate, the geography, the resources, and the tradeoffs of your choice.`,
            open: `Write as much as you want. Found your colony on a new world.`,
            frames: [
              `The climate zone I'd pick is ___.`,
              `The geography of the place includes ___.`,
              `I chose this because ___.`,
              `One challenge of this location is ___.`,
              `How my colony would adapt to that challenge is ___.`,
            ],
          },
        },

        {
          id: `l10-celebration`,
          type: `celebration`,
          message: `Solid, {name}. You can now name Earth's main landforms, define climate and explain what determines it, identify the major climate zones, and read environmental clues like a real geographer. Next lesson we look at HUMANS on Earth — where people live, how they move, and why. — Atlas.`,
          badge: `climate-detective`,
          badgeName: `Climate Detective`,
          xpEarned: 75,
        },
      ],
    },
  ],
};

export default SOCIAL_STUDIES_UE_L10;
