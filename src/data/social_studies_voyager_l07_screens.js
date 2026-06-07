// ─────────────────────────────────────────────────────────────────────────────
// SOCIAL STUDIES VOYAGER  |  L07 — Macroeconomics: How National Economies Work
// Age band : voyagers (11-12)   Guide: atlas (Bear)
// Standards: C3 Framework (Economics) — D2.Eco
// Interaction: CASE-STUDY. Paragraphs ~330ch. 3 vocab/section.
// ─────────────────────────────────────────────────────────────────────────────

const VERSION = "voyager-ss-l07-v1";

const SOCIAL_STUDIES_VOYAGER_L07 = {
  ageBand: `voyagers`,
  subjectId: `social_studies`,
  guide: `atlas`,

  lessons: [
    {
      id: `social-studies-11-12-07`,
      title: `Macroeconomics: How National Economies Work`,
      duration: 35,
      xpReward: 75,
      badge: `economy-reader`,
      badgeName: `Economy Reader`,

      screens: [
        {
          id: `l07-welcome`,
          type: `welcome`,
          guideText: `{name}, the news tells you unemployment dropped, GDP grew, the Fed raised rates. What does any of that actually mean? Macroeconomics — the study of how national economies work as systems — gives you the tools to understand what you're hearing. Inflation, recession, growth, fiscal stimulus: these aren't abstractions. They determine whether your family is comfortable or struggling. This lesson builds the framework.`,
          headline: `Macroeconomics: How National Economies Work`,
          subtitle: `The forces that shape a whole nation's wealth, jobs, and prices, and how to read its vital signs. A Case Study.`,
          visual: `/voyager-assets/social-studies/l07-welcome.webp`,
        },

        {
          id: `l07-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Zooming Out To The Whole Economy`,
          paragraphs: [
            `An economy is how a society produces, distributes, and uses goods and services, everything from food and phones to haircuts and healthcare. There are two scales for studying it. Microeconomics zooms in on individual actors: one shopper, one company, one product's price. Macroeconomics zooms out to the entire national economy as a single system.`,
            `Think of it like weather versus climate, or one tree versus the whole forest. Macroeconomics asks the big questions: Is the country's economy growing or shrinking? Are prices rising? Can most people find jobs? It treats millions of individual decisions, every purchase, paycheck, and product, as one giant interconnected system with its own behavior.`,
            `Why does this matter to you? Because the health of the whole economy shapes nearly everything in your life: whether jobs are plentiful when you graduate, whether prices stay stable, whether your family prospers or struggles. Leaders win and lose elections over it. To understand the modern world, and your own future, you have to read the economy as a whole. That's what macroeconomics teaches.`,
          ],
          image: `/voyager-assets/social-studies/l07-s1-zoom-out.webp`,
          imageCaption: `An ECONOMY is how a society produces, distributes, and uses goods and services, food, phones, haircuts, healthcare. Two scales study it. MICROECONOMICS zooms IN on individual actors: one shopper, one company, one product's price. MACROECONOMICS zooms all the way OUT to the entire national economy as a single system. Think weather versus climate, or one tree versus the whole forest. Macroeconomics asks the big questions: Is the country's economy growing or shrinking? Are prices rising? Can most people find jobs? It treats millions of individual decisions as one giant interconnected system. Why does it matter to you? The whole economy's health shapes whether jobs are plentiful, whether your money holds value, whether your community prospers.`,
          vocab: [
            { word: `economy`,
              definition: `How a society produces, distributes, and uses goods and services, everything from food and phones to healthcare and haircuts. It is the system that meets people's material needs and wants.`,
              audioPrompt: `An economy, {name}, is simply how a whole society makes, shares, and uses goods and services, everything from groceries and gadgets to doctor visits and haircuts. Every time someone produces something, buys something, earns a wage, or trades, that's the economy in action. It's not a thing off in the distance; it's the giant web of activity you take part in every single day. Think about one ordinary thing you did today, like eating breakfast. How many people's economic activity made that possible?` },
            { word: `microeconomics vs. macroeconomics`,
              definition: `Microeconomics studies individual pieces of the economy (a single buyer, business, or market); macroeconomics studies the entire national economy as one interconnected system.`,
              audioPrompt: `Microeconomics versus macroeconomics, {name}, are two ways of looking at the same economy at different scales. Microeconomics zooms in close, on a single shopper, one business, the price of one product. Macroeconomics zooms way out to see the whole national economy at once, all the spending, earning, and producing of an entire country as one system. It's like studying one tree versus studying the whole forest. Today we study the forest. Which scale do you think is harder to understand, the single tree, or the whole forest?` },
            { word: `the economy as a system`,
              definition: `The macroeconomic view that the millions of individual economic decisions in a country add up to one giant, interconnected system with its own overall behavior and health.`,
              audioPrompt: `The economy as a system, {name}, is the key idea behind macroeconomics. Every purchase, paycheck, and product is one tiny decision, but added together across millions of people, they form one giant interconnected system that can grow, shrink, speed up, or slow down as a whole. No single person controls it, yet it has its own overall behavior, like a forest, or weather. Learning to see that whole system, not just the pieces, is what this lesson is about. Does it surprise you that something no one controls can still behave in patterns?` },
          ],
        },

        {
          id: `l07-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Reading The Vital Signs`,
          paragraphs: [
            `Just as a doctor checks vital signs to judge a body's health, economists watch key indicators to judge an economy's health. The most important is GDP (Gross Domestic Product): the total value of all goods and services a country produces in a year. GDP is the broadest measure of an economy's size. When GDP grows, the economy is expanding; when it shrinks, it's contracting.`,
            `A second vital sign is inflation: the rate at which overall prices rise over time. A little inflation is normal and even healthy, but high inflation means your money buys less and less. The opposite, falling prices (deflation), sounds nice but can signal a struggling economy. Stable, moderate price changes are the goal.`,
            `A third key sign is unemployment: the percentage of people who want jobs but can't find them. High unemployment means hardship and wasted potential, people willing to work but unable to. Low unemployment generally signals a healthy economy. Together, GDP, inflation, and unemployment are the three core vital signs, and reading them together tells you far more than any one alone.`,
          ],
          image: `/voyager-assets/social-studies/l07-s2-vital-signs.webp`,
          imageCaption: `Like a doctor checking vital signs, economists watch key INDICATORS to judge an economy's health. The most important: GDP (Gross Domestic Product), the total value of all goods and services a country produces in a year, the broadest measure of an economy's SIZE. GDP growing means the economy is expanding; shrinking means contracting. Second: INFLATION, the rate overall prices rise. A little is normal and healthy, but high inflation means your money buys less and less. Third: UNEMPLOYMENT, the percentage who want jobs but can't find them. High means hardship and wasted potential; low signals health. Together, GDP, inflation, and unemployment are the three core vital signs, read together.`,
          vocab: [
            { word: `GDP`,
              definition: `Gross Domestic Product: the total value of all goods and services a country produces in a year. It is the broadest measure of an economy's size, and its growth signals expansion.`,
              audioPrompt: `GDP, or Gross Domestic Product, {name}, is the single most important measure in macroeconomics: the total value of everything, all the goods and services, a country produces in a year. It's the broadest measure of an economy's size. When GDP is growing, the economy is expanding and usually doing well; when it shrinks, the economy is contracting. Whenever you hear "the economy grew three percent," that's GDP. Why do you think measuring everything a country produces tells us so much about how it's doing?` },
            { word: `inflation`,
              definition: `The rate at which overall prices rise over time. Mild inflation is normal, but high inflation erodes the value of money, so each dollar buys less than before.`,
              audioPrompt: `Inflation, {name}, is the rate at which prices rise across the economy over time. A small, steady amount is normal and even healthy. But when inflation runs high, your money buys less and less, the same bill that bought a full cart of groceries last year buys only part of one this year. That's why high inflation hurts: it quietly shrinks what people can afford. Have you noticed the price of something you buy going up over time? That's inflation you can feel.` },
            { word: `unemployment`,
              definition: `The percentage of people who want jobs but cannot find them. High unemployment signals economic hardship and wasted potential; low unemployment generally signals a healthy economy.`,
              audioPrompt: `Unemployment, {name}, measures the share of people who want to work but can't find a job. It's a powerful sign of economic health: high unemployment means hardship and wasted human potential, lots of people ready to work with nowhere to go. Low unemployment usually means a healthy economy where most who want jobs can find them. Behind every percentage point are real people and families. Why do you think leaders worry so much about the unemployment rate?` },
          ],
        },

        {
          id: `l07-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `The Business Cycle`,
          paragraphs: [
            `Economies don't grow in a straight line. They move in cycles, growth, then decline, then growth again. This is the business cycle. Its phases: expansion (the economy grows, GDP rises, jobs are plentiful), a peak (the high point), then contraction (the economy shrinks), reaching a trough (the low point), before recovery begins again.`,
            `When a contraction is significant and lasting, it's called a recession: the economy shrinks, businesses cut back, and unemployment rises. Recessions are painful, people lose jobs, families struggle. A very severe, prolonged recession is a depression, like the Great Depression of the 1930s. Knowing that downturns are part of the cycle helps people respond wisely rather than panic.`,
            `Why do economies cycle at all? Largely because of shifts in demand and confidence. When people and businesses feel optimistic, they spend and invest more, fueling growth that builds on itself. When confidence drops, they pull back, which slows the economy and makes everyone more cautious. These waves of optimism and caution drive the booms and busts of the business cycle.`,
          ],
          image: `/voyager-assets/social-studies/l07-s3-business-cycle.webp`,
          imageCaption: `Economies don't grow in a straight line. They move in CYCLES, growth, then decline, then growth again, the BUSINESS CYCLE. Its phases: EXPANSION (economy grows, GDP rises, jobs plentiful), a PEAK (high point), CONTRACTION (economy slows or shrinks), a TROUGH (low point), then recovery. A significant, lasting contraction is a RECESSION: the economy shrinks, businesses cut back, unemployment rises. A severe, prolonged one is a DEPRESSION, like the Great Depression of the 1930s. Why do economies cycle? Largely from shifts in DEMAND and CONFIDENCE: when people feel optimistic they spend and invest, fueling growth; when confidence drops they pull back, slowing the economy. Waves of collective optimism and caution drive booms and busts.`,
          vocab: [
            { word: `business cycle`,
              definition: `The recurring pattern of economic expansion (growth) and contraction (decline), moving through phases of peak and trough. Economies grow in waves, not straight lines.`,
              audioPrompt: `The business cycle, {name}, is the up-and-down pattern every economy follows: a period of growth (expansion), then a high point (peak), then a slowdown or shrinking (contraction), then a low point (trough), before growth begins again. Economies move in waves, not straight lines. Knowing this helps you understand why good times are followed by hard times and then good times again. Where else in nature or life do you see things move in cycles rather than straight lines?` },
            { word: `recession`,
              definition: `A significant, widespread, and lasting decline in economic activity, when the economy shrinks, businesses cut back, and unemployment rises. A normal but painful part of the business cycle.`,
              audioPrompt: `A recession, {name}, is a significant and lasting downturn in the economy, when GDP shrinks, businesses cut back, and unemployment rises. Recessions are genuinely painful: people lose jobs, families struggle, businesses close. But they're also a normal part of the business cycle, not the end of the world, and economies recover from them. A very severe, prolonged recession is called a depression. Understanding that downturns are part of the cycle, do you think it helps people respond more calmly when one hits?` },
            { word: `demand and confidence`,
              definition: `The collective willingness of people and businesses to spend and invest, driven partly by how optimistic they feel. Shifts in demand and confidence drive the booms and busts of the cycle.`,
              audioPrompt: `Demand and confidence, {name}, are a huge engine behind the business cycle. When people and businesses feel optimistic, they spend and invest more, which fuels growth and makes everyone even more confident, a boom. When confidence drops, often after a shock, they pull back and spend less, which slows the economy and makes everyone more cautious still, a bust. These waves of collective mood, multiplied across millions, drive the ups and downs. Can you feel how confidence might spread, person to person, through a whole economy?` },
          ],
        },

        {
          id: `l07-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `What Drives It All`,
          paragraphs: [
            `Beneath the vital signs and cycles, deep forces drive a national economy. The biggest is total spending (economists call it aggregate demand): the combined spending of households, businesses (investing in equipment), and government. When total spending rises, the economy tends to grow; when it falls, it tends to slow.`,
            `Another key force is production capacity, the economy's ability to make things, which depends on workers, skills, technology, and resources. In the long run, an economy grows richer mainly by becoming more productive: producing more with the same effort. This long-run growth in productivity is what lifts living standards over generations, why people today, on average, have far more than people centuries ago.`,
            `These forces interact. Short-term ups and downs (the business cycle) come from swings in total spending and confidence. Long-term prosperity comes from rising productivity. A healthy economy needs both: enough demand to keep people employed now, and growing productive power to raise living standards over time. Understanding these drivers is the key to diagnosing an economy.`,
          ],
          image: `/voyager-assets/social-studies/l07-s4-drivers.webp`,
          imageCaption: `Beneath the vital signs, deep forces drive an economy. The biggest is TOTAL SPENDING (aggregate demand): the combined spending of HOUSEHOLDS (goods and services), BUSINESSES (investing in equipment and expansion), and GOVERNMENT (roads, defense, and more). When total spending rises, the economy tends to grow; when it falls, it slows. Another force is PRODUCTION CAPACITY, the ability to actually make things, depending on workers, skills, technology, and resources. In the long run, economies grow richer mainly by becoming more PRODUCTIVE, making more with the same effort. Short-term cycles come from swings in spending and confidence; long-term prosperity comes from rising productivity. A healthy economy needs both.`,
          vocab: [
            { word: `total spending (aggregate demand)`,
              definition: `The combined spending of households, businesses, and government in an economy. When total spending rises, the economy tends to grow; when it falls, the economy tends to slow.`,
              audioPrompt: `Total spending, {name}, which economists call aggregate demand, is the combined spending of everyone in the economy: households buying goods, businesses investing in equipment and growth, and government spending on things like roads and defense. It's one of the biggest drivers of the economy. When total spending rises, the economy tends to grow and add jobs; when it falls, the economy slows. Notice that your own spending is one tiny part of this giant total. How might millions of people spending less at once slow a whole economy?` },
            { word: `productivity`,
              definition: `How much an economy can produce with a given amount of effort and resources. Rising productivity, through better technology, skills, and tools, is the main source of long-run prosperity.`,
              audioPrompt: `Productivity, {name}, is how much an economy can produce with a given amount of work and resources, and it's the secret to long-run prosperity. When workers gain better tools, technology, and skills, they produce more with the same effort, and that's what makes a society richer over generations. It's why people today, on average, have far more than people centuries ago, not because they work harder, but because they're far more productive. What invention do you think boosted human productivity the most, and why?` },
            { word: `short-run vs. long-run growth`,
              definition: `Short-run ups and downs come mainly from swings in spending and confidence (the business cycle); long-run prosperity comes mainly from rising productivity and production capacity.`,
              audioPrompt: `Short-run versus long-run growth, {name}, is a key distinction. In the short run, the economy's ups and downs, the business cycle, come mainly from swings in total spending and confidence. In the long run, what makes a country genuinely richer is rising productivity, making more with the same effort through better technology and skills. A healthy economy needs both: steady demand to keep people working now, and growing productivity to lift living standards over time. Which do you think leaders should focus on more, the short run or the long run?` },
          ],
        },

        {
          id: `l07-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Before The Case Studies`,
          paragraphs: [
            `Pull it together. Macroeconomics zooms out to study the entire national economy as one giant interconnected system, the forest, not the tree. Economists read its health through three vital signs: GDP (total value produced), inflation (how fast prices rise, eroding money), and unemployment (the share who want work but can't find it).`,
            `Economies move in cycles, not straight lines: expansion, peak, contraction, trough, recovery, the business cycle, with downturns called recessions (and severe ones depressions). These cycles come largely from swings in total spending and confidence. Beneath them, total spending drives short-term growth, while rising productivity drives long-term prosperity.`,
            `Now you become the economic analyst. Reading an economy is diagnosing real situations: what's happening, why, and what it means. The case-study screen presents five real scenarios, a recession, prices rising too fast, a long-run growth story, a boom and bust, and a puzzle where the vital signs conflict. For each, reason like an economist: identify the vital signs, the cycle phase, and the forces at work.`,
          ],
          image: `/voyager-assets/social-studies/l07-s5-before.webp`,
          imageCaption: `Threads together. MACROECONOMICS zooms out to study the entire national economy as one interconnected system, the forest, not the tree. Its three core vital signs: GDP (total value produced, measuring size and growth), INFLATION (how fast prices rise), and UNEMPLOYMENT (the share who want work but can't find it). Economies move in CYCLES, expansion, peak, contraction, trough, recovery, with downturns called RECESSIONS, driven largely by swings in spending and confidence. Beneath them: TOTAL SPENDING drives short-term growth, while rising PRODUCTIVITY drives long-term prosperity. Now you're the economic analyst: five real scenarios. Identify the vital signs, the cycle phase, and the forces at work.`,
          vocab: [
            { word: `reading an economy`,
              definition: `The skill of diagnosing a real economic situation by identifying its vital signs (GDP, inflation, unemployment), its cycle phase, and the underlying forces driving it.`,
              audioPrompt: `Reading an economy, {name}, is the real skill this lesson builds: not just memorizing terms, but looking at a real situation and diagnosing it like an economist. What are the vital signs, GDP, inflation, unemployment, doing? Where is the economy in the business cycle? What deeper forces, spending, confidence, productivity, are driving it? This is exactly how economists and leaders make sense of the economy. Are you ready to diagnose real economic situations the way a professional would?` },
            { word: `the human stakes`,
              definition: `The reality that behind every economic statistic are real people, jobs gained or lost, prices affordable or not, families prospering or struggling, making macroeconomics deeply personal.`,
              audioPrompt: `The human stakes, {name}, are the most important thing to remember about macroeconomics: behind every cold statistic are real human lives. A rise in unemployment means real people losing jobs; high inflation means families struggling to afford groceries; economic growth means more opportunity. The numbers matter because the people behind them matter. As you analyze the cases ahead, try to keep the real human beings in view, not just the data. Why do you think it's easy, but dangerous, to forget the people behind economic numbers?` },
            { word: `no perfect economy`,
              definition: `The recognition that managing an economy involves real tradeoffs (such as between fighting inflation and reducing unemployment), so there is no flawless outcome, only thoughtful balancing.`,
              audioPrompt: `No perfect economy, {name}, is a humbling truth you'll see throughout economics: managing an economy involves real tradeoffs, and you usually can't have everything at once. For example, steps that fight high inflation can sometimes raise unemployment, and vice versa. There's rarely a flawless answer, only thoughtful balancing of competing goals. This is why smart, well-meaning people disagree about economic policy. Does it change how you'll judge economic news to know there's usually no perfect option, only tradeoffs?` },
          ],
        },

        {
          id: `l07-case-study`,
          type: `case-study`,
          headline: `Five Diagnoses Of A National Economy`,
          intro: `{name}, you're the economic analyst now. Here are five real economic situations. For each, reason like an economist: What are the vital signs (GDP, inflation, unemployment) doing? Where is the economy in the business cycle? What underlying forces, spending, confidence, productivity, are driving what you see?`,
          cases: [
            {
              id: `c1`,
              title: `The economy that's shrinking`,
              type: `Diagnosing a recession`,
              description: `Reports come in: GDP has fallen for several months, businesses are laying off workers, unemployment is climbing, and people are nervous and spending less. Stores are emptier; companies cancel expansion plans. What is happening to this economy, in macroeconomic terms, and what's driving the downward spiral?`,
              questions: [
                `Which phase of the business cycle is this, and what is it called?`,
                `How are the three vital signs (GDP, inflation, unemployment) behaving?`,
                `Why does this situation tend to feed on itself and spiral downward?`,
              ],
              evaluation: `As an economic analyst, you'd diagnose this clearly as a recession, a significant, widespread, and lasting decline in economic activity, and the contraction phase of the business cycle. Let's read the vital signs. GDP (the total value of goods and services produced) has fallen for several months, that's the defining sign that the economy is shrinking, not growing. Unemployment is climbing, meaning more and more people who want jobs can't find them, a hallmark of a downturn and a source of real hardship. (Inflation often eases during a recession because demand is weak, though it depends on the situation.) These signs together, falling GDP plus rising unemployment, are the classic picture of a recession. Now, the deeper diagnosis: why is this happening, and why does it spiral? The engine here is the collapse of total spending (aggregate demand) and confidence, and the way they feed on each other. Notice the chain reaction in the scenario: people are nervous, so they spend less; because they spend less, stores sell less and businesses earn less; because businesses earn less, they lay off workers and cancel expansion; because workers lose jobs, even more people have less to spend and grow even more nervous, so they cut spending further, and the cycle repeats, downward. This is the vicious spiral of a recession: falling confidence reduces spending, which reduces business income, which increases unemployment, which further reduces confidence and spending. Each step makes the next worse. This is exactly why recessions can be so stubborn, they're partly self-reinforcing, driven by collective caution amplified across millions of decisions. As an analyst, you'd identify the phase (contraction/recession), read the vital signs (GDP down, unemployment up), and explain the underlying driver (a self-reinforcing drop in total spending and confidence). You'd also add two important points of perspective. First, the human stakes are real: behind "rising unemployment" are actual people losing jobs and families struggling, recessions cause genuine suffering. Second, recessions, however painful, are a normal part of the business cycle, not the end of the world; economies do recover, and downturns are eventually followed by expansion again. Understanding that the downward spiral is driven by falling spending and confidence is also the key to understanding why governments and central banks often try to break the spiral by boosting spending or restoring confidence, the policy responses you'll study in upcoming lessons. For now, the core analytical skill is clear: you can look at falling GDP, rising unemployment, and retreating confidence and correctly diagnose a recession and the self-feeding dynamic driving it.`,
            },
            {
              id: `c2`,
              title: `When prices won't stop rising`,
              type: `Diagnosing inflation`,
              description: `In another economy, the problem is different: prices are rising fast, much faster than usual. A loaf of bread, a tank of gas, a month's rent, all cost noticeably more than a year ago, and they keep climbing. People's paychecks don't stretch as far. Workers demand raises; businesses raise prices again. What's happening, and why is it a problem?`,
              questions: [
                `What is this rapid, ongoing rise in prices called?`,
                `Why does high inflation hurt people, even if they still have jobs?`,
                `How can inflation feed on itself in a wage-price spiral?`,
              ],
              evaluation: `As an economic analyst, you'd identify this immediately as high inflation, a rapid, ongoing rise in the overall level of prices across the economy. Let's be precise about what inflation is and why it's the central problem here. Inflation is the rate at which prices rise over time. A small, steady amount (often around a couple percent a year) is considered normal and even healthy. But when inflation runs high, as in this scenario, where bread, gas, and rent all cost noticeably more than a year ago and keep climbing, it becomes a serious problem. Why does high inflation hurt people, even those who still have jobs? Because it erodes the value of money, the purchasing power of every dollar. If prices rise faster than people's incomes, then even with the same paycheck (or even a modest raise), people can afford less than before, their money simply doesn't stretch as far. This is why high inflation feels like a hidden tax or a slow theft: you're not earning less on paper, but your money buys less in reality. It especially hurts people on fixed incomes (like retirees) and those whose wages don't keep up, and it makes planning for the future difficult because no one knows what things will cost. Now, the dynamic the scenario highlights, why inflation can feed on itself, is crucial and is called a wage-price spiral. Watch the loop: prices rise, so workers, needing to keep up, demand higher wages; businesses, now paying higher wages (and facing higher costs themselves), raise their prices again to cover those costs; higher prices then push workers to demand even higher wages, and the cycle repeats, spiraling upward. Each round of price increases triggers wage increases, which trigger more price increases. This self-reinforcing loop is part of what makes high inflation hard to stop once it gets going, much like the recession's downward spiral, but running in the opposite direction (upward, on prices). As an analyst, you'd diagnose high inflation, explain that it harms people by eroding purchasing power (so money buys less even if jobs remain), and identify the wage-price spiral as a mechanism that can make it self-reinforcing. You'd note the connection to the lesson's deeper forces: inflation often arises when total spending (demand) outpaces what the economy can produce, too much money chasing too few goods bids prices up, or when major costs (like energy) spike. And you'd recognize the policy tension to come: fighting inflation usually means cooling down spending, which can risk slowing the economy and raising unemployment, exactly the kind of tradeoff that means there's "no perfect economy," only difficult balancing. The key analytical skill: you can recognize rapidly rising prices as high inflation, explain its real human cost, and understand why it can spiral.`,
            },
            {
              id: `c3`,
              title: `The country that got richer over decades`,
              type: `Long-run growth and productivity`,
              description: `Look at a country over fifty years. Its people today have far more than their grandparents did: better homes, healthcare, technology, and goods, even though they don't work more hours. The economy is vastly larger and richer than it was, not just in one boom, but steadily over generations. What explains this long-run rise in prosperity?`,
              questions: [
                `Is this long-run growth explained mainly by the business cycle, or something else?`,
                `What is the main driver of an economy growing richer over generations?`,
                `How is this different from a short-term boom in the business cycle?`,
              ],
              evaluation: `As an economic analyst, you'd recognize this as a question about long-run economic growth, and you'd identify that its main driver is fundamentally different from what drives the short-term ups and downs of the business cycle. Here's the key distinction the lesson draws. The business cycle, expansions and recessions, explains the short-run ups and downs of an economy, driven largely by swings in total spending and confidence. But it does not explain why a country is vastly richer over fifty years than it was before. Booms and busts cancel out over time; you can't get fifty years of rising prosperity just from the upswings of the cycle. So the long-run rise in living standards described here, where people today have far more than their grandparents despite not working more hours, must be explained by something deeper: rising productivity (and the growing production capacity behind it). Productivity is how much an economy can produce with a given amount of effort and resources. When productivity rises, through better technology, better tools, more education and skills, and improved methods, workers can produce far more with the same (or even less) effort. This is the true engine of long-run prosperity. The reason people today, on average, have so much more than people centuries or even decades ago is not that they work harder, it's that they're enormously more productive, thanks to accumulated technology, knowledge, and capital. A worker today with a computer, modern machinery, and advanced techniques produces vastly more than a worker with hand tools a century ago. That rising output per worker, compounded over decades, is what lifts living standards across generations. How is this different from a short-term boom? A boom (the expansion phase of the business cycle) is a temporary surge in activity, often fueled by rising spending and optimism, that will eventually peak and be followed by a contraction; it's a cyclical up-and-down. Long-run growth from productivity is a sustained, structural rise in the economy's actual capacity to produce, a permanent lifting of the baseline, not a temporary swing. One is the wave on the surface (the cycle); the other is the rising tide over time (productivity growth). As an analyst, you'd conclude that this fifty-year rise in prosperity is explained by long-run productivity growth, not the business cycle, and you'd identify the drivers: technology, education and skills, better tools and methods, and investment in productive capacity. You'd also draw the important policy insight: while short-run policy focuses on smoothing the business cycle (managing spending and confidence), the deepest source of a nation's lasting wealth is its productivity, which is why investments in education, research, technology, and infrastructure matter so much for the long-term future, the kind of prosperity that shapes whether each generation lives better than the last.`,
            },
            {
              id: `c4`,
              title: `The boom that became a bust`,
              type: `Confidence, spending, and the cycle`,
              description: `An economy is booming: everyone's optimistic, spending freely, businesses expanding, prices and investments rising fast. Then confidence cracks, maybe a shock, maybe a realization that things got overheated. Suddenly people pull back, spending drops sharply, businesses retrench, and the boom flips into a sharp downturn. Trace what happened, in macroeconomic terms.`,
              questions: [
                `How did confidence and spending drive both the boom and the bust?`,
                `Why can an economy "overheat" during a boom?`,
                `What does this reveal about why the business cycle happens at all?`,
              ],
              evaluation: `As an economic analyst, you'd recognize this as a vivid illustration of how swings in confidence and total spending drive the business cycle, producing both the boom (expansion) and the bust (contraction), and showing exactly why economies move in cycles rather than straight lines. Let's trace the full arc. First, the boom (expansion): the scenario starts with widespread optimism. When people and businesses feel confident, they spend and invest more freely, households buy more, businesses expand and invest. This rising total spending (aggregate demand) fuels growth: more sales, more hiring, rising incomes, which makes everyone even more confident, so they spend even more. This is a self-reinforcing upward spiral, optimism feeding spending, spending feeding growth, growth feeding more optimism. That's the boom. But notice the danger building: an economy can "overheat" during a boom. Overheating happens when total spending and demand race ahead of what the economy can actually produce, and when optimism becomes excessive, people and businesses take on too much, prices and investments get bid up to unsustainable levels (sometimes a "bubble"), and growth is built partly on confidence that outruns reality. The boom contains the seeds of its own reversal. Then, the bust (contraction): confidence cracks, perhaps from a shock, perhaps from a dawning realization that things got overextended. The moment optimism turns to caution, the spiral reverses and runs downhill: people pull back and spend less; businesses, seeing falling sales, cut back, retrench, and lay off workers; falling incomes and rising fear make everyone even more cautious, so spending drops further. The same self-reinforcing dynamic that drove the boom now drives the bust, just in the opposite direction. The boom flips into a sharp downturn. What does this reveal about why the business cycle happens at all? It reveals that the cycle is driven substantially by the collective psychology of confidence and the spending it fuels, amplified across millions of decisions. Because confidence and spending feed on themselves in both directions, economies don't glide smoothly; they swing. Optimism builds booms that can overheat; the inevitable crack in confidence triggers busts; eventually pessimism bottoms out and recovery begins, and the cycle repeats. As an analyst, you'd explain that confidence and total spending drove both phases (the upward spiral of the boom and the downward spiral of the bust), that overheating occurs when demand and optimism outrun the economy's real productive capacity, and that this self-reinforcing, mood-driven dynamic is a core reason the business cycle exists. You'd note the crucial practical implication: because these swings are partly psychological and self-reinforcing, much of macroeconomic policy is about trying to moderate them, cooling an overheating boom before it becomes a dangerous bubble, and restoring confidence and spending during a bust to soften the downturn, which is precisely why understanding these forces matters for leaders and citizens alike.`,
            },
            {
              id: `c5`,
              title: `When the signs seem to conflict`,
              type: `Reading vital signs together`,
              description: `An economy shows a confusing picture: unemployment is low (most people have jobs), which sounds good, but inflation is high and rising (prices climbing fast), which sounds bad. Leaders face pressure to "fix it," but the obvious fixes seem to conflict. Why is this situation tricky, and what does it reveal about managing an economy?`,
              questions: [
                `Why can't you judge an economy's health from just one vital sign?`,
                `Why might fighting inflation risk raising unemployment, and vice versa?`,
                `What does this reveal about tradeoffs in managing an economy?`,
              ],
              evaluation: `As an economic analyst, you'd recognize this as the crucial lesson that an economy must be read by all its vital signs together, never just one, and that managing it involves genuine tradeoffs with no perfect solution. First, why can't you judge an economy's health from a single vital sign? Because the signs can point in different directions at once, as they do here: low unemployment (which sounds healthy, most people who want jobs have them) alongside high, rising inflation (which sounds unhealthy, money is rapidly losing value). If you looked only at unemployment, you'd say the economy is great; if you looked only at inflation, you'd say it's in trouble. Neither single number tells the true, full story. This is exactly why economists watch GDP, inflation, and unemployment together, reading them in combination reveals far more than any one alone. An economy can be strong in one dimension and troubled in another simultaneously, and a good analyst holds the whole picture. Second, why might fixing one problem worsen the other? This gets to the heart of macroeconomic tradeoffs. Often (though not always), there's tension between fighting inflation and keeping unemployment low. Here's the logic: high inflation is frequently driven by too much total spending (demand) relative to what the economy can produce, too much money chasing too few goods, bidding prices up. To fight that inflation, policymakers typically try to cool down spending (you'll learn the specific tools in later lessons). But cooling spending slows the economy, and a slowing economy means businesses sell less, hire less, and may lay off workers, which raises unemployment. So the very medicine that fights inflation (cooling demand) can cause the side effect of higher unemployment. Conversely, measures to reduce unemployment by boosting spending and growth can heat up demand and push inflation higher. That's the bind: pushing on one problem can aggravate the other. Third, what does this reveal about managing an economy? It reveals one of the deepest truths in macroeconomics: there is no perfect economy and no painless fix, only difficult tradeoffs to balance. Leaders facing this situation can't simply "fix it" with one move, because the obvious cures conflict. They must weigh competing goals, how much inflation to tolerate versus how much unemployment to risk, and make hard judgment calls with real consequences for real people either way. This is precisely why smart, well-meaning, well-informed people genuinely disagree about economic policy: they weigh the tradeoffs differently, and there's no flawless answer that gives everyone everything. As an analyst, you'd conclude that this confusing scenario is actually a profound lesson: read all the vital signs together (never one in isolation), recognize that fighting inflation and reducing unemployment can pull against each other, and understand that managing an economy is an art of balancing competing goals amid unavoidable tradeoffs, not a simple matter of pushing one button to make everything good at once. That humility, and that ability to hold multiple signs and tradeoffs in view, is the mark of someone who can truly read an economy.`,
            },
          ],
          synthesisPrompt: `After all five: in your own words, explain how you'd diagnose the health of a national economy, what vital signs you'd read, how the business cycle works, and what deeper forces (spending, confidence, productivity) drive it. Why is there "no perfect economy," only tradeoffs? Which case taught you the most about reading the economy that shapes your future? In 5-6 sentences.`,
          reflectionPrompt: `Behind every economic statistic, a point of GDP, a percent of inflation, a jobless number, are real human lives: families thriving or struggling, your own future job, what your money will buy. How does it change things to realize the economy isn't just numbers, but the system that will shape whether you and the people you love prosper?`,
        },

        {
          id: `l07-quiz`,
          type: `quiz`,
          headline: `Check your understanding`,
          questions: [
            {
              id: `q1`,
              type: `multiple-choice`,
              question: `What does macroeconomics study?`,
              options: [
                `The price of a single product in a single store.`,
                `The entire national economy treated as one interconnected system.`,
                `How one individual person manages their own budget.`,
                `The decisions of a single business about what to sell.`,
              ],
              correctIndex: 1,
              explanation: `Macroeconomics zooms out to study the whole national economy as one system, the forest, not the tree. The distractors describe microeconomics, which zooms in on individual buyers, businesses, or products.`,
            },
            {
              id: `q2`,
              type: `multiple-choice`,
              question: `What is GDP (Gross Domestic Product)?`,
              options: [
                `The amount of money the government collects in taxes each year.`,
                `The number of people who are unemployed in a country.`,
                `The total value of all goods and services a country produces in a year.`,
                `The rate at which prices rise across the economy.`,
              ],
              correctIndex: 2,
              explanation: `GDP is the total value of all goods and services a country produces in a year, the broadest measure of an economy's size; its growth signals expansion. The distractors describe tax revenue, unemployment, and inflation.`,
            },
            {
              id: `q3`,
              type: `multiple-choice`,
              question: `Why does high inflation hurt people, even if they keep their jobs?`,
              options: [
                `Because it forces everyone to work many more hours.`,
                `Because it erodes the value of money, so each dollar buys less than before.`,
                `Because it makes all products completely disappear from stores.`,
                `Because it automatically lowers everyone's wages to zero.`,
              ],
              correctIndex: 1,
              explanation: `High inflation erodes purchasing power: if prices rise faster than income, people can afford less even with the same paycheck. The distractors invent effects (forced hours, disappearing goods, zero wages) that inflation does not cause.`,
            },
            {
              id: `q4`,
              type: `multiple-choice`,
              question: `What is a recession?`,
              options: [
                `A period when prices fall so low that everything becomes free.`,
                `A time when the economy grows faster than ever before.`,
                `The single highest point of the business cycle.`,
                `A significant, lasting decline when the economy shrinks and unemployment rises.`,
              ],
              correctIndex: 3,
              explanation: `A recession is a significant, widespread, lasting decline, GDP shrinks, businesses cut back, and unemployment rises, a normal but painful part of the business cycle. The distractors describe free goods, fast growth, or a peak.`,
            },
            {
              id: `q5`,
              type: `multiple-choice`,
              question: `What are the phases of the business cycle, in order?`,
              options: [
                `Expansion, peak, contraction, trough, then recovery.`,
                `Inflation, deflation, GDP, then unemployment.`,
                `Spending, saving, borrowing, then lending.`,
                `Boom, boom, boom, with no downturns ever.`,
              ],
              correctIndex: 0,
              explanation: `The business cycle moves through expansion (growth), a peak (high point), contraction (decline), a trough (low point), and then recovery. The distractors list unrelated terms or deny that downturns occur.`,
            },
            {
              id: `q6`,
              type: `multiple-choice`,
              question: `What mainly drives the short-term ups and downs of the business cycle?`,
              options: [
                `Changes in the number of hours in a day.`,
                `The personal mood of a single business owner.`,
                `Swings in total spending and collective confidence.`,
                `The weather in different parts of the country.`,
              ],
              correctIndex: 2,
              explanation: `Short-term ups and downs are driven largely by swings in total spending (aggregate demand) and collective confidence, which feed on each other in booms and busts. The distractors name irrelevant or trivial factors.`,
            },
            {
              id: `q7`,
              type: `multiple-choice`,
              question: `What is the main driver of an economy growing richer over many generations?`,
              options: [
                `People simply working far more hours than before.`,
                `Rising productivity, producing more with the same effort through better technology and skills.`,
                `Printing larger and larger amounts of money.`,
                `Having many more separate recessions, happening one right after another over time.`,
              ],
              correctIndex: 1,
              explanation: `Long-run prosperity comes mainly from rising productivity, producing more with the same effort via better technology, tools, and skills, which lifts living standards over generations. The distractors confuse growth with overwork, money-printing, or downturns.`,
            },
            {
              id: `q8`,
              type: `multiple-choice`,
              question: `Why must you read an economy by all its vital signs together, not just one?`,
              options: [
                `Because the vital signs can point in different directions at once, telling the full story only in combination.`,
                `Because supposedly only GDP actually matters and all of the other vital signs are fake.`,
                `Because economists are strictly required by federal law to always use exactly three different numbers.`,
                `Because all the vital signs always say exactly the same thing.`,
              ],
              correctIndex: 0,
              explanation: `An economy can be strong in one sign and troubled in another at the same time (for example, low unemployment with high inflation), so only reading GDP, inflation, and unemployment together reveals the full picture. The distractors are false.`,
            },
            {
              id: `q9`,
              type: `true-false`,
              question: `True or false: Because low unemployment and low inflation are both good, a skilled government can always achieve both at the same time with no tradeoffs, so anyone who fails to do so is simply incompetent.`,
              correctAnswer: false,
              explanation: `False, and understanding why reveals one of the deepest and most humbling truths in all of macroeconomics: managing an economy involves genuine tradeoffs, and there is no perfect outcome that delivers everything good at once. It is true that, in general, both low unemployment and low, stable inflation are desirable. But it is not true that a government can always achieve both simultaneously, because these goals can pull against each other. Here is the core tension: high inflation is often driven by too much total spending (demand) relative to what the economy can actually produce, too much money chasing too few goods, which bids prices up. To fight that inflation, policymakers typically try to cool down overall spending. But cooling spending also slows the economy, and a slowing economy means businesses sell less, hire less, and may lay off workers, which tends to raise unemployment. Conversely, efforts to reduce unemployment by boosting spending and growth can heat up demand and push inflation higher. So pushing hard on one problem can worsen the other, this is a real, structural tradeoff, not a sign of incompetence. This is exactly why an economy must be read by all its vital signs together (GDP, inflation, and unemployment), since it can be strong in one dimension and troubled in another at the very same time, for instance, low unemployment alongside high, rising inflation. A leader facing that situation cannot simply "fix it" with one move, because the obvious cures conflict: cooling inflation risks raising unemployment, and cutting unemployment risks worsening inflation. They must weigh competing goals and make difficult judgment calls with real consequences either way. This is precisely why smart, well-informed, well-meaning people genuinely disagree about economic policy, they weigh the tradeoffs differently, and there is no flawless answer that gives everyone everything. The lesson's principle is that there is "no perfect economy," only thoughtful balancing of competing goals. So the statement is false: low unemployment and low inflation cannot always be achieved together because they can involve real tradeoffs, and failing to achieve both at once usually reflects the genuine difficulty of those tradeoffs, not mere incompetence.`,
            },
            {
              id: `q10`,
              type: `inference`,
              question: `A news report says: "GDP has fallen for six straight months, unemployment is rising, stores are emptier, and consumers say they're too nervous to spend." Using the lesson, what is the best macroeconomic diagnosis?`,
              options: [
                `The economy is booming, since empty stores mean everyone already has what they need.`,
                `The economy is in a recession (a contraction): falling GDP and rising unemployment are classic signs, and falling confidence is reducing spending, which reduces business income, which raises unemployment further, a self-reinforcing downward spiral.`,
                `Nothing meaningful can be said, because GDP and unemployment are unrelated to each other.`,
                `This proves the economy will never recover, since recessions are permanent and have no end.`,
              ],
              correctIndex: 1,
              explanation: `Falling GDP plus rising unemployment is the classic picture of a recession (the contraction phase), and the nervous pullback in spending feeds a self-reinforcing downward spiral: less spending → less business income → more layoffs → less confidence → still less spending. The distractors misread the signs or wrongly claim recessions are permanent.`,
            },
          ],
        },

        {
          id: `l07-reflection`,
          type: `reflection`,
          headline: `Sit with this`,
          intro: `Pick the prompt that pulls at you most. Your answer is saved.`,
          prompts: [
            { id: `reflect-human-stakes`, category: `The people behind the numbers`, prompt: `Behind every economic statistic, a point of GDP, a percent of inflation, a jobless number, are real human lives. How does it change things to realize the economy isn't just numbers, but the system that will shape whether you and the people you love prosper?` },
            { id: `reflect-surprise`, category: `What shifted`, prompt: `Before this lesson, phrases like "the economy is growing" or "inflation is up" were probably just background noise. What surprised you most about what these actually mean, and what changed in how you'll hear economic news from now on?` },
            { id: `reflect-cycle`, category: `Living through cycles`, prompt: `Economies move in cycles, booms and busts, not straight lines. How does knowing that downturns are a normal part of the cycle, not the end of the world, change how you might respond to hard economic times in your own life?` },
            { id: `reflect-heritage`, category: `Teaching the economy`, prompt: `Caro, you're building social studies for conscious families. How would you help a child grasp something as abstract as a national economy, maybe through the forest-and-tree image or a story about prices changing, so the economy feels understandable rather than intimidating?` },
            { id: `reflect-tradeoffs`, category: `No perfect answer`, prompt: `You learned there's "no perfect economy", fixing inflation can raise unemployment, and vice versa. How does accepting that real tradeoffs exist, with no flawless solution, change how you'll judge leaders and economic news?` },
            { id: `reflect-productivity`, category: `Why we have so much`, prompt: `People today, on average, have far more than their grandparents, mainly because of rising productivity, not working harder. What do you make of the idea that better tools and knowledge, not just effort, are what truly make a society richer over time?` },
          ],
        },

        {
          id: `l07-real-world`,
          type: `real-world`,
          headline: `Take it into the world`,
          familyActivity: {
            title: `Read Your Nation's Vital Signs`,
            duration: `One afternoon`,
            description: `Turn an afternoon into a real lesson in reading a national economy, making something abstract finally click for your whole family. Start with the big idea: explain the difference between microeconomics (one tree) and macroeconomics (the whole forest), and discuss why understanding the whole economy matters for everyone's life, jobs, prices, opportunity. Decode the vital signs: look up your country's current GDP growth, inflation rate, and unemployment rate (recent, age-appropriate figures), and as a family, "diagnose" the economy's health the way a doctor reads vital signs, is it growing, are prices stable, can people find work? Make inflation real: find an old price (a candy bar, a movie ticket, a gallon of gas or milk from decades ago) and compare it to today's price, then talk about how inflation slowly erodes what money can buy, and why that matters for families. Map the business cycle: draw the wave of expansion, peak, contraction, trough, and recovery, and place recent history on it (recent booms and recessions your family remembers or can look up), discussing how downturns are painful but normal and temporary. Explore confidence: talk about how the collective mood, optimism or fear, drives spending and can fuel booms and busts, and notice how confidence spreads person to person. Understand long-run growth: discuss why people today have so much more than their great-grandparents (rising productivity from technology and knowledge, not just working harder), and name inventions that boosted productivity. Play economic analyst: take a real piece of economic news and analyze it together using the lesson, what vital signs are involved, what cycle phase, what underlying forces? Confront tradeoffs: discuss why there's "no perfect economy" (fighting inflation can raise unemployment), and why thoughtful people disagree about economic policy. Finally, keep the human stakes in view: remind each other that behind every statistic are real people, and connect it to your own family's hopes for the future. The goal is to transform the economy from confusing background noise into a system your family can actually read, diagnose, and discuss, one that shapes your shared future and that you can now understand with real confidence.`,
          },
          projectOption: {
            title: `The Economic Analyst Project, 2 weeks (optional)`,
            duration: `2 weeks, ~40 minutes per session`,
            description: `Investigate the real health of a national economy and diagnose it like a professional, becoming someone who can read the economic forces shaping the world. Week 1, gather and read the vital signs: choose an economy to study, your own country, another country, or a specific historical period (such as the Great Depression, a famous boom, or a recent recession). Research its key macroeconomic vital signs: GDP and whether it's growing or shrinking, the inflation rate and what's happening to prices, and the unemployment rate and how many can't find work. Find reliable, age-appropriate data, and track how these signs have changed over time. Then diagnose: based on the vital signs, what is (or was) the economy's overall health? Where is it in the business cycle, expansion, peak, contraction, or trough? Document your reading of the economy as a doctor would chart a patient. Week 2, explain the forces and tell the story: dig into why the economy is doing what it's doing. What's happening to total spending and confidence (driving the short-run cycle)? What about long-run productivity and growth? If you chose a recession or boom, trace the self-reinforcing spirals of confidence and spending. If you chose a long-run growth story, explain the role of rising productivity. Identify any tradeoffs leaders faced (like fighting inflation versus reducing unemployment). Then keep the human stakes front and center: connect the numbers to real people, who was helped or hurt, and how? Produce your final piece, an "economic health report," a documentary-style video, a data-rich infographic or dashboard, a presentation, or a written analysis, that reads the vital signs, diagnoses the economy's condition and cycle phase, explains the underlying forces, honestly notes the tradeoffs, and never loses sight of the real human lives behind the statistics. The aim is to experience macroeconomics as a genuine analytical skill: the ability to look at a real economy, read its vital signs, diagnose its health, and explain the deep forces driving it, the same skill economists and leaders use to understand the system that shapes whether you, your family, and your whole society will prosper.`,
            offerToParent: `Parent: opt your child into the Economic Analyst Project. Researching a real economy's vital signs, GDP, inflation, and unemployment, diagnosing its health and business-cycle phase, and explaining the underlying forces (spending, confidence, productivity) and the tradeoffs leaders face, directly develops core C3 Framework economics concepts: how national economies work, key macroeconomic indicators, the business cycle, economic growth, and economic decision-making. Reading real data, diagnosing an economy like a professional, and keeping the human stakes in view builds data literacy, analytical reasoning, and genuine economic understanding. It's rigorous, standards-aligned work that turns the confusing economic news your child hears every day into a system they can actually read, understand, and one day help shape.`,
          },
          identityQuestion: `If you become someone who can read a national economy, diagnose its health from its vital signs, understand why it booms and busts, and see the real human lives behind the numbers, what kind of citizen does that make you, one who can understand the economic forces shaping your job, your money, and your society, and judge economic news and leaders with real insight, that someone who hears "the economy is growing" or "inflation is up" as meaningless noise never can?`,
        },

        {
          id: `l07-identity-hook`,
          type: `identity-hook`,
          headline: `Who is this lesson making you?`,
          prompt: `One sentence. No wrong answer.`,
          placeholder: `Someone who...`,
          examples: [
            `Someone who can read a national economy's vital signs and diagnose its health.`,
            `A person who understands why economies boom, bust, and grow over time.`,
            `Someone who sees the real human lives behind every economic number.`,
          ],
          saveKey: `identity_responses_social_studies_11_12_07`,
        },

        {
          id: `l07-celebration`,
          type: `celebration`,
          guideText: `{name}. You've just learned to read something most adults nod along to without truly understanding: the national economy. You learned to zoom out, the way macroeconomics does, to see the whole economy as one giant interconnected system, the forest, not the single tree. You learned its three core vital signs, GDP (the total value a country produces, measuring its size and growth), inflation (how fast prices rise, eroding the value of money when high), and unemployment (the share of people who want work but can't find it), and that you must read them together, never one alone. You discovered that economies move in cycles, not straight lines, expansion, peak, contraction, trough, recovery, with painful downturns called recessions, and you saw that these cycles are driven largely by self-reinforcing swings in total spending and collective confidence. You uncovered the deeper forces: total spending driving short-term growth, and rising productivity driving the long-run prosperity that lets each generation live better than the last. And as an economic analyst, you diagnosed five real situations, a recession's downward spiral, an inflationary wage-price spiral, a fifty-year productivity-driven rise, a confidence-fueled boom and bust, and a tricky case where the vital signs conflicted, revealing that there's no perfect economy, only tradeoffs. Most importantly, you kept the human stakes in view: behind every number are real lives. Next, we zoom back in, from the whole forest to the individual trees, to study microeconomics: how markets, prices, supply, and demand actually work at the level of buyers and sellers. Onward, {name}. — Atlas`,
          badge: `economy-reader`,
          badgeName: `Economy Reader`,
          xpEarned: 75,
          competencies: [
            `Understands what macroeconomics studies: the whole national economy as one system`,
            `Knows the three vital signs: GDP, inflation, and unemployment, and reads them together`,
            `Understands the business cycle: expansion, peak, contraction, trough, and recovery`,
            `Can define a recession and explain its self-reinforcing downward spiral`,
            `Knows that swings in spending and confidence drive short-term ups and downs`,
            `Understands that rising productivity drives long-run prosperity and living standards`,
            `Can diagnose a real economy and recognizes there are tradeoffs, not perfect solutions`,
          ],
          nextLessonPreview: {
            title: `Lesson 8: Microeconomics — Markets, Supply, Demand, and Pricing`,
            hook: `From the whole forest to the individual trees: how prices, buyers, and sellers actually work. A Case Study.`,
          },
        },
      ],
    },
  ],
};

export default SOCIAL_STUDIES_VOYAGER_L07;

if (import.meta.env?.DEV) {
  const l = SOCIAL_STUDIES_VOYAGER_L07.lessons[0];
  const mags = l.screens.filter((s) => s.type === `magazine`).length;
  const cs = l.screens.find((s) => s.type === `case-study`)?.cases?.length ?? 0;
  const quiz = l.screens.find((s) => s.type === `quiz`)?.questions?.length ?? 0;
  console.log(`[LESSON-SS-VOYAGER-L07 ${VERSION}] "${l.title}" mags=${mags} cases=${cs} q=${quiz}`);
}
