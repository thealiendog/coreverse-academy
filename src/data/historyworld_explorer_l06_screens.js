// ─────────────────────────────────────────────────────────────────────────────
// History & World  |  L06 — The Middle Ages: Knights and Castles
// Age band : explorers (6–8)   Guide: lyra
// ─────────────────────────────────────────────────────────────────────────────

const HW_L06 = {
  ageBand:   `explorers`,
  subjectId: `history`,
  guide:     `lyra`,

  lessons: [
    {
      id:        `hw-6-8-06`,
      title:     `The Middle Ages: Knights and Castles`,
      duration:  12,
      xpReward:  50,
      badge:     `medieval-explorer`,
      badgeName: `Medieval Explorer`,

      screens: [

        {
          id: `l06-welcome`,
          type: `welcome`,
          guideText: `{name}, today I want to take you to a time of KNIGHTS in shining armor. CASTLES with drawbridges. Kings and queens in grand halls. Stories of DRAGONS and brave heroes. We call this time the MIDDLE AGES — and it lasted for almost a THOUSAND YEARS. Let's step into it together.`,
          headline: `The Middle Ages: Knights and Castles`,
          subtitle: `A long time of castles, knights, kings, and queens — almost a thousand years of history`,
          visual: `/explorer-assets/history/l06-welcome.webp`,
        },

        {
          id: `l06-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `What Were the Middle Ages?`,
          paragraphs: [
            `The MIDDLE AGES was a very long time in Europe — almost ONE THOUSAND years.`,
            `It came AFTER the Roman Empire ended and BEFORE the modern world began. That's why it's called the MIDDLE — it sits in the middle of history. People built castles, fought as knights, and lived in small villages.`,
          ],
          image: `/explorer-assets/history/l06-s1-middle-ages.webp`,
          imageCaption: `The Middle Ages — a thousand years between ancient Rome and the modern world. Knights, castles, and adventures.`,
          vocab: [
            { word: `middle`,    definition: `In between two other things. The Middle Ages came between ancient times and modern times.`,
              audioPrompt: `Middle means in between two things, {name}. The Middle Ages got its name because it came in the MIDDLE — after ancient times like Greece and Rome, and BEFORE modern times when we got cars and computers. It's the long stretch in between. Almost a thousand years of history happened in the middle.` },
            { word: `Europe`,    definition: `One of the seven continents. The Middle Ages happened mostly in Europe.`,
              audioPrompt: `Europe is one of the seven continents, {name}. Countries like England, France, Germany, Italy, and Spain are all in Europe. The Middle Ages happened mostly in Europe — though amazing things were happening in many other places too. I'll tell you about those later.` },
            { word: `thousand`,  definition: `A really big number — ten hundreds. The Middle Ages lasted almost a thousand years.`,
              audioPrompt: `A thousand is a really big number, {name} — it's ten hundreds. If you tried to count to a thousand, it would take you about fifteen minutes. The Middle Ages lasted ALMOST a thousand years. That's a really long time. So long, that the world changed a LOT during it.` },
          ],
        },

        {
          id: `l06-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Knights in Shining Armor`,
          paragraphs: [
            `In the Middle Ages, special warriors called KNIGHTS protected kings and queens.`,
            `Knights wore ARMOR made of metal that shined in the sun. They rode HORSES into battle. They followed rules of bravery, honesty, and kindness called CHIVALRY. Becoming a knight took YEARS of training.`,
          ],
          image: `/explorer-assets/history/l06-s2-knights.webp`,
          imageCaption: `Knights! Trained for years, armored in shining metal, riding horses. Real heroes of the medieval world.`,
          vocab: [
            { word: `knight`,    definition: `A special medieval warrior who rode horses, wore armor, and protected kings and queens.`,
              audioPrompt: `A knight was a special medieval warrior, {name}. To become a knight, a boy started training when he was very young — sometimes as young as seven. He'd learn to ride horses, fight with swords, and follow special rules. After many years of training, the king would tap him on the shoulder with a sword and say, 'Arise, Sir Knight!' It was a big honor.` },
            { word: `armor`,     definition: `Strong metal clothes worn for protection in battle. Knights wore armor.`,
              audioPrompt: `Armor is metal clothing worn for protection, {name}. Knights wore heavy armor — sometimes 60 pounds of it! That's like wearing a small kid on your back all day. The armor protected them from swords and arrows. Real armor was beautiful too — polished metal that gleamed in the sun. That's why people say 'knight in shining armor.'` },
            { word: `chivalry`,  definition: `The special rules knights tried to follow — being brave, honest, kind, and protecting people.`,
              audioPrompt: `Chivalry is the special set of rules knights tried to follow, {name}. Be brave. Be honest. Protect people who can't protect themselves. Be kind to strangers. Stand up for what's right. Not every knight was perfect at this, of course. But the IDEAL of chivalry is still around today. When we say someone is 'chivalrous,' we mean they're kind and noble — like a knight is supposed to be.` },
          ],
        },

        {
          id: `l06-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Castles: Homes Made for Defense`,
          paragraphs: [
            `Castles were special buildings made of STONE.`,
            `They had THICK WALLS, tall TOWERS, and DRAWBRIDGES over MOATS — deep ditches filled with water. Inside lived kings, queens, knights, and lots of helpers. Castles were homes — but they were also built to keep people SAFE.`,
          ],
          image: `/explorer-assets/history/l06-s3-castles.webp`,
          imageCaption: `Castles weren't just fancy houses. Thick stone walls, deep moats, drawbridges. Built to be SAFE.`,
          vocab: [
            { word: `castle`,     definition: `A big stone building with tall walls and towers. Where kings, queens, and knights lived.`,
              audioPrompt: `A castle is a big building made of stone, {name}. Castles had thick walls, tall towers, and were built on hills so people could see enemies coming from far away. Inside, castles had big rooms, kitchens, gardens, even chapels. Some castles had HUNDREDS of rooms. Many medieval castles are still standing today — you can visit them.` },
            { word: `tower`,      definition: `A tall, narrow part of a building. Castles had many towers — for watching and for defense.`,
              audioPrompt: `A tower is a tall, narrow building or part of a building, {name}. Castles had towers because they helped in two ways. From the top, you could see far away — including enemies coming. And tall walls were harder for enemies to climb. The tallest tower in a castle was called the KEEP — that was the strongest, safest part.` },
            { word: `drawbridge`, definition: `A bridge that can be raised or lowered. Drawbridges crossed moats and could be pulled up.`,
              audioPrompt: `A drawbridge is a bridge that can be pulled UP and DOWN, {name}. Castles had drawbridges over their moats — those deep ditches filled with water around the castle. When the bridge was down, friends could walk in. When enemies came, workers pulled chains and the bridge went UP. No bridge, no way to get in. Pretty clever.` },
          ],
        },

        {
          id: `l06-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Life in a Medieval Village`,
          paragraphs: [
            `Most people in the Middle Ages weren't kings or knights. They were FARMERS.`,
            `They lived in small villages with thatched-roof cottages. They grew wheat, raised animals, and helped each other through good times and hard times. Life was harder than it is today — no electricity, no doctors like we have now. But families helped each other.`,
          ],
          image: `/explorer-assets/history/l06-s4-daily-life.webp`,
          imageCaption: `Most medieval people were farmers — growing food, raising animals, living in small villages where everyone knew everyone.`,
          vocab: [
            { word: `farmer`,    definition: `A person who grows food. Most medieval people were farmers.`,
              audioPrompt: `A farmer is a person who grows food, {name} — wheat, vegetables, fruit. Or who raises animals like cows, sheep, and chickens. Most people in the Middle Ages were farmers. They had to grow enough food to feed their families AND give some to the king or lord who owned the land. Hard work, but their food fed the whole world.` },
            { word: `village`,   definition: `A small place where people live together, usually with their own farms and shops.`,
              audioPrompt: `A village is a small place where people live together, {name} — smaller than a city. Medieval villages had cottages where families lived, fields where they grew food, a church, a blacksmith, maybe a baker. Everyone knew everyone. Life moved more slowly than it does in cities today. There was no electricity, no internet — just people, animals, and the seasons.` },
            { word: `cottage`,   definition: `A small, simple house. Medieval villagers lived in cottages with thatched (straw) roofs.`,
              audioPrompt: `A cottage is a small, simple house, {name}. Medieval cottages had walls made of wood and clay, with roofs made of THATCH — bundles of straw or reeds. They were warm in winter, cool in summer. The whole family slept in one room, with the animals in the next room. Pretty different from houses today!` },
          ],
        },

        {
          id: `l06-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `The Wider Medieval World`,
          paragraphs: [
            `While knights and castles were happening in Europe, AMAZING things were happening in other places too.`,
            `In the Middle East, scholars in Baghdad and Cairo studied math, medicine, and stars. They invented ALGEBRA. They saved Greek and Roman books from being lost forever. Even the numbers WE use today — 1, 2, 3 — came from this part of the world.`,
          ],
          image: `/explorer-assets/history/l06-s5-islamic-golden-age.webp`,
          imageCaption: `Beyond Europe, the Middle East had a Golden Age. Scholars studied math, medicine, and stars. They gave us the numbers we still use.`,
          vocab: [
            { word: `scholar`,  definition: `A person who studies a lot and learns deeply about something. Medieval scholars studied math, science, and books.`,
              audioPrompt: `A scholar is a person who studies and learns a lot, {name}. Scholars love books, ideas, and figuring things out. While Europe had its Middle Ages, scholars in the Middle East were doing AMAZING work. They studied stars and figured out how planets moved. They studied medicine and figured out how to help sick people. They saved books that might have been lost forever otherwise.` },
            { word: `algebra`,  definition: `A type of math that uses letters and numbers together. Invented in the Middle East during the Middle Ages.`,
              audioPrompt: `Algebra is a type of math, {name} — the kind where you use letters like 'x' and 'y' along with numbers. It was invented in the Middle East about a thousand years ago. The word 'algebra' actually comes from Arabic. Every kid who learns algebra today is using something invented during the Middle Ages.` },
            { word: `numerals`, definition: `The symbols we use for numbers, like 1, 2, 3. We use ARABIC numerals — they came from the Middle East.`,
              audioPrompt: `Numerals are the symbols we use to write numbers, {name}. The numbers WE use — 1, 2, 3, 4, 5 — are called ARABIC NUMERALS because they came from the Arab world. Before that, Europeans used Roman numerals — I, II, III, IV. Try doing math with Roman numerals! It's REALLY hard. The numbers we use today are much easier — thanks to the Middle Ages.` },
          ],
        },

        {
          id: `l06-mag-6`,
          type: `magazine`,
          section: 6,
          headline: `What the Middle Ages Gave Us`,
          paragraphs: [
            `The Middle Ages gave us lots of things we still have today.`,
            `Beautiful CASTLES we can visit. The first UNIVERSITIES — schools where you can learn anything you want. The NUMBERS we use in math. Stories of KNIGHTS, kings, and dragons that we still tell in books and movies. The Middle Ages weren't dark or boring. They were FULL of life.`,
          ],
          image: `/explorer-assets/history/l06-s6-medieval-legacy.webp`,
          imageCaption: `Universities. Castles. Our numbers. Tales of knights. The Middle Ages left more for us than people often realize.`,
          vocab: [
            { word: `university`, definition: `A big school where grown-ups go to learn. The first universities started in the Middle Ages.`,
              audioPrompt: `A university is a big school where grown-ups go to learn, {name}. The FIRST universities were started in the Middle Ages — places like Bologna in Italy and Oxford in England. They've been teaching students for almost a thousand years! Many universities today still exist from the Middle Ages. Pretty amazing.` },
            { word: `story`,      definition: `A tale told to share something — facts, ideas, or feelings. Medieval stories of knights are still told today.`,
              audioPrompt: `A story is a tale we tell, {name}. The Middle Ages gave us SO MANY great stories. King Arthur and his Knights of the Round Table. Robin Hood. Tales of dragons and quests and brave heroes. Even movies and books today use these old medieval stories. Good stories can last for thousands of years.` },
            { word: `legacy`,     definition: `The good things you leave behind for the future. The Middle Ages left us a great legacy.`,
              audioPrompt: `Legacy is what we leave behind for the future, {name}. The Middle Ages might seem far away — but their legacy is everywhere. The numbers we use. Universities still teaching today. Castles we can visit. Stories of knights we still tell. The Middle Ages weren't dark and forgotten. They were busy, building, learning, and creating things that lasted.` },
          ],
        },

        {
          id: `l06-game`,
          type: `interactive`,
          format: `drag-match`,
          guideText: `Let's see what you remember about the Middle Ages, {name}. Match each one to where it belongs.`,
          buckets: [
            { id: `fact`, label: `✅ Yes, that's true!`, color: `#34D399` },
            { id: `myth`, label: `❌ No way!`,           color: `#F87171` },
          ],
          items: [
            { id: `l06-g1`, image: `l06-game-1.webp`, label: `Medieval knights wore shining armor and rode horses.`,
              matchPhrase: `Yes! Knights wore heavy metal armor — sometimes 60 pounds of it. They trained for years on horseback. Real knights, real armor.`,
              correctMatch: `fact` },
            { id: `l06-g2`, image: `l06-game-2.webp`, label: `The numbers we use today (1, 2, 3) came from the Arab world during the Middle Ages.`,
              matchPhrase: `True! Arabic numerals — the 1, 2, 3 we use — came from the Middle East and replaced the harder Roman numerals. Math got SO much easier.`,
              correctMatch: `fact` },
            { id: `l06-g3`, image: `l06-game-3.webp`, label: `Real dragons flew around medieval villages.`,
              matchPhrase: `Ha! Dragons are STORIES, {name} — wonderful, exciting stories told in the Middle Ages. But real dragons? Just in the storybooks.`,
              correctMatch: `myth` },
            { id: `l06-g4`, image: `l06-game-4.webp`, label: `Medieval knights drove cars to their castles.`,
              matchPhrase: `Definitely not! Cars weren't invented for another EIGHT hundred years. Knights rode horses. The roads weren't even paved for cars back then.`,
              correctMatch: `myth` },
          ],
        },

        {
          id: `l06-quiz`,
          type: `quiz`,
          guideText: `Let's see how much you remember, {name}.`,
          questions: [
            { id: `l06-q1`, format: `multiple-choice`,
              question: `What was a KNIGHT?`,
              options: [`A type of food`, `A special medieval warrior who wore armor and rode horses`, `A kind of bird`, `A medieval king`],
              correctIndex: 1,
              explanation: `A knight was a special medieval warrior. Knights trained for many years, wore armor that gleamed in the sun, rode horses into battle, and tried to follow special rules of bravery and kindness called chivalry.` },
            { id: `l06-q2`, format: `multiple-choice`,
              question: `What is a DRAWBRIDGE?`,
              options: [`A bridge that can be raised or lowered`, `A drawing on a wall`, `A special kind of door`, `A type of room`],
              correctIndex: 0,
              explanation: `A drawbridge is a bridge that can be pulled UP and DOWN. Castles had drawbridges over their moats. When friends came, the bridge went down. When enemies came, the bridge went UP — and they couldn't cross.` },
            { id: `l06-q3`, format: `multiple-choice`,
              question: `What is ALGEBRA?`,
              options: [`A type of dance`, `A medieval food`, `A type of math that uses letters and numbers`, `A castle room`],
              correctIndex: 2,
              explanation: `Algebra is a type of math that uses letters like 'x' and 'y' along with numbers. It was invented in the Middle East during the Middle Ages. The word 'algebra' even comes from Arabic.` },
            { id: `l06-q4`, format: `true-false`,
              question: `Most medieval people were kings, queens, and knights.`,
              correctAnswer: false,
              explanation: `False! Most medieval people were actually FARMERS. They lived in small villages, grew food, and raised animals. Only a small number of people were kings, queens, or knights. The vast majority worked the land.` },
            { id: `l06-q5`, format: `fill-blank`,
              question: `The numbers we use in math (1, 2, 3) are called ___ numerals because they came from the Arab world during the Middle Ages.`,
              options: [`Arabic`, `Egyptian`, `Greek`, `Chinese`],
              correctIndex: 0,
              explanation: `Arabic numerals! They came from the Middle East and replaced the older Roman numerals (I, II, III) that Europeans used before. Math became SO much easier with Arabic numerals.` },
            { id: `l06-q6`, format: `multiple-choice`,
              question: `What did the Middle Ages give us that we still have today?`,
              options: [`Universities, castles to visit, our numbers, and stories of knights`, `Cars and trains`, `Smartphones and TVs`, `Spaceships and rockets`],
              correctIndex: 0,
              explanation: `The Middle Ages gave us SO MUCH! The first universities. Beautiful castles you can still visit. The numbers 1, 2, 3 we use every day. Stories of knights and dragons that we still tell in books and movies.` },
          ],
        },

        {
          id: `l06-realworld`,
          type: `real-world`,
          guideText: `Castles from the Middle Ages are STILL standing today, {name} — in places like England, France, Germany, and many other countries. Some have been turned into museums. Some are still lived in by families. The Tower of London is over 900 years old and still has guards in colorful uniforms walking around. Stories from the Middle Ages, like King Arthur and Robin Hood, are still told in books and movies you might know today.`,
          familyAdventure: `Watch a kid-friendly movie or read a book about the Middle Ages together — try "How to Train Your Dragon," "Brave," or a King Arthur story. After, talk about it: what did the characters wear? Where did they live? How did they travel? What was different from our world today? What was the SAME?`,
          creativePrompt: `Design your own castle! Draw a big stone castle with tall TOWERS, thick WALLS, a deep MOAT around it, and a DRAWBRIDGE over the moat. Add a colorful FLAG on top of the tallest tower. What would your castle be named? Who would live there?`,
        },

        {
          id: `l06-celebration`,
          type: `celebration`,
          message: `Wonderful, {name}! You now know about the Middle Ages — knights in shining armor, castles with drawbridges, medieval villages, and the wider world where scholars gave us our numbers. A thousand years of history. I'm carrying these stories with me. Thank you for journeying with me.`,
          badge: `medieval-explorer`,
          badgeName: `Medieval Explorer`,
          xpEarned: 50,
        },

      ], // screens
    },
  ], // lessons
};

export default HW_L06;

// ─── Dev asset check ─────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const mags  = HW_L06.lessons[0].screens.filter(s => s.type === 'magazine').length;
  const game  = HW_L06.lessons[0].screens.find(s => s.type === 'interactive')?.items?.length ?? 0;
  const quiz  = HW_L06.lessons[0].screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  console.log(`[LESSON-HISTORY-L06] Loaded: "The Middle Ages: Knights and Castles" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
}
