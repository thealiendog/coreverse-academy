// ============================================================
// COREVERSE EXPLORERS — Money & Business · Lesson 13
// "Entrepreneurship: Starting Your Own Business"
// Ages 6–8 | Guide: Ace | ExplorerLessonPlayer format
// ============================================================

const moneybusiness_explorer_l13_screens = {
  ageBand:   'explorers',
  subjectId: 'money',
  guide:     'ace',
  lessons: [
    {
      id:        'mb-6-8-13',
      title:     `Entrepreneurship: Starting Your Own Business`,
      duration:  12,
      xpReward:  50,
      badge:     'entrepreneur',
      badgeName: `Entrepreneur`,
      screens: [
        // PHASE 1 — WELCOME
        {
          type:      'welcome',
          guideText: `An entrepreneur sees a problem and decides to solve it — and build a business around that solution. Entrepreneurs don't wait for someone to give them a job. They create their own opportunity. And the world needs more of them.`,
        },

        // PHASE 2 — MAGAZINE STORY (4 sections)
        {
          type:          'magazine',
          section:       1,
          totalSections: 4,
          headline:      `What Is an Entrepreneur?`,
          paragraphs: [
            `An entrepreneur is a person who starts a business, taking on financial risk in hopes of making a profit. Famous entrepreneurs include Steve Jobs, who co-founded Apple and helped create the personal computer and smartphone industries; Oprah Winfrey, who built a media empire from nothing; and Elon Musk, who founded companies including Tesla and SpaceX. Their stories are remarkable — but they're the visible tip of a very large iceberg.`,
            `Most entrepreneurs run businesses you'll never read about in the news: a local bakery, a plumbing company, a freelance design studio, a neighbourhood tutoring service. These people took the same leap — identifying an opportunity, bearing the risk, doing the work — and built livelihoods from nothing. They are the backbone of every economy.`,
            `What all entrepreneurs share is not fame or wealth, but a willingness to act on an idea rather than wait for someone else to do it. They see gaps, they tolerate uncertainty, and they keep going through difficulty. That combination — vision plus persistence — is the foundation of every entrepreneurial story, large or small.`,
          ],
          image:        '/explorer-assets/money-business/l13-magazine-entrepreneur.png',
          imageCaption: `Entrepreneurs — from famous founders to neighbourhood business owners, all united by taking risk to create something new`,
          vocab: [
            { word: `entrepreneur`, definition: `A person who starts a business, taking on financial risk in hopes of making a profit — entrepreneurs create opportunities rather than waiting for them.`,                        audioPrompt: `Entrepreneur — a person who starts a business, taking on financial risk in hopes of making a profit. Entrepreneurs create opportunities rather than waiting for them.` },
            { word: `risk`,         definition: `The possibility of loss or failure — entrepreneurs accept financial and personal risk because the potential reward of a successful business is worth it to them.`, audioPrompt: `Risk — the possibility of loss or failure. Entrepreneurs accept financial and personal risk because the potential reward of a successful business is worth it to them.` },
          ],
        },
        {
          type:          'magazine',
          section:       2,
          totalSections: 4,
          headline:      `The Entrepreneur's Mindset`,
          paragraphs: [
            `Entrepreneurs see the world differently. Where others see problems, entrepreneurs see opportunities. Where others see failure, entrepreneurs see data — information about what didn't work, which is exactly what they need to find what does. When something goes wrong, an entrepreneur's first question is: what did I just learn?`,
            `This way of thinking is called a growth mindset — the belief that skills, intelligence, and abilities can be developed through effort, practice, and learning from failure. The opposite is a fixed mindset — the belief that you either have talent or you don't. Entrepreneurs with a growth mindset treat setbacks as information, not as verdicts on their worth.`,
            `This mindset isn't something you're born with — it's something you develop. Every time you try something difficult, fail, analyse what went wrong, and try again with new understanding, you're training your mind to work like an entrepreneur's. The habit of learning from failure, practiced consistently, builds one of the most valuable skills any person can have.`,
          ],
          image:        '/explorer-assets/money-business/l13-magazine-mindset.png',
          imageCaption: `The entrepreneurial mindset — seeing problems as opportunities and failures as data, not as the end`,
          vocab: [
            { word: `growth mindset`, definition: `The belief that skills and abilities can be developed through effort and learning — people with a growth mindset treat challenges and failures as opportunities to improve.`,              audioPrompt: `Growth mindset — the belief that skills and abilities can be developed through effort and learning. People with a growth mindset treat challenges and failures as opportunities to improve.` },
            { word: `opportunity`,    definition: `A situation or gap in the market that an entrepreneur can address with a product or service — entrepreneurs are skilled at spotting opportunities others overlook.`, audioPrompt: `Opportunity — a situation or gap in the market that an entrepreneur can address with a product or service. Entrepreneurs are skilled at spotting opportunities others overlook.` },
          ],
        },
        {
          type:          'magazine',
          section:       3,
          totalSections: 4,
          headline:      `Steps to Starting a Business`,
          paragraphs: [
            `Starting a business follows a process, though rarely a perfectly straight line. It begins with finding a problem worth solving — a real need that real people have and would pay to address. Then you design a possible solution. But here's what most beginners skip: you test that solution with real people before spending significant time or money building it.`,
            `The tested version is called an MVP — a minimum viable product. An MVP is the simplest, smallest version of your idea that still demonstrates its core value. The goal isn't perfection; it's learning. You put something real in front of customers, watch how they respond, gather feedback, improve the product, and repeat. This cycle of build-test-improve is called iteration.`,
            `Most successful businesses look very different from their original idea. The willingness to change direction based on real feedback — called pivoting — separates entrepreneurs who succeed from those who don't. Stubbornly protecting your original idea when customers are telling you something different is one of the most common causes of business failure.`,
          ],
          image:        '/explorer-assets/money-business/l13-magazine-steps.png',
          imageCaption: `Starting a business — find the problem, design a solution, build an MVP, test with real people, improve, and repeat`,
          vocab: [
            { word: `MVP`,       definition: `Minimum Viable Product — the simplest version of a product that can be tested with real customers. An MVP is built to gather feedback, not to be perfect.`,                audioPrompt: `MVP — Minimum Viable Product. The simplest version of a product that can be tested with real customers. An MVP is built to gather feedback, not to be perfect.` },
            { word: `iteration`, definition: `The process of repeatedly improving a product based on feedback — each version is better than the last because it incorporates real learning from testing.`, audioPrompt: `Iteration — the process of repeatedly improving a product based on feedback. Each version is better than the last because it incorporates real learning from testing.` },
          ],
        },
        {
          type:          'magazine',
          section:       4,
          totalSections: 4,
          headline:      `Failure Is Data`,
          paragraphs: [
            `Every entrepreneur fails. James Dyson made 5,127 prototypes of his vacuum cleaner before producing one that worked the way he wanted. Walt Disney was fired from an early job for "lacking imagination." Sara Blakely's father had a weekly dinner tradition: he asked his children not what they had achieved that week, but what they had failed at. He wanted them to try hard things — and not be afraid of the answer.`,
            `The point is not that failure is pleasant. It isn't. But failure contains information that success doesn't. When something doesn't work, you learn exactly what doesn't work — and that narrows the gap to what does. Every failed prototype, every customer who said no, every marketing message that fell flat is a step closer to the version that works.`,
            `Failure just means you're in the game. Only people who try can fail — and only people who fail have any chance of eventually succeeding. The entrepreneurs who never failed are the ones who never tried anything worth doing. The most important thing isn't getting it right the first time. It's getting back up the second time.`,
          ],
          image:        '/explorer-assets/money-business/l13-magazine-failure.png',
          imageCaption: `Failure is data — every setback narrows the gap to what works, and only those in the game have a chance at winning`,
          vocab: [
            { word: `pivot`,      definition: `A significant change in direction based on feedback or new information — entrepreneurs pivot when their original approach isn't working rather than persisting with a failing plan.`, audioPrompt: `Pivot — a significant change in direction based on feedback or new information. Entrepreneurs pivot when their original approach isn't working rather than persisting with a failing plan.` },
            { word: `resilience`, definition: `The ability to recover from setbacks and keep going — entrepreneurial resilience is the capacity to absorb failure, learn from it, and continue building.`,                       audioPrompt: `Resilience — the ability to recover from setbacks and keep going. Entrepreneurial resilience is the capacity to absorb failure, learn from it, and continue building.` },
          ],
        },

        // PHASE 3 — INTERACTIVE
        {
          type:          'interactive',
          activityType:  'drag-match',
          instruction:   `Tap each card, then tap whether this shows an entrepreneur mindset or a fixed mindset!`,
          guideText:     `The way you respond to failure and difficulty defines whether you grow or stay stuck. An entrepreneur mindset turns setbacks into lessons. A fixed mindset turns them into conclusions. Can you tell which is which?`,
          columnHeaders: [`The Response`, `Which Mindset?`],
          items: [
            { image: 'l13-game-failure-data.png', label: `"My first attempt didn't work — what can I learn from this to do better next time?"`,                 correctMatch: 'entrepreneur-mindset', objectPosition: 'center 50%', matchPhrase: `Entrepreneur mindset! This response treats failure as data — something to analyse and learn from. The question "what can I learn?" turns a setback into a step forward. Every successful entrepreneur asks this question habitually. Failure isn't the opposite of success; it's the raw material you use to build it.` },
            { image: 'l13-game-give-up.png',      label: `"I tried once and it failed, so I'm clearly not cut out for this."`,                                  correctMatch: 'fixed-mindset',        objectPosition: 'center 50%', matchPhrase: `Fixed mindset! Drawing a permanent conclusion from a single attempt is the fixed mindset in action. One failure tells you what didn't work this time — nothing more. James Dyson's vacuum failed 5,126 times before it succeeded. If he'd concluded he wasn't "cut out for it" on attempt one, the product would never have existed.` },
            { image: 'l13-game-pivot.png',        label: `"This part of my plan isn't working. Let me test a completely different approach."`,                  correctMatch: 'entrepreneur-mindset', objectPosition: 'center 50%', matchPhrase: `Entrepreneur mindset! Recognising what isn't working and choosing to change direction is one of the most valuable entrepreneurial skills. This is called pivoting. It takes honesty and flexibility — the willingness to let go of a plan that isn't serving you and try something better.` },
            { image: 'l13-game-blame.png',        label: `"It's not my fault — nothing I tried could have worked."`,                                            correctMatch: 'fixed-mindset',        objectPosition: 'center 50%', matchPhrase: `Fixed mindset! Deflecting responsibility removes your power to improve. If nothing you tried could have worked, there's nothing to learn and nothing to do differently. But that's almost never true. Entrepreneurs take ownership of outcomes — because ownership of failure is the only path to ownership of the solution.` },
          ],
          buckets: [
            { id: 'entrepreneur-mindset', label: `💡 Entrepreneur Mindset`, color: '#34D399' },
            { id: 'fixed-mindset',        label: `🧱 Fixed Mindset`,        color: '#60A5FA' },
          ],
        },

        // PHASE 4 — MASTERY QUIZ
        {
          type:      'quiz',
          guideText: `Quiz time, {name}! Let's see what you've learned about entrepreneurship. Answer all 6 questions to earn your Entrepreneur badge!`,
          questions: [
            {
              format:       'multiple-choice',
              question:     `What is an entrepreneur?`,
              options:      [`Someone who works for a big company`, `A person who starts a business, taking on risk in hopes of making a profit`, `A professional investor`, `Anyone who earns money`],
              correctIndex: 1,
            },
            {
              format:       'multiple-choice',
              question:     `What does MVP stand for?`,
              options:      [`Most Valuable Player`, `Minimum Viable Product`, `Maximum Value Proposition`, `Main Value Provider`],
              correctIndex: 1,
            },
            {
              format:       'multiple-choice',
              question:     `How do entrepreneurs think about failure?`,
              options:      [`As something to hide`, `As a reason to quit`, `As data and learning, not as the end`, `As someone else's fault`],
              correctIndex: 2,
            },
            {
              format:        'true-false',
              question:      `A minimum viable product is a simple early version of an idea, built to test whether real people actually want it.`,
              correctAnswer: true,
            },
            {
              format:       'fill-blank',
              question:     `The belief that skills and abilities can be developed through effort and learning is called a ___ mindset.`,
              options:      [`growth`, `fixed`, `creative`, `sales`],
              correctIndex: 0,
            },
            {
              format:       'multiple-choice',
              question:     `Why do entrepreneurs test their idea with real people BEFORE building the full version?`,
              options:      [`Because the law requires it before selling anything`, `To qualify for a business licence`, `To get real feedback and find out if people actually want it before investing more time and money`, `Because early customers always pay more`],
              correctIndex: 2,
            },
          ],
        },

        // PHASE 5 — REAL-WORLD CONNECTION
        {
          type:            'real-world',
          guideText:       `Think about one problem you've noticed this week — something that frustrated you or that you wished someone would fix. That frustration is exactly where entrepreneurs start.`,
          familyAdventure: `Watch an investor pitch show on TV together. Notice how entrepreneurs explain their business: What problem do they solve? Who is their customer? What makes them different? What have they learned from failures? Decide as a family: would you invest?`,
          creativePrompt:  `Design the smallest, simplest version of a business idea you could actually test this week. What's the ONE thing you could do to test if people like your idea? Maybe it's asking 10 people if they'd buy it. Maybe it's making one of your product and seeing if someone will pay. Test it!`,
        },

        // PHASE 6 — CELEBRATION
        {
          type:      'celebration',
          xpEarned:  50,
          badge:     'entrepreneur',
          badgeName: `Entrepreneur`,
          message:   `Excellent work, {name}! You now know what entrepreneurs do, how they think about failure, and the process they use to turn ideas into real businesses. The world needs problem-solvers with the courage to start. Ace is so proud to share this knowledge with you.`,
        },
      ],
    },
  ],
};

// Log on module load — confirms lesson wired correctly + verifies image assets at runtime
(() => {
  const l    = moneybusiness_explorer_l13_screens.lessons[0];
  const mags = l.screens.filter(s => s.type === 'magazine').length;
  const game = l.screens.find(s => s.type === 'interactive')?.items?.length || 0;
  const quiz = l.screens.find(s => s.type === 'quiz')?.questions?.length || 0;
  console.log(`[LESSON-MONEY-L13] Loaded: "Entrepreneurship: Starting Your Own Business" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
  Promise.all([
    fetch('/explorer-assets/money-business/l13-magazine-entrepreneur.png', { method: 'HEAD' }),
    fetch('/explorer-assets/money-business/l13-magazine-mindset.png',      { method: 'HEAD' }),
    fetch('/explorer-assets/money-business/l13-magazine-steps.png',        { method: 'HEAD' }),
    fetch('/explorer-assets/money-business/l13-magazine-failure.png',      { method: 'HEAD' }),
  ]).then(([r1, r2, r3, r4]) => {
    console.log(`[ASSET-CHECK-MONEY-L13] entrepreneur: ${r1.ok}, mindset: ${r2.ok}, steps: ${r3.ok}, failure: ${r4.ok}`);
  }).catch(() => {
    console.log('[ASSET-CHECK-MONEY-L13] Could not verify image assets — network check failed');
  });
})();

export default moneybusiness_explorer_l13_screens;
