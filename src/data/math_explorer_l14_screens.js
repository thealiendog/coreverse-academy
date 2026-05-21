// ─────────────────────────────────────────────────────────────────────────────
// MATH  |  L14 — Borrowing (Regrouping)
// Age band : explorers (6–8)   Guide: remi
// Standards: CCSS 2.NBT.B.7 / 4.NBT.B.4
// REWRITE v2 (May 2026): Grade 1 accessible, NEEDS A BORROW / NO BORROW
// 2-bucket binary identification game tests the borrow trigger
// ─────────────────────────────────────────────────────────────────────────────

const MATH_L14 = {
  ageBand:   `explorers`,
  subjectId: `math`,
  guide:     `remi`,

  lessons: [
    {
      id:        `math-6-8-14`,
      title:     `Borrowing (Regrouping)`,
      duration:  12,
      xpReward:  50,
      badge:     `borrowing-master`,
      badgeName: `Borrowing Master`,

      screens: [

        {
          id: `l14-welcome`,
          type: `welcome`,
          guideText: `Hey {name}, Remi here! BIG lesson today! BORROWING — also called regrouping for subtraction! It happens when a top digit is SMALLER than the one below it! Once you get this, you can subtract ANY numbers! Best part — it's just BUNDLING in reverse!`,
          headline: `Borrowing (Regrouping)`,
          subtitle: `The move that lets you subtract any numbers — bundling in reverse`,
          visual: `/explorer-assets/math/l14-welcome.webp`,
        },

        {
          id: `l14-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `When the TOP Is Too SMALL`,
          paragraphs: [
            `Quick question! What's 3 - 7? You can't take 7 away from 3 if you've only got 3! Not unless you go into negative numbers (we're not there yet)! So what do you DO?`,
            `Try 52 - 27. Ones column: 2 - 7. UH OH! The top digit (2) is SMALLER than the bottom (7)! You can't subtract 7 from 2! This is the BORROWING PROBLEM! But there's a FIX — BORROW from the next column! Take 1 from the tens (which is really 10 ones) and bring it into the ones column. Now you have enough!`,
          ],
          image: `/explorer-assets/math/l14-s1-top-too-small.webp`,
          imageCaption: `Problem: 2 - 7 can't subtract. Top digit too small. Need to BORROW!`,
          vocab: [
            { word: `too small`, definition: `Top digit is less than the bottom.`,
              audioPrompt: `Too small is when the top digit is less than the bottom. Too small means you can't subtract directly. Like trying to give away 7 cookies when you only have 2. You need to get more first!` },
            { word: `borrow`,    definition: `Take value from the next bigger column.`,
              audioPrompt: `To borrow is to take value from the next bigger column. The tens column has tens — each worth 10 ones. So if you take 1 ten and break it apart, you get 10 ones for your ones column!` },
            { word: `fix`,       definition: `The solution to a problem.`,
              audioPrompt: `A fix is the solution to a problem. Borrowing is the fix for top-too-small subtraction. Math problems always have answers. For subtraction with a too-small top, that tool is borrowing!` },
          ],
        },

        {
          id: `l14-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `BREAK DOWN and Bring It DOWN`,
          paragraphs: [
            `Here's the FIX! When the ones column needs more, you BORROW 1 from the tens. That 1 ten BREAKS APART into 10 ones — those 10 ones JOIN the ones column!`,
            `Let's see 52 - 27 on the place value MAT! Build 52: 5 rods, 2 singles! Now subtract 27. In ones, you need to take 7 — but only have 2! So BORROW! Take 1 rod from tens. BREAK it into 10 singles! Now ones has 2 + 10 = 12! Tens has 5 - 1 = 4! Now subtract: 12 - 7 = 5! Tens: 4 - 2 = 2! ANSWER: 25!`,
          ],
          image: `/explorer-assets/math/l14-s2-borrow-down.webp`,
          imageCaption: `Borrow: 1 rod BREAKS into 10 ones → joins ones column. Now subtract!`,
          vocab: [
            { word: `break apart`, definition: `Split into smaller pieces.`,
              audioPrompt: `To break apart is to split into smaller pieces. Break apart 1 rod into 10 singles. The rod was 1 bundle of 10. Now it's 10 individual singles. Same amount overall — just regrouped!` },
            { word: `bring down`,  definition: `Move the 10 ones down to the ones column.`,
              audioPrompt: `Bring down means move the 10 ones down to the ones column. After breaking it apart, those new 10 singles aren't useful in the tens column. So they go down to join ones!` },
            { word: `same amount`, definition: `The total value doesn't change.`,
              audioPrompt: `Same amount means the total value doesn't change. Before borrowing: 5 rods plus 2 singles equals 52. After borrowing: 4 rods plus 12 singles equals 52. Same number. Different arrangement!` },
          ],
        },

        {
          id: `l14-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Writing the BORROW on Paper`,
          paragraphs: [
            `On the mat, borrowing is physical — break the rod, bring it down! On paper, we use a special notation!`,
            `Solve 52 - 27 vertically. Ones: 2 - 7. Can't! BORROW! CROSS OUT the 5 in tens! Write a 4 above it (5 - 1 = 4)! Above the 2 in ones, write 12 (the 2 boosted by 10)! Now subtract: ONES: 12 - 7 = 5! TENS: 4 - 2 = 2! ANSWER: 25! Always SHOW your borrowing on paper. It prevents mistakes!`,
          ],
          image: `/explorer-assets/math/l14-s3-written-borrow.webp`,
          imageCaption: `Written borrow: cross out tens (5→4), boost ones (2→12)!`,
          vocab: [
            { word: `cross out`,      definition: `Mark through a digit.`,
              audioPrompt: `To cross out is to mark through a digit. Cross out the tens digit to show it lost 1 to borrowing. Then write the new smaller value above. This notation shows clearly what you did!` },
            { word: `boost`,          definition: `Increase by 10.`,
              audioPrompt: `To boost is to increase by 10. Boost the ones digit by 10 after borrowing. So 2 in ones becomes 12. The borrowed rod broke into 10 singles and joined ones!` },
            { word: `show your work`, definition: `Write the borrowing notation.`,
              audioPrompt: `Show your work is to write the borrowing notation. Show your work prevents mistakes. Without it, you might forget you borrowed and use the wrong digits. Writing notation tracks every change!` },
          ],
        },

        {
          id: `l14-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `CHAIN Borrowing`,
          paragraphs: [
            `Sometimes you have to borrow from MULTIPLE columns! That's CHAIN BORROWING!`,
            `Try 423 - 158. Ones: 3 - 8. Can't! BORROW from tens! Cross out 2, write 1. Boost 3 to 13. Ones: 13 - 8 = 5! Now tens: 1 - 5. CAN'T AGAIN! BORROW from hundreds! Cross out 4, write 3. Boost 1 to 11. Tens: 11 - 5 = 6! Hundreds: 3 - 1 = 2! ANSWER: 265! TWO borrows happened! Stay organized — cross out, write clearly!`,
          ],
          image: `/explorer-assets/math/l14-s4-chain-borrow.webp`,
          imageCaption: `Chain borrow: 423 - 158. Borrow twice. Same rule, twice!`,
          vocab: [
            { word: `chain`,      definition: `Multiple borrows in sequence.`,
              audioPrompt: `A chain is multiple borrows in sequence. Chain borrowing happens when several columns need help. First ones borrows from tens. Then tens can't subtract either, so it borrows from hundreds!` },
            { word: `multiple`,   definition: `Many borrows.`,
              audioPrompt: `Multiple means many borrows. Multiple borrows can happen in one subtraction problem. If every top digit is smaller, you'll borrow at every step. Same rule each time!` },
            { word: `not harder`, definition: `Same rule, just longer.`,
              audioPrompt: `Not harder means same rule, just longer. Chain borrowing is not harder — just more steps. Each individual borrow is identical. There are just multiple of them. Break them into pieces!` },
          ],
        },

        {
          id: `l14-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Borrowing = BUNDLING REVERSED`,
          paragraphs: [
            `Here's the BIG TRUTH, {name}! Borrowing is just BUNDLING in REVERSE! Same idea as carrying — just going the other way!`,
            `Compare! CARRYING in addition: 10 ones BUNDLE UP into 1 ten (going up)! BORROWING in subtraction: 1 ten BREAKS DOWN into 10 ones (going down)! Mirror operations of the SAME RULE — 10 of one place equals 1 of the next bigger place! Addition uses it going UP. Subtraction uses it going DOWN! Same idea, in reverse!`,
          ],
          image: `/explorer-assets/math/l14-s5-reverse-bundling.webp`,
          imageCaption: `Carrying = bundle UP. Borrowing = break DOWN. Same rule, reversed!`,
          vocab: [
            { word: `mirror operations`, definition: `Same rule, opposite directions.`,
              audioPrompt: `Mirror operations are same rule, opposite directions. Carrying and borrowing are mirror operations. Both use the same place-value rule — 10 of one place equals 1 of the next. Same rule, mirrored!` },
            { word: `same rule`,         definition: `The identical concept.`,
              audioPrompt: `Same rule is the identical concept. Bundling and breaking is the same rule — just used both ways. Carrying applies it going up. Borrowing applies it going down. There's only 1 rule to learn!` },
            { word: `place value`,       definition: `The foundation beneath all of this.`,
              audioPrompt: `Place value is the foundation beneath all of this. Place value is doing the work in both directions. Without it, neither carrying nor borrowing would make sense. With it, both make perfect sense!` },
          ],
        },

        {
          id: `l14-mag-6`,
          type: `magazine`,
          section: 6,
          headline: `Subtraction UNLOCKED`,
          paragraphs: [
            `{name} — you now have the FULL subtraction toolkit!`,
            `You can: line up digits in vertical format! Subtract right to left! Borrow when top digits are too small! Notate borrowing with cross-outs and boosted digits! Chain multiple borrows! That's EVERY skill for subtracting any whole numbers! Combined with addition, you can now COMBINE or SEPARATE any amounts! Same rule, two directions. Beautiful!`,
          ],
          image: `/explorer-assets/math/l14-s6-subtraction-unlocked.webp`,
          imageCaption: `Unlocked! Full subtraction toolkit!`,
          vocab: [
            { word: `unlocked`,       definition: `New skill gained.`,
              audioPrompt: `Unlocked means new skill gained. You've unlocked multi-digit subtraction forever. Before borrowing, some subtractions were impossible. After borrowing, any subtraction is doable!` },
            { word: `full toolkit`,   definition: `Complete collection of skills.`,
              audioPrompt: `Full toolkit is a complete collection of skills. Your subtraction toolkit is now built. Place value foundation. Vertical format. Column method. Borrowing. Chain borrowing. Each one a tool!` },
            { word: `two directions`, definition: `Both ways through place value.`,
              audioPrompt: `Two directions is both ways through place value. Same rule used in 2 directions — up and down. Up for addition, when you bundle. Down for subtraction, when you break apart. Both in your toolkit!` },
          ],
        },

        {
          id: `l14-game`,
          type: `interactive`,
          format: `drag-match`,
          guideText: `Let's try it, {name}! Here are 4 column subtractions. Drag each one — does it NEED A BORROW (top smaller!) or NO BORROW (top bigger, clean!)?`,
          buckets: [
            { id: `needs_borrow`, label: `⬇️ NEEDS A BORROW (top smaller)`, color: `#F87171` },
            { id: `no_borrow`,    label: `✅ NO BORROW (top bigger)`,        color: `#34D399` },
          ],
          items: [
            { id: `l14-g1`, image: `l14-game-1.webp`, label: `2 - 7`,
              matchPhrase: `Yes! NEEDS A BORROW! 2 is smaller than 7. You can't subtract 7 from 2. Borrow from the next column!`,
              correctMatch: `needs_borrow` },
            { id: `l14-g2`, image: `l14-game-2.webp`, label: `8 - 5`,
              matchPhrase: `Great! NO BORROW! 8 is bigger than 5. Subtract clean! 8 - 5 = 3!`,
              correctMatch: `no_borrow` },
            { id: `l14-g3`, image: `l14-game-3.webp`, label: `1 - 5`,
              matchPhrase: `Yes! NEEDS A BORROW! 1 is way smaller than 5. Definitely need to borrow!`,
              correctMatch: `needs_borrow` },
            { id: `l14-g4`, image: `l14-game-4.webp`, label: `9 - 2`,
              matchPhrase: `Perfect! NO BORROW! 9 is way bigger than 2. Subtract clean! 9 - 2 = 7!`,
              correctMatch: `no_borrow` },
          ],
        },

        {
          id: `l14-quiz`,
          type: `quiz`,
          guideText: `Let's see what you remember, {name}!`,
          questions: [
            { id: `l14-q1`, format: `multiple-choice`,
              question: `What is BORROWING (also called REGROUPING)?`,
              options: [`Magic`, `When the top digit is too small, you take 1 from the next column (becomes 10 in current)`, `Skipping`, `Adding more`],
              correctIndex: 1,
              explanation: `Borrowing! When the top is too small, borrow 1 from the next bigger column. That 1 becomes 10 in the current column!` },
            { id: `l14-q2`, format: `multiple-choice`,
              question: `What is 52 - 27?`,
              options: [`25`, `35`, `15`, `45`],
              correctIndex: 0,
              explanation: `25! Ones: 2 - 7? Can't. Borrow! 12 - 7 = 5. Tens: 4 - 2 = 2. Final: 25!` },
            { id: `l14-q3`, format: `multiple-choice`,
              question: `How do you SHOW borrowing on paper?`,
              options: [`Skip it`, `CROSS OUT the next column's digit (subtract 1) and BOOST the current digit by 10`, `Use stickers`, `Erase`],
              correctIndex: 1,
              explanation: `Cross out and boost! Cross the borrowed-from digit. Boost the current digit by 10!` },
            { id: `l14-q4`, format: `true-false`,
              question: `BORROWING is the SAME IDEA as carrying in addition — just going in the OPPOSITE direction.`,
              correctAnswer: true,
              explanation: `True! Carrying bundles up. Borrowing breaks down. Same rule, mirror operations!` },
            { id: `l14-q5`, format: `fill-blank`,
              question: `When you borrow, you take 1 from the next column and add ___ to the column that needed it.`,
              options: [`10`, `1`, `100`, `2`],
              correctIndex: 0,
              explanation: `10! That 1 you borrowed is really worth 10. It breaks apart into 10 ones to join the current column!` },
            { id: `l14-q6`, format: `multiple-choice`,
              question: `What is 423 - 158?`,
              options: [`275`, `265`, `255`, `365`],
              correctIndex: 1,
              explanation: `265! Ones: 3-8? Borrow. 13-8=5. Tens: 1-5? Borrow. 11-5=6. Hundreds: 3-1=2. Chain borrow!` },
          ],
        },

        {
          id: `l14-realworld`,
          type: `real-world`,
          guideText: `Here's something cool, {name}! The word "BORROW" in math is misleading — you're not really borrowing because you never give it back! You're RENAMING the same number. 52 is the same as 4 tens + 12 ones, just regrouped! Some teachers call it "regrouping" to be accurate. Centuries of mathematicians built this method — now it's standard worldwide!`,
          familyAdventure: `Together, do a BORROWING DRILL! Make 8 subtraction problems where at least one column needs borrowing! Examples: 52 - 27, 84 - 36, 71 - 48! Solve them one at a time. Talk through each borrow OUT LOUD: "I can't subtract 7 from 2, so I borrow from tens. The 5 becomes 4, the 2 becomes 12. Now 12 - 7 = 5!"`,
          creativePrompt: `Make a "BORROWING HEROES" comic! Three frames: 1) Two numbers stacked for subtraction — the top digit looks worried because it's smaller. 2) A hero (the tens digit) generously gives one of its tens to the ones column. The ones column transforms — boosted by 10! 3) Subtraction succeeds. Everyone celebrates! Write at least 3 sentences about your comic. For stretch, write a 5-sentence story showing math as teamwork!`,
        },

        {
          id: `l14-celebration`,
          type: `celebration`,
          message: `HUGE win, {name}! You unlocked BORROWING — the move that lets you subtract any numbers! Take 1 from the next column. It becomes 10 where you need it. Show it on paper with cross-outs and boosts. Same idea as carrying — just going DOWN! Now you have the FULL subtraction toolkit! Remi is so proud! 🦝`,
          badge: `borrowing-master`,
          badgeName: `Borrowing Master`,
          xpEarned: 50,
        },

      ],
    },
  ],
};

export default MATH_L14;

// ─── Dev asset check ─────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const mags  = MATH_L14.lessons[0].screens.filter(s => s.type === 'magazine').length;
  const game  = MATH_L14.lessons[0].screens.find(s => s.type === 'interactive')?.items?.length ?? 0;
  const quiz  = MATH_L14.lessons[0].screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  console.log(`[LESSON-MATH-L14] Loaded: "Borrowing (Regrouping)" with ${mags} magazine sections, ${game} game items, ${quiz} quiz questions`);
}
