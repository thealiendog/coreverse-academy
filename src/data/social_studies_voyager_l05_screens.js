// ─────────────────────────────────────────────────────────────────────────────
// SOCIAL STUDIES VOYAGER  |  L05 — American Political Parties and Electoral Politics
// Age band : voyagers (11-12)   Guide: atlas (Bear)
// Standards: C3 Framework (Civics) — D2.Civ
// Interaction: PERSPECTIVES (debate). Paragraphs ~330ch. 3 vocab/section.
// ─────────────────────────────────────────────────────────────────────────────

const VERSION = "voyager-ss-l05-v1";

const SOCIAL_STUDIES_VOYAGER_L05 = {
  ageBand: `voyagers`,
  subjectId: `social_studies`,
  guide: `atlas`,

  lessons: [
    {
      id: `social-studies-11-12-05`,
      title: `American Political Parties and Electoral Politics`,
      duration: 35,
      xpReward: 75,
      badge: `electoral-navigator`,
      badgeName: `Electoral Navigator`,

      screens: [
        {
          id: `l05-welcome`,
          type: `welcome`,
          guideText: `{name}, the United States has had two dominant political parties for almost its entire history. Why? What do parties actually do? How do elections work, and why do some votes count more than others? These aren't just civics facts — they determine who holds power and over what. Understanding how the electoral system actually works is the foundation of any serious civic participation. That's what this lesson builds.`,
          headline: `American Political Parties and Electoral Politics`,
          subtitle: `How citizens organize, compete, and choose who governs, and whether the system serves democracy well. A debate among many voices.`,
          visual: `/voyager-assets/social-studies/l05-welcome.webp`,
        },

        {
          id: `l05-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `The Parties Nobody Planned`,
          paragraphs: [
            `Here's a surprise: the Constitution never mentions political parties, and many founders feared them. George Washington warned that parties would divide the nation into power-hungry factions. Yet within a few years, parties had formed anyway, organized around real disagreements about how the country should be run.`,
            `Why did they appear despite the warnings? Because they solve real problems any large democracy faces. Millions can't each negotiate with everyone; they need ways to band together around shared goals, pool resources, recruit candidates, and offer voters clear choices. Parties do all this. They turned out nearly impossible to avoid, not from a flaw, but from how group politics works.`,
            `A political party, at its core, is an organized group that seeks to win elections and control government to put its ideas into practice. Parties give voters a shortcut: instead of researching every candidate, you learn roughly what each party stands for and judge candidates partly by their label. That's useful, but also part of what makes parties powerful, and sometimes troubling.`,
          ],
          image: `/voyager-assets/social-studies/l05-s1-unplanned.webp`,
          imageCaption: `A surprise: the Constitution never mentions political parties, and many founders FEARED them. George Washington warned that parties would divide the nation into power-hungry factions. Yet within a few years, parties formed anyway, organized around real disagreements about running the country. Why, despite the warnings? Because they solve real problems any large democracy faces: millions can't each negotiate with everyone, so they band together around shared goals, pool resources, recruit candidates, and present clear choices. Parties turned out nearly impossible to avoid. A PARTY is an organized group seeking to win elections and control government to enact its ideas. Parties give voters a shortcut, useful, but also part of what makes them powerful and sometimes troubling.`,
          vocab: [
            { word: `political party`,
              definition: `An organized group that seeks to win elections and control government in order to put its ideas and policies into practice. Parties organize political competition.`,
              audioPrompt: `A political party, {name}, is an organized group that tries to win elections and control government so it can turn its ideas into actual laws and policies. Parties recruit candidates, raise money, rally supporters, and present voters with a package of positions. Think of them as competing teams in the contest over how the country should be run. The founders never planned for them, yet they appeared almost instantly. Why do you think organized teams form so naturally whenever people compete for power?` },
            { word: `faction`,
              definition: `A group united by shared interests or beliefs that pursues its own goals, sometimes at the expense of others. The founders feared parties would become dangerous factions.`,
              audioPrompt: `A faction, {name}, is a group bound together by shared interests or beliefs, pursuing its own agenda, and it's the very thing many founders feared parties would become. George Washington warned that factions could put their own power above the good of the whole nation. Yet factions, and the parties they form, also let people with shared goals organize and be heard. So they're double-edged: a way for citizens to band together, and a potential threat to unity. Have you seen a "faction" form in your own school or community? What pulled it together?` },
            { word: `inevitability parties`,
              definition: `The idea that political parties form in nearly every democracy because they solve real problems, organizing competition, pooling effort, and simplifying choices, even when no one planned them.`,
              audioPrompt: `The inevitability of parties, {name}, is the striking fact that even though the founders didn't want political parties, they appeared almost immediately and exist in nearly every democracy on Earth. Why? Because they solve real problems: in a country of millions, people need ways to organize around shared goals, pool their efforts, and offer voters clear choices. Parties do that. They weren't a mistake or a corruption, they were almost unavoidable. Does it change how you see parties to know they arise naturally, not by design?` },
          ],
        },

        {
          id: `l05-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `What Parties Actually Do`,
          paragraphs: [
            `Parties get a bad reputation, but they perform real functions. First, they organize competition: instead of chaos with thousands of unconnected candidates, parties structure the contest into clear choices. Second, they recruit and support candidates, finding people to run, training them, and funding campaigns most couldn't afford alone.`,
            `Third, parties simplify choices: no one can research every candidate, so a party label signals roughly what a candidate supports. Fourth, parties help hold government accountable, the party out of power (the "opposition") scrutinizes those in charge, giving voters a clear alternative and a way to "throw the bums out" if they're unhappy.`,
            `Fifth, parties connect citizens to government and each other, a way to participate and feel part of something larger. None of this means parties are perfect, they can become rigid, tribal, or corrupt. But knowing what they're for helps you see why they persist, and judge when they do their job well versus poorly. They're tools, usable well or badly.`,
          ],
          image: `/voyager-assets/social-studies/l05-s2-functions.webp`,
          imageCaption: `Parties get a bad reputation, but they perform real functions. They ORGANIZE COMPETITION, structuring chaos into recognizable choices. They RECRUIT AND SUPPORT CANDIDATES, finding, training, and funding people most couldn't run alone. They SIMPLIFY CHOICES, a party label signals roughly what a candidate supports, since no one can research every race. They help HOLD GOVERNMENT ACCOUNTABLE, the opposition party scrutinizes those in power and offers an alternative, so voters can "throw the bums out." And they CONNECT citizens to government and each other. None of this makes parties perfect, they can turn rigid, tribal, or corrupt. But knowing what they're FOR helps you judge when they do their job well versus badly. Parties are tools, used well or badly.`,
          vocab: [
            { word: `functions of parties`,
              definition: `The real jobs parties do in a democracy: organizing competition, recruiting candidates, simplifying voter choices, holding government accountable, and connecting citizens to politics.`,
              audioPrompt: `The functions of parties, {name}, are the genuine jobs they do, beyond their bad reputation. They organize the chaos of competition into clear choices, recruit and fund candidates, give voters a useful shortcut through party labels, hold those in power accountable through an opposition party, and connect citizens to government. Parties aren't just self-interested clubs; they make a huge democracy actually workable. Which of these jobs do you think matters most for a healthy democracy, and why?` },
            { word: `the opposition`,
              definition: `The party or parties not currently in power, whose role is to scrutinize and criticize those governing and offer voters a clear alternative. A key part of accountability.`,
              audioPrompt: `The opposition, {name}, is the party that isn't currently in power, and it plays a vital role: watching the governing party closely, criticizing its mistakes, and offering voters a real alternative. A healthy democracy needs a strong opposition, because it keeps those in charge accountable and gives the people a clear choice at the next election. Without it, power goes unchecked. Why do you think it's actually good for democracy to have a loyal opposition constantly challenging the people in charge?` },
            { word: `as shortcut`,
              definition: `The way a party affiliation gives voters a quick signal about a candidate's likely positions, useful because no one can research every candidate, but also a source of blind loyalty.`,
              audioPrompt: `The party label as shortcut, {name}, is one of the most useful, and most double-edged, things parties provide. Since no one can deeply research every candidate for every office, knowing a candidate's party tells you roughly what they probably support, a handy mental shortcut. But the same shortcut can become a problem: people may vote for a label without thinking, or assume everyone on "the other side" is wrong. Useful tool, or lazy thinking? When is relying on a party label smart, and when is it dangerous?` },
          ],
        },

        {
          id: `l05-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Why Only Two?`,
          paragraphs: [
            `Here's a puzzle: the U.S. has two dominant parties, while many democracies (Germany, Brazil, much of Europe and Latin America) have many. Why? It's not an accident, and not because Americans have only two opinions. The answer lies largely in the rules of how elections are run.`,
            `Most U.S. elections use "winner-take-all": whoever gets the most votes wins, everyone else gets nothing. So a third party that comes in second, even with millions of votes, wins no power. Voters fear "wasting" their vote on a party that can't win, and consolidate behind the two largest, who alone have a real chance. Over time this pushes the system toward two big parties.`,
            `Compare "proportional representation," used in many countries, where parties win seats in proportion to their vote share. A party with 15 percent of votes gets roughly 15 percent of seats, and real power. That rewards multiple parties, so they flourish. The lesson is subtle but powerful: election rules quietly shape the whole political landscape, including how many real choices voters have.`,
          ],
          image: `/voyager-assets/social-studies/l05-s3-why-two.webp`,
          imageCaption: `A puzzle: the U.S. has TWO dominant parties, while many democracies (Germany, Brazil, much of Europe and Latin America) have MANY. Why? Not because Americans have only two opinions, the answer is largely the RULES of how elections run. Most U.S. elections are WINNER-TAKE-ALL: whoever gets the most votes wins, everyone else gets nothing. So a third party that comes in second, even with millions of votes, wins no power. Voters fear "wasting" their vote and consolidate behind the two biggest. Compare PROPORTIONAL REPRESENTATION, used in many countries: parties win seats in proportion to their vote share, so a 15-percent party gets real power, and many parties flourish. The lesson: election rules quietly shape the whole political landscape.`,
          vocab: [
            { word: `winner-take-all`,
              definition: `An election system in which the candidate with the most votes wins the entire contest and everyone else gets nothing. It pushes a country toward two dominant parties.`,
              audioPrompt: `Winner-take-all, {name}, is the election system used in most U.S. races: whoever gets the most votes wins everything, and everyone else gets nothing, no seat, no power. This quietly pushes the country toward just two big parties, because a third party that finishes second, even with millions of votes, wins nothing, so voters fear "wasting" their vote on it. The rule shapes the result. Does it change how you see American politics to learn that the two-party system comes largely from this one rule?` },
            { word: `proportional representation`,
              definition: `An election system in which parties win seats in proportion to their share of the vote, so smaller parties gain real power. It tends to produce many parties.`,
              audioPrompt: `Proportional representation, {name}, is an election system used in many democracies where parties win seats in proportion to their share of the vote, so a party that wins fifteen percent of votes gets about fifteen percent of the seats, and real power. Because even smaller parties can win something, many parties flourish, giving voters more choices. It's a completely different result from winner-take-all, produced just by changing the rules. Would you prefer two big parties or many smaller ones? Notice that the rules, not just opinions, decide.` },
            { word: `shape outcomes`,
              definition: `The principle that the design of an electoral system, not just voters' opinions, profoundly shapes political results, including how many viable parties a country has.`,
              audioPrompt: `How rules shape outcomes, {name}, is one of the most important and least obvious ideas in this lesson: the design of an election system, not just what voters believe, profoundly shapes the political landscape. Winner-take-all produces two big parties; proportional representation produces many. Same voters, different rules, different results. This is why debates about election rules matter so much, they quietly determine how many real choices you have. As you watch politics, ask not just "what do people want?" but "what do the rules reward?"` },
          ],
        },

        {
          id: `l05-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `How Elections Actually Work`,
          paragraphs: [
            `Elections happen in stages. First come primaries (and caucuses): contests within each party where party voters choose that party's candidate. Then the general election, where the parties' candidates face off and all voters decide. So parties first pick their champion, then the champions compete for everyone's vote.`,
            `Campaigns are how candidates try to win: ads, debates, rallies, door-knocking, and social media. They cost enormous sums, which is why money in politics is so heated, candidates need funds to be heard, but heavy reliance on big donors raises real worries about whose voices count most. We'll weigh that debate shortly.`,
            `The presidential election has a twist: Americans don't directly elect the president by national popular vote. They vote within their states, which cast "electoral votes" through the Electoral College, a system that can rarely produce a president who lost the popular vote. It's one of the most debated features of American democracy. The deeper point holds: elections turn "consent of the governed" from a phrase into a real, repeatable event.`,
          ],
          image: `/voyager-assets/social-studies/l05-s4-elections.webp`,
          imageCaption: `Elections happen in stages. First, PRIMARIES (and caucuses): contests within each party where party voters pick that party's candidate. Then the GENERAL ELECTION, where the parties' candidates face off and all voters decide. Parties first pick their champion, then champions compete for everyone. CAMPAIGNS, ads, debates, rallies, door-knocking, social media, are how candidates try to win, and they cost enormous sums, which is why MONEY IN POLITICS is so heated: candidates need funds to be heard, but reliance on big donors raises worries about whose voice counts. The PRESIDENTIAL election has a twist: not a direct national popular vote, but state-by-state votes through the ELECTORAL COLLEGE, which can rarely elect a president who lost the popular vote. Elections turn "consent of the governed" into a real event.`,
          vocab: [
            { word: `general election`,
              definition: `A primary is a contest within a party to choose its candidate; the general election is where the parties' chosen candidates compete and all voters decide who wins the office.`,
              audioPrompt: `Primary versus general election, {name}, describes the two stages of choosing leaders. In a primary, the voters of each party pick who will represent that party, the party choosing its champion. Then, in the general election, those champions face each other and all voters decide who actually wins the office. It's a two-step funnel: first within the party, then across the whole electorate. Why do you think parties let their own voters pick the candidate first, instead of party leaders simply choosing?` },
            { word: `money in politics`,
              definition: `The role of campaign funding in elections. Candidates need money to reach voters, but heavy reliance on large donors raises concerns about influence and whose voices count most.`,
              audioPrompt: `Money in politics, {name}, is one of the most debated issues in democracy. Campaigns are expensive, ads, staff, travel, so candidates need money to be heard at all. But that creates a worry: if candidates depend on big donors, do those donors gain outsized influence over policy? Does the system start listening more to wealth than to ordinary voters? There are real arguments on multiple sides, which we'll explore. Whose voice do you think should count most in an election, and how could a system protect that?` },
            { word: `Electoral College`,
              definition: `The system by which Americans elect the president not by direct national popular vote, but through electoral votes cast by states, which can occasionally elect a president who lost the popular vote.`,
              audioPrompt: `The Electoral College, {name}, is the unusual system the U.S. uses to elect its president. Instead of one big national popular vote, Americans vote within their states, and states cast "electoral votes," mostly winner-take-all. Usually the winner of the popular vote also wins the Electoral College, but not always, a few times, a candidate who lost the national popular vote still became president. It's one of the most debated features of American democracy. Should the president be chosen by direct national vote, or does the state-by-state system serve a purpose? Hold that question.` },
          ],
        },

        {
          id: `l05-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Before The Debate`,
          paragraphs: [
            `Pull it together. The founders feared parties, yet they appeared almost immediately and exist in nearly every democracy, because they solve real problems: organizing competition, recruiting candidates, simplifying choices, and holding power accountable through an opposition. They're tools, usable well or badly.`,
            `The U.S. has two parties largely because of winner-take-all rules, while proportional representation elsewhere rewards many. Elections run in stages, primaries then general, powered by expensive campaigns (the money debate), and the president comes through the Electoral College, not a direct vote. Elections turn consent of the governed into a real event.`,
            `But almost every part of this system is contested. Is two parties healthy or stifling? Does money corrupt elections, or is spending free speech? Does the Electoral College protect smaller states or distort democracy? These have thoughtful answers on multiple sides. So the debate screen presents five views on whether the system serves democracy. Don't crown a winner, form your own view, as the voter you'll soon become.`,
          ],
          image: `/voyager-assets/social-studies/l05-s5-before.webp`,
          imageCaption: `Threads together. The founders feared parties, yet they appeared instantly and exist in nearly every democracy, solving real problems: organizing competition, recruiting candidates, simplifying choices, holding power accountable through an OPPOSITION, connecting citizens. They're tools, usable well or badly. The U.S. has TWO parties largely because of WINNER-TAKE-ALL rules; PROPORTIONAL REPRESENTATION elsewhere rewards many. Elections run in stages, PRIMARIES then GENERAL, powered by expensive campaigns (the MONEY debate), and the president comes through the ELECTORAL COLLEGE, not a direct vote. Almost every part is contested: two parties healthy or stifling? Money corrupting or free speech? The debate screen presents five views. Don't crown a winner.`,
          vocab: [
            { word: `the two-party debate`,
              definition: `The ongoing argument over whether the U.S. two-party system is healthy (stable, clear choices) or harmful (limited options, polarization), with strong arguments on both sides.`,
              audioPrompt: `The two-party debate, {name}, asks whether America's two-party system is good or bad for democracy. Defenders say two parties bring stability and clear choices, and force broad coalitions. Critics say it limits real options, traps voters in "lesser of two evils" choices, and fuels us-versus-them polarization. Both sides have a point, and the system itself flows largely from winner-take-all rules. Would you rather have two stable parties or many smaller ones with more choices but less stability? It's a genuine tradeoff.` },
            { word: `campaign finance debate`,
              definition: `The dispute over money in elections: whether campaign spending is protected free expression, or a corrupting force that lets the wealthy drown out ordinary voices.`,
              audioPrompt: `The campaign finance debate, {name}, is the heated argument over money in elections. One side says spending money to support candidates and causes is a form of free speech that shouldn't be restricted. The other says heavy reliance on wealthy donors corrupts democracy, letting money drown out ordinary voices and tilting policy toward the rich. Courts, voters, and reformers genuinely disagree. How would you balance the right to spend on speech against the danger of money buying influence? There's no easy answer.` },
            { word: `future voter`,
              definition: `The recognition that understanding parties and elections directly empowers you, because in a few years you will register, choose, and vote within this very system.`,
              audioPrompt: `You, the future voter, {name}, are the reason this lesson matters personally. In just a few years, you'll register, weigh candidates and parties, and cast real votes that help decide who governs. The better you understand how parties work, how election rules shape outcomes, and where the system's strengths and flaws lie, the more thoughtful and powerful your voice becomes. Most people enter this system without really understanding it. You won't. What kind of voter do you want to be when your turn comes?` },
          ],
        },

        {
          id: `l05-perspectives`,
          type: `perspectives`,
          headline: `The Great Debate: Does The System Serve Democracy?`,
          intro: `{name}, almost every part of the American electoral system is contested. Does it serve democracy well, or distort it? Here are five thoughtful voices, each holding a real piece of the truth. Don't crown a winner. Understand the genuine tensions, and begin forming your own informed view, as the voter you'll soon become.`,
          perspectives: [
            {
              id: `p1`,
              voice: `The two-party defender`,
              era: `A view on the electoral system`,
              stance: `Two strong parties bring stability and clear choices, they force broad coalitions and make government workable.`,
              quote: `"Two parties force compromise into big tents. Multiply the parties and you get chaos and endless deal-making."`,
              argument: `A two-party system has real virtues. It provides stability and clear, understandable choices, voters know roughly what each side stands for. It forces each party into a "big tent," building broad coalitions across many groups rather than splintering into dozens of narrow factions. And it tends to produce stable, workable governments rather than the fragile, shifting coalitions that many multiparty systems require to function. Simplicity and stability are genuine goods.`,
              evidence: `The long stability of the U.S. two-party system; the coalition-building forced by big-tent parties; multiparty systems that struggle to form stable governments; winner-take-all rules that naturally produce two parties.`,
              strengths_and_limits: `Strength: rightly values stability, clear choices, and the broad coalition-building that two big tents require, real benefits for a functioning democracy. Limit: it can dismiss the genuine cost of limited options, leaving many voters feeling unrepresented and trapped choosing the "lesser of two evils."`,
            },
            {
              id: `p2`,
              voice: `The multiparty advocate`,
              era: `A view on the electoral system`,
              stance: `Two parties is too few, more parties would give voters real choices and represent the actual diversity of views.`,
              quote: `"Why should a nation of millions of views be squeezed into just two boxes? People deserve more real choices."`,
              argument: `A nation of hundreds of millions holds far more than two coherent worldviews, yet winner-take-all rules squeeze everyone into two parties, forcing voters to pick the "lesser of two evils" rather than a party they truly believe in. Proportional representation, used successfully in many democracies, would give smaller parties real seats and power, better representing the actual diversity of views and reducing the toxic us-versus-them polarization that two-party systems breed.`,
              evidence: `Many stable democracies use proportional representation with multiple parties; the "wasted vote" problem under winner-take-all; rising polarization in two-party systems; widespread voter dissatisfaction with only two choices.`,
              strengths_and_limits: `Strength: takes seriously that two parties can't capture the real diversity of views, and that more choices could improve representation and reduce polarization. Limit: multiparty systems can produce unstable coalitions, gridlock, and sometimes give tiny extremist parties outsized leverage, the stability the first voice prizes.`,
            },
            {
              id: `p3`,
              voice: `The campaign-finance reformer`,
              era: `A view on the electoral system`,
              stance: `Money is corrupting our elections, when campaigns depend on big donors, the wealthy gain a louder voice than ordinary citizens.`,
              quote: `"One person, one vote, unless you have millions to spend. Then your voice drowns out everyone else's."`,
              argument: `Democracy promises political equality, one person, one vote, but heavy reliance on big donors undermines it. Candidates need enormous sums to compete, so they court the wealthy, who gain disproportionate influence over which candidates can run and which policies get attention. This tilts government toward the interests of the rich and erodes ordinary citizens' equal voice. Real reform, limiting or balancing money's role, is needed to keep elections genuinely democratic.`,
              evidence: `The enormous and rising cost of campaigns; candidates' dependence on wealthy donors and how it shapes access; the tension between "one person, one vote" and unequal spending power.`,
              strengths_and_limits: `Strength: rightly defends political equality and warns that money can give the wealthy outsized influence, distorting whose voices government hears. Limit: regulating money runs into free-speech concerns, and reformers disagree about which limits actually work without simply favoring incumbents or other powerful players.`,
            },
            {
              id: `p4`,
              voice: `The free-speech defender of spending`,
              era: `A view on the electoral system`,
              stance: `Spending on campaigns is a form of free expression, restricting it lets government control political speech, which is dangerous.`,
              quote: `"When government decides how much you can spend to support your beliefs, it's deciding how loudly you can speak."`,
              argument: `Spending money to support candidates, causes, and political messages is a form of free expression protected by the First Amendment. People and groups have a right to spend to amplify their views, and letting government heavily restrict political spending hands it the power to control political speech, deciding who can be heard, which is exactly what the First Amendment guards against. The cure of heavy regulation may be worse than the disease, threatening the free debate democracy depends on.`,
              evidence: `First Amendment protections for political speech; court rulings treating some political spending as protected expression; the risk that incumbents write finance rules to protect themselves; the value of robust, uninhibited political debate.`,
              strengths_and_limits: `Strength: rightly warns that giving government power to limit political spending is also giving it power over political speech, a real First Amendment danger. Limit: treating unlimited spending as pure free speech can let concentrated wealth dominate political debate, undermining the equal voice the reformer defends.`,
            },
            {
              id: `p5`,
              voice: `The Electoral College debater`,
              era: `A view on the electoral system`,
              stance: `The way we pick presidents is itself contested, the Electoral College either protects balance or distorts the popular will.`,
              quote: `"Should the president be whoever most Americans chose, or does the state-by-state system protect something worth keeping?"`,
              argument: `This view spotlights a specific, sharp debate: should the president be elected by direct national popular vote, or through the Electoral College? Defenders of the College argue it protects smaller states and forces candidates to build geographically broad coalitions rather than focusing only on big cities. Critics argue it can elect a president who lost the popular vote, violates "one person, one vote," and gives outsized weight to a few "swing states." It's a genuine clash about what fair representation even means.`,
              evidence: `Elections where the popular-vote loser won the presidency; the Electoral College's protection of smaller-state influence; the focus on swing states; the "one person, one vote" principle.`,
              strengths_and_limits: `Strength: surfaces a real, unresolved tension between national majority rule and the federal system's protection of states and geographic balance. Limit: there's no neutral answer, "fair" depends on whether you prioritize raw national majority or the federal, state-based design, so reasonable people genuinely disagree.`,
            },
          ],
          synthesisPrompt: `After all five: where do YOU land? Is the two-party system healthy or limiting? Does money corrupt elections or is it protected speech? Does the Electoral College protect balance or distort democracy? Pick the question that grips you most and reason it through. Which voice challenged you most? In 5-6 sentences, there's no single right answer, only a thoughtful one.`,
          reflectionPrompt: `In just a few years, you'll vote within this exact system, with all its strengths and flaws. How does it feel to know you'll soon be a real participant, not just an observer, and what kind of voter do you want to become as you step into it?`,
        },

        {
          id: `l05-quiz`,
          type: `quiz`,
          headline: `Check your understanding`,
          questions: [
            {
              id: `q1`,
              type: `multiple-choice`,
              question: `What does the Constitution say about political parties?`,
              options: [
                `It requires the country to have exactly two parties.`,
                `It never mentions them, and many founders actually feared them.`,
                `It bans political parties entirely.`,
                `It gives parties the power to choose the president directly.`,
              ],
              correctIndex: 1,
              explanation: `The Constitution never mentions political parties, and several founders, including Washington, warned against them, yet parties formed anyway because they solve real problems. The distractors invent requirements or bans that don't exist.`,
            },
            {
              id: `q2`,
              type: `multiple-choice`,
              question: `What is a political party, at its core?`,
              options: [
                `A government agency that runs and supervises all elections.`,
                `A court that decides which candidates are allowed to run.`,
                `An organized group seeking to win elections and control government to enact its ideas.`,
                `A volunteer group that exists only to raise money for various local charities.`,
              ],
              correctIndex: 2,
              explanation: `A political party is an organized group that seeks to win elections and control government in order to put its ideas and policies into practice. The distractors describe an election agency, a court, or a charity.`,
            },
            {
              id: `q3`,
              type: `multiple-choice`,
              question: `Which of these is a real function parties perform in a democracy?`,
              options: [
                `Simplifying voter choices and holding government accountable through an opposition.`,
                `Personally counting every ballot in every election.`,
                `Personally writing out all of the official rulings of the Supreme Court.`,
                `Eliminating disagreement so everyone thinks the same way.`,
              ],
              correctIndex: 0,
              explanation: `Parties organize competition, recruit candidates, simplify choices via labels, hold power accountable through an opposition, and connect citizens, real democratic functions. The distractors describe vote-counting, courts, or erasing disagreement.`,
            },
            {
              id: `q4`,
              type: `multiple-choice`,
              question: `Why does the United States tend to have only two dominant parties?`,
              options: [
                `Because a strict federal law currently allows only two political parties to legally exist at all.`,
                `Because all Americans genuinely happen to hold only two possible political opinions.`,
                `Because the Constitution names the two parties directly.`,
                `Largely because of winner-take-all rules, which push voters to consolidate behind the two with a real chance.`,
              ],
              correctIndex: 3,
              explanation: `Winner-take-all rules mean only the top vote-getter wins, so voters consolidate behind the two largest parties to avoid "wasting" votes, pushing toward two parties. The distractors invent laws, opinions, or constitutional naming.`,
            },
            {
              id: `q5`,
              type: `multiple-choice`,
              question: `How does proportional representation differ from winner-take-all?`,
              options: [
                `Parties win seats in proportion to their vote share, so smaller parties gain real power.`,
                `Only the single largest party is allowed to win any seats at all.`,
                `The president alone personally assigns every one of the available seats to the parties.`,
                `Voters are not allowed to choose between different parties.`,
              ],
              correctIndex: 0,
              explanation: `Under proportional representation, parties win seats in proportion to their votes, so a 15%-party gets roughly 15% of seats and real power, which lets many parties flourish. The distractors describe the opposite or invent rules.`,
            },
            {
              id: `q6`,
              type: `multiple-choice`,
              question: `What is the difference between a primary and a general election?`,
              options: [
                `A primary is held only in odd years; a general election only in even years.`,
                `A primary chooses a party's candidate; the general election decides who wins the office.`,
                `A primary is for the president; a general election is only for Congress.`,
                `They are two different names for exactly the same event.`,
              ],
              correctIndex: 1,
              explanation: `In a primary, a party's voters choose that party's candidate; in the general election, the parties' candidates compete and all voters decide who wins the office. The distractors invent timing rules or conflate the two.`,
            },
            {
              id: `q7`,
              type: `multiple-choice`,
              question: `What is unusual about how the United States elects its president?`,
              options: [
                `The president is chosen entirely by the Supreme Court justices, not by any of the voters.`,
                `The president is elected by Congress alone, with no public vote.`,
                `Voters choose within their states through the Electoral College, not by direct national popular vote.`,
                `Whoever raises the most campaign money automatically becomes president.`,
              ],
              correctIndex: 2,
              explanation: `Americans don't elect the president by direct national popular vote; they vote within states, which cast electoral votes through the Electoral College, occasionally electing a popular-vote loser. The distractors invent other selection methods.`,
            },
            {
              id: `q8`,
              type: `multiple-choice`,
              question: `Why is "money in politics" such a debated issue?`,
              options: [
                `Because campaigns are completely free to run and need no money at all.`,
                `Because candidates need funds to be heard, but reliance on big donors raises concerns about influence.`,
                `Because spending any money on a campaign is illegal everywhere.`,
                `Because supposedly only the federal government is allowed to fund any political campaign.`,
              ],
              correctIndex: 1,
              explanation: `Candidates need money to reach voters, but heavy dependence on wealthy donors raises real concerns about whose voices count most, fueling a genuine debate (with free-speech arguments on the other side). The distractors are factually false.`,
            },
            {
              id: `q9`,
              type: `true-false`,
              question: `True or false: The United States has only two major political parties because Americans naturally hold only two sets of political opinions, not because of anything about how elections are designed.`,
              correctAnswer: false,
              explanation: `False, and understanding why reveals one of the most important and least obvious ideas in the study of politics: the rules of an election system, not just voters' opinions, profoundly shape political outcomes, including how many viable parties a country has. It is not true that Americans hold only two sets of opinions, in reality, a nation of hundreds of millions holds an enormous diversity of political views, far more than two. The main reason the U.S. has two dominant parties is structural: most American elections use a "winner-take-all" system, in which whoever gets the most votes in a given contest wins the entire seat, and everyone else gets nothing. Under these rules, a third party that comes in second or third, even with millions of votes, wins no seat and no power at all. This creates a powerful incentive for voters not to "waste" their vote on a smaller party that cannot realistically win, so they consolidate behind the two largest parties, which alone have a genuine chance of winning. Over time, this pushes the entire system toward just two dominant parties. The proof that this is about rules rather than opinions comes from comparison: many other democracies, across Europe, Latin America, and elsewhere, have many parties sharing power, not because their citizens are somehow more diverse in opinion than Americans, but because they use a different system called "proportional representation." Under proportional representation, parties win seats in proportion to their share of the vote, so a party that wins, say, fifteen percent of the votes gets roughly fifteen percent of the seats and real power. Because even smaller parties can win something, multiple parties flourish. Same kind of diverse electorate, different rules, dramatically different result. This illustrates the deep lesson that the design of an electoral system quietly but powerfully shapes the whole political landscape, including how many real choices voters effectively have. So the statement is false: the American two-party system is largely a product of winner-take-all election rules, not evidence that Americans hold only two opinions, and changing the rules (as other countries demonstrate) would change the number of viable parties.`,
            },
            {
              id: `q10`,
              type: `inference`,
              question: `A country frustrated that voters feel stuck choosing between just two parties is considering switching from winner-take-all to proportional representation. Using the lesson, what would most likely happen, and why?`,
              options: [
                `Nothing would change, since the number of parties depends only on voters' opinions, not on the rules.`,
                `More parties would likely become viable, because proportional representation gives smaller parties seats in proportion to their votes, removing the "wasted vote" pressure that pushes voters toward just two parties, this shows how election rules shape outcomes.`,
                `The country would automatically end up with exactly one party controlling everything.`,
                `Voters would lose the right to choose between parties entirely.`,
              ],
              correctIndex: 1,
              explanation: `Proportional representation awards seats by vote share, so smaller parties gain real power and the "wasted vote" fear fades, allowing more viable parties, a direct illustration that election rules, not just opinions, shape how many parties exist. The distractors deny the rules' effect or invent false outcomes.`,
            },
          ],
        },

        {
          id: `l05-reflection`,
          type: `reflection`,
          headline: `Sit with this`,
          intro: `Pick the prompt that pulls at you most. Your answer is saved.`,
          prompts: [
            { id: `reflect-future-voter`, category: `The voter you'll become`, prompt: `In just a few years, you'll vote within this exact system, with all its strengths and flaws. How does it feel to know you'll soon be a real participant, not just an observer, and what kind of voter do you want to become as you step into it?` },
            { id: `reflect-surprise`, category: `What shifted`, prompt: `Before this lesson, you may have assumed two parties was just natural, or that money in politics was simple. What surprised you most, that the founders feared parties, that rules create the two-party system, or something else? What changed in your thinking?` },
            { id: `reflect-rules`, category: `The hidden power of rules`, prompt: `You learned that election rules, not just opinions, shape how many parties exist. Where else in life might the "rules of the game" quietly determine the outcomes, and why is it powerful to notice the rules instead of just the players?` },
            { id: `reflect-heritage`, category: `Teaching elections`, prompt: `Caro, you're building social studies for conscious families. How would you help a child understand elections not as boring or distant, but as the real, repeatable moment when "consent of the governed" actually happens, so voting feels meaningful rather than routine?` },
            { id: `reflect-money`, category: `Money and voice`, prompt: `Campaign money is defended as free speech and attacked as corruption. After weighing both, how would you want a healthy democracy to balance the right to spend on political speech against the danger of wealth drowning out ordinary voices?` },
            { id: `reflect-critical`, category: `The hard question`, prompt: `Pick the feature of the system you find most troubling, two parties, the Electoral College, money, or polarization. What's the strongest defense of it, and after considering that defense, do you still want it changed? Why or why not?` },
          ],
        },

        {
          id: `l05-real-world`,
          type: `real-world`,
          headline: `Take it into the world`,
          familyActivity: {
            title: `Run a Real Election`,
            duration: `One afternoon`,
            description: `Turn an afternoon into a hands-on experience of how parties and elections actually work, making the system your family will vote in something you truly understand. Start with the founders' surprise: discuss the fact that the Constitution never mentions parties and that figures like Washington feared them, then ask why parties formed anyway, and let the conversation surface the real jobs parties do (organizing competition, simplifying choices, holding power accountable). Run your own election: pick a fun decision (where to go on a trip, what to cook for a special dinner, a family rule) and hold a real election, complete with "parties" (small groups proposing different platforms), short "campaigns" where each side makes its case, and a vote. Then try it two ways: first winner-take-all (the single most popular option wins everything), then a proportional version (if you're choosing several things, allocate them by how many votes each got). Notice how the rules change the result and how many "parties" stay viable, this is the lesson's key insight made real. Explore the two-party puzzle: discuss why winner-take-all pushes toward two big parties and why many countries with proportional representation have many, and debate which your family would prefer and why. Walk through real elections: look up how primaries and general elections work, and explore the Electoral College together (maybe with a simple map), discussing whether the president should be chosen by direct national vote or the state-by-state system. Debate money in politics: present both sides, campaign spending as free speech versus money as corruption, and have family members argue each, then look for where they agree. Find it in the real world: examine a current or recent election, identify the parties, the key issues, how campaigns tried to win votes, and how the rules shaped the contest. Finally, talk about becoming a voter: discuss what it will mean when each person can vote, and what kind of voter they want to be, informed, thoughtful, engaged. The goal is to transform elections from something distant and confusing into a system your family can analyze, question, and participate in wisely, understanding not just who's running, but how the whole machine of democratic choice actually works.`,
          },
          projectOption: {
            title: `The Election Analyst Project, 2 weeks (optional)`,
            duration: `2 weeks, ~40 minutes per session`,
            description: `Investigate how a real election works and how the system shapes it, becoming someone who can analyze democratic politics rather than just consume headlines. Week 1, choose and study a real election: pick a real election, a recent presidential or congressional election, a local or state race, a mayoral contest, or even an election in another country with a different system. Research it as an analyst: Which parties and candidates competed, and what did each stand for? How did the campaigns try to win, advertising, debates, messaging, targeting, ground organizing? What did the campaigns cost, and where did the money come from? What were the rules (winner-take-all or proportional, primary structure, for president the Electoral College), and how did those rules shape strategy and outcome? Who actually voted, and who didn't? Document what you find. Week 2, analyze and evaluate: step back and assess what your election reveals about the system's strengths and flaws. Did the rules produce a result that fairly reflected what voters wanted? How did the two-party structure (or multiparty structure) shape the choices voters had? What role did money play, and do you think it distorted the contest? If it was a presidential race, how did the Electoral College affect strategy and outcome? Then take a position: based on your case, what (if anything) about the system would you reform, and what would that reform cost as well as gain? Connect it to yourself: identify what you'd want to know and do as a voter in an election like this. Produce your final piece, an analytical report, a documentary-style video, a slide-deck "election breakdown," an infographic, or a "voter's guide" to understanding the system, that walks others through how the election worked, how the rules and money shaped it, and your reasoned judgment about how well it served democracy. The aim is to experience elections the way a sharp analyst does, not as a horse race to cheer or jeer, but as a designed system whose rules quietly shape outcomes, and to step toward your own future as a voter who understands the machine well enough to use your voice within it wisely and powerfully.`,
            offerToParent: `Parent: opt your child into the Election Analyst Project. Studying a real election, the parties and candidates, the campaigns and their funding, the electoral rules (winner-take-all, primaries, the Electoral College), and who voted, then evaluating how well the system served democracy and what reforms might help, directly develops core C3 Framework civics concepts: political parties, electoral systems, campaigns and elections, civic participation, and how institutional rules shape political outcomes. Analyzing a real contest as a system, rather than a spectacle, builds civic literacy, current-events analysis, and the reasoning skills of an informed voter. It's rigorous, standards-aligned work that directly prepares your child for the responsibility of voting in a few short years.`,
          },
          identityQuestion: `If you become someone who understands how parties and elections actually work, who can see how the rules of the game shape outcomes, weigh debates about money and representation, and judge how well the system serves democracy, what kind of citizen does that make you, one who steps into voting as a thoughtful, informed participant who can use their voice wisely, that someone who enters the system confused or disengaged, voting on labels alone, never can?`,
        },

        {
          id: `l05-identity-hook`,
          type: `identity-hook`,
          headline: `Who is this lesson making you?`,
          prompt: `One sentence. No wrong answer.`,
          placeholder: `Someone who...`,
          examples: [
            `Someone who understands how the rules of an election shape its outcome.`,
            `A future voter who will choose thoughtfully, not just by party label.`,
            `Someone who can judge whether the system is serving democracy well.`,
          ],
          saveKey: `identity_responses_social_studies_11_12_05`,
        },

        {
          id: `l05-celebration`,
          type: `celebration`,
          guideText: `{name}. You've just made sense of the noisy, messy arena where democracy actually happens day to day, the world of parties, campaigns, and elections you'll soon step into yourself. You learned the surprising truth that the founders feared political parties and never wrote them into the Constitution, yet parties appeared almost immediately and exist in nearly every democracy, because they solve real problems: organizing competition, recruiting candidates, simplifying voter choices, holding power accountable through an opposition, and connecting citizens to government. You solved the puzzle of why America has just two dominant parties, not because Americans have only two opinions, but because winner-take-all rules push voters to consolidate, while proportional representation elsewhere lets many parties flourish, a powerful reminder that the rules of the game, not just opinions, shape outcomes. You walked through how elections actually work, primaries then general elections, expensive campaigns, and the unusual Electoral College, and saw that elections are how "consent of the governed" becomes a real, repeatable event. And you weighed five genuine debates, about two parties versus many, money as corruption versus free speech, and the Electoral College, without being handed a single answer, because these are live questions you'll help decide. In a few years, you'll vote within this very system, and now you'll do it as someone who understands it. Next, we lift our eyes beyond America's borders: how the United States acts in the world, the principles, history, and hard choices of foreign policy. Onward, {name}. — Atlas`,
          badge: `electoral-navigator`,
          badgeName: `Electoral Navigator`,
          xpEarned: 75,
          competencies: [
            `Understands what political parties are and the real functions they perform`,
            `Knows the founders feared parties, yet parties form in nearly every democracy`,
            `Understands why winner-take-all rules push the U.S. toward two dominant parties`,
            `Can distinguish winner-take-all from proportional representation and their effects`,
            `Knows how elections work: primaries, general elections, campaigns, and the Electoral College`,
            `Understands the debates over the two-party system, money in politics, and the Electoral College`,
            `Recognizes that election rules, not just opinions, shape political outcomes`,
          ],
          nextLessonPreview: {
            title: `Lesson 6: US Foreign Policy — History, Principles, and Practice`,
            hook: `How the United States acts in the world, and the hard choices behind every decision. A debate among many voices.`,
          },
        },
      ],
    },
  ],
};

export default SOCIAL_STUDIES_VOYAGER_L05;

if (import.meta.env?.DEV) {
  const l = SOCIAL_STUDIES_VOYAGER_L05.lessons[0];
  const mags = l.screens.filter((s) => s.type === `magazine`).length;
  const ps = l.screens.find((s) => s.type === `perspectives`)?.perspectives?.length ?? 0;
  const quiz = l.screens.find((s) => s.type === `quiz`)?.questions?.length ?? 0;
  console.log(`[LESSON-SS-VOYAGER-L05 ${VERSION}] "${l.title}" mags=${mags} perspectives=${ps} q=${quiz}`);
}
