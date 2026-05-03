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

        // PHASE 2 — MAGAZINE STORY (4 sections)
        {
          type:          'magazine',
          section:       1,
          totalSections: 4,
          headline:      `What Does Investing Mean?`,
          paragraphs: [
            `Investing means using money to buy something that will hopefully grow in value or produce income over time. Instead of keeping your money sitting still — earning nothing — you put it to work. You buy something with it, and that something generates more money as time passes. The goal: your investment is eventually worth more than what you originally paid.`,
            `There are four main types of investment. Stocks are tiny pieces of ownership in companies — when the company succeeds, your shares grow in value. Bonds are loans you make to governments or companies, which pay you regular interest in return. Real estate is land or buildings that generate rental income or appreciate in value. Business investments mean putting money into a company in exchange for a share of its future profits.`,
            `Each type of investment has different characteristics: different levels of risk, different potential returns, different time horizons. A savings account at a bank is technically an investment too — you're lending the bank your money and they pay you a small interest rate. But historically, the most powerful long-term wealth builders have been stocks and property. Understanding your options is the first step to using them wisely.`,
          ],
          image:        '/explorer-assets/money-business/l19-magazine-what-is-investing.png',
          imageCaption: `Investing — using money to buy something that grows in value or produces income, so your money works for you`,
          vocab: [
            { word: `investing`, definition: `Using money to buy assets that grow in value or produce income over time — instead of spending money or leaving it idle, investors put it to work building future wealth.`, audioPrompt: `Investing — using money to buy assets that grow in value or produce income over time. Instead of spending money or leaving it idle, investors put it to work building future wealth.` },
            { word: `asset`,     definition: `Something you own that has value and can generate income or grow in value over time — stocks, bonds, property, and businesses are all assets.`,                              audioPrompt: `Asset — something you own that has value and can generate income or grow in value over time. Stocks, bonds, property, and businesses are all assets.` },
          ],
        },
        {
          type:          'magazine',
          section:       2,
          totalSections: 4,
          headline:      `The Superpower: Compound Interest`,
          paragraphs: [
            `Compound interest is the most powerful force in personal finance — and it works in your favour when you invest. The idea is simple: you earn returns not just on your original money, but on every previous return as well. Your gains build on your gains. Over time, this creates exponential growth that feels almost unbelievable when you first see the numbers.`,
            `Here's how it works in practice. You invest $100 at a 10% annual return. After year 1: $110. After year 2: $121 (10% on $110, not just on the original $100). After year 3: $133. After year 10: $259. After year 40: $4,526 — from a single $100 investment, without ever adding another dollar. The money grows faster every year because there's more of it to grow.`,
            `The critical insight is that time is the most important variable. A small amount invested early will consistently outperform a larger amount invested later. Someone who starts investing at age 10 doesn't need to invest more than someone who starts at 30 — they just need to start earlier and let time do the work. This is why understanding compound interest young gives you an advantage that money alone can't buy.`,
          ],
          image:        '/explorer-assets/money-business/l19-magazine-compound-interest.png',
          imageCaption: `Compound interest — earnings building on previous earnings, creating exponential growth that rewards whoever starts earliest`,
          vocab: [
            { word: `compound interest`, definition: `Earning returns on both your original investment and on all your previous returns — the longer money compounds, the faster it grows, making time the most valuable ingredient in investing.`, audioPrompt: `Compound interest — earning returns on both your original investment and on all your previous returns. The longer money compounds, the faster it grows, making time the most valuable ingredient in investing.` },
            { word: `exponential growth`, definition: `Growth that accelerates over time because each gain builds on all previous gains — compound interest creates exponential growth, which is why long-term investing is so powerful.`,          audioPrompt: `Exponential growth — growth that accelerates over time because each gain builds on all previous gains. Compound interest creates exponential growth, which is why long-term investing is so powerful.` },
          ],
        },
        {
          type:          'magazine',
          section:       3,
          totalSections: 4,
          headline:      `What About Risk?`,
          paragraphs: [
            `All investments carry some level of risk — the possibility that things don't go as hoped and your investment loses value. Stocks can fall sharply when companies struggle or markets decline. Real estate can drop in value during economic downturns. Even businesses can fail. Risk is not something to fear or ignore — it's something to understand and manage.`,
            `Smart investors don't try to eliminate risk entirely. Instead, they diversify — spreading their money across different types of investments so that if one goes down significantly, others can hold steady or even rise. A portfolio that holds stocks, bonds, and other assets will typically experience less dramatic swings than one that holds only a single type of investment.`,
            `Risk and return are closely linked. Higher-risk investments typically offer higher potential returns — because nobody would take on more risk without the possibility of being rewarded for it. Lower-risk investments usually offer lower returns. Understanding this relationship helps you make deliberate choices about how much risk you're comfortable taking, based on your goals and your time horizon.`,
          ],
          image:        '/explorer-assets/money-business/l19-magazine-risk.png',
          imageCaption: `Managing risk — diversification spreads money across different investments so one loss doesn't sink everything`,
          vocab: [
            { word: `diversification`, definition: `Spreading money across different types of investments to reduce risk — if one investment drops significantly, others may hold steady or rise, protecting the overall portfolio.`,        audioPrompt: `Diversification — spreading money across different types of investments to reduce risk. If one investment drops significantly, others may hold steady or rise, protecting the overall portfolio.` },
            { word: `portfolio`,       definition: `The complete collection of all investments owned by a person — a well-diversified portfolio includes different types of assets to balance risk and potential return.`, audioPrompt: `Portfolio — the complete collection of all investments owned by a person. A well-diversified portfolio includes different types of assets to balance risk and potential return.` },
          ],
        },
        {
          type:          'magazine',
          section:       4,
          totalSections: 4,
          headline:      `Start Small, Start Now`,
          paragraphs: [
            `One of the most common misconceptions about investing is that you need a lot of money to get started. You don't. There are accounts designed specifically for beginners that allow you to invest with very small amounts. The amount matters far less than the act of starting — because the most powerful ingredient in investing is time, not capital.`,
            `A young person who begins investing small regular amounts will, over decades, typically accumulate far more wealth than someone who waits until they have a "significant" amount to invest before starting. The person who starts early with little consistently beats the person who starts late with more. That advantage compounds with every year of delay — working in your favour if you start early, and against you if you wait.`,
            `Time is the one ingredient in investing that cannot be bought, borrowed, or replaced. You can earn more money. You can learn new skills. But you cannot get back the years of compounding you missed by waiting. Every year you delay starting is a year of growth that's permanently gone. The best time to start was years ago. The second best time is now.`,
          ],
          image:        '/explorer-assets/money-business/l19-magazine-start-now.png',
          imageCaption: `Start small, start now — time is the ingredient that can't be bought, only used, and every year of delay costs compounding`,
          vocab: [
            { word: `capital`,       definition: `Money used to invest or start a business — while more capital can accelerate growth, time and consistency matter more than starting with a large amount.`,                           audioPrompt: `Capital — money used to invest or start a business. While more capital can accelerate growth, time and consistency matter more than starting with a large amount.` },
            { word: `time horizon`,  definition: `The length of time you plan to keep money invested before needing it — a longer time horizon allows for more risk and more compounding, producing greater long-term growth.`, audioPrompt: `Time horizon — the length of time you plan to keep money invested before needing it. A longer time horizon allows for more risk and more compounding, producing greater long-term growth.` },
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
    fetch('/explorer-assets/money-business/l19-magazine-what-is-investing.png', { method: 'HEAD' }),
    fetch('/explorer-assets/money-business/l19-magazine-compound-interest.png', { method: 'HEAD' }),
    fetch('/explorer-assets/money-business/l19-magazine-risk.png',              { method: 'HEAD' }),
    fetch('/explorer-assets/money-business/l19-magazine-start-now.png',         { method: 'HEAD' }),
  ]).then(([r1, r2, r3, r4]) => {
    console.log(`[ASSET-CHECK-MONEY-L19] what-is-investing: ${r1.ok}, compound-interest: ${r2.ok}, risk: ${r3.ok}, start-now: ${r4.ok}`);
  }).catch(() => {
    console.log('[ASSET-CHECK-MONEY-L19] Could not verify image assets — network check failed');
  });
})();

export default moneybusiness_explorer_l19_screens;
