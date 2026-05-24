// ─────────────────────────────────────────────────────────────────────────────
// MATH UE  |  L15 — Geometry: Lines, Angles, Symmetry
// Age band : upper_explorers (9–10)   Guide: remi
// Standards: CCSS 4.G.A.1, 4.G.A.2, 4.G.A.3
// CALIBRATED: Math UE Spec v2
// Game format: drag-identify (Sort geometric figures by their properties)
// Visual model: none (concept-driven; visuals come through Midjourney later)
// Misconceptions:
//   - "All triangles are equilateral" (no — many types)
//   - "An angle is the length of its sides" (no — it's how much the sides spread)
//   - "Lines of symmetry only go vertically" (no — horizontal, diagonal too)
// ─────────────────────────────────────────────────────────────────────────────

const MATH_UE_L15 = {
  ageBand: `upper_explorers`,
  subjectId: `math`,
  guide: `remi`,

  lessons: [
    {
      id: `math-9-10-15`,
      title: `Geometry: Lines, Angles, Symmetry`,
      duration: 22,
      xpReward: 75,
      badge: `geometry-explorer`,
      badgeName: `Geometry Explorer`,

      screens: [
        {
          id: `l15-welcome`,
          type: `welcome`,
          guideText: `Welcome back, {name}. Today we shift gears completely. Geometry isn't about calculations — it's about SHAPES and how they relate to each other. The vocabulary is huge (parallel, perpendicular, acute, obtuse, right, scalene, isosceles, equilateral — lots of new words). By the end of today, you'll have a real geometric vocabulary AND understand symmetry — one of the most beautiful ideas in math.`,
          headline: `Geometry: Lines, Angles, Symmetry`,
          subtitle: `The math of shapes`,
          visual: `/ue-assets/math/l15-welcome.webp`,
        },

        {
          id: `l15-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Lines, Rays, Segments`,
          paragraphs: [
            `Geometry starts with the simplest objects. A LINE goes on forever in BOTH directions. We draw it with arrows on both ends. A RAY starts at one point and goes on forever in one direction. It's like a line but only "half" of one. A LINE SEGMENT has two definite endpoints — it has a measurable length.`,
            `Two lines can have different relationships. PARALLEL lines never meet — they stay the same distance apart forever, like train tracks. PERPENDICULAR lines meet at a right angle (90°), like the corner of a book. INTERSECTING lines just cross each other at some angle, not necessarily 90°.`,
            `These relationships matter because shapes are made of segments. A rectangle has parallel sides AND perpendicular corners. A parallelogram has only parallel sides (not perpendicular corners). The names of shapes are usually based on the kinds of lines and angles they contain.`,
          ],
          image: `/ue-assets/math/l15-s1-lines.webp`,
          imageCaption: `Line, ray, segment. Parallel, perpendicular, intersecting.`,
          vocab: [
            { word: `parallel`,
              definition: `Two lines that never meet, always staying the same distance apart. Like train tracks.`,
              audioPrompt: `Parallel lines are two lines that never meet, {name}. They stay the same distance apart forever. Train tracks are parallel. The top and bottom of a book page are parallel. Parallel lines have the same direction. When you see two parallel lines, you know they'll never cross — no matter how far you extend them. The mathematical symbol for "parallel to" is two slashes (//).` },
            { word: `perpendicular`,
              definition: `Two lines that meet at a right angle (90°). Like the corners of a square.`,
              audioPrompt: `Perpendicular lines are two lines that meet at exactly a right angle, {name} — that's 90 degrees. The corners of a square are perpendicular. The "T" shape has perpendicular lines. A wall and the floor where they meet form perpendicular lines. The mathematical symbol is the upside-down T. Perpendicular lines are special — most intersecting lines aren't perpendicular, so when they are, we call it out specifically.` },
          ],
        },

        {
          id: `l15-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Angles: How Much Two Lines Spread`,
          paragraphs: [
            `An angle is the SPREAD between two rays that share a starting point. Important: the size of an angle is NOT the length of its sides. Two angles can look very different (one with long sides, one with short sides) but have the same SIZE if the spread between the sides is the same.`,
            `Angles are measured in DEGREES. A full turn is 360 degrees. A half turn is 180 degrees. A quarter turn is 90 degrees. We classify angles by their size: ACUTE (less than 90°), RIGHT (exactly 90°), OBTUSE (between 90° and 180°), STRAIGHT (180°), REFLEX (greater than 180°).`,
            `The right angle is the most important — it's what perpendicular lines form. Right angles are everywhere in buildings, books, screens, doors. The little square symbol drawn in a corner tells you it's a right angle. Without that symbol, an angle is usually drawn with an arc.`,
          ],
          image: `/ue-assets/math/l15-s2-angles.webp`,
          imageCaption: `Acute (< 90°), Right (90°), Obtuse (90°-180°), Straight (180°).`,
          vocab: [
            { word: `acute angle`,
              definition: `An angle smaller than 90°. Sharp and narrow.`,
              audioPrompt: `An acute angle is one that's smaller than 90 degrees, {name}. Acute angles look sharp and narrow. The angle inside a slice of pizza is usually acute. A capital A has an acute angle at the top. Acute angles are smaller than the corner of a square. The word "acute" comes from a Latin word meaning sharp — and that's exactly what acute angles look like.` },
            { word: `obtuse angle`,
              definition: `An angle larger than 90° but smaller than 180°. Wide open.`,
              audioPrompt: `An obtuse angle is one that's bigger than 90 degrees but less than 180 degrees, {name}. Obtuse angles look wide and open. A half-open book has an obtuse angle at its spine. Many roof angles are obtuse. Obtuse angles are bigger than the corner of a square but smaller than a straight line. The word "obtuse" comes from Latin meaning "blunt" — and obtuse angles do look blunt compared to sharp acute ones.` },
          ],
        },

        {
          id: `l15-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Triangles by Side and by Angle`,
          paragraphs: [
            `Triangles come in many types, classified by their sides OR by their angles.`,
            `By sides: EQUILATERAL has all 3 sides equal (also all 3 angles equal at 60°). ISOSCELES has 2 sides equal (and 2 equal angles). SCALENE has all 3 sides different lengths (and 3 different angles).`,
            `By angles: ACUTE TRIANGLE has all angles less than 90°. RIGHT TRIANGLE has exactly one 90° angle. OBTUSE TRIANGLE has one angle greater than 90°. A triangle can only have ONE right or obtuse angle — because the three angles must add up to exactly 180°.`,
            `Fun fact: every triangle's angles always add up to 180°. Always. Cut any triangle out of paper, tear off the three corners, line them up — they always form a straight line (180°). This is one of the most beautiful properties in geometry.`,
          ],
          image: `/ue-assets/math/l15-s3-triangles.webp`,
          imageCaption: `Triangles classified by sides (equilateral, isosceles, scalene) and by angles.`,
          vocab: [
            { word: `equilateral triangle`,
              definition: `A triangle with all 3 sides equal and all 3 angles equal (each 60°).`,
              audioPrompt: `An equilateral triangle has all three sides equal in length and all three angles equal at 60 degrees, {name}. It's perfectly symmetric — you can rotate it three different ways and it looks the same. Equilateral triangles are the most balanced triangles. They appear everywhere in design and nature because of their perfect symmetry. The word "equilateral" literally means "equal-sided."` },
            { word: `right triangle`,
              definition: `A triangle with exactly one 90° angle.`,
              audioPrompt: `A right triangle has exactly one 90-degree angle, {name} — that's a right angle. The side opposite the right angle is called the hypotenuse, and it's always the longest side. Right triangles are incredibly important in math and engineering. Buildings and bridges depend on right triangles for stability. In high school, you'll learn the Pythagorean theorem — a famous rule about right triangles. You're already on that path.` },
          ],
        },

        {
          id: `l15-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Symmetry: When a Shape Looks the Same After Folding`,
          paragraphs: [
            `A shape has SYMMETRY if you can fold it (or flip it) and have it match itself perfectly. The fold line is called a LINE OF SYMMETRY.`,
            `Examples: a square has 4 lines of symmetry — vertical, horizontal, and 2 diagonals. A rectangle has only 2 — vertical and horizontal (NOT diagonals). An equilateral triangle has 3 (one through each vertex to the opposite side). A regular pentagon has 5. The more "balanced" a shape, the more lines of symmetry.`,
            `Most shapes have NO lines of symmetry. A scalene triangle has none. A regular heart has 1 (vertical, through the middle). A letter like F has none. A letter like A has 1 (vertical). A letter like H has 2 (vertical AND horizontal). Looking at letters is a fun way to spot symmetry — try B, C, D, E, M, N, O, P, S, T, U, V, W, X, Y, Z. Some have 1 line of symmetry, some have 2, some have none. The letter O even has infinite lines (because it's a circle).`,
          ],
          image: `/ue-assets/math/l15-s4-symmetry.webp`,
          imageCaption: `Lines of symmetry: square has 4, equilateral triangle has 3, scalene triangle has 0.`,
          vocab: [
            { word: `line of symmetry`,
              definition: `A line that divides a shape into two mirror-image halves.`,
              audioPrompt: `A line of symmetry is a line that splits a shape into two mirror-image halves, {name}. If you fold the shape along that line, the two halves match exactly. A heart has one vertical line of symmetry. A square has four lines of symmetry. A circle has infinite lines of symmetry. Many shapes have zero lines of symmetry — they don't fold onto themselves no matter how you try. Symmetry is one of the most beautiful ideas in math, and it appears everywhere in nature, art, and architecture.` },
            { word: `symmetric`,
              definition: `Describes a shape that has at least one line of symmetry. Two-mirror-image halves.`,
              audioPrompt: `Symmetric describes a shape that has at least one line of symmetry, {name}. A shape that's symmetric can be folded onto itself perfectly along some line. Most things in nature are symmetric — butterflies, faces, leaves, snowflakes. Symmetry is so common in living things because it's efficient and stable. In art and design, symmetric shapes feel balanced and pleasing. Asymmetric shapes (no symmetry) can feel more dynamic but less restful.` },
          ],
        },

        // ── DRAG-IDENTIFY GAME — Sort Shapes by Properties ──
        {
          id: `l15-game`,
          type: `interactive`,
          format: `drag-identify`,
          guideText: `Time to sort geometric figures by their properties, {name}. I'll show you 12 figures and statements. Drag each into the right category. If you're unsure, think carefully about the definitions from the magazine.`,
          buckets: [
            { id: `angle-acute`,        label: `Acute (< 90°)`,         color: `#A78BFA` },
            { id: `angle-right-obtuse`, label: `Right (= 90°) or Obtuse (> 90°)`, color: `#34D399` },
            { id: `line-relationship`,  label: `Parallel or Perpendicular Lines`, color: `#FBBF24` },
            { id: `symmetric-shape`,    label: `Has at least 1 line of symmetry`, color: `#F87171` },
          ],
          items: [
            { id: `l15-g1`, label: `A pizza slice angle of 45°`,
              matchPhrase: `45° is less than 90°. Acute.`, correctMatch: `angle-acute` },
            { id: `l15-g2`, label: `The corner of a book`,
              matchPhrase: `A book corner is 90° — a right angle. Right or obtuse category.`, correctMatch: `angle-right-obtuse` },
            { id: `l15-g3`, label: `Train tracks`,
              matchPhrase: `Train tracks are parallel — they stay the same distance apart forever.`, correctMatch: `line-relationship` },
            { id: `l15-g4`, label: `An equilateral triangle`,
              matchPhrase: `Equilateral triangle has 3 lines of symmetry — definitely symmetric.`, correctMatch: `symmetric-shape` },
            { id: `l15-g5`, label: `An angle of 120°`,
              matchPhrase: `120° is more than 90° but less than 180° — obtuse.`, correctMatch: `angle-right-obtuse` },
            { id: `l15-g6`, label: `The angle inside a slice of pie cut into 8 pieces`,
              matchPhrase: `360° ÷ 8 = 45°. Less than 90° — acute.`, correctMatch: `angle-acute` },
            { id: `l15-g7`, label: `A wall meeting the floor`,
              matchPhrase: `Wall and floor meet at 90° — perpendicular lines.`, correctMatch: `line-relationship` },
            { id: `l15-g8`, label: `The letter A`,
              matchPhrase: `The letter A has one vertical line of symmetry — symmetric.`, correctMatch: `symmetric-shape` },
            { id: `l15-g9`, label: `An angle of 30°`,
              matchPhrase: `30° is less than 90° — acute.`, correctMatch: `angle-acute` },
            { id: `l15-g10`, label: `A square`,
              matchPhrase: `A square has 4 lines of symmetry — definitely symmetric.`, correctMatch: `symmetric-shape` },
            { id: `l15-g11`, label: `The top and bottom edges of a page`,
              matchPhrase: `These are parallel — they never meet.`, correctMatch: `line-relationship` },
            { id: `l15-g12`, label: `An angle of 90°`,
              matchPhrase: `Exactly 90° — a right angle.`, correctMatch: `angle-right-obtuse` },
          ],
        },

        {
          id: `l15-quiz`,
          type: `quiz`,
          guideText: `Quick check, {name}.`,
          questions: [
            { id: `l15-q1`, format: `multiple-choice`,
              question: `What is an acute angle?`,
              options: [
                `Exactly 90°`,
                `Less than 90°`,
                `Between 90° and 180°`,
                `Exactly 180°`,
              ],
              correctIndex: 1,
              explanation: `An acute angle is smaller than 90°. Sharp and narrow. A 45° angle is acute. A 30° angle is acute.` },
            { id: `l15-q2`, format: `multiple-choice`,
              question: `What does it mean for two lines to be parallel?`,
              options: [
                `They cross at 90°`,
                `They never meet, staying the same distance apart`,
                `They're the same length`,
                `They form a triangle`,
              ],
              correctIndex: 1,
              explanation: `Parallel lines never meet. They stay the same distance apart forever. Like train tracks.` },
            { id: `l15-q3`, format: `multiple-choice`,
              question: `What's the sum of the three angles in any triangle?`,
              options: [`90°`, `180°`, `270°`, `360°`],
              correctIndex: 1,
              explanation: `The three angles of any triangle always add up to exactly 180°. This is one of the most beautiful properties in geometry.` },
            { id: `l15-q4`, format: `multiple-choice`,
              question: `An equilateral triangle has how many lines of symmetry?`,
              options: [`1`, `2`, `3`, `0`],
              correctIndex: 2,
              explanation: `An equilateral triangle has 3 lines of symmetry — one from each vertex through the midpoint of the opposite side. Perfect symmetry comes from having all sides and angles equal.` },
            { id: `l15-q5`, format: `true-false`,
              question: `True or false: The size of an angle is the length of its sides.`,
              correctAnswer: false,
              explanation: `False. The size of an angle is how much its sides SPREAD, measured in degrees. Two angles can have very different side lengths but the same size if the spread is the same.` },
            { id: `l15-q6`, format: `multiple-choice`,
              question: `Which triangle has all three sides different?`,
              options: [`Equilateral`, `Isosceles`, `Scalene`, `Right`],
              correctIndex: 2,
              explanation: `Scalene triangles have all three sides different lengths (and three different angles). Equilateral has all sides equal, isosceles has two equal, right triangles have a 90° angle (classification by angle).` },
            { id: `l15-q7`, format: `multiple-choice`,
              question: `What's an angle of exactly 90° called?`,
              options: [`Acute`, `Right`, `Obtuse`, `Straight`],
              correctIndex: 1,
              explanation: `An angle of exactly 90° is a right angle. Perpendicular lines form right angles. The corner of a book is a right angle.` },
            { id: `l15-q8`, format: `multiple-choice`,
              question: `How many lines of symmetry does a rectangle (non-square) have?`,
              options: [`1`, `2`, `3`, `4`],
              correctIndex: 1,
              explanation: `A rectangle (not a square) has 2 lines of symmetry: vertical and horizontal through the center. NOT the diagonals (those would only work for a square).` },
          ],
        },

        {
          id: `l15-reflection`,
          type: `reflection`,
          guideText: `Pick a prompt, {name}.`,
          prompts: [
            { id: `r1`, text: `Find five examples of right angles in the room you're in. (Hint: corners of furniture, windows, screens, doors.)` },
            { id: `r2`, text: `What's an object you can think of with multiple lines of symmetry? What about one with none?` },
            { id: `r3`, text: `Which geometric term was new to you today?` },
            { id: `r4`, text: `Have you ever seen perpendicular lines in nature (not made by humans)? Where?` },
          ],
        },

        {
          id: `l15-realworld`,
          type: `real-world`,
          guideText: `Geometry is the math of the visible world. Buildings rely on right angles for stability. Bridges use triangles for strength. Art uses symmetry for beauty. Nature is full of symmetric forms — leaves, flowers, snowflakes, animal faces. Every shape you see can be analyzed using the vocabulary you just learned. Becoming "fluent" in geometric vocabulary is like learning a new language for describing what's around you.`,
          familyAdventure: `Together, do a "geometry scavenger hunt" around your house. Find: one right angle, one acute angle, one parallel pair of lines, one perpendicular pair, one shape with 1 line of symmetry, and one shape with 2+ lines of symmetry. See how the vocabulary lets you describe things you see every day.`,
          creativePrompt: {
            intro: `Pick an object in your house (any object). Describe its geometry using as much vocabulary from this lesson as you can.`,
            floor: `Write at least 5 sentences.`,
            stretch: `Write 8-10 sentences. Use parallel, perpendicular, angle, symmetric, and at least one triangle type.`,
            open: `Write as much as you want.`,
            frames: [
              `The object I'm describing is ___.`,
              `It has these lines: ___ (parallel? perpendicular?).`,
              `Its angles are mostly ___.`,
              `Its symmetry: ___.`,
              `Overall, it's a ___ object geometrically.`,
            ],
          },
        },

        {
          id: `l15-celebration`,
          type: `celebration`,
          message: `Solid lesson, {name}. You now have a real geometric vocabulary — lines, angles, triangles, symmetry. You can describe shapes precisely. Next lesson, we MEASURE shapes — area, perimeter, and volume. That's where geometry meets arithmetic. — Remi.`,
          badge: `geometry-explorer`,
          badgeName: `Geometry Explorer`,
          xpEarned: 75,
        },
      ],
    },
  ],
};

export default MATH_UE_L15;
