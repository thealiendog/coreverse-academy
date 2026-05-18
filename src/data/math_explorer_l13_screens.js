// ─────────────────────────────────────────────────────────────────────────────
// MATH  |  L13 — Column Subtraction
// Age band : explorers (6–8)   Guide: remi
// Standards: CCSS 2.NBT.B.5 / 2.NBT.B.7 (column subtraction fluency, no borrowing)
// ─────────────────────────────────────────────────────────────────────────────

const MATH_L13 = {
  ageBand:   `explorers`,
  subjectId: `math`,
  guide:     `remi`,

  lessons: [
    {
      id:        `math-6-8-13`,
      title:     `Column Subtraction`,
      duration:  12,
      xpReward:  50,
      badge:     `column-subtraction-explorer`,
      badgeName: `Column Subtraction Explorer`,

      screens: [

        {
          id: `l13-welcome`,
          type: `welcome`,
          guideText: `Hey {name}, Remi here. Last lesson you learned the BIG IDEA of subtraction — place by place, same as addition. Today we PRACTICE the column method. More worked examples. Some zero tricks. Patterns to spot. After today, basic subtraction will feel as natural as addition. Let's drill.`,
          headline: `Column Subtraction`,
          subtitle: `The vertical method — practiced until it feels automatic`,
          visual: `/explorer-assets/math/l13-welcome.webp`,
        },

        {
          id: `l13-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `The VERTICAL Format for Subtraction`,
          paragraphs: [
            `The vertical format for subtraction works EXACTLY like addition's vertical format. Same setup, different operation.`,
            `Write the BIGGER number on TOP. Write the SMALLER number BELOW IT, lined up by place. Draw a HORIZONTAL LINE underneath. Put a MINUS sign on the left to show subtraction. That's the layout. Like addition, this format forces alignment — each digit lined up with its place-value partner. Once your numbers are stacked correctly, the subtraction becomes a series of small column problems. Three columns, three little subtractions. Then you read the answer below the line. Same structure as addition. Different sign. Different operation. Same skill.`,
          ],
          image: `/explorer-assets/math/l13-s1-vertical-minus.webp`,
          imageCaption: `Vertical format: bigger number on top, smaller below, line drawn, MINUS sign on left.`,
          vocab: [
            { word: `bigger on top`,  definition: `The LARGER number goes on TOP. BIGGER ON TOP is the rule for basic subtraction.`,
              audioPrompt: `Bigger on top, {name}, is the rule for basic subtraction. The larger number always goes on top. The smaller goes below. Why? Because you're taking AWAY from the bigger amount. You can't take away more than you have. Top is the starting amount. Bottom is what's removed.` },
            { word: `vertical format`, definition: `Numbers STACKED on top of each other. The VERTICAL FORMAT is the standard for column subtraction.`,
              audioPrompt: `The vertical format, {name}, is numbers stacked on top of each other. The vertical format is the standard for column subtraction. Same as addition. The layout makes columns line up automatically. Numbers stacked. Line drawn. Sign on the left. Answer below.` },
            { word: `series`,         definition: `A LIST happening in ORDER. Subtraction is a SERIES of small column problems.`,
              audioPrompt: `A series, {name}, is a list happening in order. Subtraction is a series of small column problems. First column. Then next. Then next. Each one its own small subtraction. The series is right to left — ones, then tens, then hundreds. Series helps your brain manage the steps.` },
          ],
        },

        {
          id: `l13-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `STEP 1: Subtract the ONES`,
          paragraphs: [
            `Always start at the ONES column. The rightmost. Same as addition.`,
            `Let's solve 957 - 324. Look at the ones column: 7 - 4 = 3. Write 3 below the line in the ones column. Try another. 685 - 251. Ones: 5 - 1 = 4. Write 4. Try 794 - 462. Ones: 4 - 2 = 2. Write 2. NOTICE — the top digit in each column is ALWAYS bigger than the bottom (for today). That's our rule for now. Each column subtracts cleanly. Step 1 is your FIRST MOVE every single time. Always ones, always first, always at the right edge of the problem.`,
          ],
          image: `/explorer-assets/math/l13-s2-ones-step.webp`,
          imageCaption: `Step 1: ones column first. 957 - 324 → ones: 7 - 4 = 3. Always start right.`,
          vocab: [
            { word: `first move`,     definition: `The OPENING step. Subtracting ONES is your FIRST MOVE every time.`,
              audioPrompt: `First move, {name}, is the opening step. Subtracting ones is your first move every time. Same first move as addition. Right column first. Always. Never start anywhere else in column subtraction. The pattern is universal — and it's important when borrowing comes into play later.` },
            { word: `top is bigger`,  definition: `The TOP DIGIT exceeds the bottom. For now, TOP IS BIGGER in every column.`,
              audioPrompt: `Top is bigger, {name}, means the top digit exceeds the bottom. For now, top is bigger in every column. This makes subtraction clean. We can just subtract straight up. When the top is smaller, you have to borrow — but that's the next lesson. Today, easy mode.` },
            { word: `clean subtract`, definition: `WITHOUT borrowing. CLEAN SUBTRACT happens when top ≥ bottom in every column.`,
              audioPrompt: `Clean subtract, {name}, is without borrowing. Clean subtract happens when the top is bigger than or equal to the bottom in every column. No tricks needed. Just take the bottom from the top. That's all of today's examples. Master clean subtract first, then we add the borrowing trick.` },
          ],
        },

        {
          id: `l13-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `STEP 2: Subtract the TENS`,
          paragraphs: [
            `After ones, MOVE LEFT to the TENS column.`,
            `Back to 957 - 324. Tens: 5 - 2 = 3. Write 3 below the line, in the tens column. Below the line so far: "33". Try 685 - 251. Tens: 8 - 5 = 3. Below the line: "34". Try 794 - 462. Tens: 9 - 6 = 3. Below the line: "32". Same exact skill as ones — just one column over. Each column is its own little subtraction problem. Three columns, three little problems. Easy when you take them one at a time.`,
          ],
          image: `/explorer-assets/math/l13-s3-tens-step.webp`,
          imageCaption: `Step 2: tens column. 957 - 324 → tens: 5 - 2 = 3. One column at a time.`,
          vocab: [
            { word: `one at a time`,  definition: `Each column SOLVED separately. Take them ONE AT A TIME — don't try all at once.`,
              audioPrompt: `One at a time, {name}, is each column solved separately. Take them one at a time — don't try all at once. The brain can only focus on one column at a time. That's actually a feature, not a problem. Solving one column at a time keeps you focused and accurate.` },
            { word: `same skill`,     definition: `The METHOD doesn't change. Tens use the SAME SKILL as ones — just shifted one column left.`,
              audioPrompt: `Same skill, {name}, means the method doesn't change. Tens use the same skill as ones — just shifted one column left. You subtract one digit from another. Write the answer. Move on. Same skill, different column. The pattern repeats at every place value.` },
            { word: `moving left`,    definition: `SHIFT toward bigger places. After ones, MOVE LEFT to tens, then hundreds.`,
              audioPrompt: `Moving left, {name}, is shift toward bigger places. After ones, move left to tens, then hundreds. Each shift takes you to a place value ten times bigger. Left-moving is the rhythm of all column math. Right starts the journey, left moves toward the answer.` },
          ],
        },

        {
          id: `l13-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `STEP 3: Subtract the HUNDREDS`,
          paragraphs: [
            `One more column. MOVE LEFT again to the HUNDREDS.`,
            `Back to 957 - 324. Hundreds: 9 - 3 = 6. Write 6 below the line in hundreds. FINAL: 633. So 957 - 324 = 633. Try 685 - 251. Hundreds: 6 - 2 = 4. Below: 434. So 685 - 251 = 434. Try 794 - 462. Hundreds: 7 - 4 = 3. Below: 332. So 794 - 462 = 332. THREE STEPS. Right to left. Ones, tens, hundreds. That's the formula. The same formula works for ANY clean subtraction. Practice it until your hands know the steps before your brain even thinks.`,
          ],
          image: `/explorer-assets/math/l13-s4-hundreds-step.webp`,
          imageCaption: `Step 3: hundreds last. 957 - 324 = 633. Three steps. Right to left. Done.`,
          vocab: [
            { word: `final`,          definition: `The LAST step. The HUNDREDS column is the FINAL step in three-digit subtraction.`,
              audioPrompt: `Final, {name}, is the last step. The hundreds column is the final step in three-digit subtraction. Once it's done, you have your complete answer below the line. Reading from left to right gives you the difference. Three columns, three steps, done.` },
            { word: `formula`,        definition: `A SET of STEPS that works every time. The 3-step METHOD is your subtraction FORMULA.`,
              audioPrompt: `A formula, {name}, is a set of steps that works every time. The three-step method is your subtraction formula. Ones, tens, hundreds. Always. Works for two-digit subtractions too — you just have fewer columns. Works for four-digit — you have one more column. The formula scales.` },
            { word: `hands know`,     definition: `The MOTION becomes AUTOMATIC. With practice, your HANDS KNOW the steps.`,
              audioPrompt: `Hands know, {name}, means the motion becomes automatic. With practice, your hands know the steps. Your brain doesn't have to consciously think about each one. The hand just writes the answer below ones, then below tens, then below hundreds. Like muscle memory in sports. Practice gets you there.` },
          ],
        },

        {
          id: `l13-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Tricky Case: ZEROS`,
          paragraphs: [
            `Quick trick — what happens when a ZERO shows up in subtraction?`,
            `When the BOTTOM digit is 0: easy. The column doesn't change. Like 845 - 230. Ones: 5 - 0 = 5. Tens: 4 - 3 = 1. Hundreds: 8 - 2 = 6. Answer: 615. Bottom zero means "subtract nothing" — keep the top digit. When the TOP digit is 0: tricky! 0 minus anything bigger gives a negative number, so we'd need to borrow. (But borrowing is L14 — so today, we don't have this case.) When BOTH are 0: easiest of all. 0 - 0 = 0. Just write 0 below. Zeros are usually FRIENDS in subtraction. They make some columns easier. Don't fear them. Just remember — bottom zero leaves the top alone.`,
          ],
          image: `/explorer-assets/math/l13-s5-zero-tricks.webp`,
          imageCaption: `Zero tricks: bottom 0 = column stays (top - 0 = top). Both 0 = 0. Easy cases.`,
          vocab: [
            { word: `bottom zero`,    definition: `When the BOTTOM digit is 0. BOTTOM ZERO leaves the top digit unchanged.`,
              audioPrompt: `A bottom zero, {name}, is when the bottom digit is zero. Bottom zero leaves the top digit unchanged. Like five minus zero equals five. You're subtracting nothing, so the top stays. Bottom zeros are friendly — they make subtraction even easier. Recognize them and breeze through.` },
            { word: `both zero`,      definition: `Both DIGITS are 0. BOTH ZERO column just becomes 0 in the answer.`,
              audioPrompt: `Both zero, {name}, is both digits are zero. Both zero column just becomes zero in the answer. Zero minus zero is zero. Easiest case of all. Sometimes you'll see two zeros stacked. Just write zero below. Move on.` },
            { word: `friend`,         definition: `HELPFUL element. Zeros can be FRIENDS in subtraction — they make some columns easy.`,
              audioPrompt: `A friend, {name}, is a helpful element. Zeros can be friends in subtraction — they make some columns easy. Bottom zero means the column stays the same. Both zero means the answer is zero. Zeros aren't scary. Often they're the easiest digits in a column.` },
          ],
        },

        {
          id: `l13-mag-6`,
          type: `magazine`,
          section: 6,
          headline: `Pattern Practice Makes It NATURAL`,
          paragraphs: [
            `{name} — like addition, subtraction gets EASY when you practice. Pattern recognition speeds you up.`,
            `Easy patterns: ANY column with a BOTTOM ZERO (column stays). Columns where TOP and BOTTOM are CLOSE (like 8 - 5 = 3). Numbers where every column has top much bigger than bottom (no risk of borrowing). Trickier patterns (coming next lesson): when a TOP DIGIT is SMALLER than the bottom (you'll need to borrow). When ZEROS appear on TOP (extra borrowing challenge). For today, scan each problem. If every top digit is ≥ its bottom digit, you've got clean subtraction. Solve it confidently. Recognizing patterns is what makes math fast. With practice, you won't even need to think about which pattern — your eyes will see it instantly.`,
          ],
          image: `/explorer-assets/math/l13-s6-pattern-clear.webp`,
          imageCaption: `Pattern recognition: bottom zeros = easy. Close digits = easy. Top < bottom = need to borrow (L14).`,
          vocab: [
            { word: `scan`,           definition: `QUICKLY look at each part. SCAN the problem to spot patterns before solving.`,
              audioPrompt: `To scan, {name}, is to quickly look at each part. Scan the problem to spot patterns before solving. A quick scan tells you what kind of problem you've got. Clean? Easy. Borrowing needed? Slow down. Scanning is a one-second skill that saves time and prevents mistakes.` },
            { word: `instantly`,      definition: `IMMEDIATELY at a glance. With practice, you'll spot patterns INSTANTLY.`,
              audioPrompt: `Instantly, {name}, means immediately at a glance. With practice, you'll spot patterns instantly. Your eyes will see the problem and your brain will already know the plan. That's expert-level pattern recognition. Build it through reps. The more you do, the faster you get.` },
            { word: `confident`,      definition: `SURE of yourself. With pattern recognition, you can subtract CONFIDENT and fast.`,
              audioPrompt: `Confident, {name}, means sure of yourself. With pattern recognition, you can subtract confident and fast. Confidence comes from understanding — knowing what pattern you've got, what method to use. Practice builds confidence. Confidence makes you faster. Faster reinforces confidence. Virtuous cycle.` },
          ],
        },

        {
          id: `l13-game`,
          type: `interactive`,
          format: `drag-match`,
          guideText: `Let's see what you remember, {name}.`,
          buckets: [
            { id: `fact`, label: `✅ Yes, that's true!`, color: `#34D399` },
            { id: `myth`, label: `❌ No way!`,         color: `#F87171` },
          ],
          items: [
            { id: `l13-g1`, image: `l13-game-1.webp`, label: `Subtraction goes RIGHT TO LEFT — start at ones, just like addition.`,
              matchPhrase: `Yes! Same direction as addition. Ones first. Then tens. Then hundreds. Right to left, always.`,
              correctMatch: `fact` },
            { id: `l13-g2`, image: `l13-game-2.webp`, label: `PRACTICE makes column subtraction faster — reps build automatic skill.`,
              matchPhrase: `True! Practice is everything. Pattern recognition speeds you up. The more reps, the more automatic. Same as addition.`,
              correctMatch: `fact` },
            { id: `l13-g3`, image: `l13-game-3.webp`, label: `You can write subtraction numbers ANYWHERE on the page — alignment doesn't matter.`,
              matchPhrase: `Not at all! Numbers must be LINED UP by place value. Ones under ones, tens under tens. Misalignment causes wrong-place subtraction and wrong answers.`,
              correctMatch: `myth` },
            { id: `l13-g4`, image: `l13-game-4.webp`, label: `You can put the SMALLER number on top and the BIGGER number on bottom — subtraction still works.`,
              matchPhrase: `Definitely not! Bigger on TOP. Smaller below. You're taking away from a bigger amount. Reversing them gives wrong (or negative) answers.`,
              correctMatch: `myth` },
          ],
        },

        {
          id: `l13-quiz`,
          type: `quiz`,
          guideText: `Let's see what you remember, {name}.`,
          questions: [
            { id: `l13-q1`, format: `multiple-choice`,
              question: `What is 957 - 324?`,
              options: [`533`, `633`, `733`, `653`],
              correctIndex: 1,
              explanation: `633! Ones: 7 - 4 = 3. Tens: 5 - 2 = 3. Hundreds: 9 - 3 = 6. Place by place, right to left.` },
            { id: `l13-q2`, format: `multiple-choice`,
              question: `In column subtraction, you write the BIGGER number where?`,
              options: [`On the bottom`, `On TOP — bigger number on top, smaller below`, `On the left`, `On the right`],
              correctIndex: 1,
              explanation: `Bigger on top! You're taking away from a starting amount, so the bigger number is the starting amount. Smaller below = what's being removed.` },
            { id: `l13-q3`, format: `multiple-choice`,
              question: `What is 685 - 251?`,
              options: [`424`, `434`, `534`, `444`],
              correctIndex: 1,
              explanation: `434! Ones: 5 - 1 = 4. Tens: 8 - 5 = 3. Hundreds: 6 - 2 = 4. Place by place, right to left.` },
            { id: `l13-q4`, format: `true-false`,
              question: `When the BOTTOM digit in a column is 0, the TOP digit stays the same — like 5 - 0 = 5.`,
              correctAnswer: true,
              explanation: `True! Bottom zero = subtracting nothing. The top stays the same. Friendly case. 5 - 0 = 5. 8 - 0 = 8. Same as ones place.` },
            { id: `l13-q5`, format: `fill-blank`,
              question: `Column subtraction starts at the ___ column (rightmost) and works LEFT toward hundreds.`,
              options: [`ones`, `tens`, `hundreds`, `thousands`],
              correctIndex: 0,
              explanation: `Ones! Same as addition. Always start right (ones) and work left (toward bigger places). Direction matters when borrowing comes into play later.` },
            { id: `l13-q6`, format: `multiple-choice`,
              question: `What is 845 - 230?`,
              options: [`615`, `605`, `625`, `515`],
              correctIndex: 0,
              explanation: `615! Ones: 5 - 0 = 5 (bottom zero!). Tens: 4 - 3 = 1. Hundreds: 8 - 2 = 6. Final: 615.` },
          ],
        },

        {
          id: `l13-realworld`,
          type: `real-world`,
          guideText: `Here's a real-world truth, {name}. Most people use SUBTRACTION more than addition in daily life — they just don't always realize it. Every time you check change at a store, that's subtraction (the cashier did it for you). Every time you wonder "how much time until ___?", that's subtraction. Every time you check how far you have left to go, subtraction. How many days until your birthday? Subtraction. How much battery is left on a device? Subtraction. Adults do subtraction constantly — sometimes in their head, sometimes on paper, sometimes with calculators. The skill you're building now is one of the most-used adult skills. Keep practicing.`,
          familyAdventure: `Together, do "TIME LEFT" math. Pick something that's coming up — bedtime, dinner, a birthday, a vacation. Calculate (subtract!) how much time is left. "Bedtime is at 8:30. Right now it's 7:15. So 8:30 - 7:15 = 1 hour 15 minutes left." Do this for several events throughout the day. Subtraction shows up CONSTANTLY in real life timing. The more you practice in real situations, the more natural it gets.`,
          creativePrompt: `Make a "MINUS QUEST" treasure map. Draw a treasure map with a STARTING POINT (a big number, like 100). At each stop along the way, you "spend" some number (-15, -20, -8, etc.). At the end, calculate what's LEFT. Make it an adventure. "Started with 100 gold pieces. Spent 25 at the inn. Lost 10 to a trickster. Bought a sword for 30. Final: 100 - 25 - 10 - 30 = 35 gold!" Have fun with it.`,
        },

        {
          id: `l13-celebration`,
          type: `celebration`,
          message: `Solid drill, {name}. Column subtraction is getting comfortable. The vertical format. Right to left. Ones, tens, hundreds. Bottom zeros are friends. Pattern recognition speeds you up. Today's was all CLEAN subtraction — no borrowing needed. Next lesson is the BIG ONE — BORROWING. The trick for when a top digit is smaller than the bottom. Get ready to level up. — Remi 🦝`,
          badge: `column-subtraction-explorer`,
          badgeName: `Column Subtraction Explorer`,
          xpEarned: 50,
        },

      ],
    },
  ],
};

export default MATH_L13;

// ─── Dev asset check ───
if (import.meta.env?.DEV) {
  const mags  = MATH_L13.lessons[0].screens.filter(s => s.type === 'magazine').length;
  const game  = MATH_L13.lessons[0].screens.find(s => s.type === 'interactive')?.items?.length ?? 0;
  const quiz  = MATH_L13.lessons[0].screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  console.log(`[LESSON-MATH-L13] Loaded: "Column Subtraction" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
}
