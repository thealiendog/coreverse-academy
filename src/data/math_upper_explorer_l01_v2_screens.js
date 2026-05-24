// Math UE L01 v2 — Place Value with Base-Ten Blocks
// Player: MathLessonPlayer (NOT UpperExplorerLessonPlayer)
// Guide: Remi (raccoon)
// XP: 75 | Badge: Place Value Pro
// 8 screens: welcome → explore → guided-tasks → concept-name →
//            applied-problems → quick-check → real-world → celebration

export const MATH_L01_V2 = {
  lessonId: 'math-9-10-01',
  version:  2,
  title:    'Building Numbers',
  subtitle: 'Place Value with Base-Ten Blocks',
  xp:       75,
  badge:    'Place Value Pro',

  screens: [
    // ── Screen 1: Welcome ─────────────────────────────────────────────────────
    {
      id:   'welcome',
      type: 'welcome',
      headline: 'Building Numbers',
      subtitle:  'Place Value with Base-Ten Blocks',
      audioPrompt:
        "Hey {name}. Today we're going to BUILD numbers. Not read about them — build them. With actual blocks you can drag around. Ready? Let's go.",
    },

    // ── Screen 2: Explore (free play) ─────────────────────────────────────────
    {
      id:             'explore',
      type:           'explore',
      minDurationSec: 60,
      audioPrompt:
        "Drag some blocks up. See what happens. The number at the top shows what you've made. Just play with it for a minute.",
    },

    // ── Screen 3: Guided Tasks ────────────────────────────────────────────────
    {
      id:   'guided-tasks',
      type: 'guided-tasks',
      tasks: [
        {
          target:      23,
          prompt:      'Make the number 23',
          audioPrompt:
            "Let's start easy. Make the number 23 using the blocks. You'll need some rods and some units. Tap Check My Answer when you think you've got it.",
          wrongHint:   "Hmm, not quite. We want 23. Think about how many groups of ten and how many ones that is.",
        },
        {
          target:      50,
          prompt:      'Make the number 50',
          audioPrompt:
            "Nice. Now make 50. This one's interesting — you don't need any units at all. Just rods. How many rods make 50?",
          wrongHint:   "Almost. We want 50. That's five groups of ten. So five rods — and zero units.",
        },
        {
          target:      147,
          prompt:      'Make the number 147',
          audioPrompt:
            "Big one. Make 147. You'll need a flat, some rods, and some units. Think about how each digit maps to a kind of block.",
          wrongHint:   "Not quite. We want 147. That's 1 flat for the hundred, 4 rods for the tens, and 7 units for the ones.",
        },
        {
          target:      200,
          prompt:      'Make the number 200',
          audioPrompt:
            "Last one. Make 200. There are a few ways to do this — try the simplest one you can think of.",
          wrongHint:   "We want 200. That's exactly 2 flats. You can also use 20 rods — the blocks will auto-group for you.",
        },
      ],
    },

    // ── Screen 4: Concept Name ────────────────────────────────────────────────
    {
      id:   'concept-name',
      type: 'concept-name',
      headline: 'That was Place Value.',
      body:
        "Every number you built had three kinds of places — ones (the small blocks), tens (the rods), and hundreds (the flats). Each place is 10 times bigger than the one to its right. This is the secret code behind every number you'll ever see.",
      audioPrompt:
        "You just did something amazing. Every number you built had THREE KINDS of places — ones, the small blocks, tens, the rods, and hundreds, the flats. Each one is 10 TIMES bigger than the one to its right. This is called PLACE VALUE. It's the secret code behind every number you'll ever see. And you just used it.",
    },

    // ── Screen 5: Applied Problems ────────────────────────────────────────────
    {
      id:   'applied-problems',
      type: 'applied-problems',
      problems: [
        {
          id:               'tap-identify',
          subtype:          'tap-identify',
          preload:          { flats: 4, rods: 5, units: 8 }, // represents 458
          displayNumber:    458,
          prompt:           "In the number 458, what does the 4 mean? Tap the blocks that show '4 hundred'.",
          audioPrompt:
            "Look at the number you see — 458. Now tap the blocks that show what the '4' in that number means.",
          correctBlockType: 'flat',
          correctFeedback:  "Exactly! The 4 flats show 400. The 4 is in the hundreds place.",
          wrongFeedback:    "Not quite. The '4' in 458 is in the hundreds place — that means tap the big square blocks.",
        },
        {
          id:          'build-zero',
          subtype:     'build',
          target:      305,
          prompt:      'Build 305. Watch what happens with the tens place.',
          audioPrompt:
            "Now try building 305. Pay attention to how many of each kind of block you use.",
          correctFeedback:
            "See? Zero rods. The 0 in 305 is doing real work — it holds the tens place open so the 5 stays in ones and the 3 stays in hundreds.",
          wrongHint:
            "We want 305. That's 3 flats for the hundreds, 0 rods — because there are no tens — and 5 units for the ones.",
        },
        {
          id:           'build-write',
          subtype:      'build-write',
          target:       47,
          prompt:       'Build 47. Then fill in the blanks below.',
          blankTemplate: '47 = ___ tens + ___ ones',
          audioPrompt:
            "Build 47 with blocks. Then fill in the blanks — how many tens, and how many ones?",
          correctTens:  4,
          correctOnes:  7,
          wrongHint:
            "We want 47. That's 4 tens and 7 ones. Check both your blocks AND your blanks.",
        },
      ],
    },

    // ── Screen 6: Quick Check ─────────────────────────────────────────────────
    {
      id:   'quick-check',
      type: 'quick-check',
      questions: [
        {
          id:      'q1',
          subtype: 'workspace-read',
          preload: { flats: 3, rods: 2, units: 6 }, // 326
          prompt:  'What number do these blocks show?',
          options: ['326', '236', '632', '263'],
          correct: '326',
        },
        {
          id:      'q2',
          subtype: 'text-choice',
          prompt:  'In the number 8,471, which digit is in the hundreds place?',
          options: ['8', '4', '7', '1'],
          correct: '4',
        },
        {
          id:      'q3',
          subtype: 'fill-in',
          prompt:  '60 = ___ tens',
          correct: '6',
        },
        {
          id:      'q4',
          subtype: 'text-choice',
          prompt:  'Which number has a 5 in the ones place?',
          options: ['5,000', '500', '50', '25'],
          correct: '25',
        },
      ],
    },

    // ── Screen 7: Real-World ──────────────────────────────────────────────────
    {
      id:   'real-world',
      type: 'real-world',
      headline:        'Numbers Are Everywhere',
      body:            "Place value is everywhere — house numbers, prices, phone numbers. All using the same system you just learned.",
      familyAdventure: "Tonight, find three numbers around your house. Tell someone in your family which digit is in which place. That's your Family Adventure.",
      audioPrompt:
        "Place value is everywhere. The number on your house. The price of stuff at the store. Phone numbers. All using the same system you just learned. Tonight, find three numbers around your house. Tell someone in your family which digit is in which place. That's your Family Adventure.",
    },

    // ── Screen 8: Celebration ─────────────────────────────────────────────────
    {
      id:    'celebration',
      type:  'celebration',
      badge: 'Place Value Pro',
      xp:    75,
      audioPrompt:
        "Nice work, {name}. You can now build any number up to 999 with place value blocks. Next time we'll use them to ADD big numbers together. Great job.",
    },
  ],
};
