// ─────────────────────────────────────────────────────────────────────────────
// MATH UE  |  L05 — Factors, Multiples, and Primes
// Age band : upper_explorers (9–10)   Guide: remi
// Standards: CCSS 4.OA.B.4
// CALIBRATED: Math UE Spec v2
// Game format: drag-identify (Sort numbers by their factor properties)
// Visual model: array (factors visible as rectangle dimensions)
// Misconceptions: "1 is prime" (false) / "Prime = odd" (false) /
//                 "Factors and multiples are the same thing" (false)
// ─────────────────────────────────────────────────────────────────────────────

const MATH_UE_L05 = {
  ageBand: `upper_explorers`,
  subjectId: `math`,
  guide: `remi`,

  lessons: [
    {
      id: `math-9-10-05`,
      title: `Factors, Multiples, and Primes`,
      duration: 22,
      xpReward: 75,
      badge: `number-detective`,
      badgeName: `Number Detective`,

      screens: [
        {
          id: `l05-welcome`,
          type: `welcome`,
          guideText: `Welcome back, {name}. Today we look at the hidden structure of numbers. Some numbers can be broken apart in lots of ways. Others can't be broken apart at all. By the end of today, you'll know what makes a number prime, what factors and multiples are, and how to find them. These ideas might seem abstract — but they show up later in fractions, in patterns, and eventually in cryptography that protects bank accounts on the internet. Real stuff.`,
          headline: `Factors, Multiples, and Primes`,
          subtitle: `The hidden structure of numbers`,
          visual: `/ue-assets/math/l05-welcome.webp`,
        },

        {
          id: `l05-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `What Factors Are`,
          paragraphs: [
            `Factors are the numbers that DIVIDE evenly into a given number. For example, the factors of 12 are 1, 2, 3, 4, 6, and 12. Why those? Because each of them divides into 12 without leaving a remainder. 12 ÷ 1 = 12. 12 ÷ 2 = 6. 12 ÷ 3 = 4. 12 ÷ 4 = 3. 12 ÷ 6 = 2. 12 ÷ 12 = 1.`,
            `Notice the pattern: factors come in PAIRS. 1 × 12 = 12. 2 × 6 = 12. 3 × 4 = 12. Each factor has a partner. The two factors in a pair multiply to give the original number. The smallest factor of any whole number is always 1. The biggest factor is always the number itself.`,
            `Here's a visual way to think about it. The factors of a number are all the ways you can arrange that many things into a rectangle. 12 things can make a 1×12 rectangle, a 2×6 rectangle, or a 3×4 rectangle. Each rectangle's dimensions are a factor pair. Try it with 16, 18, or 20 and you'll see how the patterns work.`,
          ],
          image: `/ue-assets/math/l05-s1-factors.webp`,
          imageCaption: `Factors come in pairs. 12 = 1×12, 2×6, 3×4. Three rectangles, three pairs.`,
          vocab: [
            { word: `factor`,
              definition: `A number that divides evenly into another number, with no remainder.`,
              audioPrompt: `A factor is a number that divides evenly into another number, {name}. The factors of 12 are 1, 2, 3, 4, 6, and 12 — because each of these divides into 12 with no leftover. Factors always come in pairs that multiply to give the original number. 1 × 12, 2 × 6, 3 × 4. Knowing factors is useful for simplifying fractions, working with patterns, and even for some computer security in real life. Factors are one of the foundational ideas in math.` },
            { word: `factor pair`,
              definition: `Two factors that multiply together to give the original number. For 12: (1,12), (2,6), and (3,4) are all factor pairs.`,
              audioPrompt: `A factor pair is two factors that multiply to make a number, {name}. For 12, the factor pairs are 1 and 12, 2 and 6, and 3 and 4 — because 1×12=12, 2×6=12, and 3×4=12. Every factor has a partner. Finding all the factor pairs is a reliable way to list all the factors of any number. Start with 1 and the number itself, then test 2, 3, 4 — until you start getting pairs you've already seen.` },
          ],
        },

        {
          id: `l05-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `What Multiples Are`,
          paragraphs: [
            `Multiples are kind of the opposite of factors. The MULTIPLES of a number are what you get when you multiply that number by 1, 2, 3, and so on. The multiples of 4 are 4, 8, 12, 16, 20, 24... they go forever.`,
            `Here's the relationship: if 12 is a multiple of 4, then 4 is a factor of 12. The two ideas are flip sides of the same coin. Factors look INTO a number (what divides it). Multiples look OUT FROM a number (what it makes).`,
            `Multiples show up everywhere. Every fourth row in a seating chart — multiples of 4. Skip-counting by 5s — multiples of 5. The times tables you know — those are tables of multiples. Once you see this, the times tables aren't a random list to memorize — they're a structured pattern with deep connections to factors and divisibility.`,
          ],
          image: `/ue-assets/math/l05-s2-multiples.webp`,
          imageCaption: `Multiples of 4: 4, 8, 12, 16, 20... goes forever.`,
          vocab: [
            { word: `multiple`,
              definition: `The result of multiplying a number by a whole number (1, 2, 3, etc.).`,
              audioPrompt: `A multiple is what you get when you multiply a number by 1, 2, 3, and so on, {name}. The multiples of 5 are 5, 10, 15, 20, 25, 30... they keep going forever. Notice — the multiples of 5 are basically the same as "counting by fives." That's exactly what multiples are. Skip-counting and multiples are the same idea. Multiples of any number always include the number itself (multiplied by 1) and then keep growing.` },
            { word: `common multiple`,
              definition: `A number that is a multiple of two or more different numbers. For example, 12 is a common multiple of 3 and 4.`,
              audioPrompt: `A common multiple is a number that appears in the multiples of two different numbers, {name}. 12 is a multiple of 3 (3, 6, 9, 12...) AND a multiple of 4 (4, 8, 12...). So 12 is a common multiple of both. The smallest shared multiple is called the least common multiple, or LCM. You'll use LCM later when adding fractions with different denominators. For now, just know that multiples of different numbers sometimes overlap.` },
          ],
        },

        {
          id: `l05-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Prime Numbers: The Building Blocks`,
          paragraphs: [
            `Now the interesting part. Some numbers have lots of factors. Like 12 — it has 6 different factors. But OTHER numbers have only TWO factors: 1 and themselves. Those are called PRIME numbers.`,
            `7 is prime. Its only factors are 1 and 7. You can't break it down into smaller equal groups. Try to make 7 things into a rectangle. The only rectangle that works is 1 × 7. There's no other way. Same with 11, 13, 17, 19. These are prime numbers — they can't be broken down further.`,
            `Numbers with MORE than two factors are called COMPOSITE. 12 is composite because it has 6 factors. 15 is composite (factors: 1, 3, 5, 15). Most numbers are composite. Prime numbers are rarer and more important — they're the building blocks of all other numbers. Every composite number can be broken down into prime factors. 12 = 2 × 2 × 3. 30 = 2 × 3 × 5. Primes are the atoms of numbers.`,
          ],
          image: `/ue-assets/math/l05-s3-primes.webp`,
          imageCaption: `Prime: only two factors (1 and itself). Can't break it down further.`,
          vocab: [
            { word: `prime`,
              definition: `A whole number greater than 1 that has only two factors: 1 and itself. Examples: 2, 3, 5, 7, 11, 13.`,
              audioPrompt: `A prime number is a whole number greater than 1 that has exactly two factors — 1 and itself, {name}. 2, 3, 5, 7, 11, 13, 17, 19, 23 — those are some of the first primes. You can't break a prime number into smaller equal groups. Primes are like the building blocks of all the other numbers. Every composite number can be written as a product of primes — that's called prime factorization. Primes show up in some of the most advanced math and even in modern computer security.` },
            { word: `composite`,
              definition: `A whole number greater than 1 with more than two factors. Examples: 4, 6, 8, 9, 10, 12.`,
              audioPrompt: `A composite number is a whole number greater than 1 with MORE than two factors, {name}. 4, 6, 8, 9, 10, 12 — all composite. They can be broken down into smaller equal groups in more than one way. Most numbers are composite. Composites are made from prime "building blocks" — that's prime factorization. Composite and prime are opposites — every whole number bigger than 1 is exactly one or the other.` },
          ],
        },

        {
          id: `l05-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Two Common Mix-Ups`,
          paragraphs: [
            `Two mistakes catch a lot of kids — and adults — when they first learn about primes. Let's bust them now.`,
            `Mistake #1: "Is 1 prime?" No. By definition, prime numbers have EXACTLY two different factors — 1 and themselves. The number 1 only has ONE factor: 1. So it doesn't meet the definition. 1 is in its own special category — it's neither prime nor composite. Mathematicians decided this on purpose because it makes other math work out cleanly.`,
            `Mistake #2: "Are all odd numbers prime?" No. Lots of odd numbers are composite. 9 is odd, but it's 3 × 3 — composite. 15 is odd, but it's 3 × 5 — composite. The only even prime is 2 (every other even number has 2 as a factor, so it's automatically composite). Being odd doesn't make a number prime. Being prime is about the number of factors, not about whether it's odd or even.`,
          ],
          image: `/ue-assets/math/l05-s4-mistakes.webp`,
          imageCaption: `1 is NOT prime. Odd is NOT the same as prime. Two myths busted.`,
          vocab: [
            { word: `divisible`,
              definition: `A number is divisible by another if it can be divided with no remainder.`,
              audioPrompt: `A number is divisible by another when dividing them leaves no remainder, {name}. 12 is divisible by 3 because 12 ÷ 3 = 4 with no leftover. 12 is NOT divisible by 5 because 12 ÷ 5 = 2 remainder 2. Divisibility connects to factors directly — if A is divisible by B, then B is a factor of A. The two ideas are basically the same thing said differently.` },
            { word: `prime factorization`,
              definition: `Writing a number as a product of its prime factors only. Example: 12 = 2 × 2 × 3.`,
              audioPrompt: `Prime factorization means breaking a number all the way down into its prime building blocks, {name}. 12 = 2 × 2 × 3. 30 = 2 × 3 × 5. Every composite number has exactly one prime factorization — just one way to write it as a product of primes. Prime factorization is useful for finding common factors, simplifying fractions, and understanding number structure. Primes are the atoms. All other numbers are made from them.` },
          ],
        },

        // ── DRAG-IDENTIFY GAME — Sort Numbers ──────────────────────────────
        {
          id: `l05-game`,
          type: `interactive`,
          format: `drag-identify`,
          guideText: `Sorting time, {name}. I'll show you 12 numbers, and you decide whether each is prime, composite, or "special" — that's a category just for the number 1, which is neither prime nor composite. If you're not sure, try to find a factor pair other than 1 × itself. If you can't, it's prime.`,
          buckets: [
            { id: `prime`,    label: `Prime`,             color: `#A78BFA` },
            { id: `composite`, label: `Composite`,         color: `#34D399` },
            { id: `special`,  label: `Special (just 1)`,  color: `#FBBF24` },
          ],
          items: [
            { id: `l05-g1`, label: `7`,
              matchPhrase: `Prime. Factors of 7 are only 1 and 7. Can't break it down further.`, correctMatch: `prime` },
            { id: `l05-g2`, label: `12`,
              matchPhrase: `Composite. Factors: 1, 2, 3, 4, 6, 12. Lots of ways to break it down.`, correctMatch: `composite` },
            { id: `l05-g3`, label: `1`,
              matchPhrase: `Special. The number 1 only has one factor: itself. So it's neither prime nor composite.`, correctMatch: `special` },
            { id: `l05-g4`, label: `9`,
              matchPhrase: `Composite. 9 = 3 × 3. Odd doesn't mean prime — 9 has factors 1, 3, and 9.`, correctMatch: `composite` },
            { id: `l05-g5`, label: `13`,
              matchPhrase: `Prime. Only factors are 1 and 13. Can't break it further.`, correctMatch: `prime` },
            { id: `l05-g6`, label: `15`,
              matchPhrase: `Composite. 15 = 3 × 5. Odd but composite — its factors are 1, 3, 5, 15.`, correctMatch: `composite` },
            { id: `l05-g7`, label: `2`,
              matchPhrase: `Prime. The ONLY even prime number. Factors of 2 are just 1 and 2.`, correctMatch: `prime` },
            { id: `l05-g8`, label: `21`,
              matchPhrase: `Composite. 21 = 3 × 7. Looks prime-ish but isn't — has factors 1, 3, 7, 21.`, correctMatch: `composite` },
            { id: `l05-g9`, label: `17`,
              matchPhrase: `Prime. Factors are only 1 and 17. Nothing else divides into it.`, correctMatch: `prime` },
            { id: `l05-g10`, label: `25`,
              matchPhrase: `Composite. 25 = 5 × 5. Has factors 1, 5, 25.`, correctMatch: `composite` },
            { id: `l05-g11`, label: `11`,
              matchPhrase: `Prime. Factors are only 1 and 11.`, correctMatch: `prime` },
            { id: `l05-g12`, label: `20`,
              matchPhrase: `Composite. 20 has factors 1, 2, 4, 5, 10, 20. Lots of ways to break it down.`, correctMatch: `composite` },
          ],
        },

        {
          id: `l05-quiz`,
          type: `quiz`,
          guideText: `Quick check, {name}.`,
          questions: [
            { id: `l05-q1`, format: `multiple-choice`,
              question: `What are the factors of 18?`,
              options: [
                `1, 2, 3, 18`,
                `1, 2, 3, 6, 9, 18`,
                `1, 2, 9, 18`,
                `2, 3, 6, 18`,
              ],
              correctIndex: 1,
              explanation: `Factors of 18: 1, 2, 3, 6, 9, 18. Each one divides 18 evenly. They come in pairs: 1×18, 2×9, 3×6.` },
            { id: `l05-q2`, format: `multiple-choice`,
              question: `What is the relationship between factors and multiples?`,
              options: [
                `They are the same thing`,
                `If A is a multiple of B, then B is a factor of A`,
                `Multiples are always smaller than factors`,
                `They are not related`,
              ],
              correctIndex: 1,
              explanation: `Factors and multiples are flip sides of the same coin. If 12 is a multiple of 4, then 4 is a factor of 12. They go together.` },
            { id: `l05-q3`, format: `multiple-choice`,
              question: `Which of these is a prime number?`,
              options: [`9`, `15`, `17`, `21`],
              correctIndex: 2,
              explanation: `17 is prime — its only factors are 1 and 17. The others are all composite: 9 = 3×3, 15 = 3×5, 21 = 3×7. Being odd doesn't make a number prime.` },
            { id: `l05-q4`, format: `multiple-choice`,
              question: `Is 1 prime, composite, or neither?`,
              options: [
                `Prime`,
                `Composite`,
                `Neither — it's in its own category`,
                `Both prime and composite`,
              ],
              correctIndex: 2,
              explanation: `1 is neither. Primes have exactly TWO factors. 1 only has one factor (itself). So 1 is in its own special category.` },
            { id: `l05-q5`, format: `true-false`,
              question: `True or false: All odd numbers are prime.`,
              correctAnswer: false,
              explanation: `False. 9 is odd but composite. 15 is odd but composite. 21 is odd but composite. Odd numbers can definitely be composite. The only even prime is 2 — all other primes ARE odd, but not all odds are prime.` },
            { id: `l05-q6`, format: `multiple-choice`,
              question: `Which number is the only even prime?`,
              options: [`0`, `2`, `4`, `6`],
              correctIndex: 1,
              explanation: `2 is the only even prime. Every other even number has 2 as a factor (because it's divisible by 2), which automatically makes it composite.` },
            { id: `l05-q7`, format: `multiple-choice`,
              question: `What are the first 5 multiples of 6?`,
              options: [
                `1, 2, 3, 6, 12`,
                `6, 12, 18, 24, 30`,
                `2, 3, 6, 12, 18`,
                `5, 6, 7, 8, 9`,
              ],
              correctIndex: 1,
              explanation: `Multiples of 6 are what you get when you multiply 6 by 1, 2, 3, 4, 5. So 6, 12, 18, 24, 30. (Same as counting by 6s.)` },
            { id: `l05-q8`, format: `multiple-choice`,
              question: `Which of these numbers is composite?`,
              options: [`11`, `13`, `25`, `29`],
              correctIndex: 2,
              explanation: `25 is composite (5 × 5 = 25). The other three (11, 13, 29) are all prime — their only factors are 1 and themselves.` },
          ],
        },

        {
          id: `l05-reflection`,
          type: `reflection`,
          guideText: `Pick a prompt, {name}.`,
          prompts: [
            { id: `r1`, text: `Pick any number between 20 and 50. List its factors. Decide if it's prime or composite. What did you notice?` },
            { id: `r2`, text: `Why do you think 1 is in its own category instead of being prime?` },
            { id: `r3`, text: `Can you think of a real-life situation where you'd want to find factors of a number?` },
            { id: `r4`, text: `Which felt easier to figure out — finding factors or finding multiples? Why?` },
          ],
        },

        {
          id: `l05-realworld`,
          type: `real-world`,
          guideText: `Factors and primes show up in surprising places. When you arrange chairs in equal rows, you're using factors. When event planners figure out how to seat 60 people in rows of equal size, they need the factors of 60: 1, 2, 3, 4, 5, 6, 10, 12, 15, 20, 30, 60. Primes show up in computer security — the encryption that protects your parents' bank accounts on the internet relies on multiplying together very large prime numbers. Math that seems abstract often becomes critical infrastructure.`,
          familyAdventure: `Together, pick a number between 30 and 100. Find ALL its factors. Then pick another number. Do the same. Now compare. Which number had more factors? Which had fewer? Numbers with very few factors are likely prime. Bonus: find the first 10 prime numbers (the answer is 2, 3, 5, 7, 11, 13, 17, 19, 23, 29).`,
          creativePrompt: {
            intro: `Imagine you're explaining primes and composites to a younger kid. Write your explanation, including a memorable way to remember the difference.`,
            floor: `Write at least 5 sentences.`,
            stretch: `Write 8-10 sentences with specific examples.`,
            open: `Write as much as you want — invent your own metaphor.`,
            frames: [
              `Primes are numbers that ___.`,
              `Composites are numbers that ___.`,
              `An easy way to tell them apart is ___.`,
              `One example of each is ___.`,
              `A common mistake to avoid is ___.`,
            ],
          },
        },

        {
          id: `l05-celebration`,
          type: `celebration`,
          message: `Real work, {name}. You can now find the factors of any number, recognize multiples, tell primes from composites, and avoid the classic mix-ups (1 isn't prime; odd isn't the same as prime). Next lesson we look at patterns — how to spot rules and predict what comes next. — Remi.`,
          badge: `number-detective`,
          badgeName: `Number Detective`,
          xpEarned: 75,
        },
      ],
    },
  ],
};

export default MATH_UE_L05;
