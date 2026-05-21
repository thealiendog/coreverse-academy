// ─────────────────────────────────────────────────────────────────────────────
// MATH  |  L07 — Adding Column by Column
// Age band : explorers (6–8)   Guide: remi
// Standards: CCSS 2.NBT.B.5 / 2.NBT.B.7
// REWRITE v2 (May 2026): Grade 1 accessible, 1st/2nd/3rd step identification
// game tests the right-to-left order rule
// ─────────────────────────────────────────────────────────────────────────────

const MATH_L07 = {
  ageBand:   `explorers`,
  subjectId: `math`,
  guide:     `remi`,

  lessons: [
    {
      id:        `math-6-8-07`,
      title:     `Adding Column by Column`,
      duration:  12,
      xpReward:  50,
      badge:     `column-addition-explorer`,
      badgeName: `Column Addition Explorer`,

      screens: [

        {
          id: `l07-welcome`,
          type: `welcome`,
          guideText: `Hi {name}, Remi here! Last lesson you learned the BIG IDEA — add place by place. Today we PRACTICE using the classic VERTICAL FORMAT — stacking numbers and adding column by column! Let's drill some examples!`,
          headline: `Adding Column by Column`,
          subtitle: `The classic vertical method — practiced until automatic`,
          visual: `/explorer-assets/math/l07-welcome.webp`,
        },

        {
          id: `l07-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `The VERTICAL Format`,
          paragraphs: [
            `Math people use a special LAYOUT called the VERTICAL FORMAT! You'll see it everywhere!`,
            `Here's how it works: Write the FIRST number. RIGHT BELOW it, write the SECOND number — lined up digit by digit! Draw a LINE underneath. Put a "+" sign on the left! Now you have ROWS (each number) and COLUMNS (each place value)! Solve from RIGHT to LEFT — ones first!`,
          ],
          image: `/explorer-assets/math/l07-s1-vertical-stack.webp`,
          imageCaption: `Vertical format: numbers stacked, line drawn, + sign!`,
          vocab: [
            { word: `vertical`,        definition: `Going up and down.`,
              audioPrompt: `Vertical means going up and down. Vertical means numbers are stacked on top of each other. The vertical format is one of the oldest layouts in math. It forces alignment — each digit in its column!` },
            { word: `format`,          definition: `A specific layout.`,
              audioPrompt: `A format is a specific layout or way to organize. The vertical format is the standard for column addition. It lines up columns automatically. Format helps your brain stay organized!` },
            { word: `rows and columns`, definition: `Horizontal lines and vertical lines.`,
              audioPrompt: `Rows and columns are horizontal lines and vertical lines. The vertical format has rows (the numbers) and columns (the place values). Together they form a grid that organizes everything!` },
          ],
        },

        {
          id: `l07-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `STEP 1: Add the ONES`,
          paragraphs: [
            `Always start at the ONES column! The rightmost column! The smallest place!`,
            `Let's try 421 + 358. Ones column: 1 + 8 = 9! Write the 9 directly BELOW the line, in the ones column! Try 632 + 245. Ones: 2 + 5 = 7! Write 7 below in ones! One more — 503 + 286. Ones: 3 + 6 = 9! Always check that the answer fits in one digit (0-9)!`,
          ],
          image: `/explorer-assets/math/l07-s2-ones-first.webp`,
          imageCaption: `Step 1: ones column first! 421 + 358 → 1 + 8 = 9!`,
          vocab: [
            { word: `rightmost`,         definition: `Farthest to the right.`,
              audioPrompt: `Rightmost means farthest to the right. The rightmost column is the ones place — start here. Why right first? Because regrouping later works smoothly that way!` },
            { word: `first move`,        definition: `The opening step.`,
              audioPrompt: `First move is the opening step. Adding the ones is your first move in column addition. Always. Every time. Make it a habit — never start anywhere else!` },
            { word: `fits in one digit`, definition: `Result is 0-9.`,
              audioPrompt: `Fits in one digit means the result is 0 through 9 — no overflow. For now, every column answer fits. When column answers don't fit (like 7+8=15), you have to regroup. That's coming next lesson!` },
          ],
        },

        {
          id: `l07-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `STEP 2: Add the TENS`,
          paragraphs: [
            `After ones, MOVE LEFT to the TENS column!`,
            `Back to 421 + 358. Tens: 2 + 5 = 7! Write 7 below in tens! So far: "79" below the line! Try 632 + 245. Tens: 3 + 4 = 7! Below: "77"! Try 503 + 286. Tens: 0 + 8 = 8! Below: "89"! When one number has 0 in a column, that column just becomes the OTHER number's digit! Easy!`,
          ],
          image: `/explorer-assets/math/l07-s3-tens-next.webp`,
          imageCaption: `Step 2: tens column! 421 + 358 → 2 + 5 = 7!`,
          vocab: [
            { word: `move left`,    definition: `Shift to the next bigger place.`,
              audioPrompt: `Move left means shift to the next bigger place. After ones, move left to tens. After tens, move left to hundreds. Each step takes you to a place ten times bigger!` },
            { word: `same skill`,   definition: `The method doesn't change.`,
              audioPrompt: `Same skill means the method doesn't change. Adding tens uses the same skill as adding ones. You add two single digits. Write the result. Same skill, different column!` },
            { word: `zero column`,  definition: `One number has 0 in a column.`,
              audioPrompt: `A zero column is when one number has 0 in a column. The answer equals the other digit. Like 503 plus 286 in the tens — 0 plus 8 is just 8. Zeros are the easiest cases!` },
          ],
        },

        {
          id: `l07-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `STEP 3: Add the HUNDREDS`,
          paragraphs: [
            `One more column to go! MOVE LEFT to the HUNDREDS!`,
            `Back to 421 + 358. Hundreds: 4 + 3 = 7! Write 7 below in hundreds. FINAL ANSWER: 779! So 421 + 358 = 779! Done! Try 632 + 245. Hundreds: 6 + 2 = 8! Final: 877! Try 503 + 286. Hundreds: 5 + 2 = 7! Final: 789! THREE STEPS. Right to left. Done!`,
          ],
          image: `/explorer-assets/math/l07-s4-hundreds-last.webp`,
          imageCaption: `Step 3: hundreds last! 421 + 358 = 779!`,
          vocab: [
            { word: `final answer`, definition: `The complete sum.`,
              audioPrompt: `Final answer is the complete sum below the line. Once you finish the hundreds column, reading what's below the line gives you the answer. The final answer is the goal of every problem!` },
            { word: `formula`,      definition: `A set of steps that works every time.`,
              audioPrompt: `A formula is a set of steps that works every time. The 3-step method is your addition formula. Always the same sequence — ones first, then tens, then hundreds. Always works!` },
            { word: `automatic`,    definition: `Happening without thinking.`,
              audioPrompt: `Automatic means happening without thinking. With practice, column addition becomes automatic. At first you remind yourself of each step. After enough practice, your hands just DO it!` },
          ],
        },

        {
          id: `l07-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `PATTERNS Make It Easy`,
          paragraphs: [
            `After a few additions, you start NOTICING patterns! Patterns make math FAST!`,
            `Pattern 1: When one number has a ZERO in a column, that column is SUPER EASY! Pattern 2: When BOTH digits are SMALL, it's quick! Pattern 3: When one number is shorter (like 25 + 142), the missing column is treated as ZERO! Patterns help your eyes spot easy problems fast!`,
          ],
          image: `/explorer-assets/math/l07-s5-pattern-emerges.webp`,
          imageCaption: `Patterns: zeros are easy. Small digits are fast!`,
          vocab: [
            { word: `pattern`,        definition: `Something that repeats.`,
              audioPrompt: `A pattern is something that repeats. Recognizing patterns makes addition faster. Spot a zero column? Easy. Spot small digits? Fast. Patterns help you predict what's coming!` },
            { word: `shorter number`, definition: `Has fewer digits.`,
              audioPrompt: `A shorter number has fewer digits. With shorter numbers, the missing places count as 0. So 25 plus 142 — the 25 has no hundreds, like 025. Treat missing digits as zero!` },
            { word: `attack`,         definition: `Confidently take on.`,
              audioPrompt: `To attack is to confidently take on. Patterns help you attack problems fast. When you see a problem, you immediately know — easy or tricky? Smart math kids attack problems!` },
          ],
        },

        {
          id: `l07-mag-6`,
          type: `magazine`,
          section: 6,
          headline: `Practice Builds Confidence`,
          paragraphs: [
            `{name} — column addition gets EASY when you PRACTICE!`,
            `The first few problems might feel slow. That's normal! After a few, you'll start to FLOW! After more, you won't think about the steps — you'll just DO them! Pro tip: when practicing, say each step OUT LOUD! "Ones: 5 + 3 = 8. Tens: 2 + 4 = 6. Answer: 68!" After a week, this'll feel natural!`,
          ],
          image: `/explorer-assets/math/l07-s6-confident.webp`,
          imageCaption: `Practice = confidence!`,
          vocab: [
            { word: `practice`,   definition: `Doing something over and over.`,
              audioPrompt: `Practice is doing something over and over to get better. Practice turns hard into easy. The kid who practices ten problems a day becomes confident. Practice is the magic!` },
            { word: `repetition`, definition: `Doing the same thing many times.`,
              audioPrompt: `Repetition is doing the same thing many times. Repetition is how the brain locks in new skills. Each repetition builds the brain pathway stronger. Soon the skill is locked in!` },
            { word: `reps`,       definition: `Short for repetitions.`,
              audioPrompt: `Reps is short for repetitions. You need reps to get great at addition. Like reps at a gym build muscle, reps at math build skill. Twenty problems a week makes you fast!` },
          ],
        },

        {
          id: `l07-game`,
          type: `interactive`,
          format: `drag-match`,
          guideText: `Let's try it, {name}! Here are 4 column-additions. Drag each one — which STEP is it? Do you add this FIRST, NEXT, or LAST?`,
          buckets: [
            { id: `step_1`, label: `1️⃣ FIRST (ones)`,    color: `#FBBF24` },
            { id: `step_2`, label: `2️⃣ NEXT (tens)`,    color: `#34D399` },
            { id: `step_3`, label: `3️⃣ LAST (hundreds)`, color: `#A78BFA` },
          ],
          items: [
            { id: `l07-g1`, image: `l07-game-1.webp`, label: `Add 8 ones + 3 ones`,
              matchPhrase: `Yes! Ones FIRST! Always start with the ones column — the rightmost!`,
              correctMatch: `step_1` },
            { id: `l07-g2`, image: `l07-game-2.webp`, label: `Add 2 tens + 7 tens`,
              matchPhrase: `Great! Tens are NEXT! After ones, move left to tens!`,
              correctMatch: `step_2` },
            { id: `l07-g3`, image: `l07-game-3.webp`, label: `Add 4 hundreds + 1 hundred`,
              matchPhrase: `Yes! Hundreds are LAST! After tens, move left to hundreds — the leftmost column!`,
              correctMatch: `step_3` },
            { id: `l07-g4`, image: `l07-game-4.webp`, label: `Add 6 ones + 1 one`,
              matchPhrase: `Perfect! Another ONES addition — that's FIRST! Right to left, always!`,
              correctMatch: `step_1` },
          ],
        },

        {
          id: `l07-quiz`,
          type: `quiz`,
          guideText: `Let's see what you remember, {name}!`,
          questions: [
            { id: `l07-q1`, format: `multiple-choice`,
              question: `In column addition, which column do you ADD FIRST?`,
              options: [`Hundreds`, `ONES — the rightmost column, always first`, `Tens`, `Random`],
              correctIndex: 1,
              explanation: `Ones first! The rightmost column. Then move left to tens, then hundreds!` },
            { id: `l07-q2`, format: `multiple-choice`,
              question: `What is 421 + 358?`,
              options: [`679`, `779`, `879`, `729`],
              correctIndex: 1,
              explanation: `779! Ones: 1 + 8 = 9. Tens: 2 + 5 = 7. Hundreds: 4 + 3 = 7. Final: 779!` },
            { id: `l07-q3`, format: `multiple-choice`,
              question: `What is 503 + 286?`,
              options: [`789`, `689`, `889`, `709`],
              correctIndex: 0,
              explanation: `789! Ones: 3 + 6 = 9. Tens: 0 + 8 = 8 (zero column easy!). Hundreds: 5 + 2 = 7. Final: 789!` },
            { id: `l07-q4`, format: `true-false`,
              question: `When one number is SHORTER (like 25 + 142), the missing place is treated as 0.`,
              correctAnswer: true,
              explanation: `True! 25 has no hundreds, so it's like 025. Then add place by place!` },
            { id: `l07-q5`, format: `fill-blank`,
              question: `In the VERTICAL FORMAT, you stack the numbers and draw a ___ underneath before adding.`,
              options: [`line`, `circle`, `cube`, `cloud`],
              correctIndex: 0,
              explanation: `A line! The horizontal line separates the numbers from the answer!` },
            { id: `l07-q6`, format: `multiple-choice`,
              question: `How do you get FASTER at column addition?`,
              options: [`Magic`, `PRACTICE — do many problems and the brain locks in the skill`, `Just guess`, `Skip it`],
              correctIndex: 1,
              explanation: `Practice! Reps build the brain pathway. Repetition turns hard into easy!` },
          ],
        },

        {
          id: `l07-realworld`,
          type: `real-world`,
          guideText: `Here's something cool, {name}! The right-to-left rule has a SECRET reason! When columns OVERFLOW, you have to "carry" extra to the next column — and carrying ONLY works right-to-left! Old math teachers figured this out THOUSANDS of years ago!`,
          familyAdventure: `Together, play SPEED ROUNDS! Make 10 simple addition problems (3-digit numbers, no carries). Time how long it takes each person! Race! Then repeat the same 10 the next day. See how much faster you get! Reps work!`,
          creativePrompt: `Create an ADDITION RAP! Make up a rhyme that helps you remember column addition. Example: "Start with ones, move to tens, then hundreds is where it ends!" Make your own catchy chant! Say it while doing problems!`,
        },

        {
          id: `l07-celebration`,
          type: `celebration`,
          message: `Solid work, {name}! Column addition is getting comfortable! The vertical format. Right to left. Ones, tens, hundreds. Three steps! You've earned this skill! Next lesson we tackle the trickier case — when a column adds to MORE THAN 9. That's REGROUPING! Remi is so proud! 🦝`,
          badge: `column-addition-explorer`,
          badgeName: `Column Addition Explorer`,
          xpEarned: 50,
        },

      ],
    },
  ],
};

export default MATH_L07;

// ─── Dev asset check ─────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const mags  = MATH_L07.lessons[0].screens.filter(s => s.type === 'magazine').length;
  const game  = MATH_L07.lessons[0].screens.find(s => s.type === 'interactive')?.items?.length ?? 0;
  const quiz  = MATH_L07.lessons[0].screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  console.log(`[LESSON-MATH-L07] Loaded: "Adding Column by Column" with ${mags} magazine sections, ${game} game items, ${quiz} quiz questions`);
}
