// Math UE L01 v2 — Place Value with Base-Ten Blocks
// Player: MathLessonPlayer (NOT UpperExplorerLessonPlayer)
// Guide: Remi (raccoon)
// XP: 75 | Badge: Place Value Pro
// 8 screens: welcome → block-intro → explore → guided-tasks → concept-name →
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
        "Hi {name}! I'm Remi the Raccoon, your math guide. Today we're going to BUILD numbers — not read about them, build them. With actual blocks you can drag around. Ready? Let's go.",
    },

    // ── Screen 2: Block Introduction ──────────────────────────────────────────
    {
      id:   'block-intro',
      type: 'block-intro',
      audioPrompt:
        "Before we start building — let me show you what we're working with. This little blue square is a UNIT. It means ONE. This green rod is a TEN. See those segments on it? That's 10 ones stacked together. So one rod equals ten units. And this orange square is a HUNDRED. It's 10 rods packed together, or 100 units. A whole hundred. Got it? Let's build.",
      highlightTimings: { unit: 4400, rod: 9800, flat: 17200, none: 24000 },
    },

    // ── Screen 3: Explore (free play) ─────────────────────────────────────────
    {
      id:             'explore',
      type:           'explore',
      minDurationSec: 60,
      audioPrompt:
        "Try tapping each of the three blocks — unit, rod, and flat. See how the number at the top changes. Mix them up. Just play with it for a minute.",
    },

    // ── Screen 4: Guided Tasks ────────────────────────────────────────────────
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
          teachingMoment: {
            headline: 'That was Place Value!',
            equation: '23 = 2 tens + 3 ones',
            audioPrompt:
              "Look at the number you built — 23. The 2 in 23 is in the TENS place. See those 2 rods? That's what 2 tens looks like. The 3 in 23 is in the ONES place. Those 3 small blocks are 3 ones. That's place value at work.",
            rows: [
              { digit: '2', placeLabel: 'TENS',  blockType: 'rod',  count: 2, color: '#34D399' },
              { digit: '3', placeLabel: 'ONES',  blockType: 'unit', count: 3, color: '#60A5FA' },
            ],
          },
        },
        {
          target:      50,
          prompt:      'Make the number 50',
          audioPrompt:
            "Nice. Now make 50. This one's interesting — you don't need any units at all. Just rods. How many rods make 50?",
          wrongHint:   "Almost. We want 50. That's five groups of ten. So five rods — and zero units.",
          teachingMoment: {
            headline: 'Zero ones — that matters!',
            equation: '50 = 5 tens + 0 ones',
            audioPrompt:
              "Check it out — 50 equals 5 tens and 0 ones. Notice the 0 in the ones place. Zero ones means no small blocks needed. But the 0 is doing a real job — it says no ones here. Without that 0, 5 tens would just look like the number 5. The zero holds the ones place open.",
            rows: [
              { digit: '5', placeLabel: 'TENS',  blockType: 'rod',  count: 5, color: '#34D399' },
              { digit: '0', placeLabel: 'ONES',  blockType: 'unit', count: 0, color: '#60A5FA' },
            ],
          },
        },
        {
          target:      147,
          prompt:      'Make the number 147',
          audioPrompt:
            "Big one. Make 147. You'll need a flat, some rods, and some units. Think about how each digit maps to a kind of block.",
          wrongHint:   "Not quite. We want 147. That's 1 flat for the hundred, 4 rods for the tens, and 7 units for the ones.",
          teachingMoment: {
            headline: 'Three places — hundreds, tens, ones!',
            equation: '147 = 1 hundred + 4 tens + 7 ones',
            audioPrompt:
              "Now you're using all three places. 147 equals 1 hundred, 4 tens, and 7 ones. The 1 is in the HUNDREDS place — that's the flat. The 4 is in the TENS place — those are the rods. The 7 is in the ONES place — the small blocks. Three different places, three different values.",
            rows: [
              { digit: '1', placeLabel: 'HUNDREDS', blockType: 'flat', count: 1, color: '#FBBF24' },
              { digit: '4', placeLabel: 'TENS',     blockType: 'rod',  count: 4, color: '#34D399' },
              { digit: '7', placeLabel: 'ONES',     blockType: 'unit', count: 7, color: '#60A5FA' },
            ],
          },
        },
        {
          target:      200,
          prompt:      'Make the number 200',
          audioPrompt:
            "Last one. Make 200. There are a few ways to do this — try the simplest one you can think of.",
          wrongHint:   "We want 200. That's exactly 2 flats. You can also use 20 rods — the blocks will auto-group for you.",
          teachingMoment: {
            headline: 'Two zeros holding the line!',
            equation: '200 = 2 hundreds + 0 tens + 0 ones',
            audioPrompt:
              "200 equals 2 hundreds, 0 tens, and 0 ones. Two zeros! But they're not doing nothing — they're holding two places open, keeping the 2 exactly in the hundreds place. Take away those zeros and you'd have just the number 2. The zeros make 200 mean something completely different.",
            rows: [
              { digit: '2', placeLabel: 'HUNDREDS', blockType: 'flat', count: 2, color: '#FBBF24' },
              { digit: '0', placeLabel: 'TENS',     blockType: 'rod',  count: 0, color: '#34D399' },
              { digit: '0', placeLabel: 'ONES',     blockType: 'unit', count: 0, color: '#60A5FA' },
            ],
          },
        },
      ],
    },

    // ── Screen 5: Concept Name ────────────────────────────────────────────────
    {
      id:   'concept-name',
      type: 'concept-name',
      headline: 'The Secret Code Behind Every Number',
      body:
        "Every number lives in PLACES — ones, tens, hundreds. Each place is 10 times bigger than the one to its right. Every flat = one HUNDRED. Every rod = one TEN. Every unit = one ONE.",
      audioPrompt:
        "You just built four different numbers. Let me show you the pattern. Every number lives in PLACES. There's a ones place, a tens place, and a hundreds place — and they always sit in the same order. Look at 247. The 7 is in the ONES place. The 4 is in the TENS place. The 2 is in the HUNDREDS place. Every flat equals one HUNDRED. Every rod equals one TEN. Every unit equals one ONE. That's the secret code behind every number you'll ever see. Numbers aren't just symbols — every digit has a JOB based on its PLACE. And now you know how to read that code.",
    },

    // ── Screen 6: Applied Problems ────────────────────────────────────────────
    {
      id:   'applied-problems',
      type: 'applied-problems',
      problems: [
        {
          id:               'tap-identify',
          subtype:          'tap-identify',
          preload:          { flats: 4, rods: 5, units: 8 }, // represents 458
          displayNumber:    458,
          prompt:           "In 458, what does the 4 mean? Tap the blocks that show '4 hundreds'.",
          audioPrompt:
            "Look at the number 458. Tap the blocks that show what the 4 in that number means.",
          correctBlockType: 'flat',
          correctFeedback:  "Exactly! The 4 flats show 400. The 4 is in the hundreds place.",
          wrongFeedback:    "Not quite. The 4 in 458 is in the hundreds place — tap the big orange square blocks.",
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

    // ── Screen 7: Quick Check ─────────────────────────────────────────────────
    {
      id:   'quick-check',
      type: 'quick-check',
      quizIntroAudio: "Quick check time, {name}! Let's see what you learned. Four short questions. Take your time.",
      questions: [
        {
          id:      'q1',
          subtype: 'workspace-read',
          preload: { flats: 3, rods: 2, units: 6 }, // 326
          prompt:  'How many is this number?',
          audioPrompt: "Look at this number. How many is it?",
          options: ['326', '236', '632', '263'],
          correct: '326',
          explanation: "You read the blocks just like a number — hundreds, tens, ones.",
        },
        {
          id:      'q2',
          subtype: 'text-choice',
          prompt:  'In the number 471, which digit is in the TENS place?',
          audioPrompt: "In the number 471, which digit is in the TENS place?",
          options: ['4', '7', '1', '471'],
          correct: '7',
          explanation: "The 7 is in the tens place. The 4 is in hundreds, the 1 is in ones.",
        },
        {
          id:      'q3',
          subtype: 'workspace-fill',
          preload: { flats: 2, rods: 5, units: 3 }, // 253
          prompt:  'What number is shown here?',
          audioPrompt: "Look at the blocks. What number do they show? Type it in.",
          correct: '253',
          explanation: "2 hundreds + 5 tens + 3 ones = 253. You can read the blocks like digits.",
        },
        {
          id:      'q4',
          subtype: 'text-choice',
          prompt:  "What number means '3 hundreds, 0 tens, 8 ones'?",
          audioPrompt: "What number means 3 hundreds, 0 tens, 8 ones?",
          options: ['38', '308', '380', '3008'],
          correct: '308',
          explanation: "The 0 in 308 holds the tens place open, keeping the 3 in hundreds and the 8 in ones.",
        },
      ],
    },

    // ── Screen 8: Real-World ──────────────────────────────────────────────────
    {
      id:   'real-world',
      type: 'real-world',
      headline:        'Numbers Are Everywhere',
      body:            "Place value is everywhere — house numbers, prices, phone numbers. All using the same system you just learned.",
      familyAdventure: "Tonight, find three numbers around your house. Tell someone in your family which digit is in which place. That's your Family Adventure.",
      audioPrompt:
        "Place value is everywhere. The number on your house. The price of stuff at the store. Phone numbers. All using the same system you just learned. Tonight, find three numbers around your house. Tell someone in your family which digit is in which place. That's your Family Adventure.",
    },

    // ── Screen 9: Celebration ─────────────────────────────────────────────────
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
