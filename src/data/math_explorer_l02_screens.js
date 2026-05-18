// ─────────────────────────────────────────────────────────────────────────────
// MATH  |  L02 — Bundling into Groups
// Age band : explorers (6–8)   Guide: remi
// Standards: CCSS 2.NBT.A.1 (understand place value, bundling by tens)
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
          guideText: `Hi {name}! Remi here. Last time we discovered PLACE VALUE — the idea that WHERE a digit sits changes what it's worth. Today we go DEEPER. Why are places worth what they're worth? The answer is BUNDLING. When you have ten of something, you bundle them up into one bigger thing. Ten ones become one ten. Ten tens become one hundred. It's a pattern that goes on forever. Let's bundle!`,
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
            `Imagine you have a huge pile of 247 tiny pebbles scattered all over the floor. You want to count them. You start: one, two, three, four... forty-seven, forty-eight... By the time you reach seventy-something, you've probably lost count twice.`,
            `Counting one by one is hard and slow when numbers get big. There must be a smarter way. And there is — it's called BUNDLING. Instead of counting every single thing separately, we GATHER things into organized GROUPS. Groups make counting fast and easy. This idea is so powerful, it's built into our entire number system.`,
          ],
          image: `/explorer-assets/math/l02-s1-too-many-to-count.webp`,
          imageCaption: `Loose objects scattered everywhere = hard to count. Bundled into groups = fast and easy.`,
          vocab: [
            { word: `bundle`,
              definition: `To GROUP things together. Bundling makes large collections easier to count.`,
              audioPrompt: `A bundle, {name}, is a group of things gathered together. When we bundle, we collect a certain number of things and treat them as one unit. Ten single cubes bundled together become one ten-rod. Bundling is the secret behind how place value works. Instead of counting every tiny piece, you count the bundles.` },
            { word: `group`,
              definition: `Several things COLLECTED TOGETHER. A group of ten is what we bundle in our number system.`,
              audioPrompt: `A group, {name}, means several things collected together. In place value, we use groups of ten. Why ten? Because we have ten fingers — people have been counting in groups of ten for thousands of years. When you put things into groups, big messy piles become organized and easy to understand.` },
            { word: `count`,
              definition: `To find the TOTAL number of things. Bundling makes counting fast and accurate.`,
              audioPrompt: `To count, {name}, is to find the total number of things. Counting one by one works for small amounts, but gets tricky fast with larger numbers. Bundling into groups lets us count much more efficiently. Instead of counting 247 singles, we count 2 hundreds, 4 tens, and 7 ones — much faster!` },
          ],
        },

        {
          id: `l02-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `10 Ones Make 1 Ten`,
          paragraphs: [
            `Here's the first bundling rule — the most important one. Collect TEN single units, and you can bundle them into ONE group called a TEN. Ten ones become one ten. The total amount stays EXACTLY the same — you still have the same quantity. You just REORGANIZED it.`,
            `Imagine ten little cubes. Count them: one, two, three... ten. Now snap them together into one tall rod. That rod is worth ten. You haven't added anything or taken anything away — you've just bundled. This is what happens in the TENS PLACE. Every digit in the tens place is telling you how many of those ten-rods you have.`,
          ],
          image: `/explorer-assets/math/l02-s2-ten-ones-make-a-ten.webp`,
          imageCaption: `10 single cubes → 1 ten-rod. Same amount, different shape. Bundling doesn't change the total.`,
          vocab: [
            { word: `ones`,
              definition: `Single units — the smallest pieces. Ten ones bundle together to make ONE TEN.`,
              audioPrompt: `Ones, {name}, are single units — the smallest pieces in place value. Before you can bundle, you start with ones. Count ten of them, and you've got enough to make a ten. The ones place in any number tells you how many singles are left over after you've made all your bundles.` },
            { word: `ten`,
              definition: `A BUNDLE of ten ones. The tens place counts how many ten-bundles you have.`,
              audioPrompt: `A ten, {name}, is a bundle of exactly ten ones. In place value, the tens place counts how many of these bundles you have. If you have 4 in the tens place, you have four ten-bundles, which equals forty. Ten is the magic number in our base-ten system — always bundle by ten, never by nine or eleven.` },
            { word: `exchange`,
              definition: `To TRADE one thing for something equal in value. 10 ones exchange for 1 ten.`,
              audioPrompt: `Exchange, {name}, means to trade one thing for something equal in value. In place value, you exchange ten ones for one ten, or ten tens for one hundred. The exchange doesn't change how much you have — it just reorganizes it into a more useful form. Think of it like trading ten pennies for one dime. Same value, different package.` },
          ],
        },

        {
          id: `l02-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `10 Tens Make 1 Hundred`,
          paragraphs: [
            `The bundling pattern keeps going! What if you have TEN ten-rods? Count them: ten, twenty, thirty, forty, fifty, sixty, seventy, eighty, ninety, one hundred. Ten rods = one hundred singles.`,
            `Now bundle those ten rods together into one flat SQUARE — that square holds one hundred units arranged in a ten-by-ten grid. The HUNDREDS PLACE counts how many of these hundred-squares you have. In the number 300, the 3 means THREE of these squares — three hundred singles all organized into three neat flat squares.`,
          ],
          image: `/explorer-assets/math/l02-s3-ten-tens-make-a-hundred.webp`,
          imageCaption: `10 ten-rods → 1 hundred-flat (a 10×10 square). Ten tens equals one hundred. Bundle up!`,
          vocab: [
            { word: `hundred`,
              definition: `A bundle of TEN TENS. The hundreds place counts how many hundred-flats you have.`,
              audioPrompt: `A hundred, {name}, is a bundle of ten tens — or one hundred single ones. In place value, the hundreds place counts how many of these hundred-bundles you have. Five in the hundreds place means five hundreds, which equals five hundred. Hundreds are built from tens, which are built from ones. Every place value is a bundle of the place below it.` },
            { word: `flat`,
              definition: `A SQUARE BLOCK representing one hundred. Ten rods stacked make one flat.`,
              audioPrompt: `A flat, {name}, is the name for the square block that represents one hundred. It's flat because it's a square — ten units wide and ten units tall. Ten ten-rods placed side by side make one flat. When you look at a flat, you can see all one hundred tiny cubes arranged in a perfect ten-by-ten grid. That's one flat.` },
            { word: `grid`,
              definition: `A PATTERN of rows and columns. A hundred-flat shows a 10×10 grid of single units.`,
              audioPrompt: `A grid, {name}, is a pattern made of rows and columns. The hundred-flat shows a ten-by-ten grid — ten rows of ten. You can count them: ten in the first row, ten in the second, all the way to ten rows. Ten times ten equals one hundred. Grids help us visualize how bundles are organized inside each place value.` },
          ],
        },

        {
          id: `l02-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `10 Hundreds Make 1 Thousand`,
          paragraphs: [
            `The pattern just keeps climbing. What if you collect TEN of those hundred-flats? Count them: one hundred, two hundred, three hundred... ten hundred. That's ONE THOUSAND. And just like before, we bundle them.`,
            `Stack ten hundred-flats into one big CUBE — that cube holds exactly one thousand single units. The thousands place counts how many thousand-cubes you have. In the number 2,000, the 2 means TWO thousand-cubes — two thousand singles all bundled up. Every time you collect ten of any place, you bundle into the next place up. Ten ones → one ten. Ten tens → one hundred. Ten hundreds → one thousand. The engine never stops.`,
          ],
          image: `/explorer-assets/math/l02-s4-ten-hundreds-make-a-thousand.webp`,
          imageCaption: `10 hundred-flats → 1 thousand-cube. Same bundling rule, just one level higher. Up forever!`,
          vocab: [
            { word: `thousand`,
              definition: `A bundle of TEN HUNDREDS. Written as 1,000. Ten hundreds bundled into one cube.`,
              audioPrompt: `A thousand, {name}, is a bundle of ten hundreds — or one thousand single ones. Written as 1,000. It's the fourth place in our number system, right after hundreds. A thousand-cube is quite large — imagine a block with ten flat layers, each layer ten units wide and ten units deep. One thousand tiny cubes all together.` },
            { word: `cube`,
              definition: `A 3D BOX SHAPE with equal sides. The thousand-block is a cube made of 1,000 tiny ones.`,
              audioPrompt: `A cube, {name}, is a three-dimensional box shape where all sides are equal length. The thousand-block is a cube — the same length, width, and height. Inside it are one thousand tiny single cubes. Ones are cubes too, just tiny. Tens are rods. Hundreds are flats. Thousands are cubes again — the pattern of shapes repeats as you go up.` },
            { word: `trade`,
              definition: `To SWAP a pile of ten for the next higher place value. Ten hundreds trade for one thousand.`,
              audioPrompt: `Trade, {name}, means to swap a pile of ten for the next higher place value. When you have ten hundreds, you trade them for one thousand. When you have ten tens, you trade for one hundred. Trading always works the same way — ten of this place becomes one of the next place up. No value is lost. Just reorganized.` },
          ],
        },

        {
          id: `l02-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Why Do We Bundle by Ten?`,
          paragraphs: [
            `You might wonder — why ten? Why not bundle by five, or twelve, or twenty? The answer is surprisingly simple: FINGERS.`,
            `Humans have ten fingers. Long ago, before written numbers existed, people counted on their fingers. Ten fingers made ten the most natural stopping point. When you ran out of fingers, you started a new group. Almost every ancient culture on Earth — from India to China to Egypt to the Americas — ended up using a system based on ten. It's called BASE TEN. When India invented the zero and place value system about 1,500 years ago, base ten became the standard for the whole world. Your ten fingers are older than math itself.`,
          ],
          image: `/explorer-assets/math/l02-s5-why-ten.webp`,
          imageCaption: `Ten fingers → base ten. People counted on their fingers for thousands of years before writing numbers.`,
          vocab: [
            { word: `base ten`,
              definition: `A NUMBER SYSTEM where we bundle and count by TENS. Our whole number system is base ten.`,
              audioPrompt: `Base ten, {name}, is a number system where we bundle and count by tens. Our whole number system is base ten — also called the decimal system. Every place is ten times bigger than the place to its right. Base ten is probably the most successful idea in the history of math. It was invented in India, spread across the Islamic world, reached Europe, and now everyone on Earth uses it.` },
            { word: `system`,
              definition: `A SET OF RULES that work together. Place value is a system for writing numbers.`,
              audioPrompt: `A system, {name}, is a set of rules that work together. Place value is a system — a set of rules for writing any number using just ten digits. The rules are: each place is ten times the place to its right, and when you collect ten of one place, you bundle into the next. Those two simple rules make the whole system work.` },
            { word: `natural`,
              definition: `EASY and FAMILIAR because it fits how things work. Ten fingers make base ten feel natural.`,
              audioPrompt: `Natural, {name}, means easy and familiar because it fits how things work. Base ten feels natural to humans because of our ten fingers. We didn't have to force ourselves to use it — it grew from how our bodies already work. When something is natural, it gets used. That's why base ten spread to every culture that encountered it.` },
          ],
        },

        {
          id: `l02-mag-6`,
          type: `magazine`,
          section: 6,
          headline: `The Pattern Goes Up Forever`,
          paragraphs: [
            `Here's something that might blow your mind: the bundling pattern NEVER ends. Ten ones make a ten. Ten tens make a hundred. Ten hundreds make a thousand. Ten thousands make a ten-thousand. Ten ten-thousands make a hundred-thousand. Ten hundred-thousands make a million.`,
            `And it keeps going. Billion. Trillion. Quadrillion. Quintillion. Numbers so big they barely have names. Every step follows the EXACT SAME RULE — collect ten, bundle up. This is why numbers can be INFINITE. There's always one more you can reach just by adding another place. Our ten digits, arranged by place value, can count everything in the universe — and beyond. Pretty incredible.`,
          ],
          image: `/explorer-assets/math/l02-s6-pattern-goes-up-forever.webp`,
          imageCaption: `Ones → tens → hundreds → thousands → … The bundling pattern climbs forever with no limit.`,
          vocab: [
            { word: `pattern`,
              definition: `Something that REPEATS predictably. Bundling by ten is a pattern that climbs forever.`,
              audioPrompt: `A pattern, {name}, is something that repeats in a predictable way. The bundling pattern in place value is one of the most powerful patterns in math. Collect ten, bundle up. Collect ten, bundle up. It repeats at every level. Once you see the pattern, you understand how every number works — no matter how big.` },
            { word: `place value`,
              definition: `The VALUE of a digit based on its POSITION. Place value uses the bundling pattern at every level.`,
              audioPrompt: `Place value, {name}, is the value of a digit based on its position. Place value uses the bundling pattern at every level — each place is ten times the place to its right. When you know one place, you know them all, because the rule is always the same. Place value is the foundation of arithmetic, algebra, and all of mathematics.` },
            { word: `infinite`,
              definition: `WITHOUT END. Numbers are infinite — the bundling pattern means they go on forever.`,
              audioPrompt: `Infinite, {name}, means without end. Numbers are infinite. No matter how big a number you name, you can always add one more. The bundling pattern makes this possible — you can always add another place to the left, making a number ten times bigger. That's why there's no biggest number. Infinite is a big idea, and place value is what makes it real.` },
          ],
        },

        {
          id: `l02-game`,
          type: `interactive`,
          format: `drag-match`,
          guideText: `Let's sort these bundling statements, {name} — fact or myth?`,
          buckets: [
            { id: `fact`, label: `✅ Yes, that's true!`, color: `#34D399` },
            { id: `myth`, label: `❌ No way!`,           color: `#F87171` },
          ],
          items: [
            { id: `l02-g1`, image: `l02-game-1.webp`, label: `10 ones ALWAYS equal exactly 1 ten — every time, no exceptions.`,
              matchPhrase: `True! Ten ones bundle into exactly one ten. Always. The rule never changes. That's what makes place value reliable.`,
              correctMatch: `fact` },
            { id: `l02-g2`, image: `l02-game-2.webp`, label: `Bundling into groups makes large numbers EASIER and FASTER to count.`,
              matchPhrase: `True! Counting 247 ones one by one is slow. Counting 2 hundreds, 4 tens, and 7 ones is instant. Bundling is the whole point.`,
              correctMatch: `fact` },
            { id: `l02-g3`, image: `l02-game-3.webp`, label: `5 ones can bundle into 1 ten — halfway there is close enough!`,
              matchPhrase: `Not even close! You need exactly 10 ones to make 1 ten. Five ones is half a ten. Close enough doesn't count in math.`,
              correctMatch: `myth` },
            { id: `l02-g4`, image: `l02-game-4.webp`, label: `When you bundle things into groups, the TOTAL AMOUNT gets smaller.`,
              matchPhrase: `Nope! Bundling only reorganizes — it never changes the total. Ten loose cubes bundled into a ten-rod is still ten. Same amount, neater package.`,
              correctMatch: `myth` },
          ],
        },

        {
          id: `l02-quiz`,
          type: `quiz`,
          guideText: `Quiz time, {name}! Let's see what you know about bundling.`,
          questions: [
            { id: `l02-q1`, format: `multiple-choice`,
              question: `How many ones do you need to bundle into 1 ten?`,
              options: [`5`, `10`, `20`, `100`],
              correctIndex: 1,
              explanation: `You need exactly 10 ones to bundle into 1 ten. Not five, not nine — always exactly ten. That's the base-ten rule.` },
            { id: `l02-q2`, format: `true-false`,
              question: `Bundling changes the TOTAL number of objects.`,
              correctAnswer: false,
              explanation: `False! Bundling only reorganizes — it never changes the total. Ten loose ones become one ten, but the amount is exactly the same.` },
            { id: `l02-q3`, format: `multiple-choice`,
              question: `What do you get when you bundle 10 hundreds together?`,
              options: [`10`, `100`, `1,000`, `10,000`],
              correctIndex: 2,
              explanation: `Ten hundreds bundle into one thousand (1,000). The pattern: ten ones → one ten, ten tens → one hundred, ten hundreds → one thousand.` },
            { id: `l02-q4`, format: `true-false`,
              question: `Humans use base ten partly because we have ten fingers.`,
              correctAnswer: true,
              explanation: `True! Base ten likely started because ancient people counted on their ten fingers. Ten fingers made ten the most natural stopping point.` },
            { id: `l02-q5`, format: `multiple-choice`,
              question: `In the number 340, the 4 in the tens place means:`,
              options: [`Four singles`, `Four bundles of ten (forty)`, `Four hundreds`, `Four thousands`],
              correctIndex: 1,
              explanation: `The 4 in the tens place means four bundles of ten — which equals forty. Each digit in the tens place counts how many ten-bundles you have.` },
            { id: `l02-q6`, format: `fill-blank`,
              question: `Fill in the blank: 10 tens = 1 ___.`,
              options: [`hundred`, `thousand`, `ten`, `million`],
              correctIndex: 0,
              explanation: `Ten tens bundle into one hundred. The bundling pattern goes: ones → tens → hundreds → thousands. Each step is ten times the last.` },
          ],
        },

        {
          id: `l02-realworld`,
          type: `real-world`,
          guideText: `{name}, bundling is everywhere in the real world — and now that you know the pattern, you'll spot it all the time. Eggs come in cartons of 12 (close to ten!). Dollar bills get bundled into stacks of 10 or 100 at the bank. Time is bundled: 60 seconds make a minute, 60 minutes make an hour, 24 hours make a day. Pencils are sold in boxes of 10. Even your birthday candles come in packs of ten. These bundles exist because groups make big quantities easy to handle. Ancient humans figured that out by counting on their fingers — and the idea stuck for thousands of years.`,
          familyAdventure: `Do a BUNDLING TREASURE HUNT! Walk around your home and find 3 things that come in groups or bundles. They don't have to be exactly ten — just anything that comes packaged or organized in a group. For each one, ask: how many are in one bundle? If you collected 10 of those bundles, how many would you have? Share what you find!`,
          creativePrompt: `Draw a BUNDLING LADDER. At the bottom, draw 10 tiny squares (ones). Bundle them with an arrow pointing up to 1 rectangle (a ten). Draw 10 of those rectangles, bundle them with an arrow to 1 big square (a hundred). Draw 10 of those squares and bundle them into a cube (a thousand). Label each level. You've just drawn how place value works!`,
        },

        {
          id: `l02-celebration`,
          type: `celebration`,
          message: `{name}, you did it! You now understand BUNDLING — the engine that powers place value. You know that 10 ones make 1 ten, 10 tens make 1 hundred, and 10 hundreds make 1 thousand. You know the pattern goes up FOREVER. And you know WHY we use base ten — because of your own ten fingers. Place value is starting to make real sense. Next we'll explore how to ADD with place value. See you there! — Remi 🦝`,
          badge: `bundling-explorer`,
          badgeName: `Bundling Explorer`,
          xpEarned: 50,
        },

      ],
    },
  ],
};

export default MATH_L02;

// ─── Dev asset check ───────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const mags  = MATH_L02.lessons[0].screens.filter(s => s.type === 'magazine').length;
  const game  = MATH_L02.lessons[0].screens.find(s => s.type === 'interactive')?.items?.length ?? 0;
  const quiz  = MATH_L02.lessons[0].screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  console.log(`[LESSON-MATH-L02] Loaded: "Bundling into Groups" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
}
