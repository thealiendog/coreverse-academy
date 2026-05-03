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

        // PHASE 2 — MAGAZINE STORY (4 sections)
        {
          type:          'magazine',
          section:       1,
          totalSections: 4,
          headline:      `What Is a Bank?`,
          paragraphs: [
            `A bank is a business that stores money, keeps it safe, and helps move it around. When you put money into a bank, it's called a deposit. When you take money out, it's called a withdrawal. Your money is tracked in an account — think of it like a scoreboard that shows exactly how much you have at any moment.`,
            `There are two main types of accounts. A checking account is for everyday money — the money you use regularly to pay for things. A savings account is for money you want to keep and grow over time. Both types are protected and trackable, and you can see every transaction in your account history.`,
            `Banks don't just hold money in a vault waiting for you to come back. Your money is insured, protected, and actively working — which is why banks can pay you just for keeping money there. Understanding this changes how you think about banks entirely.`,
          ],
          image:        '/explorer-assets/money-business/l03-magazine-what-is-a-bank.png',
          imageCaption: `A bank — a secure business that stores, protects, and moves money, tracking every dollar in your account`,
          vocab: [
            { word: `deposit`,    definition: `Putting money into a bank account — when your pay arrives or you add cash at a branch, that money is deposited and added to your account balance.`,                                                     audioPrompt: `Deposit — putting money into a bank account. When your pay arrives or you add cash at a branch, that money is deposited and added to your account balance.` },
            { word: `withdrawal`, definition: `Taking money out of a bank account — when you use an ATM, make a purchase with your card, or transfer money out, that amount is withdrawn and subtracted from your balance.`, audioPrompt: `Withdrawal — taking money out of a bank account. When you use an ATM, make a purchase with your card, or transfer money out, that amount is withdrawn and subtracted from your balance.` },
          ],
        },
        {
          type:          'magazine',
          section:       2,
          totalSections: 4,
          headline:      `How Banks Make Money`,
          paragraphs: [
            `Here's what most people don't know about banks: they don't just sit on your money. They lend it to other people who need it — for cars, homes, education, and businesses. Those borrowers pay the money back over time, plus an extra charge called interest. Interest is the cost of borrowing money.`,
            `The bank collects interest from borrowers and keeps most of it — that's how the bank earns its profit. But the bank also gives a small share of that interest back to you, just for keeping your money there. This is why a savings account grows over time even when you don't add anything to it.`,
            `This system is called fractional reserve banking — the bank keeps a fraction of deposits in reserve and lends out the rest. It's been the foundation of the banking system for centuries. Your $100 deposit might be helping someone buy a car while still showing up as $100 in your account — because the bank has guaranteed it's yours whenever you need it.`,
          ],
          image:        '/explorer-assets/money-business/l03-magazine-how-banks-work.png',
          imageCaption: `How banks make money — lending deposits to borrowers at interest, sharing a portion back with savers`,
          vocab: [
            { word: `interest`,  definition: `The cost of borrowing money — borrowers pay interest to banks for loans. Banks also pay depositors interest as a reward for keeping money in savings accounts.`,                                        audioPrompt: `Interest — the cost of borrowing money. Borrowers pay interest to banks for loans. Banks also pay depositors interest as a reward for keeping money in savings accounts.` },
            { word: `loan`,      definition: `Money borrowed from a bank that must be repaid over time, usually with interest added — common loans include mortgages for homes, car loans, and student loans for education.`, audioPrompt: `Loan — money borrowed from a bank that must be repaid over time, usually with interest added. Common loans include mortgages for homes, car loans, and student loans for education.` },
          ],
        },
        {
          type:          'magazine',
          section:       3,
          totalSections: 4,
          headline:      `Is Your Money Safe?`,
          paragraphs: [
            `Yes — and for a very specific, government-backed reason. In the United States, the Federal Deposit Insurance Corporation — the FDIC — protects money in bank accounts. Even if a bank has serious financial problems or goes out of business, the government guarantees your money up to $250,000 per account. Your money cannot disappear.`,
            `This wasn't always the case. Before the FDIC was created in 1933, bank failures meant depositors could lose everything. After thousands of banks collapsed during the Great Depression, the government stepped in to guarantee deposits. Since then, not one depositor has lost a single dollar in an FDIC-insured account.`,
            `This is why keeping money in a bank is far safer than keeping cash at home. Cash at home can be lost, stolen, or destroyed in a fire. Money in a bank is insured, traceable, and backed by the full authority of the federal government. The risk difference is enormous.`,
          ],
          image:        '/explorer-assets/money-business/l03-magazine-fdic.png',
          imageCaption: `FDIC insurance — government protection guaranteeing bank deposits up to $250,000 per account`,
          vocab: [
            { word: `FDIC`,          definition: `The Federal Deposit Insurance Corporation — a U.S. government agency that insures bank deposits up to $250,000 per account, protecting savers if a bank fails.`,                             audioPrompt: `FDIC — the Federal Deposit Insurance Corporation. A U.S. government agency that insures bank deposits up to $250,000 per account, protecting savers if a bank fails.` },
            { word: `insured`,       definition: `Protected against loss by an insurance guarantee — FDIC-insured bank accounts are protected by the government, meaning your money is safe even if the bank has problems.`, audioPrompt: `Insured — protected against loss by an insurance guarantee. FDIC-insured bank accounts are protected by the government, meaning your money is safe even if the bank has problems.` },
          ],
        },
        {
          type:          'magazine',
          section:       4,
          totalSections: 4,
          headline:      `Modern Banking`,
          paragraphs: [
            `Banking used to mean walking into a building, waiting in a queue, and handing cash to a teller. Today you don't need to go anywhere. Mobile banking apps let you check your balance, review transactions, transfer money between accounts, pay bills, and even deposit a cheque by taking a photo of it — all from your phone in seconds.`,
            `Most adults handle the vast majority of their banking without ever setting foot in a branch. Direct deposit means pay arrives in your account automatically. Automatic bill payments mean rent, electricity, and subscriptions are paid without you remembering to do it. Alerts notify you when money comes in or goes out.`,
            `The underlying banking system — the safeguards, the FDIC insurance, the accounts and interest — is exactly the same as it's always been. What's changed is the interface. Banking has moved from a physical building to a screen in your pocket, and it's more accessible, faster, and more transparent than at any point in history.`,
          ],
          image:        '/explorer-assets/money-business/l03-magazine-mobile-banking.png',
          imageCaption: `Modern banking — apps that let you manage your entire account from a phone, instantly and securely`,
          vocab: [
            { word: `mobile banking`,   definition: `Managing your bank account using a smartphone app — checking balances, transferring money, paying bills, and depositing cheques without visiting a physical branch.`,                        audioPrompt: `Mobile banking — managing your bank account using a smartphone app. Checking balances, transferring money, paying bills, and depositing cheques without visiting a physical branch.` },
            { word: `direct deposit`,   definition: `An automatic transfer of payment directly into a bank account — employers use direct deposit to pay wages without issuing physical cheques or cash.`, audioPrompt: `Direct deposit — an automatic transfer of payment directly into a bank account. Employers use direct deposit to pay wages without issuing physical cheques or cash.` },
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
    fetch('/explorer-assets/money-business/l03-magazine-what-is-a-bank.png', { method: 'HEAD' }),
    fetch('/explorer-assets/money-business/l03-magazine-how-banks-work.png', { method: 'HEAD' }),
    fetch('/explorer-assets/money-business/l03-magazine-fdic.png',           { method: 'HEAD' }),
    fetch('/explorer-assets/money-business/l03-magazine-mobile-banking.png', { method: 'HEAD' }),
  ]).then(([r1, r2, r3, r4]) => {
    console.log(`[ASSET-CHECK-MONEY-L03] what-is-a-bank: ${r1.ok}, how-banks-work: ${r2.ok}, fdic: ${r3.ok}, mobile-banking: ${r4.ok}`);
  }).catch(() => {
    console.log('[ASSET-CHECK-MONEY-L03] Could not verify image assets — network check failed');
  });
})();

export default moneybusiness_explorer_l03_screens;
