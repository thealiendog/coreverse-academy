// ============================================================
// COREVERSE EXPLORERS — Cosmos · Lesson 1
// "The Solar System: 8 Planets and Us"
// Ages 6–8 | Guide: Nova | ExplorerLessonPlayer format
// ============================================================

const cosmos_explorer_l01_screens = {
  ageBand:   'explorers',
  subjectId: 'cosmos',
  guide:     'nova',
  lessons: [
    {
      id:        'cs-6-8-01',
      title:     `The Solar System: 8 Planets and Us`,
      duration:  12,
      xpReward:  50,
      badge:     'planet-explorer',
      badgeName: `Planet Explorer`,
      screens: [
        // PHASE 1 — WELCOME
        {
          type:      'welcome',
          guideText: `You are standing on a rock hurtling through space at 67,000 miles per hour right now. That rock is Earth, and it's one of eight planets circling a star we call the Sun. Welcome to our solar system — the most amazing neighbourhood in the known universe. Ready to explore it?`,
        },

        // PHASE 2 — MAGAZINE STORY (4 sections)
        {
          type:          'magazine',
          section:       1,
          totalSections: 4,
          headline:      `The Sun: The Center of Everything`,
          paragraphs: [
            `Our solar system has 8 planets orbiting the Sun. Each one is completely different — and Earth is the only one we know of with life. At the centre of it all is the Sun.`,
            `The Sun is a star — a giant ball of hot gas so enormous that over a million Earths could fit inside it. Everything in our solar system orbits the Sun because of its massive gravity.`,
            `The Sun provides the light and heat that makes life on Earth possible. Without it, Earth would be a frozen, dark rock drifting through space — silent and lifeless.`,
          ],
          image:        '/explorer-assets/cosmos/l01-magazine-sun.png',
          imageCaption: `The Sun — our star, our warmth, and the gravitational anchor of everything`,
          vocab: [
            { word: 'star',  definition: `A massive ball of hot gas that produces its own light and heat through nuclear reactions — our Sun is a star, and there are billions more across the universe.`, audioPrompt: `Star — a massive ball of hot gas that produces its own light and heat through nuclear reactions. Our Sun is a star, and there are billions more across the universe.` },
            { word: 'orbit', definition: `The curved path an object takes around another object in space — Earth orbits the Sun, and the Moon orbits Earth, all held in place by gravity.`,               audioPrompt: `Orbit — the curved path an object takes around another object in space. Earth orbits the Sun, and the Moon orbits Earth, all held in place by gravity.` },
          ],
        },
        {
          type:          'magazine',
          section:       2,
          totalSections: 4,
          headline:      `The Inner Planets: Rocky and Close`,
          paragraphs: [
            `The four planets closest to the Sun — Mercury, Venus, Earth, and Mars — are called the inner planets. They're made of rock and metal, with solid surfaces you could actually stand on.`,
            `Mercury is tiny and has wild temperature swings — scorching hot during the day and freezing cold at night. Venus is the hottest planet in our solar system (even hotter than Mercury!) because its thick atmosphere traps heat like a greenhouse. Earth is our perfect home. And Mars, the red planet, is home to the largest volcano in the entire solar system.`,
            `These rocky worlds are neighbours in space — but they couldn't be more different from each other.`,
          ],
          image:        '/explorer-assets/cosmos/l01-magazine-inner-planets.png',
          imageCaption: `Mercury, Venus, Earth, Mars — four rocky neighbours, four completely different worlds`,
          vocab: [
            { word: 'inner planets', definition: `The four rocky planets closest to the Sun — Mercury, Venus, Earth, and Mars — made of rock and metal with solid surfaces.`,                                                        audioPrompt: `Inner planets — the four rocky planets closest to the Sun: Mercury, Venus, Earth, and Mars. They're made of rock and metal and have solid surfaces.` },
            { word: 'atmosphere',    definition: `The layer of gases surrounding a planet — Venus's thick atmosphere traps heat so effectively it becomes the hottest planet despite being farther from the Sun than Mercury.`, audioPrompt: `Atmosphere — the layer of gases surrounding a planet. Venus's thick atmosphere traps heat so effectively that it becomes the hottest planet, despite being farther from the Sun than Mercury.` },
          ],
        },
        {
          type:          'magazine',
          section:       3,
          totalSections: 4,
          headline:      `The Outer Planets: Giants Made of Gas`,
          paragraphs: [
            `Beyond Mars come the four outer planets — Jupiter, Saturn, Uranus, and Neptune. These are the gas giants: enormous worlds made mostly of gas and liquid, with no solid surface to stand on.`,
            `Jupiter is the biggest planet of all — so large that every other planet in our solar system could fit inside it. Saturn has stunning rings made of ice and rock that stretch thousands of kilometres into space. Uranus is tilted so far on its side it essentially rolls around the Sun. Neptune has winds faster than any hurricane on Earth.`,
            `These giants are cold, wild, and impossibly vast — worlds on a scale that's hard to imagine from here on tiny, perfect Earth.`,
          ],
          image:        '/explorer-assets/cosmos/l01-magazine-outer-planets.png',
          imageCaption: `Jupiter, Saturn, Uranus, Neptune — gas giants of extraordinary scale`,
          vocab: [
            { word: 'gas giant', definition: `A very large planet made mostly of gas and liquid — Jupiter, Saturn, Uranus, and Neptune are all gas giants with no solid surface to land on.`,          audioPrompt: `Gas giant — a very large planet made mostly of gas and liquid. Jupiter, Saturn, Uranus, and Neptune are all gas giants with no solid surface to land on.` },
            { word: 'rings',     definition: `Bands of ice and rock particles orbiting a planet — Saturn's rings are the most spectacular in our solar system, stretching thousands of kilometres wide.`, audioPrompt: `Rings — bands of ice and rock particles orbiting a planet. Saturn's rings are the most spectacular in our solar system, stretching thousands of kilometres wide.` },
          ],
        },
        {
          type:          'magazine',
          section:       4,
          totalSections: 4,
          headline:      `The Asteroid Belt and Beyond`,
          paragraphs: [
            `Between Mars and Jupiter lies the asteroid belt — millions of rocky objects of all sizes orbiting the Sun. It's the boundary between the inner rocky planets and the outer gas giants.`,
            `Beyond Neptune is the Kuiper Belt, a region of icy objects including Pluto — once considered our ninth planet, now classified as a dwarf planet. Further still is the Oort Cloud, a vast shell of icy objects at the very edge of our solar system. Comets that swing past Earth originate here.`,
            `Our solar system is far larger than just eight planets. It stretches into the dark, cold reaches of space — and scientists are still discovering what lives out there.`,
          ],
          image:        '/explorer-assets/cosmos/l01-magazine-asteroid-belt.png',
          imageCaption: `Beyond the planets — asteroid belts, dwarf planets, and the Oort Cloud at the edge`,
          vocab: [
            { word: 'asteroid belt', definition: `A region between Mars and Jupiter containing millions of rocky objects orbiting the Sun — it marks the boundary between the inner and outer solar system.`, audioPrompt: `Asteroid belt — a region between Mars and Jupiter containing millions of rocky objects orbiting the Sun. It marks the boundary between the inner and outer solar system.` },
            { word: 'dwarf planet',  definition: `A space object that orbits the Sun and is roughly spherical, but hasn't cleared its orbit of other objects — Pluto is the most famous dwarf planet.`,   audioPrompt: `Dwarf planet — a space object that orbits the Sun and is roughly spherical, but hasn't cleared its orbit of other objects. Pluto is the most famous dwarf planet.` },
          ],
        },

        // PHASE 3 — INTERACTIVE
        {
          type:          'interactive',
          activityType:  'drag-match',
          instruction:   `Tap each planet card, then tap whether it's a rocky planet or a gas giant!`,
          guideText:     `Our solar system's 8 planets fall into two groups — rocky planets made of rock and metal, and gas giants made mostly of gas and liquid. Can you sort these four famous planets into the right group?`,
          columnHeaders: [`The Planet`, `Rocky or Gas?`],
          items: [
            { image: 'l01-game-mars.png',    label: `Mars — the red planet with the largest volcano in the solar system.`,      correctMatch: 'rocky', objectPosition: 'center 50%', matchPhrase: `Rocky planet! Mars is one of the four inner planets — made of rock and metal, with a solid surface you could stand on. It's even home to the largest volcano in the entire solar system!` },
            { image: 'l01-game-jupiter.png', label: `Jupiter — so large that all other planets could fit inside it.`,           correctMatch: 'gas',   objectPosition: 'center 50%', matchPhrase: `Gas giant! Jupiter is the biggest planet of all — so enormous that every other planet in our solar system could fit inside it. No solid surface to stand on, just gas and swirling storms.` },
            { image: 'l01-game-venus.png',   label: `Venus — the hottest planet, even hotter than Mercury.`,                   correctMatch: 'rocky', objectPosition: 'center 50%', matchPhrase: `Rocky planet! Venus is one of Earth's neighbours — made of rock and metal. Its thick atmosphere traps heat so well it became the hottest planet, even beating Mercury, which is closer to the Sun.` },
            { image: 'l01-game-saturn.png',  label: `Saturn — famous for its stunning rings of ice and rock.`,                 correctMatch: 'gas',   objectPosition: 'center 50%', matchPhrase: `Gas giant! Saturn is mostly gas and liquid — no solid ground anywhere. And those breathtaking rings stretching thousands of kilometres into space? Made of ice and rock.` },
          ],
          buckets: [
            { id: 'rocky', label: `🪨 Rocky Planet`, color: '#F59E0B' },
            { id: 'gas',   label: `🌌 Gas Giant`,    color: '#34D399' },
          ],
        },

        // PHASE 4 — MASTERY QUIZ
        {
          type:      'quiz',
          guideText: `Quiz time, {name}! Let's see what you've learned about our solar system. Answer all 6 questions to earn your Planet Explorer badge!`,
          questions: [
            {
              format:       'multiple-choice',
              question:     `How many planets are in our solar system?`,
              options:      [`7`, `8`, `9`, `12`],
              correctIndex: 1,
            },
            {
              format:       'multiple-choice',
              question:     `Which is the hottest planet in our solar system?`,
              options:      [`Mercury`, `Venus`, `Mars`, `Jupiter`],
              correctIndex: 1,
            },
            {
              format:       'multiple-choice',
              question:     `What are Saturn's rings made of?`,
              options:      [`Gold and silver`, `Gas and clouds`, `Ice and rock`, `Dust and fire`],
              correctIndex: 2,
            },
            {
              format:        'true-false',
              question:      `Jupiter is large enough to fit all other planets in our solar system inside it.`,
              correctAnswer: true,
            },
            {
              format:       'fill-blank',
              question:     `The asteroid belt sits between Mars and ___, separating the inner and outer planets.`,
              options:      [`Jupiter`, `Saturn`, `Neptune`, `Uranus`],
              correctIndex: 0,
            },
            {
              format:       'multiple-choice',
              question:     `What is Pluto classified as today?`,
              options:      [`A full planet`, `A dwarf planet`, `A moon`, `An asteroid`],
              correctIndex: 1,
            },
          ],
        },

        // PHASE 5 — REAL-WORLD CONNECTION
        {
          type:            'real-world',
          guideText:       `Brilliant work, {name}! You now know all 8 planets, why Venus beats Mercury for hottest, and what waits beyond Neptune at the edge of our solar system. The cosmos is huge — and you just learned something most kids don't even know exists. Nova is so proud to share the universe with you. Try this with your family tonight!`,
          familyAdventure: `On a clear night, go outside and try to spot planets with your naked eye. Venus is often the brightest object in the sky after the Moon. Mars looks reddish. Download a free stargazing app like SkyView — point your phone at the sky and it will tell you exactly what you're looking at!`,
          creativePrompt:  `Try building a scale model of the solar system! Use a basketball to represent the Sun. Mercury would be a grain of sand. Earth would be a peppercorn. Jupiter would be a golf ball. Lay them out in your backyard or down a long hallway — and notice how much empty space there is between each one. That's the real solar system.`,
        },

        // PHASE 6 — CELEBRATION
        {
          type:      'celebration',
          xpEarned:  50,
          badge:     'planet-explorer',
          badgeName: `Planet Explorer`,
          message:   `Brilliant work, {name}! You now know all 8 planets, why Venus beats Mercury for hottest, and what waits beyond Neptune at the edge of our solar system. The cosmos is huge — and you just learned something most kids don't even know exists. Nova is so proud to share the universe with you.`,
        },
      ],
    },
  ],
};

// Log on module load — confirms lesson wired correctly + verifies image assets at runtime
(() => {
  const l    = cosmos_explorer_l01_screens.lessons[0];
  const mags = l.screens.filter(s => s.type === 'magazine').length;
  const game = l.screens.find(s => s.type === 'interactive')?.items?.length || 0;
  const quiz = l.screens.find(s => s.type === 'quiz')?.questions?.length || 0;
  console.log(`[LESSON-COSMOS-L01] Loaded: "The Solar System: 8 Planets and Us" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
  Promise.all([
    fetch('/explorer-assets/cosmos/l01-magazine-sun.png',            { method: 'HEAD' }),
    fetch('/explorer-assets/cosmos/l01-magazine-inner-planets.png',  { method: 'HEAD' }),
    fetch('/explorer-assets/cosmos/l01-magazine-outer-planets.png',  { method: 'HEAD' }),
    fetch('/explorer-assets/cosmos/l01-magazine-asteroid-belt.png',  { method: 'HEAD' }),
  ]).then(([r1, r2, r3, r4]) => {
    console.log(`[ASSET-CHECK-COSMOS-L01] sun: ${r1.ok}, inner-planets: ${r2.ok}, outer-planets: ${r3.ok}, asteroid-belt: ${r4.ok}`);
  }).catch(() => {
    console.log('[ASSET-CHECK-COSMOS-L01] Could not verify image assets — network check failed');
  });
})();

export default cosmos_explorer_l01_screens;
