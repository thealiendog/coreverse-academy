// ─────────────────────────────────────────────────────────────────────────────
// MONEY & BUSINESS VOYAGER  |  L14 — Starting Something That Actually Sells
// Age band : voyagers (11-12)   Guide: ace (Eagle)
// Standards: Coreverse Original — Entrepreneurship, Small Business Economics
// CALIBRATED: Voyager spec v1.1 (May 2026)
// Interaction format: CASE STUDY (three real teen business ideas, real numbers)
// ─────────────────────────────────────────────────────────────────────────────

const VERSION = "voyager-mb-l14-v1";

const MONEYBUSINESS_VOYAGER_L14 = {
  ageBand: `voyagers`,
  subjectId: `money-business`,
  guide: `ace`,

  lessons: [
    {
      id: `mb-11-12-14`,
      title: `Starting Something That Actually Sells`,
      duration: 35,
      xpReward: 75,
      badge: `practical-founder`,
      badgeName: `Practical Founder`,

      screens: [
        {
          id: `l14-welcome`,
          type: `welcome`,
          guideText: `{name}, last lesson we covered why most get-rich-quick schemes don't work. Today we cover what does: starting something real, even if small. The world's most successful businesses almost all started small. Apple in a garage. Amazon as an online bookstore. Mrs. Fields cookies as one shop. Even local businesses you know started as someone's idea backed by real work. At your age, starting something doesn't mean building the next Apple. It means trying to make something people actually want to pay for, learning what works and what doesn't, and building skills you'll use the rest of your life. Today we walk through three real teen business ideas with real cost and revenue numbers. By the end you'll have a framework for evaluating any business idea, including your own.`,
          headline: `Starting Something That Actually Sells`,
          subtitle: `Real teen ideas. Real numbers. Real trade-offs.`,
          visual: `/voyager-assets/money-business/l14-welcome.webp`,
        },

        {
          id: `l14-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `What Makes A Business Actually Work`,
          paragraphs: [
            `A business works when someone is willing to pay you more for something than it costs you to provide it. That's the entire test. The "something" can be a product, a service, an experience, a piece of information, anything. The "willingness to pay" has to be real, not theoretical. People saying they'd buy your thing isn't the same as buying it. Many business ideas fail at this simple test: people say they'd buy, but when actually offered the product at actual price, they don't.`,
            `Three things separate businesses that work from ideas that don't. First: real demand. Someone has a problem they're willing to pay to solve, OR they want something pleasurable they're willing to pay for. Lawn mowing solves a problem. Selling handmade jewelry serves a want. Both can work. Vague "people would like this" thinking isn't demand. Specific identified customers willing to pay specific prices is demand.`,
            `Second: viable economics. The math has to work. Revenue per sale minus all costs (materials, time, taxes, fees, overhead) has to leave enough profit to make the work worthwhile. Many teen business ideas have terrible economics: $5 in materials and 2 hours of work for $8 of revenue is a 25-cents-per-hour business, worse than babysitting. Doing the actual math before starting saves a lot of wasted effort.`,
            `Third: reach. You can have great products and good economics and still fail if you can't find customers. A great lawn mowing service that only your immediate family knows about doesn't help you. Real businesses figure out how to consistently find people who'll pay. For teens, this often means neighborhood networking, school connections, social media, parent networks, or established marketplaces (Etsy, eBay).`,
          ],
          image: `/voyager-assets/money-business/l14-s1-works.webp`,
          imageCaption: `Real demand, viable economics, reachable customers. All three matter.`,
          vocab: [
            {
              word: `product-market fit`,
              definition: `When a product actually matches what real customers want and will pay for. Most failed businesses fail at this. Hardest part of starting a business is often validating that real demand exists.`,
              audioPrompt: `Product-market fit is when a product actually matches what real customers want and will pay for, {name}. Most failed businesses fail at this. They build something they think people will want, only to discover after building that demand was theoretical, not real. Hardest part of starting a business is often validating that real demand exists before investing significant time and money. The fastest way: try to sell the thing before fully building it. Get 5 actual customer commitments before you've spent more than 10 hours and 50 dollars. If you can't get 5 commitments, your assumed demand probably isn't real. This pre-validation saves enormous wasted effort.`,
            },
            {
              word: `real demand`,
              definition: `Actual willingness by specific identified customers to pay specific prices — not theoretical interest. "People would like this" is not real demand. "These five people will pay $30 each" is real demand.`,
              audioPrompt: `Real demand is actual willingness by specific identified customers to pay specific prices, {name}. It's different from theoretical interest. Someone saying they'd buy your product is not demand. Someone handing you money for your product is demand. Many business ideas fail because the founder assumed interest meant willingness to pay, and discovered after building that customers weren't actually ready to open their wallets. The test of real demand is simple: try to make actual sales before investing significant time and money. If five people pay you before you've built much, demand is real. If nobody pays even when directly offered, the assumed demand probably was never there.`,
            },
            {
              word: `customer acquisition`,
              definition: `The process of consistently finding people who will pay for your product or service. A great product with poor customer acquisition fails. For teens, this includes neighborhood networking, parent networks, social media, and online marketplaces.`,
              audioPrompt: `Customer acquisition is the process of consistently finding people who will pay for your product or service, {name}. A great product with poor customer acquisition still fails: if nobody knows it exists, nobody buys it. Many teen businesses die because the founder tries once with friends and family, doesn't expand beyond that network, and revenue dries up. For teens, effective customer acquisition often means neighborhood networking, school and parent connections, social media presence, or established marketplaces like Etsy or eBay. Customer acquisition is a skill that must be learned separately from the skill of making the product or delivering the service. Both matter.`,
            },
          ],
        },

        {
          id: `l14-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `The Real Math: Revenue, Cost, Time`,
          paragraphs: [
            `Every business idea has three numbers worth calculating before you start. Revenue per sale: what does the customer actually pay you? Cost per sale: materials, packaging, fees, anything that varies with each sale. Time per sale: how long does each sale take from start to delivery? These three numbers determine whether a business is worth doing.`,
            `Example: handmade candles you sell at a craft fair. Revenue per candle: $15. Cost per candle: $4 (wax, wick, jar, scent). Time per candle: 1 hour (melting, pouring, cooling, labeling). Plus craft fair table fee divided across candles sold ($50 fee, 10 candles sold = $5 per candle). Profit per candle: $15 - $4 - $5 = $6. Hourly rate from candle-making time: $6 per hour. Below babysitting rates. Probably not the best teen business unless you love the craft.`,
            `Same exercise with lawn mowing. Revenue per lawn: $30. Cost per lawn: $1 (gas, oil for the mower). Time per lawn: 45 minutes. Profit per lawn: $29. Hourly rate: $39 per hour. Far better economics than the candles. The actual mowing work is harder than candle-making, but the economics are dramatically different.`,
            `Same exercise with tutoring younger kids in math. Revenue per hour: $25. Cost per hour: near zero (your time and maybe printed worksheets). Time per hour of tutoring: 1 hour plus some prep. Profit per hour: $25, maybe $20 once you account for prep. Hourly rate close to revenue rate. Very efficient economics if you can find consistent clients.`,
          ],
          image: `/voyager-assets/money-business/l14-s2-math.webp`,
          imageCaption: `Revenue minus cost divided by time. The math reveals which ideas actually work.`,
          vocab: [
            {
              word: `unit economics`,
              definition: `The revenue, costs, and profit calculated per unit sold (per sale, per customer, per project). The fundamental health check of any business idea. If unit economics don't work, the business can't work at scale.`,
              audioPrompt: `Unit economics is the revenue, costs, and profit calculated per unit sold, {name}. Per sale, per customer, per project. The fundamental health check of any business idea. If you can't make a profit on each individual sale after accounting for all costs, no amount of volume or scale will save the business. Many teens skip this analysis and discover after weeks of work that their idea was never going to pay enough per hour to be worth doing. Spending 30 minutes calculating unit economics before starting saves dozens of hours of wasted effort. Always do the math first.`,
            },
            {
              word: `profit per sale`,
              definition: `Revenue from one sale minus all direct costs for that sale. The core of unit economics. Lawn mowing: $30 revenue minus $1 cost equals $29 profit per lawn. Must also account for time to get a true hourly rate.`,
              audioPrompt: `Profit per sale is revenue from one sale minus all direct costs for that sale, {name}. It is the core calculation in unit economics. For lawn mowing at $30 per lawn with $1 in materials, profit per sale is $29. If each lawn takes 45 minutes, the hourly rate is about $39. For handmade candles at $15 each with $4 in materials plus $5 in table fees, profit per candle is $6. At one hour per candle, that's a $6 hourly rate below babysitting. The comparison makes the decision obvious. Always calculate profit per sale and time per sale before deciding whether a business is worth pursuing. The math tells you what enthusiasm can't.`,
            },
            {
              word: `overhead`,
              definition: `Business costs that don't vary with individual sales, like a craft fair table fee, website costs, or equipment. Must be divided across sales when calculating unit economics. Easy to miss when estimating profit.`,
              audioPrompt: `Overhead refers to business costs that don't vary with individual sales, {name}. A craft fair table fee is overhead: you pay $50 whether you sell 5 candles or 50. When calculating unit economics, overhead must be divided across the expected number of sales. Sell 10 candles and the $50 table fee adds $5 to each candle's cost. Sell 50 candles and it adds $1. Many first-time entrepreneurs miss overhead when estimating profit, which leads to surprises when actual profits come in lower than expected. List all overhead costs before launching. Divide them by realistic sales volume. Include them in your unit economics calculation.`,
            },
          ],
        },

        {
          id: `l14-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Pricing: One Of The Most Important Decisions`,
          paragraphs: [
            `Most teen businesses underprice. They assume that lower prices will mean more customers, so they undercut adult competitors. This is usually a mistake. Customers paying $10 for a service from a teen and $30 for the same service from an adult often aren't comparing the two; they're comparing "should I get this done at all." The teen at $10 captures 1/3 the revenue and faces the same customer-acquisition costs.`,
            `Better strategy: research what adult competitors charge in your area for similar services. Charge 70-80% of that. Customers still get a perceived deal. You earn enough to make the business worthwhile. You build the skill of charging real money for real work. Underpricing teaches the wrong lesson (that your work isn't worth what it actually is).`,
            `Specific examples. Babysitting in most US areas: $15-25/hour depending on location and experience. Lawn mowing: $30-60 per lawn depending on size. Tutoring elementary kids: $20-30/hour. Pet sitting: $20-40 per visit. Dog walking: $15-25 per walk. These are realistic teen rates in most US areas as of 2026. Higher in coastal cities. Lower in some rural areas. Always research your local market before pricing.`,
            `What teens often charge instead: $5/hour for babysitting, $10 for any lawn, $10/hour for tutoring. This is significantly below market rates. The teen earns 1/3 of what they could. The customer would pay more. Everyone except the teen is fine with higher pricing. The teen has to overcome the psychological barrier of asking for what their time is actually worth.`,
          ],
          image: `/voyager-assets/money-business/l14-s3-pricing.webp`,
          imageCaption: `Most teen businesses underprice. Research adult rates. Charge 70-80%.`,
          vocab: [
            {
              word: `market rate`,
              definition: `What customers in a given area typically pay for a given product or service. Researching market rate before pricing is fundamental. Most underpricing comes from skipping this research.`,
              audioPrompt: `Market rate is what customers in a given area typically pay for a given product or service, {name}. Researching market rate before pricing is fundamental. Most underpricing comes from skipping this research. You can find market rates by checking competitor prices, asking adults what they pay for similar services, looking at online marketplaces, or simply calling competitors and asking their prices. Once you know market rate, you can position yourself: at market rate if you're as good as competitors, slightly below if you want fast growth, slightly above if your quality is genuinely better. The mistake is pricing without research, which almost always results in underpricing.`,
            },
            {
              word: `underpricing`,
              definition: `Charging less than what customers would actually pay. The most common teen business mistake. Charging $5/hour for babysitting when market rate is $20 captures 1/4 the revenue for the same work.`,
              audioPrompt: `Underpricing is charging less than what customers would actually pay, {name}. It is the most common teen business mistake. Most teens assume lower prices will attract more customers, but customers aren't typically comparing teen prices to adult prices. They're deciding whether to hire someone at all. A teen charging $10 for any lawn and an adult charging $35 aren't competing for the same decision; the teen is leaving $25 per lawn behind. The research suggests teens routinely charge 30 to 50% of what the market would bear. Charging 70 to 80% of adult market rate is both fair to the customer and economically worthwhile for the teen. Pricing below that is usually an expensive psychological mistake.`,
            },
            {
              word: `perceived deal`,
              definition: `When a customer feels they are getting a good value relative to alternatives. A teen charging 70-80% of adult market rate creates a perceived deal — customers feel good about paying — without sacrificing economic viability.`,
              audioPrompt: `A perceived deal is when a customer feels they are getting good value relative to alternatives, {name}. For teen businesses, this is a useful concept. A teen charging 70 to 80% of what an adult competitor charges creates a perceived deal: the customer feels like they're saving money while still getting the service done. This is different from underpricing at 30 to 50% of market rate, which captures far less revenue without necessarily attracting proportionally more customers. Customers will not typically pay you more just because you charged less before. Getting the pricing right from the start means charging enough to make the work worthwhile while still giving customers a reason to choose you over adult competitors.`,
            },
          ],
        },

        {
          id: `l14-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Why Most Teen Businesses Fail`,
          paragraphs: [
            `Most teen businesses fail for predictable reasons. Inadequate validation: they build first, ask customers later, discover demand isn't real. Underpricing: even with real demand, they capture too little per sale to make the business worthwhile. Inconsistent execution: customers want reliability, and teens often deliver inconsistently due to school, social activities, or simply forgetting commitments.`,
            `Failure to find customers: even great products and services need someone to know they exist. Many teen businesses die because the teen tries once with friends and family, doesn't expand beyond that network, and revenue dries up. Burnout: starting a business while also being a student is hard. Many teens overcommit, get tired, and quit. Sustainable pace matters more than initial enthusiasm.`,
            `Scope creep: trying to do too many things at once. A teen who tries to simultaneously sell candles, walk dogs, tutor math, and do social media work for local businesses usually does all four poorly. Focused effort on one or two things consistently beats spread-out effort across many things.`,
            `Getting discouraged by early failures: most adult entrepreneurs report multiple failed ventures before finding one that worked. Teens often interpret a first failure as proof they can't run a business. The mature view: each failure teaches something, and the second or third attempt benefits from those lessons. Persistence matters more than initial talent in most business success.`,
          ],
          image: `/voyager-assets/money-business/l14-s4-fail.webp`,
          imageCaption: `Predictable failure patterns. Recognize them, avoid them.`,
          vocab: [
            {
              word: `iteration`,
              definition: `Repeated cycles of trying, learning what works and what doesn't, and adjusting. Most successful businesses iterate many times before finding what works. Real entrepreneurial skill is more about iteration than initial brilliance.`,
              audioPrompt: `Iteration is repeated cycles of trying, learning what works and what doesn't, and adjusting, {name}. Most successful businesses iterate many times before finding what works. Real entrepreneurial skill is more about iteration than initial brilliance. The first version of almost everything is rough. The second version is better. The tenth version is good. Companies that iterate quickly and learn from each version outperform companies that try to get everything right the first time. For a teen starting any business, the right mindset is: launch a rough version quickly, learn from real customer feedback, improve, and continue. Patience plus iteration beats perfectionism every time.`,
            },
            {
              word: `scope creep`,
              definition: `Gradually expanding the work you're trying to do beyond the original plan. A major cause of teen business failure: trying to do too many things at once results in doing all of them poorly.`,
              audioPrompt: `Scope creep is gradually expanding the work you're trying to do beyond the original plan, {name}. It is a major cause of teen business failure. A teen who starts a lawn mowing service, then adds pet sitting, then starts selling candles, then offers social media help for local businesses ends up doing all four poorly. Each new area requires learning, focus, and customer acquisition work that divides attention from the original service. Successful small businesses almost always focus on one or two things and do them consistently well. Scope creep feels like growth but usually produces worse outcomes for everything involved. Adding scope should come after mastering the core offering, not before.`,
            },
            {
              word: `validation`,
              definition: `Confirming that real demand exists before investing significant time and money into building a business. Validation means getting actual commitments or sales from real customers, not just guessing they would pay.`,
              audioPrompt: `Validation is confirming that real demand exists before investing significant time and money into building a business, {name}. It means getting actual commitments or sales from real customers. The cheapest validation is walking up to potential customers and seeing if any will pay you before you've built much. If you can't find one person willing to commit to paying, the idea probably has a demand problem. Many teen business failures happen because entrepreneurs skipped validation: they built or bought inventory, created marketing, and then discovered nobody wanted to pay the price. Spending a few hours on validation before spending serious time or money is one of the highest-return activities in any new business.`,
            },
          ],
        },

        {
          id: `l14-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Before You Walk Through The Ideas`,
          paragraphs: [
            `In the case study that follows, three teens each evaluate a different business idea. Each idea has been pitched to them; each requires real decisions about whether to start, what to charge, how to find customers, and how to manage time. The decisions you'll walk through them are the same decisions any real entrepreneur makes.`,
            `Watch for the patterns from the lesson. Validation: how do they know real demand exists before investing significant time? Unit economics: what's the actual math per sale? Pricing: are they researching market rate or underpricing by default? Customer acquisition: how do they actually find buyers? Time management: how does the business fit into the rest of their life?`,
            `One framing as you walk through: every successful entrepreneur was once a beginner. They made all the mistakes you might make. The difference between teens who eventually build something real and teens who quit isn't talent, it's willingness to try, learn, adjust, and try again. Iteration is the real skill. Today's three case studies give you practice on the first try.`,
          ],
          image: `/voyager-assets/money-business/l14-s5-before.webp`,
          imageCaption: `Three ideas, three sets of decisions. Same patterns apply to your real life.`,
          vocab: [
            {
              word: `minimum viable product`,
              definition: `MVP. The simplest version of a product you can deliver that real customers might pay for. Launch the MVP fast, learn from real customers, then improve. Better than spending months perfecting before launching.`,
              audioPrompt: `Minimum viable product, called MVP, is the simplest version of a product you can deliver that real customers might pay for, {name}. The principle: launch the MVP fast, learn from real customers, then improve. This beats spending months perfecting before launching. Why? Because real customer behavior is the only reliable signal of whether your idea works. Theoretical perfection in a basement with no customers reveals nothing. Five paying customers who give you feedback on a rough first version teach you more than 100 hours of refinement before launch. The fastest learners in business launch MVPs early and iterate from there.`,
            },
            {
              word: `niche`,
              definition: `A specific, well-defined segment of customers with a particular need. Specializing in a niche (K-pop phone cases, Algebra 1 tutoring) beats trying to serve everyone. Specificity beats generality in both marketing and execution.`,
              audioPrompt: `A niche is a specific, well-defined segment of customers with a particular need, {name}. Specializing in a niche beats trying to serve everyone. A tutor who says "Algebra 1 for 8th graders, I just got an A myself" converts more clients than one saying "any grade math help." A phone case seller who serves the K-pop fan community stands out more than one offering generic designs. Niches work because customers searching for help want someone who matches their specific situation, not a generalist. They also work because you can build a reputation within a niche faster than across a broad market. Most successful Etsy sellers and teen service businesses operate in specific niches.`,
            },
            {
              word: `sustainable pace`,
              definition: `A work rate that can be maintained over time without leading to burnout. Many teen businesses fail because initial enthusiasm leads to overcommitment, which leads to quitting. Consistent moderate effort beats unsustainable bursts.`,
              audioPrompt: `Sustainable pace is a work rate that can be maintained over time without leading to burnout, {name}. Starting a business while also being a full-time student is hard. Many teens overcommit during the enthusiasm of launch, get tired or overwhelmed, and quit. A business that earns $50 per week consistently for two years produces more total income and more learning than a business that earns $200 in its first week and then dies. Before committing to a new business, estimate the realistic weekly time it requires. Add that to school, activities, and family obligations. Be honest about whether the pace is sustainable. A smaller, sustainable commitment beats a larger unsustainable one almost every time.`,
            },
          ],
        },

        // ───── CASE STUDY ─────────────────────────────────────────────────────
        {
          id: `l14-case-study`,
          type: `case-study`,
          headline: `Three Teen Business Ideas: Walk Through The Real Decisions`,
          intro: `Three 14-year-olds each have a business idea. Walk through their key decisions with them. The math is real. The decisions matter.`,
          scenario: `Jordan wants to start a dog walking service. Casey wants to sell custom phone cases on Etsy. Morgan wants to tutor middle schoolers in math. Each idea has potential. The decisions in the next few weeks determine whether each becomes a real, sustainable business or a brief experiment that fizzles out.`,
          decisions: [
            {
              id: `decision-1`,
              prompt: `Jordan: dog walking service. Lives in a suburban neighborhood with 200+ households. What's the first move?`,
              options: [
                {
                  id: `jordan-build`,
                  label: `Spends $200 on professional flyers, a custom logo, and an Instagram account before talking to any potential customers.`,
                  consequence: `Built before validating. After three weeks of marketing, Jordan has 1 client who heard about the service from a parent. Spent $200, earned $60. Frustrated. The problem: the professional brand didn't generate trust faster than the basic alternative (just talking to neighbors), and Jordan didn't validate demand before investing. Classic build-first mistake. The $200 represented hours of yard work that earned nothing.`,
                },
                {
                  id: `jordan-validate`,
                  label: `Walks the neighborhood, talks to 30 households with dogs, mentions the service casually. Tracks who's interested.`,
                  consequence: `Discovers 8 households are seriously interested, 4 would pay for regular walks. Pricing research: neighbors are paying $20-25 per 30-minute walk to existing services. Now Jordan knows: real demand exists, market rate is clear, has a list of potential customers before launch. Spent $0. Has 4 likely first customers when ready to start. This is what validation looks like. Boring but effective.`,
                },
                {
                  id: `jordan-cheap-test`,
                  label: `Offers a free first walk to 5 neighbors with dogs. Tracks which dogs are good, which neighbors are reliable, and gets word-of-mouth referrals.`,
                  consequence: `Smart variation on validation. Gets 5 trial clients. 3 sign up for regular paid walks ($20/walk). 2 don't. The 3 who do refer 2 more neighbors. Within 6 weeks Jordan has 5 regular weekly clients at $20 each, $400/month consistent revenue. Free trials cost about 4 hours of Jordan's time but generated all this. Sometimes giving something away briefly is the fastest path to paying customers.`,
                },
              ],
            },
            {
              id: `decision-2`,
              prompt: `Casey: custom phone cases sold on Etsy. Loves digital design. Has access to a 3D printer at school. What approach?`,
              options: [
                {
                  id: `casey-volume`,
                  label: `Designs 30 different case designs upfront. Lists all 30 on Etsy. Waits to see which sell.`,
                  consequence: `After 2 months: 4 designs have sold 1-2 copies each. 26 designs have sold zero. Casey spent 30 hours designing and printing initial inventory. Revenue: $80. Most of the inventory is dead weight. The problem: spread effort too widely without learning what customers actually want. A better approach: design 3-5 things, sell what works, design more like the winners.`,
                },
                {
                  id: `casey-niche`,
                  label: `Picks one specific niche (case designs for K-pop fandom, or anime characters, or specific colleges). Designs 5 cases for that niche. Markets to that specific community.`,
                  consequence: `Within 6 weeks: established as a known seller in that small community. Selling 8-12 cases per week at $15 each = $120-180/week revenue. Cost per case: $4 in materials and shipping. Profit per case: $11. Weekly profit: $90-130. The niche specialization let Casey beat broader competitors and build community. Most successful Etsy sellers operate in specific niches like this.`,
                },
                {
                  id: `casey-pricing`,
                  label: `Underprices at $7 per case (below all competitors). Plans to make it up on volume.`,
                  consequence: `Sells more cases (40 in first month) but at $7 each with $4 in materials and shipping, profit per case is $3. Casey earns $120 for 40 hours of work. $3/hour, below babysitting rates. The "make it up on volume" strategy mathematically can't work when margins are thin. Many beginner sellers fall into this trap. Pricing competitively is fine; pricing at break-even is bad business.`,
                },
              ],
            },
            {
              id: `decision-3`,
              prompt: `Morgan: tutoring middle schoolers in math. Strong math skills, lives in a town with active parent networks. What's the launch plan?`,
              options: [
                {
                  id: `morgan-broad`,
                  label: `Posts on Nextdoor and Facebook neighborhood groups offering "$15/hour math tutoring for any grade."`,
                  consequence: `Gets 4 inquiries in two weeks. None convert to actual clients because the message is too generic. Parents searching for a tutor want someone who specializes in their kid's specific need (multiplication tables, algebra, geometry, specific test prep), not generic math help. The "any grade" framing actually hurts: it suggests Morgan doesn't know any grade deeply.`,
                },
                {
                  id: `morgan-specific`,
                  label: `Posts specifically: "Algebra 1 tutoring for 8th graders. $25/hour. I just took Algebra 1 myself and got an A, so I remember exactly what the hard parts are. References available." Posts in school parent groups.`,
                  consequence: `Gets 8 inquiries in two weeks. 5 convert to weekly tutoring sessions. Morgan now has consistent $125/week revenue from 5 hours of work. The specific framing matters: parents trust someone who recently mastered the exact thing their kid is struggling with. Higher price than the generic version, more clients because the message resonates with the specific need. Specificity beats generality almost every time.`,
                },
                {
                  id: `morgan-free`,
                  label: `Offers free tutoring sessions to build "experience and reputation." Plans to start charging "once I have proven results."`,
                  consequence: `Gets many free students. After three months of free work, finds that announcing prices loses 80% of the free students. The free students were free because they wouldn't pay; the assumption that they would convert was wrong. Better approach: charge from day one, even if the rate is lower for the first few clients. People who pay you take you seriously; people who don't pay you treat your time as low-value.`,
                },
              ],
            },
            {
              id: `decision-4`,
              prompt: `All three teens have launched. Now they each face the question of how big to grow. What's the right next step?`,
              options: [
                {
                  id: `growth-add-everything`,
                  label: `Each adds more services (Jordan adds pet sitting, Casey adds stickers and pins, Morgan adds science tutoring) to maximize revenue.`,
                  consequence: `Spreading too quickly leads to inconsistent quality. Customers liked the original specialized service. Adding new services dilutes attention. Within 3 months, Jordan's dog walking clients are noticing inconsistent timing because Jordan is now juggling pet sitting too. Casey's case quality drops because divided attention. Morgan's tutoring scheduling becomes chaotic. The "grow by adding" approach often kills good businesses.`,
                },
                {
                  id: `growth-deepen`,
                  label: `Each goes deeper in their original service: Jordan raises rates and adds premium services for existing clients. Casey introduces a higher-end product line in the same niche. Morgan adds an advanced math tier.`,
                  consequence: `Better growth model. Jordan's existing clients accept the rate increase (you're already trusted; switching is annoying). Casey's higher-end products serve the same community that already trusts the brand. Morgan's advanced tier serves students who outgrew the basic level. Revenue grows without quality dropping. Each business becomes more profitable while remaining manageable. This is how most sustainable small businesses actually grow.`,
                },
                {
                  id: `growth-replicate`,
                  label: `Each tries to teach a younger sibling or friend to copy their model and share revenue.`,
                  consequence: `Mixed results. Jordan teaches a younger sibling to dog walk, they take some of Jordan's clients with significant supervision. Now Jordan earns slightly less per walk but can serve more clients without working more. Casey can't easily teach someone else to make their custom designs. Morgan finds tutoring is too specific to delegate. Some businesses scale via people; some don't. Knowing which type your business is matters.`,
                },
              ],
            },
          ],
          debrief: [
            `Pattern across all three: validate before building. Each best path involved confirming real demand before investing significant resources.`,
            `Pricing matters enormously. Casey's $7 pricing destroys the business; $15 in a niche works. Morgan's $15 generic doesn't convert; $25 specific does. Underpricing is almost always wrong.`,
            `Specificity beats generality. The teens who succeeded narrowed their focus. The teens who tried to be everything to everyone struggled.`,
            `Growth strategy matters as much as initial success. Deepening typically beats spreading. Going premium with existing clients usually works better than expanding to new services.`,
            `For your real life: if you have any business idea right now, work through these decisions before launching. What does validation look like? What's the real math? What's your specific niche? Who's your first customer going to be? Most teens skip these questions and learn the hard way. You don't have to.`,
          ],
        },

        {
          id: `l14-quiz`,
          type: `quiz`,
          headline: `Check your understanding`,
          questions: [
            {
              id: `q1`,
              type: `multiple-choice`,
              question: `What three things separate businesses that work from ideas that don't?`,
              options: [
                `Money, fame, luck`,
                `Real demand, viable unit economics, reachable customers`,
                `Marketing, more marketing, even more marketing`,
                `Connections, capital, computers`,
              ],
              correctIndex: 1,
              explanation: `Each of the three is necessary. You can have great demand but terrible economics. You can have great economics but no way to find customers. Real businesses meet all three tests.`,
            },
            {
              id: `q2`,
              type: `multiple-choice`,
              question: `What is "product-market fit"?`,
              options: [
                `When products fit on shelves`,
                `When a product actually matches what real customers want and will pay for; most failed businesses fail at this`,
                `Marketing budget`,
                `Inventory management`,
              ],
              correctIndex: 1,
              explanation: `Product-market fit is the hardest test. Many ideas seem like they should work but don't because demand is theoretical, not real. Validation before building reveals this.`,
            },
            {
              id: `q3`,
              type: `multiple-choice`,
              question: `What is "unit economics"?`,
              options: [
                `Unit pricing at stores`,
                `Revenue, costs, and profit calculated per unit sold; the fundamental health check of any business idea`,
                `Economics class for one`,
                `Currency conversion`,
              ],
              correctIndex: 1,
              explanation: `Always do this math before starting. A business with bad unit economics can't be saved by volume. A business with good unit economics can grow profitably.`,
            },
            {
              id: `q4`,
              type: `multiple-choice`,
              question: `What's the typical teen pricing mistake?`,
              options: [
                `Charging too much`,
                `Underpricing significantly below market rate; assuming lower prices mean more customers when often customers compare "should I do this at all" not "this teen vs an adult"`,
                `Free trials forever`,
                `Bulk discounts`,
              ],
              correctIndex: 1,
              explanation: `Most teen businesses underprice. The right approach: research market rate, charge 70-80% of it. The teen captures meaningful revenue. The customer still gets a perceived deal.`,
            },
            {
              id: `q5`,
              type: `multiple-choice`,
              question: `What is an MVP (minimum viable product)?`,
              options: [
                `Most valuable player`,
                `The simplest version of a product you can deliver that real customers might pay for; launch fast, learn from customers, then improve`,
                `Maximum value price`,
                `Marketing video plan`,
              ],
              correctIndex: 1,
              explanation: `Launching an MVP early beats spending months perfecting before launching. Real customer behavior is the only reliable signal of whether an idea works. Five paying customers teach you more than 100 hours of refinement before launch.`,
            },
            {
              id: `q6`,
              type: `multiple-choice`,
              question: `What is iteration in business?`,
              options: [
                `Repeating the same mistakes`,
                `Repeated cycles of trying, learning what works and what doesn't, and adjusting; most successful businesses iterate many times before finding what works`,
                `Software updates`,
                `Annual reports`,
              ],
              correctIndex: 1,
              explanation: `Real entrepreneurial skill is more about iteration than initial brilliance. The first version of almost everything is rough. The tenth version is good. Companies that iterate quickly outperform companies that try to perfect things in isolation.`,
            },
            {
              id: `q7`,
              type: `multiple-choice`,
              question: `Why do most teen businesses fail?`,
              options: [
                `Bad luck`,
                `Predictable reasons: inadequate validation, underpricing, inconsistent execution, failure to find customers, burnout, scope creep, getting discouraged early`,
                `Lack of capital`,
                `Government regulation`,
              ],
              correctIndex: 1,
              explanation: `Most failures are pattern failures, not luck. Recognizing the patterns before starting helps you avoid them. Most successful entrepreneurs report multiple failed ventures before finding one that worked.`,
            },
            {
              id: `q8`,
              type: `multiple-choice`,
              question: `Why is "specificity beats generality" in marketing?`,
              options: [
                `Specific is always better`,
                `Customers searching for help want someone who specializes in their specific need (the algebra tutor who just took Algebra 1) more than a generic version ("any grade math help")`,
                `Generality is illegal`,
                `Specificity costs more`,
              ],
              correctIndex: 1,
              explanation: `Real marketing pattern. The specific message ("Algebra 1 tutor who just got an A") signals competence and relevance. The generic message ("any grade math help") signals neither. Specificity converts inquiries to clients.`,
            },
            {
              id: `q9`,
              type: `true-false`,
              question: `True or false: Going deeper with existing customers (premium services, higher tiers) usually beats spreading thin into new services.`,
              correctAnswer: true,
              explanation: `True. This is one of the most reliable patterns in small business growth. Adding services dilutes attention and often kills quality on the core offering. Deepening leverages existing trust and capabilities.`,
            },
            {
              id: `q10`,
              type: `inference`,
              question: `Your friend says "I'm going to start a side hustle by doing everything I can think of: dog walking, tutoring, selling stickers, mowing lawns, and managing Instagram for local businesses." Based on this lesson, what's the most useful response?`,
              options: [
                `"Great, go big!"`,
                `"Pick one. Validate it has real demand by talking to 20 potential customers first. Price it at 70-80% of market rate for adults doing similar work. Get good at the one thing before adding anything else. Doing five things badly produces no revenue. Doing one thing well consistently is the foundation of every successful small business."`,
                `"Add three more things"`,
                `"Only mow lawns"`,
              ],
              correctIndex: 1,
              explanation: `Real applied entrepreneurship advice. The friend's instinct (spread effort) is the same pattern that kills most teen businesses. Focus, validate, price properly, do well, then deepen. This is the path that actually produces sustainable small business success.`,
            },
          ],
        },

        {
          id: `l14-reflection`,
          type: `reflection`,
          headline: `Sit with this`,
          intro: `Pick the prompt that pulls at you most. Your answer is saved.`,
          prompts: [
            { id: `reflect-cognitive`, category: `Cognitive`, prompt: `Do you have any business idea right now? What's your unit economics? What's your validation plan?` },
            { id: `reflect-meta`, category: `Metacognitive`, prompt: `Which mistakes from the lesson would you have most likely made if you'd started without learning this framework?` },
            { id: `reflect-identity`, category: `Identity`, prompt: `If you actually started something at 12, even something small, what does that teach you that you can't learn from any class?` },
            { id: `reflect-application`, category: `Application`, prompt: `Pick one business idea that interests you. Calculate the unit economics. Identify your specific first customer. Estimate the time commitment per week. Is the math worth it?` },
            { id: `reflect-critical`, category: `Critical`, prompt: `Are there teen entrepreneurship advice frameworks that get this wrong? What's missing from this lesson's framework?` },
            { id: `reflect-personal`, category: `Personal investigation`, prompt: `Ask one adult about a small business or side hustle they've tried. What worked? What didn't? What would they do differently?` },
          ],
        },

        {
          id: `l14-real-world`,
          type: `real-world`,
          headline: `Take it into your life`,
          guideContext: `Starting something real at 12 builds skills no class can teach. Two paths.`,
          familyActivity: {
            title: `The Business Idea Audit`,
            duration: `40 minutes`,
            description: `At dinner, share what you learned. Then brainstorm potential teen business ideas you could realistically start in the next 3 months. For each idea, run through the framework: real demand, unit economics, customer acquisition, time commitment. Most ideas will fail one of these tests. The few that pass are worth taking seriously. This conversation often surfaces opportunities specific to your neighborhood or family network that you hadn't considered. Even if you don't start anything immediately, the exercise builds entrepreneurial pattern recognition.`,
          },
          projectOption: {
            title: `Start Something Real, 4 weeks (optional but transformative)`,
            duration: `4 weeks, ~3-5 hours per week`,
            description: `Pick one business idea from this lesson's framework. Validate demand in week 1 (talk to 10+ potential customers). Launch an MVP in week 2 (sell to the first 1-3 customers at real prices). Iterate in week 3 (improve based on what you learned). Continue or stop in week 4 (continue if it's working, stop if it's clearly not). Track time, revenue, and lessons each week. After 4 weeks, write 1,000 words on what you learned. This is real applied entrepreneurship. You'll learn more about business in 4 weeks of real work than in any number of classes about it.`,
            offerToParent: `Parent: opt your kid into this project from the dashboard. Real entrepreneurial experience at 12 is among the most valuable educational experiences possible. Worth supporting even if the specific business doesn't last.`,
          },
          identityQuestion: `If you start something real at 12 and learn from it, who are you at 30 that you wouldn't be otherwise?`,
        },

        {
          id: `l14-identity-hook`,
          type: `identity-hook`,
          headline: `Who is this lesson making you?`,
          prompt: `One sentence. No wrong answer.`,
          placeholder: `Someone who...`,
          examples: [
            `Someone who calculates unit economics before starting anything.`,
            `A person who validates demand instead of building first.`,
            `Someone willing to charge real money for real work without underpricing.`,
          ],
          saveKey: `identity_responses_mb_11_12_14`,
        },

        {
          id: `l14-celebration`,
          type: `celebration`,
          guideText: `{name}. After this lesson you can articulate product-market fit, calculate unit economics, identify common pricing mistakes, recognize patterns of teen business failure, walk through real business decisions with their financial consequences, and apply MVP thinking to actual ideas. You have more practical entrepreneurial literacy than most college business students. If you ever decide to start something, you have a framework that protects you from the most common mistakes. Next time we go into one of the most undertaught real-world skills: negotiation. It applies to salary, deals, relationships, life. Argument Builder format with three negotiation philosophies. See you there. — Ace`,
          badge: `practical-founder`,
          badgeName: `Practical Founder`,
          xpEarned: 75,
          competencies: [
            `Can articulate product-market fit, unit economics, MVP, and iteration`,
            `Knows the typical pricing mistakes teen businesses make and how to avoid them`,
            `Recognizes common patterns of teen business failure`,
            `Can walk through real business decisions with their financial consequences`,
            `Has a framework for evaluating any business idea before starting`,
          ],
          nextLessonPreview: {
            title: `Lesson 15: Negotiation — Real Skill, Useful Forever`,
            hook: `Three philosophies of negotiation: hard bargaining, principled negotiation, and relationship-based. Which actually works in your real life?`,
          },
        },
      ],
    },
  ],
};

export default MONEYBUSINESS_VOYAGER_L14;

if (import.meta.env?.DEV) {
  const l = MONEYBUSINESS_VOYAGER_L14.lessons[0];
  const mags = l.screens.filter((s) => s.type === `magazine`).length;
  const cs = l.screens.find((s) => s.type === `case-study`)?.decisions?.length ?? 0;
  const quiz = l.screens.find((s) => s.type === `quiz`)?.questions?.length ?? 0;
  const reflect = l.screens.find((s) => s.type === `reflection`)?.prompts?.length ?? 0;
  console.log(
    `[LESSON-MB-VOYAGER-L14 ${VERSION}] "${l.title}" — ${mags} magazine, case-study w/ ${cs} decisions, ${quiz} quiz, ${reflect} reflection`
  );
}
