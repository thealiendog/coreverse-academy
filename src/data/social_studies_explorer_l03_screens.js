// ─────────────────────────────────────────────────────────────────────────────
// SOCIAL STUDIES  |  L03 — Government: Who Makes Decisions?
// Age band : explorers (6–8)   Guide: atlas
// Standards: C3 D2.Civ.4.K-2 / D2.Civ.6.K-2
// CALIBRATED: Explorer spec v1 (May 2026)
// ─────────────────────────────────────────────────────────────────────────────

const SOCIAL_STUDIES_L03 = {
  ageBand: `explorers`,
  subjectId: `social_studies`,
  guide: `atlas`,

  lessons: [
    {
      id: `social-studies-6-8-03`,
      title: `Government: Who Makes Decisions?`,
      duration: 12,
      xpReward: 50,
      badge: `government-explorer`,
      badgeName: `Government Explorer`,

      screens: [
        {
          id: `l03-welcome`,
          type: `welcome`,
          guideText: `Hi {name}. Atlas here. Last time we learned about laws. But who makes laws? Today we meet the government. That is the group of leaders for our community. Let's go.`,
          headline: `Government: Who Makes Decisions?`,
          subtitle: `The leaders who run our communities`,
          visual: `/explorer-assets/social-studies/l03-welcome.webp`,
        },

        {
          id: `l03-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Who Decides Things?`,
          paragraphs: [
            `At home, your parents decide things. At school, the teacher and principal decide. But who decides for a whole city? Or a whole country?`,
            `Big communities need leaders. The group of leaders is called the government. They make the big decisions for everyone.`,
          ],
          image: `/explorer-assets/social-studies/l03-s1-decisions.webp`,
          imageCaption: `Government is the group of leaders for a big community.`,
          vocab: [
            { word: `government`, definition: `The group of leaders for a community.`,
              audioPrompt: `The government is the group of leaders, {name}. They make decisions for the whole community. They make laws. They build roads. They run parks. Every city and country has a government.` },
            { word: `decide`, definition: `To choose what to do.`,
              audioPrompt: `To decide means to choose, {name}. Government has to decide many big things. Where to build schools. What new laws to make. Big decisions need many leaders working together.` },
            { word: `leader`, definition: `A person who guides a group.`,
              audioPrompt: `A leader is a person who guides a group, {name}. The government has many leaders. They work together. They listen to people. They make plans for the community.` },
          ],
        },

        {
          id: `l03-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Three Levels of Government`,
          paragraphs: [
            `Government has three levels. Each one runs a different size of community.`,
            `Local government runs your city or town. It has a mayor. State government runs your whole state. It has a governor. National government runs the whole country. It has a president.`,
          ],
          image: `/explorer-assets/social-studies/l03-s2-levels.webp`,
          imageCaption: `Three levels: local, state, and national government.`,
          vocab: [
            { word: `local`, definition: `Close by. Local government runs your city.`,
              audioPrompt: `Local means close by, {name}. Local government runs your city or town. The leader is the mayor. Local government takes care of parks, trash, and the library near your home.` },
            { word: `state`, definition: `A part of a country with its own leader.`,
              audioPrompt: `A state is a part of a country, {name}. California is a state. So is Texas. Each state has its own government and its own leader called the governor.` },
            { word: `president`, definition: `The leader of a whole country.`,
              audioPrompt: `A president is the leader of a country, {name}. In the United States, the president lives in the White House. The president helps make laws for everyone in the country.` },
          ],
        },

        {
          id: `l03-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `People Choose Leaders`,
          paragraphs: [
            `In our country, the people choose the leaders. This is called democracy. Adults vote for who they want to lead.`,
            `When you grow up, you can vote too. The person with the most votes wins. Then they get to be the leader. The people get to decide.`,
          ],
          image: `/explorer-assets/social-studies/l03-s3-voting.webp`,
          imageCaption: `In a democracy, people vote to choose leaders.`,
          vocab: [
            { word: `democracy`, definition: `When people vote to choose their leaders.`,
              audioPrompt: `Democracy means people choose their leaders, {name}. Adults vote in an election. The leader with the most votes wins. Many countries have democracy. It gives the people a voice.` },
            { word: `vote`, definition: `To pick someone in an election.`,
              audioPrompt: `To vote means to pick someone, {name}. Adults vote for the leaders they want. Each vote counts as one. When you turn 18, you can vote too.` },
            { word: `election`, definition: `The time when people vote for leaders.`,
              audioPrompt: `An election is when people vote, {name}. Elections happen on special days. People who want to be leaders tell voters their ideas. Then voters pick the best one.` },
          ],
        },

        {
          id: `l03-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Government Makes Laws`,
          paragraphs: [
            `One big job of government is making laws. Leaders meet together. They talk about problems. They write new laws to help.`,
            `Then they vote on each law. Sometimes they agree. Sometimes they argue. Good leaders take their time because laws are important.`,
          ],
          image: `/explorer-assets/social-studies/l03-s4-make-laws.webp`,
          imageCaption: `Government leaders make laws to help the community.`,
          vocab: [
            { word: `make laws`, definition: `To create new rules for the community.`,
              audioPrompt: `Make laws means to create new rules, {name}. Leaders write laws. They vote on them. Good laws help people stay safe and treat each other fairly.` },
            { word: `meet`, definition: `To come together to talk.`,
              audioPrompt: `To meet means to come together to talk, {name}. Leaders meet to make decisions. They listen to each other. They share ideas. Then they vote.` },
            { word: `because`, definition: `For this reason. "Because" tells us why.`,
              audioPrompt: `Because is a word that tells us why, {name}. We have laws because people need to be safe. We vote because we want a voice. Because helps us explain.` },
          ],
        },

        {
          id: `l03-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Government Helps Us`,
          paragraphs: [
            `Government does more than make laws. It also gives us services. Things we all need but cannot make alone.`,
            `Government runs schools. It pays for police and firefighters. It builds roads and parks. It keeps the library open. Adults pay taxes to help with all this.`,
          ],
          image: `/explorer-assets/social-studies/l03-s5-services.webp`,
          imageCaption: `Government runs schools, police, parks, and roads.`,
          vocab: [
            { word: `service`, definition: `Something helpful the government gives to everyone.`,
              audioPrompt: `A service is something helpful, {name}. Schools, parks, roads, police, and firefighters are all services. Government runs them. We all use them.` },
            { word: `taxes`, definition: `Money adults pay to the government.`,
              audioPrompt: `Taxes are money adults pay, {name}. The money goes to the government. The government uses it to pay for schools, roads, and parks. Taxes help everyone.` },
            { word: `public`, definition: `For everyone. Public parks are open to everyone.`,
              audioPrompt: `Public means for everyone, {name}. Public schools, public parks, public libraries. Anyone can use them. They are paid for with taxes. They are for all of us.` },
          ],
        },

        {
          id: `l03-mag-6`,
          type: `magazine`,
          section: 6,
          headline: `Government Keeps Us Safe`,
          paragraphs: [
            `The third big job of government is keeping us safe. Police protect us from crime. Firefighters help in fires. Doctors at clinics help us when we are sick.`,
            `Government also helps in big emergencies. Like floods or storms. Keeping people safe is one of the most important things government does.`,
          ],
          image: `/explorer-assets/social-studies/l03-s6-democracy.webp`,
          imageCaption: `Government keeps us safe through police, firefighters, and helpers.`,
          vocab: [
            { word: `protect`, definition: `To keep safe from harm.`,
              audioPrompt: `To protect means to keep safe, {name}. Government protects us. Police protect us from crime. Firefighters protect us from fire. Many people work to keep us safe.` },
            { word: `emergency`, definition: `A sudden problem that needs help fast.`,
              audioPrompt: `An emergency is a sudden problem, {name}. Like a fire. Or a flood. Government helps in emergencies. They send firefighters, doctors, and helpers. They get there fast.` },
            { word: `job`, definition: `Important work. Government has big jobs to do.`,
              audioPrompt: `A job is important work, {name}. Government has three big jobs. Make laws. Give services. Keep us safe. These jobs help every person in the community.` },
          ],
        },

        {
          id: `l03-game`,
          type: `interactive`,
          format: `drag-identify`,
          guideText: `Sort each thing by which level of government takes care of it, {name}.`,
          buckets: [
            { id: `local`,    label: `Local`,    color: `#F472B6` },
            { id: `state`,    label: `State`,    color: `#60A5FA` },
            { id: `national`, label: `National`, color: `#FBBF24` },
          ],
          items: [
            { id: `l03-g1`, image: `l03-game-1.webp`, label: `Your city park`,
              matchPhrase: `Yes! Local government runs your city park. The mayor takes care of it.`, correctMatch: `local` },
            { id: `l03-g2`, image: `l03-game-2.webp`, label: `Trash pickup at your house`,
              matchPhrase: `Right! Local government does trash pickup. That is a city job.`, correctMatch: `local` },
            { id: `l03-g3`, image: `l03-game-3.webp`, label: `Your neighborhood library`,
              matchPhrase: `Yes! Local government runs the library near you.`, correctMatch: `local` },
            { id: `l03-g4`, image: `l03-game-4.webp`, label: `State highway`,
              matchPhrase: `Right! State government takes care of big state roads.`, correctMatch: `state` },
            { id: `l03-g5`, image: `l03-game-5.webp`, label: `Big state park`,
              matchPhrase: `Yes! State parks are run by state government. They cover lots of land.`, correctMatch: `state` },
            { id: `l03-g6`, image: `l03-game-6.webp`, label: `Driver's license`,
              matchPhrase: `Right! State government gives out driver's licenses.`, correctMatch: `state` },
            { id: `l03-g7`, image: `l03-game-7.webp`, label: `The Army`,
              matchPhrase: `Yes! The Army is run by national government. It protects the whole country.`, correctMatch: `national` },
            { id: `l03-g8`, image: `l03-game-8.webp`, label: `Dollar bills`,
              matchPhrase: `Right! National government makes money for the whole country.`, correctMatch: `national` },
            { id: `l03-g9`, image: `l03-game-9.webp`, label: `The president`,
              matchPhrase: `Yes! The president is the national leader of the whole country.`, correctMatch: `national` },
          ],
        },

        {
          id: `l03-quiz`,
          type: `quiz`,
          guideText: `Let's see what you remember, {name}.`,
          questions: [
            { id: `l03-q1`, format: `multiple-choice`,
              question: `What is government?`,
              options: [`A type of car`, `The group of leaders for a community`, `Only one person`, `A kind of school`],
              correctIndex: 1,
              explanation: `Government is the group of leaders for a community. They make laws, give services, and keep us safe.` },
            { id: `l03-q2`, format: `multiple-choice`,
              question: `What are the three levels of government?`,
              options: [`Only one level`, `Local, state, and national`, `Just two`, `Way too many`],
              correctIndex: 1,
              explanation: `Three levels! Local runs your city. State runs your state. National runs the country.` },
            { id: `l03-q3`, format: `multiple-choice`,
              question: `What is democracy?`,
              options: [`When one person decides everything`, `When people vote to pick their leaders`, `A kind of food`, `A game`],
              correctIndex: 1,
              explanation: `Democracy is when people vote for their leaders. Many countries use democracy.` },
            { id: `l03-q4`, format: `true-false`,
              question: `Government gives us services like schools, parks, and libraries.`,
              correctAnswer: true,
              explanation: `True! These are all government services. They are paid for by taxes.` },
            { id: `l03-q5`, format: `fill-blank`,
              question: `Adults pay ___ to the government to help pay for schools and roads.`,
              options: [`taxes`, `cookies`, `letters`, `toys`],
              correctIndex: 0,
              explanation: `Taxes! Adults pay taxes. The government uses the money to run services we all use.` },
            { id: `l03-q6`, format: `multiple-choice`,
              question: `What are the three big jobs of government?`,
              options: [`Cook, clean, sleep`, `Make laws, give services, keep us safe`, `Only make laws`, `Run stores`],
              correctIndex: 1,
              explanation: `Three jobs! Make laws. Give services like schools and parks. Keep people safe.` },
          ],
        },

        {
          id: `l03-realworld`,
          type: `real-world`,
          guideText: `Different countries have different kinds of government. Some have a king or queen. Some have a president. Some have a prime minister. People are always working to make government better and more fair.`,
          familyAdventure: `Have a family vote tonight. Pick something fun to choose together. Maybe dinner. Maybe a movie. Each person votes. The most votes wins. That is how democracy works.`,
          creativePrompt: {
            intro: `Imagine you are the leader of your community. What would you do to make it better? Draw yourself as the leader.`,
            floor: `Write 3 sentences about your leader self. Use the sentence starters below.`,
            stretch: `Write 5 sentences. Add what you would change first.`,
            frames: [
              `I am the leader of ___.`,
              `My first job is ___.`,
              `I would help my community by ___.`,
              `I would make sure everyone has ___.`,
              `People would be happy because ___.`,
            ],
          },
        },

        {
          id: `l03-celebration`,
          type: `celebration`,
          message: `Great work, {name}! You learned about government. It is the group of leaders for a community. There are three levels: local, state, and national. People vote to pick leaders. Government makes laws, gives services, and keeps us safe. See you next lesson. Atlas the Bear.`,
          badge: `government-explorer`,
          badgeName: `Government Explorer`,
          xpEarned: 50,
        },
      ],
    },
  ],
};

export default SOCIAL_STUDIES_L03;

// ─── Dev asset check ──────────────────────────────────────────────────────────
if (import.meta.env?.DEV) {
  const mags = SOCIAL_STUDIES_L03.lessons[0].screens.filter(s => s.type === 'magazine').length;
  const game = SOCIAL_STUDIES_L03.lessons[0].screens.find(s => s.type === 'interactive')?.items?.length ?? 0;
  const quiz = SOCIAL_STUDIES_L03.lessons[0].screens.find(s => s.type === 'quiz')?.questions?.length ?? 0;
  console.log(`[LESSON-SOCIAL-STUDIES-L03] Loaded: "Government" with ${mags} magazine sections, ${game} game items, ${quiz} quiz questions`);
}
