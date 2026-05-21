// ─────────────────────────────────────────────────────────────────────────────
// ELA  |  L14 — Narrative Writing: Telling Your Story
// Age band : explorers (6–8)   Guide: quill
// Standards: CCSS.ELA-LITERACY.W.2-3.3
// REWRITE v2 (May 2026): age 6-8 accessibility, BEGINNING/MIDDLE/END
// identification game, CCSS temporal words (first/next/then/finally),
// two-tier creative prompt with sentence frames
// ─────────────────────────────────────────────────────────────────────────────

const ELA_L14 = {
  ageBand:   `explorers`,
  subjectId: `ela`,
  guide:     `quill`,

  lessons: [
    {
      id:        `ela-6-8-14`,
      title:     `Narrative Writing: Telling Your Story`,
      duration:  12,
      xpReward:  50,
      badge:     `narrative-explorer`,
      badgeName: `Narrative Explorer`,

      screens: [

        {
          id: `l14-welcome`,
          type: `welcome`,
          guideText: `Welcome back, {name}! Last lesson you wrote your first paragraph. Today you build something even more fun — a STORY! Story writing has a special name: NARRATIVE writing. YOU pick the characters. YOU pick what happens. Ready? Let's go!`,
          headline: `Narrative Writing: Telling Your Story`,
          subtitle: `How to write your own story, step by step`,
          visual: `/explorer-assets/ela/l14-welcome.webp`,
        },

        {
          id: `l14-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `You as Storyteller`,
          paragraphs: [
            `Humans have told STORIES for thousands of years. Around campfires. In caves. In books. In movies.`,
            `Today, YOU become a storyteller! Narrative writing is just a fancy way to say STORY writing. YOU make the characters. YOU pick where they live. YOU decide what happens. The story is yours!`,
          ],
          image: `/explorer-assets/ela/l14-s1-storyteller.webp`,
          imageCaption: `You are a storyteller. Time to write your own story.`,
          vocab: [
            { word: `narrative`,   definition: `Story writing. Narrative = story.`,
              audioPrompt: `Narrative is a fancy word that just means STORY. Narrative writing is story writing. When a teacher asks for a narrative, they want a story!` },
            { word: `storyteller`, definition: `A person who tells stories. That's YOU now.`,
              audioPrompt: `A storyteller is a person who tells stories. Humans have told stories forever — around campfires, in books, in movies. Now you're a storyteller too!` },
            { word: `author`,      definition: `The writer of a book or story. YOU are the author of your story.`,
              audioPrompt: `An author is the writer of a book or story. YOU are the author of your story. You pick everything that happens!` },
          ],
        },

        {
          id: `l14-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `The Four Building Blocks`,
          paragraphs: [
            `Every story has FOUR building blocks: CHARACTER, SETTING, CONFLICT, and PLOT.`,
            `CHARACTER is WHO the story is about. SETTING is WHERE and WHEN it happens. CONFLICT is the PROBLEM. PLOT is WHAT happens. Before you write, plan all four! Even great authors plan first.`,
          ],
          image: `/explorer-assets/ela/l14-s2-four-pieces.webp`,
          imageCaption: `Plan the four blocks: who, where, what's wrong, what happens.`,
          vocab: [
            { word: `character`, definition: `The person or animal in the story. WHO the story is about.`,
              audioPrompt: `A character is the person or animal in the story. The character is WHO the story is about. Like a girl named Maya or a brave dog!` },
            { word: `setting`,   definition: `Where AND when the story happens.`,
              audioPrompt: `Setting is where and when the story happens. Like a forest at night, or a school on Monday. Setting tells the reader where they are!` },
            { word: `plan`,      definition: `To think ahead before writing. Plan your story first.`,
              audioPrompt: `To plan means to think ahead before writing. Plan your story first. Jot down your character, setting, and what happens. Planning makes writing easier!` },
          ],
        },

        {
          id: `l14-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Part 1: BEGINNING`,
          paragraphs: [
            `Every story has a BEGINNING. The first few sentences do THREE things.`,
            `First, introduce your CHARACTER. Next, show the SETTING. Then hint at the PROBLEM. Example: "Lily had just turned eight. It was a sunny day at the lake. She lost her favorite ring." Reader knows the character, the setting, AND the problem!`,
          ],
          image: `/explorer-assets/ela/l14-s3-beginning.webp`,
          imageCaption: `Beginning — introduce character, show setting, hint at problem.`,
          vocab: [
            { word: `beginning`, definition: `The start of a story. Introduces character, setting, and problem.`,
              audioPrompt: `The beginning is the start of a story. It does three jobs. It introduces the character. It shows the setting. It hints at the problem!` },
            { word: `introduce`, definition: `To bring something into the story for the first time.`,
              audioPrompt: `To introduce means to bring something into the story for the first time. The beginning introduces the character — like saying hello to a new friend!` },
            { word: `hook`,      definition: `To grab the reader's attention. A good beginning hooks the reader.`,
              audioPrompt: `To hook means to grab the reader's attention. Like a fishing hook catches a fish! A good beginning hooks the reader so they want more.` },
          ],
        },

        {
          id: `l14-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Part 2: MIDDLE`,
          paragraphs: [
            `The MIDDLE is where the ACTION happens! Your character faces the problem and tries things.`,
            `Use TEMPORAL WORDS to show the order. FIRST, your character tries one thing. NEXT, they try another. THEN, something surprising happens. FINALLY, they get close. Temporal words help your reader follow the story!`,
          ],
          image: `/explorer-assets/ela/l14-s4-middle.webp`,
          imageCaption: `Middle — the action. Use FIRST, NEXT, THEN, FINALLY to show what happens.`,
          vocab: [
            { word: `middle`,         definition: `The center of a story. Where most of the action happens.`,
              audioPrompt: `The middle is the center of a story. Where most of the action happens. The character tries things, faces problems, and keeps going!` },
            { word: `temporal words`, definition: `Words that show ORDER. Like FIRST, NEXT, THEN, and FINALLY.`,
              audioPrompt: `Temporal words show order in a story. Words like FIRST, NEXT, THEN, and FINALLY help your reader follow what happens. They make the story flow!` },
            { word: `action`,         definition: `Things happening. The middle is full of action.`,
              audioPrompt: `Action means things happening. The middle is full of action! The character searches, tries, runs, asks. Action keeps the story moving!` },
          ],
        },

        {
          id: `l14-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Part 3: ENDING`,
          paragraphs: [
            `The ENDING wraps everything up. It RESOLVES the problem.`,
            `Maybe the character solves it. Maybe they learn something new. Either way, the ending should feel SATISFYING. Example: "Lily found her ring under the picnic blanket! She held it tight as the sun set. Next time, she'd keep it on her finger." Story done!`,
          ],
          image: `/explorer-assets/ela/l14-s5-ending.webp`,
          imageCaption: `Ending — resolve the problem. Show how the character changed.`,
          vocab: [
            { word: `ending`,     definition: `The finish of a story. Resolves the problem.`,
              audioPrompt: `The ending is the finish of a story. It resolves the problem from the beginning. A good ending feels complete — like the story really ended!` },
            { word: `resolve`,    definition: `To solve or finish. The ending RESOLVES the problem.`,
              audioPrompt: `To resolve means to find an answer or solution. The ending resolves the problem from the beginning. Sometimes fully. Sometimes partly. But always finished!` },
            { word: `satisfying`, definition: `Feeling complete and right. Good endings are satisfying.`,
              audioPrompt: `Satisfying means feeling complete and right. Good endings are satisfying. The reader closes the book feeling good — even if the story is sad.` },
          ],
        },

        {
          id: `l14-mag-6`,
          type: `magazine`,
          section: 6,
          headline: `Your Writer's Voice`,
          paragraphs: [
            `Every writer has a special VOICE. Your voice is the way YOUR writing sounds.`,
            `Maybe your voice is funny. Maybe your voice loves describing food. Maybe your voice loves spooky settings. Your voice comes from being YOU on the page. Don't try to write like someone else. Write like you!`,
          ],
          image: `/explorer-assets/ela/l14-s6-your-voice.webp`,
          imageCaption: `Your writer's voice. Don't sound like someone else — sound like YOU.`,
          vocab: [
            { word: `voice`,    definition: `The way your writing sounds. Every writer has a unique voice.`,
              audioPrompt: `Voice in writing is the way YOUR writing sounds. Different from anyone else. Your humor, your favorite words, your style. That's your voice!` },
            { word: `unique`,   definition: `One of a kind. Your voice is unique — nobody else has it.`,
              audioPrompt: `Unique means one of a kind. Your voice is unique. Nobody writes the way YOU write. That's what makes your stories worth telling!` },
            { word: `yourself`, definition: `Be who you are. Writing well means being YOURSELF on the page.`,
              audioPrompt: `Yourself means be who you are. Writing well means being YOURSELF on the page. Not pretending. Just real. Just you!` },
          ],
        },

        {
          id: `l14-game`,
          type: `interactive`,
          format: `drag-match`,
          guideText: `Let's try it, {name}! Here are 4 sentences from a story about a missing hamster. Drag each one to its correct part — beginning, middle, or ending!`,
          buckets: [
            { id: `beginning`, label: `📖 BEGINNING`, color: `#FBBF24` },
            { id: `middle`,    label: `⚡ MIDDLE`,    color: `#34D399` },
            { id: `ending`,    label: `🏁 ENDING`,    color: `#A78BFA` },
          ],
          items: [
            { id: `l14-g1`, image: `l14-game-1.webp`, label: `Maya woke up and saw her hamster cage was empty.`,
              matchPhrase: `Yes! This is the BEGINNING. It introduces Maya and shows the problem — her hamster is missing!`,
              correctMatch: `beginning` },
            { id: `l14-g2`, image: `l14-game-2.webp`, label: `First, she looked under her bed. Then she checked the closet.`,
              matchPhrase: `Great! This is the MIDDLE. Maya tries different places — that's the action!`,
              correctMatch: `middle` },
            { id: `l14-g3`, image: `l14-game-3.webp`, label: `Next, she heard a tiny squeak from behind the bookshelf!`,
              matchPhrase: `Yes! Also the MIDDLE. The action keeps going. Maya gets a clue!`,
              correctMatch: `middle` },
            { id: `l14-g4`, image: `l14-game-4.webp`, label: `Finally, she found her hamster safe and gave him a hug.`,
              matchPhrase: `Perfect! This is the ENDING. The problem is resolved. Maya feels happy!`,
              correctMatch: `ending` },
          ],
        },

        {
          id: `l14-quiz`,
          type: `quiz`,
          guideText: `Let's see what you remember, {name}!`,
          questions: [
            { id: `l14-q1`, format: `multiple-choice`,
              question: `What is NARRATIVE WRITING?`,
              options: [`A math problem`, `Story writing`, `A grocery list`, `An opinion`],
              correctIndex: 1,
              explanation: `Narrative writing is story writing. The fancy word just means STORY!` },
            { id: `l14-q2`, format: `multiple-choice`,
              question: `What are the FOUR building blocks of a story?`,
              options: [`Title, author, pages, cover`, `Character, setting, conflict, plot`, `Pencils, paper, eraser, glue`, `Math, reading, art, science`],
              correctIndex: 1,
              explanation: `Character (who), setting (where/when), conflict (problem), plot (what happens). Every story has these four blocks!` },
            { id: `l14-q3`, format: `multiple-choice`,
              question: `What are the THREE main parts of a story?`,
              options: [`Beginning, middle, ending`, `Topic, details, conclusion`, `Title, picture, words`, `Hello, action, goodbye`],
              correctIndex: 0,
              explanation: `Beginning (set up), middle (action), ending (resolve). Every story has this shape!` },
            { id: `l14-q4`, format: `true-false`,
              question: `Good writers PLAN their stories before they start writing.`,
              correctAnswer: true,
              explanation: `True! Even great authors plan first. Jot down your character, setting, problem, and what happens. Planning makes writing easier!` },
            { id: `l14-q5`, format: `multiple-choice`,
              question: `Which words are TEMPORAL WORDS that show ORDER in a story?`,
              options: [`Red, blue, green`, `Cat, dog, bird`, `First, next, then, finally`, `Big, small, tall`],
              correctIndex: 2,
              explanation: `First, next, then, finally! Temporal words show the order of events. They help your reader follow what happens.` },
            { id: `l14-q6`, format: `fill-blank`,
              question: `Every writer has a unique ___ — the way their writing sounds.`,
              options: [`voice`, `pencil`, `chair`, `lunch`],
              correctIndex: 0,
              explanation: `Voice! Your writer's voice is unique. Don't try to sound like someone else. Sound like YOU!` },
          ],
        },

        {
          id: `l14-realworld`,
          type: `real-world`,
          guideText: `Here's something cool, {name}! Famous authors started writing stories as KIDS! Roald Dahl wrote stories at age 7. J.K. Rowling started at age 6. Many adult authors keep their childhood stories forever — they're treasures! The story you write today is the first of many!`,
          familyAdventure: `Tell a STORY together at dinner! Each person adds ONE sentence. First person introduces a character. Next person shows the setting. Then someone adds a problem. Keep going through the middle. End with how it's resolved. Notice how the story grows!`,
          creativePrompt: `Write your VERY OWN story! Pick something fun — a lost pet, a magic backpack, a mystery in your backyard.

JUST STARTING? Write 3 sentences. ONE for the beginning, ONE for the middle, ONE for the ending.

READY FOR MORE? Write 6-8 sentences with details!

Use these starters: "One day, ___ was ___." "First, ___." "Next, ___." "Finally, ___."

Read your story out loud. You wrote a STORY!`,
        },

        {
          id: `l14-celebration`,
          type: `celebration`,
          message: `Wonderful, {name}! You're a STORYTELLER now! You know the four building blocks. You know to plan first. You know about beginnings, middles, and endings. You know temporal words like FIRST, NEXT, THEN, FINALLY. You know your VOICE matters. Quill is so proud!`,
          badge: `narrative-explorer`,
          badgeName: `Narrative Explorer`,
          xpEarned: 50,
        },

      ],
    },
  ],
};

export default ELA_L14;

// ─── Dev asset check ─────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const mags  = ELA_L14.lessons[0].screens.filter(s => s.type === 'magazine').length;
  const game  = ELA_L14.lessons[0].screens.find(s => s.type === 'interactive')?.items?.length ?? 0;
  const quiz  = ELA_L14.lessons[0].screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  console.log(`[LESSON-ELA-L14] Loaded: "Narrative Writing" with ${mags} magazine sections, ${game} game items, ${quiz} quiz questions`);
}
