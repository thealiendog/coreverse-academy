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

        // PHASE 2 — MAGAZINE STORY (6 sections)
        {
          type:          'magazine',
          section:       1,
          totalSections: 6,
          headline:      `What Is a Business?`,
          paragraphs: [
            `A business is any organisation that offers something valuable — a product or a service — in exchange for money.`,
            `A lemonade stand is a business. So is a hospital, a restaurant, and a billion-dollar company. They all solve problems for customers.`,
          ],
          image:        '/explorer-assets/money-business/l05-s1-what-is-business.png',
          imageCaption: `From lemonade stands to billion-dollar companies — they're all the same thing at heart`,
          vocab: [
            { word: 'business', definition: `An organisation that offers a product or service in exchange for money. Big or small, the basic idea is the same.`, audioPrompt: `Business — an organisation that offers a product or service in exchange for money. Big or small, the basic idea is the same.` },
            { word: 'product',  definition: `Something physical you can buy and take home — a bag of cookies, a toy, a phone. Products are tangible.`, audioPrompt: `Product — something physical you can buy and take home: a bag of cookies, a toy, a phone. Products are tangible.` },
          ],
        },
        {
          type:          'magazine',
          section:       2,
          totalSections: 6,
          headline:      `Every Business Solves a Problem`,
          paragraphs: [
            `The word "problem" is the key. Every successful business answers a question people are already asking.`,
            `Where can I get food fast? Who will fix my pipe? Who will teach my kids? The business that answers best — wins customers.`,
          ],
          image:        '/explorer-assets/money-business/l05-s2-problem-solution.png',
          imageCaption: `Every business — every single one — exists because it solves a problem someone is willing to pay to fix`,
          vocab: [
            { word: 'customer', definition: `A person who buys from a business. Every business needs customers — no customers means no business.`, audioPrompt: `Customer — a person who buys from a business. Every business needs customers. No customers means no business.` },
            { word: 'service',  definition: `An action someone does for you in exchange for money — like a haircut, a dog walk, or a music lesson.`, audioPrompt: `Service — an action someone does for you in exchange for money: like a haircut, a dog walk, or a music lesson.` },
          ],
        },
        {
          type:          'magazine',
          section:       3,
          totalSections: 6,
          headline:      `The Three Parts of a Business`,
          paragraphs: [
            `Every business — from the smallest stand to the biggest company — is built on three things.`,
            `A value proposition (what problem you solve), a customer (who needs it), and a revenue model (how you get paid).`,
          ],
          image:        '/explorer-assets/money-business/l05-s3-three-pillars.png',
          imageCaption: `Three pillars: what you solve, who you solve it for, how you get paid`,
          vocab: [
            { word: 'value proposition', definition: `What problem your business solves and why your solution is better than others. The reason a customer picks YOU.`, audioPrompt: `Value proposition — what problem your business solves and why your solution is better than others. The reason a customer picks you.` },
            { word: 'revenue model',     definition: `How a business gets paid. Selling products, charging fees, monthly subscriptions — different ways to turn value into money.`, audioPrompt: `Revenue model — how a business gets paid. Selling products, charging fees, monthly subscriptions: different ways to turn value into money.` },
          ],
        },
        {
          type:          'magazine',
          section:       4,
          totalSections: 6,
          headline:      `Sole Proprietor to Corporation`,
          paragraphs: [
            `The simplest business is a sole proprietorship — one person running everything alone. A babysitter or a kid with a lemonade stand.`,
            `A partnership is two or more people sharing the work. A corporation is bigger — Apple, Nike, Amazon are corporations with shareholders and employees.`,
          ],
          image:        '/explorer-assets/money-business/l05-s4-business-sizes.png',
          imageCaption: `Businesses come in every size — one person alone, partners working together, or huge corporations`,
          vocab: [
            { word: 'sole proprietorship', definition: `A business owned by just one person. The simplest structure — no paperwork needed. A lemonade stand or a babysitter.`, audioPrompt: `Sole proprietorship — a business owned by just one person. The simplest structure, no paperwork needed. A lemonade stand or a babysitter.` },
            { word: 'corporation',         definition: `A big business with shareholders, a board, and employees. Apple, Nike, and Amazon are corporations.`, audioPrompt: `Corporation — a big business with shareholders, a board, and employees. Apple, Nike, and Amazon are corporations.` },
          ],
        },
        {
          type:          'magazine',
          section:       5,
          totalSections: 6,
          headline:      `Kid Entrepreneurs Are Real`,
          paragraphs: [
            `Mikaila Ulmer started a lemonade business at age 4. Her brand, Me & the Bees Lemonade, now sells in major grocery stores across America.`,
            `Moziah Bridges started making bow ties at age 9. He appeared on Shark Tank at 11 and later landed a deal with the NBA.`,
          ],
          image:        '/explorer-assets/money-business/l05-s5-kid-entrepreneurs.png',
          imageCaption: `Mikaila started at 4. Moziah at 9. Age isn't the limit — noticing the problem is.`,
          vocab: [
            { word: 'entrepreneur', definition: `A person who starts and runs their own business. Entrepreneurs take risks to build something new.`, audioPrompt: `Entrepreneur — a person who starts and runs their own business. Entrepreneurs take risks to build something new.` },
            { word: 'innovation',   definition: `A new idea, product, or way of doing something that creates value. Entrepreneurs often succeed by innovating.`, audioPrompt: `Innovation — a new idea, product, or way of doing something that creates value. Entrepreneurs often succeed by innovating.` },
          ],
        },
        {
          type:          'magazine',
          section:       6,
          totalSections: 6,
          headline:      `What Problem Do YOU See?`,
          paragraphs: [
            `Both Mikaila and Moziah started by noticing a problem — a gap between what existed and what they wanted — and filling it.`,
            `Age didn't stop them. The question isn't whether you're old enough to start a business. The question is: what problem do you see?`,
          ],
          image:        '/explorer-assets/money-business/l05-s6-spot-the-problem.png',
          imageCaption: `The whole business world started with one person noticing one problem. Yours could too.`,
          vocab: [
            { word: 'opportunity', definition: `A chance to do something. A problem nobody has solved yet is a business opportunity waiting for you.`, audioPrompt: `Opportunity — a chance to do something. A problem nobody has solved yet is a business opportunity waiting for you.` },
            { word: 'idea',        definition: `A thought or plan in your mind. Every business in history started with a single idea — and someone willing to act on it.`, audioPrompt: `Idea — a thought or plan in your mind. Every business in history started with a single idea, and someone willing to act on it.` },
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
    fetch('/explorer-assets/money-business/l05-s1-what-is-business.png',  { method: 'HEAD' }),
    fetch('/explorer-assets/money-business/l05-s2-problem-solution.png',  { method: 'HEAD' }),
    fetch('/explorer-assets/money-business/l05-s3-three-pillars.png',     { method: 'HEAD' }),
    fetch('/explorer-assets/money-business/l05-s4-business-sizes.png',    { method: 'HEAD' }),
    fetch('/explorer-assets/money-business/l05-s5-kid-entrepreneurs.png', { method: 'HEAD' }),
    fetch('/explorer-assets/money-business/l05-s6-spot-the-problem.png',  { method: 'HEAD' }),
  ]).then(([r1, r2, r3, r4, r5, r6]) => {
    console.log(`[ASSET-CHECK-MONEY-L05] what-is-business: ${r1.ok}, problem-solution: ${r2.ok}, three-pillars: ${r3.ok}, business-sizes: ${r4.ok}, kid-entrepreneurs: ${r5.ok}, spot-the-problem: ${r6.ok}`);
  }).catch(() => {
    console.log('[ASSET-CHECK-MONEY-L05] Could not verify image assets — network check failed');
  });
})();

export default moneybusiness_explorer_l05_screens;
