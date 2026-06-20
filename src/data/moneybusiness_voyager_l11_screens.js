// ─────────────────────────────────────────────────────────────────────────────
// MONEY & BUSINESS VOYAGER  |  L11 — Salary, Wage, Tips: How People Actually Earn
// Age band : voyagers (11-12)   Guide: ace (Eagle)
// Standards: Coreverse Original — Career Economics, Income Structures
// CALIBRATED: Voyager spec v1.1 (May 2026)
// Interaction format: CASE STUDY (three career paths examined over time)
// ─────────────────────────────────────────────────────────────────────────────

const VERSION = "voyager-mb-l11-v1";

const MONEYBUSINESS_VOYAGER_L11 = {
  ageBand: `voyagers`,
  subjectId: `money-business`,
  guide: `ace`,

  lessons: [
    {
      id: `mb-11-12-11`,
      title: `Salary, Wage, Tips: How People Actually Earn`,
      duration: 35,
      xpReward: 75,
      badge: `income-architect`,
      badgeName: `Income Architect`,

      screens: [
        {
          id: `l11-welcome`,
          type: `welcome`,
          guideText: `{name}, salary, hourly wage, tips, commission, equity — five different ways people earn money with very different implications for stability, upside, and lifestyle. And then there's the gap between gross and net pay. This lesson covers the real math of earning, including the career decisions that compound over decades.`,
          headline: `Salary, Wage, Tips`,
          subtitle: `How people actually earn — and why the headline number lies.`,
          visual: `/voyager-assets/money-business/l11-welcome.webp`,
        },

        {
          id: `l11-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `The Five Ways People Earn`,
          paragraphs: [
            `Hourly wage. You get paid a specific amount per hour worked. Standard hourly jobs include retail, restaurants, manufacturing, construction, healthcare technicians, and many service roles. As of 2026, US median hourly wage is around $26/hour. Federal minimum wage is $7.25/hour, though many states have set higher minimums ($15-$20). Pay is directly tied to hours: more hours, more money. Less hours (sickness, slow business, layoffs), less money. Predictable but capped.`,
            `Salary. You get paid a fixed amount per year regardless of exact hours worked. Professional jobs (engineers, accountants, managers, teachers, marketers) are typically salaried. As of 2026, US median household income is around $80,000. Many professional jobs pay $50,000-$150,000. Some specialized roles (medicine, law, tech) pay $200,000+. Salaried work has more stability than hourly but often comes with expectations of working beyond 40 hours when needed.`,
            `Tips and commission. Some jobs pay partly based on what customers tip or what you sell. Servers in many US states earn $2.13/hour base plus tips. Real estate agents earn commission (typically 2-3% of home sale prices). Car salespeople, financial advisors, and many salespeople earn commission. High variability: a great server in a busy restaurant might earn $40-60/hour with tips. A struggling one in a slow location might earn $15. Income depends heavily on circumstances you don't fully control.`,
            `Self-employment. Freelancers, consultants, contractors, small business owners. You set your own rates, work for multiple clients, and pay your own taxes. As of 2026, about 16 million Americans are self-employed full-time, plus tens of millions more part-time. Income highly variable, no benefits unless you provide them yourself, self-employment tax (15.3% on top of regular income tax) on your earnings.`,
            `Equity and ownership. You own part of a business or asset that produces income or appreciates. Founders, executives, partners, investors. Equity can be worth nothing for years and then suddenly worth millions (or vice versa). The highest-return income type for those who succeed, but with enormous variability and often years of low or no income while building.`,
          ],
          image: `/voyager-assets/money-business/l11-s1-types.webp`,
          imageCaption: `Five income types. Different math. Different lives.`,
          vocab: [
            {
              word: `compensation`,
              definition: `The total value of what someone receives for their work, including base salary or wages, plus benefits (health insurance, retirement contributions, paid time off), bonuses, and equity. "Total compensation" is usually much larger than headline salary.`,
              audioPrompt: `Compensation is the total value of what someone receives for their work, {name}. It includes base salary or wages, but also benefits like health insurance and retirement contributions, plus bonuses and any equity. Total compensation is usually much larger than the headline salary number. A $100,000 salary at a company with good benefits might be worth $130,000-150,000 in total compensation when you include health insurance value (often $15-25,000), 401(k) match ($3-6,000), paid time off, and other benefits. When evaluating job offers, always look at total compensation, not just salary.`,
            },
            {
              word: `hourly wage`,
              definition: `Pay based on a specific amount per hour worked. Pay is directly tied to hours: more hours, more money; fewer hours, less money. Predictable but capped. Common in retail, restaurants, manufacturing, and service roles.`,
              audioPrompt: `An hourly wage is pay based on a specific amount per hour worked, {name}. As of 2026, the US median hourly wage is around $26 per hour. Federal minimum wage is $7.25, though many states have set higher minimums of $15 to $20. Hourly work is predictable in structure: you know what each hour is worth. But it is also capped: income is directly limited by hours available. When business is slow, hours get cut and income falls. When you're sick, you don't get paid. The predictability and the ceiling are two sides of the same coin. Many people start with hourly work and transition to salary or self-employment as their careers develop.`,
            },
            {
              word: `equity`,
              definition: `Ownership in a business or asset. Equity can produce income through dividends or appreciate in value over time. The highest-variance income type: often worth nothing for years, then potentially worth millions for successful founders or early employees.`,
              audioPrompt: `Equity is ownership in a business or asset, {name}. It is the fifth income type, alongside hourly, salary, tips and commission, and self-employment. Equity can produce income through dividends or appreciate in value over time. For founders, executives, and early employees in growing companies, equity can eventually be worth far more than any salary. Tech employees at successful companies have famously become millionaires through stock options. The tradeoff is that equity is the highest-variance income type: it is often worth nothing for years and can fail entirely. But for those who succeed, equity produces the kind of wealth that salary and wages rarely match over a lifetime.`,
            },
          ],
        },

        {
          id: `l11-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Gross vs Net: What You Actually Take Home`,
          paragraphs: [
            `Your "salary" is gross income. What you actually receive in your bank account is net income. The difference is significant. From a $80,000 salary in 2026, typical deductions: federal income tax (about 12-15% effective rate, varies by state and circumstances), state income tax (0-13% depending on state), Social Security tax (6.2%), Medicare tax (1.45%), health insurance premiums (often $2,000-6,000/year for employee portion), retirement contributions if elected (6-10% common), and possibly other deductions.`,
            `For an $80,000 gross salary in a moderate-tax state, taking 6% retirement and modest health insurance, take-home might be around $55,000-$60,000. About 25-30% of gross income disappears before it reaches you. This isn't unique to the US; every developed country has significant deductions. The specific amounts differ but the gap between gross and net is universal.`,
            `For self-employed people, the math is harder. You don't have an employer paying half your Social Security and Medicare. You pay the full 15.3% yourself (called self-employment tax). You also don't have an employer providing health insurance. A self-employed person earning $80,000 might end up with less net income than a salaried employee at $70,000 because of these differences.`,
            `For people earning tips and commission, income is highly irregular. Some months are great, some are slow. Smart tip-earners save 25-30% of every check during good times to cover the slow times. People who don't do this often face cash flow crises during slow periods.`,
          ],
          image: `/voyager-assets/money-business/l11-s2-grossnet.webp`,
          imageCaption: `Gross vs net: 25-30% disappears before it reaches your account.`,
          vocab: [
            {
              word: `gross income`,
              definition: `The total income before any deductions for taxes, insurance, retirement, etc. The headline number on your salary offer. Almost always significantly higher than what you actually receive.`,
              audioPrompt: `Gross income is the total income before any deductions, {name}. The headline number on your salary offer. If a job offers $80,000, that's gross. What you actually receive after taxes, health insurance, and retirement contributions is net income, usually 25-30% lower. Many people first encountering their paycheck are shocked at the gap. Knowing about the gap in advance helps you budget accurately and evaluate job offers more honestly. Always think in terms of net income when comparing financial impact of different jobs or careers.`,
            },
            {
              word: `self-employment tax`,
              definition: `The 15.3% tax on self-employment income that covers Social Security and Medicare. Unlike employees who split this with employers, self-employed people pay the full amount themselves, significantly reducing take-home income.`,
              audioPrompt: `Self-employment tax is the 15.3 percent tax on self-employment income that covers Social Security and Medicare, {name}. Regular employees pay 7.65 percent through payroll withholding while their employer pays the other 7.65 percent. Self-employed people pay the full 15.3 percent themselves because they are effectively both the employee and the employer. This significantly affects the math of self-employment. A freelancer earning $80,000 gross pays about $12,000 more in self-employment tax than a salaried employee earning the same amount. This is why self-employed people should always set aside 25 to 30 percent of every paycheck to cover taxes, including self-employment tax, rather than spending freely as the money arrives.`,
            },
            {
              word: `net income`,
              definition: `The amount you actually receive after all deductions including taxes, health insurance, and retirement contributions. Typically 25-30% lower than gross income. The real number to use when budgeting.`,
              audioPrompt: `Net income is the amount you actually receive after all deductions, {name}. Taxes, health insurance premiums, retirement contributions, and other withholdings all come out of your gross income before the rest reaches your bank account. For an $80,000 salary in a moderate-tax state with typical benefits contributions, take-home net income might be around $55,000 to $60,000. That is roughly 25 to 30 percent less than the headline number. Net income is the real number to use when budgeting and evaluating your financial situation. Many people budget based on gross and then wonder why they are consistently short. Always plan with net income.`,
            },
          ],
        },

        {
          id: `l11-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Career Paths And Their Math`,
          paragraphs: [
            `Different career paths produce dramatically different lifetime earnings. Bureau of Labor Statistics tracks median earnings by occupation. As of 2026, lifetime earnings vary from about $1.2 million (median high school graduate) to $2.5 million (median bachelor's degree) to $3-5 million for higher-earning professions like engineering, law, and medicine. These are medians; individual variation is large.`,
            `Three career path examples. Path A: trade work (electrician, plumber, HVAC technician). Median pay around $60-80K/year. Often requires 4 years of apprenticeship (paid) instead of college (paid for). Strong job demand, hard to outsource, physically demanding, often involves running your own business eventually with higher income potential.`,
            `Path B: corporate professional (accounting, marketing, management). Median pay around $70-120K depending on specialty and experience. Requires college degree (typically with significant student loans). More predictable career progression, more stable income, more office-based work. Higher ceiling for top performers but very competitive.`,
            `Path C: high-skill specialized (doctor, lawyer, software engineer, financial analyst). Median pay $100-300K+. Requires significant education (medicine: 11+ years post-high-school; law: 7 years; tech: bachelor's degree or self-taught). Higher income but longer training period and often higher costs. Tech specifically has wide variance: median software engineer around $130K, top earners at major companies can make $500K+ with equity.`,
            `What's important: none of these is "better" than the others. Each fits different people. A skilled electrician at 30 might be debt-free with a thriving business while a freshly graduated lawyer is just starting to earn after years of school debt. The path that fits your interests, abilities, and life goals usually beats the path that pays more on paper.`,
          ],
          image: `/voyager-assets/money-business/l11-s3-paths.webp`,
          imageCaption: `Three career paths, dramatically different math, none objectively best.`,
          vocab: [
            {
              word: `lifetime earnings`,
              definition: `The total income a person earns across their entire career. Differs dramatically by education level, occupation, and choices over decades. The Bureau of Labor Statistics tracks median lifetime earnings by occupation and education.`,
              audioPrompt: `Lifetime earnings is the total income a person earns across their entire career, {name}. It differs dramatically by education level, occupation, and choices. Median high school graduate: about $1.2 million across a career. Median bachelor's degree: about $2.5 million. Higher-earning professions like engineering, law, and medicine: $3-5 million. These are medians, individual variation is large. Lifetime earnings is a more useful number than annual salary for comparing careers, because it accounts for years of training, career progression, and total time spent earning at different levels.`,
            },
            {
              word: `Bureau of Labor Statistics`,
              definition: `BLS. The US federal agency that tracks employment, wages, and career data. Publishes median earnings by occupation and education. The most reliable source for comparing career paths and income levels.`,
              audioPrompt: `The Bureau of Labor Statistics, called the BLS, is the US federal agency that tracks employment, wages, and career data, {name}. It publishes median earnings by occupation and education level, making it the most reliable free source for comparing career paths and income levels. The BLS Occupational Outlook Handbook gives detailed information on hundreds of occupations: typical pay, required education, job outlook, and what the work involves. Using BLS data rather than anecdotes or exaggerated internet claims gives you a grounded picture of what various careers actually pay and require. It is free at bls.gov and should be your starting point for any serious career research.`,
            },
            {
              word: `apprenticeship`,
              definition: `A structured training program where you earn while learning a trade skill. Typically 4 years, paid throughout. An alternative path to high-earning trade careers without college debt.`,
              audioPrompt: `An apprenticeship is a structured training program where you earn while learning a trade skill, {name}. Electricians, plumbers, HVAC technicians, carpenters, and many other trades train through apprenticeships typically lasting 4 years. You work and earn income throughout while learning under experienced tradespeople. Unlike college, you accumulate no tuition debt. You often earn $40,000 to $55,000 during the apprenticeship years and far more after qualifying. A skilled electrician who completes an apprenticeship can earn $60,000 to $80,000 per year, more if running their own business. Apprenticeships produce high-earning careers with strong job security and no student debt, a combination that is hard to match through many college paths.`,
            },
          ],
        },

        {
          id: `l11-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `The Big Career Decisions That Compound`,
          paragraphs: [
            `A few career decisions tend to compound enormously over time. Choosing a field that matches your interests and abilities: people who hate their work often underperform and switch careers, losing years of accumulated expertise. Choosing a field with strong demand: even mediocre performance in a high-demand field often pays more than excellence in a low-demand field. Picking a high-cost-of-living vs low-cost-of-living career: a $90K job in rural Tennessee provides more disposable income than a $140K job in San Francisco after housing.`,
            `Negotiating starting salary: research consistently finds that starting salary is one of the most important career decisions because future raises are often based on percentage of current salary. A 10% better starting salary compounds across raises over a career. Most people don't negotiate at all on their first job offer. Even modest negotiation often produces meaningful gains.`,
            `Switching jobs vs staying: BLS data shows that staying in the same job year after year often produces 1-3% annual raises. Switching jobs every 2-4 years often produces 10-20% jumps. Over a career, job-changers typically out-earn job-stayers by 30-50%, though there are tradeoffs in stability and relationships.`,
            `Building skills vs chasing titles: the engineer who deeply learns one technology stack for 10 years often out-earns the engineer who hops between companies for impressive-sounding titles without depth. Real skill commands real premium in the long run. Same applies in law, medicine, finance, trades, and most professions.`,
            `Geographic flexibility: people willing to move for opportunities often out-earn those who stay in one place. Tech salaries in Bay Area dwarf tech salaries in most other places. Surgeons can name their price in underserved rural areas. Even within the same field, geography shapes earnings dramatically.`,
          ],
          image: `/voyager-assets/money-business/l11-s4-decisions.webp`,
          imageCaption: `The career decisions that compound: skill depth, starting salary, switching, geography.`,
          vocab: [
            {
              word: `compensation negotiation`,
              definition: `The conversation in which employees and employers discuss pay before formal hiring or during reviews. Most workers don't negotiate. Those who do often gain 5-15% over what was first offered.`,
              audioPrompt: `Compensation negotiation is the conversation in which employees and employers discuss pay before formal hiring or during performance reviews, {name}. Most workers don't negotiate. Those who do often gain 5 to 15 percent over what was first offered. The expected pattern in most professional jobs is that companies open with a first offer expecting some negotiation. Workers who accept the first offer without question leave money on the table. The skill of negotiating compensation is one of the highest-return skills you can develop, because the gains compound across raises throughout your career. Most schools don't teach this. It's worth learning.`,
            },
            {
              word: `job-stayer penalty`,
              definition: `The career earnings gap between workers who stay in one job indefinitely versus those who switch jobs every 2-4 years. Job-switchers typically out-earn job-stayers by 30-50% over a career due to larger salary jumps at each transition.`,
              audioPrompt: `The job-stayer penalty is the career earnings gap between workers who stay in one job indefinitely versus those who switch every 2 to 4 years, {name}. Bureau of Labor Statistics data shows that staying in the same job year after year typically produces 1 to 3 percent annual raises. Switching jobs every 2 to 4 years typically produces 10 to 20 percent salary jumps each time. Over a career, job-switchers typically out-earn job-stayers by 30 to 50 percent. There are real tradeoffs: stability, deep expertise in one context, long-term relationships. But the financial pattern is consistent. Loyalty to one employer is not financially rewarded the way it once was.`,
            },
            {
              word: `geographic flexibility`,
              definition: `Willingness to relocate for career opportunities. People willing to move often significantly out-earn those who stay in one place, because salary levels vary dramatically by location within the same field.`,
              audioPrompt: `Geographic flexibility is willingness to relocate for career opportunities, {name}. It is one of the career decisions that compounds most significantly over time. Tech salaries in the San Francisco Bay Area are dramatically higher than tech salaries in most other US cities for the same work. Surgeons can command premium pay in underserved rural areas. A financial analyst in New York often earns 30 to 50 percent more than the same person in a smaller market. People willing to move for opportunities often out-earn those who stay in one location by very large margins over a career. The financial benefit of geographic flexibility must be weighed against quality of life, family, and personal preferences, but knowing the math helps you make the tradeoff consciously.`,
            },
          ],
        },

        {
          id: `l11-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Before You Walk Through The Case Study`,
          paragraphs: [
            `In the case study that follows, three 22-year-olds each start their careers in different ways. We'll trace their financial paths over 10 years. Each path has tradeoffs: one earns more upfront but has less stability, one is slower-starting but more durable, one is the highest variance with the biggest upside and downside.`,
            `As you walk through their decisions, notice what tends to compound. Skill depth tends to compound. Starting salary tends to compound. Geographic positioning tends to compound. Decisions that look small at 22 often produce dramatically different outcomes by 30. This isn't a guarantee for any individual; many things happen along any career path. But the patterns are reliable enough to be worth thinking about.`,
            `One framing: at 12, you don't pick your career. But you do start building the skills, habits, and curiosities that shape your future career options. Curiosity about how things work tends to lead toward STEM careers. Comfort with language and reading tends to lead toward writing-heavy or analytical careers. Comfort with physical work tends to lead toward trades. Comfort with people tends to lead toward sales, leadership, or service. Knowing your tendencies now doesn't lock you in. It just gives you better information for future decisions.`,
          ],
          image: `/voyager-assets/money-business/l11-s5-before.webp`,
          imageCaption: `At 22, three paths diverge. By 32, the math has compounded.`,
          vocab: [
            {
              word: `career trajectory`,
              definition: `The path of a person's career over time, including starting position, skill development, role changes, and earning growth. Trajectory matters more than any single year's income.`,
              audioPrompt: `Career trajectory is the path of a person's career over time, {name}. It includes starting position, skill development, role changes, and earning growth. Trajectory matters more than any single year's income. Two people who both earn $60,000 at age 25 can be in dramatically different positions ten years later: one on a fast trajectory might be earning $150,000 by 35, the other on a flat trajectory might still be at $70,000. The shape of trajectory often matters more than any single salary number. Building skills and reputation in your early career tends to produce steeper trajectories than chasing high pay alone.`,
            },
            {
              word: `starting salary`,
              definition: `The compensation at the beginning of a job or career. One of the most important financial decisions because future raises are often percentage-based, compounding any initial advantage or disadvantage over decades.`,
              audioPrompt: `Starting salary is the compensation at the beginning of a job or career, {name}. It is one of the most financially important decisions because future raises are often percentage-based. A 10 percent better starting salary today compounds across 3 percent annual raises over a career into substantially more total lifetime earnings. Most workers accept the first offer without negotiating. Research consistently finds that politely negotiating with market data often produces gains of 5 to 15 percent without losing the offer. The habits and decisions you make before your first real job, what skills you build, what you learn about negotiation, directly affect what starting salary you can reasonably ask for and get.`,
            },
            {
              word: `skill depth`,
              definition: `Deep expertise in a specific area built over years of practice. Commands premium compensation in most fields. Often produces higher lifetime earnings than shallow expertise across many areas or title-chasing without real skill development.`,
              audioPrompt: `Skill depth is deep expertise in a specific area built over years of focused practice, {name}. It commands premium compensation in most fields and career paths. An engineer who has deeply learned one technology stack for 10 years and can solve hard problems others cannot will out-earn someone who has jumped between technologies collecting impressive-sounding titles without building real depth. The same pattern applies across law, medicine, trades, finance, and most professions. Skill depth is hard to acquire and therefore rare, which is why it commands premium pay. Skill depth also tends to compound: deep expertise in one area often accelerates learning in related areas. Building real depth early in a career tends to produce the steepest long-term trajectories.`,
            },
          ],
        },

        // ───── CASE STUDY ─────────────────────────────────────────────────────
        {
          id: `l11-case-study`,
          type: `case-study`,
          headline: `Three Careers, Three Different Outcomes`,
          intro: `Three 22-year-olds, all of average ability, start their careers in different ways. Walk through their decisions and see how the math plays out over 10 years.`,
          scenario: `Sam, Riley, and Drew all graduated together at age 22. None of them is exceptional or particularly disadvantaged. They each face real choices about their first jobs and early career direction. The decisions they make in the next few years will compound dramatically by 32.`,
          decisions: [
            {
              id: `decision-1`,
              prompt: `Sam: trained as an electrician through an apprenticeship instead of college. Has no student debt. Three job options. What should they do?`,
              options: [
                {
                  id: `sam-residential`,
                  label: `Joins a small residential electrical company at $55,000/year. Stable but limited growth. Stays for 10 years.`,
                  consequence: `Predictable trajectory. By 32: maybe $70,000/year after a decade of small raises. Total earned over 10 years: about $625,000. No student debt to slow them down. Lives comfortably in low-cost areas, struggles in high-cost areas. Saves modestly. By 32 has maybe $50-80K saved if budgeting well. Stable life, limited upside.`,
                },
                {
                  id: `sam-industrial`,
                  label: `Takes a job with an industrial electrical contractor at $68,000/year. Higher pay, more skills development, opportunity to learn high-voltage and commercial work. Stays for 6 years, then starts own business.`,
                  consequence: `By 28: licensed master electrician with 6 years of commercial experience. Starts own business. By 32: business earning $180,000-250,000/year for owner. Total earned over 10 years: about $1.1 million. Built a small business that's worth additional value (maybe $150-300K if sold). Highest-trajectory of the three options, but required willingness to start a business which is hard.`,
                },
                {
                  id: `sam-staying`,
                  label: `Stays at the first apprenticeship company they trained with at $60,000/year. Same job for 10 years.`,
                  consequence: `Comfortable. Knows everyone, knows the work. By 32: maybe $72,000/year (the staying-put penalty is real). Total earned over 10 years: about $660,000. Stable but underearning relative to what their skills could command in the market. The job-stayer's penalty: ~30% lower lifetime earnings than reasonable job-switchers. Comfortable trap.`,
                },
              ],
            },
            {
              id: `decision-2`,
              prompt: `Riley: bachelor's degree in business with $35,000 student debt at 5%. Got a marketing analyst job at $58,000/year. Three options after 2 years on the job.`,
              options: [
                {
                  id: `riley-stay`,
                  label: `Stays in the same job for the next 8 years. Gets 3% annual raises.`,
                  consequence: `By 32: salary about $73,000. Total earned over 10 years: about $670,000. Still paying student loans 8 years in, finally close to paying them off. The "stay put" path is comfortable but underearns. Riley has marketing skills but no significant growth in responsibility or earning power. Comfortable trajectory, modest savings.`,
                },
                {
                  id: `riley-switch`,
                  label: `Switches jobs every 2-3 years, each time getting 15-20% raises. Strategic but moderately ambitious.`,
                  consequence: `By 32: salary about $120,000-150,000. Total earned over 10 years: about $850,000. Built substantial savings, paid off student loans by 28, has emergency fund, retirement contributions, and meaningful investments. The job-switcher pattern paid off. Required willingness to learn new contexts and interview regularly.`,
                },
                {
                  id: `riley-pivot`,
                  label: `Specializes deeply in data analytics within marketing, becomes one of the best in their area. Switches once, to a senior role at a tech company at age 26.`,
                  consequence: `By 32: salary about $180,000-220,000 plus equity, possibly more. Total earned over 10 years: about $1.1 million plus potential equity. Deep skill in a high-demand area commands premium. Sometimes the right move isn't switching often, it's becoming so good in one area that companies compete for you. Higher reward but requires sustained effort to build real expertise.`,
                },
              ],
            },
            {
              id: `decision-3`,
              prompt: `Drew: $80,000 in student debt at 6% from getting a bachelor's plus a law degree. Now 25 with a starting attorney job at $90,000/year. Three paths over the next 7 years.`,
              options: [
                {
                  id: `drew-big-firm`,
                  label: `Takes a $190,000/year job at a major law firm in NYC. Works 70+ hour weeks. Pays off loans in 5 years.`,
                  consequence: `Pays off $80K in loans by 30. By 32 has likely $200-250K saved, plus high salary trajectory ($300-400K by 32). Cost: significant burnout, almost no social life, high-stress lifestyle. The Big Law path is famously high-earning and high-cost. Many leave after 3-5 years. For those who stay, partner track at age 33-38 can lead to $500K-2M+/year.`,
                },
                {
                  id: `drew-government`,
                  label: `Takes a $85,000/year government attorney job (district attorney's office). Steady hours, public service. Public Service Loan Forgiveness eligible.`,
                  consequence: `Lower pay but stable hours. After 10 years of public service, qualifies for federal student loan forgiveness (PSLF). By 32: salary about $110,000, debt-free, balanced life. Total compensation over 7 years lower than Big Law but quality of life much higher. For some people this is far better than the high-pay alternative. Different lives.`,
                },
                {
                  id: `drew-solo`,
                  label: `Starts own small law practice at 28 after 3 years at a small firm. Self-employed.`,
                  consequence: `First two years are rough; revenue $60-90K, paying overhead, building client base. By 32, established practice earns $180-250K/year, with significant control over schedule. Risk during the building period. Upside: builds equity in own practice, can grow further, has autonomy. Downside: harder to predict income, no employer benefits, real risk of failure during transition. Required courage to leave a stable job to start something.`,
                },
              ],
            },
          ],
          debrief: [
            `Pattern across all three: the path that requires more risk-tolerance (starting business, specializing deeply, going solo) tends to produce higher financial outcomes for those who succeed at it. The path that requires less risk produces more stable but lower outcomes.`,
            `Geographic and field choices compound massively. The same person making the same effort in different fields and locations has wildly different outcomes. Drew in Big Law vs. Drew at a small firm in a low-cost area might both work hard, but their financial trajectories diverge.`,
            `The job-stayer penalty is real and large. Across all three case studies, the "stay in one job indefinitely" option produced the lowest lifetime earnings. Movement, whether to new jobs, new specializations, or new ventures, tends to pay.`,
            `None of these paths is objectively best. Drew's Big Law path leads to high salary but high stress. Drew's government path leads to moderate salary but life balance. Different priorities lead to different paths. Both can be wise depending on what the person wants.`,
            `For someone your age: the most important career insight is that decisions you don't see as career decisions now (which subjects you engage with, what skills you build, what curiosities you follow) shape what's possible later. You don't have to know your career at 12. You do benefit from staying engaged and curious so future options stay open.`,
          ],
        },

        {
          id: `l11-quiz`,
          type: `quiz`,
          headline: `Check your understanding`,
          questions: [
            {
              id: `q1`,
              type: `multiple-choice`,
              question: `What are the five main ways people earn income?`,
              options: [
                `Only salary and wages`,
                `Hourly wage, salary, tips/commission, self-employment, and equity/ownership`,
                `Just employment and investment`,
                `Work and welfare`,
              ],
              correctIndex: 1,
              explanation: `Each income type has different math and different lifetime patterns. Most people mix types over their career (W-2 employment plus side self-employment plus eventual equity in some cases).`,
            },
            {
              id: `q2`,
              type: `multiple-choice`,
              question: `What's the difference between gross and net income?`,
              options: [
                `There's no difference`,
                `Gross is the total before deductions (taxes, insurance, retirement); net is what actually reaches your bank account, typically 25-30% lower`,
                `Net is gross before tax`,
                `Gross is monthly, net is annual`,
              ],
              correctIndex: 1,
              explanation: `Understanding gross vs net is fundamental. Many adults are surprised by their first paycheck because they didn't know about the gap. Knowing in advance helps with realistic budgeting.`,
            },
            {
              id: `q3`,
              type: `multiple-choice`,
              question: `Why is self-employment tax higher than regular employee tax?`,
              options: [
                `Because self-employed people earn more`,
                `Because employees split Social Security and Medicare with their employer; self-employed people pay the full 15.3% themselves`,
                `Because it's a penalty`,
                `Because self-employment is rare`,
              ],
              correctIndex: 1,
              explanation: `Self-employment tax is significant. A self-employed person earning $80,000 can end up with less net than a salaried employee at $70,000 once you account for this plus no employer-provided health insurance.`,
            },
            {
              id: `q4`,
              type: `multiple-choice`,
              question: `What's total compensation?`,
              options: [
                `Just salary`,
                `The total value of what someone receives for work: base salary or wages, plus benefits (health insurance, retirement contributions, paid time off), bonuses, and equity`,
                `Bonuses only`,
                `Tax-free pay`,
              ],
              correctIndex: 1,
              explanation: `A $100,000 salary at a company with good benefits might be worth $130-150K in total compensation. Always look at total comp, not just salary, when comparing job offers.`,
            },
            {
              id: `q5`,
              type: `multiple-choice`,
              question: `What's the BLS finding on lifetime earnings by education level?`,
              options: [
                `All education levels earn the same`,
                `Median high school graduate: ~$1.2M across career; median bachelor's: ~$2.5M; higher-earning professions like medicine and law: $3-5M; these are medians, individual variation is large`,
                `High school always earns more`,
                `Education doesn't matter`,
              ],
              correctIndex: 1,
              explanation: `The lifetime earnings difference by education is real and substantial, but individual variation matters too. A skilled tradesperson with a thriving business can out-earn many bachelor's-degree professionals.`,
            },
            {
              id: `q6`,
              type: `multiple-choice`,
              question: `What's the "job-stayer penalty"?`,
              options: [
                `A government fee`,
                `Staying in the same job year after year typically produces 1-3% annual raises; switching jobs every 2-4 years often produces 10-20% jumps; job-changers typically out-earn job-stayers by 30-50% over careers`,
                `Punishment for not moving`,
                `Unemployment cost`,
              ],
              correctIndex: 1,
              explanation: `One of the most documented patterns in career economics. There are real tradeoffs (stability, relationships, deep expertise) but the financial pattern is consistent.`,
            },
            {
              id: `q7`,
              type: `multiple-choice`,
              question: `Why is starting salary negotiation so important?`,
              options: [
                `Because companies have to obey first requests`,
                `Because future raises are typically based on percentage of current salary; a 10% better starting salary compounds across raises over an entire career`,
                `Because it's required by law`,
                `Because companies expect aggression`,
              ],
              correctIndex: 1,
              explanation: `Even modest negotiation often produces meaningful gains. Most workers don't negotiate at all on first offers. The 5-15% gain compounds across decades.`,
            },
            {
              id: `q8`,
              type: `multiple-choice`,
              question: `What does the case study suggest about high-risk career paths?`,
              options: [
                `They always fail`,
                `Paths requiring more risk-tolerance (starting business, specializing deeply, going solo) tend to produce higher financial outcomes for those who succeed; lower-risk paths produce more stable but lower outcomes`,
                `All paths are equal`,
                `Risk has no relationship to return`,
              ],
              correctIndex: 1,
              explanation: `Same pattern as investing: higher potential return comes with higher risk. The career version applies. Different risk tolerances lead to different appropriate paths.`,
            },
            {
              id: `q9`,
              type: `true-false`,
              question: `True or false: A $190,000/year Big Law job is objectively better than an $85,000/year government attorney job.`,
              correctAnswer: false,
              explanation: `False. The Big Law job pays more but involves 70+ hour weeks and high stress. The government job offers better hours, work-life balance, and student loan forgiveness eligibility. Different priorities lead to different right answers.`,
            },
            {
              id: `q10`,
              type: `inference`,
              question: `Your older cousin is taking their first job offer at $52,000 without negotiating. Based on this lesson, what should you suggest?`,
              options: [
                `"Take it, jobs are hard to find"`,
                `"Most workers don't negotiate, but most first offers have room. Even asking for $55-58K politely with reasoning (market data, your specific qualifications) often produces gains without losing the offer. Even a $3,000 starting salary increase compounds across decades of percentage-based raises. It's one of the highest-return conversations of your early career."`,
                `"Demand $80K or walk away"`,
                `"Lie about other offers"`,
              ],
              correctIndex: 1,
              explanation: `Real applied career advice. Honor the legitimate caution. Frame negotiation as expected (not aggressive). Show the long-term math. This is the conversation that often produces real gains for the person being advised.`,
            },
          ],
        },

        {
          id: `l11-reflection`,
          type: `reflection`,
          headline: `Sit with this`,
          intro: `Pick the prompt that pulls at you most. Your answer is saved.`,
          prompts: [
            { id: `reflect-cognitive`, category: `Cognitive`, prompt: `Before this lesson, did you think most people earned through salary? How has your view of income types shifted?` },
            { id: `reflect-meta`, category: `Metacognitive`, prompt: `Which of the three career paths in the case study would you find most appealing? Why? What does that say about your priorities?` },
            { id: `reflect-identity`, category: `Identity`, prompt: `If you become someone who thinks about career trajectories instead of just current jobs, what does that change about your decisions over the next 20 years?` },
            { id: `reflect-application`, category: `Application`, prompt: `What subjects or interests do you currently engage with that might shape future career options? Think broadly: anything you spend time on can build toward something.` },
            { id: `reflect-critical`, category: `Critical`, prompt: `Is the "career trajectory" framing limiting? What's missed by viewing work primarily through earning-and-skill-compounding lens?` },
            { id: `reflect-personal`, category: `Personal investigation`, prompt: `Ask one adult about a career decision they made that they'd make differently now. Most adults have one. The lesson in their answer is often valuable.` },
          ],
        },

        {
          id: `l11-real-world`,
          type: `real-world`,
          headline: `Take it into your life`,
          guideContext: `Career thinking at 12 is unusual but valuable. Two paths.`,
          familyActivity: {
            title: `The Family Career Map`,
            duration: `40 minutes`,
            description: `At dinner, ask each working adult in your family: how do they actually earn (salary, hourly, commission, self-employment)? What's the difference between their gross and net? Did they ever negotiate? Have they switched jobs? Have they ever started a business? Most adults will share stories that illustrate the patterns from this lesson. You'll likely hear regrets about not negotiating, about staying in jobs too long, or about not building specific skills earlier. This conversation often reveals real career insight that's not in any book.`,
          },
          projectOption: {
            title: `Career Path Research, 2 weeks (optional)`,
            duration: `2 weeks, ~15 minutes per day`,
            description: `Pick 3-5 careers that interest you. For each, research: typical starting salary, median mid-career salary, lifetime earnings range, education required, day-to-day work, what makes top performers different, how the career has changed in the last 10 years. Use BLS data (free), career-specific sites, and conversations with people in the fields if possible. After 14 days, write 1,000 words comparing the paths. Even if your career interests change later (they probably will), the research skill itself is valuable. This is real applied career exploration most teens never do.`,
            offerToParent: `Parent: opt your kid into this project from the dashboard. Career exploration at 12 is unusually thoughtful.`,
          },
          identityQuestion: `If you understand career trajectories clearly at 12, what does that change about how you spend the next 10 years of building toward whatever comes next?`,
        },

        {
          id: `l11-identity-hook`,
          type: `identity-hook`,
          headline: `Who is this lesson making you?`,
          prompt: `One sentence. No wrong answer.`,
          placeholder: `Someone who...`,
          examples: [
            `Someone who thinks about career trajectory, not just current job.`,
            `A person who will negotiate every starting salary even when nervous.`,
            `Someone who knows skill depth matters more than impressive titles.`,
          ],
          saveKey: `identity_responses_mb_11_12_11`,
        },

        {
          id: `l11-celebration`,
          type: `celebration`,
          guideText: `{name}. After this lesson you can articulate the five ways people earn, calculate gross vs net income, understand self-employment tax, evaluate total compensation, analyze career trajectories, and apply career economics to real path decisions. Most adults wing it through these choices. You have the framework to be deliberate. Next time we go into something that affects every dollar of income: taxes. What they actually fund, how they actually work, and the three positions serious thinkers take on whether the system is fair. Argument Builder format. See you there. — Ace`,
          badge: `income-architect`,
          badgeName: `Income Architect`,
          xpEarned: 75,
          competencies: [
            `Can articulate the five income types (hourly, salary, tips/commission, self-employment, equity)`,
            `Calculates gross vs net income including taxes and benefits`,
            `Understands self-employment tax and the math of being your own boss`,
            `Knows the job-stayer penalty and other career trajectory patterns`,
            `Can walk through real career path decisions with their compounding effects`,
          ],
          nextLessonPreview: {
            title: `Lesson 12: Taxes — What They Are and Why`,
            hook: `Three positions on taxation: aggressive funding for public goods, minimal taxation, targeted progressive system. Real economists disagree. Build your argument.`,
          },
        },
      ],
    },
  ],
};

export default MONEYBUSINESS_VOYAGER_L11;

if (import.meta.env?.DEV) {
  const l = MONEYBUSINESS_VOYAGER_L11.lessons[0];
  const mags = l.screens.filter((s) => s.type === `magazine`).length;
  const cs = l.screens.find((s) => s.type === `case-study`)?.decisions?.length ?? 0;
  const quiz = l.screens.find((s) => s.type === `quiz`)?.questions?.length ?? 0;
  const reflect = l.screens.find((s) => s.type === `reflection`)?.prompts?.length ?? 0;
  console.log(
    `[LESSON-MB-VOYAGER-L11 ${VERSION}] "${l.title}" — ${mags} magazine, case-study w/ ${cs} decisions, ${quiz} quiz, ${reflect} reflection`
  );
}
