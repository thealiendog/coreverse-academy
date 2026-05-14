// ============================================================
// COREVERSE EXPLORERS — Money & Business · Lesson 15
// "Famous Young Entrepreneurs"
// Ages 6–8 | Guide: Ace | ExplorerLessonPlayer format
// ============================================================

const moneybusiness_explorer_l15_screens = {
  ageBand:   'explorers',
  subjectId: 'money',
  guide:     'ace',
  lessons: [
    {
      id:        'mb-6-8-15',
      title:     `Famous Young Entrepreneurs`,
      duration:  12,
      xpReward:  50,
      badge:     'inspired',
      badgeName: `Inspired`,
      screens: [
        // PHASE 1 — WELCOME
        {
          type:      'welcome',
          guideText: `You might think you need to be a grown-up to run a real business. These kids prove otherwise. They built companies, earned real money, appeared on national TV, and in some cases changed industries — all before finishing school.`,
        },

        // PHASE 2 — MAGAZINE STORY (6 sections)
        {
          type:          'magazine',
          section:       1,
          totalSections: 6,
          headline:      'Mikaila Ulmer',
          paragraphs: [
            'Mikaila Ulmer started her lemonade business at age 4 after getting stung by bees twice in one week.',
            'Instead of fearing bees, she got curious. She learned how vital they are. Her honey-sweetened lemonade, with sales supporting bee conservation, is now in major US grocery stores.',
          ],
          image:        '/explorer-assets/money-business/l15-s1-bees-lemonade.png',
          imageCaption: 'A bee sting at age 4 became a national brand by age 11 — built on curiosity and a real mission',
          vocab: [
            { word: 'mission',      definition: 'A deeper purpose behind a business — beyond just making money. Mission-driven businesses solve real problems people care about.', audioPrompt: 'Mission — a deeper purpose behind a business, beyond just making money. Mission-driven businesses solve real problems people care about.' },
            { word: 'conservation', definition: 'Protecting nature or important species. Mikaila\'s business supports bee conservation with part of every sale.', audioPrompt: 'Conservation — protecting nature or important species. Mikaila\'s business supports bee conservation with part of every sale.' },
          ],
        },
        {
          type:          'magazine',
          section:       2,
          totalSections: 6,
          headline:      'Moziah Bridges',
          paragraphs: [
            'At age 9, Moziah Bridges couldn\'t find bow ties he actually liked. So he asked his grandmother to teach him to sew.',
            'He made his own. By age 13, Mo\'s Bows was earning over $200,000 a year. At 14, a major sports league hired him to design ties.',
          ],
          image:        '/explorer-assets/money-business/l15-s2-young-tailor.png',
          imageCaption: 'Couldn\'t find what he wanted, so he built it himself. The business grew from there.',
          vocab: [
            { word: 'brand',    definition: 'The overall identity of a business — its name, look, and feel. Mo\'s Bows is now a recognized national brand.', audioPrompt: 'Brand — the overall identity of a business: its name, look, and feel. Mo\'s Bows is now a recognized national brand.' },
            { word: 'handmade', definition: 'Made by a person, not by a machine. Moziah\'s first bow ties were all handmade by him at his grandmother\'s sewing table.', audioPrompt: 'Handmade — made by a person, not by a machine. Moziah\'s first bow ties were all handmade by him at his grandmother\'s sewing table.' },
          ],
        },
        {
          type:          'magazine',
          section:       3,
          totalSections: 6,
          headline:      'Evan of EvanTubeHD',
          paragraphs: [
            'Evan started reviewing toys on YouTube at age 8 — just because he loved them. His parents helped him film.',
            'His honest enthusiasm attracted millions of subscribers. By age 10, his channel was earning more than most adult salaries.',
          ],
          image:        '/explorer-assets/money-business/l15-s3-young-creator.png',
          imageCaption: 'No business plan — just a real kid who loved toys. Authenticity grew the audience.',
          vocab: [
            { word: 'creator',     definition: 'Someone who makes original content — videos, art, writing, music — and builds an audience around it.', audioPrompt: 'Creator — someone who makes original content: videos, art, writing, music, and builds an audience around it.' },
            { word: 'subscribers', definition: 'People who follow a creator\'s channel to see new content. Evan\'s channel grew to millions of subscribers.', audioPrompt: 'Subscribers — people who follow a creator\'s channel to see new content. Evan\'s channel grew to millions of subscribers.' },
          ],
        },
        {
          type:          'magazine',
          section:       4,
          totalSections: 6,
          headline:      'Started with Genuine Interest',
          paragraphs: [
            'None of them started by asking "how do I get rich?" They started by caring about something specific.',
            'Curiosity about bees. Frustration over bow ties. Love of toys. The business grew from the caring — not from a plan to make money.',
          ],
          image:        '/explorer-assets/money-business/l15-s4-thread-of-passion.png',
          imageCaption: 'The shared thread isn\'t a plan or money — it\'s genuinely caring about something specific',
          vocab: [
            { word: 'passion',   definition: 'A strong interest you genuinely care about. Every great business starts from passion, not from a desire for money alone.', audioPrompt: 'Passion — a strong interest you genuinely care about. Every great business starts from passion, not from a desire for money alone.' },
            { word: 'authentic', definition: 'Real and true to yourself. Customers and audiences can feel the difference between authentic effort and fake effort.', audioPrompt: 'Authentic — real and true to yourself. Customers and audiences can feel the difference between authentic effort and fake effort.' },
          ],
        },
        {
          type:          'magazine',
          section:       5,
          totalSections: 6,
          headline:      'Started Small, Asked for Help',
          paragraphs: [
            'Mikaila made lemonade in a kitchen. Moziah sewed at his grandmother\'s table. Evan filmed in his living room.',
            'They all asked the adults around them — parents, grandparents, mentors — for help. None of them waited for the perfect setup.',
          ],
          image:        '/explorer-assets/money-business/l15-s5-humble-beginnings.png',
          imageCaption: 'No big offices. No investors at first. Just a kitchen, a sewing table, and a living room.',
          vocab: [
            { word: 'mentor',          definition: 'An experienced person who guides and advises you. Mentors help young entrepreneurs avoid common mistakes.', audioPrompt: 'Mentor — an experienced person who guides and advises you. Mentors help young entrepreneurs avoid common mistakes.' },
            { word: 'resourcefulness', definition: 'Using what you already have to get started, instead of waiting until you have more. Every successful entrepreneur is resourceful.', audioPrompt: 'Resourcefulness — using what you already have to get started, instead of waiting until you have more. Every successful entrepreneur is resourceful.' },
          ],
        },
        {
          type:          'magazine',
          section:       6,
          totalSections: 6,
          headline:      'They Just Started',
          paragraphs: [
            'None of them waited until they felt "ready." Readiness, for entrepreneurs, comes AFTER you start — not before.',
            'You don\'t get ready and then begin. You begin, and readiness follows. Age isn\'t a barrier. The starting point is exactly the same for you.',
          ],
          image:        '/explorer-assets/money-business/l15-s6-just-start.png',
          imageCaption: 'Readiness doesn\'t come first. Action comes first. Readiness builds from the doing.',
          vocab: [
            { word: 'persistence', definition: 'Continuing even when things are hard or slow. All three young entrepreneurs kept going long after most people would have quit.', audioPrompt: 'Persistence — continuing even when things are hard or slow. All three young entrepreneurs kept going long after most people would have quit.' },
            { word: 'action',      definition: 'Actually doing something — not just thinking about it. Entrepreneurs are defined by action, not by ideas alone.', audioPrompt: 'Action — actually doing something, not just thinking about it. Entrepreneurs are defined by action, not by ideas alone.' },
          ],
        },

        // PHASE 3 — INTERACTIVE
        {
          type:          'interactive',
          activityType:  'drag-match',
          instruction:   `Tap each card, then tap which young entrepreneur — or quality they all share — best matches the description!`,
          guideText:     `Mikaila, Moziah, and Evan each have their own unique story — but they also share something fundamental. Can you match each description to the right person or the quality that connects all three?`,
          columnHeaders: [`The Description`, `Who Does This Match?`],
          items: [
            { image: 'l15-game-mikaila.png',    label: `After being stung by bees twice, she got curious, learned how important they are, and built a honey-sweetened lemonade business with part of every sale going to bee conservation.`, correctMatch: 'mikaila',    objectPosition: 'center 50%', matchPhrase: `Mikaila Ulmer! Mikaila started Me & the Bees Lemonade at age 4 — not from a business plan, but from a bee sting and a question. She researched, learned, cared, and acted. By age 11, her product was in a major national grocery chain and she'd secured investment from a national investor TV show. From curiosity to a national brand.` },
            { image: 'l15-game-moziah.png',     label: `At age 9, he couldn't find bow ties he actually liked, so he learned to sew and made his own — eventually designing for a major sports league.`,                                      correctMatch: 'moziah',     objectPosition: 'center 50%', matchPhrase: `Moziah Bridges! Mo's Bows began because Moziah wanted bow ties that didn't exist. His grandmother taught him to sew. He made them himself. He didn't wait for someone else to build what he needed — he learned how to build it. By 13, the brand was earning over $200,000 per year. By 14, he was designing for a major sports league's draft.` },
            { image: 'l15-game-evan.png',       label: `He started reviewing toys online at age 8, just for fun. His enthusiasm attracted millions of followers and became a full income before he finished primary school.`,               correctMatch: 'evan',       objectPosition: 'center 50%', matchPhrase: `Evan of EvanTubeHD! Evan loved toys and started talking about them online — with no business plan and no expectation of income. The authenticity of a real kid who genuinely loved his topic attracted millions of subscribers. By age 10, he was earning a full income. He taught himself editing, analytics, and content strategy — all before secondary school.` },
            { image: 'l15-game-all-three.png',  label: `Started from a genuine personal interest or problem, wasn't afraid to start small, asked adults for help, and kept going when things got hard.`,                                   correctMatch: 'all-three',  objectPosition: 'center 50%', matchPhrase: `All three! Mikaila, Moziah, and Evan all share this foundation. None started with money or connections. All three started with something real — curiosity, frustration, or a genuine love of something. They started small, asked for help, and persisted. None waited until they were ready. They just started.` },
          ],
          buckets: [
            { id: 'mikaila',   label: `🍋 Mikaila`,    color: '#F59E0B' },
            { id: 'moziah',    label: `👔 Moziah`,     color: '#818CF8' },
            { id: 'evan',      label: `🎥 Evan`,       color: '#60A5FA' },
            { id: 'all-three', label: `💡 All Three`,  color: '#34D399' },
          ],
        },

        // PHASE 4 — MASTERY QUIZ
        {
          type:      'quiz',
          guideText: `Quiz time, {name}! Let's see what you've learned about these young entrepreneurs. Answer all 6 questions to earn your Inspired badge!`,
          questions: [
            {
              format:       'multiple-choice',
              question:     `What inspired Mikaila Ulmer to start her lemonade business?`,
              options:      [`She loved drinking lemonade`, `Getting stung by bees, which led her to learn about bee conservation`, `Her parents owned a lemonade company`, `She won a school business contest`],
              correctIndex: 1,
            },
            {
              format:       'multiple-choice',
              question:     `What did Moziah Bridges do when he couldn't find bow ties he liked?`,
              options:      [`Gave up on wearing bow ties`, `Asked his grandmother to teach him to sew, then made his own`, `Asked his parents to buy nicer ones`, `Started wearing regular ties instead`],
              correctIndex: 1,
            },
            {
              format:       'multiple-choice',
              question:     `What do all successful young entrepreneurs have in common?`,
              options:      [`They all had rich parents`, `They all won a competition first`, `They started with genuine interest, weren't afraid to start small, and kept going`, `They all appeared on an investor TV show`],
              correctIndex: 2,
            },
            {
              format:        'true-false',
              question:      `Young people have real entrepreneurial advantages — including fresh thinking and the willingness to try without fear of looking foolish.`,
              correctAnswer: true,
            },
            {
              format:       'fill-blank',
              question:     `The lesson all three young entrepreneurs prove is that age is not a ___ to starting a real business.`,
              options:      [`barrier`, `requirement`, `guarantee`, `reward`],
              correctIndex: 0,
            },
            {
              format:       'multiple-choice',
              question:     `What is the most important thing all three young entrepreneurs had when they started?`,
              options:      [`A large amount of money to invest`, `A formal business licence`, `A genuine personal interest or problem — not just a desire to make money`, `An adult business partner to manage the finances`],
              correctIndex: 2,
            },
          ],
        },

        // PHASE 5 — REAL-WORLD CONNECTION
        {
          type:            'real-world',
          guideText:       `Look up one young entrepreneur who interests you — find out what problem they solved and what obstacle they had to push through. Every starting story is more interesting than the finished result.`,
          familyAdventure: `Research one more young entrepreneur online that isn't in this lesson. Find out: How old were they when they started? What problem did they solve? What obstacle did they overcome? Share what you learned at dinner.`,
          creativePrompt:  `Write a short bio of yourself as if you were already a successful young entrepreneur. What's your business? What problem do you solve? What's your backstory? How old were you when you started? Make it sound real — then work backward and figure out the first real step to make it true.`,
        },

        // PHASE 6 — CELEBRATION
        {
          type:      'celebration',
          xpEarned:  50,
          badge:     'inspired',
          badgeName: `Inspired`,
          message:   `Excellent work, {name}! You now know that age is never a barrier to starting something real. Mikaila, Moziah, and Evan all started from curiosity — not a business degree. You have exactly the same starting point they did. Ace is so proud to share this knowledge with you.`,
        },
      ],
    },
  ],
};

// Log on module load — confirms lesson wired correctly + verifies image assets at runtime
(() => {
  const l    = moneybusiness_explorer_l15_screens.lessons[0];
  const mags = l.screens.filter(s => s.type === 'magazine').length;
  const game = l.screens.find(s => s.type === 'interactive')?.items?.length || 0;
  const quiz = l.screens.find(s => s.type === 'quiz')?.questions?.length || 0;
  console.log(`[LESSON-MONEY-L15] Loaded: "Famous Young Entrepreneurs" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
  Promise.all([
    fetch('/explorer-assets/money-business/l15-s1-bees-lemonade.png',     { method: 'HEAD' }),
    fetch('/explorer-assets/money-business/l15-s2-young-tailor.png',      { method: 'HEAD' }),
    fetch('/explorer-assets/money-business/l15-s3-young-creator.png',     { method: 'HEAD' }),
    fetch('/explorer-assets/money-business/l15-s4-thread-of-passion.png', { method: 'HEAD' }),
    fetch('/explorer-assets/money-business/l15-s5-humble-beginnings.png', { method: 'HEAD' }),
    fetch('/explorer-assets/money-business/l15-s6-just-start.png',        { method: 'HEAD' }),
  ]).then(([r1, r2, r3, r4, r5, r6]) => {
    console.log(`[ASSET-CHECK-MONEY-L15] bees-lemonade: ${r1.ok}, young-tailor: ${r2.ok}, young-creator: ${r3.ok}, thread-of-passion: ${r4.ok}, humble-beginnings: ${r5.ok}, just-start: ${r6.ok}`);
  }).catch(() => {
    console.log('[ASSET-CHECK-MONEY-L15] Could not verify image assets — network check failed');
  });
})();

export default moneybusiness_explorer_l15_screens;
