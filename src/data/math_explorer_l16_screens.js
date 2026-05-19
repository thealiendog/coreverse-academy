const MATH_L16 = {
  lessons: [
    {
      id: 'math-6-8-16',
      subjectId: 'math',
      title: 'Checking with Addition',
      subtitle: 'Use inverse operations to verify your subtraction',
      guide: 'remi',
      ageRange: '6-8',
      xpReward: 50,
      badge: 'inverse-checker',
      badgeName: 'Inverse Checker',
      screens: [
        // ─── Screen 0: Welcome ───
        {
          type: 'welcome',
          guideText: "Today we learn a secret math superpower — how to check whether your subtraction is correct. All it takes is a little addition!",
          headline: 'Checking with Addition',
          subtitle: 'Use inverse operations to verify your subtraction',
          visual: 'welcome-math',
        },

        // ─── Screen 1: Magazine — Inverse Operations ───
        {
          type: 'magazine',
          headline: 'Inverse Operations',
          paragraphs: [
            "Addition and subtraction are inverse operations. That means they are opposites — each one undoes the other perfectly.",
            "If you add 10 to a number, you can subtract 10 to get right back. If you subtract 5, you can add 5 to return to where you started.",
            "This connection is your secret checking tool. After you subtract, you can use addition to check whether your answer is correct!",
          ],
          image: '/explorer-assets/math/l16-s1-inverse-ops.webp',
          imageCaption: 'Addition and subtraction are perfect opposites — each one undoes the other.',
          vocab: [
            {
              word: 'inverse',
              definition: 'Opposite operations that undo each other — like subtraction and addition.',
              audioPrompt: 'Hey {name}, inverse means opposite! Subtraction and addition are inverses.',
            },
            {
              word: 'operation',
              definition: 'A math action like adding, subtracting, multiplying, or dividing.',
              audioPrompt: '{name}, an operation is a math action — adding and subtracting are both operations!',
            },
            {
              word: 'undo',
              definition: 'To reverse an action and go back to where you started.',
              audioPrompt: 'Undo means go back! {name}, addition undoes subtraction and subtraction undoes addition.',
            },
          ],
        },

        // ─── Screen 2: Magazine — The Check ───
        {
          type: 'magazine',
          headline: 'The Check: Add Back',
          paragraphs: [
            "Here is the rule: if A minus B equals C, then C plus B should equal A. That is the check!",
            "Try it: 85 − 27 = 58. Now add back: 58 + 27 = 85. We got back to 85 — the answer is correct!",
            "Think of it like a round trip. You drove 27 miles away from home. You are now 58 miles from your starting point. Drive 27 miles back — you are home at 85. Round trip complete!",
          ],
          image: '/explorer-assets/math/l16-s2-add-back.webp',
          imageCaption: 'Add the answer back to what you subtracted — you should reach the starting number.',
          vocab: [
            {
              word: 'verify',
              definition: 'To check that something is correct and true.',
              audioPrompt: '{name}, to verify means to check! After you subtract, verify by adding back.',
            },
            {
              word: 'round trip',
              definition: 'A journey that returns to the starting point.',
              audioPrompt: 'A round trip goes and comes back! {name}, checking subtraction is like a math round trip.',
            },
            {
              word: 'original',
              definition: 'The first number you started with before any operations.',
              audioPrompt: '{name}, original means the starting number — the one you subtracted from!',
            },
          ],
        },

        // ─── Screen 3: Magazine — Round Trip ───
        {
          type: 'magazine',
          headline: 'The Round Trip',
          paragraphs: [
            "Imagine you start at home with 421 stickers. You give away 158 stickers. You think you have 263 left.",
            "Now check: 263 + 158 = 421. You are back at home! The answer is correct.",
            "Whenever your check gets you back to the original number, your subtraction was right. The round trip works!",
          ],
          image: '/explorer-assets/math/l16-s3-round-trip.webp',
          imageCaption: 'A correct subtraction always brings you right back to the starting number.',
          vocab: [
            {
              word: 'starting number',
              definition: 'The number you begin with — the top number in a subtraction problem.',
              audioPrompt: 'The starting number is where you begin! {name}, it is the big number on top.',
            },
            {
              word: 'check',
              definition: 'A way to test whether your answer is right.',
              audioPrompt: '{name}, a check tests your answer — add back to check your subtraction!',
            },
            {
              word: 'correct',
              definition: 'Right and accurate — no mistakes.',
              audioPrompt: 'Correct means right! {name}, when your check works your answer is correct.',
            },
          ],
        },

        // ─── Screen 4: Magazine — Catching Mistakes ───
        {
          type: 'magazine',
          headline: 'Catching Mistakes',
          paragraphs: [
            "Checking saves you from handing in wrong answers. Here is how it works: 75 − 28 = 53 (wrong!).",
            "Check: 53 + 28 = 81. But 81 ≠ 75 — the check gives a mismatch! Something is wrong.",
            "Go back and subtract again carefully: 75 − 28 = 47. Now check: 47 + 28 = 75. The round trip works — 47 is the correct answer!",
          ],
          image: '/explorer-assets/math/l16-s4-catching-mistakes.webp',
          imageCaption: 'A mismatch in the check means there is a mistake — go back and try again.',
          vocab: [
            {
              word: 'mismatch',
              definition: 'When two things do not match — a sign that a mistake was made.',
              audioPrompt: '{name}, a mismatch means something is off! If your check does not return the original number, look for the mistake.',
            },
            {
              word: 'mistake',
              definition: 'An error in your work that needs to be corrected.',
              audioPrompt: 'Everyone makes mistakes, {name}! That is why we check — so we can find and fix them.',
            },
            {
              word: 'correct',
              definition: 'Right and accurate — no mistakes.',
              audioPrompt: '{name}, when your check matches the original, your answer is correct!',
            },
          ],
        },

        // ─── Screen 5: Magazine — When to Check ───
        {
          type: 'magazine',
          headline: 'When to Check',
          paragraphs: [
            "You do not have to check every single problem. But checking is especially smart when the problem is long, when you borrowed a lot, or when the answer does not feel right.",
            "Checking takes just a moment and can save you from a wrong answer. Smart math people check their most important work.",
            "Build the habit: finish your subtraction, then quickly add back before you move on. It only takes a few seconds!",
          ],
          image: '/explorer-assets/math/l16-s5-when-to-check.webp',
          imageCaption: 'A quick check before you move on can catch mistakes before they matter.',
          vocab: [
            {
              word: 'habit',
              definition: 'Something you do regularly without having to think about it.',
              audioPrompt: '{name}, a habit is something you do all the time! Build the checking habit.',
            },
            {
              word: 'estimate',
              definition: 'A close guess that helps you know if your answer is in the right range.',
              audioPrompt: 'An estimate is a smart guess, {name}! If your answer seems way off, definitely check it.',
            },
            {
              word: 'pause',
              definition: 'To stop briefly before continuing.',
              audioPrompt: '{name}, pause means stop for a moment — pause to check before moving on!',
            },
          ],
        },

        // ─── Screen 6: Magazine — Reliable Math People ───
        {
          type: 'magazine',
          headline: 'Reliable Math People',
          paragraphs: [
            "Math people who always check their work are reliable. Teachers, engineers, and scientists all verify their calculations — even when the math is easy for them.",
            "Checking is not about doubting yourself. It is about caring enough about your work to make sure it is right.",
            "When you check with addition, your subtraction answers can be trusted. That is what makes you a reliable math person!",
          ],
          image: '/explorer-assets/math/l16-s6-reliable-math.webp',
          imageCaption: 'Reliable math people check their work — it is a sign of care, not doubt.',
          vocab: [
            {
              word: 'reliable',
              definition: 'Trustworthy and consistently correct.',
              audioPrompt: '{name}, reliable means you can be counted on! Check your work and your math is reliable.',
            },
            {
              word: 'trustworthy',
              definition: 'Able to be trusted and depended on.',
              audioPrompt: 'Trustworthy means people believe in you, {name}! Checking makes your answers trustworthy.',
            },
            {
              word: 'verify',
              definition: 'To confirm that something is correct.',
              audioPrompt: 'Verify means confirm, {name}! Always verify your subtraction by adding back.',
            },
          ],
        },

        // ─── Screen 7: Interactive — Drag-Match ───
        {
          type: 'interactive',
          format: 'drag-match',
          guideText: "Sort these into FACTS (true things about checking subtraction) and MYTHS (false ideas)!",
          buckets: [
            { id: 'fact', label: 'Fact' },
            { id: 'myth', label: 'Myth' },
          ],
          items: [
            {
              id: 'item-1',
              image: 'l16-game-1.webp',
              label: 'Add back to check',
              matchPhrase: 'Adding the answer back to what you subtracted should return the original number.',
              correctMatch: 'fact',
            },
            {
              id: 'item-2',
              image: 'l16-game-2.webp',
              label: 'Inverse operations',
              matchPhrase: 'Addition and subtraction are inverse operations — each one undoes the other.',
              correctMatch: 'fact',
            },
            {
              id: 'item-3',
              image: 'l16-game-3.webp',
              label: 'Unrelated operations',
              matchPhrase: 'Addition and subtraction have nothing to do with each other.',
              correctMatch: 'myth',
            },
            {
              id: 'item-4',
              image: 'l16-game-4.webp',
              label: 'Checking is pointless',
              matchPhrase: 'Checking your subtraction answer is a waste of time.',
              correctMatch: 'myth',
            },
          ],
        },

        // ─── Screen 8: Quiz ───
        {
          type: 'quiz',
          guideText: "Let us see how well you know checking with addition!",
          questions: [
            {
              id: 'q1',
              format: 'multiple-choice',
              question: 'What does it mean for addition and subtraction to be inverse operations?',
              options: [
                'They give the same answer',
                'They undo each other',
                'They are both hard',
                'They use the same numbers',
              ],
              correctIndex: 1,
              explanation: 'Inverse operations undo each other. Subtraction takes away; addition puts back. They are perfect opposites!',
            },
            {
              id: 'q2',
              format: 'multiple-choice',
              question: 'You solved 85 − 27 = 58. How do you check this answer?',
              options: [
                '85 + 27',
                '58 − 27',
                '58 + 27',
                '85 − 58',
              ],
              correctIndex: 2,
              explanation: 'Add the answer (58) back to what you subtracted (27): 58 + 27 = 85. That matches the starting number, so the answer is correct!',
            },
            {
              id: 'q3',
              format: 'multiple-choice',
              question: 'You solved 421 − 158 = 263. You check: 263 + 158 = 421. What does this tell you?',
              options: [
                'The answer is wrong — try again',
                'The answer is correct',
                'You need to subtract again',
                'The check does not work here',
              ],
              correctIndex: 1,
              explanation: '263 + 158 = 421, which matches the starting number! The round trip works, so 263 is the correct answer.',
            },
            {
              id: 'q4',
              format: 'multiple-choice',
              question: 'You solved 75 − 28 = 53. You check: 53 + 28 = 81. But the starting number was 75. What happened?',
              options: [
                'The check is wrong — ignore it',
                '81 is close enough to 75',
                'There is a mistake in the subtraction — fix it',
                'The starting number must have been 81',
              ],
              correctIndex: 2,
              explanation: 'The check gives 81, but the starting number was 75. Mismatch! There is a mistake in the subtraction. Go back and subtract carefully to find the correct answer.',
            },
            {
              id: 'q5',
              format: 'multiple-choice',
              question: 'If A − B = C, what addition fact checks the answer?',
              options: [
                'A + B = C',
                'C + A = B',
                'C + B = A',
                'B − C = A',
              ],
              correctIndex: 2,
              explanation: 'The check rule is: C + B = A. Add the answer (C) back to what you subtracted (B) — you should get the original starting number (A).',
            },
            {
              id: 'q6',
              format: 'multiple-choice',
              question: 'When is it especially smart to check your subtraction?',
              options: [
                'Only when the teacher tells you to',
                'Never — checking wastes time',
                'When the problem was long or involved a lot of borrowing',
                'Only on tests',
              ],
              correctIndex: 2,
              explanation: 'Checking is smartest when problems are long, involve lots of borrowing, or when the answer does not feel right. Build the habit — it only takes a moment!',
            },
          ],
        },

        // ─── Screen 9: Real-World ───
        {
          type: 'real-world',
          guideText: "Here is a way to use checking with addition in real life!",
          familyAdventure: {
            title: 'The Grocery Store Check',
            scenario: "You have 95 cents. You spend 38 cents on a snack. You think you have 57 cents left. Before you put your wallet away, check: 57 + 38 = 95. Round trip! You counted correctly.",
            talkingPoint: "Ask a grown-up: do they ever double-check math at the store or when paying bills? How do they check?",
          },
          creativePrompt: {
            title: 'Design a Checking Poster',
            description: "Draw a poster for your classroom that shows the rule: A − B = C, so C + B = A. Include a fun example and a catchy title like 'Always Add Back!' or 'Round Trip Math!'",
          },
        },

        // ─── Screen 10: Celebration ───
        {
          type: 'celebration',
          message: "Outstanding! You now know how to check subtraction with addition. Use this superpower every time you subtract — it will make your math rock-solid!",
          badge: 'inverse-checker',
          badgeName: 'Inverse Checker',
          xpEarned: 50,
        },
      ],
    },
  ],
};

export default MATH_L16;

// ─── Dev asset check ───
if (import.meta.env?.DEV) {
  const screens = MATH_L16.lessons[0].screens;
  const magScreens = screens.filter(s => s.type === 'magazine');
  const interactiveScreens = screens.filter(s => s.type === 'interactive');
  const missing = [];

  magScreens.forEach(s => {
    if (!s.image) missing.push(`MISSING image on magazine screen: ${s.headline}`);
  });

  interactiveScreens.forEach(s => {
    if (s.items) {
      s.items.forEach(item => {
        if (!item.image) missing.push(`MISSING image on interactive item: ${item.label}`);
      });
    }
  });

  if (missing.length > 0) {
    console.warn('[L16 Asset Check]', missing);
  } else {
    console.log('[L16 Asset Check] All assets declared.');
  }
}
