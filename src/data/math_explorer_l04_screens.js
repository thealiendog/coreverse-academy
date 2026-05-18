// ─────────────────────────────────────────────────────────────────────────────
// MATH  |  L04 — Why Place Value Matters
// Age band : explorers (6–8)   Guide: remi
// Standards: CCSS 2.NBT.A.4 (comparing numbers using place value)
// ─────────────────────────────────────────────────────────────────────────────

const MATH_L04 = {
  ageBand:   `explorers`,
  subjectId: `math`,
  guide:     `remi`,

  lessons: [
    {
      id:        `math-6-8-04`,
      title:     `Why Place Value Matters`,
      duration:  12,
      xpReward:  50,
      badge:     `place-value-master`,
      badgeName: `Place Value Master`,

      screens: [

        {
          id: `l04-welcome`,
          type: `welcome`,
          guideText: `Hey {name}, Remi here. You've learned place value, bundling, and expanded form. Today let's STEP BACK and ask — why does ANY of this matter? Spoiler: place value is one of the most useful ideas EVER. You'll see it in money, time, scores, even space rockets. Once you understand WHY it matters, you'll never forget HOW it works. Let's go.`,
          headline: `Why Place Value Matters`,
          subtitle: `The "so what" lesson — and why this idea changes everything`,
          visual: `/explorer-assets/math/l04-welcome.webp`,
        },

        {
          id: `l04-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Place Value Is EVERYWHERE`,
          paragraphs: [
            `Take a look around the world. Place value is HIDING in plain sight, everywhere you look.`,
            `Your AGE is a place value number (you might be 7 or 8 — that's 7 ones, or 8 ones). The TIME on a clock — 12:45 — uses place value (12 hours and 45 minutes, each with their own place rules). PRICES at stores — $4.99 means 4 dollars + 9 dimes + 9 pennies. SCORES in a video game — 12,840 points uses place value all the way to ten-thousands. ADDRESSES — your house number, your zip code, all place value. PHONE NUMBERS, AGES, weights, distances, dates, sports scores — ALL place value. You've been using it your whole life, even before you knew its name.`,
          ],
          image: `/explorer-assets/math/l04-s1-everywhere.webp`,
          imageCaption: `Place value is EVERYWHERE: money, time, scores, ages, prices, addresses. You use it daily without knowing.`,
          vocab: [
            { word: `everywhere`,     definition: `In MANY places. Place value is EVERYWHERE in daily life — once you see it, you can't unsee it.`,
              audioPrompt: `Everywhere, {name}, means in many places. Place value is everywhere in daily life. Your age. The clock. Money. Sports scores. Phone numbers. Addresses. Once you see it, you can't unsee it. It's the invisible math running through your whole day. Cool to notice, right?` },
            { word: `daily`,          definition: `EVERY DAY. We use place value DAILY without thinking about it.`,
              audioPrompt: `Daily, {name}, means every day. We use place value daily without thinking about it. Reading time on a clock. Counting money. Checking the temperature. Looking at a price tag. Reading a page number. All place value. It's so common we forget it's there. But it's the silent helper everywhere.` },
            { word: `hiding`,         definition: `Not obvious at FIRST. Place value is HIDING in numbers all around you.`,
              audioPrompt: `Hiding, {name}, means not obvious at first. Place value is hiding in numbers all around you. You see numbers everywhere — but you might not notice the place value behind them. Now that you know about it, look around. You'll spot it on every clock, every receipt, every road sign. Hiding in plain sight.` },
          ],
        },

        {
          id: `l04-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `MONEY: Place Value at Work`,
          paragraphs: [
            `Look at any amount of MONEY. Place value is doing the work.`,
            `$247.85. Let's break it apart. The 2 is in the HUNDREDS place — two hundred dollars. The 4 is in the TENS — forty dollars. The 7 is in the ONES — seven dollars. Then the decimal point. After it, the 8 is in the TENTHS (dimes) — 80 cents. The 5 is in the HUNDREDTHS (pennies) — 5 cents. Total: $247.85 = 200 + 40 + 7 + 0.80 + 0.05. Money is just place value in dollar form. Knowing place value means you can READ any price, count change, save up for things. This is one of the most practical math skills you'll EVER use. Every store, every bank, every paycheck uses it.`,
          ],
          image: `/explorer-assets/math/l04-s2-money.webp`,
          imageCaption: `$247.85 = 200 + 40 + 7 + 0.80 + 0.05. Money is place value in dollar form. Used every day.`,
          vocab: [
            { word: `money`,          definition: `What we USE to buy things. MONEY uses place value — dollars + dimes + pennies.`,
              audioPrompt: `Money, {name}, is what we use to buy things. Money uses place value. Dollars have hundreds, tens, ones. After the decimal point, dimes are tenths and pennies are hundredths. Knowing place value means you understand prices, change, savings, and budgets. It's one of the most useful applications of place value in real life.` },
            { word: `decimal point`,  definition: `The DOT between dollars and cents. The DECIMAL POINT separates whole from parts.`,
              audioPrompt: `A decimal point, {name}, is the dot between dollars and cents. The decimal point separates whole from parts. To the left of the dot are whole dollars. To the right are parts of a dollar — dimes and pennies. The decimal point is how we write numbers smaller than one. You'll learn way more about decimals later. For now, just know the dot matters.` },
            { word: `practical`,      definition: `USEFUL in real life. Knowing place value with money is PRACTICAL — you'll use it forever.`,
              audioPrompt: `Practical, {name}, means useful in real life. Knowing place value with money is practical. You'll use it forever. Buying snacks. Checking change. Saving allowance. Understanding prices. Practical math is the math that helps you live your life. Place value with money is the most practical math you'll learn this year.` },
          ],
        },

        {
          id: `l04-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `COMPARING Numbers`,
          paragraphs: [
            `Here's a SKILL that comes straight from place value — COMPARING which number is BIGGER.`,
            `Look at 342 and 234. Both have the same three digits! But are they equal? NO! 342 has 3 in the HUNDREDS — that's 300. 234 has only 2 in the hundreds — only 200. So 342 is BIGGER. Place value lets us COMPARE numbers by checking the BIGGEST place first. If the hundreds are different, you know which is bigger. If hundreds are the same, check tens. If tens are the same, check ones. This trick works for ANY size numbers. Compare 9,847 to 9,748. Same thousands (9). Same hundreds (8). The tens differ — 4 vs 7. So 9,748 has more tens. Bigger! Place value = comparing superpower.`,
          ],
          image: `/explorer-assets/math/l04-s3-comparing.webp`,
          imageCaption: `342 vs 234. Same digits, different positions. Place value tells you 342 is bigger (3 hundreds vs 2).`,
          vocab: [
            { word: `compare`,        definition: `To CHECK which is bigger or smaller. COMPARE numbers using place value — check biggest place first.`,
              audioPrompt: `To compare, {name}, is to check which is bigger or smaller. Compare numbers using place value. Check the biggest place first. If they're different, that decides it. If they're the same, move to the next place. This system makes comparing easy — even for huge numbers.` },
            { word: `biggest place`,  definition: `The LEFTMOST digit. The BIGGEST PLACE has the most weight in comparing.`,
              audioPrompt: `Biggest place, {name}, is the leftmost digit. The biggest place has the most weight in comparing. The hundreds beat the tens. The thousands beat the hundreds. Always check the leftmost different digit first. That decides which number is bigger. Place value gives you a quick way to compare any two numbers.` },
            { word: `superpower`,     definition: `An AMAZING ability. Place value is a comparing SUPERPOWER — you can rank any numbers.`,
              audioPrompt: `A superpower, {name}, is an amazing ability. Place value is a comparing superpower. With it, you can rank any two numbers, no matter how big. You can list scores from highest to lowest. Sort prices. Figure out who's older. Knowing place value gives you this power instantly.` },
          ],
        },

        {
          id: `l04-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Foundation for Everything Else`,
          paragraphs: [
            `Here's the BIG one. Place value isn't just useful by itself — it's the FOUNDATION for EVERYTHING else in math.`,
            `When you ADD 234 + 542, you'll add the ONES first (4 + 2), then the TENS (30 + 40), then the HUNDREDS (200 + 500). That's place value at work. When you SUBTRACT 528 - 312, you'll subtract place by place. When you MULTIPLY, when you DIVIDE, when you do decimals, fractions, percent, algebra — place value is always working underneath. Without it, none of the rest of math would make sense. Think of place value as the FOUNDATION of a building. Everything else stacks on top. Strong foundation = strong math. Weak foundation = math gets confusing FAST. That's why we spent the last few lessons on this. It MATTERS.`,
          ],
          image: `/explorer-assets/math/l04-s4-addition-ready.webp`,
          imageCaption: `Place value = the FOUNDATION. Addition, subtraction, multiplication, fractions — all stand on top of it.`,
          vocab: [
            { word: `foundation`,     definition: `The BASE everything stands on. Place value is the FOUNDATION of all math.`,
              audioPrompt: `A foundation, {name}, is the base everything stands on. Place value is the foundation of all math. Like the foundation of a building. Strong foundation, strong building. Weak foundation, problems. Math works the same way. Get place value solid, and everything else gets easier. Skip it, and you'll struggle.` },
            { word: `stacks on top`,  definition: `Built UP on. Other math skills STACK ON TOP of place value.`,
              audioPrompt: `Stacks on top, {name}, means built up on. Other math skills stack on top of place value. Addition stacks on top. Subtraction stacks. Multiplication stacks. Decimals, fractions, algebra — all stack on top. You can't reach the higher floors without a strong ground floor. That's place value's job.` },
            { word: `matters`,        definition: `Is IMPORTANT. Place value MATTERS — that's why we've spent time on it.`,
              audioPrompt: `To matter, {name}, is to be important. Place value matters. That's why we've spent time on it. It might feel basic compared to other math. But it's the most important basic. Skip understanding it, and bigger math gets confusing. Master it, and bigger math gets easy. Worth the time.` },
          ],
        },

        {
          id: `l04-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `When Place Value Goes WRONG`,
          paragraphs: [
            `Watch what happens when someone gets place value WRONG. It causes BIG problems.`,
            `Say someone writes the number 50 as 500. That's TEN TIMES too big. If it's a price — they'd charge you $500 instead of $50. Yikes! Or imagine someone misreads 1,000 as 100 — they'd think they have ten times LESS money than they do. Major mix-up. Spaceships, banks, hospitals — they ALL depend on getting place value right. In 1999, a space probe to Mars crashed because of a units mistake (kind of like a place value mistake). Cost $125 million dollars. Place value matters at every level — from your homework to billion-dollar projects. Getting it right keeps things ACCURATE. Getting it wrong... can be expensive.`,
          ],
          image: `/explorer-assets/math/l04-s5-mistakes.webp`,
          imageCaption: `50 vs 500: 10x difference. Place value mistakes cause real problems — money, science, even spaceships.`,
          vocab: [
            { word: `accurate`,       definition: `EXACTLY RIGHT. Place value keeps numbers ACCURATE — no slipping into wrong values.`,
              audioPrompt: `Accurate, {name}, means exactly right. Place value keeps numbers accurate. If you mess up place value, your number is suddenly ten times or a hundred times off. Doctors need accurate doses. Banks need accurate money. Pilots need accurate altitudes. Accurate matters in real life.` },
            { word: `mistake`,        definition: `An ERROR. Place value MISTAKES make numbers ten or hundred times off.`,
              audioPrompt: `A mistake, {name}, is an error. Place value mistakes make numbers ten or hundred times off. Writing 50 as 500 is a place value mistake — you put the digit in the wrong column. It changes the meaning entirely. Catching place value mistakes is one of math's most important skills. Always double-check.` },
            { word: `expensive`,      definition: `COSTING a lot. Place value mistakes can be EXPENSIVE — in money and time.`,
              audioPrompt: `Expensive, {name}, means costing a lot. Place value mistakes can be expensive — in money and time. The Mars probe that crashed cost over one hundred million dollars. Banks losing track of place value lose huge amounts. Even small mistakes pile up. Better to take a moment, check, get it right.` },
          ],
        },

        {
          id: `l04-mag-6`,
          type: `magazine`,
          section: 6,
          headline: `Place Value = SUPERPOWER`,
          paragraphs: [
            `Here's the truth, {name}. Place value is one of the GREATEST IDEAS humans ever had.`,
            `Without it, math beyond simple counting would be IMPOSSIBLE. With it, you can write any number, compare any amounts, do any operation. Civilizations that didn't have place value (like Ancient Rome with their Roman numerals) had a HARD time with math. They couldn't easily add big numbers, do long multiplication, or work with money the way we do. Place value CHANGED THE WORLD. And now YOU have it. You're carrying around one of humanity's smartest tools. Use it well. Be confident with numbers. They're not magic — they're STRUCTURED. You know the structure now. You've got the superpower. Time to use it.`,
          ],
          image: `/explorer-assets/math/l04-s6-superpower.webp`,
          imageCaption: `Place value = superpower. Humanity's greatest idea. You have it now. Use it confidently.`,
          vocab: [
            { word: `greatest ideas`, definition: `The BEST inventions. Place value is one of humanity's GREATEST IDEAS.`,
              audioPrompt: `Greatest ideas, {name}, are the best inventions. Place value is one of humanity's greatest ideas. It changed how humans handle numbers forever. Civilizations that learned it leaped ahead in math, science, trade, and engineering. It's right up there with the wheel and writing in importance. And you've got it now.` },
            { word: `confident`,      definition: `SURE of yourself. Be CONFIDENT with numbers now — you know how they work.`,
              audioPrompt: `Confident, {name}, means sure of yourself. Be confident with numbers now. You know how they work. You see the structure. You can break them apart, compare them, understand them. That confidence makes math less scary. Numbers stop feeling like mysteries. They start feeling like tools.` },
            { word: `tool`,           definition: `Something USEFUL. Place value is a TOOL you'll use the rest of your life.`,
              audioPrompt: `A tool, {name}, is something useful. Place value is a tool you'll use the rest of your life. Buying things. Reading time. Doing math at school. Working someday. Tracking sports scores. Numbers are everywhere — and now you have the tool to handle them all. Pretty good toolkit for a 7- or 8-year-old.` },
          ],
        },

        {
          id: `l04-game`,
          type: `interactive`,
          format: `drag-match`,
          guideText: `Let's see what you remember, {name}.`,
          buckets: [
            { id: `fact`, label: `✅ Yes, that's true!`, color: `#34D399` },
            { id: `myth`, label: `❌ No way!`,         color: `#F87171` },
          ],
          items: [
            { id: `l04-g1`, image: `l04-game-1.webp`, label: `Place value is EVERYWHERE in daily life — money, time, scores, ages, addresses.`,
              matchPhrase: `Yes! Once you see it, you can't unsee it. Place value is hiding in plain sight all around you. The world runs on it.`,
              correctMatch: `fact` },
            { id: `l04-g2`, image: `l04-game-2.webp`, label: `Place value is the FOUNDATION of all math — addition, subtraction, multiplication all stand on top.`,
              matchPhrase: `True! It's the ground floor. Strong place value = strong math. Without it, the rest of math falls apart.`,
              correctMatch: `fact` },
            { id: `l04-g3`, image: `l04-game-3.webp`, label: `Place value is USELESS — you can do all math just fine without understanding it.`,
              matchPhrase: `Not at all! Place value is essential. Without it, all multi-digit math gets confusing. It's the foundation everything stacks on.`,
              correctMatch: `myth` },
            { id: `l04-g4`, image: `l04-game-4.webp`, label: `Place value is ONLY used at school — it never shows up in real life.`,
              matchPhrase: `Definitely not! Place value is everywhere in real life. Money. Clocks. Sports. Phones. Stores. You use it constantly without thinking about it.`,
              correctMatch: `myth` },
          ],
        },

        {
          id: `l04-quiz`,
          type: `quiz`,
          guideText: `Let's see what you remember, {name}.`,
          questions: [
            { id: `l04-q1`, format: `multiple-choice`,
              question: `Where is place value USED in real life?`,
              options: [`Nowhere`, `EVERYWHERE — money, time, scores, ages, addresses, phone numbers`, `Only in textbooks`, `Just on weekends`],
              correctIndex: 1,
              explanation: `Everywhere! Place value is hiding in money, time, scores, ages, addresses, phone numbers, prices, and more. You use it daily without thinking about it.` },
            { id: `l04-q2`, format: `multiple-choice`,
              question: `Which number is BIGGER: 342 or 234?`,
              options: [`Same`, `342 — because 3 is in the hundreds place (300), beating 234's 2 in hundreds (200)`, `234`, `Can't tell`],
              correctIndex: 1,
              explanation: `342 is bigger. Both have the same digits, but 342 has 3 in the hundreds place. 300 beats 200. Always check the leftmost different digit when comparing.` },
            { id: `l04-q3`, format: `multiple-choice`,
              question: `Why is place value the FOUNDATION of math?`,
              options: [`It's not`, `All other math (addition, subtraction, fractions) stacks ON TOP of place value`, `Adults said so`, `Random`],
              correctIndex: 1,
              explanation: `Place value is the foundation because all other math builds on top. Addition adds place by place. Subtraction subtracts place by place. You can't do bigger math without it.` },
            { id: `l04-q4`, format: `true-false`,
              question: `If someone writes $50 as $500, they made a HUGE place value mistake — it's 10 times too much.`,
              correctAnswer: true,
              explanation: `True! Confusing 50 and 500 is a place value mistake. The 5 should be in the tens place (= 50), not the hundreds place (= 500). 10 times off — big problem.` },
            { id: `l04-q5`, format: `fill-blank`,
              question: `When you compare two numbers, check the ___ place first to see which is bigger.`,
              options: [`biggest`, `smallest`, `middle`, `random`],
              correctIndex: 0,
              explanation: `The biggest (leftmost) place first. If they're different there, you know which is bigger. If they're the same, move to the next place down.` },
            { id: `l04-q6`, format: `multiple-choice`,
              question: `Why does PLACE VALUE matter?`,
              options: [`It doesn't`, `It's a SUPERPOWER — used everywhere, foundation for all math, prevents huge mistakes`, `Only for tests`, `Just for fun`],
              correctIndex: 1,
              explanation: `Place value is a superpower. Used everywhere. Foundation for all math. Prevents costly mistakes. One of humanity's greatest ideas. You've got it now.` },
          ],
        },

        {
          id: `l04-realworld`,
          type: `real-world`,
          guideText: `Here's something wild, {name}. In 1999, NASA's Mars Climate Orbiter — a $125 million spacecraft — CRASHED INTO MARS because of a units mistake (similar to a place value mistake). One team was using metric units. Another team was using English units. Their numbers were the same DIGITS but in different scales — like the difference between 50 and 500. The spacecraft went too low and burned up. $125 million wasted because of a place value style error. Even space agencies have to triple-check their numbers. The moral? Place value mistakes are REAL and EXPENSIVE. Always check your work. The bigger the stakes, the more it matters.`,
          familyAdventure: `Together, do a PLACE VALUE SPOT in your home. Walk around. Find 10 different places where numbers show up — clocks, microwaves, books, prices, addresses, phone screens. For each one, identify the place values. "The 4 in the page number 47 is in the tens place — means 40." Make it a game. Race to find the most. You'll be amazed how many numbers you live around without noticing.`,
          creativePrompt: `Make a "PLACE VALUE HEROES" comic. Draw three superheroes: ONES (small but mighty), TENS (medium and strong), HUNDREDS (huge and powerful). Each one has their own personality based on their value. Show them working TOGETHER to build any number you choose. Add a villain — ZERO THE PLACEHOLDER — who's secretly important even though they have no value. Have fun with it.`,
        },

        {
          id: `l04-celebration`,
          type: `celebration`,
          message: `Awesome, {name}. You now SEE why place value matters. It's EVERYWHERE — money, time, scores, real life. It's the FOUNDATION for all other math. It lets you COMPARE numbers easily. And mistakes with it can be HUGE. You've got one of humanity's greatest tools in your hands. Use it well. Next lesson, we'll use a hands-on visual tool called the PLACE VALUE MAT. See you there. — Remi 🦝`,
          badge: `place-value-master`,
          badgeName: `Place Value Master`,
          xpEarned: 50,
        },

      ],
    },
  ],
};

export default MATH_L04;

// ─── Dev asset check ───
if (import.meta.env?.DEV) {
  const mags  = MATH_L04.lessons[0].screens.filter(s => s.type === 'magazine').length;
  const game  = MATH_L04.lessons[0].screens.find(s => s.type === 'interactive')?.items?.length ?? 0;
  const quiz  = MATH_L04.lessons[0].screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  console.log(`[LESSON-MATH-L04] Loaded: "Why Place Value Matters" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
}
