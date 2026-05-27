// ─────────────────────────────────────────────────────────────────────────────
// HISTORY UE  |  L09 — The Black Death and Its Impact
// Age band : upper_explorers (9–10)   Guide: lyra
// Standards: C3 D2.His.2.3-5 — Compare life across time periods
//            C3 D2.His.14.3-5 — Causes and effects of historical developments
//            C3 D2.His.16.3-5 — Use evidence to develop claims
// CALIBRATED: UE spec v1.1 — real domain terms, em-dashes sparing
// SCOPE: 4 concepts — what the Black Death was, how it spread, social and
//        economic changes after, why pandemics still matter today
// VERSION: v1
// ─────────────────────────────────────────────────────────────────────────────

const HISTORY_UE_L09 = {
  ageBand: `upper_explorers`,
  subjectId: `history`,
  guide: `lyra`,

  lessons: [
    {
      id: `hw-9-10-09`,
      title: `The Black Death and Its Impact`,
      duration: 18,
      xpReward: 75,
      badge: `pandemic-historian`,
      badgeName: `Pandemic Historian`,

      screens: [
        {
          id: `l09-welcome`,
          type: `welcome`,
          guideText: `Hey {name}, Lyra here. Last lesson we left the Mongol Empire weakening. Today we meet what helped finish it off. Not an army. A tiny bacterium. Between 1347 and 1351, the Black Death swept across Eurasia, killing somewhere between 75 and 200 million people. About a third of Europe's population died. Whole villages were wiped out. The plague reshaped economies, religion, art, science, and society itself. Today's lesson is about one of the most devastating disasters in human history, and what came AFTER it. Let's go.`,
          headline: `The Black Death`,
          subtitle: `The pandemic that killed a third of Europe and reshaped the world`,
          visual: `/ue-assets/history/l09-welcome.webp`,
        },

        {
          id: `l09-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `What the Black Death Was`,
          paragraphs: [
            `The BLACK DEATH was a PANDEMIC of a disease called BUBONIC PLAGUE. The disease is caused by a bacterium called Yersinia pestis, carried by fleas that live on rats. When the rats die from the disease, the fleas jump to humans. Once infected, a person typically developed swollen lumps (called buboes) in their armpits, neck, or groin. Skin patches turned dark, which is where the name "Black Death" comes from. About half of those infected died, usually within a week.`,
            `Some historians estimate the death toll between 75 and 200 million people. In Europe, about ONE-THIRD of the population died in just a few years. That would be like a third of every modern city, every modern school, every modern country, gone in a few years. The scale was unimaginable. Whole villages had no survivors. People who lived through it described the world ending. Some of these accounts still exist today and they're among the most shocking documents in history.`,
          ],
          image: `/ue-assets/history/l09-s1-the-plague.webp`,
          imageCaption: `One of the deadliest events in human history.`,
          vocab: [
            { word: `pandemic`,
              definition: `An outbreak of a disease that spreads across many countries or continents and affects huge numbers of people.`,
              audioPrompt: `A pandemic is an outbreak of disease that spreads across many countries or continents, {name}. Not just a local outbreak. A worldwide one. The Black Death is one of the most famous pandemics in history because it killed somewhere between 75 and 200 million people in just a few years. Other major pandemics include the 1918 flu, smallpox in the Americas, and the recent COVID-19 outbreak that you've probably lived through.` },
            { word: `bacterium`,
              definition: `A tiny single-celled living organism that can cause disease. The Black Death was caused by a bacterium called Yersinia pestis, carried by fleas on rats.`,
              audioPrompt: `A bacterium is a microscopic single-celled organism, {name}. Bacteria are everywhere — most are harmless or even helpful. But some cause serious diseases. The Black Death was caused by one called Yersinia pestis. It lived in fleas that fed on rats. When the rats died, the fleas jumped to humans and spread the infection. Medieval people had no idea bacteria existed. Modern medicine can now treat most bacterial infections with antibiotics. The Black Death would be far less deadly today.` },
          ],
        },

        {
          id: `l09-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `How It Spread`,
          paragraphs: [
            `The Black Death started somewhere in Central or East Asia, probably China or Mongolia. From there, it traveled WEST along trade routes (especially the Silk Road) into the Middle East, North Africa, and Europe. In 1347, ships docked in Italian ports with sailors already dying onboard. By 1351, the disease had spread across all of Europe. The same trade routes that brought silk and spices now brought a microscopic killer.`,
            `The disease moved faster than people could understand it. Medieval people had no idea what caused it. Some blamed God's punishment. Some blamed witches, foreigners, or Jewish communities (who were horribly persecuted in many cities). Doctors wore strange "beak masks" stuffed with herbs, thinking the herbs would block "bad air." Modern medicine has shown the actual cause was a bacterium, but at the time, the science to understand any of this didn't exist.`,
          ],
          image: `/ue-assets/history/l09-s2-spread.webp`,
          imageCaption: `Trade routes carry many things. Including death.`,
          vocab: [
            { word: `plague`,
              definition: `A serious infectious disease, especially the disease called bubonic plague that caused the Black Death. Caused by the bacterium Yersinia pestis.`,
              audioPrompt: `Plague is a serious infectious disease, {name}. The specific disease that caused the Black Death is called bubonic plague. It's caused by a bacterium spread mostly by fleas living on rats. Once humans got it, the death rate was around 50 percent. The plague has caused multiple pandemics throughout history, not just the Black Death. Modern antibiotics can usually treat it, but it still exists in parts of the world today.` },
            { word: `miasma`,
              definition: `The medieval belief that disease was caused by bad-smelling air. This theory was wrong — disease is caused by germs — but it shaped how people tried to fight illness for centuries.`,
              audioPrompt: `Miasma was the medieval theory that disease was caused by bad-smelling air, {name}. Doctors and ordinary people believed that if you smelled something rotting or foul, you could get sick just from the air itself. This is why plague doctors wore those famous beak masks stuffed with herbs — they thought the herbs would block the bad air. Miasma theory was completely wrong, but it lasted for centuries. Understanding miasma helps explain why medieval people couldn't stop the plague. They were solving the wrong problem.` },
          ],
        },

        {
          id: `l09-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `The World After the Plague`,
          paragraphs: [
            `Once the Black Death finally faded, the world that emerged was profoundly different. With so many workers dead, surviving peasants and laborers could finally demand BETTER pay and BETTER conditions. Before the plague, workers were stuck on the land of nobles with few rights. After it, with labor scarce, workers gained negotiating power. This shift slowly weakened the medieval system called FEUDALISM, where peasants worked for nobles who owned the land.`,
            `The plague also shook religious authority. The Catholic Church couldn't stop the disease despite mass prayers. Many people lost faith in church leaders. Some historians think this was one factor that later led to the Protestant Reformation. Science slowly began to gain authority. People started questioning old answers. The Renaissance, which started in Italy in the 1400s, came partly because of the upheavals the plague caused. The plague ended one kind of world and slowly cleared the way for a new one.`,
          ],
          image: `/ue-assets/history/l09-s3-after.webp`,
          imageCaption: `Workers, religion, science. All changed after the plague.`,
          vocab: [
            { word: `feudalism`,
              definition: `The medieval system where peasants worked the land owned by nobles, in exchange for protection. The Black Death helped weaken this system because surviving workers could demand better pay.`,
              audioPrompt: `Feudalism was the medieval social and economic system, {name}. Peasants worked the land owned by nobles in exchange for protection. They couldn't really leave or change their station in life. The Black Death disrupted this system. With so many workers dead, surviving peasants could demand higher wages. They had real bargaining power for the first time. Feudalism didn't end overnight, but it never recovered. The plague helped open the door to a more modern kind of economy.` },
            { word: `peasant`,
              definition: `A farmer or laborer, usually poor, who worked land owned by a noble or lord during the medieval period. After the Black Death, surviving peasants gained unprecedented bargaining power.`,
              audioPrompt: `A peasant was a poor farmer or laborer in medieval society, {name}. Most people in medieval Europe were peasants. They worked land that belonged to a noble and had very few rights or freedoms. The Black Death changed their situation dramatically. With so many peasants dead, the ones who survived could demand higher wages and better treatment. Some left their lords' land entirely to find better pay elsewhere. This shift was one of the most significant social changes in medieval European history.` },
          ],
        },

        {
          id: `l09-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Why This Still Matters`,
          paragraphs: [
            `The Black Death is the most famous example of how disease can reshape history. But it's not the only one. SMALLPOX devastated the Americas after European contact. The 1918 FLU killed tens of millions worldwide. AIDS, Ebola, and most recently COVID-19 reminded us that pandemics still happen in the modern world. The lesson the Black Death teaches isn't just historical. It's a warning. Diseases can spread along whatever routes humans use to connect, faster than science can usually catch up.`,
            `The good news: we know how to fight pandemics now. Hygiene, vaccines, antibiotics, public health systems, and rapid scientific research all came out of lessons learned from past plagues. Modern responses to disease, while never perfect, save millions of lives that would have died in past centuries. Studying the Black Death is part of understanding why these systems exist and why we should protect them.`,
          ],
          image: `/ue-assets/history/l09-s4-still-matters.webp`,
          imageCaption: `From medieval plague to modern pandemics. Lessons still matter.`,
          vocab: [
            { word: `quarantine`,
              definition: `Keeping sick people (or possibly sick people) separated from others to stop disease from spreading. The word actually comes from medieval responses to the Black Death.`,
              audioPrompt: `Quarantine is the practice of keeping sick or possibly sick people separated from others to stop disease from spreading, {name}. The word itself comes from medieval Italy. Ships arriving from places with plague were forced to wait 40 days (quaranta giorni in Italian) before passengers could come ashore. This was one of the world's first organized public health responses. We still use quarantine today, especially during outbreaks. It's been saving lives for over 700 years.` },
            { word: `vaccine`,
              definition: `A substance that trains the immune system to fight a specific disease. Vaccines have prevented more deaths than almost any other medical invention. They developed directly from lessons learned in fighting pandemics.`,
              audioPrompt: `A vaccine is a substance that teaches your immune system to recognize and fight a specific disease, {name}. Medieval people had no vaccines. If they had, the Black Death would have been far less devastating. The development of vaccines began centuries after the plague, but it came out of the same kind of scientific thinking that the Black Death helped unlock. Today, vaccines have eliminated or nearly eliminated diseases that once killed millions. Studying the Black Death is part of understanding why vaccines matter.` },
          ],
        },

        {
          id: `l09-game`,
          type: `interactive`,
          format: `investigation`,
          guideText: `Investigation time, {name}. Four facts about the Black Death and its aftermath. For each one, identify which area it affected most: HEALTH (the disease itself), SOCIETY (work, daily life, social classes), or BELIEFS (religion, science, ideas)?\n\nOne is sneakier than it looks.`,
          options: [
            { id: `health`,    label: `Health`,    color: `#F87171`, description: `The disease itself, symptoms, death rates, and medical responses.` },
            { id: `society`,   label: `Society`,    color: `#60A5FA`, description: `Work, daily life, social classes, and how people lived together.` },
            { id: `beliefs`,   label: `Beliefs`,    color: `#A78BFA`, description: `Religion, faith, science, and how people made sense of the world.` },
          ],
          cases: [
            {
              id: `case-1`,
              caseTitle: `Fact #1`,
              clues: [
                { text: `Doctors during the Black Death wore long bird-beak masks stuffed with herbs.` },
                { text: `They believed bad smells in the air ("miasma") spread disease.` },
                { text: `Modern medicine has shown the disease was actually caused by bacteria spread by fleas, not by smell.` },
              ],
              correctAnswer: `health`,
              realWorldExample: `The plague doctor mask is one of history's most recognizable images.`,
              explanation: `Medical response to disease. Even though it was wrong, it was an attempt to fight illness. Pure health context. Medieval medicine was doing its best with the wrong theory about what caused disease.`,
            },
            {
              id: `case-2`,
              caseTitle: `Fact #2`,
              clues: [
                { text: `Before the plague, peasants worked nobles' land with few rights.` },
                { text: `After the plague killed about a third of Europe's population, surviving workers could demand higher wages.` },
                { text: `Some nobles tried to pass laws forcing wages back down. The peasants revolted in many places.` },
              ],
              correctAnswer: `society`,
              realWorldExample: `The aftermath of the plague triggered major peasant revolts across Europe.`,
              explanation: `Changes in work, wages, and social class. Pure society. The plague accidentally gave workers leverage. Feudalism began breaking down because there were too few workers to keep it running the old way.`,
            },
            {
              id: `case-3`,
              caseTitle: `Fact #3`,
              clues: [
                { text: `Before the plague, the Catholic Church was the most powerful institution in Europe.` },
                { text: `When mass prayers, pilgrimages, and religious rituals failed to stop the disease, people lost confidence in church leaders.` },
                { text: `This loss of authority helped open the door to scientific thinking and eventually to the Protestant Reformation.` },
              ],
              correctAnswer: `beliefs`,
              realWorldExample: `The plague shook religious authority across Europe.`,
              explanation: `Religion couldn't stop the plague. Faith in church leaders dropped. Belief systems shifted toward science and away from older religious answers. Pure beliefs. The plague's impact on European religion was one of its most lasting consequences.`,
            },
            {
              id: `case-4`,
              caseTitle: `Fact #4 — The Tricky One`,
              clues: [
                { text: `Italian port cities started forcing ships from plague areas to wait 40 days before passengers could come ashore.` },
                { text: `The word "quarantine" comes from the Italian word for 40 ("quaranta").` },
                { text: `This was one of the world's first organized public health systems.` },
              ],
              correctAnswer: `health`,
              realWorldExample: `Quarantine has been saving lives for over 700 years.`,
              explanation: `Tricky because quarantine affects society (people can't move freely) AND government (rules being imposed). But the PURPOSE of quarantine is HEALTH. It's a tool to stop disease. The lesson: when a policy is designed specifically to fight disease, that's a health response, even if it changes society. Modern quarantine policy still works this way.`,
            },
          ],
        },

        {
          id: `l09-quiz`,
          type: `quiz`,
          guideText: `Let's see what stuck, {name}.`,
          questions: [
            { id: `l09-q1`, format: `multiple-choice`,
              question: `What is a PANDEMIC?`,
              options: [
                `A small local outbreak`,
                `An outbreak of disease that spreads across many countries or continents`,
                `Any contagious disease`,
                `A type of medicine`,
              ],
              correctIndex: 1,
              explanation: `A pandemic is a worldwide outbreak of disease. The Black Death, the 1918 flu, and COVID-19 are all examples. They spread along whatever routes humans use to connect.` },

            { id: `l09-q2`, format: `multiple-choice`,
              question: `Roughly when did the Black Death sweep across Europe?`,
              options: [
                `1000-1100 CE`,
                `1347-1351 CE`,
                `1500-1600 CE`,
                `1800-1900 CE`,
              ],
              correctIndex: 1,
              explanation: `The Black Death struck Europe between 1347 and 1351. In just four years, about a third of Europe's population died.` },

            { id: `l09-q3`, format: `multiple-choice`,
              question: `How did the Black Death actually spread?`,
              options: [
                `Through "bad air" as people at the time thought`,
                `Through a bacterium carried by fleas on rats, traveling along trade routes`,
                `Through water only`,
                `Through magic`,
              ],
              correctIndex: 1,
              explanation: `Modern science has shown the plague was caused by bacteria (Yersinia pestis) carried by fleas on rats. It spread along trade routes including the Silk Road and shipping lanes.` },

            { id: `l09-q4`, format: `multiple-choice`,
              question: `Approximately what fraction of EUROPE'S POPULATION died from the Black Death?`,
              options: [
                `About 1%`,
                `About one-third (33%)`,
                `About 10%`,
                `About 80%`,
              ],
              correctIndex: 1,
              explanation: `About a third of Europe's population died in just a few years. Whole villages had no survivors. The death toll across Europe and Asia combined may have been 75 to 200 million people.` },

            { id: `l09-q5`, format: `true-false`,
              question: `True or false: The Black Death had only negative effects on Europe.`,
              correctAnswer: false,
              explanation: `False. The plague caused enormous suffering, but it also brought some social changes that helped end feudalism, gave workers more bargaining power, and shook authority structures that had held back change. Honest history includes both sides.` },

            { id: `l09-q6`, format: `multiple-choice`,
              question: `Why did surviving WORKERS gain more bargaining power after the Black Death?`,
              options: [
                `Workers were better organized`,
                `With so many workers dead, labor became scarce and surviving workers could demand higher wages`,
                `Nobles became kind`,
                `Workers learned new skills`,
              ],
              correctIndex: 1,
              explanation: `Labor shortages from massive death rates meant remaining workers became valuable. They could demand wages and rights that hadn't been possible before. This started weakening feudalism.` },

            { id: `l09-q7`, format: `multiple-choice`,
              question: `Where does the word QUARANTINE come from?`,
              options: [
                `Latin for "isolation"`,
                `Italian for "40," because plague-era cities made ships wait 40 days before passengers could come ashore`,
                `Greek for "disease"`,
                `French for "sickness"`,
              ],
              correctIndex: 1,
              explanation: `Italian port cities required ships from plague areas to wait 40 days (quaranta giorni in Italian) before passengers could come ashore. We still use the word and the practice today.` },

            { id: `l09-q8`, format: `multiple-choice`,
              question: `Why does studying the Black Death still matter today?`,
              options: [
                `It doesn't`,
                `Because pandemics still happen, and the lessons (about health, society, and how to respond) are still useful`,
                `Only doctors care about it`,
                `It's interesting but not important`,
              ],
              correctIndex: 1,
              explanation: `Pandemics still happen, as you've probably lived through with COVID-19. The lessons from the Black Death about how diseases spread, how societies respond, and how to organize public health all still apply.` },
          ],
        },

        {
          id: `l09-reflection`,
          type: `reflection`,
          guideText: `Before we wrap, {name}, pick ONE question and actually answer it. Your response gets saved, and I'll remember it next time we talk.`,
          prompts: [
            { id: `r1`, text: `You've probably lived through a pandemic (COVID-19) yourself. What did people get right? What did they get wrong? How does it compare to what you know about the Black Death?` },
            { id: `r2`, text: `Imagine being a worker right after the Black Death, when wages were suddenly higher. What would change in your daily life?` },
            { id: `r3`, text: `Diseases have shaped history more than most people realize. Why do you think disease often gets less attention than wars or kings?` },
            { id: `r4`, text: `If a new pandemic hit today, which of the responses developed after the Black Death (quarantine, public health, science) do you think matters most?` },
          ],
        },

        {
          id: `l09-realworld`,
          type: `real-world`,
          guideText: `Modern public health systems, quarantine practices, hygiene standards, vaccines, and disease research all developed because humans learned the hard way from plagues like the Black Death. The COVID-19 pandemic you may have lived through put many of these systems to the test. Some worked. Some didn't. The same questions people asked in 1350 (how does it spread, who's vulnerable, what should governments do, how do we tell truth from rumor) came up again in 2020. Understanding history's pandemics is one of the best ways to understand both the strengths and weaknesses of modern responses.`,
          familyAdventure: `Family Pandemic Reflection. Sit together and discuss: what did your family do during COVID-19? What worked, what didn't, what would you do differently? Then compare to what you've learned about the Black Death. Some things have changed enormously (we have vaccines, antibiotics, and rapid science). Some things are surprisingly similar (rumors spread fast, people blame outsiders, daily life gets disrupted). Both pandemics teach.`,
          creativePrompt: {
            intro: `Imagine you're living through 1349 CE. The plague has reached your village. Write a journal entry about what's happening.`,
            floor: `Write at least 5 sentences. Describe what you've seen. Tell what your family is doing. Share what people are saying about why this is happening.`,
            stretch: `Write 8 to 10 sentences. Cover the experience of seeing the plague arrive, the responses by leaders, the questions people are asking, and what you hope happens next.`,
            open: `Write as much as you want. Build a full first-person account that mixes the personal (what's happening to your family) with the larger picture (society falling apart, no one knowing what to do, the world feeling like it's ending). Honest medieval people would have wrestled with all of this.`,
            frames: [
              `The year is 1349, and the plague has come to my village.`,
              `I have seen ___.`,
              `My family is ___.`,
              `People are saying ___ caused this.`,
              `What I most hope for is ___.`,
            ],
          },
        },

        {
          id: `l09-celebration`,
          type: `celebration`,
          message: `Great work, {name}. You can now explain what the Black Death was, how it spread along trade routes, how it changed work and beliefs across Europe, and why pandemics still matter today. Next lesson: with the plague slowly fading and the medieval order shaken, Europe started entering a new era. The Scientific Revolution. We'll meet the people who began turning the world upside down by asking new questions about how nature actually works. See you there. — Lyra.`,
          badge: `pandemic-historian`,
          badgeName: `Pandemic Historian`,
          xpEarned: 75,
        },
      ],
    },
  ],
};

export default HISTORY_UE_L09;

// ─── Dev asset check ──────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const screens = HISTORY_UE_L09.lessons[0].screens;
  const mags = screens.filter(s => s.type === 'magazine').length;
  const game = screens.find(s => s.type === 'interactive')?.cases?.length ?? 0;
  const quiz = screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  const refl = screens.find(s => s.type === 'reflection')?.prompts?.length ?? 0;
  const totalVocab = screens.filter(s => s.type === 'magazine').reduce((sum, s) => sum + (s.vocab?.length || 0), 0);
  console.log(`[LESSON-HISTORY-UE-L09 v1] Loaded with ${mags} magazine sections, ${totalVocab} vocab terms, ${game} game cases, ${quiz} quiz Qs, ${refl} reflection prompts`);
}
