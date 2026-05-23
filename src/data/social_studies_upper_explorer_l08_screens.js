// ─────────────────────────────────────────────────────────────────────────────
// SOCIAL STUDIES UE  |  L08 — Economic Systems
// Age band : upper_explorers (9–10)   Guide: atlas
// Standards: C3 D2.Eco.1.3-5 / D2.Eco.13.3-5 / D2.Eco.14.3-5
// CALIBRATED: UE spec v1.1 + game toolkit v1
// Game format: branching-decision (Design your country's economy)
// EVEN-HANDED: presents capitalism, socialism, communism, mixed factually
// ─────────────────────────────────────────────────────────────────────────────

const SOCIAL_STUDIES_UE_L08 = {
  ageBand: `upper_explorers`,
  subjectId: `social_studies`,
  guide: `atlas`,

  lessons: [
    {
      id: `social-studies-9-10-08`,
      title: `Economic Systems`,
      duration: 23,
      xpReward: 75,
      badge: `economic-systems-thinker`,
      badgeName: `Economic Systems Thinker`,

      screens: [
        {
          id: `l08-welcome`,
          type: `welcome`,
          guideText: `Welcome back, {name}. Last lesson we looked at how the US economy works — free enterprise. But not every country runs its economy that way. Some give the government a much bigger role. Some try to control everything from a central plan. Today we look at the main economic systems around the world — what they are, what they do well, and what they struggle with. By the end you'll be able to compare any country's economy to the major models.`,
          headline: `Economic Systems`,
          subtitle: `The big ways countries organize their economies`,
          visual: `/ue-assets/social-studies/l08-welcome.webp`,
        },

        {
          id: `l08-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `The Three Big Questions`,
          paragraphs: [
            `Every economic system, no matter how it's set up, has to answer three basic questions. What gets produced? How does it get produced? Who gets to consume it?`,
            `Different systems answer these questions differently. In some, the market answers — individual buyers and sellers make millions of small decisions that add up. In others, the government answers — central planners decide what gets made, how, and who gets what. Most real countries do some combination of both.`,
            `Why does this matter? Because the answers shape almost everything about life in that country. They affect how rich or poor people are, how much choice they have, how innovative the economy is, and how secure people feel. There's no single "right" answer — but there are real tradeoffs, and knowing them is part of being an informed citizen.`,
          ],
          image: `/ue-assets/social-studies/l08-s1-three-questions.webp`,
          imageCaption: `What. How. Who. Every economy has to answer these.`,
          vocab: [
            { word: `economic system`,
              definition: `The way a country organizes how goods and services are produced, distributed, and consumed.`,
              audioPrompt: `An economic system is how a country organizes its economy, {name}. It answers three basic questions — what gets produced, how it gets produced, and who gets it. Different countries answer these very differently. The main differences come down to how much is decided by free markets versus by the government. There are tradeoffs in every system, and no perfect answer. Most modern countries use a mix of approaches.` },
            { word: `central planning`,
              definition: `When a government makes most economic decisions — what gets produced, at what price, and who gets it — instead of letting markets decide.`,
              audioPrompt: `Central planning is when the government makes key economic decisions instead of letting free markets decide, {name}. A central planner decides what gets produced, in what quantities, and at what price. The Soviet Union used central planning for most of the twentieth century. The problem is that no government can know what millions of people actually want as fast as markets can. Central planning often leads to shortages of popular goods and surpluses of things nobody wants.` },
          ],
        },

        {
          id: `l08-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Capitalism / Free Market Economy`,
          paragraphs: [
            `Capitalism is an economic system where most businesses, factories, and resources are owned by private individuals or companies, not the government. Decisions about what to make, what to charge, and who to hire are made by businesses competing in the market. The government's role is limited — mostly to enforce rules and protect property.`,
            `What capitalism does well: it rewards innovation, lets people pursue what they're good at, and reacts fast to changing demand. The US economy has produced enormous wealth and technological progress under capitalism. New products, new jobs, and new industries emerge from competition.`,
            `What capitalism struggles with: it can create big gaps between rich and poor. People who succeed enormously have much more than people who don't, and some are left behind. Pure capitalism also doesn't naturally provide things that benefit everyone but don't make a profit — like clean air, public roads, or basic research. That's why even capitalist countries have some government involvement.`,
          ],
          image: `/ue-assets/social-studies/l08-s2-capitalism.webp`,
          imageCaption: `Capitalism: private ownership, market decisions, limited government.`,
          vocab: [
            { word: `capitalism`,
              definition: `An economic system based on private ownership of businesses and resources, with most decisions made by competing markets.`,
              audioPrompt: `Capitalism is an economic system where most businesses and resources are privately owned, {name}. Decisions about production, prices, and jobs are made by competing businesses in the market, not by the government. The US uses a version of capitalism. Capitalism is known for driving innovation and producing wealth, but also for creating inequality between rich and poor. Most countries that use capitalism modify it with some government involvement to soften the rough edges. Pure capitalism is rare anywhere in the world.` },
            { word: `private property`,
              definition: `The right of individuals and businesses to own things — including companies, land, and resources — rather than the government owning them.`,
              audioPrompt: `Private property is the right of individuals and businesses to own things, {name}. In a capitalist economy, people can own companies, land, homes, equipment, and intellectual property. The government protects those ownership rights through laws and courts. Private property matters because it gives people an incentive to take care of and invest in what they own. If the government can take it away at any time, that incentive disappears. Private property rights are one of the foundations of capitalism.` },
          ],
        },

        {
          id: `l08-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Socialism and Communism`,
          paragraphs: [
            `Socialism is an economic system where the government plays a much bigger role. The government may own some major businesses — like healthcare, energy, or transportation — and provide many services for free or at low cost. The idea is that some things shouldn't be left entirely to private profit, especially basics like medical care and education.`,
            `Communism takes this further. In a communist system, the government owns nearly all major businesses and resources, and a central plan decides what gets produced and who gets it. The idea is to eliminate inequality by making sure no one is rich and no one is poor. The Soviet Union, Cuba, and China at various points have tried versions of communism.`,
            `What these systems try to do well: provide a safety net so no one falls through the cracks, reduce inequality, and ensure access to basic services like healthcare. What they struggle with: less competition can mean less innovation, central planning often misjudges what people actually want, and concentrating economic power in the government can lead to abuse of political power. The strictest versions of communism have a troubled history.`,
          ],
          image: `/ue-assets/social-studies/l08-s3-socialism-communism.webp`,
          imageCaption: `Socialism: government plays a major role. Communism: government runs almost everything.`,
          vocab: [
            { word: `socialism`,
              definition: `An economic system where the government plays a major role, often owning key industries and providing many services.`,
              audioPrompt: `Socialism is an economic system where the government plays a significant role in the economy, {name}. The government may own certain key industries, provide universal healthcare, education, or other services, and tax businesses and wealthy citizens at higher rates to fund these services. Many European countries combine market capitalism with socialist-style programs — they call this "social democracy." The goal is to balance the wealth creation of markets with a strong safety net for citizens.` },
            { word: `communism`,
              definition: `An economic system where the government owns nearly all major resources and a central plan decides production.`,
              audioPrompt: `Communism is an extreme form of government-controlled economy, {name}. In a communist system, the government owns nearly all major resources — factories, farms, businesses — and a central plan decides what gets produced and how it's distributed. The idea was to eliminate inequality by making sure no one is rich and no one is poor. In practice, communist economies have struggled with shortages, lack of innovation, and political abuses of the concentrated power. The Soviet Union, Cuba, North Korea, and China at various points tried versions of communism.` },
          ],
        },

        {
          id: `l08-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Mixed Economies (What Most Countries Actually Are)`,
          paragraphs: [
            `Here's the reality nobody puts on a quiz: almost no country in the world uses a pure version of any system. They're all hybrids. They take some features of capitalism and some features of socialism and mix them to fit their values and needs.`,
            `The United States is mostly capitalist, but has Social Security, Medicare, public schools, public roads, and many regulations. That's mixing in some socialism. Sweden and Denmark are often called socialist, but they have very free markets, lots of private businesses, and strong property rights. That's mixing in capitalism. China officially calls itself communist but allows large private businesses and lots of market activity in many sectors. Mixed economies everywhere.`,
            `The real debate in most countries isn't "capitalism vs socialism" — it's "where do we draw the line?" Should healthcare be public or private? Should the government regulate this industry more or less? Should taxes be higher to fund more services, or lower to leave more money with citizens? These are real ongoing debates, with tradeoffs on both sides.`,
          ],
          image: `/ue-assets/social-studies/l08-s4-mixed-economies.webp`,
          imageCaption: `Reality: almost every country is a mix. The debate is where to draw the line.`,
          vocab: [
            { word: `mixed economy`,
              definition: `An economy that combines features of capitalism and socialism, used by almost every country today.`,
              audioPrompt: `A mixed economy combines features of capitalism and socialism, {name}. Almost every country in the world has one. The United States is mostly capitalist but has lots of government services like public schools, Medicare, Social Security, and regulations. European countries like Sweden have free markets but also strong social programs. Even China, officially communist, allows huge private businesses. The reality is that pure systems are rare. Real debates are about where to draw lines — how much government, how much market.` },
            { word: `social democracy`,
              definition: `A system combining free-market capitalism with strong government social programs, used by many European countries.`,
              audioPrompt: `Social democracy is a system that combines free-market capitalism with strong social programs, {name}. Countries like Sweden, Denmark, and Norway are social democracies — they have competitive private businesses and free markets, but also high taxes and generous programs covering healthcare, education, and retirement. The idea is to keep the innovation and wealth of capitalism while reducing poverty and inequality through government services. Social democracy is the most popular model in northern Europe.` },
          ],
        },

        // ── BRANCHING DECISION GAME — Design Your Country's Economy ────────────
        {
          id: `l08-game`,
          type: `interactive`,
          format: `branching-decision`,
          guideText: `Now your turn, {name}. You're designing the economy of a brand-new country. You'll make four big decisions. After each one, I'll show you what that decision typically leads to — based on how real countries with similar choices have actually fared. There's no single right answer. There are real tradeoffs.`,
          scenarioTitle: `Design Your Country's Economy`,
          decisions: [
            {
              id: `d1`,
              situation: `Who should own most businesses in your country?`,
              context: `This is the most fundamental choice. It affects almost everything else.`,
              options: [
                {
                  id: `a`,
                  label: `Private individuals and companies own almost everything`,
                  preview: `Free markets thrive. Inequality also grows.`,
                },
                {
                  id: `b`,
                  label: `Government owns most major industries`,
                  preview: `Central control. Less innovation, more direct services.`,
                },
                {
                  id: `c`,
                  label: `Mix — most businesses private, but government owns key sectors like healthcare or energy`,
                  preview: `Compromise approach. Most modern countries do this.`,
                },
              ],
              historicalChoice: `c`,
              explanation: `Option C is what most successful modern countries actually do — including the US, UK, Germany, Japan, and South Korea. Pure private ownership (option A) tends to leave too many people behind. Pure government ownership (option B) tends to slow down innovation and adaptability. Most countries find that a mix works better than either extreme, though they disagree about exactly which sectors to keep public.`,
            },
            {
              id: `d2`,
              situation: `How should most prices be set in your country?`,
              context: `Prices send signals — but who sends them?`,
              options: [
                {
                  id: `a`,
                  label: `Free market — supply and demand set prices for almost everything`,
                  preview: `Prices respond fast to changes. Sometimes too volatile.`,
                },
                {
                  id: `b`,
                  label: `Government planning — set prices for important goods to keep things fair`,
                  preview: `Stable prices, but often shortages or surpluses when reality changes.`,
                },
                {
                  id: `c`,
                  label: `Mostly free market, with government setting some prices for things like medicine or utilities`,
                  preview: `Markets work, but key safety items don't get out of reach.`,
                },
              ],
              historicalChoice: `c`,
              explanation: `Option C is the most common modern approach. Countries that tried to set all prices through central planning (option B) — like the Soviet Union — had constant shortages because real demand kept changing faster than the planners could adjust. Pure market pricing for everything (option A) works for most goods but can make essentials like medicine unaffordable for some people. The middle path lets markets work for most things while protecting access to essentials.`,
            },
            {
              id: `d3`,
              situation: `How much of a safety net should your country provide?`,
              context: `What happens to people who lose their jobs, get sick, or fall on hard times?`,
              options: [
                {
                  id: `a`,
                  label: `Minimal — people should mostly take care of themselves`,
                  preview: `Lower taxes. Higher inequality. People can fall hard if things go wrong.`,
                },
                {
                  id: `b`,
                  label: `Major — strong unemployment benefits, universal healthcare, free education`,
                  preview: `Higher taxes. More security. Less inequality but slower growth in some industries.`,
                },
                {
                  id: `c`,
                  label: `Moderate — basic safety net but not super generous`,
                  preview: `Balanced approach. Some support, but mostly people are on their own.`,
                },
              ],
              historicalChoice: `b`,
              explanation: `This one's contested. Many of the highest-rated countries for quality of life — Norway, Denmark, Sweden, Finland — picked option B and they consistently rank high on happiness and health, though their taxes are also higher. The US picked closer to option C. Countries with option A (minimal safety net) often have more extreme poverty but lower taxes. There's no single right answer — it depends on what your country values most.`,
            },
            {
              id: `d4`,
              situation: `How should your country handle big gaps between rich and poor?`,
              context: `In every economy, some people earn way more than others. The question is whether the government should redistribute, and how much.`,
              options: [
                {
                  id: `a`,
                  label: `Let the market decide — whoever earns it keeps it`,
                  preview: `Maximum freedom. Maximum inequality.`,
                },
                {
                  id: `b`,
                  label: `Heavy redistribution — high taxes on wealth to fund programs for everyone`,
                  preview: `Lowest inequality. Some wealthy people leave. Slower wealth-building.`,
                },
                {
                  id: `c`,
                  label: `Progressive taxes — wealthy people pay a higher percentage, but rates aren't extreme`,
                  preview: `Reduces inequality moderately. Most successful modern countries use this approach.`,
                },
              ],
              historicalChoice: `c`,
              explanation: `Option C is the most common approach in successful modern economies. Even the US, often seen as the most capitalist developed country, uses progressive taxes — meaning higher earners pay a higher percentage. The argument for it: pure market outcomes can create extreme inequality that hurts social stability. The argument against very high redistribution: if it's too steep, people lose incentive to build wealth, and some leave for lower-tax countries. The "right" rate is one of the most debated questions in economics.`,
            },
          ],
          completionMessage: `Look at what you just built, {name}. Notice that there were no PERFECT answers — every choice had tradeoffs. Real countries face these exact decisions, and real political debates happen over them. The next time you hear someone arguing about "capitalism" or "socialism," remember — almost nobody anywhere is actually arguing for the pure version. The debate is always about WHERE to draw the lines.`,
        },

        {
          id: `l08-quiz`,
          type: `quiz`,
          guideText: `Test what stuck, {name}.`,
          questions: [
            { id: `l08-q1`, format: `multiple-choice`,
              question: `What three basic questions does every economic system have to answer?`,
              options: [
                `Who is President, what year is it, where is the capital`,
                `What gets produced, how does it get produced, who gets it`,
                `How much does it cost, who pays, when is it due`,
                `What is for sale, who is selling, who is buying`,
              ],
              correctIndex: 1,
              explanation: `Every economy answers three questions: what to produce, how to produce it, and who gets it. Different systems answer them in different ways — through markets, through government, or through some combination.` },
            { id: `l08-q2`, format: `multiple-choice`,
              question: `What's the main feature of capitalism?`,
              options: [
                `Government owns everything`,
                `Private individuals and companies own most businesses, and markets make most decisions`,
                `No money is used`,
                `Everyone earns the same wages`,
              ],
              correctIndex: 1,
              explanation: `Capitalism is built around private ownership and market decision-making. The government has a limited role compared to other systems.` },
            { id: `l08-q3`, format: `multiple-choice`,
              question: `What's the main feature of communism?`,
              options: [
                `Strong private property`,
                `The government owns nearly all major resources, and a central plan decides production`,
                `Low taxes`,
                `Free trade`,
              ],
              correctIndex: 1,
              explanation: `Communism in its pure form has the government owning nearly all resources and central planning deciding production. The goal is to eliminate inequality, though in practice these systems have struggled with shortages and lack of innovation.` },
            { id: `l08-q4`, format: `true-false`,
              question: `True or false: Almost no country in the world uses a pure version of any single economic system.`,
              correctAnswer: true,
              explanation: `True. Almost every country is a mixed economy. The US is mostly capitalist but has many government programs. Sweden is often called socialist but has very free markets. China is officially communist but allows huge private businesses. Pure systems are rare.` },
            { id: `l08-q5`, format: `multiple-choice`,
              question: `Which of these is something capitalism tends to do WELL?`,
              options: [
                `Eliminate inequality`,
                `Encourage innovation and respond quickly to changing demand`,
                `Provide free healthcare to everyone`,
                `Guarantee jobs for all citizens`,
              ],
              correctIndex: 1,
              explanation: `Capitalism rewards innovation and adapts quickly because competing businesses are incentivized to keep improving. Its struggles are around inequality and providing universal services.` },
            { id: `l08-q6`, format: `multiple-choice`,
              question: `Which of these is something socialism tries to do WELL?`,
              options: [
                `Eliminate all government`,
                `Make sure essentials like healthcare and education are available to everyone, even if they're poor`,
                `Encourage maximum competition between businesses`,
                `Allow only billionaires to own businesses`,
              ],
              correctIndex: 1,
              explanation: `Socialism focuses on providing essential services to everyone regardless of income. The tradeoff is higher taxes and sometimes slower innovation.` },
            { id: `l08-q7`, format: `multiple-choice`,
              question: `What's a "mixed economy"?`,
              options: [
                `An economy that's about to fail`,
                `An economy that combines features of capitalism AND socialism`,
                `An economy with no rules`,
                `An economy run by robots`,
              ],
              correctIndex: 1,
              explanation: `A mixed economy combines features of capitalism (free markets, private ownership) with features of socialism (some government services, regulations, safety nets). Almost every modern country uses some form of mixed economy.` },
            { id: `l08-q8`, format: `multiple-choice`,
              question: `In a real political debate about economics, what's usually actually being argued about?`,
              options: [
                `Pure capitalism vs pure communism`,
                `Where to draw the line on how much government should be involved`,
                `Whether to have any economy at all`,
                `How to pronounce the word "economics"`,
              ],
              correctIndex: 1,
              explanation: `Real debates are about where to draw lines in a mixed economy — should the government do more or less, regulate more or less, tax more or less. Almost nobody is arguing for purely one system or the other.` },
          ],
        },

        {
          id: `l08-reflection`,
          type: `reflection`,
          guideText: `Real moment, {name}. Pick a prompt.`,
          prompts: [
            { id: `r1`, text: `If you were designing a country, which decision in the game was hardest for you? Why?` },
            { id: `r2`, text: `What's one thing the US economy does well, and one thing it struggles with?` },
            { id: `r3`, text: `Do you think healthcare should be mostly run by the government or by private businesses? Why?` },
            { id: `r4`, text: `What surprised you most about how few countries use a "pure" economic system?` },
          ],
        },

        {
          id: `l08-realworld`,
          type: `real-world`,
          guideText: `Right now, in every country on Earth, real political fights are happening over economic system questions. Should taxes be higher or lower? Should healthcare be public or private? Should the government regulate this industry more or less? These aren't abstract debates — the outcomes affect what you pay, what services you get, what kind of country you live in. The more you understand the tradeoffs, the more useful your eventual vote — and your voice in between elections — will be.`,
          familyAdventure: `Pick TWO countries together — one that's more capitalist (like the US) and one that's more socialist (like Denmark, Sweden, Norway, or Germany). Look up: how do they compare on taxes, healthcare costs, education costs, happiness rankings, and average wealth? Then discuss: which version sounds more appealing to you, and why? What are the tradeoffs?`,
          creativePrompt: {
            intro: `You're starting a new country. You only get to keep ONE policy from the four decisions in the game — pick the one you feel most strongly about. Defend your choice.`,
            floor: `Write at least 5 sentences. Use the sentence starters if helpful.`,
            stretch: `Write 8-10 sentences. Acknowledge the tradeoffs of your choice and explain why you accept them.`,
            open: `Write as much as you want. Imagine the full system you'd build.`,
            frames: [
              `The policy I'd keep is ___.`,
              `I picked this because ___.`,
              `The tradeoff I'm accepting is ___.`,
              `Why I think it's worth it is ___.`,
              `What I'd say to someone who disagrees is ___.`,
            ],
          },
        },

        {
          id: `l08-celebration`,
          type: `celebration`,
          message: `Big topic handled, {name}. You can now define capitalism, socialism, and communism, understand why most countries are mixed economies, and recognize that real debates aren't about extremes — they're about where to draw the line. Next lesson we get personal — we look at how YOU should think about money in your own life. — Atlas.`,
          badge: `economic-systems-thinker`,
          badgeName: `Economic Systems Thinker`,
          xpEarned: 75,
        },
      ],
    },
  ],
};

export default SOCIAL_STUDIES_UE_L08;
