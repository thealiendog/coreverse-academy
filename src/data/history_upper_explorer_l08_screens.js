// ─────────────────────────────────────────────────────────────────────────────
// HISTORY UE  |  L08 — The Mongol Empire
// Age band : upper_explorers (9–10)   Guide: lyra
// Standards: C3 D2.His.2.3-5 — Compare life across time periods
//            C3 D2.His.4.3-5 — Multiple perspectives in historical events
//            C3 D2.His.14.3-5 — Causes and effects of historical developments
// CALIBRATED: UE spec v1.1 — real domain terms, em-dashes sparing
// SCOPE: 4 concepts — Genghis Khan and the rise of the Mongols, scale of
//        the empire, the Pax Mongolica, decline and legacy
// VERSION: v1
// ─────────────────────────────────────────────────────────────────────────────

const HISTORY_UE_L08 = {
  ageBand: `upper_explorers`,
  subjectId: `history`,
  guide: `lyra`,

  lessons: [
    {
      id: `hw-9-10-08`,
      title: `The Mongol Empire`,
      duration: 18,
      xpReward: 75,
      badge: `mongol-historian`,
      badgeName: `Mongol Historian`,

      screens: [
        {
          id: `l08-welcome`,
          type: `welcome`,
          guideText: `Hey {name}, Lyra here. Last lesson we ended with the Mongols destroying Baghdad. Today we meet them properly. The Mongols built the biggest connected empire in human history. From a tribe of nomadic horsemen on the Asian steppes, they conquered most of Eurasia in less than a century. They were brutal in war and surprisingly tolerant in peace. They protected the Silk Road, spread plague, mixed cultures, and reshaped the world. Their story is one of the most important and complicated in history. Let's go.`,
          headline: `The Mongol Empire`,
          subtitle: `The largest contiguous empire in human history`,
          visual: `/ue-assets/history/l08-welcome.webp`,
        },

        {
          id: `l08-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Genghis Khan and the Rise of the Mongols`,
          paragraphs: [
            `The MONGOLS were nomadic herders living in the cold grasslands (called STEPPES) of Central Asia. For centuries, they were divided into warring clans. Around 1206 CE, a remarkable leader named TEMUJIN united them under one banner. He took the title GENGHIS KHAN, meaning "Great Ruler." For the next 21 years, he led the Mongols on a campaign of conquest that no army on Earth could stop.`,
            `The Mongols were master horsemen. Their warriors trained from childhood and could ride for days while shooting arrows accurately from horseback. They had brilliant generals, used clever strategies, and were merciless toward cities that resisted them. Cities that surrendered were often spared. Cities that fought were destroyed. This combination of military genius, terror, and political sense built one of the most successful military forces in history.`,
          ],
          image: `/ue-assets/history/l08-s1-genghis.webp`,
          imageCaption: `Genghis Khan united the Mongols and started one of history's greatest conquests.`,
          vocab: [
            { word: `nomad`,
              definition: `A person who moves from place to place rather than living in one settled location, often following herds of animals. Mongols were classic nomadic horsemen.`,
              audioPrompt: `A nomad is someone who moves from place to place rather than settling in one home, {name}. The Mongols were nomadic herders for centuries before Genghis Khan united them. They followed their herds across the Central Asian steppes, lived in portable tents called yurts, and rode horses from a young age. This nomadic lifestyle made them incredibly tough and gave them a major military advantage when they finally united.` },
            { word: `steppe`,
              definition: `A large flat grassland with few trees, especially the ones stretching across Central Asia. The Mongols originated on the steppes and their nomadic lifestyle there gave them their military skills.`,
              audioPrompt: `The steppe is a vast, flat grassland stretching across Central Asia, {name}. It's cold, dry, and open in every direction. The Mongols lived on these steppes for centuries before Genghis Khan. Life on the steppe made them expert horsemen and archers. They knew how to survive harsh conditions and move fast. When they turned those skills toward conquest, they were nearly unstoppable. The Eurasian steppe was also the original path of the Silk Road.` },
          ],
        },

        {
          id: `l08-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `The Scale of the Empire`,
          paragraphs: [
            `Within 60 years of Genghis Khan's rise, the Mongols controlled territory from KOREA in the east to HUNGARY in the west, from SIBERIA in the north to VIETNAM in the south. About 1 in every 5 people alive at the time were inside Mongol borders. They controlled most of China, all of Central Asia, Persia, parts of Russia, and threatened Western Europe and Egypt. This is the LARGEST connected empire in human history. Bigger than Rome at its peak. Bigger than the British Empire's land base.`,
            `The empire wasn't really one country. It was eventually divided into four KHANATES (sub-empires) ruled by Genghis Khan's descendants. The Yuan Dynasty in China. The Ilkhanate in Persia. The Golden Horde in Russia. And the Chagatai Khanate in Central Asia. Each ruled its own region but acknowledged the connection to the Mongol family. For a brief time, traveling from China to Eastern Europe was almost as safe as traveling between two modern countries because one government controlled the whole route.`,
          ],
          image: `/ue-assets/history/l08-s2-scale.webp`,
          imageCaption: `Korea to Hungary. Siberia to Vietnam. One empire.`,
          vocab: [
            { word: `empire`,
              definition: `A large political unit ruled by a single leader or government, usually covering many cultures and regions.`,
              audioPrompt: `An empire is a large political unit ruled by one government, {name}. The Mongol Empire is the most famous example of how much territory a single empire can control. At its peak, the Mongols ruled the largest connected land area any empire has ever held. About 1 in 5 humans on Earth lived inside Mongol borders. Empires usually contain many different cultures, religions, and languages all under one rule.` },
            { word: `khanate`,
              definition: `A territory ruled by a khan (Mongol ruler). After the Mongol Empire split, it divided into four major khanates, each ruled by a descendant of Genghis Khan.`,
              audioPrompt: `A khanate is a territory ruled by a khan, the Mongol word for a ruler, {name}. After the Mongol Empire became too large to manage as one unit, it split into four major khanates: the Yuan Dynasty in China, the Ilkhanate in Persia, the Golden Horde in Russia, and the Chagatai Khanate in Central Asia. Each was independent but traced its authority back to Genghis Khan's family. The khanate system shows how even the world's largest empire eventually had to decentralize.` },
          ],
        },

        {
          id: `l08-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `The Pax Mongolica: Peace and Trade Across Asia`,
          paragraphs: [
            `Surprisingly, once the conquering was done, the Mongols were often EXCELLENT rulers. They were religiously tolerant, allowing Christianity, Islam, Buddhism, and other religions throughout their empire. They protected merchants and made the Silk Road safer than it had been in centuries. This period (about 1250 to 1350 CE) is called the PAX MONGOLICA, or "Mongol Peace." Trade and communication across Asia reached levels not seen before.`,
            `The famous European traveler MARCO POLO spent 17 years in China during this period, working for the Mongol emperor Kublai Khan. He wrote a book about his experiences that introduced Europeans to Asian wealth and inventions for the first time. Diplomatic letters traveled between the Pope, the Mongol khans, and the courts of China. Knowledge, technology, and ideas flowed at a scale only possible because one empire protected the entire route. The Mongols are remembered for war, but their Peace is what really changed the world.`,
          ],
          image: `/ue-assets/history/l08-s3-pax-mongolica.webp`,
          imageCaption: `The Mongol Peace: trade and knowledge flowed across all of Eurasia.`,
          vocab: [
            { word: `Pax Mongolica`,
              definition: `The "Mongol Peace." A period from about 1250 to 1350 CE when Mongol rule made trade and travel across Asia safer than ever before.`,
              audioPrompt: `Pax Mongolica is Latin for "Mongol Peace," {name}. The period from about 1250 to 1350 CE when Mongol rule made the Silk Road safer than it had been in centuries. Merchants could travel from China to Eastern Europe under one government's protection. Knowledge, technology, and ideas flowed at a scale not seen before. The Mongols are usually remembered for conquest. But the Peace they enforced afterward is what really changed history.` },
            { word: `Marco Polo`,
              definition: `A Venetian merchant and explorer who spent 17 years traveling and working in China during the Pax Mongolica. His book introduced Europeans to Asian wealth, culture, and technology.`,
              audioPrompt: `Marco Polo was a Venetian merchant who traveled to China in the 1270s, {name}. He worked for the Mongol emperor Kublai Khan for 17 years. When he returned to Europe, he wrote a book describing the wealth, cities, and inventions of Asia. Europeans were stunned. Many didn't believe him. But his book inspired generations of explorers, including Christopher Columbus, who was looking for a faster route to the Asia Marco Polo described. His travels were only possible because the Pax Mongolica made the route safe.` },
          ],
        },

        {
          id: `l08-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Decline and Legacy`,
          paragraphs: [
            `By 1350, the Mongol Empire was falling apart. The four khanates were drifting apart, fighting each other, and absorbing local cultures. The Black Death (next lesson) hit the empire hard and disrupted the trade networks that held it together. By 1400, the unified empire was effectively gone, though Mongol descendants ruled various regions for centuries longer. The Yuan Dynasty in China lasted until 1368. The Golden Horde in Russia lasted until 1480.`,
            `The Mongol legacy is mixed and important. They killed millions in their conquests, but they also created one of the most successful periods of cultural exchange in history. They destroyed Baghdad and the House of Wisdom, but they protected the Silk Road for a century afterward. They spread plague AND ideas. They imposed harsh rule AND religious tolerance. The Mongols force us to hold complicated truth: history is full of empires that did both terrible AND incredible things. Both have to be remembered honestly.`,
          ],
          image: `/ue-assets/history/l08-s4-legacy.webp`,
          imageCaption: `The Mongols ended one age. They opened another.`,
          vocab: [
            { word: `khan`,
              definition: `A title meaning ruler or king, used by Mongol and Central Asian leaders. Genghis Khan and Kublai Khan are two of the most famous in history.`,
              audioPrompt: `A khan is a Mongol or Central Asian ruler, {name}. The word means "lord" or "king." Genghis Khan was the founder of the Mongol Empire. His grandson Kublai Khan ruled China as the first Yuan Dynasty emperor. After the empire split, each major region had its own khan. The title was so famous that other empires later borrowed it. Even today, some Central Asian leaders are still called khan.` },
            { word: `Genghis Khan`,
              definition: `The founder and first ruler of the Mongol Empire, born Temujin around 1162 CE. He united the Mongol tribes and launched the conquests that would create the largest connected empire in history.`,
              audioPrompt: `Genghis Khan was born Temujin around 1162 CE, {name}. He grew up in a world of warring Mongol clans. By 1206, he had united them all under his command and took the title Genghis Khan, meaning "Great Ruler." He then launched one of the most successful military campaigns in human history. By the time he died in 1227, he had conquered more land than any ruler before him. His grandsons and great-grandsons continued the conquests until the empire stretched from the Pacific to Eastern Europe.` },
          ],
        },

        {
          id: `l08-game`,
          type: `interactive`,
          format: `investigation`,
          guideText: `Investigation time, {name}. Four facts about the Mongol Empire. For each one, decide which side of the Mongol legacy it represents: CONQUEST (military expansion, brutal warfare), GOVERNANCE (ruling, laws, organization), or CULTURAL EXCHANGE (trade, religion, knowledge spread)?\n\nOne is sneakier than it looks.`,
          options: [
            { id: `conquest`,             label: `Conquest`,             color: `#F87171`, description: `Military expansion, battles, sieges, brutal warfare.` },
            { id: `governance`,           label: `Governance`,           color: `#60A5FA`, description: `Ruling conquered territories, laws, organization, postal systems.` },
            { id: `cultural-exchange`,    label: `Cultural Exchange`,    color: `#34D399`, description: `Trade, religious tolerance, knowledge spreading across continents.` },
          ],
          cases: [
            {
              id: `case-1`,
              caseTitle: `Fact #1`,
              clues: [
                { text: `In 1258, Mongol armies surrounded Baghdad, then the world's biggest city.` },
                { text: `After the city refused to surrender, the Mongols sacked it. Tens of thousands were killed and the House of Wisdom was destroyed.` },
                { text: `The Caliph was executed. Baghdad never recovered its former greatness.` },
              ],
              correctAnswer: `conquest`,
              realWorldExample: `The Mongol sack of Baghdad in 1258 is one of the most destructive events in medieval history.`,
              explanation: `Military assault. City destroyed. Mass killing. Pure conquest. This was the Mongols at their most destructive. It ended the Islamic Golden Age in a single, terrible week.`,
            },
            {
              id: `case-2`,
              caseTitle: `Fact #2`,
              clues: [
                { text: `The Mongols set up a network of horse-relay stations called YAM across their empire.` },
                { text: `Messengers could travel up to 200 miles per day, switching horses at each station.` },
                { text: `It was the fastest communication system in the world at the time.` },
              ],
              correctAnswer: `governance`,
              realWorldExample: `The Mongol Yam system inspired later postal services around the world.`,
              explanation: `Organized communication infrastructure. Fast messaging across a huge empire. This is governance. The Mongols weren't just conquerors. They were brilliant organizers. The Yam system kept their massive empire connected and ran on schedule.`,
            },
            {
              id: `case-3`,
              caseTitle: `Fact #3`,
              clues: [
                { text: `Marco Polo, a Venetian merchant, spent 17 years working for Kublai Khan in China.` },
                { text: `He wrote a book describing Asian wealth, technology, and customs that European readers had never imagined.` },
                { text: `His book inspired explorers like Christopher Columbus to seek Asia centuries later.` },
              ],
              correctAnswer: `cultural-exchange`,
              realWorldExample: `Marco Polo's travels were possible because of the Pax Mongolica.`,
              explanation: `European merchant. Working in China. Sharing knowledge with Europe. Pure cultural exchange. This kind of long-distance, deep cultural contact was only possible because one empire protected the route. Mongol Peace made it work.`,
            },
            {
              id: `case-4`,
              caseTitle: `Fact #4 — The Tricky One`,
              clues: [
                { text: `The Mongol Empire officially protected religious freedom across all its territory.` },
                { text: `Buddhist monks, Christian priests, Muslim scholars, and Daoist sages all traveled and taught freely.` },
                { text: `Tax exemptions were given to clergy of every major religion.` },
              ],
              correctAnswer: `governance`,
              realWorldExample: `Mongol religious tolerance was advanced for its time.`,
              explanation: `Tricky because religious tolerance feels like cultural exchange (and it did enable cultural exchange). But the actual policy of protecting religious freedom and giving tax exemptions is GOVERNANCE. The Mongols were running their empire smartly by not picking sides in religious arguments. The lesson: governance and culture overlap, but the policy itself is how rulers run their empire.`,
            },
          ],
        },

        {
          id: `l08-quiz`,
          type: `quiz`,
          guideText: `Let's see what stuck, {name}.`,
          questions: [
            { id: `l08-q1`, format: `multiple-choice`,
              question: `Who founded the Mongol Empire?`,
              options: [
                `Marco Polo`,
                `Genghis Khan (originally named Temujin)`,
                `Kublai Khan`,
                `Attila the Hun`,
              ],
              correctIndex: 1,
              explanation: `Genghis Khan united the Mongol tribes around 1206 CE and began the conquest that built the largest connected empire in history.` },

            { id: `l08-q2`, format: `multiple-choice`,
              question: `Why is the Mongol Empire considered one of the largest in human history?`,
              options: [
                `It had the most cities`,
                `It controlled the largest continuous land area, stretching from Korea to Hungary at its peak`,
                `It existed for the longest time`,
                `It had the most religions`,
              ],
              correctIndex: 1,
              explanation: `The Mongol Empire's connected territory stretched from East Asia to Eastern Europe. About 1 in 5 humans on Earth lived inside its borders at its peak.` },

            { id: `l08-q3`, format: `multiple-choice`,
              question: `What were NOMADS?`,
              options: [
                `City-dwellers`,
                `People who moved from place to place rather than living in one settled location, often following herds`,
                `Religious leaders`,
                `Farmers`,
              ],
              correctIndex: 1,
              explanation: `Nomads move from place to place rather than settling in one home. The Mongols were classic nomadic herders. Their lifestyle gave them mobility, toughness, and horsemanship that made them devastating warriors.` },

            { id: `l08-q4`, format: `multiple-choice`,
              question: `What is the PAX MONGOLICA?`,
              options: [
                `A famous Mongol weapon`,
                `The "Mongol Peace" — a period when Mongol rule made trade and travel across Asia safer than ever`,
                `A Mongol religion`,
                `A region of the empire`,
              ],
              correctIndex: 1,
              explanation: `Pax Mongolica is Latin for "Mongol Peace." After the conquest was done, the Mongols made the Silk Road safe enough that goods, people, and ideas flowed across Asia in unprecedented amounts.` },

            { id: `l08-q5`, format: `true-false`,
              question: `True or false: The Mongols only destroyed; they didn't build anything.`,
              correctAnswer: false,
              explanation: `False. The Mongols destroyed many cities. But they also built impressive infrastructure (like the Yam postal system), protected the Silk Road, supported religious tolerance, and enabled enormous cultural exchange. Their legacy is complicated.` },

            { id: `l08-q6`, format: `multiple-choice`,
              question: `Who was MARCO POLO?`,
              options: [
                `A Mongol general`,
                `A Venetian merchant who spent 17 years in China during the Pax Mongolica and wrote about it`,
                `Genghis Khan's son`,
                `A Mongol shaman`,
              ],
              correctIndex: 1,
              explanation: `Marco Polo was a European merchant who traveled to China under Kublai Khan. His book introduced Europeans to Asian wealth and culture. His travels were only possible because the Mongol Peace made the route safe.` },

            { id: `l08-q7`, format: `multiple-choice`,
              question: `What was the Mongol YAM system?`,
              options: [
                `A type of farming`,
                `A network of horse-relay stations that allowed messages to travel up to 200 miles per day`,
                `A military formation`,
                `A religion`,
              ],
              correctIndex: 1,
              explanation: `The Yam was an organized postal system using relay horses across the empire. It was the fastest communication system in the world at the time. The Mongols weren't just conquerors. They were excellent organizers.` },

            { id: `l08-q8`, format: `multiple-choice`,
              question: `Why is the Mongol legacy COMPLICATED?`,
              options: [
                `It's not complicated`,
                `Because they killed millions in conquest, AND they enabled one of history's biggest periods of cultural exchange. Both things are true at once.`,
                `Only because they were mean`,
                `Only because they protected trade`,
              ],
              correctIndex: 1,
              explanation: `Honest history requires holding both sides. The Mongols caused enormous destruction AND they protected the Silk Road for a century. They destroyed Baghdad AND they spread knowledge across Eurasia. Big empires usually have both sides to their legacy.` },
          ],
        },

        {
          id: `l08-reflection`,
          type: `reflection`,
          guideText: `Before we wrap, {name}, pick ONE question and actually answer it. Your response gets saved, and I'll remember it next time we talk.`,
          prompts: [
            { id: `r1`, text: `The Mongols destroyed cities AND protected trade routes. They killed millions AND enabled cultural exchange. How do you make sense of a legacy that includes both?` },
            { id: `r2`, text: `If you had to negotiate with the Mongols around 1240 CE, would you have surrendered (and been spared) or fought (and risked destruction)? Why?` },
            { id: `r3`, text: `Imagine being a merchant during the Pax Mongolica. How would your life be different from a merchant living during a time of war between empires?` },
            { id: `r4`, text: `Why do you think history textbooks often emphasize Mongol violence but skip Mongol governance and cultural exchange?` },
          ],
        },

        {
          id: `l08-realworld`,
          type: `real-world`,
          guideText: `Modern Mongolia is a country of about 3 million people, but the Mongol legacy reaches far beyond it. About 16 million people alive today are direct descendants of Genghis Khan. The Pax Mongolica showed the world what's possible when long trade routes operate under unified rule. China's modern Belt and Road Initiative follows almost the same paths. And the question of how to remember empires honestly (both their achievements AND their crimes) is still a debate worth having about every great power in history.`,
          familyAdventure: `Family Empire Comparison. As a family, look up the sizes of three big historical empires: the Mongol Empire, the British Empire, and the modern country with the largest land area (Russia). Compare them on a world map. Then discuss: what does it take for an empire to get that big, and what does it take for one to last? Which would have been better or worse to live in, and why?`,
          creativePrompt: {
            intro: `Imagine you're a citizen of a city about to be approached by the Mongol army in 1240. The leaders are deciding whether to surrender or fight.`,
            floor: `Write at least 5 sentences. Describe your city. Describe what you know about the Mongols. Explain whether your city should surrender or fight, and why.`,
            stretch: `Write 8 to 10 sentences. Include arguments from people who want to fight and people who want to surrender. Then explain which side you support and your reasoning.`,
            open: `Write as much as you want. Build a full first-person account that wrestles with the real moral and strategic complexity. Surrender means submission and tribute. Fighting risks destruction. Both are real choices and both have real costs.`,
            frames: [
              `I live in the city of ___ in the year 1240 CE.`,
              `I have heard that the Mongols ___.`,
              `Some people in my city want to ___ because ___.`,
              `Other people want to ___ because ___.`,
              `My own view is that we should ___ because ___.`,
            ],
          },
        },

        {
          id: `l08-celebration`,
          type: `celebration`,
          message: `Great work, {name}. You can now explain how Genghis Khan united the Mongols, describe the scale of the empire, understand the Pax Mongolica, and hold the complicated truth of Mongol legacy. Next lesson: a tiny enemy that brought the Mongol Empire down and reshaped the entire world. The Black Death. See you there. — Lyra.`,
          badge: `mongol-historian`,
          badgeName: `Mongol Historian`,
          xpEarned: 75,
        },
      ],
    },
  ],
};

export default HISTORY_UE_L08;

// ─── Dev asset check ──────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const screens = HISTORY_UE_L08.lessons[0].screens;
  const mags = screens.filter(s => s.type === 'magazine').length;
  const game = screens.find(s => s.type === 'interactive')?.cases?.length ?? 0;
  const quiz = screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  const refl = screens.find(s => s.type === 'reflection')?.prompts?.length ?? 0;
  const totalVocab = screens.filter(s => s.type === 'magazine').reduce((sum, s) => sum + (s.vocab?.length || 0), 0);
  console.log(`[LESSON-HISTORY-UE-L08 v1] Loaded with ${mags} magazine sections, ${totalVocab} vocab terms, ${game} game cases, ${quiz} quiz Qs, ${refl} reflection prompts`);
}
