// ─────────────────────────────────────────────────────────────────────────────
// MONEY & BUSINESS VOYAGER  |  L04 — Saving vs Investing: Where Should Your Money Go?
// Age band : voyagers (11-12)   Guide: ace (Eagle)
// Standards: Coreverse Original — Personal Finance, Investment Allocation
// CALIBRATED: Voyager spec v1.1 (May 2026)
// Interaction format: CASE STUDY (three teens, $500 each, different choices)
// ─────────────────────────────────────────────────────────────────────────────

const VERSION = "voyager-mb-l04-v1";

const MONEYBUSINESS_VOYAGER_L04 = {
  ageBand: `voyagers`,
  subjectId: `money-business`,
  guide: `ace`,

  lessons: [
    {
      id: `mb-11-12-04`,
      title: `Saving vs Investing: Where Should Your Money Actually Go?`,
      duration: 35,
      xpReward: 75,
      badge: `allocation-strategist`,
      badgeName: `Allocation Strategist`,

      screens: [
        {
          id: `l04-welcome`,
          type: `welcome`,
          guideText: `{name}, you have $500. What do you do with it? This question seems simple. It's not. The choice you make depends on what you need the money for, when you need it, and your tolerance for short-term loss. Last lesson we covered compound interest in general. Today we get specific. Cash in a savings account, government bonds, individual stocks, index funds, cryptocurrency, paying down debt, education spending. Each has tradeoffs. Most adults make this decision badly because they were never taught how to think about it. Today three teenagers each get $500 and have to decide. Their choices play out in detail. By the end you'll have a real framework for the money decisions you'll make for the rest of your life.`,
          headline: `Saving vs Investing`,
          subtitle: `Where each dollar belongs depends on what it's for.`,
          visual: `/voyager-assets/money-business/l04-welcome.webp`,
        },

        {
          id: `l04-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `The Three Buckets`,
          paragraphs: [
            `Financial advisors generally think about money in three buckets, each with different rules. Short-term money is for things you need within a year or two: emergencies, an expected purchase, immediate expenses. This money must be safe and accessible. The right place for short-term money is a savings account or money market fund. The interest rate matters less than the safety; losing 10 percent of your emergency fund in a stock market crash right before an emergency would be devastating.`,
            `Medium-term money is for things you'll need in three to ten years: college, a first car, a down payment on something. This money can take some risk but not too much. A common approach mixes safer assets (bonds, CDs) with some growth assets (stock index funds) in proportions like 60-40 or 50-50. The exact mix depends on how soon you need the money.`,
            `Long-term money is for things 10+ years away: retirement, building wealth over decades, financial independence. This money should be mostly in growth investments (stock index funds, real estate, sometimes a small portion in other assets). Short-term volatility matters less because you have time to recover from any downturn. The S&P 500 has had multiple 30%+ drops in history, but no 20-year period in modern times where it lost money overall.`,
          ],
          image: `/voyager-assets/money-business/l04-s1-buckets.webp`,
          imageCaption: `Three buckets: short-term safe, medium-term mixed, long-term growth.`,
          vocab: [
            {
              word: `emergency fund`,
              definition: `Money kept in safe, accessible accounts for unexpected expenses. Typically 3-6 months of essential expenses for adults. Should not be invested in stocks because you may need it during a market downturn.`,
              audioPrompt: `An emergency fund is money kept in safe, accessible accounts for unexpected expenses, {name}. Most financial advisors recommend that adults keep three to six months of essential expenses in their emergency fund. This money should not be invested in stocks because emergencies often happen during economic downturns, which is exactly when stocks are down. Having an emergency fund prevents you from selling investments at the worst time or going into credit card debt when something unexpected happens. For a teenager, even a small emergency fund of a few hundred dollars is useful.`,
            },
            {
              word: `short-term money`,
              definition: `Money you will need within one to two years. Must be kept in safe, accessible accounts. Should not be invested in stocks where a market drop could reduce its value right when you need it.`,
              audioPrompt: `Short-term money is money you will need within one to two years, {name}. Emergency fund cash, money for an upcoming purchase, and funds you expect to use soon all belong in this bucket. Short-term money must be safe and accessible. The right place is a savings account or money market fund. The interest rate matters less than the safety. If your emergency fund is invested in stocks and the market drops 30 percent right when you face an emergency, you lose money you cannot afford to lose. Safety and accessibility are the only requirements for short-term money, not growth.`,
            },
            {
              word: `money market fund`,
              definition: `A low-risk investment fund that holds short-term, high-quality instruments. Pays slightly higher interest than a standard savings account while remaining safe and accessible. Common home for short-term and emergency money.`,
              audioPrompt: `A money market fund is a low-risk investment fund that holds short-term, high-quality instruments, {name}. It pays slightly higher interest than a standard savings account while remaining safe and accessible. Financial advisors commonly recommend money market funds as the home for short-term money and emergency funds. They are not the same as money market accounts at banks, though both are conservative. The slightly better interest rate compared to regular savings, combined with stability, makes them a strong option when you need your money to be safe but also want it doing something useful while it waits.`,
            },
          ],
        },

        {
          id: `l04-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `What Each Option Actually Is`,
          paragraphs: [
            `Savings account: Money held at a bank, FDIC-insured up to $250,000, available immediately. High-yield savings accounts pay 4-5% as of 2026. Best for short-term money and emergency funds. Returns rarely beat inflation by much.`,
            `Certificates of Deposit (CDs): Money locked at a bank for a fixed period (3 months to 5 years), typically paying slightly higher rates than savings. Penalty for early withdrawal. Good for money you definitely won't need until a specific date.`,
            `Government bonds: Loans you make to the US government. Treasury bonds, notes, and bills. Considered among the safest investments in the world. Currently paying 3-5% depending on maturity. I-bonds adjust for inflation automatically.`,
            `Stock index funds: Funds that own small pieces of many companies at once. The S&P 500 index fund owns all 500 of the largest US companies. Historical average return of about 10% annually with significant year-to-year volatility. The most-recommended long-term investment for ordinary people.`,
            `Individual stocks: Buying shares of specific companies. Higher potential return and higher risk than index funds. Most professional investors fail to beat index funds over time. Picking individual stocks is harder than it looks.`,
            `Cryptocurrency: Digital currencies like Bitcoin and Ethereum. Extremely volatile (Bitcoin has had multiple 70%+ drops). Some legitimate use cases. Significant speculation. Should be a small portion of a portfolio for most people, if any.`,
            `Real estate: Owning physical property that produces rent or appreciates in value. Long-term returns roughly match or slightly exceed inflation. Requires significant capital and management.`,
            `Paying down debt: Mathematically equivalent to earning a guaranteed return at the debt's interest rate. Paying off a credit card at 20% interest is equivalent to earning 20% on an investment, guaranteed. Almost always better than investing while carrying high-interest debt.`,
          ],
          image: `/voyager-assets/money-business/l04-s2-options.webp`,
          imageCaption: `Each option has its purpose. Knowing them is half the battle.`,
          vocab: [
            {
              word: `FDIC insurance`,
              definition: `Federal Deposit Insurance Corporation. Guarantees deposits up to $250,000 per account at member banks. If the bank fails, the government covers your insured deposits. Why savings accounts are considered safe.`,
              audioPrompt: `FDIC insurance is the Federal Deposit Insurance Corporation, {name}. It guarantees deposits up to $250,000 per account at member banks. If a bank fails, the government covers your insured deposits up to that limit. This is what makes savings accounts safe in a way that other investments are not. Even during major banking crises, FDIC-insured deposits have always been paid. Cryptocurrency exchanges and brokerage cash accounts are not FDIC-insured the same way. Knowing what's covered and what isn't helps you understand where the real safety actually is.`,
            },
            {
              word: `high-yield savings account`,
              definition: `A savings account, typically at an online bank, that pays significantly more interest than a standard bank savings account. As of 2026 paying 4-5%. Still FDIC-insured and accessible. Best for short-term and emergency money.`,
              audioPrompt: `A high-yield savings account is a savings account, typically at an online bank, that pays significantly more interest than a standard savings account, {name}. As of 2026, high-yield savings accounts are paying around 4 to 5 percent. They are still FDIC-insured and accessible, making them an excellent home for emergency funds and short-term money. Standard bank savings accounts often pay less than 1 percent. The difference compounds. On $5,000 of emergency savings, the gap between 0.5 percent and 4.5 percent is $200 per year in lost interest. Over many years, keeping short-term money in a high-yield rather than a standard savings account adds up significantly.`,
            },
            {
              word: `certificate of deposit`,
              definition: `CD. Money deposited at a bank for a fixed period in exchange for a guaranteed interest rate, usually slightly higher than savings accounts. Penalty for early withdrawal. Best for money you definitely won't need until a specific date.`,
              audioPrompt: `A certificate of deposit, called a CD, is money deposited at a bank for a fixed period in exchange for a guaranteed interest rate, {name}. Terms run from three months to five years. CDs typically pay slightly higher rates than savings accounts because you're committing to leave the money in place. There is a penalty for early withdrawal, which is why they only make sense for money you definitely won't need until a specific date. If you know you'll need money for a trip in 12 months, a 12-month CD earning slightly more than your savings account is a reasonable choice. If there's any chance you'll need the money earlier, keep it in a regular savings account instead.`,
            },
          ],
        },

        {
          id: `l04-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Risk and Return: Always Linked`,
          paragraphs: [
            `Here's a rule that applies to every investment decision: higher potential return always comes with higher risk. There is no investment that returns 20% per year reliably and safely. If there were, professional investors would have already bought it until prices rose and returns fell. The "safe high-return" investments that get pitched to ordinary people are almost always scams.`,
            `Cash savings is the lowest-return, lowest-risk option. Money rarely loses nominal value, but inflation slowly eats purchasing power. Government bonds pay slightly more than cash with slightly more risk (mostly inflation risk). Stock index funds have higher long-term returns (about 10% historically) but real short-term risk: the market can lose 30% or more in a year. Individual stocks have even higher potential return and higher risk. Cryptocurrency has the highest volatility, with both massive gains and 70%+ losses.`,
            `The implication: you should match the risk level to what the money is for. Money you need for emergencies belongs in cash because you can't afford a 30% loss right when you need it. Long-term money belongs in stocks because over 20+ years, the higher expected return dominates short-term swings. The mistake most people make is keeping long-term money in cash (where inflation eats it) or putting emergency money in volatile assets (where it might not be there when needed).`,
          ],
          image: `/voyager-assets/money-business/l04-s3-risk.webp`,
          imageCaption: `Risk and return are always linked. Match the asset to the goal.`,
          vocab: [
            {
              word: `volatility`,
              definition: `How much an investment's price moves up and down over time. High volatility means big swings (both up and down). Lower volatility means more stable values.`,
              audioPrompt: `Volatility is how much an investment's price moves up and down over time, {name}. High volatility means big swings in both directions. Bitcoin is extremely volatile. The S&P 500 is moderately volatile. Government bonds are less volatile. Cash savings is barely volatile at all. Volatility isn't necessarily bad. For long-term money, volatility can be tolerated because you have time to wait through downturns. For short-term money, volatility is dangerous because you may need to sell at a bad moment. Understanding volatility helps you match the right asset to the right goal.`,
            },
            {
              word: `risk-return tradeoff`,
              definition: `The principle that higher potential returns always come with higher risk. There is no investment that is both safe and high-returning. "Safe high-return" pitches are almost always scams.`,
              audioPrompt: `The risk-return tradeoff is the principle that higher potential returns always come with higher risk, {name}. This rule applies to every investment category. Cash savings is the lowest-return, lowest-risk option. Government bonds pay more with slightly more risk. Stock index funds have higher long-term returns but real short-term risk of losing 30 percent or more. Individual stocks have even higher potential return and risk. Cryptocurrency has the highest volatility of all. If there were a safe investment earning 20 percent per year, professional investors would already have bought it until prices rose and returns fell. Safe high-return pitches are almost always scams, and knowing this rule helps you spot them quickly.`,
            },
            {
              word: `purchasing power`,
              definition: `What a given amount of money can actually buy. Cash savings loses purchasing power when inflation outpaces interest earned. The "safe" choice of doing nothing has a real cost over time.`,
              audioPrompt: `Purchasing power is what a given amount of money can actually buy, {name}. Cash in a savings account feels safe because the number stays the same. But if inflation is 3 percent and your savings account pays nothing, your purchasing power falls by 3 percent every year. Over 20 years at 3 percent inflation, $1,000 in a zero-interest account loses about 45 percent of its purchasing power. The mistake most people make is thinking cash is risk-free. It is low-volatility, but it carries real inflation risk for long-term money. Matching long-term money to growth investments is how you protect purchasing power across decades.`,
            },
          ],
        },

        {
          id: `l04-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Diversification: The Real Free Lunch`,
          paragraphs: [
            `Most things in finance involve tradeoffs. There's one exception that comes close to a free lunch: diversification. If you own one stock and it crashes, you lose a lot. If you own 500 stocks and one crashes, you barely notice. Diversification reduces risk without proportionally reducing expected return. This is why index funds are so widely recommended. An S&P 500 index fund gives you instant diversification across 500 companies in many industries.`,
            `Diversification works across asset classes too. Stocks and bonds often move differently. When stocks fall, bonds sometimes rise (though not always). A portfolio of 70% stocks and 30% bonds has lower volatility than 100% stocks, with only slightly lower expected long-term return. International stocks add another layer of diversification. Real estate is another.`,
            `What diversification cannot do: protect you from broad market declines that hit everything. In 2008, almost all asset classes fell at once. Diversification doesn't eliminate risk; it reduces specific company and industry risk. Broad market risk remains. But for ordinary investors, the math is clear: diversified portfolios outperform concentrated ones over time, with less stress along the way.`,
          ],
          image: `/voyager-assets/money-business/l04-s4-diversification.webp`,
          imageCaption: `Diversification: less risk for similar expected return. The closest thing to a free lunch.`,
          vocab: [
            {
              word: `diversification`,
              definition: `Spreading investments across many different assets to reduce risk. The closest thing to a "free lunch" in finance: reduces risk without proportionally reducing expected return.`,
              audioPrompt: `Diversification is spreading investments across many different assets to reduce risk, {name}. It is one of the most important concepts in investing. If you own one stock and the company fails, you lose everything. If you own 500 stocks and one fails, you barely notice. Index funds provide instant diversification across hundreds of companies. Diversification across asset classes (stocks, bonds, real estate, international) adds another layer. The math is clear: diversified portfolios outperform concentrated ones for ordinary investors over time, with less stress along the way.`,
            },
            {
              word: `asset class`,
              definition: `A category of investment with similar characteristics and behavior. Stocks, bonds, real estate, and cash are the main asset classes. Different asset classes often move differently, which is why diversifying across them reduces risk.`,
              audioPrompt: `An asset class is a category of investment with similar characteristics and behavior, {name}. Stocks, bonds, real estate, and cash are the four main asset classes. Cryptocurrency is sometimes considered a separate asset class. Different asset classes often move differently from each other. When stocks fall, bonds sometimes rise, though not always. A portfolio that holds both stocks and bonds typically has lower volatility than one holding stocks alone, with only slightly lower expected long-term returns. Diversifying across asset classes adds a layer of protection on top of diversifying within a single class, like owning many different stocks.`,
            },
            {
              word: `broad market decline`,
              definition: `A drop in prices across nearly all investment categories at once. Diversification cannot protect against broad market declines. In 2008, almost all asset classes fell together.`,
              audioPrompt: `A broad market decline is a drop in prices across nearly all investment categories at once, {name}. Diversification protects against individual company and industry risk but cannot fully protect against broad market declines. In 2008, during the financial crisis, almost all asset classes fell together. Stocks lost 37 percent, real estate dropped, and even some bonds fell. Diversification reduced damage for investors who held bonds and cash alongside stocks, but it did not eliminate it. Understanding that diversification has limits helps set realistic expectations. It is still one of the most powerful tools in investing; it just cannot make risk disappear completely.`,
            },
          ],
        },

        {
          id: `l04-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Before You Walk Through The Decisions`,
          paragraphs: [
            `In the case study that follows, three teenagers each receive $500. Each makes different choices about what to do with it. The choices play out over months and years. The decisions involve real tradeoffs that you yourself will face: short-term spending vs long-term saving, safety vs growth, debt vs investing, education vs other uses.`,
            `As you walk through their decisions, notice not just what they choose but why. Each option in the case study reflects a real type of decision real people make. Some are mathematically optimal. Some are emotionally tempting. Some are simply common. The point isn't to find the "right" answer for every case. The point is to understand the tradeoffs well enough to make conscious decisions in your own life rather than drifting on defaults.`,
            `One framing to keep in mind: financial decisions compound. The decision you make at 12 affects what's possible at 25, which affects what's possible at 40. Tiny early advantages become enormous over decades. The teenagers in this case study aren't deciding for one year. They're shaping a trajectory. So are you, every time you make a financial choice from now on.`,
          ],
          image: `/voyager-assets/money-business/l04-s5-before.webp`,
          imageCaption: `Each choice is a small lever. Levers compound.`,
          vocab: [
            {
              word: `asset allocation`,
              definition: `How an investor divides their money across different asset types (stocks, bonds, cash, real estate, etc.). The most important investing decision after deciding to invest at all.`,
              audioPrompt: `Asset allocation is how an investor divides their money across different asset types, {name}. Stocks, bonds, cash, real estate, sometimes alternatives. Research consistently finds that asset allocation explains more of long-term portfolio returns than picking specific investments within each category. A 12-year-old with all their money in cash might have very different long-term outcomes than the same kid with most of their money in a diversified stock index fund. Asset allocation is the most important investing decision after deciding to invest at all.`,
            },
            {
              word: `financial decisions compound`,
              definition: `The principle that each financial choice creates conditions for the next. Tiny early advantages or disadvantages accumulate into enormous differences over decades. The decision at 12 affects what's possible at 40.`,
              audioPrompt: `Financial decisions compound, {name}. Each financial choice creates conditions for the next. A teenager who invests $500 at 12 instead of spending it gets that money working for 53 years. A teenager who starts with $100 instead of $500 misses out on the compounding of that difference, which grows to about $24,000 by 65. Decisions about debt, skills, savings habits, and investment accounts made in your teens and twenties shape what's possible in your 30s, 40s, and 50s. This is not meant to create pressure. It is meant to show that starting even small and even now has real value that is easy to underestimate.`,
            },
            {
              word: `custodial brokerage account`,
              definition: `An investment account opened by a parent or guardian for a minor. The adult manages it legally until the minor turns 18. How teens can invest in index funds and stocks before reaching legal adulthood.`,
              audioPrompt: `A custodial brokerage account is an investment account opened by a parent or guardian for a minor, {name}. The adult manages it legally, but the money belongs to the minor. When the minor turns 18 or 21 depending on the state, control transfers to them. Custodial accounts are how teens can invest in index funds, stocks, and other securities before reaching legal adulthood. Major brokerages like Vanguard, Fidelity, and Schwab all offer custodial accounts with no minimum balance. The $500 that Tara in the case study invested in a low-cost S&P 500 index fund would need a custodial account to do it. Opening one is the first real step in long-term investing for someone your age.`,
            },
          ],
        },

        // ───── CASE STUDY ─────────────────────────────────────────────────────
        {
          id: `l04-case-study`,
          type: `case-study`,
          headline: `Three Teens, $500, Different Paths`,
          intro: `Three 12-year-olds each receive $500 from a relative. Each has different circumstances and makes different choices. Walk through their decisions and see how things play out over the next few years and across decades.`,
          scenario: `Tara, Jordan, and Mia all turn 12 in 2026. Each receives $500 from a relative. Each has a different family financial situation: Tara's family is stable and supportive. Jordan's family has some credit card debt. Mia's family is saving for her college. None of them has investment knowledge yet. Each decides what to do with their $500 over the next few weeks.`,
          decisions: [
            {
              id: `decision-1`,
              prompt: `Tara: stable family, no debt concerns. She wants to make the best financial decision possible. What does she do with her $500?`,
              options: [
                {
                  id: `tara-spend`,
                  label: `Spends $400 on things she wants. Puts $100 in a piggy bank.`,
                  consequence: `Common decision. Most 12-year-olds spend their birthday money. Cost: she's started compound interest at $100 instead of $500. The piggy bank earns nothing. Over 53 years at 8% returns, that $400 difference grows to about $24,000 by 65. Real cost of immediate spending vs. long-term saving for someone with no debt or pressing needs.`,
                },
                {
                  id: `tara-savings`,
                  label: `Puts all $500 in a high-yield savings account earning 4%.`,
                  consequence: `Safe and accessible. Earns about $20 per year in interest. After 5 years: roughly $608. After 10 years: roughly $740. This is fine for short-term money but Tara doesn't need short-term money. Her real opportunity cost is what she'd have earned in long-term investments. The same $500 in an S&P 500 index fund at 8% would be $1,080 after 10 years and over $25,000 by age 65.`,
                },
                {
                  id: `tara-invest`,
                  label: `With parental help, opens a custodial brokerage account and puts all $500 in a low-cost S&P 500 index fund.`,
                  consequence: `Mathematically optimal for long-term money she doesn't need. At 8% average returns: $500 becomes about $1,080 in 10 years, $5,000 in 30, and around $27,000 by age 65. The $500 she received at 12 becomes meaningful retirement money. Tara has also taken her first step in financial literacy by actually setting up a brokerage account, which will pay off for the rest of her life regardless of what she does with this specific $500.`,
                },
              ],
            },
            {
              id: `decision-2`,
              prompt: `Jordan: knows his family has $3,000 in credit card debt at 22% interest. What's his best move with his $500?`,
              options: [
                {
                  id: `jordan-invest`,
                  label: `Invests his $500 in a stock index fund, ignoring the family debt as not his problem.`,
                  consequence: `The investment earns about 8% per year. Meanwhile his family's debt grows at 22%. Even if his $500 isn't directly the same money, the household is losing money: 22% > 8%. Investing while family carries high-interest debt is mathematically inefficient even when it feels like the right financial move. The advisors who recommend this approach are usually thinking about a wealthy person's portfolio, not a household with high-interest debt.`,
                },
                {
                  id: `jordan-debt`,
                  label: `Offers $500 to his parents to put toward the credit card debt.`,
                  consequence: `This is the mathematically best move. Paying off $500 of 22% debt is the equivalent of earning 22% guaranteed return on his money. The interest savings over the next few years far exceed what the $500 would earn in any investment. It also strengthens the family's financial position, which may benefit Jordan indirectly through reduced household stress and freed cash flow. Hard to do emotionally because it feels like giving his birthday money away. Often the smartest financial moves feel that way.`,
                },
                {
                  id: `jordan-split`,
                  label: `Splits it: $250 to family debt, $250 invested.`,
                  consequence: `Reasonable compromise. He gets the psychological benefit of starting to invest while still meaningfully helping the family. Mathematically slightly less optimal than full debt payment but emotionally more sustainable. The investment portion will compound for decades. The debt portion saves real interest. Not as pure as either extreme but often what real people actually do.`,
                },
              ],
            },
            {
              id: `decision-3`,
              prompt: `Mia: her family is already saving consistently for her college. She has no debt concerns. She's interested in crypto because her friends talk about it. What does she do with her $500?`,
              options: [
                {
                  id: `mia-bitcoin`,
                  label: `Buys $500 of Bitcoin. Goal is to make a lot of money fast and impress her friends.`,
                  consequence: `Bitcoin has had moments of massive gains and moments of 70%+ losses. Over the past 15 years, Bitcoin has averaged high but extremely volatile returns. The chance that $500 of Bitcoin becomes $50,000 in 10 years is real. The chance that it becomes $50 in 10 years is also real. Putting all of one's money in a single highly volatile asset is gambling-adjacent. Even if it works out, Mia learned that picking volatile single assets is a winning strategy, which can lead to worse decisions later.`,
                },
                {
                  id: `mia-diversified`,
                  label: `Puts $400 in an S&P 500 index fund and $100 in Bitcoin (20% allocation to crypto).`,
                  consequence: `Reasonable approach. Most of her money is in the diversified, well-understood S&P 500 with realistic long-term returns. A small allocation (20%) goes to crypto for potential upside and learning. If crypto crashes, she loses $100, not $500. If crypto succeeds, she has meaningful exposure. This is closer to how thoughtful adult investors approach speculative assets: a small portion of total portfolio, not a betting move.`,
                },
                {
                  id: `mia-education`,
                  label: `Uses $300 for a coding course online (real skill investment) and invests $200 in an index fund.`,
                  consequence: `An education investment can have very high returns if Mia actually uses what she learns. A coding skill could lead to part-time work, business ideas, or career advantages worth far more than any pure financial investment of $500. The remaining $200 still goes to compounding investments. This approach treats $500 as a complex resource: some for learning, some for financial assets. For a kid with no debt and a stable family, this is often optimal.`,
                },
              ],
            },
          ],
          debrief: [
            `The pattern across all three: there is no single "right" answer for every situation. The optimal choice depends on what other debts exist, what skills you'd build, and what the money is for.`,
            `Tara's situation favored long-term investing because she had no debt and didn't need short-term money. Jordan's situation favored debt payoff because the 22% credit card rate beat any investment return. Mia's situation involved real tradeoffs between speculation, diversification, and education investment.`,
            `What's consistent across all three: cash sitting in a piggy bank or low-yield account is rarely the right answer for long-term money. The "safe" choice of doing nothing has real costs over time.`,
            `Also consistent: investing in a single highly volatile asset (all in Bitcoin, all in one stock) is gambling-adjacent. Real investing matches the asset to the goal and uses diversification to reduce risk.`,
            `For someone your age starting now: opening a custodial brokerage account and beginning small consistent contributions to a diversified index fund is the single most powerful financial move available to you. The exact dollar amount matters less than starting.`,
          ],
        },

        {
          id: `l04-quiz`,
          type: `quiz`,
          headline: `Check your understanding`,
          questions: [
            {
              id: `q1`,
              type: `multiple-choice`,
              question: `What are the three buckets of money in standard financial planning?`,
              options: [
                `Old money, new money, future money`,
                `Short-term (within 1-2 years, safe), medium-term (3-10 years, mixed), long-term (10+ years, growth)`,
                `Spending, taxes, donating`,
                `Cash, gold, crypto`,
              ],
              correctIndex: 1,
              explanation: `Each bucket has different rules. Short-term money must be safe; long-term money can take more risk. Matching the right asset to the right bucket is the foundation of good financial planning.`,
            },
            {
              id: `q2`,
              type: `multiple-choice`,
              question: `Why shouldn't emergency fund money be invested in stocks?`,
              options: [
                `Stocks always go down`,
                `Emergencies often happen during economic downturns, which is exactly when stocks are down; you can't afford a 30% loss right when you need the money`,
                `Stocks are illegal for emergencies`,
                `Banks won't allow it`,
              ],
              correctIndex: 1,
              explanation: `Timing matters. The stock market crashes during recessions, and recessions cause job losses, which is when emergency funds get used. Cash savings, not stocks, are correct for emergency money.`,
            },
            {
              id: `q3`,
              type: `multiple-choice`,
              question: `What is FDIC insurance?`,
              options: [
                `Crypto insurance`,
                `Federal Deposit Insurance Corporation; guarantees bank deposits up to $250,000 per account at member banks; why savings accounts are considered safe`,
                `Government health insurance`,
                `Stock market insurance`,
              ],
              correctIndex: 1,
              explanation: `FDIC is what makes savings accounts genuinely safe. Even during banking crises, FDIC-insured deposits have always been paid. Crypto exchanges and brokerage cash are not FDIC-insured the same way.`,
            },
            {
              id: `q4`,
              type: `multiple-choice`,
              question: `What's the basic rule about risk and return?`,
              options: [
                `Lower risk = higher return`,
                `Higher potential return always comes with higher risk; "safe high-return" investments pitched to ordinary people are almost always scams`,
                `Risk and return are unrelated`,
                `Only experts can earn returns`,
              ],
              correctIndex: 1,
              explanation: `If a safe 20% return existed, professional investors would have already bid the price up until returns fell. The "safe high-return" pitch is one of the most common scam patterns.`,
            },
            {
              id: `q5`,
              type: `multiple-choice`,
              question: `Why is diversification considered the closest thing to a "free lunch" in finance?`,
              options: [
                `Because it's actually free`,
                `Because it reduces risk without proportionally reducing expected return; owning 500 stocks vs one stock means one company's failure doesn't destroy you`,
                `Because brokers don't charge for it`,
                `Because it always wins`,
              ],
              correctIndex: 1,
              explanation: `Most things in finance involve tradeoffs. Diversification is the exception. Reduce risk without much cost to expected return. This is why index funds are so widely recommended.`,
            },
            {
              id: `q6`,
              type: `multiple-choice`,
              question: `When you have high-interest debt (like 22% credit card), what's the mathematical equivalent of paying it off?`,
              options: [
                `Earning 0% on investments`,
                `Earning a guaranteed return at the debt's interest rate (22%); paying off 22% debt is equivalent to earning 22% guaranteed on an investment`,
                `Earning 5% on investments`,
                `Nothing, debt is unrelated to investing`,
              ],
              correctIndex: 1,
              explanation: `This is one of the most important financial insights. Carrying 22% debt while investing at 8% is mathematically losing 14% per year. Paying off high-interest debt is almost always the optimal financial move.`,
            },
            {
              id: `q7`,
              type: `multiple-choice`,
              question: `What is volatility?`,
              options: [
                `How safe an investment is`,
                `How much an investment's price moves up and down over time; high volatility means big swings in both directions`,
                `The interest rate`,
                `Return on investment`,
              ],
              correctIndex: 1,
              explanation: `Volatility isn't necessarily bad. For long-term money, you can tolerate it. For short-term money, it's dangerous. Matching volatility to time horizon is part of good asset allocation.`,
            },
            {
              id: `q8`,
              type: `multiple-choice`,
              question: `What is asset allocation, and why does it matter?`,
              options: [
                `How you spend your money each month`,
                `How an investor divides their money across asset types (stocks, bonds, cash, real estate); research finds asset allocation explains more of long-term portfolio returns than picking specific investments`,
                `A tax strategy`,
                `Random distribution`,
              ],
              correctIndex: 1,
              explanation: `Asset allocation is more important than picking specific investments within categories. A 12-year-old with all cash will have very different outcomes than the same kid with most money in a diversified stock index fund.`,
            },
            {
              id: `q9`,
              type: `true-false`,
              question: `True or false: There is one "right" answer for what to do with $500 that applies to every 12-year-old.`,
              correctAnswer: false,
              explanation: `False. The right answer depends on what other debts exist (high-interest debt should usually be paid first), what skills could be built, whether short-term needs exist, and risk tolerance. Universal advice often misleads.`,
            },
            {
              id: `q10`,
              type: `inference`,
              question: `Your friend says "I'm going to put all my birthday money in Bitcoin because it could be the next gold." Based on this lesson, what's the most thoughtful response?`,
              options: [
                `"Yes, go all in!"`,
                `"That's gambling"`,
                `"Bitcoin can be a small part of a diversified portfolio for someone who can tolerate the volatility. Putting all your money in one highly volatile asset is more like gambling than investing. A small allocation (10-20%) to crypto while putting the rest in a diversified index fund gives you exposure to potential upside without betting everything on one outcome."`,
                `"Buy gold instead"`,
              ],
              correctIndex: 2,
              explanation: `Real financial literacy applied. Honor the potential of crypto. Name the all-in concentration as gambling-adjacent. Suggest the diversified alternative most professional investors would recommend. This is mature thinking applied to a real friend conversation.`,
            },
          ],
        },

        {
          id: `l04-reflection`,
          type: `reflection`,
          headline: `Sit with this`,
          intro: `Pick the prompt that pulls at you most. Your answer is saved.`,
          prompts: [
            { id: `reflect-cognitive`, category: `Cognitive`, prompt: `Which of the three teens' situations most closely matches yours? What does the lesson suggest for someone in your specific position?` },
            { id: `reflect-meta`, category: `Metacognitive`, prompt: `When you read through the choices, which were you tempted to pick because they sounded exciting, even when the math suggested otherwise?` },
            { id: `reflect-identity`, category: `Identity`, prompt: `If you become someone who consistently makes mathematically sound financial decisions starting at 12, what does that compound to by 50?` },
            { id: `reflect-application`, category: `Application`, prompt: `Take stock of your actual money situation right now. Do you have any savings, allowance, gift money, or other resources? Where is each piece currently? Where should each piece be?` },
            { id: `reflect-critical`, category: `Critical`, prompt: `Is the "stock index funds are optimal for long-term" advice ever wrong? What conditions could make it bad advice in the future?` },
            { id: `reflect-personal`, category: `Personal investigation`, prompt: `Ask one parent: where is most of their savings held? Cash, stocks, real estate, retirement accounts? How did they decide?` },
          ],
        },

        {
          id: `l04-real-world`,
          type: `real-world`,
          headline: `Take it into your life`,
          guideContext: `Asset allocation is one of the most consequential lifelong financial decisions. Two paths below.`,
          familyActivity: {
            title: `The Family Allocation Audit`,
            duration: `30 minutes`,
            description: `At dinner, ask your parents to share roughly how their savings are allocated: what percentage in cash vs. stocks vs. real estate vs. retirement accounts vs. other. Don't ask for dollar amounts, just percentages. Then ask: how did they decide on this allocation? When did they last update it? Most adults haven't seriously thought about asset allocation, even if they have significant savings. This conversation often reveals decisions that were made by default rather than choice. It's also a chance to talk about whether you could open a custodial brokerage account.`,
          },
          projectOption: {
            title: `Build Your Real Allocation Plan, 2 weeks (optional)`,
            duration: `2 weeks, ~15 minutes per day`,
            description: `Take stock of all your money right now: cash, savings, gift money, anything that exists. Decide which bucket each piece belongs in (short-term, medium-term, long-term). Research what's appropriate for each (savings accounts for short-term, mix for medium-term, index funds for long-term). Build a written allocation plan: where each dollar should be. Then, if possible with parental support, actually move money to match the plan. After 14 days, write 500 words on what you learned about your own financial situation and decisions. This is real applied personal finance.`,
            offerToParent: `Parent: this is an unusually substantive financial project for a kid. Worth supporting. Custodial accounts at Vanguard, Fidelity, or Schwab make this implementable.`,
          },
          identityQuestion: `If you can match the right asset to the right bucket starting at 12, what kind of financial life are you setting up?`,
        },

        {
          id: `l04-identity-hook`,
          type: `identity-hook`,
          headline: `Who is this lesson making you?`,
          prompt: `One sentence. No wrong answer.`,
          placeholder: `Someone who...`,
          examples: [
            `Someone who matches each dollar to the right purpose and time horizon.`,
            `A person who knows that "investing in one volatile asset" is gambling, not investing.`,
            `Someone willing to pay off debt before chasing higher returns.`,
          ],
          saveKey: `identity_responses_mb_11_12_04`,
        },

        {
          id: `l04-celebration`,
          type: `celebration`,
          guideText: `{name}. After this lesson you can articulate the three buckets framework, describe the major investment options and their tradeoffs, explain the risk-return relationship, recognize when diversification helps, identify when paying off debt beats investing, and walk through real allocation case studies. This is more applied personal finance literacy than most adults have. Next time we go deeper into one specific asset class that has historically built more wealth than any other: stocks. We'll look at how they actually work, the active-vs-index debate, and what really happens when you "buy a piece of a company." Argument Builder format. See you there. — Ace`,
          badge: `allocation-strategist`,
          badgeName: `Allocation Strategist`,
          xpEarned: 75,
          competencies: [
            `Can articulate the three buckets framework for financial planning`,
            `Knows major investment options and their tradeoffs`,
            `Understands the risk-return relationship and why "safe high return" is usually a scam`,
            `Can apply diversification principles to real portfolio decisions`,
            `Knows when paying off high-interest debt beats investing`,
          ],
          nextLessonPreview: {
            title: `Lesson 5: How Stocks Actually Work — Active Investing vs Index Funds`,
            hook: `Most professional stock pickers fail to beat the index. Yet the entire active-investing industry continues to exist. Three positions on what you should actually do.`,
          },
        },
      ],
    },
  ],
};

export default MONEYBUSINESS_VOYAGER_L04;

if (import.meta.env?.DEV) {
  const l = MONEYBUSINESS_VOYAGER_L04.lessons[0];
  const mags = l.screens.filter((s) => s.type === `magazine`).length;
  const cs = l.screens.find((s) => s.type === `case-study`)?.decisions?.length ?? 0;
  const quiz = l.screens.find((s) => s.type === `quiz`)?.questions?.length ?? 0;
  const reflect = l.screens.find((s) => s.type === `reflection`)?.prompts?.length ?? 0;
  console.log(
    `[LESSON-MB-VOYAGER-L04 ${VERSION}] "${l.title}" — ${mags} magazine, case-study w/ ${cs} decisions, ${quiz} quiz, ${reflect} reflection`
  );
}
