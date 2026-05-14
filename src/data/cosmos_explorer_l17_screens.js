// ============================================================
// COREVERSE EXPLORERS — Cosmos · Lesson 17
// "Electricity: What Is It?"
// Ages 6–8 | Guide: Nova | ExplorerLessonPlayer format
// ============================================================

const cosmos_explorer_l17_screens = {
  ageBand:   'explorers',
  subjectId: 'cosmos',
  guide:     'nova',
  lessons: [
    {
      id:        'cs-6-8-17',
      title:     `Electricity: What Is It?`,
      duration:  12,
      xpReward:  50,
      badge:     'electricity-expert',
      badgeName: `Electricity Expert`,
      screens: [
        // PHASE 1 — WELCOME
        {
          type:      'welcome',
          guideText: `Every light you switch on, every device you charge, every screen you touch runs on electricity. It powers hospitals, cities, the internet — essentially all of modern civilisation. And it all comes down to something almost unimaginably small: electrons moving through materials.`,
        },

        // PHASE 2 — MAGAZINE STORY (6 sections)
        {
          type:          'magazine',
          section:       1,
          totalSections: 6,
          headline:      `Electrons in Motion`,
          paragraphs: [
            `Everything is made of atoms. Atoms have protons and neutrons at the centre, with tiny electrons whizzing around the outside.`,
            `In metals, the outer electrons are loosely held — they can jump easily from atom to atom. Electricity is electrons flowing through a material.`,
          ],
          image:        '/explorer-assets/cosmos/l17-s1-electrons.png',
          imageCaption: `Electricity is just electrons jumping from atom to atom inside a material`,
          vocab: [
            { word: 'electron', definition: `A tiny particle that orbits the nucleus of an atom. Electrons carry electric charge — and their movement creates electricity.`, audioPrompt: `Electron — a tiny particle that orbits the nucleus of an atom. Electrons carry electric charge, and their movement creates electricity.` },
            { word: 'atom',     definition: `The basic building block of everything in the universe. Made of protons, neutrons, and electrons.`, audioPrompt: `Atom — the basic building block of everything in the universe. Made of protons, neutrons, and electrons.` },
          ],
        },
        {
          type:          'magazine',
          section:       2,
          totalSections: 6,
          headline:      `Current and Voltage`,
          paragraphs: [
            `Electric current is the flow of electrons through a wire. When billions of them move together, that's the current powering your devices.`,
            `Voltage is the push behind the flow — like water pressure in a pipe. The bigger the voltage, the harder the electrons are shoved.`,
          ],
          image:        '/explorer-assets/cosmos/l17-s2-current-voltage.png',
          imageCaption: `Current is the flow of electrons. Voltage is the push behind that flow.`,
          vocab: [
            { word: 'electric current', definition: `The flow of electrons through a wire or other conductor. More electrons flowing means more current.`, audioPrompt: `Electric current — the flow of electrons through a wire or other conductor. More electrons flowing means more current.` },
            { word: 'voltage',          definition: `The push behind electric current — like water pressure in a pipe. Higher voltage pushes electrons harder.`, audioPrompt: `Voltage — the push behind electric current, like water pressure in a pipe. Higher voltage pushes electrons harder.` },
          ],
        },
        {
          type:          'magazine',
          section:       3,
          totalSections: 6,
          headline:      `Conductors vs Insulators`,
          paragraphs: [
            `Materials that let electrons flow freely are called conductors. Metals like copper, aluminum, silver, and gold are excellent conductors.`,
            `Materials that block electron flow are called insulators. Rubber, plastic, glass, and wood are insulators. That's why wires are metal inside and rubber outside.`,
          ],
          image:        '/explorer-assets/cosmos/l17-s3-conductor-insulator.png',
          imageCaption: `Conductors let electrons through. Insulators stop them. Wires use both.`,
          vocab: [
            { word: 'conductor', definition: `A material that lets electrons flow through it easily. Metals are the best conductors — that's why wires are made of copper.`, audioPrompt: `Conductor — a material that lets electrons flow through it easily. Metals are the best conductors, that's why wires are made of copper.` },
            { word: 'insulator', definition: `A material that blocks electron flow. Rubber, plastic, glass, and wood are insulators — used to keep electricity safely contained.`, audioPrompt: `Insulator — a material that blocks electron flow. Rubber, plastic, glass, and wood are insulators, used to keep electricity safely contained.` },
          ],
        },
        {
          type:          'magazine',
          section:       4,
          totalSections: 6,
          headline:      `Circuits`,
          paragraphs: [
            `For electricity to flow, electrons need a complete loop — called a circuit. Every circuit has a power source, a conductor, and a device to power.`,
            `A switch opens and closes a gap in the circuit. Flip it on, the loop closes, electrons flow, the light glows. Flip it off, everything stops.`,
          ],
          image:        '/explorer-assets/cosmos/l17-s4-circuit.png',
          imageCaption: `A circuit is a complete loop. Break it anywhere, and the electricity stops.`,
          vocab: [
            { word: 'circuit', definition: `A complete loop that lets electricity flow from a power source and back to it. Break the loop anywhere and the flow stops.`, audioPrompt: `Circuit — a complete loop that lets electricity flow from a power source and back to it. Break the loop anywhere and the flow stops.` },
            { word: 'switch',  definition: `A device that opens or closes a gap in a circuit — turning the flow of electricity on or off.`, audioPrompt: `Switch — a device that opens or closes a gap in a circuit, turning the flow of electricity on or off.` },
          ],
        },
        {
          type:          'magazine',
          section:       5,
          totalSections: 6,
          headline:      `Series and Parallel`,
          paragraphs: [
            `Circuits can be wired two ways. In a series circuit, components are connected one after another. If one breaks, the whole thing stops.`,
            `In a parallel circuit, each component has its own path to the power. One failure doesn't affect the others. That's how your house is wired.`,
          ],
          image:        '/explorer-assets/cosmos/l17-s5-series-parallel.png',
          imageCaption: `Series circuits share one path. Parallel circuits give each component its own.`,
          vocab: [
            { word: 'series',   definition: `A circuit where all components are connected one after another in a single loop. Break one, you break them all.`, audioPrompt: `Series — a circuit where all components are connected one after another in a single loop. Break one, you break them all.` },
            { word: 'parallel', definition: `A circuit where each component has its own path to the power. One failure doesn't affect the others — used in household wiring.`, audioPrompt: `Parallel — a circuit where each component has its own path to the power. One failure doesn't affect the others, used in household wiring.` },
          ],
        },
        {
          type:          'magazine',
          section:       6,
          totalSections: 6,
          headline:      `Static and Lightning`,
          paragraphs: [
            `Rub a balloon on your hair and electrons jump from your hair to the balloon. Your hair stands up. This is static electricity.`,
            `Lightning is the same thing on a massive scale. A bolt can carry a billion volts and reach 30,000°C — five times hotter than the Sun's surface.`,
          ],
          image:        '/explorer-assets/cosmos/l17-s6-static-lightning.png',
          imageCaption: `Static electricity in your hair and lightning in the sky — the same phenomenon, different scales`,
          vocab: [
            { word: 'static electricity', definition: `A buildup of electric charge on the surface of an object — caused by electrons transferring through friction.`, audioPrompt: `Static electricity — a buildup of electric charge on the surface of an object, caused by electrons transferring through friction.` },
            { word: 'discharge',          definition: `The sudden release of built-up electric charge — from a tiny spark when you touch a doorknob to a giant lightning bolt.`, audioPrompt: `Discharge — the sudden release of built-up electric charge, from a tiny spark when you touch a doorknob to a giant lightning bolt.` },
          ],
        },

        // PHASE 3 — INTERACTIVE
        {
          type:          'interactive',
          activityType:  'drag-match',
          instruction:   `Tap each card, then tap whether it's a conductor or an insulator!`,
          guideText:     `Conductors let electrons flow freely — metals are the best conductors. Insulators resist electron flow — rubber, plastic, and glass block current. Knowing which is which is essential for using electricity safely. Can you sort these four materials correctly?`,
          columnHeaders: [`The Material`, `Conductor or Insulator?`],
          items: [
            { image: 'l17-game-copper-wire.png',   label: `A copper wire — the metal most commonly used inside electrical cables to carry current.`,                  correctMatch: 'conductor', objectPosition: 'center 50%', matchPhrase: `Conductor! Copper is one of the best conductors in the world — its free electrons move easily when voltage is applied. It's the metal inside almost every electrical wire in your home. Copper is used because it conducts electricity well, is flexible, and is relatively affordable.` },
            { image: 'l17-game-rubber-glove.png',  label: `A rubber glove — worn by electricians to protect them from electric shock when working with live wires.`, correctMatch: 'insulator', objectPosition: 'center 50%', matchPhrase: `Insulator! Rubber is an excellent insulator — electrons cannot flow through it easily. Electricians wear rubber gloves specifically because rubber won't let current pass through to their hands. This is the same reason electrical wires are coated in rubber or plastic — to keep the current safely inside.` },
            { image: 'l17-game-aluminum-foil.png', label: `Aluminum foil — a thin metal sheet used in cooking and packaging that also conducts electricity.`,      correctMatch: 'conductor', objectPosition: 'center 50%', matchPhrase: `Conductor! Aluminum is a metal, and like all metals it has free electrons that can move easily. Aluminum conducts electricity well — it's used in power lines and transmission cables because it's lighter and cheaper than copper for long-distance electricity delivery, even though copper conducts better.` },
            { image: 'l17-game-glass-rod.png',     label: `A glass rod — transparent and rigid, made entirely from non-metallic materials with no free electrons.`,  correctMatch: 'insulator', objectPosition: 'center 50%', matchPhrase: `Insulator! Glass has no free electrons available to carry current — it's an excellent insulator. Glass is used to make the ceramic insulators on power line towers, which hold the high-voltage cables in place without letting current leak into the tower and down to the ground.` },
          ],
          buckets: [
            { id: 'conductor', label: `⚡ Conductor`, color: '#60A5FA' },
            { id: 'insulator', label: `🛡️ Insulator`, color: '#34D399' },
          ],
        },

        // PHASE 4 — MASTERY QUIZ
        {
          type:      'quiz',
          guideText: `Quiz time, {name}! Let's see what you've learned about electricity. Answer all 6 questions to earn your Electricity Expert badge!`,
          questions: [
            {
              format:       'multiple-choice',
              question:     `What is electric current?`,
              options:      [`The voltage pushing electricity through a wire`, `The flow of electrons through a conductor`, `The resistance in a wire that slows electron flow`, `The charge stored in a battery waiting to be used`],
              correctIndex: 1,
            },
            {
              format:       'multiple-choice',
              question:     `Why are electrical wires coated in rubber or plastic?`,
              options:      [`To make them more flexible and easier to bend`, `To protect people — rubber and plastic are insulators that stop current from escaping the wire dangerously`, `To make electricity travel faster through the wire`, `To prevent the metal inside from rusting over time`],
              correctIndex: 1,
            },
            {
              format:       'multiple-choice',
              question:     `What must be true for electricity to flow in a circuit?`,
              options:      [`The circuit must be complete — a closed loop with no gaps`, `The circuit must contain a battery and a light bulb`, `The wires must be made of copper`, `The circuit must have a switch`],
              correctIndex: 0,
            },
            {
              format:        'true-false',
              question:      `Lightning is a giant static electricity discharge — a single bolt can reach temperatures of 30,000°C, about five times hotter than the surface of the Sun.`,
              correctAnswer: true,
            },
            {
              format:       'fill-blank',
              question:     `A complete path that allows electricity to flow from a power source and back again is called a ___.`,
              options:      [`circuit`, `conductor`, `current`, `voltage`],
              correctIndex: 0,
            },
            {
              format:       'multiple-choice',
              question:     `What causes static electricity?`,
              options:      [`Electric current flowing through the air between two objects`, `A buildup of electric charge on an object's surface when electrons transfer from one material to another through friction`, `A broken circuit releasing stored energy as a spark`, `Magnets attracting charged particles toward an object`],
              correctIndex: 1,
            },
          ],
        },

        // PHASE 5 — REAL-WORLD CONNECTION
        {
          type:            'real-world',
          guideText:       `Look at a light switch tonight — flipping it completes or breaks a circuit, letting electrons flow or stop in an instant.`,
          familyAdventure: `Do a conductor and insulator test at home. Collect 10 different small objects — a coin, a pencil, a key, a rubber band, a piece of foil, a spoon, a plastic clip, a piece of wood, a glass, and a paper clip. Build a simple circuit with a battery, two wires, and a small LED bulb (or torch bulb). Test each object by placing it between the two wires. If the bulb lights up, it's a conductor. Record your results. Were any surprises?`,
          creativePrompt:  `Draw a diagram of a complete circuit — include a battery, wires, a switch, and a light bulb. Label each part and explain what it does. Then draw a second version where the switch is open and the circuit is broken. Add arrows showing the direction electrons flow when the circuit is complete. What happens to the arrows when the switch is open?`,
        },

        // PHASE 6 — CELEBRATION
        {
          type:      'celebration',
          xpEarned:  50,
          badge:     'electricity-expert',
          badgeName: `Electricity Expert`,
          message:   `Brilliant work, {name}! You now know that electricity is not mysterious — it's electrons moving through materials, following the paths we build for them. Every device you use runs on the same principle: give electrons a complete path and they will flow. Nova is so proud to share the universe with you.`,
        },
      ],
    },
  ],
};

// Log on module load — confirms lesson wired correctly + verifies image assets at runtime
(() => {
  const l    = cosmos_explorer_l17_screens.lessons[0];
  const mags = l.screens.filter(s => s.type === 'magazine').length;
  const game = l.screens.find(s => s.type === 'interactive')?.items?.length || 0;
  const quiz = l.screens.find(s => s.type === 'quiz')?.questions?.length || 0;
  console.log(`[LESSON-COSMOS-L17] Loaded: "Electricity: What Is It?" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
  Promise.all([
    fetch('/explorer-assets/cosmos/l17-s1-electrons.png',          { method: 'HEAD' }),
    fetch('/explorer-assets/cosmos/l17-s2-current-voltage.png',    { method: 'HEAD' }),
    fetch('/explorer-assets/cosmos/l17-s3-conductor-insulator.png',{ method: 'HEAD' }),
    fetch('/explorer-assets/cosmos/l17-s4-circuit.png',            { method: 'HEAD' }),
    fetch('/explorer-assets/cosmos/l17-s5-series-parallel.png',    { method: 'HEAD' }),
    fetch('/explorer-assets/cosmos/l17-s6-static-lightning.png',   { method: 'HEAD' }),
  ]).then(([r1, r2, r3, r4, r5, r6]) => {
    console.log(`[ASSET-CHECK-COSMOS-L17] electrons: ${r1.ok}, current-voltage: ${r2.ok}, conductor-insulator: ${r3.ok}, circuit: ${r4.ok}, series-parallel: ${r5.ok}, static-lightning: ${r6.ok}`);
  }).catch(() => {
    console.log('[ASSET-CHECK-COSMOS-L17] Could not verify image assets — network check failed');
  });
})();

export default cosmos_explorer_l17_screens;
