// ─────────────────────────────────────────────────────────────────────────────
// MONEY & BUSINESS UE  |  L13 — Cryptocurrency: What Is It?
// Age band : upper_explorers (9–10)   Guide: ace
// Standards: Jump$tart Personal Finance — Understanding digital currency
//            and emerging financial systems; Risk literacy
// CALIBRATED: UE spec v1.1 — real domain terms, em-dashes sparing
// SCOPE: 4 concepts — what crypto actually is, how blockchain works
//        (kid-friendly), why it exists, honest risk assessment
// VERSION: v1
// ─────────────────────────────────────────────────────────────────────────────

const MONEY_UE_L13 = {
  ageBand: `upper_explorers`,
  subjectId: `money`,
  guide: `ace`,

  lessons: [
    {
      id: `mb-9-10-13`,
      title: `Cryptocurrency: What Is It?`,
      duration: 18,
      xpReward: 75,
      badge: `crypto-thinker`,
      badgeName: `Crypto Thinker`,

      screens: [
        {
          id: `l13-welcome`,
          type: `welcome`,
          guideText: `Hey {name}, Ace here. Today's lesson is one that confuses MOST ADULTS. CRYPTOCURRENCY. Crypto. Bitcoin. Blockchain. You've probably heard these words. Today we cover what they actually mean, in a way that makes sense. We touched on crypto in L01 (history of money). Now we go deeper. Some people are convinced crypto is the future of money. Some are convinced it's a bubble that will burst. Many experts are still unsure. By the end of this lesson, you'll understand what it actually is, and be able to think clearly about it instead of just believing whatever someone tells you. Let's go.`,
          headline: `Cryptocurrency`,
          subtitle: `What it actually is, how it works, and how to think clearly about it`,
          visual: `/ue-assets/money/l13-welcome.webp`,
        },

        {
          id: `l13-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `What Cryptocurrency Actually Is`,
          paragraphs: [
            `CRYPTOCURRENCY is digital money that exists ONLY as computer code. No physical coins. No physical bills. No bank account in a regular bank. Instead, it lives in a special kind of database called a BLOCKCHAIN, which is shared across many computers around the world. BITCOIN was the first cryptocurrency, invented in 2009 by an anonymous person (or group) using the name Satoshi Nakamoto. Many other cryptocurrencies have been created since: Ethereum, Solana, USDC, and thousands more.`,
            `The KEY thing about cryptocurrency is that it's NOT CONTROLLED by any single government, bank, or company. Regular money (dollars, euros, yen) is issued and controlled by governments. Banks track accounts. Companies process payments. Crypto eliminates these middle steps. The blockchain itself, running across thousands of computers, keeps track of who owns what. This DECENTRALIZED design is what makes crypto unique and controversial. Some people love it for this reason. Others worry about it for the same reason.`,
          ],
          image: `/ue-assets/money/l13-s1-what-is.webp`,
          imageCaption: `Cryptocurrency: digital money on a shared blockchain. Not controlled by any single entity.`,
          vocab: [
            { word: `cryptocurrency`,
              definition: `Digital money that exists only as computer code, recorded on a shared blockchain instead of in regular banks. Not controlled by any single government or company. Bitcoin was the first; thousands now exist.`,
              audioPrompt: `Cryptocurrency is digital money that exists only as computer code, {name}. No physical coins. No physical bills. No regular bank account. Instead, it lives in a special database called a blockchain, which is shared across many computers around the world. Bitcoin was the first cryptocurrency, invented in 2009 by an anonymous person or group. Many others have been created since. The key thing is that crypto is not controlled by any single government, bank, or company. The blockchain itself, running across thousands of computers, keeps track of who owns what.` },
            { word: `decentralized`,
              definition: `Not controlled by any single authority, company, or government. Cryptocurrency is decentralized — it runs on thousands of computers instead of being managed by a central bank. The opposite of centralized systems like regular banks.`,
              audioPrompt: `Decentralized means not controlled by any single authority, company, or government, {name}. Regular money is centralized — governments issue it, banks store it, payment companies process it. Cryptocurrency is decentralized — it runs on thousands of computers simultaneously with no single point of control. No one bank can freeze your account. No government can print more. The system runs itself through rules written into the code. Decentralization is what makes crypto appealing to some people and concerning to regulators. It's both a strength and a source of risk.` },
          ],
        },

        {
          id: `l13-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `How Blockchain Works (Simplified)`,
          paragraphs: [
            `A BLOCKCHAIN is like a shared NOTEBOOK that everyone in the network can see, but nobody can secretly change. When someone makes a transaction (sends crypto to someone else), the transaction is grouped with other recent transactions into a "BLOCK." That block is then VERIFIED by computers around the world (using complex math). Once verified, it's added to the chain of previous blocks (hence the name "blockchain"). All the computers update their copies of the notebook.`,
            `Once a block is added, it's nearly IMPOSSIBLE to change. Because thousands of computers each have a copy, you'd have to hack thousands at once to forge anything. This is why people trust blockchain transactions: not because they trust any one person, but because the math and the network make cheating extremely hard. The whole system is sometimes called "trustless" (in a good way), meaning you don't need to trust a bank or a person, just the protocol. Blockchain technology has uses beyond money too. Tracking food shipments. Recording who owns digital art. Some predict it will be used for many things over the next decade.`,
          ],
          image: `/ue-assets/money/l13-s2-blockchain.webp`,
          imageCaption: `Blockchain: shared notebook on thousands of computers. Hard to fake. Hard to change.`,
          vocab: [
            { word: `blockchain`,
              definition: `A shared database stored across many computers, where transactions are grouped into "blocks" and linked in a "chain" that's very hard to change or fake. The technology underneath most cryptocurrencies.`,
              audioPrompt: `A blockchain is like a shared notebook that everyone in the network can see, but nobody can secretly change, {name}. When someone makes a transaction, it's grouped with other recent transactions into a block. That block is verified by computers around the world. Once verified, it's added to the chain of previous blocks. Once a block is added, it's nearly impossible to change because thousands of computers each have a copy. You would have to hack thousands at once to forge anything. This is what makes blockchain trustworthy.` },
            { word: `wallet`,
              definition: `A tool (app or device) for storing and accessing cryptocurrency. A crypto wallet holds your private keys — the secret codes that prove you own your crypto. Losing your private key means losing access forever.`,
              audioPrompt: `A crypto wallet is a tool for storing and accessing your cryptocurrency, {name}. It can be an app on your phone, a website, or a physical device. Unlike a bank account, a wallet doesn't store your actual coins. It stores your private keys, the secret codes that prove you own your crypto. If you lose your private key and have no backup, your crypto is gone forever. No customer service can help. This is one of the most serious practical risks of owning crypto compared to using a regular bank.` },
          ],
        },

        {
          id: `l13-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Why Crypto Exists`,
          paragraphs: [
            `Cryptocurrency was created to solve some real problems with regular money. Banks can be SLOW (international transfers can take days). Banks charge FEES. Governments can PRINT more money, reducing its value (this is called inflation). Banks can FREEZE or LIMIT accounts. Some people don't have access to banks at all. Crypto, in theory, allows fast, low-cost, borderless transactions without depending on any single institution. For people who don't trust banks or governments, this is appealing.`,
            `Bitcoin specifically was designed to have a LIMITED SUPPLY. Only 21 million bitcoins will ever exist. This is unlike regular money (where governments can print more). Supporters say this makes Bitcoin like "DIGITAL GOLD" — scarce, durable, and a store of value. Critics say Bitcoin is mostly speculation, used more for gambling than actual transactions. Both can have some truth at the same time. Other cryptocurrencies have different designs. Some try to be everyday money. Some power things like NFTs (digital ownership) or decentralized apps. The space is large and changing fast.`,
          ],
          image: `/ue-assets/money/l13-s3-why.webp`,
          imageCaption: `Crypto exists to solve real problems with regular money. Mileage may vary.`,
          vocab: [
            { word: `Bitcoin`,
              definition: `The first cryptocurrency, invented in 2009 by an anonymous creator. Designed to have a limited supply (only 21 million will ever exist). Sometimes called "digital gold" because of its scarcity.`,
              audioPrompt: `Bitcoin is the first cryptocurrency, {name}. Invented in 2009 by an anonymous person or group using the name Satoshi Nakamoto. Designed to have a limited supply. Only 21 million bitcoins will ever exist. This is unlike regular money, where governments can print more whenever they want. Supporters say Bitcoin's scarcity makes it like digital gold. Critics say it's mostly speculation. Both viewpoints can have truth at the same time. Bitcoin's price has gone up and down dramatically. Whether it ever becomes everyday money is still being debated.` },
            { word: `inflation`,
              definition: `When the general price of goods and services rises over time, reducing the purchasing power of money. Governments can cause inflation by printing more money. Bitcoin was partly designed as protection against inflation.`,
              audioPrompt: `Inflation is when the general price of goods and services rises over time, reducing what money can buy, {name}. If inflation is 5 percent per year, 100 dollars buys less next year than today. Governments cause inflation by printing more money — more supply makes each unit worth less. This is one reason Bitcoin was created: its supply is capped at 21 million coins forever. Whether Bitcoin protects against inflation is debated. But inflation is real, and understanding it helps you protect your savings.` },
          ],
        },

        {
          id: `l13-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Honest Risks and Trade-offs`,
          paragraphs: [
            `Now the honest part. Cryptocurrency has REAL RISKS that supporters often understate. (1) VOLATILITY: prices can swing 30-50% in days. Bitcoin has had several crashes of 70%+. People have lost their entire savings. (2) SCAMS: Crypto's lack of regulation makes it easier for fraudsters. Many "promising" crypto projects have turned out to be schemes. (3) ENVIRONMENTAL: Some cryptocurrencies (especially Bitcoin) use massive amounts of electricity to operate. (4) LOST ACCESS: If you lose your password (called a "private key"), your crypto is gone forever. There's no customer service to call.`,
            `Honest assessment: Crypto is INTERESTING and POSSIBLY important long-term, but also VERY RISKY today. Most experts recommend NEVER putting in more than you can afford to lose. Some experts think Bitcoin might gradually mature into a legitimate financial asset. Some think crypto will mostly fail and only a few projects will survive. Most experts agree that the speculation around crypto involves real risk. Ace's note: anyone telling you "crypto will make you rich" is selling something. Anyone telling you "crypto is worthless" is also oversimplifying. Honest people admit it's uncertain. Stay curious, stay skeptical, and don't follow the hype.`,
          ],
          image: `/ue-assets/money/l13-s4-risks.webp`,
          imageCaption: `Volatility. Scams. Environment. Lost passwords. Real risks the hype often ignores.`,
          vocab: [
            { word: `volatility`,
              definition: `How much something's price swings up and down over time. Highly volatile investments (like most cryptocurrencies) can rise or fall 30-50% in days. Risky for short-term holding.`,
              audioPrompt: `Volatility is how much something's price swings up and down over time, {name}. Highly volatile investments rise or fall sharply, sometimes 30 to 50 percent in days. Most cryptocurrencies are highly volatile. Bitcoin has had several crashes of 70 percent or more, then recovered, then crashed again. People have made and lost fortunes during these swings. Volatility is risky for short-term holding because you might need to sell at exactly the wrong moment. Lower-volatility investments (like bonds or large stable companies) move more slowly but also more predictably.` },
            { word: `FOMO`,
              definition: `Fear Of Missing Out. The anxiety that others are benefiting from something you're not in on. A major psychological driver of bad investment decisions, especially in crypto booms. Hype exploits FOMO deliberately.`,
              audioPrompt: `FOMO stands for Fear Of Missing Out, {name}. The anxious feeling that everyone else is getting rich from something you're not doing. FOMO is one of the most powerful drivers of bad financial decisions, especially in crypto. When Bitcoin's price rises, FOMO drives people to buy at the peak because they're afraid to be left behind. Then the price drops and they lose money. Hype deliberately triggers FOMO. "Buy NOW before it's too late!" is always FOMO manipulation. Recognizing FOMO in yourself is the best protection against investment mistakes.` },
          ],
        },

        {
          id: `l13-game`,
          type: `interactive`,
          format: `investigation`,
          guideText: `Investigation time, {name}. Four crypto-related situations. For each one, identify what's happening: HONEST INFORMATION (someone explaining crypto accurately), HYPE (excessive promises without honest risk disclosure), or SCAM (deliberate fraud)?\n\nOne is sneakier than it looks.`,
          options: [
            { id: `honest`,    label: `Honest Information`, color: `#34D399`, description: `Someone explaining crypto accurately, including both possibilities and risks.` },
            { id: `hype`,      label: `Hype`,                color: `#FBBF24`, description: `Promises and excitement, but no honest disclosure of risks. May or may not be malicious.` },
            { id: `scam`,      label: `Scam`,                color: `#F87171`, description: `Deliberate fraud. Designed to take money from victims using false promises.` },
          ],
          cases: [
            {
              id: `case-1`,
              caseTitle: `Scenario #1`,
              clues: [
                { text: `A financial expert writes an article: "Bitcoin has gained value over the past 10 years, but it's also crashed 70%+ several times. Don't invest more than you can afford to lose."` },
                { text: `The article explains blockchain basics, lists real risks, and doesn't promise quick riches.` },
                { text: `It includes both the case for Bitcoin and the case against it.` },
              ],
              correctAnswer: `honest`,
              realWorldExample: `Most respected financial journalists write this way.`,
              explanation: `Balanced. Risks disclosed. Both sides represented. Pure honest information. This is what good financial reporting looks like. You can disagree with the conclusion, but the analysis is fair.`,
            },
            {
              id: `case-2`,
              caseTitle: `Scenario #2`,
              clues: [
                { text: `A social media influencer posts: "Bitcoin to $1 MILLION by 2030! 🚀🚀🚀 If you're not buying NOW, you're going to regret it FOREVER!"` },
                { text: `No discussion of risks.` },
                { text: `Excited emojis everywhere. Strong emotional pressure to buy immediately.` },
              ],
              correctAnswer: `hype`,
              realWorldExample: `Crypto Twitter is full of posts like this.`,
              explanation: `All upside. No downside. Emotional pressure. Pure hype. Some of these influencers genuinely believe their predictions. Others are just trying to pump up prices so they can sell. Either way, this isn't honest information.`,
            },
            {
              id: `case-3`,
              caseTitle: `Scenario #3`,
              clues: [
                { text: `An email says: "Send $500 in Bitcoin to this wallet address. I'll send you back $5,000 within 24 hours. This is a special program for early supporters!"` },
                { text: `The sender claims to be a famous billionaire.` },
                { text: `Once you send the Bitcoin, the sender disappears and you can't get it back.` },
              ],
              correctAnswer: `scam`,
              realWorldExample: `"Doubler" scams are common in crypto.`,
              explanation: `Promises something for nothing. Asks for crypto with no real exchange. Disappears. Pure scam. This kind of scam has stolen hundreds of millions of dollars from people who believed it. Crypto's lack of regulation makes scams easier to pull off and harder to reverse.`,
            },
            {
              id: `case-4`,
              caseTitle: `Scenario #4 — The Tricky One`,
              clues: [
                { text: `A new cryptocurrency called "SafeMoon X" launches.` },
                { text: `The website promises 30% returns each month, says it's "100% safe with no risk," and uses celebrity endorsements.` },
                { text: `The technical details on how SafeMoon X actually generates returns are vague or missing.` },
              ],
              correctAnswer: `scam`,
              realWorldExample: `Many crypto "projects" have turned out to be Ponzi schemes.`,
              explanation: `Tricky because it LOOKS like a real cryptocurrency project. Has a name. Has a website. Has endorsements. But: 30% guaranteed monthly returns + "no risk" + vague technical details + celebrity endorsements = classic warning signs of a Ponzi scheme. Many "promising" crypto projects have turned out to be exactly this. They take money from new investors to pay returns to earlier investors, until the whole thing collapses. Lesson: any investment promising guaranteed high returns with no risk is almost always a scam. Real investments have real risks. The crypto space has many of these scams precisely because the lack of regulation makes them easier to set up.`,
            },
          ],
        },

        {
          id: `l13-quiz`,
          type: `quiz`,
          guideText: `Let's see what stuck, {name}.`,
          questions: [
            { id: `l13-q1`, format: `multiple-choice`,
              question: `What is CRYPTOCURRENCY?`,
              options: [
                `Just digital cash from a bank`,
                `Digital money that exists only as computer code, recorded on a shared blockchain, NOT controlled by any single government or bank`,
                `A type of credit card`,
                `Old foreign currency`,
              ],
              correctIndex: 1,
              explanation: `Crypto is digital money on a decentralized blockchain. No physical coins, no central authority. Bitcoin was the first (2009). Thousands of cryptocurrencies now exist. The lack of central control is what makes crypto unique and controversial.` },

            { id: `l13-q2`, format: `multiple-choice`,
              question: `What is a BLOCKCHAIN?`,
              options: [
                `A type of necklace`,
                `A shared database stored across many computers, where transactions are grouped into "blocks" linked in a chain that's very hard to change or fake`,
                `A bank vault`,
                `Just a single computer`,
              ],
              correctIndex: 1,
              explanation: `A blockchain is like a shared notebook on thousands of computers. Transactions are bundled into blocks and added in order. Once added, blocks are nearly impossible to change because thousands of computers each have a copy. This makes the system trustworthy without central authority.` },

            { id: `l13-q3`, format: `multiple-choice`,
              question: `What's special about BITCOIN'S supply?`,
              options: [
                `Unlimited`,
                `Limited to only 21 million bitcoins, ever — unlike regular money where governments can print more`,
                `Just 1 million`,
                `Whatever the bank decides`,
              ],
              correctIndex: 1,
              explanation: `Bitcoin's supply is mathematically capped at 21 million. This scarcity is one reason supporters call Bitcoin "digital gold." Unlike government-issued money, no one can print more bitcoin. Whether this makes Bitcoin valuable in the long term is debated.` },

            { id: `l13-q4`, format: `multiple-choice`,
              question: `Why was CRYPTOCURRENCY originally created?`,
              options: [
                `Just for fun`,
                `To solve problems with regular money: slow international transfers, fees, governments printing money, banks freezing accounts, and some people lacking bank access`,
                `By accident`,
                `By a single government`,
              ],
              correctIndex: 1,
              explanation: `Crypto was designed to enable fast, low-cost, borderless transactions without depending on banks or governments. Whether it has succeeded at these goals is debated. The original vision and current reality may not fully align.` },

            { id: `l13-q5`, format: `true-false`,
              question: `True or false: Cryptocurrency has REAL risks, including extreme volatility, scams, environmental concerns, and the danger of losing access forever if you lose your password.`,
              correctAnswer: true,
              explanation: `True. Crypto's risks are real. Prices can swing 30-50% in days. Many "promising" projects have turned out to be scams. Bitcoin uses massive electricity. If you lose your private key, your crypto is gone forever with no customer service to help. Honest crypto coverage discusses all of these.` },

            { id: `l13-q6`, format: `multiple-choice`,
              question: `What is VOLATILITY?`,
              options: [
                `Stability`,
                `How much something's price swings up and down over time — most cryptocurrencies are highly volatile`,
                `Speed of trading`,
                `Size of a market`,
              ],
              correctIndex: 1,
              explanation: `Volatility is how much prices swing. Bitcoin has crashed 70%+ several times, then recovered, then crashed again. Volatility is risky because you might need to sell at exactly the wrong time. Lower-volatility investments move more slowly but more predictably.` },

            { id: `l13-q7`, format: `multiple-choice`,
              question: `What's a CLASSIC sign of a crypto SCAM?`,
              options: [
                `Having a website`,
                `Promising guaranteed high returns with "no risk" — any real investment has real risk`,
                `Being new`,
                `Using technology`,
              ],
              correctIndex: 1,
              explanation: `"Guaranteed high returns, no risk" is the universal warning sign for any investment scam, especially in crypto. Real investments always have real risks. Anyone promising otherwise is either lying or running a scheme that will eventually collapse.` },

            { id: `l13-q8`, format: `multiple-choice`,
              question: `How should a smart, thoughtful person APPROACH cryptocurrency?`,
              options: [
                `Buy everything immediately`,
                `Stay curious, stay skeptical, never put in more than you can afford to lose, ignore hype, and watch for scams`,
                `Avoid even learning about it`,
                `Believe whatever influencers say`,
              ],
              correctIndex: 1,
              explanation: `Smart crypto thinking means staying curious without falling for hype. Crypto is interesting and possibly important. It's also risky and full of scams. The honest approach: learn, observe, never invest more than you can lose, and don't trust anyone promising easy riches.` },
          ],
        },

        {
          id: `l13-reflection`,
          type: `reflection`,
          guideText: `Before we wrap, {name}, pick ONE question and actually answer it. Your response gets saved, and I'll remember it next time we talk.`,
          prompts: [
            { id: `r1`, text: `Some people say crypto is the FUTURE of money. Others say it's a BUBBLE. After this lesson, what's your honest opinion (knowing you might change your mind later)?` },
            { id: `r2`, text: `Imagine someone DM's you saying "send me $100 in crypto and I'll send back $1000." What do you do, and why?` },
            { id: `r3`, text: `Blockchain technology might be used for many things beyond money — tracking food, recording digital art ownership, voting. Pick ONE non-money use you'd find interesting. Why?` },
            { id: `r4`, text: `Ace says "anyone promising guaranteed high returns with no risk is selling something." Where in life, beyond money, does this principle apply too?` },
          ],
        },

        {
          id: `l13-realworld`,
          type: `real-world`,
          guideText: `Cryptocurrency and blockchain technology are still evolving. They might become a normal part of the global financial system. They might mostly fade. They might transform some industries while disappearing in others. Nobody knows yet. What's certain is that your generation will live through whatever the answer turns out to be. The thinking skills from this lesson (stay curious, stay skeptical, recognize hype, watch for scams) apply to many things beyond crypto. The next "must invest in" thing in 10 years might be something we don't have a name for yet. The skills to evaluate it honestly are the same.`,
          familyAdventure: `Family Crypto Conversation. As a family, talk about: have you ever heard anyone in your life talk about crypto? What did they say? Were they excited, skeptical, or both? Have you noticed crypto ads? What feelings do those ads try to create? This kind of conversation builds media literacy skills that protect your family from financial mistakes.`,
          creativePrompt: {
            intro: `Imagine a friend says: "I just heard about a new crypto that's going to make us rich. Should we invest our savings?" Write your honest reply.`,
            floor: `Write at least 5 sentences. Ask the right questions. Mention real risks. Suggest a thoughtful approach.`,
            stretch: `Write 8 to 10 sentences. Cover what you'd want to know about the crypto, what red flags would worry you, what risks you'd discuss, and what you'd recommend doing first.`,
            open: `Write as much as you want. Build a full thoughtful reply. Honor your friend's interest while introducing real skepticism. Cover the questions to ask, the red flags to look for, the risks involved, the honest unknowns about crypto generally, and a smart approach (never invest more than you can lose, do your own research).`,
            frames: [
              `Hey friend, I'd be really careful about that.`,
              `Before investing anything, I'd want to know ___.`,
              `Some warning signs I'd look for are ___.`,
              `Real risks of crypto include ___.`,
              `My honest advice is ___.`,
            ],
          },
        },

        {
          id: `l13-celebration`,
          type: `celebration`,
          message: `Great work, {name}. You can now explain what cryptocurrency actually is, how blockchain works, why crypto was created, the real risks, and the difference between honest information, hype, and scams. Next lesson: stories of HOW SMALL BUSINESSES BECAME HUGE. From tiny garages to billion-dollar companies. — Ace.`,
          badge: `crypto-thinker`,
          badgeName: `Crypto Thinker`,
          xpEarned: 75,
        },
      ],
    },
  ],
};

export default MONEY_UE_L13;

// ─── Dev asset check ──────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const screens = MONEY_UE_L13.lessons[0].screens;
  const mags = screens.filter(s => s.type === 'magazine').length;
  const game = screens.find(s => s.type === 'interactive')?.cases?.length ?? 0;
  const quiz = screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  const refl = screens.find(s => s.type === 'reflection')?.prompts?.length ?? 0;
  const totalVocab = screens.filter(s => s.type === 'magazine').reduce((sum, s) => sum + (s.vocab?.length || 0), 0);
  console.log(`[LESSON-MONEY-UE-L13 v1] Loaded with ${mags} magazine sections, ${totalVocab} vocab terms, ${game} game cases, ${quiz} quiz Qs, ${refl} reflection prompts`);
}
