// ─────────────────────────────────────────────────────────────────────────────
// MONEY & BUSINESS UE  |  L02 — Compound Interest: The 8th Wonder
// Age band : upper_explorers (9–10)   Guide: ace
// Standards: Jump$tart Personal Finance — Saving (the role of interest);
//            CCSS Math 4.OA.1, 5.NBT.7 — multiplication, decimals
// CALIBRATED: UE spec v1.1 — real domain terms, em-dashes sparing
// SCOPE: 4 concepts — interest as money-on-money, simple vs compound,
//        time as the magic ingredient, real-world applications
// VERSION: v1
// ─────────────────────────────────────────────────────────────────────────────

const MONEY_UE_L02 = {
  ageBand: `upper_explorers`,
  subjectId: `money`,
  guide: `ace`,

  lessons: [
    {
      id: `mb-9-10-02`,
      title: `Compound Interest: The 8th Wonder`,
      duration: 18,
      xpReward: 75,
      badge: `compound-thinker`,
      badgeName: `Compound Thinker`,

      screens: [
        {
          id: `l02-welcome`,
          type: `welcome`,
          guideText: `Hey {name}, Ace here. Today's lesson is one of the most important in this entire subject. COMPOUND INTEREST. Albert Einstein supposedly called it the eighth wonder of the world. He may not have actually said that, but the math is real. Understanding compound interest changes how you think about money, time, and patience for the rest of your life. By the end of today, you'll see why someone who saves $1 a day starting at age 10 can end up with more money than someone who saves $5 a day starting at age 40. Let's go.`,
          headline: `Compound Interest`,
          subtitle: `The math that turns small savings into big wealth over time`,
          visual: `/ue-assets/money/l02-welcome.webp`,
        },

        {
          id: `l02-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `What Interest Actually Is`,
          paragraphs: [
            `INTEREST is what you EARN when someone uses your money, or what you PAY when you use someone else's. If you put $100 in a savings account that earns 5% interest per year, the bank pays you $5 at the end of the year. Why? Because the bank used your money during the year (loaning it to other people) and pays you for the privilege. You now have $105.`,
            `Interest is one of the most important ideas in finance. When you SAVE or INVEST, interest works FOR you. Your money earns more money even while you sleep. When you BORROW (using a credit card, taking out a loan), interest works AGAINST you. You pay extra for the privilege of using someone else's money. Same idea, opposite sides. Understanding which side you're on changes everything.`,
          ],
          image: `/ue-assets/money/l02-s1-interest.webp`,
          imageCaption: `Interest: payment for the use of money. Earned when saving, paid when borrowing.`,
          vocab: [
            {
              word: `interest`,
              definition: `Payment for the use of money. You earn interest when you save or invest. You pay interest when you borrow. The percentage rate determines how much.`,
              audioPrompt: `Interest is payment for the use of money, {name}. If you put 100 dollars in a savings account that earns 5 percent interest per year, the bank pays you 5 dollars at the end of the year. The bank uses your money during the year (loaning it to other people) and pays you for the privilege. You now have 105 dollars. When you save or invest, interest works for you. When you borrow money, interest works against you. You pay extra for the privilege of using someone else's money.`,
            },
            {
              word: `savings account`,
              definition: `A type of bank account that earns interest over time. The bank uses your deposited money and pays you interest for the privilege. Safer than investing, but typically lower returns.`,
              audioPrompt: `A savings account is a type of bank account that earns interest over time, {name}. You deposit money, the bank uses it (lending it to other customers), and pays you interest for the privilege. Savings accounts are very safe — most are insured up to 250,000 dollars by the government. The trade-off is that interest rates on savings accounts are usually low. They protect your money but won't make you rich. Still, a savings account is where most people keep their emergency fund and short-term savings.`,
            },
          ],
        },

        {
          id: `l02-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Simple Interest vs Compound Interest`,
          paragraphs: [
            `There are two main kinds of interest. SIMPLE INTEREST is calculated only on your ORIGINAL amount (the "principal"). If you put $100 in an account earning 5% simple interest, you earn $5 every year, forever. After 10 years: $150. After 20 years: $200. The interest amount stays the same every year because it's always based on your original $100.`,
            `COMPOUND INTEREST is different and much more powerful. Compound interest is calculated on your ORIGINAL amount PLUS all the interest you've already earned. Year 1: $100 grows to $105. Year 2: 5% interest is calculated on $105 (not $100), so you earn $5.25, giving you $110.25. Year 3: 5% interest is calculated on $110.25, so you earn $5.51, giving you $115.76. The amounts keep growing because you're earning interest on your previous interest. This is what people mean when they say "compound interest." Money earning money on money on money.`,
          ],
          image: `/ue-assets/money/l02-s2-simple-vs-compound.webp`,
          imageCaption: `Simple: same dollars every year. Compound: growing dollars, year by year.`,
          vocab: [
            {
              word: `compound interest`,
              definition: `Interest earned on both your original amount AND all the interest you've already earned. Grows faster than simple interest, especially over many years.`,
              audioPrompt: `Compound interest is interest earned on both your original amount AND all the interest you've already earned, {name}. Year one, 100 dollars grows to 105 dollars. Year two, 5 percent interest is calculated on 105 dollars (not 100), so you earn 5 dollars and 25 cents, giving you 110 dollars and 25 cents. Year three, interest is calculated on 110 dollars and 25 cents. The amounts keep growing because you earn interest on your previous interest. Money earning money on money on money. This is what makes long-term saving powerful.`,
            },
            {
              word: `simple interest`,
              definition: `Interest calculated only on the original principal amount, not on previously earned interest. Grows at a steady, unchanging rate. Less common today but still used in some loans.`,
              audioPrompt: `Simple interest is calculated only on your original principal, not on previously earned interest, {name}. If you put 100 dollars in an account earning 5 percent simple interest, you earn 5 dollars every single year, forever, because it's always calculated on the original 100. After 10 years, you have 150 dollars. With compound interest, you'd have about 163 dollars. Same rate, different method, different outcome. Simple interest is less common today but still used in some loans.`,
            },
          ],
        },

        {
          id: `l02-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Why Time Is the Magic Ingredient`,
          paragraphs: [
            `Compound interest grows SLOWLY at first, then EXPLODES. Imagine investing $1,000 at 8% interest. After 1 year: $1,080 (gained $80). After 5 years: about $1,469 (still feels small). After 10 years: about $2,159 (more than doubled). After 20 years: about $4,661. After 40 years: about $21,724. After 50 years: about $46,902. That's 46 times your original money, just by leaving it alone with compound interest. Most of the growth happens in the LATER years, after compounding has had time to do its work.`,
            `Here's the math fact that changes lives. A person who saves $1,000 at age 10 and lets it compound at 8% for 50 years ends up with about $47,000 (no extra money added, just compounding). A person who waits until age 30 and saves $1,000 has only 30 years for it to compound, ending up with about $10,000. Same amount saved, very different outcomes. TIME does most of the work. This is why everyone who teaches personal finance says the same thing: start saving early, even small amounts. Time and compounding together create wealth that no amount of "trying to catch up later" can match.`,
          ],
          image: `/ue-assets/money/l02-s3-time-magic.webp`,
          imageCaption: `Slow at first. Then explodes. Time does most of the work.`,
          vocab: [
            {
              word: `principal`,
              definition: `The original amount of money you put in (saved, invested, or borrowed). Interest is calculated as a percentage of the principal.`,
              audioPrompt: `Principal is the original amount of money you put in, {name}. If you put 100 dollars in a savings account, your principal is 100 dollars. If you take out a 5000 dollar loan, your principal is 5000 dollars. Interest is calculated as a percentage of the principal. With simple interest, the principal stays the same, so the interest amount stays the same too. With compound interest, the principal grows over time (because earned interest gets added to it), so the interest amount also grows.`,
            },
            {
              word: `interest rate`,
              definition: `The percentage used to calculate how much interest grows on a given amount. Higher rates mean faster growth when saving, and higher costs when borrowing.`,
              audioPrompt: `The interest rate is the percentage used to calculate how much interest you earn or owe, {name}. If you have 1,000 dollars at an 8 percent interest rate, you earn 80 dollars in the first year with simple interest (or slightly more with compound). Higher rates mean faster growth when saving or investing. Higher rates also mean higher costs when borrowing. Interest rates are set by banks and influenced by the government. Even small differences in rate, multiplied over decades, create very large differences in final totals.`,
            },
          ],
        },

        {
          id: `l02-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Compound Interest in Real Life`,
          paragraphs: [
            `Compound interest applies to almost every financial situation. SAVINGS ACCOUNTS use compound interest (though most pay very low rates today). INVESTING in stocks, bonds, or index funds typically grows through compounding over time. RETIREMENT ACCOUNTS like 401(k)s and IRAs in the U.S. are designed specifically to let compound interest work over decades. CREDIT CARD DEBT also compounds, but against you. If you carry a credit card balance at 20% interest, you'll pay more and more each month if you don't pay it off.`,
            `Compound interest is one of the BEST reasons to start saving and investing as YOUNG as possible. Even small amounts started early beat big amounts started late. A teenager saving $20 a month in a 7% investment account from age 15 to age 65 ends up with over $100,000 (without adding any extra). The same teenager waiting until age 35 to start saving the same $20 monthly ends up with only about $25,000 by age 65. SAME monthly amount. Big time difference. Ace's truth: compound interest is one of the most powerful forces in money. It works WITH you (savings, investing) or AGAINST you (debt). Knowing the difference shapes your financial life.`,
          ],
          image: `/ue-assets/money/l02-s4-real-life.webp`,
          imageCaption: `Savings. Investing. Retirement. Debt. Compound interest is everywhere.`,
          vocab: [
            {
              word: `investing`,
              definition: `Putting money into something (stocks, bonds, real estate, businesses) with the expectation that it will grow over time, often through compound interest.`,
              audioPrompt: `Investing is putting money into something with the expectation that it will grow over time, {name}. People invest in stocks, bonds, real estate, businesses, and other assets. Investing is different from saving. Saving means putting money somewhere safe (like a bank account) where it grows slowly. Investing means accepting some risk in exchange for higher potential growth. Most investing relies on compound interest or compound growth. The money you invest earns returns, and those returns earn more returns over time. Smart investors usually start young and stay patient.`,
            },
            {
              word: `index fund`,
              definition: `A type of investment that holds a broad mix of stocks, tracking a market index like the S&P 500. Lower fees and historically strong long-term returns make it popular with individual investors.`,
              audioPrompt: `An index fund is a type of investment that holds a broad mix of stocks tracking a market index, {name}. Instead of picking individual companies, you own small pieces of many companies at once. If the overall market grows, your index fund grows. Index funds charge very low fees and have historically grown around 7 to 10 percent per year over long periods. They're one of the most recommended ways for regular people to invest for retirement. Warren Buffett has publicly recommended them for most investors.`,
            },
          ],
        },

        {
          id: `l02-game`,
          type: `interactive`,
          format: `investigation`,
          guideText: `Investigation time, {name}. Four financial scenarios. For each one, decide which is happening: SIMPLE INTEREST (calculated only on original amount), COMPOUND INTEREST (calculated on original plus past interest), or NO INTEREST (nothing extra grows)?\n\nOne is sneakier than it looks.`,
          options: [
            { id: `simple`,    label: `Simple Interest`,    color: `#FBBF24`, description: `Interest calculated only on the original principal. Same dollar amount each year.` },
            { id: `compound`,  label: `Compound Interest`,  color: `#34D399`, description: `Interest calculated on principal PLUS past interest. Amount grows over time.` },
            { id: `none`,      label: `No Interest`,        color: `#F87171`, description: `No additional money is earned or owed. Just sitting still.` },
          ],
          cases: [
            {
              id: `case-1`,
              caseTitle: `Scenario #1`,
              clues: [
                { text: `Maya puts $500 in a savings account at age 10.` },
                { text: `It earns 6% interest per year, calculated on her balance (including past interest).` },
                { text: `After 1 year she has $530. After 2 years she has $561.80. After 3 years she has $595.51.` },
              ],
              correctAnswer: `compound`,
              realWorldExample: `Most savings accounts use compound interest.`,
              explanation: `The interest in year 2 ($31.80) is bigger than year 1 ($30) because it's calculated on $530, not $500. The interest in year 3 is bigger still. That growing pattern means compound interest. Pure compound.`,
            },
            {
              id: `case-2`,
              caseTitle: `Scenario #2`,
              clues: [
                { text: `Jake's grandmother gave him $200 for his birthday and he put it in a piggy bank.` },
                { text: `It sits on his dresser for one year.` },
                { text: `At the end of the year, it's still exactly $200.` },
              ],
              correctAnswer: `none`,
              realWorldExample: `Cash sitting in a drawer earns no interest.`,
              explanation: `No bank involved. No investment. No interest. Just $200 sitting still. Pure no-interest. (Note: Inflation will actually make $200 worth slightly LESS each year in terms of what you can buy with it. But we'll cover inflation later.)`,
            },
            {
              id: `case-3`,
              caseTitle: `Scenario #3`,
              clues: [
                { text: `A bank loans Liam $1,000 for 5 years at 4% simple interest.` },
                { text: `Each year, the interest is calculated only on the original $1,000.` },
                { text: `Liam pays $40 in interest every single year for 5 years, totaling $200 in interest.` },
              ],
              correctAnswer: `simple`,
              realWorldExample: `Some loans use simple interest.`,
              explanation: `Same $40 every year. Calculated only on the original $1,000 principal. Pure simple interest. Simple interest is less common today than compound, but still exists for some loans.`,
            },
            {
              id: `case-4`,
              caseTitle: `Scenario #4 — The Tricky One`,
              clues: [
                { text: `Sara owes $2,000 on a credit card with 20% interest.` },
                { text: `She doesn't pay the balance off and the unpaid amount each month gets added to the next month's balance.` },
                { text: `Her debt grows faster every month.` },
              ],
              correctAnswer: `compound`,
              realWorldExample: `Most credit card debt uses compound interest.`,
              explanation: `Tricky because it's compound interest working AGAINST her. Most kids think of compound interest as a good thing (savings). But credit card debt also compounds. The unpaid interest gets added to the balance, and next month's interest is calculated on that bigger balance. Sara's debt grows faster every month. Lesson: compound interest is powerful. It can build wealth (saving, investing) OR build debt. Same math, different sides.`,
            },
          ],
        },

        {
          id: `l02-quiz`,
          type: `quiz`,
          guideText: `Let's see what stuck, {name}.`,
          questions: [
            { id: `l02-q1`, format: `multiple-choice`,
              question: `What is INTEREST?`,
              options: [
                `A type of money`,
                `Payment for the use of money — earned when saving, paid when borrowing`,
                `Just a fee`,
                `Tax`,
              ],
              correctIndex: 1,
              explanation: `Interest is what someone pays you for using your money (when you save) or what you pay someone else for using their money (when you borrow). The percentage rate determines how much.` },

            { id: `l02-q2`, format: `multiple-choice`,
              question: `What's the difference between SIMPLE and COMPOUND interest?`,
              options: [
                `Compound interest is hard, simple interest is easy`,
                `Simple interest is calculated only on the original amount. Compound interest is calculated on the original PLUS all the interest already earned.`,
                `Compound interest is only for adults`,
                `They're the same`,
              ],
              correctIndex: 1,
              explanation: `Simple interest stays the same each year (calculated on principal only). Compound interest grows each year (calculated on principal plus past interest). Compound is much more powerful, especially over long time periods.` },

            { id: `l02-q3`, format: `multiple-choice`,
              question: `What does PRINCIPAL mean in finance?`,
              options: [
                `The leader of a school`,
                `The original amount of money you put in (saved, invested, or borrowed)`,
                `The interest you earn`,
                `The total you have`,
              ],
              correctIndex: 1,
              explanation: `Principal is the original amount of money. Interest is calculated as a percentage of the principal. Even though "principal" sounds like the school job (which is "principal" too), in finance it means your original sum.` },

            { id: `l02-q4`, format: `multiple-choice`,
              question: `What makes COMPOUND INTEREST so powerful over TIME?`,
              options: [
                `It doesn't really matter`,
                `Money earned earlier keeps earning more money. The longer it compounds, the faster the growth.`,
                `Banks add extra money`,
                `Magic`,
              ],
              correctIndex: 1,
              explanation: `Compound interest grows slowly at first but explodes over long periods. Earned interest gets added to the principal, then earns its own interest. After 50 years at 8%, your money grows about 47 times. Most of that growth happens in the later years.` },

            { id: `l02-q5`, format: `true-false`,
              question: `True or false: Someone who saves a small amount STARTING YOUNG will often end up with MORE money than someone who saves a bigger amount starting older.`,
              correctAnswer: true,
              explanation: `True. Time is the key ingredient. A teen saving $20/month at 7% from age 15 to 65 ends up with over $100,000. Waiting until age 35 to save the same amount cuts the final result by about 75%. Compound interest rewards time, not just amounts.` },

            { id: `l02-q6`, format: `multiple-choice`,
              question: `Where does compound interest happen in REAL LIFE?`,
              options: [
                `Only in textbooks`,
                `Savings accounts, investing, retirement accounts — and unfortunately also credit card debt, which works against you`,
                `Only in math class`,
                `Just at banks`,
              ],
              correctIndex: 1,
              explanation: `Compound interest is everywhere in finance. It works FOR you in savings, investing, and retirement accounts. It works AGAINST you in credit card debt and many loans. Same math principle, very different outcomes depending on which side you're on.` },

            { id: `l02-q7`, format: `multiple-choice`,
              question: `What is INVESTING?`,
              options: [
                `Just saving money in a bank`,
                `Putting money into something (stocks, bonds, real estate, businesses) expecting it to grow over time, usually through compound growth`,
                `Spending money`,
                `Hiding money`,
              ],
              correctIndex: 1,
              explanation: `Investing means putting money into something that you expect will grow. Stocks, bonds, real estate, businesses. Unlike saving (which is safer but slower), investing accepts some risk for higher potential growth. Smart investors usually start young and stay patient.` },

            { id: `l02-q8`, format: `multiple-choice`,
              question: `What's the most powerful LESSON of compound interest?`,
              options: [
                `Only rich people benefit`,
                `Time + small amounts + patience can build real wealth. Starting early matters more than starting big.`,
                `Money is unfair`,
                `Save in a piggy bank`,
              ],
              correctIndex: 1,
              explanation: `The most powerful lesson is that time matters most. A small amount started young, with patience, can outgrow a big amount started late. This is why personal finance teachers always say the same thing: start early, even with small amounts. Compound interest does the rest.` },
          ],
        },

        {
          id: `l02-reflection`,
          type: `reflection`,
          guideText: `Before we wrap, {name}, pick ONE question and actually answer it. Your response gets saved, and I'll remember it next time we talk.`,
          prompts: [
            { id: `r1`, text: `Imagine your grandma gave you $100 today and you put it in an investment earning 8% per year, without adding anything more. About what would it be worth when you're 60 years old (50+ years from now)?` },
            { id: `r2`, text: `If you could go back in time and tell yourself ONE thing about money at age 5, what would you say?` },
            { id: `r3`, text: `Compound interest rewards patience. Where else in your life does PATIENCE pay off in ways you can see?` },
            { id: `r4`, text: `If compound interest works AGAINST you with credit card debt, what's one rule you'd want to follow as an adult to avoid that trap?` },
          ],
        },

        {
          id: `l02-realworld`,
          type: `real-world`,
          guideText: `Compound interest is one of the few mathematical principles that genuinely shapes how lives unfold. People who understand it tend to save early, avoid bad debt, and let time work for them. People who don't understand it often save late, accumulate credit card debt, and feel like they're working harder than richer friends. The difference often isn't income. It's habits set up early. Ace's promise: if you remember ONE thing from this whole subject, remember compound interest. It will save and make you more money over your lifetime than almost anything else you could learn at your age.`,
          familyAdventure: `Family Compound Interest Race. Get a calculator. Pick two starting points. Person A: invests $1,000 at age 10, lets it grow at 8% per year, adds nothing more. Person B: invests $5,000 at age 40, lets it grow at 8% per year, adds nothing more. Both check at age 65. Who has more? (Spoiler: usually Person A, even with way less starting money.) Try other combinations. See for yourselves how time and rate change outcomes.`,
          creativePrompt: {
            intro: `Imagine writing a letter to a 5-year-old kid in your family, telling them about compound interest. Write it so they could understand it.`,
            floor: `Write at least 5 sentences. Explain what compound interest is in kid-friendly terms. Tell them why time matters. Give one simple piece of advice.`,
            stretch: `Write 8 to 10 sentences. Cover interest, compound interest, time as the magic ingredient, real examples a 5-year-old could relate to, and what habit you'd hope they build by age 10.`,
            open: `Write as much as you want. Build a full letter. Use stories or simple math examples. Show why patience pays off. Connect to things kids care about. End with practical advice they could follow at any age.`,
            frames: [
              `Dear (kid's name), I'm writing about something really cool called compound interest.`,
              `Imagine ___.`,
              `The magic is, ___.`,
              `The earlier you start, ___.`,
              `If I could give you one piece of money advice, it's ___.`,
            ],
          },
        },

        {
          id: `l02-celebration`,
          type: `celebration`,
          message: `Great work, {name}. You can now explain what interest is, the difference between simple and compound, why time matters so much, and where compound interest appears in real life. Next lesson: we shift from personal finance to business. BUILDING A REAL BUSINESS PLAN. Not "make a lemonade stand" advice. Actual structure that real entrepreneurs use. — Ace.`,
          badge: `compound-thinker`,
          badgeName: `Compound Thinker`,
          xpEarned: 75,
        },
      ],
    },
  ],
};

export default MONEY_UE_L02;

// ─── Dev asset check ──────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const screens = MONEY_UE_L02.lessons[0].screens;
  const mags = screens.filter(s => s.type === 'magazine').length;
  const game = screens.find(s => s.type === 'interactive')?.cases?.length ?? 0;
  const quiz = screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  const refl = screens.find(s => s.type === 'reflection')?.prompts?.length ?? 0;
  const totalVocab = screens.filter(s => s.type === 'magazine').reduce((sum, s) => sum + (s.vocab?.length || 0), 0);
  console.log(`[LESSON-MONEY-UE-L02 v1] Loaded with ${mags} magazine sections, ${totalVocab} vocab terms, ${game} game cases, ${quiz} quiz Qs, ${refl} reflection prompts`);
}
