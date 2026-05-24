// ─────────────────────────────────────────────────────────────────────────────
// MATH UE  |  L10 — Decimals: Tenths and Hundredths
// Age band : upper_explorers (9–10)   Guide: remi
// Standards: CCSS 4.NF.C.5, 4.NF.C.6
// CALIBRATED: Math UE Spec v2
// Game format: drag-identify (Match decimals to their fraction equivalents)
// Visual model: place-value-blocks + fraction-bar
// Misconceptions DIRECTLY addressed:
//   - "Longer decimals are bigger" (0.42 > 0.5? NO — compare place values)
//   - "Decimals and fractions are different things" (they're the SAME)
//   - "Decimal points are mysterious" (they just separate wholes from parts)
// ─────────────────────────────────────────────────────────────────────────────

const MATH_UE_L10 = {
  ageBand: `upper_explorers`,
  subjectId: `math`,
  guide: `remi`,

  lessons: [
    {
      id: `math-9-10-10`,
      title: `Decimals: Tenths and Hundredths`,
      duration: 22,
      xpReward: 75,
      badge: `decimal-decoder`,
      badgeName: `Decimal Decoder`,

      screens: [
        {
          id: `l10-welcome`,
          type: `welcome`,
          guideText: `Welcome back, {name}. Today we learn decimals — those numbers with a little dot in them, like 0.5 or 2.75. Here's the key thing: decimals aren't a brand-new kind of number. They're just fractions written in a different way. By the end of today, you'll see decimals and fractions as the same thing, just dressed up differently.`,
          headline: `Decimals: Tenths and Hundredths`,
          subtitle: `Fractions written a different way`,
          visual: `/ue-assets/math/l10-welcome.webp`,
        },

        {
          id: `l10-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Decimals Are Just Fractions With Denominators of 10, 100, 1000...`,
          paragraphs: [
            `Look at 0.7. That decimal means "seven-tenths" — which is the same as the fraction 7/10. They're equal. 0.7 = 7/10. Same exact quantity.`,
            `What about 0.25? That means "twenty-five hundredths" — same as 25/100. Or 0.125 means "one hundred twenty-five thousandths" — same as 125/1000.`,
            `Decimals are just a SHORTHAND for fractions whose denominators are powers of 10 (10, 100, 1000, etc.). The decimal point separates the whole-number part from the fractional part. Each place to the right of the decimal point is a smaller denominator: tenths, then hundredths, then thousandths, and so on.`,
          ],
          image: `/ue-assets/math/l10-s1-decimals-fractions.webp`,
          imageCaption: `0.7 = 7/10. 0.25 = 25/100. Same number, different clothes.`,
          vocab: [
            { word: `decimal`,
              definition: `A way to write fractions that have denominators of 10, 100, 1000, etc. Uses a decimal point to separate whole parts from fractional parts.`,
              audioPrompt: `A decimal is a way to write fractions with denominators of 10, 100, 1000, and so on, {name}. 0.5 is the decimal way to write 5/10. 0.25 is the decimal way to write 25/100. The decimal point separates the whole numbers from the fractional parts. Decimals are just another way to write fractions — they're not a separate kind of number. Understanding this connection makes decimals way less mysterious.` },
            { word: `decimal point`,
              definition: `The dot in a decimal number that separates the whole-number part from the fractional part.`,
              audioPrompt: `The decimal point is the little dot that separates the whole-number part of a number from the fractional part, {name}. In 3.7, the 3 is the whole part and the 7 is seven-tenths. In 0.45, the 0 says "no wholes" and the 45 is forty-five hundredths. The decimal point is the dividing line. Numbers to the left are whole or more. Numbers to the right are parts of a whole.` },
          ],
        },

        {
          id: `l10-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Decimal Place Values: Going to the Right`,
          paragraphs: [
            `Remember place values from L01? Each place to the LEFT was 10 times the place to its right. Going RIGHT, each place is 10 times SMALLER. Ones → Tens → Hundreds going left. Going right, we cross the decimal point: ones → tenths → hundredths → thousandths. Each step right divides the place value by 10.`,
            `So in the number 3.47, the 3 is in the ONES place (worth 3). The 4 is in the TENTHS place (worth 4 tenths, or 4/10). The 7 is in the HUNDREDTHS place (worth 7 hundredths, or 7/100). Add it all up: 3 + 4/10 + 7/100 = 3 and 47/100, or 3.47.`,
            `This is the same place value structure as whole numbers — just continuing past the ones place into smaller and smaller fractions. Decimals don't break the pattern of place value. They CONTINUE it.`,
          ],
          image: `/ue-assets/math/l10-s2-places.webp`,
          imageCaption: `Ones → tenths → hundredths → thousandths. Place value never stops.`,
          vocab: [
            { word: `tenths`,
              definition: `The first decimal place to the right of the decimal point. Each tenth is 1/10.`,
              audioPrompt: `Tenths is the first decimal place to the right of the decimal point, {name}. In 0.7, the 7 is in the tenths place — meaning 7 tenths, or 7/10. Tenths is just like "ones" but ten times smaller. Each whole 1 can be split into 10 tenths. Tenths are the bridge between whole numbers and smaller fractional parts.` },
            { word: `hundredths`,
              definition: `The second decimal place. Each hundredth is 1/100.`,
              audioPrompt: `Hundredths is the second decimal place to the right of the decimal point, {name}. In 0.25, the 5 is in the hundredths place — meaning 5 hundredths, or 5/100. Hundredths are ten times smaller than tenths. Each tenth can be split into 10 hundredths. So 1 whole = 10 tenths = 100 hundredths. Money is the most common place you see hundredths in real life — cents are hundredths of a dollar.` },
          ],
        },

        {
          id: `l10-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `The Longer-Is-Larger Trap`,
          paragraphs: [
            `Here's a trap that catches almost everyone. Which is bigger: 0.5 or 0.42?`,
            `Your whole-number brain probably says "0.42 is bigger because it has more digits!" Don't trust it. That's the longer-is-larger trap. It works for whole numbers (because more digits means bigger place values), but it BREAKS for decimals.`,
            `Here's why. 0.5 is FIVE tenths. 0.42 is FOUR tenths plus 2 hundredths. Just looking at the tenths place — 5 > 4. So 0.5 is bigger, even though it has fewer digits. The decimal point doesn't care about how many digits come after it. What matters is the VALUE of those digits in their places.`,
            `To compare decimals safely: line them up by their decimal points. Compare place by place from the LEFT. Stop at the first place where they differ. The number with the bigger digit there is the bigger number. Same rule as comparing whole numbers from L01.`,
          ],
          image: `/ue-assets/math/l10-s3-longer-larger.webp`,
          imageCaption: `0.5 > 0.42. More digits doesn't mean bigger. Place value rules.`,
          vocab: [
            { word: `comparing decimals`,
              definition: `To compare decimals, line them up by the decimal point and compare digits from left to right.`,
              audioPrompt: `To compare decimals, {name}, line them up by their decimal points and look at digits from left to right. Stop at the first place where they're different. The one with the bigger digit there is the bigger decimal. Don't count digits — that's a trap. 0.5 is bigger than 0.42 because 5 tenths is more than 4 tenths, even though 0.42 has more digits total. Lining up by the decimal point is the safe approach.` },
            { word: `place value`,
              definition: `The value a digit has based on its position in a number. In decimals, place values go tenths, hundredths, thousandths going right.`,
              audioPrompt: `Place value is the value a digit has based on its position in a number, {name}. In 0.5, the 5 is worth five tenths because it's in the tenths place. In 0.42, the 4 is worth four tenths and the 2 is worth two hundredths. Place value is why comparing decimals works — you compare by position from the left, not by digit count. 0.5 beats 0.42 because 5 tenths beats 4 tenths, regardless of how many digits follow.` },
          ],
        },

        {
          id: `l10-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Converting Between Decimals and Fractions`,
          paragraphs: [
            `Since decimals and fractions are the same thing, you can always convert between them. The rules are simple.`,
            `Decimal to fraction: count the decimal places. That's the number of zeros in the denominator. The digits after the decimal point become the numerator. So 0.3 has 1 decimal place → denominator 10 → fraction 3/10. 0.47 has 2 decimal places → denominator 100 → fraction 47/100. 0.125 has 3 decimal places → denominator 1000 → fraction 125/1000.`,
            `Fraction to decimal (for fractions with denominators 10, 100, 1000): write the numerator with the right number of decimal places. 7/10 = 0.7 (one decimal place because of the 10). 25/100 = 0.25 (two decimal places). For fractions WITHOUT denominators of 10, 100, etc. (like 1/3 or 2/7), we'd need division — but those can have repeating decimals. We'll keep it simple in this lesson and stick to the clean conversions.`,
          ],
          image: `/ue-assets/math/l10-s4-convert.webp`,
          imageCaption: `0.3 = 3/10. 0.47 = 47/100. Conversion is just place value.`,
          vocab: [
            { word: `equivalent decimal`,
              definition: `A decimal that represents the same value, possibly with extra zeros that don't change the value. 0.5 = 0.50 = 0.500.`,
              audioPrompt: `Equivalent decimals are decimals that represent the same value, {name}. 0.5 and 0.50 and 0.500 are all equivalent — they all equal one-half. Adding trailing zeros after the decimal doesn't change the value (5 tenths = 50 hundredths = 500 thousandths, all the same amount). This is useful when comparing decimals — you can add trailing zeros to make them the same length without changing their values.` },
            { word: `simplify`,
              definition: `To write a fraction in its lowest terms by dividing numerator and denominator by their greatest common factor.`,
              audioPrompt: `To simplify a fraction means to rewrite it in lowest terms, {name}. 25/100 simplifies to 1/4 because both 25 and 100 are divisible by 25. 50/100 simplifies to 1/2 because both are divisible by 50. Simplifying doesn't change the value — 25/100 and 1/4 are equal. It just makes the fraction easier to read. When you convert a decimal to a fraction, simplifying the result gives the clearest form.` },
          ],
        },

        // ── DRAG-IDENTIFY GAME — Match Decimals to Fractions ──────────────
        {
          id: `l10-game`,
          type: `interactive`,
          format: `drag-identify`,
          guideText: `Time to match, {name}. I'll give you decimals, and you'll sort them by their equivalent fractions. This locks in the key idea — decimals and fractions are the same. Same quantity, different clothes.`,
          buckets: [
            { id: `tenths`,        label: `Equals X/10 (tenths)`,        color: `#34D399` },
            { id: `hundredths`,    label: `Equals X/100 (hundredths)`,   color: `#A78BFA` },
            { id: `simplified-fraction`, label: `Equals a simplified fraction (like 1/2 or 1/4)`, color: `#FBBF24` },
            { id: `more-than-one`, label: `Greater than 1 (improper)`,   color: `#F87171` },
          ],
          items: [
            { id: `l10-g1`, label: `0.7`,
              matchPhrase: `0.7 equals 7/10. One decimal place = tenths.`, correctMatch: `tenths` },
            { id: `l10-g2`, label: `0.25`,
              matchPhrase: `0.25 equals 25/100, which simplifies to 1/4. So it equals a simplified fraction.`, correctMatch: `simplified-fraction` },
            { id: `l10-g3`, label: `0.43`,
              matchPhrase: `0.43 equals 43/100 — two decimal places, so hundredths. (43 and 100 share no common factor, so it can't simplify.)`, correctMatch: `hundredths` },
            { id: `l10-g4`, label: `1.5`,
              matchPhrase: `1.5 is greater than 1 — it equals 15/10 or 1 and 1/2. Improper as a fraction.`, correctMatch: `more-than-one` },
            { id: `l10-g5`, label: `0.5`,
              matchPhrase: `0.5 equals 5/10, which simplifies to 1/2. So it's a simplified fraction.`, correctMatch: `simplified-fraction` },
            { id: `l10-g6`, label: `0.3`,
              matchPhrase: `0.3 equals 3/10. Tenths.`, correctMatch: `tenths` },
            { id: `l10-g7`, label: `2.0`,
              matchPhrase: `2.0 is greater than 1. It just equals 2 — a whole number with no fractional part.`, correctMatch: `more-than-one` },
            { id: `l10-g8`, label: `0.75`,
              matchPhrase: `0.75 equals 75/100, which simplifies to 3/4. A simplified fraction.`, correctMatch: `simplified-fraction` },
            { id: `l10-g9`, label: `0.9`,
              matchPhrase: `0.9 equals 9/10. Tenths.`, correctMatch: `tenths` },
            { id: `l10-g10`, label: `0.07`,
              matchPhrase: `0.07 equals 7/100 — two decimal places, so hundredths. (7 and 100 share no common factor.)`, correctMatch: `hundredths` },
          ],
        },

        {
          id: `l10-quiz`,
          type: `quiz`,
          guideText: `Quick check, {name}.`,
          questions: [
            { id: `l10-q1`, format: `multiple-choice`,
              question: `What fraction is 0.6 equal to?`,
              options: [`6/100`, `6/10`, `60/10`, `1/6`],
              correctIndex: 1,
              explanation: `0.6 has one decimal place, so the denominator is 10. The 6 is in the tenths place. So 0.6 = 6/10.` },
            { id: `l10-q2`, format: `multiple-choice`,
              question: `What decimal is the same as 35/100?`,
              options: [`0.035`, `0.35`, `3.5`, `35`],
              correctIndex: 1,
              explanation: `35/100 has 100 in the denominator, so it's hundredths — two decimal places. The numerator 35 goes in those two places: 0.35.` },
            { id: `l10-q3`, format: `multiple-choice`,
              question: `Which is bigger: 0.5 or 0.42?`,
              options: [
                `0.42 — because it has more digits`,
                `0.5 — because 5 tenths is more than 4 tenths`,
                `They're equal`,
                `Can't tell`,
              ],
              correctIndex: 1,
              explanation: `0.5 is bigger. The tenths place is 5 vs 4. Once you find a difference in the tenths place, you stop — that's enough. More digits doesn't mean bigger.` },
            { id: `l10-q4`, format: `true-false`,
              question: `True or false: 0.5 and 0.50 are equal.`,
              correctAnswer: true,
              explanation: `True. Adding trailing zeros after the decimal doesn't change the value. 0.5 = 0.50 = 0.500 = half. They're all the same number.` },
            { id: `l10-q5`, format: `multiple-choice`,
              question: `In the number 4.27, what does the 7 mean?`,
              options: [
                `7 ones`,
                `7 tenths`,
                `7 hundredths`,
                `7 thousandths`,
              ],
              correctIndex: 2,
              explanation: `The 7 is in the hundredths place (second to the right of the decimal point). So it's 7/100.` },
            { id: `l10-q6`, format: `multiple-choice`,
              question: `Which decimal equals 1/4?`,
              options: [`0.4`, `0.14`, `0.25`, `0.40`],
              correctIndex: 2,
              explanation: `1/4 equals 0.25. To see why: 1/4 = 25/100 (multiply top and bottom by 25). 25/100 = 0.25.` },
            { id: `l10-q7`, format: `multiple-choice`,
              question: `Why does "longer is larger" sometimes fail for decimals?`,
              options: [
                `It always works`,
                `Because the value comes from place value, not digit count. 0.5 has fewer digits than 0.42, but 5 tenths > 4 tenths.`,
                `Math is broken`,
                `Decimals are confusing`,
              ],
              correctIndex: 1,
              explanation: `Place value, not digit count, determines decimal value. You have to compare from the left, place by place. Don't just count digits.` },
            { id: `l10-q8`, format: `multiple-choice`,
              question: `What is 0.40 simplified as a fraction?`,
              options: [`40/10`, `4/100`, `2/5`, `1/4`],
              correctIndex: 2,
              explanation: `0.40 = 40/100. Divide both by 20: 2/5. So 0.40 = 2/5 in simplest form.` },
          ],
        },

        {
          id: `l10-reflection`,
          type: `reflection`,
          guideText: `Pick a prompt, {name}.`,
          prompts: [
            { id: `r1`, text: `Why is 0.5 bigger than 0.42? Try to explain in your own words.` },
            { id: `r2`, text: `Where in real life do you see decimals? (Hint: money, measurements, sports stats.)` },
            { id: `r3`, text: `Which is easier for you — fractions or decimals? Why?` },
            { id: `r4`, text: `If you had to teach a friend that decimals and fractions are the same thing, what example would you use?` },
          ],
        },

        {
          id: `l10-realworld`,
          type: `real-world`,
          guideText: `Decimals are everywhere in real life — way more visible than fractions in most situations. Money — $4.75 means 4 dollars and 75 hundredths of a dollar. Measurements — 1.5 meters, 2.25 inches, 98.6 degrees. Sports stats — batting averages like .305, free-throw percentages like .882. Almost any precise number you see uses decimals. Knowing decimals well means you can understand way more of the numbers around you.`,
          familyAdventure: `Together, find five decimal numbers in your house — receipts, measurements, sports scores, thermometers, anything. For each, convert it to a fraction. Bonus: which has more decimal numbers visible — the kitchen or another room? Why might that be?`,
          creativePrompt: {
            intro: `Imagine you're explaining to a friend why 0.5 is bigger than 0.42 even though it has fewer digits. Write your explanation with a clear example.`,
            floor: `Write at least 5 sentences.`,
            stretch: `Write 8-10 sentences. Show why the misconception is so tempting — and how to fix it.`,
            open: `Write as much as you want.`,
            frames: [
              `The trap is ___.`,
              `It seems true because ___.`,
              `But here's why it's wrong: ___.`,
              `My example to prove it: ___.`,
              `The right way to compare decimals is ___.`,
            ],
          },
        },

        {
          id: `l10-celebration`,
          type: `celebration`,
          message: `Real progress, {name}. You now see decimals as just another way to write fractions, you understand decimal place values (tenths and hundredths), and you can avoid the longer-is-larger trap. Most adults still get tripped up by 0.5 vs 0.42. You don't. Next lesson, we add and subtract decimals. — Remi.`,
          badge: `decimal-decoder`,
          badgeName: `Decimal Decoder`,
          xpEarned: 75,
        },
      ],
    },
  ],
};

export default MATH_UE_L10;
