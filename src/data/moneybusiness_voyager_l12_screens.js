// ─────────────────────────────────────────────────────────────────────────────
// MONEY & BUSINESS VOYAGER  |  L12 — Taxes: What They Are and Why
// Age band : voyagers (11-12)   Guide: ace (Eagle)
// Standards: Coreverse Original — Public Finance, Tax Policy
// CALIBRATED: Voyager spec v1.1 (May 2026)
// Interaction format: ARGUMENT BUILDER (three positions on taxation)
// ─────────────────────────────────────────────────────────────────────────────

const VERSION = "voyager-mb-l12-v1";

const MONEYBUSINESS_VOYAGER_L12 = {
  ageBand: `voyagers`,
  subjectId: `money-business`,
  guide: `ace`,

  lessons: [
    {
      id: `mb-11-12-12`,
      title: `Taxes: What They Are and Why`,
      duration: 35,
      xpReward: 75,
      badge: `tax-thinker`,
      badgeName: `Tax Thinker`,

      screens: [
        {
          id: `l12-welcome`,
          type: `welcome`,
          guideText: `{name}, taxes are one of the most politically charged topics in any country. Everyone has an opinion. Most opinions are missing key facts. Today we look at what taxes actually fund, how the US tax system actually works, and three serious positions thoughtful people hold about whether the system should be different. You probably won't pay significant taxes for many years. But the policy questions around taxation will affect your entire life, and the decisions you'll make as a voter, business owner, or worker will be better if you actually understand the math and the arguments. This lesson tries to be honest about what's empirical and what's value-based in the tax debate.`,
          headline: `Taxes`,
          subtitle: `What they actually fund. Three serious positions on whether they should be different.`,
          visual: `/voyager-assets/money-business/l12-welcome.webp`,
        },

        {
          id: `l12-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `What Taxes Actually Are`,
          paragraphs: [
            `A tax is a mandatory payment that individuals or businesses make to a government. Unlike fees (where you pay for a specific service), taxes go into general government funds that get spent on many things at once. The US government collects taxes at three main levels: federal (the IRS), state (state revenue departments), and local (cities, counties, school districts). Each level taxes different things in different ways.`,
            `Major federal tax types as of 2026: Individual income tax (about 50% of federal revenue), payroll tax (about 36%, funds Social Security and Medicare), corporate income tax (about 9%), excise taxes (specific products like gasoline, alcohol, tobacco; about 2-3%), estate tax (very high inheritances; less than 1%), and tariffs (taxes on imports; varies, currently elevated in some categories).`,
            `Major state and local taxes: state income tax (varies by state; 8 states have no income tax), sales tax (most states have it), property tax (paid by property owners, often the main funding for local schools), various smaller taxes. State and local taxes combined typically equal 30-40% of total taxation in the US.`,
            `Total tax burden as a percentage of US economic activity (GDP) is around 27-32%, which is moderate among developed countries. Many European countries are 40-50%. Some smaller economies are lower. None of these comparisons by themselves prove anything about whether the rate is "right." That's where the political debate begins.`,
          ],
          image: `/voyager-assets/money-business/l12-s1-taxes.webp`,
          imageCaption: `Federal, state, local. Multiple types. About 27-32% of US GDP.`,
          vocab: [
            {
              word: `tax revenue`,
              definition: `The total money a government receives from taxes. Determines what the government can spend (along with borrowing). Different from total economic activity, which is much larger.`,
              audioPrompt: `Tax revenue is the total money a government receives from taxes, {name}. It determines what the government can spend, along with what it borrows. The US federal government collects about $5 trillion in tax revenue annually as of 2026. State and local governments combined collect another $3-4 trillion. Tax revenue is different from GDP, which is the total value of all economic activity. The US has roughly $27 trillion in GDP and about $9 trillion in total government revenue, which is about 30% of GDP. This ratio puts the US in the moderate range among developed countries.`,
            },
            {
              word: `payroll tax`,
              definition: `A tax taken directly from wages to fund specific programs. In the US, payroll taxes fund Social Security and Medicare and total 7.65% paid by the employee plus 7.65% paid by the employer.`,
              audioPrompt: `Payroll tax is a tax taken directly from wages to fund specific programs, {name}. In the US, payroll taxes fund Social Security and Medicare. The employee pays 6.2% for Social Security plus 1.45% for Medicare, totaling 7.65%. The employer matches that same 7.65%. Self-employed people pay the full 15.3% themselves. Together, payroll taxes make up about 36% of federal revenue, nearly as large as individual income tax. Unlike income tax, Social Security payroll tax only applies to earnings up to about $168,000 in 2026. Above that cap, only the 1.45% Medicare rate applies.`,
            },
            {
              word: `excise tax`,
              definition: `A tax on specific goods like gasoline, alcohol, and tobacco. Collected at the point of production or sale, often justified as discouraging harmful consumption or funding related infrastructure.`,
              audioPrompt: `An excise tax is a tax on specific goods like gasoline, alcohol, and tobacco, {name}. Unlike sales tax, which applies broadly, excise taxes target particular products. The federal gas tax funds highway construction. Tobacco and alcohol excise taxes partially offset health costs those products create. Excise taxes are collected at the point of production or sale, so consumers often don't see them as a separate line item. In the US, federal excise taxes make up about 2-3% of federal revenue. They're considered targeted taxes because they apply only to specific categories of goods rather than income or general spending.`,
            },
          ],
        },

        {
          id: `l12-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `What Tax Revenue Actually Funds`,
          paragraphs: [
            `What does the federal government actually spend tax revenue on? The biggest categories as of 2026, in approximate share of federal spending. Social Security: about 21% (retirement and disability payments to seniors and disabled people). Healthcare programs (Medicare, Medicaid, ACA subsidies): about 25% combined. Defense: about 13%. Interest on national debt: about 13% and rising fast. Income security programs (unemployment, food assistance, housing assistance): about 8%. Veterans benefits: about 4%. Education, transportation, science: each around 3-4%. Everything else (foreign aid, environmental protection, agriculture, etc.) makes up the remaining ~10%.`,
            `Several common misconceptions worth correcting. Foreign aid is about 1% of federal spending, not the 10-30% many surveyed Americans assume. Welfare in the traditional sense (cash assistance to non-working adults) is a tiny fraction of spending, much smaller than people think. Defense, despite being the largest single budget line for many years, is now significantly smaller than combined healthcare and retirement spending. The federal government in 2026 spends much more on healthcare and retirement programs for seniors than on anything else.`,
            `State and local taxes mostly fund different things. Public schools (the largest single use of state and local taxes in most places). Police and fire departments. Roads and infrastructure. Public health departments. Local courts. Trash collection. Public libraries. State universities. Each of these gets funded primarily by state and local rather than federal taxes, which is why the politics of these issues happens largely at the state level.`,
            `When people debate taxes, they're often actually debating what the government should do with the money, more than the tax rate itself. A person who supports more defense spending might support the same total tax revenue as a person who supports more education spending; they disagree about allocation, not just amount. This is one of the most underappreciated facts in tax policy debate.`,
          ],
          image: `/voyager-assets/money-business/l12-s2-funds.webp`,
          imageCaption: `Tax revenue mostly funds healthcare, retirement, defense, and interest on debt.`,
          vocab: [
            {
              word: `entitlement programs`,
              definition: `Government programs where people are legally entitled to benefits based on eligibility (age, income, etc.). Social Security and Medicare are the largest US entitlement programs. They're not "discretionary" spending Congress can easily cut.`,
              audioPrompt: `Entitlement programs are government programs where people are legally entitled to benefits based on eligibility, {name}. Social Security pays everyone who has paid into it long enough and reaches eligible age. Medicare provides health coverage to people 65 and older. SNAP (food assistance) goes to people meeting income criteria. Together, entitlement programs make up the majority of US federal spending. They are different from "discretionary" spending, which Congress can easily change each year. Changing entitlement programs requires legislative changes that are politically difficult, which is why these programs grow steadily even when budgets are tight.`,
            },
            {
              word: `discretionary spending`,
              definition: `Federal spending that Congress can increase or cut annually through the budget process. Covers defense, education, transportation, and most other programs. Different from entitlement spending, which is set by eligibility rules.`,
              audioPrompt: `Discretionary spending is federal spending that Congress can change each year through the budget process, {name}. It covers defense, education, transportation, scientific research, and many other programs. Congress allocates discretionary spending annually, meaning each program must compete for funding every budget cycle. About 30% of federal spending is discretionary. The other 70% is mandatory spending: entitlement programs and interest on debt that are set by law rather than annual votes. This distinction matters because when politicians debate cutting the budget, they're often only dealing with the 30% that's actually discretionary, not the entitlement programs that dominate spending.`,
            },
            {
              word: `national debt`,
              definition: `The total amount the federal government owes to creditors, accumulated by running deficits over many years. As of 2026, US national debt exceeds $35 trillion and requires about 13% of federal spending just to pay interest.`,
              audioPrompt: `National debt is the total amount the federal government owes to creditors, accumulated by running deficits over many years, {name}. A deficit happens when the government spends more than it collects in taxes in a single year. Each year's deficit adds to the total national debt. As of 2026, US national debt exceeds $35 trillion. Paying interest on that debt now consumes about 13% of federal spending and is rising fast. This interest cost is a real fiscal constraint: it crowds out money that could fund other programs. National debt is different from a household's debt in important ways, but the interest payments represent a genuine long-term burden on future budgets.`,
            },
          ],
        },

        {
          id: `l12-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `How Progressive Taxation Works`,
          paragraphs: [
            `The US federal income tax is progressive, meaning higher earners pay higher rates on income above certain thresholds. As of 2026, federal income tax brackets are roughly: 10% on first ~$11,500 of taxable income, 12% on next ~$35,000, 22% on next ~$54,000, 24% on next ~$96,000, 32% on next ~$54,000, 35% on next ~$235,000, and 37% on income above ~$485,000. These numbers shift slightly year to year for inflation.`,
            `Important: brackets are marginal, not total. A person making $100,000 doesn't pay 24% on all $100,000. They pay 10% on the first portion, 12% on the next, 22% on the next, and 24% only on the portion above the 22% threshold. Their effective tax rate (total tax divided by total income) is much lower than their marginal bracket. A $100K earner typically has an effective federal tax rate around 15-18%, not 24%. Most Americans don't understand this distinction, which leads to widespread confusion about how taxes actually work.`,
            `Payroll taxes (Social Security and Medicare) are different. Social Security tax is 6.2% on earnings up to about $168,000 (in 2026), with no tax above that. Medicare is 1.45% on all earnings. Together, payroll taxes are 7.65% paid by the employee plus 7.65% paid by the employer (or 15.3% paid entirely by self-employed people). These rates apply to most workers regardless of total income, which is why they're considered slightly regressive at high income levels (where the Social Security cap kicks in).`,
            `State income taxes vary widely. California's top rate is 13.3%. Florida, Texas, and several other states have no income tax. New York City has both state and city income tax that combined can exceed 14%. Where you live matters enormously for total tax burden. A high earner in NYC can pay 50%+ of marginal income in combined federal, state, and city taxes. The same earner in Florida pays around 35% (only federal).`,
          ],
          image: `/voyager-assets/money-business/l12-s3-progressive.webp`,
          imageCaption: `Progressive but marginal: most people pay less than their bracket suggests.`,
          vocab: [
            {
              word: `marginal tax rate`,
              definition: `The rate paid on the last dollar of income. If you're in the 24% bracket, your marginal rate is 24%, but only that portion of your income above the threshold is taxed at 24%. Different from effective tax rate.`,
              audioPrompt: `Marginal tax rate is the rate paid on the last dollar of income, {name}. If you're in the 24% federal bracket, your marginal rate is 24%. But only the portion of your income above the threshold is taxed at that rate. The portion below is taxed at lower rates. Effective tax rate is total tax divided by total income, which is lower than the marginal rate. A $100,000 earner's marginal federal rate might be 24%, but their effective federal rate is more like 15-18%. Most Americans confuse these two concepts, which leads to widespread misunderstanding of how progressive taxes actually work.`,
            },
            {
              word: `effective tax rate`,
              definition: `Total taxes paid divided by total income. Always lower than the marginal rate in a progressive system, because earlier income is taxed at lower bracket rates. The percentage you actually pay overall.`,
              audioPrompt: `Effective tax rate is total taxes paid divided by total income, {name}. In a progressive tax system, effective rate is always lower than the marginal rate. That's because lower portions of income are taxed at lower brackets before hitting the top rate. A person in the 24% bracket might have an effective federal rate of 15-18% because their first $11,500 was taxed at 10%, the next portion at 12%, and so on. The effective rate reflects what percentage of total income actually goes to taxes. Understanding effective rate versus marginal rate is one of the most important distinctions in basic tax literacy.`,
            },
            {
              word: `progressive tax`,
              definition: `A tax system where higher earners pay higher rates on income above certain thresholds. The US federal income tax is progressive. Contrasted with flat taxes (same rate for all) and regressive taxes (lower earners pay higher share).`,
              audioPrompt: `A progressive tax is a system where higher earners pay higher rates on income above certain thresholds, {name}. The US federal income tax is progressive: the first portion of income is taxed at 10%, the next at 12%, continuing up to 37% for income above about $485,000. The idea is that each additional dollar matters less to a wealthy person than to a lower-income person, so higher earners can contribute a larger share without the same burden. Payroll taxes are slightly regressive at high incomes because the Social Security cap means very high earners pay a smaller percentage of total income in Social Security tax than middle-income earners do.`,
            },
          ],
        },

        {
          id: `l12-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Three Serious Positions On Taxation`,
          paragraphs: [
            `Position 1: Government should tax substantially to fund public goods. This view, common among progressive economists and many European political traditions, holds that markets fail to provide certain goods adequately on their own. Education, healthcare, infrastructure, scientific research, environmental protection, basic income for elderly and disabled. The argument: a society that taxes 30-40% of GDP and uses it wisely can produce better total outcomes than a society at 20% with more poverty, worse health outcomes, less educated workforce, and crumbling infrastructure. Reference cases: Nordic countries (Sweden, Norway, Denmark) consistently rank high in measures of well-being despite (or because of) tax levels around 40-50% of GDP.`,
            `Position 2: Government should tax minimally to maximize freedom and growth. This view, common among free-market economists and conservative political traditions, holds that taxes distort economic decisions, reduce investment, and transfer money from productive private uses to wasteful government uses. The argument: lower taxes produce higher economic growth, more job creation, and more individual freedom. People can spend their own money better than the government can. Reference cases: some economists point to high-growth periods after major tax cuts (the 1980s under Reagan, certain countries with low tax rates like Singapore and Switzerland) as evidence.`,
            `Position 3: Government should tax progressively with focus on efficient use. This view, common among many mainstream economists and centrist political traditions, accepts that some level of taxation is necessary while focusing on tax structure (progressive vs flat, what's taxed) and spending efficiency (what works, what doesn't). The argument: the debate over total tax burden often misses the more important question of whether the system is well-designed. A 30% tax burden well-designed beats a 20% burden poorly designed. Different tax structures produce very different outcomes even at similar revenue levels. Tax efficiency matters more than tax level.`,
            `Each position has serious advocates and serious critics. The empirical evidence is mixed: cross-country comparisons show that some high-tax countries have excellent outcomes and some don't; some low-tax countries have excellent outcomes and some don't. The position you hold often reflects value judgments about freedom, fairness, and the role of government, not just empirical analysis. This is why tax debates are genuinely hard to resolve.`,
          ],
          image: `/voyager-assets/money-business/l12-s4-positions.webp`,
          imageCaption: `Three serious positions. Real evidence on multiple sides. Genuine value disagreements.`,
          vocab: [
            {
              word: `public goods`,
              definition: `Goods or services that are non-excludable (you can't easily prevent people from using them) and non-rivalrous (one person using them doesn't reduce others' access). Examples: clean air, national defense, basic research. Often underprovided by private markets.`,
              audioPrompt: `Public goods are goods or services that have two specific characteristics, {name}. First, they're non-excludable: you can't easily prevent people from using them. Second, they're non-rivalrous: one person using them doesn't reduce others' access. Clean air is a classic example. So is national defense, basic scientific research, and certain types of infrastructure. Public goods are often underprovided by private markets because companies can't easily charge users individually. This is one of the main economic arguments for government involvement: providing public goods that private markets can't efficiently provide. Different political views debate which specific goods qualify and how much government should provide.`,
            },
            {
              word: `free market`,
              definition: `An economic system where prices and production are determined by supply and demand with minimal government intervention. The free-market position on taxation argues lower taxes maximize growth and individual freedom.`,
              audioPrompt: `Free market refers to an economic system where prices and production are determined by supply and demand with minimal government intervention, {name}. The free-market position on taxation holds that taxes distort economic decisions and transfer money from productive private uses to wasteful government uses. Lower taxes, in this view, produce higher growth, more jobs, and more individual freedom. People can spend their own money more efficiently than governments can. Singapore is often cited as a reference case: a 13% tax burden with excellent infrastructure and high GDP per capita. Free-market advocates point to periods of rapid economic growth following major tax cuts as supporting evidence for this position.`,
            },
            {
              word: `institutional quality`,
              definition: `How well a country's government and legal systems function: rule of law, enforcement of contracts, low corruption, efficient public services. Research finds institutional quality often predicts outcomes better than tax level alone.`,
              audioPrompt: `Institutional quality refers to how well a country's government and legal systems function, {name}. It includes rule of law, enforcement of contracts, low corruption, and efficient public services. Cross-country economic research consistently finds no simple relationship between tax level and growth or well-being. Some high-tax countries perform excellently; some low-tax countries perform poorly. Institutional quality often explains the difference more reliably than tax level alone. A government that taxes 40% but spends it efficiently on well-designed programs can produce better outcomes than one that taxes 25% but wastes or misallocates spending. This finding complicates both the high-tax and low-tax arguments in the taxation debate.`,
            },
          ],
        },

        {
          id: `l12-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Before You Build Your Argument`,
          paragraphs: [
            `Tax policy is one of the genuinely contested questions in economics. Reasonable people who agree on most empirical facts can disagree about taxation because the disagreements are partly about values: how much do you weight freedom vs equality? How much do you trust government to spend well? How important is economic growth vs ensuring everyone has basic needs met?`,
            `As you build your argument, notice the difference between empirical claims (what actually happens under different tax systems) and value claims (what should we prioritize). Both kinds of claims are real and important, but they're evaluated differently. Empirical claims can be checked against data. Value claims have to be reasoned through and ultimately depend on what you think matters most.`,
            `One last framing: you don't have to commit forever to whatever position you build today. Many thoughtful people change their views on tax policy multiple times over their lives as they encounter new evidence and new life situations. A college student worried about student debt might support more government spending. The same person at 40 paying significant taxes might prefer more efficiency or lower rates. Both views can be defensible at different points in life. The skill is to be able to articulate any of the three positions thoughtfully, regardless of which one you currently find most persuasive.`,
          ],
          image: `/voyager-assets/money-business/l12-s5-before.webp`,
          imageCaption: `Tax policy mixes empirical and value claims. Both matter. Skill required.`,
          vocab: [
            {
              word: `policy tradeoffs`,
              definition: `The reality that any policy choice involves giving up some benefit to gain another. Tax policies trade off between revenue, growth, equity, efficiency, and individual freedom. No policy maximizes all goals.`,
              audioPrompt: `Policy tradeoffs are the reality that any policy choice involves giving up some benefit to gain another, {name}. Tax policies trade off between revenue (how much money the government has), growth (how much the economy expands), equity (how fairly burden is shared), efficiency (how well taxes are collected and spent), and individual freedom (how much control people have over their own resources). No tax policy maximizes all of these at once. Smart tax policy is usually about thoughtful tradeoffs, not finding the policy that does everything well. People who oversimplify tax policy usually miss this. Recognizing the tradeoffs is the foundation of mature policy thinking.`,
            },
            {
              word: `empirical claims`,
              definition: `Statements about what actually happens that can be checked against evidence and data. In tax policy, empirical claims include things like "higher taxes reduce investment" — claims that data can test, even if imperfectly.`,
              audioPrompt: `Empirical claims are statements about what actually happens that can be checked against evidence and data, {name}. In tax policy debates, empirical claims include statements like "higher tax rates reduce economic growth" or "Nordic countries achieve better health outcomes at higher tax levels." These can be tested by looking at data, comparing countries, or studying history. Empirical claims are different from value claims, which are about what should be prioritized. Both kinds of claims matter in tax debates. But they're evaluated differently: empirical claims need data and methodology; value claims require reasoning about priorities and principles. Knowing which type of claim you're making or hearing is essential for clear thinking.`,
            },
            {
              word: `value claims`,
              definition: `Statements about what should be prioritized or what matters most. In tax policy, value claims include beliefs about freedom vs equality, individual vs collective responsibility. They can't be resolved by data alone.`,
              audioPrompt: `Value claims are statements about what should be prioritized or what matters most, {name}. In tax policy, value claims include beliefs like "individual freedom matters more than collective provision" or "everyone deserves equal access to healthcare regardless of ability to pay." These aren't wrong or right in an empirical sense; they reflect what a person thinks matters most. Even if two people agreed on all the empirical facts about tax outcomes, they might still reach different conclusions about the right tax level because of value differences. This is why tax debates are genuinely hard to resolve. Recognizing the difference between empirical and value claims helps you have more productive conversations about tax policy and politics generally.`,
            },
          ],
        },

        // ───── ARGUMENT BUILDER ───────────────────────────────────────────────
        {
          id: `l12-argument-builder`,
          type: `argument-builder`,
          headline: `What Should Taxation Look Like?`,
          intro: `Pick one of three positions. Build your case with 3-4 pieces of evidence. Then respond to the strongest counterargument. Real economists and citizens disagree on this in serious ways.`,
          positions: [
            {
              id: `substantial-taxation`,
              label: `Substantial taxation for public goods`,
              summary: `Markets underprovide certain goods: education, healthcare, infrastructure, basic research, environmental protection, support for elderly and disabled. A society at 30-40% tax burden can produce better total outcomes than one at 20%, with less poverty, better health, more educated workforce. Nordic countries demonstrate this works. The right level of government is somewhat higher than current US spending.`,
            },
            {
              id: `minimal-taxation`,
              label: `Minimal taxation for freedom and growth`,
              summary: `Taxes distort decisions and transfer money from productive private uses to wasteful government uses. Lower taxes produce higher growth, more jobs, more individual freedom. People spend their own money better than government does. The right level of government is significantly lower than current US spending. Reference: high-growth periods often follow tax cuts; low-tax economies like Singapore prosper.`,
            },
            {
              id: `efficient-progressive`,
              label: `Progressive taxation with focus on efficient use`,
              summary: `The total tax burden debate often misses the more important question: is the system well-designed? Tax structure (progressive vs flat, what's taxed) and spending efficiency (what works) matter more than total revenue. A well-designed 30% system can beat a poorly-designed 20% or 40% system. Focus on tax efficiency, eliminate loopholes, design progressivity carefully, and rigorously evaluate whether spending produces value.`,
            },
          ],
          evidence: [
            {
              id: `e1`,
              text: `Nordic countries (Sweden, Norway, Denmark, Finland) have tax burdens around 40-50% of GDP and consistently rank in the top 10 globally on life expectancy, education, happiness, and innovation. Multiple studies confirm these aren't merely cultural; institutional design matters.`,
              source: `OECD data, UN reports, multiple longitudinal studies`,
            },
            {
              id: `e2`,
              text: `Singapore has a tax burden around 13% of GDP, very low compared to most developed countries. It has high GDP per capita and excellent infrastructure, suggesting low taxes don't necessarily mean poor services if government is highly efficient.`,
              source: `Singapore government data, OECD comparisons`,
            },
            {
              id: `e3`,
              text: `Cross-country empirical research consistently finds no simple relationship between tax level and economic growth. Some high-tax countries grow well; some low-tax countries grow poorly; and vice versa. Institution quality often matters more than tax level.`,
              source: `Economist surveys, multiple peer-reviewed economic studies`,
            },
            {
              id: `e4`,
              text: `Foreign aid is about 1% of US federal spending despite many Americans believing it's 10-30%. Defense is about 13%. Social Security is about 21%. Healthcare programs combined are about 25%. The real federal budget structure differs significantly from public perception.`,
              source: `Office of Management and Budget data`,
            },
            {
              id: `e5`,
              text: `Tax expenditures (deductions, credits, loopholes) cost the federal government about $1.5 trillion annually in foregone revenue. Many benefit higher earners. Reform of tax expenditures alone could raise substantial revenue without changing rates.`,
              source: `Joint Committee on Taxation, Congressional Budget Office`,
            },
            {
              id: `e6`,
              text: `Federal income tax progressivity has changed dramatically over time. Top marginal rate was 91% in the 1950s, 70% in the 1970s, 28% in 1988, and 37% in 2026. Different eras have different verdicts on whether high or low rates worked better.`,
              source: `Historical tax records`,
            },
            {
              id: `e7`,
              text: `US federal interest payments on debt now exceed defense spending and are growing rapidly. This is a real fiscal constraint regardless of one's tax preferences: either revenue must rise, spending must fall, or debt must continue growing.`,
              source: `Congressional Budget Office projections`,
            },
          ],
          counterargument: {
            id: `counter`,
            text: `"You picked your position. Here's the strongest objection. All three positions claim to identify the best tax level. But the empirical evidence doesn't clearly favor any one of them: high-tax countries can do well or poorly, low-tax countries can do well or poorly, the variables that matter often have more to do with culture, geography, and institutional quality than tax level. Your position rests on values about what the government should do, which are legitimate but not provable. Why does your value framework deserve to set policy for others who disagree with it?"`,
            promptInstruction: `In 3-4 sentences, respond. How do you justify a tax policy when you can't prove your value framework is the only legitimate one?`,
          },
          reflectionPrompt: `Looking at the two positions you didn't choose, which was hardest to leave behind? Why?`,
        },

        {
          id: `l12-quiz`,
          type: `quiz`,
          headline: `Check your understanding`,
          questions: [
            {
              id: `q1`,
              type: `multiple-choice`,
              question: `What are the major federal tax types in the US?`,
              options: [
                `Only income tax`,
                `Individual income tax (50%), payroll tax for Social Security/Medicare (36%), corporate income tax (9%), plus smaller categories`,
                `Sales tax only`,
                `Property tax`,
              ],
              correctIndex: 1,
              explanation: `Payroll tax is much larger than most people realize, almost as much as income tax. It's the dedicated funding for Social Security and Medicare. Corporate income tax is a relatively small share of federal revenue.`,
            },
            {
              id: `q2`,
              type: `multiple-choice`,
              question: `What does federal tax revenue mostly fund?`,
              options: [
                `Foreign aid`,
                `Healthcare programs (25%), Social Security (21%), defense (13%), interest on debt (13% and rising), income security (8%), veterans (4%), with smaller amounts for everything else`,
                `Defense only`,
                `Welfare for non-workers`,
              ],
              correctIndex: 1,
              explanation: `Healthcare and retirement programs are now far larger than defense. Foreign aid is about 1% despite many Americans assuming it's 10-30%. Interest on debt is growing fast and now exceeds defense.`,
            },
            {
              id: `q3`,
              type: `multiple-choice`,
              question: `What's the difference between marginal and effective tax rates?`,
              options: [
                `They're the same`,
                `Marginal rate is what you pay on your LAST dollar of income (the bracket); effective rate is total tax divided by total income, which is lower because of progressive bracket structure`,
                `Effective is illegal`,
                `Marginal is the average`,
              ],
              correctIndex: 1,
              explanation: `Most Americans confuse these. A person in the 24% bracket has marginal rate 24% but effective rate ~15-18% because earlier income is taxed at lower rates. Knowing this distinction is fundamental.`,
            },
            {
              id: `q4`,
              type: `multiple-choice`,
              question: `What are payroll taxes?`,
              options: [
                `Just income tax`,
                `Social Security (6.2%) and Medicare (1.45%) — 7.65% paid by the employee plus 7.65% by the employer (or 15.3% paid entirely by self-employed people); funds Social Security and Medicare specifically`,
                `State taxes`,
                `Sales taxes`,
              ],
              correctIndex: 1,
              explanation: `Payroll taxes are dedicated funding for Social Security and Medicare. Higher earners hit a Social Security cap (~$168K in 2026); above that, only Medicare's 1.45% applies. This makes payroll taxes mildly regressive at high incomes.`,
            },
            {
              id: `q5`,
              type: `multiple-choice`,
              question: `What does Position 1 (substantial taxation) argue?`,
              options: [
                `Tax everything at 100%`,
                `Markets underprovide certain public goods; a society at 30-40% tax burden using money wisely can produce better total outcomes (less poverty, better health, more educated workforce) than a 20% burden; Nordic countries demonstrate this`,
                `Eliminate all taxes`,
                `Tax only the rich`,
              ],
              correctIndex: 1,
              explanation: `The substantial-taxation position points to real evidence from Nordic countries and other relatively high-tax developed economies that consistently rank high on well-being measures. The argument isn't that any taxation works; it's that thoughtful higher taxation can produce better outcomes.`,
            },
            {
              id: `q6`,
              type: `multiple-choice`,
              question: `What does Position 2 (minimal taxation) argue?`,
              options: [
                `Government should fund everything`,
                `Taxes distort decisions and transfer money to wasteful uses; lower taxes produce more growth, jobs, and individual freedom; people spend their own money better; Singapore is one example of low-tax success`,
                `Tax only food`,
                `Government is always best`,
              ],
              correctIndex: 1,
              explanation: `The minimal-taxation position has serious advocates and points to real evidence about economic distortions and government inefficiency. Singapore at 13% tax burden has excellent outcomes, supporting the view that low taxes can work with efficient government.`,
            },
            {
              id: `q7`,
              type: `multiple-choice`,
              question: `What's "tax expenditures"?`,
              options: [
                `Government spending`,
                `Deductions, credits, and loopholes in the tax code that reduce government revenue; cost the federal government about $1.5 trillion annually; many benefit higher earners; reforming tax expenditures could raise revenue without changing rates`,
                `Foreign aid`,
                `Military spending`,
              ],
              correctIndex: 1,
              explanation: `Tax expenditures are huge and often invisible. Mortgage interest deduction, charitable deductions, employer-provided health insurance exclusion, retirement contribution deductions. Together they cost more than discretionary spending in many years.`,
            },
            {
              id: `q8`,
              type: `multiple-choice`,
              question: `What does the cross-country economic research find about tax level and growth?`,
              options: [
                `High taxes always cause slow growth`,
                `Low taxes always cause fast growth`,
                `No simple relationship: some high-tax countries grow well, some grow poorly; some low-tax countries grow well, some poorly; institutional quality and how taxes are used often matter more than tax level alone`,
                `Taxes don't affect economies`,
              ],
              correctIndex: 2,
              explanation: `This is one of the most important findings to know in tax policy debate. The simple "low taxes = growth" or "high taxes = welfare" stories are not supported by the data. The relationship is much more complicated.`,
            },
            {
              id: `q9`,
              type: `true-false`,
              question: `True or false: Tax policy debates are mostly empirical disagreements; if we just had better data, the right tax level would be obvious.`,
              correctAnswer: false,
              explanation: `False. Tax policy mixes empirical claims (what happens at different tax levels) with value claims (how much do we weight freedom vs equality, growth vs security). Even with perfect data, value disagreements would remain. This is part of why the debate is genuinely hard.`,
            },
            {
              id: `q10`,
              type: `inference`,
              question: `A relative says "All my taxes go to welfare for people who don't work, that's why I'm against high taxes." Based on this lesson, what should you notice?`,
              options: [
                `"That's a totally fair concern"`,
                `"Welfare for non-working adults is actually a tiny fraction of federal spending. The biggest categories are healthcare (25%), Social Security (21%), defense (13%), and interest on debt (13%). If we want to discuss tax levels honestly, we should be working with accurate facts about what taxes actually fund. The framing 'welfare for non-workers' is widespread but factually wrong about what dollars go where."`,
                `"You're right, welfare is the problem"`,
                `"Stop complaining and pay"`,
              ],
              correctIndex: 1,
              explanation: `Real tax literacy applied to a real conversation. The misconception about where tax money goes is one of the most common in US political discussion. Correcting it without being preachy is a real skill.`,
            },
          ],
        },

        {
          id: `l12-reflection`,
          type: `reflection`,
          headline: `Sit with this`,
          intro: `Pick the prompt that pulls at you most. Your answer is saved.`,
          prompts: [
            { id: `reflect-cognitive`, category: `Cognitive`, prompt: `Before this lesson, did you know what taxes actually funded? Has your view shifted?` },
            { id: `reflect-meta`, category: `Metacognitive`, prompt: `Which of the three positions matched your family's views growing up? Did building an argument require you to engage with positions you wouldn't have chosen?` },
            { id: `reflect-identity`, category: `Identity`, prompt: `If you become someone who can articulate any tax position thoughtfully regardless of which you currently hold, what does that change about how you engage in political conversations?` },
            { id: `reflect-application`, category: `Application`, prompt: `Listen for tax talk in news or family conversations this week. Which position are people actually taking? Are they using accurate facts about what taxes fund?` },
            { id: `reflect-critical`, category: `Critical`, prompt: `Is there a position on taxation the three serious views miss? What would a more radical position look like?` },
            { id: `reflect-personal`, category: `Personal investigation`, prompt: `Look at your own family's situation. What would happen to your life if taxes were significantly higher? Significantly lower? Be specific.` },
          ],
        },

        {
          id: `l12-real-world`,
          type: `real-world`,
          headline: `Take it into your life`,
          guideContext: `Tax thinking at 12 is unusual. Two paths to apply it.`,
          familyActivity: {
            title: `The Family Tax Conversation`,
            duration: `40 minutes`,
            description: `At dinner, share what you learned about what taxes actually fund. Ask each adult: what percentage of federal spending do they think goes to foreign aid? To welfare? To defense? To Social Security? Most will be way off on at least some of these. Then share the actual numbers. Discuss as a family: what tax level seems right? Do family members agree or disagree? Are the disagreements about empirical facts or about values? This conversation often reveals that family members have stronger opinions on taxes than facts to back them up. The framework lets you have the conversation without it becoming partisan.`,
          },
          projectOption: {
            title: `Build Your Own Federal Budget, 2 weeks (optional)`,
            duration: `2 weeks, ~20 minutes per day`,
            description: `Using publicly available federal budget data, design your own version of how federal tax revenue should be spent. Allocate $5 trillion (roughly 2026 federal revenue) across categories. Defense? Healthcare? Education? Infrastructure? Research? Debt payments? Be honest about tradeoffs: if you increase one, you have to decrease another. After 14 days, write 1,000 words explaining your choices. Then compare to actual federal spending. Where did you differ most? What did you learn about your own values? This is real applied civic literacy. Most adults have never tried it.`,
            offerToParent: `Parent: opt your kid into this project from the dashboard. Real civic literacy at 12 is unusual.`,
          },
          identityQuestion: `If you understand taxes more clearly than most adults, what does that change about your engagement with politics over the next 50 years?`,
        },

        {
          id: `l12-identity-hook`,
          type: `identity-hook`,
          headline: `Who is this lesson making you?`,
          prompt: `One sentence. No wrong answer.`,
          placeholder: `Someone who...`,
          examples: [
            `Someone who knows the actual numbers when discussing taxes.`,
            `A person who can articulate three serious positions on taxation regardless of which I personally prefer.`,
            `Someone willing to update tax views when evidence and circumstances change.`,
          ],
          saveKey: `identity_responses_mb_11_12_12`,
        },

        {
          id: `l12-celebration`,
          type: `celebration`,
          guideText: `{name}. After this lesson you can articulate what taxes actually fund, distinguish marginal from effective tax rates, understand payroll taxes and tax expenditures, identify three serious positions on tax policy, and recognize the difference between empirical and value claims in tax debate. Most adults have strong opinions about taxes without the facts behind them. You have more facts than most. Next time we go into one of the most dangerous topics in modern finance: get-rich-quick schemes. MLMs, day trading, crypto pumps, "passive income" courses. The pattern is consistent. Source Evaluation format. See you there. — Ace`,
          badge: `tax-thinker`,
          badgeName: `Tax Thinker`,
          xpEarned: 75,
          competencies: [
            `Can articulate what federal taxes actually fund (healthcare, retirement, defense, debt service)`,
            `Distinguishes marginal from effective tax rates`,
            `Knows the three major positions on tax policy`,
            `Recognizes empirical claims vs value claims in tax debates`,
            `Has built an argument grounded in real fiscal data`,
          ],
          nextLessonPreview: {
            title: `Lesson 13: Get Rich Quick — Why It Almost Never Works`,
            hook: `MLMs, day trading, crypto pumps, "passive income" courses. Different products, same patterns. Three sources, your evaluation.`,
          },
        },
      ],
    },
  ],
};

export default MONEYBUSINESS_VOYAGER_L12;

if (import.meta.env?.DEV) {
  const l = MONEYBUSINESS_VOYAGER_L12.lessons[0];
  const mags = l.screens.filter((s) => s.type === `magazine`).length;
  const argEvi = l.screens.find((s) => s.type === `argument-builder`)?.evidence?.length ?? 0;
  const quiz = l.screens.find((s) => s.type === `quiz`)?.questions?.length ?? 0;
  const reflect = l.screens.find((s) => s.type === `reflection`)?.prompts?.length ?? 0;
  console.log(
    `[LESSON-MB-VOYAGER-L12 ${VERSION}] "${l.title}" — ${mags} magazine, argument-builder w/ ${argEvi} evidence, ${quiz} quiz, ${reflect} reflection`
  );
}
