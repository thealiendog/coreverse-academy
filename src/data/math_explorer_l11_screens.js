// ─────────────────────────────────────────────────────────────────────────────
// MATH  |  L11 — Addition Practice
// Age band : explorers (6–8)   Guide: remi
// Standards: CCSS 2.OA.A.1 / 2.NBT.B.7
// REWRITE v2 (May 2026): Grade 1 accessible, ADDITION KEYWORD / NOT ADDITION
// 2-bucket identification game tests word-problem keyword recognition
// ─────────────────────────────────────────────────────────────────────────────

const MATH_L11 = {
  ageBand:   `explorers`,
  subjectId: `math`,
  guide:     `remi`,

  lessons: [
    {
      id:        `math-6-8-11`,
      title:     `Addition Practice`,
      duration:  12,
      xpReward:  50,
      badge:     `addition-pro`,
      badgeName: `Addition Pro`,

      screens: [

        {
          id: `l11-welcome`,
          type: `welcome`,
          guideText: `Hey {name}, Remi here! Addition sub-block CLOSING lesson today! We've built a complete addition toolkit. Now we PRACTICE — mixed patterns plus REAL-LIFE word problems! No new concepts. Just bringing everything together!`,
          headline: `Addition Practice`,
          subtitle: `Bringing it all together — mixed problems and real-life applications`,
          visual: `/explorer-assets/math/l11-welcome.webp`,
        },

        {
          id: `l11-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Your Complete TOOLKIT`,
          paragraphs: [
            `Look at what you've BUILT, {name}! Let's review your addition toolkit!`,
            `From L06: ADD PLACE BY PLACE — ones to ones, tens to tens, hundreds to hundreds. From L07: USE THE VERTICAL FORMAT — stack the numbers, draw the line, go right to left. From L08: REGROUP when columns OVERFLOW. From L09: RECOGNIZE PATTERNS — four three-digit patterns. From L10: ALWAYS CHECK YOUR WORK! That's your toolkit! Five lessons. Massive skills!`,
          ],
          image: `/explorer-assets/math/l11-s1-everything-together.webp`,
          imageCaption: `Complete toolkit: place by place + vertical format + regrouping + patterns + checking!`,
          vocab: [
            { word: `toolkit`,    definition: `Your collection of math skills.`,
              audioPrompt: `A toolkit is your collection of math skills. Your addition toolkit has 5 powerful tools. Place by place. Vertical format. Regrouping. Pattern recognition. Checking. Together, they let you handle any addition problem!` },
            { word: `complete`,   definition: `Has all the parts.`,
              audioPrompt: `Complete means has all the parts. Your addition toolkit is complete — nothing missing. Everything you need to add any whole numbers. Complete doesn't mean perfect — practice still helps speed!` },
            { word: `real adder`, definition: `Someone who can solve addition confidently.`,
              audioPrompt: `A real adder is someone who can solve addition confidently. You're a real adder now. Not learning anymore — practicing. Real adders see problems and know how to attack them!` },
          ],
        },

        {
          id: `l11-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `MIXED Practice`,
          paragraphs: [
            `When you practice math, MIX the patterns! Don't do five Pattern A problems in a row! Mix them up!`,
            `Try these in order: 234 + 152 (Pattern A — no carries). 268 + 174 (Pattern B — ones carry). 281 + 354 (Pattern C — tens carry). 467 + 285 (Pattern D — both carry)! Then mix again! Why mix? Because real life mixes! Practicing mixed problems trains your brain to RECOGNIZE the pattern fast, then adapt!`,
          ],
          image: `/explorer-assets/math/l11-s2-mixed-patterns.webp`,
          imageCaption: `Mix the patterns: A → B → C → D → repeat!`,
          vocab: [
            { word: `mix it up`,      definition: `Practice different types randomly.`,
              audioPrompt: `Mix it up is practice different types randomly. Mix it up to train pattern recognition. Doing 5 of the same pattern makes your brain lazy. Mixing forces your brain to identify each pattern fresh!` },
            { word: `mixed practice`, definition: `Randomly arranged problems.`,
              audioPrompt: `Mixed practice is randomly arranged problems. Mixed practice is harder but builds real skill. Easy mode: same kind over and over. Real skill mode: jumping between types. Real life is mixed practice!` },
            { word: `adapt`,          definition: `Adjust to what's needed.`,
              audioPrompt: `To adapt is to adjust to what's needed. Adapt to each pattern as it comes. Pattern A? Quick and easy. Pattern D? Slow and careful. Adapting means using the right approach!` },
          ],
        },

        {
          id: `l11-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `WORD PROBLEMS`,
          paragraphs: [
            `Real-life addition usually comes as a WORD PROBLEM! Words first. You have to figure out the math!`,
            `Example: "Sarah has 47 stickers. Her friend gives her 38 more. How many stickers does she have NOW?" To solve: 1) Read carefully. 2) Find the numbers. 3) Decide what to do. 4) Set up the math. 5) Solve! Sarah started with 47, GOT MORE (38), and we want the TOTAL. That's addition! 47 + 38 = 85!`,
          ],
          image: `/explorer-assets/math/l11-s3-word-problem.webp`,
          imageCaption: `Word problem: Sarah's 47 + friend's 38 = 85 total!`,
          vocab: [
            { word: `word problem`, definition: `Math written as a story.`,
              audioPrompt: `A word problem is math written as a story. Word problems describe real situations using words. The numbers and the math are hidden inside the words. Your job is to find them and solve!` },
            { word: `translate`,    definition: `Convert from one form to another.`,
              audioPrompt: `To translate is to convert from one form to another. Translate the story into a math problem. The story is in words. The math is in numbers. Translating means rewriting the story as a math expression!` },
            { word: `set up`,       definition: `Organize the math from the words.`,
              audioPrompt: `To set up is to organize the math from the words. Set up the problem before solving. Like setting the table before eating. Decide what numbers you have, then what operation, then write the problem!` },
          ],
        },

        {
          id: `l11-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Addition KEYWORDS`,
          paragraphs: [
            `Word problems use certain WORDS that tell you it's ADDITION! Watch for these clues!`,
            `KEYWORDS that signal addition: "TOTAL" — find the total! "ALTOGETHER" — how many altogether? "SUM" — find the sum! "COMBINED" — combined amount! "IN ALL" — count everything! "MORE" — added some more! "PLUS" — direct addition word! When you see these words, you know addition is involved! Example: "The team scored 23 points first half and 31 points second half. What was their TOTAL score?" "Total" = add!`,
          ],
          image: `/explorer-assets/math/l11-s4-keywords.webp`,
          imageCaption: `Addition keywords: total, altogether, sum, combined, in all, more, plus!`,
          vocab: [
            { word: `keyword`,   definition: `A word that gives a clue.`,
              audioPrompt: `A keyword is a word that gives a clue. Addition keywords signal you to add. Total. Altogether. Sum. Combined. In all. Each of these words tells you addition is the operation!` },
            { word: `clue word`, definition: `A word that hints at the answer.`,
              audioPrompt: `A clue word is a word that hints at the answer. Clue words help you figure out word problems. Like clues in a mystery, they point to the solution. Pay attention to clue words!` },
            { word: `signal`,    definition: `An indicator.`,
              audioPrompt: `A signal is an indicator. The keyword signals that addition is needed. When you see "total" or "altogether," that's the signal. Learn the signals and you're more than halfway done!` },
          ],
        },

        {
          id: `l11-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Addition in REAL LIFE`,
          paragraphs: [
            `Outside school, you'll use addition CONSTANTLY! Here are real situations!`,
            `MONEY — "I spent $4 and $7. Total: $11!" GAMES — combining scores. "I scored 250 + 175 + 100. Total: 525!" COOKING — measuring. "2 cups + 1 cup + 1 cup = 4 cups!" TRAVEL — adding distances. "Drove 45 miles, then 30 more. Total: 75 miles!" TIME — adding minutes. "Read 20 + practice 15 + homework 25 = 60 minutes!" Addition is the math of COMBINING!`,
          ],
          image: `/explorer-assets/math/l11-s5-real-life.webp`,
          imageCaption: `Real-life addition: money, scores, cooking, distances, time!`,
          vocab: [
            { word: `constantly`, definition: `All the time.`,
              audioPrompt: `Constantly means all the time. You'll use addition constantly in real life. Money. Time. Scores. Cooking. Wherever you combine amounts, addition shows up. The most common math operation you'll do!` },
            { word: `combining`,  definition: `Putting things together.`,
              audioPrompt: `Combining means putting things together. Addition is the math of combining things. Two amounts become one. When the situation involves combining, addition is your tool!` },
            { word: `useful`,     definition: `Has real value in life.`,
              audioPrompt: `Useful means has real value in life. Addition is one of the most useful skills you'll learn. Adults use it daily. Workers use it at jobs. It's everywhere. Learning it well pays off forever!` },
          ],
        },

        {
          id: `l11-mag-6`,
          type: `magazine`,
          section: 6,
          headline: `Addition: MASTERED`,
          paragraphs: [
            `{name} — you've FINISHED the Addition sub-block! Six lessons. Massive growth!`,
            `You went from "what does multi-digit addition even mean?" to "I have a complete toolkit"! HUGE jump! Next subject — SUBTRACTION! Here's good news: subtraction is just addition in REVERSE! Everything you learned about place value, columns, and bundling will help! Instead of bundling UP (carrying), you'll be BORROWING from bigger places. Same foundation. Place value still rules!`,
          ],
          image: `/explorer-assets/math/l11-s6-addition-done.webp`,
          imageCaption: `Addition: MASTERED! 6 lessons. Subtraction next!`,
          vocab: [
            { word: `mastered`,    definition: `Have full skill in.`,
              audioPrompt: `Mastered means have full skill in. You've mastered multi-digit addition. Not just tried it. You know the method, the patterns, the checking habits. That's mastery at your level!` },
            { word: `reverse`,     definition: `Backward or opposite.`,
              audioPrompt: `Reverse means backward or opposite. Subtraction is addition in reverse. Where addition combines, subtraction separates. The foundation — place value — is identical!` },
            { word: `crushing it`, definition: `Doing excellent work.`,
              audioPrompt: `Crushing it means doing excellent work. You're crushing it in math. Six lessons of solid skill building. Strong foundation. Real progress. Subtraction is next. You'll crush that too!` },
          ],
        },

        {
          id: `l11-game`,
          type: `interactive`,
          format: `drag-match`,
          guideText: `Let's try it, {name}! Here are 4 words from word problems. Drag each — is this an ADDITION KEYWORD or NOT?`,
          buckets: [
            { id: `addition_word`, label: `➕ ADDITION KEYWORD`,    color: `#34D399` },
            { id: `not_addition`,  label: `❌ NOT ADDITION`,        color: `#F87171` },
          ],
          items: [
            { id: `l11-g1`, image: `l11-game-1.webp`, label: `"What is the TOTAL?"`,
              matchPhrase: `Yes! "TOTAL" is a big addition keyword! When you see "total," you ADD!`,
              correctMatch: `addition_word` },
            { id: `l11-g2`, image: `l11-game-2.webp`, label: `"How much is LEFT?"`,
              matchPhrase: `Right! "LEFT" is NOT addition. "How much is left" means you took some away — that's subtraction!`,
              correctMatch: `not_addition` },
            { id: `l11-g3`, image: `l11-game-3.webp`, label: `"How many ALTOGETHER?"`,
              matchPhrase: `Yes! "ALTOGETHER" is an addition keyword! Combine everything to find the total!`,
              correctMatch: `addition_word` },
            { id: `l11-g4`, image: `l11-game-4.webp`, label: `"She gave 5 AWAY"`,
              matchPhrase: `Right! "AWAY" is NOT addition. Giving things away is removing — that's subtraction!`,
              correctMatch: `not_addition` },
          ],
        },

        {
          id: `l11-quiz`,
          type: `quiz`,
          guideText: `Let's see what you remember, {name}!`,
          questions: [
            { id: `l11-q1`, format: `multiple-choice`,
              question: `What's a WORD PROBLEM?`,
              options: [`A spelling test`, `Math written as a STORY — find the numbers and operation`, `Just a story`, `A puzzle book`],
              correctIndex: 1,
              explanation: `A word problem is math told as a story. Read carefully, find the numbers, set up the math, solve!` },
            { id: `l11-q2`, format: `multiple-choice`,
              question: `Sarah has 47 stickers. Her friend gives her 38 more. How many does she have now?`,
              options: [`75`, `85`, `95`, `105`],
              correctIndex: 1,
              explanation: `85! 47 + 38. Ones: 7+8=15, carry 1. Tens: 4+3+1=8. Total: 85 stickers!` },
            { id: `l11-q3`, format: `multiple-choice`,
              question: `Which words signal you should ADD?`,
              options: [`Backward, less`, `TOTAL, altogether, sum, combined, MORE, plus`, `Take away, minus`, `Different, away`],
              correctIndex: 1,
              explanation: `Addition keywords: total, altogether, sum, combined, more, plus, in all!` },
            { id: `l11-q4`, format: `true-false`,
              question: `MIXED PRACTICE builds real skill better than doing one pattern over and over.`,
              correctAnswer: true,
              explanation: `True! Mixed practice trains your brain to recognize patterns and adapt!` },
            { id: `l11-q5`, format: `fill-blank`,
              question: `The team scored 23 points first half and 31 second half. What was their ___ score?`,
              options: [`total`, `lowest`, `worst`, `least`],
              correctIndex: 0,
              explanation: `Total! The keyword "total" signals addition. 23 + 31 = 54 total points!` },
            { id: `l11-q6`, format: `multiple-choice`,
              question: `Why is addition USEFUL in REAL LIFE?`,
              options: [`It's not`, `It's the math of COMBINING — used for money, time, scores, cooking, distances`, `Only for tests`, `Just to look smart`],
              correctIndex: 1,
              explanation: `Addition is the math of combining. Everywhere you combine amounts!` },
          ],
        },

        {
          id: `l11-realworld`,
          type: `real-world`,
          guideText: `Here's something to know, {name}! Most ADULTS use addition every single day — but they do it in their HEAD! After enough practice, multi-digit addition becomes MENTAL MATH. They see 47 + 25 and their brain just goes "72" without writing! How? Practice. Hundreds of paper additions as kids. Each practice problem builds toward a forever-skill!`,
          familyAdventure: `Together, do a "REAL-LIFE ADDITION HUNT"! Spend 15 minutes finding real situations where addition is used. "How many minutes reading + brushing teeth + eating?" Make up 5 real word problems together. Solve them!`,
          creativePrompt: `Write your OWN word problem! Pick a topic you love — sports, animals, video games, food. Create a story with TWO amounts that need to be ADDED. Write at least 3 sentences. For stretch, write a 5-sentence story with extra details and a fun ending. Then SOLVE your own problem. Show a family member!`,
        },

        {
          id: `l11-celebration`,
          type: `celebration`,
          message: `Massive win, {name}! Addition sub-block COMPLETE! Six lessons. Full toolkit! You can solve any multi-digit addition AND translate word problems into math! Next up — SUBTRACTION! Same foundation. Just a new twist: BORROWING! Get ready! Remi is so proud! 🦝`,
          badge: `addition-pro`,
          badgeName: `Addition Pro`,
          xpEarned: 50,
        },

      ],
    },
  ],
};

export default MATH_L11;

// ─── Dev asset check ─────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const mags  = MATH_L11.lessons[0].screens.filter(s => s.type === 'magazine').length;
  const game  = MATH_L11.lessons[0].screens.find(s => s.type === 'interactive')?.items?.length ?? 0;
  const quiz  = MATH_L11.lessons[0].screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  console.log(`[LESSON-MATH-L11] Loaded: "Addition Practice" with ${mags} magazine sections, ${game} game items, ${quiz} quiz questions`);
}
