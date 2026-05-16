// ─────────────────────────────────────────────────────────────────────────────
// History & World  |  L01 — Ancient Egypt: Pyramids and Pharaohs
// Age band : explorers (6–8)   Guide: lyra
// ─────────────────────────────────────────────────────────────────────────────

const HW_L01 = {
  ageBand:   `explorers`,
  subjectId: `history`,
  guide:     `lyra`,

  lessons: [
    {
      id:        `hw-6-8-01`,
      title:     `Ancient Egypt: Pyramids and Pharaohs`,
      duration:  12,
      xpReward:  50,
      badge:     `egypt-explorer`,
      badgeName: `Egypt Explorer`,

      screens: [

        {
          id: `l01-welcome`,
          type: `welcome`,
          guideText: `{name}, I want to take you on a journey today — a long, LONG way back in time. We're going to visit a place with giant stone triangles, kings who thought they were gods, and a magical river that made everything possible. Ready? Let's go!`,
          headline: `Ancient Egypt: Pyramids and Pharaohs`,
          subtitle: `A civilization that lasted over 3,000 years — longer than almost anything else in history`,
          visual: `/explorer-assets/history/l01-welcome.png`,
        },

        {
          id: `l01-mag-1`,
          type: `magazine`,
          section: 1,
          totalSections: 6,
          headline: `A Really, Really Long Time Ago`,
          paragraphs: [
            `Ancient Egypt started more than 5,000 years ago. That is SO long ago that your great-great-great (keep going!) grandparents weren't even born yet.`,
            `Egypt didn't last for just a few years — it lasted for over 3,000 years. That's longer than almost any other civilization ever!`,
          ],
          image: `/explorer-assets/history/l01-s1-civilization-endured.png`,
          imageCaption: `3,000 years! Egypt was around longer than almost any civilization in all of history.`,
          vocab: [
            { word: `ancient`, definition: `Something from a very, very long time ago — thousands of years in the past.`,
              audioPrompt: `Ancient means very, very old, {name} — like thousands and thousands of years ago! Ancient Egypt is so old that even the dinosaurs were long gone before Egypt started. Pretty mind-blowing, right? I've been keeping these stories safe for a very long time.` },
            { word: `Egypt`, definition: `A country in Africa where one of the greatest civilizations in history grew up — along a magical river called the Nile.`,
              audioPrompt: `Egypt is a country in Africa, {name}. It's still there today — you can visit it! But thousands of years ago, something amazing grew there. People built enormous stone pyramids, wrote with little pictures, and had kings who thought they were gods. I love Egypt's story so much.` },
            { word: `thousands`, definition: `A really, really big number — 1,000 is one thousand. Egypt lasted over THREE thousands of years!`,
              audioPrompt: `Thousands means a really, really big number, {name}. One thousand is already huge — imagine counting to one thousand! Now Egypt lasted THREE thousand years. That's like if you started counting today and didn't stop until your great-great-great-great-great grandchildren were old. That's how long Egypt lasted!` },
          ],
        },

        {
          id: `l01-mag-2`,
          type: `magazine`,
          section: 2,
          totalSections: 6,
          headline: `The Magic River`,
          paragraphs: [
            `Most of Egypt is hot, dry DESERT. So how did people live there?`,
            `The NILE RIVER! Every year it flooded and left behind super-rich, dark soil — perfect for growing food. No Nile? No Egypt. It was like magic!`,
          ],
          image: `/explorer-assets/history/l01-s2-gift-of-the-nile.png`,
          imageCaption: `The Nile River made everything possible. Without it, Egypt would just be a desert.`,
          vocab: [
            { word: `desert`, definition: `A very dry, hot place with almost no rain — like a giant sandbox. Most of Egypt is desert!`,
              audioPrompt: `A desert is a very dry, hot place where it almost never rains, {name}. Imagine a giant sandbox that goes on forever — that's what most of Egypt looks like! Without the Nile River, nobody could have lived there. I think it's amazing that people built one of the greatest civilizations ever in the middle of a desert.` },
            { word: `Nile`, definition: `The longest river in Africa. The Nile gave ancient Egypt everything it needed to grow and thrive.`,
              audioPrompt: `The Nile is a giant river in Africa — the longest river on the whole continent, {name}! Every year it flooded and left behind special dark soil that was perfect for growing food. The Egyptians loved the Nile so much. Without it, there would have been no Egypt at all. I think of it like the river was Egypt's best friend.` },
            { word: `flood`, definition: `When a river overflows its banks and spreads water everywhere. For Egypt, the Nile's floods were a wonderful gift!`,
              audioPrompt: `Usually floods are scary, {name} — but the ancient Egyptians LOVED when the Nile flooded! When it flooded each year, it spread dark, rich soil across the land. That soil was perfect for growing food. So instead of being sad about the flood, Egyptians celebrated it. It was their yearly gift from the river. Isn't that cool?` },
          ],
        },

        {
          id: `l01-mag-3`,
          type: `magazine`,
          section: 3,
          totalSections: 6,
          headline: `Kings Who Were Like Gods`,
          paragraphs: [
            `Egypt was ruled by kings called PHARAOHS. But not just any kings — Egyptians believed pharaohs were actually gods living in human bodies!`,
            `Some famous pharaohs: TUTANKHAMUN (King Tut), RAMESSES II, and HATSHEPSUT — a powerful woman who was one of the greatest rulers Egypt ever had.`,
          ],
          image: `/explorer-assets/history/l01-s3-pharaohs-gods.png`,
          imageCaption: `Pharaohs weren't just kings — Egyptians believed they were gods on Earth!`,
          vocab: [
            { word: `pharaoh`, definition: `An ancient Egyptian king or queen. Egyptians believed pharaohs were gods living in human form.`,
              audioPrompt: `A pharaoh was the ruler of Egypt, {name} — but not just a regular ruler. Egyptians believed the pharaoh was actually a god in a human body! That means everyone treated the pharaoh like they were the most important, most powerful being in the whole world. I find it fascinating that a belief about a person could make them so powerful.` },
            { word: `god`, definition: `A being that people believe has magical powers and control over the world. Egyptians thought pharaohs were gods!`,
              audioPrompt: `The ancient Egyptians believed in many gods, {name} — gods for the sun, gods for the river, gods for the dead. And they believed the pharaoh was one too! Imagine if you thought your leader was actually a magical god. You'd do anything they said! That's how powerful the pharaohs were in Egypt.` },
            { word: `Hatshepsut`, definition: `One of ancient Egypt's greatest pharaohs — and she was a woman! She ruled for over 20 years and built amazing things.`,
              audioPrompt: `Hatshepsut is one of my favorite people in all of history, {name}. She was a woman who became pharaoh — and she was AMAZING at it. She ruled for more than twenty years, sent ships on big trading journeys, and built beautiful temples. Some people tried to forget her after she died. But we still know her name today. That's how great she was.` },
          ],
        },

        {
          id: `l01-mag-4`,
          type: `magazine`,
          section: 4,
          totalSections: 6,
          headline: `Giant Stone Triangles`,
          paragraphs: [
            `The pyramids were built as tombs — special resting places — for the pharaohs.`,
            `The Great Pyramid used 2.3 MILLION giant stone blocks! Workers moved them without any trucks or machines — just people power. The pyramid was the tallest building on Earth for thousands of years!`,
          ],
          image: `/explorer-assets/history/l01-s4-pyramids.png`,
          imageCaption: `2.3 million stone blocks — stacked perfectly into a giant triangle! No cranes, no machines. Just really, really hard work.`,
          vocab: [
            { word: `pyramid`, definition: `A giant stone structure shaped like a triangle. Built as a special resting place (tomb) for a pharaoh.`,
              audioPrompt: `A pyramid is a giant stone building shaped like a triangle, {name}. The Egyptians built them as special tombs for their pharaohs — places where the pharaoh's body would rest forever. The Great Pyramid is so huge that you could fit almost ten football fields inside it. And it's still standing today, thousands of years later! I think pyramids might be the most impressive things humans ever built.` },
            { word: `stone`, definition: `Hard rock used to build things. The pyramid builders used millions and millions of stone blocks!`,
              audioPrompt: `The pyramid builders used stone, {name} — but not little stones. Giant blocks of stone, some as heavy as a car! They had to cut them, move them, and stack them perfectly. And they did it without any machines. No cranes, no trucks, no forklifts. Just strong people, wooden sleds, and a lot of teamwork. I'm still amazed by it.` },
            { word: `worker`, definition: `A person who does hard work. The pyramid workers were skilled builders who were fed and cared for — not forced to work.`,
              audioPrompt: `A lot of people think the pyramids were built by slaves, {name} — but that's not what happened! They were built by skilled workers who were paid, fed, and taken care of. We've found the villages where they lived and even the bread they ate! They were hardworking, talented builders who were proud of what they made. Isn't that amazing?` },
          ],
        },

        {
          id: `l01-mag-5`,
          type: `magazine`,
          section: 5,
          totalSections: 6,
          headline: `Writing With Little Pictures`,
          paragraphs: [
            `Egyptians invented their own way of writing — using little pictures and symbols called HIEROGLYPHICS.`,
            `Each picture meant a sound or an idea. They wrote on stone walls AND on paper made from a river plant called PAPYRUS. Some of this writing is still readable today — 4,000 years later!`,
          ],
          image: `/explorer-assets/history/l01-s5-hieroglyphics.png`,
          imageCaption: `Little pictures that tell stories — the ancient Egyptian writing system, used for 4,000 years.`,
          vocab: [
            { word: `hieroglyphics`, definition: `The ancient Egyptian writing system — made of little pictures and symbols that represent sounds and ideas.`,
              audioPrompt: `Hieroglyphics is the special writing that ancient Egyptians used, {name}. Instead of letters like A, B, C — they used little pictures! A bird might mean a sound. A sun might mean an idea. They carved them into stone walls and painted them everywhere. For a long time, nobody could read them. Then scientists figured out the code — and suddenly we could read what Egyptians wrote four thousand years ago!` },
            { word: `papyrus`, definition: `An early kind of paper made from a river plant. Egyptians used it to write on — and some pieces have lasted 4,000 years!`,
              audioPrompt: `Papyrus is like the ancient Egyptian version of paper, {name}. They made it from a plant that grew by the Nile. They'd slice it thin, press it flat, and dry it out — and then they had something to write on! It worked so well that some papyrus pieces are still readable today, four thousand years later. That's better than most things we make today!` },
            { word: `symbol`, definition: `A picture or sign that stands for something else. In hieroglyphics, each symbol was a sound or an idea.`,
              audioPrompt: `A symbol is a picture that means something, {name}. Like how a heart symbol means love, or a smiley face means happy. In hieroglyphics, each little symbol was either a sound — like a letter — or an idea. The Egyptians had hundreds of them! Learning to read and write hieroglyphics took years of practice. People who could do it were very special and important in Egypt.` },
          ],
        },

        {
          id: `l01-mag-6`,
          type: `magazine`,
          section: 6,
          totalSections: 6,
          headline: `What Egypt Gave Us`,
          paragraphs: [
            `Ancient Egypt didn't just leave us pyramids — they gave ideas that we STILL use today!`,
            `They made one of the first CALENDARS (365 days, 12 months — sound familiar?). They were early math experts. They wrote some of the first MEDICINE books ever. Egypt's ideas shaped the whole world!`,
          ],
          image: `/explorer-assets/history/l01-s6-egypts-legacy.png`,
          imageCaption: `The calendar we use today, early math, early medicine — Egypt's gifts to the whole world.`,
          vocab: [
            { word: `calendar`, definition: `A way of tracking days, months, and years. Ancient Egyptians made one of the first calendars — with 365 days and 12 months, just like ours!`,
              audioPrompt: `You use a calendar every day, {name} — and you can partly thank ancient Egypt for that! The Egyptians made one of the very first calendars, with 365 days and 12 months. They needed it to track when the Nile would flood each year. Their calendar was so good that it became the basis for the calendar we still use today. Every time you look at a calendar, Egypt is a tiny part of that.` },
            { word: `math`, definition: `Using numbers to count, measure, and solve problems. Ancient Egyptians were early math experts — they used it to build pyramids!`,
              audioPrompt: `Math might feel like just school stuff, {name}, but the ancient Egyptians used math to build the most amazing structures in the world! They had to figure out how many stones they needed, how to make the sides perfectly even, how to aim the pyramid at the stars. Their math ideas spread to other civilizations and helped build the world we live in. Pretty cool, right?` },
            { word: `medicine`, definition: `The science of healing sick people. Ancient Egyptians were some of the first people to write down medical knowledge to help others.`,
              audioPrompt: `When you go to the doctor and they know how to help you, {name}, part of that knowledge has roots going way, way back — all the way to ancient Egypt! Egyptian healers wrote down what worked when people were sick. They figured out how bones and organs worked. They wrote it all down so future healers could learn. They were some of the first real doctors in history. I think that's one of Egypt's most important gifts.` },
          ],
        },

        {
          id: `l01-game`,
          type: `interactive`,
          format: `drag-match`,
          guideText: `Time to show what you know, {name}! Look at each clue and sort it into the right box. You've got this!`,
          buckets: [
            {
              id: `fact`,
              label: `✅ Yes, that's true!`,
              color: `#34D399`,
            },
            {
              id: `myth`,
              label: `❌ No way!`,
              color: `#F87171`,
            },
          ],
          items: [
            {
              id: `l01-g1`,
              image: `/explorer-assets/history/l01-game-1.png`,
              label: `The Nile flooded and helped food grow.`,
              matchPhrase: `Yes! The Nile's flood left rich black dirt that was perfect for growing food. That's how everything in Ancient Egypt got started.`,
              correctMatch: `fact`,
            },
            {
              id: `l01-g2`,
              image: `/explorer-assets/history/l01-game-2.png`,
              label: `Pyramid workers got paid for their work.`,
              matchPhrase: `True! People used to think slaves built the pyramids — but scientists figured out the workers were actually paid. They got food, beer, and a place to live. It was a real job.`,
              correctMatch: `fact`,
            },
            {
              id: `l01-g3`,
              image: `/explorer-assets/history/l01-game-3.png`,
              label: `Aliens built the pyramids.`,
              matchPhrase: `Ha! No way. The pyramids were built by people — really hardworking people, with ropes, ramps, and lots of teamwork. No aliens needed.`,
              correctMatch: `myth`,
            },
            {
              id: `l01-g4`,
              image: `/explorer-assets/history/l01-game-4.png`,
              label: `Egyptians wrote on phones and tablets.`,
              matchPhrase: `Definitely not! Phones and tablets weren't invented yet. Ancient Egyptians wrote with little pictures called hieroglyphics — on papyrus paper or carved into stone.`,
              correctMatch: `myth`,
            },
          ],
        },

        {
          id: `l01-quiz`,
          type: `quiz`,
          guideText: `Let's see what you remember, {name}! Do your best — I believe in you.`,
          questions: [
            {
              id: `l01-q1`,
              format: `multiple-choice`,
              question: `Why was the Nile River so important to ancient Egypt?`,
              options: [
                `It was full of gold and treasure`,
                `It flooded every year and left behind great soil for growing food`,
                `It gave the Egyptians water to take baths`,
                `It was used to race boats`,
              ],
              correctIndex: 1,
              explanation: `The Nile flooded every year, and when the water went away, it left behind rich, dark soil — perfect for growing food. That's how the Egyptians could feed everyone and build their great civilization!`,
            },
            {
              id: `l01-q2`,
              format: `multiple-choice`,
              question: `What is a pharaoh?`,
              options: [
                `An ancient Egyptian chef who cooked for everyone`,
                `A type of pyramid shape`,
                `An ancient Egyptian ruler that people believed was a god`,
                `A fish that lived in the Nile River`,
              ],
              correctIndex: 2,
              explanation: `A pharaoh was the ruler of ancient Egypt — and Egyptians believed the pharaoh was actually a god in a human body! That made pharaohs incredibly powerful.`,
            },
            {
              id: `l01-q3`,
              format: `multiple-choice`,
              question: `What are hieroglyphics?`,
              options: [
                `Giant stone pyramids`,
                `A type of Egyptian food`,
                `Little pictures and symbols the Egyptians used as their writing`,
                `Paintings only found inside tombs`,
              ],
              correctIndex: 2,
              explanation: `Hieroglyphics is the writing system ancient Egyptians invented — made of little pictures and symbols! Each one represented a sound or an idea. We can still read them today.`,
            },
            {
              id: `l01-q4`,
              format: `multiple-choice`,
              question: `What were the pyramids built for?`,
              options: [
                `To store grain and food for the whole country`,
                `As special tombs to protect pharaohs forever`,
                `As giant pillows for the gods to sleep on`,
                `To block sandstorms from hitting the cities`,
              ],
              correctIndex: 1,
              explanation: `The pyramids were built as tombs — special resting places for pharaohs. The Egyptians wanted their pharaohs to be protected and comfortable forever.`,
            },
            {
              id: `l01-q5`,
              format: `multiple-choice`,
              question: `Who REALLY built the pyramids?`,
              options: [
                `Aliens from outer space`,
                `Pharaohs who built them with magic`,
                `Slaves who were forced to work for free`,
                `Skilled workers who were fed, paid, and taken care of`,
              ],
              correctIndex: 3,
              explanation: `The pyramids were built by skilled workers — not slaves! Scientists have found their villages and even what they ate for lunch. They were talented builders who worked hard and were proud of what they made.`,
            },
            {
              id: `l01-q6`,
              format: `true-false`,
              question: `Ancient Egypt invented one of the very first calendars — with 365 days and 12 months, just like the one we use today.`,
              correctAnswer: true,
              explanation: `True! The Egyptians made an early calendar with 365 days and 12 months because they needed to track when the Nile would flood each year. Their ideas became part of the calendar we still use today!`,
            },
          ],
        },

        {
          id: `l01-realworld`,
          type: `real-world`,
          guideText: `People called Egyptologists spend their whole lives studying ancient Egypt — and they are STILL discovering new things! New tombs are still being found underground. Old writing is still being translated. Egypt keeps sharing its secrets, little by little.`,
          familyAdventure: `Make your own hieroglyphics together! Look up an Egyptian hieroglyphics alphabet online — there are free charts to print. Find the symbols for each letter in your name and write your name in hieroglyphics. Then draw an oval around it (that's called a cartouche — what Egyptians used for royal names!). Write a secret message in hieroglyphics for someone else in your family to decode!`,
          creativePrompt: `Draw your own pyramid! Make it big and draw what you think might be inside — treasures, rooms, passages. Then label everything with made-up hieroglyphics symbols (you can invent your own picture-writing!). Give your pyramid a name and tell someone about the pharaoh who lived there.`,
        },

        {
          id: `l01-celebration`,
          type: `celebration`,
          message: `Amazing work, {name}! You just learned about one of the greatest civilizations that ever existed — ancient Egypt! You know about the magic Nile River, the powerful pharaohs, the giant pyramids, the picture writing, and all the things Egypt gave to the world. I am so proud of you for carrying these ancient stories with you!`,
          badge: `egypt-explorer`,
          badgeName: `Egypt Explorer`,
          xpEarned: 50,
        },

      ], // screens
    },
  ], // lessons
};

export default HW_L01;

// ─── Dev asset check ─────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const mags  = HW_L01.lessons[0].screens.filter(s => s.type === 'magazine').length;
  const game  = HW_L01.lessons[0].screens.find(s => s.type === 'interactive')?.items?.length ?? 0;
  const quiz  = HW_L01.lessons[0].screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  console.log(`[LESSON-HISTORY-L01] Loaded: "Ancient Egypt: Pyramids and Pharaohs" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
  Promise.all([
    fetch('/explorer-assets/history/l01-s1-civilization-endured.png', { method: 'HEAD' }),
    fetch('/explorer-assets/history/l01-s2-gift-of-the-nile.png', { method: 'HEAD' }),
    fetch('/explorer-assets/history/l01-s3-pharaohs-gods.png', { method: 'HEAD' }),
    fetch('/explorer-assets/history/l01-s4-pyramids.png', { method: 'HEAD' }),
    fetch('/explorer-assets/history/l01-s5-hieroglyphics.png', { method: 'HEAD' }),
    fetch('/explorer-assets/history/l01-s6-egypts-legacy.png', { method: 'HEAD' }),
  ]).then(() => console.log('[LESSON-HISTORY-L01] Magazine assets OK'))
    .catch(() => console.warn('[LESSON-HISTORY-L01] One or more magazine assets missing'));
}
