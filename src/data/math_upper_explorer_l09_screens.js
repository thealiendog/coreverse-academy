// ─────────────────────────────────────────────────────────────────────────────
// MATH UE  |  L09 — Fractions × Whole Numbers
// Age band : upper_explorers (9–10)   Guide: remi
// Standards: CCSS 4.NF.B.4
// CALIBRATED: Math UE Spec v2
// Game format: problem-solving
// Visual model: fraction-bar (primary), array (secondary)
// Misconceptions:
//   - "Multiplying always makes bigger" (will deepen in L12)
//   - "Multiply tops and bottoms" (wrong here — whole number × fraction is different)
//   - "3 × 2/5 = 6/15" (multiplying the denominator too)
// ─────────────────────────────────────────────────────────────────────────────

const MATH_UE_L09 = {
  ageBand: `upper_explorers`,
  subjectId: `math`,
  guide: `remi`,

  lessons: [
    {
      id: `math-9-10-09`,
      title: `Fractions × Whole Numbers`,
      duration: 22,
      xpReward: 75,
      badge: `fraction-multiplier`,
      badgeName: `Fraction Multiplier`,

      screens: [
        {
          id: `l09-welcome`,
          type: `welcome`,
          guideText: `Welcome back, {name}. Today we multiply fractions by whole numbers. Like 3 × 1/4 or 5 × 2/3. This is where you start to see something weird — multiplication doesn't always make things bigger. Sometimes it does, sometimes it doesn't. By the end of today, you'll understand exactly when and why. Take your time.`,
          headline: `Fractions × Whole Numbers`,
          subtitle: `Multiplying a fraction by a whole number`,
          visual: `/ue-assets/math/l09-welcome.webp`,
        },

        {
          id: `l09-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Multiplication Is Just Repeated Addition (Even With Fractions)`,
          paragraphs: [
            `Remember from L03 — multiplication is repeated addition. 3 × 4 means 4 + 4 + 4, which equals 12. That same idea works for fractions too.`,
            `3 × 1/4 means 1/4 + 1/4 + 1/4. Three one-fourths combined. That's three slices of a four-slice pizza, which is 3/4. So 3 × 1/4 = 3/4.`,
            `Look at the pattern. The whole number (3) became the NEW numerator. The denominator (4) stayed the same. Why? Because we're combining same-sized pieces (fourths), so the piece size doesn't change — just the count. This connects directly to L08, where adding like fractions kept the denominator the same. Same principle, just applied to multiplication.`,
          ],
          image: `/ue-assets/math/l09-s1-repeated.webp`,
          imageCaption: `3 × 1/4 = 1/4 + 1/4 + 1/4 = 3/4. Three fourths.`,
          vocab: [
            { word: `repeated addition`,
              definition: `Adding the same number multiple times. This is what multiplication actually is.`,
              audioPrompt: `Repeated addition is what multiplication means, {name}. 4 × 7 is the same as 7 + 7 + 7 + 7. And 3 × 1/4 is the same as 1/4 + 1/4 + 1/4. Multiplying a whole number by a fraction means combining that fraction with itself, that many times. The whole number tells you HOW MANY copies of the fraction you're adding together.` },
            { word: `numerator`,
              definition: `The top number in a fraction. It counts how many equal parts you have.`,
              audioPrompt: `The numerator is the top number in a fraction, {name}. In 3/4, the 3 is the numerator — it tells you how many fourths you have. When you multiply a fraction by a whole number, the whole number multiplies with the numerator. That's because you're adding more copies of the same-sized piece. Three copies of 1/4 gives you 3/4 — the numerator changed from 1 to 3, while the denominator stayed at 4.` },
          ],
        },

        {
          id: `l09-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `The Shortcut: Multiply the Whole Number by the Numerator`,
          paragraphs: [
            `Repeated addition works, but it gets tedious for bigger numbers. Imagine 7 × 2/5 — you'd add 2/5 seven times. Doable but slow. There's a faster way.`,
            `Here's the rule: when you multiply a whole number by a fraction, multiply the whole number by the NUMERATOR and keep the DENOMINATOR the same. So 7 × 2/5 = (7 × 2) / 5 = 14/5.`,
            `Why does this work? Because each "2/5" you add contributes 2 to the numerator count, and the denominator never changes (same-size pieces). After 7 copies, you've added 7 × 2 = 14 to the numerator. That's the shortcut. It's just the repeated addition idea, organized.`,
          ],
          image: `/ue-assets/math/l09-s2-shortcut.webp`,
          imageCaption: `Multiply the whole number by the numerator. Keep the denominator. Done.`,
          vocab: [
            { word: `improper fraction`,
              definition: `A fraction where the numerator is greater than or equal to the denominator. The value is 1 or more. Example: 7/4, 5/3, 14/5.`,
              audioPrompt: `An improper fraction is one where the numerator is bigger than or equal to the denominator, {name}. 7/4 is improper because 7 > 4. 14/5 is improper because 14 > 5. The value of an improper fraction is 1 or more. It's not "wrong" — it's just bigger than a whole. We can also write improper fractions as mixed numbers. 7/4 = 1 whole and 3/4 left over, written as 1 and 3/4. Both forms mean the same thing.` },
            { word: `denominator`,
              definition: `The bottom number in a fraction. It tells you how many equal parts the whole is divided into.`,
              audioPrompt: `The denominator is the bottom number in a fraction, {name}. In 7/4, the 4 is the denominator — it tells you that the whole is cut into 4 equal parts. When you multiply a fraction by a whole number, the denominator stays the same. You're taking more copies of the same-sized piece, so the piece size doesn't change. Only the count of pieces — the numerator — changes. That's why 7 × 2/5 = 14/5, not 14/35.` },
          ],
        },

        {
          id: `l09-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `When the Answer Is More Than One Whole`,
          paragraphs: [
            `Try 3 × 3/4. Using the shortcut: 3 × 3 = 9 (new numerator). Keep the denominator: 4. Answer: 9/4.`,
            `But what does 9/4 mean? It means 9 fourths. Since 4 fourths make a whole, 9 fourths is MORE than 1 whole. Specifically, it's 2 whole pizzas plus 1 leftover fourth — written as 2 and 1/4 (a mixed number).`,
            `Improper fractions and mixed numbers are two ways of writing the same thing. 9/4 = 2 and 1/4. Both are correct. Different situations call for different forms. To convert 9/4 to a mixed number: divide 9 by 4. The quotient (2) is the whole part. The remainder (1) is the new numerator. The denominator stays 4. So 9/4 = 2 and 1/4.`,
          ],
          image: `/ue-assets/math/l09-s3-mixed.webp`,
          imageCaption: `9/4 = 2 wholes + 1 fourth = 2 and 1/4.`,
          vocab: [
            { word: `mixed number`,
              definition: `A whole number combined with a fraction. Example: 2 and 1/4, meaning 2 wholes plus a fourth.`,
              audioPrompt: `A mixed number is a whole number combined with a fraction, {name}. 2 and 1/4 means 2 wholes plus 1 fourth — a total of 2.25 if we converted to decimal. Mixed numbers are useful when you want to see how many wholes plus how much leftover. Improper fractions are useful for doing math operations. Both express the same quantity in different ways. Converting between them: divide the numerator by the denominator. Quotient is the whole part, remainder is the new numerator, denominator stays.` },
            { word: `remainder`,
              definition: `What's left over after dividing as evenly as possible. Used to find the fractional part when converting an improper fraction to a mixed number.`,
              audioPrompt: `A remainder is what's left over after dividing as evenly as possible, {name}. When you convert 11/4 to a mixed number, you divide 11 by 4. Four goes into 11 two times, using up 8. The remainder is 11 minus 8, which is 3. That remainder becomes the new numerator. The denominator stays 4. So 11/4 = 2 and 3/4. The remainder is what tells you the leftover fractional part.` },
          ],
        },

        {
          id: `l09-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `The Hint of What's Coming: When Multiplication Makes Smaller`,
          paragraphs: [
            `So far, multiplying a fraction by a whole number always made the result bigger. 3 × 1/4 = 3/4 is bigger than 1/4. 7 × 2/5 = 14/5 is bigger than 2/5. The whole-number factor was always 2 or more, so we're combining multiple copies — naturally bigger than just one copy.`,
            `But here's a hint of what's coming. What if you multiplied a whole number by a fraction LESS than 1? Like 8 × 1/2. That's "half of 8," which equals 4. Notice — 4 is SMALLER than 8. Multiplying 8 by 1/2 made it SMALLER.`,
            `This is the start of busting the "multiplication always makes bigger" myth. Multiplying by a fraction LESS than 1 actually makes the result smaller. Multiplying by a fraction MORE than 1 (like 5/4) makes it bigger. Multiplying by exactly 1 (or 5/5, or any fraction equal to 1) keeps it the same. We'll explore this fully in L12 when we multiply decimals. But the seed is here.`,
          ],
          image: `/ue-assets/math/l09-s4-hint.webp`,
          imageCaption: `8 × 1/2 = 4. Smaller. The myth is starting to crack.`,
          vocab: [
            { word: `whole number`,
              definition: `A number with no fractional or decimal part: 0, 1, 2, 3, etc.`,
              audioPrompt: `A whole number is a counting number with no fractional or decimal part, {name}. 0, 1, 2, 3, 4, 5 are all whole numbers. 1.5 is not a whole number. 3/4 is not a whole number. Whole numbers are the "complete unit" numbers. When you multiply a whole number by a fraction, the whole number tells you how many copies of the fraction to combine.` },
            { word: `product`,
              definition: `The result of multiplying two numbers together.`,
              audioPrompt: `The product is the result when you multiply two numbers, {name}. When you compute 3 × 1/4, the product is 3/4. When you compute 6 × 1/2, the product is 3. The product is what you get out. Whether the product is bigger or smaller than the original factors depends on the size of the multiplier. A multiplier less than 1 gives a product smaller than the other factor. This idea will keep showing up as you move into decimals.` },
          ],
        },

        // ── PROBLEM-SOLVING GAME — Fractions × Whole Numbers ──────────────
        {
          id: `l09-game`,
          type: `interactive`,
          format: `problem-solving`,
          guideText: `Time to multiply, {name}. Four problems. Two are straightforward fraction × whole number. One has an improper result. One previews multiplying a whole number by a fraction less than 1. Watch what happens to the size.`,
          scenarioTitle: `Multiplying Fractions by Whole Numbers`,
          problems: [
            {
              id: `p1`,
              problemStatement: `Compute: 4 × 1/3`,
              visual: {
                type: `fraction-bar`,
                data: {
                  numerator: 4,
                  denominator: 3,
                  caption: `Four one-thirds combined.`,
                },
              },
              approaches: [
                {
                  id: `approach-a`,
                  label: `Multiply the whole number by the numerator, keep the denominator`,
                  description: `Use the shortcut.`,
                  steps: [
                    {
                      prompt: `Multiply the whole number (4) by the numerator (1). What's 4 × 1?`,
                      answer: 4,
                      hint: `Anything × 1 = itself.`,
                    },
                    {
                      prompt: `Keep the denominator. What is it?`,
                      answer: 3,
                      hint: `The denominator stays the same — the piece size doesn't change.`,
                    },
                  ],
                  commonMistakes: [
                    { wrongAnswer: 12, explanation: `Looks like you multiplied the denominator too. Don't multiply the bottom — the piece size doesn't change when you just take more copies of the fraction.` },
                  ],
                },
              ],
              finalAnswer: 3,
              finalExplanation: `4 × 1/3 = 4/3. Four one-thirds combined. The denominator (3) stays — we're still working in thirds. The numerator becomes 4 because we have four copies of the fraction. Notice 4/3 is greater than 1 — it's an improper fraction.`,
            },
            {
              id: `p2`,
              problemStatement: `Compute: 5 × 2/7`,
              visual: {
                type: `fraction-bar`,
                data: {
                  numerator: 10,
                  denominator: 7,
                  caption: `Five copies of two-sevenths.`,
                },
              },
              approaches: [
                {
                  id: `approach-a`,
                  label: `Multiply whole number × numerator`,
                  description: `Apply the shortcut.`,
                  steps: [
                    {
                      prompt: `Multiply whole number (5) by numerator (2). What's 5 × 2?`,
                      answer: 10,
                      hint: `5 + 5.`,
                    },
                    {
                      prompt: `Keep the denominator. What is it?`,
                      answer: 7,
                      hint: `Same as in the original fraction.`,
                    },
                  ],
                  commonMistakes: [
                    { wrongAnswer: 35, explanation: `Looks like you multiplied 5 × 7 (the denominator) instead of 5 × 2. The whole number multiplies with the numerator, not the denominator.` },
                  ],
                },
              ],
              finalAnswer: 7,
              finalExplanation: `5 × 2/7 = 10/7. Five copies of two-sevenths is ten-sevenths. Since 7/7 = 1 whole, 10/7 is more than 1 whole — specifically, 1 and 3/7.`,
            },
            {
              id: `p3`,
              problemStatement: `Convert 11/4 to a mixed number.`,
              visual: {
                type: `fraction-bar`,
                data: {
                  numerator: 11,
                  denominator: 4,
                  caption: `11 fourths. How many wholes?`,
                },
              },
              approaches: [
                {
                  id: `approach-a`,
                  label: `Divide the numerator by the denominator`,
                  description: `Quotient is the whole part, remainder is the new numerator.`,
                  steps: [
                    {
                      prompt: `Divide 11 by 4. What's the quotient (whole-number part)?`,
                      answer: 2,
                      hint: `How many times does 4 fit into 11? 4 × 2 = 8 fits. 4 × 3 = 12 is too big. So 2.`,
                    },
                    {
                      prompt: `What's the remainder (what's left over)?`,
                      answer: 3,
                      hint: `11 - 8 = 3. The remainder is the new numerator.`,
                    },
                  ],
                  commonMistakes: [
                    { wrongAnswer: 7, explanation: `That's just 11 - 4. We need to divide 11 by 4, not subtract. 4 goes into 11 two times with 3 left over.` },
                  ],
                },
              ],
              finalAnswer: 3,
              finalExplanation: `11/4 = 2 and 3/4. Two whole wholes and 3/4 of another. Same quantity, mixed number form. Each "whole" used up 4 of the 11 fourths. After 2 wholes (using 8 fourths), 3 fourths remained.`,
            },
            {
              id: `p4`,
              problemStatement: `A myth-buster problem. Compute: 6 × 1/2. Predict — will the answer be BIGGER or SMALLER than 6?`,
              visual: {
                type: `none`,
                data: { caption: `Multiplying by a fraction less than 1 does something interesting.` },
              },
              approaches: [
                {
                  id: `approach-a`,
                  label: `Apply the shortcut, then check the size`,
                  description: `Multiply 6 × 1, then keep denominator. Then ask: is this bigger or smaller than 6?`,
                  steps: [
                    {
                      prompt: `Multiply whole number (6) by numerator (1). What's 6 × 1?`,
                      answer: 6,
                      hint: `Anything × 1 = itself.`,
                    },
                    {
                      prompt: `Keep the denominator. So we have 6/2. Now simplify — what's 6/2 (or, how many times does 2 fit into 6)?`,
                      answer: 3,
                      hint: `6 ÷ 2 = 3.`,
                    },
                    {
                      prompt: `Final answer is 3. Is 3 bigger or smaller than 6? Type 1 for bigger, 2 for smaller.`,
                      answer: 2,
                      hint: `3 < 6. Smaller.`,
                    },
                  ],
                  commonMistakes: [
                    { wrongAnswer: 12, explanation: `Looks like you multiplied 6 × 2 (the denominator). Be careful — multiply by the numerator (1), keep the denominator (2). 6/2 = 3, not 12.` },
                    { wrongAnswer: 1, explanation: `If you said "bigger," remember — multiplying by 1/2 is the same as taking half. Half of 6 is 3. And 3 < 6. So multiplying by 1/2 made the result SMALLER. Counter-intuitive, right?` },
                  ],
                },
              ],
              finalAnswer: 2,
              finalExplanation: `6 × 1/2 = 3, which is SMALLER than 6. Multiplying by a fraction less than 1 (like 1/2) makes the result smaller. This breaks the "multiplication always makes bigger" myth from earlier grades. We'll explore this more in the decimal lessons coming up.`,
            },
          ],
          completionMessage: `Big lesson, {name}. You can now multiply a fraction by a whole number, recognize improper fractions, convert improper fractions to mixed numbers, AND you've started to see that multiplication doesn't always make things bigger. That last one is huge — and we'll keep building on it.`,
        },

        {
          id: `l09-quiz`,
          type: `quiz`,
          guideText: `Quick check, {name}.`,
          questions: [
            { id: `l09-q1`, format: `multiple-choice`,
              question: `What is 3 × 2/5?`,
              options: [`5/8`, `6/5`, `6/15`, `2/15`],
              correctIndex: 1,
              explanation: `Multiply whole number × numerator: 3 × 2 = 6. Keep denominator: 5. Answer: 6/5. Don't multiply the denominator — same-size pieces don't change size when you combine more copies.` },
            { id: `l09-q2`, format: `multiple-choice`,
              question: `Why is 3 × 2/5 = 6/5 and NOT 6/15?`,
              options: [
                `Because the denominator never changes when multiplying by a whole number — only the numerator does`,
                `Because 15 is too big`,
                `Because both are the same`,
                `Random rule`,
              ],
              correctIndex: 0,
              explanation: `When you multiply a fraction by a whole number, you're combining multiple copies of the fraction. The piece SIZE (denominator) doesn't change. Only the COUNT (numerator) changes.` },
            { id: `l09-q3`, format: `multiple-choice`,
              question: `What is an improper fraction?`,
              options: [
                `A fraction with a numerator larger than the denominator (value is 1 or more)`,
                `A fraction that's wrong`,
                `A fraction with the same numerator and denominator`,
                `A fraction with a negative number`,
              ],
              correctIndex: 0,
              explanation: `An improper fraction has a numerator ≥ denominator. Its value is at least 1. Example: 7/4, 9/3, 5/5. They're not wrong — just bigger than (or equal to) a whole.` },
            { id: `l09-q4`, format: `multiple-choice`,
              question: `Convert 7/3 to a mixed number.`,
              options: [`2 and 1/3`, `2 and 3/7`, `3 and 1/3`, `1 and 4/3`],
              correctIndex: 0,
              explanation: `Divide 7 by 3. Quotient is 2 (whole part). Remainder is 1 (new numerator). Denominator stays 3. So 7/3 = 2 and 1/3.` },
            { id: `l09-q5`, format: `true-false`,
              question: `True or false: Multiplying any number by 1/2 makes the result smaller.`,
              correctAnswer: true,
              explanation: `True. Multiplying by 1/2 is the same as taking half. Half of any positive number is smaller than the original. This is the start of busting the "multiplication always makes bigger" myth.` },
            { id: `l09-q6`, format: `multiple-choice`,
              question: `What is 10 × 1/4?`,
              options: [`10/4 (which simplifies to 2 and 1/2)`, `10/40`, `40/1`, `14`],
              correctIndex: 0,
              explanation: `Multiply: 10 × 1 = 10 (numerator). Keep denominator: 4. So 10/4 = 2 and 2/4 = 2 and 1/2. (10/4 = 2.5 in decimal form.)` },
            { id: `l09-q7`, format: `multiple-choice`,
              question: `What is 5 × 1/5?`,
              options: [`5/25`, `1`, `1/5`, `25`],
              correctIndex: 1,
              explanation: `5 × 1/5 = 5/5, which equals 1. Five one-fifths combined make exactly one whole. Multiplying a whole number by 1/(that whole number) always gives 1.` },
            { id: `l09-q8`, format: `multiple-choice`,
              question: `Multiplying by 1/2 made 6 become 3. What does this teach us?`,
              options: [
                `Math is broken`,
                `Multiplication always makes bigger`,
                `Multiplication by a fraction less than 1 makes the result SMALLER`,
                `Nothing important`,
              ],
              correctIndex: 2,
              explanation: `Multiplication by a fraction less than 1 makes the result smaller. This is one of the most important math ideas — most adults still believe "multiplication always makes bigger," which is false.` },
          ],
        },

        {
          id: `l09-reflection`,
          type: `reflection`,
          guideText: `Pick a prompt, {name}.`,
          prompts: [
            { id: `r1`, text: `Why did multiplying 6 by 1/2 give a SMALLER answer? Try to explain in your own words.` },
            { id: `r2`, text: `Where in real life would you multiply a fraction by a whole number? (Hint: recipes, measuring, sharing.)` },
            { id: `r3`, text: `Which is easier for you — improper fractions or mixed numbers? Why?` },
            { id: `r4`, text: `What's one thing you now understand about multiplication that you didn't before?` },
          ],
        },

        {
          id: `l09-realworld`,
          type: `real-world`,
          guideText: `Multiplying fractions by whole numbers happens constantly. Doubling a recipe — if it calls for 3/4 cup of sugar and you double it, you need 2 × 3/4 = 6/4 = 1 and 1/2 cups. Half-hour math — if you study for a 1/2 hour each day for 7 days, that's 7 × 1/2 = 7/2 = 3 and 1/2 hours total. Sharing — if 3 kids each get 1/4 of a pizza, that's 3 × 1/4 = 3/4 of a pizza total. Once you start seeing these everywhere, the fractions stop being abstract.`,
          familyAdventure: `Together, pick a recipe with fractional measurements. Then "scale" the recipe — double it, triple it, or halve it. Calculate the new amounts. Make the food if you want (bonus). Use real fractions in real life.`,
          creativePrompt: {
            intro: `Make up a word problem that multiplies a fraction by a whole number. Make it about something real.`,
            floor: `Write at least 5 sentences. Include problem and solution.`,
            stretch: `Write 8-10 sentences. Add a twist where the answer is an improper fraction or mixed number.`,
            open: `Write as much as you want.`,
            frames: [
              `My problem is about ___.`,
              `The whole number is ___ and the fraction is ___.`,
              `Multiplying them: ___ × ___ = ___.`,
              `In mixed number form: ___.`,
              `What this means in the story is ___.`,
            ],
          },
        },

        {
          id: `l09-celebration`,
          type: `celebration`,
          message: `Real work, {name}. You can now multiply fractions by whole numbers, convert between improper fractions and mixed numbers, and you've planted the seed that multiplication doesn't always make things bigger. Next lesson, we shift to decimals — they're just fractions written differently. — Remi.`,
          badge: `fraction-multiplier`,
          badgeName: `Fraction Multiplier`,
          xpEarned: 75,
        },
      ],
    },
  ],
};

export default MATH_UE_L09;
