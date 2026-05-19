// ============================================================
// COREVERSE EXPLORERS — Frontier & Philosophy · Lesson 3
// "What Is Real? More Than Meets the Eye"
// Ages 6–8 | Guide: Orion the Phoenix | ExplorerLessonPlayer format
// ============================================================

const frontier_explorer_l03_screens = {
  ageBand:   'explorers',
  subjectId: 'frontier',
  guide:     'orion',
  lessons: [
    {
      id:        'fp-6-8-03',
      title:     `What Is Real? More Than Meets the Eye`,
      duration:  12,
      xpReward:  50,
      badge:     'reality-detective',
      badgeName: `Reality Detective`,
      screens: [
        // PHASE 1 — WELCOME
        {
          type:      'welcome',
          guideText: `Hi {name}! Today: a WILD question — what is REAL? You can see this screen, feel your hands — that's real. But what about your dreams? The love you feel? Numbers? Music? Those are real too — even though you can't TOUCH them. Today we explore one of philosophy's oldest puzzles. Time to become a Reality Detective!`,
        },

        // PHASE 2 — MAGAZINE STORY (6 sections)
        {
          type:          'magazine',
          section:       1,
          totalSections: 6,
          headline:      `Things You Can Touch`,
          paragraphs: [
            `Some things are easy to call real. A chair. Your shoes. A pizza. You can SEE them, TOUCH them, sometimes EAT them.`,
            `These are called PHYSICAL things. They take up space. They have weight. If two people are in the room, they both see the same chair.`,
          ],
          image:        '/explorer-assets/frontier/l03-s1-physical.png',
          imageCaption: `Physical things — you can see, touch, and feel them`,
          vocab: [
            { word: 'real',     definition: `Something that actually exists — not made up.`,                                    audioPrompt: `Real — something that actually exists, not made up.` },
            { word: 'physical', definition: `Something you can touch, see, or measure — like a rock or a chair.`,               audioPrompt: `Physical — something you can touch, see, or measure, like a rock or a chair.` },
          ],
        },
        {
          type:          'magazine',
          section:       2,
          totalSections: 6,
          headline:      `Things You Can't Touch`,
          paragraphs: [
            `But here's the puzzle — are some things real even if you can't touch them?`,
            `Think about LOVE. You can't hold love in your hand. But it's real, right? You feel it when your family hugs you. Or NUMBERS — you can't touch the number 7, but it's real every time you count.`,
          ],
          image:        '/explorer-assets/frontier/l03-s2-invisible.png',
          imageCaption: `Love, numbers, ideas — real, but you can't touch them`,
          vocab: [
            { word: 'invisible', definition: `Something you can't see with your eyes — but it might still be there.`,            audioPrompt: `Invisible — something you can't see with your eyes, but it might still be there.` },
            { word: 'exist',     definition: `To BE — to be here in the world in some way.`,                                    audioPrompt: `Exist — to be, to be here in the world in some way.` },
          ],
        },
        {
          type:          'magazine',
          section:       3,
          totalSections: 6,
          headline:      `Are Dreams Real?`,
          paragraphs: [
            `Here's a BIG one — when you're dreaming, it feels totally real. You can fly! You can talk to dinosaurs! Your heart beats faster like it's all really happening.`,
            `Then you wake up and it's gone. Was it real? Philosophers still argue about this. Dreams are real WHILE you have them — that's one answer.`,
          ],
          image:        '/explorer-assets/frontier/l03-s3-dreams.png',
          imageCaption: `Dreams feel totally real while you're inside them`,
          vocab: [
            { word: 'dream',       definition: `The stories your brain tells while you're asleep.`,                             audioPrompt: `Dream — the stories your brain tells while you're asleep.` },
            { word: 'imagination', definition: `The pictures and ideas you create inside your own mind.`,                        audioPrompt: `Imagination — the pictures and ideas you create inside your own mind.` },
          ],
        },
        {
          type:          'magazine',
          section:       4,
          totalSections: 6,
          headline:      `Plato's Big Idea`,
          paragraphs: [
            `2,400 years ago, a philosopher named PLATO said something wild. He thought IDEAS were more real than physical stuff. He said the idea of a chair never changes — but real chairs break.`,
            `Plato believed there's a kind of "Idea World" where perfect circles and perfect truth live forever. Cool thought, right?`,
          ],
          image:        '/explorer-assets/frontier/l03-s4-plato.png',
          imageCaption: `Plato thought ideas might be MORE real than physical things`,
          vocab: [
            { word: 'Plato',  definition: `An ancient Greek philosopher who taught that ideas might be more real than physical things.`, audioPrompt: `Plato — an ancient Greek philosopher who taught that ideas might be more real than physical things.` },
            { word: 'forever', definition: `Without ever ending — lasting for all time.`,                                                audioPrompt: `Forever — without ever ending, lasting for all time.` },
          ],
        },
        {
          type:          'magazine',
          section:       5,
          totalSections: 6,
          headline:      `Different Kinds of Real`,
          paragraphs: [
            `Maybe the answer is — there are DIFFERENT KINDS of real. Physical real (a tree). Idea real (the number 7). Feeling real (love). Story real (Hogwarts in a book).`,
            `They're all real. Just real in different ways. Once you see that, the world gets BIGGER and more interesting.`,
          ],
          image:        '/explorer-assets/frontier/l03-s5-kinds-real.png',
          imageCaption: `Different kinds of real — all real, just in different ways`,
          vocab: [
            { word: 'thought', definition: `An idea moving through your mind — not physical, but still real to you.`,            audioPrompt: `Thought — an idea moving through your mind, not physical but still real to you.` },
            { word: 'feeling', definition: `An inside experience like happy, sad, scared, or excited.`,                          audioPrompt: `Feeling — an inside experience like happy, sad, scared, or excited.` },
          ],
        },
        {
          type:          'magazine',
          section:       6,
          totalSections: 6,
          headline:      `Why It Matters`,
          paragraphs: [
            `Asking "what's real?" changes how you see EVERYTHING. It makes you notice the love around you. The ideas in your head. The music that moves you.`,
            `Once you know there are different kinds of real, you stop missing the invisible ones. And those are often the BEST ones.`,
          ],
          image:        '/explorer-assets/frontier/l03-s6-noticing.png',
          imageCaption: `Noticing the invisible real things — that's the secret`,
          vocab: [
            { word: 'notice',  definition: `To pay attention to something — see it, feel it, take it in.`,                       audioPrompt: `Notice — to pay attention to something, see it, feel it, take it in.` },
            { word: 'invisible real', definition: `Real things you can't touch — like love, ideas, songs, and dreams.`,           audioPrompt: `Invisible real — real things you can't touch, like love, ideas, songs, and dreams.` },
          ],
        },

        // PHASE 3 — INTERACTIVE
        {
          type:          'interactive',
          activityType:  'drag-match',
          instruction:   `Some things are physical (you can touch). Others are invisible real. Sort them!`,
          guideText:     `Time to be a Reality Detective, {name}! Tap each thing, then decide what KIND of real it is. Both are real — but different!`,
          columnHeaders: [`The Thing`, `What Kind of Real?`],
          items: [
            { image: 'l03-game-apple.png',  label: `An apple sitting on the kitchen table.`,           correctMatch: 'physical', objectPosition: 'center 50%', matchPhrase: `Physical real! You can hold it, take a bite, share it with a friend.` },
            { image: 'l03-game-love.png',   label: `The love your family feels for you.`,             correctMatch: 'invisible', objectPosition: 'center 50%', matchPhrase: `Invisible real! You can't touch love — but it's powerfully real.` },
            { image: 'l03-game-dog.png',    label: `Your pet dog wagging its tail.`,                    correctMatch: 'physical', objectPosition: 'center 50%', matchPhrase: `Physical real! Furry, real, can be petted. Very real.` },
            { image: 'l03-game-idea.png',   label: `A brand new idea popping into your head.`,         correctMatch: 'invisible', objectPosition: 'center 50%', matchPhrase: `Invisible real! Ideas are real — but you can't pick them up.` },
          ],
          buckets: [
            { id: 'physical',  label: `🪨 Physical Real`,   color: '#34D399' },
            { id: 'invisible', label: `💫 Invisible Real`,  color: '#A78BFA' },
          ],
        },

        // PHASE 4 — MASTERY QUIZ
        {
          type:      'quiz',
          guideText: `Quiz time, {name}! Answer all 6 questions to earn your Reality Detective badge!`,
          questions: [
            { format: 'multiple-choice', question: `What does it mean for something to be "physical"?`,
              options: [`It is invisible`, `You can touch it or see it`, `It's only in your dreams`, `It does not exist`],
              correctIndex: 1 },
            { format: 'true-false', question: `Some things can be real even if you can't touch them.`,
              correctAnswer: true },
            { format: 'multiple-choice', question: `Which of these can you NOT physically touch?`,
              options: [`A pizza`, `A chair`, `Love`, `Your shoes`],
              correctIndex: 2 },
            { format: 'fill-blank', question: `Philosophers think there are different ___ of real.`,
              options: [`kinds`, `colors`, `sounds`, `shapes`],
              correctIndex: 0 },
            { format: 'multiple-choice', question: `Who was Plato?`,
              options: [`A modern singer`, `An ancient philosopher who said ideas might be more real than physical things`, `A planet`, `A book`],
              correctIndex: 1 },
            { format: 'multiple-choice', question: `If two people are in a room, what would they BOTH agree is real?`,
              options: [`Each other's thoughts`, `Each other's dreams`, `The chair they both see`, `Each other's imagination`],
              correctIndex: 2 },
          ],
        },

        // PHASE 5 — REAL-WORLD CONNECTION
        {
          type:            'real-world',
          guideText:       `Wonderful work, {name}! Now let's bring this puzzle into your real life. Reality is more interesting when you look closely!`,
          familyAdventure: `At dinner, ask your family: "What's something real that you can't touch?" Listen to every answer. Love? Friendship? Songs? Dreams? Make a list together — you'll be surprised how many invisible real things there are.`,
          creativePrompt:  `Make two drawings on one page. On one side, draw something REAL you can touch (a pet, a toy, a tree). On the other side, draw something REAL you can't touch (love, a dream, a feeling). Both are real — just different.`,
        },

        // PHASE 6 — CELEBRATION
        {
          type:      'celebration',
          xpEarned:  50,
          badge:     'reality-detective',
          badgeName: `Reality Detective`,
          message:   `Amazing, {name}! You just thought about one of philosophy's OLDEST puzzles — and you held it in your mind without getting confused. That's real thinking. The world has more than one kind of real, and you can see them all now. Orion is so proud of you.`,
        },
      ],
    },
  ],
};

// Log on module load — confirms lesson wired correctly + verifies image assets at runtime
(() => {
  const l    = frontier_explorer_l03_screens.lessons[0];
  const mags = l.screens.filter(s => s.type === 'magazine').length;
  const game = l.screens.find(s => s.type === 'interactive')?.items?.length || 0;
  const quiz = l.screens.find(s => s.type === 'quiz')?.questions?.length || 0;
  console.log(`[LESSON-FRONTIER-L03] Loaded: "What Is Real?" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
  Promise.all([
    fetch('/explorer-assets/frontier/l03-s1-physical.png',   { method: 'HEAD' }),
    fetch('/explorer-assets/frontier/l03-s2-invisible.png',  { method: 'HEAD' }),
    fetch('/explorer-assets/frontier/l03-s3-dreams.png',     { method: 'HEAD' }),
    fetch('/explorer-assets/frontier/l03-s4-plato.png',      { method: 'HEAD' }),
    fetch('/explorer-assets/frontier/l03-s5-kinds-real.png', { method: 'HEAD' }),
    fetch('/explorer-assets/frontier/l03-s6-noticing.png',   { method: 'HEAD' }),
  ]).then(([r1, r2, r3, r4, r5, r6]) => {
    console.log(`[ASSET-CHECK-FRONTIER-L03] s1: ${r1.ok}, s2: ${r2.ok}, s3: ${r3.ok}, s4: ${r4.ok}, s5: ${r5.ok}, s6: ${r6.ok}`);
  }).catch(() => {
    console.log('[ASSET-CHECK-FRONTIER-L03] Could not verify image assets — network check failed');
  });
})();

export default frontier_explorer_l03_screens;
