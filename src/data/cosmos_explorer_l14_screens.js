// ============================================================
// COREVERSE EXPLORERS — Cosmos · Lesson 14
// "Stars and Constellations"
// Ages 6–8 | Guide: Nova | ExplorerLessonPlayer format
// ============================================================

const cosmos_explorer_l14_screens = {
  ageBand:   'explorers',
  subjectId: 'cosmos',
  guide:     'nova',
  lessons: [
    {
      id:        'cs-6-8-14',
      title:     `Stars and Constellations`,
      duration:  12,
      xpReward:  50,
      badge:     'star-gazer',
      badgeName: `Star Gazer`,
      screens: [
        // PHASE 1 — WELCOME
        {
          type:      'welcome',
          guideText: `Every star you can see in the night sky is a sun — some much bigger and brighter than our own. They look tiny only because they're unimaginably far away. The closest star to Earth other than our Sun is so far that light takes 4.2 years to travel from it to us. And there are more stars in the universe than grains of sand on all of Earth's beaches.`,
        },

        // PHASE 2 — MAGAZINE STORY (6 sections)
        {
          type:          'magazine',
          section:       1,
          totalSections: 6,
          headline:      `What Is a Star?`,
          paragraphs: [
            `A star is a massive ball of hot plasma — superheated gas — held together by gravity and powered by nuclear fusion.`,
            `In a star's core, hydrogen atoms are squeezed together until they fuse into helium, releasing tremendous amounts of energy as light and heat.`,
          ],
          image:        '/explorer-assets/cosmos/l14-s1-what-is-a-star.png',
          imageCaption: `A star — a ball of plasma powered by nuclear fusion at its core`,
          vocab: [
            { word: 'plasma',         definition: `A state of matter like superheated gas. Stars are made almost entirely of plasma — the fourth state of matter beyond solid, liquid, and gas.`, audioPrompt: `Plasma — a state of matter like superheated gas. Stars are made almost entirely of plasma, the fourth state of matter beyond solid, liquid, and gas.` },
            { word: 'nuclear fusion', definition: `The process that powers stars. Hydrogen atoms fuse together to form helium, releasing enormous energy as light and heat.`, audioPrompt: `Nuclear fusion — the process that powers stars. Hydrogen atoms fuse together to form helium, releasing enormous energy as light and heat.` },
          ],
        },
        {
          type:          'magazine',
          section:       2,
          totalSections: 6,
          headline:      `Sizes of Stars`,
          paragraphs: [
            `Our Sun is an average-sized star. Stars range from tiny red dwarfs — smaller and dimmer than our Sun — to supergiants beyond imagination.`,
            `There are stars so enormous that if placed where our Sun is, they would extend past Jupiter's orbit. Over a billion kilometres across.`,
          ],
          image:        '/explorer-assets/cosmos/l14-s2-star-sizes.png',
          imageCaption: `From tiny red dwarfs to massive supergiants, stars span a vast range of sizes`,
          vocab: [
            { word: 'red dwarf',  definition: `A small, dim star — smaller and cooler than our Sun, but still a real star. Red dwarfs are the most common type of star in the galaxy.`, audioPrompt: `Red dwarf — a small, dim star, smaller and cooler than our Sun, but still a real star. Red dwarfs are the most common type of star in the galaxy.` },
            { word: 'supergiant', definition: `An enormous star much bigger than our Sun. Some supergiants are over a billion kilometres across — large enough to swallow our entire inner solar system.`, audioPrompt: `Supergiant — an enormous star much bigger than our Sun. Some supergiants are over a billion kilometres across, large enough to swallow our entire inner solar system.` },
          ],
        },
        {
          type:          'magazine',
          section:       3,
          totalSections: 6,
          headline:      `Looking Back in Time`,
          paragraphs: [
            `Stars are so far away that scientists measure distance in light-years — the distance light travels in one year, about 5.9 trillion miles.`,
            `When you look at a star, you're seeing light that left it years or even thousands of years ago. Looking at the night sky is looking back in time.`,
          ],
          image:        '/explorer-assets/cosmos/l14-s3-light-back-in-time.png',
          imageCaption: `Starlight takes years to reach you — every star you see is showing you its past`,
          vocab: [
            { word: 'light-year',       definition: `The distance light travels in one year — about 5.9 trillion miles. Used to measure distances between stars.`, audioPrompt: `Light-year — the distance light travels in one year, about 5.9 trillion miles. Used to measure distances between stars.` },
            { word: 'Proxima Centauri', definition: `The nearest star to our Sun. Just 4.2 light-years away, but still too far for any spacecraft to reach in a human lifetime.`, audioPrompt: `Proxima Centauri — the nearest star to our Sun. Just 4.2 light-years away, but still too far for any spacecraft to reach in a human lifetime.` },
          ],
        },
        {
          type:          'magazine',
          section:       4,
          totalSections: 6,
          headline:      `Constellations`,
          paragraphs: [
            `Constellations are patterns ancient cultures saw in groups of stars, connected with imaginary lines to tell stories. There are 88 officially recognised today.`,
            `For thousands of years, sailors used them to navigate. The North Star — Polaris — sits above Earth's North Pole. Find it, and you know which way is north.`,
          ],
          image:        '/explorer-assets/cosmos/l14-s4-constellations.png',
          imageCaption: `Constellations are stories painted across the sky — and ancient navigation tools`,
          vocab: [
            { word: 'constellation', definition: `A pattern of stars connected by imaginary lines. There are 88 officially recognised constellations used for storytelling and navigation.`, audioPrompt: `Constellation — a pattern of stars connected by imaginary lines. There are 88 officially recognised constellations used for storytelling and navigation.` },
            { word: 'Polaris',       definition: `The North Star. It sits almost directly above Earth's North Pole, so finding it tells you which way is north — used by travellers for thousands of years.`, audioPrompt: `Polaris — the North Star. It sits almost directly above Earth's North Pole, so finding it tells you which way is north. Used by travellers for thousands of years.` },
          ],
        },
        {
          type:          'magazine',
          section:       5,
          totalSections: 6,
          headline:      `How Stars Are Born`,
          paragraphs: [
            `Stars are born in vast clouds of gas and dust called nebulae. Gravity slowly pulls the cloud together.`,
            `When pressure and temperature at the centre become high enough, nuclear fusion ignites — and a star is born. Stars can shine for billions of years.`,
          ],
          image:        '/explorer-assets/cosmos/l14-s5-nebula-birth.png',
          imageCaption: `Stars are born in nebulae — clouds of gas and dust collapsing under gravity`,
          vocab: [
            { word: 'nebula',  definition: `A vast cloud of gas and dust in space. Nebulae are the birthplaces of stars — every star you see was born in one.`, audioPrompt: `Nebula — a vast cloud of gas and dust in space. Nebulae are the birthplaces of stars. Every star you see was born in one.` },
            { word: 'gravity', definition: `The force that pulls matter together. Gravity is what slowly collapses a nebula until a new star ignites at its centre.`, audioPrompt: `Gravity — the force that pulls matter together. Gravity is what slowly collapses a nebula until a new star ignites at its centre.` },
          ],
        },
        {
          type:          'magazine',
          section:       6,
          totalSections: 6,
          headline:      `You Are Star Stuff`,
          paragraphs: [
            `When massive stars die, they explode in catastrophic supernovas — briefly outshining entire galaxies and scattering their atoms across space.`,
            `The iron in your blood, the calcium in your bones, the oxygen you breathe — all forged inside ancient stars that exploded billions of years ago. You are made of star stuff.`,
          ],
          image:        '/explorer-assets/cosmos/l14-s6-star-stuff.png',
          imageCaption: `Every atom in your body was forged inside an ancient star. You are made of star stuff.`,
          vocab: [
            { word: 'supernova',  definition: `The catastrophic explosion of a massive star at the end of its life. A supernova can briefly outshine an entire galaxy.`, audioPrompt: `Supernova — the catastrophic explosion of a massive star at the end of its life. A supernova can briefly outshine an entire galaxy.` },
            { word: 'star stuff', definition: `The atoms in your body that were forged inside ancient stars. Every element heavier than hydrogen — including all of you — came from a star.`, audioPrompt: `Star stuff — the atoms in your body that were forged inside ancient stars. Every element heavier than hydrogen, including all of you, came from a star.` },
          ],
        },

        // PHASE 3 — INTERACTIVE
        {
          type:          'interactive',
          activityType:  'drag-match',
          instruction:   `Tap each card, then tap which stage of the stellar lifecycle it describes!`,
          guideText:     `Stars are born, live for billions of years, and die in spectacular ways. Each of these descriptions shows one stage in a star's life. Can you match them to the right stage?`,
          columnHeaders: [`What's Happening?`, `Lifecycle Stage`],
          items: [
            { image: 'l14-game-nebula.png',     label: `A vast glowing cloud of gas and dust slowly collapsing under gravity to form new stars.`,                              correctMatch: 'nebula',     objectPosition: 'center 50%', matchPhrase: `Nebula! Every star begins in a nebula — a vast cloud of gas and dust. Gravity slowly pulls the cloud inward. As it collapses, temperature and pressure build at the centre until nuclear fusion ignites. A new star is born from what was once just a cloud of floating atoms.` },
            { image: 'l14-game-star.png',       label: `A medium-sized star steadily fusing hydrogen into helium and shining for billions of years.`,                          correctMatch: 'star',       objectPosition: 'center 50%', matchPhrase: `Star! This is the main sequence — the long, stable middle of a star's life. Our Sun has been burning hydrogen for about 4.6 billion years and has roughly 5 billion years left. During this stage, the star shines steadily, providing light and warmth to any planets orbiting it.` },
            { image: 'l14-game-red-giant.png',  label: `A dying star that has swelled to hundreds of times its original size as it runs out of hydrogen fuel.`,               correctMatch: 'red-giant',  objectPosition: 'center 50%', matchPhrase: `Red Giant! When a star like our Sun exhausts its hydrogen, it expands enormously — becoming a red giant that could swallow the inner planets. This is what will happen to our Sun in about 5 billion years, before it sheds its layers and collapses into a white dwarf.` },
            { image: 'l14-game-supernova.png',  label: `A massive star exploding in a catastrophic blast at the end of its life, briefly outshining its entire galaxy.`,      correctMatch: 'supernova',  objectPosition: 'center 50%', matchPhrase: `Supernova! Massive stars don't fade quietly — they explode. A supernova releases more energy in seconds than our Sun will produce in its entire lifetime. The explosion scatters heavy elements — iron, calcium, gold — across space. Those atoms eventually became planets. And you.` },
          ],
          buckets: [
            { id: 'nebula',    label: `🌌 Nebula`,     color: '#818CF8' },
            { id: 'star',      label: `⭐ Star`,        color: '#F59E0B' },
            { id: 'red-giant', label: `🔴 Red Giant`,  color: '#F97316' },
            { id: 'supernova', label: `💥 Supernova`,  color: '#34D399' },
          ],
        },

        // PHASE 4 — MASTERY QUIZ
        {
          type:      'quiz',
          guideText: `Quiz time, {name}! Let's see what you've learned about stars and constellations. Answer all 6 questions to earn your Star Gazer badge!`,
          questions: [
            {
              format:       'multiple-choice',
              question:     `What powers a star?`,
              options:      [`Burning gas like a candle`, `Nuclear fusion — hydrogen atoms fusing into helium and releasing energy`, `Electricity from the galaxy's core`, `Chemical reactions between gases`],
              correctIndex: 1,
            },
            {
              format:       'multiple-choice',
              question:     `What is a light-year?`,
              options:      [`The time it takes to travel to a star`, `How bright a star is`, `The distance light travels in one year — about 5.9 trillion miles`, `A measurement of how old a star is`],
              correctIndex: 2,
            },
            {
              format:       'multiple-choice',
              question:     `When you look at a distant star, what are you seeing?`,
              options:      [`The star as it is right now`, `Light reflected off the Moon`, `Light that left the star years, decades, or centuries ago — you're looking back in time`, `The reflection of our Sun off other planets`],
              correctIndex: 2,
            },
            {
              format:        'true-false',
              question:      `The atoms in your body were forged inside ancient stars that exploded before our Sun was born.`,
              correctAnswer: true,
            },
            {
              format:       'fill-blank',
              question:     `The nearest star beyond our Sun, Proxima Centauri, is ___ light-years away.`,
              options:      [`4.2`, `10`, `100`, `0.5`],
              correctIndex: 0,
            },
            {
              format:       'multiple-choice',
              question:     `What is a nebula?`,
              options:      [`A type of constellation`, `A cloud of gas and dust where new stars are born`, `A dying star about to explode`, `A moon orbiting a distant star`],
              correctIndex: 1,
            },
          ],
        },

        // PHASE 5 — REAL-WORLD CONNECTION
        {
          type:            'real-world',
          guideText:       `On a clear night, go outside, let your eyes adjust for 10 minutes, and try to find the Big Dipper and the North Star!`,
          familyAdventure: `On a clear night away from city lights, lie on a blanket and look up at the sky for at least 15 minutes. Let your eyes fully adjust to the dark (takes about 10 minutes). Try to find the Big Dipper and use it to locate the North Star. Download a free stargazing app and identify three constellations. Look for the Milky Way if you're in a dark enough area.`,
          creativePrompt:  `In a dark room, use a flashlight and a piece of dark cardboard. Poke small holes in the pattern of a constellation (Orion, the Big Dipper, or Cassiopeia are good ones). Shine the flashlight through the holes onto a ceiling or wall. You've made a star projector! Research the mythology behind your chosen constellation and share the story.`,
        },

        // PHASE 6 — CELEBRATION
        {
          type:      'celebration',
          xpEarned:  50,
          badge:     'star-gazer',
          badgeName: `Star Gazer`,
          message:   `Brilliant work, {name}! You now know that every star in the night sky is a sun — and that the atoms in your bones and blood were forged in ancient stars that exploded billions of years ago. The cosmos made you. Nova is so proud to share the universe with you.`,
        },
      ],
    },
  ],
};

// Log on module load — confirms lesson wired correctly + verifies image assets at runtime
(() => {
  const l    = cosmos_explorer_l14_screens.lessons[0];
  const mags = l.screens.filter(s => s.type === 'magazine').length;
  const game = l.screens.find(s => s.type === 'interactive')?.items?.length || 0;
  const quiz = l.screens.find(s => s.type === 'quiz')?.questions?.length || 0;
  console.log(`[LESSON-COSMOS-L14] Loaded: "Stars and Constellations" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
  Promise.all([
    fetch('/explorer-assets/cosmos/l14-s1-what-is-a-star.png',    { method: 'HEAD' }),
    fetch('/explorer-assets/cosmos/l14-s2-star-sizes.png',        { method: 'HEAD' }),
    fetch('/explorer-assets/cosmos/l14-s3-light-back-in-time.png',{ method: 'HEAD' }),
    fetch('/explorer-assets/cosmos/l14-s4-constellations.png',    { method: 'HEAD' }),
    fetch('/explorer-assets/cosmos/l14-s5-nebula-birth.png',      { method: 'HEAD' }),
    fetch('/explorer-assets/cosmos/l14-s6-star-stuff.png',        { method: 'HEAD' }),
  ]).then(([r1, r2, r3, r4, r5, r6]) => {
    console.log(`[ASSET-CHECK-COSMOS-L14] what-is-a-star: ${r1.ok}, star-sizes: ${r2.ok}, light-back-in-time: ${r3.ok}, constellations: ${r4.ok}, nebula-birth: ${r5.ok}, star-stuff: ${r6.ok}`);
  }).catch(() => {
    console.log('[ASSET-CHECK-COSMOS-L14] Could not verify image assets — network check failed');
  });
})();

export default cosmos_explorer_l14_screens;
