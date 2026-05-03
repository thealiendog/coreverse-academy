// ============================================================
// COREVERSE EXPLORERS — Cosmos · Lesson 6
// "Rocks, Minerals, and Fossils"
// Ages 6–8 | Guide: Nova | ExplorerLessonPlayer format
// ============================================================

const cosmos_explorer_l06_screens = {
  ageBand:   'explorers',
  subjectId: 'cosmos',
  guide:     'nova',
  lessons: [
    {
      id:        'cs-6-8-06',
      title:     `Rocks, Minerals, and Fossils`,
      duration:  12,
      xpReward:  50,
      badge:     'rock-hound',
      badgeName: `Rock Hound`,
      screens: [
        // PHASE 1 — WELCOME
        {
          type:      'welcome',
          guideText: `The ground beneath your feet is a library of Earth's history going back billions of years. Rocks record ancient oceans, volcanic eruptions, and creatures that lived long before humans existed. And if you know how to read them, they tell an incredible story.`,
        },

        // PHASE 2 — MAGAZINE STORY (4 sections)
        {
          type:          'magazine',
          section:       1,
          totalSections: 4,
          headline:      `The Three Types of Rock`,
          paragraphs: [
            `All rocks on Earth belong to one of three families. Igneous rocks form when molten rock — magma underground or lava on the surface — cools and solidifies. Granite and obsidian are igneous rocks.`,
            `Sedimentary rocks form when layers of sand, shells, and mud slowly pile up and get compressed over millions of years. Sandstone and limestone are sedimentary rocks — and they're the ones most likely to contain fossils.`,
            `Metamorphic rocks form when existing rocks get transformed by intense heat and pressure deep underground. Marble was once limestone. Slate was once a softer rock called shale. Heat and pressure turned them into something completely new.`,
          ],
          image:        '/explorer-assets/cosmos/l06-magazine-rock-types.png',
          imageCaption: `The three rock families — igneous, sedimentary, and metamorphic, each formed in a different way`,
          vocab: [
            { word: 'igneous rock',      definition: `Rock formed when molten rock (magma or lava) cools and solidifies — examples include granite and obsidian, which form from cooling volcanic material.`,                             audioPrompt: `Igneous rock — rock formed when molten rock, magma or lava, cools and solidifies. Examples include granite and obsidian.` },
            { word: 'sedimentary rock',  definition: `Rock formed when layers of sand, shells, and mud get compressed over millions of years — examples include sandstone and limestone, which often contain fossils.`, audioPrompt: `Sedimentary rock — rock formed when layers of sand, shells, and mud get compressed over millions of years. Examples include sandstone and limestone.` },
          ],
        },
        {
          type:          'magazine',
          section:       2,
          totalSections: 4,
          headline:      `Minerals: The Ingredients of Rock`,
          paragraphs: [
            `Rocks are made of minerals — naturally occurring solid substances with specific crystal structures and chemical compositions. There are over 4,000 known minerals. Every rock is a mixture of one or more of them.`,
            `Some common minerals: quartz is found in most sand. Feldspar is the most common mineral in Earth's crust. Calcite is found in limestone. Mica is the shiny flakes you sometimes see glittering inside a rock.`,
            `Gemstones like diamonds, rubies, and emeralds are also minerals — just rare and extraordinarily beautiful ones. A diamond is pure carbon squeezed into a crystal under enormous pressure deep inside the Earth. The rarest minerals become the most precious things on the planet.`,
          ],
          image:        '/explorer-assets/cosmos/l06-magazine-minerals.png',
          imageCaption: `Minerals — the building blocks of all rocks, from common quartz to rare diamonds`,
          vocab: [
            { word: 'mineral',   definition: `A naturally occurring solid substance with a specific crystal structure and chemical composition — rocks are made of minerals, and there are over 4,000 known types.`, audioPrompt: `Mineral — a naturally occurring solid substance with a specific crystal structure and chemical composition. Rocks are made of minerals, and there are over 4,000 known types.` },
            { word: 'gemstone',  definition: `A rare and beautiful mineral — diamonds, rubies, and emeralds are all gemstones, formed under extreme conditions deep inside the Earth.`,                               audioPrompt: `Gemstone — a rare and beautiful mineral. Diamonds, rubies, and emeralds are all gemstones, formed under extreme conditions deep inside the Earth.` },
          ],
        },
        {
          type:          'magazine',
          section:       3,
          totalSections: 4,
          headline:      `The Rock Cycle`,
          paragraphs: [
            `Rocks are not permanent — they slowly change from one type to another in what scientists call the rock cycle. It's a continuous loop that takes millions of years, driven by heat from Earth's interior and energy from the Sun.`,
            `Here's how it goes: lava cools to become igneous rock. Igneous rock gets broken down by wind and water into sediment. Sediment compresses into sedimentary rock. Sedimentary rock gets buried, heated, and transformed into metamorphic rock. Metamorphic rock gets pulled deep enough to melt back into magma. The cycle begins again.`,
            `Nothing is wasted. The rock you pick up off the ground today may once have been part of a mountain, an ancient seafloor, or the interior of a volcano — and millions of years from now it will be something else entirely.`,
          ],
          image:        '/explorer-assets/cosmos/l06-magazine-rock-cycle.png',
          imageCaption: `The rock cycle — a continuous loop transforming rocks over millions of years`,
          vocab: [
            { word: 'rock cycle', definition: `The continuous process by which rocks slowly change from one type to another over millions of years — driven by heat from Earth's interior and energy from the Sun.`, audioPrompt: `Rock cycle — the continuous process by which rocks slowly change from one type to another over millions of years, driven by heat from Earth's interior and energy from the Sun.` },
            { word: 'weathering', definition: `The gradual breaking down of rocks by wind, water, and temperature changes — weathered rock becomes sediment that can eventually compress into sedimentary rock.`,     audioPrompt: `Weathering — the gradual breaking down of rocks by wind, water, and temperature changes. Weathered rock becomes sediment that can eventually compress into sedimentary rock.` },
          ],
        },
        {
          type:          'magazine',
          section:       4,
          totalSections: 4,
          headline:      `Fossils: Ancient Life Preserved`,
          paragraphs: [
            `When an organism dies and gets quickly buried by sediment, something remarkable can happen. Over millions of years, minerals slowly seep in and replace the original material, creating a rock copy of the organism — a fossil.`,
            `Fossils show us animals and plants that lived millions of years ago — from dinosaurs to ancient sea creatures to the very first flowers. Some fossils look exactly like the creature that made them. Others are just outlines or footprints pressed into ancient mud, now hardened to stone.`,
            `The oldest fossils on Earth are bacteria from 3.5 billion years ago. That means life existed on this planet almost since Earth itself formed. Every fossil is a message from the deep past — a living thing that left its mark and never quite disappeared.`,
          ],
          image:        '/explorer-assets/cosmos/l06-magazine-fossils.png',
          imageCaption: `Fossils — preserved remains of ancient life, locked in rock for millions of years`,
          vocab: [
            { word: 'fossil',   definition: `The preserved remains or impression of an ancient organism, formed when minerals replace the original material over millions of years — a record of past life locked in rock.`, audioPrompt: `Fossil — the preserved remains or impression of an ancient organism, formed when minerals replace the original material over millions of years. A record of past life locked in rock.` },
            { word: 'sediment', definition: `Tiny particles of rock, shell, and organic material that settle in layers — when compressed over millions of years, sediment becomes sedimentary rock and can preserve fossils.`,  audioPrompt: `Sediment — tiny particles of rock, shell, and organic material that settle in layers. When compressed over millions of years, sediment becomes sedimentary rock and can preserve fossils.` },
          ],
        },

        // PHASE 3 — INTERACTIVE
        {
          type:          'interactive',
          activityType:  'drag-match',
          instruction:   `Tap each card, then tap which rock category it belongs to!`,
          guideText:     `Rocks come in three types — igneous, sedimentary, and metamorphic — each formed in a completely different way. And fossils are something special found inside one of those types. Can you sort these four into the right category?`,
          columnHeaders: [`What Is It?`, `Rock Category`],
          items: [
            { image: 'l06-game-obsidian.png',  label: `Obsidian — a shiny black glassy rock formed from rapidly cooling lava.`,                                                correctMatch: 'igneous',      objectPosition: 'center 50%', matchPhrase: `Igneous! Obsidian forms when lava cools so quickly that crystals don't have time to form — it becomes a natural volcanic glass. It's been used to make cutting tools for thousands of years because it fractures into razor-sharp edges.` },
            { image: 'l06-game-sandstone.png', label: `Sandstone — a rock showing clear bands where layers of sand were compressed over millions of years.`,                   correctMatch: 'sedimentary',  objectPosition: 'center 50%', matchPhrase: `Sedimentary! Sandstone forms when sand grains are compressed together over millions of years. Those visible bands are layers of sediment from different time periods — like pages in Earth's history book.` },
            { image: 'l06-game-marble.png',    label: `Marble — a rock formed when limestone was transformed by extreme heat and pressure deep underground.`,                  correctMatch: 'metamorphic',  objectPosition: 'center 50%', matchPhrase: `Metamorphic! Marble was once ordinary limestone — but heat and pressure deep underground transformed it into something completely different. The same transformation makes marble hard enough to last thousands of years in buildings and sculptures.` },
            { image: 'l06-game-ammonite.png',  label: `An ammonite — a spiral shell from an ancient sea creature, preserved in rock for millions of years.`,                   correctMatch: 'fossil',       objectPosition: 'center 50%', matchPhrase: `Fossil! Ammonites were ancient sea creatures that lived alongside the dinosaurs. When they died and sank to the seafloor, sediment buried them, minerals slowly replaced their shells, and the result is a rock copy that has survived for hundreds of millions of years.` },
          ],
          buckets: [
            { id: 'igneous',     label: `🔥 Igneous`,     color: '#F59E0B' },
            { id: 'sedimentary', label: `📜 Sedimentary`, color: '#60A5FA' },
            { id: 'metamorphic', label: `💎 Metamorphic`, color: '#818CF8' },
            { id: 'fossil',      label: `🦕 Fossil`,      color: '#34D399' },
          ],
        },

        // PHASE 4 — MASTERY QUIZ
        {
          type:      'quiz',
          guideText: `Quiz time, {name}! Let's see what you've learned about rocks, minerals, and fossils. Answer all 6 questions to earn your Rock Hound badge!`,
          questions: [
            {
              format:       'multiple-choice',
              question:     `How do igneous rocks form?`,
              options:      [`When layers of sediment compress over time`, `When molten rock (magma or lava) cools and solidifies`, `When rocks are transformed by heat and pressure`, `When minerals dissolve in water`],
              correctIndex: 1,
            },
            {
              format:       'multiple-choice',
              question:     `What are rocks made of?`,
              options:      [`Fossils`, `Minerals`, `Compressed soil`, `Dried magma only`],
              correctIndex: 1,
            },
            {
              format:       'multiple-choice',
              question:     `How does a fossil form?`,
              options:      [`Animals freeze and get preserved in ice only`, `An organism dies, gets buried in sediment, and minerals slowly replace its original material over millions of years`, `Bones turn into rock overnight`, `Lava covers an animal and hardens around it`],
              correctIndex: 1,
            },
            {
              format:        'true-false',
              question:      `The rock cycle means rocks slowly change from one type to another over millions of years.`,
              correctAnswer: true,
            },
            {
              format:       'fill-blank',
              question:     `The oldest fossils on Earth are ___ from 3.5 billion years ago.`,
              options:      [`bacteria`, `dinosaurs`, `fish`, `plants`],
              correctIndex: 0,
            },
            {
              format:       'multiple-choice',
              question:     `Which type of rock forms when layers of sediment are compressed over millions of years?`,
              options:      [`Igneous`, `Metamorphic`, `Sedimentary`, `Fossil`],
              correctIndex: 2,
            },
          ],
        },

        // PHASE 5 — REAL-WORLD CONNECTION
        {
          type:            'real-world',
          guideText:       `Go outside and pick up a few rocks — try to identify which type each one is!`,
          familyAdventure: `Visit a natural history museum, a rock and gem show, or a geology park near you. Try to find a real fossil to look at up close. If you can't find one nearby, order a small ammonite or shark tooth fossil online — they're inexpensive and incredible to hold something millions of years old in your hand.`,
          creativePrompt:  `Go outside and collect 5–10 rocks of different shapes, colours, and textures. Try to figure out: Is it igneous (crystalline, often dark or sparkly)? Sedimentary (layers, sometimes sandy texture, sometimes contains fossils)? Metamorphic (banded layers, often shiny)? Look up images of each type online to help you identify what you found.`,
        },

        // PHASE 6 — CELEBRATION
        {
          type:      'celebration',
          xpEarned:  50,
          badge:     'rock-hound',
          badgeName: `Rock Hound`,
          message:   `Brilliant work, {name}! You now know that the ground beneath your feet is a library of Earth's history — and that rocks have been cycling through lava, sediment, and transformation for billions of years. The Earth itself is always changing. Nova is so proud to share the universe with you.`,
        },
      ],
    },
  ],
};

// Log on module load — confirms lesson wired correctly + verifies image assets at runtime
(() => {
  const l    = cosmos_explorer_l06_screens.lessons[0];
  const mags = l.screens.filter(s => s.type === 'magazine').length;
  const game = l.screens.find(s => s.type === 'interactive')?.items?.length || 0;
  const quiz = l.screens.find(s => s.type === 'quiz')?.questions?.length || 0;
  console.log(`[LESSON-COSMOS-L06] Loaded: "Rocks, Minerals, and Fossils" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
  Promise.all([
    fetch('/explorer-assets/cosmos/l06-magazine-rock-types.png', { method: 'HEAD' }),
    fetch('/explorer-assets/cosmos/l06-magazine-minerals.png',   { method: 'HEAD' }),
    fetch('/explorer-assets/cosmos/l06-magazine-rock-cycle.png', { method: 'HEAD' }),
    fetch('/explorer-assets/cosmos/l06-magazine-fossils.png',    { method: 'HEAD' }),
  ]).then(([r1, r2, r3, r4]) => {
    console.log(`[ASSET-CHECK-COSMOS-L06] rock-types: ${r1.ok}, minerals: ${r2.ok}, rock-cycle: ${r3.ok}, fossils: ${r4.ok}`);
  }).catch(() => {
    console.log('[ASSET-CHECK-COSMOS-L06] Could not verify image assets — network check failed');
  });
})();

export default cosmos_explorer_l06_screens;
