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

        // PHASE 2 — MAGAZINE STORY (4 sections)
        {
          type:          'magazine',
          section:       1,
          totalSections: 4,
          headline:      `What Is a Bug?`,
          paragraphs: [
            `A bug is any error in a program that causes it to behave incorrectly. Bugs can be tiny — a single missing character that crashes the whole program — or massive logic errors that cause wrong calculations silently, without any obvious sign that something is wrong. A program can run without crashing and still be completely wrong in what it produces, which is often the hardest kind of bug to track down.`,
            `Some famous bugs have had enormous real-world consequences. A software bug caused a NASA spacecraft to be lost in 1999 because one engineering team used metric units and another used imperial units. Nobody caught the mismatch. A $327 million spacecraft — years of work — was destroyed over a unit conversion error in a few lines of code. Bugs are not abstract problems. They have real costs.`,
            `This is why professional programmers spend so much time on debugging — and why it's treated as a serious discipline rather than just "fixing mistakes." The quality of a software system depends entirely on how thoroughly its bugs are found and eliminated. A program that mostly works is not the same as a program that works. In safety-critical systems, the difference can be catastrophic.`,
          ],
          image:        '/explorer-assets/future-skills/l04-magazine-what-is-bug.png',
          imageCaption: `Bugs — errors that cause programs to behave incorrectly, ranging from tiny typos to logic flaws with serious real-world consequences`,
          vocab: [
            { word: `bug`,   definition: `An error in a program that causes it to behave incorrectly — bugs range from simple typos that crash programs immediately to subtle logic errors that produce wrong results without any obvious warning.`, audioPrompt: `Bug — an error in a program that causes it to behave incorrectly. Bugs range from simple typos that crash programs immediately to subtle logic errors that produce wrong results without any obvious warning.` },
            { word: `crash`, definition: `When a program stops running unexpectedly due to an error it cannot handle — crashes are caused by bugs that the program has no instructions to recover from.`,                                              audioPrompt: `Crash — when a program stops running unexpectedly due to an error it cannot handle. Crashes are caused by bugs that the program has no instructions to recover from.` },
          ],
        },
        {
          type:          'magazine',
          section:       2,
          totalSections: 4,
          headline:      `Types of Bugs`,
          paragraphs: [
            `There are three main types of bugs. Syntax errors are grammar mistakes — using the wrong spelling, punctuation, or structure in code. The computer usually catches these immediately when it tries to run the program, because the code doesn't follow the language's rules. A missing semicolon, a misspelled keyword, or a forgotten closing bracket can all cause syntax errors. They're the most common type for beginners, but also the easiest to fix once spotted.`,
            `Logic errors are harder and more dangerous. The code runs perfectly — no syntax errors, no crash — but it produces the wrong result. It's like telling a robot to "walk forward 5 steps" when you meant "walk forward 5 meters." The robot followed the instructions perfectly. The instructions were just wrong. Logic errors require you to think carefully about what the code is actually doing versus what you intended it to do.`,
            `Runtime errors crash the program while it's running — not when it starts, but partway through. Like trying to divide a number by zero, or accessing a file that doesn't exist. The program can't complete the instruction and has no recovery plan. Runtime errors are often caused by unexpected inputs or conditions the programmer didn't anticipate. Handling these gracefully — designing programs that recover from unexpected situations — is a hallmark of professional-grade software.`,
          ],
          image:        '/explorer-assets/future-skills/l04-magazine-types.png',
          imageCaption: `Three types of bugs — syntax errors, logic errors, and runtime errors, each requiring a different approach to find and fix`,
          vocab: [
            { word: `syntax error`, definition: `A bug caused by a grammar mistake in code — like a misspelled keyword or missing punctuation. Syntax errors are usually caught immediately because the computer can't understand code that breaks the language's rules.`, audioPrompt: `Syntax error — a bug caused by a grammar mistake in code, like a misspelled keyword or missing punctuation. Syntax errors are usually caught immediately because the computer can't understand code that breaks the language's rules.` },
            { word: `logic error`,  definition: `A bug where the code runs without crashing but produces the wrong result — logic errors happen when instructions are valid but incorrect, doing something different from what the programmer intended.`,                 audioPrompt: `Logic error — a bug where the code runs without crashing but produces the wrong result. Logic errors happen when instructions are valid but incorrect, doing something different from what the programmer intended.` },
          ],
        },
        {
          type:          'magazine',
          section:       3,
          totalSections: 4,
          headline:      `How to Debug`,
          paragraphs: [
            `Professional debuggers follow a systematic process. Step one: reproduce the bug — make it happen consistently. If you can't reproduce it reliably, you can't know when you've actually fixed it. Step two: read the error message carefully. Error messages tell you what went wrong and often point to the exact line of code. Most beginners skip this step and start changing things immediately. Don't — the error message is free information.`,
            `Step three: isolate the problem — narrow down which part of the code is causing the issue. Step four: form a hypothesis — what specifically do you think is wrong? Be precise: "I think the calculation on line 24 is using the wrong variable." Step five: test the fix. Step six: verify the fix didn't break anything else. Fixing one bug that creates three new ones is not progress.`,
            `Each of these steps is deliberate and methodical. The whole process is designed to build understanding — not just make the error message go away. A bug fixed through understanding stays fixed. A bug "fixed" by random guessing usually returns, often in a different form. Debugging is not a sign that you wrote bad code. It's the expected process by which all code becomes good code.`,
          ],
          image:        '/explorer-assets/future-skills/l04-magazine-how-to-debug.png',
          imageCaption: `How to debug — reproduce, read the error, isolate, hypothesize, fix, verify: a systematic process that builds real understanding`,
          vocab: [
            { word: `reproduce`,  definition: `To make a bug happen consistently on demand — the first step in professional debugging. You can't confirm a fix until you can reliably reproduce the bug and verify it no longer occurs.`, audioPrompt: `Reproduce — to make a bug happen consistently on demand. The first step in professional debugging. You can't confirm a fix until you can reliably reproduce the bug and verify it no longer occurs.` },
            { word: `hypothesis`, definition: `A specific, testable theory about what is causing a bug — forming a hypothesis focuses your debugging effort and prevents random guessing. A good hypothesis names exactly what you think is wrong and why.`, audioPrompt: `Hypothesis — a specific, testable theory about what is causing a bug. Forming a hypothesis focuses your debugging effort and prevents random guessing. A good hypothesis names exactly what you think is wrong and why.` },
          ],
        },
        {
          type:          'magazine',
          section:       4,
          totalSections: 4,
          headline:      `The Debugging Mindset`,
          paragraphs: [
            `The best programmers see bugs as puzzles, not failures. Every bug is the code telling you something you don't understand yet. When a bug appears, it means there's a gap between what you thought the code was doing and what it's actually doing. Finding that gap — and closing it — makes you a better programmer every single time. Experienced engineers actually get excited about interesting bugs because interesting bugs teach the most.`,
            `There's a common bad habit called "shotgun debugging" — randomly changing things hoping the error message disappears. This is almost always counterproductive. It wastes time, can introduce new bugs, and — even when it "works" — leaves you with no understanding of what went wrong. If the error disappears after a random change, you still don't know why it appeared or whether it's truly fixed. Shotgun debugging doesn't build knowledge; it delays it.`,
            `Senior engineers debug more slowly and methodically than beginners — not because they're worse, but because they've learned the value of the process. Read. Think. Hypothesize. Test. Each cycle, they understand the code a little better. The goal is not just to fix this specific bug — it's to understand the system well enough that bugs like this don't happen again. Patience and systematic thinking are the real superpowers in programming.`,
          ],
          image:        '/explorer-assets/future-skills/l04-magazine-mindset.png',
          imageCaption: `The debugging mindset — bugs as puzzles to understand, not failures to hide; systematic thinking beats random guessing every time`,
          vocab: [
            { word: `debugging`,  definition: `The systematic process of finding and fixing bugs in a program — professional debugging follows a structured approach of reproducing, isolating, hypothesizing, and testing rather than guessing.`, audioPrompt: `Debugging — the systematic process of finding and fixing bugs in a program. Professional debugging follows a structured approach of reproducing, isolating, hypothesizing, and testing rather than guessing.` },
            { word: `systematic`, definition: `Done according to a fixed plan or method, step by step — systematic debugging means following a process deliberately rather than changing things at random and hoping the problem disappears.`,       audioPrompt: `Systematic — done according to a fixed plan or method, step by step. Systematic debugging means following a process deliberately rather than changing things at random and hoping the problem disappears.` },
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
            { image: 'l04-game-good1.png',     label: `Read the error message carefully and search what it means before touching any code.`,                                                       correctMatch: 'good-debugging',    objectPosition: 'center 50%', matchPhrase: `Good debugging! Reading and understanding the error message before touching anything is the single most important habit in debugging. Error messages are the computer telling you exactly what went wrong and often pointing to the exact location. Most beginners skip this step and start changing things immediately — which is how small bugs turn into large ones. The error message is free information. A professional uses it first, every time.` },
            { image: 'l04-game-shotgun1.png',  label: `Start randomly changing parts of the code one by one until the error message goes away.`,                                                  correctMatch: 'shotgun-debugging', objectPosition: 'center 50%', matchPhrase: `Shotgun debugging! Randomly changing things doesn't fix bugs — it hides them, creates new ones, and leaves you with no understanding of what the program is actually doing. If the error disappears after a random change, you still don't know why it appeared or whether it's truly fixed. Bugs fixed by luck come back. Bugs fixed by understanding don't. Never trade one for the other.` },
            { image: 'l04-game-good2.png',     label: `Reproduce the bug consistently, form a specific theory about what's causing it, then test one targeted fix.`,                             correctMatch: 'good-debugging',    objectPosition: 'center 50%', matchPhrase: `Good debugging! This is the professional process: reproduce consistently so you know when the fix works, form a specific hypothesis so your testing is focused, then test a single targeted change. Each step builds understanding. You're not just making the error message disappear — you're learning what the program actually does versus what you intended. That understanding is what prevents the same bug from appearing again.` },
            { image: 'l04-game-shotgun2.png',  label: `Delete the broken section entirely and rewrite it from scratch without understanding why it failed.`,                                       correctMatch: 'shotgun-debugging', objectPosition: 'center 50%', matchPhrase: `Shotgun debugging! Deleting and rewriting without understanding why the code failed is one of the most common debugging mistakes. The bug exists because of a misunderstanding in your logic or knowledge — rewriting the code doesn't fix the misunderstanding, it just re-expresses it in new words. You'll write the same bug again, possibly in a different form. You must understand what went wrong before you can reliably fix it.` },
          ],
          buckets: [
            { id: 'good-debugging',    label: `🔍 Good Debugging`,     color: '#34D399' },
            { id: 'shotgun-debugging', label: `💥 Shotgun Debugging`,  color: '#60A5FA' },
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
    fetch('/explorer-assets/future-skills/l04-magazine-what-is-bug.png',   { method: 'HEAD' }),
    fetch('/explorer-assets/future-skills/l04-magazine-types.png',         { method: 'HEAD' }),
    fetch('/explorer-assets/future-skills/l04-magazine-how-to-debug.png',  { method: 'HEAD' }),
    fetch('/explorer-assets/future-skills/l04-magazine-mindset.png',       { method: 'HEAD' }),
  ]).then(([r1, r2, r3, r4]) => {
    console.log(`[ASSET-CHECK-FUTURESKILLS-L04] what-is-bug: ${r1.ok}, types: ${r2.ok}, how-to-debug: ${r3.ok}, mindset: ${r4.ok}`);
  }).catch(() => {
    console.log('[ASSET-CHECK-FUTURESKILLS-L04] Could not verify image assets — network check failed');
  });
})();

export default futureskills_explorer_l04_screens;
