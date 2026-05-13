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

        // PHASE 2 — MAGAZINE STORY (6 sections)
        {
          type:          'magazine',
          section:       1,
          totalSections: 6,
          headline:      `What's an Affirmation?`,
          paragraphs: [
            `An affirmation is a positive statement you repeat to yourself on purpose. Examples: "I am capable," "I am brave," "I handle hard things well."`,
            `They might feel strange at first — especially if your inner critic disagrees. But that's okay. The strangeness fades with practice.`,
          ],
          image:        '/explorer-assets/inner-world/l12-s1-affirmation-energy.png',
          imageCaption: `An affirmation is a positive statement you tell yourself on purpose`,
          vocab: [
            { word: 'affirmation',  definition: `A positive statement you repeat to yourself on purpose — like "I am brave" or "I can do hard things."`,                                     audioPrompt: `Affirmation — a positive statement you repeat to yourself on purpose, like I am brave or I can do hard things.` },
            { word: 'inner critic', definition: `The voice inside your head that doubts or criticises you — affirmations help quiet the inner critic over time.`,                            audioPrompt: `Inner critic — the voice inside your head that doubts or criticises you. Affirmations help quiet the inner critic over time.` },
          ],
        },
        {
          type:          'magazine',
          section:       2,
          totalSections: 6,
          headline:      `Why It Works`,
          paragraphs: [
            `Neuroscience shows that repeated thoughts create stronger neural pathways — like paths in a forest. The more you walk a path, the clearer it becomes.`,
            `When you repeat an affirmation consistently, you're building a new mental pathway. Over time, your brain starts to see the world through it.`,
          ],
          image:        '/explorer-assets/inner-world/l12-s2-neural-pathways.png',
          imageCaption: `Repeated thoughts build neural pathways — like wearing a new trail through a forest`,
          vocab: [
            { word: 'neural pathway', definition: `A connection in your brain that gets stronger every time you use it — like a forest trail that becomes clearer the more you walk it.`,   audioPrompt: `Neural pathway — a connection in your brain that gets stronger every time you use it, like a forest trail that becomes clearer the more you walk it.` },
            { word: 'repetition',     definition: `Doing or saying the same thing again and again — repetition is how affirmations build new pathways in your brain.`,                       audioPrompt: `Repetition — doing or saying the same thing again and again. Repetition is how affirmations build new pathways in your brain.` },
          ],
        },
        {
          type:          'magazine',
          section:       3,
          totalSections: 6,
          headline:      `Make It Believable`,
          paragraphs: [
            `For affirmations to work, they need to be believable to you. If a statement feels too far from the truth, your brain resists it.`,
            `"I am already perfect at everything" might trigger resistance — your brain knows it's not quite true yet.`,
          ],
          image:        '/explorer-assets/inner-world/l12-s3-believable.png',
          imageCaption: `If an affirmation feels too far from true, your brain pushes it away`,
          vocab: [
            { word: 'resistance',  definition: `When your brain pushes back against an idea that doesn't feel true. Resistance is a signal to choose a different, more believable affirmation.`, audioPrompt: `Resistance — when your brain pushes back against an idea that doesn't feel true. Resistance is a signal to choose a different, more believable affirmation.` },
            { word: 'believable',  definition: `Something your brain can accept as possible right now — the best affirmations are believable, even if they describe who you're still becoming.`,  audioPrompt: `Believable — something your brain can accept as possible right now. The best affirmations are believable, even if they describe who you're still becoming.` },
          ],
        },
        {
          type:          'magazine',
          section:       4,
          totalSections: 6,
          headline:      `Present, Personal, Progressive`,
          paragraphs: [
            `The best affirmations are present-tense, personal, and progressive — they describe who you're becoming, not an unreachable ideal.`,
            `"I am becoming more confident every day" or "I am learning to be brave" feels true right now AND moves you forward.`,
          ],
          image:        '/explorer-assets/inner-world/l12-s4-becoming.png',
          imageCaption: `The best affirmations describe who you're becoming, not an unreachable end`,
          vocab: [
            { word: 'progressive',   definition: `Moving forward step by step — getting a little better every day, not jumping to a perfect end all at once.`,                                  audioPrompt: `Progressive — moving forward step by step, getting a little better every day, not jumping to a perfect end all at once.` },
            { word: 'present-tense', definition: `Written as if it's happening now — "I am becoming" rather than "I will be one day." Present-tense affirmations feel more real to your brain.`, audioPrompt: `Present-tense — written as if it's happening now, like I am becoming rather than I will be one day. Present-tense affirmations feel more real to your brain.` },
          ],
        },
        {
          type:          'magazine',
          section:       5,
          totalSections: 6,
          headline:      `When to Practice`,
          paragraphs: [
            `The best times to practice affirmations are in the morning — to set the tone for your day — or at night, before sleep.`,
            `Saying them out loud while looking in a mirror makes them even more powerful. Something about seeing your own face creates a deeper impression.`,
          ],
          image:        '/explorer-assets/inner-world/l12-s5-mirror.png',
          imageCaption: `Saying affirmations in a mirror makes them even more powerful`,
          vocab: [
            { word: 'ritual',     definition: `Something you do at the same time each day on purpose — like a morning or bedtime practice. Rituals make the habit stick.`,                    audioPrompt: `Ritual — something you do at the same time each day on purpose, like a morning or bedtime practice. Rituals make the habit stick.` },
            { word: 'receptive',  definition: `Open and ready to take in new ideas — the brain is especially receptive in the morning and just before sleep, making those times powerful for affirmations.`, audioPrompt: `Receptive — open and ready to take in new ideas. The brain is especially receptive in the morning and just before sleep, making those the best times for affirmations.` },
          ],
        },
        {
          type:          'magazine',
          section:       6,
          totalSections: 6,
          headline:      `Start Small`,
          paragraphs: [
            `Start with just two or three affirmations. Say them slowly, with genuine feeling. Notice what happens in your body.`,
            `Over time, the words stop feeling strange — they start feeling true.`,
          ],
          image:        '/explorer-assets/inner-world/l12-s6-seed.png',
          imageCaption: `Start small — a few affirmations, said with real feeling, become real beliefs`,
          vocab: [
            { word: 'practice', definition: `Doing something on purpose, over and over, to get better at it. Affirmations work because you practice them every day.`,                          audioPrompt: `Practice — doing something on purpose, over and over, to get better at it. Affirmations work because you practice them every day.` },
            { word: 'belief',   definition: `A thought your brain accepts as true — affirmations work by slowly turning repeated words into beliefs you carry with you.`,                      audioPrompt: `Belief — a thought your brain accepts as true. Affirmations work by slowly turning repeated words into beliefs you carry with you.` },
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
              question:     `When are two of the best times to practice affirmations?`,
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
    fetch('/explorer-assets/inner-world/l12-s1-affirmation-energy.png', { method: 'HEAD' }),
    fetch('/explorer-assets/inner-world/l12-s2-neural-pathways.png',    { method: 'HEAD' }),
    fetch('/explorer-assets/inner-world/l12-s3-believable.png',         { method: 'HEAD' }),
    fetch('/explorer-assets/inner-world/l12-s4-becoming.png',           { method: 'HEAD' }),
    fetch('/explorer-assets/inner-world/l12-s5-mirror.png',             { method: 'HEAD' }),
    fetch('/explorer-assets/inner-world/l12-s6-seed.png',               { method: 'HEAD' }),
  ]).then(([r1, r2, r3, r4, r5, r6]) => {
    console.log(`[ASSET-CHECK-L12] affirmation-energy: ${r1.ok}, neural-pathways: ${r2.ok}, believable: ${r3.ok}, becoming: ${r4.ok}, mirror: ${r5.ok}, seed: ${r6.ok}`);
  }).catch(() => {
    console.log('[ASSET-CHECK-L12] Could not verify image assets — network check failed');
  });
})();

export default innerworld_explorer_l12_screens;
