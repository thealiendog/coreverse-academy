// ─────────────────────────────────────────────────────────────────────────────
// MATH  |  L02 — Bundling into Groups
// Age band : explorers (6–8)   Guide: remi
// Standards: CCSS 2.NBT.A.1
// REWRITE v2 (May 2026): Grade 1 accessible, makes-a-TEN/HUNDRED/THOUSAND
// identification game, trimmed redundant vocab (bundle/exchange/trade)
// ─────────────────────────────────────────────────────────────────────────────

const MATH_L02 = {
  ageBand:   `explorers`,
  subjectId: `math`,
  guide:     `remi`,

  lessons: [
    {
      id:        `math-6-8-02`,
      title:     `Bundling into Groups`,
      duration:  12,
      xpReward:  50,
      badge:     `bundling-explorer`,
      badgeName: `Bundling Explorer`,

      screens: [

        {
          id: `l02-welcome`,
          type: `welcome`,
          guideText: `Hi {name}! Remi here! Last time we learned PLACE VALUE. Today we go DEEPER — into BUNDLING! When you have 10 of something, you bundle them into ONE bigger thing! Let's bundle!`,
          headline: `Bundling into Groups`,
          subtitle: `How ten little ones grow into tens, hundreds, and beyond`,
          visual: `/explorer-assets/math/l02-welcome.webp`,
        },

        {
          id: `l02-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Too Many to Count`,
          paragraphs: [
            `Imagine 247 tiny pebbles on the floor! You want to count them. You start: one, two, three... forty-seven... seventy... You probably lost count!`,
            `Counting one by one is HARD when numbers get big. There's a smarter way — it's called BUNDLING! Instead of counting every single thing, we gather things into GROUPS! Groups make counting FAST and EASY. This idea built our whole number system!`,
          ],
          image: `/explorer-assets/math/l02-s1-too-many-to-count.webp`,
          imageCaption: `Loose pebbles = hard to count. Bundled into groups = easy!`,
          vocab: [
            { word: `bundle`, definition: `To group things together.`,
              audioPrompt: `To bundle is to group things together. Ten single cubes bundled become one ten-rod. Bundling is the secret of place value. You count the bundles instead of every tiny piece!` },
            { word: `group`,  definition: `Several things collected together.`,
              audioPrompt: `A group is several things collected together. In place value, we use groups of TEN. Probably because we have ten fingers. Groups turn messy piles into organized math!` },
            { word: `count`,  definition: `Find the total number of things.`,
              audioPrompt: `To count is to find the total number of things. Counting one by one is slow. Bundling lets you count fast. Instead of 247 singles, you count 2 hundreds, 4 tens, 7 ones!` },
          ],
        },

        {
          id: `l02-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `10 Ones Make 1 Ten`,
          paragraphs: [
            `Here's the first bundling rule — the most important one! Collect TEN single cubes, bundle them into ONE TEN-ROD!`,
            `Ten ones become one ten! The amount stays EXACTLY the same — you just REORGANIZED it! Imagine 10 little cubes. Snap them together into one tall rod. That rod is worth 10! You haven't added or removed anything. That's BUNDLING in action!`,
          ],
          image: `/explorer-assets/math/l02-s2-ten-ones-make-a-ten.webp`,
          imageCaption: `10 single cubes → 1 ten-rod. Same amount, new shape!`,
          vocab: [
            { word: `ones`, definition: `Single units — the smallest pieces.`,
              audioPrompt: `Ones are single units — the smallest pieces in place value. Count ten of them and you can bundle into a ten. The ones place shows how many singles are left after all your bundles!` },
            { word: `ten`,  definition: `A bundle of 10 ones.`,
              audioPrompt: `A ten is a bundle of exactly 10 ones. The tens place counts how many of these bundles you have. If you have 4 in the tens place, you have four bundles — forty!` },
            { word: `same`, definition: `Not changed.`,
              audioPrompt: `Same means not changed. When you bundle, the amount stays the same. Ten loose cubes equal one ten-rod. Same value, different package. Bundling never changes how much you have!` },
          ],
        },

        {
          id: `l02-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `10 Tens Make 1 Hundred`,
          paragraphs: [
            `The pattern keeps going! What if you have TEN ten-rods? Count them: 10, 20, 30, 40, 50, 60, 70, 80, 90, 100! That's ONE HUNDRED!`,
            `Bundle those ten rods together into a FLAT SQUARE. The square holds 100 cubes in a 10-by-10 grid! The HUNDREDS PLACE counts how many of these hundred-flats you have. In 300, the 3 means THREE flats = three hundred!`,
          ],
          image: `/explorer-assets/math/l02-s3-ten-tens-make-a-hundred.webp`,
          imageCaption: `10 ten-rods → 1 hundred-flat. Ten tens equals one hundred!`,
          vocab: [
            { word: `hundred`, definition: `A bundle of 10 tens.`,
              audioPrompt: `A hundred is a bundle of 10 tens — or 100 ones. The hundreds place counts how many hundred-bundles you have. Five in the hundreds place equals five hundred!` },
            { word: `flat`,    definition: `A square block of 100.`,
              audioPrompt: `A flat is the square block that represents 100. It's a square — 10 units wide and 10 units tall. Ten ten-rods placed side by side make one flat. That's 100 cubes!` },
            { word: `grid`,    definition: `A pattern of rows and columns.`,
              audioPrompt: `A grid is a pattern of rows and columns. The hundred-flat shows a 10-by-10 grid — 10 rows of 10. Ten times ten equals 100. Grids help us see how big numbers are built!` },
          ],
        },

        {
          id: `l02-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `10 Hundreds Make 1 Thousand`,
          paragraphs: [
            `The pattern KEEPS CLIMBING! Collect TEN hundred-flats — that's ONE THOUSAND!`,
            `Stack 10 hundred-flats into one big CUBE. That cube holds 1,000 single cubes! In the number 2,000, the 2 means TWO thousand-cubes! Every time you collect 10 of any place, you bundle into the next place up! 10 ones → 1 ten. 10 tens → 1 hundred. 10 hundreds → 1 thousand!`,
          ],
          image: `/explorer-assets/math/l02-s4-ten-hundreds-make-a-thousand.webp`,
          imageCaption: `10 hundred-flats → 1 thousand-cube!`,
          vocab: [
            { word: `thousand`, definition: `A bundle of 10 hundreds.`,
              audioPrompt: `A thousand is a bundle of 10 hundreds — or 1,000 single ones. Written as 1,000. The fourth place in our number system, just past hundreds. Quite a lot of cubes!` },
            { word: `cube`,     definition: `A 3D box shape with equal sides.`,
              audioPrompt: `A cube is a 3D box shape where all sides are equal length. The thousand-block is a cube. Ones are tiny cubes. Tens are rods. Hundreds are flats. Thousands are cubes again!` },
            { word: `climb`,    definition: `Go up.`,
              audioPrompt: `Climb means go up. The bundling pattern climbs up forever. Each new place is ten times bigger than the last. You can always climb one more place to make an even bigger number!` },
          ],
        },

        {
          id: `l02-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Why Bundle by TEN?`,
          paragraphs: [
            `You might wonder — why TEN? Why not five, or twelve? The answer is simple: FINGERS!`,
            `Humans have TEN fingers! Long ago, people counted on their fingers. Ten fingers made ten the natural stopping point. When you ran out of fingers, you started a new group! Almost every culture on Earth uses TEN. Your ten fingers are older than math itself!`,
          ],
          image: `/explorer-assets/math/l02-s5-why-ten.webp`,
          imageCaption: `Ten fingers → bundle by ten!`,
          vocab: [
            { word: `base ten`, definition: `A number system where we bundle by 10s.`,
              audioPrompt: `Base ten is a number system where we bundle and count by tens. Our whole number system is base ten. Every place is 10 times bigger than the place to its right. Probably the most successful idea in math!` },
            { word: `fingers`,  definition: `What we count on. We have 10!`,
              audioPrompt: `Fingers are what we count on. We have 10! Probably why we use base ten. Before written numbers, people counted on fingers. Ten was always the natural stopping point. Bundle and start over!` },
            { word: `natural`,  definition: `Easy and familiar.`,
              audioPrompt: `Natural means easy and familiar. Base ten feels natural because of our 10 fingers. We didn't force ourselves to use it — it grew from our bodies. Natural systems spread fast!` },
          ],
        },

        {
          id: `l02-mag-6`,
          type: `magazine`,
          section: 6,
          headline: `The Pattern Goes Up Forever`,
          paragraphs: [
            `Here's the amazing part: the bundling pattern NEVER ENDS!`,
            `10 ones make a ten. 10 tens make a hundred. 10 hundreds make a thousand. 10 thousands make a ten-thousand! And it keeps going! Million. Billion. Trillion! Each step follows the EXACT same rule — collect 10, bundle up! Our 10 digits can count anything in the universe!`,
          ],
          image: `/explorer-assets/math/l02-s6-pattern-goes-up-forever.webp`,
          imageCaption: `Ones → tens → hundreds → thousands → forever!`,
          vocab: [
            { word: `pattern`,    definition: `Something that repeats.`,
              audioPrompt: `A pattern is something that repeats in a predictable way. The bundling pattern is collect 10, bundle up. It repeats at every level. Once you see it, every number makes sense!` },
            { word: `forever`,    definition: `Never ending.`,
              audioPrompt: `Forever means never ending. The bundling pattern goes forever. No matter how big a number, you can always add one more place. There's no biggest number — they go on forever!` },
            { word: `place value`, definition: `The value of a digit based on its position.`,
              audioPrompt: `Place value is the value of a digit based on its position. Place value uses the bundling pattern at every level. The foundation of arithmetic, fractions, and all of math!` },
          ],
        },

        {
          id: `l02-game`,
          type: `interactive`,
          format: `drag-match`,
          guideText: `Let's try it, {name}! Here are 4 bundles. Drag each one — does it make a TEN, a HUNDRED, or a THOUSAND?`,
          buckets: [
            { id: `makes_ten`,     label: `🔟 Makes a TEN`,      color: `#FBBF24` },
            { id: `makes_hundred`, label: `💯 Makes a HUNDRED`,   color: `#34D399` },
            { id: `makes_thousand`,label: `🔢 Makes a THOUSAND`,  color: `#A78BFA` },
          ],
          items: [
            { id: `l02-g1`, image: `l02-game-1.webp`, label: `10 single cubes bundled together`,
              matchPhrase: `Yes! 10 singles bundle into a TEN-rod! That's the first bundling rule!`,
              correctMatch: `makes_ten` },
            { id: `l02-g2`, image: `l02-game-2.webp`, label: `10 ten-rods stacked together`,
              matchPhrase: `Great! 10 ten-rods bundle into a HUNDRED-flat! That's 100 cubes total!`,
              correctMatch: `makes_hundred` },
            { id: `l02-g3`, image: `l02-game-3.webp`, label: `10 hundred-flats stacked together`,
              matchPhrase: `Yes! 10 hundred-flats bundle into a THOUSAND-cube! That's 1,000 cubes total!`,
              correctMatch: `makes_thousand` },
            { id: `l02-g4`, image: `l02-game-4.webp`, label: `10 single cookies on a tray`,
              matchPhrase: `Perfect! 10 singles bundle into a TEN! Doesn't matter if it's cubes or cookies — 10 of anything makes a ten!`,
              correctMatch: `makes_ten` },
          ],
        },

        {
          id: `l02-quiz`,
          type: `quiz`,
          guideText: `Let's see what you remember, {name}!`,
          questions: [
            { id: `l02-q1`, format: `multiple-choice`,
              question: `How many ones do you need to bundle into 1 ten?`,
              options: [`5`, `10`, `20`, `100`],
              correctIndex: 1,
              explanation: `Exactly 10 ones to bundle into 1 ten! Not five, not nine — always exactly ten. That's the base-ten rule!` },
            { id: `l02-q2`, format: `true-false`,
              question: `Bundling changes the TOTAL number of things.`,
              correctAnswer: false,
              explanation: `False! Bundling only reorganizes — never changes the total. Ten loose ones become one ten, but the amount is exactly the same!` },
            { id: `l02-q3`, format: `multiple-choice`,
              question: `What do you get when you bundle 10 hundreds together?`,
              options: [`10`, `100`, `1,000`, `10,000`],
              correctIndex: 2,
              explanation: `Ten hundreds bundle into one thousand! The pattern: 10 ones → 1 ten, 10 tens → 1 hundred, 10 hundreds → 1 thousand!` },
            { id: `l02-q4`, format: `true-false`,
              question: `Humans use base ten partly because we have ten fingers.`,
              correctAnswer: true,
              explanation: `True! Base ten likely started because ancient people counted on their ten fingers. Ten fingers made ten the natural stopping point!` },
            { id: `l02-q5`, format: `multiple-choice`,
              question: `In the number 340, the 4 in the tens place means:`,
              options: [`Four singles`, `Four bundles of ten (forty)`, `Four hundreds`, `Four thousands`],
              correctIndex: 1,
              explanation: `The 4 in the tens place means four bundles of ten — which equals forty!` },
            { id: `l02-q6`, format: `fill-blank`,
              question: `Fill in the blank: 10 tens = 1 ___.`,
              options: [`hundred`, `thousand`, `ten`, `million`],
              correctIndex: 0,
              explanation: `Ten tens bundle into one hundred! Each step is 10 times the last!` },
          ],
        },

        {
          id: `l02-realworld`,
          type: `real-world`,
          guideText: `Bundling is EVERYWHERE in real life, {name}! Eggs come in cartons. Dollar bills bundle into stacks at the bank. 60 seconds bundle into 1 minute. 60 minutes bundle into 1 hour! These bundles exist because groups make big amounts EASY to handle. Now that you know the pattern, you'll spot it everywhere!`,
          familyAdventure: `Do a BUNDLING TREASURE HUNT! Walk around your home and find 3 things that come in bundles or groups. How many are in each bundle? If you collected 10 of those bundles, how many would you have? Share what you find!`,
          creativePrompt: `Draw a BUNDLING LADDER! At the bottom, draw 10 tiny squares (ones). Arrow up to 1 rectangle (a ten). Draw 10 rectangles, arrow up to 1 big square (a hundred). Draw 10 squares, arrow up to 1 cube (a thousand)! You just drew how place value works!`,
        },

        {
          id: `l02-celebration`,
          type: `celebration`,
          message: `Amazing work, {name}! You now understand BUNDLING — the engine that powers place value! 10 ones make 1 ten. 10 tens make 1 hundred. 10 hundreds make 1 thousand. The pattern goes up FOREVER! And you know WHY we use base ten — because of your own 10 fingers! Remi is so proud of you! 🦝`,
          badge: `bundling-explorer`,
          badgeName: `Bundling Explorer`,
          xpEarned: 50,
        },

      ],
    },
  ],
};

export default MATH_L02;

// ─── Dev asset check ─────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const mags  = MATH_L02.lessons[0].screens.filter(s => s.type === 'magazine').length;
  const game  = MATH_L02.lessons[0].screens.find(s => s.type === 'interactive')?.items?.length ?? 0;
  const quiz  = MATH_L02.lessons[0].screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  console.log(`[LESSON-MATH-L02] Loaded: "Bundling" with ${mags} magazine sections, ${game} game items, ${quiz} quiz questions`);
}
