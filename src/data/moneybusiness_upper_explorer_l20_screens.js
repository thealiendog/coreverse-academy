// ─────────────────────────────────────────────────────────────────────────────
// MONEY & BUSINESS UE  |  L20 — My 5-Year Financial Plan  (CAPSTONE)
// Age band : upper_explorers (9–10)   Guide: ace
// Standards: Jump$tart Personal Finance — Comprehensive financial planning;
//            Goal-setting and synthesis of all prior concepts
// CALIBRATED: UE spec v1.1 — real domain terms, em-dashes sparing
// SCOPE: 4 concepts — why planning matters, the building blocks of a plan,
//        setting real goals, putting it all together (synthesis)
// VERSION: v1
// CAPSTONE: 100 XP. Wraps the entire Money & Business subject. Ace's farewell.
// ─────────────────────────────────────────────────────────────────────────────

const MONEY_UE_L20 = {
  ageBand: `upper_explorers`,
  subjectId: `money`,
  guide: `ace`,

  lessons: [
    {
      id: `mb-9-10-20`,
      title: `My 5-Year Financial Plan`,
      duration: 18,
      xpReward: 100,
      badge: `money-graduate`,
      badgeName: `Money & Business Graduate`,

      screens: [
        {
          id: `l20-welcome`,
          type: `welcome`,
          guideText: `Hey {name}, Ace here. This is our LAST lesson together. Over 19 lessons, we've covered the history of money, compound interest, business plans, investing, real estate, the wealthy mindset, negotiation, networking, financial independence, and so much more. Today we bring it ALL together into something you'll actually create: YOUR OWN financial plan. A plan turns knowledge into action. Without a plan, even the smartest person drifts. With one, even an ordinary person can build an extraordinary financial life. This is the finale. Let's make it count.`,
          headline: `My 5-Year Financial Plan`,
          subtitle: `Bringing everything together into a plan you'll actually use`,
          visual: `/ue-assets/money/l20-welcome.webp`,
        },

        {
          id: `l20-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Why a Plan Matters`,
          paragraphs: [
            `Here's a truth that applies to money and almost everything else: KNOWLEDGE without a PLAN rarely changes anything. You now KNOW a lot about money. But knowing isn't the same as doing. A financial plan is what turns all this knowledge into actual results. It's a roadmap that says: here's where I am, here's where I want to go, and here are the steps to get there. Without a plan, people drift, react to whatever happens, and often look back years later wondering where their money went.`,
            `A good plan does several things. It gives you DIRECTION (clear goals to aim for). It helps you make DECISIONS (when a choice comes up, you ask "does this move me toward my plan?"). It keeps you ACCOUNTABLE (you can check your progress). And it reduces STRESS (having a plan feels better than drifting). The best part: a plan can be SIMPLE. It doesn't need fancy software or complex math. Even a single page, honestly thought through, puts you ahead of most adults who never make a financial plan at all.`,
          ],
          image: `/ue-assets/money/l20-s1-why-plan.webp`,
          imageCaption: `Knowledge without a plan rarely changes anything. A plan turns knowing into doing.`,
          vocab: [
            { word: `financial plan`,
              definition: `A roadmap for your money: where you are now, where you want to go, and the steps to get there. Turns financial knowledge into actual results. Can be simple. Even one page beats no plan.`,
              audioPrompt: `A financial plan is a roadmap for your money, {name}. It says where you are now, where you want to go, and the steps to get there. Knowledge without a plan rarely changes anything. A plan turns knowledge into results. It gives you direction, helps you make decisions, keeps you accountable, and reduces stress. The best part is that a plan can be simple. Even a single page, honestly thought through, puts you ahead of most adults who never make a financial plan at all.` },
            { word: `financial literacy`,
              definition: `Understanding how money works and how to use it well. Includes compound interest, investing, budgeting, debt, and more. Most people never get a formal financial education — this subject is yours.`,
              audioPrompt: `Financial literacy is understanding how money works and how to use it well, {name}. It includes understanding compound interest, investing, budgeting, debt, credit, insurance, taxes, and all the other concepts you've learned in this subject. Most people never get a formal financial education and make important money decisions based on guesses. Financial literacy changes that. When you understand how money actually works, you make better decisions across your whole life. Every lesson in this subject is a building block of your financial literacy.` },
          ],
        },

        {
          id: `l20-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `The Building Blocks of a Plan`,
          paragraphs: [
            `Every solid financial plan has a few core building blocks, all of which you've learned in this subject. (1) KNOW YOUR NUMBERS: your income and expenses, and the gap between them (L05). (2) SET GOALS: what you're saving and building toward (covered below). (3) BUILD AN EMERGENCY FUND: cash reserves for surprises (L11), usually 3-6 months of expenses. (4) PAY OFF BAD DEBT: especially high-interest debt that compounds against you (L02, L06).`,
            `Then the wealth-building blocks: (5) SAVE AND INVEST consistently, letting compound interest work (L02, L07). (6) BUILD ASSETS over time: investments, maybe real estate, maybe a business (L06, L07, L08). (7) GROW INCOME through skills, career, or side ventures (L05, L12). (8) AVOID LIFESTYLE INFLATION so your gap grows as income grows (L09). (9) THINK LONG-TERM, aiming eventually toward financial independence (L18) through passive income (L19). A complete plan touches most of these. You don't do them all at once. You build them up over years, in roughly this order.`,
          ],
          image: `/ue-assets/money/l20-s2-blocks.webp`,
          imageCaption: `Know your numbers. Set goals. Emergency fund. Kill bad debt. Invest. Build assets.`,
          vocab: [
            { word: `emergency fund`,
              definition: `Cash savings set aside for unexpected expenses or emergencies, usually 3-6 months of living expenses. One of the first building blocks of any financial plan. It prevents small surprises from becoming disasters.`,
              audioPrompt: `An emergency fund is cash savings set aside for unexpected expenses or emergencies, {name}. Usually 3 to 6 months of living expenses. It's one of the first building blocks of any financial plan. Life is full of surprises. A car breaks down. A medical bill arrives. A job is lost. Without an emergency fund, people often go into high-interest debt to handle surprises, which can spiral. With an emergency fund, a surprise is just an inconvenience, not a disaster. Most experts recommend building it before investing.` },
            { word: `sinking fund`,
              definition: `Money set aside in advance for a planned future expense. Unlike an emergency fund (for surprises), a sinking fund covers expected costs you know are coming, saving a little each month.`,
              audioPrompt: `A sinking fund is money you set aside in advance for a planned future expense, {name}. Unlike an emergency fund, which covers surprises, a sinking fund covers expenses you know are coming. Car insurance due in 6 months. A new laptop you'll need next year. A vacation you're planning. Instead of scrambling when the bill arrives, you save a little each month in advance. By the time the expense arrives, the money is already there. Sinking funds prevent planned expenses from feeling like emergencies.` },
          ],
        },

        {
          id: `l20-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Setting Real Goals`,
          paragraphs: [
            `Good financial goals are SPECIFIC and have a TIMELINE. "I want to be rich" is not a goal. "I want to save $1,000 in an emergency fund within 2 years" is a goal. The best goals are SMART: Specific, Measurable, Achievable, Relevant, and Time-bound. Compare "save money" (vague) to "save $50 a month for 12 months to buy a used bike" (clear, measurable, time-bound). The second one you can actually act on and track.`,
            `Good plans usually include goals across different TIME HORIZONS. SHORT-TERM (within 1 year): save for something specific, start tracking expenses. MEDIUM-TERM (1-5 years): build an emergency fund, start investing, maybe launch a small income stream. LONG-TERM (5+ years, even decades): build significant investments, work toward financial independence. For a kid or teen, goals might be smaller (save for something, start a tiny business, learn to invest a little), but the SAME structure applies. The habit of setting clear, time-bound financial goals, started young, is one of the most powerful things you can carry into adulthood.`,
          ],
          image: `/ue-assets/money/l20-s3-goals.webp`,
          imageCaption: `Specific. Measurable. Time-bound. Goals across short, medium, and long horizons.`,
          vocab: [
            { word: `financial goal`,
              definition: `A specific, measurable, time-bound target for your money, like "save $1,000 in an emergency fund within 2 years." Good goals turn vague wishes into things you can actually act on and track.`,
              audioPrompt: `A financial goal is a specific, measurable, time-bound target for your money, {name}. Saying you want to be rich is not a goal. Saying you want to save 1,000 dollars in an emergency fund within 2 years is a goal. The best goals are specific, measurable, achievable, relevant, and time-bound. Good plans include goals across different horizons. Within a year, within 5 years, or even decades. The habit of setting clear financial goals with real timelines is one of the most powerful things you can carry into adulthood.` },
            { word: `SMART goal`,
              definition: `A goal that is Specific, Measurable, Achievable, Relevant, and Time-bound. The SMART framework turns vague wishes into targets you can actually act on and track.`,
              audioPrompt: `A SMART goal is Specific, Measurable, Achievable, Relevant, and Time-bound, {name}. The SMART framework helps turn vague wishes into actual targets you can act on. Specific means it's clear what you're aiming for. Measurable means you can track progress. Achievable means it's realistic given where you are. Relevant means it matters to your actual life. Time-bound means it has a deadline. Applying SMART to financial goals changes everything. Instead of saying I want to save more money, you say I will save 200 dollars by December.` },
          ],
        },

        {
          id: `l20-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Putting It All Together`,
          paragraphs: [
            `A complete 5-year financial plan brings everything together. Here's a simple structure you could actually use. WHERE I AM NOW: my current income, expenses, savings, and any debts. MY GOALS: short-term, medium-term, and long-term, each specific and time-bound. MY STRATEGY: how I'll grow the gap between income and expenses, what I'll save and invest, what assets I'll build, what skills I'll develop. MY HABITS: the consistent actions I'll take (tracking, saving a set percentage, avoiding lifestyle inflation). MY CHECK-INS: when I'll review and adjust the plan (most people do this once or twice a year).`,
            `Remember everything from this subject feeds into this. Compound interest rewards starting early. The gap between income and expenses is the engine. Net worth is the scoreboard. Assets build wealth. The wealthy mindset is about long-term thinking and patience. Negotiation, networking, and your personal brand help you earn and grow. Financial independence is the long-term destination. Passive income is the vehicle. Your plan ties it all together into action. Ace's final teaching: you don't have to be a genius, rich, or special to build a great financial life. You have to be clear about what you want, consistent in your habits, and patient over time. That's it. That's the whole secret. And now you know it.`,
          ],
          image: `/ue-assets/money/l20-s4-together.webp`,
          imageCaption: `Where you are. Your goals. Your strategy. Your habits. Your check-ins. The whole plan.`,
          vocab: [
            { word: `net worth`,
              definition: `Everything you own (assets) minus everything you owe (liabilities). The scoreboard of your financial plan — tracking it over time shows whether your plan is working.`,
              audioPrompt: `Net worth is everything you own minus everything you owe, {name}. Your assets minus your liabilities. It's the scoreboard of your financial plan. Tracking your net worth over time shows whether your plan is actually working. If your net worth grows year after year, your plan is succeeding. If it shrinks, something needs adjusting. Most people who build wealth check their net worth once or twice a year. A growing net worth means the plan is working. That's the whole signal.` },
            { word: `budget`,
              definition: `A plan for how you'll spend and save your money. Tells each dollar where to go before you spend it. The gap between income and spending is what you save and invest.`,
              audioPrompt: `A budget is a plan for how you'll spend and save your money, {name}. It tells each dollar where to go before you spend it. Without a budget, money tends to disappear without clear purpose. A budget starts with your income, then allocates amounts to needs (rent, food, transportation), wants (entertainment, dining out), savings, and investments. The gap between income and spending is what you save and invest. A budget turns intentions into action. It's how you take control of your money.` },
          ],
        },

        {
          id: `l20-game`,
          type: `interactive`,
          format: `investigation`,
          guideText: `Final investigation, {name}. Four financial goals people set. For each one, decide: STRONG GOAL (specific, measurable, time-bound), WEAK GOAL (too vague to act on), or NOT REALLY A GOAL (a wish or feeling, not a plan)?\n\nOne is sneakier than it looks.`,
          options: [
            { id: `strong`,   label: `Strong Goal`,        color: `#34D399`, description: `Specific, measurable, and time-bound. You can act on it and track it.` },
            { id: `weak`,     label: `Weak Goal`,          color: `#FBBF24`, description: `Has the right idea but is too vague to act on or measure clearly.` },
            { id: `notgoal`,  label: `Not Really a Goal`,  color: `#F87171`, description: `A wish, feeling, or vague hope. No specifics, no plan, nothing to act on.` },
          ],
          cases: [
            {
              id: `case-1`,
              caseTitle: `Goal #1`,
              clues: [
                { text: `"I will save $30 a month from my allowance and earnings."` },
                { text: `"After 10 months, I'll have $300 to buy the used mountain bike I want."` },
                { text: `"I'll track it in a notebook each month."` },
              ],
              correctAnswer: `strong`,
              realWorldExample: `This is a textbook strong financial goal for a kid.`,
              explanation: `Specific amount ($30/month), measurable ($300 total), time-bound (10 months), and trackable (notebook). Pure strong goal. This is exactly how a good financial goal should look, at any age.`,
            },
            {
              id: `case-2`,
              caseTitle: `Goal #2`,
              clues: [
                { text: `"I want to be good with money."` },
                { text: `"I'd like to have savings someday."` },
                { text: `"It would be nice to be wealthy when I grow up."` },
              ],
              correctAnswer: `notgoal`,
              realWorldExample: `Vague wishes like this are extremely common.`,
              explanation: `No specifics. No amounts. No timeline. No actions. Just wishes and feelings. Pure "not really a goal." Most people's financial "goals" actually look like this, which is exactly why most people drift. Wishes aren't plans.`,
            },
            {
              id: `case-3`,
              caseTitle: `Goal #3`,
              clues: [
                { text: `"I want to save more money this year."` },
                { text: `"I'll try to spend less on stuff I don't need."` },
                { text: `"Hopefully I'll have a decent amount saved by the end of the year."` },
              ],
              correctAnswer: `weak`,
              realWorldExample: `"Save more" goals without specifics rarely work.`,
              explanation: `It has the right IDEA (saving, spending less), but it's too vague. How much more? Save how much by when? "More" and "decent amount" can't be measured or tracked. Pure weak goal. To make it strong, add specific numbers and a deadline.`,
            },
            {
              id: `case-4`,
              caseTitle: `Goal #4 — The Tricky One`,
              clues: [
                { text: `"I will become financially independent by saving 50% of my income and investing it in index funds."` },
                { text: `"My FI number is $1 million, which I aim to reach in about 18 years."` },
                { text: `"I'll check my net worth every January to track progress."` },
              ],
              correctAnswer: `strong`,
              realWorldExample: `This is a sophisticated but well-formed long-term goal.`,
              explanation: `Tricky because it's a HUGE, far-off goal (financial independence, 18 years), which might feel too big to be "real." But look closely: specific savings rate (50%), specific target ($1M FI number), specific timeline (18 years), and a tracking method (net worth every January). It checks every box. Pure strong goal. Lesson: even big, long-term goals can be strong goals if they're specific, measurable, and time-bound. The size or distance of a goal doesn't make it weak. Vagueness does. This goal ties together everything from the subject: savings rate, investing, FI number, net worth tracking. It's the kind of goal this whole subject was preparing you to set.`,
            },
          ],
        },

        {
          id: `l20-quiz`,
          type: `quiz`,
          guideText: `Final quiz, {name}. You've earned this one.`,
          questions: [
            { id: `l20-q1`, format: `multiple-choice`,
              question: `Why does a FINANCIAL PLAN matter?`,
              options: [
                `It doesn't`,
                `Because knowledge without a plan rarely changes anything — a plan turns what you know into actual results`,
                `Only rich people need plans`,
                `Plans are too complicated`,
              ],
              correctIndex: 1,
              explanation: `You now KNOW a lot about money, but knowing isn't doing. A plan is the roadmap that turns knowledge into results. It gives direction, helps decisions, keeps you accountable, and reduces stress. Even a simple one-page plan beats no plan.` },

            { id: `l20-q2`, format: `multiple-choice`,
              question: `What's an EMERGENCY FUND?`,
              options: [
                `Money for fun`,
                `Cash savings (usually 3-6 months of expenses) set aside for unexpected emergencies — one of the first building blocks of a plan`,
                `An investment account`,
                `A type of loan`,
              ],
              correctIndex: 1,
              explanation: `An emergency fund is cash for surprises: a car repair, medical bill, or job loss. Usually 3-6 months of expenses. Without one, people often go into high-interest debt for emergencies. Experts recommend building it early, even before investing heavily.` },

            { id: `l20-q3`, format: `multiple-choice`,
              question: `What makes a STRONG financial goal?`,
              options: [
                `Being really ambitious`,
                `Being specific, measurable, and time-bound — like "save $1,000 in an emergency fund within 2 years"`,
                `Wishing hard`,
                `Keeping it vague for flexibility`,
              ],
              correctIndex: 1,
              explanation: `Strong goals are SMART: Specific, Measurable, Achievable, Relevant, Time-bound. "I want to be rich" is a wish. "Save $50/month for 12 months to buy a used bike" is a goal you can act on and track.` },

            { id: `l20-q4`, format: `multiple-choice`,
              question: `What are the THREE TIME HORIZONS for financial goals?`,
              options: [
                `Morning, noon, night`,
                `Short-term (within 1 year), medium-term (1-5 years), and long-term (5+ years)`,
                `Past, present, future`,
                `Only long-term matters`,
              ],
              correctIndex: 1,
              explanation: `Good plans include goals across horizons: short-term (save for something specific), medium-term (emergency fund, start investing), and long-term (build wealth, work toward financial independence). Different goals need different timelines.` },

            { id: `l20-q5`, format: `true-false`,
              question: `True or false: Even a big, far-off goal (like financial independence in 18 years) can be a STRONG goal if it's specific, measurable, and time-bound.`,
              correctAnswer: true,
              explanation: `True. The size or distance of a goal doesn't make it weak — vagueness does. "Become financially independent by saving 50%, reaching a $1M FI number in 18 years, tracking net worth each January" is specific, measurable, and time-bound. That's a strong goal.` },

            { id: `l20-q6`, format: `multiple-choice`,
              question: `What is NET WORTH, and why does it matter to your plan?`,
              options: [
                `Your salary; it doesn't matter`,
                `Everything you own minus everything you owe — it's the scoreboard that shows whether your plan is working`,
                `Just your cash`,
                `Your income`,
              ],
              correctIndex: 1,
              explanation: `Net worth (assets minus liabilities) is your financial scoreboard. Tracking it over time shows whether your plan is succeeding. Growing net worth = plan working. Most wealth-builders check it once or twice a year.` },

            { id: `l20-q7`, format: `multiple-choice`,
              question: `What are the main BUILDING BLOCKS of a complete financial plan?`,
              options: [
                `Just earning more`,
                `Know your numbers, set goals, build emergency fund, kill bad debt, save and invest, build assets, grow income, avoid lifestyle inflation, think long-term`,
                `Just one thing`,
                `Only investing`,
              ],
              correctIndex: 1,
              explanation: `A complete plan touches most of these blocks, built up over years: know your numbers, set goals, emergency fund, pay off bad debt, save/invest consistently, build assets, grow income, avoid lifestyle inflation, and think long-term toward financial independence.` },

            { id: `l20-q8`, format: `multiple-choice`,
              question: `According to Ace, what's the WHOLE SECRET to building a great financial life?`,
              options: [
                `Being a genius or getting lucky`,
                `Being clear about what you want, consistent in your habits, and patient over time — you don't have to be rich or special`,
                `Earning a huge salary`,
                `Finding secret tricks`,
              ],
              correctIndex: 1,
              explanation: `Ace's final teaching: you don't have to be a genius, rich, or special. You have to be clear about what you want, consistent in your habits, and patient over time. That's the whole secret. Everything in this subject serves those three things.` },
          ],
        },

        {
          id: `l20-reflection`,
          type: `reflection`,
          guideText: `Final reflection, {name}. This one matters most because it's about building YOUR plan. Pick ONE and really think it through.`,
          prompts: [
            { id: `r1`, text: `What's ONE strong, specific, time-bound financial goal you could set for yourself THIS YEAR? (Remember: specific amount, clear timeline, trackable.)` },
            { id: `r2`, text: `Of everything you learned in this whole Money & Business subject, what's the ONE idea that will stick with you most? Why that one?` },
            { id: `r3`, text: `Ace says the secret is being clear, consistent, and patient. Which of those three do you think will be EASIEST for you, and which will be HARDEST?` },
            { id: `r4`, text: `Imagine yourself at 25 with a solid financial plan in place. What would make you most proud of how you handled money?` },
          ],
        },

        {
          id: `l20-realworld`,
          type: `real-world`,
          guideText: `You've now completed an entire course on money and business that most adults never get. You understand money, compound interest, business, investing, real estate, the wealthy mindset, negotiation, networking, personal brand, financial independence, and passive income. More importantly, you understand how to tie it all together into a plan. The kids who learned this at your age have an enormous head start. As you grow up, revisit your financial plan, update it, and keep building. Money is a tool. You now know how to use it to build the life you actually want. That knowledge will serve you for the rest of your life.`,
          familyAdventure: `Family Financial Plan Workshop. As a family, each person creates a simple one-page financial plan (age-appropriate). Where am I now? What are my goals (short, medium, long)? What habits will I build? Kids might plan to save for something specific. Adults might revisit real goals. Share them with each other. Set a date 6 months out to check in on progress. This single activity, done together, can change a family's financial future.`,
          creativePrompt: {
            intro: `This is your capstone. Write YOUR OWN financial plan for the next 5 years. Use everything you've learned.`,
            floor: `Write at least 5 sentences. Cover where you are now, one or two specific goals (with timelines), and the habits you'll build.`,
            stretch: `Write 8 to 10 sentences. Include where you are now, short/medium/long-term goals (each specific and time-bound), your strategy (saving, investing, building assets), and the habits you'll keep.`,
            open: `Write as much as you want. Build a complete 5-year financial plan. Cover where you are now, your goals across all three time horizons, your strategy for growing the gap and building assets, the habits you'll maintain, how you'll avoid lifestyle inflation, your long-term vision (maybe even financial independence), and how you'll check in and adjust. This is the plan that could shape your financial life. Make it real.`,
            frames: [
              `Where I am now: ___.`,
              `My short-term goal (this year): ___.`,
              `My medium-term goal (1-5 years): ___.`,
              `My long-term vision: ___.`,
              `The habits I'll build are ___, and I'll check my progress by ___.`,
            ],
          },
        },

        {
          id: `l20-celebration`,
          type: `celebration`,
          message: `Congratulations, {name}. You've completed every Money & Business lesson in the Upper Explorer band. From the history of money to compound interest to investing to negotiation to financial independence to your own 5-year plan. You understand money as a TOOL, not a goal. You know how to build wealth through patience and good habits, not get-rich-quick schemes. You've earned the Money & Business Graduate badge AND 100 XP for the capstone. Most importantly: you now know more about money than most adults ever learn. Use it wisely. Stay clear about what you want. Stay consistent in your habits. Stay patient over time. Build the life you actually want. It's been an honor flying with you. Keep soaring. — Ace. Always.`,
          badge: `money-graduate`,
          badgeName: `Money & Business Graduate`,
          xpEarned: 100,
        },
      ],
    },
  ],
};

export default MONEY_UE_L20;

// ─── Dev asset check ──────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const screens = MONEY_UE_L20.lessons[0].screens;
  const mags = screens.filter(s => s.type === 'magazine').length;
  const game = screens.find(s => s.type === 'interactive')?.cases?.length ?? 0;
  const quiz = screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  const refl = screens.find(s => s.type === 'reflection')?.prompts?.length ?? 0;
  const totalVocab = screens.filter(s => s.type === 'magazine').reduce((sum, s) => sum + (s.vocab?.length || 0), 0);
  console.log(`[LESSON-MONEY-UE-L20 v1 CAPSTONE] Loaded with ${mags} magazine sections, ${totalVocab} vocab terms, ${game} game cases, ${quiz} quiz Qs, ${refl} reflection prompts`);
}
