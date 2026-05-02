// ============================================================
// COREVERSE EXPLORERS — Inner World · Lesson 4
// "Growth Mindset: My Brain Gets Stronger"
// Ages 6–8 | Guide: Sage | ExplorerLessonPlayer format
// ============================================================

const innerworld_explorer_l04_screens = {
  ageBand:   'explorers',
  subjectId: 'inner-world',
  guide:     'sage',
  lessons: [
    {
      id:        'iw-6-8-04',
      title:     'Growth Mindset: My Brain Gets Stronger',
      duration:  14,
      xpReward:  50,
      badge:     'brain-builder',
      badgeName: 'Brain Builder',
      screens: [
        // PHASE 1 — WELCOME
        {
          type:      'welcome',
          guideText: "Hello, {name}! I have incredible news to share with you today: your brain is like a muscle, and every time you try something hard, it literally gets stronger. Today we're going to explore this amazing idea called the growth mindset. Ready to build a bigger, stronger brain?",
        },

        // PHASE 2 — MAGAZINE STORY
        {
          type:          'magazine',
          section:       1,
          totalSections: 3,
          headline:      'Your Brain is Like a Muscle',
          paragraphs: [
            'Scientists discovered something remarkable about the brain: it changes and grows every single time you learn something new.',
            'When you practise a skill or work through a challenge, your brain cells form new connections — like roads being built between towns.',
            'This is called neuroplasticity — and the amazing part is it happens your whole life, not just when you\'re young.',
          ],
          image:        '/explorer-assets/inner-world/l04-neuroplasticity.png',
          imageCaption: 'Every time you learn, your brain builds new connections',
          vocab: [
            { word: 'neuroplasticity', definition: 'Your brain\'s ability to grow and change by forming new connections every time you learn or practise something.',        audioPrompt: 'Neuroplasticity — your brain\'s ability to grow and change by forming new connections every time you learn or practise something.' },
            { word: 'connections',     definition: 'Links between brain cells that get stronger the more you use them — like paths that become roads with practice.',          audioPrompt: 'Connections — links between brain cells that get stronger the more you use them, like paths that become roads with practice.' },
          ],
        },
        {
          type:          'magazine',
          section:       2,
          totalSections: 3,
          headline:      'Fixed vs. Growth Mindset',
          paragraphs: [
            'Dr. Carol Dweck, a psychologist at Stanford University, found that people have one of two mindsets about their abilities.',
            'A fixed mindset believes you\'re either smart or you\'re not — and that doesn\'t change. A growth mindset believes you can get better at almost anything with effort and practice.',
            'The key word is "yet." Instead of "I can\'t do this," try "I can\'t do this yet." That tiny word opens a door — it says you\'re on the way, not at the end.',
          ],
          image:        '/explorer-assets/inner-world/l04-fixed-vs-growth.png',
          imageCaption: 'Fixed mindset closes the door — growth mindset opens it',
          vocab: [
            { word: 'fixed mindset',  definition: 'The belief that your abilities are set and can\'t change much — that you\'re either good at something or you\'re not.',    audioPrompt: 'Fixed mindset — the belief that your abilities are set and can\'t change much, that you\'re either good at something or you\'re not.' },
            { word: 'growth mindset', definition: 'The belief that you can improve at almost anything with effort, practice, and learning from mistakes.',                      audioPrompt: 'Growth mindset — the belief that you can improve at almost anything with effort, practice, and learning from mistakes.' },
          ],
        },
        {
          type:          'magazine',
          section:       3,
          totalSections: 3,
          headline:      "Mistakes Are Your Brain's Favourite Teacher",
          paragraphs: [
            'Mistakes are not failures in a growth mindset — they are lessons. Every error shows your brain exactly where to build new strength.',
            'Thomas Edison made over 1,000 attempts before successfully creating the lightbulb. He didn\'t see those attempts as failures — he saw each one as information.',
            'Scientists, artists, athletes, and inventors all rely on this truth: the path to getting good at something is paved with useful, necessary mistakes.',
          ],
          image:        '/explorer-assets/inner-world/l04-mistakes-as-lessons.png',
          imageCaption: "Every mistake is a lesson — that's how Edison built the lightbulb",
          vocab: [
            { word: 'mistake', definition: 'Something that didn\'t go as planned — in a growth mindset, a mistake is useful information that helps your brain grow.',           audioPrompt: 'Mistake — something that didn\'t go as planned. In a growth mindset, a mistake is useful information that helps your brain grow.' },
            { word: 'effort',  definition: 'The energy and hard work you put into doing something — effort is what causes your brain to build new connections.',                audioPrompt: 'Effort — the energy and hard work you put into doing something. Effort is what causes your brain to build new connections.' },
          ],
        },

        // PHASE 3 — INTERACTIVE
        {
          type:          'interactive',
          activityType:  'drag-match',
          instruction:   'Tap a thought card, then tap which mindset it belongs to!',
          guideText:     "Time to sort some thoughts! Each card shows something a child might say or think. Tap the card, then tap whether it shows a fixed mindset or a growth mindset. You've got this!",
          columnHeaders: ['The Thought', 'Which Mindset?'],
          items: [
            { image: 'l04-game-icantdoit.png', label: "I can't do this.",                  correctMatch: 'fixed',  objectPosition: 'center 50%', matchPhrase: "Yes! 'I can\'t do this' is a fixed mindset thought — but add 'yet' and it changes everything!" },
            { image: 'l04-game-toohard.png',   label: "I give up — it's too hard.",        correctMatch: 'fixed',  objectPosition: 'center 50%', matchPhrase: "Right! Giving up is fixed mindset. Growth mindset says: 'This is hard — and I\'m getting stronger!'" },
            { image: 'l04-game-mistake.png',   label: 'Mistakes help me learn.',           correctMatch: 'growth', objectPosition: 'center 50%', matchPhrase: "Exactly! Seeing mistakes as lessons is pure growth mindset. Your brain just got stronger!" },
            { image: 'l04-game-yetbrain.png',  label: "I can't do it yet — but I'm learning!", correctMatch: 'growth', objectPosition: 'center 50%', matchPhrase: "Perfect! 'Yet' plus keep trying equals growth mindset. That's exactly how your brain grows!" },
          ],
          buckets: [
            { id: 'fixed',  label: '🔒 Fixed Mindset',  color: '#EF4444' },
            { id: 'growth', label: '🌱 Growth Mindset', color: '#34D399' },
          ],
        },

        // PHASE 4 — MASTERY QUIZ
        {
          type:      'quiz',
          guideText: "Quiz time, {name}! Let's see what you've learned about the growth mindset. Answer all 6 questions to earn your Brain Builder badge!",
          questions: [
            {
              format:       'multiple-choice',
              question:     'What is neuroplasticity?',
              options:      ['A type of plastic used in science class', "The brain's ability to grow and change when you learn", "A fixed level of intelligence you're born with", 'The part of the brain that controls emotions'],
              correctIndex: 1,
            },
            {
              format:       'multiple-choice',
              question:     'What does a "fixed mindset" believe about intelligence?',
              options:      ['You can grow smarter with effort', "Intelligence is set and doesn't change much", 'Only some people have fixed mindsets', 'Reading causes a fixed mindset'],
              correctIndex: 1,
            },
            {
              format:        'true-false',
              question:      'Your brain grows stronger when you try hard things.',
              correctAnswer: true,
            },
            {
              format:       'multiple-choice',
              question:     'What happens in your brain when you practise something difficult?',
              options:      ['Nothing changes', 'Brain cells form new connections', 'Old brain cells disappear', 'Your brain gets tired permanently'],
              correctIndex: 1,
            },
            {
              format:       'fill-blank',
              question:     'Thomas Edison made over ___ attempts before creating the lightbulb.',
              options:      ['1,000', '10', '100', '500'],
              correctIndex: 0,
            },
            {
              format:       'fill-blank',
              question:     'Instead of "I can\'t do this," a growth mindset adds the word ___.',
              options:      ['yet', 'never', 'always', 'maybe'],
              correctIndex: 0,
            },
          ],
        },

        // PHASE 5 — REAL-WORLD CONNECTION
        {
          type:            'real-world',
          guideText:       "Incredible work, {name}! You now know one of the most powerful secrets in all of science — your brain grows when you try hard things. Share this with your family tonight!",
          familyAdventure: "Share a time you learned something hard. What made it possible? Celebrate the struggle — not just the success. Each person shares one 'I can't do this yet' — something they're still working on — and one small step they could take this week.",
          creativePrompt:  "Think of something you find difficult right now — in school, in sport, or at home. Say out loud: 'I can't do this yet — but my brain is working on it.' Then write down one small step you could take today to make your brain a little stronger at that thing.",
        },

        // PHASE 6 — CELEBRATION
        {
          type:      'celebration',
          xpEarned:  50,
          badge:     'brain-builder',
          badgeName: 'Brain Builder',
          message:   "Incredible work, {name}! You now know one of the most powerful secrets in all of science — your brain grows when you try hard things. Every challenge is an invitation to get stronger. Sage is so proud of your growing mind!",
        },
      ],
    },
  ],
};

// Log on module load — confirms lesson wired correctly + verifies image assets at runtime
(() => {
  const l    = innerworld_explorer_l04_screens.lessons[0];
  const mags = l.screens.filter(s => s.type === 'magazine').length;
  const game = l.screens.find(s => s.type === 'interactive')?.items?.length || 0;
  const quiz = l.screens.find(s => s.type === 'quiz')?.questions?.length || 0;
  console.log(`[LESSON-L4] Loaded: "${l.title}" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
  Promise.all([
    fetch('/explorer-assets/inner-world/l04-neuroplasticity.png',   { method: 'HEAD' }),
    fetch('/explorer-assets/inner-world/l04-fixed-vs-growth.png',   { method: 'HEAD' }),
    fetch('/explorer-assets/inner-world/l04-mistakes-as-lessons.png', { method: 'HEAD' }),
  ]).then(([r1, r2, r3]) => {
    console.log(`[ASSET-CHECK-L4] neuroplasticity: ${r1.ok}, fixed-vs-growth: ${r2.ok}, mistakes-as-lessons: ${r3.ok}`);
  }).catch(() => {
    console.log('[ASSET-CHECK-L4] Could not verify image assets — network check failed');
  });
})();

export default innerworld_explorer_l04_screens;
