// ─────────────────────────────────────────────────────────────────────────────
// MONEY & BUSINESS VOYAGER  |  L19 — The Ethics of Money
// Age band : voyagers (11-12)   Guide: ace (Eagle)
// Standards: Coreverse Original — Ethics, Values-Based Finance
// CALIBRATED: Voyager spec v1.1 (May 2026)
// Interaction format: ARGUMENT BUILDER (maximize returns / ESG-aware / minimum harm)
// ─────────────────────────────────────────────────────────────────────────────

const VERSION = "voyager-mb-l19-v1";

const MONEYBUSINESS_VOYAGER_L19 = {
  ageBand: `voyagers`,
  subjectId: `money-business`,
  guide: `ace`,

  lessons: [
    {
      id: `mb-11-12-19`,
      title: `The Ethics of Money`,
      duration: 35,
      xpReward: 75,
      badge: `ethical-investor`,
      badgeName: `Ethical Investor`,

      screens: [
        {
          id: `l19-welcome`,
          type: `welcome`,
          guideText: `{name}, last lesson asked what the money is for. Today we ask a harder question: how should the money be made and spent, ethically? When you invest in an index fund, you become a partial owner of every company in that fund—including some doing things you might not approve of. When you spend money, you're voting for the products, companies, and practices you fund. When you choose a career, you're contributing your talent and time to some part of the economy and not others. These are ethical decisions even when they don't feel like it. Today we look at three serious positions on ethical investing and spending. Real philosophers and economists disagree about this. You build your argument.`,
          headline: `The Ethics of Money`,
          subtitle: `Three serious positions on the morality of how money flows.`,
          visual: `/voyager-assets/money-business/l19-welcome.webp`,
        },

        {
          id: `l19-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Why Money Decisions Are Ethical Decisions`,
          paragraphs: [
            `Every financial decision sends resources toward some outcomes and away from others. When you buy from a specific company, you fund their operations. When you invest in a stock, you support the company's ability to raise capital. When you choose where to work, you contribute your skills and time to a specific part of the economy. When you pay taxes, you fund the government's spending. None of these are neutral. Each shifts resources toward something.`,
            `Most people don't consciously think about the ethical dimensions of money decisions. They buy what's convenient, invest in what their employer offers in their 401(k), work where they can get hired, and pay taxes without thinking about what's being funded. This isn't necessarily wrong, but it's worth recognizing that "not thinking about it" is itself a position. By default, money flows where the existing financial system directs it. Choosing to think about the ethics adds an extra layer of intention.`,
            `Three things tend to come up in serious discussions of money ethics. Production: how is the company producing what it sells? Labor practices, environmental impact, supply chain, treatment of customers. Use of proceeds: what does the company do with the profits and capital? Reinvest in growth? Compensate executives? Pay dividends? Fund lobbying? Externalities: what costs does the company impose on others that aren't captured in its prices? Pollution, social harm, disinformation, addiction.`,
            `Different ethical frameworks weight these differently. Some focus mainly on whether a transaction harms anyone directly. Some focus on the cumulative impact on society. Some focus on virtue and what kind of person you want to be. Different frameworks lead to different conclusions about the same investment or purchase. There's no single "right" answer that follows from pure logic; values and frameworks matter.`,
          ],
          image: `/voyager-assets/money-business/l19-s1-ethics.webp`,
          imageCaption: `Every money decision moves resources somewhere. None are neutral.`,
          vocab: [
            {
              word: `externalities`,
              definition: `Costs (or benefits) that a transaction imposes on people who aren't part of the transaction. Pollution from a factory is a negative externality: people who didn't buy the factory's products still pay the cost in worse air quality. Central concept in economic ethics.`,
              audioPrompt: `Externalities are costs or benefits that a transaction imposes on people who aren't part of the transaction, {name}. Pollution from a factory is a negative externality. The buyer pays the factory's prices, the factory makes its products, but people who didn't buy anything still pay the cost in worse air quality. Carbon emissions are externalities of fossil fuel use. Addiction harm is an externality of certain consumer products. Disinformation harm is an externality of certain media business models. Recognizing externalities matters for ethical thinking about money because the price tag on something doesn't capture all the costs it produces.`,
            },
          ],
        },

        {
          id: `l19-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Position 1: Maximize Financial Returns`,
          paragraphs: [
            `This position holds that the primary purpose of investing is financial return, and that ethical concerns should be addressed through other means (politics, philanthropy, regulation) rather than through investment decisions. The classic argument comes from economist Milton Friedman, who argued in 1970 that "the social responsibility of business is to increase its profits"—within the boundaries of law and basic ethical custom. Companies and investors should optimize for returns; if society wants different outcomes, society should change laws.`,
            `The case for this position has serious points. Investors trying to maximize returns drive capital toward the most productive uses, which benefits society broadly through economic growth, innovation, and employment. Trying to mix ethical considerations into investment decisions often produces worse returns AND worse ethical outcomes (because the divestor doesn't change the underlying business, just loses returns). Political action and regulation are more effective tools for shaping company behavior than investor decisions in most cases.`,
            `This position has serious critics. The "social responsibility through markets" framework assumes laws and regulation will catch the externalities companies create, which often doesn't happen (pollution, addiction industries, predatory lending). Investors do influence company behavior at the margins through their choices. The pure-returns approach can leave investors funding behaviors they personally would oppose if asked directly.`,
            `Practical implication: maximize-returns investors typically use low-cost index funds without screening. They accept that they may own shares in tobacco, weapons, fossil fuels, addiction industries, etc., on the theory that addressing these issues isn't their job as investors.`,
          ],
          image: `/voyager-assets/money-business/l19-s2-maximize.webp`,
          imageCaption: `Position 1: maximize returns; address ethics through politics and regulation.`,
          vocab: [
            {
              word: `fiduciary duty`,
              definition: `The legal and ethical obligation to act in another party's financial interest. Many institutional investors have fiduciary duties to their beneficiaries. This often pushes toward maximizing returns and away from ESG considerations unless those considerations also serve financial returns.`,
              audioPrompt: `Fiduciary duty is the legal and ethical obligation to act in another party's financial interest, {name}. Many institutional investors have fiduciary duties to their beneficiaries. A pension fund manager has a fiduciary duty to the workers whose retirement money they manage. A mutual fund manager has a fiduciary duty to fund investors. These duties often push toward maximizing returns and away from ESG considerations unless those considerations also serve financial returns. The fiduciary framework creates legal pressure toward maximizing returns even when individual managers might personally prefer ethical screening. Recent legal debates have explored whether ESG can be reconciled with fiduciary duty.`,
            },
          ],
        },

        {
          id: `l19-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Position 2: ESG and Values-Aware Investing`,
          paragraphs: [
            `ESG stands for Environmental, Social, and Governance. ESG investing considers these factors alongside financial returns. The idea: invest in companies with strong environmental practices, fair treatment of stakeholders, and good governance, while avoiding companies that pollute, exploit workers, or have poor governance. ESG funds have grown rapidly, from less than $1 trillion globally in 2015 to roughly $30 trillion in 2026.`,
            `The case for ESG investing has several components. First: companies with strong ESG practices may produce better long-term returns by avoiding regulatory risks, lawsuits, and reputational damage. Second: investors can influence company behavior by directing capital toward better-behaving companies. Third: investors have legitimate reasons to align their investments with their values; pure-returns investing is itself a value choice (to ignore non-financial considerations) that doesn't deserve special status.`,
            `ESG also has serious critics. Methodological problems are real: ESG ratings vary widely between rating providers, often disagreeing about whether the same company is "good" or "bad" on ESG. Some companies game ESG scores through public-relations spending without changing underlying practices ("greenwashing"). Empirical research on ESG fund returns is mixed: some studies show neutral or slight underperformance vs unscreened funds, while others show comparable or slightly better returns.`,
            `Practical implication: ESG investors typically hold ESG-screened mutual funds or ETFs, often at slightly higher fees than basic index funds. They accept the methodological imperfections in exchange for some alignment between investments and values. They're explicit that their investments are one tool among several (alongside political action, charity, careful spending) for shaping the kind of economy they want.`,
          ],
          image: `/voyager-assets/money-business/l19-s3-esg.webp`,
          imageCaption: `Position 2: ESG investing; values alongside returns, with methodological caveats.`,
          vocab: [
            {
              word: `greenwashing`,
              definition: `When companies use marketing to appear environmentally friendly or socially responsible without changing their actual practices. Major concern in ESG investing because some companies game ESG ratings without genuine change.`,
              audioPrompt: `Greenwashing is when companies use marketing to appear environmentally friendly or socially responsible without changing their actual practices, {name}. A major concern in ESG investing because some companies game ESG ratings without genuine change. Fossil fuel companies running ad campaigns about their renewable energy investments while continuing to expand fossil fuel production. Fast fashion brands promoting one sustainable line while their core business remains unchanged. Greenwashing makes ESG investing harder because investors can't easily distinguish genuine reform from marketing. Recognizing greenwashing is a real skill that protects you from being misled by corporate communications.`,
            },
          ],
        },

        {
          id: `l19-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Position 3: Minimum Harm Approach`,
          paragraphs: [
            `A third position takes a more rigorous approach to ethics: actively avoid investing in or buying from companies that produce significant external harm, even if this means lower returns or higher prices. The framework comes from philosophical traditions including the principle of "do no harm" and various religious teachings against profiting from harmful activities.`,
            `Specific applications. Avoid investing in tobacco (causes addiction and premature death), private prisons (financial incentive to incarcerate more people), fossil fuels (contributing to climate change), weapons manufacturers (lethal products), addictive gambling and certain social media platforms (engineered for compulsive use), and predatory lenders. Avoid buying from companies engaged in clearly harmful practices: child labor, environmental destruction, deceptive marketing of harmful products to children.`,
            `The case for this position is largely moral rather than empirical. If something is genuinely harmful, profiting from it is ethically problematic regardless of whether the harm could be addressed through regulation or whether your specific share matters. The framework treats financial decisions as part of moral life, not separate from it. Many people who care deeply about animal welfare won't buy products tested on animals even if their individual purchase wouldn't change the market—the principle matters to them.`,
            `Critics raise practical challenges. Almost every company causes some harm somewhere; the line between "acceptable harm" and "unacceptable harm" is fuzzy. The screening process can become exhausting if applied rigorously. Pure minimum-harm investing typically produces a much smaller investment universe and worse diversification, with potentially significant return tradeoffs. The approach also can't address harm done by companies you're not invested in, which is most of them.`,
            `Practical implication: minimum-harm investors typically use specifically screened funds (often religion-aligned funds, certain ESG funds with strict screens, or direct ownership in companies they've vetted). They accept smaller investment universes and potentially lower returns in exchange for greater alignment with their values. They often combine investing with consumer activism, political engagement, and direct giving.`,
          ],
          image: `/voyager-assets/money-business/l19-s4-minimum.webp`,
          imageCaption: `Position 3: minimum harm; accept return tradeoffs to avoid funding identified harms.`,
          vocab: [
            {
              word: `divestment`,
              definition: `Selling investments in companies whose practices you find objectionable. A tool both individual investors and institutions (universities, pension funds) use to express disapproval and reduce capital flowing to those companies. Effectiveness is debated.`,
              audioPrompt: `Divestment is selling investments in companies whose practices you find objectionable, {name}. A tool that both individual investors and institutions like universities and pension funds use to express disapproval and reduce capital flowing to those companies. The South African divestment movement of the 1980s is often cited as a successful example: large institutional investors withdrawing from companies operating in apartheid South Africa contributed to political pressure that eventually ended apartheid. The effectiveness of divestment is debated. Critics argue that someone else just buys the divested shares, leaving the company's behavior unchanged. Supporters argue divestment contributes to broader social and political pressure beyond just the market impact.`,
            },
          ],
        },

        {
          id: `l19-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Before You Build Your Argument`,
          paragraphs: [
            `The three positions on money ethics are genuinely contested. Real philosophers, economists, religious leaders, and thoughtful citizens disagree about which framework is right. Your position will reflect your values about responsibility, harm, autonomy, and what counts as ethically significant. There isn't a single answer that emerges from pure logic.`,
            `As you build your argument, notice that this lesson differs from earlier ones in an important way. Most prior lessons were about empirical questions where evidence could resolve disagreement: what are the actual returns of active vs index funds? What's the actual loss rate of day traders? Those questions have data-driven answers. This lesson is about value questions where data informs but doesn't determine the answer. Different reasonable people apply different ethical frameworks and reach different conclusions about the same financial decisions.`,
            `One last framing: at 12, you're not making the big investment decisions yet. But you're forming the values and frameworks you'll use for the rest of your life. The position you build today may evolve significantly over time as you encounter more evidence, see more outcomes, and grow into your adult understanding. The skill is to be able to articulate any of the three positions thoughtfully even when you currently prefer one of them. That skill applies to many other contested ethical questions you'll face throughout your life.`,
          ],
          image: `/voyager-assets/money-business/l19-s5-before.webp`,
          imageCaption: `Value questions: data informs, but doesn't determine. Different frameworks, different answers.`,
          vocab: [
            {
              word: `moral framework`,
              definition: `A coherent set of principles for evaluating ethical questions. Consequentialism (focus on outcomes), deontology (focus on rules), virtue ethics (focus on character), care ethics (focus on relationships). Different frameworks often reach different conclusions about the same financial decisions.`,
              audioPrompt: `A moral framework is a coherent set of principles for evaluating ethical questions, {name}. Consequentialism focuses on outcomes: what produces the most good overall? Deontology focuses on rules and duties: are there actions that are inherently wrong regardless of consequences? Virtue ethics focuses on character: what does a good person do? Care ethics focuses on relationships and responsibility to particular others. Different frameworks often reach different conclusions about the same financial decisions. Understanding which framework you're applying, and which framework someone else is applying, helps you have productive ethical conversations rather than talking past each other.`,
            },
          ],
        },

        // ───── ARGUMENT BUILDER ───────────────────────────────────────────────
        {
          id: `l19-argument-builder`,
          type: `argument-builder`,
          headline: `What's An Ethical Relationship To Money?`,
          intro: `Pick one of three positions. Build your case with 3-4 pieces of evidence. Then respond to the strongest counterargument. Real philosophers and economists disagree on this in serious ways.`,
          positions: [
            {
              id: `maximize-returns`,
              label: `Maximize financial returns; address ethics through politics`,
              summary: `The primary purpose of investing is financial return. Ethical concerns should be addressed through laws, regulations, philanthropy, and political engagement—not by trying to mix ethical considerations into investment decisions. Investors trying to maximize returns drive capital toward productive uses that benefit society broadly. Trying to screen investments often produces worse returns AND worse ethical outcomes. Use low-cost index funds, accept that you own shares in companies doing things you wouldn't personally approve of, and address those concerns through other means.`,
            },
            {
              id: `esg-aware`,
              label: `ESG-aware investing; values alongside returns`,
              summary: `Investing should consider environmental, social, and governance factors alongside financial returns. Companies with strong ESG practices may produce better long-term returns by avoiding regulatory and reputational risks. Investors can influence corporate behavior by directing capital. Pure-returns investing is itself a value choice (to ignore non-financial considerations); it doesn't deserve special status. Accept the methodological imperfections of ESG ratings in exchange for some alignment between investments and values. ESG is one tool among several (politics, charity, spending) for shaping the kind of economy you want.`,
            },
            {
              id: `minimum-harm`,
              label: `Minimum harm; accept return tradeoffs for clear ethical alignment`,
              summary: `Actively avoid investing in or buying from companies that produce significant external harm: tobacco, weapons, fossil fuels, addiction industries, private prisons, predatory lenders. Profiting from harm is ethically problematic regardless of whether regulation could address it. Accept smaller investment universe and potentially lower returns in exchange for principled alignment with values. Combine with consumer activism, political engagement, and direct giving. Treat financial decisions as part of moral life, not separate from it.`,
            },
          ],
          evidence: [
            {
              id: `e1`,
              text: `Milton Friedman's 1970 essay "The Social Responsibility of Business is to Increase its Profits" argued that companies and investors should focus on returns within legal boundaries; addressing social issues through markets often produces worse outcomes than addressing them through political and regulatory means.`,
              source: `Friedman 1970; one of the most cited essays in business ethics`,
            },
            {
              id: `e2`,
              text: `Global ESG investing has grown from less than $1 trillion in 2015 to roughly $30 trillion in 2026. The growth reflects significant investor demand for values-aligned investment options.`,
              source: `GSIA (Global Sustainable Investment Alliance) data`,
            },
            {
              id: `e3`,
              text: `Empirical research on ESG fund returns vs unscreened funds is mixed: some meta-analyses find modest underperformance (5-15 basis points annually), others find comparable returns, a few find slight outperformance. The magnitude is small either way.`,
              source: `Multiple peer-reviewed meta-analyses 2018-2024`,
            },
            {
              id: `e4`,
              text: `The South African divestment movement of the 1980s is often cited as an example of effective divestment. Large institutional investors withdrew from companies operating in apartheid South Africa, contributing to political pressure that eventually ended apartheid.`,
              source: `Historical analysis of South African divestment`,
            },
            {
              id: `e5`,
              text: `Greenwashing is well-documented. Multiple academic studies find that ESG ratings disagree significantly between providers; some companies achieve high ESG scores through PR while expanding harmful practices.`,
              source: `MIT Sloan research; multiple academic studies`,
            },
            {
              id: `e6`,
              text: `Tobacco companies have been documented as among the highest-return investments over multi-decade periods, partly because of low valuations driven by ethical screens. "Sin stocks" sometimes outperform precisely because some investors won't touch them.`,
              source: `Academic finance research on "sin stocks"`,
            },
            {
              id: `e7`,
              text: `Externalities of harmful industries (tobacco-related healthcare costs, fossil fuel pollution, predatory lending consequences) are documented to cost society far more than the industries pay in taxes or regulations. The "social cost" of these activities significantly exceeds what's captured in prices.`,
              source: `Multiple economic studies on externalities`,
            },
          ],
          counterargument: {
            id: `counter`,
            text: `"You picked your position. Here's the strongest objection. The three positions assume your individual investment choices matter ethically. But your individual investment of a few thousand dollars in or out of any company makes zero observable difference to that company's behavior. Capital is fungible and someone else just buys what you sell. So 'ethical investing' may be more about how you feel about yourself than about real-world impact. Your position is essentially personal preference dressed up as ethics, while the real levers (political action, regulation, large institutional change) operate at scales you can barely influence anyway. Why does your individual financial choice deserve to be treated as ethically significant?"`,
            promptInstruction: `In 3-4 sentences, respond. Does your position depend on individual choices having direct impact, or on something else (consistency, virtue, signaling, contribution to collective action)?`,
          },
          reflectionPrompt: `Looking at the two positions you didn't choose, which was hardest to leave behind? Why?`,
        },

        {
          id: `l19-quiz`,
          type: `quiz`,
          headline: `Check your understanding`,
          questions: [
            {
              id: `q1`,
              type: `multiple-choice`,
              question: `Why are money decisions ethical decisions?`,
              options: [
                `Because money is bad`,
                `Every financial decision sends resources toward some outcomes and away from others (production, use of proceeds, externalities); none of these are neutral`,
                `Because the government says so`,
                `Money decisions aren't ethical`,
              ],
              correctIndex: 1,
              explanation: `Three things tend to come up: production (how it's made), use of proceeds (what they do with profits), and externalities (costs imposed on others). Different ethical frameworks weight these differently.`,
            },
            {
              id: `q2`,
              type: `multiple-choice`,
              question: `What are "externalities"?`,
              options: [
                `External taxes`,
                `Costs (or benefits) that a transaction imposes on people who aren't part of the transaction; pollution from a factory is a negative externality; central concept in economic ethics`,
                `Outsourced work`,
                `Foreign trade`,
              ],
              correctIndex: 1,
              explanation: `Externalities matter for ethical thinking because the price tag on something doesn't capture all the costs it produces. Carbon emissions, addiction, disinformation are externalities of various industries.`,
            },
            {
              id: `q3`,
              type: `multiple-choice`,
              question: `What does Position 1 (maximize returns) argue?`,
              options: [
                `Be greedy at all costs`,
                `The primary purpose of investing is financial return; ethical concerns should be addressed through laws, regulation, philanthropy, and political engagement—not through investment screening; Milton Friedman framework`,
                `Eliminate all profits`,
                `Tax everything heavily`,
              ],
              correctIndex: 1,
              explanation: `The maximize-returns position has serious advocates and points to real concerns about investor screening producing worse outcomes. The position isn't "ignore ethics"; it's "address ethics through other tools."`,
            },
            {
              id: `q4`,
              type: `multiple-choice`,
              question: `What does ESG stand for?`,
              options: [
                `Easy stock growth`,
                `Environmental, Social, and Governance; the framework for considering these factors alongside financial returns in investment decisions`,
                `Efficient saving group`,
                `Equity savings ground`,
              ],
              correctIndex: 1,
              explanation: `ESG investing has grown rapidly: less than $1 trillion globally in 2015 to roughly $30 trillion in 2026. The growth reflects real investor demand for values-aligned investment options.`,
            },
            {
              id: `q5`,
              type: `multiple-choice`,
              question: `What is "greenwashing"?`,
              options: [
                `Cleaning with eco products`,
                `When companies use marketing to appear environmentally friendly or socially responsible without changing actual practices; major concern in ESG investing because some companies game ESG ratings`,
                `Painting things green`,
                `Money laundering`,
              ],
              correctIndex: 1,
              explanation: `Multiple studies find ESG ratings disagree significantly between providers; some companies achieve high ESG scores through PR while expanding harmful practices. Recognizing greenwashing is a real skill.`,
            },
            {
              id: `q6`,
              type: `multiple-choice`,
              question: `What does the minimum-harm position argue?`,
              options: [
                `Buy everything`,
                `Actively avoid investing in or buying from companies that produce significant external harm (tobacco, weapons, fossil fuels, addiction industries); accept return tradeoffs for principled alignment with values; financial decisions are part of moral life`,
                `Maximize profits`,
                `Avoid all investing`,
              ],
              correctIndex: 1,
              explanation: `The minimum-harm position is largely values-based rather than empirical. Critics raise practical challenges (almost every company causes some harm somewhere). Supporters argue principles matter even when individual impact is small.`,
            },
            {
              id: `q7`,
              type: `multiple-choice`,
              question: `What does empirical research find about ESG fund returns vs unscreened funds?`,
              options: [
                `ESG always wins`,
                `Mixed: some meta-analyses find modest underperformance, others find comparable returns, a few find slight outperformance; magnitude is small either way`,
                `ESG always loses`,
                `No research exists`,
              ],
              correctIndex: 1,
              explanation: `The empirical evidence doesn't strongly favor either pure-returns or ESG. The return differences are small. The values choice is more important than the return tradeoff.`,
            },
            {
              id: `q8`,
              type: `multiple-choice`,
              question: `What is "divestment"?`,
              options: [
                `Refusing to invest`,
                `Selling investments in companies whose practices you find objectionable; the South African divestment movement of the 1980s is often cited as an example contributing to ending apartheid`,
                `Stock dividends`,
                `Government seizure`,
              ],
              correctIndex: 1,
              explanation: `Divestment effectiveness is debated. Critics say someone else just buys the shares. Supporters argue divestment contributes to broader social and political pressure.`,
            },
            {
              id: `q9`,
              type: `true-false`,
              question: `True or false: The question of ethical investing has a single correct answer that follows from logic.`,
              correctAnswer: false,
              explanation: `False. This is a contested value question where reasonable people apply different ethical frameworks and reach different conclusions. Real philosophers and economists disagree. Different frameworks (consequentialism, deontology, virtue ethics, care ethics) reach different conclusions about the same financial decisions.`,
            },
            {
              id: `q10`,
              type: `inference`,
              question: `A friend says "I just buy whatever index fund my 401k offers; I don't think about what's in it." Based on this lesson, what's the most useful response?`,
              options: [
                `"Smart, ignore the ethics"`,
                `"That's a defensible position—it's basically the 'maximize returns; address ethics through politics' framework, even if you didn't choose it consciously. The point isn't that you're wrong; it's that 'not thinking about it' is itself a position with implications. If you're comfortable with what's likely in there (some tobacco, weapons, fossil fuels, etc.) and you address ethics through other channels (voting, charity, careful spending), the framework is coherent. If you'd be uncomfortable on reflection, ESG-screened funds exist with similar fees. The choice is yours; just make it consciously."`,
                `"You're a bad person"`,
                `"Sell everything immediately"`,
              ],
              correctIndex: 1,
              explanation: `Real applied ethical thinking. Don't moralize; clarify the position. Make explicit what was implicit. Offer alternatives without judgment. This is how productive ethical conversations actually work.`,
            },
          ],
        },

        {
          id: `l19-reflection`,
          type: `reflection`,
          headline: `Sit with this`,
          intro: `Pick the prompt that pulls at you most. Your answer is saved.`,
          prompts: [
            { id: `reflect-cognitive`, category: `Cognitive`, prompt: `Before this lesson, did you think of investment choices as ethical decisions? Has your view shifted?` },
            { id: `reflect-meta`, category: `Metacognitive`, prompt: `Which position did you feel pulled toward emotionally vs intellectually? Were they the same position? If different, what does that tell you?` },
            { id: `reflect-identity`, category: `Identity`, prompt: `If you adopt a clear ethical framework for your money decisions, what kind of person does that shape you into over decades?` },
            { id: `reflect-application`, category: `Application`, prompt: `Pick one purchase or company you regularly use. Run it through the three positions. Where does each one land?` },
            { id: `reflect-critical`, category: `Critical`, prompt: `Are there ethical positions on money the lesson missed? What about religious frameworks, indigenous economic perspectives, or radical alternatives?` },
            { id: `reflect-personal`, category: `Personal investigation`, prompt: `Ask one adult about an ethical money decision they faced (job offer from a company they had concerns about, purchase from a controversial brand, etc.). How did they decide?` },
          ],
        },

        {
          id: `l19-real-world`,
          type: `real-world`,
          headline: `Take it into your life`,
          guideContext: `Money ethics shape how you spend the next 60 years of financial decisions. Two paths.`,
          familyActivity: {
            title: `The Family Ethics Conversation`,
            duration: `45 minutes`,
            description: `At dinner, share what you learned about the three positions on money ethics. Ask each adult: which position is closest to how they actually make decisions? Have they ever made a financial choice based on ethical considerations? Have they ever regretted not? This conversation often reveals that family members have different ethical frameworks they apply without consciously naming them. Naming the frameworks lets the family have richer conversations about future decisions. There's no goal of converting anyone; just understanding the landscape together.`,
          },
          projectOption: {
            title: `Ethics Audit Your Own Spending, 2 weeks (optional)`,
            duration: `2 weeks, ~20 minutes per day`,
            description: `Track your purchases for 14 days. For each purchase over $5, note: what company benefits? Do you know anything about their practices? Would you be comfortable with the company's practices if you investigated? Pick three companies you bought from and spend 30 minutes researching their ethics. After 14 days, write 1,000 words on what you learned. You don't need to change your behavior, just to make explicit what's currently implicit. This is real applied ethical thinking, the kind few adults ever do.`,
            offerToParent: `Parent: opt your kid into this project from the dashboard. Real ethical reflection at 12 is unusual.`,
          },
          identityQuestion: `If you become someone with a clear ethical framework for money decisions, what does that mean for the kind of life you build?`,
        },

        {
          id: `l19-identity-hook`,
          type: `identity-hook`,
          headline: `Who is this lesson making you?`,
          prompt: `One sentence. No wrong answer.`,
          placeholder: `Someone who...`,
          examples: [
            `Someone who can articulate three serious ethical positions on money regardless of which I personally prefer.`,
            `A person who knows "not thinking about it" is itself an ethical position.`,
            `Someone willing to make money decisions with explicit values, even when it's harder.`,
          ],
          saveKey: `identity_responses_mb_11_12_19`,
        },

        {
          id: `l19-celebration`,
          type: `celebration`,
          guideText: `{name}. After this lesson you can articulate three serious positions on money ethics; recognize externalities, greenwashing, divestment, and fiduciary duty as central concepts; understand that ESG empirical evidence is mixed; and apply different ethical frameworks to real financial decisions. Most adults make money decisions without consciously examining the ethics. You've now done what they haven't. Next time is the capstone: designing your own financial life. We synthesize everything from the 19 prior lessons into one integrating argument about what your relationship with money should be. Argument Builder format, 100 XP. See you there. — Ace`,
          badge: `ethical-investor`,
          badgeName: `Ethical Investor`,
          xpEarned: 75,
          competencies: [
            `Articulates three serious positions on money ethics (maximize returns, ESG, minimum harm)`,
            `Knows externalities, greenwashing, divestment, fiduciary duty as central concepts`,
            `Understands ESG empirical evidence is mixed and methodologically contested`,
            `Can apply different ethical frameworks to real financial decisions`,
            `Recognizes that "not thinking about it" is itself an ethical position`,
          ],
          nextLessonPreview: {
            title: `Lesson 20: Designing Your Financial Life — CAPSTONE`,
            hook: `Synthesize all 19 prior lessons into one integrating framework. Three philosophies for how to actually live financially. 100 XP final challenge.`,
          },
        },
      ],
    },
  ],
};

export default MONEYBUSINESS_VOYAGER_L19;

if (import.meta.env?.DEV) {
  const l = MONEYBUSINESS_VOYAGER_L19.lessons[0];
  const mags = l.screens.filter((s) => s.type === `magazine`).length;
  const argEvi = l.screens.find((s) => s.type === `argument-builder`)?.evidence?.length ?? 0;
  const quiz = l.screens.find((s) => s.type === `quiz`)?.questions?.length ?? 0;
  const reflect = l.screens.find((s) => s.type === `reflection`)?.prompts?.length ?? 0;
  console.log(
    `[LESSON-MB-VOYAGER-L19 ${VERSION}] "${l.title}" — ${mags} magazine, argument-builder w/ ${argEvi} evidence, ${quiz} quiz, ${reflect} reflection`
  );
}
