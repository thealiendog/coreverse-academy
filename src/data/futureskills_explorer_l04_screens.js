// ============================================================
// COREVERSE EXPLORERS — Future Skills · Lesson 4
// "Debugging: Finding and Fixing Mistakes"
// Ages 6–8 | Guide: Byte | ExplorerLessonPlayer format
// ============================================================

const futureskills_explorer_l04_screens = {
  ageBand:   'explorers',
  subjectId: 'future-skills',
  guide:     'byte',
  lessons: [
    {
      id:        'fs-6-8-04',
      title:     `Debugging: Finding and Fixing Mistakes`,
      duration:  12,
      xpReward:  50,
      badge:     'bug-hunter',
      badgeName: `Bug Hunter`,
      screens: [
        // PHASE 1 — WELCOME
        {
          type:      'welcome',
          guideText: `In 1947, a computer at Harvard University stopped working. Engineers found the problem: a real moth was stuck inside the machine. They taped it into their logbook and wrote 'First actual case of bug being found.' That's why we call coding errors 'bugs' and fixing them 'debugging.' And debugging is one of the most important skills in all of programming.`,
        },

        // PHASE 2 — MAGAZINE STORY (6 sections)
        {
          type:          'magazine',
          section:       1,
          totalSections: 6,
          headline:      'The First Bug',
          paragraphs: [
            'In 1947, a Harvard computer stopped working. Engineers found a real moth stuck inside the machine.',
            'They taped it into the logbook and wrote "First actual case of bug being found." That\'s why we call coding errors "bugs."',
          ],
          image:        '/explorer-assets/future-skills/l04-s1-first-bug-moth.png',
          imageCaption: 'A literal moth caused a literal bug. The name stuck.',
          vocab: [
            { word: 'bug',       definition: 'An error in a program that makes it behave wrong. Named after a real moth found in an early computer.', audioPrompt: 'Bug — an error in a program that makes it behave wrong. Named after a real moth found in an early computer.' },
            { word: 'debugging', definition: 'The process of finding and fixing bugs in a program. One of the most important skills any programmer has.', audioPrompt: 'Debugging — the process of finding and fixing bugs in a program. One of the most important skills any programmer has.' },
          ],
        },
        {
          type:          'magazine',
          section:       2,
          totalSections: 6,
          headline:      'What Bugs Cost',
          paragraphs: [
            'A bug is any error that makes a program behave wrong. They can be tiny (a missing character) or massive (silent wrong calculations).',
            'In 1999, NASA lost a $327 million spacecraft because one team used metric units and another used imperial. The mismatch wasn\'t caught. Bugs have real costs.',
          ],
          image:        '/explorer-assets/future-skills/l04-s2-spacecraft-bug.png',
          imageCaption: 'Bugs aren\'t just inconvenient. In real-world systems, they can cost millions — or lives.',
          vocab: [
            { word: 'crash',       definition: 'When a program stops running unexpectedly because of an error it can\'t handle. Caused by bugs the program has no recovery plan for.', audioPrompt: 'Crash — when a program stops running unexpectedly because of an error it can\'t handle. Caused by bugs the program has no recovery plan for.' },
            { word: 'consequence', definition: 'A result of an action. Bugs in important systems can have enormous consequences — lost money, lost data, even lost lives.', audioPrompt: 'Consequence — a result of an action. Bugs in important systems can have enormous consequences: lost money, lost data, even lost lives.' },
          ],
        },
        {
          type:          'magazine',
          section:       3,
          totalSections: 6,
          headline:      'Three Types of Bugs',
          paragraphs: [
            'Syntax errors: grammar mistakes — wrong punctuation, misspelled keywords. Caught instantly by the computer.',
            'Logic errors: code runs fine but produces wrong results. Dangerous. Runtime errors: program crashes partway through. Each type needs a different approach.',
          ],
          image:        '/explorer-assets/future-skills/l04-s3-three-bug-types.png',
          imageCaption: 'Syntax errors are loud and easy. Logic errors are silent and dangerous. Runtime errors strike mid-action.',
          vocab: [
            { word: 'syntax error', definition: 'A grammar mistake in code — like a misspelled keyword or missing punctuation. Usually caught instantly.', audioPrompt: 'Syntax error — a grammar mistake in code, like a misspelled keyword or missing punctuation. Usually caught instantly.' },
            { word: 'logic error',  definition: 'Code that runs fine but produces the wrong result. Hardest type of bug because there\'s no warning — the program just lies to you.', audioPrompt: 'Logic error — code that runs fine but produces the wrong result. Hardest type of bug because there\'s no warning; the program just lies to you.' },
          ],
        },
        {
          type:          'magazine',
          section:       4,
          totalSections: 6,
          headline:      'The Debugging Process',
          paragraphs: [
            'Professionals follow a process. Reproduce the bug consistently. Read the error message carefully — it\'s free information.',
            'Isolate the problem area. Form a specific hypothesis. Test the fix. Verify nothing else broke. Systematic — not random.',
          ],
          image:        '/explorer-assets/future-skills/l04-s4-detective-code.png',
          imageCaption: 'Reproduce. Read. Isolate. Hypothesize. Test. Verify. Six steps that turn debugging from luck into skill.',
          vocab: [
            { word: 'reproduce',  definition: 'To make a bug happen consistently on demand. The first step in fixing it — if you can\'t reproduce it, you can\'t confirm it\'s fixed.', audioPrompt: 'Reproduce — to make a bug happen consistently on demand. The first step in fixing it; if you can\'t reproduce it, you can\'t confirm it\'s fixed.' },
            { word: 'hypothesis', definition: 'A specific, testable theory about what\'s causing the bug. Good debugging requires you to form one before changing anything.', audioPrompt: 'Hypothesis — a specific, testable theory about what\'s causing the bug. Good debugging requires you to form one before changing anything.' },
          ],
        },
        {
          type:          'magazine',
          section:       5,
          totalSections: 6,
          headline:      'No Shotgun Debugging',
          paragraphs: [
            'There\'s a bad habit called "shotgun debugging" — randomly changing things hoping the error disappears.',
            'It wastes time, can introduce new bugs, and leaves you with no understanding. Bugs fixed by luck always come back.',
          ],
          image:        '/explorer-assets/future-skills/l04-s5-shotgun-vs-precise.png',
          imageCaption: 'Random changes might make the error disappear. They almost never fix the actual problem.',
          vocab: [
            { word: 'shotgun debugging', definition: 'Randomly changing code hoping the error disappears. A bad habit that wastes time and creates new bugs.', audioPrompt: 'Shotgun debugging — randomly changing code hoping the error disappears. A bad habit that wastes time and creates new bugs.' },
            { word: 'systematic',        definition: 'Following a clear process step by step instead of guessing. The mark of professional-grade debugging.', audioPrompt: 'Systematic — following a clear process step by step instead of guessing. The mark of professional-grade debugging.' },
          ],
        },
        {
          type:          'magazine',
          section:       6,
          totalSections: 6,
          headline:      'Bugs Are Puzzles',
          paragraphs: [
            'The best programmers see bugs as puzzles, not failures. Every bug is the code telling you something you don\'t understand yet.',
            'Finding that gap — between what you thought the code did and what it actually does — makes you a better programmer every time.',
          ],
          image:        '/explorer-assets/future-skills/l04-s6-bug-puzzle.png',
          imageCaption: 'Every bug solved is one piece of understanding gained. That\'s why senior engineers actually enjoy interesting bugs.',
          vocab: [
            { word: 'puzzle',        definition: 'A problem to be solved through careful thinking. The best programmers treat every bug as a puzzle worth understanding.', audioPrompt: 'Puzzle — a problem to be solved through careful thinking. The best programmers treat every bug as a puzzle worth understanding.' },
            { word: 'understanding', definition: 'Truly knowing how something works. The real goal of debugging — not just making the error message go away.', audioPrompt: 'Understanding — truly knowing how something works. The real goal of debugging, not just making the error message go away.' },
          ],
        },

        // PHASE 3 — INTERACTIVE
        {
          type:          'interactive',
          activityType:  'drag-match',
          instruction:   `Tap each card, then tap whether it's a good debugging approach or shotgun debugging!`,
          guideText:     `Good debugging is systematic — read the error, understand the cause, form a theory, test a fix. Shotgun debugging is random — change things and hope the error disappears. One builds knowledge. One wastes time and creates new problems. Can you tell the difference?`,
          columnHeaders: [`The Approach`, `Good Debugging or Shotgun?`],
          items: [
            { image: 'l04-game-good1.png',    label: `Read the error message carefully and search what it means before touching any code.`,                                                       correctMatch: 'good-debugging',    objectPosition: 'center 50%', matchPhrase: `Good debugging! Reading and understanding the error message before touching anything is the single most important habit in debugging. Error messages are the computer telling you exactly what went wrong and often pointing to the exact location. Most beginners skip this step and start changing things immediately — which is how small bugs turn into large ones. The error message is free information. A professional uses it first, every time.` },
            { image: 'l04-game-shotgun1.png', label: `Start randomly changing parts of the code one by one until the error message goes away.`,                                                  correctMatch: 'shotgun-debugging', objectPosition: 'center 50%', matchPhrase: `Shotgun debugging! Randomly changing things doesn't fix bugs — it hides them, creates new ones, and leaves you with no understanding of what the program is actually doing. If the error disappears after a random change, you still don't know why it appeared or whether it's truly fixed. Bugs fixed by luck come back. Bugs fixed by understanding don't. Never trade one for the other.` },
            { image: 'l04-game-good2.png',    label: `Reproduce the bug consistently, form a specific theory about what's causing it, then test one targeted fix.`,                             correctMatch: 'good-debugging',    objectPosition: 'center 50%', matchPhrase: `Good debugging! This is the professional process: reproduce consistently so you know when the fix works, form a specific hypothesis so your testing is focused, then test a single targeted change. Each step builds understanding. You're not just making the error message disappear — you're learning what the program actually does versus what you intended. That understanding is what prevents the same bug from appearing again.` },
            { image: 'l04-game-shotgun2.png', label: `Delete the broken section entirely and rewrite it from scratch without understanding why it failed.`,                                       correctMatch: 'shotgun-debugging', objectPosition: 'center 50%', matchPhrase: `Shotgun debugging! Deleting and rewriting without understanding why the code failed is one of the most common debugging mistakes. The bug exists because of a misunderstanding in your logic or knowledge — rewriting the code doesn't fix the misunderstanding, it just re-expresses it in new words. You'll write the same bug again, possibly in a different form. You must understand what went wrong before you can reliably fix it.` },
          ],
          buckets: [
            { id: 'good-debugging',    label: `🔍 Good Debugging`,    color: '#34D399' },
            { id: 'shotgun-debugging', label: `💥 Shotgun Debugging`, color: '#60A5FA' },
          ],
        },

        // PHASE 4 — MASTERY QUIZ
        {
          type:      'quiz',
          guideText: `Quiz time, {name}! Let's see what you've learned about debugging. Answer all 6 questions to earn your Bug Hunter badge!`,
          questions: [
            {
              format:       'multiple-choice',
              question:     `Where does the word 'bug' in programming come from?`,
              options:      [`It was invented by a programmer named Bug`, `A real moth found stuck inside a Harvard computer in 1947`, `The first computers looked like insects`, `It stands for 'Basic Unexpected Glitch'`],
              correctIndex: 1,
            },
            {
              format:       'multiple-choice',
              question:     `What is a logic error?`,
              options:      [`A spelling mistake in the code`, `Code that runs without crashing but produces the wrong result`, `An error that crashes the program immediately`, `A missing line of code`],
              correctIndex: 1,
            },
            {
              format:       'multiple-choice',
              question:     `What is the first step in debugging professionally?`,
              options:      [`Randomly change things until it works`, `Delete the broken code and start over`, `Reproduce the bug — make it happen consistently`, `Ask someone else to fix it`],
              correctIndex: 2,
            },
            {
              format:        'true-false',
              question:      `Finding and fixing bugs is one of the most important skills a programmer can have.`,
              correctAnswer: true,
            },
            {
              format:       'fill-blank',
              question:     `A coding error that causes a program to run but produce the wrong result — rather than crashing — is called a ___ error.`,
              options:      [`logic`, `syntax`, `runtime`, `network`],
              correctIndex: 0,
            },
            {
              format:       'multiple-choice',
              question:     `Why is 'shotgun debugging' — randomly changing things until the error disappears — considered a poor habit?`,
              options:      [`Because it always makes the bug worse`, `Because it wastes time and leaves you not understanding what actually went wrong`, `Because debugging tools block random changes`, `Because it takes longer than any other method`],
              correctIndex: 1,
            },
          ],
        },

        // PHASE 5 — REAL-WORLD CONNECTION
        {
          type:            'real-world',
          guideText:       `Next time something goes wrong — a recipe, a set of instructions, a plan — treat it like a debugging challenge: reproduce it, read the 'error,' form a theory, test a fix. The systematic approach works everywhere, not just in code.`,
          familyAdventure: `Play 'buggy instructions' at home. One person writes step-by-step instructions for a simple task — making a sandwich, tying shoes — but hides ONE deliberate bug somewhere. Everyone else follows the instructions exactly like a computer. No common sense allowed. Can they find the bug? Rotate who writes the instructions.`,
          creativePrompt:  `Here are three instructions with bugs. Find what's wrong with each: (1) To make toast: put bread in toaster, push lever, wait, spread butter, eat. [What's missing?] (2) To water a plant: get watering can, fill with water, pour on plant, put can away. [What's missing?] (3) To send a message: open the app, type message, click send. [What's missing?] Now write your own buggy instruction set and challenge a family member to find the bug.`,
        },

        // PHASE 6 — CELEBRATION
        {
          type:      'celebration',
          xpEarned:  50,
          badge:     'bug-hunter',
          badgeName: `Bug Hunter`,
          message:   `Brilliant work, {name}! You now know that every bug is a puzzle with a specific cause and a specific solution — and that patience and systematic thinking beat random guessing every single time. The best programmers in the world are the best debuggers. Byte is so proud to share this knowledge with you.`,
        },
      ],
    },
  ],
};

// Log on module load — confirms lesson wired correctly + verifies image assets at runtime
(() => {
  const l    = futureskills_explorer_l04_screens.lessons[0];
  const mags = l.screens.filter(s => s.type === 'magazine').length;
  const game = l.screens.find(s => s.type === 'interactive')?.items?.length || 0;
  const quiz = l.screens.find(s => s.type === 'quiz')?.questions?.length || 0;
  console.log(`[LESSON-FUTURESKILLS-L04] Loaded: "Debugging: Finding and Fixing Mistakes" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
  Promise.all([
    fetch('/explorer-assets/future-skills/l04-s1-first-bug-moth.png',     { method: 'HEAD' }),
    fetch('/explorer-assets/future-skills/l04-s2-spacecraft-bug.png',     { method: 'HEAD' }),
    fetch('/explorer-assets/future-skills/l04-s3-three-bug-types.png',    { method: 'HEAD' }),
    fetch('/explorer-assets/future-skills/l04-s4-detective-code.png',     { method: 'HEAD' }),
    fetch('/explorer-assets/future-skills/l04-s5-shotgun-vs-precise.png', { method: 'HEAD' }),
    fetch('/explorer-assets/future-skills/l04-s6-bug-puzzle.png',         { method: 'HEAD' }),
  ]).then(([r1, r2, r3, r4, r5, r6]) => {
    console.log(`[ASSET-CHECK-FUTURESKILLS-L04] first-bug-moth: ${r1.ok}, spacecraft-bug: ${r2.ok}, three-bug-types: ${r3.ok}, detective-code: ${r4.ok}, shotgun-vs-precise: ${r5.ok}, bug-puzzle: ${r6.ok}`);
  }).catch(() => {
    console.log('[ASSET-CHECK-FUTURESKILLS-L04] Could not verify image assets — network check failed');
  });
})();

export default futureskills_explorer_l04_screens;
