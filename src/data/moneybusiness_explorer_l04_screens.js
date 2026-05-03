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

        // PHASE 2 — MAGAZINE STORY (4 sections)
        {
          type:          'magazine',
          section:       1,
          totalSections: 4,
          headline:      `What Is a Budget?`,
          paragraphs: [
            `A budget is a written plan that tells your money where to go before you spend it. It says: here is how much money I have, and here is exactly where I plan it to go. A budget isn't a restriction — it's a decision made in advance, so you're in control rather than reacting to whatever happens.`,
            `Here's what surprises most people: professional athletes, movie stars, and billionaires all use budgets. Having a lot of money doesn't mean you don't need a plan — in fact, the more money you have, the more important planning becomes. Budgets are the reason some people with large incomes build wealth, while others with the same income end up with nothing.`,
            `A budget doesn't have to be complicated. A simple list — money coming in on one side, money going out on the other — is enough to start. The act of writing it down is what matters. Once your plan is on paper, you can see it, adjust it, and stick to it.`,
          ],
          image:        '/explorer-assets/money-business/l04-magazine-what-is-a-budget.png',
          imageCaption: `A budget — a written plan that tells money where to go before it gets spent`,
          vocab: [
            { word: `budget`,   definition: `A written plan showing how much money you have (income) and where you plan to spend it (expenses) — made in advance so every dollar has a purpose before you spend it.`,                audioPrompt: `Budget — a written plan showing how much money you have and where you plan to spend it. Made in advance so every dollar has a purpose before you spend it.` },
            { word: `planning`, definition: `Deciding what to do before you do it — in money terms, planning means assigning every dollar a purpose before spending it, rather than seeing what's left at the end.`, audioPrompt: `Planning — deciding what to do before you do it. In money terms, planning means assigning every dollar a purpose before spending it, rather than seeing what's left at the end.` },
          ],
        },
        {
          type:          'magazine',
          section:       2,
          totalSections: 4,
          headline:      `Income vs Expenses`,
          paragraphs: [
            `Every budget has two sides. Income is money coming IN — your allowance, birthday money, money you earn from chores or a small job. Expenses are money going OUT — snacks, toys, savings contributions, giving. Every dollar that arrives is income. Every dollar that leaves for any reason is an expense.`,
            `The golden rule of budgeting is simple: your income must always be greater than or equal to your expenses. If you're spending more than you're earning, you're going into debt — and debt is the opposite of financial freedom. The moment your expenses exceed your income, your financial situation is getting worse, not better.`,
            `This rule sounds obvious, but millions of adults break it every month. They spend more than they earn and use credit cards or loans to cover the difference. Understanding this rule as a kid — and living by it — puts you ahead of most adults before you've even started earning seriously.`,
          ],
          image:        '/explorer-assets/money-business/l04-magazine-income-expenses.png',
          imageCaption: `Income vs expenses — the two sides of every budget, with the golden rule: income must always win`,
          vocab: [
            { word: `income`,   definition: `Money coming into your budget — wages, allowance, gifts, and any other money you receive. Income is what you have available to plan with before expenses are subtracted.`,                       audioPrompt: `Income — money coming into your budget. Wages, allowance, gifts, and any other money you receive. Income is what you have available to plan with before expenses are subtracted.` },
            { word: `expenses`, definition: `Money going out of your budget — purchases, bills, savings contributions, and giving. Every dollar that leaves your account for any reason is an expense to track.`, audioPrompt: `Expenses — money going out of your budget. Purchases, bills, savings contributions, and giving. Every dollar that leaves your account for any reason is an expense to track.` },
          ],
        },
        {
          type:          'magazine',
          section:       3,
          totalSections: 4,
          headline:      `A Simple Budget Example`,
          paragraphs: [
            `Let's make this concrete. Say you receive $10 a week. A zero-based budget for that $10 might look like this: $2 to savings, $1 to giving, $3 for snacks or fun, $4 toward a specific savings goal. Add those up: $2 + $1 + $3 + $4 = $10 exactly. Every dollar has a job. Nothing is left unassigned.`,
            `This is what "zero-based" means — not that you have zero money, but that every dollar is accounted for. Income minus expenses equals zero, because you've assigned a purpose to every single dollar. There's no money sitting around with no plan, which means there's no money disappearing on impulse purchases you can't remember making.`,
            `The specific numbers don't matter as much as the habit. Even a budget of $1 — 50 cents for saving, 25 cents for a treat, 25 cents for giving — teaches the same principle. Every dollar has a job. You decided what that job is, in advance. That's the entire system.`,
          ],
          image:        '/explorer-assets/money-business/l04-magazine-budget-example.png',
          imageCaption: `Zero-based budgeting — every dollar assigned a job, so nothing is left unplanned or wasted`,
          vocab: [
            { word: `zero-based budget`, definition: `A budgeting method where every dollar of income is assigned to a specific expense or purpose — income minus all assigned expenses equals zero. Nothing is left unplanned.`, audioPrompt: `Zero-based budget — a budgeting method where every dollar of income is assigned to a specific expense or purpose. Income minus all assigned expenses equals zero. Nothing is left unplanned.` },
            { word: `allocation`,        definition: `Assigning money to a specific category or purpose — in a budget, you allocate income across savings, giving, spending categories, and goals.`,                                    audioPrompt: `Allocation — assigning money to a specific category or purpose. In a budget, you allocate income across savings, giving, spending categories, and goals.` },
          ],
        },
        {
          type:          'magazine',
          section:       4,
          totalSections: 4,
          headline:      `Budgeting for a Goal`,
          paragraphs: [
            `One of the most powerful uses of a budget is working backward from a goal. Want something that costs $60? Find out how much you can save each week. Divide $60 by your weekly savings amount and you know exactly how many weeks until you can afford it. Math becomes your superpower.`,
            `This is called goal-based saving — and it transforms how you think about wanting things. Instead of "I can't afford that," the question becomes "How long will I save for that?" Instead of feeling powerless, you have a timeline and a plan. That shift in thinking is worth more than any single purchase.`,
            `Budgeting for a goal also builds patience. When you've been saving for six weeks for something, you value it differently than if you bought it impulsively. You thought about it, worked for it, and waited for it. That kind of purchase tends to feel better — and last longer.`,
          ],
          image:        '/explorer-assets/money-business/l04-magazine-budgeting-goal.png',
          imageCaption: `Budgeting for a goal — dividing cost by weekly savings to find a timeline, turning math into power`,
          vocab: [
            { word: `goal`,              definition: `A specific result you're working toward — in money terms, a financial goal is something you want to buy or achieve that requires saving a specific amount over time.`,                          audioPrompt: `Goal — a specific result you're working toward. In money terms, a financial goal is something you want to buy or achieve that requires saving a specific amount over time.` },
            { word: `goal-based saving`, definition: `Saving a specific amount each period in order to reach a defined goal by a target date — calculated by dividing the total cost by the amount you can save per week or month.`, audioPrompt: `Goal-based saving — saving a specific amount each period in order to reach a defined goal by a target date. Calculated by dividing the total cost by the amount you can save per week or month.` },
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
    fetch('/explorer-assets/money-business/l04-magazine-what-is-a-budget.png', { method: 'HEAD' }),
    fetch('/explorer-assets/money-business/l04-magazine-income-expenses.png',  { method: 'HEAD' }),
    fetch('/explorer-assets/money-business/l04-magazine-budget-example.png',   { method: 'HEAD' }),
    fetch('/explorer-assets/money-business/l04-magazine-budgeting-goal.png',   { method: 'HEAD' }),
  ]).then(([r1, r2, r3, r4]) => {
    console.log(`[ASSET-CHECK-MONEY-L04] what-is-a-budget: ${r1.ok}, income-expenses: ${r2.ok}, budget-example: ${r3.ok}, budgeting-goal: ${r4.ok}`);
  }).catch(() => {
    console.log('[ASSET-CHECK-MONEY-L04] Could not verify image assets — network check failed');
  });
})();

export default moneybusiness_explorer_l04_screens;
