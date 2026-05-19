// ============================================================
// COREVERSE EXPLORERS — Frontier & Philosophy · Lesson 1
// "What Is Philosophy? The Art of Asking Big Questions"
// Ages 6–8 | Guide: Orion the Phoenix | ExplorerLessonPlayer format
// ============================================================

const frontier_explorer_l01_screens = {
  ageBand:   'explorers',
  subjectId: 'frontier',
  guide:     'orion',
  lessons: [
    {
      id:        'fp-6-8-01',
      title:     `What Is Philosophy? The Art of Asking Big Questions`,
      duration:  12,
      xpReward:  50,
      badge:     'wonder-spark',
      badgeName: `Wonder Spark`,
      screens: [
        // PHASE 1 — WELCOME
        {
          type:      'welcome',
          guideText: `Hi {name}! I'm Orion the Phoenix, and I rise from QUESTIONS. Here's the biggest secret in the world — adults pretend they know everything, but the BEST questions are the ones nobody can fully answer. Why is there anything at all? What's fair? What's real? Today, we start asking the questions philosophers have wondered about for thousands of years. Are you ready to become a Wonder Spark?`,
        },

        // PHASE 2 — MAGAZINE STORY (6 sections)
        {
          type:          'magazine',
          section:       1,
          totalSections: 6,
          headline:      `Loving Wisdom`,
          paragraphs: [
            `The word PHILOSOPHY comes from two old Greek words: "philo" means love, and "sophia" means wisdom. So philosophy means LOVING WISDOM.`,
            `It's not about knowing all the answers. It's about loving to ASK questions — and thinking carefully about them.`,
          ],
          image:        '/explorer-assets/frontier/l01-s1-loving-wisdom.png',
          imageCaption: `Philosophy — loving wisdom, asking big questions`,
          vocab: [
            { word: 'philosophy', definition: `Loving wisdom — asking and thinking about life's biggest questions.`,                  audioPrompt: `Philosophy — loving wisdom, asking and thinking about life's biggest questions.` },
            { word: 'wisdom',     definition: `Not just knowing facts — but understanding what matters and how to live well.`,        audioPrompt: `Wisdom — not just knowing facts, but understanding what matters and how to live well.` },
          ],
        },
        {
          type:          'magazine',
          section:       2,
          totalSections: 6,
          headline:      `What's a Philosopher?`,
          paragraphs: [
            `A PHILOSOPHER is someone who loves to think about life's big questions. They look closely at the world and ask "Why?"`,
            `Philosophers don't always agree — and that's the magic. They share ideas, listen to each other, and find truth together.`,
          ],
          image:        '/explorer-assets/frontier/l01-s2-philosopher.png',
          imageCaption: `A philosopher — someone who asks big questions and thinks carefully`,
          vocab: [
            { word: 'philosopher', definition: `Someone who asks big questions and thinks carefully about life.`,                    audioPrompt: `Philosopher — someone who asks big questions and thinks carefully about life.` },
            { word: 'idea',        definition: `A thought in your mind — something you imagine, wonder about, or believe.`,          audioPrompt: `Idea — a thought in your mind, something you imagine, wonder about, or believe.` },
          ],
        },
        {
          type:          'magazine',
          section:       3,
          totalSections: 6,
          headline:      `Kids Are Natural Philosophers`,
          paragraphs: [
            `Here's the truth — kids are the BEST philosophers. You ask "Why?" way more than grown-ups. That's not annoying — that's brilliant.`,
            `Every philosopher in history started by being curious like YOU. Wondering is the first step. You're already doing it.`,
          ],
          image:        '/explorer-assets/frontier/l01-s3-kids-asking.png',
          imageCaption: `Kids are natural philosophers — wondering is your superpower`,
          vocab: [
            { word: 'curious', definition: `Wanting to learn more about something — full of questions.`,                              audioPrompt: `Curious — wanting to learn more about something, full of questions.` },
            { word: 'wonder',  definition: `The feeling of being amazed — when something makes you stop and say "whoa."`,             audioPrompt: `Wonder — the feeling of being amazed, when something makes you stop and say whoa.` },
          ],
        },
        {
          type:          'magazine',
          section:       4,
          totalSections: 6,
          headline:      `Socrates and the Ancient Askers`,
          paragraphs: [
            `2,500 years ago in Greece, a philosopher named SOCRATES walked around asking people big questions. He didn't tell them answers — he just kept asking "Why?" until they really thought about it.`,
            `He's been called one of the wisest people ever — and his trick was simple. He never stopped wondering.`,
          ],
          image:        '/explorer-assets/frontier/l01-s4-socrates.png',
          imageCaption: `Socrates — a philosopher from 2,500 years ago who asked the same questions you ask today`,
          vocab: [
            { word: 'Socrates', definition: `A famous philosopher from ancient Greece who taught people to ask "why" about everything.`, audioPrompt: `Socrates — a famous philosopher from ancient Greece who taught people to ask why about everything.` },
            { word: 'ancient',  definition: `From very, very long ago — thousands of years in the past.`,                                audioPrompt: `Ancient — from very long ago, thousands of years in the past.` },
          ],
        },
        {
          type:          'magazine',
          section:       5,
          totalSections: 6,
          headline:      `Big Questions`,
          paragraphs: [
            `Philosophers ask BIG QUESTIONS — the kind that don't have one easy answer. "What is real?" "What is fair?" "What's a good friend?"`,
            `Small questions have simple answers (like "What time is it?"). Big questions are puzzles you can think about forever — and that's what makes them amazing.`,
          ],
          image:        '/explorer-assets/frontier/l01-s5-big-questions.png',
          imageCaption: `Big questions — the puzzles philosophers think about forever`,
          vocab: [
            { word: 'big question', definition: `A question that doesn't have one easy answer — the kind worth thinking about deeply.`, audioPrompt: `Big question — a question that doesn't have one easy answer, the kind worth thinking about deeply.` },
            { word: 'puzzle',       definition: `A tricky problem worth thinking about carefully — fun to figure out.`,                  audioPrompt: `Puzzle — a tricky problem worth thinking about carefully, fun to figure out.` },
          ],
        },
        {
          type:          'magazine',
          section:       6,
          totalSections: 6,
          headline:      `Thinking Together`,
          paragraphs: [
            `Philosophy isn't a contest. There are NO WRONG ANSWERS when you're truly wondering. Your ideas matter. Other people's ideas matter too.`,
            `The best philosophers share their thinking with others — listen, agree, disagree, and find truth together. That's the secret.`,
          ],
          image:        '/explorer-assets/frontier/l01-s6-thinking-together.png',
          imageCaption: `Thinking together — how philosophers find truth`,
          vocab: [
            { word: 'truth',             definition: `What is actually real — what's true no matter what anyone says.`,                  audioPrompt: `Truth — what is actually real, what's true no matter what anyone says.` },
            { word: 'thinking together', definition: `When two or more people share ideas, listen, and learn from each other.`,           audioPrompt: `Thinking together — when two or more people share ideas, listen, and learn from each other.` },
          ],
        },

        // PHASE 3 — INTERACTIVE
        {
          type:          'interactive',
          activityType:  'drag-match',
          instruction:   `Some questions are BIG (no easy answer). Others are SMALL (easy to answer). Sort them!`,
          guideText:     `Let's practice spotting Big Questions, {name}! Tap a question, then tap what kind it is. Big Questions are the ones philosophers love most.`,
          columnHeaders: [`The Question`, `Big or Small?`],
          items: [
            { image: 'l01-game-fairness.png', label: `"What is fairness?" — different kids think different things are fair.`,    correctMatch: 'big',   objectPosition: 'center 50%', matchPhrase: `Big Question! Nobody fully agrees what fair means — philosophers have been thinking about this for thousands of years.` },
            { image: 'l01-game-math.png',     label: `"What's 2 + 2?" — there's one correct answer.`,                            correctMatch: 'small', objectPosition: 'center 50%', matchPhrase: `Small Question! Math has clear answers. Philosophy loves the questions where the answer isn't so clear.` },
            { image: 'l01-game-dreams.png',   label: `"Are dreams real?" — people argue about this still.`,                      correctMatch: 'big',   objectPosition: 'center 50%', matchPhrase: `Big Question! What "real" means is one of philosophy's oldest puzzles — and there's no easy answer.` },
            { image: 'l01-game-clock.png',    label: `"What time is dinner?" — someone can just tell you.`,                      correctMatch: 'small', objectPosition: 'center 50%', matchPhrase: `Small Question! When something has one quick answer, it's not really a philosophy question — it's just a fact.` },
          ],
          buckets: [
            { id: 'big',   label: `🌌 Big Question`,   color: '#A855F7' },
            { id: 'small', label: `📋 Small Question`, color: '#60A5FA' },
          ],
        },

        // PHASE 4 — MASTERY QUIZ
        {
          type:      'quiz',
          guideText: `Quiz time, {name}! Let's see what you've learned about philosophy. Answer all 6 questions to earn your Wonder Spark badge!`,
          questions: [
            { format: 'multiple-choice', question: `What does the word "philosophy" mean?`,
              options: [`Boring school subject`, `Loving wisdom`, `A type of food`, `Counting to a hundred`],
              correctIndex: 1 },
            { format: 'multiple-choice', question: `Who was Socrates?`,
              options: [`A modern scientist`, `A famous philosopher from ancient Greece`, `A type of question`, `A planet`],
              correctIndex: 1 },
            { format: 'true-false', question: `There are no wrong answers in philosophy — just ideas to share.`,
              correctAnswer: true },
            { format: 'fill-blank', question: `A "Big Question" is one that doesn't have one easy ___.`,
              options: [`answer`, `color`, `word`, `shape`],
              correctIndex: 0 },
            { format: 'multiple-choice', question: `What do philosophers do?`,
              options: [`Sleep all day`, `Memorize facts`, `Ask big questions and think carefully`, `Run away from puzzles`],
              correctIndex: 2 },
            { format: 'multiple-choice', question: `Why are kids natural philosophers?`,
              options: [`They're loud`, `They're small`, `They ask "Why?" more than grown-ups`, `They can't read yet`],
              correctIndex: 2 },
          ],
        },

        // PHASE 5 — REAL-WORLD CONNECTION
        {
          type:            'real-world',
          guideText:       `You did it, {name}! You're officially a Wonder Spark — a baby philosopher. Now let's bring philosophy into your real life. Try this with your family tonight!`,
          familyAdventure: `At dinner tonight, ask everyone in your family: "What's a question you've always wondered about?" Listen to every answer. No "right" answers allowed — just curiosity. You might be surprised what your family has been wondering!`,
          creativePrompt:  `Get a piece of paper. Write down THREE big questions you wonder about. They can be silly, serious, or strange. Put it somewhere you'll see — those questions are now YOUR philosophy journal. Add more questions whenever you think of them.`,
        },

        // PHASE 6 — CELEBRATION
        {
          type:      'celebration',
          xpEarned:  50,
          badge:     'wonder-spark',
          badgeName: `Wonder Spark`,
          message:   `Brilliant work, {name}! You learned that philosophy isn't a scary school subject — it's about LOVING WISDOM. You learned about Socrates, big questions, and that kids are natural philosophers. Carry your wonder with you everywhere. Orion is so proud to think with you.`,
        },
      ],
    },
  ],
};

// Log on module load — confirms lesson wired correctly + verifies image assets at runtime
(() => {
  const l    = frontier_explorer_l01_screens.lessons[0];
  const mags = l.screens.filter(s => s.type === 'magazine').length;
  const game = l.screens.find(s => s.type === 'interactive')?.items?.length || 0;
  const quiz = l.screens.find(s => s.type === 'quiz')?.questions?.length || 0;
  console.log(`[LESSON-FRONTIER-L01] Loaded: "What Is Philosophy?" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
  Promise.all([
    fetch('/explorer-assets/frontier/l01-s1-loving-wisdom.png',     { method: 'HEAD' }),
    fetch('/explorer-assets/frontier/l01-s2-philosopher.png',       { method: 'HEAD' }),
    fetch('/explorer-assets/frontier/l01-s3-kids-asking.png',       { method: 'HEAD' }),
    fetch('/explorer-assets/frontier/l01-s4-socrates.png',          { method: 'HEAD' }),
    fetch('/explorer-assets/frontier/l01-s5-big-questions.png',     { method: 'HEAD' }),
    fetch('/explorer-assets/frontier/l01-s6-thinking-together.png', { method: 'HEAD' }),
  ]).then(([r1, r2, r3, r4, r5, r6]) => {
    console.log(`[ASSET-CHECK-FRONTIER-L01] s1: ${r1.ok}, s2: ${r2.ok}, s3: ${r3.ok}, s4: ${r4.ok}, s5: ${r5.ok}, s6: ${r6.ok}`);
  }).catch(() => {
    console.log('[ASSET-CHECK-FRONTIER-L01] Could not verify image assets — network check failed');
  });
})();

export default frontier_explorer_l01_screens;
