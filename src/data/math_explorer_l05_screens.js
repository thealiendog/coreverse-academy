// ─────────────────────────────────────────────────────────────────────────────
// MATH  |  L05 — Place Value Mats
// Age band : explorers (6–8)   Guide: remi
// Standards: CCSS 2.NBT.A.1 / 2.NBT.A.3 (place value with manipulatives)
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
          guideText: `Hey {name}, Remi here! Place Value sub-block CLOSING lesson today. You've learned place value, bundling, expanded form, and WHY it matters. Now we'll meet the tool that ties it all together — the PLACE VALUE MAT. It's a simple grid that turns abstract math into something you can SEE and TOUCH. Once you've used a mat, place value clicks for good. Let's go.`,
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
            `A PLACE VALUE MAT is the simplest, smartest math tool. It's just a piece of paper or board divided into COLUMNS, each one labeled.`,
            `For 3-digit numbers, it has THREE columns: HUNDREDS on the left, TENS in the middle, ONES on the right. (Same order as a written number!) When you build a number, you put block-pieces into their correct columns. Singles go in ONES. Rods (10s) go in TENS. Flats (100s) go in HUNDREDS. The mat KEEPS everything ORGANIZED. No more confusion about which digit means what. The mat literally shows you. Teachers around the world use this tool because it WORKS. After this lesson, you'll know how to use one too.`,
          ],
          image: `/explorer-assets/math/l05-s1-what-is-mat.webp`,
          imageCaption: `A place value mat = paper with 3 labeled columns. HUNDREDS | TENS | ONES. Simple. Smart. It just works.`,
          vocab: [
            { word: `mat`,            definition: `A piece of paper with LABELED COLUMNS for place value. The MAT keeps numbers ORGANIZED.`,
              audioPrompt: `A mat, {name}, is a piece of paper with labeled columns for place value. The mat keeps numbers organized. Three columns for a 3-digit number — hundreds, tens, ones. You put block pieces into their proper columns. The mat shows you where everything goes. It turns abstract math into something you can see and touch.` },
            { word: `column`,         definition: `A vertical SECTION on the mat. Each COLUMN holds one place value.`,
              audioPrompt: `A column, {name}, is a vertical section on the mat. Each column holds one place value. The ones column. The tens column. The hundreds column. The thousands column for bigger numbers. Columns keep different places from mixing up. They're like separate buckets — each holding only what belongs there.` },
            { word: `organized`,      definition: `Sorted into PROPER places. The mat keeps numbers ORGANIZED — no confusion.`,
              audioPrompt: `Organized, {name}, means sorted into proper places. The mat keeps numbers organized — no confusion. Each piece goes in its right column. You can see at a glance how many hundreds, tens, and ones make up your number. Organization is the secret of good math. The mat builds it in.` },
          ],
        },

        {
          id: `l05-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `BUILDING Numbers on the Mat`,
          paragraphs: [
            `Let's BUILD the number 247 on the mat. First, look at each digit and figure out what goes where.`,
            `The 2 is hundreds — so put 2 FLATS in the hundreds column. The 4 is tens — so put 4 RODS in the tens column. The 7 is ones — so put 7 SINGLES in the ones column. Done! You just BUILT 247. Now LOOK at the mat — you can see exactly what makes up the number. 2 flats + 4 rods + 7 singles = 247. Try building 538. Put 5 flats in hundreds, 3 rods in tens, 8 singles in ones. Now you're seeing place value with your EYES, not just your brain. This is why mats are powerful — they show you the abstract idea as a physical thing.`,
          ],
          image: `/explorer-assets/math/l05-s2-building-numbers.webp`,
          imageCaption: `Build 247: 2 flats in hundreds, 4 rods in tens, 7 singles in ones. Place value made visible.`,
          vocab: [
            { word: `build`,          definition: `To CREATE a number by placing BLOCKS in their columns. BUILD numbers on the mat.`,
              audioPrompt: `To build, {name}, is to create a number by placing blocks in their columns. Build numbers on the mat. For 247, you build it with 2 flats, 4 rods, and 7 singles, each in their proper column. Building is hands-on. You're not just thinking the number — you're making it. That makes learning stick.` },
            { word: `flat`,           definition: `A BLOCK worth 100 (10 rods stacked). FLATS go in the hundreds column.`,
              audioPrompt: `A flat, {name}, is a block worth one hundred — like ten rods stacked side by side. Flats go in the hundreds column on the mat. Each flat represents one hundred. So three flats means three hundred. Flats are the biggest block-piece for 3-digit numbers.` },
            { word: `physical`,       definition: `Something you can TOUCH. The mat makes place value PHYSICAL — real and visible.`,
              audioPrompt: `Physical, {name}, means something you can touch. The mat makes place value physical — real and visible. Before the mat, place value lived only in your head. With the mat, you can SEE it and HOLD it. Physical learning is one of the best kinds. Your hands help your brain learn faster.` },
          ],
        },

        {
          id: `l05-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `READING the Mat`,
          paragraphs: [
            `Now the OPPOSITE — looking at a built mat and figuring out the number.`,
            `Imagine I show you a mat with: 3 FLATS in hundreds, 6 RODS in tens, and 2 SINGLES in ones. What number is it? Let's see. 3 flats = 300. 6 rods = 60. 2 singles = 2. ADD them up: 300 + 60 + 2 = 362. That's your number. Try another. 7 flats + 0 rods + 9 singles. = 700 + 0 + 9 = 709. (Notice — zero rods means the tens place is empty, but the mat still keeps the columns organized.) READING the mat is just expanded form in action. Count the pieces in each column, multiply by the place value, add them up.`,
          ],
          image: `/explorer-assets/math/l05-s3-reading-mat.webp`,
          imageCaption: `Reading the mat: 3 flats + 6 rods + 2 singles = 300 + 60 + 2 = 362. Just count + add.`,
          vocab: [
            { word: `read the mat`,   definition: `To LOOK at a built mat and FIGURE OUT the number it shows.`,
              audioPrompt: `To read the mat, {name}, is to look at a built mat and figure out the number it shows. Count the pieces in each column. Multiply each by its place value. Add them all up. Reading the mat is just expanded form in action. Each column is one piece of the number.` },
            { word: `count pieces`,   definition: `Add up how MANY of each block. COUNT PIECES in each column.`,
              audioPrompt: `Count pieces, {name}, means add up how many of each block. Count pieces in each column. How many flats? How many rods? How many singles? Each count tells you what goes in that place value. Counting is the first step in reading the mat.` },
            { word: `empty column`,   definition: `A column with ZERO blocks. An EMPTY COLUMN means the digit is 0 — placeholder!`,
              audioPrompt: `An empty column, {name}, is a column with zero blocks. An empty column means the digit is zero — placeholder. Like in 709, the tens column is empty. There are no tens. But the column still exists on the mat, keeping the others in their right spots. Just like how zero works as a placeholder in writing.` },
          ],
        },

        {
          id: `l05-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `TRADING Up on the Mat`,
          paragraphs: [
            `Here's the COOLEST part of the mat — you can SEE bundling actually happen.`,
            `Imagine the ones column has 14 SINGLES. That's too many — the ones column can only hold up to 9 singles. When a column gets too full, you TRADE UP. Group 10 of the singles together — TRADE them for ONE ROD — and move the rod to the tens column. The other 4 singles stay in ones. Same number total — but now neatly organized. Same rule works in tens. If you have 12 RODS in tens, trade 10 of them for ONE FLAT and move it to hundreds. Two rods left in tens. This is BUNDLING happening LIVE. The mat shows you exactly when and how to trade up. This trick is what makes addition with regrouping work later.`,
          ],
          image: `/explorer-assets/math/l05-s4-bundling-trade.webp`,
          imageCaption: `Trade up: 10 ones become 1 rod → moves to tens column. Bundling happening LIVE on the mat.`,
          vocab: [
            { word: `trade up`,       definition: `Swapping 10 PIECES for 1 BIGGER piece. TRADE UP on the mat to keep it organized.`,
              audioPrompt: `Trade up, {name}, is swapping ten pieces for one bigger piece. Trade up on the mat to keep it organized. Ten singles trade for one rod. Ten rods trade for one flat. This trick keeps the mat tidy and shows bundling in action. It's the same operation as regrouping — coming up later in addition.` },
            { word: `too full`,       definition: `Having MORE than 9 in one column. TOO FULL means you need to trade up.`,
              audioPrompt: `Too full, {name}, means having more than nine in one column. Too full means you need to trade up. Each column can only hold the digits zero through nine. If you end up with ten or more, it's time to bundle and move one piece up to the next column.` },
            { word: `regrouping`,     definition: `Another word for TRADING UP. REGROUPING is what bundling looks like in math operations.`,
              audioPrompt: `Regrouping, {name}, is another word for trading up. Regrouping is what bundling looks like in math operations. When you add and get more than nine in a column, you regroup — trade ten of that place for one of the next bigger place. It's the same idea you've been learning. Just a fancy word for it.` },
          ],
        },

        {
          id: `l05-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Make Your OWN Mat`,
          paragraphs: [
            `You don't need fancy school supplies to use a place value mat. You can MAKE ONE in 30 seconds.`,
            `Grab a piece of paper. Draw 3 LINES that divide the page into 4 vertical strips. (For thousands, draw 4 lines and make 5 strips.) Label the strips, RIGHT to LEFT: ONES, TENS, HUNDREDS, THOUSANDS. Done. Now you need pieces. Coins work great — pennies = ones, dimes = tens. Or beans — small beans = ones, big beans = tens. Or buttons. Or paperclips. Whatever counts and sorts. Now you can build, read, and trade up with ANY 3- or 4-digit number — using stuff already in your house. The mat is a tool that grows with you. Adults use mental versions of it. Banks use spreadsheets shaped like mats. You're learning the original.`,
          ],
          image: `/explorer-assets/math/l05-s5-make-your-own.webp`,
          imageCaption: `Make your own: paper + lines + labels. Pieces from coins, beans, buttons. Place value at home!`,
          vocab: [
            { word: `make your own`,  definition: `To CREATE your own tool. MAKE YOUR OWN place value mat at home in 30 seconds.`,
              audioPrompt: `Make your own, {name}, is to create your own tool. Make your own place value mat at home in 30 seconds. Paper. Lines. Labels. That's it. Math tools don't have to be store-bought. The simplest tools are often the most powerful. A homemade mat works just as well as a fancy one.` },
            { word: `pieces`,         definition: `OBJECTS for blocks. Use COINS, BEANS, or PIECES to fill your mat columns.`,
              audioPrompt: `Pieces, {name}, are objects for blocks. Use coins, beans, or pieces to fill your mat columns. Pennies and dimes work. Small beans and bigger beans. Different colored buttons. Anything you can count and sort. The pieces don't matter as much as having different sizes for different places.` },
            { word: `everyday`,       definition: `From DAILY LIFE. Use EVERYDAY objects to make place value real and accessible.`,
              audioPrompt: `Everyday, {name}, means from daily life. Use everyday objects to make place value real and accessible. The best math tools are often the simplest — paper, household items, your hands. You don't need expensive things to learn. You need to be willing to TRY and to SEE how the math works.` },
          ],
        },

        {
          id: `l05-mag-6`,
          type: `magazine`,
          section: 6,
          headline: `Ready for What's NEXT`,
          paragraphs: [
            `Look at you. {name} — you just finished the WHOLE PLACE VALUE SUB-BLOCK.`,
            `In 5 lessons, you've learned: WHAT place value is (L01). HOW bundling works (L02). HOW to write expanded form (L03). WHY place value matters (L04). And HOW to use place value mats (L05). That's the entire foundation of multi-digit math. You're now READY to do real addition, subtraction, and beyond. The place value mat will help you whenever you need to slow down and SEE what's happening. Use it whenever a problem feels confusing. Build the numbers. Move the blocks. Trade up. The mat is your friend forever. Next lesson — we start ADDING multi-digit numbers. With your place value foundation, it's going to feel EASY.`,
          ],
          image: `/explorer-assets/math/l05-s6-ready-for-more.webp`,
          imageCaption: `Place Value sub-block COMPLETE. 5 lessons. Foundation locked in. Time for addition next.`,
          vocab: [
            { word: `foundation`,     definition: `The BASE everything else stands on. You've BUILT your math FOUNDATION.`,
              audioPrompt: `A foundation, {name}, is the base everything else stands on. You've built your math foundation. Place value is the strongest possible base for elementary math. Now you can build addition, subtraction, multiplication, division — all on top of this solid ground. Foundation matters. Yours is now solid.` },
            { word: `ready`,          definition: `PREPARED to do MORE. You're READY for bigger math now.`,
              audioPrompt: `Ready, {name}, means prepared to do more. You're ready for bigger math now. Multi-digit addition. Subtraction. Eventually multiplication and division. Each one builds on place value. Now that you have it strong, the rest will feel doable. Ready means you have the tools you need.` },
            { word: `friend forever`, definition: `Something USEFUL for life. The place value mat is your FRIEND FOREVER in math.`,
              audioPrompt: `Friend forever, {name}, means something useful for life. The place value mat is your friend forever in math. Even when problems get harder, you can always come back to a mat to slow down and see what's happening. Adult mathematicians still use mental versions of mats. The tool grows with you.` },
          ],
        },

        {
          id: `l05-game`,
          type: `interactive`,
          format: `drag-match`,
          guideText: `Let's see what you remember, {name}.`,
          buckets: [
            { id: `fact`, label: `✅ Yes, that's true!`, color: `#34D399` },
            { id: `myth`, label: `❌ No way!`,         color: `#F87171` },
          ],
          items: [
            { id: `l05-g1`, image: `l05-game-1.webp`, label: `A place value MAT keeps numbers ORGANIZED — each digit's blocks go in their proper column.`,
              matchPhrase: `Yes! The mat is a simple, smart tool. Hundreds | Tens | Ones — each in their own column. Nothing gets mixed up.`,
              correctMatch: `fact` },
            { id: `l05-g2`, image: `l05-game-2.webp`, label: `You can TRADE UP on the mat — 10 ones become 1 rod, which moves up to the tens column.`,
              matchPhrase: `True! Trading up is bundling in action. 10 ones trade for 1 rod. 10 rods trade for 1 flat. You can SEE the bundling happen.`,
              correctMatch: `fact` },
            { id: `l05-g3`, image: `l05-game-3.webp`, label: `You can put a ROD in the ones column or a single cube in the hundreds column — columns don't matter.`,
              matchPhrase: `Not at all! Every column has a specific job. Singles go in ones. Rods in tens. Flats in hundreds. Mix them up and the whole system breaks.`,
              correctMatch: `myth` },
            { id: `l05-g4`, image: `l05-game-4.webp`, label: `Place value mats are ONLY for tiny babies — real grown-ups never use visual math tools.`,
              matchPhrase: `Definitely not! Mats help everyone. Adult mathematicians, accountants, engineers — they all use visual tools. Banks use spreadsheets that work like mats. Visual tools are powerful at every age.`,
              correctMatch: `myth` },
          ],
        },

        {
          id: `l05-quiz`,
          type: `quiz`,
          guideText: `Let's see what you remember, {name}.`,
          questions: [
            { id: `l05-q1`, format: `multiple-choice`,
              question: `What is a place value MAT?`,
              options: [`A bath mat`, `A paper with LABELED COLUMNS (hundreds | tens | ones) for organizing numbers`, `A pet`, `A bag`],
              correctIndex: 1,
              explanation: `A place value mat is a paper with labeled columns. Hundreds on the left, tens in the middle, ones on the right. Each digit's blocks go in their proper column.` },
            { id: `l05-q2`, format: `multiple-choice`,
              question: `How would you BUILD the number 247 on a mat?`,
              options: [`2 singles + 4 rods + 7 flats`, `2 FLATS + 4 RODS + 7 SINGLES (in their proper columns)`, `Just 247 written`, `Nothing`],
              correctIndex: 1,
              explanation: `2 flats (hundreds), 4 rods (tens), 7 singles (ones). Each block-type goes in its proper column. That's how you build 247 on the mat.` },
            { id: `l05-q3`, format: `multiple-choice`,
              question: `What happens when one column has 10 or more pieces?`,
              options: [`Nothing — leave it`, `TRADE UP — swap 10 pieces for 1 bigger piece in the next column`, `Throw them away`, `Stop counting`],
              correctIndex: 1,
              explanation: `Trade up! 10 singles trade for 1 rod (move to tens). 10 rods trade for 1 flat (move to hundreds). This is bundling in action on the mat.` },
            { id: `l05-q4`, format: `true-false`,
              question: `If you have a mat with 3 flats, 0 rods, and 5 singles — the number is 305.`,
              correctAnswer: true,
              explanation: `True! 3 flats = 300, 0 rods = 0 (empty column = placeholder), 5 singles = 5. 300 + 0 + 5 = 305.` },
            { id: `l05-q5`, format: `fill-blank`,
              question: `On a place value mat, the ___ column is on the LEFT.`,
              options: [`hundreds`, `ones`, `tens`, `random`],
              correctIndex: 0,
              explanation: `Hundreds! The biggest place goes on the LEFT (same order as a written number). Then tens, then ones on the right.` },
            { id: `l05-q6`, format: `multiple-choice`,
              question: `Why is a place value mat USEFUL?`,
              options: [`It's not`, `It turns ABSTRACT math into something you can SEE and TOUCH — makes place value real`, `Just for fun`, `For tests`],
              correctIndex: 1,
              explanation: `It makes math visible. You can SEE place value, TOUCH it, BUILD it, TRADE up. Abstract ideas become concrete. That's why mats work so well.` },
          ],
        },

        {
          id: `l05-realworld`,
          type: `real-world`,
          guideText: `Here's something cool, {name}. The place value mat idea is THOUSANDS of years old. The ABACUS — invented in ancient China and Mesopotamia — is basically a place value mat with BEADS instead of blocks. Each rod on an abacus is a place value column. Beads slide back and forth as you bundle and trade up. Skilled abacus users can do math FASTER than calculators — really. Today's calculators and computers do the same thing inside their chips — just with electric signals instead of beads. The simple place value mat you used today connects you to math thousands of years old, and to the most advanced computers in the world. Pretty cool tool.`,
          familyAdventure: `Together, MAKE A REAL place value mat. Get a piece of paper. Together, draw 3 vertical lines, making 3 columns. Label them HUNDREDS, TENS, ONES (right column = ones). Now grab pieces — coins, beans, buttons. Build the year you were born. Then your age. Then a sibling's age. Then a house number. Then trade up if any column gets to 10+. Keep the mat — use it whenever you do math. It's yours now.`,
          creativePrompt: `DESIGN your own place value mat. On big paper, draw the columns. DECORATE each column with a theme. Hundreds column = jungle (big animals). Tens column = farm (medium animals). Ones column = pond (small creatures). Or any theme you like. Make it FUN. Make it YOURS. Then use your mat to build your favorite 3-digit number. Show it to a family member.`,
        },

        {
          id: `l05-celebration`,
          type: `celebration`,
          message: `Amazing, {name}! You just CLOSED the Place Value sub-block. Five lessons. Foundation = LOCKED IN. You know what place value is, how bundling works, expanded form, why it matters, and now how to use a place value mat. The mat is yours to use whenever you need to SEE what's happening. Next up — we put this foundation to work. ADDITION starts next lesson. With everything you know, it's going to feel doable. Proud of you! — Remi 🦝`,
          badge: `mat-master`,
          badgeName: `Place Value Mat Master`,
          xpEarned: 50,
        },

      ],
    },
  ],
};

export default MATH_L05;

// ─── Dev asset check ───
if (import.meta.env?.DEV) {
  const mags  = MATH_L05.lessons[0].screens.filter(s => s.type === 'magazine').length;
  const game  = MATH_L05.lessons[0].screens.find(s => s.type === 'interactive')?.items?.length ?? 0;
  const quiz  = MATH_L05.lessons[0].screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  console.log(`[LESSON-MATH-L05] Loaded: "Place Value Mats" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
}
