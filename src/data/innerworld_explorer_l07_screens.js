// ============================================================
// COREVERSE EXPLORERS — Inner World · Lesson 7
// "Empathy: Feeling What Others Feel"
// Ages 6–8 | Guide: Sage | ExplorerLessonPlayer format
// ============================================================

const innerworld_explorer_l07_screens = {
  ageBand:   'explorers',
  subjectId: 'inner-world',
  guide:     'sage',
  lessons: [
    {
      id:        'iw-6-8-07',
      title:     'Empathy: Feeling What Others Feel',
      duration:  14,
      xpReward:  50,
      badge:     'heart-helper',
      badgeName: 'Heart Helper',
      screens: [
        // PHASE 1 — WELCOME
        {
          type:      'welcome',
          guideText: "Welcome, {name}! Today we're exploring one of the most beautiful gifts humans have — the ability to truly feel what someone else is going through. This gift has a name: empathy. And it's something you can grow stronger every day. Let's dive in!",
        },

        // PHASE 2 — MAGAZINE STORY
        {
          type:          'magazine',
          section:       1,
          totalSections: 3,
          headline:      'Empathy vs. Sympathy: What's the Difference?',
          paragraphs: [
            'Empathy is the ability to understand and share the feelings of another person. It\'s one of the most powerful connections humans can have.',
            'It\'s different from sympathy. Sympathy is feeling sorry for someone from the outside — like looking through a window at someone standing in the rain.',
            'Empathy is stepping inside with them and feeling the rain together. Instead of observing their pain from a distance, you enter it with them. That changes everything.',
          ],
          image:        '/explorer-assets/inner-world/l07-empathy-vs-sympathy.png',
          imageCaption: 'Sympathy looks through the window — empathy steps inside',
          vocab: [
            { word: 'empathy',  definition: 'The ability to understand and share the feelings of another person — stepping into their experience with them.',                   audioPrompt: 'Empathy — the ability to understand and share the feelings of another person, stepping into their experience with them.' },
            { word: 'sympathy', definition: 'Feeling sorry for someone from a distance — caring about their situation without fully entering into how it feels for them.',      audioPrompt: 'Sympathy — feeling sorry for someone from a distance, caring about their situation without fully entering into how it feels for them.' },
          ],
        },
        {
          type:          'magazine',
          section:       2,
          totalSections: 3,
          headline:      'Your Brain is Built to Connect',
          paragraphs: [
            'Scientists have discovered special cells in the brain called mirror neurons. These neurons activate both when you do something and when you watch someone else do it.',
            'They help you feel an echo of what others feel — which is why you might flinch when you watch someone else get hurt, or smile automatically when a friend laughs.',
            'You didn\'t choose to react that way — your brain is literally wired to connect with others. Empathy isn\'t just a choice, it\'s built into your biology.',
          ],
          image:        '/explorer-assets/inner-world/l07-mirror-neurons.png',
          imageCaption: 'Mirror neurons help your brain feel an echo of what others experience',
          vocab: [
            { word: 'mirror neurons', definition: 'Brain cells that activate both when you do something and when you watch someone else do it — they help you feel a reflection of others\' experiences.', audioPrompt: 'Mirror neurons — brain cells that activate both when you do something and when you watch someone else do it, helping you feel a reflection of others\' experiences.' },
            { word: 'echo',           definition: 'A reflection or repeat of something — mirror neurons create an echo of another person\'s feelings inside your own brain.',                             audioPrompt: 'Echo — a reflection or repeat of something. Mirror neurons create an echo of another person\'s feelings inside your own brain.' },
          ],
        },
        {
          type:          'magazine',
          section:       3,
          totalSections: 3,
          headline:      'Two Kinds of Empathy + How to Listen Well',
          paragraphs: [
            'Empathy has two parts working together. Cognitive empathy is understanding what someone might be thinking and feeling — stepping into their perspective. Emotional empathy is actually feeling something of what they feel.',
            'The most powerful empathy uses both. You think about their experience and you feel it too — head and heart together.',
            'You can practise empathy by becoming a better listener. Instead of thinking about what to say next, focus completely on the other person — their words, their face, their body language. Ask "That sounds really hard — how are you feeling about it?" instead of jumping straight to advice.',
          ],
          image:        '/explorer-assets/inner-world/l07-listening-presence.png',
          imageCaption: 'Full presence — listening with your whole self, not just your ears',
          vocab: [
            { word: 'cognitive empathy',  definition: 'Understanding what another person might be thinking and feeling — using your mind to step into their perspective.',          audioPrompt: 'Cognitive empathy — understanding what another person might be thinking and feeling, using your mind to step into their perspective.' },
            { word: 'emotional empathy',  definition: 'Actually feeling something of what another person feels — not just understanding it in your mind, but sensing it in your body.', audioPrompt: 'Emotional empathy — actually feeling something of what another person feels, not just understanding it in your mind but sensing it in your body.' },
          ],
        },

        // PHASE 3 — INTERACTIVE
        {
          type:          'interactive',
          activityType:  'drag-match',
          instruction:   'Tap a response card, then tap whether it shows sympathy or empathy!',
          guideText:     "Each card shows a response to a friend who is upset. Some responses look in from the outside — that's sympathy. Some step inside and really connect — that's empathy. Which is which?",
          columnHeaders: ['The Response', 'Which Is It?'],
          items: [
            { image: 'l07-game-toughbreak.png', label: 'Tough break — hope it gets better!',          correctMatch: 'sympathy', objectPosition: 'center 50%', matchPhrase: "That's sympathy — kind words from the outside. Empathy would step in closer and ask how they feel." },
            { image: 'l07-game-atleastits.png', label: "At least it's not that bad!",                 correctMatch: 'sympathy', objectPosition: 'center 50%', matchPhrase: "Right! Jumping to silver linings stays outside the feeling. Empathy sits with the hard part first." },
            { image: 'l07-game-soundshard.png', label: "That sounds really hard — how are you feeling?", correctMatch: 'empathy',  objectPosition: 'center 50%', matchPhrase: "Exactly! That's empathy — stepping into their world and asking what they're experiencing." },
            { image: 'l07-game-metoo.png',      label: "I'm right here with you — tell me more.",     correctMatch: 'empathy',  objectPosition: 'center 50%', matchPhrase: "Perfect! Sitting with someone and wanting to hear more — that's empathy at its very best!" },
          ],
          buckets: [
            { id: 'sympathy', label: '🪟 Sympathy', color: '#F59E0B' },
            { id: 'empathy',  label: '🫶 Empathy',  color: '#34D399' },
          ],
        },

        // PHASE 4 — MASTERY QUIZ
        {
          type:      'quiz',
          guideText: "Quiz time, {name}! Let's see what you've learned about empathy. Answer all 6 questions to earn your Heart Helper badge!",
          questions: [
            {
              format:       'multiple-choice',
              question:     'What is the difference between empathy and sympathy?',
              options:      ['They are the same thing', "Empathy is feeling sorry for someone from a distance; sympathy means stepping into their experience", "Sympathy is feeling sorry from a distance; empathy is stepping into someone's experience with them", 'Empathy is only for adults'],
              correctIndex: 2,
            },
            {
              format:       'multiple-choice',
              question:     'What are mirror neurons?',
              options:      ['Neurons that reflect light', 'Brain cells that help you feel a reflection of what others feel', 'Neurons only found in mirrors', 'A type of memory cell'],
              correctIndex: 1,
            },
            {
              format:        'true-false',
              question:      'Empathy has two parts: cognitive empathy and emotional empathy.',
              correctAnswer: true,
            },
            {
              format:       'multiple-choice',
              question:     'What is cognitive empathy?',
              options:      ['Feeling exactly what another person feels', 'Understanding what someone might be thinking and feeling', 'Giving someone advice', 'Agreeing with everything someone says'],
              correctIndex: 1,
            },
            {
              format:       'multiple-choice',
              question:     'What does a good empathetic listener do?',
              options:      ['Focuses on what to say next', 'Immediately offers solutions', 'Focuses completely on the other person — their words, face, and body language', 'Tells their own stories instead'],
              correctIndex: 2,
            },
            {
              format:       'fill-blank',
              question:     'Instead of jumping to advice, an empathetic listener asks: "That sounds really hard — ___?"',
              options:      ['how are you feeling about it?', 'can I fix it for you?', 'why did that happen?', 'have you told anyone else?'],
              correctIndex: 0,
            },
          ],
        },

        // PHASE 5 — REAL-WORLD CONNECTION
        {
          type:            'real-world',
          guideText:       "Beautiful work, {name}! Empathy is what connects us to each other — and you're already so good at it. The more you practise stepping into other people's worlds, the kinder your own world becomes. Try this with your family tonight!",
          familyAdventure: "Pick a story or movie character and discuss together: what do you think they felt, and why? Practise stepping into someone else's perspective — you might be surprised how much you notice.",
          creativePrompt:  "Think of someone in your life who might be going through something difficult right now. Imagine for a moment what it might feel like to be them — not to judge their situation, just to feel it. Then think of one small thing you could do or say to let them know you care.",
        },

        // PHASE 6 — CELEBRATION
        {
          type:      'celebration',
          xpEarned:  50,
          badge:     'heart-helper',
          badgeName: 'Heart Helper',
          message:   "Beautiful work, {name}! Empathy is what connects us to each other, and you're already so good at it. The more you practise stepping into other people's worlds, the kinder and more connected your own world becomes. Sage loves your big, open heart!",
        },
      ],
    },
  ],
};

// Log on module load — confirms lesson wired correctly + verifies image assets at runtime
(() => {
  const l    = innerworld_explorer_l07_screens.lessons[0];
  const mags = l.screens.filter(s => s.type === 'magazine').length;
  const game = l.screens.find(s => s.type === 'interactive')?.items?.length || 0;
  const quiz = l.screens.find(s => s.type === 'quiz')?.questions?.length || 0;
  console.log(`[LESSON-L7] Loaded: "${l.title}" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
  Promise.all([
    fetch('/explorer-assets/inner-world/l07-empathy-vs-sympathy.png', { method: 'HEAD' }),
    fetch('/explorer-assets/inner-world/l07-mirror-neurons.png',      { method: 'HEAD' }),
    fetch('/explorer-assets/inner-world/l07-listening-presence.png',  { method: 'HEAD' }),
  ]).then(([r1, r2, r3]) => {
    console.log(`[ASSET-CHECK-L7] empathy-vs-sympathy: ${r1.ok}, mirror-neurons: ${r2.ok}, listening-presence: ${r3.ok}`);
  }).catch(() => {
    console.log('[ASSET-CHECK-L7] Could not verify image assets — network check failed');
  });
})();

export default innerworld_explorer_l07_screens;
