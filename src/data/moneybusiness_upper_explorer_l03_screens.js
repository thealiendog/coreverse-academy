// ─────────────────────────────────────────────────────────────────────────────
// MONEY & BUSINESS UE  |  L03 — Building a Real Business Plan
// Age band : upper_explorers (9–10)   Guide: ace
// Standards: C3 D2.Eco.1.3-5 — Benefits and costs of decisions;
//            Entrepreneurship education frameworks
// CALIBRATED: UE spec v1.1 — real domain terms, em-dashes sparing
// SCOPE: 4 concepts — what a business plan is, the four key questions,
//        how money flows through a business, why most businesses fail
// VERSION: v1
// ─────────────────────────────────────────────────────────────────────────────

const MONEY_UE_L03 = {
  ageBand: `upper_explorers`,
  subjectId: `money`,
  guide: `ace`,

  lessons: [
    {
      id: `mb-9-10-03`,
      title: `Building a Real Business Plan`,
      duration: 18,
      xpReward: 75,
      badge: `business-builder`,
      badgeName: `Business Builder`,

      screens: [
        {
          id: `l03-welcome`,
          type: `welcome`,
          guideText: `Hey {name}, Ace here. Today we look at how REAL businesses get built. Not "make a lemonade stand" advice. Actual STRUCTURE that successful entrepreneurs use. Whether you start a business as a kid, a teenager, or an adult, the same four questions matter. Get those right, and you have a real shot. Get them wrong, and even great products fail. Let's go.`,
          headline: `Building a Real Business Plan`,
          subtitle: `The four questions every business has to answer to survive`,
          visual: `/ue-assets/money/l03-welcome.webp`,
        },

        {
          id: `l03-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `What a Business Plan Actually Is`,
          paragraphs: [
            `A BUSINESS PLAN is a document that explains what a business will DO, who it will SERVE, how it will MAKE MONEY, and how it will OPERATE. Real business plans range from a single page (for a side hustle) to hundreds of pages (for huge companies seeking investment). What matters isn't length. What matters is whether the plan honestly answers the FOUR BIG QUESTIONS every business has to answer.`,
            `Even billion-dollar companies started with simple answers to these four questions. Apple started with a written plan to "build a computer for people, not just engineers." Patagonia started with a plan to "make better outdoor gear without harming the planet." Your plan doesn't have to be perfect. It has to be CLEAR and HONEST. The act of writing it forces you to think through what you're actually trying to do, instead of just having a vague idea in your head.`,
          ],
          image: `/ue-assets/money/l03-s1-what-is.webp`,
          imageCaption: `A business plan answers four questions clearly. Length varies; clarity matters.`,
          vocab: [
            {
              word: `business plan`,
              definition: `A document that explains what a business will do, who it serves, how it makes money, and how it operates. Forces honest thinking about whether the idea actually works.`,
              audioPrompt: `A business plan is a document that explains what a business will do, who it serves, how it makes money, and how it operates, {name}. Real plans range from one page (for a side hustle) to hundreds of pages (for big companies). What matters isn't length. It's whether the plan honestly answers the questions every business has to answer. The act of writing it forces clear thinking. Apple, Patagonia, and almost every successful company started with a simple plan. Then they refined it as they learned.`,
            },
            {
              word: `market research`,
              definition: `The process of gathering information about potential customers, competitors, and the industry before starting or growing a business. Helps test whether an idea can actually work.`,
              audioPrompt: `Market research is the process of gathering information about potential customers, competitors, and the industry before starting or growing a business, {name}. Before spending time and money building a product, smart entrepreneurs find out if real people actually want it. They interview potential customers. Study competitors. Look at similar businesses that have already tried this. Market research helps test whether a business idea can actually work before you invest everything into it. Many businesses fail because founders skipped this step and built something no one wanted.`,
            },
          ],
        },

        {
          id: `l03-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `The Four Big Questions`,
          paragraphs: [
            `QUESTION 1: WHAT PROBLEM ARE YOU SOLVING? Every successful business solves a real problem for real people. Uber solved "I can't easily get a ride." Netflix solved "I want to watch movies without going to a store." Even small businesses solve problems. A dog-walking business solves "I don't have time to walk my dog." If you can't clearly state the problem, the business probably won't work. Vague answers like "I want to make money" don't count. The problem has to be SPECIFIC and REAL.`,
            `QUESTION 2: WHO IS YOUR CUSTOMER? Not "everyone." Real businesses know who they serve. A dog-walking service in Los Angeles serves "busy dog owners in West LA who work long hours." A homemade jewelry business serves "teenage girls who like vintage style and shop on Etsy." The more SPECIFIC your customer is, the easier to find them and serve them well. QUESTION 3: HOW WILL YOU MAKE MONEY? What's your PRICE and how often will customers buy? QUESTION 4: WHAT WILL IT COST YOU? Materials, time, advertising, anything else. The DIFFERENCE between money in (revenue) and money out (costs) is your PROFIT. If costs are higher than revenue, you're losing money, and you can't run the business long.`,
          ],
          image: `/ue-assets/money/l03-s2-four-questions.webp`,
          imageCaption: `Problem. Customer. Revenue. Costs. The four questions every business must answer.`,
          vocab: [
            {
              word: `revenue`,
              definition: `Money coming INTO a business from customers. Different from profit, which is what's left after costs are subtracted from revenue.`,
              audioPrompt: `Revenue is money coming into a business from customers, {name}. If you sell 100 cookies at 2 dollars each, your revenue is 200 dollars. Revenue is not the same as profit. Profit is what's left AFTER you subtract all your costs from your revenue. If those 100 cookies cost you 150 dollars to make (ingredients, packaging, time), your profit is 50 dollars. Many people use "revenue" and "profit" interchangeably, but they're very different. A business can have huge revenue and still lose money if costs are even higher.`,
            },
            {
              word: `cost`,
              definition: `Money going out of a business: materials, wages, rent, advertising, and anything else needed to operate. Profit is what's left after subtracting all costs from revenue.`,
              audioPrompt: `A cost is money going out of a business, {name}. Costs include materials, wages, rent, advertising, equipment, and anything else needed to operate. There are fixed costs (same every month, like rent) and variable costs (change based on production, like materials). To calculate profit, you subtract all costs from revenue. If your costs are higher than your revenue, you have a loss. Entrepreneurs track costs carefully, because small increases over time can turn profit into a loss.`,
            },
          ],
        },

        {
          id: `l03-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `How Money Flows Through a Business`,
          paragraphs: [
            `Money in a business flows through a clear pattern. CUSTOMERS pay the business (REVENUE comes in). The business pays its COSTS: materials to make products, rent, employees, advertising, taxes, and anything else needed to operate. What's LEFT after all costs is PROFIT. If revenue is bigger than costs, the business makes profit. If costs are bigger than revenue, the business has a LOSS.`,
            `Most businesses don't make a profit in their first year. Sometimes not for several years. This is called the "BURN PHASE." The business is spending money to build customers and systems before profits arrive. Investors sometimes fund businesses through their burn phase. But every business that survives long-term eventually has to make a real profit. A business that loses money forever isn't a business. It's an expensive hobby. Smart entrepreneurs know exactly how their money flows. They watch their REVENUE, COSTS, and PROFIT every single month.`,
          ],
          image: `/ue-assets/money/l03-s3-money-flow.webp`,
          imageCaption: `Revenue in. Costs out. Profit (or loss) is what's left.`,
          vocab: [
            {
              word: `profit`,
              definition: `What's left after subtracting all costs from revenue. Profit is what makes a business sustainable. No profit (for long enough) means the business eventually fails.`,
              audioPrompt: `Profit is what's left after subtracting all costs from revenue, {name}. If a business has 10,000 dollars in revenue and 7,000 dollars in costs, the profit is 3,000 dollars. Profit is what makes a business sustainable. A business with no profit for too long eventually runs out of money and closes. Some new businesses lose money for the first year or two, called the burn phase. They're spending to build customers and systems. But eventually every successful business has to make real profit. Smart entrepreneurs watch their profit every month.`,
            },
            {
              word: `loss`,
              definition: `What happens when a business's costs are higher than its revenue. Short-term losses can be normal for new businesses; long-term losses mean the business cannot survive.`,
              audioPrompt: `A loss happens when a business's costs are higher than its revenue, {name}. If a business earns 8,000 dollars in revenue but spends 10,000 dollars in costs, it has a 2,000 dollar loss. Short-term losses can be normal. New businesses often lose money early (called the burn phase) while building customers and systems. Long-term losses are dangerous. A business that loses money for too long will eventually run out of money and close. Every business must find a path to profit to survive.`,
            },
          ],
        },

        {
          id: `l03-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Why Most New Businesses Fail`,
          paragraphs: [
            `Here's a sobering fact. About 20% of new U.S. businesses fail in their first year. About 50% fail within five years. About 65% fail within 10 years. Why? Some of the most common reasons trace back to skipping the four questions. The business solved a problem nobody really had. The business couldn't find enough customers. The business priced things too low to cover costs. The business ran out of money before profits started.`,
            `Successful entrepreneurs learn early to be HONEST with themselves about the four questions. They test ideas SMALL before going big. They listen to actual customers, not just their own assumptions. They watch their numbers closely. They CHANGE the plan when something isn't working. Many successful businesses look NOTHING like the original plan, because the founders kept adjusting based on what they learned. The plan isn't a script you have to follow. It's a starting point for honest thinking. Ace's note: starting a business isn't about being a genius. It's about being honest, patient, and willing to adjust.`,
          ],
          image: `/ue-assets/money/l03-s4-failure.webp`,
          imageCaption: `Honest answers. Real customer feedback. Willingness to adjust. The pattern of survival.`,
          vocab: [
            {
              word: `entrepreneur`,
              definition: `A person who starts a business. Entrepreneurs identify problems, design solutions, take risks, and build organizations to deliver value to customers.`,
              audioPrompt: `An entrepreneur is a person who starts a business, {name}. Entrepreneurs identify problems people have, design solutions to those problems, take risks (because most new businesses fail), and build organizations to deliver value to customers. Some entrepreneurs start small with a side hustle. Some start big with ambitious goals. Either way, they share the willingness to act on their own ideas rather than only working for others. Throughout history, entrepreneurs have created most of the products, services, and jobs that shape modern life.`,
            },
            {
              word: `startup`,
              definition: `A newly launched business, usually built around a new idea or product. Most startups fail, but those that succeed often grow quickly. Starting small and testing ideas beats going big immediately.`,
              audioPrompt: `A startup is a newly launched business, {name}. The word usually refers to companies with a new idea, product, or approach trying to grow quickly. Most startups fail within the first few years. The ones that survive usually succeed because they were honest about the four big questions: problem, customer, revenue, costs. Famous startups include companies like Apple, Google, and Amazon, which started small and grew. Starting small, testing ideas with real customers, and adjusting based on what you learn is the pattern behind most successful startups.`,
            },
          ],
        },

        {
          id: `l03-game`,
          type: `interactive`,
          format: `investigation`,
          guideText: `Investigation time, {name}. Four kid-led "business ideas." For each one, decide what's MISSING from the business plan: NO CLEAR PROBLEM (it's not solving anything specific), NO CLEAR CUSTOMER (vague about who will buy), or NO CLEAR MONEY MATH (revenue won't cover costs)?\n\nOne is sneakier than it looks.`,
          options: [
            { id: `no-problem`,    label: `No Clear Problem`,    color: `#F87171`, description: `The business isn't solving a real, specific problem for anyone.` },
            { id: `no-customer`,   label: `No Clear Customer`,   color: `#FBBF24`, description: `The business doesn't know WHO it's serving. "Everyone" usually means "no one."` },
            { id: `no-math`,       label: `No Clear Money Math`, color: `#A78BFA`, description: `Revenue won't cover the costs of running the business.` },
          ],
          cases: [
            {
              id: `case-1`,
              caseTitle: `Idea #1`,
              clues: [
                { text: `"I want to start a dog-walking business in my neighborhood."` },
                { text: `"I'll charge $5 per walk and walk 5 dogs at the same time, so each session brings in $25."` },
                { text: `"My main customers are busy adults on my block who work all day and don't have time to walk their dogs."` },
              ],
              correctAnswer: `no-math`,
              realWorldExample: `Pricing too low is one of the most common new-business mistakes.`,
              explanation: `Tricky because this plan answers questions 1, 2, and 4 well. Clear problem (dogs need walking), clear customer (busy adults on the block). BUT: walking 5 dogs at the SAME TIME safely is very hard, and $5 per walk is too low. Real dog walkers charge $20-30 per walk. The math doesn't work. This is the most common new-business mistake: undercharging. Lesson: even a good idea fails if the numbers don't add up.`,
            },
            {
              id: `case-2`,
              caseTitle: `Idea #2`,
              clues: [
                { text: `"I want to start a business making the world a better place."` },
                { text: `"My product will be amazing and will help people everywhere."` },
                { text: `"Everyone will buy it. We'll sell millions."` },
              ],
              correctAnswer: `no-problem`,
              realWorldExample: `Vague "make the world better" plans without specifics fail constantly.`,
              explanation: `Sounds great but says nothing concrete. What problem? What product? "Make the world better" isn't a problem statement. "Help people everywhere" isn't a customer. Without specifics, this isn't a business plan. It's a wish. Pure no-clear-problem. Real entrepreneurs name a specific problem in plain language.`,
            },
            {
              id: `case-3`,
              caseTitle: `Idea #3`,
              clues: [
                { text: `"I'll sell homemade cookies. They take $2 of ingredients each and I'll sell them for $4. Each cookie makes $2 profit."` },
                { text: `"I'll sell them to anyone. Kids, adults, families, businesses, anyone."` },
                { text: `"I haven't really figured out where I'll find these customers."` },
              ],
              correctAnswer: `no-customer`,
              realWorldExample: `Targeting "everyone" is the same as targeting no one.`,
              explanation: `Clear problem (people like cookies). Clear math ($4 - $2 = $2 profit). But "anyone" is not a customer plan. Where will buyers come from? School? Farmers market? Online? Without knowing the specific customer, the business can't find them or serve them well. Pure no-clear-customer.`,
            },
            {
              id: `case-4`,
              caseTitle: `Idea #4 — The Tricky One`,
              clues: [
                { text: `"I'll start a YouTube channel reviewing every kind of pizza in town."` },
                { text: `"My audience will be local people who like pizza and want recommendations."` },
                { text: `"I'll make money from YouTube ads after I hit 1,000 subscribers and 4,000 watch hours."` },
              ],
              correctAnswer: `no-math`,
              realWorldExample: `Many content creators don't realize how slow ad revenue actually is.`,
              explanation: `Tricky because it LOOKS solid. Clear problem (pizza recommendations), clear customer (local pizza fans), clear revenue plan (YouTube ads). The PROBLEM is the math. YouTube ad revenue is tiny for small channels. Most channels with 1,000 subscribers make less than $50 per MONTH. Meanwhile, the creator has to BUY pizza for every review (costs add up fast). The math doesn't work for years, if ever. Lesson: "I'll make money from ads" usually isn't enough of a revenue plan. Real ad revenue is much smaller than people think, and takes a long time. Pure no-clear-money-math.`,
            },
          ],
        },

        {
          id: `l03-quiz`,
          type: `quiz`,
          guideText: `Let's see what stuck, {name}.`,
          questions: [
            { id: `l03-q1`, format: `multiple-choice`,
              question: `What is a BUSINESS PLAN?`,
              options: [
                `Just a fancy document`,
                `A document explaining what the business does, who it serves, how it makes money, and how it operates`,
                `A contract`,
                `A marketing video`,
              ],
              correctIndex: 1,
              explanation: `Business plans range from one page to hundreds, but they all answer the same key questions. Length varies. What matters is whether the plan is clear and honest. Even big companies started with simple plans.` },

            { id: `l03-q2`, format: `multiple-choice`,
              question: `What's the FIRST big question every business has to answer?`,
              options: [
                `How can we get rich?`,
                `What specific problem are we solving, for real people?`,
                `What's our logo?`,
                `Who's the boss?`,
              ],
              correctIndex: 1,
              explanation: `Every successful business solves a real, specific problem. Uber solved "I can't easily get a ride." Netflix solved "I want to watch movies at home." If you can't clearly state the problem, the business probably won't work.` },

            { id: `l03-q3`, format: `multiple-choice`,
              question: `Who should your CUSTOMER be?`,
              options: [
                `Everyone — the bigger the market, the better`,
                `A specific group with specific needs you can actually serve`,
                `Only rich people`,
                `Only your friends`,
              ],
              correctIndex: 1,
              explanation: `"Everyone" is the same as "no one." Real businesses know exactly who they serve. The more specific the customer, the easier it is to find them, talk to them, and meet their needs. Vague customer targets lead to vague results.` },

            { id: `l03-q4`, format: `multiple-choice`,
              question: `What's the difference between REVENUE and PROFIT?`,
              options: [
                `They're the same`,
                `Revenue is money coming IN. Profit is what's LEFT after all costs are subtracted from revenue.`,
                `Profit is bigger`,
                `Revenue is for customers`,
              ],
              correctIndex: 1,
              explanation: `Revenue is total money in. Profit is what's left after subtracting costs (materials, time, advertising, etc.). A business with $100,000 in revenue and $110,000 in costs has NEGATIVE profit (loss). Revenue alone doesn't tell you if a business is healthy.` },

            { id: `l03-q5`, format: `true-false`,
              question: `True or false: About half of new businesses fail within 5 years.`,
              correctAnswer: true,
              explanation: `True. Approximately 50% of new U.S. businesses fail within 5 years. About 65% fail within 10 years. The most common reasons: solving a problem nobody really had, not finding enough customers, pricing too low, running out of money. The four big questions help avoid these mistakes.` },

            { id: `l03-q6`, format: `multiple-choice`,
              question: `What's an ENTREPRENEUR?`,
              options: [
                `Just a CEO`,
                `A person who starts a business — identifying problems, designing solutions, taking risks, building organizations`,
                `A type of investor`,
                `Anyone with a job`,
              ],
              correctIndex: 1,
              explanation: `Entrepreneurs start businesses. They identify problems, design solutions, take risks, and build organizations to deliver value. Some entrepreneurs start tiny side hustles. Some start huge companies. Either way, they share the willingness to act on their own ideas.` },

            { id: `l03-q7`, format: `multiple-choice`,
              question: `What is a "BURN PHASE"?`,
              options: [
                `When a business is burning down`,
                `The early period when a business is losing money while building customers and systems`,
                `Summer`,
                `A bad time`,
              ],
              correctIndex: 1,
              explanation: `Most new businesses don't make profit in year one. They "burn" through money setting up. Eventually they need to become profitable, but the burn phase is normal. Investors sometimes fund businesses through this stage.` },

            { id: `l03-q8`, format: `multiple-choice`,
              question: `What's the COMMON pattern among entrepreneurs who SUCCEED?`,
              options: [
                `They're geniuses`,
                `They're honest with themselves about the four questions, test ideas small, listen to real customers, watch their numbers, and adjust the plan when needed`,
                `They're lucky`,
                `They follow rigid plans`,
              ],
              correctIndex: 1,
              explanation: `Success comes from honest thinking and willingness to adjust. Many successful businesses look nothing like the original plan because the founders kept learning. Starting a business isn't about being a genius. It's about being honest, patient, and adaptable.` },
          ],
        },

        {
          id: `l03-reflection`,
          type: `reflection`,
          guideText: `Before we wrap, {name}, pick ONE question and actually answer it. Your response gets saved, and I'll remember it next time we talk.`,
          prompts: [
            { id: `r1`, text: `Imagine starting a business as a kid. What's a REAL problem (specific, not vague) that people in your neighborhood or family might pay you to help with?` },
            { id: `r2`, text: `For that business: who EXACTLY would your customers be? Where would you find them?` },
            { id: `r3`, text: `For that business: what would your costs be? What would you charge? Would the math actually work?` },
            { id: `r4`, text: `Half of businesses fail in 5 years. Does that scare you or motivate you? Why?` },
          ],
        },

        {
          id: `l03-realworld`,
          type: `real-world`,
          guideText: `Whether you ever start a business or not, understanding how businesses work changes how you see the world. The grocery store, the streaming service, the school you attend, the app on your phone — all of them are businesses or organizations answering the same four questions. When you understand the questions, you understand why things cost what they cost, why some businesses last and others don't, and how big economies actually work. Ace's bonus: many of you reading this WILL start a business someday. The earlier you start thinking like this, the better you'll do.`,
          familyAdventure: `Family Business Plan Challenge. As a family, pick a small business idea that could work for kids. (Dog walking, lawn mowing, lemonade, art prints, tutoring, anything.) Together, answer the FOUR QUESTIONS for it. Be honest. Would the math actually work? Where would real customers come from? This is the kind of thinking real entrepreneurs do all the time.`,
          creativePrompt: {
            intro: `Imagine you're 18 and pitching your first business idea to your parents (who might invest a little money to help you start). Write your pitch.`,
            floor: `Write at least 5 sentences. Cover your business idea, the problem it solves, your customer, and how you'll make money.`,
            stretch: `Write 8 to 10 sentences. Answer all four big questions clearly: problem, customer, revenue, costs. Be honest about risks.`,
            open: `Write as much as you want. Build a full pitch. Cover the four questions in detail. Show why you're the right person to do this. Address objections your parents might have. Be honest about what could go wrong and how you'd handle it.`,
            frames: [
              `Mom and Dad, I want to start a business.`,
              `The problem I'm solving is ___.`,
              `My customers will be ___.`,
              `I'll make money by ___.`,
              `My costs will be ___, and here's how the math works: ___.`,
            ],
          },
        },

        {
          id: `l03-celebration`,
          type: `celebration`,
          message: `Great work, {name}. You can now define a business plan, name the four big questions, explain how money flows through a business, and understand why most new businesses fail (and how to give yours a better shot). Next lesson: once you have a real business, how do you actually find customers? MARKETING AND BRANDING BASICS. — Ace.`,
          badge: `business-builder`,
          badgeName: `Business Builder`,
          xpEarned: 75,
        },
      ],
    },
  ],
};

export default MONEY_UE_L03;

// ─── Dev asset check ──────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const screens = MONEY_UE_L03.lessons[0].screens;
  const mags = screens.filter(s => s.type === 'magazine').length;
  const game = screens.find(s => s.type === 'interactive')?.cases?.length ?? 0;
  const quiz = screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  const refl = screens.find(s => s.type === 'reflection')?.prompts?.length ?? 0;
  const totalVocab = screens.filter(s => s.type === 'magazine').reduce((sum, s) => sum + (s.vocab?.length || 0), 0);
  console.log(`[LESSON-MONEY-UE-L03 v1] Loaded with ${mags} magazine sections, ${totalVocab} vocab terms, ${game} game cases, ${quiz} quiz Qs, ${refl} reflection prompts`);
}
