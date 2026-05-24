// ─────────────────────────────────────────────────────────────────────────────
// MATH UE  |  L07 — Introduction to Fractions
// Age band : upper_explorers (9–10)   Guide: remi
// Standards: CCSS 4.NF.A.1, 4.NF.A.2
// CALIBRATED: Math UE Spec v2 (heavily — this is the foundational fraction lesson)
// Game format: problem-solving (Fraction Basics)
// Visual model: fraction-bar (primary), area-model (secondary)
// Misconceptions DIRECTLY addressed:
//   - "1/8 is bigger than 1/4 because 8 > 4" (whole-number thinking on denominators)
//   - "Fractions are two whole numbers stacked" (need to see fraction as ONE quantity)
//   - "Bigger denominator = bigger fraction" (the canonical wrong intuition)
// THIS LESSON SETS UP COGNITION FOR EVERY FRACTION LESSON THAT FOLLOWS.
// ─────────────────────────────────────────────────────────────────────────────

const MATH_UE_L07 = {
  ageBand: `upper_explorers`,
  subjectId: `math`,
  guide: `remi`,

  lessons: [
    {
      id: `math-9-10-07`,
      title: `Introduction to Fractions`,
      duration: 24,
      xpReward: 75,
      badge: `fraction-foundations`,
      badgeName: `Fraction Foundations`,

      screens: [
        {
          id: `l07-welcome`,
          type: `welcome`,
          guideText: `Welcome, {name}. Today we step into fractions — the part of math that breaks more kids' confidence than almost anything else. Not because fractions are actually hard, but because most people learn them backwards. Today we learn them the right way. By the end, you'll think about fractions in a way that prevents the classic mistakes most adults still make. Take your time on this one. The ideas here matter for every future fraction lesson.`,
          headline: `Introduction to Fractions`,
          subtitle: `The right way to think about parts of a whole`,
          visual: `/ue-assets/math/l07-welcome.webp`,
        },

        {
          id: `l07-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `A Fraction Is ONE Quantity, Not Two Numbers`,
          paragraphs: [
            `Here's the most important idea in this whole lesson. A fraction LOOKS like two numbers stacked. But it's actually ONE number — one quantity. 3/4 isn't "three" and "four." It's a single number that lives between 0 and 1.`,
            `Imagine a pizza cut into 4 equal slices. If you eat 3 of those slices, you've eaten 3/4 of the pizza. That's ONE thing — three-fourths of a pizza. Not two separate numbers, but a single amount that represents how much pizza you ate.`,
            `Why does this matter? Because the biggest fraction misconceptions all come from treating fractions like two separate whole numbers. "Add the tops and the bottoms." "Bigger numbers below means bigger fraction." Those are tempting but wrong. They come from forgetting that a fraction is ONE quantity, not two. Hold onto this idea — it'll save you from a lot of mistakes.`,
          ],
          image: `/ue-assets/math/l07-s1-one-quantity.webp`,
          imageCaption: `3/4 is ONE quantity — three-fourths of a whole.`,
          vocab: [
            { word: `fraction`,
              definition: `A way to write a number that represents part of a whole, written as one number over another.`,
              audioPrompt: `A fraction is a way to write a number that represents part of a whole, {name}. It's written as one number over another. 1/2 is "one-half." 3/4 is "three-fourths." But here's the key — a fraction is ONE number, not two. 3/4 lives at a single spot between 0 and 1 on the number line. The top number and the bottom number work together to point to that one spot. Once you see a fraction as one quantity, you've taken the most important step.` },
            { word: `whole`,
              definition: `The complete thing that a fraction refers to part of. Could be one pizza, one pie, one group, one unit of any kind.`,
              audioPrompt: `In fractions, the whole is the complete thing you're talking about a part of, {name}. The whole could be one pizza. One pie. One mile. One group of kids. One day. Whatever it is, the fraction refers to part of that whole. 3/4 of a pizza isn't the same amount as 3/4 of a mile — they're three-fourths of DIFFERENT wholes. The fraction tells you the proportion. The whole tells you what you're taking a fraction of.` },
          ],
        },

        {
          id: `l07-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Numerator and Denominator: Two Jobs, One Number`,
          paragraphs: [
            `Every fraction has two parts that work together. The number on the BOTTOM is called the DENOMINATOR. It tells you how many EQUAL pieces the whole was divided into. The number on the TOP is called the NUMERATOR. It tells you how many of those pieces you have.`,
            `So in 3/4 — the denominator (4) means "the whole is cut into 4 equal pieces." The numerator (3) means "I have 3 of those pieces." Together, they tell you exactly how much of the whole you're talking about: three out of four equal pieces.`,
            `Here's a memory trick: DENOMINATOR is down (both start with D). NUMERATOR is on top. Or: the denominator NAMES the size of the pieces (a fourth, a fifth, an eighth — each is a unit). The numerator COUNTS how many of those pieces. Same number, two jobs, working together.`,
          ],
          image: `/ue-assets/math/l07-s2-num-denom.webp`,
          imageCaption: `Denominator: how many equal pieces total. Numerator: how many you have.`,
          vocab: [
            { word: `numerator`,
              definition: `The top number in a fraction. Tells you how many pieces you have.`,
              audioPrompt: `The numerator is the top number in a fraction, {name}. In 3/4, the numerator is 3. It tells you how many pieces you have. If you've eaten 3 slices of a pizza cut into 4 equal pieces, then 3 is the numerator — the count of slices eaten. The numerator just counts.` },
            { word: `denominator`,
              definition: `The bottom number in a fraction. Tells you how many equal pieces the whole was divided into.`,
              audioPrompt: `The denominator is the bottom number in a fraction, {name}. In 3/4, the denominator is 4. It names how many equal pieces the whole was cut into. If the pizza was cut into 4 equal slices, then 4 is the denominator. The denominator names the size of each piece. Cut into 4 — each piece is a fourth. Cut into 8 — each piece is an eighth. The bigger the denominator, the SMALLER each piece is.` },
          ],
        },

        {
          id: `l07-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `The Counter-Intuitive Truth About Denominators`,
          paragraphs: [
            `Time for the most important misconception to bust. Look at 1/4 and 1/8. Which is bigger?`,
            `If you treat the fraction like two whole numbers, your brain says: "8 is bigger than 4, so 1/8 must be bigger than 1/4." That's the most common fraction mistake in all of elementary math. And it's wrong.`,
            `Picture two identical pizzas. Cut one into 4 equal slices. Cut the other into 8 equal slices. Which has BIGGER slices? The one cut into 4 — those slices are huge. The one cut into 8 has tiny slices. So 1 slice of the 4-piece pizza (which is 1/4) is BIGGER than 1 slice of the 8-piece pizza (which is 1/8). The bigger the denominator, the SMALLER each piece. 1/4 > 1/8. Always.`,
            `This goes against everything your whole-number brain wants to do. The fix is to stop thinking of fractions like two stacked numbers and start thinking of them as SLICE SIZES. Bigger denominator = more cuts = smaller pieces. That's the rule. Hold onto it.`,
          ],
          image: `/ue-assets/math/l07-s3-bigger-denom.webp`,
          imageCaption: `Same pizza, more cuts, smaller slices. 1/4 > 1/8.`,
          vocab: [
            { word: `unit fraction`,
              definition: `A fraction with 1 in the numerator: 1/2, 1/3, 1/4, 1/5, etc. Represents ONE piece of the whole.`,
              audioPrompt: `A unit fraction has 1 as its numerator, {name}. 1/2, 1/3, 1/4, 1/5 — all unit fractions. Each one represents ONE piece of the whole. Unit fractions are the building blocks of all other fractions. 3/4 is just 1/4 + 1/4 + 1/4 — three unit fractions of size one-fourth. Comparing unit fractions makes the "bigger denominator means smaller piece" rule very clear. 1/2 is bigger than 1/4, which is bigger than 1/8, even though 2 < 4 < 8.` },
            { word: `benchmark fraction`,
              definition: `A familiar reference fraction like 1/2, 1/4, or 3/4 used to estimate and compare other fractions.`,
              audioPrompt: `Benchmark fractions are well-known reference points like 1/2, 1/4, and 3/4, {name}. They're useful because you already know roughly where they live. If someone says they ate about 2/5 of a pizza, you can quickly estimate — 2/5 is close to 1/2, so roughly half. Benchmarks give you a mental map of the fraction number line. Any unfamiliar fraction can be roughly placed by comparing it to benchmarks you already know.` },
          ],
        },

        {
          id: `l07-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Equivalent Fractions: Same Quantity, Different Names`,
          paragraphs: [
            `Here's a powerful idea: the SAME amount can be written in different ways. 1/2 and 2/4 and 4/8 are all equivalent — they all represent the exact same quantity. They just have different names.`,
            `Why? Look at a pizza cut in half. You have 1/2. Now imagine cutting each half into 2 more pieces. Now there are 4 pieces total — but you still have the same amount, which is now called 2/4. Cut each piece in half AGAIN — now 8 total pieces, and your same original half is now called 4/8. The amount didn't change. The way we named the pieces did.`,
            `The math rule for finding equivalent fractions: multiply (or divide) BOTH the numerator AND the denominator by the same number. 1/2 × 2/2 = 2/4. 1/2 × 3/3 = 3/6. 1/2 × 4/4 = 4/8. As long as you multiply both top and bottom by the SAME thing, the fraction's value stays the same. Why? Because multiplying by 2/2 (or 3/3, or 4/4) is really multiplying by 1 — and multiplying anything by 1 doesn't change its value.`,
          ],
          image: `/ue-assets/math/l07-s4-equivalent.webp`,
          imageCaption: `1/2 = 2/4 = 4/8. Same amount, different names.`,
          vocab: [
            { word: `equivalent fractions`,
              definition: `Fractions that represent the same quantity, just written differently. 1/2 = 2/4 = 4/8.`,
              audioPrompt: `Equivalent fractions are different ways to write the same quantity, {name}. 1/2 equals 2/4 equals 4/8 — same amount, different names. To make an equivalent fraction, multiply both the numerator and the denominator by the same number. To go from 1/2 to 2/4, multiply both by 2. To go from 1/2 to 5/10, multiply both by 5. The fraction's value doesn't change because you're essentially multiplying by 1. Recognizing equivalent fractions is incredibly useful for comparing fractions, adding fractions with different denominators, and simplifying fractions to their smallest form.` },
            { word: `simplest form`,
              definition: `A fraction where the numerator and denominator share no common factor other than 1. Also called lowest terms.`,
              audioPrompt: `A fraction is in simplest form when the numerator and denominator share no common factor except 1, {name}. 3/4 is in simplest form. 6/8 is NOT — both are divisible by 2, giving 3/4. 2/6 is NOT — both are divisible by 2, giving 1/3. Getting to simplest form means you've divided out all the shared factors. An equivalent fraction ladder has many names — simplest form is the cleanest one at the bottom.` },
          ],
        },

        // ── PROBLEM-SOLVING GAME — Fraction Basics ────────────────────────
        {
          id: `l07-game`,
          type: `interactive`,
          format: `problem-solving`,
          guideText: `Fraction time, {name}. We'll work through four problems together. Don't rush — fractions trip people up exactly because they rush past the basics. If your answer's a little off, I'll explain what's happening. The "bigger denominator = smaller piece" idea is going to come up a lot — really lock it in.`,
          scenarioTitle: `Working With Fractions`,
          problems: [
            {
              id: `p1`,
              problemStatement: `A chocolate bar is divided into 6 equal pieces. You eat 4 of them. What fraction of the chocolate bar did you eat?`,
              visual: {
                type: `fraction-bar`,
                data: {
                  numerator: 4,
                  denominator: 6,
                  caption: `4 out of 6 equal pieces.`,
                },
              },
              approaches: [
                {
                  id: `approach-a`,
                  label: `Figure out the numerator and denominator from the situation`,
                  description: `What's the whole divided into? How many did you take?`,
                  steps: [
                    {
                      prompt: `The bar is divided into 6 equal pieces. What number goes in the denominator?`,
                      answer: 6,
                      hint: `The denominator names how many EQUAL pieces total.`,
                    },
                    {
                      prompt: `You ate 4 of the pieces. What number goes in the numerator?`,
                      answer: 4,
                      hint: `The numerator counts how many pieces you have (or ate).`,
                    },
                  ],
                  commonMistakes: [
                    { wrongAnswer: 2, explanation: `Looks like that's the number of pieces NOT eaten. The numerator counts what you ate, not what's left.` },
                  ],
                },
              ],
              finalAnswer: 4,
              finalExplanation: `You ate 4/6 of the chocolate bar. Numerator 4 (pieces eaten), denominator 6 (total pieces). The fraction is one quantity that represents "four-sixths of the whole."`,
            },
            {
              id: `p2`,
              problemStatement: `Which is bigger: 1/3 or 1/5?`,
              visual: {
                type: `fraction-bar`,
                data: {
                  numerator: 1,
                  denominator: 3,
                  compareNumerator: 1,
                  compareDenominator: 5,
                  caption: `One slice of a 3-piece pie vs one slice of a 5-piece pie.`,
                },
              },
              approaches: [
                {
                  id: `approach-a`,
                  label: `Think about pizza slices — fewer cuts means bigger pieces`,
                  description: `Picture two identical wholes. One cut into 3 pieces. One cut into 5 pieces. Which has bigger pieces?`,
                  steps: [
                    {
                      prompt: `A whole cut into 3 equal pieces vs the same whole cut into 5 equal pieces. Which gives BIGGER pieces? Type 3 for 3-piece, 5 for 5-piece.`,
                      answer: 3,
                      hint: `Fewer cuts means each piece is bigger. Cutting into 3 leaves you with bigger chunks than cutting into 5.`,
                    },
                    {
                      prompt: `So which is bigger: 1/3 or 1/5? Type 3 for 1/3, 5 for 1/5.`,
                      answer: 3,
                      hint: `1/3 is one piece of the bigger-pieces pie. 1/5 is one piece of the smaller-pieces pie.`,
                    },
                  ],
                  commonMistakes: [
                    { wrongAnswer: 5, explanation: `Classic mistake — thinking 5 > 3 means 1/5 > 1/3. But the bigger denominator means MORE cuts, which means SMALLER pieces. One piece of a 5-piece pie is smaller than one piece of a 3-piece pie. So 1/3 is bigger.` },
                  ],
                },
              ],
              finalAnswer: 3,
              finalExplanation: `1/3 is bigger than 1/5. The denominator 3 means "cut into 3 equal pieces" — each piece is bigger. The denominator 5 means "cut into 5 equal pieces" — each is smaller. With unit fractions (numerator of 1), the SMALLER the denominator, the BIGGER the fraction.`,
            },
            {
              id: `p3`,
              problemStatement: `Write a fraction that's equivalent to 1/2 with a denominator of 6.`,
              visual: {
                type: `fraction-bar`,
                data: {
                  numerator: 1,
                  denominator: 2,
                  caption: `Find another way to write the same amount, using a denominator of 6.`,
                },
              },
              approaches: [
                {
                  id: `approach-a`,
                  label: `Multiply both numerator and denominator by the same number`,
                  description: `What do we multiply 2 by to get 6? Then do the same to the numerator.`,
                  steps: [
                    {
                      prompt: `What number do you multiply 2 by to get 6?`,
                      answer: 3,
                      hint: `2 × ? = 6. Try thinking of it as 6 ÷ 2.`,
                    },
                    {
                      prompt: `Multiply the numerator by the SAME number. 1 × 3 = ?`,
                      answer: 3,
                      hint: `Multiplying both top and bottom by 3 keeps the fraction equivalent.`,
                    },
                  ],
                  commonMistakes: [
                    { wrongAnswer: 1, explanation: `Looks like the numerator stayed the same. To keep fractions equivalent, you have to multiply BOTH the top and the bottom by the same number. Otherwise the value changes.` },
                  ],
                },
              ],
              finalAnswer: 3,
              finalExplanation: `1/2 = 3/6. Multiply both numerator and denominator by 3 (because 2 × 3 = 6). They're equivalent — same amount, just expressed with 6 pieces instead of 2. Same pizza, different slice count.`,
            },
            {
              id: `p4`,
              problemStatement: `Two friends are sharing a sandwich. Anna eats 2/8 of it. Ben eats 1/4. Who ate more?`,
              visual: {
                type: `fraction-bar`,
                data: {
                  numerator: 2,
                  denominator: 8,
                  compareNumerator: 1,
                  compareDenominator: 4,
                  caption: `Compare 2/8 and 1/4.`,
                },
              },
              approaches: [
                {
                  id: `approach-a`,
                  label: `Find equivalent fractions with the same denominator, then compare`,
                  description: `Convert 1/4 to a fraction with denominator 8, then compare to 2/8.`,
                  steps: [
                    {
                      prompt: `Convert 1/4 to a fraction with denominator 8. Multiply 4 by what to get 8?`,
                      answer: 2,
                      hint: `4 × ? = 8.`,
                    },
                    {
                      prompt: `Now multiply the numerator (1) by 2 too. What's 1 × 2?`,
                      answer: 2,
                      hint: `Keep both top and bottom multiplied by the same number.`,
                    },
                    {
                      prompt: `So 1/4 = 2/8. Compare to Anna's 2/8. They're... equal? Type 1 if Anna ate more, 2 if Ben ate more, 3 if they ate the same.`,
                      answer: 3,
                      hint: `If both fractions are 2/8 once we have a common denominator, they're equal.`,
                    },
                  ],
                  commonMistakes: [
                    { wrongAnswer: 2, explanation: `If you thought Ben ate more, it might be because 1/4 LOOKS like less than 2/8 (smaller numerator). But the fractions have different denominators. Once we convert 1/4 to 2/8, we can see they're the same amount.` },
                    { wrongAnswer: 1, explanation: `If you thought Anna ate more, it might be because 2/8 has a bigger numerator than 1/4. But you can't compare numerators alone — the denominators are different. Convert to a common denominator first.` },
                  ],
                },
              ],
              finalAnswer: 3,
              finalExplanation: `They ate the same amount. 2/8 and 1/4 are equivalent fractions. To see it, convert 1/4 to a fraction with denominator 8 by multiplying both top and bottom by 2: 1/4 = 2/8. Same quantity, different names. This is the key skill for comparing fractions — get them to a common denominator first.`,
            },
          ],
          completionMessage: `Real work, {name}. You worked with fractions as ONE quantity (not two stacked numbers), compared unit fractions correctly, and found equivalent fractions. The most important takeaway: bigger denominator means smaller piece. Hold onto that — it'll save you from a lot of mistakes later.`,
        },

        {
          id: `l07-quiz`,
          type: `quiz`,
          guideText: `Quick check, {name}.`,
          questions: [
            { id: `l07-q1`, format: `multiple-choice`,
              question: `In the fraction 5/8, what does the 8 tell you?`,
              options: [
                `The number of pieces you have`,
                `The total number of equal pieces the whole was divided into`,
                `The size of the whole`,
                `Nothing important`,
              ],
              correctIndex: 1,
              explanation: `The denominator (8) tells you the whole was divided into 8 equal pieces. The numerator (5) tells you that you have 5 of those pieces.` },
            { id: `l07-q2`, format: `multiple-choice`,
              question: `Which is bigger: 1/4 or 1/6?`,
              options: [
                `1/6 — because 6 > 4`,
                `1/4 — because fewer pieces means each piece is bigger`,
                `They're equal`,
                `Can't tell`,
              ],
              correctIndex: 1,
              explanation: `1/4 is bigger. The denominator of 4 means the whole was cut into 4 pieces — bigger pieces. The denominator of 6 means 6 smaller pieces. With unit fractions, smaller denominator = bigger fraction.` },
            { id: `l07-q3`, format: `true-false`,
              question: `True or false: A fraction is ONE quantity, even though it's written using two numbers.`,
              correctAnswer: true,
              explanation: `True. A fraction is one quantity — one single number that lives somewhere on the number line. It just LOOKS like two numbers because of how it's written. Treating it as one quantity prevents most fraction mistakes.` },
            { id: `l07-q4`, format: `multiple-choice`,
              question: `What's a "unit fraction"?`,
              options: [
                `Any fraction`,
                `A fraction with 1 in the numerator: 1/2, 1/3, 1/4, etc.`,
                `A whole number`,
                `A fraction equal to 1`,
              ],
              correctIndex: 1,
              explanation: `A unit fraction has 1 in the numerator. They represent ONE piece of the whole. Unit fractions are the building blocks of all other fractions.` },
            { id: `l07-q5`, format: `multiple-choice`,
              question: `Which fraction is equivalent to 1/2?`,
              options: [`1/4`, `2/4`, `2/3`, `3/4`],
              correctIndex: 1,
              explanation: `2/4 is equivalent to 1/2. Multiply both top and bottom of 1/2 by 2 to get 2/4. Same amount, different name.` },
            { id: `l07-q6`, format: `multiple-choice`,
              question: `If you cut a pizza into more equal pieces, what happens to the size of each piece?`,
              options: [
                `Each piece gets bigger`,
                `Each piece gets smaller`,
                `Pieces stay the same size`,
                `Depends on the pizza`,
              ],
              correctIndex: 1,
              explanation: `More cuts mean smaller pieces. This is why a bigger denominator means a smaller fraction (when numerators are the same).` },
            { id: `l07-q7`, format: `multiple-choice`,
              question: `Which of these is NOT equivalent to 1/3?`,
              options: [`2/6`, `3/9`, `4/12`, `1/4`],
              correctIndex: 3,
              explanation: `1/4 is NOT equivalent to 1/3. The other three (2/6, 3/9, 4/12) all simplify to 1/3 — you can get to them by multiplying both top and bottom of 1/3 by the same number.` },
            { id: `l07-q8`, format: `multiple-choice`,
              question: `How do you make a fraction equivalent to 2/3 with a denominator of 12?`,
              options: [
                `Add 9 to the denominator`,
                `Multiply both numerator and denominator by 4`,
                `Multiply both numerator and denominator by 6`,
                `Replace the numerator with 12`,
              ],
              correctIndex: 1,
              explanation: `Multiply both by 4 (since 3 × 4 = 12). That gives 8/12. Multiply both top and bottom by the same number to keep fractions equivalent.` },
          ],
        },

        {
          id: `l07-reflection`,
          type: `reflection`,
          guideText: `Pick a prompt, {name}.`,
          prompts: [
            { id: `r1`, text: `Why is "bigger denominator = smaller fraction" so counter-intuitive? Try to explain in your own words.` },
            { id: `r2`, text: `Find a real-world example of fractions in your life today — food, time, distance, anything.` },
            { id: `r3`, text: `What's one mistake you might have made with fractions in the past that you now understand better?` },
            { id: `r4`, text: `If you had to teach a younger kid what a fraction is, what example would you use?` },
          ],
        },

        {
          id: `l07-realworld`,
          type: `real-world`,
          guideText: `Fractions are everywhere in real life. Cooking — half a cup of flour, three-quarters of a teaspoon. Time — a quarter past the hour, half an hour. Money — a quarter is one-fourth of a dollar. Sports — half-time, quarter-finals. Music — quarter notes, half notes. Distance — half a mile, three-quarters of the way home. Once you start seeing fractions, you realize they're a HUGE part of how we talk about anything that's not a whole.`,
          familyAdventure: `Together, do a real fraction activity. Bake or cook something that uses fractional measurements (1/2 cup, 1/4 teaspoon, etc.). Or measure things around your house in fractions of inches or centimeters. Get your hands on what these numbers actually mean. Bonus: see if you can identify equivalent fractions in the recipe — sometimes 1/2 cup is the same as 8 tablespoons.`,
          creativePrompt: {
            intro: `Imagine you're teaching a younger sibling or friend why "1/4 is bigger than 1/8." Write your explanation in your own words, with a memorable example.`,
            floor: `Write at least 5 sentences. Use a real-world example like pizza, chocolate, or money.`,
            stretch: `Write 8-10 sentences. Show why the misconception is tempting — and how to fix it.`,
            open: `Write as much as you want.`,
            frames: [
              `The mistake most kids make is ___.`,
              `The trick they don't see is ___.`,
              `My example to explain it is ___.`,
              `Why this works as an explanation is ___.`,
              `What I'd want them to remember is ___.`,
            ],
          },
        },

        {
          id: `l07-celebration`,
          type: `celebration`,
          message: `Major lesson, {name}. You can now read fractions as ONE quantity (not two stacked numbers), identify numerator and denominator, compare unit fractions correctly (remember: bigger denominator = smaller piece), and find equivalent fractions. These are the foundations for everything else with fractions. Most adults still get the "bigger denominator" thing wrong. You don't anymore. Next lesson, we add and subtract fractions. — Remi.`,
          badge: `fraction-foundations`,
          badgeName: `Fraction Foundations`,
          xpEarned: 75,
        },
      ],
    },
  ],
};

export default MATH_UE_L07;
