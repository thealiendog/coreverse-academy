// ─────────────────────────────────────────────────────────────────────────────
// COSMOS UE  |  L04 — DNA: The Code of Life
// Age band : upper_explorers (9–10)   Guide: nova
// Standards: NGSS MS-LS1, MS-LS3 — structure of organisms; inheritance
// CALIBRATED: UE spec v1.1 — real domain terms, em-dashes sparing
// GAME FORMAT: investigation (classify statements about DNA)
// SCOPE: 4 concepts — what DNA is, the double helix and code, how it
//        builds living things, what DNA does and doesn't determine
// VERSION: v1
// ─────────────────────────────────────────────────────────────────────────────

const COSMOS_UE_L04 = {
  ageBand: `upper_explorers`,
  subjectId: `cosmos`,
  guide: `nova`,

  lessons: [
    {
      id: `cs-9-10-04`,
      title: `DNA: The Code of Life`,
      duration: 18,
      xpReward: 75,
      badge: `dna-decoder`,
      badgeName: `DNA Decoder`,

      screens: [
        {
          id: `l04-welcome`,
          type: `welcome`,
          guideText: `Hello again, {name}. Nova here. We've explored the largest things in the universe. Today we explore one of the smallest and most amazing: DNA, the code of life. Inside almost every cell of your body is a set of instructions so detailed it can build an entire living being, you. Every plant, animal, fungus, and bacterium runs on the same basic code. It's one of the deepest patterns in all of nature: the same molecule of life, shared across every living thing on Earth. By the end of today, you'll understand what DNA really is. Let's begin.`,
          headline: `DNA: The Code of Life`,
          subtitle: `The instruction manual inside almost every living cell`,
          visual: `/ue-assets/cosmos/l04-welcome.webp`,
        },

        {
          id: `l04-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `What DNA Is`,
          paragraphs: [
            `DNA stands for deoxyribonucleic acid, but don't worry about the long name. What matters is what it DOES. DNA is a molecule that carries the INSTRUCTIONS for building and running a living thing. It's found inside almost every cell of every living organism on Earth. Think of it as a recipe book, or a complete instruction manual, written in a chemical code. Your DNA contains the instructions that made you grow from a single cell into the complex being you are now.`,
            `Here's something astonishing about scale. If you uncoiled all the DNA from just ONE of your cells, it would stretch about 2 meters long, taller than most adults. And you have trillions of cells. If you uncoiled ALL your DNA and laid it end to end, it would stretch billions of kilometers, far enough to reach the Sun and back many times. Yet it's packed so tightly that it fits inside microscopic cells you can't even see. Nature is an extraordinary engineer of the very small.`,
          ],
          image: `/ue-assets/cosmos/l04-s1-what-is.webp`,
          imageCaption: `DNA: a chemical instruction manual inside nearly every living cell.`,
          vocab: [
            { word: `DNA`,
              definition: `The molecule that carries the instructions for building and running a living thing. Found in almost every cell of every organism on Earth. Like a complete instruction manual written in a chemical code.`,
              audioPrompt: `DNA is the molecule that carries the instructions for building and running a living thing, {name}. It's found inside almost every cell of every living organism on Earth. Your DNA contains the instructions that made you grow from a single cell into the complex being you are now. If you uncoiled all the DNA from just one of your cells, it would stretch about 2 meters long, taller than most adults. Yet it fits inside a microscopic cell. Nature is an extraordinary engineer of the very small.` },
            { word: `cell`,
              definition: `The basic unit of life. Every living thing is made of cells — some are a single cell, others like humans are made of trillions. Each cell contains a complete copy of the organism's DNA.`,
              audioPrompt: `A cell is the basic unit of life, {name}. Every living thing is made of cells. Some organisms are a single cell. Others, like you, are made of trillions of cells. Each cell is incredibly small, too small to see with your naked eye, but contains all the machinery needed to keep itself alive. Inside almost every cell is a complete copy of your DNA, the entire instruction manual for building you. The cell is where life happens, molecule by molecule, every second.` },
          ],
        },

        {
          id: `l04-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `The Double Helix and the Code`,
          paragraphs: [
            `DNA has a famous shape: the DOUBLE HELIX, like a twisted ladder. This structure was figured out in 1953 by scientists building on the crucial work of Rosalind Franklin, whose X-ray images revealed the shape. The two sides of the ladder are connected by "rungs," and each rung is made of a pair of chemical letters called BASES. There are only FOUR bases, abbreviated A, T, G, and C. That's the entire alphabet of life: just four letters.`,
            `Here's the elegant part. The order of those four letters is the CODE. Just as 26 letters can spell every word in a language, the four DNA letters, arranged in different orders, spell out all the instructions for building any living thing. A human has about 3 BILLION of these letters in order. The bases also pair up in a fixed way: A always pairs with T, and G always pairs with C. This pairing is how DNA can copy itself perfectly when cells divide, passing the instructions to each new cell. Four letters, billions long, copied with incredible accuracy. That's the code of life.`,
          ],
          image: `/ue-assets/cosmos/l04-s2-double-helix.webp`,
          imageCaption: `A twisted ladder. Four chemical letters: A, T, G, C. Their order is the code of life.`,
          vocab: [
            { word: `double helix`,
              definition: `The twisted-ladder shape of DNA. Two strands wind around each other, connected by rungs made of paired chemical bases. Discovered in 1953, building on Rosalind Franklin's X-ray images.`,
              audioPrompt: `The double helix is the twisted-ladder shape of DNA, {name}. Two strands wind around each other like a spiral staircase, connected by rungs. Each rung is made of a pair of chemical letters called bases. The shape was figured out in 1953, building on the crucial work of Rosalind Franklin, whose X-ray images revealed the structure. This shape lets DNA copy itself. The two strands unzip down the middle, and each half becomes a template to build a perfect new copy.` },
            { word: `base pair`,
              definition: `The matched pair of chemical letters that forms each rung of the DNA double helix. A always pairs with T, and G always pairs with C — this fixed pairing is how DNA copies itself accurately.`,
              audioPrompt: `A base pair is the matched pair of chemical letters that forms each rung of the DNA double helix, {name}. There are four bases: A, T, G, and C. They pair in a fixed way: A always pairs with T, and G always pairs with C. This precise pairing is how DNA copies itself accurately. When the two strands unzip, each strand knows exactly which base goes next because of the pairing rules. Four simple letters, paired in one fixed way: that's the entire alphabet of life.` },
          ],
        },

        {
          id: `l04-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `How DNA Builds Living Things`,
          paragraphs: [
            `DNA works by giving instructions to make PROTEINS, the molecules that do almost all the work in your body. Sections of DNA called GENES each hold the instructions for a specific protein or trait. You have around 20,000 to 25,000 genes. Some genes carry instructions for eye color, some for how tall you might grow, some for how your body fights disease, and thousands of other functions. Proteins build your muscles, carry oxygen in your blood, digest your food, and do countless other jobs that keep you alive.`,
            `When a cell needs to do something, it "reads" the relevant gene and uses those instructions to build the right protein. This is happening in your body constantly, in trillions of cells, every second. What's truly amazing is that the SAME four-letter code is used by every living thing, from bacteria to whales to humans. A bacterium and a blue whale use the exact same chemical alphabet. This is powerful evidence that all life on Earth is related, descended from common ancestors billions of years ago. The unity of the code reveals the unity of life.`,
          ],
          image: `/ue-assets/cosmos/l04-s3-builds.webp`,
          imageCaption: `Genes hold instructions for proteins. Proteins do the work of keeping you alive.`,
          vocab: [
            { word: `gene`,
              definition: `A section of DNA that holds the instructions for a specific protein or trait. Humans have around 20,000 to 25,000 genes, carrying instructions for things like eye color, height, and how the body works.`,
              audioPrompt: `A gene is a section of DNA that holds the instructions for a specific protein or trait, {name}. You have around 20,000 to 25,000 genes. Some genes carry instructions for eye color, some for how tall you might grow, some for how your body fights disease, and thousands of other functions. Genes work by telling cells how to build proteins, the molecules that do almost all the work in your body. When a cell needs to do something, it reads the relevant gene and builds the right protein.` },
            { word: `protein`,
              definition: `A molecule that does most of the actual work in living cells. Proteins build muscles, carry oxygen, fight infections, digest food, and perform thousands of other jobs. DNA holds the instructions for making them.`,
              audioPrompt: `A protein is a molecule that does most of the actual work in your body, {name}. Your muscles are made of proteins. Proteins carry oxygen in your blood, fight infections, digest your food, send signals between cells, and perform thousands of other jobs. DNA holds the instructions for making proteins. When a cell needs a particular protein, it reads the relevant gene and builds it. Without proteins, your cells couldn't function and nothing in your body could work. Proteins are the molecular machines of life.` },
          ],
        },

        {
          id: `l04-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `What DNA Does and Doesn't Determine`,
          paragraphs: [
            `DNA is powerful, but it's important to understand its real role honestly. DNA gives you a starting set of instructions and tendencies, but it does NOT completely determine who you become. For many traits, your environment, choices, experiences, and effort matter just as much, sometimes more. Height is influenced by genes AND nutrition. Your interests, skills, kindness, and character are shaped enormously by your experiences and choices, not just your DNA. Scientists call this the interaction of "nature and nurture," and both matter deeply.`,
            `This is genuinely good news. You are not simply a fixed program running out your DNA. Your brain can grow and change throughout your life (something the Inner World subject explores). Your choices shape who you become. DNA deals the starting hand, but you play the game. Nova's teaching: understanding DNA helps you appreciate both the incredible instructions you inherited AND the real freedom you have to shape your own life. You're not a prisoner of your genes. You're a living being with both a remarkable inheritance and the power to grow. Both truths matter.`,
          ],
          image: `/ue-assets/cosmos/l04-s4-nature-nurture.webp`,
          imageCaption: `DNA deals the starting hand. Your choices and experiences play the game.`,
          vocab: [
            { word: `trait`,
              definition: `A characteristic of a living thing, like eye color, height, or how it behaves. Traits come from a combination of genes (DNA instructions) AND environment, experiences, and choices.`,
              audioPrompt: `A trait is a characteristic of a living thing, {name}. Traits come from a combination of genes and environment. Some traits, like eye color, are mostly determined by DNA. But many traits are shaped by both genes AND your experiences, choices, and surroundings. Height is influenced by genes and nutrition together. Your skills and character are shaped enormously by choices and experience, not just your genes. Scientists call this nature and nurture — both matter in shaping who you become.` },
            { word: `nature and nurture`,
              definition: `The interplay between genes (nature) and environment, experiences, and choices (nurture) in shaping who you are. For most traits, both matter — you're not simply running a fixed genetic program.`,
              audioPrompt: `Nature and nurture refers to the interplay between your genes and your environment in shaping who you are, {name}. Nature is what you inherit through your DNA: tendencies, physical traits, and some aspects of personality. Nurture is everything that happens after: your experiences, relationships, choices, and environment. For most traits, both matter. You're not simply running your genes like a fixed program. Your brain can grow and change throughout your life. Nature gives you a starting point. Nurture shapes where you go from there.` },
          ],
        },

        {
          id: `l04-game`,
          type: `interactive`,
          format: `investigation`,
          guideText: `Investigation time, {name}. Here are four statements about DNA. For each one, decide: TRUE ABOUT DNA (accurate science), COMMON MYTH (a popular but false belief), or PARTLY TRUE (true but with an important catch)?\n\nOne is sneakier than it looks.`,
          options: [
            { id: `true`,    label: `True About DNA`,  color: `#34D399`, description: `An accurate, well-established scientific fact about DNA.` },
            { id: `myth`,    label: `Common Myth`,     color: `#F87171`, description: `A popular belief about DNA that science has shown to be false.` },
            { id: `partly`,  label: `Partly True`,     color: `#FBBF24`, description: `Contains real truth but with an important catch or limitation.` },
          ],
          cases: [
            {
              id: `case-1`,
              caseTitle: `Statement #1`,
              clues: [
                { text: `"DNA uses only four chemical letters: A, T, G, and C."` },
                { text: `"The order of those letters spells out the instructions for life."` },
                { text: `"This same four-letter code is used by all living things."` },
              ],
              correctAnswer: `true`,
              realWorldExample: `The four-base code is one of biology's most established facts.`,
              explanation: `Completely accurate. DNA uses just four bases, their order is the code, and all known life uses the same alphabet. Pure true-about-DNA. The shared code is strong evidence that all life is related.`,
            },
            {
              id: `case-2`,
              caseTitle: `Statement #2`,
              clues: [
                { text: `"Your DNA completely determines everything about who you are."` },
                { text: `"Your personality, talents, and choices are all fixed by your genes from birth."` },
                { text: `"Your environment and experiences don't really change anything."` },
              ],
              correctAnswer: `myth`,
              realWorldExample: `"Genetic determinism" is a widespread but false belief.`,
              explanation: `This is a myth. DNA gives you tendencies and a starting point, but your environment, experiences, choices, and effort shape who you become just as much, often more. Nature AND nurture both matter. You're not just a fixed program. Pure myth.`,
            },
            {
              id: `case-3`,
              caseTitle: `Statement #3`,
              clues: [
                { text: `"DNA from one of your cells, uncoiled, would stretch about 2 meters."` },
                { text: `"Yet it fits inside a cell too small to see."` },
                { text: `"All your DNA together would reach far beyond the Earth."` },
              ],
              correctAnswer: `true`,
              realWorldExample: `The packing of DNA is a real marvel of biology.`,
              explanation: `Accurate. A single cell's DNA stretches about 2 meters, yet packs into a microscopic cell, and all your DNA combined would stretch billions of kilometers. Pure true-about-DNA. Nature is an extraordinary engineer of the very small.`,
            },
            {
              id: `case-4`,
              caseTitle: `Statement #4 — The Tricky One`,
              clues: [
                { text: `"Your height is determined by your DNA."` },
                { text: `"Tall parents often have tall children."` },
                { text: `"But a child with 'tall genes' who is severely undernourished may not grow as tall as their genes would allow."` },
              ],
              correctAnswer: `partly`,
              realWorldExample: `Height shows nature and nurture working together.`,
              explanation: `Tricky because the first part SOUNDS fully true. Genes DO strongly influence height. But it's only PARTLY true, because nutrition and environment also matter a lot. A child with "tall genes" who doesn't get enough food may not reach their genetic potential. So height is shaped by genes AND environment together. Pure partly-true. Lesson: many traits aren't purely genetic OR purely environmental. They emerge from BOTH working together. Watch out for statements that are true on the surface but leave out an important catch. Real biology is usually "both," not "either-or."`,
            },
          ],
        },

        {
          id: `l04-quiz`,
          type: `quiz`,
          guideText: `Let's see what stuck, {name}.`,
          questions: [
            { id: `l04-q1`, format: `multiple-choice`,
              question: `What does DNA do?`,
              options: [
                `It gives you energy`,
                `It carries the instructions for building and running a living thing`,
                `It digests food`,
                `It's just in your blood`,
              ],
              correctIndex: 1,
              explanation: `DNA is the instruction manual for life, found in almost every cell. It carries the instructions that built you from a single cell and that keep your body running. Every living thing on Earth has DNA.` },

            { id: `l04-q2`, format: `multiple-choice`,
              question: `What shape is DNA, and how many "letters" does it use?`,
              options: [
                `A circle, using 26 letters`,
                `A double helix (twisted ladder), using just 4 chemical letters: A, T, G, C`,
                `A square, using 10 letters`,
                `A line, using 2 letters`,
              ],
              correctIndex: 1,
              explanation: `DNA is a double helix, a twisted ladder. The rungs are made of just four chemical bases: A, T, G, and C. Their order, billions of letters long, spells out all the instructions for life.` },

            { id: `l04-q3`, format: `multiple-choice`,
              question: `What is a GENE?`,
              options: [
                `A type of cell`,
                `A section of DNA that holds instructions for a specific protein or trait`,
                `A blood type`,
                `A kind of protein`,
              ],
              correctIndex: 1,
              explanation: `A gene is a section of DNA with instructions for a specific protein or trait. Humans have around 20,000 to 25,000 genes, carrying instructions for things like eye color, height, and how the body fights disease.` },

            { id: `l04-q4`, format: `multiple-choice`,
              question: `Why is it significant that ALL living things use the SAME DNA code?`,
              options: [
                `It's a coincidence`,
                `It's strong evidence that all life on Earth is related, descended from common ancestors`,
                `It means nothing`,
                `Only animals share it`,
              ],
              correctIndex: 1,
              explanation: `From bacteria to whales to humans, all known life uses the same four-letter code. This shared code is powerful evidence that all life on Earth descended from common ancestors billions of years ago. The unity of the code reveals the unity of life.` },

            { id: `l04-q5`, format: `true-false`,
              question: `True or false: Your DNA completely determines everything about who you are, with no role for environment or choices.`,
              correctAnswer: false,
              explanation: `False. This is a common myth. DNA gives you tendencies and a starting point, but environment, experiences, choices, and effort shape who you become just as much, often more. Nature AND nurture both matter. You're not just a fixed program.` },

            { id: `l04-q6`, format: `multiple-choice`,
              question: `How do the DNA bases PAIR UP?`,
              options: [
                `Randomly`,
                `A always pairs with T, and G always pairs with C — a fixed pairing that lets DNA copy itself accurately`,
                `Any base with any base`,
                `They don't pair`,
              ],
              correctIndex: 1,
              explanation: `The bases pair in a fixed way: A with T, G with C. This precise pairing is how DNA copies itself perfectly when cells divide. The strands unzip, and each half builds a matching new copy.` },

            { id: `l04-q7`, format: `multiple-choice`,
              question: `Whose X-ray images were crucial to discovering DNA's double helix shape?`,
              options: [
                `Nobody important`,
                `Rosalind Franklin, whose X-ray images revealed the structure`,
                `Isaac Newton`,
                `Charles Darwin`,
              ],
              correctIndex: 1,
              explanation: `Rosalind Franklin's X-ray images were crucial to figuring out DNA's double helix shape in 1953. Her work was essential to one of the most important discoveries in the history of biology.` },

            { id: `l04-q8`, format: `multiple-choice`,
              question: `What's the encouraging truth about DNA and who you become?`,
              options: [
                `You're stuck with whatever your genes say`,
                `DNA deals the starting hand, but your choices, experiences, and effort help shape who you become`,
                `Genes don't matter at all`,
                `You can change your DNA by trying hard`,
              ],
              correctIndex: 1,
              explanation: `DNA gives you a starting set of instructions, but it doesn't fully determine who you become. Your brain can grow and change, and your choices shape your life. DNA deals the hand; you play the game. You have a remarkable inheritance AND real freedom to grow.` },
          ],
        },

        {
          id: `l04-reflection`,
          type: `reflection`,
          guideText: `Before we wrap, {name}, pick ONE question and actually answer it. Your response gets saved, and I'll remember it next time we talk.`,
          prompts: [
            { id: `r1`, text: `Every living thing, from bacteria to whales to you, uses the same four-letter DNA code. How does it feel to know you share a code with all life on Earth?` },
            { id: `r2`, text: `DNA deals the starting hand, but your choices play the game. What's something about yourself you've shaped through effort and choices, not just what you were born with?` },
            { id: `r3`, text: `Your DNA, uncoiled, would stretch billions of kilometers, yet packs into cells too small to see. What does that level of natural engineering make you think about?` },
            { id: `r4`, text: `If you could read the instructions for ONE of your own traits in your DNA, which trait would you be most curious about?` },
          ],
        },

        {
          id: `l04-realworld`,
          type: `real-world`,
          guideText: `Understanding DNA has transformed the modern world. Doctors use DNA to diagnose diseases and design personalized treatments. Scientists use it to develop better crops and understand ecosystems. DNA evidence solves crimes and reunites families. Genetic research is leading to cures for diseases that were once untreatable. And DNA testing lets people trace their ancestry back through generations. The four-letter code you learned about today is at the center of some of the most important science of your lifetime. Nova's note: the more we understand the code of life, the more responsibility we have to use that knowledge wisely and kindly.`,
          familyAdventure: `Family Trait Tracker. As a family, pick a few simple traits and see who has which: can you roll your tongue? Attached or detached earlobes? Which hand do you write with? Make a chart. Some traits run in families (genetic), while others (like which hand you write with) are influenced by both genes and environment. Talk about which traits seem to be inherited and which might be shaped by other things. You're doing real genetics observation.`,
          creativePrompt: {
            intro: `Imagine DNA could talk and explain its own job to a curious kid. Write what DNA would say about itself.`,
            floor: `Write at least 5 sentences. Have DNA explain what it is, what it does, and one amazing fact about itself.`,
            stretch: `Write 8 to 10 sentences. Have DNA explain its shape, its four-letter code, how it builds living things, and how it's shared by all life.`,
            open: `Write as much as you want. Write a full monologue from DNA's point of view. Have it explain its structure, its code, how it builds proteins and traits, how it copies itself, how it's shared across all living things, and the honest truth about how it works WITH environment and choices to shape who you become. Give DNA a personality.`,
            frames: [
              `Hello! I'm DNA, and I live inside almost every one of your cells.`,
              `My job is to ___.`,
              `I'm shaped like ___, and I'm written in ___.`,
              `The amazing thing about me is ___.`,
              `But here's what people get wrong about me: ___.`,
            ],
          },
        },

        {
          id: `l04-celebration`,
          type: `celebration`,
          message: `Fantastic work, {name}. You can now explain what DNA is, the double helix and four-letter code, how genes build living things through proteins, and the honest truth about nature and nurture. Next lesson: we explore how the incredible variety of life came to be, over billions of years. EVOLUTION: LIFE CHANGES OVER TIME. See you there. — Nova.`,
          badge: `dna-decoder`,
          badgeName: `DNA Decoder`,
          xpEarned: 75,
        },
      ],
    },
  ],
};

export default COSMOS_UE_L04;

// ─── Dev asset check ──────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const screens = COSMOS_UE_L04.lessons[0].screens;
  const mags = screens.filter(s => s.type === 'magazine').length;
  const game = screens.find(s => s.type === 'interactive')?.cases?.length ?? 0;
  const quiz = screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  const refl = screens.find(s => s.type === 'reflection')?.prompts?.length ?? 0;
  const totalVocab = screens.filter(s => s.type === 'magazine').reduce((sum, s) => sum + (s.vocab?.length || 0), 0);
  console.log(`[LESSON-COSMOS-UE-L04 v1] Loaded with ${mags} magazine sections, ${totalVocab} vocab terms, ${game} game cases, ${quiz} quiz Qs, ${refl} reflection prompts`);
}
