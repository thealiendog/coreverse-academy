// ─────────────────────────────────────────────────────────────────────────────
// MONEY & BUSINESS UE  |  L06 — Net Worth: What You Own Minus What You Owe
// Age band : upper_explorers (9–10)   Guide: ace
// Standards: Jump$tart Personal Finance — Net worth and financial well-being;
//            C3 D2.Eco.1.3-5 — Benefits and costs of decisions
// CALIBRATED: UE spec v1.1 — real domain terms, em-dashes sparing
// SCOPE: 4 concepts — what net worth is, assets vs liabilities,
//        income vs wealth, how net worth actually grows
// VERSION: v1
// ─────────────────────────────────────────────────────────────────────────────

const MONEY_UE_L06 = {
  ageBand: `upper_explorers`,
  subjectId: `money`,
  guide: `ace`,

  lessons: [
    {
      id: `mb-9-10-06`,
      title: `Net Worth: What You Own Minus What You Owe`,
      duration: 18,
      xpReward: 75,
      badge: `net-worth-tracker`,
      badgeName: `Net Worth Tracker`,

      screens: [
        {
          id: `l06-welcome`,
          type: `welcome`,
          guideText: `Hey {name}, Ace here. Most people measure how well they're doing financially by INCOME (how much they make). That's only part of the picture. Wealthy people use a different measurement called NET WORTH. It tells you a much truer story about where you actually stand. By the end of today, you'll know what net worth is, how to calculate it, and why some high-income people are actually NOT WEALTHY (and some lower-income people quietly ARE). Let's go.`,
          headline: `Net Worth`,
          subtitle: `The honest scoreboard of financial well-being`,
          visual: `/ue-assets/money/l06-welcome.webp`,
        },

        {
          id: `l06-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `What Net Worth Actually Is`,
          paragraphs: [
            `NET WORTH is a simple idea with one formula. EVERYTHING YOU OWN minus EVERYTHING YOU OWE. The things you own are called ASSETS. Cash in your bank account. Stocks and other investments. A house if you own one. A car. Even valuable things like jewelry or collectibles. The things you owe are called LIABILITIES. Credit card debt. Student loans. The remaining balance on a mortgage. Car loans. Any money you owe to anyone.`,
            `Add up all your assets. Add up all your liabilities. Subtract liabilities from assets. The result is your NET WORTH. If positive, you have more than you owe. If negative, you owe more than you have. Adults track net worth over time to see if it's growing. Growing net worth = financial progress. Shrinking net worth = financial trouble. The number doesn't have to be huge to be healthy. What matters is whether it's moving in the right direction.`,
          ],
          image: `/ue-assets/money/l06-s1-net-worth-formula.webp`,
          imageCaption: `Assets minus liabilities equals net worth. Simple formula. Real picture.`,
          vocab: [
            { word: `net worth`,
              definition: `Everything you own (assets) minus everything you owe (liabilities). The most honest measure of how you're doing financially. Can be positive or negative.`,
              audioPrompt: `Net worth is everything you own minus everything you owe, {name}. The things you own are called assets. Cash. Investments. A house if you own one. A car. Jewelry. Anything valuable. The things you owe are called liabilities. Credit card debt. Student loans. Mortgages. Car loans. Subtract your total liabilities from your total assets. The result is your net worth. Wealthy people track this number over time. Growing net worth means financial progress. Shrinking net worth means financial trouble. The direction matters more than the size.` },
            { word: `balance sheet`,
              definition: `A financial snapshot listing all your assets and all your liabilities at a specific moment. The difference between the two columns is your net worth.`,
              audioPrompt: `A balance sheet lists everything you own and everything you owe at a specific moment in time, {name}. Assets in one column, liabilities in another. The difference is your net worth. Companies use balance sheets to show investors their financial health. Individuals can make personal ones too. Your balance sheet might include savings, a car, and any debts you owe. Making a simple personal balance sheet once a year is one of the most useful habits in finance. It forces honest clarity about where you actually stand.` },
          ],
        },

        {
          id: `l06-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Assets vs Liabilities`,
          paragraphs: [
            `An ASSET is something that has VALUE you OWN. Cash in a bank account, investments, a home, a car, a business, collectibles, intellectual property (like a book you wrote that pays royalties). Some assets GROW in value over time (good investments, real estate in growing areas). Some assets STAY THE SAME (cash, though inflation slowly reduces its real value). Some assets DECREASE in value over time (cars, electronics, most consumer goods).`,
            `A LIABILITY is something you OWE. Credit card balances, student loans, mortgage balances, car loans, money you borrowed from friends or family. Liabilities usually have INTEREST attached, meaning you owe MORE over time if you don't pay them down. From L02 you know compound interest can work AGAINST you. Liabilities are where that happens. Smart financial thinking means GROWING your assets while keeping liabilities manageable. Some liabilities (a mortgage that helps you build equity in a home) can be reasonable. Others (high-interest credit card debt) almost always work against you.`,
          ],
          image: `/ue-assets/money/l06-s2-assets-liabilities.webp`,
          imageCaption: `Assets you own. Liabilities you owe. The mix shapes your financial life.`,
          vocab: [
            { word: `asset`,
              definition: `Something of value you own. Cash, investments, real estate, a business, valuable items. Some assets grow over time, some hold value, some decline.`,
              audioPrompt: `An asset is something of value you own, {name}. Cash in a bank account is an asset. Investments are assets. A home you own is an asset. A car is an asset. Even a business or valuable jewelry can be an asset. Some assets grow in value over time, like good investments or real estate in growing areas. Some hold roughly the same value, like cash (though inflation slowly reduces its real worth). Some assets decrease in value over time, like cars and electronics. Smart financial thinking favors growing assets.` },
            { word: `depreciation`,
              definition: `When something loses value over time. The opposite of appreciation. Cars, electronics, and most consumer goods depreciate. Understanding it changes how you think about spending.`,
              audioPrompt: `Depreciation is when something loses value over time, {name}. The opposite of appreciation. Most consumer goods depreciate. A car driven off the lot loses about 20 percent of its value in the first year. Electronics lose value fast once newer models arrive. Clothes and most physical possessions depreciate over time. This is why financial experts say: buy assets that appreciate, minimize assets that depreciate. If you buy a 30,000 dollar car today, it might be worth 15,000 dollars in a few years. That lost value is depreciation.` },
          ],
        },

        {
          id: `l06-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Income vs Wealth: The Surprising Difference`,
          paragraphs: [
            `Here's something that surprises most people. INCOME and WEALTH are NOT THE SAME. INCOME is how much money flows into your life each year. WEALTH (measured by net worth) is how much you've ACCUMULATED. They're related, but you can have lots of one and not much of the other. A surgeon might earn $400,000 a year (very high income) but spend it all on a huge mortgage, expensive cars, and luxury vacations. Their net worth might be small or even negative. They're high-income but not wealthy.`,
            `Meanwhile, a teacher earning $60,000 a year who saves and invests carefully for decades might quietly become wealthy. Lower income, but high net worth. There's even a term for this: "MILLIONAIRE NEXT DOOR." Many quietly wealthy people don't look rich. They drive normal cars, live in normal homes, but they own significant assets and have little debt. Their net worth is high. This pattern shows up in real research. People who LOOK rich often aren't. People who ARE rich often don't look it. Income matters, but what you DO with income matters more.`,
          ],
          image: `/ue-assets/money/l06-s3-income-vs-wealth.webp`,
          imageCaption: `High income can mask low net worth. Modest income can quietly build wealth.`,
          vocab: [
            { word: `liability`,
              definition: `Something you OWE. Credit card debt, student loans, mortgages, car loans. Liabilities usually have interest that grows over time if not paid down.`,
              audioPrompt: `A liability is something you owe, {name}. Credit card balances. Student loans. The remaining balance on a mortgage. Car loans. Money you borrowed from friends or family. Liabilities usually have interest attached, meaning you owe more over time if you don't pay them down. From compound interest, we know interest can work against you. Liabilities are exactly where that happens. Smart financial thinking means keeping liabilities manageable. Some liabilities (a mortgage that builds home equity) can be reasonable. Others (high-interest credit card debt) almost always work against you.` },
            { word: `debt`,
              definition: `Money you owe to someone else. A mortgage, car loan, or credit card balance are all debt. Most debt has interest that grows over time if not paid down.`,
              audioPrompt: `Debt is money you owe to someone else, {name}. A mortgage is debt. A car loan is debt. A credit card balance is debt. Most debt comes with interest, meaning the amount you owe grows over time if you don't pay it down. Some debt is reasonable: borrowing to buy a home or fund education. Other debt is almost always harmful: high-interest credit card balances, payday loans. The key is knowing the difference. Managing debt carefully is one of the most important financial skills adults need.` },
          ],
        },

        {
          id: `l06-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `How Net Worth Actually Grows`,
          paragraphs: [
            `Net worth grows in two main ways. (1) ADDING ASSETS: saving money, buying investments, paying down debt, building equity in a home or business. (2) ASSETS GROWING ON THEIR OWN: stocks going up, real estate appreciating, a business becoming more valuable. Both matter. The first comes from your habits (saving, investing, smart purchases). The second comes from compounding and time (which you learned about in L02).`,
            `For most people, net worth grows SLOWLY at first and then ACCELERATES. The first $10,000 is the hardest. Once you have meaningful assets, those assets start growing on their own through compound interest. Eventually, the growth on your assets can exceed your income. That's the moment wealthy people describe as "money making money." It takes years to reach. But the people who get there usually started young, kept their gap positive (L05), avoided high-interest debt, and let compound interest work over decades. Ace's note: Net worth isn't about appearances. It's about what's actually true. Many people optimize for looking wealthy. Smart people optimize for being wealthy. Those are different games.`,
          ],
          image: `/ue-assets/money/l06-s4-growth.webp`,
          imageCaption: `Slow at first. Then accelerates. Eventually assets earn more than effort.`,
          vocab: [
            { word: `equity`,
              definition: `The portion of something you actually OWN, after subtracting any debt on it. If your home is worth $400,000 and you still owe $250,000 on the mortgage, your equity is $150,000.`,
              audioPrompt: `Equity is the portion of something you own, after subtracting any debt on it, {name}. If your home is worth 400,000 dollars and you still owe 250,000 dollars on the mortgage, your equity is 150,000 dollars. Equity grows in two ways. You pay down the debt. Or the asset increases in value. Or both. Equity in a home is one of the biggest assets most families own. The same concept applies to businesses (your share of ownership). Building equity is one of the main ways net worth grows over time.` },
            { word: `portfolio`,
              definition: `The collection of all the investments you own — stocks, bonds, mutual funds, real estate, and cash. The mix is called your asset allocation.`,
              audioPrompt: `A portfolio is the collection of all the investments you own, {name}. Stocks, bonds, mutual funds, real estate, and cash might all be part of it. The mix of assets in your portfolio is called your asset allocation. Young people often hold more stocks. Older people often shift toward bonds for stability. A well-diversified portfolio spreads money across many investments so no single failure can ruin you. Wealthy people think of their portfolio as a whole. Growing and protecting it is how wealth compounds over time.` },
          ],
        },

        {
          id: `l06-game`,
          type: `interactive`,
          format: `investigation`,
          guideText: `Investigation time, {name}. Four financial items. For each one, identify what it is: ASSET (something you own that has value), LIABILITY (something you owe), or NEITHER (something that affects your money but isn't really either)?\n\nOne is sneakier than it looks.`,
          options: [
            { id: `asset`,     label: `Asset`,      color: `#34D399`, description: `Something of value you own. Cash, investments, real estate, valuable items.` },
            { id: `liability`, label: `Liability`,  color: `#F87171`, description: `Something you owe. Debts, loans, credit card balances.` },
            { id: `neither`,   label: `Neither`,    color: `#60A5FA`, description: `Something that affects money flow but isn't really an asset or liability on its own.` },
          ],
          cases: [
            {
              id: `case-1`,
              caseTitle: `Item #1: $5,000 in a savings account`,
              clues: [
                { text: `Money you own, in your name.` },
                { text: `You could withdraw it tomorrow if you wanted.` },
                { text: `It earns a small amount of interest.` },
              ],
              correctAnswer: `asset`,
              realWorldExample: `Savings accounts are classic, simple assets.`,
              explanation: `Money you own. Available to use. Earning a little interest. Pure asset. The classic starting point for most people's net worth.`,
            },
            {
              id: `case-2`,
              caseTitle: `Item #2: $3,500 owed on a credit card at 22% interest`,
              clues: [
                { text: `Money the credit card company says you owe them.` },
                { text: `Charges 22% interest, which compounds monthly if not paid.` },
                { text: `Will grow over time unless paid down.` },
              ],
              correctAnswer: `liability`,
              realWorldExample: `High-interest credit card debt is one of the most damaging liabilities.`,
              explanation: `Money owed. Interest compounding. Growing if not paid. Pure liability. And one of the most expensive kinds. 22% credit card interest can double a balance in just over 3 years if you don't pay it down.`,
            },
            {
              id: `case-3`,
              caseTitle: `Item #3: A $25,000 salary increase next year`,
              clues: [
                { text: `Higher monthly income starting January.` },
                { text: `Roughly $1,500 more per month after taxes.` },
                { text: `Hasn't been earned yet — depends on staying employed.` },
              ],
              correctAnswer: `neither`,
              realWorldExample: `Future income doesn't count as current net worth.`,
              explanation: `Tricky because higher income FEELS like wealth. But income isn't an asset until it's been EARNED and SAVED. A salary increase improves your FUTURE cash flow, but doesn't change your current net worth at all. It's potential, not assets. Pure neither.`,
            },
            {
              id: `case-4`,
              caseTitle: `Item #4 — The Tricky One: A $50,000 luxury car bought with a 60-month loan`,
              clues: [
                { text: `The car is worth $50,000 today.` },
                { text: `$45,000 is still owed on the loan.` },
                { text: `Cars lose about 20% of their value in the first year of ownership.` },
              ],
              correctAnswer: `asset`,
              realWorldExample: `Cars are technically assets, though they lose value fast.`,
              explanation: `Tricky because cars feel like they hurt finances (loan, depreciation). For NET WORTH PURPOSES, the car is technically an ASSET (you own it, $50,000 value) and the loan is a LIABILITY ($45,000 owed). Together they're $5,000 of equity. But here's the catch: the car loses value fast. After 1 year, the car might be worth $40,000 while you still owe $40,000+. Your equity could go NEGATIVE quickly. Lesson: cars are depreciating assets. Real wealthy people often drive modest cars because they understand this. A car is an asset on paper but a wealth-shrinker in practice.`,
            },
          ],
        },

        {
          id: `l06-quiz`,
          type: `quiz`,
          guideText: `Let's see what stuck, {name}.`,
          questions: [
            { id: `l06-q1`, format: `multiple-choice`,
              question: `What's the formula for NET WORTH?`,
              options: [
                `Income minus taxes`,
                `Everything you own (assets) minus everything you owe (liabilities)`,
                `Total salary over your lifetime`,
                `Just savings`,
              ],
              correctIndex: 1,
              explanation: `Net worth = assets minus liabilities. Add up everything of value you own. Subtract everything you owe. The result is your net worth. This is how wealthy people actually measure financial progress, not income.` },

            { id: `l06-q2`, format: `multiple-choice`,
              question: `What is an ASSET?`,
              options: [
                `A loan`,
                `Something of value you own: cash, investments, real estate, valuable items`,
                `Income`,
                `A salary`,
              ],
              correctIndex: 1,
              explanation: `Assets are things you own that have value. Some grow (good investments, real estate in growing areas). Some hold value (cash, but inflation slowly reduces it). Some decline (cars, electronics). What matters is what kinds of assets you own.` },

            { id: `l06-q3`, format: `multiple-choice`,
              question: `What is a LIABILITY?`,
              options: [
                `An advantage`,
                `Something you OWE: credit cards, loans, mortgages, debts`,
                `Your savings`,
                `Your house`,
              ],
              correctIndex: 1,
              explanation: `Liabilities are debts. Credit card balances, student loans, mortgages, car loans. They usually have interest attached, meaning they grow over time if not paid down. Liabilities are where compound interest works AGAINST you.` },

            { id: `l06-q4`, format: `multiple-choice`,
              question: `What's the relationship between INCOME and WEALTH?`,
              options: [
                `They're the same`,
                `Related but not the same — high income can come with low wealth (if money is spent), and modest income can lead to high wealth (if saved well)`,
                `Income is always wealth`,
                `Wealth requires high income`,
              ],
              correctIndex: 1,
              explanation: `Income is what comes in each year. Wealth (net worth) is what you've accumulated. A high-income person can have low net worth if they spend everything. A lower-income person who saves well can quietly become wealthy. The pattern surprises most people.` },

            { id: `l06-q5`, format: `true-false`,
              question: `True or false: Many people who LOOK wealthy (expensive cars, big houses) actually have LOW net worth, while many quietly wealthy people don't look rich at all.`,
              correctAnswer: true,
              explanation: `True. There's research and a famous book called "The Millionaire Next Door" that documents this. People who look rich often spend everything on appearances. People who are quietly wealthy often live modestly and accumulate assets. The pattern is consistent across many studies.` },

            { id: `l06-q6`, format: `multiple-choice`,
              question: `What is EQUITY?`,
              options: [
                `Just income`,
                `The portion of something you actually own, after subtracting any debt on it`,
                `Your salary`,
                `Your taxes`,
              ],
              correctIndex: 1,
              explanation: `If a home is worth $400,000 and you owe $250,000 on the mortgage, your equity is $150,000. Equity grows by paying down debt OR by the asset increasing in value. Building equity is one of the main ways net worth grows.` },

            { id: `l06-q7`, format: `multiple-choice`,
              question: `What are the TWO main ways net worth grows?`,
              options: [
                `Winning the lottery, inheritance`,
                `Adding assets (saving, investing, paying down debt) AND assets growing on their own (compound growth over time)`,
                `Only by earning more`,
                `Only by spending less`,
              ],
              correctIndex: 1,
              explanation: `Net worth grows when you add assets through saving, investing, or paying down debt. It also grows when your existing assets appreciate (stocks rise, real estate appreciates). Most wealthy people use both over many years.` },

            { id: `l06-q8`, format: `multiple-choice`,
              question: `Why might a CAR not actually grow your wealth, even though it's technically an asset?`,
              options: [
                `It's not an asset`,
                `Cars lose value quickly (depreciate). You can owe more than the car is worth within a year or two.`,
                `Cars are expensive`,
                `Cars are too small`,
              ],
              correctIndex: 1,
              explanation: `Cars are depreciating assets. They lose about 20% of value in the first year, more over time. If you finance a car with a loan, you can owe more than it's worth quickly. This is why many wealthy people drive modest cars — they understand the math.` },
          ],
        },

        {
          id: `l06-reflection`,
          type: `reflection`,
          guideText: `Before we wrap, {name}, pick ONE question and actually answer it. Your response gets saved, and I'll remember it next time we talk.`,
          prompts: [
            { id: `r1`, text: `If you had to estimate your own net worth right now (what you own minus what you owe — kids usually don't owe much), roughly what would it be? Cash in savings? Things you own?` },
            { id: `r2`, text: `Imagine two adults. One earns $200,000 a year and spends it all. One earns $80,000 and saves $20,000 a year. After 20 years, who has more net worth? Why?` },
            { id: `r3`, text: `The "millionaire next door" idea suggests many quietly wealthy people don't look rich. What does that suggest about what looking rich actually means?` },
            { id: `r4`, text: `If you could only choose ONE — to grow your INCOME or to grow your NET WORTH — which would you choose, and why?` },
          ],
        },

        {
          id: `l06-realworld`,
          type: `real-world`,
          guideText: `Net worth is the measurement adults actually use to understand their financial position. It tells the truth in ways income alone can't. Tracking net worth annually (most people use a simple spreadsheet) reveals patterns: which assets are growing, which liabilities are shrinking, whether the overall direction is positive. Most financial advisors look at net worth before they look at income. Ace's tip: by the time you're 25, knowing your own net worth puts you ahead of about 90% of your peers. It's a habit worth starting young.`,
          familyAdventure: `Family Net Worth Estimate. As a family (at age-appropriate detail), make a rough list together. What are your family's main assets? (Home, car, savings, retirement accounts, investments.) What are your main liabilities? (Mortgage, car loans, credit cards.) Without needing exact numbers, just notice the SHAPE of the picture. This is exactly what financial planners do with clients.`,
          creativePrompt: {
            intro: `Imagine you're 35 years old and writing a yearly net worth review. Pretend numbers are fine. Write the review.`,
            floor: `Write at least 5 sentences. List your main assets, your main liabilities, your current net worth, and how it changed from last year.`,
            stretch: `Write 8 to 10 sentences. Cover assets in detail (home, investments, savings), liabilities (mortgage, car loan), this year's net worth change, and what choices contributed.`,
            open: `Write as much as you want. Build a full annual review. Cover every asset and liability category. Show year-over-year change. Analyze what choices drove the growth (or shrinking). Set goals for next year. This is the kind of review smart adults do every January.`,
            frames: [
              `My net worth at age 35 is approximately ___.`,
              `My main assets are ___.`,
              `My main liabilities are ___.`,
              `Compared to last year, my net worth ___ because ___.`,
              `My goal for next year is ___.`,
            ],
          },
        },

        {
          id: `l06-celebration`,
          type: `celebration`,
          message: `Great work, {name}. You can now define net worth, calculate it from assets and liabilities, understand the difference between income and wealth, and recognize why looking rich isn't the same as being rich. Next lesson: we go deeper into specific assets. STOCKS, BONDS, and MUTUAL FUNDS. The three main ways regular people invest. — Ace.`,
          badge: `net-worth-tracker`,
          badgeName: `Net Worth Tracker`,
          xpEarned: 75,
        },
      ],
    },
  ],
};

export default MONEY_UE_L06;

// ─── Dev asset check ──────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const screens = MONEY_UE_L06.lessons[0].screens;
  const mags = screens.filter(s => s.type === 'magazine').length;
  const game = screens.find(s => s.type === 'interactive')?.cases?.length ?? 0;
  const quiz = screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  const refl = screens.find(s => s.type === 'reflection')?.prompts?.length ?? 0;
  const totalVocab = screens.filter(s => s.type === 'magazine').reduce((sum, s) => sum + (s.vocab?.length || 0), 0);
  console.log(`[LESSON-MONEY-UE-L06 v1] Loaded with ${mags} magazine sections, ${totalVocab} vocab terms, ${game} game cases, ${quiz} quiz Qs, ${refl} reflection prompts`);
}
