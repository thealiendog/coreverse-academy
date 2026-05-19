// ─────────────────────────────────────────────────────────────────────────────
// MATH  |  L20 — Arrays (CAPSTONE)
// Age band : explorers (6–8)   Guide: remi
// Standards: CCSS 3.OA.A.3 / 3.MD.C.7 (arrays as multiplication model, area)
// ─────────────────────────────────────────────────────────────────────────────

const MATH_L20 = {
  ageBand:   `explorers`,
  subjectId: `math`,
  guide:     `remi`,

  lessons: [
    {
      id:        `math-6-8-20`,
      title:     `Arrays`,
      duration:  15,
      xpReward:  75,
      badge:     `math-explorer-graduate`,
      badgeName: `Math Explorer Graduate`,

      screens: [

        {
          id: `l20-welcome`,
          type: `welcome`,
          guideText: `This is our LAST lesson together — the CAPSTONE. We close out the entire Math Explorer subject today by meeting ARRAYS — the most beautiful way to see multiplication. Rectangles of rows and columns. Visual, powerful, and the BRIDGE to geometry and beyond. Look how far you've come. Let's finish strong.`,
          headline: `Arrays`,
          subtitle: `The rectangle model — and the close of 20 lessons of math`,
          visual: `/explorer-assets/math/l20-welcome.webp`,
        },

        {
          id: `l20-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `What's an ARRAY?`,
          paragraphs: [
            `An ARRAY is multiplication arranged as a RECTANGLE of items. Rows going across. Columns going down. Each row has the SAME number of items. Each column has the SAME number too.`,
            `Imagine a chocolate bar with rows and columns of squares. Or a parking lot with rows of cars. Or a window with panes in a grid. Or seats in a theater. All ARRAYS. To show 3 × 5 as an array: draw 3 rows. In each row, put 5 dots. You'll have 3 rows × 5 columns = a rectangle of 15 dots. Count them — 15. That's your multiplication answer. ARRAYS are the FOURTH way to see multiplication (the others being equal groups, number line, and repeated addition). And honestly? Arrays might be the MOST POWERFUL way of all.`,
          ],
          image: `/explorer-assets/math/l20-s1-rectangle-of-dots.webp`,
          imageCaption: `An array: 3 rows × 5 columns = 15 dots. Rectangle of items. Multiplication as a shape.`,
          vocab: [
            {
              word: `array`,
              definition: `Multiplication as a RECTANGLE of rows and columns. ARRAYS are visual multiplication.`,
              audioPrompt: `An array, {name}, is multiplication as a rectangle of rows and columns. Arrays are visual multiplication. Three rows times five columns equals a rectangle of fifteen items. Each row has the same number. Each column has the same number. Arrays show the structure of multiplication clearly.`,
            },
            {
              word: `rectangle`,
              definition: `A 4-sided SHAPE with rows and COLUMNS. Arrays are RECTANGLES of items.`,
              audioPrompt: `A rectangle, {name}, is a four-sided shape with rows and columns. Arrays are rectangles of items. The shape itself shows multiplication. Width times height equals total area. Multiplication and geometry meet beautifully in arrays.`,
            },
            {
              word: `same number`,
              definition: `EQUAL in EACH row and column. Arrays have the SAME NUMBER in each row.`,
              audioPrompt: `The same number, {name}, means equal in each row and column. Arrays have the same number in each row. And the same number in each column. That's what makes them arrays. If rows had different sizes, it wouldn't be an array. The uniformity is the key.`,
            },
          ],
        },

        {
          id: `l20-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `ROWS and COLUMNS`,
          paragraphs: [
            `Let's get clear on TWO words. ROWS go ACROSS (left to right). COLUMNS go UP and DOWN.`,
            `Look at a tic-tac-toe board. 3 rows across. 3 columns down. 3 × 3 = 9 squares. Look at a grocery store aisle. Several rows of shelves. Each shelf is a row. Look at theater seats. Rows of seats going across. Columns going up and down. For an array, you count: HOW MANY ROWS? HOW MANY COLUMNS? Multiply them together. THAT'S your total. ROWS × COLUMNS = TOTAL. Always. Try a 4 × 6 array — 4 rows, 6 columns. Total = 4 × 6 = 24 items in the array. Try 7 × 3. 7 rows, 3 columns. Total = 21 items. Just rows × columns. Simple.`,
          ],
          image: `/explorer-assets/math/l20-s2-rows-columns.webp`,
          imageCaption: `ROWS go ACROSS ↔. COLUMNS go UP/DOWN ↕. Rows × columns = total. Always.`,
          vocab: [
            {
              word: `rows`,
              definition: `Lines going ACROSS (LEFT to RIGHT). ROWS are horizontal in an array.`,
              audioPrompt: `Rows, {name}, are lines going across — left to right. Rows are horizontal in an array. Like rows of seats in a theater. Or rows of houses on a street. Horizontal. The number of rows tells you one dimension of the array.`,
            },
            {
              word: `columns`,
              definition: `Lines going UP and DOWN. COLUMNS are vertical in an array.`,
              audioPrompt: `Columns, {name}, are lines going up and down. Columns are vertical in an array. Like the columns holding up an ancient temple. Or columns on a calendar. Vertical. The number of columns tells you the other dimension of the array.`,
            },
            {
              word: `rows times columns`,
              definition: `THE FORMULA. ROWS × COLUMNS = total items in any array.`,
              audioPrompt: `Rows times columns, {name}, is the formula. Rows times columns equals total items in any array. Always works. Three rows times five columns? Fifteen items. Seven rows times eight columns? Fifty-six items. The simplest, most reliable multiplication formula.`,
            },
          ],
        },

        {
          id: `l20-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Arrays SHOW WHY Multiplication Works`,
          paragraphs: [
            `Here's something amazing — arrays don't just count things. They SHOW WHY multiplication works.`,
            `Look at a 3 × 5 array. 3 rows, 5 columns. Now look at it differently. Each ROW has 5 items. So the array is 3 GROUPS OF 5 (each row is a group). Counting: 5 + 5 + 5 = 15. That's the equal groups view, RIGHT THERE in the array. Now look at it the OTHER way. Each COLUMN has 3 items. So the array is also 5 GROUPS OF 3 (each column is a group). Counting: 3 + 3 + 3 + 3 + 3 = 15. SAME total! That's why 3 × 5 = 5 × 3. The array shows that multiplication doesn't care about ORDER. It's the same rectangle, just looked at differently. Arrays MAKE VISIBLE the rules of multiplication. They're math made into a picture.`,
          ],
          image: `/explorer-assets/math/l20-s3-count-fast.webp`,
          imageCaption: `Array shows why 3 × 5 = 5 × 3. Same rectangle. Count rows: 3 groups of 5. Count columns: 5 groups of 3. Same total.`,
          vocab: [
            {
              word: `show why`,
              definition: `Make the REASON VISIBLE. Arrays SHOW WHY multiplication works the way it does.`,
              audioPrompt: `Show why, {name}, is make the reason visible. Arrays show why multiplication works the way it does. Why does 3 times 5 equal 5 times 3? The array shows you — same rectangle, looked at two ways. The "why" is built into the picture. That's why arrays are powerful.`,
            },
            {
              word: `both ways`,
              definition: `Reading rows OR columns. Arrays count BOTH WAYS to give the same total.`,
              audioPrompt: `Both ways, {name}, is reading rows or columns. Arrays count both ways to give the same total. Count by rows? Same total. Count by columns? Same total. That dual perspective is what proves multiplication's order doesn't matter. The array makes it obvious.`,
            },
            {
              word: `visible`,
              definition: `Easy to SEE. Arrays make multiplication's RULES VISIBLE.`,
              audioPrompt: `Visible, {name}, is easy to see. Arrays make multiplication's rules visible. Before arrays, you just memorized that order doesn't matter. With arrays, you SEE it. You PROVE it. Visual proof is the strongest kind of understanding. That's why arrays are gold.`,
            },
          ],
        },

        {
          id: `l20-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Arrays Connect to AREA`,
          paragraphs: [
            `Here's a SUPER cool connection. Arrays don't just teach multiplication — they're also the foundation of AREA in geometry.`,
            `Imagine a rectangle that's 3 SQUARES TALL and 5 SQUARES WIDE. The whole rectangle has 3 × 5 = 15 squares of area. That's MULTIPLICATION as AREA. The same formula works for any rectangle: AREA = LENGTH × WIDTH. A 10-foot by 12-foot bedroom has 10 × 12 = 120 square feet of floor area. A 4-inch by 6-inch photo has 4 × 6 = 24 square inches. Arrays and area are the SAME idea in different settings. Once you know arrays, you basically know how to measure rectangles. That's why arrays are a BRIDGE — they connect multiplication (arithmetic) to geometry. Two big math worlds, joined by one beautiful rectangle.`,
          ],
          image: `/explorer-assets/math/l20-s4-area-preview.webp`,
          imageCaption: `Arrays = AREA. 3 squares × 5 squares = 15 squares of area. Multiplication meets geometry.`,
          vocab: [
            {
              word: `area`,
              definition: `The SPACE inside a SHAPE. AREA of a rectangle = LENGTH × WIDTH.`,
              audioPrompt: `Area, {name}, is the space inside a shape. Area of a rectangle equals length times width. Used for measuring rooms, fields, screens, photos — anywhere you want to know how much surface something covers. Arrays teach you the formula naturally.`,
            },
            {
              word: `length times width`,
              definition: `The FORMULA for rectangle AREA. LENGTH × WIDTH gives total square units.`,
              audioPrompt: `Length times width, {name}, is the formula for rectangle area. Length times width gives total square units. Same as rows times columns in an array. Same idea — counting a grid of squares. Geometry and arithmetic shaking hands.`,
            },
            {
              word: `bridge`,
              definition: `A CONNECTION between TWO SUBJECTS. Arrays are a BRIDGE between multiplication and geometry.`,
              audioPrompt: `A bridge, {name}, is a connection between two subjects. Arrays are a bridge between multiplication and geometry. They use the same idea — rectangles of units. Once you understand one, you understand the other. Bridges in math help you carry knowledge from subject to subject.`,
            },
          ],
        },

        {
          id: `l20-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Arrays Are EVERYWHERE`,
          paragraphs: [
            `Once you know arrays, you'll see them EVERYWHERE in real life.`,
            `CHOCOLATE BARS — squares in rows and columns. 4 × 6 = 24 squares. CALENDAR — days arranged 7 columns wide, 4-5 rows tall. PARKING LOTS — cars in rows. CLASSROOMS — desks in arrays. THEATERS — seats in rows and columns. APARTMENT BUILDINGS — windows arranged in grids. SOLAR PANELS — square cells in arrays. TILES on a floor or wall — rectangles of squares. COMPUTER SCREENS — pixels in massive arrays (millions of them!). PAINTINGS LIKE PIXEL ART — colored squares in grids. EGGS in cartons — usually 2 × 6 = 12. Wherever you see things organized in NEAT ROWS AND COLUMNS, that's an array. Math is hiding in your home, your school, your city. Now that you have the eyes for it, you'll see arrays everywhere.`,
          ],
          image: `/explorer-assets/math/l20-s5-real-arrays.webp`,
          imageCaption: `Real arrays: chocolate bars, calendars, parking lots, screens, tiles. Once you see them, you can't unsee.`,
          vocab: [
            {
              word: `everywhere`,
              definition: `In MANY PLACES. Arrays are EVERYWHERE in real life — once you have eyes to spot them.`,
              audioPrompt: `Everywhere, {name}, means in many places. Arrays are everywhere in real life — once you have eyes to spot them. Calendar grids. Parking lots. Theater seats. Chocolate bars. Pixel screens. Solar panels. Math is hiding in the things around you. Arrays are the lens that lets you see it.`,
            },
            {
              word: `eyes for it`,
              definition: `Trained to NOTICE. You now have EYES FOR arrays in the world.`,
              audioPrompt: `Eyes for it, {name}, means trained to notice. You now have eyes for arrays in the world. Before this lesson, you might have walked past a hundred arrays without thinking about them. Now you'll see them constantly. That noticing is a math skill — and a life skill.`,
            },
            {
              word: `hiding`,
              definition: `Present but NOT OBVIOUS. Math is HIDING all around you, waiting to be seen.`,
              audioPrompt: `Hiding, {name}, means present but not obvious. Math is hiding all around you, waiting to be seen. The world is full of numbers and patterns and arrays. Some people walk through life without noticing. Others — like you — start to see the math everywhere. Pretty cool.`,
            },
          ],
        },

        {
          id: `l20-mag-6`,
          type: `magazine`,
          section: 6,
          headline: `Look How FAR You've Come`,
          paragraphs: [
            `Pause and look at the math you can now DO.`,
            `You started this subject knowing how to count and do simple addition. Now? You understand PLACE VALUE — the foundation that makes our number system work. You can ADD multi-digit numbers with regrouping. You can SUBTRACT multi-digit numbers with borrowing. You CHECK your work using inverse operations. You spot PATTERNS in problems and solve them quickly. You translate WORD PROBLEMS into math. And now — you understand MULTIPLICATION as equal groups, hops on a number line, repeated addition, AND arrays. That's TWENTY LESSONS of growth. Real math skills that will serve you for the rest of your life. You've done the work. You've earned every bit of progress. Be PROUD. You're a real math kid now.`,
          ],
          image: `/explorer-assets/math/l20-s6-journey-done.webp`,
          imageCaption: `Look how far you've come: place value → addition → subtraction → multiplication. 20 lessons. Real growth.`,
          vocab: [
            {
              word: `growth`,
              definition: `Real PROGRESS over time. You've earned massive GROWTH in 20 lessons.`,
              audioPrompt: `Growth, {name}, is real progress over time. You've earned massive growth in twenty lessons. Started at one level. Ended at a much higher one. That's not just "learned facts" — that's grown as a thinker. Growth is the real reward of doing the work.`,
            },
            {
              word: `earned`,
              definition: `WORKED FOR and gained. You EARNED this math knowledge — it didn't just appear.`,
              audioPrompt: `Earned, {name}, means worked for and gained. You earned this math knowledge — it didn't just appear. You showed up to twenty lessons. You did the practice. You asked the questions. You built the understanding. That's how earning works. Nobody can take it from you.`,
            },
            {
              word: `proud`,
              definition: `FEELING good about achievements. Be PROUD of completing the Math Explorer journey.`,
              audioPrompt: `Proud, {name}, is feeling good about achievements. Be proud of completing the Math Explorer journey. Twenty lessons. Three operations mastered. A whole new way of thinking about numbers. That's worth being proud of. Celebrate this. You earned it.`,
            },
          ],
        },

        {
          id: `l20-game`,
          type: `interactive`,
          format: `drag-match`,
          guideText: `Let's see what you remember from our whole journey!`,
          buckets: [
            { id: `fact`, label: `✅ Yes, that's true!`, color: `#34D399` },
            { id: `myth`, label: `❌ No way!`,           color: `#F87171` },
          ],
          items: [
            {
              id: `l20-g1`,
              image: `l20-game-1.webp`,
              label: `In an array, ROWS × COLUMNS = TOTAL items — it's the simplest multiplication formula.`,
              matchPhrase: `Yes! Always rows × columns. 3 rows × 5 columns = 15 items. Works for every array, every time.`,
              correctMatch: `fact`,
            },
            {
              id: `l20-g2`,
              image: `l20-game-2.webp`,
              label: `ARRAYS show WHY multiplication works — same rectangle gives same answer whether you count rows or columns.`,
              matchPhrase: `True! Arrays make multiplication's rules visible. Why does 3 × 5 = 5 × 3? Same rectangle, different views. The picture proves it.`,
              correctMatch: `fact`,
            },
            {
              id: `l20-g3`,
              image: `l20-game-3.webp`,
              label: `Arrays are TOTALLY USELESS — they never appear in real life and have no purpose.`,
              matchPhrase: `Not at all! Arrays are EVERYWHERE. Chocolate bars, calendars, parking lots, theater seats, computer screens. The world is full of them.`,
              correctMatch: `myth`,
            },
            {
              id: `l20-g4`,
              image: `l20-game-4.webp`,
              label: `After these 20 lessons, you've learned ALL OF MATH — there's nothing else to discover.`,
              matchPhrase: `Definitely not! Math is HUGE. Division, fractions, decimals, geometry, algebra — all built on what you've learned. You're just getting started.`,
              correctMatch: `myth`,
            },
          ],
        },

        {
          id: `l20-quiz`,
          type: `quiz`,
          guideText: `Let's see what you remember from our journey!`,
          questions: [
            {
              id: `l20-q1`,
              format: `multiple-choice`,
              question: `What is an ARRAY?`,
              options: [
                `A type of music`,
                `Multiplication as a RECTANGLE of rows and columns`,
                `A bird`,
                `An addition trick`,
              ],
              correctIndex: 1,
              explanation: `An array! Multiplication arranged as a rectangle. Rows going across. Columns going down. Each row and column has the same number of items.`,
            },
            {
              id: `l20-q2`,
              format: `multiple-choice`,
              question: `In a 4 × 6 ARRAY, how many ITEMS total?`,
              options: [`10`, `24 — rows × columns = 4 × 6 = 24`, `46`, `2`],
              correctIndex: 1,
              explanation: `24! 4 rows × 6 columns = 24 items. Always rows × columns. Simple formula. Works for every array.`,
            },
            {
              id: `l20-q3`,
              format: `multiple-choice`,
              question: `Why do arrays SHOW that 3 × 5 = 5 × 3?`,
              options: [
                `Coincidence`,
                `Same rectangle counted TWO WAYS — count by rows (3 groups of 5) or count by columns (5 groups of 3)`,
                `Magic`,
                `It doesn't — they're actually different`,
              ],
              correctIndex: 1,
              explanation: `Same rectangle, two ways! Count rows: 3 groups of 5. Count columns: 5 groups of 3. Same total. Visual proof that order doesn't matter in multiplication.`,
            },
            {
              id: `l20-q4`,
              format: `true-false`,
              question: `Arrays connect MULTIPLICATION to AREA — the formula AREA = LENGTH × WIDTH works the same way.`,
              correctAnswer: true,
              explanation: `True! Arrays are the bridge to geometry. Length × width = area. Same idea as rows × columns. Once you know arrays, you basically know how to find rectangle areas.`,
            },
            {
              id: `l20-q5`,
              format: `multiple-choice`,
              question: `___ go across (←→). COLUMNS go up and down (↕). Both together make an array.`,
              options: [`Rows`, `Circles`, `Triangles`, `Stars`],
              correctIndex: 0,
              explanation: `Rows! Rows are horizontal (left to right). Columns are vertical (up and down). Together they form a rectangular array.`,
            },
            {
              id: `l20-q6`,
              format: `multiple-choice`,
              question: `Looking back at all 20 lessons — what's the BIG LESSON about math?`,
              options: [
                `It's pointless`,
                `Everything builds on a foundation — place value, then operations, all connected`,
                `Just memorize facts and you're done`,
                `Math is random with no patterns`,
              ],
              correctIndex: 1,
              explanation: `Everything builds on a foundation! Place value (L1-5) supports addition (L6-11) supports subtraction (L12-17) supports multiplication (L18-20). Math is connected. Strong foundation = strong math.`,
            },
          ],
        },

        {
          id: `l20-realworld`,
          type: `real-world`,
          guideText: `The math you just learned — place value, multi-digit addition, subtraction, and basic multiplication — is the SAME math people have used for THOUSANDS of years. Ancient merchants tracked goods using it. Sailors navigated oceans with it. Architects built cathedrals from it. Scientists discovered medicine through it. Today, every phone, video game, rocket, and AI uses this same math thousands of times per second inside their chips. You're now connected to thousands of years of human achievement — AND to all the technology of today. Math isn't separate from real life — it IS real life, made measurable. Be proud of where you are. Stay curious about where you're going. Math is your friend forever.`,
          familyAdventure: {
            title: `Final Celebration`,
            scenario: `As a family, each person takes a turn sharing: 1) ONE math skill you learned that surprised you. 2) ONE place you've started seeing math in daily life. 3) ONE thing you're excited to learn next. Share your answers. Celebrate this journey together. Twenty lessons is a real accomplishment.`,
            talkingPoint: `Ask a grown-up to share one way they use the math you just learned — place value, addition, subtraction, or multiplication — in their everyday life or job.`,
          },
          creativePrompt: {
            title: `Math Hero Self-Portrait`,
            description: `Draw yourself at the top of a tall mountain. Around you, label the major skills you climbed to get here: PLACE VALUE, ADDITION, SUBTRACTION, MULTIPLICATION. Show yourself confident, smiling, holding the math toolkit. Above you, write today's date. This is your moment. Twenty lessons. One hero — YOU. Keep this drawing. Look at it when math feels hard in the future. Remember — you've done hard things before. You can do more.`,
          },
        },

        {
          id: `l20-celebration`,
          type: `celebration`,
          message: `YOU DID IT. You finished MATH EXPLORER. Twenty lessons. Four big sub-blocks. Place Value (the foundation). Addition (combining). Subtraction (separating). Multiplication (counting equal groups). You can ADD any whole numbers. SUBTRACT any whole numbers. UNDERSTAND multiplication. CHECK your work using inverse operations. RECOGNIZE patterns. TRANSLATE word problems. SEE numbers as STRUCTURED — not random — thanks to place value. That's real math mastery for your age. And here's the deeper thing — you didn't just learn FACTS. You learned how to THINK. Flexible. Curious. Persistent. Those skills transfer to everything else in life. The kid you are today is so much stronger than the kid who started lesson one. Be proud. Math will be your friend forever now. Keep going — keep growing. There's so much more to discover.`,
          badge: `math-explorer-graduate`,
          badgeName: `Math Explorer Graduate`,
          xpEarned: 75,
        },

      ],
    },
  ],
};

export default MATH_L20;

// ─── Dev asset check ───
if (import.meta.env?.DEV) {
  const mags = MATH_L20.lessons[0].screens.filter(s => s.type === 'magazine').length;
  const game = MATH_L20.lessons[0].screens.find(s => s.type === 'interactive')?.items?.length ?? 0;
  const quiz = MATH_L20.lessons[0].screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  console.log(`[LESSON-MATH-L20] Loaded: "Arrays" CAPSTONE with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
}
