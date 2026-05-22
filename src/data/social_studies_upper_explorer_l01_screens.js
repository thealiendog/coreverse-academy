// ─────────────────────────────────────────────────────────────────────────────
// SOCIAL STUDIES UE  |  L01 — Principles of Government: What It Is and What It Does
// Age band : upper_explorers (9–10)   Guide: atlas
// Standards: C3 D2.Civ.1.3-5 / D2.Civ.2.3-5 / D2.Civ.4.3-5
// CALIBRATED: UE spec v1.1 (May 2026)
// SCOPE: 4 functions of govt + 3 main types (democracy, monarchy, dictatorship) + US is a republic
// CUT: sovereignty, anarchy, theocracy, constitutional monarchy, hybrid systems, consent of governed
//      (moved to L02-L05 where they fit better)
// ─────────────────────────────────────────────────────────────────────────────

const SOCIAL_STUDIES_UE_L01 = {
  ageBand: `upper_explorers`,
  subjectId: `social_studies`,
  guide: `atlas`,

  lessons: [
    {
      id: `social-studies-9-10-01`,
      title: `Principles of Government: What It Is and What It Does`,
      duration: 22,
      xpReward: 75,
      badge: `government-principles-master`,
      badgeName: `Government Principles Master`,

      screens: [
        {
          id: `l01-welcome`,
          type: `welcome`,
          guideText: `Hey {name}, Atlas here. I've been your social studies guide since the Little Stars days, when we explored families and helpers in your community. Now we're stepping into some bigger questions about how the wider world works. Today's question: why does every country on Earth have something called a government? And what does it actually do for YOU? By the end of this lesson you'll be able to explain both, in real words, like someone who actually understands it.`,
          headline: `Principles of Government`,
          subtitle: `What government is, what it does, and the main ways societies organize it`,
          visual: `/ue-assets/social-studies/l01-welcome.webp`,
        },

        // ── SECTION 1 ─────────────────────────────────────────────────────────
        {
          id: `l01-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `What Is Government?`,
          paragraphs: [
            `Quick experiment: think about everything you did this morning before opening this lesson. You woke up in a house — built under building safety rules. You probably drank water from a tap — treated and tested by the city. If you ate breakfast, the food was inspected for safety somewhere along the way. If you traveled anywhere, you went on roads with traffic lights and stop signs.`,
            `Every one of those things happened because of government. Government isn't just the President or Congress, even though those are part of it. Government is the whole system of people, laws, and organizations that helps a large group of people live together. It's how millions of strangers can share roads, schools, water, and safety without it turning into chaos.`,
            `Why does it exist? Because once a group gets bigger than maybe a few dozen people, you need rules and organizations to handle things no one person can handle alone. That's the whole reason government was invented, thousands of years ago — and the whole reason every country has one today.`,
          ],
          image: `/ue-assets/social-studies/l01-s1-what-is-government.webp`,
          imageCaption: `Government touches your day from the moment you wake up.`,
          vocab: [
            { word: `government`,
              definition: `The system of people, laws, and organizations that helps a society make decisions and live together.`,
              audioPrompt: `Government is the system of people, laws, and organizations that helps a society live together, {name}. It's much bigger than just the President. It includes the people we elect, the laws they make, the courts that explain those laws, and the agencies that carry them out — like the people who inspect food, build roads, or run public schools. Every country on Earth has a government in some form. Look around you right now — what's one thing in this room that exists because of a government decision?` },
            { word: `society`,
              definition: `A large group of people who live together in an organized way, sharing rules, culture, and institutions.`,
              audioPrompt: `Society is a large group of people who live together in an organized way, {name}. A society shares rules, schools, roads, language, and culture. It's bigger than a family or a neighborhood — it's the whole system people build to live alongside millions of strangers without constant conflict. Government exists to help society run. Without some kind of shared system, a large society would fall apart quickly. Think of it this way: government is the operating system that keeps society working.` },
          ],
        },

        // ── SECTION 2 ─────────────────────────────────────────────────────────
        {
          id: `l01-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `The Four Jobs of Government`,
          paragraphs: [
            `Governments do a lot of different things, but if you look closely, almost all of it falls into four main jobs. Knowing these gives you a way to evaluate any government — including your own.`,
            `Job one is order. Governments make and enforce laws so daily life is predictable. Traffic laws so cars don't crash. Rules about contracts so businesses can trust each other. Without order, planning anything would be impossible.`,
            `Job two is services. Governments build and run things that individuals can't realistically build alone — roads, public schools, water systems, hospitals, parks. These are paid for with taxes, which is money citizens pool together.`,
            `Job three is protection. The military defends the country from outside threats. Police protect people from crime. Fire departments and emergency responders handle disasters. Job four is justice. Courts settle disagreements between people and decide what happens when someone breaks a law. The idea is that everyone, no matter how rich or powerful, gets treated by the same rules.`,
          ],
          image: `/ue-assets/social-studies/l01-s2-four-jobs.webp`,
          imageCaption: `Order. Services. Protection. Justice.`,
          vocab: [
            { word: `services`,
              definition: `Things government provides for everyone — like roads, schools, water systems, and parks.`,
              audioPrompt: `Services are things government provides because no one person could provide them alone, {name}. Imagine trying to build a highway by yourself, or set up a public school just for your family. It's not realistic. Services are paid for through taxes — small amounts of money from many people pooled together to do big things. Public schools, libraries, parks, water systems, garbage collection, even the internet that connects most of the country — all started as government services. Which one do you use most often without even noticing?` },
            { word: `justice`,
              definition: `The system that fairly settles arguments and decides what happens when someone breaks the law.`,
              audioPrompt: `Justice is the system that fairly settles arguments and enforces laws, {name}. When two people disagree about something serious — like a broken contract — they can take it to a court. When someone is accused of a crime, a court decides what's true and what should happen. The big idea behind justice is that nobody is above the law. Not the rich. Not the powerful. Not even the President. When that idea works, people trust the system. When the powerful escape consequences, trust breaks down quickly.` },
          ],
        },

        // ── SECTION 3 ─────────────────────────────────────────────────────────
        {
          id: `l01-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Rule by the People: Democracy and Republic`,
          paragraphs: [
            `If you live in the United States, you've heard people call it a democracy. That word means rule by the people. The idea is that political power belongs to the citizens, who get to choose their leaders and have a say in how things are run.`,
            `Here's something most people don't realize: there are actually two main flavors of democracy. In a direct democracy, citizens vote directly on laws themselves. This was how it worked in ancient Greece, in small cities. But it only works when the group is small enough to gather in one place.`,
            `In a republic, citizens elect representatives — people whose job is to make laws on behalf of everyone. The United States is a republic. So is most of Europe. The reason is practical: you can't fit 330 million Americans into one room to vote on every law. So citizens elect Senators, Representatives, governors, and a President to do it for them. That's why elections are such a big deal. Picking the right representatives is how citizens actually shape what government does.`,
          ],
          image: `/ue-assets/social-studies/l01-s3-democracy.webp`,
          imageCaption: `Democracy = rule by the people. Republic = the people elect representatives to lead.`,
          vocab: [
            { word: `democracy`,
              definition: `A type of government where political power comes from the people, usually through voting.`,
              audioPrompt: `Democracy means rule by the people, {name}. The word comes from two ancient Greek roots: demos meaning "the people" and kratos meaning "power." In a democracy, citizens hold political power. They might use it by voting directly on laws, or by choosing representatives who vote for them. The opposite of democracy is a government where one person or a tiny group makes all the decisions, and ordinary people have no say. Most free countries today are democracies of some kind — but the details vary a lot.` },
            { word: `republic`,
              definition: `A type of democracy where citizens vote for representatives, who then make the laws.`,
              audioPrompt: `A republic is a type of democracy where citizens elect representatives instead of voting on every single law themselves, {name}. The United States is a republic. Citizens vote for a President, Senators, Representatives, and many other officials. Those officials then meet to write and vote on laws. The reason for the system is simple — direct democracy doesn't scale to large countries. The smart move, as a citizen, is to know who your representatives are, what they actually believe, and what they actually do.` },
          ],
        },

        // ── SECTION 4 ─────────────────────────────────────────────────────────
        {
          id: `l01-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Other Ways Societies Have Been Ruled`,
          paragraphs: [
            `Democracy is actually pretty recent in human history. For thousands of years, most governments were monarchies — ruled by a king or queen who inherited the throne from a parent. Ancient Egypt had pharaohs. Medieval Europe had kings. Today, some countries still have a king or queen, like the United Kingdom, but in most modern monarchies the royal family is mostly ceremonial — Parliament actually makes the laws.`,
            `The other major alternative is a dictatorship. In a dictatorship, one person or a small group holds most of the power, usually gained through force or rigged elections. Dictators often control the news, jail people who speak out against them, and prevent free elections. North Korea is a current example.`,
            `Here's an important warning sign. A country might call itself a democracy, hold elections, and still actually be a dictatorship in disguise. The test isn't whether elections happen — it's whether the elections are real, whether the press can criticize the government safely, and whether opposing leaders can run for office without ending up in prison. When you grow up, knowing this difference matters more than people think.`,
          ],
          image: `/ue-assets/social-studies/l01-s4-monarchy-dictatorship.webp`,
          imageCaption: `Monarchy: inherited rule. Dictatorship: rule held by force.`,
          vocab: [
            { word: `monarchy`,
              definition: `A government where one person — usually a king or queen — holds power, often inherited from a parent.`,
              audioPrompt: `A monarchy is a government where one person — a king, queen, or emperor — holds political power, usually inherited from a parent, {name}. For most of human history, this was the most common kind of government on Earth. Today, most monarchies are very different — the king or queen is mostly a symbol, and an elected Parliament makes the actual laws. The UK, Sweden, Spain, and Japan all work this way. The royals show up at ceremonies and represent the country, but they don't decide what the laws are.` },
            { word: `dictatorship`,
              definition: `A government where one person or a small group holds total power, usually kept through force.`,
              audioPrompt: `A dictatorship is a government where one person, or a small group, holds total power, {name}. Dictators usually take power through force, or through elections that aren't fair. They control the army, the news, and often the economy. They typically jail or banish people who speak out against them. They might hold elections, but those elections are fake — opposing candidates can't really win. The most important question for spotting a dictatorship isn't the leader's title. It's whether ordinary citizens can criticize the government without getting in trouble.` },
          ],
        },

        // ── SECTION 5 ─────────────────────────────────────────────────────────
        {
          id: `l01-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Your Part in It`,
          paragraphs: [
            `Most kids your age think government is "those people over there" — old men in suits in some building far away. Here's the truth: government is the system you live inside every single day. The road you take to school. The water you drink. The standards on the food you eat. The air quality you breathe. The internet you use. All shaped by decisions government makes.`,
            `You can't vote yet. That comes at 18. But there are still things you can do that matter now. You can pay attention to how things work. You can ask questions about why a rule exists. You can form opinions about whether something seems fair. You can talk about it with your family. You can read about it. You can volunteer in your community.`,
            `This isn't homework. It's the early version of being a citizen — someone who actually understands how their country works. Most adults never learn this well. The fact that you're learning it now, at 9 or 10, means by the time you're 18 you'll be way ahead of most people walking into a voting booth.`,
          ],
          image: `/ue-assets/social-studies/l01-s5-your-part.webp`,
          imageCaption: `Being a citizen starts now, not at 18.`,
          vocab: [
            { word: `citizen`,
              definition: `A person who is part of a country and shares in its rights and responsibilities.`,
              audioPrompt: `A citizen is a person who is officially part of a country and shares in its rights and responsibilities, {name}. Citizens have rights — like the right to speak freely, vote when they're old enough, and be treated equally under the law. They also have responsibilities — like following the law, paying taxes when they earn money, and serving on juries when called. Being a good citizen isn't just about following rules. It's about understanding how your country works and being willing to make it better.` },
            { word: `responsibility`,
              definition: `A duty or obligation — something you're expected to do as a member of a community or country.`,
              audioPrompt: `Responsibility means something you're expected to do as a member of your community or country, {name}. Citizens have rights, but rights come with responsibilities. You have the right to use public roads — and the responsibility to follow traffic laws. You have the right to free speech — and the responsibility to be honest and not endanger others. You'll have the right to vote at 18 — and the responsibility to actually learn about the issues before you do. Rights and responsibilities are two sides of the same coin.` },
          ],
        },

        // ── INTERACTIVE GAME — Investigation format (UE Toolkit, May 22) ──────
        {
          id: `l01-game`,
          type: `interactive`,
          format: `investigation`,
          guideText: `Time to be a detective, {name}. You'll investigate four mystery countries, one at a time. For each one, you get clues — one by one. After all the clues, you make your call: what kind of government is this country running? Some of these are tricky on purpose. Pay attention.`,
          options: [
            { id: `democracy`,    label: `Democracy/Republic`, color: `#34D399`, description: `Citizens hold political power through fair elections.` },
            { id: `monarchy`,     label: `Monarchy`,            color: `#A78BFA`, description: `A king or queen leads, usually inherited from a parent.` },
            { id: `dictatorship`, label: `Dictatorship`,        color: `#F87171`, description: `One person or small group holds total power, often by force.` },
          ],
          cases: [
            {
              id: `case-1`,
              caseTitle: `Mystery Country #1`,
              clues: [
                { text: `The same leader has won every election for the past 30 years, always with at least 95 percent of the vote.` },
                { text: `Reporters who criticize the government often disappear or end up in prison.` },
                { text: `The leader personally controls the military, the courts, and the national news.` },
              ],
              correctAnswer: `dictatorship`,
              realWorldExample: `This case is based on countries like Belarus, where elections happen but aren't free.`,
              explanation: `Holding elections doesn't make a country democratic. When opposition is suppressed and one person controls everything, the elections are just for show. This is a dictatorship.`,
            },
            {
              id: `case-2`,
              caseTitle: `Mystery Country #2`,
              clues: [
                { text: `This country has had a royal family for over 1,000 years.` },
                { text: `But the king doesn't actually pass laws — an elected Parliament does that.` },
                { text: `The royal family appears at ceremonies and represents the country, but doesn't run the day-to-day government.` },
              ],
              correctAnswer: `monarchy`,
              realWorldExample: `This case is based on the United Kingdom.`,
              explanation: `Most modern monarchies work this way. The royal family is a symbol, and Parliament — elected by citizens — makes the actual laws. The country is also a democracy at the same time. Categories aren't always separate.`,
            },
            {
              id: `case-3`,
              caseTitle: `Mystery Country #3`,
              clues: [
                { text: `Citizens vote for representatives every few years.` },
                { text: `Multiple political parties openly compete, and the press freely criticizes whoever is in power.` },
                { text: `When the previous leader's term ended, they peacefully handed power to the next elected leader.` },
              ],
              correctAnswer: `democracy`,
              realWorldExample: `This case fits many countries — the United States, Canada, France, Germany, Japan, and dozens more.`,
              explanation: `Peaceful transfer of power is one of the strongest signs of a real democracy. It means people who lose elections accept the result and step down. The free press is another huge sign.`,
            },
            {
              id: `case-4`,
              caseTitle: `Mystery Country #4 — The Tricky One`,
              clues: [
                { text: `This country holds presidential elections every five years.` },
                { text: `But only candidates approved by the ruling party are allowed to run.` },
                { text: `And journalists who criticize the leader can be arrested under "national security" laws.` },
              ],
              correctAnswer: `dictatorship`,
              realWorldExample: `This pattern shows up in several countries that call themselves democracies but limit who can run and what people can say.`,
              explanation: `This is the trickiest pattern to spot. Having elections doesn't make a country democratic. When only approved candidates can run and the press isn't free, it's a dictatorship pretending to be a democracy. Knowing this difference is one of the most important things a citizen can learn.`,
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
              question: `What is government, in the most basic sense?`,
              options: [
                `Just the President and Congress`,
                `The system of people, laws, and organizations that helps a society live together`,
                `Only the police and the military`,
                `The buildings where laws are made`,
              ],
              correctIndex: 1,
              explanation: `Government is the whole system, not just the people at the top. It includes the laws, the agencies, the courts, and everything else that helps a society make decisions and run.` },
            { id: `l01-q2`, format: `multiple-choice`,
              question: `Which of these is NOT one of the four main jobs of government?`,
              options: [
                `Order (making laws so life is predictable)`,
                `Services (roads, schools, water systems)`,
                `Making everyone wealthy`,
                `Justice (settling arguments and enforcing laws)`,
              ],
              correctIndex: 2,
              explanation: `Making everyone wealthy isn't a government job. The four core jobs are order, services, protection, and justice.` },
            { id: `l01-q3`, format: `multiple-choice`,
              question: `What's the difference between a direct democracy and a republic?`,
              options: [
                `There's no real difference`,
                `In a republic, citizens vote for representatives who then make the laws — instead of voting on every law themselves`,
                `Republics don't allow voting`,
                `Direct democracy is newer`,
              ],
              correctIndex: 1,
              explanation: `In a republic, you elect representatives to make laws for you. In a direct democracy, every citizen votes on every law personally. Direct democracy only works in small populations.` },
            { id: `l01-q4`, format: `multiple-choice`,
              question: `In most modern monarchies, like the UK, who actually makes the laws?`,
              options: [
                `The king or queen alone`,
                `An elected Parliament — the monarch is mostly a symbol`,
                `The military`,
                `Religious leaders`,
              ],
              correctIndex: 1,
              explanation: `In most modern monarchies, the royal family is ceremonial. Parliament — the elected legislature — actually writes the laws.` },
            { id: `l01-q5`, format: `true-false`,
              question: `True or false: In a dictatorship, citizens can usually criticize the government without getting in trouble.`,
              correctAnswer: false,
              explanation: `False. The lack of safe public criticism is one of the clearest signs that a country is actually a dictatorship, no matter what it calls itself.` },
            { id: `l01-q6`, format: `multiple-choice`,
              question: `A country holds elections, but the same leader wins every time, opposing leaders mysteriously disappear, and reporters who criticize the government get arrested. This country is probably a...`,
              options: [
                `Democracy with technical issues`,
                `Constitutional monarchy`,
                `Dictatorship pretending to be a democracy`,
                `Republic`,
              ],
              correctIndex: 2,
              explanation: `Holding elections doesn't make a country democratic. When the press isn't free and opposition is suppressed, the elections are theater. This is a dictatorship in disguise.` },
            { id: `l01-q7`, format: `multiple-choice`,
              question: `Why are elections so important in a republic?`,
              options: [
                `They're a fun tradition`,
                `They're how citizens actually shape what government does — by choosing the representatives who make the laws`,
                `They're required by international law`,
                `They aren't important`,
              ],
              correctIndex: 1,
              explanation: `Elections are the main way citizens in a republic exercise their political power. If you pick representatives well, your voice gets heard in every law they vote on.` },
            { id: `l01-q8`, format: `multiple-choice`,
              question: `What's something you can do RIGHT NOW, before you're old enough to vote, that counts as being a good citizen?`,
              options: [
                `Nothing — you have to wait until 18`,
                `Pay attention to how things work, ask questions, form opinions, and talk about it with your family`,
                `Run for President`,
                `Pay taxes`,
              ],
              correctIndex: 1,
              explanation: `Citizenship doesn't start at 18. The habits of paying attention, asking questions, and forming opinions are the things that make someone a thoughtful voter later.` },
          ],
        },

        // ── REFLECTION (NEW UE screen) ────────────────────────────────────────
        {
          id: `l01-reflection`,
          type: `reflection`,
          guideText: `Before we wrap, {name}, take a real minute to think about what you just learned. Pick ONE question and actually answer it. Your response gets saved, and I'll remember it next time we talk.`,
          prompts: [
            { id: `r1`, text: `What surprised you most in this lesson?` },
            { id: `r2`, text: `Which type of government would be hardest to live in, and why?` },
            { id: `r3`, text: `Name one place in your daily life where you see government in action.` },
            { id: `r4`, text: `If you could ask the leader of any country one question, what would it be?` },
          ],
        },

        // ── REAL-WORLD ────────────────────────────────────────────────────────
        {
          id: `l01-realworld`,
          type: `real-world`,
          guideText: `Right now, on planet Earth, about four out of every ten people live in countries where the press isn't free, opposition gets jailed, or elections aren't real. That's billions of people. Democracy is rarer and more fragile than most people realize. The freedoms you might take for granted — to speak your mind, choose your leaders, read what you want — exist because people fought for them, and they survive because each new generation keeps choosing them.`,
          familyAdventure: `Have a family debate. Pick three people. Each person picks one type of government — democracy, monarchy, or dictatorship — and has to argue why it's BEST for ordinary people. Even if you don't believe your side, you have to make the strongest case you can. After everyone presents, vote on who made the most convincing argument. Then talk about it: was the most convincing argument also the type you'd actually want to live in? What does that tell you about how people get persuaded?`,
          creativePrompt: {
            intro: `You and a group of friends are settling a new colony on a planet far from Earth. There's no existing government. You have to design one from scratch. What type would you choose, and why?`,
            floor: `Write at least 5 sentences. Use the sentence starters if helpful.`,
            stretch: `Write 8–10 sentences. Defend your choice — what specifically about this type makes it the right call for a brand new colony?`,
            open: `Write as much as you want. Imagine the founding rules of your new world.`,
            frames: [
              `My colony will be a ___.`,
              `I picked this type because ___.`,
              `The biggest danger I'm trying to prevent is ___.`,
              `One rule I want in our founding document is ___.`,
              `If something went wrong with the system, the way to fix it would be ___.`,
            ],
          },
        },

        // ── CELEBRATION ───────────────────────────────────────────────────────
        {
          id: `l01-celebration`,
          type: `celebration`,
          message: `Solid work, {name}. You can now explain what government actually is, name its four main jobs, and tell the difference between a democracy, a monarchy, and a dictatorship. Next lesson, we go deep on one specific document that has shaped your country for over 200 years — the US Constitution. See you there. — Atlas.`,
          badge: `government-principles-master`,
          badgeName: `Government Principles Master`,
          xpEarned: 75,
        },
      ],
    },
  ],
};

export default SOCIAL_STUDIES_UE_L01;

// ─── Dev asset check ──────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const screens = SOCIAL_STUDIES_UE_L01.lessons[0].screens;
  const mags = screens.filter(s => s.type === 'magazine').length;
  const game = screens.find(s => s.type === 'interactive')?.items?.length ?? 0;
  const quiz = screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  const refl = screens.find(s => s.type === 'reflection')?.prompts?.length ?? 0;
  const totalVocab = screens.filter(s => s.type === 'magazine').reduce((sum, s) => sum + (s.vocab?.length || 0), 0);
  console.log(`[LESSON-SS-UE-L01 v2] Loaded with ${mags} magazine sections, ${totalVocab} vocab terms, ${game} game items, ${quiz} quiz Qs, ${refl} reflection prompts`);
}
