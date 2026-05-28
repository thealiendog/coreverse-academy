// ─────────────────────────────────────────────────────────────────────────────
// COSMOS UE  |  L07 — Atoms and Molecules: The Tiny World
// Age band : upper_explorers (9–10)   Guide: nova
// Standards: NGSS MS-PS1 — structure of atoms and molecules
// CALIBRATED: UE spec v1.1 — real domain terms, em-dashes sparing
// GAME FORMAT: sequence (order the tiny world from smallest to largest)
// SCOPE: 4 concepts — what an atom is, atomic structure, molecules,
//        everything is made of atoms
// VERSION: v1
// ─────────────────────────────────────────────────────────────────────────────

const COSMOS_UE_L07 = {
  ageBand: `upper_explorers`,
  subjectId: `cosmos`,
  guide: `nova`,

  lessons: [
    {
      id: `cs-9-10-07`,
      title: `Atoms and Molecules: The Tiny World`,
      duration: 18,
      xpReward: 75,
      badge: `atom-explorer`,
      badgeName: `Atom Explorer`,

      screens: [
        {
          id: `l07-welcome`,
          type: `welcome`,
          guideText: `Hello again, {name}. Nova here. Last time we explored the elements. Today we zoom in closer than almost anything you can imagine, into the ATOMS that make up those elements. Atoms are so small that millions of them could fit across the width of a single human hair. And yet, everything is made of them: you, this device, the air, the oceans, the stars. By the end of today, you'll understand what atoms are made of, how they join into molecules, and the astonishing truth that you are built entirely from these tiny pieces. Let's begin.`,
          headline: `Atoms and Molecules`,
          subtitle: `The tiny building blocks that make up absolutely everything`,
          visual: `/ue-assets/cosmos/l07-welcome.webp`,
        },

        {
          id: `l07-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `What an Atom Is`,
          paragraphs: [
            `An ATOM is the smallest unit of an element that still has that element's properties. A single atom of gold is the smallest possible piece of gold. Atoms are unimaginably tiny. A typical atom is about a tenth of a billionth of a meter across. To get a sense of it: if an apple were magnified to the size of the entire Earth, the atoms in that apple would be about the size of the original apple. That's how much smaller atoms are than the things they build.`,
            `For thousands of years, people wondered what would happen if you kept cutting something in half, over and over. Could you cut forever, or would you reach a smallest piece? The ancient Greek thinker Democritus guessed there must be a smallest, uncuttable piece, and called it "atomos," meaning "uncuttable." He was right that there are tiny building blocks, though we now know atoms CAN be split (that's what happens in nuclear reactions and inside stars). But for ordinary chemistry, the atom is the basic unit. Everything around you is made of atoms, combined in countless ways.`,
          ],
          image: `/ue-assets/cosmos/l07-s1-what-is.webp`,
          imageCaption: `An atom: the smallest unit of an element. Almost unimaginably tiny.`,
          vocab: [
            { word: `atom`,
              definition: `The smallest unit of an element that still has that element's properties. Atoms are the basic building blocks of all ordinary matter, unimaginably tiny, and everything around you is made of them.`,
              audioPrompt: `An atom is the smallest unit of an element that still has that element's properties, {name}. A single atom of gold is the smallest possible piece of gold. Atoms are unimaginably tiny, about a tenth of a billionth of a meter across. If an apple were the size of the Earth, the atoms inside would be about the size of the original apple. That's how small they are. Democritus guessed there must be a smallest building block and called it atomos, meaning uncuttable. Everything around you is made of atoms.` },
            { word: `Democritus`,
              definition: `An ancient Greek thinker who first guessed that all matter must be made of tiny, uncuttable building blocks he called "atomos." Though he had no experiments, his idea was remarkably close to the truth.`,
              audioPrompt: `Democritus was an ancient Greek thinker who lived around 400 BCE, {name}. He was one of the first to guess that if you kept cutting matter into smaller and smaller pieces, you'd eventually reach a tiniest, uncuttable piece. He called it atomos, meaning uncuttable. He had no experiments to prove it. He reasoned it out from logic alone. Thousands of years later, science confirmed he was right in spirit. Atoms really are the basic building blocks of matter.` },
          ],
        },

        {
          id: `l07-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `What Atoms Are Made Of`,
          paragraphs: [
            `Even though atoms are the building blocks of elements, atoms THEMSELVES are made of even smaller particles. At the center of every atom is the NUCLEUS, a dense core containing two kinds of particles: PROTONS (which have a positive electric charge) and NEUTRONS (which have no charge). Whirling around the nucleus are ELECTRONS, tiny particles with a negative charge. The number of protons determines which element the atom is (remember the atomic number from last lesson).`,
            `Here's something that may surprise you: atoms are mostly EMPTY SPACE. The nucleus is incredibly tiny compared to the whole atom. If an atom were the size of a sports stadium, the nucleus would be about the size of a pea in the center, with the electrons whizzing around the outer stands. The vast space in between is essentially empty. This means YOU are mostly empty space too, and so is everything you touch. The reason things feel solid is the electric forces between atoms, not the atoms physically filling space. The "solid" world is far stranger and emptier than it appears.`,
          ],
          image: `/ue-assets/cosmos/l07-s2-structure.webp`,
          imageCaption: `Protons and neutrons in a tiny nucleus, electrons around it. Mostly empty space.`,
          vocab: [
            { word: `nucleus`,
              definition: `The dense central core of an atom, containing protons (positive charge) and neutrons (no charge). Tiny compared to the whole atom, but it holds almost all the atom's mass.`,
              audioPrompt: `The nucleus is the dense central core of an atom, {name}. It contains two kinds of particles: protons, which have a positive charge, and neutrons, which have no charge. Around the nucleus whirl tiny electrons with a negative charge. The nucleus is incredibly small compared to the whole atom. If an atom were a sports stadium, the nucleus would be a pea in the center. Almost all of the atom's mass is packed into that nucleus, while the rest of the atom is mostly empty space with electrons whizzing around.` },
            { word: `proton`,
              definition: `A positively charged particle in the nucleus of an atom. The number of protons determines which element the atom is. Hydrogen has 1 proton, helium has 2, and carbon has 6.`,
              audioPrompt: `A proton is a positively charged particle found in the nucleus of every atom, {name}. The number of protons in an atom determines which element it is. Hydrogen has 1 proton, helium has 2, carbon has 6, and oxygen has 8. Change the number of protons, and you change the element entirely. Protons have a positive charge, which balances the negative charge of electrons. Together with neutrons, they make up the dense central nucleus where almost all of the atom's mass lives.` },
          ],
        },

        {
          id: `l07-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Molecules: Atoms Join Together`,
          paragraphs: [
            `Atoms rarely exist alone. They JOIN together to form MOLECULES. A molecule is two or more atoms bonded together. When atoms connect, they can form something with completely new properties. The most famous example is water: two hydrogen atoms bonded to one oxygen atom make a water molecule, written H2O. On their own, hydrogen and oxygen are both gases. Combined as H2O, they make the liquid water that fills oceans and keeps you alive. The combination creates something neither atom had alone.`,
            `Molecules can be simple (like O2, two oxygen atoms, the oxygen you breathe) or incredibly complex. A single DNA molecule (remember lesson 4) contains millions of atoms bonded in a precise pattern. The way atoms bond and arrange themselves determines the properties of every substance in the universe. Change the arrangement, and you change everything. Carbon atoms arranged one way form soft, gray pencil "lead" (graphite). The SAME carbon atoms arranged differently form diamond, one of the hardest substances known. Same atoms, different arrangement, totally different material. The tiny world of atoms and molecules is where all of chemistry, and all of matter, comes from.`,
          ],
          image: `/ue-assets/cosmos/l07-s3-molecules.webp`,
          imageCaption: `Atoms bond into molecules. Same carbon atoms: graphite or diamond, by arrangement.`,
          vocab: [
            { word: `molecule`,
              definition: `Two or more atoms bonded together. Molecules can be simple (like H2O, water) or hugely complex (like DNA). The way atoms bond and arrange determines the properties of every substance.`,
              audioPrompt: `A molecule is two or more atoms bonded together, {name}. Atoms rarely exist alone. They join to form molecules, often with completely new properties. The most famous example is water. Two hydrogen atoms bonded to one oxygen atom make a water molecule, written H2O. On their own, hydrogen and oxygen are gases. Combined, they make liquid water. Molecules can be simple, like the oxygen you breathe, or incredibly complex, like DNA with its millions of atoms. The way atoms bond and arrange determines the properties of every substance.` },
            { word: `bond`,
              definition: `The force that holds atoms together in a molecule. When atoms share or exchange electrons, they form a bond. The type and arrangement of bonds determines a molecule's properties.`,
              audioPrompt: `A bond is the force that holds atoms together in a molecule, {name}. When atoms share or exchange electrons, they form a bond. The type and arrangement of bonds determines a molecule's properties. Carbon atoms bonded one way make soft graphite; bonded another way they make hard diamond. The bonds in water make it liquid at room temperature. Breaking bonds releases energy, which is how food fuels your body and how fuel powers engines. Bonds are the language atoms use to build everything.` },
          ],
        },

        {
          id: `l07-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `You Are Made of Atoms`,
          paragraphs: [
            `Here's the truly astonishing part. YOU are made entirely of atoms, around 7 octillion of them (that's a 7 followed by 27 zeros). Every cell, every bone, every thought-carrying brain signal happens because of atoms and the molecules they form. And remember from our very first lesson: those atoms were forged inside ancient stars. The carbon in your cells, the oxygen in your lungs, the iron in your blood, all came from stars that exploded billions of years ago. You are, quite literally, made of stardust assembled into atoms and molecules.`,
            `Even more amazing: the atoms in your body are constantly being replaced. The atoms that make up "you" today are not the same ones from a few years ago. You're more like a pattern that atoms flow through, like a wave moving through water, than a fixed collection of unchanging stuff. Nova's teaching: understanding atoms reveals something profound. You are not separate from the universe, made of some special material. You are made of the exact same atoms as the stars, the oceans, and every other living thing, temporarily arranged into the wonderful pattern that is you. The tiny world isn't far away. It IS you.`,
          ],
          image: `/ue-assets/cosmos/l07-s4-you.webp`,
          imageCaption: `You are ~7 octillion atoms, forged in stars, flowing through the pattern that is you.`,
          vocab: [
            { word: `electron`,
              definition: `A tiny negatively-charged particle that whirls around the nucleus of an atom. Electrons are involved in how atoms bond to form molecules and in electricity. They occupy the mostly-empty space of the atom.`,
              audioPrompt: `An electron is a tiny particle with a negative charge that whirls around the nucleus of an atom, {name}. Electrons are much smaller and lighter than the protons and neutrons in the nucleus. They occupy the mostly empty space of the atom, moving around the central nucleus. Electrons are very important. They're involved in how atoms bond together to form molecules, and they're what flows through wires as electricity. When atoms share or trade electrons, they form the bonds that hold molecules together. Electrons are key to all of chemistry.` },
            { word: `empty space`,
              definition: `Most of an atom is empty space between the tiny nucleus and the whirling electrons. This means all "solid" matter, including you, is mostly empty space — held together by electric forces between atoms.`,
              audioPrompt: `Most of an atom is empty space, {name}. The nucleus is tiny compared to the whole atom. If an atom were a sports stadium, the nucleus would be a pea in the center, and the electrons would be in the outer stands, with vast empty space between. This means everything you call solid, including you, is mostly empty space. Things feel solid not because matter fills space, but because electric forces between atoms push back when you press them together.` },
          ],
        },

        {
          id: `l07-game`,
          type: `interactive`,
          format: `sequence`,
          guideText: `Time to order the tiny world, {name}. Here are six things from the world of the very small, scrambled up. Use the arrows to arrange them from SMALLEST (top) to LARGEST (bottom). Remember: some of these are PARTS of the others.`,
          items: [
            { id: `step-quark`,    label: `A quark (one of the tiniest known particles)`,        position: 1 },
            { id: `step-proton`,   label: `A proton (made of quarks)`,                          position: 2 },
            { id: `step-nucleus`,  label: `An atomic nucleus (protons and neutrons together)`,  position: 3 },
            { id: `step-atom`,     label: `A whole atom (nucleus plus electron cloud)`,         position: 4 },
            { id: `step-water`,    label: `A water molecule (a few atoms joined together)`,     position: 5 },
            { id: `step-dna`,      label: `A DNA molecule (millions of atoms joined together)`, position: 6 },
          ],
          completionMessage: `Perfect, {name}! That's the ladder of the tiny world, from a single quark up to a giant DNA molecule made of millions of atoms. Each step is built from the ones before it. And everything bigger, including you, is built from these. The universe assembles the large from the unimaginably small.`,
        },

        {
          id: `l07-quiz`,
          type: `quiz`,
          guideText: `Let's see what stuck, {name}.`,
          questions: [
            { id: `l07-q1`, format: `multiple-choice`,
              question: `What is an ATOM?`,
              options: [
                `A type of molecule`,
                `The smallest unit of an element that still has that element's properties`,
                `A large particle you can see`,
                `A kind of cell`,
              ],
              correctIndex: 1,
              explanation: `An atom is the smallest unit of an element. A single gold atom is the smallest possible piece of gold. Atoms are unimaginably tiny, about a tenth of a billionth of a meter across, and everything around you is made of them.` },

            { id: `l07-q2`, format: `multiple-choice`,
              question: `What is an atom made of?`,
              options: [
                `Just one solid ball`,
                `A nucleus of protons and neutrons, with electrons whirling around it`,
                `Only electrons`,
                `Water`,
              ],
              correctIndex: 1,
              explanation: `An atom has a dense central nucleus containing protons (positive charge) and neutrons (no charge), with electrons (negative charge) whirling around it. The number of protons determines which element the atom is.` },

            { id: `l07-q3`, format: `true-false`,
              question: `True or false: Atoms are mostly empty space.`,
              correctAnswer: true,
              explanation: `True. The nucleus is tiny compared to the whole atom. If an atom were a sports stadium, the nucleus would be a pea in the center, with electrons in the outer stands. The space between is essentially empty. So you, and everything you touch, are mostly empty space.` },

            { id: `l07-q4`, format: `multiple-choice`,
              question: `What is a MOLECULE?`,
              options: [
                `A single atom`,
                `Two or more atoms bonded together`,
                `A type of element`,
                `Part of a nucleus`,
              ],
              correctIndex: 1,
              explanation: `A molecule is two or more atoms bonded together. Water (H2O) is two hydrogen atoms bonded to one oxygen atom. Molecules can be simple (like the oxygen you breathe) or hugely complex (like DNA, with millions of atoms).` },

            { id: `l07-q5`, format: `multiple-choice`,
              question: `How can the SAME carbon atoms form both soft pencil "lead" AND hard diamond?`,
              options: [
                `They're different atoms`,
                `The atoms are ARRANGED differently — arrangement determines a substance's properties`,
                `It's impossible`,
                `One has more atoms`,
              ],
              correctIndex: 1,
              explanation: `Same carbon atoms, different arrangement. Arranged one way, they form soft graphite (pencil "lead"). Arranged another way, they form diamond, one of the hardest substances known. The way atoms bond and arrange determines the properties of every material.` },

            { id: `l07-q6`, format: `multiple-choice`,
              question: `What happens when hydrogen and oxygen atoms bond to form water (H2O)?`,
              options: [
                `Nothing changes`,
                `Two gases combine to form liquid water — a new substance with new properties`,
                `It explodes`,
                `They stay gases`,
              ],
              correctIndex: 1,
              explanation: `On their own, hydrogen and oxygen are both gases. Bonded as H2O, they form liquid water, which keeps you alive. The combination creates something with completely new properties that neither atom had alone. That's the magic of molecules.` },

            { id: `l07-q7`, format: `multiple-choice`,
              question: `Where did the atoms in YOUR body originally come from?`,
              options: [
                `They were made on Earth recently`,
                `Most were forged inside ancient stars that exploded billions of years ago`,
                `From the ocean`,
                `Nobody knows`,
              ],
              correctIndex: 1,
              explanation: `The carbon, oxygen, iron, and other atoms in your body were forged inside ancient stars that exploded long before the Sun was born. You're made of stardust, assembled into atoms and molecules. This connects back to lesson 1: you are "star stuff."` },

            { id: `l07-q8`, format: `multiple-choice`,
              question: `What's the profound truth about you and atoms?`,
              options: [
                `You're made of special material unlike anything else`,
                `You're made of the same atoms as stars, oceans, and all life — temporarily arranged into the pattern that is you`,
                `You have no atoms`,
                `Atoms don't matter`,
              ],
              correctIndex: 1,
              explanation: `You're not separate from the universe or made of special material. You're made of the exact same atoms as stars, oceans, and every living thing, temporarily arranged into the wonderful pattern that is you. Your atoms even get replaced over time. You're more a pattern than fixed stuff.` },
          ],
        },

        {
          id: `l07-reflection`,
          type: `reflection`,
          guideText: `Before we wrap, {name}, pick ONE question and actually answer it. Your response gets saved, and I'll remember it next time we talk.`,
          prompts: [
            { id: `r1`, text: `Atoms are mostly empty space, which means YOU are mostly empty space. How does that change how you think about "solid" objects?` },
            { id: `r2`, text: `The same carbon atoms can be soft graphite or hard diamond, depending only on arrangement. What does that teach you about how much arrangement matters?` },
            { id: `r3`, text: `Your atoms are constantly being replaced, so you're more a pattern than fixed stuff. Does it feel strange to think of yourself as a pattern atoms flow through?` },
            { id: `r4`, text: `You're made of the same atoms as the stars and oceans. Does knowing that make you feel more connected to the universe, or less special? Why?` },
          ],
        },

        {
          id: `l07-realworld`,
          type: `real-world`,
          guideText: `Understanding atoms and molecules is the foundation of chemistry, biology, materials science, and medicine. Scientists who understand how atoms bond can design new medicines, create stronger and lighter materials, develop better batteries, and even build structures one atom at a time (nanotechnology). Everything from the screen you're reading on to the food you eat is the result of understanding how atoms combine. Nova's note: the tiny world of atoms might be invisible, but mastering its rules has given humanity some of its greatest powers, and its greatest responsibilities, from medicine to nuclear energy.`,
          familyAdventure: `Family Molecule Building. As a family, build simple molecule models using household items: toothpicks or straws as bonds, and marshmallows, grapes, or balls of clay as atoms. Try building a water molecule (one big "oxygen" with two smaller "hydrogen" atoms attached). Then try carbon dioxide (CO2) or methane. Talk about how the same few kinds of atoms, joined in different ways, make up everything. You're modeling the actual structure of matter.`,
          creativePrompt: {
            intro: `Imagine you could shrink down to the size of an atom and take a tour of the tiny world. Write about your adventure.`,
            floor: `Write at least 5 sentences. Describe what you see at atomic scale: the nucleus, the electrons, the empty space, and one molecule you visit.`,
            stretch: `Write 8 to 10 sentences. Take the reader on a tour: shrink down, explore inside an atom, see the nucleus and electrons, then watch atoms bond into a molecule.`,
            open: `Write as much as you want. Write a full adventure story of shrinking to atomic size. Describe the journey down through the scales, what an atom actually looks like up close (the tiny nucleus, the vast empty space, the whirling electrons), what it's like when atoms bond into molecules, and the strange wonder of discovering that "solid" matter is mostly empty space. Make the invisible world come alive.`,
            frames: [
              `As I shrank smaller and smaller, the first thing I noticed was ___.`,
              `Inside the atom, I saw ___.`,
              `The most surprising thing was how much ___.`,
              `Then I watched two atoms ___.`,
              `By the end of my journey, I understood that ___.`,
            ],
          },
        },

        {
          id: `l07-celebration`,
          type: `celebration`,
          message: `Amazing work, {name}. You can now explain what an atom is, what it's made of, how atoms join into molecules, and the profound truth that you are made of the same atoms as the stars. You also ordered the entire tiny world by size. Next lesson: we explore the rules that govern how everything moves, from a falling apple to an orbiting planet. FORCES: NEWTON'S LAWS OF MOTION. See you there. — Nova.`,
          badge: `atom-explorer`,
          badgeName: `Atom Explorer`,
          xpEarned: 75,
        },
      ],
    },
  ],
};

export default COSMOS_UE_L07;

// ─── Dev asset check ──────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const screens = COSMOS_UE_L07.lessons[0].screens;
  const mags = screens.filter(s => s.type === 'magazine').length;
  const seq = screens.find(s => s.type === 'interactive')?.items?.length ?? 0;
  const quiz = screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  const refl = screens.find(s => s.type === 'reflection')?.prompts?.length ?? 0;
  const totalVocab = screens.filter(s => s.type === 'magazine').reduce((sum, s) => sum + (s.vocab?.length || 0), 0);
  console.log(`[LESSON-COSMOS-UE-L07 v1] Loaded with ${mags} magazine sections, ${totalVocab} vocab terms, ${seq} sequence items, ${quiz} quiz Qs, ${refl} reflection prompts`);
}
