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

        // PHASE 2 — MAGAZINE STORY (6 sections)
        {
          type:          'magazine',
          section:       1,
          totalSections: 6,
          headline:      `Four Things to Do with Money`,
          paragraphs: [
            `Every dollar you get can do one of four things — earn (coming in), spend, save, or give.`,
            `Most people only do one or two. The most powerful people with money do all four — every single time money comes in.`,
          ],
          image:        '/explorer-assets/money-business/l02-s1-four-buckets.png',
          imageCaption: `Every dollar has four possible jobs — earn, spend, save, give`,
          vocab: [
            { word: 'bucket', definition: `A category or group. Earn, spend, save, and give are the four money buckets — every dollar fits into one.`, audioPrompt: `Bucket — a category or group. Earn, spend, save, and give are the four money buckets. Every dollar fits into one.` },
            { word: 'plan',   definition: `Decisions made ahead of time. Having a money plan means deciding what each dollar will do BEFORE it arrives.`, audioPrompt: `Plan — decisions made ahead of time. Having a money plan means deciding what each dollar will do before it arrives.` },
          ],
        },
        {
          type:          'magazine',
          section:       2,
          totalSections: 6,
          headline:      `Earning`,
          paragraphs: [
            `Earning is trading your time and effort for money. Adults work jobs. Kids can do chores, walk dogs, or sell lemonade.`,
            `The exchange is simple: you give time, you get paid. This is why people say "time is money." Every hour you work is an hour traded for income.`,
          ],
          image:        '/explorer-assets/money-business/l02-s2-earning.png',
          imageCaption: `Earning is the trade — your time and effort for someone's money`,
          vocab: [
            { word: 'income', definition: `Money you receive in exchange for work. Wages, allowance, and business profits are all forms of income.`, audioPrompt: `Income — money you receive in exchange for work. Wages, allowance, and business profits are all forms of income.` },
            { word: 'wage',   definition: `Money paid for work, usually by the hour or by task — $10 an hour, $5 per yard mowed.`, audioPrompt: `Wage — money paid for work, usually by the hour or by task. Ten dollars an hour, five dollars per yard mowed.` },
          ],
        },
        {
          type:          'magazine',
          section:       3,
          totalSections: 6,
          headline:      `Spending`,
          paragraphs: [
            `Spending is trading money for things you want or need. Every time money leaves your hands, that's spending.`,
            `Smart spenders ask: Do I need this, or just want it? Is this the best price? Will I be glad I bought it tomorrow?`,
          ],
          image:        '/explorer-assets/money-business/l02-s3-spending.png',
          imageCaption: `Pause before you spend. The few seconds of thinking separates broke from comfortable.`,
          vocab: [
            { word: 'needs',   definition: `Things you must have to survive — food, water, shelter, clothing. Needs come before wants in any smart spending plan.`, audioPrompt: `Needs — things you must have to survive: food, water, shelter, clothing. Needs come before wants in any smart spending plan.` },
            { word: 'impulse', definition: `A sudden urge to buy something without thinking. Impulse spending is how people end up with less money than they planned.`, audioPrompt: `Impulse — a sudden urge to buy something without thinking. Impulse spending is how people end up with less money than they planned.` },
          ],
        },
        {
          type:          'magazine',
          section:       4,
          totalSections: 6,
          headline:      `Saving`,
          paragraphs: [
            `Saving means setting money aside now so you have it later. The rule is simple: save at least 20% before doing anything else.`,
            `If you earn $10, put $2 in savings first. That's called "paying yourself first" — and it's one of the most powerful money habits there is.`,
          ],
          image:        '/explorer-assets/money-business/l02-s4-saving.png',
          imageCaption: `Pay yourself first — savings is the most important expense in any money plan`,
          vocab: [
            { word: 'savings',            definition: `Money set aside, not spent. Kept for future goals, emergencies, or bigger purchases later.`, audioPrompt: `Savings — money set aside, not spent. Kept for future goals, emergencies, or bigger purchases later.` },
            { word: 'pay yourself first', definition: `The habit of moving money to savings BEFORE spending anything else. Treat your savings as the first and most important expense.`, audioPrompt: `Pay yourself first — the habit of moving money to savings before spending anything else. Treat your savings as the first and most important expense.` },
          ],
        },
        {
          type:          'magazine',
          section:       5,
          totalSections: 6,
          headline:      `Giving`,
          paragraphs: [
            `Giving money to causes you care about sounds weird at first — you worked for it, why give it away? But research is clear.`,
            `People who give regularly feel happier and more in control of their money. Even 5% from each amount you receive builds the habit of generosity.`,
          ],
          image:        '/explorer-assets/money-business/l02-s5-giving.png',
          imageCaption: `Giving makes you happier than spending the same amount on yourself — that's science`,
          vocab: [
            { word: 'generosity', definition: `The quality of giving freely to help others without expecting something back. Linked to greater personal happiness.`, audioPrompt: `Generosity — the quality of giving freely to help others without expecting something back. Linked to greater personal happiness.` },
            { word: 'charity',    definition: `An organization that raises money to support people, animals, or causes in need.`, audioPrompt: `Charity — an organization that raises money to support people, animals, or causes in need.` },
          ],
        },
        {
          type:          'magazine',
          section:       6,
          totalSections: 6,
          headline:      `The Power of All Four`,
          paragraphs: [
            `Every dollar that comes in should have a job — some to spend, some to save, some to give.`,
            `People who use all four buckets don't just have money. They have a plan. That's the difference between feeling broke and feeling free.`,
          ],
          image:        '/explorer-assets/money-business/l02-s6-all-four.png',
          imageCaption: `Use all four buckets — that's how money becomes a plan instead of a problem`,
          vocab: [
            { word: 'budget',            definition: `A plan for how to use your money — how much to earn, spend, save, and give. A budget is just a money plan written down.`, audioPrompt: `Budget — a plan for how to use your money: how much to earn, spend, save, and give. A budget is just a money plan written down.` },
            { word: 'financial freedom', definition: `Having enough money, managed well, that you can make choices freely — not be forced into them by money problems.`, audioPrompt: `Financial freedom — having enough money, managed well, that you can make choices freely. Not be forced into them by money problems.` },
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
    fetch('/explorer-assets/money-business/l02-s1-four-buckets.png', { method: 'HEAD' }),
    fetch('/explorer-assets/money-business/l02-s2-earning.png',      { method: 'HEAD' }),
    fetch('/explorer-assets/money-business/l02-s3-spending.png',     { method: 'HEAD' }),
    fetch('/explorer-assets/money-business/l02-s4-saving.png',       { method: 'HEAD' }),
    fetch('/explorer-assets/money-business/l02-s5-giving.png',       { method: 'HEAD' }),
    fetch('/explorer-assets/money-business/l02-s6-all-four.png',     { method: 'HEAD' }),
  ]).then(([r1, r2, r3, r4, r5, r6]) => {
    console.log(`[ASSET-CHECK-MONEY-L02] four-buckets: ${r1.ok}, earning: ${r2.ok}, spending: ${r3.ok}, saving: ${r4.ok}, giving: ${r5.ok}, all-four: ${r6.ok}`);
  }).catch(() => {
    console.log('[ASSET-CHECK-MONEY-L02] Could not verify image assets — network check failed');
  });
})();

export default moneybusiness_explorer_l02_screens;
