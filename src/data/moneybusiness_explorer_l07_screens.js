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

        // PHASE 2 — MAGAZINE STORY (4 sections)
        {
          type:          'magazine',
          section:       1,
          totalSections: 4,
          headline:      `What Is Demand?`,
          paragraphs: [
            `Demand is how much people want something. When lots of people want something, demand is high. When few people want it, demand is low. Demand isn't fixed — it changes constantly based on trends, events, seasons, and needs. Understanding demand helps you predict when prices will rise or fall before they do.`,
            `When a major storm is forecast, everyone rushes to buy water, flashlights, and batteries. Demand for those items shoots up almost instantly. When a highly anticipated video game releases, demand is extremely high on launch day — and the excitement usually fades over the following weeks and months, bringing demand back down.`,
            `Demand can also be created. Marketing campaigns, social media trends, and celebrity endorsements can cause a surge in demand for products that previously had little interest. This is why businesses invest so heavily in marketing — demand that is created intentionally can be just as powerful as demand that arises naturally.`,
          ],
          image:        '/explorer-assets/money-business/l07-magazine-demand.png',
          imageCaption: `Demand — how much people want something, constantly shifting with trends, seasons, and events`,
          vocab: [
            { word: `demand`,    definition: `The amount that buyers want to purchase of a product or service at a given price — when demand is high and supply is limited, prices tend to rise.`,                                             audioPrompt: `Demand — the amount that buyers want to purchase of a product or service at a given price. When demand is high and supply is limited, prices tend to rise.` },
            { word: `consumer`,  definition: `A person who buys and uses goods or services — consumers collectively drive demand in any market. When millions of consumers want the same thing, demand becomes a powerful market force.`, audioPrompt: `Consumer — a person who buys and uses goods or services. Consumers collectively drive demand in any market. When millions of consumers want the same thing, demand becomes a powerful market force.` },
          ],
        },
        {
          type:          'magazine',
          section:       2,
          totalSections: 4,
          headline:      `What Is Supply?`,
          paragraphs: [
            `Supply is how much of something is available. If there are only 100 concert tickets for a show that 10,000 people want to attend, supply is very low relative to demand. When supply is scarce and demand is strong, sellers can charge more — because many people are competing for a limited number of things.`,
            `Supply can be limited intentionally or by circumstance. A rare natural resource has limited supply because the Earth only produced so much of it. A limited-edition product has limited supply because the manufacturer chose to make only a certain number. Weather can limit supply — a freeze that destroys a strawberry crop reduces supply suddenly and sharply.`,
            `When supply increases significantly, prices usually fall — even if demand stays the same. If a manufacturer doubles production of a popular toy, there's more to go around, so the urgency to pay a high price disappears. Businesses that can increase supply faster than competitors tend to capture the most customers.`,
          ],
          image:        '/explorer-assets/money-business/l07-magazine-supply.png',
          imageCaption: `Supply — how much of something is available, shaped by production, resources, and deliberate limits`,
          vocab: [
            { word: `supply`,    definition: `The total amount of a product or service available for buyers to purchase — when supply is low and demand is high, prices rise. When supply is abundant, prices tend to fall.`,              audioPrompt: `Supply — the total amount of a product or service available for buyers to purchase. When supply is low and demand is high, prices rise. When supply is abundant, prices tend to fall.` },
            { word: `scarcity`,  definition: `The condition of having limited supply of something relative to how much people want it — scarcity is what makes things valuable. The rarer something is and the more people want it, the higher its price.`, audioPrompt: `Scarcity — the condition of having limited supply of something relative to how much people want it. Scarcity is what makes things valuable. The rarer something is and the more people want it, the higher its price.` },
          ],
        },
        {
          type:          'magazine',
          section:       3,
          totalSections: 4,
          headline:      `How They Work Together`,
          paragraphs: [
            `Imagine supply and demand as two sides of a balance scale. When they're equal — when the amount available matches what people want — prices stay stable. When the balance tips, prices move. Demand goes up or supply goes down, and the scale tips toward higher prices. Demand drops or supply goes up, and prices fall.`,
            `This isn't a rule someone invented — it's a pattern that emerges naturally from millions of individual decisions. Every time a seller adjusts a price and every time a buyer decides to buy or walk away, they're participating in this system. The price you see on any tag is the result of countless such decisions, constantly adjusting.`,
            `Gas prices are one of the most visible examples. Global events — a pipeline disruption, political tension in an oil-producing region, unusually cold weather driving up heating demand — can shift the supply-demand balance within hours. Gas station prices update almost daily because the market is constantly recalibrating.`,
          ],
          image:        '/explorer-assets/money-business/l07-magazine-balance.png',
          imageCaption: `Supply and demand in balance — when either side shifts, prices adjust until the market finds equilibrium`,
          vocab: [
            { word: `equilibrium`, definition: `The point where supply and demand are balanced — the price at which the amount sellers want to sell equals the amount buyers want to buy. Markets constantly move toward equilibrium.`,           audioPrompt: `Equilibrium — the point where supply and demand are balanced. The price at which the amount sellers want to sell equals the amount buyers want to buy. Markets constantly move toward equilibrium.` },
            { word: `market`,      definition: `Any place or system where buyers and sellers exchange goods or services — a market can be a physical store, a website, a stock exchange, or any environment where supply and demand interact.`, audioPrompt: `Market — any place or system where buyers and sellers exchange goods or services. A market can be a physical store, a website, a stock exchange, or any environment where supply and demand interact.` },
          ],
        },
        {
          type:          'magazine',
          section:       4,
          totalSections: 4,
          headline:      `Real-Life Examples`,
          paragraphs: [
            `Airline tickets are one of the clearest supply-demand stories in everyday life. Each plane has a fixed number of seats — that's supply, and it doesn't change. During major holidays, millions of families want to fly — demand spikes dramatically. With the same supply and much higher demand, airlines charge significantly more. Book in advance when demand is lower, and you'll pay less for the exact same seat.`,
            `Seasonal food prices tell the same story. Strawberries are cheap in midsummer because farms across the country are harvesting them simultaneously — supply is abundant. In winter, strawberries are expensive because few farms are producing them and they must be shipped from far away — supply shrinks while demand stays relatively constant.`,
            `Limited edition sneakers are perhaps the most dramatic example. A manufacturer deliberately produces only a small number of a highly anticipated shoe. Demand from collectors, resellers, and fans is enormous. The resulting scarcity sends resale prices soaring — sometimes five or ten times the original retail price. The manufacturer created that scarcity intentionally, understanding that rarity itself creates desire.`,
          ],
          image:        '/explorer-assets/money-business/l07-magazine-examples.png',
          imageCaption: `Real-life supply and demand — airline seats, seasonal strawberries, and limited-edition sneakers`,
          vocab: [
            { word: `seasonal pricing`, definition: `Price changes that occur predictably at certain times of year based on shifts in supply or demand — plane tickets, fresh produce, and holiday decorations all show seasonal pricing patterns.`, audioPrompt: `Seasonal pricing — price changes that occur predictably at certain times of year based on shifts in supply or demand. Plane tickets, fresh produce, and holiday decorations all show seasonal pricing patterns.` },
            { word: `resale`,           definition: `Selling something you already bought to another buyer, usually at a different price — resale markets for limited products often see prices far above the original retail price due to scarcity.`,    audioPrompt: `Resale — selling something you already bought to another buyer, usually at a different price. Resale markets for limited products often see prices far above the original retail price due to scarcity.` },
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
            { image: 'l07-game-limited-sneakers.png',    label: `A limited edition sneaker — only 500 pairs were made, but 50,000 people want them.`,                                           correctMatch: 'price-up',   objectPosition: 'center 50%', matchPhrase: `Price goes up! With only 500 pairs and 50,000 people wanting them, demand is 100 times higher than supply. Sellers know buyers will compete for the few available pairs. Resale prices for limited sneakers often reach five or ten times the original price — all because of deliberate scarcity meeting enormous demand.` },
            { image: 'l07-game-summer-strawberries.png', label: `Strawberries in midsummer, when farms across the country are all harvesting at the same time.`,                               correctMatch: 'price-down', objectPosition: 'center 50%', matchPhrase: `Price goes down! In midsummer, every strawberry farm is harvesting at once — supply floods the market. With so much available, stores compete by lowering prices to attract buyers. The exact same strawberry that costs $5 in January might cost $1.50 in July. Same demand, dramatically more supply — price drops.` },
            { image: 'l07-game-holiday-flight.png',      label: `An airplane seat on the day before a major holiday, when millions of families all want to travel.`,                          correctMatch: 'price-up',   objectPosition: 'center 50%', matchPhrase: `Price goes up! The plane has exactly the same number of seats regardless of the date — supply is fixed. But on the day before a major holiday, demand multiplies as millions of families all try to travel at once. With more buyers than seats, airlines raise prices because travellers are willing to pay to be on that flight.` },
            { image: 'l07-game-old-toy.png',             label: `Last year's most popular toy — now every store is overstocked with it because kids want the new version instead.`,          correctMatch: 'price-down', objectPosition: 'center 50%', matchPhrase: `Price goes down! Supply is high — stores are overstocked — and demand has collapsed because kids want the new version. Stores will discount heavily just to clear shelf space. When nobody urgently wants something and there's plenty of it, the price falls. This is why last year's electronics and last season's fashion go on sale.` },
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
    fetch('/explorer-assets/money-business/l07-magazine-demand.png',   { method: 'HEAD' }),
    fetch('/explorer-assets/money-business/l07-magazine-supply.png',   { method: 'HEAD' }),
    fetch('/explorer-assets/money-business/l07-magazine-balance.png',  { method: 'HEAD' }),
    fetch('/explorer-assets/money-business/l07-magazine-examples.png', { method: 'HEAD' }),
  ]).then(([r1, r2, r3, r4]) => {
    console.log(`[ASSET-CHECK-MONEY-L07] demand: ${r1.ok}, supply: ${r2.ok}, balance: ${r3.ok}, examples: ${r4.ok}`);
  }).catch(() => {
    console.log('[ASSET-CHECK-MONEY-L07] Could not verify image assets — network check failed');
  });
})();

export default moneybusiness_explorer_l07_screens;
