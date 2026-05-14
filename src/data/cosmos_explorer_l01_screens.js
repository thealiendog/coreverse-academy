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

        // PHASE 2 — MAGAZINE STORY (6 sections)
        {
          type:          'magazine',
          section:       1,
          totalSections: 6,
          headline:      `8 Planets and a Star`,
          paragraphs: [
            `Our solar system has 8 planets orbiting a star we call the Sun. Each planet is completely different.`,
            `Earth is one of these planets — and the only one we know of with life. We are part of an incredible neighborhood in space.`,
          ],
          image:        '/explorer-assets/cosmos/l01-s1-solar-system.png',
          imageCaption: `Our solar system — 8 planets, one star, and our home`,
          vocab: [
            { word: 'solar system', definition: `Our Sun and everything that orbits it — including 8 planets, asteroids, comets, and more.`, audioPrompt: `Solar system — our Sun and everything that orbits it, including 8 planets, asteroids, comets, and more.` },
            { word: 'star',         definition: `A giant ball of hot gas in space. Our Sun is a star. There are billions of them out there.`, audioPrompt: `Star — a giant ball of hot gas in space. Our Sun is a star. There are billions of them out there.` },
          ],
        },
        {
          type:          'magazine',
          section:       2,
          totalSections: 6,
          headline:      `The Sun Holds Everything`,
          paragraphs: [
            `The Sun is a star — a giant ball of hot gas so enormous that over a million Earths could fit inside it.`,
            `Everything in our solar system orbits the Sun because of its massive gravity. Without the Sun, Earth would be a frozen, lifeless rock.`,
          ],
          image:        '/explorer-assets/cosmos/l01-s2-sun.png',
          imageCaption: `The Sun's gravity holds the whole solar system together`,
          vocab: [
            { word: 'gravity', definition: `The invisible force that pulls things together. Gravity holds the planets in their orbits around the Sun.`, audioPrompt: `Gravity — the invisible force that pulls things together. Gravity holds the planets in their orbits around the Sun.` },
            { word: 'orbit',   definition: `To go around something in a steady path. The planets orbit the Sun — round and round, never stopping.`, audioPrompt: `Orbit — to go around something in a steady path. The planets orbit the Sun, round and round, never stopping.` },
          ],
        },
        {
          type:          'magazine',
          section:       3,
          totalSections: 6,
          headline:      `The Inner Planets`,
          paragraphs: [
            `The four planets closest to the Sun — Mercury, Venus, Earth, and Mars — are called the inner planets. They have solid surfaces made of rock and metal.`,
            `Mercury is tiny with wild temperature swings. Venus is the hottest planet of all. Earth is our home. Mars is the red planet.`,
          ],
          image:        '/explorer-assets/cosmos/l01-s3-inner-planets.png',
          imageCaption: `The 4 inner planets — rocky worlds with solid ground you could stand on`,
          vocab: [
            { word: 'inner planets', definition: `The four planets closest to the Sun — Mercury, Venus, Earth, and Mars. All made of rock and metal.`, audioPrompt: `Inner planets — the four planets closest to the Sun: Mercury, Venus, Earth, and Mars. All made of rock and metal.` },
            { word: 'surface',       definition: `The solid outside of a planet — what you could walk on. The inner planets have surfaces; the outer planets don't.`, audioPrompt: `Surface — the solid outside of a planet, what you could walk on. The inner planets have surfaces; the outer planets don't.` },
          ],
        },
        {
          type:          'magazine',
          section:       4,
          totalSections: 6,
          headline:      `The Outer Planets`,
          paragraphs: [
            `Beyond Mars come the four outer planets — Jupiter, Saturn, Uranus, and Neptune. These are gas giants, with no solid surface.`,
            `Jupiter is the biggest of them all. Saturn has stunning rings of ice and rock. Uranus rolls on its side. Neptune has the fastest winds.`,
          ],
          image:        '/explorer-assets/cosmos/l01-s4-outer-planets.png',
          imageCaption: `The 4 outer planets — gas giants with no solid surface to stand on`,
          vocab: [
            { word: 'outer planets', definition: `The four planets farthest from the Sun — Jupiter, Saturn, Uranus, and Neptune. All gas giants.`, audioPrompt: `Outer planets — the four planets farthest from the Sun: Jupiter, Saturn, Uranus, and Neptune. All gas giants.` },
            { word: 'gas giant',     definition: `A huge planet made mostly of gas and liquid — no solid ground. Jupiter is the biggest gas giant.`, audioPrompt: `Gas giant — a huge planet made mostly of gas and liquid, no solid ground. Jupiter is the biggest gas giant.` },
          ],
        },
        {
          type:          'magazine',
          section:       5,
          totalSections: 6,
          headline:      `The Asteroid Belt`,
          paragraphs: [
            `Between Mars and Jupiter lies the asteroid belt — millions of rocky objects of all sizes orbiting the Sun together.`,
            `It's the boundary between the inner rocky planets and the outer gas giants. Two very different neighborhoods in space.`,
          ],
          image:        '/explorer-assets/cosmos/l01-s5-asteroid-belt.png',
          imageCaption: `The asteroid belt — the boundary between rocky planets and gas giants`,
          vocab: [
            { word: 'asteroid belt', definition: `A ring of millions of rocky objects orbiting between Mars and Jupiter — the boundary between inner and outer planets.`, audioPrompt: `Asteroid belt — a ring of millions of rocky objects orbiting between Mars and Jupiter, the boundary between inner and outer planets.` },
            { word: 'boundary',      definition: `The line between two different areas. The asteroid belt is the boundary between rocky planets and gas giants.`, audioPrompt: `Boundary — the line between two different areas. The asteroid belt is the boundary between rocky planets and gas giants.` },
          ],
        },
        {
          type:          'magazine',
          section:       6,
          totalSections: 6,
          headline:      `Beyond the Planets`,
          paragraphs: [
            `Far beyond Neptune is the Kuiper Belt — a region of icy objects. Pluto lives here. It was once called a planet; now it's a dwarf planet.`,
            `Our solar system is much bigger than just 8 planets. It stretches into the dark, cold edges of space.`,
          ],
          image:        '/explorer-assets/cosmos/l01-s6-beyond-planets.png',
          imageCaption: `Our solar system goes far beyond the 8 planets — to the icy edges of space`,
          vocab: [
            { word: 'Kuiper Belt',  definition: `A region of icy objects far beyond Neptune. Pluto lives here — and so do many comets.`, audioPrompt: `Kuiper Belt — a region of icy objects far beyond Neptune. Pluto lives here, and so do many comets.` },
            { word: 'dwarf planet', definition: `A small planet-like object that orbits the Sun but isn't big enough to be a full planet. Pluto is a dwarf planet.`, audioPrompt: `Dwarf planet — a small planet-like object that orbits the Sun but isn't big enough to be a full planet. Pluto is a dwarf planet.` },
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
    fetch('/explorer-assets/cosmos/l01-s1-solar-system.png', { method: 'HEAD' }),
    fetch('/explorer-assets/cosmos/l01-s2-sun.png',          { method: 'HEAD' }),
    fetch('/explorer-assets/cosmos/l01-s3-inner-planets.png',{ method: 'HEAD' }),
    fetch('/explorer-assets/cosmos/l01-s4-outer-planets.png',{ method: 'HEAD' }),
    fetch('/explorer-assets/cosmos/l01-s5-asteroid-belt.png',{ method: 'HEAD' }),
    fetch('/explorer-assets/cosmos/l01-s6-beyond-planets.png',{ method: 'HEAD' }),
  ]).then(([r1, r2, r3, r4, r5, r6]) => {
    console.log(`[ASSET-CHECK-COSMOS-L01] solar-system: ${r1.ok}, sun: ${r2.ok}, inner-planets: ${r3.ok}, outer-planets: ${r4.ok}, asteroid-belt: ${r5.ok}, beyond-planets: ${r6.ok}`);
  }).catch(() => {
    console.log('[ASSET-CHECK-COSMOS-L01] Could not verify image assets — network check failed');
  });
})();

export default cosmos_explorer_l01_screens;
