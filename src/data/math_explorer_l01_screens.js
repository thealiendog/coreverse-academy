// ─────────────────────────────────────────────────────────────────────────────
// MATH  |  L01 — Place Value: Ones, Tens, Hundreds
// Age band : explorers (6–8)   Guide: remi
// Standards: CCSS 1.NBT.B.2 / 2.NBT.A.1
// REWRITE v2 (May 2026): Grade 1 accessible, ONES/TENS/HUNDREDS
// identification game, audio prompts trimmed to 30-40 words
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
          guideText: `Hi {name}! I'm Remi the Raccoon and I LOVE organizing numbers! Today we explore PLACE VALUE — the secret that lets just 10 little digits build any number you want! Let's go!`,
          headline: `Place Value: Ones, Tens, Hundreds`,
          subtitle: `The secret that lets 10 digits build any number`,
          visual: `/explorer-assets/math/l01-welcome.webp`,
        },

        {
          id: `l01-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Position Changes Everything`,
          paragraphs: [
            `Look at the digit 7! By itself, 7 means seven. Easy!`,
            `Now put 7 in different SPOTS. In 17, the 7 means seven. In 70, the 7 means SEVENTY. In 700, the 7 means SEVEN HUNDRED! Same digit. Different spots. Different meanings! That's PLACE VALUE. WHERE a digit sits changes WHAT it's worth!`,
          ],
          image: `/explorer-assets/math/l01-s1-position-matters.webp`,
          imageCaption: `Same digit, different positions, different values!`,
          vocab: [
            { word: `digit`,       definition: `One of the 10 symbols we use: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9.`,
              audioPrompt: `A digit is one of the 10 symbols we use for numbers. Zero through nine. Just 10 digits! From those 10, we can build every number that exists. Pretty cool!` },
            { word: `position`,    definition: `WHERE a digit sits in a number.`,
              audioPrompt: `Position is where a digit sits in a number. The 5 in 51 is in a different spot than the 5 in 15. Same digit, different position, different value!` },
            { word: `place value`, definition: `The value a digit has based on its position.`,
              audioPrompt: `Place value is the value a digit has based on its position. It's math's superpower! It lets us write any number — small or huge — using only ten digits!` },
          ],
        },

        {
          id: `l01-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `The ONES Place`,
          paragraphs: [
            `Let's start with the easiest spot — the ONES PLACE! That's the spot on the FAR RIGHT of a number.`,
            `In the number 8, the 8 is in the ones place — it means EIGHT single cubes! In 24, the 4 is in the ones place — FOUR singles! In 359, the 9 is in the ones place — NINE singles! The ones place can hold any digit from 0 to 9. Easy!`,
          ],
          image: `/explorer-assets/math/l01-s2-ones-place.webp`,
          imageCaption: `Ones place: the spot on the FAR RIGHT!`,
          vocab: [
            { word: `ones place`, definition: `The spot on the far right of a number.`,
              audioPrompt: `The ones place is the spot on the far right of a number. It counts single units. In 47, the 7 is in the ones place — it means seven singles!` },
            { word: `single`,     definition: `One by itself.`,
              audioPrompt: `Single means one by itself. The ones place counts singles. One cube. One cookie. One pencil. Each is a single thing — and that's what the ones place counts!` },
            { word: `far right`,  definition: `The last spot on the right side.`,
              audioPrompt: `Far right is the last spot on the right side. The ones place is always the far right digit. When you read a number, check the rightmost digit to find the ones!` },
          ],
        },

        {
          id: `l01-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `The TENS Place`,
          paragraphs: [
            `Here's where it gets clever! What if you have TEN single cubes? You can BUNDLE them into ONE ROD worth 10!`,
            `The TENS PLACE is the spot just LEFT of the ones place. It counts how many ten-rods you have! In 30, the 3 is in the tens place — THREE rods = THIRTY! In 64, the 6 is in the tens place — SIX rods = sixty! The tens place can hold 0 through 9 rods!`,
          ],
          image: `/explorer-assets/math/l01-s3-tens-place.webp`,
          imageCaption: `Tens place: spot just LEFT of ones. Counts ten-rods!`,
          vocab: [
            { word: `tens place`, definition: `The spot just left of ones. Counts bundles of 10.`,
              audioPrompt: `The tens place is the spot just left of ones. It counts how many bundles of ten you have. In 52, the 5 is in the tens place — five tens equals fifty!` },
            { word: `bundle`,     definition: `To group together.`,
              audioPrompt: `To bundle is to group together. We bundle ten singles into one rod to make counting easier. Twenty-three is two rods of ten plus three singles!` },
            { word: `ten`,        definition: `The number 10 — and the bundle we use.`,
              audioPrompt: `Ten is the number 10 — and the bundle we use for place value. We probably bundle by ten because we have ten fingers! Ancient people counted on fingers!` },
          ],
        },

        {
          id: `l01-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `The HUNDREDS Place`,
          paragraphs: [
            `Same idea, BIGGER bundle! What if you have TEN RODS of ten? That's a HUNDRED!`,
            `Bundle the ten rods into ONE FLAT — a big square made of 100 single cubes! The HUNDREDS PLACE is the spot just LEFT of the tens place. In 200, the 2 means TWO flats = TWO HUNDRED! In 547, the 5 means FIVE flats = FIVE HUNDRED! The biggest 3-digit number is 999!`,
          ],
          image: `/explorer-assets/math/l01-s4-hundreds-place.webp`,
          imageCaption: `Hundreds place: counts flats of 100!`,
          vocab: [
            { word: `hundreds place`, definition: `The spot left of tens. Counts flats of 100.`,
              audioPrompt: `The hundreds place is the spot left of tens. It counts how many flats of 100 you have. In 372, the 3 is in the hundreds place — three hundreds equals three hundred!` },
            { word: `flat`,           definition: `A bundle of 100 — ten rods together.`,
              audioPrompt: `A flat is a bundle of 100 — ten rods of ten put together. Imagine a flat square of 100 tiny cubes in a 10-by-10 grid. The hundreds place counts flats!` },
            { word: `three-digit`,    definition: `A number with 3 digits — like 100 to 999.`,
              audioPrompt: `Three-digit means a number with three digits — ones, tens, and hundreds. Examples are 100 up to 999. Three places lets you write 999 different numbers!` },
          ],
        },

        {
          id: `l01-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Reading Numbers Like 247`,
          paragraphs: [
            `Let's put it together! Take the number 247. Three digits in three different places!`,
            `Start from the LEFT. The 2 is in HUNDREDS = TWO HUNDRED! The 4 is in TENS = FORTY (four tens)! The 7 is in ONES = SEVEN! Add them up: 200 + 40 + 7 = 247! That's how we READ numbers! Try 358 = three hundred fifty-eight!`,
          ],
          image: `/explorer-assets/math/l01-s5-reading-numbers.webp`,
          imageCaption: `Reading 247: 2 hundreds + 4 tens + 7 ones!`,
          vocab: [
            { word: `read a number`, definition: `To say a number out loud using place value.`,
              audioPrompt: `To read a number is to say it out loud using place value. 247 is two hundred forty-seven. Start with the leftmost digit and work right. Each place tells you what it's worth!` },
            { word: `add up`,        definition: `Put the values together.`,
              audioPrompt: `To add up means putting the values together. 247 equals 200 plus 40 plus 7. Any multi-digit number is just the sum of its place values. Cool trick!` },
            { word: `make sense`,    definition: `To become clear.`,
              audioPrompt: `Make sense means to become clear. Once you see place value, numbers make sense. Before, big numbers might look like random digits. After, you see exactly what each one means!` },
          ],
        },

        {
          id: `l01-mag-6`,
          type: `magazine`,
          section: 6,
          headline: `Just 10 Digits Build Everything`,
          paragraphs: [
            `Here's the BIG idea, {name}! With just TEN digits (0 through 9), we can write EVERY number that exists!`,
            `After 9 ones, we bundle into a ten. After 9 tens, we bundle into a hundred. After 9 hundreds, into a thousand! Each new place is 10 times bigger! Just by SHIFTING POSITION, our 10 digits become unlimited. Pretty incredible for just 10 little symbols!`,
          ],
          image: `/explorer-assets/math/l01-s6-place-value-power.webp`,
          imageCaption: `10 digits build EVERY number — the system goes up forever!`,
          vocab: [
            { word: `ten digits`, definition: `The symbols 0 through 9.`,
              audioPrompt: `Ten digits are the symbols zero through nine. With just 10 digits, we can write any number. From zero to a billion to a trillion. All built from 10 simple symbols!` },
            { word: `bundle up`,  definition: `When you have 10 of one place, you make 1 of the next.`,
              audioPrompt: `Bundle up means when you have 10 of one place, you bundle into the next bigger place. 10 ones bundle into 1 ten. 10 tens bundle into 1 hundred. The pattern goes forever!` },
            { word: `pattern`,    definition: `Something that repeats.`,
              audioPrompt: `A pattern is something that repeats. The bundling pattern is collect 10, bundle up. Collect 10, bundle up. It repeats at every level. Once you see it, every number makes sense!` },
          ],
        },

        {
          id: `l01-game`,
          type: `interactive`,
          format: `drag-match`,
          guideText: `Let's try it, {name}! Here are 4 digits in different numbers. Drag each one — is it in the ONES, TENS, or HUNDREDS place?`,
          buckets: [
            { id: `ones`,     label: `1️⃣ ONES (worth 1-9)`,        color: `#FBBF24` },
            { id: `tens`,     label: `🔟 TENS (worth 10-90)`,        color: `#34D399` },
            { id: `hundreds`, label: `💯 HUNDREDS (worth 100-900)`, color: `#A78BFA` },
          ],
          items: [
            { id: `l01-g1`, image: `l01-game-1.webp`, label: `The 7 in 47`,
              matchPhrase: `Yes! In 47, the 7 is on the FAR RIGHT — that's the ONES place. Worth just 7!`,
              correctMatch: `ones` },
            { id: `l01-g2`, image: `l01-game-2.webp`, label: `The 5 in 358`,
              matchPhrase: `Great! In 358, the 5 is the MIDDLE digit — that's the TENS place. Worth 50!`,
              correctMatch: `tens` },
            { id: `l01-g3`, image: `l01-game-3.webp`, label: `The 6 in 624`,
              matchPhrase: `Yes! In 624, the 6 is on the FAR LEFT — that's the HUNDREDS place. Worth 600!`,
              correctMatch: `hundreds` },
            { id: `l01-g4`, image: `l01-game-4.webp`, label: `The 3 in 83`,
              matchPhrase: `Perfect! In 83, the 3 is on the far right — that's the ONES place. Worth just 3!`,
              correctMatch: `ones` },
          ],
        },

        {
          id: `l01-quiz`,
          type: `quiz`,
          guideText: `Let's see what you remember, {name}!`,
          questions: [
            { id: `l01-q1`, format: `multiple-choice`,
              question: `What does PLACE VALUE mean?`,
              options: [`Numbers are random`, `The VALUE of a digit depends on its POSITION`, `All digits mean the same`, `Numbers are colors`],
              correctIndex: 1,
              explanation: `Place value means the value of a digit depends on its position. The 5 in 53 means 50. The 5 in 35 means 5. Same digit, different positions, different values!` },
            { id: `l01-q2`, format: `multiple-choice`,
              question: `In the number 47, what does the 4 mean?`,
              options: [`Four singles`, `FOUR TENS (which equals 40)`, `Four hundreds`, `Nothing`],
              correctIndex: 1,
              explanation: `The 4 is in the tens place — so it means four tens, which equals 40. The 7 is in the ones place, meaning 7. Together: 40 + 7 = 47!` },
            { id: `l01-q3`, format: `multiple-choice`,
              question: `What does the ONES place count?`,
              options: [`Bundles of ten`, `SINGLE units — one at a time`, `Bundles of hundred`, `Letters`],
              correctIndex: 1,
              explanation: `The ones place counts single units. It's the rightmost digit. If you have 6 in the ones place, you have six singles!` },
            { id: `l01-q4`, format: `true-false`,
              question: `In the number 358, the 3 is in the HUNDREDS place — meaning 300.`,
              correctAnswer: true,
              explanation: `True! Reading left to right, 3 is hundreds (300), 5 is tens (50), 8 is ones (8). 300 + 50 + 8 = 358!` },
            { id: `l01-q5`, format: `fill-blank`,
              question: `When you have 10 ones, you ___ them up into one ten.`,
              options: [`bundle`, `forget`, `throw away`, `divide`],
              correctIndex: 0,
              explanation: `Bundle! Ten ones bundle up into one ten. Ten tens bundle up into one hundred. Bundling is how place value works!` },
            { id: `l01-q6`, format: `multiple-choice`,
              question: `How many DIGITS do we need to write every possible number?`,
              options: [`Millions`, `Just 10 — the digits 0 through 9`, `One thousand`, `Twenty-six`],
              correctIndex: 1,
              explanation: `Just 10 digits! From 0 to 9. Place value lets these ten symbols build every number ever!` },
          ],
        },

        {
          id: `l01-realworld`,
          type: `real-world`,
          guideText: `Here's something cool, {name}! Place value is EVERYWHERE in real life! Your age has place value. The clock has place value. Money has place value. Sports scores. Phone numbers. Once you start looking, you'll spot place value all day long!`,
          familyAdventure: `Do a PLACE VALUE HUNT around your home! Pick a 3-digit number — a page number, a price tag, a house number. For each, say: "The ___ is in the hundreds place, the ___ is in the tens place, the ___ is in the ones place!" Try 5 numbers!`,
          creativePrompt: `Make a PLACE VALUE PICTURE! Pick any 3-digit number. Draw 3 columns: HUNDREDS, TENS, ONES. Draw big squares in the hundreds column, tall rectangles in the tens column, and small dots in the ones column. Count them up — that's your number!`,
        },

        {
          id: `l01-celebration`,
          type: `celebration`,
          message: `Awesome work, {name}! You learned PLACE VALUE — one of the biggest ideas in math! You know POSITION changes a digit's VALUE. You know the ONES place counts singles, the TENS place counts bundles of 10, the HUNDREDS place counts flats of 100. Remi is so proud of you! 🦝`,
          badge: `place-value-explorer`,
          badgeName: `Place Value Explorer`,
          xpEarned: 50,
        },

      ],
    },
  ],
};

export default MATH_L01;

// ─── Dev asset check ─────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const mags  = MATH_L01.lessons[0].screens.filter(s => s.type === 'magazine').length;
  const game  = MATH_L01.lessons[0].screens.find(s => s.type === 'interactive')?.items?.length ?? 0;
  const quiz  = MATH_L01.lessons[0].screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  console.log(`[LESSON-MATH-L01] Loaded: "Place Value" with ${mags} magazine sections, ${game} game items, ${quiz} quiz questions`);
}
