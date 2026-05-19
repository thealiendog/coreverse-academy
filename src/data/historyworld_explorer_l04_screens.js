// ─────────────────────────────────────────────────────────────────────────────
// HISTORY & WORLD  |  L04 — Ancient China and the Silk Road
// Age band : explorers (6–8)   Guide: lyra
// Slots between L03 (Ancient Rome) and L05 (Maya/Aztec/Inca)
// ─────────────────────────────────────────────────────────────────────────────

const HW_L04 = {
  ageBand:   `explorers`,
  subjectId: `history`,
  guide:     `lyra`,

  lessons: [
    {
      id:        `hw-6-8-04`,
      title:     `Ancient China and the Silk Road`,
      duration:  12,
      xpReward:  50,
      badge:     `china-explorer`,
      badgeName: `Ancient China Explorer`,

      screens: [

        {
          id: `l04-welcome`,
          type: `welcome`,
          guideText: `Hello {name}, Lyra here. We've journeyed through Egypt, Greece, and Rome. Today we travel EAST to ANCIENT CHINA — one of the OLDEST continuous civilizations on Earth. China gave the world some of the most IMPORTANT inventions ever (you use them every day!). And we'll travel along the SILK ROAD — the legendary trade route that connected China to the rest of the world for 1,500 years. Let's go.`,
          headline: `Ancient China and the Silk Road`,
          subtitle: `The civilization that invented paper, printing, gunpowder, and the compass`,
          visual: `/explorer-assets/history/l04-welcome.webp`,
        },

        {
          id: `l04-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `One of the OLDEST Civilizations on Earth`,
          paragraphs: [
            `Ancient China is one of the LONGEST-LASTING civilizations in human history. Chinese culture has continued for over 4,000 YEARS — that's older than Greece, older than Rome.`,
            `China grew up around two great rivers — the YELLOW RIVER (Huang He) in the north and the YANGTZE RIVER in the south. These rivers gave water for farming RICE and millet. Early Chinese people built villages, then towns, then huge cities. They developed a writing system using thousands of beautiful symbols called CHARACTERS — still used today. They worshipped ancestors and nature, built temples called PAGODAS, and grew silkworms for the world's most luxurious fabric: SILK. Mountains, deserts, and oceans surrounded China — keeping it somewhat separate from other civilizations. This let Chinese culture develop in its own unique way.`,
          ],
          image: `/explorer-assets/history/l04-s1-ancient-china.webp`,
          imageCaption: `Ancient China: river valleys, rice fields, pagodas, mountains. 4,000+ years of continuous culture.`,
          vocab: [
            { word: `ancient China`,  definition: `The CIVILIZATION that grew along China's great RIVERS. ANCIENT CHINA is one of the oldest continuous cultures.`,
              audioPrompt: `Ancient China, {name}, is the civilization that grew along China's great rivers. Ancient China is one of the oldest continuous cultures on Earth — over 4,000 years old. While other ancient civilizations rose and fell, Chinese culture kept developing without stopping. That's why Chinese traditions, language, and ideas are so deep and rich.` },
            { word: `Yellow River`,   definition: `The MAJOR RIVER of northern China. The YELLOW RIVER is called the "cradle of Chinese civilization."`,
              audioPrompt: `The Yellow River, {name}, is the major river of northern China. The Yellow River is called the cradle of Chinese civilization — like the Nile for Egypt. It's named for the yellow-brown earth it carries. Early Chinese people farmed along its banks. That's where Chinese culture began.` },
            { word: `silk`,           definition: `A SHINY, SOFT fabric made from silkworm cocoons. SILK was China's most precious export for centuries.`,
              audioPrompt: `Silk, {name}, is a shiny, soft fabric made from silkworm cocoons. Silk was China's most precious export for centuries. The Chinese kept silk-making secret for 3,000 years. People in other parts of the world wanted Chinese silk so much, they paid fortunes for it. That's why the trade route was called the Silk Road.` },
          ],
        },

        {
          id: `l04-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `DYNASTIES: Families of Emperors`,
          paragraphs: [
            `Ancient China was ruled by EMPERORS — kings of huge power. But Chinese rulers came in families called DYNASTIES. When one emperor died, his son (or grandson) usually took over.`,
            `Each dynasty had its own name and lasted for hundreds of years. Some famous dynasties: the SHANG (3,000+ years ago — first written records). The ZHOU (where philosophers like Confucius taught). The QIN (built the first version of the Great Wall and unified China). The HAN (when paper was invented). The TANG (golden age of poetry and art). The MING (built the Forbidden City and explored the world by sea). When a dynasty grew weak or unfair, it would FALL, and a new family would rise to take its place. This cycle happened MANY times across 4,000 years. Chinese rulers believed they had something called the MANDATE OF HEAVEN — the right to rule from the sky itself. If they ruled badly, the heavens would take it away.`,
          ],
          image: `/explorer-assets/history/l04-s2-dynasties.webp`,
          imageCaption: `Chinese emperor in golden robes. Dynasties — families of rulers — governed China for 4,000 years.`,
          vocab: [
            { word: `dynasty`,        definition: `A RULING FAMILY where power passes from one to the next. China had many DYNASTIES across 4,000 years.`,
              audioPrompt: `A dynasty, {name}, is a ruling family where power passes from one to the next. China had many dynasties across 4,000 years. Each dynasty had its own name, its own style of art and government, and its own famous emperors. Studying Chinese history means learning the dynasties — Han, Tang, Ming, Qing, and many more.` },
            { word: `emperor`,        definition: `The SUPREME RULER of China. The EMPEROR had absolute power over the land.`,
              audioPrompt: `The emperor, {name}, was the supreme ruler of China. The emperor had absolute power over the land. Chinese people called him the "Son of Heaven." Anyone meeting him had to bow with their forehead touching the ground. He lived in a palace surrounded by walls and guards. Most ordinary people would never see him in their lifetime.` },
            { word: `Confucius`,      definition: `An ancient Chinese TEACHER and PHILOSOPHER. CONFUCIUS taught about wisdom, family, and being good.`,
              audioPrompt: `Confucius, {name}, was an ancient Chinese teacher and philosopher who lived about 2,500 years ago. Confucius taught about wisdom, family, respecting elders, being kind, and being a good citizen. His ideas shaped Chinese culture for thousands of years. Many people around the world still study his sayings today. Like Socrates of Greece, Confucius asked big questions about how to live well.` },
          ],
        },

        {
          id: `l04-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `The FOUR GREAT INVENTIONS`,
          paragraphs: [
            `Here's the AMAZING part. Ancient China invented FOUR things that CHANGED THE WORLD. Without them, modern life would look completely different.`,
            `1. PAPER (invented ~2,000 years ago, Han dynasty). Before paper, people wrote on bamboo strips, animal skins, or stone — slow and expensive. Paper was light, cheap, and easy to make. It spread to the whole world. Every book, every letter, every notebook — paper came from China. 2. PRINTING (invented ~1,200 years ago, Tang dynasty). Carving symbols into blocks, inking them, pressing them on paper. Made books fast and cheap. Spread knowledge across the world. 3. GUNPOWDER (invented ~1,200 years ago). Originally made for fireworks during celebrations (it still is — Chinese fireworks are spectacular). Later used in weapons too. 4. THE COMPASS (a magnetic needle that always points north). Made ocean travel possible. Without it, no explorers, no GPS, no modern navigation. Four inventions. World-changing.`,
          ],
          image: `/explorer-assets/history/l04-s3-four-inventions.webp`,
          imageCaption: `The Four Great Inventions: paper, printing, gunpowder, compass. All from ancient China. World-changing.`,
          vocab: [
            { word: `four inventions`, definition: `China's MOST FAMOUS gifts to the world. The FOUR INVENTIONS are paper, printing, gunpowder, and the compass.`,
              audioPrompt: `The four inventions, {name}, are China's most famous gifts to the world. The four inventions are paper, printing, gunpowder, and the compass. Each one alone would be remarkable. All four from one civilization is astonishing. Without these inventions, the modern world wouldn't exist as we know it.` },
            { word: `paper`,          definition: `A THIN material made from plant fibers — used for writing. PAPER was invented in China about 2,000 years ago.`,
              audioPrompt: `Paper, {name}, is a thin material made from plant fibers — used for writing. Paper was invented in China about 2,000 years ago. Imagine learning without paper — no books, no notebooks, no homework sheets, no maps, no money, no cards. Paper changed how humans share knowledge. One of the most important inventions ever.` },
            { word: `compass`,        definition: `A magnetic NEEDLE that points NORTH. The COMPASS made long sea travel possible.`,
              audioPrompt: `A compass, {name}, is a magnetic needle that always points north. The compass made long sea travel possible. Before the compass, sailors used the stars — but couldn't navigate on cloudy nights or stormy days. The compass works in any weather. It let ships explore the whole world. Modern GPS comes from this Chinese invention.` },
          ],
        },

        {
          id: `l04-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `The GREAT WALL of China`,
          paragraphs: [
            `Imagine building a wall so LONG it goes across an entire country. That's the GREAT WALL of China.`,
            `The Great Wall stretches over 13,000 MILES through mountains, valleys, and deserts. It was built over more than 2,000 years, starting around 2,200 years ago in the Qin dynasty. Different emperors added pieces over many centuries. Why build such a wall? To PROTECT China from invaders from the north — wild horsemen called Mongols and others. The wall is made of stone, brick, and packed earth. It has watchtowers along the way where soldiers could see enemies coming. Workers built it by hand — millions of them, over many lifetimes. Some died building it; many were buried in the wall itself. Today, the Great Wall is the LONGEST human-built structure on Earth. You can see it from space (just barely!). Millions of tourists visit it every year. It's a symbol of what humans can build when they work together over many lifetimes.`,
          ],
          image: `/explorer-assets/history/l04-s4-great-wall.webp`,
          imageCaption: `Great Wall of China: 13,000+ miles. Built over 2,000+ years. Longest human-built structure ever.`,
          vocab: [
            { word: `Great Wall`,     definition: `A massive WALL stretching across northern China. The GREAT WALL is the longest human-built structure on Earth.`,
              audioPrompt: `The Great Wall, {name}, is a massive wall stretching across northern China. The Great Wall is the longest human-built structure on Earth — over 13,000 miles. It was built over 2,000 years by millions of workers. It protected China from invaders. Today, it's one of the wonders of the world. People visit it from everywhere.` },
            { word: `Mongols`,        definition: `Fierce HORSE WARRIORS from the steppes north of China. MONGOLS often raided China — the Wall was meant to stop them.`,
              audioPrompt: `The Mongols, {name}, were fierce horse warriors from the steppes north of China. Mongols often raided China — the Great Wall was meant to stop them. They were skilled riders and archers who lived on horseback. Later, under a leader called Genghis Khan, the Mongols built their own huge empire that even conquered parts of China for a while.` },
            { word: `protect`,        definition: `KEEP SAFE from danger. The Great Wall was built to PROTECT China from invaders.`,
              audioPrompt: `To protect, {name}, is to keep safe from danger. The Great Wall was built to protect China from invaders. Walls can protect, but they can't keep cultures from sharing ideas. Even with the Wall, Chinese ideas spread to the world — and ideas from elsewhere reached China. Protection from invaders, yes. But not isolation from people.` },
          ],
        },

        {
          id: `l04-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `The SILK ROAD: Highway of the Ancient World`,
          paragraphs: [
            `Here's something amazing. For 1,500 YEARS, the world's longest trade route connected China to the rest of the world. It was called the SILK ROAD.`,
            `The Silk Road wasn't really one road — it was a NETWORK of paths winding 4,000 miles from China through Central Asia, the Middle East, to Europe and Africa. Camel CARAVANS traveled it for months — sometimes years — to deliver goods. From China came: silk (of course), tea, porcelain, paper, gunpowder. To China came: gold, glass, horses, spices, jewelry, ideas. Religions, art, music, and inventions traveled both directions. Buddhism reached China from India by Silk Road. Chinese inventions reached Europe by Silk Road. Cities along the route — like Samarkand, Bukhara, Kashgar — became rich and famous trading hubs. The Silk Road CONNECTED CIVILIZATIONS. It proved that even with mountains and deserts in between, humans wanted to TRADE and SHARE.`,
          ],
          image: `/explorer-assets/history/l04-s5-silk-road.webp`,
          imageCaption: `Silk Road: 4,000-mile trade network connecting China to Europe for 1,500 years. Goods, ideas, religions flowed both ways.`,
          vocab: [
            { word: `Silk Road`,      definition: `A 4,000-mile TRADE NETWORK connecting China to the West. The SILK ROAD lasted 1,500 years.`,
              audioPrompt: `The Silk Road, {name}, was a four-thousand-mile trade network connecting China to the West. The Silk Road lasted fifteen hundred years. Not really one road — many paths through deserts, over mountains, across rivers. Camel caravans traveled it. Cities grew rich along it. Ideas spread on it. It made East and West learn about each other.` },
            { word: `caravan`,        definition: `A GROUP of travelers and pack animals going together. CARAVANS of camels carried goods on the Silk Road.`,
              audioPrompt: `A caravan, {name}, is a group of travelers and pack animals going together. Caravans of camels carried goods on the Silk Road. Why camels? Because camels can travel for days without water. They could cross deserts that horses couldn't. A caravan might have hundreds of camels, all loaded with silk, spices, and treasures. Slow, but reliable.` },
            { word: `cultural exchange`, definition: `When CULTURES share IDEAS and goods. The Silk Road was the greatest CULTURAL EXCHANGE of the ancient world.`,
              audioPrompt: `Cultural exchange, {name}, is when cultures share ideas and goods. The Silk Road was the greatest cultural exchange of the ancient world. Religions, foods, art, music, technology — all spread both ways. Buddhism reached China. Paper reached Europe. Without the Silk Road, the world would be very different. Cultures grow when they share.` },
          ],
        },

        {
          id: `l04-mag-6`,
          type: `magazine`,
          section: 6,
          headline: `China's Gifts TODAY`,
          paragraphs: [
            `{name} — China's ancient inventions are EVERYWHERE in modern life. You use them every single day.`,
            `PAPER — every book, every notebook, every piece of money, every tissue. PRINTING — every printed book, every newspaper, every poster. The computer printer in your home is descended from Chinese block printing. GUNPOWDER — every firework you've ever seen. (Less happily — many modern weapons too.) COMPASS — every GPS in every phone uses the same principle. Pilots and ship captains still use magnetic compasses as backup. NOODLES — invented in China, spread along the Silk Road, became spaghetti in Italy. TEA — also Chinese, now drunk worldwide. SILK — still the world's most luxurious fabric. PAPER MONEY — first used in China during the Tang dynasty, now used everywhere. Chinese ancient culture isn't ancient at all in its IMPACT. It's still shaping the world every day. Just like Rome's gifts, China's gifts are quietly powering modern life everywhere you look.`,
          ],
          image: `/explorer-assets/history/l04-s6-china-today.webp`,
          imageCaption: `China's gifts today: paper, printing, fireworks, GPS (from compass), noodles, tea, silk. Everywhere.`,
          vocab: [
            { word: `everywhere`,     definition: `In MANY PLACES, ALL THE TIME. China's gifts are EVERYWHERE in modern life.`,
              audioPrompt: `Everywhere, {name}, means in many places, all the time. China's gifts are everywhere in modern life. The book you're reading? Paper from China. Your phone's GPS? Built on China's compass invention. The fireworks at celebrations? Chinese gunpowder. Noodles for dinner? Invented in China. Once you start seeing China's legacy, you notice it everywhere.` },
            { word: `impact`,         definition: `The EFFECT something HAS. China's inventions had ENORMOUS impact on the whole world.`,
              audioPrompt: `Impact, {name}, is the effect something has. China's inventions had enormous impact on the whole world. Some inventions are small — a better tool, a clever fix. Others change everything — paper changed how humans share knowledge. Printing changed how knowledge spreads. Each of China's four inventions changed the world. That's huge impact.` },
            { word: `still shaping`,  definition: `STILL CHANGING things TODAY. Ancient China is STILL SHAPING our modern world.`,
              audioPrompt: `Still shaping, {name}, means still changing things today. Ancient China is still shaping our modern world. The empire is no longer ancient — China is a modern country. But the ANCIENT inventions live on, used by billions of people every day. Some gifts never stop giving. China's inventions are still shaping life thousands of years later.` },
          ],
        },

        {
          id: `l04-game`,
          type: `interactive`,
          format: `drag-match`,
          guideText: `Let's see what you remember, {name}.`,
          buckets: [
            { id: `fact`, label: `✅ Yes, that's true!`, color: `#34D399` },
            { id: `myth`, label: `❌ No way!`,           color: `#F87171` },
          ],
          items: [
            { id: `l04-g1`, image: `l04-game-1.webp`, label: `Ancient China invented PAPER, PRINTING, GUNPOWDER, and the COMPASS — four world-changing inventions.`,
              matchPhrase: `Yes! The Four Great Inventions of ancient China. All four reshaped the entire world. Paper for writing. Printing for sharing knowledge. Gunpowder for fireworks. Compass for navigation. World-changing gifts.`,
              correctMatch: `fact` },
            { id: `l04-g2`, image: `l04-game-2.webp`, label: `The SILK ROAD connected China to Europe for 1,500 years — moving goods, ideas, and religions both ways.`,
              matchPhrase: `True! The Silk Road was a 4,000-mile trade network. Caravans of camels carried silk, tea, gold, spices, and ideas. East met West. Civilizations shared. Cultures grew.`,
              correctMatch: `fact` },
            { id: `l04-g3`, image: `l04-game-3.webp`, label: `Ancient China was TOTALLY ISOLATED — never traded or shared ideas with the rest of the world.`,
              matchPhrase: `Not at all! Ancient China traded constantly via the Silk Road for 1,500 years. Goods, ideas, religions, and inventions flowed both ways. Far from isolated — China was deeply connected.`,
              correctMatch: `myth` },
            { id: `l04-g4`, image: `l04-game-4.webp`, label: `Chinese inventions like paper and printing have ZERO impact on modern life — totally useless today.`,
              matchPhrase: `Definitely not! Chinese inventions are everywhere. Every book, every printer, every firework, every GPS — descended from Chinese inventions. Massively useful today.`,
              correctMatch: `myth` },
          ],
        },

        {
          id: `l04-quiz`,
          type: `quiz`,
          guideText: `Let's see what you remember, {name}.`,
          questions: [
            { id: `l04-q1`, format: `multiple-choice`,
              question: `What are the FOUR GREAT INVENTIONS of ancient China?`,
              options: [`Math, art, music, dance`, `PAPER, PRINTING, GUNPOWDER, COMPASS`, `Cars, planes, trains, boats`, `TV, radio, phone, computer`],
              correctIndex: 1,
              explanation: `The Four Great Inventions: paper, printing, gunpowder, and the compass. All from ancient China. All world-changing. All still used (in modern forms) today.` },
            { id: `l04-q2`, format: `multiple-choice`,
              question: `What was a DYNASTY in ancient China?`,
              options: [`A type of food`, `A RULING FAMILY where power passed from one generation to the next`, `A war`, `A dance`],
              correctIndex: 1,
              explanation: `A dynasty was a ruling family. When one emperor died, his son or grandson took over. China had many dynasties: Shang, Zhou, Qin, Han, Tang, Ming, and others.` },
            { id: `l04-q3`, format: `multiple-choice`,
              question: `What was the SILK ROAD?`,
              options: [`A real silk-paved road`, `A 4,000-MILE TRADE NETWORK connecting China to Europe for 1,500 years — caravans carrying goods and ideas`, `A type of dance`, `Just a story`],
              correctIndex: 1,
              explanation: `The Silk Road was a trade network. Not one road — many paths through deserts and mountains. Camel caravans carried silk, tea, gold, spices, and ideas between East and West for 1,500 years.` },
            { id: `l04-q4`, format: `true-false`,
              question: `The GREAT WALL of China is the LONGEST human-built structure on Earth — over 13,000 miles long.`,
              correctAnswer: true,
              explanation: `True! The Great Wall stretches over 13,000 miles. Built over 2,000+ years. Made to protect China from invaders. Now a wonder of the world that millions visit every year.` },
            { id: `l04-q5`, format: `fill-blank`,
              question: `An ancient Chinese teacher named ___ taught about wisdom, family, and being good. His ideas shaped Chinese culture for thousands of years.`,
              options: [`Confucius`, `Caesar`, `Socrates`, `Cleopatra`],
              correctIndex: 0,
              explanation: `Confucius! Like Socrates of Greece, he was a great philosopher. His teachings about wisdom, family, respect, and good citizenship shaped Chinese culture for over 2,500 years.` },
            { id: `l04-q6`, format: `multiple-choice`,
              question: `How do China's gifts AFFECT us TODAY?`,
              options: [`Not at all`, `Paper for books, printing for newspapers, GPS from the compass, fireworks from gunpowder — used by billions daily`, `Only in China`, `Just for ancient people`],
              correctIndex: 1,
              explanation: `China's gifts are everywhere today. Paper. Printing. Compass (now GPS). Gunpowder (now fireworks). Plus noodles, tea, silk, paper money. Billions of people use China's inventions every single day.` },
          ],
        },

        {
          id: `l04-realworld`,
          type: `real-world`,
          guideText: `Here's something to think about, {name}. If you ate NOODLES this week, you're eating something invented in ancient China. If you drank TEA, also Chinese. If you used a PHONE with GPS, it's based on the Chinese compass. If you read a BOOK, China invented paper and printing. If you watched FIREWORKS at a celebration, that's Chinese gunpowder. People sometimes think different cultures are completely separate. But really, every modern person owes huge debts to MANY ancient cultures. Egypt, Greece, Rome, China — and many others — all gave us pieces of how we live today. We're a mix of everyone's gifts. Every culture deserves respect for what it gave the world. Be curious about where things come from. The world is more connected than you think.`,
          familyAdventure: {
            title: `Chinese Gifts Hunt`,
            scenario: `Together, do a "CHINESE GIFTS HUNT." Find 8 things in your home that come from ancient China (in some form): paper (books, notebooks, money, tissues, packaging), printed books or magazines, anything with a magnet (compass principle), GPS (phone, car), fireworks pictures or memories, noodles in the pantry, tea, silk (in clothes, scarves, sheets). For each, talk about which ancient invention made it possible.`,
            talkingPoint: `Discover how connected modern life is to ancient China.`,
          },
          creativePrompt: {
            title: `Silk Road Caravan`,
            description: `Draw a "SILK ROAD CARAVAN" picture. A long line of camels crossing a desert. Each camel carries DIFFERENT cargo from CHINA — silk, tea, paper rolls, jars of spices, fireworks. The leader of the caravan is heading toward distant mountains where new lands wait. Maybe add a city or two along the way. Maybe a sandstorm or a desert night with stars. Imagine the long journey from China to Europe. Make it adventurous.`,
          },
        },

        {
          id: `l04-celebration`,
          type: `celebration`,
          message: `Wonderful journey, {name}! You've explored ANCIENT CHINA — one of the OLDEST continuous civilizations on Earth. Ruled by DYNASTIES — families of emperors. Gave the world the FOUR GREAT INVENTIONS: paper, printing, gunpowder, and the compass. Built the GREAT WALL — the longest human-built structure ever. Traded along the SILK ROAD for 1,500 years, connecting East and West. Their gifts are EVERYWHERE in modern life. You use them every day. Next time, we travel to the AMERICAS — to meet the Maya, Aztec, and Inca civilizations BEFORE Columbus arrived. — Lyra 🐘`,
          badge: `china-explorer`,
          badgeName: `Ancient China Explorer`,
          xpEarned: 50,
        },

      ],
    },
  ],
};

export default HW_L04;

// ─── Dev asset check ───
if (import.meta.env?.DEV) {
  const mags  = HW_L04.lessons[0].screens.filter(s => s.type === 'magazine').length;
  const game  = HW_L04.lessons[0].screens.find(s => s.type === 'interactive')?.items?.length ?? 0;
  const quiz  = HW_L04.lessons[0].screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  console.log(`[LESSON-HW-L04] Loaded: "Ancient China and the Silk Road" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
}
