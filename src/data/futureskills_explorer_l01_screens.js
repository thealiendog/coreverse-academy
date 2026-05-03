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

        // PHASE 2 — MAGAZINE STORY (4 sections)
        {
          type:          'magazine',
          section:       1,
          totalSections: 4,
          headline:      `What Is Code?`,
          paragraphs: [
            `Code is a set of instructions written in a language computers can understand. Just like a building kit comes with a numbered instruction sheet telling you exactly where each piece goes, code tells a computer exactly what to do — step by step, line by line. There is no guesswork and no interpretation. Every instruction is followed precisely as written.`,
            `Computers are extraordinarily powerful — they can process millions of operations per second, store information perfectly, and run programs without ever getting tired. But they have one serious limitation: zero common sense. They do exactly what you tell them, nothing more and nothing less. If your instruction is wrong, the computer follows the wrong instruction perfectly. Being exact isn't optional — it's the foundation of everything in coding.`,
            `This is what makes coding both challenging and rewarding. When your code works, every instruction was precise enough for the computer to execute correctly. When it doesn't work — which happens constantly, even to professionals — it's almost always because a step was wrong, incomplete, or missing. Learning to write instructions with precision is the first and most important skill in all of programming.`,
          ],
          image:        '/explorer-assets/future-skills/l01-magazine-what-is-code.png',
          imageCaption: `Code — precise instructions written in a language computers can follow exactly, without guesswork or common sense`,
          vocab: [
            { word: `code`,    definition: `A set of precise instructions written in a language a computer can understand — code tells a computer exactly what to do, one step at a time, and computers follow it perfectly as written.`,    audioPrompt: `Code — a set of precise instructions written in a language a computer can understand. Code tells a computer exactly what to do, one step at a time, and computers follow it perfectly as written.` },
            { word: `program`, definition: `A complete set of coded instructions that a computer runs to perform a specific task — every app, game, and website you use is a program made of thousands or millions of lines of code.`, audioPrompt: `Program — a complete set of coded instructions that a computer runs to perform a specific task. Every app, game, and website you use is a program made of thousands or millions of lines of code.` },
          ],
        },
        {
          type:          'magazine',
          section:       2,
          totalSections: 4,
          headline:      `Programming Languages`,
          paragraphs: [
            `Just like humans communicate in different languages — English, Spanish, Mandarin, French — computers have their own set of languages called programming languages. Each has its own vocabulary and grammar rules, called syntax. Some are designed to be easy for beginners. Others are built for speed, for building specific types of software, or for working with particular systems. There are hundreds of programming languages in existence.`,
            `A few of the most widely used: Scratch is a beginner-friendly environment that uses visual building blocks instead of typing — a great place to start. Python is known for its clean, readable style and is used heavily for artificial intelligence, data science, and web applications. JavaScript powers almost every interactive element on every website. Swift is a modern language designed for building phone and tablet apps.`,
            `Each language has strengths and is best suited for different tasks. A data scientist might reach for Python. A web developer might write JavaScript every day. A mobile app developer might work primarily in Swift. Learning your first programming language teaches you fundamentals that carry across every other language — the core concepts stay the same even when the specific syntax changes.`,
          ],
          image:        '/explorer-assets/future-skills/l01-magazine-languages.png',
          imageCaption: `Programming languages — each with its own rules and strengths, each a different way to give computers precise instructions`,
          vocab: [
            { word: `programming language`, definition: `A formal language with its own rules and vocabulary that programmers use to write code — examples include Scratch, Python, JavaScript, and Swift, each suited to different types of tasks.`, audioPrompt: `Programming language — a formal language with its own rules and vocabulary that programmers use to write code. Examples include Scratch, Python, JavaScript, and Swift, each suited to different types of tasks.` },
            { word: `syntax`,               definition: `The grammar rules of a programming language — syntax defines exactly how code must be written for a computer to understand it. A single syntax mistake can stop an entire program from running.`, audioPrompt: `Syntax — the grammar rules of a programming language. Syntax defines exactly how code must be written for a computer to understand it. A single syntax mistake can stop an entire program from running.` },
          ],
        },
        {
          type:          'magazine',
          section:       3,
          totalSections: 4,
          headline:      `What Can You Build With Code?`,
          paragraphs: [
            `Code can build almost anything digital: websites, apps, games, robots, artificial intelligence systems, music software, medical devices, financial tools, and more. If it runs on a computer or uses digital processing, it was built with code. The scope of what software can create is nearly unlimited — and it expands every year as tools improve and hardware becomes more powerful.`,
            `Consider the range: a popular sandbox building game that lets millions of players create entire worlds was built with code. A popular photo-sharing app used by hundreds of millions of people was built with code. An automotive self-driving system that navigates real roads without a human driver is millions of lines of code running in real time. Even the rockets that carry satellites and explorers to space are guided by software written by engineers.`,
            `If you can imagine it and it involves a computer, code can build it. The difference between an idea and a finished product is the knowledge and work required to write the instructions. Every application you've ever used — every game you've played, every video you've watched, every message you've sent — was written line by line by someone who started learning to code exactly the way you're starting now.`,
          ],
          image:        '/explorer-assets/future-skills/l01-magazine-what-to-build.png',
          imageCaption: `What code can build — games, apps, robots, medical devices, and self-driving systems are all made from the same thing: instructions`,
          vocab: [
            { word: `software`,    definition: `Programs and instructions that run on a computer — software is what code becomes when it's written, compiled, and ready to use, from simple apps to complex artificial intelligence systems.`,                        audioPrompt: `Software — programs and instructions that run on a computer. Software is what code becomes when it's written, compiled, and ready to use, from simple apps to complex artificial intelligence systems.` },
            { word: `application`, definition: `A program designed for a specific purpose that a user can interact with — also called an app. Every app on a phone or computer is an application built from code written by one or more programmers.`, audioPrompt: `Application — a program designed for a specific purpose that a user can interact with, also called an app. Every app on a phone or computer is an application built from code written by one or more programmers.` },
          ],
        },
        {
          type:          'magazine',
          section:       4,
          totalSections: 4,
          headline:      `Anyone Can Learn to Code`,
          paragraphs: [
            `You do not need to be a math genius to learn to code. The most important qualities are curiosity, patience, and the ability to break big problems into smaller, manageable steps. Mathematics helps in some areas — particularly game development and data science — but the day-to-day reality of coding is far more about logic, problem-solving, and persistence than arithmetic.`,
            `The best professional programmers are not necessarily the smartest people in the room. They're the most persistent. Every working coder — no matter how experienced — spends significant time running into problems, searching for answers, making mistakes, and trying again. That process never stops. Getting comfortable with confusion and using it as a signal to learn more is one of the most important habits to build early.`,
            `The only real barrier to learning to code is deciding to start. Resources are widely available and many are completely free. Block-based coding tools were created specifically to lower the barrier to entry for beginners. Every professional coder started somewhere. The gap between where they are now and where you are right now is not talent — it's time and practice. Both are entirely within your control.`,
          ],
          image:        '/explorer-assets/future-skills/l01-magazine-anyone-can-code.png',
          imageCaption: `Anyone can learn to code — curiosity and persistence matter far more than math ability or natural talent`,
          vocab: [
            { word: `logic`,     definition: `The ability to think through a problem in a structured, step-by-step way — logical thinking is the core skill of programming, more important than math ability or memorizing syntax.`,      audioPrompt: `Logic — the ability to think through a problem in a structured, step-by-step way. Logical thinking is the core skill of programming, more important than math ability or memorizing syntax.` },
            { word: `precision`, definition: `The quality of being exact and accurate in every detail — precision is essential in coding because computers follow instructions exactly as written, with no ability to guess what you meant.`, audioPrompt: `Precision — the quality of being exact and accurate in every detail. Precision is essential in coding because computers follow instructions exactly as written, with no ability to guess what you meant.` },
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
    fetch('/explorer-assets/future-skills/l01-magazine-what-is-code.png',     { method: 'HEAD' }),
    fetch('/explorer-assets/future-skills/l01-magazine-languages.png',        { method: 'HEAD' }),
    fetch('/explorer-assets/future-skills/l01-magazine-what-to-build.png',    { method: 'HEAD' }),
    fetch('/explorer-assets/future-skills/l01-magazine-anyone-can-code.png',  { method: 'HEAD' }),
  ]).then(([r1, r2, r3, r4]) => {
    console.log(`[ASSET-CHECK-FUTURESKILLS-L01] what-is-code: ${r1.ok}, languages: ${r2.ok}, what-to-build: ${r3.ok}, anyone-can-code: ${r4.ok}`);
  }).catch(() => {
    console.log('[ASSET-CHECK-FUTURESKILLS-L01] Could not verify image assets — network check failed');
  });
})();

export default futureskills_explorer_l01_screens;
