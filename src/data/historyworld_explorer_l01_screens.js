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
          guideText: `{name}, the Great Pyramid of Giza was the tallest structure on Earth for three thousand eight hundred years. Built without cranes, without steel, without computers — by human hands, using ramps, sledges, and extraordinary organization. And it has stood for forty-five centuries. Today we're going to step into Ancient Egypt — one of the most sophisticated civilizations in all of human history — and learn what made it possible, what made it last, and what it left behind. Lyra remembers things from a very long time ago. Let's begin.`,
          headline: `Ancient Egypt: Pyramids and Pharaohs`,
          subtitle: `Ancient Egypt lasted over 3,000 years and gave humanity writing, mathematics, medicine, and monuments that still stand today`,
          visual: `/explorer-assets/history/l01-welcome.png`,
        },

        {
          id: `l01-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `The Civilization That Wouldn't End`,
          paragraphs: [
            `Ancient Egypt lasted more than 3,000 YEARS.`,
            `To put that in perspective: the United States is 250 years old. Rome lasted 1,000. Egypt lasted three times longer than Rome. One of the longest civilizations in human history.`,
          ],
          image: `/explorer-assets/history/l01-s1-civilization-endured.png`,
          imageCaption: `Three thousand years. Older than almost anything still standing. Older than most civilizations' total existence. Egypt endured.`,
          vocab: [
            { word: `civilization`, definition: `A complex society with writing, cities, government, shared culture. Egypt was one of humanity's first.`,
              audioPrompt: `A civilization is more than just people living together, {name}. It's a complex society — with writing, cities, government, shared beliefs, and culture passed across generations. Egypt was one of the first true civilizations in human history. The fact that they built one at all is remarkable. The fact that it lasted three thousand years is almost miraculous. Lyra has been turning this over for a long time.` },
            { word: `millennium`,   definition: `A period of 1,000 years. Egypt lasted three of them — an almost unimaginable span of human history.`,
              audioPrompt: `A millennium is a thousand years, {name} — a span of time so vast it's hard to picture. Egypt lasted three of them. To put that in perspective: imagine the entire history of the United States, then multiply it by twelve. That's how long Egypt held together as one civilization. Lyra finds this kind of endurance genuinely awe-inspiring.` },
            { word: `endure`,       definition: `To last across long periods of time. What very few civilizations in history have actually managed to do.`,
              audioPrompt: `To endure is to last, {name} — through changes, through challenges, through generations. Most civilizations rise and fall within a few centuries. Egypt endured for thirty centuries. That kind of endurance isn't accident. It came from how they organized themselves, how they passed down knowledge, how they built things meant to outlast the people who built them. That commitment to permanence is one of Egypt's quiet lessons for us.` },
          ],
        },

        {
          id: `l01-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `The Gift of the Nile`,
          paragraphs: [
            `Most of Egypt is desert. So how did a great civilization grow there?`,
            `The NILE RIVER. Every year it flooded, leaving rich black soil along its banks. That soil made farming possible. Farming made cities possible. Cities made everything else possible.`,
          ],
          image: `/explorer-assets/history/l01-s2-gift-of-the-nile.png`,
          imageCaption: `Without the Nile, no Egypt. The river was the lifeline. The flood was the gift. The black soil was where civilization took root.`,
          vocab: [
            { word: `Nile`,  definition: `The longest river in Africa. The lifeline that made Egyptian civilization possible — without it, the land would be desert.`,
              audioPrompt: `The Nile is the longest river in Africa, {name}, and ancient Egypt would not exist without it. The Egyptians built their entire civilization along its banks. Their cities, their temples, their farms — all clustered close to the water. Without the Nile, the land is mostly desert. With it, the land became one of the most fertile in the ancient world. Geography shapes history, and the Nile is one of the most powerful examples there is.` },
            { word: `flood`, definition: `The annual rising of the Nile. Predictable, life-giving — it deposited the black silt that made Egyptian agriculture possible.`,
              audioPrompt: `Every year, the Nile flooded, {name} — and unlike floods in most places, the Egyptians celebrated it. The waters carried rich black silt from far upriver and spread it across the banks. When the floods receded, the soil left behind was extraordinarily fertile. Farmers could grow huge surpluses. Surpluses meant people could specialize in other work. That's how a flood, of all things, made civilization possible.` },
            { word: `Kemet`, definition: `The ancient Egyptians' own name for their land — meaning "Black Land," for the dark fertile soil deposited by the Nile.`,
              audioPrompt: `The Egyptians didn't call their land "Egypt," {name} — they called it Kemet, meaning the Black Land. The dark fertile soil along the Nile was so important to them that it became part of their land's name. The surrounding desert they called Deshret — the Red Land. Black and red, life and harshness, two worlds side by side. Lyra loves that a civilization named itself after its own soil.` },
          ],
        },

        {
          id: `l01-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Pharaohs: Gods on Earth`,
          paragraphs: [
            `Egypt was ruled by PHARAOHS — kings considered LITERAL GODS on Earth.`,
            `They controlled the land, the army, the economy, the temples. Famous ones: RAMESSES II. CLEOPATRA. TUTANKHAMUN. HATSHEPSUT — one of the most successful female rulers in history.`,
          ],
          image: `/explorer-assets/history/l01-s3-pharaohs-gods.png`,
          imageCaption: `Not just kings. Not even just rulers. The pharaoh was the bridge between humans and gods — the divine power on Earth.`,
          vocab: [
            { word: `pharaoh`,    definition: `An ancient Egyptian king. Considered a literal god on Earth — the intermediary between humans and the divine.`,
              audioPrompt: `A pharaoh wasn't just a king, {name} — Egyptians believed the pharaoh was a god in human form, the bridge between people and the divine. That belief shaped everything: how the pharaoh was treated, how power was structured, what happened when one died. Lyra has been carrying these stories for a long time. They tell us as much about what people believed about authority as about Egypt itself.` },
            { word: `dynasty`,    definition: `A line of rulers from the same family, passing power across generations. Ancient Egypt had over 30 dynasties across its history.`,
              audioPrompt: `A dynasty is a family line that keeps ruling, {name} — power passing from parent to child, generation after generation. Ancient Egypt had over thirty dynasties across its three thousand years. Some were short. Some lasted for centuries. Each had its own famous pharaohs, its own monuments, its own stories. Lyra remembers them.` },
            { word: `Hatshepsut`, definition: `One of ancient Egypt's most successful pharaohs. Ruled for over 20 years. One of the most powerful women in all of ancient history.`,
              audioPrompt: `Hatshepsut is one of the figures Lyra most wants you to know, {name}. She ruled Egypt for over twenty years, expanded trade across the ancient world, and built monuments that still stand today. In a time when most rulers were men, she became one of the most successful pharaohs in Egyptian history. After her death, some tried to erase her from the record. They failed. We still remember her name.` },
          ],
        },

        {
          id: `l01-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `The Pyramids`,
          paragraphs: [
            `The pyramids were tombs — built to protect pharaohs for eternity.`,
            `The Great Pyramid contains 2.3 MILLION stone blocks, each averaging 2.5 tons. Built around 2560 BCE by skilled paid workers — not slaves. Tallest building on Earth for 3,800 YEARS.`,
          ],
          image: `/explorer-assets/history/l01-s4-pyramids.png`,
          imageCaption: `2.3 million stones. Built by skilled workers, not slaves. Aligned with cosmic precision. Standing strong forty-five centuries later.`,
          vocab: [
            { word: `pyramid`,   definition: `A massive stone tomb built to protect a pharaoh's body and treasures for eternity. The Great Pyramid is the most famous.`,
              audioPrompt: `A pyramid is a tomb, {name} — but not just any tomb. The pyramids were built to protect a pharaoh's body, treasures, and journey to the afterlife, for eternity. The Great Pyramid took twenty years to build and contains 2.3 million stone blocks. The base is level to within 2.1 centimeters across 230 meters. The precision is staggering. Lyra still marvels at it.` },
            { word: `BCE`,       definition: `"Before Common Era" — used for dates before year 1 of the modern calendar. The Great Pyramid was built around 2560 BCE.`,
              audioPrompt: `BCE means Before Common Era, {name} — used for dates before year 1 of the modern calendar. The Great Pyramid was built around 2560 BCE — over forty-five hundred years ago. When you see "BCE" next to a date, it means time was running backwards from where we are now. The bigger the BCE number, the further back in time. Lyra likes the way it reminds us how vast history actually is.` },
            { word: `precision`, definition: `Extraordinary accuracy. The Great Pyramid's base is level to within 2.1 centimeters across 230 meters — built without modern tools.`,
              audioPrompt: `Precision is what makes the Great Pyramid almost unbelievable, {name}. Its base is level within 2.1 centimeters across more than two hundred meters. Its sides are aligned almost perfectly with the four compass directions. All of it built without computers, without lasers, without modern surveying tools — by skilled workers using ropes, water levels, and centuries of accumulated knowledge. Lyra remembers a time when humans built things to last forever. The pyramids still are.` },
          ],
        },

        {
          id: `l01-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Hieroglyphics`,
          paragraphs: [
            `Egyptians invented one of the world's first writing systems.`,
            `HIEROGLYPHICS — symbols that represented sounds AND ideas. Carved into stone, painted on walls, written on PAPYRUS (an early paper from a river plant). A 4,000-year-old way of writing.`,
          ],
          image: `/explorer-assets/history/l01-s5-hieroglyphics.png`,
          imageCaption: `Symbols carved in stone. Words written on papyrus. A writing system so old it predates almost every other on Earth — and it still speaks to us.`,
          vocab: [
            { word: `hieroglyphics`, definition: `A writing system using symbols for sounds and ideas. One of the world's first — and the way ancient Egyptians wrote everything important.`,
              audioPrompt: `Hieroglyphics is a writing system using pictures and symbols, {name} — each one representing either a sound or an idea. The ancient Egyptians used it to record everything: religious texts, royal names, official documents, stories of pharaohs. For centuries, no one could read it. Then in 1799, a stone called the Rosetta Stone was discovered, and scholars finally cracked the code. Now we can read what Egyptians wrote four thousand years ago.` },
            { word: `papyrus`,       definition: `An early form of paper made from a river plant that grew along the Nile. What Egyptians wrote on for thousands of years.`,
              audioPrompt: `Papyrus is what the Egyptians wrote on, {name} — an early form of paper made from a plant that grew along the Nile. They cut the plant into thin strips, layered them crosswise, and pressed them flat. The result was a smooth, durable surface that could be rolled into scrolls. Some papyrus documents have survived four thousand years. That's how good they were at making it.` },
            { word: `cartouche`,     definition: `An oval frame that surrounds the hieroglyphics spelling a royal name. A way of honoring and protecting the names of pharaohs.`,
              audioPrompt: `A cartouche is the oval ring you'll sometimes see around hieroglyphics, {name}. It was used to mark royal names — pharaohs, queens, sacred figures. The Egyptians believed a name carried part of the person's spirit, and the cartouche was a way of protecting and honoring it. When archaeologists find a cartouche, they know they've found something important. Lyra finds it beautiful that a name could matter that much.` },
          ],
        },

        {
          id: `l01-mag-6`,
          type: `magazine`,
          section: 6,
          headline: `What Egypt Gave the World`,
          paragraphs: [
            `Egypt's influence on humanity didn't stop with pyramids.`,
            `They developed MATHEMATICS (including geometry for building). MEDICINE (the first recorded medical texts). A 365-DAY CALENDAR divided into 12 months. Their ideas about the afterlife and justice shaped religions for millennia.`,
          ],
          image: `/explorer-assets/history/l01-s6-egypts-legacy.png`,
          imageCaption: `Pyramids endure. But so do ideas. Egypt's math, medicine, calendar, and beliefs shaped the civilizations that came after. The legacy is still living.`,
          vocab: [
            { word: `legacy`,    definition: `What a civilization leaves behind for the rest of history. Egypt's legacy includes math, medicine, writing, architecture, and ideas still alive today.`,
              audioPrompt: `Legacy is what stays after a civilization is gone, {name}. The pyramids are part of Egypt's legacy — but so are ideas. Their geometry shaped how later cultures built. Their medical texts influenced healers for centuries. Their calendar — twelve months, three hundred sixty-five days — is the foundation of the one we still use. Lyra wants you to see this: ideas are sometimes more enduring than stone.` },
            { word: `geometry`,  definition: `The mathematics of shapes, space, and measurement. Egyptians used it to build pyramids with extraordinary precision — and it became a foundation of all later mathematics.`,
              audioPrompt: `Geometry is the mathematics of shapes and space, {name}. The Egyptians developed it because they needed it — to measure flooded farmland, to build temples that aligned with the stars, to construct pyramids whose corners pointed exactly to the four directions. From their practical need, geometry grew into one of the foundations of all later mathematics. The world we calculate in still owes Egypt a debt.` },
            { word: `afterlife`, definition: `What ancient Egyptians believed came after death. Central to their religion, their art, and the elaborate care they took with burial.`,
              audioPrompt: `The afterlife was at the center of how Egyptians understood the world, {name}. They believed that after death, the soul journeyed to another realm — and that what you did in life shaped what came next. That belief drove almost everything: mummification, pyramid building, the treasures buried with pharaohs, the prayers and rituals. Their ideas about the afterlife, justice, and the soul shaped religions and philosophies for thousands of years afterward.` },
          ],
        },

        {
          id: `l01-game`,
          type: `interactive`,
          format: `drag-match`,
          guideText: `Alright, {name} — time to put what you've learned to the test. Look at each statement and match it to where it belongs. Take your time — you've got this.`,
          buckets: [
            {
              id: `fact`,
              label: `✅ True About Ancient Egypt`,
              color: `#34D399`,
            },
            {
              id: `myth`,
              label: `❌ Common Misconception`,
              color: `#F87171`,
            },
          ],
          items: [
            {
              id: `l01-g1`,
              image: `l01-game-1.png`,
              label: `The annual flooding of the Nile made Egyptian farming and civilization possible.`,
              matchPhrase: `Exactly right. The Nile's predictable flooding deposited rich black silt every year, making large-scale agriculture possible — which is what allowed Egyptian society to develop into a great civilization.`,
              correctMatch: `fact`,
            },
            {
              id: `l01-g2`,
              image: `l01-game-2.png`,
              label: `Pharaohs were considered literal gods on Earth, not just kings.`,
              matchPhrase: `True. Egyptians believed the pharaoh was a god in human form — the bridge between humans and the divine. That belief shaped every part of how Egyptian society was structured.`,
              correctMatch: `fact`,
            },
            {
              id: `l01-g3`,
              image: `l01-game-3.png`,
              label: `The pyramids were built by enslaved people forced to work without pay.`,
              matchPhrase: `This is a common misconception. Recent research has shown the pyramid workers were actually skilled laborers — fed, housed, paid, and cared for by the state, working in rotating teams.`,
              correctMatch: `myth`,
            },
            {
              id: `l01-g4`,
              image: `l01-game-4.png`,
              label: `Cleopatra was the very first pharaoh of ancient Egypt.`,
              matchPhrase: `Cleopatra was actually one of the LAST pharaohs of ancient Egypt — her reign came near the end of the civilization, almost three thousand years after the first pharaohs ruled.`,
              correctMatch: `myth`,
            },
          ],
        },

        {
          id: `l01-quiz`,
          type: `quiz`,
          guideText: `Let's see how much you remember, {name}. Answer each question and I'll tell you how you did.`,
          questions: [
            {
              id: `l01-q1`,
              format: `multiple-choice`,
              question: `Why was the Nile River essential to ancient Egyptian civilization?`,
              options: [
                `It provided the only source of drinking water in the entire region`,
                `Its annual flooding deposited rich fertile soil that made large-scale farming possible — which allowed complex society to develop`,
                `It protected Egypt from invasion on all sides`,
                `It was used to transport stones for the pyramids only`,
              ],
              correctIndex: 1,
              explanation: `The Nile's annual flooding deposited rich black silt along its banks, making the land extraordinarily fertile. Reliable farming meant surplus food, which meant people could specialize in other work — building, writing, ruling, creating art. Egyptian civilization, in a real sense, grew out of that flood.`,
            },
            {
              id: `l01-q2`,
              format: `multiple-choice`,
              question: `Who actually built the Egyptian pyramids?`,
              options: [
                `Enslaved people forced to work without pay`,
                `Skilled laborers who were fed, housed, and paid by the state — working in rotating teams`,
                `Foreign architects hired from neighboring civilizations`,
                `The pharaohs themselves along with their royal families`,
              ],
              correctIndex: 1,
              explanation: `Recent research has overturned the old assumption that pyramids were built by enslaved people. Archaeological evidence shows the workers were skilled laborers, organized in rotating teams, fed and housed and cared for by the state. They appear to have been respected workers, not forced labor.`,
            },
            {
              id: `l01-q3`,
              format: `multiple-choice`,
              question: `What is hieroglyphics?`,
              options: [
                `An Egyptian system of counting using pictures`,
                `One of the world's first writing systems — using symbols that represent sounds and ideas`,
                `Sacred drawings found only inside pyramids`,
                `A type of Egyptian art painted on tomb walls`,
              ],
              correctIndex: 1,
              explanation: `Hieroglyphics is a writing system — one of the world's first. Each symbol represents either a sound or an idea, and Egyptians used the system to record everything from religious texts to royal names to official documents. For centuries no one could read it; the Rosetta Stone, discovered in 1799, finally allowed scholars to decode it.`,
            },
            {
              id: `l01-q4`,
              format: `true-false`,
              question: `Ancient Egyptian civilization lasted more than 3,000 years — one of the longest-lasting civilizations in all of human history.`,
              correctAnswer: true,
              explanation: `True. From the first unified kingdom around 3100 BCE to the death of Cleopatra in 30 BCE, ancient Egypt lasted over three thousand years. For comparison: that's three times longer than Rome lasted, and twelve times longer than the United States has existed so far. It's one of the most remarkable cases of civilizational endurance in human history.`,
            },
            {
              id: `l01-q5`,
              format: `fill-blank`,
              question: `The pharaohs were not just kings — they were considered literal ___ on Earth, the intermediaries between humans and the divine.`,
              options: [
                `gods`,
                `heroes`,
                `priests`,
                `judges`,
              ],
              correctIndex: 0,
              explanation: `Egyptian pharaohs were believed to be gods in human form — divine rulers, the intermediaries between humans and the gods. This belief shaped everything about Egyptian society: how the pharaoh was treated, how power passed across dynasties, and what kind of preparations were made when a pharaoh died.`,
            },
            {
              id: `l01-q6`,
              format: `multiple-choice`,
              question: `What did ancient Egypt give to the rest of human history that we still use today?`,
              options: [
                `Only the pyramids, which still stand as monuments`,
                `A 365-day calendar, foundational mathematics and geometry, early medical texts, writing systems, and ideas about the afterlife and justice that shaped later religions`,
                `Egyptian art styles that still dominate modern visual culture`,
                `The Egyptian language, which is still widely spoken today`,
              ],
              correctIndex: 1,
              explanation: `Egypt's legacy goes far beyond monuments. They developed a 365-day calendar divided into twelve months — the foundation of the one we still use. Their geometry influenced all later mathematics. Their medical texts were among the first ever recorded. And their ideas about the afterlife, justice, and the soul shaped religions and philosophies for thousands of years afterward.`,
            },
          ],
        },

        {
          id: `l01-realworld`,
          type: `real-world`,
          guideText: `Egyptologists — scholars who dedicate their lives to studying ancient Egypt — are still making discoveries today, more than four thousand years after the pyramids were built. New tombs are still being uncovered. New texts are still being translated. The civilization that lasted three thousand years is still revealing itself to us, slowly, piece by piece.`,
          familyAdventure: `Make an Egyptian mummy together. Use a small doll or stuffed animal. Research the mummification process — what organs were removed and stored in canopic jars, how the body was wrapped in linen, what objects were buried alongside for the afterlife. Wrap your "mummy" in strips of fabric and decorate a small box as a sarcophagus. Discuss as a family: what does the care taken with burial tell us about what Egyptians believed about death and the afterlife?`,
          creativePrompt: `Look up an ancient Egyptian hieroglyphics alphabet chart online. Find the symbols that represent the sounds in your name and write your name out in hieroglyphics — then draw a cartouche (the oval frame) around it, just as the Egyptians did for royal names. Then write a short message in hieroglyphics for a family member to decode. What does it feel like to use a four-thousand-year-old writing system?`,
        },

        {
          id: `l01-celebration`,
          type: `celebration`,
          message: `Wonderful, {name}! You now know about one of the longest-lasting civilizations in all of human history — the people of the Nile, their pharaohs, their pyramids, their writing, and the legacy they left for everyone who came after. Lyra carries these stories so they're not forgotten. Thank you for carrying them with me.`,
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
