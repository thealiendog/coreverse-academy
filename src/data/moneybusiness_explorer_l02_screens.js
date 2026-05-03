// ============================================================
// COREVERSE EXPLORERS — Money & Business · Lesson 2
// "Earning, Spending, Saving & Giving"
// Ages 6–8 | Guide: Ace | ExplorerLessonPlayer format
// ============================================================

const moneybusiness_explorer_l02_screens = {
  ageBand:   'explorers',
  subjectId: 'money',
  guide:     'ace',
  lessons: [
    {
      id:        'mb-6-8-02',
      title:     `Earning, Spending, Saving & Giving`,
      duration:  12,
      xpReward:  50,
      badge:     'wise-spender',
      badgeName: `Wise Spender`,
      screens: [
        // PHASE 1 — WELCOME
        {
          type:      'welcome',
          guideText: `What do you do when you get money? Maybe you spend it right away. But did you know there are four things you can do with money — and the most powerful people with money do ALL four?`,
        },

        // PHASE 2 — MAGAZINE STORY (4 sections)
        {
          type:          'magazine',
          section:       1,
          totalSections: 4,
          headline:      `Earning`,
          paragraphs: [
            `Money comes from doing work. Adults earn money from jobs — they trade their time, skills, and effort for a wage or salary. Kids can earn money too: doing chores, helping neighbours, selling lemonade, walking dogs, or any task where someone values what you do enough to pay for it.`,
            `The key insight is the exchange: you give time and effort, and you receive money in return. This is why people say "time is money" — every hour you spend working is an hour you've traded for income. Understanding this exchange is the starting point for all financial thinking.`,
            `Earning isn't just about jobs. People also earn money through businesses they build, investments they make, and creative work they sell. But for most people — and for kids starting out — earning begins with a simple trade: your effort for someone's money.`,
          ],
          image:        '/explorer-assets/money-business/l02-magazine-earning.png',
          imageCaption: `Earning — trading time and effort for money, the foundation of every financial life`,
          vocab: [
            { word: `income`,  definition: `Money you receive in exchange for work, services, or the use of something you own — wages, allowance, and business profits are all forms of income.`,                                         audioPrompt: `Income — money you receive in exchange for work, services, or the use of something you own. Wages, allowance, and business profits are all forms of income.` },
            { word: `wage`,    definition: `Money paid for work, typically calculated per hour or per task — different from a salary, which is a fixed amount paid regularly regardless of exact hours worked.`, audioPrompt: `Wage — money paid for work, typically calculated per hour or per task. Different from a salary, which is a fixed amount paid regularly regardless of exact hours worked.` },
          ],
        },
        {
          type:          'magazine',
          section:       2,
          totalSections: 4,
          headline:      `Spending`,
          paragraphs: [
            `Spending is exchanging money for things you want or need. Every time money leaves your hands — at a store, on a website, or through an app — that's spending. Spending isn't bad; it's necessary. You need food, clothes, and shelter. You also want toys, games, and experiences. Spending covers both.`,
            `The difference between smart spenders and careless spenders comes down to a few questions they ask before every purchase. Do I need this, or do I just want it? Is this the best price available? Will I still be glad I bought this tomorrow, or just today? These questions slow down impulsive decisions and lead to better choices.`,
            `Smart spenders also compare prices before buying and wait before making large purchases. The simple habit of pausing before spending — even for a few seconds — separates people who always feel broke from people who always seem to have enough.`,
          ],
          image:        '/explorer-assets/money-business/l02-magazine-spending.png',
          imageCaption: `Spending — exchanging money for needs and wants, with smart decisions separating enough from never enough`,
          vocab: [
            { word: `needs`,   definition: `Things you must have to survive and function — food, water, shelter, clothing, and healthcare. Needs come before wants in any smart spending plan.`,                                              audioPrompt: `Needs — things you must have to survive and function, including food, water, shelter, clothing, and healthcare. Needs come before wants in any smart spending plan.` },
            { word: `impulse`, definition: `A sudden urge to buy something without thinking it through — impulse spending is one of the most common ways people end up with less money than they planned to have.`, audioPrompt: `Impulse — a sudden urge to buy something without thinking it through. Impulse spending is one of the most common ways people end up with less money than they planned to have.` },
          ],
        },
        {
          type:          'magazine',
          section:       3,
          totalSections: 4,
          headline:      `Saving`,
          paragraphs: [
            `Saving means setting aside money now so you have it for later. The simplest rule is this: save at least 20% of any money you receive before you do anything else with it. If you earn $10, put $2 in savings immediately. This is called "paying yourself first" — and it's one of the most powerful financial habits there is.`,
            `Saving isn't just about having money for emergencies. It's also how you afford larger things over time. If you want something that costs $50 and you save $5 a week, you'll have it in 10 weeks. Saving turns time into purchasing power — and patience into a genuine financial advantage.`,
            `The longer you save, the easier it becomes. Money already in savings feels separate from money you can spend — and over time, watching your savings grow becomes its own reward. People who develop a saving habit early tend to keep it for life.`,
          ],
          image:        '/explorer-assets/money-business/l02-magazine-saving.png',
          imageCaption: `Saving — paying yourself first, turning patience into purchasing power over time`,
          vocab: [
            { word: `savings`,         definition: `Money set aside and not spent — kept for future goals, emergencies, or larger purchases. Saving at least 20% of every amount received is a strong starting habit.`,             audioPrompt: `Savings — money set aside and not spent. Kept for future goals, emergencies, or larger purchases. Saving at least 20% of every amount received is a strong starting habit.` },
            { word: `paying yourself first`, definition: `The habit of moving money to savings before spending anything else — treating your own savings as the first and most important expense in any money plan.`, audioPrompt: `Paying yourself first — the habit of moving money to savings before spending anything else. Treating your own savings as the first and most important expense in any money plan.` },
          ],
        },
        {
          type:          'magazine',
          section:       4,
          totalSections: 4,
          headline:      `Giving`,
          paragraphs: [
            `Giving money away might sound like the opposite of good money management. You worked for it — why give it away? But giving is one of the most powerful things money can do, and the research is clear: people who give regularly report feeling happier, more purposeful, and more in control of their finances than people who don't.`,
            `Giving doesn't have to be a large amount. Even setting aside a small amount from every dollar you receive — 5% or 10% — and directing it toward something you care about creates a habit of generosity. It teaches your brain that money is a tool for doing good, not just a score to accumulate.`,
            `People give to causes, to friends in need, to their communities, and to strangers. Whatever you care about — animals, the environment, helping people who are hungry — there's a way to direct money toward it. When you give intentionally, money becomes more than something you have. It becomes something you use.`,
          ],
          image:        '/explorer-assets/money-business/l02-magazine-giving.png',
          imageCaption: `Giving — directing money toward what matters, the habit that makes wealth meaningful`,
          vocab: [
            { word: `generosity`,  definition: `The quality of giving freely — time, money, or resources — to help others without expecting something in return. Generosity is linked to greater personal happiness and wellbeing.`, audioPrompt: `Generosity — the quality of giving freely, time, money, or resources, to help others without expecting something in return. Generosity is linked to greater personal happiness and wellbeing.` },
            { word: `charity`,     definition: `An organisation set up to raise money and support people, animals, or causes in need — donating to charities is one way to direct giving toward specific goals you care about.`,         audioPrompt: `Charity — an organisation set up to raise money and support people, animals, or causes in need. Donating to charities is one way to direct giving toward specific goals you care about.` },
          ],
        },

        // PHASE 3 — INTERACTIVE
        {
          type:          'interactive',
          activityType:  'drag-match',
          instruction:   `Tap each card, then tap which money bucket it belongs in!`,
          guideText:     `Every money action fits into one of four buckets — Earn, Spend, Save, or Give. Some are obvious, some might surprise you. Think about what's happening with the money in each scenario. Is it coming in through work? Going out on a purchase? Being set aside for later? Going to help someone else?`,
          columnHeaders: [`The Scenario`, `Which Bucket?`],
          items: [
            { image: 'l02-game-chores.png',      label: `Raking leaves in the yard and receiving $5 from a neighbour for the work.`,                         correctMatch: 'earn',  objectPosition: 'center 50%', matchPhrase: `Earn! Raking leaves is work — and getting paid for it is earning. You traded your time and effort for money. Every time you do a task and someone pays you for it, that's income. Earning is the foundation everything else is built on.` },
            { image: 'l02-game-piggy-bank.png',  label: `Putting $2 from every $10 received into a jar set aside for later.`,                                correctMatch: 'save',  objectPosition: 'center 50%', matchPhrase: `Save! Setting aside $2 from every $10 is exactly the 20% savings rule in action. Paying yourself first — moving money to savings before spending anything else — is one of the most powerful habits in personal finance. That jar adds up faster than you think.` },
            { image: 'l02-game-toy-store.png',   label: `Using birthday money to buy a toy that's been on the wishlist at the store.`,                       correctMatch: 'spend', objectPosition: 'center 50%', matchPhrase: `Spend! Buying something you want with your own money is spending. There's nothing wrong with spending — especially on something you've thought about and really want. The key is that spending was a choice, not an impulse. Smart spenders plan their spending; they don't just react to it.` },
            { image: 'l02-game-donation.png',    label: `Dropping coins into a donation box to help animals at the local shelter.`,                          correctMatch: 'give',  objectPosition: 'center 50%', matchPhrase: `Give! Donating to the animal shelter is giving — directing money toward something you care about that helps others. Research shows that giving actually makes people feel happier than spending the same amount on themselves. Your coins are doing something real for animals that need it.` },
          ],
          buckets: [
            { id: 'earn',  label: `💼 Earn`,  color: '#60A5FA' },
            { id: 'spend', label: `🛍️ Spend`, color: '#F59E0B' },
            { id: 'save',  label: `🏦 Save`,  color: '#34D399' },
            { id: 'give',  label: `🎁 Give`,  color: '#818CF8' },
          ],
        },

        // PHASE 4 — MASTERY QUIZ
        {
          type:      'quiz',
          guideText: `Quiz time, {name}! Let's see what you've learned about earning, spending, saving, and giving. Answer all 6 questions to earn your Wise Spender badge!`,
          questions: [
            {
              format:       'multiple-choice',
              question:     `What are the four things you can do with money?`,
              options:      [`Buy, trade, sell, borrow`, `Earn, spend, save, give`, `Save, invest, donate, loan`, `Work, play, save, spend`],
              correctIndex: 1,
            },
            {
              format:       'multiple-choice',
              question:     `What percentage should you try to save?`,
              options:      [`At least 5%`, `At least 10%`, `At least 20%`, `At least 50%`],
              correctIndex: 2,
            },
            {
              format:       'multiple-choice',
              question:     `Why is giving money away good even though it sounds strange?`,
              options:      [`You get it back double`, `It helps others and makes you happier than spending on yourself`, `The government requires it`, `It makes you famous`],
              correctIndex: 1,
            },
            {
              format:        'true-false',
              question:      `Saving 20% means putting aside $2 from every $10 you receive.`,
              correctAnswer: true,
            },
            {
              format:       'fill-blank',
              question:     `Research shows that ___ money away actually makes people feel happier than spending it on themselves.`,
              options:      [`giving`, `saving`, `earning`, `investing`],
              correctIndex: 0,
            },
            {
              format:       'multiple-choice',
              question:     `Why do people say "time is money"?`,
              options:      [`Because clocks and watches are expensive`, `Because you trade your time and effort in exchange for earning money`, `Because money runs out very quickly if you're not careful`, `Because banks charge interest by the hour`],
              correctIndex: 1,
            },
          ],
        },

        // PHASE 5 — REAL-WORLD CONNECTION
        {
          type:            'real-world',
          guideText:       `Set up four jars this week and label them Earn, Spend, Save, Give — even putting 10 cents in each teaches your brain the habit of giving every dollar a job.`,
          familyAdventure: `Pick a cause your family cares about — animal shelters, food banks, planting trees. Collect any loose change around the house this week and donate it together. Notice how it feels to give. Then try the four-jars system: decorate four containers and label them Earn, Spend, Save, Give. Next time you receive money — allowance, a gift, or earnings — divide it between the jars before spending anything.`,
          creativePrompt:  `Create your own four-jars plan. If you received $20, how much would go in each jar? Write out your plan: $__ to Earn (already earned!), $__ to Spend, $__ to Save, $__ to Give. Add up all four — do they equal $20? Now think about what you'd spend on, what you'd save toward, and what cause you'd give to. Draw your four jars and decorate them.`,
        },

        // PHASE 6 — CELEBRATION
        {
          type:      'celebration',
          xpEarned:  50,
          badge:     'wise-spender',
          badgeName: `Wise Spender`,
          message:   `Excellent work, {name}! You now know the four things you can do with every dollar — earn, spend, save, and give. People who use all four don't just have money; they have a plan. Ace is so proud to share this knowledge with you.`,
        },
      ],
    },
  ],
};

// Log on module load — confirms lesson wired correctly + verifies image assets at runtime
(() => {
  const l    = moneybusiness_explorer_l02_screens.lessons[0];
  const mags = l.screens.filter(s => s.type === 'magazine').length;
  const game = l.screens.find(s => s.type === 'interactive')?.items?.length || 0;
  const quiz = l.screens.find(s => s.type === 'quiz')?.questions?.length || 0;
  console.log(`[LESSON-MONEY-L02] Loaded: "Earning, Spending, Saving & Giving" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
  Promise.all([
    fetch('/explorer-assets/money-business/l02-magazine-earning.png', { method: 'HEAD' }),
    fetch('/explorer-assets/money-business/l02-magazine-spending.png', { method: 'HEAD' }),
    fetch('/explorer-assets/money-business/l02-magazine-saving.png',  { method: 'HEAD' }),
    fetch('/explorer-assets/money-business/l02-magazine-giving.png',  { method: 'HEAD' }),
  ]).then(([r1, r2, r3, r4]) => {
    console.log(`[ASSET-CHECK-MONEY-L02] earning: ${r1.ok}, spending: ${r2.ok}, saving: ${r3.ok}, giving: ${r4.ok}`);
  }).catch(() => {
    console.log('[ASSET-CHECK-MONEY-L02] Could not verify image assets — network check failed');
  });
})();

export default moneybusiness_explorer_l02_screens;
