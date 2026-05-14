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

        // PHASE 2 — MAGAZINE STORY (6 sections)
        {
          type:          'magazine',
          section:       1,
          totalSections: 6,
          headline:      `The Water Cycle Begins`,
          paragraphs: [
            `The water cycle is the continuous movement of water through Earth's systems — oceans, atmosphere, land, and back again. It has no beginning and no end.`,
            `It's powered by the Sun. The same water has been cycling around Earth for billions of years — the water in your glass right now is ancient.`,
          ],
          image:        '/explorer-assets/cosmos/l03-s1-water-cycle.png',
          imageCaption: `The water cycle — water moving through Earth's systems forever`,
          vocab: [
            { word: 'water cycle', definition: `The continuous movement of water through Earth's systems — oceans, atmosphere, land, and back again.`, audioPrompt: `Water cycle — the continuous movement of water through Earth's systems: oceans, atmosphere, land, and back again.` },
            { word: 'continuous',  definition: `Never stopping. The water cycle is continuous — it has no beginning and no end.`, audioPrompt: `Continuous — never stopping. The water cycle is continuous. It has no beginning and no end.` },
          ],
        },
        {
          type:          'magazine',
          section:       2,
          totalSections: 6,
          headline:      `Evaporation`,
          paragraphs: [
            `When sunlight heats water on the surface of oceans, lakes, rivers, and puddles, the water molecules transform from liquid into water vapour — an invisible gas.`,
            `This process is called evaporation. Trillions of litres of water rise silently into the atmosphere every day, all over the planet.`,
          ],
          image:        '/explorer-assets/cosmos/l03-s2-evaporation.png',
          imageCaption: `Evaporation — the Sun turns liquid water into invisible vapour that rises into the sky`,
          vocab: [
            { word: 'evaporation',  definition: `When liquid water is heated by the Sun and turns into invisible water vapour that rises into the air.`, audioPrompt: `Evaporation — when liquid water is heated by the Sun and turns into invisible water vapour that rises into the air.` },
            { word: 'water vapour', definition: `Water in its invisible gas form — created when liquid water evaporates and rises into the atmosphere.`, audioPrompt: `Water vapour — water in its invisible gas form, created when liquid water evaporates and rises into the atmosphere.` },
          ],
        },
        {
          type:          'magazine',
          section:       3,
          totalSections: 6,
          headline:      `Condensation`,
          paragraphs: [
            `As water vapour rises higher, the air gets cooler. The vapour cools and transforms back into tiny liquid droplets — this is called condensation.`,
            `The droplets cling to microscopic dust particles in the air and form clouds. Every cloud is made of millions of these tiny water droplets.`,
          ],
          image:        '/explorer-assets/cosmos/l03-s3-condensation.png',
          imageCaption: `Condensation — water vapour cools and forms tiny droplets that gather into clouds`,
          vocab: [
            { word: 'condensation', definition: `When water vapour cools and turns back into tiny liquid droplets. This is how clouds form in the atmosphere.`, audioPrompt: `Condensation — when water vapour cools and turns back into tiny liquid droplets. This is how clouds form in the atmosphere.` },
            { word: 'droplets',     definition: `Tiny water particles formed when vapour condenses. Millions of droplets gather together to form clouds.`, audioPrompt: `Droplets — tiny water particles formed when vapour condenses. Millions of droplets gather together to form clouds.` },
          ],
        },
        {
          type:          'magazine',
          section:       4,
          totalSections: 6,
          headline:      `Precipitation`,
          paragraphs: [
            `As more droplets collect inside a cloud, they join together and grow heavier. When they become too heavy for the air to support, they fall back to Earth.`,
            `This is called precipitation. Depending on the temperature, it falls as rain, snow, sleet, or hail.`,
          ],
          image:        '/explorer-assets/cosmos/l03-s4-precipitation.png',
          imageCaption: `Precipitation — clouds grow heavy and release water back to Earth as rain, snow, or hail`,
          vocab: [
            { word: 'precipitation', definition: `Water falling from clouds back to Earth — as rain, snow, sleet, or hail depending on the temperature.`, audioPrompt: `Precipitation — water falling from clouds back to Earth, as rain, snow, sleet, or hail depending on the temperature.` },
            { word: 'temperature',   definition: `How hot or cold something is. Temperature decides whether precipitation falls as rain or snow.`, audioPrompt: `Temperature — how hot or cold something is. Temperature decides whether precipitation falls as rain or snow.` },
          ],
        },
        {
          type:          'magazine',
          section:       5,
          totalSections: 6,
          headline:      `Collection`,
          paragraphs: [
            `When water lands on Earth, it collects. It flows into rivers and lakes. It soaks into the ground and fills underground reservoirs called aquifers.`,
            `It falls as snow on mountains and stays frozen for centuries. Eventually, almost all of it finds its way back to the ocean.`,
          ],
          image:        '/explorer-assets/cosmos/l03-s5-collection.png',
          imageCaption: `Collection — water gathers in rivers, lakes, aquifers, and glaciers before flowing back to the ocean`,
          vocab: [
            { word: 'aquifer', definition: `An underground layer of rock or soil that stores water. Aquifers can hold freshwater for thousands of years.`, audioPrompt: `Aquifer — an underground layer of rock or soil that stores water. Aquifers can hold freshwater for thousands of years.` },
            { word: 'runoff',  definition: `Water flowing over land into rivers and streams after precipitation. Runoff carries water back toward the ocean.`, audioPrompt: `Runoff — water flowing over land into rivers and streams after precipitation. Runoff carries water back toward the ocean.` },
          ],
        },
        {
          type:          'magazine',
          section:       6,
          totalSections: 6,
          headline:      `It Never Stops`,
          paragraphs: [
            `When the water reaches the ocean, the Sun heats it again, and the cycle begins once more.`,
            `The water cycle never stops. It has been running for billions of years — the same water, cycling through the same steps, sustaining all life on Earth.`,
          ],
          image:        '/explorer-assets/cosmos/l03-s6-eternal-cycle.png',
          imageCaption: `The water cycle has been running for billions of years — and it sustains every living thing`,
          vocab: [
            { word: 'recycle', definition: `To use again and again. The water cycle recycles every drop of water on Earth — over and over forever.`, audioPrompt: `Recycle — to use again and again. The water cycle recycles every drop of water on Earth, over and over forever.` },
            { word: 'sustain', definition: `To keep alive. The water cycle sustains every living thing on Earth — without it, no life would be possible.`, audioPrompt: `Sustain — to keep alive. The water cycle sustains every living thing on Earth. Without it, no life would be possible.` },
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
    fetch('/explorer-assets/cosmos/l03-s1-water-cycle.png',   { method: 'HEAD' }),
    fetch('/explorer-assets/cosmos/l03-s2-evaporation.png',   { method: 'HEAD' }),
    fetch('/explorer-assets/cosmos/l03-s3-condensation.png',  { method: 'HEAD' }),
    fetch('/explorer-assets/cosmos/l03-s4-precipitation.png', { method: 'HEAD' }),
    fetch('/explorer-assets/cosmos/l03-s5-collection.png',    { method: 'HEAD' }),
    fetch('/explorer-assets/cosmos/l03-s6-eternal-cycle.png', { method: 'HEAD' }),
  ]).then(([r1, r2, r3, r4, r5, r6]) => {
    console.log(`[ASSET-CHECK-COSMOS-L03] water-cycle: ${r1.ok}, evaporation: ${r2.ok}, condensation: ${r3.ok}, precipitation: ${r4.ok}, collection: ${r5.ok}, eternal-cycle: ${r6.ok}`);
  }).catch(() => {
    console.log('[ASSET-CHECK-COSMOS-L03] Could not verify image assets — network check failed');
  });
})();

export default cosmos_explorer_l03_screens;
