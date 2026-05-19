// ─────────────────────────────────────────────────────────────────────────────
// MATH  |  L15 — Three-Digit Subtraction
// Age band : explorers (6–8)   Guide: remi
// Standards: CCSS 2.NBT.B.7 (subtract within 1000 with regrouping)
// ─────────────────────────────────────────────────────────────────────────────

const MATH_L15 = {
  ageBand:   `explorers`,
  subjectId: `math`,
  guide:     `remi`,

  lessons: [
    {
      id:        `math-6-8-15`,
      title:     `Three-Digit Subtraction`,
      duration:  12,
      xpReward:  50,
      badge:     `three-digit-subtractor`,
      badgeName: `Three-Digit Subtractor`,

      screens: [

        {
          id: `l15-welcome`,
          type: `welcome`,
          guideText: `Hey {name}, Remi here. You unlocked borrowing last lesson. Today we APPLY IT to three-digit subtraction. We'll see four PATTERNS based on which columns need borrowing. Once you recognize them, three-digit subtraction won't surprise you. Let's drill the patterns.`,
          headline: `Three-Digit Subtraction`,
          subtitle: `Putting borrowing to work — recognizing the four patterns`,
          visual: `/explorer-assets/math/l15-welcome.webp`,
        },

        {
          id: `l15-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Same Method, More Columns`,
          paragraphs: [
            `Three-digit subtraction uses the EXACT same method as two-digit. Just one more column. Nothing new to learn.`,
            `Stack the bigger number on top. Smaller below. Line up by place value. MINUS sign on the left. Line drawn. Then subtract right to left — ones, tens, hundreds. Borrow when a top digit is too small. Show borrowing with cross-outs and boosted digits. The only thing that changes with three-digit numbers is the NUMBER OF COLUMNS where borrowing might be needed — up to TWO possible borrows (from tens, and from hundreds). The same method handles all of them. Today we'll see the four patterns and practice each.`,
          ],
          image: `/explorer-assets/math/l15-s1-bigger-subs.webp`,
          imageCaption: `Three-digit subtraction: same method as two-digit, just more columns. Up to 2 possible borrows.`,
          vocab: [
            { word: `same method`,    definition: `The IDENTICAL steps. Three-digit subtraction uses the SAME METHOD as two-digit.`,
              audioPrompt: `Same method, {name}, is the identical steps. Three-digit subtraction uses the same method as two-digit. Don't see it as something new. It's the same skill applied longer. If you can subtract two-digit numbers, you can subtract three-digit. You just have one extra column.` },
            { word: `more columns`,   definition: `EXTRA places to handle. MORE COLUMNS means more potential borrowing opportunities.`,
              audioPrompt: `More columns, {name}, means extra places to handle. More columns means more potential borrowing opportunities. With three-digit numbers, both ones AND tens columns might need borrowing. The method is the same — you just might use it more times.` },
            { word: `pattern`,        definition: `A REPEATING shape or type. Three-digit subtractions come in 4 common PATTERNS.`,
              audioPrompt: `A pattern, {name}, is a repeating shape or type. Three-digit subtractions come in four common patterns. No borrows. Ones borrow only. Tens borrow only. Chain borrow. Once you recognize the pattern, you know exactly how to attack the problem. Patterns make math faster.` },
          ],
        },

        {
          id: `l15-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `PATTERN A: No Borrows`,
          paragraphs: [
            `The EASIEST pattern. Every top digit is bigger than (or equal to) its bottom digit. NO borrowing needed at all.`,
            `Example: 478 - 235. Ones: 8 - 5 = 3. (Top bigger, no borrow.) Tens: 7 - 3 = 4. (Top bigger, no borrow.) Hundreds: 4 - 2 = 2. (Top bigger, no borrow.) Final answer: 243. When you SCAN a three-digit subtraction problem and see top digit ≥ bottom digit in every column — that's Pattern A. No borrowing. Just straight column subtraction. Pattern A problems are FAST. Recognize them and move through quickly. They're confidence-builders.`,
          ],
          image: `/explorer-assets/math/l15-s2-pattern-clean.webp`,
          imageCaption: `Pattern A: NO borrows. 478 - 235 = 243. Every top digit ≥ bottom. Easiest pattern.`,
          vocab: [
            { word: `no borrows`,     definition: `Every top digit ≥ bottom. NO BORROWS is the simplest subtraction pattern.`,
              audioPrompt: `No borrows, {name}, means every top digit is greater than or equal to the bottom. No borrows is the simplest subtraction pattern. Each column is its own clean subtraction. Quick. Easy. Great for building speed.` },
            { word: `easiest`,        definition: `Requires LEAST effort. PATTERN A is the easiest — no extra steps needed.`,
              audioPrompt: `Easiest, {name}, means requires the least effort. Pattern A is the easiest — no extra steps needed. Just basic column subtraction. Each column independent. No borrowing tracking. Quick to solve. Good for confidence.` },
            { word: `spot it fast`,   definition: `RECOGNIZE the pattern QUICKLY. Train your eye to SPOT IT FAST before you start.`,
              audioPrompt: `Spot it fast, {name}, means recognize the pattern quickly. Train your eye to spot it fast before you start. A one-second scan of each column tells you which pattern. Spotting it fast lets you plan your approach instantly.` },
          ],
        },

        {
          id: `l15-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `PATTERN B: Borrow from ONES`,
          paragraphs: [
            `Trickier. The ONES column has a too-small top digit. The TENS and HUNDREDS columns are fine after borrowing.`,
            `Example: 452 - 137. Ones: 2 - 7? Can't. BORROW from tens. Cross out the 5 in tens, write 4 above. Boost the 2 to 12. Ones: 12 - 7 = 5. Write 5. Tens: 4 (after borrowing) - 3 = 1. (4 is still bigger than 3 — no further borrow needed.) Write 1. Hundreds: 4 - 1 = 3. Write 3. Final answer: 315. Only ONE borrow happened — from tens to ones. After borrowing, the tens column is still bigger than its bottom partner. Pattern B is common. Watch for it.`,
          ],
          image: `/explorer-assets/math/l15-s3-pattern-ones.webp`,
          imageCaption: `Pattern B: borrow from ONES only. 452 - 137 = 315. One borrow, rest clean.`,
          vocab: [
            { word: `single borrow`,  definition: `Just ONE borrow in the problem. SINGLE BORROW pattern means one column needed help.`,
              audioPrompt: `A single borrow, {name}, is just one borrow in the problem. Single borrow pattern means one column needed help. Pattern B has a single borrow — from tens to ones. Pattern C has a single borrow too — from hundreds to tens. Both are single-borrow patterns. Just different columns.` },
            { word: `lands`,          definition: `ARRIVES in the column that needed it. The borrow LANDS in the smaller column.`,
              audioPrompt: `To land, {name}, is to arrive in the column that needed it. The borrow lands in the smaller column. When you borrow from tens, the borrowed value lands in ones — boosting it by 10. After it lands, you can subtract. The borrow fixed the problem.` },
            { word: `still bigger`,   definition: `Top stays LARGER after BORROWING. The TENS column is STILL BIGGER after giving 1 to ones.`,
              audioPrompt: `Still bigger, {name}, means top stays larger after borrowing. The tens column is still bigger after giving 1 to ones. So no further borrowing needed. The original 5 became 4, but 4 is still larger than 3. Subtraction continues cleanly.` },
          ],
        },

        {
          id: `l15-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `PATTERN C: Borrow from TENS Only`,
          paragraphs: [
            `Reverse pattern! The ONES column is fine — no borrow needed there. But the TENS column has a too-small top digit and needs to borrow from hundreds.`,
            `Example: 583 - 192. Ones: 3 - 2 = 1. (Top bigger, no borrow — easy!) Tens: 8 - 9? Can't. BORROW from hundreds. Cross out 5 in hundreds, write 4 above. Boost 8 to 18. Tens: 18 - 9 = 9. Write 9. Hundreds: 4 - 1 = 3. Write 3. Final answer: 391. One borrow happened — from hundreds to tens. The ones column was fine the whole time. Pattern C is the mirror of Pattern B. Same idea (one column borrows), different column.`,
          ],
          image: `/explorer-assets/math/l15-s4-pattern-tens.webp`,
          imageCaption: `Pattern C: borrow from TENS only. 583 - 192 = 391. Ones fine, tens borrows from hundreds.`,
          vocab: [
            { word: `any column`,     definition: `BORROWING can happen ANYWHERE. The BORROW can happen in ANY COLUMN — not just ones.`,
              audioPrompt: `Any column, {name}, is borrowing can happen anywhere. The borrow can happen in any column — not just ones. Pattern C reminds us: tens can need help too. Whatever column has a too-small top triggers a borrow from the column to its left.` },
            { word: `reverse`,        definition: `OPPOSITE pattern. Pattern C is the REVERSE of Pattern B — tens borrows, not ones.`,
              audioPrompt: `Reverse, {name}, means opposite pattern. Pattern C is the reverse of Pattern B — tens borrows, not ones. In Pattern B, ones needs help. In Pattern C, tens needs help. Same idea, different column. Recognizing both helps you handle any problem.` },
            { word: `borrows from`,   definition: `WHERE the borrow COMES FROM. In Pattern C, tens BORROWS FROM hundreds.`,
              audioPrompt: `Borrows from, {name}, means where the borrow comes from. In Pattern C, tens borrows from hundreds. The hundreds digit gets crossed out and reduced by 1. The tens digit gets boosted by 10. Always borrow from the column immediately to the left.` },
          ],
        },

        {
          id: `l15-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `PATTERN D: CHAIN Borrow`,
          paragraphs: [
            `The TRICKIEST pattern — BOTH ones and tens need to borrow. CHAIN BORROWING.`,
            `Example: 623 - 158. Ones: 3 - 8? Can't. Borrow from tens. Cross out 2 in tens, write 1 above. Boost 3 to 13. Ones: 13 - 8 = 5. Write 5. Tens: 1 - 5? Can't! Borrow from hundreds. Cross out 6 in hundreds, write 5 above. Boost 1 to 11. Tens: 11 - 5 = 6. Write 6. Hundreds: 5 - 1 = 4. Write 4. Final answer: 465. TWO borrows happened. Cross-outs and boosts in TWO places. Stay organized. Take your time. Pattern D rewards careful work — slow and right beats fast and wrong.`,
          ],
          image: `/explorer-assets/math/l15-s5-pattern-chain.webp`,
          imageCaption: `Pattern D: CHAIN borrow. 623 - 158 = 465. Borrow tens→ones, then hundreds→tens.`,
          vocab: [
            { word: `chain`,          definition: `Multiple borrows in SEQUENCE. CHAIN borrowing happens when columns help columns.`,
              audioPrompt: `A chain, {name}, is multiple borrows in sequence. Chain borrowing happens when columns help columns. Tens helps ones. Then hundreds helps tens. Each borrow follows the same rule. The chain can continue if needed for larger numbers.` },
            { word: `trickiest`,      definition: `HARDEST to handle. Pattern D is the TRICKIEST — two borrows to track.`,
              audioPrompt: `Trickiest, {name}, means hardest to handle. Pattern D is the trickiest — two borrows to track. Each borrow has cross-outs and boosts. If you forget one, the answer is wrong. Pattern D demands focus. But the method handles it cleanly if you stay organized.` },
            { word: `slow and right`, definition: `CAREFUL beats FAST. SLOW AND RIGHT beats fast and wrong in math.`,
              audioPrompt: `Slow and right, {name}, means careful beats fast. Slow and right beats fast and wrong in math. When patterns get complex, rushing causes mistakes. Slowing down to track each step gives correct answers. Speed comes with practice — but accuracy comes first.` },
          ],
        },

        {
          id: `l15-mag-6`,
          type: `magazine`,
          section: 6,
          headline: `PATTERN RECOGNITION = SPEED`,
          paragraphs: [
            `{name} — same trick as addition. RECOGNIZE the pattern FIRST. Speed follows.`,
            `Before starting, GLANCE at each column. For each one — is the top digit bigger than the bottom? If yes for all three columns: Pattern A. Easy. If only ones is smaller: Pattern B. One borrow. If only tens is smaller: Pattern C. One borrow. If both ones AND tens are smaller: Pattern D. Chain. This pre-check takes ONE second. Tells you exactly what to expect. No mid-problem surprises. The pattern dictates the plan. Pattern recognition is how MATH PROS subtract fast. With practice, you'll see a problem and your brain will already know the pattern — then you can move through it confidently.`,
          ],
          image: `/explorer-assets/math/l15-s6-pattern-master.webp`,
          imageCaption: `Pattern recognition = speed. Scan first → know which pattern → solve confidently.`,
          vocab: [
            { word: `recognize`,      definition: `IDENTIFY at a GLANCE. RECOGNIZE patterns and you'll subtract way faster.`,
              audioPrompt: `To recognize, {name}, is to identify at a glance. Recognize patterns and you'll subtract way faster. After enough practice, your eyes will see a problem and your brain will already know the pattern. That's expert-level recognition. Build it through reps.` },
            { word: `pre-check`,      definition: `LOOK ahead before STARTING. The PRE-CHECK identifies the pattern in one second.`,
              audioPrompt: `A pre-check, {name}, is to look ahead before starting. The pre-check identifies the pattern in one second. Scan each column. Where is the top smaller? That's where you'll borrow. The pre-check primes your brain for what's coming.` },
            { word: `confidently`,    definition: `WITHOUT doubt. With pattern recognition, you can subtract CONFIDENTLY.`,
              audioPrompt: `Confidently, {name}, means without doubt. With pattern recognition, you can subtract confidently. Doubt slows you down. Confidence — built on understanding — speeds you up. When you know the pattern, you know the plan. Then you execute without hesitation.` },
          ],
        },

        {
          id: `l15-game`,
          type: `interactive`,
          format: `drag-match`,
          guideText: `Let's see what you remember, {name}.`,
          buckets: [
            { id: `fact`, label: `✅ Yes, that's true!`, color: `#34D399` },
            { id: `myth`, label: `❌ No way!`,         color: `#F87171` },
          ],
          items: [
            { id: `l15-g1`, image: `l15-game-1.webp`, label: `Three-digit subtraction has 4 main PATTERNS — no borrow, ones borrow, tens borrow, or chain borrow.`,
              matchPhrase: `Yes! Four patterns. A: no borrows. B: ones borrows. C: tens borrows. D: chain borrow. Recognizing the pattern first speeds you up.`,
              correctMatch: `fact` },
            { id: `l15-g2`, image: `l15-game-2.webp`, label: `Doing a quick PRE-CHECK of each column before subtracting helps you know which pattern you're working with.`,
              matchPhrase: `True! Pre-check takes one second. Scan each column. Top bigger than bottom? Good. Top smaller? Will need to borrow. The pre-check tells you the plan.`,
              correctMatch: `fact` },
            { id: `l15-g3`, image: `l15-game-3.webp`, label: `Every subtraction problem is IDENTICAL — no different patterns to recognize.`,
              matchPhrase: `Not at all! Different patterns exist. No borrow vs ones borrow vs tens borrow vs chain. Each one feels different to solve. Recognizing them is a skill.`,
              correctMatch: `myth` },
            { id: `l15-g4`, image: `l15-game-4.webp`, label: `You can borrow from the SAME column you're working on — instead of from the next bigger column.`,
              matchPhrase: `Definitely not! You always borrow from the column to the LEFT (the next bigger place). Borrowing from the same column makes no sense — you'd be borrowing from yourself.`,
              correctMatch: `myth` },
          ],
        },

        {
          id: `l15-quiz`,
          type: `quiz`,
          guideText: `Let's see what you remember, {name}.`,
          questions: [
            { id: `l15-q1`, format: `multiple-choice`,
              question: `What is 478 - 235? (Pattern A — no borrows)`,
              options: [`233`, `243`, `253`, `263`],
              correctIndex: 1,
              explanation: `243! Ones: 8 - 5 = 3. Tens: 7 - 3 = 4. Hundreds: 4 - 2 = 2. No borrows. Easy Pattern A.` },
            { id: `l15-q2`, format: `multiple-choice`,
              question: `What is 452 - 137? (Pattern B — ones borrow)`,
              options: [`315`, `325`, `305`, `335`],
              correctIndex: 0,
              explanation: `315! Ones: 2 - 7? Borrow. 12 - 7 = 5. Tens: 4 - 3 = 1. Hundreds: 4 - 1 = 3. Single borrow from ones.` },
            { id: `l15-q3`, format: `multiple-choice`,
              question: `What is 583 - 192? (Pattern C — tens borrow)`,
              options: [`491`, `391`, `481`, `381`],
              correctIndex: 1,
              explanation: `391! Ones: 3 - 2 = 1. Tens: 8 - 9? Borrow from hundreds. 18 - 9 = 9. Hundreds: 4 - 1 = 3. Final: 391.` },
            { id: `l15-q4`, format: `true-false`,
              question: `In CHAIN borrowing (Pattern D), BOTH ones AND tens need to borrow — two cross-outs and two boosts.`,
              correctAnswer: true,
              explanation: `True! Chain borrowing means both columns need help. Ones borrows from tens. Tens (now smaller) borrows from hundreds. Two borrows. Two cross-outs. Two boosts.` },
            { id: `l15-q5`, format: `fill-blank`,
              question: `Before starting any 3-digit subtraction, do a quick PRE-___ to see which pattern you have.`,
              options: [`check`, `nap`, `dance`, `dive`],
              correctIndex: 0,
              explanation: `Pre-check! Scan each column. Where is the top smaller than the bottom? That's where you'll need to borrow. The pre-check tells you the pattern in one second.` },
            { id: `l15-q6`, format: `multiple-choice`,
              question: `What is 623 - 158? (Pattern D — chain borrow)`,
              options: [`485`, `465`, `455`, `475`],
              correctIndex: 1,
              explanation: `465! Ones: 3 - 8? Borrow. 13 - 8 = 5. Tens: 1 - 5? Borrow. 11 - 5 = 6. Hundreds: 5 - 1 = 4. Chain borrow. Final: 465.` },
          ],
        },

        {
          id: `l15-realworld`,
          type: `real-world`,
          guideText: `Here's a real-life example, {name}. Imagine a basketball game. Your team has 73 points. The other team has 49. By HOW MUCH are you winning? That's subtraction: 73 - 49. Ones: 3 - 9? BORROW. 13 - 9 = 4. Tens: 6 - 4 = 2. Answer: 24 points ahead. Three-digit subtraction comes up in real life too — bigger scores, larger money amounts, longer distances, more time. Adults do mental subtraction with borrowing all day long — they just don't show their work. They've practiced so many times that the cross-outs and boosts happen in their head. With enough reps, you'll get there too. Mental math is just paper math sped up.`,
          familyAdventure: `Together, do a "WINNING BY HOW MUCH?" exercise. Pick any two scores — could be made-up sports scores, video game scores, anything. Subtract the smaller from the bigger to find the difference. Try problems with each pattern: 87 - 23 (Pattern A), 84 - 36 (Pattern B), 91 - 25 (Pattern B), 521 - 167 (Pattern D), 836 - 274 (Pattern B). Do at least 6 problems. Race against time. Notice — pattern recognition makes you faster.`,
          creativePrompt: `Design a "PATTERN POSTER" for SUBTRACTION. Big paper. Four columns labeled A, B, C, D. In each column, draw an example problem (just digits, no answer). Use simple icons: a star for Pattern A (clean!), one arrow for Pattern B and C (single borrow, different columns), two arrows for Pattern D (chain borrow). Decorate. Hang where you do homework. You'll see the patterns visually whenever you need them.`,
        },

        {
          id: `l15-celebration`,
          type: `celebration`,
          message: `Great work, {name}! Three-digit subtraction is now in your toolkit. You've learned to spot the four patterns — no borrow, ones borrow, tens borrow, chain borrow. Pre-check tells you the plan. Pattern recognition makes you fast. Slow-and-right beats fast-and-wrong on the trickier ones. Keep practicing. Next lesson, we'll learn how to CHECK SUBTRACTION using addition. — Remi 🦝`,
          badge: `three-digit-subtractor`,
          badgeName: `Three-Digit Subtractor`,
          xpEarned: 50,
        },

      ],
    },
  ],
};

export default MATH_L15;

// ─── Dev asset check ───
if (import.meta.env?.DEV) {
  const mags  = MATH_L15.lessons[0].screens.filter(s => s.type === 'magazine').length;
  const game  = MATH_L15.lessons[0].screens.find(s => s.type === 'interactive')?.items?.length ?? 0;
  const quiz  = MATH_L15.lessons[0].screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  console.log(`[LESSON-MATH-L15] Loaded: "Three-Digit Subtraction" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
}
