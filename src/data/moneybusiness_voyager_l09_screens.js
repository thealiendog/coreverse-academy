// ─────────────────────────────────────────────────────────────────────────────
// MONEY & BUSINESS VOYAGER  |  L09 — How Businesses Actually Make Money
// Age band : voyagers (11-12)   Guide: ace (Eagle)
// Standards: Coreverse Original — Business Models, Entrepreneurship
// CALIBRATED: Voyager spec v1.1 (May 2026)
// Interaction format: ARGUMENT BUILDER (product / service / marketplace business models)
// ─────────────────────────────────────────────────────────────────────────────

const VERSION = "voyager-mb-l09-v1";

const MONEYBUSINESS_VOYAGER_L09 = {
  ageBand: `voyagers`,
  subjectId: `money-business`,
  guide: `ace`,

  lessons: [
    {
      id: `mb-11-12-09`,
      title: `How Businesses Actually Make Money`,
      duration: 35,
      xpReward: 75,
      badge: `business-architect`,
      badgeName: `Business Architect`,

      screens: [
        {
          id: `l09-welcome`,
          type: `welcome`,
          guideText: `{name}, you've spent eight lessons learning about personal money. Now we turn the lens around. How do the businesses you buy from actually make money? Apple, Walmart, Airbnb, your local coffee shop, Netflix, the lemonade stand down the street: each of these uses different business models with different economics. Understanding how businesses actually work changes how you see almost every transaction in your life. It also changes how you think about your own career and any business you might ever start. Today we look at three fundamental business models. Then you build an argument for which one is strongest for someone your age who might one day want to start something.`,
          headline: `How Businesses Actually Make Money`,
          subtitle: `Three fundamental models. Different economics. Different risks.`,
          visual: `/voyager-assets/money-business/l09-welcome.webp`,
        },

        {
          id: `l09-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `What A Business Actually Is`,
          paragraphs: [
            `A business is an organization that produces something of value and sells it for more than it costs to produce. That's the entire core mechanic. Costs include materials, labor, rent, equipment, taxes, insurance, marketing, and everything else needed to operate. The difference between revenue (money coming in from sales) and costs is profit. Some businesses have huge revenue but tiny profit margins. Some have small revenue but huge margins. Both can be successful or unsuccessful depending on volume and consistency.`,
            `Two terms you need to know. Revenue is the total money coming in from sales. If a coffee shop sells 200 cups at $5 each in a day, daily revenue is $1,000. Profit is what's left after all costs. If the coffee shop spent $400 on coffee beans, $300 on staff wages, and $100 on rent and utilities that day, costs were $800. Profit is $200. The shop made 20% profit margin that day.`,
            `Most people think the goal of a business is to maximize revenue. The real goal is to maximize sustainable profit. A business with $10 million in revenue and $1 million in profit is worth more than a business with $50 million in revenue and $100,000 in profit. Bigger isn't always better. Sustainable isn't always glamorous. The math behind how value gets created and captured is what business is really about.`,
          ],
          image: `/voyager-assets/money-business/l09-s1-business.webp`,
          imageCaption: `Revenue, costs, profit. The math behind every business in the world.`,
          vocab: [
            {
              word: `profit margin`,
              definition: `Profit divided by revenue, expressed as a percentage. A coffee shop with $1,000 in revenue and $200 in profit has a 20% profit margin. Different industries have very different typical margins.`,
              audioPrompt: `Profit margin is profit divided by revenue, expressed as a percentage, {name}. A coffee shop with $1,000 in revenue and $200 in profit has a 20% profit margin. Different industries have very different typical margins. Grocery stores typically run 2-3% margins on huge revenue. Software companies often have 40-60% margins. Restaurants average 3-5%. Knowing typical margins for an industry helps you understand whether a business is healthy. A grocery store at 1% is in trouble. A software company at 1% is in even bigger trouble. The number means different things in different contexts.`,
            },
            {
              word: `revenue`,
              definition: `The total money coming in from sales before any costs are deducted. Different from profit. A business can have high revenue and low profit, or low revenue and high profit.`,
              audioPrompt: `Revenue is the total money coming in from sales before any costs are deducted, {name}. If a coffee shop sells 200 cups at $5 each, daily revenue is $1,000. Revenue is different from profit. Profit is what remains after subtracting all costs from revenue. A business with $50 million in revenue and $100,000 in profit is less valuable than a business with $10 million in revenue and $1 million in profit, because sustainable profitability matters more than raw sales size. Beginners often confuse revenue with profit. A business that announces high revenue is not necessarily a successful business. Always ask what the profit margin is.`,
            },
            {
              word: `sustainable profit`,
              definition: `Profit that can be maintained over time without burning out the business or its people. The real goal of any business, not just maximizing revenue or short-term gains.`,
              audioPrompt: `Sustainable profit is profit that can be maintained over time without burning out the business or its people, {name}. The real goal of any business is to maximize sustainable profit, not just maximum revenue or one-time gains. A coffee shop that maximizes profit by overworking its staff will lose those employees and destroy quality. A business that discounts aggressively to boost sales might generate short-term revenue but erode the margins that make the business worth running. Sustainable means the economics work consistently for the long term. This is why knowing the difference between big revenue and sustainable profit is one of the most important business literacy concepts.`,
            },
          ],
        },

        {
          id: `l09-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Model 1: Product Businesses`,
          paragraphs: [
            `A product business makes a thing and sells it. Apple makes phones and computers. Coca-Cola makes drinks. Nike makes shoes. Lego makes toys. Your local bakery makes bread. Each unit is a discrete physical or digital product that gets created, distributed, and sold to customers.`,
            `Product economics: you have costs to design and develop the product, then costs to manufacture each unit, then costs to distribute and sell it. Revenue comes from people buying the product. Profit is what's left after all costs. The fundamental challenge is making the product for less than people will pay for it, including all the overhead.`,
            `Strengths of product businesses: scalability (you can sell more units without proportionally more work), brand value (consistent products build recognition), and clear customer experience (people know what they're buying). Apple sells the same iPhone to 250 million people each year. The marginal cost of each additional iPhone is much less than what they charge, which is why Apple's margins are high.`,
            `Weaknesses: inventory risk (unsold products cost money), competition (other companies can make similar products), and high upfront costs (designing and manufacturing requires significant capital). Product businesses also tend to face commoditization over time: features that were special become standard, and prices fall. Maintaining margins requires continuous innovation.`,
          ],
          image: `/voyager-assets/money-business/l09-s2-product.webp`,
          imageCaption: `Product businesses: make things, sell them. The classic business model.`,
          vocab: [
            {
              word: `marginal cost`,
              definition: `The additional cost to produce one more unit of a product. Software has a marginal cost near zero (copying code is essentially free). Physical products have higher marginal costs.`,
              audioPrompt: `Marginal cost is the additional cost to produce one more unit of a product, {name}. Software has marginal cost near zero. Once Microsoft has built Word, making one more copy is essentially free. Physical products have higher marginal costs. Each iPhone Apple makes costs around $400-500 in materials and labor before shipping and marketing. Marginal cost matters because it determines the math of scaling. Low-marginal-cost businesses can scale enormously with high margins. High-marginal-cost businesses need volume and efficiency to make significant profit. The marginal cost difference is one of the most important features of any business model.`,
            },
            {
              word: `scalability`,
              definition: `The ability to grow revenue significantly without proportionally growing costs. Software and digital products are highly scalable. Service businesses are generally not, because each service requires similar effort regardless of volume.`,
              audioPrompt: `Scalability is the ability to grow revenue significantly without proportionally growing costs, {name}. A software company that adds 1 million new users doesn't need to hire 1 million new employees to serve them. The product scales at near-zero marginal cost. A bakery that doubles its bread sales roughly needs to double its ingredients, staff, and oven time. Service businesses are especially hard to scale because each service requires similar effort regardless of volume. This is one of the fundamental economic differences between product and service businesses, and explains why software companies can become some of the world's most valuable companies while most service businesses stay relatively small.`,
            },
            {
              word: `inventory risk`,
              definition: `The financial risk of holding unsold products. If products don't sell, the money spent making them is lost. A major weakness of product businesses that service businesses don't face.`,
              audioPrompt: `Inventory risk is the financial risk of holding unsold products, {name}. If you make 500 handmade candles and only sell 200, the materials and time invested in the other 300 are largely lost. Inventory risk is one of the main weaknesses of product businesses, especially for beginners. Service businesses don't have inventory risk. A lawn mowing business doesn't hold unsold lawns. A tutoring business doesn't stockpile unused tutoring hours. This is one reason service businesses are usually safer starting points for teen entrepreneurs than product businesses. You do the work, get paid, and have no unsold inventory sitting in your garage waiting to be written off.`,
            },
          ],
        },

        {
          id: `l09-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Model 2: Service Businesses`,
          paragraphs: [
            `A service business sells someone's time or expertise. Lawyers, doctors, plumbers, accountants, hair stylists, consultants, software developers, teachers, therapists. The product isn't a thing; it's an outcome delivered through expertise and effort. The classic example: a haircut. You can't put a haircut on a shelf. It exists in the moment of being performed.`,
            `Service economics: revenue is tied to time and skill. An accountant might charge $200/hour. A surgeon might charge $5,000 per procedure. The accountant can work maybe 40 billable hours per week. The surgeon performs maybe 200 procedures per year. Revenue has a natural ceiling determined by how much time and skill you have available.`,
            `Strengths of service businesses: low startup costs (often just need expertise and basic tools), direct relationships with customers, predictable revenue when established, and the ability to charge for high-value expertise. A skilled lawyer can earn $500-1500/hour. A skilled software consultant can charge similar rates. Expertise commands a premium.`,
            `Weaknesses: hard to scale (you only have so many hours), revenue stops when you stop working, and dependence on continued skill development. Service businesses also struggle to capture the full value they create because their growth is linear with effort rather than exponential. Many service business owners burn out trying to grow beyond what they can personally deliver.`,
          ],
          image: `/voyager-assets/money-business/l09-s3-service.webp`,
          imageCaption: `Service businesses: sell time and expertise. Highest skill commands premium prices.`,
          vocab: [
            {
              word: `billable hour`,
              definition: `An hour of work that a service business can charge a client for. Lawyers, consultants, and accountants typically structure their work around billable hours.`,
              audioPrompt: `A billable hour is an hour of work that a service business can charge a client for, {name}. Lawyers, consultants, accountants, freelance designers, and many other service businesses structure their work around billable hours. If a lawyer charges $300 per hour and works 40 billable hours per week, weekly revenue is $12,000 before expenses. Not all working hours are billable. Time spent on administration, marketing, or non-client work isn't billable. Typical professional service businesses have maybe 60 to 70 percent of working hours actually billable. The math of billable hours is the foundation of most service business economics.`,
            },
            {
              word: `revenue ceiling`,
              definition: `The natural upper limit on how much a business can earn given its model and resources. Service businesses have a revenue ceiling tied to how many billable hours are available. Product businesses generally have higher or no ceilings.`,
              audioPrompt: `A revenue ceiling is the natural upper limit on how much a business can earn given its model and resources, {name}. Service businesses have a revenue ceiling tied to how many billable hours are available. A consultant working 40 billable hours per week at $200 per hour earns a maximum of $8,000 per week regardless of how hard they work. Physical limits on time cap the business. Product businesses can break through this ceiling because each additional unit sold requires less proportional effort than a service requires. This is one of the main reasons entrepreneurs sometimes transition from service businesses to product businesses as they grow: to escape the revenue ceiling that comes with selling time.`,
            },
            {
              word: `expertise`,
              definition: `Deep skill or specialized knowledge in a specific area. The core asset of a service business. High-value expertise commands premium prices and is harder to replicate than products.`,
              audioPrompt: `Expertise is deep skill or specialized knowledge in a specific area, {name}. It is the core asset of a service business. A skilled surgeon commands $5,000 per procedure. A skilled attorney charges $500 to $1,500 per hour. What they are selling is expertise, not materials or time on their own. High-value expertise is harder to replicate than products, which creates defensible pricing power. Service businesses that develop genuine expertise in high-demand areas can charge premium rates that product businesses rarely achieve per unit. The challenge is that expertise takes years to build and is tied to the individual who has it. If the expert stops working, the revenue stops.`,
            },
          ],
        },

        {
          id: `l09-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Model 3: Marketplace Businesses`,
          paragraphs: [
            `A marketplace business connects buyers and sellers and takes a cut of transactions. Airbnb connects travelers with property owners. Uber connects riders with drivers. eBay connects buyers with sellers. Etsy connects shoppers with crafters. Amazon's marketplace connects shoppers with third-party sellers. The business itself doesn't own the products or perform the services. It owns the platform that makes the transactions possible.`,
            `Marketplace economics: revenue comes from transaction fees, typically 5-30% of the value of each transaction. Costs include building and maintaining the platform, supporting users, marketing, and dealing with issues that arise between buyers and sellers. The business gets paid for facilitating value rather than creating it directly.`,
            `Strengths of marketplaces: enormous scalability (once the platform exists, additional transactions cost very little), network effects (more buyers attract more sellers, which attracts more buyers), and asset-light operation (no inventory, no employees performing each service). When Airbnb adds a new property, they don't buy a building. The property owner already owns it. Airbnb just connects them with travelers.`,
            `Weaknesses: extremely hard to start (chicken-and-egg problem of needing both sides to show up), high regulatory complexity, dependence on user trust, and vulnerability to disintermediation (users finding each other and bypassing the platform). Marketplaces also face winner-take-all dynamics: usually one or two players dominate each category, making it hard for new entrants to compete with established networks.`,
          ],
          image: `/voyager-assets/money-business/l09-s4-marketplace.webp`,
          imageCaption: `Marketplaces: facilitate transactions, take a cut. Scale enormously when they work.`,
          vocab: [
            {
              word: `network effects`,
              definition: `When a product or platform becomes more valuable as more people use it. Phones, social networks, and marketplaces have strong network effects. Often produces winner-take-all dynamics.`,
              audioPrompt: `Network effects happen when a product or platform becomes more valuable as more people use it, {name}. A phone is more valuable when more people have phones to call. A social network is more valuable when more friends are on it. A marketplace is more valuable when more buyers and sellers are using it. Network effects often produce winner-take-all dynamics. Once a platform reaches critical mass in a category, competitors struggle to gain ground because the established platform has more users, which makes it more valuable, which attracts more users. Facebook, Uber, Airbnb, and eBay all benefit from network effects in their categories.`,
            },
            {
              word: `transaction fee`,
              definition: `A percentage of each transaction that a marketplace charges for facilitating the connection between buyers and sellers. Typically 5-30% of the transaction value. The primary revenue source for marketplace businesses.`,
              audioPrompt: `A transaction fee is a percentage of each transaction that a marketplace charges for facilitating a connection between buyers and sellers, {name}. Airbnb charges roughly 3 percent from hosts and 14 percent from guests. Etsy charges around 6.5 percent per sale. eBay charges 8 to 15 percent depending on category. The fee is how the marketplace earns revenue without owning any of the products or performing any of the services. Because transaction fees on millions of transactions compound quickly, successful marketplaces can generate enormous revenue at very high profit margins. This is what makes marketplace businesses so appealing economically when they work, and why so many people try to build them.`,
            },
            {
              word: `chicken-and-egg problem`,
              definition: `The challenge marketplaces face when starting up: buyers won't come without sellers, and sellers won't come without buyers. The hardest barrier to entering marketplace businesses.`,
              audioPrompt: `The chicken-and-egg problem is the challenge marketplaces face when starting up, {name}. Buyers won't use a marketplace without sellers to buy from. Sellers won't join a marketplace without buyers to sell to. Neither side wants to show up first. This is the hardest barrier to building a new marketplace business. Established marketplaces like Airbnb and Etsy spent years and enormous amounts of money solving this problem by subsidizing one side or both until a critical mass of users made the platform genuinely useful. For a 12-year-old thinking about starting a marketplace, this challenge is essentially insurmountable. It is one of the main reasons service businesses are usually the right starting model for teen entrepreneurs despite being less glamorous.`,
            },
          ],
        },

        {
          id: `l09-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `What This Means For You`,
          paragraphs: [
            `Most teenagers who start any kind of business pick one of these three models without knowing which one. Selling handmade jewelry: product business. Babysitting or lawn mowing: service business. Reselling sneakers on a platform: technically using a marketplace someone else built. Each model has different economics, different risks, and different paths to growth.`,
            `For a 12-year-old considering doing anything entrepreneurial in the next few years, service businesses are usually the easiest entry point. They require almost no capital. Babysitting, dog walking, lawn mowing, tutoring, cleaning gutters, helping elderly neighbors with technology, social media management for small local businesses. You sell your time and skill. You learn customer service, pricing, and basic business management without major financial risk.`,
            `Product businesses for a teen typically require some upfront investment (materials, inventory) and have inventory risk. They can work if you have a specific skill (custom 3D printing, handmade soap, art prints, baked goods) and a clear market. Marketplace businesses are essentially impossible to start as a teenager unless you're an unusual technical prodigy. They require massive capital and tech infrastructure.`,
            `In the argument builder you'll defend which model is strongest for someone your age. There's a defensible case for each. The point isn't to pick the "right" business model for everyone. It's to think through the economics carefully and make a reasoned choice.`,
          ],
          image: `/voyager-assets/money-business/l09-s5-you.webp`,
          imageCaption: `Three models, your situation. Choose with clear eyes.`,
          vocab: [
            {
              word: `economies of scale`,
              definition: `When the cost per unit decreases as you produce more units. Manufacturing has strong economies of scale. Service businesses generally don't.`,
              audioPrompt: `Economies of scale happen when the cost per unit decreases as you produce more units, {name}. Manufacturing has strong economies of scale. The first iPhone Apple ever made was extremely expensive. The 100 millionth iPhone they made benefits from massive shared infrastructure, optimized supply chains, and learned efficiencies. The cost per unit is much lower at scale. Service businesses generally don't have economies of scale because each service requires similar effort regardless of how many you provide. A haircut takes about the same time and effort whether you're cutting your first hair or your ten-thousandth. This is one reason product businesses can grow much larger than most service businesses.`,
            },
            {
              word: `service business`,
              definition: `A business that sells someone's time or expertise. Requires low startup capital, teaches transferable skills, has low risk. Revenue tied to hours worked, making it hard to scale beyond personal time.`,
              audioPrompt: `A service business sells someone's time or expertise, {name}. Babysitting, dog walking, lawn mowing, tutoring, plumbing, legal work, consulting: all service businesses. They are usually the easiest entry point for teen entrepreneurs because they require almost no capital to start. You need expertise and basic tools, not inventory or infrastructure. The skills a service business teaches, customer service, pricing, scheduling, managing client expectations, transfer to any future business or career. The limitation is that revenue is tied to hours available. A teen doing $25 per hour lawn mowing maxed out at 10 hours per week earns $250 per week. Real money for a 12-year-old, but the model has a ceiling.`,
            },
            {
              word: `capital`,
              definition: `Money or assets used to start and run a business. Service businesses require little capital. Product businesses require more. Marketplace businesses require substantial capital. Low capital requirements make service businesses accessible to teens.`,
              audioPrompt: `Capital is money or assets used to start and run a business, {name}. Different business models require very different amounts of capital. Service businesses require little capital. A babysitter needs a phone and a recommendation. A lawn mower needs a lawn mower and maybe a few basic tools. Product businesses require more capital for materials, manufacturing, and inventory. Marketplace businesses require substantial capital to build and maintain technical infrastructure. Low capital requirements make service businesses the most accessible starting point for teen entrepreneurs. You do not need to save up or borrow to start. You need skill, time, and the willingness to find your first few customers.`,
            },
          ],
        },

        // ───── ARGUMENT BUILDER ───────────────────────────────────────────────
        {
          id: `l09-argument-builder`,
          type: `argument-builder`,
          headline: `Which Business Model Is Strongest For Someone Your Age?`,
          intro: `Pick one of three business models as the strongest starting place for a 12-14 year old who might want to start something. Build your case with 3-4 pieces of evidence. Then respond to the strongest counterargument.`,
          positions: [
            {
              id: `product-business`,
              label: `Product business`,
              summary: `A teen who can make something (3D-printed items, baked goods, handmade jewelry, art prints, custom designs, digital products) can build a real product business. Scalability is real: once you have a product that sells, you can sell more units with less proportional work. Brand value can be built. Profit margins on differentiated products can be high. Even small initial inventory investment can pay off if the product fits a market.`,
            },
            {
              id: `service-business`,
              label: `Service business`,
              summary: `Service businesses require almost no capital, have low risk, and are accessible to any teen. Babysitting, dog walking, lawn mowing, tutoring, social media help for small businesses, tech help for older neighbors. You learn customer service, pricing, scheduling, and basic business management without significant financial risk. The hourly economics aren't glamorous but they're real, immediate, and teach core business skills.`,
            },
            {
              id: `marketplace-business`,
              label: `Use existing marketplaces`,
              summary: `Building a marketplace from scratch isn't realistic for a teen. But using existing marketplaces (Etsy, eBay, Depop, Poshmark, TikTok Shop) lets you reach huge customer bases without building infrastructure. You can sell handmade products (combining product business with marketplace reach), or you can resell items at margin (sneakers, vintage clothes, collectibles). The marketplace handles tech, payments, and customer base. You handle the actual selling.`,
            },
          ],
          evidence: [
            {
              id: `e1`,
              text: `Service businesses can be started with $0 capital. A 12-year-old can begin babysitting, dog walking, or tutoring immediately. The lowest-risk entry point into entrepreneurship.`,
              source: `Standard small business observation`,
            },
            {
              id: `e2`,
              text: `Product businesses have inventory risk. Unsold products represent money tied up in physical goods that may have to be discounted or written off. A teen with limited capital can lose everything on a bad inventory decision.`,
              source: `Standard product business analysis`,
            },
            {
              id: `e3`,
              text: `Marketplaces have network effects that benefit incumbent platforms. As a teen, you can use existing marketplaces (Etsy, eBay, Depop) but building your own is essentially impossible without significant tech and capital.`,
              source: `Platform economics`,
            },
            {
              id: `e4`,
              text: `Service businesses have natural revenue ceilings tied to hours available. A teen doing $25/hour babysitting maxing out at 10 hours/week earns $250/week. Real money for a teen, but limited.`,
              source: `Basic service business math`,
            },
            {
              id: `e5`,
              text: `Product businesses can scale dramatically. A teen who creates a viral product (custom phone cases, popular sticker designs) can sell thousands of units. Scale potential is much higher than service businesses, though the path is rare.`,
              source: `Examples of teen product business success stories`,
            },
            {
              id: `e6`,
              text: `Marketplace-based selling (Etsy, eBay, Depop) lets teens reach customers globally without building infrastructure. Existing platforms handle payments, fraud protection, and customer trust. A small commission is paid to the platform.`,
              source: `Modern teen entrepreneur examples`,
            },
            {
              id: `e7`,
              text: `Service businesses teach the most transferable skills: customer service, pricing, scheduling, time management. These skills apply to any future business or career, regardless of model.`,
              source: `Entrepreneurship education research`,
            },
          ],
          counterargument: {
            id: `counter`,
            text: `"You picked your business model. Here's the strongest objection. The model that's 'strongest for a 12-year-old' depends entirely on the specific teen. A creative kid with strong design skills should be making products. A patient kid with neighbor relationships should be doing services. A market-savvy kid who understands trends should be using marketplaces. So picking a 'best' model is wrong: the right answer is to match the model to the individual teen's actual skills and situation."`,
            promptInstruction: `In 3-4 sentences, respond. Why does your chosen model still make sense as a general starting place even given individual variation?`,
          },
          reflectionPrompt: `Which model felt most appealing to you personally? Which best matches your actual skills and situation right now?`,
        },

        {
          id: `l09-quiz`,
          type: `quiz`,
          headline: `Check your understanding`,
          questions: [
            {
              id: `q1`,
              type: `multiple-choice`,
              question: `What's the core mechanic of any business?`,
              options: [
                `Maximizing revenue at all costs`,
                `Producing something of value and selling it for more than it costs to produce; the difference between revenue and costs is profit`,
                `Having the best marketing`,
                `Getting government contracts`,
              ],
              correctIndex: 1,
              explanation: `Revenue minus costs equals profit. The math is universal. Different business models have different ways of generating revenue and managing costs, but the underlying mechanic is the same.`,
            },
            {
              id: `q2`,
              type: `multiple-choice`,
              question: `What's profit margin?`,
              options: [
                `The total profit`,
                `Profit divided by revenue, expressed as a percentage; different industries have very different typical margins (groceries 2-3%, software 40-60%, restaurants 3-5%)`,
                `Bank fees`,
                `Sales tax`,
              ],
              correctIndex: 1,
              explanation: `Profit margin matters more than absolute profit for comparing business health. A 1% margin in software is in trouble; a 1% margin in groceries might be okay because of volume.`,
            },
            {
              id: `q3`,
              type: `multiple-choice`,
              question: `What's a product business?`,
              options: [
                `Any business`,
                `A business that makes a thing (physical or digital) and sells it: Apple, Coca-Cola, Lego, a bakery`,
                `Only manufacturing`,
                `Only physical products`,
              ],
              correctIndex: 1,
              explanation: `Product businesses create discrete units (physical or digital) that get distributed and sold. The economics: design and build cost, manufacturing cost per unit, distribution cost, then revenue from sales.`,
            },
            {
              id: `q4`,
              type: `multiple-choice`,
              question: `What's marginal cost?`,
              options: [
                `Total cost`,
                `The additional cost to produce one more unit; software has marginal cost near zero, physical products have higher marginal costs`,
                `Government fees`,
                `Marketing cost`,
              ],
              correctIndex: 1,
              explanation: `Marginal cost is one of the most important business concepts. Low-marginal-cost businesses (software, digital products) scale much more profitably than high-marginal-cost businesses (manufacturing, hardware).`,
            },
            {
              id: `q5`,
              type: `multiple-choice`,
              question: `What's a service business?`,
              options: [
                `Selling products fast`,
                `A business that sells someone's time or expertise: lawyers, doctors, plumbers, consultants, hair stylists; revenue tied to billable hours and skill`,
                `Just restaurants`,
                `Government work`,
              ],
              correctIndex: 1,
              explanation: `Service businesses are about expertise delivered in real time. Strengths: low startup cost, direct customer relationships. Weaknesses: hard to scale, revenue tied to your hours.`,
            },
            {
              id: `q6`,
              type: `multiple-choice`,
              question: `What's a marketplace business?`,
              options: [
                `A physical store`,
                `A business that connects buyers and sellers and takes a cut of transactions; the platform doesn't own products or perform services itself; examples: Airbnb, Uber, eBay, Etsy`,
                `Stock market`,
                `Foreign exchange`,
              ],
              correctIndex: 1,
              explanation: `Marketplaces scale enormously once they work. They face the chicken-and-egg problem of needing both sides to show up. Winner-take-all dynamics often emerge.`,
            },
            {
              id: `q7`,
              type: `multiple-choice`,
              question: `What are network effects?`,
              options: [
                `Internet outages`,
                `When a product or platform becomes more valuable as more people use it; phones, social networks, marketplaces; often produces winner-take-all dynamics`,
                `Server costs`,
                `Bug fixes`,
              ],
              correctIndex: 1,
              explanation: `Network effects are why Facebook, Uber, Airbnb, and eBay dominate their categories. Once a platform reaches critical mass, competitors struggle because the established platform has more users, which makes it more valuable, which attracts more users.`,
            },
            {
              id: `q8`,
              type: `multiple-choice`,
              question: `Why is a service business usually the easiest entry point for a teen?`,
              options: [
                `They pay the most`,
                `They require almost no capital, have low risk, teach transferable skills, and are accessible to any teen with a phone and willingness to work; the math isn't glamorous but the learning is real`,
                `They're impressive`,
                `They're glamorous`,
              ],
              correctIndex: 1,
              explanation: `Service businesses for teens are practical. Babysitting, dog walking, tutoring, lawn mowing. The skills (customer service, pricing, scheduling) transfer to anything bigger you do later.`,
            },
            {
              id: `q9`,
              type: `true-false`,
              question: `True or false: Building a successful marketplace business from scratch is realistic for a 12-year-old.`,
              correctAnswer: false,
              explanation: `False. Marketplaces require significant capital, technical infrastructure, and overcoming the chicken-and-egg problem of attracting both sides. Teens can use existing marketplaces, but building one is essentially impossible.`,
            },
            {
              id: `q10`,
              type: `inference`,
              question: `Your friend wants to start a business and says "I'll start a marketplace that connects local musicians with people who want lessons." Based on this lesson, what should you notice?`,
              options: [
                `"Great idea, do it"`,
                `"Marketplace ideas are exciting, but they're brutally hard to start. You'd need both musicians and students on day one, or neither side will show up. Existing platforms (Lessonface, TakeLessons, even Craigslist) already do this. Why not just start as a music tutor yourself, learn the business, and then maybe build a platform if you see a real gap? Service first, marketplace later. Or never. Most teen marketplace ideas fail because the model is wrong for the resources available."`,
                `"Build an app first"`,
                `"Charge huge fees"`,
              ],
              correctIndex: 1,
              explanation: `Real business model analysis applied to a real friend's idea. Honor the ambition. Name the structural challenge (chicken-and-egg). Suggest the better-fit alternative (start as service, learn, maybe build platform later). This is mature thinking.`,
            },
          ],
        },

        {
          id: `l09-reflection`,
          type: `reflection`,
          headline: `Sit with this`,
          intro: `Pick the prompt that pulls at you most. Your answer is saved.`,
          prompts: [
            { id: `reflect-cognitive`, category: `Cognitive`, prompt: `Before this lesson, did you think most businesses worked the same way? How has that shifted?` },
            { id: `reflect-meta`, category: `Metacognitive`, prompt: `Which business model feels most natural to your personality? Why? Is there a model you're underestimating?` },
            { id: `reflect-identity`, category: `Identity`, prompt: `If you started a small business in the next year, which model would you actually try? What would you call your business?` },
            { id: `reflect-application`, category: `Application`, prompt: `Pick one business you interact with regularly (restaurant, app, online store). What model is it? What are its economics?` },
            { id: `reflect-critical`, category: `Critical`, prompt: `Are there business models this lesson missed? What about charity, government, content creation? Where do they fit?` },
            { id: `reflect-personal`, category: `Personal investigation`, prompt: `Ask one adult: have they ever started any kind of business or freelance work? What model was it? What did they learn?` },
          ],
        },

        {
          id: `l09-real-world`,
          type: `real-world`,
          headline: `Take it into your life`,
          guideContext: `Understanding business models changes how you see every transaction in your life. Two paths.`,
          familyActivity: {
            title: `The Family Business Audit`,
            duration: `30 minutes`,
            description: `At dinner, look at every business your family interacts with in a typical week. The grocery store, gas station, coffee shop, online subscriptions, streaming services, the restaurants you eat at, the apps you use. For each, identify the business model: product, service, marketplace, or something else? You'll discover that even seemingly similar businesses have different models. A coffee shop is mostly product. Uber Eats is marketplace. Netflix is product subscription. This conversation reveals how much business literacy you can build just by looking carefully at things you already encounter.`,
          },
          projectOption: {
            title: `Design Your First Business Plan, 2 weeks (optional)`,
            duration: `2 weeks, ~15 minutes per day`,
            description: `Pick one business idea you might actually start in the next year. Write a one-page business plan that covers: What's the model (product, service, marketplace)? Who are the customers? What's the unique value you provide? What are the costs? What's the pricing? What's the realistic revenue if you succeed? What could go wrong? Refine it for 14 days. Then either pitch it to a parent or just keep it as a reference document. The exercise of writing a real business plan, even if you never execute it, builds skills you'll use for any future venture.`,
            offerToParent: `Parent: opt your kid into this project from the dashboard. Real business thinking at 12 is rare and worth supporting.`,
          },
          identityQuestion: `If you understand business models clearly at 12, what advantage does that give you in any career or venture later?`,
        },

        {
          id: `l09-identity-hook`,
          type: `identity-hook`,
          headline: `Who is this lesson making you?`,
          prompt: `One sentence. No wrong answer.`,
          placeholder: `Someone who...`,
          examples: [
            `Someone who sees the business model behind every transaction I make.`,
            `A person who would start a service business before chasing scale.`,
            `Someone who knows the math of marginal cost and economies of scale.`,
          ],
          saveKey: `identity_responses_mb_11_12_09`,
        },

        {
          id: `l09-celebration`,
          type: `celebration`,
          guideText: `{name}. After this lesson you can articulate three fundamental business models, explain their economics including marginal cost and network effects, distinguish revenue from profit and profit from margin, identify the best model for someone your age starting out, and apply business analysis to real-world companies. Most adults haven't thought about business models systematically. You have. Next time we look at one of the most contested topics in business: the line between marketing and manipulation. When does persuasion become deception? Source Evaluation format. See you there. — Ace`,
          badge: `business-architect`,
          badgeName: `Business Architect`,
          xpEarned: 75,
          competencies: [
            `Can articulate three fundamental business models (product, service, marketplace)`,
            `Knows the economics including marginal cost, network effects, and economies of scale`,
            `Distinguishes revenue from profit and profit from margin`,
            `Has built an argument for the best business model for someone your age`,
            `Can apply business analysis to real-world companies`,
          ],
          nextLessonPreview: {
            title: `Lesson 10: Marketing vs Manipulation — Where's The Line?`,
            hook: `All marketing tries to influence behavior. Most is legitimate. Some crosses into manipulation. Three sources, three different framings of where the line actually is.`,
          },
        },
      ],
    },
  ],
};

export default MONEYBUSINESS_VOYAGER_L09;

if (import.meta.env?.DEV) {
  const l = MONEYBUSINESS_VOYAGER_L09.lessons[0];
  const mags = l.screens.filter((s) => s.type === `magazine`).length;
  const argEvi = l.screens.find((s) => s.type === `argument-builder`)?.evidence?.length ?? 0;
  const quiz = l.screens.find((s) => s.type === `quiz`)?.questions?.length ?? 0;
  const reflect = l.screens.find((s) => s.type === `reflection`)?.prompts?.length ?? 0;
  console.log(
    `[LESSON-MB-VOYAGER-L09 ${VERSION}] "${l.title}" — ${mags} magazine, argument-builder w/ ${argEvi} evidence, ${quiz} quiz, ${reflect} reflection`
  );
}
