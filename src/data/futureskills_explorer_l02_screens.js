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

        // PHASE 2 — MAGAZINE STORY (6 sections)
        {
          type:          'magazine',
          section:       1,
          totalSections: 6,
          headline:      `What's an Algorithm?`,
          paragraphs: [
            `An algorithm is a set of precise, step-by-step instructions for solving a problem or completing a task. A recipe is an algorithm. Directions to a friend's house are an algorithm. The steps for long division are an algorithm.`,
            `What makes something an algorithm? The steps are specific enough that there's no ambiguity, the process makes progress toward a defined goal, and it eventually reaches a conclusion. Whenever you have a repeatable process with clear steps and a defined end, you have an algorithm.`,
          ],
          image:        '/explorer-assets/future-skills/l02-s1-list-of-steps.png',
          imageCaption: `An algorithm — a precise, finite, step-by-step process that always produces the same result when followed correctly`,
          vocab: [
            { word: `algorithm`, definition: `A precise, step-by-step set of instructions for solving a problem — algorithms must be unambiguous, make progress toward a goal, and eventually reach a conclusion.`, audioPrompt: `Algorithm — a precise, step-by-step set of instructions for solving a problem. Algorithms must be unambiguous, make progress toward a goal, and eventually reach a conclusion.` },
            { word: `step`,      definition: `A single action in an algorithm. Every step must be clear enough that anyone following it knows exactly what to do.`,                                                  audioPrompt: `Step — a single action in an algorithm. Every step must be clear enough that anyone following it knows exactly what to do.` },
          ],
        },
        {
          type:          'magazine',
          section:       2,
          totalSections: 6,
          headline:      `Recipes and Directions`,
          paragraphs: [
            `Your morning routine is an algorithm. You wake up, brush your teeth, eat breakfast, get dressed — always in the same order, always the same steps. Following it without thinking is exactly what computers do with code.`,
            `Recipes, directions, and daily routines all share one thing: a clear sequence. Do step one, then step two, then step three. Each step builds on the last. That structure — that sequence — is what makes an algorithm work.`,
          ],
          image:        '/explorer-assets/future-skills/l02-s2-morning-routine.png',
          imageCaption: `Your morning routine is a real algorithm — the same steps, in the same order, every single day`,
          vocab: [
            { word: `routine`,  definition: `A fixed set of steps done in the same order, regularly. Your morning routine is a real algorithm you run every day.`,                    audioPrompt: `Routine — a fixed set of steps done in the same order, regularly. Your morning routine is a real algorithm you run every day.` },
            { word: `sequence`, definition: `Steps performed in a specific order, one after another. Sequence is the core structure of every algorithm.`, audioPrompt: `Sequence — steps performed in a specific order, one after another. Sequence is the core structure of every algorithm.` },
          ],
        },
        {
          type:          'magazine',
          section:       3,
          totalSections: 6,
          headline:      `Four Marks of a Good One`,
          paragraphs: [
            `A good algorithm has four properties. A clear starting point. Precise, unambiguous steps — only one way to interpret each one. Forward progress — every step moves toward the goal. And a definite end — it must eventually finish.`,
            `A bad algorithm fails on at least one. "Add some salt" is ambiguous. A process that loops forever without ending fails termination. Computer algorithms must be flawless — a single unclear step can crash a whole program.`,
          ],
          image:        '/explorer-assets/future-skills/l02-s3-four-marks.png',
          imageCaption: `Four marks of a good algorithm — clear start, unambiguous steps, forward progress, definite end`,
          vocab: [
            { word: `unambiguous`, definition: `Having only one possible interpretation. Each step of a good algorithm is unambiguous — anyone following it will understand it the same way.`, audioPrompt: `Unambiguous — having only one possible interpretation. Each step of a good algorithm is unambiguous, meaning anyone following it will understand it the same way.` },
            { word: `termination`, definition: `The property of eventually ending. A valid algorithm must always reach a conclusion — a process that runs forever is not a proper algorithm.`,  audioPrompt: `Termination — the property of eventually ending. A valid algorithm must always reach a conclusion. A process that runs forever without stopping is not a proper algorithm.` },
          ],
        },
        {
          type:          'magazine',
          section:       4,
          totalSections: 6,
          headline:      `Search, Music, Maps`,
          paragraphs: [
            `Algorithms run far more of your life than you realize. When a search engine shows you results, an algorithm ranked billions of pages in milliseconds. When a music app recommends a song, an algorithm analyzed your listening history. When a traffic light changes, an algorithm controls the timing.`,
            `Navigation apps use algorithms to calculate the fastest route, recalculating in real time when traffic changes. Every time a digital system makes a decision or shows you content, an algorithm is running behind the scenes — quietly shaping what you see.`,
          ],
          image:        '/explorer-assets/future-skills/l02-s4-invisible-algorithms.png',
          imageCaption: `Search results, music recommendations, traffic lights, and navigation — all run by algorithms`,
          vocab: [
            { word: `search algorithm`, definition: `An algorithm that finds and ranks results from a huge set of data — like how a search engine picks which web pages to show you first.`, audioPrompt: `Search algorithm — an algorithm that finds and ranks results from a huge set of data, like how a search engine picks which web pages to show you first.` },
            { word: `navigation`,       definition: `The process of finding a route from one place to another. Navigation apps use algorithms to calculate and update your path in real time.`, audioPrompt: `Navigation — the process of finding a route from one place to another. Navigation apps use algorithms to calculate and update your path in real time.` },
          ],
        },
        {
          type:          'magazine',
          section:       5,
          totalSections: 6,
          headline:      `The Recommendation Problem`,
          paragraphs: [
            `Recommendation algorithms are some of the most influential ever built. They shape what news people read, what products they buy, and what ideas they encounter — billions of decisions, per day, made by code.`,
            `Understanding that recommendations are algorithmic outputs — not objective truths — is one of the most important pieces of digital literacy you can have. Algorithms serve whoever designed them. Knowing that changes how you see every recommendation.`,
          ],
          image:        '/explorer-assets/future-skills/l02-s5-recommendation-feed.png',
          imageCaption: `Recommendation algorithms decide what you see next — and they serve whoever built them`,
          vocab: [
            { word: `recommendation`,  definition: `A suggestion produced by an algorithm based on data — analyzing patterns in your behavior to predict what you might want to see, hear, or buy.`, audioPrompt: `Recommendation — a suggestion produced by an algorithm based on data. It analyzes patterns in your behavior to predict what you might want to see, hear, or buy next.` },
            { word: `digital literacy`, definition: `The ability to understand and think critically about how digital tools — including algorithms — work and who they serve.`,                          audioPrompt: `Digital literacy — the ability to understand and think critically about how digital tools, including algorithms, work and who they serve.` },
          ],
        },
        {
          type:          'magazine',
          section:       6,
          totalSections: 6,
          headline:      `Drawing It Out: Flowcharts`,
          paragraphs: [
            `Before writing code, many programmers draw their algorithm as a flowchart. Ovals mark the start and end. Rectangles contain steps — actions the program takes. Diamonds contain decisions — yes/no questions that branch the flow. Arrows connect everything.`,
            `Flowcharts make it easy to spot problems before you've written a single line of code. If one branch never reaches an end, or two steps are in the wrong order, you fix it on paper in seconds. Planning before coding is one of the most consistently valuable professional habits.`,
          ],
          image:        '/explorer-assets/future-skills/l02-s6-flowchart.png',
          imageCaption: `Flowcharts — visual diagrams that map algorithms using shapes and arrows, making logic easy to spot`,
          vocab: [
            { word: `flowchart`,      definition: `A visual diagram that maps out an algorithm using shapes — ovals for start and end, rectangles for steps, diamonds for decisions, arrows for flow.`, audioPrompt: `Flowchart — a visual diagram that maps out an algorithm using shapes. Ovals for start and end, rectangles for steps, diamonds for decisions, and arrows showing direction.` },
            { word: `decision`,       definition: `A step in an algorithm where the path branches based on a yes or no condition — shown as a diamond in a flowchart.`,                                audioPrompt: `Decision — a step in an algorithm where the path branches based on a yes or no condition. Shown as a diamond in a flowchart.` },
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
    fetch('/explorer-assets/future-skills/l02-s1-list-of-steps.png',        { method: 'HEAD' }),
    fetch('/explorer-assets/future-skills/l02-s2-morning-routine.png',      { method: 'HEAD' }),
    fetch('/explorer-assets/future-skills/l02-s3-four-marks.png',           { method: 'HEAD' }),
    fetch('/explorer-assets/future-skills/l02-s4-invisible-algorithms.png', { method: 'HEAD' }),
    fetch('/explorer-assets/future-skills/l02-s5-recommendation-feed.png',  { method: 'HEAD' }),
    fetch('/explorer-assets/future-skills/l02-s6-flowchart.png',            { method: 'HEAD' }),
  ]).then(([r1, r2, r3, r4, r5, r6]) => {
    console.log(`[ASSET-CHECK-FUTURESKILLS-L02] list-of-steps: ${r1.ok}, morning-routine: ${r2.ok}, four-marks: ${r3.ok}, invisible-algorithms: ${r4.ok}, recommendation-feed: ${r5.ok}, flowchart: ${r6.ok}`);
  }).catch(() => {
    console.log('[ASSET-CHECK-FUTURESKILLS-L02] Could not verify image assets — network check failed');
  });
})();

export default futureskills_explorer_l02_screens;
