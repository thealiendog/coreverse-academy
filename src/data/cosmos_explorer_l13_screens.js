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

        // PHASE 2 — MAGAZINE STORY (6 sections)
        {
          type:          'magazine',
          section:       1,
          totalSections: 6,
          headline:      `Weather Is Now`,
          paragraphs: [
            `Weather is the current condition of the atmosphere — the temperature, wind, clouds, and rain at a specific place and time.`,
            `Weather changes constantly. It can be sunny one hour and raining the next. It varies enormously from one place to another even on the same day.`,
          ],
          image:        '/explorer-assets/cosmos/l13-s1-weather.png',
          imageCaption: `Weather — what's happening in the sky right now, in this exact place`,
          vocab: [
            { word: 'weather',    definition: `The current condition of the atmosphere at a specific place and time — temperature, wind, clouds, and rain. Weather changes constantly.`, audioPrompt: `Weather — the current condition of the atmosphere at a specific place and time: temperature, wind, clouds, and rain. Weather changes constantly.` },
            { word: 'atmosphere', definition: `The layer of gases surrounding Earth — the system where all weather takes place.`, audioPrompt: `Atmosphere — the layer of gases surrounding Earth, the system where all weather takes place.` },
          ],
        },
        {
          type:          'magazine',
          section:       2,
          totalSections: 6,
          headline:      `Climate Is the Pattern`,
          paragraphs: [
            `Climate is the average pattern of weather in a region over a long period — typically 30 years or more.`,
            `A desert has a dry climate. A rainforest has a wet, warm climate. A coastal city has a mild, moderate climate.`,
          ],
          image:        '/explorer-assets/cosmos/l13-s2-climate-pattern.png',
          imageCaption: `Climate is the long-term pattern of weather — averaged across decades`,
          vocab: [
            { word: 'climate', definition: `The average pattern of weather in a region over a long period — typically 30 or more years. Climate tells you what weather to expect.`, audioPrompt: `Climate — the average pattern of weather in a region over a long period, typically 30 or more years. Climate tells you what weather to expect.` },
            { word: 'pattern', definition: `A regular, repeating arrangement. Climate is the long-term pattern of weather in a place — what happens year after year.`, audioPrompt: `Pattern — a regular, repeating arrangement. Climate is the long-term pattern of weather in a place, what happens year after year.` },
          ],
        },
        {
          type:          'magazine',
          section:       3,
          totalSections: 6,
          headline:      `What You Expect vs What You Get`,
          paragraphs: [
            `Here's the classic way to remember the difference: "Climate is what you expect. Weather is what you get."`,
            `If you're planning to move to a new city, you'd look up its climate. When you step outside in the morning, you're dealing with weather.`,
          ],
          image:        '/explorer-assets/cosmos/l13-s3-expect-vs-get.png',
          imageCaption: `Climate is what you expect. Weather is what you get.`,
          vocab: [
            { word: 'average', definition: `The typical value over time. Climate is the average of weather over many, many years.`, audioPrompt: `Average — the typical value over time. Climate is the average of weather over many, many years.` },
            { word: 'expect',  definition: `To think something will happen. Climate is what you EXPECT. Weather is what you actually GET.`, audioPrompt: `Expect — to think something will happen. Climate is what you expect. Weather is what you actually get.` },
          ],
        },
        {
          type:          'magazine',
          section:       4,
          totalSections: 6,
          headline:      `Latitude Matters Most`,
          paragraphs: [
            `Latitude — how far from the equator — is the most important factor in determining climate.`,
            `Near the equator, sunlight hits Earth directly, creating warm tropical climates. Near the poles, sunlight hits at a shallow angle, creating cold polar climates.`,
          ],
          image:        '/explorer-assets/cosmos/l13-s4-latitude.png',
          imageCaption: `Latitude determines climate — warm near the equator, cold near the poles`,
          vocab: [
            { word: 'latitude', definition: `How far north or south of the equator a place is. Latitude is the biggest factor in determining a place's climate.`, audioPrompt: `Latitude — how far north or south of the equator a place is. Latitude is the biggest factor in determining a place's climate.` },
            { word: 'equator',  definition: `The imaginary line around the middle of Earth. Places near the equator have warm tropical climates year-round.`, audioPrompt: `Equator — the imaginary line around the middle of Earth. Places near the equator have warm tropical climates year-round.` },
          ],
        },
        {
          type:          'magazine',
          section:       5,
          totalSections: 6,
          headline:      `Other Climate Drivers`,
          paragraphs: [
            `Altitude matters too — higher elevations are cooler. That's why mountains can have snow year-round even near the equator.`,
            `Distance from the ocean and ocean currents also shape climate. London and Calgary are at similar latitudes but have very different climates — because of the ocean.`,
          ],
          image:        '/explorer-assets/cosmos/l13-s5-altitude-currents.png',
          imageCaption: `Altitude, oceans, and currents all shape climate alongside latitude`,
          vocab: [
            { word: 'altitude',      definition: `Height above sea level. Higher altitudes are cooler — which is why mountains can have snow even in warm regions.`, audioPrompt: `Altitude — height above sea level. Higher altitudes are cooler, which is why mountains can have snow even in warm regions.` },
            { word: 'ocean current', definition: `A flow of water across the ocean that carries heat across vast distances — currents shape the climate of nearby coasts.`, audioPrompt: `Ocean current — a flow of water across the ocean that carries heat across vast distances. Currents shape the climate of nearby coasts.` },
          ],
        },
        {
          type:          'magazine',
          section:       6,
          totalSections: 6,
          headline:      `Earth's Climate Zones`,
          paragraphs: [
            `Earth is divided into major climate zones. Tropical zones near the equator are warm and rainy. Temperate zones have four distinct seasons.`,
            `Polar zones at the top and bottom of Earth are cold year-round. Each climate zone supports a different ecosystem — and a different way of life.`,
          ],
          image:        '/explorer-assets/cosmos/l13-s6-climate-zones.png',
          imageCaption: `Earth's climate zones — from tropical bands to polar caps, each shaping its own world`,
          vocab: [
            { word: 'climate zone', definition: `A region of Earth defined by its long-term temperature and rainfall — tropical, temperate, polar, and others.`, audioPrompt: `Climate zone — a region of Earth defined by its long-term temperature and rainfall: tropical, temperate, polar, and others.` },
            { word: 'temperate',    definition: `A climate zone with four distinct seasons and moderate temperatures. Most of Europe, North America, and parts of Asia are temperate.`, audioPrompt: `Temperate — a climate zone with four distinct seasons and moderate temperatures. Most of Europe, North America, and parts of Asia are temperate.` },
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
    fetch('/explorer-assets/cosmos/l13-s1-weather.png',          { method: 'HEAD' }),
    fetch('/explorer-assets/cosmos/l13-s2-climate-pattern.png',  { method: 'HEAD' }),
    fetch('/explorer-assets/cosmos/l13-s3-expect-vs-get.png',    { method: 'HEAD' }),
    fetch('/explorer-assets/cosmos/l13-s4-latitude.png',         { method: 'HEAD' }),
    fetch('/explorer-assets/cosmos/l13-s5-altitude-currents.png',{ method: 'HEAD' }),
    fetch('/explorer-assets/cosmos/l13-s6-climate-zones.png',    { method: 'HEAD' }),
  ]).then(([r1, r2, r3, r4, r5, r6]) => {
    console.log(`[ASSET-CHECK-COSMOS-L13] weather: ${r1.ok}, climate-pattern: ${r2.ok}, expect-vs-get: ${r3.ok}, latitude: ${r4.ok}, altitude-currents: ${r5.ok}, climate-zones: ${r6.ok}`);
  }).catch(() => {
    console.log('[ASSET-CHECK-COSMOS-L13] Could not verify image assets — network check failed');
  });
})();

export default cosmos_explorer_l13_screens;
