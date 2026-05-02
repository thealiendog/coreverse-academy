// ============================================================
// COREVERSE EXPLORERS — Inner World · Lesson 6
// "Breathing Techniques for Big Feelings"
// Ages 6–8 | Guide: Sage | ExplorerLessonPlayer format
// ============================================================

const innerworld_explorer_l06_screens = {
  ageBand:   'explorers',
  subjectId: 'inner-world',
  guide:     'sage',
  lessons: [
    {
      id:        'iw-6-8-06',
      title:     'Breathing Techniques for Big Feelings',
      duration:  15,
      xpReward:  50,
      badge:     'breath-master',
      badgeName: 'Breath Master',
      screens: [
        // PHASE 1 — WELCOME
        {
          type:      'welcome',
          guideText: "Hi {name}! You carry one of the most powerful calming tools in the world everywhere you go — you take it to school, to sleep, everywhere. It's your breath. Today we're going to learn how to use it on purpose. Ready to turn your breath into a superpower?",
        },

        // PHASE 2 — MAGAZINE STORY
        {
          type:          'magazine',
          section:       1,
          totalSections: 3,
          headline:      'Your Breath Can Change How You Feel',
          paragraphs: [
            'Your breathing is connected to your nervous system in a remarkable way. When you\'re stressed, your breath becomes fast and shallow. When you\'re calm, it becomes slow and deep.',
            'But here\'s the amazing part: you can flip this relationship around. By intentionally breathing slowly, you can actually signal your nervous system to calm down.',
            'You don\'t need anything special to do this — just your breath, which is always with you. That makes it one of the most powerful tools you\'ll ever have.',
          ],
          image:        '/explorer-assets/inner-world/l06-vagus-nerve.png',
          imageCaption: 'Slow breathing sends a calm signal to your nervous system',
          vocab: [
            { word: 'nervous system',   definition: 'The network of your brain, spine, and nerves that controls how you feel and respond — including your calm and stress responses.', audioPrompt: 'Nervous system — the network of your brain, spine, and nerves that controls how you feel and respond, including your calm and stress responses.' },
            { word: 'intentionally',    definition: 'Doing something on purpose, with awareness — the opposite of doing it by accident.',                                                audioPrompt: 'Intentionally — doing something on purpose, with awareness. The opposite of doing it by accident.' },
          ],
        },
        {
          type:          'magazine',
          section:       2,
          totalSections: 3,
          headline:      'Box Breathing: The Square Breath',
          paragraphs: [
            'Box breathing is a technique used by Navy SEALs, athletes, and surgeons to stay calm under pressure. You breathe in for 4 counts, hold for 4, breathe out for 4, hold for 4 — drawing a square with your breath.',
            'Studies show this activates the parasympathetic nervous system — your body\'s "rest and relax" system. It\'s the opposite of the stress response, and your breath is the switch.',
            'The best part? You can do box breathing anywhere — before a test, when you feel overwhelmed, or anytime a big feeling shows up. Four counts in, four hold, four out, four hold.',
          ],
          image:        '/explorer-assets/inner-world/l06-box-breathing.png',
          imageCaption: 'Box breathing — 4 counts in, hold, out, hold',
          vocab: [
            { word: 'box breathing',               definition: 'A breathing technique where you inhale, hold, exhale, and hold — each for 4 counts — drawing a square with your breath.', audioPrompt: 'Box breathing — a breathing technique where you inhale, hold, exhale, and hold, each for 4 counts, drawing a square with your breath.' },
            { word: 'parasympathetic nervous system', definition: 'The part of your nervous system that activates your "rest and relax" response — the calm after the storm.',              audioPrompt: 'Parasympathetic nervous system — the part of your nervous system that activates your rest and relax response, the calm after the storm.' },
          ],
        },
        {
          type:          'magazine',
          section:       3,
          totalSections: 3,
          headline:      'Two More Powerful Breathing Tools',
          paragraphs: [
            'Belly breathing — also called diaphragmatic breathing — is breathing into your belly instead of your chest. Let your belly rise like a balloon. Your diaphragm, a large muscle under your lungs, fully contracts and helps you take in much more oxygen.',
            'The 4-7-8 breath was developed by Dr. Andrew Weil and is especially helpful for falling asleep or calming anxiety quickly: breathe in for 4 counts, hold for 7, breathe out for 8.',
            'The long exhale in 4-7-8 activates the vagus nerve — a nerve that runs from your brain all the way down through your body and is the main pathway of your calm response. The longer you breathe out, the more calm your body feels.',
          ],
          image:        '/explorer-assets/inner-world/l06-belly-breath.png',
          imageCaption: 'Belly breathing + 4-7-8 — two more tools in your calm toolkit',
          vocab: [
            { word: 'diaphragm',  definition: 'A large dome-shaped muscle under your lungs that helps you breathe deeply — it fully expands during belly breathing.',        audioPrompt: 'Diaphragm — a large dome-shaped muscle under your lungs that helps you breathe deeply. It fully expands during belly breathing.' },
            { word: 'vagus nerve', definition: 'A long nerve running from your brain through your body that carries the calm signal — activated by slow, long exhales.',        audioPrompt: 'Vagus nerve — a long nerve running from your brain through your body that carries the calm signal, activated by slow, long exhales.' },
          ],
        },

        // PHASE 3 — INTERACTIVE
        {
          type:          'interactive',
          activityType:  'drag-match',
          instruction:   'Tap a breathing card, then tap which technique it describes!',
          guideText:     "You've learned four amazing breathing tools! Each card describes one of them. Tap the card, then match it to the right technique. You know these — trust yourself!",
          columnHeaders: ['The Description', 'Which Technique?'],
          items: [
            { image: 'l06-game-box.png',      label: 'In 4, hold 4, out 4, hold 4',         correctMatch: 'box',      objectPosition: 'center 50%', matchPhrase: "That's box breathing — the square breath used by Navy SEALs to stay calm under pressure!" },
            { image: 'l06-game-belly.png',     label: 'Breathe so your tummy rises like a balloon', correctMatch: 'belly',    objectPosition: 'center 50%', matchPhrase: "Yes! That's belly breathing — your diaphragm fully expands and you take in way more oxygen!" },
            { image: 'l06-game-478.png',       label: 'In 4, hold 7, out 8 — great for sleep', correctMatch: '478',      objectPosition: 'center 50%', matchPhrase: "Exactly! That's the 4-7-8 breath. The long exhale activates your vagus nerve and brings deep calm!" },
            { image: 'l06-game-slowdown.png',  label: 'Slow, calm breaths anywhere, anytime', correctMatch: 'slowdown', objectPosition: 'center 50%', matchPhrase: "Right! Slow breathing on purpose sends a calm signal to your nervous system. You're in control!" },
          ],
          buckets: [
            { id: 'box',      label: '📦 Box Breath',   color: '#A78BFA' },
            { id: 'belly',    label: '🎈 Belly Breath', color: '#60A5FA' },
            { id: '478',      label: '✨ 4-7-8 Breath', color: '#2DD4BF' },
            { id: 'slowdown', label: '🌊 Slow Down',    color: '#34D399' },
          ],
        },

        // PHASE 4 — MASTERY QUIZ
        {
          type:      'quiz',
          guideText: "Quiz time, {name}! Let's see what you've learned about breathing techniques. Answer all 6 questions to earn your Breath Master badge!",
          questions: [
            {
              format:       'multiple-choice',
              question:     'How does slow breathing help calm big feelings?',
              options:      ['It distracts you from the feeling', 'It signals your nervous system to activate the calm response', 'It makes the feeling completely disappear', "It's only a myth"],
              correctIndex: 1,
            },
            {
              format:       'multiple-choice',
              question:     'In box breathing, what is the count for each side of the "box"?',
              options:      ['2 counts', '3 counts', '4 counts', '8 counts'],
              correctIndex: 2,
            },
            {
              format:        'true-false',
              question:      'Belly breathing is also called diaphragmatic breathing.',
              correctAnswer: true,
            },
            {
              format:       'multiple-choice',
              question:     'What does the parasympathetic nervous system do?',
              options:      ["Speeds up your heart when you're scared", 'Helps your body fight infections', 'Activates your "rest and relax" response', 'Controls your memory'],
              correctIndex: 2,
            },
            {
              format:       'fill-blank',
              question:     'In 4-7-8 breathing, you breathe in for 4, hold for 7, and breathe out for ___ counts.',
              options:      ['8', '4', '6', '10'],
              correctIndex: 0,
            },
            {
              format:       'multiple-choice',
              question:     'Who uses box breathing to stay calm under pressure?',
              options:      ['Only young children', 'Navy SEALs, athletes, and surgeons', 'Only people with anxiety disorders', "Nobody — it's fictional"],
              correctIndex: 1,
            },
          ],
        },

        // PHASE 5 — REAL-WORLD CONNECTION
        {
          type:            'real-world',
          guideText:       "Incredible, {name}! You've just mastered tools that elite athletes and professionals rely on every day. Your breath is always with you — and now you know how to use it as your superpower. Try this with your family tonight!",
          familyAdventure: "Before bed tonight, do box breathing together as a family: breathe in for 4 counts, hold for 4, breathe out for 4, hold for 4. Repeat three times. Notice how everyone feels before and after.",
          creativePrompt:  "Try box breathing right now: breathe in slowly for 4 counts... hold for 4... breathe out for 4... hold for 4. Do this three times. Notice how your body feels before and after. What changed?",
        },

        // PHASE 6 — CELEBRATION
        {
          type:      'celebration',
          xpEarned:  50,
          badge:     'breath-master',
          badgeName: 'Breath Master',
          message:   "Incredible, {name}! You've just mastered tools that elite athletes and professionals rely on every day. Your breath is always with you — and now you know how to use it as your superpower. Sage is so proud of your calm and focused mind!",
        },
      ],
    },
  ],
};

// Log on module load — confirms lesson wired correctly + verifies image assets at runtime
(() => {
  const l    = innerworld_explorer_l06_screens.lessons[0];
  const mags = l.screens.filter(s => s.type === 'magazine').length;
  const game = l.screens.find(s => s.type === 'interactive')?.items?.length || 0;
  const quiz = l.screens.find(s => s.type === 'quiz')?.questions?.length || 0;
  console.log(`[LESSON-L6] Loaded: "${l.title}" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
  Promise.all([
    fetch('/explorer-assets/inner-world/l06-vagus-nerve.png',  { method: 'HEAD' }),
    fetch('/explorer-assets/inner-world/l06-box-breathing.png', { method: 'HEAD' }),
    fetch('/explorer-assets/inner-world/l06-belly-breath.png',  { method: 'HEAD' }),
  ]).then(([r1, r2, r3]) => {
    console.log(`[ASSET-CHECK-L6] vagus-nerve: ${r1.ok}, box-breathing: ${r2.ok}, belly-breath: ${r3.ok}`);
  }).catch(() => {
    console.log('[ASSET-CHECK-L6] Could not verify image assets — network check failed');
  });
})();

export default innerworld_explorer_l06_screens;
