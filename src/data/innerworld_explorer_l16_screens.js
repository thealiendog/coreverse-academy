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

        // PHASE 2 — MAGAZINE STORY (6 sections)
        {
          type:          'magazine',
          section:       1,
          totalSections: 6,
          headline:      `Intention vs Goal`,
          paragraphs: [
            `An intention is different from a goal. A goal is a destination — something you want to achieve or have.`,
            `An intention is about HOW you want to be — a quality you want to bring to everything you do today.`,
          ],
          image:        '/explorer-assets/inner-world/l16-s1-intention-vs-goal.png',
          imageCaption: `A goal is where you're going. An intention is how you walk.`,
          vocab: [
            { word: 'intention', definition: `A quality you want to bring to your day — how you want to be, not what you want to finish.`, audioPrompt: `Intention — a quality you want to bring to your day, how you want to be, not what you want to finish.` },
            { word: 'goal',      definition: `A specific destination you want to reach — like winning a race or finishing a book. Goals are different from intentions.`, audioPrompt: `Goal — a specific destination you want to reach, like winning a race or finishing a book. Goals are different from intentions.` },
          ],
        },
        {
          type:          'magazine',
          section:       2,
          totalSections: 6,
          headline:      `How You Want to Be`,
          paragraphs: [
            `"I intend to be patient today." "I intend to be curious." "I intend to be kind to myself when I make mistakes."`,
            `These aren't things you finish — they're ways of being that you carry with you from the moment you wake up.`,
          ],
          image:        '/explorer-assets/inner-world/l16-s2-ways-of-being.png',
          imageCaption: `Intentions describe ways of being — qualities you carry with you all day`,
          vocab: [
            { word: 'quality', definition: `A way of being — like patience, kindness, or curiosity. Intentions are about which qualities you want to bring to your day.`, audioPrompt: `Quality — a way of being, like patience, kindness, or curiosity. Intentions are about which qualities you want to bring to your day.` },
            { word: 'being',   definition: `The state of how you are inside — separate from what you're doing on the outside. Intentions shape your being.`, audioPrompt: `Being — the state of how you are inside, separate from what you're doing on the outside. Intentions shape your being.` },
          ],
        },
        {
          type:          'magazine',
          section:       3,
          totalSections: 6,
          headline:      `The Science of Intentions`,
          paragraphs: [
            `Research shows people who set clear intentions at the start of the day act more in line with their values and feel happier overall.`,
            `Intentions work by activating a special part of your brain that scans the world for what you've told it to notice.`,
          ],
          image:        '/explorer-assets/inner-world/l16-s3-brain-scan.png',
          imageCaption: `Intentions activate the part of your brain that scans for what you've told it to notice`,
          vocab: [
            { word: 'research', definition: `Studies done by scientists to find out what's true. Research shows intentions actually work — they're not just a nice idea.`, audioPrompt: `Research — studies done by scientists to find out what's true. Research shows intentions actually work. They're not just a nice idea.` },
            { word: 'scan',     definition: `To look across everything searching for something. Your brain scans the world for whatever your intention tells it to find.`, audioPrompt: `Scan — to look across everything searching for something. Your brain scans the world for whatever your intention tells it to find.` },
          ],
        },
        {
          type:          'magazine',
          section:       4,
          totalSections: 6,
          headline:      `Morning Sets the Tone`,
          paragraphs: [
            `Set an intention to be curious, and your brain will quietly flag moments of curiosity everywhere — all day long.`,
            `This isn't magic — it's neuroscience. The morning is the best time to set this filter, before the noise of the day takes over.`,
          ],
          image:        '/explorer-assets/inner-world/l16-s4-morning-tone.png',
          imageCaption: `Set your intention in the morning — before the noise of the day takes over`,
          vocab: [
            { word: 'filter',       definition: `Something that chooses what passes through. Your brain filters what you notice based on your intention.`, audioPrompt: `Filter — something that chooses what passes through. Your brain filters what you notice based on your intention.` },
            { word: 'neuroscience', definition: `The science of how your brain works. Neuroscience shows that intentions really do change what you notice.`, audioPrompt: `Neuroscience — the science of how your brain works. Neuroscience shows that intentions really do change what you notice.` },
          ],
        },
        {
          type:          'magazine',
          section:       5,
          totalSections: 6,
          headline:      `Keep It Simple`,
          paragraphs: [
            `The best intentions are simple and personal. "Today I choose to be present" is powerful.`,
            `Intentions don't measure you — they guide you. You can live an intention imperfectly and it still matters.`,
          ],
          image:        '/explorer-assets/inner-world/l16-s5-simple-clear.png',
          imageCaption: `Intentions don't measure you — they guide you`,
          vocab: [
            { word: 'simple', definition: `Not complicated. The best intentions are short, clear, and easy to remember — one phrase you can carry with you.`, audioPrompt: `Simple — not complicated. The best intentions are short, clear, and easy to remember. One phrase you can carry with you.` },
            { word: 'guide',  definition: `Something that shows you the way without grading you. Intentions guide you instead of measuring whether you got it right.`, audioPrompt: `Guide — something that shows you the way without grading you. Intentions guide you instead of measuring whether you got it right.` },
          ],
        },
        {
          type:          'magazine',
          section:       6,
          totalSections: 6,
          headline:      `Try It Now`,
          paragraphs: [
            `Try choosing one intention right now. Start with "Today I choose to be..." Say it out loud, then take three slow breaths.`,
            `At night, ask yourself: "How did I live my intention today?" That reflection closes the loop and builds the habit.`,
          ],
          image:        '/explorer-assets/inner-world/l16-s6-speak-intention.png',
          imageCaption: `Speak your intention. Take three breaths. Reflect at night.`,
          vocab: [
            { word: 'reflection', definition: `Looking back gently at how something went — without judging yourself, just noticing what happened.`, audioPrompt: `Reflection — looking back gently at how something went, without judging yourself, just noticing what happened.` },
            { word: 'habit',      definition: `Something you do regularly until it becomes automatic — like setting an intention every morning.`, audioPrompt: `Habit — something you do regularly until it becomes automatic, like setting an intention every morning.` },
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
    fetch('/explorer-assets/inner-world/l16-s1-intention-vs-goal.png', { method: 'HEAD' }),
    fetch('/explorer-assets/inner-world/l16-s2-ways-of-being.png',     { method: 'HEAD' }),
    fetch('/explorer-assets/inner-world/l16-s3-brain-scan.png',        { method: 'HEAD' }),
    fetch('/explorer-assets/inner-world/l16-s4-morning-tone.png',      { method: 'HEAD' }),
    fetch('/explorer-assets/inner-world/l16-s5-simple-clear.png',      { method: 'HEAD' }),
    fetch('/explorer-assets/inner-world/l16-s6-speak-intention.png',   { method: 'HEAD' }),
  ]).then(([r1, r2, r3, r4, r5, r6]) => {
    console.log(`[ASSET-CHECK-L16] intention-vs-goal: ${r1.ok}, ways-of-being: ${r2.ok}, brain-scan: ${r3.ok}, morning-tone: ${r4.ok}, simple-clear: ${r5.ok}, speak-intention: ${r6.ok}`);
  }).catch(() => {
    console.log('[ASSET-CHECK-L16] Could not verify image assets — network check failed');
  });
})();

export default innerworld_explorer_l16_screens;
