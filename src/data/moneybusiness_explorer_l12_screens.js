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

        // PHASE 2 — MAGAZINE STORY (4 sections)
        {
          type:          'magazine',
          section:       1,
          totalSections: 4,
          headline:      `How Cash Works`,
          paragraphs: [
            `Cash is simple. You have $10. You spend $8. You have $2 left. You can't spend more than you have because the money is right there in your hand. Once it's gone, the spending stops. This physical reality makes cash one of the most effective tools for learning money management — it makes every transaction visible and immediate.`,
            `When you pay cash, the exchange is complete the moment it happens. No bill arrives later. No interest builds up. What you see is what you get — and what you spent is gone. There's no gap between the purchase and the consequence, which is why cash tends to make people more deliberate about what they buy.`,
            `Many financial educators recommend that young people learn to manage money using cash before ever touching a card. The reason is simple: cash makes spending feel real. Physical cash is impossible to forget — you watch the pile shrink. Digital transactions are abstract, and it's easy to forget that real money left your account.`,
          ],
          image:        '/explorer-assets/money-business/l12-magazine-cash.png',
          imageCaption: `Cash — simple, immediate, and visible: spend it and it's gone, with no hidden catches or future bills`,
          vocab: [
            { word: `cash`,        definition: `Physical money — coins and notes — that completes a transaction instantly with no future payments, interest, or bills. What you spend is gone the moment you spend it.`,                                                  audioPrompt: `Cash — physical money, coins and notes, that completes a transaction instantly with no future payments, interest, or bills. What you spend is gone the moment you spend it.` },
            { word: `transaction`, definition: `An exchange of money for goods or services — buying something at a store is a transaction. Cash transactions are immediate; credit transactions create a future payment obligation.`, audioPrompt: `Transaction — an exchange of money for goods or services. Buying something at a store is a transaction. Cash transactions are immediate; credit transactions create a future payment obligation.` },
          ],
        },
        {
          type:          'magazine',
          section:       2,
          totalSections: 4,
          headline:      `How Credit Cards Work`,
          paragraphs: [
            `A credit card is a loan that resets every month. When you swipe it, the bank pays for your purchase on your behalf — immediately and automatically. At the end of the month, the bank sends you a bill listing every purchase you made. If you pay the full amount by the due date, you owe nothing extra. The bank covered you, you repaid them, transaction complete.`,
            `But here's where the danger lives: if you pay only part of the bill, the remaining balance carries forward to next month — and the bank starts charging you interest. Credit card interest rates are typically 20–25% per year. That might sound manageable, but on a large balance it compounds quickly and becomes expensive fast.`,
            `Imagine spending $200 on your card and paying only $100 of the bill. Next month you owe the remaining $100 plus interest on top of it. If you again pay only part of the balance, the total owed grows further. This cycle, repeated across months, can turn a small purchase into a surprisingly large debt.`,
          ],
          image:        '/explorer-assets/money-business/l12-magazine-credit-card.png',
          imageCaption: `Credit cards — a monthly-reset loan that costs nothing if paid in full, but charges steep interest on any unpaid balance`,
          vocab: [
            { word: `credit card`, definition: `A payment card that lets you borrow money from the bank for purchases — you repay it in full each month (no interest) or carry a balance (with interest charged on the remaining amount).`, audioPrompt: `Credit card — a payment card that lets you borrow money from the bank for purchases. You repay it in full each month with no interest, or carry a balance with interest charged on the remaining amount.` },
            { word: `interest`,    definition: `A fee charged for borrowing money, expressed as a percentage of the amount owed — credit cards charge interest on any balance you don't pay off by the due date.`,                             audioPrompt: `Interest — a fee charged for borrowing money, expressed as a percentage of the amount owed. Credit cards charge interest on any balance you don't pay off by the due date.` },
          ],
        },
        {
          type:          'magazine',
          section:       3,
          totalSections: 4,
          headline:      `The Danger of Minimum Payments`,
          paragraphs: [
            `Every credit card bill shows two numbers: the full balance you owe, and a much smaller "minimum payment." The minimum is the least the bank requires you to pay that month to avoid a late fee — typically around $25 or 2% of your balance. Paying it keeps your account in good standing. But it doesn't get you out of debt quickly.`,
            `Here's why it's a trap: if you spend $1,000 on your card and only ever pay the minimum each month, you'll be paying interest on a large balance for years. By the time you've paid off that original $1,000, you might have paid $1,400 or more in total — an extra $400 just for the privilege of spreading the payments out.`,
            `The minimum payment is designed to feel manageable. And it is manageable — that's exactly the problem. It keeps you in debt at the bank's chosen interest rate for as long as possible. Understanding this is one of the most important things you can know about personal finance. Always pay the full balance if at all possible.`,
          ],
          image:        '/explorer-assets/money-business/l12-magazine-minimum-payment.png',
          imageCaption: `The minimum payment trap — a small payment that keeps you in debt longer and costs far more in the end`,
          vocab: [
            { word: `minimum payment`, definition: `The smallest amount a credit card company requires you to pay each month — paying only this keeps your account current but leaves most of your balance to accrue interest.`, audioPrompt: `Minimum payment — the smallest amount a credit card company requires you to pay each month. Paying only this keeps your account current but leaves most of your balance to accrue interest.` },
            { word: `balance`,         definition: `The total amount you currently owe on a credit card or loan — carrying a balance means you'll be charged interest on that remaining amount each month.`,                           audioPrompt: `Balance — the total amount you currently owe on a credit card or loan. Carrying a balance means you'll be charged interest on that remaining amount each month.` },
          ],
        },
        {
          type:          'magazine',
          section:       4,
          totalSections: 4,
          headline:      `When Credit Cards Are Useful`,
          paragraphs: [
            `Used responsibly, credit cards are genuinely useful financial tools. They protect you from fraud — if someone steals your card number and makes purchases, the bank typically reverses those charges and you're not held responsible. Cash offers no such protection. If cash is stolen, it's simply gone.`,
            `Many credit cards also offer rewards: cashback on purchases, points redeemable for travel, or discounts at certain retailers. Used well, this can mean you're effectively getting a small percentage of your spending returned to you — as long as you pay your balance in full and never pay interest.`,
            `Credit cards also help you build a credit score — a number lenders use to decide whether to trust you with a loan for a car, a house, or a business. Using a card consistently and paying it off in full is one of the fastest ways to build a strong score. The golden rule: always pay the full balance every month. Do that, and a credit card is a powerful tool. Don't, and it becomes an expensive problem.`,
          ],
          image:        '/explorer-assets/money-business/l12-magazine-credit-benefits.png',
          imageCaption: `Credit cards used responsibly — fraud protection, rewards, and a strong credit score are the real benefits`,
          vocab: [
            { word: `credit score`, definition: `A numerical rating of your history of borrowing and repaying money — lenders use it to decide whether to offer you loans and at what interest rate. Responsible credit card use builds a strong score.`, audioPrompt: `Credit score — a numerical rating of your history of borrowing and repaying money. Lenders use it to decide whether to offer you loans and at what interest rate. Responsible credit card use builds a strong score.` },
            { word: `fraud`,        definition: `Unauthorised or deceptive use of someone's financial information — credit cards offer fraud protection that cash does not, meaning disputed charges can often be reversed.`,                              audioPrompt: `Fraud — unauthorised or deceptive use of someone's financial information. Credit cards offer fraud protection that cash does not, meaning disputed charges can often be reversed.` },
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
    fetch('/explorer-assets/money-business/l12-magazine-cash.png',            { method: 'HEAD' }),
    fetch('/explorer-assets/money-business/l12-magazine-credit-card.png',     { method: 'HEAD' }),
    fetch('/explorer-assets/money-business/l12-magazine-minimum-payment.png', { method: 'HEAD' }),
    fetch('/explorer-assets/money-business/l12-magazine-credit-benefits.png', { method: 'HEAD' }),
  ]).then(([r1, r2, r3, r4]) => {
    console.log(`[ASSET-CHECK-MONEY-L12] cash: ${r1.ok}, credit-card: ${r2.ok}, minimum-payment: ${r3.ok}, credit-benefits: ${r4.ok}`);
  }).catch(() => {
    console.log('[ASSET-CHECK-MONEY-L12] Could not verify image assets — network check failed');
  });
})();

export default moneybusiness_explorer_l12_screens;
