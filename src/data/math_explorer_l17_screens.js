// ─────────────────────────────────────────────────────────────────────────────
// MATH  |  L17 — Subtraction Practice
// Age band : explorers (6–8)   Guide: remi
// Standards: CCSS 2.OA.A.1 / 2.NBT.B.7
// REWRITE v2 (May 2026): Grade 1 accessible, ADD / SUBTRACT 2-bucket operation
// identification game tests recognizing the right operation in word problems
// (Also brings file's familyAdventure / creativePrompt into standard schema)
// ─────────────────────────────────────────────────────────────────────────────

const MATH_L17 = {
  ageBand:   `explorers`,
  subjectId: `math`,
  guide:     `remi`,

  lessons: [
    {
      id:        `math-6-8-17`,
      title:     `Subtraction Practice`,
      duration:  12,
      xpReward:  50,
      badge:     `subtraction-pro`,
      badgeName: `Subtraction Pro`,

      screens: [

        {
          id: `l17-welcome`,
          type: `welcome`,
          guideText: `Hey {name}, Remi here! Subtraction sub-block CLOSING lesson today! We've built a complete subtraction toolkit. Now we PRACTICE — mixed patterns and real-life word problems! After today, you'll have BOTH addition AND subtraction locked in!`,
          headline: `Subtraction Practice`,
          subtitle: `Bringing it all together — mixed problems and real-life applications`,
          visual: `/explorer-assets/math/l17-welcome.webp`,
        },

        {
          id: `l17-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Your Complete SUBTRACTION Toolkit`,
          paragraphs: [
            `Look at what you've built, {name}! Your subtraction toolkit is now complete!`,
            `From L12: SUBTRACT PLACE BY PLACE. Ones from ones, tens from tens, hundreds from hundreds! From L13: USE THE VERTICAL FORMAT. Stack, draw line, MINUS sign, right to left! From L14: BORROW when the top digit is too small! From L15: RECOGNIZE PATTERNS — four three-digit patterns! From L16: CHECK WITH ADDITION! That's your TOOLKIT! Five lessons. Massive skills!`,
          ],
          image: `/explorer-assets/math/l17-s1-sub-toolkit.webp`,
          imageCaption: `Complete subtraction toolkit: place by place + vertical + borrowing + patterns + checking!`,
          vocab: [
            { word: `toolkit`,         definition: `Your collection of math skills.`,
              audioPrompt: `A toolkit is your collection of math skills. Your subtraction toolkit now has 5 powerful tools. Place by place. Vertical format. Borrowing. Pattern recognition. Checking. Together, they let you handle any subtraction!` },
            { word: `complete`,        definition: `Has all the parts.`,
              audioPrompt: `Complete means has all the parts. Your subtraction toolkit is complete — nothing missing. Place value foundation, column method, borrowing, patterns, and checking habits. Everything you need!` },
            { word: `real subtractor`, definition: `Someone who can solve subtraction confidently.`,
              audioPrompt: `A real subtractor is someone who can solve subtraction confidently. You're a real subtractor now. Not learning anymore — practicing. Real subtractors see problems and know how to attack them!` },
          ],
        },

        {
          id: `l17-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `MIXED Practice`,
          paragraphs: [
            `Mix the subtraction patterns when you practice! Don't do five Pattern A in a row! Mix them up!`,
            `Try these in order: 478 - 235 (Pattern A — no borrows). 452 - 137 (Pattern B — ones borrow). 583 - 192 (Pattern C — tens borrow). 623 - 158 (Pattern D — chain borrow)! Why mix? Real life mixes! Word problems mix! Tests mix! Mixed practice trains your brain to RECOGNIZE the pattern fast, then adapt!`,
          ],
          image: `/explorer-assets/math/l17-s2-mixed-sub-patterns.webp`,
          imageCaption: `Mix the patterns: A → B → C → D → repeat!`,
          vocab: [
            { word: `mix it up`,      definition: `Practice different types randomly.`,
              audioPrompt: `Mix it up is practice different types randomly. Mix it up to train pattern recognition. Doing 5 of the same pattern makes your brain lazy. Mixing forces fresh identification each time!` },
            { word: `recognize fast`, definition: `Identify the pattern quickly.`,
              audioPrompt: `Recognize fast means identify the pattern quickly. Recognize fast is what makes you efficient. With practice, you'll see a problem and instantly know which pattern!` },
            { word: `adapt`,          definition: `Adjust to what's needed.`,
              audioPrompt: `To adapt is to adjust to what's needed. Adapt to each pattern as it comes. Pattern A? Quick and easy. Pattern D? Slow down for chain borrowing. Use the right approach!` },
          ],
        },

        {
          id: `l17-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `WORD PROBLEMS for Subtraction`,
          paragraphs: [
            `Real-life subtraction comes as a WORD PROBLEM! Words first. You translate to math!`,
            `Example: "Maya had 84 marbles. She gave 27 to her brother. How many does she have LEFT?" Translate: starting = 84. Subtracted = 27. Find what's left! Math: 84 - 27 = 57! Maya has 57 marbles left! Other classics: SPEND money. LOSE items. EAT food. SHRINK. Anything where something STARTS LARGER and BECOMES SMALLER!`,
          ],
          image: `/explorer-assets/math/l17-s3-sub-word-problem.webp`,
          imageCaption: `Word problem: Maya's 84 - given 27 = 57 left!`,
          vocab: [
            { word: `word problem`,    definition: `Math written as a story.`,
              audioPrompt: `A word problem is math written as a story. Word problems describe real situations using words. Maya and marbles. Kids losing things. The numbers are hidden inside the words. Find them and solve!` },
            { word: `translate`,       definition: `Convert from one form to another.`,
              audioPrompt: `To translate is to convert from one form to another. Translate the story into a math problem. The story is in words. The math is in numbers. Translating means rewriting the story as math!` },
            { word: `starting bigger`, definition: `Begin with a larger amount.`,
              audioPrompt: `Starting bigger means begin with a larger amount. Subtraction stories starting bigger end smaller. Maya started with 84. Ended with 57. The story has a starting amount that GETS SMALLER!` },
          ],
        },

        {
          id: `l17-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Subtraction KEYWORDS`,
          paragraphs: [
            `Word problems use certain WORDS that tell you it's SUBTRACTION! Watch for these clues!`,
            `KEYWORDS that signal subtraction: "TAKE AWAY" — taking some away! "LEFT" — how many are left? "REMAINING" — what's remaining? "FEWER" — fewer than! "LESS" — less than! "DIFFERENCE" — the difference! "GAVE AWAY"! "LOST"! "ATE"! "SPENT"! Example: "Tom had 75 stickers. He LOST 28. How many LEFT?" "Lost" and "left" both signal subtraction!`,
          ],
          image: `/explorer-assets/math/l17-s4-sub-keywords.webp`,
          imageCaption: `Subtraction keywords: take away, left, remaining, fewer, less, lost, gave away!`,
          vocab: [
            { word: `keyword`,   definition: `A word that gives a clue.`,
              audioPrompt: `A keyword is a word that gives a clue. Subtraction keywords signal you to subtract. Take away. Left. Remaining. Fewer. Less. Each one appears in word problems and tells you subtraction is the operation!` },
            { word: `clue word`, definition: `A word that hints at the operation.`,
              audioPrompt: `A clue word is a word that hints at the operation. Clue words help you figure out word problems. Like clues in a mystery, they point to the solution. Pay attention to clue words!` },
            { word: `signal`,    definition: `An indicator.`,
              audioPrompt: `A signal is an indicator. The keyword signals that subtraction is needed. When you see "left" or "lost" or "take away" — subtraction. Word problems have built-in signals once you know them!` },
          ],
        },

        {
          id: `l17-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Subtraction in REAL LIFE`,
          paragraphs: [
            `Outside school, you'll use subtraction CONSTANTLY! Here are real situations!`,
            `MONEY — checking change. "I gave $20. Bought a $7 snack. Change: $20 - $7 = $13!" TIME — how much left? "Movie is 90 minutes. Watched 35. Left: 55 minutes!" SCORES — winning margins! TRAVEL — distance remaining! FOOD — counting what's left. "12 cookies. Ate 5. Left: 7!" BATTERY — energy running out! Subtraction is the math of DECREASING things!`,
          ],
          image: `/explorer-assets/math/l17-s5-sub-real-life.webp`,
          imageCaption: `Real-life subtraction: money, time, scores, distances, food, battery!`,
          vocab: [
            { word: `decreasing`,   definition: `Getting smaller over time.`,
              audioPrompt: `Decreasing means getting smaller over time. Subtraction is the math of decreasing things. Money you spend decreases. Time remaining decreases. Cookies in the jar decrease. Anywhere it shrinks!` },
            { word: `running out`,  definition: `Getting low or used up.`,
              audioPrompt: `Running out means getting low or used up. Subtraction tracks things running out. The math of "how much is left?" Critical for budgeting time, money, energy. Adults use it constantly!` },
            { word: `everyday math`, definition: `Used in daily life.`,
              audioPrompt: `Everyday math is used in daily life. Subtraction is everyday math. Checking change. Tracking time. Measuring what's left. The most-used adult skill. And you're getting good at it now!` },
          ],
        },

        {
          id: `l17-mag-6`,
          type: `magazine`,
          section: 6,
          headline: `Subtraction: MASTERED`,
          paragraphs: [
            `You've finished the Subtraction sub-block! Six lessons! Massive growth! You can now subtract any whole numbers AND check your work!`,
            `Look where you ARE! You can: ADD multi-digit numbers! SUBTRACT multi-digit numbers! CHECK your work both ways! RECOGNIZE patterns! APPLY math to word problems! You have BOTH inverse operations under your belt! Next sub-block — MULTIPLICATION INTRO — builds on EVERYTHING you've learned! You're crushing this!`,
          ],
          image: `/explorer-assets/math/l17-s6-sub-mastered.webp`,
          imageCaption: `Subtraction: MASTERED! Both inverse operations mastered. Multiplication next!`,
          vocab: [
            { word: `mastered`,           definition: `Have full skill in.`,
              audioPrompt: `Mastered means have full skill in. You've mastered multi-digit subtraction. Not just tried it. You know the method, the patterns, the checking habits. That's mastery at your level!` },
            { word: `inverse operations`, definition: `Opposite pairs.`,
              audioPrompt: `Inverse operations are opposite pairs. Addition and subtraction are the first inverse operations you've mastered. They're the foundation of all elementary math. Multiplication and division come next!` },
            { word: `keep going`,         definition: `Continue learning.`,
              audioPrompt: `Keep going means continue learning. Don't stop — keep going into multiplication next. You've built solid foundations. Each new skill stacks on what you already know. The next adventure awaits!` },
          ],
        },

        {
          id: `l17-game`,
          type: `interactive`,
          format: `drag-match`,
          guideText: `Let's try it, {name}! Here are 4 word problems. Drag each one — does it need ADD (combine!) or SUBTRACT (take away!)?`,
          buckets: [
            { id: `add`,      label: `➕ ADD (combine)`,    color: `#34D399` },
            { id: `subtract`, label: `➖ SUBTRACT (take away)`, color: `#F87171` },
          ],
          items: [
            { id: `l17-g1`, image: `l17-game-1.webp`, label: `"Maya had 84 marbles. Gave 27 to her brother. How many LEFT?"`,
              matchPhrase: `Yes! SUBTRACT! "Gave away" + "left" = both subtraction signals. 84 - 27 = 57 marbles!`,
              correctMatch: `subtract` },
            { id: `l17-g2`, image: `l17-game-2.webp`, label: `"Tom scored 23 points + 31 points. What's his TOTAL?"`,
              matchPhrase: `Right! ADD! "Total" signals adding. 23 + 31 = 54 total points!`,
              correctMatch: `add` },
            { id: `l17-g3`, image: `l17-game-3.webp`, label: `"Phone at 80%. Used 35%. How much battery is REMAINING?"`,
              matchPhrase: `Yes! SUBTRACT! "Used" + "remaining" = subtraction. 80 - 35 = 45% left!`,
              correctMatch: `subtract` },
            { id: `l17-g4`, image: `l17-game-4.webp`, label: `"Sara has 12 cookies + her brother has 8. How many ALTOGETHER?"`,
              matchPhrase: `Right! ADD! "Altogether" signals combining. 12 + 8 = 20 cookies altogether!`,
              correctMatch: `add` },
          ],
        },

        {
          id: `l17-quiz`,
          type: `quiz`,
          guideText: `Let's see what you remember, {name}!`,
          questions: [
            { id: `l17-q1`, format: `multiple-choice`,
              question: `What's a SUBTRACTION word problem?`,
              options: [`A typing test`, `Math told as a story where something STARTS BIGGER and gets smaller`, `Just a story`, `Random words`],
              correctIndex: 1,
              explanation: `A subtraction word problem describes a situation where something starts larger and decreases!` },
            { id: `l17-q2`, format: `multiple-choice`,
              question: `Maya had 84 marbles. She gave 27 to her brother. How many LEFT?`,
              options: [`47`, `57`, `67`, `37`],
              correctIndex: 1,
              explanation: `57! 84 - 27 = 57. Ones: 4-7? Borrow. 14-7=7. Tens: 7-2=5. Maya has 57 marbles!` },
            { id: `l17-q3`, format: `multiple-choice`,
              question: `Which words signal you should SUBTRACT?`,
              options: [`Total, altogether, sum`, `LEFT, lost, fewer, difference, take away, gave away`, `Combined, plus`, `Added, gained`],
              correctIndex: 1,
              explanation: `Subtraction keywords: left, lost, fewer, difference, take away, gave away, remaining, less!` },
            { id: `l17-q4`, format: `true-false`,
              question: `MIXED PRACTICE builds REAL skill better than doing one pattern over and over.`,
              correctAnswer: true,
              explanation: `True! Mixed practice trains your brain to recognize patterns and adapt!` },
            { id: `l17-q5`, format: `multiple-choice`,
              question: `Subtraction is the math of ___. Things getting smaller over time.`,
              options: [`decreasing`, `growing`, `multiplying`, `combining`],
              correctIndex: 0,
              explanation: `Decreasing! Subtraction tracks things getting smaller. Spending, eating, running out of time!` },
            { id: `l17-q6`, format: `multiple-choice`,
              question: `Why is having BOTH addition AND subtraction mastered such a BIG DEAL?`,
              options: [`It's not`, `Combined, they let you COMBINE or SEPARATE any amounts — the two most-used math operations`, `Just for tests`, `Magic`],
              correctIndex: 1,
              explanation: `Combined, they handle any combining or separating in life. The two most-used adult math skills!` },
          ],
        },

        {
          id: `l17-realworld`,
          type: `real-world`,
          guideText: `Most adults use BOTH addition AND subtraction in MENTAL math constantly! They see 47 + 25 and think "72" without writing! They see $20 - $7.50 and think "$12.50" instantly! How? PRACTICE — hundreds of paper problems as kids built the skill. With practice, you'll get there too!`,
          familyAdventure: `Together, find 8 situations around the house where you'd use addition OR subtraction! Examples: "How many minutes of TV + reading?" (add). "How many cookies were in the jar — how many left?" (subtract). Mix it up! Decide which operation. Solve. Ask a grown-up: what's the last thing they added or subtracted today?`,
          creativePrompt: `Write TWO word problems on paper — ONE addition and ONE subtraction! Make them about something you love (sports, video games, food, animals)! Write at least 3 sentences per problem. For stretch, write each problem as a 5-sentence mini-story with extra details! Have someone solve both!`,
        },

        {
          id: `l17-celebration`,
          type: `celebration`,
          message: `MASSIVE WIN, {name}! Subtraction sub-block COMPLETE! Six lessons. Full toolkit. You can subtract any multi-digit numbers AND check with addition! You have BOTH inverse operations mastered! Next up — MULTIPLICATION! We'll see that multiplication is REPEATED addition! Remi is so proud! 🦝`,
          badge: `subtraction-pro`,
          badgeName: `Subtraction Pro`,
          xpEarned: 50,
        },

      ],
    },
  ],
};

export default MATH_L17;

// ─── Dev asset check ─────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const mags = MATH_L17.lessons[0].screens.filter(s => s.type === 'magazine').length;
  const game = MATH_L17.lessons[0].screens.find(s => s.type === 'interactive')?.items?.length ?? 0;
  const quiz = MATH_L17.lessons[0].screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  console.log(`[LESSON-MATH-L17] Loaded: "Subtraction Practice" with ${mags} magazine sections, ${game} game items, ${quiz} quiz questions`);
}
