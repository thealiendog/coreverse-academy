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

        // PHASE 2 — MAGAZINE STORY (4 sections)
        {
          type:          'magazine',
          section:       1,
          totalSections: 4,
          headline:      `Mikaila Ulmer — Me & the Bees Lemonade`,
          paragraphs: [
            `Mikaila Ulmer started her lemonade business at age 4 after getting stung by bees twice in one week. Instead of becoming afraid of bees, she got curious. She researched and learned how critical bees are to the food supply — pollinating the plants that produce a huge proportion of what humans eat — and decided to do something about it.`,
            `Mikaila created a lemonade sweetened with honey, called Me & the Bees Lemonade, with part of every sale donated to bee conservation organisations. The product wasn't just a drink; it was a mission. By age 11, she had secured a deal with a major national grocery chain and received a $60,000 investment from an investor TV show.`,
            `What made Mikaila's business remarkable wasn't just the early success — it was the origin. She didn't start with a business plan. She started with a bee sting and a question: why are bees important? Curiosity, not a strategy, was the starting point. The business grew from genuinely caring about something. That combination of mission and product is what made her story compelling to customers and investors alike.`,
          ],
          image:        '/explorer-assets/money-business/l15-magazine-mikaila.png',
          imageCaption: `Mikaila Ulmer — turned a bee sting into a mission, a lemonade brand, and a national distribution deal by age 11`,
          vocab: [
            { word: `mission`,      definition: `The core purpose behind a business beyond making money — a mission-driven business is built around solving a problem or serving a cause its founders genuinely believe in.`,              audioPrompt: `Mission — the core purpose behind a business beyond making money. A mission-driven business is built around solving a problem or serving a cause its founders genuinely believe in.` },
            { word: `conservation`, definition: `The effort to protect and preserve natural environments, species, or resources — Mikaila's lemonade supported bee conservation by donating part of every sale to organisations that protect bees.`, audioPrompt: `Conservation — the effort to protect and preserve natural environments, species, or resources. Mikaila's lemonade supported bee conservation by donating part of every sale to organisations that protect bees.` },
          ],
        },
        {
          type:          'magazine',
          section:       2,
          totalSections: 4,
          headline:      `Moziah Bridges — Mo's Bows`,
          paragraphs: [
            `At age 9, Moziah Bridges was frustrated that he couldn't find bow ties he actually liked. Most were plain, predictable, and nothing like his personal style. So he asked his grandmother to teach him to sew — and he made his own. Mo's Bows was born from that simple act of solving his own problem rather than accepting that what he wanted didn't exist.`,
            `By age 13, Moziah was earning over $200,000 per year from Mo's Bows. He appeared on an investor TV show at 13, and at 14, a major professional sports league signed him to design bow ties for their draft event — a remarkable achievement at any age, let alone his. What started as a sewing lesson with his grandmother had become a nationally recognised brand.`,
            `Moziah's story illustrates one of the most powerful entrepreneurial principles: the best business ideas often come from solving your own problem. If you need something and it doesn't exist, there's a good chance other people need it too. Instead of giving up and settling for what was available, Moziah built exactly what he wanted — and discovered that others wanted it as well.`,
          ],
          image:        '/explorer-assets/money-business/l15-magazine-moziah.png',
          imageCaption: `Moziah Bridges — learned to sew at age 9 to make bow ties he actually liked, and built a nationally recognised brand from there`,
          vocab: [
            { word: `brand`,   definition: `The overall identity of a business — its name, visual style, reputation, and the feeling it creates in customers' minds. A strong brand makes a business instantly recognisable and memorable.`, audioPrompt: `Brand — the overall identity of a business, including its name, visual style, reputation, and the feeling it creates in customers' minds. A strong brand makes a business instantly recognisable and memorable.` },
            { word: `product`, definition: `Something created and sold to customers — a bow tie, a drink, an app. Products can be made once and sold repeatedly, which is what makes them powerful for business growth.`,                    audioPrompt: `Product — something created and sold to customers. A bow tie, a drink, an app. Products can be made once and sold repeatedly, which is what makes them powerful for business growth.` },
          ],
        },
        {
          type:          'magazine',
          section:       3,
          totalSections: 4,
          headline:      `Evan of EvanTubeHD`,
          paragraphs: [
            `Evan started reviewing toys on his video channel at age 8 — just for fun. He liked toys, he liked talking about them, and his parents helped him film and upload the videos. His honest, enthusiastic reviews attracted millions of subscribers who trusted his opinions precisely because he was a real kid who genuinely loved what he reviewed.`,
            `By age 10, Evan's channel was earning more than most adult salaries. Toy companies reached out to him. Brands sought his opinion. He taught himself video editing, analytics, and how to read what his audience wanted — skills that most adults haven't developed — all before finishing primary school. The channel grew because the passion was real.`,
            `Evan's story is a reminder that in the digital age, a genuine interest shared publicly can become a business. He didn't start EvanTubeHD to make money — he started it because he loved toys. The business grew from the authenticity. When you do something you genuinely care about, you put in the effort naturally, and audiences can feel the difference between passion and performance.`,
          ],
          image:        '/explorer-assets/money-business/l15-magazine-evan.png',
          imageCaption: `Evan of EvanTubeHD — started reviewing toys at age 8 just for fun, and by age 10 was earning more than most adult salaries`,
          vocab: [
            { word: `creator`,      definition: `Someone who produces original content — videos, writing, art, music — and builds an audience around it. Digital creators can earn income through advertising, sponsorships, and products.`, audioPrompt: `Creator — someone who produces original content, including videos, writing, art, and music, and builds an audience around it. Digital creators can earn income through advertising, sponsorships, and products.` },
            { word: `authenticity`, definition: `Being genuine and true to yourself — audiences respond to authenticity because it builds trust. Creators and businesses that are authentic tend to build more loyal followings.`,            audioPrompt: `Authenticity — being genuine and true to yourself. Audiences respond to authenticity because it builds trust. Creators and businesses that are authentic tend to build more loyal followings.` },
          ],
        },
        {
          type:          'magazine',
          section:       4,
          totalSections: 4,
          headline:      `What They Have in Common`,
          paragraphs: [
            `Every young entrepreneur in this lesson started with a genuine interest or problem — not just a desire to make money. Mikaila started with curiosity about bees. Moziah started with frustration over bow ties. Evan started with a love of toys. None of them started by asking "how do I get rich?" They started by caring about something specific. The business grew from the caring.`,
            `They all started small. Mikaila's lemonade was made in a kitchen. Moziah's bow ties were hand-sewn by a 9-year-old learning from his grandmother. Evan filmed videos in his house. None of them waited for the perfect setup, the right time, or enough money. They used what they had and started where they were.`,
            `They all asked for help from adults around them — parents, grandparents, mentors. They all kept going when things got hard. And none of them waited until they felt "ready." Readiness, for entrepreneurs, usually comes after you start — not before. You don't get ready and then begin. You begin, and readiness follows.`,
          ],
          image:        '/explorer-assets/money-business/l15-magazine-what-they-share.png',
          imageCaption: `What they share — genuine interest, starting small, asking for help, and never waiting to feel "ready" before beginning`,
          vocab: [
            { word: `mentor`,      definition: `An experienced person who advises and guides someone less experienced — young entrepreneurs often succeed partly because they seek out mentors who help them avoid common mistakes.`,                  audioPrompt: `Mentor — an experienced person who advises and guides someone less experienced. Young entrepreneurs often succeed partly because they seek out mentors who help them avoid common mistakes.` },
            { word: `persistence`, definition: `Continuing to work toward a goal despite difficulty, setbacks, and slow progress — all three young entrepreneurs in this lesson showed persistence in building their businesses over time.`, audioPrompt: `Persistence — continuing to work toward a goal despite difficulty, setbacks, and slow progress. All three young entrepreneurs in this lesson showed persistence in building their businesses over time.` },
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
    fetch('/explorer-assets/money-business/l15-magazine-mikaila.png',        { method: 'HEAD' }),
    fetch('/explorer-assets/money-business/l15-magazine-moziah.png',         { method: 'HEAD' }),
    fetch('/explorer-assets/money-business/l15-magazine-evan.png',           { method: 'HEAD' }),
    fetch('/explorer-assets/money-business/l15-magazine-what-they-share.png', { method: 'HEAD' }),
  ]).then(([r1, r2, r3, r4]) => {
    console.log(`[ASSET-CHECK-MONEY-L15] mikaila: ${r1.ok}, moziah: ${r2.ok}, evan: ${r3.ok}, what-they-share: ${r4.ok}`);
  }).catch(() => {
    console.log('[ASSET-CHECK-MONEY-L15] Could not verify image assets — network check failed');
  });
})();

export default moneybusiness_explorer_l15_screens;
