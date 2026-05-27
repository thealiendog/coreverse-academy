// ─────────────────────────────────────────────────────────────────────────────
// HISTORY UE  |  L06 — The Silk Road: Connecting East and West
// Age band : upper_explorers (9–10)   Guide: lyra
// Standards: C3 D2.His.2.3-5 — Compare life across time periods
//            C3 D2.His.14.3-5 — Causes and effects of historical developments
//            C3 D2.Geo.6.3-5 — Explain how culture moves through space
// CALIBRATED: UE spec v1.1 — real domain terms, em-dashes sparing
// SCOPE: 4 concepts — what the Silk Road was, what traveled along it,
//        ideas and disease spreading too, why it matters today
// VERSION: v1
// ─────────────────────────────────────────────────────────────────────────────

const HISTORY_UE_L06 = {
  ageBand: `upper_explorers`,
  subjectId: `history`,
  guide: `lyra`,

  lessons: [
    {
      id: `hw-9-10-06`,
      title: `The Silk Road: Connecting East and West`,
      duration: 18,
      xpReward: 75,
      badge: `silk-road-trader`,
      badgeName: `Silk Road Trader`,

      screens: [
        {
          id: `l06-welcome`,
          type: `welcome`,
          guideText: `Hey {name}, Lyra here. Last lesson we visited African kingdoms grown wealthy through trade. Today we follow the most famous trade network in history. The SILK ROAD wasn't actually one road. It was a web of routes stretching from China all the way to the Mediterranean. For over a thousand years, traders moved silk, spices, gold, and ideas across thousands of miles of mountains and deserts. The Silk Road is how distant civilizations first really connected with each other. Let's go.`,
          headline: `The Silk Road`,
          subtitle: `The trade network that first connected China to the Mediterranean`,
          visual: `/ue-assets/history/l06-welcome.webp`,
        },

        {
          id: `l06-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `What the Silk Road Actually Was`,
          paragraphs: [
            `The SILK ROAD was a network of trade routes that connected China to the Mediterranean Sea. The first major use of it began around 130 BCE, when the Han Dynasty of China sent explorers west and made trade contacts. From then until about 1450 CE, goods, people, and ideas moved across this huge stretch of Asia and beyond. The total length was over 4,000 miles, crossing some of the most dangerous terrain on Earth: the Gobi Desert, the Pamir Mountains, and the deserts of Central Asia.`,
            `Almost no single trader traveled the entire length. Most carried their goods one segment at a time and traded them at markets along the way. A bolt of silk in China might pass through ten different traders before reaching Rome. Cities along the route, like SAMARKAND and KASHGAR, became enormously wealthy as middlemen. Without modern transportation, the Silk Road was the only way these civilizations could trade with each other regularly.`,
          ],
          image: `/ue-assets/history/l06-s1-routes.webp`,
          imageCaption: `A web of routes stretching 4,000+ miles across Asia.`,
          vocab: [
            { word: `Silk Road`,
              definition: `A network of trade routes connecting China to the Mediterranean from about 130 BCE to 1450 CE. Named for the Chinese silk that traveled along it.`,
              audioPrompt: `The Silk Road was a web of trade routes connecting China to the Mediterranean, {name}. It started around 130 BCE and stayed important for over 1,500 years. The name comes from Chinese silk, which was the most famous product moved along the routes. But silk was only one of many things traded. Spices, gold, glass, paper, gunpowder, and ideas all traveled the same paths.` },
            { word: `trade network`,
              definition: `A system of routes or connections used to move goods, people, and ideas between different regions. The Silk Road was history's most famous trade network.`,
              audioPrompt: `A trade network is a system of connected routes used to move goods and ideas between regions, {name}. The Silk Road was the most famous trade network in history. It connected China to the Mediterranean across 4,000 miles. Modern trade networks still follow some of the same patterns, using ships, planes, and roads to move goods between continents. Wherever civilizations connect regularly, a trade network exists.` },
          ],
        },

        {
          id: `l06-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `What Traveled the Silk Road`,
          paragraphs: [
            `China sent SILK, which Europe couldn't make and would pay almost anything to get. Also tea, paper, porcelain, and later gunpowder. From the West, China imported gold, silver, glass, wool, horses, and grapes. India sent spices like pepper and cinnamon, plus precious stones. The Middle East provided textiles, dates, and skilled craft work. The trade went both ways and lasted for over a thousand years.`,
            `The exchange of GOODS was just the surface. What really changed history were the IDEAS that traveled. Paper-making, invented in China, spread west and eventually made books affordable. Numerals, including zero, developed in India and traveled west through the Islamic world to Europe. Buddhism spread from India along the Silk Road into China and Korea. Whole religions, technologies, languages, and art styles moved with the merchants. The Silk Road was a highway for human knowledge.`,
          ],
          image: `/ue-assets/history/l06-s2-goods-and-ideas.webp`,
          imageCaption: `Silk and spices, paper and zero, religions and art. All on one road.`,
          vocab: [
            { word: `merchant`,
              definition: `A person who buys and sells goods for a living, often traveling long distances to trade. Silk Road merchants were among the bravest and most successful traders in history.`,
              audioPrompt: `A merchant is a person who buys and sells goods for a living, {name}. Silk Road merchants traveled with caravans of camels across deserts and mountains, sometimes for years at a time. They had to navigate languages, currencies, bandits, weather, and the wear of the journey. The most successful merchants became enormously wealthy. They were the people who tied distant civilizations together for centuries.` },
            { word: `middleman`,
              definition: `A trader who buys goods from one seller and resells them to another, profiting from the difference. Cities like Samarkand and Kashgar grew rich as Silk Road middlemen.`,
              audioPrompt: `A middleman is a trader who sits between the original producer and the final buyer, {name}. Cities along the Silk Road like Samarkand and Kashgar were enormously wealthy middlemen. A bolt of Chinese silk might pass through ten different traders before reaching Rome, and each one took a cut. The middlemen didn't make the silk and didn't wear it. They just moved it along the route and grew rich doing it.` },
          ],
        },

        {
          id: `l06-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `When Trade Spread Disease Too`,
          paragraphs: [
            `Not everything that traveled the Silk Road was good. Diseases also moved along it. The bacteria and viruses that lived in one part of the world had no defenses on the other side. The most famous example came later, when the BLACK DEATH (we'll cover it in a few lessons) traveled west along Silk Road routes from Asia, eventually killing about a third of Europe. Once people, animals, and goods can move freely, so can germs.`,
            `This is something modern people forget. Trade and travel always carry health risks. The same routes that brought silk and books also brought plagues. Diseases like measles and smallpox spread across continents because of trade. Recognizing this is part of seeing trade honestly. It connects civilizations, AND it spreads the bad along with the good. The Silk Road is one of history's clearest examples of both.`,
          ],
          image: `/ue-assets/history/l06-s3-disease.webp`,
          imageCaption: `Trade routes carry everything. Good and bad. Silk and germs.`,
          vocab: [
            { word: `caravan`,
              definition: `A group of merchants traveling together for safety, usually with camels carrying goods across long distances. Caravans were the backbone of Silk Road trade.`,
              audioPrompt: `A caravan is a group of merchants traveling together, {name}. Usually with camels carrying goods across long distances. Travel alone on the Silk Road was almost suicidal because of bandits, weather, and isolation. Caravans gave traders safety in numbers, shared knowledge of the routes, and combined resources for water and supplies. Some caravans had hundreds of camels and stretched for miles along the road.` },
            { word: `epidemic`,
              definition: `An outbreak of disease that spreads rapidly through a population in a specific area. Multiple epidemics traveled along the Silk Road, including the bubonic plague that became the Black Death.`,
              audioPrompt: `An epidemic is an outbreak of disease that spreads rapidly through a population, {name}. When an epidemic crosses many countries and continents, it becomes a pandemic. The Silk Road accidentally spread multiple epidemics along its routes. The most famous was the bubonic plague that became the Black Death in Europe. Trade routes connect everything, including diseases. That's been true for as long as humans have traded.` },
          ],
        },

        {
          id: `l06-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Why the Silk Road Still Matters`,
          paragraphs: [
            `The Silk Road slowly faded in the 1400s. Ocean trade routes opened up, and ships could carry far more cargo than camels. Maritime trade replaced overland trade. But the IDEA of a connected world had been planted. By 1500, Europeans were sailing all the way to Asia. The connections that started on the Silk Road never went back.`,
            `Today, much of what's called "globalization" follows patterns the Silk Road first established. Ideas, goods, and people moving across continents at high speed. China and Europe are once again two of the world's biggest trading partners, and they're connected by some of the same overland and maritime routes. China has even invested heavily in modern roads, railways, and ports across Asia in what they call the "Belt and Road Initiative," explicitly named after the old Silk Road. The route is over 2,000 years old. It's not done yet.`,
          ],
          image: `/ue-assets/history/l06-s4-modern-relevance.webp`,
          imageCaption: `Globalization isn't new. It started here.`,
          vocab: [
            { word: `exchange`,
              definition: `Trading or giving something for something else. The Silk Road was famous for its exchange of goods, ideas, religions, and even diseases between distant cultures.`,
              audioPrompt: `Exchange means trading one thing for another, {name}. The Silk Road was a massive system of exchange. Chinese silk for European gold. Indian spices for Mediterranean wine. Buddhist ideas spreading east while Roman art styles spread to Asia. Even diseases were exchanged, in both directions. Whenever cultures meet, exchange happens. The Silk Road made it happen on a bigger scale than the world had ever seen.` },
            { word: `globalization`,
              definition: `The increasing connection and integration of economies, cultures, and people across the world. The Silk Road was one of the earliest and most powerful forms of globalization.`,
              audioPrompt: `Globalization is the process of the world becoming more connected, {name}. Goods, ideas, people, and even diseases flowing between countries and continents faster and more freely. The Silk Road was an early version of globalization. The same patterns it established, long-distance trade routes, cultural mixing, the spread of ideas across borders, are still shaping the modern world. Globalization isn't a modern invention. It's been building for 2,000 years.` },
          ],
        },

        {
          id: `l06-game`,
          type: `interactive`,
          format: `investigation`,
          guideText: `Investigation time, {name}. Four things traveled the Silk Road. For each one, identify which direction it was MOSTLY going: EAST TO WEST (from China or India toward Europe), WEST TO EAST (from Europe or the Middle East toward China), or MOVING IN ALL DIRECTIONS (ideas and disease spread everywhere)?\n\nOne is sneakier than it looks.`,
          options: [
            { id: `east-to-west`,   label: `East to West`,    color: `#34D399`, description: `From China or India toward the Mediterranean (silk, spices, paper, gunpowder).` },
            { id: `west-to-east`,   label: `West to East`,    color: `#60A5FA`, description: `From Europe or the Middle East toward China (gold, silver, glass, horses).` },
            { id: `all-directions`, label: `All Directions`,  color: `#A78BFA`, description: `Ideas, religions, diseases. Things that spread to everyone along the route.` },
          ],
          cases: [
            {
              id: `case-1`,
              caseTitle: `Item #1: Bolts of silk`,
              clues: [
                { text: `Chinese workers raised silkworms and wove the silk into beautiful cloth.` },
                { text: `Romans paid huge amounts of gold for it.` },
                { text: `For centuries, only China knew how to make it.` },
              ],
              correctAnswer: `east-to-west`,
              realWorldExample: `Silk was the most famous Silk Road export.`,
              explanation: `China made silk. Europe wanted it. Silk traveled west. The Roman Empire spent so much gold on Chinese silk that some Roman senators tried to ban it for hurting the economy. Pure east-to-west movement.`,
            },
            {
              id: `case-2`,
              caseTitle: `Item #2: Buddhism`,
              clues: [
                { text: `Started in India around 500 BCE.` },
                { text: `Spread along the Silk Road into Central Asia, China, Korea, and Japan over the next thousand years.` },
                { text: `Today, billions of people across Asia are Buddhist or come from Buddhist traditions.` },
              ],
              correctAnswer: `all-directions`,
              realWorldExample: `Buddhism's spread across Asia is one of history's biggest religious migrations.`,
              explanation: `Started in India, spread east into China and beyond, and influenced cultures across the entire Silk Road. Religions don't just go one direction. They spread to anyone open to them. This kind of multi-directional cultural movement is what made the Silk Road so powerful.`,
            },
            {
              id: `case-3`,
              caseTitle: `Item #3: Glass`,
              clues: [
                { text: `Made in workshops in the Mediterranean and Middle East.` },
                { text: `Highly valued in China, which couldn't make it as well.` },
                { text: `Chinese aristocrats paid a fortune for fine Roman and Arab glass.` },
              ],
              correctAnswer: `west-to-east`,
              realWorldExample: `Roman and Islamic glass was prized across Asia.`,
              explanation: `The West had the better glass-making skill for centuries. Chinese buyers were eager customers. West-to-east trade is sometimes forgotten because silk gets all the attention, but trade went both ways. China imported huge amounts of glass, gold, and horses from the west.`,
            },
            {
              id: `case-4`,
              caseTitle: `Item #4 — The Tricky One: Paper`,
              clues: [
                { text: `Invented in China around 100 CE.` },
                { text: `Spread west along the Silk Road, reaching Baghdad by 750 CE and Europe by 1100 CE.` },
                { text: `Replaced bamboo, papyrus, and parchment everywhere it went.` },
              ],
              correctAnswer: `east-to-west`,
              realWorldExample: `One of China's most important contributions to the world.`,
              explanation: `Tricky because paper feels like a Western thing now. We have it everywhere. But paper was invented in China and spread west via the Silk Road. It reached the Islamic world by 750 CE and Europe centuries later. Without Chinese paper, the printing press would have had nothing to print on. Lesson: many things we think of as "Western" started somewhere else and traveled.`,
            },
          ],
        },

        {
          id: `l06-quiz`,
          type: `quiz`,
          guideText: `Let's see what stuck, {name}.`,
          questions: [
            { id: `l06-q1`, format: `multiple-choice`,
              question: `What was the SILK ROAD?`,
              options: [
                `A single road from China to Rome`,
                `A network of trade routes connecting China to the Mediterranean across over 4,000 miles`,
                `A road made of silk`,
                `A modern highway in Asia`,
              ],
              correctIndex: 1,
              explanation: `The Silk Road wasn't one road. It was a web of overland trade routes connecting China to the Mediterranean across Asia. It was used heavily from about 130 BCE to 1450 CE.` },

            { id: `l06-q2`, format: `multiple-choice`,
              question: `Did most traders travel the ENTIRE length of the Silk Road?`,
              options: [
                `Yes, they went from China to Rome`,
                `No. Most carried goods one segment at a time and traded them at markets along the way`,
                `Only royal traders did`,
                `Yes, but only by ship`,
              ],
              correctIndex: 1,
              explanation: `Almost no trader covered the whole 4,000+ mile route. Goods passed from merchant to merchant in stages, often through ten or more hands before reaching the other end.` },

            { id: `l06-q3`, format: `multiple-choice`,
              question: `Besides goods, what important things traveled along the Silk Road?`,
              options: [
                `Only money`,
                `Ideas, religions, technologies, and even diseases`,
                `Only food`,
                `Only people`,
              ],
              correctIndex: 1,
              explanation: `The Silk Road was a highway for IDEAS as much as for goods. Paper-making, the number zero, Buddhism, Islamic mathematics, and Roman art styles all spread along it. So did diseases.` },

            { id: `l06-q4`, format: `multiple-choice`,
              question: `What is a CARAVAN?`,
              options: [
                `A type of building`,
                `A group of merchants traveling together for safety, usually with camels`,
                `A holiday`,
                `A river`,
              ],
              correctIndex: 1,
              explanation: `A caravan is a group of traders moving together for safety. Travel alone on the Silk Road was extremely dangerous. Caravans had hundreds of camels and provided safety, shared supplies, and combined navigation knowledge.` },

            { id: `l06-q5`, format: `true-false`,
              question: `True or false: The Silk Road only brought good things to the cultures it connected.`,
              correctAnswer: false,
              explanation: `False. The Silk Road spread amazing ideas and goods, but also spread devastating diseases. Bubonic plague, smallpox, measles, and other illnesses traveled the same routes. Trade always carries health risks, then and now.` },

            { id: `l06-q6`, format: `multiple-choice`,
              question: `Which of these inventions traveled FROM China TO Europe via the Silk Road?`,
              options: [
                `Olive oil`,
                `Paper and gunpowder`,
                `Roman law`,
                `Greek philosophy`,
              ],
              correctIndex: 1,
              explanation: `Paper and gunpowder were both Chinese inventions that traveled west via the Silk Road. So were the compass and printing techniques. Without these Chinese gifts to the world, Europe's later "Scientific Revolution" wouldn't have looked the same.` },

            { id: `l06-q7`, format: `multiple-choice`,
              question: `What were SAMARKAND and KASHGAR?`,
              options: [
                `Religious texts`,
                `Important trade cities along the Silk Road that grew enormously wealthy as middlemen`,
                `Kingdoms`,
                `Types of cloth`,
              ],
              correctIndex: 1,
              explanation: `Cities along the Silk Road became wealthy by hosting traders and taking a cut of every deal. Samarkand and Kashgar are two of the most famous, and both still exist today as major cities in Central Asia.` },

            { id: `l06-q8`, format: `multiple-choice`,
              question: `Why does the Silk Road still matter today?`,
              options: [
                `It doesn't`,
                `Because it was the world's first major experience of "globalization," and the patterns it set up still shape how trade and ideas move today`,
                `Only Chinese people care about it`,
                `Because it's still being used`,
              ],
              correctIndex: 1,
              explanation: `Modern globalization, with ideas and goods flowing between continents, started on the Silk Road. Even China's modern "Belt and Road Initiative" is explicitly named after it. The route is over 2,000 years old and still influencing the world.` },
          ],
        },

        {
          id: `l06-reflection`,
          type: `reflection`,
          guideText: `Before we wrap, {name}, pick ONE question and actually answer it. Your response gets saved, and I'll remember it next time we talk.`,
          prompts: [
            { id: `r1`, text: `Imagine being a merchant in a Silk Road caravan. What would be the hardest part of your job? What would be the most exciting?` },
            { id: `r2`, text: `The Silk Road spread amazing ideas AND devastating diseases. How do you think about this trade-off in our modern world of fast travel?` },
            { id: `r3`, text: `Which Silk Road import (paper, silk, gunpowder, glass, spices) would you have wanted most if you lived 1,000 years ago, and why?` },
            { id: `r4`, text: `Look around your home. Can you identify three things that came from another country? Trace where they were made. The Silk Road is still in your house, in a way.` },
          ],
        },

        {
          id: `l06-realworld`,
          type: `real-world`,
          guideText: `The Silk Road is the original model for everything we now call "globalization." When you wear clothing made in Vietnam, eat fruit from Chile, use a phone designed in California and assembled in China, and talk to a friend across the world in real time, you're seeing the modern version of what Silk Road merchants started 2,000 years ago. The world has been deeply connected for much longer than most people realize. Understanding the Silk Road is understanding the foundation of the modern global economy.`,
          familyAdventure: `Family Origin Hunt. As a family, pick five everyday objects in your home. Find out where they were made. Then research what trade route they probably traveled to get to you. (Most modern goods follow ocean shipping routes that descended from Silk Road maritime spinoffs.) Then have each family member trace ONE ITEM back as far in history as possible. Could be a fabric, a spice, a piece of technology.`,
          creativePrompt: {
            intro: `Imagine you're a Silk Road merchant in the year 1100. Write a letter home about a trade you just finished.`,
            floor: `Write at least 5 sentences. Describe what you traded, who you traded with, what you saw, and what's headed home.`,
            stretch: `Write 8 to 10 sentences. Include the journey, the deal, what your goods will be worth, and at least one cultural or technological discovery you made along the way.`,
            open: `Write as much as you want. Build a full first-person account that includes multiple cities, real Silk Road goods, mentions of religions or ideas you encountered, and reflection on what this kind of life feels like.`,
            frames: [
              `I am a merchant traveling from ___ to ___.`,
              `On this journey, I traded ___ for ___.`,
              `The most amazing thing I saw was ___.`,
              `I learned something new about ___.`,
              `Tell my family I will be home in ___.`,
            ],
          },
        },

        {
          id: `l06-celebration`,
          type: `celebration`,
          message: `Great work, {name}. You can now explain what the Silk Road was, name what traveled along it (both good and bad), understand how ideas and religions spread alongside goods, and connect it to modern globalization. Next lesson: while the Silk Road was active, an extraordinary period of scholarship was happening in the Islamic world. The Islamic Golden Age. We'll meet the scholars who saved ancient knowledge and pushed it forward. See you there. — Lyra.`,
          badge: `silk-road-trader`,
          badgeName: `Silk Road Trader`,
          xpEarned: 75,
        },
      ],
    },
  ],
};

export default HISTORY_UE_L06;

// ─── Dev asset check ──────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const screens = HISTORY_UE_L06.lessons[0].screens;
  const mags = screens.filter(s => s.type === 'magazine').length;
  const game = screens.find(s => s.type === 'interactive')?.cases?.length ?? 0;
  const quiz = screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  const refl = screens.find(s => s.type === 'reflection')?.prompts?.length ?? 0;
  const totalVocab = screens.filter(s => s.type === 'magazine').reduce((sum, s) => sum + (s.vocab?.length || 0), 0);
  console.log(`[LESSON-HISTORY-UE-L06 v1] Loaded with ${mags} magazine sections, ${totalVocab} vocab terms, ${game} game cases, ${quiz} quiz Qs, ${refl} reflection prompts`);
}
