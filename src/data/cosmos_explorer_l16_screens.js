// ============================================================
// COREVERSE EXPLORERS — Cosmos · Lesson 16
// "Volcanoes and Earthquakes"
// Ages 6–8 | Guide: Nova | ExplorerLessonPlayer format
// ============================================================

const cosmos_explorer_l16_screens = {
  ageBand:   'explorers',
  subjectId: 'cosmos',
  guide:     'nova',
  lessons: [
    {
      id:        'cs-6-8-16',
      title:     `Volcanoes and Earthquakes`,
      duration:  12,
      xpReward:  50,
      badge:     'geo-explorer',
      badgeName: `Geo Explorer`,
      screens: [
        // PHASE 1 — WELCOME
        {
          type:      'welcome',
          guideText: `The ground beneath your feet feels solid and still — but Earth is anything but. Its surface is broken into massive moving pieces, its interior is churning with heat, and in some places that energy breaks through as volcanoes and earthquakes. The planet is alive under your feet right now.`,
        },

        // PHASE 2 — MAGAZINE STORY (6 sections)
        {
          type:          'magazine',
          section:       1,
          totalSections: 6,
          headline:      `Earth's Four Layers`,
          paragraphs: [
            `Earth is not solid. It has four layers. The crust is the thin rocky shell we live on. Below it: the mantle — thick, hot, slow-flowing rock.`,
            `Deeper still is the outer core: liquid iron swirling at extreme temperatures. At the very centre is the inner core — a solid ball of iron under crushing pressure.`,
          ],
          image:        '/explorer-assets/cosmos/l16-s1-earth-layers.png',
          imageCaption: `Earth has four layers — crust, mantle, outer core, and inner core`,
          vocab: [
            { word: 'crust',  definition: `The thin rocky outer shell of Earth — where we live. Compared to the rest of Earth, the crust is incredibly thin.`, audioPrompt: `Crust — the thin rocky outer shell of Earth, where we live. Compared to the rest of Earth, the crust is incredibly thin.` },
            { word: 'mantle', definition: `The thick layer of hot, slow-flowing rock below the crust. The mantle makes up about 84% of Earth's volume.`, audioPrompt: `Mantle — the thick layer of hot, slow-flowing rock below the crust. The mantle makes up about 84% of Earth's volume.` },
          ],
        },
        {
          type:          'magazine',
          section:       2,
          totalSections: 6,
          headline:      `The Heat Inside Earth`,
          paragraphs: [
            `The deeper you go, the hotter it gets. Earth's interior is so hot that rock flows like a thick, slow liquid.`,
            `This internal heat powers everything — moving continents, building mountains, erupting volcanoes, and shaking the ground. Earth's surface is never permanent.`,
          ],
          image:        '/explorer-assets/cosmos/l16-s2-mantle-convection.png',
          imageCaption: `Heat from Earth's core powers continents, mountains, volcanoes, and earthquakes`,
          vocab: [
            { word: 'convection', definition: `The movement of heat through a fluid. Hot rock in the mantle rises, cools, sinks, and rises again — driving plate movement.`, audioPrompt: `Convection — the movement of heat through a fluid. Hot rock in the mantle rises, cools, sinks, and rises again, driving plate movement.` },
            { word: 'molten',     definition: `Melted by intense heat. Molten rock flows like a thick liquid — and it's what powers volcanoes.`, audioPrompt: `Molten — melted by intense heat. Molten rock flows like a thick liquid, and it's what powers volcanoes.` },
          ],
        },
        {
          type:          'magazine',
          section:       3,
          totalSections: 6,
          headline:      `Tectonic Plates`,
          paragraphs: [
            `Earth's crust is broken into about 15 enormous slabs called tectonic plates. They fit together like a puzzle on the mantle below.`,
            `The plates are constantly moving — a few centimetres per year, about the speed your fingernails grow. Tiny movements add up to continents crossing oceans.`,
          ],
          image:        '/explorer-assets/cosmos/l16-s3-tectonic-plates.png',
          imageCaption: `Earth's crust is a puzzle of 15 plates — slowly moving, all the time`,
          vocab: [
            { word: 'tectonic plate', definition: `One of about 15 enormous slabs that make up Earth's crust. The plates float on the mantle and move constantly.`, audioPrompt: `Tectonic plate — one of about 15 enormous slabs that make up Earth's crust. The plates float on the mantle and move constantly.` },
            { word: 'continent',      definition: `A large landmass on Earth. Tectonic plates carry the continents slowly across the planet over millions of years.`, audioPrompt: `Continent — a large landmass on Earth. Tectonic plates carry the continents slowly across the planet over millions of years.` },
          ],
        },
        {
          type:          'magazine',
          section:       4,
          totalSections: 6,
          headline:      `Where Plates Meet`,
          paragraphs: [
            `When two plates crash together, the crust crumples upward into mountains. The Himalayas are growing right now where India is colliding with Asia.`,
            `Most volcanoes and earthquakes happen where plates meet. The Ring of Fire — a zone around the Pacific Ocean — has 75% of the world's volcanoes.`,
          ],
          image:        '/explorer-assets/cosmos/l16-s4-plates-meet.png',
          imageCaption: `Where plates meet, mountains rise — and volcanoes and earthquakes happen`,
          vocab: [
            { word: 'Ring of Fire', definition: `A zone of intense volcanic and earthquake activity circling the Pacific Ocean. It follows the edges of tectonic plates.`, audioPrompt: `Ring of Fire — a zone of intense volcanic and earthquake activity circling the Pacific Ocean. It follows the edges of tectonic plates.` },
            { word: 'collision',    definition: `When two things crash into each other. Colliding tectonic plates push the ground upward into mountain ranges.`, audioPrompt: `Collision — when two things crash into each other. Colliding tectonic plates push the ground upward into mountain ranges.` },
          ],
        },
        {
          type:          'magazine',
          section:       5,
          totalSections: 6,
          headline:      `Volcanoes`,
          paragraphs: [
            `A volcano forms where molten rock from the mantle finds a path to the surface. Underground it's called magma. Above ground it's called lava.`,
            `Some volcanoes flow slowly like Hawaii's. Others explode dramatically like Mount St Helens. The difference depends on the chemistry of the magma.`,
          ],
          image:        '/explorer-assets/cosmos/l16-s5-volcano.png',
          imageCaption: `A volcano is a doorway between Earth's molten interior and its surface`,
          vocab: [
            { word: 'magma', definition: `Molten rock beneath Earth's surface. Magma is what feeds volcanoes from the mantle below.`, audioPrompt: `Magma — molten rock beneath Earth's surface. Magma is what feeds volcanoes from the mantle below.` },
            { word: 'lava',  definition: `Molten rock that has erupted to Earth's surface. Same material as magma, just above ground instead of below.`, audioPrompt: `Lava — molten rock that has erupted to Earth's surface. Same material as magma, just above ground instead of below.` },
          ],
        },
        {
          type:          'magazine',
          section:       6,
          totalSections: 6,
          headline:      `Earthquakes`,
          paragraphs: [
            `Earthquakes happen when two tectonic plates that have been locked together suddenly slip. The point where they slip is the focus.`,
            `Directly above it on the surface is the epicentre — where shaking is strongest. Earthquakes are measured on the Richter scale, where each number means 32 times more energy.`,
          ],
          image:        '/explorer-assets/cosmos/l16-s6-earthquake.png',
          imageCaption: `Earthquakes radiate from the focus underground to the epicentre on the surface`,
          vocab: [
            { word: 'epicentre',  definition: `The point on Earth's surface directly above the underground focus of an earthquake — usually where shaking is strongest.`, audioPrompt: `Epicentre — the point on Earth's surface directly above the underground focus of an earthquake, usually where shaking is strongest.` },
            { word: 'fault line', definition: `A fracture in Earth's crust where rocks have slipped past each other. Fault lines are sites of past and possible future earthquakes.`, audioPrompt: `Fault line — a fracture in Earth's crust where rocks have slipped past each other. Fault lines are sites of past and possible future earthquakes.` },
          ],
        },

        // PHASE 3 — INTERACTIVE
        {
          type:          'interactive',
          activityType:  'drag-match',
          instruction:   `Tap each card, then tap how that geological feature formed!`,
          guideText:     `Tectonic plates move in three main ways — and where they meet determines what happens at the surface. Two plates can crash into each other, pull apart, or grind sideways. Volcanoes can also form over hotspots far from any boundary. Can you match each feature to how it formed?`,
          columnHeaders: [`The Geological Feature`, `How It Formed`],
          items: [
            { image: 'l16-game-himalayas.png',       label: `Two continental plates colliding head-on, pushing rock upward into towering mountain ranges.`,          correctMatch: 'colliding',     objectPosition: 'center 50%', matchPhrase: `Colliding plates! The Himalayas — the world's tallest mountain range — formed where the Indian plate crashed into the Eurasian plate. When two continental plates collide, neither sinks; instead the crust crumples and is forced upward. The Himalayas are still growing by a few millimetres every year.` },
            { image: 'l16-game-rift-valley.png',     label: `Two plates pulling apart, creating a long valley where new crust forms as magma wells up between them.`, correctMatch: 'pulling-apart', objectPosition: 'center 50%', matchPhrase: `Pulling apart! When two plates move away from each other, a rift valley forms between them. The East African Rift Valley is pulling Africa apart right now — in millions of years it may become a new ocean. At mid-ocean ridges, this process creates new ocean floor constantly.` },
            { image: 'l16-game-volcano-hotspot.png', label: `A chain of volcanic islands forming over a stationary hotspot deep in the mantle beneath a moving plate.`, correctMatch: 'hotspot',       objectPosition: 'center 50%', matchPhrase: `Hotspot! The Hawaiian Islands formed as the Pacific plate slowly moved over a stationary column of extra-hot mantle material. Each island is older than the one before it — the oldest are eroding back into the sea, while the youngest, most active volcano sits directly over the hotspot today.` },
            { image: 'l16-game-transform-fault.png', label: `Two plates grinding sideways past each other, building stress along a fault that releases suddenly as earthquakes.`, correctMatch: 'sliding-past',  objectPosition: 'center 50%', matchPhrase: `Sliding past! When plates grind sideways, they create transform faults. The San Andreas Fault in California is a famous transform boundary — the Pacific and North American plates slide past each other, locking and releasing in earthquakes. Los Angeles is slowly moving northward toward San Francisco at about 5 centimetres per year.` },
          ],
          buckets: [
            { id: 'colliding',     label: `🏔️ Colliding`,     color: '#60A5FA' },
            { id: 'pulling-apart', label: `↔️ Pulling Apart`, color: '#34D399' },
            { id: 'hotspot',       label: `🌋 Hotspot`,       color: '#F59E0B' },
            { id: 'sliding-past',  label: `⚡ Sliding Past`,  color: '#818CF8' },
          ],
        },

        // PHASE 4 — MASTERY QUIZ
        {
          type:      'quiz',
          guideText: `Quiz time, {name}! Let's see what you've learned about volcanoes and earthquakes. Answer all 6 questions to earn your Geo Explorer badge!`,
          questions: [
            {
              format:       'multiple-choice',
              question:     `What is Earth's innermost layer?`,
              options:      [`The crust`, `The inner core — a solid ball of iron and nickel under immense pressure`, `The mantle`, `The outer core`],
              correctIndex: 1,
            },
            {
              format:       'multiple-choice',
              question:     `What causes tectonic plates to move?`,
              options:      [`Earth's rotation spinning the crust outward`, `Convection currents in the mantle carrying heat from Earth's core`, `The Moon's gravitational pull on the crust`, `Earthquakes pushing plates apart over time`],
              correctIndex: 1,
            },
            {
              format:       'multiple-choice',
              question:     `What is the difference between magma and lava?`,
              options:      [`They are the same thing — two names for the same material`, `Lava is hotter than magma because it has been heated by the Sun`, `Magma is molten rock underground; lava is molten rock that has reached Earth's surface`, `Magma comes from volcanoes; lava comes from earthquakes`],
              correctIndex: 2,
            },
            {
              format:        'true-false',
              question:      `The Himalayas — the world's tallest mountain range — formed where two continental plates collided and are still growing today.`,
              correctAnswer: true,
            },
            {
              format:       'fill-blank',
              question:     `Earth's surface is divided into approximately ___ major tectonic plates.`,
              options:      [`15`, `5`, `50`, `3`],
              correctIndex: 0,
            },
            {
              format:       'multiple-choice',
              question:     `What is a fault line?`,
              options:      [`A crack in a volcano's wall`, `A boundary or fracture in Earth's crust where rock has slipped — a site of past and potential future earthquakes`, `A measurement of earthquake strength on a scale`, `A layer of Earth's crust that has completely melted`],
              correctIndex: 1,
            },
          ],
        },

        // PHASE 5 — REAL-WORLD CONNECTION
        {
          type:            'real-world',
          guideText:       `Next time you see a mountain range or rocky coastline, think about the enormous forces that built it — plate collisions happening right now beneath your feet.`,
          familyAdventure: `Look up a real-time earthquake map online — services like the USGS Earthquake Hazards Program show every earthquake happening worldwide today. Where are they clustered? Do they follow the plate boundaries? Find the Ring of Fire on the map and see how many quakes are occurring along it right now. Compare it to the middle of continents far from plate edges.`,
          creativePrompt:  `Build a model of Earth's layers using different coloured playdough or clay. Use a thin outer layer for the crust, a thick middle layer for the mantle, and two inner layers for the outer and inner core. Then carefully slice it open to see the cross-section. Label each layer with its name and one key fact. Can you show where a volcano might break through?`,
        },

        // PHASE 6 — CELEBRATION
        {
          type:      'celebration',
          xpEarned:  50,
          badge:     'geo-explorer',
          badgeName: `Geo Explorer`,
          message:   `Brilliant work, {name}! You now know that Earth is not a still and solid ball — its surface is a slowly moving puzzle of plates, cracking, colliding, and building the mountains and ocean floors over millions of years. The ground beneath your feet is alive. Nova is so proud to share the universe with you.`,
        },
      ],
    },
  ],
};

// Log on module load — confirms lesson wired correctly + verifies image assets at runtime
(() => {
  const l    = cosmos_explorer_l16_screens.lessons[0];
  const mags = l.screens.filter(s => s.type === 'magazine').length;
  const game = l.screens.find(s => s.type === 'interactive')?.items?.length || 0;
  const quiz = l.screens.find(s => s.type === 'quiz')?.questions?.length || 0;
  console.log(`[LESSON-COSMOS-L16] Loaded: "Volcanoes and Earthquakes" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
  Promise.all([
    fetch('/explorer-assets/cosmos/l16-s1-earth-layers.png',      { method: 'HEAD' }),
    fetch('/explorer-assets/cosmos/l16-s2-mantle-convection.png', { method: 'HEAD' }),
    fetch('/explorer-assets/cosmos/l16-s3-tectonic-plates.png',   { method: 'HEAD' }),
    fetch('/explorer-assets/cosmos/l16-s4-plates-meet.png',       { method: 'HEAD' }),
    fetch('/explorer-assets/cosmos/l16-s5-volcano.png',           { method: 'HEAD' }),
    fetch('/explorer-assets/cosmos/l16-s6-earthquake.png',        { method: 'HEAD' }),
  ]).then(([r1, r2, r3, r4, r5, r6]) => {
    console.log(`[ASSET-CHECK-COSMOS-L16] earth-layers: ${r1.ok}, mantle-convection: ${r2.ok}, tectonic-plates: ${r3.ok}, plates-meet: ${r4.ok}, volcano: ${r5.ok}, earthquake: ${r6.ok}`);
  }).catch(() => {
    console.log('[ASSET-CHECK-COSMOS-L16] Could not verify image assets — network check failed');
  });
})();

export default cosmos_explorer_l16_screens;
