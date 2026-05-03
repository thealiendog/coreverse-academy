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

        // PHASE 2 — MAGAZINE STORY (4 sections)
        {
          type:          'magazine',
          section:       1,
          totalSections: 4,
          headline:      `Why the Moon Has Phases`,
          paragraphs: [
            `The Moon doesn't produce its own light — it reflects sunlight. As the Moon orbits Earth over about 29.5 days, we see different portions of its sunlit side from our vantage point on Earth. The Moon itself never changes shape. What changes is how much of its lit side is facing toward us.`,
            `When the Moon is positioned between Earth and the Sun, the sunlit side faces away from us — we see almost no light at all. This is a New Moon. When Earth is positioned between the Moon and the Sun, the fully lit side faces directly toward us — this is a Full Moon.`,
            `All the phase shapes in between — the crescents, the half-circles, the gibbous shapes — are simply the varying amounts of the Moon's sunlit side visible from Earth as it moves through its 29.5-day orbit. The Moon is always exactly half lit by the Sun. We just see different amounts of that lit half from different angles.`,
          ],
          image:        '/explorer-assets/cosmos/l15-magazine-moon-phases.png',
          imageCaption: `Moon phases — the changing view of the Moon's sunlit side as it orbits Earth over 29.5 days`,
          vocab: [
            { word: 'lunar phase', definition: `The shape of the Moon as seen from Earth — caused by the changing angle between the Moon, Earth, and the Sun as the Moon orbits Earth over 29.5 days.`, audioPrompt: `Lunar phase — the shape of the Moon as seen from Earth, caused by the changing angle between the Moon, Earth, and the Sun as the Moon orbits Earth over 29.5 days.` },
            { word: 'new moon',    definition: `The phase when the Moon is positioned between Earth and the Sun — its sunlit side faces away from us, so we see little or no Moon in the night sky.`,              audioPrompt: `New moon — the phase when the Moon is positioned between Earth and the Sun. Its sunlit side faces away from us, so we see little or no Moon in the night sky.` },
          ],
        },
        {
          type:          'magazine',
          section:       2,
          totalSections: 4,
          headline:      `The Eight Phases of the Moon`,
          paragraphs: [
            `The lunar cycle moves through eight recognised phases. Starting from the New Moon, the lit portion grows: Waxing Crescent (a small sliver on the right), First Quarter (half the Moon lit on the right), Waxing Gibbous (more than half lit and still growing). Then the Full Moon — the entire lit face visible.`,
            `After the Full Moon, the lit portion shrinks: Waning Gibbous (more than half lit on the left, shrinking), Third Quarter (half lit on the left), Waning Crescent (a small sliver on the left). Then back to New Moon — and the cycle begins again.`,
            `"Waxing" means the lit portion is growing. "Waning" means it's shrinking. Knowing these two words unlocks the entire system. If you see the bright side of the Moon on the right and it's getting bigger night by night, it's waxing. If the bright side is on the left and getting smaller, it's waning.`,
          ],
          image:        '/explorer-assets/cosmos/l15-magazine-eight-phases.png',
          imageCaption: `The eight lunar phases — from New Moon through waxing and full, to waning and back again`,
          vocab: [
            { word: 'waxing', definition: `A moon phase in which the visible lit portion is growing larger night by night — from New Moon through First Quarter to Full Moon, the Moon is waxing.`, audioPrompt: `Waxing — a moon phase in which the visible lit portion is growing larger night by night. From New Moon through First Quarter to Full Moon, the Moon is waxing.` },
            { word: 'waning', definition: `A moon phase in which the visible lit portion is growing smaller night by night — from Full Moon through Third Quarter back to New Moon, the Moon is waning.`, audioPrompt: `Waning — a moon phase in which the visible lit portion is growing smaller night by night. From Full Moon through Third Quarter back to New Moon, the Moon is waning.` },
          ],
        },
        {
          type:          'magazine',
          section:       3,
          totalSections: 4,
          headline:      `How the Moon Causes Tides`,
          paragraphs: [
            `The Moon's gravity pulls on everything on Earth — including the oceans. The ocean on the side of Earth directly facing the Moon gets pulled toward it, creating a bulge of water — a high tide. This effect is strongest because that side of Earth is closest to the Moon.`,
            `At the same time, the ocean on the opposite side of Earth also bulges outward — caused by the combined effects of Earth's rotation and the relative centrifugal forces in the Earth-Moon system. So there are two high-tide bulges on opposite sides of Earth at once.`,
            `As Earth rotates over about 24 hours, different coastlines pass through these two bulges. Most coastlines experience two high tides and two low tides every day — roughly 6 hours apart. Tides drive ocean currents, shape coastlines, and create unique ecosystems in tidal zones where the ocean regularly rises and retreats.`,
          ],
          image:        '/explorer-assets/cosmos/l15-magazine-tides.png',
          imageCaption: `Tides — the Moon's gravity pulling Earth's oceans into two bulges, rising and falling twice each day`,
          vocab: [
            { word: 'tide',         definition: `The regular rise and fall of sea levels caused by the Moon's gravitational pull on Earth's oceans — most coastlines experience two high tides and two low tides every day.`, audioPrompt: `Tide — the regular rise and fall of sea levels caused by the Moon's gravitational pull on Earth's oceans. Most coastlines experience two high tides and two low tides every day.` },
            { word: 'tidal zone',   definition: `The area of coastline between high and low tide marks — a unique ecosystem that is covered and uncovered by water twice daily, supporting specialised plants and animals.`,   audioPrompt: `Tidal zone — the area of coastline between high and low tide marks. A unique ecosystem that is covered and uncovered by water twice daily, supporting specialised plants and animals.` },
          ],
        },
        {
          type:          'magazine',
          section:       4,
          totalSections: 4,
          headline:      `Amazing Moon Facts`,
          paragraphs: [
            `The Moon is gradually moving away from Earth — about 1.5 inches every year. When the dinosaurs were alive, the Moon was much closer, tides were far more powerful, and days were shorter. Over billions of years, the Moon has been slowly drifting outward while Earth's rotation has been slowing down.`,
            `The Moon is tidally locked to Earth — meaning the same side always faces us. The Moon rotates at exactly the same rate that it orbits Earth, so we always see the same face. The far side of the Moon was entirely unknown to humans until spacecraft photographed it in 1959. It looks very different from the familiar near side.`,
            `Twelve humans have walked on the Moon — all Americans, between 1969 and 1972. The last time a human stood on the lunar surface was December 1972. The Moon is the only place beyond Earth where humans have ever set foot. It's 238,900 miles away — close enough, in cosmic terms, to have visited.`,
          ],
          image:        '/explorer-assets/cosmos/l15-magazine-moon-facts.png',
          imageCaption: `Amazing Moon facts — tidally locked, slowly drifting away, and the only world humans have visited`,
          vocab: [
            { word: 'tidal locking', definition: `When a moon orbits a planet at exactly the same rate it rotates, so the same side always faces the planet — Earth's Moon is tidally locked, so we always see the same face.`, audioPrompt: `Tidal locking — when a moon orbits a planet at exactly the same rate it rotates, so the same side always faces the planet. Earth's Moon is tidally locked, so we always see the same face.` },
            { word: 'far side of the Moon', definition: `The hemisphere of the Moon that never faces Earth — unknown until photographed by spacecraft in 1959. It looks very different from the near side, with fewer dark plains.`, audioPrompt: `Far side of the Moon — the hemisphere of the Moon that never faces Earth, unknown until photographed by spacecraft in 1959. It looks very different from the near side, with fewer dark plains.` },
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
    fetch('/explorer-assets/cosmos/l15-magazine-moon-phases.png',  { method: 'HEAD' }),
    fetch('/explorer-assets/cosmos/l15-magazine-eight-phases.png', { method: 'HEAD' }),
    fetch('/explorer-assets/cosmos/l15-magazine-tides.png',        { method: 'HEAD' }),
    fetch('/explorer-assets/cosmos/l15-magazine-moon-facts.png',   { method: 'HEAD' }),
  ]).then(([r1, r2, r3, r4]) => {
    console.log(`[ASSET-CHECK-COSMOS-L15] moon-phases: ${r1.ok}, eight-phases: ${r2.ok}, tides: ${r3.ok}, moon-facts: ${r4.ok}`);
  }).catch(() => {
    console.log('[ASSET-CHECK-COSMOS-L15] Could not verify image assets — network check failed');
  });
})();

export default cosmos_explorer_l15_screens;
