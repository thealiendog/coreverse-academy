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

        // PHASE 2 — MAGAZINE STORY (4 sections)
        {
          type:          'magazine',
          section:       1,
          totalSections: 4,
          headline:      `Costs: What You Have to Spend`,
          paragraphs: [
            `Before you make a single dollar, you have to spend money. These are called costs, or expenses. For a lemonade stand: lemons might cost $3, sugar $1, cups $2, a sign $1. That's $7 in total costs before you've sold a single cup. If you don't carefully account for your costs, you might think you're making money when you're actually losing it.`,
            `Costs come in two types. Fixed costs stay the same no matter how much you sell — the sign you made costs $1 whether you sell 1 cup or 100. Variable costs change with how much you produce — the more cups you make, the more lemons you need. Smart business owners track both types separately, because each has to be managed differently.`,
            `There's also a concept called the break-even point — the number of sales you need to make before your revenue covers all your costs. Before you reach break-even, you're losing money. After it, every sale starts generating profit. Knowing your break-even number before you start is essential — it tells you exactly how many cups you need to sell just to not lose money.`,
          ],
          image:        '/explorer-assets/money-business/l08-magazine-costs.png',
          imageCaption: `Costs — what you spend before any revenue arrives, including fixed and variable expenses`,
          vocab: [
            { word: `fixed costs`,    definition: `Costs that stay the same regardless of how much you produce or sell — rent, equipment, and a sign are fixed costs. They must be paid even if you sell nothing.`,                                audioPrompt: `Fixed costs — costs that stay the same regardless of how much you produce or sell. Rent, equipment, and a sign are fixed costs. They must be paid even if you sell nothing.` },
            { word: `variable costs`, definition: `Costs that increase as you produce or sell more — ingredients, packaging, and raw materials are variable costs. More output means more variable cost.`, audioPrompt: `Variable costs — costs that increase as you produce or sell more. Ingredients, packaging, and raw materials are variable costs. More output means more variable cost.` },
          ],
        },
        {
          type:          'magazine',
          section:       2,
          totalSections: 4,
          headline:      `Revenue: Money That Comes In`,
          paragraphs: [
            `Revenue is all the money you collect from selling your product or service. If you sell 20 cups of lemonade at 50 cents each, your revenue is $10. That's it — $10 is every dollar that came in. Revenue is the top line of any business — the total money generated before anything is subtracted.`,
            `Revenue is not the same as profit. This is one of the most important distinctions in all of business, and it's a mistake that even experienced business owners sometimes make. You might generate $10,000 in revenue in a month — and if your costs were $9,800, your profit is only $200. Revenue looks impressive; profit is what actually matters.`,
            `Revenue can grow in three ways: sell more units (volume), charge a higher price (pricing), or sell to more customers (reach). The most powerful strategy often combines all three — finding more customers, charging them a fair but strong price, and selling them more over time. Understanding which of the three to focus on is a key leadership skill.`,
          ],
          image:        '/explorer-assets/money-business/l08-magazine-revenue.png',
          imageCaption: `Revenue — total money collected from sales, the starting point before costs are subtracted`,
          vocab: [
            { word: `revenue`,     definition: `The total money a business collects from selling products or services — before any costs are subtracted. Revenue is not profit; it's the starting line, not the finish.`,          audioPrompt: `Revenue — the total money a business collects from selling products or services, before any costs are subtracted. Revenue is not profit; it's the starting line, not the finish.` },
            { word: `break-even`,  definition: `The point where revenue exactly equals costs — no profit, no loss. Reaching break-even means all costs are covered; any sale beyond that point generates actual profit.`, audioPrompt: `Break-even — the point where revenue exactly equals costs. No profit, no loss. Reaching break-even means all costs are covered; any sale beyond that point generates actual profit.` },
          ],
        },
        {
          type:          'magazine',
          section:       3,
          totalSections: 4,
          headline:      `Profit: The Goal`,
          paragraphs: [
            `Profit is what remains after you subtract all your costs from your revenue. The formula is simple: Profit = Revenue − Costs. In our lemonade example: $10 revenue minus $7 costs = $3 profit. That $3 is yours — to keep, save, reinvest in the business, or give away. Everything else was just covering your costs.`,
            `This is why profit is the goal of a business, not revenue. A company can generate enormous revenue and still lose money if its costs are higher. Many famous companies have run at a loss for years — spending more than they earned — betting that future profit will come. Some succeeded. Many failed. Profit is the measure that tells you if the business is actually working.`,
            `Most businesses try to maximise profit by pulling two levers: increasing revenue and reducing costs. Both matter. If you can bring in more money while spending less to produce it, profit grows from both directions simultaneously. This is the core game of business — and it applies equally whether you're running a lemonade stand or a multinational company.`,
          ],
          image:        '/explorer-assets/money-business/l08-magazine-profit.png',
          imageCaption: `Profit — revenue minus costs, the single number that tells you if a business is actually working`,
          vocab: [
            { word: `profit`,       definition: `What remains after subtracting all costs from revenue — the real reward of running a business. Profit = Revenue − Costs. It can be kept, saved, reinvested, or shared.`,                  audioPrompt: `Profit — what remains after subtracting all costs from revenue. The real reward of running a business. Profit equals revenue minus costs. It can be kept, saved, reinvested, or shared.` },
            { word: `profit margin`, definition: `Profit expressed as a percentage of revenue — a business with $10 revenue and $3 profit has a 30% profit margin. Higher margins mean more profit from each dollar earned.`, audioPrompt: `Profit margin — profit expressed as a percentage of revenue. A business with $10 revenue and $3 profit has a 30% profit margin. Higher margins mean more profit from each dollar earned.` },
          ],
        },
        {
          type:          'magazine',
          section:       4,
          totalSections: 4,
          headline:      `How to Grow Your Lemonade Stand`,
          paragraphs: [
            `Once you understand the numbers, you can make smart decisions. Could you charge 75 cents per cup instead of 50 cents? At 20 cups sold, that's $5 more in revenue — for zero extra cost. Could you set up near more customers? More foot traffic means more cups sold without any increase in your production costs.`,
            `Could you reduce your costs? Maybe you could find a cheaper supplier for cups, or buy lemons in bulk at a discount. Every cent you save on costs is a cent added directly to your profit — without needing to sell a single extra cup. Cost control is just as powerful as revenue growth.`,
            `These same decisions — pricing, location, volume, cost control — are what business leaders at every level think about every day. The lemonade stand is a perfect model because all the variables are visible and manageable. Learn them at the lemonade stand, and you'll understand how any business in the world works.`,
          ],
          image:        '/explorer-assets/money-business/l08-magazine-grow.png',
          imageCaption: `Growing the business — adjusting price, location, volume, and costs to maximise profit`,
          vocab: [
            { word: `pricing strategy`, definition: `A deliberate decision about how much to charge for a product or service — pricing affects both revenue per sale and how many customers choose to buy.`,                                     audioPrompt: `Pricing strategy — a deliberate decision about how much to charge for a product or service. Pricing affects both revenue per sale and how many customers choose to buy.` },
            { word: `cost control`,     definition: `The practice of managing and reducing expenses without sacrificing quality — effective cost control increases profit without needing more revenue.`, audioPrompt: `Cost control — the practice of managing and reducing expenses without sacrificing quality. Effective cost control increases profit without needing more revenue.` },
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
            { image: 'l08-game-raise-price.png',    label: `Raising the price of each cup from 50 cents to 75 cents while all your costs stay exactly the same.`,             correctMatch: 'profit-up',   objectPosition: 'center 50%', matchPhrase: `Profit goes up! Raising your price means more revenue from every cup sold — and since your costs haven't changed, every extra cent goes straight to profit. Selling 20 cups at 75 cents gives you $15 instead of $10. That's $5 more profit without spending a single cent more.` },
            { image: 'l08-game-wasted-lemons.png',  label: `Buying twice as many lemons as you need for the day, and throwing half of them away unsold.`,                     correctMatch: 'profit-down', objectPosition: 'center 50%', matchPhrase: `Profit goes down! Buying ingredients you don't use increases your costs without increasing your revenue. If you spent $6 on lemons but only needed $3 worth, you wasted $3 — and that $3 comes straight out of your profit. Ordering only what you need is one of the simplest ways to protect profit.` },
            { image: 'l08-game-busy-location.png',  label: `Moving your stand from a quiet side street to the entrance of a busy park, selling twice as many cups.`,          correctMatch: 'profit-up',   objectPosition: 'center 50%', matchPhrase: `Profit goes up! Selling twice as many cups doubles your revenue. If your costs only increase slightly (you need more lemonade), your profit grows significantly. Location is one of the most powerful levers in any business — more customers means more revenue, and more revenue means more profit.` },
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
    fetch('/explorer-assets/money-business/l08-magazine-costs.png',   { method: 'HEAD' }),
    fetch('/explorer-assets/money-business/l08-magazine-revenue.png', { method: 'HEAD' }),
    fetch('/explorer-assets/money-business/l08-magazine-profit.png',  { method: 'HEAD' }),
    fetch('/explorer-assets/money-business/l08-magazine-grow.png',    { method: 'HEAD' }),
  ]).then(([r1, r2, r3, r4]) => {
    console.log(`[ASSET-CHECK-MONEY-L08] costs: ${r1.ok}, revenue: ${r2.ok}, profit: ${r3.ok}, grow: ${r4.ok}`);
  }).catch(() => {
    console.log('[ASSET-CHECK-MONEY-L08] Could not verify image assets — network check failed');
  });
})();

export default moneybusiness_explorer_l08_screens;
