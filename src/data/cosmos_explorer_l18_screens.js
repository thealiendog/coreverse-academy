// ============================================================
// COREVERSE EXPLORERS — Cosmos · Lesson 18
// "Magnets and Magnetic Fields"
// Ages 6–8 | Guide: Nova | ExplorerLessonPlayer format
// ============================================================

const cosmos_explorer_l18_screens = {
  ageBand:   'explorers',
  subjectId: 'cosmos',
  guide:     'nova',
  lessons: [
    {
      id:        'cs-6-8-18',
      title:     `Magnets and Magnetic Fields`,
      duration:  12,
      xpReward:  50,
      badge:     'magnetic-mind',
      badgeName: `Magnetic Mind`,
      screens: [
        // PHASE 1 — WELCOME
        {
          type:      'welcome',
          guideText: `Hold two magnets near each other and you can feel an invisible force — pushing or pulling through empty air. That invisible force shapes compasses, runs electric motors, protects our atmosphere from the Sun, and makes MRI machines work. Magnetism is everywhere, and it's one of the most fundamental forces in nature.`,
        },

        // PHASE 2 — MAGAZINE STORY (6 sections)
        {
          type:          'magazine',
          section:       1,
          totalSections: 6,
          headline:      `Where Magnetism Comes From`,
          paragraphs: [
            `Magnetism comes from electrons. In most materials, electrons spin in random directions and cancel each other out.`,
            `But in iron, nickel, and cobalt, groups of electrons can align — all spinning the same way. These aligned groups are called magnetic domains.`,
          ],
          image:        '/explorer-assets/cosmos/l18-s1-magnetic-domains.png',
          imageCaption: `Magnetism is electrons all spinning in the same direction inside iron, nickel, or cobalt`,
          vocab: [
            { word: 'magnetic domain', definition: `A region inside a metal where atomic magnets are all aligned in the same direction. When enough align, the metal becomes a magnet.`, audioPrompt: `Magnetic domain — a region inside a metal where atomic magnets are all aligned in the same direction. When enough align, the metal becomes a magnet.` },
            { word: 'ferromagnetic',   definition: `A property of metals — like iron, nickel, and cobalt — that can become magnetic because their electrons can align into domains.`, audioPrompt: `Ferromagnetic — a property of metals like iron, nickel, and cobalt that can become magnetic because their electrons can align into domains.` },
          ],
        },
        {
          type:          'magazine',
          section:       2,
          totalSections: 6,
          headline:      `Poles: Opposites Attract`,
          paragraphs: [
            `Every magnet has two poles — a north pole and a south pole.`,
            `Opposite poles attract. Like poles repel. A north pole and a south pole pull toward each other. Two norths push apart. This rule never breaks.`,
          ],
          image:        '/explorer-assets/cosmos/l18-s2-poles.png',
          imageCaption: `Opposite poles attract. Like poles repel. The most reliable rule in magnetism.`,
          vocab: [
            { word: 'magnetic pole', definition: `One of the two ends of a magnet. Every magnet has both a north pole and a south pole — you can't have just one.`, audioPrompt: `Magnetic pole — one of the two ends of a magnet. Every magnet has both a north pole and a south pole. You can't have just one.` },
            { word: 'repel',         definition: `To push away. Like magnetic poles always repel each other — two norths push apart, and two souths push apart.`, audioPrompt: `Repel — to push away. Like magnetic poles always repel each other. Two norths push apart, and two souths push apart.` },
          ],
        },
        {
          type:          'magazine',
          section:       3,
          totalSections: 6,
          headline:      `Invisible Force Fields`,
          paragraphs: [
            `Around every magnet, there's an invisible region where magnetic force can be felt — called the magnetic field.`,
            `A compass needle is just a tiny magnet free to rotate. Earth's magnetic field pulls it until it points north. Compasses have guided travellers for over a thousand years.`,
          ],
          image:        '/explorer-assets/cosmos/l18-s3-magnetic-field.png',
          imageCaption: `The magnetic field is the invisible reach of a magnet's force — felt by every compass on Earth`,
          vocab: [
            { word: 'magnetic field', definition: `The invisible region of force around a magnet. Anything magnetic that enters the field will feel a pull or a push.`, audioPrompt: `Magnetic field — the invisible region of force around a magnet. Anything magnetic that enters the field will feel a pull or a push.` },
            { word: 'compass',        definition: `A tool with a tiny magnet free to rotate. It aligns with Earth's magnetic field — telling you which way is north.`, audioPrompt: `Compass — a tool with a tiny magnet free to rotate. It aligns with Earth's magnetic field, telling you which way is north.` },
          ],
        },
        {
          type:          'magazine',
          section:       4,
          totalSections: 6,
          headline:      `Earth Is a Giant Magnet`,
          paragraphs: [
            `Earth itself is a giant magnet. Deep inside, the outer core is liquid iron, spinning as Earth rotates.`,
            `This moving liquid metal generates electric currents — and those currents generate a vast magnetic field that extends far into space around our planet.`,
          ],
          image:        '/explorer-assets/cosmos/l18-s4-earth-magnet.png',
          imageCaption: `Earth's spinning liquid iron core makes our entire planet a giant magnet`,
          vocab: [
            { word: 'geomagnetic field', definition: `Earth's magnetic field. Generated by the swirling liquid iron in Earth's outer core — it extends far into space.`, audioPrompt: `Geomagnetic field — Earth's magnetic field. Generated by the swirling liquid iron in Earth's outer core, it extends far into space.` },
            { word: 'core',              definition: `The centre of Earth. The outer core is liquid iron; the inner core is solid iron under enormous pressure.`, audioPrompt: `Core — the centre of Earth. The outer core is liquid iron; the inner core is solid iron under enormous pressure.` },
          ],
        },
        {
          type:          'magazine',
          section:       5,
          totalSections: 6,
          headline:      `A Shield from Space`,
          paragraphs: [
            `Earth's magnetic field protects us. The Sun constantly streams out energetic particles — the solar wind.`,
            `Mars once had a magnetic field too. But its core cooled, the field died, and the solar wind stripped away most of Mars's atmosphere. Earth still has its shield.`,
          ],
          image:        '/explorer-assets/cosmos/l18-s5-shield.png',
          imageCaption: `Earth's magnetic field deflects the Sun's radiation. Mars lost its field — and its atmosphere.`,
          vocab: [
            { word: 'solar wind', definition: `A stream of charged particles flowing constantly from the Sun. Earth's magnetic field deflects it away from us.`, audioPrompt: `Solar wind — a stream of charged particles flowing constantly from the Sun. Earth's magnetic field deflects it away from us.` },
            { word: 'shield',     definition: `Something that protects against harm. Earth's magnetic field is an invisible shield against the Sun's radiation.`, audioPrompt: `Shield — something that protects against harm. Earth's magnetic field is an invisible shield against the Sun's radiation.` },
          ],
        },
        {
          type:          'magazine',
          section:       6,
          totalSections: 6,
          headline:      `Electromagnets`,
          paragraphs: [
            `Electricity and magnetism are deeply connected. When electric current flows through a coiled wire, it creates a powerful magnetic field. This is an electromagnet.`,
            `Unlike permanent magnets, electromagnets can be switched on and off. They power electric motors, speakers, MRI machines, and even trains that float above their tracks.`,
          ],
          image:        '/explorer-assets/cosmos/l18-s6-electromagnet.png',
          imageCaption: `An electromagnet is electricity making magnetism — powering motors, speakers, MRI machines, and floating trains`,
          vocab: [
            { word: 'electromagnet',  definition: `A magnet made by passing electric current through a coil of wire. It can be switched on and off — and made enormously powerful.`, audioPrompt: `Electromagnet — a magnet made by passing electric current through a coil of wire. It can be switched on and off, and made enormously powerful.` },
            { word: 'electric motor', definition: `A device that turns electricity into spinning motion using electromagnets. Found in cars, fans, washing machines, and almost every appliance.`, audioPrompt: `Electric motor — a device that turns electricity into spinning motion using electromagnets. Found in cars, fans, washing machines, and almost every appliance.` },
          ],
        },

        // PHASE 3 — INTERACTIVE
        {
          type:          'interactive',
          activityType:  'drag-match',
          instruction:   `Tap each card, then tap whether it's attracted to a magnet or not attracted!`,
          guideText:     `Magnets attract iron, nickel, and cobalt — and materials that contain them, like steel. They do not attract most other metals like copper or aluminum, or non-metals like plastic and glass. Can you work out which of these four materials a magnet would pull toward it?`,
          columnHeaders: [`The Material`, `Attracted to a Magnet?`],
          items: [
            { image: 'l18-game-iron-nail.png',       label: `An iron nail — a common fastener made from iron, one of the three naturally magnetic metals.`,              correctMatch: 'attracted',     objectPosition: 'center 50%', matchPhrase: `Attracted! Iron is one of the three naturally ferromagnetic metals — it has magnetic domains that align when a magnet is near. Iron nails are strongly attracted to magnets. This is why steel (an iron alloy) is used in so many things that need to interact with magnets, from motors to speakers to hard drives.` },
            { image: 'l18-game-copper-coin.png',     label: `A copper coin — a shiny orange-red metal used in currency, but not one of the magnetic metals.`,           correctMatch: 'not-attracted', objectPosition: 'center 50%', matchPhrase: `Not attracted! Copper is a metal, but it's not ferromagnetic — it has no magnetic domains to align. A magnet held near a copper coin feels nothing. This is why copper is used for electrical wiring rather than iron — copper conducts electricity well without interfering with nearby magnets in motors and generators.` },
            { image: 'l18-game-steel-paperclip.png', label: `A steel paperclip — a small metal clip made from steel, which is an alloy of iron and carbon.`,            correctMatch: 'attracted',     objectPosition: 'center 50%', matchPhrase: `Attracted! Steel is an iron alloy — it contains iron and inherits iron's ferromagnetic properties. Steel paperclips are attracted to magnets and can even be temporarily magnetised themselves by stroking with a magnet. This is why refrigerator magnets hold metal paperclips — and why steel is used in countless magnetic applications.` },
            { image: 'l18-game-plastic-ruler.png',   label: `A plastic ruler — a lightweight measuring tool made from synthetic material with no metallic content.`,    correctMatch: 'not-attracted', objectPosition: 'center 50%', matchPhrase: `Not attracted! Plastic contains no iron, nickel, or cobalt — and no free electrons that a magnetic field could interact with. Magnets have no effect on plastic. This is why plastic is used for the handles of tools and the casings of devices — it doesn't interfere with any magnetic components inside.` },
          ],
          buckets: [
            { id: 'attracted',     label: `🧲 Attracted`,     color: '#60A5FA' },
            { id: 'not-attracted', label: `❌ Not Attracted`, color: '#34D399' },
          ],
        },

        // PHASE 4 — MASTERY QUIZ
        {
          type:      'quiz',
          guideText: `Quiz time, {name}! Let's see what you've learned about magnets and magnetic fields. Answer all 6 questions to earn your Magnetic Mind badge!`,
          questions: [
            {
              format:       'multiple-choice',
              question:     `What gives a material magnetic properties?`,
              options:      [`Having a large number of protons in its nucleus`, `Magnetic domains — regions where atoms align to create a collective magnetic force`, `Being physically close to another magnet for a long time`, `Containing large amounts of carbon in its structure`],
              correctIndex: 1,
            },
            {
              format:       'multiple-choice',
              question:     `What happens when two magnetic north poles are brought close together?`,
              options:      [`They attract each other strongly and snap together`, `They repel each other — like poles always repel`, `They cancel out and both become non-magnetic`, `One pole reverses direction to become a south pole`],
              correctIndex: 1,
            },
            {
              format:       'multiple-choice',
              question:     `What generates Earth's magnetic field?`,
              options:      [`The iron minerals in Earth's solid crust`, `The movement of liquid iron in Earth's outer core`, `Electrical storms in the upper atmosphere`, `The Moon's gravitational pull on Earth's core`],
              correctIndex: 1,
            },
            {
              format:        'true-false',
              question:      `Earth's magnetic field protects our atmosphere from being stripped away by solar wind — Mars lost most of its atmosphere because its magnetic field disappeared when its core cooled.`,
              correctAnswer: true,
            },
            {
              format:       'fill-blank',
              question:     `A magnet created by running electric current through a coil of wire is called an ___.`,
              options:      [`electromagnet`, `conductor`, `permanent magnet`, `magnetic domain`],
              correctIndex: 0,
            },
            {
              format:       'multiple-choice',
              question:     `What causes the Northern and Southern Lights (auroras)?`,
              options:      [`Sunlight reflecting off sheets of polar ice at certain angles`, `Solar wind particles interacting with Earth's magnetic field and atmosphere near the poles`, `Volcanic gases rising high into the upper atmosphere`, `Starlight bending through Earth's atmosphere near the poles`],
              correctIndex: 1,
            },
          ],
        },

        // PHASE 5 — REAL-WORLD CONNECTION
        {
          type:            'real-world',
          guideText:       `Hold two magnets near each other today and feel the invisible push or pull — you're touching a magnetic field with your hands.`,
          familyAdventure: `Go on a magnetic treasure hunt around your home. Collect a magnet (a fridge magnet works perfectly) and test 20 different objects — coins, cutlery, paperclips, cans, toys, door hinges, tools, and whatever else you can find. Sort them into two groups: attracted and not attracted. Make a chart. Are all metals attracted? What pattern do you notice about which metals are magnetic and which aren't?`,
          creativePrompt:  `Make a compass using a bowl of water, a leaf or small piece of foam, and a magnetised needle (stroke a needle with a magnet 30 times in the same direction). Float the leaf on the water and place the needle on it. Watch it slowly rotate and align with Earth's magnetic field. Test it in different spots in your home — does it always point the same direction? Why might it waver near electrical appliances?`,
        },

        // PHASE 6 — CELEBRATION
        {
          type:      'celebration',
          xpEarned:  50,
          badge:     'magnetic-mind',
          badgeName: `Magnetic Mind`,
          message:   `Brilliant work, {name}! You now know that magnetism isn't magic — it's quantum alignment, liquid iron spinning in Earth's core, and electrons flowing through coils. The same force that sticks a note to your fridge also protects our atmosphere from the Sun. Nova is so proud to share the universe with you.`,
        },
      ],
    },
  ],
};

// Log on module load — confirms lesson wired correctly + verifies image assets at runtime
(() => {
  const l    = cosmos_explorer_l18_screens.lessons[0];
  const mags = l.screens.filter(s => s.type === 'magazine').length;
  const game = l.screens.find(s => s.type === 'interactive')?.items?.length || 0;
  const quiz = l.screens.find(s => s.type === 'quiz')?.questions?.length || 0;
  console.log(`[LESSON-COSMOS-L18] Loaded: "Magnets and Magnetic Fields" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
  Promise.all([
    fetch('/explorer-assets/cosmos/l18-s1-magnetic-domains.png', { method: 'HEAD' }),
    fetch('/explorer-assets/cosmos/l18-s2-poles.png',            { method: 'HEAD' }),
    fetch('/explorer-assets/cosmos/l18-s3-magnetic-field.png',   { method: 'HEAD' }),
    fetch('/explorer-assets/cosmos/l18-s4-earth-magnet.png',     { method: 'HEAD' }),
    fetch('/explorer-assets/cosmos/l18-s5-shield.png',           { method: 'HEAD' }),
    fetch('/explorer-assets/cosmos/l18-s6-electromagnet.png',    { method: 'HEAD' }),
  ]).then(([r1, r2, r3, r4, r5, r6]) => {
    console.log(`[ASSET-CHECK-COSMOS-L18] magnetic-domains: ${r1.ok}, poles: ${r2.ok}, magnetic-field: ${r3.ok}, earth-magnet: ${r4.ok}, shield: ${r5.ok}, electromagnet: ${r6.ok}`);
  }).catch(() => {
    console.log('[ASSET-CHECK-COSMOS-L18] Could not verify image assets — network check failed');
  });
})();

export default cosmos_explorer_l18_screens;
