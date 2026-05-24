// ─────────────────────────────────────────────────────────────────────────────
// MATH UE  |  L04 — Multi-Digit Division
// Age band : upper_explorers (9–10)   Guide: remi
// Standards: CCSS 4.NBT.B.6
// CALIBRATED: Math UE Spec v2
// Game format: problem-solving (Dividing Up Big Numbers)
// Visual model: area-model
// Misconceptions: "division always makes smaller" (false for fractions; intro the idea) /
//                 "remainders don't matter" / "long division is mysterious"
// ─────────────────────────────────────────────────────────────────────────────

const MATH_UE_L04 = {
  ageBand: `upper_explorers`,
  subjectId: `math`,
  guide: `remi`,

  lessons: [
    {
      id: `math-9-10-04`,
      title: `Multi-Digit Division`,
      duration: 23,
      xpReward: 75,
      badge: `division-detective`,
      badgeName: `Division Detective`,

      screens: [
        {
          id: `l04-welcome`,
          type: `welcome`,
          guideText: `Welcome back, {name}. Today we tackle division — the opposite of multiplication. If 6 × 24 = 144, then 144 ÷ 6 = 24. Same fact, different angle. Division has a reputation for being hard, but it's actually about something simple: sharing fairly, or figuring out how many groups fit. By the end, you'll handle multi-digit division using a method called partial quotients, and you'll understand what to do when things don't divide evenly.`,
          headline: `Multi-Digit Division`,
          subtitle: `Sharing fairly and figuring out how many groups fit`,
          visual: `/ue-assets/math/l04-welcome.webp`,
        },

        {
          id: `l04-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Two Ways to Think About Division`,
          paragraphs: [
            `Division has two main meanings, and recognizing which one you're dealing with helps you understand what the answer means.`,
            `Meaning #1: Sharing. You have 24 cookies and want to share them equally among 6 friends. How many cookies does each person get? That's 24 ÷ 6 = 4 cookies each. The answer tells you the size of EACH group.`,
            `Meaning #2: Grouping. You have 24 cookies and want to put them in groups of 6. How many groups can you make? That's 24 ÷ 6 = 4 groups. The answer tells you HOW MANY groups you get. Same math, different question. Both meanings are valid, and which one fits depends on the situation.`,
          ],
          image: `/ue-assets/math/l04-s1-two-meanings.webp`,
          imageCaption: `Sharing equally vs. counting groups. Same division, different stories.`,
          vocab: [
            { word: `quotient`,
              definition: `The result of dividing one number by another.`,
              audioPrompt: `Quotient is what you get when you divide, {name}. The quotient of 24 ÷ 6 is 4. The division symbol ÷ just means "find the quotient." Like sum, difference, and product, knowing this word helps you understand math problems. "What is the quotient of 48 and 8?" just means "divide 48 by 8."` },
            { word: `dividend`,
              definition: `The number being divided. In 24 ÷ 6, the 24 is the dividend.`,
              audioPrompt: `The dividend is the number being divided up, {name}. In the problem 24 ÷ 6, the 24 is the dividend — that's the total amount you're splitting or grouping. The 6 is the divisor — that's how you're splitting it. And the 4 you get out is the quotient. Three words for the three parts of any division.` },
            { word: `divisor`,
              definition: `The number you're dividing by. In 24 ÷ 6, the 6 is the divisor.`,
              audioPrompt: `The divisor is the number you're dividing by, {name}. In 24 ÷ 6, the 6 is the divisor. It tells you HOW you're breaking up the dividend — into groups of 6, or into 6 equal shares. Whichever meaning makes sense for the situation.` },
          ],
        },

        {
          id: `l04-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Partial Quotients: Division in Friendly Steps`,
          paragraphs: [
            `For bigger divisions like 156 ÷ 12, the traditional long division algorithm can feel mysterious. There's a friendlier way called "partial quotients" that uses your multiplication facts and stays much more intuitive.`,
            `Here's the idea. You're solving 156 ÷ 12. You ask: "How many 12's can I take out of 156?" You don't have to find the exact answer right away. You can make easy guesses. Maybe you know 10 × 12 = 120. So you can definitely take out 10 groups of 12. That leaves 156 - 120 = 36. Now: "How many more 12's are in 36?" That's 3 × 12 = 36. So 3 more groups. Total: 10 + 3 = 13 groups of 12 in 156. So 156 ÷ 12 = 13.`,
            `The beauty of partial quotients is that you don't need to guess perfectly each time. If you only think to pull out 5 groups of 12 first (= 60), that's fine. You'd have 156 - 60 = 96 left, then keep pulling out more 12's. As long as you keep track, you get to the same answer. This method works WITH your existing knowledge instead of demanding you memorize a specific procedure.`,
          ],
          image: `/ue-assets/math/l04-s2-partial-quotients.webp`,
          imageCaption: `Partial quotients: take out friendly chunks of the divisor until none is left.`,
          vocab: [
            { word: `partial quotient`,
              definition: `A piece of the total quotient you find on the way to the final answer. Partial quotients use multiplication facts you already know.`,
              audioPrompt: `A partial quotient is a piece of the answer you find along the way during division, {name}. Instead of trying to find the whole answer at once, you find pieces. "How many 12's can I take out of 156?" Maybe 10 first — that's a partial quotient. Then 3 more — another partial quotient. Total quotient is 10 + 3 = 13. Partial quotients break a hard division into easier multiplication facts you already know.` },
            { word: `estimate`,
              definition: `An approximate answer close to the exact value. Useful for checking if your work makes sense.`,
              audioPrompt: `An estimate is an approximate answer, {name}. In partial quotients, estimating helps you pick good chunks. For 156 ÷ 12, you might estimate "I know 10 × 12 = 120, so at least 10 groups fit." That's an estimate guiding your first step. Estimates aren't wrong — they're stepping stones toward the exact answer. Good math thinkers estimate first, then check how close they were.` },
          ],
        },

        {
          id: `l04-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `When It Doesn't Divide Evenly: Remainders`,
          paragraphs: [
            `Not every division comes out neat. What's 23 ÷ 5? Well, 4 × 5 = 20. And 5 × 5 = 25 — too big. So 23 ÷ 5 is 4... with 3 left over. That leftover 3 is called the REMAINDER.`,
            `We write it as: 23 ÷ 5 = 4 remainder 3, sometimes shortened to 4 R 3. The remainder is the part of the dividend that couldn't be divided evenly. It's smaller than the divisor — if it weren't, you could pull out another full group.`,
            `What you DO with the remainder depends on the situation. If you're sharing 23 cookies among 5 kids and each kid takes whole cookies, each gets 4 and there are 3 cookies left over. If you're packing 23 books into boxes of 5, you fill 4 boxes and have 3 books that need their own (smaller) box. Same math, different real-world interpretations. Remainders are information — they tell you exactly what didn't fit.`,
          ],
          image: `/ue-assets/math/l04-s3-remainder.webp`,
          imageCaption: `23 ÷ 5 = 4 R 3. The 3 is the leftover — and what you do with it depends on the situation.`,
          vocab: [
            { word: `remainder`,
              definition: `The amount left over after dividing as many full groups as possible. It's always smaller than the divisor.`,
              audioPrompt: `A remainder is what's left over after dividing as many full groups as possible, {name}. 23 ÷ 5 = 4 with a remainder of 3. The 4 groups of 5 take up 20 of the 23, and the 3 left over is the remainder. The remainder is always smaller than the divisor — if it weren't, you could pull out another full group. What you do with the remainder depends on what you're actually doing in real life.` },
            { word: `divisible`,
              definition: `When a number divides evenly into another with no remainder. 24 is divisible by 6 because 24 ÷ 6 = 4 exactly.`,
              audioPrompt: `Divisible means a number divides evenly with no remainder, {name}. 24 is divisible by 6 because 24 ÷ 6 = 4, clean. 23 is NOT divisible by 5 because 23 ÷ 5 leaves a remainder of 3. Knowing whether a number is divisible by something is a quick check. And the leftover when something isn't divisible is exactly what we call the remainder.` },
          ],
        },

        {
          id: `l04-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `The Myth: "Division Always Makes Things Smaller"`,
          paragraphs: [
            `Here's a sneaky misconception to bust now. Many kids (and adults) believe that division always makes the answer smaller than what you started with. For whole-number division, it does. 100 ÷ 4 = 25 — smaller. 84 ÷ 2 = 42 — smaller. The pattern holds.`,
            `But here's the part to keep in your back pocket. Later this year (and next), you'll learn to divide by FRACTIONS. And when you divide by a fraction less than 1, the answer gets BIGGER. Yes, really. 6 ÷ 1/2 = 12. Why? Because you're asking "how many halves fit in 6?" — and the answer is 12 halves.`,
            `Don't worry about doing this kind of division yet — we cover it in detail in a later lesson. But plant this idea now: "division always makes smaller" isn't a real rule. It just looks that way when you only divide whole numbers by whole numbers greater than 1. The real rule of division comes from understanding what division actually IS — sharing or grouping — not from a memorized "makes smaller" pattern.`,
          ],
          image: `/ue-assets/math/l04-s4-bust-myth.webp`,
          imageCaption: `Division by whole numbers > 1: makes smaller. Division by fractions < 1: makes BIGGER.`,
          vocab: [
            { word: `inverse operations`,
              definition: `Operations that undo each other. Addition and subtraction are inverses. Multiplication and division are inverses.`,
              audioPrompt: `Inverse operations are operations that undo each other, {name}. Addition undoes subtraction: 5 + 3 = 8, and 8 - 3 = 5. Multiplication undoes division: 6 × 4 = 24, and 24 ÷ 4 = 6. Recognizing inverse operations is super useful because you can use one to CHECK the other. Did 156 ÷ 12 = 13? Check: 13 × 12 should = 156. If it doesn't, something went wrong in the division.` },
            { word: `fact family`,
              definition: `A group of related math facts using the same numbers. For 6, 4, and 24: 6×4=24, 4×6=24, 24÷4=6, 24÷6=4.`,
              audioPrompt: `A fact family is a group of related math facts using the same three numbers, {name}. For 6, 4, and 24: you get 6 × 4 = 24, 4 × 6 = 24, 24 ÷ 4 = 6, and 24 ÷ 6 = 4. Four facts, same three numbers, two operations. Fact families show inverse operations in action — multiplication and division are literally just the same relationship looked at from different angles.` },
          ],
        },

        // ── PROBLEM-SOLVING GAME — Dividing Up Big Numbers ───────────────────
        {
          id: `l04-game`,
          type: `interactive`,
          format: `problem-solving`,
          guideText: `Time for division practice, {name}. We'll use partial quotients — it's friendlier than long division and uses multiplication facts you already know. If you get stuck, hit the hint. If your answer's a little off, I'll explain what's happening.`,
          scenarioTitle: `Dividing Up Big Numbers`,
          problems: [
            {
              id: `p1`,
              problemStatement: `A teacher has 84 stickers to share equally among 6 students. How many stickers does each student get?`,
              visual: {
                type: `area-model`,
                data: {
                  width: 14,
                  height: 6,
                  caption: `Splitting 84 into 6 equal groups.`,
                },
              },
              approaches: [
                {
                  id: `approach-a`,
                  label: `Partial quotients`,
                  description: `Pull out friendly chunks of 6 from 84.`,
                  steps: [
                    { prompt: `What's 10 × 6?`, answer: 60, hint: `Ten groups of six.` },
                    { prompt: `So you can take out 10 groups of 6 from 84. That uses 60. How much is left? 84 - 60 = ?`, answer: 24, hint: `Subtract: 84 - 60.` },
                    { prompt: `How many more groups of 6 fit in 24? In other words, 24 ÷ 6 = ?`, answer: 4, hint: `4 × 6 = 24.` },
                    { prompt: `Total: 10 groups + 4 more groups = ?`, answer: 14, hint: `Add the partial quotients.` },
                  ],
                  commonMistakes: [
                    { wrongAnswer: 4, explanation: `Looks like you only counted the second part. The total is BOTH partial quotients added — 10 + 4 = 14.` },
                    { wrongAnswer: 78, explanation: `That looks like 84 - 6. Division isn't subtraction — we're splitting 84 into 6 EQUAL groups.` },
                  ],
                },
              ],
              finalAnswer: 14,
              finalExplanation: `84 ÷ 6 = 14. Each student gets 14 stickers. We pulled out 10 groups of 6 first (using up 60), then 4 more groups (using up the remaining 24). 10 + 4 = 14 total groups. Check it: 14 × 6 = 84. ✓`,
            },
            {
              id: `p2`,
              problemStatement: `A factory packs 156 candies into boxes of 12. How many boxes does it fill?`,
              visual: {
                type: `area-model`,
                data: {
                  width: 13,
                  height: 12,
                  caption: `How many 12s fit in 156?`,
                },
              },
              approaches: [
                {
                  id: `approach-a`,
                  label: `Partial quotients`,
                  description: `Pull out friendly chunks of 12 from 156.`,
                  steps: [
                    { prompt: `What's 10 × 12?`, answer: 120, hint: `Ten twelves.` },
                    { prompt: `So we can take out 10 groups of 12. Left over: 156 - 120 = ?`, answer: 36, hint: `Subtract.` },
                    { prompt: `How many more 12s fit in 36? That's 36 ÷ 12 = ?`, answer: 3, hint: `3 × 12 = 36.` },
                    { prompt: `Total boxes: 10 + 3 = ?`, answer: 13, hint: `Add the partial quotients.` },
                  ],
                  commonMistakes: [
                    { wrongAnswer: 144, explanation: `Looks like that's a multiplication answer (12 × 12 = 144). We're dividing — finding how many 12s fit into 156. Different question.` },
                  ],
                },
              ],
              finalAnswer: 13,
              finalExplanation: `156 ÷ 12 = 13 boxes. We took out 10 groups of 12 first, then 3 more. Total: 13. Check: 13 × 12 = 156. ✓`,
            },
            {
              id: `p3`,
              problemStatement: `Solve: 95 ÷ 8 (this one won't divide evenly — expect a remainder).`,
              visual: { type: `none`, data: { caption: `Some divisions have a remainder.` } },
              approaches: [
                {
                  id: `approach-a`,
                  label: `Partial quotients with remainder`,
                  description: `Pull out chunks of 8 until what's left is smaller than 8.`,
                  steps: [
                    { prompt: `What's 10 × 8?`, answer: 80, hint: `Ten eights.` },
                    { prompt: `Take out 10 groups of 8. Left over: 95 - 80 = ?`, answer: 15, hint: `Subtract.` },
                    { prompt: `How many more 8s fit in 15? Think: 1 × 8 = 8, 2 × 8 = 16 (too big). So ?`, answer: 1, hint: `Only 1 more eight fits — 1 × 8 = 8.` },
                    { prompt: `After taking 1 more group of 8 from 15, we're left with 15 - 8 = ? That's the remainder.`, answer: 7, hint: `Subtract: 15 - 8.` },
                    { prompt: `So the quotient is 10 + 1 = 11 groups of 8, with 7 left over. What's the total quotient (just the whole-number part)?`, answer: 11, hint: `Add the partial quotients: 10 + 1.` },
                  ],
                  commonMistakes: [
                    { wrongAnswer: 12, explanation: `Looks like you went one too far. 12 × 8 = 96, but we only have 95. So we can only fit 11 full groups of 8.` },
                  ],
                },
              ],
              finalAnswer: 11,
              finalExplanation: `95 ÷ 8 = 11 with a remainder of 7. We took out 10 groups of 8 (using 80), then 1 more group of 8 (using another 8, total 88). 95 - 88 = 7 left over, which is smaller than 8, so we stop. Quotient is 11, remainder is 7. Check: 11 × 8 + 7 = 88 + 7 = 95. ✓`,
            },
            {
              id: `p4`,
              problemStatement: `A school has 234 students going on a field trip. Each bus holds 30 students. How many buses are needed? (Hint — think carefully about what to do with any remainder.)`,
              visual: { type: `none`, data: { caption: `What does the remainder mean in real life?` } },
              approaches: [
                {
                  id: `approach-a`,
                  label: `Partial quotients, then interpret the remainder`,
                  description: `Divide 234 ÷ 30, then figure out what to do with leftover students.`,
                  steps: [
                    { prompt: `What's 5 × 30?`, answer: 150, hint: `Five thirties.` },
                    { prompt: `Take out 5 groups of 30. Left over: 234 - 150 = ?`, answer: 84, hint: `Subtract.` },
                    { prompt: `How many more 30s fit in 84? Try 2 × 30. What's that?`, answer: 60, hint: `Two thirties.` },
                    { prompt: `After 2 more groups, left over: 84 - 60 = ?`, answer: 24, hint: `Subtract.` },
                    { prompt: `Can another 30 fit in 24? No — 24 is less than 30. So we stop. Total full groups: 5 + 2 = 7, with 24 left over. But the question asks how many BUSES are needed. What do we do with the 24 leftover students?`, answer: 8, hint: `The 24 students still need a bus, even if it won't be a full bus. So we need ONE more bus on top of the 7.` },
                  ],
                  commonMistakes: [
                    { wrongAnswer: 7, explanation: `That's the number of FULL buses. But the 24 leftover students still need a ride! In this situation, you have to round UP because every student needs a bus.` },
                    { wrongAnswer: 24, explanation: `That's the remainder — leftover students, not buses. The question asks about total buses needed.` },
                  ],
                },
              ],
              finalAnswer: 8,
              finalExplanation: `234 ÷ 30 = 7 R 24. That means 7 full buses carry 210 students, but 24 students are left over. They still need a bus too — so 8 buses total. THIS is why remainders matter — in real life, you can't leave 24 students behind. Sometimes you round up, sometimes you round down, sometimes the remainder IS the answer. It depends on the situation.`,
            },
          ],
          completionMessage: `Strong work, {name}. You used partial quotients to divide multi-digit numbers, handled remainders, AND figured out what they actually MEAN in real situations. That last problem is exactly the kind of thinking standardized tests love — math + real-world judgment. You did it.`,
        },

        {
          id: `l04-quiz`,
          type: `quiz`,
          guideText: `Quick check, {name}.`,
          questions: [
            { id: `l04-q1`, format: `multiple-choice`,
              question: `In the problem 72 ÷ 8 = 9, which number is the divisor?`,
              options: [`72`, `8`, `9`, `Both 72 and 8`],
              correctIndex: 1,
              explanation: `The divisor is the number you're dividing by — 8 here. The 72 is the dividend (the number being divided), and 9 is the quotient (the answer).` },
            { id: `l04-q2`, format: `multiple-choice`,
              question: `What is 56 ÷ 7?`,
              options: [`6`, `7`, `8`, `9`],
              correctIndex: 2,
              explanation: `7 × 8 = 56. So 56 ÷ 7 = 8.` },
            { id: `l04-q3`, format: `multiple-choice`,
              question: `What is 95 ÷ 8?`,
              options: [`12`, `11 remainder 7`, `11 remainder 3`, `10 remainder 15`],
              correctIndex: 1,
              explanation: `11 × 8 = 88. 95 - 88 = 7. So 95 ÷ 8 = 11 remainder 7. 12 × 8 = 96, which is too big.` },
            { id: `l04-q4`, format: `multiple-choice`,
              question: `A bus holds 32 students. There are 200 students going on a trip. How many buses are needed?`,
              options: [`6`, `6 with leftover students`, `7`, `8`],
              correctIndex: 2,
              explanation: `200 ÷ 32 = 6 R 8. Six full buses carry 192 students, but 8 students are still left. They need a bus too. So 7 buses total. (You can't leave 8 students behind.)` },
            { id: `l04-q5`, format: `true-false`,
              question: `True or false: When you divide whole numbers, the quotient is always smaller than the dividend.`,
              correctAnswer: false,
              explanation: `Tricky! For whole numbers divided by whole numbers GREATER than 1, yes. But for whole numbers divided by 1, the quotient is the SAME. And once we get into fractions and decimals, division can make numbers BIGGER. We'll cover that more later.` },
            { id: `l04-q6`, format: `multiple-choice`,
              question: `In the partial quotients method, what are you doing?`,
              options: [
                `Guessing randomly`,
                `Pulling out friendly chunks of the divisor and adding up how many chunks you took`,
                `Multiplying`,
                `Adding the dividend and divisor`,
              ],
              correctIndex: 1,
              explanation: `Partial quotients works by pulling out manageable chunks of the divisor. 10 groups, then maybe 5 more, then 2 more, etc. Add up the chunks to get the total quotient.` },
            { id: `l04-q7`, format: `multiple-choice`,
              question: `What's a remainder?`,
              options: [
                `The biggest number in the problem`,
                `What's left over after dividing as many full groups as possible — always smaller than the divisor`,
                `The dividend`,
                `An error in your math`,
              ],
              correctIndex: 1,
              explanation: `A remainder is what's left over when a division doesn't come out evenly. It's always smaller than the divisor — if it weren't, you could pull out another full group.` },
            { id: `l04-q8`, format: `multiple-choice`,
              question: `Which operation is the inverse of division?`,
              options: [`Addition`, `Subtraction`, `Multiplication`, `Square root`],
              correctIndex: 2,
              explanation: `Multiplication and division are inverses — they undo each other. You can check a division by multiplying. If 144 ÷ 12 = 12, then 12 × 12 should equal 144. If it does, your division is correct.` },
          ],
        },

        {
          id: `l04-reflection`,
          type: `reflection`,
          guideText: `Pick a prompt, {name}.`,
          prompts: [
            { id: `r1`, text: `In the bus problem, why did we have to round up? Where else in life would you round up because of a remainder?` },
            { id: `r2`, text: `Which method works better for you — partial quotients or the standard long division algorithm? Why?` },
            { id: `r3`, text: `Can you think of a real-world situation where division gives you a remainder that needs to be ignored or thrown away?` },
            { id: `r4`, text: `How would you use multiplication to check a division answer?` },
          ],
        },

        {
          id: `l04-realworld`,
          type: `real-world`,
          guideText: `Division is everywhere. Splitting bills among friends. Figuring out how many pizza slices each person gets. Estimating how long a trip takes if you know the distance and speed. Calculating averages. Anytime you need to share fairly OR figure out how many groups fit, division is the tool. The "what do I do with the remainder" question shows up constantly in real life — sometimes you round up (buses, hotel rooms), sometimes you round down (full groups of people, full batches), sometimes the remainder IS the leftover thing itself.`,
          familyAdventure: `Together, find a real division problem in your house. How many pieces of fruit are in the bowl, and how many would each family member get if you shared equally? Are there leftovers? What would you do with the remainder — eat it first-come, save it, split it further?`,
          creativePrompt: {
            intro: `Make up a word problem that uses division WITH a remainder. The trick is — make the remainder actually mean something interesting in your story.`,
            floor: `Write at least 5 sentences. Include the problem AND what the remainder means.`,
            stretch: `Write 8-10 sentences. Show the full division steps and explain the remainder's meaning.`,
            open: `Write as much as you want.`,
            frames: [
              `My problem is about ___.`,
              `The dividend is ___ and the divisor is ___.`,
              `Working it out: ___.`,
              `The quotient is ___ and the remainder is ___.`,
              `In this story, the remainder means ___.`,
            ],
          },
        },

        {
          id: `l04-celebration`,
          type: `celebration`,
          message: `Real progress, {name}. You can now divide multi-digit numbers using partial quotients, handle remainders carefully, and figure out what to do with them based on real situations. You also know that division is the inverse of multiplication — you can check one with the other. Four lessons in. You've now built the four big operations on whole numbers. Next lesson, we look at the number structure underneath them — factors, multiples, and primes. — Remi.`,
          badge: `division-detective`,
          badgeName: `Division Detective`,
          xpEarned: 75,
        },
      ],
    },
  ],
};

export default MATH_UE_L04;
