// ─────────────────────────────────────────────────────────────────────────────
// SOCIAL STUDIES  |  L03 — Government: Who Makes Decisions for Us?
// Age band : explorers (6–8)   Guide: atlas
// Standards: C3 Framework D2.Civ.4.K-2 / D2.Civ.6.K-2 (leaders and rules)
// ─────────────────────────────────────────────────────────────────────────────

const SOCIAL_STUDIES_L03 = {
  ageBand:   `explorers`,
  subjectId: `social_studies`,
  guide:     `atlas`,

  lessons: [
    {
      id:        `social-studies-6-8-03`,
      title:     `Government: Who Makes Decisions for Us?`,
      duration:  12,
      xpReward:  50,
      badge:     `government-explorer`,
      badgeName: `Government Explorer`,

      screens: [

        {
          id: `l03-welcome`,
          type: `welcome`,
          guideText: `Hello again, {name}. Atlas here. Last lesson, we learned that LAWS are made by GOVERNMENT. But what IS government? Who makes the laws? Why? Today we'll explore — the group of people who make decisions for our communities. We'll see how government works at different levels and how YOU and people like you have a voice in it. Let's begin.`,
          headline: `Government: Who Makes Decisions for Us?`,
          subtitle: `The people who lead communities — and how they're chosen`,
          visual: `/explorer-assets/social-studies/l03-welcome.webp`,
        },

        {
          id: `l03-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Who Decides Things?`,
          paragraphs: [
            `In a small community like a family, parents usually decide things. In school, teachers and principals decide.`,
            `But in BIG communities — cities, states, countries — many MORE decisions need to get made. Who builds the roads? Who keeps the parks safe? Who runs the schools? Who decides what's fair? These are HUGE decisions. They can't be made by just one person. So communities create a special group of leaders called the GOVERNMENT. Government is the group of people whose JOB it is to make decisions for the whole community.`,
          ],
          image: `/explorer-assets/social-studies/l03-s1-decisions.webp`,
          imageCaption: `Government = the group of leaders who make decisions for the whole community. Roads, parks, schools, laws.`,
          vocab: [
            { word: `government`,     definition: `The GROUP of leaders who make decisions for a community. GOVERNMENTS make laws and run services.`,
              audioPrompt: `Government, {name}, is the group of leaders who make decisions for a community. They make laws. They build roads. They run schools. They keep parks open. They protect people. Government is responsible for making the BIG decisions that affect everyone. Every country has a government. Every state has one. Every city has one too.` },
            { word: `decide`,         definition: `To CHOOSE what to do. Government has to DECIDE many things for the community.`,
              audioPrompt: `To decide, {name}, is to choose what to do. Government has to decide many things for the community. Where to build a new school. Whether to add a stoplight. How to spend money on parks. What new laws are needed. Big decisions like these are too important for just one person — that's why we have governments with many leaders working together.` },
            { word: `community`,      definition: `A GROUP of people. Government works for the whole COMMUNITY.`,
              audioPrompt: `Community, {name}, is a group of people. Government works for the whole community — not just one or two people. The decisions government makes affect EVERYONE in the city or country. That's a big responsibility. Government should serve the people. The people should also know what government is doing.` },
          ],
        },

        {
          id: `l03-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Three LEVELS of Government`,
          paragraphs: [
            `Government has DIFFERENT LEVELS for different sized communities.`,
            `LOCAL government — runs your city or town. Decides things like trash pickup, local parks, and city schools. Has a MAYOR and city council. STATE government — runs your whole state. Decides things like state highways, state colleges, and bigger laws. Has a GOVERNOR. NATIONAL (or federal) government — runs the whole COUNTRY. Decides things like the army, money rules, and laws that apply to everyone in the country. Has a PRESIDENT or Prime Minister. Each level works on what's right for its size. Smaller things stay local. Bigger things go up to state or national.`,
          ],
          image: `/explorer-assets/social-studies/l03-s2-levels.webp`,
          imageCaption: `Three levels: LOCAL (city/town), STATE (whole state), NATIONAL (whole country). Each handles different things.`,
          vocab: [
            { word: `local government`, definition: `Government that runs your CITY or TOWN. LOCAL handles small things like parks and trash.`,
              audioPrompt: `Local government, {name}, is the government that runs your city or town. It handles smaller things — your neighborhood parks, local schools, trash pickup, fire department, library. The leader is often called the MAYOR. Local government affects your day-to-day life the most. It's the government closest to you.` },
            { word: `state government`, definition: `Government that runs your WHOLE STATE. STATE handles bigger things like highways and colleges.`,
              audioPrompt: `State government, {name}, is the government that runs your whole state. It handles bigger things than local — state highways, state colleges, and laws that apply across the state. The leader is called the GOVERNOR. State government has more reach than local government but less than national. It serves an entire state of people.` },
            { word: `national government`, definition: `Government that runs the WHOLE COUNTRY. Has a PRESIDENT or Prime Minister.`,
              audioPrompt: `National government, {name}, is the government that runs the whole country. Also called federal government. It handles the biggest things — the army, money rules, big laws that apply to everyone. The leader is usually the PRESIDENT (in the US) or Prime Minister (in some other countries). National government affects all the people in the country.` },
          ],
        },

        {
          id: `l03-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Leaders Are CHOSEN by the People`,
          paragraphs: [
            `Here's something amazing about many countries — the leaders are CHOSEN by the PEOPLE.`,
            `In the United States and many other countries, this is called DEMOCRACY. Adults VOTE in ELECTIONS. They look at people running for office — mayors, governors, presidents — and they choose who they think will do the best job. The person with the most votes WINS and becomes a leader. The people get to DECIDE who leads them. This is one of the most important ideas in social studies. Not all countries work this way — but many do. And the people who VOTE have a real voice in choosing their government.`,
          ],
          image: `/explorer-assets/social-studies/l03-s3-voting.webp`,
          imageCaption: `In democracies, PEOPLE VOTE to choose leaders. Mayors, governors, presidents — all chosen by the people.`,
          vocab: [
            { word: `democracy`,      definition: `When the PEOPLE choose their leaders. DEMOCRACY gives people a voice.`,
              audioPrompt: `Democracy, {name}, is when the people choose their leaders. The word comes from ancient Greek and means 'power of the people.' In a democracy, adults vote in elections to pick who they want to lead. The leader with the most votes wins. Many countries have democracies. Not all do — but the idea of people choosing their leaders is one of the most important in modern history.` },
            { word: `vote`,           definition: `To CHOOSE in an election. ADULTS VOTE for the leaders they want.`,
              audioPrompt: `To vote, {name}, is to choose in an election. Adults vote for the leaders they want. They go to a special place called a polling place, or sometimes they vote by mail. They make a choice. Their vote counts as one. Every vote matters. When millions of votes are added up, that's how leaders are chosen in a democracy. Voting is a really important right.` },
            { word: `election`,       definition: `The PROCESS of voting for leaders. ELECTIONS happen on special days.`,
              audioPrompt: `An election, {name}, is the process of voting for leaders. Elections happen on special days — sometimes once every 2 or 4 years. People who are running for office (called candidates) tell voters what they would do if elected. Then voters choose. The candidate with the most votes wins. Elections are how democracies pick their leaders.` },
          ],
        },

        {
          id: `l03-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Government Job 1: Make Laws`,
          paragraphs: [
            `Government has THREE main jobs. The first is MAKING LAWS.`,
            `Last lesson, you learned laws are special rules for big communities. Now you know who MAKES those laws — government leaders. They sit in big rooms (like a Congress or Parliament), talk about problems, and decide what new laws are needed. They argue. They listen. They vote on each new law. Sometimes they agree quickly. Sometimes they take years. Making laws is really important — and really hard. The laws they make affect millions of people. Good leaders take this job seriously.`,
          ],
          image: `/explorer-assets/social-studies/l03-s4-make-laws.webp`,
          imageCaption: `Government Job 1: MAKE LAWS. Leaders meet, discuss, argue, vote on new laws to help the community.`,
          vocab: [
            { word: `make laws`,      definition: `To CREATE new rules for the community. Government leaders MAKE LAWS.`,
              audioPrompt: `To make laws, {name}, is to create new rules for the community. Government leaders make laws. They listen to problems people face. They discuss solutions. They write laws to address those problems. Then they vote on them. Making good laws takes time. Some laws are simple. Others are complicated. All of them affect many people.` },
            { word: `discuss`,        definition: `To TALK about something carefully. Leaders DISCUSS before they decide.`,
              audioPrompt: `To discuss, {name}, is to talk about something carefully. Leaders discuss before they decide. They look at different sides of an issue. They listen to different opinions. They consider what's best for the community. Discussion is important — leaders shouldn't just decide quickly. The best decisions usually come after careful talking and thinking.` },
            { word: `Congress`,       definition: `A LARGE group of leaders who make laws together. In the US, the CONGRESS makes laws.`,
              audioPrompt: `Congress, {name}, is a large group of leaders who make laws together. In the US, Congress is made of two parts — the Senate and the House of Representatives. They meet in Washington DC. They discuss laws. They vote. Other countries have similar groups with different names — Parliament, Diet, National Assembly. Same idea: many leaders working together to make laws.` },
          ],
        },

        {
          id: `l03-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Government Job 2: Provide Services`,
          paragraphs: [
            `The second job of government — PROVIDE SERVICES. Things the community needs that no one person could do alone.`,
            `Some services governments provide — POLICE (keep us safe), FIREFIGHTERS (help with fires and emergencies), TEACHERS (run public schools), TRASH COLLECTION (keep cities clean), PARKS (places to play), LIBRARIES (free books and help), ROADS (places to drive), STREETLIGHTS, WATER SYSTEMS, and much more. Governments use money called TAXES (paid by adults) to provide these services. Without government services, communities couldn't run. So even though paying taxes might not be fun, the services they provide help everyone.`,
          ],
          image: `/explorer-assets/social-studies/l03-s5-services.webp`,
          imageCaption: `Government Job 2: PROVIDE SERVICES. Police, firefighters, schools, parks, roads, libraries. Paid for by taxes.`,
          vocab: [
            { word: `service`,        definition: `Something HELPFUL the government does for the community. Schools and parks are SERVICES.`,
              audioPrompt: `A service, {name}, is something helpful the government does for the community. Schools, parks, libraries, fire departments, police, trash collection, water systems, roads — all government services. They help everyone in the community. Single individuals couldn't run schools alone or build roads alone. So we share the work through government.` },
            { word: `taxes`,          definition: `MONEY that adults pay to government. TAXES PAY for services like schools and roads.`,
              audioPrompt: `Taxes, {name}, are money that adults pay to government. Taxes pay for services like schools, roads, libraries, parks, and police. Every adult pays some kind of tax. The money goes to the government, which then uses it to run all those services. Without taxes, government couldn't run. Even though paying taxes isn't fun, the services they pay for help everyone.` },
            { word: `public`,         definition: `Belonging to or used by EVERYONE. PUBLIC SCHOOLS are free for everyone.`,
              audioPrompt: `Public, {name}, means belonging to or used by everyone. Public schools are free for every child. Public parks are open for everyone to enjoy. Public libraries let anyone borrow books. These are services that anyone in the community can use. They're paid for by taxes and run by the government. They make sure everyone — rich or poor — has access to important things.` },
          ],
        },

        {
          id: `l03-mag-6`,
          type: `magazine`,
          section: 6,
          headline: `Government Job 3: Protect People`,
          paragraphs: [
            `The third job — PROTECT THE PEOPLE. Keep the community SAFE.`,
            `Governments protect people in many ways. POLICE protect us from crime. FIREFIGHTERS protect us from fires. MILITARY protects the whole country from danger. JUDGES make sure everyone gets a fair trial. INSPECTORS make sure food and buildings are safe. EMERGENCY workers help in natural disasters. Government has the responsibility — and the power — to KEEP PEOPLE SAFE. This isn't always easy. But it's one of the most important things government does. Good government uses this power CAREFULLY and FAIRLY — to help everyone, not hurt anyone.`,
          ],
          image: `/explorer-assets/social-studies/l03-s6-democracy.webp`,
          imageCaption: `Government Job 3: PROTECT PEOPLE. Police, firefighters, military, judges, inspectors. Keep community safe.`,
          vocab: [
            { word: `protect`,        definition: `To KEEP SAFE from harm. Government PROTECTS the people.`,
              audioPrompt: `To protect, {name}, is to keep safe from harm. Government protects the people. Police protect us from crime. Firefighters from fires. Military from danger to the country. Judges make sure people get fair treatment. Government has both the responsibility and the power to protect us. Good governments use this carefully — to help, not hurt.` },
            { word: `safe`,           definition: `Free from HARM. Government works to keep communities SAFE.`,
              audioPrompt: `Safe, {name}, means free from harm. Government works to keep communities safe. Through laws. Through police. Through fire departments. Through emergency services. Through health inspections. Through many things. Safety is one of the biggest reasons we have government. People can't always protect themselves alone. Communities work together — through government — to be safer.` },
            { word: `fairly`,         definition: `Treating people EQUALLY and JUSTLY. Government should use power FAIRLY.`,
              audioPrompt: `Fairly, {name}, means treating people equally and justly. Government should use power fairly. Not picking favorites. Not being mean to some groups. Not letting some people break rules while others can't. Fairness is super important in government. When governments aren't fair, people get upset. When they are fair, communities trust them and work together better.` },
          ],
        },

        {
          id: `l03-game`,
          type: `interactive`,
          format: `drag-match`,
          guideText: `Let's see what you remember, {name}.`,
          buckets: [
            { id: `fact`, label: `✅ Yes, that's true!`, color: `#34D399` },
            { id: `myth`, label: `❌ No way!`,         color: `#F87171` },
          ],
          items: [
            { id: `l03-g1`, image: `l03-game-1.webp`, label: `Government MAKES LAWS to keep people safe and treated fairly.`,
              matchPhrase: `Yes! Making laws is one of government's main jobs. Leaders meet, discuss problems, write new laws, and vote on them. The laws protect everyone in the community.`,
              correctMatch: `fact` },
            { id: `l03-g2`, image: `l03-game-2.webp`, label: `In a DEMOCRACY, PEOPLE VOTE to choose their leaders.`,
              matchPhrase: `True! Democracy means power belongs to the people. Adults vote in elections to choose mayors, governors, presidents. The leader with the most votes wins. The people have a real voice.`,
              correctMatch: `fact` },
            { id: `l03-g3`, image: `l03-game-3.webp`, label: `ONE PERSON alone decides every law and rule for the whole country — no help needed.`,
              matchPhrase: `Not at all! Government has many leaders working together. Even presidents work with Congress, advisors, and citizens. Decisions are too big for one person alone. That's why we have governments with many people.`,
              correctMatch: `myth` },
            { id: `l03-g4`, image: `l03-game-4.webp`, label: `Government does ABSOLUTELY NOTHING for anyone — no services, no help, no protection.`,
              matchPhrase: `Definitely not! Governments do tons. They run schools, parks, libraries, fire departments, police, roads, water systems. They protect people. They provide services everyone uses every day.`,
              correctMatch: `myth` },
          ],
        },

        {
          id: `l03-quiz`,
          type: `quiz`,
          guideText: `Let's see what you remember, {name}.`,
          questions: [
            { id: `l03-q1`, format: `multiple-choice`,
              question: `What is GOVERNMENT?`,
              options: [`A type of food`, `The GROUP of leaders who make decisions for a community`, `Only one person`, `A type of building`],
              correctIndex: 1,
              explanation: `Government is the group of leaders who make decisions for a community. They make laws, provide services, and protect people. Every city, state, and country has a government.` },
            { id: `l03-q2`, format: `multiple-choice`,
              question: `What are the THREE LEVELS of government?`,
              options: [`Just one level`, `LOCAL (city), STATE, and NATIONAL (whole country)`, `Two levels only`, `A million levels`],
              correctIndex: 1,
              explanation: `Three levels! LOCAL government runs your city/town (mayor). STATE government runs your whole state (governor). NATIONAL government runs the whole country (president or PM). Each handles different things.` },
            { id: `l03-q3`, format: `multiple-choice`,
              question: `What is a DEMOCRACY?`,
              options: [`When one person decides everything`, `When the PEOPLE VOTE to choose their leaders`, `A type of pet`, `A type of dance`],
              correctIndex: 1,
              explanation: `Democracy = the people choose their leaders. Adults vote in elections. The leader with the most votes wins. Many countries are democracies, including the US.` },
            { id: `l03-q4`, format: `true-false`,
              question: `Government provides SERVICES like schools, police, firefighters, parks, and libraries.`,
              correctAnswer: true,
              explanation: `True! Government provides many services no one person could do alone. Schools, police, firefighters, parks, libraries, roads, water systems. Paid for by taxes that adults pay.` },
            { id: `l03-q5`, format: `fill-blank`,
              question: `Adults pay ___ to the government, which uses the money to provide services like schools and roads.`,
              options: [`taxes`, `candy`, `letters`, `videos`],
              correctIndex: 0,
              explanation: `Taxes! Adults pay taxes to government. Taxes pay for schools, roads, police, parks — all the services that help the community. Without taxes, government couldn't run.` },
            { id: `l03-q6`, format: `multiple-choice`,
              question: `What are the THREE main JOBS of government?`,
              options: [`Cooking, singing, dancing`, `MAKE LAWS, PROVIDE SERVICES, and PROTECT PEOPLE`, `Reading, writing, math`, `Only one job`],
              correctIndex: 1,
              explanation: `Three big jobs! Make laws. Provide services (schools, parks, etc.). Protect people (police, firefighters, military). All three together keep communities running well.` },
          ],
        },

        {
          id: `l03-realworld`,
          type: `real-world`,
          guideText: `Here's something cool, {name}. Different countries have DIFFERENT kinds of government. Some are DEMOCRACIES (people vote). Some are MONARCHIES (a king or queen leads, sometimes alongside an elected government). Some have a Parliament. Some have a Congress. Some elect their president directly. Others have the parliament choose the prime minister. There are many ways to organize a government. Over thousands of years, humans have tried different systems. Each has strengths and weaknesses. People are still figuring out the best way to govern fairly. That's part of the long human story.`,
          familyAdventure: `Have a FAMILY VOTE on something together. Pick something fun — what to have for dinner, what movie to watch, where to go on a weekend outing. Make sure everyone gets a voice. Count the votes. The majority wins! Talk about how this is similar to how big communities make decisions. Notice — sometimes you win, sometimes you don't. That's part of democracy.`,
          creativePrompt: `If YOU were leader of your community, what's ONE thing you'd do to make it better? Draw a picture of you as the leader. Show what you'd change or improve. Maybe more parks. Better schools. Help for animals. Cleaner streets. Free libraries. Whatever you'd choose. Write your idea at the bottom. Leaders started as kids with ideas — just like you.`,
        },

        {
          id: `l03-celebration`,
          type: `celebration`,
          message: `Well done, {name}. You now understand GOVERNMENT. It's the group of leaders who make decisions for a community. There are THREE LEVELS — local, state, national. In a DEMOCRACY, the PEOPLE choose their leaders by VOTING. Government has THREE BIG JOBS — make laws, provide services, and protect people. Now you know how communities are led. That's powerful knowledge. — Atlas 🐻`,
          badge: `government-explorer`,
          badgeName: `Government Explorer`,
          xpEarned: 50,
        },

      ],
    },
  ],
};

export default SOCIAL_STUDIES_L03;

// ─── Dev asset check ─────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const mags  = SOCIAL_STUDIES_L03.lessons[0].screens.filter(s => s.type === 'magazine').length;
  const game  = SOCIAL_STUDIES_L03.lessons[0].screens.find(s => s.type === 'interactive')?.items?.length ?? 0;
  const quiz  = SOCIAL_STUDIES_L03.lessons[0].screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  console.log(`[LESSON-SOCIAL-STUDIES-L03] Loaded: "Government" with ${mags} magazine sections, ${game} game pairs, ${quiz} quiz questions`);
}
