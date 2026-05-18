// ─────────────────────────────────────────────────────────────────────────────
// MATH  |  L08 — Regrouping (Carrying)
// Age band : explorers (6–8)   Guide: remi
// Standards: CCSS 2.NBT.B.7 / 4.NBT.B.4 (regrouping in multi-digit addition)
// ─────────────────────────────────────────────────────────────────────────────

const MATH_L08 = {
  ageBand:   `explorers`,
  subjectId: `math`,
  guide:     `remi`,

  lessons: [
    {
      id:        `math-6-8-08`,
      title:     `Regrouping (Carrying)`,
      duration:  12,
      xpReward:  50,
      badge:     `regrouping-master`,
      badgeName: `Regrouping Master`,

      screens: [

        {
          id: `l08-welcome`,
          type: `welcome`,
          guideText: `Hey {name}, Remi here. Today is one of the BIGGEST lessons in math. REGROUPING — also called CARRYING. It happens when a column adds to MORE than 9. Once you get this, you can add ANY numbers, no matter how big. And here's the cool part — regrouping is just BUNDLING (which you already know) but on paper. Let's unlock the secret.`,
          headline: `Regrouping (Carrying)`,
          subtitle: `The move that lets you add any numbers — and why it's just bundling in disguise`,
          visual: `/explorer-assets/math/l08-welcome.webp`,
        },

        {
          id: `l08-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `What Happens When Columns OVERFLOW?`,
          paragraphs: [
            `Quick question. What's 8 + 5? You know — it's 13. But here's the puzzle — 13 is a TWO-DIGIT number. So when you're adding column by column, what do you DO with that 13?`,
            `Try 28 + 15 in the vertical format. Ones column: 8 + 5 = 13. Uh oh. The ones column can only hold ONE DIGIT (0-9). Where does the 13 go? You CAN'T just write "13" in the ones column — that would mean 13 ones, which is more than the column can show. This is the OVERFLOW PROBLEM. Every multi-digit addition might run into it. Lucky for us, there's a SMART FIX. It's called REGROUPING. And it works because of place value's bundling rule.`,
          ],
          image: `/explorer-assets/math/l08-s1-too-many.webp`,
          imageCaption: `8 + 5 = 13. But "13" doesn't fit in one column. This is the overflow problem.`,
          vocab: [
            { word: `overflow`,       definition: `When a column adds to MORE than 9. OVERFLOW is when one column can't hold the answer.`,
              audioPrompt: `Overflow, {name}, is when a column adds to more than nine. Overflow is when one column can't hold the answer. Each column can only show digits zero through nine. If two numbers add to ten or more, you've got overflow. You can't just leave the answer there. You have to do something with the extra. That's where regrouping comes in.` },
            { word: `puzzle`,         definition: `A PROBLEM to solve. Overflow is a PUZZLE — but regrouping is the solution.`,
              audioPrompt: `A puzzle, {name}, is a problem to solve. Overflow is a puzzle — but regrouping is the solution. Math puzzles always have answers. The trick is finding the right tool. For overflow, that tool is regrouping. Once you have it, the puzzle becomes easy.` },
            { word: `regrouping`,     definition: `Moving EXTRA value to the next BIGGER place. REGROUPING is how we fix overflow.`,
              audioPrompt: `Regrouping, {name}, is moving extra value to the next bigger place. Regrouping is how we fix overflow. When a column has too much, you take the extra and move it up to the next column. Specifically — you take ten ones and turn them into one ten. Or ten tens and turn them into one hundred. Sound familiar? It's bundling.` },
          ],
        },

        {
          id: `l08-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `BUNDLE and CARRY UP`,
          paragraphs: [
            `Here's the FIX. When a column adds to 10 or more, you BUNDLE the 10 — and CARRY the bundle up to the next column.`,
            `Let's solve 8 + 5 = 13 on the place value mat. In the ones column, you'd have 13 singles. That's too many. So you BUNDLE 10 of those singles into 1 ROD. Move the rod to the TENS column. That leaves 3 singles in the ones column. So 13 becomes: 1 in the tens place, 3 in the ones place. WRITE 3 in the ones spot. The 1 (rod) gets CARRIED UP to the tens column to be added with the other tens. That's it. That's regrouping. Each time a column overflows, bundle 10, write the rest, carry the bundled 10 up.`,
          ],
          image: `/explorer-assets/math/l08-s2-bundle-carry.webp`,
          imageCaption: `13 ones = 1 ten + 3 ones. Bundle 10. Carry the new ten up. Leave the 3 in the ones place.`,
          vocab: [
            { word: `carry up`,       definition: `MOVE the bundled 10 to the NEXT bigger place. CARRY UP into the tens column.`,
              audioPrompt: `To carry up, {name}, is to move the bundled ten to the next bigger place. Carry up into the tens column. When ones overflow, the carry goes to tens. When tens overflow, the carry goes to hundreds. The carry always moves left to a bigger place. That's why we call it carrying — you're physically moving value upward.` },
            { word: `bundle of 10`,   definition: `10 SINGLES grouped into 1 ROD. The BUNDLE OF 10 is what gets carried up.`,
              audioPrompt: `A bundle of ten, {name}, is ten singles grouped into one rod. The bundle of ten is what gets carried up. Whenever a column has ten or more, you bundle ten of them into one bigger piece. The rest stays. The bundled piece moves up. That's the rule that powers regrouping.` },
            { word: `write the rest`, definition: `Put what's LEFT after bundling. WRITE THE REST in the current column.`,
              audioPrompt: `Write the rest, {name}, means put what's left after bundling in the current column. If 13 in the ones column means you bundle ten and have three left, write three in the ones spot. The "rest" goes in its place. The bundled ten travels up. That's how regrouping works — split into two pieces, each goes where it belongs.` },
          ],
        },

        {
          id: `l08-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Writing the CARRY on Paper`,
          paragraphs: [
            `On the mat, regrouping is physical — move the rod. On paper, we use a special trick.`,
            `Solve 28 + 15 vertical style. Ones column: 8 + 5 = 13. We write the 3 below the line in the ones column. The 1 (the bundled ten) gets written as a SMALL "1" ABOVE the tens column. That small 1 is the CARRY. It reminds us to add it when we get to the tens column. Then we add the tens: 2 + 1 + 1 (the carry!) = 4. Write 4 below the line in the tens column. Final answer: 43. Done! That little "1" above the tens column is how we keep track of carries on paper. Get used to writing it. It's how every adult math person tracks regrouping.`,
          ],
          image: `/explorer-assets/math/l08-s3-written-carry.webp`,
          imageCaption: `Written carry: small "1" above the tens column. Reminds you to add it when you reach tens.`,
          vocab: [
            { word: `little 1`,       definition: `A small 1 written ABOVE the next column. The LITTLE 1 is your CARRY notation.`,
              audioPrompt: `A little one, {name}, is a small one written above the next column. The little one is your carry notation. It's how you remember on paper that you carried a ten up. When you get to the tens column, you add this little one along with the tens digits. Without writing it, you might forget. With it, you stay accurate.` },
            { word: `track`,          definition: `KEEP NOTES of what's happening. We TRACK carries with the little 1 above.`,
              audioPrompt: `To track, {name}, is to keep notes of what's happening. We track carries with the little one above. In complex addition with multiple carries, tracking matters. Without notes, you'd lose track. With them, every step is clear. Tracking is a smart habit that prevents mistakes.` },
            { word: `add the carry`,  definition: `INCLUDE the carry in the NEXT column. ADD THE CARRY together with both digits.`,
              audioPrompt: `Add the carry, {name}, means include the carry in the next column. Add the carry together with both digits. So in the tens column, you'd add the carry plus the first number's tens digit plus the second number's tens digit. Three numbers, not two. Don't forget the carry. It's easy to skip if you rush.` },
          ],
        },

        {
          id: `l08-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `When Multiple Columns CARRY`,
          paragraphs: [
            `Sometimes more than ONE column overflows. That's CHAIN REGROUPING — and it works the same way.`,
            `Try 158 + 263. Ones column: 8 + 3 = 11. Write 1 below. Carry 1 to tens. Tens column: 5 + 6 + 1 (carry) = 12. Uh oh, the tens column overflows too! Write 2 below in tens. Carry 1 to hundreds. Hundreds column: 1 + 2 + 1 (carry) = 4. Write 4 below in hundreds. Final answer: 421. TWO carries happened — and the method handled them both. Same rule, applied twice. When you see multi-digit addition with carries in MULTIPLE columns, don't panic. Just go right to left, handle each overflow the same way, and the answer comes out clean.`,
          ],
          image: `/explorer-assets/math/l08-s4-double-carry.webp`,
          imageCaption: `Chain regrouping: 158 + 263. Carry from ones (1) AND from tens (1). Both columns overflow. Same fix.`,
          vocab: [
            { word: `chain`,          definition: `Multiple things HAPPENING in sequence. CHAIN regrouping = carries in multiple columns.`,
              audioPrompt: `A chain, {name}, is multiple things happening in sequence. Chain regrouping is carries in multiple columns. Ones overflow, carry to tens. Tens overflow, carry to hundreds. Hundreds could even overflow to thousands. The carries chain through the columns. Same rule applied each time. The method handles any chain.` },
            { word: `multiple`,       definition: `MANY. MULTIPLE carries can happen in one addition problem. Same rule each time.`,
              audioPrompt: `Multiple, {name}, means many. Multiple carries can happen in one addition problem. Same rule each time. If three columns all overflow, you carry three times. The method doesn't change. Practice makes the chain feel natural. Soon, you won't even notice when carrying happens — your hands just do it.` },
            { word: `clean`,          definition: `Correct and TIDY. The final answer comes out CLEAN when you regroup correctly.`,
              audioPrompt: `Clean, {name}, means correct and tidy. The final answer comes out clean when you regroup correctly. Every carry handled. Every column lined up. No leftover numbers floating around. Clean math is the goal. Mistakes happen when you skip carries or lose track. With the method, you stay clean.` },
          ],
        },

        {
          id: `l08-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Regrouping = BUNDLING`,
          paragraphs: [
            `Here's the BIG truth, {name}. Regrouping is just BUNDLING. The thing you've already learned. In a different form.`,
            `Remember bundling? 10 ones bundle into 1 ten. 10 tens bundle into 1 hundred. Now look at regrouping. When a column has 10+ in it, you BUNDLE 10 of them — and move the bundle up. SAME RULE. The mat shows it physically. Paper shows it with the little "1" above. Different forms, identical concept. Bundling is the LAW of place value. Regrouping is bundling applied during addition. Once you see they're the same, regrouping stops feeling like a weird trick. It's just place value at work. That's why your foundation matters so much. You already learned bundling. Now you're using it.`,
          ],
          image: `/explorer-assets/math/l08-s5-bundling-connection.webp`,
          imageCaption: `Regrouping = bundling. Same rule, different form. Mat shows it physical, paper uses the little 1.`,
          vocab: [
            { word: `same rule`,      definition: `The IDENTICAL concept. Regrouping uses the SAME RULE as bundling — just on paper.`,
              audioPrompt: `Same rule, {name}, means the identical concept. Regrouping uses the same rule as bundling — just on paper. Bundling on the mat: ten singles become one rod. Regrouping on paper: ten ones become one ten carried up. Identical concept, different forms. Once you see this, the mystery disappears.` },
            { word: `identical`,      definition: `Exactly the SAME. Bundling and regrouping are IDENTICAL ideas in different forms.`,
              audioPrompt: `Identical, {name}, means exactly the same. Bundling and regrouping are identical ideas in different forms. One is physical with blocks. The other is symbolic on paper. The underlying math is the same. When you understand both, you understand HOW our number system handles overflow.` },
            { word: `at work`,        definition: `In ACTION. Place value is AT WORK every time you regroup.`,
              audioPrompt: `At work, {name}, means in action. Place value is at work every time you regroup. You're not doing magic. You're using the basic rule of base ten — ten of one place equals one of the next. That rule is always there, doing its job. Regrouping just makes you aware of it during addition.` },
          ],
        },

        {
          id: `l08-mag-6`,
          type: `magazine`,
          section: 6,
          headline: `You've UNLOCKED Addition`,
          paragraphs: [
            `{name} — this is HUGE. You now have the FULL toolkit for multi-digit addition.`,
            `You can: line up the digits in vertical format. Add right to left. Handle carries when columns overflow. Track them with the little "1" notation. Chain multiple carries when needed. That's EVERY skill needed to add any whole numbers — 2 digits, 5 digits, even 50 digits. The method scales infinitely. Real math people (engineers, scientists, accountants) use this exact method all the time. You've just unlocked one of the most important tools in math. The next few lessons will give you more PRACTICE — to make this fast and confident. But the BIG IDEAS are now yours. Regrouping was the missing piece. You've got it.`,
          ],
          image: `/explorer-assets/math/l08-s6-unlocked.webp`,
          imageCaption: `Unlocked! Full addition toolkit complete. Any whole numbers — 2 digit, 5 digit, 50 digit — same method.`,
          vocab: [
            { word: `unlock`,         definition: `Get ACCESS to a new skill. You just UNLOCKED multi-digit addition forever.`,
              audioPrompt: `To unlock, {name}, is to get access to a new skill. You just unlocked multi-digit addition forever. Before regrouping, big addition problems could trip you up. After regrouping, no addition problem is impossible — just maybe long. That's the difference unlocking makes. New skill, new abilities.` },
            { word: `toolkit`,        definition: `A collection of SKILLS. Your math TOOLKIT now includes regrouping.`,
              audioPrompt: `A toolkit, {name}, is a collection of skills. Your math toolkit now includes regrouping. Plus place value, bundling, expanded form, vertical format, column addition. Each skill is a tool. Together, they let you handle any addition problem. You've built a strong toolkit in just eight lessons.` },
            { word: `scales`,         definition: `WORKS for any size. The regrouping method SCALES — works on any size numbers.`,
              audioPrompt: `Scales, {name}, means works for any size. The regrouping method scales — works on any size numbers. Two-digit numbers. Five-digit numbers. Fifty-digit numbers. Same method. Same rules. Just more columns. That's the power of place value. It scales without becoming more complicated.` },
          ],
        },

        {
          id: `l08-game`,
          type: `interactive`,
          format: `drag-match`,
          guideText: `Let's see what you remember, {name}.`,
          buckets: [
            { id: `fact`, label: `✅ Yes, that's true!`, color: `#34D399` },
            { id: `myth`, label: `❌ No way!`,         color: `#F87171` },
          ],
          items: [
            { id: `l08-g1`, image: `l08-game-1.webp`, label: `When a column adds to 10 or MORE, you CARRY the bundled 10 up to the next column.`,
              matchPhrase: `Yes! That's regrouping. When ones overflow (10+), bundle 10 and carry to tens. When tens overflow, carry to hundreds. Always.`,
              correctMatch: `fact` },
            { id: `l08-g2`, image: `l08-game-2.webp`, label: `REGROUPING is the SAME idea as BUNDLING — just done on paper instead of with blocks.`,
              matchPhrase: `True! Identical concept. Bundling = blocks on a mat. Regrouping = the little "1" on paper. Same rule, different form. Place value at work.`,
              correctMatch: `fact` },
            { id: `l08-g3`, image: `l08-game-3.webp`, label: `You should NEVER carry — just write all the digits even if a column adds to 15 or 20.`,
              matchPhrase: `Not at all! You CAN'T fit two-digit numbers in one column. Regrouping is required when columns overflow. It's how multi-digit math works.`,
              correctMatch: `myth` },
            { id: `l08-g4`, image: `l08-game-4.webp`, label: `Regrouping is MYSTERIOUS magic — you just memorize the trick without understanding it.`,
              matchPhrase: `Definitely not! Regrouping is just bundling on paper. Same rule as place value — 10 of one place = 1 of the next. Totally logical.`,
              correctMatch: `myth` },
          ],
        },

        {
          id: `l08-quiz`,
          type: `quiz`,
          guideText: `Let's see what you remember, {name}.`,
          questions: [
            { id: `l08-q1`, format: `multiple-choice`,
              question: `What is REGROUPING (also called CARRYING)?`,
              options: [`Magic`, `When a column adds to 10+, bundle the 10 and CARRY it to the next column`, `Skipping math`, `Writing nicer`],
              correctIndex: 1,
              explanation: `Regrouping! When a column adds to 10 or more, you bundle 10 of them and carry that bundle to the next bigger column. It's bundling in written form.` },
            { id: `l08-q2`, format: `multiple-choice`,
              question: `What is 28 + 15?`,
              options: [`33`, `43`, `53`, `30`],
              correctIndex: 1,
              explanation: `43! Ones: 8 + 5 = 13. Write 3, carry 1. Tens: 2 + 1 + 1 (carry) = 4. Write 4. Answer: 43.` },
            { id: `l08-q3`, format: `multiple-choice`,
              question: `Where do you WRITE the "carry" on paper?`,
              options: [`Below the line`, `As a small "1" ABOVE the next column to the left`, `In the margin`, `Anywhere`],
              correctIndex: 1,
              explanation: `As a small "1" above the next column. That little "1" is your carry. When you reach that column, add the little 1 along with the two digits.` },
            { id: `l08-q4`, format: `true-false`,
              question: `REGROUPING is the SAME idea as BUNDLING — both move 10 of one place into 1 of the next bigger place.`,
              correctAnswer: true,
              explanation: `True! Identical concept. 10 ones bundle into 1 ten (mat) = carry the 1 to tens (paper). Same rule. Same idea. Different forms.` },
            { id: `l08-q5`, format: `fill-blank`,
              question: `If the ones column adds to 13, write the 3 below and ___ the 1 to the tens column.`,
              options: [`carry`, `throw away`, `forget`, `add later`],
              correctIndex: 0,
              explanation: `Carry the 1! That's regrouping. The 3 stays in ones. The 1 (which is really 10) moves up to the tens column to be added with the tens digits.` },
            { id: `l08-q6`, format: `multiple-choice`,
              question: `What's 158 + 263?`,
              options: [`411`, `421`, `321`, `521`],
              correctIndex: 1,
              explanation: `421! Ones: 8+3=11, write 1, carry 1. Tens: 5+6+1=12, write 2, carry 1. Hundreds: 1+2+1=4. Answer: 421. Two carries — handled by the same method.` },
          ],
        },

        {
          id: `l08-realworld`,
          type: `real-world`,
          guideText: `Here's something cool, {name}. The English word "CARRY" for this math move was first used hundreds of years ago — back when merchants did their math by writing on slates. They'd literally CARRY a tally mark from one column to the next. The word stuck. Today, computers do regrouping millions of times per second when they add. They use slightly different rules because they work in BASE 2 (binary — just 0s and 1s) — but the principle is the same. When a column overflows, carry to the next. The math that runs spaceships, video games, and the internet is built on this same rule you just learned. You're connected to math history AND to the most modern technology — all through one simple idea.`,
          familyAdventure: `Together, do a REGROUPING DRILL. Make a list of 10 addition problems where at least one column overflows. Examples: 47 + 25, 36 + 47, 58 + 39, 158 + 263, 245 + 178. Solve them one at a time. Say each step out loud — "Ones: 7 plus 5 is 12. Write the 2, carry the 1. Tens: 4 plus 2 plus 1 carry is 7. Final answer: 72." Speaking the steps locks them in. Race against time. The more you practice, the faster it gets.`,
          creativePrompt: `Make a "CARRY THE 1" COMIC. Draw three frames: 1) Two numbers about to be added — ones column has 8 + 5. 2) The 8 and 5 unite to become 13 — but the ones column is "too full!" 3) The little "1" (the bundled ten) HEROICALLY flies up to the tens column wearing a cape. The 3 stays behind, satisfied. Make it funny. Make it yours. Hang it where you do homework.`,
        },

        {
          id: `l08-celebration`,
          type: `celebration`,
          message: `HUGE win, {name}. You just unlocked REGROUPING — also called carrying. When a column adds to 10 or more, bundle the 10 and carry it up to the next column. Write a little "1" above to track it. It's the SAME idea as bundling on the mat — just on paper. Now you can add ANY numbers. Two-digit, three-digit, ten-digit — same method. You've built the full addition toolkit. Next few lessons we'll practice and master it. You're flying! — Remi 🦝`,
          badge: `regrouping-master`,
          badgeName: `Regrouping Master`,
          xpEarned: 50,
        },

      ],
    },
  ],
};

export default MATH_L08;

// ─── Dev asset check ───
if (import.meta.env?.DEV) {
  const mags  = MATH_L08.lessons[0].screens.filter(s => s.type === 'magazine').length;
  const game  = MATH_L08.lessons[0].screens.find(s => s.type === 'interactive')?.items?.length ?? 0;
  const quiz  = MATH_L08.lessons[0].screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  console.log(`[LESSON-MATH-L08] Loaded: "Regrouping (Carrying)" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
}
