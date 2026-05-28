// ─────────────────────────────────────────────────────────────────────────────
// MONEY & BUSINESS UE  |  L07 — Stocks, Bonds, and Mutual Funds
// Age band : upper_explorers (9–10)   Guide: ace
// Standards: Jump$tart Personal Finance — Investing fundamentals;
//            Understanding risk and return
// CALIBRATED: UE spec v1.1 — real domain terms, em-dashes sparing
// SCOPE: 4 concepts — what stocks are (ownership), bonds (lending),
//        mutual/index funds (diversification), risk vs return basics
// VERSION: v1
// ─────────────────────────────────────────────────────────────────────────────

const MONEY_UE_L07 = {
  ageBand: `upper_explorers`,
  subjectId: `money`,
  guide: `ace`,

  lessons: [
    {
      id: `mb-9-10-07`,
      title: `Stocks, Bonds, and Mutual Funds`,
      duration: 18,
      xpReward: 75,
      badge: `investment-thinker`,
      badgeName: `Investment Thinker`,

      screens: [
        {
          id: `l07-welcome`,
          type: `welcome`,
          guideText: `Hey {name}, Ace here. Today we look at HOW regular people actually INVEST their money. Not theory. Real assets that real people own. STOCKS, BONDS, and MUTUAL FUNDS. These three are the foundation of most modern investing. By the end of today, you'll understand what each one IS, how they work, and the basic trade-off between risk and return. This is the kind of knowledge most adults wish they'd learned earlier. Let's go.`,
          headline: `Stocks, Bonds, Mutual Funds`,
          subtitle: `The three main assets most people use to build wealth`,
          visual: `/ue-assets/money/l07-welcome.webp`,
        },

        {
          id: `l07-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Stocks: Owning a Piece of a Company`,
          paragraphs: [
            `A STOCK (also called a "share") is a tiny piece of OWNERSHIP in a company. If a company has issued 1,000,000 shares total and you own 100 of them, you own 0.01% of the company. When the company makes money and grows, your shares typically become more valuable. When the company struggles, your shares lose value. Some companies also pay DIVIDENDS, which is a small portion of profits paid to shareholders.`,
            `People buy stocks because companies CAN grow significantly over time. If you bought Amazon stock in 1997 (when the company started), $1,000 would be worth over $2 million today. Most companies don't grow that much, but the historical average for the entire U.S. stock market is roughly 7-10% per year over long periods. Stocks are RISKIER than savings accounts (they can lose value, sometimes dramatically). But over long time periods, they have historically grown much faster. That's the basic trade-off: higher potential reward in exchange for higher short-term risk.`,
          ],
          image: `/ue-assets/money/l07-s1-stocks.webp`,
          imageCaption: `A stock is a tiny piece of company ownership. Grows with the company. Can shrink too.`,
          vocab: [
            { word: `stock`,
              definition: `A tiny piece of ownership in a company. If the company grows, your stock typically grows in value. Stocks can also lose value. Historically the stock market grows 7-10% per year on average over long periods.`,
              audioPrompt: `A stock is a tiny piece of ownership in a company, {name}. Also called a share. When the company grows, your shares typically become more valuable. When the company struggles, your shares lose value. People buy stocks because companies can grow significantly over time. The U.S. stock market has historically grown 7 to 10 percent per year on average over long periods. Stocks are riskier than savings accounts but can grow much faster.` },
            { word: `dividend`,
              definition: `A payment companies make to shareholders from their profits. Not all companies pay dividends — fast-growing companies often reinvest profits instead. Stable, older companies often pay dividends regularly.`,
              audioPrompt: `A dividend is a payment companies make to shareholders from their profits, {name}. Not all companies pay dividends. Many fast-growing companies reinvest all profits back into the business. But many older, more stable companies pay dividends regularly — often every three months. If you own 100 shares of a company that pays 2 dollars in dividends per share each year, you receive 200 dollars per year for owning the shares. Dividends are one way stocks produce income beyond price growth. Many investors in retirement seek dividend-paying stocks for steady income.` },
          ],
        },

        {
          id: `l07-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Bonds: Lending Money to Earn Interest`,
          paragraphs: [
            `A BOND is essentially a LOAN you give to a government or company. They borrow money from you. In return, they promise to (1) PAY YOU INTEREST regularly, and (2) RETURN your original money on a specific date. If you buy a $1,000 bond paying 4% interest for 10 years, you'd get $40 per year for 10 years, then your $1,000 back. The U.S. government issues bonds (often called Treasury bonds, or just "Treasuries"). So do most large companies (called corporate bonds).`,
            `Bonds are GENERALLY LESS RISKY than stocks. The interest is predictable. You know exactly what you're getting if the borrower doesn't fail. But bonds also GROW SLOWER on average. Where stocks have historically averaged 7-10% per year, bonds typically average 3-5%. The trade-off again: lower risk, lower expected return. Most adults who invest own BOTH stocks AND bonds. Younger people often hold more stocks (longer time to ride out risk). Older people often hold more bonds (need stability since they may need the money sooner).`,
          ],
          image: `/ue-assets/money/l07-s2-bonds.webp`,
          imageCaption: `A bond is a loan you give. Predictable interest. Less risky, slower growth.`,
          vocab: [
            { word: `bond`,
              definition: `A loan you give to a government or company. They pay you regular interest and return your original money on a specific date. Lower risk and lower return than stocks.`,
              audioPrompt: `A bond is a loan you give to a government or company, {name}. In return, they pay you interest regularly and return your original money on a specific date. If you buy a 1,000 dollar bond paying 4 percent interest for 10 years, you get 40 dollars per year, then your 1,000 dollars back. Bonds are less risky than stocks but grow more slowly. The trade-off: lower risk, lower expected return.` },
            { word: `yield`,
              definition: `The return you earn from an investment expressed as a percentage. A bond paying $40 per year on a $1,000 investment has a 4% yield. Higher yield usually signals higher risk.`,
              audioPrompt: `Yield is the return you earn from an investment expressed as a percentage, {name}. A bond paying 40 dollars per year on a 1,000 dollar investment has a 4 percent yield. A stock paying dividends has a dividend yield calculated the same way. Higher yield usually means higher risk — a 10 percent yield often signals a riskier investment. Understanding yield helps you compare very different investments on the same scale. When choosing between a bond and a savings account, yield tells you which one pays more per dollar invested.` },
          ],
        },

        {
          id: `l07-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Mutual Funds and Index Funds: Buying Many Things at Once`,
          paragraphs: [
            `A MUTUAL FUND is a pool of money from many investors used to buy many different stocks (or bonds, or both) at once. Instead of trying to pick the "right" stock, you buy ONE mutual fund and immediately own pieces of dozens or hundreds of companies. This is called DIVERSIFICATION. If one company in the fund does badly, others might do well, so your overall investment is more stable.`,
            `INDEX FUNDS are a specific kind of mutual fund. They're designed to match the performance of a whole market or section of the market. The S&P 500 index fund, for example, owns shares in the 500 biggest U.S. companies in roughly the right proportions. Buying one S&P 500 index fund means you own a tiny piece of all 500 of those companies. Index funds have very LOW FEES compared to other mutual funds. Many studies show that simple index funds outperform actively managed mutual funds over long periods. This is why index funds are extremely popular with both new and experienced investors. Boring? Yes. Effective? Also yes.`,
          ],
          image: `/ue-assets/money/l07-s3-funds.webp`,
          imageCaption: `Mutual funds and index funds: buy many investments at once. Spread risk. Lower fees.`,
          vocab: [
            { word: `mutual fund`,
              definition: `A pool of money from many investors used to buy many different stocks or bonds at once. Spreads risk through diversification. Index funds are a low-fee type that match whole market performance.`,
              audioPrompt: `A mutual fund is a pool of money from many investors used to buy many different stocks or bonds at once, {name}. Instead of picking one stock, you own pieces of dozens or hundreds of companies. If one company does badly, others might do well. This is called diversification. Index funds are a specific kind of mutual fund that match the performance of a whole market. They have very low fees and have historically performed well over long periods.` },
            { word: `expense ratio`,
              definition: `The annual fee a mutual fund or index fund charges, expressed as a percentage of your investment. Index funds typically charge under 0.1%. Many managed funds charge 1–2%. The difference compounds into thousands over decades.`,
              audioPrompt: `An expense ratio is the annual fee a fund charges, as a percentage of your investment, {name}. A 0.1 percent expense ratio means you pay 1 dollar per year on every 1,000 dollars invested. A 1.5 percent ratio means 15 dollars. That sounds small, but over 30 years the difference compounds into thousands of dollars. Index funds typically charge less than 0.1 percent. Many managed funds charge 1 to 2 percent. This fee gap is one main reason simple index funds tend to outperform managed ones over long periods.` },
          ],
        },

        {
          id: `l07-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Risk vs Return: The Trade-Off`,
          paragraphs: [
            `Every investment has TWO key features. POTENTIAL RETURN (how much it might grow) and RISK (how much it could lose). The basic rule of investing is: HIGHER POTENTIAL RETURN almost always comes with HIGHER RISK. Savings accounts have very low risk but barely beat inflation. Bonds have moderate risk and moderate return. Stocks have higher risk and higher potential return. Cryptocurrency and individual hot stocks have very high risk and very high potential return (or loss).`,
            `Smart investing matches your TIME HORIZON to the right risk level. If you need money in 1 year, low-risk investments make sense (you don't have time to recover from a market crash). If you don't need money for 30+ years, higher-risk investments can work because you have time for short-term crashes to recover. This is why younger people are often advised to invest mostly in stocks (long time horizon), while people close to retirement shift to bonds (shorter time horizon). One more rule: don't put all your money in ONE investment. DIVERSIFICATION (spreading money across many investments) is one of the most reliable ways to manage risk.`,
          ],
          image: `/ue-assets/money/l07-s4-risk-return.webp`,
          imageCaption: `Higher returns come with higher risks. Time horizon shapes smart choices.`,
          vocab: [
            { word: `diversification`,
              definition: `Spreading money across many different investments to reduce risk. If one investment loses money, others might gain, so your overall portfolio is more stable.`,
              audioPrompt: `Diversification means spreading money across many different investments to reduce risk, {name}. If you put all your money in one stock and it crashes, you lose almost everything. If you spread it across 100 different stocks, one crash barely affects you because the others can balance it out. Mutual funds and index funds make diversification easy — with one purchase, you own pieces of hundreds of companies. Most financial advisors call it one of the strongest reliable principles in investing.` },
            { word: `risk`,
              definition: `The chance you could lose money on an investment. Every investment has some risk. Higher risk means more potential for loss — but also more potential for gain. Matching risk to your time horizon is key.`,
              audioPrompt: `Risk in investing means the chance you could lose money, {name}. Every investment has some risk. Even a savings account has the risk of inflation slowly eating its value. Higher-risk investments can lose a lot fast but also grow a lot. Lower-risk investments are more stable but grow slowly. The key is matching risk to your time horizon. If you need money in one year, keep risk low. If you won't need it for 30 years, you can afford more risk and have time to recover from any losses.` },
          ],
        },

        {
          id: `l07-game`,
          type: `interactive`,
          format: `investigation`,
          guideText: `Investigation time, {name}. Four investment scenarios. For each one, identify what kind of investment is being described: STOCK (ownership in a company), BOND (loan to a government or company), or MUTUAL/INDEX FUND (pool of many investments)?\n\nOne is sneakier than it looks.`,
          options: [
            { id: `stock`,    label: `Stock`,             color: `#34D399`, description: `Ownership in a single company. Higher risk, higher potential return.` },
            { id: `bond`,     label: `Bond`,              color: `#60A5FA`, description: `Loan to a government or company. Predictable interest. Lower risk, lower return.` },
            { id: `fund`,     label: `Mutual/Index Fund`, color: `#A78BFA`, description: `Pool of many investments. Diversified. Spreads risk across companies.` },
          ],
          cases: [
            {
              id: `case-1`,
              caseTitle: `Investment #1`,
              clues: [
                { text: `Maya buys 50 shares of Apple at $200 each, for a total of $10,000.` },
                { text: `She now owns a tiny percentage of Apple.` },
                { text: `If Apple grows, her shares grow in value. If Apple struggles, they shrink.` },
              ],
              correctAnswer: `stock`,
              realWorldExample: `Buying individual company shares is the most direct way to own stocks.`,
              explanation: `Direct ownership in ONE specific company (Apple). Value tied to that company's performance. Pure stock. Concentrated in a single business, which means higher risk than diversified options.`,
            },
            {
              id: `case-2`,
              caseTitle: `Investment #2`,
              clues: [
                { text: `David buys a $5,000 U.S. Treasury, paying 4% interest, with a 10-year term.` },
                { text: `He'll receive $200 in interest every year for 10 years.` },
                { text: `At the end of 10 years, he gets his $5,000 back.` },
              ],
              correctAnswer: `bond`,
              realWorldExample: `Treasury bonds are some of the lowest-risk investments available.`,
              explanation: `Loaning money to the government. Receiving predictable interest. Getting principal back at maturity. Pure bond. U.S. Treasuries are considered some of the safest investments because the U.S. government is extremely unlikely to default.`,
            },
            {
              id: `case-3`,
              caseTitle: `Investment #3`,
              clues: [
                { text: `Liam buys $5,000 of an S&P 500 index fund.` },
                { text: `This one purchase makes him a part-owner of the 500 biggest U.S. companies in correct proportions.` },
                { text: `If a few companies struggle, others can offset them.` },
              ],
              correctAnswer: `fund`,
              realWorldExample: `S&P 500 index funds are some of the most popular investments today.`,
              explanation: `One purchase, 500 companies. Diversified. Lower risk than any single stock. Pure index fund. This is what most personal finance advisors recommend as a starting point for new investors.`,
            },
            {
              id: `case-4`,
              caseTitle: `Investment #4 — The Tricky One`,
              clues: [
                { text: `Sara buys $2,000 of a "Growth Mutual Fund."` },
                { text: `The fund holds 80 different stocks chosen by a professional manager.` },
                { text: `The fund charges a 1.5% annual fee for the manager's expertise.` },
              ],
              correctAnswer: `fund`,
              realWorldExample: `Actively managed mutual funds are common but often have higher fees.`,
              explanation: `Tricky because it's not an INDEX fund — it's a managed mutual fund. But it's still a MUTUAL FUND. The key difference: managed funds have a person picking stocks (1.5% fee), while index funds just match the market (much lower fees, often 0.05%). Most studies show that managed funds DON'T beat simple index funds over long periods, even though they charge more. Lesson: mutual funds and index funds are related, but the FEE structure makes a big difference. A 1.5% annual fee over 30 years could cost tens of thousands of dollars. This is why index funds have gained so much popularity.`,
            },
          ],
        },

        {
          id: `l07-quiz`,
          type: `quiz`,
          guideText: `Let's see what stuck, {name}.`,
          questions: [
            { id: `l07-q1`, format: `multiple-choice`,
              question: `What is a STOCK?`,
              options: [
                `A type of loan`,
                `A tiny piece of OWNERSHIP in a company`,
                `A bond`,
                `A savings account`,
              ],
              correctIndex: 1,
              explanation: `A stock is partial ownership in a company. When the company grows, your shares grow in value. When it struggles, they shrink. Stocks have higher risk than savings or bonds but also higher historical returns over long periods.` },

            { id: `l07-q2`, format: `multiple-choice`,
              question: `What is a BOND?`,
              options: [
                `Ownership of a company`,
                `A LOAN you give to a government or company in exchange for predictable interest and your money back later`,
                `A type of stock`,
                `Cash`,
              ],
              correctIndex: 1,
              explanation: `When you buy a bond, you're loaning money. The borrower pays you regular interest, then returns your original money on a specific date. Bonds are usually safer than stocks but also grow more slowly.` },

            { id: `l07-q3`, format: `multiple-choice`,
              question: `What is a MUTUAL FUND?`,
              options: [
                `A type of bank account`,
                `A POOL of money from many investors that buys many stocks or bonds at once — provides diversification`,
                `A single stock`,
                `A loan`,
              ],
              correctIndex: 1,
              explanation: `Mutual funds let you own many investments with one purchase. Instead of buying 100 different stocks separately, you buy one fund that owns them. This is called diversification and reduces risk.` },

            { id: `l07-q4`, format: `multiple-choice`,
              question: `What's an INDEX FUND?`,
              options: [
                `A library`,
                `A type of mutual fund designed to match a whole market or section of the market — usually has very low fees`,
                `A single stock`,
                `A bond`,
              ],
              correctIndex: 1,
              explanation: `Index funds match market performance instead of trying to beat it. An S&P 500 index fund owns the 500 biggest U.S. companies. Fees are very low. Studies show simple index funds often outperform expensive managed funds over long periods.` },

            { id: `l07-q5`, format: `true-false`,
              question: `True or false: Generally, HIGHER potential returns come with HIGHER risk.`,
              correctAnswer: true,
              explanation: `True. Savings accounts have very low risk and very low returns. Bonds have moderate risk and moderate returns. Stocks have higher risk and higher potential returns. This trade-off is one of the most basic rules in investing.` },

            { id: `l07-q6`, format: `multiple-choice`,
              question: `What is DIVERSIFICATION?`,
              options: [
                `Buying only one stock`,
                `Spreading money across many different investments to reduce risk`,
                `Just saving cash`,
                `Avoiding investing`,
              ],
              correctIndex: 1,
              explanation: `Diversification means not putting all your money in one investment. If you spread it across many, one failing doesn't ruin you. Mutual funds and index funds make this easy. Most financial advisors call diversification one of investing's strongest reliable principles.` },

            { id: `l07-q7`, format: `multiple-choice`,
              question: `Why are YOUNGER investors often advised to invest more in STOCKS than in BONDS?`,
              options: [
                `Stocks are nicer`,
                `Because younger people have a long time horizon — they have many years for short-term crashes to recover, so higher-risk/higher-return investments can work better`,
                `Bonds aren't real`,
                `Just personal preference`,
              ],
              correctIndex: 1,
              explanation: `Time horizon matters. Younger people have decades for stocks to recover from crashes, so they can take more risk. People close to retirement can't afford a major crash, so they shift toward bonds for stability. Matching risk to time horizon is core investing wisdom.` },

            { id: `l07-q8`, format: `multiple-choice`,
              question: `What's the HISTORICAL AVERAGE return for the U.S. stock market over long periods?`,
              options: [
                `1-2% per year`,
                `Roughly 7-10% per year, on average, over many decades`,
                `50% per year`,
                `0%`,
              ],
              correctIndex: 1,
              explanation: `The U.S. stock market has averaged 7-10% per year over long periods. Some years are much higher, some are losses. The average comes from holding through both good and bad years. Combined with compound interest, this can be very powerful over decades.` },
          ],
        },

        {
          id: `l07-reflection`,
          type: `reflection`,
          guideText: `Before we wrap, {name}, pick ONE question and actually answer it. Your response gets saved, and I'll remember it next time we talk.`,
          prompts: [
            { id: `r1`, text: `If you could invest $1,000 RIGHT NOW in just one of: a single stock, a bond, or an index fund — which would you pick, and why?` },
            { id: `r2`, text: `Stocks can lose 30-40% in a bad year. Bonds usually don't. Which would worry you more — short-term losses or slower growth over decades?` },
            { id: `r3`, text: `Diversification means not putting all your money in one place. Where else in life have you noticed this principle working?` },
            { id: `r4`, text: `If you had to teach this lesson to a friend in 3 sentences, which 3 sentences would you use?` },
          ],
        },

        {
          id: `l07-realworld`,
          type: `real-world`,
          guideText: `Most adults who become financially secure invest in some combination of these three: stocks, bonds, and funds. Index funds especially have become the most popular choice for new and experienced investors alike, because they're simple, low-cost, and effective. Most workplace retirement accounts (401k's, IRAs in the U.S.) are built primarily on funds. Understanding these basics in your teens or early 20s gives you a huge head start. Ace's note: you don't have to be a stock-picking expert to invest well. Most professional investors don't beat simple index funds. Patience plus diversification plus time plus compound interest is the recipe.`,
          familyAdventure: `Family Hypothetical Portfolio. As a family, imagine you had $10,000 to invest. Split it (on paper) however you'd like across: a few individual stocks, a Treasury bond, and an S&P 500 index fund. Talk about WHY you'd choose each portion. There's no "right" answer. The thinking is what matters. Then check in 6 months to see how your hypothetical portfolio would have done.`,
          creativePrompt: {
            intro: `Imagine you're 25 years old with your first real paycheck and you want to start investing. Write a letter to yourself explaining how you'll invest.`,
            floor: `Write at least 5 sentences. Cover what you'd start with, what kind of investments you'd pick, and why.`,
            stretch: `Write 8 to 10 sentences. Include stocks, bonds, mutual/index funds, your time horizon, and how you'd handle a market downturn.`,
            open: `Write as much as you want. Build a full first-investor plan. Cover what kinds of investments you'd use, how you'd diversify, what your monthly contribution would look like, and what you'd do during a market crash. Show you've thought about both growth AND risk management.`,
            frames: [
              `At 25, I'd start investing about ___ per month.`,
              `Most of it would go into ___ because ___.`,
              `Some of it would go into ___ for stability.`,
              `My time horizon is about ___ years, so I'm willing to ___.`,
              `If the market crashes, I would ___.`,
            ],
          },
        },

        {
          id: `l07-celebration`,
          type: `celebration`,
          message: `Great work, {name}. You can now explain stocks, bonds, mutual funds, and index funds, understand the trade-off between risk and return, and recognize why diversification matters. Next lesson: another major investment many adults use. REAL ESTATE. Houses, apartments, and land as wealth-building tools. — Ace.`,
          badge: `investment-thinker`,
          badgeName: `Investment Thinker`,
          xpEarned: 75,
        },
      ],
    },
  ],
};

export default MONEY_UE_L07;

// ─── Dev asset check ──────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const screens = MONEY_UE_L07.lessons[0].screens;
  const mags = screens.filter(s => s.type === 'magazine').length;
  const game = screens.find(s => s.type === 'interactive')?.cases?.length ?? 0;
  const quiz = screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  const refl = screens.find(s => s.type === 'reflection')?.prompts?.length ?? 0;
  const totalVocab = screens.filter(s => s.type === 'magazine').reduce((sum, s) => sum + (s.vocab?.length || 0), 0);
  console.log(`[LESSON-MONEY-UE-L07 v1] Loaded with ${mags} magazine sections, ${totalVocab} vocab terms, ${game} game cases, ${quiz} quiz Qs, ${refl} reflection prompts`);
}
