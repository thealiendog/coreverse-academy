// ============================================================
// COREVERSE EXPLORERS — Inner World · Lesson 5
// "Self-Talk: What Voice Do I Use?"
// Ages 6–8 | Guide: Sage | ExplorerLessonPlayer format
// ============================================================

const innerworld_explorer_l05_screens = {
  ageBand:   'explorers',
  subjectId: 'inner-world',
  guide:     'sage',
  lessons: [
    {
      id:        'iw-6-8-05',
      title:     'Self-Talk: What Voice Do I Use?',
      duration:  14,
      xpReward:  50,
      badge:     'kind-voice',
      badgeName: 'Kind Voice',
      screens: [
        // PHASE 1 — WELCOME
        {
          type:      'welcome',
          guideText: "Hey {name}! There's a voice in your head that talks to you all day long. Sometimes it's kind and encouraging — and sometimes it says things you'd never say to a friend. Today we're going to learn what to do with that voice. Ready to find your kinder inner voice?",
        },

        // PHASE 2 — MAGAZINE STORY
        {
          type:          'magazine',
          section:       1,
          totalSections: 3,
          headline:      'The Voice in Your Head',
          paragraphs: [
            'Self-talk is the constant conversation you have with yourself inside your mind — always running, even when you don\'t notice.',
            'Researchers estimate we have 50,000 to 80,000 thoughts every single day. That\'s a lot of talking!',
            'Many of those thoughts are about who we are. The voice in your head shapes how you feel about yourself.',
          ],
          image:        '/explorer-assets/inner-world/l05-inner-monologue.png',
          imageCaption: 'Your inner voice talks to you all day long',
          vocab: [
            { word: 'self-talk',  definition: 'The constant conversation you have with yourself inside your mind — the voice that comments on everything you do.',             audioPrompt: 'Self-talk — the constant conversation you have with yourself inside your mind, the voice that comments on everything you do.' },
            { word: 'thoughts',   definition: 'The ideas, images, and words that appear in your mind — you have tens of thousands of them every single day.',                 audioPrompt: 'Thoughts — the ideas, images, and words that appear in your mind. You have tens of thousands of them every single day.' },
          ],
        },
        {
          type:          'magazine',
          section:       2,
          totalSections: 3,
          headline:      'Meet Your Inner Critic and Inner Coach',
          paragraphs: [
            'There are two characters that often show up in self-talk. The inner critic says harsh things: "You\'re so stupid," "You always mess up," "Nobody wants to hear what you think."',
            'The inner coach says encouraging things: "You\'re learning," "That was hard but you tried," "You\'ve got this."',
            'Both voices live inside you — but they feel very different. The critic makes you shrink. The coach makes you want to keep going.',
          ],
          image:        '/explorer-assets/inner-world/l05-critic-vs-coach.png',
          imageCaption: 'The inner critic tears down — the inner coach builds up',
          vocab: [
            { word: 'inner critic', definition: 'A harsh voice inside your mind that says unkind things about you — often exaggerating your mistakes or flaws.',               audioPrompt: 'Inner critic — a harsh voice inside your mind that says unkind things about you, often exaggerating your mistakes or flaws.' },
            { word: 'inner coach',  definition: 'An encouraging voice inside your mind that supports you, reminds you of your strengths, and helps you keep going.',           audioPrompt: 'Inner coach — an encouraging voice inside your mind that supports you, reminds you of your strengths, and helps you keep going.' },
          ],
        },
        {
          type:          'magazine',
          section:       3,
          totalSections: 3,
          headline:      'You Can Choose Your Voice',
          paragraphs: [
            'The inner critic often speaks in "always" and "never" — these are exaggerations, almost never accurate. You don\'t always mess up.',
            'Powerful test: when your inner critic says something, ask, "Would I say this to my best friend?" If not, rewrite it with kindness.',
            'Over time, this rewires your inner voice. The more you choose the coach, the quieter the critic becomes.',
          ],
          image:        '/explorer-assets/inner-world/l05-cognitive-distortion.png',
          imageCaption: "The best-friend test — would you say it to someone you love?",
          vocab: [
            { word: 'cognitive distortion', definition: 'A thought that exaggerates or twists reality — like "always" and "never" — that feels true but usually isn\'t.',      audioPrompt: 'Cognitive distortion — a thought that exaggerates or twists reality, like always and never, that feels true but usually isn\'t.' },
            { word: 'rewire',               definition: 'To gradually change the way your brain thinks or responds — like retraining a habit, but inside your mind.',           audioPrompt: 'Rewire — to gradually change the way your brain thinks or responds, like retraining a habit but inside your mind.' },
          ],
        },

        // PHASE 3 — INTERACTIVE
        {
          type:          'interactive',
          activityType:  'drag-match',
          instruction:   'Tap a voice card, then tap which voice it belongs to!',
          guideText:     "Time to sort some voices! Each card shows something your inner voice might say. Tap the card, then tap whether it sounds like your inner critic or your inner coach. You know the difference now!",
          columnHeaders: ['The Voice Says…', 'Which Voice?'],
          items: [
            { image: 'l05-game-nevergetright.png',  label: "You'll never get this right.",    correctMatch: 'critic', objectPosition: 'center 50%', matchPhrase: "Right! That's the inner critic — harsh and unkind. You'd never say that to a friend!" },
            { image: 'l05-game-alwaysmessup.png',   label: 'You always mess up.',             correctMatch: 'critic', objectPosition: 'center 50%', matchPhrase: "Yes! 'Always' is a cognitive distortion — it exaggerates and makes it feel worse than it is." },
            { image: 'l05-game-yourelearning.png',  label: "You're still learning.",          correctMatch: 'coach',  objectPosition: 'center 50%', matchPhrase: "Exactly! That's your inner coach — kind, true, and encouraging. That voice helps you grow!" },
            { image: 'l05-game-youvegotthis.png',   label: 'That was hard — you tried!',     correctMatch: 'coach',  objectPosition: 'center 50%', matchPhrase: "Perfect! Your inner coach cheers you on. The more you listen to it, the stronger it gets!" },
          ],
          buckets: [
            { id: 'critic', label: '😤 Inner Critic', color: '#EF4444' },
            { id: 'coach',  label: '🌟 Inner Coach',  color: '#34D399' },
          ],
        },

        // PHASE 4 — MASTERY QUIZ
        {
          type:      'quiz',
          guideText: "Quiz time, {name}! Let's see what you've learned about self-talk. Answer all 6 questions to earn your Kind Voice badge!",
          questions: [
            {
              format:       'multiple-choice',
              question:     'What is the inner critic?',
              options:      ['A helpful voice that keeps you safe', 'A harsh voice that says unkind things about you', 'A teacher who corrects your mistakes', 'A voice that appears only at night'],
              correctIndex: 1,
            },
            {
              format:       'multiple-choice',
              question:     'Approximately how many thoughts do we have each day?',
              options:      ['About 100', 'About 1,000', '50,000–80,000', 'Exactly 10,000'],
              correctIndex: 2,
            },
            {
              format:        'true-false',
              question:      'The inner coach says kind, encouraging things to help you grow.',
              correctAnswer: true,
            },
            {
              format:       'multiple-choice',
              question:     'Words like "always" and "never" in self-talk are examples of what?',
              options:      ['Growth mindset thinking', "Cognitive distortions — exaggerations that feel true but usually aren't", 'Scientific facts', 'Helpful reminders'],
              correctIndex: 1,
            },
            {
              format:       'multiple-choice',
              question:     'What is a powerful question to ask when your inner critic speaks?',
              options:      ['"Why is this happening to me?"', '"Would I say this to my best friend?"', '"What did I do wrong?"', '"Who can I blame?"'],
              correctIndex: 1,
            },
            {
              format:       'fill-blank',
              question:     'When you practice kinder self-talk, your inner voice slowly ___ toward kindness.',
              options:      ['rewires', 'shouts', 'disappears', 'freezes'],
              correctIndex: 0,
            },
          ],
        },

        // PHASE 5 — REAL-WORLD CONNECTION
        {
          type:            'real-world',
          guideText:       "Brilliant work, {name}! You now know that the voice inside your head isn't always right — and you have the power to choose a kinder one. Try this with your family tonight!",
          familyAdventure: "Each family member shares their inner critic's favourite phrase — then together rewrite it as something an inner coach would say. You might be surprised what you hear from each other!",
          creativePrompt:  "Think of something you did recently that didn't go perfectly. Write down what your inner critic said. Now imagine your best friend did the same thing — what would you say to them? Write that down too. Notice the difference, and practice saying the kinder version to yourself.",
        },

        // PHASE 6 — CELEBRATION
        {
          type:      'celebration',
          xpEarned:  50,
          badge:     'kind-voice',
          badgeName: 'Kind Voice',
          message:   "Brilliant, {name}! You now know that the voice inside your head isn't always right — and you have the power to choose a kinder one. Sage loves watching you discover just how capable and worthy you are!",
        },
      ],
    },
  ],
};

// Log on module load — confirms lesson wired correctly + verifies image assets at runtime
(() => {
  const l    = innerworld_explorer_l05_screens.lessons[0];
  const mags = l.screens.filter(s => s.type === 'magazine').length;
  const game = l.screens.find(s => s.type === 'interactive')?.items?.length || 0;
  const quiz = l.screens.find(s => s.type === 'quiz')?.questions?.length || 0;
  console.log(`[LESSON-L5] Loaded: "${l.title}" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
  Promise.all([
    fetch('/explorer-assets/inner-world/l05-inner-monologue.png',     { method: 'HEAD' }),
    fetch('/explorer-assets/inner-world/l05-critic-vs-coach.png',     { method: 'HEAD' }),
    fetch('/explorer-assets/inner-world/l05-cognitive-distortion.png', { method: 'HEAD' }),
  ]).then(([r1, r2, r3]) => {
    console.log(`[ASSET-CHECK-L5] inner-monologue: ${r1.ok}, critic-vs-coach: ${r2.ok}, cognitive-distortion: ${r3.ok}`);
  }).catch(() => {
    console.log('[ASSET-CHECK-L5] Could not verify image assets — network check failed');
  });
})();

export default innerworld_explorer_l05_screens;
