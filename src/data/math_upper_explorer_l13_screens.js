// ─────────────────────────────────────────────────────────────────────────────
// MATH UE  |  L13 — Adding and Subtracting Unlike Fractions
// Age band : upper_explorers (9–10)   Guide: remi
// Standards: CCSS 5.NF.A.1
// CALIBRATED: Math UE Spec v2
// Game format: problem-solving
// Visual model: fraction-bar (with comparison mode)
// Misconceptions:
//   - "Just add tops and bottoms" (already addressed in L08, reinforced here)
//   - "Common denominator means add the denominators" (no — use a common multiple)
//   - "Always use LCD" (any common multiple works, LCD is just efficient)
// 2 VOCAB PER MAG SECTION FROM HERE FORWARD.
// ─────────────────────────────────────────────────────────────────────────────

const MATH_UE_L13 = {
  ageBand: `upper_explorers`,
  subjectId: `math`,
  guide: `remi`,

  lessons: [
    {
      id: `math-9-10-13`,
      title: `Adding and Subtracting Unlike Fractions`,
      duration: 23,
      xpReward: 75,
      badge: `common-denominator`,
      badgeName: `Common Denominator Master`,

      screens: [
        {
          id: `l13-welcome`,
          type: `welcome`,
          guideText: `Welcome back, {name}. Remember in L08, I said we'd come back to fractions with DIFFERENT denominators? Today's the day. Adding 1/2 + 1/3 is much trickier than adding 1/4 + 2/4. The pieces are different sizes — so we have to make them the same size before combining. Today you'll learn how, using the equivalent fractions skill from L07. Take your time. This builds directly on lessons you already know.`,
          headline: `Adding and Subtracting Unlike Fractions`,
          subtitle: `When the pieces are different sizes`,
          visual: `/ue-assets/math/l13-welcome.webp`,
        },

        {
          id: `l13-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `The Problem: You Can't Add Different-Sized Pieces`,
          paragraphs: [
            `Try to add 1/2 + 1/3 the L08 way: add the numerators, keep the denominator. That would give 2/5. WRONG. Let's see why.`,
            `Picture two pizzas, both the same size. Cut one in half — that's 1/2. Cut the other into thirds — that's 1/3. Now you have one big slice (the half) and one smaller slice (the third). They're different sizes. You can't just say "two slices total" because the slices aren't the same size. The "/5" answer would mean "fifths," but neither original fraction was a fifth.`,
            `Think of it like inches and centimeters. You can't add "3 inches + 2 centimeters = 5 something" without first converting one of them. Same with fractions — you can't add halves and thirds directly. You have to convert them to the same UNIT first. That same unit is called a COMMON DENOMINATOR.`,
          ],
          image: `/ue-assets/math/l13-s1-different.webp`,
          imageCaption: `1/2 + 1/3 ≠ 2/5. Different-sized pieces can't combine until you convert.`,
          vocab: [
            { word: `unlike denominators`,
              definition: `Two or more fractions with DIFFERENT denominators — different-sized pieces.`,
              audioPrompt: `Unlike denominators means fractions with different bottom numbers, {name}. 1/2 and 1/3 have unlike denominators — 2 and 3 are different. 3/4 and 5/8 have unlike denominators too. When fractions have unlike denominators, the pieces are different sizes, so you can't add or subtract directly. You have to convert them to a common denominator first. That's what this whole lesson is about.` },
            { word: `unit`,
              definition: `The kind of piece you're working with. In fractions, the denominator names the unit (halves, thirds, fourths, etc.).`,
              audioPrompt: `In fractions, the unit is what the denominator names, {name}. If the denominator is 2, the unit is "halves." If the denominator is 8, the unit is "eighths." You can only add or subtract fractions that have the SAME unit — just like you can only add 3 inches plus 2 inches to get 5 inches. If the units don't match, you have to convert first. Common denominator means same unit.` },
          ],
        },

        {
          id: `l13-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Finding a Common Denominator`,
          paragraphs: [
            `A common denominator is a number that BOTH original denominators can divide into evenly. For 1/2 and 1/3, we need a number that both 2 and 3 divide into. Try 6: 6 ÷ 2 = 3 (works), 6 ÷ 3 = 2 (works). 6 is a common denominator of 2 and 3.`,
            `How to find a common denominator: list the multiples of each denominator and find one they share. Multiples of 2: 2, 4, 6, 8, 10, 12. Multiples of 3: 3, 6, 9, 12. They share 6, 12, 18... The smallest shared multiple is 6. That's called the LEAST COMMON DENOMINATOR (LCD).`,
            `You don't HAVE to use the least common denominator — any common multiple works. But the LCD keeps your numbers smaller, which makes the rest easier. For 1/2 and 1/3, you could use 12 (works) or 18 (works), but 6 is cleanest.`,
          ],
          image: `/ue-assets/math/l13-s2-find-cd.webp`,
          imageCaption: `Multiples of 2: 2, 4, 6, 8... Multiples of 3: 3, 6, 9... Shared: 6.`,
          vocab: [
            { word: `common denominator`,
              definition: `A number that all the denominators in your problem divide into evenly. Used to make fractions comparable.`,
              audioPrompt: `A common denominator is a number that ALL the denominators in your problem divide into evenly, {name}. For 1/2 and 1/3, the number 6 works as a common denominator because both 2 and 3 divide into 6 evenly. Common denominators let you add and subtract fractions with different bottoms — you convert both fractions to use the common denominator, then combine them. It's the same idea as converting inches to centimeters before adding lengths.` },
            { word: `least common denominator (LCD)`,
              definition: `The smallest number that both denominators divide into. Makes the math cleanest.`,
              audioPrompt: `The least common denominator, or LCD, is the smallest number that all the denominators in your problem divide into evenly, {name}. For 1/2 and 1/3, the LCD is 6 — that's the smallest shared multiple. Using the LCD keeps the numbers smaller and the math cleaner. But you don't HAVE to use the LCD — any common denominator works. The LCD is just the most efficient choice.` },
          ],
        },

        {
          id: `l13-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Converting Each Fraction Using Equivalent Fractions`,
          paragraphs: [
            `Once you have a common denominator, convert each original fraction to use it. This is the equivalent fractions skill from L07 — multiply both numerator and denominator by the same number.`,
            `For 1/2 + 1/3 with common denominator 6: convert 1/2. We need denominator 6 instead of 2. What times 2 equals 6? Three. So multiply BOTH top and bottom by 3: 1/2 × 3/3 = 3/6. Convert 1/3. We need denominator 6 instead of 3. What times 3 equals 6? Two. Multiply both by 2: 1/3 × 2/2 = 2/6.`,
            `Now we have 3/6 + 2/6. Same-size pieces. Use the L08 rule: add numerators, keep denominator. 3/6 + 2/6 = 5/6. That's the answer. 1/2 + 1/3 = 5/6. We converted unlike fractions to like fractions, then added the easy way.`,
          ],
          image: `/ue-assets/math/l13-s3-convert.webp`,
          imageCaption: `1/2 → 3/6. 1/3 → 2/6. Now they have the same denominator. Add easily.`,
          vocab: [
            { word: `converting fractions`,
              definition: `Rewriting a fraction with a different denominator so it has the same value but a different name.`,
              audioPrompt: `Converting fractions means rewriting them with a different denominator while keeping the same value, {name}. 1/2 can be converted to 2/4, or 3/6, or 5/10 — all equivalent fractions with different denominators. Converting is the bridge between equivalent fractions and unlike-fraction arithmetic. When two fractions have different denominators, you convert both to a common denominator before adding or subtracting.` },
            { word: `multiplying by 1 in disguise`,
              definition: `When you multiply a fraction by 3/3 or 5/5 or any fraction equal to 1, you don't change its value — but you change how it's written.`,
              audioPrompt: `Multiplying by 1 in disguise is the secret behind equivalent fractions, {name}. 3/3 equals 1. 5/5 equals 1. 10/10 equals 1. So when you multiply a fraction by 3/3, you're multiplying by 1 — and multiplying anything by 1 doesn't change its value. But it DOES change how the fraction is written. This is why we can convert 1/2 to 3/6 — we multiplied by 3/3, which is 1, so the value stayed the same.` },
          ],
        },

        {
          id: `l13-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Subtraction Works the Same Way`,
          paragraphs: [
            `Subtracting unlike fractions follows the exact same process: find a common denominator, convert both fractions, then subtract numerators with the same denominator.`,
            `Example: 5/6 - 1/4. Common denominator for 6 and 4: list multiples. 6, 12, 18. 4, 8, 12. Shared: 12. Convert 5/6 to use denominator 12: multiply both by 2 (since 6 × 2 = 12). 5/6 × 2/2 = 10/12. Convert 1/4: multiply both by 3 (since 4 × 3 = 12). 1/4 × 3/3 = 3/12. Now subtract: 10/12 - 3/12 = 7/12.`,
            `Always check if your final answer can be simplified. 7/12 — 7 is prime, 12 has factors 1, 2, 3, 4, 6, 12. Common factor only 1. So 7/12 is already in simplest form. Done. The whole process is: common denominator, convert, operate, simplify. Four steps that work every time.`,
          ],
          image: `/ue-assets/math/l13-s4-subtract.webp`,
          imageCaption: `5/6 - 1/4 → 10/12 - 3/12 = 7/12. Same four steps work for subtraction.`,
          vocab: [
            { word: `simplifying`,
              definition: `Writing a fraction in its smallest equivalent form by dividing both numerator and denominator by their common factor.`,
              audioPrompt: `Simplifying is the last step after adding or subtracting unlike fractions, {name}. After you get your answer, check if both numerator and denominator share a common factor greater than 1. If they do, divide both by that factor. 4/8 simplifies to 1/2 (divide both by 4). 6/9 simplifies to 2/3 (divide both by 3). Simplifying doesn't change the value — just makes the fraction cleaner. Not every fraction can simplify — sometimes it's already in simplest form.` },
            { word: `four-step process`,
              definition: `Common denominator → convert each fraction → add or subtract numerators → simplify if possible.`,
              audioPrompt: `The four-step process for unlike fractions is, {name}: step one, find a common denominator. Step two, convert each fraction to use that common denominator. Step three, add or subtract the numerators (keep the denominator the same). Step four, simplify the answer if you can. This same four-step pattern works for every unlike-fraction problem you'll meet — from elementary school all the way through algebra. Learn it once, use it forever.` },
          ],
        },

        // ── PROBLEM-SOLVING GAME ──
        {
          id: `l13-game`,
          type: `interactive`,
          format: `problem-solving`,
          guideText: `Time to add and subtract unlike fractions, {name}. Four problems. Each one uses the four-step process: common denominator, convert, operate, simplify. Take your time — this is the most procedural lesson so far.`,
          scenarioTitle: `Unlike Fraction Math`,
          problems: [
            {
              id: `p1`,
              problemStatement: `Compute: 1/2 + 1/4`,
              visual: {
                type: `fraction-bar`,
                data: {
                  numerator: 3,
                  denominator: 4,
                  caption: `Find a common denominator first.`,
                },
              },
              approaches: [
                {
                  id: `approach-a`,
                  label: `Common denominator → convert → add → simplify`,
                  description: `Walk through the four steps.`,
                  steps: [
                    {
                      prompt: `What's a common denominator for 2 and 4? (The smallest one is best.)`,
                      answer: 4,
                      hint: `4 works because 4 ÷ 2 = 2 (yes) and 4 ÷ 4 = 1 (yes). Both denominators divide into 4.`,
                    },
                    {
                      prompt: `Convert 1/2 to a fraction with denominator 4. What's the new numerator? (Multiply both top and bottom by 2.)`,
                      answer: 2,
                      hint: `1/2 × 2/2 = 2/4. New numerator is 2.`,
                    },
                    {
                      prompt: `1/4 already has denominator 4 — no conversion needed. Now add: 2/4 + 1/4. Numerators: 2 + 1 = ?`,
                      answer: 3,
                      hint: `Add the tops.`,
                    },
                    {
                      prompt: `Result is 3/4. Can it be simplified? Check: do 3 and 4 share a common factor greater than 1? 3 is prime. Factors of 4 are 1, 2, 4. Type 0 if no, 1 if yes.`,
                      answer: 0,
                      hint: `3 and 4 share only 1 as a factor. So no simplification.`,
                    },
                  ],
                  commonMistakes: [
                    { wrongAnswer: 2, explanation: `Looks like you tried to add the original fractions directly: 1+1=2 over 2+4=6, giving 2/6. That's the L08 mistake — adding tops AND bottoms. Don't add denominators. Find a common one first.` },
                  ],
                },
              ],
              finalAnswer: 0,
              finalExplanation: `1/2 + 1/4 = 3/4. Common denominator 4, converted 1/2 to 2/4, then added: 2/4 + 1/4 = 3/4. Already in simplest form. Notice how 4 worked perfectly as a common denominator because 2 is a factor of 4.`,
            },
            {
              id: `p2`,
              problemStatement: `Compute: 1/3 + 1/4`,
              visual: {
                type: `fraction-bar`,
                data: {
                  numerator: 7,
                  denominator: 12,
                  caption: `Different denominators with no easy relationship.`,
                },
              },
              approaches: [
                {
                  id: `approach-a`,
                  label: `Find LCD, convert both, add`,
                  description: `When denominators don't share factors, multiply them for the LCD.`,
                  steps: [
                    {
                      prompt: `Common denominator for 3 and 4? They share no common factors, so multiply them: 3 × 4 = ?`,
                      answer: 12,
                      hint: `When denominators share no factors, multiply them.`,
                    },
                    {
                      prompt: `Convert 1/3 to /12. Multiply both top and bottom by 4 (since 3 × 4 = 12). New numerator: 1 × 4 = ?`,
                      answer: 4,
                      hint: `1 × 4.`,
                    },
                    {
                      prompt: `Convert 1/4 to /12. Multiply both by 3 (since 4 × 3 = 12). New numerator: 1 × 3 = ?`,
                      answer: 3,
                      hint: `1 × 3.`,
                    },
                    {
                      prompt: `Now add: 4/12 + 3/12 = ?/12. New numerator?`,
                      answer: 7,
                      hint: `4 + 3.`,
                    },
                    {
                      prompt: `Result is 7/12. Can it simplify? 7 is prime. 12 has factors 1, 2, 3, 4, 6, 12. Common factor greater than 1? Type 0 for no.`,
                      answer: 0,
                      hint: `7 and 12 share only 1.`,
                    },
                  ],
                  commonMistakes: [
                    { wrongAnswer: 7, explanation: `Looks like you added the original denominators (3 + 4 = 7) instead of multiplying for the LCD. Adding denominators doesn't work. To find an LCD with denominators that share no factors, MULTIPLY them.` },
                  ],
                },
              ],
              finalAnswer: 0,
              finalExplanation: `1/3 + 1/4 = 7/12. When denominators share no factors (like 3 and 4), their product (12) IS the LCD. Convert both, add numerators, keep denominator. 7/12 is already simplified — 7 is prime.`,
            },
            {
              id: `p3`,
              problemStatement: `Compute: 5/6 - 1/3`,
              visual: {
                type: `fraction-bar`,
                data: {
                  numerator: 1,
                  denominator: 2,
                  caption: `Subtracting unlike fractions.`,
                },
              },
              approaches: [
                {
                  id: `approach-a`,
                  label: `LCD → convert → subtract → simplify`,
                  description: `Same process, just subtracting at the end.`,
                  steps: [
                    {
                      prompt: `LCD for 6 and 3? 3 divides into 6 evenly, so 6 itself is the LCD. Answer:`,
                      answer: 6,
                      hint: `6 is already a multiple of 3 (since 6 = 3 × 2). So 6 works.`,
                    },
                    {
                      prompt: `5/6 already has denominator 6 — no conversion needed. Convert 1/3 to /6. Multiply both by 2: 1 × 2 = ?`,
                      answer: 2,
                      hint: `1 × 2.`,
                    },
                    {
                      prompt: `Now subtract: 5/6 - 2/6. Numerators: 5 - 2 = ?`,
                      answer: 3,
                      hint: `Subtract the tops.`,
                    },
                    {
                      prompt: `Result is 3/6. Can it simplify? Both 3 and 6 share factor 3. Divide both by 3: new numerator is 3 ÷ 3 = ?`,
                      answer: 1,
                      hint: `3 ÷ 3 = 1.`,
                    },
                  ],
                  commonMistakes: [],
                },
              ],
              finalAnswer: 1,
              finalExplanation: `5/6 - 1/3 = 3/6 = 1/2. After subtraction, 3/6 simplified to 1/2 (both divisible by 3). Always check for simplification at the end.`,
            },
            {
              id: `p4`,
              problemStatement: `Real-world problem: Anna ate 2/3 of a small pizza. Ben ate 1/4 of an identical small pizza. How much pizza did they eat in total?`,
              visual: {
                type: `fraction-bar`,
                data: {
                  numerator: 11,
                  denominator: 12,
                  caption: `2/3 + 1/4 in a real situation.`,
                },
              },
              approaches: [
                {
                  id: `approach-a`,
                  label: `Set up the addition, then four-step it`,
                  description: `Add 2/3 + 1/4.`,
                  steps: [
                    {
                      prompt: `LCD for 3 and 4? They share no factors, so multiply: 3 × 4 = ?`,
                      answer: 12,
                      hint: `3 × 4.`,
                    },
                    {
                      prompt: `Convert 2/3 to /12. Multiply both by 4: 2 × 4 = ?`,
                      answer: 8,
                      hint: `2 × 4.`,
                    },
                    {
                      prompt: `Convert 1/4 to /12. Multiply both by 3: 1 × 3 = ?`,
                      answer: 3,
                      hint: `1 × 3.`,
                    },
                    {
                      prompt: `Add: 8/12 + 3/12. New numerator: 8 + 3 = ?`,
                      answer: 11,
                      hint: `Add the tops.`,
                    },
                    {
                      prompt: `Result: 11/12. Can it simplify? 11 is prime. 12 has factors 1, 2, 3, 4, 6, 12. Type 0 for no.`,
                      answer: 0,
                      hint: `11 and 12 share only 1.`,
                    },
                  ],
                  commonMistakes: [],
                },
              ],
              finalAnswer: 0,
              finalExplanation: `2/3 + 1/4 = 11/12. They ate 11/12 of a pizza total — almost a whole pizza, just 1/12 short. Real-world unlike-fraction addition: figure out the operation, find the LCD, convert, combine, simplify.`,
            },
          ],
          completionMessage: `Solid work, {name}. You handled unlike fractions using the four-step process: common denominator, convert, operate, simplify. This is the same process you'll use through middle school and beyond. The fraction arc is now complete on the addition/subtraction side.`,
        },

        {
          id: `l13-quiz`,
          type: `quiz`,
          guideText: `Quick check, {name}.`,
          questions: [
            { id: `l13-q1`, format: `multiple-choice`,
              question: `What is the LCD of 3 and 6?`,
              options: [`3`, `6`, `9`, `18`],
              correctIndex: 1,
              explanation: `6 is the LCD. 6 ÷ 3 = 2 (works) and 6 ÷ 6 = 1 (works). Both denominators divide into 6 evenly, and 6 is the smallest such number.` },
            { id: `l13-q2`, format: `multiple-choice`,
              question: `What is 1/2 + 1/3?`,
              options: [`2/5`, `2/6`, `5/6`, `1/5`],
              correctIndex: 2,
              explanation: `Common denominator 6. Convert: 1/2 = 3/6 and 1/3 = 2/6. Add: 3/6 + 2/6 = 5/6.` },
            { id: `l13-q3`, format: `multiple-choice`,
              question: `Why can't you just add the denominators when fractions have different bottoms?`,
              options: [
                `You can, it's fine`,
                `Because different denominators mean different-sized pieces, and you can only combine same-sized pieces`,
                `Math is broken`,
                `It doesn't matter`,
              ],
              correctIndex: 1,
              explanation: `Different denominators mean different-sized pieces. You can't directly add halves and thirds — they're different units. You have to convert first.` },
            { id: `l13-q4`, format: `multiple-choice`,
              question: `What is 3/4 - 1/2?`,
              options: [`1/4`, `2/2`, `2/4`, `1/2`],
              correctIndex: 0,
              explanation: `Common denominator 4. Convert 1/2 to 2/4. Then 3/4 - 2/4 = 1/4. Already simplified.` },
            { id: `l13-q5`, format: `true-false`,
              question: `True or false: You can use any common denominator, but the LCD is usually easiest.`,
              correctAnswer: true,
              explanation: `True. Any common multiple of the denominators works. The LCD (smallest one) keeps the numbers smaller and the math easier. But other common denominators give the same final answer.` },
            { id: `l13-q6`, format: `multiple-choice`,
              question: `What is 1/4 + 2/3?`,
              options: [`3/7`, `3/12`, `11/12`, `7/12`],
              correctIndex: 2,
              explanation: `LCD for 4 and 3 is 12. Convert: 1/4 = 3/12 and 2/3 = 8/12. Add: 3/12 + 8/12 = 11/12.` },
            { id: `l13-q7`, format: `multiple-choice`,
              question: `What's the LAST step in the four-step process?`,
              options: [
                `Find common denominator`,
                `Convert fractions`,
                `Add or subtract numerators`,
                `Simplify the answer`,
              ],
              correctIndex: 3,
              explanation: `Simplify the answer (if possible). The full process: common denominator → convert → add/subtract → simplify.` },
            { id: `l13-q8`, format: `multiple-choice`,
              question: `What is 5/6 - 1/4 (in simplest form)?`,
              options: [`4/12`, `7/12`, `1/2`, `5/24`],
              correctIndex: 1,
              explanation: `LCD for 6 and 4 is 12. Convert: 5/6 = 10/12, 1/4 = 3/12. Subtract: 10/12 - 3/12 = 7/12. 7 is prime, so 7/12 is already simplified.` },
          ],
        },

        {
          id: `l13-reflection`,
          type: `reflection`,
          guideText: `Pick a prompt, {name}.`,
          prompts: [
            { id: `r1`, text: `Why is finding a common denominator the hardest step for most kids? What's tricky about it?` },
            { id: `r2`, text: `In real life, when have you had to combine "different units"? (Like inches and centimeters, or hours and minutes.)` },
            { id: `r3`, text: `Which is easier — finding the LCD or converting both fractions? Why?` },
            { id: `r4`, text: `What's one fraction mistake you used to make that you now know how to avoid?` },
          ],
        },

        {
          id: `l13-realworld`,
          type: `real-world`,
          guideText: `Adding unlike fractions shows up in cooking (combining 1/2 cup and 1/3 cup), measuring (3/4 inch + 1/2 inch), time (3/4 hour + 1/3 hour), and lots of other places. The common-denominator skill is fundamental — once you have it, fractions stop being scary. It's the cognitive skill that separates "I get fractions" from "fractions confuse me."`,
          familyAdventure: `Together, find two recipes (or sections of one recipe) that use different fractional amounts. Add them. For example, if one recipe needs 1/2 cup of butter and another needs 1/4 cup, how much butter total? Use real fractions in real situations.`,
          creativePrompt: {
            intro: `Make up a word problem that requires adding (or subtracting) unlike fractions. Make the four-step process visible in your solution.`,
            floor: `Write at least 5 sentences. Include the problem and the four steps.`,
            stretch: `Write 8-10 sentences. Explain why a common denominator is needed.`,
            open: `Write as much as you want.`,
            frames: [
              `My problem is about ___.`,
              `The two fractions are ___ and ___.`,
              `Common denominator: ___.`,
              `Converted: ___ and ___.`,
              `Final answer: ___.`,
            ],
          },
        },

        {
          id: `l13-celebration`,
          type: `celebration`,
          message: `Real progress, {name}. You can now add and subtract unlike fractions using the four-step process. This is the skill that most adults forget or never fully got — you've got it. Next lesson, the fraction arc CLOSES with multiplying and dividing fractions, where you'll see division by a fraction make the result BIGGER. — Remi.`,
          badge: `common-denominator`,
          badgeName: `Common Denominator Master`,
          xpEarned: 75,
        },
      ],
    },
  ],
};

export default MATH_UE_L13;
