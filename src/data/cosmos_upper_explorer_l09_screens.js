// ─────────────────────────────────────────────────────────────────────────────
// COSMOS UE  |  L09 — Energy: Forms, Transfer, and Conservation
// Age band : upper_explorers (9–10)   Guide: nova
// Standards: NGSS MS-PS3 — energy forms, transfer, conservation
// CALIBRATED: UE spec v1.1 — real domain terms, em-dashes sparing
// GAME FORMAT: sequence (trace an energy transformation chain)
// SCOPE: 4 concepts — what energy is, forms of energy, transformation,
//        conservation of energy
// VERSION: v1
// ─────────────────────────────────────────────────────────────────────────────

const COSMOS_UE_L09 = {
  ageBand: `upper_explorers`,
  subjectId: `cosmos`,
  guide: `nova`,

  lessons: [
    {
      id: `cs-9-10-09`,
      title: `Energy: Forms, Transfer, and Conservation`,
      duration: 18,
      xpReward: 75,
      badge: `energy-explorer`,
      badgeName: `Energy Explorer`,

      screens: [
        {
          id: `l09-welcome`,
          type: `welcome`,
          guideText: `Hello again, {name}. Nova here. Today we explore something that powers EVERYTHING: ENERGY. Every motion, every living thing, every star, every spark of thought in your brain, all of it runs on energy. But here's the wonderful mystery: energy is never created and never destroyed. It only changes FORM, flowing endlessly from one kind to another. The energy powering you right now traces back to the Sun, and before that, to the Big Bang itself. By the end of today, you'll understand what energy really is and follow it as it transforms. Let's begin.`,
          headline: `Energy`,
          subtitle: `What powers all motion, life, and change in the universe`,
          visual: `/ue-assets/cosmos/l09-welcome.webp`,
        },

        {
          id: `l09-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `What Energy Is`,
          paragraphs: [
            `ENERGY is the ability to cause change or do work. Anything that moves, heats up, grows, glows, or changes in any way is using energy. When you run, you use energy. When the Sun shines, it releases energy. When a plant grows, it uses energy. When you think, your brain uses energy. Energy is one of the most fundamental things in the universe. Without it, absolutely nothing would happen: no motion, no life, no light, no change of any kind.`,
            `Energy can be a tricky idea because you can't hold it in your hand like a rock. Instead, energy is something objects and systems HAVE, a kind of capacity to make things happen. A stretched rubber band has energy (it can snap back). A moving car has energy (it can do work, or damage, if it hits something). The Sun has enormous energy (it lights and warms an entire solar system). Everything that happens, everywhere in the universe, is energy doing something. Learning to see the world in terms of energy is one of the most powerful tools in all of science.`,
          ],
          image: `/ue-assets/cosmos/l09-s1-what-is.webp`,
          imageCaption: `Energy: the ability to cause change or do work. Nothing happens without it.`,
          vocab: [
            { word: `energy`,
              definition: `The ability to cause change or do work. Anything that moves, heats, grows, glows, or changes is using energy. One of the most fundamental things in the universe; without it, nothing would happen.`,
              audioPrompt: `Energy is the ability to cause change or do work, {name}. Anything that moves, heats up, grows, glows, or changes is using energy. When you run, you use energy. When the Sun shines, it releases energy. When you think, your brain uses energy. Energy is one of the most fundamental things in the universe. Without it, nothing would happen: no motion, no life, no light. Energy can be tricky because you can't hold it in your hand. It's something systems have, a capacity to make things happen.` },
            { word: `work`,
              definition: `In science, work is done when a force moves an object over a distance. Energy is the ability to do work. The more energy something has, the more work it can do.`,
              audioPrompt: `In science, work is done when a force moves an object over a distance, {name}. Lifting a box, pushing a cart, or pulling a sled are all examples of doing work. Energy is the ability to do work. The more energy something has, the more work it can do. A moving car has kinetic energy and can do a lot of work if it hits something. A stretched spring has potential energy and does work when it releases. Work and energy are deeply connected in all of physics.` },
          ],
        },

        {
          id: `l09-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `The Many Forms of Energy`,
          paragraphs: [
            `Energy comes in many FORMS. Two of the most important are KINETIC energy and POTENTIAL energy. KINETIC energy is the energy of MOTION: a running person, a flying ball, a flowing river, a speeding car all have kinetic energy. The faster something moves and the more mass it has, the more kinetic energy it carries. POTENTIAL energy is STORED energy, waiting to be released: a stretched rubber band, a rock at the top of a hill, water held behind a dam, or food in your body all have potential energy ready to become motion or other forms.`,
            `There are many other forms too. THERMAL energy is heat (the energy of jiggling atoms). LIGHT energy travels from the Sun and from lamps. CHEMICAL energy is stored in food, fuel, and batteries. ELECTRICAL energy flows through wires to power devices. SOUND energy travels as vibrations. All of these are just different forms of the same fundamental thing: energy. And here's the key idea coming next: energy constantly TRANSFORMS from one form into another. That transformation is what makes the world go.`,
          ],
          image: `/ue-assets/cosmos/l09-s2-forms.webp`,
          imageCaption: `Kinetic (motion), potential (stored), thermal, light, chemical, electrical, sound.`,
          vocab: [
            { word: `kinetic energy`,
              definition: `The energy of motion. Anything moving has kinetic energy: a running person, a flying ball, a flowing river. The faster it moves and the more mass it has, the more kinetic energy it carries.`,
              audioPrompt: `Kinetic energy is the energy of motion, {name}. Anything moving has kinetic energy: a running person, a flying ball, a flowing river, a speeding car. The faster something moves and the more mass it has, the more kinetic energy it carries. It pairs with potential energy, which is stored energy waiting to be released. Energy often flows between the two. A rock at the top of a hill has potential energy; as it rolls down, that becomes kinetic energy of motion.` },
            { word: `thermal energy`,
              definition: `The energy of the jiggling and vibrating of atoms and molecules. More thermal energy means more motion at the atomic level, which we sense as higher temperature or heat.`,
              audioPrompt: `Thermal energy is the energy of the jiggling and vibrating of atoms and molecules, {name}. Everything above absolute zero temperature has thermal energy because its atoms are always moving. The more thermal energy something has, the faster its atoms move, and the hotter it feels. When you rub your hands together, friction turns kinetic energy into thermal energy, which is why your hands warm up. Heat flowing from a hot object to a cold one is thermal energy on the move.` },
          ],
        },

        {
          id: `l09-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Energy Transforms From One Form to Another`,
          paragraphs: [
            `Energy is constantly TRANSFORMING, changing from one form into another. This is happening everywhere, all the time. When you eat food, the chemical energy in it transforms into the kinetic energy of your moving muscles and the thermal energy that keeps you warm. When you turn on a lamp, electrical energy transforms into light energy (and some heat). When a car burns fuel, chemical energy transforms into the kinetic energy of motion. Following energy as it changes form is one of the best ways to understand how anything works.`,
            `Let's trace one chain. The Sun produces LIGHT energy. A plant captures that light and stores it as CHEMICAL energy through photosynthesis. An animal eats the plant, taking in that chemical energy. The animal's muscles transform it into KINETIC energy as it moves. And as it moves, some energy becomes THERMAL energy (heat), released into the surroundings. One original source (the Sun), transformed again and again. Nearly all the energy that powers life on Earth traces back to the Sun this way. And the Sun's energy comes from nuclear reactions, which trace back to the matter created in the Big Bang. Follow any energy far enough, and you reach the beginning of the universe.`,
          ],
          image: `/ue-assets/cosmos/l09-s3-transform.webp`,
          imageCaption: `Sun to plant to animal to motion to heat. Energy transforms, again and again.`,
          vocab: [
            { word: `potential energy`,
              definition: `Stored energy, waiting to be released. A stretched rubber band, a rock at the top of a hill, water behind a dam, and food all have potential energy that can transform into motion or other forms.`,
              audioPrompt: `Potential energy is stored energy waiting to be released, {name}. A stretched rubber band has potential energy: it can snap back. A rock at the top of a hill has potential energy: it can roll down. Water behind a dam and food in your body also have potential energy ready to become motion or other forms. Potential energy pairs with kinetic energy, the energy of motion. When you lift a ball, you give it potential energy. When you drop it, that energy transforms into kinetic energy as it falls.` },
            { word: `chemical energy`,
              definition: `Energy stored in the bonds between atoms in molecules. Food, fuel, and batteries all hold chemical energy. When those bonds break, the energy is released as kinetic energy, heat, or light.`,
              audioPrompt: `Chemical energy is energy stored in the bonds between atoms in molecules, {name}. Food, fuel, and batteries all hold chemical energy. When those bonds break during a chemical reaction, the energy is released as kinetic energy, heat, or light. When you eat, your body breaks down food molecules and releases their chemical energy to power your muscles and brain. When gasoline burns in a car engine, chemical energy transforms into the kinetic energy that moves the car. Chemical energy powers almost everything in daily life.` },
          ],
        },

        {
          id: `l09-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Conservation: Energy Is Never Lost`,
          paragraphs: [
            `Here is one of the deepest and most beautiful laws in all of science: the CONSERVATION OF ENERGY. It says that energy is NEVER created and NEVER destroyed. It only changes form. The total amount of energy in the universe stays exactly the same, forever. When energy seems to "disappear," it has actually just transformed into another form, often heat that spreads out into the surroundings. Nothing is ever truly lost. It just moves and changes.`,
            `Think about what this means. The energy that powers you right now was once sunlight, captured by plants. The Sun's energy comes from nuclear reactions among atoms that were forged in the Big Bang. So the energy moving your muscles as you read this has been transforming, form to form, for 13.8 billion years, and it will keep transforming long after. Energy is the universe's ultimate recyclable, never used up, only ever passed along. Nova's teaching: you are part of an unbroken flow of energy that connects you to the Sun, to ancient stars, and to the very beginning of time. Nothing in the universe is truly separate. Energy links it all together, across all of space and all of time.`,
          ],
          image: `/ue-assets/cosmos/l09-s4-conservation.webp`,
          imageCaption: `Energy is never created or destroyed, only transformed. An unbroken flow since the Big Bang.`,
          vocab: [
            { word: `conservation of energy`,
              definition: `The law that energy is never created or destroyed, only changed from one form to another. The total energy in the universe stays the same forever. When energy seems to "vanish," it has just transformed.`,
              audioPrompt: `Conservation of energy is one of the deepest laws in science, {name}. It says energy is never created and never destroyed. It only changes form. The total energy in the universe stays the same, forever. When energy seems to disappear, it has just transformed, often into heat spreading into the surroundings. Nothing is ever truly lost. The energy powering you right now was once sunlight, and before that, nuclear energy in the Sun, tracing back to the Big Bang. You're part of an unbroken flow.` },
            { word: `transformation`,
              definition: `The change of energy from one form to another — for example, from chemical energy in food into kinetic energy of motion, or from light energy into chemical energy in a plant. Energy is always transforming.`,
              audioPrompt: `Transformation is the change of energy from one form to another, {name}. It happens everywhere, all the time. When you eat food, chemical energy transforms into kinetic energy and heat. When a plant absorbs sunlight, light energy transforms into chemical energy. When you turn on a lamp, electrical energy transforms into light. Energy never disappears. It just changes form. Following these transformations is one of the most powerful ways to understand how anything in the universe works.` },
          ],
        },

        {
          id: `l09-game`,
          type: `interactive`,
          format: `sequence`,
          guideText: `Time to trace energy as it flows, {name}. Here are five steps in an energy transformation chain, scrambled up. Use the arrows to arrange them in order, from the ORIGINAL SOURCE (top) to the FINAL form (bottom). Follow the energy as it changes form.`,
          items: [
            { id: `step-sun`,    label: `The Sun produces light energy`,                              position: 1 },
            { id: `step-plant`,  label: `A plant captures the light, storing it as chemical energy`,   position: 2 },
            { id: `step-eat`,    label: `An animal eats the plant, taking in that chemical energy`,    position: 3 },
            { id: `step-move`,   label: `The animal's muscles turn it into kinetic energy (motion)`,   position: 4 },
            { id: `step-heat`,   label: `As the animal moves, some energy becomes heat (thermal energy)`, position: 5 },
          ],
          completionMessage: `Perfect, {name}! You traced energy from the Sun, through a plant, into an animal, into motion, and finally into heat. The same energy, transforming form after form, never created, never destroyed. And it all started with the Sun, whose energy traces back to the Big Bang. You followed a 13.8-billion-year-old flow.`,
        },

        {
          id: `l09-quiz`,
          type: `quiz`,
          guideText: `Let's see what stuck, {name}.`,
          questions: [
            { id: `l09-q1`, format: `multiple-choice`,
              question: `What is ENERGY?`,
              options: [
                `A type of metal`,
                `The ability to cause change or do work`,
                `A kind of force`,
                `Only electricity`,
              ],
              correctIndex: 1,
              explanation: `Energy is the ability to cause change or do work. Anything that moves, heats, grows, glows, or changes is using energy. Without it, nothing would happen: no motion, no life, no light. It's one of the most fundamental things in the universe.` },

            { id: `l09-q2`, format: `multiple-choice`,
              question: `What's the difference between KINETIC and POTENTIAL energy?`,
              options: [
                `They're the same`,
                `Kinetic is the energy of motion; potential is stored energy waiting to be released`,
                `Kinetic is stored; potential is motion`,
                `Only kinetic is real`,
              ],
              correctIndex: 1,
              explanation: `Kinetic energy is the energy of motion (a running person, a flying ball). Potential energy is stored energy waiting to be released (a stretched rubber band, a rock atop a hill). Energy often flows back and forth between these two forms.` },

            { id: `l09-q3`, format: `multiple-choice`,
              question: `What happens when a rock rolls down a hill?`,
              options: [
                `Energy is created`,
                `Potential energy (stored, at the top) transforms into kinetic energy (motion, as it rolls)`,
                `Energy disappears`,
                `Nothing happens to the energy`,
              ],
              correctIndex: 1,
              explanation: `At the top of the hill, the rock has potential (stored) energy. As it rolls down, that transforms into kinetic energy of motion. This is a classic example of energy transforming from one form to another, which happens constantly everywhere.` },

            { id: `l09-q4`, format: `multiple-choice`,
              question: `Where does nearly all the energy for life on Earth originally come from?`,
              options: [
                `From the ground`,
                `From the Sun — plants capture sunlight, and that energy flows through living things`,
                `From the ocean`,
                `From the Moon`,
              ],
              correctIndex: 1,
              explanation: `Nearly all energy for life traces back to the Sun. Plants capture sunlight as chemical energy through photosynthesis. Animals eat plants, gaining that energy, and so on up the food chain. The Sun powers life on Earth.` },

            { id: `l09-q5`, format: `true-false`,
              question: `True or false: Energy can be created and destroyed.`,
              correctAnswer: false,
              explanation: `False. The conservation of energy says energy is NEVER created or destroyed, only transformed from one form to another. The total energy in the universe stays the same forever. When energy seems to "vanish," it has just changed form, often into heat.` },

            { id: `l09-q6`, format: `multiple-choice`,
              question: `What is the CONSERVATION OF ENERGY?`,
              options: [
                `Saving electricity at home`,
                `The law that energy is never created or destroyed, only changed from one form to another`,
                `Using less energy`,
                `A type of battery`,
              ],
              correctIndex: 1,
              explanation: `Conservation of energy is a deep law of physics: energy is never created or destroyed, only transformed. The total energy in the universe stays exactly the same forever. (This is different from "conserving energy" at home, which means using less.)` },

            { id: `l09-q7`, format: `multiple-choice`,
              question: `When you eat food and then run, what energy transformation happens?`,
              options: [
                `No transformation`,
                `Chemical energy (in food) transforms into kinetic energy (motion) and thermal energy (heat)`,
                `Light energy into sound`,
                `Electrical energy into food`,
              ],
              correctIndex: 1,
              explanation: `Food holds chemical energy. When you run, your body transforms it into the kinetic energy of your moving muscles and the thermal energy that keeps you warm. Your body is an energy-transformation machine, like everything else in nature.` },

            { id: `l09-q8`, format: `multiple-choice`,
              question: `What's the profound truth about the energy powering you right now?`,
              options: [
                `It was made this morning`,
                `It has been transforming form to form for 13.8 billion years, tracing back through the Sun to the Big Bang`,
                `It comes from nowhere`,
                `It will be destroyed soon`,
              ],
              correctIndex: 1,
              explanation: `The energy moving your muscles was once sunlight, captured by plants. The Sun's energy comes from nuclear reactions among atoms forged in the Big Bang. So your energy has been transforming for 13.8 billion years. You're part of an unbroken flow connecting you to the beginning of time.` },
          ],
        },

        {
          id: `l09-reflection`,
          type: `reflection`,
          guideText: `Before we wrap, {name}, pick ONE question and actually answer it. Your response gets saved, and I'll remember it next time we talk.`,
          prompts: [
            { id: `r1`, text: `Energy is never created or destroyed, only transformed. Does it change anything for you to know that no energy is ever truly "used up," just passed along?` },
            { id: `r2`, text: `The energy in your muscles traces back through the Sun to the Big Bang. How does it feel to be part of an unbroken 13.8-billion-year flow of energy?` },
            { id: `r3`, text: `Pick something you did today (eating, moving, turning on a light). Can you trace the energy transformations involved?` },
            { id: `r4`, text: `Learning to "see" the world in terms of energy is a powerful tool. Where do you think this way of thinking could help you understand something better?` },
          ],
        },

        {
          id: `l09-realworld`,
          type: `real-world`,
          guideText: `Understanding energy is at the center of some of the most important challenges of your lifetime. How we generate energy (from fossil fuels, sunlight, wind, water, or nuclear reactions) shapes our economy, our technology, and the health of our planet. Engineers work constantly to transform energy more efficiently and cleanly. The principles you learned today (forms, transformation, and conservation) are the foundation for understanding power plants, electric cars, solar panels, and the climate itself, which we'll explore in upcoming lessons. Nova's note: energy literacy is one of the most useful kinds of understanding a person can have in the modern world.`,
          familyAdventure: `Family Energy Tracker. As a family, pick three things you use during the day (a car ride, cooking food, charging a phone) and trace the energy transformations for each. Where did the energy start? What forms did it pass through? For example: sunlight to plants (millions of years ago) to fossil fuel to chemical energy to the kinetic energy of the car. Talk about how all energy traces back to a source, and how it's always transforming, never destroyed.`,
          creativePrompt: {
            intro: `Imagine you could follow a single "packet" of energy on its journey through many transformations. Write its adventure story.`,
            floor: `Write at least 5 sentences. Follow the energy through at least three transformations, from one form to another.`,
            stretch: `Write 8 to 10 sentences. Trace energy from an original source (like the Sun) through several transformations, ending in a final form, showing it's never destroyed.`,
            open: `Write as much as you want. Write a full journey of one packet of energy. Start at its origin (perhaps the Big Bang, or the Sun), follow it through transformation after transformation: light to chemical to kinetic to thermal and beyond. Show how it moves through plants, animals, machines, or weather, never created, never destroyed, always changing form. Capture the wonder of energy's endless flow.`,
            frames: [
              `My journey began as ___ energy, long ago.`,
              `Then I transformed into ___.`,
              `Next, I became ___ when ___.`,
              `Along the way, I was never destroyed, only ___.`,
              `And my journey will continue forever, because ___.`,
            ],
          },
        },

        {
          id: `l09-celebration`,
          type: `celebration`,
          message: `Wonderful work, {name}. You can now explain what energy is, the main forms it takes, how it transforms from one form to another, and the beautiful law of conservation of energy. You even traced an energy chain from the Sun all the way to heat. Next lesson: we turn inward to explore the most complex object in the known universe, the one between your ears. THE BRAIN AND NERVOUS SYSTEM. See you there. — Nova.`,
          badge: `energy-explorer`,
          badgeName: `Energy Explorer`,
          xpEarned: 75,
        },
      ],
    },
  ],
};

export default COSMOS_UE_L09;

// ─── Dev asset check ──────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const screens = COSMOS_UE_L09.lessons[0].screens;
  const mags = screens.filter(s => s.type === 'magazine').length;
  const seq = screens.find(s => s.type === 'interactive')?.items?.length ?? 0;
  const quiz = screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  const refl = screens.find(s => s.type === 'reflection')?.prompts?.length ?? 0;
  const totalVocab = screens.filter(s => s.type === 'magazine').reduce((sum, s) => sum + (s.vocab?.length || 0), 0);
  console.log(`[LESSON-COSMOS-UE-L09 v1] Loaded with ${mags} magazine sections, ${totalVocab} vocab terms, ${seq} sequence items, ${quiz} quiz Qs, ${refl} reflection prompts`);
}
