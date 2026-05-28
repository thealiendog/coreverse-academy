// ─────────────────────────────────────────────────────────────────────────────
// MONEY & BUSINESS UE  |  L01 — The History of Money: From Barter to Bitcoin
// Age band : upper_explorers (9–10)   Guide: ace
// Standards: Jump$tart Personal Finance — Earning income basics;
//            C3 D2.Eco.4.3-5 — Specialization and trade
// CALIBRATED: UE spec v1.1 — real domain terms, em-dashes sparing
// SCOPE: 4 concepts — what money actually is, the barter problem,
//        history of money forms, what modern money looks like (including crypto)
// VERSION: v1
// ─────────────────────────────────────────────────────────────────────────────

const MONEY_UE_L01 = {
  ageBand: `upper_explorers`,
  subjectId: `money`,
  guide: `ace`,

  lessons: [
    {
      id: `mb-9-10-01`,
      title: `The History of Money: From Barter to Bitcoin`,
      duration: 18,
      xpReward: 75,
      badge: `money-historian`,
      badgeName: `Money Historian`,

      screens: [
        {
          id: `l01-welcome`,
          type: `welcome`,
          guideText: `Hey {name}, Ace here. I'm an eagle for a reason. Eagles soar high and see the big picture. Today we look at MONEY from way up high. Most people think money is just paper bills and coins. It's not. Money is one of the most important INVENTIONS in human history, and it has changed dramatically over thousands of years. Understanding what money REALLY is gives you a huge advantage. Let's go.`,
          headline: `The History of Money`,
          subtitle: `From shells and salt to digital currency. One of humanity's most important inventions.`,
          visual: `/ue-assets/money/l01-welcome.webp`,
        },

        {
          id: `l01-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `What Money Actually Is`,
          paragraphs: [
            `MONEY isn't really the paper bills or metal coins themselves. Money is a TOOL that humans invented to make trading easier. It does THREE main jobs. (1) MEDIUM OF EXCHANGE: you can trade money for almost anything. (2) STORE OF VALUE: you can save it for later. (3) UNIT OF ACCOUNT: you can compare prices and measure value with it ("that costs $5, this costs $20").`,
            `Money only works because PEOPLE AGREE it works. A dollar bill is just a piece of paper. It has value because everyone has agreed to ACCEPT it as payment. If everyone suddenly decided dollar bills were worthless, they would be. This is the most important thing to understand about money. Its power comes from SHARED AGREEMENT, not from anything physical. Different societies throughout history have used very different things as money. They all worked, as long as people agreed they did.`,
          ],
          image: `/ue-assets/money/l01-s1-what-is-money.webp`,
          imageCaption: `Money is a tool. Three jobs. Works because everyone agrees it works.`,
          vocab: [
            { word: `money`,
              definition: `A tool humans invented to make trading easier. Does three jobs: medium of exchange (you can trade it for things), store of value (you can save it), and unit of account (you can measure prices with it).`,
              audioPrompt: `Money is a tool humans invented to make trading easier, {name}. It does three main jobs. First, you can trade it for almost anything. Second, you can save it for later. Third, you can use it to compare prices and measure value. Money only works because people agree it works. A dollar bill is just paper. It has value because everyone has agreed to accept it. If everyone decided dollar bills were worthless, they would be. The power of money comes from shared agreement, not from anything physical.` },
            { word: `medium of exchange`,
              definition: `Anything widely accepted as payment for goods and services. One of the three main jobs of money — sellers will take it in return for what they're selling.`,
              audioPrompt: `A medium of exchange is anything widely accepted as payment for goods and services, {name}. It's one of the three main jobs money does. A medium of exchange means sellers will take it in return for what they're selling. Dollar bills work as a medium of exchange in the US. Euros work in Europe. Without a medium of exchange, people would have to barter directly for everything they want. Having a widely accepted medium of exchange makes the entire economy work smoother and faster.` },
          ],
        },

        {
          id: `l01-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Before Money: The Barter Problem`,
          paragraphs: [
            `Before money existed, people used BARTER. Barter means trading things directly. You have wheat, I have a goat, we trade. Barter worked OK for small communities, but it had a huge problem. To trade, BOTH PEOPLE had to want what the OTHER had at the same time. Economists call this the "coincidence of wants." If you had wheat but I wanted shoes (not wheat), no trade could happen. If you had a goat but the person with shoes wanted something else, no trade could happen.`,
            `Barter also made it hard to SAVE for later. Goats die. Wheat rots. Even fancy items lose value over time. And it was impossible to PRICE things consistently. How many chickens equals one cow? How much wheat equals a pair of shoes? Different people had different opinions. Trade was slow, awkward, and limited. Humans needed a better system. Eventually, communities started using SPECIFIC ITEMS as a kind of shared trading tool. Money was being invented.`,
          ],
          image: `/ue-assets/money/l01-s2-barter.webp`,
          imageCaption: `Barter. Direct trade. Worked OK, but didn't scale.`,
          vocab: [
            { word: `barter`,
              definition: `Trading goods or services directly without using money. Worked in small communities but had problems: both people had to want what the other had, and saving value was hard.`,
              audioPrompt: `Barter is trading goods or services directly without using money, {name}. You have wheat. I have a goat. We trade. Barter worked OK in small communities, but it had a big problem. Both people had to want what the other person had at the same time. If you had wheat but I wanted shoes, no trade could happen. Barter also made it hard to save value for later. Goats die. Wheat rots. And it was hard to set fair prices. Humans needed a better system.` },
            { word: `coincidence of wants`,
              definition: `The barter problem where two people can only trade if each wants exactly what the other has. Money solves this completely by separating the two sides of every transaction.`,
              audioPrompt: `The coincidence of wants is the barter problem where both people have to want what the other has at the same time, {name}. If you have wheat and want shoes, you need to find someone who both has shoes AND wants wheat right now. In a big, complex economy, this is nearly impossible. Money solves the coincidence of wants problem completely. You sell your wheat for money. Then you use the money to find anyone who has shoes, regardless of what they want. Money breaks the double-requirement of barter.` },
          ],
        },

        {
          id: `l01-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `The History of Money Forms`,
          paragraphs: [
            `Different cultures used different things as money throughout history. COWRY SHELLS were used across Africa and Asia for thousands of years. SALT was so valuable in ancient Rome that soldiers were sometimes paid in it (the word "salary" comes from "salt"). GRAINS like barley were used in Mesopotamia. CATTLE were money in many cultures (the word "capital" comes from the Latin word for cattle, capitale). Each of these worked because the community agreed they did.`,
            `Eventually, METAL COINS became dominant. Gold and silver were attractive because they didn't rot, were rare enough to be valuable, and could be melted and shaped. The first coins appeared in modern-day Turkey around 600 BC. PAPER MONEY first appeared in China around 1000 AD. It seemed strange at first (why would anyone trade gold for paper?) but it worked because governments PROMISED to back paper with gold. Eventually most countries moved to paper money. Today, less than 10% of money exists as physical bills and coins. The rest is just NUMBERS in computer databases at banks. Modern money is mostly digital.`,
          ],
          image: `/ue-assets/money/l01-s3-history.webp`,
          imageCaption: `Shells → salt → grain → metal coins → paper → digital. The evolution of money.`,
          vocab: [
            { word: `currency`,
              definition: `The specific form of money used in a country or community. The US dollar, the European euro, and ancient cowry shells are all currencies.`,
              audioPrompt: `Currency is the specific form of money used in a country or community, {name}. The US dollar is one currency. The European euro is another. The Japanese yen is another. Ancient cowry shells were a currency. Salt was a currency in ancient Rome. Every country today has its own official currency, and most countries' currencies can be exchanged for each other. When you travel, you usually need to exchange your home currency for the local one. The exchange rate between currencies changes daily based on many factors.` },
            { word: `commodity money`,
              definition: `Money made from something that has real value on its own — like gold coins or salt. Different from modern fiat money, which has value only through shared agreement.`,
              audioPrompt: `Commodity money is money made from something that has real value on its own, {name}. Gold and silver coins are the classic example. The metal itself was valuable. So the coin was valuable both as money and as metal you could melt down. Salt, grain, and cattle are other examples of commodity money. If the currency failed, you still had something useful. This is different from modern money, called fiat money, which has no intrinsic value and works only through shared agreement.` },
          ],
        },

        {
          id: `l01-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Modern Money: From Digital Banks to Crypto`,
          paragraphs: [
            `Today, most money is DIGITAL. When you buy something with a debit card or your parent's phone, no paper or coins change hands. A computer just subtracts numbers from one bank account and adds them to another. Banks, credit card companies, and payment apps move trillions of dollars every day, mostly as electronic signals. Physical cash still exists, but it's a small piece of how money actually moves now.`,
            `In the past 15 years, a new kind of money emerged. CRYPTOCURRENCY is money that exists ONLY as computer code, not controlled by any government or bank. BITCOIN is the most famous example. Instead of being issued by a country, Bitcoin is created and tracked by a network of computers using complex math. Some people think cryptocurrency is the future of money. Others think it's a bubble. Many experts are unsure. What's clear is that money continues to CHANGE. The history of money isn't over. Your generation will probably see new forms of money that don't exist yet. Understanding what money IS (a tool based on shared agreement) helps you stay clear-headed about whatever new forms appear.`,
          ],
          image: `/ue-assets/money/l01-s4-modern.webp`,
          imageCaption: `Digital banking, mobile payments, cryptocurrency. Money keeps evolving.`,
          vocab: [
            { word: `cryptocurrency`,
              definition: `Digital money that exists only as computer code, not controlled by any government or bank. Bitcoin is the most famous example. Created and tracked by networks of computers.`,
              audioPrompt: `Cryptocurrency is digital money that exists only as computer code, {name}. Unlike normal money, cryptocurrency is not controlled by any government or bank. Bitcoin is the most famous example. It was invented in 2009. Instead of being issued by a country, Bitcoin is created and tracked by a network of computers using complex math. Some people think cryptocurrency is the future of money. Others think it's risky and may not last. Many experts are unsure. What's certain is that money keeps changing. New forms will appear during your lifetime.` },
            { word: `fiat money`,
              definition: `Money that has value because a government declares it does, not because of any physical material. Modern dollars, euros, and yen are all fiat money. Requires trust in the issuing government.`,
              audioPrompt: `Fiat money is money that has value because a government declares it does, not because of any physical material, {name}. Fiat comes from a Latin word meaning let it be done. Modern dollars, euros, and yen are all fiat money. The paper bills themselves are nearly worthless as materials. They have value because governments back them and people trust them. Most of human history used commodity money (gold, silver, grain) before moving to fiat. Fiat requires trust. If people stop trusting the government, the money can lose value fast.` },
          ],
        },

        {
          id: `l01-game`,
          type: `interactive`,
          format: `investigation`,
          guideText: `Investigation time, {name}. Four things. For each one, decide what role it plays: MEDIUM OF EXCHANGE (you can buy things with it widely), STORE OF VALUE (it holds value over time), or NEITHER (looks like money but really isn't)?\n\nOne is sneakier than it looks.`,
          options: [
            { id: `medium`,    label: `Medium of Exchange`, color: `#34D399`, description: `You can use it to buy things at most places. Sellers will accept it.` },
            { id: `store`,     label: `Store of Value`,     color: `#60A5FA`, description: `Holds value over time. You can save it without it spoiling, but it might not work as buying power widely.` },
            { id: `neither`,   label: `Neither`,            color: `#F87171`, description: `Looks like money but doesn't really function as it.` },
          ],
          cases: [
            {
              id: `case-1`,
              caseTitle: `Item #1: A $20 bill in the U.S.`,
              clues: [
                { text: `Almost any store in the country will accept it for payment.` },
                { text: `You can put it in a piggy bank or savings account and it will still be worth roughly the same a year later.` },
                { text: `Backed by the U.S. government.` },
              ],
              correctAnswer: `medium`,
              realWorldExample: `A standard U.S. dollar bill is the textbook example of full money.`,
              explanation: `It's accepted almost everywhere AND stores value. Technically it does all three money jobs (medium of exchange, store of value, unit of account). For this game, we mark "medium of exchange" as primary since that's its most active everyday role.`,
            },
            {
              id: `case-2`,
              caseTitle: `Item #2: A rare collectible card worth $500`,
              clues: [
                { text: `It might increase or decrease in value over the next few years.` },
                { text: `You can't take it to a gas station and buy fuel with it.` },
                { text: `Some specialized collectors will pay real money for it.` },
              ],
              correctAnswer: `store`,
              realWorldExample: `Rare cards, art, and collectibles work this way.`,
              explanation: `Holds value (or might increase). But you can't use it for everyday purchases. Pure store of value. To actually spend it, you have to sell it first. Same with art, gold, or valuable cars. Stores value, doesn't act as money in daily life.`,
            },
            {
              id: `case-3`,
              caseTitle: `Item #3: A loaf of bread`,
              clues: [
                { text: `You could trade it directly to someone hungry.` },
                { text: `It will rot within a week.` },
                { text: `If you tried to use it at a store, they'd probably refuse.` },
              ],
              correctAnswer: `neither`,
              realWorldExample: `Most regular goods don't function as money.`,
              explanation: `Bread isn't really money. It's a good. You could barter with it, but it rots quickly (bad store of value) and most places won't accept it as payment (not a medium of exchange). This is why humans invented money in the first place: barter doesn't work well at scale.`,
            },
            {
              id: `case-4`,
              caseTitle: `Item #4 — The Tricky One: Monopoly money`,
              clues: [
                { text: `It LOOKS like money. Has numbers, denominations, colors.` },
                { text: `Works perfectly inside a Monopoly game between players.` },
                { text: `No store, bank, or other person outside the game will accept it for anything real.` },
              ],
              correctAnswer: `neither`,
              realWorldExample: `Game currency, including video game gold, works this way.`,
              explanation: `Tricky because it LOOKS like real money and functions like money inside the game. But OUTSIDE the game, nobody accepts it. No shared agreement to use Monopoly money in the real world. Lesson: this is exactly what gives any money its power. Shared agreement. The reason a dollar works is that millions of people have agreed it works. Without that agreement, even real-looking money is just paper. Monopoly money proves the rule. Video game gold proves it too. Money is shared agreement, not physical material.`,
            },
          ],
        },

        {
          id: `l01-quiz`,
          type: `quiz`,
          guideText: `Let's see what stuck, {name}.`,
          questions: [
            { id: `l01-q1`, format: `multiple-choice`,
              question: `What are the THREE main jobs of money?`,
              options: [
                `Looking cool, being rare, being heavy`,
                `Medium of exchange (buying things), store of value (saving), unit of account (measuring prices)`,
                `Coins, paper, digital`,
                `Earning, spending, hiding`,
              ],
              correctIndex: 1,
              explanation: `Money does three main jobs. (1) Medium of exchange: you can trade it for almost anything. (2) Store of value: you can save it for later. (3) Unit of account: you can measure and compare prices with it. Anything that does these jobs can function as money.` },

            { id: `l01-q2`, format: `multiple-choice`,
              question: `Why does a DOLLAR BILL actually have value?`,
              options: [
                `Because the paper is valuable`,
                `Because people have agreed to accept it as payment — money is shared agreement`,
                `Because the government prints it`,
                `Because it's pretty`,
              ],
              correctIndex: 1,
              explanation: `Dollar bills are just paper. Their power comes from shared agreement. Everyone has agreed to accept dollars as payment. If everyone suddenly decided dollars were worthless, they would be. This is true for every form of money throughout history.` },

            { id: `l01-q3`, format: `multiple-choice`,
              question: `What was the main PROBLEM with BARTER?`,
              options: [
                `It was too modern`,
                `Both people had to want what the other had at the same time — economists call this the "coincidence of wants"`,
                `It was illegal`,
                `Nobody wanted to trade`,
              ],
              correctIndex: 1,
              explanation: `Barter required both people to want what the other had simultaneously. If you had wheat and I wanted shoes (not wheat), no trade could happen. This made trade slow and limited. Money solved this by giving everyone a tool that could be traded for anything.` },

            { id: `l01-q4`, format: `multiple-choice`,
              question: `Which of these has been USED as money at SOME POINT in history?`,
              options: [
                `Only paper bills`,
                `Cowry shells, salt, grain, cattle, metal coins, paper bills, and digital currency — all forms have worked when communities agreed they should`,
                `Only metal coins`,
                `Only digital money`,
              ],
              correctIndex: 1,
              explanation: `Different cultures have used many different things as money: shells, salt, grain, cattle, gold, silver, paper, and now digital code. The form doesn't matter as much as community agreement that it counts as money.` },

            { id: `l01-q5`, format: `true-false`,
              question: `True or false: Today, most money exists as numbers in computer databases, not as physical paper or coins.`,
              correctAnswer: true,
              explanation: `True. Less than 10% of money exists as physical cash. The rest is digital — numbers in bank accounts moved by computers. When you pay with a card, no paper or coins change hands. Modern money is mostly electronic signals.` },

            { id: `l01-q6`, format: `multiple-choice`,
              question: `What is CURRENCY?`,
              options: [
                `A type of plant`,
                `The specific form of money used in a country or community (US dollar, euro, yen, etc.)`,
                `A bank`,
                `A credit card`,
              ],
              correctIndex: 1,
              explanation: `Currency is the official money of a country. Every country has its own. The US has dollars. Europe (mostly) uses euros. Japan uses yen. When you travel, you exchange one currency for another.` },

            { id: `l01-q7`, format: `multiple-choice`,
              question: `What is CRYPTOCURRENCY?`,
              options: [
                `A type of coin`,
                `Digital money that exists only as computer code, not controlled by any government or bank (Bitcoin is the most famous example)`,
                `Old paper money`,
                `Plastic money`,
              ],
              correctIndex: 1,
              explanation: `Cryptocurrency is digital money created and tracked by computer networks using complex math. Unlike traditional money, no government or bank controls it. Bitcoin was the first, invented in 2009. Whether crypto is the future or a bubble is still debated.` },

            { id: `l01-q8`, format: `multiple-choice`,
              question: `What's the MOST IMPORTANT thing to understand about money?`,
              options: [
                `It's hard to get`,
                `It's a TOOL that works because of shared agreement. The form can change. The principle stays the same.`,
                `It's the most important thing in life`,
                `Only rich people understand it`,
              ],
              correctIndex: 1,
              explanation: `Money is a tool, not a goal. Its power comes from shared agreement. Throughout history, money has changed forms many times (shells, coins, paper, digital, crypto). Understanding the underlying principle keeps you clear-headed about whatever new forms appear in your lifetime.` },
          ],
        },

        {
          id: `l01-reflection`,
          type: `reflection`,
          guideText: `Before we wrap, {name}, pick ONE question and actually answer it. Your response gets saved, and I'll remember it next time we talk.`,
          prompts: [
            { id: `r1`, text: `If you had to invent a new form of money today (not paper, not coins, not crypto), what would you use? Why would it work?` },
            { id: `r2`, text: `Money is "shared agreement." What other things in your life work because people agree they work? (Language? Rules in games? Holidays?)` },
            { id: `r3`, text: `Imagine a week without ANY kind of money — no cash, no cards, no digital payments. How would your family get food and supplies?` },
            { id: `r4`, text: `Some people think money is the most important thing in life. Ace thinks money is a TOOL that helps you live the life you want. What do you think — and why?` },
          ],
        },

        {
          id: `l01-realworld`,
          type: `real-world`,
          guideText: `Understanding money's history gives you something most adults don't have: PERSPECTIVE. When new forms of money appear (and they will, throughout your life), you won't panic or get fooled. You'll ask the right questions. Does this thing actually function as money? Do enough people agree it has value? Will the agreement last? Some new forms will work and become normal. Others will fail and disappear. The pattern repeats. Ace's note: the deeper your understanding of money, the better you can use it as the tool it's meant to be.`,
          familyAdventure: `Family Money Time Capsule. As a family, find an old coin, an old bill, or even a foreign currency note. Talk about: when was it made? What was it worth then vs now? Has its value changed? Then imagine 100 years from now. Will dollar bills still exist? Will Bitcoin? Will something we haven't invented yet replace both? You don't need answers. Just notice how much money has changed within living memory.`,
          creativePrompt: {
            intro: `Imagine you're a time traveler explaining MODERN money to someone from 100 years ago (1926). Write your explanation.`,
            floor: `Write at least 5 sentences. Cover what most modern money looks like (digital, not cash), how people actually pay for things now, and one thing about modern money that would surprise them most.`,
            stretch: `Write 8 to 10 sentences. Include digital payments, credit cards, online shopping, and one thing about cryptocurrency that would totally confuse them.`,
            open: `Write as much as you want. Build a full conversation between you and someone from 1926. Anticipate their questions. Explain how digital banking works. Compare prices then and now (a loaf of bread in 1926 cost about 9 cents). Show them why money has changed AND why the basic idea stays the same.`,
            frames: [
              `Welcome to 2026. Money looks very different now.`,
              `Most of our money is ___, not ___.`,
              `When I want to buy something, I usually ___.`,
              `One thing that might surprise you is ___.`,
              `But here's what hasn't changed: money is still ___.`,
            ],
          },
        },

        {
          id: `l01-celebration`,
          type: `celebration`,
          message: `Great work, {name}. You can now explain what money actually is, why barter didn't scale, how money has evolved across history, and what's happening with modern digital money and cryptocurrency. Next lesson: one of the most powerful concepts in all of personal finance. COMPOUND INTEREST. Albert Einstein supposedly called it the eighth wonder of the world. You'll see why. — Ace.`,
          badge: `money-historian`,
          badgeName: `Money Historian`,
          xpEarned: 75,
        },
      ],
    },
  ],
};

export default MONEY_UE_L01;

// ─── Dev asset check ──────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const screens = MONEY_UE_L01.lessons[0].screens;
  const mags = screens.filter(s => s.type === 'magazine').length;
  const game = screens.find(s => s.type === 'interactive')?.cases?.length ?? 0;
  const quiz = screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  const refl = screens.find(s => s.type === 'reflection')?.prompts?.length ?? 0;
  const totalVocab = screens.filter(s => s.type === 'magazine').reduce((sum, s) => sum + (s.vocab?.length || 0), 0);
  console.log(`[LESSON-MONEY-UE-L01 v1] Loaded with ${mags} magazine sections, ${totalVocab} vocab terms, ${game} game cases, ${quiz} quiz Qs, ${refl} reflection prompts`);
}
