// ─────────────────────────────────────────────────────────────────────────────
// HISTORY & WORLD VOYAGER  |  L04 — Economic Systems: Capitalism, Socialism, Communism
// Age band : voyagers (11-12)   Guide: lyra (Elephant)
// Standards: Coreverse Original — Comparative Economic Systems, Real Names
// CALIBRATED: Voyager spec v1.1 (May 2026)
// Interaction format: ARGUMENT BUILDER (market capitalism / social democracy / state socialism)
// ─────────────────────────────────────────────────────────────────────────────

const VERSION = "voyager-hw-l04-v1";

const HISTORY_VOYAGER_L04 = {
  ageBand: `voyagers`,
  subjectId: `history`,
  guide: `lyra`,

  lessons: [
    {
      id: `hw-11-12-04`,
      title: `Economic Systems: Capitalism, Socialism, Communism`,
      duration: 35,
      xpReward: 75,
      badge: `economic-systems-literate`,
      badgeName: `Economic Systems Literate`,

      screens: [
        {
          id: `l04-welcome`,
          type: `welcome`,
          guideText: `{name}, every society answers the same basic questions: what gets produced, how, and who gets it. Economic systems are the different answers humans have tried. Capitalism, social democracy, socialism, communism — these aren't just theories. They're arrangements that have been tried, with real consequences for real people. This lesson gives you the frameworks to evaluate them honestly.`,
          headline: `Economic Systems: Capitalism, Socialism, Communism`,
          subtitle: `Three serious positions. Real evidence, real failures, real stakes.`,
          visual: `/voyager-assets/history/l04-welcome.webp`,
        },

        {
          id: `l04-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `What An Economic System Actually Is`,
          paragraphs: [
            `Every society has to answer four basic questions. What gets produced (food, housing, healthcare, smartphones, weapons, art)? How does it get produced (who works, how labor is organized, what tools are used)? Who gets what (how the products of labor are distributed across the population)? And who decides all of the above (markets, governments, communities, central planners)? An economic system is a society's answers to these questions, embedded in institutions, laws, and cultural norms that most people never explicitly think about.`,
            `The questions look abstract until you see them concretely. In one society, healthcare is provided as a public good funded by taxes (Norway, Canada, UK). In another, healthcare is provided through private insurance markets (US). In one society, higher education is essentially free (Germany, France). In another, students borrow tens of thousands of dollars to attend (US, UK). Same question, different answers, different systems.`,
            `Capitalism, socialism, and communism are families of answers, not single fixed systems. Capitalism includes the heavily-regulated welfare capitalism of Denmark and the more market-driven capitalism of the contemporary US. Socialism includes the Nordic social democracies and the very different democratic socialism advocated by US figures like Bernie Sanders. Communism in its 20th-century forms (Soviet Union, Maoist China, Cuba) was substantially different from what 19th-century communists like Karl Marx envisioned. Lumping these together as if they were single systems obscures more than it reveals.`,
            `One framing for this lesson. The three positions you'll engage represent serious intellectual traditions with substantial defenders and substantial records. Capitalism (in some form) has produced the greatest reductions in absolute poverty in human history while also producing extreme inequality, exploitation, and ecological damage. Social democracy has produced some of the most prosperous and happiest societies ever measured while requiring political institutions that have been hard to build elsewhere. State socialism in its 20th-century forms produced both rapid industrialization in some places and catastrophic famines, gulags, and authoritarianism in others. Each tradition has real evidence on its side and real failures to reckon with.`,
            `One last framing before we work through the positions. You're a 12-year-old living in a specific economic system that shapes your daily life. You'll grow up to vote, work, and participate in economic institutions that this lesson asks you to think about critically. The questions aren't abstract; the answers shape what your life looks like and what's possible for billions of others.`,
          ],
          image: `/voyager-assets/history/l04-s1-systems.webp`,
          imageCaption: `An economic system answers four questions: what gets produced, how, who gets what, who decides. Capitalism, socialism, and communism are families of answers, not single systems. Each tradition has serious defenders and real records.`,
          vocab: [
            {
              word: `system is`,
              definition: `A society's answers to four questions: what gets produced (food, housing, healthcare, weapons, art); how (who works, how labor organized, what tools); who gets what (distribution across population); who decides (markets, governments, communities, central planners). Embedded in institutions, laws, cultural norms most people never explicitly think about. Capitalism, socialism, communism are families of answers, not single fixed systems. Capitalism ranges from Denmark's welfare capitalism to contemporary US market capitalism. Socialism ranges from Nordic social democracies to Bernie Sanders' democratic socialism. Communism in 20th-c forms (Soviet, Maoist, Cuban) differed substantially from Marx's vision. Each tradition has serious evidence and real failures.`,
              audioPrompt: `An economic system is a society's answers to four basic questions, {name}. What gets produced: food, housing, healthcare, smartphones, weapons, art. How does it get produced: who works, how labor is organized, what tools are used. Who gets what: how the products of labor are distributed across the population. And who decides all of the above: markets, governments, communities, central planners. These questions look abstract until you see them concretely. In one society, healthcare is provided as a public good funded by taxes, like Norway, Canada, the UK. In another, healthcare is provided through private insurance markets, like the US. Same question, different answers, different systems. Capitalism, socialism, communism are families of answers, not single fixed systems. Capitalism includes Denmark's heavily-regulated welfare capitalism and the more market-driven capitalism of the contemporary US. Socialism includes the Nordic social democracies and the democratic socialism advocated by US figures like Bernie Sanders. Communism in its 20th-century forms was substantially different from what 19th-century communists like Karl Marx envisioned.`,
            },
            {
              word: `families of answers`,
              definition: `Capitalism, socialism, and communism are each families of answers to the four basic economic questions, not single fixed systems. Lumping all versions of each together obscures real differences within each family.`,
              audioPrompt: `Families of answers is the crucial framing for understanding economic systems without oversimplifying them, {name}. Capitalism, socialism, and communism are not each a single system but families of answers to the four basic economic questions. Capitalism includes the heavily-regulated welfare capitalism of Denmark and the more market-driven capitalism of the contemporary United States. These are substantially different from each other in how much government regulation exists, how much redistribution occurs, how strong labor unions are, and how healthcare and education are provided. Yet both are capitalist because both rely primarily on private ownership of the means of production and competitive markets for allocation. Socialism includes the Nordic social democracies, which are really market economies with extensive democratic redistribution, and the very different democratic socialism advocated by US figures like Bernie Sanders. Communism in its 20th-century forms, the Soviet Union, Maoist China, Cuba, was substantially different from what 19th-century communists like Karl Marx envisioned. Lumping these together as if they were single systems obscures more than it reveals. The same is true for what gets called "capitalism" in contemporary political debate: a defender of Danish welfare capitalism and a defender of minimal-government libertarian capitalism are both "capitalists" but disagree about most specific policy questions. Recognizing these as families of answers rather than single fixed systems is the foundation for reading economic debates analytically.`,
            },
            {
              word: `who decides`,
              definition: `The fourth basic economic question every society answers: whether markets, governments, communities, or central planners determine what gets produced, how, and who gets what. Different answers produce different systems.`,
              audioPrompt: `Who decides is the fourth basic economic question that distinguishes economic systems most sharply, {name}. Every society has to answer four basic questions: what gets produced, how it gets produced, who gets what, and who decides all of the above. The first three questions are about outcomes; the fourth is about the mechanism that produces those outcomes. Markets as the decision mechanism produce outcomes through price signals: millions of individuals and firms making decisions based on prices, which aggregate dispersed information about supply and demand. Governments as the decision mechanism produce outcomes through political processes: elected officials, bureaucracies, and planning agencies making decisions about what to produce, how, and for whom. Communities as the decision mechanism produce outcomes through collective agreement: cooperative enterprises, communes, and communal arrangements making decisions through shared governance. Central planners as the decision mechanism produce outcomes through technical analysis: ministries and planning agencies allocating resources according to targets and models. In practice, every real economic system mixes these mechanisms. Even the most market-oriented capitalist economies use governments extensively for defense, infrastructure, rule of law, and some redistribution. Even 20th-century state socialist economies retained some market mechanisms. The question is the mix: who decides what, by what process, with what accountability. The disagreement between capitalism, social democracy, and socialism is substantially about which mix produces better outcomes for the people living under it.`,
            },
          ],
        },

        {
          id: `l04-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Position 1: Market Capitalism`,
          paragraphs: [
            `The first serious position is that markets, with property rights and voluntary exchange, allocate resources better than alternatives. The position has multiple versions, from classical liberal to libertarian, but the core claim is that prices in competitive markets carry information about supply and demand that no central planner can match, that voluntary exchange between consenting parties produces gains for both, and that markets produce growth, innovation, and rising standards of living in ways that planned economies cannot.`,
            `Adam Smith's The Wealth of Nations (1776) is the foundational text. Smith argued that individuals pursuing their own interest in competitive markets are led "as if by an invisible hand" to produce outcomes that benefit society. Specialization and trade make everyone more productive. Government interference in markets, beyond enforcing contracts and providing some public goods, tends to produce worse outcomes than markets alone.`,
            `Friedrich Hayek (Austrian, later Chicago) developed the position further in the 20th century. In The Road to Serfdom (1944), Hayek argued that central economic planning leads to authoritarianism because controlling the economy requires controlling people's choices. In The Use of Knowledge in Society (1945), Hayek argued that prices in markets aggregate information from millions of individuals in ways no planner can match: a price of wheat in Chicago reflects information about weather, demand, transportation, alternative grains, and a thousand other factors that no single mind could process.`,
            `Milton Friedman, also Chicago, applied the position in policy work that influenced governments around the world. Friedman argued for free trade, deregulation, school choice, and reduced government spending. His framework (with various critics) shaped much of late-20th-century US and global economic policy.`,
            `What capitalism has produced. Between 1820 and now, the share of humans living in extreme poverty (less than $2.15/day in 2017 prices) fell from over 80 percent to under 10 percent. This is the largest reduction in absolute poverty in human history. Most of it occurred in market-oriented economies. China's reduction in poverty since 1978 (around 800 million people lifted out of extreme poverty) happened during its shift toward market-oriented production, even under continued Communist Party rule. South Korea, Taiwan, Singapore, Chile (post-1973), and many others transformed from poverty to prosperity through market-oriented growth.`,
            `What capitalism has cost. Extreme inequality in wealth and income (Thomas Piketty's Capital in the 21st Century, 2013, documented how wealth concentrates over time when returns on capital exceed economic growth). Environmental destruction (climate change driven largely by fossil-fuel-based industrial capitalism). Labor exploitation (sweatshops, child labor, dangerous working conditions in factories supplying global markets). Cyclical financial crises (1929 Great Depression, 2008 global financial crisis). Capture of political institutions by concentrated wealth.`,
            `What capitalists say in response. The poverty reductions are real and unprecedented; no alternative system has matched them. Inequality matters less than absolute improvements in living standards. Environmental and labor problems are real but addressable through regulation within capitalism. Critics often compare actual capitalism to idealized alternatives; comparing it to actual socialism (Cuba, Venezuela, USSR) produces different conclusions.`,
          ],
          image: `/voyager-assets/history/l04-s2-capitalism.webp`,
          imageCaption: `Market capitalism: Smith 1776 + Hayek + Friedman. Markets allocate via prices; voluntary exchange produces gains; government interference produces worse outcomes. Real achievements: greatest poverty reduction in human history. Real costs: inequality (Piketty), environment, labor exploitation, financial crises.`,
          vocab: [
            {
              word: `market capitalism`,
              definition: `Position: markets with property rights and voluntary exchange allocate resources better than alternatives. Prices aggregate information no planner can match. Defenders: Adam Smith "Wealth of Nations" 1776 (invisible hand, specialization, gains from trade); Friedrich Hayek "Road to Serfdom" 1944 and "Use of Knowledge in Society" 1945 (planning leads to authoritarianism; prices aggregate dispersed knowledge); Milton Friedman (free trade, deregulation, school choice). Real record: 1820 to now, extreme poverty fell from over 80% to under 10% globally; China lifted around 800 million from extreme poverty since 1978 through market-oriented production; South Korea, Taiwan, Singapore, Chile transformed through market growth. Real costs: extreme inequality (Piketty "Capital in 21st Century" 2013); environmental destruction; labor exploitation; cyclical financial crises (1929, 2008); political capture.`,
              audioPrompt: `Market capitalism is the first serious position, {name}. Markets with property rights and voluntary exchange allocate resources better than alternatives. Prices in competitive markets carry information about supply and demand that no central planner can match. Adam Smith's The Wealth of Nations from 1776 is the foundational text. Smith argued that individuals pursuing their own interest in competitive markets are led as if by an invisible hand to produce outcomes that benefit society. Friedrich Hayek developed the position further in the 20th century. In The Road to Serfdom from 1944, Hayek argued that central economic planning leads to authoritarianism because controlling the economy requires controlling people's choices. Milton Friedman applied the position in policy work that influenced governments around the world. What capitalism has produced: between 1820 and now, the share of humans living in extreme poverty fell from over 80 percent to under 10 percent. This is the largest reduction in absolute poverty in human history. What capitalism has cost: extreme inequality, environmental destruction, labor exploitation, cyclical financial crises.`,
            },
            {
              word: `invisible hand`,
              definition: `Adam Smith's metaphor in "The Wealth of Nations" (1776) for how individuals pursuing their own interests in competitive markets are led to produce outcomes that benefit society as a whole, without intending to.`,
              audioPrompt: `The invisible hand is Adam Smith's famous metaphor from The Wealth of Nations in 1776, {name}, and it is the foundational image of market capitalism. Smith argued that individuals pursuing their own interest in competitive markets are led as if by an invisible hand to produce outcomes that benefit society. No central authority needs to coordinate production; the price system does it automatically. When a good is scarce, its price rises; rising prices attract more producers; production increases; scarcity diminishes. When demand falls, prices fall; production shifts elsewhere; resources go where they're valued more. Specialization and trade make everyone more productive than self-sufficiency would. Smith's insight was that this coordination happens without anyone designing it or intending it; it emerges from individual self-interest operating through competitive markets. This is what Friedrich Hayek formalized in his 1945 essay "The Use of Knowledge in Society": prices aggregate dispersed information from millions of individuals in ways no central planner could possibly match. A price of wheat in Chicago reflects weather conditions, transportation costs, alternative grains, consumer preferences, and thousands of other factors simultaneously; no planning ministry could process all of it. The invisible-hand claim is both empirically important (it explains much of how market economies coordinate) and contested (it assumes competitive markets with good information and clear property rights that don't always exist, and it says nothing about distribution of the gains from trade).`,
            },
            {
              word: `extreme poverty`,
              definition: `Living on less than $2.15 per day in 2017 prices. Between 1820 and now, the share of humans in extreme poverty fell from over 80% to under 10%, the largest reduction in absolute poverty in human history, occurring overwhelmingly in market-oriented economies.`,
              audioPrompt: `Extreme poverty is the concrete human measure by which market capitalism's record is most dramatically positive, {name}. Extreme poverty means living on less than $2.15 per day in 2017 prices; it means lack of reliable food, clean water, shelter, healthcare, and education. In 1820, over 80 percent of humans lived in extreme poverty. As of the most recent data, under 10 percent do. This is the largest reduction in absolute poverty in human history, and it occurred overwhelmingly in market-oriented economies. China's reduction in poverty since 1978 is the single largest: approximately 800 million people lifted from extreme poverty during China's shift toward market-oriented production, even under continued Communist Party rule. South Korea, Taiwan, Singapore, and Chile also transformed from poverty to prosperity through market-oriented growth during the late 20th century. Market capitalism's defenders regard this record as decisive: whatever capitalism's costs, no alternative system has matched this performance on lifting billions from destitution. Critics have several responses: much of the reduction happened in state-directed economies (China, South Korea, Singapore) rather than in laissez-faire market economies; the remaining extreme poor are the hardest to reach and markets alone may not reach them; absolute poverty reduction is real but extreme inequality within and between countries is also real and growing; environmental destruction from fossil-fuel capitalism may impose costs on future generations that dwarf current gains.`,
            },
          ],
        },

        {
          id: `l04-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Position 2: Social Democracy`,
          paragraphs: [
            `The second serious position is that markets work for many things but produce systematic failures that democratic governments must correct through regulation, public goods, and redistribution. The position accepts much of the capitalist analysis of markets while rejecting the conclusion that minimal government produces best outcomes. Markets work for producing many goods and services; they fail at providing healthcare to the sick, education to the poor, environmental protection, financial stability, and decent old age. Democratic governments must fill these gaps.`,
            `Karl Polanyi's The Great Transformation (1944) is one foundational text. Polanyi argued that markets are not natural features of human societies; they're created and maintained by political decisions. Treating land, labor, and money as ordinary commodities to be bought and sold produces social destruction that societies eventually push back against. The history of modern capitalism is the history of markets expanding and societies pushing back through unions, regulations, welfare states, and other counter-movements.`,
            `John Maynard Keynes, the British economist, transformed economic theory during the 1930s Great Depression with his General Theory of Employment, Interest and Money (1936). Keynes argued that capitalist economies are not self-correcting; they can stay in prolonged depression unless governments use spending and monetary policy to maintain demand. Most contemporary economists, including those who consider themselves capitalists, accept Keynesian insights about managing macroeconomic crises.`,
            `John Rawls's A Theory of Justice (1971) provided philosophical foundations. Rawls argued that just institutions should be designed from behind a "veil of ignorance": what would you choose if you didn't know which position in society you'd end up in? Rawls's answer: you'd choose institutions that protect basic liberties for all and that arrange inequalities to benefit the worst off. Democratic governments must redistribute to ensure those at the bottom benefit from social cooperation.`,
            `The Nordic model. The clearest real-world success of this position is the Nordic countries (Denmark, Sweden, Norway, Finland, Iceland). These are market economies with strong unions, universal healthcare, free higher education, paid parental leave, substantial unemployment insurance, and high taxes funding these public goods. They consistently rank among the happiest, most prosperous, and freest societies in the world (per the World Happiness Report, Economic Freedom Index, and most other measures). They are not socialist in the state-socialist sense; they're capitalist economies with extensive democratic redistribution.`,
            `What social democracy claims. Markets are powerful tools but require democratic governance to produce good outcomes. Public provision of healthcare, education, and old age security produces better results than market provision in those specific domains. Strong unions balance employer power over wages. Progressive taxation funds public goods without destroying market incentives. Democratic institutions can govern markets without becoming authoritarian.`,
            `Limits and critiques. The Nordic countries are small, ethnically relatively homogeneous, and have specific historical conditions that may not transfer. Social democracy has been hard to build in large diverse societies (the US has struggled to enact universal healthcare for decades). High taxation faces political resistance. Some critics from the right argue that social democracy produces dependency and reduces growth. Some critics from the left argue that social democracy preserves capitalism's exploitation rather than ending it.`,
          ],
          image: `/voyager-assets/history/l04-s3-social-democracy.webp`,
          imageCaption: `Social democracy: Polanyi 1944, Keynes 1936, Rawls 1971. Markets work for many things; democratic governments must correct systematic failures. Nordic model (Denmark, Sweden, Norway, Finland, Iceland) consistently ranks among happiest, most prosperous, freest. Limits: small, relatively homogeneous, hard to scale.`,
          vocab: [
            {
              word: `social democracy`,
              definition: `Position: markets work for many things but produce systematic failures (healthcare, education for poor, environment, financial stability, old age) that democratic governments must correct through regulation, public goods, and redistribution. Defenders: Karl Polanyi "The Great Transformation" 1944 (markets created and maintained by politics; societies push back when commodification expands); John Maynard Keynes "General Theory" 1936 (capitalist economies not self-correcting; government must maintain demand); John Rawls "A Theory of Justice" 1971 (veil of ignorance; protect basic liberties + arrange inequalities to benefit worst off). Real success: Nordic model (Denmark, Sweden, Norway, Finland, Iceland): market economies with universal healthcare, free higher education, paid parental leave, strong unions, high taxes; consistently top World Happiness Report, Economic Freedom Index. Limits: small, relatively homogeneous, hard to scale; high taxation faces resistance; critiqued from both right (dependency, growth) and left (preserves capitalism).`,
              audioPrompt: `Social democracy is the second serious position, {name}. Markets work for many things but produce systematic failures that democratic governments must correct. Karl Polanyi's The Great Transformation from 1944 is one foundational text. Polanyi argued that markets are not natural features of human societies; they're created and maintained by political decisions. John Maynard Keynes transformed economic theory during the 1930s Great Depression with his General Theory of Employment, Interest and Money from 1936. Keynes argued that capitalist economies are not self-correcting; they can stay in prolonged depression unless governments use spending and monetary policy to maintain demand. John Rawls's A Theory of Justice from 1971 provided philosophical foundations. Rawls argued that just institutions should be designed from behind a "veil of ignorance": what would you choose if you didn't know which position in society you'd end up in? You'd choose institutions that protect basic liberties for all and that arrange inequalities to benefit the worst off. The clearest real-world success is the Nordic model: Denmark, Sweden, Norway, Finland, Iceland. Market economies with strong unions, universal healthcare, free higher education, paid parental leave, high taxes funding public goods. They consistently rank among the happiest, most prosperous, and freest societies in the world.`,
            },
            {
              word: `Nordic model`,
              definition: `The economic systems of Denmark, Sweden, Norway, Finland, and Iceland: market economies with strong unions, universal healthcare, free higher education, paid parental leave, and high taxes funding extensive public goods. They consistently rank at the top of happiness, freedom, and prosperity indices.`,
              audioPrompt: `The Nordic model is the clearest real-world success of the social-democratic position, {name}. Denmark, Sweden, Norway, Finland, and Iceland are market economies: they have private ownership of the means of production, profit-seeking firms, and competitive markets allocating most goods and services. But they combine market economies with strong unions that balance employer power over wages, universal healthcare funded through taxation, free higher education, paid parental leave and childcare, substantial unemployment insurance, and progressive taxation funding all of these public goods. The result, consistently measured: these countries rank at or near the top of the World Happiness Report, near the top of the Economic Freedom Index, near the top of social mobility measures, near the top of education and health outcomes. They are not socialist in the state-socialist sense and they are not purely laissez-faire capitalist; they are social democracies in the technical sense of combining market economies with extensive democratic redistribution. The limits of the model are real: these countries are small, with populations between 5 and 10 million, and they are relatively ethnically homogeneous by historical accident. Social democracy in this form has been difficult to build in large, diverse societies; the United States has struggled to enact universal healthcare for decades despite decades of advocacy. Whether the Nordic model can be scaled, or adapted to different conditions, remains genuinely contested among economists and political scientists.`,
            },
            {
              word: `veil of ignorance`,
              definition: `John Rawls's thought experiment in "A Theory of Justice" (1971): design just institutions as if you didn't know which position in society you'd occupy. Rawls concluded you'd choose to protect basic liberties for all and arrange inequalities to benefit the worst off.`,
              audioPrompt: `The veil of ignorance is John Rawls's foundational thought experiment in "A Theory of Justice" from 1971, {name}, and it provides philosophical foundations for the social-democratic position. The thought experiment asks: what principles would you choose to govern a society if you didn't know which position in that society you'd end up in? Behind the veil of ignorance, you don't know whether you'll be born rich or poor, talented or disabled, in a majority or minority group. From this impartial position, what principles would you choose? Rawls argued you would choose two principles. First, equal basic liberties for all: freedom of speech, religion, conscience, and political participation. Second, the difference principle: social and economic inequalities are acceptable only if they benefit the least-advantaged members of society. This second principle is the philosophical foundation for redistribution. Markets can produce gains for everyone on average while making the worst-off worse off; Rawls's framework says that's not just distribution regardless of the average gain. Social democracy draws on this argument to justify progressive taxation, universal public services, and minimum standards: not as charity but as what justice requires when designed from an impartial perspective. Karl Polanyi's argument in The Great Transformation from 1944 works alongside Rawls: Polanyi argued that markets are not natural features of human societies but are created and maintained by political decisions, and that treating land, labor, and money as ordinary commodities produces social destruction that societies push back against through counter-movements including unions, regulations, and welfare states. Keynes added that even well-functioning market economies are not self-correcting and can stay in prolonged depression without government action to maintain demand.`,
            },
          ],
        },

        {
          id: `l04-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Position 3: Socialism And Communism`,
          paragraphs: [
            `The third serious position is that capitalism's failures are not bugs to be patched but inherent contradictions that produce systematic injustice, requiring transformation of who owns the means of production. The position has multiple branches: democratic socialism (collective ownership achieved through democracy), revolutionary socialism (achieved through revolution), and various forms of communism (in Marx's vision, an eventual stateless classless society; in 20th-century practice, state-controlled economies under single-party rule).`,
            `Karl Marx and Friedrich Engels produced the foundational works. The Communist Manifesto (1848) argued that history is driven by class struggle and that capitalism's contradictions would eventually produce a workers' revolution. Marx's Das Kapital (Volume I, 1867) analyzed capitalism systematically: capital accumulates by extracting surplus value from workers' labor; this concentration of capital produces crises; workers will eventually become conscious of their shared interests and transform the system. Marx's analysis was both diagnostic (what's wrong with capitalism) and predictive (what will happen). The predictions have been mixed; the diagnostic insights have substantial influence on contemporary scholarship.`,
            `Vladimir Lenin's What Is to Be Done? (1902) shifted Marxism toward revolutionary organization. The 1917 Russian Revolution put a Marxist-Leninist party in power. Mao Zedong's Chinese Revolution (1949) applied related ideas in a peasant-majority society. These revolutions claimed to be implementing socialism on the way to communism.`,
            `What 20th-century state socialism actually produced. Rapid industrialization in places that had been agrarian (Soviet Union 1928-1940, China 1978-present). Universal literacy and healthcare in places that had lacked them (Cuba's healthcare system is a notable example). But also: the Soviet famines of the early 1930s (Holodomor in Ukraine, with estimates of 3-7 million deaths); the Great Leap Forward famine in China 1958-1962 (estimated 15-55 million deaths); the Gulag system in the USSR (millions imprisoned, hundreds of thousands killed); Cambodia's Khmer Rouge (1.5-2 million killed of a population of 8 million, 1975-1979). The 20th-century record of state socialism includes some of the worst political catastrophes in human history alongside genuine achievements in industrialization and basic services.`,
            `Latin American experiences specifically. Cuba's revolution (1959) produced universal healthcare and education while also producing political repression, exile of millions, and economic stagnation under US embargo. Allende's democratic socialism in Chile (1970-1973) was overthrown by US-backed military coup; Pinochet's right-wing dictatorship killed thousands. Venezuela's "Bolivarian socialism" under Chávez (1999-2013) reduced poverty during oil boom; under Maduro (2013-present) the economy collapsed and millions emigrated. Each Latin American socialist experiment has its own history; lumping them together obscures more than it reveals.`,
            `Contemporary socialist and Marxist thinkers. The state socialism of the 20th century is not the only inheritance. Contemporary thinkers (David Harvey, Erik Olin Wright, Nancy Fraser, Vivek Chibber, others) have developed Marxist analysis without endorsing 20th-century state forms. Democratic socialists (Bernie Sanders, Alexandria Ocasio-Cortez in the US; many European parties) advocate for collective provision of healthcare, education, housing without proposing single-party rule or state ownership of all production. The position remains intellectually serious even as its 20th-century practical experiments produced catastrophic failures alongside achievements.`,
            `What socialists claim. Capitalism produces systematic inequality, exploitation, and ecological destruction that won't be fixed by tinkering. Workers should have more democratic control over their workplaces. Collective provision of essentials (healthcare, education, housing) treats them as rights rather than commodities. The wealth that exists is produced by workers' labor and should be more equally distributed. Markets are tools, not values; what matters is whether the system produces flourishing for everyone, not just for owners of capital.`,
            `What critics emphasize. The 20th-century record. Soviet-style central planning produced inefficiency, shortages, and political tyranny. Even democratic socialism faces real challenges in motivating production, allocating resources, and resisting accumulation of state power. The Hayekian critique (planning requires too much information and too much concentrated power) remains powerful.`,
          ],
          image: `/voyager-assets/history/l04-s4-socialism.webp`,
          imageCaption: `Socialism and communism: Marx + Engels "Communist Manifesto" 1848; Marx "Das Kapital" 1867; Lenin 1902; Mao 1949. Real 20th-c record: rapid industrialization + Cuba healthcare AND Soviet famines, Gulag, Great Leap Forward famine, Khmer Rouge. Contemporary thinkers (Harvey, Wright, Fraser, Chibber) plus democratic socialists (Sanders, AOC) without endorsing 20th-c state forms.`,
          vocab: [
            {
              word: `socialism and communism`,
              definition: `Position: capitalism's failures are inherent contradictions producing systematic injustice; requires transformation of who owns means of production. Branches: democratic socialism (collective ownership through democracy), revolutionary socialism (through revolution), communism (Marx's eventual stateless classless society; 20th-c practice: state-controlled under single-party rule). Foundational texts: Marx + Engels "Communist Manifesto" 1848; Marx "Das Kapital" Vol I 1867 (surplus value extraction, capital accumulation, contradictions); Lenin "What Is to Be Done?" 1902. 20th-c record: rapid industrialization (Soviet 1928-1940, China 1978-present); universal literacy/healthcare (Cuba notable). Also: Soviet famines early 1930s (Holodomor 3-7M deaths); Great Leap Forward famine China 1958-1962 (15-55M deaths); Gulag (millions); Cambodia Khmer Rouge 1975-1979 (1.5-2M of 8M killed). Latin America: Cuba 1959 (healthcare + repression + emigration); Allende's Chile 1970-1973 overthrown by US-backed coup; Venezuela Chávez/Maduro 1999-present (boom + collapse). Contemporary thinkers (David Harvey, Erik Olin Wright, Nancy Fraser, Vivek Chibber); democratic socialists (Bernie Sanders, AOC, European parties).`,
              audioPrompt: `The third serious position is socialism and communism, {name}. Capitalism's failures are not bugs to be patched but inherent contradictions that produce systematic injustice, requiring transformation of who owns the means of production. Karl Marx and Friedrich Engels produced the foundational works. The Communist Manifesto from 1848 argued that history is driven by class struggle and that capitalism's contradictions would eventually produce a workers' revolution. Marx's Das Kapital Volume I from 1867 analyzed capitalism systematically: capital accumulates by extracting surplus value from workers' labor; this concentration of capital produces crises. What 20th-century state socialism actually produced: rapid industrialization in places that had been agrarian, like the Soviet Union and China. Universal literacy and healthcare, with Cuba's system as a notable example. But also: the Soviet famines of the early 1930s with the Holodomor in Ukraine causing 3 to 7 million deaths; the Great Leap Forward famine in China from 1958 to 1962 with 15 to 55 million deaths; the Gulag system with millions imprisoned; Cambodia's Khmer Rouge killing 1.5 to 2 million people. The 20th-century record includes some of the worst political catastrophes in human history alongside genuine achievements.`,
            },
            {
              word: `surplus value`,
              definition: `Karl Marx's concept in "Das Kapital" (1867): the difference between what workers produce and what they are paid. Capital accumulates by extracting this surplus, which Marx argued is the foundation of capitalist exploitation and the source of profit.`,
              audioPrompt: `Surplus value is Karl Marx's central concept in Das Kapital Volume I from 1867, {name}, and it is the foundation of his analysis of how capitalism produces inequality as a systematic outcome rather than as an accident. Marx argued that workers produce more value in a day of labor than they are paid in wages. The difference, what workers produce minus what they receive, is surplus value. This surplus value is appropriated by the owners of capital: the factory owners, the shareholders, those who own the means of production. Profit, interest, and rent all come from this extraction of surplus value from workers' labor. The implication is that the gains from production are systematically distributed unequally: workers receive wages, owners receive surplus. This is not a matter of bad individuals or mistakes; it is the structural logic of capitalist production. Capital accumulates over time precisely because owners can reinvest surplus value to command more labor, producing more surplus, accumulating more capital. This dynamic is what Thomas Piketty documented empirically in Capital in the 21st Century from 2013: when returns on capital exceed economic growth, wealth concentrates over time. Marx's analysis was both diagnostic and predictive. The diagnostic insights, how capitalism structurally produces inequality and periodic crises, have been influential in contemporary scholarship even among economists who reject his political conclusions. The predictions, that workers would become conscious of their shared interests and transform the system, have been mixed; they drove 20th-century revolutionary movements with catastrophic results in several cases.`,
            },
            {
              word: `class struggle`,
              definition: `Marx's analysis of history as driven by conflict between economic classes: in capitalism, primarily between the bourgeoisie (owners of capital) and the proletariat (workers who sell their labor). The Communist Manifesto (1848) opens: "The history of all hitherto existing society is the history of class struggles."`,
              audioPrompt: `Class struggle is the central mechanism in Marx's theory of history, {name}. The Communist Manifesto, written by Marx and Engels in 1848, opens with the famous line: the history of all hitherto existing society is the history of class struggles. Marx argued that history is not driven primarily by great individuals, or by ideas, or by accidents, but by conflict between economic classes whose interests are structurally opposed. In capitalism, the primary conflict is between the bourgeoisie, those who own the means of production (factories, land, capital), and the proletariat, those who own only their labor power and must sell it to survive. The structural opposition of interests is not a matter of personal hostility; it is a consequence of how capitalism works. The bourgeoisie must maximize profit by keeping wages low; the proletariat must maximize wages by organizing collectively. Every strike, every union, every labor law is a moment in this ongoing class struggle. Marx argued that capitalism's internal contradictions (the tendency to crisis, the concentration of capital, the growing organization of the working class) would eventually produce a workers' revolution that would transform who owns the means of production. The 20th century produced several revolutions claiming Marxist legitimacy: Lenin's 1917 Russian Revolution, Mao's 1949 Chinese Revolution, Cuba's 1959 revolution. Contemporary Marxist scholars including David Harvey, Erik Olin Wright, Nancy Fraser, and Vivek Chibber continue class analysis without endorsing 20th-century state-socialist forms.`,
            },
          ],
        },

        {
          id: `l04-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Before You Commit`,
          paragraphs: [
            `Each of the three positions has serious defenders, real evidence, and real failures in its historical record. The argument builder ahead asks you to commit to a primary frame while remaining honest about what each tradition gets right and what it gets wrong.`,
            `One way to think about the differences. Each position emphasizes a different thing. Market capitalism emphasizes that markets aggregate dispersed information and produce growth that has reduced absolute poverty more than any other system in human history. Social democracy emphasizes that markets systematically fail at providing healthcare, education, environmental protection, and old age security; democratic governments must fill these gaps. Socialism emphasizes that capitalism's exploitation, inequality, and ecological destruction are inherent rather than incidental; deeper structural change is required.`,
            `Another framing. The contemporary US political debate runs largely between market capitalism and social democracy. The contemporary European debate runs largely between social democracy and various blends with both market capitalism and democratic socialism. The contemporary Chinese system is its own thing: a market economy under one-party Communist rule, sometimes called "socialism with Chinese characteristics" and sometimes called "state-directed capitalism." Lumping these debates together as "capitalism vs socialism" obscures specific real disagreements.`,
            `One framing specific to your Latin American context. Latin America has lived several of these systems in your parents' lifetimes. Cuba's communism, Chile's social democracy under Allende and then market-oriented dictatorship under Pinochet, Argentina's repeated economic crises across multiple systems, Venezuela's Bolivarian socialism producing first boom then collapse, Colombia's market-oriented growth alongside extreme inequality. Each of these is a real test of one of these positions; each has multiple lessons that defenders and critics of each system emphasize differently.`,
            `One last framing before you commit. Most adults around you have absorbed one of these positions through their political tradition and never engaged the others seriously. Building deliberate framework at 12 protects against decades of inheriting strong opinions without examining them. The position you commit to today isn't permanent; it's a starting point you'll refine across decades as you read more, work in actual economic institutions, and watch contemporary systems succeed and fail.`,
          ],
          image: `/voyager-assets/history/l04-s5-before.webp`,
          imageCaption: `Three positions, three emphases. Market capitalism: information + growth. Social democracy: market failures requiring democratic governance. Socialism: capitalism's exploitation as inherent rather than incidental. Latin America has lived multiple of these.`,
          vocab: [
            {
              word: `economic systems`,
              definition: `Each position emphasizes different things. Market capitalism: markets aggregate dispersed information (Hayek) and produce growth (Smith) that reduced absolute poverty more than any other system. Social democracy: markets systematically fail (healthcare, education, environment, old age); democratic government must fill gaps (Polanyi, Keynes, Rawls; Nordic model). Socialism: capitalism's exploitation, inequality, ecological destruction are inherent rather than incidental; structural change required (Marx, contemporary Marxists, democratic socialists). Latin America has lived multiple: Cuba's communism, Chile's social democracy under Allende and dictatorship under Pinochet, Argentina's repeated crises, Venezuela's Bolivarian socialism boom/collapse, Colombia's market-oriented growth + inequality. Position you commit to today is starting point, not final answer.`,
              audioPrompt: `Committing to a position on economic systems requires honesty about what each tradition gets right and what it gets wrong, {name}. Each of the three positions has serious defenders, real evidence, and real failures in its historical record. Each position emphasizes a different thing. Market capitalism emphasizes that markets aggregate dispersed information and produce growth that has reduced absolute poverty more than any other system in human history. Social democracy emphasizes that markets systematically fail at providing healthcare, education, environmental protection, and old age security; democratic governments must fill these gaps. Socialism emphasizes that capitalism's exploitation, inequality, and ecological destruction are inherent rather than incidental; deeper structural change is required. Latin America has lived several of these systems in your parents' lifetimes. Cuba's communism, Chile's social democracy under Allende and then market-oriented dictatorship under Pinochet, Argentina's repeated economic crises, Venezuela's Bolivarian socialism producing first boom then collapse, Colombia's market-oriented growth alongside extreme inequality.`,
            },
            {
              word: `Bolivarian socialism`,
              definition: `The economic and political project of Hugo Chávez in Venezuela (1999-2013), drawing on South American independence traditions. Combined market economy with extensive public ownership, redistribution funded by oil revenues, and regional integration. Under Maduro (2013-present), the economy collapsed as oil prices fell.`,
              audioPrompt: `Bolivarian socialism is Venezuela's specific experiment with socialist-oriented governance, {name}, and it provides one of the most contested recent tests of economic ideas in Latin America. Hugo Chávez came to power in 1999 drawing on the legacy of Simón Bolívar, the 19th-century South American independence leader, combined with socialist economics. Venezuela's Bolivarian project combined continued market economy with extensive public ownership of the oil sector, redistribution of oil revenues into public programs, reduction of poverty and increase in literacy during the oil boom years, and regional integration through initiatives like ALBA across Latin America and the Caribbean. Under Chávez, poverty measurably fell and social indicators improved. After Chávez's death in 2013, Nicolás Maduro took power. Oil prices collapsed. The Venezuelan economy contracted catastrophically: hyperinflation, shortages of food and medicine, collapse of public services. Millions of Venezuelans emigrated, one of the largest displacement crises in the Western Hemisphere. Both the achievements under Chávez and the collapse under Maduro are real. The relationship between them is contested: defenders of socialist economic approaches argue the collapse was caused by oil-price dependence, US sanctions, and Maduro's specific failures, not by socialist economics itself. Critics argue the collapse demonstrates inherent problems with state-led resource economies. Latin American context requires distinguishing specific historical cases rather than lumping Cuba, Venezuela, Chile, and others together as a single experiment.`,
            },
            {
              word: `democratic socialism`,
              definition: `The position that collective ownership of key industries and extensive provision of social goods (healthcare, education, housing) should be achieved through democratic processes rather than revolution, without proposing single-party rule or state ownership of all production.`,
              audioPrompt: `Democratic socialism is distinct from both 20th-century state socialism and social democracy, and understanding the distinction matters for reading contemporary political debates, {name}. Social democracy, as exemplified by the Nordic model, accepts capitalist property relations and market allocation while using democratic government and high taxation to provide extensive public goods and redistribute income. Democratic socialism goes further: it advocates for collective ownership of key industries and workplaces, treating ownership itself as something to be democratized, not just the distribution of gains from privately-owned production. But crucially, democratic socialists achieve this through electoral democracy, not through revolution or single-party rule. Contemporary democratic socialists including Bernie Sanders and Alexandria Ocasio-Cortez in the United States and many European parties advocate for collective provision of healthcare, education, and housing, stronger worker ownership and control of enterprises, and higher taxation of wealth, without proposing single-party rule or state ownership of all production. This position is closer to the Nordic model than to the Soviet Union or Cuba, though it wants to go further than current Nordic arrangements. Contemporary Marxist thinkers including David Harvey, Erik Olin Wright, Nancy Fraser, and Vivek Chibber continue to develop socialist analysis without endorsing 20th-century state-socialist forms. The position remains intellectually serious even as its 20th-century practical experiments produced catastrophic failures alongside real achievements in industrialization and basic services.`,
            },
          ],
        },

        // ───── ARGUMENT BUILDER ──────────────────────────────────────────────
        {
          id: `l04-argument-builder`,
          type: `argument-builder`,
          headline: `Which Economic System?`,
          intro: `Pick the position that best captures your view. Build your case with 4-5 pieces of evidence drawn from across the magazine. Then respond to the strongest counterargument.`,
          positions: [
            {
              id: `market-capitalism`,
              label: `Market capitalism: markets with property rights and voluntary exchange allocate resources better than alternatives`,
              summary: `Prices aggregate information no planner can match (Hayek); voluntary exchange produces gains for both parties (Smith). Defenders: Adam Smith "Wealth of Nations" 1776, Friedrich Hayek "Road to Serfdom" 1944, Milton Friedman. Achievements: extreme poverty fell from over 80% to under 10% globally 1820-now; China lifted around 800M from extreme poverty since 1978; South Korea, Taiwan, Singapore, Chile transformed. Costs: extreme inequality (Piketty), environmental destruction, labor exploitation, financial crises (1929, 2008), political capture.`,
            },
            {
              id: `social-democracy`,
              label: `Social democracy: markets work for many things but democratic governments must correct systematic failures`,
              summary: `Markets fail at healthcare, education for poor, environment, old age security; democratic government must fill gaps. Defenders: Karl Polanyi "Great Transformation" 1944, John Maynard Keynes "General Theory" 1936, John Rawls "A Theory of Justice" 1971. Real success: Nordic model (Denmark, Sweden, Norway, Finland, Iceland): top of World Happiness Report, Economic Freedom Index. Limits: small, relatively homogeneous, hard to scale; high taxation political resistance.`,
            },
            {
              id: `socialism`,
              label: `Socialism: capitalism's failures are inherent contradictions requiring transformation of who owns means of production`,
              summary: `Defenders: Marx + Engels "Communist Manifesto" 1848 + Marx "Das Kapital" 1867 (surplus value, accumulation, contradictions); contemporary Marxists (Harvey, Wright, Fraser, Chibber); democratic socialists (Sanders, AOC). 20th-c record: rapid industrialization + Cuba healthcare AND Soviet famines, Gulag, Great Leap Forward famine (15-55M deaths), Khmer Rouge. Distinct from 20th-c state forms: democratic socialism advocates collective provision without single-party rule.`,
            },
          ],
          evidence: [
            {
              id: `e1`,
              text: `Between 1820 and now, the share of humans living in extreme poverty (less than $2.15/day in 2017 prices) fell from over 80 percent to under 10 percent. Most of this reduction occurred in market-oriented economies. China alone has lifted around 800 million people from extreme poverty since 1978, during its shift toward market-oriented production.`,
              source: `World Bank, Our World in Data; Branko Milanović`,
            },
            {
              id: `e2`,
              text: `Friedrich Hayek argued in "The Use of Knowledge in Society" (1945) that prices in markets aggregate information from millions of individuals in ways no central planner can match. A price of wheat reflects weather, demand, transportation, alternative grains, and a thousand other factors no single mind could process.`,
              source: `Hayek "The Use of Knowledge in Society" 1945`,
            },
            {
              id: `e3`,
              text: `The Nordic countries (Denmark, Sweden, Norway, Finland, Iceland) consistently rank among the happiest, most prosperous, and freest societies in the world per the World Happiness Report, Economic Freedom Index, and most other measures. They are market economies with strong unions, universal healthcare, free higher education, paid parental leave, substantial unemployment insurance, and high taxes funding public goods.`,
              source: `World Happiness Report, Heritage Foundation Economic Freedom Index, OECD data`,
            },
            {
              id: `e4`,
              text: `Thomas Piketty's "Capital in the 21st Century" (2013) documented how wealth concentrates over time when returns on capital exceed economic growth (r > g). The book provided systematic evidence for capitalism's tendency toward extreme inequality and influenced contemporary debate substantially.`,
              source: `Piketty "Capital in the 21st Century" 2013`,
            },
            {
              id: `e5`,
              text: `The Soviet famines of the early 1930s (Holodomor in Ukraine, 3-7 million deaths) and the Great Leap Forward famine in China (1958-1962, estimated 15-55 million deaths) are among the worst political catastrophes in human history. They occurred under state-socialist regimes that claimed Marxist legitimacy.`,
              source: `Anne Applebaum "Red Famine"; Frank Dikötter "Mao's Great Famine"; multiple historical accounts`,
            },
            {
              id: `e6`,
              text: `Karl Marx's "Das Kapital" Volume I (1867) provided systematic analysis of how capital accumulation occurs through extraction of surplus value from workers' labor, how this concentration produces crises, and how the structural dynamics of capitalism produce inequality not as accident but as systematic outcome. Contemporary Marxist scholarship (Harvey, Wright, Fraser, Chibber) continues this analysis.`,
              source: `Marx "Das Kapital" Vol I 1867; contemporary Marxist scholarship`,
            },
            {
              id: `e7`,
              text: `John Maynard Keynes's "General Theory of Employment, Interest and Money" (1936) showed that capitalist economies are not self-correcting; they can stay in prolonged depression without government action to maintain demand. Most contemporary economists, including those who consider themselves capitalists, accept Keynesian insights about managing macroeconomic crises.`,
              source: `Keynes "General Theory" 1936; modern macroeconomics`,
            },
            {
              id: `e8`,
              text: `Latin America has tested multiple economic systems in living memory. Cuba's communism produced universal healthcare while also producing political repression and emigration of millions. Allende's democratic socialism in Chile was overthrown by US-backed military coup in 1973. Venezuela's Bolivarian socialism produced poverty reduction during oil boom under Chávez and economic collapse under Maduro. Each is a real test with multiple lessons defenders and critics emphasize differently.`,
              source: `Latin American economic history; multiple historians`,
            },
          ],
          counterargument: {
            id: `counter`,
            text: `"You picked your position. Here's the strongest objection. The three positions are presented as if they're equally serious alternatives, but the historical record substantially favors one. Capitalism has lifted billions from poverty in two centuries. State socialism in the 20th century produced famines, gulags, and authoritarianism nearly everywhere it was implemented at scale. Social democracy is a moderation of capitalism, not a true alternative; the Nordic countries are market economies with extensive redistribution, not non-capitalist systems. By framing socialism as a serious third option, the lesson treats failed experiments as if they were equivalent to ongoing success. The honest answer is that markets work; alternatives that tried to replace them have failed; the real debate is between purer market capitalism and more regulated market capitalism. Anything beyond that runs into the actual historical record."`,
            promptInstruction: `In 4-5 sentences, respond. Is the counterargument right that the historical record substantially favors capitalism? Or does the framing of "capitalism vs failed alternatives" itself obscure something important?`,
          },
          reflectionPrompt: `Looking at the positions you didn't commit to: which has the strongest argument? What evidence from your own life (the systems you've lived in, the ones your family has lived in) shapes which position you find most credible?`,
        },

        {
          id: `l04-quiz`,
          type: `quiz`,
          headline: `Check your understanding`,
          questions: [
            {
              id: `q1`,
              type: `multiple-choice`,
              question: `What four questions does every economic system answer?`,
              options: [
                `Random`,
                `What gets produced (food, housing, healthcare, weapons, art); how it gets produced (who works, how labor is organized, what tools used); who gets what (distribution across population); who decides (markets, governments, communities, central planners). Embedded in institutions, laws, cultural norms most people never explicitly think about. Capitalism, socialism, communism are families of answers, not single fixed systems`,
                `Just one`,
                `Random`,
              ],
              correctIndex: 1,
              explanation: `The four questions are concrete: healthcare as public good (Norway, Canada) vs private insurance (US); higher education free (Germany, France) vs debt-financed (US, UK). Same question, different answers, different systems. Recognizing the four questions lets you read economic systems analytically rather than ideologically.`,
            },
            {
              id: `q2`,
              type: `multiple-choice`,
              question: `What does market capitalism argue and who are its defenders?`,
              options: [
                `Just money`,
                `Markets with property rights and voluntary exchange allocate resources better than alternatives; prices aggregate information no planner can match; voluntary exchange produces gains for both parties. Defenders: Adam Smith "Wealth of Nations" 1776 (invisible hand); Friedrich Hayek "Road to Serfdom" 1944 and "Use of Knowledge in Society" 1945; Milton Friedman. Achievements: extreme poverty fell from over 80% to under 10% globally between 1820 and now; China lifted around 800M from extreme poverty since 1978`,
                `Random`,
                `Just trade`,
              ],
              correctIndex: 1,
              explanation: `Market capitalism's empirical record on absolute poverty reduction is genuinely remarkable: the largest reduction in human history, occurring overwhelmingly in market-oriented economies. The position has real intellectual depth (Hayek's information argument; Smith's specialization analysis) beyond its political deployments.`,
            },
            {
              id: `q3`,
              type: `multiple-choice`,
              question: `What does social democracy argue and what's the Nordic model?`,
              options: [
                `Random`,
                `Markets work for many things but produce systematic failures (healthcare for sick, education for poor, environment, financial stability, old age) that democratic governments must correct through regulation, public goods, redistribution. Defenders: Polanyi "Great Transformation" 1944, Keynes "General Theory" 1936, Rawls "Theory of Justice" 1971. Nordic model (Denmark, Sweden, Norway, Finland, Iceland): market economies with universal healthcare, free higher education, paid parental leave, strong unions, high taxes funding public goods. Consistently top World Happiness Report and Economic Freedom Index`,
                `Just taxes`,
                `Random`,
              ],
              correctIndex: 1,
              explanation: `Social democracy is often dismissed as "socialism" in US political discourse, but the Nordic countries are market economies (private property, profit-seeking firms, competitive markets) with extensive democratic redistribution. Lumping them with state socialism obscures their actual structure.`,
            },
            {
              id: `q4`,
              type: `multiple-choice`,
              question: `What's the 20th-century record of state socialism?`,
              options: [
                `Just bad`,
                `Mixed and includes both real achievements and catastrophic failures. Achievements: rapid industrialization in agrarian societies (Soviet 1928-1940, China 1978-present); universal literacy and healthcare in places that lacked them (Cuba notable). Catastrophes: Soviet famines early 1930s (Holodomor 3-7M deaths); Great Leap Forward famine China 1958-1962 (15-55M deaths); Gulag system (millions imprisoned); Cambodia Khmer Rouge 1975-1979 (1.5-2M killed of 8M population). Among the worst political catastrophes in human history alongside genuine achievements`,
                `Just good`,
                `Random`,
              ],
              correctIndex: 1,
              explanation: `The 20th-century record matters because it's the largest test of state socialism at scale. Both the achievements and the catastrophes are real. Honest framing acknowledges both rather than either dismissing achievements as nothing or treating catastrophes as exceptions.`,
            },
            {
              id: `q5`,
              type: `multiple-choice`,
              question: `What does Marx's "Das Kapital" Volume I (1867) actually argue?`,
              options: [
                `Just money is bad`,
                `Capital accumulates by extracting surplus value from workers' labor; this concentration of capital produces crises; workers will eventually become conscious of their shared interests and transform the system. Marx's analysis was both diagnostic (what's wrong with capitalism) and predictive (what will happen). Predictions mixed; diagnostic insights still influential in contemporary scholarship. Distinct from 20th-century state-socialist implementations`,
                `Random`,
                `Just hate`,
              ],
              correctIndex: 1,
              explanation: `Marx's "Capital" remains widely read in serious academic contexts even by people who reject his political conclusions. The analysis of how capitalism produces specific kinds of inequality and instability has been influential in economics, sociology, and political theory. Contemporary Marxist scholarship (Harvey, Wright, Fraser, Chibber) extends the analysis without endorsing 20th-century state forms.`,
            },
            {
              id: `q6`,
              type: `multiple-choice`,
              question: `What's specific about Latin America's economic experience?`,
              options: [
                `Same as US`,
                `Latin America has tested multiple economic systems in living memory: Cuba's communism (universal healthcare + repression + emigration); Allende's democratic socialism in Chile 1970-1973 overthrown by US-backed military coup; Pinochet's right-wing dictatorship 1973-1990 implementing market-oriented policies; Venezuela's Bolivarian socialism (poverty reduction during oil boom under Chávez, economic collapse under Maduro); Colombia's market-oriented growth alongside extreme inequality. Each is real test with multiple lessons that defenders and critics emphasize differently`,
                `Random`,
                `Just poor`,
              ],
              correctIndex: 1,
              explanation: `Latin American economic history is a sustained test of multiple systems with substantial human costs. Honest engagement with this history complicates both "capitalism just works" and "socialism just works" framings. The specific outcomes depend on specific implementations, institutions, and historical conditions.`,
            },
            {
              id: `q7`,
              type: `multiple-choice`,
              question: `What did John Rawls argue in "A Theory of Justice" (1971)?`,
              options: [
                `Random`,
                `Just institutions should be designed from behind a "veil of ignorance": what would you choose if you didn't know which position in society you'd end up in? Rawls's answer: you'd choose institutions that protect basic liberties for all and that arrange inequalities to benefit the worst off. Provides philosophical foundations for social democracy by treating fairness from impartial perspective. Influenced contemporary political philosophy substantially`,
                `Just fairness`,
                `Random`,
              ],
              correctIndex: 1,
              explanation: `Rawls's framework remains widely used in serious political philosophy. The veil-of-ignorance thought experiment forces consideration of institutions from the perspective of those who might end up at the bottom rather than those who design them from the top. The conclusion (protect basic liberties + benefit worst off) provides philosophical foundation for democratic redistribution.`,
            },
            {
              id: `q8`,
              type: `multiple-choice`,
              question: `What's the distinction between 20th-century state socialism and contemporary democratic socialism?`,
              options: [
                `Same thing`,
                `20th-century state socialism (Soviet Union, Maoist China, Cuba, Khmer Rouge) involved state ownership of means of production under single-party rule, often with mass repression. Contemporary democratic socialists (Bernie Sanders, Alexandria Ocasio-Cortez in US; many European parties) advocate for collective provision of healthcare, education, housing through democratic government without proposing single-party rule or state ownership of all production. Often resemble social democracy more than 20th-c state socialism. Position remains intellectually serious without endorsing catastrophic 20th-c experiments`,
                `Random`,
                `Both same`,
              ],
              correctIndex: 1,
              explanation: `The distinction matters because lumping all socialism together as "Soviet-style" obscures actual contemporary debate. Contemporary democratic socialists generally accept markets exist; the question is what should be removed from markets and provided collectively (healthcare? education? housing?). This is closer to the Nordic model than to Stalin.`,
            },
            {
              id: `q9`,
              type: `true-false`,
              question: `True or false: The Nordic countries (Denmark, Sweden, Norway, Finland, Iceland) are socialist economies.`,
              correctAnswer: false,
              explanation: `False. The Nordic countries are market economies (private property, profit-seeking firms, competitive markets) with extensive democratic redistribution funded by high taxation: universal healthcare, free higher education, paid parental leave, strong unemployment insurance. They consistently rank near the top of the Economic Freedom Index alongside their high rankings in the World Happiness Report. They are social-democratic, not socialist in the state-socialist sense. The US political habit of calling them "socialist" obscures their actual structure.`,
            },
            {
              id: `q10`,
              type: `inference`,
              question: `Your uncle in Bogotá says "socialism failed everywhere it was tried in Latin America: Cuba, Venezuela, all of them. The only thing that works is the free market." Based on this lesson, what should you point out?`,
              options: [
                `"Yes uncle is right"`,
                `"Several specific things. First, lumping 'Cuba and Venezuela and all of them' together obscures real differences. Cuba's communism (since 1959) is genuinely state socialism: single-party rule, state ownership of most production, central planning. Venezuela's Bolivarian socialism under Chávez (1999-2013) was different: market economy with substantial public ownership and redistribution, especially in oil. The economic collapse under Maduro (2013-present) has multiple causes, including dependence on a single commodity (oil) that crashed in price, US sanctions, and serious mismanagement; it's not a clean test of socialism vs anything. Allende's democratic socialism in Chile (1970-1973) was overthrown by US-backed military coup before it could be assessed at scale. These are not the same thing. Second, 'the only thing that works is the free market' isn't supported by Latin American history either. Pinochet's free-market reforms in Chile produced growth alongside enormous human costs (thousands killed, tens of thousands tortured, many disappeared) and extreme inequality that persists today. Argentina has had multiple market-oriented reforms produce repeated crises. Brazil has grown most rapidly under social-democratic governments (Lula, Workers' Party in the 2000s) that combined market activity with substantial public investment in poverty reduction. Mexico's NAFTA-era market integration produced growth alongside displacement of millions of peasants. 'Free market = success' isn't a clean reading of Latin American history. Third, the Latin American historical record shows that what works isn't 'capitalism vs socialism' as ideological categories but specific institutional questions: rule of law, anti-corruption, public investment in education and health, political stability, diversification away from single-commodity dependence. Costa Rica (without an army, with universal healthcare, with strong democratic institutions) has had much better outcomes than many of its neighbors regardless of which 'system' you'd classify it under. Fourth, the Cuban healthcare and literacy achievements were real, even alongside the political repression and economic stagnation; honest assessment includes both. Fifth, what would help: read Eduardo Galeano (Las Venas Abiertas de América Latina); read Joseph Stiglitz on Latin American development; recognize that 'free market vs socialism' is often a US-imported frame that doesn't map cleanly onto Latin American actual experience, where most successful periods have involved substantial market activity AND substantial public investment AND specific institutional conditions that the ideological framing obscures."`,
                `"Random"`,
                `"Random"`,
              ],
              correctIndex: 1,
              explanation: `Real applied economic-systems literacy with Latin American specificity. Lumping diverse experiments together obscures real differences. 'Free market works, socialism fails' isn't supported by the actual Latin American record either. The frame that better fits actual history is institutional rather than ideological: rule of law, public investment in human capital, diversification, political stability. Useful sources named (Galeano, Stiglitz). Honest about both Cuban achievements and failures.`,
            },
          ],
        },

        {
          id: `l04-reflection`,
          type: `reflection`,
          headline: `Sit with this`,
          intro: `Pick the prompt that pulls at you most. Your answer is saved.`,
          prompts: [
            { id: `reflect-position`, category: `Your commitment`, prompt: `Why did you commit to the position you picked? What evidence was most decisive? What aspect of the other two positions still pulls at you?` },
            { id: `reflect-family`, category: `Family history`, prompt: `Pick someone in your family (parent, grandparent, aunt or uncle). What economic system have they lived under? What do they think works and what doesn't? Does their experience support or complicate the position you committed to?` },
            { id: `reflect-latam`, category: `Latin American context`, prompt: `Latin America has tested several economic systems in living memory. Which one's record do you find most clarifying, and which do you find most contested? Why?` },
            { id: `reflect-current`, category: `Current`, prompt: `Pick one specific contemporary debate (US healthcare, European welfare states, Chinese growth model, anywhere). How does the position you committed to read that debate? What does it notice that another position would miss?` },
            { id: `reflect-counter`, category: `Counterargument`, prompt: `The counterargument argued that the historical record substantially favors capitalism and treating socialism as a serious third option is dishonest. How do you respond? Is "capitalism vs failed alternatives" the right framing, or does it obscure something?` },
            { id: `reflect-future`, category: `Climate`, prompt: `Climate change creates serious challenges that markets alone may not address well. How does each of the three positions handle the climate question? Which gives you most confidence about navigating the next 50 years?` },
          ],
        },

        {
          id: `l04-real-world`,
          type: `real-world`,
          headline: `Take it into your life`,
          guideContext: `Economic systems literacy at 12 protects across decades of voting, working, and engaging with economic policy debates that shape your life and billions of others'. Two paths.`,
          familyActivity: {
            title: `Family Economic Systems Conversation`,
            duration: `60 minutes`,
            description: `Share the three positions with your family. Many adults have absorbed one position from their political tradition without explicitly considering others. Walk through the four basic questions (what, how, distribution, decision) and how the three positions answer them differently. Then connect to family-specific experience: which systems have family members lived under? In which countries? What do they think worked and what didn't? Latin American family histories often surface particularly vivid evidence on multiple systems (Cuba, Venezuela, Chile, Argentina, Mexico, others). The conversation usually surfaces real disagreement within the family that's worth examining seriously.`,
          },
          projectOption: {
            title: `Economic systems comparative case study, 3 weeks (optional)`,
            duration: `3 weeks, ~45 minutes per session`,
            description: `Pick two countries with substantially different economic systems (suggestions: Denmark vs US; China vs India; Cuba vs Costa Rica; Sweden vs Brazil). Week 1: research each country's economic system using credible sources (CIA World Factbook, World Bank data, OECD reports, academic economic histories). Week 2: compare outcomes across specific dimensions (poverty, inequality, healthcare outcomes, education, freedom indices, environmental performance, happiness reports). Week 3: write 1,500 words on what each country's experience suggests about the three positions you engaged. Apply the framework rigorously; cite real sources.`,
            offerToParent: `Parent: opt your kid into this project. Building the capacity to engage economic systems through evidence rather than ideological categories is among the highest-leverage civic education investments available at this age.`,
          },
          identityQuestion: `If you become someone who engages economic systems through specific evidence and serious traditions rather than ideological categories, what does that change about how you'll vote, work, and engage with policy debates across decades?`,
        },

        {
          id: `l04-identity-hook`,
          type: `identity-hook`,
          headline: `Who is this lesson making you?`,
          prompt: `One sentence. No wrong answer.`,
          placeholder: `Someone who...`,
          examples: [
            `Someone who can engage capitalism, socialism, and social democracy as serious traditions rather than tribal slogans.`,
            `A person who reads Latin American economic history without imported US frameworks.`,
            `Someone who weighs both the poverty reductions and the famines in the 20th-century record.`,
          ],
          saveKey: `identity_responses_hw_11_12_04`,
        },

        {
          id: `l04-celebration`,
          type: `celebration`,
          guideText: `{name}. Fourth History and World lesson done. You have framework on three serious economic-system traditions: market capitalism (Smith, Hayek, Friedman) with its real poverty-reduction record and real costs; social democracy (Polanyi, Keynes, Rawls, the Nordic model) with its real success at top of happiness and freedom indices and its limits at scale; and socialism (Marx, contemporary thinkers, democratic socialists) with its catastrophic 20th-century state-form failures and its serious ongoing intellectual tradition. You've committed to a primary frame and engaged the strongest counterargument. Next lesson moves from economic systems to the political ideologies that organize them: conservative, liberal, social-democratic, socialist, anarchist. Perspectives format. Five voices. Onward. — Lyra`,
          badge: `economic-systems-literate`,
          badgeName: `Economic Systems Literate`,
          xpEarned: 75,
          competencies: [
            `Identifies four basic questions every economic system answers (what, how, who gets, who decides)`,
            `Articulates market capitalism (Smith, Hayek, Friedman) with achievements and costs`,
            `Articulates social democracy (Polanyi, Keynes, Rawls, Nordic model) with successes and limits`,
            `Articulates socialism + communism (Marx, contemporary thinkers, democratic socialists) honestly engaging 20th-c record`,
            `Applies framework to specific cases (Latin American experiences, Nordic model, 20th-c state socialism)`,
          ],
          nextLessonPreview: {
            title: `Lesson 5: Political Ideologies: Left, Right, and Beyond`,
            hook: `Perspectives format. Five voices: conservative, liberal, social-democratic, socialist, anarchist.`,
          },
        },
      ],
    },
  ],
};

export default HISTORY_VOYAGER_L04;

if (import.meta.env?.DEV) {
  const l = HISTORY_VOYAGER_L04.lessons[0];
  const mags = l.screens.filter((s) => s.type === `magazine`).length;
  const argEvi = l.screens.find((s) => s.type === `argument-builder`)?.evidence?.length ?? 0;
  const quiz = l.screens.find((s) => s.type === `quiz`)?.questions?.length ?? 0;
  const reflect = l.screens.find((s) => s.type === `reflection`)?.prompts?.length ?? 0;
  console.log(
    `[LESSON-HW-VOYAGER-L04 ${VERSION}] "${l.title}" mags=${mags} ev=${argEvi} q=${quiz} r=${reflect}`
  );
}
