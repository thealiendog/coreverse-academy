// ─────────────────────────────────────────────────────────────────────────────
// MONEY & BUSINESS VOYAGER  |  L01 — How Money Actually Works
// Age band : voyagers (11-12)   Guide: ace (Eagle)
// Standards: Coreverse Original — Macroeconomics, Financial Literacy
// CALIBRATED: Voyager spec v1.1 (May 2026)
// Interaction format: ARGUMENT BUILDER (spending vs austerity vs targeted spending)
// ─────────────────────────────────────────────────────────────────────────────

const VERSION = "voyager-mb-l01-v1";

const MONEYBUSINESS_VOYAGER_L01 = {
  ageBand: `voyagers`,
  subjectId: `money-business`,
  guide: `ace`,

  lessons: [
    {
      id: `mb-11-12-01`,
      title: `How Money Actually Works`,
      duration: 35,
      xpReward: 75,
      badge: `economy-decoder`,
      badgeName: `Economy Decoder`,

      screens: [
        {
          id: `l01-welcome`,
          type: `welcome`,
          guideText: `{name}, I'm Ace. We're starting one of the most useful subjects in your whole education: how money and business actually work. Most of what you've been told about money is either oversimplified ("just save your money") or oversold ("this is how the rich think"). The truth is more interesting and more useful. By the time we finish this band, you'll know more about economics, business, money management, and financial literacy than most adults. We're starting at the top. How does money actually work in a country? When the economy is struggling, what should governments actually do? This is debated by serious economists. Today you'll engage with the real arguments and build your own position.`,
          headline: `How Money Actually Works`,
          subtitle: `Economic basics most adults never learned.`,
          visual: `/voyager-assets/money-business/l01-welcome.webp`,
        },

        {
          id: `l01-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Money Isn't What You Think`,
          paragraphs: [
            `Most people think money is the green paper in their wallet. Money is bigger than that. Money is anything an economy agrees has value. For most of history, money was gold, silver, or sometimes shells and salt. Today most money isn't physical at all. When you swipe a card or pay with a phone, no paper changes hands. Numbers in databases get updated. The US dollar is, at root, an agreement among hundreds of millions of people that these numbers and notes can be exchanged for goods, services, and labor.`,
            `This raises a strange question. Who creates money? In the US, two main entities. The Treasury Department prints physical currency. The Federal Reserve (the Fed) controls the supply of digital money through lending and interest rates. Most money in modern economies is actually created when banks make loans. When a bank lends you $100,000 for a house, they don't take that $100,000 out of a vault. They create it in your account. This is called fractional reserve banking and it's how modern money supply mostly grows.`,
            `Money has three core functions in any economy. Medium of exchange: you can use it to buy stuff instead of trading goods directly. Store of value: you can save it and use it later. Unit of account: prices, salaries, and debts can all be measured in the same units, making comparison possible. Knowing these three functions clearly is a foundation everything else in this subject builds on.`,
          ],
          image: `/voyager-assets/money-business/l01-s1-money.webp`,
          imageCaption: `Mostly digital, mostly created by loans, mostly an agreement.`,
          vocab: [
            {
              word: `Federal Reserve`,
              definition: `The central bank of the United States. Controls money supply and interest rates. Independent from political branches, though appointed by the president and confirmed by the Senate.`,
              audioPrompt: `The Federal Reserve is the central bank of the United States, {name}. People call it the Fed. It controls the money supply and sets interest rates. It is technically independent from the political branches of government, though its leaders are appointed by the president and confirmed by the Senate. Almost every country has a central bank that does similar work. The Fed's decisions affect every loan, every mortgage, every credit card rate, and indirectly every job and price in the US. Understanding the Fed is one of the most useful pieces of financial literacy you can develop.`,
            },
            {
              word: `fractional reserve banking`,
              definition: `The system by which banks create new money when they make loans, holding only a fraction of deposits as reserves. How most of the modern money supply actually grows.`,
              audioPrompt: `Fractional reserve banking is the system by which banks create new money when they make loans, {name}. When a bank lends you $100,000 for a house, they don't take that money out of a vault. They create it in your account. Banks are required to hold only a fraction of deposits as reserves. This is how most of the modern money supply grows. It means that every loan a bank makes adds new money to the economy. It also means that if too many depositors try to withdraw at once, banks can face a crisis. The Federal Reserve manages this system through lending rules and interest rates.`,
            },
            {
              word: `medium of exchange`,
              definition: `One of money's three core functions: the ability to use it to buy goods and services instead of bartering directly. Along with store of value and unit of account, it defines what money is.`,
              audioPrompt: `Medium of exchange is one of money's three core functions, {name}. It means you can use money to buy goods and services instead of trading directly, like bartering a chicken for a pair of shoes. Before money, economies relied on barter, which required both parties to want exactly what the other had. Money solved that problem. The other two functions are store of value, meaning you can save money and use it later, and unit of account, meaning prices and debts can all be measured in the same units. All three together define what makes something money.`,
            },
          ],
        },

        {
          id: `l01-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `The Economy Is Not One Thing`,
          paragraphs: [
            `When people say "the economy," they usually mean a few different things mixed together. There's the size of the economy: how much stuff is produced and sold, measured by Gross Domestic Product (GDP). There's employment: how many people have jobs and what they pay. There's prices: how expensive things are, measured by inflation rates. There's wealth distribution: how the total economic pie is split among people. All four can move in different directions at the same time, which is part of why economic news is confusing.`,
            `An economy in trouble usually means several of these are going wrong at once. In a recession, GDP shrinks, unemployment rises, and people spend less. In a stagflation, GDP stagnates while prices rise (this happened in the 1970s). In a boom, GDP grows fast, unemployment falls, but prices may also rise faster than wages. Each situation calls for different responses, which is part of why economists disagree so much about what to do at any given moment.`,
            `The role of government in this is enormous. Government spending alone is roughly 30 to 40 percent of GDP in most developed countries, including the US. When governments spend more, they put money into the economy. When they tax, they take money out. When they cut spending, they reduce economic activity. The big question, debated for almost a century, is: when the economy is in trouble, should governments spend more to help, cut spending to balance budgets, or do something more targeted?`,
          ],
          image: `/voyager-assets/money-business/l01-s2-economy.webp`,
          imageCaption: `GDP, employment, prices, wealth distribution. Four moving parts.`,
          vocab: [
            {
              word: `GDP`,
              definition: `Gross Domestic Product. The total value of goods and services produced in a country in a year. The most common measure of how large or healthy an economy is.`,
              audioPrompt: `GDP stands for Gross Domestic Product, {name}. It is the total value of goods and services produced in a country in a year. It is the most common measure of how big and active an economy is. The US has the largest GDP of any country, around 27 trillion dollars in recent years. China is second. GDP isn't a perfect measure. It doesn't capture quality of life, environmental damage, or whether wealth is distributed fairly. But it gives you a useful starting picture of how an economy is doing. When you hear "the economy grew 2 percent," that usually means GDP grew 2 percent.`,
            },
            {
              word: `recession`,
              definition: `A period when GDP shrinks, unemployment rises, and economic activity contracts. Typically defined as two consecutive quarters of falling GDP. Calls for different policy responses than periods of growth.`,
              audioPrompt: `A recession is a period when GDP shrinks, unemployment rises, and economic activity contracts, {name}. The standard definition is two consecutive quarters of falling GDP. During recessions, people lose jobs, so they spend less. Businesses sell less, so they cut further. The cycle can accelerate downward. This is exactly the scenario where the three government policy positions you will learn about, spending more, cutting spending, and targeted investment, disagree most sharply about what to do. Recessions are where economic theory meets real life.`,
            },
            {
              word: `wealth distribution`,
              definition: `How total economic output and assets are divided among people in an economy. A key dimension of economic health alongside GDP, employment, and prices.`,
              audioPrompt: `Wealth distribution is how total economic output and assets are divided among people in an economy, {name}. An economy can have high GDP while most of the gains go to a small number of people. Or it can have moderate GDP with gains spread more broadly. Wealth distribution is one of the four key dimensions of economic health, alongside GDP, employment, and prices. They can all move in different directions at the same time, which is part of why economic news seems confusing. Understanding all four helps you interpret what is actually happening in the economy at any moment.`,
            },
          ],
        },

        {
          id: `l01-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Position One: Spend More (Keynesian)`,
          paragraphs: [
            `One major school of economic thought says: when the economy is in trouble, the government should spend more. This view is associated with the British economist John Maynard Keynes, who developed it during the Great Depression in the 1930s. Keynes argued that when consumers and businesses are scared and not spending, somebody has to spend, or the economy spirals down. That somebody is the government.`,
            `The reasoning: in a recession, people lose jobs, so they spend less. Businesses sell less, so they lay off more people. Those newly laid-off people spend even less. The cycle accelerates downward. Government spending, even if financed by borrowing, can break this cycle. The government hires people to build roads, schools, or whatever. Those workers earn money and spend it. The businesses they spend at hire more people. Activity rebuilds. Once the economy is healthy again, the government can pay back what it borrowed during the slump.`,
            `Real-world evidence: the 2008 financial crisis. The US government passed the American Recovery and Reinvestment Act, an $831 billion stimulus package. Unemployment, which peaked at 10 percent in October 2009, gradually fell to 4 percent by 2018. Most mainstream economists credit the stimulus with shortening and softening the recession, though they disagree about how much. The COVID-19 stimulus packages, even larger, are generally credited with the unusually fast recovery from the 2020 economic crash.`,
          ],
          image: `/voyager-assets/money-business/l01-s3-keynes.webp`,
          imageCaption: `Keynesian view: government spends to break the downward spiral.`,
          vocab: [
            {
              word: `Keynesian economics`,
              definition: `An economic school developed by John Maynard Keynes that argues governments should increase spending during recessions to stimulate the economy, even at the cost of running deficits.`,
              audioPrompt: `Keynesian economics is an economic school developed by John Maynard Keynes during the Great Depression, {name}. The core idea: when consumers and businesses stop spending in a recession, government should step in and spend, even if it has to borrow. This breaks the downward spiral and helps the economy recover. Once recovery is solid, government can pay back what it borrowed. Keynesianism dominated US and UK economic policy from the 1940s through the 1970s. It went out of fashion in the 1980s but came back during the 2008 crisis. It remains one of the most influential frameworks in modern macroeconomics.`,
            },
            {
              word: `stimulus package`,
              definition: `Government spending designed to boost economic activity during a downturn. The 2008 American Recovery and Reinvestment Act was an $831 billion stimulus package.`,
              audioPrompt: `A stimulus package is government spending designed to boost economic activity during a downturn, {name}. The 2008 American Recovery and Reinvestment Act was an $831 billion stimulus package. It funded infrastructure, extended unemployment benefits, and provided tax cuts. Unemployment peaked at 10 percent in October 2009 and gradually fell to 4 percent by 2018. Most economists credit the stimulus with shortening the recession. The COVID-19 stimulus packages in 2020 and 2021 were even larger and are generally credited with the unusually fast recovery from that economic crash. Stimulus packages are the Keynesian tool in action.`,
            },
            {
              word: `Great Depression`,
              definition: `The severe global economic crisis of the 1930s, triggered by the 1929 stock market crash. Led to widespread unemployment and poverty, and prompted the development of Keynesian economics.`,
              audioPrompt: `The Great Depression was the severe global economic crisis of the 1930s, {name}. It was triggered by the 1929 stock market crash. Unemployment in the US reached 25 percent. Banks failed. International trade collapsed. It was the worst economic crisis in modern history. It also prompted the development of Keynesian economics, as John Maynard Keynes argued that only massive government spending could break the downward spiral. The New Deal programs of Franklin Roosevelt were largely Keynesian responses. The Great Depression shaped economic thinking and policy for generations.`,
            },
          ],
        },

        {
          id: `l01-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Position Two: Cut Spending (Austerity)`,
          paragraphs: [
            `A second major school of economic thought says: when the economy is in trouble, the government should cut spending and let markets recover on their own. This view goes back to classical economics and was revived in the 1970s by economists like Friedrich Hayek and Milton Friedman, and politicians like Margaret Thatcher and Ronald Reagan. The argument: government debt is a real problem that has to be paid back eventually, and trying to spend your way out of a recession often creates worse problems later.`,
            `The reasoning: when governments borrow heavily, they crowd out private investment, push up interest rates, and create future tax burdens. Markets, left alone, naturally correct themselves. Failing businesses go bankrupt, which is painful but necessary. Resources move to more productive uses. Workers find new industries. The economy emerges leaner and stronger. Government interference, on this view, prolongs the pain and stores up future problems.`,
            `Real-world evidence: this is where the position gets harder. After the 2008 crisis, most European Union countries, particularly Greece, Spain, and the UK, pursued various levels of austerity, cutting government spending while raising taxes. The results were mixed at best and disastrous at worst. Greece's economy contracted by 25 percent over the next several years. Youth unemployment in Spain hit 50 percent. The UK's recovery was the slowest of any major developed nation. Most modern macroeconomists, even free-market-leaning ones, have moved away from pure austerity as a response to deep recessions. The pure version of this position has fewer defenders than it did 30 years ago.`,
          ],
          image: `/voyager-assets/money-business/l01-s4-austerity.webp`,
          imageCaption: `Austerity view: let markets correct, don't dig the debt hole deeper.`,
          vocab: [
            {
              word: `austerity`,
              definition: `Economic policy of cutting government spending and often raising taxes, especially during recessions, to reduce deficits and let markets self-correct.`,
              audioPrompt: `Austerity is economic policy of cutting government spending and often raising taxes, {name}. The idea is to reduce government deficits and let markets correct themselves. Austerity policies were widely tried in Europe after the 2008 financial crisis. The results were mostly disappointing. Greece, Spain, and the UK all experienced longer and deeper economic problems than the US, which used more Keynesian stimulus. Most macroeconomists today are skeptical of pure austerity as a response to deep recessions, though debates continue about when and how much government spending makes sense.`,
            },
            {
              word: `government debt`,
              definition: `The total amount a government owes to creditors from years of spending more than it collects in taxes. A core concern in austerity economics and a real constraint on government policy.`,
              audioPrompt: `Government debt is the total amount a government owes to creditors from years of spending more than it collects in taxes, {name}. Austerity advocates argue this debt is a real problem that must be paid back eventually, and that excessive borrowing crowds out private investment and creates future tax burdens. The US national debt was around 34 trillion dollars as of 2024, and interest payments on it exceed the defense budget. Even Keynesian economists acknowledge the debt is real. They simply argue that the cost of letting recessions worsen is higher than the cost of borrowing to fight them.`,
            },
            {
              word: `private investment`,
              definition: `Money that businesses and individuals put into productive activities like new equipment, buildings, or companies. Austerity advocates argue heavy government borrowing crowds this out by pushing up interest rates.`,
              audioPrompt: `Private investment is money that businesses and individuals put into productive activities, {name}. New equipment, factories, technology, or business expansion. Austerity advocates argue that when governments borrow heavily, they compete with private borrowers for available funds, pushing up interest rates and crowding out private investment. Less private investment means less economic growth in the long run. This is one of the core economic arguments for limiting government borrowing even during downturns. Keynesian economists counter that during recessions there is often insufficient private investment anyway, so government spending fills the gap.`,
            },
          ],
        },

        {
          id: `l01-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Position Three: Targeted Spending`,
          paragraphs: [
            `A third position, increasingly common among modern economists, says: don't choose between general spending and general cutting. Spend, but spend on specific things that produce long-term value. Targeted spending tries to combine the best of both schools. Use government's spending power to maintain demand during downturns, but direct that spending toward investments that pay off over decades: infrastructure, education, scientific research, clean energy, public health.`,
            `The reasoning: dollar-for-dollar, not all government spending is equal. A dollar spent on a bridge that lasts 80 years and serves millions of people produces different long-term value than a dollar spent on a tax cut that funds short-term consumption. A dollar invested in college tuition produces decades of higher wages and tax revenue. A dollar spent on a one-time consumer rebate produces a quick spending bump and not much else. Targeted spending tries to use stimulus money in ways that build future prosperity.`,
            `Real-world examples: post-World War II infrastructure programs (interstate highways, rural electrification), the GI Bill that sent millions of veterans to college, Sweden's response to the 1990s banking crisis (which combined targeted bank rescues with structural reforms), and the Inflation Reduction Act's clean-energy provisions in 2022. The argument: this is more sophisticated than either pure spending or pure cutting. It requires good judgment about which investments actually pay off. Critics on both sides note that "targeted" can mean "politically connected," and that targeted programs are often slower to implement than general stimulus when speed matters.`,
          ],
          image: `/voyager-assets/money-business/l01-s5-targeted.webp`,
          imageCaption: `Targeted spending: not all dollars produce equal value.`,
          vocab: [
            {
              word: `targeted spending`,
              definition: `Government spending directed specifically toward investments with long-term returns: infrastructure, education, research, public health, clean energy. A middle position between general stimulus and general austerity.`,
              audioPrompt: `Targeted spending is government spending directed specifically toward investments with long-term returns, {name}. The idea is that not all government dollars produce equal value. A dollar spent on roads, bridges, schools, or scientific research can pay off for decades. A dollar spent on short-term consumption produces a brief bump and not much else. Targeted spending tries to combine the demand-supporting benefit of stimulus with the long-term-value benefit of careful investment. Critics note that "targeted" can become "politically connected," and that targeted programs are often slower to implement than general stimulus.`,
            },
            {
              word: `infrastructure`,
              definition: `The physical systems that support economic activity: roads, bridges, electrical grids, water systems, broadband. Often cited as high-return targeted government investment.`,
              audioPrompt: `Infrastructure is the physical systems that support economic activity, {name}. Roads, bridges, electrical grids, water systems, broadband networks, public transit. Post-World War II infrastructure programs like the interstate highway system and rural electrification are classic examples of high-return targeted government investment. Infrastructure spending has a multiplier effect: a bridge that lasts 80 years and serves millions of people generates far more economic value than its construction cost. This is a central argument for targeted spending over either pure stimulus or pure austerity in responding to downturns.`,
            },
            {
              word: `GI Bill`,
              definition: `A 1944 US law that provided college tuition, low-interest home loans, and other benefits to returning World War II veterans. Often cited as one of the highest-return targeted government investments in history.`,
              audioPrompt: `The GI Bill was a 1944 US law that provided college tuition, low-interest home loans, and other benefits to returning World War II veterans, {name}. It sent millions of veterans to college who otherwise wouldn't have gone. Economists estimate it produced returns many times its cost in the form of higher wages, tax revenue, and economic productivity over decades. It is one of the most frequently cited real-world examples of targeted government spending with high long-term returns. The GI Bill is often used to argue that well-designed targeted investments can produce outcomes that neither pure stimulus nor pure austerity can match.`,
            },
          ],
        },

        // ───── ARGUMENT BUILDER ───────────────────────────────────────────────
        {
          id: `l01-argument-builder`,
          type: `argument-builder`,
          headline: `When the Economy Is Struggling, What Should Government Do?`,
          intro: `Pick one of three serious positions. Build your case with 3-4 pieces of evidence. Then respond to the strongest counterargument. Real economists disagree on this. Your job is to defend a thoughtful position.`,
          positions: [
            {
              id: `keynesian-spending`,
              label: `Spend more (Keynesian stimulus)`,
              summary: `When consumers and businesses stop spending in a recession, the government must spend to break the downward spiral. The cost of borrowing is small compared to the cost of letting the economy collapse. 2008 stimulus and COVID stimulus both worked, despite their critics. Pay back the debt during good times. The job of government is to stabilize, not to balance books in the middle of a crisis.`,
            },
            {
              id: `austerity-cuts`,
              label: `Cut spending (let markets correct)`,
              summary: `Government debt is a real problem and trying to spend your way out of recessions often makes things worse later. Markets, left alone, correct themselves. Failing businesses going bankrupt is painful but necessary; resources move to more productive uses. Government interference prolongs pain and creates future tax burdens that fall on the next generation.`,
            },
            {
              id: `targeted-investment`,
              label: `Targeted investment in long-term value`,
              summary: `Don't choose between general spending and general cutting. Use government spending to maintain demand, but direct it toward investments that pay off for decades: infrastructure, education, research, clean energy. This produces both short-term stabilization and long-term growth. The hard work is good judgment about which investments actually pay off.`,
            },
          ],
          evidence: [
            {
              id: `e1`,
              text: `The 2008 financial crisis: US passed the $831 billion American Recovery and Reinvestment Act. Unemployment peaked at 10% in 2009, fell to 4% by 2018. Most economists credit stimulus with shortening and softening the recession.`,
              source: `Historical economic data; CBO retrospective analyses`,
            },
            {
              id: `e2`,
              text: `1937 austerity: FDR cut spending to balance the budget while the Depression recovery was still fragile. The economy fell back into recession. This is often cited as a cautionary tale against premature spending cuts.`,
              source: `Historical economic analysis`,
            },
            {
              id: `e3`,
              text: `Post-2010 European austerity: Greece's economy contracted 25% over several years, Spain's youth unemployment hit 50%, UK had the slowest recovery of any major developed nation. Mostly considered a failure of austerity as crisis response.`,
              source: `IMF, OECD economic data 2010-2019`,
            },
            {
              id: `e4`,
              text: `Post-WWII US infrastructure investments (interstate highways, rural electrification, GI Bill) produced returns for decades. Often cited as classic examples of high-return targeted government investment.`,
              source: `Standard economic history`,
            },
            {
              id: `e5`,
              text: `Government debt has to be paid back. The US national debt was $34 trillion as of 2024, and interest payments on it are now larger than the defense budget. This creates real future tax burdens.`,
              source: `US Treasury data`,
            },
            {
              id: `e6`,
              text: `Inflation risk: when too much money chases too few goods, prices rise. The 2021-2022 inflation spike to 9% is partly attributed to large COVID stimulus packages combined with supply disruptions. Stimulus has real costs.`,
              source: `Federal Reserve analysis`,
            },
            {
              id: `e7`,
              text: `Sweden's 1990s response to banking crisis: combined targeted bank rescues with structural reforms. Recovered faster than countries that pursued pure austerity. Often cited as a successful targeted approach.`,
              source: `Comparative economic analysis`,
            },
          ],
          counterargument: {
            id: `counter`,
            text: `"You picked your position. Here's the strongest objection. All three positions assume government knows what to do. But government is full of political pressures, special interests, and short-term thinking. Politicians often spend to win the next election, not to fix the economy. They cut spending where it's easiest, not where it's wisest. They 'target' investments toward their own districts. So maybe the right answer isn't about which policy is best in theory; it's about which policy is least vulnerable to political distortion in practice. Why should we trust government to do your preferred approach competently?"`,
            promptInstruction: `In 3-4 sentences, respond. How does your position hold up against political reality? What safeguards or design choices would make it work?`,
          },
          reflectionPrompt: `Looking at the positions you didn't pick, which evidence challenged your view most strongly? Could you imagine updating your position in 2 years if circumstances were different?`,
        },

        {
          id: `l01-quiz`,
          type: `quiz`,
          headline: `Check your understanding`,
          questions: [
            {
              id: `q1`,
              type: `multiple-choice`,
              question: `What is money, fundamentally?`,
              options: [
                `Green paper printed by the government`,
                `Gold and silver`,
                `Anything an economy agrees has value, used as a medium of exchange, store of value, and unit of account`,
                `Just digital numbers`,
              ],
              correctIndex: 2,
              explanation: `Money is fundamentally an agreement among many people that something has value. It functions as medium of exchange (you can buy stuff), store of value (you can save it), and unit of account (you can measure prices in it).`,
            },
            {
              id: `q2`,
              type: `multiple-choice`,
              question: `Where does most modern money come from?`,
              options: [
                `Only from the Treasury printing paper`,
                `Mostly from banks creating it when they make loans (fractional reserve banking)`,
                `From gold mines`,
                `From the President personally`,
              ],
              correctIndex: 1,
              explanation: `Most modern money is created when banks make loans. They don't take money out of a vault; they create it in the borrower's account. This is fractional reserve banking and it's how most money supply grows.`,
            },
            {
              id: `q3`,
              type: `multiple-choice`,
              question: `What is GDP?`,
              options: [
                `The government's total budget`,
                `Gross Domestic Product: the total value of goods and services produced in a country in a year; the most common measure of economic size`,
                `The stock market index`,
                `Total population times income`,
              ],
              correctIndex: 1,
              explanation: `GDP measures total economic output. It's imperfect (doesn't capture quality of life, environmental damage, distribution) but gives a useful starting picture of economic activity.`,
            },
            {
              id: `q4`,
              type: `multiple-choice`,
              question: `What is the Federal Reserve?`,
              options: [
                `A division of the Treasury`,
                `The central bank of the United States; controls money supply and interest rates; technically independent from political branches`,
                `A private bank`,
                `A Congressional committee`,
              ],
              correctIndex: 1,
              explanation: `The Fed is the US central bank. Its decisions on interest rates affect every loan, mortgage, and credit card rate. Independence from politics is intentional, though Fed leaders are appointed by the president.`,
            },
            {
              id: `q5`,
              type: `multiple-choice`,
              question: `What does Keynesian economics propose for recessions?`,
              options: [
                `Government should cut spending`,
                `Government should do nothing`,
                `Government should increase spending to break the downward spiral of falling consumer and business spending, even if it means running deficits`,
                `Raise interest rates`,
              ],
              correctIndex: 2,
              explanation: `Keynes' core insight: when consumers and businesses stop spending in a recession, government must spend to break the downward cycle. The deficit can be paid back later in better times.`,
            },
            {
              id: `q6`,
              type: `multiple-choice`,
              question: `What happened in the Eurozone after 2010 when many countries pursued austerity?`,
              options: [
                `Rapid economic recovery`,
                `Greece's economy contracted 25%, Spain's youth unemployment hit 50%, UK had the slowest recovery of any major developed nation; widely considered a failure of austerity as crisis response`,
                `No effect`,
                `Hyperinflation`,
              ],
              correctIndex: 1,
              explanation: `Post-2010 European austerity is mostly considered a failure. It deepened and prolonged the crisis. Most modern economists, even free-market-leaning ones, have moved away from pure austerity as crisis response.`,
            },
            {
              id: `q7`,
              type: `multiple-choice`,
              question: `What's the targeted spending approach?`,
              options: [
                `Random spending`,
                `Combining stimulus with strategic investments in things with long-term returns: infrastructure, education, research, public health, clean energy`,
                `Tax cuts only`,
                `Spending only on military`,
              ],
              correctIndex: 1,
              explanation: `Targeted spending tries to combine stimulus benefits with long-term value creation. The challenge is good judgment about which investments actually pay off, and avoiding political distortion.`,
            },
            {
              id: `q8`,
              type: `multiple-choice`,
              question: `What's a major cost of stimulus spending?`,
              options: [
                `Lower unemployment`,
                `Government debt that has to be paid back, plus potential inflation if too much money chases too few goods; both create real future burdens`,
                `Higher GDP`,
                `Stronger currency`,
              ],
              correctIndex: 1,
              explanation: `Stimulus has real costs. The 2021-2022 inflation spike was partly caused by large stimulus combined with supply disruptions. Honest stimulus advocates acknowledge these costs, even while arguing the benefits exceed them in crises.`,
            },
            {
              id: `q9`,
              type: `true-false`,
              question: `True or false: All government spending produces equal value dollar-for-dollar.`,
              correctAnswer: false,
              explanation: `False. A dollar spent on infrastructure that lasts 80 years produces different long-term value than a dollar spent on short-term consumption. This is the core insight behind targeted spending approaches.`,
            },
            {
              id: `q10`,
              type: `inference`,
              question: `Imagine a politician says "We just need to balance the federal budget during this recession." Based on this lesson, what should you notice?`,
              options: [
                `That sounds very wise`,
                `That this is essentially the austerity position, which has been tried (Europe post-2010, US in 1937) and generally produced worse outcomes than Keynesian or targeted approaches; the politician may be appealing to common sense about personal budgets, but national budgets work differently than household budgets`,
                `Politicians are always right`,
                `It depends on which party`,
              ],
              correctIndex: 1,
              explanation: `"Balance the budget during a recession" sounds like common sense but is essentially the austerity position, which has a poor track record. Recognizing the economic position behind a political slogan is exactly the literacy this lesson develops.`,
            },
          ],
        },

        {
          id: `l01-reflection`,
          type: `reflection`,
          headline: `Sit with this`,
          intro: `Pick the prompt that pulls at you most. Your answer is saved.`,
          prompts: [
            { id: `reflect-cognitive`, category: `Cognitive`, prompt: `What surprised you most about how money and the economy actually work? What did you previously believe that now looks different?` },
            { id: `reflect-meta`, category: `Metacognitive`, prompt: `Which of the three positions felt most intuitive before you read the evidence? Did the evidence change your view?` },
            { id: `reflect-identity`, category: `Identity`, prompt: `Most adults don't have positions on macroeconomic questions. Why does it matter for someone your age to start developing them?` },
            { id: `reflect-application`, category: `Application`, prompt: `Listen for economic talk in news, family conversations, or social media this week. Which position is the speaker actually taking? Can you tell?` },
            { id: `reflect-critical`, category: `Critical`, prompt: `What's a critique of macroeconomics itself? Is there something important about the economy that GDP, employment, and inflation rates miss?` },
            { id: `reflect-personal`, category: `Personal investigation`, prompt: `Look at one purchase your family made this week. Whose income did that spending become? How did your dollar move through the economy?` },
          ],
        },

        {
          id: `l01-real-world`,
          type: `real-world`,
          headline: `Take it into your life`,
          guideContext: `Macroeconomics seems abstract, but it touches your daily life. Two paths below to make it concrete.`,
          familyActivity: {
            title: `The Economy Conversation`,
            duration: `30 minutes`,
            description: `At dinner tonight, ask each family member: do you think the government should spend more during recessions, cut spending, or invest in specific things? Why? You'll likely discover family members have positions they've never articulated. Listen for which actual school of thought they're using. Don't argue. Practice the move of identifying the economic framework behind political opinions. This is a rare conversation in most families. It builds shared literacy without becoming partisan.`,
          },
          projectOption: {
            title: `Track One Economic Indicator, 2 weeks (optional)`,
            duration: `2 weeks, ~5 minutes per day`,
            description: `Pick ONE economic indicator and track it daily for 14 days. Options: the S&P 500 stock index, the US unemployment rate (updates monthly so track the discussion), Bitcoin price, gas prices in your area, mortgage rates, or the federal funds rate. Each day log what it did and any news that might have moved it. After 14 days, write 500 words on what you learned about how economic information actually flows. You will start to see patterns most adults don't track because they don't pay close attention.`,
            offerToParent: `Parent: opt your kid into this project from the dashboard. Completed projects show up in your weekly report.`,
          },
          identityQuestion: `If you understand how the economy actually works at 12, what advantage does that give you over decades?`,
        },

        {
          id: `l01-identity-hook`,
          type: `identity-hook`,
          headline: `Who is this lesson making you?`,
          prompt: `One sentence. No wrong answer.`,
          placeholder: `Someone who...`,
          examples: [
            `Someone who can identify which economic school a politician is using before agreeing with them.`,
            `A person who knows household budgets and government budgets work differently.`,
            `Someone willing to hold economic positions even when the evidence is mixed.`,
          ],
          saveKey: `identity_responses_mb_11_12_01`,
        },

        {
          id: `l01-celebration`,
          type: `celebration`,
          guideText: `{name}. After this lesson you can explain what money actually is, identify GDP and the Federal Reserve, articulate three serious positions on government response to economic crisis, recognize the historical track records of each, and build an evidence-based argument about macroeconomic policy. Most adults can't do this. You can. Next time we go into the single most important concept in personal finance: compound interest. We'll see how three different teens with the same starting amount end up wildly different lives by 60, based purely on when they started. Case Study format. See you there. — Ace`,
          badge: `economy-decoder`,
          badgeName: `Economy Decoder`,
          xpEarned: 75,
          competencies: [
            `Can define money's three functions (medium of exchange, store of value, unit of account)`,
            `Can identify GDP, the Federal Reserve, and basic macroeconomic indicators`,
            `Can articulate Keynesian, austerity, and targeted-spending positions on recession response`,
            `Knows the historical track record of each position`,
            `Has built an evidence-based argument on a contested macroeconomic question`,
          ],
          nextLessonPreview: {
            title: `Lesson 2: Compound Interest — The Most Important Concept in Personal Finance`,
            hook: `Three teens, same starting amount, different start dates. By 60, wildly different lives. The math of compounding is the single most important financial concept. We'll walk through it carefully.`,
          },
        },
      ],
    },
  ],
};

export default MONEYBUSINESS_VOYAGER_L01;

if (import.meta.env?.DEV) {
  const l = MONEYBUSINESS_VOYAGER_L01.lessons[0];
  const mags = l.screens.filter((s) => s.type === `magazine`).length;
  const argEvi = l.screens.find((s) => s.type === `argument-builder`)?.evidence?.length ?? 0;
  const quiz = l.screens.find((s) => s.type === `quiz`)?.questions?.length ?? 0;
  const reflect = l.screens.find((s) => s.type === `reflection`)?.prompts?.length ?? 0;
  console.log(
    `[LESSON-MB-VOYAGER-L01 ${VERSION}] "${l.title}" — ${mags} magazine, argument-builder w/ ${argEvi} evidence, ${quiz} quiz, ${reflect} reflection`
  );
}
