// ─────────────────────────────────────────────────────────────────────────────
// SOCIAL STUDIES  |  L13 — Money and Trade
// Age band : explorers (6–8)   Guide: atlas
// Standards: C3 D2.Eco.3.K-2 / D2.Eco.4.K-2
// CALIBRATED: Explorer spec v1 (May 2026)
// ─────────────────────────────────────────────────────────────────────────────

const SOCIAL_STUDIES_L13 = {
  ageBand: `explorers`,
  subjectId: `social_studies`,
  guide: `atlas`,

  lessons: [
    {
      id: `social-studies-6-8-13`,
      title: `Money and Trade`,
      duration: 12,
      xpReward: 50,
      badge: `money-trade-explorer`,
      badgeName: `Money and Trade Explorer`,

      screens: [
        {
          id: `l13-welcome`,
          type: `welcome`,
          guideText: `Hi {name}. Atlas here. Today we look at money. What is it really? Where did it come from? How do we use it well? Knowing about money helps you the rest of your life. Let's dig in.`,
          headline: `Money and Trade`,
          subtitle: `What money really is and how to use it well`,
          visual: `/explorer-assets/social-studies/l13-welcome.webp`,
        },

        {
          id: `l13-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Trading Was Hard`,
          paragraphs: [
            `Long ago, before money, people traded directly. This was called barter.`,
            `But barter had a big problem. Imagine you have lots of fish. You need a warm coat. The coat maker wants wheat, not fish. Now you have to find a wheat farmer first. Trading took forever. So humans needed a better way.`,
          ],
          image: `/explorer-assets/social-studies/l13-s1-trade-problem.webp`,
          imageCaption: `Old problem: barter was hard. You had to find someone who wanted what you had.`,
          vocab: [
            { word: `barter`, definition: `Trading goods or services without money.`,
              audioPrompt: `Barter means trading without money, {name}. Before money, people bartered. Eggs for shoes. Fish for tools. Barter still happens. But it was hard for big communities.` },
            { word: `trade`, definition: `When two people give each other something.`,
              audioPrompt: `To trade means two people give each other something, {name}. Long ago, all trade was barter. Today, most trade uses money. But the idea is the same. Both sides agree. Both sides benefit.` },
            { word: `instead`, definition: `In place of something else.`,
              audioPrompt: `Instead means in place of something else, {name}. Instead of barter, we use money. Instead of trading fish for wheat, you sell fish for money. Instead helps us swap one thing for another.` },
          ],
        },

        {
          id: `l13-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Money Was Invented`,
          paragraphs: [
            `Thousands of years ago, humans invented something amazing. Money.`,
            `The first money was shells, beads, or precious metals like gold. About 3,000 years ago, people made the first coins. Later came paper bills. Today we have coins, bills, and even digital money on cards and phones. Money made trading easy.`,
          ],
          image: `/explorer-assets/social-studies/l13-s2-money-invented.webp`,
          imageCaption: `Money was invented. Shells, coins, bills, digital. Each one made trade easier.`,
          vocab: [
            { word: `money`, definition: `A tool we use to buy and sell things.`,
              audioPrompt: `Money is a tool we use to buy and sell, {name}. It makes trading easier than barter. With money, you sell what you have for cash. Then use the cash to buy what you need.` },
            { word: `invent`, definition: `To create something new.`,
              audioPrompt: `To invent means to create something new, {name}. Humans invented money to fix the barter problem. They agreed to use shells or coins as money. We are still inventing new kinds. Digital money is the newest.` },
            { word: `coin`, definition: `Money made of metal. A small round disk.`,
              audioPrompt: `A coin is money made of metal, {name}. A small round disk. The first coins are about 3,000 years old. We still use coins today. Pennies, nickels, dimes, quarters. All coins.` },
          ],
        },

        {
          id: `l13-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Money Today`,
          paragraphs: [
            `Today, money comes in many forms.`,
            `Coins. Paper bills like $1 and $20. Credit cards. Digital money on phones. Different countries use different money. The US uses dollars. Mexico uses pesos. Japan uses yen. Each one works the same way. We agree it has value.`,
          ],
          image: `/explorer-assets/social-studies/l13-s3-money-today.webp`,
          imageCaption: `Money today: coins, bills, cards, digital. Different in each country.`,
          vocab: [
            { word: `bill`, definition: `Paper money in different amounts.`,
              audioPrompt: `A bill is paper money, {name}. Bills come in different amounts. One dollar. Five dollars. Twenty dollars. Each one has a famous person on it. Bills are easier to carry than coins for big amounts.` },
            { word: `currency`, definition: `The kind of money used in a country.`,
              audioPrompt: `Currency is the kind of money a country uses, {name}. US currency is dollars. Mexico's is pesos. Japan's is yen. Each currency works inside that country. When you travel, you might need to exchange money.` },
            { word: `digital`, definition: `Money kept on computers and phones.`,
              audioPrompt: `Digital money is on computers and phones, {name}. Today, lots of money is digital. People pay with apps and cards. Stores use machines that read the cards. Digital money moves between accounts in computers.` },
          ],
        },

        {
          id: `l13-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Where Money Comes From`,
          paragraphs: [
            `Important question. Where does money come from? It does not grow on trees.`,
            `Money is earned through work. Adults do jobs. They use their skills to help others. In return, they get paid money. Doctors earn money for healing. Teachers earn money for teaching. Money represents the work behind it.`,
          ],
          image: `/explorer-assets/social-studies/l13-s4-earn-money.webp`,
          imageCaption: `Money is earned through work. It represents real time and effort.`,
          vocab: [
            { word: `earn`, definition: `To get money by doing work.`,
              audioPrompt: `To earn means to get money by doing work, {name}. People earn money at their jobs. Doctors earn by healing. Bakers earn by baking. Money does not come from nowhere. Every dollar represents real work.` },
            { word: `work`, definition: `Using your skills to make things or help people.`,
              audioPrompt: `Work is using your skills, {name}. To make things or help people. Work is how money is earned. Different jobs pay different amounts. All work matters. All workers help the community.` },
            { word: `represent`, definition: `To stand for something else.`,
              audioPrompt: `Represent means to stand for something else, {name}. A dollar bill represents the work someone did to earn it. The bill is just paper. But it stands for an hour of work or more. That gives money its value.` },
          ],
        },

        {
          id: `l13-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Save, Spend, Share`,
          paragraphs: [
            `When you have money, there are three smart things to do with it.`,
            `Save means keep some for later. For a big goal or an emergency. Spend means use some for things you need. Share means give some to help others. Smart people do all three. Even with $1. Some save, some spend, some share.`,
          ],
          image: `/explorer-assets/social-studies/l13-s5-save-spend.webp`,
          imageCaption: `Three smart habits: save, spend, share. Even with $1, split it.`,
          vocab: [
            { word: `save`, definition: `To keep money for later instead of spending now.`,
              audioPrompt: `To save means to keep money for later, {name}. Instead of spending now. People save for emergencies. For big goals like a bike. Even small amounts saved each week add up over time.` },
            { word: `spend`, definition: `To use money to buy something.`,
              audioPrompt: `To spend means to use money to buy, {name}. Smart spending covers needs first. Then maybe some wants. Before you spend, ask if you really need it. Or just want it. Both are fine but different.` },
            { word: `share`, definition: `To give money to help others.`,
              audioPrompt: `To share means to give money to help, {name}. Even small amounts help. Donating to a food bank. Helping family with a gift. Sharing makes you feel good. It is part of being a good citizen.` },
          ],
        },

        {
          id: `l13-mag-6`,
          type: `magazine`,
          section: 6,
          headline: `Money Connects Everyone`,
          paragraphs: [
            `Here is the big idea. Money is what connects the whole economy.`,
            `When you buy bread, your money goes to the baker. The baker pays the farmer who grew the wheat. The farmer pays for seeds. Round and round. Money flows through the community. It connects every person.`,
          ],
          image: `/explorer-assets/social-studies/l13-s6-money-value.webp`,
          imageCaption: `Money flows. From you to the baker to the farmer. The whole community is connected.`,
          vocab: [
            { word: `flow`, definition: `To move from one place to another.`,
              audioPrompt: `To flow means to move from one place to another, {name}. Money flows through the community. From you to a store. From the store to its workers. From workers to other places. Money keeps moving.` },
            { word: `agreement`, definition: `When people all decide on the same thing.`,
              audioPrompt: `An agreement is when people decide on the same thing, {name}. Money works because of agreement. We all agree paper bills have value. If we did not agree, money would be just paper. Agreement makes it real.` },
            { word: `economy`, definition: `The whole system of work, money, and goods.`,
              audioPrompt: `The economy is the whole system, {name}. Work, money, goods, services. All connected. Big communities have big economies. Small ones have small economies. The economy is how communities meet their needs.` },
          ],
        },

        {
          id: `l13-game`,
          type: `interactive`,
          format: `drag-identify`,
          guideText: `Sort each kind of money, {name}. Coin, bill, or digital?`,
          buckets: [
            { id: `coin`,    label: `Coin`,    color: `#FBBF24` },
            { id: `bill`,    label: `Bill`,    color: `#34D399` },
            { id: `digital`, label: `Digital`, color: `#60A5FA` },
          ],
          items: [
            { id: `l13-g1`, image: `l13-game-1.webp`, label: `A shiny penny`,
              matchPhrase: `Yes! A penny is a coin. Made of metal. Worth one cent.`, correctMatch: `coin` },
            { id: `l13-g2`, image: `l13-game-2.webp`, label: `A quarter`,
              matchPhrase: `Right! A quarter is a coin. Worth 25 cents.`, correctMatch: `coin` },
            { id: `l13-g3`, image: `l13-game-3.webp`, label: `A dime`,
              matchPhrase: `Yes! A dime is a small coin. Worth 10 cents.`, correctMatch: `coin` },
            { id: `l13-g4`, image: `l13-game-4.webp`, label: `A one dollar bill`,
              matchPhrase: `Right! A dollar bill is paper money.`, correctMatch: `bill` },
            { id: `l13-g5`, image: `l13-game-5.webp`, label: `A twenty dollar bill`,
              matchPhrase: `Yes! That is paper money too. A bill worth $20.`, correctMatch: `bill` },
            { id: `l13-g6`, image: `l13-game-6.webp`, label: `A five dollar bill`,
              matchPhrase: `Right! Another paper bill. Worth $5.`, correctMatch: `bill` },
            { id: `l13-g7`, image: `l13-game-7.webp`, label: `Paying with a phone app`,
              matchPhrase: `Yes! That is digital money. Living on your phone.`, correctMatch: `digital` },
            { id: `l13-g8`, image: `l13-game-8.webp`, label: `Swiping a credit card`,
              matchPhrase: `Right! Credit cards use digital money. Money in a computer.`, correctMatch: `digital` },
            { id: `l13-g9`, image: `l13-game-9.webp`, label: `Money in a bank account on the computer`,
              matchPhrase: `Yes! Money in a bank account is digital. Numbers in a computer.`, correctMatch: `digital` },
          ],
        },

        {
          id: `l13-quiz`,
          type: `quiz`,
          guideText: `Let's see what you remember, {name}.`,
          questions: [
            { id: `l13-q1`, format: `multiple-choice`,
              question: `What is money?`,
              options: [`A type of food`, `A tool humans invented to make trading easier`, `Only paper`, `Magic`],
              correctIndex: 1,
              explanation: `Money is a tool humans invented. Before money, people bartered. Money made trading much easier.` },
            { id: `l13-q2`, format: `multiple-choice`,
              question: `What was barter?`,
              options: [`A dance`, `Trading directly without money`, `Only candy`, `A music style`],
              correctIndex: 1,
              explanation: `Barter is trading without money. Eggs for shoes. Long ago, all trade was barter.` },
            { id: `l13-q3`, format: `multiple-choice`,
              question: `Where does money come from?`,
              options: [`Trees`, `It is earned by doing work`, `Magic`, `It is free`],
              correctIndex: 1,
              explanation: `Money is earned through work. Adults work at jobs. They get paid for their skills. There are no money trees.` },
            { id: `l13-q4`, format: `true-false`,
              question: `Smart things to do with money: save, spend, and share.`,
              correctAnswer: true,
              explanation: `True! Save for later. Spend on needs. Share to help others. Three smart habits.` },
            { id: `l13-q5`, format: `fill-blank`,
              question: `Each country has its own ___. Like dollars in the US and yen in Japan.`,
              options: [`currency`, `crayon`, `cookie`, `castle`],
              correctIndex: 0,
              explanation: `Currency! Different money in each country. Dollars, pesos, yen, euros.` },
            { id: `l13-q6`, format: `multiple-choice`,
              question: `Why does money work?`,
              options: [`Magic`, `Everyone agrees that it has value`, `Adults force it`, `It just does`],
              correctIndex: 1,
              explanation: `Agreement! We all agree money has value. If we did not, it would be just paper. Agreement makes money real.` },
          ],
        },

        {
          id: `l13-realworld`,
          type: `real-world`,
          guideText: `The oldest money was used about 5,000 years ago. People used silver. Over time, money got fancier. Coins. Paper. Today, even digital money on phones. Money keeps changing. But the idea stays the same. A tool we agree on to make trade easier.`,
          familyAdventure: `Try the three jars exercise. Get three jars or envelopes. Label them SAVE, SPEND, and SHARE. The next time you get money, split it three ways. Some in each jar. Try this for a month. Notice how each one feels.`,
          creativePrompt: {
            intro: `Pretend you can invent a new kind of money for a new country. Draw your money. Give it a name and a special look.`,
            floor: `Write 3 sentences about your money. Use the sentence starters below.`,
            stretch: `Write 5 sentences. Add why people would agree to use it.`,
            frames: [
              `I invented money called ___.`,
              `It is made of ___.`,
              `On the front, there is ___.`,
              `People would trust it because ___.`,
              `One ___ is worth ___.`,
            ],
          },
        },

        {
          id: `l13-celebration`,
          type: `celebration`,
          message: `Great job, {name}! You now understand money. It is a tool humans invented to make trading easy. Money comes in coins, bills, cards, and digital forms. It is earned through work. Smart people save, spend, and share. Money is just an agreement, and one of humanity's best ideas. Atlas the Bear.`,
          badge: `money-trade-explorer`,
          badgeName: `Money and Trade Explorer`,
          xpEarned: 50,
        },
      ],
    },
  ],
};

export default SOCIAL_STUDIES_L13;

// ─── Dev asset check ──────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const mags = SOCIAL_STUDIES_L13.lessons[0].screens.filter(s => s.type === 'magazine').length;
  const game = SOCIAL_STUDIES_L13.lessons[0].screens.find(s => s.type === 'interactive')?.items?.length ?? 0;
  const quiz = SOCIAL_STUDIES_L13.lessons[0].screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  console.log(`[LESSON-SOCIAL-STUDIES-L13] Loaded: "Money and Trade" with ${mags} magazine sections, ${game} game items, ${quiz} quiz questions`);
}
