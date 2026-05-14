// ============================================================
// COREVERSE EXPLORERS — Money & Business · Lesson 17
// "Making a Simple Business Plan"
// Ages 6–8 | Guide: Ace | ExplorerLessonPlayer format
// ============================================================

const moneybusiness_explorer_l17_screens = {
  ageBand:   'explorers',
  subjectId: 'money',
  guide:     'ace',
  lessons: [
    {
      id:        'mb-6-8-17',
      title:     `Making a Simple Business Plan`,
      duration:  12,
      xpReward:  50,
      badge:     'planner',
      badgeName: `Planner`,
      screens: [
        // PHASE 1 — WELCOME
        {
          type:      'welcome',
          guideText: `A business plan sounds like something only serious adults in suits write. But the truth is, a business plan is just answering a few key questions about your business idea — before you spend any time or money.`,
        },

        // PHASE 2 — MAGAZINE STORY (6 sections)
        {
          type:          'magazine',
          section:       1,
          totalSections: 6,
          headline:      'What\'s a Business Plan?',
          paragraphs: [
            'A business plan isn\'t a suit-and-tie document. It\'s just answering the key questions about your idea — before you spend any money.',
            'Writing the answers down works differently than just thinking about them. Gaps you didn\'t know existed show up on paper.',
          ],
          image:        '/explorer-assets/money-business/l17-s1-plan-document.png',
          imageCaption: 'A plan isn\'t about looking professional. It\'s about catching weaknesses before they cost you money.',
          vocab: [
            { word: 'business plan', definition: 'A document that answers the key questions about a business idea before you start. Reveals gaps while they\'re still cheap to fix.', audioPrompt: 'Business plan — a document that answers the key questions about a business idea before you start. Reveals gaps while they\'re still cheap to fix.' },
            { word: 'viable',        definition: 'Capable of working or succeeding. A business plan tests whether an idea is actually viable — before you invest in it.', audioPrompt: 'Viable — capable of working or succeeding. A business plan tests whether an idea is actually viable, before you invest in it.' },
          ],
        },
        {
          type:          'magazine',
          section:       2,
          totalSections: 6,
          headline:      'Six Key Questions',
          paragraphs: [
            'A simple business plan answers six questions.',
            'What do you sell? Who buys it? Who else is doing this? How will customers find you? What does it all cost? And what are your first three steps?',
          ],
          image:        '/explorer-assets/money-business/l17-s2-six-questions.png',
          imageCaption: 'Six questions. Answer all six clearly, and you have a plan that can guide a real business.',
          vocab: [
            { word: 'structure', definition: 'An organized way of arranging things. Every good business plan has structure — the same six questions in the same order.', audioPrompt: 'Structure — an organized way of arranging things. Every good business plan has structure: the same six questions in the same order.' },
            { word: 'clarity',   definition: 'Being clear and easy to understand. Clarity is what makes a plan useful — confusion makes a plan worthless.', audioPrompt: 'Clarity — being clear and easy to understand. Clarity is what makes a plan useful; confusion makes a plan worthless.' },
          ],
        },
        {
          type:          'magazine',
          section:       3,
          totalSections: 6,
          headline:      'The Idea and the Market',
          paragraphs: [
            'First two questions: what do you sell, and who buys it?',
            'A clear answer to both is the foundation of the whole plan. If you can\'t explain those in two sentences each, you\'re not ready to start.',
          ],
          image:        '/explorer-assets/money-business/l17-s3-offering-and-market.png',
          imageCaption: 'The offering and the audience. Get these two crystal-clear before anything else.',
          vocab: [
            { word: 'offering',      definition: 'What you\'re selling — your product or service. The clearer your offering, the easier it is to explain.', audioPrompt: 'Offering — what you\'re selling: your product or service. The clearer your offering, the easier it is to explain.' },
            { word: 'target market', definition: 'The specific group of people most likely to buy your offering. Defined by their age, interests, habits, and needs.', audioPrompt: 'Target market — the specific group of people most likely to buy your offering. Defined by their age, interests, habits, and needs.' },
          ],
        },
        {
          type:          'magazine',
          section:       4,
          totalSections: 6,
          headline:      'Competition and Money',
          paragraphs: [
            'Next questions: Who already solves this problem, and what makes you different? Then: how will customers discover you?',
            'Finally, the numbers. How much to start? What\'s your price? How many sales to break even? A plan without numbers is just a wish.',
          ],
          image:        '/explorer-assets/money-business/l17-s4-competition-money.png',
          imageCaption: 'The harder questions. Competitors, marketing, and money — where ideas meet reality.',
          vocab: [
            { word: 'competition', definition: 'Other businesses solving the same problem you are. Understanding competition tells you what makes you different.', audioPrompt: 'Competition — other businesses solving the same problem you are. Understanding competition tells you what makes you different.' },
            { word: 'break-even',  definition: 'The point where revenue equals costs. Knowing your break-even tells you exactly what success looks like.', audioPrompt: 'Break-even — the point where revenue equals costs. Knowing your break-even tells you exactly what success looks like.' },
          ],
        },
        {
          type:          'magazine',
          section:       5,
          totalSections: 6,
          headline:      'Test Before You Invest',
          paragraphs: [
            'Before spending real money, test the idea. Make 5 of your product and try to sell them. Offer your service to 3 strangers.',
            'Not asking friends if it sounds cool — real people, paying real money. That\'s the only data that matters.',
          ],
          image:        '/explorer-assets/money-business/l17-s5-test-first.png',
          imageCaption: 'Friends will say nice things. Strangers paying money tell you the truth.',
          vocab: [
            { word: 'testing',    definition: 'Trying something small to see if it works before going big. Cheap, fast, and often saves you from a huge mistake.', audioPrompt: 'Testing — trying something small to see if it works before going big. Cheap, fast, and often saves you from a huge mistake.' },
            { word: 'validation', definition: 'Getting proof from real people that your idea actually works. Money paid is the strongest form of validation.', audioPrompt: 'Validation — getting proof from real people that your idea actually works. Money paid is the strongest form of validation.' },
          ],
        },
        {
          type:          'magazine',
          section:       6,
          totalSections: 6,
          headline:      'Keep It Simple, Keep It Living',
          paragraphs: [
            'A great plan can fit on one page. Long plans are usually a sign of unclear thinking.',
            'And the plan should KEEP changing. Update it as you learn. The plan that got you to customer one will look different from the one that gets you to customer 100.',
          ],
          image:        '/explorer-assets/money-business/l17-s6-living-plan.png',
          imageCaption: 'One page beats fifty. And a plan that keeps updating beats one that sits in a drawer.',
          vocab: [
            { word: 'concise', definition: 'Short and to the point. Clear thinking is concise thinking. Long plans usually hide confusion.', audioPrompt: 'Concise — short and to the point. Clear thinking is concise thinking. Long plans usually hide confusion.' },
            { word: 'iterate', definition: 'To repeat and improve. Good business plans iterate — they evolve as the business learns what works.', audioPrompt: 'Iterate — to repeat and improve. Good business plans iterate; they evolve as the business learns what works.' },
          ],
        },

        // PHASE 3 — INTERACTIVE
        {
          type:          'interactive',
          activityType:  'drag-match',
          instruction:   `Tap each planning question, then tap which section of the business plan it belongs in!`,
          guideText:     `A business plan is made up of distinct sections, each answering a different critical question. Match each question to the section of the plan where it belongs — and you'll understand the full structure of a business plan.`,
          columnHeaders: [`The Planning Question`, `Which Section?`],
          items: [
            { image: 'l17-game-what-am-i-selling.png',  label: `"What problem am I solving, and exactly what product or service am I selling to solve it?"`,                                                  correctMatch: 'business-idea',   objectPosition: 'center 50%', matchPhrase: `Business Idea! Every business plan starts here — a clear statement of the problem you're solving and the product or service you offer. If you can't write this in two sentences, the rest of the plan falls apart. Clarity about what you're building is the foundation everything else rests on.` },
            { image: 'l17-game-who-are-customers.png',  label: `"Who are my ideal customers, what do they care about, and where do they spend their time?"`,                                                 correctMatch: 'target-market',   objectPosition: 'center 50%', matchPhrase: `Target Market! Knowing exactly who you're selling to is the second piece of every business plan. A business that tries to reach everyone usually reaches no one. Defining your target market precisely — their age, habits, and problems — helps you design the right product and reach the right people.` },
            { image: 'l17-game-how-find-customers.png', label: `"How will I make potential customers aware that my business exists — through social media, word of mouth, or other channels?"`,            correctMatch: 'marketing-plan',  objectPosition: 'center 50%', matchPhrase: `Marketing Plan! A great product that nobody knows about is a business nobody buys from. The marketing plan answers how people will discover you. It doesn't have to be expensive — word of mouth, a strong social presence, or a clever local campaign can be as powerful as paid advertising for an early business.` },
            { image: 'l17-game-how-much-cost.png',      label: `"How much money do I need to start, what will I charge, and how long before the business makes a profit?"`,                                  correctMatch: 'financial-plan',  objectPosition: 'center 50%', matchPhrase: `Financial Plan! The financial plan is where ideas meet reality. How much does it cost to start? What price will you charge? How many sales do you need to break even? These numbers tell you if the business is viable before you spend a dollar. A plan without numbers is not a plan — it's a wish.` },
          ],
          buckets: [
            { id: 'business-idea',  label: `💡 Business Idea`,   color: '#60A5FA' },
            { id: 'target-market',  label: `🎯 Target Market`,   color: '#818CF8' },
            { id: 'marketing-plan', label: `📣 Marketing Plan`,  color: '#F59E0B' },
            { id: 'financial-plan', label: `💰 Financial Plan`,  color: '#34D399' },
          ],
        },

        // PHASE 4 — MASTERY QUIZ
        {
          type:      'quiz',
          guideText: `Quiz time, {name}! Let's see what you've learned about writing a business plan. Answer all 6 questions to earn your Planner badge!`,
          questions: [
            {
              format:       'multiple-choice',
              question:     `What is the main purpose of a business plan?`,
              options:      [`To impress investors with fancy writing`, `To think through every part of your idea and spot problems before they cost you money`, `To show the government your idea`, `To guarantee your business will succeed`],
              correctIndex: 1,
            },
            {
              format:       'multiple-choice',
              question:     `Why should you test your idea before spending money on it?`,
              options:      [`Because testing is free`, `To get real feedback and avoid building something nobody wants`, `Because it's required by law`, `To delay spending money as long as possible`],
              correctIndex: 1,
            },
            {
              format:       'multiple-choice',
              question:     `How long should a good simple business plan be?`,
              options:      [`At least 50 pages`, `Exactly 10 pages`, `As short as one page if it covers all the key questions`, `It must include charts and graphs`],
              correctIndex: 2,
            },
            {
              format:        'true-false',
              question:      `A good business plan can fit on a single page if it clearly answers all the key questions about your idea.`,
              correctAnswer: true,
            },
            {
              format:       'fill-blank',
              question:     `A business plan should be treated as a living ___ — updated as you learn from testing and real-world feedback.`,
              options:      [`document`, `budget`, `slogan`, `logo`],
              correctIndex: 0,
            },
            {
              format:       'multiple-choice',
              question:     `Why is it important to include your competition in a business plan?`,
              options:      [`To copy exactly what they do`, `To understand what already exists and explain what makes your business different`, `Because the government requires it`, `To decide who to partner with`],
              correctIndex: 1,
            },
          ],
        },

        // PHASE 5 — REAL-WORLD CONNECTION
        {
          type:            'real-world',
          guideText:       `Pick your best business idea and try to write two sentences: one describing the problem you solve, one describing what you sell. If those two sentences are clear, you've started a business plan.`,
          familyAdventure: `Write your one-page business plan and pitch it to your family. Give yourself 5 minutes to present it. Your family's job is to ask tough questions: Who would really buy this? What if a big company did the same thing? How long until you make money? Treat it like a real investor meeting.`,
          creativePrompt:  `Write a one-page business plan for your best business idea. Cover: what you sell, who your customer is, what makes you different, how you'll find customers, what it costs to start, what you'll charge, and your first three action steps. Keep it to one page. Simple wins.`,
        },

        // PHASE 6 — CELEBRATION
        {
          type:      'celebration',
          xpEarned:  50,
          badge:     'planner',
          badgeName: `Planner`,
          message:   `Excellent work, {name}! You now know how to turn a business idea into a structured plan that reveals gaps before they cost you money. A one-page plan beats a thousand-page intention every time. Ace is so proud to share this knowledge with you.`,
        },
      ],
    },
  ],
};

// Log on module load — confirms lesson wired correctly + verifies image assets at runtime
(() => {
  const l    = moneybusiness_explorer_l17_screens.lessons[0];
  const mags = l.screens.filter(s => s.type === 'magazine').length;
  const game = l.screens.find(s => s.type === 'interactive')?.items?.length || 0;
  const quiz = l.screens.find(s => s.type === 'quiz')?.questions?.length || 0;
  console.log(`[LESSON-MONEY-L17] Loaded: "Making a Simple Business Plan" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
  Promise.all([
    fetch('/explorer-assets/money-business/l17-s1-plan-document.png',      { method: 'HEAD' }),
    fetch('/explorer-assets/money-business/l17-s2-six-questions.png',      { method: 'HEAD' }),
    fetch('/explorer-assets/money-business/l17-s3-offering-and-market.png', { method: 'HEAD' }),
    fetch('/explorer-assets/money-business/l17-s4-competition-money.png',  { method: 'HEAD' }),
    fetch('/explorer-assets/money-business/l17-s5-test-first.png',         { method: 'HEAD' }),
    fetch('/explorer-assets/money-business/l17-s6-living-plan.png',        { method: 'HEAD' }),
  ]).then(([r1, r2, r3, r4, r5, r6]) => {
    console.log(`[ASSET-CHECK-MONEY-L17] plan-document: ${r1.ok}, six-questions: ${r2.ok}, offering-and-market: ${r3.ok}, competition-money: ${r4.ok}, test-first: ${r5.ok}, living-plan: ${r6.ok}`);
  }).catch(() => {
    console.log('[ASSET-CHECK-MONEY-L17] Could not verify image assets — network check failed');
  });
})();

export default moneybusiness_explorer_l17_screens;
