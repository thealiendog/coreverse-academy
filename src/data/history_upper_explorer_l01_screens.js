// ─────────────────────────────────────────────────────────────────────────────
// HISTORY UE  |  L01 — Prehistory: Before Written Records
// Age band : upper_explorers (9–10)   Guide: lyra
// Standards: C3 D2.His.1.3-5 — Chronological sequences
//            C3 D2.His.10.3-5 — Compare information from different sources
//            C3 D2.His.16.3-5 — Use evidence to develop claims about the past
// CALIBRATED: UE spec v1.1 — real domain terms, em-dashes sparing
// SCOPE: 4 concepts — what prehistory is, how we know without writing
//        (archaeology), how prehistoric people lived, why prehistory matters
// VERSION: v1
// ─────────────────────────────────────────────────────────────────────────────

const HISTORY_UE_L01 = {
  ageBand: `upper_explorers`,
  subjectId: `history`,
  guide: `lyra`,

  lessons: [
    {
      id: `hw-9-10-01`,
      title: `Prehistory: Before Written Records`,
      duration: 18,
      xpReward: 75,
      badge: `time-detective`,
      badgeName: `Time Detective`,

      screens: [
        {
          id: `l01-welcome`,
          type: `welcome`,
          guideText: `Hey {name}, Lyra here. I'm your guide for History and World, and I'm an elephant for a reason. Elephants never forget, and history is the art of remembering. Today we travel WAY back. To a time BEFORE writing existed. For most of human history, nobody could write anything down. That stretch is called prehistory, and it covers tens of thousands of years. By the end of today, you'll know how we figure out what happened in a time when nobody wrote it down. Let's go.`,
          headline: `Prehistory: Before Written Records`,
          subtitle: `How we know what happened in a time before anyone could write`,
          visual: `/ue-assets/history/l01-welcome.webp`,
        },

        // ── SECTION 1 — WHAT PREHISTORY MEANS ─────────────────────────────────
        {
          id: `l01-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `What "Prehistory" Actually Means`,
          paragraphs: [
            `PREHISTORY means the time before written records existed. The first writing systems were invented around 5,000 years ago in places like ancient Mesopotamia and Egypt. Everything that happened BEFORE that, anywhere on Earth, is prehistory. That's a HUGE stretch of time. Humans (in the form we'd recognize today) have been around for about 300,000 years. Writing has only existed for about 5,000. So most of human history is actually prehistory.`,
            `That creates an interesting problem. If nobody wrote anything down, how do we know what happened? No diaries. No newspapers. No records of who was king. No descriptions of what people ate or believed. The whole story has to be reconstructed from what people LEFT BEHIND. That's where archaeology comes in.`,
          ],
          image: `/ue-assets/history/l01-s1-prehistory-timeline.webp`,
          imageCaption: `Writing is only 5,000 years old. Humans are 300,000. Most history is prehistory.`,
          vocab: [
            { word: `prehistory`,
              definition: `The time before written records existed. Covers most of human existence on Earth, from about 300,000 years ago until writing was invented around 5,000 years ago.`,
              audioPrompt: `Prehistory is the time before writing existed, {name}. Humans have been around for about 300,000 years. Writing has only been around for about 5,000. That means most of human history happened in prehistory, with nobody able to write anything down. Studying this time period requires different tools than studying the years after writing was invented. That's what today's lesson is about.` },
            { word: `oral tradition`,
              definition: `The passing down of knowledge, stories, and culture through speaking and memory rather than writing. The main way prehistoric humans preserved what they knew.`,
              audioPrompt: `Oral tradition means passing knowledge down by speaking and listening, {name}, not by writing. Before writing existed, everything humans knew — stories, history, how to make tools, what plants were safe to eat — was passed from person to person out loud. Elders taught children. Parents taught their own children. That's how knowledge survived for thousands of years without a single written word.` },
          ],
        },

        // ── SECTION 2 — HOW WE KNOW WITHOUT WRITING ──────────────────────────
        {
          id: `l01-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `How We Figure It Out: Archaeology`,
          paragraphs: [
            `ARCHAEOLOGY is the study of human history through the physical things people left behind. Tools. Pots. Bones. Buildings. Cave paintings. Trash piles. Burial sites. Each one of these is called an ARTIFACT, and each one tells a piece of the story even though no words were written. A stone arrowhead tells us they hunted. A clay pot tells us they cooked. A child's grave tells us they cared for their dead.`,
            `Archaeologists work like detectives. They dig carefully, record where everything was found, and piece together clues. The location matters as much as the object. A spearhead found near animal bones tells a different story than a spearhead found in a burial site. Every dig is a puzzle, and the answers come slowly. Modern technology like carbon dating helps too. It lets scientists figure out how old something is by measuring the radiation it gives off. It's careful, patient work, but it's how we know almost everything we know about prehistory.`,
          ],
          image: `/ue-assets/history/l01-s2-archaeology.webp`,
          imageCaption: `No writing? No problem. Archaeologists read the past from objects.`,
          vocab: [
            { word: `archaeology`,
              definition: `The study of human history through the physical objects, buildings, and remains that people left behind.`,
              audioPrompt: `Archaeology is the study of human history through the things people left behind, {name}. Tools, pots, bones, cave paintings, burial sites. Each object is called an artifact, and each one tells part of the story without using any words. Archaeologists work like detectives, piecing clues together. They use modern tools like carbon dating to figure out how old things are. Without archaeology, the entire prehistoric world would be invisible to us.` },
            { word: `carbon dating`,
              definition: `A scientific method that measures the decay of radioactive carbon in an object to determine how old it is. Used by archaeologists to date ancient artifacts and remains.`,
              audioPrompt: `Carbon dating is a scientific technique that lets archaeologists figure out the age of ancient objects, {name}. Everything that was once alive contains a type of radioactive carbon that slowly decays over time. By measuring how much is left in a bone or a piece of wood, scientists can calculate how long ago the organism died. Carbon dating transformed archaeology by giving it a reliable clock for the past.` },
          ],
        },

        // ── SECTION 3 — HOW PREHISTORIC PEOPLE LIVED ──────────────────────────
        {
          id: `l01-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `How Prehistoric People Lived`,
          paragraphs: [
            `For most of prehistory, humans lived as HUNTER-GATHERERS. That means they hunted animals for meat and gathered plants, fruits, nuts, and seeds for everything else. They lived in small groups, usually 20 to 50 people. They didn't have permanent homes. They MIGRATED, which means they moved from place to place following food, water, and weather. When the herds moved, they moved. When winter came, they headed somewhere warmer.`,
            `This way of life lasted for almost all of human existence. Hunter-gatherer groups had to know their environment incredibly well. Which plants were food and which were poison. Where animals went in different seasons. How to make fire, tools, and shelter from whatever was around. Modern people often imagine prehistoric humans as "primitive," but the skills required to survive in the wild without grocery stores or doctors or maps were enormous. They weren't simple. They were experts at the world they lived in.`,
          ],
          image: `/ue-assets/history/l01-s3-hunter-gatherers.webp`,
          imageCaption: `Small groups, moving with the seasons, deeply skilled at surviving.`,
          vocab: [
            { word: `hunter-gatherer`,
              definition: `A way of living where people hunt animals and gather wild plants for food, instead of farming. The dominant way humans lived for most of prehistory.`,
              audioPrompt: `Hunter-gatherers were people who hunted wild animals and gathered wild plants for food, {name}. Instead of farming. Instead of buying food at stores. They lived in small groups, usually 20 to 50 people, and they moved from place to place following the food. This was the way humans lived for almost all of prehistory. Not because they couldn't do better, but because it worked. They were experts in their environment in ways most modern people would find hard to match.` },
            { word: `migrate`,
              definition: `To move from one place to another, often seasonally. Prehistoric hunter-gatherers migrated to follow food sources, water, and seasonal weather rather than staying in one place.`,
              audioPrompt: `To migrate means to move from one place to another, {name}. For prehistoric hunter-gatherers, migration wasn't a choice — it was survival. When the herds of animals moved to find food, people followed. When winter came to one region, groups moved somewhere warmer. This constant movement meant they never settled permanently in one place. Migration was the rhythm of prehistoric life for most of human existence.` },
          ],
        },

        // ── SECTION 4 — WHY PREHISTORY MATTERS ────────────────────────────────
        {
          id: `l01-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Why Prehistory Still Matters`,
          paragraphs: [
            `Some people think prehistory is unimportant because it's so far away. They're wrong. Prehistory is the FOUNDATION of everything that came later. Language developed in prehistory. So did cooking. So did art (cave paintings going back 40,000 years). So did burying the dead with care, which means people had spiritual beliefs long before any religion was written down. The basics of being human were all worked out before anyone could write a single word.`,
            `Even more important: prehistory shows us how flexible humans are. The same species that hunted mammoths 20,000 years ago invented smartphones in our lifetime. We're capable of incredible change. Looking at prehistory reminds us that the way the world is right now isn't the way it has to be. Humans have lived many other ways, and we still might.`,
          ],
          image: `/ue-assets/history/l01-s4-foundations.webp`,
          imageCaption: `Language. Cooking. Art. Spirituality. All invented in prehistory.`,
          vocab: [
            { word: `artifact`,
              definition: `Any object made or used by people in the past, found by archaeologists and used as evidence about how earlier humans lived.`,
              audioPrompt: `An artifact is any object made or used by people in the past, {name}. A stone tool. A clay pot. A bone needle. A cave painting. A wooden bowl. Each artifact is a piece of evidence about how people lived. Archaeologists treat artifacts like detectives treat clues. The location matters, the condition matters, the materials matter. Together, thousands of artifacts let us reconstruct entire ways of life from before anyone wrote anything down.` },
            { word: `cave painting`,
              definition: `An artwork drawn or painted on cave walls by prehistoric humans, some dating back 40,000 years. Cave paintings provide some of our earliest evidence of prehistoric art and spiritual beliefs.`,
              audioPrompt: `Cave paintings are artworks made on cave walls by prehistoric humans, {name}. Some of them are 40,000 years old. They show animals, people, hunting scenes, and shapes that archaeologists believe had spiritual meaning. Cave paintings tell us that prehistoric humans were not just surviving — they were creating, expressing, and possibly praying. That's a deeply human thing to do, and they were doing it tens of thousands of years before writing was invented.` },
          ],
        },

        // ── INTERACTIVE GAME — Archaeology Investigation ──────────────────────
        {
          id: `l01-game`,
          type: `interactive`,
          format: `investigation`,
          guideText: `Investigation time, {name}. You're an archaeologist at four different dig sites. For each find, decide what it MOST LIKELY tells you about the people who lived there. Is the evidence about HUNTING (tools and weapons), DAILY LIFE (food, cooking, shelter), or BELIEFS (spirituality, art, burial)?\n\nOne is sneakier than it looks. Read carefully.`,
          options: [
            { id: `hunting`,    label: `Hunting Evidence`,  color: `#F87171`, description: `Tools, weapons, and animal bones that suggest hunting activity.` },
            { id: `daily-life`, label: `Daily Life`,        color: `#60A5FA`, description: `Cooking pots, food remains, shelters, everyday objects.` },
            { id: `beliefs`,    label: `Beliefs and Art`,   color: `#A78BFA`, description: `Cave paintings, burial sites, statues, jewelry, anything that hints at spirituality or art.` },
          ],
          cases: [
            {
              id: `case-1`,
              caseTitle: `Dig Site #1`,
              clues: [
                { text: `A pile of stone spearheads, carefully sharpened.` },
                { text: `Nearby: animal bones with cut marks from butchering.` },
                { text: `The bones are mostly large mammals like deer and bison.` },
              ],
              correctAnswer: `hunting`,
              realWorldExample: `Common at prehistoric hunting sites in Europe and Africa.`,
              explanation: `Sharpened weapons plus butchered animal bones is the classic hunting-site combo. These people hunted large mammals and processed them right here. The size of the bones tells us what they were going after. Pure hunting evidence.`,
            },
            {
              id: `case-2`,
              caseTitle: `Dig Site #2`,
              clues: [
                { text: `Several broken clay pots with traces of charcoal inside.` },
                { text: `A small fire pit ringed with stones.` },
                { text: `Burnt seeds, nuts, and small animal bones in the ashes.` },
              ],
              correctAnswer: `daily-life`,
              realWorldExample: `What an ancient kitchen looks like to an archaeologist.`,
              explanation: `Cooking pots with charcoal residue. A fire pit. Burnt food remains. This is a cooking site, telling us about daily life. We can even tell what they ate. Mixed diet of plants and small animals. Pure daily-life evidence.`,
            },
            {
              id: `case-3`,
              caseTitle: `Dig Site #3`,
              clues: [
                { text: `A small grave containing a child's bones.` },
                { text: `The child was buried with seashells, small carved bones, and red ochre powder around the body.` },
                { text: `The seashells came from a coast 200 miles away.` },
              ],
              correctAnswer: `beliefs`,
              realWorldExample: `Similar to real prehistoric burials found across the world.`,
              explanation: `A child buried with objects. Decorative shells brought from far away. Red ochre, a pigment often used in spiritual contexts. The care taken with the burial shows people had beliefs about death and what came after. Pure beliefs evidence. These people did not throw their dead away. They honored them.`,
            },
            {
              id: `case-4`,
              caseTitle: `Dig Site #4 — The Tricky One`,
              clues: [
                { text: `A cave with paintings of animals along the walls.` },
                { text: `Some paintings show spears flying toward the animals.` },
                { text: `In one corner, small stone figurines of people and animals are arranged in a circle.` },
              ],
              correctAnswer: `beliefs`,
              realWorldExample: `Famous cave painting sites like Lascaux in France work this way.`,
              explanation: `Tricky because the paintings show HUNTING (spears, animals). You might think hunting evidence. But these aren't actually hunting tools. They're ART. And the figurines arranged in a circle suggest ritual or ceremony. Archaeologists believe cave paintings like these had spiritual meaning, maybe to ask for a successful hunt or to honor the animals. The lesson: paintings of hunting aren't hunting tools. They're beliefs about hunting. Art and ritual are about BELIEFS, even when they show daily activities.`,
            },
          ],
        },

        // ── QUIZ ──────────────────────────────────────────────────────────────
        {
          id: `l01-quiz`,
          type: `quiz`,
          guideText: `Let's see what stuck, {name}.`,
          questions: [
            { id: `l01-q1`, format: `multiple-choice`,
              question: `What does PREHISTORY mean?`,
              options: [
                `Any history that's really old`,
                `The time before written records existed`,
                `The history of writing`,
                `Stories about dinosaurs`,
              ],
              correctIndex: 1,
              explanation: `Prehistory is the time BEFORE writing was invented. Writing started about 5,000 years ago, so everything before that, anywhere on Earth, is prehistory. That's most of human existence.` },

            { id: `l01-q2`, format: `multiple-choice`,
              question: `What is ARCHAEOLOGY?`,
              options: [
                `The study of dinosaurs`,
                `The study of human history through physical objects people left behind`,
                `The study of rocks`,
                `The study of geography`,
              ],
              correctIndex: 1,
              explanation: `Archaeology studies the past through what people left behind: tools, pots, buildings, burial sites. Each object is an artifact, and archaeologists treat them like detective clues to reconstruct how people lived.` },

            { id: `l01-q3`, format: `multiple-choice`,
              question: `How did most prehistoric people get their food?`,
              options: [
                `Farming`,
                `Hunting animals and gathering wild plants (hunter-gatherers)`,
                `Buying it at markets`,
                `Trading with other groups`,
              ],
              correctIndex: 1,
              explanation: `For most of prehistory, humans were hunter-gatherers. Farming was invented later. Hunter-gatherers lived in small groups, moved with the seasons, and were experts at finding food in the wild.` },

            { id: `l01-q4`, format: `multiple-choice`,
              question: `What is an ARTIFACT?`,
              options: [
                `A famous painting in a museum`,
                `Any object made or used by people in the past, found by archaeologists as evidence`,
                `A type of weapon`,
                `A book about history`,
              ],
              correctIndex: 1,
              explanation: `An artifact is any object from the past. A stone tool, a pot, a piece of jewelry, a bone needle. Each one is evidence. Archaeologists piece together thousands of artifacts to figure out how earlier people lived.` },

            { id: `l01-q5`, format: `true-false`,
              question: `True or false: Prehistoric humans were "primitive" and lacked real skills.`,
              correctAnswer: false,
              explanation: `False. Hunter-gatherers needed enormous skills to survive without stores, doctors, or maps. They had to know plants, animals, weather, and how to make tools, fire, and shelter from scratch. They weren't simple. They were experts at the world they lived in.` },

            { id: `l01-q6`, format: `multiple-choice`,
              question: `If archaeologists find a CHILD'S GRAVE with carved shells and ochre powder around the body, what does that suggest?`,
              options: [
                `The people lived nearby`,
                `The people had beliefs about death and cared for those they lost`,
                `The child was a king`,
                `Nothing important`,
              ],
              correctIndex: 1,
              explanation: `Burial with care, especially decorative items, suggests spiritual beliefs. People believed the child needed those things, or that the burial honored them. This is some of our earliest evidence that humans had ideas about death and afterlife long before any religion was written down.` },

            { id: `l01-q7`, format: `multiple-choice`,
              question: `Why does PREHISTORY still matter today?`,
              options: [
                `It doesn't`,
                `Because language, cooking, art, and spiritual beliefs were all developed in prehistory, and they're still part of being human today`,
                `Only historians care about it`,
                `Because it's required in school`,
              ],
              correctIndex: 1,
              explanation: `Almost everything that makes us human came from prehistory. Language. Cooking. Art (cave paintings are 40,000+ years old). Spiritual beliefs. The foundations of being human were all built before writing was even invented.` },

            { id: `l01-q8`, format: `multiple-choice`,
              question: `Archaeologists find a cave painting showing hunters chasing animals. What category of evidence is this?`,
              options: [
                `Hunting tools — the spears in the painting prove they hunted`,
                `Beliefs and art — the painting is art that probably had spiritual meaning, even though it shows hunting`,
                `Daily life — the painting is decoration`,
                `None of these`,
              ],
              correctIndex: 1,
              explanation: `Tricky one. The painting SHOWS hunting, but it's not a hunting tool. It's art. Many archaeologists believe cave paintings had spiritual meaning, maybe to ask for a successful hunt or honor the animals. The painting is evidence of BELIEFS, not hunting.` },
          ],
        },

        // ── REFLECTION ────────────────────────────────────────────────────────
        {
          id: `l01-reflection`,
          type: `reflection`,
          guideText: `Before we wrap, {name}, pick ONE question and actually answer it. Your response gets saved, and I'll remember it next time we talk.`,
          prompts: [
            { id: `r1`, text: `If archaeologists 10,000 years from now dug up your house, what three artifacts would they find that would tell them the most about how you lived?` },
            { id: `r2`, text: `What's something you do every day (eat, talk, draw, sing) that prehistoric humans probably also did?` },
            { id: `r3`, text: `Why do you think humans started painting in caves 40,000 years ago? What might they have wanted to express?` },
            { id: `r4`, text: `What would be hardest for you about living as a hunter-gatherer? What might be easier than modern life?` },
          ],
        },

        // ── REAL-WORLD ────────────────────────────────────────────────────────
        {
          id: `l01-realworld`,
          type: `real-world`,
          guideText: `Prehistoric thinking is still around us. Modern doctors talk about the importance of walking and movement, because our bodies evolved during hunter-gatherer times to move all day. Modern psychology studies why we crave sweet and fatty foods, because in prehistory those calories were rare and valuable. Even the way humans form small social groups of 20 to 50 people (think classes, sports teams, work groups) matches the size of hunter-gatherer bands. The past isn't gone. It still shapes how we live now in ways most people never realize.`,
          familyAdventure: `Family Time-Capsule Activity. Pretend an archaeologist will dig up your living room 10,000 years from now. As a family, pick ONE object that you think would tell that archaeologist the most about how you lived. Discuss why you picked it. What would it reveal about your beliefs, your daily life, your hobbies? Then pick the one object that you think would be MOST CONFUSING to a future archaeologist. Why might it be hard for them to figure out?`,
          creativePrompt: {
            intro: `Imagine you're an archaeologist 10,000 years from now, digging up a town from 2025. Write a short field report.`,
            floor: `Write at least 5 sentences. Pick three artifacts you find. Describe each one. Guess what it tells you about how the people lived.`,
            stretch: `Write 8 to 10 sentences. Cover at least five artifacts, what each tells you, and what aspects of life (hunting, daily life, beliefs) each one reveals. Include at least one artifact that confuses you.`,
            open: `Write as much as you want. Build a full archaeological report with multiple sites, cross-referenced finds, and your overall theory about what kind of people lived here.`,
            frames: [
              `My first artifact is ___.`,
              `It probably tells me that ___.`,
              `My second artifact is ___, which suggests ___.`,
              `One artifact that confused me was ___ because ___.`,
              `Overall, these people seem to have valued ___.`,
            ],
          },
        },

        // ── CELEBRATION ───────────────────────────────────────────────────────
        {
          id: `l01-celebration`,
          type: `celebration`,
          message: `Great work, {name}. You can now explain what prehistory is, understand how archaeology lets us study a time before writing, name how hunter-gatherers lived, and connect prehistoric humans to the modern world. Next lesson: one of the biggest changes in human history. The moment people stopped moving around and started farming, and how that single shift changed everything. See you there. — Lyra.`,
          badge: `time-detective`,
          badgeName: `Time Detective`,
          xpEarned: 75,
        },
      ],
    },
  ],
};

export default HISTORY_UE_L01;

// ─── Dev asset check ──────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const screens = HISTORY_UE_L01.lessons[0].screens;
  const mags = screens.filter(s => s.type === 'magazine').length;
  const game = screens.find(s => s.type === 'interactive')?.cases?.length ?? 0;
  const quiz = screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  const refl = screens.find(s => s.type === 'reflection')?.prompts?.length ?? 0;
  const totalVocab = screens.filter(s => s.type === 'magazine').reduce((sum, s) => sum + (s.vocab?.length || 0), 0);
  console.log(`[LESSON-HISTORY-UE-L01 v1] Loaded with ${mags} magazine sections, ${totalVocab} vocab terms, ${game} game cases, ${quiz} quiz Qs, ${refl} reflection prompts`);
}
