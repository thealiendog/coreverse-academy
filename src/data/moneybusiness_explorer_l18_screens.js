// ============================================================
// COREVERSE EXPLORERS — Money & Business · Lesson 18
// "The Stock Market: Basics"
// Ages 6–8 | Guide: Ace | ExplorerLessonPlayer format
// ============================================================

const moneybusiness_explorer_l18_screens = {
  ageBand:   'explorers',
  subjectId: 'money',
  guide:     'ace',
  lessons: [
    {
      id:        'mb-6-8-18',
      title:     `The Stock Market: Basics`,
      duration:  12,
      xpReward:  50,
      badge:     'stock-tracker',
      badgeName: `Stock Tracker`,
      screens: [
        // PHASE 1 — WELCOME
        {
          type:      'welcome',
          guideText: `People talk about "the stock market going up" or "crashing" like it's some mysterious force. But the stock market is actually a pretty simple idea — it's just a giant market where people buy and sell tiny pieces of companies.`,
        },

        // PHASE 2 — MAGAZINE STORY (4 sections)
        {
          type:          'magazine',
          section:       1,
          totalSections: 4,
          headline:      `What Is a Stock?`,
          paragraphs: [
            `A stock — also called a share — is a tiny piece of ownership in a company. When a company wants to raise money to grow, it can split itself into millions of small pieces and sell those pieces to the public. Each piece is a share. If a company has issued 1,000,000 shares and you own 1, you own one one-millionth of it.`,
            `Own any shares in a company and you are technically a part-owner of it. That might feel abstract when the company is enormous and your holding is tiny — but the principle is real. If the company grows and becomes more profitable, your share typically becomes worth more. If the company struggles, your share can lose value.`,
            `This is the fundamental deal behind every stock: you give a company money now, and in return you get a piece of its future success. The company gets capital to invest in growth. You get the possibility of sharing in that growth. It's a two-way bet — and understanding that bet is the foundation of everything else in investing.`,
          ],
          image:        '/explorer-assets/money-business/l18-magazine-what-is-stock.png',
          imageCaption: `A stock — a tiny piece of ownership in a company that rises in value when the company succeeds`,
          vocab: [
            { word: `stock`,       definition: `A tiny piece of ownership in a company — also called a share. Owning stock means you own part of that company and share in its successes and setbacks.`,                                   audioPrompt: `Stock — a tiny piece of ownership in a company, also called a share. Owning stock means you own part of that company and share in its successes and setbacks.` },
            { word: `shareholder`, definition: `A person who owns one or more shares in a company — shareholders are part-owners and benefit when the company grows in value.`,                                                            audioPrompt: `Shareholder — a person who owns one or more shares in a company. Shareholders are part-owners and benefit when the company grows in value.` },
          ],
        },
        {
          type:          'magazine',
          section:       2,
          totalSections: 4,
          headline:      `What Is the Stock Market?`,
          paragraphs: [
            `The stock market is the system where buyers and sellers trade stocks. It's not one physical place — it's a network of exchanges, electronic systems, and participants all connected. The two largest stock exchanges in the United States are the New York Stock Exchange (NYSE) and NASDAQ. Together they list thousands of companies whose shares can be bought and sold.`,
            `Stock prices update constantly during trading hours — from the moment markets open to the moment they close. Millions of trades happen every minute, each one reflecting someone's decision to buy or sell. Every time someone decides a company is worth more, they buy shares. Every time someone thinks a company is worth less, they sell. The price you see is the result of all those simultaneous decisions happening at once.`,
            `This is supply and demand at its most visible and fast-moving. When more people want to buy a stock than sell it, the price goes up. When more people want to sell than buy, it goes down. The market is not a mysterious force — it's millions of people making individual decisions about value, all at the same time.`,
          ],
          image:        '/explorer-assets/money-business/l18-magazine-stock-market.png',
          imageCaption: `The stock market — a network of exchanges where millions of buyers and sellers trade ownership in companies every day`,
          vocab: [
            { word: `stock exchange`, definition: `An organised marketplace where stocks are bought and sold — exchanges like the NYSE and NASDAQ provide the infrastructure that allows buyers and sellers to find each other.`, audioPrompt: `Stock exchange — an organised marketplace where stocks are bought and sold. Exchanges like the NYSE and NASDAQ provide the infrastructure that allows buyers and sellers to find each other.` },
            { word: `trading`,        definition: `The buying and selling of stocks or other investments — active trading happens continuously during market hours as investors react to news, data, and changing views of a company's value.`, audioPrompt: `Trading — the buying and selling of stocks or other investments. Active trading happens continuously during market hours as investors react to news, data, and changing views of a company's value.` },
          ],
        },
        {
          type:          'magazine',
          section:       3,
          totalSections: 4,
          headline:      `Why Do Stocks Go Up and Down?`,
          paragraphs: [
            `Stock prices move based on what investors collectively believe a company is worth. That belief shifts constantly with new information: company profits, new products, economic conditions, global events, leadership changes. Good news about a company's growth often pushes its stock up. Bad news — falling profits, a product failure, a scandal — often pushes it down.`,
            `In the short term, stock prices can seem almost random. News, rumours, and emotion all influence prices in ways that are nearly impossible to predict from day to day. Professional investors who try to predict short-term movements are usually wrong more often than they're right. This is why short-term trading is considered far riskier than long-term investing.`,
            `In the long term, the overall stock market has a very different record. Across every ten-, twenty-, or thirty-year period in modern history, the overall market has gone up — even accounting for crashes, recessions, and dramatic downturns. Short-term: unpredictable. Long-term: historically upward. That difference is the single most important thing to understand about the stock market.`,
          ],
          image:        '/explorer-assets/money-business/l18-magazine-up-and-down.png',
          imageCaption: `Why prices move — good news pushes stocks up, bad news pushes them down, but the long-term direction has always been up`,
          vocab: [
            { word: `investor`,  definition: `A person who puts money into stocks, businesses, or other assets with the goal of earning a return over time — investors accept risk in exchange for the possibility of growth.`,                audioPrompt: `Investor — a person who puts money into stocks, businesses, or other assets with the goal of earning a return over time. Investors accept risk in exchange for the possibility of growth.` },
            { word: `volatility`, definition: `The degree to which a stock or market price moves up and down — high volatility means large, unpredictable swings. Stocks are more volatile in the short term than over long periods.`, audioPrompt: `Volatility — the degree to which a stock or market price moves up and down. High volatility means large, unpredictable swings. Stocks are more volatile in the short term than over long periods.` },
          ],
        },
        {
          type:          'magazine',
          section:       4,
          totalSections: 4,
          headline:      `Why Young People Should Care`,
          paragraphs: [
            `The earlier you start investing, the more time your money has to grow. This is the core of a concept called compound interest — earning returns not just on your original investment, but on all the previous returns as well. Time is the variable that makes compound interest so powerful. And young people have more of it than anyone.`,
            `$1,000 invested at age 10, growing at a 10% average annual return, becomes roughly $28,000 by age 55 — without adding a single additional dollar. The same $1,000 invested at age 35 becomes only about $4,000 by age 55. Same amount of money. Same return. The only difference is 25 years. Time, not genius, is the most powerful ingredient in building wealth through the stock market.`,
            `The stock market rewards patience more than skill. The investors who consistently outperform aren't necessarily smarter — they're simply willing to stay invested for longer than everyone else. Understanding this early doesn't just give you a financial head start. It changes how you think about money, time, and the relationship between them.`,
          ],
          image:        '/explorer-assets/money-business/l18-magazine-start-young.png',
          imageCaption: `Why starting young matters — time in the market is the single most powerful factor in building long-term wealth`,
          vocab: [
            { word: `compound interest`, definition: `Earning returns on both your original investment and on all your previous returns — the longer money compounds, the faster it grows. Time is the most important ingredient.`,                 audioPrompt: `Compound interest — earning returns on both your original investment and on all your previous returns. The longer money compounds, the faster it grows. Time is the most important ingredient.` },
            { word: `return`,            definition: `The gain (or loss) made on an investment over time — expressed as a percentage of the original amount. A 10% annual return on $100 means earning $10 in the first year.`, audioPrompt: `Return — the gain or loss made on an investment over time. Expressed as a percentage of the original amount. A 10% annual return on $100 means earning $10 in the first year.` },
          ],
        },

        // PHASE 3 — INTERACTIVE
        {
          type:          'interactive',
          activityType:  'drag-match',
          instruction:   `Tap each card, then tap whether this news would push the stock price up or down!`,
          guideText:     `Stock prices react to news about a company's health and future. Good news makes investors want to buy — pushing prices up. Bad news makes investors want to sell — pushing prices down. Think about what each scenario tells investors about the company's future.`,
          columnHeaders: [`The News`, `What Happens to the Price?`],
          items: [
            { image: 'l18-game-record-profits.png',   label: `A company reports its highest-ever profits and announces a major new product that investors and customers are very excited about.`,         correctMatch: 'price-up',   objectPosition: 'center 50%', matchPhrase: `Stock price goes up! Record profits mean the company is doing better than ever — and exciting new products signal that growth is likely to continue. Investors become more confident in the company's future value. More people want to buy the stock, fewer want to sell, and the price rises. Strong performance and positive momentum are two of the most reliable drivers of a rising stock price.` },
            { image: 'l18-game-recall-scandal.png',   label: `A company announces it is losing far more money than expected and must recall its most popular product due to a safety problem.`,           correctMatch: 'price-down', objectPosition: 'center 50%', matchPhrase: `Stock price goes down! Two pieces of bad news at once — bigger losses than expected and a costly product recall — shake investor confidence severely. People who own the stock want to sell before things get worse, and few new buyers want to enter. When more people are selling than buying, the price drops. The combination of current losses and future uncertainty is especially damaging to a stock price.` },
            { image: 'l18-game-big-contract.png',     label: `A company lands a huge new contract worth hundreds of millions of dollars, securing reliable revenue for several years ahead.`,             correctMatch: 'price-up',   objectPosition: 'center 50%', matchPhrase: `Stock price goes up! A major new contract means guaranteed future revenue — which makes the company's future look more certain and more profitable. Investors see lower risk and higher potential, so they're willing to pay more for the stock. Certainty about future earnings is one of the most reliable drivers of rising stock prices. Uncertainty, by contrast, tends to push prices down.` },
            { image: 'l18-game-hidden-problems.png',  label: `Investigators discover that the company's leadership has been hiding serious financial problems from investors for years.`,                  correctMatch: 'price-down', objectPosition: 'center 50%', matchPhrase: `Stock price goes down! Trust is the foundation of stock value. When investors discover they've been misled about a company's true financial health, that trust collapses — and so does the price. People who own shares rush to sell before things get worse. Financial scandals involving dishonesty typically cause some of the largest and fastest price drops in the stock market, because they destroy confidence completely.` },
          ],
          buckets: [
            { id: 'price-up',   label: `📈 Price Goes Up`,   color: '#34D399' },
            { id: 'price-down', label: `📉 Price Goes Down`, color: '#60A5FA' },
          ],
        },

        // PHASE 4 — MASTERY QUIZ
        {
          type:      'quiz',
          guideText: `Quiz time, {name}! Let's see what you've learned about the stock market. Answer all 6 questions to earn your Stock Tracker badge!`,
          questions: [
            {
              format:       'multiple-choice',
              question:     `What is a stock?`,
              options:      [`A type of savings account`, `A tiny piece of ownership in a company`, `A government bond`, `Money you lend to a bank`],
              correctIndex: 1,
            },
            {
              format:       'multiple-choice',
              question:     `Why do stock prices go up and down?`,
              options:      [`The government controls the prices`, `Based on what investors think the company is worth, company news, and global events`, `Prices are set once a year and don't change`, `Only rich people can make prices change`],
              correctIndex: 1,
            },
            {
              format:       'multiple-choice',
              question:     `Why does starting to invest young matter so much?`,
              options:      [`Young people get discounts on stocks`, `Because of compound interest — time in the market dramatically grows your money`, `Stocks are cheaper when you're young`, `Young investors are smarter`],
              correctIndex: 1,
            },
            {
              format:        'true-false',
              question:      `Over the long run — across decades — the overall stock market has historically grown in value even after crashes and downturns.`,
              correctAnswer: true,
            },
            {
              format:       'fill-blank',
              question:     `A single unit of ownership in a company that can be bought and sold on the stock market is called a ___.`,
              options:      [`share`, `bond`, `loan`, `dividend`],
              correctIndex: 0,
            },
            {
              format:       'multiple-choice',
              question:     `What typically happens to your stock's value if the company you've invested in becomes much more successful?`,
              options:      [`Your stock loses value as the company grows larger`, `Your stock's value typically increases along with the company's success`, `The government takes back your stock once the company is profitable`, `Your stock stays exactly the same value regardless of the company's performance`],
              correctIndex: 1,
            },
          ],
        },

        // PHASE 5 — REAL-WORLD CONNECTION
        {
          type:            'real-world',
          guideText:       `Look up one company you know well and find out what its stock price is today — then check again in a week. Watching a number move because of real-world events is the fastest way to understand what the market actually is.`,
          familyAdventure: `Open a free stock market website or app together. Look up 3 companies. Check their price, how much they've changed this year, and read one piece of recent news about each. Act like analysts: would you invest? Why?`,
          creativePrompt:  `Pick 3 companies you know well. Look up their stock price today with a parent. Write them down. Check again in 2 weeks. Did any go up or down? See if you can find the news reason why.`,
        },

        // PHASE 6 — CELEBRATION
        {
          type:      'celebration',
          xpEarned:  50,
          badge:     'stock-tracker',
          badgeName: `Stock Tracker`,
          message:   `Excellent work, {name}! You now understand what stocks are, how the market works, and why time is the most powerful ingredient in investing. The stock market rewards patience far more than it rewards cleverness. Ace is so proud to share this knowledge with you.`,
        },
      ],
    },
  ],
};

// Log on module load — confirms lesson wired correctly + verifies image assets at runtime
(() => {
  const l    = moneybusiness_explorer_l18_screens.lessons[0];
  const mags = l.screens.filter(s => s.type === 'magazine').length;
  const game = l.screens.find(s => s.type === 'interactive')?.items?.length || 0;
  const quiz = l.screens.find(s => s.type === 'quiz')?.questions?.length || 0;
  console.log(`[LESSON-MONEY-L18] Loaded: "The Stock Market: Basics" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
  Promise.all([
    fetch('/explorer-assets/money-business/l18-magazine-what-is-stock.png', { method: 'HEAD' }),
    fetch('/explorer-assets/money-business/l18-magazine-stock-market.png',  { method: 'HEAD' }),
    fetch('/explorer-assets/money-business/l18-magazine-up-and-down.png',   { method: 'HEAD' }),
    fetch('/explorer-assets/money-business/l18-magazine-start-young.png',   { method: 'HEAD' }),
  ]).then(([r1, r2, r3, r4]) => {
    console.log(`[ASSET-CHECK-MONEY-L18] what-is-stock: ${r1.ok}, stock-market: ${r2.ok}, up-and-down: ${r3.ok}, start-young: ${r4.ok}`);
  }).catch(() => {
    console.log('[ASSET-CHECK-MONEY-L18] Could not verify image assets — network check failed');
  });
})();

export default moneybusiness_explorer_l18_screens;
