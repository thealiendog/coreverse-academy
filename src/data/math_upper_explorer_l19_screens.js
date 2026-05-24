// ─────────────────────────────────────────────────────────────────────────────
// MATH UE  |  L19 — Intro to Algebra: Variables
// Age band : upper_explorers (9–10)   Guide: remi
// Standards: CCSS 5.OA.A.2
// CALIBRATED: Math UE Spec v2
// Game format: problem-solving (paced from concrete to abstract)
// Visual model: fraction-bar (used as bar model) + none
// PACING STRATEGY (critical for this lesson):
//   1. Concrete: "balance scale" stories ("if 5 + ? = 12, what's ?")
//   2. Representational: bar models (box with unknown amount)
//   3. Abstract: letter notation (x, n) — only at the very end
// Misconceptions:
//   - "Variables are mysterious / magic" (they're just unknowns waiting to be found)
//   - "X means multiplication" (no — x as a letter is a variable; × is the operation)
//   - "Variables have to be x" (any letter works — x, n, a, t, anything)
// 2 VOCAB PER MAG SECTION.
// ─────────────────────────────────────────────────────────────────────────────

const MATH_UE_L19 = {
  ageBand: `upper_explorers`,
  subjectId: `math`,
  guide: `remi`,

  lessons: [
    {
      id: `math-9-10-19`,
      title: `Intro to Algebra: Variables`,
      duration: 24,
      xpReward: 75,
      badge: `variable-explorer`,
      badgeName: `Variable Explorer`,

      screens: [
        {
          id: `l19-welcome`,
          type: `welcome`,
          guideText: `Welcome back, {name}. Today we step into ALGEBRA — math with letters. Letters in math represent unknown numbers, called variables. It sounds strange at first, but the idea is simple: you've been finding unknown numbers your whole math life. "What number plus 5 equals 12?" You've solved that. Today, we just write the unknown as a letter. Same problem, new notation. Take your time on this lesson — it bridges from elementary math into everything that comes after.`,
          headline: `Intro to Algebra: Variables`,
          subtitle: `Letters that represent unknown numbers`,
          visual: `/ue-assets/math/l19-welcome.webp`,
        },

        {
          id: `l19-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `The Idea: A Number You Don't Know YET`,
          paragraphs: [
            `Imagine a balance scale. On one side: a basket with 5 apples PLUS another mystery basket. On the other side: 12 apples. The scale is balanced — the two sides are equal in weight.`,
            `How many apples are in the mystery basket? You can figure it out by thinking: "5 + something = 12. So the something must be 7." You just solved an equation with an unknown. The "something" is the unknown number.`,
            `In math, we usually write the unknown as a LETTER — like x, n, or a. So the same problem looks like "5 + x = 12" and the answer is "x = 7." The letter is called a VARIABLE because it stands for a number we DON'T KNOW YET. Once we find what x equals, the mystery is solved.`,
          ],
          image: `/ue-assets/math/l19-s1-balance.webp`,
          imageCaption: `The balance scale: 5 + mystery basket = 12. Mystery basket has 7 apples.`,
          vocab: [
            { word: `variable`,
              definition: `A letter that stands for an unknown number in a math problem.`,
              audioPrompt: `A variable is a letter that stands for an unknown number, {name}. In algebra, instead of using a question mark or a blank, we use letters. The most common one is x, but any letter can be a variable — n, a, t, p, anything. The letter just holds the place of the number we're trying to find. Once we figure out what the variable equals, we've "solved" the problem. Variables are nothing magical — they're just placeholders for unknowns.` },
            { word: `equation`,
              definition: `A math statement that says two things are equal, with an = sign between them. Like 5 + x = 12.`,
              audioPrompt: `An equation is a math statement that says two things are EQUAL, {name}. It has an equals sign (=) in the middle. Both sides of an equation have to balance, like a scale. 3 + 4 = 7 is an equation. 5 + x = 12 is an equation with a variable. When you "solve" an equation, you find the value of the variable that makes both sides equal. Equations are the foundation of all algebra.` },
          ],
        },

        {
          id: `l19-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `From Boxes to Letters (the Bridge Step)`,
          paragraphs: [
            `Before letters feel weird, try BOXES. The equation "5 + [ ] = 12" works the same as "5 + x = 12." The box is just an unknown. The letter is the same idea with cleaner notation. Many kids learn variables by starting with boxes and then replacing them with letters.`,
            `Why do mathematicians use letters instead of boxes? Mostly because letters are faster to write and easier to refer to in conversation ("solve for x"). You can also have multiple different unknowns in one problem — like "x + y = 10" — which would be confusing with two different-looking boxes. Letters scale better.`,
            `Here's the most important mental shift: a variable is not a mystery you have to "figure out" magically. It's just a NUMBER — a specific number — that you don't yet know. Your job is to find what that number is. Algebra is the toolkit for finding those unknown numbers methodically.`,
          ],
          image: `/ue-assets/math/l19-s2-boxes.webp`,
          imageCaption: `5 + [ ] = 12 is the same as 5 + x = 12. Boxes become letters.`,
          vocab: [
            { word: `unknown`,
              definition: `A number we don't know YET, but can find by using what we DO know. Variables represent unknowns.`,
              audioPrompt: `An unknown is a number we don't know yet, {name}. But we can usually find it by using other information. If you know that two things added together equal 12, and one of them is 5, the other is an unknown — but you can figure it out. That's what algebra does — gives you tools for finding unknowns. The word "unknown" is just a fancy way to say "I don't know this number yet."` },
            { word: `solve`,
              definition: `In algebra, to "solve" an equation means to find the value of the variable that makes the equation true.`,
              audioPrompt: `Solving an equation means finding the value of the variable that makes the equation true, {name}. For "5 + x = 12," solving means finding the x that makes both sides equal. x = 7 makes the equation true: 5 + 7 = 12. So we say "x = 7 is the solution" — that's the value that satisfies the equation. Solving is a process, like detective work — using the clues to figure out the mystery.` },
          ],
        },

        {
          id: `l19-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Solving Equations: Whatever You Do, Do It to Both Sides`,
          paragraphs: [
            `Here's the most important rule of algebra: AN EQUATION IS LIKE A BALANCE SCALE. Whatever you do to one side, you must do to the other. Add 3 to the left? Add 3 to the right. Subtract 5 from the left? Subtract 5 from the right. The balance stays balanced.`,
            `To solve "5 + x = 12": we want x alone on one side. Right now, x has a 5 added to it. To "undo" the +5, we subtract 5 from both sides. Left side: 5 + x - 5 = x. Right side: 12 - 5 = 7. So x = 7. The equation is solved.`,
            `Another example: "x - 4 = 9." Right now, x has a 4 subtracted from it. To undo, we add 4 to both sides. Left: x - 4 + 4 = x. Right: 9 + 4 = 13. So x = 13. The trick is figuring out what's been done to x, and then doing the OPPOSITE to undo it. Add becomes subtract. Multiply becomes divide. They're inverse operations (from L04).`,
          ],
          image: `/ue-assets/math/l19-s3-balance-rule.webp`,
          imageCaption: `Whatever you do to one side, do to the other. Keep the scale balanced.`,
          vocab: [
            { word: `isolating the variable`,
              definition: `Getting the variable by itself on one side of the equation. The goal when solving equations.`,
              audioPrompt: `Isolating the variable means getting it alone on one side of the equation, {name}. That's the goal when you solve. To find what x equals, you have to get x by itself, with nothing else on its side. To do this, you "undo" everything done to x — by doing the opposite operation. If x has 5 added to it, subtract 5 from both sides. If x is multiplied by 3, divide both sides by 3. Always do the same thing to both sides to keep the equation balanced.` },
            { word: `inverse operation`,
              definition: `The operation that "undoes" another. Addition and subtraction are inverses. Multiplication and division are inverses.`,
              audioPrompt: `An inverse operation is one that undoes another, {name}. Addition and subtraction are inverses — if you add 5, you can undo it by subtracting 5. Multiplication and division are inverses too — if you multiply by 3, you can undo it by dividing by 3. To isolate a variable, you use inverse operations to "undo" everything that's been done to it. This concept connects directly back to L04, where you learned that division undoes multiplication.` },
          ],
        },

        {
          id: `l19-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Why Algebra Is Worth Learning`,
          paragraphs: [
            `You might be wondering why we'd bother with this. Why use letters instead of just doing the math? Three reasons.`,
            `One — REUSABILITY. The equation "rate × time = distance" works for ANY trip. Plug in different rates and times to get different distances. Variables let one equation describe infinite specific situations. This is incredibly powerful.`,
            `Two — UNKNOWN BEFORE THE NUMBER. Sometimes you need to set up the math BEFORE you have the actual numbers. Like "if I want to save $200 and I save x dollars per week, how many weeks?" That's an equation with a variable — you'll plug in x later. Algebra lets you plan ahead.`,
            `Three — IT'S THE LANGUAGE OF EVERYTHING ELSE. Physics, chemistry, engineering, computer science, economics — they're all built on algebra. You can't go anywhere in STEM without it. Today's lesson is the door to a much bigger world of math. You're stepping through it now.`,
          ],
          image: `/ue-assets/math/l19-s4-why.webp`,
          imageCaption: `Variables: reusable, future-ready, the language of STEM.`,
          vocab: [
            { word: `formula`,
              definition: `An equation that describes a general relationship using variables. Used to calculate anything that follows the same pattern.`,
              audioPrompt: `A formula is a special kind of equation that describes a general relationship using variables, {name}. Like area = length × width — that's a formula. You can use it with any length and width. The formula stays the same; only the specific numbers change. Formulas are how science and engineering work. Once you know a formula, you can use it for any situation that fits the same pattern. The whole power of algebra is that one formula can solve infinite specific problems.` },
            { word: `algebra`,
              definition: `The branch of math that uses variables to solve problems and describe general relationships.`,
              audioPrompt: `Algebra is the branch of math that uses variables to solve problems and describe relationships, {name}. It's what comes after arithmetic. While arithmetic is about specific numbers (5 + 3 = 8), algebra is about general patterns (x + y = z). Algebra is the language used in physics, chemistry, engineering, computer programming, and economics. It's not optional in modern education — everyone in those fields needs it. Today is your first real step into that world.` },
          ],
        },

        // ── PROBLEM-SOLVING GAME ──
        {
          id: `l19-game`,
          type: `interactive`,
          format: `problem-solving`,
          guideText: `Time to solve some equations, {name}. We'll go slowly — this lesson is harder than most. We'll start with question marks, move to boxes, and only switch to letters at the end. Take your time on each step. Hit the hint button without hesitation.`,
          scenarioTitle: `Finding the Unknown`,
          problems: [
            {
              id: `p1`,
              problemStatement: `Start with words. A balance scale shows: 7 apples on one side, plus a mystery basket. The other side has 15 apples. The scale is balanced. How many apples are in the mystery basket?`,
              visual: {
                type: `none`,
                data: { caption: `Think of it as: 7 + ? = 15` },
              },
              approaches: [
                {
                  id: `approach-a`,
                  label: `What number plus 7 equals 15?`,
                  description: `Think backwards from the total.`,
                  steps: [
                    {
                      prompt: `7 + ? = 15. What number plus 7 equals 15?`,
                      answer: 8,
                      hint: `Think: 15 - 7 = ?`,
                    },
                  ],
                  commonMistakes: [
                    { wrongAnswer: 22, explanation: `Looks like you added 7 + 15 instead of subtracting. To find the unknown, think about what number ADDED to 7 gives 15. That's 15 - 7 = 8.` },
                  ],
                },
              ],
              finalAnswer: 8,
              finalExplanation: `The mystery basket has 8 apples. You solved the equation 7 + ? = 15 by realizing that ? must be 15 - 7 = 8. This is algebra — you just didn't call it that yet.`,
            },
            {
              id: `p2`,
              problemStatement: `Now let's use a box for the unknown. Solve: [box] - 4 = 9. What number goes in the box?`,
              visual: {
                type: `none`,
                data: { caption: `The box represents the unknown.` },
              },
              approaches: [
                {
                  id: `approach-a`,
                  label: `Undo the subtraction by adding to both sides`,
                  description: `Right now, 4 is being subtracted from the box. To undo, add 4 to both sides.`,
                  steps: [
                    {
                      prompt: `The equation: box - 4 = 9. Add 4 to BOTH sides. Left side: box - 4 + 4 = box. Right side: 9 + 4 = ?`,
                      answer: 13,
                      hint: `9 + 4.`,
                    },
                  ],
                  commonMistakes: [
                    { wrongAnswer: 5, explanation: `Looks like you did 9 - 4 (subtracting again). But we want to UNDO the subtraction. To undo subtracting 4, we ADD 4. So box - 4 + 4 = 9 + 4 → box = 13.` },
                  ],
                },
              ],
              finalAnswer: 13,
              finalExplanation: `The box equals 13. Check: 13 - 4 = 9 ✓. To find the unknown, we added 4 to both sides — undoing the subtraction. Whatever you do to one side, do to the other.`,
            },
            {
              id: `p3`,
              problemStatement: `Now letters. Solve: x + 8 = 20. What is x?`,
              visual: {
                type: `none`,
                data: { caption: `x is a variable — same idea as the box.` },
              },
              approaches: [
                {
                  id: `approach-a`,
                  label: `Subtract 8 from both sides to isolate x`,
                  description: `Right now, 8 is added to x. To undo, subtract 8 from both sides.`,
                  steps: [
                    {
                      prompt: `x + 8 = 20. Subtract 8 from both sides. Left: x + 8 - 8 = x. Right: 20 - 8 = ?`,
                      answer: 12,
                      hint: `20 - 8.`,
                    },
                  ],
                  commonMistakes: [
                    { wrongAnswer: 28, explanation: `Looks like you added 20 + 8 (adding 8 to both sides instead of subtracting). To undo +8, we SUBTRACT 8 from both sides. 20 - 8 = 12.` },
                  ],
                },
              ],
              finalAnswer: 12,
              finalExplanation: `x = 12. Same idea as the box from problem 2 — just with a letter instead of a shape. Subtract 8 from both sides to isolate x: x + 8 - 8 = 20 - 8 → x = 12. Check: 12 + 8 = 20 ✓.`,
            },
            {
              id: `p4`,
              problemStatement: `Multiplication version. Solve: 3n = 18. What is n? (Note: "3n" means "3 times n" — when a number is right next to a letter, it means multiply.)`,
              visual: {
                type: `none`,
                data: { caption: `3n = 18 means "3 times n equals 18."` },
              },
              approaches: [
                {
                  id: `approach-a`,
                  label: `Divide both sides by 3`,
                  description: `n is being multiplied by 3. To undo, divide both sides by 3.`,
                  steps: [
                    {
                      prompt: `3n = 18. Divide both sides by 3. Left: 3n ÷ 3 = n. Right: 18 ÷ 3 = ?`,
                      answer: 6,
                      hint: `18 ÷ 3.`,
                    },
                    {
                      prompt: `Check: substitute n = 6 back in. 3 × 6 = ?`,
                      answer: 18,
                      hint: `3 × 6.`,
                    },
                  ],
                  commonMistakes: [
                    { wrongAnswer: 15, explanation: `Looks like you subtracted 3 from 18 instead of dividing. n is being MULTIPLIED by 3, so to undo we DIVIDE. 18 ÷ 3 = 6.` },
                    { wrongAnswer: 54, explanation: `Looks like you multiplied 18 × 3. But we want to UNDO the multiplication. The inverse of multiplication is division. 18 ÷ 3 = 6.` },
                  ],
                },
              ],
              finalAnswer: 18,
              finalExplanation: `n = 6. Solved by dividing both sides by 3 — undoing the multiplication. Check by substituting back: 3 × 6 = 18 ✓. This is the heart of algebra: do the inverse operation, do it to both sides, isolate the variable.`,
            },
          ],
          completionMessage: `Huge lesson, {name}. You went from balance scales to boxes to actual algebra equations. You solved problems with letters in them. You understand that variables are just unknowns waiting to be found. The key rule: whatever you do to one side, do to the other. Algebra is now in your toolkit. The capstone is next — and then Math UE is COMPLETE.`,
        },

        {
          id: `l19-quiz`,
          type: `quiz`,
          guideText: `Quick check, {name}.`,
          questions: [
            { id: `l19-q1`, format: `multiple-choice`,
              question: `In the equation x + 5 = 12, what does x stand for?`,
              options: [
                `The letter x`,
                `An unknown number we're trying to find`,
                `The number 5`,
                `Always 10`,
              ],
              correctIndex: 1,
              explanation: `x is a variable — a letter that stands for an unknown number. In this case, x stands for whatever number plus 5 gives 12. Solving: x = 7.` },
            { id: `l19-q2`, format: `multiple-choice`,
              question: `Solve: x + 6 = 14. What is x?`,
              options: [`6`, `8`, `14`, `20`],
              correctIndex: 1,
              explanation: `Subtract 6 from both sides: x = 14 - 6 = 8.` },
            { id: `l19-q3`, format: `multiple-choice`,
              question: `What's the most important rule when solving equations?`,
              options: [
                `Only do things to one side`,
                `Whatever you do to one side, do to the other`,
                `Always add`,
                `Never use negative numbers`,
              ],
              correctIndex: 1,
              explanation: `The balance scale rule. Both sides must stay equal. If you add or subtract from one side, do the same to the other.` },
            { id: `l19-q4`, format: `multiple-choice`,
              question: `Solve: y - 7 = 10. What is y?`,
              options: [`3`, `10`, `17`, `70`],
              correctIndex: 2,
              explanation: `Add 7 to both sides: y = 10 + 7 = 17.` },
            { id: `l19-q5`, format: `true-false`,
              question: `True or false: In the equation 5x = 30, "5x" means 5 plus x.`,
              correctAnswer: false,
              explanation: `False. When a number is right next to a letter (no operation sign), it means multiplication. 5x = 5 times x. So 5x = 30 means 5 × x = 30, and x = 6.` },
            { id: `l19-q6`, format: `multiple-choice`,
              question: `What is the inverse operation of multiplication?`,
              options: [`Addition`, `Subtraction`, `Multiplication`, `Division`],
              correctIndex: 3,
              explanation: `Division is the inverse of multiplication. They undo each other. To solve "3n = 18," divide both sides by 3.` },
            { id: `l19-q7`, format: `multiple-choice`,
              question: `Solve: 4n = 20. What is n?`,
              options: [`4`, `5`, `16`, `80`],
              correctIndex: 1,
              explanation: `Divide both sides by 4: n = 20 ÷ 4 = 5. Check: 4 × 5 = 20 ✓.` },
            { id: `l19-q8`, format: `multiple-choice`,
              question: `Why do we use letters instead of just numbers in algebra?`,
              options: [
                `To make math harder`,
                `So we can describe general patterns and reusable formulas, not just specific problems`,
                `To confuse kids`,
                `It doesn't matter`,
              ],
              correctIndex: 1,
              explanation: `Variables let one equation describe infinite specific problems. The formula "area = length × width" works for any rectangle. Variables make math reusable and powerful.` },
          ],
        },

        {
          id: `l19-reflection`,
          type: `reflection`,
          guideText: `Pick a prompt, {name}.`,
          prompts: [
            { id: `r1`, text: `When you first saw a letter in a math problem, did it feel weird? What helped it start making sense?` },
            { id: `r2`, text: `If you had to explain "variable" to a younger kid, what would you say?` },
            { id: `r3`, text: `Can you think of a real-life situation where you'd want to use a variable to describe something?` },
            { id: `r4`, text: `Why do you think algebra is required for so many careers (science, engineering, computer programming, finance)?` },
          ],
        },

        {
          id: `l19-realworld`,
          type: `real-world`,
          guideText: `Algebra and variables are the language of all advanced math and STEM. Every formula in physics, chemistry, biology, engineering, and economics uses variables. Computer programs are built on algebraic logic — variables hold data that changes. Even simple things use algebra: figuring out how long until you save enough money, predicting how many cookies you'll need for a party, designing anything. Once you can think with variables, you can model the world.`,
          familyAdventure: `Together, create a real-life algebra problem. For example: "I want to save $X. I save $5 per week. How many weeks?" Set up the equation: 5 × weeks = X. Plug in different X values ($50, $100, $200) and solve. Variables let you answer many similar questions with one setup.`,
          creativePrompt: {
            intro: `Make up a word problem that uses a variable. Set up the equation, then solve it.`,
            floor: `Write at least 5 sentences.`,
            stretch: `Write 8-10 sentences. Use the variable clearly and show how to solve.`,
            open: `Write as much as you want.`,
            frames: [
              `My situation is ___.`,
              `The unknown is ___.`,
              `I'll call the unknown ___.`,
              `The equation is ___.`,
              `Solving: ___.`,
              `Answer: ___ means ___.`,
            ],
          },
        },

        {
          id: `l19-celebration`,
          type: `celebration`,
          message: `Major step, {name}. You can now solve basic algebra equations with variables. You understand the balance scale rule. You know that letters in math are just placeholders for unknowns. This is the door to all advanced math. Next lesson is the FINAL one — the capstone that pulls everything together. — Remi.`,
          badge: `variable-explorer`,
          badgeName: `Variable Explorer`,
          xpEarned: 75,
        },
      ],
    },
  ],
};

export default MATH_UE_L19;
