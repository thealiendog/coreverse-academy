// ─────────────────────────────────────────────────────────────────────────────
// MATH  |  L06 — Adding Multi-Digit Numbers
// Age band : explorers (6–8)   Guide: remi
// Standards: CCSS 2.NBT.B.5 / 2.NBT.B.7
// REWRITE v2 (May 2026): Grade 1 accessible, ONES/TENS/HUNDREDS column
// identification game tests place-by-place addition matching
// ─────────────────────────────────────────────────────────────────────────────

const MATH_L06 = {
  ageBand:   `explorers`,
  subjectId: `math`,
  guide:     `remi`,

  lessons: [
    {
      id:        `math-6-8-06`,
      title:     `Adding Multi-Digit Numbers`,
      duration:  12,
      xpReward:  50,
      badge:     `addition-starter`,
      badgeName: `Multi-Digit Addition Starter`,

      screens: [

        {
          id: `l06-welcome`,
          type: `welcome`,
          guideText: `Hey {name}, Remi here! Time for the FUN part — using your place value foundation to ADD! Today we'll add BIG numbers — with 2, 3, or more digits. The secret? Break it apart by PLACE! Let's go!`,
          headline: `Adding Multi-Digit Numbers`,
          subtitle: `The secret to adding any size number — break it apart by place`,
          visual: `/explorer-assets/math/l06-welcome.webp`,
        },

        {
          id: `l06-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `From SMALL Numbers to BIGGER Ones`,
          paragraphs: [
            `You already know how to add SMALL numbers! 3 + 4 = 7. 5 + 2 = 7. 6 + 3 = 9. Easy!`,
            `But what about BIGGER numbers? Like 234 + 152? Three digits each! Adding all at once would be a MESS. Lucky for us, we don't HAVE to! Multi-digit addition has a smart trick — break it into SMALLER additions you already know! Each digit only gets added to its MATCH! Easy small problems!`,
          ],
          image: `/explorer-assets/math/l06-s1-bigger-numbers.webp`,
          imageCaption: `From 3 + 4 to 234 + 152. Same easy idea — broken into small additions!`,
          vocab: [
            { word: `multi-digit`, definition: `A number with more than 1 digit.`,
              audioPrompt: `Multi-digit is a number with more than 1 digit. 47 is multi-digit. So is 234. So is 1,089! Adding multi-digit numbers uses the SAME skill as adding single digits — applied to each place!` },
            { word: `add`,         definition: `To combine two amounts.`,
              audioPrompt: `To add is to combine two amounts. When you add, you join numbers together to find a total. Adding has been with you for years. Now you'll learn to add bigger numbers — in pieces!` },
            { word: `break apart`, definition: `To separate into smaller pieces.`,
              audioPrompt: `To break apart is to separate into smaller pieces. We break apart big additions into easy small ones. Instead of 234 plus 152 all at once — three pieces! Each one easy!` },
          ],
        },

        {
          id: `l06-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `The BIG Idea: PLACE BY PLACE`,
          paragraphs: [
            `Here's the BIG IDEA! When you add multi-digit numbers, you add EACH PLACE SEPARATELY!`,
            `ONES get added to ONES. TENS get added to TENS. HUNDREDS get added to HUNDREDS. They DON'T mix! Take 234 + 152. Ones: 4 + 2 = 6! Tens: 3 + 5 = 8 (which is 30 + 50 = 80)! Hundreds: 2 + 1 = 3 (which is 200 + 100 = 300)! Combine: 300 + 80 + 6 = 386!`,
          ],
          image: `/explorer-assets/math/l06-s2-place-by-place.webp`,
          imageCaption: `Add PLACE BY PLACE. Ones to ones, tens to tens, hundreds to hundreds!`,
          vocab: [
            { word: `place by place`, definition: `Adding one column at a time.`,
              audioPrompt: `Place by place is adding one column at a time. Ones column first. Then tens column. Then hundreds. Each column on its own. No mixing! The columns are like separate lanes!` },
            { word: `separately`,     definition: `Each one alone, not mixed.`,
              audioPrompt: `Separately means each one alone, not mixed. Add each place separately for accurate answers. The ones place doesn't help the tens place. Each handles its own digits!` },
            { word: `combine`,        definition: `To put together.`,
              audioPrompt: `To combine is to put together. After adding each place, combine the pieces for your final answer. 300 plus 80 plus 6 equals 386. Building the answer from pieces!` },
          ],
        },

        {
          id: `l06-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Addition on the MAT`,
          paragraphs: [
            `Want to SEE multi-digit addition happen? Use a place value MAT!`,
            `Let's add 234 + 152. Build BOTH numbers on the mat — in the same columns! Put 2 flats + 3 rods + 4 singles for 234. THEN ADD 1 flat + 5 rods + 2 singles for 152! The mat now has: 3 flats + 8 rods + 6 singles = 386! No regrouping needed (no column went over 9)!`,
          ],
          image: `/explorer-assets/math/l06-s3-mat-addition.webp`,
          imageCaption: `Add on the mat: combine blocks in each column!`,
          vocab: [
            { word: `combine blocks`, definition: `Join the blocks in each column.`,
              audioPrompt: `Combine blocks means join the blocks in each column. Two flats plus one flat is three flats. Three rods plus five rods is eight rods. The mat lets you SEE each addition happen!` },
            { word: `same column`,    definition: `In the same lane on the mat.`,
              audioPrompt: `Same column means in the same lane on the mat. Blocks from both numbers go in the same column by place. All ones from both numbers go in the ones column. The mat enforces this!` },
            { word: `training tool`,  definition: `Something you practice with.`,
              audioPrompt: `A training tool is something you practice with. The mat is your training tool for confident addition. Use it until adding feels natural. Eventually your brain does the work!` },
          ],
        },

        {
          id: `l06-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `The 3-STEP Method`,
          paragraphs: [
            `Here's the 3-STEP METHOD for multi-digit addition!`,
            `STEP 1: ADD THE ONES first! Look at both ones digits. Add them. Write the answer in the ones place. STEP 2: ADD THE TENS! Same thing for tens. STEP 3: ADD THE HUNDREDS! Same for hundreds! Always start from the RIGHT (ones) and work LEFT! Try 532 + 246: Ones: 2+6=8. Tens: 3+4=7. Hundreds: 5+2=7. Answer: 778!`,
          ],
          image: `/explorer-assets/math/l06-s4-three-step.webp`,
          imageCaption: `3 steps: 1) Ones, 2) Tens, 3) Hundreds. Right to left!`,
          vocab: [
            { word: `start from right`, definition: `Begin at the ones side.`,
              audioPrompt: `Start from the right means begin at the ones side. Add ones first, then tens, then hundreds. Right to left. Why? Because regrouping later works best this way!` },
            { word: `work left`,        definition: `Move toward bigger places.`,
              audioPrompt: `Work left means move toward bigger places. After ones, move left to tens. After tens, move left to hundreds. Right-to-left is the universal rule of multi-digit math!` },
            { word: `formal method`,    definition: `A specific order of steps.`,
              audioPrompt: `A formal method is a specific order of steps. The 3-step method makes addition reliable. Always the same sequence — ones first, then tens, then hundreds!` },
          ],
        },

        {
          id: `l06-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `LINING UP Matters!`,
          paragraphs: [
            `Here's something SUPER important — when you write addition on paper, LINE UP the digits!`,
            `Write the first number. Write the second DIRECTLY UNDERNEATH — ones under ones! Tens under tens! Hundreds under hundreds! Draw a line. THEN add! If digits aren't lined up, you might add ones to tens — DISASTER! Always — ONES UNDER ONES! One of the most important habits in math!`,
          ],
          image: `/explorer-assets/math/l06-s5-line-up.webp`,
          imageCaption: `LINE UP the digits! Ones under ones, tens under tens!`,
          vocab: [
            { word: `line up`,        definition: `Stack digits in proper columns.`,
              audioPrompt: `To line up is to stack digits in proper columns. Ones go under ones. Tens go under tens. Hundreds go under hundreds. Lining up keeps each place addition correct!` },
            { word: `directly under`, definition: `Right below in the same column.`,
              audioPrompt: `Directly under means right below in the same column. The ones digit of the second number goes directly under the ones digit of the first. Direct alignment keeps everything in place!` },
            { word: `disaster`,       definition: `A big mistake.`,
              audioPrompt: `A disaster is a big mistake. Wrong line-up creates a disaster — wrong answer! Add the tens digit to the ones digit and your answer is way off. Always check alignment!` },
          ],
        },

        {
          id: `l06-mag-6`,
          type: `magazine`,
          section: 6,
          headline: `Foundation Makes It Easy`,
          paragraphs: [
            `{name} — this is WHY place value matters so much!`,
            `Without it, adding 234 + 152 would feel impossible! WITH it, you break it into three tiny additions: 4 + 2, 3 + 5, 2 + 1. EASY! The "scary" multi-digit problem becomes three comfortable small ones! That's the POWER of a strong foundation. You've BUILT yours! Now you can tackle ANY addition!`,
          ],
          image: `/explorer-assets/math/l06-s6-strong-foundation.webp`,
          imageCaption: `Strong foundation → confident math!`,
          vocab: [
            { word: `confident`,   definition: `Sure of your ability.`,
              audioPrompt: `Confident means sure of your ability. With strong place value, you can be confident in addition. Confidence comes from understanding — not guessing. You know WHY each step works!` },
            { word: `comfortable`, definition: `Easy and natural.`,
              audioPrompt: `Comfortable means easy and natural. Multi-digit addition feels comfortable with place value. The big problems break into small ones. Each piece is easy. Math should feel comfortable!` },
            { word: `tackle`,      definition: `Take on a challenge.`,
              audioPrompt: `To tackle is to take on a challenge. You can tackle any addition problem now. Break it into places. Add each separately. Combine. That method works every time, on every problem!` },
          ],
        },

        {
          id: `l06-game`,
          type: `interactive`,
          format: `drag-match`,
          guideText: `Let's try it, {name}! Here are 4 column-additions. Drag each one — does it belong in the ONES place, TENS place, or HUNDREDS place?`,
          buckets: [
            { id: `ones_place`,     label: `1️⃣ ONES place`,     color: `#FBBF24` },
            { id: `tens_place`,     label: `🔟 TENS place`,     color: `#34D399` },
            { id: `hundreds_place`, label: `💯 HUNDREDS place`, color: `#A78BFA` },
          ],
          items: [
            { id: `l06-g1`, image: `l06-game-1.webp`, label: `4 ones + 2 ones = 6 ones`,
              matchPhrase: `Yes! That goes in the ONES place! Just 4 + 2 = 6 singles!`,
              correctMatch: `ones_place` },
            { id: `l06-g2`, image: `l06-game-2.webp`, label: `3 tens + 5 tens = 8 tens (worth 80)`,
              matchPhrase: `Great! That goes in the TENS place! 30 + 50 = 80!`,
              correctMatch: `tens_place` },
            { id: `l06-g3`, image: `l06-game-3.webp`, label: `2 hundreds + 1 hundred = 3 hundreds (worth 300)`,
              matchPhrase: `Yes! That goes in the HUNDREDS place! 200 + 100 = 300!`,
              correctMatch: `hundreds_place` },
            { id: `l06-g4`, image: `l06-game-4.webp`, label: `5 ones + 3 ones = 8 ones`,
              matchPhrase: `Perfect! Another ONES place addition! 5 + 3 = 8 singles!`,
              correctMatch: `ones_place` },
          ],
        },

        {
          id: `l06-quiz`,
          type: `quiz`,
          guideText: `Let's see what you remember, {name}!`,
          questions: [
            { id: `l06-q1`, format: `multiple-choice`,
              question: `What's the BIG IDEA for adding multi-digit numbers?`,
              options: [`Just guess`, `Add PLACE BY PLACE — ones to ones, tens to tens, hundreds to hundreds`, `Add all at once`, `Skip hard parts`],
              correctIndex: 1,
              explanation: `Place by place! Each place is its own little problem. Combine the pieces for your answer!` },
            { id: `l06-q2`, format: `multiple-choice`,
              question: `What is 234 + 152?`,
              options: [`287`, `386`, `486`, `586`],
              correctIndex: 1,
              explanation: `386! 4 + 2 = 6 ones. 3 + 5 = 8 tens (80). 2 + 1 = 3 hundreds (300). 300 + 80 + 6 = 386!` },
            { id: `l06-q3`, format: `multiple-choice`,
              question: `Which step do you do FIRST?`,
              options: [`Add hundreds`, `Add ONES — start from the RIGHT`, `Pick randomly`, `Skip ones`],
              correctIndex: 1,
              explanation: `Add ones first! Start from the right and work left. Ones → tens → hundreds!` },
            { id: `l06-q4`, format: `true-false`,
              question: `When you write multi-digit addition, ONES must be UNDER ONES.`,
              correctAnswer: true,
              explanation: `True! Lining up is essential. Ones under ones, tens under tens. If not lined up, you'll add wrong places!` },
            { id: `l06-q5`, format: `fill-blank`,
              question: `Ones get added to ___. Tens get added to tens. Hundreds get added to hundreds.`,
              options: [`ones`, `tens`, `hundreds`, `random`],
              correctIndex: 0,
              explanation: `Ones! Each place only gets added to its match. That's the place-by-place rule!` },
            { id: `l06-q6`, format: `multiple-choice`,
              question: `Why does multi-digit addition FEEL EASY when you know place value?`,
              options: [`It doesn't`, `Place value BREAKS a big problem into small additions you already know`, `Just luck`, `Magic`],
              correctIndex: 1,
              explanation: `Place value breaks scary big problems into easy small ones. That's the magic of foundation!` },
          ],
        },

        {
          id: `l06-realworld`,
          type: `real-world`,
          guideText: `Here's something cool, {name}! The place-by-place method is used by EVERY human on Earth who does math by hand! Cashiers, builders, scientists — everyone! Computers use the same method internally. It's the universal way. It WORKS!`,
          familyAdventure: `Together, do an ADDITION QUEST! Find 10 things with numbers (book pages, prices, ages). Pick TWO numbers and ADD them together. Say each step out loud: "Add the ones. Add the tens. Combine!"`,
          creativePrompt: `Draw a STACK AND ADD comic! Show 3 frames: 1) Two numbers floating apart. 2) The numbers LINE UP and STACK. 3) They ADD place by place and make an answer! Give the numbers cute faces!`,
        },

        {
          id: `l06-celebration`,
          type: `celebration`,
          message: `Excellent work, {name}! You learned MULTI-DIGIT ADDITION! Add PLACE BY PLACE. Ones to ones. Tens to tens. Hundreds to hundreds. Line up the digits. Start from the right. Work left! You're officially doing big-kid math! Remi is so proud! 🦝`,
          badge: `addition-starter`,
          badgeName: `Multi-Digit Addition Starter`,
          xpEarned: 50,
        },

      ],
    },
  ],
};

export default MATH_L06;

// ─── Dev asset check ─────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const mags  = MATH_L06.lessons[0].screens.filter(s => s.type === 'magazine').length;
  const game  = MATH_L06.lessons[0].screens.find(s => s.type === 'interactive')?.items?.length ?? 0;
  const quiz  = MATH_L06.lessons[0].screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  console.log(`[LESSON-MATH-L06] Loaded: "Adding Multi-Digit Numbers" with ${mags} magazine sections, ${game} game items, ${quiz} quiz questions`);
}
