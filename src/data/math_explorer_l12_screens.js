// ─────────────────────────────────────────────────────────────────────────────
// MATH  |  L12 — Subtracting Multi-Digit Numbers
// Age band : explorers (6–8)   Guide: remi
// Standards: CCSS 2.NBT.B.5 / 2.NBT.B.7 (subtract within 1000 using place value)
// ─────────────────────────────────────────────────────────────────────────────

const MATH_L12 = {
  ageBand:   `explorers`,
  subjectId: `math`,
  guide:     `remi`,

  lessons: [
    {
      id:        `math-6-8-12`,
      title:     `Subtracting Multi-Digit Numbers`,
      duration:  12,
      xpReward:  50,
      badge:     `subtraction-starter`,
      badgeName: `Multi-Digit Subtraction Starter`,

      screens: [

        {
          id: `l12-welcome`,
          type: `welcome`,
          guideText: `Hey {name}, Remi here. New sub-block today — SUBTRACTION. Here's the great news: it's basically addition in REVERSE. Everything you learned about place value, columns, and right-to-left still works. You'll just be taking away instead of combining. Same foundation, opposite direction. Let's see how it works.`,
          headline: `Subtracting Multi-Digit Numbers`,
          subtitle: `Addition's mirror image — same foundation, opposite direction`,
          visual: `/explorer-assets/math/l12-welcome.webp`,
        },

        {
          id: `l12-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Subtraction Is the OPPOSITE`,
          paragraphs: [
            `Quick recap: ADDITION COMBINES things. 5 + 3 = 8. Two amounts come together.`,
            `SUBTRACTION does the OPPOSITE. It SEPARATES things. 8 - 3 = 5. You start with an amount and TAKE AWAY some of it. What's left is the answer. Same skills, opposite direction. If 5 + 3 = 8, then 8 - 3 = 5. They're MIRROR OPERATIONS. Every addition you do has a matching subtraction. Every subtraction you do has a matching addition. They're partners. Knowing addition well already gives you a HUGE head start with subtraction. The math you've practiced for the last 6 lessons isn't going away — it's going to help you in a new way.`,
          ],
          image: `/explorer-assets/math/l12-s1-opposite.webp`,
          imageCaption: `Addition combines (5 + 3 = 8). Subtraction separates (8 - 3 = 5). Mirror operations.`,
          vocab: [
            { word: `subtraction`,    definition: `The operation of TAKING AWAY. SUBTRACTION is addition's mirror image.`,
              audioPrompt: `Subtraction, {name}, is the operation of taking away. Subtraction is addition's mirror image. Where addition combines two amounts, subtraction starts with one amount and removes some of it. The symbol for subtraction is the minus sign — a small dash. Like addition, it's used everywhere in real life.` },
            { word: `take away`,      definition: `REMOVE some AMOUNT. TAKE AWAY is what subtraction means.`,
              audioPrompt: `Take away, {name}, is to remove some amount. Take away is what subtraction means. You start with eight cookies. You take away three. Five are left. That's subtraction. Whenever something is being removed, reduced, or separated, subtraction is the math.` },
            { word: `opposite`,       definition: `In the REVERSE direction. Subtraction is the OPPOSITE operation of addition.`,
              audioPrompt: `Opposite, {name}, means in the reverse direction. Subtraction is the opposite operation of addition. Addition adds — subtraction takes away. They undo each other. That's why if you add three to a number, then subtract three, you're back to where you started. Opposites cancel.` },
          ],
        },

        {
          id: `l12-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `The "TAKE AWAY" Idea`,
          paragraphs: [
            `Think of subtraction as TAKING THINGS AWAY from a starting amount.`,
            `Imagine you have 10 cookies. Your sister takes 4. How many are left? 10 take-away 4 = 6. You started with 10. Subtracted 4. Left with 6. Subtraction asks: "After removing some, HOW MUCH IS LEFT?" Another example: 47 stickers. Give 23 to a friend. 47 - 23 = 24. You have 24 left. The starting amount is always the BIGGER number in basic subtraction. The amount removed is the smaller one. The result is called the DIFFERENCE. Difference between 10 and 4 is 6. Difference between 47 and 23 is 24. Subtraction finds the difference.`,
          ],
          image: `/explorer-assets/math/l12-s2-take-away.webp`,
          imageCaption: `Take away: start with 10, remove 4, left with 6. Subtraction asks "how much is left?"`,
          vocab: [
            { word: `starting amount`, definition: `The number you BEGIN WITH. The STARTING AMOUNT is the bigger number in subtraction.`,
              audioPrompt: `The starting amount, {name}, is the number you begin with. The starting amount is the bigger number in subtraction. It's on top when you write subtraction vertically. You take away from it. What's left is your answer. Always identify the starting amount first.` },
            { word: `difference`,     definition: `The ANSWER to a subtraction problem. The DIFFERENCE between two numbers.`,
              audioPrompt: `The difference, {name}, is the answer to a subtraction problem. The difference between two numbers. 10 minus 4 equals 6 — the difference between 10 and 4 is 6. The word difference makes sense — it's how different the two numbers are. Subtraction finds that.` },
            { word: `what's left`,    definition: `The AMOUNT REMAINING. Subtraction tells you WHAT'S LEFT after taking some away.`,
              audioPrompt: `What's left, {name}, is the amount remaining. Subtraction tells you what's left after taking some away. You had ten. Took four. Six are left. That's what subtraction calculates — what remains. The leftover. The remainder. Different words, same idea.` },
          ],
        },

        {
          id: `l12-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Subtract PLACE by PLACE`,
          paragraphs: [
            `Just like addition, subtraction works PLACE BY PLACE. Subtract ones from ones, tens from tens, hundreds from hundreds.`,
            `Take 478 - 235. Set it up vertically: 478 on top, 235 below, line drawn, MINUS sign on the left. Start at the ONES column (right side). 8 - 5 = 3. Write 3 below the line in ones. Move LEFT to TENS. 7 - 3 = 4. Write 4 below the line in tens. Move LEFT to HUNDREDS. 4 - 2 = 2. Write 2 below the line in hundreds. ANSWER: 243. Same method as addition! Right to left. Place by place. The only difference is the MINUS sign and you're SUBTRACTING instead of adding. Otherwise, identical process.`,
          ],
          image: `/explorer-assets/math/l12-s3-place-by-place-sub.webp`,
          imageCaption: `Subtract place by place. 478 - 235 → ones: 8-5=3, tens: 7-3=4, hundreds: 4-2=2. Answer: 243.`,
          vocab: [
            { word: `place by place`, definition: `Subtracting ONE column at a TIME. Subtract PLACE BY PLACE — ones from ones, tens from tens.`,
              audioPrompt: `Place by place, {name}, is subtracting one column at a time. Subtract place by place — ones from ones, tens from tens, hundreds from hundreds. Just like addition. Each column is its own little subtraction problem. Solve them one at a time, then read the answer.` },
            { word: `minus sign`,     definition: `The "-" SYMBOL. The MINUS SIGN means subtract — appears on the left in vertical format.`,
              audioPrompt: `The minus sign, {name}, is the dash symbol. The minus sign means subtract — appears on the left in vertical format. Same place where the plus sign goes for addition. Different symbol, different operation. When you see a minus, you know you're subtracting.` },
            { word: `identical`,      definition: `Exactly the SAME. The METHOD is IDENTICAL to addition — just with subtraction instead.`,
              audioPrompt: `Identical, {name}, means exactly the same. The method is identical to addition — just with subtraction instead. Same direction. Same column-by-column approach. Same lining up rules. Just a different operation in each column. Your addition skills carry directly over.` },
          ],
        },

        {
          id: `l12-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Subtraction on the MAT`,
          paragraphs: [
            `Let's SEE subtraction happen using a place value MAT.`,
            `Build 478 on the mat: 4 FLATS in hundreds, 7 RODS in tens, 8 SINGLES in ones. Now TAKE AWAY 235. In the hundreds column, remove 2 flats. Two flats left. In the tens column, remove 3 rods. Four rods left. In the ones column, remove 5 singles. Three singles left. READ what's still on the mat: 2 flats + 4 rods + 3 singles = 243. THAT'S YOUR ANSWER. Physical subtraction in action. The mat shows it like a movie — you can SEE the blocks being removed. Each column subtracts itself. As long as the TOP digit is BIGGER than the bottom in each column, this works cleanly. (When the top digit is smaller, we need to borrow — but that's L14.)`,
          ],
          image: `/explorer-assets/math/l12-s4-mat-subtraction.webp`,
          imageCaption: `Subtraction on the mat: build 478, remove 2 flats + 3 rods + 5 singles. Left: 243.`,
          vocab: [
            { word: `remove`,         definition: `TAKE AWAY blocks from a column. REMOVE the right number from each column on the mat.`,
              audioPrompt: `To remove, {name}, is to take away blocks from a column. Remove the right number from each column on the mat. You build the starting number, then remove what's being subtracted. The blocks left over show your answer. Subtraction is physical when you use the mat.` },
            { word: `left over`,      definition: `Still REMAINING after removing. The LEFT OVER blocks are your answer.`,
              audioPrompt: `Left over, {name}, means still remaining after removing. The left over blocks are your answer. Once you've removed the subtracted amount, what stays on the mat is the difference. Read the mat to get the number. Physical math made visible.` },
            { word: `visible`,        definition: `Able to BE SEEN. The mat makes subtraction VISIBLE — you watch it happen.`,
              audioPrompt: `Visible, {name}, means able to be seen. The mat makes subtraction visible — you watch it happen. Blocks disappear from columns. The starting amount shrinks. The difference is what remains. Visible math is easy to understand because your brain works with what your eyes see.` },
          ],
        },

        {
          id: `l12-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `When the TOP Is BIGGER`,
          paragraphs: [
            `Today's examples all have one important rule — every TOP digit must be BIGGER than (or equal to) the bottom digit in its column.`,
            `Why? Because if the top is bigger, you can subtract cleanly. 8 - 5 = 3 works fine (top 8 is bigger than bottom 5). 7 - 3 = 4 works (7 bigger than 3). 4 - 2 = 2 works. But what about 4 - 7? You can't take 7 away from 4 — that gives a NEGATIVE number, and we're not there yet. When the top digit is SMALLER than the bottom in a column, we need a special trick called BORROWING. That's coming in L14. For now, every example has top ≥ bottom in every column. Today is about understanding the BASIC subtraction method. Borrowing comes next.`,
          ],
          image: `/explorer-assets/math/l12-s5-top-bigger.webp`,
          imageCaption: `Today's rule: TOP digit ≥ bottom digit in every column. Clean subtraction. No borrowing yet.`,
          vocab: [
            { word: `top digit`,      definition: `The digit on TOP in vertical format. The TOP DIGIT must be BIGGER for clean subtraction.`,
              audioPrompt: `The top digit, {name}, is the digit on top in vertical format. The top digit must be bigger for clean subtraction. If it's bigger or equal, you can just subtract. If it's smaller, you have to borrow. Today, all our examples have a bigger top digit in every column.` },
            { word: `cleanly`,        definition: `WITHOUT extra steps. Subtract CLEANLY when the top digit is bigger.`,
              audioPrompt: `Cleanly, {name}, means without extra steps. Subtract cleanly when the top digit is bigger. No borrowing needed. No tricks. Just straight subtraction. Once you have basic subtraction solid, borrowing will make sense when you need it.` },
            { word: `borrowing`,      definition: `The TRICK for when top digit is SMALLER. BORROWING comes in L14.`,
              audioPrompt: `Borrowing, {name}, is the trick for when top digit is smaller. Borrowing comes in lesson fourteen. It's the subtraction version of carrying. When you can't subtract in a column, you borrow value from the next bigger place. For today, we don't need it. All our examples work cleanly.` },
          ],
        },

        {
          id: `l12-mag-6`,
          type: `magazine`,
          section: 6,
          headline: `Mirror Method — Same FOUNDATION`,
          paragraphs: [
            `{name} — here's the BIG IDEA. Subtraction uses the SAME foundation as addition.`,
            `Place value? Same. Right-to-left method? Same. Vertical format? Same. Column-by-column? Same. The ONLY difference is: where addition COMBINES, subtraction SEPARATES. Where addition bundles UP (carrying), subtraction will borrow DOWN (we'll see that soon). Once you understand addition, you ALREADY understand 90% of subtraction. The skills carry over. The mat works the same. The method is symmetric. This is one of the most beautiful things about math — once you learn the foundation, every operation uses it. Subtraction is just addition's mirror. Practice this basic version, and you'll be ready for borrowing.`,
          ],
          image: `/explorer-assets/math/l12-s6-mirror-method.webp`,
          imageCaption: `Mirror method: same foundation as addition. Place value still rules. Just opposite direction.`,
          vocab: [
            { word: `mirror`,         definition: `An IMAGE that REVERSES. Subtraction is the MIRROR of addition — same foundation, opposite direction.`,
              audioPrompt: `A mirror, {name}, is an image that reverses. Subtraction is the mirror of addition — same foundation, opposite direction. Look in a mirror, your right hand becomes left. Same body, reversed. Same with operations. Same math, reversed direction. Beautiful symmetry.` },
            { word: `symmetric`,      definition: `Has MATCHING PAIRS. Addition and subtraction are SYMMETRIC operations.`,
              audioPrompt: `Symmetric, {name}, means has matching pairs. Addition and subtraction are symmetric operations. Like left and right hands. Like up and down. Like in and out. They're partners. Every addition has a matching subtraction. Every subtraction has a matching addition. Beautiful pattern.` },
            { word: `carry over`,     definition: `TRANSFER from one skill to ANOTHER. Your addition skills CARRY OVER directly to subtraction.`,
              audioPrompt: `Carry over, {name}, means transfer from one skill to another. Your addition skills carry over directly to subtraction. Same vertical format. Same column method. Same place value foundation. Same right-to-left direction. You're not starting from scratch. You're applying existing skills in a new way.` },
          ],
        },

        {
          id: `l12-game`,
          type: `interactive`,
          format: `drag-match`,
          guideText: `Let's see what you remember, {name}.`,
          buckets: [
            { id: `fact`, label: `✅ Yes, that's true!`, color: `#34D399` },
            { id: `myth`, label: `❌ No way!`,         color: `#F87171` },
          ],
          items: [
            { id: `l12-g1`, image: `l12-game-1.webp`, label: `SUBTRACTION is the OPPOSITE of addition — combine vs. separate, mirror operations.`,
              matchPhrase: `Yes! Subtraction is addition's mirror. Add combines, subtract separates. Same foundation, opposite direction. They undo each other.`,
              correctMatch: `fact` },
            { id: `l12-g2`, image: `l12-game-2.webp`, label: `In subtraction, the TOP number is the STARTING amount. The BOTTOM is what gets TAKEN AWAY.`,
              matchPhrase: `True! Top = start. Bottom = subtract. Answer below = what's left (the difference). Same vertical format as addition, opposite operation.`,
              correctMatch: `fact` },
            { id: `l12-g3`, image: `l12-game-3.webp`, label: `You can subtract the tens digit from the ones digit — places don't have to match in subtraction.`,
              matchPhrase: `Not at all! Places must match in subtraction too. Ones from ones. Tens from tens. Hundreds from hundreds. Same rule as addition.`,
              correctMatch: `myth` },
            { id: `l12-g4`, image: `l12-game-4.webp`, label: `Subtraction should be done LEFT TO RIGHT — start at hundreds, end at ones.`,
              matchPhrase: `Definitely not! Subtraction goes RIGHT to LEFT — same as addition. Start at ones, work toward hundreds. Direction is the same.`,
              correctMatch: `myth` },
          ],
        },

        {
          id: `l12-quiz`,
          type: `quiz`,
          guideText: `Let's see what you remember, {name}.`,
          questions: [
            { id: `l12-q1`, format: `multiple-choice`,
              question: `What does SUBTRACTION do?`,
              options: [`Combines amounts`, `TAKES AWAY some of an amount — finds what's left`, `Multiplies things`, `Adds nothing`],
              correctIndex: 1,
              explanation: `Subtraction takes away. You start with an amount, remove some, and find what's left (called the difference). Opposite of addition.` },
            { id: `l12-q2`, format: `multiple-choice`,
              question: `What is 478 - 235?`,
              options: [`243`, `213`, `253`, `343`],
              correctIndex: 0,
              explanation: `243! Ones: 8-5=3. Tens: 7-3=4. Hundreds: 4-2=2. Answer: 243. Place by place, right to left.` },
            { id: `l12-q3`, format: `multiple-choice`,
              question: `In SUBTRACTION, which column do you do FIRST?`,
              options: [`Hundreds`, `ONES — start at the right, work left (same as addition)`, `Tens`, `Random`],
              correctIndex: 1,
              explanation: `Ones first, just like addition. Right to left. Ones → tens → hundreds. Same direction. Same place-by-place method.` },
            { id: `l12-q4`, format: `true-false`,
              question: `The answer to a subtraction problem is called the DIFFERENCE.`,
              correctAnswer: true,
              explanation: `True! In subtraction, the answer is the difference. 10 - 4 = 6. The difference between 10 and 4 is 6. Each operation has its own answer name — sum for add, difference for subtract.` },
            { id: `l12-q5`, format: `fill-blank`,
              question: `Subtraction is addition in ___ — same foundation, opposite direction.`,
              options: [`reverse`, `space`, `secret`, `silence`],
              correctIndex: 0,
              explanation: `Reverse! Subtraction is addition in reverse. Same place value foundation. Same column method. Same right-to-left direction. Just opposite operation in each column.` },
            { id: `l12-q6`, format: `multiple-choice`,
              question: `Why does your ADDITION practice help with SUBTRACTION?`,
              options: [`It doesn't`, `Same FOUNDATION — place value, vertical format, columns, right-to-left — all carry over`, `It's magic`, `Just luck`],
              correctIndex: 1,
              explanation: `Same foundation! Addition skills carry over directly. Place value, vertical format, columns, right-to-left direction — all identical. You already know 90% of subtraction from learning addition.` },
          ],
        },

        {
          id: `l12-realworld`,
          type: `real-world`,
          guideText: `Here's something useful, {name}. Subtraction is the math of REMOVING — and it's everywhere in real life. Spending money is subtraction (you had $20, spent $7, have $13 left). Time passing is subtraction (movie is 90 minutes, you've watched 35, you have 55 left). Eating cookies is subtraction (12 in the box, ate 5, 7 left). Distance remaining is subtraction (trip is 100 miles, you've gone 65, 35 to go). Score gaps are subtraction (we have 24 points, they have 18, we're up by 6). Every time you compare two amounts or remove something, subtraction is at work. Adults use it constantly — for budgets, schedules, deadlines, distances. You're learning a forever-skill.`,
          familyAdventure: `Together, do "TAKE AWAY MATH" around the house. Find scenes where subtraction is happening: How many cookies were in the jar at breakfast? How many are left now? How many minutes until dinner? Or pick a starting number (like the year you were born) and subtract another year (the year you started school) to find an age. Take turns. Notice — subtraction shows up CONSTANTLY in daily life. You just usually do it without writing it down.`,
          creativePrompt: `Draw a "SUBTRACTION STORY" comic. Three frames: 1) Start with a pile of something (cookies, marbles, leaves). 2) Some are taken away. 3) What's left. Underneath, write the math problem (like "10 - 4 = 6"). Make it fun. Add characters with personalities. Show that subtraction is just removing from a starting amount.`,
        },

        {
          id: `l12-celebration`,
          type: `celebration`,
          message: `Nice work, {name}! You've opened the Subtraction sub-block. The BIG IDEA — subtract PLACE BY PLACE. Top minus bottom in each column. Right to left, same as addition. The starting amount is on top. The answer is the difference. Today's problems are clean — every top digit is bigger than the bottom. Next lesson we PRACTICE the column method more. Then in L14, we tackle the trickier case — BORROWING. Get ready. — Remi 🦝`,
          badge: `subtraction-starter`,
          badgeName: `Multi-Digit Subtraction Starter`,
          xpEarned: 50,
        },

      ],
    },
  ],
};

export default MATH_L12;

// ─── Dev asset check ───
if (import.meta.env?.DEV) {
  const mags  = MATH_L12.lessons[0].screens.filter(s => s.type === 'magazine').length;
  const game  = MATH_L12.lessons[0].screens.find(s => s.type === 'interactive')?.items?.length ?? 0;
  const quiz  = MATH_L12.lessons[0].screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  console.log(`[LESSON-MATH-L12] Loaded: "Subtracting Multi-Digit Numbers" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
}
