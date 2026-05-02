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

        // PHASE 2 — MAGAZINE STORY
        {
          type:          'magazine',
          section:       1,
          totalSections: 3,
          headline:      `Dr. Neff's Three Components`,
          paragraphs: [
            `Self-compassion is treating yourself with the same kindness and understanding you'd offer a good friend when things go wrong. Dr. Kristin Neff has researched self-compassion for over twenty years — and she found it has three distinct parts.`,
            `The first is self-kindness: being gentle with yourself instead of harshly critical. The second is common humanity: recognising that suffering and imperfection are part of being human — you are not uniquely broken or alone. The third is mindfulness: noticing your painful feelings without pushing them away or exaggerating them.`,
            `These three components work together. When something goes wrong, self-compassion says: "This hurts (mindfulness). This is part of being human (common humanity). May I be kind to myself right now (self-kindness)." All three in one quiet moment.`,
          ],
          image:        '/explorer-assets/inner-world/l18-three-components.png',
          imageCaption: `Dr. Kristin Neff's three components: self-kindness, common humanity, mindfulness`,
          vocab: [
            { word: 'self-compassion',  definition: `Treating yourself with the same kindness and understanding you'd offer a good friend when things go wrong — made up of self-kindness, common humanity, and mindfulness.`, audioPrompt: `Self-compassion — treating yourself with the same kindness and understanding you'd offer a good friend when things go wrong. It's made up of self-kindness, common humanity, and mindfulness.` },
            { word: 'common humanity', definition: `The recognition that suffering and imperfection are a normal part of being human — you are not alone in struggling, and difficulties don't make you uniquely broken.`,         audioPrompt: `Common humanity — the recognition that suffering and imperfection are a normal part of being human. You are not alone in struggling, and difficulties don't make you uniquely broken.` },
          ],
        },
        {
          type:          'magazine',
          section:       2,
          totalSections: 3,
          headline:      `Not Self-Pity — Something Stronger`,
          paragraphs: [
            `Many people confuse self-compassion with self-pity or weakness. But research shows the opposite is true. People with high self-compassion are more resilient, more motivated to improve after failure, and have lower rates of anxiety and depression.`,
            `Self-compassion isn't about letting yourself off the hook — it's about meeting difficulty with enough kindness that you can actually learn from it. A child who attacks themselves after a mistake often freezes or gives up. A child who responds with compassion can pick themselves up and try again.`,
            `The inner critic often disguises itself as a motivator: "If I'm harsh on myself, I'll do better next time." But studies show this isn't true. People respond better to encouragement after failure than to self-attack. Compassion is the better coach — and the research proves it.`,
          ],
          image:        '/explorer-assets/inner-world/l18-not-self-pity.png',
          imageCaption: `Self-compassion isn't weakness — it's what makes resilience and improvement possible`,
          vocab: [
            { word: 'self-pity',    definition: `Getting stuck in feelings of unfairness and isolation after difficulty — different from self-compassion, which meets difficulty with kindness and moves forward.`, audioPrompt: `Self-pity — getting stuck in feelings of unfairness and isolation after difficulty. It's different from self-compassion, which meets difficulty with kindness and moves forward.` },
            { word: 'inner critic', definition: `The harsh internal voice that attacks you after mistakes — often disguised as a motivator, but research shows it actually undermines performance and resilience.`,      audioPrompt: `Inner critic — the harsh internal voice that attacks you after mistakes. Often disguised as a motivator, but research shows it actually undermines performance and resilience.` },
          ],
        },
        {
          type:          'magazine',
          section:       3,
          totalSections: 3,
          headline:      `The Hand-on-Heart Practice`,
          paragraphs: [
            `Dr. Neff offers a beautifully simple practice for difficult moments: place a hand on your heart. The warmth of your own touch activates the body's soothing system — the same system activated by a hug.`,
            `Then say three phrases — one for each component. "This is hard." (Mindfulness — acknowledging the pain.) "Suffering is part of life." (Common humanity — you're not alone.) "May I be kind to myself in this moment." (Self-kindness — a gentle choice.)`,
            `Think of something you've been hard on yourself about. Now try: "This is hard. Everyone struggles sometimes. I choose to be kind to myself right now." Then ask what advice you'd give your best friend in this exact situation — and offer that same advice to yourself.`,
          ],
          image:        '/explorer-assets/inner-world/l18-hand-on-heart.png',
          imageCaption: `Hand on heart, three phrases — one for each component — can shift your inner world in seconds`,
          vocab: [
            { word: 'self-kindness',          definition: `Choosing to be gentle with yourself instead of harshly critical — especially in moments of difficulty, failure, or pain.`,                                              audioPrompt: `Self-kindness — choosing to be gentle with yourself instead of harshly critical, especially in moments of difficulty, failure, or pain.` },
            { word: 'hand-on-heart practice', definition: `A physical self-compassion practice: placing a hand on your heart while saying three phrases — one for mindfulness, one for common humanity, one for self-kindness.`, audioPrompt: `Hand-on-heart practice — a physical self-compassion practice. You place a hand on your heart while saying three phrases, one for mindfulness, one for common humanity, and one for self-kindness.` },
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
          familyAdventure: `Share a mistake you made recently. Then — as a family — practise responding to it with compassion: "It's okay, we all make mistakes. What can we learn? How can we be kind to ourselves right now?" Notice how different it feels to respond with kindness instead of criticism.`,
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
    fetch('/explorer-assets/inner-world/l18-three-components.png', { method: 'HEAD' }),
    fetch('/explorer-assets/inner-world/l18-not-self-pity.png',    { method: 'HEAD' }),
    fetch('/explorer-assets/inner-world/l18-hand-on-heart.png',    { method: 'HEAD' }),
  ]).then(([r1, r2, r3]) => {
    console.log(`[ASSET-CHECK-L18] three-components: ${r1.ok}, not-self-pity: ${r2.ok}, hand-on-heart: ${r3.ok}`);
  }).catch(() => {
    console.log('[ASSET-CHECK-L18] Could not verify image assets — network check failed');
  });
})();

export default innerworld_explorer_l18_screens;
