// ─────────────────────────────────────────────────────────────────────────────
// MONEY & BUSINESS UE  |  L19 — Passive Income: Making Money While You Sleep
// Age band : upper_explorers (9–10)   Guide: ace
// Standards: Jump$tart Personal Finance — Income types and investing;
//            Understanding active vs passive income
// CALIBRATED: UE spec v1.1 — real domain terms, em-dashes sparing
// SCOPE: 4 concepts — active vs passive income, real passive income types,
//        the honest truth (it takes work first), realistic expectations
// VERSION: v1
// ─────────────────────────────────────────────────────────────────────────────

const MONEY_UE_L19 = {
  ageBand: `upper_explorers`,
  subjectId: `money`,
  guide: `ace`,

  lessons: [
    {
      id: `mb-9-10-19`,
      title: `Passive Income: Making Money While You Sleep`,
      duration: 18,
      xpReward: 75,
      badge: `passive-income-pro`,
      badgeName: `Passive Income Pro`,

      screens: [
        {
          id: `l19-welcome`,
          type: `welcome`,
          guideText: `Hey {name}, Ace here. Today we cover a phrase you've probably heard. PASSIVE INCOME. Making money while you sleep. It sounds magical, and the internet is FULL of people promising easy passive income. Most of those promises are exaggerated or flat-out scams. But REAL passive income absolutely exists, and it's a powerful tool. Today we cover what passive income really is, the legitimate ways to build it, and the honest truth that most "passive" income actually requires a LOT of work up front. Let's go.`,
          headline: `Passive Income`,
          subtitle: `The real truth about making money while you sleep`,
          visual: `/ue-assets/money/l19-welcome.webp`,
        },

        {
          id: `l19-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Active vs Passive Income`,
          paragraphs: [
            `There are two basic kinds of income. ACTIVE INCOME requires you to keep WORKING to earn it. A salary is active income: stop working, and the money stops. A freelancer's project fees are active income. Most jobs produce active income. You trade your TIME directly for money. The problem with relying only on active income is that there are only 24 hours in a day, so there's a limit to how much you can earn.`,
            `PASSIVE INCOME keeps coming in with LITTLE OR NO ongoing work, once it's set up. Rental income from a property you own. Dividends from stocks you bought. Royalties from a book you wrote or a song you recorded. Interest from bonds. Income from a business that runs without your daily involvement. The key difference: with passive income, your MONEY or your PAST WORK does the earning, not your present time. This is why passive income is so powerful for building wealth and reaching financial independence (L18). It breaks the link between hours worked and money earned.`,
          ],
          image: `/ue-assets/money/l19-s1-active-passive.webp`,
          imageCaption: `Active income: trade time for money. Passive income: money or past work earns for you.`,
          vocab: [
            { word: `active income`,
              definition: `Income that requires you to keep working to earn it, like a salary or freelance fees. You trade your time directly for money. Stops when you stop working.`,
              audioPrompt: `Active income requires you to keep working to earn it, {name}. A salary is active income. Stop working, and the money stops. A freelancer's project fees are active income too. Most jobs produce active income. You trade your time directly for money. The problem with relying only on active income is that there are only 24 hours in a day, so there's a natural limit to how much you can earn. This is why building passive income streams alongside active income is so valuable over time.` },
            { word: `passive income`,
              definition: `Income that keeps coming in with little or no ongoing work once it's set up, from assets you own or work done once. Breaks the limit of trading hours for dollars.`,
              audioPrompt: `Passive income keeps coming in with little or no ongoing work once it's set up, {name}. Unlike active income, which stops the moment you stop working, passive income earns even when you're sleeping, on vacation, or focused on something else entirely. It comes from owning assets or from work you did once that keeps earning. Dividends from investments, rental income from property, royalties from creative work. The key insight is that passive income breaks the limit of trading hours for dollars. Time stays fixed. Passive income doesn't.` },
          ],
        },

        {
          id: `l19-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Real Types of Passive Income`,
          paragraphs: [
            `Here are LEGITIMATE forms of passive income that actually work. INVESTMENT INCOME: dividends from stocks, interest from bonds, and growth from index funds (L07). RENTAL INCOME: from real estate you own (L08), like Caro and Chris's short-term rentals. ROYALTIES: ongoing payments for creative work like books, music, photos, or designs that people keep buying or licensing. BUSINESS INCOME: from a business that runs without your daily involvement (you own it, others operate it). DIGITAL PRODUCTS: online courses, apps, templates, or content that sell repeatedly after you create them once.`,
            `Notice a pattern: real passive income comes from OWNING ASSETS (investments, property, businesses) or from CREATING something once that keeps earning (books, courses, products). It does NOT come from "secret tricks," "get rich quick" schemes, or anything that promises huge returns with no effort and no risk. Those are almost always scams (remember L13's lessons about spotting them). Real passive income is built on the solid foundations you've learned throughout this subject: assets, ownership, and creating genuine value.`,
          ],
          image: `/ue-assets/money/l19-s2-types.webp`,
          imageCaption: `Investments. Rentals. Royalties. Businesses. Digital products. Real passive income.`,
          vocab: [
            { word: `royalties`,
              definition: `Ongoing payments you earn when people use or buy your creative work, like a book, song, photo, design, or invention. A form of passive income that can continue for years after the work is created.`,
              audioPrompt: `Royalties are ongoing payments you earn when people use or buy your creative work, {name}. Like a book you wrote, a song you recorded, a photo you took, a design you made, or an invention you patented. Every time someone buys your book or plays your song, you earn a small payment. Royalties are a form of passive income because they can continue for years after you created the work. Royalties reward creating something valuable once that keeps serving people over and over.` },
            { word: `rental income`,
              definition: `Money earned by letting others use property you own, usually real estate. Tenants pay rent each month. One of the oldest and most reliable forms of passive income.`,
              audioPrompt: `Rental income is money you earn by letting others use property you own, {name}. The most common type is real estate. You buy a house or apartment, and tenants pay you monthly rent to live there. Rental income is one of the oldest and most reliable forms of passive income. Building rental income requires significant upfront capital to buy the property, plus ongoing costs like maintenance and management. But a good rental property can generate passive income for decades.` },
          ],
        },

        {
          id: `l19-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `The Honest Truth: It Takes Work First`,
          paragraphs: [
            `Here's the truth the "easy money" crowd doesn't tell you: almost all passive income requires a LOT of work, money, or both, UP FRONT. To earn rental income, you first need to save a down payment, buy a property, and set it up (lots of work and money). To earn dividends, you first need to save and invest for years (lots of saving and patience). To earn book royalties, you first have to write a great book (months or years of work). To earn from a digital course, you have to create something genuinely valuable first (significant effort).`,
            `The "passive" part comes LATER, after the hard work is done. This is why honest people describe it as "do the work once, get paid many times" rather than "get paid for doing nothing." The income becomes passive, but building it rarely is. This matters because it protects you from scams. Anyone promising passive income with NO upfront work, money, or skill is almost certainly lying. Real passive income is a reward for building assets or creating value first. Ace's truth: passive income is real and powerful, but it's earned through upfront effort and patience, not magic. The people who build it are usually the same patient, disciplined people who succeed at everything else in this subject.`,
          ],
          image: `/ue-assets/money/l19-s3-truth.webp`,
          imageCaption: `Do the work once, get paid many times. The "passive" part comes AFTER the effort.`,
          vocab: [
            { word: `dividend`,
              definition: `A payment companies make to their shareholders, usually from profits. A form of passive income. If you own dividend-paying stocks, you receive payments regularly just for owning the shares.`,
              audioPrompt: `A dividend is a payment companies make to their shareholders, usually from their profits, {name}. If you own stock in a company that pays dividends, you receive payments regularly, often four times a year, just for owning the shares. Dividends are a form of passive income. You don't have to do any work to earn them once you own the stock. Many large, stable companies pay dividends. Investors who build portfolios of dividend stocks can create a reliable stream of passive income over time.` },
            { word: `upfront investment`,
              definition: `The work, time, or money you put in before a passive income stream starts paying. Almost all real passive income requires it. Anyone promising passive income with none is almost certainly scamming.`,
              audioPrompt: `An upfront investment is the work, time, or money you put in before a passive income stream starts paying, {name}. Almost all real passive income requires it. Writing a book takes months of unpaid work before royalties begin. Buying a rental property requires saving a down payment first. The upfront investment is the price of admission to passive income. Anyone promising passive income with no upfront investment is almost certainly running a scam. Real passive income is earned in advance, then collected over time.` },
          ],
        },

        {
          id: `l19-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Realistic Expectations`,
          paragraphs: [
            `Let's be realistic about passive income. It usually starts SMALL. Your first dividend payment might be a few dollars. Your first month of book royalties might be $20. Your first rental property might barely break even after expenses. Passive income GROWS over time as you build more assets and create more things, but it rarely starts big. The people with significant passive income usually spent YEARS building it, one asset and one project at a time.`,
            `Passive income also isn't usually TRULY passive. Rental properties need management (repairs, tenants, etc.). Businesses need oversight. Even investments need monitoring and occasional rebalancing. "Passive" really means "requires much less ongoing work than a regular job," not "zero work forever." Despite these realities, passive income is one of the most powerful wealth-building tools that exists, because it breaks the limit of trading hours for dollars. Ace's final note on this: don't fall for the fantasy of effortless riches, but DO understand that building real passive income over time is one of the smartest financial moves you can make. Start learning and building young, and let it grow over your lifetime.`,
          ],
          image: `/ue-assets/money/l19-s4-realistic.webp`,
          imageCaption: `Starts small. Grows over years. "Passive" means less work, not zero work.`,
          vocab: [
            { word: `asset`,
              definition: `Something of value you own that can generate income or grow in value, like investments, real estate, or a business. Building income-generating assets is the foundation of passive income.`,
              audioPrompt: `An asset is something of value you own that can generate income or grow in value, {name}. Like investments, real estate, a business, or creative work that earns royalties. Building income generating assets is the foundation of passive income. The more income generating assets you own, the more passive income you receive. Each asset you build adds another stream of passive income. Over time, these streams can grow large enough to cover your living expenses. That's financial independence.` },
            { word: `income stream`,
              definition: `One source of money flowing into your life. The goal of building passive income is creating multiple income streams that together make your financial life more secure and resilient.`,
              audioPrompt: `An income stream is one source of money flowing into your life, {name}. Your salary is one income stream. A rental property is another. Dividends from investments are another. Royalties from a book you wrote are another. The goal of building passive income is to create multiple income streams over time. When one stream comes from your job and others come from assets you own, your financial life becomes much more secure and resilient. Most financially independent people have multiple income streams.` },
          ],
        },

        {
          id: `l19-game`,
          type: `interactive`,
          format: `investigation`,
          guideText: `Investigation time, {name}. Four income situations. For each one, identify what it is: ACTIVE INCOME (requires ongoing work), REAL PASSIVE INCOME (built on assets or past work, legitimate), or PASSIVE INCOME SCAM (promises easy money with no real foundation)?\n\nOne is sneakier than it looks.`,
          options: [
            { id: `active`,   label: `Active Income`,        color: `#60A5FA`, description: `Requires you to keep working to earn it. Trade time for money.` },
            { id: `passive`,  label: `Real Passive Income`,  color: `#34D399`, description: `Legitimate income from assets you own or value you created once. Required upfront work or money.` },
            { id: `scam`,     label: `Passive Income Scam`,   color: `#F87171`, description: `Promises easy money with no real asset, skill, or upfront effort. A trap.` },
          ],
          cases: [
            {
              id: `case-1`,
              caseTitle: `Situation #1`,
              clues: [
                { text: `Maya wrote a children's book three years ago.` },
                { text: `It still sells copies every month on Amazon.` },
                { text: `She earns about $300/month in royalties without doing any new work on it.` },
              ],
              correctAnswer: `passive`,
              realWorldExample: `Book royalties are classic passive income.`,
              explanation: `She did the hard work once (writing the book), and now earns ongoing royalties with no new effort. Pure real passive income. Note it required significant upfront work (writing a good book), which is exactly how real passive income works.`,
            },
            {
              id: `case-2`,
              caseTitle: `Situation #2`,
              clues: [
                { text: `David works as a barista at a coffee shop.` },
                { text: `He earns $18/hour for every hour he works.` },
                { text: `If he stops showing up, his income immediately stops.` },
              ],
              correctAnswer: `active`,
              realWorldExample: `Hourly wages are pure active income.`,
              explanation: `Trading hours directly for money. Stop working, money stops. Pure active income. Most jobs work this way. There's nothing wrong with active income (it's how most people start), but it's limited by the hours in a day.`,
            },
            {
              id: `case-3`,
              caseTitle: `Situation #3`,
              clues: [
                { text: `An ad promises: "Make $5,000/month in passive income! No skills, no work, no money needed! Just sign up and watch the cash roll in!"` },
                { text: `It asks for a $499 "starter fee" to join.` },
                { text: `There's no actual product, asset, or service being created or sold.` },
              ],
              correctAnswer: `scam`,
              realWorldExample: `"No work, no skills" passive income ads are almost always scams.`,
              explanation: `No real asset. No value created. Promises easy money with no effort, then asks for an upfront fee. Pure scam. Real passive income always comes from owning assets or creating value. "No work, no skills, no money, just profit" is the universal signature of a scam.`,
            },
            {
              id: `case-4`,
              caseTitle: `Situation #4 — The Tricky One`,
              clues: [
                { text: `Sara spent 6 months building an online course teaching kids how to draw.` },
                { text: `She worked hard with no pay during those 6 months.` },
                { text: `Now the course sells automatically online, earning her $1,200/month while she sleeps, with only occasional updates.` },
              ],
              correctAnswer: `passive`,
              realWorldExample: `Online courses are a popular legitimate passive income source.`,
              explanation: `Tricky because of those 6 months of UNPAID work. Some kids might think "that's not passive, she worked hard!" But that's EXACTLY how real passive income works. You do the work once (6 months building the course), then it earns money repeatedly with little ongoing effort. The upfront work is the price of admission. Pure real passive income. Lesson: real passive income almost ALWAYS requires significant upfront work or money. The "passive" part comes after. Don't confuse "required upfront effort" with "not passive." Do the work once, get paid many times.`,
            },
          ],
        },

        {
          id: `l19-quiz`,
          type: `quiz`,
          guideText: `Let's see what stuck, {name}.`,
          questions: [
            { id: `l19-q1`, format: `multiple-choice`,
              question: `What's the difference between ACTIVE and PASSIVE income?`,
              options: [
                `No difference`,
                `Active income requires ongoing work (like a salary). Passive income keeps coming with little ongoing work once it's set up (like royalties or dividends).`,
                `Passive income is always bigger`,
                `Active income is illegal`,
              ],
              correctIndex: 1,
              explanation: `Active income means trading your time for money — stop working, money stops. Passive income comes from assets you own or work you did once. The key: passive income breaks the link between hours worked and money earned.` },

            { id: `l19-q2`, format: `multiple-choice`,
              question: `What are REAL types of passive income?`,
              options: [
                `Secret tricks and schemes`,
                `Investment dividends, rental income, royalties, business income, and digital products — all built on owning assets or creating value`,
                `Just winning the lottery`,
                `Doing nothing`,
              ],
              correctIndex: 1,
              explanation: `Real passive income comes from owning assets (investments, property, businesses) or creating something once that keeps earning (books, courses, products). It does NOT come from "secret tricks" or get-rich-quick schemes, which are almost always scams.` },

            { id: `l19-q3`, format: `multiple-choice`,
              question: `What's the HONEST TRUTH about passive income?`,
              options: [
                `It's effortless free money`,
                `Almost all passive income requires a lot of work, money, or both UP FRONT — the "passive" part comes after`,
                `It's a scam`,
                `Only rich people can have it`,
              ],
              correctIndex: 1,
              explanation: `Real passive income is "do the work once, get paid many times," not "get paid for nothing." You write the book first, buy the property first, build the course first. The income becomes passive later. This truth protects you from scams.` },

            { id: `l19-q4`, format: `multiple-choice`,
              question: `What are ROYALTIES?`,
              options: [
                `Money for royalty/kings`,
                `Ongoing payments you earn when people use or buy your creative work — books, songs, photos, designs, inventions`,
                `A type of tax`,
                `Interest on loans`,
              ],
              correctIndex: 1,
              explanation: `Royalties are payments for creative work people keep using. Write a book once, earn royalties for decades. Record a song, earn every time it plays. Royalties reward creating something valuable once that keeps serving people. A classic form of passive income.` },

            { id: `l19-q5`, format: `true-false`,
              question: `True or false: If someone promises passive income with NO upfront work, money, or skill required, it's almost certainly a scam.`,
              correctAnswer: true,
              explanation: `True. Real passive income is a reward for building assets or creating value first. Anyone promising easy money with no effort, money, or skill is almost certainly lying. "No work, no skills, no money, just profit" is the universal signature of a scam.` },

            { id: `l19-q6`, format: `multiple-choice`,
              question: `What is a DIVIDEND?`,
              options: [
                `A type of loan`,
                `A payment companies make to shareholders (usually from profits) — passive income for stock owners`,
                `A bank fee`,
                `A tax`,
              ],
              correctIndex: 1,
              explanation: `Dividends are payments companies make to their shareholders, usually from profits, often quarterly. If you own dividend-paying stocks, you receive payments just for owning the shares. Some investors build portfolios specifically to create dividend income.` },

            { id: `l19-q7`, format: `multiple-choice`,
              question: `What does "PASSIVE" income realistically mean?`,
              options: [
                `Zero work forever`,
                `Requires much less ongoing work than a regular job — but rarely truly zero (rentals need management, businesses need oversight)`,
                `Totally effortless`,
                `Illegal income`,
              ],
              correctIndex: 1,
              explanation: `"Passive" really means "much less ongoing work than a regular job," not "zero work forever." Rental properties need management. Businesses need oversight. Even investments need occasional attention. The work is far less than a job, but rarely truly nothing.` },

            { id: `l19-q8`, format: `multiple-choice`,
              question: `How does passive income usually START?`,
              options: [
                `Big from day one`,
                `Small at first: a few dollars in dividends, $20 in royalties. Then it grows over years as you build more assets.`,
                `Instantly huge`,
                `Never works`,
              ],
              correctIndex: 1,
              explanation: `Passive income usually starts small and grows over time. Your first dividend might be a few dollars. Your first royalties might be $20. People with significant passive income usually built it over years, one asset and one project at a time. Patience is key.` },
          ],
        },

        {
          id: `l19-reflection`,
          type: `reflection`,
          guideText: `Before we wrap, {name}, pick ONE question and actually answer it. Your response gets saved, and I'll remember it next time we talk.`,
          prompts: [
            { id: `r1`, text: `Of the real passive income types (investments, rentals, royalties, businesses, digital products), which one interests YOU most? Why?` },
            { id: `r2`, text: `Passive income is "do the work once, get paid many times." Is there something you could CREATE once (a story, art, a video, a guide) that people might keep enjoying?` },
            { id: `r3`, text: `Why do you think so many people fall for "easy passive income" scams, even though real passive income takes work first?` },
            { id: `r4`, text: `If you started building ONE small passive income stream as a teenager, what would it be, and what upfront work would it take?` },
          ],
        },

        {
          id: `l19-realworld`,
          type: `real-world`,
          guideText: `Passive income is one of the most powerful (and most misunderstood) wealth-building tools. Done right, it's the engine of financial independence (L18). Done wrong (chasing scams), it's a path to losing money. The difference comes down to understanding the honest truth: real passive income is built on owning assets or creating genuine value, and it takes upfront work, money, or both. The internet's "easy passive income" promises are mostly traps. But patient people who build real income-generating assets over years can create streams that eventually fund their entire lives. Ace's note: start small, start young, create real value, and let your passive income grow over a lifetime.`,
          familyAdventure: `Family Passive Income Brainstorm. As a family, brainstorm REAL passive income ideas (not scams). Could anyone in the family create something once that keeps earning? A book? Art prints? A useful template or guide? Could the family invest in dividend stocks together as a learning project? Discuss what upfront work each idea would take. The goal is understanding that real passive income is built, not found.`,
          creativePrompt: {
            intro: `Imagine you're going to build ONE passive income stream over the next 10 years. Write your plan.`,
            floor: `Write at least 5 sentences. Cover what kind of passive income you'd build, the upfront work it requires, and how it might grow over time.`,
            stretch: `Write 8 to 10 sentences. Include the type of passive income, the upfront investment of time or money, how you'd build it step by step, and realistic expectations for how it grows.`,
            open: `Write as much as you want. Build a full 10-year passive income plan. Cover the type you'd build, why you chose it, the upfront work and money required, the step-by-step building process, realistic early expectations (small at first), and how it might grow into something significant over a decade. Be honest about the effort involved.`,
            frames: [
              `The passive income stream I'd build is ___.`,
              `The upfront work it requires is ___.`,
              `In the first year, I'd realistically earn ___.`,
              `Over 10 years, it could grow to ___.`,
              `I chose this because ___.`,
            ],
          },
        },

        {
          id: `l19-celebration`,
          type: `celebration`,
          message: `Great work, {name}. You can now explain the difference between active and passive income, name the real types of passive income, understand the honest truth that it takes work first, and hold realistic expectations. NEXT lesson is the CAPSTONE. You'll put EVERYTHING from this whole subject together into your own personal plan. MY 5-YEAR FINANCIAL PLAN. It's our last lesson together. See you there. — Ace.`,
          badge: `passive-income-pro`,
          badgeName: `Passive Income Pro`,
          xpEarned: 75,
        },
      ],
    },
  ],
};

export default MONEY_UE_L19;

// ─── Dev asset check ──────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const screens = MONEY_UE_L19.lessons[0].screens;
  const mags = screens.filter(s => s.type === 'magazine').length;
  const game = screens.find(s => s.type === 'interactive')?.cases?.length ?? 0;
  const quiz = screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  const refl = screens.find(s => s.type === 'reflection')?.prompts?.length ?? 0;
  const totalVocab = screens.filter(s => s.type === 'magazine').reduce((sum, s) => sum + (s.vocab?.length || 0), 0);
  console.log(`[LESSON-MONEY-UE-L19 v1] Loaded with ${mags} magazine sections, ${totalVocab} vocab terms, ${game} game cases, ${quiz} quiz Qs, ${refl} reflection prompts`);
}
