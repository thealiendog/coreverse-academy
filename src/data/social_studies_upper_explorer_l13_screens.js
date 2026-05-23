// ─────────────────────────────────────────────────────────────────────────────
// SOCIAL STUDIES UE  |  L13 — Industrialization and Colonialism
// Age band : upper_explorers (9–10)   Guide: atlas
// Standards: C3 D2.His.1.3-5 / D2.His.2.3-5 / D2.His.14.3-5
// CALIBRATED: UE spec v1.1 + game toolkit v1
// Game format: branching-decision (eighteen-fifty perspective on industrialization and empire)
// TONE: Honest about harm. Even-handed about motives. Not bothsidesing genuine atrocity.
// ─────────────────────────────────────────────────────────────────────────────

const SOCIAL_STUDIES_UE_L13 = {
  ageBand: `upper_explorers`,
  subjectId: `social_studies`,
  guide: `atlas`,

  lessons: [
    {
      id: `social-studies-9-10-13`,
      title: `Industrialization and Colonialism`,
      duration: 24,
      xpReward: 75,
      badge: `history-thinker`,
      badgeName: `History Thinker`,

      screens: [
        {
          id: `l13-welcome`,
          type: `welcome`,
          guideText: `Welcome back, {name}. Today's lesson is heavier than the others, but it's important. We look at two huge forces that shaped the modern world — industrialization and colonialism. They happened in the same period, between roughly seventeen-fifty and nineteen hundred. Together they made some countries enormously wealthy. They also caused massive suffering for many millions of people. By the end, you'll understand both the technology that changed everything and the empires that built themselves on top of that change.`,
          headline: `Industrialization and Colonialism`,
          subtitle: `How the modern world was made — and at what cost`,
          visual: `/ue-assets/social-studies/l13-welcome.webp`,
        },

        {
          id: `l13-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `What Industrialization Was`,
          paragraphs: [
            `For most of human history, almost everything was made by hand. Clothes were sewn one at a time. Tools were forged one at a time. Most people lived on farms and produced most of what they used. Travel was slow — usually by foot or horse. Communication was slower — letters could take weeks or months.`,
            `Then, starting in Britain around seventeen-fifty, this began to change radically. Steam engines could do the work of dozens of horses. Factories could make thousands of identical items in the time it once took to make one. Railroads could move goods and people across countries in days, not weeks. Telegraphs could send messages around the world in minutes. This wave of changes is called the Industrial Revolution.`,
            `The effects were enormous. Cities exploded as people moved from farms to factory jobs. Some products got dramatically cheaper. Some people became extremely rich. Many workers, including children, labored long hours in dangerous conditions for little pay. Pollution from factories changed the air and water in industrial regions. The Industrial Revolution made the modern world possible — and also created many of its problems.`,
          ],
          image: `/ue-assets/social-studies/l13-s1-industrial.webp`,
          imageCaption: `Factories. Railroads. Mass production. The Industrial Revolution.`,
          vocab: [
            { word: `Industrial Revolution`,
              definition: `The period from around seventeen-fifty to the nineteen-hundreds when machines and factories transformed how goods were made.`,
              audioPrompt: `The Industrial Revolution was a huge change in how humans made things, {name}. Starting in Britain around seventeen-fifty, factories with steam-powered machines replaced hand-made production. Railroads replaced horses for moving goods. Mass-produced clothes replaced hand-sewn ones. The change started in textiles and spread to nearly every industry. It made some countries enormously wealthy. It also created cities with terrible working conditions, especially for children. The modern world — everything you live in today — is built on what the Industrial Revolution created.` },
            { word: `mass production`,
              definition: `Making large quantities of identical goods using machines and standardized processes in a factory.`,
              audioPrompt: `Mass production is making large numbers of identical goods using machines and standard processes, {name}. Before the Industrial Revolution, almost everything was made individually by hand. Mass production changed this completely — a factory could produce thousands of identical items per day. This made many products dramatically cheaper. Clothes, tools, weapons, furniture — all became affordable to people who couldn't previously buy them. Mass production also introduced the assembly line, where each worker does one small step repeatedly, maximizing speed and efficiency.` },
          ],
        },

        {
          id: `l13-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `What Colonialism Was`,
          paragraphs: [
            `Colonialism is when one country takes control of another country or region, often by force, and rules it for the colonizer's benefit. European countries — especially Britain, France, Spain, Portugal, the Netherlands, and Belgium — colonized large parts of the Americas, Africa, Asia, and Oceania over several centuries. At its peak, the British Empire alone ruled about a quarter of the world's land and people.`,
            `Why did this happen? European countries wanted resources — gold, silver, sugar, cotton, spices, rubber, oil. They wanted markets where they could sell their factory-made products. They wanted strategic territory. They believed their cultures, governments, and religions were superior — a belief used to justify conquest.`,
            `The effects on colonized people were devastating. Indigenous populations in the Americas were reduced by 80 to 90 percent through disease and violence. African societies were destabilized by the slave trade, with about 12 million Africans forced across the Atlantic. Indian and Chinese economies, once among the world's largest, were systematically weakened. Languages, religions, and cultural traditions were suppressed. Borders were drawn that still cause conflicts today. These were not minor side effects. They are central to understanding the modern world.`,
          ],
          image: `/ue-assets/social-studies/l13-s2-colonialism.webp`,
          imageCaption: `One country taking control of another by force, for the colonizer's benefit.`,
          vocab: [
            { word: `colonialism`,
              definition: `When one country takes control of another country or region, usually by force, and rules it for the colonizer's benefit.`,
              audioPrompt: `Colonialism is when one country takes control of another country or region, {name}, usually by force, and rules it to benefit the colonizing country. European colonialism, especially from the fifteen-hundreds through the nineteen-hundreds, took over huge parts of the Americas, Africa, Asia, and Oceania. The British Empire alone ruled about a quarter of the world. Colonialism enriched the colonizers and devastated colonized peoples. Understanding it is essential because so much of today's world — borders, inequalities, conflicts — comes from that history.` },
            { word: `empire`,
              definition: `A group of countries or territories ruled by one government, often a powerful country that took over others by force.`,
              audioPrompt: `An empire is a group of countries or territories ruled by one government, {name}. Usually that government is a powerful country that took over others by force. The British Empire, French Empire, Spanish Empire, Roman Empire, Ottoman Empire, and many others have shaped human history. At their peaks, empires can control vast amounts of land and many millions of people. They eventually fall, often after long struggles for independence by the people they ruled. Few empires last more than a few centuries — but their effects can last much longer.` },
          ],
        },

        {
          id: `l13-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `How Industrialization and Colonialism Fed Each Other`,
          paragraphs: [
            `These two forces weren't separate. They drove each other in important ways. Industrial factories needed enormous amounts of raw materials — cotton, rubber, oil, metals. Colonies provided those materials, often using forced or extremely cheap labor. Industrial factories also produced more goods than the home country could buy. Colonies provided markets where those goods could be sold.`,
            `Britain's cotton industry, for example, was built on cotton grown by enslaved people in the American South and, later, in colonial India and Egypt. Belgium's wealth came partly from rubber forced out of the Congo at staggering human cost. France built its wealth on resources from across North and West Africa and Southeast Asia. The pattern was similar across European empires.`,
            `Industrialization also gave European countries military advantages — better guns, ships, and railroads — that made conquest easier. Together, the two forces produced something unprecedented: a small number of countries with global power and wealth, and many countries reduced to providing resources and labor for them. This pattern shaped the modern world economy and is still visible in today's inequalities between regions.`,
          ],
          image: `/ue-assets/social-studies/l13-s3-feeding-each-other.webp`,
          imageCaption: `Factories needed raw materials. Colonies needed markets. The two fed each other.`,
          vocab: [
            { word: `exploitation`,
              definition: `Using someone or something unfairly for your own benefit, especially through force or unequal power.`,
              audioPrompt: `Exploitation means using someone or something unfairly for your own benefit, {name}, especially when there's a power difference. In economic terms, it usually means paying workers far less than the value they produce, or taking resources from a place without fair return. Colonialism was exploitation on a massive scale — colonizers took resources, labor, and wealth from places they ruled, and gave very little back. Industrial workers were also exploited in many factories — long hours, low pay, dangerous conditions, often including child labor.` },
            { word: `raw materials`,
              definition: `Unprocessed natural resources used to make other things — like cotton, rubber, iron ore, or timber.`,
              audioPrompt: `Raw materials are unprocessed natural resources used to manufacture goods, {name}. Cotton is a raw material for textiles. Iron ore is a raw material for steel. Rubber is a raw material for tires and industrial parts. Timber is a raw material for furniture and construction. During the Industrial Revolution and colonialism, European countries extracted vast amounts of raw materials from their colonies in Africa, Asia, and the Americas, often paying little or nothing for them. Control of raw materials was one of the main reasons empires expanded.` },
          ],
        },

        {
          id: `l13-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Independence and the World Today`,
          paragraphs: [
            `Beginning in the eighteen-hundreds and accelerating after nineteen forty-five, colonized peoples increasingly fought for and won independence. India became independent from Britain in nineteen forty-seven. Most African countries became independent between nineteen-sixty and nineteen seventy-five. Vietnam, Indonesia, Algeria, Kenya, and dozens of others freed themselves through political struggle, sometimes peaceful and sometimes violent.`,
            `Independence didn't erase the effects of colonialism. The borders European countries drew often combined peoples who didn't naturally belong together, or split peoples who did. Many former colonies inherited economies focused on producing one or two raw materials for export, making them vulnerable to price swings. Languages, religions, and educational systems imposed during colonialism remained. The wealth gap between former colonizers and former colonies is still wide today.`,
            `Understanding this history isn't about blaming anyone alive now. It's about understanding why the world looks the way it does. The inequalities between countries today aren't natural — they were created by specific historical events. Recognizing this helps us see current global issues — immigration, trade disputes, conflicts over borders — with more depth than the headlines provide.`,
          ],
          image: `/ue-assets/social-studies/l13-s4-independence.webp`,
          imageCaption: `Independence movements freed most colonies, but the effects of colonialism still shape the world.`,
          vocab: [
            { word: `independence`,
              definition: `When a country gains the right to govern itself, free from outside control.`,
              audioPrompt: `Independence is when a country gains the right to govern itself, {name}, free from outside control. Most former colonies are now independent. Some won independence peacefully through negotiation, like India in nineteen forty-seven. Others won it through wars of independence, like Algeria, Vietnam, and Kenya. Independence is a major moment, but it doesn't automatically fix the long-term effects of colonization — economic, social, cultural, and political effects can last for generations. Understanding this is part of understanding the current world.` },
            { word: `decolonization`,
              definition: `The process by which colonies gained independence from the countries that ruled them.`,
              audioPrompt: `Decolonization is the process by which colonies gained independence from the empires that ruled them, {name}. It happened mostly in the twentieth century. After World War Two, both Britain and France were weakened and could no longer hold their empires by force. Movements for independence grew stronger. India became independent in nineteen forty-seven. Most of Africa decolonized between nineteen-sixty and nineteen seventy-five. By the nineteen-eighties, most former colonies had become independent nations. Decolonization reshaped the political map of the world almost entirely.` },
          ],
        },

        // ── BRANCHING DECISION GAME — Decisions in eighteen-fifty ────────────────────────
        {
          id: `l13-game`,
          type: `interactive`,
          format: `branching-decision`,
          guideText: `Time travel, {name}. The year is eighteen-fifty. You're going to step into four very different perspectives during the height of industrialization and colonialism. None of these decisions are easy. After each, I'll tell you what actually happened and why these moments mattered.`,
          scenarioTitle: `Decisions at the Edge of the Modern World, eighteen-fifty`,
          decisions: [
            {
              id: `d1`,
              situation: `You're a working-class family in Manchester, England. Factory work pays poorly and is dangerous, but it's the only work available. Your 10-year-old has been offered a factory job that would help feed the family. What do you do?`,
              context: `This was a common situation. Child labor in factories was widespread in industrial Britain.`,
              options: [
                {
                  id: `a`,
                  label: `Send your 10-year-old to the factory — the family needs the money`,
                  preview: `Real wages, real risks. Common choice at the time.`,
                },
                {
                  id: `b`,
                  label: `Refuse — keep your child at home and away from danger`,
                  preview: `Safer, but the family may not have enough food.`,
                },
                {
                  id: `c`,
                  label: `Try to find a less dangerous form of work for the child`,
                  preview: `Options were limited. Most child work in the era was dangerous.`,
                },
              ],
              historicalChoice: `a`,
              explanation: `Option A is what most working-class families actually did, not because they wanted to, but because they had to. Child labor in textile mills, coal mines, and other factories was widespread in industrial Britain. Children worked 12-14 hour days starting at ages as young as 6 or 7. Many were injured or killed in machinery. Eventually, reforms like the Factory Acts limited child labor — but not until decades of activism by reformers, workers, and writers who exposed the conditions. Today, child labor remains a problem in many parts of the world.`,
            },
            {
              id: `d2`,
              situation: `You're a leader in a kingdom in West Africa. European traders offer guns, alcohol, and manufactured goods in exchange for enslaved people captured in wars with neighboring kingdoms. Refusing means losing this trade — and possibly being attacked by neighbors who accept it. What do you do?`,
              context: `This is the transatlantic slave trade era. Many West African kingdoms participated in capturing and selling enslaved people. About 12 million Africans were forced across the Atlantic between fifteen-hundred and eighteen-hundred.`,
              options: [
                {
                  id: `a`,
                  label: `Participate in the trade to keep your kingdom powerful`,
                  preview: `Short-term strength. Long-term devastation for the region.`,
                },
                {
                  id: `b`,
                  label: `Refuse the trade — even though neighbors will`,
                  preview: `Moral choice. Real strategic risk.`,
                },
                {
                  id: `c`,
                  label: `Try to limit your participation while protecting your people`,
                  preview: `A middle path some leaders attempted, with mixed results.`,
                },
              ],
              historicalChoice: `a`,
              explanation: `Many kingdoms historically chose option A, capturing and selling enslaved people to European traders in exchange for European goods, especially guns. The trade devastated the entire region — populations dropped, agriculture collapsed, ongoing wars destabilized whole societies. Some leaders did try option B or C, like King Agaja of Dahomey at certain points, but they were often overpowered by neighbors who participated. The transatlantic slave trade was sustained by European demand and ships, but it also relied on African elites who participated in capture. About 12 million Africans were forced across the Atlantic, with millions more dying in raids or on the ships. The consequences are still felt today, on both sides of the Atlantic.`,
            },
            {
              id: `d3`,
              situation: `You're a member of the British Parliament. A proposal is on the table: ban slavery throughout the British Empire. The wealthy sugar plantation owners in the Caribbean strongly oppose this — they say their entire economy will collapse. What do you do?`,
              context: `Britain abolished slavery in nineteen thirty-three (eighteen thirty-three), but only after decades of activism. The Slavery Abolition Act passed in eighteen thirty-three after years of effort by abolitionists.`,
              options: [
                {
                  id: `a`,
                  label: `Vote to ban slavery — it's morally indefensible`,
                  preview: `Right call. Was deeply unpopular with many wealthy interests.`,
                },
                {
                  id: `b`,
                  label: `Vote against — the economic disruption is too risky`,
                  preview: `Common position among the wealthy. Means continued cruelty.`,
                },
                {
                  id: `c`,
                  label: `Vote yes, but include large compensation to slave owners`,
                  preview: `What Britain actually did. Controversial then and now.`,
                },
              ],
              historicalChoice: `c`,
              explanation: `Option C is what actually happened. The Slavery Abolition Act of eighteen thirty-three ended slavery in most of the British Empire, but it paid 20 million pounds — about 40 percent of the government's annual budget — in compensation to the slave OWNERS, not to the enslaved people. The British government literally paid off this debt only in twenty fifteen. People who had been enslaved received nothing. Many were forced to continue working as "apprentices" for several more years. Abolition was a major step forward but messy and incomplete. Real moral progress is rarely as clean as the textbook version.`,
            },
            {
              id: `d4`,
              situation: `You're a young person in colonized India around the early nineteen-hundreds. British rule has devastated traditional industries and impoverished much of the country. Educated Indians like you face a choice: cooperate with the British system or organize for independence. What do you do?`,
              context: `This is the era of the Indian independence movement. Leaders like Mahatma Gandhi, Bhagat Singh, Subhas Chandra Bose, and Sarojini Naidu took different approaches to opposing British rule.`,
              options: [
                {
                  id: `a`,
                  label: `Work within the British system to push for reforms`,
                  preview: `Slow path. Maintained some privilege. Was the path of many.`,
                },
                {
                  id: `b`,
                  label: `Organize nonviolent resistance — strikes, boycotts, protests`,
                  preview: `The Gandhi approach. Slow but powerful when sustained.`,
                },
                {
                  id: `c`,
                  label: `Join the armed resistance against British rule`,
                  preview: `The Bhagat Singh approach. High risk. Some martyrs, some impact.`,
                },
              ],
              historicalChoice: `b`,
              explanation: `Option B is the path that ultimately succeeded most visibly. The Indian National Congress, led by Gandhi and many others, used sustained nonviolent resistance — strikes, boycotts, peaceful protests — over decades. India achieved independence in nineteen forty-seven. But it wasn't just one path. Armed resistance, political negotiation, journalism, and cultural movements all played roles. Some who chose option C, like Bhagat Singh, became major Indian heroes despite their short lives. Independence movements rarely succeed through one strategy alone — they succeed when many strategies work together over time.`,
            },
          ],
          completionMessage: `That's a heavy lesson, {name}. Notice what it shows. Real historical decisions were rarely between obviously good and obviously bad options. People faced impossible situations created by larger forces. Some chose courageously. Some chose cruelly. Some had no real choice at all. The world we live in today was built out of millions of these decisions, and we're still living with the consequences. Understanding this isn't pessimism — it's the start of clear-eyed thinking about how change really happens.`,
        },

        {
          id: `l13-quiz`,
          type: `quiz`,
          guideText: `Test what stuck, {name}.`,
          questions: [
            { id: `l13-q1`, format: `multiple-choice`,
              question: `What was the Industrial Revolution?`,
              options: [
                `A war between countries`,
                `The shift from hand-made production to machine and factory production, starting in Britain around seventeen-fifty`,
                `A type of music`,
                `The American Revolution`,
              ],
              correctIndex: 1,
              explanation: `The Industrial Revolution was the shift from hand-made production to machine-powered factories. It transformed economies, cities, and lives — for better and worse — over about 150 years.` },
            { id: `l13-q2`, format: `multiple-choice`,
              question: `What is colonialism?`,
              options: [
                `When countries trade peacefully`,
                `When one country takes control of another country or region, usually by force, for the colonizer's benefit`,
                `When people move to a new country voluntarily`,
                `When countries build factories`,
              ],
              correctIndex: 1,
              explanation: `Colonialism is one country taking control of another by force and ruling it for the colonizer's benefit. European powers colonized huge parts of the Americas, Africa, Asia, and Oceania over several centuries.` },
            { id: `l13-q3`, format: `multiple-choice`,
              question: `Why did industrialization and colonialism feed each other?`,
              options: [
                `They happened in the same country`,
                `Factories needed raw materials and markets, which colonies provided through force and unequal terms`,
                `They didn't really connect`,
                `Both required ships`,
              ],
              correctIndex: 1,
              explanation: `Factories needed raw materials (cotton, rubber, etc.) and markets to sell to. Colonies provided both — usually through forced labor and exploitative terms. The two systems reinforced each other.` },
            { id: `l13-q4`, format: `multiple-choice`,
              question: `Roughly how many Africans were forcibly transported across the Atlantic in the transatlantic slave trade?`,
              options: [
                `About 10,000`,
                `About 12 million`,
                `About 50 million`,
                `Around a thousand`,
              ],
              correctIndex: 1,
              explanation: `About 12 million Africans were forced across the Atlantic between roughly fifteen-hundred and eighteen-hundred. Millions more died in raids or on the ships. The trade devastated entire regions of Africa.` },
            { id: `l13-q5`, format: `true-false`,
              question: `True or false: Independence movements freed most colonies, but the effects of colonialism continued to shape those countries for generations.`,
              correctAnswer: true,
              explanation: `True. Independence is a real victory, but doesn't automatically undo decades or centuries of changes to borders, economies, languages, and inequality. Many former colonies are still working through these effects today.` },
            { id: `l13-q6`, format: `multiple-choice`,
              question: `Why was child labor common in industrial Britain?`,
              options: [
                `Children were stronger than adults`,
                `Working-class families were poor and needed every wage earner, including children — and factory owners exploited that`,
                `Children volunteered`,
                `It wasn't actually common`,
              ],
              correctIndex: 1,
              explanation: `Child labor was widespread because families were poor and factories paid lower wages to children. It took decades of reform activism to limit it. The Factory Acts and similar laws eventually banned the worst practices.` },
            { id: `l13-q7`, format: `multiple-choice`,
              question: `When did most African countries gain independence?`,
              options: [
                `In the seventeen-hundreds`,
                `Between nineteen-sixty and nineteen seventy-five`,
                `In nineteen-fifteen`,
                `They haven't yet`,
              ],
              correctIndex: 1,
              explanation: `Most African countries gained independence between nineteen-sixty and nineteen seventy-five — a wave of decolonization following World War II. This reshaped the political map of Africa in just over a decade.` },
            { id: `l13-q8`, format: `multiple-choice`,
              question: `Why is studying this history important?`,
              options: [
                `To blame people alive today`,
                `To understand why the world looks the way it does — why some countries are rich, why borders are where they are, why certain conflicts continue`,
                `It's not important`,
                `Just to memorize dates`,
              ],
              correctIndex: 1,
              explanation: `History helps us understand the present. The wealth gap between countries, current borders, ongoing conflicts, and global inequalities aren't natural — they were created by specific historical events. Understanding the past is how you see the present clearly.` },
          ],
        },

        {
          id: `l13-reflection`,
          type: `reflection`,
          guideText: `Heavy stuff, {name}. Take a real minute. Pick one prompt.`,
          prompts: [
            { id: `r1`, text: `Which of the four game decisions felt hardest to make? Why?` },
            { id: `r2`, text: `What surprised you most about this lesson?` },
            { id: `r3`, text: `How does the history we covered today connect to anything in your own life or family history?` },
            { id: `r4`, text: `If you were going to talk to a friend who didn't know any of this, what's the one thing you'd want them to understand?` },
          ],
        },

        {
          id: `l13-realworld`,
          type: `real-world`,
          guideText: `The legacies of industrialization and colonialism are still everywhere in the world today. They show up in wealth gaps between countries, in which languages get learned, in borders that don't match the people living inside them, in conflicts that go back centuries. Recognizing these patterns doesn't mean every modern problem is colonialism's fault. It means understanding that history is alive, not done. The past explains the present. The present is where you eventually get to make choices that shape what happens next.`,
          familyAdventure: `Together, pick one country that was once a colony — Vietnam, India, Kenya, Algeria, Brazil, or many others. Look up briefly: who colonized them, how long they were colonized, when they became independent, and what the country looks like today. Discuss: what surprised you? What questions does it raise?`,
          creativePrompt: {
            intro: `Pick one of the four decisions in the game and write a deeper version of it. What would you have done, and why?`,
            floor: `Write at least 5 sentences. Use the sentence starters if helpful.`,
            stretch: `Write 8-10 sentences. Take it seriously — explain the tradeoffs, the unknowns, what you'd be afraid of.`,
            open: `Write as much as you want. Imagine the full story of your decision and its consequences.`,
            frames: [
              `The decision I'm focusing on is ___.`,
              `What I would have done is ___.`,
              `My reasoning is ___.`,
              `What scares me about that choice is ___.`,
              `What I think it teaches about how history actually works is ___.`,
            ],
          },
        },

        {
          id: `l13-celebration`,
          type: `celebration`,
          message: `Heavy lesson, {name}. You handled it. You can now describe what industrialization was and how it changed the world, explain what colonialism was and how widely it spread, understand how the two reinforced each other, and recognize that the effects continue today. Next lesson we keep moving forward in history — into the World Wars, two of the most defining events of the twentieth century. — Atlas.`,
          badge: `history-thinker`,
          badgeName: `History Thinker`,
          xpEarned: 75,
        },
      ],
    },
  ],
};

export default SOCIAL_STUDIES_UE_L13;
