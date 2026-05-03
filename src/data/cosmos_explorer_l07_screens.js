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

        // PHASE 2 — MAGAZINE STORY (4 sections)
        {
          type:          'magazine',
          section:       1,
          totalSections: 4,
          headline:      `What Is Light?`,
          paragraphs: [
            `Light is a form of energy called electromagnetic radiation. It travels in waves at 186,000 miles per second — the fastest anything can move in the universe. Nothing has ever been observed moving faster than light.`,
            `Light can travel through empty space. This is different from sound, which needs a physical medium like air or water to carry it. Sunlight reaches Earth across 93 million miles of empty space — a journey that takes about 8 minutes.`,
            `The light hitting your eyes right now started its journey minutes, hours, or even billions of years ago, depending on where it came from. When you look at a distant star, you're seeing light that left it long before you were born.`,
          ],
          image:        '/explorer-assets/cosmos/l07-magazine-what-is-light.png',
          imageCaption: `Light — electromagnetic energy travelling at 186,000 miles per second through space and matter`,
          vocab: [
            { word: 'electromagnetic radiation', definition: `A form of energy that travels as waves — light is one type of electromagnetic radiation, travelling at 186,000 miles per second, the fastest speed in the universe.`, audioPrompt: `Electromagnetic radiation — a form of energy that travels as waves. Light is one type of electromagnetic radiation, travelling at 186,000 miles per second, the fastest speed in the universe.` },
            { word: 'speed of light',            definition: `186,000 miles per second — the fastest speed in the universe. Light travels fast enough to circle the entire Earth 7.5 times in one second.`,                        audioPrompt: `Speed of light — 186,000 miles per second, the fastest speed in the universe. Light travels fast enough to circle the entire Earth 7.5 times in one second.` },
          ],
        },
        {
          type:          'magazine',
          section:       2,
          totalSections: 4,
          headline:      `Reflection and Refraction`,
          paragraphs: [
            `When light hits a smooth surface like a mirror, it bounces back in a predictable direction — this is called reflection. The angle at which light hits a mirror is exactly the same as the angle at which it bounces away. Mirrors work because their surfaces are smooth enough to reflect light perfectly.`,
            `When light passes from one material into another — from air into water, or from air into glass — it bends. This is called refraction. Refraction is why a straw looks bent and broken when you put it in a glass of water. The light bends as it crosses from water to air, shifting the image.`,
            `Lenses in glasses, cameras, microscopes, and telescopes all use refraction deliberately — bending light in controlled ways to focus images, magnify tiny things, or bring distant objects into sharp view.`,
          ],
          image:        '/explorer-assets/cosmos/l07-magazine-reflection-refraction.png',
          imageCaption: `Reflection and refraction — light bouncing off mirrors and bending through water and glass`,
          vocab: [
            { word: 'reflection', definition: `When light bounces off a surface — smooth surfaces like mirrors reflect light at a predictable angle, allowing you to see a clear image.`,                                    audioPrompt: `Reflection — when light bounces off a surface. Smooth surfaces like mirrors reflect light at a predictable angle, allowing you to see a clear image.` },
            { word: 'refraction', definition: `When light bends as it passes from one material into another — refraction is why a straw looks bent in water and why lenses can focus and magnify light.`, audioPrompt: `Refraction — when light bends as it passes from one material into another. Refraction is why a straw looks bent in water and why lenses can focus and magnify light.` },
          ],
        },
        {
          type:          'magazine',
          section:       3,
          totalSections: 4,
          headline:      `White Light Is All Colours`,
          paragraphs: [
            `What looks like white sunlight is actually a mixture of ALL the colours of the rainbow — red, orange, yellow, green, blue, indigo, and violet — all mixed together. You can prove this with a prism: a triangular piece of glass that refracts light.`,
            `When light passes through a prism, different colours bend by different amounts. Red bends the least, violet bends the most. The result is the full spectrum of colour spreading out like a fan — all the hidden colours of sunlight revealed.`,
            `Rainbows form for exactly the same reason. When sunlight passes through water droplets in the air, each droplet acts like a tiny prism — refracting and reflecting the light, spreading it into its full spectrum. You always see a rainbow on the opposite side of the sky from the Sun.`,
          ],
          image:        '/explorer-assets/cosmos/l07-magazine-spectrum.png',
          imageCaption: `White light and the spectrum — a prism reveals all the hidden colours mixed inside sunlight`,
          vocab: [
            { word: 'spectrum', definition: `The full range of colours that make up white light — red, orange, yellow, green, blue, indigo, and violet. A prism or water droplets spread light into its spectrum.`,  audioPrompt: `Spectrum — the full range of colours that make up white light: red, orange, yellow, green, blue, indigo, and violet. A prism or water droplets spread light into its spectrum.` },
            { word: 'prism',    definition: `A triangular piece of glass that refracts light, bending each colour by a different amount and spreading white light into the full visible spectrum of colours.`,         audioPrompt: `Prism — a triangular piece of glass that refracts light, bending each colour by a different amount and spreading white light into the full visible spectrum of colours.` },
          ],
        },
        {
          type:          'magazine',
          section:       4,
          totalSections: 4,
          headline:      `Shadows: When Light Gets Blocked`,
          paragraphs: [
            `Shadows form when an opaque object — something light cannot pass through — blocks a beam of light. The shadow falls on the surface behind the object, on the opposite side from the light source. The shape of the shadow mirrors the shape of the object blocking the light.`,
            `The size of a shadow depends on the angle of the light source. When the Sun is low on the horizon — in the morning or evening — it casts long, stretched shadows. When the Sun is directly overhead at noon, shadows are short and stubby. The same object creates very different shadows throughout the day.`,
            `Shadows have been used to tell time for thousands of years. A sundial works by casting a shadow onto a marked surface — as the Sun moves across the sky, the shadow moves with it, pointing to the hour. You can make your own with a pencil, some clay, and a sunny day.`,
          ],
          image:        '/explorer-assets/cosmos/l07-magazine-shadows.png',
          imageCaption: `Shadows — formed when opaque objects block light, changing shape with the angle of the Sun`,
          vocab: [
            { word: 'opaque', definition: `A material that light cannot pass through — opaque objects block light completely, creating a shadow on the surface behind them.`,                                           audioPrompt: `Opaque — a material that light cannot pass through. Opaque objects block light completely, creating a shadow on the surface behind them.` },
            { word: 'sundial', definition: `A timekeeping device that uses the shadow cast by a post or blade to show the time — as the Sun moves across the sky, the shadow moves with it.`, audioPrompt: `Sundial — a timekeeping device that uses the shadow cast by a post or blade to show the time. As the Sun moves across the sky, the shadow moves with it.` },
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
            { image: 'l07-game-mirror.png',  label: `Light hitting a flat mirror and bouncing straight back.`,                              correctMatch: 'reflection',  objectPosition: 'center 50%', matchPhrase: `Reflection! When light hits a smooth surface, it bounces back at the same angle it arrived. Mirrors work perfectly because their surface is polished flat enough to reflect every ray of light in a perfectly predictable direction.` },
            { image: 'l07-game-straw.png',   label: `A straw appearing bent and broken inside a glass of water.`,                          correctMatch: 'refraction',  objectPosition: 'center 50%', matchPhrase: `Refraction! The straw isn't actually bent — light bends as it crosses from water into air, shifting where the image appears. The same effect makes swimming pools look shallower than they are, and it's why lenses in glasses and cameras can focus light.` },
            { image: 'l07-game-prism.png',   label: `White light entering a triangular prism and spreading into a rainbow of colours.`,    correctMatch: 'dispersion',  objectPosition: 'center 50%', matchPhrase: `Dispersion! When white light passes through a prism, different colours bend by different amounts and spread apart. This reveals all the colours hidden inside ordinary sunlight — the same process that paints rainbows across the sky after rain.` },
            { image: 'l07-game-shadow.png',  label: `A hand held in front of a torch casting a dark shape on the wall behind it.`,         correctMatch: 'shadow',      objectPosition: 'center 50%', matchPhrase: `Shadow! Light travels in straight lines, so anything opaque — anything it can't pass through — blocks the light and casts a shadow on the surface behind it. The shape of the shadow matches the shape of whatever is blocking the light.` },
          ],
          buckets: [
            { id: 'reflection', label: `🪞 Reflection`,  color: '#60A5FA' },
            { id: 'refraction', label: `🌊 Refraction`,  color: '#818CF8' },
            { id: 'dispersion', label: `🌈 Dispersion`,  color: '#F59E0B' },
            { id: 'shadow',     label: `👥 Shadow`,      color: '#34D399' },
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
    fetch('/explorer-assets/cosmos/l07-magazine-what-is-light.png',          { method: 'HEAD' }),
    fetch('/explorer-assets/cosmos/l07-magazine-reflection-refraction.png',  { method: 'HEAD' }),
    fetch('/explorer-assets/cosmos/l07-magazine-spectrum.png',               { method: 'HEAD' }),
    fetch('/explorer-assets/cosmos/l07-magazine-shadows.png',                { method: 'HEAD' }),
  ]).then(([r1, r2, r3, r4]) => {
    console.log(`[ASSET-CHECK-COSMOS-L07] what-is-light: ${r1.ok}, reflection-refraction: ${r2.ok}, spectrum: ${r3.ok}, shadows: ${r4.ok}`);
  }).catch(() => {
    console.log('[ASSET-CHECK-COSMOS-L07] Could not verify image assets — network check failed');
  });
})();

export default cosmos_explorer_l07_screens;
