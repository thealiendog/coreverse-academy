// ─────────────────────────────────────────────────────────────────────────────
// HISTORY UE  |  L15 — Decolonization: Countries Winning Freedom
// Age band : upper_explorers (9–10)   Guide: lyra
// Standards: C3 D2.His.4.3-5 — Multiple perspectives
//            C3 D2.His.14.3-5 — Causes and effects
//            C3 D2.Civ.1.3-5 — Roles of citizens and leaders
// CALIBRATED: UE spec v1.1 — real domain terms, em-dashes sparing
// SCOPE: 4 concepts — why colonies wanted freedom, peaceful and armed paths,
//        key independence leaders (Gandhi, Mandela, Nkrumah), the long aftermath
// VERSION: v1
// ─────────────────────────────────────────────────────────────────────────────

const HISTORY_UE_L15 = {
  ageBand: `upper_explorers`,
  subjectId: `history`,
  guide: `lyra`,

  lessons: [
    {
      id: `hw-9-10-15`,
      title: `Decolonization: Countries Winning Freedom`,
      duration: 18,
      xpReward: 75,
      badge: `independence-historian`,
      badgeName: `Independence Historian`,

      screens: [
        {
          id: `l15-welcome`,
          type: `welcome`,
          guideText: `Hey {name}, Lyra here. Three lessons ago we covered colonialism, when European powers ruled most of the world. Today we cover the other half of that story. DECOLONIZATION is when colonized peoples won their freedom and became independent countries. Between about 1945 and 1980, dozens of new countries were born across Africa, Asia, and the Pacific. The story includes peaceful protests, armed resistance, brilliant leaders, and a transformation of the world map. Let's go.`,
          headline: `Decolonization`,
          subtitle: `When colonized peoples won independence and reshaped the world`,
          visual: `/ue-assets/history/l15-welcome.webp`,
        },

        {
          id: `l15-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Why Colonies Wanted Freedom`,
          paragraphs: [
            `Colonized peoples never really stopped wanting their freedom. Resistance to European rule existed from the very beginning. By the early 1900s, organized INDEPENDENCE MOVEMENTS were growing across Africa, Asia, and other colonized regions. Educated leaders argued that the same ideas Europeans had used to claim freedom from kings (equality, self-government, rights of the people) applied to colonized peoples too. If European nations got to govern themselves, why didn't India? Or Kenya? Or Vietnam? The argument was hard to answer.`,
            `World War II (1939-1945) accelerated the change. European powers were weakened by the war. Colonized soldiers had fought bravely alongside European troops, and now expected the freedom they'd defended. The Atlantic Charter, signed by Roosevelt and Churchill during the war, even said all peoples had the right to self-government. Once the war ended, independence movements grew quickly. The colonial empires that had ruled the world for centuries began to unravel.`,
          ],
          image: `/ue-assets/history/l15-s1-why-freedom.webp`,
          imageCaption: `Colonized peoples wanted what Europeans wanted: the right to rule themselves.`,
          vocab: [
            { word: `independence`,
              definition: `The state of a country being free to govern itself, not controlled by another country.`,
              audioPrompt: `Independence is the state of a country being free to govern itself, {name}. Not controlled by another country. The 13 American colonies declared their independence from Britain in 1776. The same word and idea was used by many other countries through history. After World War II, dozens of colonized countries won their independence from European powers. Independence usually doesn't happen by itself. It's fought for, sometimes peacefully and sometimes through war.` },
            { word: `decolonization`,
              definition: `The process by which colonized countries gained independence from European powers. Most decolonization happened between 1945 and 1980, reshaping the world map.`,
              audioPrompt: `Decolonization is the process by which colonized countries gained independence from European powers, {name}. Most of it happened between 1945 and 1980. Before 1945, European empires controlled about 85% of the world's land. By 1980, nearly all colonies had become independent countries. The wave of decolonization created dozens of new nations across Africa, Asia, and the Pacific. It's one of the biggest transformations of the 20th century and directly shaped the modern world map.` },
          ],
        },

        {
          id: `l15-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Two Paths: Peaceful and Armed`,
          paragraphs: [
            `Independence movements took different paths. Some chose PEACEFUL RESISTANCE. The most famous example is MOHANDAS GANDHI in India, who led mass protests, hunger strikes, and boycotts against British rule. His method, called NONVIOLENT RESISTANCE, refused to fight back even when the British used force. The strategy worked. India won independence in 1947. Gandhi's approach later inspired civil rights leaders around the world, including Martin Luther King Jr. in the United States.`,
            `Other movements chose ARMED RESISTANCE. In places where colonial governments crushed peaceful protest, independence fighters took up weapons. The Algerian War of Independence against France (1954-1962), the Vietnamese resistance against France (and later the U.S.), and many African armed independence struggles all involved long and bloody conflicts. Both paths, peaceful and armed, eventually won. By 1980, almost every colony had become an independent country, though some came at far higher cost than others.`,
          ],
          image: `/ue-assets/history/l15-s2-two-paths.webp`,
          imageCaption: `Some movements won peacefully. Others fought wars. Most colonies eventually got free.`,
          vocab: [
            { word: `nonviolent resistance`,
              definition: `A method of fighting injustice without using violence, through protests, strikes, and refusal to cooperate. Gandhi made it famous during India's independence movement.`,
              audioPrompt: `Nonviolent resistance is a method of fighting injustice without using violence, {name}. Mohandas Gandhi made it famous during India's independence movement against Britain. His followers held mass protests, hunger strikes, and refused to cooperate with British rule, even when the British used force against them. The strategy worked. India won independence in 1947. Gandhi's approach later influenced Martin Luther King Jr. in the U.S. civil rights movement. Nonviolent resistance is still used today around the world.` },
            { word: `Gandhi`,
              definition: `Mohandas Gandhi (1869–1948), an Indian leader who developed nonviolent resistance into a global model and helped lead India to independence from British rule in 1947.`,
              audioPrompt: `Mohandas Gandhi was an Indian leader who lived from 1869 to 1948, {name}. He developed nonviolent resistance as a strategy for fighting injustice. Through mass protests, hunger strikes, and peaceful civil disobedience, he led India's independence movement against British rule. India won independence in 1947. Gandhi is one of the most influential figures of the 20th century. His methods inspired civil rights leaders around the world, from Martin Luther King Jr. in the United States to Nelson Mandela in South Africa.` },
          ],
        },

        {
          id: `l15-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Leaders Who Made History`,
          paragraphs: [
            `Independence movements produced some of the most remarkable leaders in modern history. MAHATMA GANDHI in India developed nonviolent resistance into a global model. KWAME NKRUMAH led Ghana to become the first sub-Saharan African country to win independence from colonial rule in 1957. He pushed for African unity across the whole continent. HO CHI MINH led Vietnam through decades of resistance, first against France and then against the United States.`,
            `NELSON MANDELA fought against South Africa's APARTHEID system, where the white minority government enforced racial segregation. He spent 27 years in prison for his activism. After his release, he led peaceful negotiations that ended apartheid and became South Africa's first Black president in 1994. Mandela's example showed that even after decades of injustice and imprisonment, reconciliation and democratic change were possible. These leaders, and dozens of others, transformed the modern world map and the modern conversation about freedom.`,
          ],
          image: `/ue-assets/history/l15-s3-leaders.webp`,
          imageCaption: `Gandhi, Nkrumah, Ho Chi Minh, Mandela. Some of history's most influential leaders.`,
          vocab: [
            { word: `apartheid`,
              definition: `A system of legal racial segregation enforced in South Africa from 1948 to 1994. Black South Africans were forced to live in separate areas, attend separate schools, and had no real political power.`,
              audioPrompt: `Apartheid was a system of legal racial segregation in South Africa, {name}. It existed from 1948 to 1994. Black South Africans, who were the majority of the population, were forced to live in separate areas, attend separate schools, and had no real political power. White South Africans, a small minority, held nearly all wealth and government control. Nelson Mandela fought against apartheid and spent 27 years in prison for it. The system finally ended through negotiations in the early 1990s. Mandela became South Africa's first Black president in 1994.` },
            { word: `Nelson Mandela`,
              definition: `A South African leader (1918–2013) who fought against apartheid, spent 27 years in prison, and became South Africa's first Black president in 1994 after leading peaceful negotiations to end apartheid.`,
              audioPrompt: `Nelson Mandela was a South African leader who lived from 1918 to 2013, {name}. He fought against apartheid, South Africa's brutal system of racial segregation. He was imprisoned in 1964 and spent 27 years in jail. When he was released in 1990, instead of calling for revenge, he led peaceful negotiations that ended apartheid. He became South Africa's first Black president in 1994. Mandela is one of the most admired leaders in modern history, showing that even after decades of injustice, reconciliation is possible.` },
          ],
        },

        {
          id: `l15-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `The Long Aftermath`,
          paragraphs: [
            `By 1980, the world map looked completely different from 1900. Dozens of new countries existed. But independence didn't solve every problem. Many newly independent countries faced serious challenges. Borders drawn by European powers often grouped different cultures and languages together, leading to conflicts. Economic patterns from the colonial era still favored former colonial powers, leaving many new countries poor. Some new governments struggled with corruption or fell into dictatorship.`,
            `Some success stories are inspiring. India became the world's largest democracy. South Korea grew from poverty to one of the wealthiest economies. Singapore transformed into a global financial center. Other countries faced harder paths, with civil wars and economic struggles continuing for decades. The story of decolonization isn't one simple success story. It's many stories, each unique to its country, all unfolding from the same world-changing moment of independence. The shape of the modern world map, and many of the world's current opportunities and tensions, come from this transformation.`,
          ],
          image: `/ue-assets/history/l15-s4-aftermath.webp`,
          imageCaption: `Independence created dozens of new countries. Some thrived. Others still struggle.`,
          vocab: [
            { word: `self-determination`,
              definition: `The right of a people to choose their own government and form of rule. The central principle behind decolonization.`,
              audioPrompt: `Self-determination is the right of a people to choose their own government, {name}. It's the central principle behind decolonization. The idea that any group of people should be able to decide how they're ruled, rather than being controlled by another country. The principle was officially endorsed by the Atlantic Charter during World War II and later by the United Nations. It's been the basis for many independence movements and still shapes debates about national rights today.` },
            { word: `nationalism`,
              definition: `A strong sense of pride in and loyalty to one's nation, often with the desire for that nation to govern itself. Nationalism was a powerful force driving independence movements in colonized countries.`,
              audioPrompt: `Nationalism is a strong sense of pride in and loyalty to one's nation, {name}. It includes the desire for your nation to govern itself rather than be controlled by outsiders. Nationalism was one of the most powerful forces driving decolonization. Colonized peoples wanted to see their own culture, language, and government respected and in control. Leaders like Gandhi, Nkrumah, and Ho Chi Minh all appealed to national pride and identity to build independence movements.` },
          ],
        },

        {
          id: `l15-game`,
          type: `interactive`,
          format: `investigation`,
          guideText: `Investigation time, {name}. Four real events from the decolonization era. For each one, identify the method: PEACEFUL RESISTANCE (nonviolent protest, negotiation), ARMED RESISTANCE (military struggle), or POLITICAL TRANSITION (peaceful but formal handover)?\n\nOne is sneakier than it looks.`,
          options: [
            { id: `peaceful-resistance`,    label: `Peaceful Resistance`,   color: `#34D399`, description: `Nonviolent protests, marches, boycotts, hunger strikes, civil disobedience.` },
            { id: `armed-resistance`,       label: `Armed Resistance`,      color: `#F87171`, description: `Military struggle, guerrilla warfare, organized armed independence forces.` },
            { id: `political-transition`,   label: `Political Transition`,  color: `#60A5FA`, description: `Peaceful, formal handover of power through negotiation and elections.` },
          ],
          cases: [
            {
              id: `case-1`,
              caseTitle: `Event #1`,
              clues: [
                { text: `In 1930, Gandhi led the SALT MARCH against British rule in India.` },
                { text: `He walked 240 miles to the sea to make salt, which was illegal under British law.` },
                { text: `Thousands joined the march. Many were arrested, but they refused to fight back even when struck.` },
              ],
              correctAnswer: `peaceful-resistance`,
              realWorldExample: `The Salt March is one of the most famous events in nonviolent resistance history.`,
              explanation: `Long march. Open defiance of British law. Followers refused to fight back. Pure peaceful resistance. The Salt March demonstrated the power of nonviolent civil disobedience and became a model for movements around the world.`,
            },
            {
              id: `case-2`,
              caseTitle: `Event #2`,
              clues: [
                { text: `The Vietnamese fought a brutal eight-year war against French colonial rule (1946-1954).` },
                { text: `In 1954, Vietnamese forces defeated the French army at the Battle of Dien Bien Phu.` },
                { text: `France was forced to give up its colony in Vietnam.` },
              ],
              correctAnswer: `armed-resistance`,
              realWorldExample: `The First Indochina War ended French colonial rule in Vietnam.`,
              explanation: `Eight-year war. Major battle. Military victory ended colonial rule. Pure armed resistance. The Vietnamese had tried peaceful negotiation earlier and failed. Armed resistance ultimately won them independence from France, though more war with the U.S. would follow.`,
            },
            {
              id: `case-3`,
              caseTitle: `Event #3`,
              clues: [
                { text: `In 1957, Ghana became the first sub-Saharan African country to win independence from colonial rule.` },
                { text: `Kwame Nkrumah had led years of strikes, boycotts, and political organizing.` },
                { text: `The British eventually agreed to peacefully transfer power through elections.` },
              ],
              correctAnswer: `political-transition`,
              realWorldExample: `Ghana's independence in 1957 was a model of peaceful political transition.`,
              explanation: `Years of pressure, but final handover came through elections and formal negotiation. This is political transition. Many countries gained independence this way after World War II, especially when colonial powers realized they couldn't afford the cost of holding on. Pressure from independence movements forced the table.`,
            },
            {
              id: `case-4`,
              caseTitle: `Event #4 — The Tricky One`,
              clues: [
                { text: `Nelson Mandela was originally part of a peaceful resistance movement against apartheid in South Africa.` },
                { text: `After the government banned peaceful protest and killed peaceful protesters, Mandela helped found an armed wing of his movement.` },
                { text: `He was imprisoned for 27 years. The eventual end of apartheid in 1994 came through peaceful negotiations after his release.` },
              ],
              correctAnswer: `peaceful-resistance`,
              realWorldExample: `The South African anti-apartheid movement included multiple phases.`,
              explanation: `Tricky because Mandela's movement DID have an armed phase. But the FINAL victory came through peaceful negotiations. The struggle started peaceful, got harder, took up arms when peace was impossible, and ended peacefully again when negotiation became possible. Many independence movements had complicated paths like this. The lesson: real movements rarely fit one clean category. Mandela's story shows how flexible movements need to be.`,
            },
          ],
        },

        {
          id: `l15-quiz`,
          type: `quiz`,
          guideText: `Let's see what stuck, {name}.`,
          questions: [
            { id: `l15-q1`, format: `multiple-choice`,
              question: `What is DECOLONIZATION?`,
              options: [
                `When countries become colonies`,
                `When colonized peoples win their freedom and become independent countries`,
                `When countries merge`,
                `When colonies trade with each other`,
              ],
              correctIndex: 1,
              explanation: `Decolonization is when colonized peoples gain independence. Between about 1945 and 1980, dozens of new countries were born this way, reshaping the world map.` },

            { id: `l15-q2`, format: `multiple-choice`,
              question: `Why did decolonization speed up after World War II?`,
              options: [
                `European powers became kinder`,
                `European powers were weakened by the war, colonized soldiers had fought for freedom, and international agreements supported self-government`,
                `Colonized peoples got new weapons`,
                `It was random`,
              ],
              correctIndex: 1,
              explanation: `World War II changed everything. European empires were weakened. Colonized soldiers expected the freedom they'd defended. International agreements like the Atlantic Charter supported self-government. The empires that had ruled for centuries began to fall apart.` },

            { id: `l15-q3`, format: `multiple-choice`,
              question: `Who was MOHANDAS GANDHI?`,
              options: [
                `A British general`,
                `An Indian leader who developed nonviolent resistance into a global model and helped India win independence in 1947`,
                `A Russian politician`,
                `An African king`,
              ],
              correctIndex: 1,
              explanation: `Gandhi led India's independence movement against British rule. His method of nonviolent resistance worked. India won independence in 1947. His approach later influenced civil rights movements around the world.` },

            { id: `l15-q4`, format: `multiple-choice`,
              question: `What is NONVIOLENT RESISTANCE?`,
              options: [
                `Hiding from problems`,
                `Fighting injustice without using violence — through protests, strikes, and refusing to cooperate with unjust rule`,
                `Voting only`,
                `Just talking`,
              ],
              correctIndex: 1,
              explanation: `Nonviolent resistance fights injustice without using violence. Gandhi proved it could work. Martin Luther King Jr. later used the same approach in the U.S. civil rights movement. It's still used today around the world.` },

            { id: `l15-q5`, format: `true-false`,
              question: `True or false: All decolonization movements were peaceful.`,
              correctAnswer: false,
              explanation: `False. Some movements were peaceful (like Gandhi's in India, Nkrumah's in Ghana). Others involved long armed struggles (like Algeria's, Vietnam's). Some, like South Africa's anti-apartheid movement, started peaceful, got armed, then ended peacefully.` },

            { id: `l15-q6`, format: `multiple-choice`,
              question: `What was APARTHEID?`,
              options: [
                `A type of economy`,
                `A system of legal racial segregation in South Africa from 1948 to 1994, where the white minority controlled the country and Black South Africans had no real political power`,
                `A religion`,
                `A type of war`,
              ],
              correctIndex: 1,
              explanation: `Apartheid was South Africa's official policy of racial segregation. It lasted from 1948 to 1994. Nelson Mandela fought against it, spent 27 years in prison, then helped end it through negotiation. He became South Africa's first Black president in 1994.` },

            { id: `l15-q7`, format: `multiple-choice`,
              question: `What is SELF-DETERMINATION?`,
              options: [
                `Being independent in your own thinking`,
                `The right of a people to choose their own government and form of rule`,
                `Working hard`,
                `Voting for yourself`,
              ],
              correctIndex: 1,
              explanation: `Self-determination is the right of a people to decide how they're governed. The Atlantic Charter and the United Nations both endorsed this principle, and it became the basis for many independence movements after World War II.` },

            { id: `l15-q8`, format: `multiple-choice`,
              question: `How did the world map LOOK DIFFERENT by 1980 compared to 1900?`,
              options: [
                `It didn't really change`,
                `Dozens of new countries existed across Africa, Asia, and the Pacific, where European empires had once ruled`,
                `Europe was larger`,
                `There were fewer countries`,
              ],
              correctIndex: 1,
              explanation: `In 1900, European empires controlled about 85% of the world. By 1980, almost all colonies had become independent countries. The modern world map, with dozens of African and Asian nations as independent states, came from this transformation.` },
          ],
        },

        {
          id: `l15-reflection`,
          type: `reflection`,
          guideText: `Before we wrap, {name}, pick ONE question and actually answer it. Your response gets saved, and I'll remember it next time we talk.`,
          prompts: [
            { id: `r1`, text: `Gandhi believed nonviolent resistance was stronger than violence. Do you think that's true? Why or why not?` },
            { id: `r2`, text: `If you'd lived under colonial rule, what method would you have wanted your country's independence movement to use, and why?` },
            { id: `r3`, text: `Nelson Mandela spent 27 years in prison and then came out to lead peaceful negotiations. How would you keep your spirit alive during 27 years of imprisonment?` },
            { id: `r4`, text: `Most decolonized countries faced hard challenges after independence. Why might winning freedom not solve every problem?` },
          ],
        },

        {
          id: `l15-realworld`,
          type: `real-world`,
          guideText: `The modern world map, the United Nations, and many of today's global tensions all come directly from decolonization. Countries that were colonies less than a century ago are now major world economies. Conflicts in places like the Middle East, Africa, and Southeast Asia often trace back to borders or institutions set up during the colonial era. Independence movements also inspired civil rights movements within countries, including in the U.S. Studying decolonization isn't just about distant history. It's about understanding why our modern world looks the way it does.`,
          familyAdventure: `Family Map Then and Now. Look at a world map together. Pick five countries: India, Ghana, Vietnam, Indonesia, South Africa. Find out when each won independence. Now look up how many countries existed in 1900 vs. today (it's almost twice as many today). Discuss: what does it mean for the world to have gone from a few empires to many independent countries? What are the benefits? What are the challenges?`,
          creativePrompt: {
            intro: `Imagine you're a young person in 1947 India just after independence. Write a journal entry about what you feel and hope for.`,
            floor: `Write at least 5 sentences. Describe what your family experienced under British rule, how independence day felt, and what you hope happens now.`,
            stretch: `Write 8 to 10 sentences. Cover the long fight for independence, what changed on independence day, and what challenges your new country might face.`,
            open: `Write as much as you want. Build a full first-person account that includes the years of struggle, the moment of celebration, and clear-eyed thinking about both the hopes and worries of being newly free.`,
            frames: [
              `Today is ___, and India is finally free from British rule.`,
              `My family went through ___ to get here.`,
              `When the new flag rose, I felt ___.`,
              `What I most hope for is ___.`,
              `What I worry about is ___.`,
            ],
          },
        },

        {
          id: `l15-celebration`,
          type: `celebration`,
          message: `Great work, {name}. You can now explain what decolonization was, why it sped up after World War II, the difference between peaceful and armed resistance, and name key leaders like Gandhi, Nkrumah, Ho Chi Minh, and Mandela. Next lesson: we look at two of the Cold War's hottest conflicts. The Korean War and the Vietnam War. We'll cover what happened factually and the different perspectives that still exist about them. See you there. — Lyra.`,
          badge: `independence-historian`,
          badgeName: `Independence Historian`,
          xpEarned: 75,
        },
      ],
    },
  ],
};

export default HISTORY_UE_L15;

// ─── Dev asset check ──────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const screens = HISTORY_UE_L15.lessons[0].screens;
  const mags = screens.filter(s => s.type === 'magazine').length;
  const game = screens.find(s => s.type === 'interactive')?.cases?.length ?? 0;
  const quiz = screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  const refl = screens.find(s => s.type === 'reflection')?.prompts?.length ?? 0;
  const totalVocab = screens.filter(s => s.type === 'magazine').reduce((sum, s) => sum + (s.vocab?.length || 0), 0);
  console.log(`[LESSON-HISTORY-UE-L15 v1] Loaded with ${mags} magazine sections, ${totalVocab} vocab terms, ${game} game cases, ${quiz} quiz Qs, ${refl} reflection prompts`);
}
