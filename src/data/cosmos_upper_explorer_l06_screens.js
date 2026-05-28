// ─────────────────────────────────────────────────────────────────────────────
// COSMOS UE  |  L06 — The Periodic Table: Building Blocks of Everything
// Age band : upper_explorers (9–10)   Guide: nova
// Standards: NGSS MS-PS1 — structure and properties of matter
// CALIBRATED: UE spec v1.1 — real domain terms, em-dashes sparing
// GAME FORMAT: investigation (classify elements by type)
// SCOPE: 4 concepts — what an element is, what the periodic table is,
//        how it's organized, why it's a triumph of science
// VERSION: v1
// ─────────────────────────────────────────────────────────────────────────────

const COSMOS_UE_L06 = {
  ageBand: `upper_explorers`,
  subjectId: `cosmos`,
  guide: `nova`,

  lessons: [
    {
      id: `cs-9-10-06`,
      title: `The Periodic Table: Building Blocks of Everything`,
      duration: 18,
      xpReward: 75,
      badge: `element-explorer`,
      badgeName: `Element Explorer`,

      screens: [
        {
          id: `l06-welcome`,
          type: `welcome`,
          guideText: `Hello again, {name}. Nova here. Here's a wondrous fact: everything you've ever seen, touched, or tasted, every star, every living thing, every object, is built from a surprisingly small set of basic ingredients called ELEMENTS. There are only about 118 of them, and scientists have organized them into one of the most powerful charts ever made: the PERIODIC TABLE. It's like the ultimate ingredient list for the entire universe. By the end of today, you'll understand what it is and why it's one of humanity's greatest achievements. Let's begin.`,
          headline: `The Periodic Table`,
          subtitle: `The ingredient list for the entire universe`,
          visual: `/ue-assets/cosmos/l06-welcome.webp`,
        },

        {
          id: `l06-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `What an Element Is`,
          paragraphs: [
            `An ELEMENT is a pure substance made of only ONE kind of atom. Gold is an element: every atom in a piece of pure gold is a gold atom. Oxygen is an element. So are hydrogen, carbon, iron, and helium. Elements are the basic building blocks of all matter. They cannot be broken down into simpler substances by ordinary chemical means. Everything in the universe, from your body to distant stars, is made by combining these basic elements in different ways.`,
            `There are about 118 known elements. Around 90 of them occur naturally; the rest have been created by scientists in laboratories. Some elements are incredibly common: hydrogen and helium make up most of the universe, and oxygen, carbon, hydrogen, and nitrogen make up most of your body. Others are rare. What's remarkable is how FEW there are. Just 118 basic ingredients combine to create the entire dazzling variety of everything that exists. It's a bit like how 26 letters can spell every book ever written, or four DNA letters can code for all life.`,
          ],
          image: `/ue-assets/cosmos/l06-s1-element.webp`,
          imageCaption: `An element: a pure substance of one kind of atom. About 118 build everything.`,
          vocab: [
            { word: `element`,
              definition: `A pure substance made of only one kind of atom, like gold, oxygen, or carbon. Elements are the basic building blocks of all matter and cannot be broken into simpler substances by ordinary chemistry.`,
              audioPrompt: `An element is a pure substance made of only one kind of atom, {name}. Gold is an element: every atom in pure gold is a gold atom. Oxygen, hydrogen, carbon, and iron are also elements. They're the basic building blocks of all matter and can't be broken down by ordinary chemistry. There are about 118 known elements. Around 90 occur naturally; the rest were made by scientists. Just 118 basic ingredients combine to create the entire variety of everything in the universe.` },
            { word: `matter`,
              definition: `Anything that has mass and takes up space. All matter is made of atoms and elements. The solids, liquids, and gases around you are all forms of matter.`,
              audioPrompt: `Matter is anything that has mass and takes up space, {name}. All matter is made of atoms and elements. The solids, liquids, and gases around you are all forms of matter. When you touch a chair, drink water, or breathe air, you're interacting with matter. Matter can change form, like water becoming steam, but it doesn't disappear. Understanding matter and how it behaves is at the heart of chemistry and physics.` },
          ],
        },

        {
          id: `l06-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `What the Periodic Table Is`,
          paragraphs: [
            `The PERIODIC TABLE is a chart that organizes all the known elements in a meaningful order. It was largely created by a Russian scientist named Dmitri Mendeleev in 1869. He noticed that if you arrange the elements in a certain way, PATTERNS appear: elements with similar properties line up together. His arrangement was so insightful that it's still the foundation of chemistry today, over 150 years later.`,
            `Each element gets its own box on the table, showing its symbol (like O for oxygen, Fe for iron, Au for gold) and its ATOMIC NUMBER, which is the number of protons in each of its atoms. The elements are arranged in order of increasing atomic number, from hydrogen (1 proton) up to the heaviest known elements (over 100 protons). The genius of the table is that its layout isn't random. The position of each element tells you a lot about how it behaves, what it reacts with, and what properties it has. It's not just a list. It's a map of how matter is organized.`,
          ],
          image: `/ue-assets/cosmos/l06-s2-table.webp`,
          imageCaption: `Mendeleev's table: every element in its place, revealing the patterns of matter.`,
          vocab: [
            { word: `periodic table`,
              definition: `A chart that organizes all known elements in order of atomic number, arranged so that elements with similar properties line up. Created largely by Dmitri Mendeleev in 1869, it's the foundation of chemistry.`,
              audioPrompt: `The periodic table is a chart that organizes all known elements in a meaningful order, {name}. It was created by Dmitri Mendeleev in 1869. He noticed that arranging elements a certain way revealed patterns: similar elements line up together. Each element gets a box showing its symbol and atomic number, the number of protons in its atoms. Elements are arranged in order of increasing atomic number. The position tells you a lot about how each element behaves. It's not just a list. It's a map of how matter is organized.` },
            { word: `symbol`,
              definition: `A one- or two-letter shorthand for each element on the periodic table. For example, H stands for hydrogen, O for oxygen, Fe for iron, and Au for gold. Each element has a unique symbol.`,
              audioPrompt: `A symbol is a short letter code for each element on the periodic table, {name}. For example, H stands for hydrogen, O for oxygen, Fe for iron, and Au for gold. Each element has a unique symbol, often based on its name in Latin or another language. When you see a formula like H2O, those letters are element symbols. Knowing the symbols lets you read chemistry the way you read letters in a word.` },
          ],
        },

        {
          id: `l06-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `How the Table Is Organized`,
          paragraphs: [
            `The periodic table has rows and columns, and both mean something. The COLUMNS (called groups or families) contain elements with SIMILAR properties. For example, the far-right column holds the "noble gases" (like helium and neon), which barely react with anything. Another column holds metals that react violently with water. Elements in the same column behave in similar ways because of how their atoms are structured. This is why the table is so useful: if you know how one element in a column behaves, you can often predict the others.`,
            `Broadly, the table also separates elements into types. METALS (like iron, copper, gold) are usually shiny, bendable, and conduct electricity. They sit mostly on the left and middle. NONMETALS (like oxygen, carbon, sulfur) are often dull and don't conduct electricity well. They sit mostly on the right. Between them are "metalloids" with in-between properties. The NOBLE GASES in the last column are special: they're so stable they almost never react. Understanding these patterns lets chemists predict how elements will combine, which is the basis of all chemistry, from medicine to materials to cooking.`,
          ],
          image: `/ue-assets/cosmos/l06-s3-organized.webp`,
          imageCaption: `Columns share properties. Metals left, nonmetals right, noble gases at the edge.`,
          vocab: [
            { word: `atomic number`,
              definition: `The number of protons in an atom of an element. It defines which element an atom is and determines its place on the periodic table. Hydrogen is 1, helium is 2, carbon is 6, and so on.`,
              audioPrompt: `The atomic number is the number of protons in an atom of an element, {name}. It defines which element an atom is. Hydrogen has 1 proton, so its atomic number is 1. Helium has 2, carbon has 6, oxygen has 8, and so on. The atomic number determines each element's place on the periodic table. Elements are arranged in order of increasing atomic number, from hydrogen at 1 up to the heaviest known elements with over 100 protons. Change the number of protons, and you change the element entirely.` },
            { word: `neutron`,
              definition: `A particle in the nucleus of an atom with no electric charge. Neutrons add mass but don't change which element an atom is — only the proton count determines the element.`,
              audioPrompt: `A neutron is a particle in the nucleus of an atom with no electric charge, {name}. Neutrons sit alongside protons in the nucleus. They add mass to the atom but don't change which element it is. Only the number of protons determines the element. Atoms of the same element can have different numbers of neutrons, creating versions called isotopes. Neutrons matter a lot in nuclear reactions, like those that power the Sun and nuclear reactors.` },
          ],
        },

        {
          id: `l06-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `A Triumph of Science`,
          paragraphs: [
            `The periodic table is one of the greatest achievements in the history of science, and here's a story that shows why. When Mendeleev made his table in 1869, not all elements had been discovered yet. His pattern had GAPS, empty spaces where an element should fit but none was known. Instead of ignoring the gaps, Mendeleev made a bold move: he PREDICTED that undiscovered elements existed to fill them, and he described what their properties would be, before anyone had found them.`,
            `Years later, those elements were discovered, and they matched Mendeleev's predictions almost perfectly. This is one of the most powerful things science can do: not just describe what we already know, but PREDICT what we haven't yet found. A good scientific idea makes predictions that can be tested, and when those predictions come true, our confidence grows enormously. Nova's teaching: the periodic table shows that the universe isn't random chaos. It's deeply ORDERED, organized by patterns we can discover, understand, and even use to predict the unknown. Finding that hidden order is one of the great joys of science.`,
          ],
          image: `/ue-assets/cosmos/l06-s4-triumph.webp`,
          imageCaption: `Mendeleev predicted undiscovered elements from the gaps. They were found, as described.`,
          vocab: [
            { word: `group`,
              definition: `A column on the periodic table. Elements in the same group (or "family") have similar properties because of how their atoms are structured. This lets scientists predict how an element will behave.`,
              audioPrompt: `A group is a column on the periodic table, {name}. Elements in the same group, also called a family, have similar properties because of how their atoms are structured. The far right column holds the noble gases like helium and neon, which barely react with anything. Another column holds metals that react violently with water. Because elements in the same group behave similarly, if you know how one behaves, you can often predict the others. This makes the periodic table powerful. Its patterns let scientists predict chemistry.` },
            { word: `noble gas`,
              definition: `An element in the rightmost column of the periodic table, like helium, neon, or argon. Noble gases are extremely stable and almost never react with other elements.`,
              audioPrompt: `A noble gas is an element in the far right column of the periodic table, {name}. Examples include helium, neon, and argon. Noble gases are extremely stable because their outer electron shells are full, which means they almost never react with other elements. This stability makes them very useful. Helium is used in balloons, neon in glowing signs, and argon in light bulbs. Their refusal to react makes them some of the safest elements to use.` },
          ],
        },

        {
          id: `l06-game`,
          type: `interactive`,
          format: `investigation`,
          guideText: `Investigation time, {name}. Here are four elements described by their properties. Using the clues, classify each one: METAL (shiny, bendable, conducts electricity), NONMETAL (dull, poor conductor), or NOBLE GAS (extremely stable, almost never reacts)?\n\nOne is sneakier than it looks.`,
          options: [
            { id: `metal`,     label: `Metal`,       color: `#FBBF24`, description: `Shiny, bendable, conducts electricity. Found left and middle of the table.` },
            { id: `nonmetal`,  label: `Nonmetal`,    color: `#34D399`, description: `Often dull, doesn't conduct electricity well. Found on the right.` },
            { id: `noble`,     label: `Noble Gas`,    color: `#A78BFA`, description: `Extremely stable, almost never reacts with anything. The far-right column.` },
          ],
          cases: [
            {
              id: `case-1`,
              caseTitle: `Element #1: Copper`,
              clues: [
                { text: `It's shiny and can be bent and stretched into wires.` },
                { text: `It conducts electricity extremely well, which is why it's used in wiring.` },
                { text: `It has a reddish metallic shine.` },
              ],
              correctAnswer: `metal`,
              realWorldExample: `Copper wiring is in nearly every electrical device.`,
              explanation: `Shiny, bendable, conducts electricity. Pure metal. Copper's excellent conductivity is exactly why it's used in electrical wiring all over the world. Classic metal properties.`,
            },
            {
              id: `case-2`,
              caseTitle: `Element #2: Helium`,
              clues: [
                { text: `It's a gas that almost never reacts with other elements.` },
                { text: `It's used in balloons because it's lighter than air and extremely stable.` },
                { text: `It sits in the far-right column of the periodic table.` },
              ],
              correctAnswer: `noble`,
              realWorldExample: `Helium's stability makes it safe for balloons and airships.`,
              explanation: `Extremely stable, almost never reacts, far-right column. Pure noble gas. Helium is so unreactive and light that it's perfect for balloons. Noble gases are famous for their refusal to combine with other elements.`,
            },
            {
              id: `case-3`,
              caseTitle: `Element #3: Sulfur`,
              clues: [
                { text: `It's a dull yellow solid that isn't shiny.` },
                { text: `It doesn't conduct electricity.` },
                { text: `It sits on the right side of the periodic table.` },
              ],
              correctAnswer: `nonmetal`,
              realWorldExample: `Sulfur is used in matches, fertilizers, and more.`,
              explanation: `Dull, doesn't conduct electricity, right side of the table. Pure nonmetal. Sulfur has none of the shiny, conductive properties of metals. Classic nonmetal.`,
            },
            {
              id: `case-4`,
              caseTitle: `Element #4 — The Tricky One: Hydrogen`,
              clues: [
                { text: `On most periodic tables, it's placed at the TOP of the first column, above the reactive metals.` },
                { text: `But it's actually a colorless gas that doesn't conduct electricity like a metal.` },
                { text: `It behaves much more like a nonmetal than like the metals it sits above.` },
              ],
              correctAnswer: `nonmetal`,
              realWorldExample: `Hydrogen's odd placement is famous among chemists.`,
              explanation: `Tricky! Because of its POSITION (top of the metals' column), you might guess "metal." But hydrogen actually BEHAVES like a nonmetal: it's a colorless gas that doesn't conduct electricity like a metal does. Its placement is more about its atomic structure than its everyday behavior. Pure nonmetal (by behavior). Lesson: even the brilliant periodic table has quirks. Hydrogen is so unique it doesn't fit neatly anywhere, and chemists still debate its placement. Sometimes the real world is messier than even our best charts, and that's part of what makes science interesting. Always check how something actually behaves, not just where it sits.`,
            },
          ],
        },

        {
          id: `l06-quiz`,
          type: `quiz`,
          guideText: `Let's see what stuck, {name}.`,
          questions: [
            { id: `l06-q1`, format: `multiple-choice`,
              question: `What is an ELEMENT?`,
              options: [
                `A type of weather`,
                `A pure substance made of only one kind of atom, like gold or oxygen`,
                `A mixture of metals`,
                `A kind of molecule`,
              ],
              correctIndex: 1,
              explanation: `An element is a pure substance made of only one kind of atom. Gold, oxygen, carbon, and iron are all elements. They're the basic building blocks of matter and can't be broken into simpler substances by ordinary chemistry. There are about 118.` },

            { id: `l06-q2`, format: `multiple-choice`,
              question: `About how many ELEMENTS are there?`,
              options: [
                `Millions`,
                `About 118, with around 90 occurring naturally`,
                `Exactly 26`,
                `Thousands`,
              ],
              correctIndex: 1,
              explanation: `There are about 118 known elements, with around 90 occurring naturally and the rest made by scientists. What's amazing is how few there are. Just 118 ingredients combine to create the entire variety of everything in the universe.` },

            { id: `l06-q3`, format: `multiple-choice`,
              question: `What is the PERIODIC TABLE?`,
              options: [
                `A random list of elements`,
                `A chart that organizes all elements by atomic number, so elements with similar properties line up`,
                `A multiplication table`,
                `A calendar`,
              ],
              correctIndex: 1,
              explanation: `The periodic table organizes all known elements in order of atomic number, arranged so similar elements line up. Created largely by Mendeleev in 1869, it's a map of how matter is organized, not just a list. It's still the foundation of chemistry.` },

            { id: `l06-q4`, format: `multiple-choice`,
              question: `What is the ATOMIC NUMBER of an element?`,
              options: [
                `Its weight`,
                `The number of protons in its atoms — it defines which element it is`,
                `Its age`,
                `Its price`,
              ],
              correctIndex: 1,
              explanation: `The atomic number is the number of protons in an atom. Hydrogen is 1, helium is 2, carbon is 6. It defines which element an atom is and sets its place on the table. Change the proton count, and you change the element entirely.` },

            { id: `l06-q5`, format: `true-false`,
              question: `True or false: Elements in the same column (group) of the periodic table tend to have SIMILAR properties.`,
              correctAnswer: true,
              explanation: `True. Columns (groups or families) contain elements with similar properties because of how their atoms are structured. The noble gases share a column and all barely react. This pattern lets scientists predict how an element will behave from its position.` },

            { id: `l06-q6`, format: `multiple-choice`,
              question: `What's the difference between METALS and NONMETALS?`,
              options: [
                `No difference`,
                `Metals are usually shiny, bendable, and conduct electricity; nonmetals are often dull and poor conductors`,
                `Metals are always gases`,
                `Nonmetals are always liquid`,
              ],
              correctIndex: 1,
              explanation: `Metals (like iron, copper, gold) are usually shiny, bendable, and good conductors of electricity, sitting on the left and middle. Nonmetals (like oxygen, sulfur, carbon) are often dull and poor conductors, sitting on the right.` },

            { id: `l06-q7`, format: `multiple-choice`,
              question: `Why is Mendeleev's PREDICTION of undiscovered elements so important?`,
              options: [
                `It was just lucky`,
                `He used the table's patterns to predict elements and their properties before they were found — and he was right, showing the power of science to predict`,
                `He made them up`,
                `It doesn't matter`,
              ],
              correctIndex: 1,
              explanation: `Mendeleev left gaps in his table and predicted that undiscovered elements would fill them, describing their properties in advance. Those elements were later found, matching his predictions. This shows science's power to predict the unknown, not just describe the known.` },

            { id: `l06-q8`, format: `multiple-choice`,
              question: `What does the periodic table reveal about the universe?`,
              options: [
                `That it's random chaos`,
                `That it's deeply ordered, organized by patterns we can discover, understand, and use to predict`,
                `That nothing makes sense`,
                `That only experts can understand it`,
              ],
              correctIndex: 1,
              explanation: `The periodic table shows the universe isn't random. Matter is organized by deep patterns we can discover and understand. Finding that hidden order, and using it to predict the unknown, is one of the great joys and powers of science.` },
          ],
        },

        {
          id: `l06-reflection`,
          type: `reflection`,
          guideText: `Before we wrap, {name}, pick ONE question and actually answer it. Your response gets saved, and I'll remember it next time we talk.`,
          prompts: [
            { id: `r1`, text: `Everything you've ever touched is made from just ~118 elements. Does it surprise you that so much variety comes from so few ingredients? Why?` },
            { id: `r2`, text: `Mendeleev predicted elements no one had found yet, just from patterns. What does that tell you about the power of noticing patterns?` },
            { id: `r3`, text: `The periodic table shows the universe is deeply ordered, not random. Where else in nature have you noticed surprising order or patterns?` },
            { id: `r4`, text: `If you could be made aware of which elements are in your own body (oxygen, carbon, hydrogen, and more), which fact would you find most interesting?` },
          ],
        },

        {
          id: `l06-realworld`,
          type: `real-world`,
          guideText: `The periodic table isn't just a poster on a classroom wall. It's a working tool used every day in medicine, technology, cooking, and industry. Knowing which elements bond and how lets chemists design life-saving drugs, build stronger materials, create new battery technologies, and understand everything from why iron rusts to why salt dissolves. Every screen, every medicine, every meal involves elements interacting in predictable ways. Nova's note: the same elements that make up distant stars make up your body and your breakfast. Understanding them connects the cosmic to the everyday in the most literal way possible.`,
          familyAdventure: `Family Element Hunt. As a family, look around your home and try to find examples of common elements: aluminum foil (aluminum), copper wires or pennies (copper), the helium in a balloon, the oxygen you breathe, the carbon in pencil "lead," the iron in a cast-iron pan. Look at a periodic table together and find each one. Talk about how these few elements, combined in different ways, make up everything in your house, and everything in the universe.`,
          creativePrompt: {
            intro: `Imagine you're an element introducing yourself at a "party of elements." Pick a real element and write its introduction speech.`,
            floor: `Write at least 5 sentences. Have your element say its name, what it's like (metal/nonmetal/gas), and one place it's found or used.`,
            stretch: `Write 8 to 10 sentences. Have your element describe its properties, its place on the table, what it reacts with (or doesn't), and why it matters.`,
            open: `Write as much as you want. Write a full, fun introduction from your chosen element's point of view. Cover its name and symbol, its atomic number, its properties, its group, what it likes to bond with (or refuses to, if it's a noble gas), where it's found in the universe and in daily life, and why it's proud to be itself. Give it a personality.`,
            frames: [
              `Hello everyone! I'm ___, and my symbol is ___.`,
              `I'm a (metal / nonmetal / noble gas), which means I'm ___.`,
              `You can find me in ___.`,
              `I love to bond with ___ (or: I refuse to bond with anyone, because ___).`,
              `What makes me special is ___.`,
            ],
          },
        },

        {
          id: `l06-celebration`,
          type: `celebration`,
          message: `Brilliant work, {name}. You can now explain what an element is, what the periodic table is and how it's organized, the meaning of atomic number and groups, and why Mendeleev's predictions made it a triumph of science. Next lesson: we zoom in even closer, into the atoms themselves. ATOMS AND MOLECULES: THE TINY WORLD. See you there. — Nova.`,
          badge: `element-explorer`,
          badgeName: `Element Explorer`,
          xpEarned: 75,
        },
      ],
    },
  ],
};

export default COSMOS_UE_L06;

// ─── Dev asset check ──────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const screens = COSMOS_UE_L06.lessons[0].screens;
  const mags = screens.filter(s => s.type === 'magazine').length;
  const game = screens.find(s => s.type === 'interactive')?.cases?.length ?? 0;
  const quiz = screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  const refl = screens.find(s => s.type === 'reflection')?.prompts?.length ?? 0;
  const totalVocab = screens.filter(s => s.type === 'magazine').reduce((sum, s) => sum + (s.vocab?.length || 0), 0);
  console.log(`[LESSON-COSMOS-UE-L06 v1] Loaded with ${mags} magazine sections, ${totalVocab} vocab terms, ${game} game cases, ${quiz} quiz Qs, ${refl} reflection prompts`);
}
