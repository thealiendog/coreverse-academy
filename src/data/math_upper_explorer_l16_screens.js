// ─────────────────────────────────────────────────────────────────────────────
// MATH UE  |  L16 — Area, Perimeter, and Volume
// Age band : upper_explorers (9–10)   Guide: remi
// Standards: CCSS 4.MD.A.3, 5.MD.C.5
// CALIBRATED: Math UE Spec v2
// Game format: problem-solving
// Visual model: array (area), place-value-blocks (volume)
// Misconceptions:
//   - "Area and perimeter mean the same thing"
//   - "Bigger perimeter = bigger area" (false — they're independent)
//   - "Volume is just bigger area" (no — it's a different dimension)
//   - Confusion about units: perimeter in linear units, area in square, volume in cubic
// ─────────────────────────────────────────────────────────────────────────────

const MATH_UE_L16 = {
  ageBand: `upper_explorers`,
  subjectId: `math`,
  guide: `remi`,

  lessons: [
    {
      id: `math-9-10-16`,
      title: `Area, Perimeter, and Volume`,
      duration: 23,
      xpReward: 75,
      badge: `measurement-master`,
      badgeName: `Measurement Master`,

      screens: [
        {
          id: `l16-welcome`,
          type: `welcome`,
          guideText: `Welcome back, {name}. Today we measure shapes. Three different measurements — perimeter, area, and volume — each measures something different. Most kids mix them up because they sound related. Today you'll lock in the differences. A shape can have a huge perimeter and tiny area, or vice versa. They're independent. The vocabulary today is precise — pay attention to units.`,
          headline: `Area, Perimeter, and Volume`,
          subtitle: `Three different measurements`,
          visual: `/ue-assets/math/l16-welcome.webp`,
        },

        {
          id: `l16-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Perimeter: The Distance Around`,
          paragraphs: [
            `PERIMETER is the distance around the outside of a shape. If you walked along the edge of a rectangular field, the total distance you'd walk is the perimeter. To find it: add up the lengths of all the sides.`,
            `For a rectangle with length 8 ft and width 5 ft: perimeter = 8 + 5 + 8 + 5 = 26 ft. (Or shortcut: 2 × (length + width) = 2 × 13 = 26 ft.) Both methods give the same answer. The shortcut works because a rectangle has 2 lengths and 2 widths.`,
            `Perimeter is measured in LINEAR units (like feet, meters, inches, centimeters) — same units as a single side, because perimeter is a length. Real-world uses: fencing a yard, putting trim around a window, framing a picture. Anytime you need to know "how much edge?" — that's perimeter.`,
          ],
          image: `/ue-assets/math/l16-s1-perimeter.webp`,
          imageCaption: `Perimeter = sum of all side lengths. Measured in linear units (ft, m, cm).`,
          vocab: [
            { word: `perimeter`,
              definition: `The total distance around the outside of a shape. Found by adding all the side lengths.`,
              audioPrompt: `Perimeter is the total distance around the outside of a shape, {name}. To find perimeter, add up the lengths of all the sides. For a 4-sided rectangle, that's adding 4 numbers. For a triangle, 3 numbers. The word "perimeter" comes from Greek words meaning "around" and "measure" — literally measuring around. Real-world examples: how much fence you need around a yard, how much ribbon to go around a present, how far you walk around a track.` },
            { word: `linear units`,
              definition: `Units that measure length: inches, feet, meters, centimeters, miles, kilometers, etc.`,
              audioPrompt: `Linear units are units that measure length, {name}. Inches, feet, yards, miles. Centimeters, meters, kilometers. Linear units have just ONE dimension — distance. Perimeter uses linear units because it IS a distance. Area uses square units because it covers a 2D space. Volume uses cubic units because it fills a 3D space. The kind of unit tells you what kind of measurement is happening.` },
          ],
        },

        {
          id: `l16-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Area: The Space Inside`,
          paragraphs: [
            `AREA is the amount of SPACE INSIDE a shape — the amount of paint you'd need to cover the floor of a rectangular room. For a rectangle: area = length × width. For a 8 ft by 5 ft room: area = 8 × 5 = 40 square feet.`,
            `Why "square feet"? Because area measures how many 1-foot-by-1-foot squares would fit inside the shape. Imagine tiling the room with 1x1 tiles. 40 tiles would fit. That's 40 square feet. Area is always measured in SQUARE UNITS (sq ft, sq m, sq cm), or written with a small "²" like ft².`,
            `Area is different from perimeter. They measure different things. A long thin rectangle (like 100 × 1) has a big perimeter (202) but small area (100). A square (like 10 × 10) has the same area (100) but a much smaller perimeter (40). Same area, very different perimeter. They're independent.`,
          ],
          image: `/ue-assets/math/l16-s2-area.webp`,
          imageCaption: `Area = length × width. Measured in SQUARE units (ft², m², cm²).`,
          vocab: [
            { word: `area`,
              definition: `The amount of 2D space inside a shape. Measured in square units.`,
              audioPrompt: `Area is the amount of two-dimensional space inside a shape, {name}. It tells you how much surface the shape covers. For a rectangle, area equals length times width. The result is in square units — like square feet, square meters, or square centimeters — because area is measuring how many unit squares fit inside the shape. Real examples: how much paint to cover a wall, how much carpet to cover a floor, how much wrapping paper to cover the surface of a box.` },
            { word: `square units`,
              definition: `Units that measure area: square feet, square meters, square centimeters. Each is a 1-by-1 square of the linear unit.`,
              audioPrompt: `Square units are the units for measuring area, {name}. A square foot is a 1-foot-by-1-foot square. A square meter is a 1-meter-by-1-meter square. Square units make sense because area is "how many small squares fit inside." We write square feet as ft², where the little 2 means "squared." This is the start of exponent notation — you'll see ² and ³ throughout middle school and beyond.` },
          ],
        },

        {
          id: `l16-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Volume: The Space Inside in 3D`,
          paragraphs: [
            `VOLUME is the amount of 3D SPACE INSIDE an object. While area measures the surface of a 2D shape, volume measures the inside of a 3D shape — how much water it can hold, how much air fills a room.`,
            `For a rectangular box (a "rectangular prism"): volume = length × width × height. A box that's 4 ft long, 3 ft wide, and 2 ft tall has volume = 4 × 3 × 2 = 24 cubic feet. Cubic because each tiny unit inside is a 1-foot-by-1-foot-by-1-foot CUBE.`,
            `Volume uses CUBIC UNITS (cu ft, cu m, cu cm), or written with a small "³" like ft³. Real-world: how much milk fits in a carton (volume), how big a moving truck is (volume), how much soil you need for a garden bed (volume). Volume is for 3D objects only — flat shapes don't have volume, just area.`,
          ],
          image: `/ue-assets/math/l16-s3-volume.webp`,
          imageCaption: `Volume = length × width × height. Measured in CUBIC units (ft³, m³, cm³).`,
          vocab: [
            { word: `volume`,
              definition: `The amount of 3D space inside an object. Measured in cubic units.`,
              audioPrompt: `Volume is the amount of three-dimensional space inside an object, {name}. While area is "how much surface," volume is "how much inside." A pool full of water has volume. The space inside a room has volume. For a rectangular box, volume equals length times width times height — three dimensions multiplied. Volume uses cubic units because the small units are cubes, each one being 1-by-1-by-1 of the linear unit.` },
            { word: `rectangular prism`,
              definition: `A 3D shape with rectangular faces — like a box, a brick, or a room.`,
              audioPrompt: `A rectangular prism is a three-dimensional shape with rectangular faces, {name}. A shoebox is a rectangular prism. A brick is a rectangular prism. A room is essentially a rectangular prism. They all have a length, a width, and a height. The volume of any rectangular prism equals length times width times height. Rectangular prisms are extremely common because they're easy to manufacture and stack.` },
          ],
        },

        {
          id: `l16-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `The Three Are Independent`,
          paragraphs: [
            `The biggest mistake with these three measurements is thinking they're directly related. They're NOT.`,
            `Two rectangles can have the SAME perimeter but VERY DIFFERENT areas. A 10×1 rectangle has perimeter 22, area 10. A 6×5 rectangle ALSO has perimeter 22, but area 30. Same perimeter, three times the area.`,
            `And volume is its own dimension entirely. A 2×2 square has area 4 (no volume — it's flat). A 2×2×2 cube has volume 8 AND area 4 on each face. Different things.`,
            `The right way to think about them: perimeter is 1D (length around). Area is 2D (surface inside). Volume is 3D (space inside). Each has its own units, its own formula, its own meaning. Don't mix them up.`,
          ],
          image: `/ue-assets/math/l16-s4-independent.webp`,
          imageCaption: `Same perimeter, different areas. They're independent measurements.`,
          vocab: [
            { word: `dimension`,
              definition: `A direction of measurement. Length is 1D. Area is 2D (length × width). Volume is 3D (length × width × height).`,
              audioPrompt: `A dimension is a direction of measurement, {name}. One dimension means length only — like a line. Two dimensions means length AND width — like a flat surface. Three dimensions means length, width, AND height — like a box or a room. Perimeter is a 1-dimensional measurement (distance). Area is 2-dimensional (surface). Volume is 3-dimensional (inside space). The dimension determines what kind of unit you use and what you're actually measuring.` },
            { word: `formula`,
              definition: `A standard recipe for computing something. The formula for rectangle area is "length × width."`,
              audioPrompt: `A formula is a standard recipe for computing something, {name}. The formula for rectangle area is length times width. The formula for rectangle perimeter is 2 times (length + width). The formula for rectangular prism volume is length times width times height. Formulas are shortcuts that mathematicians have figured out for common situations. Once you memorize the formulas for area, perimeter, and volume of common shapes, you can find these measurements quickly.` },
          ],
        },

        // ── PROBLEM-SOLVING GAME ──
        {
          id: `l16-game`,
          type: `interactive`,
          format: `problem-solving`,
          guideText: `Time to measure, {name}. Four problems. Mix of perimeter, area, and volume — pay attention to which one each problem is asking for. The unit (linear, square, or cubic) is a big clue.`,
          scenarioTitle: `Measuring Shapes`,
          problems: [
            {
              id: `p1`,
              problemStatement: `A garden is 12 feet long and 8 feet wide. How much fence do you need to go around it?`,
              visual: {
                type: `array`,
                data: {
                  rows: 8,
                  cols: 12,
                  caption: `Fence goes around — perimeter.`,
                },
              },
              approaches: [
                {
                  id: `approach-a`,
                  label: `Calculate the perimeter`,
                  description: `Add all sides, or use 2 × (length + width).`,
                  steps: [
                    {
                      prompt: `Add the four sides: 12 + 8 + 12 + 8 = ?`,
                      answer: 40,
                      hint: `Add all four sides of the rectangle.`,
                    },
                    {
                      prompt: `What unit is this in? Type 1 for feet (linear), 2 for square feet (area), 3 for cubic feet (volume).`,
                      answer: 1,
                      hint: `Perimeter is a length around — linear units. Feet.`,
                    },
                  ],
                  commonMistakes: [
                    { wrongAnswer: 96, explanation: `Looks like you calculated area (12 × 8 = 96 sq ft). The question asks for FENCE — that's perimeter, not area. Add the sides, don't multiply.` },
                  ],
                },
              ],
              finalAnswer: 1,
              finalExplanation: `You need 40 feet of fence. That's the perimeter — sum of all four sides. The unit is feet (linear), because fence is measured by length. Don't confuse this with area, which would tell you how much grass is INSIDE the garden.`,
            },
            {
              id: `p2`,
              problemStatement: `Same garden — 12 ft long, 8 ft wide. How much grass seed do you need to cover the inside?`,
              visual: {
                type: `array`,
                data: {
                  rows: 8,
                  cols: 12,
                  caption: `Grass seed covers area.`,
                },
              },
              approaches: [
                {
                  id: `approach-a`,
                  label: `Calculate the area`,
                  description: `Area = length × width.`,
                  steps: [
                    {
                      prompt: `Multiply length × width: 12 × 8 = ?`,
                      answer: 96,
                      hint: `12 × 8.`,
                    },
                    {
                      prompt: `What unit is this in? Type 1 for feet (linear), 2 for square feet (area), 3 for cubic feet (volume).`,
                      answer: 2,
                      hint: `Area uses square units. Square feet.`,
                    },
                  ],
                  commonMistakes: [
                    { wrongAnswer: 40, explanation: `Looks like you calculated perimeter. The question asks how much COVERS the inside — that's area, not the distance around.` },
                  ],
                },
              ],
              finalAnswer: 2,
              finalExplanation: `You need 96 square feet of grass seed. Area = length × width. The unit is square feet because area measures a 2D space — how many 1x1 squares fit inside.`,
            },
            {
              id: `p3`,
              problemStatement: `A shipping box is 5 ft long, 4 ft wide, and 3 ft tall. How much can fit inside it?`,
              visual: {
                type: `place-value-blocks`,
                data: {
                  number: 60,
                  caption: `How much fits inside — volume.`,
                },
              },
              approaches: [
                {
                  id: `approach-a`,
                  label: `Calculate the volume`,
                  description: `Volume = length × width × height.`,
                  steps: [
                    {
                      prompt: `Multiply length × width: 5 × 4 = ?`,
                      answer: 20,
                      hint: `5 × 4.`,
                    },
                    {
                      prompt: `Now multiply by height: 20 × 3 = ?`,
                      answer: 60,
                      hint: `Now bring in the third dimension.`,
                    },
                    {
                      prompt: `What unit? Type 1 for feet (linear), 2 for square feet (area), 3 for cubic feet (volume).`,
                      answer: 3,
                      hint: `Volume uses cubic units. Cubic feet.`,
                    },
                  ],
                  commonMistakes: [
                    { wrongAnswer: 12, explanation: `Looks like you only multiplied two dimensions. Volume needs ALL THREE — length, width, AND height.` },
                  ],
                },
              ],
              finalAnswer: 3,
              finalExplanation: `60 cubic feet. Volume = length × width × height = 5 × 4 × 3 = 60. The unit is cubic feet because volume is a 3D measurement — how many 1x1x1 cubes fit inside.`,
            },
            {
              id: `p4`,
              problemStatement: `Compare two yards. Yard A is 10 ft by 6 ft. Yard B is 8 ft by 8 ft. Which has more AREA?`,
              visual: {
                type: `none`,
                data: { caption: `Same idea, different dimensions. Compare areas.` },
              },
              approaches: [
                {
                  id: `approach-a`,
                  label: `Calculate both areas, then compare`,
                  description: `Multiply length × width for each.`,
                  steps: [
                    {
                      prompt: `Area of Yard A: 10 × 6 = ?`,
                      answer: 60,
                      hint: `Multiply.`,
                    },
                    {
                      prompt: `Area of Yard B: 8 × 8 = ?`,
                      answer: 64,
                      hint: `Multiply.`,
                    },
                    {
                      prompt: `Compare: 60 vs 64. Which is bigger? Type 1 for Yard A, 2 for Yard B.`,
                      answer: 2,
                      hint: `64 > 60.`,
                    },
                    {
                      prompt: `Surprising? Let's check perimeters. Yard A: 2 × (10+6) = ?`,
                      answer: 32,
                      hint: `Perimeter formula.`,
                    },
                    {
                      prompt: `Yard B: 2 × (8+8) = ?`,
                      answer: 32,
                      hint: `Both yards have the same perimeter!`,
                    },
                  ],
                  commonMistakes: [],
                },
              ],
              finalAnswer: 32,
              finalExplanation: `Yard B has 64 sq ft of area — more than Yard A's 60 sq ft. BUT both yards have the SAME perimeter (32 ft). This proves the point: same perimeter doesn't mean same area. They're independent measurements. A more "square-like" rectangle has more area for the same perimeter than a long, thin one.`,
            },
          ],
          completionMessage: `Real progress, {name}. You can now calculate perimeter, area, and volume — and know which is which. The unit is your biggest clue: feet for perimeter, square feet for area, cubic feet for volume. Mix them up at your own risk. Wave 4 complete — fractions arc closed AND geometry started.`,
        },

        {
          id: `l16-quiz`,
          type: `quiz`,
          guideText: `Quick check, {name}.`,
          questions: [
            { id: `l16-q1`, format: `multiple-choice`,
              question: `What measurement do you use for "how much fence around a yard"?`,
              options: [`Area`, `Perimeter`, `Volume`, `Width`],
              correctIndex: 1,
              explanation: `Fence goes around the outside — that's perimeter. Sum of all sides.` },
            { id: `l16-q2`, format: `multiple-choice`,
              question: `A rectangle is 6 m long and 4 m wide. What's its area?`,
              options: [`10 m`, `20 m²`, `24 m²`, `48 m²`],
              correctIndex: 2,
              explanation: `Area = length × width = 6 × 4 = 24 square meters.` },
            { id: `l16-q3`, format: `multiple-choice`,
              question: `What unit is volume measured in?`,
              options: [
                `Linear units (ft, m)`,
                `Square units (ft², m²)`,
                `Cubic units (ft³, m³)`,
                `Doesn't matter`,
              ],
              correctIndex: 2,
              explanation: `Volume is measured in cubic units because it's a 3D measurement — how many 1x1x1 cubes fit inside.` },
            { id: `l16-q4`, format: `multiple-choice`,
              question: `A box is 3 ft by 2 ft by 4 ft. What's its volume?`,
              options: [`9 ft³`, `24 ft³`, `12 ft³`, `9 ft²`],
              correctIndex: 1,
              explanation: `Volume = length × width × height = 3 × 2 × 4 = 24 cubic feet.` },
            { id: `l16-q5`, format: `true-false`,
              question: `True or false: Two rectangles with the same perimeter must have the same area.`,
              correctAnswer: false,
              explanation: `False. A 10×1 rectangle and a 6×5 rectangle both have perimeter 22, but areas of 10 and 30. Same perimeter, very different areas.` },
            { id: `l16-q6`, format: `multiple-choice`,
              question: `What's the perimeter of a rectangle that's 7 cm by 3 cm?`,
              options: [`10 cm`, `21 cm`, `20 cm`, `20 cm²`],
              correctIndex: 2,
              explanation: `Perimeter = 2 × (length + width) = 2 × (7 + 3) = 2 × 10 = 20 cm. (Or add all sides: 7+3+7+3 = 20.) The unit is cm, not cm².` },
            { id: `l16-q7`, format: `multiple-choice`,
              question: `Which is a 3D measurement?`,
              options: [`Perimeter`, `Area`, `Volume`, `Length`],
              correctIndex: 2,
              explanation: `Volume is 3D — it involves length, width, AND height. Perimeter is 1D. Area is 2D. Volume is the only 3D measurement here.` },
            { id: `l16-q8`, format: `multiple-choice`,
              question: `A cube has all sides equal to 4 ft. What's its volume?`,
              options: [`12 ft³`, `16 ft³`, `48 ft³`, `64 ft³`],
              correctIndex: 3,
              explanation: `Volume of a cube = side × side × side = 4 × 4 × 4 = 64 cubic feet.` },
          ],
        },

        {
          id: `l16-reflection`,
          type: `reflection`,
          guideText: `Pick a prompt, {name}.`,
          prompts: [
            { id: `r1`, text: `Find an object in your house and estimate its volume in cubic feet (or cubic centimeters). How accurate is your guess?` },
            { id: `r2`, text: `What's a real-life situation where you'd want to know area vs. perimeter? What about volume?` },
            { id: `r3`, text: `Why are units (linear, square, cubic) so important when measuring?` },
            { id: `r4`, text: `Can two rectangles have the same area but different perimeters? Try to think of an example.` },
          ],
        },

        {
          id: `l16-realworld`,
          type: `real-world`,
          guideText: `Measuring shapes is one of the most practical math skills. Construction — calculating how much fencing, flooring, paint, or concrete you need. Shipping — figuring out how much volume a package takes up. Cooking — measuring container sizes for storage. Real estate — square footage of a house is its floor area. Engineering — calculating the volume of fuel tanks, water reservoirs, anything with capacity. Knowing the three measurements and which to use when is genuinely useful adult-life math.`,
          familyAdventure: `Together, measure a room in your house. Calculate the perimeter (helpful if you wanted to put baseboards around it). Calculate the area (helpful if you wanted to know the carpet size). Then measure the height of the room and calculate the volume (helpful if you wanted to know the air conditioning load). Three measurements, one room, three different uses.`,
          creativePrompt: {
            intro: `Imagine you're designing a small dream room. Decide its dimensions, then calculate its perimeter, area, and volume.`,
            floor: `Write at least 5 sentences.`,
            stretch: `Write 8-10 sentences. Include why you chose each dimension and what the perimeter/area/volume would be used for.`,
            open: `Write as much as you want — be creative.`,
            frames: [
              `My room is ___ long, ___ wide, and ___ tall.`,
              `Perimeter: ___ (used for ___).`,
              `Area: ___ (used for ___).`,
              `Volume: ___ (used for ___).`,
              `The room is special because ___.`,
            ],
          },
        },

        {
          id: `l16-celebration`,
          type: `celebration`,
          message: `Wave 4 complete, {name}. You've closed the fraction arc, busted the final division myth, and built a real geometric vocabulary AND measurement skill set. 16 of 20 Math UE lessons done. Last wave coming: measurement conversion, coordinate plane, intro to algebra variables, and the capstone. The home stretch. — Remi.`,
          badge: `measurement-master`,
          badgeName: `Measurement Master`,
          xpEarned: 75,
        },
      ],
    },
  ],
};

export default MATH_UE_L16;
