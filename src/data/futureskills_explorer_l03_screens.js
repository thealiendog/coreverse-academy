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

        // PHASE 2 — MAGAZINE STORY (6 sections)
        {
          type:          'magazine',
          section:       1,
          totalSections: 6,
          headline:      'Three Building Blocks',
          paragraphs: [
            'Here\'s a wild fact: every program ever written is built from just THREE building blocks. Three.',
            'Sequences (do this, then that). Loops (do it again). Conditionals (if-then-else). That\'s the whole foundation.',
          ],
          image:        '/explorer-assets/future-skills/l03-s1-three-blocks.png',
          imageCaption: 'Three building blocks. Every program in history is built from just these.',
          vocab: [
            { word: 'building block', definition: 'A fundamental piece used to build something bigger. Sequences, loops, and conditionals are the building blocks of all code.', audioPrompt: 'Building block — a fundamental piece used to build something bigger. Sequences, loops, and conditionals are the building blocks of all code.' },
            { word: 'foundation',     definition: 'The base everything else is built on. The three programming building blocks are the foundation of every app, game, and AI system.', audioPrompt: 'Foundation — the base everything else is built on. The three programming building blocks are the foundation of every app, game, and AI system.' },
          ],
        },
        {
          type:          'magazine',
          section:       2,
          totalSections: 6,
          headline:      'Sequences',
          paragraphs: [
            'A sequence is instructions in order. Step 1, then step 2, then step 3.',
            'Order matters. "Put on socks, then shoes" works. "Put on shoes, then socks" doesn\'t. Sequences are the simplest building block.',
          ],
          image:        '/explorer-assets/future-skills/l03-s2-sequence-line.png',
          imageCaption: 'A sequence is the simplest idea in code: just do these things, in this order.',
          vocab: [
            { word: 'sequence', definition: 'Instructions executed one after another in a fixed order. The most fundamental building block in all of programming.', audioPrompt: 'Sequence — instructions executed one after another in a fixed order. The most fundamental building block in all of programming.' },
            { word: 'order',    definition: 'The arrangement of things in a particular position. In a sequence, changing the order changes the result.', audioPrompt: 'Order — the arrangement of things in a particular position. In a sequence, changing the order changes the result.' },
          ],
        },
        {
          type:          'magazine',
          section:       3,
          totalSections: 6,
          headline:      'Loops',
          paragraphs: [
            'A loop is an instruction that repeats. Instead of writing the same line 100 times, you write it once.',
            '"Repeat 10 times." "Keep going until the music stops." "Do this forever." Without loops, programs would be impossibly long.',
          ],
          image:        '/explorer-assets/future-skills/l03-s3-loop-cycle.png',
          imageCaption: 'A loop is one instruction that runs many times. Powerful, efficient, and everywhere in code.',
          vocab: [
            { word: 'loop',      definition: 'A programming structure that repeats instructions multiple times. Either a fixed number of times, or until a condition is met.', audioPrompt: 'Loop — a programming structure that repeats instructions multiple times. Either a fixed number of times, or until a condition is met.' },
            { word: 'iteration', definition: 'One single pass through a loop. If a loop runs 10 times, each of those 10 passes is one iteration.', audioPrompt: 'Iteration — one single pass through a loop. If a loop runs 10 times, each of those 10 passes is one iteration.' },
          ],
        },
        {
          type:          'magazine',
          section:       4,
          totalSections: 6,
          headline:      'Conditionals',
          paragraphs: [
            'A conditional lets a program make decisions. IF something is true, THEN do this, ELSE do that.',
            'In a game: IF health hits zero, THEN game over. IF the player scores 100 points, THEN unlock the next level. Decisions everywhere.',
          ],
          image:        '/explorer-assets/future-skills/l03-s4-conditional-fork.png',
          imageCaption: 'A conditional is a fork in the road. The program checks something, then picks a path.',
          vocab: [
            { word: 'conditional', definition: 'An if-then-else structure that lets a program make decisions based on whether something is true or false.', audioPrompt: 'Conditional — an if-then-else structure that lets a program make decisions based on whether something is true or false.' },
            { word: 'branch',      definition: 'A path a program can take based on a decision. Yes goes one way, no goes another.', audioPrompt: 'Branch — a path a program can take based on a decision. Yes goes one way, no goes another.' },
          ],
        },
        {
          type:          'magazine',
          section:       5,
          totalSections: 6,
          headline:      'Combining All Three',
          paragraphs: [
            'A simple number-guessing game uses all three.',
            'Pick a number (sequence). Keep asking the player until they guess right (loop). If too high, say "lower." If too low, say "higher." If correct, "you win!" (conditional).',
          ],
          image:        '/explorer-assets/future-skills/l03-s5-game-combination.png',
          imageCaption: 'Every real program is a mix — a loop inside a conditional inside a sequence. Layered, nested, working together.',
          vocab: [
            { word: 'nesting', definition: 'Putting one structure inside another. A loop inside a conditional inside a sequence — that\'s nesting in action.', audioPrompt: 'Nesting — putting one structure inside another. A loop inside a conditional inside a sequence: that\'s nesting in action.' },
            { word: 'logic',   definition: 'The structured reasoning behind a program\'s behavior. Built from how sequences, loops, and conditionals combine.', audioPrompt: 'Logic — the structured reasoning behind a program\'s behavior. Built from how sequences, loops, and conditionals combine.' },
          ],
        },
        {
          type:          'magazine',
          section:       6,
          totalSections: 6,
          headline:      'Three Ideas, Infinite Combinations',
          paragraphs: [
            'Every program ever — from Pong in 1972 to the AI running today — is just these three ideas combined and stacked.',
            'A loop inside a conditional inside a sequence. A conditional inside a loop. Layer them, and you can build anything.',
          ],
          image:        '/explorer-assets/future-skills/l03-s6-infinite-universe.png',
          imageCaption: 'Three concepts. Infinite programs. Every piece of software ever made was built from this same kit.',
          vocab: [
            { word: 'complexity',  definition: 'How complicated something is. Complex programs are built from many simple parts combined — never from one complicated piece.', audioPrompt: 'Complexity — how complicated something is. Complex programs are built from many simple parts combined, never from one complicated piece.' },
            { word: 'abstraction', definition: 'Simplifying a big idea down to its core pieces. Sequences, loops, and conditionals are the core abstractions of all programming.', audioPrompt: 'Abstraction — simplifying a big idea down to its core pieces. Sequences, loops, and conditionals are the core abstractions of all programming.' },
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
            { image: 'l03-game-sequence.png',    label: `Stand up. Pick up your bag. Walk to the door. Turn the handle. Step outside.`,                                                                                                                                              correctMatch: 'sequence',    objectPosition: 'center 50%', matchPhrase: `Sequence! These are instructions executed one after another in a fixed order — no repetition, no decisions, just step 1, then step 2, all the way through. Order is the defining feature: if you swapped any two steps, the result would change. Sequences are the simplest building block of programming, and they're inside every single program ever written, even the most complex ones.` },
            { image: 'l03-game-loop.png',        label: `Keep stirring the mixture without stopping until it starts to bubble.`,                                                                                                                                                   correctMatch: 'loop',        objectPosition: 'center 50%', matchPhrase: `Loop! This is a condition-controlled loop — keep doing the action until a condition changes. Instead of "stir once, stir again, stir again…" a hundred times, a loop says: keep doing this until the exit condition is met. "Until it starts to bubble" is the condition that ends the loop. Loops are essential for anything that needs to repeat, and without them, programs would be impossibly long to write.` },
            { image: 'l03-game-conditional.png', label: `If your score is above 50, move to the next level. Otherwise, replay the current level.`,                                                                                                                                correctMatch: 'conditional', objectPosition: 'center 50%', matchPhrase: `Conditional! This is an IF/THEN/ELSE structure — a decision that branches in different directions based on what's true. IF the score is above 50, one thing happens. Otherwise, something different happens. The same situation produces two different outcomes depending on the condition. Conditionals give programs the ability to respond differently to different circumstances, which is what makes software feel intelligent rather than just mechanical.` },
            { image: 'l03-game-all-three.png',   label: `Pick up the first card from the deck. Keep drawing one card at a time until you have five. Each time you draw: if it's a face card, place it in the left pile; otherwise place it in the right pile.`,                  correctMatch: 'all-three',   objectPosition: 'center 50%', matchPhrase: `All three! Picking up the first card is a sequence — a specific first step. Keep drawing until you have five is a loop — repetition with an exit condition. Each time you draw, if it's a face card vs otherwise is a conditional inside each loop iteration. Real programs constantly combine all three structures. No matter how complex a program looks, it's always these three concepts layered and nested together.` },
          ],
          buckets: [
            { id: 'sequence',    label: `1️⃣ Sequence`,    color: '#60A5FA' },
            { id: 'loop',        label: `🔄 Loop`,         color: '#34D399' },
            { id: 'conditional', label: `🔀 Conditional`,  color: '#F59E0B' },
            { id: 'all-three',   label: `🧩 All Three`,    color: '#818CF8' },
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
    fetch('/explorer-assets/future-skills/l03-s1-three-blocks.png',       { method: 'HEAD' }),
    fetch('/explorer-assets/future-skills/l03-s2-sequence-line.png',      { method: 'HEAD' }),
    fetch('/explorer-assets/future-skills/l03-s3-loop-cycle.png',         { method: 'HEAD' }),
    fetch('/explorer-assets/future-skills/l03-s4-conditional-fork.png',   { method: 'HEAD' }),
    fetch('/explorer-assets/future-skills/l03-s5-game-combination.png',   { method: 'HEAD' }),
    fetch('/explorer-assets/future-skills/l03-s6-infinite-universe.png',  { method: 'HEAD' }),
  ]).then(([r1, r2, r3, r4, r5, r6]) => {
    console.log(`[ASSET-CHECK-FUTURESKILLS-L03] three-blocks: ${r1.ok}, sequence-line: ${r2.ok}, loop-cycle: ${r3.ok}, conditional-fork: ${r4.ok}, game-combination: ${r5.ok}, infinite-universe: ${r6.ok}`);
  }).catch(() => {
    console.log('[ASSET-CHECK-FUTURESKILLS-L03] Could not verify image assets — network check failed');
  });
})();

export default futureskills_explorer_l03_screens;
