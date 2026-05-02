// ============================================================
// COREVERSE EXPLORERS — Inner World · Lesson 3
// "The Worry Monster and How to Tame It"
// Ages 6–8 | Guide: Sage | ExplorerLessonPlayer format
// ============================================================

const innerworld_explorer_l03_screens = {
  ageBand:   'explorers',
  subjectId: 'inner-world',
  guide:     'sage',
  lessons: [
    {
      id:        'iw-6-8-03',
      title:     'The Worry Monster and How to Tame It',
      duration:  15,
      xpReward:  50,
      badge:     'worry-tamer',
      badgeName: 'Worry Tamer',
      screens: [
        // PHASE 1 — WELCOME
        {
          type:      'welcome',
          guideText: "Hi {name}! Today we're going to meet the Worry Monster — a part of your mind that loves to imagine scary things that might happen. Don't worry though, because once you understand it, you'll know exactly how to tame it. Ready?",
        },

        // PHASE 2 — MAGAZINE STORY
        {
          type:          'magazine',
          section:       1,
          totalSections: 3,
          headline:      'Meet the Worry Alarm',
          paragraphs: [
            'Worry is your brain\'s way of trying to protect you — it\'s actually trying to help.',
            'A tiny part of your brain called the amygdala scans for danger all the time, like a little security guard.',
            'When it thinks something bad might happen, it sends an alarm — and that alarm feels like worry or anxiety in your body.',
          ],
          image:        '/explorer-assets/inner-world/l03-amygdala-alarm.png',
          imageCaption: 'The amygdala — your brain\'s tiny security guard',
          vocab: [
            { word: 'amygdala',  definition: 'A tiny part of your brain that acts like a security alarm — it scans for danger to keep you safe.',                  audioPrompt: 'Amygdala — a tiny part of your brain that acts like a security alarm, scanning for danger to keep you safe.' },
            { word: 'anxiety',   definition: 'A worried, uneasy feeling in your body — like butterflies mixed with a fast heartbeat.',                              audioPrompt: 'Anxiety — a worried, uneasy feeling in your body, like butterflies mixed with a fast heartbeat.' },
          ],
        },
        {
          type:          'magazine',
          section:       2,
          totalSections: 3,
          headline:      'Real Danger vs. Imagined Danger',
          paragraphs: [
            'The tricky part is that the amygdala can\'t always tell the difference between a real danger and an imagined one. It worries about tigers even when there are no tigers nearby.',
            'It also worries about tomorrow\'s test as if it\'s happening right now — treating future fears as present emergencies.',
            'Research found that about 85% of what people worried about either didn\'t happen, or they handled it better than expected. Your worry brain overestimates danger.',
          ],
          image:        '/explorer-assets/inner-world/l03-real-vs-imagined.png',
          imageCaption: 'Real danger vs. imagined danger — the amygdala can\'t always tell them apart',
          vocab: [
            { word: 'imagined danger', definition: 'A fear about something that isn\'t actually happening right now — like worrying about a storm on a sunny day.',    audioPrompt: 'Imagined danger — a fear about something that isn\'t actually happening right now, like worrying about a storm on a sunny day.' },
            { word: 'overestimate',    definition: 'To think something is bigger or more likely than it really is.',                                                    audioPrompt: 'Overestimate — to think something is bigger or more likely than it really is.' },
          ],
        },
        {
          type:          'magazine',
          section:       3,
          totalSections: 3,
          headline:      'Three Ways to Tame the Worry Monster',
          paragraphs: [
            'There are three powerful ways to tame worry. First: NAME it — say "I notice I\'m feeling worried." Just naming it turns on your thinking brain and turns down the alarm.',
            'Second: BREATHE — slow, deep breaths send a signal to your nervous system that you\'re safe. The alarm quiets when your body feels calm.',
            'Third: ASK — "Is this real right now?" If the worry is about something that isn\'t happening yet, gently remind yourself you\'re okay. And if it feels too big, talk to a trusted adult.',
          ],
          image:        '/explorer-assets/inner-world/l03-three-tools.png',
          imageCaption: 'Name it, breathe, ask — three tools to tame the Worry Monster',
          vocab: [
            { word: 'nervous system', definition: 'The network inside your body — your brain, spine, and nerves — that controls how you feel and react.',            audioPrompt: 'Nervous system — the network inside your body, your brain, spine, and nerves, that controls how you feel and react.' },
            { word: 'tame',           definition: 'To calm something wild or scary so it has less power over you.',                                                    audioPrompt: 'Tame — to calm something wild or scary so it has less power over you.' },
          ],
        },

        // PHASE 3 — INTERACTIVE
        {
          type:          'interactive',
          activityType:  'drag-match',
          instruction:   'Tap a worry card, then tap how to tame it!',
          guideText:     "Now let's practise taming worries! Each card shows something that might make you worry. Match it to the right taming tool — not real, name it, breathe, or ask if it's real!",
          columnHeaders: ['The Worry', 'Taming Tool'],
          items: [
            { image: 'l03-game-tiger.png',     label: 'A tiger might get me!',         correctMatch: 'not-real', objectPosition: 'center 50%', matchPhrase: "Right! There's no tiger here — that worry isn't real right now!"              },
            { image: 'l03-game-heartbeat.png', label: 'My heart is beating fast',      correctMatch: 'name-it', objectPosition: 'center 50%', matchPhrase: "Yes! When worry shows up in your body, name what's happening: 'I'm noticing worry!'" },
            { image: 'l03-game-breathe.png',   label: 'My tummy feels tight and fast', correctMatch: 'breathe', objectPosition: 'center 50%', matchPhrase: "Exactly! Slow breathing tells your nervous system: you are safe!"               },
            { image: 'l03-game-future.png',    label: 'What if something bad happens tomorrow?', correctMatch: 'ask-it', objectPosition: 'center 50%', matchPhrase: "Perfect! Ask yourself: is this real right now? Probably not yet!"        },
          ],
          buckets: [
            { id: 'not-real', label: 'Not Real Yet',   color: '#A78BFA' },
            { id: 'name-it',  label: 'Name It',        color: '#F59E0B' },
            { id: 'breathe',  label: 'Breathe',        color: '#34D399' },
            { id: 'ask-it',   label: 'Ask: Real Now?', color: '#60A5FA' },
          ],
        },

        // PHASE 4 — MASTERY QUIZ
        {
          type:      'quiz',
          guideText: "Quiz time, {name}! Let's see what you've learned about the Worry Monster. Answer all 6 questions to earn your Worry Tamer badge!",
          questions: [
            {
              format:       'multiple-choice',
              question:     'What is the job of the worry brain?',
              options:      ['To make you feel bad on purpose', 'To make you worry about everything all the time', 'To scan for danger and keep you safe', 'To help you sleep'],
              correctIndex: 2,
            },
            {
              format:       'multiple-choice',
              question:     'What part of the brain sends the worry alarm?',
              options:      ['The prefrontal cortex', 'The amygdala', 'The cerebellum', 'The hippocampus'],
              correctIndex: 1,
            },
            {
              format:        'true-false',
              question:      'Most things we worry about never actually happen.',
              correctAnswer: true,
            },
            {
              format:       'multiple-choice',
              question:     'According to research, what happens to most things people worry about?',
              options:      ['They all come true', 'They get worse', 'Most never happen or are handled better than expected', 'They cause permanent damage'],
              correctIndex: 2,
            },
            {
              format:       'fill-blank',
              question:     'Slow breaths send a signal to your nervous system that you are ___.',
              options:      ['safe', 'tired', 'strong', 'awake'],
              correctIndex: 0,
            },
            {
              format:       'multiple-choice',
              question:     'What is one helpful question to ask when a worry appears?',
              options:      ['"Why is this happening to me?"', '"Is this real right now?"', '"Will this last forever?"', '"Who can I blame?"'],
              correctIndex: 1,
            },
          ],
        },

        // PHASE 5 — REAL-WORLD CONNECTION
        {
          type:            'real-world',
          guideText:       "Amazing work, {name}! You now understand the Worry Monster — and you have real tools to tame it. Share what you learned with your family — they might need these tools too!",
          familyAdventure: "Each person shares one small worry and one thing that helps them feel better. Try the 'worry box' — write worries on paper and place them in a box to revisit later. Often they never even need to be opened.",
          creativePrompt:  "Think of something you've been worrying about. Write it down or say it out loud. Then ask yourself: 'Is this happening right now, or am I imagining something in the future?' Take three slow breaths, and notice if the worry softens a little.",
        },

        // PHASE 6 — CELEBRATION
        {
          type:      'celebration',
          xpEarned:  50,
          badge:     'worry-tamer',
          badgeName: 'Worry Tamer',
          message:   "You did it, {name}! You now understand the Worry Monster — and you have real tools to tame it. Remember: worry is just your brain trying to help, and you're in charge of how you respond. Sage believes in you completely!",
        },
      ],
    },
  ],
};

// Log on module load — confirms lesson wired correctly + verifies image assets at runtime
(() => {
  const l    = innerworld_explorer_l03_screens.lessons[0];
  const mags = l.screens.filter(s => s.type === 'magazine').length;
  const game = l.screens.find(s => s.type === 'interactive')?.items?.length || 0;
  const quiz = l.screens.find(s => s.type === 'quiz')?.questions?.length || 0;
  console.log(`[LESSON-L3] Loaded: "${l.title}" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
  Promise.all([
    fetch('/explorer-assets/inner-world/l03-amygdala-alarm.png',  { method: 'HEAD' }),
    fetch('/explorer-assets/inner-world/l03-real-vs-imagined.png', { method: 'HEAD' }),
    fetch('/explorer-assets/inner-world/l03-three-tools.png',     { method: 'HEAD' }),
  ]).then(([r1, r2, r3]) => {
    console.log(`[ASSET-CHECK-L3] amygdala-alarm: ${r1.ok}, real-vs-imagined: ${r2.ok}, three-tools: ${r3.ok}`);
  }).catch(() => {
    console.log('[ASSET-CHECK-L3] Could not verify image assets — network check failed');
  });
})();

export default innerworld_explorer_l03_screens;
