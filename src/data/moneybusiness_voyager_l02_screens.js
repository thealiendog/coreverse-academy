// ─────────────────────────────────────────────────────────────────────────────
// MONEY & BUSINESS VOYAGER  |  L02 — Compound Interest: The Most Important Concept
// Age band : voyagers (11-12)   Guide: ace (Eagle)
// Standards: Coreverse Original — Personal Finance, Compound Growth
// CALIBRATED: Voyager spec v1.1 (May 2026)
// Interaction format: CASE STUDY (three teens, three saving strategies)
// ─────────────────────────────────────────────────────────────────────────────

const VERSION = "voyager-mb-l02-v1";

const MONEYBUSINESS_VOYAGER_L02 = {
  ageBand: `voyagers`,
  subjectId: `money-business`,
  guide: `ace`,

  lessons: [
    {
      id: `mb-11-12-02`,
      title: `Compound Interest: The Most Important Concept in Personal Finance`,
      duration: 35,
      xpReward: 75,
      badge: `compound-master`,
      badgeName: `Compound Master`,

      screens: [
        {
          id: `l02-welcome`,
          type: `welcome`,
          guideText: `{name}, today's lesson contains the single most useful piece of financial information you can learn at your age. The concept is compound interest. Albert Einstein supposedly called it "the eighth wonder of the world." Whether he actually said that is debated, but the math is real and the consequences are enormous. Compound interest is what makes some people end up wealthy and others end up financially stressed despite earning the same amounts over their lives. The difference is usually time, not income. Today we look at three teenagers with the same starting amount who make different choices about when to start saving. The math we walk through is honest, not exaggerated. By the end you will understand why starting early at 12 is one of the highest-return financial decisions you can ever make.`,
          headline: `Compound Interest`,
          subtitle: `Why when you start matters more than how much.`,
          visual: `/voyager-assets/money-business/l02-welcome.webp`,
        },

        {
          id: `l02-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Simple vs Compound: Why The Difference Is Huge`,
          paragraphs: [
            `Imagine you put $100 in a savings account that pays 10 percent interest per year. After one year, you have $110. That's simple. Now here's where it gets interesting. The next year, you don't just earn 10 percent on the original $100. You earn 10 percent on $110. That's $11, not $10. After year two, you have $121. The third year, you earn 10 percent on $121, which is $12.10. Each year, you're earning interest on a larger and larger amount.`,
            `This is compound interest. You earn interest on your principal AND on the interest you've already earned. The longer this runs, the more dramatic the effect becomes. After 10 years at 10 percent, $100 doesn't become $200. It becomes $259. After 20 years it's $673. After 40 years it's $4,526. The numbers seem too good to be true. They're not. They're just the math of doubling and doubling.`,
            `The opposite of compound interest is simple interest, where you only earn on your original principal. A $100 at 10 percent simple interest would grow to exactly $500 in 40 years (40 × $10). Compound interest grows it to $4,526. That's the same money, the same time, the same interest rate. Just the difference between earning interest on interest or not. Compound interest works for you when you save and invest. It works against you when you borrow and don't pay off debt quickly. The math doesn't care which side you're on.`,
          ],
          image: `/voyager-assets/money-business/l02-s1-compound.webp`,
          imageCaption: `Compound interest: earning interest on interest, over and over.`,
          vocab: [
            {
              word: `compound interest`,
              definition: `Interest calculated on both the original principal and the accumulated interest from previous periods. The single most important concept in long-term personal finance.`,
              audioPrompt: `Compound interest is interest calculated on both your original money and the interest you've already earned, {name}. It is the single most important concept in long-term personal finance. The longer compounding runs, the more dramatic the results become. $100 at 10% becomes $259 after 10 years, $673 after 20, and $4,526 after 40. The math doesn't care whether you're saving or borrowing. Compound interest works for you when you invest. It works against you when you carry credit card debt. Understanding this at your age changes the trajectory of your entire financial life.`,
            },
            {
              word: `simple interest`,
              definition: `Interest calculated only on the original principal, not on accumulated interest. Much less powerful than compound interest. $100 at 10% simple interest becomes $500 after 40 years versus $4,526 with compounding.`,
              audioPrompt: `Simple interest is interest calculated only on the original principal, not on accumulated interest, {name}. If you put $100 in an account paying 10% simple interest, you earn exactly $10 per year every year forever. After 40 years you have $500. Compound interest on the same amount at the same rate gives you $4,526 after 40 years. The same money, the same time, the same rate, but dramatically different results. Simple interest is easy to understand but rare in real financial products. Most real-world interest, both earned and owed, is compound. Knowing the difference helps you understand why starting early matters so much.`,
            },
            {
              word: `interest on interest`,
              definition: `The mechanism that makes compounding powerful: the interest you earn gets added to the principal, so future interest is calculated on a growing base. Over long periods, this produces exponential rather than linear growth.`,
              audioPrompt: `Interest on interest is the mechanism that makes compounding so powerful, {name}. When you earn interest and it gets added to your principal, the next period's interest is calculated on a larger number. The third year you're earning interest on the original amount plus two years of accumulated interest. Each year the base grows, so each year's interest is larger than the last. Over 40 years this produces exponential growth, meaning the curve gets steeper and steeper over time. Most of the dramatic growth in long-term compound interest happens in the later years, which is why time matters so much more than the initial amount.`,
            },
          ],
        },

        {
          id: `l02-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `The Rule of 72`,
          paragraphs: [
            `Compound interest math can get complicated, but there's a simple shortcut every financially literate person knows. It's called the Rule of 72. Divide 72 by your annual interest rate, and you get the approximate number of years it takes for your money to double. At 6 percent interest, money doubles every 12 years (72 ÷ 6 = 12). At 8 percent, every 9 years. At 10 percent, every 7.2 years. At 12 percent, every 6 years.`,
            `This rule is useful because it lets you do quick mental math about long-term growth without a calculator. If a stock returns 10 percent per year on average (close to the historical S&P 500 average), $1,000 invested today doubles in about 7 years, doubles again in 14, again in 21, and so on. Across 49 years (7 doublings), $1,000 becomes about $128,000. This isn't magic. It's just doubling.`,
            `The Rule of 72 also reveals why high-interest debt is so dangerous. Credit cards often charge 20 percent interest or more. By the Rule of 72, that means credit card debt doubles in 3.6 years if not paid down. A $5,000 balance can grow to $10,000 in less than 4 years, $20,000 in 7 years, $40,000 in 11 years. This is why credit card debt is one of the most destructive financial situations someone can be in. The same compounding that builds wealth on one side destroys it on the other.`,
          ],
          image: `/voyager-assets/money-business/l02-s2-rule72.webp`,
          imageCaption: `Rule of 72: a simple shortcut every financially literate person knows.`,
          vocab: [
            {
              word: `Rule of 72`,
              definition: `A mental math shortcut: dividing 72 by an annual interest rate gives the approximate number of years for money to double through compounding.`,
              audioPrompt: `The Rule of 72 is a mental math shortcut for compound interest, {name}. Divide 72 by the annual interest rate and you get the approximate number of years for money to double. At 6% money doubles every 12 years. At 8% every 9. At 10% every 7.2. At 12% every 6. This works because of the way exponential math interacts with the number 72. You don't need to understand the proof to use it. Memorize it. You'll use it constantly when evaluating any financial decision involving long time periods.`,
            },
            {
              word: `credit card debt`,
              definition: `Debt carried on a credit card, typically at 18–26% annual interest. Because of the Rule of 72, a $5,000 balance at 20% interest doubles in about 3.6 years if not paid down. One of the most destructive financial situations for ordinary earners.`,
              audioPrompt: `Credit card debt is debt carried on a credit card, typically at 18 to 26 percent annual interest, {name}. By the Rule of 72, a $5,000 balance at 20 percent interest doubles in about 3.6 years if you only make minimum payments. That same balance can grow to $10,000 in less than 4 years, $20,000 in 7 years, and $40,000 in 11 years. This is the same compound interest math that builds wealth in investments, working in reverse against you. Credit card debt is one of the most reliable wealth destroyers for ordinary earners. Avoiding it, or paying it off quickly when it happens, matters as much as starting to invest.`,
            },
            {
              word: `doubling`,
              definition: `What happens to money that grows at a consistent rate over time. The Rule of 72 tells you how long each doubling takes. Each successive doubling adds more absolute dollars than the last.`,
              audioPrompt: `Doubling is what happens to money that grows at a consistent rate over time, {name}. At 10 percent annual returns, $1,000 doubles to $2,000 in about 7 years. Then doubles again to $4,000. Then $8,000, $16,000, and so on. Each doubling takes the same number of years but adds more absolute dollars than the last. The final doubling from $64,000 to $128,000 adds $64,000, even though each earlier doubling only added a fraction of that. This is why long time horizons are so powerful. And why the first dollar invested at 12 is worth more than any dollar invested at 32.`,
            },
          ],
        },

        {
          id: `l02-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Why Starting Early Beats Investing More`,
          paragraphs: [
            `Here's a fact that almost nobody understands until they see the math. A person who starts saving at 20 and saves $200 a month for 10 years (so they put in $24,000 total) and then stops, will end up with MORE money at 65 than a person who waits until 30 to start and saves $200 a month for 35 years straight (putting in $84,000 total). This is true even though the late starter contributes 3.5 times more money.`,
            `How can this be? Time. The early starter's money has 45 years to compound, even though they only contributed for 10. The late starter's money only has 35 years, and most of it was contributed late, so it didn't get the early years of compounding. Assume 8 percent average annual returns (roughly the historical stock market average). The early starter ends up with about $317,000. The late starter ends up with about $310,000. The early starter contributed less than a third as much money and still came out ahead.`,
            `This single piece of math explains why financial advisors universally tell young people: start investing as early as you possibly can, even with tiny amounts. A 12-year-old who starts investing $20 a month at average market returns will have more than a million dollars by retirement age. That isn't a get-rich-quick claim. It's just the math of 50+ years of compounding. Most adults don't understand this because they were never taught. You're being taught now.`,
          ],
          image: `/voyager-assets/money-business/l02-s3-early.webp`,
          imageCaption: `Time beats money. Starting early at 12 is one of the highest-return decisions you can make.`,
          vocab: [
            {
              word: `principal`,
              definition: `The original amount of money you invest or borrow, before any interest is added. The base on which compound interest grows.`,
              audioPrompt: `Principal is the original amount of money you invest or borrow, {name}. If you put $500 into a savings account, that $500 is your principal. The interest you earn over time gets added to the principal, and then future interest is calculated on the new larger total. That's compounding. When you take a loan, the principal is the original amount borrowed, and interest is calculated on the unpaid balance. Knowing the word principal is useful for almost every financial conversation you'll ever have.`,
            },
            {
              word: `time horizon`,
              definition: `How long money has to grow before it is needed. The most important factor in compounding: a longer time horizon produces dramatically more growth than a larger initial amount.`,
              audioPrompt: `Time horizon is how long money has to grow before it is needed, {name}. It is the most important factor in compounding. An early starter who contributes $24,000 total over 10 years beginning at age 20 ends up with more money at 65 than a late starter who contributes $84,000 over 35 years starting at 30. The early starter's advantage is their longer time horizon. Those first 10 years of compounding are irreplaceable. A 12-year-old has the longest possible time horizon. Every year you delay shrinks it and reduces the power of everything you eventually invest.`,
            },
            {
              word: `average annual return`,
              definition: `The typical yearly growth rate of an investment over long periods. The historical S&P 500 average annual return is about 10%, though any single year can vary dramatically.`,
              audioPrompt: `Average annual return is the typical yearly growth rate of an investment over long periods, {name}. The historical S&P 500 average annual return is about 10% over the past 90 or more years. Individual years can vary dramatically: down 37% in 2008, up 32% in 2013. But averaged across many years, the long-term return has been remarkably consistent. Financial planning uses averages because you cannot predict individual years. When this lesson shows compound growth at 8 percent, that reflects a realistic conservative estimate for a diversified stock portfolio, slightly below the historical average to account for fees and uncertainty.`,
            },
          ],
        },

        {
          id: `l02-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `The Realistic Rates`,
          paragraphs: [
            `For compound interest math to actually help you, you need realistic expectations about what rates of return are achievable. Here are the rough numbers, based on historical averages from the past 90+ years of US markets.`,
            `Savings accounts: 0 to 5 percent per year, depending on the interest rate environment. As of 2026, high-yield savings accounts are paying around 4 to 5 percent. Government bonds: 3 to 5 percent for safer government bonds, somewhat higher for riskier ones. The S&P 500 (a broad index of large US companies): about 10 percent average annual return over the past 90 years, but with significant year-to-year volatility (some years up 30%, some down 30%). A typical diversified retirement portfolio: 6 to 8 percent average, depending on the stock/bond mix and time period.`,
            `These are averages over decades. Any single year can be very different. The market lost 37% in 2008. It gained 32% in 2013. Trying to time these year-to-year swings is what most professional investors fail at. The boring approach (invest regularly, leave it alone, let compound interest do its work) outperforms almost all active trading strategies. We'll dig into investing details in a later lesson. For now: when you see compound interest examples in this lesson, the rates we use (6 to 10 percent) reflect realistic long-term averages, not get-rich-quick fantasies.`,
          ],
          image: `/voyager-assets/money-business/l02-s4-rates.webp`,
          imageCaption: `Realistic rates: 0-5% for cash, 6-8% for diversified portfolios, ~10% for stocks long-term.`,
          vocab: [
            {
              word: `index`,
              definition: `A stock market index of 500 of the largest publicly traded US companies. Often used as a benchmark for "the US stock market." Historical average annual return: about 10% over 90+ years.`,
              audioPrompt: `The S&P 500 is a stock market index of 500 of the largest publicly traded US companies, {name}. Apple, Microsoft, Amazon, Walmart, JPMorgan, Procter & Gamble. The index is weighted by company size. When people say "the stock market did this today," they often mean the S&P 500. Its historical average annual return is about 10% over the past 90+ years, but with significant volatility year to year. You can buy a low-cost fund that tracks the S&P 500 (called an index fund), giving you ownership in all 500 companies at once. This is one of the most popular and recommended investing strategies for ordinary people.`,
            },
            {
              word: `high-yield savings account`,
              definition: `A savings account that pays significantly more interest than a standard bank savings account. As of 2026, paying around 4–5% annually. Best for short-term money and emergency funds.`,
              audioPrompt: `A high-yield savings account is a savings account that pays significantly more interest than a standard bank account, {name}. As of 2026, high-yield savings accounts are paying around 4 to 5 percent annually, compared to the 0.01 percent that many traditional bank savings accounts pay. They are typically offered by online banks or credit unions. The money is FDIC-insured and available immediately. High-yield savings accounts are ideal for emergency funds and short-term savings. They are not ideal for long-term money because their returns still trail historical stock market returns by a large margin over long periods.`,
            },
            {
              word: `volatility`,
              definition: `How much an investment's value moves up and down over time. Stocks have higher volatility than bonds or savings accounts. Higher volatility is acceptable for long-term money but dangerous for short-term needs.`,
              audioPrompt: `Volatility is how much an investment's value moves up and down over time, {name}. The S&P 500 has significant year-to-year volatility: it lost 37 percent in 2008 and gained 32 percent in 2013. High volatility isn't necessarily bad for long-term money because you have time to ride out the swings. It is dangerous for short-term money because you might need to sell at a low point. Savings accounts have very low volatility. Stocks have moderate to high volatility. Cryptocurrency has very high volatility. Understanding volatility helps you match the right investment to the right time horizon.`,
            },
          ],
        },

        {
          id: `l02-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `What This Means For A 12-Year-Old`,
          paragraphs: [
            `Let's make this concrete for your situation. Imagine you're 12 years old. You manage to save and invest $25 a month from your allowance, birthday money, or small jobs. You do this for the next 6 years, until you turn 18. Total invested: $1,800. Then you stop contributing and never add another dollar. Assuming 8 percent average annual returns, by the time you're 65, that $1,800 has become about $115,000. From $1,800 you didn't add to after 18. That's compounding.`,
            `Now imagine you keep going. $25 a month from 12 to 22 (10 years). Total contribution: $3,000. Then stop. At 65 you have about $215,000. Or you contribute $25 a month from 12 to 65 (53 years). Total contribution: $15,900. At 65: about $458,000. From less than $16,000 of your own money, mostly tiny monthly amounts.`,
            `If you can manage $50 a month from 12 to 65, you end with about $920,000. $100 a month gets you to $1.83 million. These numbers assume average historical returns and aren't guaranteed, but they're realistic possibilities based on real historical data. Almost no adult had this math explained to them as a child. The ones who did, and acted on it, are sitting on stunning wealth at retirement age. You're hearing it now. What you do with this information matters.`,
          ],
          image: `/voyager-assets/money-business/l02-s5-yourlife.webp`,
          imageCaption: `Real numbers for a real 12-year-old. The math is unforgiving and clear.`,
          vocab: [
            {
              word: `dollar-cost averaging`,
              definition: `Investing the same amount on a regular schedule (e.g., $25 monthly) regardless of market ups and downs. Smooths out volatility and is the recommended strategy for most ordinary investors.`,
              audioPrompt: `Dollar-cost averaging is investing the same amount on a regular schedule regardless of market ups and downs, {name}. Twenty-five dollars every month, every month, in good times and bad. The strategy smooths out volatility. When prices are high, your $25 buys fewer shares. When prices are low, it buys more. Over time, this averaging tends to produce better outcomes than trying to time the market. Almost every financial advisor recommends dollar-cost averaging for ordinary investors over picking exact moments to buy. The simplicity is the point.`,
            },
            {
              word: `custodial account`,
              definition: `An investment account held in a minor's name but managed by a parent or guardian until the child reaches adulthood. Allows a 12-year-old to begin investing in a real brokerage account.`,
              audioPrompt: `A custodial account is an investment account held in a minor's name but managed by a parent or guardian until the child reaches adulthood, {name}. It allows a 12-year-old to begin investing in a real brokerage account. Vanguard, Fidelity, and Charles Schwab all offer custodial accounts with no minimums. A parent sets it up, manages it while you're a minor, and it typically transfers to your full control at 18. Starting a custodial account is one of the most powerful financial moves available to a teenager. Even $10 per month invested from age 12 will compound into meaningful wealth over decades.`,
            },
            {
              word: `retirement age`,
              definition: `The point in life when a person stops working, typically around 65 in the US. The target endpoint for most long-term investment math. Starting at 12 gives over 50 years of compounding before retirement.`,
              audioPrompt: `Retirement age is the point in life when a person stops working full-time, typically around 65 in the US, {name}. It is the target endpoint for most long-term investment math. Starting at 12 gives you over 50 years of compounding before retirement age. That is why the numbers in this lesson are so dramatic: $25 per month started at 12 can become $458,000 by age 65 at realistic historical returns. $100 per month can become $1.83 million. These are not guarantees. They are realistic possibilities based on historical stock market data. The key variable is simply starting early and continuing consistently.`,
            },
          ],
        },

        // ───── CASE STUDY ─────────────────────────────────────────────────────
        {
          id: `l02-case-study`,
          type: `case-study`,
          headline: `Three Teens, Three Choices, Decades Later`,
          intro: `Three teenagers each receive $500 at age 12 and have the chance to save $25/month. They each make different choices. Walk through each decision with them and see how things end up at 65. All numbers assume 8% average annual returns (realistic historical stock market average).`,
          scenario: `Maya, Devin, and Sara all turn 12 in 2026. Each of them gets $500 from a grandparent on their birthday. Each of them has the chance to add $25 a month from various income sources over the years. The three of them grow up, get jobs, deal with normal life expenses. Their starting points are identical. Their financial outcomes by 65 will be very different.`,
          decisions: [
            {
              id: `decision-1`,
              prompt: `Maya: At 12, what does she do with her $500 plus the ability to add $25/month?`,
              options: [
                {
                  id: `m-spend`,
                  label: `Spends the $500 on stuff she wants. Plans to start saving later when she's earning more.`,
                  consequence: `Common choice. Spending money at 12 is normal. The $25/month savings option also goes unused; she'll think about it later. Cost: she's started the compounding clock at zero. Every year she waits will cost her tens of thousands by 65.`,
                },
                {
                  id: `m-save`,
                  label: `Saves $500 in a savings account. Adds $25/month from birthday money, chores, and small jobs.`,
                  consequence: `Smart but suboptimal. The savings account pays around 4% as of 2026. Real, but much lower than long-term stock market returns. Some growth, much less than possible.`,
                },
                {
                  id: `m-invest`,
                  label: `Invests $500 in a low-cost stock index fund (an account a parent can set up). Adds $25/month consistently.`,
                  consequence: `The mathematically optimal choice. Index funds hold many companies at once and have averaged ~8% returns over the long run. With dollar-cost averaging from age 12, compounding runs for over 50 years. Maya is on track for a strong financial life.`,
                },
              ],
            },
            {
              id: `decision-2`,
              prompt: `Devin: He sees Maya investing and thinks "I'll wait until I have more money to invest. Investing $25 is barely worth the trouble." At age 22, he graduates college and gets a job. What does he do then?`,
              options: [
                {
                  id: `d-now`,
                  label: `Starts investing $200/month at age 22. Catches up by contributing 8x what Maya is contributing.`,
                  consequence: `Devin contributes $200/month from 22 to 65 (43 years). Total invested: $103,200. Final value at 65 with 8% returns: about $730,000. Sounds great, until you compare. Maya, who started 10 years earlier with much smaller monthly amounts, also has around $700,000-$900,000 by 65 depending on her contribution level. Devin contributed 6-8 times more money than Maya and ended up roughly even. The lost decade of compounding cost him.`,
                },
                {
                  id: `d-bigger`,
                  label: `Decides to "really catch up" by waiting until 30, when his salary will be higher. Plans to invest $400/month from age 30 to 65.`,
                  consequence: `Devin contributes $400/month from 30 to 65 (35 years). Total invested: $168,000. Final value at 65 with 8% returns: about $920,000. Sounds even better. But: he contributed nearly 10x what Maya did. And he barely beat her. The 8-year delay from 22 to 30 cost him more than $300,000 in compounding he can never recover. This is what financial advisors mean when they say "the cost of waiting is enormous."`,
                },
                {
                  id: `d-credit`,
                  label: `At 22 Devin gets a credit card and accumulates $5,000 in debt at 20% interest. Plans to pay it off "soon." Doesn't invest yet.`,
                  consequence: `By the Rule of 72, that $5,000 debt at 20% doubles in 3.6 years if minimum payments don't pay it down. Many people end up paying credit card debt for years, sometimes decades. Every dollar going to credit card interest is a dollar not compounding for him. This is the same compound interest math working in reverse against him. Devin is one bad financial habit from a very different life.`,
                },
              ],
            },
            {
              id: `decision-3`,
              prompt: `Sara: She watches both Maya and Devin's paths. Their experiences shape her own choices. By age 25, what's her situation?`,
              options: [
                {
                  id: `s-invest-and-save`,
                  label: `Inspired by Maya, started small ($10/month) at 14. Now at 25 invests $100/month. Has avoided credit card debt entirely.`,
                  consequence: `Sara's not as far along as Maya numerically but is doing nearly as well by mid-career. She avoided Devin's credit card mistake. She's also a confident financial decision-maker because she's been doing this for 11 years by 25. Skills and habits beyond just the money. By 65: about $620,000 in invested assets, plus the financial literacy of having paid attention to money since adolescence.`,
                },
                {
                  id: `s-perfect-plan`,
                  label: `Waited to "create the perfect plan" but is still researching at 25. Hasn't invested anything yet.`,
                  consequence: `Sara is in worse shape than Devin. She has the disadvantage of his lost decade but without yet starting. Each year of "researching" costs her tens of thousands in future compounding. Perfectionism is a real financial enemy. By 25, she's already lost more value than most adults realize is possible to lose by waiting.`,
                },
                {
                  id: `s-realistic`,
                  label: `Hasn't been able to invest because real life cost more than she expected. Has student loans, rent, and basic expenses to manage.`,
                  consequence: `This is a common real situation. Life happens. The math is still: as soon as you can start, even $10/month or $25/month, do it. The cost of waiting is far greater than the cost of starting tiny. Sara should start NOW with whatever she can manage, even if it feels too small to matter. Tiny consistent action beats waiting for the right moment.`,
                },
              ],
            },
          ],
          debrief: [
            `The pattern across all three: time matters more than amount. Maya, who started at 12 with tiny contributions, ends up roughly equal to Devin who contributed 8x more starting at 22. Sara, who started at 14 even smaller, also ends up in strong shape.`,
            `Compound interest doesn't care about your good intentions, your perfectionism, or your plans to start later. It cares about time. The earliest dollar you invest will do more work than any later dollar.`,
            `The biggest mistake at your age isn't picking the wrong investment. It's not starting. Even $10 a month in a low-cost index fund, started now, will compound into more than most people realize is possible.`,
            `The second biggest mistake is letting compound interest work against you through high-interest debt. Credit cards at 20% interest are the inverse of investing. Avoiding this trap matters as much as starting to invest.`,
          ],
        },

        {
          id: `l02-quiz`,
          type: `quiz`,
          headline: `Check your understanding`,
          questions: [
            {
              id: `q1`,
              type: `multiple-choice`,
              question: `What is compound interest?`,
              options: [
                `Interest paid only on your original principal`,
                `Interest calculated on both your original principal AND the accumulated interest from previous periods`,
                `A type of bank fee`,
                `Interest paid in advance`,
              ],
              correctIndex: 1,
              explanation: `Compound interest earns interest on interest already earned. This is what makes long-term investment growth so dramatic over decades.`,
            },
            {
              id: `q2`,
              type: `multiple-choice`,
              question: `What is the Rule of 72?`,
              options: [
                `Save 72% of your income`,
                `A mental math shortcut: 72 divided by an annual interest rate gives the approximate years for money to double through compounding`,
                `Retire at age 72`,
                `Invest in 72 different stocks`,
              ],
              correctIndex: 1,
              explanation: `Rule of 72 is one of the most useful financial mental math tools. 6% = 12 years to double. 8% = 9 years. 10% = 7.2 years. 12% = 6 years. Memorize it.`,
            },
            {
              id: `q3`,
              type: `multiple-choice`,
              question: `Someone who starts saving at 20 and contributes for 10 years then stops will typically end up with more by 65 than someone who waits until 30 and contributes for 35 years. Why?`,
              options: [
                `Older people are bad at investing`,
                `The early starter's money has 45 years to compound, even though they only contributed for 10; time of compounding matters more than total contribution amount`,
                `Banks favor young investors`,
                `Stocks are higher when you're young`,
              ],
              correctIndex: 1,
              explanation: `This is the most important lesson in personal finance. Time beats money. Starting early at small amounts beats starting late at larger amounts.`,
            },
            {
              id: `q4`,
              type: `multiple-choice`,
              question: `What's the realistic long-term average annual return for the US stock market (S&P 500)?`,
              options: [
                `1-2%`,
                `About 10% over the past 90+ years, with significant year-to-year volatility`,
                `50%`,
                `Zero`,
              ],
              correctIndex: 1,
              explanation: `~10% is the historical average. Individual years vary enormously (37% down in 2008, 32% up in 2013). Long-term diversified holding outperforms most attempts to time these swings.`,
            },
            {
              id: `q5`,
              type: `multiple-choice`,
              question: `Credit card interest is typically around 20%. By the Rule of 72, that means credit card debt doubles approximately every:`,
              options: [
                `20 years`,
                `10 years`,
                `3.6 years`,
                `30 years`,
              ],
              correctIndex: 2,
              explanation: `72 ÷ 20 = 3.6. This is why credit card debt is so destructive. The same compounding that builds wealth on one side destroys it on the other.`,
            },
            {
              id: `q6`,
              type: `multiple-choice`,
              question: `What is dollar-cost averaging?`,
              options: [
                `Buying only when prices are average`,
                `Investing the same amount on a regular schedule regardless of market conditions; smooths out volatility and is recommended for most ordinary investors`,
                `Calculating the average dollar value`,
                `Saving exactly $1 per day`,
              ],
              correctIndex: 1,
              explanation: `Dollar-cost averaging beats trying to time market ups and downs for almost all ordinary investors. The simplicity is the point.`,
            },
            {
              id: `q7`,
              type: `multiple-choice`,
              question: `What's the S&P 500?`,
              options: [
                `A type of savings account`,
                `A stock market index of 500 of the largest publicly traded US companies; you can buy index funds that track it`,
                `A government program`,
                `A retirement plan`,
              ],
              correctIndex: 1,
              explanation: `The S&P 500 is often used as a benchmark for "the US stock market." Low-cost index funds that track it are one of the most recommended investments for ordinary people.`,
            },
            {
              id: `q8`,
              type: `multiple-choice`,
              question: `Why is starting to invest at 12 with $25/month potentially worth more than starting at 30 with $200/month?`,
              options: [
                `It's not, $200 always wins`,
                `Because compound interest has 18 extra years to work on the early contributions; those early years are where most of the long-term growth comes from`,
                `Because young people earn higher returns`,
                `Because banks have better rates for kids`,
              ],
              correctIndex: 1,
              explanation: `The math of compounding is brutal on late starters. Years of compounding lost early can never be recovered later, even by contributing far more.`,
            },
            {
              id: `q9`,
              type: `true-false`,
              question: `True or false: Compound interest works for you when you save and against you when you carry high-interest debt.`,
              correctAnswer: true,
              explanation: `True. The same math runs in both directions. Investing at 8% over 40 years grows wealth dramatically. Credit card debt at 20% destroys it just as dramatically. Avoiding credit card traps matters as much as starting to invest.`,
            },
            {
              id: `q10`,
              type: `inference`,
              question: `Your older cousin says "I'll start investing when I make more money. $25 a month is so small it doesn't matter." Based on this lesson, what's the most useful response?`,
              options: [
                `"That makes sense, wait for more money."`,
                `"$25 a month started now will likely beat $200 a month started ten years from now. The cost of waiting is much higher than the cost of starting tiny. Even if you raise your contributions later, the early years of compounding are irreplaceable. Start with $10 if $25 feels like too much, but start."`,
                `"You're right, it's pointless."`,
                `"Just invest in crypto, it returns faster."`,
              ],
              correctIndex: 1,
              explanation: `This is the entire lesson applied to a real conversation. Time beats amount. Starting tiny now beats starting big later. The math is unforgiving and people who don't understand it lose hundreds of thousands of dollars they could have had.`,
            },
          ],
        },

        {
          id: `l02-reflection`,
          type: `reflection`,
          headline: `Sit with this`,
          intro: `Pick the prompt that pulls at you most. Your answer is saved.`,
          prompts: [
            { id: `reflect-cognitive`, category: `Cognitive`, prompt: `Did the numbers in this lesson surprise you? Which specific example was most striking?` },
            { id: `reflect-meta`, category: `Metacognitive`, prompt: `Compound interest math is simple but its consequences are huge. Why do you think so few people actually act on it even when they understand it?` },
            { id: `reflect-identity`, category: `Identity`, prompt: `If you became someone who understood and used compound interest from age 12, who would you be at 30? At 50? At 70?` },
            { id: `reflect-application`, category: `Application`, prompt: `Could you actually start investing $10 or $25/month this year? What would have to be true (parental help, allowance changes, small jobs)?` },
            { id: `reflect-critical`, category: `Critical`, prompt: `What could go wrong with the "start early and let it compound" advice? When might it not work as expected?` },
            { id: `reflect-personal`, category: `Personal investigation`, prompt: `Ask a parent or older relative when they started investing and what they wish they had known at 12. Their answer will probably surprise you.` },
          ],
        },

        {
          id: `l02-real-world`,
          type: `real-world`,
          headline: `Take it into your life`,
          guideContext: `This is the lesson where math could become a real life decision. Two paths below.`,
          familyActivity: {
            title: `The Compound Interest Conversation`,
            duration: `30 minutes`,
            description: `At dinner tonight, share what you learned about compound interest. Show the Rule of 72. Show the three teens case study numbers. Then ask a parent or guardian: at what age did they start investing? What do they wish they had known at 12? Most adults will share genuine regret about not starting earlier. This isn't to make them feel bad; it's to learn from their honest experience. Then have an actual conversation about whether they could help you open a small custodial investment account. The starting amount can be tiny. The starting itself is the move.`,
          },
          projectOption: {
            title: `Start Investing for Real, this month (optional but transformative)`,
            duration: `Setup ~1 hour, then ongoing for years`,
            description: `Talk with a parent or guardian about opening a custodial investment account in your name. Vanguard, Fidelity, and Charles Schwab all offer low-cost options with no minimums. Set up an automatic monthly contribution of $10, $25, or whatever fits. Invest it in a low-cost broad market index fund. Don't try to pick stocks. Don't try to time the market. Just contribute regularly and leave it alone. If you do this for the next 50 years, the math you just learned applies to you. This is the most important project in this entire band.`,
            offerToParent: `Parent: this is the kind of decision that can change a kid's entire financial trajectory. Custodial brokerage accounts at Vanguard, Fidelity, and Schwab let you set this up easily. Even $10/month started now matters enormously over a lifetime.`,
          },
          identityQuestion: `If you start using compound interest at 12, what version of yourself will you be at 65 that most people won't?`,
        },

        {
          id: `l02-identity-hook`,
          type: `identity-hook`,
          headline: `Who is this lesson making you?`,
          prompt: `One sentence. No wrong answer.`,
          placeholder: `Someone who...`,
          examples: [
            `Someone who actually starts compounding at 12 while everyone around me waits.`,
            `A person who knows compound interest is the most important financial tool I have.`,
            `Someone willing to invest tiny amounts now instead of waiting for "enough" later.`,
          ],
          saveKey: `identity_responses_mb_11_12_02`,
        },

        {
          id: `l02-celebration`,
          type: `celebration`,
          guideText: `{name}. After this lesson you can explain compound interest precisely, apply the Rule of 72 to any interest rate, articulate why time beats amount in long-term investing, work through case studies showing how early starts compound, and identify the realistic rates of return for different investment types. Most adults can't do this clearly. You can. The question now is whether you act on it. The math means nothing unless you actually start. Next time we go into another fundamental concept that affects every dollar you'll ever earn or save: inflation. Source Evaluation format, three very different framings of the same data. See you there. — Ace`,
          badge: `compound-master`,
          badgeName: `Compound Master`,
          xpEarned: 75,
          competencies: [
            `Can define and calculate compound interest`,
            `Can apply the Rule of 72 to any interest rate`,
            `Knows realistic historical rates for savings, bonds, and stocks`,
            `Understands why time matters more than amount in long-term investing`,
            `Recognizes that compound interest works against you in high-interest debt`,
          ],
          nextLessonPreview: {
            title: `Lesson 3: Inflation — Why $20 Won't Always Be $20`,
            hook: `Inflation quietly eats your money. Real economists explain it carefully. Viral content panics about it. Crypto influencers use it to sell. Three sources, your call.`,
          },
        },
      ],
    },
  ],
};

export default MONEYBUSINESS_VOYAGER_L02;

if (import.meta.env?.DEV) {
  const l = MONEYBUSINESS_VOYAGER_L02.lessons[0];
  const mags = l.screens.filter((s) => s.type === `magazine`).length;
  const cs = l.screens.find((s) => s.type === `case-study`)?.decisions?.length ?? 0;
  const quiz = l.screens.find((s) => s.type === `quiz`)?.questions?.length ?? 0;
  const reflect = l.screens.find((s) => s.type === `reflection`)?.prompts?.length ?? 0;
  console.log(
    `[LESSON-MB-VOYAGER-L02 ${VERSION}] "${l.title}" — ${mags} magazine, case-study w/ ${cs} decisions, ${quiz} quiz, ${reflect} reflection`
  );
}
