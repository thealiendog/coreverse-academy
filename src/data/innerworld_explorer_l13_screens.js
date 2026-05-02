// ============================================================
// COREVERSE EXPLORERS — Inner World · Lesson 13
// "What Are Values and Why Do They Matter?"
// Ages 6–8 | Guide: Sage | ExplorerLessonPlayer format
// ============================================================

const innerworld_explorer_l13_screens = {
  ageBand:   'explorers',
  subjectId: 'inner-world',
  guide:     'sage',
  lessons: [
    {
      id:        'iw-6-8-13',
      title:     `What Are Values and Why Do They Matter?`,
      duration:  14,
      xpReward:  50,
      badge:     'values-keeper',
      badgeName: `Values Keeper`,
      screens: [
        // PHASE 1 — WELCOME
        {
          type:      'welcome',
          guideText: `Hello, {name}! Today we're going to dig into something very important — the invisible compass that guides all your choices. It's called your values, and when you know what yours are, making decisions becomes so much clearer. Ready to find your compass?`,
        },

        // PHASE 2 — MAGAZINE STORY
        {
          type:          'magazine',
          section:       1,
          totalSections: 3,
          headline:      `What Are Values (and What They're Not)`,
          paragraphs: [
            `Values are the things that matter most to you — your deepest beliefs about what is good, important, and worth living for. They're not the same as goals.`,
            `Goals are things you can achieve and tick off — like winning a race or reading 10 books. Values are more like directions you walk in. You can always be more honest, more kind, more creative, no matter where you are.`,
            `There's no finish line for a value. That's what makes them so powerful — they guide every choice you make, every single day, for your whole life.`,
          ],
          image:        '/explorer-assets/inner-world/l13-values-vs-goals.png',
          imageCaption: `Values are directions, not destinations — there's no finish line`,
          vocab: [
            { word: 'values',    definition: `Your deepest beliefs about what is good, important, and worth living for — they guide your choices like an internal compass.`,              audioPrompt: `Values — your deepest beliefs about what is good, important, and worth living for. They guide your choices like an internal compass.` },
            { word: 'direction', definition: `A way you keep walking, always — unlike a goal that you finish, a direction like kindness or honesty has no end point.`,                   audioPrompt: `Direction — a way you keep walking, always. Unlike a goal that you finish, a direction like kindness or honesty has no end point.` },
          ],
        },
        {
          type:          'magazine',
          section:       2,
          totalSections: 3,
          headline:      `Your Values Are Uniquely Yours`,
          paragraphs: [
            `Common values include kindness, honesty, courage, creativity, fairness, family, learning, adventure, and respect. Everyone has a different set of core values — and that's what makes people wonderfully unique.`,
            `Knowing your values is like having a compass. When decisions are hard, your values point the way: "What would the most honest version of me do? What would the most courageous version of me do?"`,
            `Values are also different from rules. Rules are external — someone else sets them and enforces them. Values are internal — they come from inside you and guide you even when nobody is watching.`,
          ],
          image:        '/explorer-assets/inner-world/l13-unique-set.png',
          imageCaption: `Everyone's values are unique — your compass is yours alone`,
          vocab: [
            { word: 'integrity', definition: `A feeling of wholeness and self-respect that comes from living by your values — doing what's right even when no one is watching.`,           audioPrompt: `Integrity — a feeling of wholeness and self-respect that comes from living by your values, doing what's right even when no one is watching.` },
            { word: 'internal',  definition: `Coming from inside you — values are internal because they guide you from within, not because someone else told you to follow them.`,         audioPrompt: `Internal — coming from inside you. Values are internal because they guide you from within, not because someone else told you to follow them.` },
          ],
        },
        {
          type:          'magazine',
          section:       3,
          totalSections: 3,
          headline:      `Your Values Signal When You're Off Course`,
          paragraphs: [
            `Your values have a built-in navigation system. When you act against your values, something inside you signals discomfort — a quiet feeling of "that wasn't right."`,
            `This signal is important. It's not a punishment — it's information. Your values are telling you that you've drifted from the direction you want to go.`,
            `When you act in alignment with your values, you feel a quiet confidence and peace. Learning to recognise both of these signals helps you make choices you'll be proud of — choices that feel true to who you are.`,
          ],
          image:        '/explorer-assets/inner-world/l13-integrity.png',
          imageCaption: `In alignment = quiet peace. Off course = discomfort. Your values always know.`,
          vocab: [
            { word: 'alignment',         definition: `Being in line with your values — when your actions match what you believe is right, you feel a quiet confidence and peace.`,           audioPrompt: `Alignment — being in line with your values. When your actions match what you believe is right, you feel a quiet confidence and peace.` },
            { word: 'discomfort signal',  definition: `The uneasy feeling you get when you act against your values — a useful signal that you've drifted from the direction you want to go.`, audioPrompt: `Discomfort signal — the uneasy feeling you get when you act against your values, a useful signal that you've drifted from the direction you want to go.` },
          ],
        },

        // PHASE 3 — INTERACTIVE
        {
          type:          'interactive',
          activityType:  'drag-match',
          instruction:   `Tap each card, then tap whether it's a goal or a value!`,
          guideText:     `Values and goals can seem similar — but they're very different! Goals have a finish line. Values are directions you keep walking in forever. Tap each card and sort it — goal or value?`,
          columnHeaders: [`Goal or Value?`, `Which Is It?`],
          items: [
            { image: 'l13-game-winrace.png',  label: `Win the school race.`,                      correctMatch: 'goal',  objectPosition: 'center 50%', matchPhrase: `That's a goal — you achieve it, tick it off, and it's done. A related value might be "I value effort and doing my best."` },
            { image: 'l13-game-readbook.png', label: `Read 10 books this year.`,                  correctMatch: 'goal',  objectPosition: 'center 50%', matchPhrase: `Goal! Once you hit 10, it's complete. A value like "I value learning" keeps going forever — no finish line.` },
            { image: 'l13-game-bekind.png',   label: `Be kind to everyone I meet.`,               correctMatch: 'value', objectPosition: 'center 50%', matchPhrase: `That's a value! You can always be kinder — there's no finish line. Kindness is a direction you keep walking in.` },
            { image: 'l13-game-honest.png',   label: `Always be honest, even when it's hard.`,   correctMatch: 'value', objectPosition: 'center 50%', matchPhrase: `Value! Honesty doesn't have a finish line — it guides you every day, even when nobody is watching. That's integrity!` },
          ],
          buckets: [
            { id: 'goal',  label: `🎯 Goal`,  color: '#F59E0B' },
            { id: 'value', label: `🧭 Value`, color: '#34D399' },
          ],
        },

        // PHASE 4 — MASTERY QUIZ
        {
          type:      'quiz',
          guideText: `Quiz time, {name}! Let's see what you've learned about values. Answer all 6 questions to earn your Values Keeper badge!`,
          questions: [
            {
              format:       'multiple-choice',
              question:     `What is the difference between values and goals?`,
              options:      [`They are the same thing`, `Goals are achieved and ticked off; values are ongoing directions you walk in`, `Values are set by other people; goals are personal`, `Goals last forever; values change every week`],
              correctIndex: 1,
            },
            {
              format:       'multiple-choice',
              question:     `What are values?`,
              options:      [`The price of things`, `Your deepest beliefs about what is good, important, and worth living for`, `Rules set by your parents`, `Feelings you have randomly`],
              correctIndex: 1,
            },
            {
              format:        'true-false',
              question:      `Values guide you even when nobody is watching.`,
              correctAnswer: true,
            },
            {
              format:       'multiple-choice',
              question:     `What does "integrity" mean in the context of values?`,
              options:      [`A maths concept`, `A feeling of wholeness and self-respect that comes from living by your values`, `Being perfectly honest at all times`, `Following rules strictly`],
              correctIndex: 1,
            },
            {
              format:       'fill-blank',
              question:     `When you act against your values, you often feel a signal of ___ that tells you something wasn't right.`,
              options:      [`discomfort`, `excitement`, `hunger`, `confidence`],
              correctIndex: 0,
            },
            {
              format:       'multiple-choice',
              question:     `Why is knowing your values like having a compass?`,
              options:      [`Both help you find north geographically`, `Values help you navigate decisions, especially hard ones, by pointing toward what matters most to you`, `Compasses are always accurate`, `Both are made of metal`],
              correctIndex: 1,
            },
          ],
        },

        // PHASE 5 — REAL-WORLD CONNECTION
        {
          type:            'real-world',
          guideText:       `Amazing work, {name}! You've just identified the compass that will guide your whole life — your values. The more you know what matters to you, the clearer your path becomes. Try this with your family tonight!`,
          familyAdventure: `Each family member shares their top three values and one way they lived that value this week. Notice if your family shares any values — and celebrate the differences too. You might be surprised what you discover about each other.`,
          creativePrompt:  `From this list, choose your top three values: kindness, honesty, courage, creativity, fairness, family, learning, adventure, humour, respect, freedom, loyalty. Then think of one way you can live each of those values this week. Write it down.`,
        },

        // PHASE 6 — CELEBRATION
        {
          type:      'celebration',
          xpEarned:  50,
          badge:     'values-keeper',
          badgeName: `Values Keeper`,
          message:   `Amazing work, {name}! You've just identified the compass that will guide your whole life — your values. The more you know what matters to you, the clearer your path becomes. Sage is so proud of the thoughtful, values-driven person you're becoming!`,
        },
      ],
    },
  ],
};

// Log on module load — confirms lesson wired correctly + verifies image assets at runtime
(() => {
  const l    = innerworld_explorer_l13_screens.lessons[0];
  const mags = l.screens.filter(s => s.type === 'magazine').length;
  const game = l.screens.find(s => s.type === 'interactive')?.items?.length || 0;
  const quiz = l.screens.find(s => s.type === 'quiz')?.questions?.length || 0;
  console.log(`[LESSON-L13] Loaded: "${l.title}" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
  Promise.all([
    fetch('/explorer-assets/inner-world/l13-values-vs-goals.png', { method: 'HEAD' }),
    fetch('/explorer-assets/inner-world/l13-unique-set.png',      { method: 'HEAD' }),
    fetch('/explorer-assets/inner-world/l13-integrity.png',       { method: 'HEAD' }),
  ]).then(([r1, r2, r3]) => {
    console.log(`[ASSET-CHECK-L13] values-vs-goals: ${r1.ok}, unique-set: ${r2.ok}, integrity: ${r3.ok}`);
  }).catch(() => {
    console.log('[ASSET-CHECK-L13] Could not verify image assets — network check failed');
  });
})();

export default innerworld_explorer_l13_screens;
