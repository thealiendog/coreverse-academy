// ============================================================
// COREVERSE EXPLORERS — Money & Business · Lesson 11
// "Taxes: What They Are and Why We Pay Them"
// Ages 6–8 | Guide: Ace | ExplorerLessonPlayer format
// ============================================================

const moneybusiness_explorer_l11_screens = {
  ageBand:   'explorers',
  subjectId: 'money',
  guide:     'ace',
  lessons: [
    {
      id:        'mb-6-8-11',
      title:     `Taxes: What They Are and Why We Pay Them`,
      duration:  12,
      xpReward:  50,
      badge:     'tax-tracker',
      badgeName: `Tax Tracker`,
      screens: [
        // PHASE 1 — WELCOME
        {
          type:      'welcome',
          guideText: `Adults earn money, but then some of it goes to the government. Why? Did the government steal it? Taxes are actually one of the most important — and most argued about — things in any country.`,
        },

        // PHASE 2 — MAGAZINE STORY (4 sections)
        {
          type:          'magazine',
          section:       1,
          totalSections: 4,
          headline:      `What Are Taxes?`,
          paragraphs: [
            `Taxes are money that people and businesses are required by law to pay to the government. This isn't optional — failing to pay taxes carries serious legal consequences. In return, the government provides services that benefit the entire community: roads, schools, police departments, libraries, parks, and fire stations.`,
            `Think of taxes as everyone chipping in to pay for shared things. A single person could never afford to build a road, fund a police force, or run a school system. But when millions of people each contribute a portion of what they earn, the collective amount is enough to build and maintain the infrastructure that whole communities depend on.`,
            `Taxes have existed in some form in almost every society in history. Ancient civilisations collected grain and labour. Modern governments collect money. The principle is the same: to fund the things that benefit everyone and that no individual could afford to provide alone.`,
          ],
          image:        '/explorer-assets/money-business/l11-magazine-what-are-taxes.png',
          imageCaption: `Taxes — money required by law to fund shared services that benefit the whole community`,
          vocab: [
            { word: `tax`,            definition: `Money required by law to be paid to the government by individuals and businesses — used to fund shared services like schools, roads, police, and hospitals that the whole community uses.`,       audioPrompt: `Tax — money required by law to be paid to the government by individuals and businesses. Used to fund shared services like schools, roads, police, and hospitals that the whole community uses.` },
            { word: `infrastructure`, definition: `The basic systems and structures a society needs to function — roads, bridges, schools, water systems, and power grids. Most infrastructure is funded by taxes.`,                                    audioPrompt: `Infrastructure — the basic systems and structures a society needs to function. Roads, bridges, schools, water systems, and power grids. Most infrastructure is funded by taxes.` },
          ],
        },
        {
          type:          'magazine',
          section:       2,
          totalSections: 4,
          headline:      `Types of Taxes`,
          paragraphs: [
            `There are several different kinds of taxes. Income tax is taken from money you earn from working — it's usually deducted directly from your pay before you even receive it. In the United States, workers pay income tax to the federal government and often to their state government as well.`,
            `Sales tax is added to the price of goods and services when you buy them at a store. Property tax is paid by homeowners based on the estimated value of their property — this often funds local schools and emergency services. Payroll tax is a separate tax on wages that funds programmes supporting older people and those who are unwell.`,
            `Each type of tax serves a specific purpose. Income tax funds a wide range of government services. Sales tax funds state and local governments. Property tax tends to fund local schools and fire departments. Understanding which tax funds which service helps you see exactly where your money goes.`,
          ],
          image:        '/explorer-assets/money-business/l11-magazine-types-of-taxes.png',
          imageCaption: `Types of taxes — income, sales, property, and payroll taxes each fund specific government services`,
          vocab: [
            { word: `income tax`, definition: `A tax taken from the money you earn from working — calculated as a percentage of your earnings and paid to federal and sometimes state governments.`,                                          audioPrompt: `Income tax — a tax taken from the money you earn from working. Calculated as a percentage of your earnings and paid to federal and sometimes state governments.` },
            { word: `sales tax`,  definition: `A tax added to the price of goods and services at the point of purchase — collected by the seller and sent to the government. Sales tax rates vary by state and city.`, audioPrompt: `Sales tax — a tax added to the price of goods and services at the point of purchase. Collected by the seller and sent to the government. Sales tax rates vary by state and city.` },
          ],
        },
        {
          type:          'magazine',
          section:       3,
          totalSections: 4,
          headline:      `How Much Do People Pay?`,
          paragraphs: [
            `In the United States, income tax is progressive — the more money you earn, the higher the percentage you pay. Someone earning $30,000 per year might pay around 12% of that in federal income tax. Someone earning $300,000 might pay around 35%. The idea is that those who have benefited more from the economy contribute more back to it.`,
            `Progressive taxation works in brackets — you don't pay 35% on every dollar you earn. Instead, you pay the lower rate on the first portion of your income, then higher rates only on the portions above certain thresholds. This means even high earners don't pay the top rate on their very first dollar.`,
            `People also look for legal ways to reduce what they owe — called deductions. Certain expenses, like charitable donations or business costs, can be subtracted from your taxable income before your rate is applied. Understanding deductions is one reason many people hire accountants to help file their taxes each year.`,
          ],
          image:        '/explorer-assets/money-business/l11-magazine-how-much.png',
          imageCaption: `Progressive taxation — higher earners pay a higher percentage, with rates applied in income brackets`,
          vocab: [
            { word: `progressive tax`, definition: `A tax system where the percentage you pay increases as your income increases — designed so higher earners contribute a larger share of their income to funding shared services.`, audioPrompt: `Progressive tax — a tax system where the percentage you pay increases as your income increases. Designed so higher earners contribute a larger share of their income to funding shared services.` },
            { word: `deduction`,       definition: `An amount subtracted from your taxable income before your tax rate is applied — legal deductions reduce the total tax you owe.`,                                                 audioPrompt: `Deduction — an amount subtracted from your taxable income before your tax rate is applied. Legal deductions reduce the total tax you owe.` },
          ],
        },
        {
          type:          'magazine',
          section:       4,
          totalSections: 4,
          headline:      `Why Do People Complain About Taxes?`,
          paragraphs: [
            `Taxes are one of the most debated topics in politics — and the debate is genuine. Some people believe taxes should be lower, arguing that individuals should keep more of the money they earn and that government spends inefficiently. They believe people make better decisions about their own money than governments do.`,
            `Others believe taxes should be higher — especially on the very wealthy — so that governments can provide more services: better schools, expanded healthcare, improved public transport, and a stronger safety net for people who fall on hard times. They argue that a healthy society invests in its people.`,
            `Neither side is simply wrong. It's a real values question: how much should individuals keep vs how much should be pooled for collective benefit? Every democracy in the world debates this continuously. Understanding both sides of the argument — not just which side you're on — is what it means to think carefully about how your society should work.`,
          ],
          image:        '/explorer-assets/money-business/l11-magazine-debate.png',
          imageCaption: `The tax debate — a genuine values question about individual freedom vs collective investment that every society continues to discuss`,
          vocab: [
            { word: `tax bracket`, definition: `A range of income taxed at a specific rate in a progressive system — as your income crosses into a higher bracket, only the income above that threshold is taxed at the higher rate.`, audioPrompt: `Tax bracket — a range of income taxed at a specific rate in a progressive system. As your income crosses into a higher bracket, only the income above that threshold is taxed at the higher rate.` },
            { word: `public services`, definition: `Services funded by taxes and provided to everyone in a community — schools, hospitals, fire stations, police, and public parks are all public services.`,                              audioPrompt: `Public services — services funded by taxes and provided to everyone in a community. Schools, hospitals, fire stations, police, and public parks are all public services.` },
          ],
        },

        // PHASE 3 — INTERACTIVE
        {
          type:          'interactive',
          activityType:  'drag-match',
          instruction:   `Tap each card, then tap whether this is paid for by taxes or something you pay for directly!`,
          guideText:     `Taxes fund things that benefit everyone in a community — schools, fire stations, libraries, parks, roads. But not everything is paid for by taxes. Some things you buy yourself because only you benefit from them. Can you tell the difference?`,
          columnHeaders: [`What Is It?`, `Who Pays for It?`],
          items: [
            { image: 'l11-game-public-school.png', label: `A public school where children in the community learn every day, open to all.`,                                  correctMatch: 'paid-by-taxes',    objectPosition: 'center 50%', matchPhrase: `Paid for by taxes! Public schools are one of the biggest things taxes fund. Every child in the community can attend regardless of whether their family pays anything directly — because everyone contributes through taxes. Without collective funding, only families who could afford fees would have access to education.` },
            { image: 'l11-game-restaurant.png',    label: `A meal you choose and pay for at a restaurant — just for yourself.`,                                            correctMatch: 'you-pay-directly', objectPosition: 'center 50%', matchPhrase: `You pay directly! A restaurant meal benefits only you, so you pay for it yourself. The government doesn't fund your lunch. This is the key distinction: taxes pay for things the whole community shares. Private purchases are yours to fund individually.` },
            { image: 'l11-game-fire-station.png',  label: `A fire station with firefighters and equipment that responds to emergencies in your neighbourhood around the clock.`, correctMatch: 'paid-by-taxes',    objectPosition: 'center 50%', matchPhrase: `Paid for by taxes! Fire stations protect everyone — not just people whose houses are currently on fire. Your neighbourhood benefits from having trained firefighters on standby even on days when nothing goes wrong. Funding that through individual payments would mean only some people could afford fire protection. Taxes make it universal.` },
            { image: 'l11-game-cinema.png',        label: `A ticket to see a film at the cinema — a private entertainment business.`,                                      correctMatch: 'you-pay-directly', objectPosition: 'center 50%', matchPhrase: `You pay directly! The cinema is a private business. The owner built it, hires staff, and earns profit from ticket sales. Only the people who choose to go pay for it — and only when they choose to go. This is private commerce, not a shared public service. You pay for what only you use.` },
          ],
          buckets: [
            { id: 'paid-by-taxes',    label: `🏛️ Paid for by Taxes`, color: '#60A5FA' },
            { id: 'you-pay-directly', label: `💳 You Pay Directly`,   color: '#34D399' },
          ],
        },

        // PHASE 4 — MASTERY QUIZ
        {
          type:      'quiz',
          guideText: `Quiz time, {name}! Let's see what you've learned about taxes. Answer all 6 questions to earn your Tax Tracker badge!`,
          questions: [
            {
              format:       'multiple-choice',
              question:     `What are taxes and why do we pay them?`,
              options:      [`Money the government takes unfairly`, `A fee to use the internet`, `Money paid to the government to fund shared services like schools, roads, and hospitals`, `A penalty for working too much`],
              correctIndex: 2,
            },
            {
              format:       'multiple-choice',
              question:     `What is income tax?`,
              options:      [`Tax added to store purchases`, `Tax paid by homeowners`, `Tax taken from money you earn from working`, `Tax on imported goods`],
              correctIndex: 2,
            },
            {
              format:       'multiple-choice',
              question:     `What does 'progressive tax' mean?`,
              options:      [`Taxes that go up every year`, `The more money you earn, the higher percentage of taxes you pay`, `A new type of tax`, `Tax that rewards good behavior`],
              correctIndex: 1,
            },
            {
              format:        'true-false',
              question:      `Taxes are required by law — both individuals and businesses must pay them.`,
              correctAnswer: true,
            },
            {
              format:       'fill-blank',
              question:     `A tax added to the price of goods when you buy something at a store is called ___ tax.`,
              options:      [`sales`, `income`, `property`, `payroll`],
              correctIndex: 0,
            },
            {
              format:       'multiple-choice',
              question:     `Which of the following is a service paid for by everyone's taxes?`,
              options:      [`A cinema ticket`, `A restaurant meal`, `A public fire station`, `A pair of shoes at a shop`],
              correctIndex: 2,
            },
          ],
        },

        // PHASE 5 — REAL-WORLD CONNECTION
        {
          type:            'real-world',
          guideText:       `Next time you're in a park, library, or on a road, remember — you're using something taxes paid for. Every public building and emergency service in your community tells the same story.`,
          familyAdventure: `Ask a parent to show you a pay stub or explain how taxes work on their paycheck. See what percentage goes to federal tax, state tax, and Social Security. Calculate: if they earn $1,000, how much do they actually take home?`,
          creativePrompt:  `Look around your community for five things paid for by taxes. Schools, roads, fire stations, parks, libraries, public transit — they're everywhere once you look. List what you find and think: how much would each one cost if you had to pay for it yourself?`,
        },

        // PHASE 6 — CELEBRATION
        {
          type:      'celebration',
          xpEarned:  50,
          badge:     'tax-tracker',
          badgeName: `Tax Tracker`,
          message:   `Excellent work, {name}! You now know what taxes are, why they exist, and why people debate how much we should pay. Understanding taxes puts you ahead of most adults when it comes to knowing how the world actually works. Ace is so proud to share this knowledge with you.`,
        },
      ],
    },
  ],
};

// Log on module load — confirms lesson wired correctly + verifies image assets at runtime
(() => {
  const l    = moneybusiness_explorer_l11_screens.lessons[0];
  const mags = l.screens.filter(s => s.type === 'magazine').length;
  const game = l.screens.find(s => s.type === 'interactive')?.items?.length || 0;
  const quiz = l.screens.find(s => s.type === 'quiz')?.questions?.length || 0;
  console.log(`[LESSON-MONEY-L11] Loaded: "Taxes: What They Are and Why We Pay Them" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
  Promise.all([
    fetch('/explorer-assets/money-business/l11-magazine-what-are-taxes.png', { method: 'HEAD' }),
    fetch('/explorer-assets/money-business/l11-magazine-types-of-taxes.png', { method: 'HEAD' }),
    fetch('/explorer-assets/money-business/l11-magazine-how-much.png',       { method: 'HEAD' }),
    fetch('/explorer-assets/money-business/l11-magazine-debate.png',         { method: 'HEAD' }),
  ]).then(([r1, r2, r3, r4]) => {
    console.log(`[ASSET-CHECK-MONEY-L11] what-are-taxes: ${r1.ok}, types-of-taxes: ${r2.ok}, how-much: ${r3.ok}, debate: ${r4.ok}`);
  }).catch(() => {
    console.log('[ASSET-CHECK-MONEY-L11] Could not verify image assets — network check failed');
  });
})();

export default moneybusiness_explorer_l11_screens;
