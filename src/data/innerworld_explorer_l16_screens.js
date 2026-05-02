// ============================================================
// COREVERSE EXPLORERS — Inner World · Lesson 16
// "Setting Intentions for My Day"
// Ages 6–8 | Guide: Sage | ExplorerLessonPlayer format
// ============================================================

const innerworld_explorer_l16_screens = {
  ageBand:   'explorers',
  subjectId: 'inner-world',
  guide:     'sage',
  lessons: [
    {
      id:        'iw-6-8-16',
      title:     `Setting Intentions for My Day`,
      duration:  12,
      xpReward:  50,
      badge:     'intention-setter',
      badgeName: `Intention Setter`,
      screens: [
        // PHASE 1 — WELCOME
        {
          type:      'welcome',
          guideText: `Hello, {name}! Most people wake up and let the day happen to them. But what if you could gently shape your day before it starts? Today we're learning about intentions — and how a few quiet moments in the morning can change everything that follows. Ready to design your day from the inside out?`,
        },

        // PHASE 2 — MAGAZINE STORY
        {
          type:          'magazine',
          section:       1,
          totalSections: 3,
          headline:      `Intentions vs Goals: The Key Difference`,
          paragraphs: [
            `An intention is different from a goal. A goal is a destination — something you want to achieve or have. An intention is about how you want to be — a quality you want to bring to everything you do today.`,
            `"I intend to be patient today." "I intend to be curious." "I intend to be kind to myself when I make mistakes." These aren't things you finish — they're ways of being that you carry with you from the moment you wake up.`,
            `Most people spend their whole lives chasing goals but never stop to set an intention. Goals shape what you do. Intentions shape who you are while you're doing it. Both matter — but intentions are what make the journey feel meaningful.`,
          ],
          image:        '/explorer-assets/inner-world/l16-being-vs-achieving.png',
          imageCaption: `Goals shape what you do — intentions shape who you are while you're doing it`,
          vocab: [
            { word: 'intention', definition: `A quality you want to bring to how you are today — not something to achieve or tick off, but a way of being that guides you through the whole day.`,    audioPrompt: `Intention — a quality you want to bring to how you are today. Not something to achieve or tick off, but a way of being that guides you through the whole day.` },
            { word: 'goal',      definition: `A destination — something you want to achieve or have. Goals have a finish line; intentions are directions you keep walking in.`,                       audioPrompt: `Goal — a destination, something you want to achieve or have. Goals have a finish line; intentions are directions you keep walking in.` },
          ],
        },
        {
          type:          'magazine',
          section:       2,
          totalSections: 3,
          headline:      `How Intentions Prime the Brain`,
          paragraphs: [
            `Research in positive psychology shows that people who set clear intentions at the start of the day are more likely to act in alignment with their values and report higher wellbeing. But how does it actually work?`,
            `Intentions work by priming your brain — activating a part called the reticular activating system, or RAS. Once primed with an intention, your RAS scans the world around you all day, noticing opportunities to act on it. Set an intention to be curious and your brain will quietly flag moments of curiosity everywhere.`,
            `This isn't magic — it's neuroscience. Your brain is always filtering what to pay attention to. An intention tells it what to look for. The morning is the best time to set this filter, before the noise of the day takes over.`,
          ],
          image:        '/explorer-assets/inner-world/l16-ras-system.png',
          imageCaption: `Your RAS scans for opportunities to live your intention — all day, automatically`,
          vocab: [
            { word: 'reticular activating system (RAS)', definition: `A part of the brain that filters what you pay attention to — when primed with an intention, it scans for opportunities to act on it throughout the day.`, audioPrompt: `Reticular activating system, or RAS — a part of the brain that filters what you pay attention to. When primed with an intention, it scans for opportunities to act on it throughout the day.` },
            { word: 'priming',                           definition: `Preparing your brain to notice and seek something — setting a morning intention primes your RAS to look for ways to live that intention all day.`,          audioPrompt: `Priming — preparing your brain to notice and seek something. Setting a morning intention primes your RAS to look for ways to live that intention all day.` },
          ],
        },
        {
          type:          'magazine',
          section:       3,
          totalSections: 3,
          headline:      `Simple, Personal, and Forgiving`,
          paragraphs: [
            `The best intentions are simple and personal. "Today I choose to be present" is powerful. "Today I will be the most organised person in the world" is a goal, not an intention. Intentions don't measure you — they guide you. You can live an intention imperfectly and it still matters.`,
            `Pairing your morning intention with a moment of stillness — even just three deep breaths — makes it more likely to stick. And a brief evening reflection — "How did I live my intention today?" — closes the loop and builds the habit over time. The morning and evening bookend your day with consciousness.`,
            `Right now, try choosing one intention. Start with "Today I choose to be..." or "Today I intend to bring..." Say it out loud. Then take three slow breaths and let it settle in. Notice how it feels to start your day — or end it — with that kind of purpose.`,
          ],
          image:        '/explorer-assets/inner-world/l16-bookend-practice.png',
          imageCaption: `Morning intention + evening reflection — bookends that shape the whole day`,
          vocab: [
            { word: 'bookend practice',   definition: `Setting an intention in the morning and reflecting on it in the evening — two quiet moments that frame your whole day with consciousness and purpose.`,   audioPrompt: `Bookend practice — setting an intention in the morning and reflecting on it in the evening. Two quiet moments that frame your whole day with consciousness and purpose.` },
            { word: 'evening reflection', definition: `A brief check-in at the end of the day — asking "How did I live my intention today?" — that closes the loop and builds the habit of intentional living over time.`, audioPrompt: `Evening reflection — a brief check-in at the end of the day, asking how did I live my intention today. It closes the loop and builds the habit of intentional living over time.` },
          ],
        },

        // PHASE 3 — INTERACTIVE
        {
          type:          'interactive',
          activityType:  'drag-match',
          instruction:   `Tap each card, then tap whether it's a goal or an intention!`,
          guideText:     `Goals and intentions can look similar — but they're very different! Goals have a finish line. Intentions are about how you want to be, all day long. Tap each card and sort it: goal or intention?`,
          columnHeaders: [`Goal or Intention?`, `Which Is It?`],
          items: [
            { image: 'l16-game-winmatch.png',   label: `"Win my tennis match this weekend."`,                             correctMatch: 'goal',      objectPosition: 'center 50%', matchPhrase: `That's a goal — it has a finish line! A related intention might be: "Today I intend to play with full effort and joy, whatever the result." Same energy, very different direction.` },
            { image: 'l16-game-bekind.png',     label: `"I intend to be kind to myself when I make mistakes today."`,    correctMatch: 'intention', objectPosition: 'center 50%', matchPhrase: `Beautiful intention! It's about how you want to be — not something you tick off a list. You can bring kindness to every single moment of your day.` },
            { image: 'l16-game-readbooks.png',  label: `"Read 20 books this year."`,                                     correctMatch: 'goal',      objectPosition: 'center 50%', matchPhrase: `Goal! Once you hit 20, it's done. A related intention might be: "I intend to approach reading with curiosity and joy." No finish line — just a direction to keep walking in.` },
            { image: 'l16-game-present.png',    label: `"Today I choose to be fully present in every conversation."`,   correctMatch: 'intention', objectPosition: 'center 50%', matchPhrase: `That's a strong intention! Simple, personal, and directional. Your brain's RAS will be scanning for moments to be present all day long. Powerful!` },
          ],
          buckets: [
            { id: 'goal',      label: `🎯 Goal`,      color: '#F59E0B' },
            { id: 'intention', label: `🌅 Intention`, color: '#34D399' },
          ],
        },

        // PHASE 4 — MASTERY QUIZ
        {
          type:      'quiz',
          guideText: `Quiz time, {name}! Let's see what you've learned about setting intentions. Answer all 6 questions to earn your Intention Setter badge!`,
          questions: [
            {
              format:       'multiple-choice',
              question:     `What is the key difference between an intention and a goal?`,
              options:      [`Goals are more important than intentions`, `An intention is about how you want to be; a goal is a destination to achieve`, `Intentions are things other people set for you`, `Goals are daily; intentions are yearly`],
              correctIndex: 1,
            },
            {
              format:       'multiple-choice',
              question:     `What does the brain's reticular activating system (RAS) do when primed with an intention?`,
              options:      [`It blocks all distractions from the outside world`, `It scans for opportunities throughout the day to act on your intention`, `It controls your sleeping and waking cycles`, `It stores memories of past intentions`],
              correctIndex: 1,
            },
            {
              format:       'multiple-choice',
              question:     `Which is the better example of an intention?`,
              options:      [`"I will finish all my homework today"`, `"I intend to be patient and curious today"`, `"I'm going to win my football game"`, `"I'll be the best student in class"`],
              correctIndex: 1,
            },
            {
              format:        'true-false',
              question:      `You can live an intention imperfectly and it still matters.`,
              correctAnswer: true,
            },
            {
              format:       'fill-blank',
              question:     `Pairing your morning intention with three deep ___ makes it more likely to stick.`,
              options:      [`breaths`, `steps`, `words`, `minutes`],
              correctIndex: 0,
            },
            {
              format:       'multiple-choice',
              question:     `What does a brief evening reflection after setting a morning intention help with?`,
              options:      [`It gives you something to worry about before sleep`, `It closes the loop and builds the habit of intentional living over time`, `It's only useful for adults`, `It replaces the next morning's intention`],
              correctIndex: 1,
            },
          ],
        },

        // PHASE 5 — REAL-WORLD CONNECTION
        {
          type:            'real-world',
          guideText:       `Wonderful, {name}! You now know how to start your day with purpose — and that simple act makes everything that follows just a little more intentional. Sage loves knowing that your mornings can become a quiet, powerful launching pad for your best days. Try this with your family tonight!`,
          familyAdventure: `Tomorrow morning, each family member sets one intention for the day before breakfast. That evening, share whether you lived it — and what helped or got in the way. You might be surprised how much one small morning moment can shape an entire day.`,
          creativePrompt:  `Choose one intention for tomorrow. Start with "Tomorrow I choose to be..." or "Tomorrow I intend to bring..." Write it down somewhere you'll see it in the morning — the fridge, your mirror, or beside your bed. When you wake up, read it, take three slow breaths, and let it be your compass for the day.`,
        },

        // PHASE 6 — CELEBRATION
        {
          type:      'celebration',
          xpEarned:  50,
          badge:     'intention-setter',
          badgeName: `Intention Setter`,
          message:   `Wonderful, {name}! You now know how to start your day with purpose — and that simple act makes everything that follows just a little more intentional. Sage loves knowing that your mornings can become a quiet, powerful launching pad for your very best days!`,
        },
      ],
    },
  ],
};

// Log on module load — confirms lesson wired correctly + verifies image assets at runtime
(() => {
  const l    = innerworld_explorer_l16_screens.lessons[0];
  const mags = l.screens.filter(s => s.type === 'magazine').length;
  const game = l.screens.find(s => s.type === 'interactive')?.items?.length || 0;
  const quiz = l.screens.find(s => s.type === 'quiz')?.questions?.length || 0;
  console.log(`[LESSON-L16] Loaded: "Setting Intentions for My Day" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
  Promise.all([
    fetch('/explorer-assets/inner-world/l16-being-vs-achieving.png', { method: 'HEAD' }),
    fetch('/explorer-assets/inner-world/l16-ras-system.png',         { method: 'HEAD' }),
    fetch('/explorer-assets/inner-world/l16-bookend-practice.png',   { method: 'HEAD' }),
  ]).then(([r1, r2, r3]) => {
    console.log(`[ASSET-CHECK-L16] being-vs-achieving: ${r1.ok}, ras-system: ${r2.ok}, bookend-practice: ${r3.ok}`);
  }).catch(() => {
    console.log('[ASSET-CHECK-L16] Could not verify image assets — network check failed');
  });
})();

export default innerworld_explorer_l16_screens;
