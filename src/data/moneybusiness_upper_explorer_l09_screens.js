// ─────────────────────────────────────────────────────────────────────────────
// MONEY & BUSINESS UE  |  L09 — The Mindset of the Wealthy
// Age band : upper_explorers (9–10)   Guide: ace
// Standards: Jump$tart Personal Finance — Financial decision-making;
//            Long-term thinking and behavioral finance
// CALIBRATED: UE spec v1.1 — real domain terms, em-dashes sparing
// SCOPE: 4 concepts — looking rich vs being rich, long-term thinking,
//        spending on assets not status, patience and consistency
// VERSION: v1
// ─────────────────────────────────────────────────────────────────────────────

const MONEY_UE_L09 = {
  ageBand: `upper_explorers`,
  subjectId: `money`,
  guide: `ace`,

  lessons: [
    {
      id: `mb-9-10-09`,
      title: `The Mindset of the Wealthy`,
      duration: 18,
      xpReward: 75,
      badge: `wealth-mindset`,
      badgeName: `Wealth Mindset`,

      screens: [
        {
          id: `l09-welcome`,
          type: `welcome`,
          guideText: `Hey {name}, Ace here. Today's lesson is about something almost more important than any specific financial tool. The MINDSET that separates people who build real wealth from people who stay financially stuck. After studying thousands of wealthy people, researchers have found PATTERNS in how they think differently. None of it requires being a genius. Most of it isn't taught in schools. But these mindsets, started young, change lives. Let's go.`,
          headline: `The Mindset of the Wealthy`,
          subtitle: `What people who build real wealth think differently about money, time, and life`,
          visual: `/ue-assets/money/l09-welcome.webp`,
        },

        {
          id: `l09-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Looking Rich vs Being Rich`,
          paragraphs: [
            `One of the most consistent findings in wealth research is this: PEOPLE WHO LOOK RICH USUALLY AREN'T, and PEOPLE WHO ARE RICH USUALLY DON'T LOOK IT. Researchers Thomas Stanley and William Danko studied actual millionaires in the U.S. and wrote about their patterns in "The Millionaire Next Door." What they found surprised many people. Most real millionaires drive modest cars, live in modest homes, and don't wear flashy clothes. They saved and invested consistently for decades.`,
            `Meanwhile, many people who DRIVE LUXURY CARS, wear designer brands, and live in big houses have RELATIVELY LOW NET WORTH. They might have high incomes, but they spend most of it on appearances. Their lifestyle looks expensive because it IS expensive. They've optimized for LOOKING RICH, not for BEING RICH. Wealthy people tend to optimize for net worth (what they own). People focused on appearances tend to optimize for status (what others think of them). These are different games. You can't really win both.`,
          ],
          image: `/ue-assets/money/l09-s1-look-vs-be.webp`,
          imageCaption: `Looking rich and being rich are different games. Most people can't win both.`,
          vocab: [
            { word: `wealth`,
              definition: `How much you own (net worth), not how much you spend or how much you earn. Real wealth is built by owning more over time, not by looking impressive.`,
              audioPrompt: `Wealth is how much you own, {name} — your net worth: what you own minus what you owe. Wealth is not the same as income, and not the same as how you look. Many high-income people have low wealth because they spend everything. Many quietly wealthy people don't look rich at all. Researchers Thomas Stanley and William Danko studied actual millionaires and found this consistently. People who look rich often aren't. People who are rich often don't look it. Building wealth means optimizing for what you own.` },
            { word: `frugality`,
              definition: `Being careful and intentional about spending — not cheap, but deliberate. Spending on what truly matters, cutting what doesn't. Creates the gap between income and expenses where saving happens.`,
              audioPrompt: `Frugality is the practice of being careful and intentional about spending, {name}. Not being cheap — being deliberate. Spending on things that truly matter. Cutting spending on things that don't. Wealthy people tend to be frugal in unexpected ways: driving modest cars, shopping sales, avoiding unnecessary subscriptions. Frugality creates the gap between income and expenses that makes saving and investing possible. It's less about sacrifice and more about being honest about what you truly value. The best things in life don't always require the highest price.` },
          ],
        },

        {
          id: `l09-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Long-Term Thinking`,
          paragraphs: [
            `Wealthy people tend to think in DECADES, not days. Most financial choices that build real wealth are SLOW. Compound interest takes decades to do its magic (L02). Real estate appreciation usually happens over many years (L08). Businesses take time to grow profitable (L03). People who get rich quick are usually either lucky or actually broke (despite appearances). People who build LASTING wealth are almost always patient.`,
            `Long-term thinking changes everyday decisions. Should I buy this expensive item I want? A short-term thinker says "yes, I want it." A long-term thinker asks "what could this money do over 30 years if I invest it instead?" $100 spent on something fun today is gone tomorrow. $100 invested today could be worth $1,500 in 40 years at 7% growth. Both choices are valid. But long-term thinkers RECOGNIZE the trade-off. They make the choice consciously. They don't accidentally spend their future to look impressive today. Some long-term thinkers still spend on fun! They just know what each dollar represents.`,
          ],
          image: `/ue-assets/money/l09-s2-long-term.webp`,
          imageCaption: `Think in decades, not days. Today's $100 could be tomorrow's $1,500.`,
          vocab: [
            { word: `delayed gratification`,
              definition: `The ability to wait for something better later instead of taking something smaller now. One of the most consistent traits of people who build wealth (and many other forms of success).`,
              audioPrompt: `Delayed gratification is the ability to wait for something better later instead of taking something smaller now, {name}. Skipping coffee today to save the money. Studying tonight instead of watching TV so you can pass the test tomorrow. Investing money instead of spending it. Researchers found this is one of the most consistent traits of people who build wealth. It's linked to academic success, health, and many other good outcomes. The good news: delayed gratification can be practiced. Like a muscle, it gets stronger with use.` },
            { word: `impulse buying`,
              definition: `Purchasing something you didn't plan to buy, usually triggered by emotion, advertising, or a sale. One of the biggest drains on personal finances. Retailers design everything to trigger it.`,
              audioPrompt: `Impulse buying is purchasing something you didn't plan to buy, usually triggered by emotion or advertising, {name}. You walk in for one thing and leave with five. You see a limited-time deal and buy something you don't need. You're bored and online shopping feels like relief. Impulse buying is one of the biggest drains on personal finances. Retailers design stores, websites, and ads to trigger it. A helpful rule: wait 24 hours before buying anything over a certain amount. The impulse usually fades. Regret from overspending often doesn't.` },
          ],
        },

        {
          id: `l09-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Spending on Assets, Not Status`,
          paragraphs: [
            `Wealthy people tend to spend money on ASSETS (things that grow in value or produce income). Most other people tend to spend money on STATUS (things that signal success to others but don't grow in value). Think about the difference. A wealthy person might use spare money to buy more index funds, additional rental property, or improvements to a business. Each purchase is an asset that builds future wealth. A status-focused person might use the same money on a luxury car, designer clothes, or an expensive vacation. Each purchase signals success but doesn't build any future wealth.`,
            `This doesn't mean wealthy people NEVER spend on fun things. Many do. But the PROPORTIONS are different. Wealthy people typically spend most of their income on assets and modest amounts on lifestyle. Status-focused people typically spend most on lifestyle and not much on assets. Over decades, the difference compounds into very different outcomes. Ace's observation: notice how you feel after spending. After buying an asset, you usually feel like you DID something. After buying status, you might feel briefly happy, then empty within days. That feeling is a signal worth paying attention to.`,
          ],
          image: `/ue-assets/money/l09-s3-assets-status.webp`,
          imageCaption: `Assets grow your future. Status fades fast. Both feel good. Only one compounds.`,
          vocab: [
            { word: `lifestyle inflation`,
              definition: `When your spending grows just because your income grows. Common trap — keeps people working hard while never accumulating wealth. Avoiding it is one of the most powerful financial habits.`,
              audioPrompt: `Lifestyle inflation is when your spending grows just because your income grows, {name}. One of the most common financial traps. Someone gets a raise from 50,000 to 70,000 dollars per year. Instead of saving the extra, they upgrade their car, eat at fancier restaurants, and rent a nicer apartment. Their lifestyle inflates to consume the higher income. Five years later, earning more but no wealthier. Avoiding lifestyle inflation, especially when income grows, is one of the most powerful financial habits. The gap between income and expenses is where wealth lives.` },
            { word: `status symbol`,
              definition: `Something purchased primarily to signal wealth or success to others. Luxury cars, designer clothes, expensive watches. Status symbols mostly depreciate while the cost stays real.`,
              audioPrompt: `A status symbol is something purchased primarily to signal wealth or success to others, {name}. Luxury cars. Designer clothes. Expensive watches. These things communicate: I've made it. The problem is that status symbols mostly depreciate. Cars lose value. Fashion changes. The signal fades. But the cost stays real. Wealthy people typically spend less on status symbols than high-earners trying to look wealthy. When the goal is actual wealth, money goes toward assets, not appearances. Every dollar spent on status is a dollar not building your future.` },
          ],
        },

        {
          id: `l09-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Patience, Consistency, and Quiet Discipline`,
          paragraphs: [
            `Wealthy people are usually NOT geniuses, lucky, or born rich. Most wealth in modern economies is built over many years by ORDINARY people who consistently apply boring habits. Save a portion of every paycheck. Invest in diversified index funds and other assets. Avoid high-interest debt. Live below their means. Resist lifestyle inflation when income grows. Stay patient through market crashes. Keep going for decades. Nothing here is exciting. All of it is effective.`,
            `Most people fail at this because the habits are BORING and the rewards take YEARS. It's much more exciting to look for "get rich quick" schemes, hot stocks, or trendy investments. Most of those fail. Meanwhile, the boring person investing $500 a month in an index fund from age 25 to age 65 ends up with millions, even with no special talent. Ace's truth: wealth building isn't about being smart. It's about being consistent. Most people don't lack the knowledge. They lack the patience. Start young, stay patient, ignore distractions, let compound interest work. That's the formula. It always has been.`,
          ],
          image: `/ue-assets/money/l09-s4-patience.webp`,
          imageCaption: `Save. Invest. Live below means. Stay patient. Repeat for decades. The formula.`,
          vocab: [
            { word: `financial freedom`,
              definition: `When your investments and assets generate enough income to cover your living expenses, so you don't HAVE to work for money. Different from being "rich" — it's about freedom of choice.`,
              audioPrompt: `Financial freedom is when your investments and assets generate enough income to cover your living expenses, {name}. You don't have to work for money anymore. Different from being rich. Someone with modest needs and a paid-off house plus a small investment portfolio might be financially free, while a high-spender with a $5 million income but huge expenses isn't. Financial freedom is about choice. You can still work because you want to (most financially free people do). But you're free from having to. It's the ultimate financial goal for many people.` },
            { word: `passive income`,
              definition: `Money that flows in regularly without you actively working for it each time. Rental property profit, stock dividends, bond interest. When passive income covers expenses, you've reached financial freedom.`,
              audioPrompt: `Passive income is money that flows in regularly without you actively working for it, {name}. Rental property profit. Stock dividends. Bond interest. All passive income. It's one of the main goals of wealth-building. When your passive income covers your expenses, you've reached financial freedom. Most passive income requires upfront investment of money or time to build. It's not truly effortless. But once running, it flows without constant effort from you. Building passive income streams is one of the most powerful things you can do for long-term financial independence.` },
          ],
        },

        {
          id: `l09-game`,
          type: `interactive`,
          format: `investigation`,
          guideText: `Investigation time, {name}. Four people described by their money choices. For each one, identify which mindset pattern fits best: STATUS-FOCUSED (optimizing for looking rich), LONG-TERM ASSET-FOCUSED (optimizing for building real wealth), or LIFESTYLE-INFLATED (spending more as income grows, no real progress)?\n\nOne is sneakier than it looks.`,
          options: [
            { id: `status`,    label: `Status-Focused`,           color: `#F87171`, description: `Spends money on appearances and luxury items, optimizing for how others see them.` },
            { id: `assets`,    label: `Long-Term Asset-Focused`, color: `#34D399`, description: `Spends on investments and things that build future wealth. Patient and disciplined.` },
            { id: `inflated`,  label: `Lifestyle-Inflated`,       color: `#FBBF24`, description: `Income has grown, but spending grew with it, so no real wealth is being built.` },
          ],
          cases: [
            {
              id: `case-1`,
              caseTitle: `Person #1`,
              clues: [
                { text: `Drives a 2008 Toyota Camry, lives in a modest home, doesn't wear designer clothes.` },
                { text: `Saves 25% of income every month and invests in index funds.` },
                { text: `Has a net worth of $1.5 million at age 50, despite a moderate income.` },
              ],
              correctAnswer: `assets`,
              realWorldExample: `Classic "Millionaire Next Door" pattern.`,
              explanation: `Modest spending. Heavy saving. Long-term investing. High net worth. Pure long-term asset-focused. The kind of person Stanley and Danko wrote about in their research.`,
            },
            {
              id: `person-2`,
              caseTitle: `Person #2`,
              clues: [
                { text: `Drives a $90,000 luxury car (leased).` },
                { text: `Lives in a 4-bedroom home with a big mortgage.` },
                { text: `Earns $250,000 a year but has a net worth of only $40,000.` },
              ],
              correctAnswer: `status`,
              realWorldExample: `High income with low net worth is more common than people realize.`,
              explanation: `High income, expensive lifestyle, low net worth. Most income is going to lifestyle, not assets. Pure status-focused. This person LOOKS wealthy but isn't really. If the income stopped, they'd be in trouble fast.`,
            },
            {
              id: `case-3`,
              caseTitle: `Person #3`,
              clues: [
                { text: `Has saved 15% of income for 20 years through index funds.` },
                { text: `Quietly built up a $500,000 portfolio that now earns about $35,000 a year in dividends.` },
                { text: `Could technically retire at 45 if she wanted, but chooses to keep working.` },
              ],
              correctAnswer: `assets`,
              realWorldExample: `Many financially independent people work because they want to, not because they have to.`,
              explanation: `Decades of patient saving and investing. Built a portfolio that produces enough income to cover expenses. Pure long-term asset-focused. She's reached financial freedom and could stop working anytime. She works because she enjoys it.`,
            },
            {
              id: `case-4`,
              caseTitle: `Person #4 — The Tricky One`,
              clues: [
                { text: `Started at $40,000/year salary and saved very little.` },
                { text: `Got promoted to $80,000, then $120,000, then $180,000 over 15 years.` },
                { text: `Each time income increased, they upgraded their car, home, vacations, and clothes. Now earning $180,000 with a net worth of $30,000.` },
              ],
              correctAnswer: `inflated`,
              realWorldExample: `Lifestyle inflation is one of the most common wealth-killers.`,
              explanation: `Tricky because this looks like a SUCCESS story (huge income growth). But the net worth is still tiny. Income grew 4.5x. Spending grew right alongside. So nothing accumulated. Pure lifestyle inflation. This is one of the most common financial mistakes. People assume "I just need a higher income to build wealth." Then they get higher income and never build wealth because their lifestyle inflates to consume it. The gap between income and expenses (L05) matters more than income alone.`,
            },
          ],
        },

        {
          id: `l09-quiz`,
          type: `quiz`,
          guideText: `Let's see what stuck, {name}.`,
          questions: [
            { id: `l09-q1`, format: `multiple-choice`,
              question: `What's the surprising finding from research on wealthy people?`,
              options: [
                `Wealthy people always look rich`,
                `People who LOOK rich often aren't, and people who ARE rich often don't look it`,
                `Wealth requires high income`,
                `Only luck creates wealth`,
              ],
              correctIndex: 1,
              explanation: `Research consistently shows that many quietly wealthy people live modestly while many high-spenders have low net worth. Looking rich and being rich are different games. They're played differently.` },

            { id: `l09-q2`, format: `multiple-choice`,
              question: `How do wealthy people typically think about TIME?`,
              options: [
                `In days`,
                `In decades — they make decisions based on long-term outcomes, not short-term wants`,
                `In hours`,
                `They don't think about time`,
              ],
              correctIndex: 1,
              explanation: `Long-term thinking is one of the most consistent traits of wealth-builders. Compound interest takes decades. Real estate takes years. Businesses take time. People who think in decades make different choices than people who think in days.` },

            { id: `l09-q3`, format: `multiple-choice`,
              question: `What's DELAYED GRATIFICATION?`,
              options: [
                `Skipping all fun`,
                `The ability to wait for something better later instead of taking something smaller now`,
                `Being slow`,
                `Never spending money`,
              ],
              correctIndex: 1,
              explanation: `Delayed gratification is choosing future rewards over immediate ones when the future reward is bigger. Skipping coffee today to invest the money. Studying tonight to pass tomorrow's test. Research links this skill to many positive outcomes, including wealth.` },

            { id: `l09-q4`, format: `multiple-choice`,
              question: `What's the difference between spending on ASSETS vs spending on STATUS?`,
              options: [
                `No difference`,
                `Assets grow in value or produce income. Status spending signals success but doesn't build future wealth.`,
                `Status is better`,
                `Assets are only for adults`,
              ],
              correctIndex: 1,
              explanation: `Buying index funds, real estate, or business investments are asset purchases. They keep working for you. Buying luxury cars, designer clothes, or expensive vacations are status purchases. They look impressive briefly but don't build wealth.` },

            { id: `l09-q5`, format: `true-false`,
              question: `True or false: Most wealthy people built their wealth through patient, boring habits over many years.`,
              correctAnswer: true,
              explanation: `True. Research shows most wealthy people aren't geniuses, lucky, or born rich. They're ordinary people who consistently applied boring habits: save, invest in diversified assets, avoid bad debt, live below their means, stay patient. Decades of consistency compound into wealth.` },

            { id: `l09-q6`, format: `multiple-choice`,
              question: `What is LIFESTYLE INFLATION?`,
              options: [
                `When prices rise`,
                `When your spending grows just because your income grows — common trap that prevents wealth building`,
                `Higher rent`,
                `Wage growth`,
              ],
              correctIndex: 1,
              explanation: `Lifestyle inflation happens when raises lead to bigger spending instead of bigger saving. Someone earning $50K and saving 10% is in better shape than someone earning $100K and saving 5%, in absolute terms. Avoiding lifestyle inflation is one of the most powerful wealth-building habits.` },

            { id: `l09-q7`, format: `multiple-choice`,
              question: `What is FINANCIAL FREEDOM?`,
              options: [
                `Being super rich`,
                `When your investments and assets generate enough income to cover your living expenses — you don't HAVE to work for money`,
                `Living without rules`,
                `Never working`,
              ],
              correctIndex: 1,
              explanation: `Financial freedom isn't about being rich. It's about choice. When your assets generate enough income to cover expenses, you don't have to work. Most financially free people still work, because they want to. The freedom is in being able to choose.` },

            { id: `l09-q8`, format: `multiple-choice`,
              question: `What's the SECRET to building wealth, according to research?`,
              options: [
                `Being a genius`,
                `Boring habits applied consistently: save, invest, avoid bad debt, live below means, stay patient, let compound interest work`,
                `Getting lucky`,
                `Working 24/7`,
              ],
              correctIndex: 1,
              explanation: `Wealth building isn't about being smart. It's about consistency. The "boring" habits are what work. Most people don't lack the knowledge — they lack the patience. Start young, stay patient, ignore distractions, let compound interest do its work. That's the real formula.` },
          ],
        },

        {
          id: `l09-reflection`,
          type: `reflection`,
          guideText: `Before we wrap, {name}, pick ONE question and actually answer it. Your response gets saved, and I'll remember it next time we talk.`,
          prompts: [
            { id: `r1`, text: `Pick a person you know who seems FINANCIALLY DOING WELL. What do you actually know about their habits — or are you mostly guessing from how they LOOK?` },
            { id: `r2`, text: `Imagine getting a $50 surprise gift today. Spending it on something fun would feel good for a few days. Investing it in an index fund at 7% growth would be worth ~$1,000 in 40 years. Which would you choose, and why?` },
            { id: `r3`, text: `Lifestyle inflation is when you spend more just because you earn more. What's ONE small thing you'd want to NOT inflate as you grow up and earn more?` },
            { id: `r4`, text: `Ace says the boring habits actually work. What's a boring habit you already do that pays off over time? (Doesn't have to be about money.)` },
          ],
        },

        {
          id: `l09-realworld`,
          type: `real-world`,
          guideText: `These mindset patterns aren't taught in most schools. Many adults stumble through their financial lives without ever encountering them. The fact that you're learning these in your tens or early teens gives you a real advantage. The kid who starts thinking like this at age 10 is already ahead of most 30-year-olds. Ace's note: Coreverse's parents probably already know much of this. The reason they're investing in your education at this depth is that they want you to start with the mindset rich people usually develop later, if at all. Use it.`,
          familyAdventure: `Family Wealth Mindset Conversation. As a family, talk about one or two of these ideas at age-appropriate level: do you know anyone who looks rich but you suspect isn't? Do you know anyone who's quietly built wealth? What habits do they have? Are there any spending patterns in your family that might be "status" purchases vs "asset" ones? No judgments. Just honest observations.`,
          creativePrompt: {
            intro: `Write a letter from your 65-year-old self to your current self about money mindset.`,
            floor: `Write at least 5 sentences. Cover one thing you wish you'd learned earlier, one thing about long-term thinking, and one piece of advice.`,
            stretch: `Write 8 to 10 sentences. Include lessons from the chapter (looking rich vs being rich, long-term thinking, assets vs status, patience), and one real choice you're glad you made.`,
            open: `Write as much as you want. Build a full letter from your future older self. Include your hopes for your current self, lessons about money mindset, and specific advice that your current self might actually be able to follow. Be honest and specific.`,
            frames: [
              `Dear younger me, I'm writing from age 65.`,
              `One thing I wish you understood now is ___.`,
              `When you're tempted to spend money on status, remember ___.`,
              `The boring habit that paid off most was ___.`,
              `If you do ONE thing differently than I did, do ___.`,
            ],
          },
        },

        {
          id: `l09-celebration`,
          type: `celebration`,
          message: `Great work, {name}. You can now explain the difference between looking rich and being rich, the importance of long-term thinking, why wealthy people spend on assets rather than status, and why patient consistency matters more than genius. Next lesson: how businesses can also help the world. SOCIAL ENTREPRENEURSHIP. — Ace.`,
          badge: `wealth-mindset`,
          badgeName: `Wealth Mindset`,
          xpEarned: 75,
        },
      ],
    },
  ],
};

export default MONEY_UE_L09;

// ─── Dev asset check ──────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const screens = MONEY_UE_L09.lessons[0].screens;
  const mags = screens.filter(s => s.type === 'magazine').length;
  const game = screens.find(s => s.type === 'interactive')?.cases?.length ?? 0;
  const quiz = screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  const refl = screens.find(s => s.type === 'reflection')?.prompts?.length ?? 0;
  const totalVocab = screens.filter(s => s.type === 'magazine').reduce((sum, s) => sum + (s.vocab?.length || 0), 0);
  console.log(`[LESSON-MONEY-UE-L09 v1] Loaded with ${mags} magazine sections, ${totalVocab} vocab terms, ${game} game cases, ${quiz} quiz Qs, ${refl} reflection prompts`);
}
