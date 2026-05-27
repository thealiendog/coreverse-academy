// ─────────────────────────────────────────────────────────────────────────────
// HISTORY UE  |  L12 — Colonialism and Its Legacy
// Age band : upper_explorers (9–10)   Guide: lyra
// Standards: C3 D2.His.4.3-5 — Multiple perspectives
//            C3 D2.His.14.3-5 — Causes and effects
//            C3 D2.His.16.3-5 — Use evidence to develop claims
// CALIBRATED: UE spec v1.1 — real domain terms, em-dashes sparing
// SCOPE: 4 concepts — what colonialism was, why it happened, perspectives
//        of different groups, the lasting legacy
// VERSION: v1
// CONTESTED TOPIC: Multi-perspective treatment, settled facts honestly,
//                  no political agenda pushed.
// ─────────────────────────────────────────────────────────────────────────────

const HISTORY_UE_L12 = {
  ageBand: `upper_explorers`,
  subjectId: `history`,
  guide: `lyra`,

  lessons: [
    {
      id: `hw-9-10-12`,
      title: `Colonialism and Its Legacy`,
      duration: 18,
      xpReward: 75,
      badge: `world-history-thinker`,
      badgeName: `World History Thinker`,

      screens: [
        {
          id: `l12-welcome`,
          type: `welcome`,
          guideText: `Hey {name}, Lyra here. Today's lesson covers a topic where reasonable people still disagree about how to interpret what happened. COLONIALISM is the period when European countries built empires across Africa, Asia, and the Americas, ruling over other peoples for centuries. The history is complicated. There were costs, there were some benefits, and there are very different views depending on who tells the story. Our job today is to look at the FACTS honestly and consider MULTIPLE PERSPECTIVES. Let's go.`,
          headline: `Colonialism and Its Legacy`,
          subtitle: `When European empires ruled much of the world, and what came after`,
          visual: `/ue-assets/history/l12-welcome.webp`,
        },

        {
          id: `l12-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `What Colonialism Actually Was`,
          paragraphs: [
            `COLONIALISM is when one country takes control of another country or region and rules it for the benefit of the controlling country. Starting around 1500, several European countries (Spain, Portugal, England, France, the Netherlands, and others) began establishing COLONIES across the world. By 1900, European empires controlled most of Africa, much of Asia, all of the Americas, and many parts of the Pacific. About 85% of the world's land area was at some point under European colonial control.`,
            `Different colonies looked different. Some were SETTLEMENT colonies where Europeans moved in and built new societies, like the early American colonies or Australia. Others were EXTRACTION colonies, where Europeans ruled but didn't settle, mainly to take resources back home. India under British rule was largely an extraction colony. Both kinds had different effects, but both involved one country ruling over another by force. That's the basic definition.`,
          ],
          image: `/ue-assets/history/l12-s1-overview.webp`,
          imageCaption: `By 1900, European empires controlled about 85% of the world's land.`,
          vocab: [
            { word: `colony`,
              definition: `A territory ruled by a country far away, usually for the controlling country's benefit. European countries had colonies across Africa, Asia, and the Americas.`,
              audioPrompt: `A colony is a territory ruled by a country far away, {name}. Usually for the controlling country's benefit. European countries established colonies across Africa, Asia, and the Americas starting around 1500. By 1900, European empires controlled most of the world. Colonies looked different in different places. Some were settled by Europeans. Others were ruled by small numbers of Europeans extracting wealth. But all involved one country ruling another by force.` },
            { word: `sovereignty`,
              definition: `The right and power of a country or people to govern themselves. Colonialism denied sovereignty to colonized peoples by placing them under the rule of a foreign power.`,
              audioPrompt: `Sovereignty is the right and power of a people to govern themselves, {name}. A sovereign country makes its own laws, chooses its own leaders, and controls its own land and resources. Colonial rule took sovereignty away from the people being colonized. Their laws were written by foreigners. Their resources were taken to another country. Their leaders were replaced by colonial officials. The fight for sovereignty, the right to self-rule, became the driving force behind independence movements around the world in the 20th century.` },
          ],
        },

        {
          id: `l12-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Why Did It Happen?`,
          paragraphs: [
            `Historians point to several reasons. ECONOMICS: European countries wanted resources like gold, silver, spices, sugar, cotton, and tea that were hard to get otherwise. They also wanted markets to sell their factory-made goods. POLITICS: European nations competed against each other for power. Having more colonies meant more wealth, more soldiers, more influence. TECHNOLOGY: After about 1500, European ships, weapons, and later industrial machines gave them advantages in conflict that most other societies couldn't match.`,
            `Many Europeans of the time genuinely believed they had a duty or right to rule others. Some justified colonialism with religious arguments ("we're spreading Christianity"). Some justified it with arguments about civilization ("we're bringing progress"). Some justified it with arguments about race ("we're superior to others"). Today, most historians see these justifications as wrong, even if the people who used them sincerely believed them at the time. Acknowledging this honestly is part of seeing the period clearly.`,
          ],
          image: `/ue-assets/history/l12-s2-why.webp`,
          imageCaption: `Economics. Politics. Technology. Beliefs of the time.`,
          vocab: [
            { word: `empire`,
              definition: `A large political unit ruled by a single leader or government, often covering territory taken from other peoples. European colonial empires were among the largest in history.`,
              audioPrompt: `An empire is a large political unit ruled by one government, {name}. Usually covering territory taken from other peoples. The British Empire at its peak ruled about a quarter of the world's land and population. The Spanish, French, Dutch, Portuguese, and other European empires also held huge territories. Empires concentrated wealth and power in the home country, often at great cost to the people in the colonies.` },
            { word: `imperialism`,
              definition: `The policy of extending a country's power and influence over other countries through military force, economic control, or cultural dominance. Colonialism is the most direct form of imperialism.`,
              audioPrompt: `Imperialism is the policy of extending one country's power over others, {name}. Colonialism (physically ruling other territories) is the most direct form. But imperialism can also be economic, where a powerful country controls another's trade and resources without formally governing it. European imperialism reshaped the world between 1500 and the mid-1900s. Understanding imperialism helps explain why some countries are rich today and others are poor, because wealth was systematically moved from colonized regions to colonial powers for centuries.` },
          ],
        },

        {
          id: `l12-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Different Perspectives`,
          paragraphs: [
            `Honest history means listening to multiple sides. From the EUROPEAN perspective at the time, colonialism brought wealth home, expanded national power, and (some believed) spread "civilization." From the perspective of COLONIZED PEOPLE, the experience was very different. Local cultures were often suppressed. Traditional rulers were displaced. Resources were extracted and shipped to Europe. Diseases brought by Europeans killed huge numbers, especially in the Americas. Forced labor and slavery were widespread. Famines, sometimes caused by colonial policies, killed millions in places like India and Ireland.`,
            `Some genuine progress did happen under colonial rule. Some colonies received railways, schools, and modern medicine. Some colonized peoples themselves used colonial institutions for advancement, like Indians who became lawyers and later led independence movements. But these things came alongside, and were limited by, the basic reality of being ruled by foreigners. The view that the costs vastly outweighed the benefits is held by most historians today, and especially by historians from the formerly colonized world. Other historians emphasize the modernizing effects. Both viewpoints exist. You'll encounter both as you grow up. Decide what you think based on evidence.`,
          ],
          image: `/ue-assets/history/l12-s3-perspectives.webp`,
          imageCaption: `Different sides of the story. All worth listening to.`,
          vocab: [
            { word: `perspective`,
              definition: `The viewpoint of a specific person or group, including their experiences, interests, and beliefs. Understanding history requires considering many perspectives.`,
              audioPrompt: `A perspective is the viewpoint of a specific person or group, {name}. Including their experiences, their interests, and their beliefs. Understanding history requires considering many perspectives. A British official in colonial India saw things one way. An Indian farmer working under that same colonial system saw things completely differently. Both perspectives are real. Both contain truth. Honest history listens to many perspectives and tries to understand each one.` },
            { word: `Indigenous`,
              definition: `Originating in and naturally belonging to a particular place. Indigenous peoples are those whose ancestors lived in a region before colonial powers arrived.`,
              audioPrompt: `Indigenous means originating in and naturally belonging to a particular place, {name}. Indigenous peoples are those whose families have lived in a region for thousands of years before outsiders arrived. Colonial history affected Indigenous peoples severely. In the Americas, disease and conquest killed up to 90% of Indigenous populations. Their land was taken, their languages suppressed, and their governing systems replaced. Understanding colonialism requires hearing Indigenous perspectives, not just the views of the colonizers.` },
          ],
        },

        {
          id: `l12-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `The Lasting Legacy`,
          paragraphs: [
            `By the mid-1900s, most colonies had won INDEPENDENCE. We'll cover decolonization in a few lessons. But the effects of colonial rule didn't disappear when the colonies became free countries. National borders drawn by European powers, often without considering local cultures, still cause conflicts today. Economic patterns set up during colonial rule still influence which countries are wealthy and which are poor. Languages spread during colonialism (English, French, Spanish, Portuguese) are still spoken across continents.`,
            `Cultural and historical wounds from colonialism are also still present. Stolen art, looted treasures, and human remains taken to European museums are debated to this day. Some former colonial powers have officially apologized for past wrongs. Some haven't. The descendants of colonized peoples often live with effects of those centuries of foreign rule. Understanding the legacy of colonialism doesn't require agreeing on every interpretation. It just requires being honest that the period left long shadows that are still visible today.`,
          ],
          image: `/ue-assets/history/l12-s4-legacy.webp`,
          imageCaption: `Colonies became free, but the effects didn't disappear.`,
          vocab: [
            { word: `colonialism`,
              definition: `The practice of one country taking control of another country or region and ruling it, usually for the controlling country's benefit. European colonialism shaped global history for about 500 years.`,
              audioPrompt: `Colonialism is the practice of one country taking control of another and ruling it, {name}. Usually for the controlling country's benefit. European colonialism dominated world history for about 500 years, from 1500 to the mid-1900s. It's one of the most studied and most argued-about topics in history. The basic facts about what happened are settled. How to interpret and judge it is something reasonable people still disagree about. Understanding both sides honestly is part of being a thoughtful student of history.` },
            { word: `independence`,
              definition: `Freedom from control by another country or power. Most colonies gained independence from European rule during the 20th century, especially after World War II.`,
              audioPrompt: `Independence is freedom from control by another country, {name}. Most colonies gained independence from European powers during the 20th century. India gained independence from Britain in 1947. Most African nations gained independence in the 1950s and 1960s. These independence movements were often led by people educated in colonial schools who used the colonizers' own ideas about freedom and rights to argue against colonial rule. Independence was a huge achievement, but it didn't automatically undo centuries of economic and cultural disruption.` },
          ],
        },

        {
          id: `l12-game`,
          type: `interactive`,
          format: `investigation`,
          guideText: `Investigation time, {name}. Four real facts from the colonial era. For each one, decide which kind of historical content it represents: SETTLED FACT (something historians widely agree happened), MULTIPLE PERSPECTIVES (something different groups experienced very differently), or COMPLICATED MIXED EFFECT (a real benefit that also caused real harm)?\n\nOne is sneakier than it looks.`,
          options: [
            { id: `settled-fact`,         label: `Settled Fact`,         color: `#34D399`, description: `A fact historians widely agree happened. Not contested.` },
            { id: `multiple-perspectives`, label: `Multiple Perspectives`, color: `#60A5FA`, description: `Something different groups experienced or interpreted very differently.` },
            { id: `mixed-effect`,          label: `Complicated Mixed Effect`, color: `#FBBF24`, description: `A real benefit that also caused real harm. Honest history has to hold both at once.` },
          ],
          cases: [
            {
              id: `case-1`,
              caseTitle: `Fact #1`,
              clues: [
                { text: `By 1900, the British Empire ruled about a quarter of the world's land and population.` },
                { text: `This is documented by maps, treaties, and historical records.` },
                { text: `Historians everywhere agree on this fact.` },
              ],
              correctAnswer: `settled-fact`,
              realWorldExample: `The size of the British Empire is well-documented historical fact.`,
              explanation: `Maps and documents prove it. No historian disputes the basic size of the British Empire at its peak. This is a clear settled fact, just like the dates of battles or the names of kings.`,
            },
            {
              id: `case-2`,
              caseTitle: `Fact #2`,
              clues: [
                { text: `The British built thousands of miles of railways across India.` },
                { text: `Railways helped move troops to control India and exports out of India to Britain.` },
                { text: `The same railways later helped independent India develop its economy.` },
              ],
              correctAnswer: `mixed-effect`,
              realWorldExample: `Indian railways are a frequently-cited example of colonial mixed effect.`,
              explanation: `Railways did real things for India. They also served British control and extraction. Both are true. Today, India still uses many of those same railways, but they were originally built to extract Indian wealth, not to help Indians. This is exactly the kind of complicated mixed effect colonialism often produced.`,
            },
            {
              id: `case-3`,
              caseTitle: `Fact #3`,
              clues: [
                { text: `In 1858, the British took direct control of India after a major Indian uprising.` },
                { text: `British leaders saw this as restoring order after a "mutiny."` },
                { text: `Indians today often call the same event a "war of independence."` },
              ],
              correctAnswer: `multiple-perspectives`,
              realWorldExample: `The 1857 uprising is still called by different names depending on perspective.`,
              explanation: `Same event. Different names. Different meanings. To the British of the time, it was a mutiny to be suppressed. To many Indians, it was an early independence struggle. The basic facts are settled (a major uprising happened), but how it's interpreted depends on perspective. Both interpretations contain real truth.`,
            },
            {
              id: `case-4`,
              caseTitle: `Fact #4 — The Tricky One`,
              clues: [
                { text: `European diseases like smallpox and measles killed huge numbers of Indigenous Americans after Europeans arrived.` },
                { text: `Estimates of Indigenous American populations before and after European contact suggest 50% to 90% died, mostly from diseases.` },
                { text: `The disease spread was not intentional in most cases. Europeans didn't understand how disease worked.` },
              ],
              correctAnswer: `settled-fact`,
              realWorldExample: `The catastrophic Indigenous American population loss after 1492 is one of the most documented disasters in history.`,
              explanation: `Tricky because the numbers (50-90% population decline) sound like they'd be contested. They're not. Historians widely agree this happened. What's debated is the INTERPRETATION (was it accident, was anyone responsible, what should descendants of all sides do about it). But the basic facts are settled. The lesson: settled facts can be horrifying. That doesn't make them less settled. Honest history sometimes means sitting with painful but documented truths.`,
            },
          ],
        },

        {
          id: `l12-quiz`,
          type: `quiz`,
          guideText: `Let's see what stuck, {name}.`,
          questions: [
            { id: `l12-q1`, format: `multiple-choice`,
              question: `What is COLONIALISM?`,
              options: [
                `Trading between countries`,
                `When one country takes control of another country or region and rules it, usually for the controlling country's benefit`,
                `Religious teaching`,
                `A type of government`,
              ],
              correctIndex: 1,
              explanation: `Colonialism is when one country rules over another. European colonialism dominated world history from about 1500 to the mid-1900s.` },

            { id: `l12-q2`, format: `multiple-choice`,
              question: `Roughly how much of the world's land area was at some point under European colonial control by 1900?`,
              options: [
                `About 10%`,
                `About 85%`,
                `About 50%`,
                `Only Europe`,
              ],
              correctIndex: 1,
              explanation: `By 1900, European empires (Britain, France, Spain, Portugal, Netherlands, and others) had controlled about 85% of the world's land area at one point or another. The British Empire alone ruled about a quarter of the world.` },

            { id: `l12-q3`, format: `multiple-choice`,
              question: `Why did European colonialism happen?`,
              options: [
                `One reason: economics`,
                `Multiple reasons including economics, political competition, technology, and beliefs of the time`,
                `Because of religion only`,
                `Random chance`,
              ],
              correctIndex: 1,
              explanation: `Historians usually point to many factors: wanting resources and markets (economic), competing with other European powers (political), having advantages in ships and weapons (technology), and beliefs of the time that justified rule.` },

            { id: `l12-q4`, format: `multiple-choice`,
              question: `Why does HISTORY require considering MULTIPLE PERSPECTIVES?`,
              options: [
                `It doesn't`,
                `Because different groups experienced the same events very differently, and honest history listens to many sides`,
                `To confuse students`,
                `Only one perspective matters`,
              ],
              correctIndex: 1,
              explanation: `The British in India saw the colonial relationship very differently than Indians did. Both perspectives are real. Honest history considers multiple viewpoints and tries to understand each one. This doesn't mean every viewpoint is equally true. It means each viewpoint contains real human experience.` },

            { id: `l12-q5`, format: `true-false`,
              question: `True or false: After 1492, European diseases killed somewhere between 50% and 90% of Indigenous Americans, mostly because no one (Europeans included) understood how disease worked.`,
              correctAnswer: true,
              explanation: `True. This is one of history's worst documented disasters. Historians widely agree it happened. The spread was mostly accidental because germ theory didn't exist yet. It's a settled, painful fact, not a contested claim.` },

            { id: `l12-q6`, format: `multiple-choice`,
              question: `What's a MIXED EFFECT in colonial history?`,
              options: [
                `Two colonies merging`,
                `Something with both real benefits AND real harms — like railways that helped India develop AND served British extraction`,
                `When colonies trade with each other`,
                `An accident`,
              ],
              correctIndex: 1,
              explanation: `Mixed effects are common in colonialism. Railways are a classic example. They served extraction AND later helped independent India. Both are true. Honest history holds both at once.` },

            { id: `l12-q7`, format: `multiple-choice`,
              question: `Why does the LEGACY of colonialism still matter today?`,
              options: [
                `It doesn't`,
                `Because national borders, economic patterns, languages, and cultural wounds from the colonial era are still shaping the modern world`,
                `Only in former colonies`,
                `Only in Europe`,
              ],
              correctIndex: 1,
              explanation: `Colonial borders still cause conflicts. Languages spread during colonialism are still spoken across continents. Economic patterns set up centuries ago still influence which countries are rich and which are poor. The shadows of colonialism are still long.` },

            { id: `l12-q8`, format: `multiple-choice`,
              question: `When historians study colonialism honestly, what do they usually do?`,
              options: [
                `Only emphasize the bad parts`,
                `Only emphasize the good parts`,
                `Acknowledge settled facts, listen to multiple perspectives, and hold complicated mixed effects without pretending either side away`,
                `Skip the topic`,
              ],
              correctIndex: 2,
              explanation: `Good historical thinking faces hard topics directly. Some things are settled facts (sizes of empires, population losses, treaties). Some require multiple perspectives (different groups experienced events differently). Some are mixed effects (real benefit AND real harm). Honest history holds all of this at once.` },
          ],
        },

        {
          id: `l12-reflection`,
          type: `reflection`,
          guideText: `Before we wrap, {name}, pick ONE question and actually answer it. Your response gets saved, and I'll remember it next time we talk.`,
          prompts: [
            { id: `r1`, text: `Why is it hard for humans to hold both the good and bad sides of a historical period at the same time?` },
            { id: `r2`, text: `Imagine being a child in India under British rule in 1880, going to a school the British set up. What might be good about your experience? What might be hard?` },
            { id: `r3`, text: `Do you think the descendants of colonized peoples should receive anything from former colonial powers today? Why or why not? (There's no right answer. Just think it through.)` },
            { id: `r4`, text: `If you traveled back to 1850 and met someone who genuinely believed colonialism was helping people, what would you ask them?` },
          ],
        },

        {
          id: `l12-realworld`,
          type: `real-world`,
          guideText: `Many of the world's modern conflicts have colonial roots. Borders drawn by European powers across Africa often cut through cultures and communities, creating tensions that still cause conflicts today. Languages from colonial empires (English, French, Spanish, Portuguese) are spoken across continents. Economic patterns set up centuries ago still influence wealth and poverty around the world. Understanding colonialism honestly is part of understanding why the modern world looks the way it does, including why some countries are rich and others poor.`,
          familyAdventure: `Family Map Reading. Look at a modern world map together. Pick three African countries. Look at their borders. Now look up which European countries colonized them and when. Notice how many borders are straight lines that don't follow rivers or mountains. Discuss: what might it be like for a country to have borders drawn by outsiders? What real issues does that create today?`,
          creativePrompt: {
            intro: `Imagine you're a journalist in 1900 interviewing TWO people about colonial rule in India. One is a British official. One is an Indian farmer. Write a short article.`,
            floor: `Write at least 5 sentences. Quote the British official's view. Quote the Indian farmer's view. Don't pick sides. Let the reader hear both.`,
            stretch: `Write 8 to 10 sentences. Cover the British view of the railways, schools, and order. Cover the Indian view of taxes, lost land, and lost freedom. End with a question for the reader.`,
            open: `Write as much as you want. Build a full balanced article that quotes both perspectives fully, includes one mixed-effect topic (railways or schools), and lets the reader draw conclusions.`,
            frames: [
              `I interviewed two people about colonial India.`,
              `The British official said ___.`,
              `The Indian farmer said ___.`,
              `One thing they both agreed about was ___.`,
              `What I'm left wondering is ___.`,
            ],
          },
        },

        {
          id: `l12-celebration`,
          type: `celebration`,
          message: `Great work, {name}. You can now explain what colonialism was, the reasons it happened, and consider multiple perspectives on what happened. You can also hold settled facts honestly and complicated mixed effects together. That's serious historical thinking. Next lesson: another contested topic. The RUSSIAN REVOLUTION, when one of the world's biggest political experiments began. See you there. — Lyra.`,
          badge: `world-history-thinker`,
          badgeName: `World History Thinker`,
          xpEarned: 75,
        },
      ],
    },
  ],
};

export default HISTORY_UE_L12;

// ─── Dev asset check ──────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const screens = HISTORY_UE_L12.lessons[0].screens;
  const mags = screens.filter(s => s.type === 'magazine').length;
  const game = screens.find(s => s.type === 'interactive')?.cases?.length ?? 0;
  const quiz = screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  const refl = screens.find(s => s.type === 'reflection')?.prompts?.length ?? 0;
  const totalVocab = screens.filter(s => s.type === 'magazine').reduce((sum, s) => sum + (s.vocab?.length || 0), 0);
  console.log(`[LESSON-HISTORY-UE-L12 v1] Loaded with ${mags} magazine sections, ${totalVocab} vocab terms, ${game} game cases, ${quiz} quiz Qs, ${refl} reflection prompts`);
}
