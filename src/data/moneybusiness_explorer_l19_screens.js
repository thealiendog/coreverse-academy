// ============================================================
// COREVERSE EXPLORERS — Money & Business · Lesson 19
// "Investing: Making Money Work for You"
// Ages 6–8 | Guide: Ace | ExplorerLessonPlayer format
// ============================================================

const moneybusiness_explorer_l19_screens = {
  ageBand:   'explorers',
  subjectId: 'money',
  guide:     'ace',
  lessons: [
    {
      id:        'mb-6-8-19',
      title:     `Investing: Making Money Work for You`,
      duration:  12,
      xpReward:  50,
      badge:     'investor',
      badgeName: `Investor`,
      screens: [
        // PHASE 1 — WELCOME
        {
          type:      'welcome',
          guideText: `Here's one of the most powerful money secrets: you don't have to trade your time for money. You can make your money work FOR you while you sleep, go to school, play outside. This is called investing.`,
        },

        // PHASE 2 — MAGAZINE STORY (6 sections)
        {
          type:          'magazine',
          section:       1,
          totalSections: 6,
          headline:      'Making Money Work for You',
          paragraphs: [
            'Most people trade time for money — they work, they earn.',
            'Investing flips that. You buy something that grows in value while you sleep, study, or play. Your money works FOR you.',
          ],
          image:        '/explorer-assets/money-business/l19-s1-money-working.png',
          imageCaption: 'Investing flips the equation: instead of you working for money, your money starts working for you',
          vocab: [
            { word: 'investing', definition: 'Using money to buy something that grows in value or produces income over time. Putting money to work instead of leaving it idle.', audioPrompt: 'Investing — using money to buy something that grows in value or produces income over time. Putting money to work instead of leaving it idle.' },
            { word: 'asset',     definition: 'Anything you own that has value and can grow or earn money. Stocks, real estate, businesses, and bonds are all assets.', audioPrompt: 'Asset — anything you own that has value and can grow or earn money. Stocks, real estate, businesses, and bonds are all assets.' },
          ],
        },
        {
          type:          'magazine',
          section:       2,
          totalSections: 6,
          headline:      'Four Ways to Invest',
          paragraphs: [
            'There are four main ways to invest your money.',
            'Stocks (pieces of companies). Bonds (loans you make to governments or companies). Real estate (land or buildings). And direct business investment.',
          ],
          image:        '/explorer-assets/money-business/l19-s2-four-paths.png',
          imageCaption: 'Stocks, bonds, real estate, businesses — each works differently. Smart investors use them all.',
          vocab: [
            { word: 'bond',        definition: 'A loan you make to a government or company. They pay you regular interest, then return your money at the end.', audioPrompt: 'Bond — a loan you make to a government or company. They pay you regular interest, then return your money at the end.' },
            { word: 'real estate', definition: 'Land and buildings. One of the oldest forms of investment — you earn through rent or by selling for more later.', audioPrompt: 'Real estate — land and buildings. One of the oldest forms of investment: you earn through rent or by selling for more later.' },
          ],
        },
        {
          type:          'magazine',
          section:       3,
          totalSections: 6,
          headline:      'Compound Interest',
          paragraphs: [
            'Compound interest is when you earn returns on your returns. The gains build on themselves.',
            '$100 at 10% per year: $110 after year 1. $121 after year 2. $259 after year 10. $4,526 after year 40 — from a single $100.',
          ],
          image:        '/explorer-assets/money-business/l19-s3-compound-snowball.png',
          imageCaption: 'Compound interest is a snowball. Each year, it picks up more — and what it picks up makes the next year bigger.',
          vocab: [
            { word: 'compound interest',  definition: 'Earning returns on your returns. The snowball effect that makes investing so powerful over long periods.', audioPrompt: 'Compound interest — earning returns on your returns. The snowball effect that makes investing so powerful over long periods.' },
            { word: 'exponential growth', definition: 'Growth that accelerates because each gain builds on every previous gain. Compound interest creates exponential growth.', audioPrompt: 'Exponential growth — growth that accelerates because each gain builds on every previous gain. Compound interest creates exponential growth.' },
          ],
        },
        {
          type:          'magazine',
          section:       4,
          totalSections: 6,
          headline:      'Risk Is Real',
          paragraphs: [
            'Every investment carries risk — the chance your money loses value instead of growing.',
            'Stocks can crash. Real estate can drop. Businesses can fail. Risk isn\'t something to fear or ignore. It\'s something to understand and manage.',
          ],
          image:        '/explorer-assets/money-business/l19-s4-risk-arrows.png',
          imageCaption: 'Every investment can go up. Every investment can go down. Smart investors plan for both.',
          vocab: [
            { word: 'risk',   definition: 'The chance that an investment loses value rather than grows. Every investment has some risk — the question is how much.', audioPrompt: 'Risk — the chance that an investment loses value rather than grows. Every investment has some risk; the question is how much.' },
            { word: 'return', definition: 'The gain or loss on an investment over time. A higher potential return usually comes with higher risk.', audioPrompt: 'Return — the gain or loss on an investment over time. A higher potential return usually comes with higher risk.' },
          ],
        },
        {
          type:          'magazine',
          section:       5,
          totalSections: 6,
          headline:      'Don\'t Put All Your Eggs in One Basket',
          paragraphs: [
            'Smart investors don\'t bet everything on one thing. They diversify — spread money across different investments.',
            'If one drops, others may hold steady or rise. A balanced portfolio handles bad days far better than a concentrated one.',
          ],
          image:        '/explorer-assets/money-business/l19-s5-many-baskets.png',
          imageCaption: 'Spread across many baskets, no single broken basket can ruin everything',
          vocab: [
            { word: 'diversification', definition: 'Spreading money across different investments to reduce risk. The single most important rule of safe investing.', audioPrompt: 'Diversification — spreading money across different investments to reduce risk. The single most important rule of safe investing.' },
            { word: 'portfolio',       definition: 'The full collection of investments a person owns. A balanced portfolio holds different types of assets together.', audioPrompt: 'Portfolio — the full collection of investments a person owns. A balanced portfolio holds different types of assets together.' },
          ],
        },
        {
          type:          'magazine',
          section:       6,
          totalSections: 6,
          headline:      'Time Beats Money',
          paragraphs: [
            'You don\'t need a lot to start. You need time — and you have more of that than anyone.',
            'A young person investing small amounts will usually outpace someone who waits until they\'re "rich" to start. Every year of delay is permanent.',
          ],
          image:        '/explorer-assets/money-business/l19-s6-time-becomes-money.png',
          imageCaption: 'Time can\'t be bought back. Every year you wait is growth that\'s permanently gone.',
          vocab: [
            { word: 'capital',      definition: 'Money you have available to invest. Smart investing values time over having a huge amount of capital up front.', audioPrompt: 'Capital — money you have available to invest. Smart investing values time over having a huge amount of capital up front.' },
            { word: 'time horizon', definition: 'How long you plan to keep money invested. The longer your time horizon, the more compound interest can work in your favor.', audioPrompt: 'Time horizon — how long you plan to keep money invested. The longer your time horizon, the more compound interest can work in your favor.' },
          ],
        },

        // PHASE 3 — INTERACTIVE
        {
          type:          'interactive',
          activityType:  'drag-match',
          instruction:   `Tap each card, then tap which type of investment it describes!`,
          guideText:     `Investors can put their money to work in four main ways: stocks, bonds, real estate, and business investments. Each works differently and carries different levels of risk and potential return. Can you match each description to the right investment type?`,
          columnHeaders: [`The Investment`, `What Type Is It?`],
          items: [
            { image: 'l19-game-stock.png',    label: `Buying a small piece of ownership in a company, hoping it will grow more valuable as the company succeeds over time.`,                 correctMatch: 'stock',              objectPosition: 'center 50%', matchPhrase: `Stock! When you buy a stock, you become a part-owner of that company. If it grows and becomes more profitable, your share becomes more valuable. Stocks have historically been one of the most powerful long-term ways to build wealth — but their value can move up or down significantly in the short term. Patience is the key ingredient when investing in stocks.` },
            { image: 'l19-game-bond.png',     label: `Lending money to a government or company, which promises to pay you back with regular interest over a fixed period.`,                  correctMatch: 'bond',               objectPosition: 'center 50%', matchPhrase: `Bond! When you buy a bond, you're the lender — you give money to a government or company, and they pay you interest on a regular schedule before returning your original amount at the end. Bonds are generally more stable and predictable than stocks, but they also tend to grow more slowly. They're often used to balance a portfolio because they behave differently from stocks.` },
            { image: 'l19-game-real-estate.png', label: `Owning land or a building, then renting it to others or selling it later for more than you paid.`,                                correctMatch: 'real-estate',        objectPosition: 'center 50%', matchPhrase: `Real Estate! Owning property that generates rental income or appreciates in value over time is one of the oldest forms of investment. Real estate can provide both regular cash flow from rent and long-term growth from rising property values. It typically requires more money to start than stocks or bonds, but can be very powerful over decades.` },
            { image: 'l19-game-business.png', label: `Putting money into a new business in exchange for a share of the profits as it grows.`,                                               correctMatch: 'business-investment', objectPosition: 'center 50%', matchPhrase: `Business Investment! When you invest in a business, you're betting that it will succeed and grow. If it does, your share of the business becomes valuable and you receive a portion of the profits. If the business struggles or fails, you may lose your investment. Business investing carries higher risk than stocks or bonds — but also offers some of the highest potential rewards when the business succeeds.` },
          ],
          buckets: [
            { id: 'stock',               label: `📈 Stock`,                color: '#60A5FA' },
            { id: 'bond',                label: `📋 Bond`,                 color: '#818CF8' },
            { id: 'real-estate',         label: `🏠 Real Estate`,          color: '#F59E0B' },
            { id: 'business-investment', label: `🚀 Business Investment`,  color: '#34D399' },
          ],
        },

        // PHASE 4 — MASTERY QUIZ
        {
          type:      'quiz',
          guideText: `Quiz time, {name}! Let's see what you've learned about investing. Answer all 6 questions to earn your Investor badge!`,
          questions: [
            {
              format:       'multiple-choice',
              question:     `What is investing?`,
              options:      [`Spending money on expensive things`, `Keeping money under your mattress`, `Using money to buy something that grows in value or produces income over time`, `Giving money to a bank to hold`],
              correctIndex: 2,
            },
            {
              format:       'multiple-choice',
              question:     `What is compound interest?`,
              options:      [`Interest charged on credit cards`, `Earning returns on both your original money AND your previous returns`, `A type of savings account fee`, `Interest the government pays you`],
              correctIndex: 1,
            },
            {
              format:       'multiple-choice',
              question:     `What is diversification and why does it matter?`,
              options:      [`Investing only in one great company`, `Buying different things at a store`, `Spreading money across different investments to reduce risk`, `A strategy to pick the best stocks`],
              correctIndex: 2,
            },
            {
              format:        'true-false',
              question:      `Diversification means spreading your money across different types of investments to reduce the risk of losing everything at once.`,
              correctAnswer: true,
            },
            {
              format:       'fill-blank',
              question:     `Earning returns on both your original investment and your previous returns is called ___ interest.`,
              options:      [`compound`, `simple`, `flat`, `fixed`],
              correctIndex: 0,
            },
            {
              format:       'multiple-choice',
              question:     `Why does starting to invest earlier in life give you such a significant advantage?`,
              options:      [`Young investors pay lower fees than adults`, `Earlier investors receive government bonuses`, `More time means compound interest has longer to grow your money`, `Stock prices are always lower for younger investors`],
              correctIndex: 2,
            },
          ],
        },

        // PHASE 5 — REAL-WORLD CONNECTION
        {
          type:            'real-world',
          guideText:       `Search for a compound interest calculator online with a grown-up and type in an amount you could realistically save — even just a few dollars a week. The number it shows 30 years from now will change how you think about every dollar.`,
          familyAdventure: `Open a custodial investment account at a reputable brokerage — with a parent as guardian. Even if you only put in a small amount, it's real. Watch how the value changes over the coming months. This is your first investment!`,
          creativePrompt:  `Go to a compound interest calculator online with a parent. Enter: $1,000 starting amount, 7% annual return, 40 years. See what it grows to. Then try $5,000. Then try $1,000 with $100 added monthly. See the power of time and consistency.`,
        },

        // PHASE 6 — CELEBRATION
        {
          type:      'celebration',
          xpEarned:  50,
          badge:     'investor',
          badgeName: `Investor`,
          message:   `Excellent work, {name}! You now understand how money can grow on its own — and why starting early is the single most powerful financial decision a young person can make. Your future self will thank your present self for this one. Ace is so proud to share this knowledge with you.`,
        },
      ],
    },
  ],
};

// Log on module load — confirms lesson wired correctly + verifies image assets at runtime
(() => {
  const l    = moneybusiness_explorer_l19_screens.lessons[0];
  const mags = l.screens.filter(s => s.type === 'magazine').length;
  const game = l.screens.find(s => s.type === 'interactive')?.items?.length || 0;
  const quiz = l.screens.find(s => s.type === 'quiz')?.questions?.length || 0;
  console.log(`[LESSON-MONEY-L19] Loaded: "Investing: Making Money Work for You" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
  Promise.all([
    fetch('/explorer-assets/money-business/l19-s1-money-working.png',     { method: 'HEAD' }),
    fetch('/explorer-assets/money-business/l19-s2-four-paths.png',        { method: 'HEAD' }),
    fetch('/explorer-assets/money-business/l19-s3-compound-snowball.png', { method: 'HEAD' }),
    fetch('/explorer-assets/money-business/l19-s4-risk-arrows.png',       { method: 'HEAD' }),
    fetch('/explorer-assets/money-business/l19-s5-many-baskets.png',      { method: 'HEAD' }),
    fetch('/explorer-assets/money-business/l19-s6-time-becomes-money.png', { method: 'HEAD' }),
  ]).then(([r1, r2, r3, r4, r5, r6]) => {
    console.log(`[ASSET-CHECK-MONEY-L19] money-working: ${r1.ok}, four-paths: ${r2.ok}, compound-snowball: ${r3.ok}, risk-arrows: ${r4.ok}, many-baskets: ${r5.ok}, time-becomes-money: ${r6.ok}`);
  }).catch(() => {
    console.log('[ASSET-CHECK-MONEY-L19] Could not verify image assets — network check failed');
  });
})();

export default moneybusiness_explorer_l19_screens;
