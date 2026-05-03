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

        // PHASE 2 — MAGAZINE STORY (4 sections)
        {
          type:          'magazine',
          section:       1,
          totalSections: 4,
          headline:      `Why Goals Work`,
          paragraphs: [
            `Psychologists have studied goal-setting for decades, and the findings are consistent: people who set specific, written goals achieve dramatically more than people with vague intentions. The difference between "I want to save money" and "I will save $75 for a telescope by July 1 by saving $15 per week" is not just wording. It's the difference between a wish and a plan.`,
            `Specificity works because it removes ambiguity. When your goal has a number, a deadline, and a method, your brain knows exactly what to do — and exactly when you're succeeding or falling behind. Vague intentions, by contrast, never fail because they never really start. "I want to save money someday" can stay comfortably unfulfilled forever without ever feeling like a failure.`,
            `Writing your goal down adds another layer of commitment. Research suggests that people who write goals down are significantly more likely to achieve them than those who only think about them. Something happens in the act of writing — it shifts the goal from an abstract idea into a concrete intention. Telling someone else your goal adds further accountability and increases the odds even more.`,
          ],
          image:        '/explorer-assets/money-business/l20-magazine-why-goals.png',
          imageCaption: `Why goals work — specificity, a number, a deadline, and a written plan turn a wish into something achievable`,
          vocab: [
            { word: `goal`,           definition: `A specific outcome you're working toward — the best financial goals have a clear amount, a deadline, and a concrete plan for how to get there.`,                                         audioPrompt: `Goal — a specific outcome you're working toward. The best financial goals have a clear amount, a deadline, and a concrete plan for how to get there.` },
            { word: `accountability`, definition: `Being responsible to yourself or others for following through on commitments — telling someone your goal makes you more accountable and significantly increases your chances of achieving it.`, audioPrompt: `Accountability — being responsible to yourself or others for following through on commitments. Telling someone your goal makes you more accountable and significantly increases your chances of achieving it.` },
          ],
        },
        {
          type:          'magazine',
          section:       2,
          totalSections: 4,
          headline:      `The SMART Goal Framework`,
          paragraphs: [
            `A SMART financial goal is one that meets five specific criteria. Specific: you know exactly what you're saving for. Measurable: you know exactly how much it costs. Achievable: the goal is realistic given your current income and circumstances. Relevant: it's something you genuinely want, not just something that sounds responsible. Time-bound: you have a clear deadline by which you'll reach it.`,
            `Each criterion does important work. Specific and Measurable together mean you always know your exact progress. Achievable keeps you from setting goals so ambitious that failure is inevitable — repeated failure kills motivation. Relevant keeps the goal connected to something you actually care about, which is what keeps you disciplined when spending temptation arises. Time-bound creates urgency; without a deadline, there's no pressure to act.`,
            `Here's what a SMART financial goal looks like in practice: "I will save $120 for a new keyboard by October 1st by setting aside $20 per month from my allowance." Every SMART criterion is met. You know what you want ($120 keyboard), you know you can save $20/month, the math checks out (6 months × $20 = $120), you genuinely want it, and October 1st is your deadline. That's a plan — not a wish.`,
          ],
          image:        '/explorer-assets/money-business/l20-magazine-smart.png',
          imageCaption: `The SMART framework — Specific, Measurable, Achievable, Relevant, and Time-bound: the five criteria of a real financial goal`,
          vocab: [
            { word: `SMART goal`,  definition: `A goal that is Specific, Measurable, Achievable, Relevant, and Time-bound — the SMART framework turns vague intentions into concrete plans with a clear path to success.`, audioPrompt: `SMART goal — a goal that is Specific, Measurable, Achievable, Relevant, and Time-bound. The SMART framework turns vague intentions into concrete plans with a clear path to success.` },
            { word: `deadline`,    definition: `A specific date by which a goal must be achieved — deadlines create urgency and give you a clear measure of whether you're on track or need to adjust your plan.`,             audioPrompt: `Deadline — a specific date by which a goal must be achieved. Deadlines create urgency and give you a clear measure of whether you're on track or need to adjust your plan.` },
          ],
        },
        {
          type:          'magazine',
          section:       3,
          totalSections: 4,
          headline:      `Short, Medium, and Long-Term Goals`,
          paragraphs: [
            `Not all financial goals operate on the same time scale, and that's a good thing. Short-term goals take weeks to a few months to reach — a book, a game, a new item of clothing. Because the payoff comes quickly, short-term goals are great for building the habit of saving and experiencing the satisfaction of reaching a target. That satisfaction is what motivates you to set the next one.`,
            `Medium-term goals take several months to a couple of years — a laptop, a musical instrument, a significant trip. These require more sustained discipline, which is why connecting them to something you genuinely want matters. When you know exactly what you're working toward and you can see the number growing, every saved dollar feels meaningful rather than like a deprivation.`,
            `Long-term goals take years — a car, a university fund, start-up capital for a business, a house deposit. These are the goals that shape your future in the most significant ways. The discipline required is higher, but so is the reward. Having active goals at all three time scales — short, medium, and long — means your savings are always working toward something meaningful, at every level simultaneously.`,
          ],
          image:        '/explorer-assets/money-business/l20-magazine-time-horizons.png',
          imageCaption: `Short, medium, and long-term goals — having all three active at once keeps every dollar working toward something meaningful`,
          vocab: [
            { word: `short-term goal`, definition: `A financial goal achievable within weeks to a few months — short-term goals build the habit of saving and provide the early wins that motivate longer-term discipline.`,                         audioPrompt: `Short-term goal — a financial goal achievable within weeks to a few months. Short-term goals build the habit of saving and provide the early wins that motivate longer-term discipline.` },
            { word: `long-term goal`,  definition: `A financial goal that takes years to achieve — long-term goals require sustained commitment and are typically the most significant, like saving for education or a major purchase.`, audioPrompt: `Long-term goal — a financial goal that takes years to achieve. Long-term goals require sustained commitment and are typically the most significant, like saving for education or a major purchase.` },
          ],
        },
        {
          type:          'magazine',
          section:       4,
          totalSections: 4,
          headline:      `Celebrate Milestones`,
          paragraphs: [
            `Saving toward a goal means making a deliberate choice again and again — choosing not to spend money on other things right now, so that you can have something more important later. That repeated choice is genuinely difficult, especially when spending temptations arise. It deserves recognition. Celebrating milestones along the way makes the journey sustainable.`,
            `Set checkpoints at 25%, 50%, and 75% of your goal. When you hit each one, do something that marks the moment — not something that sets you back, but something that acknowledges the progress. The feeling of reaching a milestone produces real motivation to keep going. Progress recognised fuels further effort in a way that simply tracking numbers doesn't.`,
            `The discipline of saving is not natural for most people — it has to be built through habit and reward. Every time you reach a checkpoint and celebrate it, you're reinforcing a pattern that will serve you for the rest of your life. The goal at the end matters. But the person you become through the process of reaching it matters even more.`,
          ],
          image:        '/explorer-assets/money-business/l20-magazine-milestones.png',
          imageCaption: `Celebrate milestones — recognising progress at 25%, 50%, and 75% keeps you motivated to reach the finish line`,
          vocab: [
            { word: `milestone`,  definition: `A checkpoint that marks meaningful progress toward a goal — celebrating milestones along the way makes sustained saving feel rewarding rather than just difficult.`,         audioPrompt: `Milestone — a checkpoint that marks meaningful progress toward a goal. Celebrating milestones along the way makes sustained saving feel rewarding rather than just difficult.` },
            { word: `discipline`, definition: `The ability to consistently do what's required even when it's difficult or tempting to do otherwise — financial discipline is the practice of choosing future goals over immediate spending.`, audioPrompt: `Discipline — the ability to consistently do what's required even when it's difficult or tempting to do otherwise. Financial discipline is the practice of choosing future goals over immediate spending.` },
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
    fetch('/explorer-assets/money-business/l20-magazine-why-goals.png',     { method: 'HEAD' }),
    fetch('/explorer-assets/money-business/l20-magazine-smart.png',         { method: 'HEAD' }),
    fetch('/explorer-assets/money-business/l20-magazine-time-horizons.png', { method: 'HEAD' }),
    fetch('/explorer-assets/money-business/l20-magazine-milestones.png',    { method: 'HEAD' }),
  ]).then(([r1, r2, r3, r4]) => {
    console.log(`[ASSET-CHECK-MONEY-L20] why-goals: ${r1.ok}, smart: ${r2.ok}, time-horizons: ${r3.ok}, milestones: ${r4.ok}`);
  }).catch(() => {
    console.log('[ASSET-CHECK-MONEY-L20] Could not verify image assets — network check failed');
  });
})();

export default moneybusiness_explorer_l20_screens;
