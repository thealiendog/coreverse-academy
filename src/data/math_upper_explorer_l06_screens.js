// ─────────────────────────────────────────────────────────────────────────────
// MATH UE  |  L06 — Patterns and Rules
// Age band : upper_explorers (9–10)   Guide: remi
// Standards: CCSS 4.OA.C.5
// CALIBRATED: Math UE Spec v2
// Game format: investigation (Pattern Detective: find the rule)
// Visual model: number-line + sequences
// Misconceptions: "There's only one right pattern" (false — many sequences fit) /
//                 "Patterns are only +1 or ×2" (false — wider variety exists) /
//                 "Rules must be simple arithmetic" (false — can be recursive too)
// ─────────────────────────────────────────────────────────────────────────────

const MATH_UE_L06 = {
  ageBand: `upper_explorers`,
  subjectId: `math`,
  guide: `remi`,

  lessons: [
    {
      id: `math-9-10-06`,
      title: `Patterns and Rules`,
      duration: 22,
      xpReward: 75,
      badge: `pattern-detective`,
      badgeName: `Pattern Detective`,

      screens: [
        {
          id: `l06-welcome`,
          type: `welcome`,
          guideText: `Welcome back, {name}. Today we hunt for patterns. Math is honestly mostly about patterns — once you see one, you can predict what comes next, what came before, and how to make new ones. Pattern thinking is also the foundation for algebra in a couple of years. Today we'll spot patterns, find their rules, and even build our own.`,
          headline: `Patterns and Rules`,
          subtitle: `Spotting the structure beneath the numbers`,
          visual: `/ue-assets/math/l06-welcome.webp`,
        },

        {
          id: `l06-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `What's a Pattern?`,
          paragraphs: [
            `A pattern is a sequence of things that follow a rule. The numbers 2, 4, 6, 8, 10... form a pattern — each one is 2 more than the last. That's the rule: "add 2." Once you know the rule, you can predict every future term forever.`,
            `Patterns can be in numbers, shapes, colors, sounds — anything. In math, we usually mean number patterns or sequences. The first number is called the FIRST TERM. The next is the SECOND TERM. And so on. The space between consecutive terms is where the rule lives.`,
            `Why are patterns important? Because they let us see the structure underneath things. The multiplication facts you know are patterns: 4 × 1 = 4, 4 × 2 = 8, 4 × 3 = 12... the multiples of 4. Days of the week are a pattern. The way leap years work is a pattern. Math is the study of patterns more than anything else.`,
          ],
          image: `/ue-assets/math/l06-s1-patterns.webp`,
          imageCaption: `2, 4, 6, 8... a rule lives between each term.`,
          vocab: [
            { word: `sequence`,
              definition: `A list of numbers (or shapes, or anything) that follow a pattern.`,
              audioPrompt: `A sequence is just an ordered list, {name}. 2, 4, 6, 8 is a sequence — each one comes in a specific order. 5, 10, 15, 20 is a sequence. A sequence usually has a rule that determines what comes next. If you can find the rule, you can extend the sequence as far as you want. Sequences are everywhere in math.` },
            { word: `term`,
              definition: `Each individual number (or shape) in a sequence.`,
              audioPrompt: `Each individual member of a sequence is called a term, {name}. In the sequence 2, 4, 6, 8 — the first term is 2, the second term is 4, the third term is 6, and the fourth term is 8. Terms are numbered by their position in the sequence. Sometimes math questions ask "what's the tenth term" — that's asking what comes 10th in the pattern.` },
          ],
        },

        {
          id: `l06-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Finding the Rule`,
          paragraphs: [
            `When you see a pattern, the first move is figuring out the rule. Look at consecutive terms and ask: "What did I do to get from one to the next?"`,
            `Take 3, 6, 9, 12, 15. From 3 to 6 is +3. From 6 to 9 is +3. From 9 to 12 is +3. The rule is "add 3." So the next term would be 15 + 3 = 18.`,
            `But not all rules are addition. Try this: 1, 2, 4, 8, 16. From 1 to 2 you DOUBLE. From 2 to 4 you double again. The rule isn't "add" — it's "multiply by 2." Next term: 16 × 2 = 32. Rules can be add, subtract, multiply, divide, or even more complex things. Your job is to test patterns until you find what fits ALL the gaps, not just the first one.`,
          ],
          image: `/ue-assets/math/l06-s2-finding-rules.webp`,
          imageCaption: `Look at the gaps. The rule lives between consecutive terms.`,
          vocab: [
            { word: `rule`,
              definition: `The instruction that tells you how to get from one term to the next in a pattern.`,
              audioPrompt: `A rule in a sequence is the instruction that gets you from one term to the next, {name}. In 3, 6, 9, 12 the rule is "add 3." In 1, 2, 4, 8 the rule is "multiply by 2." Rules can be simple — adding or subtracting a number — or they can be more interesting, like alternating actions. Finding the rule is the key to extending a pattern or predicting any future term.` },
            { word: `consecutive terms`,
              definition: `Terms that appear one right after the other in a sequence. Comparing consecutive terms reveals the rule.`,
              audioPrompt: `Consecutive terms are terms that come one right after another in a sequence, {name}. In 3, 6, 9, 12 — the 3rd term (9) and the 4th term (12) are consecutive. Comparing consecutive terms is how you find the rule. The jump from 9 to 12 is +3, same as all the other consecutive jumps. When you check that the jump is consistent across ALL consecutive pairs, you know you've found the right rule.` },
          ],
        },

        {
          id: `l06-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Two Types of Patterns`,
          paragraphs: [
            `Most patterns you'll meet fall into two categories. Knowing the difference helps you spot what kind you're dealing with.`,
            `ADDING/SUBTRACTING patterns — these grow (or shrink) by the same amount each step. 5, 10, 15, 20 grows by 5 each time. 100, 90, 80, 70 shrinks by 10 each time. These are called ARITHMETIC patterns. They make straight-line progress.`,
            `MULTIPLYING/DIVIDING patterns — these grow (or shrink) by the same multiplier each step. 2, 4, 8, 16 doubles each time. 80, 40, 20, 10 halves each time. These are called GEOMETRIC patterns. They speed up (or slow down) dramatically — way faster than arithmetic ones. Doubling, for example, gets huge very quickly: 1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024. After only 10 doublings, you're past a thousand.`,
          ],
          image: `/ue-assets/math/l06-s3-two-types.webp`,
          imageCaption: `Arithmetic = same amount added. Geometric = same factor multiplied.`,
          vocab: [
            { word: `arithmetic pattern`,
              definition: `A pattern where each term is the previous one plus (or minus) the same amount.`,
              audioPrompt: `An arithmetic pattern adds or subtracts the same amount each time, {name}. 7, 14, 21, 28 is arithmetic — adding 7 each time. 100, 95, 90, 85 is arithmetic — subtracting 5 each time. Arithmetic patterns grow or shrink steadily. The multiplication tables are arithmetic patterns. Counting by 10s is arithmetic. Most simple counting patterns are arithmetic.` },
            { word: `geometric pattern`,
              definition: `A pattern where each term is the previous one multiplied (or divided) by the same amount.`,
              audioPrompt: `A geometric pattern multiplies or divides by the same amount each time, {name}. 3, 9, 27, 81 is geometric — multiplying by 3 each time. 64, 32, 16, 8 is geometric — dividing by 2 each time. Geometric patterns grow or shrink way faster than arithmetic ones. Doubling, in particular, grows shockingly fast. If you doubled a penny every day for a month, you'd end up with millions of dollars.` },
          ],
        },

        {
          id: `l06-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `The Same Numbers, Different Rules`,
          paragraphs: [
            `Here's something interesting. The first few terms of a sequence don't always uniquely determine the rule. Watch.`,
            `Pattern A: 1, 2, 4, 8, ... What's next? You'd probably guess 16, because the rule looks like "double each term." Reasonable!`,
            `But Pattern B: 1, 2, 4, 8, ... What's next? Could ALSO be 15, if the rule is "add 1, then add 2, then add 4, then add 8" (doubling the AMOUNT you add each time — different from doubling the number itself). Or it could be 11, with a different rule entirely. The same first 4 terms can have multiple consistent rules. That's why mathematicians usually tell you more terms before asking for "the" rule. The takeaway: when you find a rule, check it against ALL the given terms, not just the first two. And know that more than one rule can sometimes fit. Patterns are about finding what works — not divining the one true answer.`,
          ],
          image: `/ue-assets/math/l06-s4-multiple-rules.webp`,
          imageCaption: `Multiple rules can fit the same start. Check against all terms.`,
          vocab: [
            { word: `extending`,
              definition: `Using the rule of a pattern to find more terms beyond what's given.`,
              audioPrompt: `Extending a pattern means using the rule to find more terms, {name}. If you know the pattern 5, 10, 15 and the rule is "add 5," you can extend it: 20, 25, 30, 35... and as far as you want. Extending a pattern is one of the most useful things you can do — it lets you predict ANY future term. The hundredth term, the thousandth term. Once you have a rule, the whole future of the pattern is visible to you.` },
            { word: `prediction`,
              definition: `Using a pattern's rule to state what a future term will be, without listing every term in between.`,
              audioPrompt: `A prediction in math is using a rule to say what comes next, {name}. Once you find a pattern's rule, you can predict any future term — the 10th, the 50th, the 100th — without listing every term in between. Good predictions come from finding the correct rule and verifying it against all given terms. A prediction based on a wrong rule will fail as soon as you test more terms.` },
          ],
        },

        // ── INVESTIGATION GAME — Pattern Detective ─────────────────────────
        {
          id: `l06-game`,
          type: `interactive`,
          format: `investigation`,
          guideText: `Pattern Detective time, {name}. I'll show you four sequences. Your job is to figure out what rule they follow, then I'll explain. Don't just look at the first two numbers — check that your rule works for the ENTIRE sequence.`,
          options: [
            { id: `add-constant`,      label: `Add the same number`,        color: `#34D399`, description: `Like +2 each time, or +5 each time.` },
            { id: `subtract-constant`, label: `Subtract the same number`,   color: `#F87171`, description: `Like -3 each time, or -10 each time.` },
            { id: `multiply-constant`, label: `Multiply by the same number`, color: `#A78BFA`, description: `Like ×2 (doubling) or ×3 (tripling) each time.` },
            { id: `divide-constant`,   label: `Divide by the same number`,   color: `#FBBF24`, description: `Like ÷2 (halving) each time.` },
          ],
          cases: [
            {
              id: `case-1`,
              caseTitle: `Pattern A: 6, 11, 16, 21, 26, ...`,
              clues: [
                { text: `From 6 to 11 is a jump of 5.` },
                { text: `From 11 to 16 is also a jump of 5.` },
                { text: `From 16 to 21 is a jump of 5. The jumps stay constant.` },
              ],
              correctAnswer: `add-constant`,
              realWorldExample: `Arithmetic pattern — same amount added each time.`,
              explanation: `Add 5 each time. The next term after 26 would be 31. This is an arithmetic pattern — the difference between consecutive terms stays the same. Like skip-counting by 5s, just starting from a different number.`,
            },
            {
              id: `case-2`,
              caseTitle: `Pattern B: 2, 6, 18, 54, 162, ...`,
              clues: [
                { text: `From 2 to 6: that's ×3 (or +4 — which one is it?).` },
                { text: `From 6 to 18: ×3 again (or +12 — but +4 from before wouldn't give 18).` },
                { text: `From 18 to 54: also ×3 (54 ÷ 18 = 3).` },
              ],
              correctAnswer: `multiply-constant`,
              realWorldExample: `Geometric pattern — multiplied by the same factor each time.`,
              explanation: `Multiply by 3 each time. The next term after 162 would be 486. The jumps got bigger and bigger (+4, +12, +36, +108), so the rule has to be multiplying, not adding. This is geometric — multiplying patterns grow much faster than adding ones.`,
            },
            {
              id: `case-3`,
              caseTitle: `Pattern C: 100, 90, 80, 70, 60, ...`,
              clues: [
                { text: `From 100 to 90 — that's a drop of 10.` },
                { text: `From 90 to 80 — also a drop of 10.` },
                { text: `Every step shrinks by exactly 10.` },
              ],
              correctAnswer: `subtract-constant`,
              realWorldExample: `Arithmetic pattern shrinking — subtracting the same amount each time.`,
              explanation: `Subtract 10 each time. Next term after 60 would be 50. This is still arithmetic — the difference stays constant — but the pattern shrinks instead of growing. Subtracting and adding patterns work the same way, just in opposite directions.`,
            },
            {
              id: `case-4`,
              caseTitle: `Pattern D: 64, 32, 16, 8, 4, ...`,
              clues: [
                { text: `From 64 to 32 — that's a drop, but a HUGE drop of 32 (or maybe ÷2?).` },
                { text: `From 32 to 16 — drop of 16 (or ÷2 again).` },
                { text: `From 16 to 8 — drop of 8. The drops keep getting smaller. ÷2 fits all three jumps.` },
              ],
              correctAnswer: `divide-constant`,
              realWorldExample: `Geometric pattern shrinking — divided by the same factor each time.`,
              explanation: `Divide by 2 each time. Next term after 4 would be 2. This is geometric shrinking. The drops keep getting smaller because each step is half the previous number. A constant subtraction would mean the drops stay the same size — but here they shrink. That's the tell.`,
            },
          ],
        },

        {
          id: `l06-quiz`,
          type: `quiz`,
          guideText: `Quick check, {name}.`,
          questions: [
            { id: `l06-q1`, format: `multiple-choice`,
              question: `What is the rule for this pattern: 4, 8, 12, 16, 20?`,
              options: [`+2`, `+4`, `×2`, `+8`],
              correctIndex: 1,
              explanation: `Each term is 4 more than the last. Rule: add 4. Next term would be 24.` },
            { id: `l06-q2`, format: `multiple-choice`,
              question: `What is the next term in the pattern 1, 3, 9, 27, ___?`,
              options: [`30`, `54`, `81`, `36`],
              correctIndex: 2,
              explanation: `Multiplying by 3 each time. 27 × 3 = 81. This is a geometric pattern — the multiplier stays the same.` },
            { id: `l06-q3`, format: `multiple-choice`,
              question: `In an arithmetic pattern, what stays the same between consecutive terms?`,
              options: [
                `The terms themselves`,
                `The difference (or sum) between them`,
                `The ratio between them`,
                `Nothing`,
              ],
              correctIndex: 1,
              explanation: `In an arithmetic pattern, the same amount is added (or subtracted) each step. The DIFFERENCE between terms stays the same.` },
            { id: `l06-q4`, format: `multiple-choice`,
              question: `In a geometric pattern, what stays the same?`,
              options: [
                `The difference between terms`,
                `The multiplier (or divisor) between them`,
                `The first term`,
                `Nothing`,
              ],
              correctIndex: 1,
              explanation: `In a geometric pattern, you multiply or divide by the same amount each step. The MULTIPLIER stays the same, but the differences get bigger (for multiplication) or smaller (for division).` },
            { id: `l06-q5`, format: `true-false`,
              question: `True or false: Geometric patterns grow (or shrink) much faster than arithmetic patterns.`,
              correctAnswer: true,
              explanation: `True. Multiplying compounds — each step builds on a now-bigger number. By the 10th term, doubling has already passed 1,000. Arithmetic patterns grow steadily but never that fast.` },
            { id: `l06-q6`, format: `multiple-choice`,
              question: `What is the next term: 50, 45, 40, 35, ___?`,
              options: [`30`, `25`, `35`, `40`],
              correctIndex: 0,
              explanation: `Subtracting 5 each time. 35 - 5 = 30. This is an arithmetic pattern, shrinking.` },
            { id: `l06-q7`, format: `multiple-choice`,
              question: `Pattern: 1, 2, 4, 8, 16. What's the rule?`,
              options: [
                `Add 1 each time`,
                `Add the position number`,
                `Multiply by 2 each time (doubling)`,
                `It has no rule`,
              ],
              correctIndex: 2,
              explanation: `Doubling each time. 1×2=2, 2×2=4, 4×2=8, 8×2=16. The next term would be 32.` },
            { id: `l06-q8`, format: `multiple-choice`,
              question: `Why is it important to check your rule against ALL terms in a sequence, not just the first two?`,
              options: [
                `It's not — first two are enough`,
                `Because more than one rule can fit just the first two terms; you have to check it works for all of them`,
                `Because math is hard`,
                `Because rules are random`,
              ],
              correctIndex: 1,
              explanation: `Multiple rules can fit the start of a pattern. The only way to be sure you have the right one is to check it against EVERY given term. If your rule fails any of them, it's not the right rule.` },
          ],
        },

        {
          id: `l06-reflection`,
          type: `reflection`,
          guideText: `Pick a prompt, {name}.`,
          prompts: [
            { id: `r1`, text: `Can you find a pattern in something around you right now? A wall, a calendar, your favorite song?` },
            { id: `r2`, text: `Make up your own sequence. What's the rule?` },
            { id: `r3`, text: `Which type of pattern grows faster — arithmetic or geometric? Can you explain why?` },
            { id: `r4`, text: `If you doubled a penny every day for 30 days, how much money would you end up with? Try to estimate first, then check.` },
          ],
        },

        {
          id: `l06-realworld`,
          type: `real-world`,
          guideText: `Patterns are everywhere in real life. Multiplication tables are patterns. The way interest grows in a bank account is a pattern (geometric — that's compound interest doing its thing). Music has patterns. Light has patterns. DNA has patterns. Animal populations grow in patterns. Spotting patterns is one of the most useful real-life skills, in math and beyond. It's literally how scientists predict the future — by finding patterns in past data and extending them forward.`,
          familyAdventure: `Together, do the "doubling penny" experiment. Imagine you get 1 penny today, 2 tomorrow, 4 the day after, 8 the day after that — doubling each day for 30 days. Predict the total. Then actually calculate it (you can use a calculator). The answer is shocking and shows why geometric patterns are so powerful.`,
          creativePrompt: {
            intro: `Make up your own pattern. Write at least the first five terms, then describe the rule and explain how someone could extend it.`,
            floor: `Write at least 5 sentences.`,
            stretch: `Write 8-10 sentences. Include arithmetic AND geometric examples if you can.`,
            open: `Write as much as you want — get creative.`,
            frames: [
              `My pattern starts: ___.`,
              `The rule is ___.`,
              `It's an arithmetic / geometric pattern because ___.`,
              `The 10th term would be ___.`,
              `What makes this pattern interesting is ___.`,
            ],
          },
        },

        {
          id: `l06-celebration`,
          type: `celebration`,
          message: `Solid work, {name}. You can now recognize patterns, find their rules, tell arithmetic from geometric patterns, and check that a rule works for the WHOLE sequence. Pattern thinking is one of the foundations of algebra — you just took a big step in that direction. Next lesson we open the door to fractions. — Remi.`,
          badge: `pattern-detective`,
          badgeName: `Pattern Detective`,
          xpEarned: 75,
        },
      ],
    },
  ],
};

export default MATH_UE_L06;
