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
      title:     'The Emotion Wheel — All My Feelings Have Names',
      duration:  15,
      xpReward:  50,
      badge:     'emotion-explorer',
      badgeName: 'Emotion Explorer',
      screens: [
        // PHASE 1 — WELCOME
        {
          type:      'welcome',
          guideText: "Hi {name}! Today we're opening a door to the most fascinating place in the world — the world inside you. Here's a question: have you ever felt something really big inside, but weren't sure what to call it? Today we're going to find out — because all your feelings have names. Are you ready to become an Emotion Explorer?",
        },

        // PHASE 2 — MAGAZINE STORY
        {
          type:          'magazine',
          section:       1,
          totalSections: 3,
          headline:      'Feelings Have Names',
          paragraphs: [
            'Humans have hundreds of different feelings. Every feeling has a name — even the ones that are hard to describe.',
            'Scientists who study emotions say we start with a few basic ones: happiness, sadness, anger, fear, surprise, and disgust.',
            'From those basic feelings, many more grow — like branches on a tree. Learning their names helps you understand yourself better.',
          ],
          image:        '/explorer-assets/inner-world/feelings-spectrum.png',
          imageCaption: 'Every feeling has a name — even the hard-to-describe ones',
          vocab: [
            { word: 'emotion',       definition: 'Another word for a feeling — the way your body and heart react to things.',                audioPrompt: 'Emotion — another word for a feeling, the way your body and heart react to things.' },
            { word: 'basic emotion', definition: 'One of the most important starting feelings — like happy, sad, angry, or scared.',         audioPrompt: 'Basic emotion — one of the most important starting feelings, like happy, sad, angry, or scared.' },
            { word: 'disgust',       definition: 'The feeling you get when something seems really yucky or wrong.',                           audioPrompt: 'Disgust — the feeling you get when something seems really yucky or wrong.' },
          ],
        },
        {
          type:          'magazine',
          section:       2,
          totalSections: 3,
          headline:      'The Emotion Wheel',
          paragraphs: [
            'An emotion wheel is a map of all your feelings. At the center are the big basic emotions — like happy, sad, angry, and scared.',
            'Moving outward on the wheel, you find more specific feelings. "Happy" branches into "excited," "proud," "grateful," and "peaceful."',
            'The more specific your feeling name, the better you understand yourself — and the better others can understand you too!',
          ],
          image:        '/explorer-assets/inner-world/emotion-wheel.png',
          imageCaption: 'The emotion wheel — from basic feelings to more specific ones',
          vocab: [
            { word: 'emotion wheel', definition: 'A map that organizes feelings from basic ones in the center to more specific ones on the outside.', audioPrompt: 'Emotion wheel — a map that organizes feelings from basic ones in the center to more specific ones on the outside.' },
            { word: 'grateful',      definition: 'Feeling happy and thankful for something good in your life.',                                        audioPrompt: 'Grateful — feeling happy and thankful for something good in your life.' },
            { word: 'peaceful',      definition: 'Calm and quiet inside, like floating on a still lake.',                                              audioPrompt: 'Peaceful — calm and quiet inside, like floating on a still lake.' },
          ],
        },
        {
          type:          'magazine',
          section:       3,
          totalSections: 3,
          headline:      'Where Feelings Live in Your Body',
          paragraphs: [
            'Your feelings don\'t just live in your mind — they live in your body too! When you feel scared, your heart might beat faster. When you feel happy, your chest might feel light and open.',
            'When you feel angry, your face might feel warm and your jaw might get tight. Sadness can feel like a heavy weight in your chest. Your body is always giving you clues about what you\'re feeling inside.',
            'Here\'s something amazing scientists discovered: when you name a feeling out loud, a part of your brain helps calm the emotional storm. Naming your feeling is like turning on a light in a dark room.',
          ],
          image:        '/explorer-assets/inner-world/body-feelings.png',
          imageCaption: 'Feelings live in your body — your body always gives you clues',
          vocab: [
            { word: 'body signals',  definition: 'Clues your body gives you — like a tight chest or a fast heartbeat — about what you are feeling.', audioPrompt: 'Body signals — clues your body gives you, like a tight chest or a fast heartbeat, about what you are feeling.' },
            { word: 'thinking brain', definition: 'The part of your brain that helps you understand and calm big feelings when you name them.',        audioPrompt: 'Thinking brain — the part of your brain that helps you understand and calm big feelings when you name them.' },
          ],
        },

        // PHASE 3 — INTERACTIVE
        {
          type:          'interactive',
          activityType:  'drag-match',
          instruction:   'Tap a feeling word, then tap the basic emotion it belongs to!',
          guideText:     "Now let's explore the emotion wheel! Each specific feeling belongs to a basic emotion family. Tap a feeling, then find its family. Let's go!",
          columnHeaders: ['Specific Feeling', 'Basic Emotion'],
          items: [
            { image: 'birthday-party.png', label: 'Excited',     correctMatch: 'happy',  objectPosition: 'center 40%', matchPhrase: "Yes! Excited is a kind of happy — happy with extra energy!"     },
            { image: 'lost-toy.png',       label: 'Heartbroken', correctMatch: 'sad',    objectPosition: 'center 50%', matchPhrase: "That's it! Heartbroken is a really big sad."                    },
            { image: 'mad-face.png',       label: 'Frustrated',  correctMatch: 'angry',  objectPosition: 'center 30%', matchPhrase: "Right! Frustrated is angry mixed with stuck."                  },
            { image: 'dark-room.png',      label: 'Worried',     correctMatch: 'scared', objectPosition: 'center 50%', matchPhrase: "Got it! Worried is scared about something that might happen."   },
          ],
          buckets: [
            { id: 'happy',  label: 'Happy',  color: '#FFD700' },
            { id: 'sad',    label: 'Sad',    color: '#4A90E2' },
            { id: 'angry',  label: 'Angry',  color: '#E74C3C' },
            { id: 'scared', label: 'Scared', color: '#9B59B6' },
          ],
        },

        // PHASE 4 — MASTERY QUIZ
        {
          type:      'quiz',
          guideText: "Quiz time! Let's see what you've learned about the emotion wheel. Answer all 6 questions to earn your Emotion Explorer badge!",
          questions: [
            {
              format:       'multiple-choice',
              question:     'What happens in your brain when you name an emotion?',
              options:      ['The feeling gets much bigger', 'The thinking part of your brain helps calm the feeling', 'You forget about the feeling immediately', 'Nothing special happens'],
              correctIndex: 1,
            },
            {
              format:        'true-false',
              question:      'All feelings are okay to have.',
              correctAnswer: true,
            },
            {
              format:       'multiple-choice',
              question:     'What is an emotion wheel used for?',
              options:      ['Spinning to pick a random mood', 'Organizing feelings from basic to more specific', 'A toy for younger children', 'Tracking the weather'],
              correctIndex: 1,
            },
            {
              format:       'fill-blank',
              question:     'The emotion wheel helps you name feelings from basic to more ___.',
              options:      ['specific', 'boring', 'random', 'invisible'],
              correctIndex: 0,
            },
            {
              format:       'multiple-choice',
              question:     'Which of these is a more specific version of "happy"?',
              options:      ['Angry', 'Scared', 'Grateful', 'Tired'],
              correctIndex: 2,
            },
            {
              format:       'multiple-choice',
              question:     'Where might you feel sadness in your body?',
              options:      ['Only in your head', 'Like a heavy feeling in your chest', 'In your feet', 'Nowhere — feelings are invisible'],
              correctIndex: 1,
            },
          ],
        },

        // PHASE 5 — REAL-WORLD CONNECTION
        {
          type:            'real-world',
          guideText:       "Amazing work, {name}! Now let's bring the emotion wheel into your real life. Share what you learned with your family — they will love it!",
          familyAdventure: "At dinner tonight, each person names one emotion they felt today and where they noticed it in their body. Be as specific as you can — not just 'good' or 'bad,' but the real feeling name!",
          creativePrompt:  "Sit quietly and take three slow breaths. Ask yourself: what feeling is visiting me right now? Name it as specifically as you can — maybe 'a little worried' or 'excited and nervous.' Then draw yourself feeling that feeling, and add an arrow pointing to where you notice it in your body.",
        },

        // PHASE 6 — CELEBRATION
        {
          type:      'celebration',
          xpEarned:  50,
          badge:     'emotion-explorer',
          badgeName: 'Emotion Explorer',
          message:   "Wonderful work, {name}! You just took your first step into the inner world. Naming your feelings is one of the most powerful things a person can do — and now you know why it works. Sage is so proud of you!",
        },
      ],
    },
  ],
};

// Log on module load — confirms lesson wired correctly
(() => {
  const l    = innerworld_explorer_screens.lessons[0];
  const mags  = l.screens.filter(s => s.type === 'magazine').length;
  const game  = l.screens.find(s => s.type === 'interactive')?.items?.length || 0;
  const quiz  = l.screens.find(s => s.type === 'quiz')?.questions?.length || 0;
  console.log(`[LESSON] Loaded: "${l.title}" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
})();

export default innerworld_explorer_screens;
