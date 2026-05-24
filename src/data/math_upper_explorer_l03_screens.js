// ─────────────────────────────────────────────────────────────────────────────
// MATH UE  |  L03 — Multi-Digit Multiplication
// Age band : upper_explorers (9–10)   Guide: remi
// Standards: CCSS 4.NBT.B.5
// CALIBRATED: Math UE Spec v2
// Game format: problem-solving (Multiplying Bigger Numbers)
// Visual model: area-model
// Misconceptions: "add a zero to multiply by 10" (breaks for decimals later) /
//                 "you can just stack and multiply without place value thinking" /
//                 "carrying in multiplication mysteriously"
// ─────────────────────────────────────────────────────────────────────────────

const MATH_UE_L03 = {
  ageBand: `upper_explorers`,
  subjectId: `math`,
  guide: `remi`,

  lessons: [
    {
      id: `math-9-10-03`,
      title: `Multi-Digit Multiplication`,
      duration: 23,
      xpReward: 75,
      badge: `multiplication-master`,
      badgeName: `Multiplication Master`,

      screens: [
        {
          id: `l03-welcome`,
          type: `welcome`,
          guideText: `Welcome back, {name}. Today we tackle multi-digit multiplication. Like 27 × 18 or 134 × 6. These look intimidating, but they break down into simpler pieces you already know. I'll show you THREE ways to think about them — the area model, the partial products method, and the standard algorithm. Pick the one that clicks for you. There's no single right way to multiply.`,
          headline: `Multi-Digit Multiplication`,
          subtitle: `Three ways to handle bigger multiplications`,
          visual: `/ue-assets/math/l03-welcome.webp`,
        },

        {
          id: `l03-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `What Multiplication Really Means`,
          paragraphs: [
            `Multiplication is repeated addition. 4 × 5 means "five fours added together" — 4+4+4+4+4 = 20. That's it. For small numbers, you can think of it as groups. 4 × 5 is 4 groups of 5 cookies, or 5 groups of 4. Same total either way.`,
            `But what happens when the numbers get big? You don't want to add 27 + 27 + 27... eighteen times. That'd be miserable. So mathematicians figured out shortcuts that let you break BIG multiplications into SMALL multiplications, then add up the pieces. That's what today is about.`,
            `Here's the secret. Every multi-digit multiplication is just a bunch of simpler multiplications packaged together. If you know your basic multiplication facts (1×1 through 12×12), you have everything you need. Place value does the rest of the work.`,
          ],
          image: `/ue-assets/math/l03-s1-meaning.webp`,
          imageCaption: `Multiplication = repeated addition + place value shortcuts.`,
          vocab: [
            { word: `product`,
              definition: `The result of multiplying two or more numbers.`,
              audioPrompt: `Product is what you get when you multiply, {name}. The product of 4 and 5 is 20. The product of 27 and 18 is 486. When a problem asks "what is the product of...", it means "multiply these numbers." Knowing this word helps you understand what problems are asking for.` },
            { word: `factor`,
              definition: `A number that gets multiplied. In 4 × 5 = 20, both 4 and 5 are factors.`,
              audioPrompt: `Factors are the numbers being multiplied, {name}. In 4 × 5 = 20, both 4 and 5 are factors. They're the inputs. 20 is the output, which we call the product. The factors of a number are also all the numbers that divide into it evenly — but we'll get to that in a later lesson.` },
          ],
        },

        {
          id: `l03-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `The Area Model: See the Multiplication`,
          paragraphs: [
            `Here's the most visual way to think about multi-digit multiplication. Imagine 27 × 18 as a rectangle that's 27 units wide and 18 units tall. The total area of that rectangle IS the product. So how do we find the area?`,
            `Break the rectangle up. Split 27 into 20 + 7. Split 18 into 10 + 8. Now you have four smaller rectangles inside: 20×10, 20×8, 7×10, and 7×8. Each of those is way easier to calculate. 20×10 = 200. 20×8 = 160. 7×10 = 70. 7×8 = 56. Add them up: 200 + 160 + 70 + 56 = 486. That's the answer.`,
            `Why does this work? Because of the distributive property — when you multiply a sum by another sum, every part multiplies with every other part. 27 × 18 is the same as (20 + 7) × (10 + 8), which equals 20×10 + 20×8 + 7×10 + 7×8. The area model just SHOWS this visually. You see the whole rectangle and its four pieces. No magic, just place value structure made visible.`,
          ],
          image: `/ue-assets/math/l03-s2-area-model.webp`,
          imageCaption: `27 × 18 = (20+7) × (10+8) = 200 + 160 + 70 + 56 = 486.`,
          vocab: [
            { word: `area model`,
              definition: `A visual way to multiply by breaking each number into place value parts and seeing the multiplication as a rectangle made of smaller rectangles.`,
              audioPrompt: `The area model is a visual way to multiply, {name}. You draw the multiplication as a rectangle and split it into smaller rectangles based on place value. Each smaller rectangle is an easy multiplication. Add them all up and you get the total. The area model is great because it SHOWS you why multi-digit multiplication works. You're not following a mystery procedure — you're seeing the structure.` },
            { word: `distributive property`,
              definition: `When you multiply a number by a sum, you can multiply each part separately and add: 3 × (4 + 5) = 3×4 + 3×5.`,
              audioPrompt: `The distributive property says that multiplying a number by a sum is the same as multiplying it by each part of the sum and adding, {name}. So 3 × (4 + 5) equals 3 × 4 plus 3 × 5. That's 12 plus 15, which is 27. Same as 3 × 9 = 27. The distributive property is what makes the area model work — and what makes all multi-digit multiplication work, even when you don't notice it.` },
          ],
        },

        {
          id: `l03-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Three Ways to Get to the Same Answer`,
          paragraphs: [
            `Let's compute 27 × 18 three different ways. Same answer every time, but different paths.`,
            `Way 1 — Area model. Break into pieces: 20×10 + 20×8 + 7×10 + 7×8 = 200 + 160 + 70 + 56 = 486. We just did this.`,
            `Way 2 — Partial products. Stack 27 and 18 vertically. Multiply each digit by each digit. 27 × 8 = 216 (the partial product for the ones digit of 18). 27 × 10 = 270 (the partial product for the tens digit of 18). Add: 216 + 270 = 486.`,
            `Way 3 — Standard algorithm. Same idea as partial products, but more compact. Multiply 27 × 8 = 216 and write it. Multiply 27 × 1 = 27 — but since this 1 is actually a 10, you write 27 in the next row, shifted one place to the left (which makes it act like 270). Add: 216 + 270 = 486. All three methods, same answer, because they're all secretly the same math.`,
          ],
          image: `/ue-assets/math/l03-s3-three-ways.webp`,
          imageCaption: `Area model. Partial products. Standard algorithm. Same math, different views.`,
          vocab: [
            { word: `partial product`,
              definition: `A piece of a multiplication you calculate on the way to the final answer. The partial products of 27 × 18 are 27×8 = 216 and 27×10 = 270.`,
              audioPrompt: `A partial product is a piece of a multiplication, {name}. When you multiply 27 × 18, you don't do it all at once — you break it into smaller multiplications called partial products. 27 × 8 = 216 is one partial product. 27 × 10 = 270 is the other. You add the partial products to get the final answer. The standard algorithm uses partial products too, just more compactly.` },
            { word: `standard algorithm`,
              definition: `The traditional step-by-step procedure most people learn for a calculation, like the stacked method for multiplication.`,
              audioPrompt: `The standard algorithm for multiplication is the traditional stacked method, {name}. You multiply one digit at a time, carry when needed, and shift a row to the left for each place value. It works and it's fast — but it hides what's actually happening. The area model and partial products show you WHY it works. Once you see that, the standard algorithm becomes a shortcut you actually understand, not just a procedure to memorize.` },
          ],
        },

        {
          id: `l03-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `The "Add a Zero" Trick: When It Works and When It Breaks`,
          paragraphs: [
            `You may have heard: "to multiply by 10, just add a zero to the end." So 47 × 10 = 470. Quick and easy. And for whole numbers, the trick works.`,
            `But here's the thing. It's not actually about adding a zero — it's about every digit moving one place to the LEFT. Why? Because multiplying by 10 makes every part of the number 10 times bigger. The ones become tens, the tens become hundreds. A new zero shows up in the ones place because there are no more ones.`,
            `Why does this matter? Because next year, when you start multiplying DECIMALS like 0.5 × 10, the "add a zero" trick BREAKS. 0.5 × 10 isn't 0.50 — it's 5. (We'll cover that in detail later.) The "every digit moves left" idea always works, for whole numbers AND decimals. So even though the "add a zero" shortcut feels fast, learning the real reason now saves confusion later.`,
          ],
          image: `/ue-assets/math/l03-s4-shift-not-add.webp`,
          imageCaption: `Don't just "add a zero." Every digit shifts one place left. Same idea, future-proof.`,
          vocab: [
            { word: `multiplying by 10`,
              definition: `Makes every digit move one place to the left, with a new zero filling the ones place (for whole numbers).`,
              audioPrompt: `Multiplying by 10 makes every digit shift one place to the left, {name}. For whole numbers, that means a new zero appears in the ones place — which LOOKS like "adding a zero to the end." But that's not really what's happening. The digits are moving up the place value ladder. This matters because when decimals show up later, the "add a zero" trick stops working, but the "digits shift left" idea still does.` },
            { word: `power of ten`,
              definition: `10 multiplied by itself a certain number of times: 10¹=10, 10²=100, 10³=1,000, and so on.`,
              audioPrompt: `A power of ten is ten multiplied by itself some number of times, {name}. Ten to the first power is 10. Ten squared is 100. Ten cubed is 1,000. These are the place values — ones, tens, hundreds, thousands. The whole number system is built on powers of ten. When you multiply by 10, you move up one power. When you multiply by 100, you move up two powers. The pattern stays the same all the way up.` },
          ],
        },

        // ── PROBLEM-SOLVING GAME — Multiplying Bigger Numbers ────────────────
        {
          id: `l03-game`,
          type: `interactive`,
          format: `problem-solving`,
          guideText: `Time to work through some real multi-digit multiplications, {name}. I'll have you try the area model approach for most of them — once you see the structure, it becomes second nature. If you'd rather use the standard algorithm, that's fine — same answer either way.`,
          scenarioTitle: `Multiplying Bigger Numbers`,
          problems: [
            {
              id: `p1`,
              problemStatement: `A school orders 6 boxes of pencils. Each box has 134 pencils. How many pencils total?`,
              visual: {
                type: `area-model`,
                data: {
                  width: 134,
                  height: 6,
                  splitWidth: [100, 30, 4],
                  splitHeight: [6],
                  caption: `134 split into 100 + 30 + 4.`,
                },
              },
              approaches: [
                {
                  id: `approach-a`,
                  label: `Area model — split 134 into place values`,
                  description: `Break 134 into 100 + 30 + 4. Multiply each part by 6, then add.`,
                  steps: [
                    { prompt: `6 × 100 = ?`, answer: 600, hint: `6 of one hundred. Move 6 up two place values.` },
                    { prompt: `6 × 30 = ?`, answer: 180, hint: `6 × 3 = 18. Then it's 18 tens, which is 180.` },
                    { prompt: `6 × 4 = ?`, answer: 24, hint: `Basic multiplication fact.` },
                    { prompt: `Add the three partial products: 600 + 180 + 24 = ?`, answer: 804, hint: `Add them up carefully. Start with 600 + 180 = 780, then add 24.` },
                  ],
                  commonMistakes: [
                    { wrongAnswer: 18, explanation: `Looks like you forgot the place value. 6 × 30 isn't 18 — that's 6 × 3. We need 6 × 30, which is 10 times bigger.` },
                    { wrongAnswer: 794, explanation: `Close. Looks like the addition went a little off. Try 600 + 180 first, then add the 24.` },
                  ],
                },
              ],
              finalAnswer: 804,
              finalExplanation: `134 × 6 = 804 pencils. The area model worked perfectly here — split the bigger number by place value, multiply each piece, and add. Notice how each step was just a small multiplication you already knew.`,
            },
            {
              id: `p2`,
              problemStatement: `An auditorium has 27 rows of seats with 18 seats in each row. How many seats total?`,
              visual: {
                type: `area-model`,
                data: {
                  width: 27,
                  height: 18,
                  splitWidth: [20, 7],
                  splitHeight: [10, 8],
                  caption: `27 × 18 broken into 4 smaller rectangles.`,
                },
              },
              approaches: [
                {
                  id: `approach-a`,
                  label: `Area model — split both numbers into place values`,
                  description: `Break 27 into 20 + 7. Break 18 into 10 + 8. Multiply all four combinations, then add.`,
                  steps: [
                    { prompt: `20 × 10 = ?`, answer: 200, hint: `2 × 1 = 2, then add the right zeros: 200.` },
                    { prompt: `20 × 8 = ?`, answer: 160, hint: `2 × 8 = 16, then 16 tens = 160.` },
                    { prompt: `7 × 10 = ?`, answer: 70, hint: `7 ones × 10 = 7 tens = 70.` },
                    { prompt: `7 × 8 = ?`, answer: 56, hint: `Basic multiplication fact.` },
                    { prompt: `Add all four: 200 + 160 + 70 + 56 = ?`, answer: 486, hint: `Add carefully. 200 + 160 = 360. 360 + 70 = 430. 430 + 56 = 486.` },
                  ],
                  commonMistakes: [
                    { wrongAnswer: 226, explanation: `Looks like only some of the parts got added. With the area model for two 2-digit numbers, you need FOUR partial products. Make sure all 4 are included.` },
                    { wrongAnswer: 470, explanation: `Close — but a partial product got missed somewhere. Try writing all four out: 20×10, 20×8, 7×10, 7×8. Each one matters.` },
                  ],
                },
              ],
              finalAnswer: 486,
              finalExplanation: `27 × 18 = 486 seats. Both numbers got split into place values, and we had to do FOUR partial products. The area model makes this organized — every part of one number multiplies with every part of the other.`,
            },
            {
              id: `p3`,
              problemStatement: `A factory makes 215 toys every day. How many toys does it make in 4 days?`,
              visual: {
                type: `area-model`,
                data: {
                  width: 215,
                  height: 4,
                  splitWidth: [200, 10, 5],
                  splitHeight: [4],
                  caption: `215 split into 200 + 10 + 5.`,
                },
              },
              approaches: [
                {
                  id: `approach-a`,
                  label: `Area model — three pieces`,
                  description: `Split 215 into 200 + 10 + 5. Multiply each by 4.`,
                  steps: [
                    { prompt: `4 × 200 = ?`, answer: 800, hint: `4 × 2 = 8. Then 8 hundreds = 800.` },
                    { prompt: `4 × 10 = ?`, answer: 40, hint: `4 × 1 ten = 4 tens = 40.` },
                    { prompt: `4 × 5 = ?`, answer: 20, hint: `Basic multiplication fact.` },
                    { prompt: `Add: 800 + 40 + 20 = ?`, answer: 860, hint: `Start with 800 + 40 = 840. Then 840 + 20.` },
                  ],
                  commonMistakes: [
                    { wrongAnswer: 800, explanation: `Looks like only the hundreds piece was used. With 215, we have to break it into 200 + 10 + 5 — three pieces, not just one.` },
                  ],
                },
              ],
              finalAnswer: 860,
              finalExplanation: `215 × 4 = 860 toys. The area model handles 3-digit numbers just as easily — just split into 3 pieces instead of 2. The math stays the same.`,
            },
            {
              id: `p4`,
              problemStatement: `Multiply: 42 × 35`,
              visual: {
                type: `area-model`,
                data: {
                  width: 42,
                  height: 35,
                  splitWidth: [40, 2],
                  splitHeight: [30, 5],
                  caption: `42 × 35 — both split into tens and ones.`,
                },
              },
              approaches: [
                {
                  id: `approach-a`,
                  label: `Area model — four partial products`,
                  description: `Split 42 into 40 + 2. Split 35 into 30 + 5. Multiply all four.`,
                  steps: [
                    { prompt: `40 × 30 = ?`, answer: 1200, hint: `4 × 3 = 12. Then it's 12 with two more zeros — 1,200.` },
                    { prompt: `40 × 5 = ?`, answer: 200, hint: `4 × 5 = 20. Then 20 tens = 200.` },
                    { prompt: `2 × 30 = ?`, answer: 60, hint: `2 × 3 = 6, then 6 tens = 60.` },
                    { prompt: `2 × 5 = ?`, answer: 10, hint: `Basic multiplication fact.` },
                    { prompt: `Add: 1,200 + 200 + 60 + 10 = ?`, answer: 1470, hint: `1,200 + 200 = 1,400. 1,400 + 60 = 1,460. 1,460 + 10 = 1,470.` },
                  ],
                  commonMistakes: [
                    { wrongAnswer: 1200, explanation: `Looks like only the biggest piece got counted. Don't stop at 40 × 30 — there are 3 more partial products to add.` },
                    { wrongAnswer: 210, explanation: `That's roughly 42 + 35 added together, not multiplied. Multiplication is different — every part has to multiply with every other part.` },
                  ],
                },
              ],
              finalAnswer: 1470,
              finalExplanation: `42 × 35 = 1,470. Four partial products: 40×30=1200, 40×5=200, 2×30=60, 2×5=10. Sum them up and you get the answer. The area model keeps it organized — every part of one number gets multiplied by every part of the other.`,
            },
          ],
          completionMessage: `Solid work, {name}. You used the area model to multiply 2-digit and 3-digit numbers. Notice the structure — multi-digit multiplication is just a bunch of simpler multiplications, organized by place value. Once you see that, big multiplications stop feeling scary.`,
        },

        {
          id: `l03-quiz`,
          type: `quiz`,
          guideText: `Quick check, {name}.`,
          questions: [
            { id: `l03-q1`, format: `multiple-choice`,
              question: `In the multiplication 6 × 24 = 144, which number is the product?`,
              options: [`6`, `24`, `144`, `Both 6 and 24`],
              correctIndex: 2,
              explanation: `The product is the result of multiplying — 144 here. 6 and 24 are the factors (the numbers being multiplied).` },
            { id: `l03-q2`, format: `multiple-choice`,
              question: `What is 7 × 30?`,
              options: [`37`, `210`, `21`, `2100`],
              correctIndex: 1,
              explanation: `7 × 3 = 21. Then it's 21 tens, which is 210. Or: multiply by 30 means multiply by 3 then by 10. Either way: 210.` },
            { id: `l03-q3`, format: `multiple-choice`,
              question: `Using the area model for 23 × 14, how many partial products do you need to calculate?`,
              options: [`Two`, `Three`, `Four`, `Six`],
              correctIndex: 2,
              explanation: `Both factors are 2-digit, so you split each into 2 pieces. 2 pieces × 2 pieces = 4 partial products: 20×10, 20×4, 3×10, 3×4.` },
            { id: `l03-q4`, format: `multiple-choice`,
              question: `What is 35 × 12?`,
              options: [`420`, `82`, `400`, `415`],
              correctIndex: 0,
              explanation: `Area model: 30×10=300, 30×2=60, 5×10=50, 5×2=10. Sum: 300+60+50+10 = 420.` },
            { id: `l03-q5`, format: `true-false`,
              question: `True or false: Multiplying by 10 means every digit shifts one place to the left.`,
              correctAnswer: true,
              explanation: `True. The "add a zero" trick works for whole numbers because that's what shifting digits left looks like — a new zero appears in the ones place. But the real rule is the digits shifting.` },
            { id: `l03-q6`, format: `multiple-choice`,
              question: `What is the distributive property?`,
              options: [
                `Multiplying everything by zero`,
                `When you multiply a number by a sum, you can multiply each part separately and add`,
                `A property of square numbers`,
                `A type of triangle`,
              ],
              correctIndex: 1,
              explanation: `The distributive property says 3 × (4 + 5) = 3×4 + 3×5. This is what makes the area model work — every part of one number gets multiplied with every part of the other.` },
            { id: `l03-q7`, format: `multiple-choice`,
              question: `What is 124 × 5?`,
              options: [`520`, `620`, `129`, `625`],
              correctIndex: 1,
              explanation: `Break 124 into 100 + 20 + 4. Then 5 × 100 = 500, 5 × 20 = 100, 5 × 4 = 20. Sum: 500 + 100 + 20 = 620.` },
            { id: `l03-q8`, format: `multiple-choice`,
              question: `The area model works because of which property?`,
              options: [
                `Reversibility`,
                `Distributive property`,
                `Place value alone`,
                `Equality`,
              ],
              correctIndex: 1,
              explanation: `The distributive property is the math reason the area model works. Multiplying a sum by another sum equals the sum of all the partial products — exactly what the rectangle splits show visually.` },
          ],
        },

        {
          id: `l03-reflection`,
          type: `reflection`,
          guideText: `Pick a prompt, {name}.`,
          prompts: [
            { id: `r1`, text: `Which method clicked best for you — area model, partial products, or standard algorithm? Why?` },
            { id: `r2`, text: `Can you find a real situation in your life where you'd want to multiply two-digit numbers?` },
            { id: `r3`, text: `What's one thing about multiplication that you now understand better than before?` },
            { id: `r4`, text: `If you were teaching someone the area model, how would you explain it?` },
          ],
        },

        {
          id: `l03-realworld`,
          type: `real-world`,
          guideText: `Multi-digit multiplication shows up constantly. Calculating how many tiles you need for a floor (length × width). Figuring out total cost (price × quantity). Estimating distances (speed × time). Finding total seats in a venue. Any time you have groups of something, multiplication is the shortcut to a total. Doing it in your head feels like a superpower once it clicks.`,
          familyAdventure: `Together, find an area in your house and figure out how many small things would cover it. Maybe how many sticky notes would cover the fridge. Or how many tiles would cover a section of floor. Measure the length and width in some consistent unit, then multiply. You're using the area model in real life.`,
          creativePrompt: {
            intro: `Make up a word problem that uses multi-digit multiplication. Make it about a situation you actually find interesting.`,
            floor: `Write at least 5 sentences. Include the problem and the solution.`,
            stretch: `Write 8-10 sentences. Show your work using the area model.`,
            open: `Write as much as you want.`,
            frames: [
              `My problem is about ___.`,
              `The two factors are ___ and ___.`,
              `Breaking the first factor into place values: ___.`,
              `Breaking the second factor into place values: ___.`,
              `The partial products are ___.`,
              `Final answer: ___.`,
            ],
          },
        },

        {
          id: `l03-celebration`,
          type: `celebration`,
          message: `Real work, {name}. You can now multiply multi-digit numbers using the area model, understand WHY multi-digit multiplication works (distributive property), and recognize that "add a zero" is really "shift the digits left." Next lesson, we tackle division — the opposite move. — Remi.`,
          badge: `multiplication-master`,
          badgeName: `Multiplication Master`,
          xpEarned: 75,
        },
      ],
    },
  ],
};

export default MATH_UE_L03;
