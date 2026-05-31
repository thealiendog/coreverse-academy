// ─────────────────────────────────────────────────────────────────────────────
// MONEY & BUSINESS VOYAGER  |  L06 — Debt: Good, Bad, and Ugly
// Age band : voyagers (11-12)   Guide: ace (Eagle)
// Standards: Coreverse Original — Personal Finance, Debt Management
// CALIBRATED: Voyager spec v1.1 (May 2026)
// Interaction format: CASE STUDY (different debt scenarios, different outcomes)
// ─────────────────────────────────────────────────────────────────────────────

const VERSION = "voyager-mb-l06-v1";

const MONEYBUSINESS_VOYAGER_L06 = {
  ageBand: `voyagers`,
  subjectId: `money-business`,
  guide: `ace`,

  lessons: [
    {
      id: `mb-11-12-06`,
      title: `Debt: Good, Bad, and Ugly`,
      duration: 35,
      xpReward: 75,
      badge: `debt-strategist`,
      badgeName: `Debt Strategist`,

      screens: [
        {
          id: `l06-welcome`,
          type: `welcome`,
          guideText: `{name}, debt is one of the most powerful and dangerous tools in personal finance. Used wisely, it can build wealth: a mortgage lets you buy a home that appreciates, a student loan lets you earn higher wages, a small business loan lets you start a company. Used badly, it can destroy a life: credit card debt at 22% interest compounds against you, payday loans trap people in cycles, car loans on depreciating assets drain wealth. The difference between "good debt" and "bad debt" isn't just the interest rate. It's whether the thing you're borrowing for produces more value than it costs. Today we walk through real debt scenarios with real numbers. By the end you'll understand the math that quietly shapes most adults' financial lives.`,
          headline: `Debt: Good, Bad, and Ugly`,
          subtitle: `Same word, completely different consequences.`,
          visual: `/voyager-assets/money-business/l06-welcome.webp`,
        },

        {
          id: `l06-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `What Debt Actually Is`,
          paragraphs: [
            `Debt is borrowed money that must be paid back, usually with interest. When you borrow $1,000 at 10% annual interest, you'll owe roughly $1,100 at the end of one year. Interest is the cost of borrowing money. Lenders charge interest because they're giving up the use of their money during the loan period and taking on the risk that you won't pay back.`,
            `Interest rates on debt vary enormously based on perceived risk. The lowest rates go to borrowers with strong credit histories, stable income, and valuable collateral. The highest rates go to borrowers seen as risky: those with poor credit, unstable income, no collateral. As of 2026, typical rates: mortgages 6-7%, federal student loans 5-7%, auto loans 6-10%, personal loans 8-15%, credit cards 18-26%, payday loans 300-700% (yes, that's annualized).`,
            `Two key concepts shape every debt decision. First: the interest rate determines how fast your debt compounds against you. Last lesson we used the Rule of 72: at 20% interest, debt doubles in 3.6 years if you only make minimum payments. Second: secured vs unsecured. Secured debt is backed by an asset the lender can take if you default (your house, your car). Unsecured debt has nothing backing it. Unsecured debt typically has higher rates because the lender has fewer remedies if you don't pay.`,
          ],
          image: `/voyager-assets/money-business/l06-s1-debt.webp`,
          imageCaption: `Debt is borrowed money plus interest. The rate determines how fast it compounds.`,
          vocab: [
            {
              word: `interest rate`,
              definition: `The cost of borrowing money, expressed as a percentage per year. Determines how fast debt grows when not paid down. The single most important factor in evaluating any debt.`,
              audioPrompt: `An interest rate is the cost of borrowing money, expressed as a percentage per year, {name}. It is the single most important factor in evaluating any debt. A 6% mortgage and a 22% credit card are fundamentally different financial tools because of their rates, even though they're both debt. The interest rate determines how fast the debt grows when not paid down. The Rule of 72 from lesson 2 applies: divide 72 by the rate to estimate how fast the debt doubles. At 22%, debt doubles in about 3.3 years. At 6%, it doubles in 12 years. The math doesn't care about your intentions.`,
            },
          ],
        },

        {
          id: `l06-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Good Debt: When Borrowing Builds Wealth`,
          paragraphs: [
            `Good debt is borrowing for things that produce more long-term value than they cost. The classic example: a mortgage to buy a home. You borrow $300,000 at 6.5% to buy a house. You pay roughly $1,896 per month in mortgage payments for 30 years. Over those 30 years you pay about $683,000 total ($300,000 principal + $383,000 interest). At the end, you own the house. If the house appreciates at 3% annually (roughly historical average), it's worth about $728,000 in 30 years. You spent $683,000 to acquire an asset worth more than that, while having a place to live the entire time.`,
            `Student loans for high-ROI degrees can be good debt. The federal Bureau of Labor Statistics tracks median earnings by education level. As of 2026, the median bachelor's degree holder earns about $65,000/year vs $42,000 for someone with just high school. Over a 40-year career, the lifetime earnings difference is roughly $900,000 before taxes. If a degree costs $40,000-$80,000 in loans, the ROI is dramatic. But this varies by major and school. A degree that produces $0 of incremental earnings is not good debt regardless of how much you borrowed.`,
            `Business loans for productive ventures can be good debt. Borrowing $50,000 at 8% interest to start a business that earns $200,000 in profit over five years produces excellent returns. Real estate investing often involves debt for the same reason: borrowed money at 6% buying assets that produce 10% returns generates positive leverage. The pattern across all good debt: the asset or capability you acquire produces more value than the cost of borrowing.`,
          ],
          image: `/voyager-assets/money-business/l06-s2-good.webp`,
          imageCaption: `Good debt: when borrowing acquires something more valuable than the cost.`,
          vocab: [
            {
              word: `ROI`,
              definition: `Return on Investment. The ratio of gain or loss to cost. ROI of 100% means doubling your money. The fundamental metric for evaluating whether any investment, including debt, was worth it.`,
              audioPrompt: `ROI stands for Return on Investment, {name}. It is the ratio of gain or loss to cost. If you invest $100 and end up with $150, your ROI is 50%. If you invest $100 and end up with $80, your ROI is negative 20%. ROI is the fundamental metric for evaluating whether any investment was worth it, including educational investments and business investments funded by debt. A degree that costs $80,000 in loans and produces $900,000 of additional lifetime earnings has a stunning ROI. A degree that costs the same but produces no additional earnings has a terrible one.`,
            },
          ],
        },

        {
          id: `l06-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Bad Debt: When Borrowing Drains Wealth`,
          paragraphs: [
            `Bad debt is borrowing for things that lose value or produce no return. The classic example: a new car loan. New cars lose 20-30% of their value the moment they're driven off the lot. They continue depreciating. A $30,000 car bought with a 7-year loan at 8% will cost about $39,000 total. After 7 years, the car is typically worth $8,000-12,000. You spent $39,000 to end up with an asset worth $10,000. That's a $29,000 wealth destruction over 7 years.`,
            `Credit card debt for ordinary consumption is bad debt of the highest order. At 22% interest, the math is brutal. A $5,000 balance with minimum payments takes about 27 years to pay off and costs over $11,000 in interest. Most people who carry credit card debt don't realize they're paying for the meal, the clothing, or the experience 3-4 times over by the time it's actually paid for. Credit card debt is one of the most reliable wealth destroyers in modern personal finance.`,
            `"Buy now, pay later" services that have grown rapidly in the past few years often have hidden costs. They can encourage spending beyond means, charge significant fees for missed payments, and report defaults to credit agencies. Personal loans for vacations, weddings beyond means, or luxury items are similar: borrowing for consumption that produces no return. The pattern: if what you're borrowing for doesn't produce future value greater than the cost of borrowing, it's destroying wealth.`,
          ],
          image: `/voyager-assets/money-business/l06-s3-bad.webp`,
          imageCaption: `Bad debt: borrowing for things that lose value or produce no return.`,
          vocab: [
            {
              word: `depreciation`,
              definition: `The loss of value over time. Cars, electronics, and most consumer goods depreciate. Real estate, stocks, and productive assets typically appreciate. Borrowing to buy depreciating assets is usually bad debt.`,
              audioPrompt: `Depreciation is the loss of value over time, {name}. Cars depreciate rapidly: a new car loses 20 to 30 percent of its value the moment you drive it off the lot. Electronics depreciate as new versions come out. Most consumer goods depreciate. The opposite is appreciation: gaining value over time. Real estate, stocks, and productive assets typically appreciate. Borrowing money to buy depreciating assets is usually bad debt because you're paying interest on top of an asset that's losing value. Borrowing to buy appreciating assets can be good debt when the appreciation exceeds the interest cost.`,
            },
          ],
        },

        {
          id: `l06-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Ugly Debt: When The System Is Designed To Trap You`,
          paragraphs: [
            `Some debt isn't just bad; it's predatory. Payday loans are the most extreme example. Annual percentage rates often exceed 400% in the states that allow them. A typical payday loan: you borrow $300 for two weeks, you owe $345 at the end. That's 15% interest in two weeks. Annualized, that's a 391% APR. About 80% of payday loans are rolled over or followed by another loan within two weeks because borrowers can't afford the lump sum. The cycle traps people in debt for months or years.`,
            `Subprime auto loans target people with poor credit who need transportation to work. Interest rates of 15-25% on rapidly depreciating cars, combined with terms designed to make the lender money when the loan defaults (which happens often), produce a system that extracts wealth from people who can least afford it. Some subprime auto lenders have business models that depend on repossession after partial payments.`,
            `Rent-to-own stores, certain "no credit check" appliance financing, and predatory student loans for low-quality programs all share the pattern: complex contracts, hidden fees, terms most borrowers don't fully understand, and pricing designed to extract maximum revenue from financially vulnerable people. These exist because they're legal and profitable. Recognizing them is part of financial literacy. Avoiding them, or helping family members avoid them, is one of the most valuable financial skills you can develop.`,
          ],
          image: `/voyager-assets/money-business/l06-s4-ugly.webp`,
          imageCaption: `Ugly debt: legal, profitable, and designed to trap people who can't afford it.`,
          vocab: [
            {
              word: `APR`,
              definition: `Annual Percentage Rate. The yearly cost of borrowing, including interest and most fees. Required by federal law to be disclosed on loans. Payday loans often have APRs of 300-700%.`,
              audioPrompt: `APR stands for Annual Percentage Rate, {name}. It is the yearly cost of borrowing, including interest and most fees. APR is required by federal law to be disclosed on most loans. APR makes loans comparable: a payday loan with 15% interest in two weeks has an APR over 390% because of how the interest compounds annualized. A credit card with 1.83% monthly interest has an APR of about 22%. Always look at APR, not just monthly interest rate or total fees, when comparing loans. The disclosed APR is the most honest single number for evaluating any loan.`,
            },
          ],
        },

        {
          id: `l06-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Before You Walk Through The Scenarios`,
          paragraphs: [
            `In the case study that follows, four different debt scenarios show how the same person could end up in very different financial situations based on their choices. The point isn't to label every debt as good or bad. The point is to develop the judgment to evaluate any specific debt against three questions. What's the interest rate? What does the thing I'm borrowing for actually produce? Will I be able to pay it back even if circumstances change?`,
            `These three questions distinguish good debt from bad debt better than any rule of thumb. A 6% mortgage on a home you can afford long-term, in a stable job, is reasonable. The same mortgage on a house at the edge of your budget, with unstable income, is risky. A student loan for engineering is different from the same loan amount for a degree with no clear career path. The interest rate matters, what you're buying matters, and your ability to pay matters.`,
            `One more framing: most adults end up in serious financial trouble not because they did something dramatically stupid, but because they made small bad debt decisions repeatedly. A car loan they shouldn't have taken. Credit card debt that built up gradually. A second mortgage. Each individual decision seemed manageable. The cumulative effect was a financial life that became hard to escape. The same principle in reverse: small good debt decisions compound. A mortgage that builds equity. A student loan that produces higher income. A small business loan that creates a thriving venture. The cumulative effect is wealth.`,
          ],
          image: `/voyager-assets/money-business/l06-s5-before.webp`,
          imageCaption: `Three questions for any debt: rate, what it produces, can you pay it back.`,
          vocab: [
            {
              word: `principal balance`,
              definition: `The current amount owed on a loan, separate from interest. As you make payments, part goes to principal (reducing the balance) and part goes to interest.`,
              audioPrompt: `Principal balance is the current amount owed on a loan, separate from interest, {name}. As you make payments, part of each payment goes to principal, reducing the balance, and part goes to interest, paying for the use of borrowed money. Early in a long-term loan like a mortgage, most of each payment goes to interest. Late in the loan, most goes to principal. This is why the total cost of a 30-year mortgage is so high even at reasonable interest rates: the early years are mostly interest. Knowing this helps you decide whether paying extra toward principal makes sense.`,
            },
          ],
        },

        // ───── CASE STUDY ─────────────────────────────────────────────────────
        {
          id: `l06-case-study`,
          type: `case-study`,
          headline: `Four Real Debt Scenarios`,
          intro: `Four scenarios where someone is considering taking on debt. Walk through each one with them and see what the math actually says.`,
          scenario: `Maya is 22 and just graduated college. She has $30,000 in student loan debt at 6%, a steady job paying $50,000/year, and is considering several major financial decisions. Walk through her choices with her.`,
          decisions: [
            {
              id: `decision-1`,
              prompt: `Maya needs reliable transportation to get to work. What should she do?`,
              options: [
                {
                  id: `car-new`,
                  label: `Buys a new $35,000 car with a 7-year loan at 8%. Monthly payment: $545.`,
                  consequence: `Total paid over 7 years: $45,800. After 7 years, the car is typically worth $10,000-12,000. Maya destroyed about $34,000 of wealth on transportation, plus she's stretched thin on payments for 7 years. The "reliable transportation" goal could have been met for vastly less. New cars are one of the most reliable wealth destroyers for ordinary earners. This is a classic bad debt decision.`,
                },
                {
                  id: `car-used`,
                  label: `Buys a 4-year-old used car for $15,000 with a 3-year loan at 7%. Monthly payment: $463.`,
                  consequence: `Total paid over 3 years: $16,700. After 3 years, the car is worth about $9,000. She destroyed about $7,700 on transportation, plus she'll have no payment for the remaining useful life of the car (typically another 5-10 years). She also has more cash flow for other priorities. Reasonable choice that balances transportation need against wealth destruction. Used cars 3-5 years old often hit the sweet spot of reliability and reasonable depreciation.`,
                },
                {
                  id: `car-cash`,
                  label: `Buys a 7-year-old reliable car for $8,000 cash from her savings.`,
                  consequence: `No debt at all. The car might need more maintenance over time. After 5-7 years it might be worth $2,000-3,000. Total transportation cost: $5,000-6,000 of depreciation plus maintenance. The lowest total cost option. The tradeoff is using $8,000 of savings that could have been earning returns. But avoiding monthly car payments frees up cash flow significantly, and the math typically favors paying cash for older used cars over financing newer ones.`,
                },
              ],
            },
            {
              id: `decision-2`,
              prompt: `Maya has $5,000 saved up. Her student loans are at 6%, her grandmother is offering her $0 interest loan for grad school but she's not sure she wants to go, and she has no credit card debt. What should she do with her $5,000?`,
              options: [
                {
                  id: `pay-loans`,
                  label: `Puts all $5,000 toward paying down student loans early.`,
                  consequence: `Paying off 6% debt is equivalent to earning 6% guaranteed return. Decent return, beats most savings accounts. Cuts about $1,500 of future interest on those loans. Reasonable but not optimal. The 6% loan rate is below typical historical stock market returns, so investing might produce more wealth. Also: she just eliminated her emergency cushion, which makes her financially fragile.`,
                },
                {
                  id: `invest-index`,
                  label: `Puts $5,000 into a stock index fund through her 401(k) or IRA.`,
                  consequence: `Expected long-term return ~8%, vs 6% she'd save by paying loans. Mathematically slightly better over long periods. BUT: leaves her with no emergency fund. If she loses her job or has a major car repair, she has nothing. Could be forced to use credit cards at 22% interest, wiping out years of "smart" investment gains. The math is incomplete without considering risk.`,
                },
                {
                  id: `emergency-fund`,
                  label: `Keeps the $5,000 in a high-yield savings account as her emergency fund. Sets up automatic $200/month toward extra student loan payments.`,
                  consequence: `Best of multiple worlds. She has a 3-month emergency cushion, which prevents fragility. She's also making meaningful progress on debt through automatic payments. The opportunity cost of keeping $5,000 in savings vs investing it is small compared to the protection it provides. Boring but mathematically and emotionally sustainable. This is what financial advisors actually recommend.`,
                },
              ],
            },
            {
              id: `decision-3`,
              prompt: `Maya's friend invites her on a $4,000 trip to Europe. She has no debt-free savings for travel. Her credit card has a $5,000 limit. What should she do?`,
              options: [
                {
                  id: `credit-card`,
                  label: `Charges the trip on her credit card, plans to pay it off over the next year.`,
                  consequence: `If she pays $400/month for 12 months, she pays the original $4,000 plus about $480 in interest at 22%. The trip cost $4,480. If she gets stretched and can only pay minimums, the trip could end up costing $7,000-9,000 over years. Credit card debt for vacation is one of the most reliable wealth destroyers. Future Maya pays for present Maya's experience, with interest.`,
                },
                {
                  id: `save-up`,
                  label: `Tells her friend she can't go this year. Starts saving $400/month for next year's trip.`,
                  consequence: `She misses this specific trip. But she avoids $480-9,000 of interest costs. The trip next year costs exactly $4,000 instead of $4,480-9,000. She also builds the habit of saving for things instead of borrowing for them, which compounds throughout her life. Disappointing in the moment, smart over time. Real maturity is often choosing future self over present self in cases like this.`,
                },
                {
                  id: `cheaper-trip`,
                  label: `Suggests a less expensive alternative: a $1,500 domestic trip she can afford with current savings without going into debt.`,
                  consequence: `Compromise. She gets a trip experience with her friend. She doesn't take on debt. She saves the European trip for a year or two when she's ready financially. The friendship continues. This is often the most realistic option for ordinary income earners. Not as glamorous as Europe but achievable without debt.`,
                },
              ],
            },
            {
              id: `decision-4`,
              prompt: `Maya is offered a 401(k) match at work: her employer will match 50% of her contributions up to 6% of her salary. She's already paying student loans and saving. What should she do?`,
              options: [
                {
                  id: `skip-match`,
                  label: `Skips contributing because she wants to pay off student loans first.`,
                  consequence: `She skips a guaranteed 50% return. If she contributes $3,000 (6% of $50K salary), her employer adds $1,500. That's a 50% immediate return she'll never get back. No investment in the world offers a guaranteed 50% return. Skipping employer match to pay 6% loans is mathematically wrong. Tens of thousands of dollars of foregone retirement wealth over a career.`,
                },
                {
                  id: `match-only`,
                  label: `Contributes 6% of salary to capture the full employer match. Continues regular student loan payments.`,
                  consequence: `Captures the guaranteed 50% return from the match. The math: $3,000 of her contribution plus $1,500 employer match = $4,500 invested annually. Over a career at 8% returns, that compounds to over $1 million in retirement assets. Skipping the match would cost her this. She still pays loans on schedule. Standard recommended approach.`,
                },
                {
                  id: `max-out`,
                  label: `Maxes out 401(k) contributions ($23,000/year as of 2026) by stretching her budget. Defers loan payments to minimums.`,
                  consequence: `Aggressive. She captures massive tax-advantaged investment growth. But she's stretched thin, has minimal cushion, and still owes the same loan principal accumulating interest. If anything goes wrong with her job or expenses, she's vulnerable. Mathematically optimal for someone with very stable circumstances. Risky for someone whose circumstances might change.`,
                },
              ],
            },
          ],
          debrief: [
            `The four scenarios show how the same person can end up in dramatically different financial situations based on a sequence of decisions. Each decision seemed manageable in the moment. The cumulative effect over years is enormous.`,
            `Pattern across all four: there are usually multiple "reasonable" options, and the math often favors the boring middle option. Not the cheapest, not the most aggressive, but the one that balances mathematical optimality with risk management.`,
            `What good debt decisions share: the debt buys something that produces more value over time than the cost of borrowing. A house. A degree with high ROI. A 401(k) match.`,
            `What bad debt decisions share: the debt buys something that loses value or produces no return. A new car. A vacation. Lifestyle expenses on credit cards.`,
            `For a 12-year-old: the biggest takeaway isn't memorizing rules. It's understanding that small debt decisions over a lifetime compound just like investments do. Every "small" bad debt decision (a slightly nicer car, a slightly bigger trip, a credit card carry) costs decades of future wealth. Every "small" good debt decision (capturing employer match, paying high-interest debt fast) builds it.`,
          ],
        },

        {
          id: `l06-quiz`,
          type: `quiz`,
          headline: `Check your understanding`,
          questions: [
            {
              id: `q1`,
              type: `multiple-choice`,
              question: `What is debt, fundamentally?`,
              options: [
                `Money the government owes`,
                `Borrowed money that must be paid back, usually with interest`,
                `Investment in stocks`,
                `A type of tax`,
              ],
              correctIndex: 1,
              explanation: `Debt is borrowed money plus interest. The interest is the cost of borrowing. The rate determines how fast the debt compounds.`,
            },
            {
              id: `q2`,
              type: `multiple-choice`,
              question: `What are the three questions for evaluating any debt?`,
              options: [
                `Is it long-term, short-term, or medium-term?`,
                `What's the interest rate, what does the thing I'm borrowing for actually produce, and will I be able to pay it back even if circumstances change?`,
                `Is it from a bank, friend, or family?`,
                `Is it small, medium, or large?`,
              ],
              correctIndex: 1,
              explanation: `These three questions distinguish good debt from bad debt better than any rule of thumb. The interest rate matters, what you're buying matters, and your ability to pay matters.`,
            },
            {
              id: `q3`,
              type: `multiple-choice`,
              question: `What's an example of good debt?`,
              options: [
                `Credit card debt for vacations`,
                `A mortgage on a home you can afford that appreciates over time; a student loan for a degree with strong ROI; a business loan for a productive venture`,
                `Payday loans`,
                `New car loans`,
              ],
              correctIndex: 1,
              explanation: `Good debt acquires something that produces more long-term value than the cost of borrowing. The asset or capability matters.`,
            },
            {
              id: `q4`,
              type: `multiple-choice`,
              question: `Why are new car loans typically bad debt?`,
              options: [
                `New cars are always overpriced`,
                `New cars lose 20-30% of value the moment they're driven off the lot and continue depreciating; you pay interest on top of an asset that's rapidly losing value`,
                `Banks don't approve them`,
                `They're illegal in most states`,
              ],
              correctIndex: 1,
              explanation: `Depreciation + interest = wealth destruction. A $30,000 new car bought with a 7-year loan typically costs $39,000+ and is worth $10,000 in 7 years. $29,000 of wealth destroyed.`,
            },
            {
              id: `q5`,
              type: `multiple-choice`,
              question: `What's an APR?`,
              options: [
                `Annual Percentage Rate; the yearly cost of borrowing including interest and most fees; required by federal law to be disclosed on loans`,
                `A type of bank account`,
                `Stock market measure`,
                `Federal tax rate`,
              ],
              correctIndex: 0,
              explanation: `APR is the single most honest number for evaluating any loan. Payday loans often have APRs over 300%. Mortgages are typically 6-7%. The disclosed APR makes loans comparable.`,
            },
            {
              id: `q6`,
              type: `multiple-choice`,
              question: `Why are payday loans considered "ugly debt"?`,
              options: [
                `They're not really debt`,
                `Annual percentage rates often exceed 400%; about 80% of payday loans are rolled over or followed by another loan within two weeks, trapping people in cycles of debt`,
                `They're new and unfamiliar`,
                `They require collateral`,
              ],
              correctIndex: 1,
              explanation: `Payday loans are legal in many states but they're designed to extract maximum revenue from financially vulnerable people. The cycle of debt is the business model, not an unfortunate side effect.`,
            },
            {
              id: `q7`,
              type: `multiple-choice`,
              question: `Why is skipping a 401(k) employer match always wrong?`,
              options: [
                `Because the IRS will fine you`,
                `Because the match is a guaranteed return of 50-100% on your contribution; no investment in the world offers this kind of guaranteed return`,
                `Because you'll lose your job`,
                `Because it's illegal`,
              ],
              correctIndex: 1,
              explanation: `Skipping a 50% match to pay 6% loans is mathematically wrong. The guaranteed 50% beats any possible alternative use of those dollars. Always capture employer match first.`,
            },
            {
              id: `q8`,
              type: `multiple-choice`,
              question: `What's the difference between principal and interest on a loan?`,
              options: [
                `They're the same`,
                `Principal is the amount you originally borrowed (or what's left of it); interest is the cost of borrowing, paid for the use of the money`,
                `Principal is the bank's profit`,
                `Interest is the loan amount`,
              ],
              correctIndex: 1,
              explanation: `Each payment splits between paying down principal (reducing the loan balance) and paying interest (cost of borrowing). Early in long-term loans, most of each payment is interest.`,
            },
            {
              id: `q9`,
              type: `true-false`,
              question: `True or false: Whether debt is good or bad depends primarily on whether what you're borrowing for produces more long-term value than the cost of borrowing.`,
              correctAnswer: true,
              explanation: `True. This is the central insight. A 6% mortgage on a home that appreciates can be good debt. A 6% loan on a new car can be bad debt. Same rate, different consequences because of what's being purchased.`,
            },
            {
              id: `q10`,
              type: `inference`,
              question: `Your older cousin is taking out a $40,000 personal loan at 12% to fund their wedding. Based on this lesson, what should you notice?`,
              options: [
                `"How exciting, what a special day"`,
                `"That seems normal"`,
                `"That's borrowing $40,000 for an event that produces no future value. At 12% interest over a 5-year loan, they'll pay about $53,000 total. They'll be paying for one day for 5 years. The same wedding scaled to $5,000 with cash would let them start their marriage without 5 years of debt payments. Wedding debt is one of the most preventable forms of bad debt."`,
                `"They should have eloped"`,
              ],
              correctIndex: 2,
              explanation: `Real debt analysis applied to a real (and very common) life decision. Most adults don't think about wedding debt this way until they're paying it for years. The framework is doing real work here.`,
            },
          ],
        },

        {
          id: `l06-reflection`,
          type: `reflection`,
          headline: `Sit with this`,
          intro: `Pick the prompt that pulls at you most. Your answer is saved.`,
          prompts: [
            { id: `reflect-cognitive`, category: `Cognitive`, prompt: `Before this lesson, did you think of all debt as bad, or all debt as fine? What's shifted?` },
            { id: `reflect-meta`, category: `Metacognitive`, prompt: `Which scenario in the case study would have tempted you most into a bad choice? Why?` },
            { id: `reflect-identity`, category: `Identity`, prompt: `If you become someone who evaluates every debt against the three questions, what kind of financial life are you setting up?` },
            { id: `reflect-application`, category: `Application`, prompt: `Look at your family's debts (if any are discussed openly). Mortgage? Car loans? Credit cards? Student loans? Which are good debt, which are bad, which are ugly?` },
            { id: `reflect-critical`, category: `Critical`, prompt: `Are there cases where "bad debt" is actually justified for non-financial reasons? When?` },
            { id: `reflect-personal`, category: `Personal investigation`, prompt: `Ask one adult about their biggest debt mistake. Most adults have one. Their honest story is one of the most valuable financial educations you can get.` },
          ],
        },

        {
          id: `l06-real-world`,
          type: `real-world`,
          headline: `Take it into your life`,
          guideContext: `Debt decisions shape most adults' financial lives. Two paths to apply real thinking.`,
          familyActivity: {
            title: `The Family Debt Conversation`,
            duration: `40 minutes`,
            description: `At dinner, ask your parents what kinds of debt they currently have or have had: mortgage, car loans, credit cards, student loans, personal loans. (You don't need exact numbers; rough categories are enough.) Then walk through each one with the three questions: what's the rate? What did the debt buy? Was that thing more valuable than the cost? Most parents will be impressed that you can have this conversation. Some may share regrets. This is one of the most useful financial conversations you can have with a parent. Most kids never do.`,
          },
          projectOption: {
            title: `Track Real Debt Scenarios, 2 weeks (optional)`,
            duration: `2 weeks, ~10 minutes per day`,
            description: `Each day for 14 days, find one real example of someone making a debt decision. Could be a friend, family member, online story, news article, or social media post. Analyze it through this lesson's framework: rate, what it buys, ability to repay. Log 2-3 sentences each day. After 14 days, write 500 words on the patterns you saw. You'll start to see the world differently. Most people make debt decisions without thinking the way you now can.`,
            offerToParent: `Parent: opt your kid into this project from the dashboard. Completed projects show up in your weekly report.`,
          },
          identityQuestion: `If you avoid the bad debts that drain most people's lives, what does that protect you from over 40 years?`,
        },

        {
          id: `l06-identity-hook`,
          type: `identity-hook`,
          headline: `Who is this lesson making you?`,
          prompt: `One sentence. No wrong answer.`,
          placeholder: `Someone who...`,
          examples: [
            `Someone who evaluates every debt against the three questions before taking it on.`,
            `A person who can distinguish good debt from bad debt instead of treating all debt the same.`,
            `Someone willing to drive an older car and take a smaller trip to avoid years of interest payments.`,
          ],
          saveKey: `identity_responses_mb_11_12_06`,
        },

        {
          id: `l06-celebration`,
          type: `celebration`,
          guideText: `{name}. After this lesson you can distinguish good, bad, and ugly debt; calculate real costs over loan periods; apply the three questions to any debt decision; recognize predatory lending patterns; and walk through real scenarios with their financial consequences. This is more applied debt literacy than most adults have. Next time we go into something quietly running every adult's financial life: credit scores. The invisible number that determines what loans you can get and at what rate. Source Evaluation format, three very different framings of what credit scores really are. See you there. — Ace`,
          badge: `debt-strategist`,
          badgeName: `Debt Strategist`,
          xpEarned: 75,
          competencies: [
            `Can distinguish good debt (mortgages, productive loans) from bad debt (new cars, credit cards)`,
            `Knows the three questions for evaluating any debt`,
            `Calculates true cost of loans including interest and depreciation`,
            `Recognizes predatory lending patterns (payday loans, subprime auto, rent-to-own)`,
            `Understands why employer match always beats paying down moderate-rate debt`,
          ],
          nextLessonPreview: {
            title: `Lesson 7: Credit Scores — The Invisible Number Running Your Life`,
            hook: `Most adults don't know how credit scores are actually calculated. The viral "credit repair" industry preys on that gap. Three very different sources on what your credit score really is.`,
          },
        },
      ],
    },
  ],
};

export default MONEYBUSINESS_VOYAGER_L06;

if (import.meta.env?.DEV) {
  const l = MONEYBUSINESS_VOYAGER_L06.lessons[0];
  const mags = l.screens.filter((s) => s.type === `magazine`).length;
  const cs = l.screens.find((s) => s.type === `case-study`)?.decisions?.length ?? 0;
  const quiz = l.screens.find((s) => s.type === `quiz`)?.questions?.length ?? 0;
  const reflect = l.screens.find((s) => s.type === `reflection`)?.prompts?.length ?? 0;
  console.log(
    `[LESSON-MB-VOYAGER-L06 ${VERSION}] "${l.title}" — ${mags} magazine, case-study w/ ${cs} decisions, ${quiz} quiz, ${reflect} reflection`
  );
}
