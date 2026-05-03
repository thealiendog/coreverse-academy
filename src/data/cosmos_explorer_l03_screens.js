// ============================================================
// COREVERSE EXPLORERS — Cosmos · Lesson 3
// "The Water Cycle: Rain's Amazing Journey"
// Ages 6–8 | Guide: Nova | ExplorerLessonPlayer format
// ============================================================

const cosmos_explorer_l03_screens = {
  ageBand:   'explorers',
  subjectId: 'cosmos',
  guide:     'nova',
  lessons: [
    {
      id:        'cs-6-8-03',
      title:     `The Water Cycle: Rain's Amazing Journey`,
      duration:  12,
      xpReward:  50,
      badge:     'water-cycle-wizard',
      badgeName: `Water Cycle Wizard`,
      screens: [
        // PHASE 1 — WELCOME
        {
          type:      'welcome',
          guideText: `The water in your glass right now might have once been part of a dinosaur's drink. Or floated as a cloud over ancient Egypt. Or fell as snow on a mountain range ten thousand years ago. The same water has been cycling around Earth for billions of years — and today you're going to understand exactly how.`,
        },

        // PHASE 2 — MAGAZINE STORY (4 sections)
        {
          type:          'magazine',
          section:       1,
          totalSections: 4,
          headline:      `Evaporation: Water Becomes Invisible`,
          paragraphs: [
            `The water cycle is the continuous movement of water through Earth's systems — oceans, atmosphere, land, and back again. It has no beginning and no end. It's one of the most important processes on our entire planet.`,
            `It all starts with the Sun. When sunlight heats water on the surface of oceans, lakes, rivers, and puddles, the water molecules get excited and transform from liquid into water vapour — an invisible gas that rises up into the air. This process is called evaporation.`,
            `Every day, vast quantities of water evaporate from Earth's surface and drift silently up into the sky. You can't see it happening, but trillions of litres of water are rising invisibly into the atmosphere right now, all over the planet.`,
          ],
          image:        '/explorer-assets/cosmos/l03-magazine-evaporation.png',
          imageCaption: `Evaporation — the Sun's heat turns liquid water into invisible vapour that rises into the sky`,
          vocab: [
            { word: 'evaporation', definition: `The process by which liquid water is heated by the Sun and transforms into water vapour — an invisible gas that rises into the atmosphere.`, audioPrompt: `Evaporation — the process by which liquid water is heated by the Sun and transforms into water vapour, an invisible gas that rises into the atmosphere.` },
            { word: 'water vapour', definition: `Water in its invisible gas form — created when liquid water evaporates and rises into the air, where it eventually cools and forms clouds.`, audioPrompt: `Water vapour — water in its invisible gas form, created when liquid water evaporates and rises into the air, where it eventually cools and forms clouds.` },
          ],
        },
        {
          type:          'magazine',
          section:       2,
          totalSections: 4,
          headline:      `Condensation: Clouds Are Born`,
          paragraphs: [
            `As water vapour rises higher into the atmosphere, the air gets cooler. When the vapour cools enough, it transforms back into tiny liquid droplets — a process called condensation. These tiny droplets cling to microscopic dust particles floating in the air, forming the fluffy white shapes we call clouds.`,
            `Every cloud you've ever seen is made of millions of tiny water droplets suspended in the air. A single average cloud contains around 500 million litres of water — enough to fill hundreds of Olympic swimming pools. Clouds are not light and airy at all. They're extraordinarily heavy collections of water.`,
            `The same process happens on your cold glass on a hot day — water vapour from the air condenses on the cold surface and forms droplets. That's condensation, and it's happening across the entire atmosphere all the time.`,
          ],
          image:        '/explorer-assets/cosmos/l03-magazine-condensation.png',
          imageCaption: `Condensation — water vapour cools and forms tiny droplets that gather into clouds`,
          vocab: [
            { word: 'condensation', definition: `The process by which water vapour cools and transforms back into liquid water droplets — this is how clouds form in the atmosphere.`, audioPrompt: `Condensation — the process by which water vapour cools and transforms back into liquid water droplets. This is how clouds form in the atmosphere.` },
            { word: 'water droplets', definition: `Tiny liquid water particles formed when water vapour condenses — millions of them clump together around dust particles to form clouds.`, audioPrompt: `Water droplets — tiny liquid water particles formed when water vapour condenses. Millions of them clump together around dust particles to form clouds.` },
          ],
        },
        {
          type:          'magazine',
          section:       3,
          totalSections: 4,
          headline:      `Precipitation: The Drop Falls Back`,
          paragraphs: [
            `As more and more water droplets collect inside a cloud, they join together and grow heavier. When they become too heavy for the air to support, they fall back to Earth as precipitation — rain, snow, sleet, or hail, depending on the temperature.`,
            `About 75% of all precipitation falls directly into the ocean. The rest lands on continents — soaking into the soil, feeding rivers and lakes, or falling as snow on mountain ranges. Either way, the water is on its way back through the cycle.`,
            `The atmosphere acts as a giant recycling system, lifting water from the surface, carrying it across continents in clouds, and dropping it back down where it's needed. Precipitation is the step that returns water to the land and makes all life on Earth possible.`,
          ],
          image:        '/explorer-assets/cosmos/l03-magazine-precipitation.png',
          imageCaption: `Precipitation — clouds grow heavy and release water back to Earth as rain, snow, or hail`,
          vocab: [
            { word: 'precipitation', definition: `Water falling from clouds back to Earth's surface — it can take the form of rain, snow, sleet, or hail depending on the temperature.`, audioPrompt: `Precipitation — water falling from clouds back to Earth's surface. It can take the form of rain, snow, sleet, or hail depending on the temperature.` },
            { word: 'atmosphere',    definition: `The layer of gases surrounding Earth — it acts as a giant water-recycling system, carrying water vapour and clouds across the planet and releasing it as precipitation.`, audioPrompt: `Atmosphere — the layer of gases surrounding Earth. It acts as a giant water-recycling system, carrying water vapour and clouds across the planet and releasing it as precipitation.` },
          ],
        },
        {
          type:          'magazine',
          section:       4,
          totalSections: 4,
          headline:      `Collection and Runoff: Back to the Start`,
          paragraphs: [
            `When precipitation lands on Earth, it collects. It flows into rivers, lakes, and streams. It soaks into the ground and fills underground reservoirs called aquifers, which store water beneath the soil and rock for thousands of years. It falls as snow on mountains and glaciers and stays frozen for centuries.`,
            `Eventually, almost all of it finds its way back to the ocean — through rivers, through underground flow, through melting glaciers. And when it arrives back at the ocean, the Sun heats it again, and evaporation begins the whole cycle once more.`,
            `The water cycle never stops. It has been running continuously since Earth's oceans first formed billions of years ago. The same water keeps moving through the same steps — evaporation, condensation, precipitation, collection — over and over, sustaining every living thing on this planet.`,
          ],
          image:        '/explorer-assets/cosmos/l03-magazine-collection.png',
          imageCaption: `Collection — water gathers in rivers, lakes, and aquifers before flowing back to the ocean`,
          vocab: [
            { word: 'aquifer', definition: `An underground layer of rock or soil that stores water — aquifers hold enormous quantities of freshwater that can stay underground for thousands of years.`, audioPrompt: `Aquifer — an underground layer of rock or soil that stores water. Aquifers hold enormous quantities of freshwater that can stay underground for thousands of years.` },
            { word: 'runoff',  definition: `Water that flows over land into rivers and streams after precipitation — it carries water back toward the ocean, completing the water cycle.`, audioPrompt: `Runoff — water that flows over land into rivers and streams after precipitation. It carries water back toward the ocean, completing the water cycle.` },
          ],
        },

        // PHASE 3 — INTERACTIVE
        {
          type:          'interactive',
          activityType:  'drag-match',
          instruction:   `Tap each card, then tap which stage of the water cycle it shows!`,
          guideText:     `The water cycle has four key stages — evaporation, condensation, precipitation, and collection. Each stage has its own role in keeping water moving around our planet. Can you match each scene to the right stage?`,
          columnHeaders: [`The Scene`, `Water Cycle Stage`],
          items: [
            { image: 'l03-game-puddle.png',    label: `A puddle slowly disappearing on a hot sunny day.`,      correctMatch: 'evaporation',   objectPosition: 'center 50%', matchPhrase: `That's evaporation! The Sun's heat is turning the puddle's liquid water into invisible water vapour, which rises up into the atmosphere. Every puddle that vanishes after a sunny day is the water cycle in action.` },
            { image: 'l03-game-cloudform.png', label: `Water vapour cooling and forming fluffy white clouds.`, correctMatch: 'condensation',  objectPosition: 'center 50%', matchPhrase: `That's condensation! As water vapour rises and cools, it transforms back into tiny liquid droplets that cling to dust particles and form clouds. Each of those fluffy shapes holds hundreds of millions of litres of water.` },
            { image: 'l03-game-snow.png',      label: `Snow falling from dark clouds onto a mountain.`,       correctMatch: 'precipitation', objectPosition: 'center 50%', matchPhrase: `That's precipitation! When cloud droplets grow too heavy, they fall back to Earth — as rain, snow, sleet, or hail. Snow on a mountain might stay frozen for centuries before melting and flowing back to the ocean.` },
            { image: 'l03-game-river.png',     label: `A river flowing from the mountains toward the sea.`,   correctMatch: 'collection',    objectPosition: 'center 50%', matchPhrase: `That's collection! After precipitation lands, it flows into rivers, soaks into the ground, and eventually finds its way back to the ocean — where the Sun heats it and the whole cycle begins again.` },
          ],
          buckets: [
            { id: 'evaporation',   label: `🌊 Evaporation`,  color: '#F59E0B' },
            { id: 'condensation',  label: `☁️ Condensation`, color: '#60A5FA' },
            { id: 'precipitation', label: `🌧️ Precipitation`, color: '#818CF8' },
            { id: 'collection',    label: `🏔️ Collection`,   color: '#34D399' },
          ],
        },

        // PHASE 4 — MASTERY QUIZ
        {
          type:      'quiz',
          guideText: `Quiz time, {name}! Let's see what you've learned about the water cycle. Answer all 6 questions to earn your Water Cycle Wizard badge!`,
          questions: [
            {
              format:       'multiple-choice',
              question:     `What is evaporation?`,
              options:      [`Water falling from clouds`, `Ice melting into rivers`, `Liquid water turning into invisible gas when heated by the Sun`, `Clouds releasing moisture`],
              correctIndex: 2,
            },
            {
              format:       'multiple-choice',
              question:     `What are clouds made of?`,
              options:      [`Water vapour only`, `Millions of tiny liquid water droplets`, `Ice crystals only`, `Dust particles`],
              correctIndex: 1,
            },
            {
              format:       'multiple-choice',
              question:     `What is precipitation?`,
              options:      [`Water rising from the ocean`, `Water vapour cooling in the air`, `Water falling from clouds back to Earth as rain, snow, or hail`, `Water soaking into underground aquifers`],
              correctIndex: 2,
            },
            {
              format:        'true-false',
              question:      `The water cycle is powered by heat from the Sun.`,
              correctAnswer: true,
            },
            {
              format:       'fill-blank',
              question:     `About ___% of precipitation falls directly into the ocean.`,
              options:      [`75`, `25`, `50`, `95`],
              correctIndex: 0,
            },
            {
              format:       'multiple-choice',
              question:     `After precipitation lands on continents, where does the collected water eventually flow?`,
              options:      [`It stays underground forever`, `It evaporates immediately`, `It flows back to the ocean, where the cycle begins again`, `It becomes part of the atmosphere permanently`],
              correctIndex: 2,
            },
          ],
        },

        // PHASE 5 — REAL-WORLD CONNECTION
        {
          type:            'real-world',
          guideText:       `Brilliant work, {name}! You now know that every drop of water on Earth has been cycling for billions of years — and the water you drank today might once have been a dinosaur's drink. The cosmos recycles everything. Nova is so proud to share the universe with you. Try this with your family!`,
          familyAdventure: `Next time it rains, go outside right after and look for puddles. Then check on the puddles every hour — watch them get smaller and smaller as evaporation happens in real time. On a sunny day, put a small dish of water outside and mark the water level with tape. Check it each day and watch how quickly the water disappears into the sky.`,
          creativePrompt:  `Try making your own mini water cycle! Put a small cup of water inside a clear zip-lock bag. Seal it and tape it to a sunny window. Over several hours, watch what happens — water will evaporate, condense on the inside of the bag, and eventually drip back down. That's the full water cycle in your hands. Draw what you observe and label each stage.`,
        },

        // PHASE 6 — CELEBRATION
        {
          type:      'celebration',
          xpEarned:  50,
          badge:     'water-cycle-wizard',
          badgeName: `Water Cycle Wizard`,
          message:   `Brilliant work, {name}! You now know that every drop of water on Earth has been cycling for billions of years — and the water you drank today might once have been a dinosaur's drink. The cosmos recycles everything. Nova is so proud to share the universe with you.`,
        },
      ],
    },
  ],
};

// Log on module load — confirms lesson wired correctly + verifies image assets at runtime
(() => {
  const l    = cosmos_explorer_l03_screens.lessons[0];
  const mags = l.screens.filter(s => s.type === 'magazine').length;
  const game = l.screens.find(s => s.type === 'interactive')?.items?.length || 0;
  const quiz = l.screens.find(s => s.type === 'quiz')?.questions?.length || 0;
  console.log(`[LESSON-COSMOS-L03] Loaded: "The Water Cycle: Rain's Amazing Journey" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
  Promise.all([
    fetch('/explorer-assets/cosmos/l03-magazine-evaporation.png',  { method: 'HEAD' }),
    fetch('/explorer-assets/cosmos/l03-magazine-condensation.png', { method: 'HEAD' }),
    fetch('/explorer-assets/cosmos/l03-magazine-precipitation.png',{ method: 'HEAD' }),
    fetch('/explorer-assets/cosmos/l03-magazine-collection.png',   { method: 'HEAD' }),
  ]).then(([r1, r2, r3, r4]) => {
    console.log(`[ASSET-CHECK-COSMOS-L03] evaporation: ${r1.ok}, condensation: ${r2.ok}, precipitation: ${r3.ok}, collection: ${r4.ok}`);
  }).catch(() => {
    console.log('[ASSET-CHECK-COSMOS-L03] Could not verify image assets — network check failed');
  });
})();

export default cosmos_explorer_l03_screens;
