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

        // PHASE 2 — MAGAZINE STORY
        {
          type:          'magazine',
          section:       1,
          totalSections: 3,
          headline:      `Your Body Has a Barometer`,
          paragraphs: [
            `A body scan meditation is a practice where you slowly move your attention through different parts of your body — from head to toe or toe to head — noticing whatever sensations are there. Warmth, tingling, tightness, numbness, or ease. You're not trying to change anything; you're just listening.`,
            `Your body stores a great deal of information about your emotional state. Tension in the jaw often signals frustration. A heavy feeling in the chest might indicate sadness. A fluttery sensation in the stomach could be excitement or anxiety.`,
            `Your body knows things before your conscious mind does. It's like an internal barometer — always reading the weather of your inner world, even when you're not paying attention. A body scan is the skill of finally turning toward it and listening.`,
          ],
          image:        '/explorer-assets/inner-world/l15-body-barometer.png',
          imageCaption: `Your body is always sending signals — a body scan teaches you to finally hear them`,
          vocab: [
            { word: 'body scan',  definition: `A meditation practice where you slowly move your attention through different parts of your body, noticing sensations without trying to change them.`,      audioPrompt: `Body scan — a meditation practice where you slowly move your attention through different parts of your body, noticing sensations without trying to change them.` },
            { word: 'sensation',  definition: `A physical feeling in the body — like warmth, tingling, tightness, or ease — that your body uses to communicate information about your inner state.`,    audioPrompt: `Sensation — a physical feeling in the body, like warmth, tingling, tightness, or ease, that your body uses to communicate information about your inner state.` },
          ],
        },
        {
          type:          'magazine',
          section:       2,
          totalSections: 3,
          headline:      `The Science: MBSR and Dr. Kabat-Zinn`,
          paragraphs: [
            `Body scan meditation was developed as part of Mindfulness-Based Stress Reduction — MBSR — by Dr. Jon Kabat-Zinn, a scientist at the University of Massachusetts. He wanted to bring the benefits of meditation into mainstream medicine.`,
            `Extensive research on MBSR shows it reduces chronic pain, anxiety, and insomnia. It works partly by activating the parasympathetic nervous system — the body's natural "rest and recover" mode — which calms the stress response.`,
            `It also works by helping people make friends with their own bodies. Instead of fighting uncomfortable sensations or ignoring them, you learn to turn toward them with curiosity and kindness. That shift alone changes everything.`,
          ],
          image:        '/explorer-assets/inner-world/l15-mbsr-research.png',
          imageCaption: `Dr. Jon Kabat-Zinn developed MBSR — research-backed relief for pain, anxiety, and insomnia`,
          vocab: [
            { word: 'MBSR',                       definition: `Mindfulness-Based Stress Reduction — a programme developed by Dr. Jon Kabat-Zinn that uses mindfulness and body scan practices to reduce pain, anxiety, and insomnia.`,     audioPrompt: `MBSR — Mindfulness-Based Stress Reduction — a programme developed by Dr. Jon Kabat-Zinn that uses mindfulness and body scan practices to reduce pain, anxiety, and insomnia.` },
            { word: 'parasympathetic nervous system', definition: `The part of your nervous system responsible for "rest and recover" — activated by slow, mindful attention, it calms the body's stress response.`,                         audioPrompt: `Parasympathetic nervous system — the part of your nervous system responsible for rest and recover. Activated by slow, mindful attention, it calms the body's stress response.` },
          ],
        },
        {
          type:          'magazine',
          section:       3,
          totalSections: 3,
          headline:      `Gentle Attention Is a Superpower`,
          paragraphs: [
            `When you notice tension in a part of your body, something remarkable can happen: simply noticing it — without judgment, without trying to force it to change — often causes it to soften on its own. Attention is like a gentle heat lamp. The body relaxes when it feels seen.`,
            `You can practice a short body scan right now. Close your eyes or look down softly. Begin at your feet — what do you notice? Slowly move up through your legs, your belly, your chest, your shoulders, your neck, and finally your face.`,
            `At each area, just notice — warm, cool, tight, loose, tingling, or nothing at all. No judgment. No fixing. Just listening. Each time you do this, you're building one of the most powerful skills a person can have: the ability to hear what your body is telling you.`,
          ],
          image:        '/explorer-assets/inner-world/l15-gentle-attention.png',
          imageCaption: `Gentle, non-judging attention is all it takes — the body softens when it feels seen`,
          vocab: [
            { word: 'gentle attention', definition: `Turning your awareness toward a sensation or feeling with curiosity and kindness, rather than trying to fix or escape it — this often allows tension to release naturally.`, audioPrompt: `Gentle attention — turning your awareness toward a sensation or feeling with curiosity and kindness, rather than trying to fix or escape it. This often allows tension to release naturally.` },
            { word: 'body barometer',   definition: `A metaphor for the body's ability to sense and communicate your emotional state — like a weather instrument, it reads your inner climate even when you're not paying attention.`,  audioPrompt: `Body barometer — a metaphor for the body's ability to sense and communicate your emotional state, like a weather instrument that reads your inner climate even when you're not paying attention.` },
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
    fetch('/explorer-assets/inner-world/l15-body-barometer.png', { method: 'HEAD' }),
    fetch('/explorer-assets/inner-world/l15-mbsr-research.png',  { method: 'HEAD' }),
    fetch('/explorer-assets/inner-world/l15-gentle-attention.png', { method: 'HEAD' }),
  ]).then(([r1, r2, r3]) => {
    console.log(`[ASSET-CHECK-L15] body-barometer: ${r1.ok}, mbsr-research: ${r2.ok}, gentle-attention: ${r3.ok}`);
  }).catch(() => {
    console.log('[ASSET-CHECK-L15] Could not verify image assets — network check failed');
  });
})();

export default innerworld_explorer_l15_screens;
