// ─────────────────────────────────────────────────────────────────────────────
// MONEY & BUSINESS VOYAGER  |  L17 — Insurance and Risk
// Age band : voyagers (11-12)   Guide: ace (Eagle)
// Standards: Coreverse Original — Personal Finance, Risk Management
// CALIBRATED: Voyager spec v1.1 (May 2026)
// Interaction format: CASE STUDY (when insurance protects, when it robs)
// ─────────────────────────────────────────────────────────────────────────────

const VERSION = "voyager-mb-l17-v1";

const MONEYBUSINESS_VOYAGER_L17 = {
  ageBand: `voyagers`,
  subjectId: `money-business`,
  guide: `ace`,

  lessons: [
    {
      id: `mb-11-12-17`,
      title: `Insurance and Risk`,
      duration: 35,
      xpReward: 75,
      badge: `risk-thinker`,
      badgeName: `Risk Thinker`,

      screens: [
        {
          id: `l17-welcome`,
          type: `welcome`,
          guideText: `{name}, insurance is one of the most poorly understood financial decisions. Most adults pay for some insurance that genuinely protects them and other insurance that's quietly draining their finances. The same word, "insurance," covers radically different products: health insurance that protects you from medical catastrophe, life insurance that protects your family if you die, car warranties that mostly transfer money from you to the seller, extended product warranties that rarely pay out. Today we walk through real insurance scenarios with real math. By the end you'll be able to evaluate any insurance offer and know whether it's protection or extraction.`,
          headline: `Insurance and Risk`,
          subtitle: `Same word, very different products. Some protect, some extract.`,
          visual: `/voyager-assets/money-business/l17-welcome.webp`,
        },

        {
          id: `l17-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `What Insurance Actually Is`,
          paragraphs: [
            `Insurance is a financial product where you pay regular small amounts (premiums) in exchange for protection against rare large costs. Health insurance: you pay $400/month so that a $300,000 hospital bill doesn't bankrupt your family. Car insurance: you pay $100/month so that totaling someone's car doesn't ruin you. Home insurance: you pay $1,200/year so that a house fire doesn't leave you homeless and broke.`,
            `The basic economics work because insurance pools risk across many people. Out of 10,000 households paying $1,200/year for home insurance, only a tiny fraction will have major claims in any given year. The premiums from all 10,000 households cover those rare claims plus the insurance company's costs and profit. The math works for everyone because the alternative (each household individually facing potential catastrophic losses) is much worse than the alternative (each household paying small predictable premiums to share risk).`,
            `Insurance is most valuable when three conditions are met. First: the potential loss is large enough to be financially devastating. Second: the loss is unlikely enough that the premium is small relative to the protection. Third: you can't easily afford to "self-insure" by absorbing the loss out of savings. These three conditions are met for health, life, home, and auto insurance for most people. They're often not met for product warranties, accidental death policies, and many other "insurance" products marketed to consumers.`,
          ],
          image: `/voyager-assets/money-business/l17-s1-insurance.webp`,
          imageCaption: `Insurance: pay regular small amounts to protect against rare large costs.`,
          vocab: [
            {
              word: `premium`,
              definition: `The regular payment you make for insurance coverage. Monthly, quarterly, or annual. The price you pay for protection from potential losses.`,
              audioPrompt: `A premium is the regular payment you make for insurance coverage, {name}. Monthly, quarterly, or annual. The price you pay for protection from potential losses. If your car insurance costs $100 a month, that 100 dollars is your premium. Premiums vary based on what's being insured, your risk profile, the deductible, and the coverage amount. Higher coverage limits and lower deductibles cost more in premiums. Insurance companies set premiums based on actuarial calculations: what's the expected cost of claims for someone like you, plus their costs and profit margin. The premium isn't designed to be "fair" to you specifically; it's designed to be profitable across the pool.`,
            },
            {
              word: `risk pooling`,
              definition: `The mechanism behind insurance: many people pay small premiums to share the cost of rare large losses. Out of 10,000 households paying $1,200/year, only a few have major claims. Everyone benefits from sharing the risk.`,
              audioPrompt: `Risk pooling is the mechanism behind insurance, {name}. Many people pay small premiums to share the cost of rare large losses. Out of 10,000 households each paying $1,200 per year for home insurance, only a few will have major claims in any given year. The premiums from all 10,000 households cover those rare claims plus the insurance company's costs and profit. The math works for everyone because the alternative, each household individually facing potential catastrophic loss, is much worse than each household paying small predictable premiums to share the risk. Risk pooling is why insurance is valuable for catastrophic unpredictable events but wasteful for common predictable ones.`,
            },
            {
              word: `deductible`,
              definition: `The amount you pay out of pocket before insurance coverage kicks in. Higher deductibles mean lower premiums. Choosing a higher deductible on appropriate policies is a way to reduce premium costs while maintaining catastrophic coverage.`,
              audioPrompt: `A deductible is the amount you pay out of pocket before insurance coverage kicks in, {name}. If your health insurance has a $2,000 deductible, you pay the first $2,000 of medical costs yourself. After that, insurance covers the rest up to the policy limit. Higher deductibles mean lower premiums because you're taking on more of the smaller losses yourself. Choosing a higher deductible on appropriate policies is a smart way to reduce premium costs while maintaining the catastrophic coverage that matters. If you have $5,000 in emergency savings, a $2,000 deductible is manageable. If you have no savings, a high deductible may expose you to costs you can't cover.`,
            },
          ],
        },

        {
          id: `l17-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `When Insurance Protects (Catastrophic Risk)`,
          paragraphs: [
            `Health insurance for catastrophic events is the most universally important insurance for almost everyone. A serious illness or accident can produce $100,000-$1,000,000+ in medical bills. Without insurance, even one bad year of medical events can bankrupt a household for life. The premium ($400-1,500/month for a family in 2026, depending on plan and employer subsidy) is small relative to the protection. Health insurance is required by law in most US states; the rest mandate it through tax penalty.`,
            `Life insurance is valuable when you have dependents who would suffer financially if you died. A parent with young children typically needs life insurance: if they die, their family loses their income. Term life insurance (covering specific years, like 20-year terms) is much cheaper than whole life insurance. A healthy 35-year-old can typically buy $500,000 of 20-year term life insurance for $25-50/month. The premium is small. The protection is large. The math strongly favors term life for most parents.`,
            `Auto liability insurance protects you from the financial consequences of causing accidents that injure other people. The protection isn't just for your car; it's for the potential lawsuit if you injure someone or damage their property. Minimum liability coverage required by most states is too low for serious accidents; financial advisors typically recommend $250,000+ per person, $500,000+ per accident, plus separate umbrella coverage for higher-asset households.`,
            `Home insurance (if you own a home) or renters insurance (if you rent) protects against major property losses: fire, theft, certain natural disasters, plus liability from accidents on your property. Renters insurance is remarkably cheap ($10-25/month in most areas) and covers thousands of dollars of personal property plus liability. Most renters don't have it; most should.`,
          ],
          image: `/voyager-assets/money-business/l17-s2-protect.webp`,
          imageCaption: `Catastrophic insurance: small premiums, real protection from financial ruin.`,
          vocab: [
            {
              word: `term life insurance`,
              definition: `Life insurance covering specific years (typically 10-30 year terms). Much cheaper than whole life insurance. Strongly recommended for most parents with dependents.`,
              audioPrompt: `Term life insurance is life insurance covering specific years, typically 10 to 30 year terms, {name}. Much cheaper than whole life insurance. Strongly recommended for most parents with dependents. A healthy 35-year-old can typically buy 500,000 dollars of 20-year term life insurance for 25 to 50 dollars per month. If they die during the 20 years, their family receives 500,000 dollars. If they survive the 20 years, the policy ends with no payout. The simplicity and low cost make term life the right insurance for most parents. Whole life insurance, which is permanent and includes a savings component, is usually a much worse deal but is heavily marketed because commissions are higher.`,
            },
            {
              word: `renters insurance`,
              definition: `Insurance for tenants that covers personal property against theft and damage plus liability from accidents on the property. Typically $10-25/month — remarkably cheap for the protection it provides. Most renters don't have it; most should.`,
              audioPrompt: `Renters insurance is insurance for tenants covering personal property against theft and damage, plus liability from accidents on the property, {name}. It is remarkably cheap, typically $10 to $25 per month in most areas. That covers thousands of dollars of personal property plus liability protection. Most renters don't have renters insurance, which means they're one theft or fire away from losing everything without any recourse. Unlike homeowners insurance, which is required by mortgage lenders, renters insurance is optional. That makes it one of the most underutilized and undervalued insurance products available. If you rent, renters insurance is almost always worth it given the low premium relative to the protection it provides.`,
            },
            {
              word: `liability coverage`,
              definition: `Insurance protecting you from financial consequences when you injure others or damage their property. Auto liability, home liability, and umbrella policies cover this. Often the most important component of insurance for preventing catastrophic financial loss.`,
              audioPrompt: `Liability coverage is insurance protecting you from financial consequences when you injure others or damage their property, {name}. In auto insurance, liability covers the cost of injuring someone in an accident you caused: their medical bills, their car repairs, and any lawsuit damages. In home insurance, liability covers accidents on your property where someone is injured and sues you. The catastrophic risk in many insurance situations isn't damage to your own property; it's potential lawsuits from others that can exceed all your savings. This is why financial advisors recommend liability coverage at $250,000 or more per person rather than state minimums, which are often far too low for serious accidents.`,
            },
          ],
        },

        {
          id: `l17-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `When Insurance Robs You (Low-Value Products)`,
          paragraphs: [
            `Many products marketed as "insurance" or "protection plans" are mathematically bad deals for consumers. Extended warranties on electronics (TVs, phones, laptops): industry data consistently shows that the premiums collected far exceed claims paid. Most products either don't break during the warranty period, or break in ways the warranty doesn't cover, or are cheaper to replace than to repair. The retailer's profit margin on the warranty is often 50-80% of the price.`,
            `Accidental death insurance and "double indemnity" policies are usually low-value. They pay out only if you die from a specific cause (accident, certain illnesses), which is statistically rare. They're often marketed alongside credit cards or through aggressive advertising. The premiums are low because the payouts are rare. A regular term life insurance policy covers all causes of death and is usually a better deal.`,
            `Mortgage insurance (PMI, paid by homebuyers with less than 20% down payment) is legally required by lenders but isn't insurance for you—it protects the lender if you default. You pay; lender benefits. The amount is significant ($100-300/month on typical mortgages). One reason many financial advisors recommend saving for 20% down payment is to avoid PMI entirely.`,
            `Travel insurance, especially the kind offered at booking checkout for $30-50 per trip, is usually low-value. The conditions for actually getting paid out are restrictive (specific covered reasons for cancellation, with documentation). Most travelers who buy it never use it. The same goes for "insurance" on rental cars (your existing auto insurance and credit card protection often already cover what they're selling).`,
            `Whole life insurance and universal life insurance are insurance products that combine death benefit with a savings component. They're heavily marketed because commissions are very high. The math almost always favors "buy term and invest the difference": purchase cheaper term life insurance and invest what you would have paid in whole life premiums in index funds. Whole life premiums typically far exceed what equivalent term insurance plus investment would have produced.`,
          ],
          image: `/voyager-assets/money-business/l17-s3-rob.webp`,
          imageCaption: `Extended warranties, accidental death, travel insurance: usually mathematical losses for consumers.`,
          vocab: [
            {
              word: `loss ratio`,
              definition: `The percentage of insurance premiums that get paid out as claims. High loss ratios (80%+) suggest the insurance is genuinely covering rare expensive events. Low loss ratios (under 50%) often indicate the insurance is mostly a profit-extraction product.`,
              audioPrompt: `Loss ratio is the percentage of insurance premiums that get paid out as claims, {name}. High loss ratios, 80 percent or more, suggest the insurance is genuinely covering rare expensive events that justify the premiums. Low loss ratios, under 50 percent, often indicate the insurance is mostly a profit-extraction product. Health insurance typically has loss ratios of 80 percent or higher because medical claims really do happen. Extended product warranties typically have loss ratios of 15 to 30 percent because the products mostly don't fail or don't fail in covered ways. Knowing the loss ratio of an insurance product tells you whether it's likely to be a good or bad deal across the pool of buyers.`,
            },
            {
              word: `extended warranty`,
              definition: `A paid protection plan offered at point of sale on electronics and appliances beyond the manufacturer warranty. Industry data shows loss ratios of 15-30%, meaning they're mostly profit for retailers. Retailer profit margins on them are often 50-80%.`,
              audioPrompt: `An extended warranty is a paid protection plan offered at point of sale on electronics and appliances beyond the manufacturer warranty, {name}. Industry data consistently shows that extended warranties have loss ratios of 15 to 30 percent. For every $80 collected, about $12 to $24 gets paid back in claims. Most products either don't break during the warranty period, or break in ways the warranty doesn't cover, or break after the warranty expires. Retailer profit margins on extended warranties are often 50 to 80 percent of the purchase price, which is why salespeople push them aggressively. Many credit cards extend manufacturer warranties for free, providing similar protection without the premium. Extended warranties are among the clearest examples of insurance marketed as protection that is actually profit extraction.`,
            },
            {
              word: `whole life insurance`,
              definition: `Permanent life insurance with a savings component built in. Much more expensive than term life. Heavily marketed because commissions are very high. Most financial advisors recommend "buy term and invest the difference" instead.`,
              audioPrompt: `Whole life insurance is permanent life insurance with a savings component built in, {name}. It is much more expensive than term life for the same death benefit. A policy that would cost $35 per month as 20-year term might cost $300 or more per month as whole life. The difference is the savings component, which earns returns inside the policy. The math almost always favors buying term life insurance and investing the premium difference in index funds instead. Whole life is heavily marketed because commissions to salespeople are very high, often 50 to 100 percent of the first-year premium. The advice "buy term and invest the difference" is the standard recommendation from independent financial advisors who don't earn commissions on product sales.`,
            },
          ],
        },

        {
          id: `l17-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Self-Insurance: When To Skip Insurance Entirely`,
          paragraphs: [
            `For some risks, the right answer is to "self-insure" by absorbing the potential loss out of savings rather than paying ongoing premiums. The math: if you can afford to absorb a potential loss without financial damage, paying premiums to transfer that risk is usually a losing deal. Insurance companies need premium revenue to exceed claims plus their costs and profit. Across the pool, customers always pay more than they get back.`,
            `Specific examples of risks worth self-insuring. Small electronics: a $30/year warranty on a $200 phone isn't worth it. If the phone breaks outside warranty conditions (which is most of the time), you replace it. Travel cancellation for trips you could afford to forfeit: $50 insurance on a $500 trip is usually a worse deal than just accepting potential loss of $500 in rare cases.`,
            `Small possessions and minor inconveniences: jewelry insurance, gadget protection plans, pet insurance for routine care, identity theft protection that mostly duplicates free credit monitoring. In each case, the premium times the time horizon usually exceeds the realistic expected losses. Self-insuring requires having savings to absorb the rare losses, but it produces better long-term outcomes for most people.`,
            `When self-insuring is wrong: anything that could cause catastrophic financial damage (major medical events, home destruction, major lawsuits, death of primary earner). For these, the rare large loss exceeds what any reasonable savings can absorb. Insurance is mathematically valuable specifically because it protects against the cases where self-insurance would fail catastrophically.`,
          ],
          image: `/voyager-assets/money-business/l17-s4-self.webp`,
          imageCaption: `Self-insure small risks. Insure catastrophic ones. The line is clear.`,
          vocab: [
            {
              word: `self-insure`,
              definition: `Absorbing potential losses out of savings rather than paying ongoing premiums. Mathematically optimal for risks that don't threaten financial stability. Requires having savings adequate to absorb the loss.`,
              audioPrompt: `Self-insuring means absorbing potential losses out of savings rather than paying ongoing premiums, {name}. Mathematically optimal for risks that don't threaten financial stability. If you can afford to replace a 200 dollar phone if it breaks, paying 30 dollars a year for a warranty is usually a losing deal across many years. Self-insuring requires having savings adequate to absorb the loss. This is one reason emergency funds are so valuable: they enable self-insuring against minor losses, which saves the premium costs across many small-risk categories over a lifetime. Insurance is for catastrophic risks. Savings cover everything below catastrophic.`,
            },
            {
              word: `catastrophic loss`,
              definition: `A financial loss so large it cannot be absorbed from normal savings and would cause long-lasting damage: a major medical event, house fire, serious lawsuit. Catastrophic risks are exactly what insurance is designed for.`,
              audioPrompt: `A catastrophic loss is a financial loss so large it cannot be absorbed from normal savings and would cause long-lasting damage, {name}. Major medical events can produce $100,000 to $1,000,000 or more in bills. Totaling someone else's car and injuring them in an accident could result in lawsuits exceeding $500,000. A house fire without insurance could leave a family homeless and deeply in debt. Catastrophic losses are exactly what insurance is designed for. The defining test for whether to buy insurance is whether the potential loss is catastrophic. If yes, insurance is almost always worth buying even when the premium feels high. If no, self-insurance with savings is often the better mathematical choice across many years.`,
            },
            {
              word: `false economy`,
              definition: `Saving money in a way that actually costs more in the long run. Dropping liability auto insurance to minimum state limits to save $25/month is a false economy: rare but catastrophic accidents leave you personally liable for hundreds of thousands.`,
              audioPrompt: `A false economy is saving money in a way that actually costs more in the long run, {name}. Dropping auto liability to state minimum to save $25 per month is a false economy. If you cause a serious accident, the state minimum of $25,000 to $50,000 may cover only a fraction of legitimate medical bills, leaving you personally liable for the rest. Your $15,000 in savings gets wiped out and you may owe hundreds of thousands. The $25 per month "savings" is a false economy because it exposed you to catastrophic financial risk. Recognizing false economies in insurance requires thinking through the rare worst-case scenarios, not just the typical year where nothing happens.`,
            },
          ],
        },

        {
          id: `l17-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Before You Walk Through The Case Study`,
          paragraphs: [
            `In the case study that follows, three adults face real insurance decisions with real math. Some of their options are protection from catastrophic loss. Some are profit-extraction products dressed up as protection. The framework from the lesson should help you walk through each.`,
            `Three questions to apply: what's the potential loss being insured against? How likely is that loss? How much would you pay across the realistic time horizon to insure it? If the answers reveal that the insurance is likely to cost more than realistic expected losses, it's usually not worth buying. If the potential loss could be financially devastating and the premium is small relative to the protection, it's usually worth buying.`,
            `One last framing: insurance is one of the financial categories where the industry's interests most directly conflict with consumers' interests. The most profitable insurance products for sellers are usually the worst deals for buyers. The least profitable products for sellers are often the best deals for buyers (which is why aggressive marketers often try to sell you whole life instead of term life). Knowing whose interests are aligned with yours and whose aren't helps you evaluate every insurance pitch you'll see.`,
          ],
          image: `/voyager-assets/money-business/l17-s5-before.webp`,
          imageCaption: `Three real insurance decisions. Three lessons in protection vs extraction.`,
          vocab: [
            {
              word: `actuarial`,
              definition: `Related to statistical calculation of risk and probability. Insurance companies employ actuaries to calculate likely claim costs. Premiums are set based on actuarial math plus margin.`,
              audioPrompt: `Actuarial means related to statistical calculation of risk and probability, {name}. Insurance companies employ actuaries to calculate likely claim costs across pools of insured customers. Premiums are set based on actuarial math plus the company's costs and profit margin. The actuarial calculations are usually accurate, which is why insurance companies are reliably profitable. The consumer's job isn't to "beat" the actuarial math, which is impossible across the pool. The consumer's job is to identify which insurance products have premiums that make sense for their specific situation, and which are bad deals despite the actuarial accuracy. Knowing this changes how you think about every insurance pitch.`,
            },
            {
              word: `commission`,
              definition: `A payment to the salesperson as a percentage of the product sold. Insurance salespeople earn high commissions on whole life policies, often 50-100% of the first-year premium. High commissions incentivize selling products that may not be best for buyers.`,
              audioPrompt: `A commission is a payment to the salesperson as a percentage of the product sold, {name}. Insurance salespeople earn high commissions on whole life policies, often 50 to 100 percent of the first-year premium. This creates a strong incentive to sell whole life rather than term life, even when term life is better for the buyer. Similarly, retailers earn high profit margins on extended warranties, often 50 to 80 percent of the warranty price, which is why cashiers are trained to push them aggressively at checkout. Understanding commission structures helps you explain why salespeople push certain products over others. The product with the highest commission to the salesperson is rarely the product with the highest value to the buyer.`,
            },
            {
              word: `three-question framework`,
              definition: `The insurance evaluation test: How catastrophic is the potential loss? How likely is it? How much would you pay in premiums across a realistic time horizon? Buy when loss is catastrophic and premium is small relative to protection. Skip when it isn't.`,
              audioPrompt: `The three-question framework is the insurance evaluation test, {name}. First: how catastrophic is the potential loss? If losing your home, income, or accumulating massive medical debt would damage your financial life for years, that's catastrophic. Second: how likely is that loss? Rare but catastrophic is where insurance shines. Common and moderate is where self-insurance is often better. Third: how much would you pay in premiums across a realistic time horizon? Compare that to the realistic expected payout. Buy when the potential loss is catastrophic and the premium is small relative to the protection. Skip most extended warranties, travel insurance on modest trips, and other low-value products where realistic expected payouts rarely exceed premium costs.`,
            },
          ],
        },

        // ───── CASE STUDY ─────────────────────────────────────────────────────
        {
          id: `l17-case-study`,
          type: `case-study`,
          headline: `Three Adults, Different Insurance Decisions`,
          intro: `Three adults face insurance decisions with real math. Walk through each one and apply the framework.`,
          scenario: `Maria, James, and Aisha each face different insurance decisions in their lives. Their situations are different. Their right answers are different. Apply the framework to each.`,
          decisions: [
            {
              id: `decision-1`,
              prompt: `Maria: 35, married with two young kids, household income $130,000, primary earner. Has employer-provided life insurance worth $50,000 (one year's salary). Considering buying additional life insurance.`,
              options: [
                {
                  id: `maria-skip`,
                  label: `Skips additional life insurance. Figures the employer policy is enough.`,
                  consequence: `If Maria dies, her family loses her income permanently. The $50,000 employer policy covers about 5-6 months of family expenses. Her kids could need 15+ more years of support before being financially independent. The family could lose their home, the kids could lose educational opportunities, the surviving spouse might have to take any available work. The "free employer policy" is rarely enough for a parent with dependents. Skipping additional coverage is usually wrong for primary earners with young kids.`,
                },
                {
                  id: `maria-term`,
                  label: `Buys $750,000 of 20-year term life insurance for $35/month. Continues until kids are independent.`,
                  consequence: `Solid decision. The premium is small ($420/year). The protection covers the family if Maria dies during the years the kids are most dependent. If Maria survives the 20 years (very likely), the policy ends. Total cost across 20 years: ~$8,400. Total protection during those years: $750,000. The math heavily favors this for a parent with dependents. This is what financial advisors recommend for most parents.`,
                },
                {
                  id: `maria-whole`,
                  label: `Buys $250,000 of whole life insurance for $300/month, sold by an aggressive insurance salesperson who emphasizes "the savings component."`,
                  consequence: `Almost always bad math. Premium is $3,600/year. Across 20 years that's $72,000. The "savings component" of whole life policies typically earns much less than equivalent investment in index funds would. The salesperson is incentivized by high commissions on whole life (often 50-100% of first-year premium goes to commission). Maria could have bought $750,000 of term life for $35/month and invested the other $265/month in index funds, ending up with both more insurance during the critical years AND more total assets after 20 years.`,
                },
              ],
            },
            {
              id: `decision-2`,
              prompt: `James: 28, single, healthy, no dependents, owns no property, drives a 10-year-old paid-off car worth $4,000, has $15,000 in emergency savings, salary $65,000.`,
              options: [
                {
                  id: `james-full-coverage`,
                  label: `Carries full coverage auto insurance ($150/month) including collision and comprehensive on his $4,000 car.`,
                  consequence: `The math is bad for an old car. Maximum payout from comprehensive coverage on a $4,000 car: about $4,000 (the car's value). James pays $1,800/year for this. If his car is destroyed in year 3, he's paid $5,400 to maybe get $4,000 back. Better approach: drop comprehensive coverage and self-insure for the car's value. He'd save about $50/month, which adds up to $600/year, far more than the realistic expected losses.`,
                },
                {
                  id: `james-liability-only`,
                  label: `Drops collision and comprehensive on his old car. Keeps liability insurance at $250K/$500K levels for accidents he might cause.`,
                  consequence: `Mathematically sound. He saves about $50/month ($600/year) by dropping coverage that wouldn't pay out much on his low-value car. He keeps the liability coverage that protects against the genuinely catastrophic risk: injuring someone else in an accident, which could result in lawsuits exceeding his $15K savings. He self-insures the car (his savings exceed its value). He insures the catastrophic legal/medical risk he can't absorb. This is exactly what the framework suggests.`,
                },
                {
                  id: `james-minimum`,
                  label: `Drops to state minimum liability ($25K/$50K, the legal minimum). Saves another $25/month.`,
                  consequence: `Bad call. State minimum liability is usually woefully inadequate for serious accidents. If James causes an accident that injures someone seriously, the minimum coverage might cover $50K of $200K in legitimate medical bills. He's personally liable for the difference. His $15K savings would be wiped out and he'd be in debt for years. The $25/month "savings" exposes him to potentially hundreds of thousands of dollars of personal liability. False economy.`,
                },
              ],
            },
            {
              id: `decision-3`,
              prompt: `Aisha: 45, recently bought a $300 phone. The cashier offers a "Protection Plan" for $80/2 years that covers screen cracks, water damage, and theft.`,
              options: [
                {
                  id: `aisha-buy`,
                  label: `Buys the protection plan because "you never know" and the salesperson is persuasive.`,
                  consequence: `Across 2 years, Aisha pays $80 in premium. Industry data suggests electronics warranty programs have loss ratios of 15-30% (claims paid divided by premiums collected). Translated: for every $80 collected, about $12-24 gets paid back to consumers across all claims. Aisha is statistically much more likely to either not break the phone, break it in a way the plan doesn't cover (worn battery, software issues), or have a successful claim process that's complicated enough that many consumers give up. Most likely outcome: she pays $80 and gets nothing back.`,
                },
                {
                  id: `aisha-skip`,
                  label: `Skips the protection plan. Uses a $20 phone case and $15 screen protector instead.`,
                  consequence: `Spends $35 instead of $80. The physical protection actually prevents most damage that warranties claim to cover. If the phone breaks despite the case, she pays for repair or replacement out of her emergency fund. Across many devices over many years, this approach costs less than buying warranties for everything. The framework: a $300 phone isn't a financial catastrophe; she can absorb the rare loss. Better to self-insure with savings and physical protection.`,
                },
                {
                  id: `aisha-credit-card`,
                  label: `Skips the store protection plan. Checks if her credit card already provides extended warranty or purchase protection (many do for free).`,
                  consequence: `Smart move. Many credit cards extend manufacturer warranties or provide purchase protection automatically, at no cost. Aisha gets effective protection without paying premium. She self-insures the small remaining risk that her credit card protection doesn't cover. Better outcome than paying for the store plan, with similar protection. This is a real benefit of using cards that offer this perk; many consumers don't realize they have it.`,
                },
              ],
            },
            {
              id: `decision-4`,
              prompt: `All three are now considering whether to buy travel insurance for an upcoming $1,200 flight. The airline offers it at checkout for $80.`,
              options: [
                {
                  id: `travel-buy`,
                  label: `All three buy travel insurance at checkout to "be safe."`,
                  consequence: `Airline-checkout travel insurance is notoriously low-value. The conditions for actually being reimbursed are restrictive (specific covered reasons with documentation). Industry data suggests most buyers never use it. The 80 dollars goes mostly to airline profit. For a 1,200 dollar flight, the rare loss isn't financial catastrophe for any of them, and the realistic expected payout is much less than 80 dollars. Bad math across the population of buyers.`,
                },
                {
                  id: `travel-skip`,
                  label: `All three skip travel insurance. Their existing health insurance covers emergencies abroad; their credit cards may provide some trip protection; they accept that rare cancellation costs come out of savings.`,
                  consequence: `Mathematically sound for all three. The premium across many trips would exceed the realistic claims they'd actually receive. For someone with adequate emergency savings, accepting rare $1,200 trip cancellation costs over a lifetime of travel is cheaper than insuring every trip. Travel insurance is mostly worth buying for very expensive non-refundable trips (cruises, multi-thousand-dollar package vacations) by people who couldn't easily absorb the loss.`,
                },
                {
                  id: `travel-expensive`,
                  label: `For this specific $1,200 flight: skip. For Aisha's upcoming $8,000 once-in-a-lifetime African safari (non-refundable), consider buying it.`,
                  consequence: `Differentiated approach. For ordinary $1,200 trips, the math favors skipping. For non-refundable expensive trips that would be a real financial loss if cancelled, travel insurance can be worth it (especially comprehensive policies bought from independent insurers, not from the airline at checkout). The principle: insurance is for catastrophic loss, not for routine inconvenience. Apply that across all insurance decisions.`,
                },
              ],
            },
          ],
          debrief: [
            `Pattern across all four: insurance is mathematically valuable specifically for catastrophic risks the buyer can't absorb. It's mathematically wasteful for everyday risks the buyer could self-insure with reasonable savings.`,
            `The most aggressively marketed insurance products are often the worst deals: whole life vs term life, extended warranties at checkout, travel insurance at booking, accidental death policies, mortgage protection insurance. The aggressive marketing exists because the products are very profitable for sellers, which means they're bad deals for buyers across the pool.`,
            `Self-insurance through adequate emergency savings allows you to skip many insurance products that would be losses across a lifetime. This is one of the underappreciated benefits of building emergency savings: you save the premiums you'd otherwise pay on many low-value insurance products.`,
            `The three-question framework holds: How catastrophic is the potential loss? How likely is it? How much would you pay across the realistic time horizon? For catastrophic + unlikely + small premium: buy insurance. For moderate + likely + large premium across many years: usually don't buy.`,
            `Most adults pay for some insurance that doesn't help them. Walking through this framework once typically saves a household $500-3,000/year in unnecessary insurance premiums that compound across decades.`,
          ],
        },

        {
          id: `l17-quiz`,
          type: `quiz`,
          headline: `Check your understanding`,
          questions: [
            {
              id: `q1`,
              type: `multiple-choice`,
              question: `What is insurance, fundamentally?`,
              options: [
                `Government welfare`,
                `A financial product where you pay regular small amounts (premiums) in exchange for protection against rare large costs; pools risk across many people so the math works for everyone`,
                `Investment in stocks`,
                `Free protection`,
              ],
              correctIndex: 1,
              explanation: `Insurance is most valuable when the potential loss is catastrophic and the premium is small relative to the protection. Understanding this lets you evaluate any insurance pitch.`,
            },
            {
              id: `q2`,
              type: `multiple-choice`,
              question: `When is insurance most valuable?`,
              options: [
                `For every possible risk`,
                `When the potential loss is large enough to be financially devastating, AND the loss is unlikely enough that the premium is small relative to protection, AND you can't easily self-insure with savings`,
                `When premiums are highest`,
                `For new purchases only`,
              ],
              correctIndex: 1,
              explanation: `All three conditions matter. Catastrophic potential + unlikely event + can't self-insure = insurance is valuable. Miss any one of these and the math often doesn't work.`,
            },
            {
              id: `q3`,
              type: `multiple-choice`,
              question: `What's a "loss ratio" in insurance?`,
              options: [
                `Customer complaints`,
                `The percentage of insurance premiums paid out as claims; high (80%+) suggests insurance genuinely covers rare expensive events; low (under 50%) often indicates profit-extraction products`,
                `Insurance company losses`,
                `Premium changes`,
              ],
              correctIndex: 1,
              explanation: `Health insurance has loss ratios of 80%+ (real claims). Extended warranties have loss ratios of 15-30% (mostly profit). Knowing the loss ratio tells you whether an insurance product is likely a good deal across the pool.`,
            },
            {
              id: `q4`,
              type: `multiple-choice`,
              question: `Why is term life insurance usually better than whole life for most parents?`,
              options: [
                `Term life is required by law`,
                `Term life is much cheaper (a healthy 35-year-old: ~$25-50/mo for $500K of 20-year term); whole life premiums are 5-10x higher and the "savings component" usually earns much less than equivalent investment in index funds; aggressive sales of whole life are driven by high commissions`,
                `Whole life is cheaper`,
                `They're the same`,
              ],
              correctIndex: 1,
              explanation: `"Buy term and invest the difference" is the standard advice. Term life covers the years your family needs protection; index fund investing in what you save vs whole life builds more total wealth.`,
            },
            {
              id: `q5`,
              type: `multiple-choice`,
              question: `Why are extended warranties on electronics usually bad deals?`,
              options: [
                `They're illegal`,
                `Loss ratios are typically 15-30%—for every $80 collected, about $12-24 gets paid back in claims; most products don't fail or fail outside warranty conditions; retailer profit margins on warranties are often 50-80%`,
                `Stores don't honor them`,
                `Insurance is bad`,
              ],
              correctIndex: 1,
              explanation: `Industry data consistently shows extended warranties are profit centers, not protection. Many credit cards extend manufacturer warranties for free, providing similar protection without premium.`,
            },
            {
              id: `q6`,
              type: `multiple-choice`,
              question: `What does it mean to "self-insure"?`,
              options: [
                `Insure yourself with multiple policies`,
                `Absorb potential losses out of savings rather than paying ongoing premiums; mathematically optimal for risks that don't threaten financial stability; requires adequate savings`,
                `Lie to insurance companies`,
                `Refuse all insurance`,
              ],
              correctIndex: 1,
              explanation: `Self-insurance through emergency savings is one of the underappreciated benefits of having adequate savings. You save the premiums on many low-value insurance products across a lifetime.`,
            },
            {
              id: `q7`,
              type: `multiple-choice`,
              question: `Why does the case study suggest dropping collision/comprehensive on an old car?`,
              options: [
                `Old cars don't crash`,
                `Maximum payout is limited to the car's low value, but you pay full premium; on a $4,000 car, $50/month in collision is $600/year for protection up to $4,000; better to self-insure with emergency savings and keep liability coverage for actual catastrophic risks`,
                `Insurance is illegal on old cars`,
                `Old cars are exempt`,
              ],
              correctIndex: 1,
              explanation: `The math reveals it. As cars depreciate, the value of collision/comprehensive coverage drops while the premium often stays similar. Eventually self-insuring is better. Always keep liability though.`,
            },
            {
              id: `q8`,
              type: `multiple-choice`,
              question: `Why is liability insurance the most important auto coverage even when comprehensive is reasonable to drop?`,
              options: [
                `It's free`,
                `Liability covers the catastrophic risk of injuring others in an accident (potentially hundreds of thousands of dollars in medical bills and lawsuit damages); state minimums are usually inadequate; financial advisors recommend $250K+/$500K+`,
                `It's optional`,
                `It covers your car`,
              ],
              correctIndex: 1,
              explanation: `The catastrophic risk in driving isn't damage to your own car; it's potentially injuring someone else. Liability insurance protects against the lawsuit and medical bills that could destroy you financially. Never drop it.`,
            },
            {
              id: `q9`,
              type: `true-false`,
              question: `True or false: The most aggressively marketed insurance products are often the worst deals for buyers.`,
              correctAnswer: true,
              explanation: `True. Whole life, extended warranties, travel insurance, accidental death policies. Aggressive marketing exists because the products are very profitable for sellers, which mathematically means they're bad deals for buyers across the pool.`,
            },
            {
              id: `q10`,
              type: `inference`,
              question: `Your parent is at the appliance store about to buy a $700 dishwasher. The salesperson is offering a "5-year extended protection plan for only $99 - protects against everything!" Based on this lesson, what should they notice?`,
              options: [
                `"Great, definitely buy it"`,
                `"Extended warranties on appliances typically have loss ratios of 15-30%. Most appliances either don't break in 5 years or break in ways the warranty excludes. Your credit card may already extend the manufacturer warranty for free. If the dishwasher breaks after the manufacturer warranty, you can usually repair or replace from your emergency fund. The $99 across many appliances over a lifetime adds up to thousands of dollars that almost never pay out. Skip it. Use the $99 toward your emergency fund instead."`,
                `"Negotiate it down to $79"`,
                `"Buy 3 plans for backup"`,
              ],
              correctIndex: 1,
              explanation: `Real applied insurance evaluation. The framework lets you tell the salesperson "no" with conviction and reasoning, which is something most adults can't do. Across many appliance purchases over a lifetime, this single insight saves real money.`,
            },
          ],
        },

        {
          id: `l17-reflection`,
          type: `reflection`,
          headline: `Sit with this`,
          intro: `Pick the prompt that pulls at you most. Your answer is saved.`,
          prompts: [
            { id: `reflect-cognitive`, category: `Cognitive`, prompt: `Before this lesson, did you think most insurance was helpful? Has your view shifted?` },
            { id: `reflect-meta`, category: `Metacognitive`, prompt: `Why do salespeople pushing extended warranties feel so persuasive in the moment, even when the math is bad?` },
            { id: `reflect-identity`, category: `Identity`, prompt: `If you become someone who applies the three-question framework to every insurance pitch, what does that save over a lifetime?` },
            { id: `reflect-application`, category: `Application`, prompt: `Ask a parent: what insurance does the family have? Run each through the framework. Are there policies that could probably be dropped?` },
            { id: `reflect-critical`, category: `Critical`, prompt: `Are there cases where "bad" insurance products (like extended warranties) actually make sense? When?` },
            { id: `reflect-personal`, category: `Personal investigation`, prompt: `Look at one insurance policy your family has. Find the premium and read the conditions. Is the math favorable?` },
          ],
        },

        {
          id: `l17-real-world`,
          type: `real-world`,
          headline: `Take it into your life`,
          guideContext: `Insurance literacy can save your family thousands per year. Two paths.`,
          familyActivity: {
            title: `The Family Insurance Audit`,
            duration: `45 minutes`,
            description: `Sit with your parents and list every insurance policy and "protection plan" the family currently pays for. Health, life, auto, home/renters, extended warranties, travel, identity theft, pet, anything. Then walk through each one using the three-question framework: what's the potential loss? How likely? Could we self-insure? Many families discover policies they're paying for that don't actually protect against meaningful risk. The annual savings from cancelling those alone can be hundreds to thousands of dollars. This is one of the most useful financial conversations you can initiate with parents.`,
          },
          projectOption: {
            title: `Compare Auto Insurance Quotes, 2 weeks (optional)`,
            duration: `2 weeks, ~30 minutes total`,
            description: `If your family pays auto insurance, ask if you can get quotes from 3 alternative providers to compare with current coverage. Most insurance companies will provide quotes for free in 5-10 minutes. Compare premiums for identical coverage. The difference between the highest and lowest quote for the same coverage is often 20-40%. After 14 days, write 500 words on what you observed. Many families pay 30-50% more than necessary on auto insurance simply because they don't shop around. This is real applied consumer financial literacy.`,
            offerToParent: `Parent: opt your kid into this project from the dashboard. Insurance shopping is genuinely useful for the household.`,
          },
          identityQuestion: `If you can evaluate insurance pitches mathematically at 12, what does that save your future family over 50 years?`,
        },

        {
          id: `l17-identity-hook`,
          type: `identity-hook`,
          headline: `Who is this lesson making you?`,
          prompt: `One sentence. No wrong answer.`,
          placeholder: `Someone who...`,
          examples: [
            `Someone who applies the three-question framework to every insurance pitch.`,
            `A person who knows term life insurance is right for most parents and whole life is usually wrong.`,
            `Someone willing to self-insure small risks instead of paying premiums forever.`,
          ],
          saveKey: `identity_responses_mb_11_12_17`,
        },

        {
          id: `l17-celebration`,
          type: `celebration`,
          guideText: `{name}. After this lesson you can distinguish insurance that protects from insurance that extracts; apply the three-question framework to any insurance pitch; calculate loss ratios and self-insurance breakeven; recognize the most aggressively marketed and worst-value insurance products; and walk through real scenarios with their financial consequences. Most adults pay for some insurance they don't need. You can now help your family avoid that pattern. Next time we go into something that affects how people actually feel about all of this: what the research says about wealth, status, and happiness. Source Evaluation format. See you there. — Ace`,
          badge: `risk-thinker`,
          badgeName: `Risk Thinker`,
          xpEarned: 75,
          competencies: [
            `Distinguishes catastrophic-risk insurance (valuable) from extraction-product insurance`,
            `Applies the three-question framework to evaluate any insurance pitch`,
            `Knows loss ratios and uses them to assess insurance value`,
            `Recognizes the most aggressively marketed bad-deal products (whole life, extended warranties, travel insurance at checkout)`,
            `Can apply self-insurance logic where appropriate`,
          ],
          nextLessonPreview: {
            title: `Lesson 18: Wealth, Status, and Happiness Research`,
            hook: `Three sources on what actually makes people happier: Kahneman-Deaton research, more recent income/happiness studies, and viral wealth-flexing content. Three very different framings.`,
          },
        },
      ],
    },
  ],
};

export default MONEYBUSINESS_VOYAGER_L17;

if (import.meta.env?.DEV) {
  const l = MONEYBUSINESS_VOYAGER_L17.lessons[0];
  const mags = l.screens.filter((s) => s.type === `magazine`).length;
  const cs = l.screens.find((s) => s.type === `case-study`)?.decisions?.length ?? 0;
  const quiz = l.screens.find((s) => s.type === `quiz`)?.questions?.length ?? 0;
  const reflect = l.screens.find((s) => s.type === `reflection`)?.prompts?.length ?? 0;
  console.log(
    `[LESSON-MB-VOYAGER-L17 ${VERSION}] "${l.title}" — ${mags} magazine, case-study w/ ${cs} decisions, ${quiz} quiz, ${reflect} reflection`
  );
}
