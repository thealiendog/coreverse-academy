// ============================================================
// COREVERSE EXPLORERS — Money & Business · Lesson 12
// "Credit Cards vs Cash"
// Ages 6–8 | Guide: Ace | ExplorerLessonPlayer format
// ============================================================

const moneybusiness_explorer_l12_screens = {
  ageBand:   'explorers',
  subjectId: 'money',
  guide:     'ace',
  lessons: [
    {
      id:        'mb-6-8-12',
      title:     `Credit Cards vs Cash`,
      duration:  12,
      xpReward:  50,
      badge:     'smart-spender',
      badgeName: `Smart Spender`,
      screens: [
        // PHASE 1 — WELCOME
        {
          type:      'welcome',
          guideText: `Adults pay with a small plastic card instead of cash. It looks like magic — swipe and you have things! But credit cards have a hidden catch that has gotten millions of people into serious money trouble.`,
        },

        // PHASE 2 — MAGAZINE STORY (6 sections)
        {
          type:          'magazine',
          section:       1,
          totalSections: 6,
          headline:      `How Cash Works`,
          paragraphs: [
            `Cash is simple. You have $10. You spend $8. You have $2 left.`,
            `You can't spend more than you have because the money is right there in your hand. When it's gone, the spending stops.`,
          ],
          image:        '/explorer-assets/money-business/l12-s1-cash.png',
          imageCaption: `Cash makes spending visible. You watch the pile shrink — it can't hide from you.`,
          vocab: [
            { word: 'cash',        definition: `Physical money — coins and bills you can hold. Spending cash is instant and final, with no future bill.`, audioPrompt: `Cash — physical money: coins and bills you can hold. Spending cash is instant and final, with no future bill.` },
            { word: 'transaction', definition: `An exchange of money for something — every purchase you make is a transaction.`, audioPrompt: `Transaction — an exchange of money for something. Every purchase you make is a transaction.` },
          ],
        },
        {
          type:          'magazine',
          section:       2,
          totalSections: 6,
          headline:      `How Credit Cards Work`,
          paragraphs: [
            `A credit card is a loan that resets every month. When you swipe it, the bank pays for your purchase.`,
            `At month's end, the bank sends you a bill. Pay it in full and you owe nothing extra. The bank covered you, you repaid them — done.`,
          ],
          image:        '/explorer-assets/money-business/l12-s2-credit-card-flow.png',
          imageCaption: `A credit card swipe is a small loan. The bank pays first. You pay them back at month's end.`,
          vocab: [
            { word: 'credit card', definition: `A card that lets the bank pay first, then bills you later. Every swipe is a small loan from the bank.`, audioPrompt: `Credit card — a card that lets the bank pay first, then bills you later. Every swipe is a small loan from the bank.` },
            { word: 'loan',        definition: `Money borrowed that must be paid back. Every credit card purchase creates a tiny loan you owe the bank.`, audioPrompt: `Loan — money borrowed that must be paid back. Every credit card purchase creates a tiny loan you owe the bank.` },
          ],
        },
        {
          type:          'magazine',
          section:       3,
          totalSections: 6,
          headline:      `The Catch — Interest`,
          paragraphs: [
            `Here's the catch: if you don't pay the full bill, the bank starts charging interest on what's left.`,
            `Credit card interest is usually 20–25% per year. That sounds small, but on a big balance it adds up fast.`,
          ],
          image:        '/explorer-assets/money-business/l12-s3-interest-spiral.png',
          imageCaption: `Don't pay in full, and interest starts. A $1,000 balance can become $1,400 in a year — for nothing.`,
          vocab: [
            { word: 'interest', definition: `An extra fee charged for borrowing money. Credit cards charge some of the highest interest rates of any loan.`, audioPrompt: `Interest — an extra fee charged for borrowing money. Credit cards charge some of the highest interest rates of any loan.` },
            { word: 'balance',  definition: `The total amount you currently owe. The bank charges interest on any balance you don't pay off.`, audioPrompt: `Balance — the total amount you currently owe. The bank charges interest on any balance you don't pay off.` },
          ],
        },
        {
          type:          'magazine',
          section:       4,
          totalSections: 6,
          headline:      `The Minimum Payment Trap`,
          paragraphs: [
            `Every bill shows a "minimum payment" — a tiny amount (around $25). The bank says this is the least you have to pay.`,
            `It feels manageable. That's the trap. Pay only the minimum, and your debt drags on for years while interest piles up.`,
          ],
          image:        '/explorer-assets/money-business/l12-s4-minimum-trap.png',
          imageCaption: `The minimum payment is designed to feel easy. That's exactly why it's dangerous.`,
          vocab: [
            { word: 'minimum payment', definition: `The smallest amount the bank requires you to pay each month. Paying only this keeps you in debt for years.`, audioPrompt: `Minimum payment — the smallest amount the bank requires you to pay each month. Paying only this keeps you in debt for years.` },
            { word: 'debt',            definition: `Money you owe to someone else. Credit card debt is one of the most expensive kinds of debt to carry.`, audioPrompt: `Debt — money you owe to someone else. Credit card debt is one of the most expensive kinds of debt to carry.` },
          ],
        },
        {
          type:          'magazine',
          section:       5,
          totalSections: 6,
          headline:      `When Cards Are Useful`,
          paragraphs: [
            `Used right, credit cards have real benefits. If someone steals your card, the bank reverses the charges. Cash offers no such protection.`,
            `Many cards also give rewards: cashback, points, or discounts. And using a card responsibly builds your credit score — important for big loans later.`,
          ],
          image:        '/explorer-assets/money-business/l12-s5-card-benefits.png',
          imageCaption: `Used wisely, a card protects you, pays you back, and builds your credit score`,
          vocab: [
            { word: 'fraud protection', definition: `The bank reversing charges someone made on your card without permission. Cash doesn't offer this protection.`, audioPrompt: `Fraud protection — the bank reversing charges someone made on your card without permission. Cash doesn't offer this protection.` },
            { word: 'credit score',     definition: `A number that tracks how responsibly you handle borrowed money. Banks use it to decide whether to lend to you.`, audioPrompt: `Credit score — a number that tracks how responsibly you handle borrowed money. Banks use it to decide whether to lend to you.` },
          ],
        },
        {
          type:          'magazine',
          section:       6,
          totalSections: 6,
          headline:      `The Golden Rule`,
          paragraphs: [
            `There's one rule that turns a credit card from a trap into a tool: always pay the full balance every month.`,
            `Do that, and you get every benefit with zero cost. Don't, and you pay interest on every dollar. The rule is simple. The discipline is everything.`,
          ],
          image:        '/explorer-assets/money-business/l12-s6-golden-rule.png',
          imageCaption: `One rule. Pay the full balance every month. Everything else flows from that.`,
          vocab: [
            { word: 'discipline',     definition: `The ability to follow a rule even when it's hard. Credit card discipline means paying in full no matter what.`, audioPrompt: `Discipline — the ability to follow a rule even when it's hard. Credit card discipline means paying in full no matter what.` },
            { word: 'responsibility', definition: `Being trusted to handle something carefully. A credit card is a powerful tool placed in your hands — and your responsibility.`, audioPrompt: `Responsibility — being trusted to handle something carefully. A credit card is a powerful tool placed in your hands, and your responsibility.` },
          ],
        },

        // PHASE 3 — INTERACTIVE
        {
          type:          'interactive',
          activityType:  'drag-match',
          instruction:   `Tap each card, then tap whether this is a smart credit card move or a credit card trap!`,
          guideText:     `Credit cards are powerful tools — or expensive problems — depending entirely on how you use them. The difference usually comes down to one thing: are you spending within your means and paying the full balance? Sort each behaviour into the right category.`,
          columnHeaders: [`The Behaviour`, `Smart Move or Trap?`],
          items: [
            { image: 'l12-game-full-payment.png',     label: `Paying your complete credit card balance every month the moment the bill arrives.`,                                   correctMatch: 'smart-move',  objectPosition: 'center 50%', matchPhrase: `Smart card move! Paying your full balance every month means you never pay a cent of interest. The bank covered your purchases, you repaid them on time, and you owe nothing extra. The rewards and fraud protection are yours — with no cost attached. This is the only way to use a credit card and come out ahead.` },
            { image: 'l12-game-minimum-payment.png',  label: `Paying only the smallest amount allowed each month while the rest of your balance keeps growing.`,                   correctMatch: 'credit-trap', objectPosition: 'center 50%', matchPhrase: `Credit card trap! The minimum payment is designed to feel manageable — but it keeps you in debt and paying interest for months or years. If you spend $1,000 and only pay the minimum each month, you could end up paying $1,400 or more in total by the time it's cleared. The bank profits. You lose.` },
            { image: 'l12-game-planned-purchase.png', label: `Using your card for a purchase you know you already have the cash in your account to cover.`,                        correctMatch: 'smart-move',  objectPosition: 'center 50%', matchPhrase: `Smart card move! Spending only what you can actually afford — and then paying the bill in full — means you get all the benefits of a credit card with none of the costs. You're building your credit score, potentially earning rewards, and staying protected from fraud. You're using the card as a tool, not as extra money.` },
            { image: 'l12-game-no-plan.png',          label: `Spending freely on your credit card with no clear idea of how or when you will pay it back.`,                        correctMatch: 'credit-trap', objectPosition: 'center 50%', matchPhrase: `Credit card trap! Spending without a repayment plan is how people end up in serious debt. The purchases feel free in the moment — but the bill arrives, the interest starts, and the balance grows. Credit cards make it easy to spend money you don't have. The discipline is knowing that every swipe is a promise to repay.` },
          ],
          buckets: [
            { id: 'smart-move',  label: `✅ Smart Card Move`,  color: '#34D399' },
            { id: 'credit-trap', label: `⚠️ Credit Card Trap`, color: '#60A5FA' },
          ],
        },

        // PHASE 4 — MASTERY QUIZ
        {
          type:      'quiz',
          guideText: `Quiz time, {name}! Let's see what you've learned about credit cards and cash. Answer all 6 questions to earn your Smart Spender badge!`,
          questions: [
            {
              format:       'multiple-choice',
              question:     `What happens if you don't pay your full credit card bill each month?`,
              options:      [`Nothing happens`, `Your card gets canceled`, `The bank charges you interest and you end up paying back more than you spent`, `You get a warning only`],
              correctIndex: 2,
            },
            {
              format:       'multiple-choice',
              question:     `What is one advantage of using a credit card responsibly?`,
              options:      [`You never have to pay it back`, `You can spend unlimited money`, `Fraud protection, rewards, or building credit score`, `Banks give you free money`],
              correctIndex: 2,
            },
            {
              format:       'multiple-choice',
              question:     `What is the smart rule for using a credit card?`,
              options:      [`Pay the minimum to save money`, `Never use one`, `Always pay the full balance every month`, `Use it only for big purchases`],
              correctIndex: 2,
            },
            {
              format:        'true-false',
              question:      `If you pay your full credit card balance every month, you pay no interest at all.`,
              correctAnswer: true,
            },
            {
              format:       'fill-blank',
              question:     `The extra charge a bank adds when you don't pay your full credit card balance is called ___.`,
              options:      [`interest`, `tax`, `commission`, `profit`],
              correctIndex: 0,
            },
            {
              format:       'multiple-choice',
              question:     `What is the 'minimum payment' shown on a credit card bill?`,
              options:      [`The maximum you are allowed to spend that month`, `A fee for having the card at all`, `A small amount you can pay instead of the full balance — but interest builds on the rest`, `A payment that covers your balance in full`],
              correctIndex: 2,
            },
          ],
        },

        // PHASE 5 — REAL-WORLD CONNECTION
        {
          type:            'real-world',
          guideText:       `Ask a grown-up to explain how their credit card works — specifically what happens when someone only pays the minimum. Once you see how interest builds up, you will never forget it.`,
          familyAdventure: `Look at a parent's credit card bill together (just the top-line numbers). Find the interest rate, the minimum payment, and the full balance. Calculate how much interest you'd pay in one year if you only made minimum payments. Then celebrate that your family pays it off!`,
          creativePrompt:  `Imagine you charged $500 on a credit card with a 24% interest rate. If you only made the minimum payment of $15 per month, look up an online credit card calculator with a parent and see how long it would take to pay off. The answer will shock you.`,
        },

        // PHASE 6 — CELEBRATION
        {
          type:      'celebration',
          xpEarned:  50,
          badge:     'smart-spender',
          badgeName: `Smart Spender`,
          message:   `Excellent work, {name}! You now know the hidden danger of credit cards — and the one rule that turns them into a powerful tool instead of a trap. Pay the full balance every month, and a credit card works for you. Ace is so proud to share this knowledge with you.`,
        },
      ],
    },
  ],
};

// Log on module load — confirms lesson wired correctly + verifies image assets at runtime
(() => {
  const l    = moneybusiness_explorer_l12_screens.lessons[0];
  const mags = l.screens.filter(s => s.type === 'magazine').length;
  const game = l.screens.find(s => s.type === 'interactive')?.items?.length || 0;
  const quiz = l.screens.find(s => s.type === 'quiz')?.questions?.length || 0;
  console.log(`[LESSON-MONEY-L12] Loaded: "Credit Cards vs Cash" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
  Promise.all([
    fetch('/explorer-assets/money-business/l12-s1-cash.png',              { method: 'HEAD' }),
    fetch('/explorer-assets/money-business/l12-s2-credit-card-flow.png',  { method: 'HEAD' }),
    fetch('/explorer-assets/money-business/l12-s3-interest-spiral.png',   { method: 'HEAD' }),
    fetch('/explorer-assets/money-business/l12-s4-minimum-trap.png',      { method: 'HEAD' }),
    fetch('/explorer-assets/money-business/l12-s5-card-benefits.png',     { method: 'HEAD' }),
    fetch('/explorer-assets/money-business/l12-s6-golden-rule.png',       { method: 'HEAD' }),
  ]).then(([r1, r2, r3, r4, r5, r6]) => {
    console.log(`[ASSET-CHECK-MONEY-L12] cash: ${r1.ok}, credit-card-flow: ${r2.ok}, interest-spiral: ${r3.ok}, minimum-trap: ${r4.ok}, card-benefits: ${r5.ok}, golden-rule: ${r6.ok}`);
  }).catch(() => {
    console.log('[ASSET-CHECK-MONEY-L12] Could not verify image assets — network check failed');
  });
})();

export default moneybusiness_explorer_l12_screens;
