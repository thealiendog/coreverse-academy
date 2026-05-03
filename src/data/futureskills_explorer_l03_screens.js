// ============================================================
// COREVERSE EXPLORERS — Future Skills · Lesson 3
// "Sequences, Loops, and Conditionals"
// Ages 6–8 | Guide: Byte | ExplorerLessonPlayer format
// ============================================================

const futureskills_explorer_l03_screens = {
  ageBand:   'explorers',
  subjectId: 'future-skills',
  guide:     'byte',
  lessons: [
    {
      id:        'fs-6-8-03',
      title:     `Sequences, Loops, and Conditionals`,
      duration:  12,
      xpReward:  50,
      badge:     'logic-builder',
      badgeName: `Logic Builder`,
      screens: [
        // PHASE 1 — WELCOME
        {
          type:      'welcome',
          guideText: `Here's a fun fact: almost every computer program ever written — from Pong in 1972 to the AI systems running today — is built from just three basic building blocks. Three. Sequences, loops, and conditionals. Master these and you understand the skeleton of all code.`,
        },

        // PHASE 2 — MAGAZINE STORY (4 sections)
        {
          type:          'magazine',
          section:       1,
          totalSections: 4,
          headline:      `Sequences: Do This, Then That`,
          paragraphs: [
            `A sequence is the simplest programming structure — instructions executed one after another in a specific order. Step 1, then step 2, then step 3. Order matters enormously in a sequence. "Put on socks then shoes" produces a very different result from "put on shoes then socks." In code, a sequence might look like: display a welcome message, then ask for a name, then say hello to that name. Each line runs in order, top to bottom.`,
            `Sequences are the foundation that everything else builds on. Every program, no matter how complex, contains sequences at its core. Even within loops and conditionals, the individual steps inside them run as sequences. When you write the simplest possible program — "do this, then do this, then do this" — you're already writing a sequence. It's the most natural match between how humans think through tasks and how computers execute instructions.`,
            `The critical thing about sequences is that every step is executed every time, in the exact order written. There's no skipping, no repeating, no deciding — just one instruction after another. This predictability is what makes programs reliable. When a sequence works, it works the same way every single time, on every computer, with exactly the same result.`,
          ],
          image:        '/explorer-assets/future-skills/l03-magazine-sequences.png',
          imageCaption: `Sequences — instructions executed one after another in order, forming the foundation of every program ever written`,
          vocab: [
            { word: `sequence`,  definition: `A set of instructions executed one after another in a fixed order — the order matters, and every step runs every time. Sequences are the simplest and most fundamental building block in all of programming.`, audioPrompt: `Sequence — a set of instructions executed one after another in a fixed order. The order matters, and every step runs every time. Sequences are the simplest and most fundamental building block in all of programming.` },
            { word: `execution`, definition: `The process of a computer actually running a set of instructions — when a program executes, the computer carries out each step of the code in the order specified.`,                                                     audioPrompt: `Execution — the process of a computer actually running a set of instructions. When a program executes, the computer carries out each step of the code in the order specified.` },
          ],
        },
        {
          type:          'magazine',
          section:       2,
          totalSections: 4,
          headline:      `Loops: Do This Again and Again`,
          paragraphs: [
            `A loop is an instruction that repeats. Instead of writing the same line of code 100 times, you write it once and tell the computer how many times to repeat it — or to keep repeating until a certain condition is met. "While the music is playing, keep dancing" is a loop. "Repeat this 10 times" is a loop. "Keep asking for input until the user enters a valid number" is a loop. Without loops, programs would be impossibly long to write.`,
            `There are two main types: count-controlled loops, which repeat a fixed number of times ("do this 10 times"), and condition-controlled loops, which keep repeating until something changes ("do this until the bucket is full"). Both types share the same key feature: the code inside the loop is written once but runs many times. This is one of the first places where coding reveals its real power — doing huge amounts of work with very few instructions.`,
            `Games use loops constantly. The main game loop runs from the moment the game starts to the moment you quit — checking for player input, updating positions, drawing the screen — dozens of times per second, thousands of times per session. Every animation is a loop. Every progress bar updating is a loop. Anywhere a program needs to keep doing something repeatedly, a loop is at work.`,
          ],
          image:        '/explorer-assets/future-skills/l03-magazine-loops.png',
          imageCaption: `Loops — instructions that repeat, allowing code written once to run many times without rewriting the same steps`,
          vocab: [
            { word: `loop`,      definition: `A programming structure that repeats a set of instructions — either a fixed number of times or until a specific condition is met. Loops make it possible to do enormous amounts of work with very few lines of code.`, audioPrompt: `Loop — a programming structure that repeats a set of instructions, either a fixed number of times or until a specific condition is met. Loops make it possible to do enormous amounts of work with very few lines of code.` },
            { word: `iteration`, definition: `One single pass through a loop — if a loop runs 10 times, each of those 10 repetitions is one iteration. Counting iterations helps programmers track how many times something has happened inside a loop.`,             audioPrompt: `Iteration — one single pass through a loop. If a loop runs 10 times, each of those 10 repetitions is one iteration. Counting iterations helps programmers track how many times something has happened inside a loop.` },
          ],
        },
        {
          type:          'magazine',
          section:       3,
          totalSections: 4,
          headline:      `Conditionals: If This, Then That`,
          paragraphs: [
            `A conditional lets a program make decisions. The basic form: IF something is true, THEN do this, ELSE do that. In a game: IF the player's health reaches zero, THEN end the game, ELSE keep playing. In a weather app: IF the temperature is below freezing, THEN show "wear a coat," ELSE show "enjoy the sun." Conditionals give programs the ability to respond differently in different situations — which is what makes software feel intelligent rather than just mechanical.`,
            `The condition inside an IF statement is always either true or false — there's no in-between. This true/false evaluation is called a boolean. Every decision a computer makes boils down to some form of boolean — is this number greater than that one? Did the user click yes or no? Is the file there or not? Conditionals let programmers use boolean results to branch a program's behavior in two or more directions.`,
            `Conditionals can be nested inside each other to handle complex situations. "If it's raining AND you have an umbrella, go outside. If it's raining AND you don't have an umbrella, wait. If it's not raining, go outside." Each real-world decision has conditions, and those conditions can be layered. The same logic applies in code — complex behavior is built from simple true/false decisions stacked and combined.`,
          ],
          image:        '/explorer-assets/future-skills/l03-magazine-conditionals.png',
          imageCaption: `Conditionals — if-then-else decisions that let programs respond differently based on what's true or false`,
          vocab: [
            { word: `conditional`, definition: `A programming structure that executes different instructions based on whether a condition is true or false — the IF/THEN/ELSE structure that lets programs make decisions and respond differently to different situations.`, audioPrompt: `Conditional — a programming structure that executes different instructions based on whether a condition is true or false. The IF/THEN/ELSE structure that lets programs make decisions and respond differently to different situations.` },
            { word: `branch`,      definition: `One of the possible paths a conditional can take — when a condition is true, the program takes one branch; when false, it takes another. Branches are what make programs flexible and context-aware.`,              audioPrompt: `Branch — one of the possible paths a conditional can take. When a condition is true, the program takes one branch; when false, it takes another. Branches are what make programs flexible and context-aware.` },
          ],
        },
        {
          type:          'magazine',
          section:       4,
          totalSections: 4,
          headline:      `Combining All Three`,
          paragraphs: [
            `Real programs combine all three building blocks constantly. A simple number-guessing game shows exactly how: the computer picks a number (sequence). The player guesses, and the game keeps asking until they get it right (loop). If the guess is too high, say "lower"; if too low, say "higher"; if correct, say "you win!" (conditional). Then ask if they want to play again (loop with conditional). A complete working game — from three simple structures layered together.`,
            `The nesting of these structures is what creates complexity. A loop can contain a conditional. A conditional can trigger a sequence. A sequence can kick off a loop. When you see a complex program — a video game, a recommendation engine, a navigation app — and wonder how it possibly works, the answer is always the same: sequences, loops, and conditionals, combined and layered in enormous numbers. The building blocks stay the same; only the scale changes.`,
            `This is the insight that makes learning to code tractable: you don't need to understand everything at once. You need to master three concepts and understand how they combine. Every algorithm ever written — no matter how sophisticated — is built from these same three ideas. Once you can recognize sequences, loops, and conditionals, you can read and understand any code you encounter in the world.`,
          ],
          image:        '/explorer-assets/future-skills/l03-magazine-combining.png',
          imageCaption: `Combining all three — every program ever built is sequences, loops, and conditionals layered and nested together`,
          vocab: [
            { word: `logic`,        definition: `The structured reasoning behind a program's decisions — a program's logic is the combination of sequences, loops, and conditionals that determines how it behaves in every possible situation.`, audioPrompt: `Logic — the structured reasoning behind a program's decisions. A program's logic is the combination of sequences, loops, and conditionals that determines how it behaves in every possible situation.` },
            { word: `control flow`, definition: `The order in which a program's instructions execute — sequences run top to bottom, loops repeat sections, and conditionals skip or redirect sections. Control flow is what gives programs their shape.`,   audioPrompt: `Control flow — the order in which a program's instructions execute. Sequences run top to bottom, loops repeat sections, and conditionals skip or redirect sections. Control flow is what gives programs their shape.` },
          ],
        },

        // PHASE 3 — INTERACTIVE
        {
          type:          'interactive',
          activityType:  'drag-match',
          instruction:   `Tap each card, then tap which programming building block it shows!`,
          guideText:     `Every program is built from three structures: sequences (steps in order), loops (steps that repeat), and conditionals (if-then decisions). Some programs use all three at once! Can you identify which building block — or combination — each example uses?`,
          columnHeaders: [`The Example`, `Which Building Block?`],
          items: [
            { image: 'l03-game-sequence.png',  label: `Stand up. Pick up your bag. Walk to the door. Turn the handle. Step outside.`,                                                                                                                                              correctMatch: 'sequence',  objectPosition: 'center 50%', matchPhrase: `Sequence! These are instructions executed one after another in a fixed order — no repetition, no decisions, just step 1, then step 2, all the way through. Order is the defining feature: if you swapped any two steps, the result would change. Sequences are the simplest building block of programming, and they're inside every single program ever written, even the most complex ones.` },
            { image: 'l03-game-loop.png',      label: `Keep stirring the mixture without stopping until it starts to bubble.`,                                                                                                                                                   correctMatch: 'loop',      objectPosition: 'center 50%', matchPhrase: `Loop! This is a condition-controlled loop — keep doing the action until a condition changes. Instead of "stir once, stir again, stir again…" a hundred times, a loop says: keep doing this until the exit condition is met. "Until it starts to bubble" is the condition that ends the loop. Loops are essential for anything that needs to repeat, and without them, programs would be impossibly long to write.` },
            { image: 'l03-game-conditional.png', label: `If your score is above 50, move to the next level. Otherwise, replay the current level.`,                                                                                                                              correctMatch: 'conditional', objectPosition: 'center 50%', matchPhrase: `Conditional! This is an IF/THEN/ELSE structure — a decision that branches in different directions based on what's true. IF the score is above 50, one thing happens. Otherwise, something different happens. The same situation produces two different outcomes depending on the condition. Conditionals give programs the ability to respond differently to different circumstances, which is what makes software feel intelligent rather than just mechanical.` },
            { image: 'l03-game-all-three.png', label: `Pick up the first card from the deck. Keep drawing one card at a time until you have five. Each time you draw: if it's a face card, place it in the left pile; otherwise place it in the right pile.`,                  correctMatch: 'all-three', objectPosition: 'center 50%', matchPhrase: `All three! Picking up the first card is a sequence — a specific first step. Keep drawing until you have five is a loop — repetition with an exit condition. Each time you draw, if it's a face card vs otherwise is a conditional inside each loop iteration. Real programs constantly combine all three structures. No matter how complex a program looks, it's always these three concepts layered and nested together.` },
          ],
          buckets: [
            { id: 'sequence',   label: `1️⃣ Sequence`,   color: '#60A5FA' },
            { id: 'loop',       label: `🔄 Loop`,        color: '#34D399' },
            { id: 'conditional', label: `🔀 Conditional`, color: '#F59E0B' },
            { id: 'all-three',  label: `🧩 All Three`,   color: '#818CF8' },
          ],
        },

        // PHASE 4 — MASTERY QUIZ
        {
          type:      'quiz',
          guideText: `Quiz time, {name}! Let's see what you've learned about sequences, loops, and conditionals. Answer all 6 questions to earn your Logic Builder badge!`,
          questions: [
            {
              format:       'multiple-choice',
              question:     `What is a loop in programming?`,
              options:      [`A type of circle in a flowchart`, `An instruction that repeats a set of steps`, `A mistake in your code`, `The beginning of a program`],
              correctIndex: 1,
            },
            {
              format:       'multiple-choice',
              question:     `What does a conditional do?`,
              options:      [`Repeats instructions multiple times`, `Lets a program make decisions based on whether something is true or false`, `Runs instructions in order`, `Stops a program from running`],
              correctIndex: 1,
            },
            {
              format:       'multiple-choice',
              question:     `What are the three fundamental building blocks of all programming?`,
              options:      [`Variables, functions, and classes`, `Sequences, loops, and conditionals`, `Input, output, and storage`, `Math, logic, and language`],
              correctIndex: 1,
            },
            {
              format:        'true-false',
              question:      `Without loops, programmers would have to write out the same instruction individually for every single repetition — once for each time they wanted it to run.`,
              correctAnswer: true,
            },
            {
              format:       'fill-blank',
              question:     `An instruction that makes a program choose between different actions based on whether a condition is true or false is called a ___.`,
              options:      [`conditional`, `sequence`, `loop`, `variable`],
              correctIndex: 0,
            },
            {
              format:       'multiple-choice',
              question:     `In a number-guessing game, what structure checks whether the player's guess is too high, too low, or exactly right?`,
              options:      [`A loop — because it repeats`, `A sequence — because steps happen in order`, `A conditional — because it makes a decision based on the guess`, `A flowchart — because it maps the options`],
              correctIndex: 2,
            },
          ],
        },

        // PHASE 5 — REAL-WORLD CONNECTION
        {
          type:            'real-world',
          guideText:       `Pick any game you've played and find one sequence, one loop, and one conditional inside it — they're all there. Every single game ever made is these three structures working together.`,
          familyAdventure: `Play a coding game on code.org — it's free and designed for kids. Try the Hour of Code activities. Notice how you build programs using sequences, loops, and conditionals with visual blocks. See how far you can get in one sitting!`,
          creativePrompt:  `Design a dance routine using all three programming concepts. Write it out: SEQUENCE (first do this move, then this, then this). LOOP (repeat these 3 moves 4 times). CONDITIONAL (IF the music speeds up, THEN do fast moves, ELSE do slow moves). Perform your coded dance and have a family member try to follow it exactly like a computer would.`,
        },

        // PHASE 6 — CELEBRATION
        {
          type:      'celebration',
          xpEarned:  50,
          badge:     'logic-builder',
          badgeName: `Logic Builder`,
          message:   `Brilliant work, {name}! You now know the three building blocks that power every program ever written — sequences for order, loops for repetition, and conditionals for decisions. Stack these three ideas together in any combination and you can build anything. Byte is so proud to share this knowledge with you.`,
        },
      ],
    },
  ],
};

// Log on module load — confirms lesson wired correctly + verifies image assets at runtime
(() => {
  const l    = futureskills_explorer_l03_screens.lessons[0];
  const mags = l.screens.filter(s => s.type === 'magazine').length;
  const game = l.screens.find(s => s.type === 'interactive')?.items?.length || 0;
  const quiz = l.screens.find(s => s.type === 'quiz')?.questions?.length || 0;
  console.log(`[LESSON-FUTURESKILLS-L03] Loaded: "Sequences, Loops, and Conditionals" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
  Promise.all([
    fetch('/explorer-assets/future-skills/l03-magazine-sequences.png',   { method: 'HEAD' }),
    fetch('/explorer-assets/future-skills/l03-magazine-loops.png',       { method: 'HEAD' }),
    fetch('/explorer-assets/future-skills/l03-magazine-conditionals.png',{ method: 'HEAD' }),
    fetch('/explorer-assets/future-skills/l03-magazine-combining.png',   { method: 'HEAD' }),
  ]).then(([r1, r2, r3, r4]) => {
    console.log(`[ASSET-CHECK-FUTURESKILLS-L03] sequences: ${r1.ok}, loops: ${r2.ok}, conditionals: ${r3.ok}, combining: ${r4.ok}`);
  }).catch(() => {
    console.log('[ASSET-CHECK-FUTURESKILLS-L03] Could not verify image assets — network check failed');
  });
})();

export default futureskills_explorer_l03_screens;
