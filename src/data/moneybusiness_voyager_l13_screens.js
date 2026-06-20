// ─────────────────────────────────────────────────────────────────────────────
// MONEY & BUSINESS VOYAGER  |  L13 — Get Rich Quick: Why It Almost Never Works
// Age band : voyagers (11-12)   Guide: ace (Eagle)
// Standards: Coreverse Original — Financial Literacy, Consumer Protection
// CALIBRATED: Voyager spec v1.1 (May 2026)
// Interaction format: SOURCE EVALUATION (FTC MLM report vs viral course pitch vs Bogle research)
// ─────────────────────────────────────────────────────────────────────────────

const VERSION = "voyager-mb-l13-v1";

const MONEYBUSINESS_VOYAGER_L13 = {
  ageBand: `voyagers`,
  subjectId: `money-business`,
  guide: `ace`,

  lessons: [
    {
      id: `mb-11-12-13`,
      title: `Get Rich Quick: Why It Almost Never Works`,
      duration: 35,
      xpReward: 75,
      badge: `scheme-spotter`,
      badgeName: `Scheme Spotter`,

      screens: [
        {
          id: `l13-welcome`,
          type: `welcome`,
          guideText: `{name}, most get-rich-quick schemes are mathematically impossible for most participants — that's not a cynical take, it's the math. MLMs, day trading, crypto pumps, online courses: this lesson examines each, explains the actual numbers, and teaches you to evaluate any financial opportunity you'll encounter using the same framework.`,
          headline: `Get Rich Quick`,
          subtitle: `Different products, same patterns. Recognize once, see forever.`,
          visual: `/voyager-assets/money-business/l13-welcome.webp`,
        },

        {
          id: `l13-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `The Real Math Of Building Wealth`,
          paragraphs: [
            `Before we look at schemes, let's anchor on what actually works. We covered this in Lesson 2 with compound interest. The honest math: invest consistently in low-cost diversified index funds, leave it alone, let compounding run for decades. At 8% average annual returns (close to historical S&P 500), someone who invests $500/month from 22 to 65 accumulates about $1.7 million. That's the boring, math-supported path to wealth for ordinary earners.`,
            `Another path: build durable income. A skilled tradesperson earning $80K consistently for 40 years and investing 15% of income retires with significantly more wealth than 95% of Americans. A professional earning $120K consistently with similar investment habits accumulates more still. Same boring math: high savings rate + index funds + time.`,
            `Outlier wealth (founders, athletes, executives, hit content creators) gets attention but represents tiny percentages of people. The boring math creates more millionaires than the outlier paths combined. The Spectrem Group's annual reports consistently find that most US millionaires are ordinary professionals (engineers, accountants, doctors, small business owners, teachers married to other professionals) who saved consistently rather than people who got rich quick.`,
            `Knowing what actually works helps you recognize what doesn't. Anything that promises significantly faster returns than 8-10% annually, with significantly less risk than stocks, with significantly less time required than a full career, is making implausible claims. Sometimes the claims describe actual outliers (real but extremely rare results). More often they describe outright fraud or business models that lose money for almost everyone involved.`,
          ],
          image: `/voyager-assets/money-business/l13-s1-math.webp`,
          imageCaption: `The boring math creates more millionaires than the outlier paths combined.`,
          vocab: [
            {
              word: `survivorship bias`,
              definition: `When we focus only on visible "winners" and ignore the much larger number of losers who don't get attention. Critical to recognize in get-rich-quick stories.`,
              audioPrompt: `Survivorship bias is when we focus only on visible winners and ignore the much larger number of losers who don't get attention, {name}. The day trader who became a millionaire writes books and goes viral. The thousand day traders who lost their savings don't. The crypto investor who turned $1,000 into $100,000 posts about it. The thousand who turned $1,000 into $100 mostly stay quiet about it. Recognizing survivorship bias is crucial when evaluating any get-rich-quick claim. The visible success stories are not representative samples. They are the lottery winners. The math of the underlying activity is determined by everyone who participated, most of whom you never hear from.`,
            },
            {
              word: `compound interest`,
              definition: `Earning interest on both your original investment and all previously earned interest. Over decades, this creates exponential growth. The math behind the $500/month from age 22 reaching $1.7 million by 65.`,
              audioPrompt: `Compound interest is earning interest on both your original investment and all previously earned interest, {name}. Over short periods it seems slow. Over decades it creates exponential growth. Someone who invests $500 per month from age 22 to 65 at 8% average annual returns accumulates about $1.7 million. Most of that is not from the money they put in; it's from interest earning interest earning interest over decades. Compound interest is sometimes called the most powerful force in personal finance. The boring math it enables creates more millionaires than all the get-rich-quick schemes combined. Starting early matters enormously because each additional year of compounding adds disproportionate value.`,
            },
            {
              word: `savings rate`,
              definition: `The percentage of income a person saves and invests rather than spends. High savings rate combined with consistent index fund investing is the core of the boring, math-supported wealth-building path.`,
              audioPrompt: `Savings rate is the percentage of income a person saves and invests rather than spends, {name}. A skilled tradesperson earning $80,000 and saving 15% of income invests $12,000 per year. Over a 40-year career with compound growth, that builds significantly more wealth than 95% of Americans will accumulate. The boring math of wealth-building requires two things working together: a high enough savings rate and enough time for compound interest to run. Getting rich quickly without a high savings rate is extremely rare. Getting wealthy slowly with a consistent savings rate and low-cost index funds is achievable for ordinary earners. Savings rate is one of the most controllable variables in long-term financial outcomes.`,
            },
          ],
        },

        {
          id: `l13-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Multi-Level Marketing (MLM)`,
          paragraphs: [
            `MLMs are companies where you make money by selling products AND by recruiting other people to sell those same products, with you earning a percentage of their sales. Familiar names: Herbalife, Amway, Mary Kay, LuLaRoe, Younique, doTerra essential oils, Beachbody, Avon. As of 2026 the industry generates over $40 billion in US sales annually.`,
            `The math of MLMs is mathematically brutal for most participants. The FTC's own research and multiple independent studies find that 99% of MLM participants lose money or earn less than minimum wage when all costs (product purchases, training, materials, time) are counted. The top 1% earn most of the income. The structure naturally produces this distribution because earning meaningful money requires recruiting many other recruits, and those recruits face the same brutal odds.`,
            `MLMs survive because they market participation as entrepreneurship, often to women, mothers, and people seeking flexible income. The pitch usually emphasizes lifestyle photos, "boss babe" framing, and stories of top earners who made significant money. The marketing rarely mentions the 99% failure rate or the multi-thousand-dollar costs of being a participant (required product purchases, training fees, conference fees, materials).`,
            `Specific patterns to recognize. "It's not a pyramid, it's a tree!" or other defensive language about pyramid schemes. Required minimum product purchases to "stay active." Emphasis on recruitment ("your network is your net worth"). Vague income claims with disclaimer footnotes that reveal almost no one earns the headline numbers. Heavy social media presence with curated lifestyle content. Recruitment of friends and family before strangers (which is itself a warning sign of unsustainable business models).`,
          ],
          image: `/voyager-assets/money-business/l13-s2-mlm.webp`,
          imageCaption: `MLMs: 99% of participants lose money or earn below minimum wage.`,
          vocab: [
            {
              word: `pyramid scheme`,
              definition: `An illegal business model where revenue comes primarily from recruiting new participants rather than from selling products. The recruits then must recruit more, creating a structure that inevitably collapses. Many MLMs operate on the edge of this legally.`,
              audioPrompt: `A pyramid scheme is an illegal business model where revenue comes primarily from recruiting new participants rather than from selling actual products, {name}. The recruits must then recruit more recruits, creating a structure that inevitably collapses when recruitment dries up. The FTC defines this carefully. Pure pyramid schemes are illegal. Many MLMs operate at the edge of this legal line: they sell actual products, which lets them argue they're not pyramid schemes, but most of their revenue comes from participants buying products to stay active in the system, not from genuine end-consumer demand. The distinction can be legally fuzzy but financially brutal.`,
            },
            {
              word: `recruitment`,
              definition: `In the context of MLMs, the act of signing up new participants who pay to join and sell products. MLM income depends heavily on recruitment because each new recruit generates fees and required product purchases for those above them.`,
              audioPrompt: `In multi-level marketing, recruitment is the act of signing up new participants who pay to join and sell products, {name}. MLM income depends heavily on recruitment because each new recruit generates fees and required product purchases for the people above them in the structure. The pitch usually emphasizes lifestyle and entrepreneurship, targeting women, mothers, and people seeking flexible income. Recruitment-heavy language like "your network is your net worth" is a warning sign. When most of the money in a business flows from recruitment rather than genuine product sales to outside customers, the structure is mathematically identical to a pyramid scheme. FTC research finds 99% of participants lose money or earn below minimum wage.`,
            },
            {
              word: `minimum wage`,
              definition: `The legally required lowest hourly pay for workers. FTC research uses minimum wage as a benchmark to show that 99% of MLM participants earn less than minimum wage when all costs and time are counted.`,
              audioPrompt: `Minimum wage is the legally required lowest hourly pay for workers, {name}. In the context of evaluating MLMs, it serves as a useful benchmark. The FTC's research and multiple independent studies find that 99% of MLM participants lose money or earn less than minimum wage when all costs are fully counted. Those costs include required product purchases to stay active, training fees, conference fees, and the value of time spent. When researchers calculate total earnings divided by total hours invested, most MLM participants earn a small fraction of minimum wage. This comparison makes the economics concrete: participants would have been financially better off working any ordinary minimum-wage job.`,
            },
          ],
        },

        {
          id: `l13-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Day Trading And Crypto Pumps`,
          paragraphs: [
            `Day trading is buying and selling stocks (or crypto, or forex) within a single day, hoping to profit from small price movements. The pitch: with the right strategy and tools, you can make $200-$2000 per day from your laptop. The reality: SEC and FINRA studies consistently find that 70-95% of day traders lose money over time, depending on the study. Among those still trading after a year, the loss rate is even higher. The 1-5% who profit are concentrated among professional traders with significant capital, advanced tools, and full-time focus.`,
            `Why day trading is so brutally bad for ordinary participants. Transaction costs (commissions, spreads, slippage) eat into every trade. Professional algorithmic traders have speed and information advantages retail traders can't match. The human psychological tendencies (fear and greed, overconfidence, sunk cost bias) work against successful trading. Most importantly: time spent day trading is time not spent on other wealth-building activities (career, education, investing in diversified index funds).`,
            `Crypto pumps follow a similar pattern with steeper short-term swings. A coin "moons" 1000% in days. The viral content focuses on early buyers who got rich. Survivorship bias hides the much larger number of buyers who arrived at the peak and lost 80-90%. Pump-and-dump schemes are explicitly illegal in stocks but harder to prosecute in crypto markets. The same person promoting a coin to followers may be selling their holdings as their followers buy.`,
            `Crypto isn't all scams. Bitcoin, Ethereum, and other major cryptocurrencies have legitimate technological and financial use cases. Some allocation to crypto in a diversified portfolio is defensible. The line between legitimate crypto investment and crypto scams is the same line as elsewhere: realistic claims, transparent information, no high-pressure recruitment, no promises that contradict basic probability math.`,
          ],
          image: `/voyager-assets/money-business/l13-s3-trading.webp`,
          imageCaption: `Day trading: 70-95% lose money. Crypto pumps: survivorship bias hides the losses.`,
          vocab: [
            {
              word: `pump-and-dump`,
              definition: `A scheme where promoters artificially inflate the price of an asset by spreading hype, then sell their holdings to new buyers who arrive at the peak. Illegal in stocks; common in unregulated crypto.`,
              audioPrompt: `A pump and dump is a scheme where promoters artificially inflate the price of an asset by spreading hype, then sell their holdings to new buyers who arrive at the peak, {name}. The new buyers lose most of their money when the artificial demand evaporates. This is illegal in regulated stock markets and prosecuted by the SEC when caught. In unregulated crypto markets, pump and dumps are much more common because enforcement is harder. The same influencer promoting a coin on social media may be selling their large position into the buying their content generates. Recognizing the pattern protects you from being on the wrong side of these trades.`,
            },
            {
              word: `day trading`,
              definition: `Buying and selling stocks, crypto, or forex within a single day hoping to profit from small price movements. SEC and FINRA studies find 70-95% of day traders lose money over time.`,
              audioPrompt: `Day trading is buying and selling stocks, crypto, or forex within a single day hoping to profit from small price movements, {name}. The pitch is that with the right strategy you can make $200 to $2,000 per day from your laptop. The reality is that SEC and FINRA studies consistently find that 70 to 95% of day traders lose money over time. Transaction costs eat into every trade. Professional algorithmic traders have speed and information advantages that ordinary retail traders cannot match. Human psychological tendencies like fear, greed, and overconfidence work against successful trading. The 1 to 5% of traders who profit are mostly professionals with significant capital, advanced tools, and full-time focus. For ordinary people, time spent day trading has high opportunity cost.`,
            },
            {
              word: `transaction costs`,
              definition: `Fees, spreads, and slippage paid on every buy or sell order. Even small transaction costs compound across many trades to significantly reduce returns, which is why they're a major structural disadvantage for day traders.`,
              audioPrompt: `Transaction costs are fees, spreads, and slippage paid on every buy or sell order, {name}. Even when a broker charges zero commission, the spread between buying and selling prices costs money on every trade. Slippage occurs when the price moves slightly between when you place and execute an order. For a long-term investor making a few trades per year, transaction costs barely matter. For a day trader making dozens of trades daily, they pile up fast. A 0.1% transaction cost on each trade means you must make more than 0.1% profit just to break even on that round trip. Combined with professional trader advantages and psychological biases, transaction costs are one of the structural reasons day trading produces losses for most participants.`,
            },
          ],
        },

        {
          id: `l13-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Courses And Coaches`,
          paragraphs: [
            `An entire industry sells courses teaching get-rich-quick approaches. "Make $10K a month from real estate." "Build a six-figure dropshipping business." "Become a forex trading millionaire." "Build passive income empire." Prices range from $97 e-books to $25,000 coaching programs. The marketing follows consistent patterns.`,
            `Common patterns to recognize. Income disclosure documents (legally required) that show most students earn nothing or less than the course cost. Aspirational lifestyle imagery (luxury cars, beach setups, travel) that emphasizes outcomes over methods. Testimonials from a small number of "students" whose results aren't independently verifiable. Promises of secrets that established financial advisors don't know. Urgency-driven pricing ("Enroll today, $5,000 off!"). Repeated upsells to higher-priced programs once you're in.`,
            `The brutal economics: the people getting rich in these spaces are usually the course-sellers themselves, not the students. Selling courses about getting rich has much better economics than the things the courses claim to teach. A real estate "guru" makes more selling $5,000 courses to thousands of aspirants than from real estate itself. A trading "expert" makes more selling courses to people who lose money on the actual trading.`,
            `Legitimate education exists. Bogleheads.org (free), basic finance books like "The Simple Path to Wealth" by JL Collins, "The Millionaire Next Door" by Stanley and Danko, Vanguard's free educational resources, the CFPB's free consumer education materials. These are mostly free or very cheap, written by people without strong commercial incentives, and aligned with what mainstream finance research has confirmed works. The contrast with the get-rich-quick industry is stark.`,
          ],
          image: `/voyager-assets/money-business/l13-s4-courses.webp`,
          imageCaption: `The course-sellers get rich. The students usually don't.`,
          vocab: [
            {
              word: `income disclosure`,
              definition: `A document, often required by law, showing what participants in a program actually earn. Reveals the real distribution, usually much worse than marketing implies. Always read these when evaluating MLMs or courses.`,
              audioPrompt: `An income disclosure is a document, often legally required, showing what participants in a program actually earn, {name}. Multi-level marketing companies and some courses are required to publish these. They almost always reveal that the marketing claims dramatically misrepresent typical results. An MLM that advertises participants making $100,000 will have an income disclosure showing the median participant earns $50-500 per year. A course promising six-figure income will show most students earn less than the course cost. Always look for and read income disclosures when evaluating any business opportunity. They are legally required to be honest in ways the marketing isn't.`,
            },
            {
              word: `upsell`,
              definition: `An offer to purchase a higher-priced product or upgrade after an initial purchase. In get-rich-quick courses, upsells often continue: after the $1,997 course, you're offered the $5,000 coaching program, then the $25,000 mastermind.`,
              audioPrompt: `An upsell is an offer to purchase a higher-priced product or upgrade after an initial purchase, {name}. In the get-rich-quick course industry, upsells are a core part of the business model. After you buy the $97 e-book, you're offered the $997 course. After the $997 course, the $5,000 coaching program. After coaching, the $25,000 mastermind retreat. Each stage promises that the next level is where you'll finally get the real secrets. The upsell chain is a warning sign because legitimate education doesn't typically work this way. The pattern reflects that the business is built around extracting maximum payment rather than delivering maximum value. Recognizing the upsell structure protects you from escalating losses.`,
            },
            {
              word: `conflict of interest`,
              definition: `When a person or organization has a financial incentive that may bias their advice. Course-sellers profit most when students buy courses, not when they succeed at the activities taught — a direct conflict of interest.`,
              audioPrompt: `A conflict of interest exists when a person or organization has a financial incentive that may bias the advice they give, {name}. Course-sellers profit when students buy courses, regardless of whether students succeed at the activities those courses teach. This is a direct conflict of interest: the seller's financial outcome depends on selling, not on student outcomes. Legitimate financial educators like Bogleheads do not sell products that create conflicts. Jack Bogle's research on index funds didn't depend on people buying high-fee products from him. The contrast is stark: follow advice from people who benefit when you succeed, not from people who already got paid before you tried anything. Identifying conflicts of interest is one of the most useful habits in evaluating any financial advice.`,
            },
          ],
        },

        {
          id: `l13-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Before You Evaluate The Sources`,
          paragraphs: [
            `In the source evaluation that follows, you'll see three sources discussing wealth-building paths. The first is the FTC's research on multi-level marketing outcomes. The second is a viral course pitch from a self-described "millionaire mentor." The third is research by Jack Bogle and others on what actually works for ordinary investors. Different sources, different evidence quality, very different recommendations.`,
            `As you rank them, watch for the patterns you've practiced. Methodology: how does each source generate its claims? Evidence: what data is cited and how rigorous is it? Conflicts of interest: who benefits financially if you believe the source? Verifiable specifics vs vague aspirational claims. Honest acknowledgment of risk and limits.`,
            `One framing: the get-rich-quick industry exists because the boring truth (consistent investing, durable income, compound interest over decades) is exactly that—boring. It doesn't generate viral content. It doesn't sell courses. It doesn't make influencers rich. So the get-rich-quick industry fills the attention space with promises that don't deliver. Understanding this dynamic helps you stay engaged with what actually works rather than what sounds exciting.`,
          ],
          image: `/voyager-assets/money-business/l13-s5-before.webp`,
          imageCaption: `Boring truth competes against exciting promises. Stay with the boring truth.`,
          vocab: [
            {
              word: `opportunity cost`,
              definition: `What you give up when choosing one option over another. Time spent on get-rich-quick schemes has high opportunity cost: it's time not spent on what actually works (education, career, consistent investing).`,
              audioPrompt: `Opportunity cost is what you give up when choosing one option over another, {name}. Time spent day trading is time not spent on career development. Money lost in an MLM is money not invested in index funds. Energy spent on the next get-rich-quick scheme is energy not building real expertise. The opportunity cost of get-rich-quick attempts is often as large as the direct financial cost. Many people who lose $5,000 trying various schemes have also lost the years of compound growth they could have had if that $5,000 had been invested in diversified index funds. Recognizing opportunity cost helps you evaluate the true cost of any path.`,
            },
            {
              word: `boring truth`,
              definition: `A phrase describing the actual, evidence-based path to building wealth: consistent investing in low-cost index funds over decades. Called boring because it doesn't generate exciting viral content or sell courses.`,
              audioPrompt: `The boring truth is the phrase describing the actual evidence-based path to building wealth, {name}. Invest consistently in low-cost diversified index funds, maintain a high savings rate, let compound interest run for decades. It's called boring because it doesn't generate viral content. It doesn't make for exciting testimonials. It doesn't sell courses. The get-rich-quick industry exists because the boring truth leaves an attention vacuum that exciting promises fill. Understanding this dynamic helps you stay engaged with what actually works rather than what sounds exciting. The boring path beats almost all alternatives for almost all ordinary investors, which is exactly why knowing it and committing to it puts you well ahead of most people.`,
            },
            {
              word: `index fund`,
              definition: `A fund that tracks a market index like the S&P 500, buying small amounts of all included stocks. Low-cost, diversified, and backed by decades of research showing most actively managed funds underperform them.`,
              audioPrompt: `An index fund is a fund that tracks a market index like the S&P 500, buying small amounts of all included stocks, {name}. Because it doesn't require active stock selection, it charges very low fees. Because it's diversified across many companies, it avoids the risk of any single company collapsing. Bogleheads research and SPIVA reports consistently find that 80 to 90% of actively managed funds underperform index funds over ten-plus year periods. The boring math: invest $500 per month in a low-cost index fund from age 22, and compound interest does the heavy lifting over decades. Index funds are the central tool in the evidence-based wealth-building path that Bogle pioneered and mainstream financial research has validated.`,
            },
          ],
        },

        // ───── SOURCE EVALUATION ──────────────────────────────────────────────
        {
          id: `l13-source-evaluation`,
          type: `source-evaluation`,
          headline: `Three Sources On How To Build Wealth`,
          intro: `Three sources discuss wealth-building paths. Rank them from most credible to least credible based on methodology and evidence. Then see how a careful analyst would evaluate them.`,
          topic: `What path should an ordinary person take to build wealth, and what should you do about offers promising fast results?`,
          sources: [
            {
              id: `source-a`,
              name: `Federal Trade Commission Report — "The Business Practices of MLM Companies" (2024 update)`,
              type: `Official government regulatory research; FTC has prosecuted multiple MLM cases including Herbalife ($200M settlement, 2016) and FortuneHiTech ($169M judgment)`,
              claim: `Independent research and FTC investigations consistently find that the income distribution of MLM participants is extremely skewed: typically 99% of participants either lose money or earn less than minimum wage when all costs (product purchases, training, materials, time) are accounted for. The top 1% of participants earn the vast majority of the income generated by all participants. This structure is mathematically inherent to the MLM model. Income disclosure documents (legally required) confirm this distribution across the industry.`,
              evidence: `Multiple decades of FTC research and enforcement. Independent academic research by Dr. Jon Taylor, Robert FitzPatrick, and others consistently confirms the findings. Income disclosure documents from MLM companies themselves confirm the distribution. The FTC has won major prosecutions of MLMs found to be operating as illegal pyramid schemes. The findings are reproducible across different MLM companies and different time periods.`,
            },
            {
              id: `source-b`,
              name: `"The Hidden Wealth Formula" — Viral Instagram course pitch (3.2M followers, paid course $1,997)`,
              type: `Instagram account run by self-described "millionaire mentor" who sells courses on day trading, crypto, and "passive income empire" building`,
              claim: `"The rich don't get rich from index funds. They get rich from inside information and methods schools won't teach you. My students went from broke to $30K/month in 90 days. Sarah was a single mom making $40K, now she makes $400K from her phone. I built my $5M empire by ignoring the financial 'experts.' My $1,997 Hidden Wealth Formula teaches the exact methods that took me from broke to financially free. Sign up by Friday and save $1,000! Comment 'ME' for VIP access."`,
              evidence: `Personal claims of wealth (no verification, lifestyle photos can be staged or borrowed). Selected testimonials from "students" whose results aren't verifiable. No income disclosure. No description of actual methods before purchase. Urgency-driven pricing. Vague conspiracy framing about "what schools won't teach." Subsequent investigation by online watchdogs revealed that many "millionaire mentors" of this type don't actually have the wealth they claim, and their primary income source is course sales, not the methods they teach.`,
            },
            {
              id: `source-c`,
              name: `Jack Bogle, "The Little Book of Common Sense Investing" (updated 2017) and the broader Bogleheads community`,
              type: `Book by Jack Bogle, founder of Vanguard and pioneer of index fund investing; widely respected in mainstream finance; Bogleheads.org provides free community-driven education`,
              claim: `Most ordinary investors should invest consistently in low-cost diversified index funds and leave them alone for decades. Stock-picking, market-timing, and frequent trading typically underperform this boring approach. Compound interest over long periods generates significant wealth. A $500/month investment over 40 years at 8% annual returns reaches approximately $1.5-1.7 million. This isn't a guarantee of any specific year's returns, but the long-term math has been remarkably consistent across decades of US market history. The boring approach beats almost all alternatives for almost all investors.`,
              evidence: `Decades of finance research supports the underlying claims. SPIVA reports consistently show 80-90% of active managers underperform indices over 10+ years. Bogle's framework has been adopted as standard advice by independent financial advisors. The Bogleheads community is free and provides ongoing education. The methods don't require any product purchase beyond ordinary brokerage accounts available to anyone. The math is publicly verifiable through any compound interest calculator.`,
            },
          ],
          rankingPrompt: `Drag each source into one of the three slots: Most credible, Somewhat credible, Least credible.`,
          reasoningPrompt: `In 3-4 sentences: What signals did you use? What separates regulatory research from viral promotion from mainstream financial education?`,
          reveal: {
            title: `How a careful analyst would evaluate these`,
            content: [
              `Source A is the most credible specifically for MLM analysis. Federal regulatory research, multi-decade data, independent academic confirmation, successful enforcement actions, reproducible across companies and time periods. The FTC has no financial incentive to misrepresent the data; if anything, their incentive is to be cautious to avoid lawsuits. When evaluating MLM opportunities, FTC research and income disclosure documents are the strongest evidence available.`,
              `Source C is most credible for general wealth-building advice. Jack Bogle was one of the most respected figures in mainstream finance. His approach has been validated by decades of research showing index funds outperform most alternatives for ordinary investors. The Bogleheads community provides free education aligned with established finance research. The methods are publicly verifiable and require no product purchase. The advice is consistent with what most independent financial advisors recommend. The contrast with the get-rich-quick industry is stark: free, evidence-based, conservative claims, no conflicts of interest.`,
              `Source B is the recognizable pattern of get-rich-quick promotion. The pattern is consistent across thousands of similar accounts: claimed wealth without verification, unverifiable testimonials, no income disclosure, urgency pricing, conspiracy framing about mainstream financial advice, course as the actual product. Online investigations have repeatedly found that "millionaire mentors" of this type often don't have the claimed wealth. Their primary income source is selling courses to people who want their lifestyle. The methods they teach often don't work for most students, which doesn't matter to the mentors because their income comes from selling courses, not from successful student outcomes.`,
              `The deeper lesson: when evaluating financial advice, source quality matters more than source charisma. Federal regulators publishing dry research about MLM income distributions are doing more to protect consumers than charismatic Instagram personalities who claim to be helping you escape the system. Mainstream finance research is mostly boring because reality is boring. The exciting alternative narratives almost always have something to sell. Following the boring evidence-based path puts you years ahead of where peers chasing exciting alternatives end up.`,
            ],
          },
        },

        {
          id: `l13-quiz`,
          type: `quiz`,
          headline: `Check your understanding`,
          questions: [
            {
              id: `q1`,
              type: `multiple-choice`,
              question: `What is "survivorship bias"?`,
              options: [
                `When you survive a hard time`,
                `When we focus only on visible winners and ignore the much larger number of losers who don't get attention; critical to recognize in get-rich-quick claims`,
                `An evolutionary trait`,
                `Insurance policy`,
              ],
              correctIndex: 1,
              explanation: `The day trader who became a millionaire writes books; the thousand who lost their savings don't. The visible success stories are not representative samples. Survivorship bias hides the math of what actually happens.`,
            },
            {
              id: `q2`,
              type: `multiple-choice`,
              question: `What's the typical MLM income distribution?`,
              options: [
                `Everyone earns similar amounts`,
                `99% of participants either lose money or earn less than minimum wage when all costs are counted; top 1% earn most of the income; this structure is mathematically inherent to the model`,
                `Top earners get fair shares`,
                `Most participants get rich`,
              ],
              correctIndex: 1,
              explanation: `The FTC's research and multiple independent studies consistently confirm this distribution. The marketing emphasizes top earners. The reality for participants overwhelmingly is loss or sub-minimum-wage earnings.`,
            },
            {
              id: `q3`,
              type: `multiple-choice`,
              question: `What's an "income disclosure"?`,
              options: [
                `Tax return`,
                `A legally-required document showing what participants in a program actually earn; reveals the real distribution, usually much worse than marketing implies`,
                `Salary negotiation`,
                `Bank statement`,
              ],
              correctIndex: 1,
              explanation: `MLMs and some courses must publish income disclosures. They almost always reveal that marketing claims dramatically misrepresent typical results. Always read these before joining any program.`,
            },
            {
              id: `q4`,
              type: `multiple-choice`,
              question: `What's the day trading loss rate?`,
              options: [
                `10%`,
                `50%`,
                `70-95% of day traders lose money over time (varies by study); loss rate gets worse the longer people trade`,
                `0%`,
              ],
              correctIndex: 2,
              explanation: `SEC and FINRA studies consistently find this. Transaction costs, professional trader advantages, and psychological tendencies work against retail day traders. The 1-5% who profit are mostly professionals with significant resources.`,
            },
            {
              id: `q5`,
              type: `multiple-choice`,
              question: `What's a "pump-and-dump"?`,
              options: [
                `A workout routine`,
                `A scheme where promoters artificially inflate an asset's price by spreading hype, then sell their holdings to new buyers; illegal in stocks, common in unregulated crypto`,
                `Standard trading`,
                `A pyramid scheme`,
              ],
              correctIndex: 1,
              explanation: `Pump-and-dump in stocks is prosecuted by the SEC. In unregulated crypto, it's harder to enforce. The same influencer promoting a coin may be selling their position into the buying their content generates.`,
            },
            {
              id: `q6`,
              type: `multiple-choice`,
              question: `Who actually gets rich in the get-rich-quick course industry?`,
              options: [
                `The students`,
                `The course-sellers themselves; selling courses about getting rich has much better economics than the things the courses claim to teach`,
                `Government agencies`,
                `Everyone equally`,
              ],
              correctIndex: 1,
              explanation: `A real estate "guru" makes more selling $5,000 courses to thousands of aspirants than from actual real estate. A trading "expert" makes more selling courses than from trading. The students mostly lose money on both the course and the activities the course teaches.`,
            },
            {
              id: `q7`,
              type: `multiple-choice`,
              question: `What does Bogleheads / Jack Bogle's research suggest for ordinary investors?`,
              options: [
                `Pick the best stocks`,
                `Invest consistently in low-cost diversified index funds and leave them alone for decades; stock-picking, market-timing, and trading typically underperform this approach`,
                `Day trade carefully`,
                `Join MLMs`,
              ],
              correctIndex: 1,
              explanation: `Bogle's framework is decades-validated and widely adopted as standard advice by independent financial advisors. The "boring" approach beats almost all alternatives for almost all ordinary investors.`,
            },
            {
              id: `q8`,
              type: `multiple-choice`,
              question: `Why does the get-rich-quick industry continue to exist despite poor results?`,
              options: [
                `Because it works`,
                `Because the boring truth (consistent investing, durable income, compound interest over decades) doesn't generate viral content; the get-rich-quick industry fills attention space with exciting promises that don't deliver but generate engagement and revenue`,
                `Because of government support`,
                `Because of survivorship bias only`,
              ],
              correctIndex: 1,
              explanation: `The fundamental dynamic: reality is boring, attention rewards excitement, and excitement sells. The get-rich-quick industry exists because reality doesn't generate clicks the way fantasy does.`,
            },
            {
              id: `q9`,
              type: `true-false`,
              question: `True or false: The opportunity cost of trying multiple get-rich-quick schemes is often as large as the direct financial cost.`,
              correctAnswer: true,
              explanation: `True. Time spent on schemes is time not spent on career, education, or consistent investing. Many people who lose $5,000 trying various schemes have also lost the years of compound growth that $5,000 could have produced in index funds.`,
            },
            {
              id: `q10`,
              type: `inference`,
              question: `Your friend tells you they just enrolled in a $3,000 course called "Crypto Wealth Academy" that promises to teach them to make $10K/month trading. Based on this lesson, what's the most useful response?`,
              options: [
                `"Congratulations, that's a great investment"`,
                `"Read the income disclosure first if one exists. The pattern in these courses is consistent: the course-sellers get rich from course sales, most students earn nothing or less than the course cost. Day trading itself has a 70-95% loss rate over time, regardless of how the course pitches it. If you have $3,000 to invest in your financial future, putting it in a low-cost diversified index fund and adding to it monthly will probably outperform this course's promises over a 30-year period. The boring path almost always beats the exciting one."`,
                `"Can I get in too?"`,
                `"Sounds risky but worth it"`,
              ],
              correctIndex: 1,
              explanation: `Real applied scheme recognition. Honor the friend's hope. Name the pattern. Offer the boring evidence-based alternative. You may save your friend $3,000 and protect them from worse losses on the actual trading.`,
            },
          ],
        },

        {
          id: `l13-reflection`,
          type: `reflection`,
          headline: `Sit with this`,
          intro: `Pick the prompt that pulls at you most. Your answer is saved.`,
          prompts: [
            { id: `reflect-cognitive`, category: `Cognitive`, prompt: `Before this lesson, did any of the get-rich-quick narratives appeal to you? Which ones? What made them appealing?` },
            { id: `reflect-meta`, category: `Metacognitive`, prompt: `Why is the boring truth (consistent investing over decades) so much harder to follow than exciting alternatives, even when you know the math?` },
            { id: `reflect-identity`, category: `Identity`, prompt: `If you become someone who automatically spots get-rich-quick patterns, how does that protect your future family from significant losses?` },
            { id: `reflect-application`, category: `Application`, prompt: `Pick one get-rich-quick pitch you've seen recently (online, on TV, from a relative). Apply this lesson's framework. What patterns appear?` },
            { id: `reflect-critical`, category: `Critical`, prompt: `Are there cases where unconventional wealth paths actually work? When? How would you tell legitimate unconventional opportunities from scams?` },
            { id: `reflect-personal`, category: `Personal investigation`, prompt: `Ask one adult: have they or anyone close to them ever joined an MLM, taken a get-rich-quick course, or tried day trading? What happened?` },
          ],
        },

        {
          id: `l13-real-world`,
          type: `real-world`,
          headline: `Take it into your life`,
          guideContext: `Scheme recognition is one of the most valuable lifelong financial skills. Two paths.`,
          familyActivity: {
            title: `The Family Scheme Conversation`,
            duration: `40 minutes`,
            description: `At dinner tonight, share what you learned about get-rich-quick patterns. Ask each adult: has anyone close to them ever participated in an MLM, taken a get-rich-quick course, or tried day trading? What happened? Many adults will know someone who lost significant money. Some may have done it themselves. This conversation often reveals real costs that families don't usually discuss openly. The lesson framework gives everyone language for recognizing patterns in the future. You may help a family member avoid an upcoming pitch they were starting to consider.`,
          },
          projectOption: {
            title: `Spot The Scheme: Two-Week Log (optional)`,
            duration: `2 weeks, ~10 minutes per day`,
            description: `Each day for 14 days, find one get-rich-quick pitch you encounter (online ad, TikTok, Instagram, YouTube, in person). Log: what's being promised, who's selling, what's the price if any, what patterns from this lesson appear. After 14 days, write 500 words on what you observed about the get-rich-quick industry's tactics. You'll see the same patterns recur across dramatically different products. Pattern recognition compounds. Once you see the structure, you can't unsee it. This is one of the most valuable applied media literacy projects available.`,
            offerToParent: `Parent: opt your kid into this project from the dashboard. Could save your family real money over years.`,
          },
          identityQuestion: `If you can spot these schemes automatically at 12, what does that protect you and your future family from over 60 years?`,
        },

        {
          id: `l13-identity-hook`,
          type: `identity-hook`,
          headline: `Who is this lesson making you?`,
          prompt: `One sentence. No wrong answer.`,
          placeholder: `Someone who...`,
          examples: [
            `Someone who reads income disclosures before believing any MLM pitch.`,
            `A person who knows the boring path beats the exciting path for almost everyone.`,
            `Someone willing to protect family members from get-rich-quick losses by sharing what I know.`,
          ],
          saveKey: `identity_responses_mb_11_12_13`,
        },

        {
          id: `l13-celebration`,
          type: `celebration`,
          guideText: `{name}. After this lesson you can recognize the patterns common to MLMs, day trading schemes, crypto pumps, and get-rich-quick courses; apply survivorship bias and income disclosures to evaluate claims; distinguish legitimate financial education from commercial schemes; and articulate the boring math of actual wealth-building. Most adults lose money to one of these schemes at some point. You can recognize the patterns before paying the tuition. Next time we move from defense to offense: starting something that actually sells. Three teen business ideas, real numbers. Case Study format. See you there. — Ace`,
          badge: `scheme-spotter`,
          badgeName: `Scheme Spotter`,
          xpEarned: 75,
          competencies: [
            `Recognizes patterns common to MLMs, day trading, crypto pumps, and get-rich-quick courses`,
            `Applies survivorship bias and income disclosures to evaluate income claims`,
            `Knows the SEC/FINRA data on day trading loss rates`,
            `Distinguishes legitimate financial education from commercial schemes`,
            `Can articulate the math of actual long-term wealth-building`,
          ],
          nextLessonPreview: {
            title: `Lesson 14: Starting Something That Sells`,
            hook: `Three teen business ideas with real numbers. Cost, revenue, time, risk. Which one would actually work?`,
          },
        },
      ],
    },
  ],
};

export default MONEYBUSINESS_VOYAGER_L13;

if (import.meta.env?.DEV) {
  const l = MONEYBUSINESS_VOYAGER_L13.lessons[0];
  const mags = l.screens.filter((s) => s.type === `magazine`).length;
  const sourceEval = l.screens.find((s) => s.type === `source-evaluation`);
  const quiz = l.screens.find((s) => s.type === `quiz`)?.questions?.length ?? 0;
  const reflect = l.screens.find((s) => s.type === `reflection`)?.prompts?.length ?? 0;
  console.log(
    `[LESSON-MB-VOYAGER-L13 ${VERSION}] "${l.title}" — ${mags} magazine, source-eval w/ ${sourceEval?.sources?.length ?? 0} sources, ${quiz} quiz, ${reflect} reflection`
  );
}
