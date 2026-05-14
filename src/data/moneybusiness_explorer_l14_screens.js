// ============================================================
// COREVERSE EXPLORERS — Money & Business · Lesson 14
// "Profit and Loss"
// Ages 6–8 | Guide: Ace | ExplorerLessonPlayer format
// ============================================================

const moneybusiness_explorer_l14_screens = {
  ageBand:   'explorers',
  subjectId: 'money',
  guide:     'ace',
  lessons: [
    {
      id:        'mb-6-8-14',
      title:     `Profit and Loss`,
      duration:  12,
      xpReward:  50,
      badge:     'numbers-master',
      badgeName: `Numbers Master`,
      screens: [
        // PHASE 1 — WELCOME
        {
          type:      'welcome',
          guideText: `Every business in the world — from a lemonade stand to the largest company you can name — is playing the same game. Make more money than you spend. When you do, you have a profit. When you don't, you have a loss.`,
        },

        // PHASE 2 — MAGAZINE STORY (6 sections)
        {
          type:          'magazine',
          section:       1,
          totalSections: 6,
          headline:      'Profit Is the Goal',
          paragraphs: [
            'Profit is what remains after you subtract all your costs from your revenue. Profit = Revenue − Costs.',
            'Sell $500 of cookies, spend $200 making them — $300 is profit. That $300 is yours to keep, save, or reinvest.',
          ],
          image:        '/explorer-assets/money-business/l14-s1-profit-equation.png',
          imageCaption: 'Every business in the world is playing the same game: make more than you spend',
          vocab: [
            { word: 'profit',   definition: 'Revenue minus costs. The money you actually keep after paying for everything.', audioPrompt: 'Profit — revenue minus costs. The money you actually keep after paying for everything.' },
            { word: 'reinvest', definition: 'Putting profit back into the business to help it grow. Smart owners reinvest before spending profit elsewhere.', audioPrompt: 'Reinvest — putting profit back into the business to help it grow. Smart owners reinvest before spending profit elsewhere.' },
          ],
        },
        {
          type:          'magazine',
          section:       2,
          totalSections: 6,
          headline:      'When Loss Isn\'t Failure',
          paragraphs: [
            'A loss means you spent more than you made. For new businesses, this is extremely common.',
            'Some of the most successful companies ran at a loss for YEARS before becoming profitable. They were investing in growth — and the bet paid off.',
          ],
          image:        '/explorer-assets/money-business/l14-s2-loss-investment.png',
          imageCaption: 'Early losses can be planned. Amazon lost money for years. So did Tesla. Both paid off.',
          vocab: [
            { word: 'loss',       definition: 'When costs are higher than revenue. You spent more than you brought in.', audioPrompt: 'Loss — when costs are higher than revenue. You spent more than you brought in.' },
            { word: 'investment', definition: 'Spending money now to earn more money later. Businesses invest in growth, knowing the payoff comes later.', audioPrompt: 'Investment — spending money now to earn more money later. Businesses invest in growth, knowing the payoff comes later.' },
          ],
        },
        {
          type:          'magazine',
          section:       3,
          totalSections: 6,
          headline:      'When Loss IS a Warning',
          paragraphs: [
            'But there\'s a critical difference between a planned loss and a persistent loss with no plan.',
            'Burning money with no clear path to profit is a serious warning sign. The question is always: are we losing because we\'re growing, or because the model doesn\'t work?',
          ],
          image:        '/explorer-assets/money-business/l14-s3-burning-money.png',
          imageCaption: 'Losing money WITH a plan is investing. Losing money WITHOUT one is burning it.',
          vocab: [
            { word: 'sustainable',    definition: 'Able to keep going without running out of resources. A sustainable business can survive long-term; an unsustainable one runs out of money.', audioPrompt: 'Sustainable — able to keep going without running out of resources. A sustainable business can survive long-term; an unsustainable one runs out of money.' },
            { word: 'business model', definition: 'How a business plans to make money. If the model itself is broken, no amount of effort or money will fix it.', audioPrompt: 'Business model — how a business plans to make money. If the model itself is broken, no amount of effort or money will fix it.' },
          ],
        },
        {
          type:          'magazine',
          section:       4,
          totalSections: 6,
          headline:      'Break-Even: The Turning Point',
          paragraphs: [
            'Break-even is when you\'ve sold just enough to cover all your costs. No profit yet — but no loss either.',
            'After break-even, every sale becomes pure profit. Knowing your break-even number before you start is essential.',
          ],
          image:        '/explorer-assets/money-business/l14-s4-break-even-line.png',
          imageCaption: 'Below the line: you\'re losing. Above it: you\'re profiting. Know exactly where the line sits.',
          vocab: [
            { word: 'break-even',  definition: 'The point where revenue exactly covers costs — no profit, no loss. Everything beyond it is real profit.', audioPrompt: 'Break-even — the point where revenue exactly covers costs. No profit, no loss. Everything beyond it is real profit.' },
            { word: 'fixed costs', definition: 'Costs that stay the same regardless of how much you sell — rent, equipment, a sign. They must be covered before any profit appears.', audioPrompt: 'Fixed costs — costs that stay the same regardless of how much you sell: rent, equipment, a sign. They must be covered before any profit appears.' },
          ],
        },
        {
          type:          'magazine',
          section:       5,
          totalSections: 6,
          headline:      'Profit Margin',
          paragraphs: [
            'Profit margin is your profit as a percentage of revenue. (Profit ÷ Revenue) × 100.',
            'Make $100 in revenue with $70 in costs — $30 profit, 30% margin. Margin tells you how efficiently a business turns sales into actual profit.',
          ],
          image:        '/explorer-assets/money-business/l14-s5-profit-margin.png',
          imageCaption: 'Margin shows what fraction of every dollar of revenue you actually keep',
          vocab: [
            { word: 'profit margin', definition: 'Profit expressed as a percentage of revenue. Shows how efficient a business is — not just how much it makes.', audioPrompt: 'Profit margin — profit expressed as a percentage of revenue. Shows how efficient a business is, not just how much it makes.' },
            { word: 'percentage',    definition: 'A portion out of 100. Margins are stated as percentages so businesses of any size can be compared.', audioPrompt: 'Percentage — a portion out of 100. Margins are stated as percentages so businesses of any size can be compared.' },
          ],
        },
        {
          type:          'magazine',
          section:       6,
          totalSections: 6,
          headline:      'High Margin vs High Volume',
          paragraphs: [
            'A supermarket might have a 2-3% margin — tiny — but they sell millions of items. Volume makes the math work.',
            'A software company might have a 70% margin because digital products cost almost nothing to deliver. Both paths can work. They just require different strategies.',
          ],
          image:        '/explorer-assets/money-business/l14-s6-margin-vs-volume.png',
          imageCaption: 'Tiny margin × huge volume = profit. Huge margin × small volume = profit. Pick your model.',
          vocab: [
            { word: 'volume',  definition: 'The total number of units sold. High-volume businesses make money on tiny per-unit profit by selling enormous quantities.', audioPrompt: 'Volume — the total number of units sold. High-volume businesses make money on tiny per-unit profit by selling enormous quantities.' },
            { word: 'premium', definition: 'High quality at a higher price. Premium products usually have higher profit margins per sale than mass-market ones.', audioPrompt: 'Premium — high quality at a higher price. Premium products usually have higher profit margins per sale than mass-market ones.' },
          ],
        },

        // PHASE 3 — INTERACTIVE
        {
          type:          'interactive',
          activityType:  'drag-match',
          instruction:   `Tap each card, then tap whether this business made a profit or a loss!`,
          guideText:     `Profit = Revenue − Costs. When revenue is higher than costs, you profit. When costs are higher than revenue, you lose. Look at each business scenario and decide which side of the equation came out on top.`,
          columnHeaders: [`The Business`, `Profit or Loss?`],
          items: [
            { image: 'l14-game-cookie-stand.png',  label: `A cookie stand earned $200 from sales and spent $80 on all ingredients and supplies.`,                                      correctMatch: 'profit', objectPosition: 'center 50%', matchPhrase: `Profit! Revenue $200 − Costs $80 = $120 profit. Every dollar of revenue above your total costs is pure profit — the cookie stand kept $120 after covering everything it spent. The owner can reinvest it, save it, or use it however they choose. That's the reward of a business that's working.` },
            { image: 'l14-game-car-wash.png',      label: `A car wash collected $50 in payments but used $75 in supplies and paid helpers $20.`,                                       correctMatch: 'loss',   objectPosition: 'center 50%', matchPhrase: `Loss! Revenue $50 − Costs $95 (supplies $75 + helpers $20) = −$45. This car wash spent $45 more than it brought in. To fix this, the owner needs to either charge more, reduce costs, or find more customers. Running at a loss is sustainable only if there's a clear plan to reach profitability.` },
            { image: 'l14-game-tutoring.png',      label: `A tutoring service charged $30 per session, ran 8 sessions this week, and spent only $10 on materials.`,                  correctMatch: 'profit', objectPosition: 'center 50%', matchPhrase: `Profit! Revenue: 8 × $30 = $240. Costs: $10. Profit: $230. This is a high-margin service business — because the main resource is the tutor's time and knowledge, costs are very low relative to revenue. Service businesses with minimal material costs can be extraordinarily profitable per hour worked.` },
            { image: 'l14-game-craft-stall.png',   label: `A craft stall took in $40 from customers but paid $65 for materials, a table rental, and signage.`,                       correctMatch: 'loss',   objectPosition: 'center 50%', matchPhrase: `Loss! Revenue $40 − Costs $65 = −$25. This is a common trap for early creative businesses: underpricing. If the products were priced higher, or if costs were reduced, the same effort could generate a profit. Knowing your full costs before you set your price is one of the most important habits in business.` },
          ],
          buckets: [
            { id: 'profit', label: `📈 Profit`, color: '#60A5FA' },
            { id: 'loss',   label: `📉 Loss`,   color: '#34D399' },
          ],
        },

        // PHASE 4 — MASTERY QUIZ
        {
          type:      'quiz',
          guideText: `Quiz time, {name}! Let's see what you've learned about profit and loss. Answer all 6 questions to earn your Numbers Master badge!`,
          questions: [
            {
              format:       'multiple-choice',
              question:     `What is the profit formula?`,
              options:      [`Profit = Costs minus Revenue`, `Profit = Revenue minus Costs`, `Profit = Revenue plus Costs`, `Profit = Sales minus Taxes`],
              correctIndex: 1,
            },
            {
              format:       'multiple-choice',
              question:     `What is the break-even point?`,
              options:      [`When you make your first dollar of profit`, `When total revenue exactly equals total costs`, `When you stop losing money forever`, `When your business is one year old`],
              correctIndex: 1,
            },
            {
              format:       'multiple-choice',
              question:     `What is profit margin?`,
              options:      [`The amount of profit you make`, `Profit as a percentage of revenue`, `The difference between two competitors' profits`, `How much your business grew this year`],
              correctIndex: 1,
            },
            {
              format:        'true-false',
              question:      `A business that runs at a loss in its early years can still become highly profitable over time.`,
              correctAnswer: true,
            },
            {
              format:       'fill-blank',
              question:     `Profit expressed as a percentage of revenue is called profit ___.`,
              options:      [`margin`, `balance`, `share`, `rate`],
              correctIndex: 0,
            },
            {
              format:       'multiple-choice',
              question:     `Which type of business typically has the highest profit margin?`,
              options:      [`A supermarket selling thousands of low-priced items`, `A software company whose digital product costs almost nothing to deliver to each new customer`, `A restaurant where food and staffing costs are high`, `A petrol station with thin margins on fuel`],
              correctIndex: 1,
            },
          ],
        },

        // PHASE 5 — REAL-WORLD CONNECTION
        {
          type:            'real-world',
          guideText:       `Next time you visit any business, try to guess what their profit margin might be — are they making a lot per sale, or counting on huge volume to make the numbers work? The answer tells you everything about how that business operates.`,
          familyAdventure: `Look at a restaurant menu together. Pick three items and guess: what do the ingredients probably cost? What does the restaurant charge? What's their rough profit margin? Most restaurants aim for 3-5% net profit margin — see how close your guesses get!`,
          creativePrompt:  `Create a mini profit and loss statement for an imaginary business for one month. List all revenue sources. List all costs. Calculate profit or loss. Calculate your profit margin. Would a bank lend this business money? Why or why not?`,
        },

        // PHASE 6 — CELEBRATION
        {
          type:      'celebration',
          xpEarned:  50,
          badge:     'numbers-master',
          badgeName: `Numbers Master`,
          message:   `Excellent work, {name}! You now understand the difference between profit and loss, why an early loss isn't always failure, and how profit margin reveals the true health of any business. These are the numbers every business leader watches every single day. Ace is so proud to share this knowledge with you.`,
        },
      ],
    },
  ],
};

// Log on module load — confirms lesson wired correctly + verifies image assets at runtime
(() => {
  const l    = moneybusiness_explorer_l14_screens.lessons[0];
  const mags = l.screens.filter(s => s.type === 'magazine').length;
  const game = l.screens.find(s => s.type === 'interactive')?.items?.length || 0;
  const quiz = l.screens.find(s => s.type === 'quiz')?.questions?.length || 0;
  console.log(`[LESSON-MONEY-L14] Loaded: "Profit and Loss" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
  Promise.all([
    fetch('/explorer-assets/money-business/l14-s1-profit-equation.png', { method: 'HEAD' }),
    fetch('/explorer-assets/money-business/l14-s2-loss-investment.png', { method: 'HEAD' }),
    fetch('/explorer-assets/money-business/l14-s3-burning-money.png',   { method: 'HEAD' }),
    fetch('/explorer-assets/money-business/l14-s4-break-even-line.png', { method: 'HEAD' }),
    fetch('/explorer-assets/money-business/l14-s5-profit-margin.png',   { method: 'HEAD' }),
    fetch('/explorer-assets/money-business/l14-s6-margin-vs-volume.png', { method: 'HEAD' }),
  ]).then(([r1, r2, r3, r4, r5, r6]) => {
    console.log(`[ASSET-CHECK-MONEY-L14] profit-equation: ${r1.ok}, loss-investment: ${r2.ok}, burning-money: ${r3.ok}, break-even-line: ${r4.ok}, profit-margin: ${r5.ok}, margin-vs-volume: ${r6.ok}`);
  }).catch(() => {
    console.log('[ASSET-CHECK-MONEY-L14] Could not verify image assets — network check failed');
  });
})();

export default moneybusiness_explorer_l14_screens;
