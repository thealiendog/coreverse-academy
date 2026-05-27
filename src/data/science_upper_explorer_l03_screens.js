// ─────────────────────────────────────────────────────────────────────────────
// SCIENCE UE  |  L03 — Living and Non-Living Things
// Age band : upper_explorers (9–10)   Guide: cosmo
// Standards: NGSS 5-LS1-1, 5-LS2-1 — Plants and animals get energy and
//            matter; matter cycles through living things
// CALIBRATED: UE spec v1.1 — real domain terms, em-dashes sparing
// SCOPE: 4 concepts — characteristics of life, cells as basic unit,
//        edge cases (viruses, dead vs once-alive), classification
// VERSION: v1
// ─────────────────────────────────────────────────────────────────────────────

const SCIENCE_UE_L03 = {
  ageBand: `upper_explorers`,
  subjectId: `science`,
  guide: `cosmo`,

  lessons: [
    {
      id: `science-9-10-03`,
      title: `Living and Non-Living Things`,
      duration: 18,
      xpReward: 75,
      badge: `life-detective`,
      badgeName: `Life Detective`,

      screens: [
        {
          id: `l03-welcome`,
          type: `welcome`,
          guideText: `Hey {name}, Cosmo here. Sounds easy, right? Rocks aren't alive. Otters are. Done. But the line between living and non-living is actually one of biology's most interesting questions. By the end of today, you'll know the 7 things that make something ALIVE, what cells have to do with it, and why some things (like viruses) are still being debated. Let's go.`,
          headline: `Living and Non-Living Things`,
          subtitle: `How biologists actually tell what's alive from what's not`,
          visual: `/ue-assets/science/l03-welcome.webp`,
        },

        {
          id: `l03-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `The 7 Characteristics of Life`,
          paragraphs: [
            `Biologists generally agree that LIVING THINGS share SEVEN basic characteristics. (1) MOVEMENT: they move on their own, even if just slightly (plants move toward light). (2) RESPIRATION: they take in oxygen or another energy source to power their cells. (3) SENSITIVITY: they respond to their environment (you flinch from heat, plants grow toward sun). (4) GROWTH: they get bigger or develop over time. (5) REPRODUCTION: they can produce new individuals of their kind. (6) EXCRETION: they get rid of waste. (7) NUTRITION: they take in or produce food to live.`,
            `Anything ALIVE has all seven. A flame moves and uses oxygen, but it can't reproduce or grow into something new, and it doesn't actively sense its environment. So fire isn't alive. A car uses fuel, has parts that move, and gets rid of exhaust. But it doesn't grow, reproduce, or sense things on its own. So a car isn't alive either. The 7-characteristic checklist usually gives a clear answer, but as you'll see in a moment, there are some edge cases that biologists still argue about.`,
          ],
          image: `/ue-assets/science/l03-s1-seven-characteristics.webp`,
          imageCaption: `Movement, respiration, sensitivity, growth, reproduction, excretion, nutrition. The seven.`,
          vocab: [
            { word: `living thing`,
              definition: `Something that shows all seven characteristics of life: movement, respiration, sensitivity, growth, reproduction, excretion, and nutrition. Also called an organism.`,
              audioPrompt: `A living thing is something that shows all seven characteristics of life, {name}. Movement on its own. Respiration (using oxygen or another energy source). Sensitivity (responding to its environment). Growth. Reproduction. Excretion (getting rid of waste). Nutrition. All seven need to be present for something to count as alive. Fire moves and uses oxygen but can't reproduce or grow. A car uses fuel but can't sense or grow on its own. Living things are also called organisms. Every plant, animal, fungus, and bacterium on Earth is an organism.` },
            { word: `respiration`,
              definition: `The process living things use to convert food into energy. Most organisms use oxygen to break down glucose into carbon dioxide, water, and energy. One of the seven characteristics of life.`,
              audioPrompt: `Respiration is the process living things use to convert food into energy, {name}. In most organisms, respiration uses oxygen to break down glucose into carbon dioxide and water, releasing energy the cells can use. This energy powers everything you do: thinking, moving, growing. Respiration happens inside every cell in your body, all the time, day and night. Plants respire too, even though they also do photosynthesis. Without respiration, cells can't get the energy they need to stay alive. It is one of the seven characteristics that define living things.` },
          ],
        },

        {
          id: `l03-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Cells: The Building Blocks of Life`,
          paragraphs: [
            `Every living thing on Earth is made of CELLS. A cell is the smallest unit that can be alive on its own. Some living things, like bacteria, are made of just ONE cell. Others, like otters, humans, and trees, are made of TRILLIONS of cells. Different cells do different jobs. In your body, brain cells handle thinking, muscle cells handle movement, skin cells protect you, and immune cells fight infections. They're all very different, but they're all cells.`,
            `Cells have specialized parts inside them. The NUCLEUS holds genetic instructions. MITOCHONDRIA produce energy. The CELL MEMBRANE controls what goes in and out. Plant cells also have CHLOROPLASTS (which we'll cover next lesson) and cell walls. The fact that all known life on Earth is made of cells is one of biology's strongest patterns. Discovered through microscopes in the 1600s, it's called CELL THEORY. If something is alive, it's made of one or more cells. No exceptions found yet, even after centuries of looking.`,
          ],
          image: `/ue-assets/science/l03-s2-cells.webp`,
          imageCaption: `All known living things are made of cells. From bacteria to blue whales.`,
          vocab: [
            { word: `cell`,
              definition: `The smallest unit of life. Every living thing is made of one or more cells. Single-celled organisms (like bacteria) have just one. Multi-cellular organisms (like humans) have trillions.`,
              audioPrompt: `A cell is the smallest unit of life, {name}. Every living thing on Earth is made of cells. Bacteria are made of just one. Humans are made of trillions. Cells have parts inside them that do specific jobs. The nucleus holds genetic instructions. Mitochondria produce energy. The cell membrane controls what enters and exits. Different cells in your body do different jobs. Brain cells handle thinking. Muscle cells handle movement. Skin cells protect you. The fact that all known life is made of cells is one of biology's strongest patterns.` },
            { word: `nucleus`,
              definition: `The control center of a cell. Holds the cell's DNA, which contains instructions for how the cell grows, what proteins it makes, and when it divides.`,
              audioPrompt: `The nucleus is the control center of a cell, {name}. It holds the cell's genetic information in the form of DNA. DNA contains instructions that tell the cell what to do: how to grow, what proteins to make, when to divide. The nucleus is surrounded by a membrane called the nuclear envelope, which controls what enters and exits. Most cells in your body have a nucleus. Bacteria are an exception: they have DNA but no true nucleus. Cells with a nucleus are called eukaryotes. Cells without one are prokaryotes.` },
          ],
        },

        {
          id: `l03-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Edge Cases: Where Biology Gets Interesting`,
          paragraphs: [
            `Not everything fits cleanly into "alive" or "not alive." VIRUSES are the most famous example. A virus is a tiny package of genetic material wrapped in protein. It can copy itself, but ONLY by hijacking a real living cell. On its own, a virus doesn't eat, doesn't grow, doesn't respond to things, and doesn't really do anything. Some biologists call viruses "alive when inside cells but not alive when outside." Others say they're just very interesting non-living chemistry. The debate is genuine, with reasonable scientists on both sides.`,
            `DEAD things vs. things that WERE NEVER ALIVE are different categories too. A leaf that fell off a tree was alive recently. Now it's dead. A rock was never alive. Both are non-living NOW, but their histories are different. ONCE-LIVING things like coal, leather, and wood are made from things that used to be alive. This matters because when biologists or chemists work with these materials, the history affects what they're studying. Living, dead, never-alive, and edge cases like viruses all need different scientific thinking.`,
          ],
          image: `/ue-assets/science/l03-s3-edge-cases.webp`,
          imageCaption: `Viruses, dead things, once-living things. The lines aren't always clean.`,
          vocab: [
            { word: `virus`,
              definition: `A tiny package of genetic material wrapped in protein. Can copy itself but only by hijacking a real living cell. Whether viruses count as alive is still debated among biologists.`,
              audioPrompt: `A virus is a tiny package of genetic material wrapped in protein, {name}. It can copy itself, but only by hijacking a real living cell. On its own, a virus does not eat, grow, respond, or do most things alive things do. Whether viruses count as alive is still debated. Some biologists say they are alive when inside cells but not alive on their own. Others say they are just interesting non-living chemistry. Either way, viruses cause many human diseases including the flu and COVID.` },
            { word: `cell theory`,
              definition: `One of biology's foundational ideas: all living things are made of cells, the cell is the basic unit of life, and all cells come from pre-existing cells. No exceptions have been found.`,
              audioPrompt: `Cell theory is one of biology's most important ideas, {name}. It states three things. First, all living things are made of one or more cells. Second, the cell is the basic unit of life. Third, all cells come from pre-existing cells. Cell theory was developed in the 1600s and 1800s as microscopes improved. It helped scientists understand what life actually is at a fundamental level. No exceptions to cell theory have been found after centuries of searching. Every organism studied has confirmed it.` },
          ],
        },

        {
          id: `l03-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `How Biologists Classify Life`,
          paragraphs: [
            `When biologists figure out something is alive, the next question is: what kind of life is it? They sort living things into groups called KINGDOMS. The main kingdoms are ANIMALS (you, otters, ants), PLANTS (trees, flowers, grass), FUNGI (mushrooms, mold, yeast), PROTISTS (mostly single-celled organisms like amoebas), and BACTERIA (also single-celled, but with very different cells from protists). Some classification systems include even more groups, like ARCHAEA, which are bacteria-like organisms that live in extreme environments.`,
            `Each kingdom is split into smaller groups based on shared features. Within Animals, you have CLASSES like mammals (have fur, feed milk), reptiles (scales, cold-blooded), and birds (feathers, lay eggs). Inside each class, you have orders, families, and species. This system, called TAXONOMY, helps scientists communicate clearly about what they're studying. When someone says "Lutra lutra," every biologist knows that's a European otter, even if their local name for it is different. You'll learn more about specific groups in later lessons.`,
          ],
          image: `/ue-assets/science/l03-s4-classification.webp`,
          imageCaption: `Animals. Plants. Fungi. Protists. Bacteria. The major kingdoms of life.`,
          vocab: [
            { word: `organism`,
              definition: `Another name for a living thing. Every plant, animal, fungus, protist, and bacterium is an organism. Some organisms are made of just one cell, others have trillions.`,
              audioPrompt: `An organism is another name for a living thing, {name}. Every plant, animal, fungus, and bacterium on Earth is an organism. Some organisms are made of just one cell. Bacteria. Yeasts. Single-celled algae. Others are made of trillions of cells. Humans. Trees. Whales. The word "organism" is used a lot in biology because it covers all living things at once, regardless of what kingdom they belong to. When biologists study how something lives, grows, or interacts with its environment, they often call it an organism.` },
            { word: `taxonomy`,
              definition: `The science of naming and classifying living things into groups based on shared features. Developed by Carl Linnaeus in the 1700s and still used by scientists worldwide.`,
              audioPrompt: `Taxonomy is the science of naming and classifying living things, {name}. Scientists use it to sort organisms into groups based on shared features. The main levels are: domain, kingdom, phylum, class, order, family, genus, and species. When scientists give an organism a scientific name, they use two parts: the genus and species. For example, humans are Homo sapiens. This system was developed by Carl Linnaeus in the 1700s and is still used today. Taxonomy lets scientists worldwide communicate clearly about organisms, regardless of what language they speak.` },
          ],
        },

        {
          id: `l03-game`,
          type: `interactive`,
          format: `investigation`,
          guideText: `Investigation time, {name}. Four things. For each one, decide which category it belongs to: LIVING (currently alive), ONCE-LIVING (was alive, no longer is), or NEVER ALIVE (a non-living thing that was never living)?\n\nOne is sneakier than it looks.`,
          options: [
            { id: `living`,        label: `Living`,        color: `#34D399`, description: `Currently alive. Shows all seven characteristics of life. Made of cells.` },
            { id: `once-living`,   label: `Once-Living`,    color: `#FBBF24`, description: `Was alive before, but is no longer. Made of cells that used to function.` },
            { id: `never-alive`,   label: `Never Alive`,    color: `#60A5FA`, description: `A non-living thing that was never alive in the first place.` },
          ],
          cases: [
            {
              id: `case-1`,
              caseTitle: `Object #1: A small oak tree growing in the woods`,
              clues: [
                { text: `It's slowly growing taller each year.` },
                { text: `It absorbs water through its roots and uses sunlight to make food.` },
                { text: `It will eventually drop acorns that may grow into new trees.` },
              ],
              correctAnswer: `living`,
              realWorldExample: `Trees are classic examples of large, living organisms.`,
              explanation: `Growth. Nutrition. Reproduction (through acorns). Sensitivity (growing toward light). Pure living. Trees are some of the longest-lived organisms on Earth. The oldest known tree is over 5,000 years old.`,
            },
            {
              id: `case-2`,
              caseTitle: `Object #2: A piece of granite on a hiking trail`,
              clues: [
                { text: `It doesn't move on its own.` },
                { text: `It doesn't grow, reproduce, or respond to anything.` },
                { text: `It's made of minerals that formed deep in the Earth millions of years ago.` },
              ],
              correctAnswer: `never-alive`,
              realWorldExample: `Rocks like granite formed from cooling magma, never alive.`,
              explanation: `Rocks meet none of the seven characteristics of life. They formed from non-living processes. Pure never-alive. Even though rocks can be very old and even change over time, they were never living things.`,
            },
            {
              id: `case-3`,
              caseTitle: `Object #3: A wooden chair made from oak`,
              clues: [
                { text: `It doesn't move, grow, or respond to anything now.` },
                { text: `It's made of wood, which is dead plant tissue from an oak tree.` },
                { text: `The tree it came from was alive maybe 50 years ago.` },
              ],
              correctAnswer: `once-living`,
              realWorldExample: `Wood furniture is one of the most common once-living materials.`,
              explanation: `The chair isn't alive. But it WAS, when it was part of a tree. Pure once-living. This category matters in chemistry because dead biological material has different properties than minerals that were never alive. Coal, leather, paper, and bone are all once-living materials.`,
            },
            {
              id: `case-4`,
              caseTitle: `Object #4 — The Tricky One: A flu virus`,
              clues: [
                { text: `On its own, it can't move, eat, grow, or respond to anything.` },
                { text: `When it gets inside a living cell, it hijacks the cell to copy itself, sometimes making millions of new viruses.` },
                { text: `Biologists still debate whether viruses really count as alive.` },
              ],
              correctAnswer: `living`,
              realWorldExample: `Viruses are the most famous "edge case" in biology.`,
              explanation: `Tricky on purpose. Many biologists DO classify viruses as alive (at least when active inside cells), and this is the most common classification in modern biology, so we mark "living" as the best answer. But other biologists make a case for "never-alive" because viruses don't meet most life criteria on their own. The lesson: biology has real edge cases. The category you put a virus in depends on which definition of life you use. That's not a failure of science. It's how real scientific debate looks.`,
            },
          ],
        },

        {
          id: `l03-quiz`,
          type: `quiz`,
          guideText: `Let's see what stuck, {name}.`,
          questions: [
            { id: `l03-q1`, format: `multiple-choice`,
              question: `What are the SEVEN characteristics of life?`,
              options: [
                `Just movement and growth`,
                `Movement, respiration, sensitivity, growth, reproduction, excretion, nutrition`,
                `Eating, sleeping, breathing`,
                `Anything that exists`,
              ],
              correctIndex: 1,
              explanation: `Biologists generally use these seven characteristics: movement, respiration, sensitivity, growth, reproduction, excretion, and nutrition. Anything alive has all seven. Anything missing one isn't alive.` },

            { id: `l03-q2`, format: `multiple-choice`,
              question: `What is a CELL?`,
              options: [
                `A small room`,
                `The smallest unit of life — every living thing is made of one or more cells`,
                `Just an atom`,
                `A type of molecule`,
              ],
              correctIndex: 1,
              explanation: `Cells are the smallest units of life. All known organisms are made of cells. Bacteria have one. Humans have trillions. Cell Theory, discovered in the 1600s, is one of biology's foundational ideas.` },

            { id: `l03-q3`, format: `multiple-choice`,
              question: `Why are VIRUSES an edge case?`,
              options: [
                `They're too small`,
                `On their own, they don't meet most criteria for life, but they can copy themselves inside living cells. Biologists debate whether they count as alive.`,
                `They don't exist`,
                `They're not interesting`,
              ],
              correctIndex: 1,
              explanation: `Viruses have genetic material like living things, but on their own they don't eat, grow, or respond. They can only copy themselves by hijacking real cells. Whether this makes them "alive" is genuinely debated.` },

            { id: `l03-q4`, format: `multiple-choice`,
              question: `What's the difference between ONCE-LIVING and NEVER-ALIVE?`,
              options: [
                `They're the same`,
                `Once-living things were alive in the past (wood, leather, coal). Never-alive things were never living in the first place (rocks, minerals).`,
                `Once-living things are smaller`,
                `Never-alive things are bigger`,
              ],
              correctIndex: 1,
              explanation: `A wooden chair was once part of a living tree. A rock was formed by non-living geological processes and was never alive. Both are currently non-living, but the histories are different. This affects how scientists study them.` },

            { id: `l03-q5`, format: `true-false`,
              question: `True or false: Every known living thing on Earth is made of cells.`,
              correctAnswer: true,
              explanation: `True. All life on Earth that we know about is built from cells. This is called Cell Theory and it's one of biology's strongest patterns. No exceptions have been found, even after centuries of looking.` },

            { id: `l03-q6`, format: `multiple-choice`,
              question: `What is an ORGANISM?`,
              options: [
                `A government office`,
                `Another word for a living thing — any plant, animal, fungus, or bacterium`,
                `A type of music`,
                `A type of building`,
              ],
              correctIndex: 1,
              explanation: `Organism is the general scientific word for any living thing. Plants, animals, fungi, protists, and bacteria are all organisms. The word lets scientists talk about life in general without specifying which kingdom.` },

            { id: `l03-q7`, format: `multiple-choice`,
              question: `What are the MAIN KINGDOMS of life?`,
              options: [
                `Just plants and animals`,
                `Animals, Plants, Fungi, Protists, and Bacteria (sometimes Archaea is added too)`,
                `Birds, fish, mammals`,
                `Big things and small things`,
              ],
              correctIndex: 1,
              explanation: `Most classification systems include Animals, Plants, Fungi, Protists, and Bacteria. Some add Archaea, which are bacteria-like organisms living in extreme environments. Within each kingdom, organisms are sorted into smaller and smaller groups.` },

            { id: `l03-q8`, format: `multiple-choice`,
              question: `Why does the difference between ALIVE and NON-ALIVE matter to biologists?`,
              options: [
                `It doesn't`,
                `Because living and non-living things follow different rules, need different scientific tools, and require different ways of thinking`,
                `It's just trivia`,
                `Only kids care about it`,
              ],
              correctIndex: 1,
              explanation: `Living things follow biological rules (cells, genes, evolution). Non-living things follow chemistry and physics rules. The questions you ask, the tools you use, and the explanations you build are different for each. The line between living and non-living is also where biology gets some of its most interesting questions.` },
          ],
        },

        {
          id: `l03-reflection`,
          type: `reflection`,
          guideText: `Before we wrap, {name}, pick ONE question and actually answer it. Your response gets saved, and I'll remember it next time we talk.`,
          prompts: [
            { id: `r1`, text: `Pick three things in your house. Are they living, once-living, or never-alive? Which surprised you most?` },
            { id: `r2`, text: `Do you think viruses should be considered alive? Why or why not?` },
            { id: `r3`, text: `Of the seven characteristics of life, which one do you think is most important — and which one do you do MOST often in a typical day?` },
            { id: `r4`, text: `Imagine finding a strange thing in your backyard that you can't tell if it's alive. What experiments would you run to find out?` },
          ],
        },

        {
          id: `l03-realworld`,
          type: `real-world`,
          guideText: `The line between living and non-living matters in real science all the time. Doctors searching for life on Mars need clear criteria to recognize it if they find it. Astrobiologists studying ancient Earth rocks try to find traces of the earliest living things. Cancer researchers study how cells that USED to behave normally start dividing uncontrollably. The seven characteristics of life are one of biology's most useful checklists, even if real organisms (and viruses) sometimes blur the lines.`,
          familyAdventure: `Family Living-or-Not Hunt. Go on a 10-minute walk together. Each family member picks three things you encounter and decides: living, once-living, or never-alive? Compare answers. Debate any disagreements (a feather: living, once-living, or part of something living?). This is the kind of careful observation real biologists do every day.`,
          creativePrompt: {
            intro: `Imagine you're an astrobiologist looking for signs of life on a new planet. Write a journal entry about what you found.`,
            floor: `Write at least 5 sentences. Describe what you observed, what tests you ran, and whether you think you found something living, once-living, or never-alive.`,
            stretch: `Write 8 to 10 sentences. Include observation details, which of the seven characteristics of life you tested for, and which ones you couldn't yet check.`,
            open: `Write as much as you want. Build a full mission log. Include the planet's conditions, multiple findings, how you ran your tests, and your evidence-based conclusion. Be careful not to claim "life" until you have real evidence.`,
            frames: [
              `Today my mission on planet ___ observed something interesting.`,
              `It moves when ___ happens, which suggests ___.`,
              `I tested for ___ by ___.`,
              `My evidence so far suggests this is ___.`,
              `Before I report "life found," I need to check ___.`,
            ],
          },
        },

        {
          id: `l03-celebration`,
          type: `celebration`,
          message: `Great work, {name}. You can now list the seven characteristics of life, explain what cells are and why they matter, understand why viruses are an edge case, and recognize the main kingdoms of living things. Next lesson: we dive into one of the most amazing kingdoms. PLANTS, who use sunlight to make their own food in a way no animal can. See you there. — Cosmo.`,
          badge: `life-detective`,
          badgeName: `Life Detective`,
          xpEarned: 75,
        },
      ],
    },
  ],
};

export default SCIENCE_UE_L03;

// ─── Dev asset check ──────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const screens = SCIENCE_UE_L03.lessons[0].screens;
  const mags = screens.filter(s => s.type === 'magazine').length;
  const game = screens.find(s => s.type === 'interactive')?.cases?.length ?? 0;
  const quiz = screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  const refl = screens.find(s => s.type === 'reflection')?.prompts?.length ?? 0;
  const totalVocab = screens.filter(s => s.type === 'magazine').reduce((sum, s) => sum + (s.vocab?.length || 0), 0);
  console.log(`[LESSON-SCIENCE-UE-L03 v1] Loaded with ${mags} magazine sections, ${totalVocab} vocab terms, ${game} game cases, ${quiz} quiz Qs, ${refl} reflection prompts`);
}
