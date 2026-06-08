// ─────────────────────────────────────────────────────────────────────────────
// SOCIAL LEADERSHIP VOYAGER  |  L09 — Status, Hierarchy, Belonging
// Age band : voyagers (11-12)   Guide: valor (Lion)
// Standards: Coreverse Original — Social Psychology, Sociology
// CALIBRATED: Voyager spec v1.1 (May 2026)
// Interaction format: INVESTIGATION GAME (sort 9 scenarios by earned / positional / borrowed status)
// ─────────────────────────────────────────────────────────────────────────────

const VERSION = "voyager-sl-l09-v1";

const SOCIALLEADERSHIP_VOYAGER_L09 = {
  ageBand: `voyagers`,
  subjectId: `social-leadership`,
  guide: `valor`,

  lessons: [
    {
      id: `sl-11-12-09`,
      title: `Status, Hierarchy, Belonging`,
      duration: 35,
      xpReward: 75,
      badge: `status-analyst`,
      badgeName: `Status Analyst`,

      screens: [
        {
          id: `l09-welcome`,
          type: `welcome`,
          guideText: `{name}, every group has status dynamics. Some people get listened to more than others. Some have informal power beyond their formal role. Some feel they belong while others feel marginal. These dynamics shape who can lead, who gets heard, and who can affect outcomes. Status, hierarchy, and belonging are related but distinct, and they operate differently across groups. Today we work through the three main types of status (earned, positional, borrowed), and you sort nine specific scenarios into the right bucket. The skill isn't memorizing which is which. The skill is the underlying framework that lets you analyze any group, any time, and see what's actually producing the status dynamics in it.`,
          headline: `Status, Hierarchy, Belonging`,
          subtitle: `Three forces that shape every group. The framework for analyzing any group dynamic.`,
          visual: `/voyager-assets/social-leadership/l09-welcome.webp`,
        },

        {
          id: `l09-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Status, Hierarchy, And Belonging Are Different`,
          paragraphs: [
            `Status, hierarchy, and belonging are related but distinct concepts. Confusing them produces analytical mistakes in real leadership situations. Let's distinguish them clearly.`,
            `Status is your relative standing in a group: how much regard, respect, or deference you receive from others. Status varies by group; the same person may have high status in one group and low status in another. Cecilia Ridgeway, a sociologist at Stanford, has spent decades studying status dynamics and how they shape everything from workplaces to friendships. Her research shows status is partly earned, partly assigned by social categories, and constantly being negotiated through small interactions.`,
            `Hierarchy is the formal or informal structure of authority in a group. Some groups have explicit hierarchies (organizational charts, military ranks); others have implicit hierarchies that everyone recognizes without being told. Hierarchy positions people in a power structure; status is closer to how much respect they receive within that structure. The two can come apart: someone can hold a hierarchical position with low status (the manager nobody really respects), or have high status without hierarchical position (the senior person everyone defers to despite their formal level).`,
            `Belonging is the sense that you're accepted as a member of a group, that you have a legitimate place there. Brené Brown distinguishes belonging from fitting in: fitting in is changing yourself to be accepted; belonging is being accepted as you actually are. Belonging is partly about how the group treats you and partly about your own internal sense of acceptance. Someone can have status without belonging (the high-performing executive who never feels accepted) or belonging without status (the team member everyone loves who isn't influential).`,
            `Why the distinctions matter practically. Leadership effectiveness depends on all three but they operate differently. Building status involves demonstrating value the group cares about. Navigating hierarchy involves understanding the formal and informal structures. Cultivating belonging involves authentic acceptance and connection. A leader can be high-status, hierarchically positioned, and yet fail to create belonging for their team — which damages everything else. The same leader could have strong belonging cultivation but low status, which limits their influence regardless of how good their relationships are.`,
          ],
          image: `/voyager-assets/social-leadership/l09-s1-distinct.webp`,
          imageCaption: `Status, hierarchy, belonging: related but distinct. Can come apart in real groups. Different work to build each.`,
          vocab: [
            {
              word: `status`,
              definition: `Your relative standing in a group: how much regard, respect, or deference you receive from others. Varies by group. Cecilia Ridgeway at Stanford has spent decades researching status dynamics. Partly earned (through contribution or competence), partly assigned (by social categories), partly negotiated (through small interactions). Affects whose ideas get heard, whose contributions get credited, and who can lead.`,
              audioPrompt: `Status is your relative standing in a group: how much regard, respect, or deference you receive from others, {name}. Concept extensively studied by Cecilia Ridgeway, a sociologist at Stanford, over decades. Status varies by group; the same person may have high status in one group and low status in another. Ridgeway's research shows status is partly earned through contribution or competence, partly assigned by social categories (sometimes unfairly), and constantly being negotiated through small everyday interactions. Status matters because it affects whose ideas get heard, whose contributions get credited, and who can lead. In meetings, high-status members get more speaking time, more nods of agreement, more weight on their ideas. In groups, high-status members can shift group direction; low-status members often can't even when they have better ideas. Knowing how status actually works lets you analyze any group accurately and understand what's producing the dynamics you observe.`,
            },
            {
              word: `hierarchy`,
              definition: `The formal or informal structure of authority in a group. Formal hierarchies are explicit — organizational charts, military ranks, official positions. Informal hierarchies emerge without explicit structure. Hierarchy positions people in a power structure. Distinct from status: someone can hold a hierarchical position with low status, or have high status without a hierarchical position. The two can come apart in real groups.`,
              audioPrompt: `Hierarchy is the formal or informal structure of authority in a group, {name}. It positions people in a power structure — who reports to whom, who has final say, who can override whom. Formal hierarchies are explicit: organizational charts, military ranks, governmental structures, team rosters. Informal hierarchies emerge in groups without explicit structure — friend groups, online communities, families. The hierarchy exists but isn't stated. The text distinguishes hierarchy clearly from status. The two can come apart. Someone can hold a hierarchical position with low status — the manager nobody really respects. In this case the formal authority exists but the genuine deference it should command doesn't. Someone can have high status without a hierarchical position — the senior person everyone defers to despite their formal level. Real leadership requires understanding both. Analyzing only the formal hierarchy misses the informal one, which often captures where actual influence runs better than the org chart does.`,
            },
            {
              word: `belonging cues`,
              definition: `Specific signals that indicate group membership and acceptance, identified in Daniel Coyle's "The Culture Code" (2017). Include physical proximity and attention, eye contact, and small acts of welcome. Operate mostly below conscious awareness. High-belonging groups produce them frequently; low-belonging groups produce them rarely. Leaders shape belonging climate disproportionately by how they produce or withhold these signals.`,
              audioPrompt: `Belonging cues are specific signals that indicate group membership and acceptance, identified in Daniel Coyle's 2017 book "The Culture Code," {name}. They include physical proximity and attention — turning toward someone rather than away, staying near rather than drifting. Eye contact. Small acts of welcome: a nod when someone enters, a brief acknowledgment, a small gesture of inclusion. These cues operate mostly below conscious awareness. Group members detect them and respond, often without realizing what they are responding to. High-belonging groups produce these cues frequently; low-belonging groups produce them rarely. The significance for leadership is direct. Leaders shape belonging climate disproportionately because their cues carry more weight than equivalent cues from other members. When a leader turns toward someone who enters the room, that signal goes further than the same gesture from another team member. When a leader acknowledges someone's contribution, that acknowledgment is felt more broadly. Single public moments shape belonging climate more than equivalent private moments because they are public signals to everyone about who belongs in this group.`,
            },
          ],
        },

        {
          id: `l09-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Earned, Positional, And Borrowed Status`,
          paragraphs: [
            `Status comes from different sources. The same level of status can be supported by very different things underneath. Knowing the type of status someone has helps you understand what produces it and how durable it is.`,
            `Earned status comes from demonstrated contribution or competence. The doctor who has saved many lives. The teacher who has helped many students. The athlete who has shown what they can do. The friend who has been there over time. Earned status is durable: it's grounded in real contribution that the group benefits from. It's also slow to build (it takes time to demonstrate contribution) but durable once established (the demonstrations create a track record).`,
            `Positional status comes from formal role or title. The student council president. The team captain. The eldest sibling. The manager. The CEO. Positional status is immediate (it arrives with the position) but conditional (it depends on holding the position and on the position being respected by the group). A positional title without underlying earned status often produces compliance without genuine influence; people defer because they have to, not because they want to.`,
            `Borrowed status comes from association or credentials. The person whose family is prominent. The kid who attended a famous summer program. The new employee whose previous job was at a respected company. The intern whose mentor is well-known. Borrowed status is real but limited: it gives the person initial credibility but doesn't sustain itself. If borrowed status isn't converted into earned status (through demonstrated contribution in the current setting), it tends to fade.`,
            `Most people have a mix. A new student-council president has positional status from the role plus whatever earned and borrowed status they brought to the role. A senior employee at a respected company has earned status from their work plus positional status from their role plus borrowed status from the company's reputation. Analyzing someone's status accurately means recognizing the mix.`,
            `One important pattern. The three types feel different to be on the receiving end of. Earned status produces stable confidence; positional status often produces anxiety about being deserving; borrowed status often produces imposter feelings if the person knows their status comes from association rather than contribution. Knowing this helps you understand your own and others' experience of status without misinterpreting it.`,
          ],
          image: `/voyager-assets/social-leadership/l09-s2-types.webp`,
          imageCaption: `Three types of status: earned (from contribution), positional (from title), borrowed (from association). Most people have a mix.`,
          vocab: [
            {
              word: `borrowed status`,
              definition: `Three categories of status sources. Earned: from demonstrated contribution or competence (durable, slow to build). Positional: from formal role or title (immediate but conditional). Borrowed: from association or credentials (initial credibility, fades without conversion to earned status). Most people have a mix; analyzing status accurately means recognizing which sources are operating.`,
              audioPrompt: `Earned, positional, and borrowed status are three categories of where status comes from, {name}. Earned status comes from demonstrated contribution or competence. Durable because it's grounded in real contribution the group benefits from. Slow to build (takes time to demonstrate contribution) but durable once established. Positional status comes from formal role or title. Immediate when the role is conferred but conditional (depends on holding the position and on the position being respected by the group). Borrowed status comes from association or credentials. Real but limited. Gives initial credibility but doesn't sustain itself if not converted into earned status through demonstrated contribution in the current setting. Most people have a mix of all three. Analyzing someone's status accurately means recognizing which sources are operating and in what proportions. The same level of visible status can be supported by very different combinations underneath, with different implications for durability.`,
            },
            {
              word: `positional status`,
              definition: `Status that comes from formal role or title. Immediate — it arrives with the position. Conditional — it depends on holding the position and on the position being respected by the group. Positional title without underlying earned status often produces compliance without genuine influence: people defer because they have to, not because they want to. Durability depends on conversion to earned status.`,
              audioPrompt: `Positional status is status that comes from a formal role or title, {name}. It is immediate — it arrives the moment the role is conferred. A new team captain, a new student council president, a new manager: the moment the role is official, other members extend the deference associated with the position. This is useful because it allows coordination without waiting for the person to demonstrate competence. But positional status is conditional in two ways. It depends on holding the position — lose the position and most of the positional status goes with it. And it depends on the position being respected by the group — a formal title in a group that doesn't recognize that kind of authority produces little actual deference. The text identifies the key limitation: positional title without underlying earned status often produces compliance without genuine influence. People defer because they have to, not because they genuinely want to. They follow the instructions because the person holds the role, not because they trust the person's judgment. The conversion to earned status — demonstrating actual competence and contribution in the role — is what transforms positional deference into real influence.`,
            },
            {
              word: `imposter feelings`,
              definition: `The internal experience of believing your status is not deserved because it comes from association or title rather than actual contribution. Identified in the text as the characteristic subjective experience of borrowed or positional status without underlying earned status. Distinct from the external appearance of confidence. Knowing the type of status someone has explains their internal experience even when their external standing appears equal to someone with earned status.`,
              audioPrompt: `Imposter feelings are the internal experience of believing your status is not deserved because it comes from association or title rather than actual contribution, {name}. The text identifies them as the characteristic subjective experience of borrowed status or positional status that hasn't yet been converted to earned status. Someone whose status comes from a famous family or a prestigious credential they haven't yet done much with often knows, internally, that their current deference isn't grounded in what they have actually done in this setting. Someone who holds a leadership role they were given rather than earned often feels, privately, that they are not actually deserving of the deference the role produces. This experience is distinct from the external appearance of confidence that status can produce. Two people with equivalent visible status can have very different internal experiences depending on whether their status is earned or borrowed. Understanding this distinction helps you interpret your own experience accurately — not every instance of "I don't deserve this" is imposter syndrome in the clinical sense; sometimes it is an accurate reading of borrowed or positional status that hasn't yet been grounded in demonstrated contribution.`,
            },
          ],
        },

        {
          id: `l09-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Hierarchies (Formal And Informal)`,
          paragraphs: [
            `Every group develops some kind of hierarchy. Formal hierarchies are explicit: organizational charts, military ranks, governmental structures, sports team rosters. Everyone knows who's at what level. Informal hierarchies emerge in groups without explicit structure: friend groups, online communities, families. The hierarchy exists but isn't stated.`,
            `What produces hierarchies. Several factors contribute. Demonstrated competence (people who've shown they can do important things rise in informal hierarchies). Time in the group (longer-tenured members typically have higher informal standing). Social skills and likability. Strategic positioning (knowing what to say in what situations). Sometimes brute social pressure (people who push their way up). And sometimes characteristics that have nothing to do with substance (physical appearance, family connections, demographic categories).`,
            `Formal hierarchies provide explicit decision-making structures. They're useful for coordination, especially in large groups where everyone can't be involved in every decision. They also have specific failure modes: people in formal positions sometimes lack the actual capability the position requires, formal hierarchies can become rigid and miss important information from lower levels, and the hierarchy itself can become an end rather than a means.`,
            `Informal hierarchies operate alongside formal ones in most groups. The student who is officially "team member" but actually carries informal authority. The middle manager who lacks formal power but commands informal respect. The family member who isn't formally "in charge" but is the one everyone defers to on certain topics. Informal hierarchies often capture real influence better than the formal ones do.`,
            `Why this matters. Most analysis of groups focuses on the formal hierarchy and misses the informal one. The actual decision-making in many groups runs through informal influence; formal positions are partly ratifications of who the group already defers to. Understanding both lets you see what's really happening rather than what the org chart says is happening.`,
            `One important pattern. Power and status in informal hierarchies often distribute unequally in ways the group hasn't explicitly examined. Some voices systematically get heard; others systematically don't. Real leadership often involves noticing whose voices aren't being heard and actively inviting them in. This is connected to the trust climate work from L03 and to belonging dynamics we'll cover next.`,
          ],
          image: `/voyager-assets/social-leadership/l09-s3-hierarchies.webp`,
          imageCaption: `Hierarchies: formal (explicit structure) and informal (emerges in any group). Most groups have both. Real influence often runs through informal.`,
          vocab: [
            {
              word: `informal hierarchy`,
              definition: `Implicit structure of influence and deference in groups without explicit formal positions. Emerges in any group of more than a few people. Influenced by demonstrated competence, time in group, social skills, strategic positioning, sometimes characteristics unrelated to substance. Often captures real influence better than formal hierarchies do; most group analysis focuses on formal hierarchy and misses the informal one.`,
              audioPrompt: `Informal hierarchy is the implicit structure of influence and deference that emerges in groups without explicit formal positions, {name}. Emerges in any group of more than a few people, including friend groups, online communities, families, and even within formal organizations alongside the official structure. Influenced by demonstrated competence (people who've shown they can do important things rise in informal hierarchies), time in the group (longer-tenured members typically have higher informal standing), social skills and likability, strategic positioning, sometimes brute social pressure, and sometimes characteristics that have nothing to do with substance (physical appearance, family connections, demographic categories). Often captures real influence better than formal hierarchies do. Most group analysis focuses on the formal hierarchy and misses the informal one. Real leadership often involves noticing the informal dynamics and actively working with them (or against them when they're producing unfair outcomes).`,
            },
            {
              word: `strategic positioning`,
              definition: `One factor that produces informal hierarchy. Knowing what to say in which situations, aligning yourself with people whose influence you can benefit from, and managing your visibility within a group. Distinct from demonstrated competence (actually doing important things well) — strategic positioning is about how you are perceived relative to power structures rather than about the underlying contribution. Both factors operate in informal hierarchy formation.`,
              audioPrompt: `Strategic positioning is one of the factors the text identifies as producing informal hierarchy, {name}. It means knowing what to say in which situations, aligning yourself with people whose influence you can benefit from, and managing your visibility within a group in ways that advance your standing. The text includes it alongside demonstrated competence, time in the group, social skills, and sometimes brute social pressure as the inputs that shape who rises in informal hierarchies. Strategic positioning is distinct from demonstrated competence. Demonstrated competence means actually doing things that matter well, producing real contribution that the group benefits from. Strategic positioning is about how you are perceived relative to the group's power structures — where you place yourself, who you associate with, how you present your work. Both operate in real groups, often simultaneously. Someone with genuine competence who is also strategically positioned tends to rise faster than someone with equivalent competence who is not. Someone with strong strategic positioning but limited competence may rise initially but faces challenges sustaining status over time as the pattern becomes apparent.`,
            },
            {
              word: `unheard voices`,
              definition: `Pattern identified in the text where power and status in informal hierarchies distribute unequally in ways the group hasn't examined. Some voices are systematically heard; others are systematically not. Real leadership involves noticing whose voices aren't being heard and actively inviting them in. Connected to trust climate dynamics and belonging.`,
              audioPrompt: `Unheard voices describes the pattern where power and status in informal hierarchies distribute unequally in ways the group hasn't explicitly examined, {name}. Some voices are systematically heard — their contributions noted, their suggestions taken up, their perspectives included in decisions. Others are systematically not heard — their same quality contributions overlooked, their suggestions not followed up on, their perspectives not sought. This distribution is not random. It often reflects the factors that produce informal hierarchy: demonstrated competence, time in group, social skills, strategic positioning, and sometimes characteristics that have nothing to do with substance — physical appearance, demographic categories, family connections. The text notes that real leadership often involves noticing whose voices aren't being heard and actively inviting them in. This is both a leadership skill and an ethical responsibility. Groups with systematically unheard voices miss information that those voices carry. Decisions made without relevant perspectives are worse decisions. The work of noticing who is not speaking and creating conditions where they can is connected both to the trust climate work and to the belonging dynamics covered in this lesson.`,
            },
          ],
        },

        {
          id: `l09-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Belonging (Different From Status)`,
          paragraphs: [
            `Belonging is the sense that you're accepted as a member of a group, that you have a legitimate place there as yourself. It's distinct from status (which is about your relative standing) and from hierarchy (which is about your position in a power structure). Belonging is more fundamental than either: people with status but without belonging often experience significant distress; people with belonging but without status often function well.`,
            `Brené Brown, a researcher at the University of Houston, distinguished belonging from "fitting in." Fitting in is changing yourself to be accepted. Belonging is being accepted as you actually are. The two often get confused but they're opposites in important ways. People who chronically fit in often feel chronically lonely despite being surrounded by people; the acceptance is conditional on the performance, which means the real self isn't being accepted. Real belonging involves the group accepting the actual person, not the performed version.`,
            `Daniel Coyle's "The Culture Code" (2017) studied groups with strong belonging and identified specific "belonging cues" that signal group membership: physical proximity and attention, eye contact, specific small acts of welcome. The cues operate mostly below conscious awareness; group members detect them and respond, often without realizing what they're responding to. High-belonging groups produce them frequently; low-belonging groups produce them rarely.`,
            `Why belonging matters for leadership. Groups with strong belonging perform better on most metrics: more collaboration, more honest information sharing, better learning from mistakes, more willingness to take interpersonal risks. The connection to Amy Edmondson's psychological safety research (covered in L03 of this band and elsewhere) is direct. Belonging is partly what makes psychological safety possible.`,
            `Leaders shape belonging climate disproportionately. Whether you welcome new members warmly, how you handle public moments involving any individual, whether you treat people consistently across contexts — all signal whether this group has belonging for people like them. Single moments shape group belonging climate more than equivalent private moments because they're public signals to everyone.`,
            `One important pattern. Some people have a harder time experiencing belonging in some groups for reasons that don't have to do with anything they're doing. Categories of identity that have been historically excluded from groups carry residue of that exclusion even after explicit exclusion ends. Effective leadership pays attention to who experiences belonging and who doesn't, and addresses the dynamics rather than treating belonging as everyone's individual responsibility.`,
          ],
          image: `/voyager-assets/social-leadership/l09-s4-belonging.webp`,
          imageCaption: `Belonging: accepted as yourself, distinct from status. Brown's belonging vs fitting in. Coyle's belonging cues. Foundation for psychological safety.`,
          vocab: [
            {
              word: `bren brown`,
              definition: `Distinction from Brené Brown's research. Fitting in: changing yourself to be accepted. Belonging: being accepted as you actually are. The two often get confused but are opposites in important ways. People who chronically fit in often feel chronically lonely despite being surrounded by people. Real belonging requires being seen and accepted as the actual person, not the performed version.`,
              audioPrompt: `Belonging versus fitting in is a distinction from Brené Brown's research at the University of Houston, {name}. Fitting in is changing yourself to be accepted by a group. You watch what others do and adapt to match. You hide parts of yourself that wouldn't fit. The acceptance you get is conditional on the performance. Belonging is being accepted as you actually are. You don't have to hide parts of yourself. The acceptance is unconditional on performance. The two often get confused but they're opposites in important ways. People who chronically fit in often feel chronically lonely despite being surrounded by people. The acceptance is conditional on the performance, which means the real self isn't being accepted. Real belonging involves the group accepting the actual person, not the performed version. The distinction matters because many people pursue fitting in thinking it will produce belonging, but it produces the opposite. Real belonging requires the willingness to show up as you actually are and the courage to accept the response.`,
            },
            {
              word: `psychological safety`,
              definition: `The belief that one can speak up, take risks, and make mistakes in a group without fear of punishment or humiliation. Connected in this lesson to belonging: belonging is partly what makes psychological safety possible. Amy Edmondson's research found it correlates with better collaboration, honest information sharing, learning from mistakes, and willingness to take interpersonal risks.`,
              audioPrompt: `Psychological safety is the belief that one can speak up, take risks, and make mistakes in a group without fear of punishment or humiliation, {name}. Based on research by Amy Edmondson, whose work was covered in earlier lessons in this band. The connection the text draws here is direct: belonging is partly what makes psychological safety possible. When you experience real belonging — when you are accepted as yourself rather than for your performance — you are more likely to believe that speaking up honestly is safe. When you are only fitting in — when your acceptance is conditional on performing the right way — you are more likely to stay silent rather than risk the performance breaking down. Groups with strong belonging produce the conditions for psychological safety. Groups with only fitting in often look cohesive on the surface while harboring the kind of silence that prevents honest information sharing and learning from mistakes. Edmondson's research found that psychological safety correlates with better collaboration, more honest information sharing, better learning from mistakes, and more willingness to take interpersonal risks — all of which are grounded in whether people experience genuine belonging in the group.`,
            },
            {
              word: `belonging climate`,
              definition: `The overall quality and consistency of belonging signals in a group. Leaders shape it disproportionately through how they handle public moments involving individuals. Single public moments — who gets acknowledged, how new members are welcomed, how mistakes are treated publicly — shape belonging climate more than equivalent private moments because they are visible signals to everyone about who belongs.`,
              audioPrompt: `Belonging climate is the overall quality and consistency of belonging signals in a group, {name}. Whether most members experience genuine acceptance as themselves — or whether the dominant experience is fitting in, performing to maintain conditional acceptance. The text emphasizes that leaders shape belonging climate disproportionately. Whether you welcome new members warmly, how you handle public moments involving any individual, whether you treat people consistently across contexts — all signal whether this group has belonging for people like them. The disproportionate weight leaders carry comes from visibility. When a leader publicly acknowledges a contribution, that signal goes to everyone. When a leader handles someone's mistake with dignity in a public moment, the signal goes to everyone. When a leader fails to acknowledge a contribution or handles a mistake publicly in a way that humiliates, those signals also go to everyone. Single moments shape group belonging climate more than equivalent private moments because they operate as public broadcasts about the norms of the group. Building a high-belonging climate requires attending to these public moments deliberately rather than treating them as incidental.`,
            },
          ],
        },

        {
          id: `l09-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Before You Sort The Scenarios`,
          paragraphs: [
            `In the investigation that follows, you'll sort nine scenarios into three buckets based on the type of status involved: earned (from demonstrated contribution), positional (from formal role or title), borrowed (from association or credentials).`,
            `Some sorting strategies. First: ask where the status is actually coming from in each scenario. Is it from things the person has done that benefit the group? From a title or role they hold? From their association with something else (a famous family, a respected institution, a known person)?`,
            `Second: notice that many real cases involve multiple sources. A new team captain has positional status from the role plus whatever earned and borrowed status they brought to it. For the investigation, pick the dominant source in each scenario — the one most explaining why this person currently has the status they have.`,
            `Third: notice that the same level of visible status can be supported by very different sources. Someone with high earned status looks the same from outside as someone with equivalent positional or borrowed status. The differences become visible over time (earned status is more durable) and under pressure (positional status without underlying earned status often crumbles).`,
            `One last framing. The exercise isn't moral evaluation of which kind of status is "good." Each type has legitimate uses. Earned status takes time to build; positional status provides necessary coordination structures; borrowed status gives newcomers initial credibility. The framework is about analytical clarity, not judgment. The goal is to see what's actually producing the status dynamics in any group accurately.`,
          ],
          image: `/voyager-assets/social-leadership/l09-s5-before.webp`,
          imageCaption: `Three buckets, nine scenarios. Framework for analyzing where status actually comes from in any group.`,
          vocab: [
            {
              word: `status conversion`,
              definition: `Process of converting one type of status into another, especially converting borrowed or positional status into earned status. Critical for sustaining status over time. Someone who has only borrowed status (from association) typically loses it if they don't convert it into earned status by demonstrating contribution. Someone with only positional status who doesn't earn underlying status often loses authority when leaving the position.`,
              audioPrompt: `Status conversion is the process of converting one type of status into another, especially converting borrowed or positional status into earned status, {name}. Critical for sustaining status over time. Someone who arrives at a new school with borrowed status (their family is well-known, they came from a famous previous school) has real initial credibility. But if they don't convert that borrowed status into earned status by demonstrating contribution in the new setting, the borrowed status fades over the first year or two as other students stop being impressed by the original associations. Someone promoted to a leadership role gets positional status immediately. But if they don't earn underlying status through demonstrating they can do the role well, their positional authority remains while their actual influence weakens. Knowing about status conversion helps you understand status trajectories. People with high status now may be on different trajectories depending on whether their status sources are durable.`,
            },
            {
              word: `analytical clarity`,
              definition: `The purpose the status framework serves, as stated in the text. Understanding the three types of status is not about making moral judgments about which kind is better. It is about being able to see accurately what is producing the status dynamics in any specific group. Each type has legitimate uses and functions. Analytical clarity means recognizing what is actually happening, which is the prerequisite for any skillful response.`,
              audioPrompt: `Analytical clarity is the purpose the status framework serves, as the text explicitly states, {name}. The exercise of sorting scenarios into earned, positional, and borrowed status is not moral evaluation of which kind of status is good or which kind of person is admirable. It is practice in seeing accurately what is producing the status dynamics in a specific situation. The text makes this explicit: the framework is about analytical clarity, not judgment. Each type has legitimate uses. Earned status takes time to build and provides durable influence grounded in real contribution. Positional status provides necessary coordination structures in groups that can't wait for everyone to earn their place. Borrowed status gives newcomers initial credibility that allows them to begin contributing in a new setting before they have had time to demonstrate what they can do there. Analytical clarity means being able to identify which type is operating in a given situation, understand what produces it, and assess how durable it is likely to be. This is the prerequisite for any skillful response — to your own status, to others', and to the dynamics in any group you are part of or leading.`,
            },
            {
              word: `status trajectory`,
              definition: `How someone's status is likely to change over time based on the sources currently supporting it. Borrowed status tends to fade if not converted to earned status. Positional status is stable as long as the role is held but may not convert to durable influence. Earned status compounds over time as the track record grows. Understanding status trajectory lets you predict future dynamics, not just assess the current state.`,
              audioPrompt: `Status trajectory describes how someone's status is likely to change over time based on the sources currently supporting it, {name}. The text makes clear that the same level of visible status can have very different futures depending on what is underneath it. Borrowed status — from association, credentials, or family — tends to fade over time if it is not converted into earned status through demonstrated contribution in the current setting. The initial credibility borrowed status provides is real, but it has a limited shelf life. Positional status is stable as long as the role is held, but if it is not converted into earned status through actually performing the role well, it produces deference without genuine influence — and that gap often widens over time rather than closing. Earned status compounds over time. Each additional demonstration of contribution adds to the track record. The longer someone has earned status in a group, the harder it is to displace. Understanding status trajectory lets you analyze not just where someone is now but where they are likely to be in six months, a year, or five years. Knowing whether a person's current standing is based on something durable or something that tends to fade is one of the more sophisticated pieces of the analytical framework.`,
            },
          ],
        },

        // ───── INVESTIGATION GAME ─────────────────────────────────────────────
        {
          id: `l09-investigation`,
          type: `investigation`,
          headline: `Sort the scenarios by dominant source of status`,
          intro: `{name}, nine specific scenarios. Sort each into the bucket that best describes the dominant source of status. Some involve multiple sources; pick the one that most explains the current status.`,
          buckets: [
            {
              id: `earned`,
              label: `Earned status (from demonstrated contribution or competence)`,
            },
            {
              id: `positional`,
              label: `Positional status (from formal role or title)`,
            },
            {
              id: `borrowed`,
              label: `Borrowed status (from association, credentials, or connections)`,
            },
          ],
          items: [
            {
              id: `item-1`,
              label: `A doctor who has worked for 25 years at a rural clinic, saving many lives. Patients in the community trust her and refer family members to her. She has no fancy credentials beyond medical training; her standing comes from her track record of helping people.`,
              correctBucket: `earned`,
            },
            {
              id: `item-2`,
              label: `A student council president who got elected based on being popular but hasn't actually accomplished much in the role. Other students treat them with the respect normally given to the position even though they haven't done specific things to earn that respect.`,
              correctBucket: `positional`,
            },
            {
              id: `item-3`,
              label: `A new kid at school whose mother is a famous actress. Other students treat them with extra interest and respect on the first day even though the new kid hasn't done anything in this school yet.`,
              correctBucket: `borrowed`,
            },
            {
              id: `item-4`,
              label: `A teacher who has taught at the same school for 20 years, helping thousands of students learn math. She has no formal title beyond "teacher" but everyone in the building treats her opinions on student learning with significant weight because she's earned that respect over decades.`,
              correctBucket: `earned`,
            },
            {
              id: `item-5`,
              label: `A new CEO hired from a famous company. On her first day at the new company, everyone treats her with the deference appropriate to her position even though nobody has worked with her yet and she hasn't shown what she can do in this specific company.`,
              correctBucket: `positional`,
            },
            {
              id: `item-6`,
              label: `A college freshman whose acceptance letter says they got into a prestigious institution. At parties and family gatherings, people treat them with extra respect based on the school's reputation even though the student hasn't yet done anything substantive there.`,
              correctBucket: `borrowed`,
            },
            {
              id: `item-7`,
              label: `An older sibling who is consistently the one their younger siblings come to for advice on hard situations because she has shown over years that she gives thoughtful, helpful guidance. She has no formal authority over them; her standing comes from demonstrated wisdom over time.`,
              correctBucket: `earned`,
            },
            {
              id: `item-8`,
              label: `A new manager who was promoted into the role last week. Team members are giving her the respect appropriate to a manager even though she hasn't yet demonstrated specific leadership in this position.`,
              correctBucket: `positional`,
            },
            {
              id: `item-9`,
              label: `A high school student whose father is a well-known professor at a major university. When the student attends academic conferences or events with their father, attendees treat them with attention they wouldn't otherwise receive, based on the family association.`,
              correctBucket: `borrowed`,
            },
          ],
          reflectionPrompt: `Which scenario was hardest to sort? What does that reveal about real status dynamics?`,
        },

        {
          id: `l09-quiz`,
          type: `quiz`,
          headline: `Check your understanding`,
          questions: [
            {
              id: `q1`,
              type: `multiple-choice`,
              question: `How do status, hierarchy, and belonging differ?`,
              options: [
                `Same thing`,
                `Status: relative standing in a group (how much regard/respect/deference); hierarchy: formal or informal structure of authority; belonging: sense that you're accepted as a member as yourself; can come apart (high status without belonging, position without status, etc.); different work to build each`,
                `Levels`,
                `Random terms`,
              ],
              correctIndex: 1,
              explanation: `Leadership effectiveness depends on all three but they operate differently. Building status involves demonstrating value. Navigating hierarchy involves understanding structures. Cultivating belonging involves authentic acceptance. A leader can be high-status, hierarchically positioned, and yet fail to create belonging — which damages everything else.`,
            },
            {
              id: `q2`,
              type: `multiple-choice`,
              question: `What's "earned" vs "positional" vs "borrowed" status?`,
              options: [
                `Random labels`,
                `Earned: from demonstrated contribution or competence (durable, slow to build); positional: from formal role or title (immediate but conditional); borrowed: from association or credentials (initial credibility, fades without conversion to earned); most people have a mix; same visible level can have very different sources underneath`,
                `Money types`,
                `Class system`,
              ],
              correctIndex: 1,
              explanation: `Each type has legitimate uses. Earned status takes time to build; positional status provides necessary coordination structures; borrowed status gives newcomers initial credibility. The framework is about analytical clarity, not moral judgment of which is "good."`,
            },
            {
              id: `q3`,
              type: `multiple-choice`,
              question: `What is "status conversion"?`,
              options: [
                `Religious change`,
                `Process of converting one type of status into another, especially converting borrowed or positional status into earned status; critical for sustaining status over time; someone with only borrowed status typically loses it if they don't convert through demonstrated contribution; someone with only positional status often loses authority when leaving the position`,
                `Status update`,
                `Random concept`,
              ],
              correctIndex: 1,
              explanation: `Knowing about status conversion helps you understand status trajectories. People with high status now may be on different trajectories depending on whether their status sources are durable. The same visible status with different sources has different futures.`,
            },
            {
              id: `q4`,
              type: `multiple-choice`,
              question: `What is "informal hierarchy"?`,
              options: [
                `Casual leadership`,
                `Implicit structure of influence and deference in groups without explicit formal positions; emerges in any group of more than a few people; influenced by demonstrated competence, time in group, social skills, strategic positioning, sometimes characteristics unrelated to substance; often captures real influence better than formal hierarchies do`,
                `Family structure`,
                `Random pattern`,
              ],
              correctIndex: 1,
              explanation: `Most group analysis focuses on the formal hierarchy and misses the informal one. The actual decision-making in many groups runs through informal influence; formal positions are partly ratifications of who the group already defers to. Understanding both lets you see what's really happening.`,
            },
            {
              id: `q5`,
              type: `multiple-choice`,
              question: `What's the distinction between "belonging" and "fitting in" (Brown)?`,
              options: [
                `Same thing`,
                `From Brené Brown's research: fitting in = changing yourself to be accepted; belonging = being accepted as you actually are; the two get confused but are opposites; people who chronically fit in often feel chronically lonely despite being surrounded by people; real belonging requires being accepted as actual person not performed version`,
                `Group membership`,
                `Random distinction`,
              ],
              correctIndex: 1,
              explanation: `Many people pursue fitting in thinking it will produce belonging, but it produces the opposite. Real belonging requires willingness to show up as you actually are and courage to accept the response. The distinction matters because the same external behavior (being in a group) can produce very different internal experiences.`,
            },
            {
              id: `q6`,
              type: `multiple-choice`,
              question: `What are "belonging cues" (Coyle)?`,
              options: [
                `Random signals`,
                `From Daniel Coyle's "The Culture Code" (2017): specific signals that indicate group membership — physical proximity and attention, eye contact, small acts of welcome; operate mostly below conscious awareness; high-belonging groups produce them frequently; low-belonging groups produce them rarely; leaders shape belonging climate disproportionately`,
                `Sound effects`,
                `Body language`,
              ],
              correctIndex: 1,
              explanation: `Belonging is partly what makes psychological safety possible (Amy Edmondson connection). Leaders shape belonging climate disproportionately because they signal who belongs through how they treat individuals in public moments. Single moments shape group belonging more than equivalent private moments.`,
            },
            {
              id: `q7`,
              type: `multiple-choice`,
              question: `Who is Cecilia Ridgeway and what's her contribution?`,
              options: [
                `Random researcher`,
                `Sociologist at Stanford who has spent decades researching status dynamics; her work shows status is partly earned, partly assigned by social categories, partly negotiated through small interactions; affects whose ideas get heard, whose contributions get credited, who can lead; foundational status research`,
                `Politician`,
                `Tech founder`,
              ],
              correctIndex: 1,
              explanation: `Ridgeway's research lets us see status dynamics analytically rather than just experientially. In meetings, high-status members get more speaking time, more nods of agreement, more weight on ideas. Knowing how this works lets you both analyze accurately and notice when good ideas from low-status members aren't getting heard.`,
            },
            {
              id: `q8`,
              type: `multiple-choice`,
              question: `Can someone have status without belonging?`,
              options: [
                `No, they go together`,
                `Yes — high-performing executives, celebrities, popular kids can have high status while feeling chronically unaccepted as themselves; the status is conditional on continued performance; the real person isn't being accepted; status without belonging produces significant distress even when externally everything looks fine`,
                `Same thing`,
                `Random possibility`,
              ],
              correctIndex: 1,
              explanation: `The two come apart in real life. Understanding them as distinct helps you see what's actually happening in groups and what your own experience reflects. Status is about respect/deference; belonging is about acceptance as actual self.`,
            },
            {
              id: `q9`,
              type: `true-false`,
              question: `True or false: One type of status (earned, positional, or borrowed) is morally better than the others.`,
              correctAnswer: false,
              explanation: `False. The framework is analytical, not moral. Each type has legitimate uses. Earned status takes time to build and is durable. Positional status provides necessary coordination structures in groups. Borrowed status gives newcomers initial credibility. Treating one as "good" and others as "bad" misses the actual function each plays.`,
            },
            {
              id: `q10`,
              type: `inference`,
              question: `Your friend says "She just made captain of the soccer team. Now she gets to call all the shots." Based on this lesson, what should you point out?`,
              options: [
                `"True"`,
                `"She has positional status from the captain role, which gets her initial deference. But positional status without underlying earned status is fragile. If she doesn't show specific things — leadership in moments, real competence, treating teammates well — the deference fades. Captains who got the role through popularity but didn't earn it through demonstrated leadership usually lose the influence the position theoretically provides within a few months. The real question isn't whether she has the title; it's whether she'll convert positional status into earned status by demonstrating actual leadership. The first few weeks of her time as captain are when that conversion either starts happening or starts failing."`,
                `"Captains rule"`,
                `"Random luck"`,
              ],
              correctIndex: 1,
              explanation: `Real applied status literacy. Don't accept the surface framing that positional status = real influence. Apply the framework to predict trajectory: will positional status convert to earned status, or fade? The conversion question is what determines whether the captain title produces real leadership or just a title.`,
            },
          ],
        },

        {
          id: `l09-reflection`,
          type: `reflection`,
          headline: `Sit with this`,
          intro: `Pick the prompt that pulls at you most. Your answer is saved.`,
          prompts: [
            { id: `reflect-cognitive`, category: `Cognitive`, prompt: `Before this lesson, did you explicitly distinguish status, hierarchy, and belonging? Has anything shifted in how you see groups?` },
            { id: `reflect-meta`, category: `Metacognitive`, prompt: `Honestly: in groups you're in, do you mostly experience earned, positional, or borrowed status? What does the mix look like?` },
            { id: `reflect-identity`, category: `Identity`, prompt: `If you become someone known for earned status (built through demonstrated contribution) rather than borrowed or positional, what does that change about your durability across many groups over a lifetime?` },
            { id: `reflect-application`, category: `Application`, prompt: `Pick one group you're in. Apply the framework: who has earned, positional, borrowed status? Where does belonging vary? What does the formal vs informal hierarchy look like?` },
            { id: `reflect-critical`, category: `Critical`, prompt: `Are there groups where status doesn't operate the way the framework suggests? What about very small groups (2-3 people)? What about online communities with anonymous members?` },
            { id: `reflect-personal`, category: `Personal investigation`, prompt: `Notice belonging dynamics in one group this week. Who experiences belonging? Who experiences fitting-in (changing themselves to be accepted)? What produces the difference?` },
          ],
        },

        {
          id: `l09-real-world`,
          type: `real-world`,
          headline: `Take it into your life`,
          guideContext: `Status literacy lets you see and shape group dynamics over a lifetime. Two paths.`,
          familyActivity: {
            title: `The Family Status Conversation`,
            duration: `45 minutes`,
            description: `Share the framework. Then ask family members about a group they belong to (workplace, friend group, community organization). Apply the framework: who has earned, positional, borrowed status? Where does belonging vary? Where do formal and informal hierarchies match or diverge? Most adults haven't done this kind of explicit analysis even of groups they've been in for years.`,
          },
          projectOption: {
            title: `Read Brené Brown's "Atlas of the Heart" or Coyle's "The Culture Code," 4 weeks (optional)`,
            duration: `4 weeks, ~30 minutes per session`,
            description: `Pick one: Brené Brown's "Atlas of the Heart" (2021) for emotion and belonging research, or Daniel Coyle's "The Culture Code" (2017) for belonging cues and group dynamics. Read carefully. Apply concepts to groups you're part of. Write 1,500 words on what you observed about how status and belonging actually work.`,
            offerToParent: `Parent: opt your kid into this project. Building explicit status and belonging literacy at 12 produces durable group skills.`,
          },
          identityQuestion: `If you become someone who can accurately analyze status, hierarchy, and belonging in any group, what does that change about your ability to lead, follow, and contribute across thousands of group situations over a lifetime?`,
        },

        {
          id: `l09-identity-hook`,
          type: `identity-hook`,
          headline: `Who is this lesson making you?`,
          prompt: `One sentence. No wrong answer.`,
          placeholder: `Someone who...`,
          examples: [
            `Someone who distinguishes earned, positional, and borrowed status accurately.`,
            `A person who builds earned status over time rather than relying on borrowed or positional alone.`,
            `Someone who notices belonging dynamics in groups and shapes them deliberately when leading.`,
          ],
          saveKey: `identity_responses_sl_11_12_9`,
        },

        {
          id: `l09-celebration`,
          type: `celebration`,
          guideText: `{name}. Ninth Social Leadership lesson done. You can now distinguish status, hierarchy, and belonging as concepts, identify earned vs positional vs borrowed status, understand formal vs informal hierarchies, and apply Brown's belonging-vs-fitting-in distinction. Major thinkers: Cecilia Ridgeway, Brené Brown, Daniel Coyle. You can analyze any group accurately to see what's actually producing the dynamics in it. Halfway through the band. Next time we go into a topic that connects directly to status and belonging: civic engagement. What does it look like to actually contribute to broader communities? Argument Builder. Let's go. — Valor`,
          badge: `status-analyst`,
          badgeName: `Status Analyst`,
          xpEarned: 75,
          competencies: [
            `Distinguishes status, hierarchy, and belonging as concepts`,
            `Identifies earned, positional, and borrowed status sources`,
            `Understands formal vs informal hierarchies`,
            `Knows Cecilia Ridgeway's status research, Brené Brown's belonging work, Coyle's belonging cues`,
            `Applies framework to analyze any group accurately`,
          ],
          nextLessonPreview: {
            title: `Lesson 10: Civic Engagement`,
            hook: `What does contributing to broader community actually look like? Argument Builder.`,
          },
        },
      ],
    },
  ],
};

export default SOCIALLEADERSHIP_VOYAGER_L09;

if (import.meta.env?.DEV) {
  const l = SOCIALLEADERSHIP_VOYAGER_L09.lessons[0];
  const mags = l.screens.filter((s) => s.type === `magazine`).length;
  const investigation = l.screens.find((s) => s.type === `investigation`);
  const quiz = l.screens.find((s) => s.type === `quiz`)?.questions?.length ?? 0;
  const reflect = l.screens.find((s) => s.type === `reflection`)?.prompts?.length ?? 0;
  console.log(
    `[LESSON-SL-VOYAGER-L09 ${VERSION}] "${l.title}" — ${mags} magazine, investigation w/ ${investigation?.items?.length ?? 0} items in ${investigation?.buckets?.length ?? 0} buckets, ${quiz} quiz, ${reflect} reflection`
  );
}
