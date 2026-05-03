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

        // PHASE 2 — MAGAZINE STORY (4 sections)
        {
          type:          'magazine',
          section:       1,
          totalSections: 4,
          headline:      `Problem First, Solution Second`,
          paragraphs: [
            `Most people think about starting a business backwards. They start with "I want to sell X" — a product idea they're excited about — before they've established who actually needs it or why anyone would pay for it. Then they build the thing, launch it, and wonder why nobody buys. The product isn't the problem. The sequence is.`,
            `Smart entrepreneurs flip this. They identify a problem first — a real frustration, gap, or unmet need that real people have — and only then design a solution. The solution is the product. The problem is the foundation that the entire business rests on. Without a strong foundation, even the most polished product collapses.`,
            `This shift in thinking changes everything about how you build a business. Instead of asking "what do I want to make?" you start asking "what do people wish existed?" Instead of hoping to find customers, you start by finding customers — and then build exactly what they told you they need. The product becomes almost inevitable once the problem is clear.`,
          ],
          image:        '/explorer-assets/money-business/l16-magazine-problem-first.png',
          imageCaption: `Problem first, solution second — the sequence that separates successful entrepreneurs from those who build things nobody needs`,
          vocab: [
            { word: `problem-solution fit`, definition: `The match between a real problem people have and the solution a business offers — a strong fit means customers immediately understand why the product is valuable to them.`,             audioPrompt: `Problem-solution fit — the match between a real problem people have and the solution a business offers. A strong fit means customers immediately understand why the product is valuable to them.` },
            { word: `customer discovery`,   definition: `The process of talking to potential customers to understand their real problems before building a product — entrepreneurs use discovery to avoid building things nobody needs.`, audioPrompt: `Customer discovery — the process of talking to potential customers to understand their real problems before building a product. Entrepreneurs use discovery to avoid building things nobody needs.` },
          ],
        },
        {
          type:          'magazine',
          section:       2,
          totalSections: 4,
          headline:      `How Big Is the Problem?`,
          paragraphs: [
            `Not every frustration is a business opportunity. The strongest business problems share three characteristics. First: they're common — lots of people have this problem, not just you. A problem only you experience is a hobby project, not a business. Second: they're annoying — people actively want the problem solved badly enough to pay for a solution. Third: they're unsolved or poorly solved — no one else is doing it well yet.`,
            `When a problem is common, annoying, and unsolved, you've found a golden opportunity. Millions of people sharing a painful, unresolved frustration is a business waiting to be built. The bigger the problem and the more people who share it, the bigger the potential business. The best entrepreneurs spend as much time evaluating problems as they do designing solutions.`,
            `Understanding the size of a problem is also about understanding who has it. A problem shared by millions of primary school students is a different opportunity than the same problem shared by a handful of specialists. Knowing your audience — who exactly has this problem and how much it bothers them — is as important as knowing the problem itself.`,
          ],
          image:        '/explorer-assets/money-business/l16-magazine-how-big.png',
          imageCaption: `The three qualities of a great business problem — common, annoying, and unsolved or poorly solved`,
          vocab: [
            { word: `market size`,   definition: `The total number of people who have a problem or need that a business could address — the larger the market size, the bigger the potential opportunity for the right solution.`,    audioPrompt: `Market size — the total number of people who have a problem or need that a business could address. The larger the market size, the bigger the potential opportunity for the right solution.` },
            { word: `pain point`,    definition: `A specific problem or frustration that customers experience repeatedly — the more painful and common the pain point, the more motivated customers are to pay for something that solves it.`, audioPrompt: `Pain point — a specific problem or frustration that customers experience repeatedly. The more painful and common the pain point, the more motivated customers are to pay for something that solves it.` },
          ],
        },
        {
          type:          'magazine',
          section:       3,
          totalSections: 4,
          headline:      `Talk to Real People`,
          paragraphs: [
            `The biggest mistake new entrepreneurs make is assuming they know what people want without asking. They build a product based on what they think would be useful, launch it, and then discover that real customers don't share their enthusiasm. Assumptions are cheap. Real conversations are expensive — but they're worth every minute.`,
            `Before building anything, go talk to people who might be your customers. Ask open questions: What's the most frustrating part of your day? What do you wish someone would invent? What do you currently spend money on that you genuinely hate spending money on? What problem do you keep running into that nobody seems to have fixed? Listen more than you talk. What you hear will surprise you.`,
            `Customer research is not a one-time step — it's an ongoing practice. Even after you've built something, the best entrepreneurs keep talking to customers. Markets change. Problems evolve. The businesses that listen continuously are the ones that stay relevant and keep growing. The ones that stop listening eventually lose touch with the people they were built to serve.`,
          ],
          image:        '/explorer-assets/money-business/l16-magazine-talk-to-people.png',
          imageCaption: `Talk to real people — listening to potential customers reveals what they actually need, not what you assumed they need`,
          vocab: [
            { word: `assumption`,  definition: `Believing something is true without verifying it — in business, untested assumptions about what customers want are one of the most common reasons new products fail.`,                             audioPrompt: `Assumption — believing something is true without verifying it. In business, untested assumptions about what customers want are one of the most common reasons new products fail.` },
            { word: `feedback`,    definition: `Information from real customers about how well a product or service meets their needs — honest feedback is more valuable than praise, because it shows where improvement is needed.`, audioPrompt: `Feedback — information from real customers about how well a product or service meets their needs. Honest feedback is more valuable than praise, because it shows where improvement is needed.` },
          ],
        },
        {
          type:          'magazine',
          section:       4,
          totalSections: 4,
          headline:      `Your Unique Angle`,
          paragraphs: [
            `Once you've found a strong problem, the next question is: why would anyone choose your solution over everything else that exists? This is your unique value proposition — the clear, compelling reason customers should pick you instead of a competitor, an existing product, or simply doing nothing.`,
            `Your unique angle might be speed: you solve the problem faster than anything else. It might be price: you make the solution affordable for people who couldn't afford it before. It might be quality: you solve it better than anyone currently does. Or it might be specificity: you solve it for a particular group that everyone else has overlooked. Any of these can be a powerful differentiator.`,
            `The strongest businesses have unique value propositions that are difficult to copy quickly. If your only advantage is "we're cheaper," a competitor can match that overnight. If your advantage is deep expertise, a loyal community, or a solution designed specifically for an underserved group — those take years to replicate. Build something that's genuinely yours.`,
          ],
          image:        '/explorer-assets/money-business/l16-magazine-unique-angle.png',
          imageCaption: `Your unique angle — the clear reason customers should choose your solution over every other alternative`,
          vocab: [
            { word: `unique value proposition`, definition: `The specific reason customers should choose your business over every other option — your answer to "why you?" It must be clear, true, and meaningfully different from what competitors offer.`, audioPrompt: `Unique value proposition — the specific reason customers should choose your business over every other option. Your answer to "why you?" It must be clear, true, and meaningfully different from what competitors offer.` },
            { word: `differentiator`,           definition: `What makes a product or business meaningfully different from its competitors — a strong differentiator is hard to copy and gives customers a clear reason to choose you.`,           audioPrompt: `Differentiator — what makes a product or business meaningfully different from its competitors. A strong differentiator is hard to copy and gives customers a clear reason to choose you.` },
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
            { image: 'l16-game-keys.png',    label: `Millions of people lose their keys every day and nobody has invented a reliable, affordable way to find them quickly.`,                              correctMatch: 'strong-problem', objectPosition: 'center 50%', matchPhrase: `Strong business problem! This checks all three boxes: common (millions of people), annoying (nobody wants to waste time searching), and unsolved or poorly solved (existing solutions are expensive or unreliable). When you find a problem that millions share, are frustrated by, and haven't found a great answer to — that's a golden opportunity worth building around.` },
            { image: 'l16-game-sock-drawer.png', label: `You personally find it frustrating that your sock drawer gets messy, but no one else you've talked to cares about this.`,                    correctMatch: 'weak-problem',   objectPosition: 'center 50%', matchPhrase: `Weak business problem! A problem only you experience — or that only you care about deeply — is a very small market. Great business problems are widely shared. Before building any solution, always ask: do other people have this problem, and does it bother them enough to pay for a fix? If you're the only one who cares, you'd have very few customers.` },
            { image: 'l16-game-homework.png', label: `Almost every student struggles to organise their homework and assignments, and most existing tools are confusing or designed for adults.`,       correctMatch: 'strong-problem', objectPosition: 'center 50%', matchPhrase: `Strong business problem! Common: nearly all students face it. Annoying: disorganisation causes real stress and missed deadlines. Poorly solved for this specific group: existing tools weren't built with students in mind. This trifecta — common, annoying, and unsolved for a specific audience — is exactly what makes a problem worth building a business around.` },
            { image: 'l16-game-solved.png',  label: `A problem that five excellent, highly-rated products already solve perfectly, leaving nothing to improve and no unhappy customers.`,              correctMatch: 'weak-problem',   objectPosition: 'center 50%', matchPhrase: `Weak business problem! If a problem is already solved brilliantly by products that customers genuinely love, there's very little room to enter. Your unique value proposition needs to be compelling — and if customers are fully satisfied, it's extremely hard to give them a reason to switch. Look for frustrated customers, not satisfied ones.` },
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
    fetch('/explorer-assets/money-business/l16-magazine-problem-first.png', { method: 'HEAD' }),
    fetch('/explorer-assets/money-business/l16-magazine-how-big.png',       { method: 'HEAD' }),
    fetch('/explorer-assets/money-business/l16-magazine-talk-to-people.png', { method: 'HEAD' }),
    fetch('/explorer-assets/money-business/l16-magazine-unique-angle.png',  { method: 'HEAD' }),
  ]).then(([r1, r2, r3, r4]) => {
    console.log(`[ASSET-CHECK-MONEY-L16] problem-first: ${r1.ok}, how-big: ${r2.ok}, talk-to-people: ${r3.ok}, unique-angle: ${r4.ok}`);
  }).catch(() => {
    console.log('[ASSET-CHECK-MONEY-L16] Could not verify image assets — network check failed');
  });
})();

export default moneybusiness_explorer_l16_screens;
