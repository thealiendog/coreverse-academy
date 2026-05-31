// ─────────────────────────────────────────────────────────────────────────────
// MONEY & BUSINESS VOYAGER  |  L08 — Budgeting (Without The Hype)
// Age band : voyagers (11-12)   Guide: ace (Eagle)
// Standards: Coreverse Original — Personal Finance, Budgeting
// CALIBRATED: Voyager spec v1.1 (May 2026)
// Interaction format: CASE STUDY (three real teen budgets, three real trade-offs)
// ─────────────────────────────────────────────────────────────────────────────

const VERSION = "voyager-mb-l08-v1";

const MONEYBUSINESS_VOYAGER_L08 = {
  ageBand: `voyagers`,
  subjectId: `money-business`,
  guide: `ace`,

  lessons: [
    {
      id: `mb-11-12-08`,
      title: `Budgeting (Without The Hype)`,
      duration: 35,
      xpReward: 75,
      badge: `budget-realist`,
      badgeName: `Budget Realist`,

      screens: [
        {
          id: `l08-welcome`,
          type: `welcome`,
          guideText: `{name}, budgeting is the most overhyped and undertaught topic in personal finance. Apps promise to "transform your relationship with money." Gurus sell $500 courses on "budget systems." Influencers show color-coded spreadsheets with hundreds of categories. Most of this is theater. The actual mechanics of budgeting are simple. The actual reasons most people fail at budgeting are also simple, and they're mostly not about apps or systems. Today we walk through three real teen budgets with real trade-offs. By the end you'll have a working budgeting framework you can actually use, without buying any apps or courses.`,
          headline: `Budgeting (Without The Hype)`,
          subtitle: `Simple mechanics. Real trade-offs. No apps required.`,
          visual: `/voyager-assets/money-business/l08-welcome.webp`,
        },

        {
          id: `l08-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `What A Budget Actually Is`,
          paragraphs: [
            `A budget is a plan for what to do with money before you spend it. That's it. The core mechanics are: figure out what money is coming in, figure out what has to go out, decide what to do with the difference. Three numbers. The complexity comes from real life having dozens of expenses, irregular income, unexpected costs, and the human tendency to spend more when not paying attention.`,
            `The most common budget framework is some version of "50-30-20": about 50% of income for needs (housing, food, transportation, utilities, insurance), about 30% for wants (entertainment, dining out, hobbies, non-essential subscriptions), and about 20% for saving and paying down debt. The exact percentages vary, but the structure of "needs, wants, savings" works as a starting frame for most people.`,
            `The point of a budget is awareness, not restriction. Most people who struggle financially don't know where their money actually goes. They estimate they spend $200/month eating out, actual number is $600. They think they spend $50 on subscriptions, actual is $180. The budget reveals reality. Once you see reality, you can make informed choices. Without a budget, you're guessing. With one, you have data.`,
          ],
          image: `/voyager-assets/money-business/l08-s1-budget.webp`,
          imageCaption: `A budget is awareness, not restriction. Three numbers, dozens of trade-offs.`,
          vocab: [
            {
              word: `discretionary income`,
              definition: `Money left over after paying for needs (housing, food, transportation, utilities). What you can choose how to spend or save. The portion of income where real budgeting decisions get made.`,
              audioPrompt: `Discretionary income is the money you have left after paying for needs, {name}. Housing, basic food, transportation, utilities, insurance. What's left is discretionary. You can choose to spend it on wants, save it, invest it, or some mix. Most real budgeting decisions happen in this discretionary income zone. Two people with the same total income can have very different financial outcomes based on how they handle their discretionary spending. Understanding the difference between needs and wants is the first step in seeing your discretionary income clearly.`,
            },
          ],
        },

        {
          id: `l08-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Why Most Budgets Fail`,
          paragraphs: [
            `Most adults try budgeting and quit within a few months. The reasons are remarkably consistent. First, they create a budget that's too restrictive. They cut everything they enjoy down to nothing, can't sustain it, give up entirely, and decide budgeting "doesn't work for them." The lesson: a sustainable budget has room for some fun spending. Cutting everything you enjoy isn't a budget; it's a deprivation experiment that's destined to fail.`,
            `Second, they create too many categories. Some budget apps default to 40+ categories: dining-out, dining-in, groceries, snacks, coffee shops, lunch with friends, business meals. The tracking overhead becomes more work than the insight provides. People give up. The lesson: 5-8 categories captures 90% of what matters with 10% of the friction.`,
            `Third, they don't account for irregular expenses. Annual costs (car insurance, holidays, vacations, school fees) hit suddenly and blow up "the plan." The lesson: a real budget includes monthly savings toward known annual expenses. If your car insurance is $1,200/year, you set aside $100/month so it doesn't shock you when it hits.`,
            `Fourth, they treat budgets as a one-time setup instead of an ongoing practice. Real budgets get adjusted monthly. You overspent in one area? Reduce another. New expense? Build it in. The budget is a tool, not a fixed contract. People who treat budgets as living documents stick with them; people who treat them as rigid systems abandon them.`,
          ],
          image: `/voyager-assets/money-business/l08-s2-fail.webp`,
          imageCaption: `Most budgets fail not because of bad math but because of bad design.`,
          vocab: [
            {
              word: `sinking fund`,
              definition: `Money set aside monthly for known future expenses (annual insurance, holidays, vacations, car maintenance). Prevents large irregular costs from blowing up a monthly budget.`,
              audioPrompt: `A sinking fund is money set aside monthly for known future expenses, {name}. Car insurance is $1,200 per year? Save $100 per month into a sinking fund for insurance. Holidays cost $600? Save $50 per month starting in January. Sinking funds are how you prevent large irregular expenses from blowing up your budget. The concept is simple but underused. Most people don't plan for the expenses they know are coming, so those expenses keep feeling like emergencies even though they're not. Sinking funds turn predictable expenses into manageable monthly amounts.`,
            },
          ],
        },

        {
          id: `l08-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Tracking: Where The Hype Hides`,
          paragraphs: [
            `The budgeting app industry is huge. Mint, YNAB, EveryDollar, Rocket Money, PocketGuard, Copilot, Empower, Monarch. Apps promise to automate tracking, categorize expenses, send alerts when you're overspending, and "transform your finances." Some are free. Some cost $80-100/year. They share a common pitch: budgeting is hard, our app makes it easy.`,
            `What apps actually do well: automatic transaction download from your accounts, categorization (with imperfect accuracy), historical spending visualization, monthly reports. These are real services that save time. For people who have multiple accounts and complex finances, a good budgeting app can save several hours per month.`,
            `What apps don't do: change human behavior. The best budget app in the world can show you that you're spending $400/month on Uber Eats. Whether you do anything about that information is up to you. Most people who download budget apps stop using them within 60 days, regardless of which app they chose. The app isn't the problem. The willingness to act on what the app shows is the problem.`,
            `For a 12-year-old: you don't need a budget app. You can track on paper, in a notes app on your phone, or in a simple spreadsheet. The most important thing is the act of writing things down. Once you have a job and multiple accounts, a free app like Mint or your bank's built-in tools is fine. Don't pay $100/year for a budgeting app until you've genuinely outgrown the free options. The paid apps aren't bad; they're just rarely necessary.`,
          ],
          image: `/voyager-assets/money-business/l08-s3-apps.webp`,
          imageCaption: `Apps help with tracking. They don't change behavior. That part's still on you.`,
          vocab: [
            {
              word: `tracking`,
              definition: `Recording where money actually goes. The first step in any budgeting practice. Can be done with apps, spreadsheets, or paper. The medium matters less than the consistency.`,
              audioPrompt: `Tracking is recording where money actually goes, {name}. It is the first and most important step in any budgeting practice. The medium matters less than the consistency. You can track in a notes app, a spreadsheet, on paper in a notebook, or using a fancy budgeting app. What matters is doing it consistently for at least a few months so you can see your real spending patterns. People who haven't tracked their spending consistently almost always estimate it wrong. Tracking reveals reality. Once you see reality, you can make informed decisions about it.`,
            },
          ],
        },

        {
          id: `l08-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `What A Real Teen Budget Looks Like`,
          paragraphs: [
            `For a 12-year-old, budgeting probably looks different from an adult's. You don't have rent, utilities, or insurance to pay. Your income is likely small and irregular: allowance, birthday money, occasional small jobs. But the practice of budgeting is exactly the same: figure out what comes in, plan what goes out, decide what to do with the difference.`,
            `A reasonable starting budget might be: 50% for what you want to spend on (entertainment, snacks, fun), 25% for short-term saving (something specific you're saving toward), 25% for long-term saving and investing. The percentages aren't sacred. The structure of "spend, save short-term, save long-term" is what matters.`,
            `Concretely: if you get $20/month in allowance and small earnings, that might mean $10 for fun spending, $5 toward a specific goal (a video game, a trip, a thing you want), and $5 going into a long-term investment account (if you've set one up after L02). At $5/month into a low-cost index fund at 8% returns, by age 65 that becomes about $25,000. From $5/month started at 12.`,
            `The point of starting budgeting now isn't the dollar amounts. It's the habits. A person who starts tracking and planning their $20/month at 12 has very different financial habits at 22 than someone who never tracked anything. The habits compound just like the dollars do. Often more.`,
          ],
          image: `/voyager-assets/money-business/l08-s4-teen.webp`,
          imageCaption: `Teen budget: small amounts, same practice. Habits compound.`,
          vocab: [
            {
              word: `cash flow`,
              definition: `The movement of money in and out over a period of time. Positive cash flow means more coming in than going out. Negative cash flow means the opposite. The fundamental health indicator of any financial situation.`,
              audioPrompt: `Cash flow is the movement of money in and out over a period of time, {name}. Positive cash flow means more money is coming in than going out. Negative cash flow means the opposite. Cash flow is the fundamental health indicator of any financial situation: a household, a business, a teenager. You can have wealth on paper and still go bankrupt if your cash flow is negative for long enough. Understanding cash flow at a household level is one of the most useful financial skills. It is also the foundation of business analysis we'll get to in later lessons.`,
            },
          ],
        },

        {
          id: `l08-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Before You Walk Through The Budgets`,
          paragraphs: [
            `In the case study that follows, three teens have different financial situations and approach budgeting differently. Their starting amounts are different. Their family situations are different. Their goals are different. As you walk through their choices, notice that budgeting isn't about finding the "right" answer that applies to everyone. It's about matching the budget to the actual situation.`,
            `Watch for the common pitfalls in their decisions. The budget that's too restrictive to sustain. The budget that has too many categories. The budget that doesn't account for irregular expenses. The budget that focuses on tracking apps instead of behavior change. Each of these mistakes is a place where many adults' budgets fail in real life.`,
            `One last framing: budgets work when they support the life you actually want. If your budget cuts everything that brings you joy in exchange for theoretical future wealth, you'll quit. If your budget lets you spend on what matters most and cuts spending on things you don't actually care about, you'll sustain it. The art of budgeting is figuring out what matters to you and aligning your spending with that.`,
          ],
          image: `/voyager-assets/money-business/l08-s5-before.webp`,
          imageCaption: `Match the budget to the actual life. Sustainable beats perfect.`,
          vocab: [
            {
              word: `spending priorities`,
              definition: `The categories where you choose to spend more vs less, based on what actually matters to you. Personal and varies. The basis for any sustainable budget.`,
              audioPrompt: `Spending priorities are the categories where you choose to spend more or less based on what actually matters to you, {name}. Two people with the same income can have completely different reasonable budgets. One person prioritizes travel and skimps on dining out. Another person prioritizes nice dinners and skimps on travel. Both are reasonable. The mistake is following someone else's priorities instead of yours. Your spending priorities are personal. Figuring out yours, being honest about what actually brings you joy, is the foundation of any sustainable budget. The "right" answer varies by person.`,
            },
          ],
        },

        // ───── CASE STUDY ─────────────────────────────────────────────────────
        {
          id: `l08-case-study`,
          type: `case-study`,
          headline: `Three Teen Budgets, Three Real Situations`,
          intro: `Three 14-year-olds in different situations work through their first real budgets. Walk through each decision and see what holds up.`,
          scenario: `Sam, Lily, and Noah are all 14. Each has different financial circumstances and goals. They each get a small monthly income from a mix of allowance, chores, and small jobs. Each is trying to figure out how to budget responsibly for the first time.`,
          decisions: [
            {
              id: `decision-1`,
              prompt: `Sam: gets $40/month from allowance and yard work. Wants a $200 video game release coming in 6 months. Loves snacks and going out with friends. What's a sustainable monthly budget for Sam?`,
              options: [
                {
                  id: `sam-strict`,
                  label: `Cuts all fun spending to zero. $40/month entirely toward the $200 game. Hits the goal in 5 months.`,
                  consequence: `Mathematically optimal for the specific goal. But: Sam has friends, snack cravings, occasional movie outings. By month 2, Sam is sneaking $10 here and there for fun, breaking the budget. Strict budgets that allow no enjoyment almost always fail. Either Sam quits the budget entirely or finds workarounds. The "perfect" budget that ignores real human nature is worse than a slightly slower budget that accounts for it.`,
                },
                {
                  id: `sam-balanced`,
                  label: `$20/month toward the game, $15 for fun spending, $5 toward a long-term investment account. Hits the game in 10 months.`,
                  consequence: `Slightly slower to reach the game, but sustainable. Sam gets the game eventually AND keeps social life intact AND starts long-term investing AND builds the habit of budgeting. The $5/month into a long-term investment account at 8% returns becomes about $25,000 by age 65 from $5/month started at 14. The "slower" budget is actually faster in terms of total wealth and life quality.`,
                },
                {
                  id: `sam-no-budget`,
                  label: `Doesn't budget. Saves whatever's left at end of each month. Hopes to have enough by the release date.`,
                  consequence: `Without budgeting, Sam doesn't know where money is going. Spends $30 on snacks and movies, has $10 left at end of month. After 6 months: about $60 saved, far short of the $200 goal. Either has to ask parents for the difference, miss the release, or borrow. The "I'll just save what's left" approach reliably leaves nothing left. Without a plan, money disappears into small purchases that don't feel significant individually.`,
                },
              ],
            },
            {
              id: `decision-2`,
              prompt: `Lily: $80/month income (mix of allowance, babysitting, dog walking). Wants to save aggressively for a car at 16. Has school lunches occasionally and minor expenses. Family stable, no urgent needs. What's her approach?`,
              options: [
                {
                  id: `lily-aggressive`,
                  label: `60% to car fund ($48), 20% to long-term investing ($16), 20% fun ($16). Saves $1,152 over 2 years toward the car.`,
                  consequence: `Reasonable aggressive budget for an ambitious savings goal. The $48/month accumulates to $1,152 over 24 months. Combined with potential family contribution or used-car purchase, Lily has real car-buying power at 16. The $16/month into long-term investing at 8% becomes about $77,000 by 65. The 20% fun keeps the budget sustainable. This is what aggressive but realistic teen budgeting looks like.`,
                },
                {
                  id: `lily-extreme`,
                  label: `100% to car fund. $80/month for 24 months = $1,920. Skips any fun spending or long-term investing.`,
                  consequence: `Most car savings, but: zero fun for 2 years rarely actually happens. More importantly, missing the $16/month long-term investment opportunity costs about $77,000 in lifetime wealth. The 2 years of "extra" car money ($768 total) is worth about $50,000 less than $16/month invested at 14 would have been by 65. Concentrating entirely on one short-term goal at the cost of long-term compounding is a common but expensive mistake.`,
                },
                {
                  id: `lily-balanced`,
                  label: `40% to car fund ($32), 30% to long-term investing ($24), 30% fun ($24). Saves $768 over 2 years.`,
                  consequence: `More balanced approach. $768 car fund is solid but less than the aggressive option. $24/month into investing at 8% becomes about $116,000 by 65, the highest of all three options. Generous fun budget means Lily is enjoying life along the way and likely to stick with it. The car will be slightly less impressive but the long-term wealth and life quality are both higher. Different priorities, different tradeoffs.`,
                },
              ],
            },
            {
              id: `decision-3`,
              prompt: `Noah: $25/month income, but his family is going through financial stress. Parents argue about money. Noah feels guilty spending on himself. What's his approach?`,
              options: [
                {
                  id: `noah-give-all`,
                  label: `Gives his entire $25/month to his parents to help with bills.`,
                  consequence: `Noah is trying to help, which is touching. But: $25/month makes very little difference to the family's actual financial situation while taking away Noah's ability to learn financial habits. Most parents wouldn't accept this, knowing the long-term cost. Noah also loses the chance to build any savings of his own, which makes him more dependent later. Generous instinct, but rarely the right answer at 14.`,
                },
                {
                  id: `noah-no-budget`,
                  label: `Doesn't budget at all. Doesn't spend much because of family stress. Saves "whatever happens to be left."`,
                  consequence: `Family financial stress often produces this pattern. Noah feels too anxious to make any plans. But "whatever happens to be left" is rarely consistent or meaningful. Months pass without a clear sense of progress. Anxiety about money increases. This is one of the most common patterns in financial stress: avoidance instead of structure. The anxiety often eases when you have a plan, even a small one.`,
                },
                {
                  id: `noah-modest-plan`,
                  label: `$10/month for small personal needs and modest fun, $10/month into a long-term savings account, $5/month for an emergency fund of his own. Talks to parents about his plan.`,
                  consequence: `Most sustainable approach. Noah is taking responsibility for what he can control. The $10/month into long-term savings at 8% becomes about $48,000 by 65. The $5/month emergency fund builds to $60/year for unexpected costs, which prevents Noah from being a financial burden. He's also modeling responsible budgeting, which can be a small positive influence in a stressed household. The conversation with parents matters too: it transforms Noah from a passive participant to an active financial member of the family.`,
                },
              ],
            },
          ],
          debrief: [
            `Pattern across all three: there's no universal "right" budget. Each kid had different income, goals, and family circumstances. The same budget for all three would have failed at least two of them.`,
            `The two most common failure modes: too strict (cuts everything you enjoy, can't be sustained) and too vague (no plan, money disappears). The sustainable middle is most kids' best option.`,
            `Long-term investing showed up in all three optimal choices. Even $5-25/month at 14 produces meaningful retirement wealth by 65. The smallest amount can't beat starting early.`,
            `Family circumstances matter enormously. A teen in a stable family with discretionary income makes different decisions than a teen whose family is financially stressed. Both situations have appropriate budgets; they just look different.`,
            `For your specific situation: notice which of the three teens you're most like. Then look at the option that worked best for them. The framework adapts. The principles don't.`,
          ],
        },

        {
          id: `l08-quiz`,
          type: `quiz`,
          headline: `Check your understanding`,
          questions: [
            {
              id: `q1`,
              type: `multiple-choice`,
              question: `What is a budget, fundamentally?`,
              options: [
                `A restrictive spending limit`,
                `A plan for what to do with money before you spend it; three core numbers: what comes in, what must go out, what to do with the difference`,
                `An app subscription`,
                `A government policy`,
              ],
              correctIndex: 1,
              explanation: `Budgets are plans, not punishments. The complexity comes from real-life expenses, not from the basic concept.`,
            },
            {
              id: `q2`,
              type: `multiple-choice`,
              question: `What does the "50-30-20" rule suggest?`,
              options: [
                `50% taxes, 30% savings, 20% spending`,
                `About 50% of income for needs, 30% for wants, 20% for saving and paying down debt`,
                `50% stocks, 30% bonds, 20% cash`,
                `Spend 50% of your salary monthly`,
              ],
              correctIndex: 1,
              explanation: `The 50-30-20 rule is a common starting framework. Exact percentages vary, but the structure of "needs, wants, savings" works for most situations.`,
            },
            {
              id: `q3`,
              type: `multiple-choice`,
              question: `Why is the point of a budget awareness, not restriction?`,
              options: [
                `Because money doesn't matter`,
                `Because most people don't know where their money actually goes; the budget reveals reality, and once you see reality, you can make informed choices`,
                `Because all spending is fine`,
                `Because awareness is bad`,
              ],
              correctIndex: 1,
              explanation: `Most financial stress comes from spending happening without awareness. The budget makes the spending visible. Visibility enables choice.`,
            },
            {
              id: `q4`,
              type: `multiple-choice`,
              question: `What's a sinking fund?`,
              options: [
                `A failing investment`,
                `Money set aside monthly for known future expenses (annual insurance, holidays, vacations, car maintenance); prevents large irregular costs from blowing up a monthly budget`,
                `A type of savings account`,
                `A tax`,
              ],
              correctIndex: 1,
              explanation: `Sinking funds turn predictable expenses into manageable monthly amounts. The concept is simple but underused. Most people don't plan for expenses they know are coming.`,
            },
            {
              id: `q5`,
              type: `multiple-choice`,
              question: `What's the most common reason budgets fail?`,
              options: [
                `Bad math`,
                `Being too restrictive (no enjoyment), too many categories (tracking overhead), or treating budgets as rigid one-time setups instead of living documents`,
                `Apps`,
                `Income too low`,
              ],
              correctIndex: 1,
              explanation: `Most budget failures are design failures, not math failures. Sustainable budgets account for real human behavior, including the need for some enjoyment and the inevitability of adjustments.`,
            },
            {
              id: `q6`,
              type: `multiple-choice`,
              question: `What do budgeting apps actually do well, and what do they not do?`,
              options: [
                `They change your behavior`,
                `They automate tracking, categorization, and reporting (real time savings); they don't change human behavior—that's still on you`,
                `Nothing useful`,
                `Everything important`,
              ],
              correctIndex: 1,
              explanation: `Apps are useful tools but they don't transform finances. Most users stop within 60 days. The willingness to act on what the app shows is what matters.`,
            },
            {
              id: `q7`,
              type: `multiple-choice`,
              question: `What's discretionary income?`,
              options: [
                `Money you can't access`,
                `Money left over after paying for needs; what you can choose how to spend or save; where most real budgeting decisions happen`,
                `Government benefits`,
                `Gambling money`,
              ],
              correctIndex: 1,
              explanation: `Two people with the same income can have very different financial outcomes based on how they handle discretionary spending. The categorization matters.`,
            },
            {
              id: `q8`,
              type: `multiple-choice`,
              question: `What's cash flow?`,
              options: [
                `Counting money fast`,
                `The movement of money in and out over a period of time; positive cash flow means more coming in than going out; the fundamental health indicator of any financial situation`,
                `A type of investment`,
                `Bank fees`,
              ],
              correctIndex: 1,
              explanation: `Cash flow is more fundamental than wealth on paper. You can have wealth on paper and still go bankrupt if cash flow is negative long enough. Understanding cash flow applies to households, businesses, and your own teen finances.`,
            },
            {
              id: `q9`,
              type: `true-false`,
              question: `True or false: A 12-year-old needs a paid budgeting app to develop good budgeting habits.`,
              correctAnswer: false,
              explanation: `False. You can track on paper, in a notes app, or in a simple spreadsheet. The medium matters less than the consistency. Don't pay for what you don't need yet.`,
            },
            {
              id: `q10`,
              type: `inference`,
              question: `A friend says "I tried budgeting for two weeks and gave up because it was too restrictive." Based on this lesson, what's the most useful response?`,
              options: [
                `"Budgeting isn't for everyone"`,
                `"You probably set up the budget too tight. The most common reason budgets fail is being too restrictive. A sustainable budget has room for things you actually enjoy. Try again with more realistic fun spending built in, fewer categories, and a focus on awareness rather than restriction."`,
                `"Pay for a budgeting app"`,
                `"You need more discipline"`,
              ],
              correctIndex: 1,
              explanation: `Real diagnostic of why budgets fail. The friend isn't bad at budgeting; the budget was badly designed. This is the kind of advice that actually helps.`,
            },
          ],
        },

        {
          id: `l08-reflection`,
          type: `reflection`,
          headline: `Sit with this`,
          intro: `Pick the prompt that pulls at you most. Your answer is saved.`,
          prompts: [
            { id: `reflect-cognitive`, category: `Cognitive`, prompt: `Before this lesson, did you think budgeting was about restriction or about awareness? Has that shifted?` },
            { id: `reflect-meta`, category: `Metacognitive`, prompt: `Which of the three teens' situations is closest to yours? What does their best decision suggest for you?` },
            { id: `reflect-identity`, category: `Identity`, prompt: `If you become someone who tracks and plans even $20/month at 12, who do you become at 25? At 50?` },
            { id: `reflect-application`, category: `Application`, prompt: `Track your actual spending for the next week. Write down every purchase. Then look at the list. Was your real spending close to what you expected?` },
            { id: `reflect-critical`, category: `Critical`, prompt: `Is budgeting overhyped? Are there people for whom strict budgeting is genuinely the wrong approach?` },
            { id: `reflect-personal`, category: `Personal investigation`, prompt: `Ask one parent: do they budget? What system do they use? What's worked and what hasn't worked for them over time?` },
          ],
        },

        {
          id: `l08-real-world`,
          type: `real-world`,
          headline: `Take it into your life`,
          guideContext: `Budgeting habits at 12 compound exactly like financial habits do. Two paths.`,
          familyActivity: {
            title: `The Family Budget Conversation`,
            duration: `30 minutes`,
            description: `At dinner, share what you learned. Ask each adult in your family: do they have a budget? What's worked and what hasn't worked? Have they ever quit a budget? Why? Most parents will share real experience: the budgets that were too strict, the apps they tried, the systems they abandoned. The patterns from the lesson will likely appear in their stories. This conversation often reveals that even adults you respect struggle with budgeting. The framework you have helps you avoid their mistakes.`,
          },
          projectOption: {
            title: `Track Your First Real Budget, 4 weeks (optional)`,
            duration: `4 weeks, ~5 minutes per day`,
            description: `Track every dollar you spend for 4 weeks. Use paper, notes app, or simple spreadsheet. After 4 weeks, calculate: what percentage went to fun spending? What percentage to savings? What surprised you about where your money actually went? Then build a real budget for the next month based on what you learned. After 8 total weeks (4 of tracking, 4 of budgeting), write 500 words on what you observed. You'll likely see patterns most adults never notice in their own spending. This is real applied financial literacy.`,
            offerToParent: `Parent: opt your kid into this project from the dashboard. The 8-week practice builds real lifelong habit.`,
          },
          identityQuestion: `If you actually track and plan your money at 12, what does that prevent over 50 years of adult life?`,
        },

        {
          id: `l08-identity-hook`,
          type: `identity-hook`,
          headline: `Who is this lesson making you?`,
          prompt: `One sentence. No wrong answer.`,
          placeholder: `Someone who...`,
          examples: [
            `Someone who plans my money before I spend it.`,
            `A person who knows the difference between strict budgets and sustainable ones.`,
            `Someone willing to track for awareness even when the numbers feel small.`,
          ],
          saveKey: `identity_responses_mb_11_12_08`,
        },

        {
          id: `l08-celebration`,
          type: `celebration`,
          guideText: `{name}. After this lesson you can explain what a budget actually is, articulate the 50-30-20 framework, recognize why most budgets fail, understand sinking funds and cash flow, and design sustainable budgets for different situations. Most adults haven't been taught any of this systematically. You have. Next time we shift from personal finance to how businesses actually make money. Three different business models, three different ways of generating revenue. Argument Builder format. See you there. — Ace`,
          badge: `budget-realist`,
          badgeName: `Budget Realist`,
          xpEarned: 75,
          competencies: [
            `Can articulate what budgeting actually does (awareness, not restriction)`,
            `Knows the 50-30-20 framework and how to adapt it`,
            `Recognizes why most budgets fail and how to design sustainable ones`,
            `Understands sinking funds and cash flow as core concepts`,
            `Has walked through real teen budget scenarios with real trade-offs`,
          ],
          nextLessonPreview: {
            title: `Lesson 9: How Businesses Actually Make Money`,
            hook: `Product, service, marketplace: three fundamental business models. Each has different economics, risks, and winners. Which one would you build?`,
          },
        },
      ],
    },
  ],
};

export default MONEYBUSINESS_VOYAGER_L08;

if (import.meta.env?.DEV) {
  const l = MONEYBUSINESS_VOYAGER_L08.lessons[0];
  const mags = l.screens.filter((s) => s.type === `magazine`).length;
  const cs = l.screens.find((s) => s.type === `case-study`)?.decisions?.length ?? 0;
  const quiz = l.screens.find((s) => s.type === `quiz`)?.questions?.length ?? 0;
  const reflect = l.screens.find((s) => s.type === `reflection`)?.prompts?.length ?? 0;
  console.log(
    `[LESSON-MB-VOYAGER-L08 ${VERSION}] "${l.title}" — ${mags} magazine, case-study w/ ${cs} decisions, ${quiz} quiz, ${reflect} reflection`
  );
}
