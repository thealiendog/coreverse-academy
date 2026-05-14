// ============================================================
// COREVERSE EXPLORERS — Money & Business · Lesson 3
// "Banks: Where Money Lives"
// Ages 6–8 | Guide: Ace | ExplorerLessonPlayer format
// ============================================================

const moneybusiness_explorer_l03_screens = {
  ageBand:   'explorers',
  subjectId: 'money',
  guide:     'ace',
  lessons: [
    {
      id:        'mb-6-8-03',
      title:     `Banks: Where Money Lives`,
      duration:  12,
      xpReward:  50,
      badge:     'bank-explorer',
      badgeName: `Bank Explorer`,
      screens: [
        // PHASE 1 — WELCOME
        {
          type:      'welcome',
          guideText: `Where does your family keep their money? Not in a mattress, right? It lives at a bank. But have you ever wondered what a bank actually IS and how it works? Banks are one of the most important inventions in human history.`,
        },

        // PHASE 2 — MAGAZINE STORY (6 sections)
        {
          type:          'magazine',
          section:       1,
          totalSections: 6,
          headline:      `What Is a Bank?`,
          paragraphs: [
            `A bank is a business that stores your money, keeps it safe, and helps move it around.`,
            `Putting money IN is called a deposit. Taking money OUT is called a withdrawal. Your money is tracked in an account — like a scoreboard showing what you have.`,
          ],
          image:        '/explorer-assets/money-business/l03-s1-what-is-a-bank.png',
          imageCaption: `A bank stores money, moves it around, and tracks every dollar in your account`,
          vocab: [
            { word: 'deposit',    definition: `Putting money INTO a bank account. When your pay arrives or you add cash, the money is deposited.`, audioPrompt: `Deposit — putting money into a bank account. When your pay arrives or you add cash, the money is deposited.` },
            { word: 'withdrawal', definition: `Taking money OUT of a bank account. Using an ATM, paying with a card, or transferring money out is a withdrawal.`, audioPrompt: `Withdrawal — taking money out of a bank account. Using an ATM, paying with a card, or transferring money out is a withdrawal.` },
          ],
        },
        {
          type:          'magazine',
          section:       2,
          totalSections: 6,
          headline:      `Two Kinds of Accounts`,
          paragraphs: [
            `A checking account is for everyday money — the money you spend on things.`,
            `A savings account is for money you want to keep and grow over time. Most adults have both — one for daily spending, one for the future.`,
          ],
          image:        '/explorer-assets/money-business/l03-s2-two-accounts.png',
          imageCaption: `Checking is for spending. Savings is for keeping and growing.`,
          vocab: [
            { word: 'checking account', definition: `A bank account for everyday spending. Money flows in and out frequently — used with debit cards, checks, and bill payments.`, audioPrompt: `Checking account — a bank account for everyday spending. Money flows in and out frequently, used with debit cards, checks, and bill payments.` },
            { word: 'savings account',  definition: `A bank account for money you want to keep and grow. The bank pays you interest for keeping money there.`, audioPrompt: `Savings account — a bank account for money you want to keep and grow. The bank pays you interest for keeping money there.` },
          ],
        },
        {
          type:          'magazine',
          section:       3,
          totalSections: 6,
          headline:      `How Banks Make Money`,
          paragraphs: [
            `Here's what most people don't know: banks don't just sit on your money. They lend it to other people who need it — for cars, homes, businesses.`,
            `Those borrowers pay the money back over time, plus an extra charge called interest. Interest is the cost of borrowing money.`,
          ],
          image:        '/explorer-assets/money-business/l03-s3-banks-lend.png',
          imageCaption: `Banks make money by lending deposits to borrowers, who pay back more than they borrowed`,
          vocab: [
            { word: 'loan',     definition: `Money borrowed from a bank that must be paid back over time, usually with interest added. Car loans and mortgages are common loans.`, audioPrompt: `Loan — money borrowed from a bank that must be paid back over time, usually with interest added. Car loans and mortgages are common loans.` },
            { word: 'borrower', definition: `A person who takes out a loan. They get money now and pay back more later — the extra is the interest.`, audioPrompt: `Borrower — a person who takes out a loan. They get money now and pay back more later. The extra is the interest.` },
          ],
        },
        {
          type:          'magazine',
          section:       4,
          totalSections: 6,
          headline:      `You Get Paid Too`,
          paragraphs: [
            `The bank collects interest from borrowers and keeps most of it. That's how the bank makes its profit.`,
            `But the bank also pays you a small share, just for keeping money there. That's why a savings account grows even when you don't add anything.`,
          ],
          image:        '/explorer-assets/money-business/l03-s4-interest-shared.png',
          imageCaption: `The bank shares a slice of the interest with you — your savings grow without you adding a dollar`,
          vocab: [
            { word: 'interest', definition: `Extra money paid for borrowing OR for saving. Borrowers pay it to banks; banks pay it to savers.`, audioPrompt: `Interest — extra money paid for borrowing or for saving. Borrowers pay it to banks; banks pay it to savers.` },
            { word: 'profit',   definition: `Money a business keeps after paying all its expenses. A bank's profit is what's left after paying savers and running the bank.`, audioPrompt: `Profit — money a business keeps after paying all its expenses. A bank's profit is what's left after paying savers and running the bank.` },
          ],
        },
        {
          type:          'magazine',
          section:       5,
          totalSections: 6,
          headline:      `Is Your Money Safe?`,
          paragraphs: [
            `Yes — and for a specific government-backed reason. In the U.S., the FDIC protects bank deposits up to $250,000 per account.`,
            `Even if a bank goes out of business, the government guarantees your money. Since 1933, not one person has lost a single dollar in an FDIC-insured account.`,
          ],
          image:        '/explorer-assets/money-business/l03-s5-fdic-shield.png',
          imageCaption: `FDIC insurance has protected every U.S. bank deposit since 1933 — your money is safer than cash at home`,
          vocab: [
            { word: 'FDIC',    definition: `A U.S. government agency that protects bank deposits up to $250,000 per account. Even if the bank fails, your money is safe.`, audioPrompt: `FDIC — a U.S. government agency that protects bank deposits up to two hundred and fifty thousand dollars per account. Even if the bank fails, your money is safe.` },
            { word: 'insured', definition: `Protected against loss. FDIC-insured accounts are protected by the government — your money can't disappear if the bank has problems.`, audioPrompt: `Insured — protected against loss. FDIC-insured accounts are protected by the government. Your money can't disappear if the bank has problems.` },
          ],
        },
        {
          type:          'magazine',
          section:       6,
          totalSections: 6,
          headline:      `Banking on Your Phone`,
          paragraphs: [
            `Banking used to mean walking into a building, waiting in line, and handing cash to a teller. Today you don't need to go anywhere.`,
            `Banking apps let you check your balance, transfer money, pay bills, and even deposit a check by taking a photo — all from your phone.`,
          ],
          image:        '/explorer-assets/money-business/l03-s6-mobile-banking.png',
          imageCaption: `Banking moved from a building to your pocket — same safety, faster and easier`,
          vocab: [
            { word: 'mobile banking', definition: `Managing your bank account using a smartphone app — checking balances, transferring money, paying bills, depositing checks.`, audioPrompt: `Mobile banking — managing your bank account using a smartphone app. Checking balances, transferring money, paying bills, depositing checks.` },
            { word: 'direct deposit', definition: `An automatic transfer of payment directly into a bank account. Employers use it to pay wages without issuing checks or cash.`, audioPrompt: `Direct deposit — an automatic transfer of payment directly into a bank account. Employers use it to pay wages without issuing checks or cash.` },
          ],
        },

        // PHASE 3 — INTERACTIVE
        {
          type:          'interactive',
          activityType:  'drag-match',
          instruction:   `Tap each card, then tap whether it's money going INTO your account or OUT of your account!`,
          guideText:     `Every bank transaction either adds to your balance or subtracts from it. Deposits and interest go in. Withdrawals and bill payments go out. Keeping track of what's coming in and going out is the foundation of managing any account. Can you sort these four correctly?`,
          columnHeaders: [`The Transaction`, `In or Out?`],
          items: [
            { image: 'l03-game-paycheck.png',      label: `A parent's work earnings transferred automatically into the bank account at the end of each week.`,  correctMatch: 'in',  objectPosition: 'center 50%', matchPhrase: `Money going in! A paycheck deposited into a bank account adds to the balance — it's income arriving. Most employers use direct deposit, which means the money arrives automatically without anyone needing to do anything. It shows up in the account and the balance goes up.` },
            { image: 'l03-game-atm.png',           label: `Taking cash out of an ATM machine at the grocery store to use for shopping.`,                        correctMatch: 'out', objectPosition: 'center 50%', matchPhrase: `Money going out! When you take cash from an ATM, you're making a withdrawal — money leaves your account and the balance goes down. The bank records the transaction, including the time, location, and amount. Every withdrawal is tracked in your account history.` },
            { image: 'l03-game-interest.png',      label: `The bank adding a small bonus amount to your savings just for keeping money there.`,                 correctMatch: 'in',  objectPosition: 'center 50%', matchPhrase: `Money going in! Interest is the bonus the bank pays you just for keeping your savings there. It shows up in your account automatically — and now it's yours. The bank earned money by lending your deposit to borrowers, and it's sharing a small slice of that with you as a thank-you for keeping your money there.` },
            { image: 'l03-game-bill-payment.png',  label: `Paying the monthly electricity bill directly from the bank account through an automatic payment.`,   correctMatch: 'out', objectPosition: 'center 50%', matchPhrase: `Money going out! Paying a bill subtracts money from your account — it's a withdrawal, just like using an ATM. Automatic bill payments are set up to go out on the same date every month. They're convenient because you don't have to remember them, but you do need enough money in the account to cover them.` },
          ],
          buckets: [
            { id: 'in',  label: `📥 Goes In`,  color: '#60A5FA' },
            { id: 'out', label: `📤 Goes Out`, color: '#34D399' },
          ],
        },

        // PHASE 4 — MASTERY QUIZ
        {
          type:      'quiz',
          guideText: `Quiz time, {name}! Let's see what you've learned about banks. Answer all 6 questions to earn your Bank Explorer badge!`,
          questions: [
            {
              format:       'multiple-choice',
              question:     `What do you call putting money into a bank?`,
              options:      [`A withdrawal`, `A deposit`, `A transfer`, `An investment`],
              correctIndex: 1,
            },
            {
              format:       'multiple-choice',
              question:     `How do banks make money?`,
              options:      [`They print extra money for themselves`, `They charge account fees only`, `They lend money to other people and charge interest`, `The government pays them a salary`],
              correctIndex: 2,
            },
            {
              format:       'multiple-choice',
              question:     `What is FDIC insurance?`,
              options:      [`A type of savings account for children`, `Government protection that keeps your bank money safe, up to $250,000`, `A credit card benefit offered by banks`, `A bank's internal profit system`],
              correctIndex: 1,
            },
            {
              format:        'true-false',
              question:      `Banks lend your deposited money to other people — which is how they earn enough to pay you interest on your savings.`,
              correctAnswer: true,
            },
            {
              format:       'fill-blank',
              question:     `The extra money a bank pays you just for keeping your savings there is called ___.`,
              options:      [`interest`, `a deposit`, `a withdrawal`, `FDIC`],
              correctIndex: 0,
            },
            {
              format:       'multiple-choice',
              question:     `What can you do with a mobile banking app?`,
              options:      [`Only check your account balance`, `Manage your account — check balances, move money, and deposit cheques by taking a photo`, `Only transfer money between banks`, `Pay bills but not make deposits`],
              correctIndex: 1,
            },
          ],
        },

        // PHASE 5 — REAL-WORLD CONNECTION
        {
          type:            'real-world',
          guideText:       `Ask a parent to show you your family's banking app — find where it shows the account balance and a list of recent transactions going in and out.`,
          familyAdventure: `Visit a bank branch together this week. Talk to a real banker and ask: What's the difference between a checking account and a savings account? What interest rate do you pay on savings accounts right now? How does FDIC insurance work? Bank employees enjoy explaining their work — and the conversation will make everything from this lesson feel real.`,
          creativePrompt:  `Draw a diagram of how a bank works. Show: a person depositing money → the bank → a borrower receiving a loan → the borrower paying back interest → the bank keeping some interest → the bank paying a little interest to the original depositor. Label each arrow with what's happening. Can you explain the whole cycle from your diagram?`,
        },

        // PHASE 6 — CELEBRATION
        {
          type:      'celebration',
          xpEarned:  50,
          badge:     'bank-explorer',
          badgeName: `Bank Explorer`,
          message:   `Excellent work, {name}! You now know how banks work — they keep your money safe, let it grow through interest, and are backed by the government through FDIC insurance. Knowing how to use a bank is a skill you'll use every day of your life. Ace is so proud to share this knowledge with you.`,
        },
      ],
    },
  ],
};

// Log on module load — confirms lesson wired correctly + verifies image assets at runtime
(() => {
  const l    = moneybusiness_explorer_l03_screens.lessons[0];
  const mags = l.screens.filter(s => s.type === 'magazine').length;
  const game = l.screens.find(s => s.type === 'interactive')?.items?.length || 0;
  const quiz = l.screens.find(s => s.type === 'quiz')?.questions?.length || 0;
  console.log(`[LESSON-MONEY-L03] Loaded: "Banks: Where Money Lives" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
  Promise.all([
    fetch('/explorer-assets/money-business/l03-s1-what-is-a-bank.png',   { method: 'HEAD' }),
    fetch('/explorer-assets/money-business/l03-s2-two-accounts.png',     { method: 'HEAD' }),
    fetch('/explorer-assets/money-business/l03-s3-banks-lend.png',       { method: 'HEAD' }),
    fetch('/explorer-assets/money-business/l03-s4-interest-shared.png',  { method: 'HEAD' }),
    fetch('/explorer-assets/money-business/l03-s5-fdic-shield.png',      { method: 'HEAD' }),
    fetch('/explorer-assets/money-business/l03-s6-mobile-banking.png',   { method: 'HEAD' }),
  ]).then(([r1, r2, r3, r4, r5, r6]) => {
    console.log(`[ASSET-CHECK-MONEY-L03] what-is-a-bank: ${r1.ok}, two-accounts: ${r2.ok}, banks-lend: ${r3.ok}, interest-shared: ${r4.ok}, fdic-shield: ${r5.ok}, mobile-banking: ${r6.ok}`);
  }).catch(() => {
    console.log('[ASSET-CHECK-MONEY-L03] Could not verify image assets — network check failed');
  });
})();

export default moneybusiness_explorer_l03_screens;
