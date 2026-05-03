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

        // PHASE 2 — MAGAZINE STORY (4 sections)
        {
          type:          'magazine',
          section:       1,
          totalSections: 4,
          headline:      `Electrons: The Source of Electricity`,
          paragraphs: [
            `Everything is made of atoms — and atoms have three kinds of particles. Protons and neutrons are packed tightly in the nucleus at the centre. Electrons orbit around the outside. In most atoms, the electrons are bound tightly to their nucleus. But in some materials — especially metals — electrons in the outermost orbit are loosely held and can move freely from atom to atom.`,
            `Electric current is simply the flow of these free electrons through a material. When billions of electrons move together in the same direction through a wire, that flow of charge is what we call electricity. The electrons themselves don't travel fast — they drift slowly — but the electrical signal propagates almost at the speed of light.`,
            `The force that drives electrons to flow is called voltage — think of it like pressure pushing water through a pipe. The resistance of a material is how much it opposes the flow. These three quantities — current, voltage, and resistance — are related by Ohm's Law, one of the most useful relationships in all of physics.`,
          ],
          image:        '/explorer-assets/cosmos/l17-magazine-electrons.png',
          imageCaption: `Electrons — free electrons in metals flowing through a conductor create the electric current we use`,
          vocab: [
            { word: 'electric current', definition: `The flow of electrons through a conducting material — measured in amperes. Current is what flows through a wire when a circuit is complete and voltage is applied.`,    audioPrompt: `Electric current — the flow of electrons through a conducting material, measured in amperes. Current is what flows through a wire when a circuit is complete and voltage is applied.` },
            { word: 'voltage',          definition: `The electrical pressure that drives electrons to flow through a circuit — like water pressure in a pipe. Measured in volts, it's the force that pushes current through a conductor.`, audioPrompt: `Voltage — the electrical pressure that drives electrons to flow through a circuit, like water pressure in a pipe. Measured in volts, it's the force that pushes current through a conductor.` },
          ],
        },
        {
          type:          'magazine',
          section:       2,
          totalSections: 4,
          headline:      `Conductors and Insulators`,
          paragraphs: [
            `Materials that allow electrons to flow freely are called conductors. Metals are the best conductors — copper, aluminum, silver, and gold all allow electrons to move easily. Copper is most commonly used in electrical wiring because it conducts electricity very well and is relatively affordable. Salt water is also a conductor, which is why you should never use electrical devices near water.`,
            `Materials that resist or block electron flow are called insulators. Rubber, plastic, glass, and wood are good insulators. Electrical wires are metal on the inside and coated with rubber or plastic on the outside — the metal carries the current, the insulator keeps it contained and prevents dangerous shocks. The insulating coating is what makes it safe to touch a wire.`,
            `Between conductors and insulators there are semiconductors — materials that can be switched between conducting and not conducting. Silicon is the most important semiconductor in the world. It's the foundation of computer chips, solar cells, and virtually all modern electronics. The ability to control exactly where and when electrons flow is what makes computers possible.`,
          ],
          image:        '/explorer-assets/cosmos/l17-magazine-conductors.png',
          imageCaption: `Conductors and insulators — metals carry electrons freely; rubber and plastic keep them safely contained`,
          vocab: [
            { word: 'conductor', definition: `A material that allows electrons to flow freely through it — metals like copper, silver, and aluminum are excellent conductors and are used in electrical wiring.`,              audioPrompt: `Conductor — a material that allows electrons to flow freely through it. Metals like copper, silver, and aluminum are excellent conductors and are used in electrical wiring.` },
            { word: 'insulator', definition: `A material that resists the flow of electrons — rubber, plastic, glass, and wood are insulators. Electrical wires are coated in insulators to contain current and prevent shocks.`, audioPrompt: `Insulator — a material that resists the flow of electrons. Rubber, plastic, glass, and wood are insulators. Electrical wires are coated in insulators to contain current and prevent shocks.` },
          ],
        },
        {
          type:          'magazine',
          section:       3,
          totalSections: 4,
          headline:      `Circuits: Giving Electricity a Path`,
          paragraphs: [
            `For electricity to flow, electrons need a complete, unbroken loop to travel through — called a circuit. A circuit has a power source (like a battery), conductors (wires), and a load (something that uses the electricity, like a light bulb or motor). If the loop is broken anywhere — even a tiny gap — current stops flowing immediately.`,
            `Circuits can be arranged in series or parallel. In a series circuit, components are connected one after another in a single loop. If one component fails, the whole circuit breaks. Early Christmas lights were wired in series — one burned-out bulb turned them all off. In a parallel circuit, each component has its own separate path to the power source. One failure doesn't affect the others — which is how household wiring works.`,
            `A switch is simply a device that opens and closes a gap in a circuit. When you flip a light switch on, you close the gap and complete the circuit — electrons flow, the bulb lights up. When you switch it off, you open the gap — the circuit breaks, and the flow stops immediately. Every switch you use every day works on exactly this principle.`,
          ],
          image:        '/explorer-assets/cosmos/l17-magazine-circuits.png',
          imageCaption: `Circuits — complete loops of conductors, power sources, and loads that let electrons flow and do work`,
          vocab: [
            { word: 'circuit',  definition: `A complete, closed loop through which electric current can flow — a circuit requires a power source, conductors, and a load, with no gaps in the loop.`,                          audioPrompt: `Circuit — a complete, closed loop through which electric current can flow. A circuit requires a power source, conductors, and a load, with no gaps in the loop.` },
            { word: 'parallel', definition: `A circuit arrangement where components have separate paths to the power source — if one component fails, the others continue working. Used in household wiring for safety and reliability.`, audioPrompt: `Parallel — a circuit arrangement where components have separate paths to the power source. If one component fails, the others continue working. Used in household wiring for safety and reliability.` },
          ],
        },
        {
          type:          'magazine',
          section:       4,
          totalSections: 4,
          headline:      `Static Electricity and Lightning`,
          paragraphs: [
            `Not all electricity flows through wires. Static electricity is a buildup of electric charge on the surface of an object — caused when electrons transfer from one material to another through friction. When you rub a balloon on your hair, electrons move from your hair to the balloon. The balloon becomes negatively charged; your hair becomes positively charged. Opposite charges attract — which is why the balloon sticks to the wall and your hair stands up.`,
            `When enough charge builds up on an object, it can discharge suddenly and dramatically. The spark you feel when you touch a metal doorknob after walking across carpet is a tiny static discharge. Lightning is the same phenomenon, operating on a scale that staggers the imagination.`,
            `Inside a thunderstorm cloud, ice crystals and water droplets collide, transferring charge. Positive charges build at the top of the cloud; negative charges accumulate at the bottom. When the charge difference becomes large enough, it discharges as lightning — a gigantic spark racing between cloud and ground. A single bolt can carry up to a billion volts and reach temperatures of 30,000°C — about five times hotter than the surface of the Sun.`,
          ],
          image:        '/explorer-assets/cosmos/l17-magazine-lightning.png',
          imageCaption: `Static electricity and lightning — charge buildup discharging as a spark, from balloon to bolt`,
          vocab: [
            { word: 'static electricity', definition: `A buildup of electric charge on the surface of an object, caused by electrons transferring between materials through friction — it discharges suddenly when the charge difference becomes large enough.`, audioPrompt: `Static electricity — a buildup of electric charge on the surface of an object, caused by electrons transferring between materials through friction. It discharges suddenly when the charge difference becomes large enough.` },
            { word: 'discharge',          definition: `The sudden release of built-up electric charge — from the tiny spark of a doorknob shock to the enormous bolt of lightning. Discharge happens when charge moves rapidly from one object to another.`,          audioPrompt: `Discharge — the sudden release of built-up electric charge, from the tiny spark of a doorknob shock to the enormous bolt of lightning. Discharge happens when charge moves rapidly from one object to another.` },
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
    fetch('/explorer-assets/cosmos/l17-magazine-electrons.png',   { method: 'HEAD' }),
    fetch('/explorer-assets/cosmos/l17-magazine-conductors.png',  { method: 'HEAD' }),
    fetch('/explorer-assets/cosmos/l17-magazine-circuits.png',    { method: 'HEAD' }),
    fetch('/explorer-assets/cosmos/l17-magazine-lightning.png',   { method: 'HEAD' }),
  ]).then(([r1, r2, r3, r4]) => {
    console.log(`[ASSET-CHECK-COSMOS-L17] electrons: ${r1.ok}, conductors: ${r2.ok}, circuits: ${r3.ok}, lightning: ${r4.ok}`);
  }).catch(() => {
    console.log('[ASSET-CHECK-COSMOS-L17] Could not verify image assets — network check failed');
  });
})();

export default cosmos_explorer_l17_screens;
