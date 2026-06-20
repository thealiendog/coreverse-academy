// ─────────────────────────────────────────────────────────────────────────────
// MONEY & BUSINESS VOYAGER  |  L05 — How Stocks Actually Work
// Age band : voyagers (11-12)   Guide: ace (Eagle)
// Standards: Coreverse Original — Investing, Stock Markets
// CALIBRATED: Voyager spec v1.1 (May 2026)
// Interaction format: ARGUMENT BUILDER (active picking vs index funds vs no investing)
// ─────────────────────────────────────────────────────────────────────────────

const VERSION = "voyager-mb-l05-v1";

const MONEYBUSINESS_VOYAGER_L05 = {
  ageBand: `voyagers`,
  subjectId: `money-business`,
  guide: `ace`,

  lessons: [
    {
      id: `mb-11-12-05`,
      title: `How Stocks Actually Work`,
      duration: 35,
      xpReward: 75,
      badge: `stock-market-thinker`,
      badgeName: `Stock Market Thinker`,

      screens: [
        {
          id: `l05-welcome`,
          type: `welcome`,
          guideText: `{name}, a stock is a fractional ownership stake in a real business — not a number that goes up and down for mysterious reasons. Returns come from dividends, earnings growth, and valuation changes. Three serious positions on how to invest: active management, index funds, or don't invest yet. This lesson maps all three honestly.`,
          headline: `How Stocks Actually Work`,
          subtitle: `Ownership, returns, and the active-vs-passive debate.`,
          visual: `/voyager-assets/money-business/l05-welcome.webp`,
        },

        {
          id: `l05-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `What A Stock Actually Is`,
          paragraphs: [
            `A stock is a small piece of ownership in a company. When Apple has 15 billion shares outstanding and you own 100 of them, you own 100/15,000,000,000 of Apple. That's a tiny fraction, but it's real ownership. You're entitled to your proportional share of the company's profits, voting rights on certain decisions, and the value if the company is ever sold.`,
            `Companies issue stock for one main reason: to raise money without taking on debt. When Apple went public in 1980, they sold a portion of ownership to investors in exchange for cash. The company got money to grow. The investors got the chance to share in Apple's future profits and value. This basic transaction, multiplied across thousands of companies, is the foundation of the stock market.`,
            `When you buy a stock today, you're usually not buying directly from the company. You're buying from someone else who owned the stock and now wants to sell it. The price is set by supply and demand: whatever price buyers and sellers agree to. Companies' stock prices move constantly based on news, earnings, expectations, and broader market conditions. Over very long periods, stock prices tend to track the underlying business performance. Over short periods, prices can swing dramatically based on emotion, news cycles, and speculation.`,
          ],
          image: `/voyager-assets/money-business/l05-s1-stock.webp`,
          imageCaption: `A stock is real ownership in a real company. Tiny pieces, real claims.`,
          vocab: [
            {
              word: `share`,
              definition: `A unit of stock ownership in a company. If a company has issued 1 million shares and you own 1,000, you own 0.1% of the company.`,
              audioPrompt: `A share is a unit of stock ownership in a company, {name}. If a company has issued 1 million shares and you own 1,000, you own 0.1% of the company. Larger companies have more shares outstanding. Apple has around 15 billion shares. Smaller companies might have only millions. The total value of a company is its share price times the total number of shares, called market capitalization or market cap. Knowing this helps you compare companies that have very different share prices but might be similar in total size.`,
            },
            {
              word: `secondary market`,
              definition: `Where investors buy and sell stocks from each other, rather than directly from the company. The stock exchange (NYSE, Nasdaq) is the secondary market. When you buy Apple stock today, you buy it from another investor, not from Apple.`,
              audioPrompt: `The secondary market is where investors buy and sell stocks from each other, rather than directly from the company, {name}. The New York Stock Exchange and Nasdaq are secondary markets. When Apple went public in 1980, the company sold shares directly to investors in the primary market and received that cash. Every trade since then has happened in the secondary market, between investors, and Apple receives nothing. The price in the secondary market is set by supply and demand: whatever buyers and sellers agree to at any moment. Prices move constantly based on news, earnings, expectations, and broader market conditions, though over long periods they track the underlying business performance.`,
            },
            {
              word: `supply and demand`,
              definition: `The mechanism that sets prices. When more people want to buy a stock than sell it, prices rise. When more want to sell than buy, prices fall. The constant force that moves stock prices in the short term.`,
              audioPrompt: `Supply and demand is the mechanism that sets prices in a market, {name}. When more people want to buy a stock than sell it, prices rise. When more want to sell than buy, prices fall. This is why stock prices move constantly throughout each trading day. Over short periods, supply and demand can push prices away from any underlying business value based on news, emotions, or speculation. Over very long periods, supply and demand tends to track the actual performance of the underlying company. Understanding that short-term price changes are driven by supply and demand rather than intrinsic value helps you avoid the mistake of treating short-term price swings as meaningful signals about a company's actual worth.`,
            },
          ],
        },

        {
          id: `l05-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Where Stock Returns Actually Come From`,
          paragraphs: [
            `Stock returns come from two main sources. The first is the company actually making money and either reinvesting it for growth or paying it out as dividends. Over long periods, a company's stock price roughly tracks its earnings. A company that consistently makes more money tends to see its stock rise. A company whose earnings stagnate or fall tends to see its stock fall.`,
            `The second source is changes in what investors are willing to pay for those earnings. This is captured in something called the price-to-earnings (P/E) ratio. If a company earns $5 per share and its stock costs $100, the P/E is 20. Investors are paying $20 for every $1 of earnings. P/E ratios change over time based on optimism, interest rates, and expectations about future growth. When P/E ratios expand, stock prices rise even without earnings growth. When P/E ratios contract, prices fall even when earnings hold steady.`,
            `Over very long periods (20+ years), the math of stock returns is roughly: dividend yield (cash paid out) plus earnings growth plus or minus changes in valuation. For the S&P 500 historically: about 2% dividends, 5% earnings growth, 0-3% valuation change, totaling about 10% annual returns on average. These components vary year to year but the underlying math is consistent. Stock prices ultimately reflect business performance and expectations about future performance.`,
          ],
          image: `/voyager-assets/money-business/l05-s2-returns.webp`,
          imageCaption: `Stock returns = dividends + earnings growth + valuation changes.`,
          vocab: [
            {
              word: `dividend`,
              definition: `A payment that some companies make to shareholders, usually quarterly, out of their profits. Not all companies pay dividends; growing companies often reinvest profits instead.`,
              audioPrompt: `A dividend is a payment that some companies make to shareholders out of their profits, {name}. Usually paid quarterly. If you own 100 shares of a company that pays a $1 annual dividend, you receive $100 per year. Not all companies pay dividends. Growing companies often reinvest profits to fund growth instead of paying out. More mature companies typically pay regular dividends. The total return from a stock includes both price changes and dividends received. For the S&P 500 historically, dividends have contributed about 2% per year to total returns.`,
            },
            {
              word: `price-to-earnings ratio`,
              definition: `P/E ratio. How much investors pay per dollar of a company's earnings. A P/E of 20 means investors pay $20 for every $1 of annual earnings. Changes in P/E ratios move stock prices independently of earnings growth.`,
              audioPrompt: `The price-to-earnings ratio, called the P/E ratio, measures how much investors pay per dollar of a company's earnings, {name}. If a company earns $5 per share and its stock costs $100, the P/E is 20. Investors are paying $20 for every $1 of annual earnings. P/E ratios change over time based on optimism, interest rates, and expectations about future growth. When investors become more optimistic, P/E ratios expand and stock prices rise even without earnings growth. When optimism fades, P/E ratios contract and prices fall even when earnings hold steady. Understanding P/E ratios explains why stock prices can move dramatically even when the underlying business hasn't changed at all.`,
            },
            {
              word: `earnings growth`,
              definition: `The increase in a company's profits over time. One of the two main components of long-term stock returns, along with dividends. Companies that consistently grow earnings tend to see their stock prices rise over time.`,
              audioPrompt: `Earnings growth is the increase in a company's profits over time, {name}. It is one of the two main drivers of long-term stock returns, along with dividends. For the S&P 500 historically, earnings growth has contributed about 5 percent per year to total returns. Companies that consistently grow earnings tend to see their stock prices rise over time. Companies whose earnings stagnate or fall tend to see their stock prices fall. This is why stock investing over very long periods ultimately tracks real business performance rather than speculation. The math of total returns is straightforward: dividend yield plus earnings growth plus or minus changes in what investors are willing to pay for those earnings.`,
            },
          ],
        },

        {
          id: `l05-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Position 1: Active Investing`,
          paragraphs: [
            `The active investing approach says: not all stocks are equal. Some companies are better than others. Some are undervalued. Some are positioned to benefit from coming trends. A smart investor can identify the good ones, avoid the bad ones, and beat the overall market average. This is the approach of Warren Buffett, hedge funds, mutual fund managers, and most stock-picking influencers.`,
            `The reasoning has real merit at the surface. Companies do differ in quality. Some industries are growing while others decline. Some management teams are excellent and others mediocre. In theory, careful analysis should let you pick winners. Warren Buffett has compounded Berkshire Hathaway's investments at about 20% annually over 60 years, far above the S&P 500 average. There are other successful active investors too.`,
            `The challenge: most professional stock pickers fail to beat simple index funds. Multiple studies, including the SPIVA report by S&P Dow Jones Indices, consistently find that 80-90% of actively managed mutual funds underperform their benchmark index over 10-year periods. Some of this is due to higher fees on active funds. Some is due to the difficulty of consistently picking winners. The math is brutal: if professional investors with full-time staff and resources fail this badly, what does that say about the chances of ordinary investors picking better?`,
          ],
          image: `/voyager-assets/money-business/l05-s3-active.webp`,
          imageCaption: `Active investing: pick winners, beat the market. Reality: most pros fail.`,
          vocab: [
            {
              word: `active investing`,
              definition: `Trying to beat the overall market by picking specific stocks or timing the market. Has higher costs and usually underperforms passive index investing over time.`,
              audioPrompt: `Active investing is trying to beat the overall market by picking specific stocks or timing the market, {name}. Mutual fund managers, hedge funds, and most stock-picking influencers use active approaches. The promise: outperform the broader market. The reality: most active managers underperform their benchmark index over time. Multiple studies, including the SPIVA report, consistently find that 80 to 90 percent of actively managed mutual funds underperform over 10-year periods. The challenge isn't whether active investing CAN work. It's whether typical investors are likely to succeed at it.`,
            },
            {
              word: `SPIVA report`,
              definition: `S&P Indices Versus Active. An annual report by S&P Dow Jones Indices that measures how many actively managed mutual funds underperform their benchmark index. Consistently finds 80-90% of active funds underperform over 10-year periods.`,
              audioPrompt: `The SPIVA report stands for S&P Indices Versus Active, {name}. It is an annual report by S&P Dow Jones Indices that measures how many actively managed mutual funds underperform their benchmark index. The findings are consistent year after year: 80 to 90 percent of actively managed mutual funds underperform their benchmark index over 10-year periods. The SPIVA data is one of the strongest empirical arguments for index fund investing. It is not cherry-picked or one-time. It has replicated across decades, different markets, and different asset classes. If professional investors with full-time staff and research resources fail to beat the index this reliably, ordinary investors trying to pick stocks face even steeper odds.`,
            },
            {
              word: `undervalued`,
              definition: `A stock trading below its true or intrinsic value. Active investors try to find undervalued companies before others do. Finding them consistently and correctly is what makes active investing so difficult in practice.`,
              audioPrompt: `An undervalued stock is one trading below its true or intrinsic value, {name}. Active investors try to find undervalued companies before others do. The logic: if you can identify a good company whose stock is temporarily cheap, you can buy it and profit when the market eventually recognizes its true value. The challenge is that millions of professional investors with full-time research teams are looking for the same undervalued companies at the same time. When everyone is searching for the same opportunities, they become very hard to find consistently. This is why most active investors fail to beat the index even though the theory of finding undervalued companies is perfectly sound in principle.`,
            },
          ],
        },

        {
          id: `l05-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Position 2: Index Fund Investing`,
          paragraphs: [
            `Index fund investing takes the opposite approach. Instead of trying to pick winners, you buy the entire market. An S&P 500 index fund owns small pieces of all 500 of the largest US companies. A total stock market index fund owns essentially every publicly traded US company. The strategy is simple: own everything, hold for the long term, ignore market drama.`,
            `This approach was pioneered by Jack Bogle, who founded Vanguard in 1975 specifically to offer low-cost index funds to ordinary investors. The original Vanguard 500 Index Fund was widely mocked by the active-investing industry. Decades later, index investing has become the dominant approach for ordinary investors. Vanguard alone manages over $7 trillion.`,
            `The case for index funds is mathematical. If 80-90% of active managers underperform the market, your odds of picking one of the winners in advance are poor. By buying the index, you guarantee yourself the average market return (currently about 10% for the S&P 500 historically), with very low fees (often under 0.1% per year). You also save the time and stress of researching individual stocks. For 95%+ of ordinary investors, this approach produces better long-term outcomes than active picking.`,
          ],
          image: `/voyager-assets/money-business/l05-s4-index.webp`,
          imageCaption: `Index funds: own everything, hold forever, win by not losing.`,
          vocab: [
            {
              word: `index fund`,
              definition: `A fund that tracks a market index (like the S&P 500) by holding the same stocks in the same proportions. Low fees, broad diversification, has outperformed most active funds historically.`,
              audioPrompt: `An index fund is a fund that tracks a market index by holding the same stocks in the same proportions, {name}. An S&P 500 index fund owns all 500 stocks in the S&P 500 in the same proportions as the index. Index funds are popular because they have very low fees (often under 0.1% per year), they provide broad diversification automatically, and they have historically outperformed most actively managed funds. Jack Bogle, who founded Vanguard, pioneered low-cost index funds in 1975. Today they are the dominant investment approach for ordinary investors.`,
            },
            {
              word: `expense ratio`,
              definition: `The annual fee an investment fund charges, expressed as a percentage of assets. Index funds typically charge 0.03-0.1%. Actively managed funds typically charge 1-2%. The difference compounds dramatically over decades.`,
              audioPrompt: `The expense ratio is the annual fee an investment fund charges, expressed as a percentage of assets, {name}. Index funds typically charge 0.03 to 0.1 percent per year. Actively managed mutual funds typically charge 1 to 2 percent per year. The difference seems small but compounds dramatically. If you invest $10,000 and it grows at 8 percent gross before fees, after 30 years a 0.1 percent fee leaves you with about $95,000. A 1.5 percent fee on the same investment leaves you with about $64,000. The fee difference costs you $31,000 on a $10,000 investment, even when the gross returns are identical. This is why fees are one of the most reliable predictors of long-term investment performance.`,
            },
            {
              word: `benchmark index`,
              definition: `A standard against which an investment's performance is measured. Active funds are typically compared to a benchmark like the S&P 500. The SPIVA report measures how many active funds beat their benchmark.`,
              audioPrompt: `A benchmark index is a standard against which an investment's performance is measured, {name}. Active funds are typically compared to a benchmark that represents the type of investments they hold. A US large-cap active fund is compared to the S&P 500. A bond fund is compared to a bond index. When the SPIVA report says 80 to 90 percent of active funds underperform over 10-year periods, it means they returned less than their benchmark index. By owning the index fund directly, you guarantee yourself the benchmark return. Active fund investors are trying to do better than the benchmark, but most end up doing worse. This is the core mathematical argument for passive index investing.`,
            },
          ],
        },

        {
          id: `l05-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Position 3: Don't Invest in Stocks (Yet)`,
          paragraphs: [
            `A third position, less discussed but worth considering: for many people, particularly young people or those with limited resources, the right answer might be to delay stock investing entirely until other foundations are set. The reasoning: stocks can lose value, and losing money you actually need is far worse than missing out on potential gains.`,
            `Under this view, your priorities should be (in order): an emergency fund covering basic expenses, paying off any high-interest debt, building marketable skills, then investing. Skipping or shortchanging these earlier steps to chase stock returns creates fragility. Someone with $1,000 invested in stocks but $5,000 in credit card debt is actually worse off than they look on paper. Someone with no skills who lost money in stocks during a downturn has fewer options for recovery than someone who built earning capacity first.`,
            `This position is unfashionable in an era of meme stocks and trading apps, but it has serious advocates. Personal finance writers like Dave Ramsey emphasize debt payoff before investing. Financial educators emphasize that for someone with low income or unstable employment, building stable foundations matters more than market exposure. The counterargument: any year out of the market is a year of lost compounding. Both sides have merit. Your specific situation determines which applies more strongly.`,
          ],
          image: `/voyager-assets/money-business/l05-s5-no-invest.webp`,
          imageCaption: `Sometimes the best move is building foundations first.`,
          vocab: [
            {
              word: `opportunity cost`,
              definition: `The value of what you give up by choosing one option over another. Not investing in stocks has an opportunity cost: the returns you could have earned.`,
              audioPrompt: `Opportunity cost is the value of what you give up by choosing one option over another, {name}. Not investing in stocks has an opportunity cost: the returns you could have earned. But investing in stocks also has an opportunity cost: the debt you didn't pay off, the skill you didn't build, the emergency fund you didn't establish. Every financial decision has opportunity costs in both directions. Good financial thinking involves recognizing these tradeoffs and choosing based on which costs matter most in your specific situation.`,
            },
            {
              word: `marketable skills`,
              definition: `Abilities that employers or customers will pay for. Building marketable skills before investing is the "foundations first" argument: earning capacity compounds just like financial capital.`,
              audioPrompt: `Marketable skills are abilities that employers or customers will pay for, {name}. The foundations-first argument says that for many young people, building marketable skills matters more than early stock market exposure. Earning capacity compounds just like financial capital. Someone who builds a high-value skill at 20 earns more from 25 to 65 than someone who skipped skill-building to chase investment returns. Coding, communication, trade skills, financial literacy itself: all of these are marketable skills that produce lifetime income. The counterargument is that every year out of the stock market is a year of lost compounding. Both sides have merit. Your specific situation, particularly whether you have high-interest debt or unstable income, determines which applies more strongly.`,
            },
            {
              word: `behavior gap`,
              definition: `The difference between investment returns and what ordinary investors actually earn due to buying high and selling low at emotional moments. Typical individual investors earn about half the market's return because of behavior.`,
              audioPrompt: `The behavior gap is the difference between investment returns and what ordinary investors actually earn due to behavioral mistakes, {name}. Research consistently finds that ordinary investors who try to time the market earn about half the returns of investors who buy and hold. The reason is predictable: investors buy after markets have already gone up (buying high) and sell after markets drop (selling low), which is the opposite of what builds wealth. Professional research by DALBAR and Vanguard has documented this gap across decades. The behavior gap is why the "invest and ignore" approach of index fund investing often produces better outcomes than active trading, even when the underlying returns are the same. Boring, consistent, hands-off investing wins for most people because it eliminates the behavior gap.`,
            },
          ],
        },

        // ───── ARGUMENT BUILDER ───────────────────────────────────────────────
        {
          id: `l05-argument-builder`,
          type: `argument-builder`,
          headline: `What Should A 12-Year-Old Actually Do With Stocks?`,
          intro: `Pick one of three positions. Build your case with 3-4 pieces of evidence. Then respond to the strongest counterargument.`,
          positions: [
            {
              id: `active-investing`,
              label: `Active investing: pick the best stocks`,
              summary: `Not all companies are equal. With careful research, you can identify undervalued companies and beat the market. Warren Buffett and others have done it over decades. Active investing also teaches real analysis skills. Even if you don't beat the market every year, you'll learn valuable financial literacy and develop intuition that helps you for life.`,
            },
            {
              id: `index-funds`,
              label: `Index funds: own the whole market`,
              summary: `80-90% of professional stock pickers underperform the index over 10-year periods. Your chances as a non-professional are even worse. Index funds give you guaranteed market returns with minimal fees, no stock-picking stress, and broad diversification. For 95% of ordinary investors, this produces better outcomes than active picking. Start with index funds; consider individual stocks only as a small experimental portion later.`,
            },
            {
              id: `build-foundations`,
              label: `Build foundations first; invest later`,
              summary: `Stocks can lose value. Until you have an emergency fund, no high-interest debt, and marketable skills, stock losses can be devastating. Build these foundations first. Then begin investing, when losses won't threaten your stability. The compounding cost of waiting is real but is offset by avoiding the volatility risk that hits people without foundations the hardest.`,
            },
          ],
          evidence: [
            {
              id: `e1`,
              text: `Warren Buffett has compounded Berkshire Hathaway's investments at about 20% annually over 60 years, well above the S&P 500 average. He is one of the few documented long-term outperformers of the market.`,
              source: `Berkshire Hathaway historical returns`,
            },
            {
              id: `e2`,
              text: `The SPIVA (S&P Indices Versus Active) report consistently finds that 80-90% of actively managed mutual funds underperform their benchmark index over 10-year periods. Most professional stock pickers fail.`,
              source: `SPIVA reports, multiple years 2010-present`,
            },
            {
              id: `e3`,
              text: `Vanguard 500 Index Fund, the original index fund (started 1975), has averaged about 10% annual returns over its history. It has consistently outperformed most actively managed alternatives.`,
              source: `Vanguard historical performance data`,
            },
            {
              id: `e4`,
              text: `Stocks lost 37% in 2008 during the financial crisis. The S&P 500 has had multiple 30%+ drops in history. Investors without emergency funds were forced to sell at the worst time, locking in losses.`,
              source: `Historical S&P 500 performance`,
            },
            {
              id: `e5`,
              text: `Most active mutual funds charge 1-2% annual fees vs 0.03-0.1% for index funds. Over 30 years at the same gross returns, the fee difference compounds to roughly 40-60% lower final value for high-fee funds.`,
              source: `Standard investment industry data`,
            },
            {
              id: `e6`,
              text: `Research on individual investor behavior consistently finds that ordinary investors who try to time markets earn about half the returns of investors who buy and hold. Trying to be active typically hurts.`,
              source: `Multiple investor behavior studies (DALBAR, Vanguard research)`,
            },
            {
              id: `e7`,
              text: `Personal finance educators like Dave Ramsey emphasize paying off high-interest debt before investing. The 22% guaranteed "return" from paying off credit card debt typically exceeds expected stock returns.`,
              source: `Personal finance teaching tradition`,
            },
          ],
          counterargument: {
            id: `counter`,
            text: `"You picked your position. Here's the strongest objection. All three positions assume the historical patterns hold. What if they don't? What if the next 50 years look different from the past 50? Index funds depend on continued broad economic growth. Active investing depends on the kind of inefficiencies that existed when Buffett started. 'Build foundations first' assumes you can save consistently while inflation eats your cash. What if your basic assumptions about how markets work are wrong, and you've optimized for a future that doesn't happen?"`,
            promptInstruction: `In 3-4 sentences, respond. How does your position hold up under uncertainty about whether the future looks like the past?`,
          },
          reflectionPrompt: `Looking at the positions you didn't pick, which one made the strongest case for your specific situation? Could you imagine combining approaches?`,
        },

        {
          id: `l05-quiz`,
          type: `quiz`,
          headline: `Check your understanding`,
          questions: [
            {
              id: `q1`,
              type: `multiple-choice`,
              question: `What does owning a stock actually mean?`,
              options: [
                `Gambling on price changes`,
                `Owning a small piece of a real company, with proportional claims on its profits and value`,
                `Lending money to the company`,
                `Insurance against the company failing`,
              ],
              correctIndex: 1,
              explanation: `Stocks are real ownership. Tiny fractions, but real claims on profits, voting rights, and the company's value if sold.`,
            },
            {
              id: `q2`,
              type: `multiple-choice`,
              question: `Where do stock returns actually come from over the long term?`,
              options: [
                `Pure speculation`,
                `Dividends paid out + earnings growth of the underlying company + changes in valuation; for the S&P 500 historically: about 2% dividends + 5% earnings growth + 0-3% valuation change = ~10% total`,
                `Government subsidies`,
                `Random chance`,
              ],
              correctIndex: 1,
              explanation: `The math of returns is consistent over long periods. Short-term swings are driven by emotion and news. Long-term returns reflect actual business performance.`,
            },
            {
              id: `q3`,
              type: `multiple-choice`,
              question: `What is a dividend?`,
              options: [
                `A type of tax`,
                `A payment that some companies make to shareholders out of profits, usually quarterly; not all companies pay them`,
                `A penalty for selling stock`,
                `Interest on bonds`,
              ],
              correctIndex: 1,
              explanation: `Mature companies often pay dividends. Growing companies often reinvest profits instead. Total return includes both price changes and dividends.`,
            },
            {
              id: `q4`,
              type: `multiple-choice`,
              question: `What does active investing claim, and what's the typical reality?`,
              options: [
                `Claims you can pick winners; reality is everyone wins`,
                `Claims smart investors can beat the market; reality is 80-90% of professional stock pickers underperform their benchmark index over 10-year periods`,
                `Active investing is illegal`,
                `Active investing always works`,
              ],
              correctIndex: 1,
              explanation: `This is one of the most important and counterintuitive facts in investing. Most professionals fail to beat the index. Ordinary investors face even worse odds.`,
            },
            {
              id: `q5`,
              type: `multiple-choice`,
              question: `What is an index fund?`,
              options: [
                `A fund that picks the best stocks`,
                `A fund that tracks a market index by holding the same stocks in the same proportions; low fees, broad diversification, has outperformed most active funds historically`,
                `A government investment program`,
                `A type of savings account`,
              ],
              correctIndex: 1,
              explanation: `Index funds were pioneered by Jack Bogle and Vanguard in 1975. They are now the dominant approach for ordinary investors due to low fees and consistent performance.`,
            },
            {
              id: `q6`,
              type: `multiple-choice`,
              question: `Why are fees so important in long-term investing?`,
              options: [
                `Fees are tax-deductible`,
                `Fees compound just like returns; over 30 years, the difference between 1-2% active fees and 0.03-0.1% index fees can mean 40-60% lower final value`,
                `Higher fees mean better service`,
                `Fees don't matter`,
              ],
              correctIndex: 1,
              explanation: `Fees are the single most reliable difference between active and index funds. The S&P Dow Jones research consistently finds high-fee funds underperform low-fee funds.`,
            },
            {
              id: `q7`,
              type: `multiple-choice`,
              question: `Why does the "build foundations first" position have merit?`,
              options: [
                `Because stocks always lose money`,
                `Because stocks can lose 30%+ in a single year; investors without emergency funds may be forced to sell at the worst time, locking in losses; building foundations first protects against this`,
                `Because investing is dangerous`,
                `Because young people shouldn't invest`,
              ],
              correctIndex: 1,
              explanation: `Real concern about sequence-of-returns risk. Without an emergency fund, a stock market crash combined with a job loss can force selling at the worst moment. Foundations matter.`,
            },
            {
              id: `q8`,
              type: `multiple-choice`,
              question: `What does research on individual investor behavior consistently find?`,
              options: [
                `Individuals beat the market`,
                `Ordinary investors who try to time markets earn about half the returns of investors who buy and hold; trying to be active typically hurts`,
                `Active investing always wins for ordinary people`,
                `Behavior doesn't matter`,
              ],
              correctIndex: 1,
              explanation: `The behavior gap is one of the most reliable findings in investing research. Buying high (after gains, when excited) and selling low (after losses, when scared) is the opposite of what builds wealth. Buy and hold beats most active behavior.`,
            },
            {
              id: `q9`,
              type: `true-false`,
              question: `True or false: For 95% of ordinary investors, low-cost index funds produce better long-term outcomes than active stock picking.`,
              correctAnswer: true,
              explanation: `True. This is one of the most widely-supported findings in investing research. Active investing isn't impossible, but the math is against ordinary investors trying to do it.`,
            },
            {
              id: `q10`,
              type: `inference`,
              question: `Your uncle says "I have a hot stock tip from a friend who works at a tech company." Based on this lesson, what's the most thoughtful response?`,
              options: [
                `"Great, let me buy it immediately!"`,
                `"Stock tips are illegal"`,
                `"Even if the tip is genuine, individual stock bets are typically how ordinary investors underperform the market. Most professional analysts with full-time staff fail to beat index funds over time. A small experimental allocation to a single stock is fine if you can afford to lose it. Putting significant money in based on a tip is closer to gambling than investing."`,
                `"Only buy if it's a tech stock"`,
              ],
              correctIndex: 2,
              explanation: `Real investing wisdom applied to a real conversation. Hot stock tips are how people lose money. The lesson's framework: small experiments are fine; concentrated bets based on tips are usually mistakes.`,
            },
          ],
        },

        {
          id: `l05-reflection`,
          type: `reflection`,
          headline: `Sit with this`,
          intro: `Pick the prompt that pulls at you most. Your answer is saved.`,
          prompts: [
            { id: `reflect-cognitive`, category: `Cognitive`, prompt: `Before this lesson, what did you think about active stock picking vs. index funds? Has anything shifted?` },
            { id: `reflect-meta`, category: `Metacognitive`, prompt: `Most people picture themselves beating the market. The data says they probably won't. Why is this so hard to internalize?` },
            { id: `reflect-identity`, category: `Identity`, prompt: `If you adopt the index fund approach and stay with it for 50 years, what becomes possible that wouldn't be otherwise?` },
            { id: `reflect-application`, category: `Application`, prompt: `If you were going to invest any money soon, would you start with index funds, individual stocks, or wait? Think through which fits your situation.` },
            { id: `reflect-critical`, category: `Critical`, prompt: `Is there a case where active investing makes sense for an ordinary person? When?` },
            { id: `reflect-personal`, category: `Personal investigation`, prompt: `Ask one parent: do they pick individual stocks, use index funds, or both? Has their approach worked over time? Be specific about what they've learned.` },
          ],
        },

        {
          id: `l05-real-world`,
          type: `real-world`,
          headline: `Take it into your life`,
          guideContext: `Stock investing is one of the most consequential lifelong financial decisions. Two paths.`,
          familyActivity: {
            title: `The Family Investment Conversation`,
            duration: `30 minutes`,
            description: `At dinner, share what you learned about active vs index investing. Then ask each adult in your family: how do they actually invest? Do they pick individual stocks? Use index funds? Use professional managers? What were their best and worst investment decisions? Most adults will share both successes and regrets. Their honest experience often confirms what the data shows: most successful long-term investing has been boring and index-based; most regrettable losses came from active picking, timing, or speculation.`,
          },
          projectOption: {
            title: `Track Your Hypothetical Investment, 2 weeks (optional)`,
            duration: `2 weeks, ~5 minutes per day`,
            description: `Pick 3 individual stocks you think will go up, AND simultaneously imagine investing the same amount in an S&P 500 index fund. Track all 4 daily for 14 days. After 14 days, write 500 words on what you observed. Did your picks beat the index? How much did you stress about your picks vs. just leaving the index alone? What did you learn about your own investing temperament? This is exactly the experiment that turns ordinary investors into index-fund believers over time.`,
            offerToParent: `Parent: opt your kid into this project from the dashboard. The 2-week experiment is short but instructive.`,
          },
          identityQuestion: `If you can resist the urge to beat the market starting at 12, what does that compound to over a lifetime?`,
        },

        {
          id: `l05-identity-hook`,
          type: `identity-hook`,
          headline: `Who is this lesson making you?`,
          prompt: `One sentence. No wrong answer.`,
          placeholder: `Someone who...`,
          examples: [
            `Someone who knows the boring index fund usually beats the exciting stock pick.`,
            `A person who can ignore hot stock tips because I know how the math actually works.`,
            `Someone willing to do less and earn more by avoiding active investing mistakes.`,
          ],
          saveKey: `identity_responses_mb_11_12_05`,
        },

        {
          id: `l05-celebration`,
          type: `celebration`,
          guideText: `{name}. After this lesson you can explain what stocks actually are, where returns come from, the active vs index debate, the SPIVA data on professional underperformance, the behavior gap in ordinary investors, and the case for building foundations before investing. You can build an evidence-based argument on which approach fits a 12-year-old. Most adults haven't seriously thought about active vs index. You have. Next time we go into one of the most important and least-discussed financial topics: debt. Good debt, bad debt, ugly debt. Case Study format. See you there. — Ace`,
          badge: `stock-market-thinker`,
          badgeName: `Stock Market Thinker`,
          xpEarned: 75,
          competencies: [
            `Can explain what stocks are and where returns come from`,
            `Knows the SPIVA data on active manager underperformance`,
            `Can articulate the case for index funds and the case for active investing`,
            `Understands the behavior gap and why ordinary investors typically underperform`,
            `Recognizes when foundations should come before investing`,
          ],
          nextLessonPreview: {
            title: `Lesson 6: Debt — Good, Bad, and Ugly`,
            hook: `Some debt builds wealth. Some debt destroys it. The difference matters more than most adults understand. Three real scenarios, three different outcomes.`,
          },
        },
      ],
    },
  ],
};

export default MONEYBUSINESS_VOYAGER_L05;

if (import.meta.env?.DEV) {
  const l = MONEYBUSINESS_VOYAGER_L05.lessons[0];
  const mags = l.screens.filter((s) => s.type === `magazine`).length;
  const argEvi = l.screens.find((s) => s.type === `argument-builder`)?.evidence?.length ?? 0;
  const quiz = l.screens.find((s) => s.type === `quiz`)?.questions?.length ?? 0;
  const reflect = l.screens.find((s) => s.type === `reflection`)?.prompts?.length ?? 0;
  console.log(
    `[LESSON-MB-VOYAGER-L05 ${VERSION}] "${l.title}" — ${mags} magazine, argument-builder w/ ${argEvi} evidence, ${quiz} quiz, ${reflect} reflection`
  );
}
