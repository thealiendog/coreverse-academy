// ─────────────────────────────────────────────────────────────────────────────
// MATH UE  |  L11 — Adding and Subtracting Decimals
// Age band : upper_explorers (9–10)   Guide: remi
// Standards: CCSS 5.NBT.B.7
// CALIBRATED: Math UE Spec v2
// Game format: problem-solving
// Visual model: place-value-blocks
// Misconceptions DIRECTLY addressed:
//   - "Line up by the right" (wrong — line up by decimal point!)
//   - "Different decimal lengths can't be added" (add trailing zeros to match)
//   - "The decimal point can move during operations" (it stays put when aligned)
// ─────────────────────────────────────────────────────────────────────────────

const MATH_UE_L11 = {
  ageBand: `upper_explorers`,
  subjectId: `math`,
  guide: `remi`,

  lessons: [
    {
      id: `math-9-10-11`,
      title: `Adding and Subtracting Decimals`,
      duration: 22,
      xpReward: 75,
      badge: `decimal-arithmetic`,
      badgeName: `Decimal Arithmetic`,

      screens: [
        {
          id: `l11-welcome`,
          type: `welcome`,
          guideText: `Welcome back, {name}. Today we add and subtract decimals. This is one of those topics where most kids learn one wrong habit that breaks their math for years. We're going to do it right from the start. The single most important rule: line up by the DECIMAL POINT, not by the right edge.`,
          headline: `Adding and Subtracting Decimals`,
          subtitle: `One rule that prevents most mistakes`,
          visual: `/ue-assets/math/l11-welcome.webp`,
        },

        {
          id: `l11-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `The One Rule: Line Up by the Decimal Point`,
          paragraphs: [
            `When you add multi-digit whole numbers, you line them up by the right side. The ones go above the ones, the tens above the tens, etc. That worked because the rightmost digit was always the ones place.`,
            `Decimals are different. The decimal point shows where the ones place ENDS. So you have to line up by the DECIMAL POINT, not by the right edge. Once the decimal points are aligned, all the matching place values line up correctly above each other — tenths above tenths, hundredths above hundredths.`,
            `Example: 3.4 + 2.75. Don't line up at the right (so the 4 above the 5). Line up at the decimal points. That puts the 4 above the 7 (both in the tenths place). Then you can add place by place, just like whole-number addition.`,
          ],
          image: `/ue-assets/math/l11-s1-line-up.webp`,
          imageCaption: `3.4 + 2.75. Line up the decimal points. THAT'S the rule.`,
          vocab: [
            { word: `aligning decimal points`,
              definition: `Lining up two or more decimals so their decimal points are in the same column — this makes the place values match up.`,
              audioPrompt: `Aligning decimal points means lining up two or more decimals so their decimal points are in the same column, {name}. This is the most important rule for adding and subtracting decimals. Once the decimal points are aligned, the place values are automatically matched — tenths above tenths, hundredths above hundredths. If you forget to align, you'll be adding tenths to hundredths and getting the wrong answer.` },
            { word: `ones place`,
              definition: `The digit directly to the left of the decimal point. It represents whole units.`,
              audioPrompt: `The ones place is the position directly to the left of the decimal point, {name}. In 3.47, the 3 is in the ones place — it represents 3 whole units. In 0.7, the 0 is in the ones place — no whole units. The decimal point marks where the ones place ends and the fractional places begin. This is why you align by the decimal point when adding decimals — it keeps the ones above the ones and the tenths above the tenths.` },
          ],
        },

        {
          id: `l11-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Trailing Zeros Help You Line Up`,
          paragraphs: [
            `What if one decimal has more digits after the point than the other? Like 3.4 + 2.75. The 3.4 has one decimal place, but 2.75 has two. After aligning, you have an empty spot under the 5 in the hundredths place.`,
            `Fix: add a trailing zero to 3.4 to make it 3.40. Now both have the same number of decimal places. 3.40 + 2.75 is much easier to compute. The trailing zero doesn't change the value — 3.4 and 3.40 are equal (remember from L10).`,
            `Trailing zeros are useful here because they fill empty places so addition and subtraction work cleanly column by column. They also help when you compare decimals with different lengths (we used this idea in L10). Adding trailing zeros is one of the most useful tricks in working with decimals.`,
          ],
          image: `/ue-assets/math/l11-s2-trailing.webp`,
          imageCaption: `3.4 + 2.75 → 3.40 + 2.75. Trailing zero. Same value. Easier to add.`,
          vocab: [
            { word: `trailing zero`,
              definition: `A zero added to the end of a decimal that doesn't change its value. Used to make decimals the same length for easier comparison or arithmetic.`,
              audioPrompt: `A trailing zero is a zero added to the end of a decimal that doesn't change its value, {name}. 3.4 and 3.40 are equal — same amount. Trailing zeros are useful when you're lining up decimals to add or subtract them. They fill empty places so the math works cleanly. They also help with comparing — it's easier to see that 0.5 > 0.42 if you rewrite 0.5 as 0.50 to match the length.` },
            { word: `equivalent`,
              definition: `Two expressions that have the same value. For decimals, 3.4 and 3.40 are equivalent — equal in value, just written differently.`,
              audioPrompt: `Equivalent means equal in value, {name}. 3.4 and 3.40 are equivalent — they're the same number, just written differently. Adding a trailing zero to 3.4 makes it 3.40, which is still the same amount. Equivalent forms are useful because you can pick the one that's easiest to work with. In decimal arithmetic, choosing the equivalent form with matching lengths makes the column-by-column addition and subtraction much cleaner and less error-prone.` },
          ],
        },

        {
          id: `l11-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Subtraction Works the Same Way`,
          paragraphs: [
            `Subtracting decimals follows the exact same rule: align the decimal points, add trailing zeros if needed, then subtract place by place — including regrouping (borrowing) just like with whole numbers.`,
            `Example: 5.3 - 2.78. Align: 5.30 - 2.78 (added a trailing zero to 5.3). Subtract right to left. Hundredths: 0 - 8. Need to borrow from tenths. The 3 becomes 2, the 0 becomes 10. Now 10 - 8 = 2. Tenths: 2 - 7. Need to borrow from ones. The 5 becomes 4, the 2 becomes 12. Now 12 - 7 = 5. Ones: 4 - 2 = 2. Answer: 2.52.`,
            `The decimal point stays exactly where it was — directly below the original decimal points. The regrouping is the same as whole-number subtraction (just like L02). The only "new" thing is aligning by the decimal point.`,
          ],
          image: `/ue-assets/math/l11-s3-subtract.webp`,
          imageCaption: `5.30 - 2.78. Align. Borrow. Subtract. Decimal point stays put.`,
          vocab: [
            { word: `regrouping in decimals`,
              definition: `Borrowing across decimal places works exactly the same way as with whole numbers — trade 1 of a place for 10 of the place to its right.`,
              audioPrompt: `Regrouping in decimal subtraction works the same way as in whole-number subtraction, {name}. If the top digit in a column is smaller than the bottom, borrow 1 from the next column to the left. That 1 becomes 10 in the current column. The place value names change (tens, ones, tenths, hundredths), but the rule is identical. You can even borrow ACROSS the decimal point — 1 one is 10 tenths, just like 1 ten is 10 ones.` },
            { word: `borrow`,
              definition: `In subtraction, take 1 from the next higher place to get 10 more in the current place, when the top digit is smaller than the bottom.`,
              audioPrompt: `Borrowing is how you handle a column where the top digit is smaller than the bottom in subtraction, {name}. You take 1 from the next place to the left, which adds 10 to the current place. In decimal subtraction, borrowing works the same way as with whole numbers — 1 tenth is 10 hundredths, just like 1 ten is 10 ones. The decimal point doesn't stop the borrowing chain from working normally.` },
          ],
        },

        {
          id: `l11-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `The Decimal Point Stays Put`,
          paragraphs: [
            `Once you align the decimal points and start adding or subtracting, the decimal point doesn't go anywhere. It stays in the exact spot it started. The digits change, but the decimal point in your answer goes directly under the decimal points in the problem.`,
            `This is a huge difference from multiplying or dividing decimals, where the decimal point DOES move. (We'll get to that next lesson.) For adding and subtracting only, the decimal stays put. Always.`,
            `If your answer's decimal point ends up in a weird place, something went wrong. Check that you aligned by the decimal point at the start. The answer's decimal point should be directly below the original ones.`,
          ],
          image: `/ue-assets/math/l11-s4-stays-put.webp`,
          imageCaption: `Adding and subtracting: the decimal point doesn't move.`,
          vocab: [
            { word: `place value alignment`,
              definition: `Making sure every digit is in the right place so the math works correctly. For decimals, this means aligning by the decimal point.`,
              audioPrompt: `Place value alignment is making sure every digit ends up in the right place so the math works, {name}. For whole numbers, you line up by the rightmost digit. For decimals, you line up by the decimal point. The reason is the same — to make sure ones add to ones, tenths add to tenths, hundredths to hundredths. Without alignment, you'd be adding apples and oranges. Aligning by place value keeps the math meaningful.` },
            { word: `algorithm`,
              definition: `A step-by-step procedure for solving a problem. The decimal addition algorithm: align decimal points, add trailing zeros, add column by column, bring down the decimal point.`,
              audioPrompt: `An algorithm is a step-by-step procedure for solving a type of problem, {name}. The decimal addition algorithm is: align the decimal points, add trailing zeros if needed, add column by column from right to left, and bring the decimal point straight down. Following the algorithm in order prevents the most common decimal mistakes. Most math operations have algorithms — repeatable methods that work every time when you follow the steps correctly.` },
          ],
        },

        // ── PROBLEM-SOLVING GAME — Decimal Math ──────────────────────────
        {
          id: `l11-game`,
          type: `interactive`,
          format: `problem-solving`,
          guideText: `Decimal time, {name}. Four problems. We'll go slow on the first one to make sure the alignment idea is rock solid. Remember the rule: ALIGN BY THE DECIMAL POINT. Add trailing zeros if needed.`,
          scenarioTitle: `Decimal Addition and Subtraction`,
          problems: [
            {
              id: `p1`,
              problemStatement: `Compute: 4.3 + 2.85`,
              visual: {
                type: `place-value-blocks`,
                data: {
                  number: 715,
                  caption: `4.3 + 2.85 — align decimal points first.`,
                },
              },
              approaches: [
                {
                  id: `approach-a`,
                  label: `Align decimal points, add trailing zero, then add`,
                  description: `Make both decimals the same length, line them up, then add.`,
                  steps: [
                    {
                      prompt: `4.3 has one decimal place. 2.85 has two. Add a trailing zero to 4.3 to make it 4.30. Now align decimal points and add the hundredths: 0 + 5 = ?`,
                      answer: 5,
                      hint: `Just add 0 and 5.`,
                    },
                    {
                      prompt: `Now the tenths: 3 + 8 = ?`,
                      answer: 11,
                      hint: `Just add 3 and 8.`,
                    },
                    {
                      prompt: `11 is more than 9 — write 1 in tenths, carry 1 to ones. Ones: 4 + 2 + 1 (carried) = ?`,
                      answer: 7,
                      hint: `Add the two ones digits plus the carried 1.`,
                    },
                  ],
                  commonMistakes: [
                    { wrongAnswer: 88, explanation: `Looks like the decimals weren't aligned — maybe you added the 4 and 2 with the 85, ending up adding tenths to hundredths. Always align by the decimal point first.` },
                  ],
                },
              ],
              finalAnswer: 7,
              finalExplanation: `4.30 + 2.85 = 7.15. The decimal point in the answer goes directly below the decimal points in the problem. Adding a trailing zero to 4.3 made the columns line up so we could add place by place.`,
            },
            {
              id: `p2`,
              problemStatement: `Compute: 6.27 + 0.5`,
              visual: {
                type: `place-value-blocks`,
                data: { number: 677, caption: `Align, then add.` },
              },
              approaches: [
                {
                  id: `approach-a`,
                  label: `Add trailing zero to 0.5, then add`,
                  description: `0.5 → 0.50 so both have two decimal places.`,
                  steps: [
                    {
                      prompt: `0.5 becomes 0.50. Hundredths: 7 + 0 = ?`,
                      answer: 7,
                      hint: `Just add 7 and 0.`,
                    },
                    {
                      prompt: `Tenths: 2 + 5 = ?`,
                      answer: 7,
                      hint: `Just add 2 and 5.`,
                    },
                    {
                      prompt: `Ones: 6 + 0 = ?`,
                      answer: 6,
                      hint: `Just add 6 and 0. The 0.5 (or 0.50) has no whole-number part.`,
                    },
                  ],
                  commonMistakes: [
                    { wrongAnswer: 632, explanation: `Looks like the decimals weren't aligned. Maybe 0.5 got lined up with 7 instead of with 2. Always align by the decimal point — 5 is in the tenths place, so it goes under the 2 (also in tenths).` },
                  ],
                },
              ],
              finalAnswer: 6,
              finalExplanation: `6.27 + 0.50 = 6.77. Adding a trailing zero to 0.5 made the columns clean. The 5 ended up in the tenths column (correctly), and the rest worked out.`,
            },
            {
              id: `p3`,
              problemStatement: `Compute: 8.5 - 3.27`,
              visual: {
                type: `place-value-blocks`,
                data: { number: 523, caption: `Subtract — needs borrowing.` },
              },
              approaches: [
                {
                  id: `approach-a`,
                  label: `Align, add trailing zero, borrow when needed`,
                  description: `8.5 → 8.50. Then subtract column by column with borrowing.`,
                  steps: [
                    {
                      prompt: `8.5 becomes 8.50. Hundredths: 0 - 7. Need to borrow. The 5 in tenths becomes 4, the 0 in hundredths becomes 10. Now 10 - 7 = ?`,
                      answer: 3,
                      hint: `After borrowing, 10 - 7 = 3.`,
                    },
                    {
                      prompt: `Tenths: now it's 4 - 2 (since 5 became 4 after borrowing). What's 4 - 2?`,
                      answer: 2,
                      hint: `Subtract the tenths.`,
                    },
                    {
                      prompt: `Ones: 8 - 3 = ?`,
                      answer: 5,
                      hint: `Subtract the ones.`,
                    },
                  ],
                  commonMistakes: [
                    { wrongAnswer: 7, explanation: `Looks like you might have flipped to 7 - 0 instead of borrowing. When the top is smaller, you have to borrow — don't just flip digits.` },
                  ],
                },
              ],
              finalAnswer: 5,
              finalExplanation: `8.50 - 3.27 = 5.23. Borrowed from the tenths to handle the hundredths column (0 - 7). The rest worked through normally. Decimal point goes directly below the original.`,
            },
            {
              id: `p4`,
              problemStatement: `A store sells two items: one for $4.95 and one for $3.20. You pay with a $10 bill. How much change do you get? (Hint — this is a two-step problem.)`,
              visual: {
                type: `none`,
                data: { caption: `Add the items, then subtract from $10.` },
              },
              approaches: [
                {
                  id: `approach-a`,
                  label: `Add the prices, then subtract from $10`,
                  description: `Step one: total cost. Step two: $10 minus total.`,
                  steps: [
                    {
                      prompt: `Total cost: $4.95 + $3.20. Add hundredths: 5 + 0 = ?`,
                      answer: 5,
                      hint: `Just add the hundredths.`,
                    },
                    {
                      prompt: `Tenths: 9 + 2 = ?`,
                      answer: 11,
                      hint: `Just add the tenths.`,
                    },
                    {
                      prompt: `11 — write 1, carry 1. Ones: 4 + 3 + 1 (carry) = ?`,
                      answer: 8,
                      hint: `Add the ones plus the carried 1.`,
                    },
                    {
                      prompt: `Total cost: $8.15. Now subtract from $10. $10.00 - $8.15. Hundredths: 0 - 5. Need to borrow. After borrowing back through the chain: hundredths becomes 10 - 5 = ?`,
                      answer: 5,
                      hint: `After borrowing, 10 - 5 = 5.`,
                    },
                    {
                      prompt: `Tenths: after the chain of borrowing, it's 9 - 1 = ?`,
                      answer: 8,
                      hint: `After borrowing, the tenths column is 9 - 1.`,
                    },
                    {
                      prompt: `Ones: after the chain of borrowing, it's 9 - 8 = ?`,
                      answer: 1,
                      hint: `9 - 8.`,
                    },
                  ],
                  commonMistakes: [],
                },
              ],
              finalAnswer: 1,
              finalExplanation: `Total cost: $8.15. Change from $10: $10.00 - $8.15 = $1.85. Two-step problem — add first, then subtract. The borrowing across multiple zeros (just like L02) is what makes the subtraction step tricky. Note: trailing zeros in dollar amounts are common because money is always in hundredths (cents).`,
            },
          ],
          completionMessage: `Strong work, {name}. You added and subtracted decimals with proper alignment, used trailing zeros to make the columns work, and handled a real two-step money problem. The big takeaway: ALIGN BY THE DECIMAL POINT. Almost every decimal mistake comes from forgetting that rule.`,
        },

        {
          id: `l11-quiz`,
          type: `quiz`,
          guideText: `Quick check, {name}.`,
          questions: [
            { id: `l11-q1`, format: `multiple-choice`,
              question: `When adding or subtracting decimals, what do you line up?`,
              options: [
                `The rightmost digit`,
                `The decimal points`,
                `The biggest numbers`,
                `Doesn't matter`,
              ],
              correctIndex: 1,
              explanation: `Decimal points. That makes the place values line up correctly: tenths above tenths, hundredths above hundredths. Lining up by the right edge would mix place values and give wrong answers.` },
            { id: `l11-q2`, format: `multiple-choice`,
              question: `What's the purpose of adding a trailing zero?`,
              options: [
                `It changes the value of the decimal`,
                `It makes two decimals the same length without changing their values, so columns align cleanly`,
                `It doubles the decimal`,
                `It makes the number bigger`,
              ],
              correctIndex: 1,
              explanation: `Trailing zeros don't change a decimal's value (0.5 = 0.50 = 0.500). They just make decimals the same length, which makes adding and subtracting easier.` },
            { id: `l11-q3`, format: `multiple-choice`,
              question: `Compute: 2.5 + 1.65`,
              options: [`3.115`, `4.15`, `41.15`, `1.90`],
              correctIndex: 1,
              explanation: `Align: 2.50 + 1.65. Add columns: 0+5=5 (hundredths), 5+6=11 (write 1, carry 1) (tenths), 2+1+1=4 (ones). Answer: 4.15.` },
            { id: `l11-q4`, format: `multiple-choice`,
              question: `Compute: 9.4 - 5.27`,
              options: [`4.13`, `4.23`, `5.13`, `4.17`],
              correctIndex: 0,
              explanation: `Align: 9.40 - 5.27. Hundredths: 0 - 7 needs borrowing. After all borrowing: 4.13.` },
            { id: `l11-q5`, format: `true-false`,
              question: `True or false: When adding decimals, the decimal point in the answer goes directly below the decimal points in the problem.`,
              correctAnswer: true,
              explanation: `True. Once you align the decimal points and add column by column, the decimal point doesn't move. It stays in the exact same spot in the answer.` },
            { id: `l11-q6`, format: `multiple-choice`,
              question: `Why is 4.5 + 2.65 NOT equal to 4.5 + 2.65 lined up like whole numbers (so the 5 is above the 5)?`,
              options: [
                `It IS equal — same thing`,
                `Because that lineup puts ones over tenths and tenths over hundredths — mixing place values`,
                `Random reason`,
                `Because 4.5 is bigger`,
              ],
              correctIndex: 1,
              explanation: `Lining up by the right would put ones above tenths, etc. That mixes place values and gives a totally wrong answer. Always align by the decimal point.` },
            { id: `l11-q7`, format: `multiple-choice`,
              question: `What is 10 - 3.45?`,
              options: [`7.55`, `6.55`, `6.45`, `7.45`],
              correctIndex: 1,
              explanation: `Rewrite 10 as 10.00. Subtract 3.45. Borrow across zeros (just like L02). 10.00 - 3.45 = 6.55.` },
            { id: `l11-q8`, format: `multiple-choice`,
              question: `A toy costs $6.75. You pay with $20. How much change do you get?`,
              options: [`$13.25`, `$14.25`, `$13.75`, `$26.75`],
              correctIndex: 0,
              explanation: `$20.00 - $6.75 = $13.25. Subtract carefully with borrowing across the zeros — same idea as multi-digit subtraction with zeros.` },
          ],
        },

        {
          id: `l11-reflection`,
          type: `reflection`,
          guideText: `Pick a prompt, {name}.`,
          prompts: [
            { id: `r1`, text: `Why is lining up by the decimal point so important? What would go wrong if you didn't?` },
            { id: `r2`, text: `When have you used decimal addition or subtraction in real life? (Hint: money math is the biggest one.)` },
            { id: `r3`, text: `What's the hardest part about subtracting decimals — alignment, borrowing, or something else?` },
            { id: `r4`, text: `Make up a simple decimal addition problem about something in your daily life.` },
          ],
        },

        {
          id: `l11-realworld`,
          type: `real-world`,
          guideText: `Decimal addition and subtraction is the most common math adults do — usually with money. Every time you add prices on a receipt, calculate change, balance a checkbook, or split a bill, you're doing decimal arithmetic. The "line up by the decimal" rule is what makes all of this work. People who never quite got this rule sometimes spend their whole lives a few cents off — small errors that add up over time. You're learning to do it right.`,
          familyAdventure: `Together, do real money math. Pick five items in your house with prices (or estimate them). Calculate the total cost. Then imagine paying with a round amount like $50 and find the change. Bonus: have one family member calculate it on paper while another uses a calculator. Compare answers.`,
          creativePrompt: {
            intro: `Make up a story about a shopping trip that uses adding and subtracting decimals. Show every step of the math.`,
            floor: `Write at least 5 sentences. Include at least one add and one subtract operation.`,
            stretch: `Write 8-10 sentences. Make the story realistic and the math correct.`,
            open: `Write as much as you want.`,
            frames: [
              `The shopper buys ___ for $___.`,
              `Then ___ for $___.`,
              `Total cost is ___.`,
              `They pay with $___.`,
              `Change is ___.`,
            ],
          },
        },

        {
          id: `l11-celebration`,
          type: `celebration`,
          message: `Real progress, {name}. You can now add and subtract decimals with confidence, using the alignment rule and trailing zeros. You handled a two-step money problem and understand why borrowing across zeros works the same way it does for whole numbers. Next lesson, we MULTIPLY decimals — and we'll fully bust the "multiplication always makes bigger" myth. — Remi.`,
          badge: `decimal-arithmetic`,
          badgeName: `Decimal Arithmetic`,
          xpEarned: 75,
        },
      ],
    },
  ],
};

export default MATH_UE_L11;
