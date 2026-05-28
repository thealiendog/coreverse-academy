// ─────────────────────────────────────────────────────────────────────────────
// MONEY & BUSINESS UE  |  L10 — Social Entrepreneurship: Business That Helps
// Age band : upper_explorers (9–10)   Guide: ace
// Standards: Jump$tart Personal Finance — Civic financial responsibility;
//            C3 D2.Eco.2.3-5 — Identify ways economic systems work
// CALIBRATED: UE spec v1.1 — real domain terms, em-dashes sparing
// SCOPE: 4 concepts — what social entrepreneurship is, real examples,
//        triple bottom line (people/planet/profit), how to start
// VERSION: v1
// ─────────────────────────────────────────────────────────────────────────────

const MONEY_UE_L10 = {
  ageBand: `upper_explorers`,
  subjectId: `money`,
  guide: `ace`,

  lessons: [
    {
      id: `mb-9-10-10`,
      title: `Social Entrepreneurship: Business That Helps the World`,
      duration: 18,
      xpReward: 75,
      badge: `social-entrepreneur`,
      badgeName: `Social Entrepreneur`,

      screens: [
        {
          id: `l10-welcome`,
          type: `welcome`,
          guideText: `Hey {name}, Ace here. Most people think businesses exist only to make money. That's part of it. But a growing number of entrepreneurs are building businesses that ALSO solve real problems for people or the planet. We call this SOCIAL ENTREPRENEURSHIP. Today we cover what it is, real examples that have actually changed the world, and how you can think about building businesses that do both. Making money AND doing good aren't opposites. Done well, they amplify each other. Let's go.`,
          headline: `Social Entrepreneurship`,
          subtitle: `Businesses that make money AND make the world better`,
          visual: `/ue-assets/money/l10-welcome.webp`,
        },

        {
          id: `l10-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `What Social Entrepreneurship Actually Is`,
          paragraphs: [
            `A SOCIAL ENTREPRENEUR is someone who starts a business specifically to solve a SOCIAL or ENVIRONMENTAL problem, not just to make money. Regular businesses focus on profit. Charities focus on giving. Social entrepreneurship sits in the MIDDLE: real businesses that generate revenue AND create measurable positive impact. The business has to be financially sustainable (it can't survive on donations forever) AND it has to actually solve the problem it claims to.`,
            `Social entrepreneurship is different from "doing some charity work on the side." Many successful companies donate to charity, sponsor causes, or volunteer. That's nice but not social entrepreneurship. A social entrepreneur's BUSINESS MODEL itself is designed to create impact. Their products, services, customers, and operations all serve a bigger purpose. When customers buy the product, social good happens automatically as part of the business working. The two are inseparable.`,
          ],
          image: `/ue-assets/money/l10-s1-what-is.webp`,
          imageCaption: `Social entrepreneurship: business model designed to create impact AND profit.`,
          vocab: [
            { word: `social entrepreneurship`,
              definition: `Starting a business specifically to solve a social or environmental problem, while also being financially sustainable. The business model itself creates impact, not just side donations.`,
              audioPrompt: `Social entrepreneurship is starting a business specifically to solve a social or environmental problem, {name}. While also being financially sustainable. Regular businesses focus on profit. Charities focus on giving. Social entrepreneurship sits in the middle. Real businesses that generate revenue AND create measurable positive impact. The business has to make money to survive AND it has to actually solve the problem it claims to. Social entrepreneurship is different from donating to charity. The business model itself creates the impact, not just side donations or sponsorships.` },
            { word: `mission`,
              definition: `The core purpose or reason a business or organization exists beyond just making money. Social-entrepreneurship companies have missions baked into every decision, not just their marketing.`,
              audioPrompt: `A mission is the core purpose a business exists beyond just making money, {name}. Every social entrepreneurship company has a clear mission. TOMS exists to improve lives through business. Grameen Bank exists to lift people out of poverty through small loans. Coreverse exists to help kids develop consciousness alongside academics. A strong mission guides decisions: does this serve our mission? When profit and mission conflict, mission-driven companies choose the mission. A clear mission attracts people who share the same values.` },
          ],
        },

        {
          id: `l10-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Real Examples That Have Changed the World`,
          paragraphs: [
            `TOMS SHOES became famous for their "one for one" model: for every pair of shoes you buy, TOMS gives a pair to a child in need. Founded in 2006, TOMS has donated over 100 million pairs of shoes. WARBY PARKER (eyeglasses) uses a similar model: for every pair sold, one is donated to someone who needs vision care. Patagonia (outdoor clothing) is committed to environmental sustainability, gives 1% of all sales to environmental causes, and pioneered selling repaired used clothing instead of new.`,
            `Other examples: GRAMEEN BANK in Bangladesh pioneered microloans (small loans to poor entrepreneurs, often women, who can't access regular banks). Their founder Muhammad Yunus won the Nobel Peace Prize in 2006. KIVA is a U.S.-based platform where ordinary people can lend $25 at a time to entrepreneurs in developing countries. BOMBAS sells socks and donates a pair to homeless shelters for every one sold. Smaller companies too: hundreds of community-focused businesses, environmentally-friendly product companies, and ethical-fashion brands operate on social entrepreneurship principles. The movement is growing.`,
          ],
          image: `/ue-assets/money/l10-s2-examples.webp`,
          imageCaption: `TOMS. Warby Parker. Patagonia. Grameen Bank. Real businesses, real impact.`,
          vocab: [
            { word: `impact`,
              definition: `The positive (or negative) effect a business has on people, communities, or the planet beyond its profit. Social entrepreneurs measure impact alongside financial success.`,
              audioPrompt: `Impact is the positive or negative effect a business has on people, communities, or the planet, {name}. Social entrepreneurs measure impact alongside financial success. How many pairs of shoes were donated. How many homeless people received socks. How many micro-entrepreneurs got their first loan. How much carbon was removed from the atmosphere. Impact comes in many forms. Some is easy to measure (number of products donated). Some is harder (changing how an industry thinks). Real social entrepreneurs track their impact carefully and try to grow it alongside revenue.` },
            { word: `microloan`,
              definition: `A small loan given to an entrepreneur who can't access regular bank lending. Pioneered by Muhammad Yunus through Grameen Bank to help poor people (often women) start tiny businesses.`,
              audioPrompt: `A microloan is a small loan given to someone who can't access regular bank lending, {name}. Usually a few hundred to a few thousand dollars. Muhammad Yunus pioneered microloans through Grameen Bank in Bangladesh, lending small amounts to poor entrepreneurs (often women) who had no collateral and no credit history. The borrowers used the loans to start tiny businesses: selling vegetables, making crafts, weaving cloth. Most paid back the loans. Microloans helped millions escape poverty. The model proved that even the poorest people are creditworthy when given a chance.` },
          ],
        },

        {
          id: `l10-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `The Triple Bottom Line: People, Planet, Profit`,
          paragraphs: [
            `Many social entrepreneurs use a framework called the TRIPLE BOTTOM LINE. Instead of measuring success only by PROFIT (the financial bottom line), they measure THREE things at once. (1) PROFIT: is the business making enough money to keep operating and grow? (2) PEOPLE: is it improving the lives of customers, employees, communities, or those who need help? (3) PLANET: is it sustainable for the environment, or at minimum not harmful?`,
            `Companies committed to all three are sometimes called B-CORPS (short for "Benefit Corporations"). To become certified, they have to meet specific standards for environmental and social performance. Patagonia, Ben & Jerry's, and over 6,000 other companies worldwide are B-Corps. The triple bottom line isn't perfect, but it forces a more honest view of what a business actually does. A company that makes huge profits while damaging the environment or treating workers badly isn't really "successful" in the way social entrepreneurs use the word. Real success means winning on all three.`,
          ],
          image: `/ue-assets/money/l10-s3-triple-bottom.webp`,
          imageCaption: `Three bottom lines. People. Planet. Profit. Real success wins all three.`,
          vocab: [
            { word: `triple bottom line`,
              definition: `A framework for measuring business success on three dimensions: profit (financial), people (social impact), and planet (environmental impact). Used by social entrepreneurs and B-corps.`,
              audioPrompt: `The triple bottom line is a framework for measuring business success on three dimensions, {name}. Profit. People. Planet. Instead of measuring success only by financial profit, social entrepreneurs measure three things at once. Is the business making enough money to survive and grow. Is it improving the lives of customers, employees, communities, or those who need help. Is it sustainable for the environment, or at least not harmful. Companies committed to all three are sometimes called B-Corps, short for Benefit Corporations. Over 6,000 B-Corps exist worldwide.` },
            { word: `B-corp`,
              definition: `Short for "Benefit Corporation." A business certified for meeting specific standards for environmental and social performance, in addition to profit. Patagonia and Ben & Jerry's are examples.`,
              audioPrompt: `A B-Corp, short for Benefit Corporation, is a business certified for meeting specific standards for environmental and social performance, in addition to making profit, {name}. To become certified, companies go through a rigorous assessment of how they treat workers, communities, customers, and the environment. Patagonia, Ben and Jerry's, and over 6,000 other companies worldwide are B-Corps. The certification helps customers identify businesses genuinely committed to the triple bottom line. It's not just a logo — it requires real, measurable performance across social and environmental areas.` },
          ],
        },

        {
          id: `l10-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `How Anyone Can Start`,
          paragraphs: [
            `You don't need to be Patagonia or TOMS to be a social entrepreneur. Many social businesses start small and local. A teen who tutors kids who can't afford regular tutoring at a sliding-scale price is doing social entrepreneurship. A family bakery that donates day-old bread to a shelter every night is too. A small online seller that uses eco-friendly packaging is moving in that direction. Small actions, consistently done, add up.`,
            `If you want to start your own social business someday, start with the four questions from L03: what problem, who's the customer, how do you make money, what does it cost? Then add a FIFTH question: what GOOD does this create beyond profit? The answer doesn't have to be huge. It just has to be REAL. Ace's note: Coreverse itself is a social-entrepreneurship company. It's a real business that earns revenue from families, AND it's specifically designed to help kids develop consciousness alongside academics. Both goals matter. Both shape every decision. That's how social entrepreneurship works in practice.`,
          ],
          image: `/ue-assets/money/l10-s4-how-start.webp`,
          imageCaption: `Small steps. Real impact. Ask the fifth question: what good does this create?`,
          vocab: [
            { word: `nonprofit`,
              definition: `An organization where any profits go BACK into the mission rather than to owners. Different from a social entrepreneurship business, which can keep some profit AND create impact.`,
              audioPrompt: `A nonprofit is an organization where any profits go back into the mission rather than to owners, {name}. Charities are usually nonprofits. So are many schools, hospitals, and museums. Nonprofits can still earn revenue (from donations, services, grants), but they reinvest it all in their mission. Social entrepreneurship businesses are different. They can keep some profit AND create impact. Nonprofits and social businesses both do important work. They just operate differently. Some founders choose one model. Others choose the other. Each makes sense in different situations.` },
            { word: `grant`,
              definition: `Money given to support a mission or project with no expectation of repayment. Different from a loan or investment. Nonprofits and some social businesses rely on grants from governments, foundations, and individuals.`,
              audioPrompt: `A grant is money given to support a mission or project with no expectation of repayment, {name}. Different from a loan (which must be paid back) or investment (which expects a return). Grants come from governments, foundations, and wealthy individuals who want to fund important work. Nonprofits rely heavily on grants to operate. Social entrepreneurship businesses can also apply for grants, especially early on. The trade-off: grants require applications, reporting, and often restrictions on how the money is spent. They're not free money — they come with accountability.` },
          ],
        },

        {
          id: `l10-game`,
          type: `interactive`,
          format: `investigation`,
          guideText: `Investigation time, {name}. Four businesses. For each one, identify what kind it is: TRADITIONAL BUSINESS (profit-focused, maybe donates to charity on the side), SOCIAL ENTREPRENEURSHIP (impact baked into the business model), or NONPROFIT (all surplus goes to the mission)?\n\nOne is sneakier than it looks.`,
          options: [
            { id: `traditional`,  label: `Traditional Business`,    color: `#60A5FA`, description: `Profit-focused. Might donate to charity or sponsor causes, but mission is making money.` },
            { id: `social`,       label: `Social Entrepreneurship`, color: `#34D399`, description: `Impact built into the business model. Makes money AND creates measurable impact as part of normal operations.` },
            { id: `nonprofit`,    label: `Nonprofit`,                color: `#A78BFA`, description: `All surplus goes to the mission, not to owners. Funded by donations, grants, or service revenue.` },
          ],
          cases: [
            {
              id: `case-1`,
              caseTitle: `Business #1: A local fast-food chain`,
              clues: [
                { text: `Sells burgers and fries to customers in the city.` },
                { text: `Donates 1% of profits to a children's hospital each year.` },
                { text: `The main goal is selling food profitably; the donation is a side gesture.` },
              ],
              correctAnswer: `traditional`,
              realWorldExample: `Most regular businesses make some charitable donations.`,
              explanation: `Donating is nice, but the business model itself isn't designed for impact. Pure traditional business with charity on the side. This is most for-profit companies.`,
            },
            {
              id: `case-2`,
              caseTitle: `Business #2: Warby Parker`,
              clues: [
                { text: `Sells eyeglasses to customers worldwide at moderate prices.` },
                { text: `For every pair sold, one pair is donated to someone who needs vision care.` },
                { text: `Customers can't separate the buying from the donating — they happen together.` },
              ],
              correctAnswer: `social`,
              realWorldExample: `Warby Parker is one of the most successful social entrepreneurship companies.`,
              explanation: `Impact built INTO the business model. Every purchase creates a donation. Pure social entrepreneurship. This is the model that made the company famous and grew it to billions of dollars in value.`,
            },
            {
              id: `case-3`,
              caseTitle: `Business #3: The American Red Cross`,
              clues: [
                { text: `Provides disaster relief, blood services, and emergency support.` },
                { text: `Funded primarily through donations and grants.` },
                { text: `Any "surplus" funds go entirely back into expanding the mission, not to owners.` },
              ],
              correctAnswer: `nonprofit`,
              realWorldExample: `The Red Cross is one of the world's largest nonprofits.`,
              explanation: `Surplus goes to mission, not owners. Funded by donations and grants. Pure nonprofit. Major humanitarian work runs through organizations like this one.`,
            },
            {
              id: `case-4`,
              caseTitle: `Business #4 — The Tricky One: Coreverse Academy`,
              clues: [
                { text: `Caro is building it as a real business that families pay subscription fees to use.` },
                { text: `The business model is specifically designed to help kids develop consciousness alongside academics.` },
                { text: `Both goals (making money AND creating impact) shape every decision.` },
              ],
              correctAnswer: `social`,
              realWorldExample: `Coreverse is a real example of social entrepreneurship in education.`,
              explanation: `Tricky because Coreverse is for-profit (families pay subscriptions). Some kids might assume that makes it "just a business." But the business MODEL itself is designed for impact. The product (lessons + AI tutoring + community) and the mission (raising consciousness in kids alongside academics) can't be separated. Both are necessary. Both matter equally. Pure social entrepreneurship. Lesson: social businesses can absolutely be for-profit. The defining feature is whether the impact is BAKED INTO the business model, not whether profits exist.`,
            },
          ],
        },

        {
          id: `l10-quiz`,
          type: `quiz`,
          guideText: `Let's see what stuck, {name}.`,
          questions: [
            { id: `l10-q1`, format: `multiple-choice`,
              question: `What is SOCIAL ENTREPRENEURSHIP?`,
              options: [
                `Just charity work`,
                `Starting a business specifically to solve a social or environmental problem, while also being financially sustainable`,
                `A type of nonprofit`,
                `Donating profits to charity`,
              ],
              correctIndex: 1,
              explanation: `Social entrepreneurs build real businesses where the BUSINESS MODEL itself creates impact. Not charity on the side. The product, customers, and operations all serve a bigger purpose. Examples: TOMS Shoes, Warby Parker, Patagonia, Grameen Bank.` },

            { id: `l10-q2`, format: `multiple-choice`,
              question: `How is social entrepreneurship DIFFERENT from charity?`,
              options: [
                `Same thing`,
                `Social entrepreneurs run sustainable BUSINESSES that earn revenue. Charities mostly depend on donations to operate.`,
                `Charities make more money`,
                `Social entrepreneurs are richer`,
              ],
              correctIndex: 1,
              explanation: `Charities are nonprofits that mostly depend on donations. Social entrepreneurs run real businesses that earn money AND create impact. The business model has to be financially sustainable, AND it has to genuinely solve the problem it claims to.` },

            { id: `l10-q3`, format: `multiple-choice`,
              question: `What's the TRIPLE BOTTOM LINE?`,
              options: [
                `Three different prices`,
                `Measuring business success on three dimensions: profit, people (social impact), and planet (environmental impact)`,
                `Three companies in one`,
                `Three taxes`,
              ],
              correctIndex: 1,
              explanation: `Traditional businesses measure success by profit alone. Social entrepreneurs add people and planet. A company succeeding only on profit while damaging communities or the environment isn't really "successful" in this view. Real success means winning all three.` },

            { id: `l10-q4`, format: `multiple-choice`,
              question: `What is a B-CORP?`,
              options: [
                `A bee company`,
                `A "Benefit Corporation" — a business that meets specific standards for environmental and social performance, in addition to making profit`,
                `Just a regular company`,
                `A nonprofit`,
              ],
              correctIndex: 1,
              explanation: `B-Corps are certified businesses meeting strict environmental, social, and governance standards. Patagonia, Ben & Jerry's, and over 6,000 other companies are B-Corps. The certification helps customers identify businesses committed to the triple bottom line.` },

            { id: `l10-q5`, format: `true-false`,
              question: `True or false: Coreverse Academy is itself an example of social entrepreneurship — it's a real business AND it's specifically designed to help kids develop consciousness alongside academics.`,
              correctAnswer: true,
              explanation: `True. Coreverse is for-profit (families pay subscriptions), but the business model is specifically designed to create impact. Both goals shape every decision. The product and the mission can't be separated. This is exactly what social entrepreneurship looks like in practice.` },

            { id: `l10-q6`, format: `multiple-choice`,
              question: `Who founded GRAMEEN BANK and pioneered microloans?`,
              options: [
                `Nobody specific`,
                `Muhammad Yunus, who won the Nobel Peace Prize in 2006 for his work`,
                `Bill Gates`,
                `A government agency`,
              ],
              correctIndex: 1,
              explanation: `Muhammad Yunus founded Grameen Bank in Bangladesh, pioneering small loans (microloans) to poor entrepreneurs (often women) who couldn't access regular banks. The model helped millions escape poverty. Yunus won the Nobel Peace Prize in 2006 for this work.` },

            { id: `l10-q7`, format: `multiple-choice`,
              question: `What's the EXTRA QUESTION social entrepreneurs ask beyond the regular four business questions?`,
              options: [
                `How can we cut costs?`,
                `What GOOD does this create beyond profit? — the social or environmental impact built into the business`,
                `What's our logo?`,
                `Where do we hire from?`,
              ],
              correctIndex: 1,
              explanation: `Regular businesses ask: problem, customer, revenue, costs. Social entrepreneurs add a fifth: what good does this create beyond profit? The answer doesn't have to be huge. It just has to be real and measurable.` },

            { id: `l10-q8`, format: `multiple-choice`,
              question: `Can a small business or even a kid be a SOCIAL ENTREPRENEUR?`,
              options: [
                `No, only big companies`,
                `Yes — many social businesses start small, like a teen tutoring at sliding-scale prices or a bakery donating day-old bread`,
                `Only adults`,
                `Only in big cities`,
              ],
              correctIndex: 1,
              explanation: `You don't need to be Patagonia or TOMS. Small actions consistently done add up. Many social businesses start tiny and local. What matters is that impact is built INTO how the business works, not just an occasional side gesture.` },
          ],
        },

        {
          id: `l10-reflection`,
          type: `reflection`,
          guideText: `Before we wrap, {name}, pick ONE question and actually answer it. Your response gets saved, and I'll remember it next time we talk.`,
          prompts: [
            { id: `r1`, text: `Pick ONE problem in the world that bothers you. What kind of business could help with it? Could the business also make money?` },
            { id: `r2`, text: `If you ran a business someday, would you focus only on profit, or on all three (profit, people, planet)? Why?` },
            { id: `r3`, text: `Coreverse is a social-entrepreneurship business. What's an impact it's trying to create that goes beyond just making money?` },
            { id: `r4`, text: `Some people think you can't make BIG money AND do real good at the same time. After this lesson, do you agree, or do you see another way?` },
          ],
        },

        {
          id: `l10-realworld`,
          type: `real-world`,
          guideText: `Social entrepreneurship is one of the fastest-growing parts of modern business. More customers are choosing companies that align with their values. More employees want to work for companies doing real good. More investors are funding businesses with measurable impact. The old idea that business and good values had to be separate is fading. Your generation will probably be the first where social entrepreneurship is the norm rather than the exception. Ace's bonus: even if you never run your own business, you'll be a CUSTOMER for thousands of businesses in your life. Choosing where to spend your money is itself a form of impact.`,
          familyAdventure: `Family Impact Audit. As a family, look at five products or services you buy regularly. For each one, ask: do we know anything about the company's impact beyond profit? Do they pay workers fairly? Are they environmentally responsible? Are they socially involved? Pick ONE category where you could switch to a more impact-focused option. Doesn't have to be perfect. Just intentional.`,
          creativePrompt: {
            intro: `Imagine you're starting a social-entrepreneurship business today. Write your pitch to potential customers.`,
            floor: `Write at least 5 sentences. Cover what your business does, what problem it solves, and what impact it creates beyond profit.`,
            stretch: `Write 8 to 10 sentences. Include the four business questions (problem, customer, revenue, costs) AND the fifth (impact beyond profit). Show how impact and revenue are connected.`,
            open: `Write as much as you want. Build a full pitch. Cover your business model in detail, the customer you serve, how revenue and impact work together, why this approach is better than just charity OR just business, and what your triple-bottom-line goals are.`,
            frames: [
              `My business is ___, and we solve the problem of ___.`,
              `Every time a customer buys, we ___ (impact).`,
              `Our customers are ___, and they choose us because ___.`,
              `We measure success on three things: profit, people, and ___.`,
              `If we succeed, the world will be different because ___.`,
            ],
          },
        },

        {
          id: `l10-celebration`,
          type: `celebration`,
          message: `Great work, {name}. You can now define social entrepreneurship, name real examples, explain the triple bottom line, and see how Coreverse itself is a social-entrepreneurship company. Next lesson: a concept that decides whether even GREAT businesses survive their first years. CASH FLOW. — Ace.`,
          badge: `social-entrepreneur`,
          badgeName: `Social Entrepreneur`,
          xpEarned: 75,
        },
      ],
    },
  ],
};

export default MONEY_UE_L10;

// ─── Dev asset check ──────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const screens = MONEY_UE_L10.lessons[0].screens;
  const mags = screens.filter(s => s.type === 'magazine').length;
  const game = screens.find(s => s.type === 'interactive')?.cases?.length ?? 0;
  const quiz = screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  const refl = screens.find(s => s.type === 'reflection')?.prompts?.length ?? 0;
  const totalVocab = screens.filter(s => s.type === 'magazine').reduce((sum, s) => sum + (s.vocab?.length || 0), 0);
  console.log(`[LESSON-MONEY-UE-L10 v1] Loaded with ${mags} magazine sections, ${totalVocab} vocab terms, ${game} game cases, ${quiz} quiz Qs, ${refl} reflection prompts`);
}
