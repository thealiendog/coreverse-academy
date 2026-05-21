// ─────────────────────────────────────────────────────────────────────────────
// MATH  |  L04 — Comparing Numbers with Place Value
// Age band : explorers (6–8)   Guide: remi
// Standards: CCSS 2.NBT.A.4
// REWRITE v2 (May 2026): Grade 1 accessible, REFOCUSED on comparing (CCSS
// 2.NBT.A.4), 1st BIGGER/2nd BIGGER/EQUAL identification game
// Removed: Mars probe story, philosophical "superpower" framing
// ─────────────────────────────────────────────────────────────────────────────

const MATH_L04 = {
  ageBand:   `explorers`,
  subjectId: `math`,
  guide:     `remi`,

  lessons: [
    {
      id:        `math-6-8-04`,
      title:     `Comparing Numbers with Place Value`,
      duration:  12,
      xpReward:  50,
      badge:     `place-value-master`,
      badgeName: `Place Value Master`,

      screens: [

        {
          id: `l04-welcome`,
          type: `welcome`,
          guideText: `Hey {name}, Remi here! You've learned place value, bundling, and expanded form. Today we USE all of it — to COMPARE numbers! Which is bigger: 342 or 234? Place value tells us fast! Let's go!`,
          headline: `Comparing Numbers with Place Value`,
          subtitle: `Using place value to figure out which number is bigger`,
          visual: `/explorer-assets/math/l04-welcome.webp`,
        },

        {
          id: `l04-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Which One Is BIGGER?`,
          paragraphs: [
            `Imagine two scores in a game: 342 and 234. Who won?`,
            `It depends on which number is BIGGER! Both have the same three digits — 2, 3, 4! But they're in different POSITIONS! Place value tells us EXACTLY which is bigger. No guessing needed! Today you'll learn the trick to compare ANY two numbers — even huge ones — in seconds!`,
          ],
          image: `/explorer-assets/math/l04-s1-everywhere.webp`,
          imageCaption: `342 vs 234. Same digits, different positions. Which is bigger?`,
          vocab: [
            { word: `compare`, definition: `To check which is bigger or smaller.`,
              audioPrompt: `To compare is to check which is bigger or smaller. Compare numbers using place value. Check the biggest place first. The bigger digit there wins. Easy trick!` },
            { word: `bigger`,  definition: `More than the other.`,
              audioPrompt: `Bigger means more than the other. When two numbers are different sizes, one is bigger. Place value helps us find the bigger one fast. We just check the leftmost place that's different!` },
            { word: `position`, definition: `WHERE a digit sits.`,
              audioPrompt: `Position is WHERE a digit sits in a number. In 342, the 3 is in hundreds. In 234, the 3 is in tens. Same digit, different positions, different values. Position decides everything!` },
          ],
        },

        {
          id: `l04-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Check the BIGGEST Place First`,
          paragraphs: [
            `Here's the magic trick! When you compare two numbers, START with the BIGGEST place — the LEFTMOST digit!`,
            `Compare 342 and 234. The biggest place is HUNDREDS. In 342, the hundreds digit is 3 = 300! In 234, the hundreds digit is 2 = 200! 300 is more than 200! So 342 wins! You didn't even need to check tens or ones! Always start with the biggest place!`,
          ],
          image: `/explorer-assets/math/l04-s3-comparing.webp`,
          imageCaption: `Check the biggest place first! 342 has 3 hundreds, 234 has 2 hundreds. 342 wins!`,
          vocab: [
            { word: `biggest place`, definition: `The leftmost digit.`,
              audioPrompt: `Biggest place is the leftmost digit. In a 3-digit number, that's hundreds. In a 4-digit number, that's thousands. The biggest place has the most weight when comparing!` },
            { word: `leftmost`,      definition: `Furthest to the left.`,
              audioPrompt: `Leftmost means furthest to the left. The leftmost digit is in the biggest place. Always check leftmost first when comparing. If they're different there, you have your answer!` },
            { word: `wins`,          definition: `Is bigger.`,
              audioPrompt: `Wins means is bigger. When comparing two numbers, the bigger one wins. Like a game! 300 beats 200. So 342 beats 234. The number with the bigger hundreds digit wins!` },
          ],
        },

        {
          id: `l04-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `When Hundreds Are the SAME`,
          paragraphs: [
            `What if the hundreds are EQUAL? Then check the next place — TENS!`,
            `Compare 542 and 583! Hundreds: both 5 — SAME! No winner yet. Move to TENS. In 542, tens digit is 4 = 40. In 583, tens digit is 8 = 80! 80 beats 40! So 583 is BIGGER! When the biggest place ties, you just move down to the next place. Keep going until you find a difference!`,
          ],
          image: `/explorer-assets/math/l04-s4-addition-ready.webp`,
          imageCaption: `Hundreds tie? Check tens! 583 has 8 tens, 542 has 4 tens. 583 wins!`,
          vocab: [
            { word: `same`,    definition: `Equal to.`,
              audioPrompt: `Same means equal to. When two digits in the same place are the same, you can't decide the winner yet. Move to the next place. Same hundreds? Check tens. Same tens? Check ones!` },
            { word: `next place`, definition: `One step to the right.`,
              audioPrompt: `Next place is one step to the right. Hundreds tie? Move to tens. Tens tie? Move to ones. Always move from biggest to smallest place when comparing. Find the first difference!` },
            { word: `difference`, definition: `Where two numbers are not the same.`,
              audioPrompt: `Difference is where two numbers are not the same. When comparing, you're hunting for the first difference. The number with the bigger digit at the first difference wins!` },
          ],
        },

        {
          id: `l04-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `When Tens Are Also the Same`,
          paragraphs: [
            `If hundreds AND tens are equal — check ONES!`,
            `Compare 376 and 379! Hundreds: both 3 — same! Tens: both 7 — same! Move to ONES. In 376, ones is 6. In 379, ones is 9! 9 beats 6! So 379 is BIGGER! See the pattern? Always move from LEFT to RIGHT until you find the first different digit. That digit decides who wins!`,
          ],
          image: `/explorer-assets/math/l04-s2-money.webp`,
          imageCaption: `Hundreds same, tens same? Check ones! 379 has 9 ones, 376 has 6 ones. 379 wins!`,
          vocab: [
            { word: `pattern`,  definition: `Something that repeats.`,
              audioPrompt: `A pattern is something that repeats. The comparing pattern: check biggest place first. If same, check next. If same, check next. Keep going! It's the same rule every time!` },
            { word: `decides`,  definition: `Makes the answer.`,
              audioPrompt: `Decides means makes the answer. The first different digit decides who wins. If you find a difference in tens, tens decide. Don't even need to check ones. The biggest different place decides!` },
            { word: `LEFT to RIGHT`, definition: `Read from left side to right side.`,
              audioPrompt: `LEFT to RIGHT means read from the left side to the right side. Always compare LEFT to RIGHT when checking numbers. Biggest place first, then move right one place at a time!` },
          ],
        },

        {
          id: `l04-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `When Numbers Are EQUAL`,
          paragraphs: [
            `What if EVERY single digit matches? Then the numbers are EQUAL — they're the SAME!`,
            `Compare 524 and 524! Hundreds: both 5! Tens: both 2! Ones: both 4! All match! These numbers are EQUAL. Neither is bigger. They're the same amount! "Equal" means same — like two cookies that are exactly the same size. In math, we write "equal" like this: 524 = 524!`,
          ],
          image: `/explorer-assets/math/l04-s5-mistakes.webp`,
          imageCaption: `All digits match = numbers are EQUAL!`,
          vocab: [
            { word: `equal`,    definition: `The same amount.`,
              audioPrompt: `Equal means the same amount. Two numbers are equal when every digit matches in every place. 524 equals 524. The amounts are exactly the same. Neither one is bigger!` },
            { word: `match`,    definition: `Are the same.`,
              audioPrompt: `Match means are the same. When two digits match in the same place, they're equal. When ALL the digits match in ALL the places, the whole numbers are equal!` },
            { word: `equal sign`, definition: `The = symbol.`,
              audioPrompt: `An equal sign is the equals symbol — two short lines on top of each other. We use it to show two amounts are the same. 5 plus 3 equals 8. The equal sign means same as!` },
          ],
        },

        {
          id: `l04-mag-6`,
          type: `magazine`,
          section: 6,
          headline: `Comparing in Real Life`,
          paragraphs: [
            `Comparing numbers is SUPER useful in real life, {name}!`,
            `When you compare prices to find the cheaper toy — that's comparing! When you check who has more candies — comparing! When you see who scored higher in a game — comparing! When you check who's older in the family — comparing! Place value comparison works EVERY time. You'll use this skill your whole life!`,
          ],
          image: `/explorer-assets/math/l04-s6-superpower.webp`,
          imageCaption: `Comparing numbers — useful every day of your life!`,
          vocab: [
            { word: `useful`,  definition: `Helpful in many situations.`,
              audioPrompt: `Useful means helpful in many situations. Comparing numbers is super useful. You use it when shopping, playing games, checking scores. It's one of the most-used math skills in real life!` },
            { word: `cheaper`, definition: `Costs less.`,
              audioPrompt: `Cheaper means costs less. To find the cheaper toy, you compare prices. The smaller price wins. Place value tells you which price is smaller — without any guessing!` },
            { word: `life`,    definition: `Your whole journey.`,
              audioPrompt: `Life is your whole journey. You'll use comparing numbers your whole life. Every time you check prices, scores, ages, weights, or measurements. Math skills you learn now help you forever!` },
          ],
        },

        {
          id: `l04-game`,
          type: `interactive`,
          format: `drag-match`,
          guideText: `Let's try it, {name}! Here are 4 number pairs. Drag each one — which number is bigger? Or are they EQUAL?`,
          buckets: [
            { id: `first_bigger`,  label: `⬅️ 1st is BIGGER`,  color: `#34D399` },
            { id: `second_bigger`, label: `➡️ 2nd is BIGGER`, color: `#A78BFA` },
            { id: `equal`,         label: `🟰 EQUAL`,           color: `#FBBF24` },
          ],
          items: [
            { id: `l04-g1`, image: `l04-game-1.webp`, label: `342  vs  234`,
              matchPhrase: `Yes! 342 is BIGGER. The hundreds digit decides — 3 hundreds beats 2 hundreds!`,
              correctMatch: `first_bigger` },
            { id: `l04-g2`, image: `l04-game-2.webp`, label: `456  vs  654`,
              matchPhrase: `Great! 654 is BIGGER. The hundreds digit decides — 6 hundreds beats 4 hundreds!`,
              correctMatch: `second_bigger` },
            { id: `l04-g3`, image: `l04-game-3.webp`, label: `789  vs  789`,
              matchPhrase: `Yes! They're EQUAL! Every digit matches — 7 hundreds, 8 tens, 9 ones. Same number!`,
              correctMatch: `equal` },
            { id: `l04-g4`, image: `l04-game-4.webp`, label: `523  vs  532`,
              matchPhrase: `Perfect! 532 is BIGGER. Hundreds tie (both 5). Check tens — 3 tens vs 2 tens. 532 wins!`,
              correctMatch: `second_bigger` },
          ],
        },

        {
          id: `l04-quiz`,
          type: `quiz`,
          guideText: `Let's see what you remember, {name}!`,
          questions: [
            { id: `l04-q1`, format: `multiple-choice`,
              question: `When comparing two numbers, which PLACE do you check first?`,
              options: [`Ones`, `The BIGGEST place (leftmost digit)`, `Middle`, `Random`],
              correctIndex: 1,
              explanation: `Always check the BIGGEST place first — the leftmost digit. In 3-digit numbers, that's hundreds!` },
            { id: `l04-q2`, format: `multiple-choice`,
              question: `Which number is BIGGER: 342 or 234?`,
              options: [`234`, `342 — because 3 hundreds beats 2 hundreds`, `Same`, `Can't tell`],
              correctIndex: 1,
              explanation: `342 is bigger! Both have the same digits, but 342 has 3 in hundreds (300). 234 has 2 in hundreds (200). 300 beats 200!` },
            { id: `l04-q3`, format: `multiple-choice`,
              question: `If two numbers have the SAME hundreds digit, what do you do?`,
              options: [`Give up`, `Check the TENS digit next`, `Flip a coin`, `Add them`],
              correctIndex: 1,
              explanation: `When hundreds tie, check tens. If tens tie too, check ones. Keep going until you find a difference!` },
            { id: `l04-q4`, format: `true-false`,
              question: `When EVERY digit matches in EVERY place, the two numbers are EQUAL.`,
              correctAnswer: true,
              explanation: `True! 524 = 524. All digits match in all places. Neither is bigger — they're the same amount!` },
            { id: `l04-q5`, format: `fill-blank`,
              question: `Compare 376 and 379. Hundreds same. Tens same. Ones: 6 vs 9. ___ is bigger.`,
              options: [`379`, `376`, `Both same`, `Neither`],
              correctIndex: 0,
              explanation: `379 is bigger! Hundreds tie (3), tens tie (7), but ones are different — 9 beats 6. So 379 wins!` },
            { id: `l04-q6`, format: `multiple-choice`,
              question: `Compare 542 and 583. Which is BIGGER?`,
              options: [`542`, `583 — because 8 tens beats 4 tens (hundreds tied at 5)`, `Equal`, `Can't compare`],
              correctIndex: 1,
              explanation: `583 is bigger! Both have 5 hundreds (tied). But 583 has 8 tens vs 542's 4 tens. 80 beats 40!` },
          ],
        },

        {
          id: `l04-realworld`,
          type: `real-world`,
          guideText: `Comparing numbers is everywhere, {name}! At the store — which toy costs less? Comparing prices! In a game — who scored more points? Comparing scores! At home — who's older? Comparing ages! Place value lets you compare ANY numbers in seconds. You'll use this skill forever!`,
          familyAdventure: `Play the BIGGER NUMBER GAME! Everyone writes a 3-digit number on a slip of paper. Mix them up. Pick two at a time. Compare them out loud using place value: "342 has 3 hundreds, 234 has 2 hundreds — so 342 wins!" Take turns being the judge!`,
          creativePrompt: `Make a NUMBER COMPARISON CHART! Draw two columns. Pick a 3-digit number for each. Then write: HUNDREDS, TENS, ONES. Fill in each column. Circle the bigger number in each row! Decide who wins by checking the BIGGEST place first!`,
        },

        {
          id: `l04-celebration`,
          type: `celebration`,
          message: `Awesome, {name}! You can now COMPARE any two numbers using place value! Check the BIGGEST place first. If tied, move to the next place. Keep going until you find a difference! When ALL digits match — they're EQUAL! You finished the Place Value Series. Remi is so proud! 🦝`,
          badge: `place-value-master`,
          badgeName: `Place Value Master`,
          xpEarned: 50,
        },

      ],
    },
  ],
};

export default MATH_L04;

// ─── Dev asset check ─────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const mags  = MATH_L04.lessons[0].screens.filter(s => s.type === 'magazine').length;
  const game  = MATH_L04.lessons[0].screens.find(s => s.type === 'interactive')?.items?.length ?? 0;
  const quiz  = MATH_L04.lessons[0].screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  console.log(`[LESSON-MATH-L04] Loaded: "Comparing Numbers" with ${mags} magazine sections, ${game} game items, ${quiz} quiz questions`);
}
