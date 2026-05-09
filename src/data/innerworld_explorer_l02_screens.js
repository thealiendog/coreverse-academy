// ============================================================
// COREVERSE EXPLORERS — Inner World · Lesson 2
// "Thoughts Are Not Facts"
// Ages 6–8 | Guide: Sage | ExplorerLessonPlayer format
// ============================================================

const innerworld_explorer_l02_screens = {
  ageBand:   'explorers',
  subjectId: 'inner-world',
  guide:     'sage',
  lessons: [
    {
      id:        'iw-6-8-02',
      title:     'Thoughts Are Not Facts',
      duration:  15,
      xpReward:  50,
      badge:     'thought-observer',
      badgeName: 'Thought Observer',
      screens: [
        // PHASE 1 — WELCOME
        {
          type:      'welcome',
          guideText: "Welcome back, {name}! Today we're going to explore one of the most mind-bending ideas in all of inner science. Here's a question: have you ever thought something scary was going to happen — and then it didn't? Today you'll discover why. Because the thoughts in your head are not always telling you the truth. Ready to become a Thought Observer?",
        },

        // PHASE 2 — MAGAZINE STORY
        {
          type:          'magazine',
          section:       1,
          totalSections: 3,
          headline:      'Your Brain Thinks Non-Stop',
          paragraphs: [
            'Your brain creates thousands of thoughts every single day — it never stops working.',
            'Its job is to keep you safe, plan ahead, and understand the world around you.',
            'But here\'s the big secret: not all of those thoughts are true. Your brain sometimes guesses wrong.',
          ],
          image:        '/explorer-assets/inner-world/l02-thought-stream.png',
          imageCaption: 'Your brain produces thousands of thoughts every day — but not all of them are true',
          vocab: [
            { word: 'thought', definition: 'A mental message your brain creates — like a little note it sends you. Thoughts can be true or false!',   audioPrompt: 'Thought — a mental message your brain creates, like a little note it sends you. Thoughts can be true or false!' },
            { word: 'fact',    definition: 'Something that is definitely true — not just a guess or a feeling. You can check a fact.',                audioPrompt: 'Fact — something that is definitely true, not just a guess or a feeling. You can check a fact.' },
          ],
        },
        {
          type:          'magazine',
          section:       2,
          totalSections: 3,
          headline:      'A Thought Is Not a Fact',
          paragraphs: [
            'A thought is just a mental event — like a cloud passing through the sky of your mind. It comes, floats through, and leaves.',
            'Just because a thought appears doesn\'t mean it\'s a fact. "I\'m going to fail this" is a thought. "Nobody likes me" is a thought.',
            'They can feel real and loud — but thoughts aren\'t always facts.',
          ],
          image:        '/explorer-assets/inner-world/l02-clouds-passing.png',
          imageCaption: 'Thoughts pass through your mind like clouds through the sky',
          vocab: [
            { word: 'mental event', definition: 'Something that happens inside your mind — like a thought or feeling, not something you can touch.',        audioPrompt: 'Mental event — something that happens inside your mind, like a thought or feeling, not something you can touch.' },
            { word: 'believe',      definition: 'To think something is true — but beliefs can sometimes be wrong, especially when they are just thoughts!', audioPrompt: 'Believe — to think something is true. But beliefs can sometimes be wrong, especially when they are just thoughts!' },
          ],
        },
        {
          type:          'magazine',
          section:       3,
          totalSections: 3,
          headline:      'Watch Your Thoughts Like a Scientist',
          paragraphs: [
            'Scientists call this skill "thought watching." It means making space between you and your thoughts.',
            'Try this: when a worry pops up, say "I notice I\'m having the thought that..." first. Suddenly the thought has less power over you.',
            'When you watch your thoughts this way, you become like a scientist studying the weather — curious, calm, and not caught in the storm.',
          ],
          image:        '/explorer-assets/inner-world/l02-observer-self.png',
          imageCaption: 'You can watch your thoughts from a safe distance — like a scientist watching weather',
          vocab: [
            { word: 'observer',         definition: 'The part of you that can watch your thoughts from a safe distance — like a scientist watching the weather.',                         audioPrompt: 'Observer — the part of you that can watch your thoughts from a safe distance, like a scientist watching the weather.' },
            { word: 'thought watching', definition: 'Noticing your thoughts without being pulled into them or believing every single one — making space between you and the thought.',   audioPrompt: 'Thought watching — noticing your thoughts without being pulled into them or believing every single one.' },
          ],
        },

        // PHASE 3 — INTERACTIVE
        {
          type:          'interactive',
          activityType:  'drag-match',
          instruction:   'Tap a thought, then tap what kind of thought it is!',
          guideText:     "Now let's play thought detective! Some thoughts are real facts, some are worries, some are unkind things we say to ourselves, and some are real feelings. Can you sort them out?",
          columnHeaders: ['The Thought', 'Kind of Thought'],
          items: [
            { image: 'l02-game-worry.png',   label: "I'm going to fail this", correctMatch: 'worry',   objectPosition: 'center 50%', matchPhrase: "Right! That's a worry thought — it hasn't happened yet, and might not!"              },
            { image: 'l02-game-unkind.png',  label: "I'm not good enough",    correctMatch: 'unkind',  objectPosition: 'center 50%', matchPhrase: "Yes! That's an unkind thought about yourself — and it is NOT a fact!"              },
            { image: 'l02-game-fact.png',    label: "The sky is blue",        correctMatch: 'fact',    objectPosition: 'center 50%', matchPhrase: "Correct! That's a real fact — you can look up and check it right now!"             },
            { image: 'l02-game-feeling.png', label: "I feel excited",         correctMatch: 'feeling', objectPosition: 'center 50%', matchPhrase: "Exactly! That's a real feeling — feelings are always true, even when thoughts aren't!" },
          ],
          buckets: [
            { id: 'worry',   label: 'Worry Thought',  color: '#F59E0B' },
            { id: 'unkind',  label: 'Unkind Thought', color: '#EF4444' },
            { id: 'fact',    label: 'Real Fact',       color: '#34D399' },
            { id: 'feeling', label: 'Real Feeling',    color: '#60A5FA' },
          ],
        },

        // PHASE 4 — MASTERY QUIZ
        {
          type:      'quiz',
          guideText: "Quiz time, {name}! Let's see what you've learned about thoughts. Answer all 6 questions to earn your Thought Observer badge!",
          questions: [
            {
              format:       'multiple-choice',
              question:     'What does "thoughts are not facts" mean?',
              options:      ['Thoughts are always wrong', 'Thoughts are just mental events that may or may not be true', 'You should ignore all your thoughts', 'Facts come from feelings'],
              correctIndex: 1,
            },
            {
              format:       'multiple-choice',
              question:     'How many thoughts does the human brain produce each day?',
              options:      ['About 10', 'Hundreds', 'Thousands', 'Exactly 100'],
              correctIndex: 2,
            },
            {
              format:        'true-false',
              question:      'Every thought your brain produces is completely true.',
              correctAnswer: false,
            },
            {
              format:       'multiple-choice',
              question:     'What is "thought watching"?',
              options:      ['Getting rid of all your thoughts', 'Watching thoughts without being pulled into them', 'Making thoughts more powerful', 'Thinking faster'],
              correctIndex: 1,
            },
            {
              format:       'fill-blank',
              question:     "When a thought feels scary, it doesn't mean it's a ___.",
              options:      ['fact', 'cloud', 'feeling', 'word'],
              correctIndex: 0,
            },
            {
              format:       'multiple-choice',
              question:     'What is a good way to picture thoughts passing through your mind?',
              options:      ['Like bricks in a wall — they stay forever', 'Like clouds passing through the sky', 'Like fire — dangerous and urgent', 'Like words in a book — always true'],
              correctIndex: 1,
            },
          ],
        },

        // PHASE 5 — REAL-WORLD CONNECTION
        {
          type:            'real-world',
          guideText:       "Amazing work, {name}! Now let's take what you've learned out into the world. Share this powerful idea with your family — you might just change how they see their own thoughts too!",
          familyAdventure: "Share a thought you had today that wasn't actually true. Talk as a family about how thoughts can trick us — and practice saying 'I notice I'm having the thought that...' together.",
          creativePrompt:  "Sit quietly and watch your thoughts for one minute like you're watching clouds. When a thought appears, just notice it — 'there's a thought about school,' 'there's a thought about lunch.' Don't follow it, don't argue with it. Just watch it float by.",
        },

        // PHASE 6 — CELEBRATION
        {
          type:      'celebration',
          xpEarned:  50,
          badge:     'thought-observer',
          badgeName: 'Thought Observer',
          message:   "Amazing, {name}! You've discovered one of the most powerful truths about the mind. You are not your thoughts — you're the one who can watch them. Sage is so impressed with how deeply you're thinking today!",
        },
      ],
    },
  ],
};

// Log on module load — confirms lesson wired correctly + verifies image assets at runtime
(() => {
  const l    = innerworld_explorer_l02_screens.lessons[0];
  const mags = l.screens.filter(s => s.type === 'magazine').length;
  const game = l.screens.find(s => s.type === 'interactive')?.items?.length || 0;
  const quiz = l.screens.find(s => s.type === 'quiz')?.questions?.length || 0;
  console.log(`[LESSON-L2] Loaded: "${l.title}" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
  Promise.all([
    fetch('/explorer-assets/inner-world/l02-thought-stream.png',  { method: 'HEAD' }),
    fetch('/explorer-assets/inner-world/l02-clouds-passing.png',  { method: 'HEAD' }),
    fetch('/explorer-assets/inner-world/l02-observer-self.png',   { method: 'HEAD' }),
  ]).then(([r1, r2, r3]) => {
    console.log(`[ASSET-CHECK-L2] thought-stream: ${r1.ok}, clouds-passing: ${r2.ok}, observer-self: ${r3.ok}`);
  }).catch(() => {
    console.log('[ASSET-CHECK-L2] Could not verify image assets — network check failed');
  });
})();

export default innerworld_explorer_l02_screens;
