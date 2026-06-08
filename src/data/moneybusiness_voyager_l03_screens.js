// ─────────────────────────────────────────────────────────────────────────────
// MONEY & BUSINESS VOYAGER  |  L03 — Inflation: Why $20 Won't Always Be $20
// Age band : voyagers (11-12)   Guide: ace (Eagle)
// Standards: Coreverse Original — Inflation, Monetary Policy, Source Evaluation
// CALIBRATED: Voyager spec v1.1 (May 2026)
// Interaction format: SOURCE EVALUATION (BLS data vs viral panic vs crypto pitch)
// ─────────────────────────────────────────────────────────────────────────────

const VERSION = "voyager-mb-l03-v1";

const MONEYBUSINESS_VOYAGER_L03 = {
  ageBand: `voyagers`,
  subjectId: `money-business`,
  guide: `ace`,

  lessons: [
    {
      id: `mb-11-12-03`,
      title: `Inflation: Why $20 Won't Always Be $20`,
      duration: 35,
      xpReward: 75,
      badge: `inflation-translator`,
      badgeName: `Inflation Translator`,

      screens: [
        {
          id: `l03-welcome`,
          type: `welcome`,
          guideText: `{name}, here's a fact most kids don't know. A movie ticket in 1980 cost about $2.69. Today it costs about $13. That's not because movies got 5 times better. That's inflation. The same $20 bill that bought a week of groceries for your grandparents barely buys a single lunch today. Inflation is the slow shrinking of what your money can buy. It affects every dollar you save, earn, and spend. It also gets used as a weapon in financial media. Real economists discuss it carefully. Viral accounts panic about it to drive engagement. Crypto influencers use it to sell you their solution. Today we evaluate three sources making different claims about the same inflation data. By the end you'll be able to spot which is which and protect yourself from the worst takes.`,
          headline: `Inflation`,
          subtitle: `Why the same money buys less every year.`,
          visual: `/voyager-assets/money-business/l03-welcome.webp`,
        },

        {
          id: `l03-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `What Inflation Actually Is`,
          paragraphs: [
            `Inflation is the general rise in prices across an economy over time. If a basket of groceries that cost $100 last year costs $103 this year, that's 3 percent inflation. The opposite, falling prices, is called deflation and is actually worse for an economy than mild inflation. A small amount of inflation (around 2 percent per year) is considered healthy by most central banks. High inflation (5 percent or more) is destructive. Hyperinflation (50 percent or more per month) destroys economies.`,
            `In the US, the main measure of inflation is the Consumer Price Index (CPI), calculated monthly by the Bureau of Labor Statistics (BLS). The CPI tracks the prices of a specific basket of goods and services that typical households buy: food, housing, transportation, medical care, education, recreation. Each item is weighted by how much of household spending it represents. Housing gets a big weight because it's a large share of most budgets. Pet food gets a tiny weight.`,
            `Why does inflation happen? Several causes interact. Too much money chasing too few goods (demand-pull inflation). Rising costs of production passed to consumers (cost-push inflation). Disruptions to supply chains. Government spending that exceeds productive capacity. Some inflation also comes from expectations: if people expect prices to rise, businesses raise prices preemptively, which causes the rise they expected. Inflation has many causes and rarely just one.`,
          ],
          image: `/voyager-assets/money-business/l03-s1-inflation.webp`,
          imageCaption: `Inflation is the general rise in prices. Causes are multiple and interact.`,
          vocab: [
            {
              word: `Consumer Price Index`,
              definition: `CPI. The main US measure of inflation. Calculated monthly by the Bureau of Labor Statistics. Tracks prices of a basket of goods and services representative of household spending.`,
              audioPrompt: `The Consumer Price Index, called the CPI, is the main US measure of inflation, {name}. The Bureau of Labor Statistics calculates it monthly by tracking prices of a specific basket of goods and services that typical households buy. Each item is weighted by how much of household spending it represents. Housing gets a big weight because it's a large share of most budgets. The CPI is one of the most carefully constructed economic statistics in the US. It is also frequently misunderstood and politicized. Knowing how it actually works helps you evaluate claims about inflation.`,
            },
            {
              word: `demand-pull inflation`,
              definition: `Inflation caused by too much money chasing too few goods. When consumer demand outpaces the economy's ability to supply, prices rise. One of several interacting causes of inflation.`,
              audioPrompt: `Demand-pull inflation is inflation caused by too much money chasing too few goods, {name}. When consumers have more money to spend than the economy can supply in goods and services, sellers raise prices. Think of it as buyers competing for a limited number of items, pushing prices up. Demand-pull is one of several interacting causes of inflation. Cost-push inflation, which is rising production costs passed on to consumers, is another. Supply chain disruptions and government spending beyond productive capacity also contribute. Real inflation events usually involve multiple causes at once, which is why blaming a single factor oversimplifies what's actually happening.`,
            },
            {
              word: `deflation`,
              definition: `Falling prices across an economy. The opposite of inflation. Though it sounds beneficial, deflation is actually worse for an economy than mild inflation because it causes consumers to delay spending and businesses to cut jobs.`,
              audioPrompt: `Deflation is falling prices across an economy, {name}. It is the opposite of inflation. Though falling prices might sound like a good thing, deflation is actually worse for an economy than mild inflation. When prices are falling, consumers delay purchases expecting lower prices tomorrow, businesses earn less revenue, companies cut jobs, and a downward spiral can accelerate. Most central banks target a small positive inflation rate, around 2 percent per year, specifically to avoid deflation. Hyperinflation, prices rising 50 percent or more per month, is catastrophic at the other extreme. The healthy zone is mild, stable, and predictable inflation right in the middle.`,
            },
          ],
        },

        {
          id: `l03-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `What Inflation Does To Your Money`,
          paragraphs: [
            `Inflation is essentially a tax on cash. If you have $1,000 sitting in a checking account paying 0 percent interest, and inflation is 3 percent, you've lost 3 percent of purchasing power over the year. The number in your account is the same. What you can buy with it is less. This is why financial advisors universally tell people not to keep large amounts of money in checking accounts long-term.`,
            `Inflation also affects different types of money differently. Cash loses value at the inflation rate. Savings accounts at 4 percent interest, with 3 percent inflation, give you 1 percent real growth. Stocks have averaged about 10 percent annual returns historically, well above typical inflation. Real estate has roughly kept pace with or slightly exceeded inflation. Gold has been an inconsistent inflation hedge despite popular belief. Cryptocurrency has been wildly volatile, sometimes seen as an inflation hedge and sometimes as a speculation, depending on the period.`,
            `For someone your age, inflation matters for two reasons. First: any money you save for the long term in cash will lose purchasing power. Most of your savings should be in investments that have historically outpaced inflation. Second: future prices will be higher than today's prices. The college tuition you'll face is going up. The first car you might buy will cost more than today's price. The first apartment you'll rent will be more expensive. Planning for these requires accounting for inflation, not assuming today's prices.`,
          ],
          image: `/voyager-assets/money-business/l03-s2-effects.webp`,
          imageCaption: `Inflation is a tax on cash and a planning challenge for the future.`,
          vocab: [
            {
              word: `purchasing power`,
              definition: `What a given amount of money can actually buy. Inflation reduces purchasing power even when the nominal dollar amount stays the same.`,
              audioPrompt: `Purchasing power is what a given amount of money can actually buy, {name}. It is different from the nominal dollar amount. If you had $100 in 2000 and you still have $100 today, the nominal amount is the same. But the purchasing power has fallen by roughly half because of cumulative inflation over those 24 years. Understanding the difference between nominal dollars and purchasing power is one of the most important financial literacy concepts. Almost every financial decision involves it.`,
            },
            {
              word: `inflation hedge`,
              definition: `An investment expected to maintain or grow in value when inflation rises, protecting purchasing power. Stocks have historically been a strong inflation hedge. Gold is a popular but inconsistent one.`,
              audioPrompt: `An inflation hedge is an investment expected to maintain or grow in value when inflation rises, {name}. The idea is to protect your purchasing power from being eroded by rising prices. Stocks have averaged about 10 percent annual returns historically, well above typical inflation, making them a strong long-term inflation hedge. Real estate has roughly kept pace with or slightly exceeded inflation. Gold is widely seen as an inflation hedge but has actually been inconsistent in practice. Cryptocurrency has been wildly volatile and is sometimes pitched as an inflation hedge but more often behaves like a speculation. Not every popular inflation hedge actually works as advertised.`,
            },
            {
              word: `real growth`,
              definition: `Growth after adjusting for inflation. A savings account at 4 percent interest with 3 percent inflation gives you 1 percent real growth. The number that matters is always the inflation-adjusted one.`,
              audioPrompt: `Real growth is growth after adjusting for inflation, {name}. The number that matters is always the inflation-adjusted one, not just the nominal return. If your savings account earns 4 percent interest but inflation is 3 percent, your real growth is only 1 percent. If your account earns 1 percent but inflation is 3 percent, your real growth is actually negative: you are losing purchasing power even as your balance goes up. Cash sitting in a checking account paying zero interest with 3 percent inflation loses 3 percent of purchasing power every year. This is why financial advisors consistently say not to keep large amounts of money in low-interest accounts long-term.`,
            },
          ],
        },

        {
          id: `l03-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Recent US Inflation: What Actually Happened`,
          paragraphs: [
            `From the 1990s through 2020, US inflation was unusually low, mostly between 1 and 3 percent per year. Then COVID-19 happened. Massive stimulus payments combined with supply chain disruptions produced the worst inflation in 40 years. By June 2022, CPI hit 9.1 percent annual inflation, the highest since 1981. The Federal Reserve responded by raising interest rates aggressively, the fastest rate-hiking cycle in modern history. By 2024, inflation had fallen back to around 3 percent. By 2026, it has stabilized closer to the Fed's 2 percent target, though with month-to-month variation.`,
            `What happened during that inflation spike is genuinely debated by economists. How much was caused by too much stimulus? How much by supply chain breakdowns? How much by corporate price-gouging? How much by changed worker expectations? Different economists weight these differently. Honest answers acknowledge that all of these contributed in varying degrees, and that precisely measuring the contribution of each is hard.`,
            `Real wages (wages adjusted for inflation) fell during the 2021-2022 inflation spike because wages didn't rise as fast as prices. By 2024-2025, real wages had largely recovered, but the experience left a lasting impression. Many people remember the inflation peak as much harder than the official data suggests because their specific budget items (rent, food, gas) rose faster than the broader CPI in certain periods. This gap between official inflation data and personal experience is real and is part of why inflation reporting gets so contested.`,
          ],
          image: `/voyager-assets/money-business/l03-s3-recent.webp`,
          imageCaption: `2021-2022: worst US inflation in 40 years. Now back near target.`,
          vocab: [
            {
              word: `real wages`,
              definition: `Wages adjusted for inflation. Real wages reflect actual changes in purchasing power, unlike nominal wages which just track dollar amounts.`,
              audioPrompt: `Real wages are wages adjusted for inflation, {name}. They reflect actual changes in purchasing power. If your nominal wage went up 4% but inflation was 5%, your real wage actually fell 1%. Real wages are how economists determine whether workers are actually getting ahead. During the 2021-2022 inflation spike, real wages fell because prices rose faster than wages. By 2024-2025 they had largely recovered. The distinction between nominal and real wages is one of the most important financial concepts for understanding what's actually happening in an economy.`,
            },
            {
              word: `rate hike`,
              definition: `An increase in interest rates by a central bank. The Federal Reserve uses rate hikes to slow inflation by making borrowing more expensive, which reduces spending and cools demand across the economy.`,
              audioPrompt: `A rate hike is an increase in interest rates by a central bank, {name}. The Federal Reserve uses rate hikes to slow inflation by making borrowing more expensive. When borrowing costs go up, consumers and businesses spend less, which reduces demand and cools prices. When US inflation hit 9.1 percent in June 2022, the Fed responded with the fastest rate-hiking cycle in modern history, raising rates aggressively through 2022 and 2023. By 2024, inflation had fallen back to around 3 percent. Rate hikes work but have side effects: they also slow economic growth and can increase unemployment. The Fed has to balance fighting inflation against not causing a recession.`,
            },
            {
              word: `supply chain`,
              definition: `The network of producers, suppliers, and distributors that move goods from raw materials to finished products in consumers' hands. Disruptions to supply chains can cause cost-push inflation.`,
              audioPrompt: `A supply chain is the network of producers, suppliers, and distributors that move goods from raw materials to finished products in consumers' hands, {name}. When supply chains get disrupted, goods become scarcer and more expensive. COVID-19 caused massive supply chain disruptions: factory shutdowns, shipping delays, and shortages of everything from computer chips to furniture. These disruptions combined with massive COVID stimulus payments to produce the worst US inflation in 40 years. Cost-push inflation, rising production costs passed to consumers, is one of the main inflation causes, and supply chain breakdowns are a classic trigger. Once broken, supply chains take months or years to fully recover.`,
            },
          ],
        },

        {
          id: `l03-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `How Inflation Gets Misrepresented`,
          paragraphs: [
            `Inflation is one of the most politicized economic statistics. Both political parties shape their messaging around it. Financial media exaggerates it for clicks. Crypto influencers use it to sell their solutions. Even careful experts disagree on how to measure it precisely. Knowing how inflation gets misrepresented is part of being financially literate.`,
            `Common misrepresentations: Cherry-picking specific items. Egg prices doubled in 2022 due to bird flu. Headlines about "egg inflation" went viral, but eggs are a small share of household budgets. Single-item shocks aren't the same as broad inflation. Comparing year-over-year peaks. Selecting the peak month of one period and comparing to a low month elsewhere can produce misleading numbers. Real analysis uses consistent methodology.`,
            `Confusing inflation rate changes with price level changes. "Inflation is falling" doesn't mean prices are falling; it means prices are still rising but more slowly. Many headlines miss this distinction. Attributing all inflation to one cause. Politicians on both sides oversimplify. The 2021-2022 inflation had multiple causes interacting. Anyone claiming a single cause explains it is oversimplifying for rhetorical effect.`,
            `Using inflation fear to sell. Crypto influencers, gold dealers, and various course-sellers use inflation panic to push their products. "The dollar is dying, buy my product." Most of this is sales, not analysis. Inflation is real and worth understanding carefully. It isn't usually as catastrophic as the people selling solutions want you to think.`,
          ],
          image: `/voyager-assets/money-business/l03-s4-misrep.webp`,
          imageCaption: `Inflation gets misrepresented constantly. Knowing the patterns protects you.`,
          vocab: [
            {
              word: `cherry-picking`,
              definition: `Selecting only the data points that support your argument while ignoring others that don't. A common form of statistical manipulation.`,
              audioPrompt: `Cherry-picking is selecting only the data points that support your argument while ignoring others that don't, {name}. It is a common form of statistical manipulation. In inflation reporting, cherry-picking might mean highlighting specific items that rose dramatically (eggs in 2022) without mentioning the broader picture. Or comparing peak months to low months to make changes look bigger than they were. Recognizing cherry-picking when you see it is one of the most useful statistical literacy skills. Real analysis uses consistent methodology and reports both the parts that support its conclusion and the parts that complicate it.`,
            },
            {
              word: `price level`,
              definition: `The overall level of prices in an economy at a point in time. Different from the inflation rate, which measures how fast prices are changing. Prices don't fall when inflation slows; the price level just rises more slowly.`,
              audioPrompt: `Price level is the overall level of prices in an economy at a point in time, {name}. It is different from the inflation rate, which measures how fast prices are changing. This distinction causes one of the most common inflation misunderstandings. When headlines say inflation is falling, they mean the rate of price increase is slowing down, not that prices are actually declining. Prices typically stay elevated even after inflation cools. If a basket of goods cost $100 in 2020 and rose 9 percent in 2022, those goods now cost $109. Inflation falling to 3 percent afterward means the basket rises to about $112 the next year, not back to $100. The high price level persists even when inflation is under control.`,
            },
            {
              word: `year-over-year`,
              definition: `A comparison of data from one period to the same period twelve months earlier. The standard method for measuring inflation. Comparing non-equivalent time periods produces misleading inflation claims.`,
              audioPrompt: `Year-over-year is a comparison of data from one period to the same period twelve months earlier, {name}. It is the standard method for measuring inflation. The CPI inflation rate you hear reported, like 2.4 percent, is calculated by comparing this month's prices to prices exactly one year ago. Year-over-year comparisons are consistent and fair because they compare equivalent seasons and economic conditions. Cherry-pickers manipulate this by selecting the peak month of one period and comparing it to a low month in another, making changes look bigger than real consistent measurement shows. When evaluating any inflation claim, check whether the time comparison is year-over-year and consistent, or hand-picked to produce a dramatic headline.`,
            },
          ],
        },

        {
          id: `l03-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Before You Evaluate The Sources`,
          paragraphs: [
            `In the source evaluation that follows, you'll see three very different framings of essentially the same data. The first is from the Bureau of Labor Statistics methodology that produces the official CPI. The second is from a viral inflation panic account. The third is from a crypto influencer using inflation fear to pitch a product. Each makes claims, but they're doing very different intellectual work.`,
            `Watch for the patterns you've practiced. What's the source's methodology? What evidence does it cite? Does it engage with counterarguments? Does it sell anything? Are its claims falsifiable or vague? Does it cherry-pick or use consistent measurement? Does it acknowledge uncertainty or speak with false certainty? These are the same source evaluation skills you've been building across multiple lessons. Apply them here to a real and politicized topic.`,
            `Your job is to rank the sources by credibility based on methodology, not on whether you happen to like or dislike their conclusions. The most credible source may say things that feel boring or technical. The least credible source may sound the most exciting. This is exactly what real source evaluation requires: assessing rigor independent of appeal.`,
          ],
          image: `/voyager-assets/money-business/l03-s5-before.webp`,
          imageCaption: `Three framings of the same data. Methodology beats appeal.`,
          vocab: [
            {
              word: `methodology`,
              definition: `The specific process used to gather, measure, and analyze data. Strong methodology is what separates rigorous analysis from rhetorical claim-making.`,
              audioPrompt: `Methodology is the specific process used to gather, measure, and analyze data, {name}. Strong methodology is what separates rigorous analysis from rhetorical claim-making. The BLS uses a specific, documented methodology for calculating CPI: a defined basket of goods, weighted by household spending, with prices collected from many sources monthly. The methodology has been refined over decades. Viral content rarely has a methodology beyond "here's what looks dramatic." Asking "what's the methodology?" is one of the most clarifying questions in source evaluation.`,
            },
            {
              word: `falsifiable`,
              definition: `Capable of being proven wrong by evidence. A falsifiable claim specifies what evidence would disprove it. Vague or unfalsifiable claims are a warning sign of weak analysis or sales content.`,
              audioPrompt: `Falsifiable means capable of being proven wrong by evidence, {name}. A falsifiable claim specifies what evidence would disprove it. The BLS inflation methodology produces falsifiable claims: if the methodology is wrong, you can show exactly which data or weights are incorrect, and the agency has to respond. Compare that to a viral account claiming real inflation is 15 percent. What evidence would prove that claim wrong? Usually none, because the claim is deliberately vague. Vague or unfalsifiable claims are a warning sign of weak analysis or sales content. The best sources make specific, testable predictions and update when evidence challenges them. Weak sources make dramatic, vague claims that can never be pinned down.`,
            },
            {
              word: `source credibility`,
              definition: `How much trust a source deserves based on its methodology, transparency, track record, and independence from financial conflicts of interest. Not based on how exciting or confident it sounds.`,
              audioPrompt: `Source credibility is how much trust a source deserves based on its methodology, transparency, track record, and independence from financial conflicts of interest, {name}. It has nothing to do with how exciting, confident, or emotionally compelling the source sounds. The Bureau of Labor Statistics has high credibility because its methodology is public, its data is cross-checked, it has decades of track record, and it sells nothing. An anonymous social media account has low credibility because it discloses no methodology, makes cherry-picked claims, and promotes investment products. Rigorous analysis and boring presentation often go together. Dramatic presentation and weak analysis often go together. Assessing credibility by methodology rather than appeal is one of the most valuable habits you can build.`,
            },
          ],
        },

        // ───── SOURCE EVALUATION ──────────────────────────────────────────────
        {
          id: `l03-source-evaluation`,
          type: `source-evaluation`,
          headline: `Three Sources On Inflation`,
          intro: `Three sources discuss US inflation. Rank them from most credible to least credible based on methodology. Then see how a careful analyst would evaluate them.`,
          topic: `How should you understand current US inflation, what's happening with prices, and what should you do about it?`,
          sources: [
            {
              id: `source-a`,
              name: `Bureau of Labor Statistics monthly CPI report (May 2026 release)`,
              type: `Official US government economic statistic, published monthly by the BLS, with full methodology disclosed publicly`,
              claim: `As of the most recent monthly release, the Consumer Price Index rose 2.4 percent year-over-year. Core inflation (excluding volatile food and energy) was 2.7 percent. Housing remains the largest contributor. Specific categories show variation: shelter up 4.1%, food away from home up 3.2%, used vehicles down 1.3%, gasoline down 5.8%. The data and methodology are publicly available for any researcher to verify.`,
              evidence: `Decades of consistent methodology, refined through academic and Congressional review. Sample size of hundreds of thousands of price observations monthly across multiple US cities. Weighting based on Consumer Expenditure Survey of actual household spending. Methodology publicly documented. Data updated and revised when better information becomes available. Cross-checked against other inflation measures (PCE, GDP deflator) that use different methodologies.`,
            },
            {
              id: `source-b`,
              name: `@InflationTruthDaily — Viral X/Twitter account (340K followers)`,
              type: `Anonymous social media account posting daily inflation content. No disclosed credentials or methodology.`,
              claim: `"REAL inflation is at least 15%, the government numbers are LIES. Your grocery bill has DOUBLED in 5 years. Beef is up 87% since 2020. Gas has TRIPLED. The Fed knows but they're hiding it. The dollar is collapsing. Working families can't afford ANYTHING anymore. Wake up. Share this before they suppress it."`,
              evidence: `Selected anecdotes about specific items that have risen dramatically. Cherry-picked time period comparisons. No engagement with broader basket or weighted measurements. Multiple factually wrong specific claims (beef has risen but not 87%; gas has not tripled across the relevant period). Strong emotional language and conspiracy framing. Account also promotes specific cryptocurrency and gold investment products. Comments are full of similar claims but no verification.`,
            },
            {
              id: `source-c`,
              name: `"How to Protect Yourself From The Coming Dollar Collapse" — Sponsored video, crypto influencer (1.8M YouTube views)`,
              type: `Heavily produced 23-minute video by a crypto influencer with paid sponsorships from a specific crypto exchange and a gold dealer`,
              claim: `"Inflation is destroying the dollar. The only way to protect yourself is to convert your savings into Bitcoin and physical gold. The Federal Reserve is printing trillions. Hyperinflation is coming. Anyone still in dollars in 2027 will lose everything. Buy my course on 'inflation-proof investing' for $497 and use code SAVED for 20% off. Open an account at [crypto exchange] using my link for a $100 bonus. This video sponsored by [gold dealer] who can ship physical gold to your home today."`,
              evidence: `Selected statistics presented with dramatic graphics and music. References to "experts" who are mostly other crypto influencers or gold sellers. No engagement with mainstream economic analysis. Hyperinflation predictions repeated since 2010 (the dollar has not collapsed despite years of these claims). Significant financial incentives: course sales, affiliate links, sponsorship deals. The "advice" conveniently leads to the products being sold.`,
            },
          ],
          rankingPrompt: `Drag each source into one of the three slots: Most credible, Somewhat credible, Least credible.`,
          reasoningPrompt: `In 3-4 sentences: What signals did you use? What separates Source A's methodology from the others?`,
          reveal: {
            title: `How a careful economist would evaluate these`,
            content: [
              `Source A is the gold standard for inflation measurement. Notice everything it has: decades of consistent methodology, publicly available data and methodology documentation, sample size of hundreds of thousands of observations monthly, weighting based on actual household spending surveys, cross-checking against other measures, openness about uncertainty, willingness to revise when better data emerges. The BLS is not perfect; economists debate whether CPI fully captures certain effects, particularly housing costs and quality changes in goods over time. But the methodology is transparent, rigorous, and subject to ongoing peer review. This is what serious measurement looks like.`,
              `Source B is the most viral category and one of the most misleading. Notice the patterns: anonymous source, no credentials, no disclosed methodology, cherry-picked statistics, factually wrong specific claims, emotional and conspiracy framing, promotion of specific investment products. The pattern of "the government is hiding the real numbers" is a classic warning sign. Real disagreements about inflation methodology exist among credentialed economists, and they're technical and bounded. The viral version conflates legitimate methodological debate (which exists) with conspiracy claims (which don't fit the evidence). The 15% claim isn't supported by any serious inflation measurement, including alternative measures like ShadowStats that have been widely criticized by economists.`,
              `Source C is the now-recognizable pattern of fear-based commercial content. The structure: claim a coming catastrophe (hyperinflation, dollar collapse), present yourself as the warner, conveniently have products to sell that will "protect" the viewer. The hyperinflation predictions have been a constant in this space since the 2008 financial crisis and have not come true in the United States. Bitcoin and gold can be legitimate parts of a diversified portfolio for certain investors, but the "convert everything" pitch is sales, not analysis. The dollar has lost real purchasing power, but at rates of 2-4% per year, not the hyperinflationary collapse predicted.`,
              `The deeper lesson: inflation is real, worth understanding carefully, and rarely as catastrophic as the people selling solutions want you to think. The boring truth is that the US has experienced moderate inflation (2-9% annually) over the past several decades, with the recent spike now mostly normalized. The right response is diversified long-term investing (some stocks, some bonds, some cash for short-term needs), not panic-driven conversion to single assets being pitched by people who profit from your purchase. Source evaluation on financial topics matters more than on almost any other topic because the financial cost of falling for bad sources is real and large.`,
            ],
          },
        },

        {
          id: `l03-quiz`,
          type: `quiz`,
          headline: `Check your understanding`,
          questions: [
            {
              id: `q1`,
              type: `multiple-choice`,
              question: `What is inflation?`,
              options: [
                `When prices fall over time`,
                `The general rise in prices across an economy over time`,
                `A type of bank account`,
                `Money printing only`,
              ],
              correctIndex: 1,
              explanation: `Inflation is the general rise in prices. A small amount (around 2% annually) is considered healthy; high inflation is destructive; hyperinflation destroys economies entirely.`,
            },
            {
              id: `q2`,
              type: `multiple-choice`,
              question: `What is the Consumer Price Index (CPI)?`,
              options: [
                `A stock market measure`,
                `The main US inflation measure, calculated monthly by the BLS, tracking prices of a representative basket of goods and services weighted by household spending`,
                `A tax rate`,
                `A type of investment`,
              ],
              correctIndex: 1,
              explanation: `CPI is one of the most carefully constructed economic statistics. Methodology is publicly available. Refinements happen over time based on academic and Congressional review.`,
            },
            {
              id: `q3`,
              type: `multiple-choice`,
              question: `What is "purchasing power"?`,
              options: [
                `Power over markets`,
                `What a given amount of money can actually buy; reduced by inflation even when the nominal dollar amount stays the same`,
                `Government regulation power`,
                `Credit score`,
              ],
              correctIndex: 1,
              explanation: `Purchasing power vs nominal dollars is one of the most important financial concepts. $100 in 2000 is the same nominal amount as $100 today but roughly half the purchasing power due to cumulative inflation.`,
            },
            {
              id: `q4`,
              type: `multiple-choice`,
              question: `What's the difference between nominal wages and real wages?`,
              options: [
                `There's no difference`,
                `Nominal wages are dollar amounts; real wages adjust for inflation to reflect actual changes in purchasing power`,
                `Real wages are higher than nominal`,
                `Only the government uses real wages`,
              ],
              correctIndex: 1,
              explanation: `During the 2021-2022 inflation spike, real wages fell because prices rose faster than wages, even though nominal wages were rising. The distinction matters for understanding what's actually happening to workers.`,
            },
            {
              id: `q5`,
              type: `multiple-choice`,
              question: `When did US inflation peak during the 2021-2022 spike?`,
              options: [
                `Around 3%`,
                `Around 9.1% in June 2022, the highest since 1981`,
                `Around 20%`,
                `Around 50%`,
              ],
              correctIndex: 1,
              explanation: `9.1% peak in June 2022. The Fed responded with aggressive rate hikes. By 2024-2026, inflation had returned to near the Fed's 2% target.`,
            },
            {
              id: `q6`,
              type: `multiple-choice`,
              question: `What does "inflation is falling" actually mean?`,
              options: [
                `Prices are falling`,
                `Prices are still rising but more slowly than before; the inflation rate is declining, not the price level itself`,
                `Money is being destroyed`,
                `The Fed is failing`,
              ],
              correctIndex: 1,
              explanation: `One of the most commonly confused points. Prices typically don't fall back to old levels when inflation slows; they just rise more slowly going forward. Many headlines miss this distinction.`,
            },
            {
              id: `q7`,
              type: `multiple-choice`,
              question: `What is "cherry-picking" in inflation reporting?`,
              options: [
                `Selecting only the data that supports your argument while ignoring data that doesn't; a common form of statistical manipulation`,
                `Picking the best fruit`,
                `Federal Reserve policy`,
                `A legal investment strategy`,
              ],
              correctIndex: 0,
              explanation: `Cherry-picking is a major pattern in misleading inflation content. Selecting specific items that rose dramatically (eggs in 2022) without mentioning the broader basket is one common form.`,
            },
            {
              id: `q8`,
              type: `multiple-choice`,
              question: `Why do crypto influencers and gold sellers consistently push inflation fear?`,
              options: [
                `Because they genuinely care about your finances`,
                `Because their products benefit from "convert your dollars" narratives; the financial incentive shapes their analysis; fear-based marketing has been a constant pattern since at least 2008`,
                `Because they have superior insight`,
                `Because the government is hiding the truth`,
              ],
              correctIndex: 1,
              explanation: `Hyperinflation predictions have been a constant in crypto and gold marketing since 2008. The dollar has not collapsed despite years of these claims. The pattern is sales, not analysis.`,
            },
            {
              id: `q9`,
              type: `true-false`,
              question: `True or false: The BLS methodology for CPI is perfect and no serious economist questions any aspect of it.`,
              correctAnswer: false,
              explanation: `False. There are legitimate technical debates among credentialed economists about whether CPI fully captures certain effects, particularly housing costs and quality changes in goods. These debates are technical and bounded. They're different from conspiracy claims that the government is hiding "real" inflation.`,
            },
            {
              id: `q10`,
              type: `inference`,
              question: `A friend tells you "I'm putting all my savings into Bitcoin because inflation is destroying the dollar." Based on this lesson, what's the most thoughtful response?`,
              options: [
                `"Great idea, do it"`,
                `"That's pure crypto bro nonsense"`,
                `"Inflation is real and worth understanding. The dollar has lost purchasing power over time, around 2-4% per year on average. But the 'convert everything' pitch usually comes from people who profit from your purchase. Bitcoin can be part of a diversified portfolio but putting all savings into one volatile asset is risky regardless of the rationale. The boring approach—diversified investing in stocks, bonds, and some cash—has historically outpaced inflation over time without the volatility risk."`,
                `"You should buy gold instead"`,
              ],
              correctIndex: 2,
              explanation: `Honor the real concern about inflation. Name the sales pattern in the "convert everything" pitch. Offer the boring evidence-based alternative. This is mature financial literacy applied to a real conversation.`,
            },
          ],
        },

        {
          id: `l03-reflection`,
          type: `reflection`,
          headline: `Sit with this`,
          intro: `Pick the prompt that pulls at you most. Your answer is saved.`,
          prompts: [
            { id: `reflect-cognitive`, category: `Cognitive`, prompt: `Before this lesson, where did you get your sense of how bad inflation was? How accurate do you think those sources were?` },
            { id: `reflect-meta`, category: `Metacognitive`, prompt: `Which of the three sources would have fooled you most easily before this lesson? Be honest. What pattern made it appealing?` },
            { id: `reflect-identity`, category: `Identity`, prompt: `Most adults can't tell which inflation sources are credible. If you can, what does that change about how you'll engage with financial information for the rest of your life?` },
            { id: `reflect-application`, category: `Application`, prompt: `Listen to a parent or older adult talk about prices and inflation this week. Which framing are they using? Where did they get their take?` },
            { id: `reflect-critical`, category: `Critical`, prompt: `Could the BLS methodology actually be missing something important? What might the official numbers genuinely fail to capture about real-life inflation experience?` },
            { id: `reflect-personal`, category: `Personal investigation`, prompt: `Find one product you regularly use. Look up what it cost 5 years ago and what it costs now. Calculate the percentage change. How does it compare to overall CPI for that period?` },
          ],
        },

        {
          id: `l03-real-world`,
          type: `real-world`,
          headline: `Take it into your life`,
          guideContext: `Inflation is one of the most misunderstood economic topics. Two paths to apply real thinking.`,
          familyActivity: {
            title: `The Family Price History`,
            duration: `30 minutes`,
            description: `At dinner, ask each adult in your family: what's something that's gotten dramatically more expensive in their lifetime, and what's something that's gotten cheaper or stayed flat? Some things rise faster than CPI (housing, college, healthcare). Some things have actually gotten cheaper (electronics, clothing). The mixed picture is closer to reality than either "everything's getting more expensive" or "inflation isn't real." This conversation reveals how mixed real inflation actually is across the economy.`,
          },
          projectOption: {
            title: `Build Your Own Inflation Tracker, 2 weeks (optional)`,
            duration: `2 weeks, ~5 minutes per day`,
            description: `Pick 10 specific products you or your family actually buys (specific brand and size: not "milk" but "Horizon Organic whole milk, half gallon"). Note today's price at your usual store. Each day for 14 days, log the price. After 14 days, write 500 words on what you learned. Did prices change at all? Did some items vary more than others? How does your own basket compare to the official CPI categories? You'll build real intuition for how inflation actually moves through specific product prices.`,
            offerToParent: `Parent: opt your kid into this project from the dashboard. Completed projects show up in your weekly report.`,
          },
          identityQuestion: `If you understand inflation accurately while most adults around you have panicked or distorted takes, what does that let you do that they can't?`,
        },

        {
          id: `l03-identity-hook`,
          type: `identity-hook`,
          headline: `Who is this lesson making you?`,
          prompt: `One sentence. No wrong answer.`,
          placeholder: `Someone who...`,
          examples: [
            `Someone who can tell BLS data from viral inflation panic from crypto sales pitches.`,
            `A person who plans for inflation without being manipulated by inflation fear.`,
            `Someone who knows the difference between real economic concerns and people selling solutions to them.`,
          ],
          saveKey: `identity_responses_mb_11_12_03`,
        },

        {
          id: `l03-celebration`,
          type: `celebration`,
          guideText: `{name}. After this lesson you can define inflation precisely, explain how the CPI is constructed, distinguish nominal from real values, recognize how inflation gets misrepresented in viral content, and evaluate three different sources on the same data using methodology rather than appeal. Most adults have never seen the BLS methodology explained. You have. Most adults can't tell a viral panic account from a crypto sales pitch from real government data. You can. Next time we go practical: what should you actually do with money you save? Cash, bonds, stocks, crypto, real estate? Case Study format. See you there. — Ace`,
          badge: `inflation-translator`,
          badgeName: `Inflation Translator`,
          xpEarned: 75,
          competencies: [
            `Can define inflation and explain the CPI methodology`,
            `Distinguishes nominal from real values`,
            `Recognizes cherry-picking, conspiracy framing, and sales patterns in inflation content`,
            `Knows recent US inflation history (2021-2022 spike, current state)`,
            `Has practiced source evaluation on a politicized economic topic`,
          ],
          nextLessonPreview: {
            title: `Lesson 4: Saving vs Investing — Where Should Your Money Actually Go?`,
            hook: `You have $500. Should you save it, invest it in stocks, buy crypto, or pay down debt? Each choice has tradeoffs. Real numbers, real decisions.`,
          },
        },
      ],
    },
  ],
};

export default MONEYBUSINESS_VOYAGER_L03;

if (import.meta.env?.DEV) {
  const l = MONEYBUSINESS_VOYAGER_L03.lessons[0];
  const mags = l.screens.filter((s) => s.type === `magazine`).length;
  const sourceEval = l.screens.find((s) => s.type === `source-evaluation`);
  const quiz = l.screens.find((s) => s.type === `quiz`)?.questions?.length ?? 0;
  const reflect = l.screens.find((s) => s.type === `reflection`)?.prompts?.length ?? 0;
  console.log(
    `[LESSON-MB-VOYAGER-L03 ${VERSION}] "${l.title}" — ${mags} magazine, source-eval w/ ${sourceEval?.sources?.length ?? 0} sources, ${quiz} quiz, ${reflect} reflection`
  );
}
