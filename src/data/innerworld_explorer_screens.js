// ============================================================
// COREVERSE EXPLORERS — Inner World · Screen-based Engine
// Ages 6–8 | Guide: Sage | ExplorerLessonPlayer format
// ============================================================

const innerworld_explorer_screens = {
  ageBand:   'explorers',
  subjectId: 'inner-world',
  guide:     'sage',
  lessons: [
    {
      id:        'iw-6-8-01',
      title:     'Understanding Big Feelings',
      duration:  15,
      xpReward:  50,
      badge:     'feelings-explorer',
      badgeName: 'Feelings Explorer',
      screens: [
        // PHASE 1 — WELCOME
        {
          type:      'welcome',
          guideText: "Hi {name}! I'm Sage. Today we're going to explore something everyone has — feelings! Big ones, small ones, easy ones, hard ones. Are you ready to become a Feelings Explorer?",
          image:     '/explorer-assets/inner-world/sage-greeting.png',
        },

        // PHASE 2 — MAGAZINE STORY
        {
          type:          'magazine',
          section:       1,
          totalSections: 3,
          headline:      'What Are Feelings?',
          paragraphs: [
            'Feelings are messages from your body and mind. They tell you something important about what is happening around you and inside you.',
            'Some feelings feel good — like happy, excited, or peaceful. Other feelings can be hard — like sad, angry, or scared.',
            'All feelings are okay to have. They are part of being human!',
          ],
          image:        '/explorer-assets/inner-world/feelings-spectrum.png',
          imageCaption: 'Different feelings have different colors and shapes',
          vocab: [
            { word: 'feelings',  definition: 'Messages from your body that tell you what is happening inside you.',      audioPrompt: 'Feelings — messages from your body that tell you what is happening inside you.' },
            { word: 'peaceful',  definition: 'Calm and quiet inside, like floating on a still lake.',                   audioPrompt: 'Peaceful — calm and quiet inside, like floating on a still lake.' },
            { word: 'excited',   definition: 'A big happy energy you feel when something wonderful is about to happen.', audioPrompt: 'Excited — a big happy energy you feel when something wonderful is about to happen.' },
          ],
        },
        {
          type:          'magazine',
          section:       2,
          totalSections: 3,
          headline:      'The Big Four Feelings',
          paragraphs: [
            'Out of all the feelings in the world, four are the biggest and most important to learn first.',
            'They are: HAPPY, SAD, ANGRY, and SCARED. Scientists call these the core emotions.',
            'Every other feeling is like a mix or a cousin of these four. Learning them helps you understand all your feelings!',
          ],
          image:        '/explorer-assets/inner-world/big-four.png',
          imageCaption: 'The Big Four feelings everyone has',
          vocab: [
            { word: 'core',     definition: 'The most important center of something — like the core of an apple.',      audioPrompt: 'Core — the most important center of something, like the core of an apple.' },
            { word: 'emotions', definition: 'Another word for feelings — the way your body and heart react to things.', audioPrompt: 'Emotions — another word for feelings, the way your body and heart react to things.' },
          ],
        },
        {
          type:          'magazine',
          section:       3,
          totalSections: 3,
          headline:      'Why Feelings Matter',
          paragraphs: [
            'When you know what you feel, you can take care of yourself better.',
            'If you feel sad, you might need a hug. If you feel angry, you might need to take deep breaths. If you feel scared, you might need a friend.',
            'Knowing your feelings is your superpower!',
          ],
          image:        '/explorer-assets/inner-world/superhero-feelings.png',
          imageCaption: 'Your feelings are your superpower!',
          vocab: [
            { word: 'superpower', definition: 'A special strength or ability that helps you do amazing things.', audioPrompt: 'Superpower — a special strength or ability that helps you do amazing things.' },
          ],
        },

        // PHASE 3 — INTERACTIVE (Day 5)
        {
          type:         'interactive',
          activityType: 'drag-match',
          instruction:  'Tap a feeling picture, then tap where it belongs!',
          guideText:    "Now let's play a matching game! Tap a picture, then tap the feeling it shows. Let's go!",
          items: [
            { image: 'birthday-party.png', label: 'Happy',  correctMatch: 'happy'  },
            { image: 'lost-toy.png',       label: 'Sad',    correctMatch: 'sad'    },
            { image: 'mad-face.png',         label: 'Angry',  correctMatch: 'angry'  },
            { image: 'dark-room.png',      label: 'Scared', correctMatch: 'scared' },
          ],
          buckets: [
            { id: 'happy',  label: 'Happy',  color: '#FFD700' },
            { id: 'sad',    label: 'Sad',    color: '#4A90E2' },
            { id: 'angry',  label: 'Angry',  color: '#E74C3C' },
            { id: 'scared', label: 'Scared', color: '#9B59B6' },
          ],
        },

        // PHASE 4 — MASTERY QUIZ (Day 5)
        {
          type: 'quiz',
          guideText: "Quiz time! Let's see what you've learned. Answer all 5 questions to earn your Feelings Explorer badge!",
          questions: [
            { format: 'multiple-choice', question: 'What are feelings?', options: ['Messages from your body and mind', 'Things you eat for breakfast', 'Toys in your room', 'Numbers on a clock'], correctIndex: 0 },
            { format: 'true-false',      question: 'All feelings are okay to have.', correctAnswer: true },
            { format: 'multiple-choice', question: 'Which is one of the Big Four feelings?', options: ['Tired', 'Happy', 'Hungry', 'Cold'], correctIndex: 1 },
            { format: 'fill-blank',      question: 'When you feel sad, you might need a ___.', options: ['hug', 'sandwich', 'pencil', 'book'], correctIndex: 0 },
            { format: 'multiple-choice', question: 'Why is knowing your feelings a superpower?', options: ['It helps you fly', 'It helps you take care of yourself', 'It makes you taller', 'It changes the weather'], correctIndex: 1 },
          ],
        },

        // PHASE 5 — REAL-WORLD CONNECTION
        {
          type:            'real-world',
          guideText:       "Amazing work, {name}! Now let's bring this into your real life. Share what you learned with your family — they will love it!",
          familyAdventure: "At dinner tonight, ask each family member: \"What is ONE feeling you had today, and what made you feel that way?\" Take turns — no interrupting! Really listen to each other.",
          creativePrompt:  "Draw yourself feeling one of the Big Four feelings — happy, sad, angry, or scared. Then draw ONE thing around you that's making you feel that way. Write or ask someone to write the feeling name at the top!",
        },

        // PHASE 6 — CELEBRATION
        {
          type:      'celebration',
          xpEarned:  50,
          badge:     'feelings-explorer',
          badgeName: 'Feelings Explorer',
          message:   "You did it, {name}! You're officially a Feelings Explorer! Amazing work today!",
        },
      ],
    },
  ],
};

export default innerworld_explorer_screens;
