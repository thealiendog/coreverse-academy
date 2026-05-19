// ─────────────────────────────────────────────────────────────────────────────
// HISTORY & WORLD  |  L09 — Revolutions: When People Change Their Government
// Age band : explorers (6–8)   Guide: lyra
// Slots between L08 (Age of Exploration) and L11 (WWI)
// L10 (Industrial Revolution) will ship next and slot between L09 and L11
// ─────────────────────────────────────────────────────────────────────────────

const HW_L09 = {
  ageBand:   `explorers`,
  subjectId: `history`,
  guide:     `lyra`,

  lessons: [
    {
      id:        `hw-6-8-09`,
      title:     `Revolutions: When People Change Their Government`,
      duration:  12,
      xpReward:  50,
      badge:     `revolution-explorer`,
      badgeName: `Revolution Explorer`,

      screens: [

        {
          id: `l09-welcome`,
          type: `welcome`,
          guideText: `Hello {name}, Lyra here. The Renaissance gave us new IDEAS. The Age of Exploration gave us a bigger WORLD. Now, big things start happening. People start QUESTIONING who should rule them. Why a king? Why not the people themselves? These questions led to REVOLUTIONS — when whole countries rose up and CHANGED their governments. Today we visit the AMERICAN REVOLUTION and the FRENCH REVOLUTION — two events that changed history forever. Ready? Let's go.`,
          headline: `Revolutions: When People Change Their Government`,
          subtitle: `When ordinary people rise up — and the ideas that started it all`,
          visual: `/explorer-assets/history/l09-welcome.webp`,
        },

        {
          id: `l09-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `What Is a REVOLUTION?`,
          paragraphs: [
            `A REVOLUTION is when ORDINARY PEOPLE rise up and CHANGE THEIR GOVERNMENT — usually by force, sometimes peacefully. It's a HUGE moment in a country's history.`,
            `Why would people start a revolution? Usually because they feel TRAPPED, MISTREATED, or UNHEARD. Maybe a king is unfair. Maybe taxes are too high. Maybe regular people have no rights. Maybe rulers don't listen. When enough people feel this way for long enough, they DEMAND CHANGE. Sometimes they overthrow the rulers and start a new kind of government. Revolutions are often DANGEROUS and DIFFICULT. People can be hurt or killed. But the goal is BETTER LIFE — more freedom, more fairness, more voice. The 1700s and 1800s were the GREATEST AGE OF REVOLUTIONS in human history. We're going to meet TWO of the most famous: the American Revolution and the French Revolution. Both changed everything.`,
          ],
          image: `/explorer-assets/history/l09-s1-what-revolution.webp`,
          imageCaption: `A revolution: ordinary people rising up to change their government. Risky, hard, world-changing.`,
          vocab: [
            { word: `revolution`,     definition: `When PEOPLE rise up to CHANGE their GOVERNMENT. A REVOLUTION transforms how a country is ruled.`,
              audioPrompt: `A revolution, {name}, is when people rise up to change their government. A revolution transforms how a country is ruled. Sometimes by force, sometimes peacefully. Usually because people feel unfairly treated. Revolutions are huge, risky, history-changing events. The 1700s and 1800s had many revolutions across the world.` },
            { word: `government`,     definition: `The PEOPLE and RULES that GUIDE a country. GOVERNMENTS can be kings, councils, presidents — many forms.`,
              audioPrompt: `A government, {name}, is the people and rules that guide a country. Governments can be kings, councils, presidents, parliaments — many forms. Every country has one. Some are good for the people, some aren't. When governments stop serving the people, sometimes the people change them — through revolution.` },
            { word: `change`,         definition: `MAKE different. REVOLUTIONS aim to CHANGE the way countries are governed.`,
              audioPrompt: `To change, {name}, is to make different. Revolutions aim to change the way countries are governed. Sometimes change is small — adjust laws. Sometimes change is huge — replace the king with elected leaders. The bigger the change, the more revolutionary. The boldest revolutions reshape entire nations.` },
          ],
        },

        {
          id: `l09-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `IDEAS Lead to Revolutions`,
          paragraphs: [
            `Remember the Renaissance? It started a wave of new ideas. Those ideas didn't stop — they kept growing into a movement called the ENLIGHTENMENT in the 1600s and 1700s.`,
            `Enlightenment thinkers wrote about HUMAN RIGHTS — the idea that EVERY person has natural rights to LIFE, LIBERTY, and HAPPINESS that no king could take away. Thinkers like JOHN LOCKE wrote that governments should EXIST FOR THE PEOPLE — not the other way around. If a government fails the people, the people have a RIGHT to change it. ROUSSEAU wrote about the "social contract" — an agreement between rulers and ruled. MONTESQUIEU wrote about splitting government into parts so no one person had too much power. These ideas SPREAD through printed books across Europe and to America. Ordinary people started reading them and thinking, "Wait — we DESERVE these rights too!" Ideas are POWERFUL. They led directly to revolutions. The American Revolution and French Revolution would put these IDEAS INTO ACTION.`,
          ],
          image: `/explorer-assets/history/l09-s2-enlightenment-ideas.webp`,
          imageCaption: `Enlightenment ideas: human rights, liberty, "We the People." Books spread them. Revolutions made them real.`,
          vocab: [
            { word: `Enlightenment`,  definition: `A 1600s-1700s MOVEMENT focused on REASON and RIGHTS. The ENLIGHTENMENT inspired revolutions.`,
              audioPrompt: `The Enlightenment, {name}, was a sixteen and seventeen hundreds movement focused on reason and rights. The Enlightenment inspired revolutions. Thinkers wrote books arguing that all humans have natural rights. That governments exist to serve people. That kings aren't divine. These ideas spread and changed the world.` },
            { word: `human rights`,   definition: `RIGHTS that EVERY PERSON has just by being human. HUMAN RIGHTS include life, liberty, and equality.`,
              audioPrompt: `Human rights, {name}, are rights that every person has just by being human. Human rights include life, liberty, equality, fair treatment, freedom of speech. Born with them. Can't be taken away. The Enlightenment said all people have human rights — even when their governments didn't recognize them.` },
            { word: `John Locke`,     definition: `An English PHILOSOPHER. JOHN LOCKE wrote that governments serve people — not the reverse.`,
              audioPrompt: `John Locke, {name}, was an English philosopher. John Locke wrote that governments serve people — not the reverse. He said all people have natural rights to life, liberty, and property. If a government fails to protect those rights, people have a right to change it. His ideas inspired the American Revolution directly.` },
          ],
        },

        {
          id: `l09-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `The AMERICAN Revolution (1775–1783)`,
          paragraphs: [
            `In the 1770s, 13 American COLONIES were ruled by BRITAIN, which was on the other side of the Atlantic Ocean. The British king and parliament made laws and taxed the colonies — but the colonists had NO VOTE in those decisions.`,
            `Colonists got angry. "NO TAXATION WITHOUT REPRESENTATION!" they shouted. (Translation: don't tax us if we can't vote.) Tensions grew. In 1773, colonists in Boston dumped chests of TEA into the harbor to protest a tea tax — the BOSTON TEA PARTY. By 1775, fighting broke out. In 1776, the colonists wrote the DECLARATION OF INDEPENDENCE — a document declaring they were no longer British. It famously said: "All men are created equal" and they have rights to "Life, Liberty, and the pursuit of Happiness." Pure Enlightenment ideas. Led by GEORGE WASHINGTON, the Americans fought British armies for 7 years. They won. In 1783, the United States of America became its own COUNTRY — the first major nation founded on Enlightenment ideas. They wrote a CONSTITUTION (a plan for government) and elected their leaders. No king. Powerful idea. Other countries took notice.`,
          ],
          image: `/explorer-assets/history/l09-s3-american-revolution.webp`,
          imageCaption: `American Revolution (1775-1783): colonies break from Britain. "We the People." First Enlightenment-based country.`,
          vocab: [
            { word: `colony`,         definition: `A SETTLEMENT ruled by a FAR-AWAY COUNTRY. The 13 American COLONIES were ruled by Britain.`,
              audioPrompt: `A colony, {name}, is a settlement ruled by a far-away country. The thirteen American colonies were ruled by Britain. People lived in America but answered to a king across the ocean. Many felt this was unfair, especially when they couldn't vote on the rules and taxes that affected their daily lives. That unfairness sparked the American Revolution.` },
            { word: `Declaration of Independence`, definition: `The 1776 DOCUMENT declaring the US was a FREE country. The DECLARATION OF INDEPENDENCE said all people have rights.`,
              audioPrompt: `The Declaration of Independence, {name}, is the seventeen seventy six document declaring the US was a free country. The Declaration of Independence said all people have rights to life, liberty, and the pursuit of happiness. Written mainly by Thomas Jefferson. Adopted on July 4 — now America's Independence Day. One of the most important documents in world history.` },
            { word: `George Washington`, definition: `The GENERAL who led the American army. GEORGE WASHINGTON became the first US president.`,
              audioPrompt: `George Washington, {name}, was the general who led the American army. He won the war for independence. Then he became the first US president. He's called the "Father of His Country." Famously, he could have made himself king — but he refused, then stepped down after two terms. By choosing democracy over power, he set a powerful example.` },
          ],
        },

        {
          id: `l09-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `The FRENCH Revolution (1789–1799)`,
          paragraphs: [
            `Just 6 years after America's revolution, FRANCE had one too. But the French Revolution was even MORE VIOLENT and DRAMATIC.`,
            `France was ruled by KING LOUIS XVI and his queen MARIE ANTOINETTE. The king lived in luxury at the Palace of VERSAILLES. Meanwhile, regular French people were STARVING. Bread cost so much. Taxes only fell on the poor. The king and nobles paid nothing. French people had been reading Enlightenment books too. They were inspired by the American Revolution. They thought: "If Americans can be free, why can't we?" In 1789, Parisian crowds stormed the BASTILLE — a fortress prison that symbolized the king's power. The revolution had begun. The motto was "LIBERTY, EQUALITY, FRATERNITY" (freedom, equal rights, brotherhood). The French overthrew the king. (They also, unfortunately, executed many people including Louis and Marie Antoinette with a device called the guillotine — the revolution turned brutal.) France became a REPUBLIC — no king, people electing leaders. Eventually, the French Revolution didn't go perfectly. Power changed hands many times. NAPOLEON eventually became emperor. But France was forever changed. The IDEA that ordinary people could overthrow a king had spread across Europe.`,
          ],
          image: `/explorer-assets/history/l09-s4-french-revolution.webp`,
          imageCaption: `French Revolution (1789): "Liberty, Equality, Fraternity." Storming the Bastille. Overthrowing the king.`,
          vocab: [
            { word: `Bastille`,       definition: `A famous PRISON in Paris. The STORMING OF THE BASTILLE started the French Revolution on July 14, 1789.`,
              audioPrompt: `The Bastille, {name}, was a famous prison fortress in Paris. The Bastille symbolized the king's power and unfair imprisonment. On July 14, 1789, Parisian crowds stormed it. That date is now France's national holiday, like the 4th of July in America. The storming of the Bastille marked the start of the French Revolution.` },
            { word: `liberty equality fraternity`, definition: `The MOTTO of the French Revolution. LIBERTY, EQUALITY, FRATERNITY = freedom, equal rights, brotherhood.`,
              audioPrompt: `Liberty, Equality, Fraternity, {name}, was the motto of the French Revolution. Liberty meant freedom. Equality meant all citizens equal under the law. Fraternity meant brotherhood — French people standing together. This motto is still on French government buildings today. France is still a republic. The revolution's ideals live on.` },
            { word: `republic`,       definition: `A GOVERNMENT WITHOUT a king — people ELECT leaders. France became a REPUBLIC after the revolution.`,
              audioPrompt: `A republic, {name}, is a government without a king — people elect leaders. France became a republic after the revolution. America also became a republic after their revolution. The word "republic" comes from Latin — "res publica" meaning "thing of the people." Republics put power in voters' hands, not in royal families.` },
          ],
        },

        {
          id: `l09-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Revolutions SPREAD Around the World`,
          paragraphs: [
            `The American and French Revolutions INSPIRED revolutions everywhere. The idea that "regular people can change their government" SPREAD across the world.`,
            `In 1791, enslaved people in HAITI (in the Caribbean) rose up against French rulers in the HAITIAN REVOLUTION. Led by TOUSSAINT L'OUVERTURE, they fought for over a decade. They won. Haiti became the first country founded by formerly enslaved people. In the early 1800s, LATIN AMERICAN colonies rose up against SPANISH rule. Heroes like SIMÓN BOLÍVAR (called "The Liberator") led wars of independence across South America. Countries like Venezuela, Colombia, Bolivia, Peru, Ecuador, Argentina, Mexico — all gained independence in this period. Even back in Europe, more revolutions came. The whole world was changing. By the late 1800s, KINGS had less and less power. Republics, parliaments, and elected leaders rose up everywhere. Revolutions had transformed how humanity thought about RULING. It would never be the same.`,
          ],
          image: `/explorer-assets/history/l09-s5-revolutions-spread.webp`,
          imageCaption: `Revolutions spread: Haiti, Latin America, Europe. Ordinary people changing their governments globally.`,
          vocab: [
            { word: `Haitian Revolution`, definition: `The 1791-1804 UPRISING of enslaved people in HAITI. The HAITIAN REVOLUTION created the first nation founded by former slaves.`,
              audioPrompt: `The Haitian Revolution, {name}, was the seventeen ninety one to eighteen oh four uprising of enslaved people in Haiti. The Haitian Revolution created the first nation founded by formerly enslaved people. Led by Toussaint L'Ouverture, Haitians defeated French armies. It was the only successful slave revolt in history that created a free nation. Massive in its time and meaning.` },
            { word: `Simón Bolívar`,  definition: `The "LIBERATOR" of SOUTH AMERICA. SIMÓN BOLÍVAR led independence wars against Spain.`,
              audioPrompt: `Simón Bolívar, {name}, was the Liberator of South America. Simón Bolívar led independence wars against Spain in the early eighteen hundreds. He helped free what are now Venezuela, Colombia, Ecuador, Peru, and Bolivia. The country Bolivia is named after him. Statues of him stand across Latin America. A heroic figure throughout the Spanish-speaking world.` },
            { word: `inspired`,       definition: `Got their IDEAS from. Other revolutions were INSPIRED by the American and French ones.`,
              audioPrompt: `Inspired, {name}, means got their ideas from. Other revolutions were inspired by the American and French ones. People in Haiti, Latin America, Europe, and elsewhere saw what was possible. "If they could do it, so can we." That's how big ideas spread. One revolution lights the spark for the next. Inspiration matters.` },
          ],
        },

        {
          id: `l09-mag-6`,
          type: `magazine`,
          section: 6,
          headline: `Revolutionary RIGHTS — Still With Us`,
          paragraphs: [
            `{name} — the rights you have TODAY exist because of those revolutions and the ones that followed.`,
            `Your right to VOTE for leaders? Came from these revolutions. The idea that ALL PEOPLE are CREATED EQUAL? American Declaration of Independence (later expanded over centuries to include everyone). Freedom of SPEECH, RELIGION, and the PRESS? Enlightenment + revolution. The idea that governments serve PEOPLE — not kings? Revolution. The phrase "WE THE PEOPLE" at the start of the US Constitution? Pure revolutionary thinking. NOT every revolution was perfect. Many people were excluded from rights at first (women, enslaved people, indigenous peoples, the poor). Later movements would FIGHT to EXPAND rights to everyone — abolition, women's rights, civil rights. Those struggles continue today. But the REVOLUTIONARY IDEA — that ALL HUMANS have RIGHTS and people get a SAY in their government — that idea has spread across the world. Today, most countries have some form of voting. Most have constitutions. Most recognize human rights. None of that existed in most places before these revolutions. Revolutions REMADE the political world.`,
          ],
          image: `/explorer-assets/history/l09-s6-rights-today.webp`,
          imageCaption: `Today's rights — voting, equality, freedom — came from those revolutions. Still expanding to all.`,
          vocab: [
            { word: `voting`,         definition: `Choosing your LEADERS. The right to VOTE is a revolutionary gift.`,
              audioPrompt: `Voting, {name}, is choosing your leaders. The right to vote is a revolutionary gift. Before the American and French revolutions, almost no one in the world voted for their rulers. Kings ruled, period. Revolutions said: ordinary people should choose. Today, voting is normal in most countries. That's huge. That's revolutionary.` },
            { word: `created equal`,  definition: `All humans START with the SAME RIGHTS. "All men are CREATED EQUAL" is from the Declaration of Independence.`,
              audioPrompt: `Created equal, {name}, means all humans start with the same rights. "All men are created equal" is from the Declaration of Independence. The phrase was revolutionary in 1776. Sadly, it didn't apply to everyone at first — women, enslaved people, and others were excluded. Later struggles expanded "all" to truly mean all. That work continues today.` },
            { word: `expanding rights`, definition: `Adding MORE PEOPLE under EQUAL RIGHTS. Later movements kept EXPANDING RIGHTS to include everyone.`,
              audioPrompt: `Expanding rights, {name}, means adding more people under equal rights. Later movements kept expanding rights to include everyone. The original revolutionaries didn't include everyone in their "all men created equal" — women, enslaved people, indigenous peoples were left out. Generations of activists fought to expand "all" to truly mean all. That's the ongoing story of human rights.` },
          ],
        },

        {
          id: `l09-game`,
          type: `interactive`,
          format: `drag-match`,
          guideText: `Let's see what you remember, {name}.`,
          buckets: [
            { id: `fact`, label: `✅ Yes, that's true!`, color: `#34D399` },
            { id: `myth`, label: `❌ No way!`,           color: `#F87171` },
          ],
          items: [
            { id: `l09-g1`, image: `l09-game-1.webp`, label: `A REVOLUTION is when ordinary people RISE UP to change their government — often overthrowing kings.`,
              matchPhrase: `Yes! That's the heart of a revolution. People want change. They rise up. Sometimes they replace kings with elected leaders. Sometimes they create whole new countries.`,
              correctMatch: `fact` },
            { id: `l09-g2`, image: `l09-game-2.webp`, label: `IDEAS — like human rights, liberty, equality — INSPIRED the American and French Revolutions.`,
              matchPhrase: `True! Enlightenment ideas (John Locke, Rousseau, etc.) about rights and freedom inspired both revolutions. Ideas are powerful. They moved people to action.`,
              correctMatch: `fact` },
            { id: `l09-g3`, image: `l09-game-3.webp`, label: `Only KINGS and QUEENS can rule countries — regular people can NEVER have a say.`,
              matchPhrase: `Not at all! Revolutions proved exactly the OPPOSITE. Regular people CAN change governments. Today most countries have elections — direct result of revolutions.`,
              correctMatch: `myth` },
            { id: `l09-g4`, image: `l09-game-4.webp`, label: `The American and French Revolutions changed NOTHING — they had no real impact on later history.`,
              matchPhrase: `Definitely not! They changed everything. They inspired revolutions worldwide. They established voting, rights, and republics that shape today's world. Massive impact.`,
              correctMatch: `myth` },
          ],
        },

        {
          id: `l09-quiz`,
          type: `quiz`,
          guideText: `Let's see what you remember, {name}.`,
          questions: [
            { id: `l09-q1`, format: `multiple-choice`,
              question: `What is a REVOLUTION?`,
              options: [`A type of dance`, `When ordinary PEOPLE rise up and CHANGE their government`, `A war between countries`, `A book`],
              correctIndex: 1,
              explanation: `A revolution is when ordinary people rise up to change their government — often overthrowing kings and creating new systems. The American Revolution and French Revolution are famous examples.` },
            { id: `l09-q2`, format: `multiple-choice`,
              question: `What inspired the American and French Revolutions?`,
              options: [`Nothing`, `ENLIGHTENMENT IDEAS — human rights, liberty, equality, "people deserve a voice in government"`, `Sports`, `Music`],
              correctIndex: 1,
              explanation: `Enlightenment ideas! Thinkers like John Locke and Rousseau wrote about human rights and how governments should serve people. Their ideas spread through books and inspired revolutions.` },
            { id: `l09-q3`, format: `multiple-choice`,
              question: `Why did the American Revolution start?`,
              options: [`For fun`, `Colonists were taxed by Britain but had NO VOTE — "No taxation without representation!"`, `For sport`, `Bad weather`],
              correctIndex: 1,
              explanation: `"No taxation without representation!" The British king taxed the 13 colonies but the colonists couldn't vote on those taxes. That unfairness led to revolution. The Declaration of Independence followed in 1776.` },
            { id: `l09-q4`, format: `true-false`,
              question: `The FRENCH REVOLUTION's motto was "LIBERTY, EQUALITY, FRATERNITY" — meaning freedom, equal rights, and brotherhood.`,
              correctAnswer: true,
              explanation: `True! Still France's national motto today. Liberty (freedom), Equality (equal rights), Fraternity (brotherhood/community). The values that drove the French to overthrow their king.` },
            { id: `l09-q5`, format: `fill-blank`,
              question: `___ Bolívar, called "The Liberator," led independence wars across South America against Spain in the early 1800s.`,
              options: [`Simón`, `George`, `Louis`, `Confucius`],
              correctIndex: 0,
              explanation: `Simón Bolívar! He led wars that freed Venezuela, Colombia, Ecuador, Peru, and Bolivia from Spain. Bolivia is named after him. A hero across Latin America.` },
            { id: `l09-q6`, format: `multiple-choice`,
              question: `What is the LASTING legacy of these revolutions for us TODAY?`,
              options: [`Nothing`, `VOTING, human rights, freedom of speech, "We the People" — most modern democracies came from revolutionary ideas`, `Just pretty buildings`, `Old stories`],
              correctIndex: 1,
              explanation: `Voting, human rights, free speech, written constitutions, the idea that governments serve people — all came from those revolutions. Most modern democracies are built on revolutionary foundations.` },
          ],
        },

        {
          id: `l09-realworld`,
          type: `real-world`,
          guideText: `Here's something important, {name}. The right to vote, to speak freely, to disagree with leaders, to be treated equally — none of these are AUTOMATIC. People had to FIGHT for them. Sometimes literally fight. The voting rights you'll have someday came from revolutions. The civil rights of all colors and genders came from struggles that followed. Around the world today, MANY people still don't have these rights. There are countries where you can't criticize the government. Where women can't vote. Where minorities are oppressed. Brave people are still fighting to change that. History shows: IDEAS PLUS COURAGE can change the world. When you grow up, exercise your rights — VOTE, speak up for what's fair, defend others' rights. Don't take them for granted. They were earned by people who came before you. Honor them by USING what they fought for.`,
          familyAdventure: {
            title: `Everyone Gets a Vote`,
            scenario: `Together, do an "EVERYONE GETS A VOTE" exercise. Find something to decide as a family — what to eat for dinner, what game to play, what movie to watch. EVERY family member gets ONE equal vote (including kids!). Count the votes. The majority wins.`,
            talkingPoint: `Talk about how revolutions made it possible for ordinary people to have a vote. Then notice: how does it feel when EVERYONE has a say?`,
          },
          creativePrompt: {
            title: `Declaration of Kid Rights`,
            description: `Design a "DECLARATION OF KID RIGHTS." Write 5-10 rights that ALL KIDS should have. Examples: "All kids have the right to be heard." "All kids have the right to safe homes." "All kids have the right to learn." "All kids have the right to play." Inspired by the American Declaration of Independence — but for kids. Decorate it beautifully. Hang it on your wall.`,
          },
        },

        {
          id: `l09-celebration`,
          type: `celebration`,
          message: `Powerful lesson, {name}! You've explored REVOLUTIONS — when ordinary people rise up and CHANGE their government. ENLIGHTENMENT ideas about human rights and liberty INSPIRED them. The AMERICAN Revolution (1776) created the United States. The FRENCH Revolution (1789) overthrew a king. Revolutions then SPREAD across Haiti, Latin America, and beyond. Today's VOTING, RIGHTS, and FREEDOMS came from these revolutions — STILL EXPANDING to include everyone. Next lesson — the INDUSTRIAL REVOLUTION — when machines changed how humans LIVE and WORK forever. — Lyra 🐘`,
          badge: `revolution-explorer`,
          badgeName: `Revolution Explorer`,
          xpEarned: 50,
        },

      ],
    },
  ],
};

export default HW_L09;

// ─── Dev asset check ───
if (import.meta.env?.DEV) {
  const mags  = HW_L09.lessons[0].screens.filter(s => s.type === 'magazine').length;
  const game  = HW_L09.lessons[0].screens.find(s => s.type === 'interactive')?.items?.length ?? 0;
  const quiz  = HW_L09.lessons[0].screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  console.log(`[LESSON-HW-L09] Loaded: "Revolutions" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
}
