// ─────────────────────────────────────────────────────────────────────────────
// SOCIAL STUDIES  |  L07 — Continents and Oceans
// Age band : explorers (6–8)   Guide: atlas
// Standards: C3 Framework D2.Geo.2.K-2 (geographic representations)
// ─────────────────────────────────────────────────────────────────────────────

const SOCIAL_STUDIES_L07 = {
  ageBand:   `explorers`,
  subjectId: `social_studies`,
  guide:     `atlas`,

  lessons: [
    {
      id:        `social-studies-6-8-07`,
      title:     `Continents and Oceans`,
      duration:  12,
      xpReward:  50,
      badge:     `continents-oceans-explorer`,
      badgeName: `Continents and Oceans Explorer`,

      screens: [

        {
          id: `l07-welcome`,
          type: `welcome`,
          guideText: `Hello again, {name}. Atlas here. Last lesson, you learned about maps and globes. Today, let's look at what's ON those maps. Earth has SEVEN giant pieces of land — called CONTINENTS. And FIVE huge bodies of water — called OCEANS. Knowing them is like knowing the names of all your cousins. Let's meet them.`,
          headline: `Continents and Oceans`,
          subtitle: `The 7 big pieces of land and 5 big bodies of water that make up Earth`,
          visual: `/explorer-assets/social-studies/l07-welcome.webp`,
        },

        {
          id: `l07-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Earth's BIG Pieces`,
          paragraphs: [
            `Look at a globe or a world map. You'll see two main things — BIG PIECES OF LAND and BIG BODIES OF WATER.`,
            `The big pieces of land are called CONTINENTS. Earth has SEVEN of them. The big bodies of water are called OCEANS. Earth has FIVE of them. Together, continents and oceans cover the WHOLE EARTH. Continents are where almost all people live. Oceans are where almost all of Earth's water is. Knowing the continents and oceans helps you understand WHERE everything is in the world. Let's meet them one by one.`,
          ],
          image: `/explorer-assets/social-studies/l07-s1-big-pieces.webp`,
          imageCaption: `7 continents + 5 oceans = the whole Earth. Big pieces of land and big bodies of water.`,
          vocab: [
            { word: `continent`,      definition: `A BIG piece of LAND on Earth. There are 7 CONTINENTS.`,
              audioPrompt: `A continent, {name}, is a big piece of land on Earth. There are seven continents. North America, South America, Europe, Africa, Asia, Australia, and Antarctica. Continents are where almost all humans live. They're so big that one continent might have many countries inside it. Asia, for example, has over 40 countries.` },
            { word: `ocean`,          definition: `A BIG body of SALT water on Earth. There are 5 OCEANS.`,
              audioPrompt: `An ocean, {name}, is a big body of salt water on Earth. There are five oceans. Pacific, Atlantic, Indian, Arctic, and Southern. Oceans cover most of Earth — more than continents do. They contain almost all of Earth's water. They're home to dolphins, whales, fish, and so much more. They're also connected to each other — one big world ocean.` },
            { word: `Earth`,          definition: `Our PLANET. EARTH has 7 continents and 5 oceans.`,
              audioPrompt: `Earth, {name}, is our planet. The third planet from the sun. Earth has 7 continents and 5 oceans. It's the only planet we know of with life. From space, Earth looks blue because of all the water. The continents look like brown and green pieces between the blue oceans. Earth is our home.` },
          ],
        },

        {
          id: `l07-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `NORTH and SOUTH America`,
          paragraphs: [
            `Two continents are right here in the Western part of the world — NORTH AMERICA and SOUTH AMERICA.`,
            `NORTH AMERICA is where the USA is. It also has Canada (to the north) and Mexico (to the south), plus countries in Central America and the Caribbean. North America has tall mountains, huge forests, big cities, and the Great Lakes. SOUTH AMERICA is the continent below — home to Brazil, Argentina, Colombia, Peru, and more. It has the AMAZON RAINFOREST (the biggest rainforest on Earth) and the ANDES MOUNTAINS (a huge mountain chain). Both Americas have amazing nature and lots of different cultures.`,
          ],
          image: `/explorer-assets/social-studies/l07-s2-north-south-america.webp`,
          imageCaption: `North America (USA, Canada, Mexico) + South America (Brazil, Argentina, Peru). Western Hemisphere.`,
          vocab: [
            { word: `North America`,  definition: `The CONTINENT with the USA, Canada, Mexico, and Central America.`,
              audioPrompt: `North America, {name}, is the continent with the USA, Canada, Mexico, and Central America. It's the continent you probably live on. It has tall Rocky Mountains, huge prairies, big Great Lakes, and forests, deserts, and beaches. North America is home to about 580 million people. Lots of cultures, languages, and beautiful nature here.` },
            { word: `South America`,  definition: `The CONTINENT south of North America. Home to BRAZIL, ARGENTINA, PERU, and more.`,
              audioPrompt: `South America, {name}, is the continent south of North America. Home to Brazil, Argentina, Peru, Colombia, Chile, and more. It has the Amazon Rainforest — the biggest rainforest on Earth. It has the Andes Mountains running down its western side. South America has incredible animals — jaguars, sloths, capybaras, condors. Spanish and Portuguese are the main languages.` },
            { word: `rainforest`,     definition: `A wet forest full of LIFE. The AMAZON is the biggest rainforest, in South America.`,
              audioPrompt: `A rainforest, {name}, is a wet forest full of life. Rainforests get tons of rain — many inches every week. They have more plant and animal species than any other place on Earth. The Amazon Rainforest in South America is the biggest. It's like Earth's lungs — making oxygen for all of us. Protecting rainforests protects life everywhere.` },
          ],
        },

        {
          id: `l07-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `EUROPE and AFRICA`,
          paragraphs: [
            `Across the Atlantic Ocean, two more continents — EUROPE and AFRICA.`,
            `EUROPE is small but important. It has countries like France, Germany, Italy, Spain, the UK, Greece, and many more. Europe has CASTLES, ANCIENT CITIES, and is the birthplace of many ideas in science, art, and democracy. AFRICA is huge — the SECOND BIGGEST continent. It has 54 countries. The SAHARA DESERT (biggest hot desert on Earth) is in Africa. So are amazing animals — lions, elephants, giraffes, zebras, gorillas. Africa is where the FIRST humans lived MILLIONS of years ago. Every person on Earth has ancestors from Africa.`,
          ],
          image: `/explorer-assets/social-studies/l07-s3-europe-africa.webp`,
          imageCaption: `Europe (France, Germany, UK) + Africa (54 countries, Sahara Desert, amazing wildlife). Eastern Hemisphere.`,
          vocab: [
            { word: `Europe`,         definition: `The CONTINENT with France, Germany, Italy, Spain, UK, and many more countries.`,
              audioPrompt: `Europe, {name}, is the continent with France, Germany, Italy, Spain, the UK, and many more countries. It's small compared to other continents, but very important to history. Many big ideas in science, art, and democracy started in Europe. Famous cities like Paris, London, Rome, and Athens are there. Many different languages are spoken.` },
            { word: `Africa`,         definition: `The SECOND BIGGEST continent. Has 54 countries. Where humans FIRST lived.`,
              audioPrompt: `Africa, {name}, is the second biggest continent. It has 54 countries — more than any other continent. The Sahara Desert is in Africa. The Nile River — one of the longest rivers in the world — is in Africa. Africa is home to lions, elephants, giraffes, and amazing wildlife. And it's the birthplace of humans — all people today have ancestors from Africa.` },
            { word: `desert`,         definition: `A very DRY place with little rain. The SAHARA is the biggest hot DESERT.`,
              audioPrompt: `A desert, {name}, is a very dry place with little rain. The Sahara Desert in Africa is the biggest hot desert. It's mostly sand and rock. Some animals live there — camels, lizards, scorpions — but few plants. Other famous deserts include the Gobi in Asia and the Mojave in North America. Deserts are some of Earth's harshest places.` },
          ],
        },

        {
          id: `l07-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `ASIA: The BIGGEST Continent`,
          paragraphs: [
            `Now meet the BIGGEST continent of all — ASIA.`,
            `Asia is HUGE. It stretches from the Middle East all the way to Japan. It has the MOST PEOPLE — over 4.6 BILLION people live in Asia. That's more than half of all humans on Earth. Famous countries in Asia — China, India, Japan, Korea, Vietnam, Thailand, Indonesia, the Philippines, and many more. Asia has MOUNT EVEREST (the tallest mountain on Earth). It has the GREAT WALL OF CHINA. It has the most languages spoken of any continent — over 2,000! Asia is incredibly diverse. There's no one "Asian" thing. Each country has its own beautiful culture.`,
          ],
          image: `/explorer-assets/social-studies/l07-s4-asia.webp`,
          imageCaption: `Asia: the BIGGEST continent. Over 4.6 BILLION people. China, India, Japan, Korea, Vietnam, and more.`,
          vocab: [
            { word: `Asia`,           definition: `The BIGGEST continent. Has the MOST PEOPLE — over 4.6 billion. China, India, Japan, more.`,
              audioPrompt: `Asia, {name}, is the biggest continent. It has the most people — over 4.6 billion. That's more than half of all humans on Earth. Famous countries include China, India, Japan, Korea, Vietnam, Thailand, Indonesia, and many more. Asia has Mount Everest, the Great Wall of China, and the most languages of any continent.` },
            { word: `Mount Everest`,  definition: `The TALLEST mountain on Earth. MOUNT EVEREST is in Asia.`,
              audioPrompt: `Mount Everest, {name}, is the tallest mountain on Earth. It's about 29,000 feet high — that's higher than airplanes usually fly! Mount Everest is in the Himalayan Mountains, between Nepal and Tibet, in Asia. Some people climb it as a huge challenge. Many have died trying. It's also home to the SHERPA people who live in the high mountains.` },
            { word: `diverse`,        definition: `Having LOTS of different KINDS. Asia is super DIVERSE — many languages and cultures.`,
              audioPrompt: `Diverse, {name}, means having lots of different kinds. Asia is super diverse. Over 2,000 languages are spoken there. People practice many religions — Buddhism, Hinduism, Islam, Christianity, and more. The food is amazing and different in every country. Asia shows how rich human cultures can be — and that there's no one "Asian" thing. Every country has its own beautiful culture.` },
          ],
        },

        {
          id: `l07-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `AUSTRALIA and ANTARCTICA`,
          paragraphs: [
            `The last two continents are special — one is a whole CONTINENT THAT'S AN ISLAND, and one is FROZEN.`,
            `AUSTRALIA is the smallest continent — and it's all one country (also called Australia)! It's surrounded by ocean. It has UNIQUE animals found nowhere else — kangaroos, koalas, platypuses, wombats, and Tasmanian devils. The GREAT BARRIER REEF (the biggest coral reef on Earth) is off Australia's coast. ANTARCTICA is at the bottom of the Earth. It's FREEZING — the coldest place on the planet. It's covered in THICK ICE. Almost no one lives there permanently — just scientists studying the ice and weather. PENGUINS, seals, and whales live there. It's the only continent without countries.`,
          ],
          image: `/explorer-assets/social-studies/l07-s5-australia-antarctica.webp`,
          imageCaption: `Australia: smallest, all one country, kangaroos + koalas. Antarctica: frozen, no countries, penguins.`,
          vocab: [
            { word: `Australia`,      definition: `The SMALLEST continent. Also a country. Has KANGAROOS, koalas, and the GREAT BARRIER REEF.`,
              audioPrompt: `Australia, {name}, is the smallest continent. It's unique because it's also just one country — also called Australia. It's surrounded by ocean — like one giant island. It has unique animals found nowhere else: kangaroos, koalas, platypuses, wombats, Tasmanian devils. The Great Barrier Reef — the biggest coral reef on Earth — is off Australia's coast.` },
            { word: `Antarctica`,     definition: `The FROZEN continent at the bottom of Earth. Covered in ICE. No COUNTRIES.`,
              audioPrompt: `Antarctica, {name}, is the frozen continent at the bottom of Earth. It's the coldest place on the planet — way below freezing all year. It's covered in thick ice. Almost no one lives there permanently — just scientists from many countries who go there to study. Penguins, seals, and whales live in the cold waters. It has no countries — just research stations.` },
            { word: `unique`,         definition: `ONE OF A KIND. Australia has UNIQUE animals nowhere else on Earth.`,
              audioPrompt: `Unique, {name}, means one of a kind. Australia has unique animals nowhere else on Earth. Because Australia broke off from other continents millions of years ago, its animals evolved on their own. They became one-of-a-kind — kangaroos, koalas, platypuses, wombats. You can only find these animals naturally in Australia. That's what makes the continent so special.` },
          ],
        },

        {
          id: `l07-mag-6`,
          type: `magazine`,
          section: 6,
          headline: `The FIVE OCEANS`,
          paragraphs: [
            `Now for the WATER. Earth has FIVE OCEANS — all CONNECTED to each other.`,
            `1) The PACIFIC OCEAN is the BIGGEST — between the Americas and Asia. It's so huge it covers about a third of Earth! 2) The ATLANTIC OCEAN is between the Americas and Europe/Africa. 3) The INDIAN OCEAN is south of Asia and east of Africa. 4) The ARCTIC OCEAN is at the top of Earth, near the North Pole. It's mostly frozen. 5) The SOUTHERN OCEAN surrounds Antarctica at the bottom. All five oceans are connected — they're really one big WORLD OCEAN with different names for different parts. Together they contain almost ALL the water on Earth.`,
          ],
          image: `/explorer-assets/social-studies/l07-s6-five-oceans.webp`,
          imageCaption: `5 oceans: Pacific (biggest), Atlantic, Indian, Arctic (frozen north), Southern (around Antarctica). All connected.`,
          vocab: [
            { word: `Pacific Ocean`,  definition: `The BIGGEST ocean — between the Americas and Asia. Covers a THIRD of Earth.`,
              audioPrompt: `The Pacific Ocean, {name}, is the biggest ocean. It's between the Americas and Asia. It's so huge it covers about a third of Earth! That's bigger than all the land combined. The Pacific has thousands of islands — Hawaii, Fiji, Tahiti, Japan, Philippines. The deepest spot on Earth — the Mariana Trench — is in the Pacific.` },
            { word: `Atlantic Ocean`, definition: `The OCEAN between the Americas and Europe/Africa. Second biggest.`,
              audioPrompt: `The Atlantic Ocean, {name}, is the ocean between the Americas and Europe/Africa. It's the second biggest ocean. Explorers like Columbus crossed the Atlantic. Lots of shipping happens here. Famous islands include the Caribbean, Bermuda, and Iceland. The Atlantic is also home to many fish and marine creatures.` },
            { word: `connected`,      definition: `LINKED together. All FIVE oceans are CONNECTED — really one big world ocean.`,
              audioPrompt: `Connected, {name}, means linked together. All five oceans are connected. They're really one big world ocean with different names for different parts. Water flows between them. A fish could swim from the Pacific to the Atlantic — around continents. Ocean currents move warm water and cold water around the world, affecting weather everywhere.` },
          ],
        },

        {
          id: `l07-game`,
          type: `interactive`,
          format: `drag-match`,
          guideText: `Let's see what you remember, {name}.`,
          buckets: [
            { id: `fact`, label: `✅ Yes, that's true!`, color: `#34D399` },
            { id: `myth`, label: `❌ No way!`,         color: `#F87171` },
          ],
          items: [
            { id: `l07-g1`, image: `l07-game-1.webp`, label: `Earth has SEVEN continents — North America, South America, Europe, Africa, Asia, Australia, Antarctica.`,
              matchPhrase: `Yes! Seven continents: North America, South America, Europe, Africa, Asia, Australia, Antarctica. Each one is a different big piece of land on Earth.`,
              correctMatch: `fact` },
            { id: `l07-g2`, image: `l07-game-2.webp`, label: `All FIVE OCEANS are actually CONNECTED — really one big world ocean.`,
              matchPhrase: `True! Pacific, Atlantic, Indian, Arctic, Southern — all connected. Water flows between them. They're like one giant ocean with different names for different parts.`,
              correctMatch: `fact` },
            { id: `l07-g3`, image: `l07-game-3.webp`, label: `Earth only has TWO continents total — that's it, no more.`,
              matchPhrase: `Not at all! Earth has SEVEN continents. North America, South America, Europe, Africa, Asia, Australia, Antarctica. Each one is huge and unique.`,
              correctMatch: `myth` },
            { id: `l07-g4`, image: `l07-game-4.webp`, label: `ANTARCTICA is a TROPICAL PARADISE — warm, beachy, sunny year-round.`,
              matchPhrase: `Definitely not! Antarctica is the COLDEST place on Earth. Covered in thick ice. Way below freezing. Penguins live there, but nobody calls it a beach vacation spot!`,
              correctMatch: `myth` },
          ],
        },

        {
          id: `l07-quiz`,
          type: `quiz`,
          guideText: `Let's see what you remember, {name}.`,
          questions: [
            { id: `l07-q1`, format: `multiple-choice`,
              question: `How many CONTINENTS does Earth have?`,
              options: [`Three`, `SEVEN`, `Twelve`, `Two`],
              correctIndex: 1,
              explanation: `Seven! North America, South America, Europe, Africa, Asia, Australia, and Antarctica. Each one is a big piece of land on Earth.` },
            { id: `l07-q2`, format: `multiple-choice`,
              question: `Which is the BIGGEST continent?`,
              options: [`North America`, `ASIA — biggest, with the most people too`, `Europe`, `Australia`],
              correctIndex: 1,
              explanation: `Asia is the biggest. It's HUGE — and has over 4.6 billion people, more than any other continent. China, India, Japan, and many other countries are in Asia.` },
            { id: `l07-q3`, format: `multiple-choice`,
              question: `How many OCEANS does Earth have?`,
              options: [`One`, `FIVE — Pacific, Atlantic, Indian, Arctic, Southern`, `Twenty`, `Three`],
              correctIndex: 1,
              explanation: `Five oceans! Pacific (biggest), Atlantic, Indian, Arctic (frozen, at the top), and Southern (around Antarctica). All connected — one big world ocean.` },
            { id: `l07-q4`, format: `true-false`,
              question: `AFRICA has 54 countries — more than any other continent — and is where the first humans lived.`,
              correctAnswer: true,
              explanation: `True! Africa has 54 countries — more than any other continent. It's also where humans first lived millions of years ago. Every person on Earth has ancestors from Africa.` },
            { id: `l07-q5`, format: `fill-blank`,
              question: `___ is the smallest continent — and it's also one country with kangaroos and koalas.`,
              options: [`Australia`, `Aardvark`, `Apple`, `Asia`],
              correctIndex: 0,
              explanation: `Australia! Smallest continent. Also one country. Home to unique animals like kangaroos, koalas, platypuses. And the Great Barrier Reef.` },
            { id: `l07-q6`, format: `multiple-choice`,
              question: `Which is the BIGGEST OCEAN — covering about a third of Earth?`,
              options: [`Indian Ocean`, `PACIFIC OCEAN — between the Americas and Asia`, `Arctic Ocean`, `Atlantic Ocean`],
              correctIndex: 1,
              explanation: `Pacific Ocean! Biggest of all. Between the Americas and Asia. Covers about a third of Earth — bigger than all land combined. Hawaii, Japan, and Philippines are all in the Pacific.` },
          ],
        },

        {
          id: `l07-realworld`,
          type: `real-world`,
          guideText: `Here's something amazing, {name}. Long ago — like 200 million years ago — all the continents were JOINED TOGETHER as ONE GIANT continent called PANGAEA. Then over millions of years, they slowly drifted apart. That's why if you look at South America and Africa on a map, they look like puzzle pieces that fit together. Scientists call this CONTINENTAL DRIFT — the continents are STILL moving today, just incredibly slowly (about as fast as your fingernails grow). In another 200 million years, the map of Earth will look completely different.`,
          familyAdventure: `Together, name the CONTINENT and OCEAN your family has visited or wants to visit. Find a globe or world map. Point to each one. For each, talk about — what continent is it on? What ocean is closest? Any cool facts you remember? Where would you go next if you could? Geography starts feeling REAL when you connect it to your own life.`,
          creativePrompt: `Pick your FAVORITE continent (the one you live on or one you'd love to visit). Draw it from memory — don't peek at a map! Just try. Then look at a real map. Compare yours to the real one. Don't worry about being perfect — even mapmakers spent YEARS getting it right. Drawing helps you remember shapes. Each continent has its own special shape.`,
        },

        {
          id: `l07-celebration`,
          type: `celebration`,
          message: `Wonderful, {name}. You now know Earth's BIG PIECES. SEVEN continents — North America, South America, Europe, Africa, Asia, Australia, Antarctica. FIVE oceans — Pacific, Atlantic, Indian, Arctic, Southern. You know that ASIA is biggest, AUSTRALIA is smallest, ANTARCTICA is frozen, and the OCEANS are all connected. You can find your way around the whole globe now. — Atlas 🐻`,
          badge: `continents-oceans-explorer`,
          badgeName: `Continents and Oceans Explorer`,
          xpEarned: 50,
        },

      ],
    },
  ],
};

export default SOCIAL_STUDIES_L07;

// ─── Dev asset check ─────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const mags  = SOCIAL_STUDIES_L07.lessons[0].screens.filter(s => s.type === 'magazine').length;
  const game  = SOCIAL_STUDIES_L07.lessons[0].screens.find(s => s.type === 'interactive')?.items?.length ?? 0;
  const quiz  = SOCIAL_STUDIES_L07.lessons[0].screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  console.log(`[LESSON-SOCIAL-STUDIES-L07] Loaded: "Continents and Oceans" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
}
