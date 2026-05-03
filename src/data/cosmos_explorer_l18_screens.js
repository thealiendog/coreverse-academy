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

        // PHASE 2 — MAGAZINE STORY (4 sections)
        {
          type:          'magazine',
          section:       1,
          totalSections: 4,
          headline:      `What Makes Something Magnetic?`,
          paragraphs: [
            `Magnetism comes from electrons. As electrons move around an atom's nucleus, they behave like tiny magnets. In most materials, electrons spin in random directions and their magnetic effects cancel each other out. But in certain materials — iron, nickel, and cobalt — groups of atoms can align so their electrons all spin in the same direction. These aligned groups are called magnetic domains.`,
            `In an ordinary piece of iron, the domains point in random directions and the overall magnetic effect is zero. But when you expose iron to a strong magnetic field, the domains can be forced to align in the same direction — and the iron becomes a magnet. This is how you can magnetise a paperclip by stroking it repeatedly with a magnet.`,
            `Permanent magnets hold their domain alignment over time. Materials like steel (an iron alloy) can maintain their magnetism for years or indefinitely. Soft iron loses its magnetism easily when the external field is removed. The strongest permanent magnets in everyday use are neodymium magnets — small but extraordinarily powerful, used in headphones, hard drives, and wind turbines.`,
          ],
          image:        '/explorer-assets/cosmos/l18-magazine-magnetic-domains.png',
          imageCaption: `Magnetic domains — aligned electron groups in iron, nickel, and cobalt create permanent magnetic force`,
          vocab: [
            { word: 'magnetic domain', definition: `A region within a magnetic material where atomic magnets are aligned in the same direction — when domains align throughout a material, it becomes a magnet.`,                    audioPrompt: `Magnetic domain — a region within a magnetic material where atomic magnets are aligned in the same direction. When domains align throughout a material, it becomes a magnet.` },
            { word: 'ferromagnetic',   definition: `A property of materials — like iron, nickel, and cobalt — that can be strongly magnetised because their electrons can align into magnetic domains pointing the same direction.`, audioPrompt: `Ferromagnetic — a property of materials like iron, nickel, and cobalt that can be strongly magnetised because their electrons can align into magnetic domains pointing the same direction.` },
          ],
        },
        {
          type:          'magazine',
          section:       2,
          totalSections: 4,
          headline:      `Poles and Magnetic Fields`,
          paragraphs: [
            `Every magnet has two poles — a north pole and a south pole. The most fundamental rule of magnetism: opposite poles attract, like poles repel. A north pole and a south pole pull toward each other. Two north poles push each other apart. Two south poles push each other apart. This rule never breaks — it's one of the most reliable relationships in physics.`,
            `The magnetic field of a magnet extends through space around it — an invisible region where magnetic force can be felt. We can visualise the field using field lines: imaginary lines that run from the north pole of a magnet, curve around, and enter the south pole. Where field lines are close together, the field is strong. Where they spread apart, the field is weaker.`,
            `A compass needle is simply a small magnet free to rotate. Earth's magnetic field exerts force on it, rotating it until the needle aligns with the field. The north-seeking end of the compass needle points toward geographic north. Compasses have guided human navigation for over a thousand years — from sailors crossing oceans to hikers in forests — all by sensing an invisible field.`,
          ],
          image:        '/explorer-assets/cosmos/l18-magazine-poles-fields.png',
          imageCaption: `Poles and magnetic fields — field lines from north to south pole, with opposite poles attracting`,
          vocab: [
            { word: 'magnetic pole',  definition: `One of the two ends of a magnet — the north pole and the south pole. Opposite poles attract each other; like poles repel. Every magnet has both a north and a south pole.`,    audioPrompt: `Magnetic pole — one of the two ends of a magnet. The north pole and the south pole. Opposite poles attract each other; like poles repel. Every magnet has both a north and a south pole.` },
            { word: 'magnetic field', definition: `The invisible region of force surrounding a magnet or moving electric charge — it exerts forces on other magnets and magnetic materials within its reach, even through empty space.`, audioPrompt: `Magnetic field — the invisible region of force surrounding a magnet or moving electric charge. It exerts forces on other magnets and magnetic materials within its reach, even through empty space.` },
          ],
        },
        {
          type:          'magazine',
          section:       3,
          totalSections: 4,
          headline:      `Earth's Magnetic Field`,
          paragraphs: [
            `Earth itself is a giant magnet. At the centre, the outer core is liquid iron and nickel spinning as Earth rotates. This moving liquid metal generates electric currents, and those currents generate a magnetic field that extends far into space around our planet. This is the geomagnetic field — the same field that makes compasses work and that has guided animals for millions of years.`,
            `Earth's magnetic field does something far more important than guide compasses: it protects life on the surface. The Sun constantly streams energetic charged particles outward — the solar wind. Without a magnetic field, this radiation would strip away Earth's atmosphere over millions of years and blast the surface with radiation. Earth's magnetic field deflects the solar wind, channelling it harmlessly around the planet.`,
            `Mars once had a magnetic field — scientists can detect the ancient magnetism preserved in Martian rocks. But Mars's core cooled and solidified billions of years ago, shutting down the dynamo that generated the field. Without it, the solar wind slowly stripped away most of Mars's atmosphere. The thin, cold, airless Mars we see today is partly the result of losing its magnetic shield. Earth has kept its shield — and its atmosphere — because its core is still churning.`,
          ],
          image:        '/explorer-assets/cosmos/l18-magazine-earth-field.png',
          imageCaption: `Earth's magnetic field — generated by the liquid iron outer core, deflecting solar wind and protecting life`,
          vocab: [
            { word: 'geomagnetic field', definition: `Earth's magnetic field — generated by the movement of liquid iron in Earth's outer core. It extends far into space and protects the planet's atmosphere from the solar wind.`, audioPrompt: `Geomagnetic field — Earth's magnetic field, generated by the movement of liquid iron in Earth's outer core. It extends far into space and protects the planet's atmosphere from the solar wind.` },
            { word: 'solar wind',        definition: `A continuous stream of charged particles — mostly electrons and protons — flowing outward from the Sun. Earth's magnetic field deflects the solar wind and prevents it from stripping away our atmosphere.`, audioPrompt: `Solar wind — a continuous stream of charged particles, mostly electrons and protons, flowing outward from the Sun. Earth's magnetic field deflects the solar wind and prevents it from stripping away our atmosphere.` },
          ],
        },
        {
          type:          'magazine',
          section:       4,
          totalSections: 4,
          headline:      `Electromagnets: Magnetism From Electricity`,
          paragraphs: [
            `Electricity and magnetism are deeply connected. A moving electric charge always creates a magnetic field around it. When electric current flows through a straight wire, a weak circular magnetic field forms around the wire. But wind that wire into a coil and the magnetic fields from each loop add together — creating a much stronger field. This is an electromagnet.`,
            `Electromagnets have a huge advantage over permanent magnets: they can be switched on and off by controlling the current. They can also be made far more powerful than any permanent magnet by increasing the current or the number of coil turns. The strongest electromagnets in laboratories are powerful enough to levitate frogs and derail trains.`,
            `Electromagnets are everywhere in modern technology. Electric motors use them to convert electricity into rotation — every electric car, fan, and washing machine contains one. Speakers use electromagnets to vibrate a cone and produce sound. MRI machines in hospitals use enormous superconducting electromagnets to create detailed images of the inside of the human body. Magnetic levitation trains use electromagnets to float above their tracks. Understanding that electricity creates magnetism unlocked much of the modern world.`,
          ],
          image:        '/explorer-assets/cosmos/l18-magazine-electromagnets.png',
          imageCaption: `Electromagnets — coiled wire carrying current creates a powerful magnetic field that can be switched on or off`,
          vocab: [
            { word: 'electromagnet', definition: `A magnet created by passing electric current through a coil of wire — unlike permanent magnets, electromagnets can be switched on and off and made extremely powerful.`,      audioPrompt: `Electromagnet — a magnet created by passing electric current through a coil of wire. Unlike permanent magnets, electromagnets can be switched on and off and made extremely powerful.` },
            { word: 'electric motor', definition: `A device that converts electrical energy into mechanical rotation using the interaction between a magnetic field and electric current — used in fans, cars, appliances, and more.`, audioPrompt: `Electric motor — a device that converts electrical energy into mechanical rotation using the interaction between a magnetic field and electric current. Used in fans, cars, appliances, and more.` },
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
    fetch('/explorer-assets/cosmos/l18-magazine-magnetic-domains.png', { method: 'HEAD' }),
    fetch('/explorer-assets/cosmos/l18-magazine-poles-fields.png',     { method: 'HEAD' }),
    fetch('/explorer-assets/cosmos/l18-magazine-earth-field.png',      { method: 'HEAD' }),
    fetch('/explorer-assets/cosmos/l18-magazine-electromagnets.png',   { method: 'HEAD' }),
  ]).then(([r1, r2, r3, r4]) => {
    console.log(`[ASSET-CHECK-COSMOS-L18] magnetic-domains: ${r1.ok}, poles-fields: ${r2.ok}, earth-field: ${r3.ok}, electromagnets: ${r4.ok}`);
  }).catch(() => {
    console.log('[ASSET-CHECK-COSMOS-L18] Could not verify image assets — network check failed');
  });
})();

export default cosmos_explorer_l18_screens;
