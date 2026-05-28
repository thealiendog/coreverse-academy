// ─────────────────────────────────────────────────────────────────────────────
// MONEY & BUSINESS UE  |  L05 — Understanding Income and Expenses
// Age band : upper_explorers (9–10)   Guide: ace
// Standards: Jump$tart Personal Finance — Earning income, Spending
// CALIBRATED: UE spec v1.1 — real domain terms, em-dashes sparing
// SCOPE: 4 concepts — what income is and where it comes from, what
//        expenses are (fixed vs variable), the gap = freedom,
//        needs vs wants for life decisions
// VERSION: v1
// ─────────────────────────────────────────────────────────────────────────────

const MONEY_UE_L05 = {
  ageBand: `upper_explorers`,
  subjectId: `money`,
  guide: `ace`,

  lessons: [
    {
      id: `mb-9-10-05`,
      title: `Understanding Income and Expenses`,
      duration: 18,
      xpReward: 75,
      badge: `cashflow-master`,
      badgeName: `Cashflow Master`,

      screens: [
        {
          id: `l05-welcome`,
          type: `welcome`,
          guideText: `Hey {name}, Ace here. Today we look at the two sides of every financial life. INCOME (money coming in) and EXPENSES (money going out). Doesn't matter if you're a kid getting allowance or an adult running a business. Same two sides. The GAP between them is where everything financial happens. Save the gap and you build wealth. Spend the gap and you stay stuck. Lose the gap and you go into debt. Today we look at both sides clearly. Let's go.`,
          headline: `Understanding Income and Expenses`,
          subtitle: `Money in. Money out. The gap is where freedom lives.`,
          visual: `/ue-assets/money/l05-welcome.webp`,
        },

        {
          id: `l05-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Income: Where Money Comes From`,
          paragraphs: [
            `INCOME is money coming INTO your life. Most people get income from a JOB (working for someone else and getting paid). Other types of income include OWNING A BUSINESS (revenue minus costs equals profit, which is your income). INVESTMENTS (stocks, bonds, real estate that grow or pay dividends). GIFTS (birthday money, allowance). Even SELLING SOMETHING you own counts as income.`,
            `Most people focus only on getting MORE income from a job. That's important, but it's just one source. People who become financially secure usually have INCOME from multiple sources by middle age. They might have a job (job income), investments that pay dividends (investment income), maybe a small side business (business income). Multiple sources are more resilient. If one disappears (job loss, market crash), the others keep money flowing in. The earlier you start thinking this way, the better positioned you'll be.`,
          ],
          image: `/ue-assets/money/l05-s1-income.webp`,
          imageCaption: `Job, business, investments, gifts, sales. Income can come from many sources.`,
          vocab: [
            {
              word: `income`,
              definition: `Money coming INTO your life from any source: a job, a business, investments, gifts, or selling things you own. Most adults get income from multiple sources over their lifetime.`,
              audioPrompt: `Income is money coming into your life from any source, {name}. Most people get income from a job: working for someone else and getting paid. Other types include owning a business (profit becomes your income), investments (stocks, bonds, real estate that pay returns), gifts (allowance, birthday money), or selling something you own. People who become financially secure usually have income from multiple sources by middle age. Multiple sources are more resilient. If one disappears, the others keep money flowing in.`,
            },
            {
              word: `wage`,
              definition: `Money paid to an employee for their work. Can be hourly (paid per hour worked) or salary (a fixed amount per year). The most common form of income for most adults.`,
              audioPrompt: `A wage is money paid to an employee for their work, {name}. Wages come in two main forms. Hourly wages pay workers for each hour they work. If you earn 15 dollars an hour and work 40 hours, your weekly wage is 600 dollars. Salary wages pay a fixed amount per year, paid in regular intervals (weekly or bi-weekly). A person earning 60,000 dollars per year would earn about 1,150 dollars per week. Most adults earn income primarily through wages, making it the most common income source.`,
            },
          ],
        },

        {
          id: `l05-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Expenses: Where Money Goes`,
          paragraphs: [
            `EXPENSES are money going OUT of your life. They come in two main types. FIXED EXPENSES stay roughly the same each month: rent or mortgage, insurance, phone bills, streaming subscriptions, school tuition. You can predict them in advance. VARIABLE EXPENSES change month to month: groceries, gas, eating out, entertainment, gifts. They depend on choices and circumstances. Understanding both is the foundation of managing your money well.`,
            `Expenses also split into NEEDS and WANTS. NEEDS are things essential for survival and basic functioning: food, shelter, basic clothing, healthcare. WANTS are things that make life more enjoyable but aren't strictly necessary: fancy restaurants, the newest phone, vacations, hobbies. The line between needs and wants isn't always clear. Internet might feel like a "need" for someone working from home, but a "want" for someone retired. Smart financial thinking means being HONEST with yourself about which is which. People who confuse wants with needs often spend more than they can afford.`,
          ],
          image: `/ue-assets/money/l05-s2-expenses.webp`,
          imageCaption: `Fixed and variable. Needs and wants. Expenses tell the story of your priorities.`,
          vocab: [
            {
              word: `expense`,
              definition: `Money going OUT of your life. Comes in two types: fixed (stays the same each month, like rent) and variable (changes month to month, like groceries). Also splits into needs and wants.`,
              audioPrompt: `An expense is money going out of your life, {name}. Expenses come in two main types. Fixed expenses stay roughly the same each month. Rent. Mortgage. Insurance. Phone bills. Subscriptions. Variable expenses change month to month. Groceries. Gas. Eating out. Entertainment. Gifts. Expenses also split into needs and wants. Needs are essential for survival and basic functioning. Wants make life more enjoyable but aren't strictly necessary. Smart financial thinking means being honest about which is which.`,
            },
            {
              word: `subscription`,
              definition: `A recurring expense paid regularly (monthly or yearly) for ongoing access to a product or service. Easy to forget and accumulate. One of the most common categories of hidden, unused expenses.`,
              audioPrompt: `A subscription is a recurring expense paid regularly for ongoing access to a product or service, {name}. Streaming platforms. Music apps. Gaming services. Cloud storage. Magazines. Many products today are sold as subscriptions rather than one-time purchases. Subscriptions are technically fixed expenses (same amount every month, automatic). They're also one of the most common categories of forgotten expenses. People sign up, forget, and keep paying for services they barely use. Checking your subscriptions every few months and canceling unused ones is a simple habit that saves real money over time.`,
            },
          ],
        },

        {
          id: `l05-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `The Gap: Where Financial Freedom Lives`,
          paragraphs: [
            `Here's the secret of personal finance, summed up in one idea. The GAP between income and expenses is where everything happens. If income is BIGGER than expenses, you have a POSITIVE GAP. You can save that gap, invest it, give some away, or pay down debt. Over time, a consistent positive gap builds wealth. If income is SMALLER than expenses, you have a NEGATIVE GAP. You're going into debt, draining savings, or both. A long enough negative gap leads to serious financial trouble.`,
            `Two ways to grow the gap: EARN MORE or SPEND LESS. Both work. Both have trade-offs. Earning more might mean working longer hours, learning new skills, or taking risks (like starting a business). Spending less might mean giving up some wants, finding cheaper alternatives, or just being more thoughtful about purchases. Most people who become financially secure do BOTH over their lifetime. They increase income through career growth or businesses, AND they keep expenses controlled instead of letting them grow whenever income grows. Ace's bonus: when income increases, the temptation is always to increase expenses to match. Resisting that is how the gap grows.`,
          ],
          image: `/ue-assets/money/l05-s3-gap.webp`,
          imageCaption: `Positive gap: wealth builds. Negative gap: debt builds. The gap is the game.`,
          vocab: [
            {
              word: `budget`,
              definition: `A plan for how you'll spend and save your income. Tracks expected income and expenses to make sure the gap is positive, ideally so you can save or invest.`,
              audioPrompt: `A budget is a plan for how you'll spend and save your income, {name}. Tracks expected income and expenses to make sure the gap stays positive. Ideally so you can save or invest the difference. Budgets don't have to be complicated. The simplest is just listing your monthly income, your monthly expenses (fixed and variable), and the gap. If the gap is positive, you have margin for saving. If negative, something needs to change. People who track this stay in much better financial shape than people who don't.`,
            },
            {
              word: `savings rate`,
              definition: `The percentage of your income that you save or invest rather than spend. A higher savings rate builds wealth faster. Most financial advisors suggest saving at least 10–20% of income.`,
              audioPrompt: `Savings rate is the percentage of your income that you save or invest rather than spend, {name}. If you earn 2,000 dollars a month and save 400 dollars, your savings rate is 20 percent. A higher savings rate builds wealth faster because more money goes into the positive gap. Most financial advisors suggest saving at least 10 to 20 percent of income. Tracking your savings rate is one of the clearest ways to measure your financial progress over time.`,
            },
          ],
        },

        {
          id: `l05-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Tracking the Gap: Why Most People Don't (But Should)`,
          paragraphs: [
            `Most people DON'T track their income and expenses carefully. They have a vague sense of how much they make and roughly what they spend, but no clear picture. This is one of the biggest reasons people end up in financial trouble. They overestimate income, underestimate spending, and don't notice when the gap goes negative until it's too late. People who DO track usually end up with healthier finances, just because they know what's actually happening.`,
            `You don't need fancy software. Even a simple spreadsheet or notebook works. Write down every income source and how much. Write down every regular expense. Calculate the gap. Then check actual spending each month against the plan. Notice patterns. Adjust. People who do this in their teens or early 20s often end up much better off financially than smarter people who never bothered. Tracking isn't fun, but it's powerful. Most things that build long-term wealth aren't fun in the moment. They're just patient, consistent habits.`,
          ],
          image: `/ue-assets/money/l05-s4-tracking.webp`,
          imageCaption: `Tracking isn't fun. It's powerful. Most patient habits aren't exciting.`,
          vocab: [
            {
              word: `cash flow`,
              definition: `The pattern of money coming in (income) and going out (expenses) over time. Positive cash flow means income is bigger than expenses; negative means the reverse.`,
              audioPrompt: `Cash flow is the pattern of money coming in (income) and going out (expenses) over time, {name}. Positive cash flow means income is bigger than expenses. Negative cash flow means expenses are bigger than income. Cash flow is one of the most important measurements for businesses AND people. Even profitable businesses can fail if their cash flow is poorly timed (money owed to them doesn't arrive before they need to pay their own bills). For individuals, positive cash flow over time builds wealth. Negative cash flow over time builds debt.`,
            },
            {
              word: `net worth`,
              definition: `What you own (assets) minus what you owe (debts). A snapshot of overall financial health. Positive net worth means assets exceed debts; negative means the opposite.`,
              audioPrompt: `Net worth is what you own (assets) minus what you owe (debts), {name}. If you have 5,000 dollars in savings, a car worth 8,000 dollars, and a 3,000 dollar loan, your net worth is 10,000 dollars. Net worth is a snapshot of overall financial health. Positive net worth means you own more than you owe. Negative net worth means the opposite. People who maintain positive cash flow over time build positive net worth. Tracking net worth alongside income and expenses gives you the most complete picture of your financial life.`,
            },
          ],
        },

        {
          id: `l05-game`,
          type: `interactive`,
          format: `investigation`,
          guideText: `Investigation time, {name}. Four expenses in someone's life. For each one, identify what kind it is: FIXED EXPENSE (predictable, same amount each month), VARIABLE EXPENSE (changes month to month), or NEED VS WANT QUESTION (depends on circumstances)?\n\nOne is sneakier than it looks.`,
          options: [
            { id: `fixed`,    label: `Fixed Expense`,        color: `#60A5FA`, description: `Roughly the same amount each month. Predictable in advance. Like rent or insurance.` },
            { id: `variable`, label: `Variable Expense`,     color: `#FBBF24`, description: `Changes month to month based on choices and circumstances. Like groceries or gas.` },
            { id: `gray`,     label: `Need vs Want Question`, color: `#A78BFA`, description: `Whether this is a need or a want depends on the specific situation.` },
          ],
          cases: [
            {
              id: `case-1`,
              caseTitle: `Expense #1`,
              clues: [
                { text: `An apartment renter pays $1,800 in rent on the first of every month.` },
                { text: `The amount is the same regardless of how often the person is home.` },
                { text: `It will stay $1,800 for the whole year, then might go up next year.` },
              ],
              correctAnswer: `fixed`,
              realWorldExample: `Rent is the most classic fixed expense.`,
              explanation: `Same amount every month. Predictable in advance. Pure fixed expense. Knowing your fixed expenses is the start of any budget.`,
            },
            {
              id: `case-2`,
              caseTitle: `Expense #2`,
              clues: [
                { text: `Someone spends about $400 on groceries one month.` },
                { text: `The next month they spend $520 because they had guests.` },
                { text: `The month after, they spend $350 because they ate out more (which became a different variable expense).` },
              ],
              correctAnswer: `variable`,
              realWorldExample: `Groceries are a classic variable expense.`,
              explanation: `Different amount every month. Depends on choices and circumstances. Pure variable expense. Variable expenses are often where people overspend without noticing because they don't feel predictable.`,
            },
            {
              id: `case-3`,
              caseTitle: `Expense #3`,
              clues: [
                { text: `A 24-year-old buys a $1,000 gaming computer.` },
                { text: `She works in tech and might use it for coding sometimes (job-related).` },
                { text: `She also wants to play games on it during evenings (recreation).` },
              ],
              correctAnswer: `gray`,
              realWorldExample: `Many purchases live in a gray zone between needs and wants.`,
              explanation: `Is this a need (work tool) or a want (entertainment)? Honestly, BOTH. She could buy a cheaper laptop just for work and save $700. Or buy the gaming computer and call it work-justified. Pure need-vs-want question. Lesson: many real purchases live in this gray zone. The honest answer requires thinking about what you'd actually buy if it weren't framed as work.`,
            },
            {
              id: `case-4`,
              caseTitle: `Expense #4 — The Tricky One`,
              clues: [
                { text: `An adult pays $14.99 a month for a streaming service.` },
                { text: `It comes out of their bank account automatically on the same day every month.` },
                { text: `They've barely used it in the past 3 months.` },
              ],
              correctAnswer: `fixed`,
              realWorldExample: `Subscriptions are technically fixed expenses, even when forgotten.`,
              explanation: `Tricky because the SERVICE feels like entertainment (variable/want). But the EXPENSE PATTERN is fixed. Same $14.99 every month, automatic, predictable. So strictly speaking, it's a fixed expense. The deeper lesson: SUBSCRIPTIONS are the most common kind of fixed expense people forget about. Forgotten subscriptions are one of the biggest hidden expense categories in modern life. Check yours every few months. Cancel what you don't use.`,
            },
          ],
        },

        {
          id: `l05-quiz`,
          type: `quiz`,
          guideText: `Let's see what stuck, {name}.`,
          questions: [
            { id: `l05-q1`, format: `multiple-choice`,
              question: `What is INCOME?`,
              options: [
                `Money you spend`,
                `Money coming IN to your life from any source: jobs, businesses, investments, gifts, sales`,
                `Tax`,
                `Debt`,
              ],
              correctIndex: 1,
              explanation: `Income is money coming in. Jobs are the most common source for most people. But income can also come from businesses, investments, gifts, or selling things. People who become financially secure usually have multiple income sources.` },

            { id: `l05-q2`, format: `multiple-choice`,
              question: `What's the difference between FIXED and VARIABLE expenses?`,
              options: [
                `They're the same`,
                `Fixed expenses stay roughly the same each month (rent, insurance). Variable expenses change month to month (groceries, gas).`,
                `Fixed are bigger`,
                `Variable are unimportant`,
              ],
              correctIndex: 1,
              explanation: `Fixed expenses are predictable. Variable expenses change. Both matter. Knowing your fixed expenses tells you the minimum you need each month. Tracking variable expenses tells you where flexibility (and overspending) tends to happen.` },

            { id: `l05-q3`, format: `multiple-choice`,
              question: `What's the GAP between income and expenses?`,
              options: [
                `Doesn't matter`,
                `The most important number in personal finance — positive gap builds wealth, negative gap builds debt`,
                `Always zero`,
                `Just an accounting trick`,
              ],
              correctIndex: 1,
              explanation: `The gap is the most important number in personal finance. Positive gap means you have margin to save, invest, or pay down debt. Negative gap means you're spending more than you make. Long-term wealth or trouble is decided by what happens with this gap.` },

            { id: `l05-q4`, format: `multiple-choice`,
              question: `What are the TWO ways to grow the gap between income and expenses?`,
              options: [
                `Only earn more`,
                `Earn more OR spend less — most people who become financially secure do both over their lifetime`,
                `Only spend less`,
                `Magic`,
              ],
              correctIndex: 1,
              explanation: `Both sides matter. Earning more might mean career growth, side businesses, or new skills. Spending less might mean cutting wants or finding cheaper alternatives. Most financially secure people work both sides patiently over years.` },

            { id: `l05-q5`, format: `true-false`,
              question: `True or false: Most people DON'T carefully track their income and expenses, even though doing so usually leads to healthier finances.`,
              correctAnswer: true,
              explanation: `True. Most people have only a vague sense of their finances. They overestimate income, underestimate spending, and don't notice problems until late. People who DO track often end up much better off, even if they're not smarter or higher-earning.` },

            { id: `l05-q6`, format: `multiple-choice`,
              question: `What's the difference between a NEED and a WANT?`,
              options: [
                `Same thing`,
                `Needs are essential for survival and basic functioning. Wants make life more enjoyable but aren't strictly necessary.`,
                `Needs are cheap, wants are expensive`,
                `Needs are only food`,
              ],
              correctIndex: 1,
              explanation: `Needs: food, shelter, basic clothing, healthcare. Wants: fancy restaurants, the newest phone, vacations. The line isn't always clear (internet might be a need for some, a want for others). Being honest with yourself about which is which prevents overspending.` },

            { id: `l05-q7`, format: `multiple-choice`,
              question: `What is a BUDGET?`,
              options: [
                `A boring restriction`,
                `A plan for how you'll spend and save your income — tracks income and expenses to make sure the gap stays positive`,
                `Just for poor people`,
                `A type of tax`,
              ],
              correctIndex: 1,
              explanation: `Budgets are plans. Track expected income. Track expected expenses. Make sure the gap is positive. Notice when actual spending diverges from the plan. Adjust. People who budget tend to be much more financially healthy than people who don't.` },

            { id: `l05-q8`, format: `multiple-choice`,
              question: `What is CASH FLOW?`,
              options: [
                `Only for businesses`,
                `The pattern of money coming in and going out over time — positive cash flow means income is bigger than expenses`,
                `A river of money`,
                `Just a fancy word for money`,
              ],
              correctIndex: 1,
              explanation: `Cash flow is the pattern of money in and money out. Positive cash flow over time builds wealth. Negative cash flow over time builds debt. Cash flow applies to people AND businesses. Even profitable businesses can fail if their cash flow is poorly timed.` },
          ],
        },

        {
          id: `l05-reflection`,
          type: `reflection`,
          guideText: `Before we wrap, {name}, pick ONE question and actually answer it. Your response gets saved, and I'll remember it next time we talk.`,
          prompts: [
            { id: `r1`, text: `Think about your "income" right now (allowance, gifts, money for chores). How much do you get in an average month? Where does it come from?` },
            { id: `r2`, text: `Think about your "expenses" right now. What do you spend money on? List your top three things.` },
            { id: `r3`, text: `For each of your expenses, decide honestly: is it a NEED, a WANT, or somewhere in between?` },
            { id: `r4`, text: `If you were 25 and earning $4,000 a month, where would you want your "gap" to go? Saving? Investing? Giving? Travel? What matters most to you?` },
          ],
        },

        {
          id: `l05-realworld`,
          type: `real-world`,
          guideText: `Income vs expenses is the most important financial idea you can grasp at your age. Most adults wish they had thought about this seriously much earlier. Tracking your money, knowing your gap, being honest about needs vs wants — these aren't restrictions. They're how you create REAL options in your life. People with strong financial habits have more freedom to make choices. People with weak financial habits often feel trapped by their finances. Building strong habits early sets you up for decades of better choices.`,
          familyAdventure: `Family Cash Flow Conversation. As a family, talk about (at an age-appropriate level): what are your family's main income sources? What are your biggest fixed expenses? What's a fixed expense you could maybe reduce, and what's a variable expense you might watch more carefully? Doesn't have to get into specific dollar amounts. The thinking is what matters. Many families have never had this conversation.`,
          creativePrompt: {
            intro: `Imagine you're 25 years old with your first real job. Write a one-month budget plan for yourself.`,
            floor: `Write at least 5 sentences. Estimate your monthly income, your top fixed expenses, and one variable expense category. Show what your gap would be.`,
            stretch: `Write 8 to 10 sentences. Cover monthly income, several fixed expenses (rent, insurance, subscriptions), variable expenses (food, gas, entertainment), and what you'd do with the gap (save, invest, etc.).`,
            open: `Write as much as you want. Build a full first-job budget. Include income, fixed and variable expenses, your honest needs vs wants, and a plan for what to do with positive cash flow. Show you've thought about emergencies, future goals, and balance between living now and saving for the future.`,
            frames: [
              `At 25, my monthly income would be about ___.`,
              `My fixed expenses would include ___.`,
              `My variable expenses would include ___.`,
              `That leaves a gap of about ___.`,
              `I'd want to use that gap for ___.`,
            ],
          },
        },

        {
          id: `l05-celebration`,
          type: `celebration`,
          message: `Great work, {name}. You can now explain what income and expenses are, the difference between fixed and variable, what the gap is and why it matters, and why tracking is so powerful. Next lesson: a deeper measure of wealth that adults use. NET WORTH. What you own minus what you owe. — Ace.`,
          badge: `cashflow-master`,
          badgeName: `Cashflow Master`,
          xpEarned: 75,
        },
      ],
    },
  ],
};

export default MONEY_UE_L05;

// ─── Dev asset check ──────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const screens = MONEY_UE_L05.lessons[0].screens;
  const mags = screens.filter(s => s.type === 'magazine').length;
  const game = screens.find(s => s.type === 'interactive')?.cases?.length ?? 0;
  const quiz = screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  const refl = screens.find(s => s.type === 'reflection')?.prompts?.length ?? 0;
  const totalVocab = screens.filter(s => s.type === 'magazine').reduce((sum, s) => sum + (s.vocab?.length || 0), 0);
  console.log(`[LESSON-MONEY-UE-L05 v1] Loaded with ${mags} magazine sections, ${totalVocab} vocab terms, ${game} game cases, ${quiz} quiz Qs, ${refl} reflection prompts`);
}
