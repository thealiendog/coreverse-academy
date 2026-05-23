// ─────────────────────────────────────────────────────────────────────────────
// SOCIAL STUDIES UE  |  L06 — Civic Participation and Voting
// Age band : upper_explorers (9–10)   Guide: atlas
// Standards: C3 D2.Civ.2.3-5 / D2.Civ.6.3-5 / D2.Civ.9.3-5
// CALIBRATED: UE spec v1.1 + game toolkit v1
// Game format: branching-decision (Election Day: you're 18)
// ─────────────────────────────────────────────────────────────────────────────

const SOCIAL_STUDIES_UE_L06 = {
  ageBand: `upper_explorers`,
  subjectId: `social_studies`,
  guide: `atlas`,

  lessons: [
    {
      id: `social-studies-9-10-06`,
      title: `Civic Participation and Voting`,
      duration: 22,
      xpReward: 75,
      badge: `engaged-citizen`,
      badgeName: `Engaged Citizen`,

      screens: [
        {
          id: `l06-welcome`,
          type: `welcome`,
          guideText: `Hey {name}. Last lesson we looked at the levels of government. Today we look at YOU in that system. How do regular citizens actually shape what government does? Voting is the biggest tool, but it's far from the only one. By the end of this lesson, you'll know more ways to participate as a citizen than most adults — and you'll have walked through what an actual Election Day looks like.`,
          headline: `Civic Participation and Voting`,
          subtitle: `How citizens actually shape their government`,
          visual: `/ue-assets/social-studies/l06-welcome.webp`,
        },

        {
          id: `l06-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `What Civic Participation Means`,
          paragraphs: [
            `Civic participation is the active involvement of citizens in their government and community. It's much bigger than just voting. It includes everything from paying attention to local news, to volunteering, to contacting your representatives, to running for office yourself someday.`,
            `Here's a useful way to think about it. Citizens in a democracy hire and fire their leaders. Voting is the main hiring decision. But between elections, there are dozens of other ways to push government in one direction or another. People who only vote, and only every four years, leave most of their power unused.`,
            `Strong democracies depend on citizens who participate beyond voting. Weak democracies — and dictatorships — survive by getting citizens to disengage and feel powerless. Whichever way it goes is partly your choice.`,
          ],
          image: `/ue-assets/social-studies/l06-s1-civic-participation.webp`,
          imageCaption: `Voting is the biggest tool. But it's not the only one.`,
          vocab: [
            { word: `civic participation`,
              definition: `Active involvement of citizens in their government and community — voting, volunteering, contacting officials, and more.`,
              audioPrompt: `Civic participation is active involvement in your government and community, {name}. It includes voting, but also things like paying attention to local news, contacting representatives, volunteering, attending public meetings, peacefully protesting, and even just having informed conversations with your friends and family. Strong democracies depend on participation. Citizens who only vote and never engage in any other way leave most of their power unused. The good news — you can start participating long before you can vote.` },
            { word: `democracy`,
              definition: `A system of government in which citizens hold power and choose their leaders through elections.`,
              audioPrompt: `Democracy is a system where citizens hold the real power, {name}. They vote for leaders, participate in lawmaking, and can hold officials accountable. Democracies vary — some have stronger participation than others. But the underlying idea is always the same: the government draws its power from the citizens, not the other way around. When citizens stop participating, democracies weaken. When citizens engage actively, democracies become stronger.` },
          ],
        },

        {
          id: `l06-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Who Has the Right to Vote`,
          paragraphs: [
            `In the early United States, voting was limited. Originally, in most states, only white men who owned property could vote. That excluded most of the country. The story of voting rights in America is the story of expanding that circle over the past two centuries.`,
            `Three amendments did the heavy lifting. The 15th Amendment, ratified in eighteen seventy, said the right to vote couldn't be denied based on race. The 19th Amendment, ratified in nineteen twenty, gave women the right to vote nationwide. The 26th Amendment, ratified in nineteen seventy-one, lowered the voting age from 21 to 18, partly because young men were being drafted to fight in wars but couldn't vote on the leaders who sent them.`,
            `Even with these amendments, the actual right to vote was sometimes blocked in practice — through poll taxes, literacy tests, intimidation, and other barriers. The Voting Rights Act of nineteen sixty-five made many of those barriers illegal. The fight over voting rules continues today. Knowing how you got the right to vote helps you understand why it matters.`,
          ],
          image: `/ue-assets/social-studies/l06-s2-voting-rights.webp`,
          imageCaption: `15th, 19th, 26th Amendments. Plus the Voting Rights Act. The expanding circle.`,
          vocab: [
            { word: `voting rights`,
              definition: `The legal right of a citizen to vote in elections, protected by multiple amendments and laws.`,
              audioPrompt: `Voting rights are the legal protections that guarantee citizens can vote, {name}. In the US, three big amendments shape these rights — the 15th amendment protecting voting regardless of race, the 19th amendment giving women the right to vote, and the 26th amendment lowering the voting age to 18. The Voting Rights Act of nineteen sixty-five added stronger protections against barriers like poll taxes and literacy tests. Voting rights aren't just a paragraph in a document — they're the result of generations of people pushing for them.` },
            { word: `amendment`,
              definition: `A change or addition to the US Constitution, approved by Congress and the states.`,
              audioPrompt: `An amendment is a formal change to the Constitution, {name}. The US Constitution has been amended 27 times since it was written. Some of the most important amendments expanded who could vote — the 15th gave voting rights regardless of race, the 19th gave women the right to vote, and the 26th lowered the voting age to 18. Amendments are hard to pass on purpose — they require broad agreement across Congress and the states. That makes them rare but powerful.` },
          ],
        },

        {
          id: `l06-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `How Voting Actually Works`,
          paragraphs: [
            `When you turn 18, you become eligible to vote. But you can't just show up — you have to register first. Registering means signing up with your state so they know you're eligible. Most states let you register online. Some let you register on Election Day itself.`,
            `Elections happen at many levels. National elections — for President, US Senator, US Representative — get the most attention. State elections pick governors and state legislators. Local elections pick mayors, city councils, and school boards. Special elections happen for specific issues. Most adults only vote in the national elections every four years, which is a wasted opportunity — the local ones affect their daily lives more.`,
            `There are two main types of elections. A primary is when each political party chooses its candidate. A general is when all the chosen candidates run against each other for the actual office. To have full power as a voter, you have to participate in both. The primary often matters more than the general — that's where the real choice gets made.`,
          ],
          image: `/ue-assets/social-studies/l06-s3-how-voting-works.webp`,
          imageCaption: `Register. Primary. General. National, state, local.`,
          vocab: [
            { word: `primary election`,
              definition: `An election in which each political party chooses its candidate for a later general election.`,
              audioPrompt: `A primary election is one where each political party picks its candidate to run in the main election later, {name}. So if there are multiple Democrats who want to run for President, voters in the Democratic primary pick which one of them will actually be on the November ballot. Same for Republicans. Most adults skip primaries, which is a mistake — the primary often decides more than the general election. Who's even on the ballot in the general comes from the primary.` },
            { word: `general election`,
              definition: `The main election in which all parties' chosen candidates compete for the actual office.`,
              audioPrompt: `A general election is the main event — the one where candidates from different parties compete for the actual job, {name}. In the US, the big general election for President happens every four years in November. But there are also general elections for US Senate, House, governor, and local offices every two years. The general election gets the most media attention, but it's only half the picture. Who runs in the general was decided in the primary.` },
          ],
        },

        {
          id: `l06-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Other Ways to Participate`,
          paragraphs: [
            `Voting matters. But it's not the only tool you have. Once you understand the full toolkit, you realize you have power well beyond Election Day.`,
            `You can contact your representatives. Their staff actually reads letters and emails from constituents, and the volume of messages on an issue can shift their vote. You can attend public meetings at the city or school board level — many decisions get made in front of empty rooms because almost nobody shows up. You can volunteer for campaigns or causes you care about. You can serve on a jury when called — that's how the justice system works. You can peacefully protest. You can write letters to local newspapers. When you're old enough, you can run for office.`,
            `Here's the secret most people miss: the LESS popular a form of participation is, the more powerful each person who does it becomes. Showing up to a school board meeting where only 8 other people show up gives you more influence than tweeting about a presidential election where 150 million people are voting. Participation works on math, and the math favors people who show up.`,
          ],
          image: `/ue-assets/social-studies/l06-s4-other-ways.webp`,
          imageCaption: `Contact reps. Show up. Volunteer. Run for office. The full toolkit.`,
          vocab: [
            { word: `constituent`,
              definition: `A person who lives in the area an elected official represents.`,
              audioPrompt: `A constituent is a person who lives in the area an elected official represents, {name}. If you live in California, your two US Senators and your US Representative consider you a constituent. So does your governor, your state senator, your state representative, and your mayor. Elected officials are SUPPOSED to listen to their constituents. They have staff whose entire job is to respond to constituent messages. Most people never write to their representatives — which means the ones who DO write have outsized influence.` },
            { word: `representative`,
              definition: `An elected official who speaks and acts on behalf of the people who voted them into office.`,
              audioPrompt: `A representative is an elected official who is supposed to act on behalf of their constituents, {name}. In the US, you have many representatives at different levels — US Senators and House Representatives at the federal level, state legislators at the state level, and city council members at the local level. Representatives have staff whose job is to respond to constituent messages. Most people never contact their representatives — which means those who do have outsized influence over what gets done.` },
          ],
        },

        // ── BRANCHING DECISION GAME — Election Day: You're 18 ─────────────────
        {
          id: `l06-game`,
          type: `interactive`,
          format: `branching-decision`,
          guideText: `Time jump, {name}. It's eight years from now. You just turned 18. Your first major election is happening this year. You'll make four big decisions about how to engage. After each one, I'll show you what the impact actually is — based on real research on voter behavior and civic participation.`,
          scenarioTitle: `Election Day: You're 18`,
          decisions: [
            {
              id: `d1`,
              situation: `It's six months before Election Day. You haven't registered to vote yet. What do you do?`,
              context: `Most states require you to register before you can vote. Some let you register on Election Day itself, but most don't.`,
              options: [
                {
                  id: `a`,
                  label: `Register today — get it done`,
                  preview: `You're locked in. Whatever happens, you can vote.`,
                },
                {
                  id: `b`,
                  label: `Wait — registration seems annoying and I'll figure it out closer to the day`,
                  preview: `The deadline often sneaks up. Many states cut off registration 2-4 weeks before.`,
                },
                {
                  id: `c`,
                  label: `Skip it — voting isn't that important`,
                  preview: `You join the half of young Americans who don't vote. The half who do are deciding for you.`,
                },
              ],
              historicalChoice: `a`,
              explanation: `Option A is the right move. Registering takes about five minutes online in most states. Many young people miss elections not because they don't want to vote, but because they missed the registration deadline. Getting it done early removes that risk entirely.`,
            },
            {
              id: `d2`,
              situation: `The primary election is happening. You aren't sure about the candidates. Several states have low primary turnout — usually under 20 percent of registered voters show up. What do you do?`,
              context: `Primaries pick which candidates appear on the November ballot. Skipping a primary means letting other people decide your choices for November.`,
              options: [
                {
                  id: `a`,
                  label: `Spend a couple hours researching, then vote in the primary`,
                  preview: `You're shaping who even gets to run in November.`,
                },
                {
                  id: `b`,
                  label: `Skip the primary, vote only in the general election in November`,
                  preview: `You vote, but you're picking from candidates other people chose for you.`,
                },
                {
                  id: `c`,
                  label: `Skip both primary AND general`,
                  preview: `You're handing your power to other voters. They will use it.`,
                },
              ],
              historicalChoice: `a`,
              explanation: `Option A. Primaries often have lower turnout than general elections, which means each primary vote counts MORE. The candidates picked in the primary are the only ones you can choose between in November. People who skip primaries hand that filtering decision to others. The smart move is to participate in both.`,
            },
            {
              id: `d3`,
              situation: `Election Day arrives. You see the lines at your polling place look long. You have a busy day at work. What do you do?`,
              context: `Many states give workers protected time off to vote. Some allow early voting or mail-in ballots so you don't need Election Day at all.`,
              options: [
                {
                  id: `a`,
                  label: `Show up at a less busy time, or use early voting if your state allows it`,
                  preview: `You vote. The line problem solved.`,
                },
                {
                  id: `b`,
                  label: `Try to fit it in. If the line is too long, skip it.`,
                  preview: `You'll vote sometimes and not others. Risky strategy.`,
                },
                {
                  id: `c`,
                  label: `Decide you're too busy and skip it`,
                  preview: `Other people are deciding for you again. They are choosing your leaders.`,
                },
              ],
              historicalChoice: `a`,
              explanation: `Option A. Many states have early voting (weeks before Election Day), mail-in voting, or protected time off. Even just showing up during a slower hour usually works. People who skip because "the line was too long" are giving up their power because of a 30-minute wait. Planning a little ahead avoids it entirely.`,
            },
            {
              id: `d4`,
              situation: `Between elections, what do you do as an engaged citizen?`,
              context: `Voting is the headline tool, but it only happens a few times a year at most. The other 360 days are where most influence actually happens — and most people do nothing.`,
              options: [
                {
                  id: `a`,
                  label: `Vote on Election Day. Otherwise tune out — politics is exhausting`,
                  preview: `This is what most adults actually do. It's also why most adults feel powerless.`,
                },
                {
                  id: `b`,
                  label: `Pay attention to local news, contact representatives on issues you care about, attend at least one public meeting a year`,
                  preview: `You're in the top 5 percent of citizens in terms of actual influence.`,
                },
                {
                  id: `c`,
                  label: `Vote in EVERY election (local too), show up to school board and city council meetings, volunteer on a campaign`,
                  preview: `You're now operating with real political power. Most people don't realize this is even an option.`,
                },
              ],
              historicalChoice: `c`,
              explanation: `Option C. Showing up to local meetings is where you get the most influence per minute spent. School board meetings often have fewer than 20 people in the audience. City councils sometimes have fewer than 50. When you show up, you matter. When you don't, decisions get made without your input. Most people pick option A and then complain about politics — without realizing they had options B and C all along.`,
            },
          ],
          completionMessage: `Walked you through the real choices, {name}. Notice the pattern? Almost every decision was about SHOWING UP — making the small effort consistently. The people who do that consistently shape government way more than the ones who don't. That's not a complicated principle. It's just one most adults never figure out.`,
        },

        {
          id: `l06-quiz`,
          type: `quiz`,
          guideText: `Quick test, {name}.`,
          questions: [
            { id: `l06-q1`, format: `multiple-choice`,
              question: `What does civic participation mean?`,
              options: [
                `Just voting in presidential elections`,
                `Active involvement in your government and community — voting, volunteering, contacting officials, and more`,
                `Working for the government`,
                `Reading the news`,
              ],
              correctIndex: 1,
              explanation: `Civic participation is much bigger than voting. It includes contacting reps, attending public meetings, volunteering, peaceful protest, jury duty, and eventually running for office.` },
            { id: `l06-q2`, format: `multiple-choice`,
              question: `Which amendment lowered the voting age to 18?`,
              options: [
                `15th Amendment`,
                `19th Amendment`,
                `26th Amendment`,
                `1st Amendment`,
              ],
              correctIndex: 2,
              explanation: `The 26th Amendment, ratified in nineteen seventy-one, lowered the voting age from 21 to 18. Many young people were being drafted into wars without being able to vote on the leaders sending them.` },
            { id: `l06-q3`, format: `multiple-choice`,
              question: `What's the difference between a primary and a general election?`,
              options: [
                `Primaries are for adults only`,
                `Primaries pick each party's candidate; the general is when those candidates run against each other for the actual office`,
                `There's no difference`,
                `Primaries happen only in primary schools`,
              ],
              correctIndex: 1,
              explanation: `Primary = parties pick their candidate. General = those candidates compete for the actual office. Both matter. Many people skip the primary and lose half their voting power.` },
            { id: `l06-q4`, format: `true-false`,
              question: `True or false: Local elections (mayor, school board) usually have HIGHER turnout than presidential elections.`,
              correctAnswer: false,
              explanation: `False. Local elections often have only 10-20 percent turnout, far below the 60 percent that presidential elections get. But local elections affect daily life more directly — which means lower turnout makes each vote count more.` },
            { id: `l06-q5`, format: `multiple-choice`,
              question: `What does the word "constituent" mean?`,
              options: [
                `A type of vote`,
                `A person who lives in the area an elected official represents`,
                `A constitutional amendment`,
                `A political party`,
              ],
              correctIndex: 1,
              explanation: `A constituent is a person who lives in the area an elected official represents. Officials have staff who read constituent messages — so contacting them really does matter.` },
            { id: `l06-q6`, format: `multiple-choice`,
              question: `Which of these is NOT a form of civic participation?`,
              options: [
                `Attending a public city council meeting`,
                `Writing your elected representatives about an issue`,
                `Watching TV by yourself`,
                `Volunteering for a campaign`,
              ],
              correctIndex: 2,
              explanation: `Watching TV by yourself isn't civic participation. The others all are — they involve engaging with your government or community.` },
            { id: `l06-q7`, format: `multiple-choice`,
              question: `Why do people who show up to local meetings have outsized influence?`,
              options: [
                `Because they're louder`,
                `Because so few people show up to local meetings, each person who does has a bigger share of the input`,
                `Because they bring snacks`,
                `Because they're paid to`,
              ],
              correctIndex: 1,
              explanation: `Local meetings often have small audiences — sometimes 10 or 20 people. When you're one of them, your input is a much bigger share than at a national election with millions of voters.` },
            { id: `l06-q8`, format: `multiple-choice`,
              question: `If you turn 18 in a few years and want to vote in your first election, what's the smartest first step?`,
              options: [
                `Show up on Election Day and figure it out`,
                `Register to vote well before the deadline`,
                `Wait until someone reminds you`,
                `Skip it the first time`,
              ],
              correctIndex: 1,
              explanation: `Registering early prevents missing a deadline. Many young people miss their first election not because they don't want to vote, but because they missed registration. Five minutes online saves it.` },
          ],
        },

        {
          id: `l06-reflection`,
          type: `reflection`,
          guideText: `One real minute, {name}. Pick a prompt.`,
          prompts: [
            { id: `r1`, text: `Which form of civic participation could you actually start doing now, before you can vote?` },
            { id: `r2`, text: `Why do you think so many people skip voting in local elections?` },
            { id: `r3`, text: `If you could vote in one election right now, what issue would matter most to you?` },
            { id: `r4`, text: `What surprised you most about how voting actually works?` },
          ],
        },

        {
          id: `l06-realworld`,
          type: `real-world`,
          guideText: `Right now, decisions are being made at all levels of government that will affect your life. Some of them are huge. Some are tiny. The people whose voices are heard are the ones who show up — at the ballot box, at public meetings, in emails to representatives, on community boards. The people who don't show up get represented anyway, just not by themselves. That's the system. The good news is that showing up is mostly free, mostly fast, and almost always available to anyone willing to do it.`,
          familyAdventure: `Together, find one current local issue being debated where you live — a new park, a road project, a school policy, anything. Each family member picks a side and writes a short paragraph explaining their position. Then together, look up who would actually make this decision. Could you contact them? What's the best way to weigh in? You don't have to actually send anything — but practice imagining it.`,
          creativePrompt: {
            intro: `Imagine it's 10 years from now. You're 19 or 20. You're already known in your community as a thoughtful person who shows up. Describe ONE form of civic participation you do regularly, why you started, and what difference it makes.`,
            floor: `Write at least 5 sentences. Use the sentence starters if helpful.`,
            stretch: `Write 8-10 sentences. Make it specific — describe a real meeting you attended, a real letter you wrote, a real cause you volunteered for.`,
            open: `Write as much as you want. Build out your future as a thoughtful citizen.`,
            frames: [
              `The form of participation I do regularly is ___.`,
              `I started because ___.`,
              `One specific time it made a difference was ___.`,
              `What I notice about most people who don't participate is ___.`,
              `Why I keep doing it even when it feels small is ___.`,
            ],
          },
        },

        {
          id: `l06-celebration`,
          type: `celebration`,
          message: `Solid work, {name}. You can now explain what civic participation means, name the amendments that expanded voting, describe how registration and primaries work, and list at least four ways to participate besides voting. Next lesson, we shift into economics — we look at how the US economy actually runs and why prices change. — Atlas.`,
          badge: `engaged-citizen`,
          badgeName: `Engaged Citizen`,
          xpEarned: 75,
        },
      ],
    },
  ],
};

export default SOCIAL_STUDIES_UE_L06;
