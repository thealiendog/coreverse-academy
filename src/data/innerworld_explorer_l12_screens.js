// ============================================================
// COREVERSE EXPLORERS — Inner World · Lesson 12
// "The Power of Affirmations"
// Ages 6–8 | Guide: Sage | ExplorerLessonPlayer format
// ============================================================

const innerworld_explorer_l12_screens = {
  ageBand:   'explorers',
  subjectId: 'inner-world',
  guide:     'sage',
  lessons: [
    {
      id:        'iw-6-8-12',
      title:     `The Power of Affirmations`,
      duration:  12,
      xpReward:  50,
      badge:     'affirmation-star',
      badgeName: `Affirmation Star`,
      screens: [
        // PHASE 1 — WELCOME
        {
          type:      'welcome',
          guideText: `Welcome, {name}! Words are more powerful than most people realise — especially the words you say to yourself. Today we're going to learn about affirmations: positive statements that, when repeated with belief, can literally change how your brain is wired. Ready to upgrade your inner voice?`,
        },

        // PHASE 2 — MAGAZINE STORY
        {
          type:          'magazine',
          section:       1,
          totalSections: 3,
          headline:      `What Is an Affirmation?`,
          paragraphs: [
            `An affirmation is a positive statement you repeat to yourself on purpose. Examples: "I am capable," "I am learning and growing every day," "I handle hard things well." They might feel strange at first — especially if your inner critic disagrees. But repetition with feeling is the key.`,
            `Neuroscience shows that repeated thoughts create stronger neural pathways — like paths in a forest. The more you walk a path, the clearer and easier it becomes.`,
            `When you repeat an affirmation consistently, you're building a new mental pathway. Over time, your brain begins to scan for evidence that supports the affirmation — and finds it. The words shape the lens you see the world through.`,
          ],
          image:        '/explorer-assets/inner-world/l12-neural-paths.png',
          imageCaption: `Repeated affirmations build new neural pathways — like clearing a path through a forest`,
          vocab: [
            { word: 'affirmation',   definition: `A positive statement you repeat to yourself on purpose — designed to build a new belief by creating stronger neural pathways over time.`,   audioPrompt: `Affirmation — a positive statement you repeat to yourself on purpose, designed to build a new belief by creating stronger neural pathways over time.` },
            { word: 'neural pathway', definition: `A connection between brain cells that gets stronger the more you use it — like a path in a forest that becomes a road with repeated walking.`, audioPrompt: `Neural pathway — a connection between brain cells that gets stronger the more you use it, like a path in a forest that becomes a road with repeated walking.` },
          ],
        },
        {
          type:          'magazine',
          section:       2,
          totalSections: 3,
          headline:      `Making Affirmations That Actually Work`,
          paragraphs: [
            `For affirmations to work, they need to be believable to you. If a statement feels too far from the truth, your brain resists it rather than building on it.`,
            `"I am already perfect at everything" might trigger resistance — your brain knows it's not quite true yet. But "I am becoming more confident every day" or "I am learning to be brave" is true right now, and still moves you in the direction you want.`,
            `The best affirmations are present-tense, personal, and progressive — they describe who you're becoming, not an unreachable ideal. That slight stretch is exactly where growth happens.`,
          ],
          image:        '/explorer-assets/inner-world/l12-believable-words.png',
          imageCaption: `Believable + directional — the two ingredients of an affirmation that works`,
          vocab: [
            { word: 'resistance',             definition: `When your brain pushes back against a statement because it feels too untrue — strong affirmations avoid triggering resistance by staying believable.`, audioPrompt: `Resistance — when your brain pushes back against a statement because it feels too untrue. Strong affirmations avoid triggering resistance by staying believable.` },
            { word: 'progressive affirmation', definition: `An affirmation that describes who you're becoming — like "I am learning to be brave" — true right now and pointing in the direction you want to grow.`,    audioPrompt: `Progressive affirmation — an affirmation that describes who you're becoming, like I am learning to be brave, true right now and pointing in the direction you want to grow.` },
          ],
        },
        {
          type:          'magazine',
          section:       3,
          totalSections: 3,
          headline:      `When and How to Practise`,
          paragraphs: [
            `The best times to practise affirmations are in the morning — to set the tone for your day — or at night, just before sleep, when your brain is very receptive to suggestion.`,
            `Saying them out loud while looking in the mirror makes them even more powerful. Research suggests this activates a stronger sense of self — something about seeing your own face while hearing your own voice creates a deeper impression.`,
            `Start with just two or three affirmations. Say them slowly, with genuine feeling. Notice what happens in your body. Over time, the words stop feeling strange — they start feeling true.`,
          ],
          image:        '/explorer-assets/inner-world/l12-best-times.png',
          imageCaption: `Morning or night, out loud in the mirror — the ritual that makes affirmations stick`,
          vocab: [
            { word: 'receptive',    definition: `Open and ready to take in new information or ideas — the brain is especially receptive just before sleep, making it a powerful time for affirmations.`, audioPrompt: `Receptive — open and ready to take in new information or ideas. The brain is especially receptive just before sleep, making it a powerful time for affirmations.` },
            { word: 'sense of self', definition: `Your inner feeling of who you are — saying affirmations while looking in the mirror activates and strengthens this sense, according to research.`,          audioPrompt: `Sense of self — your inner feeling of who you are. Saying affirmations while looking in the mirror activates and strengthens this sense, according to research.` },
          ],
        },

        // PHASE 3 — INTERACTIVE
        {
          type:          'interactive',
          activityType:  'drag-match',
          instruction:   `Tap an affirmation card, then tap whether it's strong or weak!`,
          guideText:     `Not all affirmations are created equal! Some are too extreme and your brain resists them — others are believable and powerful. Tap each card and sort it: is it a strong affirmation or a weak one?`,
          columnHeaders: [`The Affirmation`, `Strong or Weak?`],
          items: [
            { image: 'l12-game-perfect.png',   label: `"I am already perfect at everything."`,       correctMatch: 'weak',   objectPosition: 'center 50%', matchPhrase: `That one's too far from truth — the brain resists it. Try: "I am learning and growing every day." Believable and true!` },
            { image: 'l12-game-never.png',     label: `"I never make mistakes."`,                    correctMatch: 'weak',   objectPosition: 'center 50%', matchPhrase: `That's a weak affirmation — the brain knows it's not true. Try: "I learn something valuable from every mistake."` },
            { image: 'l12-game-becoming.png',  label: `"I am becoming more confident every day."`,  correctMatch: 'strong', objectPosition: 'center 50%', matchPhrase: `Strong affirmation! It's true right now and moving in the direction you want. Your brain can build on this!` },
            { image: 'l12-game-capable.png',   label: `"I handle hard things well."`,               correctMatch: 'strong', objectPosition: 'center 50%', matchPhrase: `Strong affirmation! Specific, believable, and empowering. Say it out loud with feeling and watch your brain light up!` },
          ],
          buckets: [
            { id: 'weak',   label: `💭 Weak Affirmation`,   color: '#F59E0B' },
            { id: 'strong', label: `⭐ Strong Affirmation`, color: '#34D399' },
          ],
        },

        // PHASE 4 — MASTERY QUIZ
        {
          type:      'quiz',
          guideText: `Quiz time, {name}! Let's see what you've learned about affirmations. Answer all 6 questions to earn your Affirmation Star badge!`,
          questions: [
            {
              format:       'multiple-choice',
              question:     `What is an affirmation?`,
              options:      [`A complaint about something difficult`, `A positive statement repeated on purpose to rewire thinking`, `A compliment someone gives you`, `A type of meditation with no words`],
              correctIndex: 1,
            },
            {
              format:       'multiple-choice',
              question:     `What happens neurologically when you repeat an affirmation consistently?`,
              options:      [`Nothing changes in the brain`, `Stronger neural pathways are built that support the new belief`, `Old memories are erased`, `Only emotions change, not the brain`],
              correctIndex: 1,
            },
            {
              format:        'true-false',
              question:      `Affirmations work best when they feel believable and true to you.`,
              correctAnswer: true,
            },
            {
              format:       'multiple-choice',
              question:     `When are two of the best times to practise affirmations?`,
              options:      [`During a test and while cooking`, `Morning and night, when the brain is most receptive`, `Only at school`, `Only when you're feeling confident already`],
              correctIndex: 1,
            },
            {
              format:       'fill-blank',
              question:     `Saying affirmations out loud while looking in the ___ makes them even more powerful.`,
              options:      [`mirror`, `window`, `ceiling`, `phone`],
              correctIndex: 0,
            },
            {
              format:       'multiple-choice',
              question:     `Which of these is the most effective type of affirmation?`,
              options:      [`"I am already perfect at everything"`, `"I am becoming more confident every day"`, `"Other people think I'm great"`, `"I never make mistakes"`],
              correctIndex: 1,
            },
          ],
        },

        // PHASE 5 — REAL-WORLD CONNECTION
        {
          type:            'real-world',
          guideText:       `Brilliant, {name}! You now know how to use words as tools for building the mind you want. Affirmations work slowly and powerfully — like water shaping stone. Keep saying yours every day, and watch what grows. Try this with your family tonight!`,
          familyAdventure: `Each family member writes one personal affirmation and puts it somewhere they'll see it every morning — the bathroom mirror, the fridge, or their school notebook. Share yours with each other and cheer each other on!`,
          creativePrompt:  `Write or think of three affirmations that feel true and also inspire you. They should start with "I am," "I have," or "I choose." Make them personal. Say them out loud right now, slowly, with feeling. Notice what happens in your body when you say them.`,
        },

        // PHASE 6 — CELEBRATION
        {
          type:      'celebration',
          xpEarned:  50,
          badge:     'affirmation-star',
          badgeName: `Affirmation Star`,
          message:   `Brilliant, {name}! You now know how to use words as tools for building the mind you want. Affirmations work slowly and powerfully — like water shaping stone. Keep saying yours every day, and watch what grows. Sage believes every word you say about yourself!`,
        },
      ],
    },
  ],
};

// Log on module load — confirms lesson wired correctly + verifies image assets at runtime
(() => {
  const l    = innerworld_explorer_l12_screens.lessons[0];
  const mags = l.screens.filter(s => s.type === 'magazine').length;
  const game = l.screens.find(s => s.type === 'interactive')?.items?.length || 0;
  const quiz = l.screens.find(s => s.type === 'quiz')?.questions?.length || 0;
  console.log(`[LESSON-L12] Loaded: "${l.title}" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
  Promise.all([
    fetch('/explorer-assets/inner-world/l12-neural-paths.png',    { method: 'HEAD' }),
    fetch('/explorer-assets/inner-world/l12-believable-words.png', { method: 'HEAD' }),
    fetch('/explorer-assets/inner-world/l12-best-times.png',       { method: 'HEAD' }),
  ]).then(([r1, r2, r3]) => {
    console.log(`[ASSET-CHECK-L12] neural-paths: ${r1.ok}, believable-words: ${r2.ok}, best-times: ${r3.ok}`);
  }).catch(() => {
    console.log('[ASSET-CHECK-L12] Could not verify image assets — network check failed');
  });
})();

export default innerworld_explorer_l12_screens;
