// ─────────────────────────────────────────────────────────────────────────────
// SOCIAL LEADERSHIP VOYAGER  |  L10 — Civic Engagement
// Age band : voyagers (11-12)   Guide: valor (Lion)
// Standards: Coreverse Original — Civics, Political Philosophy
// CALIBRATED: Voyager spec v1.1 (May 2026) — politically neutral; question is engagement level/scope, not partisan positions
// Interaction format: ARGUMENT BUILDER (active engagement / local-targeted / selective with private excellence)
// ─────────────────────────────────────────────────────────────────────────────

const VERSION = "voyager-sl-l10-v1";

const SOCIALLEADERSHIP_VOYAGER_L10 = {
  ageBand: `voyagers`,
  subjectId: `social-leadership`,
  guide: `valor`,

  lessons: [
    {
      id: `sl-11-12-10`,
      title: `Civic Engagement`,
      duration: 35,
      xpReward: 75,
      badge: `civic-thinker`,
      badgeName: `Civic Thinker`,

      screens: [
        {
          id: `l10-welcome`,
          type: `welcome`,
          guideText: `{name}, how engaged should citizens be with civic and political life? The question isn't about WHICH political positions are right — that's a separate question we're not addressing today. The question is about HOW MUCH and HOW citizens should engage with civic life regardless of their political views. Three serious positions exist, defended by thoughtful people across the political spectrum. Active engagement: citizens should be involved in civic life. Local and targeted: engagement is most useful at local levels and on specific issues. Selective with private excellence: basic civic duties plus personal/professional contribution. Today you build your argument for which fits your view. The question matters because how you engage shapes both your impact and your relationship to the broader community you're part of.`,
          headline: `Civic Engagement`,
          subtitle: `How engaged should citizens be? Three serious positions across the political spectrum.`,
          visual: `/voyager-assets/social-leadership/l10-welcome.webp`,
        },

        {
          id: `l10-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Why The Civic Engagement Question Matters`,
          paragraphs: [
            `Democratic societies face an ongoing question about what citizens owe to the broader political community. The question has been debated since ancient Athens. Pericles, in his funeral oration around 430 BCE, famously argued that Athenians who took no interest in public affairs were not "minding their own business" but were "good for nothing." Romans had similar civic ideals. The American founders explicitly worried that the republic would fail if citizens didn't engage with it.`,
            `The question has become more pressing in recent decades because civic engagement has measurably declined in many democracies. Robert Putnam's "Bowling Alone" (2000) documented decades of decline in American civic participation: church attendance, union membership, civic clubs, voting, political party involvement, even bowling leagues. The book's central image: more Americans bowl than ever, but bowling leagues have collapsed. People do activities together less than they used to. The decline preceded but has continued under the internet era.`,
            `Causes are contested. Putnam's argument focused on television (replacing collective activity with individual viewing) and changing family structures. Subsequent research has added the rise of suburban geography, longer work hours, two-earner households, the internet and social media, declining trust in institutions, and changing cultural priorities. Different researchers emphasize different factors. The fact of decline is well-documented; the right interpretation is contested.`,
            `Consequences are also debated. Some research suggests civic decline contributes to political polarization (people who don't engage with neighbors across difference don't develop the habits of working with people who disagree). Some research suggests it produces worse policy outcomes (less informed civic discussion, less accountability). Some suggests it correlates with declining social trust generally. Other researchers argue the correlation isn't causation and that civic engagement may be evolving rather than simply declining (online activism, mutual aid, new forms of organizing).`,
            `What's clear: the question of how citizens should engage with civic life is live in 2026 in ways it wasn't 50 years ago. Three serious positions exist, defended by thoughtful people across the political spectrum.`,
          ],
          image: `/voyager-assets/social-leadership/l10-s1-matters.webp`,
          imageCaption: `The civic engagement question goes back to ancient Athens. Robert Putnam's "Bowling Alone" documented decades of decline. Causes contested, fact established.`,
          vocab: [
            {
              word: `civic capital`,
              definition: `Term from Robert Putnam's work, especially "Bowling Alone" (2000). The networks of relationships, norms, and trust within a community that enable cooperation for shared benefit. Includes formal civic engagement (clubs, churches, unions, voting) and informal community ties (neighbors, friend groups, local relationships). Putnam documented decades of decline in many forms of civic capital in the US since roughly 1960.`,
              audioPrompt: `Civic capital is a term from Robert Putnam's work, especially his 2000 book "Bowling Alone," {name}. Refers to the networks of relationships, norms, and trust within a community that enable cooperation for shared benefit. Includes formal civic engagement like clubs, churches, unions, voting, political party involvement, and civic organizations. Also includes informal community ties like neighbors knowing each other, friend groups, local relationships. Putnam's research documented decades of decline in many forms of civic capital in the US since roughly 1960. The book's central image was bowling: more Americans bowl than ever, but bowling leagues have collapsed. People do things alone or with their immediate family but participate less in broader community structures. The decline preceded the internet but has continued through it. Civic capital matters because it produces specific benefits: easier cooperation across difference, more informed civic discussion, more accountability for local institutions, more social trust generally. Communities with high civic capital function differently from communities with low civic capital.`,
            },
            {
              word: `Bowling Alone`,
              definition: `2000 book by Robert Putnam documenting decades of decline in American civic participation. Named after the observation that more Americans bowl than ever but bowling leagues have collapsed. Documents decline across church attendance, union membership, civic clubs, voting, political party involvement, and informal social connections. Has shaped subsequent civic engagement scholarship and debate.`,
              audioPrompt: `Bowling Alone is a 2000 book by Robert Putnam that documented decades of decline in American civic participation, {name}. The title comes from the book's central image: more Americans bowl than ever, but bowling leagues have collapsed. People do the activity alone or with immediate family rather than in organized community structures. The book documented similar patterns across many forms of civic engagement: church attendance, union membership, civic clubs, voting rates, political party involvement, and even informal social connections like knowing your neighbors. The decline Putnam documented started around 1960 — well before the internet — and continued through the internet era. The book's argument is that this decline matters: civic capital produces real community benefits (easier cooperation, more accountability, more social trust), and its decline has real consequences. The book sparked significant scholarly and public debate. Causes of decline are contested — Putnam emphasized television and changing family structures; others have added suburban geography, longer work hours, the internet, declining institutional trust. The fact of decline is well-documented even when interpretations differ.`,
            },
            {
              word: `political polarization`,
              definition: `One consequence of civic decline identified in the text and associated research. People who don't engage with neighbors across political difference don't develop the habits of working with people who disagree. Research suggests civic decline may contribute to polarization, though the relationship is debated. Civic engagement — especially local, cross-difference engagement — has historically been one mechanism for managing political disagreement in democratic societies.`,
              audioPrompt: `Political polarization is one consequence of civic decline identified in the text and associated research, {name}. When people don't engage with neighbors across political difference — when they participate less in civic institutions that historically brought people of different views into cooperative relationships — they stop developing the habits and skills of working with people they disagree with. Research suggests this contributes to polarization: people's views become more extreme and less calibrated by exposure to real-world disagreement when their social worlds include primarily people who already agree with them. The text is careful about this: it notes some research suggests the connection, while other researchers argue civic engagement may be evolving rather than simply declining, and that correlation doesn't establish causation. But the hypothesis is directionally supported: the civic institutions that have declined historically served partly to manage political disagreement by putting people with different views into ongoing cooperative relationships. Their decline removes one mechanism for that management. Whether it's the primary driver of contemporary polarization is contested; that there's a relationship seems plausible given the patterns.`,
            },
          ],
        },

        {
          id: `l10-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Position 1: Active Engagement`,
          paragraphs: [
            `The first position: citizens should be actively engaged with civic and political life. Vote in elections (local, state, national). Stay informed about current issues. Attend public meetings when relevant. Contact representatives about positions. Advocate for what you believe. Organize with others. Potentially run for office, serve on boards, volunteer for campaigns. Democracy isn't a spectator sport; it requires participation.`,
            `The case has real strength. Democratic theory from many traditions assumes engaged citizens. Pericles, the American founders, classical political philosophy across cultures all treated active citizenship as central to a functioning political community. The institutions of democracy depend on people using them; representatives respond to engaged constituents more than to silent ones; policy reflects what engaged groups push for. If citizens disengage, the institutions don't function the way they were designed to.`,
            `Defenders include Robert Putnam (whose "Bowling Alone" is partly a call to renewed civic engagement), much of the civic education tradition, voting rights and civic organizing movements across the political spectrum, many thoughtful working politicians and policy makers, traditions in both progressive and conservative thinking that emphasize active citizenship. Examples: civil rights movement, anti-war movements, both progressive and conservative grassroots organizing, environmental movements, religious communities engaged with public life.`,
            `The position recognizes specific benefits of active engagement: developing real understanding of how institutions work (different from media-mediated understanding), building relationships with people across difference, learning to work toward shared goals with people who disagree on other things, contributing to the accountability that prevents institutional failure, and producing real change on issues you care about. None of these benefits come from disengagement; many require sustained engagement over years.`,
            `The limits. Active engagement is time-intensive. Most people have limited time after work, school, family, and other commitments. Asking everyone to engage at the level a healthy democracy might require is asking for hours per week from people who don't have them. The active-engagement framing also can produce burnout (issue-related anxiety, performative engagement that doesn't lead anywhere) and can crowd out other valuable activities. Pure active engagement, applied universally, asks more of citizens than is realistic.`,
          ],
          image: `/voyager-assets/social-leadership/l10-s2-active.webp`,
          imageCaption: `Position 1: active engagement. Democracy requires participation. Voting, meetings, advocacy, organizing. Pericles, Putnam, civic education tradition.`,
          vocab: [
            {
              word: `participatory democracy`,
              definition: `Vision of democracy where citizens are actively engaged in civic and political life beyond just voting. Emphasizes deliberation, organizing, attending meetings, advocacy, and direct involvement in shaping policy. Contrast with "representative democracy minimalism" where citizens primarily vote for representatives who then make decisions. Most working democracies blend both; the question is the balance.`,
              audioPrompt: `Participatory democracy is a vision of democracy where citizens are actively engaged in civic and political life beyond just voting, {name}. Emphasizes deliberation about important questions, organizing with others, attending public meetings, advocacy for specific positions, and direct involvement in shaping policy. Contrast with "representative democracy minimalism" where citizens primarily vote for representatives who then make decisions on their behalf without much further citizen engagement. Most working democracies blend both elements; pure versions of either are uncommon. The question is the balance. Defenders of participatory democracy argue it produces better policy (more voices, more accountability), better citizens (more capable of working across difference), and more durable institutions (real engagement makes them harder to undermine). Critics argue it asks too much of most citizens and can lead to dominance by activists who have time to engage at high levels. The debate is real and ongoing.`,
            },
            {
              word: `civic burnout`,
              definition: `The phenomenon of active civic engagement producing issue-related anxiety, performative engagement that doesn't lead anywhere, and exhaustion that leads to eventual withdrawal. Identified as a limit of the active engagement position. Can result from asking more than most citizens can sustain, or from engagement that produces emotional activation without measurable impact. One reason the active engagement framing alone isn't sufficient for most people.`,
              audioPrompt: `Civic burnout is a phenomenon where active civic engagement produces issue-related anxiety, performative engagement that doesn't lead anywhere, and eventually exhaustion that leads to withdrawal, {name}. Identified in the text as one of the real limits of the active engagement position. The active engagement framing is compelling in theory — democracy requires participation, institutions need engaged citizens — but the same framing can produce specific harms when applied universally. Issue-related anxiety is one: constant exposure to high-stakes civic issues, combined with the sense of urgency that active engagement culture produces, leads many people to chronic anxiety states that don't produce civic outcomes. Performative engagement is another: activities that signal engagement without producing any real effect (sharing posts, signing online petitions, attending large marches without follow-up) provide the emotional experience of "doing something" without the impact. When this pattern persists, it contributes to burnout — exhaustion that produces eventual withdrawal. The local and targeted position partly addresses civic burnout by focusing engagement where real impact is possible, which is more sustaining than diffuse national engagement that rarely produces measurable results for individual participants.`,
            },
            {
              word: `marginal impact`,
              definition: `The principle of asking where your time and civic energy can actually produce change. Used in the text to support the local and targeted engagement position. A small group of engaged neighbors can measurably affect a city council vote or school policy. The same group spending the same time on national politics usually produces no measurable effect because their voices are lost among millions.`,
              audioPrompt: `Marginal impact is the principle of asking where your time and civic energy can actually produce change, {name}. Applied to civic engagement, it asks: given that your time is finite and civic engagement requires real time, where can that time make the most difference? The text uses it as a key supporting argument for the local and targeted position. A small group of engaged neighbors can shape a city council vote, change school policy, prevent a bad development, or build a new community asset. The change is measurable; the connection between the group's engagement and the outcome is traceable. The same group spending the same time on national politics usually produces no measurable effect at all, because their voices get lost among millions of other people also trying to influence the same outcomes. From a marginal impact perspective, the same hours invested locally produce far more civic effect than the same hours invested nationally, for most citizens. This doesn't mean national issues don't matter — the text acknowledges some issues genuinely require national engagement. It means that for a person asking where to invest their limited civic time, the local level is where most people's time actually changes outcomes.`,
            },
          ],
        },

        {
          id: `l10-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Position 2: Local And Targeted Engagement`,
          paragraphs: [
            `The second position: citizens should engage where they can actually have impact rather than spreading thin across all civic issues. For most people, this means local government (city councils, school boards, neighborhood organizations) and specific issues they deeply care about, rather than diffuse engagement with all national political issues. Most civic energy goes furthest at local levels because local institutions are smaller, more responsive, and less mediated.`,
            `The case has real strength. Local engagement produces measurable effects in ways national engagement often doesn't. A small group of engaged neighbors can shape a city council vote, change school policy, prevent a bad development, or build a new community asset. The same group spending the same time on national politics often has no measurable effect because their voices get lost among millions. The principle of "marginal impact" applies: where can your time and energy actually produce change?`,
            `Defenders include Robert Nisbet (whose "The Quest for Community" argued for the importance of intermediate institutions between individual and state), many community organizing traditions (Saul Alinsky's tradition emphasized local power building), local government scholars, both progressive and conservative thinkers who emphasize subsidiarity (decisions should be made at the most local level practical), and many working community organizers across the political spectrum. The position has religious traditions backing it too: many religious communities frame civic engagement primarily through local congregational and community work.`,
            `The position recognizes specific advantages of local engagement: immediate feedback (you see results), relationships with people you actually know, building real capability rather than performance, accumulating durable effects over time, building civic capital that compounds. National-level engagement often produces immediate emotional satisfaction (the feeling of "doing something about" big issues) but rarely produces measurable impact for most participants.`,
            `The position also fits with research showing that broad national civic engagement often produces polarization, anxiety, and burnout while local engagement tends to produce relationships across difference, real skill development, and durable community capital. The same hours produce different effects depending on where they're invested.`,
            `The limits. Some issues genuinely require national or international engagement (climate policy, civil rights expansion, major institutional change). Pure local focus can underweight these. The local-only framing can also be used to avoid harder national issues that require sustained engagement. And some communities have local institutions so dysfunctional that pure local focus isn't sufficient; they need outside engagement or institutional change at higher levels to function. The right balance depends on specific situations.`,
          ],
          image: `/voyager-assets/social-leadership/l10-s3-local.webp`,
          imageCaption: `Position 2: local and targeted engagement. Real impact where you can actually have it. Nisbet, community organizing, subsidiarity tradition.`,
          vocab: [
            {
              word: `subsidiarity`,
              definition: `Principle that decisions should be made at the most local level practical for the issue. Original meaning from Catholic social teaching; adopted broadly across political traditions. Implies that higher levels of authority should only handle what lower levels can't. Has informed federalism debates, EU governance, business decentralization, and many other domains. Different traditions apply it differently but the underlying principle is widely shared.`,
              audioPrompt: `Subsidiarity is the principle that decisions should be made at the most local level practical for the issue, {name}. The original meaning came from Catholic social teaching, where it was articulated as a key principle of how community and authority should be structured. The principle has been adopted broadly across political traditions, both progressive and conservative, both religious and secular. It implies that higher levels of authority should only handle what lower levels can't handle effectively. Federal government should handle what states can't. State government should handle what counties and cities can't. Local government should handle what neighborhoods and individuals can't. The principle has informed federalism debates, EU governance (where it's an explicit constitutional principle), business decentralization theories, and many other domains. Different traditions apply it differently. Some emphasize keeping authority as local as possible; others emphasize that higher levels exist precisely to handle what lower levels can't. The underlying principle is widely shared even when application is debated.`,
            },
            {
              word: `community organizing`,
              definition: `Tradition of civic engagement that builds local power through organized collective action. Associated with Saul Alinsky's foundational work and many subsequent practitioners. Emphasizes building relationships in specific communities, identifying shared interests, and taking targeted local action rather than diffuse national advocacy. Practiced across the political spectrum. One of the primary defenses of the local and targeted engagement position.`,
              audioPrompt: `Community organizing is a tradition of civic engagement that builds local power through organized collective action, {name}. Associated with Saul Alinsky, whose 1971 book "Rules for Radicals" formalized many of the tradition's principles, and with many subsequent practitioners across the political spectrum. The tradition emphasizes building real relationships within specific communities, identifying shared interests that can motivate collective action, and taking targeted local action — on specific issues, with specific people, in specific places — rather than diffuse national advocacy. The core insight is that power is built through organized relationships, not through individual action or symbolic gestures. A neighborhood organization that has built relationships, identified leadership, and developed organizing capacity can produce change on local issues. The same energy put into national engagement usually produces no comparable local result. The text identifies the community organizing tradition as one of the primary defenses of the local and targeted engagement position. Its principles have been applied across many types of issues and many political contexts, which is why the text notes that the local and targeted position has defenders across the political spectrum.`,
            },
            {
              word: `basic civic duties`,
              definition: `The minimum civic engagement expected of citizens across most traditions, including the private-excellence position. Includes voting in major elections, following laws, paying taxes, serving on juries when called, raising children responsibly, and treating neighbors decently. Distinguished from broader civic engagement: even the most restricted civic engagement position (position 3) maintains these duties as non-negotiable.`,
              audioPrompt: `Basic civic duties are the minimum civic engagement expected of citizens across most traditions, including the private excellence position that otherwise minimizes civic activity, {name}. The text defines them as: voting in major elections, following laws, paying taxes, serving on juries when called, raising your children responsibly, and treating your neighbors decently. These duties are distinguished from broader civic engagement — attending meetings, organizing, advocacy, running for office — which the three positions debate. Even the most restricted civic engagement position, position 3, maintains basic civic duties as non-negotiable. The text uses this to draw a clear distinction between the private excellence position and pure civic disengagement. Pure disengagement — not voting, not following laws, ignoring civic duties entirely — isn't actually one of the three positions in the lesson. It's a different thing entirely. Someone using position 3 as justification for skipping even basic civic duties has misunderstood the position. Position 3 argues for focusing most energy on domain excellence while maintaining basic civic duties. The duties are the floor on which the position rests.`,
            },
          ],
        },

        {
          id: `l10-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Position 3: Selective Engagement With Private Excellence`,
          paragraphs: [
            `The third position: citizens should fulfill their basic civic duties (vote in major elections, follow laws, pay taxes, serve on juries when called, raise their children, treat neighbors decently) but focus most of their energy on personal/professional excellence. The best contribution most people make to society is being excellent in their own domain — being a great doctor, teacher, parent, craftsperson, scientist, artist, businessperson — rather than being a mediocre political activist.`,
            `The case has real strength. Most contributions to human flourishing across history have come from people doing excellent work in specific domains, not from political activism. The scientists who developed medical advances, the farmers who fed populations, the teachers who shaped students, the artists who created what later generations valued — most of them weren't primarily known for civic engagement. Their civic contribution was being good at what they did and doing it well over decades.`,
            `Defenders include Charles Murray (whose work on civic engagement has emphasized both the importance of civic capital AND the value of personal/professional excellence as a contribution), many philosophical traditions (Confucian, Stoic, classical liberal) that emphasized cultivating personal virtue and excellence as the primary civic contribution, religious traditions that frame work itself as a form of service, parts of both progressive and conservative thinking that emphasize building rather than just opposing.`,
            `The position recognizes specific patterns. Time is finite; the same hours can produce excellence in your domain OR contribute to civic activism, not both at full intensity. Excellence compounds dramatically across years; an excellent surgeon at 60 has saved thousands of lives in ways their political activity wouldn't have produced. Civic activism without underlying excellence in some domain tends to produce performance rather than substance. The skilled engineer who knows building codes can shape city development more than the same person could through general activism; the skilled teacher who actually develops students contributes more than the same person could through general education advocacy. Building real capability in your domain often produces more civic contribution than diffuse civic engagement does.`,
            `The position also recognizes that pure civic engagement without underlying excellence can become a substitute for substantive contribution. Some people pour energy into political activism partly because they haven't developed real capability in any specific domain. The activism becomes identity; the lack of underlying contribution gets masked by the visible engagement. Real civic contribution often comes from people who are also genuinely excellent at something specific.`,
            `The limits. The position can become a justification for civic disengagement that doesn't actually produce excellence either ("I'm not engaging civically because I'm focused on my work" by people not actually building excellent work). It can underweight situations where civic engagement is genuinely necessary (some crises require active citizen response). And it can be used to justify ignoring serious injustices that require sustained civic attention to address. The position works best when combined with active fulfillment of basic civic duties and engagement on specific issues where you have real expertise; it overstates when used as cover for general civic withdrawal.`,
          ],
          image: `/voyager-assets/social-leadership/l10-s4-private.webp`,
          imageCaption: `Position 3: selective civic engagement with private excellence. Basic civic duties + excellence in your domain. Murray, Confucian/Stoic/classical liberal traditions.`,
          vocab: [
            {
              word: `civic contribution`,
              definition: `Framing where the primary civic contribution most people make is being excellent in their own domain (work, family, community) rather than through political activism. Roots in Confucian, Stoic, and classical liberal traditions, plus religious frameworks that treat work as service. Distinct from pure self-interest because the framing values genuine excellence and service through one's domain.`,
              audioPrompt: `Private excellence as civic contribution is a framing where the primary civic contribution most people make is being excellent in their own domain rather than through political activism, {name}. Roots in Confucian tradition (cultivating personal virtue contributes to society), Stoic philosophy (excellence in your specific role is your contribution), classical liberal tradition (productive private activity is itself socially valuable), and many religious frameworks that treat work as service. Distinct from pure self-interest because the framing values genuine excellence and service through one's domain, not just self-advancement. The excellent doctor contributes to society through medical excellence; the excellent teacher through teaching; the excellent parent through raising capable children. Each is real civic contribution even though it's not what we usually label "civic engagement." The position recognizes that time is finite, excellence compounds dramatically over years, and most historical contributions to human flourishing have come from domain excellence rather than activism. Used well, it produces real contribution; used as cover for general withdrawal, it produces neither excellence nor contribution.`,
            },
            {
              word: `compounding excellence`,
              definition: `The pattern by which domain excellence grows dramatically over decades. An excellent surgeon at 60 has saved thousands of lives in ways their political activity wouldn't have produced. An excellent teacher over thirty years has shaped thousands of students. Excellence compounds because skill builds on skill, relationships build on relationships, and reputation builds on track record. One of the core arguments for the private excellence as civic contribution position.`,
              audioPrompt: `Compounding excellence is the pattern by which domain excellence grows dramatically over decades, {name}. The text uses it as one of the core arguments for the private excellence as civic contribution position. The example given is direct: an excellent surgeon at 60 has saved thousands of lives in ways their political activism wouldn't have produced. The compound effect of expertise applied over decades — skill that builds on prior skill, relationships with patients and colleagues that build on earlier relationships, reputation that builds on track record — produces contribution that dwarfs what the same person could have accomplished through general civic activism over the same period. The same pattern applies across domains. The excellent teacher who has taught the same subject for thirty years has shaped thousands of students. The excellent engineer who has designed well for decades has produced infrastructure that functions reliably. The excellence compounds; the civic contribution through the domain grows larger with each year of continued practice. This is one of the reasons the text notes that time is finite and that the same hours can produce excellence in your domain or civic activism — not both at full intensity. For many people over many decades, the compounding effects favor domain excellence as the primary contribution.`,
            },
            {
              word: `deliberate framework`,
              definition: `The outcome the lesson aims for: explicit, chosen civic engagement framework rather than an absorbed default. Most adults absorb whichever civic engagement approach their environment offers without thinking about it. Explicitly choosing a framework — deciding which position fits your situation, why, and what that implies for your behavior — produces dramatically different outcomes over decades of citizenship.`,
              audioPrompt: `A deliberate framework is the outcome the lesson aims for: an explicit, chosen civic engagement approach rather than an absorbed default, {name}. The text makes this explicit in the fifth magazine section. Most adults absorb whichever framework their environment offers — the civic culture of their family, community, school, or media — without explicitly considering the alternatives or making a deliberate choice. They engage at whatever level feels normal to the people around them, on whatever issues those people are engaged with, using whatever approach they have absorbed. Explicitly choosing a framework means doing something different: considering the three positions, understanding what each argues and why, evaluating which fits your specific situation and stage of life, and committing to a primary framing while remaining open to blending elements as circumstances change. The text notes that you are 12, that you will be voting in 6-7 years, and that the civic engagement framework you build now shapes how you will engage with public life for the next 70 years. Explicitly choosing at 12, before the default has fully formed, produces dramatically different outcomes over decades than absorbing whatever the environment offers and calling it your position.`,
            },
          ],
        },

        {
          id: `l10-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Before You Build Your Argument`,
          paragraphs: [
            `As you build your argument, notice that the three positions aren't strictly mutually exclusive. Most mature views blend elements: basic civic duties always, local engagement where possible, focused excellence in your domain, occasional broader engagement on issues where you have real knowledge or experience. The forcing function of the argument is committing to a primary framing.`,
            `One framing to consider. Each position implies different practical defaults. Position 1: default to engaging when civic opportunities arise. Position 2: default to local and specific-issue engagement; skip diffuse national activism. Position 3: default to building excellence in your domain; engage civically only where you have real expertise or particular concern.`,
            `Another framing. The right position may depend on your specific situation. People with significant free time, real interest in politics, and skill at organizing may contribute most through position 1. People with strong local communities and specific local interests may contribute most through position 2. People building real domain expertise (especially in their first few decades of work) may contribute most through position 3. The same person might shift across positions at different life stages.`,
            `One important note on political neutrality. This lesson deliberately doesn't take positions on specific political issues. The question of HOW engaged citizens should be is separate from WHICH political positions they should hold. People across the entire political spectrum hold each of the three civic-engagement positions. You can be an active engagement person while holding any political views, a local-focus person while holding any political views, a private-excellence person while holding any political views. The civic-engagement question is real and contested independent of partisan politics.`,
            `One last framing. You're 12. You'll be voting in 6-7 years (depending on your country's voting age). The civic engagement framework you build now shapes how you'll engage with public life for the next 70 years. Most adults absorb whichever framework their environment offers without explicit consideration; explicitly choosing produces dramatically different outcomes over decades.`,
          ],
          image: `/voyager-assets/social-leadership/l10-s5-before.webp`,
          imageCaption: `Three positions across the political spectrum. The question is engagement level/scope, not partisan views.`,
          vocab: [
            {
              word: `civic engagement`,
              definition: `Activities through which citizens engage with public life beyond purely private activities. Includes voting, attending meetings, joining civic organizations, advocacy, volunteering, running for office, contacting representatives, public deliberation. Different from "political engagement" (which is specifically about partisan/electoral politics): civic engagement is broader and includes nonpartisan community work.`,
              audioPrompt: `Civic engagement in its general sense refers to activities through which citizens engage with public life beyond purely private activities, {name}. Includes voting in elections, attending public meetings (city council, school board, town hall), joining civic organizations (clubs, religious communities, professional associations, mutual aid groups), advocacy for specific positions or issues, volunteering for community organizations, running for office, contacting representatives about specific concerns, participating in public deliberation. Different from "political engagement" specifically, which usually refers to partisan or electoral politics. Civic engagement is broader and includes a lot of nonpartisan community work: helping at a food bank, volunteering at a library, organizing a neighborhood event, attending school board meetings, being part of religious community service. People can engage civically while disengaging politically, or vice versa. The terms get used loosely; precise use clarifies what specifically is being discussed.`,
            },
            {
              word: `collective-action problem`,
              definition: `The challenge identified in the argument builder's counterargument. Civic engagement is not purely individual choice because its benefits and costs depend on what others do. If everyone takes the private excellence position, institutions that require active citizenship may fail. If enough people engage, the collective effect is strong even if any individual's impact is small. The right individual civic engagement level depends partly on what others are doing — making it a collective question, not just an individual one.`,
              audioPrompt: `The collective-action problem in civic engagement is the challenge identified in the argument builder's strongest counterargument, {name}. The counterargument makes a real point: all three positions treat civic engagement as primarily about individual choice — how engaged should you personally be. But civic engagement is partly a collective phenomenon. The strength of a civic culture depends on what most people do, not what one person individually does. If enough people take position three — basic duties plus private excellence — institutions that require active citizen participation may not get that participation. They may function poorly or not at all. If enough people engage actively, the collective effect is strong even if any individual's marginal contribution is small. The right individual civic engagement level depends partly on what others in your community are doing. If civic institutions are robust and many people are engaged, there's more room for individuals to concentrate on private excellence. If civic institutions are degrading and very few people are engaged, the same private excellence choice produces a different collective outcome. This is why the lesson's counterargument pushes back on all three individual-choice framings: civic engagement is essentially a collective-action question, and individual reasoning that ignores the collective dimension may be reasoning about the wrong level.`,
            },
            {
              word: `life stage and engagement`,
              definition: `The observation from the lesson that the right civic engagement position may depend on where a person is in life. People with significant free time and organizing skill may contribute most through active engagement. People with strong local communities and specific local interests may contribute most through the local-targeted position. People building real domain expertise in their first decades of work may contribute most through private excellence. The same person may shift across positions at different life stages.`,
              audioPrompt: `Life stage and engagement is the observation from the lesson that the right civic engagement position may depend on where a person is in life, {name}. The text lays out three patterns. People with significant free time, real interest in politics, and skill at organizing may contribute most through position one, active engagement. People with strong local communities and specific local interests may contribute most through position two, local and targeted engagement. People building real domain expertise — especially in their first few decades of work — may contribute most through position three, private excellence with basic civic duties. The same person might shift across positions at different life stages. This matters for how you build your own civic engagement framework. The position that fits best at 12 or 22 may not be the same as the position that fits best at 40 or 60. The lesson's framing isn't that you pick a position forever; it's that you pick a primary framing now, deliberately, while remaining open to adjusting as your situation changes. Most adults absorbed their civic engagement framework from their environment without explicit consideration; choosing deliberately at 12, before the default has fully formed, produces dramatically different outcomes over decades of citizenship.`,
            },
          ],
        },

        // ───── ARGUMENT BUILDER ───────────────────────────────────────────────
        {
          id: `l10-argument-builder`,
          type: `argument-builder`,
          headline: `How Engaged Should Citizens Be With Civic Life?`,
          intro: `Pick the position that best captures your current thinking. Build your case with 3-4 pieces of evidence. Then respond to the strongest counterargument. People across the political spectrum hold each position.`,
          positions: [
            {
              id: `active-engagement`,
              label: `Active engagement: citizens should be involved in civic life — voting, meetings, advocacy, organizing`,
              summary: `Democracy isn't a spectator sport; it requires participation. Vote in elections, stay informed, attend meetings, advocate, organize. Institutions depend on engaged citizens using them. Defenders include Robert Putnam ("Bowling Alone"), civic education tradition, both progressive and conservative grassroots organizing, classical political philosophy (Pericles, American founders). Strength: produces specific benefits (real institutional understanding, relationships across difference, accountability, real change). Limit: time-intensive in ways unrealistic for most people; can produce burnout and performative engagement; asks more than most can sustain.`,
            },
            {
              id: `local-targeted`,
              label: `Local and targeted: engagement is most useful at local levels and on specific issues where you can have real impact`,
              summary: `Most civic energy goes furthest at local levels because local institutions are smaller, more responsive, less mediated. Spreading thin across all national issues usually produces no measurable effect. Defenders include Robert Nisbet, community organizing tradition (Alinsky), subsidiarity principle across political traditions, religious communities focused on local work. Strength: real impact where time is invested; relationships and skill development; durable civic capital; addresses where most civic energy actually produces results. Limit: some issues genuinely require national engagement; can be cover for avoiding harder questions; some local institutions need outside engagement to function.`,
            },
            {
              id: `private-excellence`,
              label: `Selective engagement with private excellence: basic civic duties plus excellence in your own domain`,
              summary: `Fulfill basic civic duties (vote, follow laws, jury duty, raising children, treating neighbors decently) but focus most energy on personal/professional excellence. Excellent doctors, teachers, parents, craftspeople, scientists contribute more to society over decades than mediocre political activism. Defenders include Charles Murray's work, Confucian/Stoic/classical liberal traditions, religious frameworks that treat work as service. Strength: excellence compounds dramatically over years; matches most historical patterns of contribution; recognizes finite time; avoids performance-without-substance. Limit: can be cover for general withdrawal; underweights situations requiring active citizenship; ignores some serious issues that need civic attention.`,
            },
          ],
          evidence: [
            {
              id: `e1`,
              text: `Robert Putnam's "Bowling Alone" (2000) documented decades of decline in American civic participation: church attendance, union membership, civic clubs, voting, party involvement. The decline preceded the internet but has continued through it. Putnam's research has shaped subsequent civic-engagement conversation.`,
              source: `Putnam 2000 and subsequent research`,
            },
            {
              id: `e2`,
              text: `Democratic theory from many traditions assumes engaged citizens. Pericles's funeral oration (430 BCE) argued Athenians who took no interest in public affairs were "good for nothing." American founders explicitly worried the republic would fail without citizen engagement. Engaged citizenship is built into how democracies are supposed to work.`,
              source: `Classical political philosophy; American founding documents`,
            },
            {
              id: `e3`,
              text: `Local engagement produces measurable effects where national engagement often doesn't. A small group of engaged neighbors can shape a city council vote or change school policy. The same group spending the same time on national politics usually has no measurable effect. The principle of marginal impact favors local engagement for most people.`,
              source: `Local government scholarship; community organizing tradition`,
            },
            {
              id: `e4`,
              text: `The subsidiarity principle (decisions made at the most local level practical) is shared across many political traditions: Catholic social teaching, progressive community organizing (Alinsky), conservative federalism, EU governance. Different traditions apply it differently but the underlying principle is widely accepted.`,
              source: `Comparative political philosophy across traditions`,
            },
            {
              id: `e5`,
              text: `Most contributions to human flourishing across history have come from people doing excellent work in specific domains rather than from political activism. Scientists, farmers, teachers, artists, craftspeople. Their civic contribution was being good at what they did over decades. Excellence compounds dramatically.`,
              source: `Historical analysis; multiple sources across traditions`,
            },
            {
              id: `e6`,
              text: `Time is finite. The same hours can produce excellence in your domain OR contribute to civic activism, not both at full intensity. Universal active-engagement framing asks more time than most citizens have available after work, school, family, and other commitments.`,
              source: `Time-use research; civic engagement studies`,
            },
            {
              id: `e7`,
              text: `Research shows broad national civic engagement often produces polarization, anxiety, and burnout while local engagement tends to produce relationships across difference, real skill development, and durable community capital. Same hours produce different effects depending on where they're invested.`,
              source: `Putnam and subsequent civic engagement research`,
            },
            {
              id: `e8`,
              text: `Civic activism without underlying excellence in some domain tends to produce performance rather than substance. The skilled engineer who knows building codes shapes city development more than the same person could through general activism. Real capability in a domain often produces more civic contribution than diffuse engagement does.`,
              source: `Domain expertise literature; civic effectiveness studies`,
            },
          ],
          counterargument: {
            id: `counter`,
            text: `"You picked your position. Here's the strongest objection. All three positions treat civic engagement as primarily about individual choice: how engaged you should personally be. But maybe the framing itself is wrong. The strength of a civic culture depends on what most people do, not what you individually do. If everyone took position 3 (private excellence), the institutions wouldn't function because they require enough people doing position 1 or 2. So individual reasoning about your civic engagement might miss the collective question entirely. The right civic level for any individual depends on what others are doing — and on what produces a functioning society overall, not just what's optimal for one person's life. Why think any individual position is the right level, when civic engagement is essentially a collective-action question rather than an individual choice?"`,
            promptInstruction: `In 3-4 sentences, respond. Is civic engagement individual choice or collective question? How does your position handle this challenge?`,
          },
          reflectionPrompt: `Looking at the positions you didn't pick, which has the strongest argument that you'd find hardest to dismiss? Why?`,
        },

        {
          id: `l10-quiz`,
          type: `quiz`,
          headline: `Check your understanding`,
          questions: [
            {
              id: `q1`,
              type: `multiple-choice`,
              question: `What is "civic capital" (Putnam)?`,
              options: [
                `Money for cities`,
                `Networks of relationships, norms, and trust within a community that enable cooperation for shared benefit; includes formal civic engagement (clubs, churches, unions, voting) and informal community ties (neighbors, friends, local relationships); Putnam documented decades of decline in many forms since ~1960`,
                `Tax revenue`,
                `Random concept`,
              ],
              correctIndex: 1,
              explanation: `Communities with high civic capital function differently from communities with low civic capital. The decline Putnam documented preceded the internet but has continued through it. Causes are contested; fact of decline is well-documented.`,
            },
            {
              id: `q2`,
              type: `multiple-choice`,
              question: `What does the "active engagement" position argue?`,
              options: [
                `Be loud`,
                `Citizens should be actively involved in civic life: voting, meetings, advocacy, organizing. Democracy requires participation; institutions depend on engaged citizens. Defenders include Putnam, civic education tradition, both progressive and conservative grassroots organizing. Strength: produces real institutional benefits. Limit: time-intensive in unrealistic ways for most`,
                `Engage everyone`,
                `Random theory`,
              ],
              correctIndex: 1,
              explanation: `Democracy isn't a spectator sport; it requires participation. Limit: asks more time than most citizens have available after work, school, family commitments. Universal active-engagement framing isn't realistic for most people.`,
            },
            {
              id: `q3`,
              type: `multiple-choice`,
              question: `What is "participatory democracy"?`,
              options: [
                `All voting`,
                `Vision where citizens are actively engaged in civic and political life beyond just voting; emphasizes deliberation, organizing, attending meetings, advocacy; contrast with "representative democracy minimalism" where citizens primarily vote and representatives decide; most working democracies blend both`,
                `Direct democracy`,
                `Modern democracy`,
              ],
              correctIndex: 1,
              explanation: `Pure versions of either are uncommon; the question is the balance. Defenders argue participatory democracy produces better policy and citizens; critics argue it asks too much and can lead to dominance by activists with time. Debate is real and ongoing.`,
            },
            {
              id: `q4`,
              type: `multiple-choice`,
              question: `What does the "local and targeted" position argue?`,
              options: [
                `Stay local`,
                `Citizens should engage where they can have real impact rather than spreading thin across all national issues; local government, school boards, neighborhood organizations, specific issues; most civic energy goes furthest at local levels because they're smaller and more responsive; defenders include Nisbet, Alinsky organizing tradition, subsidiarity principle`,
                `Ignore national`,
                `Random framing`,
              ],
              correctIndex: 1,
              explanation: `Marginal impact favors local engagement for most people. A small group of engaged neighbors can shape a city council vote. The same group on national politics usually has no measurable effect. Limit: some issues genuinely require national engagement.`,
            },
            {
              id: `q5`,
              type: `multiple-choice`,
              question: `What is "subsidiarity"?`,
              options: [
                `Side issue`,
                `Principle that decisions should be made at the most local level practical for the issue; originally from Catholic social teaching, adopted across political traditions; implies higher levels of authority should only handle what lower levels can't; has informed federalism debates, EU governance, business decentralization`,
                `Subsidy program`,
                `Random principle`,
              ],
              correctIndex: 1,
              explanation: `Different traditions apply subsidiarity differently. Some emphasize keeping authority as local as possible; others emphasize that higher levels exist precisely to handle what lower levels can't. The underlying principle is widely shared even when application is debated.`,
            },
            {
              id: `q6`,
              type: `multiple-choice`,
              question: `What does "private excellence as civic contribution" argue?`,
              options: [
                `Be selfish`,
                `Primary civic contribution most people make is being excellent in their own domain (work, family, community) rather than political activism; the excellent doctor, teacher, parent, craftsperson contributes through their domain; roots in Confucian, Stoic, classical liberal traditions plus religious frameworks treating work as service`,
                `Random framing`,
                `Don't engage`,
              ],
              correctIndex: 1,
              explanation: `Distinct from pure self-interest because the framing values genuine excellence and service through one's domain. Most historical contributions to human flourishing have come from domain excellence rather than activism. Excellence compounds dramatically over years.`,
            },
            {
              id: `q7`,
              type: `multiple-choice`,
              question: `Why does the lesson emphasize political neutrality?`,
              options: [
                `Random rule`,
                `The question of HOW engaged citizens should be is separate from WHICH political positions they should hold; people across the entire political spectrum hold each of the three civic-engagement positions; civic-engagement question is real and contested independent of partisan politics`,
                `Avoid controversy`,
                `Boring rule`,
              ],
              correctIndex: 1,
              explanation: `You can be an active-engagement person, local-focus person, or private-excellence person while holding any political views. The lesson is about the engagement framework, which is genuinely independent of partisan positions.`,
            },
            {
              id: `q8`,
              type: `multiple-choice`,
              question: `Why might the right civic engagement position depend on life stage?`,
              options: [
                `Random factor`,
                `People with significant free time and skill at organizing may contribute most through position 1; those with strong local communities through position 2; those building real domain expertise (especially first few decades of work) through position 3; same person might shift across positions at different life stages`,
                `Age limits`,
                `Random claim`,
              ],
              correctIndex: 1,
              explanation: `Most mature views blend elements depending on situation: basic civic duties always, local engagement where possible, focused excellence in your domain, occasional broader engagement on issues where you have real knowledge.`,
            },
            {
              id: `q9`,
              type: `true-false`,
              question: `True or false: One of the three civic engagement positions is clearly correct and the others are wrong.`,
              correctAnswer: false,
              explanation: `False. Each position has serious defenders across the political spectrum and real strengths/limits. The question of how engaged citizens should be is genuinely contested independent of partisan politics. Most mature views blend elements depending on situation.`,
            },
            {
              id: `q10`,
              type: `inference`,
              question: `Your friend says "I don't follow politics at all because it's too divisive and makes me anxious. I just focus on school and my hobbies." Based on this lesson, what should you point out?`,
              options: [
                `"You're right to disengage"`,
                `"That's close to position 3 (private excellence), and there's a defensible version of that position. But 'I don't follow politics at all' goes further than position 3 actually argues. Even position 3 emphasizes basic civic duties: voting in major elections, knowing enough to make informed votes, jury duty when called, treating neighbors decently. Pure disengagement isn't actually one of the three positions; it's withdrawal. The honest version of position 3 would be: 'I do basic civic duties, I engage on specific issues where I have real expertise, and I focus most of my energy on becoming excellent in my domain.' That's a real and defensible position. Just disengaging entirely from anxiety isn't a civic position; it's a coping strategy. If you want to defend the private-excellence position, do basic civic duties consistently AND build real excellence in something specific. The two together are a serious framework; pure disengagement isn't."`,
                `"You should engage more"`,
                `"Politics is bad"`,
              ],
              correctIndex: 1,
              explanation: `Real applied civic engagement literacy. Don't moralize about engagement; engage specifically with the position the friend is articulating and what its strongest version would actually require. The distinction between "private excellence position" and "pure disengagement" matters.`,
            },
          ],
        },

        {
          id: `l10-reflection`,
          type: `reflection`,
          headline: `Sit with this`,
          intro: `Pick the prompt that pulls at you most. Your answer is saved.`,
          prompts: [
            { id: `reflect-cognitive`, category: `Cognitive`, prompt: `Before this lesson, did you have an explicit framework for civic engagement? Has anything shifted?` },
            { id: `reflect-meta`, category: `Metacognitive`, prompt: `Honestly: which position fits how you currently engage? Is it the one you'd choose deliberately, or one you've absorbed from your environment?` },
            { id: `reflect-identity`, category: `Identity`, prompt: `If you become someone with a deliberate civic engagement framework over 70 years of citizenship, what does that change about your contribution to the communities you'll be part of?` },
            { id: `reflect-application`, category: `Application`, prompt: `Pick one civic opportunity in your current life (school council, community service, local issue). Apply the three positions. Which would suggest engaging? Which wouldn't?` },
            { id: `reflect-critical`, category: `Critical`, prompt: `Are there civic contexts the framework doesn't capture? What about authoritarian governments where engagement is dangerous? Stateless or refugee situations? Online-only "civic" engagement?` },
            { id: `reflect-personal`, category: `Personal investigation`, prompt: `Ask one adult about how they think about civic engagement. Which position do they default to? Has it changed over their life?` },
          ],
        },

        {
          id: `l10-real-world`,
          type: `real-world`,
          headline: `Take it into your life`,
          guideContext: `Civic engagement framework shapes how you'll engage with public life for decades. Two paths.`,
          familyActivity: {
            title: `The Family Civic Engagement Conversation`,
            duration: `45 minutes`,
            description: `Share the three positions. Ask family members which position fits how they currently engage. Then ask if they'd choose differently if they thought about it deliberately. Most adults haven't articulated their civic engagement framework explicitly. The conversation often surfaces real diversity within families (parents and grandparents often have different defaults) and produces more deliberate engagement going forward. Avoid debates about specific political issues; focus on engagement level and scope.`,
          },
          projectOption: {
            title: `Read Putnam's "Bowling Alone" or a community organizing book, 4 weeks (optional)`,
            duration: `4 weeks, ~30 minutes per session`,
            description: `Pick one: Robert Putnam's "Bowling Alone" (2000, foundational civic capital research) or a community organizing book like Saul Alinsky's "Rules for Radicals" (1971, classic but partisan) or a more recent work like Marshall Ganz's writings on organizing. Apply concepts to civic situations in your community. Write 1,500 words on what you learned and how it changes your view. Reading a real civic engagement book at 12 produces durable literacy.`,
            offerToParent: `Parent: opt your kid into this project. Reading real civic engagement literature at 12 is genuinely formative.`,
          },
          identityQuestion: `If you become someone with a deliberate civic engagement framework — clear about what you engage with, how, and why — over 70 years of citizenship, what does that change about your contribution to the broader community you're part of?`,
        },

        {
          id: `l10-identity-hook`,
          type: `identity-hook`,
          headline: `Who is this lesson making you?`,
          prompt: `One sentence. No wrong answer.`,
          placeholder: `Someone who...`,
          examples: [
            `Someone who engages civically where I can actually have impact rather than spreading thin.`,
            `A person who fulfills basic civic duties even when broader engagement isn't right for me.`,
            `Someone who can articulate a civic engagement framework rather than absorbing my environment's default.`,
          ],
          saveKey: `identity_responses_sl_11_12_10`,
        },

        {
          id: `l10-celebration`,
          type: `celebration`,
          guideText: `{name}. Tenth Social Leadership lesson done. You can now articulate three serious positions on civic engagement (active / local-targeted / private excellence with basic duties), know the major thinkers across the political spectrum (Putnam, Nisbet, Murray, classical philosophy, Alinsky tradition, subsidiarity), and distinguish the engagement question from partisan politics. Most adults absorb their environment's default civic engagement framework without explicit consideration; you're choosing deliberately at 12. Next time we go into the other half of leadership that gets less attention but matters equally: followership. Three positions. Argument Builder format. Let's go. — Valor`,
          badge: `civic-thinker`,
          badgeName: `Civic Thinker`,
          xpEarned: 75,
          competencies: [
            `Articulates three positions on civic engagement (active, local-targeted, private excellence)`,
            `Knows Putnam on civic capital, Nisbet on community, Murray on private excellence`,
            `Understands subsidiarity principle across political traditions`,
            `Distinguishes civic engagement question from partisan political positions`,
            `Recognizes participatory democracy vs representative minimalism as a contested debate`,
          ],
          nextLessonPreview: {
            title: `Lesson 11: Followership`,
            hook: `The other half of leadership. Three positions. Argument Builder.`,
          },
        },
      ],
    },
  ],
};

export default SOCIALLEADERSHIP_VOYAGER_L10;

if (import.meta.env?.DEV) {
  const l = SOCIALLEADERSHIP_VOYAGER_L10.lessons[0];
  const mags = l.screens.filter((s) => s.type === `magazine`).length;
  const argEvi = l.screens.find((s) => s.type === `argument-builder`)?.evidence?.length ?? 0;
  const quiz = l.screens.find((s) => s.type === `quiz`)?.questions?.length ?? 0;
  const reflect = l.screens.find((s) => s.type === `reflection`)?.prompts?.length ?? 0;
  console.log(
    `[LESSON-SL-VOYAGER-L10 ${VERSION}] "${l.title}" — ${mags} magazine, argument-builder w/ ${argEvi} evidence, ${quiz} quiz, ${reflect} reflection`
  );
}
