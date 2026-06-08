// ─────────────────────────────────────────────────────────────────────────────
// MONEY & BUSINESS VOYAGER  |  L07 — Credit Scores: The Invisible Number Running Your Life
// Age band : voyagers (11-12)   Guide: ace (Eagle)
// Standards: Coreverse Original — Personal Finance, Credit Literacy
// CALIBRATED: Voyager spec v1.1 (May 2026)
// Interaction format: SOURCE EVALUATION (Consumer Reports vs viral credit repair vs MyFICO)
// ─────────────────────────────────────────────────────────────────────────────

const VERSION = "voyager-mb-l07-v1";

const MONEYBUSINESS_VOYAGER_L07 = {
  ageBand: `voyagers`,
  subjectId: `money-business`,
  guide: `ace`,

  lessons: [
    {
      id: `mb-11-12-07`,
      title: `Credit Scores: The Invisible Number Running Your Life`,
      duration: 35,
      xpReward: 75,
      badge: `credit-decoder`,
      badgeName: `Credit Decoder`,

      screens: [
        {
          id: `l07-welcome`,
          type: `welcome`,
          guideText: `{name}, there's a three-digit number quietly running most of your adult life that almost no one understands. Your credit score determines whether you get approved for an apartment, what interest rate you pay on a car loan, whether you can buy a house, and sometimes whether you get hired for certain jobs. The score is calculated by private companies using formulas that are partly secret. Most adults don't know how the score actually works. This gap in knowledge is so large that an entire industry of "credit repair" scammers has built businesses preying on people's confusion. Today we look at three very different sources telling you how to think about credit scores. By the end you'll understand the actual mechanics better than most adults running on autopilot.`,
          headline: `Credit Scores`,
          subtitle: `The invisible number quietly running your adult life.`,
          visual: `/voyager-assets/money-business/l07-welcome.webp`,
        },

        {
          id: `l07-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `What A Credit Score Actually Is`,
          paragraphs: [
            `A credit score is a number, typically between 300 and 850, that estimates how likely you are to pay back borrowed money on time. The number is calculated by analyzing your credit history: the loans and credit cards you've had, whether you've paid them on time, how much you currently owe, and several other factors. The credit score is essentially a probability prediction expressed as a number. Higher number, lower predicted risk of default. Lower number, higher predicted risk.`,
            `The most widely used credit score is the FICO score, created by a company called Fair Isaac Corporation. About 90% of US lenders use FICO when making lending decisions. There's also VantageScore, a competing score created jointly by the three major credit bureaus. The scores are similar but not identical. When people talk about "your credit score," they usually mean your FICO score.`,
            `Why does any of this matter? Because the score determines what you can borrow and at what cost. A person with a 780 FICO score might qualify for a mortgage at 6.5%. A person with a 620 FICO score might pay 8.5% on the same loan. On a 30-year $300,000 mortgage, that 2% interest rate difference costs about $135,000 in additional interest over the life of the loan. The credit score, this single three-digit number, is silently moving over a hundred thousand dollars between people based on their credit history.`,
          ],
          image: `/voyager-assets/money-business/l07-s1-score.webp`,
          imageCaption: `A three-digit number that quietly redirects hundreds of thousands of dollars.`,
          vocab: [
            {
              word: `FICO score`,
              definition: `The most widely used credit score in the US, created by Fair Isaac Corporation. Ranges from 300 (lowest) to 850 (highest). Used by about 90% of US lenders.`,
              audioPrompt: `A FICO score is the most widely used credit score in the US, {name}. It is created by a company called Fair Isaac Corporation. FICO scores range from 300 to 850. The higher your score, the more lenders are willing to lend to you, and at lower interest rates. About 90% of US lenders use FICO scores when making lending decisions. The other major credit score is VantageScore, created jointly by the three credit bureaus. Both scores use similar information but produce slightly different numbers. When people say "your credit score," they usually mean your FICO.`,
            },
          ],
        },

        {
          id: `l07-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `How The Score Actually Gets Calculated`,
          paragraphs: [
            `FICO publishes the rough breakdown of what factors into the score. Payment history makes up about 35%. Whether you've paid past credit accounts on time. Late payments, especially 60+ days late, are the single most damaging factor.`,
            `Amounts owed contributes about 30%. This includes your "credit utilization ratio," the percentage of your available credit you're using. If you have $10,000 in credit card limits and a $3,000 balance, your utilization is 30%. Lower utilization is better. Most experts recommend staying under 30%; below 10% is even better.`,
            `Length of credit history is about 15%. Older accounts in good standing help your score. This is partly why closing old credit cards can actually hurt your score: it shortens your average account age.`,
            `Credit mix is 10%. Having a variety of credit types (credit cards, installment loans, mortgage) helps modestly. New credit applications are the final 10%. Each formal application for new credit causes a small temporary score dip and stays on your report for two years.`,
            `What does NOT factor in: your income, your job, your education, your race or gender (legally), your savings account balance. The score is purely about how you've handled credit. A high-earning person with poor payment history can have a worse score than a low-earning person with perfect payment history.`,
          ],
          image: `/voyager-assets/money-business/l07-s2-formula.webp`,
          imageCaption: `Payment history 35%, amounts owed 30%, length 15%, mix 10%, new credit 10%.`,
          vocab: [
            {
              word: `credit utilization`,
              definition: `The percentage of your available credit you're currently using. If you have $10,000 in credit limits and owe $3,000, utilization is 30%. Lower is better. Above 30% hurts your score.`,
              audioPrompt: `Credit utilization is the percentage of your available credit you're currently using, {name}. If you have $10,000 in credit card limits and owe $3,000, your utilization is 30%. Credit utilization is the second-most-important factor in your FICO score, accounting for about 30% of the calculation. Lower utilization is better. Most experts recommend staying under 30%. Below 10% is even better for maximizing your score. People often improve their score significantly just by paying down credit card balances, which lowers utilization.`,
            },
          ],
        },

        {
          id: `l07-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `What Actually Builds A Good Score`,
          paragraphs: [
            `Given the formula, the actions that build a good credit score are mostly boring. Pay every bill on time, every month, without exceptions. This single habit, over years, builds the payment history that contributes 35% of your score. There's no shortcut for this. Just consistency.`,
            `Keep credit utilization low. Don't max out credit cards. If you regularly use 80% of your available credit, your score suffers even if you pay on time. Paying down balances before the statement closing date can lower the utilization that gets reported to the credit bureaus, improving your score quickly.`,
            `Keep old credit accounts open even if you don't use them much. Closing an old credit card shortens your credit history average and reduces your available credit, which can raise utilization. Sometimes paying a small annual fee to keep an old card open helps your score.`,
            `Don't apply for credit you don't need. Each application is a "hard inquiry" that temporarily dings your score. Opening multiple new accounts in a short period looks like financial distress to the formula.`,
            `Be patient. Credit history takes years to build well. A person with one perfect year of credit history will score lower than someone with 10 perfect years. There's no way to accelerate the time factor.`,
          ],
          image: `/voyager-assets/money-business/l07-s3-build.webp`,
          imageCaption: `Building credit: boring, slow, durable. Same actions for decades.`,
          vocab: [
            {
              word: `hard inquiry`,
              definition: `When a lender pulls your credit report as part of evaluating you for new credit. Each hard inquiry temporarily lowers your score slightly and stays on your report for 2 years.`,
              audioPrompt: `A hard inquiry is when a lender pulls your credit report as part of evaluating you for new credit, {name}. Applying for a credit card, mortgage, or auto loan triggers a hard inquiry. Each hard inquiry temporarily lowers your score by a few points and stays on your report for two years, though its impact fades quickly. Multiple hard inquiries in a short period look like financial distress and lower your score more significantly. There's a difference between hard inquiries (which affect your score) and soft inquiries (checking your own score, employer background checks, which don't affect your score).`,
            },
          ],
        },

        {
          id: `l07-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `The Credit Repair Industry`,
          paragraphs: [
            `The combination of "credit scores are important" plus "most people don't understand them" creates fertile ground for predatory businesses. The "credit repair" industry, worth several billion dollars annually in the US, mostly sells services that either don't work or are things consumers can do themselves for free.`,
            `Common credit repair pitches: "We can remove negative items from your credit report." "We can boost your score 100 points in 30 days." "We can help you create new credit identity." Some of these claims describe legal services that don't work as advertised. Some describe outright fraud.`,
            `What's actually legal and useful: disputing errors on your credit report. Federal law (the Fair Credit Reporting Act) requires credit bureaus to investigate disputes within 30 days. If something on your report is genuinely incorrect, you can dispute it for free yourself by writing to the credit bureau. About 5% of consumers have errors serious enough to affect their score. Disputing those errors is real. Paying $500-2000 for a "credit repair company" to do what you can do free yourself is paying for confusion.`,
            `What's not legal: removing accurate negative information. If you genuinely missed payments or defaulted on debts, that information legally remains on your report for 7 years from the date of first delinquency (10 years for bankruptcies). Companies promising to "remove" accurate negative items are usually doing one of three things: 1) Disputing items hoping the creditor doesn't respond in 30 days (creating temporary removals that often come back), 2) Creating new credit identities using social security number variants (federal crime), or 3) Just taking your money without doing anything substantive.`,
          ],
          image: `/voyager-assets/money-business/l07-s4-repair.webp`,
          imageCaption: `Credit repair: a multi-billion industry selling mostly what people can do free.`,
          vocab: [
            {
              word: `credit reporting`,
              definition: `Federal law (1970) that governs how credit information can be collected, shared, and disputed. Gives consumers the right to dispute inaccurate information for free.`,
              audioPrompt: `The Fair Credit Reporting Act is a federal law from 1970 that governs how credit information can be collected, shared, and disputed, {name}. It gives consumers important rights. You can request a free copy of your credit report annually from each of the three major bureaus through annualcreditreport.com. You can dispute inaccurate information for free. Credit bureaus must investigate disputes within 30 days. Inaccurate information must be corrected or removed. Knowing your rights under this law is one of the most useful financial literacy facts. You don't need to pay a credit repair company to exercise rights the federal government already gives you for free.`,
            },
          ],
        },

        {
          id: `l07-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Why Credit Score Knowledge Matters For You Now`,
          paragraphs: [
            `You're 12. You don't have a credit score yet. But you will. And the decisions you make in your late teens and early 20s will shape your credit score for decades. Most people start their credit history with their first credit card around age 18. The actions in those first few years often determine the trajectory of their credit for life.`,
            `Specific things to know for your 18-year-old self. Becoming an authorized user on a parent's credit card (with their permission and their good standing) can give you a credit history before you turn 18. This is one of the most powerful "head start" tools in personal finance, but only if the parent's card has good standing. Pay off your first credit card in full every month from the first bill. Never carry a balance. The "build credit by carrying a balance" advice is wrong; you build credit by using the card and paying it off, not by paying interest.`,
            `Don't apply for store credit cards at checkout. They're often pitched at "10% off your purchase today!" The card creates a hard inquiry, sometimes has high interest, and the small discount almost never justifies the cost. Avoid co-signing loans for friends in your early 20s. If they default, your credit is destroyed and you're legally liable.`,
            `For now, before you have any credit history: know that the rules exist, know how the score actually works, and recognize the credit repair scams when you eventually see them. Most adults you know have made credit mistakes that cost them tens of thousands of dollars over their lifetime. You don't have to.`,
          ],
          image: `/voyager-assets/money-business/l07-s5-future.webp`,
          imageCaption: `The trajectory of your credit life starts before you can legally vote.`,
          vocab: [
            {
              word: `authorized user`,
              definition: `Someone added to another person's credit card account with permission. The cardholder's credit history (good or bad) often shows up on the authorized user's credit report. A common "head start" tool for young people.`,
              audioPrompt: `An authorized user is someone added to another person's credit card account with permission, {name}. The primary cardholder's credit history, both good and bad, often shows up on the authorized user's credit report. This is one of the most powerful tools for giving a young person a head start on credit. A parent or other family member with a good credit history adds you as an authorized user. The card's payment history starts building your credit report before you turn 18. Just make sure the card has good standing. Bad history on the primary card hurts you too.`,
            },
          ],
        },

        // ───── SOURCE EVALUATION ──────────────────────────────────────────────
        {
          id: `l07-source-evaluation`,
          type: `source-evaluation`,
          headline: `Three Sources On Credit Scores`,
          intro: `Three sources discuss credit scores. Rank them from most credible to least credible based on methodology and honesty. Then see how a careful analyst would evaluate them.`,
          topic: `What is a credit score, how does it actually work, and what should consumers do about it?`,
          sources: [
            {
              id: `source-a`,
              name: `Consumer Financial Protection Bureau official guidance (CFPB.gov)`,
              type: `Federal regulatory agency created in 2010 to protect consumers in financial services; publishes free educational materials and complaint procedures`,
              claim: `Your credit score reflects your credit history, calculated using factors disclosed by FICO and VantageScore. To build credit: pay bills on time, keep credit utilization below 30%, maintain accounts in good standing over years, avoid unnecessary applications. To improve credit: check your credit reports for errors at annualcreditreport.com (free annually), dispute errors directly with credit bureaus (free), and continue good credit habits. There is no legitimate shortcut to building credit; consistency over time is what works.`,
              evidence: `Based on FICO's published documentation, the Fair Credit Reporting Act, and decades of established consumer finance research. Methodology is transparent. Recommendations match what credit bureaus themselves describe. Tells consumers exactly what they can do for free under federal law. No products or services being sold. The agency's mandate is consumer protection, with no financial incentive to oversimplify or oversell.`,
            },
            {
              id: `source-b`,
              name: `@CreditRepairKing — TikTok account, 1.2M followers`,
              type: `Viral TikTok account run by a self-described "credit repair specialist" who sells courses and services`,
              claim: `"Your credit score is RIGGED. The bureaus don't want you to know these secrets. I can REMOVE late payments, charge-offs, even bankruptcies from your report. I got my client's score from 480 to 750 in 90 days. The credit repair companies don't want you to know this method. Comment 'SCORE' below for my $497 course that teaches you exactly how. First 50 people get 40% off!"`,
              evidence: `Personal testimonials from claimed clients (no verification). Vague references to "legal loopholes" without specifics. Repeated claims that legitimately negative items can be removed (which is generally false unless inaccurate). $497 course at the end. Conspiracy framing ("the bureaus don't want you to know"). The "score jumped 270 points" claims are inconsistent with how the FICO formula works. Many tactics implied or described would be unethical or illegal if actually performed.`,
            },
            {
              id: `source-c`,
              name: `MyFICO.com — Official FICO score education and products`,
              type: `Website run by Fair Isaac Corporation, the company that creates the FICO score; sells credit monitoring subscriptions and reports`,
              claim: `Your FICO score is calculated using five factors: payment history (35%), amounts owed (30%), length of credit history (15%), credit mix (10%), and new credit (10%). To monitor and improve your credit, you can purchase our FICO Advanced subscription for $29.95/month, which includes credit monitoring, score tracking, and identity theft protection. Premium plans include scores from all three credit bureaus.`,
              evidence: `FICO is the actual creator of the score being discussed, so their information about the formula is authoritative. The educational content is accurate. However, the site is also selling subscription products, creating an incentive to imply you need to pay them to access information you can get for free. Free credit reports are available at annualcreditreport.com. Some free apps (Credit Karma, Experian, banking apps) provide free score monitoring. The accuracy of FICO's information is high; the commercial framing is real.`,
            },
          ],
          rankingPrompt: `Drag each source into one of the three slots: Most credible, Somewhat credible, Least credible.`,
          reasoningPrompt: `In 3-4 sentences: What signals did you use? Is there nuance to where Source C sits?`,
          reveal: {
            title: `How a careful analyst would evaluate these`,
            content: [
              `Source A is the most credible and the most useful for consumers. The CFPB is a federal regulatory agency with consumer protection as its mandate. No products being sold. Information matches what credit bureaus themselves disclose. Specifically directs consumers to free resources they're legally entitled to. The recommendations are correct, complete, and don't require buying anything. This is one of the rare cases where a government source is genuinely the best place to get information.`,
              `Source B is the now-recognizable pattern of viral financial scam content. Multiple red flags: conspiracy framing ("the bureaus don't want you to know"), implausible specific claims (score jumps not consistent with the formula), unverified testimonials, a $497 course at the end. Many of the implied methods would be unethical (filing false disputes) or illegal (creating new credit identities). The credit repair industry has been investigated repeatedly by the FTC and state attorneys general. The pattern is consistent: take money from confused consumers, deliver little or nothing of value, sometimes commit fraud against credit bureaus on behalf of clients.`,
              `Source C is interesting and complicated. FICO is the actual creator of the score. Their information about the formula is authoritative because they invented it. But they're also selling subscription products. This creates a real tension: the information is accurate, but the framing pushes you toward paying $29.95/month for what's largely available free elsewhere. MyFICO's subscriptions can be useful for specific situations (mortgage shopping, frequent monitoring) but most consumers don't need them. A useful source with a commercial interest you should know about. Rank this in the middle: more credible than the scam, less ideal than the free government resource.`,
              `The deeper lesson: credit score information is one of the most asymmetric topics in personal finance. The actual mechanics are well-documented and free to learn. The scams that prey on confusion charge significant money for nothing or worse. The legitimate paid services exist but mostly aren't needed. Most adults pay extra for less when they could get more for free. Knowing this distinction at 12 puts you years ahead of when most adults figure it out, if they ever do.`,
            ],
          },
        },

        {
          id: `l07-quiz`,
          type: `quiz`,
          headline: `Check your understanding`,
          questions: [
            {
              id: `q1`,
              type: `multiple-choice`,
              question: `What is a credit score, fundamentally?`,
              options: [
                `A measure of how rich you are`,
                `A number, typically 300-850, that estimates how likely you are to pay back borrowed money on time based on your credit history`,
                `A measure of your income`,
                `A test score`,
              ],
              correctIndex: 1,
              explanation: `Credit scores are probability predictions expressed as numbers. They reflect credit history, not income, race, gender, education, or savings.`,
            },
            {
              id: `q2`,
              type: `multiple-choice`,
              question: `What's the FICO score breakdown?`,
              options: [
                `100% payment history`,
                `Payment history 35%, amounts owed 30%, length of credit history 15%, credit mix 10%, new credit 10%`,
                `Equal parts of everything`,
                `It's secret`,
              ],
              correctIndex: 1,
              explanation: `FICO publishes the rough breakdown. Payment history dominates (35%). Credit utilization (part of amounts owed) is second-most important (30%). Time matters (15%) and can't be rushed.`,
            },
            {
              id: `q3`,
              type: `multiple-choice`,
              question: `What is credit utilization?`,
              options: [
                `How often you use your credit card`,
                `The percentage of your available credit you're currently using; if you have $10K in limits and owe $3K, utilization is 30%; lower is better`,
                `The total amount of credit you have`,
                `Your interest rate`,
              ],
              correctIndex: 1,
              explanation: `Credit utilization is the second-most-important FICO factor. Lower is better. Below 30% is recommended; below 10% maximizes the score impact. Paying down balances quickly improves utilization.`,
            },
            {
              id: `q4`,
              type: `multiple-choice`,
              question: `What's the difference between a hard inquiry and a soft inquiry?`,
              options: [
                `Hard inquiries are more expensive`,
                `Hard inquiries happen when lenders pull your credit for new credit applications (temporarily lowers your score); soft inquiries happen when you check your own score or for employment checks (no effect on score)`,
                `They're the same`,
                `Soft inquiries are illegal`,
              ],
              correctIndex: 1,
              explanation: `Checking your own credit doesn't hurt your score. Applying for new credit does. Knowing this distinction protects you from unnecessary worry about checking your own credit.`,
            },
            {
              id: `q5`,
              type: `multiple-choice`,
              question: `What does the Fair Credit Reporting Act give you the right to do?`,
              options: [
                `Refuse to pay bills`,
                `Get a free copy of your credit report annually, dispute inaccurate information for free, require credit bureaus to investigate disputes within 30 days`,
                `Set your own credit score`,
                `Avoid all credit checks`,
              ],
              correctIndex: 1,
              explanation: `Federal law gives you real rights for free. You don't need to pay a credit repair company to do what the law already lets you do yourself.`,
            },
            {
              id: `q6`,
              type: `multiple-choice`,
              question: `What's the typical credit repair industry pitch, and why is it problematic?`,
              options: [
                `Helping you understand credit; not problematic`,
                `"Remove negative items from your report" / "Boost your score 100 points in 30 days" — problematic because legitimately accurate negative information can't be legally removed, and many of the tactics used are either tactics consumers can do free, ineffective, or fraudulent`,
                `Free credit reports; not problematic`,
                `Government services; not problematic`,
              ],
              correctIndex: 1,
              explanation: `The credit repair industry preys on confusion. Most of what they sell is either free, ineffective, or fraudulent. The legitimate work of disputing actual errors can be done by consumers themselves.`,
            },
            {
              id: `q7`,
              type: `multiple-choice`,
              question: `What's an "authorized user," and why does it matter for you?`,
              options: [
                `Someone who authorizes purchases`,
                `Someone added to another person's credit card with permission; the cardholder's good (or bad) history often shows up on the authorized user's credit report; can give a young person a head start on credit if a parent has good standing`,
                `A type of bank employee`,
                `A federal designation`,
              ],
              correctIndex: 1,
              explanation: `One of the most powerful "head start" tools in personal finance. A parent with good credit can add you as an authorized user, giving you credit history before you turn 18. Only works if the parent's card has good standing.`,
            },
            {
              id: `q8`,
              type: `multiple-choice`,
              question: `Should you carry a balance on credit cards to "build credit"?`,
              options: [
                `Yes, you need to pay interest to build credit`,
                `No, you build credit by using the card and paying it off in full every month; carrying balances costs you interest and doesn't improve your score more than paying in full`,
                `Yes, banks reward customers who carry balances`,
                `It depends on the card`,
              ],
              correctIndex: 1,
              explanation: `One of the most common credit myths. You don't need to carry debt to build credit. Use the card, pay in full, on time. That's it. Carrying a balance just costs you interest while doing nothing extra for your score.`,
            },
            {
              id: `q9`,
              type: `true-false`,
              question: `True or false: Most of what credit repair companies charge for is information and processes that consumers can do free themselves.`,
              correctAnswer: true,
              explanation: `True. Federal law makes dispute processes free. Free credit reports are available. The credit repair industry mostly sells the appearance of expertise to confused consumers. Knowing this protects you and your future family from scams.`,
            },
            {
              id: `q10`,
              type: `inference`,
              question: `A friend's parent says "I'm going to pay $1,500 for a credit repair company to remove some old late payments from my credit report." Based on this lesson, what's the most useful response?`,
              options: [
                `"Sounds expensive but necessary"`,
                `"That's a great idea"`,
                `"If the late payments are accurate (you actually paid late), no legitimate company can have them removed; they legally stay on the report for 7 years from the date of first delinquency. If they're inaccurate (you paid on time but they're marked late), you can dispute them yourself for free through the credit bureau within 30 days. Either way, paying $1,500 is paying for what's either impossible or free."`,
                `"Try $500 credit repair instead"`,
              ],
              correctIndex: 2,
              explanation: `This is real consumer protection knowledge applied to a real situation. The credit repair pitch dies the moment a consumer understands their actual options. You could save someone $1,500 with what you just learned.`,
            },
          ],
        },

        {
          id: `l07-reflection`,
          type: `reflection`,
          headline: `Sit with this`,
          intro: `Pick the prompt that pulls at you most. Your answer is saved.`,
          prompts: [
            { id: `reflect-cognitive`, category: `Cognitive`, prompt: `Before this lesson, what did you think a credit score was? How has that changed?` },
            { id: `reflect-meta`, category: `Metacognitive`, prompt: `The credit repair scam relies on consumer confusion. Why is this kind of asymmetric information so common in financial services?` },
            { id: `reflect-identity`, category: `Identity`, prompt: `If you start your adult credit life with the framework from this lesson, what does that prevent over your lifetime?` },
            { id: `reflect-application`, category: `Application`, prompt: `Ask a parent: do they know their FICO score? When did they last check? Do they know what factors affect it most?` },
            { id: `reflect-critical`, category: `Critical`, prompt: `Is the credit score system fair? What might it miss or unfairly penalize?` },
            { id: `reflect-personal`, category: `Personal investigation`, prompt: `Find one ad or social media post about "credit repair" or "boost your credit score fast." Run it through this lesson's framework. What's actually being sold?` },
          ],
        },

        {
          id: `l07-real-world`,
          type: `real-world`,
          headline: `Take it into your life`,
          guideContext: `Credit literacy can save your future family thousands. Two paths.`,
          familyActivity: {
            title: `The Credit Score Conversation`,
            duration: `30 minutes`,
            description: `At dinner, share what you learned. Ask each adult in your family: do they know their current FICO score? Do they know the breakdown of factors? Have they ever been pitched credit repair services? Have they ever paid for them? Most adults will have learned about credit through trial and error, often expensively. Some may have been targeted by credit repair scams. This conversation often reveals real costs people paid because they didn't have the framework. Then ask the most important question: would they consider adding you as an authorized user on a credit card with good standing?`,
          },
          projectOption: {
            title: `Build Your Credit Knowledge Base, 2 weeks (optional)`,
            duration: `2 weeks, ~10 minutes per day`,
            description: `Each day for 14 days, find and read one piece of credit-related content: an article, a TikTok, a video, an ad, an Instagram post. Run it through this lesson's framework: is the information accurate? Is something being sold? Who benefits if I believe this? After 14 days, write 500 words on what you learned about the landscape of credit information. You'll see clearly which sources are educating and which are extracting. This is real applied media literacy on a topic that will affect your finances for decades.`,
            offerToParent: `Parent: opt your kid into this project from the dashboard. Completed projects show up in your weekly report.`,
          },
          identityQuestion: `If you start your credit life with the right framework at 18, what kind of financial life are you setting up for your 30s and 40s?`,
        },

        {
          id: `l07-identity-hook`,
          type: `identity-hook`,
          headline: `Who is this lesson making you?`,
          prompt: `One sentence. No wrong answer.`,
          placeholder: `Someone who...`,
          examples: [
            `Someone who knows how my FICO score is actually calculated, before I even have one.`,
            `A person who can spot credit repair scams from a mile away.`,
            `Someone who will pay every bill on time, every time, for the rest of my life.`,
          ],
          saveKey: `identity_responses_mb_11_12_07`,
        },

        {
          id: `l07-celebration`,
          type: `celebration`,
          guideText: `{name}. After this lesson you can explain what a credit score is, articulate the FICO formula, identify the actions that build good credit, recognize credit repair scams, distinguish hard from soft inquiries, and apply what you know to protect yourself and your future family. Most adults don't have this knowledge. You can now save people money just by sharing what you've learned. Next time we go into one of the most overhyped topics in personal finance: budgeting. We strip out the hype and look at what budgeting actually does and doesn't do. Case Study format. See you there. — Ace`,
          badge: `credit-decoder`,
          badgeName: `Credit Decoder`,
          xpEarned: 75,
          competencies: [
            `Can explain what a FICO score is and how it's calculated`,
            `Knows the five FICO factors and their weights`,
            `Recognizes credit repair scams and their typical patterns`,
            `Understands authorized user, hard/soft inquiry, credit utilization`,
            `Knows free consumer rights under the Fair Credit Reporting Act`,
          ],
          nextLessonPreview: {
            title: `Lesson 8: Budgeting Without The Hype`,
            hook: `Budgeting apps and gurus promise to transform your finances. The reality is more useful and more boring. Three real teen budgets, three real trade-offs.`,
          },
        },
      ],
    },
  ],
};

export default MONEYBUSINESS_VOYAGER_L07;

if (import.meta.env?.DEV) {
  const l = MONEYBUSINESS_VOYAGER_L07.lessons[0];
  const mags = l.screens.filter((s) => s.type === `magazine`).length;
  const sourceEval = l.screens.find((s) => s.type === `source-evaluation`);
  const quiz = l.screens.find((s) => s.type === `quiz`)?.questions?.length ?? 0;
  const reflect = l.screens.find((s) => s.type === `reflection`)?.prompts?.length ?? 0;
  console.log(
    `[LESSON-MB-VOYAGER-L07 ${VERSION}] "${l.title}" — ${mags} magazine, source-eval w/ ${sourceEval?.sources?.length ?? 0} sources, ${quiz} quiz, ${reflect} reflection`
  );
}
