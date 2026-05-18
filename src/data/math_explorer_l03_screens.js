// ─────────────────────────────────────────────────────────────────────────────
// MATH  |  L03 — Expanded Form
// Age band : explorers (6–8)   Guide: remi
// Standards: CCSS 2.NBT.A.3 / 4.NBT.A.2 (multi-digit numbers in expanded form)
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
          guideText: `Hi {name}, Remi here! You know place value. You know bundling. Today we learn a SKILL — how to WRITE a number's place values out on paper. It's called EXPANDED FORM. Sounds fancy, but it's just breaking numbers apart so you can SEE what each digit is really worth. Once you can do this, big numbers become totally clear. Let's go.`,
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
            `Look at the number 347. From outside, it just looks like three digits in a row.`,
            `But you and I know better. We know place value HIDES inside it. The 3 isn't just 3 — it's 300. The 4 isn't just 4 — it's 40. The 7 is 7. The whole number is really 300 + 40 + 7 ALL ADDED TOGETHER. That's what EXPANDED FORM does — it WRITES OUT the hidden place values. Standard form: 347. Expanded form: 300 + 40 + 7. Same number, two ways of writing it. Expanded form is like X-ray vision for numbers — you see EXACTLY what's inside.`,
          ],
          image: `/explorer-assets/math/l03-s1-hidden-inside.webp`,
          imageCaption: `347 LOOKS like 3 digits. But INSIDE: 300 + 40 + 7. Expanded form makes the hidden values visible.`,
          vocab: [
            { word: `expanded form`,  definition: `Writing a number as the SUM of its place values. 347 = 300 + 40 + 7.`,
              audioPrompt: `Expanded form, {name}, is writing a number as the sum of its place values. For example, 347 expanded equals 300 plus 40 plus 7. You're spreading the number out, showing each piece. It's called expanded because the number gets longer when you write it this way. Same value, just spread out so you can see it all.` },
            { word: `standard form`,  definition: `The NORMAL way to write a number — just the digits. 347 is STANDARD form.`,
              audioPrompt: `Standard form, {name}, is the normal way to write a number — just the digits all together. 347 is standard form. So is 6, or 25, or 9,000. Standard form is what you see most of the time. It's compact. Expanded form takes the same number and stretches it out to show each place's value. Both are right. Both are useful.` },
            { word: `hidden`,         definition: `Not visible at first. PLACE VALUES are HIDDEN inside standard form — expanded form reveals them.`,
              audioPrompt: `Hidden, {name}, means not visible at first. Place values are hidden inside standard form. When you see 347, you can't immediately see that the 3 means three hundred. Your brain has to remember the place value rule. Expanded form does that work for you. It shows the hidden pieces out in the open.` },
          ],
        },

        {
          id: `l03-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Breaking a Number APART`,
          paragraphs: [
            `Let's practice. Take the number 528. How do we write it in EXPANDED FORM?`,
            `Look at each digit, starting from the LEFT. The 5 is in the HUNDREDS place — it's worth 500. The 2 is in the TENS place — it's worth 20. The 8 is in the ONES place — it's worth 8. Now write them out with PLUS signs between: 500 + 20 + 8. That's the expanded form. Done! Try another one. 936. 9 = 900. 3 = 30. 6 = 6. Expanded form: 900 + 30 + 6. The trick: each digit becomes its place value. Add them with plus signs. Standard becomes expanded.`,
          ],
          image: `/explorer-assets/math/l03-s2-break-apart.webp`,
          imageCaption: `Breaking 528 apart: 5 → 500, 2 → 20, 8 → 8. Add with + signs: 500 + 20 + 8.`,
          vocab: [
            { word: `break apart`,    definition: `To SEPARATE into pieces. We BREAK APART a number into its place values for expanded form.`,
              audioPrompt: `To break apart, {name}, is to separate into pieces. We break apart a number into its place values for expanded form. The number 528 breaks apart into 500, 20, and 8. Each piece represents one place. Once broken apart, you can see each piece's value. Then you add them back with plus signs to write expanded form.` },
            { word: `digit becomes`,  definition: `Each DIGIT BECOMES its place value. The 5 in hundreds BECOMES 500.`,
              audioPrompt: `Digit becomes, {name}, means each digit becomes its place value when written in expanded form. The 5 in the hundreds place becomes 500. The 2 in the tens place becomes 20. The 8 in the ones place stays as 8. Each digit takes on its true value based on where it sits. That's place value made visible.` },
            { word: `plus signs`,     definition: `The + SYMBOL. Expanded form uses PLUS SIGNS to connect the place values.`,
              audioPrompt: `Plus signs, {name}, are the plus symbol. Expanded form uses plus signs to connect the place values. Like 500 plus 20 plus 8. The plus signs show that all these pieces ADD UP to the original number. Without the plus signs, it would just be a list of numbers. With them, it's a sum that equals the whole.` },
          ],
        },

        {
          id: `l03-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `ADD Them Back Up`,
          paragraphs: [
            `Here's a great test — if you do expanded form right, ADDING the pieces back gives you the ORIGINAL number.`,
            `Take 528 → 500 + 20 + 8. Add it: 500 + 20 = 520. Then 520 + 8 = 528. Right back to where we started! Try 936 → 900 + 30 + 6. 900 + 30 = 930. 930 + 6 = 936. Perfect. This is your check — if expanded form doesn't add back to standard form, you made a mistake. Try 814 → 800 + 10 + 4. Add: 800 + 10 = 810. 810 + 4 = 814. Yes! Expanded form is just standard form, spread out so you can SEE the pieces. Add them back, and they fit together perfectly.`,
          ],
          image: `/explorer-assets/math/l03-s3-add-back.webp`,
          imageCaption: `Adding back: 500 + 20 + 8 = 528. Same number, just shown as a sum. Use this as your CHECK.`,
          vocab: [
            { word: `add back`,       definition: `Putting expanded form PIECES TOGETHER. ADD BACK to check your work.`,
              audioPrompt: `To add back, {name}, is putting expanded form pieces together to return to standard form. It's your check. If 500 plus 20 plus 8 equals 528, you did expanded form right. If it doesn't add back to the original, something's off. Always add back to make sure your expanded form is correct.` },
            { word: `check`,          definition: `To MAKE SURE you're right. Adding pieces BACK is your expanded form CHECK.`,
              audioPrompt: `To check, {name}, is to make sure you're right. Adding pieces back is your expanded form check. It catches mistakes. If you accidentally write 500 plus 200 plus 8 (when it should be 500 plus 20 plus 8), adding back gives you 708 — not 528. The check shows you the error. Always verify your work.` },
            { word: `equal`,          definition: `The SAME amount. Expanded form and standard form are EQUAL — same number, different writing.`,
              audioPrompt: `Equal, {name}, means the same amount. Expanded form and standard form are equal. They're the same number, just written differently. Like saying "twelve" or "a dozen" — different words, same amount. Expanded form is just another way to write what the number is.` },
          ],
        },

        {
          id: `l03-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `What About ZEROS?`,
          paragraphs: [
            `Trickier case — what if a number has a ZERO in the middle? Like 405. Or 207. Or 360.`,
            `Take 405. The 4 is hundreds (400). The 0 is tens (0). The 5 is ones (5). Expanded form: 400 + 0 + 5 — but we usually just WRITE 400 + 5 (since adding 0 doesn't change anything). Take 360. The 3 is hundreds (300). The 6 is tens (60). The 0 is ones (0). Expanded form: 300 + 60 + 0, or just 300 + 60. The ZERO doesn't have a value to write — but it's STILL DOING A JOB. It's a PLACEHOLDER. Without that 0 in 405, you'd have 45 (no hundreds at all!). The zero KEEPS the 4 in the hundreds spot. It's invisible work, but crucial.`,
          ],
          image: `/explorer-assets/math/l03-s4-zeros-matter.webp`,
          imageCaption: `405: 400 + 0 + 5 (just 400 + 5). The ZERO holds the spot — keeps the 4 in hundreds, the 5 in ones.`,
          vocab: [
            { word: `zero`,           definition: `The DIGIT 0. Means nothing in that place — but holds the SPOT for other digits.`,
              audioPrompt: `Zero, {name}, is the digit zero. It means nothing in that place — but it holds the spot for other digits. In 405, the zero in the tens place means there are no tens. But it keeps the 4 in the hundreds place and the 5 in the ones place. Without zero, our number system wouldn't work. Zero is the silent hero.` },
            { word: `placeholder`,    definition: `A digit that HOLDS THE SPOT. ZERO is a PLACEHOLDER — keeps other digits in their right place.`,
              audioPrompt: `A placeholder, {name}, is a digit that holds the spot. Zero is a placeholder. It keeps other digits in their right place. In 405, the zero in the middle holds the tens spot so the 4 stays in hundreds and the 5 stays in ones. Take the zero out and you get 45 — a totally different number. Placeholders are invisible work that matters a lot.` },
            { word: `invisible work`, definition: `Important JOB done QUIETLY. Zero does INVISIBLE WORK by holding places.`,
              audioPrompt: `Invisible work, {name}, is important job done quietly. Zero does invisible work by holding places. It looks like nothing, but it's keeping the whole number organized. The 4 in 405 only means 400 because zero is there holding the tens spot. Take that quiet zero away, and the whole meaning changes. Sometimes the most important workers are the quiet ones.` },
          ],
        },

        {
          id: `l03-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Bigger Numbers, Same Trick`,
          paragraphs: [
            `Once you can expand 3-digit numbers, you can expand ANY number. The trick is the same.`,
            `Take 3,248. Four digits! 3 is in the THOUSANDS place (3,000). 2 is in the HUNDREDS place (200). 4 is in the TENS place (40). 8 is in the ONES place (8). Expanded form: 3,000 + 200 + 40 + 8. See? Just one more place, one more piece. Try 5,107. 5 = 5,000. 1 = 100. 0 = 0. 7 = 7. Expanded: 5,000 + 100 + 7 (skip the zero). It doesn't matter how big the number — the same trick works. Each digit becomes its place value. Add them all with plus signs. Done.`,
          ],
          image: `/explorer-assets/math/l03-s5-bigger-numbers.webp`,
          imageCaption: `3,248 = 3,000 + 200 + 40 + 8. One more place, one more piece. The trick scales up.`,
          vocab: [
            { word: `thousands`,      definition: `The 4th place from the right. THOUSANDS place value: 1,000 each.`,
              audioPrompt: `Thousands, {name}, is the fourth place from the right. The thousands place value is one thousand each. So a 3 in the thousands place means three thousand. A 9 in the thousands place means nine thousand. After thousands comes ten thousands, hundred thousands, then millions. The pattern keeps going up.` },
            { word: `same trick`,     definition: `The METHOD doesn't change. SAME TRICK works for big numbers as small.`,
              audioPrompt: `Same trick, {name}, means the method doesn't change. The same trick that expands 3-digit numbers expands 4-digit, 5-digit, and bigger numbers too. Each digit becomes its place value. Add with plus signs. Skip the zeros if you want. That's it. The trick scales up to any number you can think of.` },
            { word: `scales up`,      definition: `Works for BIGGER amounts. Expanded form SCALES UP to huge numbers.`,
              audioPrompt: `Scales up, {name}, means works for bigger amounts. Expanded form scales up to huge numbers. Hundreds, thousands, millions, billions — the same expansion technique works. Each new digit becomes its place value. You just have more pieces to add. The system was designed to scale. That's why it's so powerful.` },
          ],
        },

        {
          id: `l03-mag-6`,
          type: `magazine`,
          section: 6,
          headline: `A Tool for Understanding`,
          paragraphs: [
            `Why bother with expanded form? Because it's a POWER TOOL for understanding numbers.`,
            `When you see 4,562 in expanded form (4,000 + 500 + 60 + 2), you really SEE what each digit does. You stop reading numbers as random digit-strings and start seeing them as STRUCTURED things. This becomes super important when you start adding and subtracting BIG numbers — which we'll do soon. Expanded form is like the X-RAY behind regular math. Use it whenever a number feels confusing. Break it apart. See the pieces. Understand. Then put it back together. Math teachers love expanded form because it shows that you UNDERSTAND place value — not just memorized it. From now on, you'll see numbers differently.`,
          ],
          image: `/explorer-assets/math/l03-s6-power-tool.webp`,
          imageCaption: `Expanded form = power tool. Use it whenever a number feels confusing. Break apart → understand → reassemble.`,
          vocab: [
            { word: `power tool`,     definition: `Something HELPFUL and STRONG. Expanded form is a POWER TOOL for math.`,
              audioPrompt: `A power tool, {name}, is something helpful and strong. Expanded form is a power tool for math. It helps you understand any number, no matter the size. It makes confusing numbers clear. It catches mistakes. It builds the foundation for adding, subtracting, and multiplying big numbers. Power tools make hard jobs easier. Expanded form does that for math.` },
            { word: `understand`,     definition: `To really GET something. Expanded form helps you UNDERSTAND numbers — not just memorize them.`,
              audioPrompt: `To understand, {name}, is to really get something. Expanded form helps you understand numbers — not just memorize them. There's a difference. You can memorize that 4 in 462 means 400. But when you write it as 400 plus 60 plus 2, you SEE it. Understanding sticks. Memorization fades. Expanded form builds true understanding of place value.` },
            { word: `structured`,     definition: `Built in an ORGANIZED way. Numbers are STRUCTURED — each digit has a job.`,
              audioPrompt: `Structured, {name}, means built in an organized way. Numbers are structured — each digit has a job. They're not random. Each one has a specific position with a specific value. Expanded form makes that structure visible. Once you see numbers as structured, you can work with them more confidently. They stop feeling like a mystery.` },
          ],
        },

        {
          id: `l03-game`,
          type: `interactive`,
          format: `drag-match`,
          guideText: `Let's see what you remember, {name}.`,
          buckets: [
            { id: `fact`, label: `✅ Yes, that's true!`, color: `#34D399` },
            { id: `myth`, label: `❌ No way!`,         color: `#F87171` },
          ],
          items: [
            { id: `l03-g1`, image: `l03-game-1.webp`, label: `The PIECES of expanded form ADD UP to the original number — that's how you can check.`,
              matchPhrase: `Yes! 500 + 20 + 8 = 528. If your expanded form adds back to the original, you did it right. It's a built-in check.`,
              correctMatch: `fact` },
            { id: `l03-g2`, image: `l03-game-2.webp`, label: `ZERO is a PLACEHOLDER — in 405, the zero holds the tens spot so 4 stays in hundreds.`,
              matchPhrase: `True! Without that zero, 405 would become 45. Zero does invisible work, keeping all the digits in their right places.`,
              correctMatch: `fact` },
            { id: `l03-g3`, image: `l03-game-3.webp`, label: `The number 547 cannot be broken apart — it has to stay as one whole chunk.`,
              matchPhrase: `Not at all! Every number breaks apart into its place values. 547 = 500 + 40 + 7. That's what expanded form does — break it apart.`,
              correctMatch: `myth` },
            { id: `l03-g4`, image: `l03-game-4.webp`, label: `Zeros in numbers don't matter — 405 means the same thing as 45.`,
              matchPhrase: `Definitely not! 405 has FOUR HUNDRED and FIVE — totally different from 45. The zero is critical. It's holding the tens place.`,
              correctMatch: `myth` },
          ],
        },

        {
          id: `l03-quiz`,
          type: `quiz`,
          guideText: `Let's see what you remember, {name}.`,
          questions: [
            { id: `l03-q1`, format: `multiple-choice`,
              question: `What is EXPANDED FORM?`,
              options: [`A balloon`, `Writing a number as the SUM of its place values (like 347 = 300 + 40 + 7)`, `A type of game`, `A bigger number`],
              correctIndex: 1,
              explanation: `Expanded form writes a number as the sum of its place values. 347 = 300 + 40 + 7. Same number, just spread out so you can see each piece.` },
            { id: `l03-q2`, format: `multiple-choice`,
              question: `Write 528 in EXPANDED FORM:`,
              options: [`5 + 2 + 8`, `500 + 20 + 8`, `52 + 8`, `5,000 + 200 + 80`],
              correctIndex: 1,
              explanation: `500 + 20 + 8. The 5 is hundreds (500), the 2 is tens (20), the 8 is ones (8). Add them all up = 528.` },
            { id: `l03-q3`, format: `multiple-choice`,
              question: `What is the ZERO doing in the number 405?`,
              options: [`Nothing`, `Holding the TENS place — keeping 4 in hundreds and 5 in ones`, `Adding 0`, `Decorating`],
              correctIndex: 1,
              explanation: `It's a placeholder! Zero holds the tens place so the 4 stays in hundreds and the 5 stays in ones. Without it, you'd have 45 — a totally different number.` },
            { id: `l03-q4`, format: `true-false`,
              question: `If you ADD the pieces of expanded form, you should get the ORIGINAL number back.`,
              correctAnswer: true,
              explanation: `True! 500 + 20 + 8 = 528. That's how you check your work. If the pieces don't add back to the original, something's wrong.` },
            { id: `l03-q5`, format: `fill-blank`,
              question: `3,248 in expanded form is 3,000 + 200 + 40 + ___.`,
              options: [`8`, `4`, `40`, `0`],
              correctIndex: 0,
              explanation: `8! The 8 is in the ones place, so its value is just 8. Full expanded form: 3,000 + 200 + 40 + 8 = 3,248.` },
            { id: `l03-q6`, format: `multiple-choice`,
              question: `Why is EXPANDED FORM useful?`,
              options: [`It's not`, `It shows the HIDDEN PLACE VALUES inside any number — makes them visible`, `Only for tests`, `Just for fun`],
              correctIndex: 1,
              explanation: `Expanded form shows the hidden place values inside any number. It's like X-ray vision. Helps you understand numbers, catch mistakes, and prepare for big-number addition and subtraction.` },
          ],
        },

        {
          id: `l03-realworld`,
          type: `real-world`,
          guideText: `Here's something useful, {name}. Expanded form is HOW your brain actually adds and subtracts BIG numbers — even when you don't realize it. When you mentally add 234 + 542, you're probably doing this: 200 + 500 = 700. 30 + 40 = 70. 4 + 2 = 6. Total: 776. That's expanded form in action! Adding place values separately, then putting them together. Almost every adult who's good at math uses this trick mentally. Once you practice expanded form on paper, you can start doing it in your head. That's how mental math gets faster. The "expanded form trick" turns scary big numbers into easy small additions.`,
          familyAdventure: `Together, play EXPANDED FORM POP. Pick a 3-digit number (like 627). Together, "POP" it apart into expanded form: 600 + 20 + 7. Then make up some 4-digit numbers and do the same. Try numbers with zeros (like 309 or 580) — those are trickier. See how fast you can break each one apart. Race each other. Bonus — adding the pieces back together to check.`,
          creativePrompt: `Make a PLACE VALUE FORTUNE TELLER. Pick your favorite 3-digit number. On a piece of paper, write the number BIG in the middle. Around it, draw arrows pointing to: HUNDREDS piece, TENS piece, ONES piece. Inside each arrow, write what each digit really means in expanded form. Decorate it like a math wizard's secret diagram. Stick it on your wall.`,
        },

        {
          id: `l03-celebration`,
          type: `celebration`,
          message: `Nice work, {name}! You can now write any number in EXPANDED FORM. Each digit becomes its place value. Plus signs connect them. Adding them back gives you the original number. And ZEROS are placeholders doing invisible but important work. This is one of the most useful tools in math — and you've got it. Next lesson, we'll see WHY place value matters so much when we start doing bigger things. See you there! — Remi 🦝`,
          badge: `expanded-form-explorer`,
          badgeName: `Expanded Form Explorer`,
          xpEarned: 50,
        },

      ],
    },
  ],
};

export default MATH_L03;

// ─── Dev asset check ───
if (import.meta.env?.DEV) {
  const mags  = MATH_L03.lessons[0].screens.filter(s => s.type === 'magazine').length;
  const game  = MATH_L03.lessons[0].screens.find(s => s.type === 'interactive')?.items?.length ?? 0;
  const quiz  = MATH_L03.lessons[0].screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  console.log(`[LESSON-MATH-L03] Loaded: "Expanded Form" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
}
