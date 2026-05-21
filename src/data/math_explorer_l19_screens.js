// ─────────────────────────────────────────────────────────────────────────────
// MATH  |  L19 — What Multiplication Means
// Age band : explorers (6–8)   Guide: remi
// Standards: CCSS 3.OA.A.1
// REWRITE v2 (May 2026): Grade 1 accessible, EQUAL GROUPS / NUMBER LINE /
// REPEATED ADDITION 3-bucket game tests recognizing multiplication views
// (Also brings file's familyAdventure / creativePrompt into standard schema)
// ─────────────────────────────────────────────────────────────────────────────

const MATH_L19 = {
  ageBand:   `explorers`,
  subjectId: `math`,
  guide:     `remi`,

  lessons: [
    {
      id:        `math-6-8-19`,
      title:     `What Multiplication Means`,
      duration:  12,
      xpReward:  50,
      badge:     `multiplication-thinker`,
      badgeName: `Multiplication Thinker`,

      screens: [

        {
          id: `l19-welcome`,
          type: `welcome`,
          guideText: `Hey {name}, Remi here! Last lesson you met multiplication! Today we go DEEPER! We'll see the SAME multiplication problem in THREE DIFFERENT WAYS — equal groups, number-line hops, and repeated addition! Three views, same answer!`,
          headline: `What Multiplication Means`,
          subtitle: `Three different ways to see the same multiplication`,
          visual: `/explorer-assets/math/l19-welcome.webp`,
        },

        {
          id: `l19-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Multiple Ways to SEE It`,
          paragraphs: [
            `Smart mathematicians don't just memorize answers! They understand math FLEXIBLY — they see the same idea in different ways!`,
            `Multiplication is a great example! The problem 3 × 5 can be SEEN as: 1) EQUAL GROUPS — 3 groups of 5 things each! 2) NUMBER LINE — start at 0, take 3 hops of 5! 3) REPEATED ADDITION — 5 + 5 + 5! All three are different ways to picture THE SAME problem! All give 15! Smart math people switch between views based on what helps!`,
          ],
          image: `/explorer-assets/math/l19-s1-many-views.webp`,
          imageCaption: `3 × 5 seen three ways: equal groups + number line + repeated addition. All = 15!`,
          vocab: [
            { word: `flexibly`,       definition: `Seeing things many ways.`,
              audioPrompt: `Flexibly means seeing things many ways. Smart math kids think flexibly — multiple views of the same idea. Instead of one rigid way, you have several options. Pick whichever helps. Flexible thinking is a pro skill!` },
            { word: `views`,          definition: `Different ways to picture something.`,
              audioPrompt: `Views are different ways to picture something. Multiplication has multiple views — all equally true. Equal groups view. Number line view. Repeated addition view. Each helps you understand differently!` },
            { word: `switch between`, definition: `Move from one way to another.`,
              audioPrompt: `Switch between is to move from one way to another. Math people switch between views depending on the problem. Sometimes equal groups makes sense. Sometimes a number line is easier. Tools for any situation!` },
          ],
        },

        {
          id: `l19-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `View #1: EQUAL GROUPS`,
          paragraphs: [
            `You already know this view from last lesson! EQUAL GROUPS is the foundation!`,
            `For 3 × 5: picture 3 GROUPS, each with 5 things! Maybe 3 plates, each with 5 cookies! Count all cookies: 5 + 5 + 5 = 15 cookies! The equal groups view is GREAT for REAL OBJECTS — when something exists as actual groups! Kids in classrooms. Cookies on plates. Wheels on cars. Whenever the problem describes things in groups, this view is most natural!`,
          ],
          image: `/explorer-assets/math/l19-s2-equal-groups-deep.webp`,
          imageCaption: `Equal groups: 3 plates × 5 cookies each! Count by groups!`,
          vocab: [
            { word: `equal groups view`, definition: `Multiplication pictured as same-size groups.`,
              audioPrompt: `Equal groups view is multiplication pictured as same-size groups. Equal groups view is the most natural. You see actual groups of things. When the problem describes real groups, equal groups view fits perfectly!` },
            { word: `real objects`,      definition: `Actual things in the world.`,
              audioPrompt: `Real objects are actual things in the world. Equal groups view works great for real objects. Wheels on cars. Eggs in cartons. Days in weeks. Anywhere multiplication describes physical things in groups!` },
            { word: `count by group`,    definition: `Add the groups together.`,
              audioPrompt: `Count by group means add the groups together. Count by group — 5 plus 5 plus 5 for three groups of 5. You count each whole group as a unit. The bridge between views!` },
          ],
        },

        {
          id: `l19-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `View #2: NUMBER LINE`,
          paragraphs: [
            `Here's a NEW way to see multiplication — the NUMBER LINE!`,
            `Draw a number line: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10... For 3 × 5, START AT 0! Take 3 HOPS, each of SIZE 5! Hop 1: from 0 to 5! Hop 2: 5 to 10! Hop 3: 10 to 15! You LAND at 15! This is called SKIP COUNTING — counting by 5s, taking 3 jumps! The number line view shows the journey! Each hop = one group!`,
          ],
          image: `/explorer-assets/math/l19-s3-number-line.webp`,
          imageCaption: `Number line: 3 × 5 = 3 hops of size 5! Start at 0 → 5 → 10 → 15!`,
          vocab: [
            { word: `number line`,   definition: `A line marked with numbers in order.`,
              audioPrompt: `A number line is a line marked with numbers in order. 0, 1, 2, 3, and so on. The number line is a visual tool for multiplication. You start somewhere and hop along it. Each hop is one group!` },
            { word: `skip counting`, definition: `Counting in bigger steps.`,
              audioPrompt: `Skip counting is counting in bigger steps. Skip counting by 5s: 0, 5, 10, 15, 20. Same as multiplying by 5. Skip counting is multiplication on a number line. Each count is one step!` },
            { word: `hops`,          definition: `Jumps along the number line.`,
              audioPrompt: `Hops are jumps along the number line. Each hop represents one group in multiplication. Three hops for 3 times something. Five hops for 5 times something. Number of hops equals how many groups!` },
          ],
        },

        {
          id: `l19-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `View #3: REPEATED ADDITION`,
          paragraphs: [
            `View #3 — your old friend REPEATED ADDITION! You learned this in L18, but let's see how it fits with the others!`,
            `For 3 × 5: write it as 5 + 5 + 5 = 15! That's three 5s added together! Where do the three 5s come from? From the EQUAL GROUPS (3 groups of 5)! From the NUMBER LINE (3 hops of 5)! Repeated addition is what HAPPENS when you count up the groups or hops! All three views CONNECT! Same problem. Three forms. Same answer!`,
          ],
          image: `/explorer-assets/math/l19-s4-flexible-thinking.webp`,
          imageCaption: `Three views connect: groups SHOW it, number line HOPS it, addition WRITES it!`,
          vocab: [
            { word: `connect`,         definition: `Linked together.`,
              audioPrompt: `To connect is to link together. The three views connect — same problem, different forms. Equal groups in space. Hops on a line. Addition in writing. All three describe the same underlying math!` },
            { word: `how many times`,  definition: `The count of groups or hops.`,
              audioPrompt: `How many times is the count of groups or hops. The first number in multiplication equals how many times. In 3 × 5, the 3 is how many times. Three groups, three hops, or 5 added 3 times!` },
            { word: `what number`,     definition: `The size of each group or hop.`,
              audioPrompt: `What number is the size of each group or hop. The second number in multiplication equals what number you're adding. In 3 × 5, the 5 is what number. 5 in each group, 5 per hop!` },
          ],
        },

        {
          id: `l19-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Coming Soon: ARRAYS`,
          paragraphs: [
            `There's a FOURTH way to see multiplication! It's called an ARRAY! We'll dive deep into it next lesson — the capstone — but here's a PREVIEW!`,
            `An ARRAY is multiplication arranged as a RECTANGLE of rows and columns! For 3 × 5: imagine a rectangle 3 rows tall and 5 columns wide! Each cell has one dot! Count all dots: 15! Arrays are AMAZING because they SHOW why multiplication works! They also CONNECT to area in geometry! Just know they exist for now!`,
          ],
          image: `/explorer-assets/math/l19-s5-array-preview.webp`,
          imageCaption: `Array preview: 3 rows × 5 columns = 15 cells! Coming next lesson!`,
          vocab: [
            { word: `array`,            definition: `Multiplication as a rectangle of rows and columns.`,
              audioPrompt: `An array is multiplication as a rectangle of rows and columns. Array is the 4th view — coming next lesson. Three rows times 5 columns equals 15 cells. Beautiful and visual!` },
            { word: `rows and columns`, definition: `Horizontal and vertical lines.`,
              audioPrompt: `Rows and columns are horizontal and vertical lines. Arrays use rows and columns to show multiplication. Rows go across. Columns go up and down. Each row has the same number of items!` },
            { word: `preview`,          definition: `A quick peek at what's coming.`,
              audioPrompt: `A preview is a quick peek at what's coming. The array view is a preview of next lesson. We'll save it for the capstone. The fourth and final way to see multiplication!` },
          ],
        },

        {
          id: `l19-mag-6`,
          type: `magazine`,
          section: 6,
          headline: `The BIGGER Picture`,
          paragraphs: [
            `Here's the BIG TRUTH, {name}! Math isn't just memorizing answers! It's UNDERSTANDING what's REALLY happening!`,
            `Multiplication can be SEEN as equal groups, number-line hops, or repeated addition! (And soon arrays!) ALL of these views are RIGHT! Knowing multiple views makes math kids FLEXIBLE THINKERS! When you can switch views, hard problems become easier! Real mathematicians, scientists, engineers think this way ALL THE TIME! It's a SUPERPOWER!`,
          ],
          image: `/explorer-assets/math/l19-s6-bigger-picture.webp`,
          imageCaption: `Bigger picture: multiple views = flexible thinking = math superpower!`,
          vocab: [
            { word: `understanding`,   definition: `Really knowing why.`,
              audioPrompt: `Understanding is really knowing why. Math is about understanding — not just memorizing. Kids who memorize without understanding struggle when problems get harder. Kids who understand handle anything!` },
            { word: `flexible thinker`, definition: `Someone who switches views.`,
              audioPrompt: `A flexible thinker is someone who switches views. A flexible thinker handles any math problem. Stuck with one approach? Try another. Build flexibility now — it pays off forever!` },
            { word: `superpower`,      definition: `An amazing ability.`,
              audioPrompt: `A superpower is an amazing ability. Flexible math thinking is a real superpower. Scientists use it. Engineers use it. Anyone solving hard problems uses it. Math superpower equals life superpower!` },
          ],
        },

        {
          id: `l19-game`,
          type: `interactive`,
          format: `drag-match`,
          guideText: `Let's try it, {name}! Here are 4 ways to show 3 × 5. Drag each one — which VIEW is it? EQUAL GROUPS, NUMBER LINE, or REPEATED ADDITION?`,
          buckets: [
            { id: `equal_groups_view`, label: `👥 EQUAL GROUPS`,    color: `#34D399` },
            { id: `number_line_view`,  label: `📏 NUMBER LINE`,    color: `#FBBF24` },
            { id: `addition_view`,     label: `➕ REPEATED ADDITION`, color: `#A78BFA` },
          ],
          items: [
            { id: `l19-g1`, image: `l19-game-1.webp`, label: `3 plates, each with 5 cookies`,
              matchPhrase: `Yes! EQUAL GROUPS view! 3 plates × 5 cookies each = 15 cookies. Real groups of things!`,
              correctMatch: `equal_groups_view` },
            { id: `l19-g2`, image: `l19-game-2.webp`, label: `Start at 0, hop to 5, hop to 10, hop to 15`,
              matchPhrase: `Great! NUMBER LINE view! 3 hops of 5 = 15! Skip counting by 5s!`,
              correctMatch: `number_line_view` },
            { id: `l19-g3`, image: `l19-game-3.webp`, label: `5 + 5 + 5 = 15`,
              matchPhrase: `Perfect! REPEATED ADDITION view! 5 added 3 times. Multiplication written as addition!`,
              correctMatch: `addition_view` },
            { id: `l19-g4`, image: `l19-game-4.webp`, label: `3 boxes, each with 5 crayons`,
              matchPhrase: `Yes! EQUAL GROUPS view! 3 boxes × 5 crayons each = 15. Real objects in real groups!`,
              correctMatch: `equal_groups_view` },
          ],
        },

        {
          id: `l19-quiz`,
          type: `quiz`,
          guideText: `Let's see what you remember, {name}!`,
          questions: [
            { id: `l19-q1`, format: `multiple-choice`,
              question: `How many WAYS can you SEE multiplication?`,
              options: [`Only one`, `MULTIPLE — equal groups, number line, repeated addition, arrays`, `Exactly two`, `Random each time`],
              correctIndex: 1,
              explanation: `Multiple ways! Equal groups, number line, repeated addition, arrays. All show the same multiplication!` },
            { id: `l19-q2`, format: `multiple-choice`,
              question: `How would you do 3 × 5 on a NUMBER LINE?`,
              options: [`Add 3 + 5`, `Start at 0, take 3 HOPS of size 5 — land at 15`, `Subtract from 15`, `Skip the number line`],
              correctIndex: 1,
              explanation: `3 hops of 5! Start at 0. Hop to 5. Hop to 10. Hop to 15. Skip counting by 5s, 3 times!` },
            { id: `l19-q3`, format: `multiple-choice`,
              question: `In 4 × 6, which number tells you HOW MANY TIMES to add?`,
              options: [`The 6`, `The 4 — first number = how many groups`, `Neither`, `Both equally`],
              correctIndex: 1,
              explanation: `The 4! First number = how many times. 4 × 6 means add 6 four times: 6 + 6 + 6 + 6 = 24!` },
            { id: `l19-q4`, format: `true-false`,
              question: `Knowing MULTIPLE VIEWS of multiplication makes you a more FLEXIBLE math thinker.`,
              correctAnswer: true,
              explanation: `True! Flexible thinkers switch views when one is hard. Same idea, different pictures = math superpower!` },
            { id: `l19-q5`, format: `multiple-choice`,
              question: `Counting by 5s on a number line (0, 5, 10, 15, 20) is called ___ counting.`,
              options: [`skip`, `slow`, `random`, `backward`],
              correctIndex: 0,
              explanation: `Skip counting! Skipping ahead by equal amounts. Same as multiplying!` },
            { id: `l19-q6`, format: `multiple-choice`,
              question: `What's an ARRAY (the 4th view, coming next lesson)?`,
              options: [`A bird`, `Multiplication arranged as a RECTANGLE of rows and columns`, `An addition trick`, `A way to subtract`],
              correctIndex: 1,
              explanation: `An array! Multiplication as a rectangle. 3 rows × 5 columns = 15 cells. Coming next lesson!` },
          ],
        },

        {
          id: `l19-realworld`,
          type: `real-world`,
          guideText: `The "MULTIPLE REPRESENTATIONS" idea isn't just for multiplication, {name}! It's how MATHEMATICIANS solve EVERYTHING! Algebra problems can be seen as equations, graphs, or word problems! Geometry can be seen as shapes, formulas, or coordinates! Even SCIENCE works this way — light can be seen as a wave or particles! When stuck, scientists switch representations! Same skill applies in every advanced subject!`,
          familyAdventure: `Together, pick a multiplication like 4 × 3 = 12 and show it THREE WAYS! 1) EQUAL GROUPS — line up 4 piles of 3 objects (coins, beans)! 2) NUMBER LINE — draw 4 hops of 3 (0 → 3 → 6 → 9 → 12)! 3) REPEATED ADDITION — write 3 + 3 + 3 + 3 = 12! All three give 12! Ask a grown-up: when they picture a math problem in their head, what do they "see"?`,
          creativePrompt: `Draw a "THREE VIEWS" poster for one multiplication problem (like 3 × 4)! Divide your paper into three sections. Section 1: EQUAL GROUPS — draw 3 groups of 4 things! Section 2: NUMBER LINE — draw 3 hops of 4! Section 3: REPEATED ADDITION — write 4 + 4 + 4! Write at least 3 sentences about your poster. For stretch, write 5 sentences explaining how all three views show the SAME answer!`,
        },

        {
          id: `l19-celebration`,
          type: `celebration`,
          message: `Solid work, {name}! You now SEE multiplication in three ways — EQUAL GROUPS, NUMBER LINE, and REPEATED ADDITION! All give the same answer! Multiple views = flexible math thinker = future success! Next lesson is the CAPSTONE — we'll meet ARRAYS and close out the WHOLE MATH EXPLORER SUBJECT! One lesson left! Remi is so proud! 🦝`,
          badge: `multiplication-thinker`,
          badgeName: `Multiplication Thinker`,
          xpEarned: 50,
        },

      ],
    },
  ],
};

export default MATH_L19;

// ─── Dev asset check ─────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const mags = MATH_L19.lessons[0].screens.filter(s => s.type === 'magazine').length;
  const game = MATH_L19.lessons[0].screens.find(s => s.type === 'interactive')?.items?.length ?? 0;
  const quiz = MATH_L19.lessons[0].screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  console.log(`[LESSON-MATH-L19] Loaded: "What Multiplication Means" with ${mags} magazine sections, ${game} game items, ${quiz} quiz questions`);
}
