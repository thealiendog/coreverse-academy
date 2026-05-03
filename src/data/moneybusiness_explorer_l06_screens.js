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

        // PHASE 2 — MAGAZINE STORY (4 sections)
        {
          type:          'magazine',
          section:       1,
          totalSections: 4,
          headline:      `What Is a Product?`,
          paragraphs: [
            `A product is a thing — something you can hold, use, eat, or download. Physical products include food, clothes, toys, and cars. Digital products include apps, songs, e-books, and video games. A key feature of products is that they can be made once and sold over and over again — and that's what makes them so powerful for businesses.`,
            `When you buy a product, you take ownership of it. You bring it home, use it, or keep it. The business that made it doesn't need to do anything extra for each customer who buys it. A musician who records one song can sell that song to millions of people without recording it again — that's the power of a product.`,
            `Physical products require materials, manufacturing, and shipping. Digital products require none of those things after they're created. A video game made once can be sold instantly to anyone anywhere in the world with a download. This is why digital products have transformed the economy — the cost of selling a second copy is almost zero.`,
          ],
          image:        '/explorer-assets/money-business/l06-magazine-products.png',
          imageCaption: `Products — physical and digital things made once and sold repeatedly, to as many people as want them`,
          vocab: [
            { word: `physical product`, definition: `A tangible item you can hold, touch, and take home — like food, clothing, toys, or furniture. Physical products require materials and manufacturing to produce.`,                     audioPrompt: `Physical product — a tangible item you can hold, touch, and take home, like food, clothing, toys, or furniture. Physical products require materials and manufacturing to produce.` },
            { word: `digital product`,  definition: `A product that exists in digital form and is delivered electronically — apps, songs, e-books, and video games are digital products that can be sold to unlimited customers instantly.`, audioPrompt: `Digital product — a product that exists in digital form and is delivered electronically. Apps, songs, e-books, and video games are digital products that can be sold to unlimited customers instantly.` },
          ],
        },
        {
          type:          'magazine',
          section:       2,
          totalSections: 4,
          headline:      `What Is a Service?`,
          paragraphs: [
            `A service is work done for someone else. Haircuts, tutoring, dog walking, house cleaning, dentistry, legal advice — all services. Every time you pay someone to do something for you, you're buying a service. The business isn't selling you a thing to take home; it's selling you time, skill, and effort applied directly to your problem.`,
            `Services are personal. A dentist can only clean one person's teeth at a time. A piano teacher can only teach one student at a time. A plumber can only fix one set of pipes at a time. This is what makes services valuable — and what makes them hard to grow beyond a certain point without hiring more people.`,
            `The quality of a service depends heavily on the person providing it. This is why reputation matters so much in service businesses. A great hairstylist builds a loyal following. A trusted tutor becomes irreplaceable. When the service is excellent, customers return again and again — and they tell their friends.`,
          ],
          image:        '/explorer-assets/money-business/l06-magazine-services.png',
          imageCaption: `Services — work done for someone else, personal and time-based, valued for skill and reputation`,
          vocab: [
            { word: `service`,    definition: `Work done for someone else in exchange for payment — services include haircuts, tutoring, plumbing, medical care, and any task where someone applies skill and time to your problem.`, audioPrompt: `Service — work done for someone else in exchange for payment. Services include haircuts, tutoring, plumbing, medical care, and any task where someone applies skill and time to your problem.` },
            { word: `reputation`, definition: `The opinion others have of a person or business based on past experience — in service businesses, a strong reputation is one of the most valuable assets because it brings repeat customers.`, audioPrompt: `Reputation — the opinion others have of a person or business based on past experience. In service businesses, a strong reputation is one of the most valuable assets because it brings repeat customers.` },
          ],
        },
        {
          type:          'magazine',
          section:       3,
          totalSections: 4,
          headline:      `When Businesses Combine Both`,
          paragraphs: [
            `Smart businesses often combine products and services, creating more value for customers and more revenue for themselves. A restaurant sells food — that's a product — but it also sells cooking, serving, and the dining experience — those are services. The combination is what makes dining out feel different from just buying a meal at a shop.`,
            `Technology companies are especially good at this. A phone manufacturer sells a physical device — a product — and then offers cloud storage, technical support, software updates, and a streaming music platform — all services. Once a customer buys the product, the services keep them connected to the company for years.`,
            `When you bundle products and services together, customers have more reasons to stay loyal. If you only sell a product, a competitor can undercut your price. But if you also provide ongoing service, support, and expertise, the relationship becomes much harder to replace. The combination creates what business people call a "moat" — a protective barrier around your customers.`,
          ],
          image:        '/explorer-assets/money-business/l06-magazine-both.png',
          imageCaption: `Combining both — bundling products with services builds customer loyalty and ongoing revenue`,
          vocab: [
            { word: `bundle`,  definition: `Combining two or more products or services into a single offering — bundling gives customers more value and gives businesses more reasons to keep customers coming back.`,                         audioPrompt: `Bundle — combining two or more products or services into a single offering. Bundling gives customers more value and gives businesses more reasons to keep customers coming back.` },
            { word: `loyalty`, definition: `The tendency of a customer to keep buying from the same business over time — earned through quality, trust, and value. Loyal customers are the most profitable customers a business can have.`, audioPrompt: `Loyalty — the tendency of a customer to keep buying from the same business over time. Earned through quality, trust, and value. Loyal customers are the most profitable customers a business can have.` },
          ],
        },
        {
          type:          'magazine',
          section:       4,
          totalSections: 4,
          headline:      `Which Is Better to Sell?`,
          paragraphs: [
            `Products and services each have real advantages. Products can scale — you can sell thousands of copies of the same thing without working thousands of extra hours. A digital product, in particular, can generate revenue while you sleep. The same video game sells to the millionth customer exactly the same way it sold to the first.`,
            `Services, by contrast, are limited by time. A single tutor can only work so many hours in a day. But services often command higher prices and deeper trust. A skilled surgeon, a great lawyer, an expert coach — these professionals earn enormous fees because their expertise is hard to replace. Services scale through reputation even when they can't scale through volume.`,
            `Many successful entrepreneurs follow a strategic path: start with services to earn money quickly, build expertise and a client base, then create products based on what they've learned. A fitness trainer teaches classes (service), then creates an online workout programme (product). A consultant gives advice (service), then writes a book (product). The two work together — each making the other more valuable.`,
          ],
          image:        '/explorer-assets/money-business/l06-magazine-scale.png',
          imageCaption: `Scaling products vs services — products reach unlimited customers; services build deep trust and expertise`,
          vocab: [
            { word: `scale`,    definition: `The ability to grow revenue without a proportional increase in time or cost — products scale easily; services scale slowly because they depend on the hours of the person providing them.`,        audioPrompt: `Scale — the ability to grow revenue without a proportional increase in time or cost. Products scale easily; services scale slowly because they depend on the hours of the person providing them.` },
            { word: `passive income`, definition: `Money earned without actively working for each dollar — a product sold while you sleep is passive income. Building passive income streams is a goal of many entrepreneurs.`, audioPrompt: `Passive income — money earned without actively working for each dollar. A product sold while you sleep is passive income. Building passive income streams is a goal of many entrepreneurs.` },
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
            { image: 'l06-game-book.png',            label: `A printed book you buy at a bookstore and take home to own and read.`,                              correctMatch: 'physical', objectPosition: 'center 50%', matchPhrase: `Physical product! A printed book is something you can hold, carry, and keep on a shelf. It's made from materials — paper, ink, a cover — manufactured, and shipped to you. Every copy is a physical object. Physical products can be made in large quantities, but each copy costs money to produce.` },
            { image: 'l06-game-streaming.png',       label: `A music streaming subscription you access on any device, anywhere, at any time.`,                  correctMatch: 'digital',  objectPosition: 'center 50%', matchPhrase: `Digital product! A streaming subscription gives you access to millions of songs stored on servers — there's nothing physical to hold. The company created the platform once and sells access to it repeatedly. Every new subscriber adds almost pure profit because there's no manufacturing cost for a digital copy.` },
            { image: 'l06-game-personal-trainer.png', label: `A personal trainer who exercises with you in person and designs your workouts each week.`,        correctMatch: 'service',  objectPosition: 'center 50%', matchPhrase: `Service! A personal trainer does work for you — they plan, coach, and motivate. You don't take a product home; you benefit from their skill and time. This is a classic service: personal, skill-based, and limited by how many clients the trainer can work with in a day.` },
            { image: 'l06-game-restaurant.png',      label: `A restaurant that prepares hot meals and brings them to your table with full table service.`,       correctMatch: 'both',     objectPosition: 'center 50%', matchPhrase: `Both! A restaurant combines products and services seamlessly. The food is a physical product — made from ingredients, prepared, and delivered to you. But the cooking, serving, atmosphere, and hospitality are all services. This combination is why eating at a restaurant feels different from just buying the same food in a shop.` },
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
    fetch('/explorer-assets/money-business/l06-magazine-products.png', { method: 'HEAD' }),
    fetch('/explorer-assets/money-business/l06-magazine-services.png', { method: 'HEAD' }),
    fetch('/explorer-assets/money-business/l06-magazine-both.png',     { method: 'HEAD' }),
    fetch('/explorer-assets/money-business/l06-magazine-scale.png',    { method: 'HEAD' }),
  ]).then(([r1, r2, r3, r4]) => {
    console.log(`[ASSET-CHECK-MONEY-L06] products: ${r1.ok}, services: ${r2.ok}, both: ${r3.ok}, scale: ${r4.ok}`);
  }).catch(() => {
    console.log('[ASSET-CHECK-MONEY-L06] Could not verify image assets — network check failed');
  });
})();

export default moneybusiness_explorer_l06_screens;
