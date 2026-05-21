// ─────────────────────────────────────────────────────────────────────────────
// MATH  |  L15 — Three-Digit Subtraction
// Age band : explorers (6–8)   Guide: remi
// Standards: CCSS 2.NBT.B.7
// REWRITE v2 (May 2026): Grade 1 accessible, NO BORROWS / ONE BORROW / TWO
// BORROWS 3-bucket identification game tests borrow-counting in problems
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
          guideText: `Hey {name}, Remi here! You unlocked borrowing last lesson! Today we APPLY IT to three-digit subtraction! We'll see four PATTERNS based on which columns need borrowing. Once you recognize them, three-digit subtraction won't surprise you!`,
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
            `Three-digit subtraction uses the EXACT same method as two-digit! Just one more column!`,
            `Stack the bigger number on top. Smaller below. Line up by place. MINUS sign on left. Draw a line. Subtract right to left — ones, tens, hundreds! Borrow when needed! The only thing that changes with three-digit numbers is the NUMBER OF COLUMNS where borrowing might be needed — up to TWO possible borrows!`,
          ],
          image: `/explorer-assets/math/l15-s1-bigger-subs.webp`,
          imageCaption: `Three-digit subtraction: same method, just more columns!`,
          vocab: [
            { word: `same method`,  definition: `The identical steps.`,
              audioPrompt: `Same method is the identical steps. Three-digit subtraction uses the same method as two-digit. Don't see it as new. It's the same skill applied longer. Just one extra column to handle!` },
            { word: `more columns`, definition: `Extra places to handle.`,
              audioPrompt: `More columns means extra places to handle. More columns means more potential borrowing opportunities. With three-digit numbers, both ones AND tens might need borrowing. Same method, more times!` },
            { word: `pattern`,      definition: `A repeating shape or type.`,
              audioPrompt: `A pattern is a repeating shape or type. Three-digit subtractions come in four common patterns. No borrows. One borrow. Two borrows. Once you spot the pattern, you know how to attack the problem!` },
          ],
        },

        {
          id: `l15-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `PATTERN A: No Borrows`,
          paragraphs: [
            `The EASIEST pattern! Every top digit is bigger than (or equal to) its bottom! NO borrowing needed!`,
            `Example: 478 - 235. Ones: 8 - 5 = 3 (top bigger, no borrow). Tens: 7 - 3 = 4 (top bigger, no borrow). Hundreds: 4 - 2 = 2 (top bigger). Final: 243! When you SCAN a three-digit subtraction and see top ≥ bottom in every column — that's Pattern A! Just straight column subtraction. FAST!`,
          ],
          image: `/explorer-assets/math/l15-s2-pattern-clean.webp`,
          imageCaption: `Pattern A: NO borrows. 478 - 235 = 243!`,
          vocab: [
            { word: `no borrows`,   definition: `Every top digit is bigger or equal.`,
              audioPrompt: `No borrows means every top digit is bigger or equal to the bottom. No borrows is the simplest subtraction pattern. Each column is its own clean subtraction. Quick. Easy!` },
            { word: `easiest`,      definition: `Requires least effort.`,
              audioPrompt: `Easiest means requires least effort. Pattern A is the easiest — no extra steps needed. Just basic column subtraction. Each column independent. Quick to solve!` },
            { word: `spot it fast`, definition: `Recognize the pattern quickly.`,
              audioPrompt: `Spot it fast means recognize the pattern quickly. Train your eye to spot it fast before you start. A 1-second scan of each column tells you which pattern!` },
          ],
        },

        {
          id: `l15-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `PATTERN B: Borrow from ONES`,
          paragraphs: [
            `Trickier! The ONES column has a too-small top! TENS and HUNDREDS are fine after borrowing!`,
            `Example: 452 - 137. Ones: 2 - 7? Can't! BORROW! Cross out 5 in tens, write 4 above. Boost 2 to 12! Ones: 12 - 7 = 5! Tens: 4 - 3 = 1 (4 still bigger than 3 — no further borrow!) Write 1! Hundreds: 4 - 1 = 3! Final: 315! Only ONE borrow happened!`,
          ],
          image: `/explorer-assets/math/l15-s3-pattern-ones.webp`,
          imageCaption: `Pattern B: borrow from ONES only. 452 - 137 = 315!`,
          vocab: [
            { word: `single borrow`, definition: `Just ONE borrow in the problem.`,
              audioPrompt: `A single borrow is just 1 borrow in the problem. Single borrow pattern means 1 column needed help. Pattern B has a single borrow — from tens to ones. Pattern C has 1 too — from hundreds to tens!` },
            { word: `lands`,         definition: `Arrives in the column that needed it.`,
              audioPrompt: `To land is to arrive in the column that needed it. The borrow lands in the smaller column. When you borrow from tens, the value lands in ones — boosting it by 10. Now you can subtract!` },
            { word: `still bigger`,  definition: `Top stays larger after borrowing.`,
              audioPrompt: `Still bigger means top stays larger after borrowing. The tens column is still bigger after giving 1 to ones. So no further borrowing needed. Subtraction continues cleanly!` },
          ],
        },

        {
          id: `l15-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `PATTERN C: Borrow from TENS Only`,
          paragraphs: [
            `Reverse pattern! ONES column is fine — no borrow there! But TENS has a too-small top and needs to borrow from hundreds!`,
            `Example: 583 - 192. Ones: 3 - 2 = 1 (top bigger, easy!) Tens: 8 - 9? Can't! BORROW from hundreds! Cross out 5, write 4. Boost 8 to 18! Tens: 18 - 9 = 9! Hundreds: 4 - 1 = 3! Final: 391! One borrow — from hundreds to tens! Pattern C is the mirror of Pattern B!`,
          ],
          image: `/explorer-assets/math/l15-s4-pattern-tens.webp`,
          imageCaption: `Pattern C: borrow from TENS only. 583 - 192 = 391!`,
          vocab: [
            { word: `any column`,   definition: `Borrowing can happen anywhere.`,
              audioPrompt: `Any column is borrowing can happen anywhere. The borrow can happen in any column — not just ones. Pattern C reminds us: tens can need help too. Whatever column has a too-small top triggers a borrow!` },
            { word: `reverse`,      definition: `Opposite pattern.`,
              audioPrompt: `Reverse means opposite pattern. Pattern C is the reverse of Pattern B — tens borrows, not ones. Same idea, different column. Recognizing both helps you handle any problem!` },
            { word: `borrows from`, definition: `Where the borrow comes from.`,
              audioPrompt: `Borrows from means where the borrow comes from. In Pattern C, tens borrows from hundreds. The hundreds digit gets reduced by 1. The tens digit gets boosted by 10. Always borrow from the left!` },
          ],
        },

        {
          id: `l15-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `PATTERN D: CHAIN Borrow`,
          paragraphs: [
            `The TRICKIEST pattern — BOTH ones and tens need to borrow! CHAIN BORROWING!`,
            `Example: 623 - 158. Ones: 3 - 8? Can't! Borrow from tens. Cross out 2, write 1. Boost 3 to 13. Ones: 13 - 8 = 5! Tens: 1 - 5? Can't! Borrow from hundreds! Cross out 6, write 5. Boost 1 to 11. Tens: 11 - 5 = 6! Hundreds: 5 - 1 = 4! Final: 465! TWO borrows! Stay organized!`,
          ],
          image: `/explorer-assets/math/l15-s5-pattern-chain.webp`,
          imageCaption: `Pattern D: CHAIN borrow. 623 - 158 = 465. Two borrows!`,
          vocab: [
            { word: `chain`,          definition: `Multiple borrows in sequence.`,
              audioPrompt: `A chain is multiple borrows in sequence. Chain borrowing happens when columns help columns. Tens helps ones. Then hundreds helps tens. Each borrow follows the same rule!` },
            { word: `trickiest`,      definition: `Hardest to handle.`,
              audioPrompt: `Trickiest means hardest to handle. Pattern D is the trickiest — two borrows to track. Each has cross-outs and boosts. If you forget one, the answer is wrong. Pattern D demands focus!` },
            { word: `slow and right`, definition: `Careful beats fast.`,
              audioPrompt: `Slow and right means careful beats fast. Slow and right beats fast and wrong in math. When patterns get complex, rushing causes mistakes. Get it right first, then get fast with practice!` },
          ],
        },

        {
          id: `l15-mag-6`,
          type: `magazine`,
          section: 6,
          headline: `PATTERN RECOGNITION = SPEED`,
          paragraphs: [
            `{name} — same trick as addition! RECOGNIZE the pattern FIRST! Speed follows!`,
            `Before starting, GLANCE at each column! Is the top bigger than the bottom? If yes for all: Pattern A! If only ones is smaller: Pattern B! If only tens is smaller: Pattern C! If both: Pattern D! This pre-check takes ONE second! Tells you exactly what to expect! Pattern recognition is how MATH PROS subtract fast!`,
          ],
          image: `/explorer-assets/math/l15-s6-pattern-master.webp`,
          imageCaption: `Pattern recognition = speed. Scan first → know the plan!`,
          vocab: [
            { word: `recognize`,   definition: `Identify at a glance.`,
              audioPrompt: `To recognize is to identify at a glance. Recognize patterns and you'll subtract way faster. Your eyes will see a problem and your brain will already know the pattern. Expert recognition!` },
            { word: `pre-check`,   definition: `Look ahead before starting.`,
              audioPrompt: `A pre-check is to look ahead before starting. The pre-check identifies the pattern in 1 second. Scan each column. Where is the top smaller? That's where you'll borrow!` },
            { word: `confidently`, definition: `Without doubt.`,
              audioPrompt: `Confidently means without doubt. With pattern recognition, you can subtract confidently. Doubt slows you down. Confidence — built on understanding — speeds you up!` },
          ],
        },

        {
          id: `l15-game`,
          type: `interactive`,
          format: `drag-match`,
          guideText: `Let's try it, {name}! Here are 4 three-digit subtraction problems. Drag each one — does it need NO BORROWS, ONE BORROW, or TWO BORROWS?`,
          buckets: [
            { id: `no_borrows`,  label: `0️⃣ NO BORROWS`,  color: `#34D399` },
            { id: `one_borrow`,  label: `1️⃣ ONE BORROW`,  color: `#FBBF24` },
            { id: `two_borrows`, label: `2️⃣ TWO BORROWS`, color: `#F87171` },
          ],
          items: [
            { id: `l15-g1`, image: `l15-game-1.webp`, label: `478 - 235`,
              matchPhrase: `Yes! NO BORROWS! 8>5, 7>3, 4>2. Every top digit is bigger. Pattern A!`,
              correctMatch: `no_borrows` },
            { id: `l15-g2`, image: `l15-game-2.webp`, label: `452 - 137`,
              matchPhrase: `Great! ONE BORROW! Ones: 2<7 (borrow!). Tens: 5>3 (fine). Pattern B!`,
              correctMatch: `one_borrow` },
            { id: `l15-g3`, image: `l15-game-3.webp`, label: `623 - 158`,
              matchPhrase: `Yes! TWO BORROWS! Ones: 3<8 (borrow!). Tens: 2<5 (borrow again!). Pattern D — chain!`,
              correctMatch: `two_borrows` },
            { id: `l15-g4`, image: `l15-game-4.webp`, label: `583 - 192`,
              matchPhrase: `Perfect! ONE BORROW! Ones: 3>2 (fine). Tens: 8<9 (borrow!). Pattern C!`,
              correctMatch: `one_borrow` },
          ],
        },

        {
          id: `l15-quiz`,
          type: `quiz`,
          guideText: `Let's see what you remember, {name}!`,
          questions: [
            { id: `l15-q1`, format: `multiple-choice`,
              question: `What is 478 - 235? (Pattern A — no borrows)`,
              options: [`233`, `243`, `253`, `263`],
              correctIndex: 1,
              explanation: `243! Ones: 8-5=3. Tens: 7-3=4. Hundreds: 4-2=2. No borrows. Easy!` },
            { id: `l15-q2`, format: `multiple-choice`,
              question: `What is 452 - 137? (Pattern B — ones borrow)`,
              options: [`315`, `325`, `305`, `335`],
              correctIndex: 0,
              explanation: `315! Ones: 2-7? Borrow. 12-7=5. Tens: 4-3=1. Hundreds: 4-1=3!` },
            { id: `l15-q3`, format: `multiple-choice`,
              question: `What is 583 - 192? (Pattern C — tens borrow)`,
              options: [`491`, `391`, `481`, `381`],
              correctIndex: 1,
              explanation: `391! Ones: 3-2=1. Tens: 8-9? Borrow. 18-9=9. Hundreds: 4-1=3!` },
            { id: `l15-q4`, format: `true-false`,
              question: `In CHAIN borrowing (Pattern D), BOTH ones AND tens need to borrow — two cross-outs and two boosts.`,
              correctAnswer: true,
              explanation: `True! Chain means both columns need help. Two borrows. Two cross-outs. Two boosts!` },
            { id: `l15-q5`, format: `fill-blank`,
              question: `Before starting any 3-digit subtraction, do a quick PRE-___ to see which pattern you have.`,
              options: [`check`, `nap`, `dance`, `dive`],
              correctIndex: 0,
              explanation: `Pre-check! Scan each column. Where is the top smaller? That's where you'll borrow!` },
            { id: `l15-q6`, format: `multiple-choice`,
              question: `What is 623 - 158? (Pattern D — chain borrow)`,
              options: [`485`, `465`, `455`, `475`],
              correctIndex: 1,
              explanation: `465! Ones: 3-8? Borrow. 13-8=5. Tens: 1-5? Borrow. 11-5=6. Hundreds: 5-1=4. Chain!` },
          ],
        },

        {
          id: `l15-realworld`,
          type: `real-world`,
          guideText: `Here's a real-life example, {name}! Imagine a basketball game. Your team has 73 points. The other team has 49. By HOW MUCH are you winning? Subtraction: 73 - 49! Ones: 3-9? BORROW! 13-9=4. Tens: 6-4=2. Answer: 24 points ahead! Adults do mental subtraction with borrowing all day long — they just don't show their work. Mental math is paper math sped up!`,
          familyAdventure: `Together, do a "WINNING BY HOW MUCH?" exercise! Pick any two scores — sports, video games, anything! Subtract the smaller from the bigger to find the difference! Try problems with each pattern. Race against time. Notice — pattern recognition makes you faster!`,
          creativePrompt: `Design a "PATTERN POSTER" for SUBTRACTION! Four columns labeled A, B, C, D. In each, draw an example problem. Star for A (clean!). One arrow for B and C (single borrow). Two arrows for D (chain). Write at least 3 sentences explaining your poster. For stretch, write 5 sentences telling why pattern recognition makes math feel easier!`,
        },

        {
          id: `l15-celebration`,
          type: `celebration`,
          message: `Great work, {name}! Three-digit subtraction is in your toolkit! You can spot the four patterns — no borrow, ones borrow, tens borrow, chain! Pre-check tells you the plan! Slow-and-right beats fast-and-wrong! Next lesson — CHECKING SUBTRACTION USING ADDITION! Remi is so proud! 🦝`,
          badge: `three-digit-subtractor`,
          badgeName: `Three-Digit Subtractor`,
          xpEarned: 50,
        },

      ],
    },
  ],
};

export default MATH_L15;

// ─── Dev asset check ─────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const mags  = MATH_L15.lessons[0].screens.filter(s => s.type === 'magazine').length;
  const game  = MATH_L15.lessons[0].screens.find(s => s.type === 'interactive')?.items?.length ?? 0;
  const quiz  = MATH_L15.lessons[0].screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  console.log(`[LESSON-MATH-L15] Loaded: "Three-Digit Subtraction" with ${mags} magazine sections, ${game} game items, ${quiz} quiz questions`);
}
