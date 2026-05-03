// ============================================================
// COREVERSE EXPLORERS — Cosmos · Lesson 13
// "Weather vs Climate"
// Ages 6–8 | Guide: Nova | ExplorerLessonPlayer format
// ============================================================

const cosmos_explorer_l13_screens = {
  ageBand:   'explorers',
  subjectId: 'cosmos',
  guide:     'nova',
  lessons: [
    {
      id:        'cs-6-8-13',
      title:     `Weather vs Climate`,
      duration:  12,
      xpReward:  50,
      badge:     'climate-analyst',
      badgeName: `Climate Analyst`,
      screens: [
        // PHASE 1 — WELCOME
        {
          type:      'welcome',
          guideText: `People sometimes say "it's cold today, so global warming must be fake." But that confuses two completely different things: weather and climate. Understanding the difference between them is one of the most important scientific literacy skills you can have.`,
        },

        // PHASE 2 — MAGAZINE STORY (4 sections)
        {
          type:          'magazine',
          section:       1,
          totalSections: 4,
          headline:      `Weather: What's Happening Right Now`,
          paragraphs: [
            `Weather is the current condition of the atmosphere — the temperature, humidity, wind speed, cloud cover, and precipitation at a specific place and time. Weather changes constantly. It can be sunny one hour and raining the next. It varies enormously from one place to another even on the same day.`,
            `The atmosphere is extraordinarily complex — millions of interacting variables of temperature, pressure, moisture, and wind, all influencing each other simultaneously. This complexity is why weather forecasts become less accurate the further out they go. A 3-day forecast is fairly reliable. A 10-day forecast is a rough guide. A 30-day forecast is little better than a statistical average.`,
            `Weather is what you experience directly — the rain soaking your jacket, the wind lifting your hat, the heat of a summer afternoon. It's personal, immediate, and constantly changing. And it tells you almost nothing about climate.`,
          ],
          image:        '/explorer-assets/cosmos/l13-magazine-weather.png',
          imageCaption: `Weather — the current atmospheric conditions at a specific place and time, constantly changing`,
          vocab: [
            { word: 'weather',     definition: `The current condition of the atmosphere at a specific place and time — including temperature, humidity, wind, cloud cover, and precipitation. Weather changes constantly.`,  audioPrompt: `Weather — the current condition of the atmosphere at a specific place and time, including temperature, humidity, wind, cloud cover, and precipitation. Weather changes constantly.` },
            { word: 'atmosphere',  definition: `The layer of gases surrounding Earth — it is the system where weather takes place, driven by temperature, pressure, moisture, and wind all interacting at once.`,             audioPrompt: `Atmosphere — the layer of gases surrounding Earth. It is the system where weather takes place, driven by temperature, pressure, moisture, and wind all interacting at once.` },
          ],
        },
        {
          type:          'magazine',
          section:       2,
          totalSections: 4,
          headline:      `Climate: The Long-Term Pattern`,
          paragraphs: [
            `Climate is the average pattern of weather in a region over a long period — typically 30 years or more. Climate tells you what weather is normal and expected in a place across seasons and years. A desert has a dry climate. A rainforest has a wet, warm climate. A coastal city has a mild, moderate climate.`,
            `Here's the classic way to remember the difference: "Climate is what you expect; weather is what you get." If you're planning to move to a city, you'd look up its climate. When you step outside in the morning, you're dealing with weather.`,
            `Climate determines where crops can grow, what plants and animals live in a region, how buildings are designed, and how people dress and live. The Amazon rainforest, the Sahara Desert, and the Arctic tundra all exist because of the climates that shaped them over millions of years.`,
          ],
          image:        '/explorer-assets/cosmos/l13-magazine-climate.png',
          imageCaption: `Climate — the long-term average pattern of weather in a region, shaping ecosystems and human life`,
          vocab: [
            { word: 'climate',       definition: `The average pattern of weather in a region over a long period — typically 30 or more years. Climate tells you what weather conditions are typical and expected in a place.`, audioPrompt: `Climate — the average pattern of weather in a region over a long period, typically 30 or more years. Climate tells you what weather conditions are typical and expected in a place.` },
            { word: 'precipitation', definition: `Any form of water falling from the atmosphere to Earth's surface — including rain, snow, sleet, and hail. Precipitation levels are a key characteristic of a region's climate.`,  audioPrompt: `Precipitation — any form of water falling from the atmosphere to Earth's surface, including rain, snow, sleet, and hail. Precipitation levels are a key characteristic of a region's climate.` },
          ],
        },
        {
          type:          'magazine',
          section:       3,
          totalSections: 4,
          headline:      `What Drives Climate?`,
          paragraphs: [
            `Several factors determine a region's climate. Latitude — how far from the equator — is the most important. Near the equator, sunlight hits Earth's surface at a direct angle, concentrating heat and creating tropical climates. Near the poles, sunlight hits at a shallow angle and spreads over a larger area, creating cold polar climates.`,
            `Altitude matters too — higher elevations are cooler, which is why mountains can have snow year-round even near the equator. Distance from the ocean moderates temperature — coastal regions tend to be milder than inland areas. Ocean currents carry warm or cold water across vast distances, affecting the climates of nearby coastlines.`,
            `This is why two cities at the same latitude can have completely different climates. London and Calgary are at similar latitudes, but London has mild, rainy winters while Calgary has harsh, snowy ones. The ocean current off Britain's coast makes all the difference.`,
          ],
          image:        '/explorer-assets/cosmos/l13-magazine-climate-drivers.png',
          imageCaption: `What drives climate — latitude, altitude, ocean proximity, currents, and prevailing winds`,
          vocab: [
            { word: 'latitude', definition: `How far north or south of the equator a place is — latitude is the most important factor in determining climate, with equatorial regions being warm and polar regions cold.`,   audioPrompt: `Latitude — how far north or south of the equator a place is. Latitude is the most important factor in determining climate, with equatorial regions being warm and polar regions cold.` },
            { word: 'altitude', definition: `The height above sea level — higher altitudes are cooler than lower ones, which is why mountains can have snow year-round even in regions that are otherwise warm near sea level.`, audioPrompt: `Altitude — the height above sea level. Higher altitudes are cooler than lower ones, which is why mountains can have snow year-round even in regions that are otherwise warm near sea level.` },
          ],
        },
        {
          type:          'magazine',
          section:       4,
          totalSections: 4,
          headline:      `Climate Zones of Earth`,
          paragraphs: [
            `Earth is divided into major climate zones based on temperature and rainfall patterns. Tropical zones near the equator are warm year-round with high rainfall — home to rainforests and enormous biodiversity. Subtropical zones are hot, with distinct wet and dry seasons or very dry conditions.`,
            `Temperate zones — where much of Europe, North America, and Asia lie — have four distinct seasons with moderate temperatures. Continental zones further inland have more extreme seasonal swings — very hot summers and very cold winters. Polar zones near the poles are cold year-round, with frozen landscapes and minimal precipitation.`,
            `Highland zones exist wherever mountains rise — cooler and often wetter than the surrounding lowlands, they create their own microclimates. Each climate zone supports a different ecosystem and a different way of human life adapted to those conditions over thousands of years.`,
          ],
          image:        '/explorer-assets/cosmos/l13-magazine-climate-zones.png',
          imageCaption: `Earth's climate zones — tropical, temperate, polar, and more, each shaping its own ecosystem`,
          vocab: [
            { word: 'climate zone', definition: `A region of Earth defined by its long-term temperature and rainfall patterns — climate zones include tropical, subtropical, temperate, continental, polar, and highland.`,         audioPrompt: `Climate zone — a region of Earth defined by its long-term temperature and rainfall patterns. Climate zones include tropical, subtropical, temperate, continental, polar, and highland.` },
            { word: 'temperate',    definition: `A climate zone with four distinct seasons and moderate temperatures — most of Europe, North America, and parts of Asia and South America have temperate climates.`, audioPrompt: `Temperate — a climate zone with four distinct seasons and moderate temperatures. Most of Europe, North America, and parts of Asia and South America have temperate climates.` },
          ],
        },

        // PHASE 3 — INTERACTIVE
        {
          type:          'interactive',
          activityType:  'drag-match',
          instruction:   `Tap each card, then tap whether it's an example of weather or climate!`,
          guideText:     `Remember: weather is what's happening right now. Climate is the long-term pattern. Some of these describe a moment in time — others describe a region's typical conditions over many years. Can you sort them correctly?`,
          columnHeaders: [`The Description`, `Weather or Climate?`],
          items: [
            { image: 'l13-game-storm.png',             label: `A sudden thunderstorm hitting your city on a Tuesday afternoon.`,                               correctMatch: 'weather', objectPosition: 'center 50%', matchPhrase: `Weather! A thunderstorm on a Tuesday afternoon is weather — a specific atmospheric event at a specific place and time. It might be sunny tomorrow. Weather changes constantly and doesn't tell you anything about what conditions are typical in a region.` },
            { image: 'l13-game-desert.png',            label: `A desert that receives less than 10 inches of rain every single year.`,                         correctMatch: 'climate', objectPosition: 'center 50%', matchPhrase: `Climate! Receiving less than 10 inches of rain every year describes a region's long-term pattern — its climate. That's not a one-day event; it's the average over decades. Climate tells you what conditions to expect year after year, not just today.` },
            { image: 'l13-game-temperature-drop.png',  label: `Today's temperature dropping 10 degrees colder than it was yesterday.`,                        correctMatch: 'weather', objectPosition: 'center 50%', matchPhrase: `Weather! A temperature change from one day to the next is weather — a short-term, specific atmospheric condition. One cold day doesn't tell you whether a region is cold on average. Only the long-term pattern reveals the climate.` },
            { image: 'l13-game-equator.png',           label: `A tropical region that stays warm year-round because it's close to the equator.`,              correctMatch: 'climate', objectPosition: 'center 50%', matchPhrase: `Climate! Staying warm year-round is a climate description — it's the long-term pattern for that region. The equator receives direct sunlight throughout the year, creating consistently warm conditions that define the tropical climate zone.` },
          ],
          buckets: [
            { id: 'weather', label: `⛅ Weather`, color: '#60A5FA' },
            { id: 'climate', label: `🌡️ Climate`, color: '#F59E0B' },
          ],
        },

        // PHASE 4 — MASTERY QUIZ
        {
          type:      'quiz',
          guideText: `Quiz time, {name}! Let's see what you've learned about weather and climate. Answer all 6 questions to earn your Climate Analyst badge!`,
          questions: [
            {
              format:       'multiple-choice',
              question:     `What is the main difference between weather and climate?`,
              options:      [`Weather is more serious than climate`, `Weather happens outdoors; climate is indoors`, `Weather is current atmospheric conditions; climate is the long-term average pattern over many years`, `They are the same thing measured differently`],
              correctIndex: 2,
            },
            {
              format:       'multiple-choice',
              question:     `What does latitude mean?`,
              options:      [`The height above sea level`, `How far north or south of the equator a place is`, `The distance from the ocean`, `How much rainfall a place gets per year`],
              correctIndex: 1,
            },
            {
              format:       'multiple-choice',
              question:     `Why does a single cold day not disprove climate change?`,
              options:      [`Because climate scientists make mistakes`, `Because cold days are natural`, `Because climate is measured over decades and centuries, not single days`, `Because weather is always unpredictable`],
              correctIndex: 2,
            },
            {
              format:        'true-false',
              question:      `Climate tells you what weather to expect; weather tells you what's happening right now.`,
              correctAnswer: true,
            },
            {
              format:       'fill-blank',
              question:     `A region's climate is typically calculated using weather data collected over at least ___ years.`,
              options:      [`30`, `5`, `10`, `100`],
              correctIndex: 0,
            },
            {
              format:       'multiple-choice',
              question:     `What type of climate does a tropical rainforest have?`,
              options:      [`Cold and dry year-round`, `Four distinct seasons`, `Warm and wet year-round`, `Hot summers and freezing winters`],
              correctIndex: 2,
            },
          ],
        },

        // PHASE 5 — REAL-WORLD CONNECTION
        {
          type:            'real-world',
          guideText:       `Record the weather every day for a week — then compare your results to your city's long-term average for this time of year!`,
          familyAdventure: `Look up your city's average temperature for each month of the year (climate data). Then compare it to what it was 50 or 100 years ago using historical climate records. Many weather services have this data. Have temperatures changed over time? By how much? What does the data show?`,
          creativePrompt:  `For the next 7 days, record the weather each day: temperature, sunny or cloudy, rainy or dry, windy or calm. At the end of 7 days, calculate the average temperature and most common conditions. That's your mini climate sample! Now look up the long-term average climate data for your city. How does your week compare?`,
        },

        // PHASE 6 — CELEBRATION
        {
          type:      'celebration',
          xpEarned:  50,
          badge:     'climate-analyst',
          badgeName: `Climate Analyst`,
          message:   `Brilliant work, {name}! You now know the difference between what's happening in the sky today and the long-term patterns that shape entire civilisations. Climate decides where forests grow, where cities form, and what crops feed billions of people. Nova is so proud to share the universe with you.`,
        },
      ],
    },
  ],
};

// Log on module load — confirms lesson wired correctly + verifies image assets at runtime
(() => {
  const l    = cosmos_explorer_l13_screens.lessons[0];
  const mags = l.screens.filter(s => s.type === 'magazine').length;
  const game = l.screens.find(s => s.type === 'interactive')?.items?.length || 0;
  const quiz = l.screens.find(s => s.type === 'quiz')?.questions?.length || 0;
  console.log(`[LESSON-COSMOS-L13] Loaded: "Weather vs Climate" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
  Promise.all([
    fetch('/explorer-assets/cosmos/l13-magazine-weather.png',         { method: 'HEAD' }),
    fetch('/explorer-assets/cosmos/l13-magazine-climate.png',         { method: 'HEAD' }),
    fetch('/explorer-assets/cosmos/l13-magazine-climate-drivers.png', { method: 'HEAD' }),
    fetch('/explorer-assets/cosmos/l13-magazine-climate-zones.png',   { method: 'HEAD' }),
  ]).then(([r1, r2, r3, r4]) => {
    console.log(`[ASSET-CHECK-COSMOS-L13] weather: ${r1.ok}, climate: ${r2.ok}, climate-drivers: ${r3.ok}, climate-zones: ${r4.ok}`);
  }).catch(() => {
    console.log('[ASSET-CHECK-COSMOS-L13] Could not verify image assets — network check failed');
  });
})();

export default cosmos_explorer_l13_screens;
