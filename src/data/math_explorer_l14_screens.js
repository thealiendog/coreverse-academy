// ─────────────────────────────────────────────────────────────────────────────
// MATH  |  L14 — Borrowing (Regrouping)
// Age band : explorers (6–8)   Guide: remi
// Standards: CCSS 2.NBT.B.7 / 4.NBT.B.4 (regrouping in multi-digit subtraction)
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
          guideText: `Hey {name}, Remi here. BIG lesson today. BORROWING — also called regrouping for subtraction. It happens when a top digit is SMALLER than the one below it. Once you get this, you can subtract ANY numbers. Best part — it's just BUNDLING in reverse. The same idea as carrying, going the other direction. Let's unlock it.`,
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
            `Quick question. What's 3 - 7? Hmm — you can't take 7 away from 3 if you've only got 3. Not unless you go into negative numbers (we're not there yet). So what do you DO when this happens in column subtraction?`,
            `Try 52 - 27 in vertical format. Ones column: 2 - 7. UH OH. The top digit (2) is SMALLER than the bottom (7). You can't subtract 7 from 2 with what you have. This is the BORROWING PROBLEM. When a column's top digit is too small, you can't subtract directly. But there's a FIX — BORROW from the next column. Take one from the tens (which is really 10 ones) and bring it into the ones column. Now the ones column has enough to subtract. Same idea as carrying in addition — just going the OTHER WAY.`,
          ],
          image: `/explorer-assets/math/l14-s1-top-too-small.webp`,
          imageCaption: `Problem: 2 - 7 can't subtract. Top digit too small. Need to BORROW from tens.`,
          vocab: [
            { word: `too small`,      definition: `Top digit is LESS than the bottom. TOO SMALL means you can't subtract directly.`,
              audioPrompt: `Too small, {name}, is when the top digit is less than the bottom. Too small means you can't subtract directly. Like trying to give away seven cookies when you only have two — you don't have enough. You need to get more first. In math, you get more by borrowing from the next column.` },
            { word: `borrow`,         definition: `TAKE value from the next bigger COLUMN. BORROWING brings extra into the column that needs it.`,
              audioPrompt: `To borrow, {name}, is to take value from the next bigger column. Borrowing brings extra into the column that needs it. The tens column has tens — each worth ten ones. So if you take one ten and break it apart, you get ten ones to add to your ones column. Now you have enough to subtract.` },
            { word: `fix`,            definition: `The SOLUTION to a problem. BORROWING is the FIX for top-too-small subtraction.`,
              audioPrompt: `A fix, {name}, is the solution to a problem. Borrowing is the fix for top-too-small subtraction. Math problems always have answers — you just need the right tool. For subtraction with a too-small top, that tool is borrowing. Once you have it, no subtraction can stump you.` },
          ],
        },

        {
          id: `l14-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `BREAK DOWN and Bring It DOWN`,
          paragraphs: [
            `Here's the FIX in plain English. When the ones column needs more, you BORROW 1 from the tens column. That 1 ten BREAKS APART into 10 ones, and those 10 ones JOIN the ones column.`,
            `Let's see 52 - 27 on the place value MAT. Build 52: 5 rods in tens, 2 singles in ones. Now try to subtract 27. In ones, you need to take away 7 — but you only have 2 singles. So BORROW. Reach into the tens column. Take 1 rod out. BREAK it apart into 10 singles. Now the ones column has 2 + 10 = 12 singles! Tens has 5 - 1 = 4 rods. Now subtract. Ones: 12 - 7 = 5. Tens: 4 - 2 = 2. ANSWER: 25. Done! Borrowing physically converted 1 ten into 10 ones — keeping the total amount the same, just rearranged.`,
          ],
          image: `/explorer-assets/math/l14-s2-borrow-down.webp`,
          imageCaption: `Borrow on the mat: 1 rod (from tens) BREAKS into 10 ones → joins ones column. Now subtract.`,
          vocab: [
            { word: `break apart`,    definition: `SPLIT into smaller PIECES. BREAK APART one rod into 10 singles.`,
              audioPrompt: `To break apart, {name}, is to split into smaller pieces. Break apart one rod into ten singles. The rod was one bundle of ten. Now it's ten individual singles. Same amount overall — just regrouped into a smaller place. That's the magic of borrowing.` },
            { word: `bring down`,     definition: `MOVE the 10 ones DOWN to the ones column. BRING DOWN the broken-apart rod.`,
              audioPrompt: `Bring down, {name}, means move the ten ones down to the ones column. Bring down the broken-apart rod. After breaking it apart, those new ten singles aren't useful in the tens column — they're singles now. So they go down to join the ones column, where they belong.` },
            { word: `same amount`,    definition: `The total VALUE doesn't change. Borrowing keeps the SAME AMOUNT — just rearranged.`,
              audioPrompt: `Same amount, {name}, means the total value doesn't change. Borrowing keeps the same amount — just rearranged. Before borrowing: 5 rods plus 2 singles equals 52. After borrowing: 4 rods plus 12 singles equals 52. Same number. Different arrangement. That's why it works.` },
          ],
        },

        {
          id: `l14-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Writing the BORROW on Paper`,
          paragraphs: [
            `On the mat, borrowing is physical — break the rod, bring it down. On paper, we use a special notation.`,
            `Solve 52 - 27 vertically. Ones: 2 - 7. Can't! BORROW. CROSS OUT the 5 in the tens column. Write a 4 above it (5 - 1 = 4). Above the 2 in ones, write 12 (the 2 boosted by 10). Now subtract: ONES: 12 - 7 = 5. Write 5 below the line. TENS: 4 - 2 = 2. Write 2 below the line. ANSWER: 25. The crossed-out 5 reminds you that you borrowed from tens. The "12" above the ones reminds you that the ones column got boosted. Always show your borrowing on paper. It prevents mistakes and shows your work clearly.`,
          ],
          image: `/explorer-assets/math/l14-s3-written-borrow.webp`,
          imageCaption: `Written borrow: cross out tens digit (5→4), boost ones digit (2→12). Then subtract.`,
          vocab: [
            { word: `cross out`,      definition: `Mark THROUGH a digit. CROSS OUT the tens digit to show it lost 1 to borrowing.`,
              audioPrompt: `To cross out, {name}, is to mark through a digit. Cross out the tens digit to show it lost one to borrowing. Then write the new smaller value above. This notation shows clearly what you did. Without it, you might forget the tens column changed.` },
            { word: `boost`,          definition: `INCREASE by 10. BOOST the ones digit by 10 after borrowing.`,
              audioPrompt: `To boost, {name}, is to increase by ten. Boost the ones digit by ten after borrowing. So 2 in ones becomes 12. The borrowed rod broke into ten singles and joined the ones column. The notation shows the new bigger number above the original two.` },
            { word: `show your work`, definition: `WRITE the borrowing notation. SHOW YOUR WORK prevents mistakes and makes math clear.`,
              audioPrompt: `Show your work, {name}, is to write the borrowing notation. Show your work prevents mistakes and makes math clear. If you don't cross out or boost, you might forget you borrowed and use the wrong digits. Writing notation tracks every change.` },
          ],
        },

        {
          id: `l14-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `CHAIN Borrowing`,
          paragraphs: [
            `Sometimes you have to borrow from MULTIPLE columns. That's CHAIN BORROWING — and it works the same way.`,
            `Try 423 - 158. Ones: 3 - 8. Can't! BORROW from tens. Cross out the 2 in tens, write 1 above it. Boost the 3 to 13. Ones: 13 - 8 = 5. Write 5. Now tens: 1 - 5. CAN'T AGAIN! BORROW from hundreds. Cross out the 4 in hundreds, write 3 above it. Boost the 1 in tens to 11. Tens: 11 - 5 = 6. Write 6. Hundreds: 3 - 1 = 2. Write 2. ANSWER: 265. TWO borrows happened. The method handled them. Stay organized — cross out each old digit, write new ones clearly. Take your time. Chain borrowing isn't HARDER, just LONGER. Same rule, applied twice.`,
          ],
          image: `/explorer-assets/math/l14-s4-chain-borrow.webp`,
          imageCaption: `Chain borrow: 423 - 158. Borrow once from tens, again from hundreds. Same rule, twice.`,
          vocab: [
            { word: `chain`,          definition: `MULTIPLE borrows in SEQUENCE. CHAIN borrowing happens when several columns need help.`,
              audioPrompt: `A chain, {name}, is multiple borrows in sequence. Chain borrowing happens when several columns need help. First the ones borrows from tens. Then the tens still can't subtract, so it borrows from hundreds. Each borrow follows the same rule. The chain can keep going if needed.` },
            { word: `multiple`,       definition: `MANY borrows. MULTIPLE borrows can happen in one subtraction problem.`,
              audioPrompt: `Multiple, {name}, means many borrows. Multiple borrows can happen in one subtraction problem. If every top digit is smaller than its bottom partner, you'll borrow at every step. Same rule each time. Stay organized. The method handles any chain length.` },
            { word: `not harder`,     definition: `Same RULE, just LONGER. Chain borrowing is NOT HARDER — just more steps.`,
              audioPrompt: `Not harder, {name}, means same rule, just longer. Chain borrowing is not harder — just more steps. Each individual borrow is identical. There are just multiple of them. Don't get intimidated by long problems. Break them into pieces, handle each, finish strong.` },
          ],
        },

        {
          id: `l14-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Borrowing = BUNDLING REVERSED`,
          paragraphs: [
            `Here's the BIG TRUTH, {name}. Borrowing is just BUNDLING in REVERSE. Same idea as carrying in addition — just going the other direction.`,
            `Compare. CARRYING in addition: ten ones BUNDLE UP into one ten (column going up). BORROWING in subtraction: one ten BREAKS DOWN into ten ones (column going down). They're mirror operations of the SAME RULE — 10 of one place equals 1 of the next bigger place. Addition uses it going UP (bundling). Subtraction uses it going DOWN (breaking apart). Once you see this, borrowing makes total sense. It's not a NEW idea. It's the SAME idea, in reverse. The math you already know is helping you. Place value is doing the work in both directions.`,
          ],
          image: `/explorer-assets/math/l14-s5-reverse-bundling.webp`,
          imageCaption: `Carrying = bundle UP (10 ones → 1 ten). Borrowing = break DOWN (1 ten → 10 ones). Same rule, reversed.`,
          vocab: [
            { word: `mirror operations`, definition: `Same RULE, opposite DIRECTIONS. Carrying and borrowing are MIRROR OPERATIONS.`,
              audioPrompt: `Mirror operations, {name}, are same rule, opposite directions. Carrying and borrowing are mirror operations. Both use the same place-value rule — ten of one place equals one of the next. Carrying goes up (bundling). Borrowing goes down (breaking apart). Same rule, mirrored.` },
            { word: `same rule`,      definition: `The IDENTICAL concept. Bundling/breaking is the SAME RULE — just used both ways.`,
              audioPrompt: `Same rule, {name}, is the identical concept. Bundling and breaking is the same rule — just used both ways. Carrying applies it going up. Borrowing applies it going down. There's only one rule to learn. Then you can move in both directions through any operation.` },
            { word: `place value`,    definition: `The FOUNDATION beneath ALL OF THIS. PLACE VALUE is doing the work in both directions.`,
              audioPrompt: `Place value, {name}, is the foundation beneath all of this. Place value is doing the work in both directions. Without it, neither carrying nor borrowing would make sense. With it, both make perfect sense. The same beautiful idea — ten of one place equals one of the next — runs through every operation you'll ever learn.` },
          ],
        },

        {
          id: `l14-mag-6`,
          type: `magazine`,
          section: 6,
          headline: `Subtraction UNLOCKED`,
          paragraphs: [
            `{name} — you now have the FULL subtraction toolkit.`,
            `You can: line up digits in vertical format. Subtract right to left. Borrow when top digits are too small. Notate borrowing with cross-outs and boosted digits. Chain multiple borrows when needed. That's EVERY skill for subtracting any whole numbers. Combined with addition, you can now COMBINE or SEPARATE any amounts. Two of the most important math operations are yours. The next few lessons will give you more PRACTICE — to make borrowing fast and confident. But the BIG IDEAS are now locked in. Place value is the foundation. Addition combines using bundling up. Subtraction separates using breaking down. Same rule, two directions. Beautiful.`,
          ],
          image: `/explorer-assets/math/l14-s6-subtraction-unlocked.webp`,
          imageCaption: `Unlocked! Full subtraction toolkit. Combined with addition, you can handle any whole numbers.`,
          vocab: [
            { word: `unlocked`,       definition: `New SKILL gained. You've UNLOCKED multi-digit subtraction forever.`,
              audioPrompt: `Unlocked, {name}, means new skill gained. You've unlocked multi-digit subtraction forever. Before borrowing, some subtractions were impossible. After borrowing, any subtraction is doable — just maybe longer. That's what unlocking does. New skill, new abilities.` },
            { word: `full toolkit`,   definition: `COMPLETE collection of SKILLS. Your subtraction FULL TOOLKIT is now built.`,
              audioPrompt: `Full toolkit, {name}, is a complete collection of skills. Your subtraction full toolkit is now built. Place value foundation. Vertical format. Column method. Borrowing. Chain borrowing. Each one a tool. Together, they let you handle anything subtraction can throw at you.` },
            { word: `two directions`, definition: `BOTH ways through PLACE VALUE. Same rule used in TWO DIRECTIONS — up and down.`,
              audioPrompt: `Two directions, {name}, is both ways through place value. Same rule used in two directions — up and down. Up for addition, when you bundle ten ones into one ten. Down for subtraction, when you break one ten into ten ones. Both directions are now in your toolkit.` },
          ],
        },

        {
          id: `l14-game`,
          type: `interactive`,
          format: `drag-match`,
          guideText: `Let's see what you remember, {name}.`,
          buckets: [
            { id: `fact`, label: `✅ Yes, that's true!`, color: `#34D399` },
            { id: `myth`, label: `❌ No way!`,         color: `#F87171` },
          ],
          items: [
            { id: `l14-g1`, image: `l14-game-1.webp`, label: `When the TOP digit is SMALLER than the bottom, you BORROW from the next column to make subtraction possible.`,
              matchPhrase: `Yes! That's the fix. Take 1 from the next bigger column. That 1 becomes 10 in the smaller column. Now you can subtract.`,
              correctMatch: `fact` },
            { id: `l14-g2`, image: `l14-game-2.webp`, label: `BORROWING is BUNDLING in REVERSE — same rule as carrying, just going down instead of up.`,
              matchPhrase: `True! Carrying bundles 10 ones up into 1 ten. Borrowing breaks 1 ten down into 10 ones. Same rule, opposite directions. Mirror operations.`,
              correctMatch: `fact` },
            { id: `l14-g3`, image: `l14-game-3.webp`, label: `You should NEVER borrow — just write a negative number when the top is too small.`,
              matchPhrase: `Not at all! Borrowing is how multi-digit subtraction works for positive answers. Negative numbers come later. For now, ALWAYS borrow when needed.`,
              correctMatch: `myth` },
            { id: `l14-g4`, image: `l14-game-4.webp`, label: `Borrowing is MAGICAL — just memorize the trick without understanding why it works.`,
              matchPhrase: `Definitely not! Borrowing makes perfect sense. It's bundling in reverse. The same place-value rule (10 of one place = 1 of the next) running both directions.`,
              correctMatch: `myth` },
          ],
        },

        {
          id: `l14-quiz`,
          type: `quiz`,
          guideText: `Let's see what you remember, {name}.`,
          questions: [
            { id: `l14-q1`, format: `multiple-choice`,
              question: `What is BORROWING (also called REGROUPING)?`,
              options: [`Magic`, `When the top digit is too small, you take 1 from the next column (which becomes 10 in the current column)`, `Skipping the problem`, `Adding more`],
              correctIndex: 1,
              explanation: `Borrowing! When the top digit is too small to subtract from, you borrow 1 from the next bigger column. That 1 becomes 10 in the current column. Now you can subtract.` },
            { id: `l14-q2`, format: `multiple-choice`,
              question: `What is 52 - 27?`,
              options: [`25`, `35`, `15`, `45`],
              correctIndex: 0,
              explanation: `25! Ones: 2 - 7? Can't. Borrow. 12 - 7 = 5. Tens: 4 - 2 = 2. Final: 25.` },
            { id: `l14-q3`, format: `multiple-choice`,
              question: `How do you SHOW borrowing on paper?`,
              options: [`Skip it`, `CROSS OUT the next column's digit (subtract 1) and BOOST the current digit by 10`, `Use stickers`, `Erase the problem`],
              correctIndex: 1,
              explanation: `Cross out and boost! Cross the borrowed-from digit, write the new smaller value. Then boost the current digit by 10. Always show the work to track changes.` },
            { id: `l14-q4`, format: `true-false`,
              question: `BORROWING is the SAME IDEA as carrying in addition — just going in the OPPOSITE direction.`,
              correctAnswer: true,
              explanation: `True! Carrying bundles up (10 ones → 1 ten). Borrowing breaks down (1 ten → 10 ones). Same place-value rule, mirror operations.` },
            { id: `l14-q5`, format: `fill-blank`,
              question: `When you borrow, you take 1 from the next column and add ___ to the column that needed it.`,
              options: [`10`, `1`, `100`, `2`],
              correctIndex: 0,
              explanation: `10! That 1 you borrowed is really worth 10 (because it came from a bigger place value). It breaks apart into 10 ones to join the current column.` },
            { id: `l14-q6`, format: `multiple-choice`,
              question: `What is 423 - 158?`,
              options: [`275`, `265`, `255`, `365`],
              correctIndex: 1,
              explanation: `265! Ones: 3-8? Borrow. 13-8=5. Tens: 1-5? Borrow. 11-5=6. Hundreds: 3-1=2. Chain borrow. Final: 265.` },
          ],
        },

        {
          id: `l14-realworld`,
          type: `real-world`,
          guideText: `Here's something cool, {name}. The word "BORROW" in math is actually a little misleading — you're not really borrowing, because you never give it back! You're just RENAMING the same number. 52 is the same as 4 tens + 12 ones, just regrouped. Some math teachers call it "regrouping" to be more accurate. Whatever you call it, the action is the same — break one bigger unit into smaller ones to make subtraction possible. The Latin word for breaking apart is FRANGERE — same root as the word "fraction." Centuries of mathematicians built this method, and now it's standard around the world. You're learning the same technique used by ancient merchants, modern scientists, and computers everywhere. Universal math.`,
          familyAdventure: `Together, do a BORROWING DRILL. Make a list of 8 subtraction problems where at least one column needs borrowing. Examples: 52 - 27, 84 - 36, 71 - 48, 423 - 158, 305 - 167, 600 - 234, 152 - 89, 832 - 547. Solve them one at a time. Talk through each borrow OUT LOUD: "I can't subtract 7 from 2, so I borrow from the tens column. The 5 becomes 4, and the 2 becomes 12. Now 12 - 7 = 5." Speaking the steps builds them in. Try harder ones as you get comfortable.`,
          creativePrompt: `Make a "BORROWING HEROES" comic. Three frames: 1) Two numbers stacked for subtraction — the top digit looks worried because it's smaller than the one below. 2) A hero (the tens digit) generously gives one of its tens to the ones column. The ones column transforms — boosted by 10! 3) Subtraction succeeds. Everyone celebrates. Show generosity as the moral. The tens column gave up something so the ones could succeed. Math as teamwork.`,
        },

        {
          id: `l14-celebration`,
          type: `celebration`,
          message: `HUGE win, {name}! You unlocked BORROWING — the move that lets you subtract any numbers. Take 1 from the next column. It becomes 10 where you need it. Show it on paper with cross-outs and boosts. Same idea as carrying — just going DOWN instead of UP. Now you have the FULL subtraction toolkit. Combined with addition, you can handle the two most-used math operations in real life. Next few lessons we drill and master. — Remi 🦝`,
          badge: `borrowing-master`,
          badgeName: `Borrowing Master`,
          xpEarned: 50,
        },

      ],
    },
  ],
};

export default MATH_L14;

// ─── Dev asset check ───
if (import.meta.env?.DEV) {
  const mags  = MATH_L14.lessons[0].screens.filter(s => s.type === 'magazine').length;
  const game  = MATH_L14.lessons[0].screens.find(s => s.type === 'interactive')?.items?.length ?? 0;
  const quiz  = MATH_L14.lessons[0].screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  console.log(`[LESSON-MATH-L14] Loaded: "Borrowing (Regrouping)" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
}
