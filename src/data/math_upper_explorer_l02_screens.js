// ─────────────────────────────────────────────────────────────────────────────
// MATH UE  |  L02 — Multi-Digit Addition and Subtraction  [REWRITE PROTOTYPE]
// Age band : upper_explorers (9–10)   Guide: remi
// Standards: CCSS 4.NBT.B.4
//
// REWRITE GOALS (vs original):
//   1. Shorter magazine sections: 8 sections instead of 4
//   2. Less math per section: 1-2 short paragraphs max per section
//   3. Inline math formatting using monospace stacked columns within paragraphs
//   4. More breathing room between ideas
//   5. Each section focuses on ONE concept, not multiple
//
// MONOSPACE TEST: paragraphs include stacked column layouts using line breaks
// and consistent character spacing. If the renderer preserves \n and uses a
// monospace font for these blocks, the math will line up. If not, we need to
// add a `mathBlock` field to the renderer.
//
// Game and quiz are unchanged from original L02 (those weren't the problem).
// ─────────────────────────────────────────────────────────────────────────────

const MATH_UE_L02 = {
  ageBand: `upper_explorers`,
  subjectId: `math`,
  guide: `remi`,

  lessons: [
    {
      id: `math-9-10-02`,
      title: `Multi-Digit Addition and Subtraction`,
      duration: 22,
      xpReward: 75,
      badge: `regrouping-master`,
      badgeName: `Regrouping Master`,

      screens: [
        {
          id: `l02-welcome`,
          type: `welcome`,
          guideText: `Welcome back, {name}! Today we add and subtract big numbers. The tricky moments are when you have to "carry" or "borrow." Most adults can do these steps, but couldn't tell you WHY they work. You'll learn both — the how AND the why. Let's go.`,
          headline: `Multi-Digit Addition and Subtraction`,
          subtitle: `Using place value to handle big numbers`,
          visual: `/ue-assets/math/l02-welcome.webp`,
        },

        // ────────────────────────────────────────────────────────────────
        // SECTION 1 — The big idea (no math operations yet)
        // ────────────────────────────────────────────────────────────────
        {
          id: `l02-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `The Big Idea`,
          paragraphs: [
            `Big numbers feel scary. They don't have to.`,
            `The secret: don't add or subtract big numbers all at once. Add them one PLACE VALUE at a time. Ones with ones. Tens with tens. Hundreds with hundreds.`,
            `That's the whole game. Today we'll see exactly how.`,
          ],
          image: `/ue-assets/math/l02-s1-bigidea.webp`,
          imageCaption: `Big numbers, broken into pieces.`,
          vocab: [
            { word: `place value`,
              definition: `The value a digit has based on its position in a number.`,
              audioPrompt: `Place value is the value a digit has based on its position, {name}. The 7 in 75 is in the tens place — it means seventy. The 7 in 700 is in the hundreds place — it means seven hundred. Same digit, different value, because it sits in a different spot. We learned this last lesson. Today we use it.` },
            { word: `column`,
              definition: `When you stack numbers to add or subtract, each place value lines up in a column.`,
              audioPrompt: `A column in math is a vertical line of digits, {name}. When you stack numbers to add them, you line up the place values into columns. Ones go in the ones column. Tens in the tens column. And so on. Each column gets added separately. The column setup is what makes multi-digit addition organized.` },
          ],
        },

        // ────────────────────────────────────────────────────────────────
        // SECTION 2 — Simple addition example (no regrouping yet)
        // ────────────────────────────────────────────────────────────────
        {
          id: `l02-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Adding by Place Value`,
          paragraphs: [
            `Here's a small example. Add 234 and 142.`,
            `Stack them up. Line up the ones, tens, and hundreds:`,
            `   2 3 4
+  1 4 2
─────────
   3 7 6`,
            `Add each column. Ones: 4 + 2 = 6. Tens: 3 + 4 = 7. Hundreds: 2 + 1 = 3. Done. The total is 376.`,
          ],
          image: `/ue-assets/math/l02-s2-add-simple.webp`,
          imageCaption: `One column at a time.`,
          vocab: [
            { word: `sum`,
              definition: `The answer when you add numbers together.`,
              audioPrompt: `Sum is the answer when you add, {name}. The sum of 4 and 6 is 10. The sum of 234 and 142 is 376. When a math problem asks for "the sum," it means: add them.` },
            { word: `addend`,
              definition: `One of the numbers being added. In 234 + 142, both 234 and 142 are addends.`,
              audioPrompt: `An addend is one of the numbers being added, {name}. In 234 + 142, both 234 and 142 are addends. The result of adding them is the sum. When you stack numbers to add, each row is an addend. Knowing the vocabulary keeps the parts of a problem clear — addends go in, the sum comes out.` },
          ],
        },

        // ────────────────────────────────────────────────────────────────
        // SECTION 3 — Why it works (concept, no new operations)
        // ────────────────────────────────────────────────────────────────
        {
          id: `l02-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Why Stacking Works`,
          paragraphs: [
            `Why does stacking work? Because each place value is its OWN thing.`,
            `Hundreds combine with hundreds. Tens combine with tens. Ones combine with ones. They never mix.`,
            `Stacking just lines them up so it's easy to see which is which. The columns are doing the organizing.`,
          ],
          image: `/ue-assets/math/l02-s3-why.webp`,
          imageCaption: `Each column is its own world.`,
          vocab: [
            { word: `algorithm`,
              definition: `A step-by-step procedure for solving a problem.`,
              audioPrompt: `An algorithm is a step-by-step procedure, {name}. The "standard algorithm" for addition is the stacked column way most people learn. There are other algorithms — different ways to get the same answer. Knowing an algorithm isn't the same as understanding why it works. The procedure shows the HOW. Place value thinking shows the WHY.` },
            { word: `digit`,
              definition: `A single numeral from 0 to 9. Every number is made up of one or more digits.`,
              audioPrompt: `A digit is any single numeral from 0 to 9, {name}. Every whole number is made of one or more digits. The number 234 has three digits: 2, 3, and 4. Digits are the building blocks of numbers — the way letters are the building blocks of words. When you add column by column, you're adding one digit at a time from each addend.` },
          ],
        },

        // ────────────────────────────────────────────────────────────────
        // SECTION 4 — Introduce the regrouping problem
        // ────────────────────────────────────────────────────────────────
        {
          id: `l02-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `When Columns Get Crowded`,
          paragraphs: [
            `What if a column adds up to more than 9?`,
            `Try 376 + 247. Start with ones: 6 + 7 = 13.`,
            `But "13" can't sit in the ones column. Only the digits 0 through 9 fit in one place. We have a problem.`,
            `The fix is called REGROUPING.`,
          ],
          image: `/ue-assets/math/l02-s4-crowded.webp`,
          imageCaption: `13 won't fit in one place. What now?`,
          vocab: [
            { word: `regrouping`,
              definition: `Trading 10 of a smaller place for 1 of the next bigger place. Also called "carrying" in addition.`,
              audioPrompt: `Regrouping is when you trade 10 of one place value for 1 of the next bigger place, {name}. 10 ones become 1 ten. 10 tens become 1 hundred. You might know it as "carrying" in addition or "borrowing" in subtraction — same idea, just different directions. Regrouping isn't a trick. 13 ones really IS 1 ten plus 3 ones. The procedure is just a clean way to write it down.` },
            { word: `tens place`,
              definition: `The second digit from the right. It holds values of 10, 20, 30, up to 90.`,
              audioPrompt: `The tens place is the second digit from the right in a whole number, {name}. In 376, the 7 is in the tens place — it stands for 70. When the ones column adds to 13, you write 3 in the ones place and carry 1 to the tens place. That carried 1 is worth 10 — exactly one ten. Understanding place positions makes the carry make sense instead of just being a rule.` },
          ],
        },

        // ────────────────────────────────────────────────────────────────
        // SECTION 5 — Show the regrouping
        // ────────────────────────────────────────────────────────────────
        {
          id: `l02-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `How Regrouping Works`,
          paragraphs: [
            `Back to 376 + 247.`,
            `Ones: 6 + 7 = 13. That's 1 ten + 3 ones. Write the 3 in the ones column. Carry the 1 to the tens column:`,
            `      ¹
   3 7 6
+  2 4 7
─────────
         3`,
            `Tens column now: 7 + 4 + 1 (carry) = 12. That's 1 hundred + 2 tens. Write the 2. Carry the 1 to hundreds:`,
            `   ¹ ¹
   3 7 6
+  2 4 7
─────────
      2 3`,
            `Hundreds: 3 + 2 + 1 (carry) = 6. Write it. Total: 623.`,
          ],
          image: `/ue-assets/math/l02-s5-regroup.webp`,
          imageCaption: `Each carry is just place value at work.`,
          vocab: [
            { word: `carry`,
              definition: `In addition, when a column adds to more than 9, you "carry" the extra to the next column.`,
              audioPrompt: `Carrying is the addition version of regrouping, {name}. When a column adds up past 9, you have more of that place value than one digit can show. So you carry the extra over to the next column. 13 ones becomes "3 ones, carry 1 ten." It's the same trading idea, just with addition language.` },
            { word: `partial sum`,
              definition: `The result of adding one column at a time. Each column's total is a partial sum that contributes to the final answer.`,
              audioPrompt: `A partial sum is the result of adding just one column, {name}. When you add 376 and 247 column by column, the ones give 13, the tens give 12, the hundreds give 6 — those are partial sums. After regrouping, they combine into the full answer, 623. Breaking a big addition into partial sums is exactly what the column method does. Each column handles one piece of the total.` },
          ],
        },

        // ────────────────────────────────────────────────────────────────
        // SECTION 6 — Subtraction with borrowing
        // ────────────────────────────────────────────────────────────────
        {
          id: `l02-mag-6`,
          type: `magazine`,
          section: 6,
          headline: `Subtraction: The Reverse`,
          paragraphs: [
            `Subtraction is just addition flipped. Same stacking. Same place value rule. But sometimes you have to BORROW.`,
            `Try 52 - 27. Stack them:`,
            `   5 2
−  2 7
─────────`,
            `Ones column: 2 - 7. We can't take 7 from 2.`,
            `Some kids try to "flip" — do 7 - 2 instead. That's wrong. The top number stays the bigger number. We just need to rearrange its parts.`,
          ],
          image: `/ue-assets/math/l02-s6-subtract.webp`,
          imageCaption: `2 - 7. Looks impossible. It's not.`,
          vocab: [
            { word: `borrow`,
              definition: `In subtraction, when the top digit is smaller than the bottom, take 1 from the next column to the left and turn it into 10 of the current place.`,
              audioPrompt: `Borrowing is the subtraction version of regrouping, {name}. When the top digit in a column is smaller than the bottom one, you can't subtract directly. So you borrow 1 from the next column to the left. That 1 becomes 10 of the current place. It's the same idea as carrying, just going the other direction.` },
            { word: `difference`,
              definition: `The answer when you subtract.`,
              audioPrompt: `Difference is the answer when you subtract, {name}. The difference between 10 and 4 is 6. When a problem asks for "the difference," it means: subtract.` },
          ],
        },

        // ────────────────────────────────────────────────────────────────
        // SECTION 7 — Show the borrow
        // ────────────────────────────────────────────────────────────────
        {
          id: `l02-mag-7`,
          type: `magazine`,
          section: 7,
          headline: `How Borrowing Works`,
          paragraphs: [
            `Borrow 1 ten from the tens column. The 5 becomes 4. The 2 (in ones) gets 10 more, becoming 12:`,
            `   4 12
   5 2
−  2 7
─────────
      5`,
            `Now subtract. Ones: 12 - 7 = 5. Tens: 4 - 2 = 2. The answer is 25.`,
            `The top number didn't change. We just rearranged how it was stored — 5 tens + 2 ones became 4 tens + 12 ones. Same number, different parts.`,
          ],
          image: `/ue-assets/math/l02-s7-borrowed.webp`,
          imageCaption: `Same number. Different parts.`,
          vocab: [
            { word: `rearranging`,
              definition: `Splitting a number into different combinations of place values. 52 can be 5 tens + 2 ones OR 4 tens + 12 ones.`,
              audioPrompt: `Rearranging a number means splitting it into different combinations of place values, {name}. The number 52 is usually 5 tens plus 2 ones. But it's ALSO 4 tens plus 12 ones. Same total. Different storage. Borrowing in subtraction is just rearranging — taking 1 from one column and putting 10 in the column to its right. The number stays the same.` },
            { word: `minuend`,
              definition: `The number being subtracted FROM — the top number in a subtraction problem.`,
              audioPrompt: `The minuend is the number you're subtracting from — the top number in the problem, {name}. In 52 minus 27, the 52 is the minuend. When you borrow, you're rearranging the minuend into different place value parts. The total amount doesn't change. 52 starts as 5 tens plus 2 ones and becomes 4 tens plus 12 ones. Same minuend, different parts — ready to subtract.` },
          ],
        },

        // ────────────────────────────────────────────────────────────────
        // SECTION 8 — The borrow-across-zeros case
        // ────────────────────────────────────────────────────────────────
        {
          id: `l02-mag-8`,
          type: `magazine`,
          section: 8,
          headline: `The Trickiest Case: Borrowing Across Zeros`,
          paragraphs: [
            `What about 800 - 264?`,
            `Ones: 0 - 4. Can't do it. Need to borrow. But the tens column is also 0. Can't borrow from zero!`,
            `So we go further left. Borrow from the hundreds. The 8 becomes 7. The empty tens column becomes 10. But we still need to feed the ones column — so we take 1 of those tens, leaving 9 in the tens column and 10 in the ones:`,
            `   7 9 10
   8 0 0
−  2 6 4
─────────`,
            `Now subtract. Ones: 10 - 4 = 6. Tens: 9 - 6 = 3. Hundreds: 7 - 2 = 5. Answer: 536.`,
            `It looks complicated, but it's just place value, repeated. Each zero passes the "borrow" forward until it finds a digit that can give.`,
          ],
          image: `/ue-assets/math/l02-s8-zeros.webp`,
          imageCaption: `Borrowing across zeros. Place value to the rescue.`,
          vocab: [
            { word: `borrow across zeros`,
              definition: `When you need to borrow but the next column is 0, keep going left until you find a non-zero digit. The zeros in between become 9s.`,
              audioPrompt: `Borrowing across zeros is the trickiest subtraction move, {name}. When you need to borrow but the next column is zero, you can't borrow from zero. So you go further left until you find a non-zero digit. Then you regroup all the columns in between. Each zero becomes a 9. It looks complicated, but it's just place value at work — breaking a bigger amount into smaller usable pieces.` },
            { word: `placeholder zero`,
              definition: `A zero that holds a place value position but has no quantity there. In 800, the two zeros are placeholders for the tens and ones places.`,
              audioPrompt: `A placeholder zero occupies a place value position but holds no quantity there, {name}. In 800, the two zeros are placeholders — there are 0 tens and 0 ones, just 8 hundreds. When you need to borrow across a placeholder zero, it can't give anything directly. You go further left, regroup, and each placeholder zero becomes a 9 along the way. Zeros aren't empty — they're holding the spot.` },
          ],
        },

        // ── PROBLEM-SOLVING GAME (unchanged from original) ─────────────────
        {
          id: `l02-game`,
          type: `interactive`,
          format: `problem-solving`,
          guideText: `Time to work some problems, {name}. We'll do additions and subtractions. I'll have you walk through them with me. If you get stuck, hit the hint. If you give an answer that's a little off, I'll explain what's going on. No rush.`,
          scenarioTitle: `Adding and Subtracting Big Numbers`,
          problems: [
            {
              id: `p1`,
              problemStatement: `Solve: 437 + 285`,
              visual: {
                type: `place-value-blocks`,
                data: { number: 722, caption: `Adding two 3-digit numbers.` },
              },
              approaches: [
                {
                  id: `approach-a`,
                  label: `Stack and add by place value`,
                  description: `Add ones, then tens, then hundreds — regroup when a column exceeds 9.`,
                  steps: [
                    { prompt: `Ones column: 7 + 5 = ?`, answer: 12, hint: `Just add the ones digits.` },
                    { prompt: `12 is more than 9. Write 2 in ones, carry the 1 to tens. Now tens column: 3 + 8 + 1 = ?`, answer: 12, hint: `Add the two tens digits plus the carried 1.` },
                    { prompt: `12 tens — write 2 in tens, carry 1 to hundreds. Hundreds column: 4 + 2 + 1 = ?`, answer: 7, hint: `Add the two hundreds digits plus the carried 1.` },
                  ],
                  commonMistakes: [
                    { wrongAnswer: 11, explanation: `Looks like you forgot to add the carried 1. When you regroup from the ones, you have to add the carried 1 to the tens total.` },
                    { wrongAnswer: 7, explanation: `That's just 3 + 4 — forgot the 8 from the second number. Add ALL the digits in that column.` },
                  ],
                },
              ],
              finalAnswer: 722,
              finalExplanation: `437 + 285 = 722. Notice we regrouped twice — both at the ones and at the tens columns. Each regroup is just trading 10 of one place for 1 of the next. The structure of place value is what makes this work.`,
            },
            {
              id: `p2`,
              problemStatement: `Solve: 1,206 + 3,594`,
              visual: { type: `place-value-blocks`, data: { number: 4800, caption: `Bigger numbers, same rules.` } },
              approaches: [
                {
                  id: `approach-a`,
                  label: `Stack and add by place value`,
                  description: `Same as before — go column by column, regroup when needed.`,
                  steps: [
                    { prompt: `Ones column: 6 + 4 = ?`, answer: 10, hint: `Just add the ones digits.` },
                    { prompt: `10 ones — write 0 in ones, carry 1 to tens. Tens column: 0 + 9 + 1 = ?`, answer: 10, hint: `Add both tens digits plus the carried 1.` },
                    { prompt: `10 tens — write 0 in tens, carry 1 to hundreds. Hundreds column: 2 + 5 + 1 = ?`, answer: 8, hint: `Two hundreds + five hundreds + the carried one.` },
                    { prompt: `Hundreds total is 8, no regrouping needed. Thousands column: 1 + 3 = ?`, answer: 4, hint: `Just add the thousands digits.` },
                  ],
                  commonMistakes: [
                    { wrongAnswer: 9, explanation: `Looks like you forgot the carried 1 in the hundreds column. When ones AND tens both regroup, both carries matter at their next level up.` },
                  ],
                },
              ],
              finalAnswer: 4800,
              finalExplanation: `1,206 + 3,594 = 4,800. Two regroups in a row. The carried 1's add up just like any other number. Place value keeps everything organized.`,
            },
            {
              id: `p3`,
              problemStatement: `Solve: 854 - 327`,
              visual: { type: `place-value-blocks`, data: { number: 527, caption: `Subtraction. Regroup if the top digit is smaller.` } },
              approaches: [
                {
                  id: `approach-a`,
                  label: `Subtract by place value, regroup if needed`,
                  description: `Go column by column from ones. If the top is smaller, borrow from the next place.`,
                  steps: [
                    { prompt: `Ones column: 4 - 7. The top is smaller. So borrow 1 ten. The 5 in tens becomes 4. The 4 in ones becomes 14. What is 14 - 7?`, answer: 7, hint: `After borrowing, the ones column is 14 - 7.` },
                    { prompt: `Tens column: now it's 4 - 2 (after the borrow). What is 4 - 2?`, answer: 2, hint: `After borrowing, the tens place started at 5 but is now 4. So 4 - 2.` },
                    { prompt: `Hundreds column: 8 - 3 = ?`, answer: 5, hint: `Eight hundreds minus three hundreds.` },
                  ],
                  commonMistakes: [
                    { wrongAnswer: 3, explanation: `Looks like you did 7 - 4 instead of borrowing. When the top digit is smaller, you have to regroup — never just flip them.` },
                    { wrongAnswer: 537, explanation: `You forgot to reduce the tens after borrowing. When you borrow 1 ten for the ones column, the tens digit shrinks by 1.` },
                  ],
                },
              ],
              finalAnswer: 527,
              finalExplanation: `854 - 327 = 527. The key move was borrowing from the tens place because 4 was smaller than 7 in the ones column. After borrowing, 14 - 7 = 7, and the tens dropped from 5 to 4.`,
            },
            {
              id: `p4`,
              problemStatement: `Solve: 700 - 348`,
              visual: { type: `place-value-blocks`, data: { number: 352, caption: `Subtracting across zeros — the tricky one.` } },
              approaches: [
                {
                  id: `approach-a`,
                  label: `Borrow across zeros from the next non-zero place`,
                  description: `Find the nearest non-zero digit to the left and regroup all the way through.`,
                  steps: [
                    { prompt: `Ones: 0 - 8. Need to borrow. Tens is also 0. Move to hundreds. The 7 becomes 6. The tens 0 becomes 10. Then we borrow 1 of those tens for the ones. So tens becomes 9, ones becomes 10. What is 10 - 8?`, answer: 2, hint: `After all the borrowing, ones column is 10 - 8.` },
                    { prompt: `Tens column: now it's 9 - 4 (after the regrouping). What is 9 - 4?`, answer: 5, hint: `Nine tens minus four tens.` },
                    { prompt: `Hundreds column: now it's 6 - 3 (the 7 became 6 when we borrowed). What is 6 - 3?`, answer: 3, hint: `Six hundreds minus three hundreds.` },
                  ],
                  commonMistakes: [
                    { wrongAnswer: 458, explanation: `Looks like you flipped digits to avoid borrowing. With zeros, you HAVE to borrow across them — you can't just rearrange the digits to make the math easier.` },
                    { wrongAnswer: 362, explanation: `Looks like the hundreds didn't get reduced when you borrowed. When you borrow across zeros, the FIRST non-zero digit shrinks by 1, and all the zeros between become 9s.` },
                  ],
                },
              ],
              finalAnswer: 352,
              finalExplanation: `700 - 348 = 352. The whole borrow-across-zeros move is one of the toughest in elementary math. The 7 becomes 6, the first 0 becomes 9, the second 0 becomes 10, and then we subtract. It's place value at work — breaking 7 hundreds into 6 hundreds + 9 tens + 10 ones.`,
            },
          ],
          completionMessage: `Real work, {name}. You handled regrouping in both addition AND subtraction, plus the tricky subtracting-across-zeros case. Most adults memorize these procedures without understanding them. You actually understand WHY they work — that's a different level.`,
        },

        // ── QUIZ (unchanged) ────────────────────────────────────────────────
        {
          id: `l02-quiz`,
          type: `quiz`,
          guideText: `Quick check, {name}.`,
          questions: [
            { id: `l02-q1`, format: `multiple-choice`,
              question: `When you carry a 1 in addition, what are you actually doing?`,
              options: [
                `Adding an extra 1 for no reason`,
                `Trading 10 of one place value for 1 of the next place up`,
                `Making a mistake`,
                `Subtracting`,
              ],
              correctIndex: 1,
              explanation: `Carrying (regrouping) means you have more than 9 in a place value, so you trade 10 of them for 1 of the next higher place. 13 ones = 1 ten + 3 ones.` },
            { id: `l02-q2`, format: `multiple-choice`,
              question: `Solve: 458 + 367`,
              options: [`715`, `825`, `7,125`, `715`],
              correctIndex: 1,
              explanation: `Ones: 8 + 7 = 15 (write 5, carry 1). Tens: 5 + 6 + 1 = 12 (write 2, carry 1). Hundreds: 4 + 3 + 1 = 8. Answer: 825.` },
            { id: `l02-q3`, format: `multiple-choice`,
              question: `In subtraction, if the top digit is smaller than the bottom, what should you do?`,
              options: [
                `Flip them and subtract`,
                `Skip that column`,
                `Borrow from the next place to the left`,
                `Write 0 in the answer`,
              ],
              correctIndex: 2,
              explanation: `Never flip the digits. Borrow 1 from the next higher place value, which adds 10 to the current place. The number on top is still the bigger number — you're just rearranging its parts.` },
            { id: `l02-q4`, format: `true-false`,
              question: `True or false: When you regroup in subtraction, the digit you borrow FROM gets bigger by 1.`,
              correctAnswer: false,
              explanation: `False. The digit you borrow FROM shrinks by 1 (you gave one away). The digit you borrow TO grows by 10. The total amount stays exactly the same — you just rearranged it.` },
            { id: `l02-q5`, format: `multiple-choice`,
              question: `Solve: 602 - 285`,
              options: [`317`, `327`, `427`, `283`],
              correctIndex: 0,
              explanation: `Borrowing across the zero: 6 becomes 5, the 0 becomes 9, the 2 becomes 12. Then: 12 - 5 = 7 (ones). 9 - 8 = 1 (tens). 5 - 2 = 3 (hundreds). Answer: 317.` },
            { id: `l02-q6`, format: `multiple-choice`,
              question: `When you "borrow across a zero," what happens to that zero?`,
              options: [
                `It stays a 0`,
                `It becomes a 9 (because you borrowed 10 of its place value from the next higher place)`,
                `It becomes a 1`,
                `It disappears`,
              ],
              correctIndex: 1,
              explanation: `When you borrow across a zero, that zero becomes a 9 (you got 10 of its place value from above, and then immediately gave 1 of them to the next place down — leaving 9).` },
            { id: `l02-q7`, format: `multiple-choice`,
              question: `What is the SUM of 246 and 178?`,
              options: [`414`, `424`, `424`, `434`],
              correctIndex: 1,
              explanation: `Ones: 6 + 8 = 14 (write 4, carry 1). Tens: 4 + 7 + 1 = 12 (write 2, carry 1). Hundreds: 2 + 1 + 1 = 4. Answer: 424.` },
            { id: `l02-q8`, format: `multiple-choice`,
              question: `What is the DIFFERENCE between 540 and 287?`,
              options: [`253`, `263`, `267`, `343`],
              correctIndex: 0,
              explanation: `Ones: 0 - 7, borrow. The 4 becomes 3, the 0 becomes 10. 10 - 7 = 3 (ones). Tens: 3 - 8, borrow. The 5 becomes 4, the 3 becomes 13. 13 - 8 = 5 (tens). Hundreds: 4 - 2 = 2. Answer: 253.` },
          ],
        },

        {
          id: `l02-reflection`,
          type: `reflection`,
          guideText: `Pick a prompt, {name}.`,
          prompts: [
            { id: `r1`, text: `Which problem in the game was the hardest for you? What made it tricky?` },
            { id: `r2`, text: `How would you explain "carrying" or "borrowing" to a younger kid?` },
            { id: `r3`, text: `Have you ever had to subtract bigger from smaller in real life? What did you do?` },
            { id: `r4`, text: `What's a real-world situation where you might add or subtract numbers in the thousands?` },
          ],
        },

        {
          id: `l02-realworld`,
          type: `real-world`,
          guideText: `Adding and subtracting big numbers shows up everywhere. Shopping — your grocery bill is the sum of all the items. Bank accounts — every deposit and withdrawal. Sports scores. Population counts. Distances traveled. Anything that adds up over time or gets taken away. Knowing how to do this in your head or on paper means you're never lost when numbers start moving around in real life.`,
          familyAdventure: `Together, do a real math task: pick a savings goal (say, $200 for something fun). Add up your current savings from any sources. Subtract the goal from the current amount. How far away are you? How long would it take to reach it if you saved a fixed amount per week? Real math, real situation.`,
          creativePrompt: {
            intro: `Make up a word problem that uses both addition AND subtraction with at least three-digit numbers. Make it about something you actually care about.`,
            floor: `Write at least 5 sentences.`,
            stretch: `Write 8-10 sentences. Include the math story AND the solution.`,
            open: `Write as much as you want.`,
            frames: [
              `My problem is about ___.`,
              `The starting number is ___.`,
              `Then ___.`,
              `Then ___.`,
              `The final answer is ___.`,
            ],
          },
        },

        {
          id: `l02-celebration`,
          type: `celebration`,
          message: `Solid work, {name}. You handled multi-digit addition and subtraction, including the trickiest moments — regrouping in both directions AND subtracting across zeros. You understand WHY these procedures work, not just how. Next lesson we move into multiplication. — Remi.`,
          badge: `regrouping-master`,
          badgeName: `Regrouping Master`,
          xpEarned: 75,
        },
      ],
    },
  ],
};

export default MATH_UE_L02;
