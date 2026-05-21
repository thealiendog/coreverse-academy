// ─────────────────────────────────────────────────────────────────────────────
// MATH  |  L20 — Arrays (CAPSTONE)
// Age band : explorers (6–8)   Guide: remi
// Standards: CCSS 3.OA.A.3 / 3.MD.C.7
// REWRITE v2 (May 2026): Grade 1 accessible, IS AN ARRAY / NOT AN ARRAY
// 2-bucket recognition game tests spotting arrays in real-world scenes
// (Also brings file's familyAdventure / creativePrompt into standard schema.
// CAPSTONE values preserved: duration 15, xpReward 75)
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
          guideText: `Hey {name}, Remi here! This is our LAST lesson together — the CAPSTONE! We close out the entire Math Explorer subject today by meeting ARRAYS — the most beautiful way to see multiplication! Rectangles of rows and columns! Look how FAR you've come! Let's finish strong!`,
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
            `An ARRAY is multiplication arranged as a RECTANGLE of items! Rows going across! Columns going down! Each row has the SAME number of items! Each column has the SAME number too!`,
            `Imagine a chocolate bar with rows and columns of squares! Or a parking lot with rows of cars! Or seats in a theater! All ARRAYS! For 3 × 5 as an array: draw 3 rows. In each row, put 5 dots! You'll have a rectangle of 15 dots! ARRAYS are the FOURTH way to see multiplication — and the MOST POWERFUL!`,
          ],
          image: `/explorer-assets/math/l20-s1-rectangle-of-dots.webp`,
          imageCaption: `An array: 3 rows × 5 columns = 15 dots! Rectangle of items!`,
          vocab: [
            { word: `array`,       definition: `Multiplication as a rectangle of rows and columns.`,
              audioPrompt: `An array is multiplication as a rectangle of rows and columns. Arrays are visual multiplication. 3 rows times 5 columns equals 15 items. Each row has the same number. Each column has the same number!` },
            { word: `rectangle`,   definition: `A 4-sided shape with rows and columns.`,
              audioPrompt: `A rectangle is a 4-sided shape with rows and columns. Arrays are rectangles of items. The shape itself shows multiplication. Width times height equals total area. Multiplication and geometry meet!` },
            { word: `same number`, definition: `Equal in each row and column.`,
              audioPrompt: `The same number means equal in each row and column. Arrays have the same number in each row. And the same number in each column. That's what makes them arrays. The uniformity is the key!` },
          ],
        },

        {
          id: `l20-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `ROWS and COLUMNS`,
          paragraphs: [
            `Let's get clear on TWO words! ROWS go ACROSS (left to right)! COLUMNS go UP and DOWN!`,
            `Look at a tic-tac-toe board: 3 rows across, 3 columns down. 3 × 3 = 9 squares! Look at theater seats: rows going across, columns going up and down! For an array, you count: HOW MANY ROWS? HOW MANY COLUMNS? Multiply them together! ROWS × COLUMNS = TOTAL! Always! Try 4 × 6: 4 rows × 6 columns = 24 items! Try 7 × 3: 21 items!`,
          ],
          image: `/explorer-assets/math/l20-s2-rows-columns.webp`,
          imageCaption: `ROWS go ACROSS. COLUMNS go UP/DOWN. Rows × columns = total!`,
          vocab: [
            { word: `rows`,              definition: `Lines going across.`,
              audioPrompt: `Rows are lines going across — left to right. Rows are horizontal in an array. Like rows of seats in a theater. Or rows of houses on a street. The number of rows tells you one dimension!` },
            { word: `columns`,           definition: `Lines going up and down.`,
              audioPrompt: `Columns are lines going up and down. Columns are vertical in an array. Like the columns holding up a temple. Or columns on a calendar. The number of columns tells you the other dimension!` },
            { word: `rows times columns`, definition: `The formula for any array.`,
              audioPrompt: `Rows times columns is the formula. Rows times columns equals total items in any array. 3 rows times 5 columns equals 15 items. The simplest, most reliable multiplication formula!` },
          ],
        },

        {
          id: `l20-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Arrays SHOW WHY Multiplication Works`,
          paragraphs: [
            `Here's something amazing! Arrays don't just count things! They SHOW WHY multiplication works!`,
            `Look at a 3 × 5 array. 3 rows, 5 columns. Each ROW has 5 items! So it's 3 GROUPS OF 5! Adding: 5 + 5 + 5 = 15! Now look at it the OTHER way. Each COLUMN has 3 items! So it's also 5 GROUPS OF 3! Adding: 3 + 3 + 3 + 3 + 3 = 15! SAME total! That's why 3 × 5 = 5 × 3! Same rectangle, looked at differently! Arrays MAKE VISIBLE the rules of multiplication!`,
          ],
          image: `/explorer-assets/math/l20-s3-count-fast.webp`,
          imageCaption: `Array shows why 3 × 5 = 5 × 3. Same rectangle, two ways to count!`,
          vocab: [
            { word: `show why`,  definition: `Make the reason visible.`,
              audioPrompt: `Show why means make the reason visible. Arrays show why multiplication works the way it does. Why does 3 times 5 equal 5 times 3? The array shows you — same rectangle, looked at two ways!` },
            { word: `both ways`, definition: `Reading rows or columns.`,
              audioPrompt: `Both ways is reading rows or columns. Arrays count both ways to give the same total. Count by rows? Same total. Count by columns? Same total. Proves multiplication's order doesn't matter!` },
            { word: `visible`,   definition: `Easy to see.`,
              audioPrompt: `Visible means easy to see. Arrays make multiplication's rules visible. Before arrays, you memorized that order doesn't matter. With arrays, you SEE it. Visual proof is the strongest understanding!` },
          ],
        },

        {
          id: `l20-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Arrays Connect to AREA`,
          paragraphs: [
            `Here's a SUPER cool connection! Arrays don't just teach multiplication — they're the foundation of AREA in geometry!`,
            `Imagine a rectangle 3 SQUARES TALL and 5 SQUARES WIDE! It has 3 × 5 = 15 squares of area! That's MULTIPLICATION as AREA! The same formula works for any rectangle: AREA = LENGTH × WIDTH! A 10-foot by 12-foot bedroom = 120 square feet! Arrays and area are the SAME idea! Arrays are the BRIDGE between multiplication and geometry!`,
          ],
          image: `/explorer-assets/math/l20-s4-area-preview.webp`,
          imageCaption: `Arrays = AREA! 3 × 5 squares = 15 squares of area!`,
          vocab: [
            { word: `area`,              definition: `The space inside a shape.`,
              audioPrompt: `Area is the space inside a shape. Area of a rectangle equals length times width. Used for measuring rooms, fields, screens, photos. Arrays teach you the formula naturally!` },
            { word: `length times width`, definition: `The formula for rectangle area.`,
              audioPrompt: `Length times width is the formula for rectangle area. Length times width gives total square units. Same as rows times columns in an array. Geometry and arithmetic shaking hands!` },
            { word: `bridge`,            definition: `A connection between two subjects.`,
              audioPrompt: `A bridge is a connection between two subjects. Arrays are a bridge between multiplication and geometry. Same idea — rectangles of units. Bridges in math help you carry knowledge between subjects!` },
          ],
        },

        {
          id: `l20-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Arrays Are EVERYWHERE`,
          paragraphs: [
            `Once you know arrays, you'll see them EVERYWHERE in real life!`,
            `CHOCOLATE BARS — squares in rows! CALENDAR — days arranged 7 columns wide! PARKING LOTS — cars in rows! THEATERS — seats in rows and columns! APARTMENT BUILDINGS — windows in grids! TILES on a floor! COMPUTER SCREENS — pixels in massive arrays (millions!)! EGGS in cartons! Wherever you see things organized in NEAT ROWS AND COLUMNS, that's an array! Math is hiding everywhere!`,
          ],
          image: `/explorer-assets/math/l20-s5-real-arrays.webp`,
          imageCaption: `Real arrays: chocolate, calendars, parking lots, screens, tiles!`,
          vocab: [
            { word: `everywhere`,  definition: `In many places.`,
              audioPrompt: `Everywhere means in many places. Arrays are everywhere in real life — once you have eyes to spot them. Calendar grids. Parking lots. Theater seats. Pixel screens. Math is hiding in things around you!` },
            { word: `eyes for it`, definition: `Trained to notice.`,
              audioPrompt: `Eyes for it means trained to notice. You now have eyes for arrays in the world. Before this lesson, you might have walked past hundreds of arrays. Now you'll see them constantly. A math and life skill!` },
            { word: `hiding`,      definition: `Present but not obvious.`,
              audioPrompt: `Hiding means present but not obvious. Math is hiding all around you, waiting to be seen. Some people walk through life without noticing. Others — like you — start to see the math everywhere!` },
          ],
        },

        {
          id: `l20-mag-6`,
          type: `magazine`,
          section: 6,
          headline: `Look How FAR You've Come`,
          paragraphs: [
            `Pause and look at the math you can now DO, {name}!`,
            `You started knowing how to count and do simple addition! Now? You understand PLACE VALUE! You ADD multi-digit numbers with regrouping! You SUBTRACT with borrowing! You CHECK your work! You spot PATTERNS! You translate WORD PROBLEMS! And now — you understand MULTIPLICATION four ways! TWENTY LESSONS of growth! Real math skills for life! Be PROUD! You're a real math kid now!`,
          ],
          image: `/explorer-assets/math/l20-s6-journey-done.webp`,
          imageCaption: `Look how far you've come: place value → addition → subtraction → multiplication!`,
          vocab: [
            { word: `growth`, definition: `Real progress over time.`,
              audioPrompt: `Growth is real progress over time. You've earned massive growth in 20 lessons. Started at one level. Ended at a much higher one. That's not just learned facts — that's grown as a thinker!` },
            { word: `earned`, definition: `Worked for and gained.`,
              audioPrompt: `Earned means worked for and gained. You earned this math knowledge — it didn't just appear. You showed up to 20 lessons. You did the practice. You built the understanding. Nobody can take it!` },
            { word: `proud`,  definition: `Feeling good about achievements.`,
              audioPrompt: `Proud means feeling good about achievements. Be proud of completing the Math Explorer journey. 20 lessons. Three operations mastered. A whole new way of thinking about numbers. Celebrate this!` },
          ],
        },

        {
          id: `l20-game`,
          type: `interactive`,
          format: `drag-match`,
          guideText: `Let's try it, {name}! Here are 4 real-world scenes. Drag each one — IS IT AN ARRAY (neat rows and columns!) or NOT AN ARRAY (random arrangement)?`,
          buckets: [
            { id: `is_array`,  label: `✅ IS AN ARRAY`, color: `#34D399` },
            { id: `not_array`, label: `❌ NOT AN ARRAY`, color: `#F87171` },
          ],
          items: [
            { id: `l20-g1`, image: `l20-game-1.webp`, label: `A chocolate bar with 4 rows of 6 squares`,
              matchPhrase: `Yes! IS AN ARRAY! Neat rows and columns, same number in each! 4 × 6 = 24 squares!`,
              correctMatch: `is_array` },
            { id: `l20-g2`, image: `l20-game-2.webp`, label: `A pile of leaves scattered randomly on the ground`,
              matchPhrase: `Right! NOT AN ARRAY! Random pile, no rows or columns. Just scattered leaves!`,
              correctMatch: `not_array` },
            { id: `l20-g3`, image: `l20-game-3.webp`, label: `A calendar with 7 columns (days) and 5 rows (weeks)`,
              matchPhrase: `Yes! IS AN ARRAY! Days × weeks = a perfect array! 7 × 5 = 35 days shown!`,
              correctMatch: `is_array` },
            { id: `l20-g4`, image: `l20-game-4.webp`, label: `Toys thrown in a toy box in no particular order`,
              matchPhrase: `Right! NOT AN ARRAY! No rows. No columns. Just a jumble. Arrays need structure!`,
              correctMatch: `not_array` },
          ],
        },

        {
          id: `l20-quiz`,
          type: `quiz`,
          guideText: `Let's see what you remember from our journey, {name}!`,
          questions: [
            { id: `l20-q1`, format: `multiple-choice`,
              question: `What is an ARRAY?`,
              options: [`A type of music`, `Multiplication as a RECTANGLE of rows and columns`, `A bird`, `An addition trick`],
              correctIndex: 1,
              explanation: `An array! Multiplication arranged as a rectangle. Rows going across. Columns going down!` },
            { id: `l20-q2`, format: `multiple-choice`,
              question: `In a 4 × 6 ARRAY, how many ITEMS total?`,
              options: [`10`, `24 — rows × columns = 4 × 6 = 24`, `46`, `2`],
              correctIndex: 1,
              explanation: `24! 4 rows × 6 columns = 24 items. Always rows × columns!` },
            { id: `l20-q3`, format: `multiple-choice`,
              question: `Why do arrays SHOW that 3 × 5 = 5 × 3?`,
              options: [`Coincidence`, `Same rectangle counted TWO WAYS — by rows (3 groups of 5) or by columns (5 groups of 3)`, `Magic`, `They don't`],
              correctIndex: 1,
              explanation: `Same rectangle, two ways! Count rows: 3 groups of 5. Count columns: 5 groups of 3. Visual proof!` },
            { id: `l20-q4`, format: `true-false`,
              question: `Arrays connect MULTIPLICATION to AREA — the formula AREA = LENGTH × WIDTH works the same way.`,
              correctAnswer: true,
              explanation: `True! Arrays are the bridge to geometry. Length × width = area. Same idea as rows × columns!` },
            { id: `l20-q5`, format: `multiple-choice`,
              question: `___ go across. COLUMNS go up and down. Both together make an array.`,
              options: [`Rows`, `Circles`, `Triangles`, `Stars`],
              correctIndex: 0,
              explanation: `Rows! Rows are horizontal. Columns are vertical. Together they form a rectangular array!` },
            { id: `l20-q6`, format: `multiple-choice`,
              question: `Looking back at all 20 lessons — what's the BIG LESSON about math?`,
              options: [`It's pointless`, `Everything builds on a foundation — place value, then operations, all connected`, `Just memorize`, `Math is random`],
              correctIndex: 1,
              explanation: `Everything builds on a foundation! Place value supports addition supports subtraction supports multiplication!` },
          ],
        },

        {
          id: `l20-realworld`,
          type: `real-world`,
          guideText: `The math you just learned, {name}, is the SAME math people have used for THOUSANDS of years! Ancient merchants tracked goods using it! Sailors navigated oceans with it! Architects built cathedrals from it! Today, every phone, video game, rocket, and AI uses this math thousands of times per second! You're now connected to thousands of years of human achievement AND to all the technology of today!`,
          familyAdventure: `As a family, each person takes a turn sharing: 1) ONE math skill you learned that surprised you! 2) ONE place you've started seeing math in daily life! 3) ONE thing you're excited to learn next! Celebrate this journey together! Ask a grown-up to share one way they use the math you learned in their everyday life or job!`,
          creativePrompt: `Draw yourself at the top of a tall mountain! Around you, label the major skills you climbed: PLACE VALUE, ADDITION, SUBTRACTION, MULTIPLICATION! Show yourself confident, smiling, holding the math toolkit! Above you, write today's date! Write at least 3 sentences about your climb. For stretch, write a 5-sentence story about being a Math Hero who can solve any problem! Keep this drawing — look at it when math feels hard!`,
        },

        {
          id: `l20-celebration`,
          type: `celebration`,
          message: `YOU DID IT, {name}! You finished MATH EXPLORER! Twenty lessons. Four big sub-blocks. Place Value. Addition. Subtraction. Multiplication! You can ADD any whole numbers. SUBTRACT any whole numbers. UNDERSTAND multiplication. CHECK your work. RECOGNIZE patterns. TRANSLATE word problems! That's real math mastery! And here's the deeper thing — you didn't just learn FACTS. You learned how to THINK. Flexible. Curious. Persistent! Be proud. Keep growing. Math will be your friend forever now! Remi is so proud! 🦝`,
          badge: `math-explorer-graduate`,
          badgeName: `Math Explorer Graduate`,
          xpEarned: 75,
        },

      ],
    },
  ],
};

export default MATH_L20;

// ─── Dev asset check ─────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const mags = MATH_L20.lessons[0].screens.filter(s => s.type === 'magazine').length;
  const game = MATH_L20.lessons[0].screens.find(s => s.type === 'interactive')?.items?.length ?? 0;
  const quiz = MATH_L20.lessons[0].screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  console.log(`[LESSON-MATH-L20] Loaded: "Arrays" CAPSTONE with ${mags} magazine sections, ${game} game items, ${quiz} quiz questions`);
}
