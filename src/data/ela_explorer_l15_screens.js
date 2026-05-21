// ─────────────────────────────────────────────────────────────────────────────
// ELA  |  L15 — Informational Writing: Research and Reporting
// Age band : explorers (6–8)   Guide: quill
// Standards: CCSS.ELA-LITERACY.W.2-3.2
// REWRITE v2 (May 2026): age 6-8 accessibility, FACT/OPINION identification
// game, CCSS linking words (because, and, also) taught explicitly,
// two-tier creative prompt with sentence frames
// ─────────────────────────────────────────────────────────────────────────────

const ELA_L15 = {
  ageBand:   `explorers`,
  subjectId: `ela`,
  guide:     `quill`,

  lessons: [
    {
      id:        `ela-6-8-15`,
      title:     `Informational Writing: Research and Reporting`,
      duration:  12,
      xpReward:  50,
      badge:     `info-writer-explorer`,
      badgeName: `Info Writer Explorer`,

      screens: [

        {
          id: `l15-welcome`,
          type: `welcome`,
          guideText: `Welcome back, {name}! Last lesson you wrote a STORY. Today you write something different — INFORMATIONAL writing. This is writing about REAL things — to TEACH! You become a teacher on paper. Adults use this every day at work. Let's go!`,
          headline: `Informational Writing: Research and Reporting`,
          subtitle: `Writing about REAL things to teach others`,
          visual: `/explorer-assets/ela/l15-welcome.webp`,
        },

        {
          id: `l15-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Become a Teacher on Paper`,
          paragraphs: [
            `When you write INFORMATIONAL pieces, you become a TEACHER on paper!`,
            `You pick a topic you know about. You gather REAL facts. Then you write to TEACH others. Maybe you teach about elephants. Or volcanoes. Or your favorite sport. The goal? By the end, your reader knows more than they did before!`,
          ],
          image: `/explorer-assets/ela/l15-s1-fact-teacher.webp`,
          imageCaption: `Informational writer = teacher on paper. Share real facts. Help readers learn.`,
          vocab: [
            { word: `informational`, definition: `Writing about REAL things to give information.`,
              audioPrompt: `Informational writing is writing about real things to give information. Like textbooks. Like nonfiction books. It teaches readers about real topics. Not made up — REAL!` },
            { word: `teach`,         definition: `To help someone learn. Informational writers TEACH through writing.`,
              audioPrompt: `To teach means to help someone learn. Informational writers teach through their writing. They explain real things clearly so readers can learn!` },
            { word: `real`,          definition: `Actually true. Informational writing is about REAL things.`,
              audioPrompt: `Real means actually true. Informational writing is about real things. Real animals. Real history. Real science. Not made-up — REAL!` },
          ],
        },

        {
          id: `l15-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Step 1: Pick a Topic`,
          paragraphs: [
            `Step ONE: pick a TOPIC! The best topic is one you already love or want to learn about.`,
            `Topics can be BIG or SMALL. Big: "All animals." Small: "What sharks eat." Smaller topics are usually EASIER to write about. Pick something that gets you excited! Love cats? Write about cats. Love dinosaurs? Write about one dinosaur. Care creates better writing!`,
          ],
          image: `/explorer-assets/ela/l15-s2-pick-topic.webp`,
          imageCaption: `Pick a topic you care about. Smaller topics are easier!`,
          vocab: [
            { word: `topic`,      definition: `What your writing is about.`,
              audioPrompt: `A topic is what your writing is about. Picking a good topic is the first step. The best topics are ones you care about. Care makes writing better!` },
            { word: `care about`, definition: `To feel excited about. Care creates BETTER writing.`,
              audioPrompt: `To care about means to feel excited about something. Care creates better writing! When you care about your topic, readers can tell. Your excitement shows!` },
            { word: `small topic`, definition: `A focused subject. Small topics are EASIER to write about.`,
              audioPrompt: `A small topic is a focused subject. Like "what penguins eat" instead of "all penguins." Small topics are way easier to write about than big ones!` },
          ],
        },

        {
          id: `l15-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Step 2: Research`,
          paragraphs: [
            `Step TWO: RESEARCH. Find FACTS from RELIABLE sources!`,
            `Reliable sources are ones you can TRUST. Library books. Kid-friendly websites your grown-up approves. Museum websites. Encyclopedias. Not everything online is true — always check with a grown-up! Take NOTES as you research. Notes are GOLD for writers!`,
          ],
          image: `/explorer-assets/ela/l15-s3-research.webp`,
          imageCaption: `Research = find reliable facts. Trusted books. Approved websites. Take notes!`,
          vocab: [
            { word: `research`, definition: `Finding facts and information.`,
              audioPrompt: `Research is finding facts and information about a topic. Use books, websites, museums. Take notes as you learn. Researchers are like detectives — finding the truth!` },
            { word: `reliable`, definition: `Trustworthy. Reliable sources are ones you can TRUST.`,
              audioPrompt: `Reliable means trustworthy. Reliable sources are ones you can trust. Library books are reliable. Random websites? Maybe not. Always ask a grown-up!` },
            { word: `notes`,    definition: `Short writings to remember facts.`,
              audioPrompt: `Notes are short writings to remember facts. Take notes while researching. Write down the main facts. Notes don't have to be neat — just useful!` },
          ],
        },

        {
          id: `l15-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Step 3: Sort Your Facts`,
          paragraphs: [
            `Step THREE: ORGANIZE your facts into groups!`,
            `Say you're writing about elephants. You might have facts about: WHAT THEY EAT. HOW BIG THEY ARE. WHERE THEY LIVE. Each group becomes a paragraph! Sort facts that go together. This makes your writing clear and easy to follow.`,
          ],
          image: `/explorer-assets/ela/l15-s4-organize-facts.webp`,
          imageCaption: `Sort facts into groups. Each group becomes a paragraph!`,
          vocab: [
            { word: `organize`, definition: `To put things in order. Organize facts into groups.`,
              audioPrompt: `To organize means to put things in order. Organize your facts into groups before writing. Food facts together. Size facts together. Organized facts = clear writing!` },
            { word: `group`,    definition: `A set of related things. Sort facts into GROUPS by topic.`,
              audioPrompt: `A group is a set of related things. Sort facts into groups by topic. All food facts in one group. All size facts in another. Each group becomes a paragraph!` },
            { word: `sort`,     definition: `To separate things into groups. SORT facts that belong together.`,
              audioPrompt: `To sort means to separate things into groups. Sort your facts. Put similar facts together. Sorting helps you see what belongs in each paragraph!` },
          ],
        },

        {
          id: `l15-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Step 4: Write Clearly`,
          paragraphs: [
            `Step FOUR: WRITE CLEARLY. In informational writing, CLEAR is better than FANCY!`,
            `Use simple sentences. Give EXAMPLES. Connect ideas with LINKING WORDS like ALSO, BECAUSE, FIRST, and NEXT. Example: "Elephants eat plants. ALSO they drink lots of water. They use their trunks BECAUSE their mouths are too small." Linking words help your writing FLOW!`,
          ],
          image: `/explorer-assets/ela/l15-s5-clear-writing.webp`,
          imageCaption: `Clear beats fancy. Simple sentences + linking words = clear writing.`,
          vocab: [
            { word: `clear`,         definition: `Easy to understand.`,
              audioPrompt: `Clear means easy to understand. Informational writing should be clear. Not flashy. Not fancy. Just clear so readers can learn!` },
            { word: `linking words`, definition: `Words that connect ideas. Like ALSO, BECAUSE, FIRST, and NEXT.`,
              audioPrompt: `Linking words connect your ideas. Words like ALSO, BECAUSE, FIRST, and NEXT help your sentences flow. They make your writing easy to follow!` },
            { word: `example`,       definition: `A specific thing that shows what you mean.`,
              audioPrompt: `An example is a specific thing that shows what you mean. Instead of just saying "elephants eat plants," say "elephants eat grass, fruit, and tree bark." Examples paint a picture!` },
          ],
        },

        {
          id: `l15-mag-6`,
          type: `magazine`,
          section: 6,
          headline: `Step 5: Add Pictures`,
          paragraphs: [
            `Last step: ADD HELPFUL VISUALS! Pictures. Maps. Diagrams.`,
            `Just like the nonfiction books you read, your informational writing can use pictures to HELP readers understand. Draw the animal you wrote about. Make a map of where it lives. And don't forget CAPTIONS — short sentences telling readers what they see!`,
          ],
          image: `/explorer-assets/ela/l15-s6-pictures-help.webp`,
          imageCaption: `Add visuals with captions. Pictures + words = stronger writing!`,
          vocab: [
            { word: `visual`,  definition: `Something you SEE. Pictures, maps, diagrams.`,
              audioPrompt: `A visual is something you see. Pictures, maps, diagrams, charts. Visuals help readers understand by SHOWING what you describe!` },
            { word: `caption`, definition: `A short sentence under a picture.`,
              audioPrompt: `A caption is a short sentence under a picture. It tells readers what they see. Every picture in your writing should have a caption!` },
            { word: `stronger`, definition: `More powerful. Words + pictures = STRONGER writing.`,
              audioPrompt: `Stronger means more powerful. Words PLUS pictures make informational writing stronger. The reader learns twice — once from words, once from the picture!` },
          ],
        },

        {
          id: `l15-game`,
          type: `interactive`,
          format: `drag-match`,
          guideText: `Let's try it, {name}! Informational writing uses FACTS, not OPINIONS. Drag each statement into FACT or OPINION!`,
          buckets: [
            { id: `fact`,    label: `📚 FACT — can be proven`,      color: `#34D399` },
            { id: `opinion`, label: `💭 OPINION — what someone thinks`, color: `#A78BFA` },
          ],
          items: [
            { id: `l15-g1`, image: `l15-game-1.webp`, label: `Elephants have trunks.`,
              matchPhrase: `Yes! That's a FACT. We can prove it by looking at an elephant. Facts can be checked!`,
              correctMatch: `fact` },
            { id: `l15-g2`, image: `l15-game-2.webp`, label: `Pizza is the best food in the world.`,
              matchPhrase: `Great! That's an OPINION. It's what someone THINKS. Others might think tacos are better!`,
              correctMatch: `opinion` },
            { id: `l15-g3`, image: `l15-game-3.webp`, label: `There are 24 hours in a day.`,
              matchPhrase: `Yes! That's a FACT. We can prove it with a clock. Everyone agrees!`,
              correctMatch: `fact` },
            { id: `l15-g4`, image: `l15-game-4.webp`, label: `Cats are cuter than dogs.`,
              matchPhrase: `Perfect! That's an OPINION. Some people prefer dogs. It's what someone thinks!`,
              correctMatch: `opinion` },
          ],
        },

        {
          id: `l15-quiz`,
          type: `quiz`,
          guideText: `Let's see what you remember, {name}!`,
          questions: [
            { id: `l15-q1`, format: `multiple-choice`,
              question: `What does INFORMATIONAL WRITING do?`,
              options: [`Tells made-up stories`, `Shares REAL information to teach readers`, `Lists groceries`, `Has only pictures`],
              correctIndex: 1,
              explanation: `Informational writing shares real information to teach readers. About animals, history, science — anything real!` },
            { id: `l15-q2`, format: `multiple-choice`,
              question: `What's the FIRST step of informational writing?`,
              options: [`Take a nap`, `Pick a topic you care about`, `Type fast`, `Buy a fancy pencil`],
              correctIndex: 1,
              explanation: `Pick a topic you care about! Care creates better writing. Smaller topics are easier than big ones.` },
            { id: `l15-q3`, format: `multiple-choice`,
              question: `What is RESEARCH?`,
              options: [`Making up facts`, `Finding REAL information from reliable sources`, `Sleeping`, `Playing games`],
              correctIndex: 1,
              explanation: `Research is finding real information from reliable sources — library books, kid-friendly websites, museums. Always check with a grown-up!` },
            { id: `l15-q4`, format: `true-false`,
              question: `In informational writing, CLEAR is better than FANCY.`,
              correctAnswer: true,
              explanation: `True! Clear writing teaches. Fancy writing can confuse. Use simple sentences, examples, and linking words!` },
            { id: `l15-q5`, format: `multiple-choice`,
              question: `Which words are LINKING WORDS that connect ideas?`,
              options: [`Red, blue, green`, `Big, small, tall`, `Also, because, first, next`, `Cat, dog, bird`],
              correctIndex: 2,
              explanation: `Also, because, first, next! Linking words connect ideas and help your writing flow.` },
            { id: `l15-q6`, format: `multiple-choice`,
              question: `What's the DIFFERENCE between a fact and an opinion?`,
              options: [`There's no difference`, `Facts can be proven true. Opinions are what someone thinks.`, `Facts are shorter`, `Opinions have more letters`],
              correctIndex: 1,
              explanation: `Facts can be proven true. Opinions are what someone thinks. "Elephants are gray" = fact. "Elephants are the best" = opinion!` },
          ],
        },

        {
          id: `l15-realworld`,
          type: `real-world`,
          guideText: `Here's something cool, {name}! Adults use informational writing EVERY DAY at work! Doctors write patient notes. Scientists write research papers. Reporters write news articles. Teachers write lesson plans. The skill you're learning now will work your WHOLE life!`,
          familyAdventure: `Pick a topic together your family wants to learn about! Maybe an animal you saw. Maybe a place to visit. Research it together — books, kid-friendly websites. Take notes. Then write ONE paragraph about what you learned. Read it at dinner!`,
          creativePrompt: `Write a SHORT informational piece about something you know well — your pet, a hobby, your hometown.

JUST STARTING? Write 3 sentences. ONE topic sentence + ONE fact + ONE conclusion.

READY FOR MORE? Write 5 sentences with 3 facts. Use linking words ALSO and BECAUSE!

Sentence starters: "___ is interesting because ___." "First, ___." "Also, ___." "That's why ___ is amazing!"

Add a drawing with a caption. Share what you taught!`,
        },

        {
          id: `l15-celebration`,
          type: `celebration`,
          message: `Wonderful, {name}! You're a TEACHER on paper now! You can pick a topic, research, organize facts, write clearly, and add pictures. You know the difference between FACTS and OPINIONS. You know linking words help your writing flow. Adults use this skill every day. Quill is so proud!`,
          badge: `info-writer-explorer`,
          badgeName: `Info Writer Explorer`,
          xpEarned: 50,
        },

      ],
    },
  ],
};

export default ELA_L15;

// ─── Dev asset check ─────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const mags  = ELA_L15.lessons[0].screens.filter(s => s.type === 'magazine').length;
  const game  = ELA_L15.lessons[0].screens.find(s => s.type === 'interactive')?.items?.length ?? 0;
  const quiz  = ELA_L15.lessons[0].screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  console.log(`[LESSON-ELA-L15] Loaded: "Informational Writing" with ${mags} magazine sections, ${game} game items, ${quiz} quiz questions`);
}
