// ─────────────────────────────────────────────────────────────────────────────
// HISTORY UE  |  L03 — Ancient Mesopotamia: The First Civilization
// Age band : upper_explorers (9–10)   Guide: lyra
// Standards: C3 D2.His.2.3-5 — Compare life across time periods
//            C3 D2.His.3.3-5 — Generate questions about individuals and groups
//            C3 D2.Geo.5.3-5 — Explain how environment shapes culture
// CALIBRATED: UE spec v1.1 — real domain terms, em-dashes sparing
// SCOPE: 4 concepts — geography of Mesopotamia, the invention of writing,
//        city-states and government, the legacy
// VERSION: v1
// ─────────────────────────────────────────────────────────────────────────────

const HISTORY_UE_L03 = {
  ageBand: `upper_explorers`,
  subjectId: `history`,
  guide: `lyra`,

  lessons: [
    {
      id: `hw-9-10-03`,
      title: `Ancient Mesopotamia: The First Civilization`,
      duration: 18,
      xpReward: 75,
      badge: `mesopotamia-explorer`,
      badgeName: `Mesopotamia Explorer`,

      screens: [
        {
          id: `l03-welcome`,
          type: `welcome`,
          guideText: `Hey {name}, Lyra here. Last lesson, farming let humans settle in one place for the first time. Today we visit the place where settlements first became something bigger: cities. Mesopotamia, in modern-day Iraq, is called the "cradle of civilization" because so many things were invented here first. Writing. Written laws. The wheel. Math with base 60 (still how we tell time today). By the end, you'll understand why this stretch of land between two rivers shaped everything that came after. Let's go.`,
          headline: `Ancient Mesopotamia`,
          subtitle: `Where civilization itself was invented`,
          visual: `/ue-assets/history/l03-welcome.webp`,
        },

        {
          id: `l03-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Between Two Rivers`,
          paragraphs: [
            `MESOPOTAMIA is a Greek word meaning "between rivers." Those rivers are the Tigris and the Euphrates, both flowing through what's now Iraq. The land between them was incredibly fertile. The rivers flooded each year and left behind rich soil perfect for farming. Around 5,000 years ago, the people living there (called Sumerians) became so successful at agriculture they started building something new. Real cities.`,
            `Sumer wasn't one big country. It was a collection of CITY-STATES, which means independent cities, each with its own ruler, its own walls, and its own god. Cities like Ur, Uruk, and Lagash competed with each other for power, traded with each other, and sometimes went to war. Mesopotamia is the first place in history where we see this kind of urban life. Thousands of people living, working, and worshipping in one place.`,
          ],
          image: `/ue-assets/history/l03-s1-rivers.webp`,
          imageCaption: `Two rivers. Rich soil. Cities. Civilization started here.`,
          vocab: [
            { word: `civilization`,
              definition: `A complex society with cities, writing, government, social classes, and specialized work. Mesopotamia is usually considered the first.`,
              audioPrompt: `A civilization is a complex society with cities, writing, government, and specialized jobs, {name}. Not every group of people is a civilization. Hunter-gatherer tribes weren't, even though they were highly skilled. Civilizations have written records, organized governments, and people doing many different specialized jobs. Mesopotamia is usually called the first true civilization, around 5,000 years ago.` },
            { word: `Sumer`,
              definition: `The ancient region of southern Mesopotamia where some of the world's first cities developed, including Ur, Uruk, and Lagash. The people were called Sumerians.`,
              audioPrompt: `Sumer was the southern part of ancient Mesopotamia, {name}. It's where some of the world's first real cities appeared, around 5,000 years ago. The people who lived there were called Sumerians, and they invented writing, built ziggurats, and organized some of the first city-states in history. When historians talk about Mesopotamia as the cradle of civilization, they often specifically mean Sumer.` },
          ],
        },

        {
          id: `l03-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `The Invention of Writing`,
          paragraphs: [
            `The Sumerians invented one of the most important tools in human history. WRITING. Their writing system is called CUNEIFORM, which means "wedge-shaped." They used a sharpened reed to press wedge-shaped marks into wet clay tablets. Once the clay dried in the sun, the writing lasted basically forever. We still have Sumerian tablets from 5,000 years ago that can be read today.`,
            `Writing started for a boring reason. Accounting. Farmers needed to track how much grain they stored, who owed what to whom, and how much went into the temple. But once writing existed, people used it for everything. Stories. Laws. Letters. Poetry. The oldest written story we have, the Epic of Gilgamesh, is from Mesopotamia. Without writing, history could only be remembered as long as someone was alive to remember it. With writing, knowledge could survive for thousands of years.`,
          ],
          image: `/ue-assets/history/l03-s2-cuneiform.webp`,
          imageCaption: `Wedge-shaped marks pressed into wet clay. Writing began here.`,
          vocab: [
            { word: `cuneiform`,
              definition: `The Sumerian writing system. Wedge-shaped marks pressed into wet clay tablets. The first known writing system in human history.`,
              audioPrompt: `Cuneiform is the world's first known writing system, {name}. The Sumerians used a sharpened reed to press wedge-shaped marks into wet clay tablets. Once the clay dried, the writing lasted basically forever. Cuneiform was used for accounting first, then for laws, stories, and poetry. The oldest story we still have, the Epic of Gilgamesh, was written in cuneiform. Without this invention, history as we know it wouldn't exist.` },
            { word: `scribe`,
              definition: `A trained professional who could read and write. In ancient Mesopotamia, scribes kept government records, copied important texts, and held a prestigious role in society.`,
              audioPrompt: `A scribe was a professional writer in ancient Mesopotamia, {name}. Someone who had trained for years to master cuneiform. Scribes kept government records, tracked grain supplies, wrote down laws, and copied important texts. In a world where most people couldn't read or write, scribes were essential. Mesopotamians even had formal schools called tablet houses where students spent years learning to become scribes.` },
          ],
        },

        {
          id: `l03-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Written Laws and Real Government`,
          paragraphs: [
            `Around 1750 BCE, a Babylonian king named Hammurabi did something remarkable. He had hundreds of laws carved into a huge stone pillar, in plain view, so everyone could see them. This is called HAMMURABI'S CODE. It's one of the oldest written law codes in history. Some of the punishments seem harsh by modern standards ("an eye for an eye" comes from here), but the IDEA was revolutionary. Justice should be written down. Rules should apply to everyone. People should know what the laws are before they're punished by them.`,
            `Before written laws, what was right or wrong depended on whoever was in charge that day. Written laws made everything more predictable. People could plan their lives knowing what was allowed and what wasn't. Every modern legal system, from the U.S. Constitution to traffic laws, traces back to this Mesopotamian idea: write the rules down and apply them to everyone.`,
          ],
          image: `/ue-assets/history/l03-s3-hammurabi.webp`,
          imageCaption: `Laws carved in stone for everyone to see. Justice became predictable.`,
          vocab: [
            { word: `city-state`,
              definition: `An independent city with its own government, walls, and territory. Mesopotamia had many city-states like Ur, Uruk, and Lagash, each with its own ruler.`,
              audioPrompt: `A city-state is an independent city that governs itself, {name}. It has its own ruler, its own laws, sometimes its own army and gods. Mesopotamia had many city-states, like Ur, Uruk, and Babylon. They traded with each other, competed with each other, and sometimes went to war. City-states are different from modern countries because they're just one city, not a big territory.` },
            { word: `Hammurabi's Code`,
              definition: `One of the oldest written law codes in history, created by the Babylonian king Hammurabi around 1750 BCE. Carved on a public stone pillar so all citizens could see the laws.`,
              audioPrompt: `Hammurabi's Code is one of the oldest written sets of laws in human history, {name}. Created by Babylonian king Hammurabi around 1750 BCE. He had hundreds of laws carved on a tall stone pillar in plain view for everyone to see. Before this, what was legal depended on whoever was in charge. Written laws made justice predictable. People could know the rules before being punished by them. Every modern legal system traces back to this idea.` },
          ],
        },

        {
          id: `l03-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Mesopotamia's Lasting Legacy`,
          paragraphs: [
            `Look at a modern clock. Sixty seconds in a minute, 60 minutes in an hour, 360 degrees in a circle. That's the SUMERIAN base-60 number system, still in use today. The wheel. The plow. Sailboats. School systems. Irrigation canals. Maps. All invented or refined in Mesopotamia. We're still using their inventions every single day, mostly without realizing it.`,
            `Their civilization eventually faded. Empires rose and fell. Babylonians replaced Sumerians, then Assyrians, then Persians. But the IDEAS that started in Mesopotamia spread to Egypt, to Greece, to Rome, to every civilization that came after. The first true civilization didn't disappear when its cities collapsed. It passed its inventions along, and humans have been building on them for 5,000 years.`,
          ],
          image: `/ue-assets/history/l03-s4-legacy.webp`,
          imageCaption: `Time, wheels, writing, law, schools. All Mesopotamian.`,
          vocab: [
            { word: `ziggurat`,
              definition: `A massive stepped pyramid temple in ancient Mesopotamia, where people worshipped their gods. Towered over the city, sometimes 200+ feet tall.`,
              audioPrompt: `A ziggurat is a massive stepped pyramid temple, {name}. Ancient Mesopotamians built them in the center of their cities, sometimes over 200 feet tall. The top held a shrine to the city's main god. Priests climbed the steps to perform ceremonies. Ziggurats were the religious AND visual center of every Mesopotamian city. Even today, ruins of these temples still stand in modern Iraq.` },
            { word: `base-60`,
              definition: `The Sumerian numbering system built around the number 60, still used today. It's why there are 60 seconds in a minute, 60 minutes in an hour, and 360 degrees in a circle.`,
              audioPrompt: `Base-60 is the Sumerian number system, {name}. Instead of grouping numbers in tens like we usually do, they grouped things in sixties. That's why there are 60 seconds in a minute, 60 minutes in an hour, and 360 degrees in a full circle. Every time you look at a clock, you're using a system invented in Mesopotamia over 5,000 years ago. Most people never realize it.` },
          ],
        },

        {
          id: `l03-game`,
          type: `interactive`,
          format: `investigation`,
          guideText: `Investigation time, {name}. You're an archaeologist at four Mesopotamian sites. For each find, decide what it tells you most about: GOVERNMENT (laws, rulers, organization), WRITING & LEARNING (cuneiform, scribes, knowledge), or RELIGION (gods, temples, ceremonies)?\n\nOne is sneakier than it looks.`,
          options: [
            { id: `government`,       label: `Government`,         color: `#34D399`, description: `Laws, rulers, military, taxes, organization of society.` },
            { id: `writing-learning`, label: `Writing & Learning`, color: `#60A5FA`, description: `Cuneiform tablets, scribe schools, written records, libraries.` },
            { id: `religion`,         label: `Religion`,           color: `#A78BFA`, description: `Gods, temples, ziggurats, religious ceremonies, priests.` },
          ],
          cases: [
            {
              id: `case-1`,
              caseTitle: `Find #1`,
              clues: [
                { text: `A 7-foot black stone pillar covered in cuneiform writing.` },
                { text: `The text begins: "If a man steals an ox..." and goes on for hundreds of rules.` },
                { text: `At the top, a carved image of King Hammurabi receiving the laws from a god.` },
              ],
              correctAnswer: `government`,
              realWorldExample: `Hammurabi's Code, currently displayed at the Louvre in Paris.`,
              explanation: `A list of laws with punishments. A king at the top. Rules organized for society. This is pure government evidence. The carving showing Hammurabi receiving the laws from a god mixes religion in too, but the SUBSTANCE of the pillar is law.`,
            },
            {
              id: `case-2`,
              caseTitle: `Find #2`,
              clues: [
                { text: `Hundreds of small clay tablets covered in cuneiform.` },
                { text: `Many tablets contain practice writing by students. Some are signed by teachers.` },
                { text: `The building they were found in had small rooms arranged like a modern classroom.` },
              ],
              correctAnswer: `writing-learning`,
              realWorldExample: `A real Mesopotamian "tablet house" (school for scribes).`,
              explanation: `Student tablets. Teacher signatures. Classroom layout. This is a school. Mesopotamians had formal schools to train scribes, who were the people who could read and write. Becoming a scribe was a prestigious job. The school system as a concept started here.`,
            },
            {
              id: `case-3`,
              caseTitle: `Find #3`,
              clues: [
                { text: `A massive stepped tower 220 feet tall.` },
                { text: `Inside the small chamber at the top: statues, offerings, and animal bones from ceremonies.` },
                { text: `Carved tablets describe daily offerings made by priests to a god named Anu.` },
              ],
              correctAnswer: `religion`,
              realWorldExample: `Description of a ziggurat at Uruk or similar Mesopotamian city.`,
              explanation: `Stepped tower with a shrine on top. Religious ceremonies. Priests making offerings to a specific god. This is pure religion. Every Mesopotamian city had a ziggurat in its center, often the tallest building for hundreds of miles around.`,
            },
            {
              id: `case-4`,
              caseTitle: `Find #4 — The Tricky One`,
              clues: [
                { text: `Hundreds of clay tablets stacked in a stone room.` },
                { text: `The tablets contain records of grain stored, taxes collected, and lists of soldiers in the king's army.` },
                { text: `They're organized neatly and dated. Some are clearly the work of professional scribes.` },
              ],
              correctAnswer: `government`,
              realWorldExample: `Royal archives like those found at Nineveh and other ancient capitals.`,
              explanation: `Tricky because cuneiform writing makes this look like a learning find. But READ the content. Grain inventories. Tax records. Army rosters. This isn't a school or a library. It's a government archive. Lesson: writing was invented partly so governments could keep track of things. The presence of writing doesn't always mean learning is what's happening. Sometimes it means the government is at work.`,
            },
          ],
        },

        {
          id: `l03-quiz`,
          type: `quiz`,
          guideText: `Let's see what stuck, {name}.`,
          questions: [
            { id: `l03-q1`, format: `multiple-choice`,
              question: `What does the word MESOPOTAMIA mean?`,
              options: [
                `"Hot place"`,
                `"Between rivers"`,
                `"First place"`,
                `"Land of kings"`,
              ],
              correctIndex: 1,
              explanation: `Mesopotamia is Greek for "between rivers." Specifically, the Tigris and the Euphrates rivers in modern-day Iraq. The fertile soil between these rivers made the first cities possible.` },

            { id: `l03-q2`, format: `multiple-choice`,
              question: `What is CIVILIZATION?`,
              options: [
                `Any group of people`,
                `A complex society with cities, writing, government, and specialized jobs`,
                `Just a fancy word for country`,
                `A type of farming`,
              ],
              correctIndex: 1,
              explanation: `A civilization has cities, writing, government, social classes, and specialized work. Mesopotamia is usually considered the first true civilization, around 5,000 years ago.` },

            { id: `l03-q3`, format: `multiple-choice`,
              question: `What was CUNEIFORM?`,
              options: [
                `A type of weapon`,
                `The Sumerian writing system, made of wedge-shaped marks pressed into clay`,
                `A religious building`,
                `A kind of pottery`,
              ],
              correctIndex: 1,
              explanation: `Cuneiform was the world's first known writing system. Wedge-shaped marks pressed into wet clay. The clay dried hard and lasted thousands of years.` },

            { id: `l03-q4`, format: `multiple-choice`,
              question: `Why was HAMMURABI'S CODE such a big deal?`,
              options: [
                `It was carved in stone`,
                `It was one of the first WRITTEN law codes — meaning rules applied to everyone and people could know what they were ahead of time`,
                `It was the longest list of rules`,
                `It only applied to kings`,
              ],
              correctIndex: 1,
              explanation: `Before written laws, justice depended on whoever was in charge that day. Hammurabi's Code made laws PREDICTABLE and PUBLIC. Every modern legal system traces back to this idea.` },

            { id: `l03-q5`, format: `true-false`,
              question: `True or false: Mesopotamia was one big empire ruled by a single king.`,
              correctAnswer: false,
              explanation: `False. Mesopotamia was a collection of CITY-STATES like Ur, Uruk, and Lagash. Each had its own ruler, walls, and god. They competed and traded with each other, but they weren't one big country.` },

            { id: `l03-q6`, format: `multiple-choice`,
              question: `When you look at a clock and see 60 seconds in a minute and 60 minutes in an hour, you're using a system invented by:`,
              options: [
                `The Romans`,
                `The Sumerians (Mesopotamians)`,
                `The Greeks`,
                `Modern scientists`,
              ],
              correctIndex: 1,
              explanation: `The Sumerian base-60 number system is still how we measure time and angles 5,000 years later. Every clock you look at is using their math.` },

            { id: `l03-q7`, format: `multiple-choice`,
              question: `What was a ZIGGURAT?`,
              options: [
                `A type of king`,
                `A massive stepped pyramid temple at the center of Mesopotamian cities`,
                `A weapon`,
                `A grain storage building`,
              ],
              correctIndex: 1,
              explanation: `Ziggurats were enormous stepped temples, sometimes over 200 feet tall. They held shrines to the city's main god at the top. They were the visual and religious center of every Mesopotamian city.` },

            { id: `l03-q8`, format: `multiple-choice`,
              question: `Why was Mesopotamian writing FIRST used?`,
              options: [
                `To write poetry`,
                `For accounting: tracking grain stores, debts, and temple offerings`,
                `To send letters`,
                `For religious ceremonies`,
              ],
              correctIndex: 1,
              explanation: `Writing started for the boring reason of keeping track of stuff. Farmers and temple officials needed records of grain, debts, and offerings. Once writing existed, people used it for stories, laws, and poetry. But it began with accounting.` },
          ],
        },

        {
          id: `l03-reflection`,
          type: `reflection`,
          guideText: `Before we wrap, {name}, pick ONE question and actually answer it. Your response gets saved, and I'll remember it next time we talk.`,
          prompts: [
            { id: `r1`, text: `Imagine living in a world without writing. What's one thing you'd want to invent first if you'd just created the first writing system?` },
            { id: `r2`, text: `Hammurabi made laws PUBLIC by carving them on stone for everyone to see. Why might that have been so important compared to laws kept secret by rulers?` },
            { id: `r3`, text: `Mesopotamia invented base-60 math, the wheel, and writing. Which of these affects YOUR life most today?` },
            { id: `r4`, text: `What's one Mesopotamian invention you wish hadn't happened? What about one you're glad they figured out?` },
          ],
        },

        {
          id: `l03-realworld`,
          type: `real-world`,
          guideText: `Mesopotamia isn't just an ancient place. Almost every system you use today started there in some form. Clocks. Math. School. Written laws. Cities. Religion organized into buildings. Even the basic concept of "I owe you" written on paper traces back to clay tablets in Sumerian temples. When historians say Mesopotamia is the "cradle of civilization," they mean it almost literally: a huge amount of modern life was first invented or worked out in this small region between two rivers.`,
          familyAdventure: `Family Cuneiform Night. Get some clay or play-dough and a chopstick or pencil. Try writing a short message in cuneiform style (wedge-shaped marks). Then trade messages and try to read each other's. Notice how slow and difficult it is. Now imagine doing your homework, your job, and your government records this way every day. You'll have new respect for how big a deal alphabets were when they came along.`,
          creativePrompt: {
            intro: `You're a scribe in ancient Mesopotamia. Write a clay tablet entry about your day.`,
            floor: `Write at least 5 sentences. Describe your job, what you write each day, who you work for, and one interesting thing that happened.`,
            stretch: `Write 8 to 10 sentences. Include daily life details, what you've recorded that day, a problem you witnessed, and what you think of the new written laws.`,
            open: `Write as much as you want. Build a full first-person account that uses real Mesopotamian context: rulers, temples, gods, work life, and how writing is changing your world.`,
            frames: [
              `My name is ___, and I am a scribe in the city of ___.`,
              `Today I wrote down ___.`,
              `The most important record I made was ___.`,
              `Something interesting that happened was ___.`,
              `What I think of the new written laws is ___.`,
            ],
          },
        },

        {
          id: `l03-celebration`,
          type: `celebration`,
          message: `Great work, {name}. You can now explain why Mesopotamia is called the cradle of civilization, recognize cuneiform writing, understand the importance of Hammurabi's Code, and connect Mesopotamian inventions to modern life. Next lesson: we travel to ancient India, where some of the world's oldest religious texts, the practice of yoga, and even the number zero were all developed. See you there. — Lyra.`,
          badge: `mesopotamia-explorer`,
          badgeName: `Mesopotamia Explorer`,
          xpEarned: 75,
        },
      ],
    },
  ],
};

export default HISTORY_UE_L03;

// ─── Dev asset check ──────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const screens = HISTORY_UE_L03.lessons[0].screens;
  const mags = screens.filter(s => s.type === 'magazine').length;
  const game = screens.find(s => s.type === 'interactive')?.cases?.length ?? 0;
  const quiz = screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  const refl = screens.find(s => s.type === 'reflection')?.prompts?.length ?? 0;
  const totalVocab = screens.filter(s => s.type === 'magazine').reduce((sum, s) => sum + (s.vocab?.length || 0), 0);
  console.log(`[LESSON-HISTORY-UE-L03 v1] Loaded with ${mags} magazine sections, ${totalVocab} vocab terms, ${game} game cases, ${quiz} quiz Qs, ${refl} reflection prompts`);
}
