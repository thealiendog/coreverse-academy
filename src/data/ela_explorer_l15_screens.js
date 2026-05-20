// ─────────────────────────────────────────────────────────────────────────────
// ELA  |  L15 — Informational Writing: Research and Reporting
// Age band : explorers (6–8)   Guide: quill
// Standards: CCSS.ELA-LITERACY.W.2-3.2
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
          guideText: `Hello, {name}. Last lesson you wrote a STORY. Today you'll write something different — INFORMATIONAL writing. This is writing about REAL things — to teach. You become a kind of TEACHER on paper. You research. You gather facts. You explain them clearly. Adults do this every day at work. It's one of the most useful kinds of writing you can know. Let's begin.`,
          headline: `Informational Writing: Research and Reporting`,
          subtitle: `Writing about real things to teach others — facts, research, clear explanations`,
          visual: `/explorer-assets/ela/l15-welcome.webp`,
        },

        {
          id: `l15-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Become a Teacher on Paper`,
          paragraphs: [
            `When you write INFORMATIONAL pieces, you become a kind of TEACHER on paper.`,
            `You pick a topic you know about — or learn about. You gather REAL facts. Then you write to TEACH others. Maybe you teach about elephants. Or about your favorite sport. Or about volcanoes. Informational writing isn't made up like narrative. It's about REAL things. Your goal: by the end, your reader knows more than they did before. That's powerful.`,
          ],
          image: `/explorer-assets/ela/l15-s1-fact-teacher.webp`,
          imageCaption: `Informational writer = teacher on paper. Share real facts. Help readers learn.`,
          vocab: [
            { word: `informational`,  definition: `Writing about REAL things to give information. Opposite of narrative (stories).`,
              audioPrompt: `Informational, {name}, means writing about real things to give information. This is the kind of writing in textbooks. In Wikipedia articles. In magazines. In how-to guides. Informational writing teaches readers about real-world topics. It's not made up. It's based on facts.` },
            { word: `teach`,          definition: `To help someone learn. Informational writers TEACH through their writing.`,
              audioPrompt: `To teach, {name}, is to help someone learn. Informational writers teach through their writing. They take what they know — or what they've researched — and present it clearly so readers can learn. The best informational writers explain things in ways that make readers think 'oh — NOW I get it.'` },
            { word: `real`,           definition: `Actually existing or true. Informational writing is about REAL things.`,
              audioPrompt: `Real, {name}, means actually existing or true. Informational writing is about real things. Real animals. Real history. Real places. Real science. Real people. Made-up things belong in narrative writing. Informational writing sticks with what's real.` },
          ],
        },

        {
          id: `l15-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Pick a Topic You Care About`,
          paragraphs: [
            `Step ONE: pick a TOPIC. The best topic is one you already care about or want to learn about.`,
            `Topics can be HUGE or TINY. Huge: "Animals of Africa." Tiny: "What lions eat." Smaller topics are usually easier to write about. Pick something that fits your curiosity. Like cats? Write about cats. Love dinosaurs? Write about a specific dinosaur. Care about space? Write about Saturn. Care creates better writing. Always.`,
          ],
          image: `/explorer-assets/ela/l15-s2-pick-topic.webp`,
          imageCaption: `Pick a topic you care about. Smaller topics are easier. Care creates better writing.`,
          vocab: [
            { word: `topic`,          definition: `What your writing is about. Pick a TOPIC you care about.`,
              audioPrompt: `A topic, {name}, is what your writing is about. Picking a topic is the first step in informational writing. The best topics are ones you genuinely care about. Or really want to learn about. Care creates better writing. Boredom creates boring writing. Always pick a topic that excites you.` },
            { word: `care about`,     definition: `To feel interested in or attached to. Care creates BETTER writing.`,
              audioPrompt: `To care about, {name}, means to feel interested in or attached to something. Care creates better writing. When you care about your topic, your readers can tell. Your enthusiasm comes through the words.` },
            { word: `tiny topic`,     definition: `A small, focused subject. TINY topics are easier to write about than huge ones.`,
              audioPrompt: `A tiny topic, {name}, is a small, focused subject. Like 'what penguins eat' instead of 'all about penguins. ' Or 'how a seed grows' instead of 'plants. ' Tiny topics are way easier to write about than huge ones.` },
          ],
        },

        {
          id: `l15-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Research: Find Reliable Facts`,
          paragraphs: [
            `Step TWO: RESEARCH. Find FACTS about your topic from RELIABLE sources.`,
            `Reliable sources are ones you can TRUST. Library books from teachers. Kid-friendly websites your grown-ups approve. Museum websites. Encyclopedias. Not everything online is true! So always check with a trusted adult. Take NOTES as you research. Write down facts that surprise you, interest you, or seem important. Notes are gold for writers.`,
          ],
          image: `/explorer-assets/ela/l15-s3-research.webp`,
          imageCaption: `Research = find reliable facts. Trusted books. Kid-friendly websites. Always check with adults.`,
          vocab: [
            { word: `research`,       definition: `Finding facts and information. The first big step in informational writing.`,
              audioPrompt: `Research, {name}, is finding facts and information about a topic. Before you can write about something, you have to learn about it. Research is how you learn. Use books, websites, museums, experts. Take notes as you go. Researchers are detectives — looking for true, useful information.` },
            { word: `reliable`,       definition: `Trustworthy. Reliable sources are ones you can TRUST.`,
              audioPrompt: `Reliable, {name}, means trustworthy. Reliable sources are ones you can trust. Books from libraries are usually reliable. Museum websites are reliable. Articles by experts are reliable. Random websites? Maybe not. Strangers' opinions? Not facts. Always ask: where did this information come from? Can I trust it?` },
            { word: `notes`,          definition: `Short writings to remember facts. Take NOTES as you research.`,
              audioPrompt: `Notes, {name}, are short writings to remember facts. Take notes while researching. Write down the main facts. Write down surprising things. Write down anything that might go in your piece. Notes don't have to be neat or in full sentences. They're for YOU — to help you remember what you learned.` },
          ],
        },

        {
          id: `l15-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Organize Your Facts`,
          paragraphs: [
            `Step THREE: ORGANIZE. Sort your facts into groups before writing.`,
            `Say you're writing about elephants. You might have facts about: WHAT THEY EAT. HOW BIG THEY ARE. WHERE THEY LIVE. WHY THEY'RE IMPORTANT. Each group becomes a paragraph or section. Just like reading nonfiction with headings — but now you're MAKING the headings. Organizing helps readers follow your writing. Use headings if your piece is long enough.`,
          ],
          image: `/explorer-assets/ela/l15-s4-organize-facts.webp`,
          imageCaption: `Organize facts into groups. Each group = a section or paragraph. Use headings if it's long.`,
          vocab: [
            { word: `organize`,       definition: `To put things in order. Organize your FACTS into groups before writing.`,
              audioPrompt: `To organize, {name}, is to put things in order. Organize your facts into groups before you write. Sort them. Facts about food go together. Facts about size go together. Facts about habitat go together. Organized facts become organized paragraphs. Disorganized facts become disorganized writing. Organize first.` },
            { word: `group`,          definition: `A set of related things. Sort facts into GROUPS by topic.`,
              audioPrompt: `A group, {name}, is a set of related things. Sort your facts into groups by topic. All the food facts go in the food group. All the size facts in the size group. Each group becomes a paragraph or section. Grouping is how writers organize their ideas before writing.` },
            { word: `section`,        definition: `A part of a longer piece. Each group of facts often becomes its own SECTION.`,
              audioPrompt: `A section, {name}, is a part of a longer piece. In informational writing, each group of facts often becomes its own section. Sections might have headings — just like the nonfiction books you read. Section by section, you teach the reader different aspects of your topic.` },
          ],
        },

        {
          id: `l15-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Write Clearly`,
          paragraphs: [
            `Step FOUR: WRITE CLEARLY. In informational writing, CLEAR beats FANCY.`,
            `Use simple sentences. Define hard words. Give EXAMPLES. Don't try to sound smart — try to be UNDERSTOOD. The best informational writers explain complicated things in ways anyone can understand. Imagine your reader knows NOTHING about your topic — and you have to teach them. That's the mindset. Clear. Simple. Direct.`,
          ],
          image: `/explorer-assets/ela/l15-s5-clear-writing.webp`,
          imageCaption: `Clear beats fancy. Simple sentences. Define hard words. Give examples. Teach as if reader knows nothing.`,
          vocab: [
            { word: `clear`,          definition: `Easy to understand. Informational writing should be CLEAR.`,
              audioPrompt: `Clear, {name}, means easy to understand. Informational writing should be clear. Not flashy. Not fancy. Clear. The reader's job should be easy — they just have to read and understand. If your writing is confusing, readers stop reading. If your writing is clear, readers keep going. Clear writing is GOOD writing.` },
            { word: `simple`,         definition: `Not complicated. Simple sentences are easier to understand than complex ones.`,
              audioPrompt: `Simple, {name}, means not complicated. Simple sentences are easier to understand than complex ones. Especially in informational writing. Use simple sentences to share complex ideas. Big ideas, small words. That's the goal. The best teachers explain hard things simply.` },
            { word: `example`,        definition: `A specific thing that shows what you mean. EXAMPLES make writing easier to understand.`,
              audioPrompt: `An example, {name}, is a specific thing that shows what you mean. Examples make writing easier to understand. Instead of just saying 'elephants eat plants,' say 'elephants eat plants like grass, fruit, and tree bark.' The examples paint a picture. They make the fact concrete. Use examples often.` },
          ],
        },

        {
          id: `l15-mag-6`,
          type: `magazine`,
          section: 6,
          headline: `Add Visual Helpers`,
          paragraphs: [
            `Last step: ADD HELPFUL VISUALS. Pictures. Diagrams. Maps. Charts.`,
            `Just like the nonfiction books you read, your informational writing can use visuals to help readers understand. Draw a picture of the animal you wrote about. Make a simple map of where it lives. Add a chart of fun facts. Don't forget CAPTIONS — short sentences telling readers what they're looking at. Visuals + words = stronger informational writing.`,
          ],
          image: `/explorer-assets/ela/l15-s6-pictures-help.webp`,
          imageCaption: `Add visuals. Pictures. Diagrams. Maps. With captions. Visuals + words = stronger informational writing.`,
          vocab: [
            { word: `visual`,         definition: `Something you SEE. Pictures, diagrams, maps. Visuals help readers understand.`,
              audioPrompt: `Visual, {name}, means something you see. Pictures. Diagrams. Maps. Charts. Photos. All visuals. They help readers understand by SHOWING the things you're describing. Some ideas are way easier to show than to say in words. That's where visuals come in. Use them.` },
            { word: `caption`,        definition: `A short sentence under a picture. Captions tell readers what they're looking at.`,
              audioPrompt: `A caption, {name}, is a short sentence under a picture telling readers what they're looking at. We learned about captions when we read nonfiction. Now you can WRITE them. Every picture in your informational piece should have a caption. It tells readers — 'here's what this is and why it matters.'` },
            { word: `stronger`,       definition: `More powerful. Words PLUS visuals make informational writing stronger.`,
              audioPrompt: `Stronger, {name}, means more powerful. Words PLUS visuals make informational writing stronger. The reader gets the same information twice — once in words, once in image. They understand it deeper. They remember it longer. That's why nonfiction books are full of pictures. They make the writing work harder.` },
          ],
        },

        {
          id: `l15-game`,
          type: `interactive`,
          format: `drag-match`,
          guideText: `Let's see what you remember about informational writing, {name}.`,
          buckets: [
            { id: `fact`, label: `✅ Yes, that's true!`, color: `#34D399` },
            { id: `myth`, label: `❌ No way!`,         color: `#F87171` },
          ],
          items: [
            { id: `l15-g1`, image: `l15-game-1.webp`, label: `Good informational writing uses RELIABLE sources you can trust.`,
              matchPhrase: `Yes! Library books, kid-friendly websites, museum sources, experts. Not random strangers. Reliability matters when sharing facts.`,
              correctMatch: `fact` },
            { id: `l15-g2`, image: `l15-game-2.webp`, label: `Informational writing shares FACTS — not made-up things or just opinions.`,
              matchPhrase: `True! Informational writing is about REAL things. Facts. Verified information. Make-up belongs in narrative writing. Information belongs here.`,
              correctMatch: `fact` },
            { id: `l15-g3`, image: `l15-game-3.webp`, label: `It's okay to just make up "facts" in informational writing.`,
              matchPhrase: `Not at all! Informational writing must be TRUE. Made-up facts mislead readers. Research first. Verify. Then write.`,
              correctMatch: `myth` },
            { id: `l15-g4`, image: `l15-game-4.webp`, label: `"Pizza is the best food" is a scientific fact you can put in informational writing.`,
              matchPhrase: `No way! That's an OPINION, not a fact. Facts can be proven true. Opinions are what someone thinks. Informational writing uses facts.`,
              correctMatch: `myth` },
          ],
        },

        {
          id: `l15-quiz`,
          type: `quiz`,
          guideText: `Let's see how much you remember, {name}.`,
          questions: [
            { id: `l15-q1`, format: `multiple-choice`,
              question: `What does INFORMATIONAL WRITING do?`,
              options: [`Tells made-up stories`, `Shares REAL information to teach readers`, `Lists groceries`, `Has only pictures`],
              correctIndex: 1,
              explanation: `Informational writing shares real information to teach readers. About animals, history, science, anything real. It's like being a teacher on paper.` },
            { id: `l15-q2`, format: `multiple-choice`,
              question: `What's the FIRST step in informational writing?`,
              options: [`Type fast`, `Pick a topic you care about`, `Take a nap`, `Buy a fancy pencil`],
              correctIndex: 1,
              explanation: `Pick a topic you care about. Care creates better writing. Smaller, focused topics are usually easier than huge ones.` },
            { id: `l15-q3`, format: `multiple-choice`,
              question: `What is RESEARCH?`,
              options: [`Making up facts`, `Finding REAL information from reliable sources`, `Sleeping`, `Playing video games`],
              correctIndex: 1,
              explanation: `Research is finding real information from reliable sources — library books, kid-friendly websites, museums, experts. Always check sources with a trusted adult.` },
            { id: `l15-q4`, format: `true-false`,
              question: `In informational writing, CLEAR beats FANCY — keep it simple and easy to understand.`,
              correctAnswer: true,
              explanation: `True! Clear writing teaches. Fancy writing can confuse. Use simple sentences. Define hard words. Give examples. Make it understandable.` },
            { id: `l15-q5`, format: `fill-blank`,
              question: `Add helpful ___ — pictures, diagrams, maps, charts — to make your writing stronger.`,
              options: [`visuals`, `vegetables`, `volcanoes`, `videos`],
              correctIndex: 0,
              explanation: `Visuals! Pictures, diagrams, maps, charts. Visuals make information easier to understand. Don't forget captions to explain what readers are seeing.` },
            { id: `l15-q6`, format: `multiple-choice`,
              question: `What's the DIFFERENCE between a fact and an opinion?`,
              options: [`There's no difference`, `Facts can be proven true. Opinions are what someone thinks.`, `Facts are shorter`, `Opinions have more letters`],
              correctIndex: 1,
              explanation: `Facts can be proven true. Opinions are what someone thinks. "Elephants eat plants" = fact. "Elephants are the best animals" = opinion. Informational writing uses facts.` },
          ],
        },

        {
          id: `l15-realworld`,
          type: `real-world`,
          guideText: `Here's something cool, {name}. Adults do informational writing CONSTANTLY at work. Doctors write up patient notes. Scientists write research papers. Reporters write news articles. Teachers write lesson plans. Engineers write specs. Lawyers write briefs. Across almost every career, this skill matters. The writing might look different, but the basics are the same — pick a topic, research, organize, write clearly, add visuals. The skill you're learning now will work your whole life.`,
          familyAdventure: `Pick a topic together your family wants to learn about. Maybe an animal you saw. Maybe a place you want to visit. Research it together — books, kid-friendly websites. Take notes. Then write a SHORT informational piece (one paragraph) about what you learned. Read it aloud at dinner. You just did real research and informational writing.`,
          creativePrompt: `Write a SHORT informational piece about something you know really well — your pet, your favorite sport, your hometown, a hobby. Skip research since you already know it. Just do steps 4-5: ORGANIZE facts into groups, WRITE CLEARLY in simple sentences, and ADD a drawing with a caption. Share it with someone who might learn from it.`,
        },

        {
          id: `l15-celebration`,
          type: `celebration`,
          message: `Wonderful, {name}! You now know how to write INFORMATIONAL pieces. You can pick a topic, research, organize facts, write clearly, and add visuals. You're a teacher on paper. This skill works your whole life — adults use it every single day. Real research. Real teaching. Real impact. I'm proud of you. Thank you for journeying with me.`,
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
  console.log(`[LESSON-ELA-L15] Loaded: "Informational Writing: Research and Reporting" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
}
