// ============================================================
// COREVERSE EXPLORERS — Money & Business · Lesson 8
// "The Lemonade Stand Business"
// Ages 6–8 | Guide: Ace | ExplorerLessonPlayer format
// ============================================================

const moneybusiness_explorer_l08_screens = {
  ageBand:   'explorers',
  subjectId: 'money',
  guide:     'ace',
  lessons: [
    {
      id:        'mb-6-8-08',
      title:     `The Lemonade Stand Business`,
      duration:  12,
      xpReward:  50,
      badge:     'young-ceo',
      badgeName: `Young CEO`,
      screens: [
        // PHASE 1 — WELCOME
        {
          type:      'welcome',
          guideText: `A lemonade stand sounds simple. Squeeze lemons, add sugar, sell cups. But running a lemonade stand is actually a complete business — with real costs, real customers, real decisions, and real profit. Let's break it down like a CEO would.`,
        },

        // PHASE 2 — MAGAZINE STORY (6 sections)
        {
          type:          'magazine',
          section:       1,
          totalSections: 6,
          headline:      `Costs: What You Spend`,
          paragraphs: [
            `Before you make a single dollar, you have to spend money. These are called costs.`,
            `For a lemonade stand: lemons $3, sugar $1, cups $2, a sign $1. That's $7 in costs before you sell a single cup.`,
          ],
          image:        '/explorer-assets/money-business/l08-s1-costs.png',
          imageCaption: `Every business spends money before earning a single dollar — those are your costs`,
          vocab: [
            { word: 'cost',    definition: `Money you have to spend to run your business. Lemons, cups, a sign — all costs you pay before any sales happen.`, audioPrompt: `Cost — money you have to spend to run your business. Lemons, cups, a sign — all costs you pay before any sales happen.` },
            { word: 'expense', definition: `Another word for cost. Every dollar that leaves your business — for any reason — is an expense.`, audioPrompt: `Expense — another word for cost. Every dollar that leaves your business, for any reason, is an expense.` },
          ],
        },
        {
          type:          'magazine',
          section:       2,
          totalSections: 6,
          headline:      `Fixed vs Variable Costs`,
          paragraphs: [
            `There are two kinds of costs. Fixed costs stay the same no matter how much you sell — your sign costs $1 whether you sell 1 cup or 100.`,
            `Variable costs change with how much you make. More cups means more lemons. Knowing the difference helps you plan smarter.`,
          ],
          image:        '/explorer-assets/money-business/l08-s2-fixed-variable.png',
          imageCaption: `Fixed costs don't change with sales. Variable costs do. Track them separately.`,
          vocab: [
            { word: 'fixed cost',    definition: `A cost that stays the same regardless of how much you sell. Rent, signs, and equipment are fixed costs.`, audioPrompt: `Fixed cost — a cost that stays the same regardless of how much you sell. Rent, signs, and equipment are fixed costs.` },
            { word: 'variable cost', definition: `A cost that grows as you produce more. Ingredients and packaging are variable costs — more output, more cost.`, audioPrompt: `Variable cost — a cost that grows as you produce more. Ingredients and packaging are variable costs. More output, more cost.` },
          ],
        },
        {
          type:          'magazine',
          section:       3,
          totalSections: 6,
          headline:      `Revenue: Money Coming In`,
          paragraphs: [
            `Revenue is all the money you collect from selling. Sell 20 cups at 50 cents each — your revenue is $10.`,
            `That's the total before you subtract anything. Revenue is NOT profit. That's one of the most important lessons in business.`,
          ],
          image:        '/explorer-assets/money-business/l08-s3-revenue.png',
          imageCaption: `Revenue is the total money in — but it's not yet what you keep`,
          vocab: [
            { word: 'revenue',  definition: `Total money collected from sales — before any costs are subtracted. Revenue is the starting line, not the finish.`, audioPrompt: `Revenue — total money collected from sales, before any costs are subtracted. Revenue is the starting line, not the finish.` },
            { word: 'top line', definition: `Another name for revenue. It's the FIRST line on a business report — the total before subtraction.`, audioPrompt: `Top line — another name for revenue. It's the first line on a business report, the total before subtraction.` },
          ],
        },
        {
          type:          'magazine',
          section:       4,
          totalSections: 6,
          headline:      `Profit: What's Left`,
          paragraphs: [
            `Profit is what remains after you subtract costs from revenue. The formula is simple: Profit = Revenue − Costs.`,
            `$10 revenue minus $7 costs equals $3 profit. That $3 is yours to keep, save, reinvest, or give away.`,
          ],
          image:        '/explorer-assets/money-business/l08-s4-profit-equation.png',
          imageCaption: `Profit = Revenue − Costs. The simplest, most important formula in business.`,
          vocab: [
            { word: 'profit',      definition: `Revenue minus costs. The money you actually keep after paying for everything.`, audioPrompt: `Profit — revenue minus costs. The money you actually keep after paying for everything.` },
            { word: 'bottom line', definition: `Another name for profit. It's the LAST line on a business report — the final number after all costs.`, audioPrompt: `Bottom line — another name for profit. It's the last line on a business report, the final number after all costs.` },
          ],
        },
        {
          type:          'magazine',
          section:       5,
          totalSections: 6,
          headline:      `Break-Even Point`,
          paragraphs: [
            `Break-even is the number of sales you need to cover your costs. Below it, you lose money. Above it, every sale is pure profit.`,
            `If costs are $7 and each cup sells for 50 cents, you need to sell 14 cups to break even. Cup 15 is where profit starts.`,
          ],
          image:        '/explorer-assets/money-business/l08-s5-break-even.png',
          imageCaption: `Break-even is the line. Below it: loss. Above it: profit. Know your number.`,
          vocab: [
            { word: 'break-even', definition: `The point where revenue exactly equals costs — no profit, no loss. Everything above break-even is profit.`, audioPrompt: `Break-even — the point where revenue exactly equals costs. No profit, no loss. Everything above break-even is profit.` },
            { word: 'threshold',  definition: `A point you must reach before something changes. Break-even is the threshold where a business turns profitable.`, audioPrompt: `Threshold — a point you must reach before something changes. Break-even is the threshold where a business turns profitable.` },
          ],
        },
        {
          type:          'magazine',
          section:       6,
          totalSections: 6,
          headline:      `Two Levers to Grow`,
          paragraphs: [
            `Once you know the numbers, you can grow profit two ways. Increase revenue (raise prices, sell more cups, find more customers).`,
            `Or reduce costs (find cheaper supplies, waste less). Both matter equally — and the best businesses pull both levers at once.`,
          ],
          image:        '/explorer-assets/money-business/l08-s6-two-levers.png',
          imageCaption: `Two levers. Raise revenue. Lower costs. Pull both, and profit grows from both sides.`,
          vocab: [
            { word: 'lever',    definition: `Something you can pull to make change happen. Revenue and costs are the two levers every business uses to grow profit.`, audioPrompt: `Lever — something you can pull to make change happen. Revenue and costs are the two levers every business uses to grow profit.` },
            { word: 'reinvest', definition: `Putting profit back into the business to help it grow. Reinvesting means using today's profit to make tomorrow's profit bigger.`, audioPrompt: `Reinvest — putting profit back into the business to help it grow. Reinvesting means using today's profit to make tomorrow's profit bigger.` },
          ],
        },

        // PHASE 3 — INTERACTIVE
        {
          type:          'interactive',
          activityType:  'drag-match',
          instruction:   `Tap each card, then tap whether this action makes profit go up or go down!`,
          guideText:     `Profit grows when you increase revenue, reduce costs, or both. It shrinks when costs go up or revenue goes down. Think about what each action does to the numbers — does more money come in, or does more money go out unnecessarily?`,
          columnHeaders: [`The Action`, `What Happens to Profit?`],
          items: [
            { image: 'l08-game-raise-price.png',     label: `Raising the price of each cup from 50 cents to 75 cents while all your costs stay exactly the same.`,             correctMatch: 'profit-up',   objectPosition: 'center 50%', matchPhrase: `Profit goes up! Raising your price means more revenue from every cup sold — and since your costs haven't changed, every extra cent goes straight to profit. Selling 20 cups at 75 cents gives you $15 instead of $10. That's $5 more profit without spending a single cent more.` },
            { image: 'l08-game-wasted-lemons.png',   label: `Buying twice as many lemons as you need for the day, and throwing half of them away unsold.`,                     correctMatch: 'profit-down', objectPosition: 'center 50%', matchPhrase: `Profit goes down! Buying ingredients you don't use increases your costs without increasing your revenue. If you spent $6 on lemons but only needed $3 worth, you wasted $3 — and that $3 comes straight out of your profit. Ordering only what you need is one of the simplest ways to protect profit.` },
            { image: 'l08-game-busy-location.png',   label: `Moving your stand from a quiet side street to the entrance of a busy park, selling twice as many cups.`,          correctMatch: 'profit-up',   objectPosition: 'center 50%', matchPhrase: `Profit goes up! Selling twice as many cups doubles your revenue. If your costs only increase slightly (you need more lemonade), your profit grows significantly. Location is one of the most powerful levers in any business — more customers means more revenue, and more revenue means more profit.` },
            { image: 'l08-game-spilled-pitcher.png', label: `Accidentally spilling your whole pitcher of lemonade and losing an entire batch of product.`,                    correctMatch: 'profit-down', objectPosition: 'center 50%', matchPhrase: `Profit goes down! Spilling the pitcher means you lose both the ingredients you paid for and the revenue you would have earned from those cups. Your costs are the same — you already bought the lemons and sugar — but your revenue drops. Lost product is one of the most common ways small businesses lose money unnecessarily.` },
          ],
          buckets: [
            { id: 'profit-up',   label: `📈 Profit Goes Up`,   color: '#60A5FA' },
            { id: 'profit-down', label: `📉 Profit Goes Down`, color: '#34D399' },
          ],
        },

        // PHASE 4 — MASTERY QUIZ
        {
          type:      'quiz',
          guideText: `Quiz time, {name}! Let's see what you've learned about costs, revenue, and profit. Answer all 6 questions to earn your Young CEO badge!`,
          questions: [
            {
              format:       'multiple-choice',
              question:     `What is the difference between revenue and profit?`,
              options:      [`They are the same thing — both mean money you earn`, `Revenue is all the money collected — profit is what's left after subtracting costs`, `Revenue is smaller than profit because costs are added on top`, `Profit is what you earn; revenue is what you save`],
              correctIndex: 1,
            },
            {
              format:       'multiple-choice',
              question:     `If your lemonade stand costs $8 to set up and you collect $15 from customers, what is your profit?`,
              options:      [`$8`, `$15`, `$7`, `$23`],
              correctIndex: 2,
            },
            {
              format:       'multiple-choice',
              question:     `Name two ways you could increase your profit.`,
              options:      [`Buy more lemons and hire a friend to help`, `Raise prices, lower costs, or sell more cups`, `Close earlier and open a second stand`, `Give free samples and hope for bigger tips`],
              correctIndex: 1,
            },
            {
              format:        'true-false',
              question:      `Profit is what you keep after subtracting all your costs from your revenue.`,
              correctAnswer: true,
            },
            {
              format:       'fill-blank',
              question:     `The total money a business collects from selling its product or service is called ___.`,
              options:      [`revenue`, `profit`, `expenses`, `interest`],
              correctIndex: 0,
            },
            {
              format:       'multiple-choice',
              question:     `What does it mean to "break even" in a business?`,
              options:      [`To make zero profit and decide to close down`, `To earn exactly enough revenue to cover all your costs — no profit, but no loss either`, `To stop selling temporarily while you restock`, `To split your profit equally with a business partner`],
              correctIndex: 1,
            },
          ],
        },

        // PHASE 5 — REAL-WORLD CONNECTION
        {
          type:            'real-world',
          guideText:       `Ask a grown-up about any time they ran a mini-business — even a bake sale or car boot sale — and ask what it cost, what they charged, and whether they made a profit.`,
          familyAdventure: `Run a real mini-business this weekend! A lemonade stand, baked goods, handmade crafts, or anything you can sell. Before you start, write down all your costs. While you're running it, track every sale. When you're done, calculate your total revenue and your profit. Treat it as a real business experiment — what would you do differently next time to increase profit?`,
          creativePrompt:  `Plan a lemonade stand on paper before running a real one. Write down every cost (lemons, sugar, cups, sign, etc.). Decide your price per cup. Calculate: How many cups do you need to sell to break even? How many cups to make $5 profit? $10 profit? Now think: what's one way to increase revenue and one way to cut costs? Show your full plan like a real CEO would.`,
        },

        // PHASE 6 — CELEBRATION
        {
          type:      'celebration',
          xpEarned:  50,
          badge:     'young-ceo',
          badgeName: `Young CEO`,
          message:   `Excellent work, {name}! You now know the three numbers at the heart of every business — costs, revenue, and profit. Every business decision in the world comes down to improving those three numbers. Ace is so proud to share this knowledge with you.`,
        },
      ],
    },
  ],
};

// Log on module load — confirms lesson wired correctly + verifies image assets at runtime
(() => {
  const l    = moneybusiness_explorer_l08_screens.lessons[0];
  const mags = l.screens.filter(s => s.type === 'magazine').length;
  const game = l.screens.find(s => s.type === 'interactive')?.items?.length || 0;
  const quiz = l.screens.find(s => s.type === 'quiz')?.questions?.length || 0;
  console.log(`[LESSON-MONEY-L08] Loaded: "The Lemonade Stand Business" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
  Promise.all([
    fetch('/explorer-assets/money-business/l08-s1-costs.png',          { method: 'HEAD' }),
    fetch('/explorer-assets/money-business/l08-s2-fixed-variable.png', { method: 'HEAD' }),
    fetch('/explorer-assets/money-business/l08-s3-revenue.png',        { method: 'HEAD' }),
    fetch('/explorer-assets/money-business/l08-s4-profit-equation.png', { method: 'HEAD' }),
    fetch('/explorer-assets/money-business/l08-s5-break-even.png',     { method: 'HEAD' }),
    fetch('/explorer-assets/money-business/l08-s6-two-levers.png',     { method: 'HEAD' }),
  ]).then(([r1, r2, r3, r4, r5, r6]) => {
    console.log(`[ASSET-CHECK-MONEY-L08] costs: ${r1.ok}, fixed-variable: ${r2.ok}, revenue: ${r3.ok}, profit-equation: ${r4.ok}, break-even: ${r5.ok}, two-levers: ${r6.ok}`);
  }).catch(() => {
    console.log('[ASSET-CHECK-MONEY-L08] Could not verify image assets — network check failed');
  });
})();

export default moneybusiness_explorer_l08_screens;
