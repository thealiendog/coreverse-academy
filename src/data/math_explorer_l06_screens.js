// ─────────────────────────────────────────────────────────────────────────────
// MATH  |  L06 — Adding Multi-Digit Numbers
// Age band : explorers (6–8)   Guide: remi
// Standards: CCSS 2.NBT.B.5 / 2.NBT.B.7 (add within 1000 using place value)
// ─────────────────────────────────────────────────────────────────────────────

const MATH_L06 = {
  ageBand:   `explorers`,
  subjectId: `math`,
  guide:     `remi`,

  lessons: [
    {
      id:        `math-6-8-06`,
      title:     `Adding Multi-Digit Numbers`,
      duration:  12,
      xpReward:  50,
      badge:     `addition-starter`,
      badgeName: `Multi-Digit Addition Starter`,

      screens: [

        {
          id: `l06-welcome`,
          type: `welcome`,
          guideText: `Hey {name}, Remi here! Time for the FUN part — using your place value foundation to ADD. Today we'll add MULTI-DIGIT NUMBERS — numbers with two, three, or more digits. The secret? You don't have to do it all at once. You break it apart by place. Sound familiar? Yep — place value to the rescue. Let's go.`,
          headline: `Adding Multi-Digit Numbers`,
          subtitle: `The secret to adding any size number — break it apart by place`,
          visual: `/explorer-assets/math/l06-welcome.webp`,
        },

        {
          id: `l06-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `From SMALL Numbers to BIGGER Ones`,
          paragraphs: [
            `You already know how to add SMALL numbers. 3 + 4 = 7. 5 + 2 = 7. 6 + 3 = 9. Easy stuff you've done since kindergarten.`,
            `But what about BIGGER numbers? Like 234 + 152? Or 567 + 321? These have three digits each. Adding them all at once would be a mess. Lucky for us, we don't HAVE to do it all at once. Multi-digit addition has a smart trick. You break it into SMALLER additions you already know. Each digit only gets added to its MATCH in the other number. Suddenly, a scary big problem becomes a few easy small ones. That's the secret. Let's see how it works.`,
          ],
          image: `/explorer-assets/math/l06-s1-bigger-numbers.webp`,
          imageCaption: `From 3 + 4 to 234 + 152. Bigger numbers, same easy idea — broken into small additions.`,
          vocab: [
            { word: `multi-digit`,    definition: `A number with MORE THAN ONE digit. MULTI-DIGIT numbers can be 2, 3, 4 digits or more.`,
              audioPrompt: `Multi-digit, {name}, is a number with more than one digit. Multi-digit numbers can be 2, 3, 4 digits or more. 47 is multi-digit. So is 234. So is 1,089. Adding multi-digit numbers takes the SAME skill as adding single digits — but applied to each place. The trick is breaking it apart.` },
            { word: `add`,            definition: `To COMBINE two amounts. When you ADD, you join numbers together to find a TOTAL.`,
              audioPrompt: `To add, {name}, is to combine two amounts. When you add, you join numbers together to find a total. Adding has been with you for years. Now you'll learn to add bigger numbers. The basic idea is the same — combine — but you do it in pieces. One place at a time.` },
            { word: `break apart`,    definition: `To SEPARATE into smaller PIECES. We BREAK APART big additions into easy small ones.`,
              audioPrompt: `To break apart, {name}, is to separate into smaller pieces. We break apart big additions into easy small ones. Instead of trying to add 234 plus 152 all at once, you break it into three pieces — ones plus ones, tens plus tens, hundreds plus hundreds. Each piece is easy. That's the trick.` },
          ],
        },

        {
          id: `l06-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `The BIG Idea: PLACE by PLACE`,
          paragraphs: [
            `Here's the BIG IDEA. When you add multi-digit numbers, you add EACH PLACE SEPARATELY.`,
            `ONES get added to ONES. TENS get added to TENS. HUNDREDS get added to HUNDREDS. They don't mix. Take 234 + 152. The ones place: 4 + 2 = 6. The tens place: 3 + 5 = 8 (which means 30 + 50 = 80). The hundreds place: 2 + 1 = 3 (which means 200 + 100 = 300). Now combine: 300 + 80 + 6 = 386. That's your answer. Big idea: each place value is its own little addition problem. You solve them one at a time, then put them together. This is why place value matters — it lets us turn big problems into small ones.`,
          ],
          image: `/explorer-assets/math/l06-s2-place-by-place.webp`,
          imageCaption: `Add PLACE BY PLACE. Ones to ones, tens to tens, hundreds to hundreds. They don't mix.`,
          vocab: [
            { word: `place by place`, definition: `Adding ONE column at a TIME. PLACE BY PLACE is how multi-digit addition works.`,
              audioPrompt: `Place by place, {name}, is adding one column at a time. Place by place is how multi-digit addition works. Ones column first. Then tens column. Then hundreds. Each column on its own. No mixing. The columns are like separate lanes — each gets added by itself.` },
            { word: `separately`,     definition: `EACH ONE alone, not mixed. Add each place SEPARATELY for accurate answers.`,
              audioPrompt: `Separately, {name}, means each one alone, not mixed. Add each place separately for accurate answers. The ones place doesn't help the tens place. The tens place doesn't help the hundreds. Each handles its own digits. Keeping places separate is what makes addition work.` },
            { word: `combine`,        definition: `To PUT TOGETHER. After adding each place, COMBINE the pieces for your final answer.`,
              audioPrompt: `To combine, {name}, is to put together. After adding each place, combine the pieces for your final answer. You found 300 in hundreds, 80 in tens, 6 in ones. Combine them: 300 plus 80 plus 6 equals 386. Same as expanded form, in reverse. You're building the answer from pieces.` },
          ],
        },

        {
          id: `l06-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Addition on the MAT`,
          paragraphs: [
            `Want to SEE multi-digit addition happen? Use a place value MAT.`,
            `Let's add 234 + 152. Build BOTH numbers on the mat — but in the same columns! Put 2 flats + 3 rods + 4 singles for 234. Then ADD 1 flat + 5 rods + 2 singles for 152. So now the mat has, in TOTAL: 3 flats in hundreds (2 + 1), 8 rods in tens (3 + 5), and 6 singles in ones (4 + 2). Read the mat: 386. Done! With NO regrouping needed (no column went over 9), the addition is just COMBINING blocks in each column. The mat shows you exactly what's happening. Practice this kind of addition until it feels EASY. The mat is your training tool.`,
          ],
          image: `/explorer-assets/math/l06-s3-mat-addition.webp`,
          imageCaption: `Add on the mat: combine blocks in each column. 2 flats + 1 flat = 3 flats. Read total = 386.`,
          vocab: [
            { word: `combine blocks`, definition: `JOIN the blocks in each column. COMBINE BLOCKS on the mat shows addition happening.`,
              audioPrompt: `Combine blocks, {name}, means join the blocks in each column. Combine blocks on the mat shows addition happening. Two flats plus one flat is three flats. Three rods plus five rods is eight rods. The mat lets you see each addition happen physically. Then you read the total off the mat.` },
            { word: `same column`,    definition: `IN THE SAME LANE on the mat. Blocks from both numbers go in the SAME COLUMN by place.`,
              audioPrompt: `Same column, {name}, means in the same lane on the mat. Blocks from both numbers go in the same column by place. All ones from both numbers go in the ones column. All tens go in tens. That's how the mat enforces place by place addition. The columns do the organizing for you.` },
            { word: `training tool`,  definition: `Something you PRACTICE with. The mat is your TRAINING TOOL for confident addition.`,
              audioPrompt: `A training tool, {name}, is something you practice with. The mat is your training tool for confident addition. Use it until adding multi-digit numbers feels natural. Eventually, you won't need the mat — your brain will do the work. But the mat builds the muscle. Practice with it.` },
          ],
        },

        {
          id: `l06-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `The 3-STEP Method`,
          paragraphs: [
            `Here's the formal 3-STEP METHOD for multi-digit addition (without regrouping).`,
            `STEP 1: ADD THE ONES first. Look at the ones digit of both numbers. Add them. Write the result in the ones place of your answer. STEP 2: ADD THE TENS. Same thing — add the tens digits from both numbers. Write the result in the tens place. STEP 3: ADD THE HUNDREDS. Add the hundreds digits. Write the result in the hundreds place. Done! Always start from the RIGHT (ones) and work LEFT (toward hundreds). 532 + 246. Step 1: 2 + 6 = 8 (ones). Step 2: 3 + 4 = 7 (tens). Step 3: 5 + 2 = 7 (hundreds). Answer: 778. Three steps. Easy.`,
          ],
          image: `/explorer-assets/math/l06-s4-three-step.webp`,
          imageCaption: `3 steps: 1) Add ones, 2) Add tens, 3) Add hundreds. Right to left. Easy.`,
          vocab: [
            { word: `start from right`, definition: `BEGIN at the ONES side. START FROM THE RIGHT — add ones first.`,
              audioPrompt: `Start from the right, {name}, means begin at the ones side. Start from the right — add ones first, then tens, then hundreds. Right to left. Why? Because if regrouping happens later (when you have to carry over), starting from the right makes it work smoothly. Always right to left.` },
            { word: `work left`,      definition: `MOVE toward bigger places. WORK LEFT through each column.`,
              audioPrompt: `Work left, {name}, means move toward bigger places. Work left through each column. After ones, move left to tens. After tens, move left to hundreds. Each step takes you to the next bigger place value. Right-to-left is the universal rule of multi-digit math.` },
            { word: `formal method`,  definition: `A SPECIFIC ORDER of steps. The FORMAL METHOD makes addition reliable.`,
              audioPrompt: `A formal method, {name}, is a specific order of steps. The formal method makes addition reliable. Always the same sequence — ones first, then tens, then hundreds. Following a method means you don't have to think about HOW to do it each time. You just do it. That's why methods exist — to make hard things automatic.` },
          ],
        },

        {
          id: `l06-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `LINING UP Matters`,
          paragraphs: [
            `Here's something SUPER important — when you write multi-digit addition on paper, LINE UP THE DIGITS by their place values.`,
            `Write the first number. Write the second number DIRECTLY UNDERNEATH it — but make sure the ONES digits are stacked. The TENS stacked. The HUNDREDS stacked. Like this: 234 on top, 152 underneath. The 4 and 2 in the ones column. The 3 and 5 in the tens column. The 2 and 1 in the hundreds column. Then draw a line under both numbers. THEN add. If digits aren't lined up, you might accidentally add ones to tens — DISASTER. Imagine adding 234 + 52. If you write the 52 lined up to the LEFT instead of right, you'd be adding wrong place values. Always — ONES UNDER ONES. This is one of the most important habits in math.`,
          ],
          image: `/explorer-assets/math/l06-s5-line-up.webp`,
          imageCaption: `LINE UP the digits! Ones under ones. Tens under tens. Hundreds under hundreds. Always.`,
          vocab: [
            { word: `line up`,        definition: `To STACK digits in proper COLUMNS. LINE UP digits before adding.`,
              audioPrompt: `Line up, {name}, is to stack digits in proper columns. Line up digits before adding. Ones go under ones. Tens go under tens. Hundreds go under hundreds. Lining up keeps each place addition correct. It's a small habit that prevents big mistakes. Always check your alignment.` },
            { word: `directly under`, definition: `RIGHT BELOW in the same column. Write each digit DIRECTLY UNDER its match.`,
              audioPrompt: `Directly under, {name}, means right below in the same column. Write each digit directly under its match. The ones digit of the second number goes directly under the ones digit of the first. Same for tens and hundreds. Direct alignment keeps everything in proper place.` },
            { word: `disaster`,       definition: `A BIG mistake. Wrong line-up creates a DISASTER — answer comes out totally wrong.`,
              audioPrompt: `A disaster, {name}, is a big mistake. Wrong line-up creates a disaster — answer comes out totally wrong. Add the tens digit to the ones digit and your answer is off by ten times. Imagine a price being ten times wrong. Always line up correctly. It takes one second to check and saves big problems.` },
          ],
        },

        {
          id: `l06-mag-6`,
          type: `magazine`,
          section: 6,
          headline: `Foundation MAKES It Easy`,
          paragraphs: [
            `{name} — this is why place value matters SO MUCH.`,
            `Without it, adding 234 + 152 would feel impossible. WITH it, you break the problem into three little additions you already know how to do. 4 + 2. 3 + 5. 2 + 1. Easy. Each one. The "scary" multi-digit problem becomes three small comfortable additions. THAT'S the power of a strong foundation. People who struggle with multi-digit math usually have weak place value understanding. People who breeze through it have strong place value. You're in the second group. You've BUILT your foundation. Now you can confidently tackle ANY multi-digit addition. Keep practicing. Keep using the mat. Keep lining up digits. You've got this.`,
          ],
          image: `/explorer-assets/math/l06-s6-strong-foundation.webp`,
          imageCaption: `Place value foundation MAKES addition feel easy. Strong foundation → confident math.`,
          vocab: [
            { word: `confident`,      definition: `SURE of your ability. With strong place value, you can be CONFIDENT in addition.`,
              audioPrompt: `Confident, {name}, means sure of your ability. With strong place value, you can be confident in addition. Confidence comes from understanding — not just memorizing. You're not guessing. You know WHY each step works. That's confidence. And it's earned, not given.` },
            { word: `comfortable`,    definition: `EASY and natural. Multi-digit addition feels COMFORTABLE with place value.`,
              audioPrompt: `Comfortable, {name}, means easy and natural. Multi-digit addition feels comfortable with place value. The big problems break into small ones. Each piece is comfortable. When you put them together, the whole thing is comfortable. Math should feel comfortable — and yours will, with practice.` },
            { word: `tackle`,         definition: `To TAKE ON a challenge. You can TACKLE any addition problem now.`,
              audioPrompt: `To tackle, {name}, is to take on a challenge. You can tackle any addition problem now. The trick was building the foundation first. Now nothing in multi-digit addition can really stump you — break it into places, add each separately, combine. That method works every time, on every problem.` },
          ],
        },

        {
          id: `l06-game`,
          type: `interactive`,
          format: `drag-match`,
          guideText: `Let's see what you remember, {name}.`,
          buckets: [
            { id: `fact`, label: `✅ Yes, that's true!`, color: `#34D399` },
            { id: `myth`, label: `❌ No way!`,         color: `#F87171` },
          ],
          items: [
            { id: `l06-g1`, image: `l06-game-1.webp`, label: `When you add multi-digit numbers, you add PLACE BY PLACE — ones to ones, tens to tens.`,
              matchPhrase: `Yes! The big idea. Each place is its own little addition. Add them separately, then combine the pieces for your answer.`,
              correctMatch: `fact` },
            { id: `l06-g2`, image: `l06-game-2.webp`, label: `Before adding, LINE UP the digits by place value — ones under ones, tens under tens.`,
              matchPhrase: `True! Always line up. Lining up wrong = adding wrong places together = wrong answer. Always check your alignment first.`,
              correctMatch: `fact` },
            { id: `l06-g3`, image: `l06-game-3.webp`, label: `You can add the tens digit of one number to the ones digit of another — places don't matter.`,
              matchPhrase: `Not at all! Places have to match. Adding tens to ones gives you wrong values. That's why lining up digits is so important.`,
              correctMatch: `myth` },
            { id: `l06-g4`, image: `l06-game-4.webp`, label: `Adding three-digit numbers is IMPOSSIBLE for kids — you need a calculator every time.`,
              matchPhrase: `Definitely not! Place by place breaks any big addition into easy small ones. You can do it. You just did it. Kids have done this for centuries.`,
              correctMatch: `myth` },
          ],
        },

        {
          id: `l06-quiz`,
          type: `quiz`,
          guideText: `Let's see what you remember, {name}.`,
          questions: [
            { id: `l06-q1`, format: `multiple-choice`,
              question: `What's the BIG IDEA for adding multi-digit numbers?`,
              options: [`Just guess`, `Add PLACE BY PLACE — ones to ones, tens to tens, hundreds to hundreds`, `Add them all at once`, `Skip the hard parts`],
              correctIndex: 1,
              explanation: `Place by place! Ones get added to ones. Tens to tens. Hundreds to hundreds. Each place is its own little problem. Combine the pieces for your answer.` },
            { id: `l06-q2`, format: `multiple-choice`,
              question: `What is 234 + 152? (No regrouping needed)`,
              options: [`287`, `386`, `486`, `586`],
              correctIndex: 1,
              explanation: `386! 4 + 2 = 6 ones. 3 + 5 = 8 tens (80). 2 + 1 = 3 hundreds (300). 300 + 80 + 6 = 386.` },
            { id: `l06-q3`, format: `multiple-choice`,
              question: `Which step do you do FIRST in multi-digit addition?`,
              options: [`Add hundreds`, `Add ONES — start from the RIGHT and work LEFT`, `Pick randomly`, `Skip ones`],
              correctIndex: 1,
              explanation: `Add ones first! Start from the right and work left. Ones → tens → hundreds. This order matters for when regrouping happens later.` },
            { id: `l06-q4`, format: `true-false`,
              question: `When you write multi-digit addition on paper, ONES must be UNDER ONES — and tens under tens — and hundreds under hundreds.`,
              correctAnswer: true,
              explanation: `True! Lining up digits is essential. Ones under ones, tens under tens, hundreds under hundreds. If they're not lined up, you'll add wrong places together.` },
            { id: `l06-q5`, format: `fill-blank`,
              question: `If you have 3 flats + 6 rods + 2 singles on the mat, the number is ___.`,
              options: [`362`, `326`, `263`, `632`],
              correctIndex: 0,
              explanation: `362! 3 flats = 300, 6 rods = 60, 2 singles = 2. Total: 300 + 60 + 2 = 362.` },
            { id: `l06-q6`, format: `multiple-choice`,
              question: `Why does multi-digit addition FEEL EASY when you know place value?`,
              options: [`It doesn't`, `Place value BREAKS a big problem into 2 or 3 small additions you already know`, `Just luck`, `Magic`],
              correctIndex: 1,
              explanation: `Place value breaks scary big problems into easy small ones. 234 + 152 becomes three little additions (4+2, 3+5, 2+1). Each one is easy. That's the magic of foundation.` },
          ],
        },

        {
          id: `l06-realworld`,
          type: `real-world`,
          guideText: `Here's something to know, {name}. The ONES-TO-ONES-TO-LEFT method you just learned is used by EVERY human on Earth who does math by hand. Cashiers. Builders. Accountants. Scientists. Engineers. Everyone. It's the universal method. Computers do it too — they just do it with binary (ones and zeros) instead of base-10. The reason this method has lasted thousands of years is simple — IT WORKS. It breaks any addition problem, no matter how big, into pieces small enough to solve. Even if you have to add ten-digit numbers, the same rule applies. Add place by place. Right to left. The method scales infinitely. You just learned a forever-skill.`,
          familyAdventure: `Together, do an ADDITION QUEST around the house. Find ten things with numbers on them (book pages, prices, ages, sports scores, clocks). For each one, partner up — pick TWO numbers and ADD them together. Say each step out loud. "Add the ones. Add the tens. Combine." Try numbers WITHOUT regrouping (digits in each column that add to 9 or less). Race to see how fast you can do each one. The more practice, the faster the brain gets.`,
          creativePrompt: `Draw a "STACK and ADD" comic. Show three frames: 1) Two multi-digit numbers floating apart, looking confused. 2) The numbers LINE UP and STACK on top of each other. 3) The numbers ADD place by place and produce an answer below. Give the numbers cute faces and personalities. Show how lining up makes them happy and successful.`,
        },

        {
          id: `l06-celebration`,
          type: `celebration`,
          message: `Excellent work, {name}! You just learned MULTI-DIGIT ADDITION. The big idea — add PLACE BY PLACE. Ones to ones. Tens to tens. Hundreds to hundreds. Line up the digits. Start from the right. Work left. Combine the pieces. That's the universal method. Used by everyone. Forever. You're officially doing big-kid math. Next lesson — we'll practice COLUMN by COLUMN more — and start thinking about the trickier case where one column gets too big. See you there. — Remi 🦝`,
          badge: `addition-starter`,
          badgeName: `Multi-Digit Addition Starter`,
          xpEarned: 50,
        },

      ],
    },
  ],
};

export default MATH_L06;

// ─── Dev asset check ───
if (import.meta.env?.DEV) {
  const mags  = MATH_L06.lessons[0].screens.filter(s => s.type === 'magazine').length;
  const game  = MATH_L06.lessons[0].screens.find(s => s.type === 'interactive')?.items?.length ?? 0;
  const quiz  = MATH_L06.lessons[0].screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  console.log(`[LESSON-MATH-L06] Loaded: "Adding Multi-Digit Numbers" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
}
