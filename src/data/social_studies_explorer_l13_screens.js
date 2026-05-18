// ─────────────────────────────────────────────────────────────────────────────
// SOCIAL STUDIES  |  L13 — Money and Trade
// Age band : explorers (6–8)   Guide: atlas
// Standards: C3 Framework D2.Eco.3.K-2 / D2.Eco.4.K-2 (money and exchange)
// ─────────────────────────────────────────────────────────────────────────────

const SOCIAL_STUDIES_L13 = {
  ageBand:   `explorers`,
  subjectId: `social_studies`,
  guide:     `atlas`,

  lessons: [
    {
      id:        `social-studies-6-8-13`,
      title:     `Money and Trade`,
      duration:  12,
      xpReward:  50,
      badge:     `money-trade-explorer`,
      badgeName: `Money and Trade Explorer`,

      screens: [

        {
          id: `l13-welcome`,
          type: `welcome`,
          guideText: `Hello, {name}. Atlas here. Last lesson we touched on money. Today we go DEEPER. What IS money, really? Where did it come from? How do we use it well? Understanding money is one of the most useful skills for life. Today we'll start building that understanding. Let's go.`,
          headline: `Money and Trade`,
          subtitle: `What money REALLY is — and how to use it smartly`,
          visual: `/explorer-assets/social-studies/l13-welcome.webp`,
        },

        {
          id: `l13-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Why Trading Was Hard`,
          paragraphs: [
            `LONG AGO — before money existed — people TRADED directly. We learned this last lesson. It was called BARTER.`,
            `But barter had a BIG problem. Imagine you're a FISHERMAN with lots of fish. You need a WARM COAT for winter. So you find the coat maker. But what if the coat maker doesn't WANT fish? Maybe they want WHEAT. Now you have to find a wheat farmer who wants fish, trade for wheat, then go back to the coat maker. That's complicated! It took forever. Some trades couldn't happen because no one had what someone else wanted. Trading was HARD without something to solve this problem. Humans needed a better way.`,
          ],
          image: `/explorer-assets/social-studies/l13-s1-trade-problem.webp`,
          imageCaption: `Old problem: I have fish, you want wheat — but the wheat farmer wants tools. Direct trade was HARD.`,
          vocab: [
            { word: `barter`,         definition: `TRADING goods or services DIRECTLY without money. BARTER was used before money.`,
              audioPrompt: `Barter, {name}, is trading goods or services directly without money. Before money was invented, people bartered. Eggs for shoes. Fish for tools. Vegetables for help. Barter still happens sometimes — like kids trading lunch items. But it was hard for big communities because you had to find someone who wanted EXACTLY what you had AND had what you wanted.` },
            { word: `problem`,        definition: `Something that DOESN'T WORK well. Direct barter had a big PROBLEM — too complicated.`,
              audioPrompt: `A problem, {name}, is something that doesn't work well. Direct barter had a big problem — it was too complicated. You couldn't always find someone who wanted what you had. Trading took forever. Some trades never happened. As communities grew bigger, this got worse. People needed a solution.` },
            { word: `complicated`,    definition: `HARD because of MANY parts. Old trading was COMPLICATED — many steps for one purchase.`,
              audioPrompt: `Complicated, {name}, means hard because of many parts. Old trading was complicated. To get one item, you might need to trade multiple times — fish for wheat for tools for cloth. Each step took time. Some steps failed. Humans are smart problem solvers. They invented something to make trading way simpler. They invented money.` },
          ],
        },

        {
          id: `l13-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Money Was INVENTED`,
          paragraphs: [
            `Thousands of years ago, humans invented something BRILLIANT — MONEY.`,
            `The earliest money was made of SHELLS, BEADS, COWS, or precious metals like GOLD and SILVER. Around 3,000 years ago, people made the first COINS — small metal disks with pictures on them. Later came PAPER MONEY. Today, we have COINS, BILLS, and even DIGITAL MONEY on cards and phones. Money solved the trading problem perfectly. Instead of trading fish for wheat for cloth, the fisherman could just SELL fish for money. Then use money to BUY whatever was needed. Money is a TOOL humans created together — by agreement.`,
          ],
          image: `/explorer-assets/social-studies/l13-s2-money-invented.webp`,
          imageCaption: `Money invented! Shells → coins → bills → digital. A tool humans agreed on to make trading easy.`,
          vocab: [
            { word: `money`,          definition: `A TOOL we use to BUY and SELL. MONEY makes trading way easier.`,
              audioPrompt: `Money, {name}, is a tool we use to buy and sell. Money makes trading way easier than barter. With money, you don't have to find someone who wants exactly what you have. You just sell what you have for money. Then use money to buy what you need. Money is one of humanity's most important inventions.` },
            { word: `invent`,         definition: `To CREATE something NEW. Humans INVENTED money to solve the trade problem.`,
              audioPrompt: `To invent, {name}, is to create something new. Humans invented money to solve the trade problem. Money wasn't found in nature. People made it up together. Different communities used different things as money — shells, beads, gold, paper, digital numbers. The key is that everyone in a community AGREES this thing is money. That's what makes it work.` },
            { word: `coin`,           definition: `Money made of METAL — a small disk. The FIRST coins were invented about 3,000 years ago.`,
              audioPrompt: `A coin, {name}, is money made of metal — a small disk. The first coins were invented about 3,000 years ago. They had pictures on them — usually rulers or symbols. Coins were great because they were small, easy to carry, hard to break, and clearly worth a specific amount. We still use coins today — pennies, nickels, dimes, quarters. They're the same basic idea.` },
          ],
        },

        {
          id: `l13-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Money TODAY`,
          paragraphs: [
            `Today, money comes in MANY forms — but it all works the same way.`,
            `COINS — small metal disks worth different amounts (pennies, nickels, dimes, quarters). PAPER BILLS — different amounts ($1, $5, $10, $20, $100, etc.). CREDIT CARDS — small plastic cards that let you spend money you've put in a bank. DIGITAL MONEY — money in computers and phones (like apps that send money). Different countries use different MONEY. The US uses DOLLARS ($). Mexico uses PESOS. Japan uses YEN. Each country has its own currency. When you travel, you sometimes need to EXCHANGE one currency for another. Money looks different around the world. But it does the same job.`,
          ],
          image: `/explorer-assets/social-studies/l13-s3-money-today.webp`,
          imageCaption: `Money today: coins + bills + cards + digital. Different countries use different money. Same job.`,
          vocab: [
            { word: `bill`,           definition: `Paper MONEY. BILLS come in different amounts — $1, $5, $10, $20, $100.`,
              audioPrompt: `A bill, {name}, is paper money. Bills come in different amounts. In the US, common bills are $1, $5, $10, $20, $50, and $100. Each one has a picture of a famous American (often a president). Bills are easier to carry than coins for bigger amounts. Different countries have different bills with different pictures and amounts.` },
            { word: `currency`,       definition: `The TYPE of money used in a country. US currency is DOLLARS. Mexico's is PESOS.`,
              audioPrompt: `Currency, {name}, is the type of money used in a country. US currency is dollars. Mexico's is pesos. Japan's is yen. Europe (many countries) uses euros. Each country's currency works inside that country. When you travel to another country, you usually have to exchange your money for that country's currency. Each currency has different bills, coins, and value.` },
            { word: `digital money`,  definition: `Money stored in COMPUTERS and PHONES. DIGITAL MONEY is becoming more common.`,
              audioPrompt: `Digital money, {name}, is money stored in computers and phones. Today, lots of money is digital. People pay using apps. Stores have machines that read cards. Even allowance and gifts can be digital. Digital money works the same way as cash — just without the paper or coins. It moves between accounts in computers. Most adults today use both digital money and cash.` },
          ],
        },

        {
          id: `l13-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Where Does Money COME From?`,
          paragraphs: [
            `Here's an important question — WHERE does money come from? It DOESN'T grow on trees.`,
            `Money is EARNED by doing WORK. Adults work at JOBS — using their skills to provide goods or services to others. In exchange, they GET MONEY. Doctors earn money for healing patients. Teachers earn money for teaching. Bakers earn money for selling bread. Programmers earn money for writing code. People earn DIFFERENT amounts based on their job, their skills, and where they live. Money doesn't appear by magic. It represents the WORK people did to get it. When you spend money, you're really spending the WORK someone (often a parent) did to earn it. That's why being smart with money matters.`,
          ],
          image: `/explorer-assets/social-studies/l13-s4-earn-money.webp`,
          imageCaption: `Money is EARNED through work. Money = work made portable. Spending money = spending someone's time and effort.`,
          vocab: [
            { word: `earn`,           definition: `To GET money by doing WORK. People EARN money at their jobs.`,
              audioPrompt: `To earn, {name}, is to get money by doing work. People earn money at their jobs. Doctors earn by healing. Teachers earn by teaching. Bakers earn by baking. Money doesn't appear from nothing. Every dollar represents work someone did. That's why money has value — it took effort to get it.` },
            { word: `work`,           definition: `Using your SKILLS to PRODUCE goods or services. WORK is how money is earned.`,
              audioPrompt: `Work, {name}, is using your skills to produce goods or services. Work is how money is earned. Different work earns different amounts. Some jobs pay more because they need more training, special skills, or because they're hard. Other jobs pay less. All work matters. All workers contribute to communities. Without workers, the economy stops.` },
            { word: `represent`,      definition: `To STAND FOR something else. Money REPRESENTS the work that earned it.`,
              audioPrompt: `To represent, {name}, is to stand for something else. Money represents the work that earned it. A $20 bill might represent an hour of work for one person. Or three hours for another. The dollar isn't just paper — it's a record of someone's time, effort, and skill. When you spend money, you're really spending someone's work. That's why smart spending matters.` },
          ],
        },

        {
          id: `l13-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `SAVE, SPEND, and SHARE`,
          paragraphs: [
            `When you have money, you can do THREE smart things — SAVE, SPEND, and SHARE.`,
            `SAVING means putting money aside for LATER. You don't spend it now — you keep it for an emergency, a bigger goal (like a bike), or your future. Many adults use BANKS or PIGGY BANKS to save. SPENDING means using money to buy things you NEED or WANT now. (Remember L11 — needs first, then some wants.) Be careful with spending — make it count. SHARING means giving some money to others who need it — donating to charity, helping a family member, or putting money in a tip jar. The smart approach is to do SOME of all three. Save a little. Spend a little. Share a little. Three jars of money, three smart habits.`,
          ],
          image: `/explorer-assets/social-studies/l13-s5-save-spend.webp`,
          imageCaption: `Three smart habits: SAVE (keep for later), SPEND (buy needs + some wants), SHARE (help others).`,
          vocab: [
            { word: `save`,           definition: `To KEEP money for LATER instead of spending it now. SAVING is smart.`,
              audioPrompt: `To save, {name}, is to keep money for later instead of spending it now. Saving is smart. Even a little bit saved each week adds up over time. People save for emergencies, big purchases like a bike or college, or future life. Adults often put savings in banks where it's safe. Kids can save in piggy banks. Saving means thinking ahead.` },
            { word: `spend`,          definition: `To USE money to BUY something. Smart SPENDING covers needs first, then some wants.`,
              audioPrompt: `To spend, {name}, is to use money to buy something. Smart spending covers needs first, then some wants. Before you spend money, ask — Do I really need this? Is it worth the work someone did to earn this money? Will I still want this in a week? Smart spenders think before they buy. They make their money count.` },
            { word: `share`,          definition: `To GIVE money to OTHERS who need it. SHARING is part of being a good citizen.`,
              audioPrompt: `To share, {name}, is to give money to others who need it. Sharing is part of being a good citizen. Even small amounts help — donating to a food bank, helping a family member, putting money in a tip jar, giving to a cause you care about. Sharing money also makes you feel good. Many people make sharing a regular part of their lives.` },
          ],
        },

        {
          id: `l13-mag-6`,
          type: `magazine`,
          section: 6,
          headline: `Money Connects EVERYTHING`,
          paragraphs: [
            `Here's the BIG idea, {name}. Money is what CONNECTS the whole economy.`,
            `When you spend money on bread, that money goes to the BAKER. The baker uses that money to pay the FARMER who grew the wheat. The farmer uses some to pay for SEEDS, TOOLS, and the COMPANY that makes the seeds. That company uses money to pay its WORKERS. The workers spend their money on FOOD, RENT, and LIFE. Round and round and round. Money flows through the community like blood through a body. It connects every person, every goods producer, every service provider. It makes trading easy. It records work. It enables everything from buying a candy bar to building a hospital. Pretty incredible for something humans simply made up.`,
          ],
          image: `/explorer-assets/social-studies/l13-s6-money-value.webp`,
          imageCaption: `Money flows: from you → baker → farmer → seed company → workers → families. Whole economy connected.`,
          vocab: [
            { word: `flow`,           definition: `To MOVE smoothly. Money FLOWS through the community like water.`,
              audioPrompt: `To flow, {name}, is to move smoothly. Money flows through the community. From you to a store. From the store to its workers. From workers to their landlords and grocery stores. From those places to their suppliers. Money keeps moving. It connects everyone. Without flowing money, the economy would stop. With it, communities work.` },
            { word: `incredible`,     definition: `AMAZING and almost UNBELIEVABLE. Money is INCREDIBLE — humans simply made it up.`,
              audioPrompt: `Incredible, {name}, means amazing and almost unbelievable. Money is incredible. Humans made it up. There's no physical reason a piece of paper or a number on a screen should be valuable. But because we all AGREE it is, it works. Money is a beautiful example of how humans can solve big problems by agreeing on shared tools. Civilization runs on this agreement.` },
            { word: `agreement`,      definition: `When PEOPLE all DECIDE something is true. Money works because of human AGREEMENT.`,
              audioPrompt: `An agreement, {name}, is when people all decide something is true. Money works because of human agreement. We all agree paper dollars are worth something. We all agree what amounts certain coins are. If everyone suddenly decided money was worthless, it would be. But we don't — so it works. Money is one of humanity's most successful agreements ever.` },
          ],
        },

        {
          id: `l13-game`,
          type: `interactive`,
          format: `drag-match`,
          guideText: `Let's see what you remember, {name}.`,
          buckets: [
            { id: `fact`, label: `✅ Yes, that's true!`, color: `#34D399` },
            { id: `myth`, label: `❌ No way!`,           color: `#F87171` },
          ],
          items: [
            { id: `l13-g1`, image: `l13-game-1.webp`, label: `Money is a TOOL humans invented to make TRADING easier than barter.`,
              matchPhrase: `Yes! Money is a tool. Before money, people bartered — trading directly. That was hard. Money solved the problem — you can sell your stuff for money, then buy whatever you need with it.`,
              correctMatch: `fact` },
            { id: `l13-g2`, image: `l13-game-2.webp`, label: `SAVING money — even a little at a time — is a SMART habit that adds up.`,
              matchPhrase: `True! Saving builds over time. Even small amounts add up. Adults save for emergencies, big purchases, and their future. Kids can start practicing now with allowance or gifts.`,
              correctMatch: `fact` },
            { id: `l13-g3`, image: `l13-game-3.webp`, label: `Money grows MAGICALLY on trees — no one has to work for it.`,
              matchPhrase: `Not at all! Money is earned through work. Every dollar represents someone's time, effort, and skill. There are no money trees. People work for what they have.`,
              correctMatch: `myth` },
            { id: `l13-g4`, image: `l13-game-4.webp`, label: `Spending EVERY single penny the moment you earn it — saving nothing — is smart.`,
              matchPhrase: `Definitely not! Smart money habits include SAVING some, not spending it all. Without savings, emergencies cause big problems. Saving — even a little — is part of being smart with money.`,
              correctMatch: `myth` },
          ],
        },

        {
          id: `l13-quiz`,
          type: `quiz`,
          guideText: `Let's see what you remember, {name}.`,
          questions: [
            { id: `l13-q1`, format: `multiple-choice`,
              question: `What is MONEY?`,
              options: [`A type of food`, `A TOOL humans invented to make buying and selling easier`, `Only paper`, `Magic`],
              correctIndex: 1,
              explanation: `Money is a tool humans invented. Before money, people bartered directly — which was hard. Money makes trading easy. We agree it has value, so it works.` },
            { id: `l13-q2`, format: `multiple-choice`,
              question: `What was BARTER?`,
              options: [`A type of dance`, `TRADING goods or services DIRECTLY — without money`, `Only candy`, `A type of music`],
              correctIndex: 1,
              explanation: `Barter is trading directly without money. People did this before money was invented. The problem — you had to find someone who wanted what you had AND had what you wanted. Hard!` },
            { id: `l13-q3`, format: `multiple-choice`,
              question: `Where does MONEY come from?`,
              options: [`Trees`, `It's EARNED through WORK — people earn money at their jobs`, `Magic`, `It's free`],
              correctIndex: 1,
              explanation: `Money is earned through work. Adults work at jobs and earn money for their skills and effort. Money represents the work behind it. There are no money trees!` },
            { id: `l13-q4`, format: `true-false`,
              question: `The THREE SMART things to do with money are SAVE (keep for later), SPEND (buy needs + some wants), and SHARE (help others).`,
              correctAnswer: true,
              explanation: `True! Save, spend, share. Smart money habits include all three. Save for the future. Spend wisely on needs and some wants. Share with people who need help. Balance.` },
            { id: `l13-q5`, format: `fill-blank`,
              question: `Each country has its own ___ — like dollars in the US, pesos in Mexico, yen in Japan.`,
              options: [`currency`, `crayon`, `cookie`, `castle`],
              correctIndex: 0,
              explanation: `Currency! Each country has its own currency. US = dollars. Mexico = pesos. Japan = yen. Europe = euros. When you travel, you sometimes exchange one currency for another.` },
            { id: `l13-q6`, format: `multiple-choice`,
              question: `WHY does money work?`,
              options: [`It's magic`, `Because everyone AGREES that it has value`, `Adults force it`, `It just does`],
              correctIndex: 1,
              explanation: `Money works because everyone agrees it has value. If we all suddenly decided dollars were worthless, they would be. Because we agree they're worth something, they work. Money is one of humanity's most successful agreements.` },
          ],
        },

        {
          id: `l13-realworld`,
          type: `real-world`,
          guideText: `Here's something cool, {name}. The OLDEST money found was used about 5,000 years ago in ancient Mesopotamia. People used SILVER weighed on scales. Over time, money got fancier — Chinese paper money around 1,000 years ago, modern coins, today's digital money. Some countries are now experimenting with completely digital currency (no paper, no coins). Some places use CRYPTOCURRENCIES like Bitcoin — money that lives only in computers. Money keeps changing. But it's always the same idea — a tool we agree on to make trade easier. As you grow up, you'll see money change even more. Knowing what money REALLY is helps you navigate any version of it.`,
          familyAdventure: `As a family, try the THREE JARS exercise. Get 3 jars (or envelopes or containers). Label them SAVE, SPEND, and SHARE. Next time you get any money — even just a dollar — split it three ways. Some in each jar. The save jar grows over weeks. The spend jar pays for small things. The share jar goes to a cause you care about. Try this for a month. Notice how all three feel good.`,
          creativePrompt: `Imagine YOU are inventing a NEW kind of money for a brand new country. What would your money look like? Draw it! It could be made of anything — leaves, jewels, magic crystals, special pictures. Give it a NAME (like "stars" or "shells" instead of dollars). Decide what's on each coin or bill. Have fun. Remember — money works because everyone agrees on it. So convince everyone yours is best.`,
        },

        {
          id: `l13-celebration`,
          type: `celebration`,
          message: `Well done, {name}. You now understand MONEY. It's a TOOL humans invented to make TRADING easier than direct barter. Today money comes in COINS, BILLS, CARDS, and DIGITAL forms. Each country has its own CURRENCY. Money is EARNED through WORK — it represents real effort. Smart people SAVE, SPEND wisely, and SHARE. Money is just an AGREEMENT — and one of humanity's most powerful tools. — Atlas 🐻`,
          badge:     `money-trade-explorer`,
          badgeName: `Money and Trade Explorer`,
          xpEarned:  50,
        },

      ],
    },
  ],
};

export default SOCIAL_STUDIES_L13;

// ─── Dev asset check ─────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const mags  = SOCIAL_STUDIES_L13.lessons[0].screens.filter(s => s.type === 'magazine').length;
  const game  = SOCIAL_STUDIES_L13.lessons[0].screens.find(s => s.type === 'interactive')?.items?.length ?? 0;
  const quiz  = SOCIAL_STUDIES_L13.lessons[0].screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  console.log(`[LESSON-SOCIAL-STUDIES-L13] Loaded: "Money and Trade" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
}
