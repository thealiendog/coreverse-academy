// ============================================================
// COREVERSE EXPLORERS — Money & Business · Lesson 20
// "Financial Goals: Saving for Something Special"
// Ages 6–8 | Guide: Ace | ExplorerLessonPlayer format
// ============================================================

const moneybusiness_explorer_l20_screens = {
  ageBand:   'explorers',
  subjectId: 'money',
  guide:     'ace',
  lessons: [
    {
      id:        'mb-6-8-20',
      title:     `Financial Goals: Saving for Something Special`,
      duration:  12,
      xpReward:  50,
      badge:     'goal-getter',
      badgeName: `Goal Getter`,
      screens: [
        // PHASE 1 — WELCOME
        {
          type:      'welcome',
          guideText: `Money is just a tool. The real question is: what do you want your money to DO? When you have a specific goal — something you're saving toward — money gets a purpose. And purposeful saving is a completely different feeling than just watching numbers sit in a jar.`,
        },

        // PHASE 2 — MAGAZINE STORY (6 sections)
        {
          type:          'magazine',
          section:       1,
          totalSections: 6,
          headline:      'Wishes vs Goals',
          paragraphs: [
            '"I want to save money" is a wish. "I will save $75 for a telescope by July 1" is a goal.',
            'One leaves you free to never start. The other puts you on a clear path with no excuses.',
          ],
          image:        '/explorer-assets/money-business/l20-s1-wish-vs-goal.png',
          imageCaption: 'Wishes drift. Goals have a number, a date, and a path.',
          vocab: [
            { word: 'wish', definition: 'A vague hope with no specific plan, number, or deadline. Wishes feel comfortable but never actually happen.', audioPrompt: 'Wish — a vague hope with no specific plan, number, or deadline. Wishes feel comfortable but never actually happen.' },
            { word: 'goal', definition: 'A specific outcome you\'re working toward — with a number, a deadline, and a concrete plan for getting there.', audioPrompt: 'Goal — a specific outcome you\'re working toward, with a number, a deadline, and a concrete plan for getting there.' },
          ],
        },
        {
          type:          'magazine',
          section:       2,
          totalSections: 6,
          headline:      'Write It Down',
          paragraphs: [
            'Something happens when you write a goal down. It stops being an abstract idea and becomes a concrete intention.',
            'People who write down goals achieve them far more often than people who just think about them. Tell someone about your goal too — accountability doubles the odds.',
          ],
          image:        '/explorer-assets/money-business/l20-s2-write-it-down.png',
          imageCaption: 'The act of writing a goal makes it real. Telling someone makes it stick.',
          vocab: [
            { word: 'accountability', definition: 'Being responsible to yourself or others for following through. Telling someone your goal makes you more accountable.', audioPrompt: 'Accountability — being responsible to yourself or others for following through. Telling someone your goal makes you more accountable.' },
            { word: 'commitment',     definition: 'A firm promise to yourself to do something. Writing a goal down is the first act of commitment to it.', audioPrompt: 'Commitment — a firm promise to yourself to do something. Writing a goal down is the first act of commitment to it.' },
          ],
        },
        {
          type:          'magazine',
          section:       3,
          totalSections: 6,
          headline:      'The SMART Framework',
          paragraphs: [
            'A SMART goal meets five criteria. Specific (what exactly?). Measurable (how much?). Achievable (realistic?).',
            'Relevant (do you actually want it?). Time-bound (by when?). Hit all five, and you have a real plan — not just a wish in disguise.',
          ],
          image:        '/explorer-assets/money-business/l20-s3-smart-star.png',
          imageCaption: 'Specific. Measurable. Achievable. Relevant. Time-bound. Five letters that turn wishes into goals.',
          vocab: [
            { word: 'SMART goal', definition: 'A goal that is Specific, Measurable, Achievable, Relevant, and Time-bound. The framework that turns wishes into plans.', audioPrompt: 'SMART goal — a goal that is Specific, Measurable, Achievable, Relevant, and Time-bound. The framework that turns wishes into plans.' },
            { word: 'framework',  definition: 'A structured way of thinking about something. The SMART framework gives you a checklist for building a real goal.', audioPrompt: 'Framework — a structured way of thinking about something. The SMART framework gives you a checklist for building a real goal.' },
          ],
        },
        {
          type:          'magazine',
          section:       4,
          totalSections: 6,
          headline:      'A Real SMART Goal',
          paragraphs: [
            'Here\'s what one looks like: "I will save $120 for a new keyboard by October 1st by setting aside $20 per month."',
            'Specific keyboard. Measurable $120. Achievable: 6 × $20 = $120. Relevant: you want it. Time-bound: October 1st. That\'s a plan.',
          ],
          image:        '/explorer-assets/money-business/l20-s4-real-goal.png',
          imageCaption: 'A SMART goal does the math. You know exactly what to do, and exactly when you\'ll get there.',
          vocab: [
            { word: 'specific', definition: 'Clear and precise. "A new keyboard" is specific. "Stuff I want" isn\'t.', audioPrompt: 'Specific — clear and precise. "A new keyboard" is specific. "Stuff I want" isn\'t.' },
            { word: 'deadline', definition: 'The date by which you\'ll achieve the goal. Deadlines create urgency and tell you if you\'re on track.', audioPrompt: 'Deadline — the date by which you\'ll achieve the goal. Deadlines create urgency and tell you if you\'re on track.' },
          ],
        },
        {
          type:          'magazine',
          section:       5,
          totalSections: 6,
          headline:      'Short, Medium, Long',
          paragraphs: [
            'Have goals at all three time scales. Short-term (weeks to months): a book, a game.',
            'Medium-term (months to a year or two): a laptop, an instrument, a trip. Long-term (years): a car, a college fund, your own business.',
          ],
          image:        '/explorer-assets/money-business/l20-s5-three-horizons.png',
          imageCaption: 'Goals at every distance — small wins now, bigger wins later, life-changing wins eventually',
          vocab: [
            { word: 'short-term goal', definition: 'A goal achievable in weeks to a few months. Short-term goals build the habit of saving and provide quick motivation.', audioPrompt: 'Short-term goal — a goal achievable in weeks to a few months. Short-term goals build the habit of saving and provide quick motivation.' },
            { word: 'long-term goal',  definition: 'A goal that takes years to achieve. The most important goals — a car, college, a business — are usually long-term.', audioPrompt: 'Long-term goal — a goal that takes years to achieve. The most important goals: a car, college, a business, are usually long-term.' },
          ],
        },
        {
          type:          'magazine',
          section:       6,
          totalSections: 6,
          headline:      'Celebrate the Journey',
          paragraphs: [
            'Saving for a goal means choosing not to spend over and over. That\'s hard. It deserves recognition.',
            'Set milestones at 25%, 50%, and 75%. Mark each one. Celebration builds the habit. And the person you become through the process matters as much as the goal itself.',
          ],
          image:        '/explorer-assets/money-business/l20-s6-milestones.png',
          imageCaption: 'Mark every quarter of the journey. The discipline you build along the way will last for life.',
          vocab: [
            { word: 'milestone',  definition: 'A checkpoint that marks meaningful progress. Celebrating milestones keeps you motivated all the way to the goal.', audioPrompt: 'Milestone — a checkpoint that marks meaningful progress. Celebrating milestones keeps you motivated all the way to the goal.' },
            { word: 'discipline', definition: 'Doing what\'s required even when it\'s hard or tempting to do otherwise. Saving is built on discipline, one choice at a time.', audioPrompt: 'Discipline — doing what\'s required even when it\'s hard or tempting to do otherwise. Saving is built on discipline, one choice at a time.' },
          ],
        },

        // PHASE 3 — INTERACTIVE
        {
          type:          'interactive',
          activityType:  'drag-match',
          instruction:   `Tap each card, then tap whether it's a SMART goal or not a SMART goal!`,
          guideText:     `A SMART goal has a specific amount, a clear deadline, and a realistic plan. A vague intention has none of these — and without them, nothing changes. Can you tell the difference between a real goal and a wish dressed up as one?`,
          columnHeaders: [`The Statement`, `SMART Goal or Not?`],
          items: [
            { image: 'l20-game-smart-art.png',   label: `"I will save $60 for a set of art supplies by the end of next month by putting $15 aside from my allowance each week."`,             correctMatch: 'smart-goal', objectPosition: 'center 50%', matchPhrase: `SMART goal! Check every criterion: Specific ($60, art supplies). Measurable: you know exactly how much you need. Achievable: $15 per week × 4 weeks = $60. Relevant: it's something you want. Time-bound: end of next month. When you can answer all five SMART criteria, your goal has a clear path forward — and you're dramatically more likely to reach it.` },
            { image: 'l20-game-vague1.png',      label: `"I want to save up money someday."`,                                                                                                  correctMatch: 'not-smart',  objectPosition: 'center 50%', matchPhrase: `Not a SMART goal! There's no specific amount, no deadline, no plan, and no way to measure progress. "Someday" is not a date. Without clarity on how much you need, by when, and how you'll get there — this is a wish, not a goal. Wishes don't come with plans. Goals do.` },
            { image: 'l20-game-smart-bike.png',  label: `"I will save $200 for a new bicycle by my birthday in six months by setting aside $8 every week from chores and birthday money."`,   correctMatch: 'smart-goal', objectPosition: 'center 50%', matchPhrase: `SMART goal! Specific: a new bicycle. Measurable: $200. Achievable: $8 per week × 26 weeks = $208 — right on target. Relevant: something you want and will use. Time-bound: by your birthday in six months. Notice how the math works out when you break a big goal into small weekly steps. That's the power of the SMART framework in action.` },
            { image: 'l20-game-vague2.png',      label: `"I'm going to try to spend less and hope I have enough for something big eventually."`,                                                correctMatch: 'not-smart',  objectPosition: 'center 50%', matchPhrase: `Not a SMART goal! "Try to spend less" isn't a plan — it's a vague intention. "Something big eventually" has no specific amount or deadline. You can't track progress toward a goal that isn't defined. The moment you write down a specific number and a specific date, your brain starts working on a concrete plan. Without them, nothing changes.` },
          ],
          buckets: [
            { id: 'smart-goal', label: `🎯 SMART Goal`,   color: '#34D399' },
            { id: 'not-smart',  label: `💭 Not a SMART Goal`, color: '#60A5FA' },
          ],
        },

        // PHASE 4 — MASTERY QUIZ
        {
          type:      'quiz',
          guideText: `Quiz time, {name}! Let's see what you've learned about setting financial goals. Answer all 6 questions to earn your Goal Getter badge!`,
          questions: [
            {
              format:       'multiple-choice',
              question:     `What makes a goal SMART?`,
              options:      [`Short, Meaningful, Achievable, Realistic, Timed`, `Specific, Measurable, Achievable, Relevant, and Time-bound`, `Simple, Money-based, Attainable, Real, Trackable`, `Strong, Motivated, Active, Rewarding, True`],
              correctIndex: 1,
            },
            {
              format:       'multiple-choice',
              question:     `What is the difference between a short-term and a long-term financial goal?`,
              options:      [`Short-term goals are smaller amounts of money`, `Short-term takes weeks to months; long-term takes years`, `Long-term goals are more important`, `There is no real difference`],
              correctIndex: 1,
            },
            {
              format:       'multiple-choice',
              question:     `Why should you celebrate milestones when saving toward a goal?`,
              options:      [`Because you deserve a reward for saving`, `To tell your friends how much money you have`, `To recognize hard work, feel proud, and stay motivated to keep going`, `Because the lesson tells you to`],
              correctIndex: 2,
            },
            {
              format:        'true-false',
              question:      `Writing down a financial goal with a specific amount and a deadline makes you significantly more likely to achieve it than having a vague intention.`,
              correctAnswer: true,
            },
            {
              format:       'fill-blank',
              question:     `A saving goal that has a specific amount, a clear deadline, and a realistic plan is called a ___ goal.`,
              options:      [`SMART`, `general`, `flexible`, `open`],
              correctIndex: 0,
            },
            {
              format:       'multiple-choice',
              question:     `Which of the following is the best example of a SMART financial goal?`,
              options:      [`"I want to save more money this year"`, `"I will save $90 for a camera by my birthday in three months by putting $30 aside each month"`, `"I'll try to spend less when I remember to"`, `"I want to have a lot of money someday"`],
              correctIndex: 1,
            },
          ],
        },

        // PHASE 5 — REAL-WORLD CONNECTION
        {
          type:            'real-world',
          guideText:       `Write your first SMART financial goal right now — even if it's small. The act of writing it down is where it stops being a wish and starts being a plan.`,
          familyAdventure: `Each family member sets ONE financial goal using the SMART framework. Share them at dinner. Post them all somewhere visible. Check in monthly on how everyone is progressing. Celebrate together when anyone hits their goal!`,
          creativePrompt:  `Set a real financial goal right now. Write it in SMART format: I will save $____ for _____________ by _____________ by saving $____ per ____________. Post it somewhere you see every day. Track your progress with a chart. Tell one person your goal — accountability makes you more likely to achieve it.`,
        },

        // PHASE 6 — CELEBRATION
        {
          type:      'celebration',
          xpEarned:  50,
          badge:     'goal-getter',
          badgeName: `Goal Getter`,
          message:   `Excellent work, {name}! You've now completed all twenty Money & Business lessons — from how money is made to setting goals for your own future. You know how businesses work, how the stock market operates, and how to make your money grow. Most people spend their whole lives without this knowledge. You have it now — and the world is yours to build. Ace is so proud to have shared this whole journey with you.`,
        },
      ],
    },
  ],
};

// Log on module load — confirms lesson wired correctly + verifies image assets at runtime
(() => {
  const l    = moneybusiness_explorer_l20_screens.lessons[0];
  const mags = l.screens.filter(s => s.type === 'magazine').length;
  const game = l.screens.find(s => s.type === 'interactive')?.items?.length || 0;
  const quiz = l.screens.find(s => s.type === 'quiz')?.questions?.length || 0;
  console.log(`[LESSON-MONEY-L20] Loaded: "Financial Goals: Saving for Something Special" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
  Promise.all([
    fetch('/explorer-assets/money-business/l20-s1-wish-vs-goal.png',   { method: 'HEAD' }),
    fetch('/explorer-assets/money-business/l20-s2-write-it-down.png',  { method: 'HEAD' }),
    fetch('/explorer-assets/money-business/l20-s3-smart-star.png',     { method: 'HEAD' }),
    fetch('/explorer-assets/money-business/l20-s4-real-goal.png',      { method: 'HEAD' }),
    fetch('/explorer-assets/money-business/l20-s5-three-horizons.png', { method: 'HEAD' }),
    fetch('/explorer-assets/money-business/l20-s6-milestones.png',     { method: 'HEAD' }),
  ]).then(([r1, r2, r3, r4, r5, r6]) => {
    console.log(`[ASSET-CHECK-MONEY-L20] wish-vs-goal: ${r1.ok}, write-it-down: ${r2.ok}, smart-star: ${r3.ok}, real-goal: ${r4.ok}, three-horizons: ${r5.ok}, milestones: ${r6.ok}`);
  }).catch(() => {
    console.log('[ASSET-CHECK-MONEY-L20] Could not verify image assets — network check failed');
  });
})();

export default moneybusiness_explorer_l20_screens;
