// ─────────────────────────────────────────────────────────────────────────────
// SOCIAL STUDIES VOYAGER  |  L11 — Comparative Government: Systems Around the World
// Age band : voyagers (11-12)   Guide: atlas (Bear)
// Standards: C3 Framework (Civics/Global) — D2.Civ
// Interaction: PERSPECTIVES (debate). Paragraphs ~330ch. 3 vocab/section.
// ─────────────────────────────────────────────────────────────────────────────

const VERSION = "voyager-ss-l11-v1";

const SOCIAL_STUDIES_VOYAGER_L11 = {
  ageBand: `voyagers`,
  subjectId: `social_studies`,
  guide: `atlas`,

  lessons: [
    {
      id: `social-studies-11-12-11`,
      title: `Comparative Government: Systems Around the World`,
      duration: 35,
      xpReward: 75,
      badge: `systems-thinker`,
      badgeName: `Systems Thinker`,

      screens: [
        {
          id: `l11-welcome`,
          type: `welcome`,
          guideText: `{name}, for most of this band you've been studying the United States. Now we zoom out. Presidential democracies, parliamentary systems, federal and unitary states, authoritarian regimes: the world is organized dozens of different ways. Comparing them reveals something important — no system is obviously right, and each makes different trade-offs between stability, representation, and accountability. This lesson maps the terrain.`,
          headline: `Comparative Government: Systems Around the World`,
          subtitle: `How different countries structure power, what the choices mean, and what we learn by comparing them. A debate among many voices.`,
          visual: `/voyager-assets/social-studies/l11-welcome.webp`,
        },

        {
          id: `l11-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Why Compare?`,
          paragraphs: [
            `Comparative government studies how different countries organize political power: who makes decisions, how leaders are chosen and removed, and how power is distributed. Comparing systems reveals what a single system takes for granted, what it does well, and what problems other systems handle differently.`,
            `The major dimensions: whether governments are democratic or authoritarian (who holds power and whether they can be removed); presidential or parliamentary (how executive and legislature relate); federal or unitary (how power is distributed); and whether they protect civil liberties strongly or weakly. Each dimension involves real tradeoffs, not just "better" versus "worse."`,
            `Studying comparative government confronts a question of bias: Western liberal democracy is often presented as the universal endpoint all societies should reach. But other societies have different histories, values, and challenges, and some political scientists argue that imposing a single model ignores real diversity. Learning to compare honestly, without assuming one answer, is itself a crucial civic skill.`,
          ],
          image: `/voyager-assets/social-studies/l11-s1-why.webp`,
          imageCaption: `COMPARATIVE GOVERNMENT studies how different countries organize political power: who makes decisions, how leaders are chosen and removed, how power is distributed. Comparing systems reveals what each takes for granted, what it does well, and what problems others handle differently. Major dimensions: DEMOCRATIC vs. AUTHORITARIAN (who holds power and whether they can be removed); PRESIDENTIAL vs. PARLIAMENTARY design (how executive and legislature relate); FEDERAL vs. UNITARY structure (how power is distributed between levels); STRONG vs. WEAK civil liberty protections. Each dimension involves real tradeoffs. A key question: is LIBERAL DEMOCRACY the universal endpoint all societies should reach, or does that assumption reflect Western bias? Comparing honestly, without assuming one answer, is a crucial civic skill.`,
          vocab: [
            { word: `comparative government`,
              definition: `The study of how different countries structure political power, make decisions, and protect or limit rights, by systematically comparing their systems and institutions.`,
              audioPrompt: `Comparative government, {name}, is what you do when you stop studying one country's system as if it's just "government" and start asking: how do other countries solve the same problems, and what can we learn by comparing? When you study only one system, it feels natural and inevitable. When you compare it to others, you see it as one choice among many, with real strengths and weaknesses. This is one of the most powerful perspectives in political science: everything looks different when you can compare. What might you notice about your own country's government that you'd never see without the comparison?` },
            { word: `democratic vs. authoritarian`,
              definition: `The fundamental divide between governments where power is held accountable to the people (democratic) and those where a leader or group holds power without meaningful accountability (authoritarian).`,
              audioPrompt: `Democratic versus authoritarian, {name}, is the most fundamental divide in comparative government. In a democratic system, leaders are accountable to the people, can be voted out, and must operate within constitutional limits. In an authoritarian system, a leader or ruling group holds power without meaningful popular accountability, often suppressing opposition, controlling media, and using force or fear to maintain control. Most real governments exist on a spectrum between these poles rather than perfectly at one end. What do you think makes a democracy genuinely democratic, beyond just holding elections?` },
            { word: `systems comparison as a civic skill`,
              definition: `The ability to analyze different government systems without assuming any one is automatically superior, recognizing that each reflects choices and tradeoffs rather than natural inevitability.`,
              audioPrompt: `Systems comparison as a civic skill, {name}, means being able to look at different forms of government, presidential versus parliamentary, federal versus unitary, democratic versus authoritarian, and analyze each honestly without assuming one is obviously right. This is harder than it sounds: most people absorb their own country's system so deeply that it feels natural and inevitable. Comparison reveals it as a choice, with real costs and benefits. It also protects against propaganda, since anyone who claims "our system is the only legitimate one" is making an argument that comparison can test. How might this skill help you think about your own government more clearly?` },
          ],
        },

        {
          id: `l11-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Presidential And Parliamentary`,
          paragraphs: [
            `A fundamental choice any democracy makes is presidential or parliamentary. In a presidential system (like the U.S., Mexico, Brazil, and most of Latin America), the president is elected separately from the legislature and serves a fixed term, and cannot easily be removed except by impeachment. This creates strong checks but can produce gridlock.`,
            `In a parliamentary system (like the UK, Canada, Germany, India, and most of Europe), the executive (prime minister and cabinet) is not directly elected but emerges from the legislature. The prime minister leads the parliamentary majority. This fuses executive and legislature, making government more efficient and decisive, but reduces separation of powers.`,
            `Each system has real advantages. Presidential systems offer clearer individual accountability, fixed terms for stability, and strong separation of powers. Parliamentary systems produce more efficient lawmaking, remove failing leaders faster (via a vote of no confidence), and avoid deadlock. Most Latin American democracies use presidential systems, partly from U.S. influence, with mixed results.`,
          ],
          image: `/voyager-assets/social-studies/l11-s2-presidential-parliamentary.webp`,
          imageCaption: `PRESIDENTIAL SYSTEM (U.S., Mexico, Brazil, most of Latin America): the president is elected separately from the legislature and serves a fixed term. Strong checks, clear accountability, but can produce GRIDLOCK when different parties control each branch. PARLIAMENTARY SYSTEM (UK, Canada, Germany, India, most of Europe): the executive (prime minister and cabinet) emerges from the legislature; the PM leads the parliamentary majority. More efficient lawmaking, faster removal of failing leaders (VOTE OF NO CONFIDENCE), but less separation of powers. Presidential systems have clearer individual accountability and fixed stability; parliamentary systems avoid deadlock but can concentrate power in the majority party. Most of Latin America uses presidential systems, partly from U.S. historical influence, with mixed results.`,
          vocab: [
            { word: `presidential system`,
              definition: `A democratic design in which the executive (president) is elected separately from the legislature, serves a fixed term, and cannot easily be removed, creating strong checks but potential gridlock.`,
              audioPrompt: `A presidential system, {name}, is the design used by the U.S., Mexico, Brazil, and most of Latin America: the president is elected directly by voters, separately from the legislature, and serves a fixed term. This creates a strong separation of powers, which guards against any one branch dominating, and gives voters a clear individual to hold accountable. But it can also produce gridlock when the president and legislature belong to different parties and can't cooperate. Can you think of a recent example of gridlock in a presidential system you know? What did it cost the country?` },
            { word: `parliamentary system`,
              definition: `A democratic design in which the executive (prime minister) emerges from and is accountable to the legislature, enabling more efficient government but with less separation of powers.`,
              audioPrompt: `A parliamentary system, {name}, is the design used by the UK, Canada, Germany, India, and most of Europe: the prime minister isn't directly elected by all voters, but instead leads the largest party or coalition in parliament. This fuses the executive and legislature, making government more decisive (the PM usually controls the majority), and allows a failing prime minister to be removed quickly through a "vote of no confidence." The tradeoff: less separation of powers means fewer checks on majority government. Which do you find more appealing, a president with fixed stability, or a prime minister who can be removed quickly but must keep the parliament's support?` },
            { word: `vote of no confidence`,
              definition: `A parliamentary mechanism by which the legislature can remove the prime minister and government by voting that it no longer has confidence in them, forcing a new election or a new government.`,
              audioPrompt: `A vote of no confidence, {name}, is one of the most powerful features of parliamentary systems: the legislature can remove the prime minister and the whole government simply by voting that it no longer supports them. This is a fast, powerful accountability tool that presidential systems don't have, since presidents serve fixed terms and can only be removed through the slow, difficult process of impeachment. But it also creates instability if used frequently, and some parliamentary systems have had many governments in short periods. Is fast accountability worth the instability risk, or is a fixed term safer? That's the real tradeoff.` },
          ],
        },

        {
          id: `l11-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Federal And Unitary`,
          paragraphs: [
            `A second dimension is whether power is federal or unitary. In a federal system (like the U.S., Germany, Brazil, and India), power is divided between a national government and regional governments each with constitutionally protected authority. Neither level can abolish the other. This creates multiple power centers and allows regional variation.`,
            `In a unitary system (like the UK, France, Japan, and most countries worldwide), the central government has ultimate authority; it can delegate to regions but can take it back. Regional governments don't have independent constitutional authority. Policy is more uniform and nationally coordinated, but gives less room for regional difference.`,
            `Both systems have strengths. Federal systems allow regional variation (states as "laboratories of democracy"), make it harder for any faction to seize total control, and give local governments voice. But they can create coordination problems. Unitary systems are more coherent but may not serve regional needs. Diverse nations often choose federalism because their populations are too varied for one uniform approach.`,
          ],
          image: `/voyager-assets/social-studies/l11-s3-federal-unitary.webp`,
          imageCaption: `FEDERAL SYSTEM (U.S., Germany, Canada, Brazil, Mexico, India): power divided between a national government and regional governments (states, provinces) that each have constitutionally protected authority. Multiple power centers, regional variation, harder to seize total control. UNITARY SYSTEM (UK, France, Japan, most countries): the central government has ultimate authority; it can delegate power to regions but also take it back; regional governments have no independent constitutional protection. Unitary systems are more coherent and easier to coordinate nationally but offer less room for regional difference. Large, diverse nations often choose FEDERALISM because their populations are too varied for one uniform national approach. Tradeoffs: federal systems risk coordination problems; unitary systems risk ignoring regional needs.`,
          vocab: [
            { word: `federal system`,
              definition: `A form of government in which power is divided between a national government and regional governments (states, provinces), each with constitutionally protected authority that neither can simply abolish.`,
              audioPrompt: `A federal system, {name}, divides power between a national government and regional governments like states or provinces, and crucially, neither level can simply abolish the other's authority. Brazil, Mexico, Germany, and India all use federal systems, as does the U.S. Federalism allows regional variation, makes it harder for any group to seize total control, and lets local governments address their communities' specific needs. The cost: coordination is harder, and powerful regions can sometimes obstruct national goals. Can you think of an example where having regional variation was a strength? And one where it caused problems?` },
            { word: `unitary system`,
              definition: `A form of government in which the central government has ultimate authority and can delegate power to regions but can also take it back, making policy more uniform but less locally flexible.`,
              audioPrompt: `A unitary system, {name}, concentrates authority in the central government, which can share power with local governments but can also take it back. France and Japan are classic examples: national law is supreme everywhere, and regional governments exist at the center's will. Unitary systems are easier to coordinate nationally, more consistent in policy across the country, and faster to implement national priorities. But they may not serve the varied needs of a large or diverse population, and they concentrate power in ways that federalism is designed to avoid. What kinds of countries do you think are best served by unitary systems?` },
            { word: `diversity and governance design`,
              definition: `The principle that large, diverse nations often choose federal or decentralized systems to accommodate regional variation, while smaller, more homogeneous nations often prefer unitary systems.`,
              audioPrompt: `Diversity and governance design, {name}, is the idea that a country's level of internal diversity, ethnic, linguistic, regional, economic, strongly shapes which government structure makes sense for it. Large, diverse nations like India, Brazil, or the U.S. often use federal systems because no single national approach can serve all their varied communities. Smaller, more culturally unified nations often use unitary systems because coordination matters more than accommodation. This is why you can't simply copy one country's government design into another: the system should fit the society. How would you design a government structure for a very diverse, large nation with many different communities?` },
          ],
        },

        {
          id: `l11-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Democratic Fragility And Authoritarianism`,
          paragraphs: [
            `Democracy is not permanent. It can erode and collapse. Key threats: democratic backsliding (elected leaders weakening courts, free press, and checks from within), outright military coups, and populist authoritarianism, where leaders with genuine popular support use it to dismantle limits on their power while claiming democratic legitimacy.`,
            `Authoritarianism takes many forms: explicitly military regimes, one-party states (China, Cuba), or competitive authoritarian systems that hold elections but rig them. Some, like Singapore, delivered strong growth; others, like North Korea, produced poverty and oppression. Authoritarianism's relationship with development is complex, not a simple tradeoff between freedom and prosperity.`,
            `Latin America's twentieth century was defined by this struggle. Democracies gave way to military dictatorships (Argentina, Brazil, Chile, Uruguay in the 1970s), backed by the U.S. during the Cold War. Through the 1990s most transitioned back to democracy, though many continue to face challenges, from corruption to the appeal of strongman leaders who promise order over liberty.`,
          ],
          image: `/voyager-assets/social-studies/l11-s4-fragility.webp`,
          imageCaption: `DEMOCRACY IS NOT PERMANENT. Threats include DEMOCRATIC BACKSLIDING (elected leaders gradually weakening institutions, courts, press, checks from within), outright MILITARY COUPS, and POPULIST AUTHORITARIANISM (leaders with popular support dismantling limits while claiming democratic legitimacy). AUTHORITARIANISM takes many forms: military regimes, ONE-PARTY STATES (China, Cuba), COMPETITIVE AUTHORITARIAN systems that hold rigged elections. Some authoritarian systems (Singapore) delivered growth; others (North Korea) produced poverty. LATIN AMERICA's twentieth century was defined by this struggle, democracies giving way to military dictatorships (Argentina, Brazil, Chile, Uruguay in the 1970s), often backed by the U.S. during the Cold War, then transitioning back through the 1980s-90s, with ongoing challenges around corruption and strongman appeal.`,
          vocab: [
            { word: `democratic backsliding`,
              definition: `The gradual erosion of democratic institutions by elected leaders who weaken courts, press freedom, and checks and balances from within, while maintaining the outward forms of democracy.`,
              audioPrompt: `Democratic backsliding, {name}, is one of the most important political concepts of our time: when an elected leader gradually weakens the institutions that constrain them, independent courts, free press, electoral oversight, checks and balances, while still holding elections and calling themselves democratic. It's dangerous precisely because it looks like democracy from the outside, so it's hard to recognize and resist until significant damage is done. Political scientists have documented it happening in multiple countries in recent decades. What warning signs do you think should alert citizens that backsliding is happening before it goes too far?` },
            { word: `authoritarianism`,
              definition: `A system of government in which a leader or group holds power without meaningful popular accountability, often suppressing opposition, controlling information, and using force or fear.`,
              audioPrompt: `Authoritarianism, {name}, is the broad category of government systems in which power isn't genuinely accountable to the people. It takes many forms, military dictatorships, one-party states, competitive authoritarian systems that hold elections but rig them. Some authoritarian systems have delivered stability and growth; others have produced poverty and oppression. What they share is the absence of genuine accountability: the leaders can't be peacefully removed if the people decide they want change. Why do you think some populations support authoritarian leaders, and what conditions seem to make authoritarianism more appealing?` },
            { word: `Latin America and democracy`,
              definition: `The region's complex twentieth-century history of democratic transitions, military coups, U.S.-backed dictatorships, and ongoing struggles with corruption and democratic consolidation.`,
              audioPrompt: `Latin America and democracy, {name}, have had a complex, often painful relationship. Through the mid-twentieth century, much of the region oscillated between democratic governments and military dictatorships, many of which were backed by the United States during the Cold War as part of anti-communist strategy, regardless of the dictatorships' human rights records. Through the 1980s and 1990s most countries transitioned back to democracy, but many still face serious challenges: corruption, weak rule of law, inequality, and the appeal of strongman leaders. This history is deeply personal for millions of Latin American families. If your family has roots in Latin America, how has this political history shaped what you know of it?` },
          ],
        },

        {
          id: `l11-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Before The Debate`,
          paragraphs: [
            `Pull it together. Comparative government reveals each system as a choice, not a natural law. Presidential (separate executive, fixed terms) versus parliamentary (executive from legislature, faster accountability); federal (power shared) versus unitary (centralized authority); and democratic (accountable to people) versus authoritarian (not). Each involves real tradeoffs.`,
            `Democracy is not guaranteed. It can erode through backsliding, coups, or populist authoritarianism, as Latin America's history showed. Authoritarianism takes many forms and its relationship with development is complex. The assumption that Western liberal democracy is the universal right answer deserves scrutiny, not as a defense of authoritarianism, but as honest intellectual openness.`,
            `These structural choices generate genuine debate. Is democracy always better, and should the world promote it? Are presidential systems more stable than parliamentary ones for young democracies? Do federal systems suit diverse societies better? Five competing perspectives follow. Don't crown a winner. Begin forming your own view. Onward.`,
          ],
          image: `/voyager-assets/social-studies/l11-s5-before.webp`,
          imageCaption: `Threads together. Comparative government reveals each system as a CHOICE, not a natural law. Major dimensions: PRESIDENTIAL (separate executive, fixed terms) vs. PARLIAMENTARY (executive from legislature, faster accountability); FEDERAL (power shared between levels) vs. UNITARY (centralized authority); DEMOCRATIC (accountable to people) vs. AUTHORITARIAN (not). Each dimension involves real tradeoffs. Democracy is NOT GUARANTEED: it can erode through BACKSLIDING, coups, or populist authoritarianism, as Latin America's twentieth century showed. Authoritarianism's relationship with development is complex. And assuming Western liberal democracy is the universal right answer deserves honest scrutiny. The debate screen presents five competing perspectives. Don't crown a winner.`,
          vocab: [
            { word: `democratic promotion`,
              definition: `The effort by democracies to spread democratic governance to other countries, through diplomacy, aid, or pressure, a policy that is itself debated in terms of effectiveness and legitimacy.`,
              audioPrompt: `Democratic promotion, {name}, is the policy of actively trying to spread democratic governance to other countries, through diplomacy, aid, economic pressure, or sometimes military intervention. It's based on the premise that democracy is better for people everywhere and that spreading it makes the world more peaceful. Critics argue that imposed democracy rarely takes hold, that outside pressure often backfires, and that the hypocrisy of promoting democracy while supporting friendly dictators undermines the project's credibility. What do you think? Should powerful democracies actively try to spread their system, and what makes that effort legitimate or not?` },
            { word: `institutional fit`,
              definition: `The idea that government systems work best when they match a society's history, culture, diversity, and specific challenges, rather than copying another country's model regardless of context.`,
              audioPrompt: `Institutional fit, {name}, is the idea that government systems aren't one-size-fits-all. A system that works well in one country may fail in another because it doesn't match the society's history, culture, diversity, or specific challenges. This is why simply copying another country's constitution often doesn't produce the same results: the institutions need to fit the society they govern. It's an argument for humility when comparing systems and for letting societies develop their own political forms rather than imposing outsiders' preferred models. What do you think would matter most in designing a government system that genuinely fits a specific society?` },
            { word: `the value of comparison`,
              definition: `The intellectual benefit of studying multiple government systems: it reveals each as a choice, exposes assumptions, highlights strengths and weaknesses, and opens up alternatives.`,
              audioPrompt: `The value of comparison, {name}, is what you've built across this lesson: the ability to see your own country's government system as one choice among many, rather than the natural or inevitable way things are. This perspective is genuinely powerful. It reveals what each system takes for granted, exposes hidden costs and benefits, and shows that problems you might think are unavoidable might be handled differently by another system. Most importantly, it equips you to evaluate your own government more clearly, knowing what alternatives exist and what tradeoffs different designs involve.` },
          ],
        },

        {
          id: `l11-perspectives`,
          type: `perspectives`,
          headline: `The Great Debate: Which System Works Best, And For Whom?`,
          intro: `{name}, government systems involve real choices with real tradeoffs. Is democracy always better? Are presidential systems more stable for young democracies? Should diverse societies be federal? Here are five thoughtful voices. Don't crown a winner. Understand the genuine tensions, and begin forming your own informed view about how government should be structured.`,
          perspectives: [
            {
              id: `p1`,
              voice: `The democracy universalist`,
              era: `A view on government systems`,
              stance: `Liberal democracy is the best system of government for all societies, and the world should actively promote it.`,
              quote: `"Only democracies protect rights, hold leaders accountable, and produce lasting peace and prosperity. It isn't Western, it's human."`,
              argument: `Liberal democracy, government accountable to the people through free elections, protected rights, independent courts, and free press, is not a Western preference but a universal value. History shows that democracies are more peaceful with each other, better at long-run economic development, and more capable of correcting mistakes without violence. Democratic norms protect the rights of minorities and enable peaceful transitions of power. The world should actively support and promote democratic governance as the standard for legitimate government everywhere.`,
              evidence: `The "democratic peace theory" (democracies rarely go to war with each other); long-run economic and social development correlations with democratic governance; democracies' ability to correct errors peacefully; the spread of democracy through the late twentieth century.`,
              strengths_and_limits: `Strength: correctly identifies that democracy offers real, proven advantages: accountability, rights protection, peaceful transitions, and long-run stability. Limit: "universalism" can become a rationalization for imposing outside preferences, ignoring local history and conditions, or for hypocrisy (supporting friendly dictators while preaching democracy).`,
            },
            {
              id: `p2`,
              voice: `The stability prioritizer`,
              era: `A view on government systems`,
              stance: `For societies with weak institutions and a history of instability, order and stability may need to come before full democratic competition.`,
              quote: `"A democracy that collapses into chaos helps no one. Sometimes strong governance, even if not fully open, must come first."`,
              argument: `Democratic institutions require strong underlying conditions to function: rule of law, property rights, functioning courts, educated citizens, and some degree of economic development. Where these are absent, competitive democratic elections can produce instability, ethnic or religious violence, or capture by elites. Singapore's experience of managed, limited democracy producing high growth and stability, or arguments about stages of development suggest that prioritizing institutional capacity and stability before full democratization may sometimes be a reasonable path.`,
              evidence: `Historical cases of democratic transitions producing instability or civil conflict; Singapore's managed development model; research on conditions necessary for stable democracy; Eastern European and Latin American democratic transitions producing mixed results.`,
              strengths_and_limits: `Strength: takes seriously the conditions that make democracy actually function, rather than treating elections as sufficient for democracy. Limit: "stability first" has historically been used by authoritarian governments and their foreign supporters to indefinitely defer accountability, providing cover for repression rather than genuine institution-building.`,
            },
            {
              id: `p3`,
              voice: `The parliamentary enthusiast`,
              era: `A view on government systems`,
              stance: `Parliamentary systems produce more accountable, efficient, and stable governments than presidential systems, especially for young democracies.`,
              quote: `"Why would you give one person enormous fixed power and then have no way to remove them when they fail? Parliamentary systems do it better."`,
              argument: `Parliamentary systems, used successfully across Western Europe, India, and Canada, outperform presidential ones in several measurable ways: they avoid deadlock between executive and legislature, allow faster removal of failing leaders, and reduce the risk of a single charismatic leader accumulating personal power. Research on Latin America and other presidential democracies suggests they are more vulnerable to coups and breakdown than parliamentary alternatives. The U.S. presidential model may have worked for America, but is not necessarily the right export for the rest of the world.`,
              evidence: `Research comparing democratic breakdown rates in presidential vs. parliamentary systems; parliamentary systems' success across diverse countries and cultures; the U.S. model's specific historical conditions vs. its export to Latin America with different results; efficiency of parliamentary legislation.`,
              strengths_and_limits: `Strength: draws on real comparative research showing that presidential systems have higher breakdown rates in developing democracies, and that parliamentary systems handle certain failure modes better. Limit: parliamentary systems can also concentrate power in a dominant party, and "efficiency" in removing leaders can create instability if government changes too frequently.`,
            },
            {
              id: `p4`,
              voice: `The federalism champion`,
              era: `A view on government systems`,
              stance: `Diverse, large societies need federal systems that distribute power and allow regional variation, preventing central control from suppressing minorities.`,
              quote: `"In a country of many peoples, who are you to impose one single set of rules on everyone? Federalism is how you govern diversity."`,
              argument: `Federal systems are not just administrative convenience; they're a way of respecting real diversity within a single country. When ethnic, linguistic, cultural, or economic differences between regions are significant, a federal structure that gives those regions real authority protects minorities from national majorities, allows policy experimentation (the "laboratories of democracy"), and prevents any single faction from capturing the entire state. The world's largest and most diverse democracies, India, the United States, Germany, Brazil, are federal for good reasons.`,
              evidence: `Federal systems in large, diverse democracies; the accommodation of linguistic and cultural minorities through regional autonomy in Canada, Switzerland, and India; unitary systems' struggles with managing diversity in centralized ways; the "laboratories" benefit of state-level policy experimentation.`,
              strengths_and_limits: `Strength: correctly identifies that federalism can protect diversity, prevent total power concentration, and allow constructive experimentation. Limit: federal systems can also enable powerful regions to obstruct national goals (civil rights in the U.S. South), create policy inconsistency that harms citizens, and give wealthy regions advantages over poorer ones.`,
            },
            {
              id: `p5`,
              voice: `The contextual pluralist`,
              era: `A view on government systems`,
              stance: `No single government system is best for all societies; the right design depends on a society's history, culture, size, and specific challenges.`,
              quote: `"Stop looking for the one right answer. Different societies need different systems. The wisdom is in the fit, not the formula."`,
              argument: `Every society has a different history, culture, size, composition, and set of challenges, and different government systems work better or worse in different contexts. Parliamentary systems work brilliantly in some cultural contexts and struggle in others. Federalism suits large, diverse nations but may create more problems than it solves in small, homogeneous ones. Latin American presidential systems have faced challenges partly because they were adopted from the U.S. model without the specific historical and institutional context that made it function there. Genuine respect for political diversity means letting societies develop their own forms rather than importing blueprints.`,
              evidence: `Variation in how similar systems perform in different cultural contexts; the failures of imported constitutional models; the success of systems tailored to specific societies (Botswana's democracy, Singapore's managed system); political scientists' research on the importance of local conditions.`,
              strengths_and_limits: `Strength: models intellectual humility and genuine cross-cultural respect, refusing to impose any single model as universally correct. Limit: "it depends on context" can become a cop-out that rationalizes almost any system, including authoritarianism, and provides little practical guidance to societies trying to build better government.`,
            },
          ],
          synthesisPrompt: `After all five: where do YOU land? Is liberal democracy the right goal for all societies? Do parliamentary systems outperform presidential ones? Should diverse societies choose federal structures? Which voice challenged you most? In 5-6 sentences, there's no single right answer, only a thoughtful one.`,
          reflectionPrompt: `You've spent this lesson learning that the government you were born into is one choice among many, with real strengths and real weaknesses. How does it feel to see your own country's political system as a human design that could have been different, and what would you most want to change or preserve?`,
        },

        {
          id: `l11-quiz`,
          type: `quiz`,
          headline: `Check your understanding`,
          questions: [
            {
              id: `q1`,
              type: `multiple-choice`,
              question: `What is comparative government?`,
              options: [
                `A competition between governments to see which is the strongest.`,
                `The study of how different countries structure political power, by systematically comparing their systems.`,
                `The process of ranking countries by how democratic they are.`,
                `An exclusive study of only the most obviously successful governments throughout all of human history.`,
              ],
              correctIndex: 1,
              explanation: `Comparative government is the study of how different countries organize political power, by comparing their systems to reveal what each takes for granted, does well, and handles poorly. The distractors describe competition, ranking, or studying only successful cases.`,
            },
            {
              id: `q2`,
              type: `multiple-choice`,
              question: `What is the main difference between a presidential and a parliamentary system?`,
              options: [
                `Presidential systems always have directly elected presidents, while parliamentary systems on the other hand always officially have appointed hereditary kings or queens instead.`,
                `In a presidential system the executive is elected separately and serves a fixed term; in a parliamentary system the executive emerges from and is accountable to the legislature.`,
                `Parliamentary systems never have any written constitutions at all, while every presidential system in the world always does have a written constitution.`,
                `They are honestly just two completely different names that both describe the exact same identical form of democratic government, nothing more.`,
              ],
              correctIndex: 1,
              explanation: `In a presidential system the president is elected separately and serves a fixed term; in a parliamentary system the prime minister emerges from the legislature and can be removed by a vote of no confidence. The distractors confuse these with monarchy, constitutions, or treat them as identical.`,
            },
            {
              id: `q3`,
              type: `multiple-choice`,
              question: `What is a "vote of no confidence" in a parliamentary system?`,
              options: [
                `A referendum in which citizens vote on whether they trust the constitution.`,
                `A formal law specifically requiring that every single one of all government votes must be completely public.`,
                `A vote by the legislature to remove the prime minister and government when it loses parliamentary support.`,
                `A court ruling declaring an election result invalid.`,
              ],
              correctIndex: 2,
              explanation: `A vote of no confidence is the parliamentary mechanism by which the legislature removes the prime minister by voting it no longer supports them, forcing a new election or government. The distractors describe referenda, transparency laws, or court rulings.`,
            },
            {
              id: `q4`,
              type: `multiple-choice`,
              question: `What distinguishes a federal system from a unitary system?`,
              options: [
                `In a unitary system, the individual states and regional governments are actually more powerful than the national government above them.`,
                `A federal system divides power between national and regional governments with protected authority; a unitary system centralizes authority in the national government.`,
                `Federal systems have only one single level of government in total, while unitary systems on the other hand always have many different distinct levels of government.`,
                `They are honestly just two completely different names for the exact same identical governmental structure, just with different spellings.`,
              ],
              correctIndex: 1,
              explanation: `A federal system divides power between national and regional governments, each with constitutionally protected authority; a unitary system centralizes authority nationally, delegating to regions but able to take that power back. The distractors reverse the definition, describe the wrong structure, or conflate the two.`,
            },
            {
              id: `q5`,
              type: `multiple-choice`,
              question: `What is "democratic backsliding"?`,
              options: [
                `When a democracy voluntarily gives up its democratic system to become a republic.`,
                `When elected leaders gradually weaken democratic institutions (courts, free press, checks) while maintaining outward democratic forms.`,
                `When an entire country successfully and fully transitions away from authoritarianism and toward democratic governance.`,
                `When large numbers of registered voters simply choose not to participate in any way in an election.`,
              ],
              correctIndex: 1,
              explanation: `Democratic backsliding is when elected leaders gradually erode democratic institutions like independent courts, free press, and checks and balances from within, while still claiming democratic legitimacy. The distractors describe other transitions, democratization, or low turnout.`,
            },
            {
              id: `q6`,
              type: `multiple-choice`,
              question: `Which of the following is a potential advantage of federal systems?`,
              options: [
                `Federal systems entirely eliminate every single policy difference that might otherwise exist between all regions.`,
                `Federal systems always produce faster national policy than unitary ones.`,
                `Federal systems make it easier for one faction to seize total control of the government.`,
                `Federal systems allow regional variation and serve as "laboratories of democracy" where different policies can be tested.`,
              ],
              correctIndex: 3,
              explanation: `Federal systems allow regional variation, enable policy experimentation (states as "laboratories of democracy"), and make it harder for any single faction to seize total national control. The distractors reverse the advantages or describe characteristics of unitary systems.`,
            },
            {
              id: `q7`,
              type: `multiple-choice`,
              question: `What characterized much of Latin America's political experience in the twentieth century?`,
              options: [
                `Unbroken democratic governance throughout the entire region for over a century.`,
                `A region that entirely avoided any form of authoritarian government.`,
                `Oscillation between democratic governments and military dictatorships, with transitions back to democracy in the 1980s-90s.`,
                `Exclusively parliamentary systems directly modeled on traditional European governmental designs and traditions.`,
              ],
              correctIndex: 2,
              explanation: `Latin America's twentieth century was marked by oscillation between democratic governments and military dictatorships (many U.S.-backed during the Cold War), followed by democratic transitions in the 1980s-1990s, with ongoing governance challenges. The distractors falsely claim unbroken democracy, no authoritarianism, or European parliamentary models.`,
            },
            {
              id: `q8`,
              type: `multiple-choice`,
              question: `What does the concept of "institutional fit" suggest about government systems?`,
              options: [
                `All countries should adopt the same government system as soon as possible.`,
                `Government systems work best when they match a society's history, culture, and specific conditions.`,
                `Larger countries should always have unitary systems; smaller ones federal.`,
                `Every country needs both a presidential and a parliamentary branch simultaneously.`,
              ],
              correctIndex: 1,
              explanation: `Institutional fit is the idea that government systems work best when tailored to a society's specific history, culture, size, and challenges, rather than copying another country's model regardless of context. The distractors prescribe uniform adoption, false size rules, or simultaneous systems.`,
            },
            {
              id: `q9`,
              type: `true-false`,
              question: `True or false: Because the United States presidential system has been successful in the U.S., it is automatically the best model for new democracies around the world, and all new democracies should adopt the presidential design.`,
              correctAnswer: false,
              explanation: `False, and this is one of the key lessons that comparative government teaches: the success of a government system in one country does not mean it is automatically the best model for all countries, because systems work in context, shaped by a society's specific history, culture, institutions, and conditions. The U.S. presidential system developed within a specific historical context: a relatively small, highly literate, Protestant, British-colonial society with existing common-law traditions, independent courts, and civic institutions. Those contextual conditions shaped what worked. When the presidential model was adopted across Latin America, partly under U.S. influence, it often produced different results: higher rates of democratic breakdown (coups, constitutional crises), executive-legislative gridlock that paralyzed governments during crises, and vulnerability to personalist leaders who exploited the strong-executive design. Political scientist Juan Linz's influential research argued that presidential systems have higher rates of democratic breakdown than parliamentary ones in developing democracies, precisely because fixed presidential terms create no mechanism for removing a failing or dangerous leader short of a coup or the slow process of impeachment, whereas parliamentary systems can remove a prime minister quickly through a vote of no confidence. This isn't a claim that presidential systems are always bad or that parliamentary systems are always better, both have worked well in many contexts and failed in others. It is a claim that context matters enormously: what worked for the U.S. at a specific historical moment may not automatically transfer to societies with different histories, institutional legacies, and political cultures. The concept of "institutional fit" directly captures this: systems work best when they match the society they govern. So the statement is false: the success of the U.S. presidential model does not make it automatically best for new democracies everywhere. Comparative government teaches humility about transplanting models, and the importance of designing systems that fit the specific society they're meant to serve.`,
            },
            {
              id: `q10`,
              type: `inference`,
              question: `A new democracy in a large, ethnically diverse country with a history of regional conflict is designing its constitution. Using the lesson, which structural choices would best serve this country, and why?`,
              options: [
                `A unitary system and a presidential design are always best for any new democracy.`,
                `The country should copy the U.S. Constitution word for word as the safest option.`,
                `A federal system (to give regions real authority and protect minorities) and possibly a parliamentary design (to allow faster removal of failing leaders and avoid gridlock) would be worth considering, since diversity and the need for regional accommodation make these fits more likely, though context and local conditions must ultimately guide the choice.`,
                `A new democracy should choose authoritarianism first and switch to democracy only after it is wealthy.`,
              ],
              correctIndex: 2,
              explanation: `For a large, ethnically diverse country with regional conflict, a federal system (protecting regional minorities and allowing local autonomy) and possibly a parliamentary design (avoiding gridlock, enabling faster leadership removal) would be worth considering, based on the lesson's analysis. But institutional fit means local conditions matter ultimately. The distractors prescribe universal rules regardless of context, suggest copying another country verbatim, or recommend authoritarianism.`,
            },
          ],
        },

        {
          id: `l11-reflection`,
          type: `reflection`,
          headline: `Sit with this`,
          intro: `Pick the prompt that pulls at you most. Your answer is saved.`,
          prompts: [
            { id: `reflect-design`, category: `Your system is a choice`, prompt: `You've learned that the government you were born into is one design among many, with real strengths and weaknesses. How does it feel to see it as a human creation that could have been different, and what would you most want to change or preserve?` },
            { id: `reflect-surprise`, category: `What shifted`, prompt: `Before this lesson, you may not have thought much about presidential versus parliamentary, or federal versus unitary. What surprised you most in the comparisons, and did anything change in how you see your own country's system?` },
            { id: `reflect-democracy`, category: `Democracy's fragility`, prompt: `Democracy can erode through backsliding, coups, or populist authoritarianism, as Latin America's history dramatically shows. What do you think most threatens democracy today, and what do ordinary citizens do to protect it?` },
            { id: `reflect-heritage`, category: `Teaching comparative government`, prompt: `Caro, you're building social studies for conscious families with roots in Latin America. How would you help a child understand that the political history of their heritage country, its dictatorships and transitions back to democracy, reflects real human choices about government structure, so history feels personal rather than distant?` },
            { id: `reflect-universal`, category: `Universal or contextual?`, prompt: `Is liberal democracy the right goal for all societies, or does "one model fits all" reflect Western bias? Steelman the side you find less intuitive. After considering both, where do you land, and what would change your mind?` },
            { id: `reflect-critical`, category: `The hard question`, prompt: `"Stability first, democracy later" has been used to justify authoritarianism indefinitely. But some argue certain foundations must exist before democracy can function. What's the strongest honest version of this argument, and how do you guard against it being misused?` },
          ],
        },

        {
          id: `l11-real-world`,
          type: `real-world`,
          headline: `Take it into the world`,
          familyActivity: {
            title: `Compare Governments Around the World`,
            duration: `One afternoon`,
            description: `Turn an afternoon into a comparative government exploration, making different political systems come alive through real countries. Start with the dimensions: on a large sheet of paper, draw a grid with the four dimensions (democratic/authoritarian, presidential/parliamentary, federal/unitary, strong/weak rights) and place five countries you know on the grid. Notice how different countries cluster differently. Research a parliamentary democracy: pick one (UK, Canada, Germany, or India) and investigate how it works: who is the prime minister and how did they get the job, how does a vote of no confidence work, and how does it compare to the U.S. presidential system? Look up a recent example of a prime minister being removed and compare it to how that would work in a presidential system. Explore the Latin American comparison: pick a Latin American country your family knows and research its government structure. Is it presidential? Federal? When did it last transition between democracy and authoritarianism, and what caused the transition? What are current democratic challenges? Stage the debate using the five voices from the lesson, applied to a real current question (should a specific country adopt a parliamentary system, or should a large diverse country adopt federalism, or is democracy always the right goal). Make it personal: what would each family member change about your own country's government structure if they could, and why? Research one authoritarian government currently in power: what type of authoritarianism is it (military, one-party, competitive authoritarian)? How does it maintain power, and what is life like for ordinary citizens? The goal is to move from seeing government structures as fixed facts to understanding them as human designs with real consequences, things that can be compared, evaluated, reformed, and changed.`,
          },
          projectOption: {
            title: `The Comparative Constitution Project, 2 weeks (optional)`,
            duration: `2 weeks, ~40 minutes per session`,
            description: `Investigate the constitutions and government structures of two or three countries and compare them in depth, developing genuine expertise in comparative government. Week 1, choose and research your countries: select two or three countries with different government designs (one presidential, one parliamentary; one federal, one unitary; one democratic, one hybrid or authoritarian), including at least one from Latin America if possible. For each, research: What type of system is it (presidential or parliamentary)? Federal or unitary? What rights are constitutionally protected, and how strongly? How are leaders chosen and removed? What are the checks and balances? What is the country's history with democratic stability or breakdown? Find the actual constitutional text where possible (many constitutions are available online in English translation) and read key provisions directly. Week 2, analyze and compare: systematically compare your countries on each dimension. Where does each system seem to work better, and where does each struggle? How has each design interacted with the country's specific history and society, supporting the "institutional fit" idea? Which design seems most resilient to backsliding, and which most vulnerable? Then apply the lesson's five perspectives to each country: what would the democracy universalist, stability prioritizer, parliamentary enthusiast, federalism champion, and contextual pluralist each say about these countries' systems? Finally, form your own design: if you were advising a new country with specific characteristics (choose a fictional one with specific traits of diversity, size, and history), what government structure would you recommend and why? Produce your final piece, a comparative constitution report, a "government design memo" advising a new country, a side-by-side analysis presentation, or a debate between the systems, that demonstrates real comparative analysis and reasoned conclusions.`,
            offerToParent: `Parent: opt your child into the Comparative Constitution Project. Comparing the government structures of two or three real countries, analyzing their presidential versus parliamentary design, federal versus unitary structure, rights protections, accountability mechanisms, and historical performance, and applying five analytical perspectives, directly develops core C3 Framework civics concepts: types of government, constitutional design, democratic and authoritarian systems, and the relationship between government structure and political outcomes. Reading actual constitutional text, comparing across systems, and reasoning about institutional design builds civic literacy, analytical thinking, and genuine global awareness. Including a Latin American country makes this personally relevant to your family's heritage.`,
          },
          identityQuestion: `If you become someone who can compare government systems across countries without assuming any one is naturally or obviously right, who understands the tradeoffs between presidential and parliamentary, federal and unitary designs, who knows that democracy requires active maintenance and can erode, and who can evaluate your own country's system through the lens of real alternatives, what kind of citizen does that make you, one who engages government as an informed analyst rather than an unquestioning inheritor, that someone who never compared never can?`,
        },

        {
          id: `l11-identity-hook`,
          type: `identity-hook`,
          headline: `Who is this lesson making you?`,
          prompt: `One sentence. No wrong answer.`,
          placeholder: `Someone who...`,
          examples: [
            `Someone who can compare government systems across countries without assuming one is naturally right.`,
            `A person who understands that democracy requires active maintenance and can erode.`,
            `Someone who sees my own country's system as a human design with real alternatives.`,
          ],
          saveKey: `identity_responses_social_studies_11_12_11`,
        },

        {
          id: `l11-celebration`,
          type: `celebration`,
          guideText: `{name}. You've just done something that transforms how you see government: you've seen your own country's system as one design among many, with real strengths and real weaknesses, rather than as the natural or inevitable way things have to be. You learned to compare governments across the key dimensions: presidential (separate executive, fixed terms) versus parliamentary (executive from legislature, faster accountability); federal (power distributed to regions) versus unitary (centralized authority); and democratic versus authoritarian. You explored the real tradeoffs in each choice, gridlock versus efficiency, stability versus accountability, uniformity versus regional variation. You saw democracy's fragility, how it can erode through backsliding, coups, or populist authoritarianism, and traced Latin America's painful twentieth-century history as the real-world demonstration. And you weighed five genuine perspectives on which system works best, including the important challenge to assuming Western liberal democracy is the universal right answer for every society. You can now look at any country's government and analyze its design choices. Next, we move from how countries structure power internally to how they relate to each other: international relations, diplomacy, treaties, and conflict, the forces that shape war and peace. Onward, {name}. — Atlas`,
          badge: `systems-thinker`,
          badgeName: `Systems Thinker`,
          xpEarned: 75,
          competencies: [
            `Understands comparative government as a method for revealing each system's strengths and choices`,
            `Distinguishes presidential from parliamentary systems and their key tradeoffs`,
            `Understands federal versus unitary systems and when each fits best`,
            `Knows what democratic backsliding is and how democracy can erode from within`,
            `Understands authoritarianism's forms and its complex relationship with development`,
            `Knows Latin America's twentieth-century political history of democracies and dictatorships`,
            `Can evaluate government designs using multiple analytical perspectives`,
          ],
          nextLessonPreview: {
            title: `Lesson 12: International Relations — Diplomacy, Treaties, and Conflict`,
            hook: `How countries manage their relationships with each other, and why peace is harder than it looks. A debate among many voices.`,
          },
        },
      ],
    },
  ],
};

export default SOCIAL_STUDIES_VOYAGER_L11;

if (import.meta.env?.DEV) {
  const l = SOCIAL_STUDIES_VOYAGER_L11.lessons[0];
  const mags = l.screens.filter((s) => s.type === `magazine`).length;
  const ps = l.screens.find((s) => s.type === `perspectives`)?.perspectives?.length ?? 0;
  const quiz = l.screens.find((s) => s.type === `quiz`)?.questions?.length ?? 0;
  console.log(`[LESSON-SS-VOYAGER-L11 ${VERSION}] "${l.title}" mags=${mags} perspectives=${ps} q=${quiz}`);
}
