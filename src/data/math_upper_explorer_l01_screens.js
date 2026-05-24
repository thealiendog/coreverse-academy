// ─────────────────────────────────────────────────────────────────────────────
// MATH UE  |  L01 — Place Value to 1,000,000
// Age band : upper_explorers (9–10)   Guide: remi
// Standards: CCSS 4.NBT.A.1, 4.NBT.A.2
// CALIBRATED: Math UE Spec v2 + UE Spec v1.1
// Game format: problem-solving (Place Value Detective)
// Visual model: place-value-blocks
// Misconceptions addressed: "places are random labels" / "leading zeros matter" /
//                           "each place is just +1, not ×10"
// ─────────────────────────────────────────────────────────────────────────────

const MATH_UE_L01 = {
  ageBand: `upper_explorers`,
  subjectId: `math`,
  guide: `remi`,

  lessons: [
    {
      id: `math-9-10-01`,
      title: `Place Value to 1,000,000`,
      duration: 22,
      xpReward: 75,
      badge: `place-value-pro`,
      badgeName: `Place Value Pro`,

      screens: [
        {
          id: `l01-welcome`,
          type: `welcome`,
          guideText: `Hey {name}! I'm Remi, and I'm going to be your guide through math this whole journey. Today we start with one of the most important ideas in all of math — place value. It's the secret structure underneath every number you'll ever see. By the end of this lesson, you'll be able to read, write, and understand numbers all the way up to one million. Take your time. This isn't a race.`,
          headline: `Place Value to 1,000,000`,
          subtitle: `The secret structure of every number`,
          visual: `/ue-assets/math/l01-welcome.webp`,
        },

        {
          id: `l01-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `What Place Value Actually Means`,
          paragraphs: [
            `Look at the number 3,572. Four digits. But here's the question — what does each digit actually mean? In place value, the SPOT a digit sits in matters more than the digit itself.`,
            `The 3 isn't just "three." It's in the THOUSANDS place — so it means three thousand. The 5 is in the HUNDREDS place — five hundred. The 7 is in the TENS place — seventy. The 2 is in the ONES place — just two. Add them up: 3,000 + 500 + 70 + 2 = 3,572. That's place value at work.`,
            `Here's the magical pattern. Each place is 10 TIMES the place to its right. Ones × 10 = Tens. Tens × 10 = Hundreds. Hundreds × 10 = Thousands. The places aren't random — they're a doubling-up-by-ten ladder going to infinity.`,
          ],
          image: `/ue-assets/math/l01-s1-place-value.webp`,
          imageCaption: `Same digits. Different places. Different values.`,
          vocab: [
            { word: `digit`,
              definition: `One of the ten symbols we use to write numbers: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9.`,
              audioPrompt: `A digit is one of the ten symbols we use to write numbers, {name}. They're 0, 1, 2, 3, 4, 5, 6, 7, 8, and 9. Every number ever written uses just these ten digits in different combinations and positions. The cool part is that the SAME digit can mean very different things depending on where it sits. In 53, the 5 means fifty. In 503, the 5 means five hundred. Same digit, different value, because it's in a different place. That's place value.` },
            { word: `place value`,
              definition: `The value a digit has based on its position in a number.`,
              audioPrompt: `Place value is the value a digit has based on its position in a number, {name}. The 7 in 75 means seventy. The 7 in 752 means seven hundred. The 7 in 7,000 means seven thousand. Same digit — but completely different values because it's in different places. Place value is the structure underneath every number. Once you get this, big numbers stop being scary because you can break them down into their pieces.` },
          ],
        },

        {
          id: `l01-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `The Ladder Up to a Million`,
          paragraphs: [
            `Let's climb the place value ladder. Starting from the right and moving left, the places are: Ones, Tens, Hundreds, Thousands, Ten Thousands, Hundred Thousands, Millions. Each one is ten times the one before it.`,
            `So how big is a million? It's 1,000,000 — that's a 1 followed by six zeros. Or another way to think about it: one million is one thousand thousands. If you counted to a million, one number per second, it would take you about 11 and a half days without stopping.`,
            `Big numbers get easier to read when you use commas. Commas split big numbers into groups of three digits, called periods. From right to left: the first group is ones, the next is thousands, the next is millions. So 4,237,891 reads as "four million, two hundred thirty-seven thousand, eight hundred ninety-one." Just three smaller numbers separated by commas. The commas do a lot of the work.`,
          ],
          image: `/ue-assets/math/l01-s2-ladder.webp`,
          imageCaption: `Ones → Tens → Hundreds → Thousands → Ten Thousands → Hundred Thousands → Millions. Each is ten times the last.`,
          vocab: [
            { word: `period`,
              definition: `A group of three digits in a number, separated by commas. Each period has a name (ones, thousands, millions).`,
              audioPrompt: `A period in a number is a group of three digits separated by commas, {name}. The rightmost three are the "ones" period. The next three to the left are the "thousands" period. The next three are the "millions" period. So in the number 4,237,891 — the 891 is in the ones period, the 237 is in the thousands period, and the 4 is in the millions period. Periods make big numbers much easier to read because you're really just reading three smaller numbers connected by commas.` },
            { word: `million`,
              definition: `One thousand thousands. Written as 1,000,000. A 1 followed by six zeros.`,
              audioPrompt: `A million is one thousand thousands, {name}. Written as 1,000,000 — a 1 followed by six zeros. To get a feel for how big a million actually is: if you counted one number per second without stopping, it would take you over eleven days to count to a million. A million isn't just a "really big number." It's a specific, structured place — the next step up the place value ladder past hundred thousands.` },
          ],
        },

        {
          id: `l01-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Three Ways to Show the Same Number`,
          paragraphs: [
            `Every number has different forms. Knowing all of them helps you really understand what a number means. Take 4,237. There are three main ways to write it.`,
            `Standard form is the regular way: 4,237. Word form spells it out: four thousand, two hundred thirty-seven. Expanded form breaks it down by place value: 4,000 + 200 + 30 + 7. All three are the SAME number, just shown differently.`,
            `Why does this matter? Because expanded form shows you exactly what each digit is worth. When you see 4,237 in expanded form as 4,000 + 200 + 30 + 7, you can see clearly that the 4 means four thousand and the 7 means just seven. Expanded form is like the "x-ray view" of a number — it shows the place value structure inside.`,
          ],
          image: `/ue-assets/math/l01-s3-three-forms.webp`,
          imageCaption: `Standard. Word. Expanded. Same number, three views.`,
          vocab: [
            { word: `standard form`,
              definition: `The usual way to write a number with digits: 4,237.`,
              audioPrompt: `Standard form is the regular way to write a number using digits, {name}. 4,237 is in standard form. 1,000,000 is in standard form. Standard form is the most compact way to write a number — it's how numbers normally show up in everyday life. Knowing standard form is just step one. Knowing how to translate between standard form and other forms is what shows you really understand a number.` },
            { word: `expanded form`,
              definition: `Writing a number as the sum of the values of each digit: 4,237 = 4,000 + 200 + 30 + 7.`,
              audioPrompt: `Expanded form writes a number as the sum of the values of each digit, {name}. So 4,237 in expanded form is 4,000 + 200 + 30 + 7. It shows exactly what each digit is worth in its place. Expanded form is incredibly useful because it makes the place value structure visible. If you can write a number in expanded form, you really understand it — not just memorize it.` },
          ],
        },

        {
          id: `l01-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `The Mistake Even Smart Kids Make`,
          paragraphs: [
            `Here's a classic mistake. Look at the numbers 502 and 520. Both have the same three digits — 5, 0, and 2. But they're VERY different numbers.`,
            `In 502, the 5 is in the hundreds place (500), the 0 is in the tens place (no tens), and the 2 is in the ones place (2). Total: 502. In 520, the 5 is still in the hundreds place (500), but now the 2 is in the tens place (20) and the 0 is in the ones place (no ones). Total: 520. The 0 isn't just "nothing" — it's a placeholder that PROTECTS the other digits' positions.`,
            `The lesson: a zero in a place doesn't mean the place is empty. It means there's zero of that place value, AND it holds the spot so other digits stay in the right places. Without that 0, 502 would just become 52. Whole different number. Zero is doing real work.`,
          ],
          image: `/ue-assets/math/l01-s4-zeros.webp`,
          imageCaption: `Zero isn't nothing. It's a placeholder doing real work.`,
          vocab: [
            { word: `placeholder zero`,
              definition: `A zero in a number that holds a place open and keeps other digits in their correct positions.`,
              audioPrompt: `A placeholder zero is a zero that holds a place open in a number, {name}. In 502, the zero in the tens place doesn't mean "nothing" — it means "zero tens" AND it keeps the 5 in the hundreds place. Without that zero, 502 would just be 52, a completely different number. Placeholder zeros are doing real math. They're not lazy — they're protecting the structure of the number.` },
            { word: `leading zero`,
              definition: `A zero at the beginning of a number that has no value and is not written in standard form.`,
              audioPrompt: `A leading zero is a zero at the front of a number, {name}. Like writing 07 instead of 7 — they're the same number. In standard math notation, we leave leading zeros out because they add no information. That's different from placeholder zeros inside a number, which hold real places. Leading zeros: dropped. Placeholder zeros: kept. Both are zeros, but they do completely different jobs.` },
          ],
        },

        // ── PROBLEM-SOLVING GAME — Place Value Detective ─────────────────────
        {
          id: `l01-game`,
          type: `interactive`,
          format: `problem-solving`,
          guideText: `Time to work some real problems, {name}. I'll show you four place value puzzles. For each one, you'll see the problem, pick how you want to think about it, and work through it step by step. If you get stuck, hit the hint button — that's why it's there. If you give an answer that's not quite right, I'll show you what's happening. Your brain grows from working through this stuff, so take your time.`,
          scenarioTitle: `Place Value Detective`,
          problems: [
            {
              id: `p1`,
              problemStatement: `In the number 47,503, what is the value of the digit 7?`,
              visual: {
                type: `place-value-blocks`,
                data: {
                  number: 47503,
                  highlightPlace: `thousands`,
                  caption: `Look at where the 7 sits.`,
                },
              },
              approaches: [
                {
                  id: `approach-a`,
                  label: `Identify the place, then multiply`,
                  description: `Find which place the 7 is in, then figure out what that means.`,
                  steps: [
                    {
                      prompt: `The 7 is in the thousands place. So its value is 7 × ?`,
                      answer: 1000,
                      hint: `Each place value is named after what one of it equals. The thousands place means 1 of that place equals 1,000.`,
                    },
                    {
                      prompt: `What is 7 × 1,000?`,
                      answer: 7000,
                      hint: `Multiplying by 1,000 means three zeros get added on. 7 × 1,000 = 7 followed by three zeros.`,
                    },
                  ],
                  commonMistakes: [
                    { wrongAnswer: 7, explanation: `That's just the digit 7. But the digit's VALUE depends on its place. Since it's in the thousands place, its actual value is much bigger than just 7.` },
                    { wrongAnswer: 700, explanation: `Close to the right idea, but check the place again. The 7 isn't in the hundreds place — it's in the thousands place. Worth ten times more.` },
                    { wrongAnswer: 70, explanation: `That would be if the 7 were in the tens place. But it's in the thousands place, much higher up the ladder.` },
                  ],
                },
              ],
              finalAnswer: 7000,
              finalExplanation: `The 7 is in the thousands place, so its value is 7,000. The lesson here is that a digit alone doesn't tell you its value — you have to know where it sits.`,
            },
            {
              id: `p2`,
              problemStatement: `Write 380,406 in expanded form.`,
              visual: {
                type: `place-value-blocks`,
                data: {
                  number: 380406,
                  caption: `Break it down place by place.`,
                },
              },
              approaches: [
                {
                  id: `approach-a`,
                  label: `Go through each digit, place by place`,
                  description: `For each digit, figure out its place value, and add up the non-zero values.`,
                  steps: [
                    {
                      prompt: `The 3 is in the hundred thousands place. Its value is ?`,
                      answer: 300000,
                      hint: `Hundred thousands means 1 of that place equals 100,000. So 3 of them equals 3 × 100,000.`,
                    },
                    {
                      prompt: `The 8 is in the ten thousands place. Its value is ?`,
                      answer: 80000,
                      hint: `Ten thousands means 1 of that place equals 10,000. So 8 of them equals 8 × 10,000.`,
                    },
                    {
                      prompt: `The 4 is in the hundreds place. Its value is ?`,
                      answer: 400,
                      hint: `Hundreds means 1 of that place equals 100. So 4 of them equals 400.`,
                    },
                    {
                      prompt: `The 6 is in the ones place. Its value is ?`,
                      answer: 6,
                      hint: `Ones is just the digit itself.`,
                    },
                  ],
                  commonMistakes: [
                    { wrongAnswer: 30000, explanation: `That would be the value if the 3 were in the ten thousands place. But the 3 is one place higher — in the hundred thousands.` },
                    { wrongAnswer: 3000000, explanation: `Whoa, that's the millions place! The 3 is in the hundred thousands, one step down from the millions.` },
                  ],
                },
              ],
              finalAnswer: 380406,
              finalExplanation: `In expanded form: 300,000 + 80,000 + 400 + 6 = 380,406. Notice we skipped the thousands and tens places because they're zeros — zero of those values means we don't add anything. The zeros are still doing the important work of holding the OTHER digits in place.`,
            },
            {
              id: `p3`,
              problemStatement: `Which is bigger: 65,402 or 65,420?`,
              visual: {
                type: `place-value-blocks`,
                data: {
                  number: 65402,
                  caption: `Compare digit by digit, starting from the left.`,
                },
              },
              approaches: [
                {
                  id: `approach-a`,
                  label: `Compare digit by digit from left to right`,
                  description: `Start at the highest place value and compare each digit one at a time.`,
                  steps: [
                    {
                      prompt: `Ten thousands place — both have 6. So we look at the next. Thousands place — both have 5. Hundreds place — both have 4. Tens place — 65,402 has 0, 65,420 has 2. Which is bigger in the tens place: 0 or 2?`,
                      answer: 2,
                      hint: `Compare the digits in the tens place directly. 0 versus 2.`,
                    },
                    {
                      prompt: `Since the tens place is the first place where the digits differ, and 2 > 0, which number is bigger? Type 1 for 65,402 or 2 for 65,420.`,
                      answer: 2,
                      hint: `The number with the bigger digit in the highest place where they differ is the bigger number.`,
                    },
                  ],
                  commonMistakes: [
                    { wrongAnswer: 1, explanation: `Look at the tens place again. 65,402 has 0 tens. 65,420 has 2 tens. So 65,420 has more.` },
                  ],
                },
              ],
              finalAnswer: 2,
              finalExplanation: `65,420 is bigger than 65,402. They look almost identical, but the tens place tells the difference. When comparing numbers with the same number of digits, go left to right and stop at the first place where the digits differ. The number with the bigger digit there is the bigger number.`,
            },
            {
              id: `p4`,
              problemStatement: `A library reports it has eight hundred twelve thousand, five hundred books. Write this number in standard form.`,
              visual: {
                type: `place-value-blocks`,
                data: {
                  number: 812500,
                  caption: `Convert words to a numeric number.`,
                },
              },
              approaches: [
                {
                  id: `approach-a`,
                  label: `Break the words into periods, then put them together`,
                  description: `Find the thousands group and the ones group separately, then combine them with a comma.`,
                  steps: [
                    {
                      prompt: `"Eight hundred twelve thousand" — what number is in the thousands period?`,
                      answer: 812,
                      hint: `Eight hundred and twelve. That's 800 + 12.`,
                    },
                    {
                      prompt: `"Five hundred" — what number is in the ones period?`,
                      answer: 500,
                      hint: `Just five hundred. There are no tens or ones mentioned.`,
                    },
                    {
                      prompt: `Put them together: 812 in thousands, 500 in ones. What's the full number?`,
                      answer: 812500,
                      hint: `Write the 812, then the 500, with a comma between. But wait — the ones period needs three digits. So 500 stays as 500.`,
                    },
                  ],
                  commonMistakes: [
                    { wrongAnswer: 81250, explanation: `Looks like you dropped a zero. The ones period needs to have three digits, so "five hundred" is 500, not 50.` },
                    { wrongAnswer: 812005, explanation: `Looks like the ones period got mixed up. "Five hundred" means 500, not 005.` },
                  ],
                },
              ],
              finalAnswer: 812500,
              finalExplanation: `Eight hundred twelve thousand, five hundred is 812,500 in standard form. The trick with these is to handle each period (each group of three) separately, then connect them with commas. Both periods need three digits.`,
            },
          ],
          completionMessage: `Real work, {name}. Notice what you just did — you decoded numbers up to hundreds of thousands by understanding the structure underneath. Place value isn't a trick. It's the actual blueprint of how numbers work. Every number you'll ever encounter follows this same pattern.`,
        },

        {
          id: `l01-quiz`,
          type: `quiz`,
          guideText: `Quick test, {name}. Take your time.`,
          questions: [
            { id: `l01-q1`, format: `multiple-choice`,
              question: `What is the value of the digit 8 in the number 6,837?`,
              options: [`8`, `80`, `800`, `8,000`],
              correctIndex: 2,
              explanation: `The 8 is in the hundreds place, so its value is 800. Don't just count the digit — think about its place.` },
            { id: `l01-q2`, format: `multiple-choice`,
              question: `In the number 47,205, what does the 0 do?`,
              options: [
                `Nothing — it's empty`,
                `Holds the tens place open so the other digits stay in the right places`,
                `Makes the number smaller`,
                `Can be removed without changing the number`,
              ],
              correctIndex: 1,
              explanation: `The zero is a placeholder. It says "zero tens" AND keeps the other digits in the correct positions. Without it, 47,205 would become 4,725 — a completely different number.` },
            { id: `l01-q3`, format: `multiple-choice`,
              question: `Write 30,250 in expanded form.`,
              options: [
                `3,000 + 2,000 + 50`,
                `30,000 + 250`,
                `30,000 + 200 + 50`,
                `3 + 0 + 2 + 5 + 0`,
              ],
              correctIndex: 2,
              explanation: `30,250 = 30,000 + 200 + 50. The thousands place has a 0 (no value to add) and the ones place has a 0 (no value to add). Expanded form skips zeros because zero of anything is zero.` },
            { id: `l01-q4`, format: `true-false`,
              question: `True or false: Each place value is 10 times the place to its right.`,
              correctAnswer: true,
              explanation: `True. The ones × 10 = tens. Tens × 10 = hundreds. Hundreds × 10 = thousands. And so on. This pattern is what makes the whole number system work.` },
            { id: `l01-q5`, format: `multiple-choice`,
              question: `Which number is larger: 50,432 or 50,342?`,
              options: [
                `50,432`,
                `50,342`,
                `They're equal`,
                `Can't tell without more info`,
              ],
              correctIndex: 0,
              explanation: `Compare left to right. Ten thousands: 5 = 5. Thousands: 0 = 0. Hundreds: 4 > 3. Stop here — 50,432 has more hundreds, so it's the bigger number.` },
            { id: `l01-q6`, format: `multiple-choice`,
              question: `How many zeros are in one million in standard form?`,
              options: [`Three`, `Four`, `Five`, `Six`],
              correctIndex: 3,
              explanation: `One million is 1,000,000 — a 1 followed by six zeros. That's the millions place.` },
            { id: `l01-q7`, format: `multiple-choice`,
              question: `What's the standard form of: four hundred eight thousand, sixty-two?`,
              options: [`408,062`, `48,062`, `400,862`, `4,008,062`],
              correctIndex: 0,
              explanation: `Thousands period: four hundred eight = 408. Ones period: sixty-two = 062 (with a placeholder zero to fill the hundreds spot). Together: 408,062.` },
            { id: `l01-q8`, format: `multiple-choice`,
              question: `If you write the number 6,000,000 in expanded form, what do you get?`,
              options: [
                `6 × 1,000`,
                `6 × 100,000`,
                `6 × 1,000,000`,
                `6 + 0 + 0 + 0 + 0 + 0 + 0`,
              ],
              correctIndex: 2,
              explanation: `6,000,000 = 6 × 1,000,000. The 6 is in the millions place, so it's six millions. Expanded form for a number like this is just the value of its one non-zero digit.` },
          ],
        },

        {
          id: `l01-reflection`,
          type: `reflection`,
          guideText: `Pick a prompt, {name}.`,
          prompts: [
            { id: `r1`, text: `What's the biggest number you can think of? Try to write it down and identify each place value.` },
            { id: `r2`, text: `If you were teaching place value to a younger kid, how would you explain it to them?` },
            { id: `r3`, text: `What surprised you most about how place value actually works?` },
            { id: `r4`, text: `Where else in your life do you see place value at work? (Hint: money, addresses, phone numbers, sports scores.)` },
          ],
        },

        {
          id: `l01-realworld`,
          type: `real-world`,
          guideText: `Place value is everywhere once you start looking. Population counts use it — the population of California is about 39,000,000, and you can break that down by place value to really understand the size. Money uses it — $1,250 has digits in specific places that matter. Phone numbers are technically just digits in positions. Computer storage uses place value (in base 2 instead of base 10, but the concept is the same). Once you really see place value, big numbers stop being intimidating.`,
          familyAdventure: `Together, find five different numbers around your house — receipts, addresses, kitchen scales, anything. For each number, identify which digit is in which place. Bonus challenge: rewrite at least one of them in expanded form.`,
          creativePrompt: {
            intro: `Imagine you've been hired to write a kid's book explaining place value. Describe the story, the characters, and how you'd help younger kids understand.`,
            floor: `Write at least 5 sentences.`,
            stretch: `Write 8-10 sentences with specific examples.`,
            open: `Write as much as you want — go big.`,
            frames: [
              `The main character of my book is ___.`,
              `The way I'd explain place value is ___.`,
              `One example I'd use is ___.`,
              `The mistake I'd warn kids about is ___.`,
              `My favorite part of place value is ___.`,
            ],
          },
        },

        {
          id: `l01-celebration`,
          type: `celebration`,
          message: `Great start, {name}. You can now identify the value of any digit in a number up to a million, write numbers in standard, word, and expanded form, compare numbers by place value, and explain why placeholder zeros matter. That's a real foundation — every math topic from here on builds on it. Next lesson, we use place value to do multi-digit addition and subtraction. — Remi.`,
          badge: `place-value-pro`,
          badgeName: `Place Value Pro`,
          xpEarned: 75,
        },
      ],
    },
  ],
};

export default MATH_UE_L01;
