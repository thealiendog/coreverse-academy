// ─────────────────────────────────────────────────────────────────────────────
// MATH  |  L05 — Place Value Mats
// Age band : explorers (6–8)   Guide: remi
// Standards: CCSS 2.NBT.A.1 / 2.NBT.A.3
// REWRITE v2 (May 2026): Grade 1 accessible, ONES/TENS/HUNDREDS column
// identification game tests block-to-column matching
// ─────────────────────────────────────────────────────────────────────────────

const MATH_L05 = {
  ageBand:   `explorers`,
  subjectId: `math`,
  guide:     `remi`,

  lessons: [
    {
      id:        `math-6-8-05`,
      title:     `Place Value Mats`,
      duration:  12,
      xpReward:  50,
      badge:     `mat-master`,
      badgeName: `Place Value Mat Master`,

      screens: [

        {
          id: `l05-welcome`,
          type: `welcome`,
          guideText: `Hey {name}, Remi here! You've learned place value, bundling, expanded form, and comparing. Now we meet the tool that ties it all together — the PLACE VALUE MAT! It turns math into something you can SEE and TOUCH! Let's go!`,
          headline: `Place Value Mats`,
          subtitle: `The hands-on tool that locks place value in for good`,
          visual: `/explorer-assets/math/l05-welcome.webp`,
        },

        {
          id: `l05-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `What's a Place Value MAT?`,
          paragraphs: [
            `A PLACE VALUE MAT is the simplest, smartest math tool! It's just a paper divided into COLUMNS, each one labeled!`,
            `For 3-digit numbers, it has THREE columns: HUNDREDS on the LEFT, TENS in the MIDDLE, ONES on the RIGHT! Same order as a written number! When you build a number, you put block-pieces in their right columns. Singles go in ONES. Rods go in TENS. Flats go in HUNDREDS!`,
          ],
          image: `/explorer-assets/math/l05-s1-what-is-mat.webp`,
          imageCaption: `A place value mat = paper with 3 labeled columns!`,
          vocab: [
            { word: `mat`,       definition: `A paper with labeled columns for place value.`,
              audioPrompt: `A mat is a paper with labeled columns for place value. The mat keeps numbers organized. Three columns for a 3-digit number — hundreds, tens, ones! Each block goes in its proper column!` },
            { word: `column`,    definition: `A vertical section on the mat.`,
              audioPrompt: `A column is a vertical section on the mat. Each column holds one place value. The ones column. The tens column. The hundreds column. Columns keep places from mixing up!` },
            { word: `organized`, definition: `Sorted into proper places.`,
              audioPrompt: `Organized means sorted into proper places. The mat keeps numbers organized — no confusion! Each piece goes in its right column. You can see at a glance what makes up your number!` },
          ],
        },

        {
          id: `l05-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `BUILDING Numbers on the Mat`,
          paragraphs: [
            `Let's BUILD the number 247 on the mat! Look at each digit and figure out what goes where!`,
            `The 2 is hundreds — put 2 FLATS in the hundreds column! The 4 is tens — put 4 RODS in the tens column! The 7 is ones — put 7 SINGLES in the ones column! Done! Now LOOK at the mat — you can SEE what makes 247! Try building 538: 5 flats, 3 rods, 8 singles!`,
          ],
          image: `/explorer-assets/math/l05-s2-building-numbers.webp`,
          imageCaption: `Build 247: 2 flats + 4 rods + 7 singles!`,
          vocab: [
            { word: `build`,    definition: `To create a number by placing blocks.`,
              audioPrompt: `To build is to create a number by placing blocks in their columns. For 247, you build with 2 flats, 4 rods, and 7 singles in their proper columns. Hands-on math!` },
            { word: `flat`,     definition: `A block worth 100.`,
              audioPrompt: `A flat is a block worth 100 — like 10 rods stacked side by side. Flats go in the hundreds column. Each flat represents 100. Three flats = 300!` },
            { word: `physical`, definition: `Something you can touch.`,
              audioPrompt: `Physical means something you can touch. The mat makes place value physical — real and visible! Before the mat, place value lived only in your head. Now you can SEE it!` },
          ],
        },

        {
          id: `l05-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `READING the Mat`,
          paragraphs: [
            `Now the OPPOSITE — looking at a built mat and figuring out the number!`,
            `Imagine a mat with 3 FLATS, 6 RODS, 2 SINGLES! What's the number? 3 flats = 300. 6 rods = 60. 2 singles = 2! Add them: 300 + 60 + 2 = 362! Try another: 7 flats + 0 rods + 9 singles = 700 + 0 + 9 = 709! (Empty column = zero in that place!)`,
          ],
          image: `/explorer-assets/math/l05-s3-reading-mat.webp`,
          imageCaption: `Reading the mat: 3 flats + 6 rods + 2 singles = 362!`,
          vocab: [
            { word: `read the mat`, definition: `Look at a built mat and figure out the number.`,
              audioPrompt: `To read the mat is to look at a built mat and figure out the number. Count the pieces in each column. Multiply by place value. Add them up. That's reading the mat!` },
            { word: `count pieces`, definition: `Add up how many of each block.`,
              audioPrompt: `Count pieces means add up how many of each block. How many flats? How many rods? How many singles? Each count tells you what goes in that place value!` },
            { word: `empty column`, definition: `A column with zero blocks.`,
              audioPrompt: `An empty column is a column with zero blocks. It means the digit is zero — placeholder! Like in 709, the tens column is empty. No tens. But the column still exists!` },
          ],
        },

        {
          id: `l05-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `TRADING Up on the Mat`,
          paragraphs: [
            `Here's the COOLEST part — you can SEE bundling actually happen on the mat!`,
            `Imagine 14 SINGLES in the ones column! That's too many — ones can only hold 0 through 9! So TRADE UP! Group 10 singles together → TRADE for ONE ROD → move the rod to TENS! The other 4 singles stay in ones! Same total — just neatly organized! This is BUNDLING happening LIVE!`,
          ],
          image: `/explorer-assets/math/l05-s4-bundling-trade.webp`,
          imageCaption: `Trade up: 10 ones become 1 rod → moves to tens!`,
          vocab: [
            { word: `trade up`,   definition: `Swap 10 pieces for 1 bigger piece.`,
              audioPrompt: `Trade up is swapping 10 pieces for 1 bigger piece. Ten singles trade for one rod. Ten rods trade for one flat. This trick keeps the mat tidy and shows bundling in action!` },
            { word: `too full`,   definition: `Having more than 9 in one column.`,
              audioPrompt: `Too full means having more than 9 in one column. Each column can only hold the digits 0 through 9. If you end up with 10 or more, time to bundle and move one piece up!` },
            { word: `regrouping`, definition: `Another word for trading up.`,
              audioPrompt: `Regrouping is another word for trading up. When you add and get more than 9 in a column, you regroup. Same idea you've been learning — just a fancy math word for it!` },
          ],
        },

        {
          id: `l05-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Make Your OWN Mat`,
          paragraphs: [
            `You don't need fancy supplies! You can MAKE a place value mat in 30 seconds!`,
            `Grab paper. Draw 3 lines making 3 columns. Label them HUNDREDS, TENS, ONES! Now grab pieces! Coins work great — pennies = ones, dimes = tens! Or beans — small beans = ones, big beans = tens! Or buttons! Anything you can count and sort! The mat works with stuff in your house!`,
          ],
          image: `/explorer-assets/math/l05-s5-make-your-own.webp`,
          imageCaption: `Make your own: paper + lines + labels + everyday pieces!`,
          vocab: [
            { word: `make your own`, definition: `Create your own tool.`,
              audioPrompt: `Make your own means create your own tool. Make a place value mat at home in 30 seconds. Paper. Lines. Labels. That's it! Simple tools are often the most powerful!` },
            { word: `pieces`,        definition: `Objects you use for blocks.`,
              audioPrompt: `Pieces are objects you use for blocks. Use coins, beans, or buttons to fill your mat columns. Pennies and dimes work. Anything you can count and sort. Just use different sizes for different places!` },
            { word: `everyday`,      definition: `From daily life.`,
              audioPrompt: `Everyday means from daily life. Use everyday objects to make place value real. The best math tools are often the simplest. You don't need expensive things to learn math!` },
          ],
        },

        {
          id: `l05-mag-6`,
          type: `magazine`,
          section: 6,
          headline: `Ready for What's NEXT`,
          paragraphs: [
            `Look at you, {name}! You just finished the WHOLE Place Value Series!`,
            `In 5 lessons you learned: WHAT place value is, HOW bundling works, HOW to write expanded form, HOW to COMPARE numbers, and HOW to use a place value mat! That's the FOUNDATION of multi-digit math! Next lesson — we start ADDING multi-digit numbers! With your foundation, it'll feel EASY!`,
          ],
          image: `/explorer-assets/math/l05-s6-ready-for-more.webp`,
          imageCaption: `Place Value Series COMPLETE! Time for addition next!`,
          vocab: [
            { word: `foundation`, definition: `The base everything else stands on.`,
              audioPrompt: `A foundation is the base everything else stands on. You've built your math foundation. Place value is the strongest base for elementary math. Now you can build addition, subtraction, and more!` },
            { word: `ready`,      definition: `Prepared to do more.`,
              audioPrompt: `Ready means prepared to do more. You're ready for bigger math now. Multi-digit addition. Subtraction. Eventually multiplication. Each builds on place value. You have the tools you need!` },
            { word: `friend forever`, definition: `Useful for life.`,
              audioPrompt: `Friend forever means useful for life. The place value mat is your friend forever. Whenever problems get hard, come back to a mat. Slow down. See what's happening. The tool grows with you!` },
          ],
        },

        {
          id: `l05-game`,
          type: `interactive`,
          format: `drag-match`,
          guideText: `Let's try it, {name}! Here are 4 block-pieces. Drag each one into the column where it BELONGS on the place value mat!`,
          buckets: [
            { id: `ones_col`,     label: `1️⃣ ONES column`,     color: `#FBBF24` },
            { id: `tens_col`,     label: `🔟 TENS column`,     color: `#34D399` },
            { id: `hundreds_col`, label: `💯 HUNDREDS column`, color: `#A78BFA` },
          ],
          items: [
            { id: `l05-g1`, image: `l05-game-1.webp`, label: `1 single cube (worth 1)`,
              matchPhrase: `Yes! Single cubes go in the ONES column — they count single units!`,
              correctMatch: `ones_col` },
            { id: `l05-g2`, image: `l05-game-2.webp`, label: `1 rod of 10 (worth 10)`,
              matchPhrase: `Great! Rods go in the TENS column — each rod is a bundle of 10!`,
              correctMatch: `tens_col` },
            { id: `l05-g3`, image: `l05-game-3.webp`, label: `1 flat of 100 (worth 100)`,
              matchPhrase: `Yes! Flats go in the HUNDREDS column — each flat is a bundle of 100!`,
              correctMatch: `hundreds_col` },
            { id: `l05-g4`, image: `l05-game-4.webp`, label: `1 single cube (worth 1)`,
              matchPhrase: `Perfect! Another single goes in ONES! All singles go in the ones column!`,
              correctMatch: `ones_col` },
          ],
        },

        {
          id: `l05-quiz`,
          type: `quiz`,
          guideText: `Let's see what you remember, {name}!`,
          questions: [
            { id: `l05-q1`, format: `multiple-choice`,
              question: `What is a place value MAT?`,
              options: [`A bath mat`, `Paper with labeled columns (hundreds, tens, ones) for organizing numbers`, `A pet`, `A bag`],
              correctIndex: 1,
              explanation: `A place value mat is paper with labeled columns. Hundreds on the left, tens in the middle, ones on the right!` },
            { id: `l05-q2`, format: `multiple-choice`,
              question: `How would you BUILD the number 247 on a mat?`,
              options: [`2 singles + 4 rods + 7 flats`, `2 FLATS + 4 RODS + 7 SINGLES in their proper columns`, `Just write 247`, `Nothing`],
              correctIndex: 1,
              explanation: `2 flats (hundreds), 4 rods (tens), 7 singles (ones). Each block-type goes in its proper column!` },
            { id: `l05-q3`, format: `multiple-choice`,
              question: `What happens when one column has 10 or more pieces?`,
              options: [`Nothing`, `TRADE UP — swap 10 pieces for 1 bigger piece in the next column`, `Throw them away`, `Stop`],
              correctIndex: 1,
              explanation: `Trade up! 10 singles trade for 1 rod. 10 rods trade for 1 flat. That's bundling in action!` },
            { id: `l05-q4`, format: `true-false`,
              question: `If a mat has 3 flats, 0 rods, and 5 singles — the number is 305.`,
              correctAnswer: true,
              explanation: `True! 3 flats = 300, 0 rods = 0 (empty = placeholder), 5 singles = 5. Total: 305!` },
            { id: `l05-q5`, format: `fill-blank`,
              question: `On a place value mat, the ___ column is on the LEFT.`,
              options: [`hundreds`, `ones`, `tens`, `random`],
              correctIndex: 0,
              explanation: `Hundreds! The biggest place goes on the LEFT. Then tens, then ones on the right!` },
            { id: `l05-q6`, format: `multiple-choice`,
              question: `Why is a place value mat USEFUL?`,
              options: [`It's not`, `It turns abstract math into something you can SEE and TOUCH`, `Just for fun`, `For tests`],
              correctIndex: 1,
              explanation: `It makes math visible! You can SEE place value, TOUCH it, BUILD it, TRADE up. Abstract becomes concrete!` },
          ],
        },

        {
          id: `l05-realworld`,
          type: `real-world`,
          guideText: `Here's something cool, {name}! The place value mat idea is THOUSANDS of years old! The ABACUS — invented in ancient China — is basically a place value mat with BEADS instead of blocks! Each rod on an abacus is a column. Skilled users can do math faster than calculators!`,
          familyAdventure: `Together, MAKE a REAL place value mat! Get paper. Draw 3 columns. Label them HUNDREDS, TENS, ONES. Grab pieces — coins, beans, buttons! Build the year you were born! Then your age! Keep the mat and use it!`,
          creativePrompt: `DESIGN your own place value mat! On big paper, draw the columns. DECORATE each with a theme! Hundreds column = jungle. Tens column = farm. Ones column = pond! Make it FUN. Make it YOURS!`,
        },

        {
          id: `l05-celebration`,
          type: `celebration`,
          message: `Amazing, {name}! You just FINISHED the Place Value Series! Five lessons. Foundation LOCKED IN! You know place value, bundling, expanded form, comparing, AND how to use a place value mat! Next up — we put this to work with ADDITION! Remi is so proud! 🦝`,
          badge: `mat-master`,
          badgeName: `Place Value Mat Master`,
          xpEarned: 50,
        },

      ],
    },
  ],
};

export default MATH_L05;

// ─── Dev asset check ─────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const mags  = MATH_L05.lessons[0].screens.filter(s => s.type === 'magazine').length;
  const game  = MATH_L05.lessons[0].screens.find(s => s.type === 'interactive')?.items?.length ?? 0;
  const quiz  = MATH_L05.lessons[0].screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  console.log(`[LESSON-MATH-L05] Loaded: "Place Value Mats" with ${mags} magazine sections, ${game} game items, ${quiz} quiz questions`);
}
