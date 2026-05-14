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

        // PHASE 2 — MAGAZINE STORY (6 sections)
        {
          type:          'magazine',
          section:       1,
          totalSections: 6,
          headline:      `What Is Marketing?`,
          paragraphs: [
            `Marketing is everything a business does to attract customers. Advertising is part of it — but so is your logo, your packaging, your pricing, your social media, and the way your employees talk to people.`,
            `Every time a business makes an impression on you — a jingle, a beautiful package, a storefront you're drawn into — that's marketing happening. None of it is by accident.`,
          ],
          image:        '/explorer-assets/money-business/l09-s1-marketing-channels.png',
          imageCaption: `Marketing is every signal a business sends — from logos to packaging to social media`,
          vocab: [
            { word: 'marketing', definition: `All the activities a business uses to attract and keep customers — including advertising, branding, pricing, packaging, and any other impression it makes.`, audioPrompt: `Marketing — all the activities a business uses to attract and keep customers, including advertising, branding, pricing, packaging, and any other impression it makes.` },
            { word: 'branding',  definition: `The overall identity of a business — its name, logo, colours, and the feeling it creates in customers' minds. Strong branding makes a business instantly recognisable.`, audioPrompt: `Branding — the overall identity of a business, including its name, logo, colours, and the feeling it creates in customers' minds. Strong branding makes a business instantly recognisable.` },
          ],
        },
        {
          type:          'magazine',
          section:       2,
          totalSections: 6,
          headline:      `Know Your Customer`,
          paragraphs: [
            `Great marketing starts with understanding WHO you're selling to. A company selling skateboards markets very differently than one selling baby shoes. Marketing that tries to speak to everyone speaks to no one.`,
            `Marketers define a target audience — the specific group most likely to want what you're selling. The more clearly you know them, the more precisely you can reach them.`,
          ],
          image:        '/explorer-assets/money-business/l09-s2-target-audience.png',
          imageCaption: `Know your customer — define your target audience so your message reaches the right people`,
          vocab: [
            { word: 'target audience', definition: `The specific group of people a business most wants to reach — defined by age, interests, needs, or behaviour. Precise targeting makes marketing far more effective.`, audioPrompt: `Target audience — the specific group of people a business most wants to reach. Defined by age, interests, needs, or behaviour. Precise targeting makes marketing far more effective.` },
            { word: 'demographics',    definition: `Statistical characteristics of a group — such as age, gender, income, and location. Businesses use demographics to identify and reach their target audience.`, audioPrompt: `Demographics — statistical characteristics of a group, such as age, gender, income, and location. Businesses use demographics to identify and reach their target audience.` },
          ],
        },
        {
          type:          'magazine',
          section:       3,
          totalSections: 6,
          headline:      `What's In It For Me?`,
          paragraphs: [
            `The most powerful marketing answers one question from the customer's perspective: "What's in it for me?" Not "How good is this product?" — but "How does this make MY life better?"`,
            `Customers don't buy features; they buy outcomes — how a product makes them feel, what it helps them do, who it helps them become. That shift is the heart of great marketing.`,
          ],
          image:        '/explorer-assets/money-business/l09-s3-customer-perspective.png',
          imageCaption: `Great marketing answers "what's in it for me?" — always from the customer's point of view`,
          vocab: [
            { word: 'perspective', definition: `A particular way of seeing or thinking about something. Marketing works best when it's written from the customer's perspective, not the business's.`, audioPrompt: `Perspective — a particular way of seeing or thinking about something. Marketing works best when it's written from the customer's perspective, not the business's.` },
            { word: 'outcome',     definition: `The result a customer gets from using a product. Great marketing sells the outcome — how life improves — not just the product itself.`, audioPrompt: `Outcome — the result a customer gets from using a product. Great marketing sells the outcome, how life improves, not just the product itself.` },
          ],
        },
        {
          type:          'magazine',
          section:       4,
          totalSections: 6,
          headline:      `Sell the Dream, Not the Specs`,
          paragraphs: [
            `Sporting brands don't lead with thread counts and sole density. They lead with aspiration: become the athlete you've always wanted to be. The product is the vehicle. The customer's dream is the message.`,
            `A short, emotionally resonant sentence about what the customer gains can define a brand for decades. A long list of features rarely sticks in anyone's memory.`,
          ],
          image:        '/explorer-assets/money-business/l09-s4-dream-vs-specs.png',
          imageCaption: `Sell the dream, not the specs — customers remember how something made them feel`,
          vocab: [
            { word: 'features',    definition: `The specific characteristics of a product — its size, speed, materials. Features describe what a product IS, but don't always explain why it matters.`, audioPrompt: `Features — the specific characteristics of a product, such as its size, speed, or materials. Features describe what a product is, but don't always explain why it matters.` },
            { word: 'aspiration',  definition: `A strong desire to achieve or become something. Great marketing connects a product to the customer's aspirations — showing how it helps them become who they want to be.`, audioPrompt: `Aspiration — a strong desire to achieve or become something. Great marketing connects a product to the customer's aspirations, showing how it helps them become who they want to be.` },
          ],
        },
        {
          type:          'magazine',
          section:       5,
          totalSections: 6,
          headline:      `From TV to TikTok`,
          paragraphs: [
            `Marketing used to mean TV commercials, radio spots, and billboards. Reaching a large audience required enormous spending — only large companies could afford it.`,
            `Today, marketing also lives on YouTube, TikTok, Instagram, podcasts, and email. A creator with 50,000 followers can reach a highly specific, engaged audience at a fraction of the traditional cost.`,
          ],
          image:        '/explorer-assets/money-business/l09-s5-marketing-evolution.png',
          imageCaption: `From TV to TikTok — the channels have multiplied, but the goal is the same: reach the right people`,
          vocab: [
            { word: 'advertising', definition: `Paid messages designed to promote a product or business. Advertising is one part of marketing — it can run on TV, radio, social media, or anywhere an audience is.`, audioPrompt: `Advertising — paid messages designed to promote a product or business. Advertising is one part of marketing, and it can run on TV, radio, social media, or anywhere an audience is.` },
            { word: 'channel',     definition: `The medium or platform where a marketing message is delivered — TV, Instagram, email, podcast. Choosing the right channel means reaching your audience where they already are.`, audioPrompt: `Channel — the medium or platform where a marketing message is delivered, such as TV, Instagram, email, or podcast. Choosing the right channel means reaching your audience where they already are.` },
          ],
        },
        {
          type:          'magazine',
          section:       6,
          totalSections: 6,
          headline:      `Small Business, Big Reach`,
          paragraphs: [
            `A single well-made video, a clever social post, or a genuine review from a trusted voice can introduce a product to millions of people overnight. Small businesses can now compete globally.`,
            `The businesses that thrive today understand both the fundamentals — know your customer, craft your message — and the new digital tools that deliver that message at scale.`,
          ],
          image:        '/explorer-assets/money-business/l09-s6-small-business-reach.png',
          imageCaption: `Small business, big reach — digital tools let any business find a global audience`,
          vocab: [
            { word: 'influencer', definition: `A person with a large, engaged following on social media who can affect the buying decisions of their audience. Brands partner with influencers to reach their target audience authentically.`, audioPrompt: `Influencer — a person with a large, engaged following on social media who can affect the buying decisions of their audience. Brands partner with influencers to reach their target audience authentically.` },
            { word: 'viral',      definition: `Content that spreads rapidly online because many people share it. A viral post or video can reach millions without any advertising spend.`, audioPrompt: `Viral — content that spreads rapidly online because many people share it. A viral post or video can reach millions without any advertising spend.` },
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
    fetch('/explorer-assets/money-business/l09-s1-marketing-channels.png', { method: 'HEAD' }),
    fetch('/explorer-assets/money-business/l09-s2-target-audience.png',    { method: 'HEAD' }),
    fetch('/explorer-assets/money-business/l09-s3-customer-perspective.png', { method: 'HEAD' }),
    fetch('/explorer-assets/money-business/l09-s4-dream-vs-specs.png',     { method: 'HEAD' }),
    fetch('/explorer-assets/money-business/l09-s5-marketing-evolution.png', { method: 'HEAD' }),
    fetch('/explorer-assets/money-business/l09-s6-small-business-reach.png', { method: 'HEAD' }),
  ]).then(([r1, r2, r3, r4, r5, r6]) => {
    console.log(`[ASSET-CHECK-MONEY-L09] marketing-channels: ${r1.ok}, target-audience: ${r2.ok}, customer-perspective: ${r3.ok}, dream-vs-specs: ${r4.ok}, marketing-evolution: ${r5.ok}, small-business-reach: ${r6.ok}`);
  }).catch(() => {
    console.log('[ASSET-CHECK-MONEY-L09] Could not verify image assets — network check failed');
  });
})();

export default moneybusiness_explorer_l09_screens;
