// ============================================================
// COREVERSE EXPLORERS — Cosmos · Lesson 15
// "The Moon: Phases and Tides"
// Ages 6–8 | Guide: Nova | ExplorerLessonPlayer format
// ============================================================

const cosmos_explorer_l15_screens = {
  ageBand:   'explorers',
  subjectId: 'cosmos',
  guide:     'nova',
  lessons: [
    {
      id:        'cs-6-8-15',
      title:     `The Moon: Phases and Tides`,
      duration:  12,
      xpReward:  50,
      badge:     'moon-watcher',
      badgeName: `Moon Watcher`,
      screens: [
        // PHASE 1 — WELCOME
        {
          type:      'welcome',
          guideText: `Every night the Moon looks slightly different. Sometimes it's a thin crescent, sometimes a bright half circle, sometimes a full glowing disk. It's not changing shape — something else is happening. And that same Moon is pulling on Earth's oceans right now, making the tides rise and fall twice a day.`,
        },

        // PHASE 2 — MAGAZINE STORY (6 sections)
        {
          type:          'magazine',
          section:       1,
          totalSections: 6,
          headline:      `Why the Moon Has Phases`,
          paragraphs: [
            `The Moon doesn't make its own light — it reflects sunlight. The Moon never changes shape.`,
            `As it orbits Earth over 29.5 days, we see different amounts of its sunlit side. The Moon is always exactly half lit. We just see different angles.`,
          ],
          image:        '/explorer-assets/cosmos/l15-s1-moon-geometry.png',
          imageCaption: `The Moon never changes shape — we just see different parts of its lit side`,
          vocab: [
            { word: 'lunar phase', definition: `The shape of the Moon as seen from Earth, caused by the changing angles between the Moon, Earth, and Sun.`, audioPrompt: `Lunar phase — the shape of the Moon as seen from Earth, caused by the changing angles between the Moon, Earth, and Sun.` },
            { word: 'orbit',       definition: `The path one object takes around another. The Moon orbits Earth once every 29.5 days.`, audioPrompt: `Orbit — the path one object takes around another. The Moon orbits Earth once every 29.5 days.` },
          ],
        },
        {
          type:          'magazine',
          section:       2,
          totalSections: 6,
          headline:      `New Moon to Full Moon`,
          paragraphs: [
            `When the Moon is between Earth and the Sun, the sunlit side faces away from us. This is a New Moon.`,
            `As it moves around Earth, more and more of its lit side comes into view — growing from crescent to half circle to Full Moon. This growing is called waxing.`,
          ],
          image:        '/explorer-assets/cosmos/l15-s2-waxing-sequence.png',
          imageCaption: `From New Moon to Full Moon, the lit portion grows — this is waxing`,
          vocab: [
            { word: 'new moon', definition: `The phase when the Moon is between Earth and the Sun. Its sunlit side faces away — we see almost no Moon in the sky.`, audioPrompt: `New moon — the phase when the Moon is between Earth and the Sun. Its sunlit side faces away. We see almost no Moon in the sky.` },
            { word: 'waxing',   definition: `When the lit portion of the Moon is growing larger night by night — from New Moon through to Full Moon.`, audioPrompt: `Waxing — when the lit portion of the Moon is growing larger night by night, from New Moon through to Full Moon.` },
          ],
        },
        {
          type:          'magazine',
          section:       3,
          totalSections: 6,
          headline:      `Full Moon to New Moon`,
          paragraphs: [
            `When Earth is between the Moon and the Sun, the Moon's fully lit face shines straight back at us. This is a Full Moon.`,
            `After Full Moon, the lit portion shrinks night by night — back through half circle and crescent to New Moon. This shrinking is called waning.`,
          ],
          image:        '/explorer-assets/cosmos/l15-s3-waning-sequence.png',
          imageCaption: `From Full Moon back to New Moon, the lit portion shrinks — this is waning`,
          vocab: [
            { word: 'full moon', definition: `The phase when Earth is between the Moon and the Sun. The Moon's fully lit face shines back at us in the night sky.`, audioPrompt: `Full moon — the phase when Earth is between the Moon and the Sun. The Moon's fully lit face shines back at us in the night sky.` },
            { word: 'waning',    definition: `When the lit portion of the Moon is shrinking night by night — from Full Moon back toward New Moon.`, audioPrompt: `Waning — when the lit portion of the Moon is shrinking night by night, from Full Moon back toward New Moon.` },
          ],
        },
        {
          type:          'magazine',
          section:       4,
          totalSections: 6,
          headline:      `How the Moon Pulls the Tides`,
          paragraphs: [
            `The Moon's gravity pulls on Earth's oceans. The water on the side facing the Moon bulges toward it — creating a high tide.`,
            `A second bulge forms on the opposite side of Earth. As Earth rotates, most coastlines get two high tides and two low tides each day.`,
          ],
          image:        '/explorer-assets/cosmos/l15-s4-tides.png',
          imageCaption: `The Moon's gravity pulls Earth's oceans into two bulges — creating tides`,
          vocab: [
            { word: 'tide',      definition: `The regular rise and fall of sea levels caused by the Moon's gravity pulling on Earth's oceans.`, audioPrompt: `Tide — the regular rise and fall of sea levels caused by the Moon's gravity pulling on Earth's oceans.` },
            { word: 'high tide', definition: `When sea level is at its highest on a coast. Most coastlines have two high tides every day as Earth rotates through the bulges.`, audioPrompt: `High tide — when sea level is at its highest on a coast. Most coastlines have two high tides every day as Earth rotates through the bulges.` },
          ],
        },
        {
          type:          'magazine',
          section:       5,
          totalSections: 6,
          headline:      `The Moon Is Drifting Away`,
          paragraphs: [
            `The Moon is slowly moving away from Earth — about 1.5 inches every year. When dinosaurs were alive, it was much closer.`,
            `The Moon is tidally locked to Earth — the same side always faces us. The far side was unknown to humans until spacecraft photographed it in 1959.`,
          ],
          image:        '/explorer-assets/cosmos/l15-s5-moon-drifting.png',
          imageCaption: `The Moon drifts away from Earth 1.5 inches each year — and always shows us the same face`,
          vocab: [
            { word: 'tidal locking',        definition: `When a moon orbits a planet at exactly the same rate it rotates — so the same side always faces the planet.`, audioPrompt: `Tidal locking — when a moon orbits a planet at exactly the same rate it rotates, so the same side always faces the planet.` },
            { word: 'far side of the Moon', definition: `The hemisphere of the Moon that never faces Earth. It was unknown to humans until spacecraft photographed it in 1959.`, audioPrompt: `Far side of the Moon — the hemisphere of the Moon that never faces Earth. It was unknown to humans until spacecraft photographed it in 1959.` },
          ],
        },
        {
          type:          'magazine',
          section:       6,
          totalSections: 6,
          headline:      `Humans Have Been There`,
          paragraphs: [
            `Between 1969 and 1972, twelve humans walked on the Moon. The last footprint was made in December 1972.`,
            `The Moon is the only place beyond Earth where humans have ever set foot. It's 238,900 miles away — close enough, in cosmic terms, to have visited.`,
          ],
          image:        '/explorer-assets/cosmos/l15-s6-astronaut-moon.png',
          imageCaption: `Twelve humans have walked on the Moon — the only world beyond Earth we've touched`,
          vocab: [
            { word: 'Apollo',        definition: `The NASA program that landed humans on the Moon between 1969 and 1972. Apollo 11 was the first landing.`, audioPrompt: `Apollo — the NASA program that landed humans on the Moon between 1969 and 1972. Apollo 11 was the first landing.` },
            { word: 'lunar surface', definition: `The ground of the Moon — covered in craters, dust, and rocks that are billions of years old.`, audioPrompt: `Lunar surface — the ground of the Moon, covered in craters, dust, and rocks that are billions of years old.` },
          ],
        },

        // PHASE 3 — INTERACTIVE
        {
          type:          'interactive',
          activityType:  'drag-match',
          instruction:   `Tap each card, then tap whether that moon phase is waxing or waning!`,
          guideText:     `Remember: waxing means the lit portion is growing toward full moon. Waning means it's shrinking toward new moon. New moon and full moon are the turning points — neither waxing nor waning. Can you sort these four phases correctly?`,
          columnHeaders: [`The Moon Phase`, `Waxing or Waning?`],
          items: [
            { image: 'l15-game-waxing-crescent.png',  label: `The Moon appearing as a thin lit sliver on the right side, growing brighter each night.`,                          correctMatch: 'waxing', objectPosition: 'center 50%', matchPhrase: `Waxing! A thin sliver on the right side that's getting bigger is a Waxing Crescent. The Moon has just passed New Moon and the lit portion is growing — waxing — toward the Full Moon. Each night the sliver gets a little larger.` },
            { image: 'l15-game-waxing-gibbous.png',   label: `The Moon appearing more than half-lit on the right side, still growing toward full.`,                             correctMatch: 'waxing', objectPosition: 'center 50%', matchPhrase: `Waxing! More than half-lit on the right and still growing is a Waxing Gibbous. The Moon is nearly full — almost the entire lit face is visible and it's still growing larger each night. One or two more nights and it will be a full moon.` },
            { image: 'l15-game-waning-gibbous.png',   label: `The Moon appearing more than half-lit on the left side, now shrinking after the full moon.`,                      correctMatch: 'waning', objectPosition: 'center 50%', matchPhrase: `Waning! More than half-lit on the left and getting smaller is a Waning Gibbous. The full moon has passed and now the lit portion is shrinking — waning — back toward the New Moon. The bright side has shifted from right to left.` },
            { image: 'l15-game-third-quarter.png',    label: `The Moon appearing exactly half-lit on the left side, shrinking toward the new moon.`,                           correctMatch: 'waning', objectPosition: 'center 50%', matchPhrase: `Waning! Exactly half-lit on the left is the Third Quarter. The Moon is halfway through its shrinking phase — waning — from full moon back to new moon. In roughly a week it will be a new moon again and the whole 29.5-day cycle will start over.` },
          ],
          buckets: [
            { id: 'waxing', label: `🌒 Waxing`, color: '#60A5FA' },
            { id: 'waning', label: `🌘 Waning`, color: '#818CF8' },
          ],
        },

        // PHASE 4 — MASTERY QUIZ
        {
          type:      'quiz',
          guideText: `Quiz time, {name}! Let's see what you've learned about the Moon. Answer all 6 questions to earn your Moon Watcher badge!`,
          questions: [
            {
              format:       'multiple-choice',
              question:     `Why does the Moon appear to change shape?`,
              options:      [`The Moon spins and shows different sides`, `Clouds cover different parts of it`, `We see different portions of its lit side as it orbits Earth`, `Earth's shadow falls on different parts of it`],
              correctIndex: 2,
            },
            {
              format:       'multiple-choice',
              question:     `What causes ocean tides?`,
              options:      [`The Sun heating the ocean`, `The Moon's gravitational pull on Earth's water`, `Earth's rotation creating centrifugal force`, `Wind pushing water toward shore`],
              correctIndex: 1,
            },
            {
              format:       'multiple-choice',
              question:     `What does "waxing" mean when describing moon phases?`,
              options:      [`The Moon is moving away from Earth`, `The lit portion is growing larger`, `The Moon is getting smaller in the sky`, `The Moon is getting brighter due to the Sun`],
              correctIndex: 1,
            },
            {
              format:        'true-false',
              question:      `The same side of the Moon always faces Earth because the Moon is tidally locked.`,
              correctAnswer: true,
            },
            {
              format:       'fill-blank',
              question:     `The Moon completes one full orbit around Earth every ___ days.`,
              options:      [`29.5`, `7`, `365`, `14`],
              correctIndex: 0,
            },
            {
              format:       'multiple-choice',
              question:     `Approximately how many high tides does most coastline experience each day?`,
              options:      [`One`, `Two`, `Four`, `Six`],
              correctIndex: 1,
            },
          ],
        },

        // PHASE 5 — REAL-WORLD CONNECTION
        {
          type:            'real-world',
          guideText:       `Start a Moon journal tonight — draw the shape of the Moon every night for a month and watch the full cycle unfold!`,
          familyAdventure: `If you live near a coast, plan a trip to observe tides at high and low tide. Mark where the water reaches on the beach or rocks. Come back 6 hours later and see how much it changed. If you're not near a coast, look up the tide chart for the nearest coastal city and discuss what causes the differences in timing and height.`,
          creativePrompt:  `For the next 4 weeks, go outside every night (or look out a window) and draw the shape of the Moon. Note the date and time. After 4 weeks, you'll have documented a complete lunar cycle! Can you predict what phase comes next? Compare your drawings to an official moon phase calendar.`,
        },

        // PHASE 6 — CELEBRATION
        {
          type:      'celebration',
          xpEarned:  50,
          badge:     'moon-watcher',
          badgeName: `Moon Watcher`,
          message:   `Brilliant work, {name}! You now know that the Moon's changing faces are not magic — they're geometry, the Sun's light falling on a sphere as it travels around our world. And that same Moon has been pulling the tides back and forth since before the first life crawled out of the ocean. Nova is so proud to share the universe with you.`,
        },
      ],
    },
  ],
};

// Log on module load — confirms lesson wired correctly + verifies image assets at runtime
(() => {
  const l    = cosmos_explorer_l15_screens.lessons[0];
  const mags = l.screens.filter(s => s.type === 'magazine').length;
  const game = l.screens.find(s => s.type === 'interactive')?.items?.length || 0;
  const quiz = l.screens.find(s => s.type === 'quiz')?.questions?.length || 0;
  console.log(`[LESSON-COSMOS-L15] Loaded: "The Moon: Phases and Tides" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
  Promise.all([
    fetch('/explorer-assets/cosmos/l15-s1-moon-geometry.png',   { method: 'HEAD' }),
    fetch('/explorer-assets/cosmos/l15-s2-waxing-sequence.png', { method: 'HEAD' }),
    fetch('/explorer-assets/cosmos/l15-s3-waning-sequence.png', { method: 'HEAD' }),
    fetch('/explorer-assets/cosmos/l15-s4-tides.png',           { method: 'HEAD' }),
    fetch('/explorer-assets/cosmos/l15-s5-moon-drifting.png',   { method: 'HEAD' }),
    fetch('/explorer-assets/cosmos/l15-s6-astronaut-moon.png',  { method: 'HEAD' }),
  ]).then(([r1, r2, r3, r4, r5, r6]) => {
    console.log(`[ASSET-CHECK-COSMOS-L15] moon-geometry: ${r1.ok}, waxing-sequence: ${r2.ok}, waning-sequence: ${r3.ok}, tides: ${r4.ok}, moon-drifting: ${r5.ok}, astronaut-moon: ${r6.ok}`);
  }).catch(() => {
    console.log('[ASSET-CHECK-COSMOS-L15] Could not verify image assets — network check failed');
  });
})();

export default cosmos_explorer_l15_screens;
