// ============================================================
// COREVERSE EXPLORERS — Money & Business · Lesson 9
// "Marketing: How Businesses Find Customers"
// Ages 6–8 | Guide: Ace | ExplorerLessonPlayer format
// ============================================================

const moneybusiness_explorer_l09_screens = {
  ageBand:   'explorers',
  subjectId: 'money',
  guide:     'ace',
  lessons: [
    {
      id:        'mb-6-8-09',
      title:     `Marketing: How Businesses Find Customers`,
      duration:  12,
      xpReward:  50,
      badge:     'marketing-mind',
      badgeName: `Marketing Mind`,
      screens: [
        // PHASE 1 — WELCOME
        {
          type:      'welcome',
          guideText: `You could make the most amazing product in the world. The best lemonade ever created. But if nobody knows it exists, you won't sell a single one. That's why marketing exists. And it's way more interesting than it sounds.`,
        },

        // PHASE 2 — MAGAZINE STORY (4 sections)
        {
          type:          'magazine',
          section:       1,
          totalSections: 4,
          headline:      `What Is Marketing?`,
          paragraphs: [
            `Marketing is everything a business does to attract customers. Advertising is part of marketing — but so is your logo, your packaging, your pricing, your social media presence, your store's design, and the way your employees talk to customers. Every single time a business makes an impression on you, that's marketing happening.`,
            `Think about the last time you walked past a shop and felt drawn inside, or saw packaging so beautiful you picked something up just to look at it, or heard a jingle you couldn't get out of your head. None of that happened by accident. Every element was designed deliberately to get and keep your attention.`,
            `Businesses that understand marketing don't just sell products — they create experiences, feelings, and identities. A customer who buys a product isn't just purchasing something functional; they're choosing how they want to see themselves. Marketing makes that connection. The best marketing doesn't feel like marketing at all.`,
          ],
          image:        '/explorer-assets/money-business/l09-magazine-marketing.png',
          imageCaption: `Marketing — everything a business does to attract customers, from logos to packaging to social media`,
          vocab: [
            { word: `marketing`,    definition: `All the activities a business uses to attract and keep customers — including advertising, branding, pricing, packaging, and any other way the business makes an impression.`,               audioPrompt: `Marketing — all the activities a business uses to attract and keep customers, including advertising, branding, pricing, packaging, and any other way the business makes an impression.` },
            { word: `branding`,     definition: `The overall identity of a business — its name, logo, colours, tone, and the feeling it creates in customers' minds. Strong branding makes a business instantly recognisable.`, audioPrompt: `Branding — the overall identity of a business, including its name, logo, colours, tone, and the feeling it creates in customers' minds. Strong branding makes a business instantly recognisable.` },
          ],
        },
        {
          type:          'magazine',
          section:       2,
          totalSections: 4,
          headline:      `Knowing Your Customer`,
          paragraphs: [
            `Great marketing starts with a deep understanding of WHO you're selling to. A company selling skateboards markets very differently than one selling baby shoes — different age, different needs, different fears, different dreams. Trying to market to everyone at once is one of the most common mistakes new businesses make. Marketing that speaks to everyone speaks to no one.`,
            `Marketers call this a target audience — the specific group of people most likely to want what you're selling. Identifying your target audience means asking questions: How old are they? What do they care about? What problem are they trying to solve? Where do they spend time? What do they fear? What do they dream about? The more clearly you answer these questions, the more precisely you can reach the right people.`,
            `Understanding your customer also means understanding what they don't like. A great marketing message avoids the things that irritate your audience and leans into the things that excite them. This requires listening — reading reviews, talking to customers, watching how people actually use your product. The businesses that listen most carefully to their customers build the most loyal relationships.`,
          ],
          image:        '/explorer-assets/money-business/l09-magazine-target.png',
          imageCaption: `Knowing your customer — defining your target audience precisely so marketing reaches the right people`,
          vocab: [
            { word: `target audience`, definition: `The specific group of people a business most wants to reach with its marketing — defined by age, interests, needs, location, or behaviour. Precise targeting makes marketing far more effective.`, audioPrompt: `Target audience — the specific group of people a business most wants to reach with its marketing. Defined by age, interests, needs, location, or behaviour. Precise targeting makes marketing far more effective.` },
            { word: `demographics`,    definition: `Statistical characteristics of a group of people — such as age, gender, income, location, and education. Businesses use demographics to identify and reach their target audience.`,                  audioPrompt: `Demographics — statistical characteristics of a group of people, such as age, gender, income, location, and education. Businesses use demographics to identify and reach their target audience.` },
          ],
        },
        {
          type:          'magazine',
          section:       3,
          totalSections: 4,
          headline:      `The Message`,
          paragraphs: [
            `The most powerful marketing messages answer one question from the customer's perspective: "What's in it for me?" Not "How good is this product?" — but "How does this make MY life better?" Customers don't buy features; they buy outcomes. They buy how a product makes them feel, what it helps them do, and who it helps them become.`,
            `Consider how sporting brands communicate. They don't lead with technical specifications — thread count, sole density, cushioning composition. They lead with the customer's aspiration: become the athlete you've always wanted to be. The product is the vehicle. The customer's dream is the message. This shift in perspective — from "here's what we make" to "here's who you could become" — is the heart of great marketing.`,
            `The best marketing messages are short, clear, and emotionally resonant. They stick in memory, they create feeling, and they make the customer see themselves in the story. A long list of features rarely does any of these things. A single, true, well-crafted sentence about what the customer gains can define a brand for decades.`,
          ],
          image:        '/explorer-assets/money-business/l09-magazine-message.png',
          imageCaption: `The marketing message — answering "what's in it for me?" by selling the customer's dream, not product features`,
          vocab: [
            { word: `value proposition`, definition: `The clear statement of what a customer gains from choosing your product — it answers "what's in it for me?" and is the core of any effective marketing message.`,             audioPrompt: `Value proposition — the clear statement of what a customer gains from choosing your product. It answers "what's in it for me?" and is the core of any effective marketing message.` },
            { word: `aspiration`,        definition: `A strong desire to achieve or become something — great marketing connects a product to the customer's aspirations, showing how the product helps them become who they want to be.`, audioPrompt: `Aspiration — a strong desire to achieve or become something. Great marketing connects a product to the customer's aspirations, showing how the product helps them become who they want to be.` },
          ],
        },
        {
          type:          'magazine',
          section:       4,
          totalSections: 4,
          headline:      `Where Marketing Lives Today`,
          paragraphs: [
            `Marketing used to mean TV commercials, radio spots, newspaper ads, and billboards. Reaching a large audience required enormous spending — only large companies could afford it. That world still exists, but the internet has created an entirely new set of channels that have fundamentally changed what's possible.`,
            `Today, marketing also lives on YouTube, TikTok, Instagram, podcasts, email newsletters, and influencer partnerships. A creator with a following of 50,000 people on social media can reach a highly specific, engaged audience in a way that a traditional billboard never could. And the cost is a fraction of what a TV ad would require.`,
            `This shift has transformed opportunities for small businesses. A single well-made video, a clever social post, or a genuine review from a trusted voice can introduce a product to millions of people overnight. The businesses that thrive today understand both the traditional fundamentals — know your customer, craft your message — and the new tools available to deliver that message at scale.`,
          ],
          image:        '/explorer-assets/money-business/l09-magazine-digital-marketing.png',
          imageCaption: `Where marketing lives today — social media, influencers, and digital channels alongside traditional advertising`,
          vocab: [
            { word: `influencer`,         definition: `A person with a large, engaged following on social media who can affect the buying decisions of their audience — brands partner with influencers to reach their target audience authentically.`, audioPrompt: `Influencer — a person with a large, engaged following on social media who can affect the buying decisions of their audience. Brands partner with influencers to reach their target audience authentically.` },
            { word: `digital marketing`,  definition: `Marketing conducted through digital channels — websites, social media, email, apps, and online advertising. Digital marketing allows businesses of any size to reach specific audiences worldwide.`,    audioPrompt: `Digital marketing — marketing conducted through digital channels, including websites, social media, email, apps, and online advertising. Digital marketing allows businesses of any size to reach specific audiences worldwide.` },
          ],
        },

        // PHASE 3 — INTERACTIVE
        {
          type:          'interactive',
          activityType:  'drag-match',
          instruction:   `Tap each card, then tap whether this marketing message focuses on product features or the customer's dream!`,
          guideText:     `Great marketing focuses on the customer's dream — who they want to become, how they want to feel, what they want to achieve. Weaker marketing just lists product features. Can you tell the difference? Sort each message into the right category.`,
          columnHeaders: [`The Marketing Message`, `What's the Focus?`],
          items: [
            { image: 'l09-game-shoe-features.png',  label: `Our running shoes use 12-layer sole technology and aerospace-grade cushioning foam.`,          correctMatch: 'features', objectPosition: 'center 50%', matchPhrase: `Product features! This message lists technical details about the shoe — 12-layer sole, aerospace foam. These are features. Features tell you what the product IS. They're useful, but they don't create emotional connection. A customer who doesn't know what aerospace-grade foam means won't feel anything when they read this.` },
            { image: 'l09-game-shoe-dream.png',     label: `Become the athlete you've always wanted to be — every step is your moment.`,                    correctMatch: 'dream',    objectPosition: 'center 50%', matchPhrase: `Customer's dream! This message isn't about the shoe at all — it's about YOU and who you can become. It speaks to aspiration, to identity, to the feeling of stepping into your best self. The customer sees themselves in it. That emotional connection is far more powerful than any technical specification.` },
            { image: 'l09-game-blender-specs.png',  label: `Our blender has 12 speeds, a titanium blade, and a 2,000-watt motor.`,                         correctMatch: 'features', objectPosition: 'center 50%', matchPhrase: `Product features! Twelve speeds, titanium blade, 2,000 watts — these are specifications. They describe what the blender CAN do, but they don't tell the customer how it changes their life. A stronger message might be: "Make a restaurant-quality smoothie in 30 seconds, every morning." Same product. Completely different feeling.` },
            { image: 'l09-game-energy-dream.png',   label: `Unstoppable energy that lets you take on anything.`,                                             correctMatch: 'dream',    objectPosition: 'center 50%', matchPhrase: `Customer's dream! This message sells a feeling — being unstoppable, ready for anything. It doesn't mention caffeine content, can size, or ingredients. It speaks directly to how the customer wants to feel. That emotional promise is the message. When marketing makes you feel something, it's working exactly as intended.` },
          ],
          buckets: [
            { id: 'features', label: `🔧 Product Features`,      color: '#60A5FA' },
            { id: 'dream',    label: `✨ Customer's Dream`,       color: '#34D399' },
          ],
        },

        // PHASE 4 — MASTERY QUIZ
        {
          type:      'quiz',
          guideText: `Quiz time, {name}! Let's see what you've learned about marketing. Answer all 6 questions to earn your Marketing Mind badge!`,
          questions: [
            {
              format:       'multiple-choice',
              question:     `What is marketing?`,
              options:      [`Just TV commercials and billboards`, `Everything a business does to attract customers`, `The price tag on a product`, `The process of making a product`],
              correctIndex: 1,
            },
            {
              format:       'multiple-choice',
              question:     `What is a target audience?`,
              options:      [`Every single person on earth`, `People who have already bought the product`, `The specific group of people a business most wants to reach`, `The business's own employees`],
              correctIndex: 2,
            },
            {
              format:       'multiple-choice',
              question:     `What question does great marketing answer for the customer?`,
              options:      [`How much does this cost?`, `What's in it for me?`, `Where can I buy this?`, `Who made this product?`],
              correctIndex: 1,
            },
            {
              format:        'true-false',
              question:      `Great marketing focuses on the customer's dream, not just the features of the product.`,
              correctAnswer: true,
            },
            {
              format:       'fill-blank',
              question:     `The specific group of people a business most wants to reach with its marketing is called the ___ audience.`,
              options:      [`target`, `general`, `social`, `loyal`],
              correctIndex: 0,
            },
            {
              format:       'multiple-choice',
              question:     `How did the internet change marketing for small businesses?`,
              options:      [`It made marketing illegal for small businesses without large budgets`, `It allowed small businesses to reach large audiences without spending millions on advertising`, `It replaced all forms of advertising with social media only`, `It made marketing more expensive for every type of business`],
              correctIndex: 1,
            },
          ],
        },

        // PHASE 5 — REAL-WORLD CONNECTION
        {
          type:            'real-world',
          guideText:       `Pick one brand you use every day and find one of their ads or posts — ask: who is their target audience, and what dream are they selling?`,
          familyAdventure: `Watch TV or browse online together for 15 minutes and count the marketing messages you encounter. For each one, identify: Who is the target audience? What feeling are they trying to create? Does the message focus on product features or the customer's dream? Rate each from 1–10 on how effective you think it is — and explain your reasoning.`,
          creativePrompt:  `Pick your three favourite brands or products. For each one, find one example of their marketing — an ad, a social media post, their logo, or their slogan. Write down: Who is their target audience? What is their message? Does it focus on features or the customer's dream? Now try writing your own marketing message for one of them — one sentence, focused on the customer's dream. Which version do you prefer?`,
        },

        // PHASE 6 — CELEBRATION
        {
          type:      'celebration',
          xpEarned:  50,
          badge:     'marketing-mind',
          badgeName: `Marketing Mind`,
          message:   `Excellent work, {name}! You now know that great marketing isn't about a product's features — it's about the customer's dream. The businesses that understand this build the most loyal customers. Ace is so proud to share this knowledge with you.`,
        },
      ],
    },
  ],
};

// Log on module load — confirms lesson wired correctly + verifies image assets at runtime
(() => {
  const l    = moneybusiness_explorer_l09_screens.lessons[0];
  const mags = l.screens.filter(s => s.type === 'magazine').length;
  const game = l.screens.find(s => s.type === 'interactive')?.items?.length || 0;
  const quiz = l.screens.find(s => s.type === 'quiz')?.questions?.length || 0;
  console.log(`[LESSON-MONEY-L09] Loaded: "Marketing: How Businesses Find Customers" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
  Promise.all([
    fetch('/explorer-assets/money-business/l09-magazine-marketing.png',        { method: 'HEAD' }),
    fetch('/explorer-assets/money-business/l09-magazine-target.png',           { method: 'HEAD' }),
    fetch('/explorer-assets/money-business/l09-magazine-message.png',          { method: 'HEAD' }),
    fetch('/explorer-assets/money-business/l09-magazine-digital-marketing.png', { method: 'HEAD' }),
  ]).then(([r1, r2, r3, r4]) => {
    console.log(`[ASSET-CHECK-MONEY-L09] marketing: ${r1.ok}, target: ${r2.ok}, message: ${r3.ok}, digital-marketing: ${r4.ok}`);
  }).catch(() => {
    console.log('[ASSET-CHECK-MONEY-L09] Could not verify image assets — network check failed');
  });
})();

export default moneybusiness_explorer_l09_screens;
