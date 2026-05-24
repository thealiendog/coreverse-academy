// ─────────────────────────────────────────────────────────────────────────────
// MATH UE  |  L08 — Adding and Subtracting Fractions (Like Denominators)
// Age band : upper_explorers (9–10)   Guide: remi
// Standards: CCSS 4.NF.B.3
// CALIBRATED: Math UE Spec v2
// Game format: problem-solving (Fraction Math)
// Visual model: fraction-bar
// Misconceptions DIRECTLY addressed:
//   - "Add tops AND bottoms" (the most common fraction add error)
//   - "Denominator changes when you add" (false — it stays the same with like denoms)
//   - Forgetting to keep fraction as ONE quantity even when operating
// SCOPE: Only LIKE denominators here. Unlike denominators is L13.
// ─────────────────────────────────────────────────────────────────────────────

const MATH_UE_L08 = {
  ageBand: `upper_explorers`,
  subjectId: `math`,
  guide: `remi`,

  lessons: [
    {
      id: `math-9-10-08`,
      title: `Adding and Subtracting Fractions`,
      duration: 22,
      xpReward: 75,
      badge: `fraction-arithmetic`,
      badgeName: `Fraction Arithmetic`,

      screens: [
        {
          id: `l08-welcome`,
          type: `welcome`,
          guideText: `Welcome back, {name}. Today we add and subtract fractions. For now, only fractions that have the SAME denominator — meaning the pieces are the same size. Different-sized pieces (different denominators) is a later lesson because it's a whole different challenge. By the end of today, you'll be able to add and subtract fractions with confidence — AND you'll know exactly why one of the most common mistakes is wrong.`,
          headline: `Adding and Subtracting Fractions`,
          subtitle: `Combining and removing parts of a whole`,
          visual: `/ue-assets/math/l08-welcome.webp`,
        },

        {
          id: `l08-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `When the Pieces Are the Same Size`,
          paragraphs: [
            `Imagine a pizza cut into 8 equal slices. You eat 3 slices — that's 3/8 of the pizza. Your friend eats 2 more slices — that's 2/8. How much did you eat together?`,
            `Think about it. You and your friend together ate 3 + 2 = 5 slices. The pizza was still cut into 8 slices. So together, you ate 5/8 of the pizza. That's the answer.`,
            `Notice what happened. The NUMERATORS added together: 3 + 2 = 5. The DENOMINATOR stayed the same: 8. Why? Because the piece SIZE didn't change. You and your friend were eating slices from the same pizza. The size of each slice (eighths) didn't change. You just had MORE of them combined.`,
            `That's the rule for adding fractions with the same denominator: add the numerators, keep the denominator. 3/8 + 2/8 = 5/8. Simple. Visual. Logical.`,
          ],
          image: `/ue-assets/math/l08-s1-add-same.webp`,
          imageCaption: `3/8 + 2/8 = 5/8. The slices stay the same size — you just have more of them.`,
          vocab: [
            { word: `like denominators`,
              definition: `Two or more fractions with the SAME denominator — meaning the same-size pieces.`,
              audioPrompt: `Like denominators means two fractions that have the SAME bottom number, {name}. 3/8 and 2/8 have like denominators — both 8. 1/5 and 4/5 have like denominators — both 5. When fractions have like denominators, the pieces are all the same size, which makes adding and subtracting easy. Today we only work with like denominators. Next time, we'll handle the harder case — unlike denominators, where pieces are different sizes.` },
            { word: `unlike denominators`,
              definition: `Two fractions with DIFFERENT bottom numbers — meaning different-size pieces. Require extra steps to add or subtract.`,
              audioPrompt: `Unlike denominators means two fractions have different bottom numbers, {name}. Like 1/3 and 1/4 — the pieces are different sizes. You can't just add or subtract the numerators when the denominators are different. You have to find a common denominator first — a shared piece size. Today we only do like denominators. Unlike denominators come in a later lesson, but now you know the vocabulary for both.` },
          ],
        },

        {
          id: `l08-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `The Mistake That Catches Almost Everyone`,
          paragraphs: [
            `Time to bust the biggest fraction-adding mistake. When kids first learn to add fractions, the most natural-seeming thing is: "add the tops AND add the bottoms." So 3/8 + 2/8 = 5/16, right?`,
            `WRONG. Let's see why this can't be right. Picture the same pizza, cut into 8 slices. You ate 3, your friend ate 2. Together, that's 5 slices out of 8. But "5/16" would mean 5 slices out of a SIXTEEN-piece pizza. Where did the 16 come from? You didn't suddenly cut the pizza into more pieces. The denominator should stay the same.`,
            `Think of fractions like units, like inches. If you have 3 inches and add 2 more inches, you get 5 inches — not 5 "double-inches." The unit (inches) doesn't change when you combine quantities of it. Same with fractions. 3 eighths + 2 eighths = 5 eighths. The "eighths" doesn't double. The denominator stays.`,
          ],
          image: `/ue-assets/math/l08-s2-mistake.webp`,
          imageCaption: `Don't add the bottoms. The pieces stay the same size.`,
          vocab: [
            { word: `combining`,
              definition: `Putting parts together — what adding fractions actually does.`,
              audioPrompt: `Combining is what addition does, {name}. When you combine fractions with like denominators, you're putting together parts that are the same size. 3 eighths plus 2 eighths combines into 5 eighths. The pieces don't change — just the count. Thinking about addition as "combining" rather than "adding two numbers" really helps with fractions. You're not adding bottom and top together — you're combining same-sized parts.` },
            { word: `fraction sense`,
              definition: `The ability to judge whether a fraction answer is reasonable, using logic and mental images rather than procedure alone.`,
              audioPrompt: `Fraction sense is the ability to tell whether a fraction answer makes sense, {name}. Like knowing that 3/8 + 2/8 can't be 5/16 — because you're combining parts of the same whole. Fraction sense is a mental check: picture the pizza, picture the slices. If the answer seems off, trust that instinct and look for the mistake. Procedures are great, but sense-making catches errors before they go unnoticed.` },
          ],
        },

        {
          id: `l08-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Subtraction Works the Same Way`,
          paragraphs: [
            `Subtracting fractions with like denominators follows the exact same logic. You have 7/10 of a chocolate bar. You give 3/10 to a friend. How much do you have left?`,
            `Same kind of thinking: 7 - 3 = 4 pieces left. The pieces were tenths, and they're still tenths. So you have 4/10 left. That's the rule for subtraction: subtract the numerators, keep the denominator. 7/10 - 3/10 = 4/10.`,
            `Notice the same potential mistake applies. If you "subtracted top AND bottom," you'd get 4/0 — which is undefined (you can't divide by zero). Or some kids might try to subtract diagonally — that's also wrong. The denominator is the unit name. Units don't subtract from each other — quantities do.`,
          ],
          image: `/ue-assets/math/l08-s3-subtract.webp`,
          imageCaption: `7/10 - 3/10 = 4/10. The tenths stay tenths.`,
          vocab: [
            { word: `simplifying`,
              definition: `Reducing a fraction to its smallest equivalent form by dividing top and bottom by the same number.`,
              audioPrompt: `Simplifying a fraction means writing it in its smallest equivalent form, {name}. 4/10 can be simplified to 2/5 (divide both by 2). 6/12 simplifies to 1/2 (divide both by 6). The fraction's VALUE doesn't change — you just write it more cleanly. Simplifying happens after you do the math. So 4/10 might become 2/5. Both are correct answers, but 2/5 is the simplified form. We'll practice this more in the game.` },
            { word: `equivalent form`,
              definition: `One of the many ways to write the same fraction. 4/10 and 2/5 are equivalent forms of the same quantity.`,
              audioPrompt: `Equivalent form means a different way to write the exact same value, {name}. 4/10 and 2/5 are equivalent forms — same quantity, written differently. When you simplify a fraction, you're finding its equivalent form with the smallest numbers. When you multiply top and bottom by the same number, you're finding a larger equivalent form. Fractions have infinitely many equivalent forms — simplest form is just the cleanest version.` },
          ],
        },

        {
          id: `l08-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `When Answers Can Be Written More Cleanly (Simplifying)`,
          paragraphs: [
            `When you add or subtract fractions, sometimes your answer can be SIMPLIFIED — written in a smaller equivalent form. Like if you get 4/8, that's the same as 1/2. Both are correct, but 1/2 is the "cleaner" version.`,
            `How does simplifying work? You find a number that divides BOTH the numerator and the denominator evenly. Then divide both by that number. 4/8 — both 4 and 8 are divisible by 4. Divide both: 4÷4 = 1 (new numerator). 8÷4 = 2 (new denominator). So 4/8 = 1/2.`,
            `You can also do it step by step. 4/8: divide both by 2, get 2/4. Then divide both by 2 again, get 1/2. Same answer, just took two steps. A fraction is "fully simplified" when the numerator and denominator have no common factor other than 1. 1/2 is fully simplified because there's nothing to divide both by anymore.`,
          ],
          image: `/ue-assets/math/l08-s4-simplify.webp`,
          imageCaption: `4/8 = 2/4 = 1/2. Same amount, simplest form.`,
          vocab: [
            { word: `common factor`,
              definition: `A number that divides into both the numerator and denominator. Used for simplifying fractions.`,
              audioPrompt: `A common factor is a number that divides into both the numerator and denominator of a fraction, {name}. For 4/8, the number 2 is a common factor (both 4 and 8 are divisible by 2). The number 4 is also a common factor. To simplify a fraction, find a common factor and divide BOTH top and bottom by it. You can repeat until there are no common factors left except 1. That's "fully simplified."` },
            { word: `greatest common factor`,
              definition: `The largest number that divides evenly into both the numerator and denominator. Dividing by the GCF simplifies in one step.`,
              audioPrompt: `The greatest common factor, or GCF, is the biggest number that divides into both the numerator and denominator, {name}. For 8/12, the GCF is 4 — the biggest number that goes into both 8 and 12 evenly. Dividing both by the GCF simplifies in one step: 8÷4=2, 12÷4=3, so 8/12 = 2/3. You can simplify step by step with smaller factors, but using the GCF gets you to simplest form fastest.` },
          ],
        },

        // ── PROBLEM-SOLVING GAME — Fraction Math ──────────────────────────
        {
          id: `l08-game`,
          type: `interactive`,
          format: `problem-solving`,
          guideText: `Time to add and subtract fractions, {name}. All these problems have LIKE denominators — same-size pieces. Remember: add or subtract the numerators, keep the denominator the same. Don't fall for the trap of adding the bottoms!`,
          scenarioTitle: `Fraction Math`,
          problems: [
            {
              id: `p1`,
              problemStatement: `A pizza was cut into 8 equal slices. Anna ate 2/8 of the pizza. Ben ate 3/8. How much pizza did they eat together?`,
              visual: {
                type: `fraction-bar`,
                data: {
                  numerator: 5,
                  denominator: 8,
                  caption: `Combining 2 eighths + 3 eighths.`,
                },
              },
              approaches: [
                {
                  id: `approach-a`,
                  label: `Add the numerators, keep the denominator`,
                  description: `Like denominators means we just combine the pieces.`,
                  steps: [
                    {
                      prompt: `Add the numerators: 2 + 3 = ?`,
                      answer: 5,
                      hint: `Just add the top numbers.`,
                    },
                    {
                      prompt: `What's the denominator? (Hint: it doesn't change!)`,
                      answer: 8,
                      hint: `Same as both original fractions. The piece size didn't change.`,
                    },
                  ],
                  commonMistakes: [
                    { wrongAnswer: 16, explanation: `Looks like you added the denominators too. Don't add the bottoms — they stay the same. The piece size doesn't change when you add fractions with the same denominator.` },
                  ],
                },
              ],
              finalAnswer: 8,
              finalExplanation: `2/8 + 3/8 = 5/8. They ate 5/8 of the pizza together. Notice the denominator (8) stayed the same. We're combining eighths — the unit doesn't change.`,
            },
            {
              id: `p2`,
              problemStatement: `You have 5/6 of a tank of gas. You use 2/6 of the tank driving home. How much gas do you have left?`,
              visual: {
                type: `fraction-bar`,
                data: {
                  numerator: 3,
                  denominator: 6,
                  caption: `5 sixths minus 2 sixths.`,
                },
              },
              approaches: [
                {
                  id: `approach-a`,
                  label: `Subtract the numerators, keep the denominator`,
                  description: `Subtract: 5 - 2 = ? and keep the denominator the same.`,
                  steps: [
                    {
                      prompt: `Subtract the numerators: 5 - 2 = ?`,
                      answer: 3,
                      hint: `Just subtract the top numbers.`,
                    },
                    {
                      prompt: `What's the denominator?`,
                      answer: 6,
                      hint: `The denominator stays the same when subtracting like fractions.`,
                    },
                  ],
                  commonMistakes: [
                    { wrongAnswer: 0, explanation: `Did you subtract the denominators? Don't — they stay the same. 6 - 6 = 0 would make the answer undefined.` },
                  ],
                },
              ],
              finalAnswer: 6,
              finalExplanation: `5/6 - 2/6 = 3/6 of the tank. Subtract the numerators (5 - 2 = 3), keep the denominator (6). And bonus — 3/6 can be simplified to 1/2 (divide both by 3). Half a tank left.`,
            },
            {
              id: `p3`,
              problemStatement: `Compute: 3/10 + 4/10. Then simplify if you can.`,
              visual: {
                type: `fraction-bar`,
                data: {
                  numerator: 7,
                  denominator: 10,
                  caption: `Add 3 tenths and 4 tenths.`,
                },
              },
              approaches: [
                {
                  id: `approach-a`,
                  label: `Add, then check if simplification is possible`,
                  description: `Add the numerators, keep the denominator. Then see if both share a common factor.`,
                  steps: [
                    {
                      prompt: `Add the numerators: 3 + 4 = ?`,
                      answer: 7,
                      hint: `Just add the tops.`,
                    },
                    {
                      prompt: `Denominator stays 10. So we have 7/10. Can 7 and 10 both be divided by the same number greater than 1?`,
                      answer: 0,
                      hint: `Hmm — 7 is prime, so it only has factors 1 and 7. 10 has factors 1, 2, 5, 10. The only common factor is 1. So 7/10 can't be simplified — it's already in simplest form. Type 0 if you can't simplify.`,
                    },
                  ],
                  commonMistakes: [],
                },
              ],
              finalAnswer: 10,
              finalExplanation: `3/10 + 4/10 = 7/10. The fraction 7/10 is already in simplest form because 7 is prime and shares no common factor with 10 except 1. Not every fraction needs simplifying — and that's fine.`,
            },
            {
              id: `p4`,
              problemStatement: `Compute: 5/12 + 3/12. Then simplify your answer.`,
              visual: {
                type: `fraction-bar`,
                data: {
                  numerator: 8,
                  denominator: 12,
                  caption: `Add, then simplify.`,
                },
              },
              approaches: [
                {
                  id: `approach-a`,
                  label: `Add, then simplify by finding a common factor`,
                  description: `Add: 5/12 + 3/12 = 8/12. Then look for a common factor of 8 and 12.`,
                  steps: [
                    {
                      prompt: `Add the numerators: 5 + 3 = ?`,
                      answer: 8,
                      hint: `Just add the tops.`,
                    },
                    {
                      prompt: `So we have 8/12. What's a common factor of 8 and 12 (greater than 1)?`,
                      answer: 4,
                      hint: `Think: what's the biggest number that divides into both 8 and 12 evenly? Try 4. 8 ÷ 4 = 2 ✓. 12 ÷ 4 = 3 ✓.`,
                    },
                    {
                      prompt: `Divide both by 4. New numerator: 8 ÷ 4 = ?`,
                      answer: 2,
                      hint: `Divide the top by the common factor.`,
                    },
                    {
                      prompt: `New denominator: 12 ÷ 4 = ?`,
                      answer: 3,
                      hint: `Divide the bottom by the same common factor.`,
                    },
                  ],
                  commonMistakes: [
                    { wrongAnswer: 1, explanation: `If you said the common factor is 1, that wouldn't simplify anything. 1 is a common factor of EVERY pair of numbers, so it's not useful for simplifying. Look for a bigger common factor.` },
                  ],
                },
              ],
              finalAnswer: 3,
              finalExplanation: `5/12 + 3/12 = 8/12. Then simplify: divide both by 4 (the common factor) to get 2/3. Final answer: 2/3. The cleanest form. Notice the value didn't change — 8/12 and 2/3 are equivalent. We just wrote it more simply.`,
            },
          ],
          completionMessage: `Strong work, {name}. You added and subtracted fractions with like denominators, and simplified when possible. The big takeaways: same denominator means same-size pieces, so just combine or subtract the numerators. The denominator stays put. And always check if you can simplify at the end.`,
        },

        {
          id: `l08-quiz`,
          type: `quiz`,
          guideText: `Quick check, {name}.`,
          questions: [
            { id: `l08-q1`, format: `multiple-choice`,
              question: `What is 2/7 + 3/7?`,
              options: [`5/14`, `5/7`, `6/7`, `5/49`],
              correctIndex: 1,
              explanation: `Add numerators (2+3=5), keep denominator (7). 5/7. Don't add the denominators — same-size pieces don't change size when you combine them.` },
            { id: `l08-q2`, format: `multiple-choice`,
              question: `When you add fractions with the same denominator, what happens to the denominator?`,
              options: [
                `It doubles`,
                `It stays the same`,
                `You add the denominators together`,
                `It becomes 1`,
              ],
              correctIndex: 1,
              explanation: `The denominator stays the same. It tells you the SIZE of the pieces, which doesn't change when you combine them. Only the count (numerator) changes.` },
            { id: `l08-q3`, format: `multiple-choice`,
              question: `What is 5/9 - 2/9?`,
              options: [`3/9`, `3/0`, `7/9`, `3`],
              correctIndex: 0,
              explanation: `Subtract numerators (5-2=3), keep denominator (9). Answer: 3/9. (This can also be simplified to 1/3.)` },
            { id: `l08-q4`, format: `true-false`,
              question: `True or false: When adding 1/4 + 2/4, the answer is 3/8.`,
              correctAnswer: false,
              explanation: `False. The correct answer is 3/4. Add numerators (1+2=3), keep denominator (4). Adding the denominators is the classic mistake — don't do it.` },
            { id: `l08-q5`, format: `multiple-choice`,
              question: `What is 4/6 simplified to?`,
              options: [`2/3`, `4/3`, `2/6`, `8/12`],
              correctIndex: 0,
              explanation: `Divide both 4 and 6 by their common factor 2. 4÷2=2, 6÷2=3. So 4/6 simplifies to 2/3. Same quantity, simpler form.` },
            { id: `l08-q6`, format: `multiple-choice`,
              question: `What does it mean to "simplify" a fraction?`,
              options: [
                `Make it bigger`,
                `Write it in its smallest equivalent form by dividing top and bottom by a common factor`,
                `Add the numerator and denominator`,
                `Round it to a whole number`,
              ],
              correctIndex: 1,
              explanation: `Simplifying writes the fraction in its smallest equivalent form. Divide both numerator and denominator by a common factor. The value doesn't change — just the form.` },
            { id: `l08-q7`, format: `multiple-choice`,
              question: `What is 7/10 - 3/10? Give the answer in simplest form.`,
              options: [`4/10`, `2/5`, `10/20`, `4/0`],
              correctIndex: 1,
              explanation: `Subtract numerators (7-3=4), keep denominator (10). Answer is 4/10. Both share a common factor of 2 — divide both by 2 to get 2/5. Simplest form: 2/5.` },
            { id: `l08-q8`, format: `multiple-choice`,
              question: `Why can't you simplify 7/8?`,
              options: [
                `Because 7 is prime`,
                `Because 7 and 8 have no common factor other than 1`,
                `Both of the above`,
                `You actually can — it equals 1/2`,
              ],
              correctIndex: 2,
              explanation: `Both A and B are true. 7 is prime, so its only factors are 1 and 7. 8's factors are 1, 2, 4, 8. The only common factor is 1, so 7/8 can't be simplified. It's already in simplest form.` },
          ],
        },

        {
          id: `l08-reflection`,
          type: `reflection`,
          guideText: `Pick a prompt, {name}.`,
          prompts: [
            { id: `r1`, text: `Why does the denominator NOT change when you add fractions with the same bottom number? Try to explain it in your own words.` },
            { id: `r2`, text: `What's a real-life situation where you'd want to add or subtract fractions?` },
            { id: `r3`, text: `What's the biggest fraction mistake you used to make, and how would you correct it now?` },
            { id: `r4`, text: `Which is harder — adding fractions or simplifying them? Why?` },
          ],
        },

        {
          id: `l08-realworld`,
          type: `real-world`,
          guideText: `Fraction adding shows up constantly. Cooking — if a recipe calls for 1/4 cup of butter and you double it, you need 2/4 cup = 1/2 cup. Time — half an hour plus three quarters of an hour equals an hour and a quarter. Measurements — 3/8 inch + 5/8 inch = 1 whole inch. Anytime parts come together, you're adding fractions. The "keep the denominator the same" rule applies whenever the pieces are the same size to start with.`,
            familyAdventure: `Together, find a real situation that uses fraction adding. Maybe baking — combine 1/4 cup of one ingredient and 1/4 cup of another, and notice that it's 2/4 = 1/2 cup total. Or measure something using fractions of an inch and combine pieces. Get a feel for what fraction addition actually means physically.`,
          creativePrompt: {
            intro: `Make up a word problem that uses adding or subtracting fractions with the same denominator. Make it about something real and interesting.`,
            floor: `Write at least 5 sentences. Include the problem and its solution.`,
            stretch: `Write 8-10 sentences. Make the math AND the story compelling.`,
            open: `Write as much as you want.`,
            frames: [
              `My problem is about ___.`,
              `The two fractions being added (or subtracted) are ___ and ___.`,
              `Both denominators are ___ because ___.`,
              `Adding (or subtracting) the numerators gives ___.`,
              `So the answer is ___.`,
            ],
          },
        },

        {
          id: `l08-celebration`,
          type: `celebration`,
          message: `Real progress, {name}. You can now add and subtract fractions with like denominators, simplify fractions, and explain why the denominator stays the same when you combine same-size pieces. Most adults still make the "add the bottoms" mistake. You don't. Next lesson, we multiply fractions by whole numbers. — Remi.`,
          badge: `fraction-arithmetic`,
          badgeName: `Fraction Arithmetic`,
          xpEarned: 75,
        },
      ],
    },
  ],
};

export default MATH_UE_L08;
