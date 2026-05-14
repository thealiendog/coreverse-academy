// ============================================================
// COREVERSE EXPLORERS — Future Skills · Lesson 1
// "What Is Coding?"
// Ages 6–8 | Guide: Byte | ExplorerLessonPlayer format
// ============================================================

const futureskills_explorer_l01_screens = {
  ageBand:   'explorers',
  subjectId: 'future-skills',
  guide:     'byte',
  lessons: [
    {
      id:        'fs-6-8-01',
      title:     `What Is Coding?`,
      duration:  12,
      xpReward:  50,
      badge:     'code-curious',
      badgeName: `Code Curious`,
      screens: [
        // PHASE 1 — WELCOME
        {
          type:      'welcome',
          guideText: `Every app on your phone, every video game you've played, every website you've visited — someone wrote instructions to make it work. Those instructions are called code. And here's the secret: code is just a language. And like any language, you can learn it.`,
        },

        // PHASE 2 — MAGAZINE STORY (6 sections)
        {
          type:          'magazine',
          section:       1,
          totalSections: 6,
          headline:      'Code Is Instructions',
          paragraphs: [
            'Every app, game, and website you\'ve ever used was built from instructions called code.',
            'Code tells a computer exactly what to do, step by step. There\'s no guesswork. The computer follows every instruction perfectly.',
          ],
          image:        '/explorer-assets/future-skills/l01-s1-instructions.png',
          imageCaption: 'Code is just a list of instructions — every program in the world is built from them',
          vocab: [
            { word: 'code',        definition: 'A set of instructions a computer can follow exactly. Every program is made of code.', audioPrompt: 'Code — a set of instructions a computer can follow exactly. Every program is made of code.' },
            { word: 'instruction', definition: 'A single step that tells the computer what to do. Programs are built from thousands of instructions strung together.', audioPrompt: 'Instruction — a single step that tells the computer what to do. Programs are built from thousands of instructions strung together.' },
          ],
        },
        {
          type:          'magazine',
          section:       2,
          totalSections: 6,
          headline:      'Computers Have No Common Sense',
          paragraphs: [
            'Computers are extremely powerful — they can do millions of things per second. But they have ZERO common sense.',
            'They do exactly what you tell them. If your instruction is wrong, the computer follows the wrong instruction perfectly. Precision matters more than anything.',
          ],
          image:        '/explorer-assets/future-skills/l01-s2-no-common-sense.png',
          imageCaption: 'A computer will follow a wrong instruction just as faithfully as a right one. Precision is everything.',
          vocab: [
            { word: 'precision', definition: 'Being exact in every detail. The single most important habit in coding — computers can\'t guess what you meant.', audioPrompt: 'Precision — being exact in every detail. The single most important habit in coding, because computers can\'t guess what you meant.' },
            { word: 'bug',       definition: 'A mistake in code that makes the program behave wrong. Even professionals create bugs every single day.', audioPrompt: 'Bug — a mistake in code that makes the program behave wrong. Even professionals create bugs every single day.' },
          ],
        },
        {
          type:          'magazine',
          section:       3,
          totalSections: 6,
          headline:      'Many Languages, One Idea',
          paragraphs: [
            'Just like humans speak different languages, computers have their own languages called programming languages.',
            'There are hundreds. Each has its own rules (called syntax) and is built for different jobs. But they all give instructions.',
          ],
          image:        '/explorer-assets/future-skills/l01-s3-many-languages.png',
          imageCaption: 'Hundreds of programming languages exist. Different syntax, same underlying idea: tell the computer what to do.',
          vocab: [
            { word: 'programming language', definition: 'A language used to write code — like Python, JavaScript, or Swift. Each has its own rules and strengths.', audioPrompt: 'Programming language — a language used to write code, like Python, JavaScript, or Swift. Each has its own rules and strengths.' },
            { word: 'syntax',               definition: 'The grammar rules of a programming language. One wrong character can stop a whole program from running.', audioPrompt: 'Syntax — the grammar rules of a programming language. One wrong character can stop a whole program from running.' },
          ],
        },
        {
          type:          'magazine',
          section:       4,
          totalSections: 6,
          headline:      'Beginner-Friendly Tools',
          paragraphs: [
            'Scratch uses colorful drag-and-drop blocks instead of typing. Great for first-time coders building games and animations.',
            'Python is text-based but written almost like plain English. Used everywhere from AI to data science. Most universities teach it first.',
          ],
          image:        '/explorer-assets/future-skills/l01-s4-blocks-vs-text.png',
          imageCaption: 'Scratch teaches the ideas without typing. Python is where most professional coders begin.',
          vocab: [
            { word: 'block-based coding', definition: 'Building code by snapping visual blocks together. Scratch is the most famous example. No typing needed.', audioPrompt: 'Block-based coding — building code by snapping visual blocks together. Scratch is the most famous example. No typing needed.' },
            { word: 'text-based coding',  definition: 'Writing code as typed text. Python, JavaScript, and Swift are all text-based languages.', audioPrompt: 'Text-based coding — writing code as typed text. Python, JavaScript, and Swift are all text-based languages.' },
          ],
        },
        {
          type:          'magazine',
          section:       5,
          totalSections: 6,
          headline:      'What Code Can Build',
          paragraphs: [
            'Code can build almost anything digital: websites, apps, games, robots, AI, medical devices, even rockets.',
            'That sandbox game with millions of players — code. The photo app used by hundreds of millions — code. Self-driving cars — code.',
          ],
          image:        '/explorer-assets/future-skills/l01-s5-what-code-builds.png',
          imageCaption: 'Every digital thing in your life was written, line by line, by someone',
          vocab: [
            { word: 'software',    definition: 'Programs that run on a computer. Apps, games, operating systems — all software, all built from code.', audioPrompt: 'Software — programs that run on a computer. Apps, games, operating systems, all software, all built from code.' },
            { word: 'application', definition: 'A program built for a specific use — also called an "app." Every icon on your phone is an application.', audioPrompt: 'Application — a program built for a specific use, also called an app. Every icon on your phone is an application.' },
          ],
        },
        {
          type:          'magazine',
          section:       6,
          totalSections: 6,
          headline:      'Anyone Can Learn',
          paragraphs: [
            'You don\'t need to be a math genius. The real skills are curiosity, patience, and breaking big problems into smaller steps.',
            'The best coders aren\'t necessarily the smartest. They\'re the most persistent. Every working coder runs into problems daily — they just keep going.',
          ],
          image:        '/explorer-assets/future-skills/l01-s6-anyone-can-learn.png',
          imageCaption: 'Coding rewards persistence over talent. The gap between you and a pro coder is time and practice — both of which you control.',
          vocab: [
            { word: 'persistence', definition: 'Continuing even when things are hard or confusing. The single most important quality in any working coder.', audioPrompt: 'Persistence — continuing even when things are hard or confusing. The single most important quality in any working coder.' },
            { word: 'logic',       definition: 'Thinking through problems in a clear, step-by-step way. Logic matters more in coding than memorizing syntax or doing math.', audioPrompt: 'Logic — thinking through problems in a clear, step-by-step way. Logic matters more in coding than memorizing syntax or doing math.' },
          ],
        },

        // PHASE 3 — INTERACTIVE
        {
          type:          'interactive',
          activityType:  'drag-match',
          instruction:   `Tap each card, then tap which programming language it describes!`,
          guideText:     `Every programming language has its own style and is best suited for different kinds of projects. Some are built for beginners. Some power websites. Some build apps. Some analyze data and build AI. Can you match each description to the right language?`,
          columnHeaders: [`The Description`, `Which Language Is It?`],
          items: [
            { image: 'l01-game-scratch.png',    label: `A beginner-friendly environment using colorful drag-and-drop blocks — no typing required. Great for building games and animations.`,                    correctMatch: 'scratch',    objectPosition: 'center 50%', matchPhrase: `Scratch! Scratch was created specifically to help beginners understand coding concepts without needing to type. You drag and drop colorful blocks that represent real programming ideas — loops, conditionals, sequences — and snap them together like puzzle pieces. It runs free in any browser and has been used by millions of young coders to build their first games, stories, and animations. Many professional developers started right here.` },
            { image: 'l01-game-python.png',     label: `A clean, easy-to-read language used by professionals to build smart apps and analyze huge amounts of information.`,                                   correctMatch: 'python',     objectPosition: 'center 50%', matchPhrase: `Python! Python's rules are designed to be readable — almost like plain English — which makes it easier to learn than many other languages. It's used everywhere: data science, artificial intelligence, machine learning, web development, and automation. Many universities teach it as a first text-based language, and it powers tools used by scientists, researchers, and engineers every single day.` },
            { image: 'l01-game-javascript.png', label: `The language that runs inside web browsers and makes buttons click, games play, and websites come alive.`,                                            correctMatch: 'javascript', objectPosition: 'center 50%', matchPhrase: `JavaScript! Almost every website you visit uses JavaScript — it's what makes buttons respond when you click them, animations play, games run in a browser, and content update without reloading the page. While other languages can power websites from behind the scenes, JavaScript uniquely runs directly inside the browser on your device. It's one of the most widely used programming languages on the entire planet.` },
            { image: 'l01-game-swift.png',      label: `A modern language designed for building phone and tablet apps, known for being fast and safe to write.`,                                            correctMatch: 'swift',      objectPosition: 'center 50%', matchPhrase: `Swift! Swift was designed to be a modern, powerful, and safe language for building phone and tablet apps. Its clear, readable syntax and built-in safety features help prevent common programming errors before they happen. It builds on decades of programming language research to be faster and more reliable than older alternatives. If you've ever used an app on a phone or tablet, there's a good chance some of it was written in Swift.` },
          ],
          buckets: [
            { id: 'scratch',    label: `🐱 Scratch`,    color: '#F59E0B' },
            { id: 'python',     label: `🐍 Python`,     color: '#34D399' },
            { id: 'javascript', label: `🌐 JavaScript`, color: '#60A5FA' },
            { id: 'swift',      label: `📱 Swift`,      color: '#818CF8' },
          ],
        },

        // PHASE 4 — MASTERY QUIZ
        {
          type:      'quiz',
          guideText: `Quiz time, {name}! Let's see what you've learned about coding. Answer all 6 questions to earn your Code Curious badge!`,
          questions: [
            {
              format:       'multiple-choice',
              question:     `What is code?`,
              options:      [`A secret message`, `A set of precise instructions written in a language computers can understand`, `The hardware inside a computer`, `A type of math problem`],
              correctIndex: 1,
            },
            {
              format:       'multiple-choice',
              question:     `Why do computers need such precise instructions?`,
              options:      [`Because they are slow`, `Because they are expensive`, `Because computers have no common sense — they do exactly what you tell them, nothing more`, `Because programming languages are complicated`],
              correctIndex: 2,
            },
            {
              format:       'multiple-choice',
              question:     `Name one programming language used by beginners.`,
              options:      [`HTML only`, `Scratch`, `Machine code`, `Binary`],
              correctIndex: 1,
            },
            {
              format:        'true-false',
              question:      `Curiosity, patience, and breaking big problems into small steps matter more than being a math genius when learning to code.`,
              correctAnswer: true,
            },
            {
              format:       'fill-blank',
              question:     `A set of instructions written in a language a computer can understand is called ___.`,
              options:      [`code`, `hardware`, `a database`, `a network`],
              correctIndex: 0,
            },
            {
              format:       'multiple-choice',
              question:     `What makes computers different from humans when following instructions?`,
              options:      [`Computers are much slower at following instructions`, `Computers follow instructions exactly with no common sense`, `Computers can only understand one programming language`, `Computers double-check every instruction before running it`],
              correctIndex: 1,
            },
          ],
        },

        // PHASE 5 — REAL-WORLD CONNECTION
        {
          type:            'real-world',
          guideText:       `Try giving a family member step-by-step instructions for a simple task and see what happens when you leave out one detail. That gap between what you meant and what they did — that's exactly what computers experience with every line of code.`,
          familyAdventure: `Go to scratch.mit.edu together — it's completely free. Spend 20 minutes exploring. Try to make a sprite (character) move across the screen using the block-based coding system. You don't need to know anything — just drag, drop, and experiment. See what you can make!`,
          creativePrompt:  `Play 'Human Robot' with a family member. One person is the robot — they can only do EXACTLY what they're told, nothing more. The other person gives step-by-step instructions for a simple task. Be as precise as possible. What happens when instructions are vague? That's exactly how computers experience code.`,
        },

        // PHASE 6 — CELEBRATION
        {
          type:      'celebration',
          xpEarned:  50,
          badge:     'code-curious',
          badgeName: `Code Curious`,
          message:   `Brilliant work, {name}! You now know that code is just a language — and like any language, it can be learned by anyone patient and curious enough to try. Every app, game, and website you've ever used was built one instruction at a time by someone who started exactly where you are. Byte is so proud to share this knowledge with you.`,
        },
      ],
    },
  ],
};

// Log on module load — confirms lesson wired correctly + verifies image assets at runtime
(() => {
  const l    = futureskills_explorer_l01_screens.lessons[0];
  const mags = l.screens.filter(s => s.type === 'magazine').length;
  const game = l.screens.find(s => s.type === 'interactive')?.items?.length || 0;
  const quiz = l.screens.find(s => s.type === 'quiz')?.questions?.length || 0;
  console.log(`[LESSON-FUTURESKILLS-L01] Loaded: "What Is Coding?" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
  Promise.all([
    fetch('/explorer-assets/future-skills/l01-s1-instructions.png',    { method: 'HEAD' }),
    fetch('/explorer-assets/future-skills/l01-s2-no-common-sense.png', { method: 'HEAD' }),
    fetch('/explorer-assets/future-skills/l01-s3-many-languages.png',  { method: 'HEAD' }),
    fetch('/explorer-assets/future-skills/l01-s4-blocks-vs-text.png',  { method: 'HEAD' }),
    fetch('/explorer-assets/future-skills/l01-s5-what-code-builds.png', { method: 'HEAD' }),
    fetch('/explorer-assets/future-skills/l01-s6-anyone-can-learn.png', { method: 'HEAD' }),
  ]).then(([r1, r2, r3, r4, r5, r6]) => {
    console.log(`[ASSET-CHECK-FUTURESKILLS-L01] instructions: ${r1.ok}, no-common-sense: ${r2.ok}, many-languages: ${r3.ok}, blocks-vs-text: ${r4.ok}, what-code-builds: ${r5.ok}, anyone-can-learn: ${r6.ok}`);
  }).catch(() => {
    console.log('[ASSET-CHECK-FUTURESKILLS-L01] Could not verify image assets — network check failed');
  });
})();

export default futureskills_explorer_l01_screens;
