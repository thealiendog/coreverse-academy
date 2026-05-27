// ─────────────────────────────────────────────────────────────────────────────
// HISTORY UE  |  L02 — The Agricultural Revolution
// Age band : upper_explorers (9–10)   Guide: lyra
// Standards: C3 D2.His.2.3-5 — Compare life across time periods
//            C3 D2.His.14.3-5 — Explain probable causes and effects
//            C3 D2.His.16.3-5 — Use evidence to develop claims
// CALIBRATED: UE spec v1.1 — real domain terms, em-dashes sparing
// SCOPE: 4 concepts — what the Ag Revolution was, how farming changed life,
//        the costs and benefits, why it mattered for everything after
// VERSION: v1
// ─────────────────────────────────────────────────────────────────────────────

const HISTORY_UE_L02 = {
  ageBand: `upper_explorers`,
  subjectId: `history`,
  guide: `lyra`,

  lessons: [
    {
      id: `hw-9-10-02`,
      title: `The Agricultural Revolution`,
      duration: 18,
      xpReward: 75,
      badge: `farming-pioneer`,
      badgeName: `Farming Pioneer`,

      screens: [
        {
          id: `l02-welcome`,
          type: `welcome`,
          guideText: `Hey {name}, Lyra here. Last lesson you met the hunter-gatherers, who roamed for tens of thousands of years. Today we look at the single biggest change humans ever made. About 12,000 years ago, in different places around the world, people figured out how to PLANT seeds and RAISE animals. They stopped moving. They built homes that stayed put. That shift created villages, then cities, then everything we call civilization. It also created problems we still deal with today. Let's go.`,
          headline: `The Agricultural Revolution`,
          subtitle: `The day humans stopped moving and started farming`,
          visual: `/ue-assets/history/l02-welcome.webp`,
        },

        {
          id: `l02-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `What the Agricultural Revolution Actually Was`,
          paragraphs: [
            `Around 12,000 years ago, humans started doing something completely new. Instead of finding wild plants and hunting wild animals, some groups began PLANTING seeds on purpose and RAISING animals from babies. This is called AGRICULTURE, or farming. The shift happened in many different parts of the world independently. The Middle East (called the Fertile Crescent). China. Mexico. Africa. Each one figured it out on their own.`,
            `This wasn't just a small change. It was the biggest transformation in human history. For 290,000 years, humans had been hunter-gatherers. Then, in about 2,000 years, farming spread across continents and changed how almost every human lived. Historians sometimes call this the NEOLITHIC REVOLUTION (Neolithic means "new stone age"). The first stage of the modern world started here.`,
          ],
          image: `/ue-assets/history/l02-s1-revolution.webp`,
          imageCaption: `Twelve thousand years ago. Humans went from finding food to growing it.`,
          vocab: [
            { word: `agriculture`,
              definition: `The practice of growing crops and raising animals for food. Began about 12,000 years ago and changed human life completely.`,
              audioPrompt: `Agriculture is farming, {name}. Growing plants for food and raising animals. It started about 12,000 years ago in several places around the world, including the Middle East, China, Mexico, and parts of Africa. Each region figured it out on its own. The shift from hunting and gathering to agriculture is one of the most important changes in all of human history.` },
            { word: `Neolithic Revolution`,
              definition: `Another name for the Agricultural Revolution. "Neolithic" means "new stone age." The period when humans transitioned from hunting and gathering to farming, beginning around 12,000 years ago.`,
              audioPrompt: `The Neolithic Revolution is another name for the Agricultural Revolution, {name}. Neolithic means new stone age. It refers to the time when humans made the huge shift from hunting and gathering to farming. Historians call it a revolution because it changed almost everything about how people lived. Where they slept. What they ate. How they organized themselves. Few changes in all of human history were this big.` },
          ],
        },

        {
          id: `l02-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Farming Changed Everything`,
          paragraphs: [
            `Once people could grow their own food, they didn't need to move with the herds. They built permanent SETTLEMENTS, which are villages or towns that stay put. Some of the oldest known settlements like Çatalhöyük (in modern Turkey) had hundreds of people living together in mud-brick houses about 9,000 years ago. Before farming, no group of humans had ever lived in one place for that long.`,
            `Farming also created something humans had never had before: SURPLUS. When you grow food, you often grow more than you need that day. Extra food can be stored. Stored food means some people don't have to spend all their time finding food. They can specialize. They can become potters, weavers, builders, healers, priests, leaders. Cities, governments, and trade ALL started because farming gave humans the gift of extra time.`,
          ],
          image: `/ue-assets/history/l02-s2-settlements.webp`,
          imageCaption: `Permanent homes. Stored food. Extra time. Everything changed from here.`,
          vocab: [
            { word: `settlement`,
              definition: `A village or town where people live permanently in one place, rather than moving around. Became possible only because of farming.`,
              audioPrompt: `A settlement is a place where people live permanently, {name}. Houses, fields, paths, sometimes walls. Before farming, no group of humans had ever lived in one spot for very long. Farming changed that. The first settlements appeared about 10,000 years ago and grew into the first villages, then the first towns, then eventually the first cities. Every modern town in the world traces back to this shift.` },
            { word: `specialization`,
              definition: `Focusing on one particular job or skill instead of doing everything yourself. Became possible when farming surplus freed some people from finding food every day.`,
              audioPrompt: `Specialization means focusing on one job or skill, {name}. Before farming, almost everyone had to spend their time finding food. Once there was surplus, some people were freed to do something else entirely. A potter. A weaver. A healer. A leader. Specialization is what made cities possible. You can't have a city without people who specialize. And you can't have specialization without surplus food to feed them.` },
          ],
        },

        {
          id: `l02-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `The Hidden Costs of Farming`,
          paragraphs: [
            `For a long time, people assumed farming was just BETTER than hunter-gathering. Recent studies suggest the picture is more complicated. Early farmers actually worked LONGER hours than hunter-gatherers. Their bones show they were SHORTER and SICKER than their hunter-gatherer ancestors. Eating the same few crops (wheat, rice, corn) made their teeth worse. Living close to animals spread new diseases like flu and smallpox.`,
            `Farming also created INEQUALITY for the first time. When you can store grain, some people can store MORE grain than others. That created rich and poor. Land became something to own and fight over. Soldiers and rulers appeared because surplus needed protecting. Hunter-gatherer societies, by contrast, were mostly EQUAL because nobody could really store much. Farming gave humans cities and writing and civilization. It also gave us inequality, war over resources, and many diseases we still have. Both things are true at once.`,
          ],
          image: `/ue-assets/history/l02-s3-hidden-costs.webp`,
          imageCaption: `Farming gave humans civilization. It also brought inequality and disease.`,
          vocab: [
            { word: `surplus`,
              definition: `Extra food or supplies beyond what's immediately needed. Surplus allowed some people to do jobs other than finding food, leading to specialization, trade, and cities.`,
              audioPrompt: `Surplus is extra food beyond what's needed today, {name}. When farmers grew more than they ate, the rest could be stored. Stored food meant some people didn't have to hunt or gather every single day. They could become potters or builders or scholars or leaders. Without surplus, there could be no specialization. Without specialization, no cities, no civilization. Surplus is the secret behind almost everything that came after farming.` },
            { word: `inequality`,
              definition: `Unequal distribution of wealth, power, or resources among people. Farming created inequality for the first time because stored grain allowed some people to accumulate more than others.`,
              audioPrompt: `Inequality means some people having much more than others, {name}. Before farming, hunter-gatherers couldn't easily hoard anything because they had to keep moving. Farming changed that. When grain could be stored, some people stored more than others. Some owned more land. Some had more power. That's when rich and poor first appeared. Inequality wasn't part of being human from the start. It was invented when farming was.` },
          ],
        },

        {
          id: `l02-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Why This Still Matters Today`,
          paragraphs: [
            `Every modern food system traces back to the Agricultural Revolution. The wheat in bread, the rice in dinner, the corn in tortillas, the cows that give milk. All of those were DOMESTICATED by ancient farmers thousands of years ago. We're still eating the discoveries of people who lived 10,000 years ago.`,
            `But it's not just food. The fact that we live in cities, work specialized jobs, and have governments all came from this one shift. Even today's challenges, climate change linked to farming and meat production, public health emergencies from densely populated areas, inequality, can be traced back to choices humans made when they first stopped wandering. Understanding the Agricultural Revolution isn't just about ancient history. It's about understanding how the world we live in started.`,
          ],
          image: `/ue-assets/history/l02-s4-still-matters.webp`,
          imageCaption: `Modern food. Modern cities. Modern problems. All started here.`,
          vocab: [
            { word: `domestication`,
              definition: `Slowly changing wild plants and animals through breeding so they become useful for humans. Examples: wild grass became wheat, wild dogs became pets, wild cattle became cows.`,
              audioPrompt: `Domestication is the slow process of changing wild plants or animals to be useful for humans, {name}. It takes many generations. Wild grass with hard, scattered seeds was bred over centuries into wheat with big, easy-to-collect seeds. Wild wolves became dogs. Wild cattle became cows. Every farm animal and crop you've ever seen is the result of thousands of years of careful breeding by ancient farmers.` },
            { word: `crop`,
              definition: `A plant grown by farmers for food or other uses. Ancient farmers domesticated wild plants into the crops we still eat today, like wheat, rice, corn, and potatoes.`,
              audioPrompt: `A crop is a plant that people grow on purpose for food or other uses, {name}. Wheat, rice, corn, potatoes, beans. Every crop we eat today was once a wild plant that ancient farmers slowly changed through domestication. The crops we rely on most were all figured out by farmers over 5,000 years ago. Modern agriculture builds on thousands of years of that work.` },
          ],
        },

        {
          id: `l02-game`,
          type: `interactive`,
          format: `investigation`,
          guideText: `Investigation time, {name}. Four ancient sites. For each one, decide what way of life is being shown: HUNTER-GATHERER (still moving and finding food), EARLY FARMING SOCIETY (just started farming, mixed life), or ESTABLISHED FARMING CIVILIZATION (full settlement, surplus, specialization)?\n\nOne is sneakier than it looks. Read carefully.`,
          options: [
            { id: `hunter-gatherer`,          label: `Hunter-Gatherer`,          color: `#F87171`, description: `Still moving with the seasons. Hunting and gathering wild food. Small groups. No permanent buildings.` },
            { id: `early-farming`,            label: `Early Farming Society`,    color: `#FBBF24`, description: `Mix of farming and gathering. Small permanent homes. Just learning to grow food.` },
            { id: `established-civilization`, label: `Established Civilization`, color: `#34D399`, description: `Full village or town. Stored grain. Specialized workers (potters, weavers, leaders). Inequality starting.` },
          ],
          cases: [
            {
              id: `case-1`,
              caseTitle: `Site #1: A camp in northern Europe, 15,000 years ago`,
              clues: [
                { text: `Temporary shelters made of animal hides over wooden poles.` },
                { text: `Spearheads. Animal bones from many different species.` },
                { text: `Charcoal from fires but no signs of stored food. Group of about 30 people.` },
              ],
              correctAnswer: `hunter-gatherer`,
              realWorldExample: `Classic late-Paleolithic hunter-gatherer site.`,
              explanation: `Temporary shelters. Hunting tools. Many animal species (because they took whatever they could find). No stored food. Group of 30. Pure hunter-gatherer society. Farming hadn't been invented yet.`,
            },
            {
              id: `case-2`,
              caseTitle: `Site #2: A town in Mesopotamia, 6,000 years ago`,
              clues: [
                { text: `Several hundred people living in mud-brick houses arranged in streets.` },
                { text: `Large grain storage buildings filled with wheat and barley.` },
                { text: `Specialized workshops for pottery, weaving, and metalwork. A temple in the center. Some houses much bigger than others.` },
              ],
              correctAnswer: `established-civilization`,
              realWorldExample: `Looks like an early Mesopotamian city, similar to Uruk.`,
              explanation: `Hundreds of people. Permanent homes. Stored surplus. Specialized workers. Religion (temple). Inequality (big and small houses). All the hallmarks of an established farming civilization. Cities like this one became the foundation for everything that came next.`,
            },
            {
              id: `case-3`,
              caseTitle: `Site #3: A village in the Fertile Crescent, 10,000 years ago`,
              clues: [
                { text: `Small cluster of round mud houses. Maybe 50 people.` },
                { text: `Wild seeds found alongside cultivated seeds. Sheep bones from animals that look halfway between wild and domesticated.` },
                { text: `Hunting tools AND simple farming tools. No major grain storage yet.` },
              ],
              correctAnswer: `early-farming`,
              realWorldExample: `Similar to early Natufian or Pre-Pottery Neolithic sites.`,
              explanation: `Small permanent village. Mix of wild and farmed food. Animals halfway through domestication. Both hunting AND farming tools. This is the early farming stage, halfway between hunter-gatherer and full civilization. Real history rarely jumps from one stage to another. It transitions slowly.`,
            },
            {
              id: `case-4`,
              caseTitle: `Site #4: A site in the Middle East, 14,000 years ago — The Tricky One`,
              clues: [
                { text: `A semi-permanent settlement with stone buildings.` },
                { text: `People lived here year-round for several generations.` },
                { text: `BUT all the food remains are from WILD plants and WILD animals. No domesticated crops yet.` },
              ],
              correctAnswer: `hunter-gatherer`,
              realWorldExample: `The Natufian culture in the Middle East. Famous "settled hunter-gatherers."`,
              explanation: `Tricky because the people lived in PERMANENT buildings, which usually means farming. But look at the food: all wild. No domesticated plants or animals. The Natufians were one of the few cultures to settle BEFORE inventing farming. The lesson: history doesn't always go in a neat order. Sometimes people settle first, then invent farming, not the other way around. Real archaeology is full of cases like this.`,
            },
          ],
        },

        {
          id: `l02-quiz`,
          type: `quiz`,
          guideText: `Let's see what stuck, {name}.`,
          questions: [
            { id: `l02-q1`, format: `multiple-choice`,
              question: `When did the Agricultural Revolution begin?`,
              options: [
                `About 100 years ago`,
                `About 12,000 years ago`,
                `About 1 million years ago`,
                `About 1,000 years ago`,
              ],
              correctIndex: 1,
              explanation: `Around 12,000 years ago, humans in several places independently figured out farming. The Middle East, China, Mexico, and Africa all developed agriculture separately. This is one of the most important dates in human history.` },

            { id: `l02-q2`, format: `multiple-choice`,
              question: `What does AGRICULTURE mean?`,
              options: [
                `Hunting wild animals`,
                `Growing crops and raising animals for food`,
                `Building cities`,
                `Writing on clay tablets`,
              ],
              correctIndex: 1,
              explanation: `Agriculture is farming. Growing food on purpose, instead of finding it in the wild. It's the foundation of every modern food system.` },

            { id: `l02-q3`, format: `multiple-choice`,
              question: `Why did SETTLEMENTS become possible after farming started?`,
              options: [
                `Farming was easier than moving`,
                `Once people could grow their own food, they didn't need to move with the herds and could live in one place`,
                `Settlements existed long before farming`,
                `People got tired of walking`,
              ],
              correctIndex: 1,
              explanation: `Hunter-gatherers moved because their food moved. Farmers could stay put because their food grew where they planted it. Permanent settlements became possible the moment people could feed themselves without traveling.` },

            { id: `l02-q4`, format: `multiple-choice`,
              question: `What is SURPLUS?`,
              options: [
                `A type of crop`,
                `Extra food beyond what's needed today, which can be stored for later`,
                `A farming tool`,
                `A type of animal`,
              ],
              correctIndex: 1,
              explanation: `Surplus is extra food. Because farmers often grew more than they ate, the rest could be stored. Stored food meant some people didn't have to find food themselves. Surplus is the foundation of every later step in human civilization.` },

            { id: `l02-q5`, format: `true-false`,
              question: `True or false: Farming made early humans healthier and happier than hunter-gatherers.`,
              correctAnswer: false,
              explanation: `False. Surprisingly, early farmers were often SHORTER, SICKER, and worked LONGER hours than hunter-gatherers. Their bones show worse health. Farming created cities and civilization, but it came with real costs: disease, harder work, and inequality.` },

            { id: `l02-q6`, format: `multiple-choice`,
              question: `What is DOMESTICATION?`,
              options: [
                `Hunting wild animals more efficiently`,
                `Slowly changing wild plants and animals through breeding so they become useful for humans`,
                `Building houses`,
                `Living in the same place`,
              ],
              correctIndex: 1,
              explanation: `Domestication is the slow process of breeding wild things into something useful. Wild grass became wheat. Wild wolves became dogs. Every modern crop and farm animal is the result of thousands of years of human breeding.` },

            { id: `l02-q7`, format: `multiple-choice`,
              question: `Why did INEQUALITY appear with farming?`,
              options: [
                `It was already there in hunter-gatherer life`,
                `When food could be stored, some people could store more than others, creating rich and poor for the first time`,
                `Inequality didn't appear until much later`,
                `Farmers always shared equally`,
              ],
              correctIndex: 1,
              explanation: `Hunter-gatherers couldn't really hoard, because they had to move. Farmers could store grain, and some people stored more than others. That's where rich and poor first split apart. Inequality wasn't part of being human. It was invented when farming was.` },

            { id: `l02-q8`, format: `multiple-choice`,
              question: `Why does the Agricultural Revolution STILL matter today?`,
              options: [
                `It doesn't`,
                `Because almost every modern food, city, job, and even modern problem traces back to this one shift`,
                `Only farmers care about it`,
                `Because it was recent`,
              ],
              correctIndex: 1,
              explanation: `The food you eat, the city or town you live in, the job your parents have, and even problems like inequality and certain diseases all trace back to the Agricultural Revolution. Understanding it is one of the best ways to understand the modern world.` },
          ],
        },

        {
          id: `l02-reflection`,
          type: `reflection`,
          guideText: `Before we wrap, {name}, pick ONE question and actually answer it. Your response gets saved, and I'll remember it next time we talk.`,
          prompts: [
            { id: `r1`, text: `If you had to choose, would you rather be a hunter-gatherer or an early farmer? What would you give up either way?` },
            { id: `r2`, text: `Modern humans still benefit from the Agricultural Revolution AND still deal with its problems. Which one do you think we should focus on solving?` },
            { id: `r3`, text: `Why do you think farming was invented in SEVERAL places independently around the same time?` },
            { id: `r4`, text: `What's a food you eat regularly? See if you can find out where it was first domesticated.` },
          ],
        },

        {
          id: `l02-realworld`,
          type: `real-world`,
          guideText: `Almost every modern issue connects back to farming. Climate change, partly driven by agriculture and meat production. Inequality, which started when grain could be stored. Diseases that jump from animals to humans, made possible by people living near farm animals. Even modern obesity and diabetes are partly a result of eating the same few crops over and over. Understanding the Agricultural Revolution isn't just history. It helps you understand what's happening in the world right now.`,
          familyAdventure: `Family Food History Hunt. At dinner, each person picks ONE food on their plate. Look up where it was first domesticated. Wheat: Middle East. Rice: China. Corn: Mexico. Potatoes: South America. Notice how every meal you eat is a global mix of crops domesticated thousands of years ago across multiple continents. Then discuss: what foods did your family's culture domesticate first?`,
          creativePrompt: {
            intro: `Imagine you're a hunter-gatherer who has just heard about farming from another tribe. Write a journal entry about whether you should try it.`,
            floor: `Write at least 5 sentences. Describe your current life. Say what you've heard about farming. Decide whether to try it and explain why.`,
            stretch: `Write 8 to 10 sentences. Cover what farming might gain you, what it might cost, what your tribe would think, and your final choice with real reasoning.`,
            open: `Write as much as you want. Build a full first-person account that wrestles with the trade-offs honestly: stability vs freedom, surplus vs inequality, settlement vs migration.`,
            frames: [
              `Right now my tribe lives by ___.`,
              `I just heard about a new way of life called ___.`,
              `What sounds good about it is ___.`,
              `What worries me is ___.`,
              `My decision is ___ because ___.`,
            ],
          },
        },

        {
          id: `l02-celebration`,
          type: `celebration`,
          message: `Great work, {name}. You can now explain what the Agricultural Revolution was, how farming led to settlements, surplus, and specialization, and how it created BOTH civilization AND lasting problems. Next lesson: we visit the very first civilization in human history. Ancient Mesopotamia, the land between two rivers, where writing, law, and the wheel were all invented. See you there. — Lyra.`,
          badge: `farming-pioneer`,
          badgeName: `Farming Pioneer`,
          xpEarned: 75,
        },
      ],
    },
  ],
};

export default HISTORY_UE_L02;

// ─── Dev asset check ──────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const screens = HISTORY_UE_L02.lessons[0].screens;
  const mags = screens.filter(s => s.type === 'magazine').length;
  const game = screens.find(s => s.type === 'interactive')?.cases?.length ?? 0;
  const quiz = screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  const refl = screens.find(s => s.type === 'reflection')?.prompts?.length ?? 0;
  const totalVocab = screens.filter(s => s.type === 'magazine').reduce((sum, s) => sum + (s.vocab?.length || 0), 0);
  console.log(`[LESSON-HISTORY-UE-L02 v1] Loaded with ${mags} magazine sections, ${totalVocab} vocab terms, ${game} game cases, ${quiz} quiz Qs, ${refl} reflection prompts`);
}
