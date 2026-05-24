// ─────────────────────────────────────────────────────────────────────────────
// MATH UE  |  L14 — Multiplying and Dividing Fractions
// Age band : upper_explorers (9–10)   Guide: remi
// Standards: CCSS 5.NF.B.4, 5.NF.B.7
// CALIBRATED: Math UE Spec v2
// Game format: problem-solving
// Visual model: area-model (multiplication) + number-line (division)
// Misconceptions DIRECTLY busted:
//   - "Multiply tops and bottoms is the same as add tops and bottoms" (wrong on add, RIGHT on multiply)
//   - "Division always makes smaller" (FALSE — 6 ÷ 1/2 = 12; this is the final myth crack)
//   - "Dividing by a fraction is hard" (it's not — flip and multiply)
// THIS LESSON CLOSES THE FRACTION ARC AND THE DIVISION-MYTH ARC.
// ─────────────────────────────────────────────────────────────────────────────

const MATH_UE_L14 = {
  ageBand: `upper_explorers`,
  subjectId: `math`,
  guide: `remi`,

  lessons: [
    {
      id: `math-9-10-14`,
      title: `Multiplying and Dividing Fractions`,
      duration: 24,
      xpReward: 75,
      badge: `fraction-master`,
      badgeName: `Fraction Master`,

      screens: [
        {
          id: `l14-welcome`,
          type: `welcome`,
          guideText: `Welcome back, {name}. Today we close the fraction arc with multiplying and dividing. The twist: dividing a number by a fraction can make the result BIGGER. Just like multiplying by a fraction less than 1 made things smaller in L12, dividing by a fraction less than 1 makes things bigger. By the end of today, you'll fully understand both operations AND have all the math myths fully busted.`,
          headline: `Multiplying and Dividing Fractions`,
          subtitle: `The final myth-bust`,
          visual: `/ue-assets/math/l14-welcome.webp`,
        },

        {
          id: `l14-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Multiplying Fractions: The Simplest Rule in Math`,
          paragraphs: [
            `Here's a surprise. Adding unlike fractions is hard (common denominators, conversion, etc.). But multiplying fractions is SIMPLE. To multiply two fractions: multiply the numerators, multiply the denominators. Done.`,
            `Example: 2/3 × 4/5. Top × top: 2 × 4 = 8. Bottom × bottom: 3 × 5 = 15. Answer: 8/15. That's it. No common denominators needed. No conversion. Just multiply straight across.`,
            `Why? Because fractions of fractions ARE smaller pieces. 2/3 × 4/5 means "two-thirds OF four-fifths." When you take a fraction of a fraction, you're cutting pieces into smaller pieces — and the area model from L12 shows this naturally. Each factor's denominator divides the unit further. Multiplying denominators gives you the total number of small pieces in the new unit.`,
          ],
          image: `/ue-assets/math/l14-s1-multiply.webp`,
          imageCaption: `2/3 × 4/5 = 8/15. Top × top, bottom × bottom. Simplest rule in fraction math.`,
          vocab: [
            { word: `straight-across multiplication`,
              definition: `For fractions, multiply the numerators together and the denominators together. No common denominator needed.`,
              audioPrompt: `Straight-across multiplication is the rule for multiplying fractions, {name}. Just multiply the numerators together to get the new numerator. Multiply the denominators together to get the new denominator. That's it. No common denominators required — unlike addition. 2/3 × 4/5 becomes 8/15 just by multiplying straight across. This is one of the simpler rules in fraction math, even though students often expect it to be harder.` },
            { word: `fraction of a fraction`,
              definition: `Multiplying fractions is taking a fraction OF another fraction — slicing already-small pieces into even smaller pieces.`,
              audioPrompt: `Multiplying fractions means taking a fraction OF another fraction, {name}. 1/2 × 1/3 means "one-half OF one-third." Half of a third is one-sixth. Same as 1/2 × 1/3 = 1/6. Each fraction you multiply further divides the unit. That's why multiplying fractions usually makes the result smaller — you're slicing already-small pieces into smaller ones.` },
          ],
        },

        {
          id: `l14-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Seeing It With the Area Model`,
          paragraphs: [
            `Let's prove the multiplication rule using the area model from L03 and L12. To multiply 1/2 × 1/3, draw a unit square and split it BOTH ways: in half horizontally AND into thirds vertically.`,
            `Result: a 2-by-3 grid with 6 equal small rectangles. Each small rectangle is 1/6 of the whole square. The piece that's "half" tall and "one-third" wide is just ONE of those small rectangles. That's 1/6. So 1/2 × 1/3 = 1/6.`,
            `Notice the math match. New numerator: 1 × 1 = 1 (you picked 1 row × 1 column). New denominator: 2 × 3 = 6 (total rectangles). Top × top, bottom × bottom. The area model PROVES the rule visually.`,
          ],
          image: `/ue-assets/math/l14-s2-area.webp`,
          imageCaption: `Unit square cut into halves AND thirds. The 1/2 × 1/3 piece is 1/6.`,
          vocab: [
            { word: `unit square`,
              definition: `A square measuring 1 unit by 1 unit, with area 1. Used to visualize fraction multiplication.`,
              audioPrompt: `A unit square is a square that measures 1 by 1, {name}. Its total area is 1. When you visualize fraction multiplication, you start with a unit square and split it into pieces. The pieces of the unit square represent the fractions. Because the whole square equals 1, every smaller piece can be named as a fraction of the whole. This is how the area model proves fraction multiplication works.` },
            { word: `area model for fractions`,
              definition: `Drawing fractions as parts of a rectangle to see what multiplying or dividing them means.`,
              audioPrompt: `The area model for fractions is the same area model you used for whole-number multiplication, {name}. The two factors become the side lengths of a rectangle. For fractions, you split a unit square. One factor splits it one way (horizontally), the other splits it the other way (vertically). The total number of small rectangles is your new denominator. The number of small rectangles in your "shaded region" is your new numerator. Area model in action.` },
          ],
        },

        {
          id: `l14-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Dividing Fractions: Flip and Multiply`,
          paragraphs: [
            `Now division. Dividing by a fraction has a magic rule: KEEP, CHANGE, FLIP. Keep the first fraction the same. Change the division sign to multiplication. Flip the second fraction (swap numerator and denominator). Then multiply straight across.`,
            `Example: 1/2 ÷ 1/4. Keep 1/2. Change ÷ to ×. Flip 1/4 to 4/1. Now: 1/2 × 4/1. Multiply straight across: top × top = 1 × 4 = 4. Bottom × bottom = 2 × 1 = 2. Answer: 4/2 = 2. So 1/2 ÷ 1/4 = 2.`,
            `Wait — the answer (2) is BIGGER than the original (1/2). Yes! This is the punchline from L04. Dividing by a fraction less than 1 makes the result BIGGER. Why? Because "1/2 ÷ 1/4" really asks "how many one-fourths fit inside one-half?" Two one-fourths fit inside one-half (since 1/4 + 1/4 = 1/2). So the answer is 2. Division by small things gives big results.`,
          ],
          image: `/ue-assets/math/l14-s3-divide.webp`,
          imageCaption: `1/2 ÷ 1/4 = 2. Keep, change, flip. Bigger than the original.`,
          vocab: [
            { word: `keep-change-flip`,
              definition: `The procedure for dividing fractions. Keep the first, change ÷ to ×, flip the second, then multiply.`,
              audioPrompt: `Keep-change-flip is the procedure for dividing fractions, {name}. KEEP the first fraction unchanged. CHANGE the division sign to multiplication. FLIP the second fraction by swapping its numerator and denominator. Then multiply straight across. Three quick steps and a division problem becomes a multiplication problem. Works every time. Memorable. Reliable.` },
            { word: `reciprocal`,
              definition: `A fraction's reciprocal is what you get when you flip its numerator and denominator. The reciprocal of 1/4 is 4/1.`,
              audioPrompt: `A reciprocal is what you get when you flip a fraction's numerator and denominator, {name}. The reciprocal of 1/4 is 4/1, which is just 4. The reciprocal of 2/3 is 3/2. The reciprocal of 5 (or 5/1) is 1/5. When you multiply a fraction by its reciprocal, you always get 1. The "flip" in keep-change-flip is really just "multiply by the reciprocal." Reciprocals undo each other.` },
          ],
        },

        {
          id: `l14-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `The Final Myth Crack: All Four Multiplier/Divisor Rules`,
          paragraphs: [
            `Time to write out the full picture. There are four rules for what happens to a number when you multiply or divide it by another positive number.`,
            `MULTIPLICATION rules: (1) Multiply by > 1 → result is BIGGER. (2) Multiply by < 1 → result is SMALLER. (Multiplying by exactly 1 leaves the number unchanged.)`,
            `DIVISION rules: (3) Divide by > 1 → result is SMALLER. (4) Divide by < 1 → result is BIGGER. (Dividing by exactly 1 leaves the number unchanged.)`,
            `These four rules are the truth. The myths most adults still believe — "multiplication makes bigger, division makes smaller" — only describe rules 1 and 3. Rules 2 and 4 are just as real. The size of the multiplier or divisor relative to 1 determines the direction. Greater than 1 grows under multiplication and shrinks under division. Less than 1 shrinks under multiplication and grows under division. That's the full picture.`,
          ],
          image: `/ue-assets/math/l14-s4-four-rules.webp`,
          imageCaption: `Four rules. Most adults know only two. You now know all four.`,
          vocab: [
            { word: `four-rule summary`,
              definition: `The complete rules for how multiplication and division change a number, based on whether the multiplier/divisor is greater or less than 1.`,
              audioPrompt: `The four-rule summary is the full truth of multiplication and division, {name}. Multiply by more than 1: bigger. Multiply by less than 1: smaller. Divide by more than 1: smaller. Divide by less than 1: bigger. Four rules. The size of the multiplier or divisor relative to 1 decides the direction. Most adults only know two of these rules. You now know all four. This is what comes from doing math the right way instead of just memorizing procedures.` },
            { word: `dividing by a fraction less than 1`,
              definition: `Always makes the result BIGGER than the original number. Like 6 ÷ 1/2 = 12.`,
              audioPrompt: `Dividing by a fraction less than 1 always makes the result bigger, {name}. 6 divided by 1/2 equals 12 — because two halves fit in every whole, so 6 wholes contain 12 halves. 10 divided by 1/4 equals 40 — because four fourths fit in every whole. The smaller the divisor, the bigger the result. This is the opposite of what most people expect — and it's the last math myth that gets busted.` },
          ],
        },

        // ── PROBLEM-SOLVING GAME ──
        {
          id: `l14-game`,
          type: `interactive`,
          format: `problem-solving`,
          guideText: `Time to multiply and divide fractions, {name}. Four problems. Two multiplications. Two divisions. The last is the myth crack — division by a fraction less than 1, making the result BIGGER. Watch it happen.`,
          scenarioTitle: `Fraction Multiplication and Division`,
          problems: [
            {
              id: `p1`,
              problemStatement: `Compute: 2/3 × 4/5`,
              visual: {
                type: `area-model`,
                data: {
                  width: 4,
                  height: 2,
                  splitWidth: [4],
                  splitHeight: [2],
                  caption: `Multiply numerators. Multiply denominators.`,
                },
              },
              approaches: [
                {
                  id: `approach-a`,
                  label: `Straight-across multiplication`,
                  description: `Top × top, bottom × bottom.`,
                  steps: [
                    {
                      prompt: `Multiply the numerators: 2 × 4 = ?`,
                      answer: 8,
                      hint: `Just multiply tops.`,
                    },
                    {
                      prompt: `Multiply the denominators: 3 × 5 = ?`,
                      answer: 15,
                      hint: `Just multiply bottoms.`,
                    },
                    {
                      prompt: `Result: 8/15. Can it simplify? 8 has factors 1, 2, 4, 8. 15 has factors 1, 3, 5, 15. Common factor (greater than 1)? Type 0 if no.`,
                      answer: 0,
                      hint: `8 and 15 share only 1 as a factor.`,
                    },
                  ],
                  commonMistakes: [
                    { wrongAnswer: 6, explanation: `Looks like you added the numerators (2 + 4) instead of multiplying. For fraction multiplication, MULTIPLY top × top and bottom × bottom.` },
                  ],
                },
              ],
              finalAnswer: 0,
              finalExplanation: `2/3 × 4/5 = 8/15. Simplest form. Notice multiplying fractions is way EASIER than adding them — no common denominator needed, just multiply straight across. 8/15 is smaller than both 2/3 and 4/5 because both factors are less than 1.`,
            },
            {
              id: `p2`,
              problemStatement: `Compute: 1/2 × 6 (a fraction × a whole number)`,
              visual: {
                type: `fraction-bar`,
                data: {
                  numerator: 3,
                  denominator: 1,
                  caption: `Half of 6.`,
                },
              },
              approaches: [
                {
                  id: `approach-a`,
                  label: `Write the whole number as a fraction, then multiply`,
                  description: `6 = 6/1. Then multiply straight across.`,
                  steps: [
                    {
                      prompt: `Write 6 as a fraction: 6/?`,
                      answer: 1,
                      hint: `Any whole number can be written over 1. So 6 = 6/1.`,
                    },
                    {
                      prompt: `Now multiply: 1/2 × 6/1. Top × top: 1 × 6 = ?`,
                      answer: 6,
                      hint: `Multiply numerators.`,
                    },
                    {
                      prompt: `Bottom × bottom: 2 × 1 = ?`,
                      answer: 2,
                      hint: `Multiply denominators.`,
                    },
                    {
                      prompt: `Result: 6/2. Simplify: 6 ÷ 2 = ?`,
                      answer: 3,
                      hint: `Divide both top and bottom by 2. Or just notice 6/2 = 3.`,
                    },
                  ],
                  commonMistakes: [],
                },
              ],
              finalAnswer: 3,
              finalExplanation: `1/2 × 6 = 3. Half of 6 is 3. We saw this in L09 already — multiplying by 1/2 cuts a number in half. The "straight across" rule still applies: write 6 as 6/1, multiply tops and bottoms, simplify.`,
            },
            {
              id: `p3`,
              problemStatement: `Compute: 3/4 ÷ 1/2`,
              visual: {
                type: `number-line`,
                data: {
                  points: [0, 0.5, 1, 1.5, 2],
                  labels: ['0', '1/2', '1', '1\u00BD', '2'],
                  caption: `How many halves fit in three-fourths?`,
                },
              },
              approaches: [
                {
                  id: `approach-a`,
                  label: `Keep-change-flip`,
                  description: `Keep the first, change ÷ to ×, flip the second, multiply.`,
                  steps: [
                    {
                      prompt: `Keep the first fraction (3/4). Change ÷ to ×. Now flip 1/2 to its reciprocal. The new fraction is ?/1`,
                      answer: 2,
                      hint: `The reciprocal of 1/2 is 2/1 (swap top and bottom).`,
                    },
                    {
                      prompt: `Now multiply: 3/4 × 2/1. Top × top: 3 × 2 = ?`,
                      answer: 6,
                      hint: `Multiply numerators.`,
                    },
                    {
                      prompt: `Bottom × bottom: 4 × 1 = ?`,
                      answer: 4,
                      hint: `Multiply denominators.`,
                    },
                    {
                      prompt: `Result: 6/4. Simplify by dividing both by 2: new numerator is 6 ÷ 2 = ?`,
                      answer: 3,
                      hint: `6 ÷ 2 = 3.`,
                    },
                  ],
                  commonMistakes: [
                    { wrongAnswer: 6, explanation: `Looks like the answer wasn't simplified. 6/4 simplifies to 3/2 (divide both by 2). That's the final answer.` },
                  ],
                },
              ],
              finalAnswer: 3,
              finalExplanation: `3/4 ÷ 1/2 = 3/2 (or 1 and 1/2). Notice the result (3/2 = 1.5) is BIGGER than 3/4 (which is 0.75). Why? Because we divided by 1/2 — a fraction less than 1. Dividing by less than 1 grows the result. Real example of the myth bust.`,
            },
            {
              id: `p4`,
              problemStatement: `The grand myth bust: Compute 6 ÷ 1/2. Before you start — predict: will the answer be bigger or smaller than 6?`,
              visual: {
                type: `number-line`,
                data: {
                  points: [0, 2, 4, 6, 8, 10, 12],
                  labels: ['0', '2', '4', '6', '8', '10', '12'],
                  caption: `How many halves fit in 6 wholes?`,
                },
              },
              approaches: [
                {
                  id: `approach-a`,
                  label: `Keep-change-flip on whole number ÷ fraction`,
                  description: `Treat 6 as 6/1, then keep-change-flip.`,
                  steps: [
                    {
                      prompt: `Write 6 as a fraction: 6/?`,
                      answer: 1,
                      hint: `Any whole number is itself over 1.`,
                    },
                    {
                      prompt: `Keep 6/1. Change ÷ to ×. Flip 1/2 to its reciprocal. What's the reciprocal? ?/1`,
                      answer: 2,
                      hint: `Reciprocal of 1/2 is 2/1.`,
                    },
                    {
                      prompt: `Multiply: 6/1 × 2/1. Top × top: 6 × 2 = ?`,
                      answer: 12,
                      hint: `Multiply numerators.`,
                    },
                    {
                      prompt: `Bottom × bottom: 1 × 1 = ?`,
                      answer: 1,
                      hint: `Multiply denominators.`,
                    },
                    {
                      prompt: `Result: 12/1 = 12. Is 12 bigger or smaller than 6? Type 1 for bigger, 2 for smaller.`,
                      answer: 1,
                      hint: `12 vs 6. Bigger.`,
                    },
                  ],
                  commonMistakes: [
                    { wrongAnswer: 3, explanation: `Looks like you may have multiplied 6 by 1/2 instead of dividing. Multiplication and division are different. Use keep-change-flip for division.` },
                    { wrongAnswer: 2, explanation: `If you said the answer was smaller — that's the old "division makes smaller" myth. But 6 ÷ 1/2 = 12, which is BIGGER. Dividing by a fraction less than 1 makes the result grow.` },
                  ],
                },
              ],
              finalAnswer: 1,
              finalExplanation: `6 ÷ 1/2 = 12. BIGGER than 6. Why? Because dividing asks "how many of this fit in that?" Two halves fit in every whole, so 6 wholes contain 12 halves. The smaller the divisor (the thing you're dividing by), the more of them fit. Smaller divisor → bigger result. This is the final crack in the "division always makes smaller" myth.`,
            },
          ],
          completionMessage: `Huge lesson, {name}. You can now multiply fractions (straight across), divide fractions (keep-change-flip), AND you've cracked the FINAL math myth. All four operation rules are now in your head: multiply by > 1 grows, multiply by < 1 shrinks, divide by > 1 shrinks, divide by < 1 GROWS. Most adults never get this clear about it. You do.`,
        },

        {
          id: `l14-quiz`,
          type: `quiz`,
          guideText: `Quick check, {name}.`,
          questions: [
            { id: `l14-q1`, format: `multiple-choice`,
              question: `What is 2/5 × 3/4?`,
              options: [`5/9`, `6/20`, `6/9`, `5/20`],
              correctIndex: 1,
              explanation: `Top × top: 2 × 3 = 6. Bottom × bottom: 5 × 4 = 20. Answer: 6/20 (which simplifies to 3/10).` },
            { id: `l14-q2`, format: `multiple-choice`,
              question: `For dividing fractions, what does "keep-change-flip" mean?`,
              options: [
                `Keep first fraction, change division to multiplication, flip the second`,
                `Flip both fractions and add`,
                `Keep flipping until done`,
                `Random procedure`,
              ],
              correctIndex: 0,
              explanation: `Keep the first fraction unchanged. Change the division sign to a multiplication sign. Flip the second fraction (swap its numerator and denominator). Then multiply straight across.` },
            { id: `l14-q3`, format: `multiple-choice`,
              question: `What is 1/3 ÷ 1/6?`,
              options: [`1/18`, `2`, `1/2`, `6/3`],
              correctIndex: 1,
              explanation: `Keep 1/3. Change ÷ to ×. Flip 1/6 to 6/1. Multiply: 1/3 × 6/1 = 6/3 = 2. Notice 2 is bigger than 1/3 — division by a fraction less than 1.` },
            { id: `l14-q4`, format: `true-false`,
              question: `True or false: Dividing 6 by 1/2 gives 12.`,
              correctAnswer: true,
              explanation: `True. Two halves fit in every whole, so 6 wholes contain 12 halves. Dividing by a fraction less than 1 makes the result bigger.` },
            { id: `l14-q5`, format: `multiple-choice`,
              question: `Why does multiplying fractions NOT need a common denominator (like adding does)?`,
              options: [
                `It's a different operation that combines pieces differently — you're slicing pieces into smaller pieces, not combining same-sized pieces`,
                `Random rule`,
                `Math is broken`,
                `It does need a common denominator`,
              ],
              correctIndex: 0,
              explanation: `Multiplying is different from adding. Multiplying fractions is taking a fraction OF another fraction — each factor slices the unit further, multiplying total pieces. Adding combines same-size pieces, so the sizes have to match (common denominator).` },
            { id: `l14-q6`, format: `multiple-choice`,
              question: `What's the reciprocal of 3/4?`,
              options: [`3/4`, `4/3`, `1/3`, `1/4`],
              correctIndex: 1,
              explanation: `The reciprocal flips the numerator and denominator. Reciprocal of 3/4 is 4/3.` },
            { id: `l14-q7`, format: `multiple-choice`,
              question: `Which of these makes a number BIGGER?`,
              options: [
                `Multiplying by 1/2`,
                `Multiplying by 0.5`,
                `Dividing by 1/2`,
                `Dividing by 2`,
              ],
              correctIndex: 2,
              explanation: `Dividing by 1/2 (a fraction less than 1) makes the result bigger. The other options either shrink the number or leave it the same.` },
            { id: `l14-q8`, format: `multiple-choice`,
              question: `What is 5 ÷ 1/4?`,
              options: [`5/4`, `1/20`, `20`, `4/5`],
              correctIndex: 2,
              explanation: `Write 5 as 5/1. Keep-change-flip: 5/1 × 4/1 = 20/1 = 20. Why bigger? Four fourths fit in every whole, so 5 wholes contain 20 fourths.` },
          ],
        },

        {
          id: `l14-reflection`,
          type: `reflection`,
          guideText: `Pick a prompt, {name}.`,
          prompts: [
            { id: `r1`, text: `Before this lesson, did you believe "division always makes smaller"? What do you believe now?` },
            { id: `r2`, text: `Why does 6 ÷ 1/2 = 12 instead of 3 or some smaller number? Try to explain in your own words.` },
            { id: `r3`, text: `Which feels harder to you — multiplying fractions or dividing them? Why?` },
            { id: `r4`, text: `What's the most surprising thing you learned in the whole fraction arc (L07 through L14)?` },
          ],
        },

        {
          id: `l14-realworld`,
          type: `real-world`,
          guideText: `Fraction multiplication and division show up everywhere. Recipe scaling — halving a recipe means multiplying ALL ingredients by 1/2. Construction — if a board is 8 feet long and you cut pieces 3/4 foot each, how many pieces? That's 8 ÷ 3/4. Sharing — splitting 1/2 a pizza among 3 kids is 1/2 ÷ 3. Real-life situations constantly involve fractions of fractions and fractions divided by other quantities. Now you have the tools.`,
          familyAdventure: `Together, find a recipe and HALVE it. Multiply every fractional ingredient by 1/2. Watch which ones get smaller. Then ask: "if I use this new recipe, how many batches can I make with 4 cups of flour?" That's a division-by-a-fraction problem. Real fraction math in real food.`,
          creativePrompt: {
            intro: `Make up a word problem that uses multiplying or dividing fractions. Pick the operation that makes more sense for your story.`,
            floor: `Write at least 5 sentences. Include the problem and solution.`,
            stretch: `Write 8-10 sentences. Use keep-change-flip clearly if it's division.`,
            open: `Write as much as you want.`,
            frames: [
              `My problem is about ___.`,
              `The two fractions are ___ and ___.`,
              `The operation is ___ because ___.`,
              `Working through it: ___.`,
              `Final answer: ___.`,
            ],
          },
        },

        {
          id: `l14-celebration`,
          type: `celebration`,
          message: `Massive lesson, {name}. The whole fraction arc is now COMPLETE. You can add, subtract, multiply, and divide fractions. You understand four rules of how multiplication and division change numbers. You've busted two big math myths most adults still believe. Major chunk of UE math done. Next two lessons shift into geometry — a totally different flavor of math. — Remi.`,
          badge: `fraction-master`,
          badgeName: `Fraction Master`,
          xpEarned: 75,
        },
      ],
    },
  ],
};

export default MATH_UE_L14;
