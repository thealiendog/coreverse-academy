// ─────────────────────────────────────────────────────────────────────────────
// MATH UE  |  L20 — Math in the Real World (CAPSTONE)
// Age band : upper_explorers (9–10)   Guide: remi
// Standards: Multi-standard synthesis across the whole Math UE band
// CALIBRATED: Math UE Spec v2
// ELEVATED LESSON (following SS UE L20 pattern):
//   - Duration: 28 minutes (vs standard 22-24)
//   - XP: 100 (vs standard 75)
//   - Quiz: 12 questions (vs standard 8)
//   - Reflection: 5 prompts (vs standard 4)
//   - 4 capstone problems pulling from across the WHOLE band
// Game format: problem-solving
// Visual model: varied (each problem uses what's most appropriate)
// PROBLEM SYNTHESIS:
//   Problem 1: Place value + multi-digit arithmetic (L01-L04 review)
//   Problem 2: Fractions + decimals (L07-L14 review)
//   Problem 3: Geometry + measurement (L15-L17 review)
//   Problem 4: Coordinate plane + algebra (L18-L19 review)
// ─────────────────────────────────────────────────────────────────────────────

const MATH_UE_L20 = {
  ageBand: `upper_explorers`,
  subjectId: `math`,
  guide: `remi`,

  lessons: [
    {
      id: `math-9-10-20`,
      title: `Math in the Real World (Capstone)`,
      duration: 28,
      xpReward: 100,
      badge: `math-master-ue`,
      badgeName: `Math Master`,

      screens: [
        {
          id: `l20-welcome`,
          type: `welcome`,
          guideText: `Welcome to the final lesson of Math UE, {name}. Today's the capstone — a chance to use everything you've learned across the 19 previous lessons in real-world problems. Place value, fractions, decimals, geometry, algebra — all of it together. This lesson is longer than usual, but you're ready. After this, you'll have completed the whole Math UE band. Let's go.`,
          headline: `Math in the Real World`,
          subtitle: `Everything you've learned — together`,
          visual: `/ue-assets/math/l20-welcome.webp`,
        },

        {
          id: `l20-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Looking Back at the Journey`,
          paragraphs: [
            `In Lessons 1-4, you mastered the four big operations on whole numbers: place value up to 1,000,000, multi-digit addition and subtraction (including borrowing across zeros), multi-digit multiplication (with the area model), and multi-digit division (with partial quotients).`,
            `In Lessons 5-9, you explored numerical structure: factors, multiples, and primes; patterns and rules (arithmetic vs geometric); fractions as ONE quantity; and the start of fraction multiplication. You learned why "bigger denominator means smaller piece."`,
            `In Lessons 10-14, you mastered decimals and finished the fraction arc: decimal place values, decimal addition/subtraction with alignment, decimal multiplication, unlike fraction addition (the four-step process), and multiplying/dividing fractions. You busted both major math myths: "multiplication makes bigger" and "division makes smaller" — both untrue.`,
            `In Lessons 15-19, you stepped into more abstract territory: geometric vocabulary (lines, angles, triangles, symmetry), area/perimeter/volume measurement, customary and metric unit conversion, the coordinate plane, and the start of algebra with variables. You learned how to think with letters that stand for numbers — the doorway into all advanced math.`,
            `Now we apply ALL of this to real-world problems. That's what today is about.`,
          ],
          image: `/ue-assets/math/l20-s1-journey.webp`,
          imageCaption: `19 lessons. Every operation, every concept. All ready to use.`,
          vocab: [
            { word: `synthesis`,
              definition: `Putting different pieces of knowledge together to solve a complex problem.`,
              audioPrompt: `Synthesis is putting different pieces of knowledge together, {name}. In math, synthesis means using multiple skills to solve one problem — like combining fractions and division to solve a recipe scaling problem, or using place value AND multi-digit subtraction together for a money problem. Real-world problems usually require synthesis because they don't come in neat single-skill packages. This whole lesson is about practicing synthesis.` },
            { word: `capstone`,
              definition: `The final, culminating piece of a course or project. The "top" of the structure.`,
              audioPrompt: `A capstone is the final, culminating piece of a course or learning journey, {name}. The word comes from the actual capstone of a building — the top stone that completes a structure. A capstone lesson pulls together everything from before. Today is your Math UE capstone. After this, the structure is complete. Every wall, every floor, every level — finished. You're at the top.` },
          ],
        },

        {
          id: `l20-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Real-World Problems Don't Come With Labels`,
          paragraphs: [
            `Here's the difference between school math and real-world math. In school, problems come labeled: "Multi-digit subtraction problems below." "Now do this fraction worksheet." You always know what operation to use because the lesson tells you.`,
            `In the real world, NOTHING tells you. You see a situation — a recipe, a shopping bill, a measurement, a graph — and YOU have to figure out which math tools apply. Sometimes a problem needs multiplication AND fractions AND maybe geometry, all in one. There's no answer key telling you the strategy.`,
            `That's the skill we practice today. Reading a situation. Identifying which math tools could help. Pulling those tools out of your kit. Working through the problem step by step. Checking that your answer makes sense in the real-world context.`,
          ],
          image: `/ue-assets/math/l20-s2-no-labels.webp`,
          imageCaption: `Real life doesn't label problems. You decide which tools to use.`,
          vocab: [
            { word: `problem identification`,
              definition: `Looking at a real-world situation and figuring out which math operations and concepts apply.`,
              audioPrompt: `Problem identification is the skill of looking at a real-world situation and figuring out what math is needed, {name}. A recipe that needs to be scaled? That's fraction multiplication. Figuring out how much paint to buy? That's area. Calculating change at a store? That's decimal subtraction. The skill isn't doing the math — it's RECOGNIZING which math to do. Once you identify the right tool, the work usually flows naturally.` },
            { word: `mathematical modeling`,
              definition: `Using math to represent and solve a real-world problem. Equations, formulas, graphs — all forms of modeling.`,
              audioPrompt: `Mathematical modeling is using math to represent a real-world problem, {name}. You take something physical or practical and translate it into equations, formulas, or graphs. Like turning "I save $5 each week and need $200" into the equation 5 × weeks = 200. The MATH becomes a tool to solve the SITUATION. All of science, engineering, and economics uses mathematical modeling. It's one of the most powerful ideas in math.` },
          ],
        },

        {
          id: `l20-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Strategy: Read Twice, Solve Once`,
          paragraphs: [
            `Here's a strategy that helps with every real-world math problem. READ TWICE, SOLVE ONCE.`,
            `First read: figure out the situation. What's happening? Who's involved? What's the goal? Don't try to math anything yet — just understand the story.`,
            `Second read: identify the math. What numbers are given? What operation makes sense? Is there one step or multiple? What's the unit of the answer (dollars, feet, hours)?`,
            `Now solve. Set up the calculations. Work through them carefully. When you have an answer, ask: "Does this make sense?" If you calculated that a person walked 800 miles in an hour, something's wrong. Real-world checks catch math mistakes that pure arithmetic checks don't.`,
          ],
          image: `/ue-assets/math/l20-s3-strategy.webp`,
          imageCaption: `Read twice. Understand. Identify the math. Solve. Check it makes sense.`,
          vocab: [
            { word: `reasonable answer`,
              definition: `An answer that makes sense in the real-world context of the problem. Not just mathematically correct but realistic.`,
              audioPrompt: `A reasonable answer is one that makes sense in the real-world context, {name}. If a problem says you're calculating how much grass seed for a yard and you get 50,000 square feet, that's not reasonable — most yards aren't that big. Real-world math has built-in sanity checks. Always ask: "Is this answer realistic?" If not, double-check your work. Reasonable answer checks catch lots of math mistakes that pure calculation checks miss.` },
            { word: `multi-step problem`,
              definition: `A problem that requires more than one operation or step to solve. Most real-world problems are multi-step.`,
              audioPrompt: `A multi-step problem requires more than one operation to solve, {name}. Like: "You buy 3 items at $4.95 each and pay with $20. How much change?" That's two steps — first multiply (3 × 4.95) to find total cost, then subtract from $20 for change. Real-world problems are usually multi-step because real situations involve multiple things happening. Pace yourself, do one step at a time, don't try to do it all at once.` },
          ],
        },

        {
          id: `l20-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `What Math Master Means`,
          paragraphs: [
            `After today, you've earned the title "Math Master" for the UE band. What does that actually mean?`,
            `It means you can do the math any 9-10 year old in the US should be able to do — and quite a bit more. Place value, multi-digit operations, fractions in all four operations, decimals, basic geometry, coordinate plane, intro algebra. That's a serious foundation.`,
            `It also means you've been taught math the RIGHT way — with understanding, not just procedures. You know WHY multi-digit multiplication works (distributive property). You know WHY adding fractions needs common denominators (different-sized pieces). You know WHY multiplication doesn't always make bigger (multiplier rules). You're not just doing math — you're thinking mathematically. That's the real difference.`,
            `What comes next? Voyager band (ages 11-12) goes into integers, ratios, percentages, more complex algebra. Middle school. Then high school. Then everywhere. But the foundation is here. You built it. You own it. Now use it.`,
          ],
          image: `/ue-assets/math/l20-s4-master.webp`,
          imageCaption: `Math Master: not just procedures, but UNDERSTANDING. That's the real skill.`,
          vocab: [
            { word: `foundation`,
              definition: `The base on which everything else is built. Math UE is the foundation for all the math that comes after.`,
              audioPrompt: `A foundation is the base on which everything is built, {name}. In math, the elementary years build the foundation. Place value, operations, fractions, decimals, geometry, algebra basics — all foundational. Without these, middle school and high school math becomes incredibly hard. With them, the rest is built on something solid. You just finished building one of the most important foundations of your entire education. Use it well.` },
            { word: `mathematical thinking`,
              definition: `Thinking with logic, structure, and reasoning — the deeper skill behind doing math operations.`,
              audioPrompt: `Mathematical thinking is the deeper skill behind doing operations, {name}. It's logical reasoning, looking for patterns, breaking complex problems into smaller pieces, finding multiple ways to solve, and checking answers for sense. Mathematical thinking applies WAY beyond math class — it helps with science, programming, planning projects, even arguments. Math is partly about numbers and partly about HOW you think. The thinking part is the real treasure.` },
          ],
        },

        // ── CAPSTONE PROBLEM-SOLVING GAME ──
        // Four problems, each drawing from a different cluster of past lessons
        {
          id: `l20-game`,
          type: `interactive`,
          format: `problem-solving`,
          guideText: `Capstone time, {name}. Four problems. Each one pulls from a different part of what you've learned. Take your time. The hint button is always there. Read each problem twice before starting.`,
          scenarioTitle: `The Capstone Challenge`,
          problems: [
            // Problem 1: PLACE VALUE + MULTI-DIGIT ARITHMETIC (L01-L04)
            {
              id: `p1`,
              problemStatement: `A library has 12,456 books. Last month they added 1,283 new books and got rid of 478 old ones. How many books does the library have now? (Two-step problem.)`,
              visual: {
                type: `place-value-blocks`,
                data: {
                  number: 13261,
                  caption: `Two-step: add the new ones, subtract the old ones.`,
                },
              },
              approaches: [
                {
                  id: `approach-a`,
                  label: `Add new books, then subtract old`,
                  description: `Step 1: total after additions. Step 2: subtract removals.`,
                  steps: [
                    {
                      prompt: `First add the new books. 12,456 + 1,283. Ones: 6 + 3 = ?`,
                      answer: 9,
                      hint: `Just add the ones.`,
                    },
                    {
                      prompt: `Tens: 5 + 8 = ?`,
                      answer: 13,
                      hint: `13 — write 3, carry 1.`,
                    },
                    {
                      prompt: `Write 3 in tens, carry 1 to hundreds. Hundreds: 4 + 2 + 1 (carry) = ?`,
                      answer: 7,
                      hint: `4 + 2 + 1.`,
                    },
                    {
                      prompt: `Thousands: 2 + 1 = ?`,
                      answer: 3,
                      hint: `2 + 1.`,
                    },
                    {
                      prompt: `Ten thousands: 1 + 0 = 1. So total after additions: 13,739. Now subtract 478. Ones: 9 - 8 = ?`,
                      answer: 1,
                      hint: `9 - 8.`,
                    },
                    {
                      prompt: `Tens: 3 - 7 — need to borrow. Hundreds becomes 6 (was 7), tens becomes 13. 13 - 7 = ?`,
                      answer: 6,
                      hint: `After borrowing, 13 - 7 = 6.`,
                    },
                    {
                      prompt: `Hundreds: now 6 - 4 = ?`,
                      answer: 2,
                      hint: `6 - 4 (after the borrow).`,
                    },
                  ],
                  commonMistakes: [
                    { wrongAnswer: 14201, explanation: `Looks like you added both numbers (new + old). The problem said the library GOT RID of 478 — that's a subtraction, not an addition.` },
                  ],
                },
              ],
              finalAnswer: 2,
              finalExplanation: `13,739 - 478 = 13,261 books. Two-step problem: first add new books (12,456 + 1,283 = 13,739), then subtract old ones (13,739 - 478 = 13,261). Multi-step problems need careful reading and step-by-step execution. Skills used: multi-digit addition, multi-digit subtraction with borrowing.`,
            },
            // Problem 2: FRACTIONS + DECIMALS (L07-L14)
            {
              id: `p2`,
              problemStatement: `A recipe calls for 3/4 cup of flour. You want to triple the recipe. How many cups of flour do you need total?`,
              visual: {
                type: `fraction-bar`,
                data: {
                  numerator: 9,
                  denominator: 4,
                  caption: `3/4 × 3 — fraction × whole number.`,
                },
              },
              approaches: [
                {
                  id: `approach-a`,
                  label: `Multiply 3/4 by 3 (whole number × fraction)`,
                  description: `Apply the L09 rule: multiply whole number by numerator, keep denominator.`,
                  steps: [
                    {
                      prompt: `3 × 3/4 means: multiply 3 by the numerator. 3 × 3 = ?`,
                      answer: 9,
                      hint: `3 × 3.`,
                    },
                    {
                      prompt: `Keep the denominator. Result is ?/4`,
                      answer: 4,
                      hint: `Denominator stays 4.`,
                    },
                    {
                      prompt: `9/4 is improper. Convert to mixed number: how many full 4s in 9?`,
                      answer: 2,
                      hint: `9 ÷ 4 = 2 with remainder.`,
                    },
                    {
                      prompt: `Remainder: 9 - 8 = ?`,
                      answer: 1,
                      hint: `9 - 8.`,
                    },
                  ],
                  commonMistakes: [
                    { wrongAnswer: 12, explanation: `Looks like you multiplied 3 × 4 (the denominator). When multiplying a whole number by a fraction, multiply the whole number by the NUMERATOR. Keep the denominator the same.` },
                  ],
                },
              ],
              finalAnswer: 1,
              finalExplanation: `You need 9/4 cups = 2 and 1/4 cups of flour. Multiplied 3 × 3/4 by the L09 rule, then converted improper fraction to mixed number. Real-world recipe scaling. Skills used: fraction × whole number, improper fractions, mixed numbers.`,
            },
            // Problem 3: GEOMETRY + MEASUREMENT (L15-L17)
            {
              id: `p3`,
              problemStatement: `A rectangular swimming pool is 8 yards long and 5 yards wide. (a) What's its area in square yards? (b) Convert that area to square FEET. (Hint: 1 yard = 3 feet, so 1 square yard = 9 square feet.)`,
              visual: {
                type: `array`,
                data: {
                  rows: 5,
                  cols: 8,
                  caption: `Area in sq yards, then convert.`,
                },
              },
              approaches: [
                {
                  id: `approach-a`,
                  label: `Calculate area, then convert units`,
                  description: `Step 1: area in sq yards. Step 2: multiply by 9 to get sq feet.`,
                  steps: [
                    {
                      prompt: `Area = length × width. 8 × 5 = ?`,
                      answer: 40,
                      hint: `8 × 5.`,
                    },
                    {
                      prompt: `40 square yards. Now convert to square feet. 1 square yard = 9 square feet. So 40 × 9 = ?`,
                      answer: 360,
                      hint: `40 × 9. (Or 4 × 9 = 36, then add a zero: 360.)`,
                    },
                  ],
                  commonMistakes: [
                    { wrongAnswer: 120, explanation: `Looks like you multiplied 40 × 3 (yards to feet, NOT square yards to square feet). When converting AREA, you multiply by the conversion factor SQUARED. 1 yd = 3 ft, so 1 sq yd = 3² = 9 sq ft.` },
                  ],
                },
              ],
              finalAnswer: 360,
              finalExplanation: `Pool area: 40 sq yards = 360 sq feet. Why × 9 (not × 3)? Because area is 2-dimensional. 1 yard = 3 feet, so a 1×1 yard square is a 3×3 foot square (9 sq ft). When you convert area units, multiply by the conversion factor SQUARED. Skills used: rectangle area, multi-digit multiplication, unit conversion thinking.`,
            },
            // Problem 4: COORDINATE PLANE + ALGEBRA (L18-L19)
            {
              id: `p4`,
              problemStatement: `You're tracking your reading progress. After week 1 you'd read 15 books. After week 2 you'd read 28 books. Suppose your reading rate is steady. Set up an equation for "books after w weeks" where x is the number of books you read per week. If you read 13 books per week (which is what these data show), how many books would you have after 5 weeks? (Assume the pattern started at zero — so y = wx.)`,
              visual: {
                type: `coordinate-grid`,
                data: {
                  xMax: 6,
                  yMax: 80,
                  points: [
                    { x: 1, y: 15, label: `W1` },
                    { x: 2, y: 28, label: `W2` },
                    { x: 5, y: 65, label: `W5` },
                  ],
                  lines: [
                    { from: 0, to: 1 },
                    { from: 1, to: 2 },
                  ],
                  caption: `Books read over weeks.`,
                },
              },
              approaches: [
                {
                  id: `approach-a`,
                  label: `Use the formula y = w × x (where x is books per week)`,
                  description: `Plug in w = 5 and x = 13 to find y.`,
                  steps: [
                    {
                      prompt: `The formula: y = w × x. We're told x = 13 (books per week) and w = 5 (weeks). What's 5 × 13?`,
                      answer: 65,
                      hint: `5 × 13. Or 5 × 10 + 5 × 3 = 50 + 15 = 65.`,
                    },
                    {
                      prompt: `So after 5 weeks, you'd have read 65 books. Look at the graph — is the point (5, 65) on the line? Type 1 for yes.`,
                      answer: 1,
                      hint: `The W5 point on the graph should be at (5, 65).`,
                    },
                  ],
                  commonMistakes: [],
                },
              ],
              finalAnswer: 1,
              finalExplanation: `After 5 weeks at 13 books per week, y = 5 × 13 = 65 books. We used a variable equation (y = w × x) to model a real-world pattern, then plugged in the values. The graph shows the same data visually. Skills used: algebra (variables in a formula), multi-digit multiplication, coordinate plane reading.`,
            },
          ],
          completionMessage: `MATH UE CAPSTONE COMPLETE, {name}. You handled multi-step real-world problems pulling from across the entire band. You set up equations, applied operations, converted units, read graphs, and used variables. Every skill from the past 19 lessons just came together. You did it.`,
        },

        // 12-question quiz (elevated from standard 8)
        {
          id: `l20-quiz`,
          type: `quiz`,
          guideText: `Capstone quiz, {name}. 12 questions covering everything from the whole band. Take your time.`,
          questions: [
            { id: `l20-q1`, format: `multiple-choice`,
              question: `What is the value of the 7 in 47,503?`,
              options: [`7`, `70`, `700`, `7,000`],
              correctIndex: 3,
              explanation: `The 7 is in the thousands place. Its value is 7,000.` },
            { id: `l20-q2`, format: `multiple-choice`,
              question: `What is 845 - 367?`,
              options: [`478`, `488`, `578`, `522`],
              correctIndex: 0,
              explanation: `Borrow as needed. 845 - 367 = 478.` },
            { id: `l20-q3`, format: `multiple-choice`,
              question: `27 × 14 = ?`,
              options: [`108`, `378`, `408`, `2,714`],
              correctIndex: 1,
              explanation: `Area model: 20×10=200, 20×4=80, 7×10=70, 7×4=28. Total 378.` },
            { id: `l20-q4`, format: `multiple-choice`,
              question: `Which is bigger: 1/3 or 1/5?`,
              options: [`1/5 (5 > 3)`, `1/3 (smaller denominator)`, `They're equal`, `Can't tell`],
              correctIndex: 1,
              explanation: `1/3 — bigger denominator means smaller piece. 1/3 > 1/5.` },
            { id: `l20-q5`, format: `multiple-choice`,
              question: `What is 1/2 + 1/4?`,
              options: [`2/6`, `3/4`, `1/8`, `1/6`],
              correctIndex: 1,
              explanation: `Common denominator 4. Convert: 1/2 = 2/4. Add: 2/4 + 1/4 = 3/4.` },
            { id: `l20-q6`, format: `multiple-choice`,
              question: `0.5 × 0.4 = ?`,
              options: [`2.0`, `0.20`, `20`, `0.02`],
              correctIndex: 1,
              explanation: `5 × 4 = 20. Total decimal places: 2. Answer: 0.20 (or 0.2). SMALLER than both factors.` },
            { id: `l20-q7`, format: `multiple-choice`,
              question: `What is 6 ÷ 1/2?`,
              options: [`3`, `6/2`, `12`, `1/12`],
              correctIndex: 2,
              explanation: `Keep-change-flip: 6/1 × 2/1 = 12. Bigger than 6 — because dividing by a fraction less than 1 grows.` },
            { id: `l20-q8`, format: `multiple-choice`,
              question: `An equilateral triangle has how many lines of symmetry?`,
              options: [`1`, `2`, `3`, `0`],
              correctIndex: 2,
              explanation: `An equilateral triangle has 3 lines of symmetry (through each vertex to the midpoint of the opposite side).` },
            { id: `l20-q9`, format: `multiple-choice`,
              question: `A rectangle is 9 ft by 4 ft. What's its perimeter?`,
              options: [`13 ft`, `26 ft`, `36 ft²`, `26 ft²`],
              correctIndex: 1,
              explanation: `Perimeter = 2 × (9 + 4) = 2 × 13 = 26 ft. (Don't confuse with area = 36 sq ft.)` },
            { id: `l20-q10`, format: `multiple-choice`,
              question: `How many inches are in 3 yards?`,
              options: [`36`, `108`, `9`, `3.6`],
              correctIndex: 1,
              explanation: `3 yards × 3 ft/yard × 12 in/ft = 108 inches. Or directly: 1 yard = 36 inches, so 3 yards = 108 inches.` },
            { id: `l20-q11`, format: `multiple-choice`,
              question: `On a coordinate plane, where is the point (4, 2)?`,
              options: [
                `4 right, 2 up from origin`,
                `2 right, 4 up from origin`,
                `4 up, 2 right from origin`,
                `Always at the center`,
              ],
              correctIndex: 0,
              explanation: `X first (4 right), then Y (2 up). Order matters in coordinates.` },
            { id: `l20-q12`, format: `multiple-choice`,
              question: `Solve: x + 7 = 19. What is x?`,
              options: [`7`, `12`, `19`, `26`],
              correctIndex: 1,
              explanation: `Subtract 7 from both sides: x = 19 - 7 = 12. Check: 12 + 7 = 19 ✓.` },
          ],
        },

        // 5 reflection prompts (elevated from standard 4)
        {
          id: `l20-reflection`,
          type: `reflection`,
          guideText: `Pick a prompt to reflect on your whole journey, {name}.`,
          prompts: [
            { id: `r1`, text: `Which lesson in Math UE was the most surprising to you? Why?` },
            { id: `r2`, text: `Which math concept did you find hardest? Which did you find easiest?` },
            { id: `r3`, text: `Which math myth was the most powerful to bust — "multiplication makes bigger" or "division makes smaller"? Why?` },
            { id: `r4`, text: `How is your understanding of math different now than when you started Math UE? What changed?` },
            { id: `r5`, text: `Looking ahead — what kind of math are you curious to learn next?` },
          ],
        },

        {
          id: `l20-realworld`,
          type: `real-world`,
          guideText: `You've just completed the foundation that supports all of middle school math, high school math, and any STEM career you might pursue later. Place value powers all numerical thinking. Fractions and decimals are how most measurement happens. Geometry shapes how we understand space. Algebra is the language of science and engineering. The coordinate plane is how computers think. Every single thing you learned in Math UE is a real, usable tool that you'll encounter in real life — many of them THIS WEEK. Use them.`,
          familyAdventure: `Final family adventure: have a conversation with someone in your family about ONE specific concept from Math UE that surprised you. Explain what it is and why it matters. Teaching someone else is one of the strongest ways to solidify your own understanding. Pick something the other person doesn't expect.`,
          creativePrompt: {
            intro: `Write a letter to a kid who's about to start Math UE. What should they know? What should they not worry about? What helped you the most?`,
            floor: `Write at least 5 sentences.`,
            stretch: `Write 10-15 sentences. Give specific advice and encouragement.`,
            open: `Write as long as you want — full advice column style.`,
            frames: [
              `Dear future Math UE student, ___.`,
              `The lessons that will be hard are ___.`,
              `What helped me with those was ___.`,
              `The most surprising thing I learned was ___.`,
              `One piece of advice I'd give you: ___.`,
            ],
          },
        },

        {
          id: `l20-celebration`,
          type: `celebration`,
          message: `MATH UE COMPLETE, {name}. All 20 lessons. Place value, multi-digit operations, factors and primes, patterns, fractions in all four operations, decimals, geometry, measurement, coordinate plane, intro algebra. 20 badges. 1,500+ XP. A whole math foundation built. Most adults don't have this kind of fluency or this kind of understanding. You do. Be proud of yourself — this took real work. Whenever you're ready for what comes next (Voyager band), I'll be there. — Remi.`,
          badge: `math-master-ue`,
          badgeName: `Math Master`,
          xpEarned: 100,
        },
      ],
    },
  ],
};

export default MATH_UE_L20;
