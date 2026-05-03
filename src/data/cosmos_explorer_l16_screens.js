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

        // PHASE 2 — MAGAZINE STORY (4 sections)
        {
          type:          'magazine',
          section:       1,
          totalSections: 4,
          headline:      `Earth's Layered Structure`,
          paragraphs: [
            `Earth is not a solid ball — it has four distinct layers. The outermost layer, the crust, is the thin rocky shell we live on. Below the crust is the mantle — a thick layer of hot, slow-flowing rock. The outer core is liquid iron and nickel, swirling at enormous temperatures. At the very centre is the inner core — a solid ball of iron and nickel under immense pressure.`,
            `The temperature increases dramatically as you go deeper. The crust is relatively cool. The mantle, which makes up about 84% of Earth's volume, is extremely hot — hot enough that rock behaves almost like a thick, slow liquid over millions of years. This slow movement is called convection, driven by heat rising from the core.`,
            `It's this internal heat that powers everything — the movement of continents, the building of mountains, the eruption of volcanoes, and the shaking of earthquakes. Earth's surface is not permanent. It has been constantly reshaped by internal forces for 4.5 billion years.`,
          ],
          image:        '/explorer-assets/cosmos/l16-magazine-earth-structure.png',
          imageCaption: `Earth's layered structure — crust, mantle, outer core, inner core, each with different properties`,
          vocab: [
            { word: 'mantle',       definition: `The thick layer of hot, slow-flowing rock below Earth's crust — it makes up about 84% of Earth's volume and drives the movement of tectonic plates through convection currents.`, audioPrompt: `Mantle — the thick layer of hot, slow-flowing rock below Earth's crust. It makes up about 84% of Earth's volume and drives the movement of tectonic plates through convection currents.` },
            { word: 'convection',   definition: `The movement of heat through a fluid — in Earth's mantle, hot rock rises, cools, and sinks in slow circular currents that push tectonic plates across the surface.`,              audioPrompt: `Convection — the movement of heat through a fluid. In Earth's mantle, hot rock rises, cools, and sinks in slow circular currents that push tectonic plates across the surface.` },
          ],
        },
        {
          type:          'magazine',
          section:       2,
          totalSections: 4,
          headline:      `Tectonic Plates: Earth's Moving Puzzle`,
          paragraphs: [
            `Earth's crust is broken into about 15 major tectonic plates — enormous slabs of rock that fit together like a puzzle and float on the slow-moving mantle beneath. These plates are constantly moving, typically a few centimetres per year — about the speed your fingernails grow. Over millions of years, those tiny movements add up to continents crossing oceans.`,
            `Where plates meet, dramatic things happen. When two plates collide, the crust crumples upward into mountain ranges — the Himalayas are still growing today where the Indian plate crashes into the Eurasian plate. When plates pull apart, they create rift valleys and new ocean floor. When plates slide past each other, they lock and release in earthquakes.`,
            `Most of Earth's volcanic and earthquake activity happens along plate boundaries — a zone called the Ring of Fire circles the Pacific Ocean and is home to about 75% of the world's volcanoes and 90% of its earthquakes. The plates don't move smoothly — they stick, build pressure, and release it suddenly.`,
          ],
          image:        '/explorer-assets/cosmos/l16-magazine-tectonic-plates.png',
          imageCaption: `Tectonic plates — Earth's puzzle-piece crust sections, moving centimetres per year and reshaping the surface`,
          vocab: [
            { word: 'tectonic plates', definition: `The massive moving slabs of rock that make up Earth's crust — there are about 15 major plates, floating on the mantle and slowly shifting, colliding, and pulling apart.`,    audioPrompt: `Tectonic plates — the massive moving slabs of rock that make up Earth's crust. There are about 15 major plates, floating on the mantle and slowly shifting, colliding, and pulling apart.` },
            { word: 'Ring of Fire',    definition: `A zone of intense volcanic and earthquake activity circling the Pacific Ocean — home to about 75% of the world's volcanoes and 90% of its earthquakes, following plate boundaries.`, audioPrompt: `Ring of Fire — a zone of intense volcanic and earthquake activity circling the Pacific Ocean, home to about 75% of the world's volcanoes and 90% of its earthquakes, following plate boundaries.` },
          ],
        },
        {
          type:          'magazine',
          section:       3,
          totalSections: 4,
          headline:      `Volcanoes: Fire From Below`,
          paragraphs: [
            `A volcano forms where molten rock from the mantle finds a pathway to the surface. Underground, this molten rock is called magma. When it erupts through the surface — as lava, ash, or gas — it's called lava. The difference is just location: magma is below ground, lava is above. Some eruptions are slow and flowing; others are catastrophic explosions.`,
            `Shield volcanoes, like those in Hawaii, have gently sloping sides and produce flowing lava rather than explosive eruptions. Composite volcanoes, like Mount Fuji or Mount St Helens, are steeper and can erupt with enormous force, ejecting ash clouds high into the atmosphere. The type of eruption depends on the chemistry of the magma — thick, gas-rich magma explodes; thin magma flows.`,
            `Some volcanoes form over "hotspots" — columns of unusually hot mantle material rising through the crust. As a tectonic plate slowly moves over a hotspot, it creates a chain of volcanic islands — which is exactly how the Hawaiian Islands formed. The oldest islands are furthest from the hotspot; the youngest, most active volcano is above it now.`,
          ],
          image:        '/explorer-assets/cosmos/l16-magazine-volcanoes.png',
          imageCaption: `Volcanoes — where magma breaks through to the surface as lava, shaped by plate boundaries and hotspots`,
          vocab: [
            { word: 'magma', definition: `Molten rock beneath Earth's surface — when magma erupts and reaches the surface through a volcano, it is called lava. Magma forms in the mantle where temperatures and pressures are extreme.`, audioPrompt: `Magma — molten rock beneath Earth's surface. When magma erupts and reaches the surface through a volcano, it is called lava. Magma forms in the mantle where temperatures and pressures are extreme.` },
            { word: 'lava',  definition: `Molten rock that has erupted from a volcano and reached Earth's surface — the same material as magma, but above ground. Lava can flow slowly or explode dramatically depending on its composition.`,  audioPrompt: `Lava — molten rock that has erupted from a volcano and reached Earth's surface. The same material as magma, but above ground. Lava can flow slowly or explode dramatically depending on its composition.` },
          ],
        },
        {
          type:          'magazine',
          section:       4,
          totalSections: 4,
          headline:      `Earthquakes: When the Ground Shakes`,
          paragraphs: [
            `Earthquakes happen when two tectonic plates that have been locked against each other suddenly slip. The point underground where the slip begins is called the focus. Directly above it on the surface is the epicentre — where the shaking is usually strongest. From the focus, seismic waves radiate outward in all directions through the rock, like ripples on a pond.`,
            `The strength of an earthquake is measured on the Richter scale. Each whole number increase represents about 32 times more energy released. A magnitude 3 earthquake is barely noticeable. A magnitude 7 can collapse buildings. A magnitude 9 — like the 2011 Tōhoku earthquake in Japan — is catastrophic, capable of triggering tsunamis that cross entire oceans.`,
            `Most earthquakes happen at plate boundaries, but they can also occur along old fault lines far from the nearest plate edge. The 1811 New Madrid earthquake shook the central United States, far from any plate boundary, because of ancient faults deep in the crust. Fault lines are zones of weakness in the rock where past slipping has occurred — and may occur again.`,
          ],
          image:        '/explorer-assets/cosmos/l16-magazine-earthquakes.png',
          imageCaption: `Earthquakes — sudden plate slips releasing seismic energy outward from the focus to the epicentre`,
          vocab: [
            { word: 'epicentre',    definition: `The point on Earth's surface directly above the underground focus of an earthquake — usually where shaking is strongest, as seismic waves radiate outward from this point.`,            audioPrompt: `Epicentre — the point on Earth's surface directly above the underground focus of an earthquake. Usually where shaking is strongest, as seismic waves radiate outward from this point.` },
            { word: 'fault line',   definition: `A fracture or zone of fractures in Earth's crust where two blocks of rock have slipped past each other — fault lines are sites of past and potential future earthquakes.`,           audioPrompt: `Fault line — a fracture or zone of fractures in Earth's crust where two blocks of rock have slipped past each other. Fault lines are sites of past and potential future earthquakes.` },
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
            { image: 'l16-game-himalayas.png',      label: `Two continental plates colliding head-on, pushing rock upward into towering mountain ranges.`,          correctMatch: 'colliding',     objectPosition: 'center 50%', matchPhrase: `Colliding plates! The Himalayas — the world's tallest mountain range — formed where the Indian plate crashed into the Eurasian plate. When two continental plates collide, neither sinks; instead the crust crumples and is forced upward. The Himalayas are still growing by a few millimetres every year.` },
            { image: 'l16-game-rift-valley.png',    label: `Two plates pulling apart, creating a long valley where new crust forms as magma wells up between them.`, correctMatch: 'pulling-apart', objectPosition: 'center 50%', matchPhrase: `Pulling apart! When two plates move away from each other, a rift valley forms between them. The East African Rift Valley is pulling Africa apart right now — in millions of years it may become a new ocean. At mid-ocean ridges, this process creates new ocean floor constantly.` },
            { image: 'l16-game-volcano-hotspot.png', label: `A chain of volcanic islands forming over a stationary hotspot deep in the mantle beneath a moving plate.`, correctMatch: 'hotspot',       objectPosition: 'center 50%', matchPhrase: `Hotspot! The Hawaiian Islands formed as the Pacific plate slowly moved over a stationary column of extra-hot mantle material. Each island is older than the one before it — the oldest are eroding back into the sea, while the youngest, most active volcano sits directly over the hotspot today.` },
            { image: 'l16-game-transform-fault.png', label: `Two plates grinding sideways past each other, building stress along a fault that releases suddenly as earthquakes.`, correctMatch: 'sliding-past',  objectPosition: 'center 50%', matchPhrase: `Sliding past! When plates grind sideways, they create transform faults. The San Andreas Fault in California is a famous transform boundary — the Pacific and North American plates slide past each other, locking and releasing in earthquakes. Los Angeles is slowly moving northward toward San Francisco at about 5 centimetres per year.` },
          ],
          buckets: [
            { id: 'colliding',     label: `🏔️ Colliding`,      color: '#60A5FA' },
            { id: 'pulling-apart', label: `↔️ Pulling Apart`,  color: '#34D399' },
            { id: 'hotspot',       label: `🌋 Hotspot`,        color: '#F59E0B' },
            { id: 'sliding-past',  label: `⚡ Sliding Past`,   color: '#818CF8' },
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
    fetch('/explorer-assets/cosmos/l16-magazine-earth-structure.png',  { method: 'HEAD' }),
    fetch('/explorer-assets/cosmos/l16-magazine-tectonic-plates.png',  { method: 'HEAD' }),
    fetch('/explorer-assets/cosmos/l16-magazine-volcanoes.png',        { method: 'HEAD' }),
    fetch('/explorer-assets/cosmos/l16-magazine-earthquakes.png',      { method: 'HEAD' }),
  ]).then(([r1, r2, r3, r4]) => {
    console.log(`[ASSET-CHECK-COSMOS-L16] earth-structure: ${r1.ok}, tectonic-plates: ${r2.ok}, volcanoes: ${r3.ok}, earthquakes: ${r4.ok}`);
  }).catch(() => {
    console.log('[ASSET-CHECK-COSMOS-L16] Could not verify image assets — network check failed');
  });
})();

export default cosmos_explorer_l16_screens;
