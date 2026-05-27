// ─────────────────────────────────────────────────────────────────────────────
// SCIENCE UE  |  L11 — Matter: Solid, Liquid, Gas
// Age band : upper_explorers (9–10)   Guide: cosmo
// Standards: NGSS 5-PS1-1, 5-PS1-3 — Matter is made of particles too small
//            to see; physical properties of matter
// CALIBRATED: UE spec v1.1 — real domain terms, em-dashes sparing
// SCOPE: 4 concepts — what matter is, three common states (solid/liquid/gas),
//        how matter changes between states, atoms and molecules
// VERSION: v1
// ─────────────────────────────────────────────────────────────────────────────

const SCIENCE_UE_L11 = {
  ageBand: `upper_explorers`,
  subjectId: `science`,
  guide: `cosmo`,

  lessons: [
    {
      id: `science-9-10-11`,
      title: `Matter: Solid, Liquid, Gas`,
      duration: 18,
      xpReward: 75,
      badge: `matter-master`,
      badgeName: `Matter Master`,

      screens: [
        {
          id: `l11-welcome`,
          type: `welcome`,
          guideText: `Hey {name}, Cosmo here. Today's question is one of the most basic in all of science. What is everything made of? Your body. Water. Air. Stars. Otters. Smartphones. ALL of it is made of MATTER. Matter comes in three common forms (solid, liquid, gas) and is made of incredibly tiny pieces called ATOMS. Once you understand matter, you understand the building blocks of literally everything. Let's go.`,
          headline: `Matter`,
          subtitle: `Everything in the universe is made of it, in three common forms`,
          visual: `/ue-assets/science/l11-welcome.webp`,
        },

        {
          id: `l11-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `What Matter Actually Is`,
          paragraphs: [
            `MATTER is anything that has MASS (how much "stuff" is in it) and takes up SPACE (it has a volume). Your body is matter. The chair you might be sitting on is matter. The air around you is matter, even though you can't see it. Light isn't matter (it has no mass), and thoughts aren't matter. Almost everything physical you can imagine is.`,
            `All matter is made of incredibly tiny pieces called ATOMS. Atoms are SO small that millions of them could fit on the head of a pin. There are about 100 different KINDS of atoms (called ELEMENTS), like hydrogen, oxygen, carbon, iron, and gold. When atoms combine with each other, they form MOLECULES. Water is a molecule made of two hydrogen atoms and one oxygen atom (which is where the formula H₂O comes from). Everything in the universe is made of atoms arranged in different ways. Stars, planets, water, you. All of it.`,
          ],
          image: `/ue-assets/science/l11-s1-matter-overview.webp`,
          imageCaption: `Everything physical is matter. All matter is made of atoms.`,
          vocab: [
            { word: `matter`,
              definition: `Anything that has mass (a measure of how much "stuff" it contains) and takes up space (has volume). Almost everything physical is matter.`,
              audioPrompt: `Matter is anything that has mass and takes up space, {name}. Mass is a measure of how much stuff is in something. Space (or volume) is how much room it takes up. Your body is matter. The chair you might be on is matter. Water is matter. Air is matter, even though you can't see it. Things that AREN'T matter include light (it has no mass) and thoughts (they're not physical things). Almost everything physical you can think of is matter.` },
            { word: `atom`,
              definition: `The incredibly tiny particle that all matter is made of. Millions fit on a pin head. There are about 100 different kinds (elements), like hydrogen, oxygen, and carbon.`,
              audioPrompt: `An atom is the incredibly tiny particle that all matter is made of, {name}. Atoms are so small that millions of them could fit on the head of a pin. There are about 100 different kinds of atoms and each kind is called an element. Hydrogen, oxygen, carbon, iron, and gold are all elements. When two or more atoms join together they form a molecule. Water is made of two hydrogen atoms and one oxygen atom.` },
          ],
        },

        {
          id: `l11-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `The Three Common States`,
          paragraphs: [
            `Matter on Earth usually exists in three STATES. (1) SOLIDS have a definite shape and a definite volume. Their atoms are packed closely together and barely move. Examples: ice, wood, rock, your teeth. (2) LIQUIDS have a definite volume but no definite shape. Their atoms can slide past each other, so liquids take the shape of their container. Examples: water, oil, blood, milk. (3) GASES have neither a definite shape nor a definite volume. Their atoms move freely in all directions and spread out to fill any container. Examples: air, water vapor, helium in balloons.`,
            `What's the same in all three states is the ACTUAL MATTER itself. Ice, liquid water, and water vapor are ALL water (H₂O). What's different is how the molecules are MOVING and how close they are to each other. In ice, water molecules are locked in a stiff pattern. In liquid water, they slide around each other. In water vapor, they fly around with lots of space between them. Adding heat makes the molecules move faster. Removing heat slows them down. That's basically the whole story of state changes.`,
          ],
          image: `/ue-assets/science/l11-s2-three-states.webp`,
          imageCaption: `Same molecules. Different speeds. Solid, liquid, gas.`,
          vocab: [
            { word: `solid`,
              definition: `A state of matter with a definite shape and volume. Solid atoms are packed tightly and barely move from their positions. Examples: ice, wood, rock.`,
              audioPrompt: `A solid is a state of matter with a definite shape and a definite volume, {name}. The atoms in a solid are packed tightly together and they barely move from their positions. They vibrate in place but stay where they are. That's why solids hold their shape. If you push on a solid, it usually doesn't deform much. Examples of solids include ice, wood, rock, your bones, your teeth, and the chair you might be sitting on. Solids are the most familiar state of matter in everyday life.` },
            { word: `molecule`,
              definition: `Two or more atoms bonded together. Water is H₂O (two hydrogen + one oxygen). The same atoms arranged differently can make wildly different substances.`,
              audioPrompt: `A molecule is two or more atoms bonded together, {name}. Water is a molecule made of two hydrogen atoms and one oxygen atom, written H₂O. Sugar is a molecule made of carbon, hydrogen, and oxygen atoms. DNA is a very large molecule that carries your genetic instructions. The incredible thing about molecules is that the same atoms can arrange in different ways to make wildly different substances. The carbon atoms in graphite (pencil lead) are the same as in diamond. They just arrange differently.` },
          ],
        },

        {
          id: `l11-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `How Matter Changes States`,
          paragraphs: [
            `Matter changes between states when you ADD or REMOVE HEAT. Heat is really just a measure of how fast molecules are moving. When you heat ice, the water molecules speed up and start breaking out of their solid pattern. The ice MELTS into liquid water. Keep heating, and the molecules speed up even more until they fly off the surface. Liquid water EVAPORATES into water vapor. Removing heat does the opposite. Cool water vapor enough and it CONDENSES into liquid. Cool liquid water enough and it FREEZES into ice.`,
            `Each substance has SPECIFIC TEMPERATURES where these changes happen. Water melts and freezes at 0°C (32°F). Water boils and condenses at 100°C (212°F). Iron melts at over 1500°C. Helium stays a gas down to almost absolute zero. The temperatures depend on how strongly each substance's molecules stick to each other. Strong forces between molecules need lots of heat to break apart. Weak forces need very little. Understanding this is the key to almost all chemistry, cooking, and materials engineering.`,
          ],
          image: `/ue-assets/science/l11-s3-state-changes.webp`,
          imageCaption: `Add heat: molecules speed up, states change. Remove heat: opposite happens.`,
          vocab: [
            { word: `liquid`,
              definition: `A state of matter with a definite volume but no definite shape. Liquid atoms can slide past each other, so liquids take the shape of their container. Examples: water, oil, milk.`,
              audioPrompt: `A liquid is a state of matter with a definite volume but no definite shape, {name}. The atoms in a liquid can slide past each other, which means a liquid takes the shape of whatever container holds it. Pour water into a round glass, and it becomes round. Pour the same water into a square box, and it becomes square. The volume stays the same. Liquids include water, oil, blood, milk, and lava. Cooking, biology, and chemistry all depend heavily on understanding how liquids work.` },
            { word: `evaporation`,
              definition: `When a liquid turns into a gas. Happens when liquid molecules gain enough energy to break free and fly off. Puddles, sweat, and ocean water all evaporate.`,
              audioPrompt: `Evaporation is when a liquid turns into a gas, {name}. It happens when liquid molecules gain enough energy to break free from the liquid and fly off as a gas. Water evaporates from puddles after rain. Sweat evaporates from your skin to cool you down. The ocean constantly evaporates water into the atmosphere. Evaporation requires heat, which is why wet surfaces feel cooler. The opposite of evaporation is condensation, when gas turns back into a liquid. Together, evaporation and condensation keep the water cycle going.` },
          ],
        },

        {
          id: `l11-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Atoms and Molecules: The Foundation`,
          paragraphs: [
            `Every single substance in the universe is made of ATOMS arranged in different combinations. About 100 different KINDS of atoms exist (each one is an ELEMENT). The PERIODIC TABLE is the famous chart of all the elements. Some, like hydrogen and oxygen, are very common. Others, like gold and uranium, are rare. Each element has its own properties. Iron is hard and magnetic. Oxygen is a gas that animals breathe. Carbon can form an incredible variety of structures, which is why it's the foundation of all life on Earth.`,
            `When atoms combine, they form MOLECULES. Water is two hydrogen atoms joined to one oxygen atom (H₂O). Sugar is a more complex molecule made of carbon, hydrogen, and oxygen. Plastic, DNA, proteins, and millions of other substances are all molecules made of atoms arranged in specific ways. The amazing thing is that the SAME atoms in different arrangements can make wildly different things. The carbon atoms in your pencil's graphite are the same kind as the carbon atoms in a diamond. They're just arranged differently. This is one of the deepest ideas in science. Everything is made of the same basic ingredients, just combined in countless ways.`,
          ],
          image: `/ue-assets/science/l11-s4-atoms-molecules.webp`,
          imageCaption: `About 100 elements. Combining in countless ways. Everything around you.`,
          vocab: [
            { word: `gas`,
              definition: `A state of matter with no definite shape and no definite volume. Gas atoms move freely and spread to fill any container. Examples: air, water vapor, helium.`,
              audioPrompt: `A gas is a state of matter with no definite shape and no definite volume, {name}. The atoms in a gas move freely in all directions and spread out to fill any container. If you release a gas in a small room, it spreads to fill the whole room. If you release the same gas in a stadium, it spreads to fill the stadium. Air is a mixture of gases. Helium in balloons is a gas. Water vapor in the atmosphere is a gas.` },
            { word: `element`,
              definition: `One of the approximately 100 types of atoms that all matter is made of. Each element has unique properties. All elements are organized on the periodic table.`,
              audioPrompt: `An element is one of the approximately 100 types of atoms that everything is made of, {name}. Each element has its own unique properties. Hydrogen is the lightest and most abundant element in the universe. Oxygen is what we breathe. Carbon is the foundation of all life on Earth. Iron is hard and magnetic. Gold is rare and doesn't rust. All elements are organized on the periodic table, one of the most important charts in science. When elements combine, they form the molecules that make up all matter.` },
          ],
        },

        {
          id: `l11-game`,
          type: `interactive`,
          format: `investigation`,
          guideText: `Investigation time, {name}. Four substances or scenes. For each one, identify the STATE OF MATTER being described: SOLID, LIQUID, or GAS?\n\nOne is sneakier than it looks.`,
          options: [
            { id: `solid`,   label: `Solid`,   color: `#F87171`, description: `Definite shape and definite volume. Atoms packed tightly, barely moving.` },
            { id: `liquid`,  label: `Liquid`,  color: `#60A5FA`, description: `Definite volume but no definite shape. Takes the shape of its container. Atoms slide past each other.` },
            { id: `gas`,     label: `Gas`,     color: `#A78BFA`, description: `No definite shape or volume. Spreads to fill any container. Atoms move freely in all directions.` },
          ],
          cases: [
            {
              id: `case-1`,
              caseTitle: `Substance #1: Iron`,
              clues: [
                { text: `It's hard. You can't squeeze it.` },
                { text: `If you set a piece of iron on a table, it stays the same shape.` },
                { text: `It would take temperatures over 1500°C to melt it.` },
              ],
              correctAnswer: `solid`,
              realWorldExample: `Iron at room temperature is a classic solid.`,
              explanation: `Hard. Holds its shape. Doesn't melt unless extremely hot. Pure solid. The atoms are packed tightly in a regular pattern. Iron is one of the most useful solid materials in human history.`,
            },
            {
              id: `case-2`,
              caseTitle: `Substance #2: Milk in a glass`,
              clues: [
                { text: `It takes the shape of the glass.` },
                { text: `If you pour it into a different container, it takes that shape.` },
                { text: `The amount stays the same regardless of container.` },
              ],
              correctAnswer: `liquid`,
              realWorldExample: `Milk is a typical liquid you'd find in any kitchen.`,
              explanation: `Takes shape of container, but volume stays the same. Pure liquid. Milk molecules can slide past each other, which is why it flows.`,
            },
            {
              id: `case-3`,
              caseTitle: `Substance #3: Helium in a balloon`,
              clues: [
                { text: `If you pop the balloon, the helium quickly spreads into the surrounding room.` },
                { text: `Inside the balloon, helium pushes outward in all directions equally.` },
                { text: `It has no fixed shape or volume.` },
              ],
              correctAnswer: `gas`,
              realWorldExample: `Helium balloons rise because helium gas is lighter than the surrounding air.`,
              explanation: `Spreads to fill any container. No fixed shape. No fixed volume. Pure gas. Helium atoms move in all directions and fly apart from each other.`,
            },
            {
              id: `case-4`,
              caseTitle: `Substance #4 — The Tricky One: Wet sand on a beach`,
              clues: [
                { text: `Sand can be packed into shapes like sandcastles.` },
                { text: `It also seems to "flow" when you pour it from one bucket to another.` },
                { text: `Each individual sand grain is solid, but the whole pile can act fluid.` },
              ],
              correctAnswer: `solid`,
              realWorldExample: `Sand is a great example of how groups of solids can act in surprising ways.`,
              explanation: `Tricky because sand FLOWS like a liquid. But each grain is a separate small SOLID. When billions of small solids slide past each other, the group acts liquid-like even though the individual pieces aren't. This is true for many "granular materials." Salt, sugar, gravel, snow. Each grain is solid; the group can act like a liquid. Lesson: state of matter applies to individual particles. Bulk behavior can sometimes mislead you.`,
            },
          ],
        },

        {
          id: `l11-quiz`,
          type: `quiz`,
          guideText: `Let's see what stuck, {name}.`,
          questions: [
            { id: `l11-q1`, format: `multiple-choice`,
              question: `What is MATTER?`,
              options: [
                `Anything important`,
                `Anything that has mass and takes up space — including your body, water, air, and almost everything physical`,
                `Only solid things`,
                `Only things you can see`,
              ],
              correctIndex: 1,
              explanation: `Matter is anything with mass and volume. Your body, water, air, rocks, planets. All matter. Light isn't matter (no mass). Thoughts aren't matter (not physical).` },

            { id: `l11-q2`, format: `multiple-choice`,
              question: `What are ATOMS?`,
              options: [
                `A type of energy`,
                `The incredibly tiny particles that all matter is made of — there are about 100 different kinds (elements)`,
                `A type of medicine`,
                `Small rocks`,
              ],
              correctIndex: 1,
              explanation: `Atoms are the basic building blocks of matter. There are about 100 different elements (different kinds of atoms). Everything in the universe — stars, planets, plants, your body — is made of atoms in different combinations.` },

            { id: `l11-q3`, format: `multiple-choice`,
              question: `What's the main DIFFERENCE between solids, liquids, and gases?`,
              options: [
                `They're made of different atoms`,
                `How tightly packed and how fast-moving their atoms are — same atoms can be in any state depending on temperature`,
                `Color`,
                `Weight`,
              ],
              correctIndex: 1,
              explanation: `The same molecules can be solid, liquid, or gas at different temperatures. Ice, liquid water, and water vapor are all H₂O. The difference is how packed the molecules are and how fast they're moving.` },

            { id: `l11-q4`, format: `multiple-choice`,
              question: `What happens when you HEAT a solid?`,
              options: [
                `Nothing`,
                `Its atoms move faster. With enough heat, it melts into a liquid. With more heat, the liquid evaporates into gas.`,
                `It turns to dust`,
                `It disappears`,
              ],
              correctIndex: 1,
              explanation: `Heat makes atoms move faster. Solids melt to liquids. Liquids evaporate to gases. Removing heat reverses the process: gases condense to liquids, liquids freeze to solids. This is the basic story of state changes.` },

            { id: `l11-q5`, format: `true-false`,
              question: `True or false: Ice, liquid water, and water vapor are all the same substance (H₂O), just in different states.`,
              correctAnswer: true,
              explanation: `True. Water is one substance that can exist in all three states at temperatures found on Earth. Ice (solid), liquid water, and water vapor (gas) are the same molecules in different arrangements and moving at different speeds.` },

            { id: `l11-q6`, format: `multiple-choice`,
              question: `What's a MOLECULE?`,
              options: [
                `A single atom`,
                `Two or more atoms joined together, like water (two hydrogen + one oxygen)`,
                `A planet`,
                `A cell`,
              ],
              correctIndex: 1,
              explanation: `When atoms combine, they form molecules. Water is H₂O (two hydrogen atoms + one oxygen atom). Sugar is a more complex molecule. Plastic and DNA are made of huge molecules with millions of atoms. Different molecules give us all the different substances around us.` },

            { id: `l11-q7`, format: `multiple-choice`,
              question: `Which state of matter has NO definite shape or volume?`,
              options: [
                `Solid`,
                `Gas`,
                `Liquid`,
                `All of them`,
              ],
              correctIndex: 1,
              explanation: `Gases spread to fill any container. They have neither definite shape nor definite volume. The same amount of helium in a small balloon fills only that small space. Released into a room, it spreads throughout the room.` },

            { id: `l11-q8`, format: `multiple-choice`,
              question: `Why is it IMPORTANT to understand matter and its states?`,
              options: [
                `It isn't important`,
                `Because everything physical is made of matter. Understanding it helps with cooking, weather, chemistry, biology, engineering, and almost every science.`,
                `Only for chemists`,
                `Just for trivia`,
              ],
              correctIndex: 1,
              explanation: `Matter is the foundation of all physical science. Cooks heat food (changing matter states). Engineers choose materials. Biologists study how cells move water and chemicals. Everything physical involves matter. Understanding it makes you a better thinker in almost every field.` },
          ],
        },

        {
          id: `l11-reflection`,
          type: `reflection`,
          guideText: `Before we wrap, {name}, pick ONE question and actually answer it. Your response gets saved, and I'll remember it next time we talk.`,
          prompts: [
            { id: `r1`, text: `Pick something near you. Is it solid, liquid, or gas? How can you tell? What atoms might it be made of?` },
            { id: `r2`, text: `Pure carbon atoms can be pencil graphite (soft and black) OR diamond (one of the hardest substances known). Same atoms, different arrangements. What does this tell you about matter?` },
            { id: `r3`, text: `Imagine being a single water molecule. Describe what happens to you as your environment heats up from freezing to boiling.` },
            { id: `r4`, text: `Why do you think it took humans so long to figure out that everything is made of atoms?` },
          ],
        },

        {
          id: `l11-realworld`,
          type: `real-world`,
          guideText: `Matter science underlies everything physical you do. Cooking changes the state of matter (heat melts butter, boils water, transforms eggs). Cleaning involves understanding how different molecules interact with water and soap. Engineering depends on knowing the properties of materials (steel, plastic, concrete). Medicine treats your body, which is matter responding to chemicals (also matter). The deeper you understand atoms and molecules, the more clearly you see how the physical world actually works.`,
          familyAdventure: `Family State-Change Demo. Take three ice cubes. Place one on a plate at room temperature. Place one in a sealed container. Place one in a warm spot. Watch over 30 minutes. The first will melt to a puddle (solid → liquid). The third may melt and then start evaporating (solid → liquid → gas). Talk about what's happening at the molecule level: heat is making the H₂O molecules move faster, changing their state.`,
          creativePrompt: {
            intro: `Imagine being a tiny scientist who has shrunk down to atom-size. Write a journal entry about what you see.`,
            floor: `Write at least 5 sentences. Describe what atoms look like (very small, mostly empty space, moving), how a solid feels different from a liquid, and one observation that surprised you.`,
            stretch: `Write 8 to 10 sentences. Describe atoms in three different substances. Show how each substance behaves differently because of how atoms are arranged.`,
            open: `Write as much as you want. Build a full atomic-scale journal. Travel through solid, liquid, and gas environments. Describe motion, arrangement, and what each feels like at atom scale. Include encounters with different elements.`,
            frames: [
              `Today I shrank to the size of an atom. The first thing I noticed was ___.`,
              `In a solid, the atoms ___.`,
              `In a liquid, they ___.`,
              `In a gas, they ___.`,
              `What surprised me most was ___.`,
            ],
          },
        },

        {
          id: `l11-celebration`,
          type: `celebration`,
          message: `Great work, {name}. You can now describe what matter is, explain the three common states and how atoms move in each, understand state changes, and recognize that everything around you is atoms arranged in different ways. Next lesson: why things MOVE. Pushes, pulls, gravity, and the forces that govern motion. See you there. — Cosmo.`,
          badge: `matter-master`,
          badgeName: `Matter Master`,
          xpEarned: 75,
        },
      ],
    },
  ],
};

export default SCIENCE_UE_L11;

// ─── Dev asset check ──────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const screens = SCIENCE_UE_L11.lessons[0].screens;
  const mags = screens.filter(s => s.type === 'magazine').length;
  const game = screens.find(s => s.type === 'interactive')?.cases?.length ?? 0;
  const quiz = screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  const refl = screens.find(s => s.type === 'reflection')?.prompts?.length ?? 0;
  const totalVocab = screens.filter(s => s.type === 'magazine').reduce((sum, s) => sum + (s.vocab?.length || 0), 0);
  console.log(`[LESSON-SCIENCE-UE-L11 v1] Loaded with ${mags} magazine sections, ${totalVocab} vocab terms, ${game} game cases, ${quiz} quiz Qs, ${refl} reflection prompts`);
}
