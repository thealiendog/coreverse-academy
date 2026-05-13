// ============================================================
// COREVERSE EXPLORERS — Inner World · Lesson 15
// "Body Scan Meditation"
// Ages 6–8 | Guide: Sage | ExplorerLessonPlayer format
// ============================================================

const innerworld_explorer_l15_screens = {
  ageBand:   'explorers',
  subjectId: 'inner-world',
  guide:     'sage',
  lessons: [
    {
      id:        'iw-6-8-15',
      title:     `Body Scan Meditation`,
      duration:  15,
      xpReward:  50,
      badge:     'body-listener',
      badgeName: `Body Listener`,
      screens: [
        // PHASE 1 — WELCOME
        {
          type:      'welcome',
          guideText: `Hello, {name}! Today we're going on a very special journey — a journey through your own body. Your body is always sending you signals and messages, but most of the time we're too busy to listen. A body scan is a way of finally paying attention. Ready to tune in?`,
        },

        // PHASE 2 — MAGAZINE STORY (6 sections)
        {
          type:          'magazine',
          section:       1,
          totalSections: 6,
          headline:      `What's a Body Scan?`,
          paragraphs: [
            `A body scan meditation is a practice where you slowly move your attention through different parts of your body — from head to toe.`,
            `You notice whatever sensations are there — warmth, tingling, tightness, or ease. You're not trying to change anything. Just listening.`,
          ],
          image:        '/explorer-assets/inner-world/l15-s1-body-scan.png',
          imageCaption: `A body scan is slowly moving your attention through your body — just listening`,
          vocab: [
            { word: 'body scan',  definition: `A meditation where you slowly move your attention through every part of your body — just noticing what's there.`,                                         audioPrompt: `Body scan — a meditation where you slowly move your attention through every part of your body, just noticing what's there.` },
            { word: 'sensation',  definition: `A feeling in your body — like warmth, tingling, tightness, or ease. Sensations are what your body uses to talk to you.`,                                audioPrompt: `Sensation — a feeling in your body, like warmth, tingling, tightness, or ease. Sensations are what your body uses to talk to you.` },
          ],
        },
        {
          type:          'magazine',
          section:       2,
          totalSections: 6,
          headline:      `Your Body Stores Feelings`,
          paragraphs: [
            `Your body stores a great deal of information about your emotional state. Tension in the jaw often signals frustration.`,
            `A heavy feeling in the chest might mean sadness. A flutter in the stomach could be excitement or worry.`,
          ],
          image:        '/explorer-assets/inner-world/l15-s2-body-feelings.png',
          imageCaption: `Different feelings live in different parts of your body — and your body remembers`,
          vocab: [
            { word: 'tension', definition: `Tightness or holding in your body — often a sign of frustration, worry, or stress.`,                                                                        audioPrompt: `Tension — tightness or holding in your body, often a sign of frustration, worry, or stress.` },
            { word: 'signal',  definition: `A sign or message your body sends to tell you what you're feeling — like a tight jaw or a heavy chest.`,                                                   audioPrompt: `Signal — a sign or message your body sends to tell you what you're feeling, like a tight jaw or a heavy chest.` },
          ],
        },
        {
          type:          'magazine',
          section:       3,
          totalSections: 6,
          headline:      `Your Inner Barometer`,
          paragraphs: [
            `Your body knows things before your conscious mind does. It's like an internal barometer — always reading the weather of your inner world.`,
            `A body scan is the skill of finally turning toward it, and listening to what your body has been trying to tell you.`,
          ],
          image:        '/explorer-assets/inner-world/l15-s3-inner-barometer.png',
          imageCaption: `Your body is an inner barometer — always reading the weather of your inner world`,
          vocab: [
            { word: 'barometer',      definition: `A tool that reads something invisible — like the weather. Your body works as a barometer for your feelings.`,                                        audioPrompt: `Barometer — a tool that reads something invisible, like the weather. Your body works as a barometer for your feelings.` },
            { word: 'conscious mind', definition: `The thinking part of you that knows what's happening — but your body often knows what you feel before your conscious mind does.`,                    audioPrompt: `Conscious mind — the thinking part of you that knows what's happening. But your body often knows what you feel before your conscious mind does.` },
          ],
        },
        {
          type:          'magazine',
          section:       4,
          totalSections: 6,
          headline:      `The Science Behind It`,
          paragraphs: [
            `Body scan meditation was developed as part of Mindfulness-Based Stress Reduction — MBSR — by Dr. Jon Kabat-Zinn.`,
            `Research shows MBSR reduces chronic pain, anxiety, and insomnia by activating the body's natural "rest and recover" mode.`,
          ],
          image:        '/explorer-assets/inner-world/l15-s4-mbsr-science.png',
          imageCaption: `Body scan meditation is proven science — used in hospitals and schools worldwide`,
          vocab: [
            { word: 'MBSR',    definition: `Mindfulness-Based Stress Reduction — a science-based program developed by Dr. Jon Kabat-Zinn that uses the body scan meditation.`,                         audioPrompt: `MBSR — Mindfulness-Based Stress Reduction. A science-based program developed by Dr. Jon Kabat-Zinn that uses the body scan meditation.` },
            { word: 'chronic', definition: `Lasting for a long time. Chronic pain is pain that doesn't go away quickly. Body scan helps soften it.`,                                                   audioPrompt: `Chronic — lasting for a long time. Chronic pain is pain that doesn't go away quickly. Body scan helps soften it.` },
          ],
        },
        {
          type:          'magazine',
          section:       5,
          totalSections: 6,
          headline:      `Notice and Soften`,
          paragraphs: [
            `When you notice tension in your body, something remarkable happens. Simply noticing it — without trying to change it — often causes it to soften.`,
            `Attention is like a gentle warmth. The body relaxes when it feels seen.`,
          ],
          image:        '/explorer-assets/inner-world/l15-s5-tension-softens.png',
          imageCaption: `Tension softens on its own when it feels seen — attention is gentle warmth`,
          vocab: [
            { word: 'soften',    definition: `To become gentler and less tight. Tension softens when you notice it without trying to force it away.`,                                                   audioPrompt: `Soften — to become gentler and less tight. Tension softens when you notice it without trying to force it away.` },
            { word: 'attention', definition: `Where you put your mind. Attention has a quiet healing power — your body relaxes when it feels seen.`,                                                    audioPrompt: `Attention — where you put your mind. Attention has a quiet healing power. Your body relaxes when it feels seen.` },
          ],
        },
        {
          type:          'magazine',
          section:       6,
          totalSections: 6,
          headline:      `Try It Now`,
          paragraphs: [
            `Close your eyes softly. Begin at your feet — what do you notice? Slowly move up through your legs, belly, chest, shoulders, neck, and face.`,
            `At each area, just notice — warm, cool, tight, loose. No judgment. No fixing. Just listening.`,
          ],
          image:        '/explorer-assets/inner-world/l15-s6-listening.png',
          imageCaption: `No judgment, no fixing — just listening to each part of your body`,
          vocab: [
            { word: 'relax',     definition: `To let go of holding and tightness. Your body relaxes naturally when you listen to it gently.`,                                                           audioPrompt: `Relax — to let go of holding and tightness. Your body relaxes naturally when you listen to it gently.` },
            { word: 'listening', definition: `Paying attention to your body without trying to change anything. True listening is gentle and curious.`,                                                  audioPrompt: `Listening — paying attention to your body without trying to change anything. True listening is gentle and curious.` },
          ],
        },

        // PHASE 3 — INTERACTIVE
        {
          type:          'interactive',
          activityType:  'drag-match',
          instruction:   `Tap each card, then tap whether it's body listening or body ignoring!`,
          guideText:     `Your body is always sending signals — but are you tuned in or tuned out? Some of these moments show someone listening to their body, and some show someone ignoring it. Tap each card and sort it!`,
          columnHeaders: [`The Moment`, `Listening or Ignoring?`],
          items: [
            { image: 'l15-game-shoulders.png', label: `Noticing tightness in your shoulders during a hard test and taking a slow breath.`,                     correctMatch: 'listening', objectPosition: 'center 50%', matchPhrase: `That's body listening! You noticed tension in your shoulders and responded with care. That's exactly what a body scan teaches you to do.` },
            { image: 'l15-game-eating.png',    label: `Eating lunch while scrolling a screen, not noticing if you're still hungry.`,                          correctMatch: 'ignoring',  objectPosition: 'center 50%', matchPhrase: `Body ignoring — your mind was somewhere else entirely. Mindful eating means actually noticing what your body is telling you as you eat.` },
            { image: 'l15-game-belly.png',     label: `Feeling a flutter in your belly before a performance and recognising it as excitement.`,               correctMatch: 'listening', objectPosition: 'center 50%', matchPhrase: `Beautiful body listening! You felt the sensation and named it — that's your inner barometer working perfectly. The body always knows.` },
            { image: 'l15-game-headache.png',  label: `Pushing through a headache for hours without stopping to check in with your body.`,                    correctMatch: 'ignoring',  objectPosition: 'center 50%', matchPhrase: `Body ignoring. Your body was sending a signal for hours and you missed it. A quick body scan would have caught that much earlier!` },
          ],
          buckets: [
            { id: 'ignoring',  label: `📵 Body Ignoring`, color: '#F59E0B' },
            { id: 'listening', label: `🎧 Body Listening`, color: '#34D399' },
          ],
        },

        // PHASE 4 — MASTERY QUIZ
        {
          type:      'quiz',
          guideText: `Quiz time, {name}! Let's see what you've learned about body scan meditation. Answer all 6 questions to earn your Body Listener badge!`,
          questions: [
            {
              format:       'multiple-choice',
              question:     `What is the main goal of a body scan meditation?`,
              options:      [`To change every uncomfortable sensation you notice`, `To move attention through the body and simply notice sensations without judgment`, `To fall asleep as quickly as possible`, `To strengthen your muscles through visualisation`],
              correctIndex: 1,
            },
            {
              format:       'multiple-choice',
              question:     `Who developed body scan meditation as part of MBSR?`,
              options:      [`Dr. Robert Emmons`, `Dr. Andrew Weil`, `Dr. Jon Kabat-Zinn`, `Dr. Carol Dweck`],
              correctIndex: 2,
            },
            {
              format:        'true-false',
              question:      `Tension in the jaw often signals frustration.`,
              correctAnswer: true,
            },
            {
              format:       'multiple-choice',
              question:     `What happens to tension in the body when you simply pay gentle, non-judging attention to it?`,
              options:      [`It gets much worse`, `It always stays exactly the same`, `It often softens and releases on its own`, `It moves to a different part of the body`],
              correctIndex: 2,
            },
            {
              format:       'fill-blank',
              question:     `MBSR stands for Mindfulness-Based ___ Reduction.`,
              options:      [`Stress`, `Sleep`, `Strength`, `Speed`],
              correctIndex: 0,
            },
            {
              format:       'multiple-choice',
              question:     `According to research, what can a body scan help with?`,
              options:      [`Only physical fitness`, `Chronic pain, anxiety, and insomnia`, `Learning languages faster`, `Improving eyesight`],
              correctIndex: 1,
            },
          ],
        },

        // PHASE 5 — REAL-WORLD CONNECTION
        {
          type:            'real-world',
          guideText:       `Beautiful work, {name}! You just listened to your body with real care and attention. Your body has been talking to you your whole life — and now you're learning to listen. Try this with your family tonight!`,
          familyAdventure: `Do a five-minute family body scan before bed tonight. One person guides the others through slowly scanning from feet to head, noticing sensations without trying to change them. Afterwards, share what you each noticed — you might be surprised how different everyone's experience is!`,
          creativePrompt:  `Right now, do a short body scan from your feet to your face. At each area, write down one word for what you notice — warm, tight, tingly, heavy, easy, nothing. When you're done, look at your list. What is your body telling you today? Is there anywhere that needs a little extra gentle attention?`,
        },

        // PHASE 6 — CELEBRATION
        {
          type:      'celebration',
          xpEarned:  50,
          badge:     'body-listener',
          badgeName: `Body Listener`,
          message:   `Beautiful work, {name}! You just listened to your body with real care and attention. Your body has been talking to you your whole life — and now you're learning to listen. Sage loves watching you become so wise in the language of your own inner world!`,
        },
      ],
    },
  ],
};

// Log on module load — confirms lesson wired correctly + verifies image assets at runtime
(() => {
  const l    = innerworld_explorer_l15_screens.lessons[0];
  const mags = l.screens.filter(s => s.type === 'magazine').length;
  const game = l.screens.find(s => s.type === 'interactive')?.items?.length || 0;
  const quiz = l.screens.find(s => s.type === 'quiz')?.questions?.length || 0;
  console.log(`[LESSON-L15] Loaded: "Body Scan Meditation" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
  Promise.all([
    fetch('/explorer-assets/inner-world/l15-s1-body-scan.png',       { method: 'HEAD' }),
    fetch('/explorer-assets/inner-world/l15-s2-body-feelings.png',   { method: 'HEAD' }),
    fetch('/explorer-assets/inner-world/l15-s3-inner-barometer.png', { method: 'HEAD' }),
    fetch('/explorer-assets/inner-world/l15-s4-mbsr-science.png',    { method: 'HEAD' }),
    fetch('/explorer-assets/inner-world/l15-s5-tension-softens.png', { method: 'HEAD' }),
    fetch('/explorer-assets/inner-world/l15-s6-listening.png',       { method: 'HEAD' }),
  ]).then(([r1, r2, r3, r4, r5, r6]) => {
    console.log(`[ASSET-CHECK-L15] body-scan: ${r1.ok}, body-feelings: ${r2.ok}, inner-barometer: ${r3.ok}, mbsr-science: ${r4.ok}, tension-softens: ${r5.ok}, listening: ${r6.ok}`);
  }).catch(() => {
    console.log('[ASSET-CHECK-L15] Could not verify image assets — network check failed');
  });
})();

export default innerworld_explorer_l15_screens;
