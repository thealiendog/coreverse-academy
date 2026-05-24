// ─────────────────────────────────────────────────────────────────────────────
// MATH UE  |  L17 — Measurement & Unit Conversion
// Age band : upper_explorers (9–10)   Guide: remi
// Standards: CCSS 4.MD.A.1, 5.MD.A.1
// CALIBRATED: Math UE Spec v2
// Game format: drag-identify (sort conversion pairs by their relationship)
// Visual model: none (vocabulary + pattern recognition driven)
// Misconceptions:
//   - "All conversions are × or ÷ by 10" (no — that's only metric)
//   - "Customary units have no pattern" (they do, just not powers of 10)
//   - "Bigger unit = bigger number" (false — when converting, the bigger unit has the smaller number)
// 2 VOCAB PER MAG SECTION.
// ─────────────────────────────────────────────────────────────────────────────

const MATH_UE_L17 = {
  ageBand: `upper_explorers`,
  subjectId: `math`,
  guide: `remi`,

  lessons: [
    {
      id: `math-9-10-17`,
      title: `Measurement and Unit Conversion`,
      duration: 22,
      xpReward: 75,
      badge: `unit-converter`,
      badgeName: `Unit Converter`,

      screens: [
        {
          id: `l17-welcome`,
          type: `welcome`,
          guideText: `Welcome back, {name}. Today we convert between units of measurement. Like inches to feet, ounces to pounds, minutes to hours. There are two main systems — customary (used mostly in the US) and metric (used almost everywhere else). The metric system is actually beautifully designed because everything scales by 10. The customary system... has more memorization. We'll handle both.`,
          headline: `Measurement and Unit Conversion`,
          subtitle: `Switching between units that mean the same thing`,
          visual: `/ue-assets/math/l17-welcome.webp`,
        },

        {
          id: `l17-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Two Systems: Customary and Metric`,
          paragraphs: [
            `The CUSTOMARY system is what most Americans use. Inches, feet, yards, miles for length. Ounces, pounds for weight. Cups, pints, quarts, gallons for volume. The relationships aren't based on round numbers: 12 inches in a foot, 3 feet in a yard, 5,280 feet in a mile, 16 ounces in a pound. You just have to memorize them.`,
            `The METRIC system, used in most of the world and in all science, is based on powers of 10. Millimeters, centimeters, meters, kilometers for length. Milligrams, grams, kilograms for weight. Milliliters, liters for volume. Each step up is × 1,000 (or, for centimeters to meters, × 100). The whole system scales by tens — same as our number system.`,
            `Why does the US still use customary? Mostly historical. Most scientists and engineers in the US use metric for serious work, even though the country officially uses customary. Knowing both systems lets you read recipes from anywhere, understand sports stats from anywhere, and not get lost when something switches between them.`,
          ],
          image: `/ue-assets/math/l17-s1-systems.webp`,
          imageCaption: `Customary: inches, feet, yards, miles. Metric: mm, cm, m, km. Both used in the world.`,
          vocab: [
            { word: `customary system`,
              definition: `The measurement system used mainly in the US: inches, feet, yards, miles, ounces, pounds, cups, gallons, etc.`,
              audioPrompt: `The customary system is the measurement system used mainly in the United States, {name}. Inches, feet, yards, and miles for length. Ounces and pounds for weight. Cups, pints, quarts, and gallons for volume. The relationships between customary units aren't based on round numbers — you just have to memorize them. 12 inches in a foot. 3 feet in a yard. 16 ounces in a pound. The customary system has historical reasons for being the way it is, and it's not going away anytime soon in the US.` },
            { word: `metric system`,
              definition: `The measurement system used in most of the world: millimeters, centimeters, meters, kilometers, grams, kilograms, liters, etc.`,
              audioPrompt: `The metric system is the measurement system used in most of the world and in all of science, {name}. It's based on powers of 10 — every step up is multiplied by ten. Millimeters, centimeters, meters, kilometers. Milligrams, grams, kilograms. Milliliters, liters. The metric system is incredibly elegant because converting is just moving a decimal point. The prefixes like "milli" (thousandth), "centi" (hundredth), and "kilo" (thousand) all mean specific things in every kind of measurement.` },
          ],
        },

        {
          id: `l17-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Converting From Bigger to Smaller Units (and Back)`,
          paragraphs: [
            `Here's the key idea. When you convert FROM a bigger unit TO a smaller unit, you get MORE of them. 1 foot becomes 12 inches. 1 yard becomes 3 feet. The numbers grow. To convert from bigger to smaller: MULTIPLY.`,
            `When you convert FROM a smaller unit TO a bigger unit, you get FEWER of them. 24 inches becomes 2 feet. 36 inches becomes 1 yard. The numbers shrink. To convert from smaller to bigger: DIVIDE.`,
            `Example: How many inches in 5 feet? Going FROM feet (bigger) TO inches (smaller) — multiply. 5 × 12 = 60 inches. Example: How many feet in 48 inches? Going FROM inches (smaller) TO feet (bigger) — divide. 48 ÷ 12 = 4 feet. Same idea works for any unit pair: multiply going to smaller, divide going to bigger.`,
          ],
          image: `/ue-assets/math/l17-s2-direction.webp`,
          imageCaption: `Bigger → Smaller: multiply. Smaller → Bigger: divide.`,
          vocab: [
            { word: `conversion factor`,
              definition: `The number you multiply or divide by to convert between two units. For feet to inches, the factor is 12.`,
              audioPrompt: `A conversion factor is the number you multiply or divide by to convert between two units, {name}. For feet to inches, the conversion factor is 12 — because 12 inches equals 1 foot. For pounds to ounces, the factor is 16. For yards to feet, the factor is 3. Knowing the conversion factor lets you switch between units instantly. Going to a smaller unit, multiply by the factor. Going to a bigger unit, divide by it.` },
            { word: `bigger unit, smaller number`,
              definition: `When measuring the same thing, using bigger units gives you a smaller number. 1 yard = 3 feet = 36 inches. Same length, smaller number with bigger unit.`,
              audioPrompt: `Bigger unit, smaller number is one of the key patterns in unit conversion, {name}. The same length can be 1 yard, or 3 feet, or 36 inches. Same actual size, but the number gets smaller as the unit gets bigger. Why? Because each unit "counts" more. A yard counts more than a foot, so you need fewer yards to measure the same distance. This is why converting to a bigger unit divides, and converting to a smaller unit multiplies. Watch the unit size relative to what you started with.` },
          ],
        },

        {
          id: `l17-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Metric Conversions: Just Move the Decimal Point`,
          paragraphs: [
            `Metric conversions are way easier than customary because everything scales by 10, 100, or 1,000. The prefix tells you what factor to use.`,
            `KILO- means thousand. 1 kilometer = 1,000 meters. 1 kilogram = 1,000 grams. CENTI- means hundredth. 1 centimeter = 1/100 meter. 1 centiliter = 1/100 liter. MILLI- means thousandth. 1 millimeter = 1/1000 meter. 1 milliliter = 1/1000 liter. Same prefixes, same meanings, across all kinds of measurement.`,
            `To convert in metric: just MOVE THE DECIMAL POINT. 5 meters to centimeters: move 2 places right (because cm is 100x smaller than m), giving 500 cm. 250 millimeters to meters: move 3 places left (because m is 1000x bigger than mm), giving 0.250 m. The decimal does all the work. No multiplication or division procedure needed if you're confident moving decimals.`,
          ],
          image: `/ue-assets/math/l17-s3-metric.webp`,
          imageCaption: `Kilo = 1,000. Centi = 1/100. Milli = 1/1000. Move the decimal.`,
          vocab: [
            { word: `prefix`,
              definition: `A small word part at the start of a unit that tells you its size relationship to the base unit. Kilo, centi, milli.`,
              audioPrompt: `A prefix is a small word part added to the start of a unit to indicate size, {name}. In metric, the same prefixes work across all kinds of measurement. "Kilo" always means thousand. "Centi" always means hundredth. "Milli" always means thousandth. So once you know the prefixes, you can convert any metric unit. A kilometer is 1,000 meters. A kilogram is 1,000 grams. A kiloliter is 1,000 liters. Same prefix, same factor, different base unit.` },
            { word: `powers of 10`,
              definition: `The numbers 10, 100, 1,000, 10,000, etc. — each ten times the previous one. Metric conversions all use these.`,
              audioPrompt: `Powers of 10 are the numbers 10, 100, 1,000, 10,000 and so on, {name}. Each one is ten times the previous one. The metric system is built entirely on powers of 10, which is why converting in metric just means moving a decimal point. This connects directly to place value from L01 — every place is 10 times the next. The metric system uses this same structure for measurement, which is why it's so clean and consistent.` },
          ],
        },

        {
          id: `l17-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Common Conversions Worth Memorizing`,
          paragraphs: [
            `Here are the conversions you'll use most often in life. Memorize them.`,
            `LENGTH — 12 inches = 1 foot. 3 feet = 1 yard. 5,280 feet = 1 mile (or 1,760 yards). 100 cm = 1 m. 1,000 m = 1 km.`,
            `WEIGHT — 16 ounces = 1 pound. 2,000 pounds = 1 ton. 1,000 grams = 1 kilogram.`,
            `CAPACITY — 8 fluid ounces = 1 cup. 2 cups = 1 pint. 2 pints = 1 quart. 4 quarts = 1 gallon. 1,000 milliliters = 1 liter.`,
            `TIME — 60 seconds = 1 minute. 60 minutes = 1 hour. 24 hours = 1 day. 7 days = 1 week. 365 days = 1 year (or 366 in a leap year). Time conversion is basically the same across the whole world — it's the only "system" that everyone agrees on.`,
          ],
          image: `/ue-assets/math/l17-s4-common.webp`,
          imageCaption: `The conversions worth memorizing. Used constantly in real life.`,
          vocab: [
            { word: `capacity`,
              definition: `How much a container can hold. Measured in cups, pints, quarts, gallons (customary) or liters (metric).`,
              audioPrompt: `Capacity is how much a container can hold, {name}. A juice box has a capacity of about 200 milliliters. A milk jug has a capacity of about 1 gallon, which is the same as about 3.8 liters. Capacity is measured in units like cups, pints, quarts, gallons, milliliters, and liters. It's similar to volume but specifically refers to how much something CAN hold rather than how much space it takes up generally.` },
            { word: `leap year`,
              definition: `A year with 366 days instead of the usual 365. Happens every 4 years to keep the calendar synced with Earth's orbit.`,
              audioPrompt: `A leap year is a year with 366 days instead of the usual 365, {name}. They happen every 4 years because Earth's orbit around the sun takes about 365.25 days. The extra quarter day each year would mess up the calendar over time, so we add an extra day (February 29) every 4 years to keep things synced. Leap years are an example of unit conversion in action — we're matching our 365-day calendar to the real 365.25-day year.` },
          ],
        },

        // ── DRAG-IDENTIFY GAME ──
        {
          id: `l17-game`,
          type: `interactive`,
          format: `drag-identify`,
          guideText: `Time to sort conversions, {name}. I'll give you 12 unit pairs. Decide whether converting between them requires multiplying or dividing, and which system they belong to. Pay attention to the direction of conversion.`,
          buckets: [
            { id: `customary-mult`, label: `Customary, convert by MULTIPLYING (bigger → smaller)`, color: `#A78BFA` },
            { id: `customary-div`,  label: `Customary, convert by DIVIDING (smaller → bigger)`,   color: `#34D399` },
            { id: `metric-prefix`,  label: `Metric (move the decimal point)`,                     color: `#FBBF24` },
            { id: `time`,           label: `Time (universal — same everywhere)`,                  color: `#F87171` },
          ],
          items: [
            { id: `l17-g1`, label: `5 feet → ? inches`,
              matchPhrase: `Feet to inches: bigger to smaller. Multiply: 5 × 12 = 60 inches. Customary.`, correctMatch: `customary-mult` },
            { id: `l17-g2`, label: `48 inches → ? feet`,
              matchPhrase: `Inches to feet: smaller to bigger. Divide: 48 ÷ 12 = 4 feet. Customary.`, correctMatch: `customary-div` },
            { id: `l17-g3`, label: `3 meters → ? centimeters`,
              matchPhrase: `Meters to centimeters. Metric — just move the decimal 2 places right. 300 cm.`, correctMatch: `metric-prefix` },
            { id: `l17-g4`, label: `2 hours → ? minutes`,
              matchPhrase: `Hours to minutes. Time conversion: 2 × 60 = 120 minutes. Time is universal.`, correctMatch: `time` },
            { id: `l17-g5`, label: `3 pounds → ? ounces`,
              matchPhrase: `Pounds to ounces: bigger to smaller. Multiply: 3 × 16 = 48 ounces. Customary.`, correctMatch: `customary-mult` },
            { id: `l17-g6`, label: `4,500 grams → ? kilograms`,
              matchPhrase: `Grams to kilograms. Metric — move the decimal 3 places left. 4.5 kg.`, correctMatch: `metric-prefix` },
            { id: `l17-g7`, label: `360 seconds → ? minutes`,
              matchPhrase: `Seconds to minutes. Time: 360 ÷ 60 = 6 minutes. Universal.`, correctMatch: `time` },
            { id: `l17-g8`, label: `8 quarts → ? gallons`,
              matchPhrase: `Quarts to gallons: smaller to bigger. Divide: 8 ÷ 4 = 2 gallons. Customary.`, correctMatch: `customary-div` },
            { id: `l17-g9`, label: `2 yards → ? feet`,
              matchPhrase: `Yards to feet: bigger to smaller. Multiply: 2 × 3 = 6 feet. Customary.`, correctMatch: `customary-mult` },
            { id: `l17-g10`, label: `2,500 milliliters → ? liters`,
              matchPhrase: `Milliliters to liters. Metric — move the decimal 3 places left. 2.5 L.`, correctMatch: `metric-prefix` },
            { id: `l17-g11`, label: `72 inches → ? feet`,
              matchPhrase: `Inches to feet: smaller to bigger. Divide: 72 ÷ 12 = 6 feet. Customary.`, correctMatch: `customary-div` },
            { id: `l17-g12`, label: `4 days → ? hours`,
              matchPhrase: `Days to hours. Time: 4 × 24 = 96 hours. Universal.`, correctMatch: `time` },
          ],
        },

        {
          id: `l17-quiz`,
          type: `quiz`,
          guideText: `Quick check, {name}.`,
          questions: [
            { id: `l17-q1`, format: `multiple-choice`,
              question: `How many inches are in 4 feet?`,
              options: [`16`, `40`, `48`, `12`],
              correctIndex: 2,
              explanation: `4 feet × 12 inches per foot = 48 inches. Going from a bigger unit (feet) to a smaller unit (inches), multiply.` },
            { id: `l17-q2`, format: `multiple-choice`,
              question: `How many pounds are in 64 ounces?`,
              options: [`2`, `4`, `8`, `16`],
              correctIndex: 1,
              explanation: `64 ÷ 16 = 4 pounds. Going from a smaller unit (ounces) to a bigger unit (pounds), divide.` },
            { id: `l17-q3`, format: `multiple-choice`,
              question: `How many meters are in 7 kilometers?`,
              options: [`70`, `700`, `7,000`, `70,000`],
              correctIndex: 2,
              explanation: `1 km = 1,000 m. So 7 km = 7,000 m. Metric: just move the decimal 3 places right (or multiply by 1,000).` },
            { id: `l17-q4`, format: `true-false`,
              question: `True or false: When converting from a bigger unit to a smaller unit, you get more of them.`,
              correctAnswer: true,
              explanation: `True. Bigger unit → smaller unit means more of the smaller ones. 1 foot becomes 12 inches. 1 dollar becomes 100 cents. The smaller the unit, the more of them you need.` },
            { id: `l17-q5`, format: `multiple-choice`,
              question: `Which means "thousand" in the metric system?`,
              options: [`Centi`, `Milli`, `Kilo`, `Deca`],
              correctIndex: 2,
              explanation: `Kilo means thousand. Kilogram = 1,000 grams. Kilometer = 1,000 meters. Kiloliter = 1,000 liters.` },
            { id: `l17-q6`, format: `multiple-choice`,
              question: `Convert: 3 hours = ? minutes`,
              options: [`30`, `60`, `120`, `180`],
              correctIndex: 3,
              explanation: `3 hours × 60 minutes per hour = 180 minutes.` },
            { id: `l17-q7`, format: `multiple-choice`,
              question: `Convert: 1,500 mL = ? L`,
              options: [`0.15`, `1.5`, `15`, `150`],
              correctIndex: 1,
              explanation: `1,000 mL = 1 L. So 1,500 mL = 1.5 L. Move the decimal 3 places left.` },
            { id: `l17-q8`, format: `multiple-choice`,
              question: `Why does the metric system use powers of 10?`,
              options: [
                `Random choice`,
                `It matches our number system (place value), making conversions just decimal point moves`,
                `Tradition`,
                `It doesn't`,
              ],
              correctIndex: 1,
              explanation: `The metric system uses powers of 10 because our number system is base 10. This means converting between metric units just requires moving decimal points — no multiplication or division procedures needed.` },
          ],
        },

        {
          id: `l17-reflection`,
          type: `reflection`,
          guideText: `Pick a prompt, {name}.`,
          prompts: [
            { id: `r1`, text: `Which conversion is easiest for you to remember? Which is hardest?` },
            { id: `r2`, text: `Why is the metric system easier to convert in than the customary system? Try to explain in your own words.` },
            { id: `r3`, text: `If you were redesigning measurement from scratch, would you use metric or customary? Why?` },
            { id: `r4`, text: `Find three different units of measurement on labels in your kitchen. What are they?` },
          ],
        },

        {
          id: `l17-realworld`,
          type: `real-world`,
          guideText: `Unit conversion shows up constantly in real life. Cooking — recipes from different countries use different units. Travel — speed limits and distances change between US and Canada/Mexico/Europe. Health — your weight at the doctor might be in pounds or kilograms. Construction — measuring boards needs converting between inches and feet. Sports — soccer fields are measured in meters, football fields in yards. The world isn't unified, so knowing how to convert lets you understand any measurement you encounter.`,
          familyAdventure: `Together, find 5 items in your house with measurements on their labels. Convert each one to a different unit. For example: a water bottle's volume in milliliters → convert to liters or fluid ounces. A bag of rice in pounds → convert to ounces or kilograms. Real conversions with real things.`,
          creativePrompt: {
            intro: `Imagine you're explaining to a friend visiting from Europe (where they only use metric) how to navigate the US system. Write your explanation.`,
            floor: `Write at least 5 sentences.`,
            stretch: `Write 8-10 sentences. Include the most common conversions they'll need.`,
            open: `Write as much as you want.`,
            frames: [
              `The US mostly uses ___.`,
              `For length, they'll see ___.`,
              `For weight, ___.`,
              `For volume (like drinks), ___.`,
              `The trickiest thing to remember is ___.`,
            ],
          },
        },

        {
          id: `l17-celebration`,
          type: `celebration`,
          message: `Solid lesson, {name}. You can now convert between customary AND metric units, recognize the direction of conversion (bigger to smaller = multiply, smaller to bigger = divide), and you understand why metric is so much easier (powers of 10). Next lesson, we plot points on a grid — the coordinate plane. — Remi.`,
          badge: `unit-converter`,
          badgeName: `Unit Converter`,
          xpEarned: 75,
        },
      ],
    },
  ],
};

export default MATH_UE_L17;
