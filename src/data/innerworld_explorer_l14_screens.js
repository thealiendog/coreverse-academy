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

        // PHASE 2 — MAGAZINE STORY (6 sections)
        {
          type:          'magazine',
          section:       1,
          totalSections: 6,
          headline:      `The 47% Discovery`,
          paragraphs: [
            `Here's a surprising fact: researchers at Harvard found that the human mind wanders about 47% of waking hours.`,
            `That means almost half the time, your mind isn't where your body is. Your body might be at school while your mind is at home.`,
          ],
          image:        '/explorer-assets/inner-world/l14-s1-wandering-mind.png',
          imageCaption: `Almost half the time, your mind is somewhere else than your body`,
          vocab: [
            { word: 'wandering', definition: `When your mind drifts away from what you're doing — thinking about something else even when your body is right here.`,                                  audioPrompt: `Wandering — when your mind drifts away from what you're doing, thinking about something else even when your body is right here.` },
            { word: 'present',   definition: `Being where your body is, in this exact moment — your mind and body in the same place at the same time.`,                                               audioPrompt: `Present — being where your body is, in this exact moment. Your mind and body in the same place at the same time.` },
          ],
        },
        {
          type:          'magazine',
          section:       2,
          totalSections: 6,
          headline:      `Where Your Mind Goes`,
          paragraphs: [
            `When your mind wanders, it tends to travel to two places: the past and the future.`,
            `It replays memories, revisits regrets, makes plans, and runs through worries. Very little of this is happening right now.`,
          ],
          image:        '/explorer-assets/inner-world/l14-s2-past-future.png',
          imageCaption: `Your wandering mind usually goes to the past or the future — rarely the present`,
          vocab: [
            { word: 'past',   definition: `Things that already happened. Your mind likes to visit the past — replaying memories or regrets.`,                                                         audioPrompt: `Past — things that already happened. Your mind likes to visit the past, replaying memories or regrets.` },
            { word: 'future', definition: `Things that haven't happened yet. Your mind likes to plan, dream, or worry about the future.`,                                                             audioPrompt: `Future — things that haven't happened yet. Your mind likes to plan, dream, or worry about the future.` },
          ],
        },
        {
          type:          'magazine',
          section:       3,
          totalSections: 6,
          headline:      `Coming Back`,
          paragraphs: [
            `Mindfulness is a gentle invitation to come back. It asks: can you pay attention to what's happening right now?`,
            `Not judging it, not fixing it, not escaping it — just noticing it. That's the whole practice.`,
          ],
          image:        '/explorer-assets/inner-world/l14-s3-coming-back.png',
          imageCaption: `Mindfulness is the gentle practice of coming back to right now`,
          vocab: [
            { word: 'mindfulness', definition: `Paying attention to right now, gently and without judging it. Just noticing what's here.`,                                                             audioPrompt: `Mindfulness — paying attention to right now, gently and without judging it. Just noticing what's here.` },
            { word: 'judgment',    definition: `Deciding something is good or bad. In mindfulness, you set judgment aside — you just notice without labeling.`,                                        audioPrompt: `Judgment — deciding something is good or bad. In mindfulness, you set judgment aside. You just notice without labeling.` },
          ],
        },
        {
          type:          'magazine',
          section:       4,
          totalSections: 6,
          headline:      `Mindfulness and Happiness`,
          paragraphs: [
            `The same Harvard study found something remarkable: people were happiest when their minds were focused on what they were doing.`,
            `Even when the activity itself wasn't exciting. Being present, even during ordinary moments, was linked to greater wellbeing.`,
          ],
          image:        '/explorer-assets/inner-world/l14-s4-ordinary-moment.png',
          imageCaption: `People are happiest when their mind is where their body is — even doing ordinary things`,
          vocab: [
            { word: 'presence',  definition: `Being fully here, with your mind in the same place as your body. Presence brings calm and happiness.`,                                                   audioPrompt: `Presence — being fully here, with your mind in the same place as your body. Presence brings calm and happiness.` },
            { word: 'wellbeing', definition: `Feeling good in your mind, body, and life all together — like everything inside is in a good place.`,                                                    audioPrompt: `Wellbeing — feeling good in your mind, body, and life all together. Like everything inside is in a good place.` },
          ],
        },
        {
          type:          'magazine',
          section:       5,
          totalSections: 6,
          headline:      `Presence Is a Skill`,
          paragraphs: [
            `This means happiness isn't just about what you're doing. It's about how much of your mind is actually THERE while you're doing it.`,
            `Presence is a skill — and like all skills, it gets better with practice.`,
          ],
          image:        '/explorer-assets/inner-world/l14-s5-attention-skill.png',
          imageCaption: `Presence is a skill — every time you practice, it gets stronger`,
          vocab: [
            { word: 'skill', definition: `Something you get better at by practicing — like riding a bike, or paying attention to right now.`,                                                          audioPrompt: `Skill — something you get better at by practicing, like riding a bike or paying attention to right now.` },
            { word: 'focus', definition: `Paying attention to one thing right now, with your whole mind. Focus is what mindfulness practices.`,                                                        audioPrompt: `Focus — paying attention to one thing right now, with your whole mind. Focus is what mindfulness practices.` },
          ],
        },
        {
          type:          'magazine',
          section:       6,
          totalSections: 6,
          headline:      `Mindful Living`,
          paragraphs: [
            `Mindfulness doesn't require sitting still or closing your eyes. You can practice it anywhere.`,
            `Mindful eating means really tasting each bite. Mindful walking means feeling your feet on the ground. Mindful listening means full attention.`,
          ],
          image:        '/explorer-assets/inner-world/l14-s6-mindful-living.png',
          imageCaption: `Mindfulness can happen anywhere — eating, walking, listening, anywhere`,
          vocab: [
            { word: 'mindful eating', definition: `Really tasting each bite — noticing the flavors, textures, and feelings of eating instead of rushing.`,                                             audioPrompt: `Mindful eating — really tasting each bite. Noticing the flavors, textures, and feelings of eating instead of rushing.` },
            { word: 'ordinary',       definition: `Regular, everyday — not special. Mindfulness turns ordinary moments into rich ones.`,                                                               audioPrompt: `Ordinary — regular, everyday, not special. Mindfulness turns ordinary moments into rich ones.` },
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
              question:      `You can practice mindfulness while eating, walking, or listening.`,
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
          guideText:       `Wonderful, {name}! You've just discovered one of the most important skills a human being can practice — the ability to be right here, right now. Every time you notice your mind has wandered and bring it back, you're getting stronger. Try this with your family tonight!`,
          familyAdventure: `At dinner tonight, try one minute of mindful eating together. Everyone pays full attention to what they're tasting — no talking, no screens, just noticing. Afterwards, share what you noticed. You might be surprised how different food tastes when you're really paying attention!`,
          creativePrompt:  `Choose one ordinary activity you do every day — eating, brushing your teeth, walking somewhere — and do it mindfully just once. Bring your full attention. Notice everything. Afterwards, write down three things you noticed that you wouldn't have noticed otherwise. What did the present moment show you?`,
        },

        // PHASE 6 — CELEBRATION
        {
          type:      'celebration',
          xpEarned:  50,
          badge:     'present-moment-guide',
          badgeName: `Present Moment Guide`,
          message:   `Wonderful, {name}! You've just discovered one of the most important skills a human being can practice — the ability to be right here, right now. Every time you bring your attention back to the present, you're training a calmer, clearer, happier mind. Sage is so proud of the awareness you're building!`,
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
    fetch('/explorer-assets/inner-world/l14-s1-wandering-mind.png',   { method: 'HEAD' }),
    fetch('/explorer-assets/inner-world/l14-s2-past-future.png',      { method: 'HEAD' }),
    fetch('/explorer-assets/inner-world/l14-s3-coming-back.png',      { method: 'HEAD' }),
    fetch('/explorer-assets/inner-world/l14-s4-ordinary-moment.png',  { method: 'HEAD' }),
    fetch('/explorer-assets/inner-world/l14-s5-attention-skill.png',  { method: 'HEAD' }),
    fetch('/explorer-assets/inner-world/l14-s6-mindful-living.png',   { method: 'HEAD' }),
  ]).then(([r1, r2, r3, r4, r5, r6]) => {
    console.log(`[ASSET-CHECK-L14] wandering-mind: ${r1.ok}, past-future: ${r2.ok}, coming-back: ${r3.ok}, ordinary-moment: ${r4.ok}, attention-skill: ${r5.ok}, mindful-living: ${r6.ok}`);
  }).catch(() => {
    console.log('[ASSET-CHECK-L14] Could not verify image assets — network check failed');
  });
})();

export default innerworld_explorer_l14_screens;
