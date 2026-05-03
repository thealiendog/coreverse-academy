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

        // PHASE 2 — MAGAZINE STORY (4 sections)
        {
          type:          'magazine',
          section:       1,
          totalSections: 4,
          headline:      `Profit: The Goal`,
          paragraphs: [
            `Profit is what remains after you subtract all your costs from your revenue. The formula is: Profit = Revenue − Costs. If you sell $500 worth of cookies and it cost $200 to make and sell them, your profit is $300. That $300 is yours — to keep, reinvest, or save. Everything else was just covering your costs.`,
            `Profit is the lifeblood of business — without it, a business cannot survive long-term. It's what allows a company to pay its owners, invest in growth, hire new people, and weather difficult periods. A business that generates no profit must eventually close or find a way to change its model. Profit isn't greed — it's what keeps the lights on.`,
            `The key distinction to remember is that revenue and profit are not the same thing. Revenue is every dollar that came in. Profit is what's left after every dollar that went out. A business can have enormous revenue — millions of dollars — and still be unprofitable if its costs are higher. The number that matters is not how much comes in, but how much stays.`,
          ],
          image:        '/explorer-assets/money-business/l14-magazine-profit.png',
          imageCaption: `Profit — revenue minus costs, the single number that tells you whether a business is actually working`,
          vocab: [
            { word: `profit`,  definition: `What remains after subtracting all costs from revenue — the real reward of running a business. Profit = Revenue − Costs. It can be kept, reinvested, or shared.`,                       audioPrompt: `Profit — what remains after subtracting all costs from revenue. The real reward of running a business. Profit equals revenue minus costs. It can be kept, reinvested, or shared.` },
            { word: `revenue`, definition: `The total money a business collects from selling products or services — before any costs are subtracted. Revenue is not profit; it's the starting line, not the finish.`, audioPrompt: `Revenue — the total money a business collects from selling products or services, before any costs are subtracted. Revenue is not profit; it's the starting line, not the finish.` },
          ],
        },
        {
          type:          'magazine',
          section:       2,
          totalSections: 4,
          headline:      `Loss: Not Always Bad`,
          paragraphs: [
            `A loss means you spent more than you made. Revenue minus costs equals a negative number. For a new business, this is extremely common. Starting a business requires spending money before you earn any: equipment, materials, marketing, a website. These upfront costs almost always exceed early revenue.`,
            `Some of the most successful companies in the world ran at a loss for years before becoming profitable. They were investing — spending money to build infrastructure, attract customers, and develop technology — with confidence that future revenue would eventually far exceed those costs. A loss isn't always failure. Sometimes it's a calculated investment in future profit.`,
            `But there's a critical difference between a planned loss — spending strategically with a clear path to profitability — and persistent losses with no plan. Burning money without a route to profit is a serious warning sign. Investors and business owners must ask: are we losing money because we're growing, or because the business model doesn't work? That question determines everything.`,
          ],
          image:        '/explorer-assets/money-business/l14-magazine-loss.png',
          imageCaption: `Loss — not always failure; new businesses often run at a planned loss before building toward profitability`,
          vocab: [
            { word: `loss`,        definition: `When a business spends more than it earns — revenue minus costs is a negative number. An early-stage loss can be a strategic investment; persistent losses with no plan are a warning sign.`, audioPrompt: `Loss — when a business spends more than it earns. Revenue minus costs is a negative number. An early-stage loss can be a strategic investment; persistent losses with no plan are a warning sign.` },
            { word: `investment`,  definition: `Spending money now with the expectation of earning more money in the future — businesses invest in growth, technology, and people, accepting short-term losses for long-term gain.`,           audioPrompt: `Investment — spending money now with the expectation of earning more money in the future. Businesses invest in growth, technology, and people, accepting short-term losses for long-term gain.` },
          ],
        },
        {
          type:          'magazine',
          section:       3,
          totalSections: 4,
          headline:      `Break-Even Point`,
          paragraphs: [
            `The break-even point is when you've sold exactly enough to cover all your costs — profit is zero, but so is your loss. You haven't made money yet, but you haven't lost any either. For a new business, reaching break-even is a critical milestone — it means the business is at least paying for itself.`,
            `Once you break even, every additional sale starts generating real profit. Before break-even, each sale reduces your loss but doesn't yet produce a return. After break-even, each sale adds directly to your profit. Knowing your break-even number before you start is essential — it tells you exactly how much you need to sell before the business starts working for you.`,
            `Calculating break-even is straightforward: divide your total fixed costs by the profit you make on each unit sold. If your stand costs $50 to set up and you make $2 profit per cup of lemonade, your break-even is 25 cups. Cup 26 is your first cup of real profit. Every business owner should know this number before they open.`,
          ],
          image:        '/explorer-assets/money-business/l14-magazine-breakeven.png',
          imageCaption: `Break-even — the milestone where revenue exactly covers all costs, and every sale after it becomes real profit`,
          vocab: [
            { word: `break-even`, definition: `The point where total revenue exactly equals total costs — no profit, no loss. Reaching break-even means all costs are covered; every sale beyond that generates actual profit.`, audioPrompt: `Break-even — the point where total revenue exactly equals total costs. No profit, no loss. Reaching break-even means all costs are covered; every sale beyond that generates actual profit.` },
            { word: `fixed costs`, definition: `Costs that stay the same regardless of how much you produce or sell — rent, equipment, and a sign are fixed costs. They must be covered before any profit is possible.`,           audioPrompt: `Fixed costs — costs that stay the same regardless of how much you produce or sell. Rent, equipment, and a sign are fixed costs. They must be covered before any profit is possible.` },
          ],
        },
        {
          type:          'magazine',
          section:       4,
          totalSections: 4,
          headline:      `Profit Margin`,
          paragraphs: [
            `Profit margin is your profit expressed as a percentage of revenue. The formula: (Profit ÷ Revenue) × 100. If you made $100 in revenue from things that cost $70 to produce, your profit is $30 and your margin is 30%. Profit margin tells you how efficiently a business converts revenue into actual profit.`,
            `Different industries have dramatically different margins. A supermarket might have a profit margin of 2–3% — tiny — but they sell millions of items and the volumes make the math work. A software company, by contrast, might have a margin of 70% or more, because a digital product costs almost nothing to deliver to the next customer once it's been built.`,
            `High margin and high volume are both paths to a profitable business — but they require very different strategies. A high-margin business needs to protect its premium pricing and deliver exceptional value. A high-volume business needs to keep costs incredibly tight and processes extremely efficient. Understanding which model you're building is one of the first decisions any business owner has to make.`,
          ],
          image:        '/explorer-assets/money-business/l14-magazine-margin.png',
          imageCaption: `Profit margin — profit as a percentage of revenue, revealing how efficiently a business converts sales into actual gain`,
          vocab: [
            { word: `profit margin`, definition: `Profit expressed as a percentage of revenue — a business with $100 revenue and $30 profit has a 30% profit margin. Higher margins mean more profit from each dollar of sales.`, audioPrompt: `Profit margin — profit expressed as a percentage of revenue. A business with $100 revenue and $30 profit has a 30% profit margin. Higher margins mean more profit from each dollar of sales.` },
            { word: `volume`,        definition: `The total number of units sold — a high-volume business sells enormous quantities at thin margins. Low volume businesses typically need higher margins to remain profitable.`,      audioPrompt: `Volume — the total number of units sold. A high-volume business sells enormous quantities at thin margins. Low-volume businesses typically need higher margins to remain profitable.` },
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
    fetch('/explorer-assets/money-business/l14-magazine-profit.png',    { method: 'HEAD' }),
    fetch('/explorer-assets/money-business/l14-magazine-loss.png',      { method: 'HEAD' }),
    fetch('/explorer-assets/money-business/l14-magazine-breakeven.png', { method: 'HEAD' }),
    fetch('/explorer-assets/money-business/l14-magazine-margin.png',    { method: 'HEAD' }),
  ]).then(([r1, r2, r3, r4]) => {
    console.log(`[ASSET-CHECK-MONEY-L14] profit: ${r1.ok}, loss: ${r2.ok}, breakeven: ${r3.ok}, margin: ${r4.ok}`);
  }).catch(() => {
    console.log('[ASSET-CHECK-MONEY-L14] Could not verify image assets — network check failed');
  });
})();

export default moneybusiness_explorer_l14_screens;
