// ─────────────────────────────────────────────────────────────────────────────
// MATH  |  L07 — Adding Column by Column
// Age band : explorers (6–8)   Guide: remi
// Standards: CCSS 2.NBT.B.5 / 2.NBT.B.7 (column addition fluency, no regrouping)
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
          guideText: `Hi {name}, Remi here. Last lesson you learned the BIG IDEA — add place by place. Today we PRACTICE that idea using the classic VERTICAL FORMAT — stacking numbers and adding column by column. The more you practice, the faster you get. Then column addition starts to feel as easy as 3 + 4. Let's drill some examples.`,
          headline: `Adding Column by Column`,
          subtitle: `The classic vertical method — practiced until it feels automatic`,
          visual: `/explorer-assets/math/l07-welcome.webp`,
        },

        {
          id: `l07-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `The VERTICAL Format`,
          paragraphs: [
            `Math people use a special LAYOUT for column addition called the VERTICAL FORMAT. You'll see it everywhere.`,
            `Here's how it works. Write the FIRST number. Right BELOW it, write the SECOND number — lined up digit by digit. Draw a HORIZONTAL LINE underneath both. Put a "+" sign on the left to remind you to add. That's the vertical format. Now you have ROWS (each number) and COLUMNS (each place value). Each column has its own little addition problem. Solve from RIGHT to LEFT — ones first, then tens, then hundreds. Write each answer digit BELOW the line, in its own column. Done. The vertical format is the visual home of multi-digit addition.`,
          ],
          image: `/explorer-assets/math/l07-s1-vertical-stack.webp`,
          imageCaption: `Vertical format: numbers stacked, line drawn, + sign on left. Each column adds itself.`,
          vocab: [
            { word: `vertical`,       definition: `Going UP and DOWN. VERTICAL means numbers are stacked on top of each other.`,
              audioPrompt: `Vertical, {name}, means going up and down. Vertical means numbers are stacked on top of each other. The vertical format is one of the oldest layouts in math. People have been writing addition this way for hundreds of years. It works because it forces alignment — each digit in its proper column.` },
            { word: `format`,         definition: `A specific LAYOUT or WAY to organize. The VERTICAL FORMAT is the standard for column addition.`,
              audioPrompt: `A format, {name}, is a specific layout or way to organize. The vertical format is the standard for column addition. There are other ways to write addition — horizontal, for example. But vertical is best for multi-digit because it lines up the columns automatically. Format helps your brain stay organized.` },
            { word: `rows and columns`, definition: `HORIZONTAL lines and VERTICAL lines. The vertical format has ROWS (numbers) and COLUMNS (places).`,
              audioPrompt: `Rows and columns, {name}, are horizontal lines and vertical lines. The vertical format has rows (the numbers themselves) and columns (the place values going down). Each row is a different number. Each column is a different place value. Together they form a grid that organizes everything.` },
          ],
        },

        {
          id: `l07-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `STEP 1: Add the ONES`,
          paragraphs: [
            `Always start at the ONES column. The rightmost column. The smallest place.`,
            `Let's try 421 + 358. Look at the ones column: 1 + 8 = 9. Write the 9 directly BELOW the line, in the ones column. That's your ones answer. Try another. 632 + 245. Ones column: 2 + 5 = 7. Write 7 below the line in ones. One more. 503 + 286. Ones: 3 + 6 = 9. Write 9. Always check that the answer fits in one digit (0-9). For now, all our examples will work out cleanly. (When the column total is 10 or more, things get interesting — but that's L08.) Step 1 is YOUR FIRST MOVE every time you do a column addition. Make it a habit.`,
          ],
          image: `/explorer-assets/math/l07-s2-ones-first.webp`,
          imageCaption: `Step 1: ones column first. 421 + 358 → ones: 1 + 8 = 9. Write 9 below the line.`,
          vocab: [
            { word: `rightmost`,      definition: `FARTHEST to the RIGHT. The RIGHTMOST column is the ones place — start here.`,
              audioPrompt: `Rightmost, {name}, means farthest to the right. The rightmost column is the ones place — start here. Why right first? Because if you have to bundle up later (when ones overflow), starting from the right makes it work smoothly. Right to left is the universal rule of column addition.` },
            { word: `first move`,     definition: `The OPENING step. Adding the ONES is your FIRST MOVE in column addition.`,
              audioPrompt: `First move, {name}, is the opening step. Adding the ones is your first move in column addition. Always. Every time. Just like chess players open with certain moves, math people open column addition with the ones column. Make it a habit — never start anywhere else.` },
            { word: `fits in one digit`, definition: `Result is 0-9 (no overflow). For now, every column answer FITS IN ONE DIGIT.`,
              audioPrompt: `Fits in one digit, {name}, means the result is 0 through 9, no overflow. For now, every column answer fits in one digit. We picked the examples that way on purpose. When column answers don't fit (like 7 plus 8 equals 15), you have to regroup. That's coming next lesson. For today, everything fits.` },
          ],
        },

        {
          id: `l07-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `STEP 2: Add the TENS`,
          paragraphs: [
            `After ones, MOVE LEFT to the TENS column.`,
            `Back to 421 + 358. Tens column: 2 + 5 = 7. Write 7 below the line, in the tens column. Now you've got "79" growing below the line. Try 632 + 245. Tens: 3 + 4 = 7. Write 7. Below the line so far: "77". Try 503 + 286. Tens: 0 + 8 = 8. Write 8. Below the line: "89". When one number has a 0 in a column, that column just becomes the OTHER number's digit. Easy. The tens step is just like the ones step — you're just one column over to the left. Same skill, same pattern.`,
          ],
          image: `/explorer-assets/math/l07-s3-tens-next.webp`,
          imageCaption: `Step 2: tens column. 421 + 358 → tens: 2 + 5 = 7. Write 7 below in tens column.`,
          vocab: [
            { word: `move left`,      definition: `SHIFT to the NEXT bigger place. After ones, MOVE LEFT to tens.`,
              audioPrompt: `Move left, {name}, means shift to the next bigger place. After ones, move left to tens. After tens, move left to hundreds. Each step takes you to a place value ten times bigger. The leftward movement is the rhythm of column addition.` },
            { word: `same skill`,     definition: `The METHOD doesn't change. Adding tens uses the SAME SKILL as adding ones.`,
              audioPrompt: `Same skill, {name}, means the method doesn't change. Adding tens uses the same skill as adding ones. You add two single digits. Write the result. Move on. Same skill, different column. That's why column addition is doable — you're always doing the SAME basic move, just in different places.` },
            { word: `zero column`,    definition: `When one number has 0 in a column. ZERO COLUMN means the answer equals the OTHER digit.`,
              audioPrompt: `A zero column, {name}, is when one number has zero in a column. Zero column means the answer equals the other digit. Like 503 plus 286 in the tens — 0 plus 8 is just 8. Easy. Zero never adds anything, so the other number's digit is the answer. Don't let zeros trip you up — they're actually the easiest cases.` },
          ],
        },

        {
          id: `l07-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `STEP 3: Add the HUNDREDS`,
          paragraphs: [
            `One more column to go. MOVE LEFT again to the HUNDREDS.`,
            `Back to 421 + 358. Hundreds: 4 + 3 = 7. Write 7 below the line, in the hundreds column. FINAL ANSWER below the line: 779. So 421 + 358 = 779. Done! Try 632 + 245. Hundreds: 6 + 2 = 8. Below the line: 877. So 632 + 245 = 877. Try 503 + 286. Hundreds: 5 + 2 = 7. Below the line: 789. So 503 + 286 = 789. THREE STEPS. Right to left. Ones, then tens, then hundreds. Done. This is the formula. Use it every time. Eventually, your hands will know what to do before your brain even thinks.`,
          ],
          image: `/explorer-assets/math/l07-s4-hundreds-last.webp`,
          imageCaption: `Step 3: hundreds last. 421 + 358 → hundreds: 4 + 3 = 7. Final answer: 779. ✓`,
          vocab: [
            { word: `final answer`,   definition: `The COMPLETE sum below the line. FINAL ANSWER appears after all columns added.`,
              audioPrompt: `Final answer, {name}, is the complete sum below the line. Final answer appears after all columns added. Once you finish the hundreds column (or whatever the leftmost column is), reading what's below the line gives you the answer. The final answer is the goal of every problem.` },
            { word: `formula`,        definition: `A SET OF STEPS that works every time. The 3-step METHOD is your addition FORMULA.`,
              audioPrompt: `A formula, {name}, is a set of steps that works every time. The 3-step method is your addition formula. Step 1 ones. Step 2 tens. Step 3 hundreds. Always the same sequence. Always works. Formulas are time-savers. Once you know the formula, you don't have to think — you just do.` },
            { word: `automatic`,      definition: `Happening WITHOUT thinking. With practice, column addition becomes AUTOMATIC.`,
              audioPrompt: `Automatic, {name}, means happening without thinking. With practice, column addition becomes automatic. At first, you'll have to remind yourself of each step. After enough practice, your hands and brain just DO it. That's the magic of repetition. It turns hard things into easy automatic things.` },
          ],
        },

        {
          id: `l07-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `PATTERNS Make It Easy`,
          paragraphs: [
            `After you do a few column additions, you start NOTICING patterns. Patterns make math FAST.`,
            `Pattern 1 — when one number has a ZERO in a column, that column is super easy. (503 + 286: tens column is 0 + 8 = 8.) Pattern 2 — when BOTH digits are SMALL, it's quick. (212 + 134: each column adds small digits.) Pattern 3 — when one number is shorter (like 25 + 142), the missing column is treated as ZERO. So 25 has 0 hundreds, 2 tens, 5 ones. Lining up matters extra here — the 25 goes UNDER the LAST TWO digits of 142. Patterns help your eyes spot easy problems and warn you about tricky ones. Soon, you'll see addition problems and your brain will instantly know how to attack them.`,
          ],
          image: `/explorer-assets/math/l07-s5-pattern-emerges.webp`,
          imageCaption: `Patterns: zero columns (easy), small digits (fast), shorter numbers (treat missing place as 0).`,
          vocab: [
            { word: `pattern`,        definition: `Something that REPEATS. Recognizing PATTERNS makes addition faster.`,
              audioPrompt: `A pattern, {name}, is something that repeats. Recognizing patterns makes addition faster. Patterns let your brain take shortcuts. Spot a zero column? Easy. Spot small digits? Fast. Spot a shorter number? Line it up carefully. Patterns let you predict what's coming and breeze through problems.` },
            { word: `shorter number`, definition: `Has FEWER DIGITS. With SHORTER NUMBERS, the missing places count as 0.`,
              audioPrompt: `A shorter number, {name}, has fewer digits. With shorter numbers, the missing places count as 0. So 25 plus 142 — the 25 has no hundreds. It's like 025. So in the hundreds column, you add 0 plus 1 equals 1. Treating missing digits as zero is the trick to mixing different-length numbers.` },
            { word: `attack`,         definition: `To CONFIDENTLY TAKE ON. Patterns help you ATTACK problems fast.`,
              audioPrompt: `To attack, {name}, is to confidently take on. Patterns help you attack problems fast. When you see a problem, you immediately know — easy or tricky? Fast or slow? Where to start? Smart math kids attack problems instead of being scared by them. Patterns give you that confidence.` },
          ],
        },

        {
          id: `l07-mag-6`,
          type: `magazine`,
          section: 6,
          headline: `Practice Builds CONFIDENCE`,
          paragraphs: [
            `{name} — column addition gets EASY when you PRACTICE.`,
            `The first few problems might feel slow. You're checking each step. That's normal. After a few, you'll start to flow. After a few more, you won't even think about the steps anymore — you'll just DO them. That's how the brain learns. Repetition turns hard things into easy things. Pro tip — when practicing, say each step OUT LOUD. "Ones: 5 plus 3 is 8. Tens: 2 plus 4 is 6. Hundreds: 1 plus 1 is 2. Answer: 268." Speaking the steps makes them stick. After a week of practice, this method will feel as natural as walking. You've got the foundation. Now you just need REPS.`,
          ],
          image: `/explorer-assets/math/l07-s6-confident.webp`,
          imageCaption: `Practice = confidence. The more reps, the more automatic. Soon it'll feel as easy as walking.`,
          vocab: [
            { word: `practice`,       definition: `Doing something AGAIN AND AGAIN to get better. PRACTICE turns hard into easy.`,
              audioPrompt: `Practice, {name}, is doing something again and again to get better. Practice turns hard into easy. The kid who practices ten addition problems a day becomes a confident math kid. The kid who practices none stays uncertain. Practice is the magic. Repetition is the engine.` },
            { word: `repetition`,     definition: `Doing the SAME thing many TIMES. REPETITION is how the brain locks in new skills.`,
              audioPrompt: `Repetition, {name}, is doing the same thing many times. Repetition is how the brain locks in new skills. Athletes repeat moves until they're automatic. Musicians repeat songs until they're memorized. Math is the same. Each repetition builds the brain pathway stronger. Soon the skill is locked in.` },
            { word: `reps`,           definition: `Short for repetitions. You need REPS to get great at addition.`,
              audioPrompt: `Reps, {name}, is short for repetitions. You need reps to get great at addition. Like reps at a gym build muscle, reps at math build skill. Twenty addition problems a week makes you fast. Two hundred makes you a beast. The reps are what builds you up. Just keep doing them.` },
          ],
        },

        {
          id: `l07-game`,
          type: `interactive`,
          format: `drag-match`,
          guideText: `Let's see what you remember, {name}.`,
          buckets: [
            { id: `fact`, label: `✅ Yes, that's true!`, color: `#34D399` },
            { id: `myth`, label: `❌ No way!`,         color: `#F87171` },
          ],
          items: [
            { id: `l07-g1`, image: `l07-game-1.webp`, label: `Column addition always goes from RIGHT TO LEFT — ones first, then tens, then hundreds.`,
              matchPhrase: `Yes! Right to left, every time. Ones first. Tens next. Hundreds last. This direction matters for when regrouping shows up.`,
              correctMatch: `fact` },
            { id: `l07-g2`, image: `l07-game-2.webp`, label: `PRACTICE makes column addition FAST — the more reps, the more automatic it becomes.`,
              matchPhrase: `True! Practice turns hard into easy. Twenty problems a week and you'll get fast. Math is built on reps. Keep doing them.`,
              correctMatch: `fact` },
            { id: `l07-g3`, image: `l07-game-3.webp`, label: `You should always start column addition from the LEFTMOST column and work RIGHT.`,
              matchPhrase: `Not at all! Right to left, never left to right. Starting from the left causes problems when regrouping happens. Always start at ones.`,
              correctMatch: `myth` },
            { id: `l07-g4`, image: `l07-game-4.webp`, label: `You only get ONE TRY at addition — practicing the same problem twice is pointless.`,
              matchPhrase: `Definitely not! Practice is everything. Repetition builds skill. Doing problems over and over is exactly how you get good. Reps matter.`,
              correctMatch: `myth` },
          ],
        },

        {
          id: `l07-quiz`,
          type: `quiz`,
          guideText: `Let's see what you remember, {name}.`,
          questions: [
            { id: `l07-q1`, format: `multiple-choice`,
              question: `In column addition, which column do you ADD FIRST?`,
              options: [`Hundreds`, `ONES — the rightmost column, always first`, `Tens`, `Random`],
              correctIndex: 1,
              explanation: `Ones first! The rightmost column. Then move left to tens, then hundreds. Right to left is the universal order.` },
            { id: `l07-q2`, format: `multiple-choice`,
              question: `What is 421 + 358 using column addition?`,
              options: [`679`, `779`, `879`, `729`],
              correctIndex: 1,
              explanation: `779! Ones: 1 + 8 = 9. Tens: 2 + 5 = 7. Hundreds: 4 + 3 = 7. Final: 779.` },
            { id: `l07-q3`, format: `multiple-choice`,
              question: `What is 503 + 286?`,
              options: [`789`, `689`, `889`, `709`],
              correctIndex: 0,
              explanation: `789! Ones: 3 + 6 = 9. Tens: 0 + 8 = 8 (zero column easy!). Hundreds: 5 + 2 = 7. Final: 789.` },
            { id: `l07-q4`, format: `true-false`,
              question: `When one number is SHORTER (like 25 + 142), the missing place is treated as 0 — so 25 = 025 in the addition.`,
              correctAnswer: true,
              explanation: `True! 25 has no hundreds digit, so it's like 025. Then add place by place: 5 + 2 = 7. 2 + 4 = 6. 0 + 1 = 1. Total: 167.` },
            { id: `l07-q5`, format: `fill-blank`,
              question: `In the VERTICAL FORMAT, you stack the numbers on top of each other and draw a ___ underneath before adding.`,
              options: [`line`, `circle`, `cube`, `cloud`],
              correctIndex: 0,
              explanation: `A line! The horizontal line separates the numbers from the answer. Put a + sign on the left, line underneath, then add column by column.` },
            { id: `l07-q6`, format: `multiple-choice`,
              question: `How do you get FASTER at column addition?`,
              options: [`Magic`, `PRACTICE — do many problems and the brain locks in the skill`, `Just guess`, `Skip it`],
              correctIndex: 1,
              explanation: `Practice! Reps build the brain pathway. Twenty problems a week makes you fast. Two hundred makes you confident. Repetition turns hard into easy.` },
          ],
        },

        {
          id: `l07-realworld`,
          type: `real-world`,
          guideText: `Here's something interesting, {name}. The "right-to-left" rule of column addition has a SECRET reason. When columns OVERFLOW (more than 9), you have to "carry" the extra to the next column. That can ONLY work right-to-left, because carrying goes to a BIGGER place. If you tried to do it left-to-right, the carries would mess up columns you already finished. The old math teachers figured this out THOUSANDS of years ago. They didn't just pick a direction randomly — they picked the one that WORKS. You're learning a method that's been tested across centuries. It's reliable because it's logical. Next lesson, we'll see WHY this matters when regrouping enters the picture.`,
          familyAdventure: `Together, play SPEED ROUNDS of column addition. Make 10 simple addition problems on paper (3-digit numbers, no regrouping needed). Time how long it takes each person to solve all 10. Race! Then repeat the same 10 problems the next day. See how much faster you get. Notice — practice REALLY does make speed. Your brain gets quicker every round. That's the power of reps.`,
          creativePrompt: `Create an "ADDITION RAP." Make up a short rhyme or chant that helps you remember the column addition steps. Example: "Start with ones, move to tens, then hundreds is where it ends!" Make your own. Say it out loud while doing addition problems. Make it fun. Catchy rhymes help the brain remember the steps faster.`,
        },

        {
          id: `l07-celebration`,
          type: `celebration`,
          message: `Solid work, {name}! Column addition is getting more comfortable. The vertical format. Right to left. Ones, tens, hundreds. Three steps. You're seeing patterns. Practicing builds speed. You've earned this skill — and it's only going to get faster. Next lesson, we tackle the trickier case — when a column adds to MORE THAN 9. That's called REGROUPING (or "carrying"). It's the missing piece. Get ready to level up. — Remi 🦝`,
          badge: `column-addition-explorer`,
          badgeName: `Column Addition Explorer`,
          xpEarned: 50,
        },

      ],
    },
  ],
};

export default MATH_L07;

// ─── Dev asset check ───
if (import.meta.env?.DEV) {
  const mags  = MATH_L07.lessons[0].screens.filter(s => s.type === 'magazine').length;
  const game  = MATH_L07.lessons[0].screens.find(s => s.type === 'interactive')?.items?.length ?? 0;
  const quiz  = MATH_L07.lessons[0].screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  console.log(`[LESSON-MATH-L07] Loaded: "Adding Column by Column" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
}
