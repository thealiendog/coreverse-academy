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

        // PHASE 2 — MAGAZINE STORY (6 sections)
        {
          type:          'magazine',
          section:       1,
          totalSections: 6,
          headline:      'What Is a Stock?',
          paragraphs: [
            'A stock — also called a share — is a tiny piece of ownership in a company. When a company wants to raise money to grow, it splits itself into millions of small pieces and sells them to the public.',
            'Each piece is a share. Own one share of a company that has issued one million shares, and you own one one-millionth of it. Small — but real.',
          ],
          image:        '/explorer-assets/money-business/l18-s1-stock-fragments.png',
          imageCaption: 'A stock — a tiny piece of ownership in a company that rises in value when the company succeeds.',
          vocab: [
            { word: 'stock', definition: 'A tiny piece of ownership in a company — also called a share. Owning stock means you own part of that company and share in its successes and setbacks.', audioPrompt: 'Stock — a tiny piece of ownership in a company, also called a share. Owning stock means you own part of that company and share in its successes and setbacks.' },
            { word: 'share', definition: 'One unit of stock in a company. The more shares you own, the larger your ownership stake in that company.', audioPrompt: 'Share — one unit of stock in a company. The more shares you own, the larger your ownership stake in that company.' },
          ],
        },
        {
          type:          'magazine',
          section:       2,
          totalSections: 6,
          headline:      'The Deal',
          paragraphs: [
            'Here\'s the deal behind every stock: you give a company money now, and in return you get a piece of its future success.',
            'The company gets capital to invest in growth. You become a shareholder — a part-owner who benefits if the company does well, and loses if it doesn\'t.',
          ],
          image:        '/explorer-assets/money-business/l18-s2-the-deal.png',
          imageCaption: 'A two-way bet — the company gets capital, you get a share of whatever comes next.',
          vocab: [
            { word: 'shareholder', definition: 'A person who owns one or more shares in a company — shareholders are part-owners and benefit when the company grows in value.', audioPrompt: 'Shareholder — a person who owns one or more shares in a company. Shareholders are part-owners and benefit when the company grows in value.' },
            { word: 'capital',     definition: 'Money used to start or grow a business. Companies raise capital by selling shares to investors who want a piece of the future.', audioPrompt: 'Capital — money used to start or grow a business. Companies raise capital by selling shares to investors who want a piece of the future.' },
          ],
        },
        {
          type:          'magazine',
          section:       3,
          totalSections: 6,
          headline:      'What Is the Stock Market?',
          paragraphs: [
            'The stock market is where buyers and sellers trade stocks. It\'s not one physical place — it\'s a network of exchanges and electronic systems all connected. The two largest in the US are the NYSE and NASDAQ.',
            'Prices update constantly during trading hours. Millions of trades happen every minute, each one reflecting someone\'s decision to buy or sell.',
          ],
          image:        '/explorer-assets/money-business/l18-s3-stock-market-network.png',
          imageCaption: 'The stock market — a network where millions of buyers and sellers trade ownership in companies every day.',
          vocab: [
            { word: 'stock exchange',  definition: 'An organised marketplace where stocks are bought and sold — exchanges like the NYSE and NASDAQ connect buyers and sellers.', audioPrompt: 'Stock exchange — an organised marketplace where stocks are bought and sold. Exchanges like the NYSE and NASDAQ connect buyers and sellers.' },
            { word: 'public company', definition: 'A company that has sold shares to the public and is listed on a stock exchange. Anyone can buy a piece of a public company.', audioPrompt: 'Public company — a company that has sold shares to the public and is listed on a stock exchange. Anyone can buy a piece of a public company.' },
          ],
        },
        {
          type:          'magazine',
          section:       4,
          totalSections: 6,
          headline:      'Why Prices Move',
          paragraphs: [
            'Stock prices move based on what investors believe a company is worth. That belief shifts with every piece of new information — profits, new products, economic news, leadership changes.',
            'Good news pushes prices up. Bad news pushes them down. Every price you see is the result of millions of people making buy-or-sell decisions at once.',
          ],
          image:        '/explorer-assets/money-business/l18-s4-price-movement.png',
          imageCaption: 'Every price reflects a verdict — what millions of investors collectively believe the company is worth right now.',
          vocab: [
            { word: 'investor', definition: 'A person who puts money into stocks or other assets with the goal of earning a return over time — investors accept risk in exchange for the possibility of growth.', audioPrompt: 'Investor — a person who puts money into stocks or other assets with the goal of earning a return over time. Investors accept risk in exchange for the possibility of growth.' },
            { word: 'demand',   definition: 'How much buyers want a stock. When demand is high and more people want to buy than sell, the price goes up.', audioPrompt: 'Demand — how much buyers want a stock. When demand is high and more people want to buy than sell, the price goes up.' },
          ],
        },
        {
          type:          'magazine',
          section:       5,
          totalSections: 6,
          headline:      'Short-Term Chaos, Long-Term Up',
          paragraphs: [
            'In the short term, stock prices can seem almost random. News, rumours, and emotion all move prices in ways that are nearly impossible to predict day to day.',
            'But zoom out. Across every ten-, twenty-, or thirty-year period in modern history, the overall market has gone up — even after crashes, recessions, and dramatic drops.',
          ],
          image:        '/explorer-assets/money-business/l18-s5-long-term-arc.png',
          imageCaption: 'Short-term: unpredictable. Long-term: historically upward. That difference is everything.',
          vocab: [
            { word: 'volatility', definition: 'The degree to which a price moves up and down — high volatility means large, unpredictable swings. Stocks are more volatile in the short term than over long periods.', audioPrompt: 'Volatility — the degree to which a price moves up and down. High volatility means large, unpredictable swings. Stocks are more volatile in the short term than over long periods.' },
            { word: 'long-term',  definition: 'Holding investments over many years rather than trading frequently. Long-term investors have historically been rewarded more consistently than short-term traders.', audioPrompt: 'Long-term — holding investments over many years rather than trading frequently. Long-term investors have historically been rewarded more consistently than short-term traders.' },
          ],
        },
        {
          type:          'magazine',
          section:       6,
          totalSections: 6,
          headline:      'Time Is Your Superpower',
          paragraphs: [
            '$1,000 invested at age 10, growing at a 10% average annual return, becomes roughly $28,000 by age 55 — without adding another dollar. The same $1,000 invested at age 35 becomes only about $4,000.',
            'Same money. Same return. The only difference is time. Young people have more of it than anyone — and that\'s the most powerful investing advantage there is.',
          ],
          image:        '/explorer-assets/money-business/l18-s6-compound-snowball.png',
          imageCaption: 'Time is the most powerful ingredient in wealth-building — and young people have more of it than anyone.',
          vocab: [
            { word: 'compound interest', definition: 'Earning returns on both your original investment and all your previous returns — the longer money compounds, the faster it grows.', audioPrompt: 'Compound interest — earning returns on both your original investment and all your previous returns. The longer money compounds, the faster it grows.' },
            { word: 'return',            definition: 'The gain made on an investment over time — expressed as a percentage. A 10% annual return on $100 means earning $10 in the first year.', audioPrompt: 'Return — the gain made on an investment over time, expressed as a percentage. A 10% annual return on $100 means earning $10 in the first year.' },
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
    fetch('/explorer-assets/money-business/l18-s1-stock-fragments.png',    { method: 'HEAD' }),
    fetch('/explorer-assets/money-business/l18-s2-the-deal.png',           { method: 'HEAD' }),
    fetch('/explorer-assets/money-business/l18-s3-stock-market-network.png', { method: 'HEAD' }),
    fetch('/explorer-assets/money-business/l18-s4-price-movement.png',     { method: 'HEAD' }),
    fetch('/explorer-assets/money-business/l18-s5-long-term-arc.png',      { method: 'HEAD' }),
    fetch('/explorer-assets/money-business/l18-s6-compound-snowball.png',  { method: 'HEAD' }),
  ]).then(([r1, r2, r3, r4, r5, r6]) => {
    console.log(`[ASSET-CHECK-MONEY-L18] stock-fragments: ${r1.ok}, the-deal: ${r2.ok}, stock-market-network: ${r3.ok}, price-movement: ${r4.ok}, long-term-arc: ${r5.ok}, compound-snowball: ${r6.ok}`);
  }).catch(() => {
    console.log('[ASSET-CHECK-MONEY-L18] Could not verify image assets — network check failed');
  });
})();

export default moneybusiness_explorer_l18_screens;
