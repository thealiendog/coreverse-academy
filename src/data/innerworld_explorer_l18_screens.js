// ============================================================
// COREVERSE EXPLORERS — Inner World · Lesson 18
// "Self-Compassion: Being Kind to Myself"
// Ages 6–8 | Guide: Sage | ExplorerLessonPlayer format
// ============================================================

const innerworld_explorer_l18_screens = {
  ageBand:   'explorers',
  subjectId: 'inner-world',
  guide:     'sage',
  lessons: [
    {
      id:        'iw-6-8-18',
      title:     `Self-Compassion: Being Kind to Myself`,
      duration:  14,
      xpReward:  50,
      badge:     'self-compassion-champion',
      badgeName: `Self-Compassion Champion`,
      screens: [
        // PHASE 1 — WELCOME
        {
          type:      'welcome',
          guideText: `Hello, {name}! Today we're exploring something that many people find surprisingly hard: being kind to yourself. We're often much harder on ourselves than we would ever be on someone we love. Let's change that — with a practice called self-compassion.`,
        },

        // PHASE 2 — MAGAZINE STORY (6 sections)
        {
          type:          'magazine',
          section:       1,
          totalSections: 6,
          headline:      `What's Self-Compassion?`,
          paragraphs: [
            `Self-compassion is treating yourself with the same kindness you'd offer a good friend when things go wrong.`,
            `Dr. Kristin Neff has researched this for over twenty years — and found it has three distinct parts that work together.`,
          ],
          image:        '/explorer-assets/inner-world/l18-s1-hand-on-heart.png',
          imageCaption: `Self-compassion is offering yourself the kindness you'd give a friend`,
          vocab: [
            { word: 'self-compassion', definition: `Treating yourself with the same kindness you'd offer a good friend who was hurting or struggling.`, audioPrompt: `Self-compassion — treating yourself with the same kindness you'd offer a good friend who was hurting or struggling.` },
            { word: 'researcher',      definition: `Someone who studies things scientifically to find out what's true. Dr. Kristin Neff is a self-compassion researcher.`, audioPrompt: `Researcher — someone who studies things scientifically to find out what's true. Dr. Kristin Neff is a self-compassion researcher.` },
          ],
        },
        {
          type:          'magazine',
          section:       2,
          totalSections: 6,
          headline:      `Three Parts Together`,
          paragraphs: [
            `Self-kindness: being gentle with yourself instead of harshly critical. Common humanity: recognising that suffering is part of being human — you are not alone.`,
            `Mindfulness: noticing your painful feelings without pushing them away or making them bigger. All three parts work together.`,
          ],
          image:        '/explorer-assets/inner-world/l18-s2-three-parts.png',
          imageCaption: `Self-kindness, common humanity, mindfulness — three parts working as one`,
          vocab: [
            { word: 'self-kindness',   definition: `Being gentle with yourself when things go wrong — instead of harshly critical. One of the three parts of self-compassion.`, audioPrompt: `Self-kindness — being gentle with yourself when things go wrong, instead of harshly critical. One of the three parts of self-compassion.` },
            { word: 'common humanity', definition: `Recognising that suffering and imperfection are part of being human — you're not uniquely broken or alone.`, audioPrompt: `Common humanity — recognising that suffering and imperfection are part of being human. You're not uniquely broken or alone.` },
          ],
        },
        {
          type:          'magazine',
          section:       3,
          totalSections: 6,
          headline:      `Not Self-Pity`,
          paragraphs: [
            `Many people confuse self-compassion with self-pity or weakness. But research shows the opposite is true.`,
            `People with high self-compassion are more resilient, more motivated after failure, and have lower rates of anxiety and depression.`,
          ],
          image:        '/explorer-assets/inner-world/l18-s3-resilient.png',
          imageCaption: `Self-compassion makes you more resilient — not less`,
          vocab: [
            { word: 'self-pity', definition: `Feeling sorry for yourself in a way that gets you stuck — different from self-compassion, which moves you forward.`, audioPrompt: `Self-pity — feeling sorry for yourself in a way that gets you stuck. Different from self-compassion, which moves you forward.` },
            { word: 'resilient', definition: `Able to bounce back after hard times. Self-compassion makes you more resilient, not less.`, audioPrompt: `Resilient — able to bounce back after hard times. Self-compassion makes you more resilient, not less.` },
          ],
        },
        {
          type:          'magazine',
          section:       4,
          totalSections: 6,
          headline:      `A Better Coach`,
          paragraphs: [
            `The inner critic often disguises itself as a motivator: "If I'm harsh on myself, I'll do better next time."`,
            `But studies show this isn't true. People respond better to encouragement after failure than to self-attack. Compassion is the better coach.`,
          ],
          image:        '/explorer-assets/inner-world/l18-s4-better-coach.png',
          imageCaption: `Encouragement works better than self-attack — compassion is the better coach`,
          vocab: [
            { word: 'inner critic',   definition: `The harsh voice inside that judges you when things go wrong. It often pretends to be a motivator — but it's not the best coach.`, audioPrompt: `Inner critic — the harsh voice inside that judges you when things go wrong. It often pretends to be a motivator, but it's not the best coach.` },
            { word: 'encouragement', definition: `Kind words that build someone up after they struggle. Encouragement works better than harshness — even when you give it to yourself.`, audioPrompt: `Encouragement — kind words that build someone up after they struggle. Encouragement works better than harshness, even when you give it to yourself.` },
          ],
        },
        {
          type:          'magazine',
          section:       5,
          totalSections: 6,
          headline:      `Hand on Heart`,
          paragraphs: [
            `Dr. Neff offers a simple practice. Place a hand on your heart. The warmth of your own touch activates the body's soothing system.`,
            `Then say three phrases — for mindfulness, common humanity, and self-kindness. "This is hard." "Suffering is part of life." "May I be kind to myself."`,
          ],
          image:        '/explorer-assets/inner-world/l18-s5-soothing-touch.png',
          imageCaption: `Hand on heart, three phrases — a simple practice for hard moments`,
          vocab: [
            { word: 'mindfulness',     definition: `Noticing your painful feelings without pushing them away or making them bigger. Just acknowledging: "this is hard."`, audioPrompt: `Mindfulness — noticing your painful feelings without pushing them away or making them bigger. Just acknowledging: this is hard.` },
            { word: 'soothing system', definition: `Your body's natural way of calming down. Gentle self-touch and warmth activate it — like giving yourself a hug.`, audioPrompt: `Soothing system — your body's natural way of calming down. Gentle self-touch and warmth activate it, like giving yourself a hug.` },
          ],
        },
        {
          type:          'magazine',
          section:       6,
          totalSections: 6,
          headline:      `The Best Friend Test`,
          paragraphs: [
            `Think of something you've been hard on yourself about. Ask: what advice would I give my best friend in this exact situation?`,
            `Then offer that same advice to yourself. The same kindness. The same understanding. The same care.`,
          ],
          image:        '/explorer-assets/inner-world/l18-s6-friend-mirror.png',
          imageCaption: `Whatever you'd say to your best friend — say that to yourself`,
          vocab: [
            { word: 'compassion', definition: `Kindness offered to someone who is suffering. Compassion can be offered to others — and to yourself.`, audioPrompt: `Compassion — kindness offered to someone who is suffering. Compassion can be offered to others, and to yourself.` },
            { word: 'empathy',    definition: `Understanding what someone else is feeling. Self-compassion turns that same understanding toward yourself.`, audioPrompt: `Empathy — understanding what someone else is feeling. Self-compassion turns that same understanding toward yourself.` },
          ],
        },

        // PHASE 3 — INTERACTIVE
        {
          type:          'interactive',
          activityType:  'drag-match',
          instruction:   `Tap each card, then tap whether it shows self-compassion or self-pity!`,
          guideText:     `Self-compassion and self-pity can feel similar — but they're very different. Self-compassion meets difficulty with kindness and keeps you moving. Self-pity gets stuck in isolation and unfairness. Tap each card and sort it!`,
          columnHeaders: [`The Response`, `Compassion or Pity?`],
          items: [
            { image: 'l18-game-friendadvice.png', label: `Asking myself: "What would I tell my best friend if this happened to them?" — and saying it to myself.`, correctMatch: 'compassion', objectPosition: 'center 50%', matchPhrase: `That's self-compassion! Offering yourself the same advice you'd give a friend is exactly what Dr. Neff's research recommends. You deserve the same kindness you'd give someone you love.` },
            { image: 'l18-game-whyme.png',        label: `Thinking: "Why does this always happen to me? Nobody else has to deal with this."`,                    correctMatch: 'pity',       objectPosition: 'center 50%', matchPhrase: `That's closer to self-pity — it focuses on isolation and unfairness rather than meeting difficulty with kindness. Self-compassion reminds you: "Suffering is part of being human — you're not alone in this."` },
            { image: 'l18-game-handonheart.png',  label: `Placing a hand on my heart and saying: "This is hard. I choose to be kind to myself."`,               correctMatch: 'compassion', objectPosition: 'center 50%', matchPhrase: `Beautiful self-compassion practice! That's Dr. Neff's hand-on-heart technique — the physical touch and kind words can shift your inner landscape in seconds. Well done!` },
            { image: 'l18-game-onlyme.png',       label: `Telling myself I'm the only one who can't get this right.`,                                            correctMatch: 'pity',       objectPosition: 'center 50%', matchPhrase: `That's self-pity — it tells you that you're alone in struggling. Self-compassion reminds you: everyone has hard moments. You're not the only one.` },
          ],
          buckets: [
            { id: 'pity',       label: `😔 Self-Pity`,        color: '#F59E0B' },
            { id: 'compassion', label: `💛 Self-Compassion`, color: '#34D399' },
          ],
        },

        // PHASE 4 — MASTERY QUIZ
        {
          type:      'quiz',
          guideText: `Quiz time, {name}! Let's see what you've learned about self-compassion. Answer all 6 questions to earn your Self-Compassion Champion badge!`,
          questions: [
            {
              format:       'multiple-choice',
              question:     `What are the three components of self-compassion according to Dr. Kristin Neff?`,
              options:      [`Confidence, gratitude, and kindness`, `Self-kindness, common humanity, and mindfulness`, `Self-pity, self-improvement, and self-forgiveness`, `Meditation, journaling, and affirmations`],
              correctIndex: 1,
            },
            {
              format:       'multiple-choice',
              question:     `What is self-compassion?`,
              options:      [`Letting yourself off the hook for mistakes permanently`, `Treating yourself with the same kindness you'd offer a good friend when things go wrong`, `Thinking only positive thoughts`, `Avoiding all difficult situations`],
              correctIndex: 1,
            },
            {
              format:       'multiple-choice',
              question:     `What does research show about people with high self-compassion?`,
              options:      [`They become lazy and unmotivated`, `They are more resilient and more motivated to improve after failure`, `They never feel sad or anxious`, `They stop caring about improvement`],
              correctIndex: 1,
            },
            {
              format:       'multiple-choice',
              question:     `What is "common humanity" in Dr. Neff's framework?`,
              options:      [`Helping others more than yourself`, `Recognising that suffering and imperfection are part of being human — you are not alone`, `Joining a community organisation`, `Thinking everyone is the same`],
              correctIndex: 1,
            },
            {
              format:       'fill-blank',
              question:     `When something hard happens, place a hand on your ___ and say kind words to yourself.`,
              options:      [`heart`, `head`, `shoulder`, `stomach`],
              correctIndex: 0,
            },
            {
              format:        'true-false',
              question:      `Being kind to yourself after a mistake helps you do better next time.`,
              correctAnswer: true,
            },
          ],
        },

        // PHASE 5 — REAL-WORLD CONNECTION
        {
          type:            'real-world',
          guideText:       `Incredible, {name}! You've just learned one of the most transformative practices in all of psychology. Being kind to yourself is not weakness — it's the foundation of everything else. Sage carries so much compassion for you, and hopes you'll start carrying it for yourself too. Try this with your family tonight!`,
          familyAdventure: `Share a mistake you made recently. Then — as a family — practice responding to it with compassion: "It's okay, we all make mistakes. What can we learn? How can we be kind to ourselves right now?" Notice how different it feels to respond with kindness instead of criticism.`,
          creativePrompt:  `Think of something you've been hard on yourself about recently. Try the hand-on-heart practice: place a hand on your chest and say these three things slowly — "This is hard. Everyone struggles sometimes. I choose to be kind to myself right now." Write down how it felt before and after. What did you notice?`,
        },

        // PHASE 6 — CELEBRATION
        {
          type:      'celebration',
          xpEarned:  50,
          badge:     'self-compassion-champion',
          badgeName: `Self-Compassion Champion`,
          message:   `Incredible, {name}! You've just learned one of the most transformative practices in all of psychology. Being kind to yourself is not weakness — it's the foundation of everything else. Sage carries so much compassion for you, and hopes you'll start carrying it for yourself too!`,
        },
      ],
    },
  ],
};

// Log on module load — confirms lesson wired correctly + verifies image assets at runtime
(() => {
  const l    = innerworld_explorer_l18_screens.lessons[0];
  const mags = l.screens.filter(s => s.type === 'magazine').length;
  const game = l.screens.find(s => s.type === 'interactive')?.items?.length || 0;
  const quiz = l.screens.find(s => s.type === 'quiz')?.questions?.length || 0;
  console.log(`[LESSON-L18] Loaded: "Self-Compassion: Being Kind to Myself" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
  Promise.all([
    fetch('/explorer-assets/inner-world/l18-s1-hand-on-heart.png',  { method: 'HEAD' }),
    fetch('/explorer-assets/inner-world/l18-s2-three-parts.png',    { method: 'HEAD' }),
    fetch('/explorer-assets/inner-world/l18-s3-resilient.png',      { method: 'HEAD' }),
    fetch('/explorer-assets/inner-world/l18-s4-better-coach.png',   { method: 'HEAD' }),
    fetch('/explorer-assets/inner-world/l18-s5-soothing-touch.png', { method: 'HEAD' }),
    fetch('/explorer-assets/inner-world/l18-s6-friend-mirror.png',  { method: 'HEAD' }),
  ]).then(([r1, r2, r3, r4, r5, r6]) => {
    console.log(`[ASSET-CHECK-L18] hand-on-heart: ${r1.ok}, three-parts: ${r2.ok}, resilient: ${r3.ok}, better-coach: ${r4.ok}, soothing-touch: ${r5.ok}, friend-mirror: ${r6.ok}`);
  }).catch(() => {
    console.log('[ASSET-CHECK-L18] Could not verify image assets — network check failed');
  });
})();

export default innerworld_explorer_l18_screens;
