// ─────────────────────────────────────────────────────────────────────────────
// MATH  |  L10 — Checking Your Work
// Age band : explorers (6–8)   Guide: remi
// Standards: CCSS 2.NBT.B.7 / MP.6 (attend to precision)
// ─────────────────────────────────────────────────────────────────────────────

const MATH_L10 = {
  ageBand:   `explorers`,
  subjectId: `math`,
  guide:     `remi`,

  lessons: [
    {
      id:        `math-6-8-10`,
      title:     `Checking Your Work`,
      duration:  12,
      xpReward:  50,
      badge:     `mistake-catcher`,
      badgeName: `Mistake Catcher`,

      screens: [

        {
          id: `l10-welcome`,
          type: `welcome`,
          guideText: `Hey {name}, Remi here. You can ADD multi-digit numbers now. Big achievement. But here's a secret — the BEST math people don't just SOLVE problems. They CHECK their answers. Today we learn the habits that catch mistakes before they cost you. Not new math — just smart thinking. Let's go.`,
          headline: `Checking Your Work`,
          subtitle: `The thinking skill that turns "I got an answer" into "I got the RIGHT answer"`,
          visual: `/explorer-assets/math/l10-welcome.webp`,
        },

        {
          id: `l10-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Why CHECK Your Work?`,
          paragraphs: [
            `Imagine you spent 5 minutes solving a tough addition problem. You wrote the answer. You feel done. But what if you made a SMALL mistake somewhere? You'd never know.`,
            `That's why CHECKING your work matters. Even brilliant mathematicians make mistakes. Scientists check their formulas. Engineers check their designs. Pilots check their flight plans. Doctors check their prescriptions. Why? Because everyone makes mistakes — and the people who CATCH them are the ones who get things right. Checking your work is not about being SLOW. It's about being SMART. It separates kids who just guess from kids who really UNDERSTAND. Today you'll learn the routine. It only takes a few seconds — and it'll save you from countless errors.`,
          ],
          image: `/explorer-assets/math/l10-s1-trust-verify.webp`,
          imageCaption: `Even brilliant people make mistakes. Checking is what catches them. Smart, not slow.`,
          vocab: [
            { word: `check`,          definition: `To VERIFY your work is correct. CHECK your answer to catch any mistakes.`,
              audioPrompt: `To check, {name}, is to verify your work is correct. Check your answer to catch any mistakes. Checking takes seconds but saves you from being wrong. The best math kids check every problem. It's a habit that builds confidence and accuracy. Once you start checking, you'll wonder how you ever skipped it.` },
            { word: `mistake`,        definition: `An ACCIDENTAL error. Everyone makes MISTAKES — even adults. Checking finds them.`,
              audioPrompt: `A mistake, {name}, is an accidental error. Everyone makes mistakes — even adults. Checking finds them. Doctors, pilots, scientists, engineers — all check their work because mistakes happen to everyone. The point isn't to be perfect. The point is to find mistakes before they cause real problems.` },
            { word: `routine`,        definition: `A REGULAR habit. The CHECKING ROUTINE only takes a few seconds and prevents big errors.`,
              audioPrompt: `A routine, {name}, is a regular habit. The checking routine only takes a few seconds and prevents big errors. Once it becomes automatic, you'll check without even thinking. That's the goal — make checking a normal part of solving every problem.` },
          ],
        },

        {
          id: `l10-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Trick #1: ESTIMATE FIRST`,
          paragraphs: [
            `Here's your FIRST checking trick — ESTIMATE before you solve. Get a rough idea of how big the answer SHOULD be.`,
            `Take 287 + 423. Before solving, ESTIMATE. Round 287 to about 300. Round 423 to about 400. Quick guess: 300 + 400 = 700. So my answer should be CLOSE TO 700. Now SOLVE the problem (287 + 423 = 710). Compare to your estimate. 710 is close to 700? YES! That feels right. If you'd gotten an answer like 167 or 1,400, your estimate would tell you something's WRONG. The estimate is your SANITY CHECK. It catches huge mistakes (like missing a carry or messing up place value). Estimation is the math version of double-checking before you take a step.`,
          ],
          image: `/explorer-assets/math/l10-s2-estimate-first.webp`,
          imageCaption: `Estimate first: 287 + 423 → about 300 + 400 = 700. Then solve. Compare. Close? Right!`,
          vocab: [
            { word: `estimate`,       definition: `A QUICK GUESS at the answer. ESTIMATE before solving to know what to expect.`,
              audioPrompt: `An estimate, {name}, is a quick guess at the answer. Estimate before solving to know what to expect. Estimates aren't exact — they're close. Round numbers to nice ones, then add quickly. The estimate gives you a target. If your real answer is way off the estimate, you know to check.` },
            { word: `sanity check`,   definition: `A QUICK TEST that the answer makes SENSE. The estimate is your SANITY CHECK.`,
              audioPrompt: `A sanity check, {name}, is a quick test that the answer makes sense. The estimate is your sanity check. It catches huge errors fast. If you forgot a carry and your answer is way too small, the estimate shows it. If you messed up place value and got something crazy big, the estimate catches that too.` },
            { word: `close to`,       definition: `NEAR but not EXACT. Your real answer should be CLOSE TO your estimate.`,
              audioPrompt: `Close to, {name}, means near but not exact. Your real answer should be close to your estimate. If you estimated 700 and got 710 — close! Probably right. If you got 1,710 or 71 — way off, something's wrong. Close means within a small range. Exact answers won't always match estimates — but they should be in the same neighborhood.` },
          ],
        },

        {
          id: `l10-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `ROUNDING for Quick Estimates`,
          paragraphs: [
            `To make estimates EASY, use ROUNDING. Round each number to the NEAREST HUNDRED (or ten).`,
            `Round 287 → 300. Round 423 → 400. Round 158 → 200. Round 142 → 100. Round 51 → 50. The trick: look at the digit RIGHT NEXT to the place you're rounding to. If it's 5 or higher, round UP. If it's 4 or lower, round DOWN. So 287 rounds to 300 (the 8 is high). 423 rounds to 400 (the 2 is low). 158 rounds to 200 (the 5 is high enough). 142 rounds to 100 (the 4 is low). Round, then add the rounded numbers. Way easier than the real numbers. The point isn't a perfect answer — it's a quick rough idea. Even a 10-second estimate is enough to catch big mistakes.`,
          ],
          image: `/explorer-assets/math/l10-s3-rounding-trick.webp`,
          imageCaption: `Rounding: 287 → 300. 423 → 400. Look at the next digit. 5+ → up. 4 or less → down.`,
          vocab: [
            { word: `round`,          definition: `Change a number to a NEARBY easier one. ROUND for fast estimates.`,
              audioPrompt: `To round, {name}, is to change a number to a nearby easier one. Round for fast estimates. 287 becomes 300. 423 becomes 400. The rounded numbers are easier to add in your head. Rounding gives you speed in exchange for a little exactness. For estimating, that's perfect.` },
            { word: `nearest`,        definition: `CLOSEST. Round to the NEAREST hundred or ten — whichever is closer.`,
              audioPrompt: `Nearest, {name}, means closest. Round to the nearest hundred or ten — whichever is closer. 287 is closer to 300 than to 200, so it rounds to 300. 423 is closer to 400 than to 500, so it rounds to 400. Always round to whichever is closer. That keeps estimates accurate.` },
            { word: `rough idea`,     definition: `An APPROXIMATE answer. Estimates give you a ROUGH IDEA — not perfect, but close.`,
              audioPrompt: `A rough idea, {name}, is an approximate answer. Estimates give you a rough idea — not perfect, but close. The goal isn't to be exact. The goal is to know roughly what to expect. A rough idea is enough to catch mistakes. Don't worry about getting the estimate perfect.` },
          ],
        },

        {
          id: `l10-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Common MISTAKES to Watch For`,
          paragraphs: [
            `Here are the TOP THREE mistakes kids make in addition. Watch out for these.`,
            `MISTAKE 1: FORGETTING THE CARRY. Most common error. You add the column, write the answer — but forget to add the little "1" from a previous carry. Always check that you added every carry. MISTAKE 2: MISALIGNED DIGITS. When numbers are different lengths (like 25 + 142), it's easy to write them not lined up properly. Then you'd add wrong places together. Always check that ONES are UNDER ONES. MISTAKE 3: SIMPLE ADDITION SLIPS. 7 + 8 = 14? No — it's 15. Quick brain glitches happen. After solving, re-check each column's basic addition. These three account for like 90% of all addition mistakes. Knowing them helps you catch them.`,
          ],
          image: `/explorer-assets/math/l10-s4-common-mistakes.webp`,
          imageCaption: `Top 3 mistakes: 1) Forgot carry. 2) Misaligned digits. 3) Simple addition slip. Watch for these.`,
          vocab: [
            { word: `forgotten carry`, definition: `Skipping the LITTLE 1 in the NEXT column. FORGOTTEN CARRIES are the most common mistake.`,
              audioPrompt: `A forgotten carry, {name}, is skipping the little one in the next column. Forgotten carries are the most common mistake in addition. You write the little one above the next column to track it — but you have to actually ADD it when you reach that column. Forgetting it gives you a wrong answer. Always check.` },
            { word: `misaligned`,     definition: `NOT lined up properly. MISALIGNED digits cause wrong-place additions.`,
              audioPrompt: `Misaligned, {name}, means not lined up properly. Misaligned digits cause wrong-place additions. If you don't line up ones under ones, you might add a ten to a one. The result is wildly wrong. Always check alignment, especially when numbers have different lengths.` },
            { word: `slip`,           definition: `A SMALL accidental error. A simple addition SLIP like 7 + 8 = 14 instead of 15.`,
              audioPrompt: `A slip, {name}, is a small accidental error. A simple addition slip like seven plus eight equals fourteen instead of fifteen. Slips happen to everyone — the brain hiccups for a second. Doing one final check on each column's addition catches most slips before they ruin your final answer.` },
          ],
        },

        {
          id: `l10-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `REDO or Use a DIFFERENT METHOD`,
          paragraphs: [
            `For really important problems, you can do an EXTRA check — REDO the problem a SECOND way.`,
            `One way: just RE-ADD column by column. Slowly. From scratch. If you get the same answer twice, more confidence. Another way: SWAP THE NUMBERS. 245 + 178 should give the same answer as 178 + 245. Add it both ways. Same answer? You're probably right. Another way: BREAK INTO PIECES. 245 + 178 can be 245 + 100 + 78 (add 100 first, then 78 to make it easier). If you get the same answer two different ways, the chance you're wrong is TINY. This is what real engineers do for safety-critical numbers. Two methods, same answer = trustworthy.`,
          ],
          image: `/explorer-assets/math/l10-s5-redo-check.webp`,
          imageCaption: `For important problems: REDO using a different method. Same answer twice = trustworthy.`,
          vocab: [
            { word: `redo`,           definition: `Solve AGAIN from scratch. REDO the problem to double-check your first answer.`,
              audioPrompt: `To redo, {name}, is to solve again from scratch. Redo the problem to double-check your first answer. Slow and careful. If you get the same answer twice, much more confidence. If different, find the mistake. Redoing takes time but catches errors that estimation might miss.` },
            { word: `swap`,           definition: `SWITCH the ORDER. SWAP the numbers and add again — same answer expected.`,
              audioPrompt: `To swap, {name}, is to switch the order. Swap the numbers and add again — same answer expected. 245 plus 178 should equal 178 plus 245. Both ways same answer. If they differ, something went wrong. Swapping is a quick way to double-check addition.` },
            { word: `trustworthy`,    definition: `RELIABLE and CORRECT. Same answer two ways = TRUSTWORTHY result.`,
              audioPrompt: `Trustworthy, {name}, means reliable and correct. Same answer two ways equals trustworthy result. If two different methods give the same answer, the chance of error is very small. Real engineers and scientists use multiple methods for safety-critical math. You can do the same for important problems.` },
          ],
        },

        {
          id: `l10-mag-6`,
          type: `magazine`,
          section: 6,
          headline: `Checking Is a PRO Habit`,
          paragraphs: [
            `{name} — checking your work is what separates kids who STRUGGLE from kids who SUCCEED. It's a small habit with huge payoff.`,
            `The checking routine: BEFORE solving, ESTIMATE. DURING solving, watch alignment and carries. AFTER solving, COMPARE to your estimate. For important problems, REDO. This whole thing takes maybe 30 extra seconds — and it catches almost every mistake. Plus, it builds your MATH CONFIDENCE. When you check and find your answer is right, you KNOW it's right. No anxious uncertainty. When you check and catch a mistake, you fix it before it counts. Win-win. Real mathematicians, scientists, engineers — they all check. You're not just learning to be RIGHT. You're learning to be RELIABLE. That's a superpower for life.`,
          ],
          image: `/explorer-assets/math/l10-s6-pro-habit.webp`,
          imageCaption: `Pro habit: estimate → solve → compare → redo if important. 30 extra seconds. Huge payoff.`,
          vocab: [
            { word: `payoff`,         definition: `The BENEFIT or RESULT. The checking habit has a huge PAYOFF — accurate answers.`,
              audioPrompt: `A payoff, {name}, is the benefit or result. The checking habit has a huge payoff — accurate answers. Thirty seconds of checking saves you from being wrong. Wrong answers cost you grades, time, and confidence. Right answers build all three. The math is in your favor.` },
            { word: `confidence`,     definition: `BELIEF in your ability. Checking builds math CONFIDENCE — you know when you're right.`,
              audioPrompt: `Confidence, {name}, is belief in your ability. Checking builds math confidence — you know when you're right. Without checking, you guess. With checking, you know. Knowing feels good. The kid who checks every problem develops real confidence. The kid who skips it stays anxious.` },
            { word: `reliable`,       definition: `Can be COUNTED ON to be right. Checkers are RELIABLE. People trust their work.`,
              audioPrompt: `Reliable, {name}, means can be counted on to be right. Checkers are reliable. People trust their work. As you grow up, being reliable matters. Teachers, employers, friends — they trust people who check their work. Learning this habit now serves you for life.` },
          ],
        },

        {
          id: `l10-game`,
          type: `interactive`,
          format: `drag-match`,
          guideText: `Let's see what you remember, {name}.`,
          buckets: [
            { id: `fact`, label: `✅ Yes, that's true!`, color: `#34D399` },
            { id: `myth`, label: `❌ No way!`,         color: `#F87171` },
          ],
          items: [
            { id: `l10-g1`, image: `l10-game-1.webp`, label: `ESTIMATING before you solve gives you a target — and helps catch huge mistakes.`,
              matchPhrase: `Yes! Estimate first. Round numbers, add quickly, get a rough answer. Compare your real answer to it. Way off = something's wrong. Sanity check!`,
              correctMatch: `fact` },
            { id: `l10-g2`, image: `l10-game-2.webp`, label: `PROS — scientists, engineers, doctors — always CHECK their work because mistakes matter in real life.`,
              matchPhrase: `True! Pros check. Pilots check flight plans. Doctors check doses. Engineers check designs. Checking is how grown-ups stay reliable in important jobs.`,
              correctMatch: `fact` },
            { id: `l10-g3`, image: `l10-game-3.webp`, label: `Checking your work is a WASTE of time — the first answer you write is always magically right.`,
              matchPhrase: `Not at all! Everyone makes mistakes. The first answer might be wrong. Checking catches the errors. Skipping checks leaves you guessing.`,
              correctMatch: `myth` },
            { id: `l10-g4`, image: `l10-game-4.webp`, label: `Making mistakes means you're BAD at math — you should give up entirely on numbers.`,
              matchPhrase: `Definitely not! Mistakes are normal. Everyone makes them. The skill is CATCHING them. Math people aren't perfect — they're careful. Big difference.`,
              correctMatch: `myth` },
          ],
        },

        {
          id: `l10-quiz`,
          type: `quiz`,
          guideText: `Let's see what you remember, {name}.`,
          questions: [
            { id: `l10-q1`, format: `multiple-choice`,
              question: `What should you do BEFORE solving an addition problem?`,
              options: [`Skip ahead`, `ESTIMATE — round the numbers and get a rough answer for comparison later`, `Nap`, `Nothing`],
              correctIndex: 1,
              explanation: `Estimate first! Round each number to the nearest hundred or ten. Add quickly. That's your sanity check. If your real answer is way off, something's wrong.` },
            { id: `l10-q2`, format: `multiple-choice`,
              question: `If you estimate 287 + 423 by ROUNDING each number, what's a quick estimate?`,
              options: [`100`, `Around 700 (300 + 400)`, `1,500`, `50`],
              correctIndex: 1,
              explanation: `Around 700! 287 rounds to 300. 423 rounds to 400. 300 + 400 = 700. The actual answer is 710 — close to 700. Estimate worked.` },
            { id: `l10-q3`, format: `multiple-choice`,
              question: `What's the MOST common addition mistake?`,
              options: [`Spelling errors`, `FORGETTING THE CARRY — skipping the little "1" you wrote above`, `Using a pencil`, `Lining up too neatly`],
              correctIndex: 1,
              explanation: `Forgotten carries! You write the little "1" but forget to add it in the next column. Always double-check that you added every carry.` },
            { id: `l10-q4`, format: `true-false`,
              question: `For important problems, you can REDO the addition a different way to double-check — same answer twice = trustworthy.`,
              correctAnswer: true,
              explanation: `True! Two methods, same answer = very likely correct. Engineers and scientists use this trick for safety-critical math. Build the habit.` },
            { id: `l10-q5`, format: `fill-blank`,
              question: `When rounding, look at the digit right NEXT to the place. If it's 5 or higher, round ___ .`,
              options: [`up`, `down`, `sideways`, `away`],
              correctIndex: 0,
              explanation: `Up! 5 or higher = round up. 4 or lower = round down. So 287's tens digit is 8 → round 287 up to 300. Simple rule.` },
            { id: `l10-q6`, format: `multiple-choice`,
              question: `Why do PROS always check their work?`,
              options: [`They're slow`, `Mistakes happen to EVERYONE — checking catches them before they cause real problems`, `They're scared`, `They have to`],
              correctIndex: 1,
              explanation: `Mistakes happen to everyone — even pros. Checking catches them before they matter. That's why pilots, doctors, engineers ALL check. Reliability comes from checking.` },
          ],
        },

        {
          id: `l10-realworld`,
          type: `real-world`,
          guideText: `Here's a true story, {name}. In 1998, NASA built a Mars spacecraft. Engineers used two different MEASUREMENT systems on the same project — one team used metric (meters, kilograms), one used English (feet, pounds). Nobody checked carefully if the numbers matched between systems. The spacecraft entered Mars's atmosphere with the wrong numbers — and crashed. Cost: $125 MILLION. The mistake could have been caught by ONE careful check. This is why checking matters at every level. From your homework to space missions. The habit you build with addition checks today is the same habit that saves spaceships tomorrow. Small habit. Huge consequences. Build it now.`,
          familyAdventure: `Together, play "MISTAKE HUNTER." One person solves an addition problem on paper — but DELIBERATELY makes ONE small mistake (like forgetting a carry, or misaligning digits). The other person has to FIND the mistake and explain what went wrong. Take turns being the maker and the hunter. The mistakes get sneakier as you go. This teaches you to SEE common errors fast. Hunters get faster. Makers get craftier. Both get sharper.`,
          creativePrompt: `Design a "CHECK YOUR WORK" CHECKLIST. Make a small card or poster with your routine: 1) ESTIMATE first. 2) Line up the digits. 3) Track every carry. 4) Compare answer to estimate. 5) REDO if important. Decorate the card. Tape it to your homework area. Use it every time. Soon you won't need the card — the habit will be in you.`,
        },

        {
          id: `l10-celebration`,
          type: `celebration`,
          message: `Smart work, {name}! You've learned the PRO secret — checking your work. Estimate first. Watch for forgotten carries, misaligned digits, and addition slips. Compare your answer to your estimate. Redo important problems. This routine takes 30 seconds and catches almost every mistake. You're not just learning addition — you're learning to be RELIABLE. That's a superpower. Next lesson is PRACTICE — putting it all together. — Remi 🦝`,
          badge: `mistake-catcher`,
          badgeName: `Mistake Catcher`,
          xpEarned: 50,
        },

      ],
    },
  ],
};

export default MATH_L10;

// ─── Dev asset check ───
if (import.meta.env?.DEV) {
  const mags  = MATH_L10.lessons[0].screens.filter(s => s.type === 'magazine').length;
  const game  = MATH_L10.lessons[0].screens.find(s => s.type === 'interactive')?.items?.length ?? 0;
  const quiz  = MATH_L10.lessons[0].screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  console.log(`[LESSON-MATH-L10] Loaded: "Checking Your Work" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
}
