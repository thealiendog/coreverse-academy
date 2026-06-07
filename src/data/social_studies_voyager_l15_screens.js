// ─────────────────────────────────────────────────────────────────────────────
// SOCIAL STUDIES VOYAGER  |  L15 — Contemporary Global Issues: Climate, Migration, and Conflict
// Age band : voyagers (11-12)   Guide: atlas (Bear)
// Standards: C3 Framework (Global/Civics) — D2.Geo, D2.Civ
// Interaction: PERSPECTIVES (debate). Paragraphs ~330ch. 3 vocab/section.
// ─────────────────────────────────────────────────────────────────────────────

const VERSION = "voyager-ss-l15-v1";

const SOCIAL_STUDIES_VOYAGER_L15 = {
  ageBand: `voyagers`,
  subjectId: `social_studies`,
  guide: `atlas`,

  lessons: [
    {
      id: `social-studies-11-12-15`,
      title: `Contemporary Global Issues: Climate, Migration, and Conflict`,
      duration: 35,
      xpReward: 75,
      badge: `global-issues-thinker`,
      badgeName: `Global Issues Thinker`,

      screens: [
        {
          id: `l15-welcome`,
          type: `welcome`,
          guideText: `{name}, the previous lessons gave you the historical and structural tools: how economies work, how governments are built, how nations relate, how empires rose and fell, and how ideological competition shaped the twentieth century. Now we turn to the present and the future: the issues that will define your lifetime. Three challenges stand above all others in their scale, urgency, and complexity: climate change, migration, and violent conflict. These are not new issues. Humans have always lived in changing climates, moved across the earth, and organized violence. What's new is the scale, the speed, and the global interconnection. Climate change is the defining physical challenge of the twenty-first century: human activity has warmed the planet in ways that are already reshaping agriculture, sea levels, extreme weather, and the habitability of entire regions. The question is no longer whether climate change is happening but how fast, how severely, and what responses are adequate and feasible. Migration, too, has always been part of human experience, but the scale of contemporary movement, driven by conflict, climate, economic desperation, and family networks, has generated intense political conflicts in every region. And violent conflict, despite decades of declining interstate war, persists in new and old forms: civil wars, terrorism, great-power competition, and the emerging domain of cyberwarfare. Each of these issues involves genuine scientific and factual complexity. But they also involve deep value disagreements: about obligations to future generations, about what wealthy nations owe poorer ones, about sovereignty and human rights, about security and openness. That's why this lesson ends with a debate: because these are issues where reasonable people hold different views based on different values, not just different facts. Your generation will have to navigate and decide these questions in ways that previous generations did not fully resolve. Understanding the terrain, the facts, the stakes, and the genuine disagreements, is essential preparation. Onward.`,
          headline: `Contemporary Global Issues: Climate, Migration, and Conflict`,
          subtitle: `The three defining challenges of the twenty-first century: their causes, their stakes, and the genuine disagreements about how to respond. A debate among many voices.`,
          visual: `/voyager-assets/social-studies/l15-welcome.webp`,
        },

        {
          id: `l15-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Climate Change: The Physical Reality`,
          paragraphs: [
            `The scientific consensus on climate change is clear: human activity, primarily burning fossil fuels, releases greenhouse gases that trap heat, warming the planet. Global temperatures have risen by about 1.2 degrees Celsius since pre-industrial times. Small average changes produce large extremes: more intense heat waves, stronger hurricanes, worse droughts, and rising seas.`,
            `The consequences are already visible and will intensify. Rising seas threaten coastal cities and island nations. Changing precipitation patterns threaten agricultural systems. Heat waves are becoming more frequent and deadly. Glaciers are retreating worldwide, affecting freshwater for hundreds of millions. Some regions are becoming less habitable.`,
            `Climate change is also deeply unjust. Wealthy nations that industrialized earlier emitted the most. But the countries bearing the worst consequences are often the poorest: low-lying island nations, sub-Saharan African countries facing agricultural collapse, and South Asian nations facing extreme heat. Latin America faces significant impacts despite contributing relatively little.`,
          ],
          image: `/voyager-assets/social-studies/l15-s1-climate.webp`,
          imageCaption: `The scientific consensus is clear: HUMAN ACTIVITY, primarily burning fossil fuels, releases GREENHOUSE GASES that trap heat, warming the planet. Since pre-industrial times, average temperatures have risen ~1.2°C. Small average changes produce large extremes: more intense heat waves, stronger hurricanes, worse droughts, rising seas. CONSEQUENCES ALREADY VISIBLE: rising seas threatening coastal cities and island nations; changing precipitation threatening agriculture; more frequent and deadly heat waves; retreating glaciers affecting freshwater for hundreds of millions; climate-driven displacement. Climate change is DEEPLY UNJUST: wealthy nations that industrialized earlier have emitted the most; the worst consequences fall on the poorest and least responsible, including low-lying island nations, sub-Saharan Africa, South Asia, and LATIN AMERICA.`,
          vocab: [
            { word: `climate change`,
              definition: `The long-term shift in global temperatures and weather patterns caused primarily by human greenhouse gas emissions, with consequences including rising seas, extreme weather, agricultural disruption, and displacement.`,
              audioPrompt: `Climate change, {name}, is the long-term warming of the planet caused primarily by human greenhouse gas emissions from burning fossil fuels. The scientific consensus is overwhelming: it's happening, it's human-caused, and it's already producing consequences. The question for your generation isn't whether to believe in climate change but how to respond to it, how aggressively, how quickly, who pays, and what tradeoffs are acceptable. Understanding the physical reality clearly is the starting point for engaging the political and economic debates that follow. How do you currently think about climate change in your own life, and what has shaped that view?` },
            { word: `climate justice`,
              definition: `The principle that climate change's costs and responses must account for historical responsibility, with wealthy nations that emitted most bearing greater obligations, and vulnerable nations bearing less despite contributing less.`,
              audioPrompt: `Climate justice, {name}, is the principle that climate change is not just an environmental problem but a moral one, because the people bearing the worst consequences are often those who contributed least to the problem. Wealthy nations that industrialized early built their prosperity partly by emitting the greenhouse gases that are now warming the planet. The populations of low-lying island nations, sub-Saharan African farmers, and South Asian urban poor are bearing consequences they did little to cause. Climate justice argues this asymmetry should shape how we respond: who pays for adaptation and mitigation, whose losses are compensated, whose development needs are accommodated. Does the argument resonate with you, and why or why not?` },
            { word: `climate tipping points`,
              definition: `Thresholds in the climate system where warming triggers self-reinforcing feedback loops, such as melting Arctic ice reducing reflectivity and accelerating warming, potentially producing rapid and irreversible changes.`,
              audioPrompt: `Climate tipping points, {name}, are one of the most alarming concepts in climate science: thresholds where warming triggers self-reinforcing feedback loops that can accelerate change dramatically and irreversibly. Melting Arctic sea ice is a clear example: ice reflects sunlight back into space; when it melts, the darker ocean absorbs more heat, which melts more ice, which absorbs more heat, and so on. The melting of permafrost releases methane, a powerful greenhouse gas, accelerating warming further. Scientists are concerned that several tipping points may be interconnected, so that passing one could trigger others. This is why urgency matters: waiting too long may mean passing thresholds that can't be reversed.` },
          ],
        },

        {
          id: `l15-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Migration: Scale, Drivers, And Politics`,
          paragraphs: [
            `Contemporary migration has distinctive features. Over 280 million people live outside their country of birth. Drivers include armed conflict, economic desperation, climate-related displacement (populations made homeless by floods, droughts, or desertification), and family reunification. These drivers often overlap.`,
            `International law distinguishes refugees (people fleeing persecution with the right to asylum) from economic migrants (people moving for economic reasons, with fewer legal protections). This distinction is increasingly difficult to maintain since many people are driven by combinations of factors. Major recent crises include Syria (5-6 million refugees) and Venezuela (7 million displaced).`,
            `Migration generates intense political conflicts in receiving countries. Arguments for managed migration include economic benefits (filling labor shortages, contributing taxes), humanitarian obligations, and demographic necessity. Arguments for restriction include concerns about cultural change, security risks, and democratic legitimacy. These debates are among the most politically volatile.`,
          ],
          image: `/voyager-assets/social-studies/l15-s2-migration.webp`,
          imageCaption: `Over 280 MILLION PEOPLE live outside their country of birth. DRIVERS of contemporary migration include armed conflict (refugees fleeing war), economic desperation (workers seeking opportunity), CLIMATE-RELATED DISPLACEMENT (floods, drought, desertification), and family reunification. INTERNATIONAL LAW distinguishes REFUGEES (fleeing persecution, with asylum rights under the 1951 Refugee Convention) from ECONOMIC MIGRANTS (moving for economic reasons, with fewer protections), though drivers increasingly overlap. Largest recent crises: Syria (5-6 million external refugees), Venezuela (7 million displaced). Migration generates INTENSE POLITICAL CONFLICTS: arguments for managed migration (economic benefits, humanitarian obligations, demographic needs) compete with arguments for restriction (cultural concerns, labor competition, security, democratic legitimacy).`,
          vocab: [
            { word: `refugee vs. economic migrant`,
              definition: `The legal distinction between refugees (fleeing persecution, with asylum rights) and economic migrants (moving for economic opportunity, with fewer protections), increasingly difficult to apply cleanly as drivers overlap.`,
              audioPrompt: `Refugee versus economic migrant, {name}, is a legal distinction that has major real-world consequences. A refugee, under the 1951 Refugee Convention, is someone fleeing persecution based on race, religion, nationality, political opinion, or membership in a social group, and has the right to apply for asylum. An economic migrant is someone moving primarily for economic opportunity, with much fewer international legal protections. The challenge is that the distinction is increasingly hard to apply: a farmer fleeing climate-destroyed harvests and gang violence is driven by both economic and security factors simultaneously. How we categorize people determines what protections they're entitled to. Does the distinction seem adequate to you, or does it create unjust outcomes?` },
            { word: `climate-driven displacement`,
              definition: `Migration caused by climate change effects, including rising seas, droughts, floods, and desertification making areas uninhabitable or unproductive, expected to intensify significantly in coming decades.`,
              audioPrompt: `Climate-driven displacement, {name}, is one of the most significant migration trends of the coming decades. As climate change makes certain regions less habitable, through rising seas, more intense droughts, desertification, or more frequent flooding, populations are forced to move. Some island nations face literal submersion. In Central America, drought and crop failure are already driving migration northward. In South Asia, extreme heat events are making some areas dangerous for outdoor work. Climate-driven displacement is distinct from other migration in that it is often permanent: there is no "going home" when your home is underwater or permanently too hot for agriculture. How should international law and receiving countries respond to people displaced by climate change?` },
            { word: `migration politics`,
              definition: `The intense political debates in receiving countries over migration levels, integration, cultural change, and border control, among the most politically volatile issues in contemporary democracies.`,
              audioPrompt: `Migration politics, {name}, is one of the most explosive issues in contemporary democracies. Arguments for managed migration emphasize economic contributions (migrants fill labor shortages, contribute taxes, start businesses), humanitarian obligations (especially to refugees), and demographic necessity (aging populations need younger workers). Arguments for restriction emphasize cultural concerns (speed of change, loss of social cohesion), labor market competition (especially for low-wage workers), security risks, and democratic legitimacy (citizens' right to determine who enters). Both sides have genuine points. The most heated debates tend to focus less on the economics and more on identity and cultural questions. What values do you think should guide a fair migration policy?` },
          ],
        },

        {
          id: `l15-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Violent Conflict: Old And New Forms`,
          paragraphs: [
            `Violent conflict has declined in some ways and evolved in others since the end of the Cold War. Interstate wars have become rare. But civil wars remain common, driven by ethnic and religious divisions, competition for resources, and governance failures. The Syrian Civil War and the Yemeni Civil War have killed hundreds of thousands.`,
            `Terrorism emerged as a major security preoccupation after the September 11, 2001 attacks. Non-state armed groups can now project force globally and cause mass casualties. The rise of ISIS demonstrated how a non-state actor could seize territory and govern a proto-state. Counterterrorism has involved military interventions, surveillance programs, and debates about security and civil liberty.`,
            `New forms of conflict are also emerging. Cyberwarfare, attacks on digital infrastructure, power grids, and financial systems, blurs the line between war and peace and creates attribution challenges. Great-power competition between the U.S. and China raises the risk of proxy and conventional conflicts. Climate change is a "threat multiplier," exacerbating resource competition.`,
          ],
          image: `/voyager-assets/social-studies/l15-s3-conflict.webp`,
          imageCaption: `Violent conflict has evolved. INTERSTATE WARS have become rarer, but CIVIL WARS remain common, driven by ethnic and religious divisions, resource competition, governance failures, and colonial border legacies (Syria, Yemen). TERRORISM became a major security preoccupation after 9/11: non-state armed groups can project force globally; the rise of ISIS showed how non-state actors can seize territory. CYBERWARFARE blurs the line between war and peace: attacks on digital infrastructure, power grids, financial systems, and elections create ATTRIBUTION CHALLENGES that complicate deterrence. GREAT-POWER COMPETITION between the U.S. and China raises new conflict risks. CLIMATE CHANGE is a THREAT MULTIPLIER, exacerbating resource competition, displacing populations, and destabilizing fragile governments.`,
          vocab: [
            { word: `non-state armed groups`,
              definition: `Armed organizations that operate without state authority, including terrorist networks and insurgencies, capable of causing mass casualties and destabilizing states without conventional military forces.`,
              audioPrompt: `Non-state armed groups, {name}, are one of the defining security challenges of the twenty-first century: armed organizations that operate without state authority, including terrorist networks, insurgencies, and criminal organizations, capable of causing mass casualties and destabilizing states. The September 11 attacks showed that a relatively small non-state group could kill thousands and trigger massive geopolitical responses. ISIS demonstrated that a non-state group could seize territory across two countries and govern millions. The challenge is that deterrence strategies developed for state actors don't apply the same way to organizations without territory to threaten or leaders without a population to protect. What do you think is the most effective long-term approach to non-state armed violence?` },
            { word: `cyberwarfare`,
              definition: `Attacks on digital infrastructure, information systems, and critical services by states or non-state actors, blurring the line between war and peace and creating attribution and deterrence challenges.`,
              audioPrompt: `Cyberwarfare, {name}, is one of the newest and most complex domains of conflict: attacks on digital infrastructure, power grids, financial systems, elections, and military systems, conducted by states or non-state actors through computer networks. What makes it distinct and challenging is the attribution problem: it can be very difficult to determine who launched a cyberattack with certainty, making deterrence and proportionate response difficult. And the line between peacetime espionage and wartime attack is blurry in the cyber domain. Countries routinely hack each other's systems for intelligence; at what point does that become an act of war? Your generation will be the first to fully inhabit a world where cyberconflict is a routine feature of international politics.` },
            { word: `climate as threat multiplier`,
              definition: `The concept that climate change amplifies existing security risks by disrupting food and water supplies, displacing populations, and destabilizing fragile governments, creating conditions conducive to conflict.`,
              audioPrompt: `Climate as threat multiplier, {name}, is the concept that climate change doesn't create conflict by itself, but amplifies existing vulnerabilities in ways that make conflict more likely. When drought destroys crops and communities compete for scarce water, ethnic or political tensions that were manageable can become explosive. When climate displacement creates large refugee flows, it can destabilize receiving communities. When a government fails to manage a climate disaster, it loses legitimacy and may face armed challenge. Security analysts increasingly identify climate change as one of the most significant long-term drivers of instability, not because the climate itself is violent, but because of what it does to the human and political systems that sit on top of it.` },
          ],
        },

        {
          id: `l15-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `The Connections`,
          paragraphs: [
            `Climate change, migration, and conflict are deeply interconnected. Climate change drives displacement through drought, flooding, and desertification, increasing migration pressure and potentially generating political conflict. It acts as a threat multiplier: resource scarcity, failed harvests, and state weakness create conditions conducive to conflict.`,
            `Addressing these issues in isolation is insufficient. Reducing carbon emissions addresses climate displacement. Addressing conflict in fragile states reduces refugee flows. Supporting development in climate-vulnerable regions reduces economic migration. The interconnection makes solutions harder, and international coordination is required at global scale.`,
            `The interconnection raises deep justice questions. Rich countries contributed most to climate change, but poorer countries bear the worst impacts. Rich countries benefit from migrants' labor while restricting their movement. Rich countries' interventions in conflicts sometimes create the very refugee crises they struggle to manage. These connections reveal structural injustices.`,
          ],
          image: `/voyager-assets/social-studies/l15-s4-connections.webp`,
          imageCaption: `Climate change, migration, and conflict are DEEPLY INTERCONNECTED. Climate change drives DISPLACEMENT through drought, flooding, and desertification, increasing migration pressure and potentially generating political conflict in receiving communities. Climate change is a THREAT MULTIPLIER for conflict: resource scarcity, failed harvests, and state weakness create conditions for armed conflict (Syria's civil war was preceded by severe drought). ADDRESSING IN ISOLATION is insufficient: reducing emissions addresses climate displacement; addressing conflict reduces refugee flows; development in climate-vulnerable regions reduces economic migration. The DEEPEST JUSTICE QUESTIONS: rich countries contributed most to climate change but poorer countries bear the worst impacts; rich countries benefit from migrants' labor while restricting their movement; interventions and non-interventions in conflicts create or extend refugee crises.`,
          vocab: [
            { word: `systemic risk`,
              definition: `The phenomenon where interconnected problems amplify each other: climate change driving displacement, displacement generating political conflict, conflict creating more displacement, in a self-reinforcing cycle.`,
              audioPrompt: `Systemic risk, {name}, is what happens when problems are interconnected enough that addressing each in isolation is insufficient because they amplify each other. Climate change drives displacement; displacement generates political tension; political tension can spark conflict; conflict creates more displacement; displaced populations strain the countries they move to, sometimes destabilizing them. This isn't just an academic concern: the Syrian Civil War is a real example of how drought, displacement, governance failure, and political conflict all interacted. Managing systemic risks requires understanding the whole system, not just the individual pieces. What systemic connections do you find most alarming about the way climate change, migration, and conflict interact?` },
            { word: `global collective action problem`,
              definition: `The challenge that issues like climate change require coordinated global action to solve, but individual actors (nations, companies) have incentives to free-ride on others' efforts while still benefiting from collective solutions.`,
              audioPrompt: `A global collective action problem, {name}, is the core political challenge behind climate change specifically but also behind migration and conflict governance: the solutions require everyone to cooperate, but individual actors have strong incentives not to. If one country dramatically reduces its emissions but others don't, the country bears the cost but doesn't solve the problem. If one country opens its borders to refugees but others don't, it bears a disproportionate burden. If one country funds conflict resolution in a fragile state but others don't, the benefits are shared but the costs aren't. These problems require international cooperation, which is hard to sustain because countries have different interests, capacities, and timelines. How do you think the world should organize itself to solve collective action problems at this scale?` },
            { word: `structural injustice in global issues`,
              definition: `The pattern that the countries most responsible for creating global problems often bear the least immediate costs, while the most vulnerable nations bear the greatest impacts, creating moral obligations that are politically difficult to honor.`,
              audioPrompt: `Structural injustice in global issues, {name}, is the moral dimension that connects all three of this lesson's topics. Climate change: wealthy nations that emitted most bear less of the physical impact than vulnerable poor nations. Migration: wealthy nations benefit from migrants' labor and skills while restricting their entry. Conflict: wealthy nations' foreign policy decisions (interventions, arms sales, proxy support) often create or extend conflicts whose refugee consequences they then struggle to manage. This structural asymmetry, where those most responsible for creating problems bear the least of their costs, is one of the defining moral challenges of the twenty-first century. What do you think structural justice would actually require in practice?` },
          ],
        },

        {
          id: `l15-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Before The Debate`,
          paragraphs: [
            `Pull it together. Climate change is the defining physical challenge of the century: human greenhouse gas emissions are warming the planet, producing rising seas, extreme weather, and displacement falling most heavily on those who contributed least. Migration generates debates about humanitarian obligations and legitimacy. Violent conflict persists: civil wars, terrorism, cyberwarfare, and great-power competition.`,
            `These three issues form a system where climate change drives displacement, displacement generates conflict risk, and conflict creates more displacement. Addressing them requires grappling with value disagreements about obligations across borders and generations, who should pay, and how to balance security and openness. Neither the left nor the right has a complete answer.`,
            `These are the issues your generation will decide. Five perspectives follow on how the world should respond to these interconnected challenges, from ambitious multilateralism to sovereignty-first nationalism, from climate urgency to security-first restriction. Don't crown a winner. Form your own view. Onward.`,
          ],
          image: `/voyager-assets/social-studies/l15-s5-before.webp`,
          imageCaption: `Threads together. CLIMATE CHANGE is the defining physical challenge: human emissions warming the planet, producing rising seas, extreme weather, agricultural disruption, and displacement falling most heavily on those who contributed least. MIGRATION, driven by conflict, climate, and economic desperation, generates debates about humanitarian obligations, cultural change, and democratic legitimacy. VIOLENT CONFLICT persists in civil wars, terrorism, cyberwarfare, and great-power competition. The three issues are DEEPLY INTERCONNECTED, forming a system where climate drives displacement, displacement generates conflict risk, and conflict creates more displacement. These require grappling with DEEP VALUE DISAGREEMENTS about obligations across borders and generations, who pays, and what justice requires. Five perspectives follow. These are the issues your generation will decide. Onward.`,
          vocab: [
            { word: `intergenerational justice`,
              definition: `The obligation to future generations: the principle that current decisions about climate change, debt, and resource use must account for their effects on people who don't yet exist and cannot vote.`,
              audioPrompt: `Intergenerational justice, {name}, is the principle that our obligations extend not just to people alive today but to future generations who will inherit the consequences of our choices. Climate change is the clearest case: the greenhouse gases we're emitting today will be warming the planet for centuries. Decisions made by your parents' and grandparents' generations are already constraining your options; decisions made by your generation will constrain your children's and grandchildren's. A just climate policy has to account for people who don't yet exist and can't vote. How do you think about obligations to future generations, and does that change how you feel about climate action?` },
            { word: `multilateralism`,
              definition: `The approach of addressing global challenges through international cooperation and institutions, as opposed to unilateral national action or "sovereignty first" approaches.`,
              audioPrompt: `Multilateralism, {name}, is the approach of working through international institutions and cooperation to address global challenges that no single nation can solve alone. Climate change, large-scale migration, terrorism, and pandemics all exceed any single nation's capacity to manage. Multilateralism argues that international agreements, shared standards, and coordinated action are the only adequate response. Critics argue that multilateralism sacrifices national sovereignty, moves too slowly, and allows free-riding. The tension between national sovereignty and global cooperation is one of the defining debates of the twenty-first century, and it runs through all three of this lesson's issues.` },
            { word: `your generation's responsibility`,
              definition: `The specific historical position of your generation: inheriting the consequences of past decisions while being the first generation that will make decisions shaping climate outcomes for centuries.`,
              audioPrompt: `Your generation's responsibility, {name}, is what makes this lesson more than just interesting information: you are the generation that will make the decisions that largely determine how climate change, migration, and conflict play out. Previous generations understood these challenges but didn't resolve them. The Paris Agreement exists but isn't on track. The refugee system exists but is overwhelmed. Conflict management frameworks exist but don't prevent the conflicts they're designed to address. Your generation inherits these incomplete responses and will have to decide whether and how to push further. This isn't meant to be paralyzing: it's meant to be orienting. You're not a spectator to these issues; you're an inheritor with agency.` },
          ],
        },

        {
          id: `l15-perspectives`,
          type: `perspectives`,
          headline: `The Great Debate: How Should The World Respond?`,
          intro: `{name}, these are the defining challenges of your lifetime. Here are five perspectives on how the world should respond to climate change, migration, and conflict, ranging across the genuine political and value spectrum. Don't crown a winner. Understand the tensions, and begin forming your own views about what your generation owes the future.`,
          perspectives: [
            {
              id: `p1`,
              voice: `The multilateral urgency advocate`,
              era: `A view on global issues`,
              stance: `These interconnected global challenges require ambitious international cooperation, shared sacrifice, and treating climate change as the civilization-scale emergency it is.`,
              quote: `"Half-measures are catastrophe delayed. Climate change is an emergency. We need the scale of response that emergencies get."`,
              argument: `Climate change is a civilization-scale emergency whose consequences are already becoming irreversible; treating it as one policy priority among many is not adequate to the scale of the threat. Genuinely solving it requires ambitious international agreements with real commitments and enforcement, carbon pricing that reflects true costs, massive investment in clean energy transitions, and wealthy nations compensating vulnerable ones for losses they didn't cause. Migration requires a reformed international system that distributes responsibility rather than concentrating it on border countries. Conflict management requires strengthening international institutions and addressing the root causes (poverty, governance failure, climate stress) rather than just managing symptoms.`,
              evidence: `IPCC reports on climate tipping points and irreversibility; economic analyses showing the cost of inaction exceeding the cost of action; existing international frameworks (Paris Agreement, Refugee Convention) as starting points that need strengthening; successful multilateral examples (ozone layer, trade liberalization).`,
              strengths_and_limits: `Strength: correctly identifies the scale and urgency of climate risk and the inadequacy of incremental responses; takes seriously the justice dimension of distributing costs and benefits. Limit: ambitious international agreements are politically hard to achieve and harder to enforce; may underestimate the political barriers and the difficulty of sustaining cooperation across diverse national interests.`,
            },
            {
              id: `p2`,
              voice: `The sovereignty-first nationalist`,
              era: `A view on global issues`,
              stance: `Nations must prioritize their own citizens' interests; global institutions are unaccountable, and internationally imposed solutions undermine democratic sovereignty.`,
              quote: `"Global institutions don't answer to voters. I do. My job is to protect my citizens, not the whole world."`,
              argument: `International agreements on climate, migration, and conflict impose costs on citizens who never voted for them, decided by international bodies with no democratic accountability. Nations have a primary obligation to their own citizens, not to global populations or future generations whose interests are speculative. Immigration levels should be set by democratic majorities, not international conventions. Climate policy should be determined by national legislatures, not unelected international bodies. Where global cooperation genuinely serves national interests, it makes sense; where it requires unilateral sacrifice or loss of control, it doesn't.`,
              evidence: `The political backlash against international agreements in multiple democracies; the failure of many international commitments to be honored; the principle of democratic self-governance; the track record of international institutions in managing issues effectively; national sovereignty as a fundamental principle.`,
              strengths_and_limits: `Strength: takes democratic legitimacy and national accountability seriously; correctly notes that international institutions can be unaccountable and ineffective. Limit: global problems genuinely require global solutions; national sovereignty applied to climate change means collectively failing to prevent civilizational harm; the free-rider problem means everyone acting purely nationally produces worse outcomes for everyone.`,
            },
            {
              id: `p3`,
              voice: `The climate justice advocate`,
              era: `A view on global issues`,
              stance: `Climate change, migration, and conflict are products of structural global inequalities; justice requires transformation of the systems that created them, not just technical fixes.`,
              quote: `"You can't solve a justice problem with a technical solution. The whole system needs to change."`,
              argument: `Climate change is fundamentally a product of an economic system built on fossil fuel combustion, which enriched wealthy nations at the cost of the whole planet's future. Migration is driven by inequalities that wealthy nations helped create through colonialism, Cold War interference, and trade rules that serve their interests. Conflict is fed by arms sales, resource exploitation, and political meddling by wealthy nations. Technical solutions, carbon markets, managed migration schemes, and counterterrorism programs, address symptoms rather than the structural inequalities that generate these problems. Justice requires transformation of the global economic and political order.`,
              evidence: `Historical emissions data showing the global North's disproportionate responsibility; colonial and post-colonial economic structures driving migration; arms export patterns from wealthy nations fueling conflicts; evidence that incremental responses have been insufficient; climate reparations arguments.`,
              strengths_and_limits: `Strength: connects current global crises to structural historical injustices rather than treating them as natural or accidental; correctly identifies that incremental responses haven't been sufficient. Limit: structural transformation is politically very difficult; "change the whole system" can become an obstacle to achievable reforms; the urgency of climate change may require pragmatic action that doesn't wait for structural transformation.`,
            },
            {
              id: `p4`,
              voice: `The pragmatic incrementalist`,
              era: `A view on global issues`,
              stance: `Progress on global issues requires building realistic coalitions, accepting imperfect agreements, and pursuing achievable improvements rather than waiting for ideal solutions.`,
              quote: `"Perfect is the enemy of good. A real deal that moves things forward beats a perfect deal that never happens."`,
              argument: `Global challenges are real and urgent, but the response has to be politically achievable. Ambitious but imperfect agreements (like the Paris Agreement) are better than no agreement. Carbon pricing schemes that gradually ratchet up are better than waiting for a global carbon tax that won't happen. Managed migration systems that process claimants humanely are better than either open borders or fortress walls. Counterterrorism cooperation between imperfect allies is better than unilateral action. Building coalitions, sustaining political support, and implementing achievable steps is how real change happens, even if it's slower and messier than idealists want.`,
              evidence: `The ozone layer recovery as a successful incremental multilateral process; the Montreal Protocol as a pragmatic model; the record of gradual trade liberalization creating real gains; evidence that perfectionism in politics often leads to inaction; sustainable coalition-building in democratic systems.`,
              strengths_and_limits: `Strength: acknowledges political reality; achievable progress is better than aspirational stasis; correctly notes that imperfect agreements have sometimes worked. Limit: for genuinely time-sensitive challenges like climate change, incremental progress at current rates may be genuinely insufficient, and "pragmatic" can become a justification for inaction that serves powerful interests.`,
            },
            {
              id: `p5`,
              voice: `The security-first realist`,
              era: `A view on global issues`,
              stance: `Global challenges must be addressed through the lens of national security; disorder, mass migration, and rogue actors pose immediate threats that demand hard-nosed responses.`,
              quote: `"The world is a dangerous place. Idealism without power is irrelevant. States protect themselves or they don't survive."`,
              argument: `While climate change, migration, and conflict are real challenges, the response must be grounded in hard-nosed realism about security. Uncontrolled migration creates genuine security risks and social instability. Terrorism and rogue-state weapons programs require forceful deterrence, not just dialogue. Climate change requires adaptation alongside mitigation, because some change is already locked in and populations need protection now. Great-power competition requires building alliances and maintaining military strength, not hoping international norms will be respected. Idealism without power to back it up is irrelevant in a world where adversaries don't share your values.`,
              evidence: `Security consequences of unmanaged migration in Europe; terrorist attacks motivating security-first approaches; North Korean and Iranian weapons programs; the limits of international norms in preventing Russian or Chinese aggression; military deterrence as a foundation of stability.`,
              strengths_and_limits: `Strength: correctly identifies that real security threats exist and that norms without enforcement are limited; adaptation to locked-in climate change is genuinely necessary. Limit: security-first framing can justify almost unlimited expansion of state power; treating migration primarily as a security issue ignores humanitarian obligations; military responses to climate change and mass migration are not scalable or sustainable.`,
            },
          ],
          synthesisPrompt: `After all five: which of these challenges, climate, migration, or conflict, do you find most urgent, and why? Which perspective resonates most with how you think the world should respond? Which challenged you most? In 5-6 sentences, explain where you land and what you're still genuinely uncertain about.`,
          reflectionPrompt: `You are inheriting a world with interconnected challenges your generation did not create but will have to navigate and decide. How does that feel, and what kind of person do you want to be in relation to these challenges?`,
        },

        {
          id: `l15-quiz`,
          type: `quiz`,
          headline: `Check your understanding`,
          questions: [
            {
              id: `q1`,
              type: `multiple-choice`,
              question: `What is the scientific consensus on climate change?`,
              options: [
                `Human greenhouse gas emissions are warming the planet, with consequences including rising seas, extreme weather, and displacement.`,
                `The scientific community is evenly divided on whether human activity affects global temperatures.`,
                `Climate change is entirely and exclusively a natural phenomenon and has absolutely no significant human-caused component.`,
                `Climate change will not produce measurable effects for at least another two hundred years.`,
              ],
              correctIndex: 0,
              explanation: `The scientific consensus is strong: human greenhouse gas emissions are warming the planet, already producing consequences including rising seas, extreme weather, agricultural disruption, and displacement. The distractors falsely claim scientific division, deny human causation, or project effects centuries into the future.`,
            },
            {
              id: `q2`,
              type: `multiple-choice`,
              question: `What is "climate justice," and why does it matter for how we respond to climate change?`,
              options: [
                `The principle that all nations in the world should uniformly reduce their emissions by exactly the same fixed percentage regardless of history.`,
                `A formal international legal framework that specifically allows all nations to formally file official lawsuits against each other for causing climate change.`,
                `The principle that wealthy nations that emitted most historically have greater obligations, and the most vulnerable nations bearing the worst impacts deserve support.`,
                `A specific international policy ensuring that every single dollar of all climate adaptation funding goes exclusively and only to wealthy nations.`,
              ],
              correctIndex: 2,
              explanation: `Climate justice is the principle that wealthy nations which emitted most historically bear greater obligations, while the most vulnerable nations bearing the worst impacts despite contributing least deserve support and compensation. The distractors describe equal percentage cuts, international litigation, or reversing the distribution of support.`,
            },
            {
              id: `q3`,
              type: `multiple-choice`,
              question: `What is the legal distinction between a refugee and an economic migrant?`,
              options: [
                `There is absolutely no legal distinction whatsoever of any kind between refugees and economic migrants anywhere in the entirety of international law.`,
                `Refugees are people who freely and voluntarily choose to move abroad for adventure and opportunity; economic migrants are the ones who are actually forced to move.`,
                `Refugees are fleeing persecution and have asylum rights under international law; economic migrants are moving for economic opportunity, with fewer international protections.`,
                `Economic migrants actually have significantly more international legal protections than refugees do under the terms of the 1951 Refugee Convention.`,
              ],
              correctIndex: 2,
              explanation: `International law distinguishes refugees (fleeing persecution with asylum rights under the 1951 Refugee Convention) from economic migrants (moving for economic opportunity with fewer international protections). The distractors deny the distinction, reverse the definitions, or invert the protections.`,
            },
            {
              id: `q4`,
              type: `multiple-choice`,
              question: `How does climate change function as a "threat multiplier" for violent conflict?`,
              options: [
                `Climate change directly and physically forces entire populations across the world to immediately and violently fight each other specifically over dwindling fossil fuel resources.`,
                `Climate change creates violent conflicts exclusively and only in the very wealthiest nations in the world that happen to have the most advanced and capable militaries.`,
                `Climate change amplifies existing security risks by disrupting food and water supplies, displacing populations, and destabilizing fragile governments, creating conditions conducive to conflict.`,
                `Climate change actually reduces violent conflict overall by making certain targeted regions simply far too hot and too climatically inhospitable for any effective warfare.`,
              ],
              correctIndex: 2,
              explanation: `Climate change functions as a threat multiplier by amplifying existing security vulnerabilities: disrupting food and water, displacing populations, and destabilizing fragile governments in ways that create conditions conducive to conflict. The distractors invent direct fossil fuel conflicts, limit effects to wealthy nations, or absurdly claim climate reduces conflict.`,
            },
            {
              id: `q5`,
              type: `multiple-choice`,
              question: `What is a "global collective action problem," and why does it complicate responses to climate change?`,
              options: [
                `A problem that specifically requires exactly one single nation to take all action while every other nation simply waits.`,
                `The challenge that global issues require international cooperation, but individual actors have incentives to free-ride while others bear the costs.`,
                `A problem that can only ever possibly be solved when the very largest countries in the world act entirely alone.`,
                `The challenge of successfully convincing all of the world's scientists to finally agree on the underlying science of various global issues.`,
              ],
              correctIndex: 1,
              explanation: `A collective action problem means that global issues require cooperation, but individual actors have incentives to free-ride on others' efforts, since they benefit from collective solutions without bearing costs. This complicates climate response because unilateral action by one country doesn't solve the problem while others continue emitting. The distractors describe unilateral action, limit it to large countries, or reduce it to a scientific disagreement.`,
            },
            {
              id: `q6`,
              type: `multiple-choice`,
              question: `What are the main arguments in favor of managed migration in receiving countries?`,
              options: [
                `Migration has absolutely no economic effects whatsoever on any receiving countries at any point in time, which is something every single economist and researcher universally agrees on.`,
                `All forms and types of migration are always equally and uniformly beneficial to every receiving country and to every community within it and should therefore never face any restrictions.`,
                `Economic contributions (filling labor shortages, paying taxes), humanitarian obligations (especially to refugees), and demographic necessity (aging populations need younger workers) support managed migration.`,
                `Migration should be legally permitted only for people who are originating from countries that already have existing formal and recognized bilateral trade agreements with the receiving country.`,
              ],
              correctIndex: 2,
              explanation: `Arguments supporting managed migration include economic contributions (filling labor shortages, tax contributions, entrepreneurship), humanitarian obligations especially to refugees, and demographic necessity in aging wealthy societies. The distractors deny economic effects, advocate unrestricted migration, or reduce it to a trade agreement criterion.`,
            },
            {
              id: `q7`,
              type: `multiple-choice`,
              question: `Why does cyberwarfare create unique challenges for deterrence and response?`,
              options: [
                `Cyberwarfare is simply not considered to be any kind of real or meaningful security threat by any national government anywhere in the world.`,
                `Cyberattacks are always immediately and perfectly traceable back to their exact original source, which makes deterrence and proportionate response completely straightforward.`,
                `Attribution is difficult (identifying who launched an attack with certainty is hard), blurring the line between peace and war and complicating proportionate responses.`,
                `Cyberwarfare only ever affects individual personal computers and smartphones and has absolutely no impact on any critical national infrastructure.`,
              ],
              correctIndex: 2,
              explanation: `Cyberwarfare creates unique challenges because attribution (determining who launched an attack) is difficult and uncertain, blurring the line between peace and war and complicating proportionate deterrence and response. The distractors deny it as a threat, falsely claim easy attribution, or limit its scope to personal computers.`,
            },
            {
              id: `q8`,
              type: `multiple-choice`,
              question: `What is the connection between climate change and migration?`,
              options: [
                `Climate change only ever affects migration patterns in the wealthiest and most highly developed nations and never in any poorer or developing ones.`,
                `There is absolutely no documented scientific or empirical connection of any kind between climate change and population movement or migration.`,
                `Climate change drives displacement through droughts, flooding, and desertification that make regions uninhabitable or unproductive, intensifying migration pressures globally.`,
                `Climate change actually reduces overall migration pressure significantly by making every region of the world more equally and uniformly hospitable for human habitation.`,
              ],
              correctIndex: 2,
              explanation: `Climate change drives displacement through droughts, flooding, and desertification that make regions uninhabitable or unproductive, intensifying global migration pressures. The distractors limit climate effects to wealthy nations, deny the connection, or falsely claim climate makes all regions equally livable.`,
            },
            {
              id: `q9`,
              type: `true-false`,
              question: `True or false: Because climate change, migration, and conflict are genuinely complex global issues involving value disagreements, there are no factual claims in this domain that can be evaluated as more or less accurate, and all perspectives are equally valid.`,
              correctAnswer: false,
              explanation: `False, and this is an important distinction for thinking clearly about complex issues: the fact that complex global challenges involve genuine value disagreements does not mean all factual claims about them are equally valid. It's possible and necessary to distinguish empirical questions (where evidence can determine more or less accurate answers) from value questions (where people can reasonably disagree based on different priorities). On climate change, the scientific consensus is clear: human greenhouse gas emissions are causing warming, the consequences are real and already visible, and the trajectory will worsen without action. These are empirical claims backed by overwhelming scientific evidence and consensus, not matters of equal opinion. It is NOT equally valid to claim that climate change is not happening, is not human-caused, or will have no significant consequences, because evidence clearly falsifies these claims. On the value questions, by contrast, there is genuine reasonable disagreement: how aggressively should wealthy nations cut emissions? What compensation do vulnerable nations deserve? Should migration policy prioritize humanitarian obligations or cultural concerns? These involve value tradeoffs where different priorities can lead to different conclusions, and no single answer is empirically "correct." The confusion between empirical and value questions is one of the most common and most damaging errors in political discussion: it leads people to dismiss scientific consensus as "just an opinion" while also treating factually false claims as legitimate parts of debate. Good analytical thinking requires: (1) evaluating empirical claims on their evidence (scientific consensus on climate change is extremely strong; claims denying it are not equally valid); (2) recognizing that value disagreements are genuine and can't be resolved by evidence alone; and (3) not using the existence of value disagreements to falsely suggest that factual claims are also merely matters of opinion. So the statement is false: some claims about these issues are clearly more accurate than others, and the scientific consensus on climate change in particular is not merely one perspective among equally valid alternatives.`,
            },
            {
              id: `q10`,
              type: `inference`,
              question: `A coastal nation with low emissions is facing rising seas, intensifying droughts, and increasing refugee inflows from a neighboring country experiencing conflict worsened by climate stress. Using the lesson, what combination of global issues is this nation experiencing, and what kind of response would genuinely address its situation?`,
              options: [
                `This nation is facing only a domestic governance problem that it must solve entirely on its own.`,
                `This nation is only facing a conflict problem that requires a military solution.`,
                `This nation is experiencing the interconnection of climate change, climate-driven displacement, and conflict acting as a threat multiplier simultaneously; a genuine response requires international climate mitigation and finance, support for the neighboring country's conflict and climate resilience, and a reformed international system for sharing refugee responsibility.`,
                `The nation should simply close its borders and the problems will resolve themselves.`,
              ],
              correctIndex: 2,
              explanation: `The nation is experiencing the interconnection of climate change (rising seas, drought), climate-driven displacement from its neighbor, and conflict acting as a threat multiplier. Genuinely addressing this requires international climate mitigation and finance, support for regional conflict and climate resilience, and a reformed refugee system that distributes responsibility. The distractors isolate it as a domestic issue, reduce it to a conflict problem, or prescribe border closure.`,
            },
          ],
        },

        {
          id: `l15-reflection`,
          type: `reflection`,
          headline: `Sit with this`,
          intro: `Pick the prompt that pulls at you most. Your answer is saved.`,
          prompts: [
            { id: `reflect-inheriting`, category: `What you're inheriting`, prompt: `You are inheriting a world with interconnected challenges your generation did not create but will have to navigate and decide. How does that feel, and what kind of person do you want to be in relation to these challenges?` },
            { id: `reflect-climate`, category: `Climate urgency`, prompt: `The science says climate change is already happening and will worsen without major action. Yet the political response has been slower than the science recommends. What do you think explains that gap, and what would it take to close it?` },
            { id: `reflect-migration`, category: `The migration debate`, prompt: `The migration debate involves genuine value tensions: humanitarian obligations to those fleeing persecution versus legitimate concerns about cultural change and democratic control. How do you balance these, and what principle would guide a policy you could defend?` },
            { id: `reflect-heritage`, category: `Teaching contemporary issues`, prompt: `Caro, you're building social studies for conscious families, many with roots in Latin America, a region facing climate impacts, political instability, and migration. How would you help a child see that these global issues are personally relevant to their heritage and their future, not abstractions?` },
            { id: `reflect-justice`, category: `Global justice`, prompt: `Wealthy nations contributed most to climate change, benefit from migrants' labor while restricting their movement, and have often created or extended conflicts whose refugee consequences they then struggle to manage. What would genuinely just global policies look like, and what would wealthy nations have to give up to implement them?` },
            { id: `reflect-critical`, category: `The hard question`, prompt: `If your generation has more information, more global awareness, and more tools than any previous generation, why do you think these challenges remain so hard to address? What structural, political, or human factors make "knowing better" insufficient, and what might actually change that?` },
          ],
        },

        {
          id: `l15-real-world`,
          type: `real-world`,
          headline: `Take it into the world`,
          familyActivity: {
            title: `Map the Issues in Your World`,
            duration: `One afternoon`,
            description: `Turn an afternoon into an investigation of how climate change, migration, and conflict are showing up in the real world around your family. Start with climate where you live: look up the specific climate impacts projected for your region (California and much of the U.S. Southwest face intensifying drought and wildfire; coastal regions face sea-level rise). Discuss what you notice already changing in your own experience of weather and environment. Connect to Latin America: research the specific climate impacts in a country your family has roots in. What is happening to agriculture, water, or coastal areas? What migration is already being driven by climate stress in that region? Read a migration story: find a news article or documentary about a specific family or community experiencing migration, whether due to conflict, climate, or economic desperation, and discuss: what forces are driving them? What legal status do they have? What choices are they making? Apply all three issues to one current crisis: pick a current news story involving conflict and trace how climate stress, migration, and violent conflict are interconnected in it. Then hold the debate: have family members argue the five perspectives from the lesson applied to a specific policy question, how aggressively should wealthy nations cut emissions, or how should refugee responsibility be distributed, or how should cyberwarfare be governed? Notice which values are driving each position. Finally, discuss your generation: as a family, talk about which of these three challenges you think is most urgent, and what each person thinks your generation's role should be in addressing it. The goal is to move from seeing these as distant news topics to understanding them as live forces shaping your world and your future choices.`,
          },
          projectOption: {
            title: `The Global Issues Analysis Project, 2 weeks (optional)`,
            duration: `2 weeks, ~40 minutes per session`,
            description: `Investigate one of the three contemporary global issues in depth and analyze the interconnections, competing perspectives, and what genuinely adequate responses would require. Week 1, choose and research your issue: pick one issue (climate change, migration, or violent conflict) and research its current state in depth, with a specific regional focus if possible. For climate: research current impacts in a specific region, the emissions trajectory of major countries, the status of international agreements, and the specific challenges facing Latin America. For migration: research a specific current migration flow (Venezuelan displacement, Central American migration to the U.S., Syrian refugees), its causes, its scale, the legal frameworks applying, and what adequate response would look like. For conflict: research a current civil war or conflict, its causes (including climate and governance factors), its humanitarian consequences, and the international response. Week 2, analyze through multiple perspectives and form your own view: apply all five debate perspectives to your chosen issue. What would the multilateral urgency advocate, the sovereignty-first nationalist, the climate justice advocate, the pragmatic incrementalist, and the security-first realist each recommend? Find evidence supporting each position. Then form your own assessment: which response makes most sense given the facts, the values at stake, and the political constraints? What interconnections with the other two issues does your case reveal? What would genuinely adequate international response look like, and what would it require from wealthy nations specifically? Produce your final piece, an analytical report, a policy brief to imaginary world leaders, a five-perspective debate presentation, or a multimedia exploration, that demonstrates the ability to analyze a complex global issue across multiple perspectives and form reasoned policy recommendations.`,
            offerToParent: `Parent: opt your child into the Global Issues Analysis Project. Investigating one of the three contemporary global issues, analyzing its drivers, consequences, interconnections with other issues, and competing policy perspectives, directly develops C3 Framework global, economics, and civics concepts: climate change, international migration, violent conflict, global governance, collective action problems, and the intersection of facts and values in policy. Applying five genuine perspectives, finding evidence for each, and forming reasoned policy conclusions builds analytical thinking, global awareness, and the ability to reason about genuinely complex real-world challenges. Given your family's connections to Latin America, focusing on climate impacts or migration flows in that region makes this both personally relevant and globally significant.`,
          },
          identityQuestion: `If you become someone who understands the physical reality of climate change, the drivers and politics of global migration, the evolving forms of violent conflict, and the deep interconnections among all three, who can evaluate both factual claims and value-based arguments about how to respond, and who sees your generation as having agency in how these challenges play out, what kind of global citizen does that make you, one who engages these defining challenges as an informed, critical, and responsible actor, that someone who only watches passively never can?`,
        },

        {
          id: `l15-identity-hook`,
          type: `identity-hook`,
          headline: `Who is this lesson making you?`,
          prompt: `One sentence. No wrong answer.`,
          placeholder: `Someone who...`,
          examples: [
            `Someone who understands the interconnections between climate change, migration, and conflict.`,
            `A person who sees climate justice as personally relevant, not an abstraction.`,
            `Someone who recognizes my generation as having real agency in how these challenges play out.`,
          ],
          saveKey: `identity_responses_social_studies_11_12_15`,
        },

        {
          id: `l15-celebration`,
          type: `celebration`,
          guideText: `{name}. You've just mapped the three defining challenges of your lifetime with real clarity. You learned the physical reality of climate change, its causes, its already-visible consequences, and the deep injustice of its distribution. You traced the drivers of contemporary migration, the legal frameworks that apply, and why migration politics are so politically volatile in receiving societies. You examined how violent conflict has evolved, from civil wars to terrorism to cyberwarfare to great-power competition, and how climate change amplifies conflict risk. You saw the deep interconnections among all three, and the structural injustices built into how their costs and benefits are distributed. And you weighed five genuine perspectives on how the world should respond, without being handed a single right answer, because these are genuinely live political and value debates. You are better equipped to engage the biggest challenges of your generation than most adults who haven't thought carefully about these connections. The Social Studies Voyager band continues with sociology, media literacy, research skills, and active citizenship. The tools keep building. Onward, {name}. — Atlas`,
          badge: `global-issues-thinker`,
          badgeName: `Global Issues Thinker`,
          xpEarned: 75,
          competencies: [
            `Understands the physical reality of climate change, its causes, and its distributional injustice`,
            `Knows the drivers of contemporary migration and the refugee-economic migrant legal distinction`,
            `Understands the evolving forms of violent conflict including terrorism and cyberwarfare`,
            `Grasps the interconnections between climate change, displacement, and conflict`,
            `Understands the collective action problem underlying global climate and migration governance`,
            `Can apply multiple perspectives to complex global challenges and distinguish factual from value claims`,
            `Sees their generation as having agency in how these challenges play out`,
          ],
          nextLessonPreview: {
            title: `Lesson 16: Geography — Human-Environment Interaction`,
            hook: `How geography shapes human civilization and how humans reshape geography. A Case Study.`,
          },
        },
      ],
    },
  ],
};

export default SOCIAL_STUDIES_VOYAGER_L15;

if (import.meta.env?.DEV) {
  const l = SOCIAL_STUDIES_VOYAGER_L15.lessons[0];
  const mags = l.screens.filter((s) => s.type === `magazine`).length;
  const ps = l.screens.find((s) => s.type === `perspectives`)?.perspectives?.length ?? 0;
  const quiz = l.screens.find((s) => s.type === `quiz`)?.questions?.length ?? 0;
  console.log(`[LESSON-SS-VOYAGER-L15 ${VERSION}] "${l.title}" mags=${mags} perspectives=${ps} q=${quiz}`);
}
