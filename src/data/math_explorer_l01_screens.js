// ─────────────────────────────────────────────────────────────────────────────
// MATH  |  L01 — Place Value: Ones, Tens, Hundreds
// Age band : explorers (6–8)   Guide: remi
// Standards: CCSS 1.NBT.B.2 / 2.NBT.A.1 (place value understanding)
// ─────────────────────────────────────────────────────────────────────────────

const MATH_L01 = {
  ageBand:   `explorers`,
  subjectId: `math`,
  guide:     `remi`,

  lessons: [
    {
      id:        `math-6-8-01`,
      title:     `Place Value: Ones, Tens, Hundreds`,
      duration:  12,
      xpReward:  50,
      badge:     `place-value-explorer`,
      badgeName: `Place Value Explorer`,

      screens: [

        {
          id: `l01-welcome`,
          type: `welcome`,
          guideText: `Hi {name}! I'm Remi the Raccoon. I LOVE numbers — especially organizing them. Today we'll explore one of the COOLEST ideas in math — PLACE VALUE. It's the secret that lets us count to a hundred, a thousand, a million, and beyond. With just TEN little symbols. Pretty neat, right? Let's dig in.`,
          headline: `Place Value: Ones, Tens, Hundreds`,
          subtitle: `The secret that lets just 10 digits build every number in the universe`,
          visual: `/explorer-assets/math/l01-welcome.webp`,
        },

        {
          id: `l01-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Position Changes EVERYTHING`,
          paragraphs: [
            `Here's a cool puzzle. Look at the digit 7. By itself, 7 means seven. Easy.`,
            `But now put 7 in different SPOTS in a number. In the number 17, the 7 is at the END — it still means seven. In the number 70, the 7 has moved one spot LEFT — now it means SEVENTY (that's ten 7s!). In the number 700, the 7 has moved one more spot left — now it means SEVEN HUNDRED (that's a hundred 7s!). Same digit. Different meanings. That's PLACE VALUE. Where a digit SITS changes what it's WORTH. This is one of the biggest ideas in all of math.`,
          ],
          image: `/explorer-assets/math/l01-s1-position-matters.webp`,
          imageCaption: `Same digit 7 in different positions = totally different values. 7 vs 70 vs 700. POSITION matters.`,
          vocab: [
            { word: `digit`,          definition: `One of the 10 SYMBOLS we use for numbers — 0, 1, 2, 3, 4, 5, 6, 7, 8, 9.`,
              audioPrompt: `A digit, {name}, is one of the ten symbols we use for numbers. Zero. One. Two. Three. Four. Five. Six. Seven. Eight. Nine. Just ten digits. From those ten, we can build every number that exists. Pretty amazing when you think about it. The word digit also means finger — and we count on our fingers. That's why they're called digits.` },
            { word: `position`,       definition: `WHERE a digit SITS in a number. POSITION changes what the digit is worth.`,
              audioPrompt: `Position, {name}, is where a digit sits in a number. Position changes what the digit is worth. The 5 in 51 is in a different position than the 5 in 15. Same digit. Different value. Position is the secret of how our number system works. Without position, we'd need a different symbol for every number — and we'd run out fast.` },
            { word: `place value`,    definition: `The VALUE a digit has based on its POSITION. PLACE VALUE is math's superpower.`,
              audioPrompt: `Place value, {name}, is the value a digit has based on its position. Place value is math's superpower. It lets us write any number — small or huge — using only ten digits. The same digit 3 can mean three, or thirty, or three hundred, depending on where it sits. Once you understand place value, big numbers stop feeling scary.` },
          ],
        },

        {
          id: `l01-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `The ONES Place`,
          paragraphs: [
            `Let's start with the easiest spot — the ONES PLACE. That's the spot on the FAR RIGHT of a number.`,
            `In the number 8, the 8 is in the ones place — it means EIGHT little single units. In the number 24, the 4 is in the ones place — it means FOUR singles. In the number 359, the 9 is in the ones place — NINE singles. Imagine little cubes. One cube = one. Two cubes = two. The ones place counts the SINGLE cubes. It's the simplest place. It can hold any digit from 0 (zero singles) up to 9 (nine singles). Then if you have ten singles, something special happens — but we'll get to that next.`,
          ],
          image: `/explorer-assets/math/l01-s2-ones-place.webp`,
          imageCaption: `Ones place: the spot on the far RIGHT. Counts single units. Holds digits 0 through 9.`,
          vocab: [
            { word: `ones place`,     definition: `The spot on the FAR RIGHT of a number. Counts SINGLE units. Holds 0 through 9.`,
              audioPrompt: `The ones place, {name}, is the spot on the far right of a number. It counts single units. In the number 47, the 7 is in the ones place — it means seven singles. The ones place can hold any digit from zero to nine. When you have ten or more singles, you have to bundle them into something bigger. That's where the next place comes in.` },
            { word: `single`,         definition: `One BY ITSELF. The ones place counts SINGLES — like one cube or one cookie.`,
              audioPrompt: `Single, {name}, means one by itself. The ones place counts singles. One cube. One cookie. One pencil. Each is a single thing. When you count one-by-one, you're working with singles. The ones place is the home of singles in our number system.` },
            { word: `far right`,      definition: `The LAST spot on the right side. The ONES place is the FAR RIGHT digit in a number.`,
              audioPrompt: `Far right, {name}, is the last spot on the right side. The ones place is the far right digit in a number. When you read a number like 538, your eye sees three digits — but the 8 on the right is special. It's the ones digit. Always check the rightmost digit first when you want to know how many singles you have.` },
          ],
        },

        {
          id: `l01-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `The TENS Place — Bundles of 10`,
          paragraphs: [
            `Now here's where it gets clever. What if you have TEN single cubes? Counting them as ten singles works — but there's a SMARTER way.`,
            `You can BUNDLE them. Tie ten singles together into ONE ROD. That rod equals 10. The TENS PLACE is the spot just LEFT of the ones place. It counts how many TEN-RODS you have. In the number 30, the 3 is in the tens place — it means THREE rods of ten = THIRTY. In the number 64, the 6 is in the tens place — SIX rods = sixty. The tens place can hold 0 through 9 — meaning zero to nine rods. After 9 rods (which is 90), something MORE happens. Place value keeps going!`,
          ],
          image: `/explorer-assets/math/l01-s3-tens-place.webp`,
          imageCaption: `Tens place: spot just LEFT of ones. Counts bundled rods of 10. 3 rods = 30. 6 rods = 60.`,
          vocab: [
            { word: `tens place`,     definition: `The spot just LEFT of ones. Counts how many BUNDLES OF TEN you have.`,
              audioPrompt: `The tens place, {name}, is the spot just left of the ones place. It counts how many bundles of ten you have. In the number 52, the 5 is in the tens place — it means five tens, which is fifty. The tens place can hold zero through nine. Each one represents a bundle of ten — like a stack of ten or a rod made of ten cubes.` },
            { word: `bundle`,         definition: `To GROUP TOGETHER. We BUNDLE 10 singles into 1 rod to make counting easier.`,
              audioPrompt: `To bundle, {name}, is to group together. We bundle ten singles into one rod to make counting easier. Imagine you have twenty-three cubes. Instead of counting one by one, you bundle them into two rods of ten and three singles. Two rods plus three singles equals twenty-three. Bundling is the heart of place value. It makes big numbers manageable.` },
            { word: `ten`,            definition: `The NUMBER ten — and the BUNDLE we use for place value. The TENS place counts groups of TEN.`,
              audioPrompt: `Ten, {name}, is the number ten — and the bundle we use for place value. Our number system is built on tens. That's called base ten. Probably because we have ten fingers. Ancient people counted on their fingers and built a system around groups of ten. The tens place counts how many full groups of ten you've got.` },
          ],
        },

        {
          id: `l01-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `The HUNDREDS Place — Bundles of 100`,
          paragraphs: [
            `Same idea, bigger bundle. What if you have TEN RODS of ten? That's a HUNDRED singles. Too much to count one by one.`,
            `So we BUNDLE the ten rods into ONE FLAT — a big square made of 100 singles. The HUNDREDS PLACE is the spot just LEFT of the tens place. It counts how many FLATS of 100 you have. In the number 200, the 2 is in the hundreds place — TWO flats = TWO HUNDRED. In the number 547, the 5 is in the hundreds place — FIVE flats = FIVE HUNDRED. The hundreds place can also hold 0 through 9. So the biggest 3-digit number is 999 (nine hundreds, nine tens, nine ones). After that? Bundle again — but that's another lesson.`,
          ],
          image: `/explorer-assets/math/l01-s4-hundreds-place.webp`,
          imageCaption: `Hundreds place: spot left of tens. Counts flats of 100. 2 flats = 200. 5 flats = 500.`,
          vocab: [
            { word: `hundreds place`, definition: `The spot LEFT of tens. Counts how many FLATS of 100 you have.`,
              audioPrompt: `The hundreds place, {name}, is the spot left of tens. It counts how many flats of one hundred you have. In the number 372, the 3 is in the hundreds place — it means three hundreds, which is three hundred. The hundreds place can hold zero through nine, just like the others. Three places — ones, tens, hundreds — lets us write any number from zero to 999.` },
            { word: `flat`,           definition: `A bundle of 100 — TEN rods of ten put together. The HUNDREDS place counts FLATS.`,
              audioPrompt: `A flat, {name}, is a bundle of one hundred — ten rods of ten put together. Imagine a flat square made of one hundred tiny cubes in a ten-by-ten grid. The hundreds place counts flats. Two flats means two hundred. Five flats means five hundred. Bundling helps us handle big numbers without going crazy.` },
            { word: `three-digit`,    definition: `A number with THREE digits — ones, tens, and hundreds. Examples — 100 to 999.`,
              audioPrompt: `Three-digit, {name}, is a number with three digits — ones, tens, and hundreds. Examples are one hundred up to nine hundred ninety-nine. Three-digit numbers are where place value really starts to shine. With just three positions, you can write nine hundred ninety-nine different numbers. That's a lot of numbers from just three little slots.` },
          ],
        },

        {
          id: `l01-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Reading Numbers Like 247`,
          paragraphs: [
            `Now let's PUT IT ALL TOGETHER. Take the number 247. Three digits. Each one in a different place.`,
            `Start from the LEFT. The 2 is in the HUNDREDS place — it means TWO HUNDRED. The 4 is in the TENS place — it means FORTY (four tens). The 7 is in the ONES place — it means SEVEN. Add them up: 200 + 40 + 7 = 247. That's it. That's how we READ numbers. Try 358 — three hundred fifty-eight. Try 902 — nine hundred two. Try 580 — five hundred eighty. Each digit's position tells you exactly what it's worth. Once you see place value, numbers stop being scary and start making sense.`,
          ],
          image: `/explorer-assets/math/l01-s5-reading-numbers.webp`,
          imageCaption: `Reading 247: 2 hundreds + 4 tens + 7 ones = 200 + 40 + 7. Each position has its own value.`,
          vocab: [
            { word: `read a number`,  definition: `To say a number OUT LOUD using place value. 247 is "two hundred forty-seven."`,
              audioPrompt: `To read a number, {name}, is to say it out loud using place value. 247 is two hundred forty-seven. Start with the leftmost digit and work right. The hundreds digit gives you the hundreds. The tens digit gives you the tens. The ones digit gives you the ones. Reading numbers gets easier the more you practice.` },
            { word: `add up`,         definition: `Putting the VALUES TOGETHER. 247 = 200 + 40 + 7 when you ADD UP each place.`,
              audioPrompt: `To add up, {name}, is putting the values together. 247 equals 200 plus 40 plus 7 when you add up each place. This is one of the most useful ideas in math. Any multi-digit number is just the sum of its place values. 358 equals 300 plus 50 plus 8. Once you see this, you can break apart any number to understand it better.` },
            { word: `make sense`,     definition: `To become CLEAR. Once you see PLACE VALUE, numbers MAKE SENSE.`,
              audioPrompt: `To make sense, {name}, is to become clear. Once you see place value, numbers make sense. Before, big numbers might have looked random — a bunch of digits in a row. After place value, you can see exactly what each digit is worth. Numbers go from feeling confusing to feeling logical. Math becomes a language you understand.` },
          ],
        },

        {
          id: `l01-mag-6`,
          type: `magazine`,
          section: 6,
          headline: `Just 10 Digits — Infinite Numbers`,
          paragraphs: [
            `Here's the BIG idea, {name}. With just TEN little digits (0 through 9), we can write EVERY NUMBER that exists. Forever. Infinity.`,
            `That's because of PLACE VALUE. After 9 ones, we bundle into a ten. After 9 tens, we bundle into a hundred. After 9 hundreds, into a thousand. Then ten thousand. Hundred thousand. Million. Billion. Trillion. Each new place is ten times bigger than the last. Just by SHIFTING POSITION, our ten digits become unlimited. Ancient people figured this out thousands of years ago, and it changed math forever. Before place value, counting big numbers was a nightmare. After place value, you can count to a million on a napkin. Pretty incredible for just ten little symbols.`,
          ],
          image: `/explorer-assets/math/l01-s6-place-value-power.webp`,
          imageCaption: `999 → 1000. Place value lets 10 digits build INFINITE numbers. The system goes up forever.`,
          vocab: [
            { word: `ten digits`,     definition: `The SYMBOLS 0 through 9. With just TEN DIGITS, we can write any number.`,
              audioPrompt: `Ten digits, {name}, are the symbols zero through nine. With just ten digits, we can write any number. From zero to a billion to a trillion to numbers so big they have names you've never heard. All built from ten simple symbols. That's the magic of place value. Such a small set of tools, used to count the entire universe.` },
            { word: `bundle up`,      definition: `When you have 10 of one place, you BUNDLE UP into the next bigger place.`,
              audioPrompt: `Bundle up, {name}, means when you have ten of one place, you bundle up into the next bigger place. Ten ones bundle up into one ten. Ten tens bundle up into one hundred. Ten hundreds bundle up into one thousand. The pattern keeps going forever. Each bundle is ten times bigger than the last. Bundling up is the engine that makes place value work.` },
            { word: `infinite`,       definition: `WITHOUT END. Place value lets us write INFINITE numbers — they never stop.`,
              audioPrompt: `Infinite, {name}, means without end. Place value lets us write infinite numbers — they never stop. You can always add another digit to make a bigger number. Quadrillion. Quintillion. Numbers so big they don't have everyday names. The system never runs out. Place value gives us a way to write any quantity, no matter how huge. Truly amazing.` },
          ],
        },

        {
          id: `l01-game`,
          type: `interactive`,
          format: `drag-match`,
          guideText: `Let's see what you remember, {name}.`,
          buckets: [
            { id: `fact`, label: `✅ Yes, that's true!`, color: `#34D399` },
            { id: `myth`, label: `❌ No way!`,         color: `#F87171` },
          ],
          items: [
            { id: `l01-g1`, image: `l01-game-1.webp`, label: `The POSITION of a digit CHANGES its VALUE — 7 in the tens place means 70, not 7.`,
              matchPhrase: `Yes! Position is everything in place value. The same digit means different things in different positions. That's the whole secret.`,
              correctMatch: `fact` },
            { id: `l01-g2`, image: `l01-game-2.webp`, label: `With just 10 DIGITS (0-9), we can build EVERY NUMBER that exists — infinity of them.`,
              matchPhrase: `True! Place value lets ten little symbols write every possible number. From one to a trillion to numbers with hundreds of digits. All from just 0 through 9.`,
              correctMatch: `fact` },
            { id: `l01-g3`, image: `l01-game-3.webp`, label: `Position doesn't matter — 27 and 72 mean exactly the same thing.`,
              matchPhrase: `Not at all! 27 is twenty-seven (2 tens + 7 ones). 72 is seventy-two (7 tens + 2 ones). Same digits, different positions, totally different numbers.`,
              correctMatch: `myth` },
            { id: `l01-g4`, image: `l01-game-4.webp`, label: `We need a different SYMBOL for every number — millions of digits for millions of numbers.`,
              matchPhrase: `Definitely not! That's exactly what place value avoids. Just ten symbols handle every number forever. Position does the work, not the symbols.`,
              correctMatch: `myth` },
          ],
        },

        {
          id: `l01-quiz`,
          type: `quiz`,
          guideText: `Let's see what you remember, {name}.`,
          questions: [
            { id: `l01-q1`, format: `multiple-choice`,
              question: `What does PLACE VALUE mean?`,
              options: [`Numbers are random`, `The VALUE of a digit depends on its POSITION in the number`, `All digits mean the same thing`, `Numbers are just colors`],
              correctIndex: 1,
              explanation: `Place value means the value of a digit depends on its position. The 5 in 53 means 50. The 5 in 35 means 5. Same digit, different positions, different values.` },
            { id: `l01-q2`, format: `multiple-choice`,
              question: `In the number 47, what does the 4 mean?`,
              options: [`Four singles`, `FOUR TENS (which equals 40)`, `Four hundreds`, `Nothing`],
              correctIndex: 1,
              explanation: `The 4 is in the tens place — so it means four tens, which equals 40. The 7 is in the ones place, meaning 7. Together: 40 + 7 = 47.` },
            { id: `l01-q3`, format: `multiple-choice`,
              question: `What does the ones place count?`,
              options: [`Bundles of ten`, `SINGLE units — one at a time`, `Bundles of hundred`, `Letters of the alphabet`],
              correctIndex: 1,
              explanation: `The ones place counts single units. It's the rightmost digit. If you have 6 in the ones place, you have six singles.` },
            { id: `l01-q4`, format: `true-false`,
              question: `In the number 358, the 3 is in the HUNDREDS place — meaning 300.`,
              correctAnswer: true,
              explanation: `True! Reading left to right, 3 is hundreds (300), 5 is tens (50), 8 is ones (8). 300 + 50 + 8 = 358.` },
            { id: `l01-q5`, format: `fill-blank`,
              question: `When you have 10 ones, you ___ them up into one ten.`,
              options: [`bundle`, `forget`, `throw away`, `divide`],
              correctIndex: 0,
              explanation: `Bundle! Ten ones bundle up into one ten. Ten tens bundle up into one hundred. Bundling is how place value works — it lets us handle big numbers without writing forever.` },
            { id: `l01-q6`, format: `multiple-choice`,
              question: `How many DIGITS do we need to write every possible number?`,
              options: [`Millions`, `Just 10 — the digits 0 through 9`, `One thousand`, `Twenty-six`],
              correctIndex: 1,
              explanation: `Just 10 digits! From 0 to 9. Place value lets these ten symbols build every number ever — from 1 to a trillion to infinity. That's the genius of the system.` },
          ],
        },

        {
          id: `l01-realworld`,
          type: `real-world`,
          guideText: `Here's something cool, {name}. Our number system — called BASE TEN — is used all over the world. But it wasn't always this way. Ancient Romans used letters like X, V, I (so 14 was XIV). Hard to do math with! Ancient Egyptians used pictures for each number. Also tough. Place value with just 10 digits was invented in INDIA over 1,500 years ago — and it spread because it's SO MUCH EASIER. Imagine trying to add CXLVII + LXXXII in Roman numerals! Now it's just 147 + 82. Way simpler. Place value is one of humanity's smartest inventions. You're using ancient genius every time you write a number.`,
          familyAdventure: `Together, do a PLACE VALUE HUNT around your home. Pick a 3-digit number — a house number, a page in a book, a price tag, a clock display. For each number you find, say out loud: "The ___ is in the hundreds place, the ___ is in the tens place, the ___ is in the ones place." Try at least 5 numbers. Notice — once you see place value, it's EVERYWHERE.`,
          creativePrompt: `Make a PLACE VALUE PICTURE. Pick any 3-digit number. Draw 3 columns labeled HUNDREDS, TENS, ONES. In the hundreds column, draw big squares (one per hundred). In the tens column, draw tall rectangles (one per ten). In the ones column, draw small dots (one per one). Then count them all up — that's your number, broken into its place values!`,
        },

        {
          id: `l01-celebration`,
          type: `celebration`,
          message: `Awesome work, {name}! You just learned PLACE VALUE — one of the biggest ideas in all of math. You know that POSITION changes a digit's VALUE. You know the ONES place counts singles, the TENS place counts bundles of 10, and the HUNDREDS place counts flats of 100. You know that just 10 little digits can build EVERY NUMBER that exists. Pretty incredible for one lesson. Next time we'll go deeper — into how BUNDLING actually works. See you there! — Remi 🦝`,
          badge: `place-value-explorer`,
          badgeName: `Place Value Explorer`,
          xpEarned: 50,
        },

      ],
    },
  ],
};

export default MATH_L01;

// ─── Dev asset check ───────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const mags  = MATH_L01.lessons[0].screens.filter(s => s.type === 'magazine').length;
  const game  = MATH_L01.lessons[0].screens.find(s => s.type === 'interactive')?.items?.length ?? 0;
  const quiz  = MATH_L01.lessons[0].screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  console.log(`[LESSON-MATH-L01] Loaded: "Place Value" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
}
