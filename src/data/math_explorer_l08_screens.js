// ─────────────────────────────────────────────────────────────────────────────
// MATH  |  L08 — Regrouping (Carrying)
// Age band : explorers (6–8)   Guide: remi
// Standards: CCSS 2.NBT.B.7 / 4.NBT.B.4
// REWRITE v2 (May 2026): Grade 1 accessible, NEEDS A CARRY / NO CARRY
// 2-bucket binary identification game tests the regrouping trigger
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
          guideText: `Hey {name}, Remi here! Today is one of the BIGGEST math lessons! REGROUPING — also called CARRYING! It happens when a column adds to MORE than 9! Once you get this, you can add ANY numbers! Let's unlock the secret!`,
          headline: `Regrouping (Carrying)`,
          subtitle: `The move that lets you add any numbers`,
          visual: `/explorer-assets/math/l08-welcome.webp`,
        },

        {
          id: `l08-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `When Columns OVERFLOW`,
          paragraphs: [
            `Quick question! What's 8 + 5? It's 13. But here's the puzzle — 13 is a TWO-DIGIT number!`,
            `Try 28 + 15 in vertical format. Ones column: 8 + 5 = 13! Uh oh! The ones column can only hold ONE DIGIT (0-9)! Where does the 13 go? You CAN'T just write "13" in the ones column! This is the OVERFLOW PROBLEM! Lucky for us, there's a SMART FIX — REGROUPING!`,
          ],
          image: `/explorer-assets/math/l08-s1-too-many.webp`,
          imageCaption: `8 + 5 = 13. But "13" doesn't fit in one column!`,
          vocab: [
            { word: `overflow`,   definition: `When a column adds to more than 9.`,
              audioPrompt: `Overflow is when a column adds to more than 9. Each column can only show digits 0 through 9. If two numbers add to 10 or more, you've got overflow! You can't just leave the answer there!` },
            { word: `puzzle`,     definition: `A problem to solve.`,
              audioPrompt: `A puzzle is a problem to solve. Overflow is a puzzle — but regrouping is the solution! Math puzzles always have answers. The trick is finding the right tool!` },
            { word: `regrouping`, definition: `Moving extra value to the next bigger place.`,
              audioPrompt: `Regrouping is moving extra value to the next bigger place. When a column has too much, you take the extra and move it up. Ten ones become one ten. That's regrouping!` },
          ],
        },

        {
          id: `l08-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `BUNDLE and CARRY UP`,
          paragraphs: [
            `Here's the FIX! When a column adds to 10 or more, you BUNDLE the 10 — and CARRY the bundle up to the next column!`,
            `8 + 5 = 13 in ones! On the mat, you'd have 13 singles — too many! BUNDLE 10 singles into 1 ROD! Move the rod to TENS! That leaves 3 singles in ones! WRITE 3 in the ones spot! The 1 (rod) gets CARRIED UP to tens! That's regrouping!`,
          ],
          image: `/explorer-assets/math/l08-s2-bundle-carry.webp`,
          imageCaption: `13 = 1 ten + 3 ones. Bundle 10. Carry the ten up!`,
          vocab: [
            { word: `carry up`,       definition: `Move the bundled 10 to the next bigger place.`,
              audioPrompt: `To carry up is to move the bundled 10 to the next bigger place. When ones overflow, the carry goes to tens. When tens overflow, the carry goes to hundreds. Always moves left!` },
            { word: `bundle of 10`,   definition: `10 singles grouped into 1 rod.`,
              audioPrompt: `A bundle of 10 is 10 singles grouped into 1 rod. The bundle of 10 is what gets carried up. Whenever a column has 10 or more, bundle 10 of them and carry that bundle up!` },
            { word: `write the rest`, definition: `Put what's left after bundling.`,
              audioPrompt: `Write the rest means put what's left after bundling in the current column. If 13 means bundle 10 and have 3 left, write 3 in ones. The rest stays. The bundled 10 travels up!` },
          ],
        },

        {
          id: `l08-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Writing the CARRY on Paper`,
          paragraphs: [
            `On the mat, regrouping is physical — move the rod. On PAPER, we use a special trick!`,
            `Solve 28 + 15 vertical style. Ones: 8 + 5 = 13! Write the 3 below the line in ones. The 1 (the bundled ten) gets written as a SMALL "1" ABOVE the tens column! That little 1 is the CARRY! Then add tens: 2 + 1 + 1 (the carry!) = 4! Final answer: 43!`,
          ],
          image: `/explorer-assets/math/l08-s3-written-carry.webp`,
          imageCaption: `Written carry: small "1" above the tens column!`,
          vocab: [
            { word: `little 1`,      definition: `A small 1 written above the next column.`,
              audioPrompt: `A little 1 is a small 1 written above the next column. The little 1 is your carry notation! When you reach the tens column, add this little 1 along with the tens digits. Don't forget it!` },
            { word: `track`,         definition: `Keep notes of what's happening.`,
              audioPrompt: `To track is to keep notes of what's happening. We track carries with the little 1 above. Without writing it, you might forget. Tracking is a smart habit that prevents mistakes!` },
            { word: `add the carry`, definition: `Include the carry in the next column.`,
              audioPrompt: `Add the carry means include the carry in the next column. So in the tens column you add the carry plus both digits. Three numbers, not two. Don't forget the carry — easy to skip!` },
          ],
        },

        {
          id: `l08-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `When Multiple Columns CARRY`,
          paragraphs: [
            `Sometimes more than ONE column overflows! That's CHAIN REGROUPING — works the same way!`,
            `Try 158 + 263. Ones: 8 + 3 = 11! Write 1, carry 1. Tens: 5 + 6 + 1 (carry) = 12! Uh oh, tens overflows too! Write 2, carry 1. Hundreds: 1 + 2 + 1 (carry) = 4. Final: 421! TWO carries — same method handles both! Right to left, handle each overflow the same way!`,
          ],
          image: `/explorer-assets/math/l08-s4-double-carry.webp`,
          imageCaption: `Chain regrouping: 158 + 263 = 421. Two carries!`,
          vocab: [
            { word: `chain`,    definition: `Multiple things happening in sequence.`,
              audioPrompt: `A chain is multiple things happening in sequence. Chain regrouping is carries in multiple columns. Ones overflow → carry to tens. Tens overflow → carry to hundreds. Same rule each time!` },
            { word: `multiple`, definition: `Many.`,
              audioPrompt: `Multiple means many. Multiple carries can happen in one problem. Same rule each time. If three columns all overflow, you carry three times. The method doesn't change!` },
            { word: `clean`,    definition: `Correct and tidy.`,
              audioPrompt: `Clean means correct and tidy. The final answer comes out clean when you regroup correctly. Every carry handled. No leftover numbers floating around. Clean math is the goal!` },
          ],
        },

        {
          id: `l08-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Regrouping = BUNDLING!`,
          paragraphs: [
            `Here's the BIG truth, {name}! Regrouping is just BUNDLING — the thing you already learned!`,
            `Remember? 10 ones bundle into 1 ten! 10 tens bundle into 1 hundred! Now look at regrouping. When a column has 10+, you BUNDLE 10 — and move the bundle up! SAME RULE! The mat shows it physically. Paper shows it with the little "1". Different forms, IDENTICAL concept! That's why your foundation matters!`,
          ],
          image: `/explorer-assets/math/l08-s5-bundling-connection.webp`,
          imageCaption: `Regrouping = bundling. Same rule, different form!`,
          vocab: [
            { word: `same rule`, definition: `The identical concept.`,
              audioPrompt: `Same rule means the identical concept. Regrouping uses the same rule as bundling — just on paper. Bundling on the mat: 10 singles become 1 rod. Regrouping on paper: 10 ones become 1 ten carried up!` },
            { word: `identical`, definition: `Exactly the same.`,
              audioPrompt: `Identical means exactly the same. Bundling and regrouping are identical ideas in different forms. One is physical with blocks. The other is symbolic on paper. Same underlying math!` },
            { word: `at work`,   definition: `In action.`,
              audioPrompt: `At work means in action. Place value is at work every time you regroup. You're not doing magic. You're using the basic rule of base 10 — 10 of one place equals 1 of the next!` },
          ],
        },

        {
          id: `l08-mag-6`,
          type: `magazine`,
          section: 6,
          headline: `You've UNLOCKED Addition!`,
          paragraphs: [
            `{name} — this is HUGE! You now have the FULL toolkit for multi-digit addition!`,
            `You can: line up digits, add right to left, handle carries when columns overflow, track them with the little "1", chain multiple carries! That's EVERY skill needed to add ANY whole numbers — 2 digits, 5 digits, even 50 digits! The method scales infinitely! You've unlocked one of the most important tools in math!`,
          ],
          image: `/explorer-assets/math/l08-s6-unlocked.webp`,
          imageCaption: `Unlocked! Full addition toolkit complete!`,
          vocab: [
            { word: `unlock`,  definition: `Get access to a new skill.`,
              audioPrompt: `To unlock is to get access to a new skill. You just unlocked multi-digit addition forever. Before regrouping, big problems could trip you up. After regrouping, no addition is impossible!` },
            { word: `toolkit`, definition: `A collection of skills.`,
              audioPrompt: `A toolkit is a collection of skills. Your math toolkit now includes regrouping. Plus place value, bundling, expanded form, comparing, mats, and column addition. Strong toolkit!` },
            { word: `scales`,  definition: `Works for any size.`,
              audioPrompt: `Scales means works for any size. The regrouping method scales — works on any size numbers. Two-digit. Five-digit. Fifty-digit. Same method. Same rules. Just more columns!` },
          ],
        },

        {
          id: `l08-game`,
          type: `interactive`,
          format: `drag-match`,
          guideText: `Let's try it, {name}! Here are 4 column-additions. Drag each one — does it NEED A CARRY (sum is 10+), or is there NO CARRY needed (sum is 0-9)?`,
          buckets: [
            { id: `needs_carry`, label: `⬆️ NEEDS A CARRY (sum is 10+)`,    color: `#F87171` },
            { id: `no_carry`,    label: `✅ NO CARRY (sum is 0-9)`,         color: `#34D399` },
          ],
          items: [
            { id: `l08-g1`, image: `l08-game-1.webp`, label: `8 + 5 = 13`,
              matchPhrase: `Yes! 13 is 10+, so it NEEDS A CARRY! Write 3, carry 1 to the next column!`,
              correctMatch: `needs_carry` },
            { id: `l08-g2`, image: `l08-game-2.webp`, label: `4 + 3 = 7`,
              matchPhrase: `Great! 7 fits in one digit (0-9). NO CARRY needed! Just write 7!`,
              correctMatch: `no_carry` },
            { id: `l08-g3`, image: `l08-game-3.webp`, label: `9 + 1 = 10`,
              matchPhrase: `Yes! 10 is exactly at the overflow point — NEEDS A CARRY! Write 0, carry 1!`,
              correctMatch: `needs_carry` },
            { id: `l08-g4`, image: `l08-game-4.webp`, label: `6 + 2 = 8`,
              matchPhrase: `Perfect! 8 fits in one digit. NO CARRY needed! Just write 8!`,
              correctMatch: `no_carry` },
          ],
        },

        {
          id: `l08-quiz`,
          type: `quiz`,
          guideText: `Let's see what you remember, {name}!`,
          questions: [
            { id: `l08-q1`, format: `multiple-choice`,
              question: `What is REGROUPING (also called CARRYING)?`,
              options: [`Magic`, `When a column adds to 10+, bundle the 10 and CARRY it to the next column`, `Skipping math`, `Writing nicer`],
              correctIndex: 1,
              explanation: `Regrouping! When a column adds to 10 or more, bundle 10 and carry that bundle to the next bigger column!` },
            { id: `l08-q2`, format: `multiple-choice`,
              question: `What is 28 + 15?`,
              options: [`33`, `43`, `53`, `30`],
              correctIndex: 1,
              explanation: `43! Ones: 8 + 5 = 13. Write 3, carry 1. Tens: 2 + 1 + 1 (carry) = 4. Final: 43!` },
            { id: `l08-q3`, format: `multiple-choice`,
              question: `Where do you WRITE the "carry" on paper?`,
              options: [`Below the line`, `As a small "1" ABOVE the next column to the left`, `In the margin`, `Anywhere`],
              correctIndex: 1,
              explanation: `As a small "1" above the next column! That little "1" reminds you to add it along with the digits there!` },
            { id: `l08-q4`, format: `true-false`,
              question: `REGROUPING is the SAME idea as BUNDLING — both move 10 of one place into 1 of the next.`,
              correctAnswer: true,
              explanation: `True! Identical concept. 10 ones bundle into 1 ten (mat) = carry the 1 to tens (paper)!` },
            { id: `l08-q5`, format: `fill-blank`,
              question: `If the ones column adds to 13, write the 3 below and ___ the 1 to the tens column.`,
              options: [`carry`, `throw away`, `forget`, `add later`],
              correctIndex: 0,
              explanation: `Carry the 1! That's regrouping. The 3 stays in ones. The 1 moves up!` },
            { id: `l08-q6`, format: `multiple-choice`,
              question: `What's 158 + 263?`,
              options: [`411`, `421`, `321`, `521`],
              correctIndex: 1,
              explanation: `421! Two carries — handled by the same method. Ones: 11. Tens: 12. Hundreds: 4. Final: 421!` },
          ],
        },

        {
          id: `l08-realworld`,
          type: `real-world`,
          guideText: `Here's something cool, {name}! The word "CARRY" was first used hundreds of years ago — when merchants did math on slates. They'd literally CARRY a tally mark from one column to the next! The word stuck! Computers do regrouping MILLIONS of times per second when they add!`,
          familyAdventure: `Together, do a REGROUPING DRILL! Make 10 problems where at least one column overflows: 47 + 25, 36 + 47, 58 + 39! Solve them one at a time. Say each step out loud: "Ones: 7 + 5 = 12. Write 2, carry 1. Tens: 4 + 2 + 1 = 7!"`,
          creativePrompt: `Make a CARRY THE 1 COMIC! Draw 3 frames: 1) Two numbers about to add — ones column has 8 + 5. 2) The 8 and 5 become 13 — but ones is "too full!" 3) The little "1" HEROICALLY flies up to tens wearing a cape! Make it funny!`,
        },

        {
          id: `l08-celebration`,
          type: `celebration`,
          message: `HUGE win, {name}! You unlocked REGROUPING! When a column adds to 10+, bundle the 10 and carry it up! Write a little "1" above to track it! Same idea as bundling — just on paper! Now you can add ANY numbers! You've built the full addition toolkit! Remi is so proud! 🦝`,
          badge: `regrouping-master`,
          badgeName: `Regrouping Master`,
          xpEarned: 50,
        },

      ],
    },
  ],
};

export default MATH_L08;

// ─── Dev asset check ─────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const mags  = MATH_L08.lessons[0].screens.filter(s => s.type === 'magazine').length;
  const game  = MATH_L08.lessons[0].screens.find(s => s.type === 'interactive')?.items?.length ?? 0;
  const quiz  = MATH_L08.lessons[0].screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  console.log(`[LESSON-MATH-L08] Loaded: "Regrouping (Carrying)" with ${mags} magazine sections, ${game} game items, ${quiz} quiz questions`);
}
