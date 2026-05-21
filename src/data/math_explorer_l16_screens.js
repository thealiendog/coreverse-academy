// ─────────────────────────────────────────────────────────────────────────────
// MATH  |  L16 — Checking with Addition
// Age band : explorers (6–8)   Guide: remi
// Standards: CCSS 2.NBT.B.5 / 2.OA.C.3 (inverse operations)
// REWRITE v2 (May 2026): Grade 1 accessible, CHECK WORKS / CHECK FAILS 2-bucket
// identification game tests inverse-verification of subtraction answers
// (Also brings file into the standard L13+ schema used across the Math band)
// ─────────────────────────────────────────────────────────────────────────────

const MATH_L16 = {
  ageBand:   `explorers`,
  subjectId: `math`,
  guide:     `remi`,

  lessons: [
    {
      id:        `math-6-8-16`,
      title:     `Checking with Addition`,
      duration:  12,
      xpReward:  50,
      badge:     `inverse-checker`,
      badgeName: `Inverse Checker`,

      screens: [

        {
          id: `l16-welcome`,
          type: `welcome`,
          guideText: `Hey {name}, Remi here! Today we learn a SECRET math superpower — how to check whether your subtraction is RIGHT! All it takes is a little addition! Subtraction and addition undo each other — that's our trick!`,
          headline: `Checking with Addition`,
          subtitle: `Use the opposite operation to verify your subtraction`,
          visual: `/explorer-assets/math/l16-welcome.webp`,
        },

        {
          id: `l16-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Inverse Operations`,
          paragraphs: [
            `Addition and subtraction are INVERSE OPERATIONS! That means they're OPPOSITES — each one UNDOES the other perfectly!`,
            `If you add 10 to a number, you can subtract 10 to get RIGHT BACK! If you subtract 5, you can add 5 to return! This connection is your SECRET checking tool! After you subtract, you can use ADDITION to check whether your answer is correct!`,
          ],
          image: `/explorer-assets/math/l16-s1-inverse-ops.webp`,
          imageCaption: `Addition and subtraction are perfect opposites — each one undoes the other!`,
          vocab: [
            { word: `inverse`,   definition: `Opposite operations that undo each other.`,
              audioPrompt: `Inverse means opposite operations that undo each other. Subtraction and addition are inverses. Subtract takes away. Add puts back. They're perfect opposites. They cancel each other out!` },
            { word: `operation`, definition: `A math action like adding or subtracting.`,
              audioPrompt: `An operation is a math action — like adding, subtracting, multiplying, dividing. Each one does something different. Addition and subtraction are 2 operations that are connected as inverses!` },
            { word: `undo`,      definition: `Reverse an action and go back.`,
              audioPrompt: `To undo is to reverse an action and go back to where you started. Addition undoes subtraction. Subtraction undoes addition. They cancel each other out. That's what makes them inverses!` },
          ],
        },

        {
          id: `l16-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `The Check: ADD BACK`,
          paragraphs: [
            `Here's the RULE! If A minus B equals C, then C plus B should equal A! That's the check!`,
            `Try it! 85 - 27 = 58. Now ADD BACK: 58 + 27 = 85! We got back to 85 — the answer is CORRECT! Think of it like a ROUND TRIP! You drove 27 miles away from home. Now you're 58 miles from your starting point. Drive 27 miles back — you're home at 85! Round trip complete!`,
          ],
          image: `/explorer-assets/math/l16-s2-add-back.webp`,
          imageCaption: `Add the answer back to what you subtracted — you should reach the starting number!`,
          vocab: [
            { word: `verify`,     definition: `Check that something is correct.`,
              audioPrompt: `To verify is to check that something is correct and true. After you subtract, verify by adding back. If you reach the starting number, your subtraction was right. Verify builds confidence!` },
            { word: `round trip`, definition: `A journey that returns to the starting point.`,
              audioPrompt: `A round trip is a journey that returns to the starting point. Checking subtraction is like a math round trip. You subtract to go away. You add back to come home. Same starting number!` },
            { word: `original`,   definition: `The first number you started with.`,
              audioPrompt: `Original means the first number you started with before any operations. In subtraction, the original is the bigger number on top — the starting amount you subtracted from!` },
          ],
        },

        {
          id: `l16-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `The ROUND TRIP`,
          paragraphs: [
            `Imagine you start at home with 421 stickers! You give away 158 stickers. You think you have 263 left!`,
            `Now CHECK: 263 + 158 = 421! You're BACK AT HOME! The answer is correct! Whenever your check gets you back to the original number, your subtraction was right! The round trip works! If it DOESN'T get back, something's wrong!`,
          ],
          image: `/explorer-assets/math/l16-s3-round-trip.webp`,
          imageCaption: `A correct subtraction always brings you right back to the starting number!`,
          vocab: [
            { word: `starting number`, definition: `The number you begin with.`,
              audioPrompt: `The starting number is the number you begin with — the top number in a subtraction problem. It's where the round trip begins and where the check should bring you back to!` },
            { word: `check`,           definition: `A way to test whether your answer is right.`,
              audioPrompt: `A check is a way to test whether your answer is right. After subtraction, the check is adding back. Add your answer to what you subtracted. Should equal the original. That's the check!` },
            { word: `correct`,         definition: `Right and accurate.`,
              audioPrompt: `Correct means right and accurate — no mistakes. When your check brings you back to the original number, your answer is correct. You can trust it. Confidence locked in!` },
          ],
        },

        {
          id: `l16-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Catching MISTAKES`,
          paragraphs: [
            `Checking SAVES you from handing in wrong answers! Here's how it catches mistakes!`,
            `Say you solved 75 - 28 = 53 (wrong!). Check: 53 + 28 = 81. But 81 isn't 75 — MISMATCH! Something's wrong! Go back and subtract carefully: 75 - 28 = 47. Check: 47 + 28 = 75! Round trip works — 47 is the CORRECT answer! The check caught the mistake before it counted!`,
          ],
          image: `/explorer-assets/math/l16-s4-catching-mistakes.webp`,
          imageCaption: `A mismatch in the check means there's a mistake — go back and try again!`,
          vocab: [
            { word: `mismatch`, definition: `When two things don't match.`,
              audioPrompt: `A mismatch is when two things don't match — a sign that a mistake was made. If your check doesn't return the original number, you've got a mismatch. Time to find the mistake!` },
            { word: `mistake`,  definition: `An error in your work.`,
              audioPrompt: `A mistake is an error in your work that needs to be corrected. Everyone makes mistakes. That's why we check — so we can find and fix them before they cause real problems!` },
            { word: `caught`,   definition: `Found before it caused trouble.`,
              audioPrompt: `Caught means found before it caused trouble. The check catches mistakes. Without checking, the wrong answer slips through. With checking, you find it and fix it. Habit of pros!` },
          ],
        },

        {
          id: `l16-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `When to CHECK`,
          paragraphs: [
            `You don't have to check EVERY problem! But checking is especially smart in certain cases!`,
            `Check when: the problem is LONG! You BORROWED a lot! The answer doesn't FEEL right! For a TEST! For HOMEWORK that matters! Checking takes just a moment and saves you from wrong answers! Build the HABIT: finish your subtraction, then quickly add back before moving on! Just a few seconds!`,
          ],
          image: `/explorer-assets/math/l16-s5-when-to-check.webp`,
          imageCaption: `A quick check before moving on can catch mistakes before they matter!`,
          vocab: [
            { word: `habit`,    definition: `Something you do regularly.`,
              audioPrompt: `A habit is something you do regularly without thinking about it. Build the checking habit. After a while, you'll check without even noticing. That's when habits become superpowers!` },
            { word: `estimate`, definition: `A close guess for sanity-checking.`,
              audioPrompt: `An estimate is a close guess that helps you know if your answer is in the right range. If your answer seems way off your estimate, definitely check it. Estimates and checks work together!` },
            { word: `pause`,    definition: `Stop briefly before continuing.`,
              audioPrompt: `To pause is to stop briefly before continuing. Pause to check before moving on. Just a few seconds. That pause is what separates careful math kids from rushed ones!` },
          ],
        },

        {
          id: `l16-mag-6`,
          type: `magazine`,
          section: 6,
          headline: `RELIABLE Math People`,
          paragraphs: [
            `{name} — math people who always check their work are RELIABLE!`,
            `Teachers, engineers, scientists all verify their calculations — even when the math is easy for them! Checking isn't about DOUBTING yourself. It's about CARING enough about your work to make sure it's right! When you check with addition, your subtraction answers can be TRUSTED! That's what makes you a RELIABLE math person!`,
          ],
          image: `/explorer-assets/math/l16-s6-reliable-math.webp`,
          imageCaption: `Reliable math people check their work — it's a sign of care, not doubt!`,
          vocab: [
            { word: `reliable`,    definition: `Trustworthy and consistently correct.`,
              audioPrompt: `Reliable means trustworthy and consistently correct. Check your work and your math is reliable. People can count on you. Teachers trust your answers. That's the reliability superpower!` },
            { word: `trustworthy`, definition: `Able to be trusted and depended on.`,
              audioPrompt: `Trustworthy means able to be trusted and depended on. Checking makes your answers trustworthy. People believe in your work. That trust is earned through care — through the habit of checking!` },
            { word: `verify`,      definition: `Confirm that something is correct.`,
              audioPrompt: `Verify means confirm that something is correct. Always verify your subtraction by adding back. Subtraction plus its check equals confidence. Confidence built on real verification!` },
          ],
        },

        {
          id: `l16-game`,
          type: `interactive`,
          format: `drag-match`,
          guideText: `Let's try it, {name}! Here are 4 subtraction problems with proposed answers. Do the inverse check (add back!) — does the CHECK WORK (correct!) or does the CHECK FAIL (wrong answer!)?`,
          buckets: [
            { id: `check_works`, label: `✅ CHECK WORKS (correct!)`, color: `#34D399` },
            { id: `check_fails`, label: `❌ CHECK FAILS (wrong!)`,   color: `#F87171` },
          ],
          items: [
            { id: `l16-g1`, image: `l16-game-1.webp`, label: `85 - 27 = 58 (check: 58 + 27 = ?)`,
              matchPhrase: `Yes! CHECK WORKS! 58 + 27 = 85. Back to the starting number! Answer is correct!`,
              correctMatch: `check_works` },
            { id: `l16-g2`, image: `l16-game-2.webp`, label: `75 - 28 = 53 (check: 53 + 28 = ?)`,
              matchPhrase: `Yes! CHECK FAILS! 53 + 28 = 81, but starting number was 75. Mismatch! Wrong answer!`,
              correctMatch: `check_fails` },
            { id: `l16-g3`, image: `l16-game-3.webp`, label: `421 - 158 = 263 (check: 263 + 158 = ?)`,
              matchPhrase: `Great! CHECK WORKS! 263 + 158 = 421. Back to start! Answer is correct!`,
              correctMatch: `check_works` },
            { id: `l16-g4`, image: `l16-game-4.webp`, label: `90 - 45 = 35 (check: 35 + 45 = ?)`,
              matchPhrase: `Yes! CHECK FAILS! 35 + 45 = 80, but starting number was 90. Mismatch! Wrong answer!`,
              correctMatch: `check_fails` },
          ],
        },

        {
          id: `l16-quiz`,
          type: `quiz`,
          guideText: `Let's see what you remember, {name}!`,
          questions: [
            { id: `l16-q1`, format: `multiple-choice`,
              question: `What does it mean for addition and subtraction to be INVERSE operations?`,
              options: [`They give the same answer`, `They UNDO each other`, `They are both hard`, `They use the same numbers`],
              correctIndex: 1,
              explanation: `Inverse operations undo each other! Subtraction takes away. Addition puts back. Perfect opposites!` },
            { id: `l16-q2`, format: `multiple-choice`,
              question: `You solved 85 - 27 = 58. How do you CHECK?`,
              options: [`85 + 27`, `58 - 27`, `58 + 27`, `85 - 58`],
              correctIndex: 2,
              explanation: `Add the answer (58) back to what you subtracted (27): 58 + 27 = 85. Matches the starting number!` },
            { id: `l16-q3`, format: `multiple-choice`,
              question: `You solved 421 - 158 = 263. Check: 263 + 158 = 421. What does this tell you?`,
              options: [`The answer is wrong`, `The answer is correct`, `Subtract again`, `Check doesn't work here`],
              correctIndex: 1,
              explanation: `263 + 158 = 421 matches the starting number! Round trip works — 263 is correct!` },
            { id: `l16-q4`, format: `multiple-choice`,
              question: `You solved 75 - 28 = 53. Check: 53 + 28 = 81. But starting was 75. What happened?`,
              options: [`Check is wrong — ignore it`, `81 is close enough`, `There's a MISTAKE — fix it`, `Starting must have been 81`],
              correctIndex: 2,
              explanation: `Check gives 81, but starting was 75. Mismatch! There's a mistake. Go back and subtract carefully!` },
            { id: `l16-q5`, format: `fill-blank`,
              question: `If A - B = C, what addition fact CHECKS the answer?`,
              options: [`C + B = A`, `A + B = C`, `B + A = C`, `B - C = A`],
              correctIndex: 0,
              explanation: `C + B = A! Add the answer (C) back to what you subtracted (B) — should get the original (A)!` },
            { id: `l16-q6`, format: `multiple-choice`,
              question: `When is it SMART to check your subtraction?`,
              options: [`Only when told to`, `Never — wastes time`, `When the problem was long or involved lots of borrowing`, `Only on tests`],
              correctIndex: 2,
              explanation: `Checking is smartest when problems are long, involve lots of borrowing, or the answer doesn't feel right!` },
          ],
        },

        {
          id: `l16-realworld`,
          type: `real-world`,
          guideText: `Here's a real-world use, {name}! Imagine you have 95 cents. You spend 38 cents on a snack. You think you have 57 cents left! Before you put your wallet away, CHECK: 57 + 38 = 95! Round trip! You counted correctly! Adults double-check math at stores all the time. The habit you're building now will help you with money for life!`,
          familyAdventure: `Together, do the "GROCERY STORE CHECK"! Pretend to be at a store. Pick a starting amount (like $95). Pick something to spend (like $38). Subtract. Then CHECK by adding back! Did you get the starting amount? Do this 5 times with different numbers. Ask a grown-up: do they ever double-check math at the store?`,
          creativePrompt: `Design a "CHECKING POSTER" for your homework spot! Show the rule: A - B = C, so C + B = A! Include a fun example (like 95 - 38 = 57, check: 57 + 38 = 95!). Give it a catchy title like "Always Add Back!" or "Round Trip Math!" Write at least 3 sentences explaining your poster. For stretch, write a 5-sentence story about a kid who saved money by checking their math!`,
        },

        {
          id: `l16-celebration`,
          type: `celebration`,
          message: `Outstanding work, {name}! You now know how to CHECK SUBTRACTION using addition! Add back. Round trip. Should land at the starting number! If yes — correct! If no — find the mistake! Use this superpower every time you subtract. Your math becomes rock-solid! Remi is so proud! 🦝`,
          badge: `inverse-checker`,
          badgeName: `Inverse Checker`,
          xpEarned: 50,
        },

      ],
    },
  ],
};

export default MATH_L16;

// ─── Dev asset check ─────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const mags  = MATH_L16.lessons[0].screens.filter(s => s.type === 'magazine').length;
  const game  = MATH_L16.lessons[0].screens.find(s => s.type === 'interactive')?.items?.length ?? 0;
  const quiz  = MATH_L16.lessons[0].screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  console.log(`[LESSON-MATH-L16] Loaded: "Checking with Addition" with ${mags} magazine sections, ${game} game items, ${quiz} quiz questions`);
}
