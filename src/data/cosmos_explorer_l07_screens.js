// ============================================================
// COREVERSE EXPLORERS — Cosmos · Lesson 7
// "Light and Shadows"
// Ages 6–8 | Guide: Nova | ExplorerLessonPlayer format
// ============================================================

const cosmos_explorer_l07_screens = {
  ageBand:   'explorers',
  subjectId: 'cosmos',
  guide:     'nova',
  lessons: [
    {
      id:        'cs-6-8-07',
      title:     `Light and Shadows`,
      duration:  12,
      xpReward:  50,
      badge:     'light-chaser',
      badgeName: `Light Chaser`,
      screens: [
        // PHASE 1 — WELCOME
        {
          type:      'welcome',
          guideText: `Right now, light is bouncing off everything around you and landing on your eyes — that's how you see. Light is one of the most fundamental things in the universe. It's so fast that if it could travel in a straight line, it could circle the Earth 7.5 times in just one second.`,
        },

        // PHASE 2 — MAGAZINE STORY (6 sections)
        {
          type:          'magazine',
          section:       1,
          totalSections: 6,
          headline:      `What Is Light?`,
          paragraphs: [
            `Light is a form of energy. It travels at 186,000 miles per second — the fastest anything can move in the entire universe.`,
            `Light is so fast it could circle the Earth 7.5 times in just one second. Nothing has ever been observed moving faster than light.`,
          ],
          image:        '/explorer-assets/cosmos/l07-s1-light-speed.png',
          imageCaption: `Light is the fastest thing in the universe — 186,000 miles per second`,
          vocab: [
            { word: 'light',          definition: `A form of energy that travels in waves at incredible speed — what lets you see the world around you.`, audioPrompt: `Light — a form of energy that travels in waves at incredible speed. What lets you see the world around you.` },
            { word: 'speed of light', definition: `186,000 miles per second — the fastest speed in the universe. Light could circle the Earth 7.5 times in just one second.`, audioPrompt: `Speed of light — 186,000 miles per second, the fastest speed in the universe. Light could circle the Earth 7.5 times in just one second.` },
          ],
        },
        {
          type:          'magazine',
          section:       2,
          totalSections: 6,
          headline:      `Light Travels Anywhere`,
          paragraphs: [
            `Light can travel through empty space. This is different from sound, which needs air or water to carry it.`,
            `Sunlight crosses 93 million miles of empty space to reach Earth — a journey that takes about 8 minutes. The light hitting your eyes started its journey long ago.`,
          ],
          image:        '/explorer-assets/cosmos/l07-s2-sunlight-journey.png',
          imageCaption: `Sunlight takes 8 minutes to cross 93 million miles of empty space to reach Earth`,
          vocab: [
            { word: 'empty space', definition: `Vacuum without air or matter. Light can travel through empty space, but sound can't — that's why space is silent.`, audioPrompt: `Empty space — vacuum without air or matter. Light can travel through empty space, but sound can't. That's why space is silent.` },
            { word: 'sunlight',    definition: `The light from our Sun. It takes about 8 minutes to reach Earth across 93 million miles of empty space.`, audioPrompt: `Sunlight — the light from our Sun. It takes about 8 minutes to reach Earth across 93 million miles of empty space.` },
          ],
        },
        {
          type:          'magazine',
          section:       3,
          totalSections: 6,
          headline:      `Reflection`,
          paragraphs: [
            `When light hits a smooth surface like a mirror, it bounces back. This is called reflection.`,
            `The angle at which light hits a mirror is exactly the same as the angle at which it bounces away. That's why mirrors give you a clear image of yourself.`,
          ],
          image:        '/explorer-assets/cosmos/l07-s3-reflection.png',
          imageCaption: `Reflection — light bouncing off a smooth surface at the same angle it arrived`,
          vocab: [
            { word: 'reflection', definition: `When light bounces off a surface. Smooth surfaces like mirrors reflect light perfectly, creating clear images.`, audioPrompt: `Reflection — when light bounces off a surface. Smooth surfaces like mirrors reflect light perfectly, creating clear images.` },
            { word: 'angle',      definition: `The direction at which something arrives or leaves. Light reflects off a mirror at exactly the same angle it hit.`, audioPrompt: `Angle — the direction at which something arrives or leaves. Light reflects off a mirror at exactly the same angle it hit.` },
          ],
        },
        {
          type:          'magazine',
          section:       4,
          totalSections: 6,
          headline:      `Refraction`,
          paragraphs: [
            `When light passes from air into water — or air into glass — it bends. This is called refraction.`,
            `Refraction is why a straw looks bent in a glass of water. It's also how lenses work — in glasses, cameras, microscopes, and telescopes.`,
          ],
          image:        '/explorer-assets/cosmos/l07-s4-refraction.png',
          imageCaption: `Refraction — light bending as it crosses from air into water (or any other material)`,
          vocab: [
            { word: 'refraction', definition: `When light bends as it passes from one material to another — like from air into water. Refraction makes a straw look bent in water.`, audioPrompt: `Refraction — when light bends as it passes from one material to another, like from air into water. Refraction makes a straw look bent in water.` },
            { word: 'lens',       definition: `A curved piece of glass that bends light on purpose. Lenses are used in glasses, cameras, microscopes, and telescopes.`, audioPrompt: `Lens — a curved piece of glass that bends light on purpose. Lenses are used in glasses, cameras, microscopes, and telescopes.` },
          ],
        },
        {
          type:          'magazine',
          section:       5,
          totalSections: 6,
          headline:      `The Hidden Colours`,
          paragraphs: [
            `White sunlight is actually a mixture of ALL the colours of the rainbow — red, orange, yellow, green, blue, indigo, and violet — all blended together.`,
            `A prism — a triangular piece of glass — bends each colour differently and spreads them apart. That's how a prism reveals the hidden colours of light.`,
          ],
          image:        '/explorer-assets/cosmos/l07-s5-prism-spectrum.png',
          imageCaption: `White light is every colour mixed together — a prism spreads them apart and reveals them`,
          vocab: [
            { word: 'spectrum', definition: `All the colours that make up white light — red, orange, yellow, green, blue, indigo, and violet. A prism reveals the spectrum.`, audioPrompt: `Spectrum — all the colours that make up white light: red, orange, yellow, green, blue, indigo, and violet. A prism reveals the spectrum.` },
            { word: 'prism',    definition: `A triangular piece of glass that bends each colour by a different amount, spreading white light into its full rainbow spectrum.`, audioPrompt: `Prism — a triangular piece of glass that bends each colour by a different amount, spreading white light into its full rainbow spectrum.` },
          ],
        },
        {
          type:          'magazine',
          section:       6,
          totalSections: 6,
          headline:      `Shadows and Sundials`,
          paragraphs: [
            `Shadows form when an opaque object blocks light. The shape of the shadow matches the shape of whatever blocked the light.`,
            `As the Sun moves across the sky, shadows change length and direction. Sundials use this to tell time — turning shadows into a working clock.`,
          ],
          image:        '/explorer-assets/cosmos/l07-s6-sundial.png',
          imageCaption: `A sundial — a clock made of light and shadow`,
          vocab: [
            { word: 'opaque',  definition: `A material light can't pass through. Opaque objects block light completely and create a shadow on the surface behind them.`, audioPrompt: `Opaque — a material light can't pass through. Opaque objects block light completely and create a shadow on the surface behind them.` },
            { word: 'sundial', definition: `A tool that tells time using the moving shadow of the Sun — humans have used sundials to track hours for thousands of years.`, audioPrompt: `Sundial — a tool that tells time using the moving shadow of the Sun. Humans have used sundials to track hours for thousands of years.` },
          ],
        },

        // PHASE 3 — INTERACTIVE
        {
          type:          'interactive',
          activityType:  'drag-match',
          instruction:   `Tap each card, then tap which light phenomenon it shows!`,
          guideText:     `Light does four amazing things — it reflects, refracts, disperses into colours, and gets blocked to create shadows. Each of these examples shows one of those phenomena. Can you sort them correctly?`,
          columnHeaders: [`What's Happening?`, `Light Phenomenon`],
          items: [
            { image: 'l07-game-mirror.png',  label: `Light hitting a flat mirror and bouncing straight back.`,                              correctMatch: 'reflection', objectPosition: 'center 50%', matchPhrase: `Reflection! When light hits a smooth surface, it bounces back at the same angle it arrived. Mirrors work perfectly because their surface is polished flat enough to reflect every ray of light in a perfectly predictable direction.` },
            { image: 'l07-game-straw.png',   label: `A straw appearing bent and broken inside a glass of water.`,                          correctMatch: 'refraction', objectPosition: 'center 50%', matchPhrase: `Refraction! The straw isn't actually bent — light bends as it crosses from water into air, shifting where the image appears. The same effect makes swimming pools look shallower than they are, and it's why lenses in glasses and cameras can focus light.` },
            { image: 'l07-game-prism.png',   label: `White light entering a triangular prism and spreading into a rainbow of colours.`,    correctMatch: 'dispersion', objectPosition: 'center 50%', matchPhrase: `Dispersion! When white light passes through a prism, different colours bend by different amounts and spread apart. This reveals all the colours hidden inside ordinary sunlight — the same process that paints rainbows across the sky after rain.` },
            { image: 'l07-game-shadow.png',  label: `A hand held in front of a torch casting a dark shape on the wall behind it.`,         correctMatch: 'shadow',     objectPosition: 'center 50%', matchPhrase: `Shadow! Light travels in straight lines, so anything opaque — anything it can't pass through — blocks the light and casts a shadow on the surface behind it. The shape of the shadow matches the shape of whatever is blocking the light.` },
          ],
          buckets: [
            { id: 'reflection', label: `🪞 Reflection`, color: '#60A5FA' },
            { id: 'refraction', label: `🌊 Refraction`, color: '#818CF8' },
            { id: 'dispersion', label: `🌈 Dispersion`, color: '#F59E0B' },
            { id: 'shadow',     label: `👥 Shadow`,     color: '#34D399' },
          ],
        },

        // PHASE 4 — MASTERY QUIZ
        {
          type:      'quiz',
          guideText: `Quiz time, {name}! Let's see what you've learned about light. Answer all 6 questions to earn your Light Chaser badge!`,
          questions: [
            {
              format:       'multiple-choice',
              question:     `How fast does light travel?`,
              options:      [`1,000 miles per second`, `186,000 miles per second`, `The speed of sound`, `The speed of a jet plane`],
              correctIndex: 1,
            },
            {
              format:       'multiple-choice',
              question:     `What is refraction?`,
              options:      [`When light bounces off a mirror`, `When light is absorbed by a dark surface`, `When light bends as it passes from one material to another`, `When light splits into colours`],
              correctIndex: 2,
            },
            {
              format:       'multiple-choice',
              question:     `Why does a rainbow form?`,
              options:      [`The sky reflects colour from the ocean`, `Water droplets in the air act like prisms, splitting sunlight into all its colours`, `Clouds mix sunlight with colour`, `Light slows down and shows its true colours in rain`],
              correctIndex: 1,
            },
            {
              format:        'true-false',
              question:      `White sunlight is actually a mixture of all the colours of the rainbow.`,
              correctAnswer: true,
            },
            {
              format:       'fill-blank',
              question:     `Light travels at ___ miles per second — the fastest speed in the universe.`,
              options:      [`186,000`, `1,000`, `767`, `300`],
              correctIndex: 0,
            },
            {
              format:       'multiple-choice',
              question:     `Why does a shadow grow longer in the morning and evening than at midday?`,
              options:      [`The Sun produces less light at those times`, `The light source is at a lower angle, which stretches the shadow`, `Objects are further from the Sun`, `The ground reflects more light`],
              correctIndex: 1,
            },
          ],
        },

        // PHASE 5 — REAL-WORLD CONNECTION
        {
          type:            'real-world',
          guideText:       `Try this on a sunny day — make your own rainbow with a garden hose or a glass of water in sunlight!`,
          familyAdventure: `Get a garden hose and create your own rainbow on a sunny day! Stand with your back to the Sun and spray a mist of water in front of you. Adjust the angle until you see a rainbow in the mist. Then talk about what's happening: you're bending sunlight with water droplets, just like the sky does.`,
          creativePrompt:  `On a sunny day, stick a pencil vertically in some clay or playdough and place it outside on a flat surface. Mark where the shadow falls every hour, starting in the morning. By the end of the day, you'll have made a working sundial! Notice how the shadow moves and changes length throughout the day.`,
        },

        // PHASE 6 — CELEBRATION
        {
          type:      'celebration',
          xpEarned:  50,
          badge:     'light-chaser',
          badgeName: `Light Chaser`,
          message:   `Brilliant work, {name}! You now know that the sunlight filling your room is actually every colour of the rainbow at once — and that the same bending of light that makes a straw look crooked also paints rainbows across the sky. The universe is more colourful than it appears. Nova is so proud to share the universe with you.`,
        },
      ],
    },
  ],
};

// Log on module load — confirms lesson wired correctly + verifies image assets at runtime
(() => {
  const l    = cosmos_explorer_l07_screens.lessons[0];
  const mags = l.screens.filter(s => s.type === 'magazine').length;
  const game = l.screens.find(s => s.type === 'interactive')?.items?.length || 0;
  const quiz = l.screens.find(s => s.type === 'quiz')?.questions?.length || 0;
  console.log(`[LESSON-COSMOS-L07] Loaded: "Light and Shadows" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
  Promise.all([
    fetch('/explorer-assets/cosmos/l07-s1-light-speed.png',      { method: 'HEAD' }),
    fetch('/explorer-assets/cosmos/l07-s2-sunlight-journey.png', { method: 'HEAD' }),
    fetch('/explorer-assets/cosmos/l07-s3-reflection.png',       { method: 'HEAD' }),
    fetch('/explorer-assets/cosmos/l07-s4-refraction.png',       { method: 'HEAD' }),
    fetch('/explorer-assets/cosmos/l07-s5-prism-spectrum.png',   { method: 'HEAD' }),
    fetch('/explorer-assets/cosmos/l07-s6-sundial.png',          { method: 'HEAD' }),
  ]).then(([r1, r2, r3, r4, r5, r6]) => {
    console.log(`[ASSET-CHECK-COSMOS-L07] light-speed: ${r1.ok}, sunlight-journey: ${r2.ok}, reflection: ${r3.ok}, refraction: ${r4.ok}, prism-spectrum: ${r5.ok}, sundial: ${r6.ok}`);
  }).catch(() => {
    console.log('[ASSET-CHECK-COSMOS-L07] Could not verify image assets — network check failed');
  });
})();

export default cosmos_explorer_l07_screens;
