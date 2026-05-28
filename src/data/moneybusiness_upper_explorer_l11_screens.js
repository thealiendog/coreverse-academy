// ─────────────────────────────────────────────────────────────────────────────
// MONEY & BUSINESS UE  |  L11 — Cash Flow: The Lifeblood of Business
// Age band : upper_explorers (9–10)   Guide: ace
// Standards: Jump$tart Personal Finance — Cash flow and financial planning;
//            C3 D2.Eco.1.3-5 — Cost-benefit analysis
// CALIBRATED: UE spec v1.1 — real domain terms, em-dashes sparing
// SCOPE: 4 concepts — what cash flow is, why profitable businesses fail
//        without it, timing matters, managing cash flow well
// VERSION: v1
// ─────────────────────────────────────────────────────────────────────────────

const MONEY_UE_L11 = {
  ageBand: `upper_explorers`,
  subjectId: `money`,
  guide: `ace`,

  lessons: [
    {
      id: `mb-9-10-11`,
      title: `Cash Flow: The Lifeblood of Business`,
      duration: 18,
      xpReward: 75,
      badge: `cash-flow-pro`,
      badgeName: `Cash Flow Pro`,

      screens: [
        {
          id: `l11-welcome`,
          type: `welcome`,
          guideText: `Hey {name}, Ace here. Today we look at one of the most misunderstood concepts in business. CASH FLOW. People often confuse it with profit. They're related, but very different. Many profitable businesses have FAILED because of bad cash flow. Many businesses with low profits have SURVIVED because their cash flow was strong. Today you'll understand the difference, see why timing matters more than people realize, and learn how to think about cash flow for your own future. Let's go.`,
          headline: `Cash Flow`,
          subtitle: `Why profitable businesses can still fail — and how to avoid it`,
          visual: `/ue-assets/money/l11-welcome.webp`,
        },

        {
          id: `l11-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `What Cash Flow Actually Is`,
          paragraphs: [
            `CASH FLOW is the actual movement of REAL MONEY in and out of a business over a specific time period. POSITIVE cash flow means MORE cash came in than went out. NEGATIVE cash flow means MORE went out than came in. It sounds similar to PROFIT, but they're measured differently. Profit looks at revenue minus costs over time, often using complex accounting rules. Cash flow looks at ACTUAL money moving through ACTUAL bank accounts.`,
            `Here's why the difference matters. A business might sell $100,000 of products in January (booked as revenue), but customers might not actually pay for those products until April. That business has $100,000 in profit for January (on paper), but ZERO cash coming in during January, February, and March. If they have bills to pay during those months, they could RUN OUT OF MONEY despite being profitable. This is one of the most common reasons new businesses fail. Profits look great. Cash flow kills them.`,
          ],
          image: `/ue-assets/money/l11-s1-what-is.webp`,
          imageCaption: `Cash flow: actual money moving through actual accounts. Different from profit.`,
          vocab: [
            { word: `cash flow`,
              definition: `The actual movement of real money in and out of a business or person's accounts over time. Positive cash flow means more money came in than went out. Different from profit.`,
              audioPrompt: `Cash flow is the actual movement of real money in and out of a business or person's accounts over a specific time, {name}. Positive cash flow means more cash came in than went out. Negative cash flow means more went out than came in. It sounds similar to profit, but they're different. Profit looks at revenue minus costs over time. Cash flow looks at actual money moving through actual bank accounts. A business can be profitable on paper but still run out of cash if customers pay late.` },
            { word: `revenue`,
              definition: `The total money a business brings in from selling products or services, before any costs are subtracted. High revenue doesn't mean profit — costs determine whether the business actually makes money.`,
              audioPrompt: `Revenue is the total money a business brings in from selling products or services, before any costs, {name}. If a bakery sells 50 cakes at 20 dollars each, their revenue is 1,000 dollars — but that's not profit. Subtract ingredients, labor, and rent, and you get profit. Revenue can be misleading on its own. High revenue with high costs might mean tiny profit. Lower revenue with low costs might mean healthy profit. Revenue is where counting starts. Profit is what remains.` },
          ],
        },

        {
          id: `l11-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Why Profitable Businesses Sometimes Fail`,
          paragraphs: [
            `Imagine a small bakery that bakes wedding cakes. They charge $1,000 per cake. After ingredients, labor, and overhead, their PROFIT is $400 per cake. On paper, very profitable. But here's the cash flow reality. The bakery PAYS for ingredients up front (week before the wedding). They PAY their workers weekly. They PAY rent on the first of every month. They get PAID by the customer only AFTER the wedding (sometimes 30 days later). So cash goes OUT for weeks before any cash comes IN.`,
            `If the bakery only has a few weeks of cash reserves and they have 5 cakes scheduled in one month, they might NEED to spend $3,000 on ingredients up front. If their bank account only has $2,000, they can't actually bake those cakes, even though each one would be highly profitable. They have to turn down business, or worse, take out emergency loans. This pattern is so common that finance experts often say: "Revenue is vanity, profit is sanity, but cash is reality." Companies survive on CASH, not paper profits.`,
          ],
          image: `/ue-assets/money/l11-s2-fail.webp`,
          imageCaption: `Cash out before cash in. The timing trap that kills profitable businesses.`,
          vocab: [
            { word: `cash reserves`,
              definition: `Money a business or person keeps available for emergencies and timing gaps. Strong cash reserves let you survive periods when money goes out faster than it comes in.`,
              audioPrompt: `Cash reserves are money a business or person keeps available for emergencies and timing gaps, {name}. Like a savings account just for the business. Strong cash reserves let you survive periods when money goes out faster than it comes in. Experts often recommend businesses keep enough cash reserves to cover 3 to 6 months of expenses, in case revenue temporarily disappears. For individuals, an emergency fund of 3 to 6 months of living expenses serves the same purpose. Cash reserves aren't profit. They're insurance against the timing of cash flows.` },
            { word: `accounts receivable`,
              definition: `Money customers owe your business but haven't paid yet. It shows up as an asset on your balance sheet, but it isn't cash — you can't pay employees with it. Slow-paying customers create cash flow problems.`,
              audioPrompt: `Accounts receivable is money that customers OWE your business but haven't paid yet, {name}. When you sell something and let the customer pay later, you create accounts receivable. It shows up as an asset on your balance sheet because the money is owed to you. But it's not the same as cash. You can't pay employees with accounts receivable. If customers pay slowly — or not at all — your cash flow suffers even if your profit looks good. Tracking accounts receivable is critical for avoiding cash flow problems.` },
          ],
        },

        {
          id: `l11-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Timing Is Everything`,
          paragraphs: [
            `In cash flow, TIMING matters more than amounts. A business with $1,000,000 in annual revenue could be a CASH FLOW DISASTER if all $1M arrives in December but they have to pay $80,000 in expenses each month. Eleven months of negative cash flow before any positive cash arrives. Meanwhile, a smaller business with $500,000 annual revenue collected evenly each month is in much better shape. Same business size, completely different cash flow situation.`,
            `This is why businesses pay close attention to PAYMENT TERMS. When do customers actually pay? Net-30 (within 30 days)? Net-60 (within 60 days)? Up front? Subscription? Each affects cash flow differently. Subscription businesses (like Coreverse, Netflix, gym memberships) have GREAT cash flow because they get paid monthly, predictably, in advance. Construction companies often have BAD cash flow because they pay for materials and labor up front, then wait months to get paid. Smart entrepreneurs structure their businesses with cash flow in mind, not just profit.`,
          ],
          image: `/ue-assets/money/l11-s3-timing.webp`,
          imageCaption: `When money arrives matters as much as how much. Subscription beats project-based.`,
          vocab: [
            { word: `payment terms`,
              definition: `The agreement about when customers pay for products or services. Net-30 means within 30 days. Net-60 means within 60 days. Up front means at the time of purchase. Affects cash flow dramatically.`,
              audioPrompt: `Payment terms are the agreement about when customers actually pay for products or services, {name}. Net-30 means within 30 days of the invoice. Net-60 means within 60 days. Up front means at the time of purchase. Subscription means recurring monthly payments. Each set of payment terms affects cash flow dramatically. Faster payment terms (up front, subscription) mean better cash flow. Slower payment terms (net-30, net-60) mean cash gaps the business has to manage. Smart entrepreneurs negotiate payment terms carefully, especially when starting out.` },
            { word: `invoice`,
              definition: `A document a business sends to a customer requesting payment for goods or services delivered. Lists what was sold, how much it costs, and when payment is due (the payment terms).`,
              audioPrompt: `An invoice is a document a business sends to a customer requesting payment for goods or services delivered, {name}. Like a formal bill. An invoice lists what was sold, how much it costs, and when payment is due (the payment terms). When a business sends an invoice with net-30 terms, the customer has 30 days to pay. The invoice starts the clock on payment terms. Fast payment helps cash flow. Late payment hurts it. Businesses track unpaid invoices carefully.` },
          ],
        },

        {
          id: `l11-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Managing Cash Flow Well`,
          paragraphs: [
            `Businesses with healthy cash flow do several things differently. They TRACK cash flow weekly or monthly, not just annually. They MAINTAIN cash reserves equal to 3-6 months of expenses. They negotiate FASTER PAYMENT TERMS with customers (deposits, partial payments up front, subscription pricing). They negotiate SLOWER PAYMENT TERMS with suppliers (paying 30 days after delivery instead of in advance). They WATCH for warning signs: customers paying later, revenue slowing, expenses creeping up.`,
            `For PEOPLE (not just businesses), cash flow matters too. Your personal cash flow is your income minus expenses each month (covered in L05). Positive personal cash flow = wealth building. Negative personal cash flow = debt growing. The same principles apply: track it, build cash reserves (emergency fund), and watch for warning signs. Ace's note: cash flow gets less attention than profit because profit sounds more exciting. But cash flow is what actually keeps businesses and people alive. Master cash flow, and almost everything else gets easier.`,
          ],
          image: `/ue-assets/money/l11-s4-managing.webp`,
          imageCaption: `Track. Reserve. Negotiate. Watch. The habits of strong cash flow.`,
          vocab: [
            { word: `subscription`,
              definition: `A business model where customers pay recurring (usually monthly) fees for ongoing service. Excellent for cash flow because revenue is predictable and arrives evenly. Netflix, Spotify, and Coreverse all use this model.`,
              audioPrompt: `A subscription is a business model where customers pay recurring fees for ongoing service, {name}. Usually monthly or yearly. Excellent for cash flow because revenue is predictable and arrives evenly each month. Netflix, Spotify, Coreverse, gym memberships, and software like Microsoft 365 all use subscription models. From the customer side, subscriptions can be great (smooth payments) or sneaky (forgotten subscriptions drain accounts). From the business side, subscriptions are the holy grail because they smooth out cash flow and make growth more predictable. Many modern businesses are moving toward subscription models.` },
            { word: `burn rate`,
              definition: `How fast a business spends money each month. A company with $50,000/month burn rate and $300,000 in reserves has 6 months of runway. Critical for startups spending before revenue is stable.`,
              audioPrompt: `Burn rate is how fast a business spends money each month, {name}. Usually measured as total monthly expenses. A company spending 50,000 dollars per month has a 50,000 dollar burn rate. With 300,000 dollars in cash reserves, that's 6 months of runway. After that, the money runs out. Startups track burn rate carefully because they're usually spending before revenue is stable. Investors ask about burn rate to understand how long a company can survive without more funding. Lower burn rate means more time.` },
          ],
        },

        {
          id: `l11-game`,
          type: `interactive`,
          format: `investigation`,
          guideText: `Investigation time, {name}. Four business scenarios. For each one, identify what's happening: HEALTHY CASH FLOW (smooth money flow, sustainable), CASH FLOW PROBLEM (timing issue threatening survival), or NOT REALLY ABOUT CASH FLOW (the problem is something else)?\n\nOne is sneakier than it looks.`,
          options: [
            { id: `healthy`,    label: `Healthy Cash Flow`,    color: `#34D399`, description: `Money flows in smoothly, expenses are covered, reserves are growing.` },
            { id: `problem`,    label: `Cash Flow Problem`,    color: `#F87171`, description: `The business may be profitable, but timing is creating dangerous gaps.` },
            { id: `not-flow`,   label: `Not About Cash Flow`,  color: `#60A5FA`, description: `Whatever is going wrong, it's not really a cash flow issue — it's something else.` },
          ],
          cases: [
            {
              id: `case-1`,
              caseTitle: `Business #1`,
              clues: [
                { text: `An online subscription service charges $10/month per customer.` },
                { text: `They have 5,000 customers, generating $50,000/month, due on the 1st of each month.` },
                { text: `Monthly expenses are $35,000. They have $200,000 in cash reserves.` },
              ],
              correctAnswer: `healthy`,
              realWorldExample: `Subscription businesses with strong reserves are cash-flow ideal.`,
              explanation: `Predictable monthly revenue. Solid margin. Strong reserves. Pure healthy cash flow. This is why subscription businesses (Netflix, Spotify, Coreverse) are favored by investors.`,
            },
            {
              id: `case-2`,
              caseTitle: `Business #2`,
              clues: [
                { text: `A construction company has $2M in project contracts for the year.` },
                { text: `They pay workers and material suppliers weekly, totaling $30,000 per week.` },
                { text: `Customers pay them 60 days after each project is finished. Cash reserves are just $20,000.` },
              ],
              correctAnswer: `problem`,
              realWorldExample: `Construction companies often face cash flow crises.`,
              explanation: `Big project value, but cash going out way faster than coming in. Reserves can't cover even a single week's expenses while waiting for customer payments. Pure cash flow problem. This is one of the most common failures in construction and consulting.`,
            },
            {
              id: `case-3`,
              caseTitle: `Business #3`,
              clues: [
                { text: `A retail store has good monthly sales and pays its bills on time.` },
                { text: `Cash flow is positive each month.` },
                { text: `But the owner is unhappy because their competitor just opened a similar store one block away with lower prices.` },
              ],
              correctAnswer: `not-flow`,
              realWorldExample: `Competition is a different kind of business risk than cash flow.`,
              explanation: `Cash flow is fine. Bills paid. The real problem is COMPETITION, which is about market position and pricing strategy. Pure "not about cash flow." Smart business analysis means knowing which kind of problem you actually have.`,
            },
            {
              id: `case-4`,
              caseTitle: `Business #4 — The Tricky One`,
              clues: [
                { text: `A small bakery has been "profitable" for 6 months according to their accountant.` },
                { text: `But the owner constantly worries about whether they can make next week's payroll.` },
                { text: `Their bank account often dips below $1,000 before customer payments arrive.` },
              ],
              correctAnswer: `problem`,
              realWorldExample: `Many small profitable businesses face this exact stress.`,
              explanation: `Tricky because the accountant says PROFITABLE. The owner is right to worry. Profit on paper doesn't pay payroll. If the bank account regularly dips toward zero, they have a cash flow problem despite paper profits. Pure cash flow problem (just hidden by accounting numbers). Lesson: when your accountant says profitable but you're stressed about money every week, trust your stress more than the accountant. Cash flow is reality. Profit is the story.`,
            },
          ],
        },

        {
          id: `l11-quiz`,
          type: `quiz`,
          guideText: `Let's see what stuck, {name}.`,
          questions: [
            { id: `l11-q1`, format: `multiple-choice`,
              question: `What is CASH FLOW?`,
              options: [
                `Just profit by another name`,
                `The actual movement of real money in and out of accounts over time — different from profit`,
                `Money in a piggy bank`,
                `Income only`,
              ],
              correctIndex: 1,
              explanation: `Cash flow tracks actual money moving through actual accounts. Different from profit, which uses accounting rules over longer periods. Many profitable businesses have negative cash flow because timing of money in and out creates gaps.` },

            { id: `l11-q2`, format: `multiple-choice`,
              question: `Why can a PROFITABLE business still fail?`,
              options: [
                `It can't`,
                `Because money going out (expenses) can happen BEFORE money coming in (customer payments), creating gaps that drain the business`,
                `Bad weather`,
                `Bad luck`,
              ],
              correctIndex: 1,
              explanation: `Timing kills profitable businesses. Pay for ingredients today. Get paid by customers in 60 days. If you can't bridge that gap, you fail despite being profitable. Cash is reality; profit is the story.` },

            { id: `l11-q3`, format: `multiple-choice`,
              question: `What are CASH RESERVES?`,
              options: [
                `Profit`,
                `Money kept available for emergencies and timing gaps — like insurance against cash flow problems`,
                `Just savings`,
                `Investment accounts`,
              ],
              correctIndex: 1,
              explanation: `Cash reserves bridge the gap between cash going out and cash coming in. Experts recommend businesses keep 3-6 months of expenses in reserves. For individuals, emergency funds serve the same purpose.` },

            { id: `l11-q4`, format: `multiple-choice`,
              question: `What are PAYMENT TERMS?`,
              options: [
                `The price`,
                `The agreement about when customers actually pay — net-30, net-60, up front, subscription, etc.`,
                `Taxes`,
                `Discounts`,
              ],
              correctIndex: 1,
              explanation: `Payment terms decide WHEN money arrives. Net-30 (within 30 days), Net-60 (within 60 days), up front, subscription. Faster payment terms mean better cash flow. Slower payment terms mean cash gaps to manage.` },

            { id: `l11-q5`, format: `true-false`,
              question: `True or false: SUBSCRIPTION businesses generally have BETTER cash flow than businesses that get paid only after projects finish.`,
              correctAnswer: true,
              explanation: `True. Subscriptions get paid monthly, predictably, in advance. Project-based work waits weeks or months for payment after costs are paid. Subscription businesses (Netflix, Spotify, Coreverse) have famously strong cash flow.` },

            { id: `l11-q6`, format: `multiple-choice`,
              question: `What's the famous saying about revenue, profit, and cash?`,
              options: [
                `They're all the same`,
                `"Revenue is vanity, profit is sanity, but cash is reality" — meaning cash flow is what actually keeps businesses alive`,
                `Revenue is best`,
                `Profit is the only thing that matters`,
              ],
              correctIndex: 1,
              explanation: `Revenue sounds impressive (vanity). Profit suggests you're running things sensibly (sanity). But cash is what actually pays the bills (reality). Many businesses have huge revenue and look profitable, then fail because cash doesn't arrive in time.` },

            { id: `l11-q7`, format: `multiple-choice`,
              question: `How do businesses with HEALTHY cash flow manage it?`,
              options: [
                `They ignore it`,
                `Track it weekly/monthly, maintain 3-6 months of cash reserves, negotiate faster payment terms with customers, watch for warning signs`,
                `Just hope`,
                `Borrow when needed`,
              ],
              correctIndex: 1,
              explanation: `Healthy cash flow comes from active management. Tracking, reserving, negotiating, monitoring. Healthy businesses don't just "have" good cash flow — they actively manage it through habits and policies.` },

            { id: `l11-q8`, format: `multiple-choice`,
              question: `Does cash flow apply to INDIVIDUALS, not just businesses?`,
              options: [
                `Only businesses`,
                `Yes — personal cash flow is income minus expenses each month, and the same principles apply (track, build reserves, watch for trouble)`,
                `Only big companies`,
                `Only the very rich`,
              ],
              correctIndex: 1,
              explanation: `Personal cash flow matters as much as business cash flow. The same principles apply. Income minus expenses each month. Building reserves for emergencies. Watching for warning signs. People who manage personal cash flow well stay financially healthy.` },
          ],
        },

        {
          id: `l11-reflection`,
          type: `reflection`,
          guideText: `Before we wrap, {name}, pick ONE question and actually answer it. Your response gets saved, and I'll remember it next time we talk.`,
          prompts: [
            { id: `r1`, text: `Think about a small business in your neighborhood. Do you think their cash flow comes in evenly or in lumps? What clues tell you?` },
            { id: `r2`, text: `If you started a business today, would you want a SUBSCRIPTION model (predictable monthly income) or a PROJECT model (bigger lumps, but irregular)? Why?` },
            { id: `r3`, text: `Imagine you were a baker getting paid 60 days after each cake. How much cash would you want in your reserves before you felt safe?` },
            { id: `r4`, text: `In your own life, what does YOUR cash flow look like (kid version)? Money in (allowance, gifts) minus money out (snacks, gifts, hobbies). Is it positive most weeks?` },
          ],
        },

        {
          id: `l11-realworld`,
          type: `real-world`,
          guideText: `Cash flow gets less attention than profit because profit sounds more exciting. But cash flow is what actually keeps businesses and people alive. The most successful entrepreneurs you'll read about understand this deeply. Many startup founders learn the hard way after near-disasters. Coreverse is a subscription business specifically because subscription cash flow is healthier than project-based or one-time sales. Same lessons apply to your future. Whether you start a business or just manage your own money, cash flow awareness saves you from problems that destroy people who only think about profit.`,
          familyAdventure: `Family Cash Flow Simulation. As a family, pick a fake business. Map out one month: when does money come in (customer payments)? When does it go out (rent, supplies, salaries)? Where do the gaps appear? How much cash would you need in reserves to survive the gaps? This exercise reveals why so many small businesses struggle even when they "look" profitable.`,
          creativePrompt: {
            intro: `Imagine you're starting a business and the CHOICE between two business models. Write a quick analysis of which has better cash flow.`,
            floor: `Write at least 5 sentences. Compare a subscription model and a project-based model. Cover when money arrives, when expenses go out, and which has smoother cash flow.`,
            stretch: `Write 8 to 10 sentences. Include monthly cash flow patterns, cash reserve needs, and what each model looks like in good vs bad months.`,
            open: `Write as much as you want. Build a full analysis. Compare subscription vs project-based. Calculate monthly cash flow for each. Discuss reserve requirements, growth implications, and which type of business would let you sleep better at night.`,
            frames: [
              `Two business models I'd consider: ___ (subscription) and ___ (project-based).`,
              `With the subscription model, cash arrives ___.`,
              `With the project-based model, cash arrives ___.`,
              `The cash flow risk is higher with ___ because ___.`,
              `For my first business, I'd choose ___ because ___.`,
            ],
          },
        },

        {
          id: `l11-celebration`,
          type: `celebration`,
          message: `Great work, {name}. You can now explain cash flow, the difference between cash flow and profit, why timing matters, why subscriptions are great for cash flow, and how to manage cash flow well. Next lesson: how WORK ITSELF is changing in the modern economy. THE GIG ECONOMY AND FUTURE OF WORK. — Ace.`,
          badge: `cash-flow-pro`,
          badgeName: `Cash Flow Pro`,
          xpEarned: 75,
        },
      ],
    },
  ],
};

export default MONEY_UE_L11;

// ─── Dev asset check ──────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const screens = MONEY_UE_L11.lessons[0].screens;
  const mags = screens.filter(s => s.type === 'magazine').length;
  const game = screens.find(s => s.type === 'interactive')?.cases?.length ?? 0;
  const quiz = screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  const refl = screens.find(s => s.type === 'reflection')?.prompts?.length ?? 0;
  const totalVocab = screens.filter(s => s.type === 'magazine').reduce((sum, s) => sum + (s.vocab?.length || 0), 0);
  console.log(`[LESSON-MONEY-UE-L11 v1] Loaded with ${mags} magazine sections, ${totalVocab} vocab terms, ${game} game cases, ${quiz} quiz Qs, ${refl} reflection prompts`);
}
