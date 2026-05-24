// ─────────────────────────────────────────────────────────────────────────────
// MATH UE  |  L18 — Coordinate Plane & Graphing
// Age band : upper_explorers (9–10)   Guide: remi
// Standards: CCSS 5.G.A.1, 5.G.A.2
// CALIBRATED: Math UE Spec v2
// Game format: problem-solving
// Visual model: coordinate-grid (NEW — added in commit d7648ee)
// Misconceptions:
//   - "(x, y) and (y, x) are the same" (NO — order matters!)
//   - "Counting from anywhere works" (NO — always from the origin)
//   - "Y goes horizontal" (NO — Y is vertical, X is horizontal)
// 2 VOCAB PER MAG SECTION.
// ─────────────────────────────────────────────────────────────────────────────

const MATH_UE_L18 = {
  ageBand: `upper_explorers`,
  subjectId: `math`,
  guide: `remi`,

  lessons: [
    {
      id: `math-9-10-18`,
      title: `Coordinate Plane and Graphing`,
      duration: 22,
      xpReward: 75,
      badge: `graph-navigator`,
      badgeName: `Graph Navigator`,

      screens: [
        {
          id: `l18-welcome`,
          type: `welcome`,
          guideText: `Welcome back, {name}. Today we plot points on a grid. The coordinate plane is one of math's most powerful tools — it lets us turn numbers into pictures and pictures into numbers. Every map you've ever used, every video game's positioning system, every graph you've ever seen — they all use coordinates. By the end of today, you'll plot points, read them, and use them to draw shapes.`,
          headline: `Coordinate Plane and Graphing`,
          subtitle: `Turning numbers into pictures`,
          visual: `/ue-assets/math/l18-welcome.webp`,
        },

        {
          id: `l18-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `The Coordinate Plane: Two Number Lines, Crossed`,
          paragraphs: [
            `Picture two number lines. One horizontal (left and right). One vertical (up and down). They cross at zero. That's the coordinate plane.`,
            `The horizontal number line is called the X-AXIS. The vertical one is the Y-AXIS. The point where they meet (0, 0) is called the ORIGIN. The X-axis runs left-right. The Y-axis runs up-down. This is the key — they always work the same way in math. X is horizontal, Y is vertical.`,
            `Every spot on the coordinate plane has an ADDRESS made of two numbers. The first number tells you how far to go RIGHT on the X-axis. The second tells you how far to go UP on the Y-axis. Together, they pinpoint exactly one location. This pair of numbers is called the COORDINATES of that point.`,
          ],
          image: `/ue-assets/math/l18-s1-plane.webp`,
          imageCaption: `Two number lines crossing at zero. X horizontal, Y vertical.`,
          vocab: [
            { word: `coordinate plane`,
              definition: `A 2D space made by crossing a horizontal number line (X-axis) and a vertical number line (Y-axis).`,
              audioPrompt: `The coordinate plane is a 2D space made by crossing two number lines, {name}. The horizontal one is called the X-axis. The vertical one is called the Y-axis. They meet at the origin, which is the point zero-zero. The coordinate plane lets you describe any location in 2D space using just two numbers. It's used in maps, video games, graphs, charts, GPS — basically anything that needs to identify positions in two dimensions.` },
            { word: `origin`,
              definition: `The point (0, 0) where the X-axis and Y-axis cross. The starting point for measuring all coordinates.`,
              audioPrompt: `The origin is the point where the X-axis and Y-axis cross, {name}. Its coordinates are zero comma zero, written (0, 0). The origin is the starting point for measuring everything on the coordinate plane. To find any point, you always start at the origin and count from there. The origin is like "home base" in coordinates — every other point is described by how far away from the origin it is.` },
          ],
        },

        {
          id: `l18-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Reading Coordinates: (x, y) — Order Matters!`,
          paragraphs: [
            `Coordinates are written in parentheses with a comma, like (3, 4). The FIRST number is always the X-COORDINATE — how far right of the origin. The SECOND number is always the Y-COORDINATE — how far up from the origin. This order matters. ALWAYS x first, y second. "X, then Y. Like the letters in the alphabet."`,
            `Example: the point (3, 4) is 3 right from the origin and 4 up from the origin. To plot it: start at (0, 0). Move 3 units right along the X-axis. Then 4 units up. That's where (3, 4) lives.`,
            `Common mistake: confusing (3, 4) with (4, 3). They look similar but they're DIFFERENT points. (3, 4) is 3 right and 4 up. (4, 3) is 4 right and 3 up. The order of the numbers changes which point you're describing. ALWAYS check x first, then y.`,
          ],
          image: `/ue-assets/math/l18-s2-order.webp`,
          imageCaption: `(3, 4) ≠ (4, 3). The order matters. X first, Y second.`,
          vocab: [
            { word: `x-coordinate`,
              definition: `The first number in an ordered pair — tells how far RIGHT (or left, if negative) of the origin.`,
              audioPrompt: `The x-coordinate is the first number in an ordered pair, {name}. It tells you how far right of the origin to go along the horizontal X-axis. In the point (3, 4), the x-coordinate is 3 — meaning 3 units right. The x-coordinate ALWAYS comes first. If you mix up x and y, you'll plot the wrong point — same numbers in the wrong order means a totally different location.` },
            { word: `y-coordinate`,
              definition: `The second number in an ordered pair — tells how far UP (or down, if negative) from the origin.`,
              audioPrompt: `The y-coordinate is the second number in an ordered pair, {name}. It tells you how far up from the origin to go along the vertical Y-axis. In the point (3, 4), the y-coordinate is 4 — meaning 4 units up. The y-coordinate ALWAYS comes second. Mixing up x and y is the most common coordinate mistake. Remember: alphabetical order — x first, y second. Just like the alphabet.` },
          ],
        },

        {
          id: `l18-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Plotting Points and Connecting Them Into Shapes`,
          paragraphs: [
            `Once you can plot a single point, you can plot multiple points and connect them — and they form SHAPES. Plot (0, 0), (4, 0), (4, 3), and (0, 3). Connect them in order. You've drawn a rectangle.`,
            `This is one of the most useful things about coordinates — they let you describe any shape using just numbers. A triangle is 3 coordinate pairs. A square is 4. A pentagon is 5. The corners (called VERTICES) are at specific (x, y) locations.`,
            `Why does this matter? Because every digital image, every video game character, every map, every 3D printer file is made of points on a coordinate system. Even the screen you're reading this on places every letter and pixel based on (x, y) coordinates. The coordinate plane is the foundation of all visual computing.`,
          ],
          image: `/ue-assets/math/l18-s3-shapes.webp`,
          imageCaption: `Points → shapes. (0,0), (4,0), (4,3), (0,3) makes a rectangle.`,
          vocab: [
            { word: `ordered pair`,
              definition: `Two numbers in a specific order, written as (x, y), used to describe a location on the coordinate plane.`,
              audioPrompt: `An ordered pair is two numbers in a specific order, {name}. We write them inside parentheses with a comma between, like (3, 4). It's called "ordered" because the order matters — (3, 4) and (4, 3) are completely different points. Ordered pairs are the way we describe locations on the coordinate plane. They're also called coordinates. Same idea, different names.` },
            { word: `vertex`,
              definition: `A corner of a shape. Plural is "vertices." On the coordinate plane, each vertex has its own (x, y).`,
              audioPrompt: `A vertex is a corner of a shape, {name}. The plural is "vertices." A triangle has 3 vertices. A square has 4. A pentagon has 5. On the coordinate plane, each vertex of a shape is a specific (x, y) point. When you describe a shape using coordinates, you're listing the locations of its vertices. The shape itself is the connection between those vertices.` },
          ],
        },

        {
          id: `l18-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Reading Graphs: The Real-World Power of Coordinates`,
          paragraphs: [
            `Now the real-world payoff. Graphs you see in newspapers, weather reports, business presentations — they're all coordinate planes with data plotted on them.`,
            `Imagine plotting your savings over time. The X-axis is months. The Y-axis is dollars. Each (month, dollars) is a point. Connect the points and you see your savings as a LINE. Going up? You're saving. Going down? You're spending. The shape of the line tells the story.`,
            `Same for weather (X = day, Y = temperature), sports stats (X = game number, Y = points scored), populations, stock prices, your grades over the school year. Coordinates and graphs are the visual language of data. The more you can read them, the more of the world you can understand.`,
          ],
          image: `/ue-assets/math/l18-s4-real.webp`,
          imageCaption: `Graphs are coordinate planes with real-world data. X and Y axes can mean anything.`,
          vocab: [
            { word: `graph`,
              definition: `A picture that shows data on a coordinate plane. The axes can represent anything — time, money, distance, temperature, etc.`,
              audioPrompt: `A graph is a picture that shows data on a coordinate plane, {name}. The X-axis usually represents something that changes over time or position. The Y-axis represents the thing you're measuring. Together they show patterns, trends, and relationships in data. Graphs are everywhere — news articles, weather reports, sports stats, business meetings. Being able to read a graph is one of the most useful real-world math skills.` },
            { word: `data point`,
              definition: `A single piece of information plotted as a point on a graph. Each data point is an (x, y) pair.`,
              audioPrompt: `A data point is a single piece of information plotted on a graph, {name}. Each one is an (x, y) pair. If you're graphing temperature over a week, each day's temperature is a data point. Monday-72° is one point. Tuesday-75° is another. Connecting data points (or just looking at where they cluster) shows the patterns in the data. Real-world data is usually messy — points don't always form perfect lines or shapes. That's normal.` },
          ],
        },

        // ── PROBLEM-SOLVING GAME ──
        {
          id: `l18-game`,
          type: `interactive`,
          format: `problem-solving`,
          guideText: `Time to work on the coordinate plane, {name}. Four problems. We'll plot points, read points off the grid, build a shape, and read a real-world graph. Remember: X first (horizontal), Y second (vertical).`,
          scenarioTitle: `Coordinate Plane Practice`,
          problems: [
            {
              id: `p1`,
              problemStatement: `Plot the point (3, 4) on the grid. How many units do you go RIGHT from the origin? How many units UP?`,
              visual: {
                type: `coordinate-grid`,
                data: {
                  xMax: 8,
                  yMax: 8,
                  points: [{ x: 3, y: 4, label: `A` }],
                  caption: `Point A is at (3, 4).`,
                },
              },
              approaches: [
                {
                  id: `approach-a`,
                  label: `Read x-coordinate (right), then y-coordinate (up)`,
                  description: `X is the first number — how far right. Y is the second — how far up.`,
                  steps: [
                    {
                      prompt: `In the point (3, 4), what's the x-coordinate (the first number)?`,
                      answer: 3,
                      hint: `First number = x-coordinate.`,
                    },
                    {
                      prompt: `So you go 3 units RIGHT from the origin. What's the y-coordinate (the second number)?`,
                      answer: 4,
                      hint: `Second number = y-coordinate.`,
                    },
                    {
                      prompt: `Go 4 units UP from where you stopped. The point (3, 4) is now plotted. Type 1 to confirm.`,
                      answer: 1,
                      hint: `Confirm you understand.`,
                    },
                  ],
                  commonMistakes: [
                    { wrongAnswer: 4, explanation: `Looks like you confused x and y. In (3, 4), the FIRST number (3) is x. The SECOND number (4) is y. Order matters.` },
                  ],
                },
              ],
              finalAnswer: 1,
              finalExplanation: `Point (3, 4): 3 right, 4 up. The x-coordinate (3) is always how far right of the origin. The y-coordinate (4) is always how far up. Order matters — x first, y second.`,
            },
            {
              id: `p2`,
              problemStatement: `Look at the grid. What are the coordinates of point B?`,
              visual: {
                type: `coordinate-grid`,
                data: {
                  xMax: 8,
                  yMax: 8,
                  points: [{ x: 5, y: 2, label: `B` }],
                  caption: `Read off point B's coordinates.`,
                },
              },
              approaches: [
                {
                  id: `approach-a`,
                  label: `Read the X first, then the Y`,
                  description: `Count from the origin: how far right, then how far up.`,
                  steps: [
                    {
                      prompt: `Starting at the origin, how far RIGHT is point B? (count along the X-axis)`,
                      answer: 5,
                      hint: `Count along the horizontal axis to the point's column.`,
                    },
                    {
                      prompt: `From there, how far UP is point B? (count along the Y-axis)`,
                      answer: 2,
                      hint: `Count along the vertical axis to the point's row.`,
                    },
                  ],
                  commonMistakes: [
                    { wrongAnswer: 2, explanation: `Looks like you may have read the y-coordinate first. Always X first — count right along the X-axis. Then count up for Y.` },
                  ],
                },
              ],
              finalAnswer: 2,
              finalExplanation: `Point B is at (5, 2). Read off X first (5 right), then Y (2 up). Always write coordinates as (x, y). The convention "x first" works in every coordinate plane you'll ever see.`,
            },
            {
              id: `p3`,
              problemStatement: `Plot these three points and they'll form a triangle: (1, 1), (5, 1), (3, 4). Where is the TOP vertex of this triangle?`,
              visual: {
                type: `coordinate-grid`,
                data: {
                  xMax: 8,
                  yMax: 8,
                  points: [
                    { x: 1, y: 1, label: `A` },
                    { x: 5, y: 1, label: `B` },
                    { x: 3, y: 4, label: `C` },
                  ],
                  lines: [
                    { from: 0, to: 1 },
                    { from: 1, to: 2 },
                    { from: 2, to: 0 },
                  ],
                  caption: `A triangle with three vertices.`,
                },
              },
              approaches: [
                {
                  id: `approach-a`,
                  label: `Find which point has the highest y-coordinate`,
                  description: `The top of the triangle is the one farthest UP.`,
                  steps: [
                    {
                      prompt: `Which has the BIGGEST y-coordinate? (1, 1) has y = 1. (5, 1) has y = 1. (3, 4) has y = 4. The biggest y is ?`,
                      answer: 4,
                      hint: `Compare: 1, 1, 4. The biggest is 4.`,
                    },
                    {
                      prompt: `So the top vertex is (3, ?). Type the y-coordinate.`,
                      answer: 4,
                      hint: `The point with y = 4 is the top one.`,
                    },
                  ],
                  commonMistakes: [
                    { wrongAnswer: 1, explanation: `If you said 1, that would be the BOTTOM points (which both have y = 1). The TOP vertex has the BIGGEST y-coordinate. Bigger y means farther up.` },
                  ],
                },
              ],
              finalAnswer: 4,
              finalExplanation: `The top vertex is (3, 4) — the point with the biggest y-coordinate. The other two points (1, 1) and (5, 1) are at the bottom, both at y = 1. Plotting and connecting them forms an isosceles triangle.`,
            },
            {
              id: `p4`,
              problemStatement: `A graph shows your savings over 4 months. The points are: (1, 20), (2, 50), (3, 75), (4, 100). How much money did you have at month 3?`,
              visual: {
                type: `coordinate-grid`,
                data: {
                  xMax: 5,
                  yMax: 110,
                  points: [
                    { x: 1, y: 20, label: `M1` },
                    { x: 2, y: 50, label: `M2` },
                    { x: 3, y: 75, label: `M3` },
                    { x: 4, y: 100, label: `M4` },
                  ],
                  lines: [
                    { from: 0, to: 1 },
                    { from: 1, to: 2 },
                    { from: 2, to: 3 },
                  ],
                  caption: `Savings over 4 months. X = month, Y = dollars.`,
                },
              },
              approaches: [
                {
                  id: `approach-a`,
                  label: `Find the point where X is 3, then read its Y`,
                  description: `Month 3 means x = 3. The y-coordinate is the dollars.`,
                  steps: [
                    {
                      prompt: `The point at month 3 is (3, ?). What's the y-coordinate (the dollar amount)?`,
                      answer: 75,
                      hint: `Look at the point labeled M3 — y is the second number.`,
                    },
                  ],
                  commonMistakes: [
                    { wrongAnswer: 3, explanation: `That's the month number (the x-coordinate). The DOLLARS is the y-coordinate. Read off y, not x.` },
                  ],
                },
              ],
              finalAnswer: 75,
              finalExplanation: `At month 3, you had $75. The X-axis was time (months) and the Y-axis was money (dollars). Reading a graph: find the X you want, then look at the corresponding Y. This is how all data graphs work — the X-axis is some kind of input, the Y-axis is the output you're measuring.`,
            },
          ],
          completionMessage: `Real progress, {name}. You can now plot points on a coordinate plane, read them off the grid, build shapes from coordinates, AND read real-world graphs. This skill applies to every chart, graph, and map you'll ever see. Next lesson, we step into algebra — variables. That's where math gets really interesting.`,
        },

        {
          id: `l18-quiz`,
          type: `quiz`,
          guideText: `Quick check, {name}.`,
          questions: [
            { id: `l18-q1`, format: `multiple-choice`,
              question: `In the ordered pair (5, 2), what does the 5 tell you?`,
              options: [
                `Go up 5 units`,
                `Go right 5 units`,
                `Go down 5 units`,
                `Doesn't matter`,
              ],
              correctIndex: 1,
              explanation: `The first number is the x-coordinate, which means how far right of the origin. So 5 = go right 5 units.` },
            { id: `l18-q2`, format: `multiple-choice`,
              question: `What's at the origin?`,
              options: [`(1, 1)`, `(0, 0)`, `(0, 1)`, `(1, 0)`],
              correctIndex: 1,
              explanation: `The origin is at (0, 0) — the point where the X-axis and Y-axis cross. Both coordinates are zero.` },
            { id: `l18-q3`, format: `multiple-choice`,
              question: `Are (3, 4) and (4, 3) the same point?`,
              options: [
                `Yes — same numbers`,
                `No — order matters; they're different points`,
                `Sometimes`,
                `Only on small grids`,
              ],
              correctIndex: 1,
              explanation: `Different points. (3, 4) is 3 right, 4 up. (4, 3) is 4 right, 3 up. Different locations.` },
            { id: `l18-q4`, format: `multiple-choice`,
              question: `Which axis is horizontal?`,
              options: [`X-axis`, `Y-axis`, `Both`, `Neither`],
              correctIndex: 0,
              explanation: `The X-axis is horizontal (left-right). The Y-axis is vertical (up-down). Easy way to remember: X is across, Y is up high.` },
            { id: `l18-q5`, format: `true-false`,
              question: `True or false: In an ordered pair, the X-coordinate always comes first.`,
              correctAnswer: true,
              explanation: `True. The order is always (x, y) — x first, y second. Like the alphabet — x before y.` },
            { id: `l18-q6`, format: `multiple-choice`,
              question: `What are the coordinates of a point that's 2 right and 5 up from the origin?`,
              options: [`(5, 2)`, `(2, 5)`, `(7, 0)`, `(0, 7)`],
              correctIndex: 1,
              explanation: `2 right is x = 2. 5 up is y = 5. So the point is (2, 5).` },
            { id: `l18-q7`, format: `multiple-choice`,
              question: `In a graph where X is days and Y is temperature, what does the point (3, 75) represent?`,
              options: [
                `Day 3, 75 degrees`,
                `Day 75, 3 degrees`,
                `Random numbers`,
                `Can't tell`,
              ],
              correctIndex: 0,
              explanation: `X = day (the first number). Y = temperature (the second). So the point (3, 75) means "on day 3, the temperature was 75°."` },
            { id: `l18-q8`, format: `multiple-choice`,
              question: `What is the vertex of a shape?`,
              options: [
                `The middle`,
                `A corner`,
                `The biggest side`,
                `Doesn't exist`,
              ],
              correctIndex: 1,
              explanation: `A vertex is a corner of a shape. A triangle has 3 vertices, a square has 4, etc. On the coordinate plane, each vertex is an (x, y) point.` },
          ],
        },

        {
          id: `l18-reflection`,
          type: `reflection`,
          guideText: `Pick a prompt, {name}.`,
          prompts: [
            { id: `r1`, text: `Why does the order matter so much in coordinates? What would happen if everyone just guessed which came first?` },
            { id: `r2`, text: `Where in your life do you see coordinate planes or graphs?` },
            { id: `r3`, text: `What's something you could graph using coordinates? Try to think of an X-axis and Y-axis that would make a meaningful graph.` },
            { id: `r4`, text: `How is a map like a coordinate plane?` },
          ],
        },

        {
          id: `l18-realworld`,
          type: `real-world`,
          guideText: `Coordinate planes power almost all visual technology. GPS uses (latitude, longitude) — fancy coordinates. Video games place characters at (x, y) (or (x, y, z) in 3D). Every digital image is just pixels at specific coordinates. Every graph in the news is a coordinate plane with data. Every architectural drawing uses coordinates. The skill you're building here is genuinely fundamental — it unlocks data visualization, programming, design, and a huge range of careers in tech, science, and engineering.`,
          familyAdventure: `Together, look for a graph or chart in a newspaper, online, or on a product label. Identify the X-axis and Y-axis. Pick a specific data point and read off its coordinates. Discuss what the graph is showing — what's the story it tells?`,
          creativePrompt: {
            intro: `Design a graph that would show something interesting from your daily life. Choose an X-axis and Y-axis, then describe what the graph would look like.`,
            floor: `Write at least 5 sentences.`,
            stretch: `Write 8-10 sentences. Include at least 3 specific data points and what they mean.`,
            open: `Write as much as you want.`,
            frames: [
              `My X-axis would be ___.`,
              `My Y-axis would be ___.`,
              `Some data points would be: ___.`,
              `The shape of the graph would probably be ___.`,
              `What this graph would show is ___.`,
            ],
          },
        },

        {
          id: `l18-celebration`,
          type: `celebration`,
          message: `Big skill unlocked, {name}. You can now plot and read coordinates, build shapes from points, and understand any graph you encounter. Next lesson is the hardest one in the band — we introduce VARIABLES. Letters that stand for numbers. Take a breath. — Remi.`,
          badge: `graph-navigator`,
          badgeName: `Graph Navigator`,
          xpEarned: 75,
        },
      ],
    },
  ],
};

export default MATH_UE_L18;
