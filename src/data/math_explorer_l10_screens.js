// ─────────────────────────────────────────────────────────────────────────────
// MATH  |  L10 — Checking Your Work
// Age band : explorers (6–8)   Guide: remi
// Standards: CCSS 2.NBT.B.7 / MP.6
// REWRITE v2 (May 2026): Grade 1 accessible, REASONABLE / WAY OFF 2-bucket
// identification game tests estimation as a sanity check
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
          guideText: `Hey {name}, Remi here! You can ADD multi-digit numbers now! Big achievement! But here's a secret — the BEST math people don't just SOLVE problems. They CHECK their answers! Today we learn the habits that catch mistakes. Not new math — just smart thinking!`,
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
            `Imagine you spent 5 minutes solving a tough problem. You wrote the answer. You feel done. But what if you made a SMALL mistake? You'd never know!`,
            `That's why CHECKING matters! Even brilliant mathematicians make mistakes. Scientists check formulas. Engineers check designs. Pilots check flight plans. Doctors check prescriptions! Everyone makes mistakes — the people who CATCH them get things right! Checking isn't SLOW. It's SMART! It only takes a few seconds!`,
          ],
          image: `/explorer-assets/math/l10-s1-trust-verify.webp`,
          imageCaption: `Even brilliant people make mistakes. Checking catches them!`,
          vocab: [
            { word: `check`,   definition: `Verify your work is correct.`,
              audioPrompt: `To check is to verify your work is correct. Check your answer to catch mistakes. Checking takes seconds but saves you from being wrong. The best math kids check every problem. It's a habit that builds confidence!` },
            { word: `mistake`, definition: `An accidental error.`,
              audioPrompt: `A mistake is an accidental error. Everyone makes mistakes — even adults. Checking finds them. Doctors, pilots, scientists — all check their work because mistakes happen to everyone!` },
            { word: `routine`, definition: `A regular habit.`,
              audioPrompt: `A routine is a regular habit. The checking routine only takes a few seconds and prevents big errors. Once it becomes automatic, you'll check without thinking. Make checking a normal part of solving every problem!` },
          ],
        },

        {
          id: `l10-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Trick #1: ESTIMATE FIRST`,
          paragraphs: [
            `Here's your FIRST checking trick — ESTIMATE before you solve! Get a rough idea of how big the answer SHOULD be!`,
            `Take 287 + 423. Before solving, ESTIMATE! Round 287 to about 300. Round 423 to about 400. Quick guess: 300 + 400 = 700! So my answer should be CLOSE TO 700. Now solve: 287 + 423 = 710. Compare! 710 is close to 700? YES! That feels right! If you got 167 or 1,400, your estimate would tell you something's WRONG!`,
          ],
          image: `/explorer-assets/math/l10-s2-estimate-first.webp`,
          imageCaption: `Estimate first: 287 + 423 → about 300 + 400 = 700!`,
          vocab: [
            { word: `estimate`,     definition: `A quick guess at the answer.`,
              audioPrompt: `An estimate is a quick guess at the answer. Estimate before solving to know what to expect. Round numbers to nice ones, then add quickly. If your real answer is way off the estimate, you know to check!` },
            { word: `sanity check`, definition: `A quick test that the answer makes sense.`,
              audioPrompt: `A sanity check is a quick test that the answer makes sense. The estimate is your sanity check. It catches huge errors fast. If you forgot a carry and the answer is too small, the estimate shows it!` },
            { word: `close to`,     definition: `Near but not exact.`,
              audioPrompt: `Close to means near but not exact. Your real answer should be close to your estimate. If you estimated 700 and got 710 — close! Probably right. If you got 1,710 or 71 — way off, something's wrong!` },
          ],
        },

        {
          id: `l10-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `ROUNDING for Quick Estimates`,
          paragraphs: [
            `To make estimates EASY, use ROUNDING! Round each number to the NEAREST HUNDRED or ten!`,
            `Round 287 → 300. Round 423 → 400. Round 158 → 200. Round 142 → 100! The trick: look at the digit RIGHT NEXT to the place you're rounding to. If it's 5 or higher, round UP. If it's 4 or lower, round DOWN! So 287 rounds to 300 (the 8 is high). 423 rounds to 400 (the 2 is low)!`,
          ],
          image: `/explorer-assets/math/l10-s3-rounding-trick.webp`,
          imageCaption: `Rounding: 287 → 300. Look at the next digit. 5+ → up. 4 or less → down!`,
          vocab: [
            { word: `round`,      definition: `Change a number to a nearby easier one.`,
              audioPrompt: `To round is to change a number to a nearby easier one. Round for fast estimates. 287 becomes 300. 423 becomes 400. The rounded numbers are easier to add. Rounding gives you speed!` },
            { word: `nearest`,    definition: `Closest.`,
              audioPrompt: `Nearest means closest. Round to the nearest hundred or ten — whichever is closer. 287 is closer to 300 than to 200, so it rounds to 300. Always round to whichever is closer!` },
            { word: `rough idea`, definition: `An approximate answer.`,
              audioPrompt: `A rough idea is an approximate answer. Estimates give you a rough idea — not perfect, but close. The goal isn't to be exact. The goal is to know roughly what to expect!` },
          ],
        },

        {
          id: `l10-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Common MISTAKES to Watch For`,
          paragraphs: [
            `Here are the TOP THREE mistakes kids make in addition. Watch out for these!`,
            `MISTAKE 1: FORGETTING THE CARRY! Most common error. You add the column, write the answer — but forget to add the little "1" from a carry! MISTAKE 2: MISALIGNED DIGITS! When numbers are different lengths, easy to write them not lined up! MISTAKE 3: SIMPLE ADDITION SLIPS! 7 + 8 = 14? No — it's 15! Quick brain glitches happen. These three account for like 90% of addition mistakes!`,
          ],
          image: `/explorer-assets/math/l10-s4-common-mistakes.webp`,
          imageCaption: `Top 3 mistakes: forgot carry, misaligned digits, addition slip!`,
          vocab: [
            { word: `forgotten carry`, definition: `Skipping the little 1.`,
              audioPrompt: `A forgotten carry is skipping the little 1 in the next column. Forgotten carries are the most common mistake. You write the little 1 to track it — but you have to actually ADD it when you reach that column!` },
            { word: `misaligned`,      definition: `Not lined up properly.`,
              audioPrompt: `Misaligned means not lined up properly. Misaligned digits cause wrong-place additions. If you don't line up ones under ones, you might add a ten to a one. The result is wildly wrong!` },
            { word: `slip`,            definition: `A small accidental error.`,
              audioPrompt: `A slip is a small accidental error. A simple addition slip like 7 + 8 = 14 instead of 15. Slips happen to everyone — the brain hiccups. Doing one final check catches most slips!` },
          ],
        },

        {
          id: `l10-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `REDO or Use a DIFFERENT METHOD`,
          paragraphs: [
            `For really important problems, REDO the problem a SECOND way!`,
            `One way: RE-ADD column by column. Slowly. From scratch! Another way: SWAP THE NUMBERS! 245 + 178 should give the same answer as 178 + 245. Add it both ways. Same answer? You're probably right! Another way: BREAK INTO PIECES! Two methods, same answer = TRUSTWORTHY! This is what real engineers do for safety-critical numbers!`,
          ],
          image: `/explorer-assets/math/l10-s5-redo-check.webp`,
          imageCaption: `For important problems: REDO using a different method!`,
          vocab: [
            { word: `redo`,        definition: `Solve again from scratch.`,
              audioPrompt: `To redo is to solve again from scratch. Redo the problem to double-check your first answer. Slow and careful. If you get the same answer twice, much more confidence!` },
            { word: `swap`,        definition: `Switch the order.`,
              audioPrompt: `To swap is to switch the order. Swap the numbers and add again — same answer expected. 245 plus 178 should equal 178 plus 245. Both ways same answer. Swapping is a quick double-check!` },
            { word: `trustworthy`, definition: `Reliable and correct.`,
              audioPrompt: `Trustworthy means reliable and correct. Same answer two ways equals trustworthy result. If two different methods give the same answer, the chance of error is very small!` },
          ],
        },

        {
          id: `l10-mag-6`,
          type: `magazine`,
          section: 6,
          headline: `Checking Is a PRO Habit`,
          paragraphs: [
            `{name} — checking your work separates kids who STRUGGLE from kids who SUCCEED!`,
            `The checking routine: BEFORE solving, ESTIMATE. DURING solving, watch alignment and carries. AFTER solving, COMPARE to your estimate. For important problems, REDO! This whole thing takes maybe 30 extra seconds — and catches almost every mistake! It builds MATH CONFIDENCE. Real mathematicians, scientists, engineers — they all check!`,
          ],
          image: `/explorer-assets/math/l10-s6-pro-habit.webp`,
          imageCaption: `Pro habit: estimate → solve → compare → redo if important!`,
          vocab: [
            { word: `payoff`,     definition: `The benefit or result.`,
              audioPrompt: `A payoff is the benefit or result. The checking habit has a huge payoff — accurate answers. Thirty seconds of checking saves you from being wrong. The math is in your favor!` },
            { word: `confidence`, definition: `Belief in your ability.`,
              audioPrompt: `Confidence is belief in your ability. Checking builds math confidence — you know when you're right. Without checking, you guess. With checking, you know. Knowing feels good!` },
            { word: `reliable`,   definition: `Can be counted on to be right.`,
              audioPrompt: `Reliable means can be counted on to be right. Checkers are reliable. People trust their work. Teachers, employers, friends — they trust people who check their work. This habit serves you for life!` },
          ],
        },

        {
          id: `l10-game`,
          type: `interactive`,
          format: `drag-match`,
          guideText: `Let's try it, {name}! Here are 4 problems with proposed answers. Use estimation to check — is each answer REASONABLE or WAY OFF?`,
          buckets: [
            { id: `reasonable`, label: `✅ REASONABLE (close to estimate)`, color: `#34D399` },
            { id: `way_off`,    label: `❌ WAY OFF (something's wrong)`,    color: `#F87171` },
          ],
          items: [
            { id: `l10-g1`, image: `l10-game-1.webp`, label: `287 + 423 = 710 (estimate: 300 + 400 = 700)`,
              matchPhrase: `Yes! REASONABLE! 710 is super close to 700. The estimate matches. Probably right!`,
              correctMatch: `reasonable` },
            { id: `l10-g2`, image: `l10-game-2.webp`, label: `158 + 124 = 982 (estimate: 200 + 100 = 300)`,
              matchPhrase: `Yes! WAY OFF! 982 is nowhere near 300. Something went very wrong. Better redo!`,
              correctMatch: `way_off` },
            { id: `l10-g3`, image: `l10-game-3.webp`, label: `245 + 178 = 423 (estimate: 200 + 200 = 400)`,
              matchPhrase: `Great! REASONABLE! 423 is close to 400. The estimate matches. Looks right!`,
              correctMatch: `reasonable` },
            { id: `l10-g4`, image: `l10-game-4.webp`, label: `67 + 25 = 982 (estimate: 70 + 30 = 100)`,
              matchPhrase: `Yes! WAY OFF! 982 is huge compared to 100. The answer can't be right. Time to redo!`,
              correctMatch: `way_off` },
          ],
        },

        {
          id: `l10-quiz`,
          type: `quiz`,
          guideText: `Let's see what you remember, {name}!`,
          questions: [
            { id: `l10-q1`, format: `multiple-choice`,
              question: `What should you do BEFORE solving an addition problem?`,
              options: [`Skip ahead`, `ESTIMATE — round the numbers and get a rough answer`, `Nap`, `Nothing`],
              correctIndex: 1,
              explanation: `Estimate first! Round each number. Add quickly. That's your sanity check!` },
            { id: `l10-q2`, format: `multiple-choice`,
              question: `If you estimate 287 + 423 by ROUNDING each number, what's a quick estimate?`,
              options: [`100`, `Around 700 (300 + 400)`, `1,500`, `50`],
              correctIndex: 1,
              explanation: `Around 700! 287 rounds to 300. 423 rounds to 400. 300 + 400 = 700!` },
            { id: `l10-q3`, format: `multiple-choice`,
              question: `What's the MOST common addition mistake?`,
              options: [`Spelling errors`, `FORGETTING THE CARRY — skipping the little "1"`, `Using pencil`, `Lining up too neatly`],
              correctIndex: 1,
              explanation: `Forgotten carries! Always double-check that you added every carry!` },
            { id: `l10-q4`, format: `true-false`,
              question: `For important problems, you can REDO the addition a different way — same answer twice means trustworthy.`,
              correctAnswer: true,
              explanation: `True! Two methods, same answer = very likely correct. Build the habit!` },
            { id: `l10-q5`, format: `fill-blank`,
              question: `When rounding, look at the digit right next to the place. If it's 5 or higher, round ___ .`,
              options: [`up`, `down`, `sideways`, `away`],
              correctIndex: 0,
              explanation: `Up! 5 or higher = round up. 4 or lower = round down. Simple rule!` },
            { id: `l10-q6`, format: `multiple-choice`,
              question: `Why do PROS always check their work?`,
              options: [`They're slow`, `Mistakes happen to EVERYONE — checking catches them`, `They're scared`, `They have to`],
              correctIndex: 1,
              explanation: `Mistakes happen to everyone — even pros. Reliability comes from checking!` },
          ],
        },

        {
          id: `l10-realworld`,
          type: `real-world`,
          guideText: `Here's a true story, {name}! In 1998, NASA built a Mars spacecraft. Engineers used two DIFFERENT measurement systems — one team used metric, one used English (feet, pounds). Nobody checked carefully. The spacecraft entered Mars's atmosphere with the wrong numbers — and crashed! Cost: $125 MILLION! ONE careful check could have caught it!`,
          familyAdventure: `Together, play "MISTAKE HUNTER"! One person solves an addition problem on paper — but makes ONE small mistake (forgetting a carry, misaligning digits). The other person has to FIND the mistake! Take turns being maker and hunter!`,
          creativePrompt: `Design a "CHECK YOUR WORK" CHECKLIST! Make a card with your routine: 1) ESTIMATE first. 2) Line up digits. 3) Track every carry. 4) Compare to estimate. 5) REDO if important. Write at least 3 sentences describing your card. For stretch, write 5 sentences telling why each step matters. Tape it where you do homework!`,
        },

        {
          id: `l10-celebration`,
          type: `celebration`,
          message: `Smart work, {name}! You learned the PRO secret — checking your work! Estimate first. Watch for forgotten carries, misaligned digits, addition slips. Compare to your estimate. Redo if important! This routine takes 30 seconds and catches almost every mistake! Remi is so proud! 🦝`,
          badge: `mistake-catcher`,
          badgeName: `Mistake Catcher`,
          xpEarned: 50,
        },

      ],
    },
  ],
};

export default MATH_L10;

// ─── Dev asset check ─────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const mags  = MATH_L10.lessons[0].screens.filter(s => s.type === 'magazine').length;
  const game  = MATH_L10.lessons[0].screens.find(s => s.type === 'interactive')?.items?.length ?? 0;
  const quiz  = MATH_L10.lessons[0].screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  console.log(`[LESSON-MATH-L10] Loaded: "Checking Your Work" with ${mags} magazine sections, ${game} game items, ${quiz} quiz questions`);
}
