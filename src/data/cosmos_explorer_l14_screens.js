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

        // PHASE 2 — MAGAZINE STORY (4 sections)
        {
          type:          'magazine',
          section:       1,
          totalSections: 4,
          headline:      `What Is a Star?`,
          paragraphs: [
            `A star is a massive ball of hot plasma — superheated gas — held together by gravity and powered by nuclear fusion. In a star's core, hydrogen atoms are squeezed together under enormous pressure until they fuse into helium, releasing tremendous amounts of energy as light and heat. This is the process that makes stars shine.`,
            `Our Sun is an average-sized star. Stars range from tiny red dwarfs — smaller and dimmer than our Sun — to supergiants so enormous that if placed where our Sun is, they would extend past Jupiter's orbit. There are stars in the universe that are over a billion kilometres in diameter.`,
            `The light from a star that reaches your eyes began as nuclear fusion deep in a stellar core. For our Sun, that journey takes light about 8 minutes to reach Earth. For more distant stars, the same journey takes years, centuries, or millennia.`,
          ],
          image:        '/explorer-assets/cosmos/l14-magazine-what-is-a-star.png',
          imageCaption: `A star — massive ball of hot plasma powered by nuclear fusion, producing light and heat`,
          vocab: [
            { word: 'nuclear fusion', definition: `The process that powers stars — hydrogen atoms fuse together under extreme pressure and heat to form helium, releasing enormous amounts of energy as light and heat.`, audioPrompt: `Nuclear fusion — the process that powers stars. Hydrogen atoms fuse together under extreme pressure and heat to form helium, releasing enormous amounts of energy as light and heat.` },
            { word: 'plasma',         definition: `A state of matter like superheated gas, where particles are so energetic that electrons separate from atoms — stars are made almost entirely of plasma.`,            audioPrompt: `Plasma — a state of matter like superheated gas, where particles are so energetic that electrons separate from atoms. Stars are made almost entirely of plasma.` },
          ],
        },
        {
          type:          'magazine',
          section:       2,
          totalSections: 4,
          headline:      `How Far Away Are Stars?`,
          paragraphs: [
            `Stars are so far away that kilometres and miles become meaningless for describing the distance. Instead, scientists measure stellar distances in light-years — the distance light travels in one year. One light-year is about 5.9 trillion miles. Numbers that large are almost impossible to feel — but they describe the true emptiness between stars.`,
            `The nearest star beyond our Sun, Proxima Centauri, is 4.2 light-years away. A spacecraft travelling at the speed of our fastest probes would take about 75,000 years to reach it. The stars you can see in the night sky range from a few light-years to thousands of light-years away.`,
            `Here's the most remarkable fact about stargazing: when you look at a star, you're seeing light that left it years, decades, or even thousands of years ago. You're not seeing the star as it is now — you're seeing it as it was in the past. Looking at the night sky is literally looking back in time.`,
          ],
          image:        '/explorer-assets/cosmos/l14-magazine-star-distances.png',
          imageCaption: `Light-years — the enormous distances between stars, and the time-travel of stargazing`,
          vocab: [
            { word: 'light-year',        definition: `The distance light travels in one year — about 5.9 trillion miles. Used to measure the vast distances between stars, which are too far to express in kilometres or miles.`, audioPrompt: `Light-year — the distance light travels in one year, about 5.9 trillion miles. Used to measure the vast distances between stars, which are too far to express in kilometres or miles.` },
            { word: 'Proxima Centauri',  definition: `The nearest star to our Sun, at 4.2 light-years away — so distant that even the fastest spacecraft would take tens of thousands of years to reach it.`,                     audioPrompt: `Proxima Centauri — the nearest star to our Sun, at 4.2 light-years away. So distant that even the fastest spacecraft would take tens of thousands of years to reach it.` },
          ],
        },
        {
          type:          'magazine',
          section:       3,
          totalSections: 4,
          headline:      `Constellations: Stories in the Sky`,
          paragraphs: [
            `Constellations are patterns that ancient cultures saw in groups of stars and connected with imaginary lines to tell stories. There are 88 officially recognised constellations, established by the International Astronomical Union. Different cultures around the world — Greek, Chinese, Aboriginal Australian, Indigenous American — each saw different patterns in the same stars and built their own sky stories.`,
            `For thousands of years, constellations were navigation tools. Sailors crossing oceans with no GPS used the stars to find their direction. The North Star — Polaris — sits almost directly above Earth's North Pole. If you can find it, you know which way is north. It's been guiding travellers for thousands of years.`,
            `The stars that form a constellation are not actually close to each other in space — they just happen to appear in the same direction from Earth, at vastly different distances. Orion's belt looks like three nearby stars, but the three stars are hundreds of light-years apart from each other. Constellations are a human invention, painted onto the sky.`,
          ],
          image:        '/explorer-assets/cosmos/l14-magazine-constellations.png',
          imageCaption: `Constellations — ancient star patterns used for storytelling and navigation across thousands of years`,
          vocab: [
            { word: 'constellation', definition: `A pattern of stars as seen from Earth, connected by imaginary lines — there are 88 officially recognised constellations, used for navigation and storytelling for thousands of years.`, audioPrompt: `Constellation — a pattern of stars as seen from Earth, connected by imaginary lines. There are 88 officially recognised constellations, used for navigation and storytelling for thousands of years.` },
            { word: 'Polaris',       definition: `The North Star — a star that sits almost directly above Earth's North Pole. Because it stays fixed in the sky while other stars appear to rotate around it, it has guided travellers for millennia.`, audioPrompt: `Polaris — the North Star, sitting almost directly above Earth's North Pole. Because it stays fixed in the sky while other stars appear to rotate around it, it has guided travellers for millennia.` },
          ],
        },
        {
          type:          'magazine',
          section:       4,
          totalSections: 4,
          headline:      `The Life and Death of Stars`,
          paragraphs: [
            `Stars are born in vast clouds of gas and dust called nebulae. Gravity slowly pulls the cloud together until the pressure and temperature at the centre become high enough to ignite nuclear fusion — and a star is born. Stars can shine for millions to billions of years, steadily fusing hydrogen into helium.`,
            `When a star runs out of hydrogen fuel, it begins to change. Stars like our Sun expand into enormous red giants — swelling to hundreds of times their original size — before shedding their outer layers and collapsing into small, dense white dwarfs. Massive stars end more dramatically: they explode in catastrophic supernovas, briefly outshining entire galaxies, and can leave behind incredibly dense neutron stars or black holes.`,
            `Here is the most profound fact in all of science: the atoms in your body — the iron in your blood, the calcium in your bones, the oxygen you breathe — were forged inside ancient stars that exploded billions of years ago and scattered their contents into space. You are literally made of star stuff.`,
          ],
          image:        '/explorer-assets/cosmos/l14-magazine-star-lifecycle.png',
          imageCaption: `The stellar lifecycle — nebula to star to red giant to supernova, and atoms scattered to form new worlds`,
          vocab: [
            { word: 'nebula',    definition: `A vast cloud of gas and dust in space — nebulae are the birthplaces of stars, where gravity slowly pulls material together until nuclear fusion ignites at the centre.`,                        audioPrompt: `Nebula — a vast cloud of gas and dust in space. Nebulae are the birthplaces of stars, where gravity slowly pulls material together until nuclear fusion ignites at the centre.` },
            { word: 'supernova', definition: `The catastrophic explosion of a massive star at the end of its life — supernovas briefly outshine entire galaxies and scatter heavy elements into space that form new planets and life.`, audioPrompt: `Supernova — the catastrophic explosion of a massive star at the end of its life. Supernovas briefly outshine entire galaxies and scatter heavy elements into space that form new planets and life.` },
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
    fetch('/explorer-assets/cosmos/l14-magazine-what-is-a-star.png', { method: 'HEAD' }),
    fetch('/explorer-assets/cosmos/l14-magazine-star-distances.png', { method: 'HEAD' }),
    fetch('/explorer-assets/cosmos/l14-magazine-constellations.png', { method: 'HEAD' }),
    fetch('/explorer-assets/cosmos/l14-magazine-star-lifecycle.png', { method: 'HEAD' }),
  ]).then(([r1, r2, r3, r4]) => {
    console.log(`[ASSET-CHECK-COSMOS-L14] what-is-a-star: ${r1.ok}, star-distances: ${r2.ok}, constellations: ${r3.ok}, star-lifecycle: ${r4.ok}`);
  }).catch(() => {
    console.log('[ASSET-CHECK-COSMOS-L14] Could not verify image assets — network check failed');
  });
})();

export default cosmos_explorer_l14_screens;
