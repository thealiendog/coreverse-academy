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

        // PHASE 2 — MAGAZINE STORY (6 sections)
        {
          type:          'magazine',
          section:       1,
          totalSections: 6,
          headline:      `Who Makes Money?`,
          paragraphs: [
            `In the United States, the government makes all official money. Two separate agencies do this job.`,
            `The U.S. Mint makes all the coins — pennies, nickels, dimes, quarters. The Bureau of Engraving and Printing makes all the paper bills.`,
          ],
          image:        '/explorer-assets/money-business/l01-s1-money-makers.png',
          imageCaption: `Two government agencies make all U.S. money — the Mint makes coins, the Bureau prints bills`,
          vocab: [
            { word: 'currency',   definition: `The money used in a country — U.S. dollars, Mexican pesos, British pounds. Every country has its own currency.`, audioPrompt: `Currency — the money used in a country. U.S. dollars, Mexican pesos, British pounds. Every country has its own currency.` },
            { word: 'government', definition: `The group of people who run a country — including the agencies that make and manage money.`, audioPrompt: `Government — the group of people who run a country, including the agencies that make and manage money.` },
          ],
        },
        {
          type:          'magazine',
          section:       2,
          totalSections: 6,
          headline:      `The U.S. Mint`,
          paragraphs: [
            `The U.S. Mint stamps coins from metal at extremely high pressure. Giant presses can stamp thousands of coins per minute.`,
            `The Mint has facilities in Philadelphia, Denver, San Francisco, and West Point. It makes about 14 billion coins every year.`,
          ],
          image:        '/explorer-assets/money-business/l01-s2-mint-press.png',
          imageCaption: `The U.S. Mint stamps 14 billion coins every year from metal blanks`,
          vocab: [
            { word: 'U.S. Mint', definition: `The government agency that makes all coins in the United States — at facilities in Philadelphia, Denver, San Francisco, and West Point.`, audioPrompt: `U.S. Mint — the government agency that makes all coins in the United States, at facilities in Philadelphia, Denver, San Francisco, and West Point.` },
            { word: 'coin',      definition: `A small piece of metal money. Pennies, nickels, dimes, and quarters are all coins — stamped from metal at the U.S. Mint.`, audioPrompt: `Coin — a small piece of metal money. Pennies, nickels, dimes, and quarters are all coins, stamped from metal at the U.S. Mint.` },
          ],
        },
        {
          type:          'magazine',
          section:       3,
          totalSections: 6,
          headline:      `The Bureau of Engraving and Printing`,
          paragraphs: [
            `The Bureau of Engraving and Printing makes paper money — every dollar bill in the country.`,
            `It has two facilities, one in Washington D.C. and one in Fort Worth, Texas. Making money is serious, high-security work — and it never stops.`,
          ],
          image:        '/explorer-assets/money-business/l01-s3-printing-press.png',
          imageCaption: `The Bureau of Engraving and Printing makes every paper dollar in the country`,
          vocab: [
            { word: 'Bureau of Engraving and Printing', definition: `The government agency that prints all paper money in the United States — bills from $1 to $100.`, audioPrompt: `Bureau of Engraving and Printing — the government agency that prints all paper money in the United States, bills from one dollar to one hundred dollars.` },
            { word: 'bill',                              definition: `A piece of paper money — like a $1 bill or a $20 bill. Bills are printed, not stamped.`, audioPrompt: `Bill — a piece of paper money, like a one-dollar bill or a twenty-dollar bill. Bills are printed, not stamped.` },
          ],
        },
        {
          type:          'magazine',
          section:       4,
          totalSections: 6,
          headline:      `Hidden Security Features`,
          paragraphs: [
            `Paper money has secret features built in to stop counterfeiting — making fake copies.`,
            `Tilt a $20 bill and color-shifting ink changes from gold to green. Hold it up to light and you'll see a hidden watermark portrait built right into the paper.`,
          ],
          image:        '/explorer-assets/money-business/l01-s4-security-features.png',
          imageCaption: `Color-shifting ink, hidden strips, watermarks — every bill is packed with anti-counterfeiting tech`,
          vocab: [
            { word: 'counterfeiting', definition: `Making illegal fake copies of money. A serious crime in every country. Governments build security features to stop it.`, audioPrompt: `Counterfeiting — making illegal fake copies of money. A serious crime in every country. Governments build security features to stop it.` },
            { word: 'watermark',      definition: `A hidden image inside paper money — visible only when you hold the bill up to light. Built into the paper itself.`, audioPrompt: `Watermark — a hidden image inside paper money, visible only when you hold the bill up to light. Built into the paper itself.` },
          ],
        },
        {
          type:          'magazine',
          section:       5,
          totalSections: 6,
          headline:      `Coins Are Metal Sandwiches`,
          paragraphs: [
            `Not all coins are made of the same metal. A penny looks copper, but it's actually 97.5% zinc with just a thin copper coating.`,
            `A quarter is a sandwich — a core of pure copper with layers of nickel on the outside. That's what gives it the silver look.`,
          ],
          image:        '/explorer-assets/money-business/l01-s5-coin-sandwich.png',
          imageCaption: `Coins are metal sandwiches — different alloys for different denominations`,
          vocab: [
            { word: 'alloy',        definition: `A mixture of two or more metals. Coins are made from alloys to balance cost, strength, and appearance.`, audioPrompt: `Alloy — a mixture of two or more metals. Coins are made from alloys to balance cost, strength, and appearance.` },
            { word: 'denomination', definition: `The face value of a coin or bill — what it's worth. A penny's denomination is one cent. A quarter's is 25 cents.`, audioPrompt: `Denomination — the face value of a coin or bill, what it's worth. A penny's denomination is one cent. A quarter's is twenty-five cents.` },
          ],
        },
        {
          type:          'magazine',
          section:       6,
          totalSections: 6,
          headline:      `Most Money Is Digital`,
          paragraphs: [
            `Here's something surprising: most money in the world doesn't exist as paper or coins. It lives on computers.`,
            `When your parents get paid, numbers move from one computer to another. When you pay with a card, no physical cash changes hands. Money is information.`,
          ],
          image:        '/explorer-assets/money-business/l01-s6-digital-money.png',
          imageCaption: `Most money is just numbers moving between computers — no paper, no coins, no physical exchange`,
          vocab: [
            { word: 'digital currency', definition: `Money that exists as numbers on computers — not as physical coins or bills. Most money in the world is now digital.`, audioPrompt: `Digital currency — money that exists as numbers on computers, not as physical coins or bills. Most money in the world is now digital.` },
            { word: 'transaction',      definition: `Any exchange of money. Paying with a card, depositing in a bank, sending money to a friend — all are transactions.`, audioPrompt: `Transaction — any exchange of money. Paying with a card, depositing in a bank, sending money to a friend, all are transactions.` },
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
    fetch('/explorer-assets/money-business/l01-s1-money-makers.png',    { method: 'HEAD' }),
    fetch('/explorer-assets/money-business/l01-s2-mint-press.png',      { method: 'HEAD' }),
    fetch('/explorer-assets/money-business/l01-s3-printing-press.png',  { method: 'HEAD' }),
    fetch('/explorer-assets/money-business/l01-s4-security-features.png', { method: 'HEAD' }),
    fetch('/explorer-assets/money-business/l01-s5-coin-sandwich.png',   { method: 'HEAD' }),
    fetch('/explorer-assets/money-business/l01-s6-digital-money.png',   { method: 'HEAD' }),
  ]).then(([r1, r2, r3, r4, r5, r6]) => {
    console.log(`[ASSET-CHECK-MONEY-L01] money-makers: ${r1.ok}, mint-press: ${r2.ok}, printing-press: ${r3.ok}, security-features: ${r4.ok}, coin-sandwich: ${r5.ok}, digital-money: ${r6.ok}`);
  }).catch(() => {
    console.log('[ASSET-CHECK-MONEY-L01] Could not verify image assets — network check failed');
  });
})();

export default moneybusiness_explorer_l01_screens;
