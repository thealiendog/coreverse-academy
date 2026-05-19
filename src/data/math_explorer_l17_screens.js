// ─────────────────────────────────────────────────────────────────────────────
// MATH  |  L17 — Subtraction Practice
// Age band : explorers (6–8)   Guide: remi
// Standards: CCSS 2.OA.A.1 / 2.NBT.B.7 (word problems, mixed subtraction practice)
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
          guideText: `Hey {name}, Remi here. Subtraction sub-block CLOSING lesson. We've built a complete subtraction toolkit. Now we PRACTICE — mixed patterns, real-life word problems. No new concepts. Just bringing everything together. After today, you'll have BOTH addition AND subtraction locked in. Two of the most useful math skills in life. Let's roll.`,
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
            `Look at what you've built. Your subtraction toolkit is now complete.`,
            `From L12: SUBTRACT PLACE BY PLACE. Ones from ones, tens from tens, hundreds from hundreds. Bigger number on top. From L13: USE THE VERTICAL FORMAT. Stack, draw line, MINUS sign, right to left. From L14: BORROW when the top digit is too small. Cross out, boost by 10. From L15: RECOGNIZE PATTERNS. Four three-digit patterns — no borrow, ones borrow, tens borrow, chain. From L16: CHECK WITH ADDITION. Add your answer back to verify. THAT'S YOUR SUBTRACTION TOOLKIT. Five lessons. Massive skills. You're a real subtractor now. Today we put it all to use.`,
          ],
          image: `/explorer-assets/math/l17-s1-sub-toolkit.webp`,
          imageCaption: `Complete subtraction toolkit: place by place + vertical format + borrowing + patterns + checking.`,
          vocab: [
            {
              word: `toolkit`,
              definition: `Your COLLECTION of math skills. Your subtraction TOOLKIT now has 5 powerful tools.`,
              audioPrompt: `A toolkit, {name}, is your collection of math skills. Your subtraction toolkit now has five powerful tools. Place by place. Vertical format. Borrowing. Pattern recognition. Checking with addition. Each is a tool. Together, they let you handle any subtraction problem.`,
            },
            {
              word: `complete`,
              definition: `Has ALL the PARTS. Your subtraction toolkit is COMPLETE — nothing missing.`,
              audioPrompt: `Complete, {name}, means has all the parts. Your subtraction toolkit is complete — nothing missing. Place value foundation, the column method, borrowing trick, pattern awareness, and checking habits. Everything you need to subtract whole numbers.`,
            },
            {
              word: `real subtractor`,
              definition: `Someone who can SOLVE subtraction CONFIDENTLY. You're a REAL SUBTRACTOR now.`,
              audioPrompt: `A real subtractor, {name}, is someone who can solve subtraction confidently. You're a real subtractor now. Not learning anymore — practicing. Big difference. Real subtractors see problems and know how to attack them.`,
            },
          ],
        },

        {
          id: `l17-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `MIXED Practice`,
          paragraphs: [
            `Mix the subtraction patterns when you practice. Don't do five Pattern A in a row. Mix them up.`,
            `Try these in order: 478 - 235 (Pattern A — no borrows). 452 - 137 (Pattern B — ones borrow). 583 - 192 (Pattern C — tens borrow). 623 - 158 (Pattern D — chain borrow). Then mix again. Why mix? Real life mixes. Word problems mix. Tests mix. Practicing mixed problems trains your brain to RECOGNIZE the pattern fast, then adapt. Same with checking — practice the add-back check after each one (or at least after each tricky one). Mixed practice is HARDER than blocked practice (all one type), but it builds REAL skill. Real skill helps in real life.`,
          ],
          image: `/explorer-assets/math/l17-s2-mixed-sub-patterns.webp`,
          imageCaption: `Mix the patterns: A → B → C → D → repeat. Brain learns to spot pattern and adapt.`,
          vocab: [
            {
              word: `mix it up`,
              definition: `Practice DIFFERENT TYPES randomly. MIX IT UP to train pattern recognition.`,
              audioPrompt: `Mix it up, {name}, is practice different types randomly. Mix it up to train pattern recognition. Doing five of the same pattern in a row makes your brain lazy. Mixing patterns forces fresh identification each time. That builds real skill.`,
            },
            {
              word: `recognize fast`,
              definition: `IDENTIFY the pattern QUICKLY. RECOGNIZE FAST is what makes you efficient.`,
              audioPrompt: `Recognize fast, {name}, means identify the pattern quickly. Recognize fast is what makes you efficient. With practice, you'll see a subtraction problem and instantly know which pattern. That speed comes from mixed practice and reps. Builds over time.`,
            },
            {
              word: `adapt`,
              definition: `ADJUST to what's needed. ADAPT to each pattern as it comes.`,
              audioPrompt: `To adapt, {name}, is to adjust to what's needed. Adapt to each pattern as it comes. Pattern A? Quick and easy. Pattern D? Slow down for chain borrowing. Adapting means using the right approach for the right problem.`,
            },
          ],
        },

        {
          id: `l17-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `WORD PROBLEMS for Subtraction`,
          paragraphs: [
            `Real-life subtraction comes as a WORD PROBLEM. Words first. You translate to math.`,
            `Example: "Maya had 84 marbles. She gave 27 to her brother. How many does she have LEFT?" Translate: starting amount = 84. Subtracted = 27. Find what's left. Math: 84 - 27 = 57. Maya has 57 marbles left. Steps: 1) READ carefully. 2) FIND the numbers. 3) DECIDE the operation (clue words help). 4) SET UP the math. 5) SOLVE. The "give away" pattern is classic subtraction. Other classics: SPEND money. LOSE items. EAT food. WALK some distance. SHRINK over time. Anything where something STARTS LARGER and BECOMES SMALLER. Once you can translate the story to math, the solving is what you already know.`,
          ],
          image: `/explorer-assets/math/l17-s3-sub-word-problem.webp`,
          imageCaption: `Word problem: Maya's 84 - given 27 = 57 left. Story → math → solve. 5 steps.`,
          vocab: [
            {
              word: `word problem`,
              definition: `Math written as a STORY. WORD PROBLEMS describe real situations using words.`,
              audioPrompt: `A word problem, {name}, is math written as a story. Word problems describe real situations using words. Maya and marbles. Kids losing things. Classes losing students. The numbers and the math are hidden inside the words. Your job is to find them and solve.`,
            },
            {
              word: `translate`,
              definition: `Convert from one FORM to another. TRANSLATE the story into a math problem.`,
              audioPrompt: `To translate, {name}, is to convert from one form to another. Translate the story into a math problem. The story is in words. The math is in numbers and symbols. Translating means rewriting the story as a math expression. Once translated, you can solve.`,
            },
            {
              word: `starting bigger`,
              definition: `Begin with a LARGER amount. Subtraction stories STARTING BIGGER end smaller.`,
              audioPrompt: `Starting bigger, {name}, means begin with a larger amount. Subtraction stories starting bigger end smaller. Maya started with 84 marbles. Ended with 57. The story has a starting amount that GETS SMALLER. That's the shape of a subtraction word problem.`,
            },
          ],
        },

        {
          id: `l17-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Subtraction KEYWORDS`,
          paragraphs: [
            `Word problems use certain WORDS that tell you it's SUBTRACTION. Watch for these clues.`,
            `KEYWORDS that signal subtraction: "TAKE AWAY" — taking some away. "LEFT" — how many are left? "REMAINING" — what's remaining? "FEWER" — fewer than. "LESS" — less than. "DIFFERENCE" — the difference between. "MINUS" — direct subtraction word. "GAVE AWAY" — gave some to someone else. "LOST" — lost some. "ATE" — ate some. "SPENT" — spent money. "BROKE" — broke some. When you see these, you know subtraction. Example: "Tom had 75 stickers. He LOST 28. How many does he have LEFT?" "Lost" and "left" both signal subtraction. 75 - 28 = 47 stickers.`,
          ],
          image: `/explorer-assets/math/l17-s4-sub-keywords.webp`,
          imageCaption: `Subtraction keywords: take away, left, remaining, fewer, less, difference, minus, gave away, lost, ate.`,
          vocab: [
            {
              word: `keyword`,
              definition: `A WORD that gives a CLUE. Subtraction KEYWORDS signal you to subtract.`,
              audioPrompt: `A keyword, {name}, is a word that gives a clue. Subtraction keywords signal you to subtract. Take away. Left. Remaining. Fewer. Less. Difference. Each one appears in word problems and tells you subtraction is the operation. Spot them fast.`,
            },
            {
              word: `clue word`,
              definition: `A WORD that HINTS at the operation. CLUE WORDS help you figure out word problems.`,
              audioPrompt: `A clue word, {name}, is a word that hints at the operation. Clue words help you figure out word problems. They tell you what math to do. Like clues in a mystery, they point to the solution. Pay attention to clue words.`,
            },
            {
              word: `signal`,
              definition: `An INDICATOR. The keyword SIGNALS that subtraction is needed.`,
              audioPrompt: `A signal, {name}, is an indicator. The keyword signals that subtraction is needed. When you see "left" or "lost" or "take away" — subtraction. Word problems have built-in signals once you know what to look for.`,
            },
          ],
        },

        {
          id: `l17-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Subtraction in REAL LIFE`,
          paragraphs: [
            `Outside of school, you'll use subtraction CONSTANTLY. Here are real situations.`,
            `MONEY — checking change. "I gave $20. Bought something for $7. Change: $20 - $7 = $13." TIME — how much left? "Movie is 90 minutes. I've watched 35. Left: 90 - 35 = 55 minutes." SCORES — winning margins. "We have 24 points. Other team 18. We're ahead by 24 - 18 = 6." TRAVEL — distance remaining. "Trip is 100 miles. Driven 65. Remaining: 100 - 65 = 35 miles." FOOD — counting what's left. "Started with 12 cookies. Ate 5. Left: 12 - 5 = 7." ENERGY — battery, gas, snacks running out. "Phone at 80%. Used 35%. Now: 80 - 35 = 45%." Subtraction is the math of DECREASING. You'll use it as much as addition in real life.`,
          ],
          image: `/explorer-assets/math/l17-s5-sub-real-life.webp`,
          imageCaption: `Real-life subtraction: money, time, scores, distances, food, battery. You'll use this daily.`,
          vocab: [
            {
              word: `decreasing`,
              definition: `Getting SMALLER over time. Subtraction is the math of DECREASING things.`,
              audioPrompt: `Decreasing, {name}, means getting smaller over time. Subtraction is the math of decreasing things. Money you spend decreases. Time remaining decreases. Battery life decreases. Cookies in the jar decrease. Anywhere something gets smaller, subtraction is at work.`,
            },
            {
              word: `running out`,
              definition: `Getting LOW or USED UP. Subtraction tracks things RUNNING OUT.`,
              audioPrompt: `Running out, {name}, means getting low or used up. Subtraction tracks things running out. The math of "how much is left?" Critical for budgeting time, money, energy. Adults use subtraction constantly to track what they have left. You're learning a forever-skill.`,
            },
            {
              word: `everyday math`,
              definition: `Used in DAILY LIFE. Subtraction is EVERYDAY MATH — you'll use it all the time.`,
              audioPrompt: `Everyday math, {name}, is used in daily life. Subtraction is everyday math — you'll use it all the time. Checking change. Tracking time. Comparing scores. Measuring what's left. The most-used adult skill is everyday math. And you're getting good at it now.`,
            },
          ],
        },

        {
          id: `l17-mag-6`,
          type: `magazine`,
          section: 6,
          headline: `Subtraction: MASTERED`,
          paragraphs: [
            `You've finished the Subtraction sub-block. Six lessons. Massive growth. You can now subtract any whole numbers, AND check your work.`,
            `Look at where you ARE now. You can: ADD multi-digit numbers (Addition sub-block). SUBTRACT multi-digit numbers (Subtraction sub-block). CHECK your work both ways. RECOGNIZE patterns. APPLY math to word problems and real life. You have BOTH inverse operations under your belt. That's the foundation of all elementary math. The next sub-block — MULTIPLICATION INTRO — builds on EVERYTHING you've learned. Multiplication is repeated addition. Subtraction will become repeated... well, you'll see. The skills carry over. The foundation holds. Keep going. You're crushing this.`,
          ],
          image: `/explorer-assets/math/l17-s6-sub-mastered.webp`,
          imageCaption: `Subtraction: MASTERED. 6 lessons. Both inverse operations under your belt. Multiplication next.`,
          vocab: [
            {
              word: `mastered`,
              definition: `Have full SKILL in. You've MASTERED multi-digit subtraction.`,
              audioPrompt: `Mastered, {name}, means have full skill in. You've mastered multi-digit subtraction. Not just "tried it." You know the method, the patterns, the checking habits. That's mastery. Mastery doesn't mean perfect — it means competent. You can confidently solve any subtraction problem.`,
            },
            {
              word: `inverse operations`,
              definition: `OPPOSITE pairs. Addition and subtraction are the FIRST INVERSE OPERATIONS you've mastered.`,
              audioPrompt: `Inverse operations, {name}, are opposite pairs. Addition and subtraction are the first inverse operations you've mastered. They're the foundation of all elementary math. Knowing both gives you tools to handle anything that combines or separates amounts. Multiplication and division come next.`,
            },
            {
              word: `keep going`,
              definition: `Continue LEARNING. Don't STOP — KEEP GOING into multiplication next.`,
              audioPrompt: `Keep going, {name}, means continue learning. Don't stop — keep going into multiplication next. You've built solid foundations. Each new skill stacks on what you already know. The next adventure is multiplication. It's exciting. It's connected to addition. You're ready.`,
            },
          ],
        },

        {
          id: `l17-game`,
          type: `interactive`,
          format: `drag-match`,
          guideText: `Let's see what you remember!`,
          buckets: [
            { id: `fact`, label: `✅ Yes, that's true!`, color: `#34D399` },
            { id: `myth`, label: `❌ No way!`,           color: `#F87171` },
          ],
          items: [
            {
              id: `l17-g1`,
              image: `l17-game-1.webp`,
              label: `SUBTRACTION word problems are just math told as a STORY — the same subtraction rules apply once you translate.`,
              matchPhrase: `Yes! Word problems = stories that hide subtraction inside. Find the numbers, spot keywords like "left" or "lost," set up the math, solve it normally.`,
              correctMatch: `fact`,
            },
            {
              id: `l17-g2`,
              image: `l17-game-2.webp`,
              label: `You now have BOTH addition AND subtraction in your toolkit — the two most useful math operations in real life.`,
              matchPhrase: `True! Both addition and subtraction are now yours. Combined, you can handle any combining or separating amounts. Most-used adult math skills.`,
              correctMatch: `fact`,
            },
            {
              id: `l17-g3`,
              image: `l17-game-3.webp`,
              label: `Subtraction uses TOTALLY DIFFERENT rules than addition — no shared foundation at all.`,
              matchPhrase: `Not at all! Subtraction shares the SAME foundation as addition. Place value. Vertical format. Right-to-left. Column method. Just opposite operation.`,
              correctMatch: `myth`,
            },
            {
              id: `l17-g4`,
              image: `l17-game-4.webp`,
              label: `Once you learn addition and subtraction, your MATH learning is completely DONE — nothing else to learn.`,
              matchPhrase: `Definitely not! Math continues. Multiplication, division, fractions, decimals, algebra, geometry — all built on what you've learned. You're starting, not finishing.`,
              correctMatch: `myth`,
            },
          ],
        },

        {
          id: `l17-quiz`,
          type: `quiz`,
          guideText: `Let's see what you remember!`,
          questions: [
            {
              id: `l17-q1`,
              format: `multiple-choice`,
              question: `What's a SUBTRACTION word problem?`,
              options: [
                `A typing test`,
                `Math told as a STORY where something STARTS BIGGER and gets smaller`,
                `Just a story with no math`,
                `Random words and numbers`,
              ],
              correctIndex: 1,
              explanation: `A subtraction word problem describes a real situation where something starts larger and decreases. Maya's marbles, money spent, distance traveled. Same subtraction math, wrapped in words.`,
            },
            {
              id: `l17-q2`,
              format: `multiple-choice`,
              question: `Maya had 84 marbles. She gave 27 to her brother. How many does she have LEFT?`,
              options: [`47`, `57`, `67`, `37`],
              correctIndex: 1,
              explanation: `57! 84 - 27 = 57. Ones: 4 - 7? Borrow. 14 - 7 = 7. Tens: 7 - 2 = 5. Final: 57. Maya has 57 marbles left.`,
            },
            {
              id: `l17-q3`,
              format: `multiple-choice`,
              question: `Which words signal you should SUBTRACT?`,
              options: [
                `Total, altogether, sum`,
                `LEFT, lost, fewer, difference, take away, gave away`,
                `Combined, plus, more`,
                `Added, gained, received`,
              ],
              correctIndex: 1,
              explanation: `Subtraction keywords: left, lost, fewer, difference, take away, gave away, remaining, less, minus. When you see these in a word problem, you know it's subtraction.`,
            },
            {
              id: `l17-q4`,
              format: `true-false`,
              question: `MIXED PRACTICE (subtraction problems of different patterns randomly) builds REAL skill better than doing one pattern over and over.`,
              correctAnswer: true,
              explanation: `True! Mixed practice trains your brain to recognize patterns and adapt. Same as real life — problems come in random orders, not blocks. Train for real life.`,
            },
            {
              id: `l17-q5`,
              format: `multiple-choice`,
              question: `Subtraction is the math of ___. Things getting smaller over time, like money spent or time used.`,
              options: [`decreasing`, `growing`, `multiplying`, `combining`],
              correctIndex: 0,
              explanation: `Decreasing! Subtraction tracks things getting smaller. Spending money, eating food, running out of time. Wherever something decreases, subtraction is at work.`,
            },
            {
              id: `l17-q6`,
              format: `multiple-choice`,
              question: `Why is having BOTH addition AND subtraction mastered such a BIG DEAL?`,
              options: [
                `It's not really a big deal`,
                `Combined, they let you COMBINE or SEPARATE any amounts — the two most-used math operations in life`,
                `It's just for school tests`,
                `Because multiplication is impossible`,
              ],
              correctIndex: 1,
              explanation: `Combined, addition and subtraction handle any combining or separating in life. Money, time, scores, distances, everything. The two most-used adult math skills. Now yours.`,
            },
          ],
        },

        {
          id: `l17-realworld`,
          type: `real-world`,
          guideText: `Most adults use BOTH addition AND subtraction in MENTAL math constantly. They see 47 + 25 and think "72" without writing anything down. They see $20 - $7.50 and think "$12.50" instantly. How? PRACTICE — hundreds of paper problems as kids built the skill, and now their brains do it internally. With practice, you'll get there too. Multi-digit addition and subtraction become as natural as breathing. Until then, paper math and checking work is the path. Every problem you solve makes the brain pathway stronger.`,
          familyAdventure: {
            title: `Real Life Both Hunt`,
            scenario: `Together, find 8 situations around the house where you'd use addition OR subtraction. Examples: "How many minutes of TV did I watch + how many minutes of reading?" (addition). "How many cookies were in the jar — how many are left now?" (subtraction). "How many points did I score in two games combined?" (addition). "How much battery is left after using it for an hour?" (subtraction). Mix it up. Decide which operation. Solve. Notice how much they BOTH show up in daily life.`,
            talkingPoint: `Ask a grown-up: what's the last thing they added or subtracted today? Bet they used both without even thinking about it!`,
          },
          creativePrompt: {
            title: `Write Two Word Problems`,
            description: `Write TWO word problems on paper — ONE addition and ONE subtraction. Make them about something you love (sports, video games, food, animals). Try to make them sneaky — don't make the keywords too obvious. Then have someone solve both. Show them how the same numbers can make either operation depending on the words used.`,
          },
        },

        {
          id: `l17-celebration`,
          type: `celebration`,
          message: `MASSIVE WIN! Subtraction sub-block COMPLETE. Six lessons. Full toolkit. You can subtract any multi-digit numbers AND check with addition. You have BOTH inverse operations mastered. That's the foundation of all elementary math. Next up — MULTIPLICATION. We'll see that multiplication is REPEATED addition. Everything you've learned will help. You're crushing this!`,
          badge: `subtraction-pro`,
          badgeName: `Subtraction Pro`,
          xpEarned: 50,
        },

      ],
    },
  ],
};

export default MATH_L17;

// ─── Dev asset check ───
if (import.meta.env?.DEV) {
  const mags = MATH_L17.lessons[0].screens.filter(s => s.type === 'magazine').length;
  const game = MATH_L17.lessons[0].screens.find(s => s.type === 'interactive')?.items?.length ?? 0;
  const quiz = MATH_L17.lessons[0].screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  console.log(`[LESSON-MATH-L17] Loaded: "Subtraction Practice" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
}
