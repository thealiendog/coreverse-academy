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

        // PHASE 2 — MAGAZINE STORY (6 sections)
        {
          type:          'magazine',
          section:       1,
          totalSections: 6,
          headline:      `What Are Values?`,
          paragraphs: [
            `Values are the things that matter most to you — your deepest beliefs about what is good, important, and worth living for.`,
            `Everyone has values, even if they've never named them. They shape every choice you make, every single day.`,
          ],
          image:        '/explorer-assets/inner-world/l13-s1-what-are-values.png',
          imageCaption: `Your values are your deepest beliefs about what is good and worth living for`,
          vocab: [
            { word: 'value',  definition: `A deep belief about what is good and important to you — what you think is worth living for.`,                                                    audioPrompt: `Value — a deep belief about what is good and important to you, what you think is worth living for.` },
            { word: 'belief', definition: `Something you think is true at the deepest level — even when no one else is watching.`,                                                          audioPrompt: `Belief — something you think is true at the deepest level, even when no one else is watching.` },
          ],
        },
        {
          type:          'magazine',
          section:       2,
          totalSections: 6,
          headline:      `Direction, Not Destination`,
          paragraphs: [
            `Values are not the same as goals. Goals are things you can achieve and tick off — like winning a race or reading 10 books.`,
            `Values are more like directions you walk in. You can always be more honest, more kind, more creative — no matter where you are.`,
          ],
          image:        '/explorer-assets/inner-world/l13-s2-direction-not-destination.png',
          imageCaption: `Goals are places to arrive. Values are directions you walk in.`,
          vocab: [
            { word: 'goal',      definition: `Something specific you want to achieve and finish — like winning a race or reading 10 books.`,                                                audioPrompt: `Goal — something specific you want to achieve and finish, like winning a race or reading 10 books.` },
            { word: 'direction', definition: `The way you're heading, not a place where you arrive. Values are directions — you can always walk further.`,                                  audioPrompt: `Direction — the way you're heading, not a place where you arrive. Values are directions. You can always walk further.` },
          ],
        },
        {
          type:          'magazine',
          section:       3,
          totalSections: 6,
          headline:      `Everyone's Values Are Different`,
          paragraphs: [
            `Common values include kindness, honesty, courage, creativity, fairness, family, learning, and respect.`,
            `Everyone has a different set of core values — and that's what makes each person wonderfully unique. There's no single "right" set of values.`,
          ],
          image:        '/explorer-assets/inner-world/l13-s3-common-values.png',
          imageCaption: `Each person's set of values is unique — there's no single right answer`,
          vocab: [
            { word: 'core values', definition: `The most important values you live by — the ones at the center of who you are. Everyone's core values are different.`,                      audioPrompt: `Core values — the most important values you live by, the ones at the center of who you are. Everyone's core values are different.` },
            { word: 'unique',      definition: `One of a kind. Your set of values makes you unique — different from everyone else in a meaningful way.`,                                    audioPrompt: `Unique — one of a kind. Your set of values makes you unique, different from everyone else in a meaningful way.` },
          ],
        },
        {
          type:          'magazine',
          section:       4,
          totalSections: 6,
          headline:      `Your Compass`,
          paragraphs: [
            `Knowing your values is like having a compass. When decisions are hard, your values point the way.`,
            `Ask yourself: "What would the most honest version of me do? What would the most kind version of me do?" Your values answer.`,
          ],
          image:        '/explorer-assets/inner-world/l13-s4-compass.png',
          imageCaption: `When choices are hard, your values are the compass that points the way`,
          vocab: [
            { word: 'compass',  definition: `A tool that always points in a direction so you don't get lost. Your values work like a compass for big life decisions.`,                      audioPrompt: `Compass — a tool that always points in a direction so you don't get lost. Your values work like a compass for big life decisions.` },
            { word: 'decision', definition: `A choice between options. Hard decisions become easier when you let your values guide the way.`,                                                audioPrompt: `Decision — a choice between options. Hard decisions become easier when you let your values guide the way.` },
          ],
        },
        {
          type:          'magazine',
          section:       5,
          totalSections: 6,
          headline:      `Values vs Rules`,
          paragraphs: [
            `Values are different from rules. Rules are external — someone else sets them and enforces them.`,
            `Values are internal — they come from inside you and guide you even when nobody else is watching.`,
          ],
          image:        '/explorer-assets/inner-world/l13-s5-values-vs-rules.png',
          imageCaption: `Rules come from outside. Values come from inside.`,
          vocab: [
            { word: 'rules',    definition: `Things someone else sets for you and makes you follow — they come from outside, like school rules or family rules.`,                           audioPrompt: `Rules — things someone else sets for you and makes you follow. They come from outside, like school rules or family rules.` },
            { word: 'internal', definition: `Coming from inside you. Your values are internal — they're yours, not given to you by someone else.`,                                          audioPrompt: `Internal — coming from inside you. Your values are internal. They're yours, not given to you by someone else.` },
          ],
        },
        {
          type:          'magazine',
          section:       6,
          totalSections: 6,
          headline:      `Your Inner Signal`,
          paragraphs: [
            `When you act against your values, something inside you signals discomfort — a quiet feeling of "that wasn't right."`,
            `When you act in line with your values, you feel a quiet confidence and peace. Both signals help you choose.`,
          ],
          image:        '/explorer-assets/inner-world/l13-s6-alignment.png',
          imageCaption: `Your inner signal tells you when you're aligned with your values — and when you've drifted`,
          vocab: [
            { word: 'discomfort', definition: `A feeling of something not being right inside you — your inner signal that you've drifted from your values.`,                                audioPrompt: `Discomfort — a feeling of something not being right inside you, your inner signal that you've drifted from your values.` },
            { word: 'alignment',  definition: `When your actions match your values. You feel calm and clear inside when you're in alignment.`,                                               audioPrompt: `Alignment — when your actions match your values. You feel calm and clear inside when you're in alignment.` },
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
    fetch('/explorer-assets/inner-world/l13-s1-what-are-values.png',         { method: 'HEAD' }),
    fetch('/explorer-assets/inner-world/l13-s2-direction-not-destination.png',{ method: 'HEAD' }),
    fetch('/explorer-assets/inner-world/l13-s3-common-values.png',           { method: 'HEAD' }),
    fetch('/explorer-assets/inner-world/l13-s4-compass.png',                 { method: 'HEAD' }),
    fetch('/explorer-assets/inner-world/l13-s5-values-vs-rules.png',         { method: 'HEAD' }),
    fetch('/explorer-assets/inner-world/l13-s6-alignment.png',               { method: 'HEAD' }),
  ]).then(([r1, r2, r3, r4, r5, r6]) => {
    console.log(`[ASSET-CHECK-L13] what-are-values: ${r1.ok}, direction-not-destination: ${r2.ok}, common-values: ${r3.ok}, compass: ${r4.ok}, values-vs-rules: ${r5.ok}, alignment: ${r6.ok}`);
  }).catch(() => {
    console.log('[ASSET-CHECK-L13] Could not verify image assets — network check failed');
  });
})();

export default innerworld_explorer_l13_screens;
