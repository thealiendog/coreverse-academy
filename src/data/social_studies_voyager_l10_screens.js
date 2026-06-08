// ─────────────────────────────────────────────────────────────────────────────
// SOCIAL STUDIES VOYAGER  |  L10 — International Economics: Trade, Globalization, and Development
// Age band : voyagers (11-12)   Guide: atlas (Bear)
// Standards: C3 Framework (Economics/Global) — D2.Eco, D2.Geo
// Interaction: PERSPECTIVES (debate). Paragraphs ~330ch. 3 vocab/section.
// ─────────────────────────────────────────────────────────────────────────────

const VERSION = "voyager-ss-l10-v1";

const SOCIAL_STUDIES_VOYAGER_L10 = {
  ageBand: `voyagers`,
  subjectId: `social_studies`,
  guide: `atlas`,

  lessons: [
    {
      id: `social-studies-11-12-10`,
      title: `International Economics: Trade, Globalization, and Development`,
      duration: 35,
      xpReward: 75,
      badge: `global-trader`,
      badgeName: `Global Trader`,

      screens: [
        {
          id: `l10-welcome`,
          type: `welcome`,
          guideText: `{name}, no economy exists in isolation. The global trading system connects nearly every country on Earth, and the rules of that system — who benefits, who loses, and who gets to decide — are deeply contested. Comparative advantage, trade deficits, the IMF and World Bank, development economics: these aren't technical footnotes. They determine the wealth or poverty of billions. This lesson is the framework you need.`,
          headline: `International Economics: Trade, Globalization, and Development`,
          subtitle: `Why countries trade, what globalization has done, and the puzzle of why some nations stay poor while others grow rich. A debate among many voices.`,
          visual: `/voyager-assets/social-studies/l10-welcome.webp`,
        },

        {
          id: `l10-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Why Countries Trade`,
          paragraphs: [
            `Trade exists because no country can efficiently produce everything. The core economic idea is comparative advantage: specialize in what you make at relatively lower cost and trade for the rest. Even if one country is better at producing everything, both gain more from specializing and trading than from trying to do it all.`,
            `The classic example: imagine Country A can produce both wine and cloth more efficiently than Country B, but is relatively much better at wine. If A focuses on wine and B on cloth, and they trade, both end up with more of both goods than if each tried to produce everything. The gains from specialization are real: trade expands what both can consume beyond what each could produce alone.`,
            `In practice, trade is driven by differences in resources, labor costs, technology, and climate. Some countries have oil or minerals; others have skilled labor or advanced technology. Global supply chains mean a single product, a car or a smartphone, may use parts from dozens of countries before assembly. Trade today is deeply integrated production across borders.`,
          ],
          image: `/voyager-assets/social-studies/l10-s1-trade.webp`,
          imageCaption: `Trade exists because no country can efficiently produce everything. The core idea is COMPARATIVE ADVANTAGE: a country should specialize in what it can make at relatively lower cost and trade for the rest. Even if one country is better at producing everything, both gain more from specializing and trading than from doing it all. Example: if Country A is relatively much better at wine and Country B at cloth, both end up with more of both goods by specializing and trading than by each producing everything. In practice, trade is driven by differences in resources, labor costs, technology, and climate. GLOBAL SUPPLY CHAINS mean a car or phone may use parts from dozens of countries before assembly, trade today is deeply integrated production across borders.`,
          vocab: [
            { word: `comparative advantage`,
              definition: `The principle that countries gain more from specializing in what they produce at relatively lower cost and trading for the rest, even if one country is more efficient at producing everything.`,
              audioPrompt: `Comparative advantage, {name}, is the economic logic behind why trade makes sense even between unequal countries. It says each country should specialize in what it produces at relatively lower cost compared to its other options, and trade for everything else. Even if one country can do everything better, both gain from specialization and exchange. It's a bit counterintuitive, but it's one of the most powerful insights in all of economics. Can you think of an everyday example of comparative advantage in your own life, where it makes sense to specialize and trade even if you could do something yourself?` },
            { word: `global supply chains`,
              definition: `The international networks through which goods are produced using materials, parts, and labor from many countries, making modern production deeply cross-border and interdependent.`,
              audioPrompt: `Global supply chains, {name}, are the invisible networks behind nearly everything you own. Your phone may have chips from Taiwan, rare minerals from Congo, assembly in China, software from the U.S. and India. Your clothes may involve cotton from Colombia, weaving in Bangladesh, finishing in Vietnam. Trade today isn't countries swapping finished products; it's deeply integrated production across borders. This makes things efficient, but also fragile, as the pandemic showed when one disruption rippled everywhere. How does knowing this change how you see the objects around you?` },
            { word: `gains from trade`,
              definition: `The economic benefit both parties in an exchange receive: specialization and trade allow each country to consume more of every good than it could produce alone.`,
              audioPrompt: `The gains from trade, {name}, are the real economic benefits that flow from specialization and exchange. When countries focus on what they're relatively best at and trade for the rest, both end up with more to consume than if each tried to produce everything itself. This is the basic case for international trade, and it's genuinely powerful. The controversy is that these aggregate gains are not evenly distributed: some industries, workers, and communities gain enormously while others are devastated. Understanding both the real gains and the real costs is what makes the trade debate so hard and so important.` },
          ],
        },

        {
          id: `l10-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Free Trade And Its Critics`,
          paragraphs: [
            `Economists broadly favor free trade, the removal of tariffs, quotas, and other barriers to goods flowing across borders. The argument: free trade allows specialization, reaps gains from comparative advantage, lowers prices, and raises living standards over time.`,
            `But free trade has real critics. When cheaper imports compete with domestic industries, workers lose jobs. Communities built around steel, textiles, or manufacturing can collapse. The gains from trade are diffuse (everyone pays a bit less), while the losses are concentrated and severe (specific workers and towns are devastated). The aggregate is positive; the distribution is deeply unequal.`,
            `Protectionism shields domestic industries with tariffs and barriers. Its defenders argue it preserves jobs, gives developing countries time to build industries before facing full global competition, and protects national security. Its critics argue it raises prices, reduces efficiency, and invites retaliation, leading to trade wars where everyone ends up worse off.`,
          ],
          image: `/voyager-assets/social-studies/l10-s2-free-trade.webp`,
          imageCaption: `Economists broadly favor FREE TRADE, removing tariffs (taxes on imports), quotas, and other barriers. The argument: free trade enables specialization and comparative advantage, lowers consumer prices, and raises living standards over time. It underpinned decades of trade agreements. But critics point out that when cheaper imports compete with domestic industries, workers in those sectors LOSE JOBS and communities collapse. The GAINS from trade are real but DIFFUSE (everyone pays a bit less); the LOSSES are concentrated and severe (specific workers and towns are devastated). PROTECTIONISM, shielding domestic industries with tariffs, is the alternative: it preserves jobs and gives developing countries time to build industries, but raises prices for consumers and risks trade wars.`,
          vocab: [
            { word: `free trade`,
              definition: `An approach to international commerce that removes tariffs, quotas, and barriers to allow goods to flow freely across borders, enabling specialization and gaining from comparative advantage.`,
              audioPrompt: `Free trade, {name}, is the policy of removing tariffs, quotas, and other barriers so goods flow freely between countries. The economic case is strong: it allows specialization, lowers prices, and produces gains from comparative advantage. Decades of trade agreements lowered barriers worldwide and helped grow global commerce enormously. The criticism is equally real: free trade's benefits are diffuse (a bit cheaper for everyone), while its costs are concentrated (entire industries and communities wiped out). How do you weigh widespread modest gains against severe harm to specific people?` },
            { word: `protectionism`,
              definition: `The policy of using tariffs, quotas, and other barriers to shield domestic industries from foreign competition. Defenders say it preserves jobs; critics say it raises prices and invites trade wars.`,
              audioPrompt: `Protectionism, {name}, is the opposite of free trade: using tariffs and quotas to shield domestic industries from cheaper foreign competition. Its defenders argue it protects jobs, preserves strategic industries, and gives developing countries time to build competitive sectors before facing full global competition. Its critics argue it makes consumers pay more, reduces efficiency, and risks retaliation from trading partners, triggering trade wars where everyone ends up worse off. Both arguments have real historical support. Where do you think the right balance lies between open markets and protecting your own workers?` },
            { word: `diffuse gains`,
              definition: `The distributional reality of trade: gains (lower prices, more variety) are spread thinly across many people, while costs (job losses, community collapse) fall heavily on specific workers and places.`,
              audioPrompt: `Concentrated costs and diffuse gains, {name}, is one of the most important concepts in understanding why trade generates such heated politics even when economists agree on the aggregate benefits. When a factory moves abroad, the gain (cheaper goods) is shared across millions of consumers who each save a tiny amount. But the loss falls entirely on the workers who lose their jobs and the community whose economy collapses. Politically, the losers feel their pain intensely and organize; the winners barely notice the gain. This asymmetry explains why trade policy is so politically explosive, even when the economics seem clear.` },
          ],
        },

        {
          id: `l10-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Globalization: Promise And Reality`,
          paragraphs: [
            `Globalization is the deepening integration of economies, cultures, and people through trade and information flows. Since the 1980s it accelerated, driven by falling trade barriers and digital technology. Hundreds of millions, especially in East and South Asia, were lifted from poverty as their economies integrated into global production networks.`,
            `But globalization's benefits have been uneven. In wealthy countries, manufacturing workers faced devastating competition and wages stagnated while profits soared. In developing countries, some (particularly East Asia) used export-led growth to develop rapidly; others, commodity-dependent, remained vulnerable to price swings, with little prosperity reaching the poor.`,
            `Latin America's experience is complex. Some industries benefited from trade. But commodity dependence (oil, copper, soybeans, coffee) left many on a boom-bust roller coaster tied to global price cycles. Financial integration brought growth but also sudden outflows that triggered crises. The debate: engine of shared prosperity, or a system that enriches some while leaving others exposed.`,
          ],
          image: `/voyager-assets/social-studies/l10-s3-globalization.webp`,
          imageCaption: `GLOBALIZATION is the deepening integration of economies, cultures, and people through trade, investment, migration, and information flows. Since the 1980s-90s it accelerated dramatically: hundreds of millions, especially in East and South Asia, were lifted from poverty as economies integrated into global production networks. But benefits have been UNEVEN. In wealthy countries, manufacturing workers faced devastating competition; wages stagnated for the working class while corporate profits and high-skill wages soared. In developing countries, some (especially East Asia) used export-led growth to develop rapidly; others, especially commodity-dependent nations, remained vulnerable to price swings. LATIN AMERICA's story is complex, some industries benefited, but commodity dependence and financial integration brought both growth and crises.`,
          vocab: [
            { word: `globalization`,
              definition: `The deepening integration of world economies, cultures, and people through trade, investment, migration, and information flows, accelerated since the 1980s.`,
              audioPrompt: `Globalization, {name}, is the process by which the world has become more deeply interconnected through trade, investment, communication, and migration. Since the 1980s it has accelerated dramatically: goods, money, ideas, and people move across borders faster than ever before. Hundreds of millions have been lifted from poverty as part of this process, especially in East and South Asia. But the benefits have been deeply uneven, raising fundamental questions about who globalization serves and who it leaves behind. When you hear a story about jobs moving abroad or a global financial crisis, you're seeing globalization's effects. Do you see it more as promise or as threat?` },
            { word: `export-led growth`,
              definition: `A development strategy in which a country uses exports as the engine of economic growth, producing goods for global markets rather than only for domestic consumption.`,
              audioPrompt: `Export-led growth, {name}, is the strategy several East Asian countries (Japan, South Korea, Taiwan, China) used to develop rapidly: focus your economy on producing goods for global markets, not just for domestic consumption. By selling to the world, countries earn foreign exchange, build industries, and over time develop the skills and capital to move into higher-value production. South Korea went from being one of the poorest countries in the 1950s to a wealthy high-tech economy in a few decades using this approach. But it requires favorable global trade conditions and strong government coordination. Why do you think not every developing country has been able to replicate this success?` },
            { word: `commodity dependence`,
              definition: `When a country's economy relies heavily on exporting a few raw materials whose global prices it cannot control, making it vulnerable to boom-bust cycles tied to world commodity markets.`,
              audioPrompt: `Commodity dependence, {name}, is when a country relies heavily on exporting raw materials like oil, copper, coffee, or soybeans, whose prices are set by global markets it cannot control. In boom years, commodity prices are high and revenues flow. When prices crash, entire economies can collapse. Many Latin American countries have experienced this cycle repeatedly: bonanzas followed by crises driven by global price movements entirely beyond their governments' control. Development economists argue that breaking out of commodity dependence by building manufacturing and services is one of the central challenges for developing nations. Why might it be so hard to make that transition?` },
          ],
        },

        {
          id: `l10-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `The Development Puzzle`,
          paragraphs: [
            `Why do some countries become wealthy while others stay poor? This is the central question of development economics, with no single answer. Factors matter: institutions (governance quality, rule of law, property rights), geography (ports, fertile land, disease burden), history (colonialism extracting wealth and leaving institutional damage), and policies (trade, investment, macro management).`,
            `One influential idea is the "poverty trap": very poor countries can't invest enough to grow because every dollar goes to survival. Without investment in infrastructure and education, productivity stays low; income stays low. Breaking out may require external help, foreign aid, or debt relief, to fund the initial investment that makes self-sustaining growth possible.`,
            `But aid has its own controversies. Some argue it creates dependency and props up corrupt governments. Others argue well-targeted aid, for vaccines, schools, and infrastructure, delivers real returns and that wealthy countries have a moral obligation to help. The honest answer: aid works sometimes and fails in others. Development is complex.`,
          ],
          image: `/voyager-assets/social-studies/l10-s4-development.webp`,
          imageCaption: `Why do some countries become wealthy while others stay poor? This is the central question of DEVELOPMENT ECONOMICS, with no single answer. Key factors: INSTITUTIONS (governance, rule of law, property rights, freedom from corruption); GEOGRAPHY (access to ports, fertile land, disease burden); HISTORY (especially COLONIALISM, which extracted wealth and left institutional damage); and POLICIES (trade, investment, macro management). One key idea: the POVERTY TRAP, very poor countries can't save or invest enough to grow because every dollar goes to survival, creating a self-reinforcing trap. Breaking it may require external help, foreign aid, investment, or debt relief. But AID is controversial: it can create dependency or prop up corrupt governments, though well-targeted aid genuinely helps.`,
          vocab: [
            { word: `institutions and development`,
              definition: `The role of governance quality, rule of law, property rights, and freedom from corruption in enabling (or blocking) economic development. Countries with strong institutions tend to develop faster.`,
              audioPrompt: `Institutions and development, {name}, refers to the enormous role that governance plays in economic growth. Countries with strong institutions, clear rule of law, property rights that people trust, and low corruption tend to develop faster and more sustainably. Countries where contracts aren't enforced, where property can be arbitrarily seized, and where corruption drains investment create environments where businesses can't thrive and citizens can't plan for the future. Many development economists now argue that building strong institutions is the single most important driver of long-run prosperity. Why might improving a country's institutions be so much harder than just sending more money?` },
            { word: `poverty trap`,
              definition: `The self-reinforcing cycle in which very poor countries can't invest enough to grow because resources are consumed by survival, so productivity stays low and income stays low.`,
              audioPrompt: `The poverty trap, {name}, is the name for a self-reinforcing cycle that keeps very poor countries stuck. When everyone's income goes to basic survival, there's nothing left to save or invest in education, infrastructure, or better tools. Without investment, productivity stays low. With low productivity, income stays low. The trap holds itself. Breaking out requires initial investment that poor countries can't generate from within, which is the argument for targeted foreign aid, debt relief, or international investment. But it raises the question: why don't all targeted aid efforts break the trap? What makes some escape and others stay stuck?` },
            { word: `legacy colonialism`,
              definition: `The lasting economic and institutional damage from colonial extraction, including weakened institutions, distorted economies, and wealth transfers that continue to affect former colonies' development prospects.`,
              audioPrompt: `The legacy of colonialism, {name}, is a crucial factor in understanding why some countries struggle to develop while others flourished. Colonial powers typically extracted wealth, distorted economies to serve colonial needs (single-crop agriculture, mineral extraction), undermined or destroyed local institutions, and left behind borders and governance structures designed for control rather than development. These legacies persist: institutions are weakened, economies remain commodity-dependent, and wealth transfers from colony to colonizer left permanent scars. For Latin America, which experienced centuries of Spanish and Portuguese colonialism, these legacies are deeply woven into current economic structures. How should this history shape how we think about global inequality today?` },
          ],
        },

        {
          id: `l10-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Before The Debate`,
          paragraphs: [
            `Pull it together. Trade flows from comparative advantage: countries gain more from specializing and trading than producing everything themselves. Free trade expands those gains; protectionism shields jobs but raises prices and risks trade wars. The distributional challenge: gains are diffuse, costs concentrated in specific workers.`,
            `Globalization lifted hundreds of millions from poverty, especially in East and South Asia, while devastating manufacturing workers in wealthy countries and leaving commodity-dependent nations, including many in Latin America, exposed to cycles beyond their control. Development is driven by institutions, geography, colonial history, and policy, and breaking poverty traps may require external assistance, though aid's effectiveness is debated.`,
            `These questions generate fierce disagreement. Should countries embrace open markets or protect workers? Has globalization served or exploited the developing world? Do wealthy countries owe aid or just fair rules? The debate screen presents five competing philosophies. Don't crown a winner. Form your own view. Onward.`,
          ],
          image: `/voyager-assets/social-studies/l10-s5-before.webp`,
          imageCaption: `Threads together. Trade flows from COMPARATIVE ADVANTAGE: specialization and exchange gains more than self-sufficiency. FREE TRADE expands those gains; PROTECTIONISM shields industries and jobs but raises prices and risks trade wars. The distributional challenge: gains from trade are DIFFUSE, costs are CONCENTRATED. GLOBALIZATION lifted hundreds of millions, especially in East/South Asia, while devastating manufacturing workers in wealthy countries and leaving commodity-dependent developing nations (including many in Latin America) exposed. DEVELOPMENT is shaped by institutions, geography, colonialism's legacy, and policy; breaking POVERTY TRAPS may need external help, though AID's effectiveness is debated. Five competing philosophies follow. Don't crown a winner.`,
          vocab: [
            { word: `the trade-development nexus`,
              definition: `The complex relationship between international trade and economic development, where trade can drive growth or entrench inequality depending on who controls the terms.`,
              audioPrompt: `The trade-development nexus, {name}, is the relationship between how countries engage with international trade and whether they develop or stay poor. Trade can be a powerful engine of development, as East Asia's export-led growth shows. But it can also entrench dependence if developing countries are stuck exporting cheap commodities while importing expensive manufactured goods with little path to move up the value chain. The terms of trade, who controls what gets produced and at what price, matter as much as whether trade happens at all. As you weigh the debate ahead, ask: whose terms are global trade rules written on?` },
            { word: `free trade`,
              definition: `A debate about whether open international markets produce genuinely fair outcomes, or whether "free trade" as practiced has rules that favor wealthy countries and disadvantage developing ones.`,
              audioPrompt: `Fair trade versus free trade, {name}, is a debate about whether open international markets actually produce fair outcomes for all participants. Proponents of free trade argue that open markets benefit everyone through comparative advantage. Critics respond that "free trade" as actually practiced has rules written by wealthy countries that protect their own agriculture and manufacturing while demanding developing countries open up, a double standard that disadvantages poorer nations. Fair-trade advocates argue for rules that genuinely level the playing field. As you go into the debate, notice which perspectives are really arguing about the rules of the game, not just whether to play it.` },
            { word: `global inequality`,
              definition: `The vast and persistent gap in wealth and income between the world's richest and poorest countries, shaped by history, institutions, geography, and the terms of global economic integration.`,
              audioPrompt: `Global inequality, {name}, is the enormous gap between the world's richest and poorest countries, a gap that persists despite decades of globalization and development efforts. The richest countries have average incomes dozens of times higher than the poorest. This gap is shaped by history, colonialism, institutions, geography, and the terms on which countries integrate into the global economy. Some of the gap has narrowed as countries like China and India have grown rapidly; much of it remains, especially in sub-Saharan Africa and parts of Latin America. Is global inequality a problem that markets will eventually solve, or does it require deliberate intervention? That's what the debate ahead is about.` },
          ],
        },

        {
          id: `l10-perspectives`,
          type: `perspectives`,
          headline: `The Great Debate: How Should Countries Engage The Global Economy?`,
          intro: `{name}, should countries embrace open markets or protect workers and industries? Has globalization served the developing world or exploited it? Here are five thoughtful voices, each holding a real piece of the truth. Don't crown a winner. Understand the genuine tensions, and begin forming your own informed view about the global economy you're inheriting.`,
          perspectives: [
            {
              id: `p1`,
              voice: `The free-trade champion`,
              era: `A view on international economics`,
              stance: `Open markets, comparative advantage, and free trade produce the greatest prosperity for the greatest number over time.`,
              quote: `"Wherever free trade has been tried, living standards have risen. Closing markets off protects the few at the expense of the many."`,
              argument: `Economic history shows that countries that open their markets to trade and investment generally grow faster and achieve higher living standards than those that close off. Comparative advantage is real: specialization and trade allow countries to consume more than they could produce alone. Trade lowers prices for consumers, drives innovation through competition, and over decades raises living standards across the board. The gains are real and broadly shared, even if transitions are painful.`,
              evidence: `Decades of declining trade barriers correlating with global growth; East Asian countries' rapid development through export-led growth; lower consumer prices in open economies; economic research showing long-run welfare gains from trade liberalization.`,
              strengths_and_limits: `Strength: rightly identifies the real, substantial gains from trade and specialization that have contributed to historic reductions in global poverty. Limit: underweights the severe distributional costs of trade, the workers and communities devastated by competition, and glosses over the ways "free trade" rules have often favored powerful countries.`,
            },
            {
              id: `p2`,
              voice: `The worker protector`,
              era: `A view on international economics`,
              stance: `Free trade's aggregate gains don't help the workers it devastates; governments must protect their people and industries, not just GDP statistics.`,
              quote: `"When the factory closes and the town collapses, 'but GDP went up' is no comfort at all. Real people pay the real cost."`,
              argument: `Free trade produces aggregate gains that show up in economic statistics, but the costs fall on specific workers, communities, and regions in ways that no safety net has adequately addressed. Steel towns, textile regions, and manufacturing centers in wealthy countries have been devastated, and the promised retraining and new jobs often never arrived. Before opening markets further, governments must ensure that the people who bear the costs of trade are genuinely compensated and supported, not just told that efficiency gains justify their hardship.`,
              evidence: `Deindustrialization and community collapse in manufacturing regions of wealthy countries; persistent high unemployment in former industrial areas; evidence that worker retraining programs have been underfunded and largely ineffective; rising political backlash against trade agreements.`,
              strengths_and_limits: `Strength: takes seriously the concentrated, real human costs that free-trade advocates often minimize, and insists that aggregate gains must be matched with genuine support for those who bear the costs. Limit: protectionism as the solution raises prices for all consumers (including low-income ones) and reduces the economy's efficiency and long-run growth potential.`,
            },
            {
              id: `p3`,
              voice: `The development skeptic`,
              era: `A view on international economics`,
              stance: `Global trade rules have been written by and for wealthy countries; "free trade" as practiced often locks developing nations into disadvantageous positions.`,
              quote: `"The rules of the global economy were written when we weren't at the table. We play by their rules, on their terms, for their benefit."`,
              argument: `Wealthy countries preached free trade to developing nations while protecting their own agriculture and key industries. Trade agreements have often required developing countries to open their markets and abandon industrial policy, while wealthy countries maintained subsidies and protections. This has made it harder for poorer countries to develop the manufacturing base and industries they need, trapping them in commodity exports rather than allowing the kind of protected industrial development that wealthy countries themselves used to grow rich.`,
              evidence: `Agricultural subsidies in wealthy countries undercutting developing-world farmers; WTO rules limiting industrial policy that wealthy countries themselves used; historical examples of successful development (South Korea, Japan) using significant protectionism; commodity-dependent Latin American economies stuck in boom-bust cycles.`,
              strengths_and_limits: `Strength: honestly confronts the power asymmetry in global trade, noting that the rules weren't made by or for developing countries and have often constrained their development options. Limit: pure skepticism of global engagement doesn't provide an alternative development path; some of the most successful developing nations (East Asia) have engaged deeply with global markets.`,
            },
            {
              id: `p4`,
              voice: `The globalization reformer`,
              era: `A view on international economics`,
              stance: `Globalization is neither simply good nor bad; the goal is reforming its rules to distribute benefits more fairly and build genuine resilience.`,
              quote: `"Don't reverse globalization, reform it. Better rules, stronger safety nets, more voice for developing countries at the table."`,
              argument: `Global integration has produced real benefits that a return to closed economies would destroy. But the current system needs serious reform: stronger protections for workers and the environment in trade agreements, redistributing gains through stronger safety nets for displaced workers, giving developing countries more voice in setting global trade rules, and tackling the abuses (tax havens, intellectual property rules that block access to medicines, agricultural subsidies) that tilt the playing field. Reform, not reversal, is the goal.`,
              evidence: `Success of export-led development showing that engagement works; evidence of worker and environmental abuses in global supply chains; tax-haven costs to developing countries; IMF and World Bank reform debates; growing consensus among economists that inequality management matters as much as growth.`,
              strengths_and_limits: `Strength: acknowledges both the real gains from global integration and the real need for reform, charting a practical middle course between protectionism and naive free-market faith. Limit: "reform the rules" is easier to say than to achieve, since powerful actors who benefit from current rules resist change, and developing countries have limited leverage.`,
            },
            {
              id: `p5`,
              voice: `The development justice advocate`,
              era: `A view on international economics`,
              stance: `Global economic inequality is not natural or inevitable; it is partly the product of history and unjust rules, and rich countries owe the developing world more than "open markets."`,
              quote: `"The wealth gap between nations didn't arise from nowhere. History made it. Justice means more than just letting markets run."`,
              argument: `The wealth gap between rich and poor countries is not the result of natural differences in effort or ingenuity. It was shaped by centuries of colonialism that extracted wealth, destroyed institutions, and locked developing economies into commodity dependence. It is maintained by global economic rules that benefit wealthy nations. Justice requires not just fair trade rules but active redistribution, debt relief, climate financing for those least responsible for climate change, and recognition that the "developing" world is partly poor because the wealthy world made it so.`,
              evidence: `Historical evidence of colonial wealth extraction (including from Latin America); ongoing debt burdens from loans originally tied to unjust conditions; climate change costs falling on the least-emitting countries; the gap between rich-world trade rhetoric and actual subsidy and protection practices.`,
              strengths_and_limits: `Strength: honestly confronts the historical and ongoing injustices that shape global inequality, insisting on a moral and historical accounting that purely market-based frameworks ignore. Limit: focusing primarily on redistribution and reparations doesn't directly address institutional and policy reforms needed for developing countries to grow, and risks framing the question in ways that are politically unsustainable in wealthy countries.`,
            },
          ],
          synthesisPrompt: `After all five: where do YOU land? Should countries embrace free trade, protect their workers, or reform the global rules? Has globalization been more promise or betrayal for developing nations, and does history create obligations? Pick the tension that grips you most and reason it through. Which voice challenged you most? In 5-6 sentences.`,
          reflectionPrompt: `The global economy shapes your life, your job prospects, the price of everything you buy, and the opportunities of people across Latin America and around the world, in ways you never voted on. How does it feel to start understanding a system that reaches so deeply into every life?`,
        },

        {
          id: `l10-quiz`,
          type: `quiz`,
          headline: `Check your understanding`,
          questions: [
            {
              id: `q1`,
              type: `multiple-choice`,
              question: `What is "comparative advantage"?`,
              options: [
                `The principle that only the strongest country should produce any given good.`,
                `The idea that countries gain by specializing in what they produce at relatively lower cost and trading for the rest.`,
                `A measure of which country happens to have the most total natural resources available.`,
                `The overall military advantage that any larger and more powerful country automatically holds over all smaller ones.`,
              ],
              correctIndex: 1,
              explanation: `Comparative advantage is the principle that countries gain from specializing in what they can produce at relatively lower cost and trading for the rest, even if one country is more efficient at everything. The distractors describe dominance, resources, or military matters.`,
            },
            {
              id: `q2`,
              type: `multiple-choice`,
              question: `What is protectionism?`,
              options: [
                `A trade policy that removes all tariffs and barriers between countries.`,
                `A foreign-policy doctrine prioritizing military defense over diplomacy.`,
                `Using tariffs and other barriers to shield domestic industries from foreign competition.`,
                `A development strategy of exporting only finished goods, not raw materials.`,
              ],
              correctIndex: 2,
              explanation: `Protectionism uses tariffs, quotas, and other barriers to shield domestic industries from cheaper foreign competition, preserving jobs but raising prices and risking trade wars. The distractors describe free trade, foreign policy, or a different strategy.`,
            },
            {
              id: `q3`,
              type: `multiple-choice`,
              question: `What is the distributional challenge of free trade?`,
              options: [
                `Free trade creates no gains for anyone, so there is nothing to distribute.`,
                `Free trade benefits only developing countries and never wealthy or developed nations at all.`,
                `Trade gains are diffuse (spread across many), while costs are concentrated on specific workers and communities.`,
                `Free trade automatically distributes all goods perfectly and equally across every single one of all citizens.`,
              ],
              correctIndex: 2,
              explanation: `The distributional challenge is that trade's gains are spread thinly across all consumers (lower prices), while its costs fall heavily on specific workers and communities who lose jobs to cheaper imports, making the politics explosive even when aggregate benefits are real. The distractors deny the gains, limit them, or claim perfect distribution.`,
            },
            {
              id: `q4`,
              type: `multiple-choice`,
              question: `What is "commodity dependence" and why is it a development risk?`,
              options: [
                `When a country relies on importing manufactured goods from rich nations exclusively.`,
                `When a country's economy relies heavily on exporting raw materials whose global prices it cannot control.`,
                `When a country completely refuses to trade with any other nation in the world at all.`,
                `When a country consistently imports significantly more than it exports, thereby creating a trade deficit.`,
              ],
              correctIndex: 1,
              explanation: `Commodity dependence is when a country's economy relies heavily on exporting raw materials (oil, copper, coffee) whose global prices it cannot control, leaving it vulnerable to boom-bust cycles beyond its control. The distractors describe import reliance, autarky, or a trade deficit.`,
            },
            {
              id: `q5`,
              type: `multiple-choice`,
              question: `What is the "poverty trap" in development economics?`,
              options: [
                `A deliberate government policy designed specifically to keep all taxes on the poor intentionally and permanently high.`,
                `An official prison sentence that is given only to people who are completely unable to pay off their debts.`,
                `The self-reinforcing cycle in which very poor countries can't invest enough to grow because resources are consumed by survival.`,
                `A special type of trade barrier that is specifically designed and aimed only at the world's poorer countries.`,
              ],
              correctIndex: 2,
              explanation: `The poverty trap is the self-reinforcing cycle in which very poor countries can't save or invest enough to grow because every resource goes to survival, keeping productivity and income low. Breaking it may require external assistance. The distractors describe tax policies, legal penalties, or trade barriers.`,
            },
            {
              id: `q6`,
              type: `multiple-choice`,
              question: `What development strategy helped East Asian economies grow rapidly?`,
              options: [
                `Rejecting all international trade and producing everything domestically.`,
                `Depending entirely on foreign aid from wealthy nations.`,
                `Relying only on commodity exports like oil and copper.`,
                `Export-led growth, using exports as the engine of economic development.`,
              ],
              correctIndex: 3,
              explanation: `Export-led growth, using exports of manufactured goods as the economic engine, helped South Korea, Taiwan, Japan, and later China develop rapidly. The distractors describe autarky, aid dependence, or commodity reliance, which are not the East Asian model.`,
            },
            {
              id: `q7`,
              type: `multiple-choice`,
              question: `How does the legacy of colonialism affect development in former colonies?`,
              options: [
                `It has absolutely no lasting economic effect whatsoever, since colonialism ended so long ago.`,
                `It actually benefited former colonies enormously by carefully building up their infrastructure and local institutions.`,
                `It weakened institutions, distorted economies toward commodity exports, and left lasting structural disadvantages.`,
                `It helped developing countries by teaching them modern economic principles.`,
              ],
              correctIndex: 2,
              explanation: `Colonialism extracted wealth, distorted economies toward serving colonial needs (commodity exports), weakened or destroyed local institutions, and left lasting structural disadvantages that continue to affect development. The distractors deny the effects or reverse them. `,
            },
            {
              id: `q8`,
              type: `multiple-choice`,
              question: `What is a key criticism of how "free trade" has actually been practiced globally?`,
              options: [
                `Trade agreements have never reduced any tariffs anywhere in the world.`,
                `Wealthy countries have preached free trade while protecting their own agriculture and industries.`,
                `Free trade agreements have successfully made every single developing country wealthy and prosperous.`,
                `Developing countries have always written the rules of global trade agreements.`,
              ],
              correctIndex: 1,
              explanation: `A key criticism is that wealthy countries demanded developing nations open their markets while maintaining their own agricultural subsidies and industry protections, creating a double standard that constrained poorer nations' development options. The distractors deny trade's existence, reverse the outcome, or misstate who controlled the rules.`,
            },
            {
              id: `q9`,
              type: `true-false`,
              question: `True or false: Because free trade produces net economic gains in aggregate, it is always good for every individual, community, and country involved, so concerns about job losses from trade are economically unfounded.`,
              correctAnswer: false,
              explanation: `False, and this is one of the most important distinctions in international economics: the fact that free trade produces aggregate net gains does not mean it is good for every individual, community, or country involved, and concerns about job losses are not only economically founded but among the most significant policy challenges that trade creates. The key is the distinction between aggregate outcomes and distributional outcomes. When economists say free trade produces net gains, they mean that if you add up all the benefits (lower prices for consumers, more variety, efficiency gains from specialization) and subtract all the costs (job losses in import-competing industries, community economic damage, transition costs), the total is positive. This is the "gains from comparative advantage" that the lesson explains. But aggregate gains can coexist with severe losses for specific groups. The gains from trade are typically diffuse: lower prices are spread thinly across millions of consumers who each save a small amount. The losses from trade are typically concentrated: when a factory closes because of cheaper imports, the workers in that factory lose their jobs entirely, the local businesses that depended on their spending close, and the community's tax base collapses. These workers don't receive the lower prices other consumers do in the same way, because the jobs that generated their income are gone. This is the "concentrated costs, diffuse gains" problem at the heart of trade politics. Economically, the job losses are very real: economists have documented significant and lasting damage to manufacturing communities in wealthy countries from import competition, particularly from China's rise as an exporter. The promised retraining and reemployment of displaced workers has been largely inadequate and underfunded. So "concerns about job losses from trade are economically unfounded" is exactly wrong: these concerns are well-documented and significant. The more honest economic position is that free trade creates net gains AND real, serious distributional costs that must be addressed through policy (retraining, wage insurance, stronger social safety nets, regional investment). Saying "there are net gains" does not settle whether trade is good for everyone or whether the distributional consequences are acceptable. So the statement is false: aggregate gains from trade coexist with real, documented losses for specific workers and communities, making the distributional challenge one of the central economic and policy questions of our time.`,
            },
            {
              id: `q10`,
              type: `inference`,
              question: `A developing country is pressured by wealthy nations and international institutions to open its markets, remove protections for its young industries, and embrace free trade. Using the lesson, what is the most nuanced analysis of this situation?`,
              options: [
                `The wealthy nations are obviously right, because free trade always helps every country equally.`,
                `The developing country should refuse all trade and produce everything domestically.`,
                `This situation reflects genuine tension: free trade can drive growth but the pressure to open up may undermine the industrial policy developing countries need, and the rules being pushed were often not applied by wealthy countries during their own development, so the developing country's concern is economically grounded.`,
                `Developing countries should always do whatever international institutions advise.`,
              ],
              correctIndex: 2,
              explanation: `This reflects the development skeptic's genuine point: wealthy countries urging developing nations to adopt free trade often did not apply the same rules during their own development, and premature opening can undermine the industrial policy (temporary protection of new industries) that successful developers used. The situation involves real tension between the gains from trade and the asymmetric rules. The distractors either ignore the power dynamic, reject trade entirely, or defer blindly to institutions.`,
            },
          ],
        },

        {
          id: `l10-reflection`,
          type: `reflection`,
          headline: `Sit with this`,
          intro: `Pick the prompt that pulls at you most. Your answer is saved.`,
          prompts: [
            { id: `reflect-system`, category: `A system you're inside`, prompt: `The global economy shapes your life, your job prospects, the price of everything you buy, and the opportunities of people across Latin America and around the world, without your vote. How does it feel to start understanding a system that reaches so deeply into every life?` },
            { id: `reflect-surprise`, category: `What shifted`, prompt: `Before this lesson, "comparative advantage" and "globalization" may have been abstractions. What surprised you most, the distributional challenge of trade, Latin America's commodity dependence, or who wrote the rules? What changed in your thinking?` },
            { id: `reflect-tradeoff`, category: `The hardest trade tradeoff`, prompt: `Free trade produces aggregate gains but concentrates losses on specific workers and communities. How would you design a trade policy that keeps the gains while genuinely addressing the costs, and what would you be willing to sacrifice to make it work?` },
            { id: `reflect-heritage`, category: `Teaching the global economy`, prompt: `Caro, you're building social studies for conscious families with roots in Latin America. How would you help a child see that the global economy has personally shaped their heritage, through commodity cycles, colonial legacies, and trade rules, so economics feels like their story, not an abstraction?` },
            { id: `reflect-justice`, category: `History and obligation`, prompt: `The development justice advocate argues that global inequality reflects colonialism and unjust rules, not just differences in effort. What's the strongest version of that argument, and what would you say to someone who disagrees? Where do you actually land?` },
            { id: `reflect-critical`, category: `The hard question`, prompt: `If wealthy countries both preach free trade and protect their own agriculture and industries, what does that reveal about how global economic rules actually work, and what would genuinely fair global trade look like to you?` },
          ],
        },

        {
          id: `l10-real-world`,
          type: `real-world`,
          headline: `Take it into the world`,
          familyActivity: {
            title: `Trace the Global Economy in Your Home`,
            duration: `One afternoon`,
            description: `Turn an afternoon into a hands-on discovery of how the global economy runs through your everyday life. Start with comparative advantage: pick three everyday items your family uses (coffee, a phone, a piece of clothing) and research where each was made and why it was made there, not here. Notice the specialization. Then do "the label game": for fifteen minutes, check labels on clothing, food, electronics, and household items, and mark each country on a world map. See the global supply chain made visible. Explore gains and costs together: discuss a local industry that changed because of trade, a factory that closed, jobs that moved, an industry that grew because of exports. Who gained, who lost, and was anything done to support those who lost? Connect to Latin America: research one commodity that a Latin American country your family has roots in exports (coffee, oil, copper, soybeans, bananas) and trace its price history over ten years. See the boom-bust cycle. What happened in the country's economy when the price crashed? Trace the rules debate: look up one trade agreement (like NAFTA/USMCA, Mercosur, or a WTO agreement) and find one thing it required developing countries to do and one protection wealthy countries kept for themselves. Stage the five-voice debate using the five perspectives from the lesson applied to a real current trade dispute, with family members arguing as the free-trade champion, the worker protector, the development skeptic, the globalization reformer, and the development justice advocate. The goal is to move from seeing "trade" as an abstract concept to understanding the global economy as a real system you live inside, whose rules and outcomes shape your life and the lives of people in countries you care about.`,
          },
          projectOption: {
            title: `The Global Economy Analyst Project, 2 weeks (optional)`,
            duration: `2 weeks, ~40 minutes per session`,
            description: `Investigate a real international economic issue and analyze it from multiple perspectives, becoming someone who can engage global economic debates with genuine understanding. Week 1, choose and research a topic: pick a real international economic issue, a major trade agreement (NAFTA/USMCA, WTO disputes, China's trade practices), a development story (a country that used export-led growth to escape poverty, or one stuck in commodity dependence), or a specific aspect of globalization's effects (how supply chains work in a specific industry, how agricultural subsidies in wealthy countries affect farmers in developing ones, or the debt burden facing a specific developing country). Research it carefully: What are the economic fundamentals (comparative advantage, trade flows, development patterns)? Who gains and who loses? How does it connect to the distributional challenge of trade? What role has history, including colonialism or previous trade agreements, played? How does it affect Latin American countries specifically? Week 2, analyze through the five perspectives and form your own view: apply each of the five debate perspectives to your topic and analyze what each would say. Find real evidence supporting each view. Then form your own assessment: which perspective most honestly captures the situation, and what would genuinely good policy look like? What tradeoffs would it require? Produce your final piece, an analytical report, a multi-perspective slide deck, a policy brief, a documentary-style video, or a debate presentation, that explains the economic fundamentals, walks through the five perspectives with evidence, and presents your own reasoned judgment about how the global economy should work. The aim is to move beyond abstract debate to understanding a real international economic issue with genuine depth, connecting economics, history, and justice, the three threads that make international economics so consequential.`,
            offerToParent: `Parent: opt your child into the Global Economy Analyst Project. Investigating a real international economic issue, whether a trade agreement, a development story, or a specific dimension of globalization, and analyzing it using comparative advantage, distributional costs, development economics, and the perspectives of multiple stakeholders, directly develops C3 Framework economics and global concepts: international trade, comparative advantage, globalization, economic development, global inequality, and the intersection of economics and justice. Applying five genuine perspectives to a real issue, finding evidence for each, and forming a reasoned judgment builds critical thinking, economic literacy, and global awareness. It's rigorous, standards-aligned work that makes the global economy personally relevant, especially for families with roots in countries deeply affected by global trade and development dynamics.`,
          },
          identityQuestion: `If you become someone who understands comparative advantage and why trade happens, who sees the distributional costs that aggregate statistics hide, who can trace commodity dependence and colonial legacy in a country's economic story, and who can engage global trade and development debates from multiple informed perspectives, what kind of citizen of the world does that make you, one who sees the global economic system as a human creation with rules that can be changed, that someone who just accepts it as natural or inevitable never can?`,
        },

        {
          id: `l10-identity-hook`,
          type: `identity-hook`,
          headline: `Who is this lesson making you?`,
          prompt: `One sentence. No wrong answer.`,
          placeholder: `Someone who...`,
          examples: [
            `Someone who understands why trade happens and who really pays the costs.`,
            `A person who can see the global economy's rules as human choices, not natural laws.`,
            `Someone who connects their family's heritage to the real forces of global economics.`,
          ],
          saveKey: `identity_responses_social_studies_11_12_10`,
        },

        {
          id: `l10-celebration`,
          type: `celebration`,
          guideText: `{name}. You've just made sense of the global economic system that shapes nearly every price you pay, every job that exists, and the opportunities of billions of people around the world. You learned why trade happens at all, because comparative advantage makes specialization and exchange more productive than each country doing everything itself, and how global supply chains have made modern production deeply cross-border. You traced the distributional challenge that makes trade so politically explosive: aggregate gains are real but diffuse, while losses are concentrated and severe for specific workers and communities. You followed globalization's promise and its uneven reality, hundreds of millions lifted from poverty in East Asia while manufacturing workers in wealthy countries were devastated and commodity-dependent nations in Latin America were left exposed to cycles beyond their control. You grappled with the development puzzle, how institutions, history, colonial legacy, and policy interact to determine which countries break out of poverty and which stay trapped. And you weighed five genuine philosophies of how countries should engage the global economy, without being handed a single answer, because these are among the live political and ethical questions of your lifetime. Next, we step back from economics to look at the bigger political picture: comparative government, how different countries structure their power, and what we can learn by examining systems across the world. Onward, {name}. — Atlas`,
          badge: `global-trader`,
          badgeName: `Global Trader`,
          xpEarned: 75,
          competencies: [
            `Understands comparative advantage and why countries trade`,
            `Knows the case for free trade and the real arguments for protectionism`,
            `Grasps the distributional challenge: diffuse gains, concentrated costs`,
            `Understands globalization's uneven effects, including on Latin America`,
            `Knows what export-led growth and commodity dependence mean for development`,
            `Understands development's key drivers: institutions, geography, history, policy`,
            `Can engage global trade and development debates from multiple informed perspectives`,
          ],
          nextLessonPreview: {
            title: `Lesson 11: Comparative Government — Systems Around the World`,
            hook: `How different countries structure power, and what we learn by comparing them. A debate among many voices.`,
          },
        },
      ],
    },
  ],
};

export default SOCIAL_STUDIES_VOYAGER_L10;

if (import.meta.env?.DEV) {
  const l = SOCIAL_STUDIES_VOYAGER_L10.lessons[0];
  const mags = l.screens.filter((s) => s.type === `magazine`).length;
  const ps = l.screens.find((s) => s.type === `perspectives`)?.perspectives?.length ?? 0;
  const quiz = l.screens.find((s) => s.type === `quiz`)?.questions?.length ?? 0;
  console.log(`[LESSON-SS-VOYAGER-L10 ${VERSION}] "${l.title}" mags=${mags} perspectives=${ps} q=${quiz}`);
}
