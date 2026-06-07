// ─────────────────────────────────────────────────────────────────────────────
// SOCIAL STUDIES VOYAGER  |  L20 — Active Citizenship: Your Role in Democracy
// Age band : voyagers (11-12)   Guide: atlas (Bear)
// Standards: C3 Framework — D4 (Taking Informed Action)
// Interaction: PERSPECTIVES (5 civic challenges). Capstone. XP=100.
// ─────────────────────────────────────────────────────────────────────────────

const VERSION = "voyager-ss-l20-v1";

const SOCIAL_STUDIES_VOYAGER_L20 = {
  ageBand: `voyagers`,
  subjectId: `social_studies`,
  guide: `atlas`,

  lessons: [
    {
      id: `social-studies-11-12-20`,
      title: `Active Citizenship: Your Role in Democracy`,
      duration: 45,
      xpReward: 100,
      badge: `active-citizen`,
      badgeName: `Active Citizen`,

      screens: [
        {
          id: `l20-welcome`,
          type: `welcome`,
          guideText: `{name}, you've traveled the full arc of social studies in this band. You understand what history is and how it gets written — and how it gets distorted. You've mapped how geography and environment shape human societies. You've examined the sociology of how social structures shape individual lives, the dynamics of inequality, and how institutions reproduce advantage and disadvantage across generations. You've analyzed economic systems, political systems, and the ideological traditions that interpret them. You've built skills in evaluating sources, recognizing logical fallacies, navigating media, and reading across the political spectrum. All of that knowledge was preparation for this question: What do you do with it? We live in a historical moment of genuine democratic stress. Democratic institutions that took centuries to build are under pressure in ways that would have been unimaginable a generation ago. Authoritarian governments are consolidating in places that were transitioning to democracy. Disinformation campaigns are corroding the shared epistemic foundations that democratic deliberation requires. Economic inequality is deepening in ways that historically predict democratic erosion. Political polarization is making the compromise and mutual recognition that democracy requires increasingly difficult. None of this means democracy is doomed. History is full of periods of democratic stress followed by democratic renewal. But renewal doesn't happen automatically. It happens because citizens — informed, engaged, organized citizens — choose to make it happen. This is the lesson about what active citizenship looks like in practice: not abstract values, but specific skills, specific institutions, specific choices you can make as a person living in and responsible for a democratic society. Onward.`,
          headline: `Active Citizenship: Your Role in Democracy`,
          subtitle: `What it means to be an informed, engaged citizen in a democracy under stress — and what specific things you can do about it.`,
          visual: `/voyager-assets/social-studies/l20-welcome.webp`,
        },

        {
          id: `l20-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `What Democracy Requires`,
          paragraphs: [
            `Democracy is not a structure you inherit and maintain by existing — it is a set of practices that require ongoing participation, vigilance, and renewal. The institutions of democracy (elections, courts, a free press, civil liberties protections) create the conditions for democratic life, but they do not sustain themselves automatically.`,
            `Democratic theorists identify several conditions that healthy democracies require.`,
            `A functioning information environment: when citizens cannot agree on basic facts about the world, democratic deliberation breaks down. This is why the institutions of journalism, public education, and academic research — despite all their imperfections — are load-bearing elements of democratic societies.`,
          ],
          image: `/voyager-assets/social-studies/l20-s1-democracy.webp`,
          imageCaption: `DEMOCRACY requires ongoing participation, vigilance, and renewal — not just institutional structures. Democratic theorists identify several conditions for healthy democracy: a SHARED COMMITMENT TO THE RULES OF THE GAME (accepting fair election results, supporting the peaceful transfer of power); a FUNCTIONING INFORMATION ENVIRONMENT in which citizens can agree on basic facts; INSTITUTIONAL TRUST in the courts, free press, and civil liberties protections; and CIVIC PARTICIPATION through which citizens actively engage in democratic processes. Democratic institutions are load-bearing: when journalism, public education, and academic research are degraded or delegitimized, the capacity for informed collective decision-making degrades with them. Active citizenship is the practice of sustaining these conditions.`,
          vocab: [
            { word: `democratic backsliding`,
              definition: `The process by which democratic institutions gradually erode — through executive overreach, attacks on judicial independence, suppression of civil liberties, or delegitimization of the press — without a dramatic single event that constitutes a clear coup.`,
              audioPrompt: `Democratic backsliding, {name}, refers to the gradual erosion of democratic institutions rather than their sudden collapse. Political scientists have observed that in recent decades, democracy is more often ending through a slow process of institutional degradation than through dramatic coups. An elected leader begins concentrating executive power, then attacks the independence of courts, then delegitimizes the press, then changes electoral rules, then suppresses civil society organizations — each step individually defensible, but cumulatively amounting to the dismantling of democratic checks and balances. Understanding this process matters for active citizenship because it means the threats to democracy often don't look like threats until a lot of damage has already been done.` },
            { word: `civic legitimacy`,
              definition: `The widely shared belief that a political system's rules, institutions, and decisions are binding and deserving of compliance — the foundation of political authority in a democracy that does not rely primarily on coercion.`,
              audioPrompt: `Civic legitimacy, {name}, is the foundation of political authority in a democracy. Governments in democracies derive their authority not from force alone but from the belief among citizens that the political system and its rules deserve compliance. This legitimacy depends on a sense that the system is fair: that elections are conducted honestly, that laws apply equally to everyone, that institutions are accountable. When citizens lose faith in the legitimacy of political institutions, democratic governance becomes difficult to sustain. Maintaining and restoring civic legitimacy is one of the central challenges of democratic renewal — which is why attacks on election integrity, even false ones, are politically significant well beyond their immediate effects.` },
            { word: `political efficacy`,
              definition: `The belief that one's own political participation matters and can make a difference — that individual actions, aggregated with those of others, can actually influence political outcomes.`,
              audioPrompt: `Political efficacy, {name}, is the belief that your political participation matters. Research consistently shows that political efficacy is one of the strongest predictors of civic engagement: people who believe their participation can make a difference are far more likely to vote, volunteer, organize, and advocate than people who believe their participation is futile. This creates a self-fulfilling dynamic: when people disengage because they believe nothing will change, things are indeed less likely to change, which reinforces disengagement. Understanding political efficacy matters because democratic cynicism — the feeling that the system is too corrupt or broken to participate in — is itself a political outcome that benefits those who prefer low civic engagement.` },
          ],
        },

        {
          id: `l20-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Forms Of Democratic Participation`,
          paragraphs: [
            `Democratic participation is not just voting, though voting matters enormously. Elections are the most direct mechanism through which citizens exercise collective power, and turnout differences between groups often determine outcomes. But elections happen infrequently, and democratic life happens every day.`,
            `Local civic engagement is often where individual citizens have the most impact — and where participation rates are lowest. School boards, city councils, zoning boards, and local government agencies make decisions that directly shape daily life. These institutions are accessible to ordinary citizens in ways that national politics rarely is.`,
            `Civil society organizations — nonprofits, advocacy groups, unions, religious communities, civic associations, neighborhood groups — are the connective tissue of democratic life. Alexis de Tocqueville, observing American democracy in the 1830s, argued that the vitality of American voluntary associations was the most important feature of its democratic character.`,
          ],
          image: `/voyager-assets/social-studies/l20-s2-participation.webp`,
          imageCaption: `DEMOCRATIC PARTICIPATION is not just voting — it encompasses the full range of civic activities through which citizens exercise collective power. VOTING is the most direct mechanism of electoral democracy; turnout differences between groups often determine outcomes. LOCAL CIVIC ENGAGEMENT — school boards, city councils, zoning boards, local agencies — is often where individual citizens have the most impact, but participation rates are lowest. CIVIL SOCIETY ORGANIZATIONS — nonprofits, advocacy groups, unions, religious communities, civic associations — are the connective tissue of democratic life. Alexis de Tocqueville argued in the 1830s that the vitality of voluntary associations was the most important feature of American democratic character. ADVOCACY AND ORGANIZING — contacting elected officials, participating in campaigns, building coalitions — translate individual concerns into collective political power.`,
          vocab: [
            { word: `civil society`,
              definition: `The network of voluntary organizations, associations, and institutions — nonprofits, advocacy groups, religious organizations, unions, civic associations — that exist between the state and the market and provide infrastructure for democratic participation.`,
              audioPrompt: `Civil society, {name}, refers to the network of voluntary organizations and associations that exist between the state and the market. Religious congregations, neighborhood associations, advocacy groups, unions, professional associations, charitable organizations, and civic clubs are all part of civil society. These organizations matter for democracy in multiple ways: they provide spaces where citizens practice civic skills, build social trust, and develop political voice; they aggregate individual concerns into collective political demands that can be heard by governments; they check state power through independent advocacy and accountability; and they provide services and community that governments often cannot. The health of civil society is a reliable indicator of democratic health — authoritarian governments consistently work to restrict, defund, or control civil society organizations.` },
            { word: `constituent power`,
              definition: `The collective political power that citizens have in relation to their elected representatives — the power to vote them in or out, to contact them, to organize pressure, and to hold them accountable between elections.`,
              audioPrompt: `Constituent power, {name}, is the collective political power that citizens hold in relation to the representatives they elect. This is not just the power to vote — it is the ongoing relationship between citizens and their elected officials throughout the term. Elected officials track constituent contacts; they hold town halls; they watch what their constituents care about, because their reelection depends on it. Research on congressional offices shows that constituent contacts on specific issues have significant effects on how legislators vote. Most citizens dramatically underestimate their constituent power — they believe their elected officials don't care about individual contacts, when in practice political offices track constituent opinion carefully and respond to genuine pressure campaigns.` },
            { word: `collective action problem`,
              definition: `The difficulty in achieving cooperation when individual incentives lead to outcomes that are worse for everyone than what could be achieved through coordinated action — a challenge that civil society organizations and democratic institutions are designed to help solve.`,
              audioPrompt: `A collective action problem, {name}, is a situation where individual rational choices lead to outcomes that are worse for everyone than what could be achieved through coordination. Classic examples: if everyone overfishes because they each rationally want to maximize their catch, the fishery collapses, making everyone worse off than if they had coordinated to fish sustainably. Democratic institutions and civil society organizations exist partly to help citizens solve collective action problems that individuals can't solve alone: creating shared rules for resource use, coordinating political action, aggregating individual preferences into collective decisions, and enforcing agreements so everyone benefits from cooperation rather than being exploited by defectors.` },
          ],
        },

        {
          id: `l20-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Social Movements And Democratic Change`,
          paragraphs: [
            `The most consequential expansions of democratic rights in history have come from organized social movements, not from the spontaneous generosity of those in power.`,
            `Effective social movements share identifiable features. They build broad coalitions across different constituencies rather than narrowing to a single identity or grievance.`,
            `Latin America has produced many of the world's most significant recent social movements — the labor movement in Brazil that helped end military dictatorship, the Mothers of the Plaza de Mayo in Argentina who demanded accountability for the disappeared, the Pink Tide of leftist political movements across the continent, and the Zapatista movement in Mexico that`,
          ],
          image: `/voyager-assets/social-studies/l20-s3-movements.webp`,
          imageCaption: `SOCIAL MOVEMENTS have driven the most consequential expansions of democratic rights in history — not spontaneous generosity from those in power. EFFECTIVE SOCIAL MOVEMENTS share identifiable features: they build broad coalitions across different constituencies; they combine DISRUPTIVE TACTICS (marches, strikes, civil disobedience) that create political pressure with INSTITUTIONAL TACTICS (litigation, legislation, electoral organizing) that translate pressure into lasting change; and they articulate a clear moral vision that expands the boundaries of who counts in democratic society. LATIN AMERICAN SOCIAL MOVEMENTS include the labor movement that helped end Brazilian military dictatorship, the Mothers of the Plaza de Mayo demanding accountability for the disappeared, and the Zapatista movement that put indigenous rights on the global agenda. Democratic change is a human phenomenon, not uniquely American or European.`,
          vocab: [
            { word: `civil disobedience`,
              definition: `The deliberate, nonviolent refusal to comply with unjust laws or governmental authority as a form of political protest — a tactic with a long history in democratic social movements from Thoreau to Gandhi to the Civil Rights Movement.`,
              audioPrompt: `Civil disobedience, {name}, is the deliberate, nonviolent refusal to comply with laws or government authority considered unjust. The term comes from Henry David Thoreau, who refused to pay taxes to protest slavery. Gandhi developed it as a mass political strategy in India's independence movement. Martin Luther King Jr. and the Civil Rights Movement used it systematically against segregation. The logic of civil disobedience is that openly breaking an unjust law, accepting the legal consequences, and appealing to the conscience of the broader society creates moral and political pressure that ordinary legal channels don't. It works when it makes the costs of maintaining an unjust system visible and when the injustice of the law being broken is self-evident to onlookers. It requires discipline: violence by protesters typically undercuts the moral authority that civil disobedience depends on.` },
            { word: `coalition building`,
              definition: `The process of bringing together diverse groups, constituencies, and organizations around a shared goal — essential for social movements because durable political change requires broader support than any single group can generate alone.`,
              audioPrompt: `Coalition building, {name}, is the process of bringing together diverse groups around a shared political goal. Effective coalitions combine groups that might not agree on everything but share enough common interest to act together on a specific issue. The labor-civil rights alliance in 20th century America brought together white union workers and Black civil rights activists on economic issues where their interests aligned, despite racial tensions. The climate movement today is attempting to build coalitions between environmental groups, labor unions concerned about green jobs, indigenous communities defending their lands, and young people demanding a livable future. Building effective coalitions requires identifying shared interests, negotiating differences, creating decision-making processes that all coalition members accept as legitimate, and maintaining unity in the face of opposition attempts to divide.` },
            { word: `nonviolent resistance`,
              definition: `A strategic approach to political conflict that deliberately refrains from physical violence — not as moral passivity but as a disciplined political strategy that has historically shown greater effectiveness than violent resistance in achieving democratic goals.`,
              audioPrompt: `Nonviolent resistance, {name}, is a strategic approach to political conflict that refrains from physical violence — but this doesn't mean passivity. Research by political scientists Erica Chenoweth and Maria Stephan found that nonviolent campaigns have historically been roughly twice as likely to succeed as violent campaigns. They argue this is because nonviolent campaigns are able to attract far broader participation — including from groups that won't engage in violence — and because they make it much harder for governments to justify brutal repression. Understanding nonviolent resistance as a strategy, not just a moral choice, helps explain why movements like Gandhi's independence campaign and the Civil Rights Movement chose their tactics deliberately. They weren't being naive about power; they were using the form of resistance most likely to work.` },
          ],
        },

        {
          id: `l20-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Civic Life Across Borders`,
          paragraphs: [
            `Many of the most important challenges facing democratic societies in the twenty-first century cannot be solved by any single nation acting alone.`,
            `This creates a new dimension of citizenship: global citizenship. Not in the sense of abandoning national identity or loyalty, but in the sense of recognizing obligations and connections that extend beyond national borders.`,
            `Latin America's relationship to these global institutions is complicated and instructive.`,
          ],
          image: `/voyager-assets/social-studies/l20-s4-global.webp`,
          imageCaption: `CIVIC LIFE ACROSS BORDERS is an emerging dimension of citizenship. Many of the most important challenges facing democratic societies cannot be solved by any single nation acting alone — CLIMATE CHANGE, PANDEMIC PREPAREDNESS, NUCLEAR WEAPONS, ECONOMIC INEQUALITY driven by global financial systems, MIGRATION driven by war, poverty, and climate disruption all require transnational political responses. GLOBAL CITIZENSHIP means recognizing obligations and connections that extend beyond national borders without abandoning national identity or loyalty. INTERNATIONAL INSTITUTIONS — the United Nations, International Criminal Court, World Trade Organization — were attempts to create governance mechanisms for an interconnected world. LATIN AMERICA's relationship to these institutions is instructive: the region has experienced both the benefits of international integration and its costs, including economic conditionality, foreign intervention, and trade rules that disadvantaged developing economies.`,
          vocab: [
            { word: `transnational advocacy`,
              definition: `Political organizing and advocacy that works across national boundaries — connecting activists, organizations, and movements in different countries around shared global issues like human rights, climate, or labor standards.`,
              audioPrompt: `Transnational advocacy, {name}, refers to political organizing that connects activists and organizations across national boundaries. The international human rights movement is a prime example: organizations like Amnesty International and Human Rights Watch document abuses in countries where local activists face repression, and build international pressure campaigns that create political costs for governments committing those abuses. The global climate movement connects activists from the Pacific islands facing sea level rise, Indigenous communities in the Amazon defending forests, and urban young people in wealthy countries demanding policy change, around a shared recognition that the crisis is global. Transnational advocacy doesn't replace national politics — national governments still make most consequential decisions — but it creates accountability mechanisms and solidarity networks that purely national advocacy cannot generate.` },
            { word: `democratic solidarity`,
              definition: `The commitment to supporting democratic movements, institutions, and norms in other countries — recognizing that democracy is a global project and that its erosion in one place tends to embolden authoritarian actors elsewhere.`,
              audioPrompt: `Democratic solidarity, {name}, is the recognition that democracy is a global project, not just a domestic one. When democratic institutions are threatened in Hungary, Brazil, India, or the United States, that matters for democracy everywhere, because authoritarian governments learn from each other, support each other, and undermine international norms that protect democracy globally. Democratic solidarity means being attentive to democratic backsliding beyond your own country's borders, supporting civil society and independent journalism in countries under authoritarian pressure, and resisting foreign policy that sacrifices democratic allies for strategic convenience. For citizens, it can mean advocacy for human rights abroad, solidarity with democratic movements in authoritarian countries, and demanding that your own government's foreign policy reflect democratic values rather than contradicting them.` },
            { word: `global justice`,
              definition: `The principle that justice cannot be fully achieved within national borders alone — that global economic structures, climate responsibility, and human rights require considerations of fairness and accountability that extend across national boundaries.`,
              audioPrompt: `Global justice, {name}, is the principle that justice doesn't stop at national borders. Global economic structures shape who is wealthy and who is poor in ways that no single national government can fully address. Climate change will fall most severely on populations, especially in the Global South, that have contributed least to it — raising profound questions of responsibility and fairness. Human rights norms assert that certain protections belong to all people regardless of where they were born or what government rules them. Global justice as a concept asks: what do people owe each other across national boundaries? What are the obligations of wealthy nations to poorer ones? What does it mean for the global economic system to be fair? These are contested questions, but they are unavoidable ones for anyone thinking seriously about democratic values at a global scale.` },
          ],
        },

        {
          id: `l20-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Your Civic Identity`,
          paragraphs: [
            `Pull it together. Democracy requires not just institutions but citizens — people who understand how it works, value it enough to protect it, and possess the skills to participate in it.`,
            `Active citizenship is not one thing. It includes voting and staying informed about public affairs. It includes local engagement — the school board, city council, and community organizations where individual impact is greatest. It includes civil society participation in the organizations that aggregate individual voices into collective political power.`,
            `This band began with the question of how we know the past — how the stories we tell about history shape our understanding of the present and the possibilities we see for the future. It ends with the question of what you do about it. You now have tools that most adults around you don't have. The question is not whether to use them, but how.`,
          ],
          image: `/voyager-assets/social-studies/l20-s5-civic.webp`,
          imageCaption: `YOUR CIVIC IDENTITY is the culmination of everything in this band. DEMOCRACY requires not just institutions but citizens who understand how it works, value it enough to protect it, and possess the skills to participate in it. ACTIVE CITIZENSHIP includes voting and staying informed; LOCAL ENGAGEMENT at the school board, city council, and community organizations where individual impact is greatest; CIVIL SOCIETY PARTICIPATION in organizations that aggregate individual voices into collective political power; ADVOCACY AND ORGANIZING when specific issues demand action; and for some people at some times, the harder forms of civic engagement: running for office, organizing social movements, and engaging in sustained campaigns for structural change. This band began with HOW WE KNOW THE PAST. It ends with the question of WHAT YOU DO ABOUT IT. The arc of history doesn't bend toward justice on its own.`,
          vocab: [
            { word: `informed citizenship`,
              definition: `The practice of engaging in democratic life with the knowledge, source evaluation skills, and media literacy necessary to form well-grounded views and make meaningful contributions to collective self-governance.`,
              audioPrompt: `Informed citizenship, {name}, is what this entire band has been building toward. It's the practice of democratic engagement grounded in genuine knowledge rather than tribal reflexes or media manipulation. Informed citizens understand how historical forces shaped the present; how geographic and economic structures shape political possibilities; how social institutions reproduce inequality; how to evaluate sources critically; how to read across the ideological spectrum; and how to distinguish legitimate value disagreements from factual errors. None of this tells you what political positions to hold — those are yours to develop based on your own values and reasoning. But it equips you to hold whatever positions you hold on a more solid epistemic foundation, and to engage with people who disagree with you more honestly and productively than most public discourse currently manages.` },
            { word: `civic courage`,
              definition: `The willingness to participate in democratic life even when it is uncomfortable — to engage with difficult issues, voice unpopular views, challenge injustice, and hold positions based on evidence rather than social pressure.`,
              audioPrompt: `Civic courage, {name}, is one of the hardest and most important civic virtues. It means being willing to voice positions you've reasoned your way to even when they're socially costly, to challenge injustice even when staying quiet would be easier, to engage with difficult and contested issues rather than retreating to the safety of consensus. It means being honest in public about uncertainty when certainty would be more comfortable. It means standing by your commitments under political pressure. Civic courage doesn't mean being unnecessarily provocative or indifferent to how your participation affects others. It means refusing to let social discomfort veto your civic engagement. Democratic societies need citizens who will do hard things — and the decision to be that kind of citizen is one of the most consequential choices a person can make.` },
            { word: `intergenerational citizenship`,
              definition: `The understanding that democratic citizenship involves obligations to future generations — including making political choices that protect democratic institutions, rights, and the ecological systems that future citizens will inherit.`,
              audioPrompt: `Intergenerational citizenship, {name}, is the recognition that democracy is not just something you inherit but something you hold in trust for those who come after you. Every generation inherits democratic institutions, rights, and norms built by people who lived before them — often at great cost. Those institutions can be strengthened, maintained, or eroded, and the choices made by citizens today will shape what the next generation inherits. This is true of democratic institutions, but also of ecological systems: the climate choices made in the next two decades will determine the conditions of life for billions of people who haven't been born yet. Thinking of citizenship as intergenerational means taking seriously the responsibility to leave democratic institutions and natural systems in better shape than you found them.` },
          ],
        },

        {
          id: `l20-interaction`,
          type: `perspectives`,
          headline: `Five Civic Challenges: Your Perspective`,
          instruction: `Each challenge below presents a real civic dilemma where thoughtful people disagree. Read each challenge, consider the competing values at stake, and articulate your own reasoned position — using the evidence and analytical frameworks from across this band.`,
          perspectives: [
            {
              id: `persp-1`,
              title: `The Redistricting Dilemma`,
              scenario: `A state legislature is redrawing congressional district boundaries after the census. The party in power draws maps that are legal under current law but clearly designed to maximize their own representation — a practice known as partisan gerrymandering. The other party did the same thing when they were in power. Reformers are pushing for an independent redistricting commission that would draw maps without partisan input. Critics of the commission argue that redistricting is inherently political and that taking it out of elected officials' hands is itself antidemocratic.`,
              viewpoints: [
                {
                  label: `Pro-Commission`,
                  argument: `Partisan gerrymandering is fundamentally antidemocratic: it allows the party in power to choose their voters rather than voters choosing their representatives, undermining the basic principle of equal representation. Independent commissions in California, Colorado, and other states have produced more competitive districts and restored genuine competition without meaningful loss of democratic accountability.`,
                },
                {
                  label: `Pro-Legislature Control`,
                  argument: `Redistricting is inherently a political decision about how to aggregate communities and interests, and the people making it should be democratically accountable. Independent commissions are not neutral — their members bring their own perspectives and make political choices. At least when legislatures draw maps, voters can hold those decisions accountable at the ballot box.`,
                },
              ],
              analysisPrompts: [
                `What democratic values are in tension in this dilemma?`,
                `What does the evidence from states with independent commissions suggest?`,
                `How would you rule on this issue, and what reasoning supports your position?`,
              ],
            },
            {
              id: `persp-2`,
              title: `The Protest and Order Dilemma`,
              scenario: `A city with a significant homeless population has a new encampment of approximately 200 people on public land near a commercial district. Business owners are asking the city to clear the encampment, citing public safety and economic concerns. Homeless advocates argue that clearing the encampment without providing adequate housing alternatives simply moves people with nowhere to go into a more precarious situation. Civil liberties advocates argue that people have constitutional rights to be in public spaces. The city has limited shelter space and a long affordable housing waitlist.`,
              viewpoints: [
                {
                  label: `Prioritize Clearing`,
                  argument: `Public spaces should be accessible to all residents, not controlled by encampments that create public health risks and exclude other users. The city can address the underlying housing problem over time while maintaining public order now. Allowing encampments to persist sends a signal that the city cannot enforce basic public space norms, which invites further disorder.`,
                },
                {
                  label: `Prioritize Housing First`,
                  argument: `Clearing encampments without providing housing alternatives simply criminalizes homelessness without addressing its causes. Research consistently shows that Housing First approaches — providing stable housing without preconditions — are more effective and less costly than enforcement-first approaches. The city should not clear the encampment until it can offer meaningful housing alternatives.`,
                },
              ],
              analysisPrompts: [
                `What does the research evidence say about effective approaches to homelessness?`,
                `What rights and interests are in tension, and how do you weigh them?`,
                `What is the role of democratic deliberation and local government in addressing this issue?`,
              ],
            },
            {
              id: `persp-3`,
              title: `The Free Speech and Harm Dilemma`,
              scenario: `A social media platform must decide how to handle content that repeatedly spreads false health information — specifically, false claims about vaccine safety that public health authorities have linked to declining vaccination rates and increased disease outbreaks. The platform can: (a) do nothing, citing free speech principles; (b) add warning labels to disputed health information; (c) reduce the algorithmic amplification of disputed health claims without removing them; (d) remove content that public health authorities identify as dangerous misinformation.`,
              viewpoints: [
                {
                  label: `Free Expression Priority`,
                  argument: `Platforms that begin removing "dangerous misinformation" inevitably face pressure to expand the category to include politically inconvenient speech. Who decides what is dangerous? Government health agencies have their own institutional interests. The appropriate response to false speech is more speech and better counter-messaging, not suppression. Warning labels are an appropriate middle ground, but removal crosses a line that will be very difficult to walk back.`,
                },
                {
                  label: `Public Health Priority`,
                  argument: `The analogy to traditional free speech doesn't translate to social media. There is no "marketplace of ideas" on platforms that algorithmically amplify emotional content. False health information isn't just speech — it has measurable public health consequences, including preventable deaths. The question is not whether to regulate but how: and removing demonstrably false claims about vaccine safety from algorithmic amplification falls well within the bounds of reasonable platform governance.`,
                },
              ],
              analysisPrompts: [
                `What are the risks on both sides of this decision, and how do you weigh them?`,
                `How does the distinction between removing content and reducing its amplification matter here?`,
                `What democratic values bear on a private company's content moderation decisions?`,
              ],
            },
            {
              id: `persp-4`,
              title: `The Electoral Reform Dilemma`,
              scenario: `Your state is considering two electoral reforms that would dramatically change how elections work. Reform A is ranked-choice voting (RCV), in which voters rank candidates by preference, and the winner is determined through a runoff process that eliminates last-place candidates and redistributes their votes until a candidate has a majority. Reform B is a nonpartisan top-two primary, in which all candidates compete on a single primary ballot regardless of party, and the top two advance to the general election. Proponents of each claim their reform would reduce polarization and produce more moderate winners. Critics argue the reforms are complex, favor incumbents, or don't address the underlying causes of polarization.`,
              viewpoints: [
                {
                  label: `Pro-RCV`,
                  argument: `Ranked-choice voting solves the spoiler problem — it ends the situation where third-party candidates draw votes away from major-party candidates they are ideologically closer to. It also encourages more civil campaigns, since candidates want to be voters' second choice, not just their first. Cities and states that have adopted RCV have generally reported high voter satisfaction and no significant evidence of increased confusion.`,
                },
                {
                  label: `Pro-Top-Two Primary`,
                  argument: `The top-two primary forces candidates to compete for general-election voters from the start, not just their party primary base. In highly partisan states, the winner of a party primary in a safe seat effectively wins the general election — meaning nominees are chosen by a small, highly ideological primary electorate. Top-two expands the deciding electorate and has produced more moderate outcomes in California, which has used it since 2012.`,
                },
              ],
              analysisPrompts: [
                `What are the incentive structures that current electoral rules create, and how do the proposed reforms change them?`,
                `How would you design an ideal electoral system if you were starting from scratch, and why?`,
                `What evidence would you want to see before supporting either reform?`,
              ],
            },
            {
              id: `persp-5`,
              title: `The Global Responsibility Dilemma`,
              scenario: `A massive famine is developing in a country governed by an authoritarian regime that has deliberately restricted food aid from reaching areas controlled by opposition groups. International organizations are asking wealthy democracies to contribute $2 billion in emergency humanitarian aid. The authoritarian government has agreed to allow a portion of the aid, but aid organizations warn that significant amounts will be diverted to regime loyalists and that aid flows could extend the regime's ability to continue the conflict. Human rights organizations are divided between those who argue that withholding aid punishes civilians for their government's decisions and those who argue that aid without conditions enables authoritarian regimes.`,
              viewpoints: [
                {
                  label: `Provide Aid Unconditionally`,
                  argument: `The people facing starvation have not chosen their government and should not be punished for it. The moral imperative to prevent mass death overrides the political concerns about how aid is used. Aid organizations with experience in conflict settings can minimize diversion; they should be funded to do this work rather than given reasons not to.`,
                },
                {
                  label: `Aid with Conditions`,
                  argument: `Humanitarian aid that flows to authoritarian regimes extends their capacity to maintain power and continue the conflict that created the famine. Aid without conditions is not neutral: it makes donors complicit in the regime's strategy. Conditioned aid — tied to specific monitoring requirements, direct distribution to affected populations, and accountability mechanisms — is both more ethical and more effective.`,
                },
              ],
              analysisPrompts: [
                `What are the competing ethical frameworks at stake in this dilemma?`,
                `What does the history of humanitarian aid in conflict settings suggest about likely outcomes?`,
                `As an engaged citizen, how would you want your government to respond, and why?`,
              ],
            },
          ],
        },

        {
          id: `l20-quiz`,
          type: `quiz`,
          headline: `Active Citizenship: What You Know`,
          questions: [
            {
              id: `q1`,
              type: `mc`,
              text: `Democratic backsliding refers to a specific pattern of democratic erosion. What distinguishes democratic backsliding from a traditional coup or military takeover?`,
              options: [
                `Democratic backsliding involves the gradual erosion of democratic institutions through legal or semi-legal means by elected leaders, rather than a dramatic single event that clearly constitutes a seizure of power`,
                `Democratic backsliding refers specifically to declining voter turnout over time, which weakens the democratic mandate of elected governments without any single actor choosing to undermine democratic institutions`,
                `Democratic backsliding occurs when democratic governments enact policies that are unpopular with the public, causing citizens to lose faith in democratic institutions and become more accepting of authoritarian alternatives`,
                `Democratic backsliding is caused by economic crises that reduce public support for democratic governance, making citizens more receptive to authoritarian leaders who promise stability and economic recovery`,
              ],
              correctIndex: 0,
              explanation: `Democratic backsliding refers to the gradual erosion of democratic institutions through legal or semi-legal means by elected leaders — concentrating executive power, attacking judicial independence, delegitimizing the press — rather than a dramatic coup. This matters because it often doesn't look like a clear threat until substantial damage has been done, making it harder for citizens and institutions to mobilize opposition in time.`,
            },
            {
              id: `q2`,
              type: `mc`,
              text: `Research on political efficacy consistently shows it is one of the strongest predictors of civic engagement. What does this finding suggest about the relationship between cynicism and democratic participation?`,
              options: [
                `Political cynicism is a rational response to genuine corruption in democratic systems, and therefore civic educators should focus on systemic reform rather than encouraging participation in a broken system`,
                `Political cynicism functions as a self-fulfilling prophecy: when citizens disengage because they believe nothing will change, democratic outcomes are less likely to reflect their interests, which reinforces the feeling that participation is futile`,
                `Political cynicism is primarily caused by media coverage that emphasizes conflict and dysfunction, suggesting that media reform rather than civic education is the most important lever for improving democratic participation`,
                `Political cynicism is higher among younger citizens because they have less experience with the political system, and it naturally declines as people age and develop a more realistic assessment of what civic participation can achieve`,
              ],
              correctIndex: 1,
              explanation: `Political cynicism functions as a self-fulfilling prophecy: disengagement based on the belief that nothing will change makes it less likely that things will change, which confirms the original belief. This is why democratic cynicism — the feeling that the system is too corrupt to participate in — benefits those who prefer low civic engagement. Political efficacy is a precondition for effective democratic participation.`,
            },
            {
              id: `q3`,
              type: `mc`,
              text: `Research by political scientists Erica Chenoweth and Maria Stephan found that nonviolent campaigns have historically been roughly twice as likely to succeed as violent campaigns. What explanation did they offer for this finding?`,
              options: [
                `Governments are legally prohibited from using violent force against nonviolent protesters under international human rights law, giving nonviolent movements a legal advantage that violent movements don't have`,
                `Nonviolent campaigns are less threatening to the economic interests of elites, making it more likely that members of the ruling class will switch sides and support the movement rather than resisting its demands`,
                `Nonviolent campaigns attract far broader participation than violent ones, including from groups that won't engage in violence, and make it harder for governments to justify brutal repression, increasing their political effectiveness`,
                `Nonviolent campaigns receive more favorable media coverage than violent ones, which generates international pressure that forces governments to negotiate with the movement rather than simply suppressing it militarily`,
              ],
              correctIndex: 2,
              explanation: `Chenoweth and Stephan argue nonviolent campaigns succeed more often because they can attract much broader participation — including from groups who won't engage in violence — and because nonviolent tactics make it much harder for governments to justify brutal repression without suffering serious political costs. This makes nonviolent resistance not just a moral choice but a strategically effective one.`,
            },
            {
              id: `q4`,
              type: `mc`,
              text: `Alexis de Tocqueville, observing American democracy in the 1830s, argued that the most important feature of its democratic character was the vitality of voluntary associations. What subsequent research has confirmed about civil society organizations and democracy?`,
              options: [
                `Civil society organizations are most important in their role as interest groups that lobby governments on behalf of specific constituencies, making democratic government more responsive to organized interests`,
                `Civil society organizations primarily serve to check government power through litigation and advocacy, functioning as a fourth branch of government that holds the executive, legislative, and judicial branches accountable`,
                `Participation in civil society organizations builds the civic skills, social trust, and political networks that make democracy function, and the health of civil society is a reliable indicator of democratic health overall`,
                `Civil society organizations are most valuable in developing democracies, where formal institutions are weaker, but become less necessary as democracies mature and develop strong formal institutions for civic participation`,
              ],
              correctIndex: 2,
              explanation: `Research confirms Tocqueville's observation: civil society organizations build civic skills (practicing democratic deliberation, coalition building, collective decision-making), social trust (bridging across social divisions), and political networks (connecting citizens with political power). The health of civil society is a reliable indicator of democratic health — authoritarian governments consistently work to restrict or control civil society organizations precisely because of this connection.`,
            },
            {
              id: `q5`,
              type: `mc`,
              text: `The concept of constituent power refers to the collective political power that citizens hold in relation to their elected representatives. Which of the following best describes what research shows about how elected officials respond to constituent contacts?`,
              options: [
                `Elected officials rarely respond to constituent contacts because they are primarily motivated by campaign donations and lobbying from organized interest groups rather than the views of ordinary constituents`,
                `Political offices track constituent opinion carefully and respond to genuine pressure campaigns, meaning constituent contacts on specific issues have significant effects on how legislators vote and what policies they prioritize`,
                `Elected officials respond primarily to contacts from constituents who are active party members, since these voters are most likely to participate in primary elections that determine the official's ability to remain in office`,
                `Constituent contacts are most effective when they occur during election campaigns, but have limited effect between elections because legislators face no immediate political consequences for ignoring constituent opinion`,
              ],
              correctIndex: 1,
              explanation: `Research on congressional offices shows that political offices track constituent opinion carefully, that constituent contacts have significant effects on legislative behavior, and that most citizens dramatically underestimate their constituent power. Elected officials are accountable to their constituents throughout their term, not just during elections, and sustained constituent pressure campaigns have demonstrable effects on legislative priorities and votes.`,
            },
            {
              id: `q6`,
              type: `mc`,
              text: `The lesson describes effective social movements as combining both disruptive tactics and institutional tactics. What is the reasoning for why successful movements need both?`,
              options: [
                `Disruptive tactics are necessary to attract media attention, while institutional tactics are necessary to maintain public support — the combination allows movements to generate initial visibility while sustaining it over time`,
                `Disruptive tactics create political pressure that makes the status quo costly to maintain, while institutional tactics translate that pressure into lasting legal and policy changes that outlive the movement's moment of peak activism`,
                `Disruptive tactics appeal to younger, more radical activists within a movement, while institutional tactics appeal to older, more moderate members — the combination maintains movement unity across generational divides`,
                `Disruptive tactics are effective early in a movement's development when it lacks institutional access, while institutional tactics become more effective later as the movement gains credibility and insider relationships`,
              ],
              correctIndex: 1,
              explanation: `Effective movements need both disruptive tactics (which create political pressure and make the status quo costly to maintain) and institutional tactics (which translate that pressure into lasting legal and policy changes). Disruption without institutional engagement often dissipates without producing durable change. Institutional engagement without pressure often fails to overcome the inertia of entrenched interests. The civil rights movement's combination of marches and civil disobedience with litigation and legislative organizing is the classic example of this combination.`,
            },
            {
              id: `q7`,
              type: `mc`,
              text: `The concept of intergenerational citizenship asserts that democratic citizenship involves obligations to future generations. What does this concept imply about how citizens should evaluate current political decisions?`,
              options: [
                `Citizens should always prioritize long-term consequences over short-term ones, since the effects of political decisions on future generations are inherently more important than their effects on currently living people`,
                `Current generations should not be bound by the choices of previous generations, meaning citizens have a duty to revisit and potentially overturn inherited constitutional structures that no longer serve contemporary needs`,
                `Political decisions should be evaluated not only on their immediate effects but also on how they affect the democratic institutions, rights, and ecological systems that future citizens will inherit and depend upon`,
                `Citizens in democracies have an obligation to formally represent future generations through specific political institutions like parliamentary future-generations commissioners that give not-yet-born citizens political standing`,
              ],
              correctIndex: 2,
              explanation: `Intergenerational citizenship means evaluating political decisions not only on their immediate effects but also on how they affect what future citizens will inherit: democratic institutions, civil liberties protections, ecological systems. This doesn't always mean prioritizing long-term over short-term (option A) — sometimes the right long-term choice and the right short-term choice are the same. It means expanding the frame of evaluation to include effects on those who don't yet have a vote.`,
            },
            {
              id: `q8`,
              type: `mc`,
              text: `The lesson argues that informed citizenship — grounded in historical knowledge, source evaluation skills, and media literacy — is foundational to democratic participation. What does this argument imply about the relationship between social studies education and democracy?`,
              options: [
                `Social studies education is valuable primarily for preparing students for civic participation after they reach voting age, with limited relevance to civic life before that developmental milestone`,
                `Social studies education is one of the most politically contested areas of the curriculum because those in power always prefer citizens who lack the knowledge to critically evaluate existing institutions and power structures`,
                `Social studies education that develops genuine historical understanding, source evaluation skills, and media literacy produces citizens better equipped for the kind of informed deliberation that healthy democracy requires`,
                `Social studies education is most effective at building civic capacity when it focuses on specific practical skills like voter registration and contacting elected officials rather than broader conceptual knowledge`,
              ],
              correctIndex: 2,
              explanation: `The lesson's argument is that informed citizenship — with genuine historical understanding, source evaluation skills, and media literacy — is foundational to the kind of informed deliberation that democracy requires. Citizens equipped with these skills are better able to evaluate political claims, resist manipulation, engage seriously with people who disagree with them, and make the kinds of reasoned political judgments that democratic self-governance depends on.`,
            },
            {
              id: `q9`,
              type: `tf`,
              text: `Partisan gerrymandering — the practice of drawing electoral district boundaries to favor the party in power — is illegal under United States federal law.`,
              options: [`True`, `False`],
              correctIndex: 1,
              explanation: `False. The United States Supreme Court ruled in Rucho v. Common Cause (2019) that partisan gerrymandering claims present a political question beyond federal courts' jurisdiction, meaning federal courts cannot strike down partisan gerrymanders as unconstitutional. Partisan gerrymandering remains legal under federal law, though some states have banned it through state constitutional provisions or independent redistricting commissions.`,
            },
            {
              id: `q10`,
              type: `inference`,
              text: `A country has an elected government, regular elections, universal suffrage, and a formal constitution protecting civil liberties. However, the governing party has systematically reduced funding for independent journalism, appointed party loyalists to the constitutional court, passed laws restricting civil society organizations that receive foreign funding, and changed electoral rules to disadvantage opposition candidates. What is the most accurate description of this country's democratic situation?`,
              options: [
                `The country is a fully functioning democracy because it maintains the formal institutional requirements of democracy: regular elections, universal suffrage, constitutional protections, and an elected government`,
                `The country should be classified as an authoritarian state because the governing party has undermined democratic checks and balances, demonstrating that formal democratic institutions can coexist with authoritarian governance in practice`,
                `The country is experiencing democratic backsliding: it retains formal democratic institutions while the government systematically degrades the conditions — independent press, judicial independence, civil society, fair electoral rules — that those institutions require to function democratically`,
                `The country's democratic situation cannot be evaluated without knowing whether the changes were made through legitimate legislative processes and with the support of a majority of citizens, since democratic legitimacy ultimately depends on majority will`,
              ],
              correctIndex: 2,
              explanation: `This scenario describes the classic pattern of democratic backsliding: retaining the formal institutions of democracy (elections, constitution, suffrage) while systematically degrading the conditions those institutions require to function democratically — independent journalism, judicial independence, civil society, fair electoral rules. Hungary under Viktor Orbán is frequently cited as a real-world example of this pattern. The formal presence of elections doesn't make a system democratic when the conditions for genuinely competitive elections have been systematically dismantled.`,
            },
          ],
        },

        {
          id: `l20-reflection`,
          type: `reflection`,
          headline: `Your Civic Identity`,
          prompts: [
            {
              id: `refl-1`,
              text: `Looking back across the full band — geography, history, sociology, economics, political systems, sources, media — what was the most important thing you learned? What changed in how you see the world?`,
              minWords: 50,
            },
            {
              id: `refl-2`,
              text: `What civic issue matters most to you? What knowledge from this band helps you understand it better?`,
              minWords: 40,
            },
            {
              id: `refl-3`,
              text: `Where do you have the most civic power right now, at your age, in your community? Where do you think you can actually make a difference?`,
              minWords: 35,
            },
            {
              id: `refl-4`,
              text: `What would your ideal informed adult civic life look like — what sources would you follow, what organizations would you participate in, what forms of engagement would be part of your routine?`,
              minWords: 40,
            },
            {
              id: `refl-5`,
              text: `The lesson argues that democracy requires citizens who understand it, value it, and actively defend it. Do you think most people in your community understand democracy well enough to defend it? What would change that?`,
              minWords: 40,
            },
            {
              id: `refl-6`,
              text: `The capstone challenge exercise asked you to take positions on genuinely difficult civic dilemmas. Which one was hardest for you to reason through, and why? What does that tell you about where your civic thinking needs more development?`,
              minWords: 40,
            },
          ],
        },

        {
          id: `l20-realworld`,
          type: `real-world`,
          headline: `Civic Action In Your World`,
          intro: `Active citizenship is not theoretical — it is what you actually do. These challenges move from understanding to action.`,
          challenges: [
            {
              id: `rw-1`,
              title: `Your Civic Map`,
              description: `Map the civic institutions in your community: elected officials at the local, state, and federal level who represent you; civil society organizations active on issues you care about; local media outlets; community meetings and government hearings that are open to the public. Write a one-page guide to civic participation in your specific community.`,
              difficulty: `medium`,
            },
            {
              id: `rw-2`,
              title: `Contact Your Representative`,
              description: `Identify a policy issue you care about. Research your elected representative's position on that issue. Write and send a letter or email to that representative articulating your position with specific evidence. Document the response you receive (or don't receive). Reflect on what the experience taught you about constituent power.`,
              difficulty: `medium`,
            },
            {
              id: `rw-3`,
              title: `The Civic Capstone Project`,
              description: `Identify a local problem — something about your school, neighborhood, or city that you think should change. Research the problem: who makes the relevant decisions, what are the obstacles to change, who are the stakeholders, what has been tried before. Develop a specific theory of change: what actions, by whom, could plausibly move things in the right direction? Present your analysis and theory of change in a 500-word written proposal.`,
              difficulty: `hard`,
            },
          ],
        },

        {
          id: `l20-identity`,
          type: `identity-hook`,
          headline: `Who Is This Lesson Making You?`,
          guideText: `{name}. You've finished this band. Think about what that means. You understand what history is, how it gets written, and how it gets distorted. You understand how geography shapes human society — how location, resources, and environment channel human development in ways that feel like nature but are actually deeply contingent. You understand sociology: how social structures shape individual lives in ways that feel like personal experience, how inequality is reproduced across generations through institutions that also do genuine good. You understand economics and political systems and the ideological traditions that interpret them. You know how to evaluate sources, recognize logical fallacies, navigate media, and read across the political spectrum. And now you know what active citizenship looks like — not abstractly, but in specific practices, specific institutions, specific choices. That is a substantial set of capacities. Most adults around you have some of it and not other parts. You have the whole framework. The question is what you do with it. Not someday, when you're older and more powerful. Now. You are not too young. The history of every significant democratic advancement has been full of young people who decided that the world needed to be different and started making it different with whatever power they had at the time. The arc of history doesn't bend toward justice automatically. It bends because people decide it should — and then do the work. You now know enough to do the work. I'll be with you.`,
          saveKey: `identity_responses_social_studies_11_12_20`,
        },

        {
          id: `l20-celebration`,
          type: `celebration`,
          headline: `Active Citizen Unlocked — Social Studies Voyager Complete`,
          guideText: `{name}. You've completed the Social Studies Voyager band. Twenty lessons. The full arc from how we know the past to what you do about the present. You now have a framework for understanding history, geography, sociology, economics, political systems, media, and civic participation that most adults do not have. These are not just academic credentials. They are the tools of an informed citizen — someone who can engage with the world's actual complexity rather than comfortable simplifications, who can evaluate evidence critically rather than accepting what confirms their existing views, and who understands enough about how democratic societies work to participate in them meaningfully. That's real. Use it.`,
          xpEarned: 100,
          badgeEarned: `active-citizen`,
          badgeName: `Active Citizen`,
        },
      ],
    },
  ],
};

export default SOCIAL_STUDIES_VOYAGER_L20;
