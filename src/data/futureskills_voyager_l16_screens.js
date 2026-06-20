// ─────────────────────────────────────────────────────────────────────────────
// FUTURE SKILLS VOYAGER  |  L16 — Entrepreneurship
// Age band : voyagers (11-12)   Guide: byte (Fox)
// Standards: Coreverse Original — Business, Economics, Decision Making
// CALIBRATED: Voyager spec v1.1 (May 2026) — honest about what entrepreneurship actually involves
// Interaction format: CASE STUDY (three real-pattern entrepreneurial situations)
// ─────────────────────────────────────────────────────────────────────────────

const VERSION = "voyager-fs-l16-v1";

const FUTURESKILLS_VOYAGER_L16 = {
  ageBand: `voyagers`,
  subjectId: `future-skills`,
  guide: `byte`,

  lessons: [
    {
      id: `fs-11-12-16`,
      title: `Entrepreneurship`,
      duration: 35,
      xpReward: 75,
      badge: `business-thinker`,
      badgeName: `Business Thinker`,

      screens: [
        {
          id: `l16-welcome`,
          type: `welcome`,
          guideText: `{name}, entrepreneurship is a set of learnable skills — customer discovery, lean experimentation, unit economics, pricing — not a personality type or a mindset. Most teen entrepreneurship content is either inspirational or shallow. This lesson covers the real frameworks: what makes a business actually work.`,
          headline: `Entrepreneurship`,
          subtitle: `Three real cases. Pop framings oversell. The real skill is unsexy and useful.`,
          visual: `/voyager-assets/future-skills/l16-welcome.webp`,
        },

        {
          id: `l16-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `What Entrepreneurship Actually Involves`,
          paragraphs: [
            `Entrepreneurship gets glamorized constantly. The Silicon Valley founder mythology, the teen-millionaire YouTube content, the business-coach courses. The actual practice is much less glamorous. Most entrepreneurs spend their days dealing with customer complaints, managing inventory or service delivery, doing administrative work, marketing on a tight budget, and slowly figuring out what their customers actually want. The "vision and dream" framing is real for some founders but it's a small part of the day-to-day work.`,
            `What entrepreneurship actually requires. Customer obsession (real, not performed). Specific knowledge of your market and operations. Comfort with uncertainty about whether your business will survive month-to-month. Willingness to do unglamorous work (responding to support emails at 11pm, managing cash flow, learning accounting). Tolerance for slow progress in early years. Most successful small businesses didn't have a dramatic "aha" moment; they had years of refining their offering, gradually finding customers, slowly improving margins.`,
            `Real data on small business outcomes. Roughly 20% of new small businesses fail in the first year, 50% by year five, and 65% by year ten according to US Bureau of Labor Statistics tracking. These rates are lower than the often-cited "90% fail" claim (which conflates startups with small businesses), but they're still significant. Most successful entrepreneurs have one or two failed ventures before something works. Survivor bias makes the successful cases visible while the failures aren't, which distorts public perception of how often entrepreneurship works.`,
            `What this means for a 12-year-old. Starting young is genuinely valuable IF you're learning the actual skills (customer service, marketing, basic accounting, operations, sales). Starting young to "be an entrepreneur" as identity without learning these things is mostly performance. The kids who start small real businesses (dog walking, tutoring, lawn care, online services, simple product sales) and actually deliver to real customers learn things that compound for decades. The kids who start "businesses" that are mostly social media presence learn less.`,
          ],
          image: `/voyager-assets/future-skills/l16-s1-real.webp`,
          imageCaption: `Real entrepreneurship: customer service, unit economics, slow accumulation. Survivor bias distorts public perception.`,
          vocab: [
            {
              word: `unit economics`,
              definition: `The financial math of a single transaction or unit of your business. How much does it cost to deliver one unit (one haircut, one product, one service)? What can you charge for it? What's the margin? Why unit economics matter: a business can't be sustainable if individual transactions lose money, no matter how much "growth" you have. The most common reason small businesses fail.`,
              audioPrompt: `Unit economics is the financial math of a single transaction or unit of your business, {name}. How much does it cost to deliver one unit, whether that's one haircut, one product, one service, or one customer? What can you charge for it? What's the margin (the difference between cost and price)? Unit economics matter because a business can't be sustainable if individual transactions lose money, no matter how much "growth" you have. The most common reason small businesses fail isn't lack of customers; it's that the unit economics don't work. Each customer costs more to serve than they pay. The business scales toward bigger losses, not toward profitability. Learning to think in unit economics is one of the most important business skills available. It applies to lemonade stands and to billion-dollar companies.`,
            },
            {
              word: `survivor bias`,
              definition: `Error in perception caused by only seeing the cases that survived or succeeded, not the much larger pool that failed. In entrepreneurship, the visible content comes from founders who claim to have succeeded. The many more who tried similar approaches and got nothing don't make videos about their lack of results. The sample is filtered by visibility, not representativeness. Real success rates are much lower than survivor-biased content implies.`,
              audioPrompt: `Survivor bias is an error in perception caused by only seeing the cases that survived or succeeded, {name}. In entrepreneurship, the public-facing content comes from founders who succeeded, or who claim to have succeeded. The much larger number of people who tried similar approaches and got nothing don't make YouTube videos about their lack of results. The sample that's visible to you is filtered by who made it, not by who's representative. The famous teen millionaire is visible; the hundreds of teens who tried the same approach and earned nothing aren't. Survivor bias makes entrepreneurship look much more reliably successful than it actually is. Real data from the US Bureau of Labor Statistics shows roughly 20% of new small businesses fail in year one, 50% by year five, and 65% by year ten. The often-cited "90% fail" is overstated, but the real rates are still significant. The survivorship-biased impression that "lots of people do this and succeed" is a distortion created by who shows up in your content feed.`,
            },
            {
              word: `cash flow`,
              definition: `The timing and movement of money in and out of a business. Separate from profitability: a business can be theoretically profitable but fail because money runs out before revenue arrives. Common in early businesses where expenses come before customers pay. Founders who didn't track cash flow carefully often run out of money or patience before reaching sustainability, even when the underlying business model would have eventually worked.`,
              audioPrompt: `Cash flow is the timing and movement of money in and out of a business, {name}. It's separate from profitability. A business can be theoretically profitable, with more revenue than expenses over time, but still fail because it runs out of money before the revenue actually arrives. Expenses often come before income. You pay for supplies, labor, and marketing now; customers pay you later, or slowly. If the gap is too large and you don't have reserves, the business fails even if the underlying model works. Most entrepreneurs who "ran out of resources or motivation" before success failed on cash flow. They had a viable business model but didn't have the financial runway to reach the point where it worked. The lesson: managing cash flow is as important as having a good product. Knowing how much money you have, when expenses come due, and when payments arrive is not optional financial administration. It's what keeps the business alive long enough to work.`,
            },
          ],
        },

        {
          id: `l16-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Lean Startup, Customer Development, And Jobs-To-Be-Done`,
          paragraphs: [
            `Several frameworks have emerged from real entrepreneurship research that are more useful than pop business advice. They share an emphasis on customer learning rather than founder vision.`,
            `Steve Blank, a serial entrepreneur and Stanford professor, developed "customer development" in the 1990s. The core insight: most startup failures aren't about product quality; they're about building something customers don't actually want. Blank's approach: get out of the building, talk to potential customers, validate your assumptions before investing significant resources, and iterate based on what you learn. This sounds obvious but most founders skip it and build elaborate products first.`,
            `Eric Ries built on Blank's work in "The Lean Startup" (2011). His framework: instead of writing a long business plan and executing it perfectly, run small experiments to test specific assumptions. Build a minimum viable product (MVP) that tests the riskiest hypotheses. Measure what real customers do. Learn from the data. Pivot if the data tells you to. Iterate quickly. The Lean Startup methodology has been applied across thousands of businesses with mixed but generally positive results.`,
            `Clayton Christensen, a Harvard Business School professor, developed "Jobs to Be Done" theory. The core idea: customers don't buy products; they "hire" products to do specific jobs in their lives. A milkshake might be "hired" by a commuter as breakfast that's filling and doesn't make a mess. By the same person on the weekend, the same milkshake might be "hired" as a treat to share with a child. Different jobs, same product. Understanding the actual job your product does for customers is more useful than describing your product's features.`,
            `These frameworks don't promise easy success. They do provide a more reliable path than "have an idea, build the product, hope it works." For someone starting young, internalizing these frameworks early is genuinely valuable. They apply to a tutoring business, a craft store on Etsy, a lawn-care service, and a billion-dollar tech company. The underlying skills transfer across scales.`,
          ],
          image: `/voyager-assets/future-skills/l16-s2-frameworks.webp`,
          imageCaption: `Real frameworks: Steve Blank's customer development, Eric Ries's Lean Startup, Clayton Christensen's Jobs to Be Done.`,
          vocab: [
            {
              word: `minimum viable product`,
              definition: `Smallest version of a product or service that lets you test your riskiest assumptions with real customers. From Eric Ries's Lean Startup. The point isn't to build something incomplete; it's to learn quickly whether your assumptions are correct before investing in full development. An MVP for a dog-walking business might be walking three neighbors' dogs to learn what they want.`,
              audioPrompt: `A minimum viable product, or MVP, is the smallest version of a product or service that lets you test your riskiest assumptions with real customers, {name}. From Eric Ries's Lean Startup methodology. The point isn't to build something incomplete or low-quality. The point is to learn quickly whether your assumptions are correct before investing significant resources in full development. An MVP for a dog-walking business might be walking three neighbors' dogs to learn what they actually want, what they'll pay, and what's hard about delivery. An MVP for a software product might be a basic version with the core feature only, used by a handful of real users. Done well, MVPs save founders from building elaborate products nobody wants. Done badly, they become excuses for poor-quality work that fails for predictable reasons. The skill is identifying what the actual risk is and testing that, not testing whatever's easiest to test.`,
            },
            {
              word: `customer development`,
              definition: `Framework developed by Steve Blank in the 1990s: most startup failures are about building something customers don't actually want, not poor product quality. The approach: get out of the building, talk to potential customers, validate assumptions before investing significant resources, and iterate based on what you learn. Foundations of the Lean Startup methodology. Applied directly to any business at any scale.`,
              audioPrompt: `Customer development is a framework developed by Steve Blank, a serial entrepreneur and Stanford professor, in the 1990s, {name}. The core insight: most startup failures aren't about product quality; they're about building something customers don't actually want. Founders spend months or years building a technically excellent product that turns out to be commercially dead because they assumed customers wanted it without actually verifying. Blank's solution: get out of the building before building. Talk to potential customers. Validate your assumptions. Find out whether the problem you're solving actually exists for your target market and whether your proposed solution would work for them. Do this before investing significant resources. Iterate based on what you learn. This sounds obvious but most founders skip it and build elaborate products first. Eric Ries built on Blank's work in The Lean Startup. The customer development principle applies equally to a teen tutoring service and a billion-dollar tech startup: find out what customers actually want before building what you assume they want.`,
            },
            {
              word: `Jobs to Be Done`,
              definition: `Framework developed by Clayton Christensen (Harvard Business School): customers don't buy products, they "hire" products to do specific jobs in their lives. A milkshake might be hired as a filling, mess-free commuter breakfast. By the same person on a weekend, as a treat to share with a child. Different jobs, same product. Understanding what job your product does for customers is more useful than describing features.`,
              audioPrompt: `Jobs to Be Done is a framework developed by Clayton Christensen, a Harvard Business School professor, {name}. The core idea: customers don't buy products; they hire products to do specific jobs in their lives. The classic example is a milkshake. A commuter might hire a milkshake as breakfast that's filling, easy to consume while driving, and doesn't make a mess. The same person on a weekend might hire the same milkshake as a treat to share with their child. Different jobs, same product. The milkshake shop that understands these two different jobs can design its offering and marketing around what customers are actually trying to accomplish, rather than just its product's features. Understanding the actual job your product does is more useful than describing what it is. A tutoring service isn't selling "tutoring sessions"; it might be hired to reduce parental stress about a child's grades, or to give a kid confidence in a specific subject. Knowing which job it's being hired for changes how you design and market the service.`,
            },
          ],
        },

        {
          id: `l16-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Common Patterns Of Failure (And How To Avoid Them)`,
          paragraphs: [
            `Beyond knowing what works, it helps to know how new businesses commonly fail. Several patterns recur across many domains and timescales.`,
            `First failure: building before validating. The founder has an idea, spends months or years building it, then discovers customers don't want it. The product is technically excellent and commercially dead. Could have been avoided by talking to potential customers earlier and validating that the problem exists and that your solution solves it. Steve Blank's "get out of the building" advice exists because this pattern is so common.`,
            `Second failure: unit economics that don't work. Each customer costs more to serve than they pay, but the founder doesn't track this carefully because revenue is growing. The business scales toward bigger losses. By the time the problem is visible in the bank account, the runway is gone. Could have been avoided by tracking unit economics from day one and refusing to grow unprofitably.`,
            `Third failure: undifferentiated competition. The founder enters a market with many existing players doing similar things. The new business has nothing meaningfully better, cheaper, or different. Customers have no reason to switch. The business gradually loses money or stagnates. Could have been avoided by either finding a meaningful differentiation or choosing a different market.`,
            `Fourth failure: founder running out of resources or motivation. Most businesses take longer than expected to reach sustainability. Founders who didn't have realistic expectations about the timeline run out of money, energy, or patience before things work. Could have been avoided by having more honest financial planning and emotional preparation. Many businesses that "failed" would have succeeded with another six months of effort the founders didn't have.`,
            `Fifth failure: scaling before product-market fit. Founder pours resources into growth before they've found something customers actually love. The scaling amplifies the problems rather than solving them. More marketing spend on a product that doesn't work just loses money faster. Could have been avoided by waiting for clear product-market fit signals before investing in growth.`,
            `Recognizing these patterns in advance is one of the most valuable things experienced entrepreneurs can teach younger ones. The patterns are documented in business literature and known to working entrepreneurs. They're rarely shared in viral business-influencer content, which focuses on the dramatic success stories rather than the predictable failure patterns.`,
          ],
          image: `/voyager-assets/future-skills/l16-s3-failures.webp`,
          imageCaption: `Common failure patterns: build before validate, broken unit economics, undifferentiated competition, founder exhaustion, premature scaling.`,
          vocab: [
            {
              word: `product-market fit`,
              definition: `Term from venture capital and Lean Startup tradition. The state where your product genuinely solves a real problem for a defined market of customers who value it enough to pay you sustainably. Signs include strong word-of-mouth growth, low customer acquisition cost, customers using the product organically rather than reluctantly. Scaling before product-market fit usually wastes resources.`,
              audioPrompt: `Product-market fit is a term from venture capital and the Lean Startup tradition, {name}. The state where your product genuinely solves a real problem for a defined market of customers who value it enough to pay you sustainably. Signs of product-market fit include strong word-of-mouth growth, low customer acquisition cost, customers using the product organically and enthusiastically rather than reluctantly. The phrase was popularized by Marc Andreessen, a venture capitalist, who argued that finding product-market fit is the most important early task of any startup. Before product-market fit, scaling usually wastes resources because the underlying offering isn't working. After product-market fit, scaling becomes a different kind of challenge (operations, organization, capital) but the foundation is sound. Knowing whether you have product-market fit is one of the most important judgments in early entrepreneurship.`,
            },
            {
              word: `building before validating`,
              definition: `The most common founder mistake: spending months building a product before talking to customers to verify they want it. The result: technically excellent, commercially dead products. Steve Blank's "get out of the building" advice exists because this pattern is so common. Customer development is the solution: validate the problem and solution with real customers before significant build investment.`,
              audioPrompt: `Building before validating is the most common founder mistake, {name}. The founder has an idea, spends months or years building it with care and technical skill, then discovers that customers don't want it. The product might be technically excellent. It's commercially dead because no one validated that the problem existed, that customers would pay to solve it, and that this specific solution would work for them. This pattern could have been avoided by talking to potential customers earlier. Steve Blank's entire customer development framework exists because this pattern is so common. Most founders have a strong intuition that they know what customers want, and they skip the validation step to get directly to building. The validation step feels slow and uncertain. Building feels productive and concrete. But the founders who skip validation spend months building things that would take only a few customer conversations to disprove. The lesson: no matter how compelling your idea feels, validate before building. Talk to potential customers before investing significant resources. The customer's actual behavior tells you what you need to know.`,
            },
            {
              word: `undifferentiated competition`,
              definition: `Failure pattern where a new business enters a market with many existing players doing similar things, with nothing meaningfully better, cheaper, or different. Customers have no reason to switch. The business gradually loses money or stagnates because no value proposition distinguishes it. Could be avoided by either finding meaningful differentiation or choosing a different market. One of the five most common causes of new business failure.`,
              audioPrompt: `Undifferentiated competition is a failure pattern where a new business enters a market with many existing players doing similar things, and the new business has nothing meaningfully better, cheaper, or different, {name}. Customers have no reason to switch from what they're already using. The business might provide a real service but gradually loses money or stagnates because there's no compelling reason to choose it over alternatives. The founder often thinks their combination of features is differentiated when customers don't experience it that way. Avoiding this pattern requires either finding genuine differentiation, something meaningfully better, cheaper, or different for a specific customer segment, or choosing a different market with less competition. Meaningful differentiation doesn't have to be revolutionary. A tutoring service that specializes in a specific subject, or specifically in test preparation for one exam, is more differentiated than a generic tutoring service. A lawn-care service that texts photos of completed work and offers flexible scheduling is meaningfully different from one that doesn't. Small differentiations that genuinely matter to the target customer are enough.`,
            },
          ],
        },

        {
          id: `l16-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Why Most Teen Entrepreneurship Content Is Misleading`,
          paragraphs: [
            `A huge ecosystem of content targets teens with entrepreneurship hype. "How I made $100K at 15." Dropshipping courses. Social-media-monetization advice. Investment seminars promising quick wealth. The content varies in quality. Most of it is, charitably, not very useful and often actively misleading.`,
            `Several patterns recur. First: survivor bias. The visible content comes from kids who claim to have succeeded. The much larger number of kids who tried similar approaches and got nothing don't make videos about their lack of results. The sample is filtered by visibility, not by representativeness. Real success rates for the strategies being marketed are typically much lower than the content implies.`,
            `Second: confused income claims. "I made $X" rarely distinguishes revenue from profit. Selling $50,000 of product with $48,000 in costs is $2,000 of profit, not "made $50,000." Some teen creators conflate views or impressions with income. Some hide that their "business" income depends entirely on selling courses to other teens about being entrepreneurs. Real income, real net of expenses, real and sustained over time, is rare in this content.`,
            `Third: ignoring downside cases. The content shows successful examples without showing what happens to people who try the same strategies and don't succeed. Cryptocurrency speculation, dropshipping, options trading, "influencer business" — all have visible winners and a much larger pool of invisible losers. Teen-focused content rarely engages with the downside.`,
            `Fourth: course-and-affiliate revenue. Many teen entrepreneurship "successes" are actually courses or affiliate marketing operations that depend on selling to other aspiring teen entrepreneurs. The business model is selling the dream rather than executing on it. This isn't always conscious deception, but it's a structural pattern: the people best at teaching "how to be an entrepreneur online" often haven't done much else successfully.`,
            `What good entrepreneurial learning actually looks like for a teen. Starting a small real business (lawn care, tutoring, dog walking, simple products you can make yourself, basic services). Delivering to actual customers who pay you. Tracking your unit economics. Learning what's hard. Failing at things and adjusting. Reading careful business literature (Lean Startup, Christensen, blogs by working founders rather than course-sellers). The boring path produces actual skills. The viral path mostly produces social media performance.`,
          ],
          image: `/voyager-assets/future-skills/l16-s4-teen.webp`,
          imageCaption: `Most teen entrepreneurship content: survivor bias, confused income claims, ignored downside, course revenue.`,
          vocab: [
            {
              word: `meta-business`,
              definition: `Pattern where someone's main income comes from teaching, coaching, or selling courses about how to make money in some area, rather than actually doing the activity successfully. Common in trading, dropshipping, social media monetization, and entrepreneurship content. Not always wrong but should be recognized as a distinct business model from actually doing the thing being taught.`,
              audioPrompt: `Meta-business or "business about business" is the pattern where someone's main income comes from teaching, coaching, or selling courses about how to make money in some area, rather than from actually doing the activity successfully, {name}. Common in trading content (most trading courses are sold by people who make their money selling courses, not from trading). Common in dropshipping (most dropshipping courses are sold by people who make their money selling courses). Common in social media monetization, entrepreneurship content, "passive income" strategies. Not always wrong. Some real practitioners also teach. But the structure should be recognized. The people best at teaching how to make money in some area often haven't made much money doing the activity themselves; they make it by teaching about the activity. Knowing this pattern protects you from confusing teaching success with practice success.`,
            },
            {
              word: `confused income claims`,
              definition: `Pattern in viral entrepreneurship content where revenue is presented as profit without deducting costs. "I made $50,000" from $48,000 in costs is $2,000 profit. Some creators conflate views or impressions with income. Some hide that their "business" income depends entirely on selling courses to other teens about being entrepreneurs. Real income means net of all expenses, real and sustained over time.`,
              audioPrompt: `Confused income claims are a recurring pattern in viral teen entrepreneurship content, {name}. Revenue is presented as profit without deducting costs. "I made fifty thousand dollars" from fifty thousand dollars in product revenue, with forty-eight thousand in supply, shipping, and advertising costs, is two thousand dollars of actual profit, not fifty thousand. The content rarely distinguishes these. Some teen creators conflate views, impressions, or follower counts with actual income. Some hide that their "business" income depends almost entirely on selling courses to other aspiring teen entrepreneurs about how to be an entrepreneur. The meta-business model funds the income claims. Real income means net of all expenses: supplies, shipping, platform fees, advertising, time. Real and sustained over time, not just one good month. When evaluating any income claim in entrepreneurship content, the right questions are: what were the actual costs? Is this revenue or profit? Is this one month or sustained? Is the income from the activity claimed, or from selling courses about the activity? The number that matters is what's left after everything is paid.`,
            },
            {
              word: `dropshipping`,
              definition: `Business model where you sell products online without holding inventory: you take orders and pass them to a supplier who ships directly to the customer. Low barrier to entry, which is why it's heavily marketed to teens. High competition because barriers are low for everyone. Margins are typically thin. Much dropshipping course content is sold by people whose primary income is selling dropshipping courses, not from dropshipping itself.`,
              audioPrompt: `Dropshipping is a business model where you sell products online without holding inventory, {name}. You take customer orders through your own online store, then pass the orders to a supplier who ships directly to the customer. You keep the difference between what you charged and what the supplier charges. Low barrier to entry: you don't need to manufacture or store anything. This is why it's heavily marketed to teens as a quick way to start an online business. The low barrier to entry also means high competition: anyone can start a dropshipping store for the same products you're selling. Margins are typically thin because suppliers offer similar pricing to anyone who asks. The competitive dynamics make it hard to earn meaningful income. The teen entrepreneurship content ecosystem is full of dropshipping courses and success stories that reflect survivor bias: the visible cases are the rare successes, while the much larger pool of people who tried and earned little or nothing aren't represented. Much of the course content is sold by people whose primary income is selling dropshipping courses, not from dropshipping successfully. Recognizing dropshipping as a specific model with specific competitive dynamics helps evaluate it honestly.`,
            },
          ],
        },

        {
          id: `l16-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Before You Analyze The Cases`,
          paragraphs: [
            `In the case study that follows, three people face entrepreneurial decisions. Each has an intuitive approach available and a research-informed approach. The cases aren't about making the right move guaranteed; entrepreneurship has too much uncertainty for guarantees. They're about applying real frameworks (customer development, unit economics, product-market fit) instead of intuitive defaults.`,
            `One framing as you work through the cases. Notice how often the "right" move involves slowing down to learn rather than speeding up to execute. Building before validating is the most common founder mistake. The slower path of validation often produces faster eventual success because you build the right thing rather than rebuilding repeatedly.`,
            `Another framing. The cases are about small-scale entrepreneurship that a teen or young adult could realistically run. The frameworks scale to billion-dollar businesses, but the lessons start at the level of a tutoring service or simple product business. Starting small and real is much more valuable than fantasizing about big startups while not actually doing anything.`,
            `One last framing. Even good frameworks can't guarantee success. Real entrepreneurship has irreducible uncertainty: you can do everything right and still fail because the market shifted, a competitor entered, or your timing was off. The frameworks improve your odds; they don't eliminate risk. Knowing this in advance protects you from interpreting an unlucky outcome as a personal flaw, and it keeps you honest about what businesses actually involve.`,
          ],
          image: `/voyager-assets/future-skills/l16-s5-before.webp`,
          imageCaption: `Three realistic cases. The frameworks improve odds; they don't eliminate uncertainty.`,
          vocab: [
            {
              word: `validated learning`,
              definition: `Term from Lean Startup. Learning that comes from real customer interaction rather than from theorizing or assumption. The unit of progress in early entrepreneurship isn't "feature shipped" or "code written"; it's "assumption validated" or "assumption refuted." Validated learning saves resources because you're not building things customers don't want.`,
              audioPrompt: `Validated learning is a term from Eric Ries's Lean Startup, {name}. Learning that comes from real customer interaction rather than from theorizing or assumption. The unit of progress in early entrepreneurship isn't "feature shipped" or "code written"; it's "assumption validated" or "assumption refuted." A founder might assume that customers want a certain feature. Until they actually talk to customers, that's just an assumption. Validated learning is the process of testing the assumption against real customer behavior. The assumption is either validated (customers actually want this and pay for it) or refuted (they don't, or they want something different). Validated learning saves resources because you're not building things customers don't want. The faster you validate or refute assumptions, the more efficient your early entrepreneurial work becomes.`,
            },
            {
              word: `irreducible uncertainty`,
              definition: `The unavoidable uncertainty in entrepreneurship: you can apply all the right frameworks and still fail because the market shifted, a competitor entered, or timing was off. Frameworks improve odds; they don't eliminate risk. Knowing this in advance protects you from interpreting an unlucky outcome as a personal flaw. Good entrepreneurial decisions are evaluated on decision quality, not just outcome.`,
              audioPrompt: `Irreducible uncertainty is the unavoidable uncertainty in entrepreneurship, {name}. Even when you apply all the right frameworks, customer development, unit economics, validated learning, minimum viable product, product-market fit testing, you can still fail. The market might shift while you're building. A better-funded competitor might enter. Your timing might be slightly off in a way you couldn't have predicted. None of this means the frameworks are wrong. They improve your odds; they don't eliminate risk. Knowing this in advance protects you from two common errors. First: interpreting an unlucky outcome as proof that your approach was wrong. A good decision can produce a bad outcome, which is Annie Duke's decision-quality versus outcome-quality distinction. Second: believing that following the right process guarantees success, which produces overconfidence in cases where you should be more cautious. Real entrepreneurship has irreducible uncertainty. The honest framing: do the work to improve your odds, apply the frameworks, validate your assumptions, manage your unit economics, and then accept that some uncertainty remains. That's what entrepreneurship actually is.`,
            },
            {
              word: `validated scaling`,
              definition: `Approach to business growth that tests each expansion step before committing to larger commitments. Hire one worker and validate training quality and unit economics before hiring five. Serve a small batch of customers before listing fifty products. Each step is validated before the next. Slower than intuitive scaling but produces more durable growth because each step builds on confirmed foundations rather than amplifying unresolved problems.`,
              audioPrompt: `Validated scaling is an approach to business growth that tests each expansion step before committing to larger commitments, {name}. The intuitive founder move is to scale fast when things seem to be working: if one employee is good, hire five; if ten customers are good, sign up a hundred. Validated scaling reverses this. Before hiring five employees, hire one and validate: can you train them to your quality standard? Do customers accept their work? Do the unit economics work when you're paying their labor? Each yes justifies the next step. A no at small scale prevents much larger failure at big scale. The dog-walking case in this lesson illustrates it: hire one walker, train carefully, test with a few existing customers, validate unit economics, then gradually expand. This is slower than the founder's ambition wants. But most successful small businesses scale this way. The rare ones that scale faster usually had specific reasons: extremely clear unit economics, easy training, low operational risk. Validated scaling is the default that produces durable growth rather than amplifying unresolved problems through premature expansion.`,
            },
          ],
        },

        // ───── CASE STUDY ─────────────────────────────────────────────────────
        {
          id: `l16-case-study`,
          type: `case-study`,
          headline: `Three Real Entrepreneurial Situations`,
          intro: `{name}, three people face different entrepreneurial decisions. Each has an intuitive approach and a research-informed approach. For each, identify what would actually serve them better.`,
          cases: [
            {
              id: `case-1`,
              title: `The Service Idea — Tutoring`,
              context: `You're 14, good at math, and want to earn money. You're thinking of offering math tutoring to younger students in your neighborhood at $30/hour. You have no customers yet. Your friend says you should build a fancy website and Instagram account first. What should you actually do?`,
              question: `What's the most useful next move?`,
              options: [
                {
                  id: `case-1-opt-a`,
                  label: `Build the website and Instagram account. Design business cards. Set up payment processing. Then start marketing.`,
                  outcome: `This is build-before-validate, the most common founder mistake. You'd spend weeks (or months) on infrastructure before knowing whether anyone in your neighborhood wants math tutoring at $30/hour. If they don't, you've invested significant time in things you'd need to throw away. If they do, you could have started earning while building the infrastructure later. The infrastructure is real but not yet justified.`,
                  isOptimal: false,
                },
                {
                  id: `case-1-opt-b`,
                  label: `Talk to 5-10 families in your neighborhood with younger kids. Ask if they currently use tutoring, what they look for, what they pay, what's hard about it. Then offer to tutor one or two kids at a modest rate to learn what the work actually involves. If it works, gradually raise prices and add infrastructure as needed.`,
                  outcome: `This is customer development applied to a teen tutoring service. The conversations validate (or refute) the assumption that families in your neighborhood want tutoring at all. The first one or two students give you real learning about delivery: how long sessions actually take, what makes a session effective, how parents communicate about progress. The gradual price-raising lets you find the actual market rate rather than guessing. The infrastructure follows the validated business rather than preceding it.`,
                  isOptimal: true,
                },
                {
                  id: `case-1-opt-c`,
                  label: `Take an expensive online course on "How to start a tutoring business" and follow its checklist exactly.`,
                  outcome: `Probably wastes money and time. Most "how to start a [X] business" courses are made by people whose main business is selling courses, not running the actual business they claim to teach about. The specific patterns in your neighborhood matter more than generic course advice. Better to skip the course and do the customer development yourself.`,
                  isOptimal: false,
                },
              ],
              insight: `This case illustrates customer development applied to a teen service business. The intuitive move (build infrastructure first) is exactly the pattern that wastes resources in real entrepreneurship. The customer-development move (talk to real customers, validate the assumption, start small) is what Steve Blank's research recommends and what successful small business founders actually do.`,
            },
            {
              id: `case-2`,
              title: `The Product Idea — Handmade Bracelets`,
              context: `You're 13 and have been making handmade beaded bracelets for fun. Friends and family have said they love them and would buy them. You're thinking of selling them online (Etsy, Instagram, school) at $15 each. Your materials cost about $6 per bracelet and each takes you 45 minutes to make. You're excited about doing this seriously. What should you do first?`,
              question: `What's the most useful first move?`,
              options: [
                {
                  id: `case-2-opt-a`,
                  label: `List 50 bracelets on Etsy, build an Instagram following, and run ads to drive traffic. The volume will eventually produce sales.`,
                  outcome: `This is scaling before validating. You'd spend hours making 50 bracelets without knowing whether strangers (different from friends and family) will pay $15 for them. Friends and family often say they'd buy something without actually buying. Strangers without the personal connection are the real test. You might end up with 50 unsold bracelets and ad spend on a market that doesn't materialize at your prices.`,
                  isOptimal: false,
                },
                {
                  id: `case-2-opt-b`,
                  label: `First, calculate the actual unit economics: $6 materials + 45 minutes of labor; at $15 you're earning $9 per bracelet for 45 minutes of work, or $12/hour. Decide if that's worth your time. If yes, list 5-10 bracelets and see what actually sells to people you don't know. If those sell quickly, list more. If they don't, figure out why before making 50.`,
                  outcome: `This is product-market fit thinking combined with unit economics analysis. The math is honest about what the activity is actually paying ($12/hour for skilled labor is the real number). The small initial batch tests whether strangers (different from friends) actually buy at your prices. Real customer behavior tells you whether to scale or rethink. Either outcome is informative; you haven't sunk hours into a bigger batch that might not sell.`,
                  isOptimal: true,
                },
                {
                  id: `case-2-opt-c`,
                  label: `Lower prices to $5 to make sure things sell, even though that's below your cost. Volume will eventually produce profit.`,
                  outcome: `Unit economics are immediately negative; you're losing money on every sale. Volume can't fix this; it just produces bigger losses faster. The intuition that "growth will fix the math" is one of the most common mistakes in business and is almost always wrong. If your unit economics don't work at small scale, they won't work at large scale either.`,
                  isOptimal: false,
                },
              ],
              insight: `This case illustrates unit economics combined with validated learning. The intuitive move (scale before validating, or sacrifice unit economics for volume) produces predictable failure. The right move starts with honest math (what's the actual hourly rate, including labor?) and small tests (do strangers actually buy at this price?). Both elements protect you from common failure patterns.`,
            },
            {
              id: `case-3`,
              title: `Scaling A Working Small Business — Dog Walking`,
              context: `You're 16. You've been dog walking in your neighborhood for two years. You currently walk 8 dogs across 4 families, earn ~$200/week, and have a waitlist of 5 more families who want your service. You're thinking about scaling: hire two younger neighborhood kids to walk dogs for you, take a cut of their work, and grow toward $500-700/week. What should you actually do?`,
              question: `What's the most useful framing for this decision?`,
              options: [
                {
                  id: `case-3-opt-a`,
                  label: `Hire two kids immediately. Sign up all the waitlist families. Double or triple revenue quickly. Worry about operations later.`,
                  outcome: `This is premature scaling. You haven't yet figured out how to train walkers to your quality standard, how to handle customer service when something goes wrong, how to manage scheduling across more walkers and dogs, or whether your unit economics work when you're paying walkers. If something goes badly (a dog escapes, an injury, a missed walk), your reputation suffers and the existing business gets harmed. Scaling before operations are figured out usually amplifies problems rather than solving them.`,
                  isOptimal: false,
                },
                {
                  id: `case-3-opt-b`,
                  label: `Hire ONE younger neighborhood kid. Train them carefully over a month. Give them a few of your existing customers (with their consent) to test quality and operations at small scale. Track unit economics: what you pay the walker plus your overhead, vs what customers pay; can you actually profit on the trade? Once you've validated that, gradually add the waitlist customers and consider hiring a second person.`,
                  outcome: `This is the validated-scaling approach. Each step tests assumptions before bigger commitments: can you train a walker to your standard? Will existing customers accept walks by trained others? Do the unit economics work when you're paying labor? Each "yes" justifies the next step; a "no" prevents larger failure. The growth is slower but real and durable. Most successful small businesses scale this way; the rare ones that scale faster usually had specific reasons to (clear unit economics, easy training, low operational risk).`,
                  isOptimal: true,
                },
                {
                  id: `case-3-opt-c`,
                  label: `Keep doing it solo. Don't take on more risk. The current $200/week is enough.`,
                  outcome: `This is a defensible choice if you genuinely don't want the operational complexity of managing other workers. Not every business should scale. Many sustainable small businesses stay small intentionally because the founder values simplicity over income. But if you'd like to grow and have the time and energy, this leaves money on the table. The decision should be made deliberately rather than defaulting to "no" out of risk aversion.`,
                  isOptimal: false,
                },
              ],
              insight: `This case illustrates scaling decisions, where the right move usually involves smaller experiments than the founder's ambition wants. The intuitive move (scale fast) is the most common failure pattern at this stage. The right move tests operations and unit economics at small scale before committing to bigger commitments. The slower path usually produces faster eventual scaling because each step builds on validated foundations rather than amplifying problems.`,
            },
          ],
          reflectionPrompt: `All three cases share a pattern: the intuitive move involves doing more, faster, with less validation. The skilled move involves slowing down to learn before scaling. Which case felt most personally relevant?`,
        },

        {
          id: `l16-quiz`,
          type: `quiz`,
          headline: `Check your understanding`,
          questions: [
            {
              id: `q1`,
              type: `multiple-choice`,
              question: `What does real entrepreneurship mostly involve day-to-day?`,
              options: [
                `Big visions and dreams`,
                `Customer obsession, dealing with complaints, managing operations, doing administrative work, marketing on tight budget, slowly figuring out what customers want, tolerating slow progress in early years; the "vision and dream" framing is small part of day-to-day work`,
                `Quick wealth`,
                `Random luck`,
              ],
              correctIndex: 1,
              explanation: `The glamorized framing of entrepreneurship is misleading. Real practice is much less dramatic. Most successful small businesses didn't have a dramatic "aha" moment; they had years of refining their offering and gradually finding customers.`,
            },
            {
              id: `q2`,
              type: `multiple-choice`,
              question: `What are "unit economics" and why do they matter?`,
              options: [
                `Math homework`,
                `Financial math of a single transaction or unit of your business: cost to deliver one unit, what you can charge, what's the margin; matter because a business can't be sustainable if individual transactions lose money no matter how much "growth" you have; most common reason small businesses fail`,
                `Stock market`,
                `Random costs`,
              ],
              correctIndex: 1,
              explanation: `The most common reason small businesses fail isn't lack of customers; it's that unit economics don't work. Each customer costs more to serve than they pay. Learning to think in unit economics is one of the most important business skills available.`,
            },
            {
              id: `q3`,
              type: `multiple-choice`,
              question: `What is "customer development" (Steve Blank)?`,
              options: [
                `Customer service`,
                `Approach developed by Steve Blank in the 1990s: most startup failures aren't about product quality, they're about building something customers don't want; get out of the building, talk to potential customers, validate assumptions before investing significant resources, iterate based on what you learn`,
                `Marketing`,
                `Sales training`,
              ],
              correctIndex: 1,
              explanation: `Blank's approach addresses the most common founder mistake: building elaborate products before validating that customers want them. Most failed startups would have failed less expensively if they'd done customer development first.`,
            },
            {
              id: `q4`,
              type: `multiple-choice`,
              question: `What is a "minimum viable product (MVP)"?`,
              options: [
                `Cheap product`,
                `Smallest version of a product or service that lets you test your riskiest assumptions with real customers; from Eric Ries's Lean Startup; the point isn't to build something incomplete, it's to learn quickly whether your assumptions are correct before investing in full development`,
                `First version`,
                `Prototype`,
              ],
              correctIndex: 1,
              explanation: `Done well, MVPs save founders from building elaborate products nobody wants. Done badly, they become excuses for poor-quality work. The skill is identifying what the actual risk is and testing that, not testing whatever's easiest to test.`,
            },
            {
              id: `q5`,
              type: `multiple-choice`,
              question: `What is "Jobs to Be Done" theory (Christensen)?`,
              options: [
                `Job postings`,
                `Clayton Christensen's framework: customers don't buy products, they "hire" products to do specific jobs in their lives; a milkshake might be "hired" by a commuter as breakfast that's filling, or on weekend as treat to share with child; understanding the actual job your product does is more useful than describing features`,
                `Career advice`,
                `Task management`,
              ],
              correctIndex: 1,
              explanation: `Customers care about the job they need done, not the product itself. Multiple products can do the same job; different jobs can be done by the same product. Understanding the job clarifies what you're really selling and who your real competitors are.`,
            },
            {
              id: `q6`,
              type: `multiple-choice`,
              question: `What is "product-market fit"?`,
              options: [
                `Product testing`,
                `State where your product genuinely solves a real problem for a defined market of customers who value it enough to pay sustainably; signs include strong word-of-mouth, low customer acquisition cost, customers using product organically; scaling before product-market fit usually wastes resources`,
                `Marketing fit`,
                `Random success`,
              ],
              correctIndex: 1,
              explanation: `Before product-market fit, scaling usually wastes resources because the underlying offering isn't working. After product-market fit, scaling becomes different challenge but foundation is sound. Knowing whether you have it is one of the most important judgments in early entrepreneurship.`,
            },
            {
              id: `q7`,
              type: `multiple-choice`,
              question: `Why is most teen entrepreneurship content misleading?`,
              options: [
                `Just bad luck`,
                `Survivor bias (visible successes, invisible failures); confused income claims (revenue vs profit, views vs income); ignoring downside cases; course-and-affiliate revenue model means the "business" is often selling courses to other aspiring teens, not the activity being taught about`,
                `Adults don't like teens`,
                `Random complaints`,
              ],
              correctIndex: 1,
              explanation: `Real income, real net of expenses, real and sustained over time, is rare in this content. The boring path (start small real business, deliver to actual customers, learn from working business literature) produces actual skills. The viral path mostly produces social media performance.`,
            },
            {
              id: `q8`,
              type: `multiple-choice`,
              question: `What is "meta-business" (business about business)?`,
              options: [
                `Big business`,
                `Pattern where someone's main income comes from teaching, coaching, or selling courses about how to make money in some area, rather than from actually doing the activity successfully; common in trading, dropshipping, social media monetization, entrepreneurship content; should be recognized as distinct business model`,
                `Holding company`,
                `Multinational`,
              ],
              correctIndex: 1,
              explanation: `Not always wrong; some real practitioners also teach. But the structure should be recognized. The people best at teaching how to make money in some area often haven't made much money doing the activity themselves; they make it by teaching about the activity.`,
            },
            {
              id: `q9`,
              type: `true-false`,
              question: `True or false: If you do entrepreneurship right with all the frameworks, you'll succeed.`,
              correctAnswer: false,
              explanation: `False. Even good frameworks can't guarantee success. Real entrepreneurship has irreducible uncertainty: you can do everything right and still fail because the market shifted, a competitor entered, or your timing was off. The frameworks improve your odds; they don't eliminate risk. Knowing this protects you from interpreting unlucky outcomes as personal flaws.`,
            },
            {
              id: `q10`,
              type: `inference`,
              question: `Your friend says "I'm going to spend the summer building an app that I just KNOW everyone will love. I've already designed all the screens." Based on this lesson, what's the most useful response?`,
              options: [
                `"Good plan"`,
                `"That's build-before-validate, the most common founder mistake. Before building anything, talk to 10-20 potential users about the problem you're solving. Find out if they actually have the problem, what they currently do about it, and whether they'd pay for a solution. The interviews take days, not months. They'll either validate the assumption (great, now build) or reveal that the problem isn't as you imagined (better to learn now than after building a finished app). Steve Blank, Eric Ries, and decades of startup research point to this same pattern. The 'I just KNOW' confidence usually comes from your own enthusiasm rather than from data; the data is what matters."`,
                `"Don't try"`,
                `"You'll fail"`,
              ],
              correctIndex: 1,
              explanation: `Real applied entrepreneurial literacy. Don't dismiss the friend's idea; identify the specific pattern (build before validate) and recommend the alternative (customer development). This is the kind of advice that can save a friend months of wasted effort.`,
            },
          ],
        },

        {
          id: `l16-reflection`,
          type: `reflection`,
          headline: `Sit with this`,
          intro: `Pick the prompt that pulls at you most. Your answer is saved.`,
          prompts: [
            { id: `reflect-cognitive`, category: `Cognitive`, prompt: `Before this lesson, what did you think entrepreneurship mostly involved? Has anything shifted?` },
            { id: `reflect-meta`, category: `Metacognitive`, prompt: `Be honest: have you absorbed teen-entrepreneurship hype? Which specific claims do you now suspect were misleading?` },
            { id: `reflect-identity`, category: `Identity`, prompt: `If you become someone who understands real business frameworks (customer development, unit economics, jobs to be done), what does that change about your ability to build something useful over a lifetime?` },
            { id: `reflect-application`, category: `Application`, prompt: `Pick one small business idea you'd consider (real one, not fantasy). Apply the frameworks: who are the actual customers, what's the unit economics, what would your MVP be?` },
            { id: `reflect-critical`, category: `Critical`, prompt: `Are there entrepreneurial contexts where these frameworks don't apply? What about creative work, nonprofits, social entrepreneurship? How would the frameworks adapt?` },
            { id: `reflect-personal`, category: `Personal investigation`, prompt: `Find one working small business owner in your community (not famous, just successful). Ask them what they actually do day-to-day. Compare to what teen entrepreneurship content suggests.` },
          ],
        },

        {
          id: `l16-real-world`,
          type: `real-world`,
          headline: `Take it into your life`,
          guideContext: `Real business skills compound across a lifetime. Two paths.`,
          familyActivity: {
            title: `The Family Business Conversation`,
            duration: `40 minutes`,
            description: `Share what you learned. Then ask adults to share their experience with business: working for one, owning one, considering starting one. Apply the frameworks: did they see customer development done well or poorly? Were unit economics tracked? What did they learn? Most adults have meaningful business experience they can share at this depth. The conversation often surfaces real lessons that compound for your own future decisions.`,
          },
          projectOption: {
            title: `Start A Real Small Business (and learn from it), 8 weeks (optional)`,
            duration: `8 weeks, varying time per week`,
            description: `Pick something small and real (tutoring, lawn care, dog walking, craft sales, basic services). Apply the frameworks: customer development first (talk to 5-10 potential customers before building anything), then a small MVP, then track unit economics carefully, then decide whether to scale based on validated learning. Write 2,500 words at the end on what worked, what failed, and what you learned. Real applied entrepreneurship at a level most adults haven't done.`,
            offerToParent: `Parent: opt your kid into this project. Starting a small real business with proper frameworks at 12-13 is one of the highest-leverage learning experiences available.`,
          },
          identityQuestion: `If you become someone who understands real business mechanics (customer development, unit economics, product-market fit, jobs to be done), how does that change what you can build over a lifetime?`,
        },

        {
          id: `l16-identity-hook`,
          type: `identity-hook`,
          headline: `Who is this lesson making you?`,
          prompt: `One sentence. No wrong answer.`,
          placeholder: `Someone who...`,
          examples: [
            `Someone who validates before building.`,
            `A person who tracks unit economics honestly.`,
            `Someone who can spot teen entrepreneurship hype for what it is.`,
          ],
          saveKey: `identity_responses_fs_11_12_16`,
        },

        {
          id: `l16-celebration`,
          type: `celebration`,
          guideText: `{name}. Sixteenth Future Skills lesson done. You now know what entrepreneurship actually involves (customer service, unit economics, slow accumulation, not fast wealth), the real frameworks (Steve Blank's customer development, Eric Ries's Lean Startup, Clayton Christensen's Jobs to Be Done), the common failure patterns, and how to spot misleading teen entrepreneurship content. You can think about businesses at the level of working founders rather than viral creators. Most adults never learn this explicitly. Next time we go into another important meta-skill for the AI era: ethics and responsibility in tech. Three real positions on how to think about the moral side of technology. Argument Builder format. Let's go. — Byte`,
          badge: `business-thinker`,
          badgeName: `Business Thinker`,
          xpEarned: 75,
          competencies: [
            `Articulates what real entrepreneurship involves vs glamorized framings`,
            `Knows major frameworks: customer development (Blank), Lean Startup (Ries), Jobs to Be Done (Christensen)`,
            `Understands unit economics, product-market fit, MVP as concepts`,
            `Recognizes common failure patterns and how to avoid them`,
            `Spots misleading teen entrepreneurship content (survivor bias, meta-business, confused income)`,
          ],
          nextLessonPreview: {
            title: `Lesson 17: Ethics & Responsibility in Tech`,
            hook: `Three positions on the moral side of technology. Argument Builder.`,
          },
        },
      ],
    },
  ],
};

export default FUTURESKILLS_VOYAGER_L16;

if (import.meta.env?.DEV) {
  const l = FUTURESKILLS_VOYAGER_L16.lessons[0];
  const mags = l.screens.filter((s) => s.type === `magazine`).length;
  const caseStudy = l.screens.find((s) => s.type === `case-study`);
  const quiz = l.screens.find((s) => s.type === `quiz`)?.questions?.length ?? 0;
  const reflect = l.screens.find((s) => s.type === `reflection`)?.prompts?.length ?? 0;
  console.log(
    `[LESSON-FS-VOYAGER-L16 ${VERSION}] "${l.title}" — ${mags} magazine, case-study w/ ${caseStudy?.cases?.length ?? 0} cases, ${quiz} quiz, ${reflect} reflection`
  );
}
