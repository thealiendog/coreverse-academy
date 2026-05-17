// ─────────────────────────────────────────────────────────────────────────────
// History & World  |  L05 — The Maya, Aztec, and Inca: Americas Before Columbus
// Age band : explorers (6–8)   Guide: lyra
// ─────────────────────────────────────────────────────────────────────────────

const HW_L05 = {
  ageBand:   `explorers`,
  subjectId: `history`,
  guide:     `lyra`,

  lessons: [
    {
      id:        `hw-6-8-05`,
      title:     `The Maya, Aztec, and Inca: Americas Before Columbus`,
      duration:  12,
      xpReward:  50,
      badge:     `americas-explorer`,
      badgeName: `Americas Explorer`,

      screens: [

        {
          id: `l05-welcome`,
          type: `welcome`,
          guideText: `{name}, today I want to take you to a place you've already heard of — the AMERICAS. But long BEFORE Christopher Columbus arrived, the Americas were full of AMAZING civilizations. The MAYA, the AZTEC, and the INCA. They built cities. They studied stars. They created art that still amazes us today. Let's meet them.`,
          headline: `The Maya, Aztec, and Inca`,
          subtitle: `Three amazing civilizations that lived in the Americas long before Europeans arrived`,
          visual: `/explorer-assets/history/l05-welcome.webp`,
        },

        {
          id: `l05-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Civilizations of the Americas`,
          paragraphs: [
            `Long before Europeans came, the AMERICAS had amazing civilizations.`,
            `Three of the most famous were: the MAYA, the AZTEC, and the INCA. They built cities. They studied the stars. They made beautiful art. They were here LONG before Columbus or any other European arrived.`,
          ],
          image: `/explorer-assets/history/l05-s1-americas.webp`,
          imageCaption: `Long before Columbus, the Americas were full of brilliant civilizations. Their stories deserve to be told.`,
          vocab: [
            { word: `the Americas`, definition: `The big lands we call North America and South America today.`,
              audioPrompt: `The Americas are the BIG lands we call North America and South America today, {name}. From Canada all the way down to Argentina. For thousands of years, MILLIONS of people lived here — long before any Europeans arrived. They had their own languages, their own art, their own beautiful civilizations.` },
            { word: `civilization`, definition: `A big group of people living together with shared language, ideas, and ways of life.`,
              audioPrompt: `A civilization is a big group of people living together with shared language, ideas, and ways of life, {name}. The Maya, the Aztec, and the Inca were all civilizations. They had cities, kings, scientists, artists, and farmers. Just like the Greeks or the Egyptians. People sometimes forget how amazing the civilizations of the Americas were. I never forget.` },
            { word: `before`,       definition: `Earlier in time. The Maya, Aztec, and Inca lived in the Americas before Europeans came.`,
              audioPrompt: `Before means earlier in time, {name}. We say 'Mayan civilization came before Columbus' because the Mayan people were already living in the Americas BEFORE Columbus sailed across the sea. People in the Americas didn't need to be 'discovered' — they were already there, with their own homes, families, and history.` },
          ],
        },

        {
          id: `l05-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `The Maya: Star Watchers`,
          paragraphs: [
            `The MAYA people lived in what is now MEXICO and Central America.`,
            `They were AMAZING at math and stars. They built tall stone pyramids. They had a writing system using little pictures. And they invented the number ZERO — which we still use today!`,
          ],
          image: `/explorer-assets/history/l05-s2-maya.webp`,
          imageCaption: `Maya pyramids rose from the jungle. Maya astronomers watched the stars and tracked time with incredible precision.`,
          vocab: [
            { word: `Maya`,      definition: `A great civilization that lived in what's now Mexico and Central America. Known for math, stars, and writing.`,
              audioPrompt: `The Maya are one of the most famous civilizations of the Americas, {name}. They lived in what we now call Mexico, Guatemala, Belize, and a few other places. They were AMAZING. They built giant pyramids in the jungle. They watched the stars carefully. They wrote books. Many Maya people still live in the same region today.` },
            { word: `astronomy`, definition: `The study of stars, planets, and the sky. The Maya were experts at it.`,
              audioPrompt: `Astronomy is the study of the stars, planets, sun, and moon, {name}. The Maya were astronomy experts. They built special buildings just to watch the sky from. They could predict when the planet Venus would appear. They could predict eclipses YEARS in advance. Their astronomy was as good as anywhere else in the world at the time.` },
            { word: `zero`,      definition: `The number that means "none." The Maya were one of the first to invent it.`,
              audioPrompt: `Zero is the number that means 'nothing,' {name}. It sounds simple, but it took humans a long time to figure out. For most of history, people didn't have a symbol for zero. The Maya were one of the FIRST to invent it. Without zero, modern math wouldn't work. Computers wouldn't work. The Maya were smart in ways the world is still grateful for.` },
          ],
        },

        {
          id: `l05-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `The Aztec: City Builders`,
          paragraphs: [
            `The AZTEC lived in what's now central MEXICO.`,
            `Their capital city was called TENOCHTITLAN. It was built right in the MIDDLE of a LAKE — on a giant island! Over 200,000 people lived there — more than in most cities in Europe at the same time.`,
          ],
          image: `/explorer-assets/history/l05-s3-aztec.webp`,
          imageCaption: `Tenochtitlan — the great Aztec capital, built right in the middle of a lake. One of the biggest cities in the world at the time.`,
          vocab: [
            { word: `Aztec`,         definition: `A great civilization that lived in what's now central Mexico. Famous for building a city in the middle of a lake.`,
              audioPrompt: `The Aztec were a great civilization, {name} — they lived in what we now call central Mexico, about six hundred years ago. They built one of the BIGGEST cities in the world at that time. They had floating gardens, beautiful art, and one of the first FREE SCHOOLS for every kid. Yes — the Aztec believed every kid should go to school. That was new for the world.` },
            { word: `Tenochtitlan`,  definition: `The huge capital city of the Aztec, built in the middle of a lake.`,
              audioPrompt: `Tenochtitlan was the capital city of the Aztec, {name}. It was built right in the MIDDLE of a lake — on a big island. The Aztec connected the island to the mainland with long roads built over the water. The city had over two hundred thousand people. It was probably one of the biggest cities in the WHOLE WORLD at that time. Today, Mexico City sits right where Tenochtitlan once was.` },
            { word: `lake`,          definition: `A big body of fresh water surrounded by land. The Aztec built their city in one!`,
              audioPrompt: `A lake is a big body of fresh water with land all around it, {name}. Lakes can be very big or very small. The Aztec built their capital city in the MIDDLE of a lake. Can you imagine? Living in a city that's a big island, with streets that are actually canals filled with water? That's how Tenochtitlan was. Some people called it a 'Venice of the Americas.'` },
          ],
        },

        {
          id: `l05-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `The Inca: Mountain Builders`,
          paragraphs: [
            `The INCA lived in the MOUNTAINS of South America.`,
            `Their empire was HUGE — over 2,000 miles long! They built roads through mountains. They built MACHU PICCHU — a beautiful city HIGH on a mountaintop. And they had no written language, but they kept records using KNOTTED STRINGS called quipu.`,
          ],
          image: `/explorer-assets/history/l05-s4-inca.webp`,
          imageCaption: `Machu Picchu — an Inca city built high on a mountaintop. Stones fit together so well, you couldn't slip paper between them.`,
          vocab: [
            { word: `Inca`,         definition: `A great civilization that lived in the mountains of South America. Their empire was the largest in the Americas.`,
              audioPrompt: `The Inca were a great civilization, {name} — they lived in the western mountains of South America. Their empire stretched all the way through countries we now call Peru, Ecuador, Bolivia, Chile, and Argentina. They built ROADS through the mountains, BRIDGES across rivers, and farms on STEEP MOUNTAIN SIDES. They were master builders in some of the hardest places to live.` },
            { word: `mountain`,     definition: `A really tall piece of land that reaches high into the sky. The Inca lived in the highest mountains.`,
              audioPrompt: `A mountain is a really tall piece of land, {name} — taller than a hill, often with snow on top. The Inca lived high up in the ANDES MOUNTAINS of South America. Mountains can be hard places to live — the air is thin, the weather is cold, food is hard to grow. But the Inca figured out how to thrive there. Their roads, their farms, their cities — all built on mountains.` },
            { word: `Machu Picchu`, definition: `A beautiful Inca city built HIGH on a mountaintop. People still visit it today.`,
              audioPrompt: `Machu Picchu is one of the most beautiful places in the world, {name}. It's an Inca city built HIGH on a mountaintop — about 8,000 feet up in the air. The Inca built it from huge stones, fit together SO carefully that you can't even slide a piece of paper between them. No metal tools. No mortar. Just precision. People travel from all over the world to visit Machu Picchu today.` },
          ],
        },

        {
          id: `l05-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Their Amazing Achievements`,
          paragraphs: [
            `The Maya, Aztec, and Inca did things that AMAZE people today.`,
            `They built giant cities. They invented zero. They had calendars MORE accurate than the ones Europeans used. They grew food on mountainsides. They created beautiful gold art. Their civilizations were INCREDIBLE.`,
          ],
          image: `/explorer-assets/history/l05-s5-achievements.webp`,
          imageCaption: `Math, calendars, gold art, mountain farms, floating gardens. Three civilizations, each with their own gifts.`,
          vocab: [
            { word: `achievement`, definition: `Something great that you do that makes you proud. The Maya, Aztec, and Inca had MANY.`,
              audioPrompt: `An achievement is something great you do, {name} — something that takes work and skill. The Maya, Aztec, and Inca had AMAZING achievements. They built pyramids in the jungle. They built cities in lakes. They built roads through mountains. They invented math. They tracked the stars. Most people don't realize how much these civilizations achieved. I want you to remember.` },
            { word: `calendar`,    definition: `The way we organize days, weeks, and months into a year. They had VERY accurate ones.`,
              audioPrompt: `A calendar is how we organize time, {name}. The Maya had a SUPER accurate calendar — even better than the one Europeans were using at the same time. They knew the year had 365 days. They knew when the planets would appear. They had several calendars, one for daily life, one for religion. Their calendars are still studied today.` },
            { word: `gold`,        definition: `A shiny, valuable yellow metal. The Americas had lots of gold, and these civilizations made beautiful things with it.`,
              audioPrompt: `Gold is a shiny, yellow metal that doesn't rust or fade, {name}. It's been valuable to humans for thousands of years. The Americas had LOTS of gold. The Aztec and Inca made beautiful gold jewelry, masks, statues, and decorations. So much of it was so beautiful that we still talk about it today.` },
          ],
        },

        {
          id: `l05-mag-6`,
          type: `magazine`,
          section: 6,
          headline: `Remembering Them`,
          paragraphs: [
            `The Maya, Aztec, and Inca empires don't rule like they used to.`,
            `But their PEOPLE are still here. Millions of their grandchildren's grandchildren still live in Mexico, Peru, and Guatemala. They still speak Mayan and other ancient languages. Their civilizations changed — but they didn't disappear.`,
          ],
          image: `/explorer-assets/history/l05-s6-remembering.webp`,
          imageCaption: `The civilizations changed. But the people didn't disappear. Their grandchildren's grandchildren still live in those lands today.`,
          vocab: [
            { word: `ancestor`, definition: `Someone from your family who lived a long, long time ago, like a great-great-grandparent.`,
              audioPrompt: `An ancestor is someone in your family who lived a long, long time ago, {name} — like a great-great-great-grandparent. We all have ancestors. Some Maya people today have ancestors who built those pyramids. Some Inca descendants today have ancestors who built Machu Picchu. Our ancestors leave us much more than we realize.` },
            { word: `language`, definition: `The way people talk to each other.`,
              audioPrompt: `A language is the way people talk to each other, {name}. The Maya, Aztec, and Inca each had their own languages — and many of those languages are STILL SPOKEN today. Millions of people in Mexico, Guatemala, and Peru speak languages their ancestors spoke a thousand years ago. Languages can survive a very long time. I love that.` },
            { word: `remember`, definition: `To keep something in your mind. We should always remember the Maya, Aztec, and Inca.`,
              audioPrompt: `Remember means to keep something in your mind, {name}. The world should remember the Maya, the Aztec, and the Inca. Their stories are sometimes forgotten — but they shouldn't be. They built amazing civilizations. They invented things we still use. They made beautiful art. They deserve to be remembered. That's why I'm telling you about them today.` },
          ],
        },

        {
          id: `l05-game`,
          type: `interactive`,
          format: `drag-match`,
          guideText: `Let's see what you remember about these amazing civilizations, {name}. Match each one to where it belongs.`,
          buckets: [
            { id: `fact`, label: `✅ Yes, that's true!`, color: `#34D399` },
            { id: `myth`, label: `❌ No way!`,           color: `#F87171` },
          ],
          items: [
            { id: `l05-g1`, image: `l05-game-1.webp`, label: `The Inca built Machu Picchu high on a mountaintop.`,
              matchPhrase: `Yes! Machu Picchu sits high in the mountains of Peru. The Inca built it from huge stones with NO metal tools. People still visit it today.`,
              correctMatch: `fact` },
            { id: `l05-g2`, image: `l05-game-2.webp`, label: `The Maya were experts at watching the stars.`,
              matchPhrase: `True! The Maya could predict eclipses and planet movements YEARS in advance. They were some of the best astronomers in the ancient world.`,
              correctMatch: `fact` },
            { id: `l05-g3`, image: `l05-game-3.webp`, label: `The Aztec city of Tenochtitlan was built on the moon.`,
              matchPhrase: `Ha! Tenochtitlan was on Earth, {name} — built in the middle of a lake in what's now Mexico City. Not on the moon. The moon's a bit of a tough commute.`,
              correctMatch: `myth` },
            { id: `l05-g4`, image: `l05-game-4.webp`, label: `The Inca had Wi-Fi for their mountain villages.`,
              matchPhrase: `Definitely not! The Inca used knotted strings called quipu for keeping records. They used runners to deliver messages between towns. Fast! But no Wi-Fi.`,
              correctMatch: `myth` },
          ],
        },

        {
          id: `l05-quiz`,
          type: `quiz`,
          guideText: `Let's see how much you remember, {name}.`,
          questions: [
            { id: `l05-q1`, format: `multiple-choice`,
              question: `Where did the Maya civilization live?`,
              options: [`In Egypt`, `In China`, `In what is now Mexico and Central America`, `In Ancient Rome`],
              correctIndex: 2,
              explanation: `The Maya lived in what is now Mexico and Central America — places like Guatemala, Belize, and Honduras. They built giant pyramids in the jungle, watched the stars, and invented the number zero. Their descendants still live in those places today.` },
            { id: `l05-q2`, format: `multiple-choice`,
              question: `What is Tenochtitlan?`,
              options: [`A famous mountain`, `The huge Aztec capital, built in the middle of a lake`, `A type of food`, `A kind of animal`],
              correctIndex: 1,
              explanation: `Tenochtitlan was the Aztec capital — one of the biggest cities in the WHOLE WORLD at that time. It was built right in the middle of a lake, on a giant island. Today, Mexico City sits right where Tenochtitlan once was.` },
            { id: `l05-q3`, format: `multiple-choice`,
              question: `What is Machu Picchu?`,
              options: [`A Maya pyramid`, `An Inca city built high on a mountaintop`, `A famous painting`, `An Aztec king`],
              correctIndex: 1,
              explanation: `Machu Picchu is an Inca city built HIGH on a mountaintop in Peru — about 8,000 feet up. The stones fit together so perfectly that you can't even slide paper between them. No metal tools, no mortar. Just precision.` },
            { id: `l05-q4`, format: `true-false`,
              question: `The Maya, Aztec, and Inca had no big civilizations — they were just small groups of people.`,
              correctAnswer: false,
              explanation: `False! All three were HUGE civilizations. The Maya had advanced math and astronomy. The Aztec built one of the biggest cities in the world. The Inca had an empire over 2,000 miles long. They were sophisticated, brilliant, and worth knowing about.` },
            { id: `l05-q5`, format: `fill-blank`,
              question: `The Maya invented the number ___, which we still use today.`,
              options: [`zero`, `four`, `twenty`, `one hundred`],
              correctIndex: 0,
              explanation: `Zero! It seems like an obvious number, but humans took a LONG time to figure out how to write 'nothing' as a number. The Maya were one of the first to invent it. Without zero, modern math and computers wouldn't work.` },
            { id: `l05-q6`, format: `multiple-choice`,
              question: `Did the Maya, Aztec, and Inca people disappear?`,
              options: [`Yes, they're all gone now`, `No, their grandchildren's grandchildren still live in the same places today`, `They became birds`, `We don't know`],
              correctIndex: 1,
              explanation: `Their descendants are still here today! Millions of people in Mexico, Guatemala, Peru, and other countries trace their family back to the Maya, Aztec, or Inca. They still speak the languages. They still cook the foods. They didn't disappear.` },
          ],
        },

        {
          id: `l05-realworld`,
          type: `real-world`,
          guideText: `Today, many people whose ancestors were Maya, Aztec, or Inca still live in Mexico, Guatemala, Peru, Ecuador, Bolivia, and other countries in the Americas, {name}. They still speak ancient languages. They still cook traditional foods. They still make beautiful art. The civilizations changed — but the people didn't disappear. You can travel to Mexico and see Maya pyramids in the jungle. You can travel to Peru and see Machu Picchu high in the mountains.`,
          familyAdventure: `Look at a map of the Americas. Find Mexico (where Maya and Aztec lived), Peru (where Inca lived), and Guatemala (where many Maya people still live today). Now find where YOU live. Look up something that came from the Americas — like tomatoes, potatoes, chocolate, or popcorn. BEFORE Europeans came, these foods only grew in the Americas. The whole world's eating changed because of these civilizations.`,
          creativePrompt: `Be an Inca builder. Imagine you have to build a small wall using only stones — no glue, no nails, no metal tools. The Inca built walls so well, you couldn't slide a piece of paper between the stones. Try with small rocks or Legos: how tightly can you fit them together? Now imagine doing this with stones bigger than YOU, high on a mountain. That's what the Inca did.`,
        },

        {
          id: `l05-celebration`,
          type: `celebration`,
          message: `Wonderful, {name}! You now know about the Maya, the Aztec, and the Inca — three amazing civilizations that lived in the Americas long before Europeans arrived. They built giant cities, watched the stars, made beautiful art, and changed how we count. Their people are still here today, still proud of their ancestors. I carry their stories with me so they're not forgotten. Now you do too. Thank you for journeying with me.`,
          badge: `americas-explorer`,
          badgeName: `Americas Explorer`,
          xpEarned: 50,
        },

      ], // screens
    },
  ], // lessons
};

export default HW_L05;

// ─── Dev asset check ─────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const mags  = HW_L05.lessons[0].screens.filter(s => s.type === 'magazine').length;
  const game  = HW_L05.lessons[0].screens.find(s => s.type === 'interactive')?.items?.length ?? 0;
  const quiz  = HW_L05.lessons[0].screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  console.log(`[LESSON-HISTORY-L05] Loaded: "The Maya, Aztec, and Inca: Americas Before Columbus" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
}
