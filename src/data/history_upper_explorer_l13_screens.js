// ─────────────────────────────────────────────────────────────────────────────
// HISTORY UE  |  L13 — The Russian Revolution
// Age band : upper_explorers (9–10)   Guide: lyra
// Standards: C3 D2.His.4.3-5 — Multiple perspectives
//            C3 D2.His.14.3-5 — Causes and effects
//            C3 D2.His.16.3-5 — Use evidence to develop claims
// CALIBRATED: UE spec v1.1 — real domain terms, em-dashes sparing
// SCOPE: 4 concepts — what led to revolution, what happened in 1917,
//        the Soviet experiment that followed, the lasting impact
// VERSION: v1
// CONTESTED TOPIC: Stick to settled facts. Acknowledge multiple perspectives
//                  on the revolution's causes and outcomes. No agenda.
// ─────────────────────────────────────────────────────────────────────────────

const HISTORY_UE_L13 = {
  ageBand: `upper_explorers`,
  subjectId: `history`,
  guide: `lyra`,

  lessons: [
    {
      id: `hw-9-10-13`,
      title: `The Russian Revolution`,
      duration: 18,
      xpReward: 75,
      badge: `revolution-historian`,
      badgeName: `Revolution Historian`,

      screens: [
        {
          id: `l13-welcome`,
          type: `welcome`,
          guideText: `Hey {name}, Lyra here. Today we look at one of the most important political events of the 20th century. In 1917, the country of Russia overthrew its emperor (called the TSAR) and started a new government based on COMMUNISM, a system that aimed for everyone to share resources equally. The experiment lasted about 70 years. It changed the world, sparked decades of competition with the United States, and ended in 1991. The Russian Revolution is still debated. We'll cover the facts and the different ways people view what happened. Let's go.`,
          headline: `The Russian Revolution`,
          subtitle: `When Russia tried one of history's biggest political experiments`,
          visual: `/ue-assets/history/l13-welcome.webp`,
        },

        {
          id: `l13-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Russia Before the Revolution`,
          paragraphs: [
            `In the early 1900s, Russia was ruled by an emperor called the TSAR. Tsar Nicholas II had nearly absolute power. The country was huge but poorly run. Most Russians were poor PEASANTS farming small plots of land they didn't own. A small group of nobles owned most of the wealth. Russia also had factory workers in growing cities, living in conditions similar to the Industrial Revolution era we covered earlier. They had low wages, long hours, and almost no rights.`,
            `Then came WORLD WAR I, which started in 1914. Russia entered the war and did badly. Russian soldiers were sent to fight with too little food, too few weapons, and poor leadership. Millions died. Back home, food shortages got worse and worse. People got hungrier and angrier. By 1917, the country was breaking down. The tsar's government had lost the trust of soldiers, workers, peasants, and even much of the upper class. Something had to give.`,
          ],
          image: `/ue-assets/history/l13-s1-before.webp`,
          imageCaption: `An emperor, poor peasants, hungry workers, a failing war. Revolution was coming.`,
          vocab: [
            { word: `tsar`,
              definition: `The emperor of Russia. The Russian tsar had nearly absolute power before the 1917 revolution. The last tsar was Nicholas II.`,
              audioPrompt: `A tsar was the emperor of Russia, {name}. The word comes from the Latin word "Caesar." Tsars ruled with nearly absolute power. They controlled the army, the government, and most major decisions. The last tsar was Nicholas II. He was overthrown in 1917 and his family was killed in 1918. Russia had been ruled by tsars for centuries before the revolution. Their rule ended when the country couldn't take the pressures of war and inequality anymore.` },
            { word: `autocracy`,
              definition: `A system of government where one person holds unlimited and unchecked power. Russia under the tsars was an autocracy — one ruler, no meaningful checks on their authority.`,
              audioPrompt: `An autocracy is a system where one person holds unlimited power with no meaningful checks or limits, {name}. Russia under the tsars was a classic autocracy. The tsar could make any law, command the army, and imprison anyone who disagreed. There was no elected parliament with real power, no free press, and no independent courts that could overrule him. Most historians see this concentration of power as one of the main reasons Russia became unstable. When the one person at the top fails, the whole system can collapse rapidly.` },
          ],
        },

        {
          id: `l13-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `1917: The Year Everything Changed`,
          paragraphs: [
            `1917 had TWO revolutions, not one. In FEBRUARY, mass strikes and protests in the capital forced Tsar Nicholas II to step down. A temporary government took over, but it kept Russia in World War I, which most Russians wanted to end. Food shortages continued. Many soldiers were deserting. The temporary government couldn't control the situation.`,
            `In OCTOBER, a smaller political group called the BOLSHEVIKS, led by VLADIMIR LENIN, took power in a second revolution. They promised "peace, bread, and land" to soldiers, workers, and peasants. They quickly pulled Russia out of World War I. Then they began transforming Russia according to the political ideas of KARL MARX, a German thinker who had written about a system called COMMUNISM. This was the start of the Soviet experiment that would last for the next 70 years.`,
          ],
          image: `/ue-assets/history/l13-s2-1917.webp`,
          imageCaption: `February: tsar overthrown. October: Bolsheviks take power. One year, two revolutions.`,
          vocab: [
            { word: `revolution`,
              definition: `A major, often sudden change in how a country is governed or how its society is structured. The Russian Revolution overthrew the tsar and created the Soviet Union.`,
              audioPrompt: `A revolution is a major, often sudden change in how a country is governed, {name}. Revolutions usually involve overthrowing the existing government. The American Revolution created the United States. The French Revolution overthrew the French king. The Russian Revolution overthrew the tsar and created the Soviet Union. Revolutions can be violent or peaceful, fast or slow. They always involve big changes in who has power.` },
            { word: `Lenin`,
              definition: `Vladimir Lenin, the leader of the Bolsheviks who led the October 1917 revolution and became the first leader of the Soviet Union. He ruled until his death in 1924.`,
              audioPrompt: `Vladimir Lenin was the leader who led the October 1917 revolution in Russia, {name}. He headed a political group called the Bolsheviks. They promised the Russian people peace from World War I, bread to eat, and land for peasants. After taking power, Lenin led the transformation of Russia into the Soviet Union, the world's first communist state. He ruled until his death in 1924. Lenin is one of the most important and most argued-about figures of the 20th century. His decisions shaped not just Russia but world history for decades.` },
          ],
        },

        {
          id: `l13-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `The Soviet Experiment`,
          paragraphs: [
            `The new government, eventually called the SOVIET UNION, tried something never tried at this scale before. The government took control of factories, farms, and businesses. The idea was that all major resources would be owned in common rather than by individuals or families. Schools, healthcare, and basic needs were provided by the state. The official goal was a society where everyone was equal and no one was rich or poor.`,
            `What actually happened over the next 70 years is one of the most debated topics in history. Some real achievements happened. Literacy rates rose dramatically. Soviet science put the first satellite (Sputnik) and the first human (Yuri Gagarin) into space. Industrial output grew rapidly. But under leaders like JOSEPH STALIN (who ruled from 1924 to 1953), the Soviet system also produced harsh policies. Millions died in famines (especially in Ukraine in the 1930s) and political purges (when Stalin had millions of people he considered enemies imprisoned or killed). Freedom of speech, free elections, and many freedoms most Western countries protected did not exist. The Soviet experiment included real achievements AND real harsh costs at the same time.`,
          ],
          image: `/ue-assets/history/l13-s3-soviet.webp`,
          imageCaption: `Achievements, suffering, and a 70-year experiment.`,
          vocab: [
            { word: `communism`,
              definition: `A political and economic system based on the ideas of Karl Marx, where resources are owned in common rather than by individuals. The Soviet Union was the largest country ever organized around communist ideas.`,
              audioPrompt: `Communism is a political and economic system, {name}. The basic idea, from a German thinker named Karl Marx, is that resources and factories should be owned in common by everyone rather than by individuals or families. Marx believed this would create a society without rich or poor. The Soviet Union (1922-1991) was the largest country ever organized around communist ideas. Other countries, like China, Cuba, and Vietnam, adopted versions of the system too. How well it worked in practice is one of the most argued-about questions of the 20th century.` },
            { word: `Soviet Union`,
              definition: `The communist state created after the Russian Revolution, lasting from 1922 to 1991. It was the world's largest country by land area and one of the two Cold War superpowers.`,
              audioPrompt: `The Soviet Union was the communist state created after the Russian Revolution, {name}. It lasted from 1922 to 1991. At its peak, the Soviet Union covered about one-sixth of the world's land area, making it the largest country on Earth. It was one of the two Cold War superpowers, competing with the United States for global influence for decades. The Soviet Union broke apart in 1991 into 15 separate countries, including modern Russia and Ukraine.` },
          ],
        },

        {
          id: `l13-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `The End and the Long Shadow`,
          paragraphs: [
            `After World War II ended in 1945, the Soviet Union and the United States became the two most powerful countries in the world. They were RIVALS for decades in what's called the COLD WAR. They competed in nuclear weapons, in space, in influence over other countries, in everything except direct military fighting. The world was tense and the threat of nuclear war was very real. This rivalry lasted from about 1947 until 1991, when the Soviet Union collapsed.`,
            `Why did the Soviet Union end? Its economy struggled to keep up with the West. Many of its citizens wanted more freedom. Leaders like MIKHAIL GORBACHEV tried reforms in the 1980s, but the system was too damaged to save. By 1991, the Soviet Union had broken into 15 separate countries, including modern Russia, Ukraine, and others. The communist experiment, at the scale of a superpower, was over. Smaller communist governments still exist (notably China, which has changed its system significantly). The legacy of the Russian Revolution is still being debated and lived with today.`,
          ],
          image: `/ue-assets/history/l13-s4-end.webp`,
          imageCaption: `The Soviet Union ended in 1991. The arguments about it haven't.`,
          vocab: [
            { word: `Cold War`,
              definition: `The decades of political and military tension between the Soviet Union and the United States (about 1947-1991). Called "cold" because the two sides never directly fought, though they competed everywhere else.`,
              audioPrompt: `The Cold War was the long rivalry between the Soviet Union and the United States, {name}. It lasted from about 1947 to 1991. The two superpowers competed in nuclear weapons, in space, and in influence over other countries. They came close to nuclear war several times. It's called "cold" because the two sides never directly fought each other, though they fought through smaller wars and proxies in places like Korea and Vietnam. The Cold War shaped the entire second half of the 20th century.` },
            { word: `superpower`,
              definition: `A country with enough military, economic, and political strength to influence events around the world. After World War II, only the United States and Soviet Union were considered superpowers.`,
              audioPrompt: `A superpower is a country with extraordinary military, economic, and political strength that can influence events around the globe, {name}. After World War II, most of the world's other powerful nations had been weakened by the fighting. Only two emerged as superpowers: the United States and the Soviet Union. Their competition defined the Cold War era. When the Soviet Union collapsed in 1991, the United States became the world's sole superpower for a time. Today, China is widely considered a superpower as well.` },
          ],
        },

        {
          id: `l13-game`,
          type: `interactive`,
          format: `investigation`,
          guideText: `Investigation time, {name}. Four facts related to the Russian Revolution and Soviet history. For each one, decide what kind of fact it is: SETTLED FACT (historians widely agree), MULTIPLE PERSPECTIVES (different groups view it very differently), or MIXED EFFECT (real achievement AND real cost)?\n\nOne is sneakier than it looks.`,
          options: [
            { id: `settled-fact`,         label: `Settled Fact`,         color: `#34D399`, description: `A fact historians widely agree happened. Not contested.` },
            { id: `multiple-perspectives`, label: `Multiple Perspectives`, color: `#60A5FA`, description: `Something different groups view very differently, where multiple interpretations exist.` },
            { id: `mixed-effect`,          label: `Mixed Effect`,         color: `#FBBF24`, description: `A real achievement that also had real costs. Honest history holds both.` },
          ],
          cases: [
            {
              id: `case-1`,
              caseTitle: `Fact #1`,
              clues: [
                { text: `Tsar Nicholas II abdicated (gave up the throne) in February 1917.` },
                { text: `Records, photographs, and official documents confirm this.` },
                { text: `Historians universally agree this happened.` },
              ],
              correctAnswer: `settled-fact`,
              realWorldExample: `The abdication of Nicholas II is one of the most documented events in 20th century history.`,
              explanation: `Documents prove it. Eyewitnesses confirmed it. Historians worldwide agree on the basic fact. Pure settled fact. The abdication ended over 300 years of Russian rule by the Romanov family.`,
            },
            {
              id: `case-2`,
              caseTitle: `Fact #2`,
              clues: [
                { text: `Soviet education systems eliminated illiteracy. Russian literacy went from about 30% in 1917 to over 99% by 1970.` },
                { text: `Soviet science achieved major firsts: Sputnik (1957), first human in space (1961).` },
                { text: `The same system included extensive surveillance, restricted speech, and political prisoner camps.` },
              ],
              correctAnswer: `mixed-effect`,
              realWorldExample: `Soviet achievements and Soviet repression existed at the same time.`,
              explanation: `Massive literacy gains and space achievements are real Soviet accomplishments. Mass surveillance and political prisoner camps also really existed. Both are true. Honest history acknowledges achievements AND costs without pretending either away.`,
            },
            {
              id: `case-3`,
              caseTitle: `Fact #3`,
              clues: [
                { text: `Soviet leader Joseph Stalin's collectivization of farms caused massive famine, especially in Ukraine in 1932-33.` },
                { text: `Documented death toll is in the millions.` },
                { text: `Ukrainians today call it the "Holodomor," meaning "death by hunger." Russia historically denied or minimized it.` },
              ],
              correctAnswer: `multiple-perspectives`,
              realWorldExample: `The Holodomor is recognized as genocide by many countries but the interpretation remains contested.`,
              explanation: `The basic facts of the famine are settled (millions died, it was related to Stalin's policies). But how it's interpreted depends on perspective. Many Ukrainians and Western countries call it a deliberate genocide. The Russian government historically disagreed. Same facts, very different interpretations.`,
            },
            {
              id: `case-4`,
              caseTitle: `Fact #4 — The Tricky One`,
              clues: [
                { text: `The Cold War (1947-1991) included the Cuban Missile Crisis in 1962.` },
                { text: `For 13 days, Americans and Soviets came closer to nuclear war than at any other point in history.` },
                { text: `Both leaders eventually backed down and reached a deal.` },
              ],
              correctAnswer: `settled-fact`,
              realWorldExample: `The Cuban Missile Crisis is one of the most documented Cold War events.`,
              explanation: `Tricky because the Cuban Missile Crisis is FAMOUS and dramatic. You might think it would be contested. It's not. The basic facts (who was involved, what happened, how it ended) are settled. What's debated is INTERPRETATION (was Khrushchev or Kennedy bolder, who really won), but the facts of what occurred are settled. The lesson: even very dramatic events can have settled facts. Drama doesn't equal disagreement.`,
            },
          ],
        },

        {
          id: `l13-quiz`,
          type: `quiz`,
          guideText: `Let's see what stuck, {name}.`,
          questions: [
            { id: `l13-q1`, format: `multiple-choice`,
              question: `Who was the TSAR overthrown by the Russian Revolution?`,
              options: [
                `Vladimir Lenin`,
                `Nicholas II`,
                `Joseph Stalin`,
                `Karl Marx`,
              ],
              correctIndex: 1,
              explanation: `Tsar Nicholas II was the last emperor of Russia. He abdicated in February 1917 after mass protests and strikes. He and his family were later killed in 1918.` },

            { id: `l13-q2`, format: `multiple-choice`,
              question: `How many revolutions did Russia have in 1917?`,
              options: [
                `One big one`,
                `Two — one in February (overthrew the tsar) and one in October (Bolsheviks took power)`,
                `Three`,
                `Zero — it was one big civil war`,
              ],
              correctIndex: 1,
              explanation: `1917 had two revolutions. February overthrew the tsar and brought in a temporary government. October brought the Bolsheviks, led by Lenin, to power. They created the Soviet Union.` },

            { id: `l13-q3`, format: `multiple-choice`,
              question: `What is COMMUNISM (the system the Soviet Union tried)?`,
              options: [
                `A type of religion`,
                `A political and economic system where resources are owned in common rather than by individuals`,
                `A monarchy`,
                `A type of trade agreement`,
              ],
              correctIndex: 1,
              explanation: `Communism is based on the ideas of Karl Marx. Resources are owned in common rather than by individuals or families. The Soviet Union was the biggest experiment with these ideas. Whether it worked in practice is heavily debated.` },

            { id: `l13-q4`, format: `multiple-choice`,
              question: `What was the COLD WAR?`,
              options: [
                `A war fought in cold places`,
                `The decades of tension between the Soviet Union and United States (about 1947-1991), called "cold" because they never directly fought`,
                `Any war in winter`,
                `A war over weather`,
              ],
              correctIndex: 1,
              explanation: `The Cold War was the long rivalry between the two superpowers. They competed in nuclear weapons, space, and influence around the world. They came close to nuclear war several times but never directly fought.` },

            { id: `l13-q5`, format: `true-false`,
              question: `True or false: The Soviet Union had real scientific and educational achievements AND also had harsh policies that killed millions.`,
              correctAnswer: true,
              explanation: `True. Both are part of Soviet history. The first human in space, dramatic literacy gains, and major scientific work are real Soviet achievements. The famines, political purges, and lack of freedom under leaders like Stalin are also real. Honest history holds both.` },

            { id: `l13-q6`, format: `multiple-choice`,
              question: `Who led the OCTOBER revolution that brought the Bolsheviks to power?`,
              options: [
                `Joseph Stalin`,
                `Vladimir Lenin`,
                `Karl Marx`,
                `Mikhail Gorbachev`,
              ],
              correctIndex: 1,
              explanation: `Vladimir Lenin led the Bolsheviks during the October 1917 revolution. He became the first leader of the Soviet Union and ruled until his death in 1924.` },

            { id: `l13-q7`, format: `multiple-choice`,
              question: `When did the SOVIET UNION end?`,
              options: [
                `1945`,
                `1991`,
                `1980`,
                `2000`,
              ],
              correctIndex: 1,
              explanation: `The Soviet Union collapsed in 1991. It broke into 15 separate countries including modern Russia, Ukraine, and others. The 70-year communist experiment, at the scale of a superpower, was over.` },

            { id: `l13-q8`, format: `multiple-choice`,
              question: `When historians study contested topics like the Russian Revolution, what do they do?`,
              options: [
                `Pick one side`,
                `Acknowledge settled facts, listen to multiple perspectives, recognize mixed effects, and let people decide based on evidence`,
                `Skip the topic`,
                `Only study one country's view`,
              ],
              correctIndex: 1,
              explanation: `Honest history doesn't pretend complicated topics are simple. The Russian Revolution had real causes (poverty, war, inequality), real achievements (literacy, space), and real costs (famines, purges, lost freedom). All of these belong in the picture.` },
          ],
        },

        {
          id: `l13-reflection`,
          type: `reflection`,
          guideText: `Before we wrap, {name}, pick ONE question and actually answer it. Your response gets saved, and I'll remember it next time we talk.`,
          prompts: [
            { id: `r1`, text: `If you'd lived as a hungry Russian factory worker in 1917, would the revolution have appealed to you? Why or why not?` },
            { id: `r2`, text: `The Soviet Union had real achievements AND real harsh costs. How do you think about an era that includes both?` },
            { id: `r3`, text: `Imagine being a kid your age living in the Soviet Union in 1960. What might your life have looked like? What might be different from yours?` },
            { id: `r4`, text: `Why do you think people sometimes try to fix unequal systems with revolutions instead of slower reforms?` },
          ],
        },

        {
          id: `l13-realworld`,
          type: `real-world`,
          guideText: `The Russian Revolution and the Soviet experiment shaped most of the 20th century. The Cold War influenced wars, alliances, technology races, and even space exploration. Many countries today still have political systems shaped by debates that started with this revolution. Modern Russia is still working through what its Soviet past means. Modern Ukraine, China, and many other countries are still affected by communist and post-communist history. Understanding this period is part of understanding the modern world.`,
          familyAdventure: `Family Two-Sided Story. As a family, pick any controversial topic (no rules about which one). Have one person make the strongest case for one side. Have another person make the strongest case for the other side. Then together, write down: which facts are settled (everyone agrees they happened) and which interpretations differ (people see the facts differently). This is exactly what historians do with topics like the Russian Revolution.`,
          creativePrompt: {
            intro: `Imagine you're a Russian peasant living through 1917. Write a letter to your grandchild about what you saw.`,
            floor: `Write at least 5 sentences. Describe your life before the revolution, what changed in 1917, and how you feel about it now (as an old person looking back).`,
            stretch: `Write 8 to 10 sentences. Cover the hunger and unfairness before the revolution, what the revolution felt like in the moment, and what happened in the decades after, with all the mixed effects.`,
            open: `Write as much as you want. Build a full first-person account that captures both hope and disappointment, both real change for the better and real costs that came after. Honest people who lived through this era held complicated feelings about it.`,
            frames: [
              `Before 1917, my life was ___.`,
              `When the revolution came, I felt ___.`,
              `In the years after, ___ changed for the better.`,
              `But ___ also happened, which was hard.`,
              `Looking back now, I think ___.`,
            ],
          },
        },

        {
          id: `l13-celebration`,
          type: `celebration`,
          message: `Great work, {name}. You can now explain what led to the Russian Revolution, describe the two revolutions of 1917, understand both the achievements and harsh costs of the Soviet experiment, and consider multiple perspectives on contested history. Next lesson: another major 20th century event that affected almost every country on Earth. The Great Depression. See you there. — Lyra.`,
          badge: `revolution-historian`,
          badgeName: `Revolution Historian`,
          xpEarned: 75,
        },
      ],
    },
  ],
};

export default HISTORY_UE_L13;

// ─── Dev asset check ──────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const screens = HISTORY_UE_L13.lessons[0].screens;
  const mags = screens.filter(s => s.type === 'magazine').length;
  const game = screens.find(s => s.type === 'interactive')?.cases?.length ?? 0;
  const quiz = screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  const refl = screens.find(s => s.type === 'reflection')?.prompts?.length ?? 0;
  const totalVocab = screens.filter(s => s.type === 'magazine').reduce((sum, s) => sum + (s.vocab?.length || 0), 0);
  console.log(`[LESSON-HISTORY-UE-L13 v1] Loaded with ${mags} magazine sections, ${totalVocab} vocab terms, ${game} game cases, ${quiz} quiz Qs, ${refl} reflection prompts`);
}
