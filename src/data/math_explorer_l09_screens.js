// ─────────────────────────────────────────────────────────────────────────────
// MATH  |  L09 — Three-Digit Addition
// Age band : explorers (6–8)   Guide: remi
// Standards: CCSS 2.NBT.B.7 (add within 1000 with regrouping)
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
          guideText: `Hey {name}, Remi here. You unlocked regrouping last lesson. Today we PUT IT TO WORK with THREE-DIGIT ADDITION. We'll see four DIFFERENT patterns based on which columns overflow. Once you can recognize them, you'll handle any three-digit addition without breaking a sweat. Let's drill.`,
          headline: `Three-Digit Addition`,
          subtitle: `Putting regrouping to work — and recognizing the four patterns`,
          visual: `/explorer-assets/math/l09-welcome.webp`,
        },

        {
          id: `l09-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Same Method, Bigger Numbers`,
          paragraphs: [
            `Three-digit addition uses the EXACT SAME method as two-digit. Nothing new to learn. You just have one more column.`,
            `Stack the numbers vertically. Line up by place. Right to left: ones first, tens second, hundreds last. Carry when columns overflow. Write a little "1" above the next column to track each carry. Add carries when you reach their column. That's the whole method. What CHANGES with three-digit numbers? Just the SIZE. Bigger numbers. More chances for overflow. Up to TWO carries possible (one in ones, one in tens). Same method handles all of it. With three-digit problems, you'll start seeing patterns. Today we'll learn the FOUR patterns of three-digit addition.`,
          ],
          image: `/explorer-assets/math/l09-s1-bigger-problems.webp`,
          imageCaption: `Three-digit addition: same method as two-digit, just more columns. Up to 2 carries possible.`,
          vocab: [
            { word: `same method`,    definition: `The IDENTICAL steps. Three-digit uses the SAME METHOD as two-digit — just one more column.`,
              audioPrompt: `Same method, {name}, is the identical steps. Three-digit uses the same method as two-digit — just one more column. Don't think of three-digit addition as something new. It's the same skill applied longer. If you can do two-digit, you can do three-digit. You just have one extra step.` },
            { word: `more chances`,   definition: `MORE CHANCES means more places where overflow could happen with bigger numbers.`,
              audioPrompt: `More chances, {name}, means more places where overflow could happen with bigger numbers. With two-digit addition, only the ones column can overflow. With three-digit, both ones AND tens can overflow. More columns equals more chances. But each carry is handled exactly the same way as before.` },
            { word: `pattern`,        definition: `A REPEATING shape or type. Three-digit additions come in 4 common PATTERNS.`,
              audioPrompt: `A pattern, {name}, is a repeating shape or type. Three-digit additions come in four common patterns. No carries. Ones carry only. Tens carry only. Both carry. Once you recognize the pattern, you know exactly how to attack the problem. Patterns make math faster.` },
          ],
        },

        {
          id: `l09-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `PATTERN A: No Carries`,
          paragraphs: [
            `The EASIEST pattern. Every column adds to 9 or less. NO carrying needed at all.`,
            `Example: 236 + 142. Ones: 6 + 2 = 8. (Under 10, no carry.) Tens: 3 + 4 = 7. (Under 10, no carry.) Hundreds: 2 + 1 = 3. Final answer: 378. Easy! When you see a three-digit problem and check the columns — if every column's digits add to 9 or less, you've got Pattern A. No carries to worry about. Just straight column addition. Pattern A problems are the FASTEST. Look for them — they're great practice and confidence-builders. Spotting "no carries needed" is the first pattern skill.`,
          ],
          image: `/explorer-assets/math/l09-s2-pattern-none.webp`,
          imageCaption: `Pattern A: NO carries. 236 + 142 = 378. Every column ≤ 9. Easiest pattern.`,
          vocab: [
            { word: `no carries`,     definition: `Every COLUMN adds to 9 or LESS. NO CARRIES is the simplest pattern of three-digit addition.`,
              audioPrompt: `No carries, {name}, is every column adds to nine or less. No carries is the simplest pattern of three-digit addition. Each column is its own little addition. Add the digits. Write the answer. No bundling needed. No little 1 above the next column. Just clean column work.` },
            { word: `easiest`,        definition: `Requires the LEAST effort. PATTERN A is the easiest — no extra steps.`,
              audioPrompt: `Easiest, {name}, means requires the least effort. Pattern A is the easiest — no extra steps. Just basic column addition. Each column independent. No carry-tracking. No multi-column thinking. Great for building speed and confidence early on.` },
            { word: `spot it`,        definition: `RECOGNIZE the pattern at a GLANCE. Train your eye to SPOT IT before you start.`,
              audioPrompt: `Spot it, {name}, means recognize the pattern at a glance. Train your eye to spot it before you start. Quickly scan each column. Are all the digit-pairs under 10 when added? If yes, you've got Pattern A. Now you can solve fast and confident. Spotting patterns is what separates fast adders from slow ones.` },
          ],
        },

        {
          id: `l09-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `PATTERN B: Carry from ONES`,
          paragraphs: [
            `Slightly trickier. The ONES column overflows (adds to 10+), but the TENS column does NOT.`,
            `Example: 158 + 124. Ones: 8 + 4 = 12. Write 2, CARRY 1. Tens: 5 + 2 + 1 (carry) = 8. (Under 10, no further carry.) Hundreds: 1 + 1 = 2. Final answer: 282. Only ONE carry happened — from ones to tens. After it lands, the tens column behaves normally. Pattern B is common. Watch for it: ones digits add to 10+ but tens digits + carry stay under 10. Once you nail this pattern, hundreds of math problems become easy. Just remember the "little 1" tracking.`,
          ],
          image: `/explorer-assets/math/l09-s3-pattern-ones.webp`,
          imageCaption: `Pattern B: carry from ONES only. 158 + 124 = 282. Ones carry lands, tens stays clean.`,
          vocab: [
            { word: `single carry`,   definition: `Just ONE carry in the whole problem. SINGLE CARRY pattern means one column overflowed.`,
              audioPrompt: `A single carry, {name}, is just one carry in the whole problem. Single carry pattern means one column overflowed. Pattern B has a single carry — from ones to tens. Pattern C has a single carry too — from tens to hundreds. Both are single-carry patterns. Just in different columns.` },
            { word: `lands`,          definition: `ARRIVES safely. The carry LANDS in the next column and gets added in.`,
              audioPrompt: `To land, {name}, is to arrive safely. The carry lands in the next column and gets added in. When the carry from ones reaches the tens column, you add it in along with both digits. The carry "lands" and joins the tens addition. After it lands, you continue normally.` },
            { word: `under 10`,       definition: `9 or LESS. When the next column stays UNDER 10 after the carry, no more carrying.`,
              audioPrompt: `Under ten, {name}, means nine or less. When the next column stays under ten after the carry, no more carrying. So in Pattern B, the tens column with its carry still adds to nine or less. No further carry needed. The chain stops there.` },
          ],
        },

        {
          id: `l09-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `PATTERN C: Carry from TENS Only`,
          paragraphs: [
            `Reverse pattern! ONES column is fine — no overflow. But the TENS column overflows.`,
            `Example: 171 + 254. Ones: 1 + 4 = 5. (Under 10, no carry.) Tens: 7 + 5 = 12. Write 2, CARRY 1. Hundreds: 1 + 2 + 1 (carry) = 4. Final answer: 425. Notice — the carry happened in TENS, not ones. The little "1" gets written above the HUNDREDS column this time. Some kids forget that you can carry from any column. Don't! Watch for Pattern C: ones digits are small (under 10 together), but tens digits add to 10+. Same method, just the carry happens in a different column.`,
          ],
          image: `/explorer-assets/math/l09-s4-pattern-tens.webp`,
          imageCaption: `Pattern C: carry from TENS only. 171 + 254 = 425. Ones fine, tens overflow to hundreds.`,
          vocab: [
            { word: `any column`,     definition: `WHERE the overflow happens. The CARRY can happen in ANY COLUMN — not just ones.`,
              audioPrompt: `Any column, {name}, is where the overflow happens. The carry can happen in any column — not just ones. Pattern C reminds us: tens can overflow too. Hundreds can overflow into thousands. Whatever column adds to ten or more triggers a carry. Don't assume carries only happen in ones.` },
            { word: `reverse`,        definition: `OPPOSITE pattern. Pattern C is the REVERSE of Pattern B — tens carries, not ones.`,
              audioPrompt: `Reverse, {name}, means opposite pattern. Pattern C is the reverse of Pattern B — tens carries, not ones. In Pattern B, ones overflow. In Pattern C, tens overflow. Same idea (one column carries), different column. Recognizing these patterns helps you predict what comes next.` },
            { word: `little 1 here`,  definition: `WHERE the carry goes. In Pattern C, the LITTLE 1 goes above HUNDREDS, not tens.`,
              audioPrompt: `Little one here, {name}, is where the carry goes. In Pattern C, the little one goes above hundreds, not tens. Always put the little one above the column that's receiving the carry. From ones to tens. From tens to hundreds. From hundreds to thousands. Different patterns put the little one in different places.` },
          ],
        },

        {
          id: `l09-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `PATTERN D: Both Carry`,
          paragraphs: [
            `The TRICKIEST pattern — BOTH ones AND tens overflow. Two carries to track.`,
            `Example: 267 + 158. Ones: 7 + 8 = 15. Write 5, CARRY 1. Tens: 6 + 5 + 1 (carry) = 12. Write 2, CARRY 1. Hundreds: 2 + 1 + 1 (carry) = 4. Final answer: 425. TWO little "1"s above the next two columns. Track each one. When you reach a column with a carry waiting, add it in. Pattern D problems take a moment longer because you have to manage both carries. But it's still the same method — just twice. Stay organized. Write neatly. Don't rush. Pattern D is where careful kids beat fast kids. Slow and right beats fast and wrong every time.`,
          ],
          image: `/explorer-assets/math/l09-s5-pattern-both.webp`,
          imageCaption: `Pattern D: BOTH carry. 267 + 158 = 425. Two carries to track. Slow, careful wins.`,
          vocab: [
            { word: `trickiest`,      definition: `HARDEST to handle. Pattern D is the TRICKIEST — two carries means two chances to mess up.`,
              audioPrompt: `Trickiest, {name}, means hardest to handle. Pattern D is the trickiest — two carries means two chances to mess up. Each carry needs to be tracked, then added in. If you forget one, the answer is wrong. Pattern D demands focus. But the method handles it cleanly if you stay organized.` },
            { word: `manage`,         definition: `KEEP TRACK of both. MANAGE both carries — note them, then add them in.`,
              audioPrompt: `To manage, {name}, is to keep track of both. Manage both carries — note them, then add them in. The little ones above each column help you manage. Each carry is a small task. Two of them is two tasks. Don't ignore either one. Both must be added when you reach their column.` },
            { word: `slow and right`, definition: `CAREFUL and ACCURATE. SLOW AND RIGHT beats fast and wrong in math.`,
              audioPrompt: `Slow and right, {name}, means careful and accurate. Slow and right beats fast and wrong in math. When patterns get complex, rushing causes mistakes. Slowing down to track each step gives correct answers. Speed comes with practice — but accuracy comes first. Get it right, then get fast.` },
          ],
        },

        {
          id: `l09-mag-6`,
          type: `magazine`,
          section: 6,
          headline: `Pattern Recognition = SPEED`,
          paragraphs: [
            `{name} — here's the secret to getting FAST at three-digit addition. RECOGNIZE the pattern FIRST.`,
            `Before you start adding, glance at the problem. Look at each column. Will it overflow? Quick eye-check tells you which pattern you're dealing with. Pattern A? Speed through it. Pattern B or C? One carry — watch for it. Pattern D? Slow down, manage both carries. This pre-check takes ONE second but saves time. It also stops surprises. You won't be halfway through a problem and suddenly forget you need to carry. The pros do this. Pattern recognition is what separates beginners from fast adders. With practice, you'll do it automatically — just like reading. Your eyes will see the problem and your brain will know the plan.`,
          ],
          image: `/explorer-assets/math/l09-s6-confident-adder.webp`,
          imageCaption: `Pattern recognition = speed. Scan first → know the plan → solve confidently.`,
          vocab: [
            { word: `recognize`,      definition: `IDENTIFY at a glance. RECOGNIZE patterns and you'll add way faster.`,
              audioPrompt: `To recognize, {name}, is to identify at a glance. Recognize patterns and you'll add way faster. After enough practice, you'll see a problem and instantly know — Pattern A or D? Carries needed or not? Recognition is faster than figuring out from scratch. It's the eye of an experienced math kid.` },
            { word: `pre-check`,      definition: `LOOK ahead before STARTING. The PRE-CHECK identifies the pattern in one second.`,
              audioPrompt: `A pre-check, {name}, is to look ahead before starting. The pre-check identifies the pattern in one second. Glance at each column. Will it overflow? That's it. The pre-check primes your brain for what's coming. Then you can solve confidently because you already know what to expect.` },
            { word: `automatic`,      definition: `Happens WITHOUT thinking. With practice, pattern recognition becomes AUTOMATIC.`,
              audioPrompt: `Automatic, {name}, means happens without thinking. With practice, pattern recognition becomes automatic. You won't even notice you're doing it. Your eyes will see a problem and your brain will already be planning the solution. That's how reading works for words. Math will work the same way once you've practiced enough.` },
          ],
        },

        {
          id: `l09-game`,
          type: `interactive`,
          format: `drag-match`,
          guideText: `Let's see what you remember, {name}.`,
          buckets: [
            { id: `fact`, label: `✅ Yes, that's true!`, color: `#34D399` },
            { id: `myth`, label: `❌ No way!`,         color: `#F87171` },
          ],
          items: [
            { id: `l09-g1`, image: `l09-game-1.webp`, label: `Three-digit addition has 4 main PATTERNS — no carries, ones carry, tens carry, or both carry.`,
              matchPhrase: `Yes! Four patterns. A: no carries. B: ones carry. C: tens carry. D: both carry. Spotting the pattern first makes you faster.`,
              correctMatch: `fact` },
            { id: `l09-g2`, image: `l09-game-2.webp`, label: `Three-digit addition ALWAYS goes RIGHT TO LEFT — start at ones, work toward hundreds.`,
              matchPhrase: `True! Right to left. Always. Same as two-digit. Bigger numbers don't change the direction. Ones first, then tens, then hundreds.`,
              correctMatch: `fact` },
            { id: `l09-g3`, image: `l09-game-3.webp`, label: `You can SKIP writing the little "1" carry — your brain will remember it perfectly every time.`,
              matchPhrase: `Not at all! Always write the little 1. Brains forget under pressure. Writing it tracks it. Skipping it causes wrong answers. Always note your carries.`,
              correctMatch: `myth` },
            { id: `l09-g4`, image: `l09-game-4.webp`, label: `Three-digit addition uses TOTALLY DIFFERENT rules than two-digit — brand new method.`,
              matchPhrase: `Definitely not! Same method, same rules, just one extra column. If you know two-digit addition, you know three-digit. Nothing new to learn.`,
              correctMatch: `myth` },
          ],
        },

        {
          id: `l09-quiz`,
          type: `quiz`,
          guideText: `Let's see what you remember, {name}.`,
          questions: [
            { id: `l09-q1`, format: `multiple-choice`,
              question: `What is 236 + 142? (Pattern A — no carries)`,
              options: [`368`, `378`, `388`, `478`],
              correctIndex: 1,
              explanation: `378! Ones: 6 + 2 = 8. Tens: 3 + 4 = 7. Hundreds: 2 + 1 = 3. No carries. Easy.` },
            { id: `l09-q2`, format: `multiple-choice`,
              question: `What is 158 + 124? (Pattern B — ones carry)`,
              options: [`272`, `282`, `292`, `382`],
              correctIndex: 1,
              explanation: `282! Ones: 8 + 4 = 12 → write 2, carry 1. Tens: 5 + 2 + 1 = 8. Hundreds: 1 + 1 = 2. Single carry from ones.` },
            { id: `l09-q3`, format: `multiple-choice`,
              question: `What is 171 + 254? (Pattern C — tens carry)`,
              options: [`325`, `425`, `525`, `415`],
              correctIndex: 1,
              explanation: `425! Ones: 1 + 4 = 5. Tens: 7 + 5 = 12 → write 2, carry 1. Hundreds: 1 + 2 + 1 = 4. Carry happens in tens, not ones.` },
            { id: `l09-q4`, format: `true-false`,
              question: `In Pattern D, BOTH ones AND tens overflow — there are TWO carries to track.`,
              correctAnswer: true,
              explanation: `True! Pattern D has two carries. One from ones to tens. Another from tens to hundreds. Two little "1"s to track. Slow and careful wins.` },
            { id: `l09-q5`, format: `fill-blank`,
              question: `Before starting any 3-digit addition, do a quick PRE-___ to see which pattern you're working with.`,
              options: [`check`, `nap`, `dance`, `forget`],
              correctIndex: 0,
              explanation: `Pre-check! Glance at each column. Will it overflow? Knowing the pattern in advance makes you faster and more accurate.` },
            { id: `l09-q6`, format: `multiple-choice`,
              question: `What's 267 + 158? (Pattern D — both carry)`,
              options: [`325`, `425`, `415`, `405`],
              correctIndex: 1,
              explanation: `425! Ones: 7 + 8 = 15 → write 5, carry 1. Tens: 6 + 5 + 1 = 12 → write 2, carry 1. Hundreds: 2 + 1 + 1 = 4. Two carries. Final: 425.` },
          ],
        },

        {
          id: `l09-realworld`,
          type: `real-world`,
          guideText: `Here's something neat, {name}. The "pattern recognition" you're learning for three-digit addition is actually a superpower used everywhere in life. Chess players recognize board patterns. Doctors recognize symptom patterns. Coders recognize bug patterns. Pilots recognize weather patterns. Once you train your eye to see patterns in math, that same skill — see → categorize → plan → execute — transfers to everything else. So when you scan an addition problem and instantly know "Pattern D, two carries, slow down" — that's your brain doing a pro move. The kind of move that grown-ups use in their work every day. You're not just learning addition. You're training a thinking superpower.`,
          familyAdventure: `Together, do PATTERN PRACTICE. Make a list of 8 three-digit addition problems — 2 of each pattern (A, B, C, D). Mix them up randomly. Take turns picking one. The picker says ONLY the pattern out loud (no answer yet). Like "Pattern B! Ones will carry." Then the solver works it out. Did the prediction match? Try to nail the pre-check on every one. The faster you can pattern-spot, the faster you'll be at all addition.`,
          creativePrompt: `Make a "PATTERN POSTER." Big paper. Four columns labeled A, B, C, D. In each column, draw an example problem (just digits, no answer). Add a SYMBOL for each pattern — a star for A (easy!), one arrow for B and C (single carry), two arrows for D (double carry). Decorate. Hang it where you do homework. You'll see the patterns visually every time.`,
        },

        {
          id: `l09-celebration`,
          type: `celebration`,
          message: `Great work, {name}! Three-digit addition is now in your toolkit. You've learned to spot the four patterns — no carries, ones carry only, tens carry only, both carry. The pre-check helps you know what's coming. Pattern recognition is what fast math kids use. Keep practicing — speed comes naturally with reps. Next lesson, we'll learn how to CHECK YOUR WORK so you can catch mistakes before they cost you. — Remi 🦝`,
          badge: `three-digit-explorer`,
          badgeName: `Three-Digit Explorer`,
          xpEarned: 50,
        },

      ],
    },
  ],
};

export default MATH_L09;

// ─── Dev asset check ───
if (import.meta.env?.DEV) {
  const mags  = MATH_L09.lessons[0].screens.filter(s => s.type === 'magazine').length;
  const game  = MATH_L09.lessons[0].screens.find(s => s.type === 'interactive')?.items?.length ?? 0;
  const quiz  = MATH_L09.lessons[0].screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  console.log(`[LESSON-MATH-L09] Loaded: "Three-Digit Addition" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
}
