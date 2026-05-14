// ============================================================
// COREVERSE EXPLORERS — Money & Business · Lesson 4
// "Budgeting: Planning What to Spend"
// Ages 6–8 | Guide: Ace | ExplorerLessonPlayer format
// ============================================================

const moneybusiness_explorer_l04_screens = {
  ageBand:   'explorers',
  subjectId: 'money',
  guide:     'ace',
  lessons: [
    {
      id:        'mb-6-8-04',
      title:     `Budgeting: Planning What to Spend`,
      duration:  12,
      xpReward:  50,
      badge:     'budget-boss',
      badgeName: `Budget Boss`,
      screens: [
        // PHASE 1 — WELCOME
        {
          type:      'welcome',
          guideText: `Have you ever run out of money before you could buy something you really wanted? That's what happens without a budget. A budget is just a plan — and it's the single most powerful money tool there is.`,
        },

        // PHASE 2 — MAGAZINE STORY (6 sections)
        {
          type:          'magazine',
          section:       1,
          totalSections: 6,
          headline:      `What Is a Budget?`,
          paragraphs: [
            `A budget is a written plan that tells your money where to go before you spend it.`,
            `It's not a restriction — it's a decision made in advance, so you're in control instead of just reacting to whatever happens.`,
          ],
          image:        '/explorer-assets/money-business/l04-s1-budget-plan.png',
          imageCaption: `A budget is a plan you make BEFORE spending — so you stay in control`,
          vocab: [
            { word: 'budget', definition: `A written plan that tells your money where to go before you spend it. Every dollar gets a job.`, audioPrompt: `Budget — a written plan that tells your money where to go before you spend it. Every dollar gets a job.` },
            { word: 'plan',   definition: `Deciding what to do before you do it. In money terms: assigning each dollar a job in advance instead of reacting after it's gone.`, audioPrompt: `Plan — deciding what to do before you do it. In money terms: assigning each dollar a job in advance instead of reacting after it's gone.` },
          ],
        },
        {
          type:          'magazine',
          section:       2,
          totalSections: 6,
          headline:      `Why Everyone Needs One`,
          paragraphs: [
            `Here's what surprises most people: professional athletes, movie stars, and billionaires all use budgets.`,
            `Having a lot of money doesn't mean you don't need a plan. In fact, the more money you have, the more important planning becomes.`,
          ],
          image:        '/explorer-assets/money-business/l04-s2-everyone-budgets.png',
          imageCaption: `Pro athletes, celebrities, billionaires — they all budget. The wealthy plan; that's why they stay wealthy.`,
          vocab: [
            { word: 'wealth',     definition: `Having a lot of money or valuable things. Wealth tends to grow with a plan, not without one.`, audioPrompt: `Wealth — having a lot of money or valuable things. Wealth tends to grow with a plan, not without one.` },
            { word: 'discipline', definition: `Doing what needs to be done even when you don't feel like it. Discipline is what makes a budget actually work.`, audioPrompt: `Discipline — doing what needs to be done even when you don't feel like it. Discipline is what makes a budget actually work.` },
          ],
        },
        {
          type:          'magazine',
          section:       3,
          totalSections: 6,
          headline:      `The Two Sides`,
          paragraphs: [
            `Every budget has two sides. Income is money coming IN — allowance, birthday money, what you earn.`,
            `Expenses are money going OUT — snacks, toys, savings, giving. Every dollar that leaves your account is an expense.`,
          ],
          image:        '/explorer-assets/money-business/l04-s3-two-sides.png',
          imageCaption: `Money coming in. Money going out. Every budget is just these two sides.`,
          vocab: [
            { word: 'income',   definition: `Money coming INTO your budget — allowance, gifts, wages. Income is what you have to work with.`, audioPrompt: `Income — money coming into your budget: allowance, gifts, wages. Income is what you have to work with.` },
            { word: 'expenses', definition: `Money going OUT of your budget — purchases, bills, savings, giving. Every dollar that leaves is an expense.`, audioPrompt: `Expenses — money going out of your budget: purchases, bills, savings, giving. Every dollar that leaves is an expense.` },
          ],
        },
        {
          type:          'magazine',
          section:       4,
          totalSections: 6,
          headline:      `The Golden Rule`,
          paragraphs: [
            `The golden rule of budgeting: your income must always be greater than or equal to your expenses.`,
            `If you spend more than you earn, you're going into debt. Millions of adults break this rule every month. Don't be one of them.`,
          ],
          image:        '/explorer-assets/money-business/l04-s4-golden-rule.png',
          imageCaption: `Income must always equal or beat expenses. Break this rule and you're in debt.`,
          vocab: [
            { word: 'debt',        definition: `When you owe more money than you have. Debt happens when expenses are bigger than income.`, audioPrompt: `Debt — when you owe more money than you have. Debt happens when expenses are bigger than income.` },
            { word: 'golden rule', definition: `A guiding principle that always applies. In budgeting: income must always be greater than or equal to expenses.`, audioPrompt: `Golden rule — a guiding principle that always applies. In budgeting: income must always be greater than or equal to expenses.` },
          ],
        },
        {
          type:          'magazine',
          section:       5,
          totalSections: 6,
          headline:      `Every Dollar Has a Job`,
          paragraphs: [
            `Say you receive $10 a week. A budget might be: $2 saving, $1 giving, $3 fun, $4 to a savings goal.`,
            `$2 + $1 + $3 + $4 = $10. Every dollar has a job. That's called a zero-based budget — nothing is left unassigned.`,
          ],
          image:        '/explorer-assets/money-business/l04-s5-every-dollar-job.png',
          imageCaption: `In a zero-based budget, every single dollar has a job before you spend it`,
          vocab: [
            { word: 'zero-based budget', definition: `A budget where every dollar of income gets a specific job. Income minus all assigned jobs equals zero — nothing is left over.`, audioPrompt: `Zero-based budget — a budget where every dollar of income gets a specific job. Income minus all assigned jobs equals zero. Nothing is left over.` },
            { word: 'assign',            definition: `To give something a specific job or purpose. In a budget, you assign each dollar to a category like saving, giving, or fun.`, audioPrompt: `Assign — to give something a specific job or purpose. In a budget, you assign each dollar to a category like saving, giving, or fun.` },
          ],
        },
        {
          type:          'magazine',
          section:       6,
          totalSections: 6,
          headline:      `Saving for a Goal`,
          paragraphs: [
            `Want something that costs $60? Find out how much you can save each week. Divide $60 by that amount — that's how many weeks until you have it.`,
            `This is goal-based saving. "I can't afford that" becomes "how long until I can?" Math becomes your superpower.`,
          ],
          image:        '/explorer-assets/money-business/l04-s6-goal-path.png',
          imageCaption: `"How long until I can afford it?" — math turns wanting into a real timeline`,
          vocab: [
            { word: 'goal-based saving', definition: `Saving a specific amount each week to reach a target by a known date. Divide the total cost by what you can save weekly.`, audioPrompt: `Goal-based saving — saving a specific amount each week to reach a target by a known date. Divide the total cost by what you can save weekly.` },
            { word: 'divide',            definition: `To split into equal parts. To find your savings timeline, divide the total cost by what you save each week.`, audioPrompt: `Divide — to split into equal parts. To find your savings timeline, divide the total cost by what you save each week.` },
          ],
        },

        // PHASE 3 — INTERACTIVE
        {
          type:          'interactive',
          activityType:  'drag-match',
          instruction:   `Tap each card, then tap whether it's income or an expense!`,
          guideText:     `A budget has two sides — money coming in (income) and money going out (expenses). Both sides matter equally. Can you sort these four items into the right category? Remember: income is anything that adds to your money. An expense is anything that reduces it — even saving counts as an expense in your budget because you're directing money somewhere with a purpose.`,
          columnHeaders: [`The Item`, `Income or Expense?`],
          items: [
            { image: 'l04-game-allowance.png',      label: `Receiving $10 from a parent as your weekly allowance for helping around the house.`,   correctMatch: 'income',  objectPosition: 'center 50%', matchPhrase: `Income! Allowance is money coming into your budget — it's earnings in exchange for your help at home. Every time money arrives from any source — allowance, birthday gifts, chores, or a job — it's income. Income is what you have to work with when you plan your budget.` },
            { image: 'l04-game-snack.png',          label: `Spending $2 at the school snack stand on a bag of chips.`,                            correctMatch: 'expense', objectPosition: 'center 50%', matchPhrase: `Expense! Buying a snack means money is going out — it's a spending expense. Small purchases like snacks are often where unplanned money disappears. A budget would plan for snack spending in advance, giving it a specific weekly allowance so it doesn't quietly drain the rest of your money.` },
            { image: 'l04-game-birthday-money.png', label: `Getting $25 in birthday money as a gift from grandparents.`,                          correctMatch: 'income',  objectPosition: 'center 50%', matchPhrase: `Income! Birthday money is income — it's money arriving that adds to what you have available. Even unexpected money (a gift, a found dollar, a reward) counts as income in your budget. The smart move: budget it before spending it. Decide how much goes to savings, giving, and spending before any of it disappears.` },
            { image: 'l04-game-book.png',           label: `Buying a new book for $8 at the school book fair.`,                                   correctMatch: 'expense', objectPosition: 'center 50%', matchPhrase: `Expense! Buying a book is an expense — money is going out. But this is a great kind of expense: a planned purchase on something valuable. In a budget, you might have a "books and learning" category specifically for this. Planned expenses are fine; it's unplanned expenses that throw budgets off track.` },
          ],
          buckets: [
            { id: 'income',  label: `➕ Income`,  color: '#60A5FA' },
            { id: 'expense', label: `➖ Expense`, color: '#34D399' },
          ],
        },

        // PHASE 4 — MASTERY QUIZ
        {
          type:      'quiz',
          guideText: `Quiz time, {name}! Let's see what you've learned about budgeting. Answer all 6 questions to earn your Budget Boss badge!`,
          questions: [
            {
              format:       'multiple-choice',
              question:     `What is a budget?`,
              options:      [`A list of things you want to buy someday`, `A plan for where your money goes before you spend it`, `A type of bank account for saving`, `Money you set aside for emergencies`],
              correctIndex: 1,
            },
            {
              format:       'multiple-choice',
              question:     `What is the golden rule of budgeting?`,
              options:      [`Always spend your full budget each week`, `Save everything you earn and spend nothing`, `Your income must always be bigger than your expenses`, `Never buy anything that isn't on sale`],
              correctIndex: 2,
            },
            {
              format:       'multiple-choice',
              question:     `What does zero-based budgeting mean?`,
              options:      [`Spending zero dollars each month`, `Having zero money left in savings`, `Every dollar is assigned to a specific purpose so none is left unplanned`, `Starting your budget over from zero each month`],
              correctIndex: 2,
            },
            {
              format:        'true-false',
              question:      `In a zero-based budget, every dollar you receive is assigned a specific job — so nothing is left unplanned.`,
              correctAnswer: true,
            },
            {
              format:       'fill-blank',
              question:     `Money that comes INTO your budget — like allowance, birthday money, or wages — is called ___.`,
              options:      [`income`, `expenses`, `interest`, `a deposit`],
              correctIndex: 0,
            },
            {
              format:       'multiple-choice',
              question:     `Why do professional athletes and celebrities use budgets even though they earn a lot?`,
              options:      [`The government requires all high earners to use budgets`, `Having a plan prevents money from being spent without purpose, no matter how much you earn`, `Budgets are required in order to open a bank account`, `It makes their accountant's job simpler`],
              correctIndex: 1,
            },
          ],
        },

        // PHASE 5 — REAL-WORLD CONNECTION
        {
          type:            'real-world',
          guideText:       `Write down your income and your planned expenses for this week and see if they balance — that's your very first real budget.`,
          familyAdventure: `Ask a parent to share your family's grocery budget for the week. Go to the grocery store together and try to stay under budget — keep a running total as you add items to the cart. Notice how planning ahead changes how you shop. What decisions did you have to make? What did you choose to leave out? How did it feel to shop with a number in mind?`,
          creativePrompt:  `Make a budget for an imaginary $20. Assign every dollar a job — you must use all $20 with nothing left unassigned. Decide how much goes to savings, giving, a specific purchase you want, and any other category you choose. Draw your budget as a chart or a diagram showing how the $20 is divided. Can someone else look at your budget and understand exactly where every dollar went?`,
        },

        // PHASE 6 — CELEBRATION
        {
          type:      'celebration',
          xpEarned:  50,
          badge:     'budget-boss',
          badgeName: `Budget Boss`,
          message:   `Excellent work, {name}! You now know that a budget isn't a limit — it's a plan, and the people with plans end up with more money than the people without them. Every dollar with a job is a dollar working for you. Ace is so proud to share this knowledge with you.`,
        },
      ],
    },
  ],
};

// Log on module load — confirms lesson wired correctly + verifies image assets at runtime
(() => {
  const l    = moneybusiness_explorer_l04_screens.lessons[0];
  const mags = l.screens.filter(s => s.type === 'magazine').length;
  const game = l.screens.find(s => s.type === 'interactive')?.items?.length || 0;
  const quiz = l.screens.find(s => s.type === 'quiz')?.questions?.length || 0;
  console.log(`[LESSON-MONEY-L04] Loaded: "Budgeting: Planning What to Spend" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
  Promise.all([
    fetch('/explorer-assets/money-business/l04-s1-budget-plan.png',      { method: 'HEAD' }),
    fetch('/explorer-assets/money-business/l04-s2-everyone-budgets.png', { method: 'HEAD' }),
    fetch('/explorer-assets/money-business/l04-s3-two-sides.png',        { method: 'HEAD' }),
    fetch('/explorer-assets/money-business/l04-s4-golden-rule.png',      { method: 'HEAD' }),
    fetch('/explorer-assets/money-business/l04-s5-every-dollar-job.png', { method: 'HEAD' }),
    fetch('/explorer-assets/money-business/l04-s6-goal-path.png',        { method: 'HEAD' }),
  ]).then(([r1, r2, r3, r4, r5, r6]) => {
    console.log(`[ASSET-CHECK-MONEY-L04] budget-plan: ${r1.ok}, everyone-budgets: ${r2.ok}, two-sides: ${r3.ok}, golden-rule: ${r4.ok}, every-dollar-job: ${r5.ok}, goal-path: ${r6.ok}`);
  }).catch(() => {
    console.log('[ASSET-CHECK-MONEY-L04] Could not verify image assets — network check failed');
  });
})();

export default moneybusiness_explorer_l04_screens;
