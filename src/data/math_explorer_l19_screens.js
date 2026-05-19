// ─────────────────────────────────────────────────────────────────────────────
// MATH  |  L19 — What Multiplication Means
// Age band : explorers (6–8)   Guide: remi
// Standards: CCSS 3.OA.A.1 (interpret products of whole numbers)
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
          guideText: `Hey {name}, Remi here. Last lesson you met multiplication. Today we go DEEPER. We'll see the SAME multiplication problem in THREE DIFFERENT WAYS — equal groups, number-line hops, and repeated addition. Three views, same answer. The more ways you can see multiplication, the better you understand it. Let's go.`,
          headline: `What Multiplication Means`,
          subtitle: `Three different ways to see the same multiplication — and why that matters`,
          visual: `/explorer-assets/math/l19-welcome.webp`,
        },

        {
          id: `l19-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Multiple Ways to SEE It`,
          paragraphs: [
            `Smart mathematicians don't just memorize answers. They understand math FLEXIBLY — they can see the same idea in different ways.`,
            `Multiplication is a great example. The problem 3 × 5 can be SEEN as: 1) EQUAL GROUPS — 3 groups of 5 things each. 2) NUMBER LINE — start at 0, take 3 hops of 5 each. 3) REPEATED ADDITION — 5 + 5 + 5. All three are DIFFERENT WAYS to picture THE SAME problem. All give 15. Why does this matter? Because some problems are easier to think about with one view, some with another. Real math people switch between views depending on what helps. Today you'll learn all three. Then YOU pick whichever feels right for each problem.`,
          ],
          image: `/explorer-assets/math/l19-s1-many-views.webp`,
          imageCaption: `3 × 5 seen three ways: equal groups + number line + repeated addition. All = 15.`,
          vocab: [
            {
              word: `flexibly`,
              definition: `SEEING things many WAYS. Smart math kids think FLEXIBLY — multiple views of the same idea.`,
              audioPrompt: `Flexibly, {name}, means seeing things many ways. Smart math kids think flexibly — multiple views of the same idea. Instead of one rigid way, you have several options. Pick whichever helps for the problem you're solving. Flexible thinking is what separates pros from beginners.`,
            },
            {
              word: `views`,
              definition: `Different WAYS to PICTURE something. Multiplication has multiple VIEWS — all equally true.`,
              audioPrompt: `Views, {name}, are different ways to picture something. Multiplication has multiple views — all equally true. Equal groups view. Number line view. Repeated addition view. And array view, coming next lesson. Each one helps you understand multiplication differently.`,
            },
            {
              word: `switch between`,
              definition: `Move from ONE WAY to ANOTHER. Math people SWITCH BETWEEN views depending on the problem.`,
              audioPrompt: `Switch between, {name}, is to move from one way to another. Math people switch between views depending on the problem. Sometimes equal groups makes sense. Sometimes a number line is easier. Sometimes repeated addition. Switching between gives you tools for any situation.`,
            },
          ],
        },

        {
          id: `l19-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `View #1: EQUAL GROUPS`,
          paragraphs: [
            `You already know this view from last lesson. EQUAL GROUPS is the foundation.`,
            `For 3 × 5: picture 3 GROUPS, each with 5 things. Maybe 3 plates, each with 5 cookies. Count all cookies: 5 in the first plate + 5 in the second + 5 in the third = 15 cookies. The equal groups view is great for REAL OBJECTS — when something exists as actual groups. Kids in classrooms. Cookies on plates. Wheels on cars. Cans in packs. Whenever the math problem describes things that naturally come in groups, the equal groups view is the most natural. Just count by group.`,
          ],
          image: `/explorer-assets/math/l19-s2-equal-groups-deep.webp`,
          imageCaption: `Equal groups: 3 plates × 5 cookies each. Count by groups. 5 + 5 + 5 = 15.`,
          vocab: [
            {
              word: `equal groups view`,
              definition: `MULTIPLICATION pictured as SAME-SIZE GROUPS. EQUAL GROUPS VIEW is the most natural.`,
              audioPrompt: `Equal groups view, {name}, is multiplication pictured as same-size groups. Equal groups view is the most natural. You see actual groups of things. Plates of cookies. Boxes of crayons. Rows of students. When the problem describes real groups, equal groups view fits perfectly.`,
            },
            {
              word: `real objects`,
              definition: `ACTUAL THINGS in the world. EQUAL GROUPS view works great for real objects.`,
              audioPrompt: `Real objects, {name}, are actual things in the world. Equal groups view works great for real objects. Wheels on cars. Eggs in cartons. Days in weeks. Anywhere multiplication describes physical things in groups, this view makes the math feel concrete.`,
            },
            {
              word: `count by group`,
              definition: `Add the GROUPS together. COUNT BY GROUP — 5 + 5 + 5 for three groups of five.`,
              audioPrompt: `Count by group, {name}, means add the groups together. Count by group — five plus five plus five for three groups of five. You count each whole group as a unit. That's repeated addition emerging from equal groups. The bridge between views.`,
            },
          ],
        },

        {
          id: `l19-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `View #2: NUMBER LINE`,
          paragraphs: [
            `Here's a NEW way to see multiplication — the NUMBER LINE.`,
            `Draw a number line: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15... For 3 × 5, START AT 0. Take 3 HOPS, each of SIZE 5. Hop 1: from 0 to 5. Hop 2: from 5 to 10. Hop 3: from 10 to 15. You land at 15. That's your answer! This is called SKIP COUNTING. You're counting by 5s, taking 3 jumps. The number line view is great when you want to SEE the journey. It also helps you understand WHY multiplication adds equal amounts. Each hop = one group. The size of each hop = how many in each group. Skip-counting up the number line gives you multiples.`,
          ],
          image: `/explorer-assets/math/l19-s3-number-line.webp`,
          imageCaption: `Number line: 3 × 5 = 3 hops of size 5. Start at 0 → 5 → 10 → 15. Skip count.`,
          vocab: [
            {
              word: `number line`,
              definition: `A LINE marked with NUMBERS in order. The NUMBER LINE is a visual tool for multiplication.`,
              audioPrompt: `A number line, {name}, is a line marked with numbers in order. Zero, one, two, three, and so on. The number line is a visual tool for multiplication. You start somewhere and hop along it. Each hop is one group. The size of each hop is how many in each group.`,
            },
            {
              word: `skip counting`,
              definition: `Counting in BIGGER STEPS. SKIP COUNTING by 5s: 0, 5, 10, 15, 20...`,
              audioPrompt: `Skip counting, {name}, is counting in bigger steps. Skip counting by fives: zero, five, ten, fifteen, twenty. Same as adding five over and over. Or multiplying by five. Skip counting is multiplication on a number line. Each count is one multiplication step.`,
            },
            {
              word: `hops`,
              definition: `JUMPS along the number line. Each HOP represents one GROUP in multiplication.`,
              audioPrompt: `Hops, {name}, are jumps along the number line. Each hop represents one group in multiplication. Three hops for 3 times something. Five hops for 5 times something. The number of hops equals how many groups. The size of each hop equals how many in each group.`,
            },
          ],
        },

        {
          id: `l19-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `View #3: REPEATED ADDITION`,
          paragraphs: [
            `View #3 — your old friend REPEATED ADDITION. You learned this in L18, but let's see how it fits with the others.`,
            `For 3 × 5: write it as 5 + 5 + 5 = 15. That's three 5s added together. Where do the three 5s come from? From the EQUAL GROUPS (3 groups of 5). From the NUMBER LINE (3 hops of 5). Repeated addition is what HAPPENS when you count up the groups or the hops. All three views CONNECT. Equal groups SHOWS the multiplication. Number line HOPS the multiplication. Repeated addition WRITES the multiplication. Same problem. Three ways to express it. Same answer. Notice: 3 × 5 = 5 + 5 + 5 = 15. The "3" tells you how many TIMES to add. The "5" tells you what NUMBER to add. Always.`,
          ],
          image: `/explorer-assets/math/l19-s4-flexible-thinking.webp`,
          imageCaption: `Three views connect: groups SHOW it, number line HOPS it, addition WRITES it. Same answer.`,
          vocab: [
            {
              word: `connect`,
              definition: `Linked TOGETHER. The three views CONNECT — same problem, different forms.`,
              audioPrompt: `To connect, {name}, is to link together. The three views connect — same problem, different forms. Equal groups in space. Hops on a line. Addition in writing. All three forms are connected. They describe the same underlying math.`,
            },
            {
              word: `how many times`,
              definition: `The COUNT of groups or hops. The FIRST number in multiplication = HOW MANY TIMES.`,
              audioPrompt: `How many times, {name}, is the count of groups or hops. The first number in multiplication equals how many times. In 3 × 5, the 3 is how many times. Three groups, three hops, or five added three times. That count is always the first number.`,
            },
            {
              word: `what number`,
              definition: `The SIZE of each group or hop. The SECOND number in multiplication = WHAT NUMBER you're adding.`,
              audioPrompt: `What number, {name}, is the size of each group or hop. The second number in multiplication equals what number you're adding. In 3 × 5, the 5 is what number. Five in each group, five per hop, or just the 5 you're adding. That value is always the second number.`,
            },
          ],
        },

        {
          id: `l19-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Coming Soon: ARRAYS`,
          paragraphs: [
            `There's a FOURTH way to see multiplication. It's called an ARRAY. We'll dive deep into it next lesson — the capstone — but here's a PREVIEW.`,
            `An ARRAY is multiplication arranged as a RECTANGLE of rows and columns. For 3 × 5: imagine a rectangle 3 rows tall and 5 columns wide. Each cell has one dot. Count all dots: 15. The rows × columns = the product. Arrays are AMAZING because they SHOW you why multiplication works the way it does. They also CONNECT to area in geometry. Don't worry about them today — just know they exist. Next lesson, we go FULL ARRAY. For now, you've got three great ways to think about multiplication. Equal groups. Number line. Repeated addition. Master these, and arrays will feel natural next time.`,
          ],
          image: `/explorer-assets/math/l19-s5-array-preview.webp`,
          imageCaption: `Array preview: 3 rows × 5 columns = 15 cells. Coming up next lesson (L20 capstone!).`,
          vocab: [
            {
              word: `array`,
              definition: `Multiplication as a RECTANGLE of rows and columns. ARRAY is the 4th view (next lesson).`,
              audioPrompt: `An array, {name}, is multiplication as a rectangle of rows and columns. Array is the fourth view — coming next lesson. Three rows times five columns equals fifteen cells. Arrays show multiplication as a rectangle. Beautiful and visual. Stay tuned.`,
            },
            {
              word: `rows and columns`,
              definition: `HORIZONTAL and VERTICAL lines. Arrays use ROWS AND COLUMNS to show multiplication.`,
              audioPrompt: `Rows and columns, {name}, are horizontal and vertical lines. Arrays use rows and columns to show multiplication. Rows go across. Columns go up and down. Each row has the same number of items. Each column has the same number of items. Multiplication made geometric.`,
            },
            {
              word: `preview`,
              definition: `A QUICK PEEK at what's COMING. The ARRAY view is a PREVIEW of next lesson.`,
              audioPrompt: `A preview, {name}, is a quick peek at what's coming. The array view is a preview of next lesson. Just so you know it exists. We won't dive in today — we'll save it for the capstone. But it's the fourth and final way to see multiplication. Get ready.`,
            },
          ],
        },

        {
          id: `l19-mag-6`,
          type: `magazine`,
          section: 6,
          headline: `The BIGGER Picture`,
          paragraphs: [
            `Here's the BIG TRUTH. Math isn't just memorizing answers. It's UNDERSTANDING what's REALLY happening.`,
            `Multiplication can be SEEN as equal groups, number-line hops, or repeated addition. (And soon, as an array.) ALL of these views are RIGHT. They describe the same math. Knowing multiple views is what makes math kids FLEXIBLE THINKERS. When you can switch views, hard problems become easier. Sometimes one view solves a problem instantly while others would take longer. Real mathematicians, scientists, and engineers think this way ALL THE TIME. Same idea, multiple representations. It's a SUPERPOWER. You're building it now. The more ways you can see multiplication, the better you'll do at ALL future math.`,
          ],
          image: `/explorer-assets/math/l19-s6-bigger-picture.webp`,
          imageCaption: `Bigger picture: multiple views = flexible thinking = math superpower. Same idea, many forms.`,
          vocab: [
            {
              word: `understanding`,
              definition: `Really KNOWING WHY. Math is about UNDERSTANDING — not just memorizing.`,
              audioPrompt: `Understanding, {name}, is really knowing why. Math is about understanding — not just memorizing. Kids who memorize without understanding struggle when problems get harder. Kids who understand can handle anything. Always aim for understanding first.`,
            },
            {
              word: `flexible thinker`,
              definition: `Someone who SWITCHES views. A FLEXIBLE THINKER handles any math problem.`,
              audioPrompt: `A flexible thinker, {name}, is someone who switches views. A flexible thinker handles any math problem. Stuck with one approach? Try another. The flexibility comes from knowing multiple ways to see the same idea. Build flexibility now — it pays off forever.`,
            },
            {
              word: `superpower`,
              definition: `An AMAZING ability. Flexible math thinking is a real SUPERPOWER.`,
              audioPrompt: `A superpower, {name}, is an amazing ability. Flexible math thinking is a real superpower. Scientists use it. Engineers use it. Inventors use it. Anyone solving hard problems uses it. Building it now puts you on a great path. Math superpower equals life superpower.`,
            },
          ],
        },

        {
          id: `l19-game`,
          type: `interactive`,
          format: `drag-match`,
          guideText: `Let's see what you remember!`,
          buckets: [
            { id: `fact`, label: `✅ Yes, that's true!`, color: `#34D399` },
            { id: `myth`, label: `❌ No way!`,           color: `#F87171` },
          ],
          items: [
            {
              id: `l19-g1`,
              image: `l19-game-1.webp`,
              label: `MULTIPLICATION can be seen in many ways — equal groups, number-line hops, repeated addition — all give the same answer.`,
              matchPhrase: `Yes! Multiple views, same answer. 3 × 5 = 15 whether you see it as groups, hops, or addition. Smart math kids switch between views.`,
              correctMatch: `fact`,
            },
            {
              id: `l19-g2`,
              image: `l19-game-2.webp`,
              label: `SKIP COUNTING (like counting by 5s on a number line) is the SAME as multiplication.`,
              matchPhrase: `True! Skip counting = multiplication. Three hops of 5 = 5 + 5 + 5 = 15. Number line shows multiplication as a journey.`,
              correctMatch: `fact`,
            },
            {
              id: `l19-g3`,
              image: `l19-game-3.webp`,
              label: `There's only ONE RIGHT WAY to picture multiplication — all other ways are wrong.`,
              matchPhrase: `Not at all! Many right ways to picture multiplication. Equal groups, number line, repeated addition, arrays — all valid. Use whichever helps you understand.`,
              correctMatch: `myth`,
            },
            {
              id: `l19-g4`,
              image: `l19-game-4.webp`,
              label: `Different ways of seeing multiplication give DIFFERENT ANSWERS — they disagree with each other.`,
              matchPhrase: `Definitely not! All views give the SAME answer. They're different pictures of the same math. 3 × 5 = 15 in every view. Never disagree.`,
              correctMatch: `myth`,
            },
          ],
        },

        {
          id: `l19-quiz`,
          type: `quiz`,
          guideText: `Let's see what you remember!`,
          questions: [
            {
              id: `l19-q1`,
              format: `multiple-choice`,
              question: `How many WAYS can you SEE multiplication?`,
              options: [
                `Only one`,
                `MULTIPLE — equal groups, number-line hops, repeated addition, arrays — all valid`,
                `Exactly two`,
                `It's random each time`,
              ],
              correctIndex: 1,
              explanation: `Multiple ways! Equal groups (objects in groups), number line (hops along a line), repeated addition (5 + 5 + 5), arrays (rows and columns). All show the same multiplication.`,
            },
            {
              id: `l19-q2`,
              format: `multiple-choice`,
              question: `How would you do 3 × 5 on a NUMBER LINE?`,
              options: [
                `Add 3 + 5 and mark the spot`,
                `Start at 0, take 3 HOPS of size 5 each — land at 15`,
                `Subtract from 15`,
                `Skip the number line entirely`,
              ],
              correctIndex: 1,
              explanation: `3 hops of 5! Start at 0. Hop to 5. Hop to 10. Hop to 15. That's skip counting by 5s, three times. Lands at 15 = 3 × 5.`,
            },
            {
              id: `l19-q3`,
              format: `multiple-choice`,
              question: `In 4 × 6, which number tells you HOW MANY TIMES to add?`,
              options: [
                `The 6`,
                `The 4 — first number = how many groups/hops/times`,
                `Neither number`,
                `Both numbers equally`,
              ],
              correctIndex: 1,
              explanation: `The 4! First number = how many times. So 4 × 6 means add the 6 four times: 6 + 6 + 6 + 6 = 24. The "4" is the count, the "6" is what gets added.`,
            },
            {
              id: `l19-q4`,
              format: `true-false`,
              question: `Knowing MULTIPLE VIEWS of multiplication makes you a more FLEXIBLE math thinker.`,
              correctAnswer: true,
              explanation: `True! Flexible thinkers can switch views when one is hard. Real math people do this all the time. Same idea, different pictures = math superpower.`,
            },
            {
              id: `l19-q5`,
              format: `multiple-choice`,
              question: `Counting by 5s on a number line (0, 5, 10, 15, 20...) is called ___ counting.`,
              options: [`skip`, `slow`, `random`, `backward`],
              correctIndex: 0,
              explanation: `Skip counting! Skipping ahead by equal amounts. Same as multiplying. Skip-count by 5s and you're doing the 5 times table.`,
            },
            {
              id: `l19-q6`,
              format: `multiple-choice`,
              question: `What's an ARRAY (the 4th view, coming next lesson)?`,
              options: [
                `A type of bird`,
                `Multiplication arranged as a RECTANGLE of rows and columns`,
                `A random addition trick`,
                `A way to subtract quickly`,
              ],
              correctIndex: 1,
              explanation: `An array! Multiplication as a rectangle. 3 rows × 5 columns = 15 cells. We'll go deep on arrays in the next lesson — the capstone. Get excited!`,
            },
          ],
        },

        {
          id: `l19-realworld`,
          type: `real-world`,
          guideText: `The "MULTIPLE REPRESENTATIONS" idea you're learning isn't just for multiplication. It's how MATHEMATICIANS solve EVERYTHING. Algebra problems can be seen as equations, graphs, or word problems. Geometry can be seen as shapes, formulas, or coordinates. Even SCIENCE works this way — light can be seen as a wave or as particles. SAME IDEA, MANY VIEWS. When stuck on a problem, scientists switch representations. It often unlocks the answer. You're building this superpower right now with multiplication. The same skill applies in every advanced subject. Flexible thinking is a forever-skill.`,
          familyAdventure: {
            title: `Many Views Exercise`,
            scenario: `Together, pick a multiplication like 4 × 3 = 12 and show it THREE WAYS. 1) EQUAL GROUPS — line up 4 piles of 3 objects (coins, beans, marbles). Count. 2) NUMBER LINE — draw a number line from 0 to 12. Mark 4 hops of size 3 (0 → 3 → 6 → 9 → 12). 3) REPEATED ADDITION — write 3 + 3 + 3 + 3 = 12. See how all three give 12. Try with 5 × 2 and 6 × 4 too.`,
            talkingPoint: `Ask a grown-up: when they picture a math problem in their head, what do they "see"? Groups of things? A number line? Do they have a favorite way?`,
          },
          creativePrompt: {
            title: `Three Views Poster`,
            description: `Draw a "THREE VIEWS" poster for one multiplication problem (like 3 × 4). Divide your paper into three sections. Section 1: EQUAL GROUPS — draw 3 groups of 4 things (birds, stars, hearts, anything). Section 2: NUMBER LINE — draw a number line with 3 hops of 4. Section 3: REPEATED ADDITION — write 4 + 4 + 4. Underneath all three, write = 12 showing they all connect to the same answer.`,
          },
        },

        {
          id: `l19-celebration`,
          type: `celebration`,
          message: `Solid work! You now SEE multiplication in three ways — EQUAL GROUPS (objects in piles), NUMBER LINE (hops along a line, skip counting), and REPEATED ADDITION (writing the math). All give the same answer. Multiple views = flexible math thinker = future success. Next lesson is the CAPSTONE — we'll meet ARRAYS (the 4th view) and close out the WHOLE MATH EXPLORER SUBJECT. One lesson left!`,
          badge: `multiplication-thinker`,
          badgeName: `Multiplication Thinker`,
          xpEarned: 50,
        },

      ],
    },
  ],
};

export default MATH_L19;

// ─── Dev asset check ───
if (import.meta.env?.DEV) {
  const mags = MATH_L19.lessons[0].screens.filter(s => s.type === 'magazine').length;
  const game = MATH_L19.lessons[0].screens.find(s => s.type === 'interactive')?.items?.length ?? 0;
  const quiz = MATH_L19.lessons[0].screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  console.log(`[LESSON-MATH-L19] Loaded: "What Multiplication Means" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
}
