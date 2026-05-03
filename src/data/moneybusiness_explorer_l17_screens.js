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

        // PHASE 2 — MAGAZINE STORY (4 sections)
        {
          type:          'magazine',
          section:       1,
          totalSections: 4,
          headline:      `Why Write a Business Plan?`,
          paragraphs: [
            `A business plan forces you to think through every part of your idea. What exactly are you selling? Who will buy it? How will you reach them? What will it cost to get started? How much will you charge? Writing the answers down is a completely different process from just thinking about them — and the difference reveals gaps you didn't know were there.`,
            `Gaps discovered on paper are free to fix. Gaps discovered after you've spent your savings are expensive. A business plan isn't a guarantee of success — nothing is. But it's a structured attempt to find the weakest points in your idea before reality does. Every hour spent planning saves multiple hours of fixing problems that didn't have to happen.`,
            `A good plan also clarifies your thinking in a way that's useful when you talk to other people — potential partners, family members who might support your idea, or anyone whose help you need. If you can't explain your business clearly on paper, you'll struggle to explain it in conversation. The plan is as much a communication tool as it is a thinking tool.`,
          ],
          image:        '/explorer-assets/money-business/l17-magazine-why-plan.png',
          imageCaption: `A business plan — structured thinking that reveals gaps before they cost you time, money, or both`,
          vocab: [
            { word: `business plan`, definition: `A document that answers the key questions about a business idea — what you sell, who buys it, how you'll find them, what it costs, and what makes you different. It helps you think clearly before spending.`, audioPrompt: `Business plan — a document that answers the key questions about a business idea. What you sell, who buys it, how you'll find them, what it costs, and what makes you different. It helps you think clearly before spending.` },
            { word: `viable`,        definition: `Capable of working or succeeding — a viable business is one where the numbers, the market, and the problem all line up well enough to have a realistic chance of success.`,                                audioPrompt: `Viable — capable of working or succeeding. A viable business is one where the numbers, the market, and the problem all line up well enough to have a realistic chance of success.` },
          ],
        },
        {
          type:          'magazine',
          section:       2,
          totalSections: 4,
          headline:      `The Key Sections of a Business Plan`,
          paragraphs: [
            `A simple business plan covers six key areas. The Business Idea section answers: what do you sell, and what problem does it solve? The Target Market section answers: who exactly are your customers, how old are they, what do they care about, where do they spend time? These two sections are the foundation — without them, the rest of the plan has nothing to build on.`,
            `The Competition section asks: who else is solving this problem, and what makes you different? The Marketing Plan asks: how will potential customers discover your business — through social media, word of mouth, local flyers, or something else? The Financial Plan asks: how much does it cost to start, what will you charge, how many sales do you need to break even?`,
            `Finally, Action Steps: what will you do first, second, and third? Concrete next steps turn a plan from theory into motion. Each section reveals a different dimension of whether the idea is ready. Together, they answer the question every entrepreneur must honestly face before spending a dollar: is this actually going to work?`,
          ],
          image:        '/explorer-assets/money-business/l17-magazine-key-sections.png',
          imageCaption: `The six key sections — Business Idea, Target Market, Competition, Marketing, Financial Plan, and Action Steps`,
          vocab: [
            { word: `target market`,  definition: `The specific group of people most likely to buy your product — defined by their age, interests, habits, and needs. A focused target market makes every other part of the plan clearer.`, audioPrompt: `Target market — the specific group of people most likely to buy your product. Defined by their age, interests, habits, and needs. A focused target market makes every other part of the plan clearer.` },
            { word: `competition`,    definition: `Other businesses or products that solve the same problem you're addressing — understanding your competition helps you define what makes your solution different and better.`,               audioPrompt: `Competition — other businesses or products that solve the same problem you're addressing. Understanding your competition helps you define what makes your solution different and better.` },
          ],
        },
        {
          type:          'magazine',
          section:       3,
          totalSections: 4,
          headline:      `Test Before You Invest`,
          paragraphs: [
            `The best business plans include a testing phase — a deliberate step before spending significant money on inventory, a website, or equipment. Testing means putting a real version of your idea in front of real people and watching what happens. Not asking friends if it sounds cool. Actually making something and seeing if anyone will pay for it.`,
            `This might mean making five of your product and trying to sell them. Or offering your service to three people you don't know well and seeing if they'll pay your full price. Or running a very small online campaign to see if anyone clicks through. Whatever form it takes, the goal is the same: get real data about real customer behaviour before you've made a large commitment.`,
            `A business plan should be a living document — not a finished product you write once and file away. Update it every time you learn something new from testing and customer conversations. The plan that gets you to your first customer will look different from the plan you use to get your hundredth. That evolution isn't a sign of failure — it's a sign of a business that's learning and adapting.`,
          ],
          image:        '/explorer-assets/money-business/l17-magazine-test-first.png',
          imageCaption: `Test before you invest — real feedback from real people is worth more than any assumption, no matter how confident you feel`,
          vocab: [
            { word: `prototype`,         definition: `An early test version of a product, built to gather real feedback before investing in full production — prototypes are built to be improved, not to be perfect.`,                      audioPrompt: `Prototype — an early test version of a product, built to gather real feedback before investing in full production. Prototypes are built to be improved, not to be perfect.` },
            { word: `living document`,   definition: `A plan or document that is regularly updated as new information is learned — the best business plans are living documents that evolve with the business.`,                           audioPrompt: `Living document — a plan or document that is regularly updated as new information is learned. The best business plans are living documents that evolve with the business.` },
          ],
        },
        {
          type:          'magazine',
          section:       4,
          totalSections: 4,
          headline:      `Keep It Simple`,
          paragraphs: [
            `A great business plan doesn't have to be long. In fact, length is often a sign of unclear thinking — when you truly understand your business, you can explain it concisely. Some of the most successful companies were built from plans that fit on a single page or even a single index card. What matters is not the word count but the clarity of the answers.`,
            `The test of a good plan is simple: can you explain your business idea clearly and compellingly to someone who knows nothing about it in five minutes or less? If yes, the plan is solid enough to start. If you find yourself struggling to explain what you sell, who buys it, or why anyone would choose you — that confusion signals that more thinking, not more writing, is needed.`,
            `Simplicity also has a practical advantage: a short plan is one you'll actually use. Long documents get filed. One-page plans get pinned to walls, reviewed weekly, and updated regularly. The plan is a tool, not an achievement. It exists to help you act — not to impress anyone who might read it.`,
          ],
          image:        '/explorer-assets/money-business/l17-magazine-keep-simple.png',
          imageCaption: `Keep it simple — a one-page plan that's actually used beats a fifty-page plan that sits in a drawer`,
          vocab: [
            { word: `startup`,   definition: `A new business in its early stages — typically small, testing its idea, and not yet generating consistent profit. Startups are defined by uncertainty and rapid learning.`,                                           audioPrompt: `Startup — a new business in its early stages. Typically small, testing its idea, and not yet generating consistent profit. Startups are defined by uncertainty and rapid learning.` },
            { word: `pitch`,     definition: `A short, clear explanation of a business idea designed to persuade a listener — investors, customers, or partners. A strong pitch answers what the problem is, what the solution is, and why you.`, audioPrompt: `Pitch — a short, clear explanation of a business idea designed to persuade a listener. Investors, customers, or partners. A strong pitch answers what the problem is, what the solution is, and why you.` },
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
            { image: 'l17-game-what-am-i-selling.png',    label: `"What problem am I solving, and exactly what product or service am I selling to solve it?"`,                                                  correctMatch: 'business-idea',   objectPosition: 'center 50%', matchPhrase: `Business Idea! Every business plan starts here — a clear statement of the problem you're solving and the product or service you offer. If you can't write this in two sentences, the rest of the plan falls apart. Clarity about what you're building is the foundation everything else rests on.` },
            { image: 'l17-game-who-are-customers.png',    label: `"Who are my ideal customers, what do they care about, and where do they spend their time?"`,                                                 correctMatch: 'target-market',   objectPosition: 'center 50%', matchPhrase: `Target Market! Knowing exactly who you're selling to is the second piece of every business plan. A business that tries to reach everyone usually reaches no one. Defining your target market precisely — their age, habits, and problems — helps you design the right product and reach the right people.` },
            { image: 'l17-game-how-find-customers.png',   label: `"How will I make potential customers aware that my business exists — through social media, word of mouth, or other channels?"`,            correctMatch: 'marketing-plan',  objectPosition: 'center 50%', matchPhrase: `Marketing Plan! A great product that nobody knows about is a business nobody buys from. The marketing plan answers how people will discover you. It doesn't have to be expensive — word of mouth, a strong social presence, or a clever local campaign can be as powerful as paid advertising for an early business.` },
            { image: 'l17-game-how-much-cost.png',        label: `"How much money do I need to start, what will I charge, and how long before the business makes a profit?"`,                                  correctMatch: 'financial-plan',  objectPosition: 'center 50%', matchPhrase: `Financial Plan! The financial plan is where ideas meet reality. How much does it cost to start? What price will you charge? How many sales do you need to break even? These numbers tell you if the business is viable before you spend a dollar. A plan without numbers is not a plan — it's a wish.` },
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
    fetch('/explorer-assets/money-business/l17-magazine-why-plan.png',     { method: 'HEAD' }),
    fetch('/explorer-assets/money-business/l17-magazine-key-sections.png', { method: 'HEAD' }),
    fetch('/explorer-assets/money-business/l17-magazine-test-first.png',   { method: 'HEAD' }),
    fetch('/explorer-assets/money-business/l17-magazine-keep-simple.png',  { method: 'HEAD' }),
  ]).then(([r1, r2, r3, r4]) => {
    console.log(`[ASSET-CHECK-MONEY-L17] why-plan: ${r1.ok}, key-sections: ${r2.ok}, test-first: ${r3.ok}, keep-simple: ${r4.ok}`);
  }).catch(() => {
    console.log('[ASSET-CHECK-MONEY-L17] Could not verify image assets — network check failed');
  });
})();

export default moneybusiness_explorer_l17_screens;
