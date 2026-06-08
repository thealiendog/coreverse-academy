// ─────────────────────────────────────────────────────────────────────────────
// MONEY & BUSINESS VOYAGER  |  L16 — Reading Financial News
// Age band : voyagers (11-12)   Guide: ace (Eagle)
// Standards: Coreverse Original — Media Literacy, Financial Information
// CALIBRATED: Voyager spec v1.1 (May 2026)
// Interaction format: SOURCE EVALUATION (WSJ vs CNBC vs financial influencer)
// ─────────────────────────────────────────────────────────────────────────────

const VERSION = "voyager-mb-l16-v1";

const MONEYBUSINESS_VOYAGER_L16 = {
  ageBand: `voyagers`,
  subjectId: `money-business`,
  guide: `ace`,

  lessons: [
    {
      id: `mb-11-12-16`,
      title: `Reading Financial News`,
      duration: 35,
      xpReward: 75,
      badge: `news-literate`,
      badgeName: `News Literate`,

      screens: [
        {
          id: `l16-welcome`,
          type: `welcome`,
          guideText: `{name}, financial information is everywhere. Wall Street Journal articles. CNBC market shows. YouTube finance channels. Reddit threads. TikTok investment influencers. Bloomberg terminals (if you happen to use one). Twitter/X market commentary. Each of these tells you something about money, markets, and the economy. They are not equivalent. The same event gets reported very differently across these sources, and what counts as "the news" depends enormously on where you get it. Today we look at three different sources discussing the same kind of topic. By the end you'll know how to evaluate financial information without being manipulated by the source's incentives.`,
          headline: `Reading Financial News`,
          subtitle: `Same world, very different filters. Learn to tell them apart.`,
          visual: `/voyager-assets/money-business/l16-welcome.webp`,
        },

        {
          id: `l16-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `What Financial News Actually Is`,
          paragraphs: [
            `Financial news is information about money, markets, companies, and the broader economy. It includes corporate earnings reports, central bank decisions, economic data (jobs, inflation, GDP), market movements, regulatory changes, geopolitical events affecting commerce, and analysis of all of these. Some of this information is objectively important. Some of it is daily noise dressed up as significant news.`,
            `Different types of sources approach financial news with different goals. Newspapers like the Wall Street Journal, Financial Times, and Bloomberg have traditional journalism missions: factual reporting, source verification, distinguishing analysis from news. Television networks like CNBC and Fox Business mix journalism with entertainment: they need to fill 12+ hours a day with content and keep viewers watching, which pushes toward drama, conflict, and constant updates whether the underlying news warrants attention or not. Social media influencers run sales businesses: their content drives audience growth, audience drives revenue (through ads, courses, affiliate links), and the structure rewards engagement over accuracy.`,
            `Knowing what type of source you're consuming matters as much as what they're saying. A WSJ article about Federal Reserve policy serves a different purpose than a CNBC pundit's hot take on the same announcement, which serves a different purpose than a financial influencer's TikTok about it. All three might be discussing the same event. Their content, framing, and reliability differ enormously.`,
          ],
          image: `/voyager-assets/money-business/l16-s1-news.webp`,
          imageCaption: `Different sources. Different goals. Different reliability.`,
          vocab: [
            {
              word: `editorial standards`,
              definition: `The internal rules a publication follows for accuracy, sourcing, conflict of interest disclosure, and corrections. Strong editorial standards distinguish journalism from commentary or marketing.`,
              audioPrompt: `Editorial standards are the internal rules a publication follows for accuracy, sourcing, conflict of interest disclosure, and corrections, {name}. Strong editorial standards distinguish real journalism from commentary or marketing. The Wall Street Journal, New York Times, Reuters, Associated Press, and Financial Times all maintain detailed editorial standards. They require multiple sources for major claims. They issue formal corrections when they get things wrong. They have clear policies about what relationships staff can have with companies they cover. Social media influencers and many digital outlets don't have these standards. Knowing whether the source you're reading has real editorial standards is one of the most useful signals for evaluating financial news.`,
            },
            {
              word: `paywall`,
              definition: `A system requiring paid subscriptions to access content. Most quality financial journalism sits behind paywalls (WSJ ~$40/month, FT ~$80/month). The general pattern: paying for content correlates with quality, though not perfectly.`,
              audioPrompt: `A paywall is a system requiring paid subscriptions to access content, {name}. Most quality financial journalism sits behind paywalls. The Wall Street Journal costs about $40 per month. The Financial Times runs around $80 per month. Bloomberg's professional terminal costs $24,000 per year. The free alternatives on social media and cable TV often have weaker editorial standards. The general pattern in journalism: paying for content correlates with quality, though not perfectly. This is because subscription-funded journalism creates incentives to be accurate and useful, while attention-funded content creates incentives to be dramatic and engaging. A $40 per month WSJ subscription that improves your financial decisions even slightly tends to pay for itself many times over.`,
            },
            {
              word: `financial news`,
              definition: `Information about money, markets, companies, and the broader economy including earnings reports, central bank decisions, economic data, market movements, and regulatory changes. Ranges from objectively important to daily noise dressed up as significant.`,
              audioPrompt: `Financial news is information about money, markets, companies, and the broader economy, {name}. It includes corporate earnings reports, central bank decisions, economic data like jobs and inflation and GDP, market movements, regulatory changes, and geopolitical events affecting commerce. Some financial news is objectively important: a Federal Reserve decision that changes borrowing costs for the entire economy matters. Some is daily noise dressed up as significant: a single afternoon's stock movement typically changes nothing for long-term investors. Developing the ability to distinguish important financial news from noise is one of the most valuable skills in financial media literacy. Most cable financial TV is noise. Most quality newspaper financial journalism is signal.`,
            },
          ],
        },

        {
          id: `l16-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Traditional Financial Journalism`,
          paragraphs: [
            `Traditional financial journalism is produced by publications with established editorial standards: Wall Street Journal (founded 1889), Financial Times (1888), Bloomberg News (1990), Reuters (1851), and similar outlets. These organizations employ trained financial reporters, run editorial review processes, require source verification, and issue corrections when they get things wrong. None of this guarantees they're always right or unbiased, but it creates accountability.`,
            `Quality traditional financial journalism typically: provides specific facts (numbers, dates, named sources), explains context (what this means relative to history), distinguishes news from analysis (clearly labeling opinion pieces), discloses conflicts of interest (if the publication has a financial relationship with subjects), and corrects errors openly. Major financial newspapers maintain Wall Street and Washington bureaus with reporters who develop deep expertise over years or decades.`,
            `Limitations exist. Even quality journalism has biases: most major financial outlets serve readers who already invest in markets, so they may underemphasize critiques of those markets. Print journalism is funded by subscriptions and ads, both of which create some commercial pressure. Reporters can be wrong about facts; analysts can be wrong about predictions. But the structural commitment to accuracy and accountability makes traditional financial journalism the most reliable foundation for understanding financial news.`,
            `Cost reality: most quality financial journalism is paywalled. WSJ costs about $40/month. FT is around $80/month. Bloomberg's professional terminal is $24,000/year. The free alternatives often have weaker standards. The general pattern in journalism: paying for content correlates with quality, though not perfectly.`,
          ],
          image: `/voyager-assets/money-business/l16-s2-journalism.webp`,
          imageCaption: `WSJ, FT, Bloomberg. Real editorial standards. Mostly paywalled.`,
          vocab: [
            {
              word: `conflict of interest`,
              definition: `When the financial or personal interests of the source could influence what they report. Real journalism discloses these. Many social media sources hide them. Always consider what the source gains if you believe them.`,
              audioPrompt: `A conflict of interest is when the financial or personal interests of the source could influence what they report, {name}. Real journalism discloses conflicts of interest. If a Wall Street Journal reporter owns shares in a company they're covering, the article will disclose this. If a financial advisor publishes research recommending a stock their firm has invested in, the report will disclose this. Many social media sources don't disclose conflicts. An influencer recommending a crypto coin may own a large position in that coin and benefit when followers buy. Always consider what the source gains if you believe them. Conflicts of interest don't make sources useless, but they should change how you weight the information.`,
            },
            {
              word: `source verification`,
              definition: `The process of checking claims with multiple independent sources before publishing. A core editorial standard for quality journalism. Without source verification, any claim can be published regardless of whether it is true.`,
              audioPrompt: `Source verification is the process of checking claims with multiple independent sources before publishing, {name}. It is a core editorial standard for quality journalism. Major newspapers require reporters to have at least two independent sources for significant claims. This is why quality journalism often takes longer to publish breaking news: they're checking the story before running it. Social media content and cable TV hot takes have little or no source verification. The first report of a rumor can go viral before anyone checks whether it is true. Source verification is what separates information you can rely on from information that may simply be repeating a claim someone else made without checking it.`,
            },
            {
              word: `subscription-funded`,
              definition: `A business model where revenue comes from readers paying for content. Creates incentives for accuracy and usefulness. Contrasted with ad-funded and engagement-funded models that create incentives for drama and clicks.`,
              audioPrompt: `Subscription-funded describes a business model where revenue comes from readers paying for content, {name}. This model creates incentives for accuracy and usefulness because paying subscribers who get bad information cancel. It is contrasted with ad-funded media, which depends on keeping eyeballs engaged, and engagement-funded social media, which rewards the most emotionally activating content. The Wall Street Journal and Financial Times are primarily subscription-funded. Cable financial TV is ad-funded. Social media influencers are engagement-funded. These different incentive structures help explain why the same event gets reported so differently across sources. The business model shapes the content, often more than the reporters' individual intentions do.`,
            },
          ],
        },

        {
          id: `l16-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Cable Business TV`,
          paragraphs: [
            `Cable business networks like CNBC, Fox Business, and Bloomberg TV operate differently from print journalism. They need to fill many hours of programming daily. They need to keep viewers watching during commercial breaks. They need to maintain advertiser relationships. These structural pressures push toward a particular style of coverage: constant updates, dramatic framing, market predictions, conflict between guests, and continuous emphasis on short-term price movements.`,
            `Cable business TV does have real journalism. Major networks have actual reporters covering real beats. Earnings reports get analyzed. Federal Reserve announcements get explained. Some of the content is genuinely useful information delivered competently. But this serious content is mixed with hours of speculation, hot takes, and entertainment-style segments. A typical cable business hour might include 10 minutes of actual news and 50 minutes of speculation about what the news might mean.`,
            `Two specific problems with cable financial TV. First: it creates the impression that constant trading and market-watching are necessary. Most of what's shown is short-term noise that doesn't affect long-term wealth building. Buy-and-hold investors who never watch cable TV typically outperform people who watch it daily, because the noise pushes viewers toward overtrading. Second: many cable guests have conflicts of interest. A hedge fund manager pumping a stock on CNBC may have a large position they're trying to sell into the audience's buying.`,
            `Useful approach: cable financial TV can be entertaining or occasionally informative, but it shouldn't drive investment decisions. The signal-to-noise ratio is too low. If you watch it at all, watch it like sports commentary: aware that you're being entertained, not informed in a way that should change major decisions.`,
          ],
          image: `/voyager-assets/money-business/l16-s3-tv.webp`,
          imageCaption: `Cable financial TV: real journalism mixed with hours of dramatic speculation.`,
          vocab: [
            {
              word: `signal-to-noise ratio`,
              definition: `The proportion of useful information (signal) to useless information (noise) in a source. High signal-to-noise sources teach you things. Low signal-to-noise sources waste your time. Most cable financial TV has low signal-to-noise.`,
              audioPrompt: `Signal-to-noise ratio is the proportion of useful information to useless information in a source, {name}. High signal-to-noise sources teach you things you didn't know. Low signal-to-noise sources fill time without changing what you know or how you should act. Most cable financial TV has low signal-to-noise: hours of speculation and hot takes that don't lead to better decisions. Most quality newspaper financial journalism has higher signal-to-noise: each article typically delivers actual new information. Tracking signal-to-noise across your information sources helps you allocate attention more efficiently. The sources you check shouldn't be the sources you most enjoy; they should be the sources that most reliably inform you.`,
            },
            {
              word: `overtrading`,
              definition: `Buying and selling investments too frequently, often driven by news-watching or emotion. Research consistently shows overtrading reduces returns due to transaction costs and poor timing. Buy-and-hold investors typically outperform active traders.`,
              audioPrompt: `Overtrading is buying and selling investments too frequently, often driven by news-watching or emotional reactions to market movements, {name}. Research consistently shows overtrading reduces returns. Transaction costs pile up with every trade. Emotional reactions to short-term news tend to push people to sell low and buy high, the opposite of what builds wealth. Cable financial TV is one of the strongest drivers of overtrading: it creates the impression that constant market attention and trading responses are necessary. Buy-and-hold investors who never watch cable TV typically outperform daily viewers over long periods. The signal-to-noise problem is directly connected to the overtrading problem. More noise consumption leads to more emotional overreaction leads to worse outcomes.`,
            },
            {
              word: `talking your book`,
              definition: `When a money manager promotes investments they already own on media, hoping viewers buy and drive up the price before the manager sells. Well-documented pattern among cable financial TV guests.`,
              audioPrompt: `Talking your book is when a money manager promotes investments they already own on media, hoping viewers buy and drive up the price before the manager sells, {name}. It is a well-documented pattern among cable financial TV guests. Hedge fund managers appearing on CNBC have a documented track record of selling their positions shortly after promoting them on air. The viewers who buy are providing liquidity the manager is selling into. This isn't necessarily illegal but it is a structural conflict of interest that makes the content unreliable. When you see a hedge fund manager enthusiastically recommending specific stocks on cable TV, the appropriate question is: what positions do they currently own? And are they selling into the buying their media appearance will generate?`,
            },
          ],
        },

        {
          id: `l16-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Social Media Financial Content`,
          paragraphs: [
            `Social media financial content includes TikTok investing accounts, YouTube finance channels, Reddit communities (r/personalfinance, r/wallstreetbets, r/Bogleheads), Instagram money influencers, financial Twitter/X, and Substack newsletters. The quality range is enormous: some of the best free financial education exists on social media (alongside some of the worst).`,
            `Genuinely good social media financial content typically shares characteristics. Specific, accurate information backed by data or recognized expertise. Transparency about conflicts (saying when content is sponsored, when the creator owns the assets they discuss). Calibrated confidence (acknowledging uncertainty appropriately). Engagement with criticism rather than just blocking critics. Recommendations consistent with mainstream financial research even when delivered in fresh formats.`,
            `Bad social media financial content also has consistent characteristics. Aspirational lifestyle content emphasizing outcomes over methods. Vague secrets that "Wall Street doesn't want you to know." Strong recommendations for specific stocks or coins without disclosure of the creator's positions. Promises that contradict basic probability math (consistent high returns with no risk). Course or paid community as the actual product behind the free content. Survivorship bias storytelling that hides typical failure rates.`,
            `The fundamental challenge with social media financial content: the structure rewards engagement, and dramatic claims drive engagement more than careful nuance. An influencer saying "buy this stock now, it's about to explode 10x" will get more views than one saying "consistent index fund investing over 40 years produces wealth." Both might be technically allowed under platform rules, but only one is supported by financial research. The structure of social media often pushes creators toward the dramatic version even when they know better.`,
          ],
          image: `/voyager-assets/money-business/l16-s4-social.webp`,
          imageCaption: `Social media: huge quality range. Some of the best free education, alongside some of the worst.`,
          vocab: [
            {
              word: `calibrated confidence`,
              definition: `Expressing certainty in proportion to what you actually know. Calibrated experts say "I'm not sure" when uncertain. Uncalibrated influencers project confidence regardless. Calibrated confidence is one of the best signals of source quality.`,
              audioPrompt: `Calibrated confidence is expressing certainty in proportion to what you actually know, {name}. Calibrated experts say "I'm not sure" when uncertain. Uncalibrated influencers project confidence regardless of what they actually know. Strong calibration is one of the best signals of source quality. A real economist will say "the data is mixed on this question" because the data often is. A confident TikTok finance influencer claims certainty about market direction that no honest expert would claim. The more confident a source sounds about uncertain things, the more likely they are to be unreliable. Calibrated confidence is the opposite of charisma in many financial contexts.`,
            },
            {
              word: `engagement`,
              definition: `Likes, shares, comments, and time spent on content. Social media platforms optimize for engagement. Dramatic financial claims drive more engagement than careful nuance, which pushes creators toward sensationalism regardless of accuracy.`,
              audioPrompt: `Engagement refers to likes, shares, comments, and time spent on content, {name}. Social media platforms optimize for engagement because it drives advertising revenue. Dramatic claims drive more engagement than careful nuance. An influencer saying "this stock will 10x" drives more engagement than one saying "consistent index investing over 40 years builds wealth." Both might be allowed, but only one is accurate. The engagement incentive pushes creators toward the dramatic version even when they know better. This dynamic explains why social media financial content is structurally biased toward sensationalism. The platform's business model and the creator's revenue depend on engagement, not on the accuracy of the advice.`,
            },
            {
              word: `affiliate link`,
              definition: `A tracking link that pays the creator a commission when a viewer clicks and makes a purchase. A common hidden revenue source for financial social media creators who appear to be giving free advice.`,
              audioPrompt: `An affiliate link is a tracking link that pays the creator a commission when a viewer clicks and makes a purchase, {name}. It is a common hidden revenue source for financial social media creators who appear to give free advice. A YouTube finance creator recommending a brokerage account may earn $50 or more for each viewer who opens an account through their link. A blogger reviewing financial products may earn commissions from every product they recommend positively. This creates a structural conflict of interest: the creator benefits financially from recommending the products they link to, regardless of whether those products are best for viewers. Good social media financial content discloses affiliate relationships. Content that doesn't disclose them is hiding a financial incentive.`,
            },
          ],
        },

        {
          id: `l16-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Before You Evaluate The Sources`,
          paragraphs: [
            `In the source evaluation that follows, you'll see three sources covering similar territory: market movements, what they mean, what investors should do. The first is a Wall Street Journal analysis. The second is a CNBC segment transcript. The third is a TikTok influencer's video script. Same general topic, very different content, very different reliability.`,
            `As you rank them, watch for the patterns. Editorial standards: does the source have processes for accuracy and correction? Conflicts of interest: are they disclosed? Specific facts vs vague claims: how much of the content is verifiable? Calibrated confidence: does the source acknowledge what's uncertain? Signal-to-noise: how much of the content actually changes what you should do?`,
            `One last framing: media literacy on financial topics is one of the most valuable skills you can develop. The financial industry spends billions of dollars on content designed to influence your decisions. Some of that content is helpful. Much is designed to extract money from you. Knowing how to evaluate sources is what separates investors who build wealth from investors who feed the industry that extracts from them.`,
          ],
          image: `/voyager-assets/money-business/l16-s5-before.webp`,
          imageCaption: `Financial media literacy: separates investors who build from investors who feed.`,
          vocab: [
            {
              word: `media literacy`,
              definition: `The ability to evaluate information sources for reliability, bias, and conflicts of interest. Critical skill in any age but especially in financial contexts where billions of dollars flow toward content designed to influence you.`,
              audioPrompt: `Media literacy is the ability to evaluate information sources for reliability, bias, and conflicts of interest, {name}. It's a critical skill in any age but especially in financial contexts where billions of dollars flow toward content designed to influence you. Media-literate investors recognize when content is selling them something, when sources have conflicts of interest, when confidence is calibrated vs uncalibrated, and when information matches mainstream research vs deviates from it. Investors without media literacy get manipulated repeatedly throughout their lives, often without knowing it. Building media literacy is one of the most durable financial skills available.`,
            },
            {
              word: `conspiracy framing`,
              definition: `A rhetorical pattern claiming hidden information that authorities don't want you to know. A common manipulation tactic in financial social media: "Wall Street doesn't want you to know this." Positions the creator as insider and viewer as target of suppression.`,
              audioPrompt: `Conspiracy framing is a rhetorical pattern claiming hidden information that authorities don't want you to know, {name}. In financial social media, the pattern sounds like "Wall Street doesn't want you to know this" or "banks are hiding this from you." It positions the creator as a brave insider sharing secrets and the viewer as the target of suppression. The framing is itself a manipulation tactic designed to lower critical thinking and increase emotional engagement. Real financial information isn't hidden by powerful forces and revealed by TikTok influencers. Mainstream financial journalism and research is public, accessible, and far more reliable than the conspiracy framing suggests. Recognizing this pattern is one of the fastest ways to identify low-quality financial content.`,
            },
            {
              word: `source quality`,
              definition: `The reliability of a source based on its editorial standards, conflict of interest disclosures, methodology, and track record. Source quality matters more than source charisma when evaluating financial information.`,
              audioPrompt: `Source quality is the reliability of a source based on its editorial standards, conflict of interest disclosures, methodology, and track record, {name}. In financial media, source quality matters more than source charisma. A dry government regulatory report has high source quality: it uses rigorous methodology, discloses its data, and has no financial incentive to mislead you. A charismatic influencer with a compelling story and 2 million followers may have very low source quality: no editorial standards, undisclosed conflicts, unverifiable claims. The fundamental lesson of financial media literacy is to evaluate sources by their structure, not by how much you enjoy watching or reading them. Enjoyment and reliability are not the same thing, and in financial content they are often inversely related.`,
            },
          ],
        },

        // ───── SOURCE EVALUATION ──────────────────────────────────────────────
        {
          id: `l16-source-evaluation`,
          type: `source-evaluation`,
          headline: `Three Sources Covering Market News`,
          intro: `Three sources discuss recent market movements and what they mean. Rank them from most credible to least credible based on methodology, editorial standards, and conflicts of interest. Then see how a careful analyst would evaluate them.`,
          topic: `How should investors think about recent market volatility and Fed policy changes?`,
          sources: [
            {
              id: `source-a`,
              name: `Wall Street Journal — "Markets Drop as Fed Signals Slower Rate Cuts" (analysis piece, byline reporter with named sources)`,
              type: `Established financial newspaper with strong editorial standards (founded 1889); maintains policy reporters in Washington and market reporters in NYC; issues formal corrections; clearly labels opinion vs news`,
              claim: `Markets declined 1.8% Thursday after Federal Reserve officials signaled they expect to cut interest rates fewer times in 2026 than previously projected. The article cites specific Fed meeting minutes, quotes from named officials, and historical context comparing this cycle to previous rate-cutting cycles. It notes that market reactions to Fed signals often overshoot in the short term but typically normalize within weeks. Includes commentary from three named economists with different views. Notes that long-term investors should rarely change their allocations based on single Fed meetings.`,
              evidence: `Specific facts cited with named sources. Multiple expert perspectives represented. Historical context provided. Distinguishes news from analysis (article labeled "Analysis"). Issues corrections when wrong. WSJ has been documenting market events for over a century. The publication employs trained financial journalists with established beats. Subscription-funded model reduces some commercial pressure compared to ad-funded outlets. Known biases: serves a reader base of active investors, may underemphasize critique of market structure.`,
            },
            {
              id: `source-b`,
              name: `CNBC "Power Lunch" segment — Hedge fund manager guest discussing stocks to buy`,
              type: `Live cable financial TV segment featuring a hedge fund manager promoting his investment thesis`,
              claim: `"Look, I'll tell you exactly what's happening. The Fed is wrong. They're going to be forced to cut rates much faster than the market thinks. I'm massively long tech stocks because of this. My fund is up 28% this year and the rest of the market is missing this. Specific tickers: I'm buying TECH, GROWTH, and AI-TICKER right now. Get in before the rotation. The smart money is already there. Anyone not positioning for this is going to get left behind. I've been right about this six months in a row."`,
              evidence: `Personal predictions framed as obvious. Specific stock tickers recommended on live TV (which often triggers buying by viewers). Self-reported track record without verification. Strong assertions about Fed behavior contradicting published Fed signals. No disclosure of hedge fund's specific positions (legal disclosure is in the bottom of screen text most viewers don't read). Pattern matches typical "talking your book" behavior: pumping positions you already own to retail audience. Hedge fund managers appearing on CNBC have documented track record of selling positions shortly after promoting them on air.`,
            },
            {
              id: `source-c`,
              name: `@FinanceBro TikTok video (500K followers) — "What the Fed JUST did and why YOU need to act now"`,
              type: `Viral TikTok account run by self-described "young investor" who sells investment courses ($497) and crypto signal services ($97/month)`,
              claim: `"The Fed just secretly screwed all of you and Wall Street isn't telling you. Rates are going UP. Cash is dying. Stocks will crash. Crypto is the only escape. I'm putting everything into Bitcoin and three altcoins I'm telling subscribers about right now. The window is closing. My course teaches the exact moves Wall Street uses to profit from this. Save 50% if you sign up before midnight. Link in bio."`,
              evidence: `Conspiracy framing ("Wall Street isn't telling you"). Contradicts the actual Fed announcement (Fed signaled fewer cuts, not raises). Specific predictions contradicting published research. No disclosure of personal positions in promoted assets. Heavy urgency-driven pricing on courses and signal services. The "secret information" framing is itself a manipulation pattern. Pattern matches typical pump-and-promotion structure: drive engagement with extreme predictions, monetize through course/signal sales, profit regardless of whether predictions come true.`,
            },
          ],
          rankingPrompt: `Drag each source into one of the three slots: Most credible, Somewhat credible, Least credible.`,
          reasoningPrompt: `In 3-4 sentences: What signals did you use? What separates editorial standards from cable speculation from social influencer sales?`,
          reveal: {
            title: `How a careful analyst would evaluate these`,
            content: [
              `Source A is the most credible. Strong editorial standards. Named reporters with established beats. Specific facts with named sources. Multiple expert perspectives. Distinguishes news from analysis. Notes the historical pattern that markets overshoot in the short term but normalize. Provides genuinely useful context for thinking about Fed policy without trying to convince you to take immediate action. WSJ has been wrong sometimes and has biases, but the structural commitment to accuracy and the verification processes make it among the most reliable financial information sources available.`,
              `Source B is interesting and complicated. The reporting is happening in real time on live TV (which limits verification). The hedge fund manager has real expertise but also enormous conflicts of interest: he's promoting positions his fund presumably owns, on a platform watched by millions of retail investors. The "talking your book" pattern is well-documented: fund managers appearing on CNBC often sell positions shortly after promoting them. The track record claim is unverified. The specific stock recommendations could move prices in ways that benefit the fund regardless of whether the underlying thesis is correct. This isn't useless content, but it should be heavily discounted for the structural conflicts.`,
              `Source C is the most recognizable scam pattern. Conspiracy framing about hidden information. Predictions that contradict published facts. No conflicts disclosed. Heavy course and signal-service sales pitches. Urgency-driven pricing. The actual financial information is contradicted by reality (Fed didn't signal rate increases). The pattern is consistent across thousands of similar accounts: engagement-driven extreme predictions, monetized through paid courses and signal services. The creator profits whether predictions come true or not because the revenue comes from course sales, not investment returns. Recognize once, you'll see this pattern in dozens of accounts.`,
              `The deeper lesson: source quality in financial media follows predictable patterns. Established publications with editorial standards usually beat cable TV speculation. Both usually beat social media influencers selling courses. The "rebel against mainstream sources" pitch from influencers is itself a marketing tactic. Mainstream financial journalism has real problems, but it's still more reliable than the alternatives that monetize through dramatic content and product sales. Knowing this saves you years of being manipulated by financial content designed to extract from you.`,
            ],
          },
        },

        {
          id: `l16-quiz`,
          type: `quiz`,
          headline: `Check your understanding`,
          questions: [
            {
              id: `q1`,
              type: `multiple-choice`,
              question: `What are "editorial standards"?`,
              options: [
                `Style guidelines for writing`,
                `The internal rules a publication follows for accuracy, sourcing, conflict of interest disclosure, and corrections; strong editorial standards distinguish real journalism from commentary or marketing`,
                `Government regulations`,
                `Subscription rules`,
              ],
              correctIndex: 1,
              explanation: `WSJ, FT, Reuters, AP all maintain detailed editorial standards. Social media influencers and many digital outlets don't. Whether a source has real editorial standards is one of the most useful credibility signals.`,
            },
            {
              id: `q2`,
              type: `multiple-choice`,
              question: `What does "conflict of interest" mean in financial media?`,
              options: [
                `Disagreement between coworkers`,
                `When the financial or personal interests of the source could influence what they report; real journalism discloses these; influencers often hide them`,
                `Two stocks being similar`,
                `Government regulation`,
              ],
              correctIndex: 1,
              explanation: `Always consider what the source gains if you believe them. A hedge fund manager promoting a stock on CNBC may own it and want you to buy. An influencer promoting crypto may already hold a large position. Conflicts don't make sources useless but should change how you weight them.`,
            },
            {
              id: `q3`,
              type: `multiple-choice`,
              question: `Why does most cable financial TV have low signal-to-noise?`,
              options: [
                `Bad audio quality`,
                `They need to fill many hours of programming daily and keep viewers watching, which pushes toward drama, conflict, and constant updates whether warranted or not; a typical hour might be 10 minutes of news and 50 minutes of speculation`,
                `They're not allowed to have facts`,
                `Government regulation`,
              ],
              correctIndex: 1,
              explanation: `The structural pressures of 12+ hours of daily programming push toward entertainment-style content. Real news exists but is mixed with hours of speculation. Buy-and-hold investors who never watch typically outperform daily viewers.`,
            },
            {
              id: `q4`,
              type: `multiple-choice`,
              question: `What is "talking your book"?`,
              options: [
                `Reading aloud`,
                `When a money manager promotes positions they already own on media; viewers buy, driving the price up, manager sells; pattern is well-documented among CNBC guests`,
                `A way to learn`,
                `A type of trading`,
              ],
              correctIndex: 1,
              explanation: `Hedge fund managers appearing on cable financial TV have documented track record of selling positions shortly after promoting them on air. This isn't necessarily illegal but it's a structural conflict.`,
            },
            {
              id: `q5`,
              type: `multiple-choice`,
              question: `What is "calibrated confidence"?`,
              options: [
                `Always being confident`,
                `Expressing certainty in proportion to what you actually know; calibrated experts say "I'm not sure" when uncertain; one of the best signals of source quality`,
                `Adjusting microphones`,
                `Trading carefully`,
              ],
              correctIndex: 1,
              explanation: `The more confident a source sounds about uncertain things, the more likely they're unreliable. Real economists say "the data is mixed." Confident influencers claim certainty no honest expert would claim.`,
            },
            {
              id: `q6`,
              type: `multiple-choice`,
              question: `What are common patterns of good social media financial content?`,
              options: [
                `Lots of followers`,
                `Specific accurate information backed by data; transparency about conflicts; calibrated confidence; engagement with criticism; recommendations consistent with mainstream financial research`,
                `Aspirational lifestyle content`,
                `Conspiracy framing`,
              ],
              correctIndex: 1,
              explanation: `Some of the best free financial education exists on social media. The Bogleheads community, certain YouTube channels, and financial Substacks can be excellent. The signals of quality are consistent across formats.`,
            },
            {
              id: `q7`,
              type: `multiple-choice`,
              question: `What are common patterns of bad social media financial content?`,
              options: [
                `Boring delivery`,
                `Aspirational lifestyle content; vague "Wall Street secrets"; recommendations without position disclosure; promises contradicting probability math; course/community as the actual product; survivorship bias storytelling`,
                `Low production value`,
                `Lack of music`,
              ],
              correctIndex: 1,
              explanation: `These patterns recur across thousands of accounts pushing different products. Recognize once, you'll see them everywhere. The structure rewards dramatic claims that get engagement, not careful nuance that drives accurate decisions.`,
            },
            {
              id: `q8`,
              type: `multiple-choice`,
              question: `What's the typical fee for quality financial journalism vs social media content?`,
              options: [
                `They're identical`,
                `Quality journalism is mostly paywalled (WSJ ~$40/mo, FT ~$80/mo, Bloomberg terminal $24K/year); free social media content has wider quality range; paying for content correlates with quality, though not perfectly`,
                `Social media is more expensive`,
                `Both are free`,
              ],
              correctIndex: 1,
              explanation: `Cost reality matters. The structure of paid subscription journalism creates incentives for quality. The structure of free attention-driven content creates incentives for drama. Investing $40/month in WSJ probably pays for itself many times over in better decisions.`,
            },
            {
              id: `q9`,
              type: `true-false`,
              question: `True or false: The "rebel against mainstream financial media" pitch from influencers is itself usually a marketing tactic.`,
              correctAnswer: true,
              explanation: `True. The framing of "Wall Street/big media doesn't want you to know" is one of the most recognizable patterns in financial scams. Mainstream financial journalism has real problems, but it's still more reliable than alternatives that monetize through dramatic content and product sales.`,
            },
            {
              id: `q10`,
              type: `inference`,
              question: `Your relative says "I get all my investment ideas from this TikTok guy with 2M followers, he's always right and gives free tips." Based on this lesson, what's the most useful response?`,
              options: [
                `"Great, share his tips with me!"`,
                `"The 'free' framing usually hides the actual business model. Look at his content carefully: is he selling courses, signal services, or driving you to platforms where he makes affiliate revenue? Does he disclose what he personally owns when he recommends things? Does he ever admit uncertainty? Most financial influencers profit whether their predictions come true or not because their revenue comes from selling content, not from investment returns. A WSJ subscription at $40/month might genuinely produce better outcomes."`,
                `"Block him immediately"`,
                `"Sounds reliable"`,
              ],
              correctIndex: 1,
              explanation: `Real applied media literacy. Honor the relative's hope. Point to the structural questions that reveal the actual incentives. Offer the boring better alternative. You might save them from being manipulated by financial content over years.`,
            },
          ],
        },

        {
          id: `l16-reflection`,
          type: `reflection`,
          headline: `Sit with this`,
          intro: `Pick the prompt that pulls at you most. Your answer is saved.`,
          prompts: [
            { id: `reflect-cognitive`, category: `Cognitive`, prompt: `Where do you currently get financial information? How does it score on the credibility patterns from this lesson?` },
            { id: `reflect-meta`, category: `Metacognitive`, prompt: `Why is the "Wall Street doesn't want you to know" framing so emotionally appealing even when it's usually a manipulation tactic?` },
            { id: `reflect-identity`, category: `Identity`, prompt: `If you become someone who can evaluate financial information by structure (not by charisma), how does that change your financial life over decades?` },
            { id: `reflect-application`, category: `Application`, prompt: `Pick one financial source you use regularly. Apply this lesson's framework. Is it more reliable than alternatives? Could you replace it with something better?` },
            { id: `reflect-critical`, category: `Critical`, prompt: `Are there cases where social media financial content beats traditional journalism? When? How can you tell?` },
            { id: `reflect-personal`, category: `Personal investigation`, prompt: `Watch 10 minutes of cable financial TV. Count: how much was actual new information vs speculation/drama/predictions? Honest tally.` },
          ],
        },

        {
          id: `l16-real-world`,
          type: `real-world`,
          headline: `Take it into your life`,
          guideContext: `Financial media literacy compounds across decades of investment decisions. Two paths.`,
          familyActivity: {
            title: `The Family Financial Source Audit`,
            duration: `40 minutes`,
            description: `At dinner, ask each adult in your family where they get financial information. TV? Newspapers? Social media? Specific people? Then walk through the credibility framework together: does each source have editorial standards? Conflicts of interest? Calibrated confidence? Does the source profit whether their predictions come true or not? Many adults get most of their financial information from low-quality sources (cable TV, social media, friends) without realizing it. This conversation often reveals patterns that have been shaping family decisions for years.`,
          },
          projectOption: {
            title: `Compare Coverage of One Event, 2 weeks (optional)`,
            duration: `2 weeks, ~30 minutes`,
            description: `Pick one major financial event happening during your project window (Fed meeting, major earnings report, market correction, regulatory announcement). Read or watch coverage of that event from 3 different sources: a quality newspaper (WSJ, FT, Reuters), a cable network (CNBC, Fox Business), and 2-3 social media accounts. Document how each source covered it. After 14 days, write 1,000 words on what you observed about how the same event is reported very differently. This is one of the most valuable media literacy exercises possible because you control for the underlying event and can see source bias clearly.`,
            offerToParent: `Parent: opt your kid into this project from the dashboard. Real applied media literacy.`,
          },
          identityQuestion: `If you can evaluate financial sources structurally at 12, what does that save you from over the next 60 years of news consumption?`,
        },

        {
          id: `l16-identity-hook`,
          type: `identity-hook`,
          headline: `Who is this lesson making you?`,
          prompt: `One sentence. No wrong answer.`,
          placeholder: `Someone who...`,
          examples: [
            `Someone who evaluates financial sources by their structure, not their charisma.`,
            `A person who knows the "rebel against Wall Street" pitch is usually itself a marketing tactic.`,
            `Someone willing to pay for quality journalism instead of being manipulated by free engagement-driven content.`,
          ],
          saveKey: `identity_responses_mb_11_12_16`,
        },

        {
          id: `l16-celebration`,
          type: `celebration`,
          guideText: `{name}. After this lesson you can distinguish traditional financial journalism from cable speculation from social media influencer content; identify editorial standards, conflicts of interest, and calibrated confidence; recognize "talking your book" and scam framing patterns; and apply media literacy to financial information sources. Most adults consume financial information without these filters. You can now choose your sources deliberately. Next time we go into one of the most poorly understood financial decisions adults face: insurance. When it protects you, when it's a ripoff. Case Study format. See you there. — Ace`,
          badge: `news-literate`,
          badgeName: `News Literate`,
          xpEarned: 75,
          competencies: [
            `Distinguishes traditional journalism, cable TV, and social media as different categories of financial information`,
            `Identifies editorial standards, conflict of interest disclosures, and calibrated confidence`,
            `Recognizes "talking your book" and other media-specific manipulation patterns`,
            `Can apply structural analysis to evaluate any financial source`,
            `Understands why "rebel against mainstream" framing is often a marketing tactic`,
          ],
          nextLessonPreview: {
            title: `Lesson 17: Insurance and Risk`,
            hook: `Insurance can save your life or rob you blind. Three scenarios with real math reveal when each is which.`,
          },
        },
      ],
    },
  ],
};

export default MONEYBUSINESS_VOYAGER_L16;

if (import.meta.env?.DEV) {
  const l = MONEYBUSINESS_VOYAGER_L16.lessons[0];
  const mags = l.screens.filter((s) => s.type === `magazine`).length;
  const sourceEval = l.screens.find((s) => s.type === `source-evaluation`);
  const quiz = l.screens.find((s) => s.type === `quiz`)?.questions?.length ?? 0;
  const reflect = l.screens.find((s) => s.type === `reflection`)?.prompts?.length ?? 0;
  console.log(
    `[LESSON-MB-VOYAGER-L16 ${VERSION}] "${l.title}" — ${mags} magazine, source-eval w/ ${sourceEval?.sources?.length ?? 0} sources, ${quiz} quiz, ${reflect} reflection`
  );
}
