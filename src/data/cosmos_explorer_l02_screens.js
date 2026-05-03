// ============================================================
// COREVERSE EXPLORERS — Cosmos · Lesson 2
// "Gravity: Why Things Fall Down"
// Ages 6–8 | Guide: Nova | ExplorerLessonPlayer format
// ============================================================

const cosmos_explorer_l02_screens = {
  ageBand:   'explorers',
  subjectId: 'cosmos',
  guide:     'nova',
  lessons: [
    {
      id:        'cs-6-8-02',
      title:     `Gravity: Why Things Fall Down`,
      duration:  12,
      xpReward:  50,
      badge:     'gravity-guru',
      badgeName: `Gravity Guru`,
      screens: [
        // PHASE 1 — WELCOME
        {
          type:      'welcome',
          guideText: `Drop a pencil. It falls down. Every. Single. Time. But why? Why does everything fall DOWN and not sideways or up? The answer is one of the most powerful and mysterious forces in the universe: gravity. Today we're going to understand it — from falling apples all the way to galaxies.`,
        },

        // PHASE 2 — MAGAZINE STORY (4 sections)
        {
          type:          'magazine',
          section:       1,
          totalSections: 4,
          headline:      `What Is Gravity?`,
          paragraphs: [
            `Gravity is a force of attraction between all objects with mass. The more mass something has, the stronger its gravity. And here's the remarkable part: gravity holds the entire universe together.`,
            `Gravity is a pulling force between any two objects that have mass. Everything with mass has gravity — you, your pencil, your house, the Earth, the Sun. The bigger the mass, the stronger the pull.`,
            `Earth's gravity is what pulls you and everything around you toward the ground. Without it, you'd float off into space — and so would the oceans, the atmosphere, and everything else. Gravity is why Earth is a world at all.`,
          ],
          image:        '/explorer-assets/cosmos/l02-magazine-what-is-gravity.png',
          imageCaption: `Gravity — the pulling force between all objects with mass, from pencils to planets`,
          vocab: [
            { word: 'gravity', definition: `A pulling force that exists between any two objects with mass — the more mass, the stronger the pull. Gravity keeps you on the ground and planets in their orbits.`, audioPrompt: `Gravity — a pulling force that exists between any two objects with mass. The more mass, the stronger the pull. Gravity keeps you on the ground and planets in their orbits.` },
            { word: 'mass',    definition: `The amount of matter an object contains — the more mass something has, the stronger its gravitational pull on everything around it.`,                              audioPrompt: `Mass — the amount of matter an object contains. The more mass something has, the stronger its gravitational pull on everything around it.` },
          ],
        },
        {
          type:          'magazine',
          section:       2,
          totalSections: 4,
          headline:      `Isaac Newton and the Apple`,
          paragraphs: [
            `The story goes that scientist Isaac Newton was sitting under an apple tree in 1666 when an apple fell and hit his head. It made him wonder: why does everything fall toward Earth? Why not sideways, or up?`,
            `Newton realised something extraordinary: the same force pulling the apple down also keeps the Moon orbiting Earth and Earth orbiting the Sun. It wasn't two different forces — it was one. He called it gravity and wrote mathematical laws to describe exactly how it works.`,
            `Newton's laws of gravity were so precise that we still use them today — to calculate rocket trajectories, to predict planetary positions, and to understand how the universe is built.`,
          ],
          image:        '/explorer-assets/cosmos/l02-magazine-newton.png',
          imageCaption: `Newton's apple — the moment one scientist connected a falling fruit to the orbit of the Moon`,
          vocab: [
            { word: 'law of gravity', definition: `Isaac Newton's mathematical description of how gravity works — showing that the same force pulling objects to Earth also keeps moons, planets, and stars in their orbits.`, audioPrompt: `Law of gravity — Isaac Newton's mathematical description of how gravity works, showing that the same force pulling objects to Earth also keeps moons, planets, and stars in their orbits.` },
            { word: 'Isaac Newton',   definition: `A seventeenth-century scientist who discovered the mathematical laws of gravity and realised gravity is a universal force acting on everything with mass.`,              audioPrompt: `Isaac Newton — a seventeenth-century scientist who discovered the mathematical laws of gravity and realised gravity is a universal force acting on everything with mass.` },
          ],
        },
        {
          type:          'magazine',
          section:       3,
          totalSections: 4,
          headline:      `Gravity in Space`,
          paragraphs: [
            `Gravity is why planets orbit stars and moons orbit planets. Earth's gravity keeps the Moon from flying off into space. The Sun's gravity keeps all eight planets locked in their orbits. Gravity is the invisible architecture of our solar system.`,
            `Even galaxies — collections of billions of stars — are held together by gravity. The Milky Way, our galaxy, contains around 200 billion stars, all bound together by their mutual gravitational pull.`,
            `Without gravity, the entire universe would just be a scattered cloud of gas and particles — no stars, no planets, no you. Every world that has ever existed owes its existence to gravity.`,
          ],
          image:        '/explorer-assets/cosmos/l02-magazine-gravity-space.png',
          imageCaption: `Gravity at cosmic scale — holding moons, planets, stars, and entire galaxies together`,
          vocab: [
            { word: 'orbit',  definition: `The curved path an object follows around another due to gravity — the Moon orbits Earth, Earth orbits the Sun, all held in place by gravitational pull.`, audioPrompt: `Orbit — the curved path an object follows around another due to gravity. The Moon orbits Earth, Earth orbits the Sun, all held in place by gravitational pull.` },
            { word: 'galaxy', definition: `A vast collection of billions of stars, gas, and dust held together by gravity — our galaxy is called the Milky Way and contains around 200 billion stars.`,  audioPrompt: `Galaxy — a vast collection of billions of stars, gas, and dust held together by gravity. Our galaxy is called the Milky Way and contains around 200 billion stars.` },
          ],
        },
        {
          type:          'magazine',
          section:       4,
          totalSections: 4,
          headline:      `Zero Gravity — Sort Of`,
          paragraphs: [
            `Astronauts on the International Space Station appear to float — and many people think it's because there's no gravity in space. But that's not quite right. Earth's gravity still reaches the station!`,
            `Astronauts float because they and the station are both falling toward Earth at exactly the same speed. They never hit the ground because they're also moving sideways fast enough to keep missing it. This is called free fall — and it's basically what an orbit is: controlled falling around a planet.`,
            `So the next time you see an astronaut floating gracefully through a space station, remember: they're actually falling — they're just very good at it.`,
          ],
          image:        '/explorer-assets/cosmos/l02-magazine-free-fall.png',
          imageCaption: `Astronauts aren't weightless — they're in constant free fall, orbiting at tremendous speed`,
          vocab: [
            { word: 'free fall',                    definition: `The state of falling freely under gravity with nothing to stop you — astronauts on the ISS are in free fall, falling around Earth so fast they keep missing the ground.`, audioPrompt: `Free fall — the state of falling freely under gravity with nothing to stop you. Astronauts on the ISS are in free fall, falling around Earth so fast they keep missing the ground.` },
            { word: 'International Space Station',  definition: `A large spacecraft orbiting Earth where astronauts live and work — it orbits at about 28,000 kilometres per hour, fast enough to stay in continuous free fall.`,          audioPrompt: `International Space Station — a large spacecraft orbiting Earth where astronauts live and work. It orbits at about 28,000 kilometres per hour, fast enough to stay in continuous free fall.` },
          ],
        },

        // PHASE 3 — INTERACTIVE
        {
          type:          'interactive',
          activityType:  'drag-match',
          instruction:   `Tap each card, then tap whether it's a gravity myth or a gravity fact!`,
          guideText:     `Gravity is one of the most misunderstood forces in the universe. Some things people believe about it are true — and some are surprising myths. Can you sort these four statements correctly?`,
          columnHeaders: [`The Statement`, `Myth or Fact?`],
          items: [
            { image: 'l02-game-astronaut.png',    label: `"Astronauts float in space because there is no gravity up there."`,                                correctMatch: 'myth', objectPosition: 'center 50%', matchPhrase: `Gravity myth! Earth's gravity still reaches the space station — astronauts float because they and the station are both falling around Earth at the same speed. That's called free fall, not zero gravity.` },
            { image: 'l02-game-newtonmoon.png',   label: `"The same force that makes apples fall also keeps the Moon orbiting Earth."`,                     correctMatch: 'fact', objectPosition: 'center 50%', matchPhrase: `Gravity fact! Newton realised in 1666 that the same force pulling the apple to the ground also keeps the Moon in orbit. One invisible force — working at every scale in the universe.` },
            { image: 'l02-game-heavierfall.png',  label: `"A heavy book falls faster than a light pencil when dropped from the same height."`,              correctMatch: 'myth', objectPosition: 'center 50%', matchPhrase: `Gravity myth! Galileo proved 400 years ago that objects of different weights fall at the same speed when dropped together. Try it — a book and a pencil hit the ground at exactly the same time.` },
            { image: 'l02-game-galaxy.png',       label: `"Gravity holds billions of stars together to form galaxies."`,                                     correctMatch: 'fact', objectPosition: 'center 50%', matchPhrase: `Gravity fact! Gravity works at a universe-wide scale — it holds billions of stars together into galaxies. Without gravity, all that matter would drift apart as scattered clouds of gas and never form anything at all.` },
          ],
          buckets: [
            { id: 'myth', label: `🚫 Gravity Myth`, color: '#F59E0B' },
            { id: 'fact', label: `✅ Gravity Fact`, color: '#34D399' },
          ],
        },

        // PHASE 4 — MASTERY QUIZ
        {
          type:      'quiz',
          guideText: `Quiz time, {name}! Let's see what you've learned about gravity. Answer all 6 questions to earn your Gravity Guru badge!`,
          questions: [
            {
              format:       'multiple-choice',
              question:     `What is gravity?`,
              options:      [`A pushing force that makes things move`, `A pulling force between objects that have mass`, `The weight of an object`, `Air pressure pushing things down`],
              correctIndex: 1,
            },
            {
              format:       'multiple-choice',
              question:     `What keeps the Moon orbiting Earth?`,
              options:      [`The Moon's own engines`, `Magnetic fields`, `Earth's gravity`, `The Sun's light`],
              correctIndex: 2,
            },
            {
              format:       'multiple-choice',
              question:     `Why do astronauts float on the space station?`,
              options:      [`There is no gravity in space`, `They wear special floating suits`, `They are in free fall — falling around Earth at the same speed as the station`, `Space stations are made of anti-gravity material`],
              correctIndex: 2,
            },
            {
              format:        'true-false',
              question:      `A heavier object falls faster than a lighter one when dropped from the same height.`,
              correctAnswer: false,
            },
            {
              format:       'fill-blank',
              question:     `The bigger an object's ___, the stronger its gravitational pull.`,
              options:      [`mass`, `speed`, `colour`, `temperature`],
              correctIndex: 0,
            },
            {
              format:       'multiple-choice',
              question:     `Who wrote the mathematical laws of gravity after observing a falling apple?`,
              options:      [`Galileo Galilei`, `Isaac Newton`, `Albert Einstein`, `Nicolaus Copernicus`],
              correctIndex: 1,
            },
          ],
        },

        // PHASE 5 — REAL-WORLD CONNECTION
        {
          type:            'real-world',
          guideText:       `Brilliant work, {name}! You now know that gravity isn't just what makes things fall — it's the invisible force holding planets in orbit, keeping moons in place, and binding entire galaxies together. The cosmos is held together by this one remarkable pull. Nova is so proud to share the universe with you. Try this with your family!`,
          familyAdventure: `Go to a playground and notice gravity everywhere — on the slide, the swings, and when you jump. Then try this: spin a bucket of water in a full circle over your head. If you do it fast enough, the water won't fall out! This is exactly how orbits work — moving sideways fast enough to keep missing the ground.`,
          creativePrompt:  `Try Galileo's famous experiment! Drop two objects of very different weights from the same height at exactly the same time — a heavy book and a light pencil work well. Which one hits the ground first? (They should land together.) Galileo proved this 400 years ago. Try it with three different pairs of objects and record what you find.`,
        },

        // PHASE 6 — CELEBRATION
        {
          type:      'celebration',
          xpEarned:  50,
          badge:     'gravity-guru',
          badgeName: `Gravity Guru`,
          message:   `Brilliant work, {name}! You now know that gravity isn't just what makes things fall — it's the invisible force holding planets in orbit, keeping moons in place, and binding entire galaxies together. The cosmos is held together by this one remarkable pull. Nova is so proud to share the universe with you.`,
        },
      ],
    },
  ],
};

// Log on module load — confirms lesson wired correctly + verifies image assets at runtime
(() => {
  const l    = cosmos_explorer_l02_screens.lessons[0];
  const mags = l.screens.filter(s => s.type === 'magazine').length;
  const game = l.screens.find(s => s.type === 'interactive')?.items?.length || 0;
  const quiz = l.screens.find(s => s.type === 'quiz')?.questions?.length || 0;
  console.log(`[LESSON-COSMOS-L02] Loaded: "Gravity: Why Things Fall Down" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
  Promise.all([
    fetch('/explorer-assets/cosmos/l02-magazine-what-is-gravity.png', { method: 'HEAD' }),
    fetch('/explorer-assets/cosmos/l02-magazine-newton.png',          { method: 'HEAD' }),
    fetch('/explorer-assets/cosmos/l02-magazine-gravity-space.png',   { method: 'HEAD' }),
    fetch('/explorer-assets/cosmos/l02-magazine-free-fall.png',       { method: 'HEAD' }),
  ]).then(([r1, r2, r3, r4]) => {
    console.log(`[ASSET-CHECK-COSMOS-L02] what-is-gravity: ${r1.ok}, newton: ${r2.ok}, gravity-space: ${r3.ok}, free-fall: ${r4.ok}`);
  }).catch(() => {
    console.log('[ASSET-CHECK-COSMOS-L02] Could not verify image assets — network check failed');
  });
})();

export default cosmos_explorer_l02_screens;
