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

        // PHASE 2 — MAGAZINE STORY (6 sections)
        {
          type:          'magazine',
          section:       1,
          totalSections: 6,
          headline:      `What Are Taxes?`,
          paragraphs: [
            `Taxes are money that people and businesses are required by law to pay to the government. It isn't optional.`,
            `In return, the government provides services that benefit everyone — things no single person could afford alone.`,
          ],
          image:        '/explorer-assets/money-business/l11-s1-taxes-flow.png',
          imageCaption: `Some of every paycheck flows to the government — that's tax`,
          vocab: [
            { word: 'tax',        definition: `Money required by law to be paid to the government. Funds shared services like schools, roads, and fire stations.`, audioPrompt: `Tax — money required by law to be paid to the government. Funds shared services like schools, roads, and fire stations.` },
            { word: 'government', definition: `The group of people who run a country, state, or city — and collect taxes to provide shared services.`, audioPrompt: `Government — the group of people who run a country, state, or city, and collect taxes to provide shared services.` },
          ],
        },
        {
          type:          'magazine',
          section:       2,
          totalSections: 6,
          headline:      `What Taxes Pay For`,
          paragraphs: [
            `Roads, public schools, libraries, parks, fire stations, police, hospitals — taxes pay for all of it.`,
            `A single person could never afford to build a road or run a school system. But millions chipping in can build the infrastructure everyone depends on.`,
          ],
          image:        '/explorer-assets/money-business/l11-s2-community-services.png',
          imageCaption: `Everything that serves the whole community — that's where taxes go`,
          vocab: [
            { word: 'public services', definition: `Services funded by taxes and available to everyone — schools, parks, fire stations, hospitals. No one pays at the door.`, audioPrompt: `Public services — services funded by taxes and available to everyone: schools, parks, fire stations, hospitals. No one pays at the door.` },
            { word: 'infrastructure',  definition: `The basic systems a society needs to work — roads, bridges, water, power. Most infrastructure is funded by taxes.`, audioPrompt: `Infrastructure — the basic systems a society needs to work: roads, bridges, water, power. Most infrastructure is funded by taxes.` },
          ],
        },
        {
          type:          'magazine',
          section:       3,
          totalSections: 6,
          headline:      `Different Kinds of Taxes`,
          paragraphs: [
            `There are several kinds of taxes. Income tax comes out of your paycheck. Sales tax is added when you buy things at a store.`,
            `Property tax is paid by homeowners. Payroll tax funds programs for older people and those who can't work.`,
          ],
          image:        '/explorer-assets/money-business/l11-s3-tax-types.png',
          imageCaption: `Income, sales, property, payroll — different taxes hit at different moments`,
          vocab: [
            { word: 'income tax', definition: `A tax taken from money you earn at work. Comes out of your paycheck before you ever see it.`, audioPrompt: `Income tax — a tax taken from money you earn at work. Comes out of your paycheck before you ever see it.` },
            { word: 'sales tax',  definition: `A tax added to the price of things you buy at a store. The amount varies by state and city.`, audioPrompt: `Sales tax — a tax added to the price of things you buy at a store. The amount varies by state and city.` },
          ],
        },
        {
          type:          'magazine',
          section:       4,
          totalSections: 6,
          headline:      `Progressive Taxation`,
          paragraphs: [
            `In the US, income tax is progressive — the more you earn, the higher the percentage you pay.`,
            `Someone earning $30,000 might pay 12%. Someone earning $300,000 might pay 35%. The idea: those who earned more contribute more back.`,
          ],
          image:        '/explorer-assets/money-business/l11-s4-progressive.png',
          imageCaption: `Earn more, pay a higher percentage. That's a progressive tax system.`,
          vocab: [
            { word: 'progressive tax', definition: `A tax where the percentage goes up as income goes up. Higher earners pay a larger share than lower earners.`, audioPrompt: `Progressive tax — a tax where the percentage goes up as income goes up. Higher earners pay a larger share than lower earners.` },
            { word: 'percentage',      definition: `A portion out of 100. Taxes are usually calculated as a percentage of income — like 12% or 35%.`, audioPrompt: `Percentage — a portion out of 100. Taxes are usually calculated as a percentage of income, like 12 percent or 35 percent.` },
          ],
        },
        {
          type:          'magazine',
          section:       5,
          totalSections: 6,
          headline:      `Brackets and Deductions`,
          paragraphs: [
            `You don't pay 35% on every dollar. You pay the lower rate on your first dollars, higher rates only on income above certain levels — called brackets.`,
            `People can also lower their bill with deductions — things like charity gifts or business costs subtracted before tax is calculated.`,
          ],
          image:        '/explorer-assets/money-business/l11-s5-brackets-deductions.png',
          imageCaption: `Tax brackets work like steps. Deductions lower the income that gets taxed in the first place.`,
          vocab: [
            { word: 'tax bracket', definition: `A range of income taxed at a specific rate. Only income above each bracket's level is taxed at the higher rate.`, audioPrompt: `Tax bracket — a range of income taxed at a specific rate. Only income above each bracket's level is taxed at the higher rate.` },
            { word: 'deduction',   definition: `An amount subtracted from your income before tax is calculated. Deductions legally lower the tax you owe.`, audioPrompt: `Deduction — an amount subtracted from your income before tax is calculated. Deductions legally lower the tax you owe.` },
          ],
        },
        {
          type:          'magazine',
          section:       6,
          totalSections: 6,
          headline:      `The Tax Debate`,
          paragraphs: [
            `Taxes are one of the most argued topics in politics. Some say taxes should be lower — people make better choices with their own money.`,
            `Others say taxes should be higher — so society can fund better schools, healthcare, and help for those in need. Neither side is simply wrong.`,
          ],
          image:        '/explorer-assets/money-business/l11-s6-tax-debate.png',
          imageCaption: `Every democracy argues about taxes. The debate isn't silly — it's about real values.`,
          vocab: [
            { word: 'debate', definition: `A serious discussion where people argue different sides of a question. Healthy societies debate taxes constantly.`, audioPrompt: `Debate — a serious discussion where people argue different sides of a question. Healthy societies debate taxes constantly.` },
            { word: 'values', definition: `What someone believes is most important. Tax debates are really about different values — what kind of society people want.`, audioPrompt: `Values — what someone believes is most important. Tax debates are really about different values: what kind of society people want.` },
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
    fetch('/explorer-assets/money-business/l11-s1-taxes-flow.png',          { method: 'HEAD' }),
    fetch('/explorer-assets/money-business/l11-s2-community-services.png',  { method: 'HEAD' }),
    fetch('/explorer-assets/money-business/l11-s3-tax-types.png',           { method: 'HEAD' }),
    fetch('/explorer-assets/money-business/l11-s4-progressive.png',         { method: 'HEAD' }),
    fetch('/explorer-assets/money-business/l11-s5-brackets-deductions.png', { method: 'HEAD' }),
    fetch('/explorer-assets/money-business/l11-s6-tax-debate.png',          { method: 'HEAD' }),
  ]).then(([r1, r2, r3, r4, r5, r6]) => {
    console.log(`[ASSET-CHECK-MONEY-L11] taxes-flow: ${r1.ok}, community-services: ${r2.ok}, tax-types: ${r3.ok}, progressive: ${r4.ok}, brackets-deductions: ${r5.ok}, tax-debate: ${r6.ok}`);
  }).catch(() => {
    console.log('[ASSET-CHECK-MONEY-L11] Could not verify image assets — network check failed');
  });
})();

export default moneybusiness_explorer_l11_screens;
