// ─────────────────────────────────────────────────────────────────────────────
// HISTORY UE  |  L05 — African Kingdoms: The Mali Empire and More
// Age band : upper_explorers (9–10)   Guide: lyra
// Standards: C3 D2.His.2.3-5 — Compare life across time periods
//            C3 D2.His.4.3-5 — Multiple perspectives in historical events
//            C3 D2.His.14.3-5 — Causes and effects of historical developments
// CALIBRATED: UE spec v1.1 — real domain terms, em-dashes sparing
// SCOPE: 4 concepts — Africa as cradle of civilization, the Mali Empire
//        and Mansa Musa, Timbuktu as center of learning, other African
//        kingdoms (Ghana, Songhai, Great Zimbabwe, Kush, Aksum)
// VERSION: v1
// ─────────────────────────────────────────────────────────────────────────────

const HISTORY_UE_L05 = {
  ageBand: `upper_explorers`,
  subjectId: `history`,
  guide: `lyra`,

  lessons: [
    {
      id: `hw-9-10-05`,
      title: `African Kingdoms: The Mali Empire and More`,
      duration: 18,
      xpReward: 75,
      badge: `africa-historian`,
      badgeName: `Africa Historian`,

      screens: [
        {
          id: `l05-welcome`,
          type: `welcome`,
          guideText: `Hey {name}, Lyra here. Today's lesson covers something that gets skipped in too many history classes. The mighty kingdoms of Africa. Africa is where humans first appeared, where one of the oldest universities in the world was built, and where a king named Mansa Musa once gave away so much gold he accidentally crashed the economy of multiple countries. Africa wasn't a quiet continent waiting to be "discovered." It had powerful empires, brilliant scholars, and rich civilizations going back thousands of years. Let's go.`,
          headline: `African Kingdoms`,
          subtitle: `Empires, scholars, and the wealthiest king in history`,
          visual: `/ue-assets/history/l05-welcome.webp`,
        },

        {
          id: `l05-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Africa: The First Home of Humans`,
          paragraphs: [
            `Every human being alive today has ancestors who came from Africa. Around 300,000 years ago, our species (Homo sapiens) first appeared in East Africa, possibly in modern-day Ethiopia, Kenya, or Tanzania. From there, humans slowly spread across the entire world. Africa is, in a real sense, the original home of humanity. Long before any "Western civilization" existed, African cultures were inventing, building, and trading.`,
            `Some of the earliest organized civilizations were African. KUSH and AKSUM were powerful kingdoms in northeast Africa, trading with ancient Egypt, Rome, and India over 2,000 years ago. The kingdom of GHANA (in West Africa, not the modern country) was one of the first big trade empires of medieval Africa. By the 700s CE, Ghana was famous across the known world for its gold. African history goes back as far as any other region, and in some ways, further.`,
          ],
          image: `/ue-assets/history/l05-s1-africa-origins.webp`,
          imageCaption: `Africa: where humans began and where empires rose long before "world history" usually starts.`,
          vocab: [
            { word: `empire`,
              definition: `A large political unit ruled by a single leader or government, usually covering many cultures or regions. Africa had many great empires in its history.`,
              audioPrompt: `An empire is a large political unit ruled by one leader or government, {name}. Usually it covers many cultures and regions. The Mali Empire, the Ghana Empire, the Aksumite Empire, and many others rose and fell across African history. Most modern students learn about Roman or British empires but skip these. African empires were just as real, just as powerful, and lasted just as long in many cases.` },
            { word: `Homo sapiens`,
              definition: `The scientific name for modern humans. Our species first appeared in East Africa about 300,000 years ago, making Africa the original home of all humanity.`,
              audioPrompt: `Homo sapiens is the scientific name for modern humans, {name}. Our species. We first appeared in East Africa about 300,000 years ago. From there, humans slowly spread to every corner of the world. That means every human being alive today, regardless of where they were born, has ancestors who came from Africa. Africa isn't just one part of human history. It's the starting point of all of it.` },
          ],
        },

        {
          id: `l05-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `The Mali Empire and Mansa Musa`,
          paragraphs: [
            `In the 1230s, a leader named SUNDIATA KEITA founded one of the greatest empires Africa has ever seen. The MALI EMPIRE eventually stretched across modern Mali, Senegal, Gambia, Guinea, and beyond. Mali sat on top of vast amounts of gold. Caravans crossed the Sahara desert to trade with Mali, exchanging salt, silk, and other goods for Malian gold.`,
            `Mali's most famous ruler was MANSA MUSA (mansa means king). He came to power around 1312 and is often called the richest person who has ever lived. In 1324, he made a pilgrimage to the Islamic holy city of Mecca, traveling across Africa with a procession of 60,000 people, including 12,000 servants each carrying gold bars. Along the way, he gave away SO much gold that the price of gold in Egypt crashed and didn't recover for over a decade. His wealth was so legendary that European maps from a century later still showed him sitting on his throne in West Africa.`,
          ],
          image: `/ue-assets/history/l05-s2-mansa-musa.webp`,
          imageCaption: `Mansa Musa: ruler of Mali, possibly the wealthiest person who has ever lived.`,
          vocab: [
            { word: `pilgrimage`,
              definition: `A long religious journey to a holy place. Mansa Musa's pilgrimage to Mecca in 1324 is one of the most famous in history.`,
              audioPrompt: `A pilgrimage is a long religious journey to a holy place, {name}. Mansa Musa's pilgrimage to the Islamic holy city of Mecca in 1324 is one of the most famous in history. He traveled with 60,000 people across Africa, giving away so much gold along the way that he accidentally crashed the gold market in Egypt. Pilgrimages are still common today across many religions. People travel to Mecca, Jerusalem, Rome, Varanasi, and other holy sites every year.` },
            { word: `Mansa Musa`,
              definition: `The most famous ruler of the Mali Empire (came to power around 1312). Often called the wealthiest person who has ever lived, due to Mali's vast gold reserves.`,
              audioPrompt: `Mansa Musa was the king of the Mali Empire in the early 1300s, {name}. The word mansa means king. He is often called the wealthiest person who has ever lived. His 1324 pilgrimage to Mecca is legendary — he traveled with 60,000 people and gave away so much gold that he accidentally crashed the Egyptian economy for years afterward. Even a century later, European mapmakers were still drawing him on their maps of Africa.` },
          ],
        },

        {
          id: `l05-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Timbuktu: A World Center of Learning`,
          paragraphs: [
            `One of the cities in the Mali Empire became one of the most important learning centers in the entire medieval world. TIMBUKTU, on the southern edge of the Sahara, grew into a major hub for scholars, books, and universities. The University of Sankore in Timbuktu housed an estimated 25,000 students at its peak. The libraries held HUNDREDS OF THOUSANDS of handwritten books on subjects like astronomy, medicine, math, law, and philosophy.`,
            `While much of Europe in this period had limited literacy, Timbuktu was a city where books were currency. The saying was that in Timbuktu, books were worth more than gold. Scholars from across Africa, the Middle East, and beyond came to study and teach there. Many of the original Timbuktu manuscripts still exist today, carefully preserved despite centuries of war and weather. They're proof that medieval Africa wasn't isolated. It was deeply connected to the wider world of scholarship.`,
          ],
          image: `/ue-assets/history/l05-s3-timbuktu.webp`,
          imageCaption: `Timbuktu: home to 25,000 students and hundreds of thousands of books.`,
          vocab: [
            { word: `scholar`,
              definition: `Someone who studies a topic deeply and produces serious knowledge or writing about it. Medieval Timbuktu was famous for its scholars.`,
              audioPrompt: `A scholar is someone who studies a topic deeply, {name}. Scholars produce serious research and writing. Medieval Timbuktu was famous across the known world for its scholars, who studied subjects like astronomy, medicine, math, law, and philosophy. Many wrote books that still exist today. The presence of so many scholars made Timbuktu one of the most important learning centers anywhere in the world during its time.` },
            { word: `manuscript`,
              definition: `A handwritten book or document. Hundreds of thousands of manuscripts were preserved in Timbuktu's libraries, covering astronomy, medicine, law, and philosophy.`,
              audioPrompt: `A manuscript is a handwritten book or document, {name}. Before printing presses, every book was copied by hand. Timbuktu's libraries held hundreds of thousands of them. They covered astronomy, medicine, math, Islamic law, and philosophy. Many of these manuscripts still exist today, carefully preserved by families in Timbuktu for centuries. They are direct physical proof that medieval Africa was a center of serious scholarship.` },
          ],
        },

        {
          id: `l05-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Other Powerful African Kingdoms`,
          paragraphs: [
            `Mali wasn't the only great African empire. The SONGHAI EMPIRE, which rose after Mali, was even bigger at its peak. The kingdom of GREAT ZIMBABWE in southern Africa built massive stone structures without mortar that still stand today. The KINGDOM OF AKSUM in modern Ethiopia was one of the first major civilizations to adopt Christianity, around 330 CE. The KINGDOM OF KUSH in modern Sudan ruled Egypt for nearly a century, and Kushite pharaohs are buried in pyramids that outnumber all of Egypt's.`,
            `These kingdoms weren't isolated. They traded with India, China, Europe, and the Islamic world. They built cities, founded universities, made art, and shaped human civilization in ways most history books underrepresent. The story of human history is much bigger and more diverse than the version usually told. Recognizing African kingdoms is part of seeing history accurately, not just the parts that get the most attention.`,
          ],
          image: `/ue-assets/history/l05-s4-other-kingdoms.webp`,
          imageCaption: `Songhai, Aksum, Kush, Great Zimbabwe. African empires across the centuries.`,
          vocab: [
            { word: `trade route`,
              definition: `A path used regularly for moving goods between regions. Africa had massive trade routes crossing the Sahara and connecting to Europe, Asia, and the Middle East.`,
              audioPrompt: `A trade route is a regular path used to move goods between regions, {name}. Africa had famous trade routes, especially the trans-Saharan routes that crossed the desert by camel caravan. Gold, salt, books, and ideas traveled these routes. Trade routes connected African kingdoms to Europe, the Middle East, India, and even China. They're why African empires like Mali and Songhai became so wealthy. They controlled the flow of goods across enormous distances.` },
            { word: `Songhai`,
              definition: `The West African empire that succeeded the Mali Empire and became even larger at its peak. One of the largest empires in African history.`,
              audioPrompt: `Songhai was the West African empire that came after Mali, {name}. At its peak in the 1400s and 1500s, it was even bigger than Mali had been. Like Mali, Songhai was built on gold and trans-Saharan trade. Timbuktu remained one of its major cities and centers of learning. The Songhai Empire eventually fell in 1591 when it was invaded. At its height, it was one of the largest empires anywhere in the world.` },
          ],
        },

        {
          id: `l05-game`,
          type: `interactive`,
          format: `investigation`,
          guideText: `Investigation time, {name}. Four facts about African kingdoms. For each one, identify which kingdom or empire it best matches: MALI/MANSA MUSA, TIMBUKTU/LEARNING, or ANOTHER AFRICAN KINGDOM (Songhai, Aksum, Kush, Great Zimbabwe)?\n\nOne is sneakier than it looks.`,
          options: [
            { id: `mali-musa`,     label: `Mali / Mansa Musa`,       color: `#FBBF24`, description: `The Mali Empire (13th-17th centuries), especially Mansa Musa, known for vast gold wealth.` },
            { id: `timbuktu`,      label: `Timbuktu / Learning`,     color: `#60A5FA`, description: `Timbuktu's famous role as a center for scholars, books, and universities.` },
            { id: `other-kingdom`, label: `Another African Kingdom`, color: `#A78BFA`, description: `Other empires: Songhai, Aksum, Kush, Great Zimbabwe, etc.` },
          ],
          cases: [
            {
              id: `case-1`,
              caseTitle: `Fact #1`,
              clues: [
                { text: `A king made a famous pilgrimage to Mecca in 1324.` },
                { text: `He traveled with 60,000 people, including thousands carrying gold bars.` },
                { text: `He gave away so much gold that he accidentally crashed the Egyptian gold market for years.` },
              ],
              correctAnswer: `mali-musa`,
              realWorldExample: `Mansa Musa, the most famous Malian ruler.`,
              explanation: `Pilgrimage to Mecca. 60,000 followers. Gold distribution crashing markets. This is the famous 1324 journey of Mansa Musa, ruler of the Mali Empire. His wealth was so legendary that European mapmakers were still drawing him on maps a century later.`,
            },
            {
              id: `case-2`,
              caseTitle: `Fact #2`,
              clues: [
                { text: `A city that housed an estimated 25,000 students at its peak.` },
                { text: `Its libraries held hundreds of thousands of handwritten books.` },
                { text: `A saying claimed books here were worth more than gold.` },
              ],
              correctAnswer: `timbuktu`,
              realWorldExample: `Timbuktu in modern Mali, a major medieval center of learning.`,
              explanation: `25,000 students. Vast libraries. Books worth more than gold. This is Timbuktu, the medieval intellectual capital of West Africa. Scholars came from across the Islamic world to study there. Many of those original manuscripts still exist today.`,
            },
            {
              id: `case-3`,
              caseTitle: `Fact #3`,
              clues: [
                { text: `A kingdom in modern Ethiopia that adopted Christianity around 330 CE.` },
                { text: `It traded with Rome, India, and parts of China.` },
                { text: `Famous for tall stone obelisks marking royal tombs.` },
              ],
              correctAnswer: `other-kingdom`,
              realWorldExample: `The Kingdom of Aksum, an early Christian African civilization.`,
              explanation: `Christian by 330 CE. Traded across three continents. Stone obelisks. This is Aksum, in modern Ethiopia, one of Africa's earliest major civilizations. It was a trading powerhouse and one of the first kingdoms anywhere to officially adopt Christianity.`,
            },
            {
              id: `case-4`,
              caseTitle: `Fact #4 — The Tricky One`,
              clues: [
                { text: `A wealthy African kingdom whose ruler became famous across Europe and the Islamic world.` },
                { text: `It was rich in gold from trans-Saharan trade.` },
                { text: `The clue: this is the kingdom that came BEFORE Mali. It was the first big trade empire in West Africa.` },
              ],
              correctAnswer: `other-kingdom`,
              realWorldExample: `The Ghana Empire (not the modern country), which preceded Mali.`,
              explanation: `Tricky because the clues match Mali (rich, gold, famous, West Africa, trans-Saharan trade). But the key detail says BEFORE Mali. This is the Ghana Empire, which rose to power around the 700s and reached its peak before Mali took over in the 1200s. Lesson: African history has multiple empires that came in waves. Ghana, then Mali, then Songhai. Each built on the wealth and connections of the one before.`,
            },
          ],
        },

        {
          id: `l05-quiz`,
          type: `quiz`,
          guideText: `Let's see what stuck, {name}.`,
          questions: [
            { id: `l05-q1`, format: `multiple-choice`,
              question: `Where did the species Homo sapiens first appear?`,
              options: [
                `Europe`,
                `Africa, about 300,000 years ago`,
                `Asia`,
                `Australia`,
              ],
              correctIndex: 1,
              explanation: `Modern humans first appeared in East Africa about 300,000 years ago. Every human alive today has ancestors who came from Africa.` },

            { id: `l05-q2`, format: `multiple-choice`,
              question: `Who was Mansa Musa?`,
              options: [
                `A famous explorer`,
                `The ruler of the Mali Empire, often called the richest person who has ever lived`,
                `A scholar from Timbuktu`,
                `A modern African leader`,
              ],
              correctIndex: 1,
              explanation: `Mansa Musa ruled the Mali Empire in the early 1300s. His wealth was so legendary that historians today still call him likely the richest person in human history.` },

            { id: `l05-q3`, format: `multiple-choice`,
              question: `Why did Mansa Musa's pilgrimage to Mecca become so famous?`,
              options: [
                `It was the first one ever`,
                `He gave away so much gold along the way that he accidentally crashed the Egyptian economy`,
                `He converted on the way`,
                `He died during it`,
              ],
              correctIndex: 1,
              explanation: `Mansa Musa traveled with 60,000 people, including 12,000 servants carrying gold bars. He gave away so much gold in Egypt that the price of gold dropped for years afterward.` },

            { id: `l05-q4`, format: `multiple-choice`,
              question: `What was special about TIMBUKTU?`,
              options: [
                `It was the capital of Egypt`,
                `It was a major center of learning with thousands of students and hundreds of thousands of books`,
                `It had no people`,
                `It was the largest African city`,
              ],
              correctIndex: 1,
              explanation: `Timbuktu was home to the University of Sankore (about 25,000 students) and massive libraries. People said books were worth more than gold there.` },

            { id: `l05-q5`, format: `true-false`,
              question: `True or false: Africa had no major civilizations before Europeans arrived.`,
              correctAnswer: false,
              explanation: `False. Africa had powerful empires for thousands of years before European contact. Aksum, Kush, Ghana, Mali, Songhai, and Great Zimbabwe were all major civilizations with their own cultures, governments, and trade networks.` },

            { id: `l05-q6`, format: `multiple-choice`,
              question: `What is an EMPIRE?`,
              options: [
                `Any small village`,
                `A large political unit ruled by a single leader or government, usually covering many cultures or regions`,
                `A type of farm`,
                `A religious building`,
              ],
              correctIndex: 1,
              explanation: `An empire is a large territory ruled by one government. Africa had many empires over its history, including Mali, Songhai, Ghana, Aksum, and others.` },

            { id: `l05-q7`, format: `multiple-choice`,
              question: `Which of these is a TRADE ROUTE that made African kingdoms wealthy?`,
              options: [
                `The Atlantic Ocean`,
                `The trans-Saharan routes crossing the desert by camel caravan`,
                `The Mississippi River`,
                `The Amazon River`,
              ],
              correctIndex: 1,
              explanation: `The trans-Saharan trade routes connected African kingdoms to Europe, the Middle East, and beyond. Gold, salt, and books traveled across the desert by caravan, making empires like Mali and Songhai enormously wealthy.` },

            { id: `l05-q8`, format: `multiple-choice`,
              question: `Why does it matter to learn about African kingdoms in world history?`,
              options: [
                `It doesn't matter`,
                `Because Africa had powerful civilizations for thousands of years, and skipping them gives a very incomplete picture of world history`,
                `Only Africans should learn this`,
                `It's only relevant in modern Africa`,
              ],
              correctIndex: 1,
              explanation: `African empires were just as real, just as wealthy, and just as influential as European or Asian ones, but they're often skipped in textbooks. Learning about them is part of seeing world history accurately, instead of through a narrow lens.` },
          ],
        },

        {
          id: `l05-reflection`,
          type: `reflection`,
          guideText: `Before we wrap, {name}, pick ONE question and actually answer it. Your response gets saved, and I'll remember it next time we talk.`,
          prompts: [
            { id: `r1`, text: `Did you ever learn about Mansa Musa or Timbuktu in school before today? If not, why do you think these stories get left out?` },
            { id: `r2`, text: `Imagine being a scholar in Timbuktu 700 years ago, with access to hundreds of thousands of books. What subject would you most want to study, and why?` },
            { id: `r3`, text: `What's the difference between an empire that builds wealth through trade (like Mali) and one that builds wealth through conquest? Are they really different?` },
            { id: `r4`, text: `If you were going to add an African kingdom to a museum exhibit, which one would you pick and why?` },
          ],
        },

        {
          id: `l05-realworld`,
          type: `real-world`,
          guideText: `For a long time, Western history books underrepresented Africa. Some left it out entirely. The result is that many people grow up thinking Africa "started" when Europeans arrived. Nothing could be further from the truth. Africa had powerful empires, brilliant scholars, busy cities, and rich cultures for thousands of years. Recognizing this history isn't political correctness. It's accuracy. The full story of humanity includes every continent, and Africa has been at the center of human history from the very beginning.`,
          familyAdventure: `Family Wealth-Comparison Activity. As a family, look up the richest people alive today (Elon Musk, Jeff Bezos, etc.) and their estimated wealth in modern dollars. Then look up estimates of Mansa Musa's wealth, often described as around $400 BILLION in today's money. Discuss: how can one ruler in the 1300s have been wealthier than the wealthiest modern billionaires? What does that say about Mali, gold, and trade?`,
          creativePrompt: {
            intro: `Imagine you're a traveler from Europe in 1325, just returning from Africa. Write a letter home describing what you saw.`,
            floor: `Write at least 5 sentences. Describe Mansa Musa, Timbuktu, or one other African kingdom you visited. Include real details.`,
            stretch: `Write 8 to 10 sentences. Cover the wealth of Mali, the scholarship of Timbuktu, the trans-Saharan caravans, and how this experience changed your view of Africa.`,
            open: `Write as much as you want. Build a full traveler's account with multiple cities, real African historical figures, descriptions of trade goods, and reflection on why Europeans of your time knew so little about these kingdoms.`,
            frames: [
              `I traveled to Africa and saw ___.`,
              `The most impressive thing was ___.`,
              `The wealth of Mansa Musa was ___.`,
              `In Timbuktu, I noticed ___.`,
              `When I return home, people will not believe me when I say ___.`,
            ],
          },
        },

        {
          id: `l05-celebration`,
          type: `celebration`,
          message: `Great work, {name}. You can now explain why Africa is the original home of humanity, describe the Mali Empire and Mansa Musa, recognize Timbuktu as a major medieval center of learning, and name several other powerful African kingdoms. Next lesson: we follow the most famous trade route in history. The SILK ROAD, which connected China, India, the Middle East, and Europe for over a thousand years. See you there. — Lyra.`,
          badge: `africa-historian`,
          badgeName: `Africa Historian`,
          xpEarned: 75,
        },
      ],
    },
  ],
};

export default HISTORY_UE_L05;

// ─── Dev asset check ──────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const screens = HISTORY_UE_L05.lessons[0].screens;
  const mags = screens.filter(s => s.type === 'magazine').length;
  const game = screens.find(s => s.type === 'interactive')?.cases?.length ?? 0;
  const quiz = screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  const refl = screens.find(s => s.type === 'reflection')?.prompts?.length ?? 0;
  const totalVocab = screens.filter(s => s.type === 'magazine').reduce((sum, s) => sum + (s.vocab?.length || 0), 0);
  console.log(`[LESSON-HISTORY-UE-L05 v1] Loaded with ${mags} magazine sections, ${totalVocab} vocab terms, ${game} game cases, ${quiz} quiz Qs, ${refl} reflection prompts`);
}
