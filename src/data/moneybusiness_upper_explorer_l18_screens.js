// ─────────────────────────────────────────────────────────────────────────────
// MONEY & BUSINESS UE  |  L18 — Financial Independence: What It Means
// Age band : upper_explorers (9–10)   Guide: ace
// Standards: Jump$tart Personal Finance — Long-term financial planning;
//            Saving and investing for life goals
// CALIBRATED: UE spec v1.1 — real domain terms, em-dashes sparing
// SCOPE: 4 concepts — what financial independence is, the FI number,
//        how people reach it, freedom vs riches
// VERSION: v1
// ─────────────────────────────────────────────────────────────────────────────

const MONEY_UE_L18 = {
  ageBand: `upper_explorers`,
  subjectId: `money`,
  guide: `ace`,

  lessons: [
    {
      id: `mb-9-10-18`,
      title: `Financial Independence: What It Means`,
      duration: 18,
      xpReward: 75,
      badge: `independence-thinker`,
      badgeName: `Independence Thinker`,

      screens: [
        {
          id: `l18-welcome`,
          type: `welcome`,
          guideText: `Hey {name}, Ace here. Today we cover a goal that many people dream about but few really understand. FINANCIAL INDEPENDENCE. It's often shortened to "FI." Financial independence isn't about being super rich. It's about reaching the point where your money works hard enough that you don't HAVE to work for money anymore. You might still choose to work (most people do), but you'd be FREE to choose. Today we cover what FI really means, how people actually reach it, and why it's about freedom more than luxury. Let's go.`,
          headline: `Financial Independence`,
          subtitle: `Reaching the point where you don't HAVE to work for money`,
          visual: `/ue-assets/money/l18-welcome.webp`,
        },

        {
          id: `l18-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `What Financial Independence Means`,
          paragraphs: [
            `FINANCIAL INDEPENDENCE (FI) is the point where your INVESTMENTS and ASSETS generate enough income to cover your living expenses, without you needing to work. Imagine you have investments that pay you $40,000 a year automatically (through dividends, interest, and growth), and your living expenses are $40,000 a year. You're financially independent. Your money covers your life. You don't HAVE to work anymore, though you might choose to.`,
            `This is different from being RICH. Rich usually means having lots of money or a high income. Financial independence is about the RELATIONSHIP between your passive income and your expenses. A person with modest needs ($30,000/year) and modest investments could be financially independent. A person with expensive tastes ($300,000/year) might NOT be financially independent even with a high income, because their expenses are so high. FI is personal. It depends on YOUR expenses and YOUR assets, not on some big number.`,
          ],
          image: `/ue-assets/money/l18-s1-what-is.webp`,
          imageCaption: `Financial independence: your assets cover your expenses. Personal, not a fixed number.`,
          vocab: [
            { word: `financial independence`,
              definition: `The point where your investments and assets generate enough income to cover your living expenses without needing to work. Different from being rich. It's about the relationship between passive income and expenses.`,
              audioPrompt: `Financial independence is the point where your investments and assets generate enough income to cover your living expenses without you needing to work, {name}. Imagine you have investments that pay you 40,000 dollars a year automatically, and your living expenses are 40,000 dollars a year. You're financially independent. This is different from being rich. Financial independence is about the relationship between your passive income and your expenses. A person with modest needs and modest investments could be financially independent. A high earner with expensive tastes might not be.` },
            { word: `financial freedom`,
              definition: `Having enough money and assets to live on your own terms — the ability to choose work instead of needing it. Financial freedom means your money no longer controls you. You control it.`,
              audioPrompt: `Financial freedom is having enough money and assets that you can live life on your own terms, {name}. Different from simply being financially independent, where passive income covers expenses. Financial freedom is broader. It means having choices. The choice to work or not. The choice to take risks because failure won't ruin you. The choice to spend time on what matters most. The choice to say no to things that don't fit your values. Financial freedom is the goal of escaping financial traps through smart, consistent habits.` },
          ],
        },

        {
          id: `l18-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `The FI Number`,
          paragraphs: [
            `Many people who pursue financial independence calculate their "FI NUMBER," which is roughly how much money they need invested to be financially independent. A common guideline is the "25x rule": you need about 25 TIMES your annual expenses invested. So if you spend $40,000 a year, your FI number is about $1,000,000 ($40,000 x 25). If you spend $60,000 a year, your FI number is about $1,500,000. The lower your expenses, the lower your FI number, and the easier it is to reach.`,
            `Why 25 times? It connects to something called the "4% guideline." Research suggests that if you withdraw about 4% of a well-invested portfolio each year, the money can last for decades (because the investments keep growing). 4% of $1,000,000 is $40,000 per year. This isn't a guarantee, and experts debate the details. But it's a useful rough framework. The big insight: your FI number depends MORE on your EXPENSES than your income. Someone who keeps expenses low needs far less to become financially independent than someone with an expensive lifestyle, even if they earn the same.`,
          ],
          image: `/ue-assets/money/l18-s2-fi-number.webp`,
          imageCaption: `FI number = about 25x your annual expenses. Lower expenses, lower target.`,
          vocab: [
            { word: `FI number`,
              definition: `Roughly how much money you need invested to be financially independent. A common guideline is 25 times your annual expenses. Lower expenses mean a lower (easier) FI number.`,
              audioPrompt: `Your FI number is roughly how much money you need invested to be financially independent, {name}. A common guideline is the 25 times rule. You need about 25 times your annual expenses invested. So if you spend 40,000 dollars a year, your FI number is about 1 million dollars. If you spend 60,000 dollars a year, it's about 1.5 million. The lower your expenses, the lower your FI number, and the easier it is to reach.` },
            { word: `4% rule`,
              definition: `A guideline suggesting you can withdraw about 4% of a well-invested portfolio each year and have it last for decades. The math behind the 25x FI number. A guideline, not a guarantee.`,
              audioPrompt: `The 4 percent rule is a guideline for how much you can safely withdraw from investments each year, {name}. Research suggests that withdrawing 4 percent of your portfolio annually allows the money to last for decades. This connects to the 25 times FI number. If you have 25 times your annual expenses invested, 4 percent covers exactly one year of expenses. Your money can keep funding your life indefinitely. It's a guideline, not a guarantee, but the foundation of most FI planning.` },
          ],
        },

        {
          id: `l18-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `How People Actually Reach FI`,
          paragraphs: [
            `People reach financial independence by combining the habits from earlier in this subject. (1) MAXIMIZE THE GAP between income and expenses (L05). The bigger the gap, the faster you save. (2) INVEST the savings consistently in diversified assets (L07), letting compound interest work (L02). (3) AVOID lifestyle inflation (L09), keeping expenses controlled even as income grows. (4) BE PATIENT, since FI usually takes 10-30 years depending on your savings rate. The math is straightforward. The discipline is the hard part.`,
            `Your SAVINGS RATE (the percentage of income you save and invest) matters enormously. Someone saving 10% of income might take 40+ years to reach FI. Someone saving 50% might reach it in about 17 years. Someone saving 70% might reach it in about 10 years. This is why the FI movement emphasizes both EARNING more AND keeping expenses reasonable. The two together create a high savings rate, which (combined with compound interest) is the engine of financial independence. Ace's note: most people never reach FI, not because the math is hard, but because the patience and discipline are. The people who do it usually started young and stayed consistent.`,
          ],
          image: `/ue-assets/money/l18-s3-reach.webp`,
          imageCaption: `Maximize the gap. Invest consistently. Avoid lifestyle inflation. Be patient.`,
          vocab: [
            { word: `savings rate`,
              definition: `The percentage of your income that you save and invest rather than spend. The single biggest factor in how fast you can reach financial independence. Higher savings rate, faster FI.`,
              audioPrompt: `Your savings rate is the percentage of your income that you save and invest rather than spend, {name}. It's the single biggest factor in how fast you can reach financial independence. Someone saving 10 percent of income might take over 40 years to reach FI. Someone saving 50 percent might reach it in about 17 years. Someone saving 70 percent might reach it in about 10 years. Combined with compound interest, a high savings rate is the engine of financial independence.` },
            { word: `lifestyle inflation`,
              definition: `The tendency to spend more as you earn more. One of the biggest obstacles to reaching financial independence. When expenses rise with income, the gap never grows and FI stays out of reach.`,
              audioPrompt: `Lifestyle inflation means spending more as you earn more, {name}. It's one of the biggest obstacles to reaching financial independence. Every time you earn more money and immediately upgrade your lifestyle to match, your FI number goes up and your savings rate stays low. The gap between income and expenses never grows. But when you earn more and keep your expenses stable, that extra income can be invested, compounding over time. The math of financial independence rewards people who resist lifestyle inflation and grows ever harder for those who don't.` },
          ],
        },

        {
          id: `l18-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Freedom, Not Just Riches`,
          paragraphs: [
            `The most important thing about financial independence is what it really gives you: FREEDOM and CHOICE. People who reach FI don't usually stop working. Studies show most keep working, but they work DIFFERENTLY. They can choose jobs they love instead of jobs they need. They can take risks (like starting a business) because failure won't ruin them. They can spend more time with family, on hobbies, on causes they care about. They can say "no" to bad situations because they're not financially trapped.`,
            `This is why FI aligns with the conscious-living values you may be learning across Coreverse. Money isn't the GOAL. Money is a TOOL that, used wisely, buys you FREEDOM to live according to your values. Some people pursue extreme early retirement. Others just want the security of knowing they could stop if they needed to. Either way, FI is about taking control of your relationship with money instead of being controlled by it. Ace's truth: the people who handle money best don't worship it or fear it. They use it as a tool to build the life they actually want. Financial independence is the ultimate expression of that.`,
          ],
          image: `/ue-assets/money/l18-s4-freedom.webp`,
          imageCaption: `FI buys freedom, not luxury. Money as a tool to live by your values.`,
          vocab: [
            { word: `passive income`,
              definition: `Income that continues with little ongoing work, like dividends, interest, rental income, or royalties. The foundation of financial independence. When passive income covers expenses, you're financially independent.`,
              audioPrompt: `Passive income is income that continues with little ongoing work, {name}. Like dividends from investments, interest, rental income from property, or royalties from creative work. Passive income is the foundation of financial independence. When your passive income covers your living expenses, you're financially independent. You don't have to work for money anymore. Building passive income usually takes a lot of work and saving up front, especially through investing over many years. But once it's built, it can support you with little ongoing effort.` },
            { word: `financial security`,
              definition: `Having enough savings and stable income to handle most financial surprises without going into debt. A step toward financial independence — security comes first, then independence.`,
              audioPrompt: `Financial security is a step on the path to financial independence, {name}. It means having enough savings and income to handle most financial surprises without panic or going into debt. An emergency fund, stable income, no high-interest debt, and some investments all contribute to financial security. Most people aim for security before independence. Security means a bad month won't ruin you. Independence means you don't need to work at all. Security is the foundation. Independence is where the journey leads.` },
          ],
        },

        {
          id: `l18-game`,
          type: `interactive`,
          format: `investigation`,
          guideText: `Investigation time, {name}. Four people described by their finances. For each one, decide: FINANCIALLY INDEPENDENT (assets cover expenses, doesn't HAVE to work), HIGH INCOME BUT NOT FI (earns a lot but still depends on working), or BUILDING TOWARD FI (on the path but not there yet)?\n\nOne is sneakier than it looks.`,
          options: [
            { id: `fi`,          label: `Financially Independent`, color: `#34D399`, description: `Investments and assets cover living expenses. Doesn't have to work for money.` },
            { id: `highincome`,  label: `High Income, Not FI`,     color: `#F87171`, description: `Earns a lot but spends most of it and depends on continuing to work.` },
            { id: `building`,    label: `Building Toward FI`,       color: `#60A5FA`, description: `Saving and investing consistently, on the path, but not there yet.` },
          ],
          cases: [
            {
              id: `case-1`,
              caseTitle: `Person #1`,
              clues: [
                { text: `Has $1.2 million invested in index funds and rental properties.` },
                { text: `These investments generate about $48,000 a year in passive income.` },
                { text: `Her annual living expenses are $42,000. She works part-time because she enjoys it, not because she needs to.` },
              ],
              correctAnswer: `fi`,
              realWorldExample: `Classic financial independence: assets exceed expenses.`,
              explanation: `Passive income ($48K) exceeds expenses ($42K). She works by choice, not necessity. Pure financial independence. Note she keeps working, which is common. FI is about freedom to choose, not forced retirement.`,
            },
            {
              id: `case-2`,
              caseTitle: `Person #2`,
              clues: [
                { text: `Earns $300,000 a year as a surgeon.` },
                { text: `Spends nearly all of it on a big mortgage, luxury cars, and expensive vacations.` },
                { text: `Has only $50,000 in savings. If he stopped working, he'd run out of money in months.` },
              ],
              correctAnswer: `highincome`,
              realWorldExample: `High earners with low savings are surprisingly common.`,
              explanation: `Huge income but almost no assets and high expenses. Totally dependent on continuing to work. Pure high-income-but-not-FI. This connects to L06 (income vs wealth) and L09 (lifestyle inflation). High income doesn't equal financial freedom.`,
            },
            {
              id: `case-3`,
              caseTitle: `Person #3`,
              clues: [
                { text: `Earns $70,000 a year and saves 40% of it.` },
                { text: `Has built up $250,000 in investments over 8 years.` },
                { text: `On track to reach financial independence in about 10 more years if she stays consistent.` },
              ],
              correctAnswer: `building`,
              realWorldExample: `Steady high-savings-rate savers are the typical FI path.`,
              explanation: `Strong savings rate, growing investments, on a clear path, but not there yet. Pure building toward FI. Her high savings rate (40%) is the engine. With consistency and compound interest, she'll likely get there.`,
            },
            {
              id: `case-4`,
              caseTitle: `Person #4 — The Tricky One`,
              clues: [
                { text: `Won $2 million in the lottery and invested it all.` },
                { text: `The investments generate about $80,000 a year in passive income.` },
                { text: `But his lifestyle costs $150,000 a year, and he keeps spending more as his friends expect fancy outings.` },
              ],
              correctAnswer: `highincome`,
              realWorldExample: `Many lottery winners go broke despite huge windfalls.`,
              explanation: `Tricky because he has $2 million invested (sounds like FI). But his EXPENSES ($150K) far exceed his passive income ($80K). He's draining his wealth every year and will run out eventually. So despite the big number, he's NOT financially independent. He behaves like the high-income-but-not-FI person. Lesson: FI isn't about how much money you HAVE. It's about whether your passive income covers your expenses. Lifestyle inflation can destroy FI even for someone with millions. This is why so many lottery winners and high earners end up broke. Expenses matter as much as assets.`,
            },
          ],
        },

        {
          id: `l18-quiz`,
          type: `quiz`,
          guideText: `Let's see what stuck, {name}.`,
          questions: [
            { id: `l18-q1`, format: `multiple-choice`,
              question: `What is FINANCIAL INDEPENDENCE?`,
              options: [
                `Being super rich`,
                `The point where your investments and assets generate enough income to cover your living expenses without needing to work`,
                `Having a high salary`,
                `Never spending money`,
              ],
              correctIndex: 1,
              explanation: `Financial independence means your passive income covers your expenses. You don't HAVE to work for money anymore (though you might choose to). It's about the relationship between assets and expenses, not about being rich.` },

            { id: `l18-q2`, format: `multiple-choice`,
              question: `How is FINANCIAL INDEPENDENCE different from being RICH?`,
              options: [
                `They're the same`,
                `Rich means lots of money or high income. FI is about whether your passive income covers your expenses. Someone modest can be FI; someone high-earning might not be.`,
                `FI requires more money`,
                `Rich people are always FI`,
              ],
              correctIndex: 1,
              explanation: `FI is personal. It depends on YOUR expenses and YOUR assets. A person with modest needs and modest investments can be FI. A high earner with expensive tastes might not be. It's the relationship between passive income and expenses that matters.` },

            { id: `l18-q3`, format: `multiple-choice`,
              question: `What's the "25x rule" for the FI NUMBER?`,
              options: [
                `Save 25 dollars`,
                `You need roughly 25 times your annual expenses invested to be financially independent`,
                `Work for 25 years`,
                `Earn 25% interest`,
              ],
              correctIndex: 1,
              explanation: `The 25x rule says you need about 25 times your annual expenses invested. Spend $40,000/year? Your FI number is about $1,000,000. This connects to the 4% guideline (withdraw ~4% per year). Lower expenses mean a lower, easier FI number.` },

            { id: `l18-q4`, format: `multiple-choice`,
              question: `What's the SINGLE BIGGEST factor in how fast you reach FI?`,
              options: [
                `Luck`,
                `Your savings rate — the percentage of income you save and invest`,
                `Your job title`,
                `Where you live`,
              ],
              correctIndex: 1,
              explanation: `Savings rate matters most. Saving 10% might take 40+ years. Saving 50% might take ~17 years. Saving 70% might take ~10 years. This is why FI emphasizes both earning more AND controlling expenses — together they create a high savings rate.` },

            { id: `l18-q5`, format: `true-false`,
              question: `True or false: Most people who reach financial independence STOP working entirely.`,
              correctAnswer: false,
              explanation: `False. Most people who reach FI keep working, but they work DIFFERENTLY — by choice, on things they love, with freedom to take risks or say no. FI is about freedom and choice, not forced retirement. The point is that you don't HAVE to work, not that you can't.` },

            { id: `l18-q6`, format: `multiple-choice`,
              question: `Why does LOWERING your expenses make FI easier to reach?`,
              options: [
                `It doesn't`,
                `Because your FI number is based on your expenses (about 25x) — lower expenses mean a lower target AND a higher savings rate`,
                `Expenses don't matter`,
                `Only income matters`,
              ],
              correctIndex: 1,
              explanation: `Lower expenses help two ways: your FI number drops (25x a smaller number), AND your savings rate rises (you save more of your income). This double effect is why controlling expenses is so powerful for reaching FI.` },

            { id: `l18-q7`, format: `multiple-choice`,
              question: `What does financial independence REALLY give people?`,
              options: [
                `Endless luxury`,
                `Freedom and choice — to work on what they love, take risks, spend time on what matters, and say no to bad situations`,
                `The ability to stop caring`,
                `Guaranteed happiness`,
              ],
              correctIndex: 1,
              explanation: `FI's real gift is freedom. People who reach it can choose work they love, take risks, spend time on family or causes, and say no to bad situations. Money becomes a tool for living according to your values, not a trap that controls you.` },

            { id: `l18-q8`, format: `multiple-choice`,
              question: `Why do many LOTTERY WINNERS and high earners still end up broke?`,
              options: [
                `Bad luck`,
                `Because FI depends on expenses staying below passive income — lifestyle inflation can drain even millions`,
                `They don't have enough`,
                `Taxes`,
              ],
              correctIndex: 1,
              explanation: `FI isn't about how much you HAVE — it's about whether passive income covers expenses. Someone with $2 million but $150,000/year in expenses is still draining their wealth. Lifestyle inflation destroys FI even for the wealthy. Expenses matter as much as assets.` },
          ],
        },

        {
          id: `l18-reflection`,
          type: `reflection`,
          guideText: `Before we wrap, {name}, pick ONE question and actually answer it. Your response gets saved, and I'll remember it next time we talk.`,
          prompts: [
            { id: `r1`, text: `If you were financially independent (didn't HAVE to work for money), what would you actually DO with your time? Would you still work? On what?` },
            { id: `r2`, text: `FI depends more on EXPENSES than income. What's one thing you think you'd happily live without if it meant more freedom later?` },
            { id: `r3`, text: `Imagine two people earning the same amount. One saves 10%, one saves 50%. How differently might their lives turn out over 30 years?` },
            { id: `r4`, text: `Ace says money is a TOOL for building the life you want, not the goal itself. What kind of life would you want your money to help you build?` },
          ],
        },

        {
          id: `l18-realworld`,
          type: `real-world`,
          guideText: `Financial independence is a powerful goal because it changes your relationship with money and work. Instead of being trapped by financial necessity, you gain the freedom to make choices based on values rather than fear. The FI movement has grown enormously in recent years, with communities, books, and tools helping ordinary people reach it. The principles are the same ones from this whole subject: maximize the gap, invest consistently, avoid lifestyle inflation, be patient. Ace's note: even if you never pursue extreme FI, understanding it helps you make better financial choices throughout your life. The freedom that comes from not being financially desperate is one of the most valuable things money can buy.`,
          familyAdventure: `Family FI Conversation. As a family, talk about (at an age-appropriate level): what would each person do if they didn't HAVE to work for money? Would they still work? On what? Travel? Create? Help others? This conversation reveals values. It also shows that FI isn't about being lazy — it's about freedom to do what matters most to you.`,
          creativePrompt: {
            intro: `Imagine your financially independent future self at age 45. Describe a typical week of your life.`,
            floor: `Write at least 5 sentences. Cover how you reached FI, whether you still work, and what you do with your freedom.`,
            stretch: `Write 8 to 10 sentences. Include your FI number, how you built it (savings rate, investing), whether you still work and why, and how your life is different from someone who isn't FI.`,
            open: `Write as much as you want. Build a full picture of your FI life. Cover the journey (how you saved and invested), your FI number, your passive income sources, whether and how you work, what you do with your freedom, and how money serves your values rather than controlling you.`,
            frames: [
              `At 45, I'm financially independent. I got here by ___.`,
              `My passive income comes from ___.`,
              `I still work because ___ (or: I don't work because ___).`,
              `With my freedom, I spend my time ___.`,
              `Money, for me, is a tool to ___.`,
            ],
          },
        },

        {
          id: `l18-celebration`,
          type: `celebration`,
          message: `Great work, {name}. You can now explain what financial independence means, the FI number and 25x rule, how savings rate drives the timeline, and why FI is really about freedom. Next lesson: the engine behind financial independence. PASSIVE INCOME. Making money while you sleep, and the honest truth about how it actually works. — Ace.`,
          badge: `independence-thinker`,
          badgeName: `Independence Thinker`,
          xpEarned: 75,
        },
      ],
    },
  ],
};

export default MONEY_UE_L18;

// ─── Dev asset check ──────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const screens = MONEY_UE_L18.lessons[0].screens;
  const mags = screens.filter(s => s.type === 'magazine').length;
  const game = screens.find(s => s.type === 'interactive')?.cases?.length ?? 0;
  const quiz = screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  const refl = screens.find(s => s.type === 'reflection')?.prompts?.length ?? 0;
  const totalVocab = screens.filter(s => s.type === 'magazine').reduce((sum, s) => sum + (s.vocab?.length || 0), 0);
  console.log(`[LESSON-MONEY-UE-L18 v1] Loaded with ${mags} magazine sections, ${totalVocab} vocab terms, ${game} game cases, ${quiz} quiz Qs, ${refl} reflection prompts`);
}
