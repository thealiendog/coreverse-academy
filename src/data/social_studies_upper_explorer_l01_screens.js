// ─────────────────────────────────────────────────────────────────────────────
// SOCIAL STUDIES UE  |  L01 — Principles of Government: Types and Functions
// Age band : upper_explorers (9–10)   Guide: atlas
// Standards: C3 D2.Civ.1.6-8 / D2.Civ.4.6-8 / D2.Civ.10.6-8
// CALIBRATED: UE spec v1 (May 2026) — proof lesson for new band
// ─────────────────────────────────────────────────────────────────────────────

const SOCIAL_STUDIES_UE_L01 = {
  ageBand: `upper_explorers`,
  subjectId: `social_studies`,
  guide: `atlas`,

  lessons: [
    {
      id: `social-studies-9-10-01`,
      title: `Principles of Government: Types and Functions`,
      duration: 25,
      xpReward: 75,
      badge: `government-principles-master`,
      badgeName: `Government Principles Master`,

      screens: [
        {
          id: `l01-welcome`,
          type: `welcome`,
          guideText: `Quick question. Imagine waking up tomorrow and no government exists anywhere. No traffic laws, no schools, no police, no courts, no postal service, no military. Sounds like freedom? For about a day, maybe. Then someone bigger than you takes your stuff and there's nobody to stop them. Welcome back to the case for government. Today, {name}, we're investigating what government actually is, why every society on Earth has one, and the major ways humans have organized themselves to be governed.`,
          headline: `Principles of Government`,
          subtitle: `What governments do, why they exist, and the ways humans have organized them`,
          visual: `/ue-assets/social-studies/l01-welcome.webp`,
        },

        {
          id: `l01-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `What Is Government, Really?`,
          paragraphs: [
            `Most people use the word "government" without really defining it. They picture the President, or Congress, or maybe their state capitol building. But government is something bigger than any of those things.`,
            `A government is the system of people, laws, and institutions that makes collective decisions for a society. It's how a group of millions of people can act as one — passing laws, defending borders, settling disputes, running schools, paving roads. Without government, large societies cannot function. Every village, city, country, and empire in human history has had some form of it.`,
            `Here's the deep question: why? Why do humans, who otherwise love their freedom, voluntarily submit to being governed? The answer comes down to one trade. We give up some freedom to gain something even more valuable: order, predictability, and protection from each other.`,
          ],
          image: `/ue-assets/social-studies/l01-s1-what-is-government.webp`,
          imageCaption: `Government is the system that lets millions of people act together.`,
          vocab: [
            { word: `government`,
              definition: `The system of people, laws, and institutions that makes collective decisions for a society.`,
              audioPrompt: `Government is the system of people, laws, and institutions that makes collective decisions for a society, {name}. It includes the leaders we elect, the laws they write, the courts that interpret those laws, and the agencies that carry them out. Every country on Earth has a government in some form, because organizing millions of people without one is essentially impossible. What's the first part of "government" you notice in your daily life — schools, roads, traffic lights? Each of those is the system at work.` },
            { word: `sovereignty`,
              definition: `The supreme authority to govern itself, without outside interference.`,
              audioPrompt: `Sovereignty is the supreme authority to govern, {name}. When we say a country is sovereign, we mean it has the final say over its own affairs — no foreign power can override its laws. Sovereignty is what makes a country a country. The United States is sovereign. So is Mexico. So is Japan. But who holds sovereignty inside a country differs. In some, the people hold it. In others, a king. In others, a religious leader. That difference is huge, and it shapes everything else.` },
            { word: `anarchy`,
              definition: `The complete absence of government or organized authority.`,
              audioPrompt: `Anarchy means the complete absence of government, {name}. Some people romanticize anarchy as ultimate freedom. But studying history tells a different story. When societies collapse into anarchy — like after civil wars or natural disasters — the strongest groups usually take over and impose harsh rule. Real anarchy is rarely peaceful. That's part of why nearly every human society in history has chosen some form of government over none. The interesting question is which form.` },
          ],
        },

        {
          id: `l01-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `The Four Functions of Government`,
          paragraphs: [
            `Governments do a lot, but most of their work falls into four core categories. Knowing these helps you evaluate any government — from your local city council to the United Nations.`,
            `First, order. Governments make and enforce laws that keep society predictable. Traffic laws prevent crashes. Contracts make business possible. Without these rules, everyday life would be chaos. Second, services. Governments build and maintain things individuals can't provide alone — roads, schools, water systems, public health. Even libraries and parks fall under this.`,
            `Third, protection. Militaries defend a country from external threats. Police protect citizens from internal ones like crime. Fire departments and emergency services protect from disasters. Fourth, justice. Courts settle disputes between individuals, between citizens and the government, and between businesses. They also punish people who break the law. When any of these four functions breaks down, people suffer — and pressure for change builds quickly.`,
          ],
          image: `/ue-assets/social-studies/l01-s2-four-functions.webp`,
          imageCaption: `Four functions: Order, Services, Protection, Justice.`,
          vocab: [
            { word: `order`,
              definition: `Predictable rules that make society function smoothly.`,
              audioPrompt: `Order means predictable rules that let society function, {name}. It's not just about preventing crime — it's about making everyday life possible. When you drive on the right side of the road, that's order. When a contract is enforceable in court, that's order. Without it, people couldn't plan, build, or trust each other. Some level of order is so fundamental that we forget it's there, like background music in a movie. The moment it stops, you notice.` },
            { word: `services`,
              definition: `Things governments provide that individuals can't realistically provide alone.`,
              audioPrompt: `Services are things governments provide because individuals can't realistically provide them alone, {name}. Think about a road. No single person could build a highway across a state. Or public schools, where every kid can get an education regardless of family wealth. Or sewers, water systems, emergency response. These are called public goods because they benefit everyone. They're funded through taxes — money citizens pool together to make big things possible.` },
            { word: `justice`,
              definition: `The system that fairly resolves disputes and enforces laws.`,
              audioPrompt: `Justice is the system that fairly resolves disputes and enforces laws, {name}. When two people disagree about a contract, or someone is accused of a crime, the justice system decides. The deep idea behind it is that no one is above the law — not the rich, not the powerful, not the President. When justice works well, people trust the system. When it fails — when the powerful escape consequences or the innocent are punished — that trust collapses, and so does the legitimacy of the whole government.` },
            { word: `defense`,
              definition: `Protection of a country and its people from threats, both external and internal.`,
              audioPrompt: `Defense is the protection of a country from threats, {name}. The military defends against threats from other countries. Police defend against crime within the country. Fire and emergency services defend against disasters. Border patrol defends against illegal entry. The principle is that individuals can't realistically defend themselves alone against organized threats — so we pool resources to build forces that protect everyone. How much defense is enough is one of the oldest debates in politics.` },
          ],
        },

        {
          id: `l01-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Democracy and Republic: Rule by the People`,
          paragraphs: [
            `If you live in the United States or most of Europe, you probably grew up calling your government a "democracy." That word means rule by the people. The original democracies were in ancient Greece, where male citizens of a city like Athens gathered in a public square and voted directly on laws. This is called direct democracy.`,
            `But here's the catch: direct democracy only scales to small populations. You can't fit 330 million Americans into one square to vote on every law. So most modern "democracies" are actually republics — a system where citizens elect representatives who then make laws on their behalf. The US, France, Germany, and India are all republics, not direct democracies.`,
            `Why this matters: in a republic, you have political power, but you exercise it mostly through choosing who governs. That makes elections critical. It also means that paying attention to who you elect — and what they actually do once in office — is one of the most important things a citizen can do.`,
          ],
          image: `/ue-assets/social-studies/l01-s3-democracy.webp`,
          imageCaption: `Democracy: people vote directly. Republic: people elect representatives.`,
          vocab: [
            { word: `democracy`,
              definition: `A system of government in which political power comes from the people.`,
              audioPrompt: `Democracy means rule by the people, {name}. The word comes from two Greek roots: demos meaning "the people" and kratos meaning "power" or "rule." In a democracy, citizens collectively hold political power. They might exercise it by voting directly on laws or by choosing representatives. The opposite of democracy is autocracy, where one person or a tiny group holds power. Most modern free countries are democracies, but how they implement it varies dramatically. The label alone doesn't tell you everything.` },
            { word: `republic`,
              definition: `A system in which citizens elect representatives to govern on their behalf.`,
              audioPrompt: `A republic is a system where citizens elect representatives, {name}, who then make laws on the people's behalf. Almost every modern democracy is actually a republic, because direct democracy doesn't scale beyond very small populations. The US Founders deliberately chose a republic because they were worried about direct democracy turning into mob rule. By electing representatives who deliberate before voting, the founders hoped to slow down impulses and create more thoughtful decisions. Whether that works depends on the quality of the representatives.` },
            { word: `representation`,
              definition: `When elected officials act on behalf of the citizens who voted for them.`,
              audioPrompt: `Representation means elected officials acting on behalf of the citizens who voted for them, {name}. It sounds simple, but it raises huge questions. Should a representative do exactly what their voters want, even if they personally disagree? Or should they vote their own conscience? Should they represent only the people who voted for them, or everyone in their district? These debates are nearly as old as representative government itself, and there's no single right answer. Knowing your representatives' actual record matters more than party labels.` },
          ],
        },

        {
          id: `l01-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Monarchy and Dictatorship: Rule by One`,
          paragraphs: [
            `For most of human history, government meant rule by one person — usually a king or queen who inherited the throne from a parent. This is monarchy. It dominated the world from ancient Egypt through medieval Europe until just a few hundred years ago.`,
            `Today, some monarchies still exist, but most are constitutional monarchies, where the king or queen is mostly ceremonial. The United Kingdom is a famous example: King Charles is head of state, but Parliament writes the laws and the Prime Minister runs the government. Absolute monarchies, where the ruler has unlimited power, are rare today — Saudi Arabia is one example.`,
            `Dictatorship is similar to absolute monarchy in that one person holds most power, but the dictator usually gained power through force, revolution, or a rigged election rather than inheritance. Dictators often control the media, jail opposition leaders, and prevent free elections. North Korea is a current example. Dictators usually claim they rule for the people's benefit, but the lack of free elections means people can't actually disagree without risking their safety.`,
          ],
          image: `/ue-assets/social-studies/l01-s4-monarchy-dictatorship.webp`,
          imageCaption: `Monarchy: inherited rule. Dictatorship: rule by force or rigged power.`,
          vocab: [
            { word: `monarchy`,
              definition: `A government in which a single person holds power, usually inherited.`,
              audioPrompt: `Monarchy is a government where one person — a king, queen, emperor, or sultan — holds political power, usually inherited from a parent, {name}. For thousands of years this was the most common type of government on Earth. Today, most monarchies are "constitutional," meaning the monarch's power is limited by laws and a constitution. The UK, Sweden, Japan, and the Netherlands all have constitutional monarchies. Their kings and queens are mostly ceremonial — they don't make laws. Absolute monarchies, where the king's word is law, are rare now.` },
            { word: `constitutional monarchy`,
              definition: `A monarchy in which the king or queen's power is limited by a constitution.`,
              audioPrompt: `A constitutional monarchy is one where the king or queen's power is limited by a constitution and shared with an elected legislature, {name}. The British model is the most famous: the monarch reigns but does not rule. Parliament makes the laws. The Prime Minister leads the government. The monarch is a symbol of national unity and continuity but doesn't decide policy. This system blends tradition with democracy — keeping the royal family for cultural reasons while giving real power to elected officials.` },
            { word: `dictatorship`,
              definition: `A government in which one person or party holds total power, usually gained or held by force.`,
              audioPrompt: `A dictatorship is a government where one person or a small group holds total power, {name}, usually gained or kept through force rather than free elections. Dictators control the military, the media, and often the economy. They typically jail or exile anyone who openly opposes them. They may hold elections, but those elections aren't truly free — opposing candidates can't realistically win. The key warning sign of dictatorship isn't the leader's title. It's whether you can safely criticize the government without consequence.` },
          ],
        },

        {
          id: `l01-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Theocracy and Mixed Systems`,
          paragraphs: [
            `Some governments base their laws on religion. This is called theocracy. The Vatican City, ruled by the Pope, is a theocracy. Iran is another modern example, where Islamic clerics hold significant political power and laws must align with religious teachings.`,
            `Theocracies blur the line between religious authority and political authority. Supporters argue that grounding laws in religious values gives them deeper meaning. Critics argue that it forces everyone — including non-believers — to live under one religion's rules, which can violate freedom of religion.`,
            `Most countries today don't fit neatly into one category. They're hybrids. A country might be a republic with monarchic ceremonies, or a democracy with strong religious influence in some laws, or officially democratic but practically authoritarian. Real governments are messy. Knowing the categories helps you understand them, but the categories themselves rarely capture the full picture.`,
          ],
          image: `/ue-assets/social-studies/l01-s5-theocracy.webp`,
          imageCaption: `Theocracy: religious leaders hold political authority. Most modern governments are hybrids.`,
          vocab: [
            { word: `theocracy`,
              definition: `A government in which religious leaders hold political power and laws come from religious teachings.`,
              audioPrompt: `Theocracy is a government where religious authority and political authority are merged, {name}. Religious leaders make and enforce laws based on sacred texts and teachings. The Vatican is a small theocracy ruled by the Pope. Iran is a larger one with elected officials but ultimate authority in religious leaders called Ayatollahs. The big tension in any theocracy is that not everyone shares the same religion. Religious minorities in a theocracy often have fewer rights, because the laws are based on a religion that isn't theirs.` },
            { word: `authoritarian`,
              definition: `A government style where citizens have few civil rights and freedoms, even if elections technically exist.`,
              audioPrompt: `Authoritarian describes a government style, {name}, not a specific type. Authoritarian governments concentrate power in a small group. They limit civil rights like free speech, free press, and protest. They may hold elections, but the elections aren't fair. They control or pressure judges. Many modern governments are authoritarian even though they call themselves democracies or republics. The label matters less than the reality: can citizens speak, organize, and vote freely without fear?` },
            { word: `hybrid system`,
              definition: `A government that mixes features of multiple types, not fitting cleanly into one category.`,
              audioPrompt: `A hybrid system mixes features of multiple government types, {name}. Most real-world governments are hybrids. The UK is a constitutional monarchy and a parliamentary democracy at the same time. The US is a constitutional republic with federal and state layers. Iran is a theocratic republic. Real politics doesn't fit neatly into textbook categories. Learning the pure types is still useful, because it gives you a vocabulary for analyzing what's actually happening in a specific country. The categories are tools, not destinations.` },
          ],
        },

        {
          id: `l01-mag-6`,
          type: `magazine`,
          section: 6,
          headline: `Where America Fits, and Where You Fit`,
          paragraphs: [
            `The United States is a constitutional republic. Constitutional means there's a written document — the Constitution — that defines and limits government power. Republic means citizens elect representatives instead of voting directly on every law. It's also a federal system, meaning power is divided between national and state governments. We'll dig deep into the US Constitution in the next lesson.`,
            `Here's something most kids never learn: government is not "those people over there." Government is the system you live inside every day. The road you take to school, the water you drink, the air quality you breathe, the safety standards on your food — all are products of government decisions. Even the internet you use was originally built by a government project.`,
            `As a 9 or 10 year old, you can't vote yet. But you can pay attention. You can learn how your government works. You can form opinions about what it should do. And when you turn 18, you'll be ready to do what most adults never learn to do well: vote thoughtfully. That's the seed that gets planted today.`,
          ],
          image: `/ue-assets/social-studies/l01-s6-america-and-you.webp`,
          imageCaption: `The US is a constitutional republic. You're part of it every day.`,
          vocab: [
            { word: `constitutional republic`,
              definition: `A republic whose government's powers are defined and limited by a written constitution.`,
              audioPrompt: `A constitutional republic combines two ideas, {name}. First, it's a republic — citizens elect representatives instead of voting directly. Second, it's constitutional — there's a written document that defines what the government can and can't do. The Constitution is the supreme law. Even Congress and the President have to obey it. The Supreme Court's job is to make sure they do. The United States invented this combination, and most modern democracies have copied it. The Constitution is what we'll explore in detail next lesson.` },
            { word: `civic participation`,
              definition: `The active involvement of citizens in their government and community.`,
              audioPrompt: `Civic participation is the active involvement of citizens in their government and community, {name}. It's much more than voting once every four years. It includes paying attention to local news, contacting representatives, attending community meetings, volunteering, peacefully protesting, and even just having informed conversations with family and friends. Strong democracies depend on citizens who participate. Weak democracies — and dictatorships — survive by getting citizens to disengage. Your participation, even before you can vote, shapes which kind of country you grow up in.` },
            { word: `consent of the governed`,
              definition: `The idea that government's authority comes from the willing agreement of the people it rules.`,
              audioPrompt: `Consent of the governed is the idea that legitimate government authority comes from the willing agreement of the people it rules, {name}. This phrase appears in the Declaration of Independence. The Founders were arguing that the British king didn't have legitimate authority over the American colonies because the colonists hadn't consented to his rule. The radical implication: if a government loses the consent of its people, the people have the right to change it. This is the moral foundation of every democracy.` },
          ],
        },

        {
          id: `l01-game`,
          type: `interactive`,
          format: `drag-identify`,
          guideText: `Sort each scenario into the right type of government, {name}. Some are tricky — read carefully and think about what kind of system would actually do this.`,
          buckets: [
            { id: `democracy`,    label: `Democracy/Republic`, color: `#34D399` },
            { id: `monarchy`,     label: `Monarchy`,            color: `#A78BFA` },
            { id: `dictatorship`, label: `Dictatorship`,        color: `#F87171` },
            { id: `theocracy`,    label: `Theocracy`,           color: `#FBBF24` },
          ],
          items: [
            { id: `l01-g1`, image: `l01-game-1.webp`, label: `Citizens vote in fair elections every four years to choose their leader`,
              matchPhrase: `Democracy. Free, fair, regular elections are the defining feature.`, correctMatch: `democracy` },
            { id: `l01-g2`, image: `l01-game-2.webp`, label: `Multiple political parties openly compete for power without fear`,
              matchPhrase: `Democracy. Real competition between parties is something only democracies allow.`, correctMatch: `democracy` },
            { id: `l01-g3`, image: `l01-game-3.webp`, label: `Free press can criticize the government and reporters aren't jailed`,
              matchPhrase: `Democracy. A free press is one of the strongest indicators that a country is actually democratic, not just labeled that way.`, correctMatch: `democracy` },
            { id: `l01-g4`, image: `l01-game-4.webp`, label: `Power passes from a queen to her firstborn child upon her death`,
              matchPhrase: `Monarchy. Inherited succession is the classic feature.`, correctMatch: `monarchy` },
            { id: `l01-g5`, image: `l01-game-5.webp`, label: `A royal family has ruled for over 500 years`,
              matchPhrase: `Monarchy. Long-lasting dynasties are how monarchies maintain power across generations.`, correctMatch: `monarchy` },
            { id: `l01-g6`, image: `l01-game-6.webp`, label: `The king is the head of state, but Parliament makes the laws`,
              matchPhrase: `Monarchy — specifically a constitutional monarchy like the UK. The monarch reigns but does not rule.`, correctMatch: `monarchy` },
            { id: `l01-g7`, image: `l01-game-7.webp`, label: `One leader controls the military, media, and police; no real opposition exists`,
              matchPhrase: `Dictatorship. Concentration of all power in one person, with the opposition suppressed.`, correctMatch: `dictatorship` },
            { id: `l01-g8`, image: `l01-game-8.webp`, label: `Opposition leaders who criticize the government are jailed or exiled`,
              matchPhrase: `Dictatorship. Punishing dissent is one of the clearest warning signs.`, correctMatch: `dictatorship` },
            { id: `l01-g9`, image: `l01-game-9.webp`, label: `Elections are held but the same leader wins by suspicious margins every time`,
              matchPhrase: `Dictatorship. Holding fake elections to look legitimate is a common dictator move.`, correctMatch: `dictatorship` },
            { id: `l01-g10`, image: `l01-game-10.webp`, label: `Religious leaders interpret a holy text to make and enforce national laws`,
              matchPhrase: `Theocracy. Religion and political authority are merged into one system.`, correctMatch: `theocracy` },
            { id: `l01-g11`, image: `l01-game-11.webp`, label: `A council of clerics has final say over which laws can pass`,
              matchPhrase: `Theocracy. Iran works this way — elected officials propose laws, but religious clerics have veto power.`, correctMatch: `theocracy` },
            { id: `l01-g12`, image: `l01-game-12.webp`, label: `A holy book is the foundation of the country's entire legal code`,
              matchPhrase: `Theocracy. When sacred scripture becomes law, you have a theocracy by definition.`, correctMatch: `theocracy` },
          ],
        },

        {
          id: `l01-quiz`,
          type: `quiz`,
          guideText: `Let's see how much of this you've actually internalized, {name}.`,
          questions: [
            { id: `l01-q1`, format: `multiple-choice`,
              question: `What is the most basic definition of government?`,
              options: [
                `The President and Congress`,
                `The system of people, laws, and institutions that makes collective decisions for a society`,
                `The military and police`,
                `The buildings where laws are made`
              ],
              correctIndex: 1,
              explanation: `Government is bigger than any single building or person. It's the entire system that lets millions of people make decisions together.` },
            { id: `l01-q2`, format: `multiple-choice`,
              question: `Which of these is NOT one of the four core functions of government?`,
              options: [
                `Maintaining order`,
                `Providing services`,
                `Maximizing profits`,
                `Delivering justice`
              ],
              correctIndex: 2,
              explanation: `Maximizing profits is a goal for businesses, not governments. Government's four core functions are order, services, protection, and justice.` },
            { id: `l01-q3`, format: `multiple-choice`,
              question: `What is the key difference between a direct democracy and a republic?`,
              options: [
                `Direct democracy is older`,
                `In a republic, citizens elect representatives to vote on laws instead of voting directly themselves`,
                `Republics don't allow voting`,
                `There's no real difference`
              ],
              correctIndex: 1,
              explanation: `Republics use representation. Direct democracies have citizens voting on every law themselves, which only works in small populations.` },
            { id: `l01-q4`, format: `multiple-choice`,
              question: `What distinguishes a constitutional monarchy from an absolute monarchy?`,
              options: [
                `Constitutional monarchies have larger palaces`,
                `In a constitutional monarchy, the monarch's power is limited by laws and shared with an elected legislature`,
                `Constitutional monarchies don't have kings or queens`,
                `Absolute monarchies require voting`
              ],
              correctIndex: 1,
              explanation: `In a constitutional monarchy like the UK, the monarch is mostly ceremonial. Parliament makes the laws. In an absolute monarchy, the monarch's word is law.` },
            { id: `l01-q5`, format: `true-false`,
              question: `In a dictatorship, the absence of free elections means citizens can't safely disagree with the government.`,
              correctAnswer: true,
              explanation: `True. The lack of free elections is the structural feature that makes dissent dangerous. Without protected ways to voice disagreement, criticizing the government can mean jail or worse.` },
            { id: `l01-q6`, format: `multiple-choice`,
              question: `Most modern countries are best described as which of these?`,
              options: [
                `Pure democracies`,
                `Pure dictatorships`,
                `Hybrid systems that mix features of multiple types`,
                `Theocracies`
              ],
              correctIndex: 2,
              explanation: `Real governments rarely fit cleanly into one category. The UK is a constitutional monarchy AND a parliamentary democracy. The US is a constitutional republic AND a federal system. Hybrids are the norm.` },
            { id: `l01-q7`, format: `multiple-choice`,
              question: `A country holds elections, but one party always wins, opposition leaders mysteriously disappear, and the press is censored. This country is most likely a...`,
              options: [
                `Democracy with technical issues`,
                `Constitutional monarchy`,
                `Dictatorship dressed up to look like a democracy`,
                `Theocracy`
              ],
              correctIndex: 2,
              explanation: `The presence of elections doesn't make a country democratic. When opposition is suppressed and press isn't free, the elections are theater — this is a dictatorship in disguise.` },
            { id: `l01-q8`, format: `multiple-choice`,
              question: `Why does the idea of "consent of the governed" matter so much?`,
              options: [
                `It's just an old phrase with no real meaning today`,
                `It establishes that government authority comes from the people, not from God, kings, or force — making people the ultimate source of legitimacy`,
                `It means governments need permission to do anything`,
                `It's a rule that only applies to the United States`
              ],
              correctIndex: 1,
              explanation: `Consent of the governed is the moral foundation of every modern democracy. It says citizens — not kings, not religious leaders, not generals — are the source of government's legitimate power.` },
          ],
        },

        {
          id: `l01-reflection`,
          type: `reflection`,
          guideText: `Before we wrap up, take a moment to think about what you just learned, {name}. Pick ONE of these questions to actually answer. Your response gets saved — your parents can see it, and I'll remember it for next time.`,
          prompts: [
            { id: `r1`, text: `What surprised you the most in this lesson?` },
            { id: `r2`, text: `Which type of government would you find hardest to live under, and why?` },
            { id: `r3`, text: `Where in your own life do you already see government in action?` },
            { id: `r4`, text: `If you could ask the leader of any country one question, what would it be?` },
          ],
        },

        {
          id: `l01-realworld`,
          type: `real-world`,
          guideText: `Right now in the real world, about 4 out of every 10 people on Earth live in countries that are not free — meaning their governments suppress dissent, control the media, or hold fake elections. That's billions of people. Democracy is rarer and more fragile than most people realize. The freedoms you might take for granted — to speak your mind, to read what you want, to choose your leaders — exist because people fought, argued, and sometimes died to create them. They survive because each generation keeps choosing them.`,
          familyAdventure: `Hold a family debate. Each person picks a different type of government (democracy, monarchy, dictatorship, theocracy) and has to argue why it's best for ordinary people. Even if you don't believe it, you have to make the strongest case you can. After everyone presents, vote on which argument was most convincing — separate from which type you'd actually want to live under. Then discuss: was the persuasive argument the same as the right answer? What does that tell us about politics?`,
          creativePrompt: {
            intro: `You and a group of settlers are establishing a new colony on a habitable planet 50 years from Earth. There's no existing government. You have to design one from scratch. What type will you build, and what rules will matter most?`,
            floor: `Write at least 5 sentences. Use the sentence starters below if helpful.`,
            stretch: `Write 8–10 sentences. Defend your choice — what specifically about this type makes it the right call for a new colony?`,
            open: `Write as much as you want. Imagine the full Constitution of your new world.`,
            frames: [
              `My colony will be a ___.`,
              `I picked this type because ___.`,
              `The biggest danger I'm trying to prevent is ___.`,
              `One specific rule I want to write into our founding document is ___.`,
              `What I learned from Earth's history is ___.`,
              `If something went wrong with our system, the way to fix it would be ___.`,
            ],
          },
        },

        {
          id: `l01-celebration`,
          type: `celebration`,
          message: `You did real work today, {name}. You can now define what government actually is, explain its four core functions, and identify the major types — democracy, republic, monarchy, dictatorship, theocracy, and their hybrids. You also understand why "consent of the governed" is one of the most powerful ideas in human history. Next lesson, we go deeper into the US Constitution itself — the specific document that took these ideas and turned them into the framework you live under every day. Atlas the Bear.`,
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
  console.log(`[LESSON-SS-UE-L01] Loaded: "Principles of Government" with ${mags} magazine sections, ${game} game items, ${quiz} quiz questions, ${refl} reflection prompts`);
}
