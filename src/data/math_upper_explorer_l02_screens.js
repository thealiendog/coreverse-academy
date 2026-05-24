// ─────────────────────────────────────────────────────────────────────────────
// MATH UE  |  L02 — Multi-Digit Addition and Subtraction
// Age band : upper_explorers (9–10)   Guide: remi
// Standards: CCSS 4.NBT.B.4
// CALIBRATED: Math UE Spec v2
// Game format: problem-solving (Adding and Subtracting Big Numbers)
// Visual model: place-value-blocks
// Misconceptions: "you can't subtract bigger from smaller in a column" (must regroup) /
//                 "carrying is mysterious" / "subtracting across zeros confuses kids"
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
          guideText: `Welcome back, {name}! Last lesson you got place value down. Now we use it. Today's all about adding and subtracting big numbers — including the tricky moments where you have to "carry" or "borrow." Most adults can do these procedures but couldn't tell you WHY they work. By the end of today, you'll understand both the how AND the why. Let's go.`,
          headline: `Multi-Digit Addition and Subtraction`,
          subtitle: `Using place value to handle big numbers`,
          visual: `/ue-assets/math/l02-welcome.webp`,
        },

        {
          id: `l02-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Addition Is Combining Place Values`,
          paragraphs: [
            `Imagine you have 234 baseball cards and your friend gives you 142 more. How many total? You could count one by one, but that takes forever. Instead, you add them in their place values.`,
            `Stack them up. 234 has 2 hundreds, 3 tens, 4 ones. 142 has 1 hundred, 4 tens, 2 ones. Add each place: 2+1=3 hundreds. 3+4=7 tens. 4+2=6 ones. Total: 3 hundreds + 7 tens + 6 ones = 376. That's it. You added by place value.`,
            `The standard algorithm — the way most people learn to add — is just this idea, stacked vertically. Line up the digits by place, add each column, and you're done. The reason it works is because each place value is separate. Hundreds and hundreds combine. Tens and tens combine. Ones and ones combine. They don't interfere with each other... usually.`,
          ],
          image: `/ue-assets/math/l02-s1-add-place.webp`,
          imageCaption: `Add each place value separately. Then put it together.`,
          vocab: [
            { word: `sum`,
              definition: `The result of adding two or more numbers together.`,
              audioPrompt: `Sum is the result of adding numbers, {name}. If you add 8 and 5, the sum is 13. The plus sign just means "find the sum of." Knowing the word "sum" is useful because problems often ask "what is the sum of..." instead of just showing you a plus sign. Same idea, different language.` },
            { word: `algorithm`,
              definition: `A step-by-step procedure for solving a problem.`,
              audioPrompt: `An algorithm is just a step-by-step procedure for solving a problem, {name}. The "standard algorithm" for addition is the stacked column way that most people learn. There are other algorithms too — different ways to get the same answer. Knowing an algorithm isn't the same as understanding why it works. The procedure shows you HOW. Place value thinking shows you WHY.` },
          ],
        },

        {
          id: `l02-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `When You Have to Carry (Regrouping in Addition)`,
          paragraphs: [
            `Here's where it gets interesting. Add 376 + 247. Start with ones: 6 + 7 = 13. But "13" can't go in the ones column — only digits 0-9 fit in one place. So what do we do?`,
            `This is called REGROUPING (you might know it as "carrying"). 13 ones is the same as 1 ten and 3 ones. So we write 3 in the ones column and carry the 1 over to the tens column. We're not making up numbers — we're rearranging them into the proper place values.`,
            `Now the tens column has 7 + 4 + 1 (the carried one) = 12. Same problem again. 12 tens is the same as 1 hundred and 2 tens. Write 2 in the tens column, carry the 1 to the hundreds. Hundreds column: 3 + 2 + 1 = 6. Final answer: 623. The "carrying" trick isn't magic. It's just place value at work — taking extras from one place and giving them to the next place up.`,
          ],
          image: `/ue-assets/math/l02-s2-carry.webp`,
          imageCaption: `13 ones = 1 ten + 3 ones. Carrying is regrouping.`,
          vocab: [
            { word: `regrouping`,
              definition: `Trading 10 of a smaller place value for 1 of the next place value up (or the reverse for subtraction). Also called "carrying" or "borrowing."`,
              audioPrompt: `Regrouping is when you trade 10 of one place value for 1 of the next place value up, {name}. 10 ones become 1 ten. 10 tens become 1 hundred. You might know this as "carrying" in addition or "borrowing" in subtraction — same idea, just different directions. Regrouping isn't a trick. It's literally just place value math. 13 ones IS 1 ten plus 3 ones. The procedure is just a clean way to handle this.` },
            { word: `addend`,
              definition: `One of the numbers being added together. In 376 + 247 = 623, both 376 and 247 are addends.`,
              audioPrompt: `An addend is a number you're adding, {name}. In 376 + 247 = 623, both 376 and 247 are addends. 623 is the sum. Knowing this word helps when a problem says "which addend is larger" or "find the missing addend." Same idea as factors for multiplication — the inputs have names. Here the inputs are called addends and the output is called the sum.` },
          ],
        },

        {
          id: `l02-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Subtraction Is the Opposite — and Regrouping Goes the Other Way`,
          paragraphs: [
            `Subtraction is just addition in reverse. If 8 + 5 = 13, then 13 - 5 = 8. Same fact, different angle. When you subtract big numbers, you still go column by column starting from the ones.`,
            `But here's the twist. Sometimes the top digit is smaller than the bottom one. Like 52 - 27. The ones column says "2 - 7." You can't take 7 from 2... unless you regroup. Borrow 1 ten from the tens place — that's 10 ones. Now the ones column has 12 - 7 = 5. The tens column went from 5 to 4 (because we borrowed). Now tens: 4 - 2 = 2. Answer: 25.`,
            `Common mistake alert: a lot of kids think "you can't subtract bigger from smaller, so just flip them." That gives 7 - 2 = 5 and ends up wrong. The REAL rule is: if the top is smaller, regroup. Trade 1 from the next place to the left, turn it into 10 of the current place, then subtract. The number above always stays the bigger number — but its parts can be rearranged.`,
          ],
          image: `/ue-assets/math/l02-s3-subtract.webp`,
          imageCaption: `52 - 27. The 5 becomes 4, the 2 becomes 12. Now subtract.`,
          vocab: [
            { word: `difference`,
              definition: `The result of subtracting one number from another.`,
              audioPrompt: `Difference is the result of subtracting numbers, {name}. If you subtract 5 from 13, the difference is 8. The minus sign just means "find the difference." Like sum, knowing the word "difference" helps you understand what problems are asking. "What is the difference between 100 and 47?" means subtract.` },
            { word: `minuend`,
              definition: `The starting number in a subtraction problem — the number you're subtracting from.`,
              audioPrompt: `The minuend is the starting number in subtraction, {name} — the number on top or to the left of the minus sign. In 52 - 27, the 52 is the minuend. The 27 is the subtrahend — what you're taking away. The answer is the difference. You don't need these words for everyday math, but tests sometimes use them. Minuend minus subtrahend equals difference.` },
          ],
        },

        {
          id: `l02-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `The Subtracting-Across-Zeros Trap`,
          paragraphs: [
            `One subtraction problem trips kids up more than any other: subtracting from a number with lots of zeros. Like 800 - 264. The ones column says "0 - 4." Can't do it. Need to borrow. But the tens column is also 0. Can't borrow from there directly. Now what?`,
            `The trick is to go further left until you find a non-zero digit. The 8 in the hundreds place becomes 7. That 1 hundred we borrowed becomes 10 tens. But we need to use 1 of those tens for the ones column, so the tens place becomes 9 tens. NOW the ones column has 10 - 4 = 6. The tens column has 9 - 6 = 3. The hundreds column has 7 - 2 = 5. Answer: 536.`,
            `This feels confusing because so much is happening at once. The key is to think of it like making change. If you have an 800-dollar gift card and want to make a 264-dollar purchase, you don't have any singles or tens to give. You break the 800 into more usable pieces. That's exactly what's happening in this subtraction. Don't panic when you see zeros — just keep going left until you find a digit to borrow from.`,
          ],
          image: `/ue-assets/math/l02-s4-zeros.webp`,
          imageCaption: `Subtracting across zeros: break a bigger place into usable pieces.`,
          vocab: [
            { word: `borrow across zeros`,
              definition: `When you need to regroup but the digit in the next place is 0, you keep moving left until you find a non-zero digit.`,
              audioPrompt: `Borrowing across zeros is one of the trickiest moves in subtraction, {name}. When you need to borrow but the next place to the left is 0, you can't borrow from zero. So you go further left until you find a non-zero digit. Then you regroup all the places in between. It feels complicated, but it's just the same place value idea — breaking a bigger amount into smaller usable pieces.` },
            { word: `decompose`,
              definition: `To break a number into smaller place value parts. Decomposing a hundred means trading it for 10 tens.`,
              audioPrompt: `To decompose a number means to break it into smaller place value parts, {name}. When you subtract 264 from 800 and need to borrow, you're decomposing 8 hundreds — breaking one of them into 10 tens, then one of those tens into 10 ones. It sounds technical but it's just what you already do when borrowing. Decompose is the math word for "break it down into pieces you can use."` },
          ],
        },

        // ── PROBLEM-SOLVING GAME — Adding and Subtracting Big Numbers ────────
        {
          id: `l02-game`,
          type: `interactive`,
          format: `problem-solving`,
          guideText: `Time to work some problems, {name}. We'll do three additions and three subtractions. I'll have you walk through them with me. If you get stuck, hit the hint. If you give an answer that's a little off, I'll explain what's going on. No rush.`,
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
                    {
                      prompt: `Ones column: 7 + 5 = ?`,
                      answer: 12,
                      hint: `Just add the ones digits.`,
                    },
                    {
                      prompt: `12 is more than 9. Write 2 in ones, carry the 1 to tens. Now tens column: 3 + 8 + 1 = ?`,
                      answer: 12,
                      hint: `Add the two tens digits plus the carried 1.`,
                    },
                    {
                      prompt: `12 tens — write 2 in tens, carry 1 to hundreds. Hundreds column: 4 + 2 + 1 = ?`,
                      answer: 7,
                      hint: `Add the two hundreds digits plus the carried 1.`,
                    },
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
                    {
                      prompt: `Ones column: 6 + 4 = ?`,
                      answer: 10,
                      hint: `Just add the ones digits.`,
                    },
                    {
                      prompt: `10 ones — write 0 in ones, carry 1 to tens. Tens column: 0 + 9 + 1 = ?`,
                      answer: 10,
                      hint: `Add both tens digits plus the carried 1.`,
                    },
                    {
                      prompt: `10 tens — write 0 in tens, carry 1 to hundreds. Hundreds column: 2 + 5 + 1 = ?`,
                      answer: 8,
                      hint: `Two hundreds + five hundreds + the carried one.`,
                    },
                    {
                      prompt: `Hundreds total is 8, no regrouping needed. Thousands column: 1 + 3 = ?`,
                      answer: 4,
                      hint: `Just add the thousands digits.`,
                    },
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
                    {
                      prompt: `Ones column: 4 - 7. The top is smaller. So borrow 1 ten. The 5 in tens becomes 4. The 4 in ones becomes 14. What is 14 - 7?`,
                      answer: 7,
                      hint: `After borrowing, the ones column is 14 - 7.`,
                    },
                    {
                      prompt: `Tens column: now it's 4 - 2 (after the borrow). What is 4 - 2?`,
                      answer: 2,
                      hint: `After borrowing, the tens place started at 5 but is now 4. So 4 - 2.`,
                    },
                    {
                      prompt: `Hundreds column: 8 - 3 = ?`,
                      answer: 5,
                      hint: `Eight hundreds minus three hundreds.`,
                    },
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
                    {
                      prompt: `Ones: 0 - 8. Need to borrow. Tens is also 0. Move to hundreds. The 7 becomes 6. The tens 0 becomes... 10? Then we borrow 1 of those tens for the ones. So tens becomes 9, ones becomes 10. What is 10 - 8?`,
                      answer: 2,
                      hint: `After all the borrowing, ones column is 10 - 8.`,
                    },
                    {
                      prompt: `Tens column: now it's 9 - 4 (after the regrouping). What is 9 - 4?`,
                      answer: 5,
                      hint: `Nine tens minus four tens.`,
                    },
                    {
                      prompt: `Hundreds column: now it's 6 - 3 (the 7 became 6 when we borrowed). What is 6 - 3?`,
                      answer: 3,
                      hint: `Six hundreds minus three hundreds.`,
                    },
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
