// ─────────────────────────────────────────────────────────────────────────────
// MATH  |  L12 — Subtracting Multi-Digit Numbers
// Age band : explorers (6–8)   Guide: remi
// Standards: CCSS 2.NBT.B.5 / 2.NBT.B.7
// REWRITE v2 (May 2026): Grade 1 accessible, TAKE AWAY (subtract) / COMBINE
// (add) 2-bucket scenario identification game tests operation recognition
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
          guideText: `Hey {name}, Remi here! New sub-block today — SUBTRACTION! Great news: it's basically addition in REVERSE! Everything you learned about place value, columns, and right-to-left still works! You'll just be taking away instead of combining. Same foundation, opposite direction!`,
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
            `Quick recap: ADDITION COMBINES things! 5 + 3 = 8. Two amounts come together!`,
            `SUBTRACTION does the OPPOSITE! It SEPARATES things! 8 - 3 = 5. You start with an amount and TAKE AWAY some of it! What's left is the answer! Same skills, opposite direction! Knowing addition well gives you a HUGE head start with subtraction!`,
          ],
          image: `/explorer-assets/math/l12-s1-opposite.webp`,
          imageCaption: `Addition combines (5 + 3 = 8). Subtraction separates (8 - 3 = 5)!`,
          vocab: [
            { word: `subtraction`, definition: `The operation of taking away.`,
              audioPrompt: `Subtraction is the operation of taking away. Subtraction is addition's mirror image. Where addition combines two amounts, subtraction starts with one amount and removes some of it!` },
            { word: `take away`,   definition: `Remove some amount.`,
              audioPrompt: `Take away is to remove some amount. Take away is what subtraction means. You start with 8 cookies. You take away 3. Five are left. Whenever something is being removed, subtraction is the math!` },
            { word: `opposite`,    definition: `In the reverse direction.`,
              audioPrompt: `Opposite means in the reverse direction. Subtraction is the opposite operation of addition. They undo each other. If you add 3 to a number, then subtract 3, you're back where you started!` },
          ],
        },

        {
          id: `l12-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `The "TAKE AWAY" Idea`,
          paragraphs: [
            `Think of subtraction as TAKING THINGS AWAY from a starting amount!`,
            `Imagine you have 10 cookies. Your sister takes 4. How many are left? 10 take-away 4 = 6! You started with 10. Subtracted 4. Left with 6! Another example: 47 stickers. Give 23 to a friend. 47 - 23 = 24! The starting amount is always the BIGGER number. The result is called the DIFFERENCE!`,
          ],
          image: `/explorer-assets/math/l12-s2-take-away.webp`,
          imageCaption: `Take away: start with 10, remove 4, left with 6!`,
          vocab: [
            { word: `starting amount`, definition: `The number you begin with.`,
              audioPrompt: `The starting amount is the number you begin with. The starting amount is the bigger number in subtraction. It's on top when you write subtraction vertically. You take away from it!` },
            { word: `difference`,      definition: `The answer to a subtraction problem.`,
              audioPrompt: `The difference is the answer to a subtraction problem. 10 minus 4 equals 6 — the difference between 10 and 4 is 6. The word makes sense — it's how different the two numbers are!` },
            { word: `what's left`,     definition: `The amount remaining.`,
              audioPrompt: `What's left is the amount remaining. Subtraction tells you what's left after taking some away. You had 10. Took 4. Six are left. That's what subtraction calculates — what remains!` },
          ],
        },

        {
          id: `l12-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Subtract PLACE by PLACE`,
          paragraphs: [
            `Just like addition, subtraction works PLACE BY PLACE! Subtract ones from ones, tens from tens, hundreds from hundreds!`,
            `Take 478 - 235. Set it up vertically: 478 on top, 235 below, line drawn, MINUS sign on left! Start at ONES (right). 8 - 5 = 3. Move LEFT to TENS. 7 - 3 = 4. Move LEFT to HUNDREDS. 4 - 2 = 2. ANSWER: 243! Same method as addition — right to left, place by place. Just SUBTRACTING instead of adding!`,
          ],
          image: `/explorer-assets/math/l12-s3-place-by-place-sub.webp`,
          imageCaption: `478 - 235 → ones: 8-5=3, tens: 7-3=4, hundreds: 4-2=2. Answer: 243!`,
          vocab: [
            { word: `place by place`, definition: `Subtracting one column at a time.`,
              audioPrompt: `Place by place is subtracting one column at a time. Ones from ones. Tens from tens. Hundreds from hundreds. Just like addition. Each column is its own little subtraction!` },
            { word: `minus sign`,     definition: `The dash symbol that means subtract.`,
              audioPrompt: `The minus sign is the dash symbol. The minus sign means subtract — appears on the left in vertical format. Same place where the plus sign goes for addition. Different symbol, different operation!` },
            { word: `identical`,      definition: `Exactly the same.`,
              audioPrompt: `Identical means exactly the same. The method is identical to addition — just with subtraction instead. Same direction. Same column-by-column approach. Your addition skills carry directly over!` },
          ],
        },

        {
          id: `l12-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Subtraction on the MAT`,
          paragraphs: [
            `Let's SEE subtraction happen using a place value MAT!`,
            `Build 478 on the mat: 4 FLATS, 7 RODS, 8 SINGLES. Now TAKE AWAY 235! Remove 2 flats. Two flats left. Remove 3 rods. Four rods left. Remove 5 singles. Three singles left! READ the mat: 2 flats + 4 rods + 3 singles = 243! Physical subtraction in action! Each column subtracts itself! As long as the TOP digit is BIGGER than the bottom, this works cleanly!`,
          ],
          image: `/explorer-assets/math/l12-s4-mat-subtraction.webp`,
          imageCaption: `Subtraction on the mat: build 478, remove blocks, read what's left!`,
          vocab: [
            { word: `remove`,    definition: `Take away blocks from a column.`,
              audioPrompt: `To remove is to take away blocks from a column. Remove the right number from each column on the mat. The blocks left over show your answer. Subtraction is physical when you use the mat!` },
            { word: `left over`, definition: `Still remaining after removing.`,
              audioPrompt: `Left over means still remaining after removing. The left over blocks are your answer. Once you've removed the subtracted amount, what stays on the mat is the difference!` },
            { word: `visible`,   definition: `Able to be seen.`,
              audioPrompt: `Visible means able to be seen. The mat makes subtraction visible — you watch it happen. Blocks disappear from columns. The starting amount shrinks. The difference is what remains!` },
          ],
        },

        {
          id: `l12-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `When the TOP Is BIGGER`,
          paragraphs: [
            `Today's examples follow one rule — every TOP digit must be BIGGER than or equal to the bottom digit in its column!`,
            `Why? Because if the top is bigger, you can subtract cleanly! 8 - 5 = 3 works (top 8 > bottom 5). 7 - 3 = 4 works. 4 - 2 = 2 works! But what about 4 - 7? You can't take 7 from 4 — that gives a NEGATIVE number, and we're not there yet! When the top digit is SMALLER, we need BORROWING. That's coming in L14!`,
          ],
          image: `/explorer-assets/math/l12-s5-top-bigger.webp`,
          imageCaption: `Today's rule: TOP digit ≥ bottom digit in every column!`,
          vocab: [
            { word: `top digit`, definition: `The digit on top in vertical format.`,
              audioPrompt: `The top digit is the digit on top in vertical format. The top digit must be bigger for clean subtraction. If it's bigger or equal, you can just subtract. If smaller, you have to borrow!` },
            { word: `cleanly`,   definition: `Without extra steps.`,
              audioPrompt: `Cleanly means without extra steps. Subtract cleanly when the top digit is bigger. No borrowing needed. No tricks. Just straight subtraction!` },
            { word: `borrowing`, definition: `The trick for when top digit is smaller.`,
              audioPrompt: `Borrowing is the trick for when top digit is smaller. Borrowing comes in lesson 14. It's the subtraction version of carrying. For today, we don't need it. All examples work cleanly!` },
          ],
        },

        {
          id: `l12-mag-6`,
          type: `magazine`,
          section: 6,
          headline: `Mirror Method — Same FOUNDATION`,
          paragraphs: [
            `{name} — here's the BIG IDEA! Subtraction uses the SAME foundation as addition!`,
            `Place value? Same! Right-to-left method? Same! Vertical format? Same! Column-by-column? Same! The ONLY difference: where addition COMBINES, subtraction SEPARATES! Once you understand addition, you ALREADY understand 90% of subtraction! The skills carry over! Subtraction is just addition's mirror!`,
          ],
          image: `/explorer-assets/math/l12-s6-mirror-method.webp`,
          imageCaption: `Mirror method: same foundation as addition!`,
          vocab: [
            { word: `mirror`,     definition: `An image that reverses.`,
              audioPrompt: `A mirror is an image that reverses. Subtraction is the mirror of addition — same foundation, opposite direction. Look in a mirror, your right hand becomes left. Same body, reversed!` },
            { word: `symmetric`,  definition: `Has matching pairs.`,
              audioPrompt: `Symmetric means has matching pairs. Addition and subtraction are symmetric operations. Like left and right hands. They're partners. Every addition has a matching subtraction!` },
            { word: `carry over`, definition: `Transfer from one skill to another.`,
              audioPrompt: `Carry over means transfer from one skill to another. Your addition skills carry over directly to subtraction. Same vertical format. Same column method. You're applying existing skills in a new way!` },
          ],
        },

        {
          id: `l12-game`,
          type: `interactive`,
          format: `drag-match`,
          guideText: `Let's try it, {name}! Here are 4 real-life scenarios. Drag each one — does it call for TAKE AWAY (subtract) or COMBINE (add)?`,
          buckets: [
            { id: `take_away`, label: `➖ TAKE AWAY (subtract)`, color: `#F87171` },
            { id: `combine`,   label: `➕ COMBINE (add)`,         color: `#34D399` },
          ],
          items: [
            { id: `l12-g1`, image: `l12-game-1.webp`, label: `"Had 12 cookies. Ate 5. How many LEFT?"`,
              matchPhrase: `Yes! TAKE AWAY! Eating cookies removes them. 12 - 5 = 7 left. That's subtraction!`,
              correctMatch: `take_away` },
            { id: `l12-g2`, image: `l12-game-2.webp`, label: `"Sarah had 47 stickers. Got 38 MORE. How many now?"`,
              matchPhrase: `Right! COMBINE! "More" means adding. 47 + 38 = 85 total. That's addition!`,
              correctMatch: `combine` },
            { id: `l12-g3`, image: `l12-game-3.webp`, label: `"Trip is 100 miles. Drove 65. How many to GO?"`,
              matchPhrase: `Yes! TAKE AWAY! You drove some — the distance shrinks. 100 - 65 = 35 to go. Subtraction!`,
              correctMatch: `take_away` },
            { id: `l12-g4`, image: `l12-game-4.webp`, label: `"Team scored 23 + 31. What's the TOTAL?"`,
              matchPhrase: `Right! COMBINE! "Total" means adding everything. 23 + 31 = 54 total points. Addition!`,
              correctMatch: `combine` },
          ],
        },

        {
          id: `l12-quiz`,
          type: `quiz`,
          guideText: `Let's see what you remember, {name}!`,
          questions: [
            { id: `l12-q1`, format: `multiple-choice`,
              question: `What does SUBTRACTION do?`,
              options: [`Combines amounts`, `TAKES AWAY some of an amount — finds what's left`, `Multiplies things`, `Adds nothing`],
              correctIndex: 1,
              explanation: `Subtraction takes away. Start with an amount, remove some, find what's left (the difference)!` },
            { id: `l12-q2`, format: `multiple-choice`,
              question: `What is 478 - 235?`,
              options: [`243`, `213`, `253`, `343`],
              correctIndex: 0,
              explanation: `243! Ones: 8-5=3. Tens: 7-3=4. Hundreds: 4-2=2. Place by place, right to left!` },
            { id: `l12-q3`, format: `multiple-choice`,
              question: `In SUBTRACTION, which column do you do FIRST?`,
              options: [`Hundreds`, `ONES — start at the right (same as addition)`, `Tens`, `Random`],
              correctIndex: 1,
              explanation: `Ones first! Right to left. Same direction as addition!` },
            { id: `l12-q4`, format: `true-false`,
              question: `The answer to a subtraction problem is called the DIFFERENCE.`,
              correctAnswer: true,
              explanation: `True! Each operation has its own answer name — sum for add, difference for subtract!` },
            { id: `l12-q5`, format: `fill-blank`,
              question: `Subtraction is addition in ___ — same foundation, opposite direction.`,
              options: [`reverse`, `space`, `secret`, `silence`],
              correctIndex: 0,
              explanation: `Reverse! Same place value foundation. Same column method. Just opposite operation!` },
            { id: `l12-q6`, format: `multiple-choice`,
              question: `Why does your ADDITION practice help with SUBTRACTION?`,
              options: [`It doesn't`, `Same FOUNDATION — place value, vertical format, columns, right-to-left`, `Magic`, `Luck`],
              correctIndex: 1,
              explanation: `Same foundation! You already know 90% of subtraction from learning addition!` },
          ],
        },

        {
          id: `l12-realworld`,
          type: `real-world`,
          guideText: `Here's something useful, {name}! Subtraction is the math of REMOVING — everywhere in real life! Spending money is subtraction (had $20, spent $7, have $13 left). Time passing is subtraction. Eating cookies is subtraction. Distance remaining is subtraction. Score gaps are subtraction. Adults use it constantly — budgets, schedules, deadlines. Forever-skill!`,
          familyAdventure: `Together, do "TAKE AWAY MATH" around the house! How many cookies were in the jar at breakfast? How many are left now? How many minutes until dinner? Pick a starting number and subtract another. Take turns. Notice — subtraction shows up CONSTANTLY!`,
          creativePrompt: `Draw a "SUBTRACTION STORY" comic! Three frames: 1) Start with a pile of something. 2) Some are taken away. 3) What's left. Underneath, write the math problem (like "10 - 4 = 6"). Write at least 3 sentences about your comic. For stretch, write a 5-sentence story explaining what happened and why it's subtraction!`,
        },

        {
          id: `l12-celebration`,
          type: `celebration`,
          message: `Nice work, {name}! You've opened the Subtraction sub-block! Subtract PLACE BY PLACE. Top minus bottom in each column. Right to left, same as addition. Starting amount on top. Answer is the difference! Next lesson we PRACTICE more. Then in L14 — BORROWING! Remi is so proud! 🦝`,
          badge: `subtraction-starter`,
          badgeName: `Multi-Digit Subtraction Starter`,
          xpEarned: 50,
        },

      ],
    },
  ],
};

export default MATH_L12;

// ─── Dev asset check ─────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const mags  = MATH_L12.lessons[0].screens.filter(s => s.type === 'magazine').length;
  const game  = MATH_L12.lessons[0].screens.find(s => s.type === 'interactive')?.items?.length ?? 0;
  const quiz  = MATH_L12.lessons[0].screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  console.log(`[LESSON-MATH-L12] Loaded: "Subtracting Multi-Digit Numbers" with ${mags} magazine sections, ${game} game items, ${quiz} quiz questions`);
}
