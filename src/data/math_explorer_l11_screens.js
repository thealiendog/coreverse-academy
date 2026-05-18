// ─────────────────────────────────────────────────────────────────────────────
// MATH  |  L11 — Addition Practice
// Age band : explorers (6–8)   Guide: remi
// Standards: CCSS 2.OA.A.1 / 2.NBT.B.7 (word problems, mixed addition practice)
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
          guideText: `Hey {name}, Remi here. Addition sub-block CLOSING lesson today. We've built a complete addition toolkit. Now we PRACTICE — mixed patterns, plus REAL-LIFE word problems. No new concepts. Just bringing everything together. After this, you'll have addition LOCKED IN. Let's roll.`,
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
            `Look at what you've BUILT, {name}. Let's review your addition toolkit.`,
            `From L06: ADD PLACE BY PLACE. Ones to ones, tens to tens, hundreds to hundreds. From L07: USE THE VERTICAL FORMAT. Stack the numbers, draw the line, go right to left. From L08: REGROUP when columns OVERFLOW. Bundle 10 of one place into 1 of the next, write the little "1" above. From L09: RECOGNIZE PATTERNS. Four three-digit patterns — no carries, ones carry, tens carry, both carry. From L10: ALWAYS CHECK YOUR WORK. Estimate first, watch for common mistakes, redo if important. THAT'S YOUR TOOLKIT. Five lessons. Massive skills. You're a real adder now. Today we put it all to use.`,
          ],
          image: `/explorer-assets/math/l11-s1-everything-together.webp`,
          imageCaption: `Complete toolkit: place by place + vertical format + regrouping + patterns + checking. All ready to use.`,
          vocab: [
            { word: `toolkit`,        definition: `Your COLLECTION of math skills. Your addition TOOLKIT now has 5 powerful tools.`,
              audioPrompt: `A toolkit, {name}, is your collection of math skills. Your addition toolkit now has five powerful tools. Place by place. Vertical format. Regrouping. Pattern recognition. Checking. Each one is a tool. Together, they let you handle any addition problem. You've built this in just six lessons.` },
            { word: `complete`,       definition: `Has ALL the PARTS. Your addition toolkit is COMPLETE — nothing missing.`,
              audioPrompt: `Complete, {name}, means has all the parts. Your addition toolkit is complete — nothing missing. Place value foundation, the method, the regrouping trick, the patterns, the checking habits. Everything you need to add any whole numbers. Complete doesn't mean perfect — practice still helps speed. But you have all the pieces.` },
            { word: `real adder`,     definition: `Someone who can SOLVE addition CONFIDENTLY. You're a REAL ADDER now.`,
              audioPrompt: `A real adder, {name}, is someone who can solve addition confidently. You're a real adder now. Not learning anymore — practicing. Big difference. Real adders see problems and know how to attack them. They might still go slow on harder ones, but they don't panic. They have the tools. You do too.` },
          ],
        },

        {
          id: `l11-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `MIXED Practice`,
          paragraphs: [
            `When you practice math, MIX the patterns. Don't do five Pattern A problems in a row. Mix them up.`,
            `Try these in order: 234 + 152 (Pattern A — no carries). 268 + 174 (Pattern B — ones carry). 281 + 354 (Pattern C — tens carry). 467 + 285 (Pattern D — both carry). Then mix again. Why mix? Because real life mixes. You won't always know what pattern is coming. Practicing mixed problems trains your brain to RECOGNIZE the pattern fast, then adapt. Same with checking — practice estimating BEFORE every problem, not just the hard ones. The habit needs to be automatic. Mixed practice is HARDER than blocked practice (all one type) — but it builds REAL skill. Real skill is what helps in real life.`,
          ],
          image: `/explorer-assets/math/l11-s2-mixed-patterns.webp`,
          imageCaption: `Mix the patterns: A → B → C → D → repeat. Brain learns to spot pattern and adapt fast.`,
          vocab: [
            { word: `mix it up`,      definition: `Practice DIFFERENT TYPES randomly. MIX IT UP to train pattern recognition.`,
              audioPrompt: `Mix it up, {name}, is practice different types randomly. Mix it up to train pattern recognition. Doing five of the same pattern in a row makes your brain lazy. Mixing patterns forces your brain to identify each one fresh. That builds the real skill — being able to handle any problem that comes.` },
            { word: `mixed practice`, definition: `RANDOMLY arranged problems. MIXED PRACTICE is harder but builds REAL skill.`,
              audioPrompt: `Mixed practice, {name}, is randomly arranged problems. Mixed practice is harder but builds real skill. Easy mode: doing the same kind over and over. Real skill mode: jumping between types. Real life is mixed practice. Train for it now.` },
            { word: `adapt`,          definition: `ADJUST to what's needed. ADAPT to each pattern as it comes.`,
              audioPrompt: `To adapt, {name}, is to adjust to what's needed. Adapt to each pattern as it comes. Pattern A? Quick and easy. Pattern D? Slow and careful. Adapting means using the right approach for the right problem. It's a thinking skill, not just a math one.` },
          ],
        },

        {
          id: `l11-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `WORD PROBLEMS`,
          paragraphs: [
            `Real-life addition usually comes as a WORD PROBLEM. Words first. You have to figure out the math.`,
            `Example: "Sarah has 47 stickers. Her friend gives her 38 more. How many stickers does she have NOW?" To solve this, you have to: 1) Read carefully. 2) Find the numbers. 3) Decide what to do with them. 4) Set up the math. 5) Solve. Here, the words tell us Sarah started with 47, GOT MORE (38), and we want the TOTAL. That's addition. So 47 + 38 = 85. Sarah has 85 stickers. Word problems take a little extra thinking, but they're just math with a story. Once you can translate the story into math, the solving part is what you already know.`,
          ],
          image: `/explorer-assets/math/l11-s3-word-problem.webp`,
          imageCaption: `Word problem: Sarah's 47 + friend's 38 = 85 total. Story → math → solve. 5 steps.`,
          vocab: [
            { word: `word problem`,   definition: `Math written as a STORY. WORD PROBLEMS describe real situations using words.`,
              audioPrompt: `A word problem, {name}, is math written as a story. Word problems describe real situations using words. Sarah and her stickers. A class counting points. Friends sharing snacks. The numbers and the math are hidden inside the words. Your job is to find them and solve.` },
            { word: `translate`,      definition: `Convert from one FORM to another. TRANSLATE the story into a math problem.`,
              audioPrompt: `To translate, {name}, is to convert from one form to another. Translate the story into a math problem. The story is in words. The math is in numbers and symbols. Translating means rewriting the story as a math expression. Once translated, the solving part is just regular addition.` },
            { word: `set up`,         definition: `ORGANIZE the math FROM the words. SET UP the problem before solving.`,
              audioPrompt: `To set up, {name}, is to organize the math from the words. Set up the problem before solving. Like setting the table before eating. First decide what numbers you have. Then decide what operation. Then write the math problem. Then solve. Setting up well saves time and prevents mistakes.` },
          ],
        },

        {
          id: `l11-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Addition KEYWORDS`,
          paragraphs: [
            `Word problems use certain WORDS that tell you it's ADDITION. Watch for these clues.`,
            `KEYWORDS that signal addition: "TOTAL" — find the total. "ALTOGETHER" — how many altogether? "SUM" — find the sum. "COMBINED" — combined amount. "HOW MANY IN ALL" — count everything. "MORE" — added some more. "PLUS" — direct addition word. "ADDED" — putting together. When you see these words, you know addition is involved. They're like little clue signals. Read carefully, spot the clue word, and you'll know what to do. Example: "The team scored 23 points in the first half and 31 points in the second half. What was their TOTAL score?" "Total" = add. 23 + 31 = 54 points.`,
          ],
          image: `/explorer-assets/math/l11-s4-keywords.webp`,
          imageCaption: `Addition keywords: total, altogether, sum, combined, in all, more, plus, added. Watch for these clues.`,
          vocab: [
            { word: `keyword`,        definition: `A WORD that gives a CLUE. Addition KEYWORDS signal you to add.`,
              audioPrompt: `A keyword, {name}, is a word that gives a clue. Addition keywords signal you to add. Total. Altogether. Sum. Combined. How many in all. Each of these words appears in word problems and tells you addition is the operation. Spot them fast and you'll know what to do quickly.` },
            { word: `clue word`,      definition: `A WORD that HINTS at the answer. CLUE WORDS help you figure out word problems.`,
              audioPrompt: `A clue word, {name}, is a word that hints at the answer. Clue words help you figure out word problems. They tell you what operation to use. Like clues in a mystery, they point to the solution. Pay attention to clue words. They make problems much easier.` },
            { word: `signal`,         definition: `An INDICATOR. The keyword SIGNALS that addition is needed.`,
              audioPrompt: `A signal, {name}, is an indicator. The keyword signals that addition is needed. When you see "total" or "altogether" in a word problem, that's the signal. Add. Word problems have built-in signals once you know what to look for. Learn the signals and you're more than halfway done.` },
          ],
        },

        {
          id: `l11-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Addition in REAL LIFE`,
          paragraphs: [
            `Outside of school, you'll use addition CONSTANTLY. Here are some real situations.`,
            `MONEY — adding what you spend. "I spent $4 and $7. Total: $11." ALLOWANCE — saving over weeks. "I got $5 each week for 4 weeks. Wait — that's multiplication. But adding: $5 + $5 + $5 + $5 = $20." GAMES — combining scores. "I scored 250 + 175 + 100 across three rounds. Total: 525." COOKING — measuring ingredients. "2 cups + 1 cup + 1 cup = 4 cups." TRAVEL — adding distances. "We drove 45 miles, then 30 more. Total: 75 miles." TIME — adding minutes. "Practice 20 minutes + read 15 minutes + homework 25 minutes = 60 minutes total." Addition is the math of COMBINING things. You'll use it more than any other math skill in life.`,
          ],
          image: `/explorer-assets/math/l11-s5-real-life.webp`,
          imageCaption: `Real-life addition: money, scores, cooking, distances, time. You'll use this constantly.`,
          vocab: [
            { word: `constantly`,     definition: `ALL the TIME. You'll use addition CONSTANTLY in real life.`,
              audioPrompt: `Constantly, {name}, means all the time. You'll use addition constantly in real life. Money. Time. Scores. Cooking. Travel. Sports. Shopping. Wherever you combine amounts, addition shows up. It's the most common math operation you'll do. Worth being good at it.` },
            { word: `combining`,      definition: `PUTTING things TOGETHER. Addition is the math of COMBINING things.`,
              audioPrompt: `Combining, {name}, means putting things together. Addition is the math of combining things. Two amounts become one. Three amounts become one. Bigger or longer or more. When the situation involves combining, addition is your tool. Always.` },
            { word: `useful`,         definition: `Has REAL VALUE in life. Addition is one of the most USEFUL skills you'll learn.`,
              audioPrompt: `Useful, {name}, means has real value in life. Addition is one of the most useful skills you'll learn. Adults use it daily. Workers use it at jobs. Parents use it at stores. Drivers use it on trips. Athletes use it for stats. It's everywhere. Learning it well pays off forever.` },
          ],
        },

        {
          id: `l11-mag-6`,
          type: `magazine`,
          section: 6,
          headline: `Addition: MASTERED`,
          paragraphs: [
            `{name} — you've just FINISHED the Addition sub-block. Six lessons. Massive growth.`,
            `You went from "what does multi-digit addition even mean?" to "I have a complete toolkit and can solve any addition problem." That's a HUGE jump. The next subject is SUBTRACTION — and here's some good news. Subtraction is just addition in REVERSE. Everything you learned about place value, columns, and bundling will help. The mechanics are the OPPOSITE of addition — instead of bundling UP, you'll be BORROWING from bigger places. But the foundation is the same. Place value still rules. Right to left still rules. Practice still rules. You've built strong addition. Subtraction will build on it. Keep going. You're crushing this.`,
          ],
          image: `/explorer-assets/math/l11-s6-addition-done.webp`,
          imageCaption: `Addition: MASTERED. 6 lessons. Massive growth. Subtraction next — built on the same foundation.`,
          vocab: [
            { word: `mastered`,       definition: `Have full SKILL in. You've MASTERED multi-digit addition.`,
              audioPrompt: `Mastered, {name}, means have full skill in. You've mastered multi-digit addition. Not just "tried it." You know the method, the patterns, the checking habits. That's mastery. Mastery doesn't mean perfect — it means competent. You can confidently solve any addition problem. That's mastery at your level.` },
            { word: `reverse`,        definition: `BACKWARD or OPPOSITE. Subtraction is addition in REVERSE.`,
              audioPrompt: `Reverse, {name}, means backward or opposite. Subtraction is addition in reverse. Where addition combines, subtraction separates. Where addition bundles up, subtraction borrows down. The mechanics are opposite, but the foundation — place value — is identical. Knowing addition well makes subtraction easier.` },
            { word: `crushing it`,    definition: `Doing EXCELLENT work. You're CRUSHING IT in math.`,
              audioPrompt: `Crushing it, {name}, means doing excellent work. You're crushing it in math. Six lessons of solid skill building. Strong foundation. Real progress. Don't take it for granted — celebrate the win. Then keep going. Subtraction is next. You'll crush that too.` },
          ],
        },

        {
          id: `l11-game`,
          type: `interactive`,
          format: `drag-match`,
          guideText: `Let's see what you remember, {name}.`,
          buckets: [
            { id: `fact`, label: `✅ Yes, that's true!`, color: `#34D399` },
            { id: `myth`, label: `❌ No way!`,         color: `#F87171` },
          ],
          items: [
            { id: `l11-g1`, image: `l11-game-1.webp`, label: `WORD PROBLEMS are just math told as a STORY — the same addition rules apply once you translate.`,
              matchPhrase: `Yes! Word problems = stories that hide addition inside. Find the numbers, spot keywords like "total" or "altogether," set up the math, solve it normally.`,
              correctMatch: `fact` },
            { id: `l11-g2`, image: `l11-game-2.webp`, label: `PRACTICE builds MASTERY — the more reps you do, the more automatic addition becomes.`,
              matchPhrase: `True! Practice is everything. Even skills you've "learned" need use to stay sharp. Brains forget unused things. Reps keep skills strong.`,
              correctMatch: `fact` },
            { id: `l11-g3`, image: `l11-game-3.webp`, label: `Word problems use TOTALLY DIFFERENT math than regular addition — brand new rules.`,
              matchPhrase: `Not at all! Same math. Just wrapped in words. Find the numbers, identify the operation (keywords help), solve. Then you're using normal addition.`,
              correctMatch: `myth` },
            { id: `l11-g4`, image: `l11-game-4.webp`, label: `Once you LEARN addition, you never need to practice it again — the skill stays sharp without using it.`,
              matchPhrase: `Definitely not! Skills fade without use. Practice keeps them sharp. Even adults practice math skills (in their work). Reps matter forever.`,
              correctMatch: `myth` },
          ],
        },

        {
          id: `l11-quiz`,
          type: `quiz`,
          guideText: `Let's see what you remember, {name}.`,
          questions: [
            { id: `l11-q1`, format: `multiple-choice`,
              question: `What's a WORD PROBLEM?`,
              options: [`A spelling test`, `Math written as a STORY — you find the numbers and figure out the operation`, `Just a story`, `A puzzle book`],
              correctIndex: 1,
              explanation: `A word problem is math told as a story. You read carefully, find the numbers, decide what to do with them, set up the math, and solve. Same addition skills you already know.` },
            { id: `l11-q2`, format: `multiple-choice`,
              question: `Sarah has 47 stickers. Her friend gives her 38 more. How many stickers does she have now?`,
              options: [`75`, `85`, `95`, `105`],
              correctIndex: 1,
              explanation: `85! 47 + 38. Ones: 7+8=15, carry 1. Tens: 4+3+1=8. Total: 85 stickers.` },
            { id: `l11-q3`, format: `multiple-choice`,
              question: `Which words signal you should ADD?`,
              options: [`Backward, less`, `TOTAL, altogether, sum, combined, MORE, plus`, `Take away, minus`, `Different, away`],
              correctIndex: 1,
              explanation: `Addition keywords: total, altogether, sum, combined, more, plus, added, in all. When you spot these in a word problem, you know it's addition.` },
            { id: `l11-q4`, format: `true-false`,
              question: `MIXED PRACTICE (problems of different patterns randomly) builds REAL skill better than doing one pattern over and over.`,
              correctAnswer: true,
              explanation: `True! Mixed practice trains your brain to recognize patterns and adapt. Same as real life — problems come in random orders, not in nice blocks. Train for real life.` },
            { id: `l11-q5`, format: `fill-blank`,
              question: `The team scored 23 points in the first half and 31 in the second half. What was their ___ score? (We'd add: 23 + 31 = 54)`,
              options: [`total`, `lowest`, `worst`, `least`],
              correctIndex: 0,
              explanation: `Total! The keyword "total" signals addition. 23 + 31 = 54 total points.` },
            { id: `l11-q6`, format: `multiple-choice`,
              question: `Why is addition USEFUL in REAL LIFE?`,
              options: [`It's not`, `It's the math of COMBINING — used for money, time, scores, cooking, distances, more`, `Only for tests`, `Just to look smart`],
              correctIndex: 1,
              explanation: `Addition is the math of combining. Money + time + scores + cooking + distances + everywhere you combine amounts. The most-used math operation in life.` },
          ],
        },

        {
          id: `l11-realworld`,
          type: `real-world`,
          guideText: `Here's something to know, {name}. Most ADULTS use addition every single day — but they don't always do it on paper. They do it in their HEAD. After enough practice, multi-digit addition becomes mental math. You see 47 + 25, and your brain just goes "72" without writing anything down. How do they get there? Practice. They did paper addition as kids, hundreds and hundreds of times. Eventually, the brain takes the place value bundling and runs it internally. The faster you can do paper addition, the closer you are to mental math. So every practice problem isn't just "more work" — it's BUILDING TOWARD a forever-skill. By the time you're a grown-up, addition will be as natural as breathing.`,
          familyAdventure: `Together, do a "REAL-LIFE ADDITION HUNT." Spend 15 minutes around the house finding real situations where addition is used. Examples: "How many minutes do I spend reading + brushing teeth + eating?" or "What's our total grocery bill?" or "How many stuffed animals are on this bed PLUS that shelf?" Make up 5 real word problems together. Solve them. The point is to see addition EVERYWHERE in daily life.`,
          creativePrompt: `Write your OWN word problem. Pick a topic you love — sports, animals, video games, food, anything. Create a story with TWO amounts that need to be ADDED to find a total. Example: "I had 27 Pokémon cards. My friend gave me 18 more. How many do I have now?" Then SOLVE your own problem. Show it to a family member and have them solve it too. Compare answers. You're now a problem MAKER, not just a problem solver.`,
        },

        {
          id: `l11-celebration`,
          type: `celebration`,
          message: `Massive win, {name}! Addition sub-block COMPLETE. Six lessons. Full toolkit. You can solve any multi-digit addition problem AND translate word problems into math. You're a real adder now. Next up — SUBTRACTION. Lots of what you've learned will carry over (place value, columns, right-to-left). But subtraction has its own twist — BORROWING. Think of it as bundling in reverse. Get ready. Subtraction is up next. — Remi 🦝`,
          badge: `addition-pro`,
          badgeName: `Addition Pro`,
          xpEarned: 50,
        },

      ],
    },
  ],
};

export default MATH_L11;

// ─── Dev asset check ───
if (import.meta.env?.DEV) {
  const mags  = MATH_L11.lessons[0].screens.filter(s => s.type === 'magazine').length;
  const game  = MATH_L11.lessons[0].screens.find(s => s.type === 'interactive')?.items?.length ?? 0;
  const quiz  = MATH_L11.lessons[0].screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  console.log(`[LESSON-MATH-L11] Loaded: "Addition Practice" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
}
