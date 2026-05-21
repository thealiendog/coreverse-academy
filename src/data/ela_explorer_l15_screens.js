// ─────────────────────────────────────────────────────────────────────────────
// ELA  |  L15 — Informational Writing: Teach What You Know
// Age band : explorers (6–8)   Guide: quill
// Standards: CCSS.ELA-LITERACY.W.2-3.2 · L.2-3.3 (linking/transitional words)
// Rewrite spec: Grade 1 accessible · identification game · CCSS linking words
//               · two-tier creative prompt with sentence frames
// ─────────────────────────────────────────────────────────────────────────────

const ELA_L15 = {
  ageBand:   `explorers`,
  subjectId: `ela`,
  guide:     `quill`,

  lessons: [
    {
      id:        `ela-6-8-15`,
      title:     `Informational Writing: Teach What You Know`,
      duration:  12,
      xpReward:  50,
      badge:     `info-writer-explorer`,
      badgeName: `Info Writer Explorer`,

      screens: [

        {
          id: `l15-welcome`,
          type: `welcome`,
          guideText: `Hi, {name}! Last lesson you wrote a story. Today you will write something different — INFORMATIONAL writing. This is writing about REAL things. Your job is to TEACH your reader. You gather facts. You explain them clearly. Grown-ups do this every day at work. Let's learn how!`,
          headline: `Informational Writing: Teach What You Know`,
          subtitle: `Writing about real things to share facts and help others learn`,
          visual: `/explorer-assets/ela/l15-welcome.webp`,
        },

        {
          id: `l15-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `You Are a Teacher on Paper`,
          paragraphs: [
            `When you write INFORMATIONAL pieces, you become a kind of TEACHER on paper. You pick a real topic. You gather real FACTS. Then you write to help others learn.`,
            `Maybe you teach about elephants. Or your favorite sport. Or how volcanoes work. Informational writing is not made up like a story. It is about REAL things. Your goal: when your reader finishes, they know more than before!`,
          ],
          image: `/explorer-assets/ela/l15-s1-fact-teacher.webp`,
          imageCaption: `Informational writer = teacher on paper. Share real facts. Help readers learn.`,
          vocab: [
            { word: `informational`,
              definition: `Writing about real things to share facts. Not a story — real information.`,
              audioPrompt: `Informational means writing about real things. It is the kind of writing in textbooks and encyclopedias. Informational writing shares facts about the real world.` },
            { word: `facts`,
              definition: `True pieces of information. Informational writing is full of FACTS.`,
              audioPrompt: `Facts are true pieces of information. "Dogs have four legs." That is a fact. Informational writing uses facts to teach readers about real topics.` },
            { word: `teach`,
              definition: `To help someone learn. Informational writers TEACH through their writing.`,
              audioPrompt: `To teach means to help someone learn. Informational writers teach readers through their writing. The best informational writing makes a reader say, "Oh — now I get it!"` },
          ],
        },

        {
          id: `l15-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Pick a Small Topic`,
          paragraphs: [
            `Step ONE: pick a TOPIC. The best topic is something you already know about — or really want to learn.`,
            `Topics can be big or TINY. Tiny is better for beginners! "Animals" is too big. "What penguins eat" is just right. "Sports" is too big. "How to kick a soccer ball" is perfect. A small, focused topic is much easier to write about. Pick something that excites you!`,
          ],
          image: `/explorer-assets/ela/l15-s2-pick-topic.webp`,
          imageCaption: `Pick a small, focused topic. Smaller topics are much easier to write about.`,
          vocab: [
            { word: `topic`,
              definition: `What your writing is about. Pick a TOPIC you care about.`,
              audioPrompt: `A topic is what your writing is about. Pick a topic you care about or want to learn. When you care about your topic, your readers can tell. Care creates better writing.` },
            { word: `focused`,
              definition: `Small and specific. A FOCUSED topic is easier to write about.`,
              audioPrompt: `Focused means small and specific. A focused topic is easier to write about than a huge one. "What penguins eat" is more focused than "all about penguins."` },
            { word: `excites`,
              definition: `Makes you feel eager and interested. Pick a topic that EXCITES you.`,
              audioPrompt: `Excites means makes you feel eager and interested. Pick a topic that excites you. When you are excited about your topic, your writing will be exciting too.` },
          ],
        },

        {
          id: `l15-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Facts vs. Made-Up`,
          paragraphs: [
            `Here is a very important rule for informational writing: use FACTS — not made-up things.`,
            `A FACT is something that is true. "Sharks are fish." That is a fact. A made-up thing is something from your imagination. "Sharks can talk." That is not a fact! In informational writing, every sentence must be TRUE. If you are not sure about something, check a book or ask a trusted adult.`,
          ],
          image: `/explorer-assets/ela/l15-s3-research.webp`,
          imageCaption: `Facts = true. Made-up = not for informational writing. Always check your facts!`,
          vocab: [
            { word: `true`,
              definition: `Something that really happened or really exists. Facts are TRUE.`,
              audioPrompt: `True means something that really happened or really exists. "Cats have four legs" is true. Informational writing must be true. Never make up facts.` },
            { word: `made-up`,
              definition: `Something from imagination — not real. Made-up things do NOT belong in informational writing.`,
              audioPrompt: `Made-up means from imagination — not real. Made-up things belong in story writing, not informational writing. Always stick to what is true and real.` },
            { word: `reliable`,
              definition: `Can be trusted. Use RELIABLE sources — library books, trusted websites.`,
              audioPrompt: `Reliable means can be trusted. Use reliable sources like library books and trusted websites. Always ask a grown-up to help you check if a source is reliable.` },
          ],
        },

        {
          id: `l15-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Sort Your Facts into Groups`,
          paragraphs: [
            `Step TWO: SORT your facts into groups. Facts that go together get their own section.`,
            `Say you're writing about elephants. You might have facts about WHAT THEY EAT, HOW BIG THEY ARE, and WHERE THEY LIVE. Each group becomes its own paragraph. Just like the nonfiction books you read have headings — now YOU make the headings. Sorting makes your writing easy to follow.`,
          ],
          image: `/explorer-assets/ela/l15-s4-organize-facts.webp`,
          imageCaption: `Sort facts into groups. Each group = one paragraph. Use headings to label each group.`,
          vocab: [
            { word: `sort`,
              definition: `To put things in groups. SORT your facts before you write.`,
              audioPrompt: `To sort means to put things in groups. Sort your facts before you write. Facts about food go in one group. Facts about size go in another. Sorting makes writing organized and easy to follow.` },
            { word: `section`,
              definition: `A part of a longer piece. Each group of facts becomes its own SECTION.`,
              audioPrompt: `A section is a part of a longer piece. Each group of facts becomes its own section. Sections often have headings — just like the nonfiction books you read in school.` },
            { word: `heading`,
              definition: `A title for a section. HEADINGS tell readers what each part is about.`,
              audioPrompt: `A heading is a title for a section. Headings tell readers what each part is about. When you use headings, readers can quickly find the information they want.` },
          ],
        },

        {
          id: `l15-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Linking Words: Connect Your Facts`,
          paragraphs: [
            `Good informational writers use LINKING WORDS to connect their facts and make their writing flow smoothly.`,
            `Here are the big INFORMATIONAL LINKING WORDS: ALSO… ANOTHER… FOR EXAMPLE… BECAUSE… IN ADDITION. "Elephants are very large. ALSO, they have great memories. FOR EXAMPLE, they remember friends they haven't seen in years." These words connect your facts so your writing doesn't feel like a list. They make it feel like a real piece of writing!`,
          ],
          image: `/explorer-assets/ela/l15-s5-clear-writing.webp`,
          imageCaption: `Informational linking words: Also, Another, For example, Because, In addition.`,
          vocab: [
            { word: `also`,
              definition: `In addition to what was just said. ALSO connects related facts.`,
              audioPrompt: `Also means in addition to what was just said. "Penguins cannot fly. Also, they are excellent swimmers." Also connects related facts and keeps writing flowing smoothly.` },
            { word: `for example`,
              definition: `Shows a specific case. FOR EXAMPLE makes facts easier to understand.`,
              audioPrompt: `For example introduces a specific case. "Elephants eat plants. For example, they eat grass, fruit, and tree bark." For example makes facts easier to picture and understand.` },
            { word: `in addition`,
              definition: `Another way to say ALSO. IN ADDITION connects extra facts.`,
              audioPrompt: `In addition means another way to say also. "Dogs are loyal pets. In addition, they help people feel less lonely." In addition connects extra facts to what you already said.` },
          ],
        },

        {
          id: `l15-mag-6`,
          type: `magazine`,
          section: 6,
          headline: `Write Clear Sentences`,
          paragraphs: [
            `Step THREE: WRITE CLEARLY. In informational writing, CLEAR beats FANCY.`,
            `Use short sentences. Use words your reader knows. Give EXAMPLES to explain hard ideas. Don't try to sound smart — try to be UNDERSTOOD. The best informational writers explain hard things in simple ways. Imagine your reader knows nothing about your topic — and it is YOUR job to teach them!`,
          ],
          image: `/explorer-assets/ela/l15-s6-pictures-help.webp`,
          imageCaption: `Clear beats fancy. Short sentences. Simple words. Examples. Teach as if your reader knows nothing.`,
          vocab: [
            { word: `clear`,
              definition: `Easy to understand. Informational writing must be CLEAR.`,
              audioPrompt: `Clear means easy to understand. Informational writing must be clear. If your writing is confusing, readers stop reading. If it is clear, they keep going and learn more.` },
            { word: `simple`,
              definition: `Not complicated. Use SIMPLE words and sentences in informational writing.`,
              audioPrompt: `Simple means not complicated. Use simple words and sentences. Big ideas can be explained in small words. The best teachers make hard things simple.` },
            { word: `example`,
              definition: `A specific case that helps explain an idea. EXAMPLES make writing easier to understand.`,
              audioPrompt: `An example is a specific case that helps explain an idea. Instead of saying "birds are fast," say "some birds, like the peregrine falcon, can fly over 200 miles per hour." Examples make facts real.` },
          ],
        },

        {
          id: `l15-game`,
          type: `interactive`,
          format: `drag-match`,
          guideText: `Let's play! Is each sentence a FACT — or is it MADE UP? Drag it to the right bucket, {name}!`,
          buckets: [
            { id: `fact`,   label: `✅ FACT — Goes in informational writing`, color: `#34D399` },
            { id: `madeup`, label: `❌ MADE UP — Not a fact`,                 color: `#F87171` },
          ],
          items: [
            { id: `l15-g1`, image: `l15-game-1.webp`,
              label: `Sharks are fish.`,
              matchPhrase: `Fact! Sharks really are fish. That is a true, checkable fact that belongs in informational writing.`,
              correctMatch: `fact` },
            { id: `l15-g2`, image: `l15-game-2.webp`,
              label: `Sharks can talk to mermaids.`,
              matchPhrase: `Made up! Sharks cannot talk to mermaids. That is a fun idea for a story — but not a fact for informational writing.`,
              correctMatch: `madeup` },
            { id: `l15-g3`, image: `l15-game-3.webp`,
              label: `Elephants are the largest land animals on Earth.`,
              matchPhrase: `Fact! Elephants really are the largest land animals on Earth. True information belongs in informational writing.`,
              correctMatch: `fact` },
            { id: `l15-g4`, image: `l15-game-4.webp`,
              label: `Elephants have magic trunks that grant wishes.`,
              matchPhrase: `Made up! Elephant trunks are amazing — but they do not grant wishes. Stick to real facts in informational writing.`,
              correctMatch: `madeup` },
          ],
        },

        {
          id: `l15-quiz`,
          type: `quiz`,
          guideText: `Quiz time, {name}! Show me what you learned about informational writing!`,
          questions: [
            { id: `l15-q1`, format: `multiple-choice`,
              question: `What does INFORMATIONAL WRITING do?`,
              options: [`Tells made-up stories`, `Shares real facts to teach readers`, `Lists groceries`, `Has only pictures`],
              correctIndex: 1,
              explanation: `Informational writing shares real facts to teach readers. It is about real animals, places, people, and events — not made-up things.` },
            { id: `l15-q2`, format: `multiple-choice`,
              question: `Which makes a BETTER topic for informational writing?`,
              options: [`All about animals (too big!)`, `What penguins eat (just right!)`, `My favorite dream`, `A story about a dragon`],
              correctIndex: 1,
              explanation: `"What penguins eat" is a small, focused topic — much easier to write about than a huge topic like "all about animals."` },
            { id: `l15-q3`, format: `true-false`,
              question: `In informational writing, you can make up facts if you can't remember the real ones.`,
              correctAnswer: false,
              explanation: `False! Never make up facts. Informational writing must be true. If you are not sure, check a book or ask a trusted adult.` },
            { id: `l15-q4`, format: `multiple-choice`,
              question: `Which is an INFORMATIONAL linking word?`,
              options: [`Also`, `Pizza`, `Run`, `Purple`],
              correctIndex: 0,
              explanation: `Also is a linking word! It connects related facts. Other informational linking words include For example, Another, Because, and In addition.` },
            { id: `l15-q5`, format: `fill-blank`,
              question: `In informational writing, ___ beats fancy. Keep it simple!`,
              options: [`clear`, `long`, `hard`, `fancy`],
              correctIndex: 0,
              explanation: `Clear beats fancy! Simple sentences and clear words help readers understand. The best informational writers explain hard things in simple ways.` },
            { id: `l15-q6`, format: `multiple-choice`,
              question: `What does a HEADING do in informational writing?`,
              options: [`Tells readers what each section is about`, `Is the same as the title`, `Goes at the very end`, `Is a type of drawing`],
              correctIndex: 0,
              explanation: `A heading tells readers what each section is about. Headings make informational writing organized and easy to navigate.` },
          ],
        },

        {
          id: `l15-realworld`,
          type: `real-world`,
          guideText: `{name}, here is something cool. Adults do informational writing every single day. Doctors write patient notes. Scientists write research papers. Reporters write news articles. Teachers write lesson plans. Engineers write instructions. Across almost every job, this skill matters. The writing might look different — but the basics are the same: pick a topic, gather facts, sort them, write clearly. The skill you are learning right now will work your whole life!`,
          familyAdventure: `Pick a topic your family wants to learn about — maybe an animal you saw, a place you want to visit, or something from the news. Look it up together in a book or trusted website. Write down three FACTS you learned. Then share them at the dinner table. You just did real informational writing!`,
          creativePrompt: `**Tier 1 — Sentence Frames:** Fill in the blanks to write about your topic:\n"[Topic] is ___. Also, ___. For example, ___. In addition, ___. That is why ___ is so interesting!"\n\n**Tier 2 — Write Freely:** Pick a topic you know well — a pet, a sport, your hometown, a hobby. Write 4–6 sentences. Sort your facts into two groups and give each group a heading. Use at least two linking words: Also, For example, Another, or In addition.`,
        },

        {
          id: `l15-celebration`,
          type: `celebration`,
          message: `Wonderful work, {name}! You know what informational writing is. You know to pick a focused topic. You know the difference between facts and made-up things. You know how to sort facts into sections. And you know the linking words ALSO, FOR EXAMPLE, ANOTHER, and IN ADDITION. You are a teacher on paper now. I am so proud of you!`,
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
  console.log(`[LESSON-ELA-L15] Loaded: "Informational Writing: Teach What You Know" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
}
