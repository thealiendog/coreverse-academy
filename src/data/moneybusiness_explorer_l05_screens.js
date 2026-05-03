// ============================================================
// COREVERSE EXPLORERS — Money & Business · Lesson 5
// "What Is a Business?"
// Ages 6–8 | Guide: Ace | ExplorerLessonPlayer format
// ============================================================

const moneybusiness_explorer_l05_screens = {
  ageBand:   'explorers',
  subjectId: 'money',
  guide:     'ace',
  lessons: [
    {
      id:        'mb-6-8-05',
      title:     `What Is a Business?`,
      duration:  12,
      xpReward:  50,
      badge:     'business-builder',
      badgeName: `Business Builder`,
      screens: [
        // PHASE 1 — WELCOME
        {
          type:      'welcome',
          guideText: `Everything around you came from a business. Your shoes, your phone, your lunch, your bed. But what exactly IS a business? And could YOU start one someday? Spoiler: yes, absolutely.`,
        },

        // PHASE 2 — MAGAZINE STORY (4 sections)
        {
          type:          'magazine',
          section:       1,
          totalSections: 4,
          headline:      `What Makes Something a Business?`,
          paragraphs: [
            `A business is any organisation that offers something valuable to people — a product or a service — in exchange for money. A lemonade stand is a business. So is a hospital, a restaurant, a smartphone app, and a company worth a billion dollars. What they all have in common: they solve a problem for customers and get paid for doing it.`,
            `The word "problem" is key. Every successful business exists because it answers a question people are asking: Where can I get food quickly? How do I get from A to B? Who will fix my broken pipe? Who will teach my kids? The business that answers the question and does it better than the alternatives wins customers.`,
            `This means that starting a business doesn't require a fancy office, a big investment, or years of experience. It requires identifying a problem that people have and figuring out a solution they'll pay for. That combination — problem, solution, payment — is the entire core of a business.`,
          ],
          image:        '/explorer-assets/money-business/l05-magazine-what-is-a-business.png',
          imageCaption: `A business — any organisation solving a problem for customers and getting paid for the solution`,
          vocab: [
            { word: `business`,  definition: `An organisation that offers a product or service to customers in exchange for money — businesses range from a single person working alone to companies with millions of employees.`, audioPrompt: `Business — an organisation that offers a product or service to customers in exchange for money. Businesses range from a single person working alone to companies with millions of employees.` },
            { word: `customer`,  definition: `A person or organisation that buys a product or service from a business — understanding who your customers are and what they need is essential to building any successful business.`,  audioPrompt: `Customer — a person or organisation that buys a product or service from a business. Understanding who your customers are and what they need is essential to building any successful business.` },
          ],
        },
        {
          type:          'magazine',
          section:       2,
          totalSections: 4,
          headline:      `The Three Parts of Every Business`,
          paragraphs: [
            `Every business — from the smallest lemonade stand to the largest tech company — is built on three things. The value proposition: what problem do you solve, and why is your solution better than the alternatives? The customer: who specifically needs your solution, and where do you find them? The revenue model: how do you actually get paid for what you do?`,
            `The value proposition is the most important of the three. It answers the question a customer is really asking: "Why should I choose you instead of someone else?" A strong value proposition is specific, clear, and easy to understand. "I make the fastest sandwiches in the neighbourhood" is a value proposition. "I provide premium artisan culinary experiences" is too vague to be useful.`,
            `If you can clearly answer all three questions — what problem you solve, who you solve it for, and how you get paid — you have a business idea. Most people only have one or two of the three. The most successful businesses have all three figured out from the start.`,
          ],
          image:        '/explorer-assets/money-business/l05-magazine-three-parts.png',
          imageCaption: `The three parts of every business — value proposition, customers, and revenue model`,
          vocab: [
            { word: `value proposition`, definition: `A clear statement of what problem a business solves and why its solution is better than alternatives — the core reason a customer chooses one business over another.`,             audioPrompt: `Value proposition — a clear statement of what problem a business solves and why its solution is better than alternatives. The core reason a customer chooses one business over another.` },
            { word: `revenue model`,     definition: `How a business gets paid — through product sales, subscriptions, service fees, advertising, or any other mechanism that converts value into money for the business.`, audioPrompt: `Revenue model — how a business gets paid. Through product sales, subscriptions, service fees, advertising, or any other mechanism that converts value into money for the business.` },
          ],
        },
        {
          type:          'magazine',
          section:       3,
          totalSections: 4,
          headline:      `Different Types of Businesses`,
          paragraphs: [
            `Businesses come in every shape and size. The simplest type is a sole proprietorship — one person running a business entirely on their own. A freelance photographer, a neighbourhood babysitter, or a kid with a lemonade stand are all sole proprietors. It's the easiest business structure to start because it requires no paperwork or formal setup.`,
            `A partnership is when two or more people run a business together. Partners share the work, the costs, and the profits. Many professional firms — law offices, medical practices, accounting firms — are partnerships. The advantage is shared expertise and effort. The challenge is shared decision-making.`,
            `A corporation is a larger business structure with formal ownership (shareholders), a board of directors, and employees. Corporations can raise money from investors, issue shares, and grow to enormous scale. Apple, Nike, and Amazon are all corporations. Most businesses start as sole proprietorships or small partnerships and only become corporations if they grow significantly.`,
          ],
          image:        '/explorer-assets/money-business/l05-magazine-business-types.png',
          imageCaption: `Types of businesses — sole proprietorship, partnership, and corporation, from smallest to largest`,
          vocab: [
            { word: `sole proprietorship`, definition: `A business owned and operated by one person — the simplest business structure, requiring no formal setup. The owner keeps all profits but is also personally responsible for any debts.`,      audioPrompt: `Sole proprietorship — a business owned and operated by one person. The simplest business structure, requiring no formal setup. The owner keeps all profits but is also personally responsible for any debts.` },
            { word: `corporation`,         definition: `A large business structure with formal ownership through shares, a board of directors, and employees — corporations can raise investment capital and grow to enormous scale.`, audioPrompt: `Corporation — a large business structure with formal ownership through shares, a board of directors, and employees. Corporations can raise investment capital and grow to enormous scale.` },
          ],
        },
        {
          type:          'magazine',
          section:       4,
          totalSections: 4,
          headline:      `Kid Entrepreneurs`,
          paragraphs: [
            `Kids start real businesses all the time — and some of those businesses become very large. Mikaila Ulmer started a lemonade business at age 4, inspired by a family recipe using honey and afraid of bees. She turned her fear into a product. Her brand, Me & the Bees Lemonade, now sells in major grocery stores across the United States.`,
            `Moziah Bridges started making bow ties with his grandmother at age 9 because he couldn't find ones he liked. He began selling them online, appeared on the television show Shark Tank at age 11, and eventually landed a licensing deal with the NBA. He turned a personal frustration — "I can't find what I want" — into a business.`,
            `Both of these entrepreneurs started by noticing a problem — a gap between what existed and what they wanted — and figuring out how to fill it. Age didn't determine whether they could solve a problem for people. The same is true for you. The question isn't whether you're old enough to start a business. The question is: what problem do you see?`,
          ],
          image:        '/explorer-assets/money-business/l05-magazine-kid-entrepreneurs.png',
          imageCaption: `Kid entrepreneurs — Mikaila Ulmer and Moziah Bridges, who spotted a problem and built a business`,
          vocab: [
            { word: `entrepreneur`, definition: `A person who starts and runs their own business, taking on financial risk in exchange for the opportunity to build something and keep the profits.`,                                                         audioPrompt: `Entrepreneur — a person who starts and runs their own business, taking on financial risk in exchange for the opportunity to build something and keep the profits.` },
            { word: `innovation`,   definition: `A new idea, product, or way of doing something that creates value — entrepreneurs often succeed by innovating, finding a better solution to a problem than what currently exists.`, audioPrompt: `Innovation — a new idea, product, or way of doing something that creates value. Entrepreneurs often succeed by innovating, finding a better solution to a problem than what currently exists.` },
          ],
        },

        // PHASE 3 — INTERACTIVE
        {
          type:          'interactive',
          activityType:  'drag-match',
          instruction:   `Tap each card, then tap whether the business sells a product or provides a service!`,
          guideText:     `Every business offers either a product (something you can take home and own) or a service (something done for you that you experience). Products are physical things — you can hold them. Services are actions — someone does something for you. Can you sort these four businesses into the right category?`,
          columnHeaders: [`The Business`, `Product or Service?`],
          items: [
            { image: 'l05-game-bakery.png',      label: `A shop where you buy freshly made bread, cookies, and cakes to take home with you.`,                           correctMatch: 'product', objectPosition: 'center 50%', matchPhrase: `Sells a product! A bakery makes physical goods — bread, cakes, and cookies — that you take home and own. You can hold a loaf of bread. You can save it, share it, or eat it tomorrow. That's a product: something tangible you pay for and take with you. Product businesses need to manage inventory, ingredients, and production.` },
            { image: 'l05-game-plumber.png',     label: `A professional who comes to your home to fix broken pipes and leaking taps for a fee.`,                        correctMatch: 'service', objectPosition: 'center 50%', matchPhrase: `Provides a service! A plumber does work for you — fixes your pipes — and leaves. You don't take a physical product home. You paid for the skill, time, and expertise of another person. That's a service: something done for you that you can't hold or keep. Service businesses sell time and expertise rather than physical things.` },
            { image: 'l05-game-toy-store.png',   label: `A store where you browse and purchase toys, games, and puzzles to own and take home.`,                        correctMatch: 'product', objectPosition: 'center 50%', matchPhrase: `Sells a product! A toy store sells physical items — toys and games — that you take home and keep. Products are things you can touch. The toy store buys products from manufacturers and sells them to customers at a higher price, keeping the difference as profit. That price difference is called the profit margin.` },
            { image: 'l05-game-dog-groomer.png', label: `A person who washes, trims, and grooms pets for their owners at a studio, charging per session.`,            correctMatch: 'service', objectPosition: 'center 50%', matchPhrase: `Provides a service! A dog groomer does work for you and your pet — washes, trims, and grooms them — and you pay for the time and skill. You don't take a physical product home (just a clean dog!). Services are often harder to scale than products — a single groomer can only work with so many dogs per day.` },
          ],
          buckets: [
            { id: 'product', label: `📦 Sells a Product`,    color: '#60A5FA' },
            { id: 'service', label: `🔧 Provides a Service`, color: '#34D399' },
          ],
        },

        // PHASE 4 — MASTERY QUIZ
        {
          type:      'quiz',
          guideText: `Quiz time, {name}! Let's see what you've learned about what makes a business. Answer all 6 questions to earn your Business Builder badge!`,
          questions: [
            {
              format:       'multiple-choice',
              question:     `What is the core of every business?`,
              options:      [`Making as much money as possible`, `Solving a problem for people and getting paid for it`, `Having lots of employees and a big office`, `Selling products in a large store`],
              correctIndex: 1,
            },
            {
              format:       'multiple-choice',
              question:     `What are the three parts of every business?`,
              options:      [`Logo, website, and social media presence`, `Value proposition, customers, and revenue model`, `Owner, employees, and profit margin`, `Product, price, and packaging design`],
              correctIndex: 1,
            },
            {
              format:       'multiple-choice',
              question:     `How old was Mikaila Ulmer when she started her lemonade business?`,
              options:      [`4 years old`, `8 years old`, `12 years old`, `16 years old`],
              correctIndex: 0,
            },
            {
              format:        'true-false',
              question:      `A business can be started by a kid — age doesn't determine whether you can spot a problem and figure out how to solve it.`,
              correctAnswer: true,
            },
            {
              format:       'fill-blank',
              question:     `The part of a business idea that explains what problem you solve for customers is called the ___ proposition.`,
              options:      [`value`, `revenue`, `customer`, `profit`],
              correctIndex: 0,
            },
            {
              format:       'multiple-choice',
              question:     `What is a sole proprietorship?`,
              options:      [`A business that sells only one type of product`, `One person running a business entirely on their own`, `A business partnership between two companies`, `A large corporation with many shareholders`],
              correctIndex: 1,
            },
          ],
        },

        // PHASE 5 — REAL-WORLD CONNECTION
        {
          type:            'real-world',
          guideText:       `Look around you today and ask: what problem do I see that nobody has solved yet? You just started thinking like an entrepreneur.`,
          familyAdventure: `Go to a local small business — a coffee shop, bakery, or neighbourhood store. Ask the owner: What problem does your business solve? How did you get started? What was the hardest part in the beginning? Business owners love talking about how they started — and their answers will show you that every business began with a simple problem and someone willing to solve it.`,
          creativePrompt:  `Think of a problem you see around you — at school, at home, or in your neighbourhood. Write down: What's the problem? Who has this problem? How could you solve it? What would you charge? Who would your first three customers be? You just created a business plan. Give your business a name and draw a simple logo. Congratulations — you're thinking like an entrepreneur.`,
        },

        // PHASE 6 — CELEBRATION
        {
          type:      'celebration',
          xpEarned:  50,
          badge:     'business-builder',
          badgeName: `Business Builder`,
          message:   `Excellent work, {name}! You now know that a business is just a solution to a problem — and anyone, at any age, can spot a problem and figure out how to solve it. The next great business idea could be yours. Ace is so proud to share this knowledge with you.`,
        },
      ],
    },
  ],
};

// Log on module load — confirms lesson wired correctly + verifies image assets at runtime
(() => {
  const l    = moneybusiness_explorer_l05_screens.lessons[0];
  const mags = l.screens.filter(s => s.type === 'magazine').length;
  const game = l.screens.find(s => s.type === 'interactive')?.items?.length || 0;
  const quiz = l.screens.find(s => s.type === 'quiz')?.questions?.length || 0;
  console.log(`[LESSON-MONEY-L05] Loaded: "What Is a Business?" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
  Promise.all([
    fetch('/explorer-assets/money-business/l05-magazine-what-is-a-business.png', { method: 'HEAD' }),
    fetch('/explorer-assets/money-business/l05-magazine-three-parts.png',        { method: 'HEAD' }),
    fetch('/explorer-assets/money-business/l05-magazine-business-types.png',     { method: 'HEAD' }),
    fetch('/explorer-assets/money-business/l05-magazine-kid-entrepreneurs.png',  { method: 'HEAD' }),
  ]).then(([r1, r2, r3, r4]) => {
    console.log(`[ASSET-CHECK-MONEY-L05] what-is-a-business: ${r1.ok}, three-parts: ${r2.ok}, business-types: ${r3.ok}, kid-entrepreneurs: ${r4.ok}`);
  }).catch(() => {
    console.log('[ASSET-CHECK-MONEY-L05] Could not verify image assets — network check failed');
  });
})();

export default moneybusiness_explorer_l05_screens;
