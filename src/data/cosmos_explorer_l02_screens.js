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

        // PHASE 2 — MAGAZINE STORY (6 sections)
        {
          type:          'magazine',
          section:       1,
          totalSections: 6,
          headline:      `What Is Gravity?`,
          paragraphs: [
            `Gravity is a pulling force between any two objects that have mass. Everything with mass has gravity — you, your pencil, your house, Earth, the Sun.`,
            `Earth's gravity is what pulls you toward the ground. Without it, you'd float off into space.`,
          ],
          image:        '/explorer-assets/cosmos/l02-s1-what-is-gravity.png',
          imageCaption: `Gravity — the invisible pull between every object with mass`,
          vocab: [
            { word: 'gravity', definition: `A pulling force between any two objects with mass — keeps you on the ground and planets in their orbits.`, audioPrompt: `Gravity — a pulling force between any two objects with mass. Keeps you on the ground and planets in their orbits.` },
            { word: 'force',   definition: `A push or pull that can move things. Gravity is one of the most important forces in the universe.`, audioPrompt: `Force — a push or pull that can move things. Gravity is one of the most important forces in the universe.` },
          ],
        },
        {
          type:          'magazine',
          section:       2,
          totalSections: 6,
          headline:      `Mass Matters`,
          paragraphs: [
            `The bigger an object's mass, the stronger its gravity. A pencil has tiny gravity. The Earth has huge gravity. The Sun has enormous gravity.`,
            `That's why you fall toward Earth, not the other way around — Earth's mass is way bigger than yours, so its pull wins.`,
          ],
          image:        '/explorer-assets/cosmos/l02-s2-mass-matters.png',
          imageCaption: `More mass = stronger gravity. The Sun pulls the hardest of all.`,
          vocab: [
            { word: 'mass',    definition: `How much stuff is inside an object. Bigger mass means stronger gravity.`, audioPrompt: `Mass — how much stuff is inside an object. Bigger mass means stronger gravity.` },
            { word: 'attract', definition: `To pull toward. Gravity attracts every object toward every other object with mass.`, audioPrompt: `Attract — to pull toward. Gravity attracts every object toward every other object with mass.` },
          ],
        },
        {
          type:          'magazine',
          section:       3,
          totalSections: 6,
          headline:      `Newton's Apple`,
          paragraphs: [
            `In 1666, scientist Isaac Newton was sitting under an apple tree when an apple fell on his head. It made him wonder: why does everything fall toward Earth?`,
            `He asked a question nobody had asked before — and his curiosity led to one of the biggest discoveries in science.`,
          ],
          image:        '/explorer-assets/cosmos/l02-s3-newton-apple.png',
          imageCaption: `One falling apple — and a question that changed science forever`,
          vocab: [
            { word: 'Isaac Newton', definition: `A scientist who discovered the laws of gravity in 1666 after watching an apple fall from a tree.`, audioPrompt: `Isaac Newton — a scientist who discovered the laws of gravity in 1666 after watching an apple fall from a tree.` },
            { word: 'curiosity',    definition: `Wanting to know why things happen. Newton's curiosity about a falling apple led to one of the biggest discoveries in science.`, audioPrompt: `Curiosity — wanting to know why things happen. Newton's curiosity about a falling apple led to one of the biggest discoveries in science.` },
          ],
        },
        {
          type:          'magazine',
          section:       4,
          totalSections: 6,
          headline:      `One Force, Everywhere`,
          paragraphs: [
            `Newton realised something extraordinary: the same force pulling the apple down also keeps the Moon orbiting Earth.`,
            `It wasn't two different forces — it was ONE. Gravity works on apples, moons, planets, and stars. One invisible force, everywhere.`,
          ],
          image:        '/explorer-assets/cosmos/l02-s4-one-force.png',
          imageCaption: `The same force pulls the apple AND keeps the Moon in orbit — gravity is universal`,
          vocab: [
            { word: 'universal', definition: `Working everywhere, at every scale. Gravity is universal — it works on apples, moons, and entire galaxies.`, audioPrompt: `Universal — working everywhere, at every scale. Gravity is universal. It works on apples, moons, and entire galaxies.` },
            { word: 'discovery', definition: `Finding out something nobody knew before. Newton's discovery of gravity changed science forever.`, audioPrompt: `Discovery — finding out something nobody knew before. Newton's discovery of gravity changed science forever.` },
          ],
        },
        {
          type:          'magazine',
          section:       5,
          totalSections: 6,
          headline:      `Gravity in Space`,
          paragraphs: [
            `Gravity is why planets orbit stars and moons orbit planets. The Sun's gravity locks all 8 planets in their orbits.`,
            `Even galaxies — collections of billions of stars — are held together by gravity. Our galaxy, the Milky Way, has 200 billion stars.`,
          ],
          image:        '/explorer-assets/cosmos/l02-s5-cosmic-scale.png',
          imageCaption: `Gravity holds it all together — from moons to entire galaxies of stars`,
          vocab: [
            { word: 'orbit',  definition: `The curved path one object follows around another, held in place by gravity. The Moon orbits Earth, Earth orbits the Sun.`, audioPrompt: `Orbit — the curved path one object follows around another, held in place by gravity. The Moon orbits Earth, Earth orbits the Sun.` },
            { word: 'galaxy', definition: `A vast collection of billions of stars held together by gravity. Our galaxy is called the Milky Way.`, audioPrompt: `Galaxy — a vast collection of billions of stars held together by gravity. Our galaxy is called the Milky Way.` },
          ],
        },
        {
          type:          'magazine',
          section:       6,
          totalSections: 6,
          headline:      `Astronauts Are Falling`,
          paragraphs: [
            `Astronauts on the Space Station appear to float — but it's not because there's no gravity. Earth's gravity still reaches them.`,
            `They float because they're falling toward Earth at the same speed as the station — and moving sideways fast enough to keep missing the ground.`,
          ],
          image:        '/explorer-assets/cosmos/l02-s6-free-fall.png',
          imageCaption: `Astronauts aren't weightless — they're falling around Earth, just very fast`,
          vocab: [
            { word: 'free fall',     definition: `Falling freely under gravity with nothing to stop you. Astronauts on the Space Station are in free fall, falling around Earth.`, audioPrompt: `Free fall — falling freely under gravity with nothing to stop you. Astronauts on the Space Station are in free fall, falling around Earth.` },
            { word: 'Space Station', definition: `A large spacecraft orbiting Earth where astronauts live and work. It moves so fast it stays in continuous free fall.`, audioPrompt: `Space Station — a large spacecraft orbiting Earth where astronauts live and work. It moves so fast it stays in continuous free fall.` },
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
    fetch('/explorer-assets/cosmos/l02-s1-what-is-gravity.png', { method: 'HEAD' }),
    fetch('/explorer-assets/cosmos/l02-s2-mass-matters.png',    { method: 'HEAD' }),
    fetch('/explorer-assets/cosmos/l02-s3-newton-apple.png',    { method: 'HEAD' }),
    fetch('/explorer-assets/cosmos/l02-s4-one-force.png',       { method: 'HEAD' }),
    fetch('/explorer-assets/cosmos/l02-s5-cosmic-scale.png',    { method: 'HEAD' }),
    fetch('/explorer-assets/cosmos/l02-s6-free-fall.png',       { method: 'HEAD' }),
  ]).then(([r1, r2, r3, r4, r5, r6]) => {
    console.log(`[ASSET-CHECK-COSMOS-L02] what-is-gravity: ${r1.ok}, mass-matters: ${r2.ok}, newton-apple: ${r3.ok}, one-force: ${r4.ok}, cosmic-scale: ${r5.ok}, free-fall: ${r6.ok}`);
  }).catch(() => {
    console.log('[ASSET-CHECK-COSMOS-L02] Could not verify image assets — network check failed');
  });
})();

export default cosmos_explorer_l02_screens;
