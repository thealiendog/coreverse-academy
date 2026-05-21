// ─────────────────────────────────────────────────────────────────────────────
// MATH  |  L09 — Three-Digit Addition
// Age band : explorers (6–8)   Guide: remi
// Standards: CCSS 2.NBT.B.7
// REWRITE v2 (May 2026): Grade 1 accessible, NO CARRIES / ONE CARRY / TWO
// CARRIES 3-bucket identification game tests carry-counting in problems
// ─────────────────────────────────────────────────────────────────────────────

const MATH_L09 = {
  ageBand:   `explorers`,
  subjectId: `math`,
  guide:     `remi`,

  lessons: [
    {
      id:        `math-6-8-09`,
      title:     `Three-Digit Addition`,
      duration:  12,
      xpReward:  50,
      badge:     `three-digit-explorer`,
      badgeName: `Three-Digit Explorer`,

      screens: [

        {
          id: `l09-welcome`,
          type: `welcome`,
          guideText: `Hey {name}, Remi here! You unlocked regrouping last lesson! Today we PUT IT TO WORK with THREE-DIGIT ADDITION. We'll see four different PATTERNS based on which columns carry. Once you spot them, three-digit problems feel easy. Let's go!`,
          headline: `Three-Digit Addition`,
          subtitle: `Putting regrouping to work — and spotting the four patterns`,
          visual: `/explorer-assets/math/l09-welcome.webp`,
        },

        {
          id: `l09-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Same Method, Bigger Numbers`,
          paragraphs: [
            `Three-digit addition uses the EXACT SAME method as two-digit! Nothing new to learn! Just one more column!`,
            `Stack the numbers. Line up by place. Right to left: ones first, tens second, hundreds last! Carry when columns overflow! What CHANGES with bigger numbers? Just the SIZE! More chances for overflow. Up to TWO carries possible (one in ones, one in tens). Same method handles all of it!`,
          ],
          image: `/explorer-assets/math/l09-s1-bigger-problems.webp`,
          imageCaption: `Three-digit addition: same method as two-digit, just more columns!`,
          vocab: [
            { word: `same method`,  definition: `The identical steps.`,
              audioPrompt: `Same method means the identical steps. Three-digit uses the same method as two-digit — just one more column. Don't think of three-digit as new. If you can do two-digit, you can do three-digit!` },
            { word: `more chances`, definition: `More places overflow could happen.`,
              audioPrompt: `More chances means more places overflow could happen with bigger numbers. With two-digit, only ones can overflow. With three-digit, both ones AND tens can overflow. More columns equals more chances!` },
            { word: `pattern`,      definition: `A repeating shape or type.`,
              audioPrompt: `A pattern is a repeating shape or type. Three-digit additions come in four common patterns. No carries. One carry. Two carries. Once you spot the pattern, you know how to attack the problem!` },
          ],
        },

        {
          id: `l09-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `PATTERN A: No Carries`,
          paragraphs: [
            `The EASIEST pattern! Every column adds to 9 or LESS! NO carrying needed at all!`,
            `Example: 236 + 142. Ones: 6 + 2 = 8 (under 10, no carry). Tens: 3 + 4 = 7 (under 10, no carry). Hundreds: 2 + 1 = 3. Final: 378! When every column's digits add to 9 or less, you've got Pattern A! Just straight column addition. The fastest pattern. Great for building speed!`,
          ],
          image: `/explorer-assets/math/l09-s2-pattern-none.webp`,
          imageCaption: `Pattern A: NO carries. 236 + 142 = 378. Every column ≤ 9!`,
          vocab: [
            { word: `no carries`, definition: `Every column adds to 9 or less.`,
              audioPrompt: `No carries means every column adds to 9 or less. No carries is the simplest pattern of three-digit addition. Each column is its own little addition. No bundling needed. Just clean column work!` },
            { word: `easiest`,    definition: `Requires the least effort.`,
              audioPrompt: `Easiest means requires the least effort. Pattern A is the easiest — no extra steps. Just basic column addition. Each column independent. No carry-tracking. Great for building speed and confidence!` },
            { word: `spot it`,    definition: `Recognize the pattern at a glance.`,
              audioPrompt: `Spot it means recognize the pattern at a glance. Train your eye to spot it before you start. Scan each column. Are all the digit-pairs under 10? If yes, you've got Pattern A!` },
          ],
        },

        {
          id: `l09-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `PATTERN B: Carry from ONES`,
          paragraphs: [
            `Slightly trickier! The ONES column overflows (adds to 10+), but the TENS column does NOT!`,
            `Example: 158 + 124. Ones: 8 + 4 = 12! Write 2, carry 1! Tens: 5 + 2 + 1 (carry) = 8 (under 10, no further carry). Hundreds: 1 + 1 = 2. Final: 282! Only ONE carry happened — from ones to tens. After it lands, tens behaves normally. Pattern B is common!`,
          ],
          image: `/explorer-assets/math/l09-s3-pattern-ones.webp`,
          imageCaption: `Pattern B: carry from ONES only. 158 + 124 = 282!`,
          vocab: [
            { word: `single carry`, definition: `Just ONE carry in the problem.`,
              audioPrompt: `A single carry means just one carry in the whole problem. Pattern B has a single carry — from ones to tens. Pattern C has one too — from tens to hundreds. Both are single-carry patterns!` },
            { word: `lands`,        definition: `Arrives safely in the next column.`,
              audioPrompt: `To land means to arrive safely. The carry lands in the next column and gets added in. When the carry from ones reaches tens, you add it in along with both digits. The carry lands and joins!` },
            { word: `under 10`,     definition: `9 or less.`,
              audioPrompt: `Under 10 means 9 or less. When the next column stays under 10 after the carry, no more carrying. In Pattern B, tens plus the carry still adds to 9 or less. The chain stops there!` },
          ],
        },

        {
          id: `l09-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `PATTERN C: Carry from TENS Only`,
          paragraphs: [
            `Reverse pattern! ONES column is fine — no overflow! But TENS column overflows!`,
            `Example: 171 + 254. Ones: 1 + 4 = 5 (under 10, no carry). Tens: 7 + 5 = 12! Write 2, carry 1! Hundreds: 1 + 2 + 1 (carry) = 4. Final: 425! Notice — the carry happened in TENS, not ones! The little "1" gets written above HUNDREDS this time! Same method, different column!`,
          ],
          image: `/explorer-assets/math/l09-s4-pattern-tens.webp`,
          imageCaption: `Pattern C: carry from TENS only. 171 + 254 = 425!`,
          vocab: [
            { word: `any column`,    definition: `Where the overflow happens.`,
              audioPrompt: `Any column is where the overflow happens. The carry can happen in any column — not just ones! Pattern C reminds us: tens can overflow too. Hundreds can overflow into thousands. Whatever column adds to 10+ triggers a carry!` },
            { word: `reverse`,       definition: `Opposite pattern.`,
              audioPrompt: `Reverse means opposite pattern. Pattern C is the reverse of Pattern B — tens carries, not ones. In B, ones overflow. In C, tens overflow. Same idea, different column!` },
            { word: `little 1 here`, definition: `Where the carry goes.`,
              audioPrompt: `Little 1 here means where the carry goes. In Pattern C, the little 1 goes above hundreds, not tens. Always put the little 1 above the column receiving the carry. Different patterns put it in different places!` },
          ],
        },

        {
          id: `l09-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `PATTERN D: Both Carry`,
          paragraphs: [
            `The TRICKIEST pattern — BOTH ones AND tens overflow! Two carries to track!`,
            `Example: 267 + 158. Ones: 7 + 8 = 15! Write 5, carry 1! Tens: 6 + 5 + 1 (carry) = 12! Write 2, carry 1! Hundreds: 2 + 1 + 1 (carry) = 4. Final: 425! TWO little "1"s above the next columns! Stay organized. Write neatly. Slow and right beats fast and wrong!`,
          ],
          image: `/explorer-assets/math/l09-s5-pattern-both.webp`,
          imageCaption: `Pattern D: BOTH carry. 267 + 158 = 425. Two carries to track!`,
          vocab: [
            { word: `trickiest`,      definition: `Hardest to handle.`,
              audioPrompt: `Trickiest means hardest to handle. Pattern D is the trickiest — two carries means two chances to mess up. Each carry needs to be tracked and added in. If you forget one, the answer is wrong!` },
            { word: `manage`,         definition: `Keep track of both.`,
              audioPrompt: `To manage is to keep track of both. Manage both carries — note them, then add them in. The little 1s above each column help you manage. Don't ignore either one. Both must be added!` },
            { word: `slow and right`, definition: `Careful and accurate.`,
              audioPrompt: `Slow and right means careful and accurate. Slow and right beats fast and wrong. When patterns get complex, rushing causes mistakes. Get it right first, then get fast with practice!` },
          ],
        },

        {
          id: `l09-mag-6`,
          type: `magazine`,
          section: 6,
          headline: `Pattern Recognition = SPEED`,
          paragraphs: [
            `{name} — here's the secret to getting FAST at three-digit addition! RECOGNIZE the pattern FIRST!`,
            `Before you start adding, glance at the problem! Look at each column. Will it overflow? Pattern A? Speed through it! Pattern B or C? One carry — watch for it! Pattern D? Slow down, manage both! This pre-check takes ONE second but saves time. Pattern recognition is what fast math kids use!`,
          ],
          image: `/explorer-assets/math/l09-s6-confident-adder.webp`,
          imageCaption: `Pattern recognition = speed. Scan first → know the plan!`,
          vocab: [
            { word: `recognize`, definition: `Identify at a glance.`,
              audioPrompt: `To recognize is to identify at a glance. Recognize patterns and you'll add way faster. After practice, you'll see a problem and instantly know — carries or not? That's the eye of an experienced math kid!` },
            { word: `pre-check`, definition: `Look ahead before starting.`,
              audioPrompt: `A pre-check is to look ahead before starting. The pre-check identifies the pattern in one second. Glance at each column. Will it overflow? Pre-check primes your brain for what's coming!` },
            { word: `automatic`, definition: `Happens without thinking.`,
              audioPrompt: `Automatic means happens without thinking. With practice, pattern recognition becomes automatic. Your eyes will see a problem and your brain will already be planning the solution!` },
          ],
        },

        {
          id: `l09-game`,
          type: `interactive`,
          format: `drag-match`,
          guideText: `Let's try it, {name}! Here are 4 three-digit addition problems. Drag each one — does it need NO CARRIES, ONE CARRY, or TWO CARRIES?`,
          buckets: [
            { id: `no_carries`,  label: `0️⃣ NO CARRIES`,  color: `#34D399` },
            { id: `one_carry`,   label: `1️⃣ ONE CARRY`,   color: `#FBBF24` },
            { id: `two_carries`, label: `2️⃣ TWO CARRIES`, color: `#F87171` },
          ],
          items: [
            { id: `l09-g1`, image: `l09-game-1.webp`, label: `236 + 142`,
              matchPhrase: `Yes! NO CARRIES! 6+2=8, 3+4=7, 2+1=3. Every column stays under 10. Pattern A!`,
              correctMatch: `no_carries` },
            { id: `l09-g2`, image: `l09-game-2.webp`, label: `158 + 124`,
              matchPhrase: `Great! ONE CARRY! Ones: 8+4=12 (carry!). Tens: 5+2+1=8 (no carry). Pattern B!`,
              correctMatch: `one_carry` },
            { id: `l09-g3`, image: `l09-game-3.webp`, label: `267 + 158`,
              matchPhrase: `Yes! TWO CARRIES! Ones: 7+8=15 (carry!). Tens: 6+5+1=12 (carry again!). Pattern D — trickiest!`,
              correctMatch: `two_carries` },
            { id: `l09-g4`, image: `l09-game-4.webp`, label: `171 + 254`,
              matchPhrase: `Perfect! ONE CARRY! Ones: 1+4=5 (no carry). Tens: 7+5=12 (carry!). Pattern C!`,
              correctMatch: `one_carry` },
          ],
        },

        {
          id: `l09-quiz`,
          type: `quiz`,
          guideText: `Let's see what you remember, {name}!`,
          questions: [
            { id: `l09-q1`, format: `multiple-choice`,
              question: `What is 236 + 142? (Pattern A — no carries)`,
              options: [`368`, `378`, `388`, `478`],
              correctIndex: 1,
              explanation: `378! Ones: 6+2=8. Tens: 3+4=7. Hundreds: 2+1=3. No carries. Easy!` },
            { id: `l09-q2`, format: `multiple-choice`,
              question: `What is 158 + 124? (Pattern B — ones carry)`,
              options: [`272`, `282`, `292`, `382`],
              correctIndex: 1,
              explanation: `282! Ones: 8+4=12, write 2, carry 1. Tens: 5+2+1=8. Hundreds: 1+1=2. Single carry from ones!` },
            { id: `l09-q3`, format: `multiple-choice`,
              question: `What is 171 + 254? (Pattern C — tens carry)`,
              options: [`325`, `425`, `525`, `415`],
              correctIndex: 1,
              explanation: `425! Ones: 1+4=5. Tens: 7+5=12, write 2, carry 1. Hundreds: 1+2+1=4. Carry happens in tens!` },
            { id: `l09-q4`, format: `true-false`,
              question: `In Pattern D, BOTH ones AND tens overflow — there are TWO carries to track.`,
              correctAnswer: true,
              explanation: `True! Pattern D has two carries. One from ones to tens. Another from tens to hundreds!` },
            { id: `l09-q5`, format: `fill-blank`,
              question: `Before starting any 3-digit addition, do a quick PRE-___ to see which pattern you're working with.`,
              options: [`check`, `nap`, `dance`, `forget`],
              correctIndex: 0,
              explanation: `Pre-check! Glance at each column. Will it overflow? Knowing the pattern makes you faster!` },
            { id: `l09-q6`, format: `multiple-choice`,
              question: `What's 267 + 158? (Pattern D — both carry)`,
              options: [`325`, `425`, `415`, `405`],
              correctIndex: 1,
              explanation: `425! Two carries — handled by the same method!` },
          ],
        },

        {
          id: `l09-realworld`,
          type: `real-world`,
          guideText: `Here's something neat, {name}! Pattern recognition is a SUPERPOWER used everywhere! Chess players recognize board patterns. Doctors recognize symptom patterns. Coders recognize bug patterns. Once you train your eye to see math patterns, that same skill transfers to everything!`,
          familyAdventure: `Together, play PATTERN PRACTICE! Make 8 three-digit problems — 2 of each pattern. Mix them up. Take turns picking one. The picker says ONLY the pattern out loud first. Then solve. Did the prediction match?`,
          creativePrompt: `Make a "PATTERN POSTER." Draw 3 example problems on big paper — one with no carries, one with one carry, one with two carries. Write at least 3 sentences explaining your poster. For extra stretch, write 5 sentences telling why pattern recognition makes you a faster math kid! Hang it where you do homework!`,
        },

        {
          id: `l09-celebration`,
          type: `celebration`,
          message: `Great work, {name}! Three-digit addition is in your toolkit! You can spot the four patterns — no carries, ones carry, tens carry, both carry. Pattern recognition is what fast math kids use! Next lesson — CHECKING YOUR WORK! Remi is so proud! 🦝`,
          badge: `three-digit-explorer`,
          badgeName: `Three-Digit Explorer`,
          xpEarned: 50,
        },

      ],
    },
  ],
};

export default MATH_L09;

// ─── Dev asset check ─────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const mags  = MATH_L09.lessons[0].screens.filter(s => s.type === 'magazine').length;
  const game  = MATH_L09.lessons[0].screens.find(s => s.type === 'interactive')?.items?.length ?? 0;
  const quiz  = MATH_L09.lessons[0].screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  console.log(`[LESSON-MATH-L09] Loaded: "Three-Digit Addition" with ${mags} magazine sections, ${game} game items, ${quiz} quiz questions`);
}
