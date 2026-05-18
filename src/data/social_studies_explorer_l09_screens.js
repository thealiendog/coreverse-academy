// ─────────────────────────────────────────────────────────────────────────────
// SOCIAL STUDIES  |  L09 — Weather and Climate Regions
// Age band : explorers (6–8)   Guide: atlas
// Standards: C3 Framework D2.Geo.4.K-2 (human-environment interaction)
// ─────────────────────────────────────────────────────────────────────────────

const SOCIAL_STUDIES_L09 = {
  ageBand:   `explorers`,
  subjectId: `social_studies`,
  guide:     `atlas`,

  lessons: [
    {
      id:        `social-studies-6-8-09`,
      title:     `Weather and Climate Regions`,
      duration:  12,
      xpReward:  50,
      badge:     `weather-climate-explorer`,
      badgeName: `Weather and Climate Explorer`,

      screens: [

        {
          id: `l09-welcome`,
          type: `welcome`,
          guideText: `Hi, {name}. Atlas here. You've explored continents, oceans, and landforms. Today we explore something that shapes HOW LIFE FEELS in each place — WEATHER and CLIMATE. Weather is what's happening OUTSIDE TODAY. Climate is what an area is USUALLY LIKE over many years. Different parts of Earth have VERY different climates — tropical, temperate, polar, dry. Let's find out why.`,
          headline: `Weather and Climate Regions`,
          subtitle: `What's happening in the sky — and what it means for how we live`,
          visual: `/explorer-assets/social-studies/l09-welcome.webp`,
        },

        {
          id: `l09-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `WEATHER: What's the Sky Doing?`,
          paragraphs: [
            `Look outside. Is it SUNNY? RAINY? WINDY? SNOWY? That's WEATHER.`,
            `Weather is what the AIR is doing right now — or today. It includes TEMPERATURE (hot or cold), PRECIPITATION (rain or snow or hail), WIND (still or blowing), and CLOUDS (sunny or overcast). Weather CHANGES all the time. Yesterday was sunny. Today is rainy. Tomorrow might be windy. Meteorologists — weather scientists — watch the sky and use tools to FORECAST weather. They tell you whether to bring an umbrella today. Weather affects what we WEAR, what we EAT, and what we DO each day. Paying attention to weather is an ancient human skill.`,
          ],
          image: `/explorer-assets/social-studies/l09-s1-weather.webp`,
          imageCaption: `Weather = what's happening in the sky today. Temperature, rain, wind, clouds. Changes often.`,
          vocab: [
            { word: `weather`,        definition: `What the AIR is doing TODAY. Sunny, rainy, snowy, windy — all WEATHER.`,
              audioPrompt: `Weather, {name}, is what the air is doing today — or right now. Is it hot or cold? Raining or sunny? Windy or still? Cloudy or clear? Weather changes from day to day. One day it rains. The next it's sunny. That's what makes it weather — it shifts. Meteorologists study weather to make forecasts. Knowing the weather helps us plan our days and stay safe.` },
            { word: `temperature`,    definition: `How HOT or COLD the air is. Temperature CHANGES with weather.`,
              audioPrompt: `Temperature, {name}, is how hot or cold the air is. We measure it with a thermometer — in degrees. High temperature means warm or hot. Low temperature means cool or cold. Temperature changes with the weather. It changes with the seasons. And it changes depending on WHERE you are on Earth. Near the equator it's usually warm. Near the poles it's usually cold.` },
            { word: `precipitation`,  definition: `Water falling from the sky — RAIN, SNOW, HAIL, or SLEET.`,
              audioPrompt: `Precipitation, {name}, is water falling from the sky. Rain is liquid water. Snow is frozen. Hail is balls of ice. Sleet is a mix. All precipitation starts as water vapor that condenses in clouds and gets heavy enough to fall. Precipitation is how Earth gets fresh water. Farmers need it. Rivers and lakes need it. Life needs it. Different places get very different amounts.` },
          ],
        },

        {
          id: `l09-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `WEATHER vs CLIMATE: What's the Difference?`,
          paragraphs: [
            `WEATHER is what's happening TODAY. CLIMATE is what an area is USUALLY LIKE over many years.`,
            `Think of it this way: weather is your MOOD today. Climate is your PERSONALITY. If someone says "I wore a coat today in Miami" — that's weather. If someone says "Miami is usually warm year-round" — that's climate. Climate tells us the PATTERN for a place over a LONG time. Scientists study climate by recording weather day after day, year after year, for DECADES. Then they can say — this area has a TROPICAL climate (hot and wet), or a POLAR climate (very cold and snowy), or a DESERT climate (hot and dry). Climate helps people plan what crops to grow, what clothes to own, and how to BUILD their homes.`,
          ],
          image: `/explorer-assets/social-studies/l09-s2-weather-vs-climate.webp`,
          imageCaption: `Weather = today. Climate = usual pattern over many years. Very different ideas!`,
          vocab: [
            { word: `climate`,        definition: `The USUAL weather of a place over MANY YEARS. Not just today — over a long time.`,
              audioPrompt: `Climate, {name}, is the usual weather of a place over many years. Not just today or this week — over decades. Scientists measure climate by tracking weather patterns year after year. Then they can describe a place's climate. Is it usually hot and wet? Cold and snowy? Warm and rainy? Dry and dusty? Climate shapes what plants grow there, what animals live there, and how people build their homes.` },
            { word: `pattern`,        definition: `Something that happens the SAME WAY over and over. Climate is a weather PATTERN.`,
              audioPrompt: `A pattern, {name}, is something that happens the same way over and over. Climate is a weather pattern. In the Amazon, it rains almost every day — that's a pattern. In Antarctica, it's always cold — that's a pattern. In California, it's usually mild and dry in summer — that's a pattern. Patterns help us predict what to expect. Climate patterns help people plan their whole way of life.` },
            { word: `decades`,        definition: `TEN YEARS. Scientists study weather for DECADES to understand climate.`,
              audioPrompt: `A decade, {name}, is ten years. Scientists study weather for decades — thirty, forty, fifty years — to understand climate. One unusual winter doesn't change climate. But if winters keep getting warmer for twenty years, that's a climate change. Looking at long patterns takes patience. Climate scientists are careful — they need lots of data before they draw conclusions.` },
          ],
        },

        {
          id: `l09-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `TROPICAL Climate: Hot and Wet`,
          paragraphs: [
            `Earth has several big CLIMATE REGIONS. Let's explore them. First — TROPICAL.`,
            `TROPICAL climates are near the EQUATOR — the middle band of Earth. They're HOT and WET all year round. Rain forests like the AMAZON (South America) and CONGO (Africa) are tropical. It rains almost EVERY DAY. Plants grow incredibly FAST. Animals are incredibly DIVERSE — more species live in tropical forests than anywhere else on Earth. People in tropical climates eat tropical fruits, wear light clothing, and build homes to stay cool and keep rain out. Tropical oceans are WARM — they have coral reefs full of colorful fish. The equator gets the MOST DIRECT sunlight, which is why it's so warm.`,
          ],
          image: `/explorer-assets/social-studies/l09-s3-tropical.webp`,
          imageCaption: `Tropical climate: near the equator. Hot and wet year-round. Rainforests, coral reefs, huge variety of life.`,
          vocab: [
            { word: `tropical`,       definition: `A CLIMATE near the EQUATOR that is HOT and WET all year. Rainforests are tropical.`,
              audioPrompt: `Tropical, {name}, describes a climate near the equator — the middle belt of Earth. Tropical means hot and wet all year round. It rains a lot. Plants grow very fast. More species of animals and plants live in tropical places than anywhere else. The Amazon and Congo rainforests are tropical. The ocean near the equator is warm and full of coral reefs and colorful fish.` },
            { word: `equator`,        definition: `The MIDDLE LINE of Earth. Places on the equator are HOT all year.`,
              audioPrompt: `The equator, {name}, is an imaginary line around the middle of Earth, halfway between the North Pole and South Pole. Places on the equator get direct sunlight all year — that's why they're hot. Countries near the equator include Brazil, Kenya, Indonesia, Colombia. They have tropical climates. The further you get from the equator, the cooler the climate tends to be.` },
            { word: `rainforest`,     definition: `A THICK FOREST in a tropical area with LOTS of rain and many animals.`,
              audioPrompt: `A rainforest, {name}, is a thick, lush forest in a tropical area. It gets lots of rain — sometimes every single day. The Amazon in South America is the world's biggest rainforest. The Congo in Africa is second. Rainforests are full of incredible diversity — millions of species of insects, birds, frogs, mammals, and plants. Rainforests also clean the air for the whole planet.` },
          ],
        },

        {
          id: `l09-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `TEMPERATE Climate: Four Seasons`,
          paragraphs: [
            `The next climate region is TEMPERATE — and it's probably the one you know best.`,
            `TEMPERATE climates have FOUR SEASONS: spring, summer, fall (autumn), and winter. Summers are WARM. Winters are COLD but not extreme. Most of Europe, the US, China, and parts of South America have temperate climates. Temperate regions have RELIABLE rain spread through the year — great for farming. That's why many of the world's biggest FOOD-GROWING regions are temperate. People in temperate climates own COATS for winter and SHORT SLEEVES for summer. They watch the seasons CHANGE beautifully — flowers in spring, heat in summer, leaves turning colors in fall, snow in winter. Temperate is wonderfully VARIED.`,
          ],
          image: `/explorer-assets/social-studies/l09-s4-temperate.webp`,
          imageCaption: `Temperate climate: four seasons. Spring, summer, fall, winter. Most of Europe, US, and China.`,
          vocab: [
            { word: `temperate`,      definition: `A CLIMATE with FOUR SEASONS — not too hot, not too cold. Most of US and Europe.`,
              audioPrompt: `Temperate, {name}, describes a climate with four seasons — spring, summer, fall, and winter. Not too hot all year like tropical. Not too cold all year like polar. Temperate areas have mild variation. Most of the United States, Europe, and much of China have temperate climates. They get reliable rain, good growing seasons, and beautiful seasonal changes.` },
            { word: `seasons`,        definition: `The FOUR PARTS of a year — spring, summer, fall (autumn), winter.`,
              audioPrompt: `Seasons, {name}, are the four parts of a year — spring, summer, fall or autumn, and winter. Each brings different weather and daylight. Spring is mild and plants bloom. Summer is warm and sunny. Fall is cooling with leaves changing colors. Winter is cold and sometimes snowy. Seasons happen because Earth tilts on its axis as it orbits the sun — different parts get more or less sun at different times of year.` },
            { word: `reliable`,       definition: `Something you can DEPEND ON to happen regularly. Temperate climates have RELIABLE rain.`,
              audioPrompt: `Reliable, {name}, means something you can depend on to happen regularly. Temperate climates have reliable rain — it rains regularly throughout the year, not just in one season. That reliability is great for farming. Farmers can plan when to plant and harvest. Crops grow well when rain is steady and predictable. Reliability in weather helps communities plan food production.` },
          ],
        },

        {
          id: `l09-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `POLAR and DRY: Extreme Climates`,
          paragraphs: [
            `Two more climate types — and they're EXTREME. POLAR (very cold) and DRY (desert climate).`,
            `POLAR climates are near the NORTH and SOUTH POLES. They're VERY COLD — Antarctica can reach minus 130 degrees Fahrenheit! Snow and ICE cover the land year-round. The Arctic (north) and Antarctica (south) are polar regions. Very few people live there — it takes extreme planning and equipment. Penguins love Antarctica. Polar bears love the Arctic. The DRY climate (desert) is very HOT and DRY — little rain. The SAHARA in Africa, the ARABIAN DESERT, and the GOBI in Asia are dry climates. People in deserts learned to find water, use shade, and travel during cooler hours. Both polar and desert climates ask people to be CREATIVE and TOUGH to survive.`,
          ],
          image: `/explorer-assets/social-studies/l09-s5-polar-dry.webp`,
          imageCaption: `Polar: near the poles, very cold, ice and snow. Dry/desert: very hot, little rain, special survival skills.`,
          vocab: [
            { word: `polar`,          definition: `A CLIMATE near the POLES that is VERY COLD with ice and snow all year.`,
              audioPrompt: `Polar, {name}, describes a climate near the North or South Pole. Very, very cold — all year. The land is covered in ice and snow. Antarctica is the coldest place on Earth. The Arctic in the north is also very cold. Very few people live in polar regions — it takes special equipment and planning. But amazing animals like polar bears and penguins are perfectly adapted to polar life.` },
            { word: `Antarctica`,     definition: `The SOUTHERNMOST continent. COLDEST and DRIEST place on Earth.`,
              audioPrompt: `Antarctica, {name}, is the southernmost continent — at the very bottom of Earth. It's the coldest and driest place on Earth. It can reach minus 130 degrees Fahrenheit. It's covered in ice sheets — the biggest in the world. No country owns it. Scientists from many nations study it. Penguins and seals live on its coasts. No trees grow there — it's too cold.` },
            { word: `extreme`,        definition: `Very far from normal — VERY hot, VERY cold, VERY dry. Polar and desert climates are EXTREME.`,
              audioPrompt: `Extreme, {name}, means very far from normal — very hot, very cold, or very dry. Polar climates are extreme — way too cold for most life. Desert climates are extreme — way too dry for most life. But life finds a way even in extreme places. Polar bears thrive in the cold. Cactuses thrive in the heat. Humans thrive too — when we're creative and adaptable.` },
          ],
        },

        {
          id: `l09-mag-6`,
          type: `magazine`,
          section: 6,
          headline: `Climate SHAPES How We Live`,
          paragraphs: [
            `Here's the BIG IDEA: CLIMATE shapes EVERYTHING about how humans live in a place.`,
            `What we EAT: tropical people eat mangoes and fish. Temperate people eat apples and wheat. Desert people eat dates and goat meat. What we WEAR: polar people need heavy furs and layers. Tropical people wear light cotton. What our HOMES look like: Arctic homes are insulated. Tropical homes have big open windows. Desert homes have thick walls to keep cool. What WORK we do: farming, fishing, herding — all depend on climate. Even CULTURE is shaped by climate — festivals, holidays, stories all often connect to seasons. We are DEEPLY CONNECTED to the climate of our home. Changes in climate mean changes in how people live.`,
          ],
          image: `/explorer-assets/social-studies/l09-s6-climate-shapes-life.webp`,
          imageCaption: `Climate shapes food, clothes, homes, work, and culture. We're deeply connected to our climate.`,
          vocab: [
            { word: `adapt`,          definition: `To CHANGE to fit a new situation. Humans ADAPT their lives to their climate.`,
              audioPrompt: `Adapt, {name}, means to change to fit a new situation. Humans are incredibly good at adapting to different climates. In the Arctic, people learned to build homes from ice called igloos. In the desert, people learned to find water in cacti and travel at night to avoid heat. In the tropics, people learned to build homes on stilts above floodwaters. Adapting is a key human skill.` },
            { word: `culture`,        definition: `The way of life of a COMMUNITY — food, festivals, stories, music. CLIMATE shapes culture.`,
              audioPrompt: `Culture, {name}, is the way of life of a community — their food, festivals, stories, music, traditions, clothing. Climate shapes culture deeply. Harvest festivals celebrate when crops come in. Winter holidays light up the dark cold season. Coastal cultures have fishing traditions. Mountain cultures have hiking and herding traditions. The climate of a place leaves its fingerprints on everything the people there do.` },
            { word: `climate region`, definition: `An AREA of Earth with a SIMILAR CLIMATE — tropical, temperate, polar, or dry.`,
              audioPrompt: `A climate region, {name}, is an area of Earth with a similar climate. Tropical climate regions are hot and wet — near the equator. Temperate climate regions have four seasons. Polar regions are very cold. Dry or desert regions have little rain. Each region has its own plants, animals, and human cultures shaped by that climate. Learning climate regions helps us understand the whole Earth.` },
          ],
        },

        {
          id: `l09-game`,
          type: `interactive`,
          format: `drag-match`,
          guideText: `Let's see what you remember, {name}.`,
          buckets: [
            { id: `fact`, label: `✅ Yes, that's true!`, color: `#34D399` },
            { id: `myth`, label: `❌ No way!`,           color: `#F87171` },
          ],
          items: [
            { id: `l09-g1`, image: `l09-game-1.webp`, label: `WEATHER is what's happening TODAY — it changes from day to day.`,
              matchPhrase: `Yes! Weather is today's sky conditions — temperature, rain, wind, clouds. It changes often. That's why we check the forecast before planning our day.`,
              correctMatch: `fact` },
            { id: `l09-g2`, image: `l09-game-2.webp`, label: `Different CLIMATE REGIONS — tropical, temperate, polar, dry — exist on Earth and shape how people live.`,
              matchPhrase: `True! Earth has several climate regions. Tropical near the equator (hot and wet), temperate in the middle (four seasons), polar near the poles (very cold), dry in deserts (hot and dry). Each shapes its people uniquely.`,
              correctMatch: `fact` },
            { id: `l09-g3`, image: `l09-game-3.webp`, label: `ALL places on Earth have EXACTLY THE SAME weather and climate — no differences at all.`,
              matchPhrase: `Definitely not! Earth's climates are very different. The Amazon gets rain every day. Antarctica barely gets any. Phoenix Arizona is blazing hot in summer. Alaska has icy winters. Climate varies hugely across Earth.`,
              correctMatch: `myth` },
            { id: `l09-g4`, image: `l09-game-4.webp`, label: `CLIMATE has NO EFFECT on what people eat, wear, or how they build homes.`,
              matchPhrase: `Not true at all! Climate shapes almost everything. What we eat, what we wear, how we build homes, what work we do — all shaped by climate. Polar people need insulation. Tropical people need ventilation. Desert people need shade and water.`,
              correctMatch: `myth` },
          ],
        },

        {
          id: `l09-quiz`,
          type: `quiz`,
          guideText: `Let's see what you remember, {name}.`,
          questions: [
            { id: `l09-q1`, format: `multiple-choice`,
              question: `What is WEATHER?`,
              options: [`The usual pattern over many years`, `What's happening in the AIR TODAY — temperature, rain, wind, clouds`, `A type of landform`, `Only what happens in summer`],
              correctIndex: 1,
              explanation: `Weather is what's happening in the air today — or right now. Is it sunny, rainy, windy, or snowy? Weather changes from day to day. That's what makes it weather, not climate.` },
            { id: `l09-q2`, format: `multiple-choice`,
              question: `What is CLIMATE?`,
              options: [`Today's forecast`, `The USUAL weather of a place over MANY YEARS — a long-term pattern`, `A type of precipitation`, `Only winter weather`],
              correctIndex: 1,
              explanation: `Climate is the usual weather of a place over many years — decades. Not just today, but the long-term pattern. Scientists study decades of weather data to describe a place's climate.` },
            { id: `l09-q3`, format: `multiple-choice`,
              question: `Which climate is HOT and WET year-round, found near the EQUATOR?`,
              options: [`Polar`, `TROPICAL — like the Amazon rainforest`, `Temperate`, `Desert`],
              correctIndex: 1,
              explanation: `Tropical! Near the equator, which gets direct sunlight all year. Hot and wet — it rains almost every day. The Amazon and Congo rainforests are tropical. Incredible diversity of life.` },
            { id: `l09-q4`, format: `true-false`,
              question: `TEMPERATE climates have FOUR SEASONS — spring, summer, fall, and winter.`,
              correctAnswer: true,
              explanation: `True! Temperate climates have four seasons. Most of the US, Europe, and China have temperate climates. Summers are warm, winters are cold but not extreme, and spring and fall are mild and beautiful.` },
            { id: `l09-q5`, format: `fill-blank`,
              question: `POLAR climates are near the ___ and are VERY COLD with ice and snow all year.`,
              options: [`poles`, `equator`, `coast`, `desert`],
              correctIndex: 0,
              explanation: `Poles! Polar climates are near the North Pole and South Pole — very far from the equator. Very cold all year. Antarctica is the coldest place on Earth. Polar bears and penguins thrive there.` },
            { id: `l09-q6`, format: `multiple-choice`,
              question: `How does CLIMATE shape HUMAN LIFE?`,
              options: [`It doesn't`, `It shapes what we EAT, WEAR, how we BUILD HOMES, what WORK we do, and even our CULTURE`, `Only a little bit`, `Only in polar regions`],
              correctIndex: 1,
              explanation: `Climate shapes everything! What we eat, wear, how we build homes, what work we do, and even our culture — holidays, festivals, stories. We're deeply connected to our climate.` },
          ],
        },

        {
          id: `l09-realworld`,
          type: `real-world`,
          guideText: `Here's something important, {name}. Earth's climate is CHANGING — and faster than normal because of HUMAN ACTIVITY. We burn fossil fuels (coal, oil, gas) which release GASES that trap heat in the atmosphere. This is called the GREENHOUSE EFFECT. It's making Earth's average temperature rise — called GLOBAL WARMING or CLIMATE CHANGE. This is shifting climate regions. Tropical areas are getting MORE rain. Polar ice is MELTING. Dry areas are getting DRIER. This affects all living things. Scientists around the world are studying it closely. Many people are working on SOLUTIONS — like solar and wind energy — to slow climate change. Understanding weather and climate helps us understand why this matters.`,
          familyAdventure: `Talk about your LOCAL CLIMATE. What climate region do you live in? Temperate? Tropical? Dry? How does your climate shape YOUR daily life? Think about — what do you eat that grows nearby? What do you wear in different seasons? How is your home built for your climate? Compare with a family member who grew up somewhere with a DIFFERENT climate. What was different about daily life there?`,
          creativePrompt: `Choose a CLIMATE REGION — tropical, temperate, polar, or desert. Draw a scene showing life in that climate. Include the weather, the plants, the animals, and ONE person adapted to live there. What are they wearing? What are they doing? What does their home look like? Show how climate shapes the whole scene. Add color and details to bring that climate to life.`,
        },

        {
          id: `l09-celebration`,
          type: `celebration`,
          message: `Excellent work, {name}! You now understand WEATHER and CLIMATE. WEATHER is what's happening TODAY — it changes. CLIMATE is the long-term PATTERN over many years. Earth has CLIMATE REGIONS: TROPICAL (hot and wet, near the equator), TEMPERATE (four seasons, most of US and Europe), POLAR (very cold, near the poles), and DRY (deserts, little rain). Climate shapes what we EAT, WEAR, BUILD, and even our CULTURE. You're becoming quite the explorer! — Atlas 🐻`,
          badge:     `weather-climate-explorer`,
          badgeName: `Weather and Climate Explorer`,
          xpEarned:  50,
        },

      ],
    },
  ],
};

export default SOCIAL_STUDIES_L09;

// ─── Dev asset check ─────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const mags  = SOCIAL_STUDIES_L09.lessons[0].screens.filter(s => s.type === 'magazine').length;
  const game  = SOCIAL_STUDIES_L09.lessons[0].screens.find(s => s.type === 'interactive')?.items?.length ?? 0;
  const quiz  = SOCIAL_STUDIES_L09.lessons[0].screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  console.log(`[LESSON-SOCIAL-STUDIES-L09] Loaded: "Weather and Climate Regions" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
}
