// ============================================================
// COREVERSE EXPLORERS — Inner World · Lesson 14
// "Mindfulness: Being Present Right Now"
// Ages 6–8 | Guide: Sage | ExplorerLessonPlayer format
// ============================================================

const innerworld_explorer_l14_screens = {
  ageBand:   'explorers',
  subjectId: 'inner-world',
  guide:     'sage',
  lessons: [
    {
      id:        'iw-6-8-14',
      title:     `Mindfulness: Being Present Right Now`,
      duration:  13,
      xpReward:  50,
      badge:     'present-moment-guide',
      badgeName: `Present Moment Guide`,
      screens: [
        // PHASE 1 — WELCOME
        {
          type:      'welcome',
          guideText: `Hello, {name}! Where is your mind right now? Is it here with me, or is it somewhere else — maybe thinking about lunch, or what happened earlier, or what you're doing later? Today we're going to explore one of the most powerful skills you can build: mindfulness. It's the art of being right here, right now. Ready to come back to the present?`,
        },

        // PHASE 2 — MAGAZINE STORY
        {
          type:          'magazine',
          section:       1,
          totalSections: 3,
          headline:      `Your Mind Wanders — A Lot`,
          paragraphs: [
            `Here's a surprising fact: researchers at Harvard found that the human mind wanders about 47% of waking hours. That means almost half the time, your mind isn't where your body is — it's somewhere else entirely.`,
            `When your mind wanders, it tends to travel to two places: the past and the future. It replays memories, revisits regrets, makes plans, and runs through worries. Very little of this mental travel is happening right now.`,
            `Mindfulness is a gentle invitation to come back. It simply asks: can you pay attention to what's happening right now, without judging it? Not fixing it, not escaping it — just noticing it.`,
          ],
          image:        '/explorer-assets/inner-world/l14-wandering-mind.png',
          imageCaption: `Almost half your waking hours, your mind is somewhere else — mindfulness invites it back`,
          vocab: [
            { word: 'mindfulness',   definition: `Paying attention to what is happening right now, on purpose, without judging it — a skill that brings your mind back to the present moment.`,         audioPrompt: `Mindfulness — paying attention to what is happening right now, on purpose, without judging it. A skill that brings your mind back to the present moment.` },
            { word: 'mind-wandering', definition: `When your thoughts drift away from the present moment to the past or future — it happens to everyone, about 47% of waking hours.`,                   audioPrompt: `Mind-wandering — when your thoughts drift away from the present moment to the past or future. It happens to everyone, about 47% of waking hours.` },
          ],
        },
        {
          type:          'magazine',
          section:       2,
          totalSections: 3,
          headline:      `Presence Is Connected to Happiness`,
          paragraphs: [
            `The same Harvard study found something remarkable: people were happiest when their minds were focused on what they were currently doing — even if the activity itself wasn't particularly exciting.`,
            `Mind-wandering, no matter what people were thinking about, was linked to lower happiness levels. Being present — even during ordinary moments — was consistently linked to greater wellbeing.`,
            `This means happiness isn't just about what you're doing. It's about how much of your mind is actually there while you're doing it. Presence is a skill — and like all skills, it gets better with practice.`,
          ],
          image:        '/explorer-assets/inner-world/l14-present-moment.png',
          imageCaption: `Harvard research: presence during any activity beats a wandering mind for happiness`,
          vocab: [
            { word: 'presence',      definition: `Being fully in the current moment — having your thoughts, attention, and awareness all pointed at what is happening right now.`,                        audioPrompt: `Presence — being fully in the current moment, having your thoughts, attention, and awareness all pointed at what is happening right now.` },
            { word: 'Harvard study', definition: `Research by Killingsworth and Gilbert that tracked people's happiness and found mind-wandering — not activity type — was the biggest predictor of low mood.`, audioPrompt: `Harvard study — research by Killingsworth and Gilbert that tracked people's happiness and found that mind-wandering, not the type of activity, was the biggest predictor of low mood.` },
          ],
        },
        {
          type:          'magazine',
          section:       3,
          totalSections: 3,
          headline:      `You Can Be Mindful Anywhere`,
          paragraphs: [
            `Mindfulness doesn't require sitting still or closing your eyes. You can practise it anywhere — while eating, while walking, while listening to someone speak.`,
            `Mindful eating means really tasting each bite: noticing texture, temperature, flavour. Mindful walking means feeling your feet on the ground, noticing what you see and hear. Mindful listening means giving someone your full attention — not planning what you'll say next.`,
            `Each time you bring your full attention to an ordinary moment, you're not just practising mindfulness — you're entering your life more deeply. The present moment is the only place where life actually happens.`,
          ],
          image:        '/explorer-assets/inner-world/l14-mindful-eating.png',
          imageCaption: `Eating, walking, listening — mindfulness fits into any moment of your day`,
          vocab: [
            { word: 'mindful eating', definition: `Eating with full attention — noticing texture, temperature, and flavour instead of eating automatically while your mind is somewhere else.`,           audioPrompt: `Mindful eating — eating with full attention, noticing texture, temperature, and flavour instead of eating automatically while your mind is somewhere else.` },
            { word: 'fully present',  definition: `Having your complete attention on what is happening right now — your thoughts, senses, and awareness all focused on the current moment.`,             audioPrompt: `Fully present — having your complete attention on what is happening right now, with your thoughts, senses, and awareness all focused on the current moment.` },
          ],
        },

        // PHASE 3 — INTERACTIVE
        {
          type:          'interactive',
          activityType:  'drag-match',
          instruction:   `Tap each card, then tap whether it's mind-wandering or mindful!`,
          guideText:     `Some moments we're fully here — and some moments our mind has drifted somewhere else entirely. Tap each card and sort it: is this mind-wandering or being mindful?`,
          columnHeaders: [`The Moment`, `Wandering or Mindful?`],
          items: [
            { image: 'l14-game-worrying.png',  label: `Eating lunch while thinking about tomorrow's test.`,                       correctMatch: 'wandering', objectPosition: 'center 50%', matchPhrase: `That's mind-wandering! Your body is at lunch but your mind is in tomorrow. Try tasting each bite instead — your meal will be more enjoyable!` },
            { image: 'l14-game-replaying.png', label: `Replaying an argument from this morning while walking home.`,             correctMatch: 'wandering', objectPosition: 'center 50%', matchPhrase: `Mind-wandering! You're in the past while your feet are in the present. Try noticing what you see and hear on the walk instead.` },
            { image: 'l14-game-tasting.png',   label: `Really tasting each bite of your meal.`,                                   correctMatch: 'mindful',   objectPosition: 'center 50%', matchPhrase: `Mindful! You're fully present in the experience. This is mindful eating — and research shows it makes the meal more satisfying too!` },
            { image: 'l14-game-listening.png', label: `Listening to a friend speak without thinking about what to say next.`,    correctMatch: 'mindful',   objectPosition: 'center 50%', matchPhrase: `Mindful! Full attention on your friend — no planning, no wandering. This is one of the most powerful gifts you can give someone.` },
          ],
          buckets: [
            { id: 'wandering', label: `💭 Mind-Wandering`, color: '#F59E0B' },
            { id: 'mindful',   label: `🌿 Mindful`,        color: '#34D399' },
          ],
        },

        // PHASE 4 — MASTERY QUIZ
        {
          type:      'quiz',
          guideText: `Quiz time, {name}! Let's see what you've learned about mindfulness. Answer all 6 questions to earn your Present Moment Guide badge!`,
          questions: [
            {
              format:       'multiple-choice',
              question:     `What did the Harvard happiness research find?`,
              options:      [`People are happiest when doing exciting activities`, `People are happiest when their minds are focused on what they're currently doing`, `Mind-wandering improves creativity`, `Happiness depends mostly on the weather`],
              correctIndex: 1,
            },
            {
              format:       'multiple-choice',
              question:     `According to Harvard researchers, approximately how much of their waking hours do people spend with a wandering mind?`,
              options:      [`About 10%`, `About 25%`, `About 47%`, `About 80%`],
              correctIndex: 2,
            },
            {
              format:        'true-false',
              question:      `You can practise mindfulness while eating, walking, or listening.`,
              correctAnswer: true,
            },
            {
              format:       'multiple-choice',
              question:     `When the mind wanders, where does it tend to go?`,
              options:      [`Nowhere — it stays blank`, `The past and the future — memories, regrets, plans, and worries`, `Only into daydreams about the future`, `Only into replaying happy memories`],
              correctIndex: 1,
            },
            {
              format:       'fill-blank',
              question:     `Mindfulness asks you to pay attention to what's happening right now, without ___.`,
              options:      [`judgment`, `breathing`, `thinking`, `moving`],
              correctIndex: 0,
            },
            {
              format:       'multiple-choice',
              question:     `When you notice your mind has wandered during a mindfulness practice, what should you do?`,
              options:      [`Feel frustrated and stop`, `Try harder to force your mind to stay`, `Gently and without judgment return to the present moment`, `Wait until the wandering stops on its own`],
              correctIndex: 2,
            },
          ],
        },

        // PHASE 5 — REAL-WORLD CONNECTION
        {
          type:            'real-world',
          guideText:       `Wonderful, {name}! You've just discovered one of the most important skills a human being can practise — the ability to be right here, right now. Every time you notice your mind has wandered and bring it back, you're getting stronger. Try this with your family tonight!`,
          familyAdventure: `At dinner tonight, try one minute of mindful eating together. Everyone pays full attention to what they're tasting — no talking, no screens, just noticing. Afterwards, share what you noticed. You might be surprised how different food tastes when you're really paying attention!`,
          creativePrompt:  `Choose one ordinary activity you do every day — eating, brushing your teeth, walking somewhere — and do it mindfully just once. Bring your full attention. Notice everything. Afterwards, write down three things you noticed that you wouldn't have noticed otherwise. What did the present moment show you?`,
        },

        // PHASE 6 — CELEBRATION
        {
          type:      'celebration',
          xpEarned:  50,
          badge:     'present-moment-guide',
          badgeName: `Present Moment Guide`,
          message:   `Wonderful, {name}! You've just discovered one of the most important skills a human being can practise — the ability to be right here, right now. Every time you bring your attention back to the present, you're training a calmer, clearer, happier mind. Sage is so proud of the awareness you're building!`,
        },
      ],
    },
  ],
};

// Log on module load — confirms lesson wired correctly + verifies image assets at runtime
(() => {
  const l    = innerworld_explorer_l14_screens.lessons[0];
  const mags = l.screens.filter(s => s.type === 'magazine').length;
  const game = l.screens.find(s => s.type === 'interactive')?.items?.length || 0;
  const quiz = l.screens.find(s => s.type === 'quiz')?.questions?.length || 0;
  console.log(`[LESSON-L14] Loaded: "Mindfulness: Being Present Right Now" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
  Promise.all([
    fetch('/explorer-assets/inner-world/l14-wandering-mind.png', { method: 'HEAD' }),
    fetch('/explorer-assets/inner-world/l14-present-moment.png', { method: 'HEAD' }),
    fetch('/explorer-assets/inner-world/l14-mindful-eating.png', { method: 'HEAD' }),
  ]).then(([r1, r2, r3]) => {
    console.log(`[ASSET-CHECK-L14] wandering-mind: ${r1.ok}, present-moment: ${r2.ok}, mindful-eating: ${r3.ok}`);
  }).catch(() => {
    console.log('[ASSET-CHECK-L14] Could not verify image assets — network check failed');
  });
})();

export default innerworld_explorer_l14_screens;
