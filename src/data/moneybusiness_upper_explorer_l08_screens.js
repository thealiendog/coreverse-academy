// ─────────────────────────────────────────────────────────────────────────────
// MONEY & BUSINESS UE  |  L08 — Real Estate as an Investment
// Age band : upper_explorers (9–10)   Guide: ace
// Standards: Jump$tart Personal Finance — Investing fundamentals;
//            Understanding different asset classes
// CALIBRATED: UE spec v1.1 — real domain terms, em-dashes sparing
// SCOPE: 4 concepts — what real estate is as an asset, how people make
//        money from it (appreciation + rental), mortgages and leverage,
//        pros and cons honestly
// VERSION: v1
// ─────────────────────────────────────────────────────────────────────────────

const MONEY_UE_L08 = {
  ageBand: `upper_explorers`,
  subjectId: `money`,
  guide: `ace`,

  lessons: [
    {
      id: `mb-9-10-08`,
      title: `Real Estate as an Investment`,
      duration: 18,
      xpReward: 75,
      badge: `property-thinker`,
      badgeName: `Property Thinker`,

      screens: [
        {
          id: `l08-welcome`,
          type: `welcome`,
          guideText: `Hey {name}, Ace here. Today we look at REAL ESTATE: houses, apartments, and land. Real estate is one of the most popular ways adults build wealth. It's also one of the most MISUNDERSTOOD. Some people think buying property is a guaranteed money-maker. It's not. Some think it's only for rich people. It's not. Today we cover what real estate really is, how investors actually make money from it, and the honest pros and cons. By the end, you'll understand why your parents may own a home AND why some smart investors choose not to. Let's go.`,
          headline: `Real Estate as an Investment`,
          subtitle: `Houses, apartments, and land as wealth-building tools`,
          visual: `/ue-assets/money/l08-welcome.webp`,
        },

        {
          id: `l08-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `What Real Estate Actually Is`,
          paragraphs: [
            `REAL ESTATE is LAND plus anything PERMANENTLY ATTACHED to it. A house, an apartment building, an office tower, a farm, a vacant lot — all of these are real estate. The KEY thing about real estate is that there's a LIMITED amount of land in any given location. Cities can only sprawl so much. Beachfront property can't be made more of. Good school districts can only have so many homes. This SCARCITY is what makes real estate often increase in value over time.`,
            `For most families, the biggest real estate asset they'll ever own is their OWN HOME. About 65% of U.S. households own their home. Caro and Chris (who built Coreverse) own two properties beyond their main home: Shadowpeak Retreat in Virginia and Alien Dog Campground in Joshua Tree. These are short-term rental properties — they rent them to travelers for vacations and earn rental income. This is one common way people use real estate as an investment beyond just having a place to live.`,
          ],
          image: `/ue-assets/money/l08-s1-what-is.webp`,
          imageCaption: `Real estate: land plus what's attached to it. Scarcity makes it valuable.`,
          vocab: [
            { word: `real estate`,
              definition: `Land plus anything permanently attached to it (houses, buildings). Limited supply in any location is why real estate often grows in value over time. Most families' biggest asset is their own home.`,
              audioPrompt: `Real estate is land plus anything permanently attached to it, {name}. A house, an apartment building, a farm, a vacant lot. All real estate. The key thing is that there's a limited amount of land in any given location. Cities can only sprawl so much. Beachfront can't be made more of. Good school districts can only have so many homes. This scarcity is what makes real estate often increase in value over time. For most families, their own home is the biggest asset they'll ever own.` },
            { word: `property tax`,
              definition: `A tax charged by local governments based on the value of real estate you own. Funds local services like schools and roads. You pay it as long as you own the property — even after the mortgage is paid off.`,
              audioPrompt: `Property tax is a tax charged by local governments based on the value of real estate you own, {name}. Own a 400,000 dollar home with a 1 percent tax rate, and you owe 4,000 dollars per year. These taxes fund local services like schools, roads, and fire departments. Property taxes don't go away when you pay off your mortgage — you pay them as long as you own the property. For real estate investors, property taxes are a significant ongoing cost that must be factored into any investment math.` },
          ],
        },

        {
          id: `l08-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `How People Make Money From Real Estate`,
          paragraphs: [
            `Real estate makes money in two main ways. (1) APPRECIATION: the property INCREASES in value over time. A house bought for $300,000 ten years ago might be worth $500,000 today. The owner can sell for a $200,000 gain (this is the simple version; taxes and fees take some of it). (2) RENTAL INCOME: the owner rents the property to other people. If a property generates $2,000 a month in rent and costs $1,400 a month in expenses (mortgage, taxes, repairs), the owner earns $600 a month from it.`,
            `Smart real estate investors look for BOTH. A property that appreciates AND generates rental income builds wealth in two ways simultaneously. But it's not automatic. Some areas appreciate. Some don't. Some rental properties cash flow positively. Some don't. There's also a third way: SHORT-TERM RENTALS like Airbnb. Caro and Chris's properties (Shadowpeak Retreat and Alien Dog Campground) are short-term rentals. Travelers pay nightly rates, which can be higher than monthly rentals, but require more work to manage. Each strategy has its own trade-offs.`,
          ],
          image: `/ue-assets/money/l08-s2-make-money.webp`,
          imageCaption: `Appreciation: value grows. Rental income: monthly cash flow. Smart investors aim for both.`,
          vocab: [
            { word: `appreciation`,
              definition: `When something increases in value over time. Real estate often appreciates because land is limited. Not all property appreciates — depends on location, condition, and market.`,
              audioPrompt: `Appreciation is when something increases in value over time, {name}. Real estate often appreciates because land is limited. A house bought for 300,000 dollars 10 years ago might be worth 500,000 dollars today. Not all property appreciates. It depends on location, condition, and the overall market. Properties in growing cities or great school districts tend to appreciate more. Properties in shrinking areas might lose value. Smart investors study local markets carefully before buying. Appreciation is one of the two main ways people make money from real estate.` },
            { word: `rental income`,
              definition: `Money you earn from letting others use your property. After expenses (mortgage, taxes, repairs, insurance), whatever's left is profit. Rental income is one of the main reasons people buy investment properties.`,
              audioPrompt: `Rental income is money you earn from letting other people use your property, {name}. A landlord who owns a two-bedroom apartment and charges 1,800 dollars per month earns 21,600 dollars per year in rental income. After expenses (mortgage, taxes, repairs, insurance), whatever's left is the landlord's profit. Short-term rentals like Airbnb can earn more per night than monthly rentals but require more work to manage. Rental income is one of the main reasons people buy investment properties — it creates a stream of money independent of a regular job.` },
          ],
        },

        {
          id: `l08-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Mortgages: Borrowing to Buy Real Estate`,
          paragraphs: [
            `Almost nobody pays CASH for a house. Most homebuyers use a MORTGAGE, which is a loan specifically for buying real estate. A typical mortgage requires a DOWN PAYMENT (usually 5-20% of the purchase price) and a long-term loan for the rest (often 15-30 years). Each month, the homeowner pays the lender a fixed amount that covers (a) INTEREST on the loan, and (b) PRINCIPAL (paying back some of the original amount). Over time, the principal slowly decreases while the homeowner builds EQUITY in the home.`,
            `Mortgages let people use LEVERAGE. If you put $50,000 down on a $500,000 house, you're controlling a $500,000 asset with only $50,000 of your own money. If the house appreciates 5% in a year ($25,000 increase), your $50,000 investment grew by half! This is the magic of leverage, and it's why many people build wealth through real estate. BUT: leverage works BOTH ways. If the house DROPS 10% ($50,000 loss), your entire $50,000 down payment could be wiped out. Real estate has many advantages, but the risk is real. Anyone telling you real estate "always goes up" doesn't understand history.`,
          ],
          image: `/ue-assets/money/l08-s3-mortgage.webp`,
          imageCaption: `Mortgage + leverage = control a big asset with less. Magnifies both gains AND losses.`,
          vocab: [
            { word: `mortgage`,
              definition: `A loan specifically for buying real estate, typically 15-30 years. Requires a down payment. Each month, you pay back interest and a small portion of the principal, building equity over time.`,
              audioPrompt: `A mortgage is a loan specifically for buying real estate, {name}. Most homebuyers use one. A typical mortgage requires a down payment of 5 to 20 percent of the purchase price, then a long-term loan for the rest — usually 15 to 30 years. Each month, you pay the lender a fixed amount covering interest AND principal (paying back some of the original amount). Over time, the principal slowly decreases while you build equity in the home. Mortgages let people buy houses they couldn't pay cash for.` },
            { word: `leverage`,
              definition: `Using borrowed money to control a larger asset than your cash alone could buy. In real estate, a mortgage lets you control a $500,000 property with a $50,000 down payment. Amplifies both gains and losses.`,
              audioPrompt: `Leverage means using borrowed money to control a larger asset than your cash could buy, {name}. In real estate, leverage works through mortgages. Put 50,000 dollars down on a 500,000 dollar house and you control a 500,000 dollar asset with only 10 percent of your own money. If the house gains 10 percent in value, your 50,000 dollar investment doubled. That's the power of leverage. But leverage magnifies losses too. If the house drops 10 percent, you could lose most of your down payment. Leverage amplifies both gains and losses.` },
          ],
        },

        {
          id: `l08-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `The Real Pros and Cons`,
          paragraphs: [
            `Real estate has HONEST PROS. Tangible (you can see and touch your asset). Often appreciates over decades. Generates rental income if you choose to rent. Leverage amplifies returns. Tax advantages in many countries. Provides a place to live (with your own home) or vacation experiences for others (with rental properties). Some people develop real expertise and build significant wealth through real estate.`,
            `Real estate also has HONEST CONS. Not LIQUID (you can't sell quickly like stocks). Requires significant CAPITAL to start (down payment is often $30,000+). Has many ongoing COSTS (property taxes, insurance, repairs, maintenance, sometimes HOA fees). Can DROP in value, sometimes for years (like the 2008 housing crisis). Being a LANDLORD is real work (tenants, repairs, vacancies, paperwork). Many smart investors choose stocks and index funds INSTEAD of real estate because they're simpler. Ace's bottom line: real estate works well for some people and poorly for others. It's not magic. It's a tool. Like all tools, it has the right and wrong situations.`,
          ],
          image: `/ue-assets/money/l08-s4-pros-cons.webp`,
          imageCaption: `Real pros. Real cons. Real estate works for some, not others.`,
          vocab: [
            { word: `down payment`,
              definition: `The portion of a home's price paid in cash up front when buying. Usually 5-20% of the total price. The rest is borrowed through a mortgage.`,
              audioPrompt: `A down payment is the portion of a home's price paid in cash up front when buying, {name}. Usually 5 to 20 percent of the total price. For a 400,000 dollar home, a 20 percent down payment is 80,000 dollars. A 5 percent down payment is 20,000 dollars. The rest is borrowed through a mortgage. Saving for a down payment is one of the biggest financial goals for many adults. Larger down payments mean smaller mortgages. Smaller down payments make buying sooner possible but require borrowing more.` },
            { word: `landlord`,
              definition: `Someone who owns rental property and collects monthly rent from tenants. Comes with income and appreciation benefits — but also real responsibilities like repairs, vacancies, and tenant management.`,
              audioPrompt: `A landlord is someone who owns rental property and collects monthly rent from tenants, {name}. Being a landlord has advantages: rental income, appreciation, and leverage. But it has real responsibilities too. Finding and screening tenants. Fixing problems when pipes break or appliances fail. Handling late payments. Managing vacancies. Following local housing laws. Some landlords manage everything themselves. Others hire property management companies, which costs money but saves time. Being a landlord is a real business. Most people who try it say it requires more work and organization than they expected.` },
          ],
        },

        {
          id: `l08-game`,
          type: `interactive`,
          format: `investigation`,
          guideText: `Investigation time, {name}. Four real-estate situations. For each one, identify what's mostly happening: APPRECIATION (property gaining value), RENTAL INCOME (money from renters), or LEVERAGE EFFECT (a small down payment controlling a big asset)?\n\nOne is sneakier than it looks.`,
          options: [
            { id: `appreciation`,  label: `Appreciation`,    color: `#34D399`, description: `Property increasing in value over time.` },
            { id: `rental`,        label: `Rental Income`,   color: `#FBBF24`, description: `Money paid by renters to use the property.` },
            { id: `leverage`,      label: `Leverage Effect`, color: `#60A5FA`, description: `Using a mortgage to control a larger asset than your cash alone would buy.` },
          ],
          cases: [
            {
              id: `case-1`,
              caseTitle: `Scene #1`,
              clues: [
                { text: `Maya bought a small house in 2015 for $200,000.` },
                { text: `In 2025, the same house is worth $370,000.` },
                { text: `She's lived there the whole time without renting it out.` },
              ],
              correctAnswer: `appreciation`,
              realWorldExample: `Many U.S. homes appreciated significantly during the 2015-2025 decade.`,
              explanation: `Property value grew over a decade. No renters involved. Pure appreciation. Maya's home gained $170,000 in value just by existing in a growing area. Real estate appreciation over 10+ years is one of the most reliable wealth-builders for ordinary people.`,
            },
            {
              id: `case-2`,
              caseTitle: `Scene #2`,
              clues: [
                { text: `Marco owns a 4-unit apartment building.` },
                { text: `Each unit rents for $1,500 a month.` },
                { text: `He collects $6,000 per month, pays $3,800 in expenses, and keeps $2,200 in profit.` },
              ],
              correctAnswer: `rental`,
              realWorldExample: `Multi-unit rentals are a classic source of rental income.`,
              explanation: `Monthly rent payments from tenants minus expenses. Pure rental income. Marco gets $2,200 in cash flow every month while ALSO benefiting from any appreciation over time.`,
            },
            {
              id: `case-3`,
              caseTitle: `Scene #3`,
              clues: [
                { text: `Sara put $40,000 down on a $400,000 house using a mortgage for the remaining $360,000.` },
                { text: `One year later, the house is worth $440,000 (10% increase).` },
                { text: `Sara's $40,000 investment grew to $80,000 in equity, a 100% return on her cash.` },
              ],
              correctAnswer: `leverage`,
              realWorldExample: `Leverage is what makes real estate returns sometimes huge.`,
              explanation: `Sara only put down $40,000 but controlled a $400,000 asset. When the asset gained 10%, her CASH investment doubled. Pure leverage. This is why real estate can be so powerful. But remember: leverage works both ways. If the house had dropped 10%, her down payment could have been wiped out.`,
            },
            {
              id: `case-4`,
              caseTitle: `Scene #4 — The Tricky One: Caro and Chris's Alien Dog Campground in Joshua Tree`,
              clues: [
                { text: `They bought a desert property and are setting it up as a short-term rental.` },
                { text: `Travelers will pay nightly rates to camp there.` },
                { text: `Over time, the property will likely also gain value in the Joshua Tree area, which is becoming more popular.` },
              ],
              correctAnswer: `rental`,
              realWorldExample: `Short-term rentals combine rental income with potential appreciation.`,
              explanation: `Tricky because BOTH things are happening. The property will likely appreciate AND generate rental income from travelers. So which is the PRIMARY angle? Most short-term rental owners focus on the rental income as the IMMEDIATE goal, with appreciation as a long-term bonus. So the primary angle is rental income. But the property is doing both — which is exactly why short-term rentals are popular with real estate investors. Lesson: real-world properties often combine multiple wealth-building angles. Smart investors see all the layers.`,
            },
          ],
        },

        {
          id: `l08-quiz`,
          type: `quiz`,
          guideText: `Let's see what stuck, {name}.`,
          questions: [
            { id: `l08-q1`, format: `multiple-choice`,
              question: `What is REAL ESTATE?`,
              options: [
                `Just houses`,
                `Land plus anything permanently attached to it: houses, buildings, even farmland`,
                `Only apartments`,
                `Cars and boats`,
              ],
              correctIndex: 1,
              explanation: `Real estate includes land and what's attached to it: houses, apartment buildings, offices, farms. The scarcity of land in any given location is part of why real estate often grows in value over time.` },

            { id: `l08-q2`, format: `multiple-choice`,
              question: `What are the TWO MAIN WAYS people make money from real estate?`,
              options: [
                `Buying low, selling low`,
                `Appreciation (property value grows) AND rental income (collecting rent)`,
                `Just appreciation`,
                `Hiding money`,
              ],
              correctIndex: 1,
              explanation: `Appreciation grows your asset's value over time. Rental income generates cash flow each month. Smart investors look for both. Properties that appreciate AND generate income build wealth two ways simultaneously.` },

            { id: `l08-q3`, format: `multiple-choice`,
              question: `What is a MORTGAGE?`,
              options: [
                `A type of insurance`,
                `A loan specifically for buying real estate. Usually 15-30 years, with a down payment up front.`,
                `Just rent`,
                `A type of tax`,
              ],
              correctIndex: 1,
              explanation: `Mortgages let people buy real estate without paying cash. You put down 5-20% as a down payment, then pay back the rest plus interest over many years. Each monthly payment includes some interest and some principal.` },

            { id: `l08-q4`, format: `multiple-choice`,
              question: `What is LEVERAGE in real estate?`,
              options: [
                `Lifting heavy things`,
                `Using a mortgage to control a much larger asset than your cash alone could buy. Magnifies both GAINS and LOSSES.`,
                `Just a small amount`,
                `Just the down payment`,
              ],
              correctIndex: 1,
              explanation: `Leverage is one of the most powerful things about real estate. $50,000 down on a $500,000 house = controlling a half-million-dollar asset with much less cash. If the house gains value, your cash investment can grow dramatically. If it loses value, the same can happen to your loss.` },

            { id: `l08-q5`, format: `true-false`,
              question: `True or false: Real estate ALWAYS goes up in value.`,
              correctAnswer: false,
              explanation: `False. Real estate can lose value, sometimes for years. The 2008 housing crisis caused U.S. home values to drop by up to 30% in many areas. Some properties recovered; some didn't. Anyone who tells you real estate "always goes up" doesn't understand history.` },

            { id: `l08-q6`, format: `multiple-choice`,
              question: `What is APPRECIATION?`,
              options: [
                `Saying thank you`,
                `When something increases in value over time. Real estate often appreciates because land is limited.`,
                `Buying more`,
                `A new building`,
              ],
              correctIndex: 1,
              explanation: `Appreciation is value growth over time. Real estate appreciates because land is finite. Not all property appreciates — depends on location, condition, and market. Properties in growing areas usually appreciate more than properties in shrinking areas.` },

            { id: `l08-q7`, format: `multiple-choice`,
              question: `Why do some smart investors choose STOCKS AND INDEX FUNDS instead of REAL ESTATE?`,
              options: [
                `They're cooler`,
                `Because stocks/funds are more liquid (easier to sell), need less starting capital, and have fewer ongoing costs and headaches`,
                `Stocks always make more money`,
                `Real estate is illegal`,
              ],
              correctIndex: 1,
              explanation: `Real estate has real cons. Not liquid. Big upfront cost. Ongoing maintenance and management. Being a landlord is real work. Many smart investors prefer simpler index fund strategies. Real estate is one tool. Index funds are another. Neither is universally better.` },

            { id: `l08-q8`, format: `multiple-choice`,
              question: `What's an example of SHORT-TERM RENTAL real estate?`,
              options: [
                `A 12-month apartment lease`,
                `Renting out a property by the night to travelers, like Airbnb, vacation rentals, or campgrounds — Coreverse's Caro and Chris own two of these`,
                `Office buildings`,
                `Just hotels`,
              ],
              correctIndex: 1,
              explanation: `Short-term rentals are properties rented nightly or weekly to travelers. Airbnb, VRBO, and similar platforms made this popular. Caro and Chris's Shadowpeak Retreat (Virginia) and Alien Dog Campground (Joshua Tree) are short-term rentals. Higher nightly rates than monthly leases, but more work to manage.` },
          ],
        },

        {
          id: `l08-reflection`,
          type: `reflection`,
          guideText: `Before we wrap, {name}, pick ONE question and actually answer it. Your response gets saved, and I'll remember it next time we talk.`,
          prompts: [
            { id: `r1`, text: `If your family ever travels somewhere and stays in an Airbnb or vacation rental, you're paying SOMEONE'S rental income. What kinds of properties have you stayed in, and what made them special?` },
            { id: `r2`, text: `Real estate uses leverage. If you put $40,000 down on a $400,000 house and it grew 10%, your $40,000 doubled. If it dropped 10%, your $40,000 could be wiped out. Does that excite you or worry you?` },
            { id: `r3`, text: `Some people pour all their money into real estate. Some never own any. Which extreme makes more sense to you — and what kind of middle ground might be smarter?` },
            { id: `r4`, text: `If you could buy ONE piece of real estate today (any kind, anywhere), what would you buy and why?` },
          ],
        },

        {
          id: `l08-realworld`,
          type: `real-world`,
          guideText: `Most adults who become financially secure own at least one real estate asset, often their home. Many also own rental properties, REITs (real estate investment trusts), or invest in real estate funds. The skills for evaluating real estate are different from stocks. Location matters more. Local market knowledge matters. Being willing to manage tenants matters. Real estate isn't for everyone, but understanding how it works helps you make informed choices throughout your life — whether you own property, rent from a landlord, or invest indirectly.`,
          familyAdventure: `Family Property Hunt. Pick any neighborhood you know. As a family, look up home prices there (online searches are easy). Compare them to 10 years ago using sites like Zillow's price history. Has the neighborhood appreciated? Stayed flat? Lost value? Talk about what's driving the trend (school quality, job market, climate, etc.). Real estate investors do this kind of analysis all the time.`,
          creativePrompt: {
            intro: `Imagine you're 35 and considering buying your first real estate investment property. Write a short analysis of what you'd buy and why.`,
            floor: `Write at least 5 sentences. Pick a real area you know. Describe the property type (house? duplex? short-term rental?), how you'd use it, and what you expect it to do over 10 years.`,
            stretch: `Write 8 to 10 sentences. Include the location and why, the property type, your investment strategy (appreciation, rental income, or both), what could go wrong, and what you'd do if it did.`,
            open: `Write as much as you want. Build a full investor pitch. Cover area, property type, down payment estimate, expected rental or appreciation, leverage math, risks, and your exit strategy if needed.`,
            frames: [
              `I would buy property in ___ because ___.`,
              `The property type would be ___.`,
              `My strategy is ___ (appreciation, rental, or both).`,
              `What could go wrong is ___, and I'd handle it by ___.`,
              `In 10 years, I'd expect ___.`,
            ],
          },
        },

        {
          id: `l08-celebration`,
          type: `celebration`,
          message: `Great work, {name}. You can now explain what real estate is, the two main ways it makes money, how mortgages and leverage work, and the honest pros and cons. Next lesson: the surprising HABITS of people who build real wealth. The MINDSET that turns ordinary income into extraordinary results over time. — Ace.`,
          badge: `property-thinker`,
          badgeName: `Property Thinker`,
          xpEarned: 75,
        },
      ],
    },
  ],
};

export default MONEY_UE_L08;

// ─── Dev asset check ──────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const screens = MONEY_UE_L08.lessons[0].screens;
  const mags = screens.filter(s => s.type === 'magazine').length;
  const game = screens.find(s => s.type === 'interactive')?.cases?.length ?? 0;
  const quiz = screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  const refl = screens.find(s => s.type === 'reflection')?.prompts?.length ?? 0;
  const totalVocab = screens.filter(s => s.type === 'magazine').reduce((sum, s) => sum + (s.vocab?.length || 0), 0);
  console.log(`[LESSON-MONEY-UE-L08 v1] Loaded with ${mags} magazine sections, ${totalVocab} vocab terms, ${game} game cases, ${quiz} quiz Qs, ${refl} reflection prompts`);
}
