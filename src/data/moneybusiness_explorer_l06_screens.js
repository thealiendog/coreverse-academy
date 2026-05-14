// ============================================================
// COREVERSE EXPLORERS — Money & Business · Lesson 6
// "Products vs Services"
// Ages 6–8 | Guide: Ace | ExplorerLessonPlayer format
// ============================================================

const moneybusiness_explorer_l06_screens = {
  ageBand:   'explorers',
  subjectId: 'money',
  guide:     'ace',
  lessons: [
    {
      id:        'mb-6-8-06',
      title:     `Products vs Services`,
      duration:  12,
      xpReward:  50,
      badge:     'product-pro',
      badgeName: `Product Pro`,
      screens: [
        // PHASE 1 — WELCOME
        {
          type:      'welcome',
          guideText: `When you buy a candy bar, you're buying a product. When you get a haircut, you're buying a service. These are two totally different things — and understanding the difference is one of the first steps to thinking like a business person.`,
        },

        // PHASE 2 — MAGAZINE STORY (6 sections)
        {
          type:          'magazine',
          section:       1,
          totalSections: 6,
          headline:      `What Is a Product?`,
          paragraphs: [
            `A product is a thing — something you can hold, use, eat, or download.`,
            `Physical products: food, clothes, toys, cars. Digital products: apps, songs, e-books, video games. Either way, you take ownership when you buy it.`,
          ],
          image:        '/explorer-assets/money-business/l06-s1-product.png',
          imageCaption: `A product is something you take home or download — and own`,
          vocab: [
            { word: 'physical product', definition: `A tangible thing you can hold and take home — food, clothing, toys, furniture, anything you can touch.`, audioPrompt: `Physical product — a tangible thing you can hold and take home: food, clothing, toys, furniture, anything you can touch.` },
            { word: 'digital product',  definition: `A product delivered electronically — apps, songs, e-books, video games. No physical form, infinite copies.`, audioPrompt: `Digital product — a product delivered electronically: apps, songs, e-books, video games. No physical form, infinite copies.` },
          ],
        },
        {
          type:          'magazine',
          section:       2,
          totalSections: 6,
          headline:      `What Is a Service?`,
          paragraphs: [
            `A service is work done for someone else. Haircuts, tutoring, dog walking, dentistry — all services.`,
            `You're not buying a thing to take home. You're buying someone's time, skill, and effort applied directly to your problem.`,
          ],
          image:        '/explorer-assets/money-business/l06-s2-service.png',
          imageCaption: `A service is work — someone's time and skill applied to your problem`,
          vocab: [
            { word: 'service', definition: `Work done for someone in exchange for money. A haircut, a piano lesson, a doctor's visit — all services.`, audioPrompt: `Service — work done for someone in exchange for money. A haircut, a piano lesson, a doctor's visit, all services.` },
            { word: 'skill',   definition: `The ability to do something well — services are valuable because of the skill behind them.`, audioPrompt: `Skill — the ability to do something well. Services are valuable because of the skill behind them.` },
          ],
        },
        {
          type:          'magazine',
          section:       3,
          totalSections: 6,
          headline:      `Products Scale, Services Don't`,
          paragraphs: [
            `A musician can record one song and sell it to millions of people without recording it again. That's scale.`,
            `A dentist can only clean one set of teeth at a time. Services are limited by hours in the day. That's the difference.`,
          ],
          image:        '/explorer-assets/money-business/l06-s3-scale-vs-time.png',
          imageCaption: `Products reach millions. Services reach one customer at a time.`,
          vocab: [
            { word: 'scale',          definition: `The ability to grow revenue without working more hours. Products scale easily; services don't.`, audioPrompt: `Scale — the ability to grow revenue without working more hours. Products scale easily; services don't.` },
            { word: 'passive income', definition: `Money earned without actively working for each dollar. A product sold while you sleep is passive income.`, audioPrompt: `Passive income — money earned without actively working for each dollar. A product sold while you sleep is passive income.` },
          ],
        },
        {
          type:          'magazine',
          section:       4,
          totalSections: 6,
          headline:      `When Businesses Combine Both`,
          paragraphs: [
            `Smart businesses combine products and services. A restaurant sells food (product) AND cooking, serving, and atmosphere (service).`,
            `A phone company sells a device (product) AND cloud storage, support, and updates (service). The combination makes both more valuable.`,
          ],
          image:        '/explorer-assets/money-business/l06-s4-restaurant-combined.png',
          imageCaption: `The smartest businesses sell both — a product AND a service wrapped together`,
          vocab: [
            { word: 'combine', definition: `To put two things together. Combining products and services creates more value than either alone.`, audioPrompt: `Combine — to put two things together. Combining products and services creates more value than either alone.` },
            { word: 'bundle',  definition: `Combining offerings into one package — like a phone plus cloud storage plus tech support.`, audioPrompt: `Bundle — combining offerings into one package: like a phone plus cloud storage plus tech support.` },
          ],
        },
        {
          type:          'magazine',
          section:       5,
          totalSections: 6,
          headline:      `Customer Loyalty`,
          paragraphs: [
            `When you bundle products with services, customers have more reasons to stay loyal.`,
            `A competitor can match your price. But if you also provide ongoing service and support, the relationship becomes much harder to replace.`,
          ],
          image:        '/explorer-assets/money-business/l06-s5-loyalty-threads.png',
          imageCaption: `Bundles create loyalty — and loyal customers are the most valuable customers`,
          vocab: [
            { word: 'loyalty',    definition: `The tendency of a customer to keep buying from the same business over time. Loyal customers are gold.`, audioPrompt: `Loyalty — the tendency of a customer to keep buying from the same business over time. Loyal customers are gold.` },
            { word: 'competitor', definition: `Another business offering similar products or services. Competitors fight for the same customers.`, audioPrompt: `Competitor — another business offering similar products or services. Competitors fight for the same customers.` },
          ],
        },
        {
          type:          'magazine',
          section:       6,
          totalSections: 6,
          headline:      `The Smart Path`,
          paragraphs: [
            `Many entrepreneurs follow a strategic path: start with services to earn money quickly, build expertise, then create products.`,
            `A fitness trainer teaches classes (service), then sells an online workout program (product). Services pay the bills now. Products grow the business forever.`,
          ],
          image:        '/explorer-assets/money-business/l06-s6-smart-path.png',
          imageCaption: `Start with services. Build expertise. Then turn that expertise into a product.`,
          vocab: [
            { word: 'strategy',  definition: `A plan for reaching a goal. Many entrepreneurs use a services-first strategy to fund their product later.`, audioPrompt: `Strategy — a plan for reaching a goal. Many entrepreneurs use a services-first strategy to fund their product later.` },
            { word: 'expertise', definition: `Deep knowledge in a specific area — built through experience. Expertise is what makes a service valuable AND a product credible.`, audioPrompt: `Expertise — deep knowledge in a specific area, built through experience. Expertise is what makes a service valuable and a product credible.` },
          ],
        },

        // PHASE 3 — INTERACTIVE
        {
          type:          'interactive',
          activityType:  'drag-match',
          instruction:   `Tap each card, then tap which type of business it is!`,
          guideText:     `Businesses can sell physical products you can hold, digital products you download, services that someone does for you — or a combination of both. This lesson goes deeper than just "product or service." Can you sort all four examples into the right category?`,
          columnHeaders: [`The Business`, `What Type?`],
          items: [
            { image: 'l06-game-book.png',              label: `A printed book you buy at a bookstore and take home to own and read.`,                              correctMatch: 'physical', objectPosition: 'center 50%', matchPhrase: `Physical product! A printed book is something you can hold, carry, and keep on a shelf. It's made from materials — paper, ink, a cover — manufactured, and shipped to you. Every copy is a physical object. Physical products can be made in large quantities, but each copy costs money to produce.` },
            { image: 'l06-game-streaming.png',         label: `A music streaming subscription you access on any device, anywhere, at any time.`,                  correctMatch: 'digital',  objectPosition: 'center 50%', matchPhrase: `Digital product! A streaming subscription gives you access to millions of songs stored on servers — there's nothing physical to hold. The company created the platform once and sells access to it repeatedly. Every new subscriber adds almost pure profit because there's no manufacturing cost for a digital copy.` },
            { image: 'l06-game-personal-trainer.png',  label: `A personal trainer who exercises with you in person and designs your workouts each week.`,        correctMatch: 'service',  objectPosition: 'center 50%', matchPhrase: `Service! A personal trainer does work for you — they plan, coach, and motivate. You don't take a product home; you benefit from their skill and time. This is a classic service: personal, skill-based, and limited by how many clients the trainer can work with in a day.` },
            { image: 'l06-game-restaurant.png',        label: `A restaurant that prepares hot meals and brings them to your table with full table service.`,       correctMatch: 'both',     objectPosition: 'center 50%', matchPhrase: `Both! A restaurant combines products and services seamlessly. The food is a physical product — made from ingredients, prepared, and delivered to you. But the cooking, serving, atmosphere, and hospitality are all services. This combination is why eating at a restaurant feels different from just buying the same food in a shop.` },
          ],
          buckets: [
            { id: 'physical', label: `📦 Physical Product`,   color: '#60A5FA' },
            { id: 'digital',  label: `💻 Digital Product`,    color: '#34D399' },
            { id: 'service',  label: `🔧 Service`,            color: '#F59E0B' },
            { id: 'both',     label: `🔄 Product + Service`,  color: '#818CF8' },
          ],
        },

        // PHASE 4 — MASTERY QUIZ
        {
          type:      'quiz',
          guideText: `Quiz time, {name}! Let's see what you've learned about products and services. Answer all 6 questions to earn your Product Pro badge!`,
          questions: [
            {
              format:       'multiple-choice',
              question:     `What is the difference between a product and a service?`,
              options:      [`Products are expensive, services are cheap`, `A product is a thing you can use or hold — a service is work done for you`, `Products come from stores, services come from people`, `Products last forever, services don't`],
              correctIndex: 1,
            },
            {
              format:       'multiple-choice',
              question:     `Why can products scale better than services?`,
              options:      [`Products are cheaper to make than services`, `You can sell thousands without working extra hours`, `Products are more popular than services`, `Services require special licences to sell`],
              correctIndex: 1,
            },
            {
              format:       'multiple-choice',
              question:     `Is a restaurant a product, a service, or both?`,
              options:      [`Product only — it sells food`, `Service only — it cooks for you`, `Both — the food is the product, and cooking and serving is the service`, `Neither — it's just a building`],
              correctIndex: 2,
            },
            {
              format:        'true-false',
              question:      `A digital product like an app can be sold to thousands of customers without the creator working extra hours for each sale.`,
              correctAnswer: true,
            },
            {
              format:       'fill-blank',
              question:     `Products are easier to ___ because you can sell many copies without adding extra working hours.`,
              options:      [`scale`, `price`, `advertise`, `deliver`],
              correctIndex: 0,
            },
            {
              format:       'multiple-choice',
              question:     `Why do many entrepreneurs start with services before creating products?`,
              options:      [`Services are always more profitable than products`, `Services are harder to create than physical products`, `Services earn money quickly — products can earn money even while you sleep`, `Products require a business licence to sell`],
              correctIndex: 2,
            },
          ],
        },

        // PHASE 5 — REAL-WORLD CONNECTION
        {
          type:            'real-world',
          guideText:       `Next time you buy something, ask: is this a product I'll take home, or a service someone is doing for me? That one question sharpens your business eye.`,
          familyAdventure: `Walk through your neighbourhood or a shopping area together. Point out businesses and decide: product, service, or both? Try to find at least one clear example of each. Bonus challenge: find a business that started as a service and created a product — or vice versa. A personal trainer who made a workout book, or a bakery that started delivering boxes.`,
          creativePrompt:  `Think of a skill you have — drawing, coding, making things, knowing a lot about a subject. Now plan two businesses: one that sells a SERVICE using that skill (you do it for someone), and one that creates a PRODUCT from that skill (something people can buy and keep). Write down both ideas: what you'd offer, who your customers would be, and how you'd charge for each. Which would earn money faster? Which could grow bigger?`,
        },

        // PHASE 6 — CELEBRATION
        {
          type:      'celebration',
          xpEarned:  50,
          badge:     'product-pro',
          badgeName: `Product Pro`,
          message:   `Excellent work, {name}! You now know the difference between products and services — and why the smartest businesses often combine both. Products scale, services build trust, and together they're a powerful combination. Ace is so proud to share this knowledge with you.`,
        },
      ],
    },
  ],
};

// Log on module load — confirms lesson wired correctly + verifies image assets at runtime
(() => {
  const l    = moneybusiness_explorer_l06_screens.lessons[0];
  const mags = l.screens.filter(s => s.type === 'magazine').length;
  const game = l.screens.find(s => s.type === 'interactive')?.items?.length || 0;
  const quiz = l.screens.find(s => s.type === 'quiz')?.questions?.length || 0;
  console.log(`[LESSON-MONEY-L06] Loaded: "Products vs Services" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
  Promise.all([
    fetch('/explorer-assets/money-business/l06-s1-product.png',            { method: 'HEAD' }),
    fetch('/explorer-assets/money-business/l06-s2-service.png',            { method: 'HEAD' }),
    fetch('/explorer-assets/money-business/l06-s3-scale-vs-time.png',      { method: 'HEAD' }),
    fetch('/explorer-assets/money-business/l06-s4-restaurant-combined.png', { method: 'HEAD' }),
    fetch('/explorer-assets/money-business/l06-s5-loyalty-threads.png',    { method: 'HEAD' }),
    fetch('/explorer-assets/money-business/l06-s6-smart-path.png',         { method: 'HEAD' }),
  ]).then(([r1, r2, r3, r4, r5, r6]) => {
    console.log(`[ASSET-CHECK-MONEY-L06] product: ${r1.ok}, service: ${r2.ok}, scale-vs-time: ${r3.ok}, restaurant-combined: ${r4.ok}, loyalty-threads: ${r5.ok}, smart-path: ${r6.ok}`);
  }).catch(() => {
    console.log('[ASSET-CHECK-MONEY-L06] Could not verify image assets — network check failed');
  });
})();

export default moneybusiness_explorer_l06_screens;
