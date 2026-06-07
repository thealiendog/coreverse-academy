// ─────────────────────────────────────────────────────────────────────────────
// SCIENCE VOYAGER  |  L06 — Chemistry: Atomic Structure and Electron Configuration
// Age band : voyagers (11-12)   Guide: cosmo (Otter)
// Standards: NGSS — HS-PS1 (Structure and Properties of Matter)
// Interaction: CASE-STUDY. Paragraphs ~330ch. 3 vocab/section.
// ─────────────────────────────────────────────────────────────────────────────

const VERSION = "voyager-sci-l06-v1";

const SCIENCE_VOYAGER_L06 = {
  ageBand: `voyagers`,
  subjectId: `science`,
  guide: `cosmo`,

  lessons: [
    {
      id: `sci-11-12-06`,
      title: `Chemistry: Atomic Structure and Electron Configuration`,
      duration: 35,
      xpReward: 75,
      badge: `atom-mapper`,
      badgeName: `Atom Mapper`,

      screens: [
        {
          id: `l06-welcome`,
          type: `welcome`,
          guideText: `{name}, everything you can touch, see, taste, or smell is made of atoms — mostly empty space, organized into patterns of astonishing complexity. Today you go inside the atom: protons, neutrons, electrons, orbitals, and the periodic table that maps how it all fits together. Understanding atomic structure is the foundation of understanding chemistry, which is the foundation of understanding nearly everything about the physical world.`,
          headline: `Chemistry: Atomic Structure and Electron Configuration`,
          subtitle: `Inside the atom, and why electrons explain nearly all of chemistry. A Case Study.`,
          visual: `/voyager-assets/science/l06-welcome.webp`,
        },

        {
          id: `l06-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `The Building Blocks Of Everything`,
          paragraphs: [
            `Everything you can touch, see, or breathe is made of atoms, the building blocks of all matter. What's remarkable is how few kinds there are: only about a hundred types of atoms, called elements, make up everything in the universe. Gold, oxygen, carbon, iron, each is one kind of element, one kind of atom.`,
            `The staggering variety of the physical world comes not from many building blocks, but from arranging and combining this small set in countless ways. Water is just hydrogen and oxygen joined; salt is sodium and chlorine; your body is mostly carbon, hydrogen, oxygen, and nitrogen, rearranged into astonishing complexity. Same few pieces, endless creations.`,
            `Atoms are unimaginably small, millions would fit across the width of a hair, yet they have an internal structure we've worked out in detail. Understanding that structure is the foundation of chemistry, because how an atom is built determines how it behaves: whether it's a metal or a gas, reactive or inert, and what it can combine with.`,
          ],
          image: `/voyager-assets/science/l06-s1-blocks.webp`,
          imageCaption: `Everything you can touch, see, or breathe is made of ATOMS, the building blocks of all matter. Remarkably, there are only about a hundred kinds, called ELEMENTS, making up everything in the universe, gold, oxygen, carbon, iron, each one kind of atom. The staggering variety of the world comes not from many blocks but from arranging this small set in countless ways: water is just hydrogen and oxygen joined; salt is sodium and chlorine; your body is mostly carbon, hydrogen, oxygen, and nitrogen rearranged into astonishing complexity. Same few pieces, endless creations. Atoms are unimaginably small, millions fit across a hair, yet they have an internal STRUCTURE we've worked out in detail. How an atom is built determines how it behaves: metal or gas, reactive or inert, and what it can combine with.`,
          vocab: [
            { word: `atom`,
              definition: `The smallest unit of an element that keeps its identity, the building block of all matter. Everything physical is made of atoms.`,
              audioPrompt: `An atom, {name}, is the smallest unit of an element that still keeps its identity, the building block of all matter. Everything you can touch, see, or breathe, including you, is made of atoms.` },
            { word: `element`,
              definition: `A substance made of only one kind of atom, like gold, oxygen, or carbon. There are about a hundred elements, the alphabet of all matter.`,
              audioPrompt: `An element, {name}, is a substance made of just one kind of atom, like gold, oxygen, or carbon. There are only about a hundred elements, and they're the alphabet from which all the matter in the universe is built.` },
            { word: `matter`,
              definition: `Anything that has mass and takes up space. All matter is made of atoms, arranged and combined in countless different ways.`,
              audioPrompt: `Matter, {name}, is anything that has mass and takes up space, from air to oceans to stars to you. All of it is made of atoms, just arranged and combined in countless different ways.` },
          ],
        },

        {
          id: `l06-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Inside The Atom`,
          paragraphs: [
            `Atoms are made of three kinds of particles. At the center is a tiny, dense core called the nucleus, containing protons (positively charged) and neutrons (no charge). Around the nucleus, in a kind of cloud, move electrons (negatively charged). The nucleus is incredibly small compared to the whole atom, most of an atom is empty space.`,
            `Each particle plays a defining role. The number of protons is the most important: it determines which element the atom is. An atom with one proton is hydrogen; with six, it's carbon; with seventy-nine, gold. Change the proton count and you change the element entirely. This count is called the atomic number, the atom's identity badge.`,
            `Neutrons add mass and can vary (atoms of the same element with different neutron counts are called isotopes). Electrons carry negative charge and balance the positive protons, so a neutral atom has equal numbers of each. But as we'll see, it's the electrons, especially the outer ones, that do almost all the interesting chemistry.`,
          ],
          image: `/voyager-assets/science/l06-s2-inside.webp`,
          imageCaption: `Atoms are made of three particles. At the center is a tiny, dense NUCLEUS, holding PROTONS (positive) and NEUTRONS (no charge). Around it, in a cloud, move ELECTRONS (negative). The nucleus is incredibly small compared to the whole atom, most of an atom is empty space. The number of PROTONS is most important: it determines which element the atom is. One proton is hydrogen; six is carbon; seventy-nine is gold. Change the proton count, change the element. This is the ATOMIC NUMBER, the atom's identity badge. NEUTRONS add mass and can vary (atoms with different neutron counts are ISOTOPES). ELECTRONS carry negative charge and balance the protons, so a neutral atom has equal numbers. But it's the electrons, especially the outer ones, that do almost all the interesting chemistry.`,
          vocab: [
            { word: `nucleus`,
              definition: `The tiny, dense core of an atom, containing the protons and neutrons. It holds nearly all the atom's mass in a fraction of its space.`,
              audioPrompt: `The nucleus, {name}, is the tiny, dense core at the center of an atom, holding the protons and neutrons. It contains almost all the atom's mass packed into a fraction of its space, the rest is mostly empty.` },
            { word: `proton`,
              definition: `A positively charged particle in the nucleus. The number of protons (the atomic number) defines which element an atom is.`,
              audioPrompt: `A proton, {name}, is a positively charged particle in the atom's nucleus. The number of protons is an atom's identity badge: it determines which element the atom is, one proton makes hydrogen, six makes carbon.` },
            { word: `atomic number`,
              definition: `The number of protons in an atom's nucleus. It defines the element and gives each its place on the periodic table.`,
              audioPrompt: `The atomic number, {name}, is the number of protons in an atom's nucleus. It defines the element completely, and it's why each element has its own fixed place on the periodic table, ordered by atomic number.` },
          ],
        },

        {
          id: `l06-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Electrons Live In Shells`,
          paragraphs: [
            `The electrons around a nucleus aren't scattered randomly, they're organized into energy levels, often pictured as shells at increasing distances from the nucleus. Each shell can hold only a certain number of electrons. The first, innermost shell holds up to two; the next shells hold more. Electrons fill the inner shells first, then the outer ones.`,
            `This arrangement, how the electrons are distributed across the shells, is called the electron configuration, and it is the single most important thing for understanding chemistry. Why? Because it determines how an atom interacts with others. And the part that matters most is the outermost shell, the electrons farthest from the nucleus.`,
            `Those outermost electrons are called valence electrons, and they are the key to nearly everything. They're the electrons an atom uses to bond with other atoms. Here's the crucial principle: atoms are most stable when their outer shell is full. This drive, to achieve a full outer shell, is what powers almost all chemical reactions and bonding.`,
          ],
          image: `/voyager-assets/science/l06-s3-shells.webp`,
          imageCaption: `Electrons aren't scattered randomly, they're organized into energy levels, pictured as SHELLS at increasing distances from the nucleus. Each shell holds only a certain number: the first, innermost holds up to two; outer shells hold more. Electrons fill inner shells first, then outer. This arrangement, how electrons are distributed across the shells, is the ELECTRON CONFIGURATION, the single most important thing for understanding chemistry, because it determines how an atom interacts with others. The part that matters most is the OUTERMOST shell. Those outer electrons are VALENCE ELECTRONS, the key to nearly everything: they're what an atom uses to bond. The crucial principle: atoms are most stable when their outer shell is FULL, and that drive powers almost all chemistry.`,
          vocab: [
            { word: `electron shell`,
              definition: `An energy level around the nucleus where electrons reside. Each shell holds a limited number, and inner shells fill before outer ones.`,
              audioPrompt: `An electron shell, {name}, is an energy level around the nucleus where electrons live. Each shell holds only a certain number of electrons, and they fill the inner shells first before moving to the outer ones.` },
            { word: `electron configuration`,
              definition: `The arrangement of an atom's electrons across its shells. It's the single most important factor in determining how an atom behaves chemically.`,
              audioPrompt: `Electron configuration, {name}, is how an atom's electrons are arranged across its shells. It's the single most important thing in chemistry, because this arrangement determines how the atom bonds and reacts with others.` },
            { word: `valence electrons`,
              definition: `The electrons in an atom's outermost shell. They determine how the atom bonds and reacts, the key to nearly all chemical behavior.`,
              audioPrompt: `Valence electrons, {name}, are the electrons in an atom's outermost shell. They're the key to nearly all of chemistry, because they're the electrons an atom uses to bond and react with other atoms.` },
          ],
        },

        {
          id: `l06-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `The Periodic Table Comes Alive`,
          paragraphs: [
            `Now the famous periodic table makes sense. It's not a random list, it's a brilliant map that organizes elements by their atomic number AND, crucially, by their electron arrangements. Elements are arranged so that those with similar valence electrons, and therefore similar behavior, line up together in columns called groups.`,
            `That's the magic: elements in the same group have the same number of valence electrons, so they behave alike. The far-right column, the noble gases, have full outer shells, so they're stable and almost never react. The far-left group has just one valence electron they readily give away, making them violently reactive metals. Position predicts behavior.`,
            `So the table is really a guide to electron configurations. Reading across a row (a period), each element adds one more electron; reading down a group, elements share the same outer-shell pattern. Once you understand that an element's place encodes its valence electrons, you can predict how it will bond and react just from where it sits. The table is a map of chemistry itself.`,
          ],
          image: `/voyager-assets/science/l06-s4-periodic.webp`,
          imageCaption: `Now the PERIODIC TABLE makes sense. It's not a random list, it's a map organizing elements by atomic number AND by their ELECTRON arrangements. Elements with similar valence electrons, and similar behavior, line up in columns called GROUPS. That's the magic: same group, same number of valence electrons, so they behave alike. The far-right NOBLE GASES have full outer shells, so they're stable and almost never react. The far-left group has one valence electron they readily give away, making them violently reactive metals. Position predicts behavior. Reading across a PERIOD, each element adds one electron; reading down a GROUP, elements share the same outer-shell pattern. Where an element sits encodes its valence electrons, so you can predict how it bonds. The table is a map of chemistry itself.`,
          vocab: [
            { word: `periodic table`,
              definition: `The chart that organizes all elements by atomic number and electron arrangement, so elements with similar behavior line up together.`,
              audioPrompt: `The periodic table, {name}, is the chart that organizes all the elements by atomic number and electron arrangement. It's built so that elements behaving alike line up together, which is why it's a map of chemistry, not a random list.` },
            { word: `group`,
              definition: `A column of the periodic table. Elements in the same group share the same number of valence electrons, so they behave in similar ways.`,
              audioPrompt: `A group, {name}, is a column of the periodic table. Elements in the same group have the same number of valence electrons, which is why they behave so similarly, like the reactive metals on the left or the inert noble gases on the right.` },
            { word: `noble gas`,
              definition: `An element with a full outer electron shell, making it stable and almost completely unreactive. Found in the far-right column of the table.`,
              audioPrompt: `A noble gas, {name}, is an element with a full outer electron shell, like helium or neon. Because their outer shell is already full, they're extremely stable and almost never react, that's the goal all other atoms are chasing.` },
          ],
        },

        {
          id: `l06-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Before The Case Studies`,
          paragraphs: [
            `Pull it together. All matter is built from about a hundred elements, each one kind of atom. An atom has a tiny nucleus of protons and neutrons, surrounded by electrons; the number of protons (the atomic number) defines the element. Electrons sit in shells, and how they're arranged, the electron configuration, is the single most important thing in chemistry.`,
            `The outermost electrons, the valence electrons, determine how an atom bonds and reacts, because atoms "want" a full outer shell. This is why the periodic table is organized as it is: elements in the same group share valence electrons and behave alike, from the unreactive noble gases (full shells) to the violently reactive metals (one easily-lost electron). Position predicts behavior.`,
            `Now the case-study screen makes you the chemist, with five puzzles: why sodium explodes in water but neon does nothing, why two atoms of one element can differ (isotopes), how the table predicts an unknown element, why noble gases are loners, and why carbon is the backbone of life. For each, reason from electron configuration to behavior. Onward.`,
          ],
          image: `/voyager-assets/science/l06-s5-before.webp`,
          imageCaption: `Threads together. All matter is built from about a hundred ELEMENTS, each one kind of atom. An atom has a tiny NUCLEUS of protons and neutrons surrounded by electrons; the proton count (ATOMIC NUMBER) defines the element. Electrons sit in SHELLS, and their arrangement, the ELECTRON CONFIGURATION, is the single most important thing in chemistry. The outer VALENCE electrons determine bonding, because atoms want a full outer shell. That's why the PERIODIC TABLE is organized as it is: same group, same valence electrons, same behavior, from unreactive noble gases to violently reactive metals. Position predicts behavior. The case-study screen makes you the chemist with five puzzles: exploding sodium, isotopes, predicting an unknown element, loner noble gases, and carbon, the backbone of life.`,
          vocab: [
            { word: `isotope`,
              definition: `Atoms of the same element (same protons) with different numbers of neutrons. They share chemical behavior but differ in mass.`,
              audioPrompt: `Isotopes, {name}, are atoms of the same element, so the same number of protons, but with different numbers of neutrons. They behave the same chemically, since chemistry depends on electrons, but they differ in mass.` },
            { word: `chemical bond`,
              definition: `A connection between atoms formed when they share or transfer valence electrons, usually to achieve full, stable outer shells.`,
              audioPrompt: `A chemical bond, {name}, is the connection that forms between atoms when they share or transfer valence electrons, usually to reach a stable, full outer shell. Bonds are how atoms combine into the molecules that make up everything.` },
            { word: `reactivity`,
              definition: `How readily an element undergoes chemical reactions, determined by its valence electrons and how close it is to a full outer shell.`,
              audioPrompt: `Reactivity, {name}, is how readily an element reacts with others. It's set by the valence electrons: atoms close to a full or empty outer shell react eagerly, while those with full shells, like noble gases, barely react at all.` },
          ],
        },

        {
          id: `l06-case-study`,
          type: `case-study`,
          headline: `Five Investigations In Atomic Structure`,
          intro: `{name}, you're the chemist now. Here are five real puzzles about atoms and elements. For each, reason from electron configuration, especially the valence electrons, to explain the behavior you see.`,
          cases: [
            {
              id: `c1`,
              title: `Sodium explodes, neon does nothing`,
              type: `Reactivity contrast`,
              description: `Drop a small piece of sodium metal into water and it reacts violently, fizzing, heating, sometimes bursting into flame. Neon, by contrast, sits in a tube doing absolutely nothing, even glowing peacefully in signs. Both are elements. Why are their behaviors so wildly different?`,
              questions: [
                `What's different about sodium's and neon's valence electrons?`,
                `Why does having a full outer shell make neon so unreactive?`,
                `Why is sodium so eager to react?`,
              ],
              evaluation: `The dramatic difference comes down entirely to their valence electrons, the outermost shell, which proves the lesson's central principle that electron configuration determines behavior. Neon is a noble gas: its outer electron shell is completely full. Because atoms are most stable when their outer shell is full, neon has already achieved that stable state, it has no "need" to gain, lose, or share electrons with anything. So it simply doesn't react; it sits there, content and inert, which is exactly why noble gases like neon are used in glowing signs (they're stable and safe). Sodium is the opposite extreme. It sits in the far-left group of the periodic table, meaning it has just one valence electron in its outer shell. Carrying a single lonely electron in an otherwise-would-be-empty outer level is a very unstable, high-energy situation. Sodium can reach a stable, full-shell configuration easily by getting rid of that one electron, so it is desperate to give it away. That's why sodium is violently reactive: when it meets water, it readily dumps its electron into the reaction, releasing lots of energy (the fizzing, heat, and flames). So the entire contrast, explosive metal versus peaceful gas, is explained by one factor: neon's outer shell is full and stable, while sodium has one easily-lost electron and "wants" to get rid of it to become stable. This is the heart of chemistry: an element's reactivity is written in its valence electrons, and how close it is to a full outer shell.`,
            },
            {
              id: `c2`,
              title: `Same element, different weight`,
              type: `Isotopes`,
              description: `Carbon comes in forms that behave identically in chemistry, all are carbon, all bond the same way, yet some carbon atoms weigh slightly more than others. One form (carbon-14) is even used to date ancient artifacts. How can atoms of the same element differ in weight but not in chemical behavior?`,
              questions: [
                `What's the same and what's different among these carbon atoms?`,
                `Why do they behave identically in chemical reactions?`,
                `What makes a form like carbon-14 useful for dating?`,
              ],
              evaluation: `These are isotopes, and explaining them tests whether you truly understand which particles do what. All carbon atoms, by definition, have the same number of protons (six), the atomic number that makes them carbon. That's what's the same. What differs among them is the number of neutrons: carbon-12 has six neutrons, carbon-14 has eight. Since neutrons add mass but carry no charge, the extra neutrons make carbon-14 slightly heavier, which is the only real difference in their bulk behavior. The crucial insight is why they behave identically in chemistry: chemical behavior, how an atom bonds and reacts, is determined entirely by its electrons, especially its valence electrons, not by its neutrons. Because all carbon isotopes have the same number of protons, a neutral atom of each has the same number of electrons arranged in the same configuration, including the same valence electrons. Identical electron configuration means identical chemistry, so carbon-12 and carbon-14 bond exactly the same way; your body can't tell them apart. The extra neutrons sit in the nucleus, untouched by chemical reactions. What makes carbon-14 useful for dating is a separate, nuclear property: it's radioactive, meaning its nucleus is slightly unstable and decays over time at a known, steady rate. By measuring how much carbon-14 remains in something that was once alive, scientists can calculate how long ago it died, radiocarbon dating. So this case cleanly separates two realms: the nucleus (protons define the element, neutrons add mass and can make isotopes radioactive) versus the electrons (which govern all the chemistry). Same protons, same chemistry; different neutrons, different mass and sometimes radioactivity.`,
            },
            {
              id: `c3`,
              title: `Predicting an element you've never seen`,
              type: `Power of the periodic table`,
              description: `A chemist is told about an element they've never studied. All they're given is its position on the periodic table: it sits in the same group (column) as chlorine, a known reactive element. Without any other information, the chemist confidently predicts how it will behave. How is this possible?`,
              questions: [
                `Why does knowing only an element's group reveal its behavior?`,
                `What do elements in the same group share?`,
                `What does this reveal about the genius of the periodic table?`,
              ],
              evaluation: `This case showcases the predictive genius of the periodic table, and why it's one of science's greatest achievements. The chemist can predict the unknown element's behavior from its group alone because the table is organized by electron configuration: elements in the same group (the same vertical column) have the same number of valence electrons in their outer shell. And since valence electrons determine how an atom bonds and reacts, elements in the same group behave in strikingly similar ways. So if the mystery element is in the same group as chlorine, the chemist knows it has the same number of valence electrons as chlorine, and can confidently predict it will be similarly reactive, form similar kinds of bonds, and combine with other elements in similar ratios. (Chlorine's group, the halogens, are reactive nonmetals that readily gain one electron to fill their outer shell; the unknown element will tend to do the same.) This is the table's true power: it's not just a catalog, it's a predictive map. Because position encodes electron configuration, and electron configuration encodes behavior, an element's mere location tells you how it will act. This is exactly how the table's creator, Mendeleev, was able to predict the existence and properties of elements that hadn't even been discovered yet, leaving gaps that were later filled by elements behaving just as predicted. It reveals the deep order beneath chemistry: the bewildering variety of element behaviors isn't random, it follows directly and predictably from the repeating patterns of electron arrangement, which is why the table is arranged in periods and groups in the first place. Understand the electrons, and the whole table, even its undiscovered corners, becomes predictable.`,
            },
            {
              id: `c4`,
              title: `Why noble gases are loners`,
              type: `Stability and full shells`,
              description: `Helium, neon, argon, the noble gases, are famous for almost never bonding with anything. They float around as lone single atoms while most other elements eagerly combine into molecules. Yet there's nothing "weak" about them. Why are these elements such chemical loners?`,
              questions: [
                `What is special about the noble gases' electron configuration?`,
                `Why does a full outer shell mean an atom won't bond?`,
                `Why do OTHER atoms bond, in light of this?`,
              ],
              evaluation: `The noble gases are loners for the best possible reason: they've already won the game every other atom is playing. Their special feature is that they have a full outer electron shell, a complete set of valence electrons. The lesson's central principle is that atoms are most stable when their outer shell is full, and bonding, sharing or transferring electrons, is how atoms reach that stable state. But the noble gases already have a full outer shell to begin with. They have nothing to gain by bonding: gaining, losing, or sharing electrons would only move them away from their already-stable configuration. So they simply don't bother; they float around as content, solitary single atoms, almost never combining with anything. This isn't weakness, it's supreme stability; they're at the lowest, most comfortable energy state. Crucially, this is the key to understanding why all the OTHER atoms bond so eagerly: every other element does not have a full outer shell, so it's in a less stable state and "seeks" to achieve the noble-gas configuration of a full outer shell. It can do this by gaining electrons, losing electrons, or sharing them, which is precisely what chemical bonding is. Sodium loses one electron to get there; chlorine gains one; carbon shares several. In every case, the goal is the same stable, full-shell arrangement the noble gases already enjoy. So the noble gases aren't just an oddity, they're the model of stability that explains all of bonding. The entire drama of chemistry, all those reactions and molecules, is essentially other atoms striving to reach the peaceful, full-shelled state that helium and neon were simply born with.`,
            },
            {
              id: `c5`,
              title: `Carbon, the backbone of life`,
              type: `Connecting to biology`,
              description: `Earlier you learned that life is built mostly from carbon. Carbon forms an incredible variety of molecules, the proteins, DNA, and sugars you studied, far more than almost any other element. Using what you now know about electron configuration, explain why carbon is so uniquely versatile.`,
              questions: [
                `How many valence electrons does carbon have, and why does that matter?`,
                `Why does this let carbon form so many different molecules?`,
                `How does this connect atomic structure to the chemistry of life?`,
              ],
              evaluation: `This case beautifully connects atomic structure back to the biology you've learned, showing chemistry as the foundation of life. Carbon has four valence electrons in its outer shell, which can hold eight. This middle position is the key to its versatility. Unlike sodium (which easily loses its one electron) or chlorine (which easily gains one), carbon is in a balanced situation: to reach a stable full outer shell of eight, it doesn't readily lose four or gain four (both are difficult); instead, the easiest path is to share its four electrons by forming four covalent bonds with other atoms. Having exactly four bonds to make is what makes carbon extraordinary. Four bonding sites let carbon link up in an enormous variety of ways: it can bond to four different atoms, form long chains, branched structures, and rings, and, crucially, bond strongly to other carbon atoms, building backbones of almost unlimited length and complexity. No other common element combines this many bonds with such stable, versatile bonding. This is exactly why carbon is the backbone of life's molecules, the proteins, DNA, fats, and sugars you studied are all built on frameworks of carbon atoms bonded into chains and rings, decorated with hydrogen, oxygen, nitrogen, and more. The astonishing diversity of biological molecules, millions of different proteins, the entire genetic code, comes directly from carbon's ability, rooted in its four valence electrons, to form so many stable, complex structures. So the deepest connection is this: the chemistry of life is a direct consequence of atomic structure. Carbon's four valence electrons, a fact about its electron configuration, are the reason life's molecules can be as varied and complex as they are. The biology you learned rests on the chemistry you're learning now, which rests on the electrons. It's all one connected story, from the atom to you.`,
            },
          ],
          synthesisPrompt: `After all five: in your own words, why are valence electrons the key to nearly all of chemistry, and how does electron configuration explain why elements behave so differently? Which case made the periodic table or atomic structure click most for you? In 5-6 sentences.`,
          reflectionPrompt: `Everything, the stars, the oceans, this screen, your own body, is made from the same hundred or so building blocks, arranged differently. And how each behaves comes down to a few outer electrons. How does it feel to know the whole physical world runs on something so simple and so elegant?`,
        },

        {
          id: `l06-quiz`,
          type: `quiz`,
          headline: `Check your understanding`,
          questions: [
            {
              id: `q1`,
              type: `multiple-choice`,
              question: `What determines which element an atom is?`,
              options: [
                `The number of neutrons in its nucleus.`,
                `The number of protons in its nucleus (its atomic number).`,
                `The total number of atoms nearby in the sample.`,
                `The color the atom appears under a microscope.`,
              ],
              correctIndex: 1,
              explanation: `The number of protons, the atomic number, defines the element: one proton is hydrogen, six is carbon, seventy-nine is gold. The distractors cite neutrons (which vary among isotopes), nearby atoms, or color.`,
            },
            {
              id: `q2`,
              type: `multiple-choice`,
              question: `Where is nearly all of an atom's mass located, and what's the rest of the atom mostly?`,
              options: [
                `Spread evenly throughout; the atom is solid all the way through.`,
                `In the electrons; the nucleus is nearly weightless.`,
                `In the tiny nucleus; the rest of the atom is mostly empty space.`,
                `In the empty space itself, which is surprisingly heavy.`,
              ],
              correctIndex: 2,
              explanation: `Nearly all an atom's mass is packed into its tiny, dense nucleus (protons and neutrons), while the rest of the atom, where the light electrons move, is mostly empty space. The distractors describe a solid atom, weightless nucleus, or heavy emptiness.`,
            },
            {
              id: `q3`,
              type: `multiple-choice`,
              question: `What are valence electrons, and why do they matter so much?`,
              options: [
                `The electrons in the outermost shell; they determine how an atom bonds and reacts.`,
                `The electrons buried deepest in the nucleus, which never move.`,
                `The protons that happen to sit right on the outer surface of the atom itself.`,
                `Extra particles that have no effect on chemistry at all.`,
              ],
              correctIndex: 0,
              explanation: `Valence electrons are those in the outermost shell, and they're the key to chemistry because they determine how an atom bonds and reacts. The distractors misplace them in the nucleus, confuse them with protons, or deny their importance.`,
            },
            {
              id: `q4`,
              type: `multiple-choice`,
              question: `According to the lesson, what makes an atom most stable?`,
              options: [
                `Having as many neutrons as possible in its nucleus.`,
                `Having a completely empty outer electron shell.`,
                `Having a full outer electron shell.`,
                `Having no electrons around it whatsoever.`,
              ],
              correctIndex: 2,
              explanation: `Atoms are most stable when their outer (valence) shell is full, and the drive to achieve a full outer shell powers almost all chemical bonding and reactions. The distractors cite neutron count, an empty shell, or no electrons.`,
            },
            {
              id: `q5`,
              type: `multiple-choice`,
              question: `Why do elements in the same group (column) of the periodic table behave similarly?`,
              options: [
                `Because they have exactly the same number of neutrons.`,
                `Because they have the same number of valence electrons.`,
                `Because they were discovered in the same year.`,
                `Because they are all found in the same place on Earth.`,
              ],
              correctIndex: 1,
              explanation: `Elements in the same group share the same number of valence electrons, and since valence electrons determine chemical behavior, they act alike. The distractors cite neutrons, discovery dates, or location.`,
            },
            {
              id: `q6`,
              type: `multiple-choice`,
              question: `Why is sodium violently reactive while neon barely reacts at all?`,
              options: [
                `Sodium is much heavier than neon, so it falls apart easily.`,
                `Neon has more protons, which makes it calmer in general.`,
                `Sodium has one easily-lost valence electron, while neon's outer shell is already full.`,
                `Sodium and neon actually react in precisely the same way under all conditions.`,
              ],
              correctIndex: 2,
              explanation: `Sodium has a single valence electron it readily loses to reach a stable full shell (very reactive), while neon already has a full outer shell (stable and inert). The distractors cite weight, proton count, or claim identical behavior.`,
            },
            {
              id: `q7`,
              type: `multiple-choice`,
              question: `Carbon-12 and carbon-14 are both carbon but differ in weight. What's the difference, and why do they behave the same chemically?`,
              options: [
                `They have different numbers of protons, yet somehow act alike.`,
                `They have different numbers of neutrons, but the same electrons, so the same chemistry.`,
                `They have different numbers of electrons, which changes their weight only.`,
                `There is no real difference; carbon-12 and carbon-14 are identical.`,
              ],
              correctIndex: 1,
              explanation: `Isotopes like carbon-12 and carbon-14 have the same protons (so same element) but different neutrons (so different mass); since chemistry depends on electrons (identical here), they behave the same. The distractors alter protons, alter electrons, or deny any difference.`,
            },
            {
              id: `q8`,
              type: `multiple-choice`,
              question: `Why is carbon able to form such an enormous variety of molecules, making it the backbone of life?`,
              options: [
                `It has four valence electrons, letting it form four bonds and build chains and rings.`,
                `It has a full outer shell, so it bonds with everything instantly.`,
                `It is by far the heaviest element, so it strongly attracts all the other atoms.`,
                `It has zero valence electrons, so it never needs to bond at all.`,
              ],
              correctIndex: 0,
              explanation: `Carbon's four valence electrons let it form four stable bonds, including to other carbons, building long chains, branches, and rings, the basis of life's vast molecular variety. The distractors invent a full shell, heaviness, or zero valence electrons.`,
            },
            {
              id: `q9`,
              type: `true-false`,
              question: `True or false: The periodic table is essentially a random list of the elements, just put in some order so chemists have a convenient way to look them up.`,
              correctAnswer: false,
              explanation: `False, and appreciating why is one of the most powerful ideas in all of chemistry. The periodic table is the opposite of random, it is one of the most brilliant and predictive maps in all of science, and its organization directly reflects the structure of atoms. Elements are arranged in order of increasing atomic number (number of protons), but the true genius is the two-dimensional layout, into rows (periods) and columns (groups), because that layout encodes electron configurations. Here's the key: elements are positioned so that those in the same group (the same vertical column) have the same number of valence electrons in their outer shell. And because valence electrons determine how an atom bonds and reacts, elements in the same group behave in strikingly similar ways. This is why the table works as a predictive tool. The far-right column, the noble gases, all have full outer shells, so they're all stable and unreactive. The far-left group all have a single valence electron they readily give away, so they're all violently reactive metals. The column containing chlorine all tend to gain one electron, so they're all reactive in similar ways. Knowing only where an element sits tells you how it will behave, what it bonds with, how reactive it is, even what ratios it combines in. This predictive power is so real that the table's creator, Dmitri Mendeleev, left gaps for elements not yet discovered and accurately predicted their properties based purely on their position, predictions later confirmed when those elements were found. So the table isn't a convenience for looking things up; it's a profound revelation that the bewildering variety of element behaviors follows a deep, repeating order rooted in electron arrangement. Reading the table is reading the logic of chemistry itself.`,
            },
            {
              id: `q10`,
              type: `inference`,
              question: `An element sits in the far-left group of the periodic table (one valence electron). Without any other information, what can you confidently predict about it, and why?`,
              options: [
                `Nothing can be predicted from position; each element is totally unique.`,
                `It will be an inert, unreactive gas, like the noble gases.`,
                `It will likely be a highly reactive metal that readily loses its single valence electron to reach a stable full shell, because position encodes valence electrons, which determine behavior.`,
                `It must be carbon, since carbon is the most important element.`,
              ],
              correctIndex: 2,
              explanation: `An element's group encodes its valence electrons, which determine its behavior. A far-left element has one valence electron it readily loses to reach a stable configuration, making it a highly reactive metal (like sodium). The distractors deny predictability, confuse it with noble gases, or guess carbon.`,
            },
          ],
        },

        {
          id: `l06-reflection`,
          type: `reflection`,
          headline: `Sit with this`,
          intro: `Pick the prompt that pulls at you most. Your answer is saved.`,
          prompts: [
            { id: `reflect-simplicity`, category: `Elegant simplicity`, prompt: `The entire physical world, stars, oceans, your body, is built from about a hundred building blocks, and how each behaves comes down to a few outer electrons. How does it feel that something so vast runs on something so simple and elegant?` },
            { id: `reflect-sameblocks`, category: `Made of the same stuff`, prompt: `You're made of the same elements as a distant star, a diamond, and the ocean, just arranged differently. What does it stir in you to know there's no special "you" material, only the universal building blocks rearranged into you?` },
            { id: `reflect-order`, category: `Hidden order`, prompt: `The periodic table revealed that the chaos of element behaviors follows a deep, predictable order. Where else might apparent chaos hide an elegant underlying pattern, if you knew where to look?` },
            { id: `reflect-heritage`, category: `Teaching the atom`, prompt: `Caro, you're building science for conscious families. How would you help a child feel wonder at the atom, that everything is made of the same few pieces, and that the periodic table is a map, not a list to memorize?` },
            { id: `reflect-connection`, category: `Chemistry into life`, prompt: `Carbon's four valence electrons are the reason life's molecules can be so varied, the biology you learned rests on this chemistry, which rests on electrons. How does it feel to see the layers of reality connect, atom to molecule to living you?` },
            { id: `reflect-critical`, category: `The hard question`, prompt: `We say "atoms want a full outer shell," but atoms don't actually want anything, it's a useful story for a deeper physics. Why do we use such metaphors in science, and where might they help understanding but also mislead?` },
          ],
        },

        {
          id: `l06-real-world`,
          type: `real-world`,
          headline: `Take it into your life`,
          guideContext: `Atoms and the periodic table are the hidden grammar behind every material in your world. These help you see it. Two paths.`,
          familyActivity: {
            title: `Decode The Periodic Table`,
            duration: `One afternoon`,
            description: `Turn the periodic table from an intimidating wall chart into a readable map, and find atoms in your everyday life. Start with a printed periodic table (easy to find online) and crack its code together: show how each element's box gives its atomic number (the proton count, its identity) and symbol, and how the table is organized, periods (rows) where each element adds an electron, and groups (columns) where elements share valence electrons and behave alike. Then go on a scavenger hunt for elements in your home: table salt is sodium and chlorine (the violently reactive metal and a poisonous gas, combined into something you eat, discuss how bonding changes everything!), the helium in a balloon is a noble gas (that's why it's safe and unreactive), aluminum foil, copper wires, the carbon in pencil "lead" (graphite) and in all your food, oxygen and nitrogen in the air. For each, find it on the table and discuss its group and likely behavior. Next, do the valence-electron game: pick a few elements and figure out how many valence electrons each has from its group, then predict, will it want to gain, lose, or share electrons? Check sodium (loses one), chlorine (gains one), neon (full, does nothing), carbon (shares four). Talk about how sodium and chlorine, both dangerous alone, bond into harmless salt because each reaches a full shell. For a memorable demo, look up (or safely watch videos of) how reactive the far-left metals are versus how inert the noble gases are, the lesson's contrast made vivid. The goal is for everyone to walk away seeing the periodic table as a powerful, readable map, and realizing that the stuff of their everyday world, salt, air, metal, pencil, is all just atoms arranged according to these elegant rules.`,
          },
          projectOption: {
            title: `The Element Profile, 2 weeks (optional)`,
            duration: `2 weeks, ~40 minutes per session`,
            description: `Become an expert on one element and reveal how its atomic structure explains everything about it. Week 1, choose and decode your element: pick one that fascinates you, carbon (the basis of life), oxygen (essential to respiration), gold (famously unreactive), sodium or chlorine (reactive extremes), helium or neon (noble gases), iron, silicon (the basis of computer chips), whatever draws you. Research its atomic structure in detail: its atomic number (protons), its electron configuration, and especially how many valence electrons it has. Then explain, rigorously, how that electron configuration determines its behavior: Is it reactive or inert, and why? Does it tend to gain, lose, or share electrons? What's its position on the periodic table (group and period), and what does that position predict? Week 2, connect structure to the real world: research how your element actually behaves and why it matters, the compounds it forms, its role in nature, technology, or life, and trace each important property back to its electrons. For example: explain why gold's electron configuration makes it unreactive and therefore prized for jewelry and electronics; or why carbon's four valence electrons make it life's backbone; or why silicon's structure makes it ideal for semiconductors. The heart of the project is the through-line: structure (electrons) explains properties explains uses. Produce your final piece, an illustrated "element profile" poster, a slide deck, a short video, or a creative "autobiography of an atom", that teaches your element's full story, always connecting its real-world behavior back to its atomic structure and valence electrons. You'll come away deeply understanding not just one element, but the master principle that an element's place on the periodic table and its electron configuration explain how it behaves and why it's useful, the core logic of all chemistry.`,
            offerToParent: `Parent: opt your child into the Element Profile project. Researching one element's atomic structure and electron configuration, then explaining how that structure determines its reactivity, bonding, and real-world uses, directly develops the central NGSS chemistry idea that the structure of matter explains its properties. Building the through-line from electrons to properties to applications turns the periodic table from memorization into genuine understanding, and connecting it to real materials (gold, carbon, silicon) makes it concrete and fascinating. It's rigorous, foundational, standards-aligned chemistry that gives your child the core logic underlying all of the subject.`,
          },
          identityQuestion: `If you become someone who can look at an element's place on the periodic table and read its behavior, who understands that everything in the universe is built from the same few pieces governed by elegant rules, what kind of thinker does that make you, someone who sees the hidden grammar of the physical world, that a person who thinks chemistry is just memorizing a chart can never quite become?`,
        },

        {
          id: `l06-identity-hook`,
          type: `identity-hook`,
          headline: `Who is this lesson making you?`,
          prompt: `One sentence. No wrong answer.`,
          placeholder: `Someone who...`,
          examples: [
            `Someone who can read an element's behavior from the periodic table.`,
            `A thinker who sees the elegant rules behind all matter.`,
            `Someone who knows the whole world is built from the same few blocks.`,
          ],
          saveKey: `identity_responses_sci_11_12_06`,
        },

        {
          id: `l06-celebration`,
          type: `celebration`,
          guideText: `{name}. Six down, and you've just learned what everything is made of, and why it behaves as it does. You learned that all matter is built from about a hundred elements, each one kind of atom, and that an atom has a tiny, dense nucleus of protons and neutrons surrounded by a cloud of electrons. The number of protons, the atomic number, defines the element. You discovered the single most important idea in chemistry: that an atom's electron configuration, especially its outermost valence electrons, determines how it bonds and behaves, because atoms are most stable with a full outer shell. And you saw why the periodic table is no random list but a brilliant map: elements in the same group share valence electrons and behave alike, so position predicts behavior. As a chemist, you reasoned through real puzzles: why sodium explodes while neon does nothing, how isotopes differ in mass but not chemistry, how the table lets you predict an unknown element, why noble gases are stable loners, and why carbon's four valence electrons make it the versatile backbone of life, tying chemistry back to the biology you learned. You now see the hidden grammar of the physical world. Next, we put atoms to work: how they combine in measurable amounts, the mole, stoichiometry, and the chemical math that lets us predict exactly how reactions turn out. Onward, {name}. — Cosmo`,
          badge: `atom-mapper`,
          badgeName: `Atom Mapper`,
          xpEarned: 75,
          competencies: [
            `Understands that all matter is built from about a hundred elements, each one kind of atom`,
            `Knows atomic structure: nucleus (protons, neutrons) and surrounding electrons`,
            `Recognizes that the number of protons (atomic number) defines the element`,
            `Grasps that electron configuration, especially valence electrons, determines chemical behavior`,
            `Understands the drive toward a full outer shell as the basis of bonding and reactivity`,
            `Reads the periodic table as a map where position (group) predicts behavior`,
            `Reasons from electron configuration to explain reactivity, isotopes, and carbon's versatility`,
          ],
          nextLessonPreview: {
            title: `Lesson 7: Chemistry — The Mole, Stoichiometry, and Chemical Math`,
            hook: `How chemists count atoms and predict exactly how reactions turn out. A Case Study.`,
          },
        },
      ],
    },
  ],
};

export default SCIENCE_VOYAGER_L06;

if (import.meta.env?.DEV) {
  const l = SCIENCE_VOYAGER_L06.lessons[0];
  const mags = l.screens.filter((s) => s.type === `magazine`).length;
  const cs = l.screens.find((s) => s.type === `case-study`)?.cases?.length ?? 0;
  const quiz = l.screens.find((s) => s.type === `quiz`)?.questions?.length ?? 0;
  console.log(`[LESSON-SCI-VOYAGER-L06 ${VERSION}] "${l.title}" mags=${mags} cases=${cs} q=${quiz}`);
}
