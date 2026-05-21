// ─────────────────────────────────────────────────────────────────────────────
// MATH  |  L18 — Introduction to Multiplication
// Age band : explorers (6–8)   Guide: remi
// Standards: CCSS 3.OA.A.1
// REWRITE v2 (May 2026): Grade 1 accessible, EQUAL GROUPS / NOT EQUAL GROUPS
// 2-bucket identification game tests when multiplication applies
// (Also brings file's familyAdventure / creativePrompt into standard schema)
// ─────────────────────────────────────────────────────────────────────────────

const MATH_L18 = {
  ageBand:   `explorers`,
  subjectId: `math`,
  guide:     `remi`,

  lessons: [
    {
      id:        `math-6-8-18`,
      title:     `Introduction to Multiplication`,
      duration:  12,
      xpReward:  50,
      badge:     `multiplication-starter`,
      badgeName: `Multiplication Starter`,

      screens: [

        {
          id: `l18-welcome`,
          type: `welcome`,
          guideText: `Hey {name}, Remi here! Today we meet a NEW operation — MULTIPLICATION! Sounds fancy, but here's the secret: it's just REPEATED ADDITION with a shortcut! If you can add, you can multiply! Let's dig in!`,
          headline: `Introduction to Multiplication`,
          subtitle: `The new operation — and how it's really just addition with a shortcut`,
          visual: `/explorer-assets/math/l18-welcome.webp`,
        },

        {
          id: `l18-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `EQUAL GROUPS`,
          paragraphs: [
            `Multiplication starts with ONE simple idea — EQUAL GROUPS! Same-size groups of things!`,
            `Imagine FOUR plates, each with THREE cookies! That's 4 equal groups of 3 cookies each! Count all the cookies by ADDING: 3 + 3 + 3 + 3 = 12 cookies! That works. But for 20 plates with 5 cookies each — exhausting! There's a FASTER way! It's called MULTIPLICATION! Instead of adding the same number over and over, you MULTIPLY!`,
          ],
          image: `/explorer-assets/math/l18-s1-equal-groups.webp`,
          imageCaption: `Equal groups: 4 plates × 3 cookies each = 12 cookies!`,
          vocab: [
            { word: `equal groups`,    definition: `Groups that are all the same size.`,
              audioPrompt: `Equal groups are groups that are all the same size. Equal groups are the foundation of multiplication. Four plates with 3 cookies each — equal groups. Whenever you have same-size groups, multiplication is the tool!` },
            { word: `multiplication`,  definition: `The operation for counting equal groups.`,
              audioPrompt: `Multiplication is the operation for counting equal groups. Multiplication is addition's faster cousin. Where addition combines amounts one at a time, multiplication handles many same-sized groups at once!` },
            { word: `shortcut`,        definition: `A faster way to do something.`,
              audioPrompt: `A shortcut is a faster way to do something. Multiplication is the shortcut for repeated addition. Why write 3 plus 3 plus 3 plus 3 when you can write 4 times 3? Same answer, less writing!` },
          ],
        },

        {
          id: `l18-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `The "×" SYMBOL`,
          paragraphs: [
            `Multiplication has its own SYMBOL — the little "×"! It looks like a tilted plus sign! It MEANS "groups of"!`,
            `Read 4 × 3 as "4 GROUPS OF 3"! Or "4 times 3"! Same idea! It means: "I have 4 equal groups, and each group has 3 things in it. How many total?" The first number says HOW MANY GROUPS. The second number says HOW MANY IN EACH GROUP! So 4 × 3 means "4 groups of 3"! The answer (called the PRODUCT) is 12!`,
          ],
          image: `/explorer-assets/math/l18-s2-times-symbol.webp`,
          imageCaption: `× means "groups of" or "times"! 4 × 3 = "4 groups of 3" = 12!`,
          vocab: [
            { word: `times symbol`, definition: `The × symbol used for multiplication.`,
              audioPrompt: `The times symbol is the × used for multiplication. The times symbol means "groups of." Or just "times." 4 times 3 is "4 groups of 3" or "4 times 3." Either way works. Tells you the operation!` },
            { word: `groups of`,    definition: `What the × means.`,
              audioPrompt: `Groups of is what the times symbol means. 4 × 3 means "4 groups of 3." First number — how many groups. Second number — how many in each group. Read it this way and it makes immediate sense!` },
            { word: `product`,      definition: `The answer to a multiplication problem.`,
              audioPrompt: `A product is the answer to a multiplication problem. The product of 4 × 3 is 12. Each operation has its own answer name. Sum for addition. Difference for subtraction. Product for multiplication!` },
          ],
        },

        {
          id: `l18-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Multiplication = REPEATED ADDITION`,
          paragraphs: [
            `Here's the BIG idea! Multiplication is just REPEATED ADDITION! Adding the same number multiple times!`,
            `Watch the connection! 4 × 3 means "4 groups of 3"! Counted by adding: 3 + 3 + 3 + 3 = 12! So 4 × 3 = 12! Try 5 × 2 means "5 groups of 2"! Adding: 2 + 2 + 2 + 2 + 2 = 10! So 5 × 2 = 10! NOTICE — 4 × 3 = 12, AND 3 × 4 = 12! The ORDER doesn't matter in multiplication! Cool feature!`,
          ],
          image: `/explorer-assets/math/l18-s3-repeated-addition.webp`,
          imageCaption: `4 × 3 = 3 + 3 + 3 + 3 = 12. Multiplication is repeated addition!`,
          vocab: [
            { word: `repeated addition`, definition: `Adding the same number multiple times.`,
              audioPrompt: `Repeated addition is adding the same number multiple times. Repeated addition is exactly what multiplication does. 4 × 3 means add 3 four times. Multiplication isn't a new mysterious thing — it's just addition with a shortcut!` },
            { word: `connection`,        definition: `How two things relate.`,
              audioPrompt: `A connection is how two things relate. The connection between addition and multiplication is direct. Multiplication is built ON addition. Same foundation. Same place value rules. Just done faster!` },
            { word: `order`,             definition: `Which number comes first.`,
              audioPrompt: `Order is which number comes first. The order doesn't matter in multiplication — 4 × 3 equals 3 × 4. Both equal 12. Switching gives the same answer. One of multiplication's neat features!` },
          ],
        },

        {
          id: `l18-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Why a SHORTCUT MATTERS`,
          paragraphs: [
            `Why does the shortcut matter? Because for BIG groups, repeated addition gets LONG!`,
            `Imagine 10 groups of 7! Addition way: 7 + 7 + 7 + 7 + 7 + 7 + 7 + 7 + 7 + 7 = 70. Lots of writing! Multiplication way: 10 × 7 = 70! Same answer. Way less work! What about 20 groups of 4? Multiplication: 20 × 4 = 80! Done! As numbers get BIGGER, multiplication saves more time. That's why every culture invented multiplication systems!`,
          ],
          image: `/explorer-assets/math/l18-s4-shortcut.webp`,
          imageCaption: `Shortcut: 10 × 7 = 70 (instant!) vs writing 10 sevens added (slow!)`,
          vocab: [
            { word: `saves time`,    definition: `Cuts down the work.`,
              audioPrompt: `Saves time means cuts down the work. Multiplication saves time for big group problems. Writing 20 fours added is exhausting. Writing 20 times 4 is instant. The time savings grow as numbers grow!` },
            { word: `bigger groups`, definition: `More items in each group.`,
              audioPrompt: `Bigger groups means more items in each group. Bigger groups make multiplication more valuable. Small groups, addition is fine. Big groups, addition is impractical. Multiplication scales to any size!` },
            { word: `practical`,     definition: `Workable in real life.`,
              audioPrompt: `Practical means workable in real life. For big numbers, multiplication is practical — addition isn't. Imagine writing 100 fours added together. Impossible. But 100 times 4 is easy. Practical math!` },
          ],
        },

        {
          id: `l18-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `REAL-LIFE Examples`,
          paragraphs: [
            `Multiplication is HIDING everywhere in real life! Once you see it, you'll spot it constantly!`,
            `WHEELS on a car: 4 wheels per car. 3 cars = 3 × 4 = 12 wheels! EGGS in a carton: 12 eggs per carton. 2 cartons = 2 × 12 = 24 eggs! DAYS in a week: 7 days. 4 weeks = 4 × 7 = 28 days! ROWS of seats: 6 rows of 8 seats = 48 seats! PACKS of items: 5 packs of 6 markers = 30 markers! Whenever you have EQUAL GROUPS, multiplication helps you count fast!`,
          ],
          image: `/explorer-assets/math/l18-s5-real-examples.webp`,
          imageCaption: `Real-life multiplication: wheels, eggs, days, rows, packs. Everywhere!`,
          vocab: [
            { word: `everywhere`, definition: `In many places.`,
              audioPrompt: `Everywhere means in many places. Multiplication is everywhere once you start noticing. Wheels on cars. Eggs in cartons. Days in weeks. Rows of seats. Equal groups exist all around us. Math hiding in plain sight!` },
            { word: `noticing`,   definition: `Becoming aware of things.`,
              audioPrompt: `Noticing means becoming aware of things. Noticing multiplication in real life is a math skill. Once you train your eye to spot equal groups, you'll find them constantly. Awareness helps you use the right tool!` },
            { word: `count fast`, definition: `Quickly determine the total.`,
              audioPrompt: `Count fast means quickly determine the total. Multiplication lets you count fast for equal groups. No more counting one by one. No more adding the same number over. Just multiply!` },
          ],
        },

        {
          id: `l18-mag-6`,
          type: `magazine`,
          section: 6,
          headline: `A New ADVENTURE`,
          paragraphs: [
            `You've just stepped into a new chapter of math, {name}! MULTIPLICATION is the third major operation you've learned!`,
            `You've got: 1) ADDITION — combining! 2) SUBTRACTION — separating! Now 3) MULTIPLICATION — counting equal groups! (And later DIVISION — splitting into equal groups!) Together, these are the FOUR BASIC OPERATIONS of arithmetic! Multiplication isn't a new mysterious thing — it's just repeated addition with a fancy symbol! You're doing great!`,
          ],
          image: `/explorer-assets/math/l18-s6-new-operation.webp`,
          imageCaption: `New chapter: multiplication is the 3rd operation! Add, subtract, multiply, divide!`,
          vocab: [
            { word: `chapter`,        definition: `A new phase of learning.`,
              audioPrompt: `A chapter is a new phase of learning. You've started a new chapter of math. Multiplication chapter. New operation. New ideas. Same place value foundation. Chapters of math build on each other!` },
            { word: `four operations`, definition: `Add, subtract, multiply, divide.`,
              audioPrompt: `The four operations are addition, subtraction, multiplication, and division. The four operations are the foundation of arithmetic. You've learned 3 of them. Division is next year's territory!` },
            { word: `times tables`,   definition: `Memorized multiplication facts.`,
              audioPrompt: `Times tables are memorized multiplication facts. Times tables are the multiplications you know by heart — like knowing 6 × 7 = 42 instantly. Coming in your future learning. For now, understanding the IDEA is the goal!` },
          ],
        },

        {
          id: `l18-game`,
          type: `interactive`,
          format: `drag-match`,
          guideText: `Let's try it, {name}! Here are 4 real-life situations. Drag each one — does it have EQUAL GROUPS (multiplication works!) or NOT EQUAL GROUPS (just count or add)?`,
          buckets: [
            { id: `equal_groups`,     label: `✅ EQUAL GROUPS (multiply!)`, color: `#34D399` },
            { id: `not_equal_groups`, label: `❌ NOT EQUAL GROUPS`,         color: `#F87171` },
          ],
          items: [
            { id: `l18-g1`, image: `l18-game-1.webp`, label: `5 plates, each with 4 cookies`,
              matchPhrase: `Yes! EQUAL GROUPS! Each plate has the SAME number (4 cookies). Multiplication works! 5 × 4 = 20!`,
              correctMatch: `equal_groups` },
            { id: `l18-g2`, image: `l18-game-2.webp`, label: `3 jars: one has 5 marbles, one has 8, one has 2`,
              matchPhrase: `Right! NOT EQUAL GROUPS! Each jar has a DIFFERENT number. Multiplication won't work — just add: 5 + 8 + 2 = 15!`,
              correctMatch: `not_equal_groups` },
            { id: `l18-g3`, image: `l18-game-3.webp`, label: `4 cars, each with 4 wheels`,
              matchPhrase: `Yes! EQUAL GROUPS! Every car has 4 wheels. Multiplication! 4 × 4 = 16 wheels!`,
              correctMatch: `equal_groups` },
            { id: `l18-g4`, image: `l18-game-4.webp`, label: `A jumbled pile of toys all different sizes and types`,
              matchPhrase: `Right! NOT EQUAL GROUPS! Random pile, no groups at all. Just count or sort. Multiplication doesn't fit here!`,
              correctMatch: `not_equal_groups` },
          ],
        },

        {
          id: `l18-quiz`,
          type: `quiz`,
          guideText: `Let's see what you remember, {name}!`,
          questions: [
            { id: `l18-q1`, format: `multiple-choice`,
              question: `What is MULTIPLICATION?`,
              options: [`A type of addition`, `REPEATED ADDITION — counting equal groups faster`, `Adding two numbers once`, `Same as subtraction`],
              correctIndex: 1,
              explanation: `Multiplication is repeated addition. Shortcut for adding the same number. 4 × 3 = 3 + 3 + 3 + 3 = 12!` },
            { id: `l18-q2`, format: `multiple-choice`,
              question: `What does 4 × 3 MEAN in plain language?`,
              options: [`4 minus 3`, `4 GROUPS OF 3 — or "4 times 3"`, `4 plus 3`, `Random numbers`],
              correctIndex: 1,
              explanation: `4 × 3 means "4 groups of 3"! First number = how many groups. Second = how many in each. Answer: 12!` },
            { id: `l18-q3`, format: `multiple-choice`,
              question: `What is 5 × 2?`,
              options: [`7`, `10`, `15`, `12`],
              correctIndex: 1,
              explanation: `10! 5 × 2 = 2 + 2 + 2 + 2 + 2 = 10. Or "5 groups of 2"!` },
            { id: `l18-q4`, format: `true-false`,
              question: `In multiplication, the ORDER doesn't matter — 4 × 3 equals 3 × 4.`,
              correctAnswer: true,
              explanation: `True! Both equal 12. You can switch the order and get the same answer!` },
            { id: `l18-q5`, format: `multiple-choice`,
              question: `The "×" symbol means "___" — it tells you how many equal groups you have.`,
              options: [`groups of`, `more than`, `less than`, `fewer than`],
              correctIndex: 0,
              explanation: `Groups of! 5 × 4 means "5 groups of 4." Once you read it this way, multiplication makes visual sense!` },
            { id: `l18-q6`, format: `multiple-choice`,
              question: `WHY is multiplication a great shortcut for repeated addition?`,
              options: [`It's not`, `For BIG groups, repeated addition is exhausting — multiplication is FAST`, `Just for fun`, `Only works for small numbers`],
              correctIndex: 1,
              explanation: `For big groups, addition is exhausting. Multiplication does it in one step!` },
          ],
        },

        {
          id: `l18-realworld`,
          type: `real-world`,
          guideText: `The ancient Egyptians invented one of the first MULTIPLICATION SYSTEMS over 4,000 years ago! The ancient Babylonians had multiplication tables on clay tablets! Every civilization figured out the same thing — repeated addition gets EXHAUSTING for big numbers, so a SHORTCUT is necessary! Today, calculators do millions of multiplications per second! You're connected to thousands of years of human invention!`,
          familyAdventure: `Together, find 8 examples of equal groups around your home! 4 chairs with 4 legs each, 6 cans in a six-pack, 3 books on each of 4 shelves! For each one, write the MULTIPLICATION problem AND the matching repeated addition! Example: 4 chairs × 4 legs = 16. 4 + 4 + 4 + 4 = 16. Ask a grown-up: where did they use multiplication this week?`,
          creativePrompt: `Pick a multiplication problem like 4 × 3! Draw 4 EQUAL GROUPS (4 plates, 4 boxes, 4 trees)! In each group, draw 3 of something! Write the math: 4 × 3 = 12! Then write the matching addition: 3 + 3 + 3 + 3 = 12! Write at least 3 sentences about your picture. For stretch, write a 5-sentence story explaining what's in your equal groups and why multiplication is faster than counting!`,
        },

        {
          id: `l18-celebration`,
          type: `celebration`,
          message: `Awesome work, {name}! You met MULTIPLICATION! The "×" symbol means "groups of"! Multiplication is REPEATED ADDITION! Order doesn't matter! And it's hiding everywhere in real life! You're now familiar with three of the four basic operations! Next lesson — we go deeper into what multiplication really means! Remi is so proud! 🦝`,
          badge: `multiplication-starter`,
          badgeName: `Multiplication Starter`,
          xpEarned: 50,
        },

      ],
    },
  ],
};

export default MATH_L18;

// ─── Dev asset check ─────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const mags = MATH_L18.lessons[0].screens.filter(s => s.type === 'magazine').length;
  const game = MATH_L18.lessons[0].screens.find(s => s.type === 'interactive')?.items?.length ?? 0;
  const quiz = MATH_L18.lessons[0].screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  console.log(`[LESSON-MATH-L18] Loaded: "Introduction to Multiplication" with ${mags} magazine sections, ${game} game items, ${quiz} quiz questions`);
}
