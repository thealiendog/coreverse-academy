// ============================================================
// COREVERSE EXPLORERS — Money & Business · Lesson 7
// "Supply and Demand: Why Prices Change"
// Ages 6–8 | Guide: Ace | ExplorerLessonPlayer format
// ============================================================

const moneybusiness_explorer_l07_screens = {
  ageBand:   'explorers',
  subjectId: 'money',
  guide:     'ace',
  lessons: [
    {
      id:        'mb-6-8-07',
      title:     `Supply and Demand: Why Prices Change`,
      duration:  12,
      xpReward:  50,
      badge:     'market-watcher',
      badgeName: `Market Watcher`,
      screens: [
        // PHASE 1 — WELCOME
        {
          type:      'welcome',
          guideText: `Why does a PlayStation cost more than a board game? Why do plane tickets cost more on holidays? One big idea explains all of this: supply and demand.`,
        },

        // PHASE 2 — MAGAZINE STORY (6 sections)
        {
          type:          'magazine',
          section:       1,
          totalSections: 6,
          headline:      `Demand`,
          paragraphs: [
            `Demand is how much people want something. When lots of people want it, demand is high. When few people want it, demand is low.`,
            `Demand changes constantly. When a storm is coming, demand for water and flashlights shoots up. When a new video game releases, demand peaks on launch day.`,
          ],
          image:        '/explorer-assets/money-business/l07-s1-demand.png',
          imageCaption: `Demand is hunger — how much people want something at any moment`,
          vocab: [
            { word: 'demand',   definition: `How much people want to buy something. High demand means many people want it. Low demand means few do.`, audioPrompt: `Demand — how much people want to buy something. High demand means many people want it. Low demand means few do.` },
            { word: 'consumer', definition: `A person who buys and uses goods or services. Consumers create demand.`, audioPrompt: `Consumer — a person who buys and uses goods or services. Consumers create demand.` },
          ],
        },
        {
          type:          'magazine',
          section:       2,
          totalSections: 6,
          headline:      `Supply`,
          paragraphs: [
            `Supply is how much of something is available. It can be limited by nature, by production, or by deliberate choice.`,
            `If only 100 concert tickets exist for a show 10,000 people want — supply is very low.`,
          ],
          image:        '/explorer-assets/money-business/l07-s2-supply.png',
          imageCaption: `Supply is what's available — limited by nature, production, or choice`,
          vocab: [
            { word: 'supply',   definition: `How much of something is available to buy. High supply means plenty exists. Low supply means little exists.`, audioPrompt: `Supply — how much of something is available to buy. High supply means plenty exists. Low supply means little exists.` },
            { word: 'scarcity', definition: `When supply is limited compared to how much people want. Scarcity is what makes things valuable.`, audioPrompt: `Scarcity — when supply is limited compared to how much people want. Scarcity is what makes things valuable.` },
          ],
        },
        {
          type:          'magazine',
          section:       3,
          totalSections: 6,
          headline:      `The Price Dance`,
          paragraphs: [
            `Imagine supply and demand as two sides of a balance scale. When they're equal, prices stay stable.`,
            `When demand goes up or supply goes down, prices rise. When demand drops or supply increases, prices fall.`,
          ],
          image:        '/explorer-assets/money-business/l07-s3-price-balance.png',
          imageCaption: `Every price is the balance point between supply and demand — tip either side, the price moves`,
          vocab: [
            { word: 'equilibrium', definition: `The balance point where supply matches demand. Prices stay stable when supply and demand are equal.`, audioPrompt: `Equilibrium — the balance point where supply matches demand. Prices stay stable when supply and demand are equal.` },
            { word: 'market',      definition: `Any place or system where buyers and sellers exchange things. A store, a website, a farmers' market — all markets.`, audioPrompt: `Market — any place or system where buyers and sellers exchange things. A store, a website, a farmers market, all markets.` },
          ],
        },
        {
          type:          'magazine',
          section:       4,
          totalSections: 6,
          headline:      `Airline Tickets`,
          paragraphs: [
            `Every plane has a fixed number of seats — that's supply, and it never changes.`,
            `But during holidays, millions of families want to fly — demand spikes. Same supply, much higher demand, equals much higher prices.`,
          ],
          image:        '/explorer-assets/money-business/l07-s4-airline.png',
          imageCaption: `Same plane, same seats — but on a holiday, the price doubles. That's demand at work.`,
          vocab: [
            { word: 'fixed supply', definition: `Supply that can't easily change. A plane has only so many seats — that's a fixed supply.`, audioPrompt: `Fixed supply — supply that can't easily change. A plane has only so many seats. That's a fixed supply.` },
            { word: 'demand spike', definition: `A sudden, sharp increase in how much people want something. Holiday travel causes demand spikes for plane tickets.`, audioPrompt: `Demand spike — a sudden, sharp increase in how much people want something. Holiday travel causes demand spikes for plane tickets.` },
          ],
        },
        {
          type:          'magazine',
          section:       5,
          totalSections: 6,
          headline:      `Strawberries`,
          paragraphs: [
            `Strawberries are cheap in summer because farms across the country are all harvesting at once. Supply is huge.`,
            `In winter, few farms produce strawberries, and they must be shipped from far away. Supply shrinks. Prices climb.`,
          ],
          image:        '/explorer-assets/money-business/l07-s5-strawberries.png',
          imageCaption: `Same fruit, same demand — but huge supply in summer makes them cheap, scarce supply in winter makes them costly`,
          vocab: [
            { word: 'abundant', definition: `Existing in large quantities. Strawberries are abundant in summer — that's why they're cheap.`, audioPrompt: `Abundant — existing in large quantities. Strawberries are abundant in summer, that's why they're cheap.` },
            { word: 'seasonal', definition: `Changing with the time of year. Produce, vacations, and holiday items all have seasonal supply and prices.`, audioPrompt: `Seasonal — changing with the time of year. Produce, vacations, and holiday items all have seasonal supply and prices.` },
          ],
        },
        {
          type:          'magazine',
          section:       6,
          totalSections: 6,
          headline:      `Limited Editions`,
          paragraphs: [
            `A sneaker company makes only 500 pairs of a special shoe. Demand from collectors is enormous. Resale prices can hit 10x retail.`,
            `That's engineered scarcity — when a company deliberately makes only a few of something, knowing rarity itself will drive demand and price.`,
          ],
          image:        '/explorer-assets/money-business/l07-s6-limited-edition.png',
          imageCaption: `Companies create scarcity on purpose — because rare things sell for more`,
          vocab: [
            { word: 'engineered scarcity', definition: `When a company deliberately makes only a few of something to drive up demand and price. Limited editions are engineered scarcity.`, audioPrompt: `Engineered scarcity — when a company deliberately makes only a few of something to drive up demand and price. Limited editions are engineered scarcity.` },
            { word: 'resale',              definition: `Selling something you already bought to another buyer. Resale prices for rare items can be much higher than the original price.`, audioPrompt: `Resale — selling something you already bought to another buyer. Resale prices for rare items can be much higher than the original price.` },
          ],
        },

        // PHASE 3 — INTERACTIVE
        {
          type:          'interactive',
          activityType:  'drag-match',
          instruction:   `Tap each card, then tap whether the price will go up or go down!`,
          guideText:     `Supply and demand determine prices. When lots of people want something and there isn't much of it — prices go up. When there's plenty available and fewer people want it — prices go down. Think about the supply and demand forces at work in each scenario.`,
          columnHeaders: [`The Scenario`, `What Happens to the Price?`],
          items: [
            { image: 'l07-game-limited-sneakers.png',    label: `A limited edition sneaker — only 500 pairs were made, but 50,000 people want them.`,                                          correctMatch: 'price-up',   objectPosition: 'center 50%', matchPhrase: `Price goes up! With only 500 pairs and 50,000 people wanting them, demand is 100 times higher than supply. Sellers know buyers will compete for the few available pairs. Resale prices for limited sneakers often reach five or ten times the original price — all because of deliberate scarcity meeting enormous demand.` },
            { image: 'l07-game-summer-strawberries.png', label: `Strawberries in midsummer, when farms across the country are all harvesting at the same time.`,                              correctMatch: 'price-down', objectPosition: 'center 50%', matchPhrase: `Price goes down! In midsummer, every strawberry farm is harvesting at once — supply floods the market. With so much available, stores compete by lowering prices to attract buyers. The exact same strawberry that costs $5 in January might cost $1.50 in July. Same demand, dramatically more supply — price drops.` },
            { image: 'l07-game-holiday-flight.png',      label: `An airplane seat on the day before a major holiday, when millions of families all want to travel.`,                         correctMatch: 'price-up',   objectPosition: 'center 50%', matchPhrase: `Price goes up! The plane has exactly the same number of seats regardless of the date — supply is fixed. But on the day before a major holiday, demand multiplies as millions of families all try to travel at once. With more buyers than seats, airlines raise prices because travellers are willing to pay to be on that flight.` },
            { image: 'l07-game-old-toy.png',             label: `Last year's most popular toy — now every store is overstocked with it because kids want the new version instead.`,         correctMatch: 'price-down', objectPosition: 'center 50%', matchPhrase: `Price goes down! Supply is high — stores are overstocked — and demand has collapsed because kids want the new version. Stores will discount heavily just to clear shelf space. When nobody urgently wants something and there's plenty of it, the price falls. This is why last year's electronics and last season's fashion go on sale.` },
          ],
          buckets: [
            { id: 'price-up',   label: `📈 Price Goes Up`,   color: '#60A5FA' },
            { id: 'price-down', label: `📉 Price Goes Down`, color: '#34D399' },
          ],
        },

        // PHASE 4 — MASTERY QUIZ
        {
          type:      'quiz',
          guideText: `Quiz time, {name}! Let's see what you've learned about supply and demand. Answer all 6 questions to earn your Market Watcher badge!`,
          questions: [
            {
              format:       'multiple-choice',
              question:     `What does demand mean in economics?`,
              options:      [`How much something costs to make`, `How much people want something`, `How many stores sell it`, `How long it takes to produce`],
              correctIndex: 1,
            },
            {
              format:       'multiple-choice',
              question:     `What happens to prices when supply goes down but demand stays high?`,
              options:      [`Prices go down`, `Prices stay the same`, `Prices go up`, `The product disappears from stores`],
              correctIndex: 2,
            },
            {
              format:       'multiple-choice',
              question:     `Why are plane tickets more expensive during holidays?`,
              options:      [`Airlines are greedier during holiday periods`, `Fuel costs more on holiday dates`, `Demand goes up but the supply of seats stays the same`, `Pilots are paid more on holidays`],
              correctIndex: 2,
            },
            {
              format:        'true-false',
              question:      `When many people want something and there isn't much of it available, the price goes up.`,
              correctAnswer: true,
            },
            {
              format:       'fill-blank',
              question:     `___ is how much of something is available for people to buy.`,
              options:      [`Supply`, `Demand`, `Price`, `Revenue`],
              correctIndex: 0,
            },
            {
              format:       'multiple-choice',
              question:     `Why are strawberries cheaper in summer than in winter?`,
              options:      [`People want strawberries less in the summer`, `Strawberries are physically larger in summer`, `There is more supply in summer — more farms are harvesting them at the same time`, `Stores discount them to compete with each other in summer`],
              correctIndex: 2,
            },
          ],
        },

        // PHASE 5 — REAL-WORLD CONNECTION
        {
          type:            'real-world',
          guideText:       `Next time you see something on sale, ask why — and next time you see something expensive, ask why. Prices are always telling a supply and demand story.`,
          familyAdventure: `Next time you shop, play the supply and demand game together. Look at sale items — why are they on sale? (Too much supply, not enough demand.) Look at expensive or limited things — why do they cost more? Look at seasonal items: when are they cheapest, and when are they most expensive? Every price tag is telling a story — see who can decode it fastest.`,
          creativePrompt:  `Pick three items your family buys regularly. Research their prices online and then find out if there's a time of year when they're cheaper or more expensive. For each item, write down: When is it cheapest? When is it most expensive? What is the supply and demand reason behind the price change? Draw a simple chart showing how the price moves across the year.`,
        },

        // PHASE 6 — CELEBRATION
        {
          type:      'celebration',
          xpEarned:  50,
          badge:     'market-watcher',
          badgeName: `Market Watcher`,
          message:   `Excellent work, {name}! You now know how supply and demand shape every price you see — from concert tickets to strawberries. When you understand why prices change, you become a smarter buyer and a sharper thinker. Ace is so proud to share this knowledge with you.`,
        },
      ],
    },
  ],
};

// Log on module load — confirms lesson wired correctly + verifies image assets at runtime
(() => {
  const l    = moneybusiness_explorer_l07_screens.lessons[0];
  const mags = l.screens.filter(s => s.type === 'magazine').length;
  const game = l.screens.find(s => s.type === 'interactive')?.items?.length || 0;
  const quiz = l.screens.find(s => s.type === 'quiz')?.questions?.length || 0;
  console.log(`[LESSON-MONEY-L07] Loaded: "Supply and Demand: Why Prices Change" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
  Promise.all([
    fetch('/explorer-assets/money-business/l07-s1-demand.png',         { method: 'HEAD' }),
    fetch('/explorer-assets/money-business/l07-s2-supply.png',         { method: 'HEAD' }),
    fetch('/explorer-assets/money-business/l07-s3-price-balance.png',  { method: 'HEAD' }),
    fetch('/explorer-assets/money-business/l07-s4-airline.png',        { method: 'HEAD' }),
    fetch('/explorer-assets/money-business/l07-s5-strawberries.png',   { method: 'HEAD' }),
    fetch('/explorer-assets/money-business/l07-s6-limited-edition.png', { method: 'HEAD' }),
  ]).then(([r1, r2, r3, r4, r5, r6]) => {
    console.log(`[ASSET-CHECK-MONEY-L07] demand: ${r1.ok}, supply: ${r2.ok}, price-balance: ${r3.ok}, airline: ${r4.ok}, strawberries: ${r5.ok}, limited-edition: ${r6.ok}`);
  }).catch(() => {
    console.log('[ASSET-CHECK-MONEY-L07] Could not verify image assets — network check failed');
  });
})();

export default moneybusiness_explorer_l07_screens;
