// ============================================================
// COREVERSE EXPLORERS — Future Skills · Lesson 2
// "Algorithms: Step-by-Step Instructions"
// Ages 6–8 | Guide: Byte | ExplorerLessonPlayer format
// ============================================================

const futureskills_explorer_l02_screens = {
  ageBand:   'explorers',
  subjectId: 'future-skills',
  guide:     'byte',
  lessons: [
    {
      id:        'fs-6-8-02',
      title:     `Algorithms: Step-by-Step Instructions`,
      duration:  12,
      xpReward:  50,
      badge:     'algorithm-architect',
      badgeName: `Algorithm Architect`,
      screens: [
        // PHASE 1 — WELCOME
        {
          type:      'welcome',
          guideText: `Every morning you probably do the same things in the same order — wake up, brush teeth, eat breakfast, get dressed. Without thinking about it, you're following an algorithm. Algorithms are everywhere, and they're the foundation of all computer science.`,
        },

        // PHASE 2 — MAGAZINE STORY (4 sections)
        {
          type:          'magazine',
          section:       1,
          totalSections: 4,
          headline:      `What Is an Algorithm?`,
          paragraphs: [
            `An algorithm is a finite set of well-defined instructions for solving a problem or completing a task. The key word is precise — every step must be clear enough that anyone (or any computer) following it gets exactly the same result. Algorithms are not mysterious or complicated by nature. A recipe is an algorithm. Directions to a friend's house are an algorithm. The steps for long division are an algorithm.`,
            `What makes something an algorithm rather than just a vague plan? Three things: the steps are specific enough that there's no ambiguity about what to do next, the process makes progress toward a defined goal with each step, and it eventually reaches a conclusion rather than running forever. Whenever you have a repeatable process with clear steps and a defined end, you have an algorithm.`,
            `The reason algorithms matter so much in computing is that computers can only follow instructions — they cannot figure things out for themselves. Every computer program is built from algorithms: structured sequences of precise instructions that tell the machine exactly what to do in what order. When you write code, you are translating your algorithm into a language the computer can execute.`,
          ],
          image:        '/explorer-assets/future-skills/l02-magazine-what-is-algorithm.png',
          imageCaption: `An algorithm — a precise, finite, step-by-step process that always produces the same result when followed correctly`,
          vocab: [
            { word: `algorithm`, definition: `A precise, finite, step-by-step set of instructions for solving a problem — algorithms must be unambiguous, make progress toward a goal, and eventually reach a conclusion.`, audioPrompt: `Algorithm — a precise, finite, step-by-step set of instructions for solving a problem. Algorithms must be unambiguous, make progress toward a goal, and eventually reach a conclusion.` },
            { word: `finite`,    definition: `Having a definite end — a finite algorithm always terminates rather than running forever. An algorithm that never ends is not a valid algorithm.`,                              audioPrompt: `Finite — having a definite end. A finite algorithm always terminates rather than running forever. An algorithm that never ends is not a valid algorithm.` },
          ],
        },
        {
          type:          'magazine',
          section:       2,
          totalSections: 4,
          headline:      `Properties of a Good Algorithm`,
          paragraphs: [
            `A good algorithm has four essential properties. First, it has a clear starting point — you know exactly where to begin. Second, each step is precise and unambiguous — there is only one way to interpret it. Third, it makes progress toward a goal with every step — it doesn't run in place or circle back forever. Fourth, it eventually ends — every algorithm must reach a conclusion.`,
            `A bad algorithm fails on at least one of these properties. "Add some salt" fails on precision — how much is some? A process that keeps checking a condition but never changes it runs forever without termination. "Do something until it feels right" fails on both precision and a clear ending. Computer algorithms must be flawless — a single unclear step can crash an entire program or produce wrong results without any warning.`,
            `These requirements might seem strict — and they are. But that strictness is exactly what makes algorithms so powerful. Because every step is precisely defined and the process always ends, an algorithm that works once will work the same way every time, on any machine, followed by any person or computer. Reliability and repeatability are built into the concept itself.`,
          ],
          image:        '/explorer-assets/future-skills/l02-magazine-properties.png',
          imageCaption: `Properties of a good algorithm — clear start, unambiguous steps, forward progress, and a definite end`,
          vocab: [
            { word: `unambiguous`, definition: `Having only one possible interpretation — each step of a good algorithm is unambiguous, meaning anyone following it will understand it the same way and produce the same result.`, audioPrompt: `Unambiguous — having only one possible interpretation. Each step of a good algorithm is unambiguous, meaning anyone following it will understand it the same way and produce the same result.` },
            { word: `termination`, definition: `The property of eventually ending — a valid algorithm must always reach a conclusion. A process that runs forever without stopping is not a proper algorithm.`,               audioPrompt: `Termination — the property of eventually ending. A valid algorithm must always reach a conclusion. A process that runs forever without stopping is not a proper algorithm.` },
          ],
        },
        {
          type:          'magazine',
          section:       3,
          totalSections: 4,
          headline:      `Algorithms in Everyday Life`,
          paragraphs: [
            `Algorithms run far more of your life than you probably realize. When a search engine shows you results, an algorithm decided which ones to show first — ranking billions of pages in milliseconds based on patterns in what you typed. When a music streaming app recommends a new song, an algorithm analyzed your listening history and predicted what you'd enjoy next. When a traffic light changes, an algorithm controls the timing based on traffic flow patterns.`,
            `Video platforms use algorithms to decide what you'd probably want to watch next. Navigation apps use algorithms to calculate the fastest route to your destination, recalculating in real time when there's traffic or a road closure. Every time you interact with any digital system that makes a decision or shows you content, an algorithm is running behind the scenes.`,
            `The algorithms behind recommendation systems are some of the most influential ever built. They shape what news people read, what products they buy, and what ideas they encounter. Understanding that these recommendations are algorithmic outputs — not objective truths — is one of the most important pieces of digital literacy a person can have. Algorithms serve whoever designed them. Knowing that changes how you see every recommendation.`,
          ],
          image:        '/explorer-assets/future-skills/l02-magazine-everyday-life.png',
          imageCaption: `Algorithms in everyday life — search results, traffic lights, music recommendations, and navigation all run on them`,
          vocab: [
            { word: `recommendation`, definition: `A suggestion produced by an algorithm based on data — recommendation algorithms analyze patterns in your behavior to predict what you might want to see, hear, or buy next.`, audioPrompt: `Recommendation — a suggestion produced by an algorithm based on data. Recommendation algorithms analyze patterns in your behavior to predict what you might want to see, hear, or buy next.` },
            { word: `automation`,     definition: `Using algorithms or machines to perform tasks without human action each time — automation is what allows digital systems to make millions of decisions per second without anyone manually directing each one.`, audioPrompt: `Automation — using algorithms or machines to perform tasks without human action each time. Automation is what allows digital systems to make millions of decisions per second without anyone manually directing each one.` },
          ],
        },
        {
          type:          'magazine',
          section:       4,
          totalSections: 4,
          headline:      `Flowcharts: Drawing Algorithms`,
          paragraphs: [
            `Before professional programmers write a single line of code, many of them draw their algorithm as a flowchart. A flowchart is a visual diagram that maps out every step and decision in a process using standard shapes. Ovals mark the start and end. Rectangles contain process steps — actions the program takes. Diamonds contain decision points — yes/no questions that branch the flow in different directions. Arrows connect everything.`,
            `Flowcharts make it easier to spot logical problems before you've invested time writing code. If you draw out your algorithm and discover that one branch of a decision never reaches an end point, or that two steps are in the wrong order, you can fix it on paper in seconds rather than hunting for the error in dozens of lines of code later. Planning before coding is one of the most consistently valuable professional habits.`,
            `A well-drawn flowchart can also be shared with someone who doesn't know how to code at all, so they can check whether the logic makes sense. This is why flowcharts remain in common use even among experienced engineers: they communicate intent clearly, bridge the gap between human thinking and computer execution, and serve as documentation for how a program is supposed to work.`,
          ],
          image:        '/explorer-assets/future-skills/l02-magazine-flowcharts.png',
          imageCaption: `Flowcharts — visual diagrams that map algorithms using shapes and arrows, making logic easier to spot and check`,
          vocab: [
            { word: `flowchart`,     definition: `A visual diagram that maps out an algorithm using shapes — ovals for start and end, rectangles for steps, diamonds for decisions, and arrows showing the direction of flow.`, audioPrompt: `Flowchart — a visual diagram that maps out an algorithm using shapes. Ovals for start and end, rectangles for steps, diamonds for decisions, and arrows showing the direction of flow.` },
            { word: `decision point`, definition: `A step in an algorithm where the path branches based on a yes/no condition — represented by a diamond in a flowchart, a decision point directs the process in different directions depending on the answer.`, audioPrompt: `Decision point — a step in an algorithm where the path branches based on a yes or no condition. Represented by a diamond in a flowchart, it directs the process in different directions depending on the answer.` },
          ],
        },

        // PHASE 3 — INTERACTIVE
        {
          type:          'interactive',
          activityType:  'drag-match',
          instruction:   `Tap each card, then tap whether it's a real algorithm or not!`,
          guideText:     `A real algorithm has precise steps, makes progress toward a goal, and eventually ends. A vague instruction with no measurable steps or no defined conclusion is not an algorithm — it's just a guess. Can you spot the difference?`,
          columnHeaders: [`The Instructions`, `Algorithm or Not?`],
          items: [
            { image: 'l02-game-recipe.png',      label: `Combine the flour, two eggs, and one cup of milk. Stir until smooth. Pour into a pan. Bake at 180°C for 25 minutes. Remove when golden.`,                               correctMatch: 'algorithm',     objectPosition: 'center 50%', matchPhrase: `Algorithm! Every property is met. There's a clear starting point — combine the ingredients. Every step is precise: specific amounts, specific temperature, specific timing. Each step moves toward a finished result. And it ends when the food is ready. Any cook following these exact instructions will produce the same result every time. Precision, a defined end, and clear steps — that's an algorithm.` },
            { image: 'l02-game-vague1.png',      label: `Cook it for a while until it seems about ready and looks done enough.`,                                                                                                correctMatch: 'not-algorithm', objectPosition: 'center 50%', matchPhrase: `Not an algorithm! This is a vague intention dressed up as a step. "Cook for a while" has no duration. "Seems about ready" has no measurable definition. "Looks done enough" is different for every person. A good algorithm leaves nothing to interpretation. Every step must be clear enough that two different people — or two different computers — following it arrive at exactly the same outcome. This instruction fails that test completely.` },
            { image: 'l02-game-directions.png',  label: `Exit the front door. Turn left. Walk exactly three blocks. Turn right at the red letterbox. The blue house is the second building on the right.`,                      correctMatch: 'algorithm',     objectPosition: 'center 50%', matchPhrase: `Algorithm! There's a starting point — your front door. Every step is unambiguous and specific: turn left, walk exactly three blocks, turn right at a recognizable landmark. Each step makes progress. And it ends when you arrive. Two different people following these directions would end up in exactly the same place. Precision, direction, and a clear finish — that's an algorithm doing exactly what it should.` },
            { image: 'l02-game-vague2.png',      label: `Head roughly in that direction and look around until you find something that looks like the right place.`,                                                               correctMatch: 'not-algorithm', objectPosition: 'center 50%', matchPhrase: `Not an algorithm! "Head roughly in that direction" gives no precise starting action. "Look around until you find something" has no defined condition for success. Two people following this could end up in completely different places. Algorithms are designed to be repeatable and unambiguous. Whenever a step leaves the follower guessing about what to do or when to stop, you've left algorithm territory and entered guesswork.` },
          ],
          buckets: [
            { id: 'algorithm',     label: `✅ Algorithm`,         color: '#34D399' },
            { id: 'not-algorithm', label: `❌ Not an Algorithm`,  color: '#60A5FA' },
          ],
        },

        // PHASE 4 — MASTERY QUIZ
        {
          type:      'quiz',
          guideText: `Quiz time, {name}! Let's see what you've learned about algorithms. Answer all 6 questions to earn your Algorithm Architect badge!`,
          questions: [
            {
              format:       'multiple-choice',
              question:     `What is an algorithm?`,
              options:      [`A type of computer hardware`, `A precise, step-by-step set of instructions for solving a problem`, `A programming language for beginners`, `A math formula`],
              correctIndex: 1,
            },
            {
              format:       'multiple-choice',
              question:     `What shape represents a decision in a flowchart?`,
              options:      [`A rectangle`, `An oval`, `A diamond`, `A circle`],
              correctIndex: 2,
            },
            {
              format:       'multiple-choice',
              question:     `Which of the following is a real-life example of an algorithm?`,
              options:      [`A random guess`, `A recipe, directions, traffic light timing, or search engine results`, `A computer's hardware`, `The internet itself`],
              correctIndex: 1,
            },
            {
              format:        'true-false',
              question:      `A valid algorithm must eventually reach a conclusion — a process that repeats forever without ending is not a proper algorithm.`,
              correctAnswer: true,
            },
            {
              format:       'fill-blank',
              question:     `A visual diagram that maps out an algorithm using shapes and arrows is called a ___.`,
              options:      [`flowchart`, `spreadsheet`, `table`, `blueprint`],
              correctIndex: 0,
            },
            {
              format:       'multiple-choice',
              question:     `Why must every step in an algorithm be unambiguous?`,
              options:      [`Because ambiguous steps run slower`, `So that anyone — or any computer — following it gets the same result every time`, `Because vague steps look less professional`, `So the algorithm is easier to memorize`],
              correctIndex: 1,
            },
          ],
        },

        // PHASE 5 — REAL-WORLD CONNECTION
        {
          type:            'real-world',
          guideText:       `Write your morning routine as an algorithm — every single step, as precisely as you can — then hand it to a family member to follow exactly. Every step that's unclear reveals a flaw in your algorithm.`,
          familyAdventure: `Pick a board game your family knows well — chess, checkers, or even Go Fish. Write out the complete rules as an algorithm, step by step. Then give your algorithm to someone who has never played the game and see if they can play correctly using only your instructions. What did you miss?`,
          creativePrompt:  `Write out your complete morning routine as an algorithm — every single step from waking up to leaving for school. Be as precise as possible. Include decisions (if it's raining, bring an umbrella). Draw it as a flowchart with shapes. Then swap with a family member and try to follow their algorithm exactly. Did anything get missed or go wrong?`,
        },

        // PHASE 6 — CELEBRATION
        {
          type:      'celebration',
          xpEarned:  50,
          badge:     'algorithm-architect',
          badgeName: `Algorithm Architect`,
          message:   `Brilliant work, {name}! You now know that an algorithm is any precise, step-by-step process that always produces the same result — and that they run everything from traffic lights to search results. Once you can see algorithms everywhere, you start to understand how the world actually works. Byte is so proud to share this knowledge with you.`,
        },
      ],
    },
  ],
};

// Log on module load — confirms lesson wired correctly + verifies image assets at runtime
(() => {
  const l    = futureskills_explorer_l02_screens.lessons[0];
  const mags = l.screens.filter(s => s.type === 'magazine').length;
  const game = l.screens.find(s => s.type === 'interactive')?.items?.length || 0;
  const quiz = l.screens.find(s => s.type === 'quiz')?.questions?.length || 0;
  console.log(`[LESSON-FUTURESKILLS-L02] Loaded: "Algorithms: Step-by-Step Instructions" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
  Promise.all([
    fetch('/explorer-assets/future-skills/l02-magazine-what-is-algorithm.png', { method: 'HEAD' }),
    fetch('/explorer-assets/future-skills/l02-magazine-properties.png',        { method: 'HEAD' }),
    fetch('/explorer-assets/future-skills/l02-magazine-everyday-life.png',     { method: 'HEAD' }),
    fetch('/explorer-assets/future-skills/l02-magazine-flowcharts.png',        { method: 'HEAD' }),
  ]).then(([r1, r2, r3, r4]) => {
    console.log(`[ASSET-CHECK-FUTURESKILLS-L02] what-is-algorithm: ${r1.ok}, properties: ${r2.ok}, everyday-life: ${r3.ok}, flowcharts: ${r4.ok}`);
  }).catch(() => {
    console.log('[ASSET-CHECK-FUTURESKILLS-L02] Could not verify image assets — network check failed');
  });
})();

export default futureskills_explorer_l02_screens;
