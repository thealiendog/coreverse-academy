// ─────────────────────────────────────────────────────────────────────────────
// MATH  |  L13 — Column Subtraction
// Age band : explorers (6–8)   Guide: remi
// Standards: CCSS 2.NBT.B.5 / 2.NBT.B.7
// REWRITE v2 (May 2026): Grade 1 accessible, TOP BIGGER / TOP SMALLER 2-bucket
// identification game tests recognizing which columns can subtract cleanly
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
          guideText: `Hey {name}, Remi here! Last lesson you learned the BIG IDEA of subtraction — place by place, same as addition! Today we PRACTICE the column method! More examples. Some zero tricks. Patterns to spot. After today, basic subtraction will feel natural!`,
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
            `The vertical format for subtraction works EXACTLY like addition's vertical format! Same setup, different operation!`,
            `Write the BIGGER number on TOP! Write the SMALLER number BELOW, lined up by place! Draw a HORIZONTAL LINE underneath! Put a MINUS sign on the left! Like addition, this format forces alignment — each digit lined up with its place-value partner! Three columns, three little subtractions. Then read the answer below!`,
          ],
          image: `/explorer-assets/math/l13-s1-vertical-minus.webp`,
          imageCaption: `Vertical format: bigger on top, smaller below, line drawn, MINUS sign on left!`,
          vocab: [
            { word: `bigger on top`,   definition: `The larger number goes on top.`,
              audioPrompt: `Bigger on top is the rule for basic subtraction. The larger number always goes on top. The smaller goes below. Why? Because you're taking AWAY from the bigger amount. Top is the starting amount!` },
            { word: `vertical format`, definition: `Numbers stacked on top of each other.`,
              audioPrompt: `The vertical format is numbers stacked on top of each other. The vertical format is the standard for column subtraction. Same as addition. The layout makes columns line up automatically!` },
            { word: `series`,          definition: `A list happening in order.`,
              audioPrompt: `A series is a list happening in order. Subtraction is a series of small column problems. First column. Then next. The series is right to left — ones, then tens, then hundreds!` },
          ],
        },

        {
          id: `l13-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `STEP 1: Subtract the ONES`,
          paragraphs: [
            `Always start at the ONES column! The rightmost! Same as addition!`,
            `Let's solve 957 - 324. Ones column: 7 - 4 = 3! Write 3 below the line! Try 685 - 251. Ones: 5 - 1 = 4! Write 4! Try 794 - 462. Ones: 4 - 2 = 2! Write 2! NOTICE — the top digit is ALWAYS bigger than the bottom (for today). That's our rule! Each column subtracts cleanly!`,
          ],
          image: `/explorer-assets/math/l13-s2-ones-step.webp`,
          imageCaption: `Step 1: ones column first! 957 - 324 → ones: 7 - 4 = 3!`,
          vocab: [
            { word: `first move`,     definition: `The opening step.`,
              audioPrompt: `First move is the opening step. Subtracting ones is your first move every time. Same first move as addition. Right column first. Always. Never start anywhere else in column subtraction!` },
            { word: `top is bigger`,  definition: `The top digit exceeds the bottom.`,
              audioPrompt: `Top is bigger means the top digit exceeds the bottom. For now, top is bigger in every column. This makes subtraction clean. We can just subtract straight up. When the top is smaller, you have to borrow!` },
            { word: `clean subtract`, definition: `Without borrowing.`,
              audioPrompt: `Clean subtract is without borrowing. Clean subtract happens when the top is bigger than or equal to the bottom in every column. No tricks needed. Just take the bottom from the top!` },
          ],
        },

        {
          id: `l13-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `STEP 2: Subtract the TENS`,
          paragraphs: [
            `After ones, MOVE LEFT to the TENS column!`,
            `Back to 957 - 324. Tens: 5 - 2 = 3! Write 3 in tens! So far: "33"! Try 685 - 251. Tens: 8 - 5 = 3! Below: "34"! Try 794 - 462. Tens: 9 - 6 = 3! Below: "32"! Same exact skill as ones — just one column over! Each column is its own little subtraction! Easy when you take them one at a time!`,
          ],
          image: `/explorer-assets/math/l13-s3-tens-step.webp`,
          imageCaption: `Step 2: tens column! 957 - 324 → tens: 5 - 2 = 3!`,
          vocab: [
            { word: `one at a time`, definition: `Each column solved separately.`,
              audioPrompt: `One at a time is each column solved separately. Take them one at a time. The brain can only focus on one column at a time. That's actually a feature. Solving one column at a time keeps you focused!` },
            { word: `same skill`,    definition: `The method doesn't change.`,
              audioPrompt: `Same skill means the method doesn't change. Tens use the same skill as ones — just shifted one column left. You subtract one digit from another. Write the answer. Move on!` },
            { word: `moving left`,   definition: `Shift toward bigger places.`,
              audioPrompt: `Moving left is shift toward bigger places. After ones, move left to tens, then hundreds. Each shift takes you to a place value 10 times bigger. The rhythm of all column math!` },
          ],
        },

        {
          id: `l13-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `STEP 3: Subtract the HUNDREDS`,
          paragraphs: [
            `One more column! MOVE LEFT again to the HUNDREDS!`,
            `Back to 957 - 324. Hundreds: 9 - 3 = 6! Write 6 in hundreds! FINAL: 633! Try 685 - 251. Hundreds: 6 - 2 = 4! Below: 434! Try 794 - 462. Hundreds: 7 - 4 = 3! Below: 332! THREE STEPS! Right to left! That's the formula! Practice until your hands know the steps before your brain even thinks!`,
          ],
          image: `/explorer-assets/math/l13-s4-hundreds-step.webp`,
          imageCaption: `Step 3: hundreds last! 957 - 324 = 633!`,
          vocab: [
            { word: `final`,      definition: `The last step.`,
              audioPrompt: `Final is the last step. The hundreds column is the final step in three-digit subtraction. Once it's done, you have your complete answer below the line. Three columns, three steps, done!` },
            { word: `formula`,    definition: `A set of steps that works every time.`,
              audioPrompt: `A formula is a set of steps that works every time. The three-step method is your subtraction formula. Ones, tens, hundreds. Always. Works for any size numbers. The formula scales!` },
            { word: `hands know`, definition: `The motion becomes automatic.`,
              audioPrompt: `Hands know means the motion becomes automatic. With practice, your hands know the steps. The hand just writes the answer below ones, then tens, then hundreds. Like muscle memory!` },
          ],
        },

        {
          id: `l13-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Tricky Case: ZEROS`,
          paragraphs: [
            `Quick trick — what happens when a ZERO shows up in subtraction?`,
            `When the BOTTOM digit is 0: easy! Like 845 - 230. Ones: 5 - 0 = 5! Tens: 4 - 3 = 1! Hundreds: 8 - 2 = 6! Answer: 615! Bottom zero means "subtract nothing" — keep the top digit! When BOTH are 0: easiest! 0 - 0 = 0! Just write 0! Zeros are usually FRIENDS in subtraction — they make some columns easier!`,
          ],
          image: `/explorer-assets/math/l13-s5-zero-tricks.webp`,
          imageCaption: `Zero tricks: bottom 0 = column stays. Both 0 = 0. Easy cases!`,
          vocab: [
            { word: `bottom zero`, definition: `When the bottom digit is 0.`,
              audioPrompt: `A bottom zero is when the bottom digit is 0. Bottom zero leaves the top digit unchanged. Like 5 minus 0 equals 5. You're subtracting nothing, so the top stays. Bottom zeros are friendly!` },
            { word: `both zero`,   definition: `Both digits are 0.`,
              audioPrompt: `Both zero is both digits are 0. Both zero column just becomes 0 in the answer. 0 minus 0 is 0. Easiest case of all. Just write 0 below. Move on!` },
            { word: `friend`,      definition: `Helpful element.`,
              audioPrompt: `A friend is a helpful element. Zeros can be friends in subtraction — they make some columns easy. Bottom zero means the column stays the same. Zeros aren't scary!` },
          ],
        },

        {
          id: `l13-mag-6`,
          type: `magazine`,
          section: 6,
          headline: `Pattern Practice Makes It NATURAL`,
          paragraphs: [
            `{name} — like addition, subtraction gets EASY when you practice! Pattern recognition speeds you up!`,
            `Easy patterns: ANY column with a BOTTOM ZERO (column stays). Columns where TOP and BOTTOM are CLOSE (like 8 - 5 = 3). Every column has top bigger than bottom (no borrowing). Trickier patterns (next lesson): when a TOP DIGIT is SMALLER than the bottom — you'll need to BORROW! For today, scan each problem. If every top digit ≥ its bottom, you've got clean subtraction!`,
          ],
          image: `/explorer-assets/math/l13-s6-pattern-clear.webp`,
          imageCaption: `Pattern recognition: bottom zeros = easy. Top < bottom = need to borrow (L14)!`,
          vocab: [
            { word: `scan`,       definition: `Quickly look at each part.`,
              audioPrompt: `To scan is to quickly look at each part. Scan the problem to spot patterns before solving. Clean? Easy. Borrowing needed? Slow down. Scanning is a 1-second skill that saves time!` },
            { word: `instantly`,  definition: `Immediately at a glance.`,
              audioPrompt: `Instantly means immediately at a glance. With practice, you'll spot patterns instantly. Your eyes will see the problem and your brain will already know the plan. That's expert pattern recognition!` },
            { word: `confident`,  definition: `Sure of yourself.`,
              audioPrompt: `Confident means sure of yourself. With pattern recognition, you can subtract confident and fast. Confidence comes from understanding. Virtuous cycle. Practice builds confidence!` },
          ],
        },

        {
          id: `l13-game`,
          type: `interactive`,
          format: `drag-match`,
          guideText: `Let's try it, {name}! Here are 4 columns from subtraction problems. Drag each one — is the top digit BIGGER (clean subtract!) or SMALLER (will need borrowing)?`,
          buckets: [
            { id: `top_bigger`,  label: `✅ TOP BIGGER (subtract clean!)`, color: `#34D399` },
            { id: `top_smaller`, label: `⚠️ TOP SMALLER (will need borrow)`, color: `#F87171` },
          ],
          items: [
            { id: `l13-g1`, image: `l13-game-1.webp`, label: `7 - 4`,
              matchPhrase: `Yes! TOP BIGGER! 7 is bigger than 4. Subtract clean! 7 - 4 = 3!`,
              correctMatch: `top_bigger` },
            { id: `l13-g2`, image: `l13-game-2.webp`, label: `2 - 7`,
              matchPhrase: `Right! TOP SMALLER! 2 is less than 7. You can't subtract 7 from 2 — you'll need to borrow! (Coming next lesson!)`,
              correctMatch: `top_smaller` },
            { id: `l13-g3`, image: `l13-game-3.webp`, label: `8 - 5`,
              matchPhrase: `Yes! TOP BIGGER! 8 is bigger than 5. Subtract clean! 8 - 5 = 3!`,
              correctMatch: `top_bigger` },
            { id: `l13-g4`, image: `l13-game-4.webp`, label: `3 - 8`,
              matchPhrase: `Right! TOP SMALLER! 3 is less than 8. You can't subtract 8 from 3 directly — borrowing needed!`,
              correctMatch: `top_smaller` },
          ],
        },

        {
          id: `l13-quiz`,
          type: `quiz`,
          guideText: `Let's see what you remember, {name}!`,
          questions: [
            { id: `l13-q1`, format: `multiple-choice`,
              question: `What is 957 - 324?`,
              options: [`533`, `633`, `733`, `653`],
              correctIndex: 1,
              explanation: `633! Ones: 7-4=3. Tens: 5-2=3. Hundreds: 9-3=6. Place by place, right to left!` },
            { id: `l13-q2`, format: `multiple-choice`,
              question: `In column subtraction, you write the BIGGER number where?`,
              options: [`On the bottom`, `On TOP — bigger on top, smaller below`, `On the left`, `On the right`],
              correctIndex: 1,
              explanation: `Bigger on top! You're taking away from a starting amount. Smaller below = what's removed!` },
            { id: `l13-q3`, format: `multiple-choice`,
              question: `What is 685 - 251?`,
              options: [`424`, `434`, `534`, `444`],
              correctIndex: 1,
              explanation: `434! Ones: 5-1=4. Tens: 8-5=3. Hundreds: 6-2=4!` },
            { id: `l13-q4`, format: `true-false`,
              question: `When the BOTTOM digit in a column is 0, the TOP digit stays the same — like 5 - 0 = 5.`,
              correctAnswer: true,
              explanation: `True! Bottom zero = subtracting nothing. The top stays the same. Friendly case!` },
            { id: `l13-q5`, format: `fill-blank`,
              question: `Column subtraction starts at the ___ column (rightmost) and works LEFT toward hundreds.`,
              options: [`ones`, `tens`, `hundreds`, `thousands`],
              correctIndex: 0,
              explanation: `Ones! Same as addition. Always start right and work left!` },
            { id: `l13-q6`, format: `multiple-choice`,
              question: `What is 845 - 230?`,
              options: [`615`, `605`, `625`, `515`],
              correctIndex: 0,
              explanation: `615! Ones: 5-0=5 (bottom zero!). Tens: 4-3=1. Hundreds: 8-2=6!` },
          ],
        },

        {
          id: `l13-realworld`,
          type: `real-world`,
          guideText: `Here's a real-world truth, {name}! Most people use SUBTRACTION more than addition in daily life — they just don't realize it! Every time you check change at a store, that's subtraction! Every time you wonder "how much time until ___?", subtraction! How many days until your birthday? Subtraction! How much battery is left? Subtraction! Adults do it constantly!`,
          familyAdventure: `Together, do "TIME LEFT" math! Pick something coming up — bedtime, dinner, a birthday. Calculate (subtract!) how much time is left! "Bedtime is at 8:30. Now it's 7:15. So 8:30 - 7:15 = 1 hour 15 minutes left!" Do this for several events!`,
          creativePrompt: `Make a "MINUS QUEST" treasure map! Draw a treasure map with a STARTING POINT (a big number, like 100). At each stop, you "spend" some number (-15, -20, -8). At the end, calculate what's LEFT! Write at least 3 sentences about your quest. For stretch, write a 5-sentence adventure story with the full math at every stop!`,
        },

        {
          id: `l13-celebration`,
          type: `celebration`,
          message: `Solid drill, {name}! Column subtraction is getting comfortable! Vertical format. Right to left. Ones, tens, hundreds. Bottom zeros are friends! Today was all CLEAN subtraction — no borrowing! Next lesson is the BIG ONE — BORROWING! Remi is so proud! 🦝`,
          badge: `column-subtraction-explorer`,
          badgeName: `Column Subtraction Explorer`,
          xpEarned: 50,
        },

      ],
    },
  ],
};

export default MATH_L13;

// ─── Dev asset check ─────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const mags  = MATH_L13.lessons[0].screens.filter(s => s.type === 'magazine').length;
  const game  = MATH_L13.lessons[0].screens.find(s => s.type === 'interactive')?.items?.length ?? 0;
  const quiz  = MATH_L13.lessons[0].screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  console.log(`[LESSON-MATH-L13] Loaded: "Column Subtraction" with ${mags} magazine sections, ${game} game items, ${quiz} quiz questions`);
}
