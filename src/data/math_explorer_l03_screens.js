// ─────────────────────────────────────────────────────────────────────────────
// MATH  |  L03 — Expanded Form
// Age band : explorers (6–8)   Guide: remi
// Standards: CCSS 2.NBT.A.3
// REWRITE v2 (May 2026): Grade 1 accessible, HUNDREDS/TENS/ONES PIECE
// identification game directly tests expanded-form recognition
// ─────────────────────────────────────────────────────────────────────────────

const MATH_L03 = {
  ageBand:   `explorers`,
  subjectId: `math`,
  guide:     `remi`,

  lessons: [
    {
      id:        `math-6-8-03`,
      title:     `Expanded Form`,
      duration:  12,
      xpReward:  50,
      badge:     `expanded-form-explorer`,
      badgeName: `Expanded Form Explorer`,

      screens: [

        {
          id: `l03-welcome`,
          type: `welcome`,
          guideText: `Hi {name}, Remi here! You know place value. You know bundling. Today we learn a SKILL — writing a number's place values out on paper! It's called EXPANDED FORM. Sounds fancy, but it's just breaking numbers apart! Let's go!`,
          headline: `Expanded Form`,
          subtitle: `Writing a number's hidden place values out where you can see them`,
          visual: `/explorer-assets/math/l03-welcome.webp`,
        },

        {
          id: `l03-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `What's HIDDEN Inside`,
          paragraphs: [
            `Look at the number 347. From outside, it looks like just three digits in a row.`,
            `But you and I know better! Place value HIDES inside it. The 3 isn't just 3 — it's 300! The 4 isn't just 4 — it's 40! The 7 is 7. The whole number is really 300 + 40 + 7 added together! That's what EXPANDED FORM does — it writes out the HIDDEN values!`,
          ],
          image: `/explorer-assets/math/l03-s1-hidden-inside.webp`,
          imageCaption: `347 looks like 3 digits. But inside: 300 + 40 + 7!`,
          vocab: [
            { word: `expanded form`, definition: `Writing a number as the SUM of its place values.`,
              audioPrompt: `Expanded form is writing a number as the sum of its place values. 347 expanded equals 300 plus 40 plus 7. The number gets longer when you write it this way — that's why it's called expanded!` },
            { word: `standard form`, definition: `The normal way to write a number.`,
              audioPrompt: `Standard form is the normal way to write a number — just the digits together. 347 is standard form. So is 25, or 9000. Compact and easy. The form you see most of the time!` },
            { word: `hidden`,        definition: `Not visible at first.`,
              audioPrompt: `Hidden means not visible at first. Place values are hidden inside standard form. When you see 347, you can't immediately see that the 3 means 300. Expanded form shows the hidden pieces!` },
          ],
        },

        {
          id: `l03-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Breaking a Number APART`,
          paragraphs: [
            `Let's practice! Take the number 528. How do we write it in EXPANDED FORM?`,
            `Look at each digit, starting from the LEFT! The 5 is in HUNDREDS — worth 500. The 2 is in TENS — worth 20. The 8 is in ONES — worth 8! Write them out with PLUS signs: 500 + 20 + 8. Done! Try 936! 9 = 900, 3 = 30, 6 = 6. Expanded form: 900 + 30 + 6!`,
          ],
          image: `/explorer-assets/math/l03-s2-break-apart.webp`,
          imageCaption: `Breaking 528 apart: 5 → 500, 2 → 20, 8 → 8!`,
          vocab: [
            { word: `break apart`,   definition: `To separate into pieces.`,
              audioPrompt: `To break apart is to separate into pieces. We break apart a number into its place values for expanded form. The number 528 breaks apart into 500, 20, and 8. Each piece shows one place!` },
            { word: `digit becomes`, definition: `Each digit becomes its place value.`,
              audioPrompt: `Digit becomes means each digit becomes its place value when written in expanded form. The 5 in hundreds becomes 500. The 2 in tens becomes 20. The 8 in ones stays as 8. Each takes on its true value!` },
            { word: `plus signs`,    definition: `The + symbol that connects place values.`,
              audioPrompt: `Plus signs are the plus symbol. Expanded form uses plus signs to connect the place values. 500 plus 20 plus 8. The plus signs show that all these pieces ADD UP to the original number!` },
          ],
        },

        {
          id: `l03-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `ADD Them Back Up`,
          paragraphs: [
            `Here's a great test — if you do expanded form RIGHT, adding the pieces back gives you the ORIGINAL number!`,
            `Take 528 → 500 + 20 + 8. Add it up: 500 + 20 = 520. Then 520 + 8 = 528. Back where we started! Try 814 → 800 + 10 + 4. Add: 810 + 4 = 814! YES! Expanded form is just standard form, spread out so you can SEE the pieces!`,
          ],
          image: `/explorer-assets/math/l03-s3-add-back.webp`,
          imageCaption: `Adding back: 500 + 20 + 8 = 528!`,
          vocab: [
            { word: `add back`, definition: `Putting expanded form pieces together.`,
              audioPrompt: `To add back is putting expanded form pieces together to return to standard form. 500 plus 20 plus 8 equals 528. If your pieces add back to the original — you did expanded form right!` },
            { word: `check`,    definition: `Make sure you're right.`,
              audioPrompt: `To check is to make sure you're right. Adding pieces back is your expanded form check. If you wrote 500 plus 200 plus 8 by mistake — adding back gives 708, not 528. The check catches errors!` },
            { word: `equal`,    definition: `The same amount.`,
              audioPrompt: `Equal means the same amount. Expanded form and standard form are equal. They're the same number, just written differently. Like saying "twelve" or "a dozen" — different words, same amount!` },
          ],
        },

        {
          id: `l03-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `What About ZEROS?`,
          paragraphs: [
            `Trickier case — what if a number has a ZERO? Like 405!`,
            `In 405, the 4 is hundreds (400). The 0 is tens (0). The 5 is ones (5). Expanded form: 400 + 0 + 5 — or just 400 + 5! The ZERO doesn't have a value to write. But it's STILL doing a job — it's a PLACEHOLDER! Without that 0 in 405, you'd have 45 — totally different! The zero KEEPS the 4 in hundreds!`,
          ],
          image: `/explorer-assets/math/l03-s4-zeros-matter.webp`,
          imageCaption: `405: the ZERO holds the tens spot — keeps the 4 in hundreds!`,
          vocab: [
            { word: `zero`,           definition: `The digit 0. Means nothing in that place.`,
              audioPrompt: `Zero is the digit 0. It means nothing in that place — but it holds the spot for other digits! In 405, zero keeps the 4 in hundreds and the 5 in ones. The silent hero of place value!` },
            { word: `placeholder`,    definition: `A digit that holds the spot.`,
              audioPrompt: `A placeholder is a digit that holds the spot. Zero is a placeholder. In 405, the zero holds the tens spot so the 4 stays in hundreds. Take the zero out — you get 45. Totally different!` },
            { word: `invisible work`, definition: `Important job done quietly.`,
              audioPrompt: `Invisible work means important job done quietly. Zero does invisible work by holding places. It looks like nothing — but it's keeping the whole number organized. Quiet but powerful!` },
          ],
        },

        {
          id: `l03-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Bigger Numbers, Same Trick`,
          paragraphs: [
            `Once you can expand 3-digit numbers, you can expand ANY number! The trick is the SAME!`,
            `Take 3,248 — four digits! 3 is THOUSANDS (3,000). 2 is HUNDREDS (200). 4 is TENS (40). 8 is ONES (8). Expanded form: 3,000 + 200 + 40 + 8! Just ONE more place, one more piece! It doesn't matter how big — the trick works EVERY time!`,
          ],
          image: `/explorer-assets/math/l03-s5-bigger-numbers.webp`,
          imageCaption: `3,248 = 3,000 + 200 + 40 + 8. One more place, one more piece!`,
          vocab: [
            { word: `thousands`, definition: `The 4th place from the right. Worth 1,000 each.`,
              audioPrompt: `Thousands is the 4th place from the right. Worth 1,000 each. A 3 in thousands means three thousand. After thousands comes ten-thousands, then hundred-thousands, then millions!` },
            { word: `same trick`, definition: `The method doesn't change.`,
              audioPrompt: `Same trick means the method doesn't change. The same trick that expands 3-digit numbers expands 4-digit and bigger numbers too. Each digit becomes its place value. Add with plus signs!` },
            { word: `scales up`, definition: `Works for bigger amounts.`,
              audioPrompt: `Scales up means works for bigger amounts. Expanded form scales up to huge numbers. Hundreds, thousands, millions, billions — the same technique works at every size!` },
          ],
        },

        {
          id: `l03-mag-6`,
          type: `magazine`,
          section: 6,
          headline: `A Tool for Understanding`,
          paragraphs: [
            `Why bother with expanded form? Because it's a POWER TOOL for understanding numbers!`,
            `When you see 4,562 in expanded form (4,000 + 500 + 60 + 2), you really SEE what each digit does! Numbers stop being random digit-strings and start being STRUCTURED things! This becomes super important when you start adding and subtracting BIG numbers. Use expanded form whenever a number feels confusing!`,
          ],
          image: `/explorer-assets/math/l03-s6-power-tool.webp`,
          imageCaption: `Expanded form = power tool for understanding!`,
          vocab: [
            { word: `power tool`, definition: `Something helpful and strong.`,
              audioPrompt: `A power tool is something helpful and strong. Expanded form is a power tool for math. It helps you understand any number, catches mistakes, and builds the foundation for big-number adding!` },
            { word: `understand`, definition: `To really get something.`,
              audioPrompt: `To understand is to really get something. Expanded form helps you understand numbers — not just memorize them. Memorization fades. Understanding sticks. Expanded form builds true place value sense!` },
            { word: `structured`, definition: `Built in an organized way.`,
              audioPrompt: `Structured means built in an organized way. Numbers are structured — each digit has a job. They're not random. Expanded form makes the structure visible. Numbers become tools, not mysteries!` },
          ],
        },

        {
          id: `l03-game`,
          type: `interactive`,
          format: `drag-match`,
          guideText: `Let's try it, {name}! Here are 4 number pieces from expanded forms. Drag each one — is it a HUNDREDS piece, TENS piece, or ONES piece?`,
          buckets: [
            { id: `hundreds_piece`, label: `💯 HUNDREDS piece`, color: `#A78BFA` },
            { id: `tens_piece`,     label: `🔟 TENS piece`,     color: `#34D399` },
            { id: `ones_piece`,     label: `1️⃣ ONES piece`,    color: `#FBBF24` },
          ],
          items: [
            { id: `l03-g1`, image: `l03-game-1.webp`, label: `300`,
              matchPhrase: `Yes! 300 is a HUNDREDS piece — three flats of one hundred! From a number like 347!`,
              correctMatch: `hundreds_piece` },
            { id: `l03-g2`, image: `l03-game-2.webp`, label: `40`,
              matchPhrase: `Great! 40 is a TENS piece — four rods of ten! From a number like 247!`,
              correctMatch: `tens_piece` },
            { id: `l03-g3`, image: `l03-game-3.webp`, label: `7`,
              matchPhrase: `Yes! 7 is an ONES piece — seven single cubes!`,
              correctMatch: `ones_piece` },
            { id: `l03-g4`, image: `l03-game-4.webp`, label: `80`,
              matchPhrase: `Perfect! 80 is a TENS piece — eight rods of ten! From a number like 581!`,
              correctMatch: `tens_piece` },
          ],
        },

        {
          id: `l03-quiz`,
          type: `quiz`,
          guideText: `Let's see what you remember, {name}!`,
          questions: [
            { id: `l03-q1`, format: `multiple-choice`,
              question: `What is EXPANDED FORM?`,
              options: [`A balloon`, `Writing a number as the SUM of its place values`, `A type of game`, `A bigger number`],
              correctIndex: 1,
              explanation: `Expanded form writes a number as the sum of its place values. 347 = 300 + 40 + 7!` },
            { id: `l03-q2`, format: `multiple-choice`,
              question: `Write 528 in EXPANDED FORM:`,
              options: [`5 + 2 + 8`, `500 + 20 + 8`, `52 + 8`, `5,000 + 200 + 80`],
              correctIndex: 1,
              explanation: `500 + 20 + 8! The 5 is hundreds (500), the 2 is tens (20), the 8 is ones (8). Add them all = 528!` },
            { id: `l03-q3`, format: `multiple-choice`,
              question: `What is the ZERO doing in the number 405?`,
              options: [`Nothing`, `Holding the TENS place — keeping 4 in hundreds and 5 in ones`, `Adding 0`, `Decorating`],
              correctIndex: 1,
              explanation: `It's a placeholder! Zero holds the tens place so the 4 stays in hundreds and the 5 stays in ones!` },
            { id: `l03-q4`, format: `true-false`,
              question: `If you ADD the pieces of expanded form, you get the ORIGINAL number back.`,
              correctAnswer: true,
              explanation: `True! 500 + 20 + 8 = 528. That's how you check your work!` },
            { id: `l03-q5`, format: `fill-blank`,
              question: `3,248 in expanded form is 3,000 + 200 + 40 + ___.`,
              options: [`8`, `4`, `40`, `0`],
              correctIndex: 0,
              explanation: `8! The 8 is in the ones place. Full expanded form: 3,000 + 200 + 40 + 8 = 3,248!` },
            { id: `l03-q6`, format: `multiple-choice`,
              question: `Why is EXPANDED FORM useful?`,
              options: [`It's not`, `It shows the HIDDEN PLACE VALUES inside any number`, `Only for tests`, `Just for fun`],
              correctIndex: 1,
              explanation: `Expanded form shows the hidden place values. Like X-ray vision for numbers!` },
          ],
        },

        {
          id: `l03-realworld`,
          type: `real-world`,
          guideText: `Here's something useful, {name}! Expanded form is HOW your brain actually adds big numbers — even when you don't realize it! Adding 234 + 542 mentally? You probably do: 200 + 500 = 700, then 30 + 40 = 70, then 4 + 2 = 6. That's expanded form! Almost every adult who's good at math uses this trick!`,
          familyAdventure: `Together, play EXPANDED FORM POP! Pick a 3-digit number (like 627). POP it apart: 600 + 20 + 7! Then try 4-digit numbers. Try numbers with zeros (like 309 or 580) — trickier! Race each other to break each one apart!`,
          creativePrompt: `Make a PLACE VALUE FORTUNE TELLER! Pick your favorite 3-digit number. Write it BIG in the middle of paper. Around it, draw arrows pointing to: HUNDREDS piece, TENS piece, ONES piece. Inside each arrow, write what each digit really means!`,
        },

        {
          id: `l03-celebration`,
          type: `celebration`,
          message: `Nice work, {name}! You can now write any number in EXPANDED FORM! Each digit becomes its place value. Plus signs connect them. Adding back gives you the original. And ZEROS are placeholders doing invisible but important work! Remi is so proud of you! 🦝`,
          badge: `expanded-form-explorer`,
          badgeName: `Expanded Form Explorer`,
          xpEarned: 50,
        },

      ],
    },
  ],
};

export default MATH_L03;

// ─── Dev asset check ─────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const mags  = MATH_L03.lessons[0].screens.filter(s => s.type === 'magazine').length;
  const game  = MATH_L03.lessons[0].screens.find(s => s.type === 'interactive')?.items?.length ?? 0;
  const quiz  = MATH_L03.lessons[0].screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  console.log(`[LESSON-MATH-L03] Loaded: "Expanded Form" with ${mags} magazine sections, ${game} game items, ${quiz} quiz questions`);
}
