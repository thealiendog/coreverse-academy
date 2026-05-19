// ─────────────────────────────────────────────────────────────────────────────
// MATH  |  L18 — Introduction to Multiplication
// Age band : explorers (6–8)   Guide: remi
// Standards: CCSS 3.OA.A.1 (interpret products as equal groups)
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
          guideText: `Hey {name}, Remi here! Today we meet a NEW operation — MULTIPLICATION. Sounds fancy, but here's the secret: it's just REPEATED ADDITION with a shortcut. If you can add, you can multiply. We'll start simple — what it IS, how it connects to addition, and why it's so useful. Let's dig in.`,
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
            `Multiplication starts with one simple idea — EQUAL GROUPS. Same-size groups of things.`,
            `Imagine FOUR plates, each with THREE cookies. That's 4 equal groups of 3 cookies each. To count all the cookies, you could ADD: 3 + 3 + 3 + 3 = 12 cookies. That works. But it's slow. If you had 20 plates with 5 cookies each — 5 + 5 + 5 + 5 ... (write twenty 5s!) — that'd be exhausting. There has to be a FASTER way. There is. It's called MULTIPLICATION. Multiplication is the shortcut for COUNTING EQUAL GROUPS. Instead of adding the same number over and over, you MULTIPLY. One quick step instead of many.`,
          ],
          image: `/explorer-assets/math/l18-s1-equal-groups.webp`,
          imageCaption: `Equal groups: 4 plates × 3 cookies each = 12 cookies. Multiplication counts equal groups fast.`,
          vocab: [
            {
              word: `equal groups`,
              definition: `Groups that are all the SAME SIZE. EQUAL GROUPS are the foundation of multiplication.`,
              audioPrompt: `Equal groups, {name}, are groups that are all the same size. Equal groups are the foundation of multiplication. Four plates with three cookies each — equal groups. Five lines with eight people each — equal groups. Whenever you have same-size groups, multiplication is the tool.`,
            },
            {
              word: `multiplication`,
              definition: `The OPERATION for COUNTING equal groups. MULTIPLICATION is addition's faster cousin.`,
              audioPrompt: `Multiplication, {name}, is the operation for counting equal groups. Multiplication is addition's faster cousin. Where addition combines amounts one at a time, multiplication handles many same-sized groups all at once. The two operations are deeply connected.`,
            },
            {
              word: `shortcut`,
              definition: `A FASTER way to do something. MULTIPLICATION is the SHORTCUT for repeated addition.`,
              audioPrompt: `A shortcut, {name}, is a faster way to do something. Multiplication is the shortcut for repeated addition. Why write 3 + 3 + 3 + 3 when you can just write 4 × 3? Same answer, much less writing. The shortcut saves time and energy.`,
            },
          ],
        },

        {
          id: `l18-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `The "×" SYMBOL`,
          paragraphs: [
            `Multiplication has its own SYMBOL — the little "×". It looks like a tilted plus sign. It MEANS "groups of."`,
            `Read 4 × 3 as "4 GROUPS OF 3." Or "4 times 3." Same idea. It means: "I have 4 equal groups, and each group has 3 things in it. How many things total?" The first number says HOW MANY GROUPS. The second number says HOW MANY IN EACH GROUP. So 4 × 3 means "4 groups of 3." The answer (called the PRODUCT) is 12. Some people read 4 × 3 as "4 times 3." Both ways are fine. You'll see "×" everywhere in math from now on. Sometimes people write multiplication with a dot (·) or by putting numbers next to each other — but the "×" is the friendly version.`,
          ],
          image: `/explorer-assets/math/l18-s2-times-symbol.webp`,
          imageCaption: `× means "groups of" or "times." 4 × 3 = "4 groups of 3" = 12.`,
          vocab: [
            {
              word: `times symbol`,
              definition: `The "×" symbol used for MULTIPLICATION. The TIMES SYMBOL means "groups of."`,
              audioPrompt: `The times symbol, {name}, is the "×" used for multiplication. The times symbol means "groups of." Or just "times." 4 × 3 is "4 groups of 3" or "4 times 3." Either way works. The symbol tells you the operation — multiplication, not addition or subtraction.`,
            },
            {
              word: `groups of`,
              definition: `What the "×" MEANS. 4 × 3 means "4 GROUPS OF 3."`,
              audioPrompt: `Groups of, {name}, is what the times symbol means. 4 × 3 means "4 groups of 3." First number — how many groups. Second number — how many in each group. Once you read it this way, multiplication makes immediate visual sense. Always groups of.`,
            },
            {
              word: `product`,
              definition: `The ANSWER to a MULTIPLICATION problem. The PRODUCT of 4 × 3 is 12.`,
              audioPrompt: `A product, {name}, is the answer to a multiplication problem. The product of 4 × 3 is 12. Each operation has its own answer name. Sum for addition. Difference for subtraction. Product for multiplication. Knowing these terms helps when reading math problems.`,
            },
          ],
        },

        {
          id: `l18-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Multiplication = REPEATED ADDITION`,
          paragraphs: [
            `Here's the BIG idea. Multiplication is just REPEATED ADDITION. Adding the same number multiple times.`,
            `Watch the connection. 4 × 3 means "4 groups of 3." Counted by adding: 3 + 3 + 3 + 3 = 12. So 4 × 3 = 12. The multiplication is just a SHORTCUT for that repeated addition. Try another. 5 × 2 means "5 groups of 2." Counted by adding: 2 + 2 + 2 + 2 + 2 = 10. So 5 × 2 = 10. One more. 3 × 4 means "3 groups of 4." Adding: 4 + 4 + 4 = 12. So 3 × 4 = 12. NOTICE — 4 × 3 = 12, AND 3 × 4 = 12. The order doesn't matter for multiplication. That's a cool feature (the "commutative property" — but you don't need to memorize that word yet).`,
          ],
          image: `/explorer-assets/math/l18-s3-repeated-addition.webp`,
          imageCaption: `4 × 3 = 3 + 3 + 3 + 3 = 12. Multiplication is repeated addition. The connection is direct.`,
          vocab: [
            {
              word: `repeated addition`,
              definition: `Adding the SAME number MULTIPLE TIMES. REPEATED ADDITION is exactly what multiplication does.`,
              audioPrompt: `Repeated addition, {name}, is adding the same number multiple times. Repeated addition is exactly what multiplication does. 4 × 3 means add three four times. 5 × 2 means add two five times. Once you see this, multiplication isn't a new mysterious thing — it's just addition with a shortcut symbol.`,
            },
            {
              word: `connection`,
              definition: `How TWO things RELATE. The CONNECTION between addition and multiplication is direct.`,
              audioPrompt: `A connection, {name}, is how two things relate. The connection between addition and multiplication is direct. Multiplication is built ON addition. It IS addition, repeated. Same foundation. Same place value rules. Just done faster.`,
            },
            {
              word: `order`,
              definition: `WHICH number comes FIRST. The ORDER doesn't matter — 4 × 3 = 3 × 4.`,
              audioPrompt: `The order, {name}, is which number comes first. The order doesn't matter in multiplication — 4 × 3 equals 3 × 4. Both equal 12. Switching gives the same answer. This is one of multiplication's neat features. Makes it more flexible than subtraction, where order definitely matters.`,
            },
          ],
        },

        {
          id: `l18-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Why a SHORTCUT MATTERS`,
          paragraphs: [
            `Why does the shortcut matter? Because for BIG groups, repeated addition gets long.`,
            `Imagine 10 groups of 7. Addition way: 7 + 7 + 7 + 7 + 7 + 7 + 7 + 7 + 7 + 7 = 70. Lots of writing. Multiplication way: 10 × 7 = 70. Same answer. Way less work. What about 20 groups of 4? Addition way: writing twenty 4s with plus signs between them. Eek. Multiplication way: 20 × 4 = 80. Done. As numbers get BIGGER, multiplication's shortcut saves more and more time. For huge numbers, multiplication is the ONLY practical way. That's why every culture invented multiplication systems thousands of years ago. The shortcut is just too useful to skip.`,
          ],
          image: `/explorer-assets/math/l18-s4-shortcut.webp`,
          imageCaption: `Shortcut: 10 × 7 = 70 (instant) vs 7+7+7+7+7+7+7+7+7+7 = 70 (slow). Bigger groups = bigger savings.`,
          vocab: [
            {
              word: `saves time`,
              definition: `Cuts down the WORK. Multiplication SAVES TIME for big group problems.`,
              audioPrompt: `Saves time, {name}, means cuts down the work. Multiplication saves time for big group problems. Writing twenty fours added together is exhausting. Writing twenty times four is instant. As numbers get bigger, the time savings grow. That's why multiplication is essential.`,
            },
            {
              word: `bigger groups`,
              definition: `MORE items in each group. BIGGER GROUPS make multiplication more valuable.`,
              audioPrompt: `Bigger groups, {name}, means more items in each group. Bigger groups make multiplication more valuable. Small groups, addition is fine. Big groups, addition is impractical. Multiplication scales to any size group. That's its superpower.`,
            },
            {
              word: `practical`,
              definition: `WORKABLE in real life. For BIG numbers, multiplication is PRACTICAL — addition isn't.`,
              audioPrompt: `Practical, {name}, means workable in real life. For big numbers, multiplication is practical — addition isn't. Imagine trying to write 100 fours added together. Impossible. But 100 times 4 is easy to write. Multiplication makes huge calculations doable.`,
            },
          ],
        },

        {
          id: `l18-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `REAL-LIFE Examples`,
          paragraphs: [
            `Multiplication is HIDING everywhere in real life. Once you see it, you'll spot it constantly.`,
            `WHEELS on a car. Every car has 4 wheels. 3 cars in the driveway = 3 × 4 = 12 wheels total. EGGS in a carton. 12 eggs per carton. 2 cartons = 2 × 12 = 24 eggs. FINGERS on hands. 5 fingers per hand. 2 hands per person × 4 people = 4 × 10 = 40 fingers. DAYS in a week. 7 days. 4 weeks = 4 × 7 = 28 days. ROWS of seats. 6 rows of 8 seats = 6 × 8 = 48 seats. PACKS of items. 5 packs of 6 markers = 5 × 6 = 30 markers. Whenever you have EQUAL GROUPS of anything, multiplication helps you count them fast. It's everywhere.`,
          ],
          image: `/explorer-assets/math/l18-s5-real-examples.webp`,
          imageCaption: `Real-life multiplication: wheels on cars, eggs in cartons, days in weeks, rows of seats. Everywhere.`,
          vocab: [
            {
              word: `everywhere`,
              definition: `In MANY PLACES. Multiplication is EVERYWHERE once you start noticing.`,
              audioPrompt: `Everywhere, {name}, means in many places. Multiplication is everywhere once you start noticing. Wheels on cars. Eggs in cartons. Days in weeks. Rows of seats. Packs of items. Equal groups exist all around us. The math is hiding in plain sight.`,
            },
            {
              word: `noticing`,
              definition: `BECOMING AWARE of things. NOTICING multiplication in real life is a math skill.`,
              audioPrompt: `Noticing, {name}, means becoming aware of things. Noticing multiplication in real life is a math skill. Once you train your eye to spot equal groups, you'll find them constantly. That awareness helps you use multiplication when it's the right tool.`,
            },
            {
              word: `count fast`,
              definition: `Quickly DETERMINE the total. Multiplication lets you COUNT FAST for equal groups.`,
              audioPrompt: `Count fast, {name}, means quickly determine the total. Multiplication lets you count fast for equal groups. No more counting things one by one. No more adding the same number over and over. Just multiply. Fast counting unlocks bigger problems.`,
            },
          ],
        },

        {
          id: `l18-mag-6`,
          type: `magazine`,
          section: 6,
          headline: `A New ADVENTURE`,
          paragraphs: [
            `You've just stepped into a new chapter of math. MULTIPLICATION is the third major operation you've learned.`,
            `You've got: 1) ADDITION — combining amounts. 2) SUBTRACTION — separating amounts. Now 3) MULTIPLICATION — counting equal groups. (And later you'll learn DIVISION — splitting into equal groups.) Together, these are the FOUR BASIC OPERATIONS of arithmetic. They're used in every math problem from here on — fractions, decimals, percentages, algebra, all of it. Multiplication isn't a NEW mysterious thing. It's just repeated addition with a fancy symbol. As you practice, you'll memorize common multiplications (called TIMES TABLES) — but that's later. For now, just understand WHAT multiplication IS and how it connects to addition. You're doing great.`,
          ],
          image: `/explorer-assets/math/l18-s6-new-operation.webp`,
          imageCaption: `New chapter: multiplication is the 3rd operation. Add, subtract, multiply, (divide). The four basics.`,
          vocab: [
            {
              word: `chapter`,
              definition: `A NEW phase of LEARNING. You've started a new CHAPTER of math.`,
              audioPrompt: `A chapter, {name}, is a new phase of learning. You've started a new chapter of math. Multiplication chapter. New operation. New ideas. Same place value foundation. The chapters of math build on each other. Each new chapter uses what you already know.`,
            },
            {
              word: `four operations`,
              definition: `Add, Subtract, MULTIPLY, Divide. The FOUR OPERATIONS are the foundation of arithmetic.`,
              audioPrompt: `The four operations, {name}, are addition, subtraction, multiplication, and division. The four operations are the foundation of arithmetic. You've learned three of them. Division — the splitting into equal groups — is next year's territory. Once you have all four, you can handle elementary math.`,
            },
            {
              word: `times tables`,
              definition: `MEMORIZED multiplication facts. TIMES TABLES are the multiplications you know by heart (later!).`,
              audioPrompt: `Times tables, {name}, are memorized multiplication facts. Times tables are the multiplications you know by heart — like knowing 6 × 7 = 42 instantly. Coming in your future learning. For now, just understanding what multiplication IS is the goal. Tables come later.`,
            },
          ],
        },

        {
          id: `l18-game`,
          type: `interactive`,
          format: `drag-match`,
          guideText: `Let's see what you remember!`,
          buckets: [
            { id: `fact`, label: `✅ Yes, that's true!`, color: `#34D399` },
            { id: `myth`, label: `❌ No way!`,           color: `#F87171` },
          ],
          items: [
            {
              id: `l18-g1`,
              image: `l18-game-1.webp`,
              label: `MULTIPLICATION is REPEATED ADDITION — 4 × 3 means add 3 four times (3+3+3+3=12).`,
              matchPhrase: `Yes! That's the core idea. Multiplication is just addition repeated. 4 × 3 = 3 + 3 + 3 + 3 = 12. The symbol is a shortcut for adding the same number.`,
              correctMatch: `fact`,
            },
            {
              id: `l18-g2`,
              image: `l18-game-2.webp`,
              label: `The "×" symbol means "GROUPS OF" — 4 × 3 means "4 groups of 3."`,
              matchPhrase: `True! × means groups of. First number = how many groups. Second number = how many in each. 4 × 3 is "4 groups of 3" = 12.`,
              correctMatch: `fact`,
            },
            {
              id: `l18-g3`,
              image: `l18-game-3.webp`,
              label: `Multiplication has NOTHING to do with addition — it's a totally random new operation.`,
              matchPhrase: `Not at all! Multiplication IS repeated addition. They're directly connected. Same place value foundation. Multiplication is just addition with a shortcut.`,
              correctMatch: `myth`,
            },
            {
              id: `l18-g4`,
              image: `l18-game-4.webp`,
              label: `Multiplication is ALWAYS impossibly hard — kids should give up on it.`,
              matchPhrase: `Definitely not! Multiplication is just repeated addition. If you can add, you can multiply. With practice, multiplication becomes easy. Don't give up.`,
              correctMatch: `myth`,
            },
          ],
        },

        {
          id: `l18-quiz`,
          type: `quiz`,
          guideText: `Let's see what you remember!`,
          questions: [
            {
              id: `l18-q1`,
              format: `multiple-choice`,
              question: `What is MULTIPLICATION?`,
              options: [
                `A type of addition`,
                `REPEATED ADDITION — counting equal groups faster`,
                `Adding two numbers once`,
                `The same as subtraction`,
              ],
              correctIndex: 1,
              explanation: `Multiplication is repeated addition. Counting equal groups faster than adding one at a time. 4 × 3 = 3 + 3 + 3 + 3 = 12. Shortcut for adding the same number.`,
            },
            {
              id: `l18-q2`,
              format: `multiple-choice`,
              question: `What does 4 × 3 MEAN in plain language?`,
              options: [
                `4 minus 3`,
                `4 GROUPS OF 3 — or "4 times 3"`,
                `4 plus 3`,
                `Just random numbers`,
              ],
              correctIndex: 1,
              explanation: `4 × 3 means "4 groups of 3." First number = how many groups. Second number = how many in each. Read as "4 times 3" or "4 groups of 3." Answer: 12.`,
            },
            {
              id: `l18-q3`,
              format: `multiple-choice`,
              question: `What is 5 × 2?`,
              options: [`7`, `10`, `15`, `12`],
              correctIndex: 1,
              explanation: `10! 5 × 2 = 2 + 2 + 2 + 2 + 2 = 10. Or "5 groups of 2." Each group has 2. 5 groups × 2 each = 10.`,
            },
            {
              id: `l18-q4`,
              format: `true-false`,
              question: `In multiplication, the ORDER doesn't matter — 4 × 3 equals 3 × 4.`,
              correctAnswer: true,
              explanation: `True! Both equal 12. You can switch the order in multiplication and get the same answer. This is one of multiplication's cool features.`,
            },
            {
              id: `l18-q5`,
              format: `multiple-choice`,
              question: `The "×" symbol means "___" — it tells you how many equal groups you have.`,
              options: [`groups of`, `more than`, `less than`, `fewer than`],
              correctIndex: 0,
              explanation: `Groups of! The × symbol means "groups of." 5 × 4 means "5 groups of 4." Once you read it this way, multiplication makes visual sense immediately.`,
            },
            {
              id: `l18-q6`,
              format: `multiple-choice`,
              question: `WHY is multiplication a great shortcut for repeated addition?`,
              options: [
                `It's not really a shortcut`,
                `For BIG groups, adding the same number many times is exhausting — multiplication is FAST`,
                `Just for fun`,
                `It only works for small numbers`,
              ],
              correctIndex: 1,
              explanation: `For big groups, repeated addition is exhausting. Writing 4 + 4 + 4 + 4 ... twenty times is impractical. Multiplication does it in one step: 20 × 4 = 80. Time-saver superpower.`,
            },
          ],
        },

        {
          id: `l18-realworld`,
          type: `real-world`,
          guideText: `The ancient Egyptians invented one of the first MULTIPLICATION SYSTEMS over 4,000 years ago. They used a clever doubling technique. The ancient Babylonians had multiplication tables on clay tablets. Every civilization figured out the same thing — repeated addition gets EXHAUSTING for big numbers, so a SHORTCUT is necessary. That shortcut is multiplication. Today, calculators do millions of multiplications per second inside computers. The math you're learning now is the SAME math that runs phones, video games, and rockets. You're connected to thousands of years of human invention. Pretty cool for just learning what × means.`,
          familyAdventure: {
            title: `Equal Groups Hunt`,
            scenario: `Together, find 8 examples of equal groups around your home: 4 chairs with 4 legs each, 6 cans in a six-pack, 3 books on each of 4 shelves, and so on. For each one, write the MULTIPLICATION problem AND the matching repeated addition. Example: 4 chairs × 4 legs = 16 legs total. 4 + 4 + 4 + 4 = 16. Discover how many things in the world come in equal groups.`,
            talkingPoint: `Ask a grown-up: where did they use multiplication this week without even thinking about it? Groceries? Cooking? Work?`,
          },
          creativePrompt: {
            title: `Draw a Multiplication Picture`,
            description: `Pick a multiplication problem like 4 × 3. Draw 4 EQUAL GROUPS (4 plates, 4 boxes, 4 trees). In each group, draw 3 of something (3 cookies on each plate). Count all together — should equal 12. Write the math: 4 × 3 = 12. Then write the matching addition: 3 + 3 + 3 + 3 = 12. Same answer. Different ways to write it.`,
          },
        },

        {
          id: `l18-celebration`,
          type: `celebration`,
          message: `Awesome work! You met MULTIPLICATION. The "×" symbol means "groups of." Multiplication is REPEATED ADDITION — adding the same number multiple times. 4 × 3 = 12 because 3 + 3 + 3 + 3 = 12. It's a shortcut, especially for big groups. Order doesn't matter. And it's hiding everywhere in real life. You're now familiar with three of the four basic operations. Next lesson — we go deeper into what multiplication really means!`,
          badge: `multiplication-starter`,
          badgeName: `Multiplication Starter`,
          xpEarned: 50,
        },

      ],
    },
  ],
};

export default MATH_L18;

// ─── Dev asset check ───
if (import.meta.env?.DEV) {
  const mags = MATH_L18.lessons[0].screens.filter(s => s.type === 'magazine').length;
  const game = MATH_L18.lessons[0].screens.find(s => s.type === 'interactive')?.items?.length ?? 0;
  const quiz = MATH_L18.lessons[0].screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  console.log(`[LESSON-MATH-L18] Loaded: "Introduction to Multiplication" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
}
