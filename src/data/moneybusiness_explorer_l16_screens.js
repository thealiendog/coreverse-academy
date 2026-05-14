// ============================================================
// COREVERSE EXPLORERS — Money & Business · Lesson 16
// "What Problem Does Your Business Solve?"
// Ages 6–8 | Guide: Ace | ExplorerLessonPlayer format
// ============================================================

const moneybusiness_explorer_l16_screens = {
  ageBand:   'explorers',
  subjectId: 'money',
  guide:     'ace',
  lessons: [
    {
      id:        'mb-6-8-16',
      title:     `What Problem Does Your Business Solve?`,
      duration:  12,
      xpReward:  50,
      badge:     'problem-solver',
      badgeName: `Problem Solver`,
      screens: [
        // PHASE 1 — WELCOME
        {
          type:      'welcome',
          guideText: `Here's the most important question in all of business. Not "how do I make money." The most important question is: what PROBLEM am I solving? Every great business answers this clearly. The ones that don't, fail.`,
        },

        // PHASE 2 — MAGAZINE STORY (6 sections)
        {
          type:          'magazine',
          section:       1,
          totalSections: 6,
          headline:      'Problem First, Solution Second',
          paragraphs: [
            'Most people start a business backwards. They get excited about a product idea, then look for someone to sell it to.',
            'Smart entrepreneurs flip it. Find a real problem first. THEN design a solution. The product is just the answer — the problem is the foundation.',
          ],
          image:        '/explorer-assets/money-business/l16-s1-problem-then-solution.png',
          imageCaption: 'Problem first. Solution second. Get the sequence wrong, and the business collapses.',
          vocab: [
            { word: 'problem-solution fit', definition: 'When a real problem matches a strong solution. The foundation that every successful business is built on.', audioPrompt: 'Problem-solution fit — when a real problem matches a strong solution. The foundation that every successful business is built on.' },
            { word: 'sequence',             definition: 'The order things happen in. Getting the sequence right is often more important than the ideas themselves.', audioPrompt: 'Sequence — the order things happen in. Getting the sequence right is often more important than the ideas themselves.' },
          ],
        },
        {
          type:          'magazine',
          section:       2,
          totalSections: 6,
          headline:      'Three Marks of a Good Problem',
          paragraphs: [
            'Not every frustration is a business opportunity. The strongest problems share three traits.',
            'Common: many people have it. Annoying: they want it fixed badly enough to pay. Unsolved: no one\'s doing it well yet.',
          ],
          image:        '/explorer-assets/money-business/l16-s2-three-marks.png',
          imageCaption: 'Common. Annoying. Unsolved. All three — that\'s where real business opportunities live.',
          vocab: [
            { word: 'pain point', definition: 'A specific frustration customers experience repeatedly. The sharper the pain, the more willing customers are to pay.', audioPrompt: 'Pain point — a specific frustration customers experience repeatedly. The sharper the pain, the more willing customers are to pay.' },
            { word: 'market',     definition: 'All the people who might want your solution. The bigger and more frustrated the market, the bigger the opportunity.', audioPrompt: 'Market — all the people who might want your solution. The bigger and more frustrated the market, the bigger the opportunity.' },
          ],
        },
        {
          type:          'magazine',
          section:       3,
          totalSections: 6,
          headline:      'Know Your Audience',
          paragraphs: [
            'A problem 10,000 college students share is a different opportunity than a problem 10 specialists share.',
            'Who exactly has this problem? How badly? Where do they spend time? The clearer your audience, the easier everything else becomes.',
          ],
          image:        '/explorer-assets/money-business/l16-s3-know-audience.png',
          imageCaption: 'The same problem looks very different depending on WHO has it. Get specific.',
          vocab: [
            { word: 'audience', definition: 'The specific group of people you\'re solving the problem for. Knowing your audience makes every other decision easier.', audioPrompt: 'Audience — the specific group of people you\'re solving the problem for. Knowing your audience makes every other decision easier.' },
            { word: 'niche',    definition: 'A small, specific group with a clear shared need. The best businesses often start by serving a niche perfectly.', audioPrompt: 'Niche — a small, specific group with a clear shared need. The best businesses often start by serving a niche perfectly.' },
          ],
        },
        {
          type:          'magazine',
          section:       4,
          totalSections: 6,
          headline:      'Don\'t Assume — Ask',
          paragraphs: [
            'The biggest mistake new entrepreneurs make is assuming they know what people want without asking.',
            'Before building anything, go talk to real people. "What frustrates you?" "What do you wish existed?" Listen more than you talk. The answers will surprise you.',
          ],
          image:        '/explorer-assets/money-business/l16-s4-listen.png',
          imageCaption: 'Stop guessing. Start asking. Real conversations beat any business plan.',
          vocab: [
            { word: 'assumption', definition: 'Believing something is true without checking. Assumptions sink more new businesses than competition does.', audioPrompt: 'Assumption — believing something is true without checking. Assumptions sink more new businesses than competition does.' },
            { word: 'research',   definition: 'Actually finding out by asking real people instead of guessing. The cheapest, fastest way to test if a business idea is real.', audioPrompt: 'Research — actually finding out by asking real people instead of guessing. The cheapest, fastest way to test if a business idea is real.' },
          ],
        },
        {
          type:          'magazine',
          section:       5,
          totalSections: 6,
          headline:      'Your Unique Angle',
          paragraphs: [
            'Why would anyone choose your solution over everything else that exists? That\'s your unique value proposition.',
            'It might be speed. Or price. Or quality. Or a specific group everyone else overlooked. Any of these can be a winning angle.',
          ],
          image:        '/explorer-assets/money-business/l16-s5-unique-angle.png',
          imageCaption: 'Speed, price, quality, or focus on an overlooked group — pick the angle that\'s genuinely yours',
          vocab: [
            { word: 'unique value proposition', definition: 'The clear reason customers should choose YOU over every other option. Your answer to "why you?"', audioPrompt: 'Unique value proposition — the clear reason customers should choose you over every other option. Your answer to "why you?"' },
            { word: 'differentiator',           definition: 'What makes you meaningfully different from competitors. A strong differentiator is hard to copy.', audioPrompt: 'Differentiator — what makes you meaningfully different from competitors. A strong differentiator is hard to copy.' },
          ],
        },
        {
          type:          'magazine',
          section:       6,
          totalSections: 6,
          headline:      'Hard to Copy Wins',
          paragraphs: [
            'If your only advantage is "cheaper," a competitor can match that overnight.',
            'But deep expertise, a loyal community, or a perfectly-built solution for an underserved group — those take years to replicate. Build something genuinely yours.',
          ],
          image:        '/explorer-assets/money-business/l16-s6-moat.png',
          imageCaption: 'The strongest businesses have advantages competitors can\'t copy quickly. That\'s a moat.',
          vocab: [
            { word: 'competitive advantage', definition: 'Something your business has that competitors can\'t easily match. Expertise, community, brand — these all qualify.', audioPrompt: 'Competitive advantage — something your business has that competitors can\'t easily match. Expertise, community, brand, these all qualify.' },
            { word: 'moat',                  definition: 'A durable advantage that protects your business from being copied. The deeper the moat, the safer the business long-term.', audioPrompt: 'Moat — a durable advantage that protects your business from being copied. The deeper the moat, the safer the business long-term.' },
          ],
        },

        // PHASE 3 — INTERACTIVE
        {
          type:          'interactive',
          activityType:  'drag-match',
          instruction:   `Tap each card, then tap whether this is a strong business problem or a weak one!`,
          guideText:     `The best business problems are common, annoying, and unsolved. If a problem is rare, or nobody really cares, or it's already solved perfectly — it's a weak business opportunity. Can you tell which is which?`,
          columnHeaders: [`The Problem`, `Strong or Weak?`],
          items: [
            { image: 'l16-game-keys.png',        label: `Millions of people lose their keys every day and nobody has invented a reliable, affordable way to find them quickly.`,                              correctMatch: 'strong-problem', objectPosition: 'center 50%', matchPhrase: `Strong business problem! This checks all three boxes: common (millions of people), annoying (nobody wants to waste time searching), and unsolved or poorly solved (existing solutions are expensive or unreliable). When you find a problem that millions share, are frustrated by, and haven't found a great answer to — that's a golden opportunity worth building around.` },
            { image: 'l16-game-sock-drawer.png', label: `You personally find it frustrating that your sock drawer gets messy, but no one else you've talked to cares about this.`,                    correctMatch: 'weak-problem',   objectPosition: 'center 50%', matchPhrase: `Weak business problem! A problem only you experience — or that only you care about deeply — is a very small market. Great business problems are widely shared. Before building any solution, always ask: do other people have this problem, and does it bother them enough to pay for a fix? If you're the only one who cares, you'd have very few customers.` },
            { image: 'l16-game-homework.png',    label: `Almost every student struggles to organise their homework and assignments, and most existing tools are confusing or designed for adults.`,       correctMatch: 'strong-problem', objectPosition: 'center 50%', matchPhrase: `Strong business problem! Common: nearly all students face it. Annoying: disorganisation causes real stress and missed deadlines. Poorly solved for this specific group: existing tools weren't built with students in mind. This trifecta — common, annoying, and unsolved for a specific audience — is exactly what makes a problem worth building a business around.` },
            { image: 'l16-game-solved.png',      label: `A problem that five excellent, highly-rated products already solve perfectly, leaving nothing to improve and no unhappy customers.`,              correctMatch: 'weak-problem',   objectPosition: 'center 50%', matchPhrase: `Weak business problem! If a problem is already solved brilliantly by products that customers genuinely love, there's very little room to enter. Your unique value proposition needs to be compelling — and if customers are fully satisfied, it's extremely hard to give them a reason to switch. Look for frustrated customers, not satisfied ones.` },
          ],
          buckets: [
            { id: 'strong-problem', label: `💡 Strong Business Problem`, color: '#34D399' },
            { id: 'weak-problem',   label: `⚠️ Weak Business Problem`,   color: '#60A5FA' },
          ],
        },

        // PHASE 4 — MASTERY QUIZ
        {
          type:      'quiz',
          guideText: `Quiz time, {name}! Let's see what you've learned about finding the right problem to solve. Answer all 6 questions to earn your Problem Solver badge!`,
          questions: [
            {
              format:       'multiple-choice',
              question:     `Why should entrepreneurs start with the problem instead of the product?`,
              options:      [`Products are boring`, `Because if you don't know what problem you're solving, you might build something nobody needs`, `Problems are easier to find than products`, `Products cost too much to make first`],
              correctIndex: 1,
            },
            {
              format:       'multiple-choice',
              question:     `What three characteristics make a problem a good business opportunity?`,
              options:      [`Rare, expensive, and technical`, `Common, annoying, and unsolved (or poorly solved)`, `Fun, creative, and profitable`, `Simple, cheap, and popular`],
              correctIndex: 1,
            },
            {
              format:       'multiple-choice',
              question:     `What is a unique value proposition?`,
              options:      [`The price of your product`, `Your business name and logo`, `Why customers should choose your business over everyone else's`, `How many employees you have`],
              correctIndex: 2,
            },
            {
              format:        'true-false',
              question:      `The best business problems to solve are ones that many people share and that nobody has found a great solution for yet.`,
              correctAnswer: true,
            },
            {
              format:       'fill-blank',
              question:     `The reason a customer should choose your business over every other option is called your unique ___ proposition.`,
              options:      [`value`, `selling`, `profit`, `brand`],
              correctIndex: 0,
            },
            {
              format:       'multiple-choice',
              question:     `What is the best first step when starting a business?`,
              options:      [`Design a logo and pick your brand colours`, `Find a problem worth solving, then design a solution`, `Borrow as much money as possible to get started`, `Research which products are cheapest to make`],
              correctIndex: 1,
            },
          ],
        },

        // PHASE 5 — REAL-WORLD CONNECTION
        {
          type:            'real-world',
          guideText:       `Think about the last time you felt genuinely frustrated — something didn't work, didn't exist, or cost too much. That frustration might be the seed of a real business.`,
          familyAdventure: `Go to a busy place — a mall, a park, a grocery store. Watch people for 20 minutes. Notice moments of frustration, awkwardness, or struggle. What problems do you see? Talk as a family about which one seems most worth solving and how you'd do it.`,
          creativePrompt:  `For 24 hours, carry a small notebook. Every time you feel frustrated or think "someone should make something that..." — write it down. By the end of the day, you'll have a list of real problems. Pick the one that bothers you most. Does a solution already exist? If not, what would YOUR solution look like?`,
        },

        // PHASE 6 — CELEBRATION
        {
          type:      'celebration',
          xpEarned:  50,
          badge:     'problem-solver',
          badgeName: `Problem Solver`,
          message:   `Excellent work, {name}! You now know the most important question in business: what problem am I solving? Every great company started with this question — and every failed one skipped it. Start with the problem, and the business follows. Ace is so proud to share this knowledge with you.`,
        },
      ],
    },
  ],
};

// Log on module load — confirms lesson wired correctly + verifies image assets at runtime
(() => {
  const l    = moneybusiness_explorer_l16_screens.lessons[0];
  const mags = l.screens.filter(s => s.type === 'magazine').length;
  const game = l.screens.find(s => s.type === 'interactive')?.items?.length || 0;
  const quiz = l.screens.find(s => s.type === 'quiz')?.questions?.length || 0;
  console.log(`[LESSON-MONEY-L16] Loaded: "What Problem Does Your Business Solve?" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
  Promise.all([
    fetch('/explorer-assets/money-business/l16-s1-problem-then-solution.png', { method: 'HEAD' }),
    fetch('/explorer-assets/money-business/l16-s2-three-marks.png',           { method: 'HEAD' }),
    fetch('/explorer-assets/money-business/l16-s3-know-audience.png',         { method: 'HEAD' }),
    fetch('/explorer-assets/money-business/l16-s4-listen.png',                { method: 'HEAD' }),
    fetch('/explorer-assets/money-business/l16-s5-unique-angle.png',          { method: 'HEAD' }),
    fetch('/explorer-assets/money-business/l16-s6-moat.png',                  { method: 'HEAD' }),
  ]).then(([r1, r2, r3, r4, r5, r6]) => {
    console.log(`[ASSET-CHECK-MONEY-L16] problem-then-solution: ${r1.ok}, three-marks: ${r2.ok}, know-audience: ${r3.ok}, listen: ${r4.ok}, unique-angle: ${r5.ok}, moat: ${r6.ok}`);
  }).catch(() => {
    console.log('[ASSET-CHECK-MONEY-L16] Could not verify image assets — network check failed');
  });
})();

export default moneybusiness_explorer_l16_screens;
