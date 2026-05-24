// ─────────────────────────────────────────────────────────────────────────────
// MATH UE  |  L12 — Multiplying Decimals
// Age band : upper_explorers (9–10)   Guide: remi
// Standards: CCSS 5.NBT.B.7
// CALIBRATED: Math UE Spec v2
// Game format: problem-solving
// Visual model: area-model
// Misconceptions DIRECTLY busted (the BIG one):
//   - "Multiplication always makes bigger" (FALSE — 0.5 × 0.4 = 0.2)
//   - "Just multiply normally and ignore the decimal" (FALSE — decimal places matter)
//   - "Add the decimal places back the way they were" (FALSE — count and sum them)
// THIS LESSON IS THE CULMINATION OF THE MYTH-BUSTING ARC THAT STARTED IN L09.
// ─────────────────────────────────────────────────────────────────────────────

const MATH_UE_L12 = {
  ageBand: `upper_explorers`,
  subjectId: `math`,
  guide: `remi`,

  lessons: [
    {
      id: `math-9-10-12`,
      title: `Multiplying Decimals`,
      duration: 23,
      xpReward: 75,
      badge: `decimal-multiplier`,
      badgeName: `Decimal Multiplier`,

      screens: [
        {
          id: `l12-welcome`,
          type: `welcome`,
          guideText: `Welcome back, {name}. Today's the big one — multiplying decimals. You'll see something that breaks most kids' intuitions: multiplying two numbers can actually make a SMALLER result. 0.5 × 0.4 = 0.2 — both inputs are less than 1, and so is the product. This isn't a trick. It's how multiplication actually works. By the end of today, you'll understand why and you'll know exactly where to put the decimal point.`,
          headline: `Multiplying Decimals`,
          subtitle: `The lesson that busts the biggest math myth`,
          visual: `/ue-assets/math/l12-welcome.webp`,
        },

        {
          id: `l12-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `When Multiplication Makes Things Smaller`,
          paragraphs: [
            `Watch this. 0.5 × 0.4. Your whole-number brain wants to predict an answer between 0.5 and 0.4 — surely something like 2.0 because 5 × 4 = 20? Stop. The real answer is 0.2. That's SMALLER than both inputs.`,
            `Why? Because of what multiplication actually means. 0.5 × 0.4 means "find 5 tenths OF 4 tenths." It's "half of four-tenths." Half of four-tenths is two-tenths. That's 0.2. The "of" is doing the work. When you multiply by a number less than 1, you're taking a FRACTION of the other number — which produces a smaller result.`,
            `This is the punchline of the entire fractions and decimals arc. When you multiply by a number GREATER than 1, the result gets bigger. When you multiply by a number EQUAL to 1, the result stays the same. When you multiply by a number LESS than 1 (like 0.5 or 0.4), the result gets SMALLER. The size of the multiplier — relative to 1 — determines the direction.`,
          ],
          image: `/ue-assets/math/l12-s1-smaller.webp`,
          imageCaption: `0.5 × 0.4 = 0.2. Smaller than both inputs. Real math.`,
          vocab: [
            { word: `multiplier`,
              definition: `One of the numbers being multiplied. Its size compared to 1 determines whether the product is bigger or smaller than the other factor.`,
              audioPrompt: `A multiplier is one of the numbers being multiplied, {name}. When the multiplier is greater than 1, the product gets bigger than the other factor. When the multiplier equals 1, the product is exactly the other factor. When the multiplier is LESS than 1 — like 0.5 or 0.3 — the product gets smaller. The multiplier's size relative to 1 controls the direction. Greater than 1 grows. Equal to 1 stays. Less than 1 shrinks. This is one of the biggest ideas in all of math.` },
            { word: `factor`,
              definition: `One of the numbers being multiplied. In 0.5 × 0.4, the factors are 0.5 and 0.4.`,
              audioPrompt: `A factor is one of the numbers being multiplied in a multiplication problem, {name}. In 0.5 × 0.4, both 0.5 and 0.4 are factors. The result is the product. When both factors are less than 1, the product is smaller than either factor. When both factors are greater than 1, the product is larger than either factor. The size of the factors relative to 1 tells you whether the product will grow or shrink.` },
          ],
        },

        {
          id: `l12-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Using the Area Model to See It`,
          paragraphs: [
            `Remember the area model from L03? Multiplication can be drawn as a rectangle. The two factors are the side lengths. The area inside is the product.`,
            `Apply that here. 0.5 × 0.4 is a rectangle that's 0.5 wide and 0.4 tall — both sides LESS than 1. That rectangle fits INSIDE a 1×1 unit square. So its area must be less than 1. It's a small rectangle, and its area is 0.2 (which is 1/5 of the unit square's area). The picture proves the point — multiplying small numbers gives small products.`,
            `If both factors are greater than 1 (like 3 × 4), the rectangle goes BEYOND a 1×1 square — its area is much bigger. If both factors are less than 1, the rectangle stays INSIDE the 1×1 square — the area is smaller than both sides. The area model isn't just a visual trick. It shows the real geometry of multiplication.`,
          ],
          image: `/ue-assets/math/l12-s2-area-model.webp`,
          imageCaption: `0.5 × 0.4 fits inside a 1×1 square. Smaller area = smaller product.`,
          vocab: [
            { word: `decimal places`,
              definition: `The number of digits to the right of the decimal point. 0.5 has 1 decimal place. 0.42 has 2. 1.275 has 3.`,
              audioPrompt: `Decimal places counts how many digits are to the right of the decimal point, {name}. 0.5 has 1 decimal place. 0.42 has 2. 1.275 has 3. Counting decimal places matters when you multiply decimals because of a specific rule we'll learn: the total number of decimal places in the product equals the sum of decimal places in the factors. It's the easiest way to know where the decimal point goes in your answer.` },
            { word: `area model`,
              definition: `A rectangle diagram where the two dimensions represent the factors and the inside area represents the product.`,
              audioPrompt: `An area model uses a rectangle to represent multiplication, {name}. The width is one factor, the height is the other, and the area inside is the product. When both factors are less than 1, the rectangle fits inside a 1 × 1 unit square, so the area is less than 1. When both factors are greater than 1, the rectangle extends beyond the unit square. The model makes the big idea visual: small multipliers produce small products.` },
          ],
        },

        {
          id: `l12-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `The Shortcut: Multiply, Then Place the Decimal Point`,
          paragraphs: [
            `Now the practical method. To multiply decimals: (1) ignore the decimal points and multiply like whole numbers. (2) Count the total number of decimal places in BOTH factors. (3) Place the decimal point in your answer that many places from the right.`,
            `Example: 0.5 × 0.4. Step 1: ignore decimals, multiply 5 × 4 = 20. Step 2: 0.5 has 1 decimal place, 0.4 has 1 decimal place. Total: 1 + 1 = 2. Step 3: place the decimal point 2 places from the right in "20" → 0.20 (which equals 0.2).`,
            `Another example: 2.5 × 0.3. Step 1: 25 × 3 = 75. Step 2: 1 + 1 = 2 decimal places total. Step 3: 0.75. Notice 2.5 × 0.3 = 0.75 — way smaller than 2.5 (because we multiplied by 0.3, which is less than 1). The pattern holds. Multiplying by less than 1 always shrinks.`,
          ],
          image: `/ue-assets/math/l12-s3-shortcut.webp`,
          imageCaption: `Multiply normally. Count decimal places. Place the point.`,
          vocab: [
            { word: `total decimal places`,
              definition: `The sum of decimal places in all the factors being multiplied. Tells you where to put the decimal point in the product.`,
              audioPrompt: `Total decimal places is the sum of decimal places across all the factors you're multiplying, {name}. If you multiply 0.25 × 0.4, that's 2 decimal places + 1 decimal place = 3 total. So the product has 3 decimal places from the right. This rule works because of how place value combines under multiplication. The decimal point position is determined by the place values of the factors, and they add up. It's a clean, reliable shortcut.` },
            { word: `integer`,
              definition: `A whole number or its negative. When multiplying decimals, we temporarily treat them as integers before placing the decimal point.`,
              audioPrompt: `An integer is a whole number with no decimal or fractional part, {name}. Examples: 0, 1, 7, 42, 100. When you multiply decimals using the shortcut, you temporarily ignore the decimal points and multiply the digits as if they were integers. That's why 0.5 × 0.4 starts with 5 × 4 = 20. After getting the integer result, you place the decimal point back using the total decimal places rule.` },
          ],
        },

        {
          id: `l12-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `The Final Bust: When Multiplication Makes Bigger, Smaller, or the Same`,
          paragraphs: [
            `Let's finish the myth-bust completely. There are three rules for what happens when you multiply two positive numbers.`,
            `RULE 1 — Multiply by something MORE than 1: product is BIGGER than the original factor. 5 × 3 = 15 (15 > 5). 4 × 1.5 = 6 (6 > 4). This is the case most people assume always applies.`,
            `RULE 2 — Multiply by something EQUAL to 1: product is exactly the SAME. 7 × 1 = 7. Multiplying by 1 (or any equivalent like 5/5) doesn't change anything. This is the identity property of multiplication.`,
            `RULE 3 — Multiply by something LESS than 1: product is SMALLER than the original factor. 8 × 0.5 = 4 (4 < 8). 6 × 1/2 = 3 (3 < 6). 0.5 × 0.4 = 0.2. This is the case that breaks the myth. Multiplying by a fraction or decimal less than 1 SHRINKS the number.`,
            `Why does this matter beyond just math class? Because it's literally how interest, inflation, growth, decay, and most real-world quantities work. Banks pay interest by multiplying your balance by something like 1.05 (a little more than 1) — it grows. Inflation shrinks money by effectively multiplying value by something like 0.97 (a little less than 1) — it shrinks. Multipliers determine the direction of everything that changes over time.`,
          ],
          image: `/ue-assets/math/l12-s4-three-rules.webp`,
          imageCaption: `× more than 1 = bigger. × exactly 1 = same. × less than 1 = SMALLER.`,
          vocab: [
            { word: `identity property`,
              definition: `Multiplying any number by 1 gives that same number back. 1 is the "identity" for multiplication.`,
              audioPrompt: `The identity property of multiplication says that multiplying any number by 1 gives back that same number, {name}. 7 × 1 = 7. 0.5 × 1 = 0.5. 1000 × 1 = 1000. The number 1 doesn't change anything when you multiply by it — that's why it's called the identity. This is what makes the "multiplier compared to 1" rule work. Greater than 1 grows. Equal to 1 stays put. Less than 1 shrinks. The number 1 is the dividing line.` },
            { word: `scale factor`,
              definition: `A multiplier that scales a quantity up, down, or keeps it the same, depending on whether it's greater than, equal to, or less than 1.`,
              audioPrompt: `A scale factor is a multiplier that scales a quantity up or down, {name}. A scale factor greater than 1 makes things bigger — like 1.05 for bank interest. A scale factor equal to 1 keeps things the same — the identity. A scale factor less than 1 makes things smaller — like 0.70 for a 30% discount. Scale factors are how growth, decay, discounts, and inflation all work. Once you understand scale factors, you understand how the world changes over time.` },
          ],
        },

        // ── PROBLEM-SOLVING GAME — Multiplying Decimals ──────────────────
        {
          id: `l12-game`,
          type: `interactive`,
          format: `problem-solving`,
          guideText: `Time to multiply decimals, {name}. Four problems. The first three use the shortcut method. The last is the BIG myth-bust — you'll prove to yourself that multiplication can make things smaller. Take your time.`,
          scenarioTitle: `Multiplying Decimals`,
          problems: [
            {
              id: `p1`,
              problemStatement: `Compute: 0.6 × 0.3`,
              visual: {
                type: `area-model`,
                data: {
                  width: 6,
                  height: 3,
                  splitWidth: [6],
                  splitHeight: [3],
                  caption: `Rectangle 0.6 wide and 0.3 tall — both sides less than 1.`,
                },
              },
              approaches: [
                {
                  id: `approach-a`,
                  label: `Multiply normally, then place the decimal`,
                  description: `Ignore decimals first. Then count decimal places.`,
                  steps: [
                    {
                      prompt: `Ignore the decimals. What's 6 × 3?`,
                      answer: 18,
                      hint: `Basic multiplication fact.`,
                    },
                    {
                      prompt: `Count decimal places: 0.6 has 1 place, 0.3 has 1 place. Total = ?`,
                      answer: 2,
                      hint: `Add: 1 + 1.`,
                    },
                    {
                      prompt: `Place the decimal point 2 places from the right in "18." That gives 0.18. Is 0.18 bigger or smaller than 0.6? Type 1 for bigger, 2 for smaller.`,
                      answer: 2,
                      hint: `0.18 vs 0.6. Tenths place: 1 vs 6. So 0.18 < 0.6.`,
                    },
                  ],
                  commonMistakes: [
                    { wrongAnswer: 18, explanation: `Looks like you forgot to place the decimal point. Just "18" isn't right because both factors are less than 1, so the product has to be even smaller. Place the decimal 2 places from the right: 0.18.` },
                    { wrongAnswer: 1, explanation: `0.18 is actually SMALLER than 0.6, not bigger. Both 0.6 and 0.3 are less than 1, so multiplying them shrinks the result.` },
                  ],
                },
              ],
              finalAnswer: 2,
              finalExplanation: `0.6 × 0.3 = 0.18. SMALLER than both inputs. Why? Because both inputs are less than 1. Multiplying by a number less than 1 always shrinks. This is the punchline of the whole arc — multiplication doesn't always make bigger.`,
            },
            {
              id: `p2`,
              problemStatement: `Compute: 2.4 × 0.5`,
              visual: {
                type: `area-model`,
                data: {
                  width: 24,
                  height: 5,
                  splitWidth: [20, 4],
                  splitHeight: [5],
                  caption: `Rectangle 2.4 wide and 0.5 tall.`,
                },
              },
              approaches: [
                {
                  id: `approach-a`,
                  label: `Multiply ignoring decimals, then place decimal`,
                  description: `Same shortcut, mixed case (one factor > 1, one < 1).`,
                  steps: [
                    {
                      prompt: `Ignore decimals. What's 24 × 5?`,
                      answer: 120,
                      hint: `Use the area model from L03 if needed. 20 × 5 = 100. 4 × 5 = 20. Total: 120.`,
                    },
                    {
                      prompt: `Decimal places: 2.4 has 1, 0.5 has 1. Total = ?`,
                      answer: 2,
                      hint: `Add: 1 + 1.`,
                    },
                    {
                      prompt: `Place decimal 2 places from the right in "120": 1.20. Drop the trailing zero: 1.2. Is 1.2 bigger or smaller than 2.4? Type 1 for bigger, 2 for smaller.`,
                      answer: 2,
                      hint: `1.2 vs 2.4. Smaller.`,
                    },
                  ],
                  commonMistakes: [
                    { wrongAnswer: 12, explanation: `Looks like the decimal was placed only 1 place from the right. With 1 + 1 = 2 total decimal places, the decimal goes 2 places from the right in "120": 1.20, not 12.0.` },
                  ],
                },
              ],
              finalAnswer: 2,
              finalExplanation: `2.4 × 0.5 = 1.2. Smaller than 2.4 because we multiplied by 0.5 (less than 1). Half of 2.4 is 1.2. The "multiply by 0.5 is the same as taking half" idea connects back to L09.`,
            },
            {
              id: `p3`,
              problemStatement: `Compute: 1.5 × 1.2`,
              visual: {
                type: `area-model`,
                data: {
                  width: 15,
                  height: 12,
                  splitWidth: [10, 5],
                  splitHeight: [10, 2],
                  caption: `Both factors more than 1.`,
                },
              },
              approaches: [
                {
                  id: `approach-a`,
                  label: `Both factors > 1 — product will be bigger`,
                  description: `Predict: result will be bigger than both factors.`,
                  steps: [
                    {
                      prompt: `Ignore decimals. What's 15 × 12?`,
                      answer: 180,
                      hint: `Area model: 10 × 10 = 100. 10 × 2 = 20. 5 × 10 = 50. 5 × 2 = 10. Total: 100 + 20 + 50 + 10 = 180.`,
                    },
                    {
                      prompt: `Decimal places: 1.5 has 1, 1.2 has 1. Total = ?`,
                      answer: 2,
                      hint: `Add: 1 + 1.`,
                    },
                    {
                      prompt: `Place decimal 2 places from the right in "180": 1.80, or 1.8. Is 1.8 bigger or smaller than 1.5? Type 1 for bigger, 2 for smaller.`,
                      answer: 1,
                      hint: `1.8 vs 1.5. Bigger.`,
                    },
                  ],
                  commonMistakes: [],
                },
              ],
              finalAnswer: 1,
              finalExplanation: `1.5 × 1.2 = 1.8. BIGGER than both factors. Why? Because both factors are GREATER than 1. The multiplier rule holds — multiply by more than 1, grow. This case feels normal because it matches the old "multiplication makes bigger" intuition. But it only holds when factors are bigger than 1.`,
            },
            {
              id: `p4`,
              problemStatement: `The myth-bust grand finale. Compute: 0.5 × 0.4. Before you start — predict: will the answer be bigger or smaller than 0.5?`,
              visual: {
                type: `area-model`,
                data: {
                  width: 5,
                  height: 4,
                  splitWidth: [5],
                  splitHeight: [4],
                  caption: `The classic myth-bust. Both factors less than 1.`,
                },
              },
              approaches: [
                {
                  id: `approach-a`,
                  label: `Use the shortcut, then look at the result`,
                  description: `Multiply normally. Count decimal places. Then compare to original.`,
                  steps: [
                    {
                      prompt: `Ignore decimals. What's 5 × 4?`,
                      answer: 20,
                      hint: `Basic fact.`,
                    },
                    {
                      prompt: `Decimal places: 0.5 has 1, 0.4 has 1. Total = ?`,
                      answer: 2,
                      hint: `Add: 1 + 1.`,
                    },
                    {
                      prompt: `Place decimal 2 places from the right in "20": 0.20, or 0.2. Is 0.2 bigger or smaller than 0.5? Type 1 for bigger, 2 for smaller.`,
                      answer: 2,
                      hint: `0.2 vs 0.5. Tenths place: 2 vs 5. Smaller.`,
                    },
                    {
                      prompt: `BUSTED. Multiplication made it SMALLER. Final answer 0.2 — yes or no? Type 1 for yes.`,
                      answer: 1,
                      hint: `Confirm the answer.`,
                    },
                  ],
                  commonMistakes: [
                    { wrongAnswer: 2, explanation: `Without the decimal placement, "2" or "20" isn't right. The decimal point has to go 2 places from the right of "20," giving 0.20 (or 0.2). Don't skip the decimal placement step.` },
                  ],
                },
              ],
              finalAnswer: 1,
              finalExplanation: `0.5 × 0.4 = 0.2. SMALLER than 0.5. SMALLER than 0.4. SMALLER than BOTH inputs. Multiplication of two numbers less than 1 produces a result smaller than either input. This is real math. The "multiplication makes bigger" myth is officially busted. From here forward, you'll know to check what kind of multiplier you're dealing with.`,
            },
          ],
          completionMessage: `Huge lesson, {name}. You can now multiply decimals using the shortcut, place decimal points correctly, AND you've fully busted the "multiplication always makes bigger" myth. This is one of the most important math ideas you'll learn in elementary school. It comes up everywhere in middle school, high school, and beyond.`,
        },

        {
          id: `l12-quiz`,
          type: `quiz`,
          guideText: `Quick check, {name}.`,
          questions: [
            { id: `l12-q1`, format: `multiple-choice`,
              question: `Compute: 0.4 × 0.7`,
              options: [`0.28`, `2.8`, `28`, `0.028`],
              correctIndex: 0,
              explanation: `4 × 7 = 28. Total decimal places: 1 + 1 = 2. Place decimal 2 from right: 0.28. Both factors are less than 1, so the product is smaller than both.` },
            { id: `l12-q2`, format: `multiple-choice`,
              question: `What's the rule for placing the decimal point when multiplying decimals?`,
              options: [
                `Use the bigger factor's decimal places`,
                `Add the decimal places from both factors; that's how many places from the right`,
                `Always 2 places from the right`,
                `Don't worry about it`,
              ],
              correctIndex: 1,
              explanation: `Add the decimal places from both factors. Total decimal places in the answer equals the sum of decimal places in the factors.` },
            { id: `l12-q3`, format: `multiple-choice`,
              question: `True or false: Multiplying any number by 0.3 always makes the result smaller.`,
              options: [
                `True — 0.3 is less than 1, so multiplying by it shrinks anything (positive)`,
                `False — multiplication always makes bigger`,
                `Sometimes`,
                `Only for whole numbers`,
              ],
              correctIndex: 0,
              explanation: `True. 0.3 is less than 1. Multiplying any positive number by something less than 1 shrinks it. The "multiplication makes bigger" myth is wrong.` },
            { id: `l12-q4`, format: `multiple-choice`,
              question: `Compute: 1.2 × 0.5`,
              options: [`0.6`, `6`, `0.06`, `60`],
              correctIndex: 0,
              explanation: `12 × 5 = 60. Total decimal places: 1 + 1 = 2. Place decimal 2 from right in 60: 0.60 = 0.6. Notice 0.6 is half of 1.2 — makes sense, since multiplying by 0.5 takes half.` },
            { id: `l12-q5`, format: `true-false`,
              question: `True or false: When you multiply by 1, the result stays the same.`,
              correctAnswer: true,
              explanation: `True. This is the identity property of multiplication. 1 doesn't change anything when you multiply by it. 7 × 1 = 7. 0.5 × 1 = 0.5. Always.` },
            { id: `l12-q6`, format: `multiple-choice`,
              question: `When does multiplication make the result bigger than the original factor?`,
              options: [
                `Always`,
                `When the multiplier is bigger than 1`,
                `When the multiplier equals 1`,
                `When the multiplier is less than 1`,
              ],
              correctIndex: 1,
              explanation: `When the multiplier is greater than 1, the product is bigger than the original factor. When it equals 1, the product stays the same. When it's less than 1, the product shrinks.` },
            { id: `l12-q7`, format: `multiple-choice`,
              question: `Compute: 0.25 × 0.4`,
              options: [`0.1`, `1.0`, `10`, `0.01`],
              correctIndex: 0,
              explanation: `25 × 4 = 100. Total decimal places: 2 + 1 = 3. Place decimal 3 from right in 100: 0.100 = 0.1.` },
            { id: `l12-q8`, format: `multiple-choice`,
              question: `Why does 0.5 × 0.4 = 0.2 instead of something bigger?`,
              options: [
                `Math is broken`,
                `Both factors are less than 1, so the product has to be smaller than both`,
                `The decimal point shifted randomly`,
                `It's a trick`,
              ],
              correctIndex: 1,
              explanation: `Both factors are less than 1. Multiplying by less than 1 shrinks. So multiplying two numbers less than 1 together produces an even smaller number. This is a fundamental property of multiplication, not a trick.` },
          ],
        },

        {
          id: `l12-reflection`,
          type: `reflection`,
          guideText: `Pick a prompt, {name}.`,
          prompts: [
            { id: `r1`, text: `Before this lesson, did you believe "multiplication always makes things bigger"? What do you believe now?` },
            { id: `r2`, text: `Why does multiplying by 0.5 cut a number in half? Try to explain in your own words.` },
            { id: `r3`, text: `Can you think of a real-life situation where you'd multiply by a number less than 1?` },
            { id: `r4`, text: `What's the most surprising thing you learned in this lesson?` },
          ],
        },

        {
          id: `l12-realworld`,
          type: `real-world`,
          guideText: `Multiplying by numbers less than 1 happens constantly in real life. Discounts — "30% off" means multiplying by 0.70 (the price gets smaller). Tips — "20% tip" means multiplying by 0.20 to find the tip amount. Sales tax — "8% tax" is multiplying the price by 0.08. Recipes — halving a recipe is multiplying by 0.5. The myth-bust isn't just abstract math — it's how every shopper, every restaurant bill, every percentage works.`,
          familyAdventure: `Together, find a price tag for something at home (or online). Imagine a "20% off" sale. Calculate the discount (price × 0.20) and the new sale price (price × 0.80). Notice how both involve multiplying by a decimal less than 1, and both produce smaller numbers. Discounts are multiplication that makes things SMALLER. Real-world myth-busting.`,
          creativePrompt: {
            intro: `Write a story where multiplying by a number less than 1 plays a key role. Could be a shopping discount, a recipe being halved, or anything else.`,
            floor: `Write at least 5 sentences.`,
            stretch: `Write 8-10 sentences. Include the math AND the situation that makes the multiplier less than 1.`,
            open: `Write as much as you want.`,
            frames: [
              `The situation is ___.`,
              `The original amount is ___.`,
              `The multiplier is ___ (which is less than 1 because ___).`,
              `Multiplying gives ___.`,
              `What this means in real life is ___.`,
            ],
          },
        },

        {
          id: `l12-celebration`,
          type: `celebration`,
          message: `Massive lesson, {name}. You can now multiply decimals using the shortcut, place decimal points correctly, AND you've completely busted "multiplication always makes bigger." You know all three rules: multiplier > 1 grows, = 1 stays, < 1 shrinks. Most adults still operate on the broken myth — you don't anymore. Wave 3 complete. Next wave moves into adding/subtracting fractions with UNLIKE denominators, the trickier case we promised back in L08. — Remi.`,
          badge: `decimal-multiplier`,
          badgeName: `Decimal Multiplier`,
          xpEarned: 75,
        },
      ],
    },
  ],
};

export default MATH_UE_L12;
