// ─────────────────────────────────────────────────────────────────────────────
// SOCIAL STUDIES UE  |  L07 — Free Enterprise and Markets
// Age band : upper_explorers (9–10)   Guide: atlas
// Standards: C3 D2.Eco.1.3-5 / D2.Eco.4.3-5 / D2.Eco.6.3-5
// CALIBRATED: UE spec v1.1 + game toolkit v1
// Game format: investigation (Market Detective: why did this price change?)
// ─────────────────────────────────────────────────────────────────────────────

const SOCIAL_STUDIES_UE_L07 = {
  ageBand: `upper_explorers`,
  subjectId: `social_studies`,
  guide: `atlas`,

  lessons: [
    {
      id: `social-studies-9-10-07`,
      title: `Free Enterprise and Markets`,
      duration: 22,
      xpReward: 75,
      badge: `market-detective`,
      badgeName: `Market Detective`,

      screens: [
        {
          id: `l07-welcome`,
          type: `welcome`,
          guideText: `Welcome back, {name}. We're shifting topics. The last six lessons were about how government works. The next few are about how the ECONOMY works — how people, businesses, and governments make decisions about money, goods, and services. Today we focus on the US economy specifically, which is built on something called free enterprise. By the end, you'll understand why prices change, what makes markets work, and how to read economic signals like a detective.`,
          headline: `Free Enterprise and Markets`,
          subtitle: `How the US economy actually works`,
          visual: `/ue-assets/social-studies/l07-welcome.webp`,
        },

        {
          id: `l07-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `What Is Free Enterprise?`,
          paragraphs: [
            `Free enterprise is the economic system the United States uses. In a free enterprise system, people are free to start businesses, make products, set prices, and buy or sell what they want. The government sets some basic rules — like banning fraud and protecting safety — but mostly stays out of individual business decisions.`,
            `This is very different from systems where the government decides what gets made and how much it costs. We'll cover those in the next lesson. For now, the key idea is: in free enterprise, most decisions about goods and services come from millions of individual choices, not from a central plan.`,
            `Why might this work better than a central plan? Because no central authority can know what every person wants. Free enterprise lets people signal their preferences with money. The signals add up, and businesses respond. When the signals change, the economy adapts — fast.`,
          ],
          image: `/ue-assets/social-studies/l07-s1-free-enterprise.webp`,
          imageCaption: `Free enterprise: millions of choices, millions of signals.`,
          vocab: [
            { word: `free enterprise`,
              definition: `An economic system where individuals and businesses are free to make most economic decisions with limited government control.`,
              audioPrompt: `Free enterprise is the economic system used in the United States, {name}. It means individuals and businesses are mostly free to decide what to make, what to sell, what to charge, and what to buy. The government sets some basic rules — like protecting safety and preventing fraud — but doesn't dictate most decisions. The big idea behind free enterprise is that millions of individual choices can solve problems that no central planner could solve. People signal what they want by what they buy. Businesses respond. The economy adapts.` },
            { word: `market`,
              definition: `Any system where buyers and sellers exchange goods, services, or resources.`,
              audioPrompt: `A market is any system where buyers and sellers interact, {name}. It can be a physical place like a grocery store or farmer's market. Or it can be a system — like the stock market or the housing market — where trades happen online or through brokers. In free enterprise, markets do the heavy work of deciding what gets made, how much it costs, and who buys it. Prices are the signals that keep the whole system running.` },
          ],
        },

        {
          id: `l07-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Supply and Demand`,
          paragraphs: [
            `If you only learn TWO economic ideas in your life, learn these. Supply is how much of something is available — how many phones, gallons of milk, doctors, or houses are being offered for sale. Demand is how much people want to buy.`,
            `When supply is high and demand is low, prices fall. Example: there are too many phones on the market and not enough buyers. Stores cut prices to clear inventory. When supply is low and demand is high, prices rise. Example: there's a shortage of a popular new game console, and lots of people want one. Stores can charge more.`,
            `Most price changes you see in real life come from supply and demand shifting. Gas prices go up because oil supply tightened. Avocados get expensive because weather destroyed crops. Concert tickets sell out instantly because demand far exceeded supply. Reading these signals is like a superpower — it helps you understand WHY the world looks the way it does.`,
          ],
          image: `/ue-assets/social-studies/l07-s2-supply-demand.webp`,
          imageCaption: `Two ideas that explain almost every price change you'll ever see.`,
          vocab: [
            { word: `supply`,
              definition: `The amount of a good or service that is available for sale.`,
              audioPrompt: `Supply is how much of something is available to be sold, {name}. How many phones are being produced. How many houses are on the market. How many doctors are practicing. Supply can change for many reasons — better technology makes it easier to produce, weather destroys crops, new competitors enter the market, factories close. When supply changes, prices change. When supply goes up, prices usually fall. When supply drops, prices usually rise. This is one of the most reliable patterns in all of economics.` },
            { word: `demand`,
              definition: `The amount of a good or service that people want to buy at a given price.`,
              audioPrompt: `Demand is how much people want to buy a particular product or service, {name}. Demand can change for many reasons — a new trend creates excitement, an article changes what people believe is healthy, a new technology makes something less useful, a recession makes people cautious. When demand rises, prices usually rise — businesses can charge more because more people are willing to pay. When demand falls, prices usually fall — businesses have to cut prices to attract enough buyers.` },
          ],
        },

        {
          id: `l07-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Competition and Choice`,
          paragraphs: [
            `Free enterprise depends on competition. When multiple businesses sell similar products, they compete for your business. They have to offer better quality, lower prices, or both, or they lose to someone who does. Competition is what keeps companies on their toes and protects you as a customer.`,
            `When competition disappears, problems start. If only ONE company sells something — called a monopoly — they can charge whatever they want, because you have no choice. The US government has laws to break up monopolies and prevent them from forming, because monopolies harm consumers and slow down innovation.`,
            `Your choices, multiplied across millions of buyers, are what enforces competition. When you pick a cheaper or better option, you're voting with your money. Businesses notice. The ones that listen win. The ones that ignore you lose.`,
          ],
          image: `/ue-assets/social-studies/l07-s3-competition.webp`,
          imageCaption: `Competition: what keeps businesses honest.`,
          vocab: [
            { word: `competition`,
              definition: `When multiple businesses try to win the same customers, usually by offering better quality or lower prices.`,
              audioPrompt: `Competition is when multiple businesses try to win the same customers, {name}. They do it by offering better products, lower prices, faster service, or some combination. Competition is what keeps companies improving — without it, they get lazy or take advantage of you. The opposite of competition is monopoly — one company with no rivals. Monopolies usually mean higher prices and worse service, which is why the US has laws to prevent them. Your choices as a buyer are what create real competition in a market.` },
            { word: `monopoly`,
              definition: `When one company has total control over a product or service, with no real competition.`,
              audioPrompt: `A monopoly is when one company controls a market completely, with no real competition, {name}. Without rivals, the company can charge what they want and ignore customer complaints — you have nowhere else to go. Famous monopolies in US history include Standard Oil and AT&T, both eventually broken up by the government. The US government has antitrust laws specifically to prevent monopolies and break them up when they form. The principle is that competition protects buyers — and protecting buyers is part of what makes the economy work.` },
          ],
        },

        {
          id: `l07-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Where Government Steps In`,
          paragraphs: [
            `Free enterprise isn't pure free-for-all. Even in the US, the government plays important roles in the economy. Knowing where these lines are helps you understand how the actual US economy works.`,
            `The government enforces contracts — if you and I make a deal, courts can enforce it. The government prevents fraud — companies can't lie about what they're selling. The government regulates safety — food has to meet certain standards, cars have to have seatbelts. The government breaks up monopolies. The government provides things the private market can't easily provide — like national defense, basic research, and public roads.`,
            `Different countries draw these lines in different places. The US generally trusts markets more than most countries. Countries in Europe often have more government involvement in healthcare and education. None of these are "the right answer" — they're tradeoffs. We'll dig into that more in the next lesson.`,
          ],
          image: `/ue-assets/social-studies/l07-s4-government-role.webp`,
          imageCaption: `Even free enterprise has rules. The question is how many.`,
          vocab: [
            { word: `regulation`,
              definition: `Rules created by the government to control how businesses operate, usually to protect safety, fairness, or competition.`,
              audioPrompt: `Regulation is when the government sets rules that businesses must follow, {name}. Examples include food safety standards, environmental protections, banking rules, and workplace safety. The argument for regulation is that without it, some businesses would harm consumers, workers, or the environment to maximize profit. The argument against too much regulation is that it can slow down innovation and add costs that make businesses less competitive. Most economists agree some regulation is necessary. The debate is mostly about how much, where, and what kind.` },
            { word: `public goods`,
              definition: `Things that benefit everyone but the free market cannot easily provide, like national defense or public roads.`,
              audioPrompt: `Public goods are things that benefit everyone but private businesses have no incentive to provide, {name}. National defense is the classic example — everyone in the country benefits from it, but no private company could charge each person individually. Public roads, basic scientific research, and clean air are similar. Because free markets don't naturally produce public goods, this is one of the main reasons even strongly capitalist countries have government involvement in the economy.` },
          ],
        },

        // ── INVESTIGATION GAME — Market Detective ──────────────────────────────
        {
          id: `l07-game`,
          type: `interactive`,
          format: `investigation`,
          guideText: `Time to be a Market Detective, {name}. You'll investigate four real cases where the price of something changed dramatically. For each one, read the clues and figure out: was it supply changing, demand changing, or both? Then I'll explain what actually happened.`,
          options: [
            { id: `supply-up`,     label: `Supply Went Up`,           color: `#34D399`, description: `More of it became available, so prices dropped.` },
            { id: `supply-down`,   label: `Supply Went Down`,         color: `#A78BFA`, description: `Less of it became available, so prices rose.` },
            { id: `demand-up`,     label: `Demand Went Up`,           color: `#FBBF24`, description: `More people wanted it, so prices rose.` },
            { id: `demand-down`,   label: `Demand Went Down`,         color: `#F87171`, description: `Fewer people wanted it, so prices fell.` },
          ],
          cases: [
            {
              id: `case-1`,
              caseTitle: `Case #1: The Avocado Spike`,
              clues: [
                { text: `In twenty seventeen, the price of avocados in US grocery stores nearly doubled in a few months.` },
                { text: `That same year, severe weather in Mexico and California damaged a huge portion of avocado farms.` },
                { text: `Demand for avocados had stayed roughly the same — people still wanted them just as much as before.` },
              ],
              correctAnswer: `supply-down`,
              realWorldExample: `This actually happened in twenty seventeen. Bad weather in major avocado-growing regions dropped the available supply by about a quarter.`,
              explanation: `Supply went down. The weather destroyed crops, so there were fewer avocados available. Demand stayed about the same, so the smaller supply meant higher prices. This is a classic supply shock — something outside anyone's control reduces how much of a good is available.`,
            },
            {
              id: `case-2`,
              caseTitle: `Case #2: TVs Got Way Cheaper`,
              clues: [
                { text: `A flat-screen TV that cost about $2,000 in two thousand eight costs less than $400 today.` },
                { text: `Lots of new companies started making flat-screen TVs over that time, and the technology improved.` },
                { text: `People still want TVs — demand hasn't fallen. If anything, more people are buying them than before.` },
              ],
              correctAnswer: `supply-up`,
              realWorldExample: `This is true of almost all electronics. Better technology + more producers = much higher supply.`,
              explanation: `Supply went up. New companies entered the market and the technology got cheaper to produce. With way more TVs being made, prices fell dramatically — even though demand stayed strong. This is what makes technology one of the most powerful forces in economics.`,
            },
            {
              id: `case-3`,
              caseTitle: `Case #3: Toilet Paper, March twenty twenty`,
              clues: [
                { text: `In March twenty twenty, when the COVID pandemic hit, the price of toilet paper rose sharply and many stores ran out.` },
                { text: `Factories were still producing the same amount as before — supply hadn't changed.` },
                { text: `But suddenly, almost everyone started buying way more than usual, scared they'd run out.` },
              ],
              correctAnswer: `demand-up`,
              realWorldExample: `This actually happened in early twenty twenty in the US, UK, Australia, and many other countries.`,
              explanation: `Demand went up. Supply was unchanged — factories kept producing the same amount. But buyers suddenly all wanted way more than usual at the same time. Demand spikes that fast are called demand shocks, and they cause shortages and price increases until either demand calms down or supply ramps up.`,
            },
            {
              id: `case-4`,
              caseTitle: `Case #4: DVD Players in twenty twenty-five`,
              clues: [
                { text: `DVD players, which cost around $200 in the early 2000s, are now hard to find in most stores.` },
                { text: `Companies stopped making them in large numbers because most people don't want them anymore.` },
                { text: `Streaming services have largely replaced physical DVDs as the way people watch movies.` },
              ],
              correctAnswer: `demand-down`,
              realWorldExample: `This is exactly what happened to DVD players, and is happening to many older technologies.`,
              explanation: `Demand went down. New technology — streaming — gave people a better option. Far fewer people wanted DVD players, so businesses stopped producing them. Demand shifts caused by technology are some of the most powerful forces in the economy. Whole industries can shrink or disappear because of them.`,
            },
          ],
        },

        {
          id: `l07-quiz`,
          type: `quiz`,
          guideText: `Test what stuck, {name}.`,
          questions: [
            { id: `l07-q1`, format: `multiple-choice`,
              question: `What is free enterprise?`,
              options: [
                `Free stuff from the government`,
                `An economic system where individuals and businesses are mostly free to make their own economic decisions`,
                `A type of charity`,
                `A way of not paying for things`,
              ],
              correctIndex: 1,
              explanation: `Free enterprise means most economic decisions are made by individuals and businesses, not by central government planning. The government still plays some role, but mostly stays out of day-to-day decisions.` },
            { id: `l07-q2`, format: `multiple-choice`,
              question: `If demand stays the same but supply drops sharply, what usually happens to prices?`,
              options: [
                `Prices fall`,
                `Prices stay the same`,
                `Prices rise`,
                `Prices disappear`,
              ],
              correctIndex: 2,
              explanation: `Supply drops + steady demand = prices rise. This is one of the most reliable patterns in economics. Examples: hurricane damages crops, factory closes down, sanctions cut off oil exports.` },
            { id: `l07-q3`, format: `multiple-choice`,
              question: `What's a monopoly?`,
              options: [
                `A board game`,
                `When one company has total control over a market, with no real competition`,
                `A government office`,
                `A type of tax`,
              ],
              correctIndex: 1,
              explanation: `A monopoly is when one company controls a market with no rivals. It can lead to higher prices and worse service for consumers, which is why the US has laws to prevent monopolies.` },
            { id: `l07-q4`, format: `multiple-choice`,
              question: `Why is competition between businesses good for buyers?`,
              options: [
                `It makes things more expensive`,
                `It pushes businesses to offer better quality or lower prices to win customers`,
                `It makes businesses richer`,
                `It has no effect on buyers`,
              ],
              correctIndex: 1,
              explanation: `Competition forces businesses to keep improving. They can't get lazy or charge whatever they want, because customers can switch to a competitor. This benefits buyers directly.` },
            { id: `l07-q5`, format: `true-false`,
              question: `True or false: In the US free enterprise system, the government plays absolutely no role in the economy.`,
              correctAnswer: false,
              explanation: `False. Even in free enterprise, the government enforces contracts, prevents fraud, regulates safety, breaks up monopolies, and provides things like national defense and roads. The role is limited compared to other systems, but it isn't zero.` },
            { id: `l07-q6`, format: `multiple-choice`,
              question: `In twenty twenty, toilet paper prices rose and shelves were empty. The cause was:`,
              options: [
                `Supply went down (factories closed)`,
                `Demand went up (people panic-bought way more than usual)`,
                `Both supply and demand fell`,
                `The government banned toilet paper`,
              ],
              correctIndex: 1,
              explanation: `Demand went up. Factories kept producing normally — supply was steady. But everyone suddenly started buying way more than usual at the same time. That's a demand shock.` },
            { id: `l07-q7`, format: `multiple-choice`,
              question: `Why have TV prices fallen so much over the past 20 years?`,
              options: [
                `Demand collapsed`,
                `Supply went up — better technology and more manufacturers producing them`,
                `Governments subsidized them`,
                `TVs became less popular`,
              ],
              correctIndex: 1,
              explanation: `Supply went up. New companies entered the market and technology improved, so producing TVs got cheaper and more efficient. Demand stayed steady, so prices fell as supply grew.` },
            { id: `l07-q8`, format: `multiple-choice`,
              question: `Which of these is something the US government DOES do in the economy?`,
              options: [
                `Set the prices of every product in stores`,
                `Decide who can start a business`,
                `Enforce contracts and prevent fraud`,
                `Pay everyone's salary`,
              ],
              correctIndex: 2,
              explanation: `The government enforces contracts and prevents fraud. It does NOT set most prices, control who starts businesses, or pay everyone's salary — those are decided by markets, not government, in free enterprise.` },
          ],
        },

        {
          id: `l07-reflection`,
          type: `reflection`,
          guideText: `Pick one prompt, {name}, and answer it.`,
          prompts: [
            { id: `r1`, text: `Think of one thing in your life that has gotten cheaper over time. Why do you think that is?` },
            { id: `r2`, text: `Can you think of a price that has risen recently? What might be the supply-and-demand explanation?` },
            { id: `r3`, text: `What's something the government should regulate, in your opinion? Why?` },
            { id: `r4`, text: `If you started a business, what would you sell, and why would people want it?` },
          ],
        },

        {
          id: `l07-realworld`,
          type: `real-world`,
          guideText: `Every day, somewhere in the world, supply and demand are shifting and prices are changing. A new technology emerges and an old industry shrinks. A storm wipes out a crop and a food gets expensive. A trend takes off and a company's product flies off the shelves. The supply-and-demand framework explains almost all of it. Once you start looking, you'll see it everywhere — and you'll never look at a price the same way again.`,
          familyAdventure: `Together, pick three things you buy regularly — food items, services, anything. For each, look up how their price has changed over the past few years. Then try to explain WHY using supply-and-demand thinking. Was it a supply issue? A demand shift? Some combination? Bonus: predict what'll happen to the price of one of these items next year, and why.`,
          creativePrompt: {
            intro: `Pick a real product or service whose price has changed dramatically — up or down — in the past 10 years. Explain what happened and why, using supply and demand.`,
            floor: `Write at least 5 sentences. Use the sentence starters if helpful.`,
            stretch: `Write 8-10 sentences. Make a real argument, with specific examples and a clear explanation.`,
            open: `Write as much as you want. Imagine you're a market analyst explaining this to your boss.`,
            frames: [
              `The product or service I picked is ___.`,
              `Its price went ___ over the past ___ years.`,
              `What changed was ___.`,
              `In supply-and-demand terms, this was a ___.`,
              `What this teaches me about how markets work is ___.`,
            ],
          },
        },

        {
          id: `l07-celebration`,
          type: `celebration`,
          message: `Real work, {name}. You can now explain what free enterprise is, define supply and demand, and use them to figure out why prices change. That's a lifelong skill — most adults never quite get this. Next lesson, we widen the lens — we look at the different economic systems countries use around the world. — Atlas.`,
          badge: `market-detective`,
          badgeName: `Market Detective`,
          xpEarned: 75,
        },
      ],
    },
  ],
};

export default SOCIAL_STUDIES_UE_L07;
