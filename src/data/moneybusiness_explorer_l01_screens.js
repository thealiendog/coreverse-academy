// ============================================================
// COREVERSE EXPLORERS — Money & Business · Lesson 1
// "How Money Is Made"
// Ages 6–8 | Guide: Ace | ExplorerLessonPlayer format
// ============================================================

const moneybusiness_explorer_l01_screens = {
  ageBand:   'explorers',
  subjectId: 'money',
  guide:     'ace',
  lessons: [
    {
      id:        'mb-6-8-01',
      title:     `How Money Is Made`,
      duration:  12,
      xpReward:  50,
      badge:     'money-detective',
      badgeName: `Money Detective`,
      screens: [
        // PHASE 1 — WELCOME
        {
          type:      'welcome',
          guideText: `Have you ever wondered who makes money? Like, who actually prints dollar bills? It's not just some machine running all day — there's a whole system behind it, and it's pretty wild.`,
        },

        // PHASE 2 — MAGAZINE STORY (4 sections)
        {
          type:          'magazine',
          section:       1,
          totalSections: 4,
          headline:      `Who Makes Money?`,
          paragraphs: [
            `In the United States, the government makes all official money. There are actually two separate agencies that do this job. The U.S. Mint is responsible for making coins — pennies, nickels, dimes, and quarters. The Bureau of Engraving and Printing makes paper bills — the ones and fives and twenties you see every day.`,
            `These are two completely different organisations making two different types of money. The U.S. Mint stamps coins out of metal. The Bureau of Engraving and Printing prints paper notes. Together they produce enough money to keep the entire country's economy running — billions of coins and bills every single year.`,
            `The U.S. Mint has facilities in Philadelphia, Denver, San Francisco, and West Point. The Bureau of Engraving and Printing operates in Washington D.C. and Fort Worth, Texas. Making money is serious, high-security work — and it never stops.`,
          ],
          image:        '/explorer-assets/money-business/l01-magazine-who-makes-money.png',
          imageCaption: `The U.S. Mint makes coins; the Bureau of Engraving and Printing makes paper bills`,
          vocab: [
            { word: `U.S. Mint`,                      definition: `The government agency that produces all official coins in the United States — pennies, nickels, dimes, quarters, and more — stamped from metal at secure facilities.`,              audioPrompt: `U.S. Mint — the government agency that produces all official coins in the United States, including pennies, nickels, dimes, and quarters, stamped from metal at secure facilities.` },
            { word: `Bureau of Engraving and Printing`, definition: `The government agency that designs and prints all paper money in the United States — from $1 bills to $100 bills — with security features built into every note.`, audioPrompt: `Bureau of Engraving and Printing — the government agency that designs and prints all paper money in the United States, from one dollar bills to one hundred dollar bills, with security features built into every note.` },
          ],
        },
        {
          type:          'magazine',
          section:       2,
          totalSections: 4,
          headline:      `Why Is Money So Hard to Fake?`,
          paragraphs: [
            `Paper money has many secret features built in to stop counterfeiting — which means making fake copies. The government designs these features so that even very sophisticated criminals can't successfully copy them. A standard $20 bill has multiple layers of protection, each harder to replicate than the last.`,
            `Color-shifting ink changes colour when you tilt the bill — it shifts from gold to green. A thin security strip is hidden inside the paper itself and glows pink under special ultraviolet light. Tiny microprinting — so small you need a magnifying glass to read it — is hidden in several places. And a watermark portrait is built right into the paper, visible only when you hold the bill up to light.`,
            `These aren't just clever tricks — they're the result of years of engineering and design work. The same bill also has raised ink you can feel with your fingertip, serial numbers printed in special ink, and a colour-coded design that has been updated regularly over the decades. Counterfeiting U.S. currency is a federal crime, and these features make it extremely difficult to get away with.`,
          ],
          image:        '/explorer-assets/money-business/l01-magazine-security-features.png',
          imageCaption: `Security features — color-shifting ink, hidden strip, microprinting, and watermark protect every bill`,
          vocab: [
            { word: `counterfeiting`, definition: `Making illegal fake copies of money — a serious crime in every country. Governments build security features into currency to make counterfeiting as difficult as possible.`,          audioPrompt: `Counterfeiting — making illegal fake copies of money. A serious crime in every country. Governments build security features into currency to make counterfeiting as difficult as possible.` },
            { word: `watermark`,      definition: `A security feature built into paper money — a faint image or pattern visible only when the bill is held up to light, embedded in the paper itself during manufacturing.`, audioPrompt: `Watermark — a security feature built into paper money. A faint image or pattern visible only when the bill is held up to light, embedded in the paper itself during manufacturing.` },
          ],
        },
        {
          type:          'magazine',
          section:       3,
          totalSections: 4,
          headline:      `What About Coins?`,
          paragraphs: [
            `Coins are made through a completely different process than paper bills. At the U.S. Mint, giant presses stamp designs into flat metal discs at extremely high pressure — thousands of coins per minute. The design is pressed so deeply that it would take enormous force to alter it.`,
            `Not all coins are made of the same metal. A penny looks copper but is actually 97.5% zinc with just a thin copper coating on the outside — pure copper pennies would be far too expensive. Quarters are a sandwich construction: a core of pure copper with layers of nickel on the outside, which gives them their silver appearance and distinct feel.`,
            `The U.S. Mint makes approximately 14 billion coins every year. Each coin is inspected for quality, counted, and bagged before being shipped to Federal Reserve Banks, which distribute them to regular banks, and eventually to businesses and people. The next time you find a coin on the street, check the date — that's the year the Mint stamped it.`,
          ],
          image:        '/explorer-assets/money-business/l01-magazine-coins.png',
          imageCaption: `Coins — stamped from metal at high pressure, each made from a specific metal composition`,
          vocab: [
            { word: `denomination`, definition: `The face value of a coin or bill — the amount it represents, such as one cent (penny), 25 cents (quarter), or one dollar ($1 bill).`,                                                     audioPrompt: `Denomination — the face value of a coin or bill. The amount it represents, such as one cent for a penny, 25 cents for a quarter, or one dollar for a one-dollar bill.` },
            { word: `alloy`,         definition: `A mixture of two or more metals — coins are made from alloys to balance cost, durability, and appearance. Pennies are a zinc-copper alloy; quarters are a copper-nickel alloy.`, audioPrompt: `Alloy — a mixture of two or more metals. Coins are made from alloys to balance cost, durability, and appearance. Pennies are a zinc-copper alloy; quarters are a copper-nickel alloy.` },
          ],
        },
        {
          type:          'magazine',
          section:       4,
          totalSections: 4,
          headline:      `Digital Money`,
          paragraphs: [
            `Here's something surprising: most money in the world today doesn't exist as paper or coins. It lives on computers. When your parents get paid, no truck delivers a bag of cash to your house — numbers simply move from their employer's computer system to their bank account. Money has become information.`,
            `When your family pays for groceries with a card or phone, no physical money changes hands. A message is sent electronically from one bank to another, and numbers are subtracted from one account and added to another in seconds. This is called digital currency, and it's how the vast majority of money moves around the world today.`,
            `Digital money is fast, convenient, and traceable — every transaction leaves a record. The physical coins and bills you hold are actually just a tiny fraction of all the money in existence. Most wealth exists only as numbers on computer servers around the world, moving between accounts millions of times per second.`,
          ],
          image:        '/explorer-assets/money-business/l01-magazine-digital-money.png',
          imageCaption: `Digital money — most money exists as numbers on computers, moving between accounts instantly`,
          vocab: [
            { word: `digital currency`, definition: `Money that exists as electronic numbers in computer systems rather than as physical coins or bills — most transactions today happen digitally, moving numbers between bank accounts.`, audioPrompt: `Digital currency — money that exists as electronic numbers in computer systems rather than as physical coins or bills. Most transactions today happen digitally, moving numbers between bank accounts.` },
            { word: `transaction`,      definition: `Any exchange of money — a deposit, withdrawal, payment, or transfer. Digital transactions move money electronically between accounts without any physical cash changing hands.`,     audioPrompt: `Transaction — any exchange of money, including a deposit, withdrawal, payment, or transfer. Digital transactions move money electronically between accounts without any physical cash changing hands.` },
          ],
        },

        // PHASE 3 — INTERACTIVE
        {
          type:          'interactive',
          activityType:  'drag-match',
          instruction:   `Tap each card, then tap which government agency made it!`,
          guideText:     `Two different government agencies make U.S. money — and they make very different things. The U.S. Mint stamps metal coins. The Bureau of Engraving and Printing prints paper bills. Can you sort these four items to the right agency?`,
          columnHeaders: [`The Money`, `Who Made It?`],
          items: [
            { image: 'l01-game-penny.png',            label: `A copper-colored coin worth one cent, stamped from metal at a U.S. government facility.`,                        correctMatch: 'mint', objectPosition: 'center 50%', matchPhrase: `U.S. Mint! Pennies are coins, and all U.S. coins are made by the U.S. Mint. A penny is stamped from a metal disc — it's mostly zinc on the inside with a thin copper coating on the outside. The Mint makes billions of pennies every year at facilities in Philadelphia and Denver.` },
            { image: 'l01-game-dollar-bill.png',      label: `A green paper note with a portrait, serial number, and anti-counterfeiting features printed on it.`,            correctMatch: 'bep',  objectPosition: 'center 50%', matchPhrase: `Bureau of Engraving and Printing! Paper bills are printed by the Bureau of Engraving and Printing, not the Mint. Dollar bills are printed on special paper with security features built right in — a security strip, raised ink, and microprinting too small to read with the naked eye.` },
            { image: 'l01-game-quarter.png',          label: `A silver-colored coin worth 25 cents, made from layers of copper and nickel sandwiched together.`,             correctMatch: 'mint', objectPosition: 'center 50%', matchPhrase: `U.S. Mint! Quarters are coins, so they're made by the U.S. Mint. A quarter is actually a metal sandwich — a core of pure copper with layers of nickel on the outside, which gives it that silver colour. The ridged edge (called reeding) was originally there to prevent people from shaving off metal.` },
            { image: 'l01-game-twenty-dollar-bill.png', label: `A paper note with color-shifting ink, a hidden security strip, and a watermark portrait inside the paper.`, correctMatch: 'bep',  objectPosition: 'center 50%', matchPhrase: `Bureau of Engraving and Printing! The $20 bill is one of the most counterfeited notes in the world — which is why the Bureau of Engraving and Printing has packed it with the most security features. Tilt it and the ink shifts from gold to green. Hold it to light and you'll see the watermark face. Run your finger over the print and you can feel it's raised.` },
          ],
          buckets: [
            { id: 'mint', label: `🪙 U.S. Mint`,           color: '#60A5FA' },
            { id: 'bep',  label: `🖨️ Bureau of Engraving`, color: '#34D399' },
          ],
        },

        // PHASE 4 — MASTERY QUIZ
        {
          type:      'quiz',
          guideText: `Quiz time, {name}! Let's see what you've learned about how money is made. Answer all 6 questions to earn your Money Detective badge!`,
          questions: [
            {
              format:       'multiple-choice',
              question:     `Who makes paper money in the United States?`,
              options:      [`The White House`, `The Bureau of Engraving and Printing`, `Amazon`, `The Post Office`],
              correctIndex: 1,
            },
            {
              format:       'multiple-choice',
              question:     `What is counterfeiting?`,
              options:      [`Saving money in a bank`, `Making fake copies of money`, `Spending too much`, `Trading coins for bills`],
              correctIndex: 1,
            },
            {
              format:       'multiple-choice',
              question:     `What is digital money?`,
              options:      [`Money made of metal`, `Money you can only spend online`, `Money stored as numbers on computers in banks`, `Cryptocurrency only`],
              correctIndex: 2,
            },
            {
              format:        'true-false',
              question:      `The U.S. Mint makes coins, and the Bureau of Engraving and Printing makes paper bills — these are two separate government agencies.`,
              correctAnswer: true,
            },
            {
              format:       'fill-blank',
              question:     `A security feature of paper money that is visible only when held up to light is called a ___.`,
              options:      [`watermark`, `security strip`, `microprint`, `serial number`],
              correctIndex: 0,
            },
            {
              format:       'multiple-choice',
              question:     `Why don't most people receive their pay as physical cash today?`,
              options:      [`Banks no longer accept cash for large amounts`, `Cash is illegal above certain dollar amounts`, `Most money is digital — numbers moving between computer accounts instantly`, `Paper money is being phased out in favour of coins`],
              correctIndex: 2,
            },
          ],
        },

        // PHASE 5 — REAL-WORLD CONNECTION
        {
          type:            'real-world',
          guideText:       `Next time you hold a dollar bill, look for the hidden security strip and the watermark — you're holding one of the most carefully designed objects ever made.`,
          familyAdventure: `Go on a coin hunt around your home! Collect any coins you find, sort them by type, and examine each one closely. Can you find the year it was made on each coin? Which coin in your collection is the oldest? Look at a dollar bill together with a grown-up and try to find three security features — the security strip, the watermark, and the color-shifting ink on larger bills.`,
          creativePrompt:  `Design your own currency! Draw a bill or coin for an imaginary country. Decide: What is it worth? Whose portrait goes on it? What symbol represents your country? What three security features will you add to stop counterfeiting? Write a short description of each security feature and explain why you chose it. Give your currency a name.`,
        },

        // PHASE 6 — CELEBRATION
        {
          type:      'celebration',
          xpEarned:  50,
          badge:     'money-detective',
          badgeName: `Money Detective`,
          message:   `Excellent work, {name}! You now know that money doesn't just appear — it's designed, secured, and produced by the government through two separate agencies. Understanding how money is made is the first step to understanding how it works. Ace is so proud to share this knowledge with you.`,
        },
      ],
    },
  ],
};

// Log on module load — confirms lesson wired correctly + verifies image assets at runtime
(() => {
  const l    = moneybusiness_explorer_l01_screens.lessons[0];
  const mags = l.screens.filter(s => s.type === 'magazine').length;
  const game = l.screens.find(s => s.type === 'interactive')?.items?.length || 0;
  const quiz = l.screens.find(s => s.type === 'quiz')?.questions?.length || 0;
  console.log(`[LESSON-MONEY-L01] Loaded: "How Money Is Made" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
  Promise.all([
    fetch('/explorer-assets/money-business/l01-magazine-who-makes-money.png', { method: 'HEAD' }),
    fetch('/explorer-assets/money-business/l01-magazine-security-features.png', { method: 'HEAD' }),
    fetch('/explorer-assets/money-business/l01-magazine-coins.png',            { method: 'HEAD' }),
    fetch('/explorer-assets/money-business/l01-magazine-digital-money.png',    { method: 'HEAD' }),
  ]).then(([r1, r2, r3, r4]) => {
    console.log(`[ASSET-CHECK-MONEY-L01] who-makes-money: ${r1.ok}, security-features: ${r2.ok}, coins: ${r3.ok}, digital-money: ${r4.ok}`);
  }).catch(() => {
    console.log('[ASSET-CHECK-MONEY-L01] Could not verify image assets — network check failed');
  });
})();

export default moneybusiness_explorer_l01_screens;
