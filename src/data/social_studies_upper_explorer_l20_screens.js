// ─────────────────────────────────────────────────────────────────────────────
// SOCIAL STUDIES UE  |  L20 — Civic Responsibility (CAPSTONE)
// Age band : upper_explorers (9–10)   Guide: atlas
// Standards: C3 D2.Civ.2.3-5 / D2.Civ.6.3-5 / D2.Civ.9.3-5 / D2.Civ.14.3-5
// CALIBRATED: UE spec v1.1 + game toolkit v1
// Game format: branching-decision (Your Civic Life — choices across a lifetime)
// CAPSTONE TREATMENT: Elevated duration, 100 XP, capstone badge, full synthesis of L01-L19
// ─────────────────────────────────────────────────────────────────────────────

const SOCIAL_STUDIES_UE_L20 = {
  ageBand: `upper_explorers`,
  subjectId: `social_studies`,
  guide: `atlas`,

  lessons: [
    {
      id: `social-studies-9-10-20`,
      title: `Civic Responsibility (Capstone)`,
      duration: 28,
      xpReward: 100,
      badge: `social-studies-graduate`,
      badgeName: `Social Studies Graduate`,
      isCapstone: true,

      screens: [
        {
          id: `l20-welcome`,
          type: `welcome`,
          guideText: `Welcome to the final lesson, {name}. Twenty lessons ago, we started with one question — why does every country on Earth have a government, and what does it actually do for you? Since then, you've covered the US Constitution, the Bill of Rights, the three branches, voting, economics, world geography, world history, the World Wars, the Cold War, globalization, human rights, the environment, and how to read the news. That's an enormous amount of ground. Today we pull it all together. The big idea of social studies isn't memorizing facts. It's becoming the kind of person who understands how the world works and who can help shape it. That's the topic of this final lesson — civic responsibility. What it actually means to be a citizen. By the end, you'll have made decisions about the kind of citizen you want to become — and you'll be ready to call yourself a Social Studies Graduate.`,
          headline: `Civic Responsibility`,
          subtitle: `The capstone — pulling everything together`,
          visual: `/ue-assets/social-studies/l20-welcome.webp`,
        },

        {
          id: `l20-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `What Citizenship Really Means`,
          paragraphs: [
            `Way back in Lesson One, we talked about government and citizens. Now we go deeper. A citizen isn't just someone who happens to live in a country. A citizen is a person who shares in their country's rights AND responsibilities — someone who actively participates in shaping the place they live.`,
            `Lesson Six covered civic participation — voting, contacting representatives, attending public meetings, volunteering, peaceful protest. Lesson Eight covered economic systems. Lesson Nine covered personal finance. Each one of those is part of being a responsible citizen. The big idea connecting them all: government isn't something that just happens TO you. It's something you have a real role in.`,
            `Citizenship is more than legal status. Plenty of people who can technically vote never do. Plenty of people who can attend meetings never attend. They're citizens on paper — not in practice. Real citizenship means actually using the rights and tools available to you. The interesting question is: what will YOU do with citizenship as you grow up?`,
          ],
          image: `/ue-assets/social-studies/l20-s1-citizenship.webp`,
          imageCaption: `Citizenship: not what you have, but what you do.`,
          vocab: [
            { word: `citizenship`,
              definition: `Being a recognized member of a country, with both rights and responsibilities.`,
              audioPrompt: `Citizenship is being a recognized member of a country, {name}. It comes with rights — like voting, free speech, and equal protection. It also comes with responsibilities — like following the law, paying taxes, serving on juries, and participating in civic life. Citizenship can be by birth, by descent from a citizen parent, or by naturalization. Being a citizen on paper is just the start. Being one in practice means using the rights you have and meeting the responsibilities.` },
            { word: `naturalization`,
              definition: `The legal process by which a non-citizen becomes a citizen of a country.`,
              audioPrompt: `Naturalization is the legal process by which a non-citizen becomes a citizen of a country, {name}. In the US, it typically requires living in the country legally for several years, passing tests in English and civics, demonstrating good moral character, and taking an oath of allegiance. About 900,000 people naturalize as US citizens each year. Naturalized citizens have the same rights as those born here — including voting, holding most offices, and passing citizenship to their children.` },
          ],
        },

        {
          id: `l20-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `The Toolkit You Now Have`,
          paragraphs: [
            `Look at what you've actually learned in this band. You understand how government is structured (Lessons 1-5). You know how laws are made and how rights are protected (Lessons 2-4). You understand how voting and participation work (Lesson 6). You can analyze economic systems and read price changes (Lessons 7-9). You can interpret geography and migration (Lessons 10-11). You can think about world history and current global issues (Lessons 12-17). You can read the news and tell reliable from unreliable (Lesson 19). That's an actual toolkit.`,
            `Most adults don't have all these skills. Many have never thought systematically about civic life. They form opinions based on emotional reactions, headlines, or whatever their friends believe. You now know how to do better. That's not a small thing.`,
            `Having tools is not the same as using them. You have to choose to use them. The kid who knows everything about government but never votes is no more useful than the one who knows nothing. The skill is one half. The practice is the other half. The next part of this lesson — the game — is about that practice.`,
          ],
          image: `/ue-assets/social-studies/l20-s2-toolkit.webp`,
          imageCaption: `Twenty lessons. Real tools. The choice to use them is on you.`,
          vocab: [
            { word: `civic engagement`,
              definition: `Active participation in your community and country — using the tools of citizenship rather than just possessing them.`,
              audioPrompt: `Civic engagement is active participation in your community and country, {name}. It's the difference between being a citizen on paper and being one in practice. Engagement includes voting, but also attending meetings, contacting representatives, volunteering, peaceful protest, jury duty, running for office, joining community groups, and even just being informed and discussing issues with people you know. There's no minimum age for engagement. The habits start now — and the people who start young usually become the most influential citizens later.` },
            { word: `representative democracy`,
              definition: `A system where citizens choose representatives to make decisions on their behalf.`,
              audioPrompt: `Representative democracy is a system where citizens choose representatives to make decisions on their behalf, {name}. It's the system the US uses — you vote for senators, representatives, and a president, who then govern. Pure direct democracy, where citizens vote on every decision themselves, is almost impossible at large scale. Having representatives makes government manageable — but it also creates distance between citizens and decisions. The way to close that gap is civic engagement — staying informed, contacting representatives, and voting in every election.` },
          ],
        },

        {
          id: `l20-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Responsibilities You'll Take On`,
          paragraphs: [
            `Citizenship isn't just rights. It's also responsibilities — things you actually need to do to make democracy work.`,
            `Stay informed: Pay attention to current events, especially at local and national levels. You learned how to do this well in Lesson 19. Vote: When you turn 18, vote in every election, not just presidential ones. Lesson 6 covered why local elections matter more than most people realize. Follow the law: This sounds basic but matters. Laws are how societies coordinate. Even laws you disagree with, you work to change through proper channels rather than just ignore. Serve on a jury: When called. This is part of how the legal system gives ordinary people a real role in justice. Pay your taxes: Taxes fund everything from roads to public schools to national defense. Paying them is part of the deal. Participate beyond voting: Volunteer, attend meetings, write your representatives, run for office. The toolkit from Lesson 6.`,
            `Some responsibilities go beyond what's required by law. Treating every person with dignity (Lesson 17). Recognizing the role you play in the environment (Lesson 18). Being thoughtful about how you spread information online (Lesson 19). These aren't enforced by police, but they're part of being a good citizen. The kind of country you live in is shaped by millions of these choices.`,
          ],
          image: `/ue-assets/social-studies/l20-s3-responsibilities.webp`,
          imageCaption: `Informed. Vote. Follow law. Jury. Taxes. Participate. Treat people with dignity.`,
          vocab: [
            { word: `responsibility`,
              definition: `Something you ought to do, especially as part of a role you've taken on.`,
              audioPrompt: `Responsibility is something you ought to do, {name}, especially as part of a role you've taken on. The responsibilities of citizenship come with the rights of citizenship. They include obvious ones — paying taxes, following the law, serving on juries when called. They include more ambitious ones — staying informed, voting, participating in your community, treating others with dignity. Responsibilities aren't always enforced — but they're how a country actually functions. A democracy where citizens take responsibilities seriously is very different from one where they don't.` },
            { word: `jury duty`,
              definition: `The civic obligation to serve on a jury when called, helping decide legal cases involving fellow citizens.`,
              audioPrompt: `Jury duty is the civic obligation to serve on a jury when called, {name}. In the US, adult citizens can be summoned to help decide legal cases — both civil and criminal. Serving means listening to evidence, deliberating with other jurors, and reaching a verdict. The right to be judged by a jury of ordinary citizens is one of the foundational protections in the Bill of Rights. Many people try to avoid jury duty — but when citizens don't show up, justice becomes less representative of the community.` },
          ],
        },

        {
          id: `l20-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `The Citizen You're Becoming`,
          paragraphs: [
            `Here's the truth about being a thoughtful citizen — it's hard work. It takes time. It involves paying attention even when politics gets exhausting. It involves staying informed even when news is overwhelming. It involves showing up to meetings most people skip. It involves resisting the temptation to share things online without checking. It involves treating people you disagree with as humans, not enemies.`,
            `It also brings real rewards. People who actively engage in their communities report higher life satisfaction. They feel less powerless about world events. They're more likely to see actual changes in their neighborhoods. They build networks of friends, mentors, and allies. They develop skills — public speaking, organizing, writing — that translate into other parts of life.`,
            `Most of all, they shape what kind of country exists. Almost every right you have today was won by previous citizens who actively engaged. Almost every problem we face today is shaped by current citizens who do or don't engage. The country your grandchildren grow up in will be shaped by decisions YOUR generation makes. Starting at 9 or 10 might sound early. It's not. It's exactly the right time.`,
          ],
          image: `/ue-assets/social-studies/l20-s4-becoming.webp`,
          imageCaption: `Hard work. Real rewards. Country-shaping consequences.`,
          vocab: [
            { word: `community`,
              definition: `A group of people connected by location, interest, or identity, who share some responsibility for each other.`,
              audioPrompt: `A community is a group of people connected by location, interest, or identity, {name}, who share some responsibility for each other. Your community might be your neighborhood, your school, your religious group, your city, or even an online group. Communities work when people contribute to them — showing up, helping each other, paying attention. Strong communities have engaged members. Weak communities don't. The country you live in is made up of millions of communities, each one shaped by the people in it.` },
            { word: `public service`,
              definition: `Work done for the benefit of the community or country, especially through government or nonprofit roles.`,
              audioPrompt: `Public service is work done for the benefit of the community or country, {name} — especially through government or nonprofit roles. Teachers, firefighters, city council members, judges, and public health workers are all doing public service. So are volunteers who run food banks, mentor kids, or organize neighborhood cleanups. Public service doesn't have to be a full-time job. Every time a citizen shows up to a meeting, writes to a representative, or helps a neighbor, they're doing a kind of public service. It's how communities and countries function.` },
          ],
        },

        // ── BRANCHING DECISION GAME — Your Civic Life ──────────────────────────
        {
          id: `l20-game`,
          type: `interactive`,
          format: `branching-decision`,
          guideText: `For your capstone game, {name}, we travel through your future life. You'll make four civic decisions at different ages — from your teens through your sixties. Each one is real. Each one matters. After each, I'll show you what citizens who made similar choices have actually done. The kind of citizen you become is shaped by choices like these.`,
          scenarioTitle: `Your Civic Life — A Journey From 14 to 64`,
          decisions: [
            {
              id: `d1`,
              situation: `You're 14. There's a local issue you care about — maybe it's how your school treats students, maybe it's a park getting closed, maybe it's a new policy you think is unfair. You can't vote yet. What do you actually do?`,
              context: `Most 14-year-olds assume they can't really do anything until they're 18. But the toolkit is much bigger than voting.`,
              options: [
                {
                  id: `a`,
                  label: `Nothing — you're a kid, you can't make a difference`,
                  preview: `Most people pick this. Most people miss what's available to them.`,
                },
                {
                  id: `b`,
                  label: `Post about it on social media and see if friends agree`,
                  preview: `Common move. Real influence? Limited.`,
                },
                {
                  id: `c`,
                  label: `Attend the next school board or city council meeting and speak — kids your age are allowed to do this`,
                  preview: `Uncommon move. Disproportionately powerful.`,
                },
              ],
              historicalChoice: `c`,
              explanation: `Option C. Kids speaking at public meetings is rare — and exactly because it's rare, it gets noticed. Adults who would scroll past a thousand social media posts will listen carefully when a 14-year-old shows up in person at a meeting and speaks thoughtfully. Real changes have come from young people doing this. The cost is one evening. The potential return is enormous. Most kids never realize this is even an option.`,
            },
            {
              id: `d2`,
              situation: `You just turned 18. Your first major election is coming up — president, senators, representatives, plus state and local offices. You haven't followed politics closely. What do you do?`,
              context: `This is the most common moment for new voters. Most first-time voters either skip the election or vote uninformed.`,
              options: [
                {
                  id: `a`,
                  label: `Skip the election — you don't know enough to vote`,
                  preview: `You join the half of young voters who don't show up. Other people decide for you.`,
                },
                {
                  id: `b`,
                  label: `Show up and vote for whoever sounds familiar`,
                  preview: `You vote, but without information. Common but ineffective.`,
                },
                {
                  id: `c`,
                  label: `Spend a weekend researching candidates — their positions, records, and who endorses them — then vote informed`,
                  preview: `Uncommon. Effective. Your vote actually represents your values.`,
                },
              ],
              historicalChoice: `c`,
              explanation: `Option C. Most adults who vote don't do this research. They vote on name recognition, party loyalty, or whoever their friends like. By spending a weekend doing real research, you immediately become one of the more informed voters in your district. That's the people candidates actually try to win over — because they're the ones who can be persuaded by actual evidence. The first vote you cast as an informed citizen sets a habit that pays dividends for a lifetime.`,
            },
            {
              id: `d3`,
              situation: `You're 35. You're busy with work and family. The country is debating something important — could be climate policy, healthcare, immigration, anything. You strongly feel one way. What do you do?`,
              context: `This is the busiest stage of most people's lives. It's also when many people stop engaging civically — and when their decline in influence begins.`,
              options: [
                {
                  id: `a`,
                  label: `Post strong opinions online and argue with strangers`,
                  preview: `Feels good for a moment. Changes essentially nothing.`,
                },
                {
                  id: `b`,
                  label: `Vote, but otherwise stay out of it — you're too busy`,
                  preview: `Better than nothing. Most adults are here.`,
                },
                {
                  id: `c`,
                  label: `Contact your representatives, donate to organizations doing the work, attend one local meeting per year`,
                  preview: `Small time commitment. Real, sustained engagement.`,
                },
              ],
              historicalChoice: `c`,
              explanation: `Option C. Almost everyone underestimates how much regular, modest engagement matters. Contacting your representative on an issue takes 10 minutes — and they really do track constituent contact. Donating $25 a month to an organization you trust is more impact than posting 1,000 times online. Attending one school board or city council meeting per year is more than 95 percent of citizens do. The compound effect of decades of modest engagement is enormous — far bigger than a few hours of online arguing.`,
            },
            {
              id: `d4`,
              situation: `You're 64. You've had a full career. You're starting to think about what to do with the next 20 years. Many older citizens become the most active civic participants in any community. What do you choose?`,
              context: `Older citizens have more time, more experience, and often more credibility. They're frequently the backbone of community engagement.`,
              options: [
                {
                  id: `a`,
                  label: `Retire fully — you've done your part`,
                  preview: `Earned. Many people choose this.`,
                },
                {
                  id: `b`,
                  label: `Volunteer occasionally and stay informed`,
                  preview: `Common. Steady contribution.`,
                },
                {
                  id: `c`,
                  label: `Become deeply engaged — run for school board, mentor young people, organize in your community`,
                  preview: `What many of the most influential local citizens actually do.`,
                },
              ],
              historicalChoice: `c`,
              explanation: `Option C. Many of the most effective local leaders are older citizens. School boards, library boards, city councils, community organizations — these are full of people in their 60s, 70s, and 80s who decided to use their experience and time to shape their community. They often have more credibility than younger members because they have decades of context. The years from 65 to 85 can be some of the most impactful years of a person's civic life — and they often are, for people who choose engagement over retirement.`,
            },
          ],
          completionMessage: `Look at the path you just walked, {name}. The pattern is clear. The most influential citizens aren't the loudest. They're the ones who show up consistently — at 14, at 18, at 35, at 64. Engagement isn't a single big moment. It's a habit built over a lifetime. And it starts now. You're already further along than most. The fact that you've done all 20 of these lessons means you understand more about civic life than most adults ever will. The question isn't whether you CAN be a thoughtful citizen. You can. The question is whether you WILL. That part is up to you.`,
        },

        {
          id: `l20-quiz`,
          type: `quiz`,
          guideText: `Final test of your social studies UE journey, {name}. Twelve questions instead of eight, because this is the capstone. Take it slow.`,
          questions: [
            { id: `l20-q1`, format: `multiple-choice`,
              question: `What's the difference between being a citizen on paper and a citizen in practice?`,
              options: [
                `No difference`,
                `Citizen on paper has the legal status; citizen in practice actively uses the rights and meets the responsibilities`,
                `A citizen in practice doesn't follow the law`,
                `A citizen on paper has more rights`,
              ],
              correctIndex: 1,
              explanation: `Citizenship on paper means legal status. Citizenship in practice means actually doing the things that make democracy work — voting, participating, paying attention, treating others with dignity.` },
            { id: `l20-q2`, format: `multiple-choice`,
              question: `Which is NOT one of the four functions of government we covered way back in Lesson 1?`,
              options: [
                `Order`,
                `Services`,
                `Profit`,
                `Justice`,
              ],
              correctIndex: 2,
              explanation: `Profit is for businesses, not governments. The four functions are order, services, protection, and justice. Always worth remembering.` },
            { id: `l20-q3`, format: `multiple-choice`,
              question: `Which document protects rights like free speech, fair trials, and protection from unreasonable searches?`,
              options: [
                `The Declaration of Independence`,
                `The Bill of Rights — the first 10 amendments to the Constitution`,
                `The Magna Carta`,
                `The Federal Register`,
              ],
              correctIndex: 1,
              explanation: `The Bill of Rights — Lesson 3. The first 10 amendments to the Constitution. They protect specific rights from government interference.` },
            { id: `l20-q4`, format: `multiple-choice`,
              question: `Why do US laws have to be passed by BOTH the House and the Senate?`,
              options: [
                `Tradition`,
                `So both states (Senate, equal representation) and people (House, by population) have to agree before a law passes`,
                `It's a mistake`,
                `To make laws longer`,
              ],
              correctIndex: 1,
              explanation: `The Great Compromise, from Lesson 2 and Lesson 4. Both small and large states have a real voice. Laws have to satisfy both.` },
            { id: `l20-q5`, format: `multiple-choice`,
              question: `What's the most reliable pattern explaining why prices change?`,
              options: [
                `It's random`,
                `Supply and demand — shifts in either one tend to move prices`,
                `Government decisions only`,
                `The weather`,
              ],
              correctIndex: 1,
              explanation: `Supply and demand — Lesson 7. The Market Detective. Most price changes you'll see in your life come down to one or both of these shifting.` },
            { id: `l20-q6`, format: `multiple-choice`,
              question: `What's compound interest?`,
              options: [
                `Tax on savings`,
                `Earning interest on your interest — your money grows exponentially over time`,
                `A type of debt`,
                `The cost of a loan`,
              ],
              correctIndex: 1,
              explanation: `Compound interest from Lesson 9. Works for you when you save. Works against you when you carry debt. Time is the key ingredient — starting young is the biggest advantage.` },
            { id: `l20-q7`, format: `multiple-choice`,
              question: `What's the biggest factor that determines a place's climate?`,
              options: [
                `What month it is`,
                `Latitude — how close to the equator the place is`,
                `What language people speak`,
                `Random chance`,
              ],
              correctIndex: 1,
              explanation: `Latitude — Lesson 10. The single biggest factor in determining climate. Most other things (altitude, oceans, currents) layer on top of this base reality.` },
            { id: `l20-q8`, format: `multiple-choice`,
              question: `What document was adopted in nineteen forty-eight listing rights every human deserves?`,
              options: [
                `The US Bill of Rights`,
                `The Universal Declaration of Human Rights`,
                `The Geneva Convention`,
                `The Paris Agreement`,
              ],
              correctIndex: 1,
              explanation: `The Universal Declaration of Human Rights from Lesson 17. Drafted under Eleanor Roosevelt. The most influential statement of human rights ever made.` },
            { id: `l20-q9`, format: `true-false`,
              question: `True or false: The Cold War never resulted in direct combat between the US and the Soviet Union.`,
              correctAnswer: true,
              explanation: `True. Lesson 15. They never fought each other directly — that's why it was "cold." But they backed opposite sides in many proxy wars and came terrifyingly close to nuclear war several times.` },
            { id: `l20-q10`, format: `multiple-choice`,
              question: `What's the main cause of current climate change?`,
              options: [
                `Volcanoes`,
                `Humans burning fossil fuels and releasing greenhouse gases that trap heat`,
                `Solar flares`,
                `Cows`,
              ],
              correctIndex: 1,
              explanation: `Lesson 18. The science is settled. Burning coal, oil, and gas releases CO2 and other greenhouse gases that trap heat. Cows actually do contribute (methane from livestock), but burning fossil fuels is far bigger.` },
            { id: `l20-q11`, format: `multiple-choice`,
              question: `What's a good first step when reading a shocking news headline?`,
              options: [
                `Share it immediately`,
                `Pause — check the actual story, the source, and whether other reliable sources confirm it`,
                `Believe it completely`,
                `Get angry online`,
              ],
              correctIndex: 1,
              explanation: `Lesson 19 — media literacy. Strong emotional reactions are exactly when to slow down. Many of the most distorted stories are designed to trigger anger to make you click and share.` },
            { id: `l20-q12`, format: `multiple-choice`,
              question: `What's the big idea of civic responsibility?`,
              options: [
                `Vote when you have to and then forget about it`,
                `Active, consistent engagement in your community and country — not just voting, but participating in many ways over a lifetime`,
                `Run for President`,
                `Stay out of politics`,
              ],
              correctIndex: 1,
              explanation: `Civic responsibility means staying informed, voting in every election, participating beyond voting, treating others with dignity, and building a habit of engagement that lasts your whole life. Not glamorous. Hugely important.` },
          ],
        },

        {
          id: `l20-reflection`,
          type: `reflection`,
          guideText: `Final reflection of your social studies UE journey, {name}. Pick a prompt. This one matters — your answer goes into your record.`,
          prompts: [
            { id: `r1`, text: `What's ONE thing you learned in this whole social studies journey that you didn't expect to learn?` },
            { id: `r2`, text: `Of all 20 lessons, which felt most important to you? Why?` },
            { id: `r3`, text: `What kind of citizen do you want to be when you grow up? Specifically.` },
            { id: `r4`, text: `What's one civic habit you'll try to start practicing this year?` },
          ],
        },

        {
          id: `l20-realworld`,
          type: `real-world`,
          guideText: `You've now completed twenty lessons of social studies, {name}. You know more about how the world works than the version of you who started this. You also know more than most adults you'll ever meet. None of that knowledge has been wasted — but knowledge is only useful when applied. The next chapter is the one you write. Decades from now, you'll be the kind of citizen you became — through habits built in your teens, twenties, thirties, and beyond. That story starts now. Atlas has been your guide through this whole journey. Today's the last lesson of the social studies UE band. You'll see me again in other bands. But for now — congratulations. Real work was done.`,
          familyAdventure: `Your final family adventure. Together, pick ONE civic action your family will actually take this month. Maybe it's looking up your representatives. Maybe it's attending a public meeting. Maybe it's volunteering somewhere. Maybe it's writing to an elected official about an issue. Don't just plan — actually do it. Then talk about how it felt afterward.`,
          creativePrompt: {
            intro: `This is your final social studies creative prompt. Write your "Civic Resolution" — a statement of the kind of citizen you intend to be over your lifetime. What do you commit to? What do you refuse to do? What kind of country do you want to help build?`,
            floor: `Write at least 5 sentences. Use the sentence starters if helpful.`,
            stretch: `Write 8-10 sentences. Be specific. Make it real. Treat it as something you might actually look back on in 20 years.`,
            open: `Write as much as you want. This is the one you may want to keep.`,
            frames: [
              `The kind of citizen I intend to be is ___.`,
              `I commit to ___.`,
              `I refuse to ___.`,
              `The country I want to help build is one where ___.`,
              `My first step starting this year will be ___.`,
            ],
          },
        },

        {
          id: `l20-celebration`,
          type: `celebration`,
          message: `Congratulations, {name}. You just earned the Social Studies Graduate badge — the capstone of your entire Upper Explorer journey. Twenty lessons. Hours of work. Look at what you can now do. You can define government and explain its four functions. You can describe the Constitution, the Bill of Rights, and how the three branches actually work. You can explain how voting and civic participation shape what government does. You understand free enterprise, supply and demand, economic systems, and personal finance. You can read geography, climate, and migration patterns. You know world cultures and major historical forces — industrialization, colonialism, the World Wars, the Cold War, globalization. You understand human rights and what defending them looks like. You can read news critically and tell reliable sources from unreliable ones. And you understand what citizenship actually means — the daily practice, not just the legal status. Most adults you'll ever meet don't have this toolkit. You do. This is the end of Social Studies for the Upper Explorer band. I'm proud of the work you've put in. See you in the next band, when we go even deeper. — Atlas the Bear.`,
          badge: `social-studies-graduate`,
          badgeName: `Social Studies Graduate`,
          xpEarned: 100,
          isCapstone: true,
        },
      ],
    },
  ],
};

export default SOCIAL_STUDIES_UE_L20;
