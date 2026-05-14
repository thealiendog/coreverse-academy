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

        // PHASE 2 — MAGAZINE STORY (6 sections)
        {
          type:          'magazine',
          section:       1,
          totalSections: 6,
          headline:      `What Is an Entrepreneur?`,
          paragraphs: [
            `An entrepreneur is a person who starts a business, taking on financial risk in hopes of making a profit.`,
            `Entrepreneurs don't wait for someone to give them a job. They see a problem, create a solution, and bet on themselves.`,
          ],
          image:        '/explorer-assets/money-business/l13-s1-entrepreneur-choice.png',
          imageCaption: `An entrepreneur is someone who acts on an idea instead of waiting for permission`,
          vocab: [
            { word: 'entrepreneur', definition: `A person who starts a business, taking risk to build something new in hopes of making a profit.`, audioPrompt: `Entrepreneur — a person who starts a business, taking risk to build something new in hopes of making a profit.` },
            { word: 'risk',         definition: `The chance of losing money or failing. Entrepreneurs accept risk in exchange for the chance at big reward.`, audioPrompt: `Risk — the chance of losing money or failing. Entrepreneurs accept risk in exchange for the chance at big reward.` },
          ],
        },
        {
          type:          'magazine',
          section:       2,
          totalSections: 6,
          headline:      `Famous and Local`,
          paragraphs: [
            `Famous entrepreneurs include Steve Jobs (Apple), Oprah Winfrey (media), and Elon Musk (Tesla, SpaceX).`,
            `But most entrepreneurs you'll never hear about — the local baker, plumber, freelance designer, tutoring service. They're the backbone of every economy.`,
          ],
          image:        '/explorer-assets/money-business/l13-s2-constellation-of-founders.png',
          imageCaption: `A few founders become famous. Millions more quietly run the local businesses that keep the world working.`,
          vocab: [
            { word: 'founder',        definition: `The person who starts a company. Steve Jobs co-founded Apple. Oprah founded her media company.`, audioPrompt: `Founder — the person who starts a company. Steve Jobs co-founded Apple. Oprah founded her media company.` },
            { word: 'small business', definition: `A locally-owned business — bakeries, plumbers, designers, tutors. Most jobs in the world come from small businesses.`, audioPrompt: `Small business — a locally-owned business: bakeries, plumbers, designers, tutors. Most jobs in the world come from small businesses.` },
          ],
        },
        {
          type:          'magazine',
          section:       3,
          totalSections: 6,
          headline:      `The Mindset`,
          paragraphs: [
            `Entrepreneurs see the world differently. Where others see problems, they see opportunities. Where others see failure, they see data.`,
            `This is called a growth mindset — the belief that skills can be developed through effort and learning. Talent isn't fixed. It's built.`,
          ],
          image:        '/explorer-assets/money-business/l13-s3-mindset.png',
          imageCaption: `Problems are opportunities. Failures are data. Skills are built. That's the mindset.`,
          vocab: [
            { word: 'growth mindset', definition: `The belief that skills, intelligence, and abilities can grow with effort and practice. Failures become learning, not endings.`, audioPrompt: `Growth mindset — the belief that skills, intelligence, and abilities can grow with effort and practice. Failures become learning, not endings.` },
            { word: 'opportunity',    definition: `A chance to do something valuable. Entrepreneurs are skilled at spotting opportunities other people walk past.`, audioPrompt: `Opportunity — a chance to do something valuable. Entrepreneurs are skilled at spotting opportunities other people walk past.` },
          ],
        },
        {
          type:          'magazine',
          section:       4,
          totalSections: 6,
          headline:      `Start with a Problem`,
          paragraphs: [
            `Every successful business starts the same way: with a real problem someone is willing to pay to solve.`,
            `Not "what could I make?" but "what frustrates people right now?" The bigger and more common the frustration, the bigger the business opportunity.`,
          ],
          image:        '/explorer-assets/money-business/l13-s4-find-the-problem.png',
          imageCaption: `Start with what frustrates real people. Solve that. The business follows.`,
          vocab: [
            { word: 'problem', definition: `Something that frustrates or limits people. Every business begins by solving a real problem someone will pay to fix.`, audioPrompt: `Problem — something that frustrates or limits people. Every business begins by solving a real problem someone will pay to fix.` },
            { word: 'need',    definition: `Something people genuinely require — not just want. The more important the need, the bigger the business opportunity.`, audioPrompt: `Need — something people genuinely require, not just want. The more important the need, the bigger the business opportunity.` },
          ],
        },
        {
          type:          'magazine',
          section:       5,
          totalSections: 6,
          headline:      `Build, Test, Pivot`,
          paragraphs: [
            `Smart entrepreneurs don't build the full product first. They build an MVP — the simplest version that tests the idea.`,
            `They show it to real people, gather feedback, and improve. If something fundamental isn't working, they pivot — change direction completely.`,
          ],
          image:        '/explorer-assets/money-business/l13-s5-mvp-cycle.png',
          imageCaption: `Tiny first version. Real feedback. Improve. Repeat. That's how every successful business is built.`,
          vocab: [
            { word: 'MVP',   definition: `Minimum Viable Product — the simplest version of an idea that can be tested with real people. The point isn't perfection; it's learning.`, audioPrompt: `MVP — Minimum Viable Product. The simplest version of an idea that can be tested with real people. The point isn't perfection; it's learning.` },
            { word: 'pivot', definition: `A major change in direction based on what you learned. Smart entrepreneurs pivot when the original idea isn't working.`, audioPrompt: `Pivot — a major change in direction based on what you learned. Smart entrepreneurs pivot when the original idea isn't working.` },
          ],
        },
        {
          type:          'magazine',
          section:       6,
          totalSections: 6,
          headline:      `Failure Is Data`,
          paragraphs: [
            `Every entrepreneur fails. James Dyson made 5,127 prototypes before one vacuum worked. Walt Disney was fired for "lacking imagination."`,
            `Sara Blakely's father asked his kids each week what they had FAILED at — he wanted them to try hard things. Failure means you're in the game.`,
          ],
          image:        '/explorer-assets/money-business/l13-s6-failure-path.png',
          imageCaption: `Every successful entrepreneur has a trail of failures behind them. That trail IS the path.`,
          vocab: [
            { word: 'prototype',  definition: `An early version of a product, made to test ideas. James Dyson made 5,127 prototypes before perfecting his vacuum.`, audioPrompt: `Prototype — an early version of a product, made to test ideas. James Dyson made 5,127 prototypes before perfecting his vacuum.` },
            { word: 'resilience', definition: `The ability to keep going after setbacks. Entrepreneurial resilience is the single biggest difference between people who succeed and those who don't.`, audioPrompt: `Resilience — the ability to keep going after setbacks. Entrepreneurial resilience is the single biggest difference between people who succeed and those who don't.` },
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
    fetch('/explorer-assets/money-business/l13-s1-entrepreneur-choice.png',       { method: 'HEAD' }),
    fetch('/explorer-assets/money-business/l13-s2-constellation-of-founders.png', { method: 'HEAD' }),
    fetch('/explorer-assets/money-business/l13-s3-mindset.png',                   { method: 'HEAD' }),
    fetch('/explorer-assets/money-business/l13-s4-find-the-problem.png',          { method: 'HEAD' }),
    fetch('/explorer-assets/money-business/l13-s5-mvp-cycle.png',                 { method: 'HEAD' }),
    fetch('/explorer-assets/money-business/l13-s6-failure-path.png',              { method: 'HEAD' }),
  ]).then(([r1, r2, r3, r4, r5, r6]) => {
    console.log(`[ASSET-CHECK-MONEY-L13] entrepreneur-choice: ${r1.ok}, constellation-of-founders: ${r2.ok}, mindset: ${r3.ok}, find-the-problem: ${r4.ok}, mvp-cycle: ${r5.ok}, failure-path: ${r6.ok}`);
  }).catch(() => {
    console.log('[ASSET-CHECK-MONEY-L13] Could not verify image assets — network check failed');
  });
})();

export default moneybusiness_explorer_l13_screens;
