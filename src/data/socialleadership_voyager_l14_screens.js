// ─────────────────────────────────────────────────────────────────────────────
// SOCIAL LEADERSHIP VOYAGER  |  L14 — Power Dynamics in Groups
// Age band : voyagers (11-12)   Guide: valor (Lion)
// Standards: Coreverse Original — Organizational Behavior, Political Science
// CALIBRATED: Voyager spec v1.1 (May 2026)
// Interaction format: INVESTIGATION GAME (sort 9 scenarios into formal power / informal influence / coalition power)
// ─────────────────────────────────────────────────────────────────────────────

const VERSION = "voyager-sl-l14-v1";

const SOCIALLEADERSHIP_VOYAGER_L14 = {
  ageBand: `voyagers`,
  subjectId: `social-leadership`,
  guide: `valor`,

  lessons: [
    {
      id: `sl-11-12-14`,
      title: `Power Dynamics in Groups`,
      duration: 35,
      xpReward: 75,
      badge: `power-dynamics-reader`,
      badgeName: `Power Dynamics Reader`,

      screens: [
        {
          id: `l14-welcome`,
          type: `welcome`,
          guideText: `{name}, every group has power dynamics. The formal structure (who has the title, who chairs the meeting, who signs off on decisions) is only part of what's happening. Often the more important question is where actual influence flows, which coalitions are forming, and what's getting decided outside the official process. The skill of reading these dynamics accurately is what political scientists call "power literacy" — and it's one of the most useful skills for any leadership role. Today you'll sort nine real scenarios into three categories: formal power dynamics, informal influence, and coalition power. By the end you'll have a working framework for reading any group you're part of.`,
          headline: `Power Dynamics in Groups`,
          subtitle: `Formal structure is only part of what's happening. Real influence often flows elsewhere.`,
          visual: `/voyager-assets/social-leadership/l14-welcome.webp`,
        },

        {
          id: `l14-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Why Reading Power Dynamics Matters`,
          paragraphs: [
            `Most groups operate with two layers of power simultaneously: the formal structure (titles, roles, official processes) and the informal one (actual influence, relationships, where decisions really get made). The two layers usually overlap partially but not entirely. The CEO has formal authority but specific employees may have influence the CEO doesn't. The team captain has formal role but the most experienced player may shape what actually happens. The school principal has formal power but a respected teacher may be more influential among colleagues.`,
            `Confusing the two layers produces predictable mistakes. People who only see formal structure miss where real influence operates and try to work through channels that don't move things. People who only see informal influence underestimate when formal authority actually matters (legal questions, financial sign-off, public representation). Skilled operators see both layers and choose which to engage based on the specific situation.`,
            `Jeffrey Pfeffer at Stanford has spent decades studying power dynamics in organizations. His work, particularly "Power: Why Some People Have It and Others Don't" (2010), argues that academic and professional success often depends as much on understanding power dynamics as on technical capability. The framing is uncomfortable for many people who'd prefer to believe organizations are pure meritocracies, but the empirical pattern is clear: people who can read power dynamics accurately advance and accomplish more than equally talented people who can't.`,
            `One important distinction. Reading power dynamics accurately is different from being Machiavellian. You don't have to manipulate to benefit from understanding what's happening. You can be entirely ethical AND understand where influence flows. The literacy serves both your effectiveness in ethical engagement (working with the right people, on the right issues, through the right channels) AND your protection from being naive about how groups actually work.`,
            `For 12-year-olds, the skill applies directly. School cliques have power dynamics. Sports teams have power dynamics. Family decisions have power dynamics. Friend groups have power dynamics. Religious or community organizations have power dynamics. The patterns are recognizable across all of these once you know what to look for.`,
          ],
          image: `/voyager-assets/social-leadership/l14-s1-matters.webp`,
          imageCaption: `Two layers of power: formal structure and informal influence. Skilled operators see both and choose which to engage based on situation.`,
          vocab: [
            {
              word: `power literacy`,
              definition: `Skill of accurately reading both formal and informal power dynamics in any group. Combines understanding of formal structure (titles, roles, processes) with informal patterns (actual influence, relationships, where decisions get made). Different from being Machiavellian; you can be ethical AND understand what's happening. Pfeffer's work argues professional success often depends as much on power literacy as on technical capability.`,
              audioPrompt: `Power literacy in groups is the skill of accurately reading both formal and informal power dynamics in any group, {name}. Combines understanding of formal structure (titles, roles, official processes) with the informal patterns (actual influence, relationships, where decisions really get made). The two layers usually overlap partially but not entirely. Most groups operate with both simultaneously. Skilled operators see both layers and choose which to engage based on the specific situation. Important distinction: power literacy is different from being Machiavellian. You don't have to manipulate to benefit from understanding what's happening. You can be entirely ethical AND understand where influence flows. Jeffrey Pfeffer at Stanford has spent decades studying power dynamics in organizations. His work argues that academic and professional success often depends as much on power literacy as on technical capability. The framing is uncomfortable for many people but the empirical pattern is clear.`,
            },
          ],
        },

        {
          id: `l14-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Layer 1: Formal Power Dynamics`,
          paragraphs: [
            `Formal power operates through stated rules, designated roles, and official processes. The CEO has authority to make certain decisions. The committee has authority to approve certain proposals. The captain has authority to make tactical calls. The judge has authority to rule on legal questions. The teacher has authority over the classroom.`,
            `Several patterns distinguish formal power. First: it's specified. You can usually find documentation (job descriptions, organizational charts, rules of order) that articulates what authority comes with which role. Second: it's bounded. Formal authority typically applies to specific domains rather than generally; the principal has authority over school operations but not over what families do at home. Third: it's transferable. When the person with formal authority changes, the authority transfers to the new occupant of the role.`,
            `Formal power has real strengths. It's predictable: you usually know who has authority to make which decisions. It's legitimate: the authority comes from accepted processes that the group has agreed to. It's accountable: people with formal authority can be held responsible through equally formal mechanisms. It enables coordinated action: organizations couldn't function if every decision required full consensus.`,
            `Formal power also has limits. People with formal authority often discover they have less actual influence than the role suggested. They give orders that get nominally followed but slowly subverted. They make decisions that get formally accepted but informally undermined. The formal layer alone isn't enough to actually make things happen; it has to combine with sufficient informal influence to produce action.`,
            `Recognizing formal power requires asking specific questions. Who has the formal authority to make this decision? What's the official process? What are the rules of engagement? What documentation exists about how things are supposed to work? These questions often have clear answers; that's part of what distinguishes formal power.`,
          ],
          image: `/voyager-assets/social-leadership/l14-s2-formal.webp`,
          imageCaption: `Formal power: stated rules, designated roles, official processes. Specified, bounded, transferable. Predictable but often insufficient alone.`,
          vocab: [
            {
              word: `formal power`,
              definition: `Power that operates through stated rules, designated roles, and official processes. Specified (documentation usually exists), bounded (typically applies to specific domains), transferable (transfers to new occupant of role). Examples: CEO authority, committee authority, captain authority, judicial authority, parental authority within parent-child relationship. Strong when sufficient; rarely sufficient alone for actual action.`,
              audioPrompt: `Formal power is power that operates through stated rules, designated roles, and official processes, {name}. The CEO has authority to make certain decisions. The committee has authority to approve certain proposals. The team captain has authority to make tactical calls. Several patterns distinguish formal power. First, it's specified — you can usually find documentation that articulates what authority comes with which role. Second, it's bounded — formal authority typically applies to specific domains rather than generally. Third, it's transferable — when the person with formal authority changes, the authority transfers to the new occupant of the role. Formal power has real strengths. It's predictable. It's legitimate. It's accountable through equally formal mechanisms. It enables coordinated action. Formal power also has limits. People with formal authority often discover they have less actual influence than the role suggested. The formal layer alone isn't enough to actually make things happen; it has to combine with sufficient informal influence to produce action.`,
            },
          ],
        },

        {
          id: `l14-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Layer 2: Informal Influence`,
          paragraphs: [
            `Informal influence operates through relationships, trust, social capital, and reputation rather than formal authority. Some people in groups have outsized influence on what happens without holding any formal position. Others hold formal positions but exert less influence than their roles suggest. The gap between formal authority and informal influence is one of the most important patterns to read in any group.`,
            `Where informal influence comes from. Expertise: people known for genuine competence in relevant areas. Relationships: people who know everyone and are trusted by most. Information: people who have access to what's actually happening (often through being talked to by many others). Time in role: people who've been around long enough to know how things really work. Personal qualities: people who are seen as fair, wise, or substantively helpful. Charisma: people who others want to be around. Often informal influence comes from combinations of these.`,
            `Informal influence is harder to read than formal power because it's not documented. You have to infer it from observing what happens. Who do people consult before making decisions? Whose opinions seem to matter even when they're not formally asked? Who gets quoted approvingly by others? Whose absence is noticed? Who do people defer to even when they don't have to? The patterns reveal informal influence over time.`,
            `Informal influence has specific strengths. It's based on real (not just official) qualities. It's earned rather than just granted. It often persists through changes in formal structure. People with high informal influence often produce more durable change than people with only formal authority. The civil rights movement, environmental movements, and many other significant changes were driven by people with high informal influence and limited formal authority.`,
            `Informal influence also has limits. It's harder to hold accountable; people exercising it aren't formally responsible. It can be inconsistent across topics; expertise in one area doesn't transfer to others. It can be invisible to outsiders, making organizations look more meritocratic than they are. And it can be used unethically with less transparency than formal power because the channels aren't documented.`,
            `Recognizing informal influence requires watching specific patterns. Who consults whom before deciding? Who gets quoted approvingly? Whose objections actually slow things down? Whose endorsement matters? Whose absence creates uncertainty? The patterns reveal the actual influence network underneath the formal structure.`,
          ],
          image: `/voyager-assets/social-leadership/l14-s3-informal.webp`,
          imageCaption: `Informal influence: relationships, expertise, information, time, personal qualities, charisma. Often more durable than formal power but harder to read.`,
          vocab: [
            {
              word: `informal influence`,
              definition: `Power that operates through relationships, trust, social capital, and reputation rather than formal authority. Sources include expertise, relationships, information access, time in role, personal qualities, and charisma. Harder to read than formal power because it's not documented. Often persists through formal structural changes. Earned rather than granted. Can produce more durable change than formal authority alone.`,
              audioPrompt: `Informal influence is power that operates through relationships, trust, social capital, and reputation rather than formal authority, {name}. Some people in groups have outsized influence on what happens without holding any formal position. Where informal influence comes from: expertise (genuine competence in relevant areas), relationships (knowing everyone and being trusted by most), information (access to what's actually happening), time in role (knowing how things really work), personal qualities (seen as fair, wise, helpful), charisma (others wanting to be around them). Often combinations of these. Informal influence is harder to read than formal power because it's not documented. You have to infer it from observing what happens. Who do people consult before deciding? Whose opinions matter even when not formally asked? Whose absence is noticed? Often produces more durable change than formal authority because it's based on real qualities rather than just official position.`,
            },
          ],
        },

        {
          id: `l14-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Layer 3: Coalition Power`,
          paragraphs: [
            `The third layer operates through alliances. When groups of people with shared interests align with each other, they collectively exercise power neither could exercise alone. Coalition power is different from individual formal authority OR individual informal influence; it emerges from the alignment of multiple actors.`,
            `Coalitions form around specific interests. Political parties are coalitions: people with diverse views align around shared priorities even when they disagree on many other things. Departmental factions in organizations are coalitions: marketing and sales often share interests against operations, depending on the issue. Sports team subgroups (older players vs younger, starters vs bench) are coalitions when they align around specific questions.`,
            `What gives coalitions power. Numbers: if enough people align, formal processes that require votes or consensus tilt toward them. Resources: coalitions can pool budget, time, attention, or expertise. Coordination: aligned actors can pursue strategies that uncoordinated individuals couldn't. Reputation: coalitions can vouch for each other in ways that strengthen individual reputations within them.`,
            `Coalitions form and dissolve based on issues. A coalition that aligns around one question may dissolve or even reverse on the next. People you thought were enemies on one issue may be allies on another. The skill is reading specific coalitions on specific issues rather than assuming permanent alliances. "Politics makes strange bedfellows" is a recognition of this pattern.`,
            `Recognizing coalition power requires watching who's working together. Who supports each other publicly? Whose names appear together on proposals? Who attends meetings together? Who's in side conversations together? Who defends whom when challenged? The patterns reveal the coalition structure that often determines what actually happens in groups.`,
            `One important pattern. Most significant decisions in organizations happen because of coalitions, not because of individual decision-makers acting alone. The CEO may sign off but the coalition that brought the proposal forward and built support is often more determinative. The senator votes but the coalition that built the bill matters more than any individual vote. Understanding coalitions explains a lot of what individual-actor analysis misses.`,
          ],
          image: `/voyager-assets/social-leadership/l14-s4-coalition.webp`,
          imageCaption: `Coalition power: alliances that exercise power neither member could alone. Forms around specific issues; dissolves and reforms. Determines most significant decisions.`,
          vocab: [
            {
              word: `coalition power`,
              definition: `Power that emerges from alliances of people with shared interests aligning around specific issues. Different from individual formal authority or informal influence; emerges from alignment of multiple actors. Sources: numbers, pooled resources, coordination, mutual reputation reinforcement. Forms and dissolves based on issues. "Politics makes strange bedfellows" recognizes that coalitions reform around different questions. Determines most significant group decisions.`,
              audioPrompt: `Coalition power is power that emerges from alliances of people with shared interests aligning around specific issues, {name}. Different from individual formal authority or individual informal influence; emerges from the alignment of multiple actors. When groups of people with shared interests align with each other, they collectively exercise power neither could exercise alone. Sources include numbers (if enough people align, formal processes tilt their way), pooled resources, coordination of strategy, and mutual reputation reinforcement. Coalitions form around specific interests. Political parties are coalitions. Departmental factions are coalitions. Sports team subgroups are coalitions when they align on questions. Coalitions form and dissolve based on issues. A coalition that aligns around one question may dissolve or even reverse on the next. "Politics makes strange bedfellows" recognizes that coalitions reform around different questions. Most significant decisions in organizations happen because of coalitions, not because of individual decision-makers acting alone.`,
            },
          ],
        },

        {
          id: `l14-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Before You Sort The Scenarios`,
          paragraphs: [
            `In the investigation game that follows, you'll sort nine scenarios into the three categories: formal power, informal influence, and coalition power. Each scenario shows the primary dynamic operating, even though real situations often involve combinations.`,
            `One framing as you sort. Most situations have all three layers operating somewhat. The question is which is primary in each specific case. A scenario might involve formal authority making the official decision while informal influence shaped it and a coalition built support — but one of these is usually the dominant force. Your job is to identify the primary dynamic.`,
            `Another framing. Reading power dynamics requires noticing what people actually do, not just what they say. Stated organizational charts are one source of information; actual behavior is another. When the two diverge, behavior is usually the more reliable signal. Pay attention to who consults whom, who defers to whom, who supports whom, what gets done versus what's nominally agreed.`,
            `One last framing. This skill compounds across thousands of group situations over a lifetime. Most adults read power dynamics partially but not systematically. Building explicit literacy at 12 puts you ahead of most working professionals on a skill that shapes effectiveness in nearly every group role.`,
          ],
          image: `/voyager-assets/social-leadership/l14-s5-before.webp`,
          imageCaption: `Sort 9 scenarios into formal power / informal influence / coalition power. Identify the primary dynamic in each.`,
          vocab: [
            {
              word: `reading power dynamics`,
              definition: `Skill of accurately observing what's happening in groups beyond surface formal structure. Involves watching who consults whom, who defers to whom, whose opinions move things, what coalitions form around what issues, what gets done versus what's nominally agreed. Compounds across thousands of group situations over a lifetime. Most adults read partially but not systematically; explicit literacy is rare and valuable.`,
              audioPrompt: `Reading power dynamics is the skill of accurately observing what's happening in groups beyond surface formal structure, {name}. Involves watching specific patterns. Who consults whom before deciding? Whose opinions seem to matter even when not formally asked? Who do people defer to even when they don't have to? Whose objections actually slow things down? What coalitions form around what issues? What gets done versus what's only nominally agreed? Different from being Machiavellian; you can be entirely ethical and still benefit from accurate reading of what's happening. Compounds across thousands of group situations over a lifetime. Most adults read power dynamics partially but not systematically; they pick up some patterns through experience and miss others. Building explicit literacy at 12 puts you ahead of most working professionals on a skill that shapes effectiveness in nearly every group role.`,
            },
          ],
        },

        // ───── INVESTIGATION GAME ─────────────────────────────────────────────
        {
          id: `l14-investigation-game`,
          type: `investigation`,
          headline: `Sort The Scenarios`,
          intro: `Nine scenarios. Three categories. Drag each scenario into the category where the primary power dynamic is operating.`,
          buckets: [
            {
              id: `formal`,
              label: `Formal Power`,
              description: `Operating through stated rules, designated roles, and official processes`,
            },
            {
              id: `informal`,
              label: `Informal Influence`,
              description: `Operating through relationships, trust, reputation, expertise`,
            },
            {
              id: `coalition`,
              label: `Coalition Power`,
              description: `Operating through alliances of people aligning around shared interests`,
            },
          ],
          items: [
            {
              id: `item-1`,
              label: `The school principal sends an official memo announcing that all field trips now require approval from the principal's office before being scheduled. The new rule takes effect Monday.`,
              correctBucket: `formal`,
              explanation: `This is formal power exercising itself. The principal's authority over school operations includes setting policy. The official memo, the announced effective date, and the routing through the principal's office are all features of formal power: specified, bounded, transferred through the role. The rule may also have informal effects (changing what teachers can do quickly), but the primary dynamic is formal authority being used.`,
            },
            {
              id: `item-2`,
              label: `Whenever the team has to decide which restaurant to go to, everyone waits for Maya's opinion before voting. Nobody assigned her this role; she just consistently picks places everyone enjoys and most people defer to her judgment without ever discussing it.`,
              correctBucket: `informal`,
              explanation: `This is informal influence based on demonstrated reliability and trust. Maya has no formal authority to pick restaurants; nobody assigned her this role. But she's earned the informal influence through consistent good judgment. Other team members defer not because they have to but because they've come to trust her. Pure informal influence: would persist even if she had no formal role and would transfer if she stopped earning the trust.`,
            },
            {
              id: `item-3`,
              label: `The drama club's senior members (8 of them) meet privately the night before the cast announcement. They've all agreed to push back hard if their preferred friends aren't cast in the lead roles. The director knows the senior group can make rehearsals miserable if they're unhappy.`,
              correctBucket: `coalition`,
              explanation: `This is coalition power. The senior members individually might not have much influence over casting, but their alignment around shared interests gives them collective power. Their threat (making rehearsals miserable) depends on coordinated behavior. The director is responding not to any individual senior but to the coalition. Classic coalition dynamic: numbers + coordination + shared interest creating power neither member could exercise alone.`,
            },
            {
              id: `item-4`,
              label: `The judge rules that the defendant must pay damages. Both sides accept the ruling and the case is officially closed. The decision is binding because of the judge's formal authority in the legal system.`,
              correctBucket: `formal`,
              explanation: `This is formal power in clear form. The judge's authority comes from the legal system. The ruling is binding because of the role, not because of the individual judge's personal qualities. Other judges could have ruled. The binding force comes from formal authority that's specified, bounded (to legal questions), and transferable. Both sides accepting reflects acceptance of the formal system, not just this particular judge.`,
            },
            {
              id: `item-5`,
              label: `Sarah is the most experienced employee on the marketing team. She doesn't have any management title, but new employees informally check in with her about everything, including questions they should really ask their manager. The actual manager has noticed but seems okay with it.`,
              correctBucket: `informal`,
              explanation: `This is informal influence based on expertise and time in role. Sarah has no formal authority over new employees; their formal reporting line is to the manager. But her expertise and time on the team has produced informal influence that operates underneath the formal structure. The manager's acceptance is itself a feature of the informal layer: he could shut it down through formal authority but instead works with the informal pattern that's emerged.`,
            },
            {
              id: `item-6`,
              label: `Three teachers in the science department have formed an unofficial group that consistently advocates for more lab equipment funding. They've coordinated their meeting comments, their parent communications, and their messaging to the principal. The funding gets approved at the next budget cycle.`,
              correctBucket: `coalition`,
              explanation: `This is coalition power. Each individual teacher might have asked for lab equipment funding and been denied; the coordination of their voices created the influence that produced the result. Coordination of meeting comments, parent communications, and messaging to the principal are classic coalition behaviors: aligned action producing power neither individual could exercise alone. The principal is responding to the coalition, not to any individual teacher.`,
            },
            {
              id: `item-7`,
              label: `The student council president runs the meeting using the official rules of order. She calls votes, recognizes speakers, and signs off on the official meeting notes. Her presidency is determined by the election results and outlined in the council's constitution.`,
              correctBucket: `formal`,
              explanation: `This is formal power. The student council president has authority through the election process and the council's constitution. The rules of order, the formal procedures for recognizing speakers, the signing authority for meeting notes are all features of formal power: specified, bounded, transferable through the role. Whoever holds the presidency has these powers; the powers come with the role.`,
            },
            {
              id: `item-8`,
              label: `Coach is officially in charge of the team, but everyone knows that Diego's opinion on game strategy actually shapes what happens. Coach asks Diego before making lineup decisions. Players ask Diego when they don't understand something coach explained. Diego has no captain title; he's just deeply respected for his game knowledge.`,
              correctBucket: `informal`,
              explanation: `This is informal influence based on expertise. Diego has no formal authority — no captain title, no coaching role. But his game knowledge has produced informal influence that the coach and players defer to. Notice the specific pattern: people consult Diego, defer to his opinion, treat his knowledge as authoritative. None of this comes from formal authority; all of it comes from earned expertise and trust. Pure informal influence operating alongside (and sometimes above) formal authority.`,
            },
            {
              id: `item-9`,
              label: `The robotics club has both freshmen members and senior members. The seniors have decided as a group that this year's project will be drone-focused. They didn't ask the freshmen; they made the decision among themselves first, then announced it. The freshmen could in theory object but know they'd be outvoted.`,
              correctBucket: `coalition`,
              explanation: `This is coalition power. The seniors are operating as a coalition: they aligned among themselves, made the decision collectively, then presented it to the rest of the group. The freshmen's awareness that they'd be outvoted reflects the coalition's power. No individual senior has authority to set the project direction; the coalition does. Classic coalition pattern: shared interests, aligned action, collective power that determines outcomes the formal structure alone wouldn't have determined.`,
            },
          ],
          reflectionPrompt: `Look across your sortings. Which of the three layers is most common in your own life — family, school, friends? Which is hardest for you to read?`,
        },

        {
          id: `l14-quiz`,
          type: `quiz`,
          headline: `Check your understanding`,
          questions: [
            {
              id: `q1`,
              type: `multiple-choice`,
              question: `What does "power literacy in groups" mean?`,
              options: [
                `Being political`,
                `Skill of accurately reading both formal and informal power dynamics in any group; combines understanding of formal structure (titles, roles, processes) with informal patterns (actual influence, relationships, where decisions get made); different from being Machiavellian, you can be ethical AND understand what's happening`,
                `Just power`,
                `Random skill`,
              ],
              correctIndex: 1,
              explanation: `Pfeffer's work argues professional success often depends as much on power literacy as on technical capability. The literacy serves both effectiveness in ethical engagement AND protection from being naive about how groups actually work.`,
            },
            {
              id: `q2`,
              type: `multiple-choice`,
              question: `What characterizes "formal power"?`,
              options: [
                `Random feature`,
                `Operates through stated rules, designated roles, and official processes; specified (documentation usually exists); bounded (applies to specific domains); transferable (transfers to new occupant of role); examples include CEO authority, judge's authority, captain's authority within sport, principal's authority over school`,
                `Just titles`,
                `Random concept`,
              ],
              correctIndex: 1,
              explanation: `Formal power has real strengths (predictable, legitimate, accountable, enables coordinated action) but rarely sufficient alone for actual action. Has to combine with sufficient informal influence to produce results.`,
            },
            {
              id: `q3`,
              type: `multiple-choice`,
              question: `Where does "informal influence" come from?`,
              options: [
                `Random sources`,
                `Expertise (genuine competence); relationships (knowing everyone, being trusted); information access (knowing what's actually happening); time in role (knowing how things really work); personal qualities (seen as fair, wise, helpful); charisma (others wanting to be around them); often combinations`,
                `Just luck`,
                `Random connections`,
              ],
              correctIndex: 1,
              explanation: `Informal influence is earned rather than granted. Often persists through formal structural changes because it's based on real qualities. Often produces more durable change than formal authority alone.`,
            },
            {
              id: `q4`,
              type: `multiple-choice`,
              question: `What is "coalition power"?`,
              options: [
                `Big groups`,
                `Power that emerges from alliances of people with shared interests aligning around specific issues; different from individual formal authority or informal influence; sources include numbers, pooled resources, coordination, mutual reputation reinforcement; forms and dissolves based on issues; determines most significant group decisions`,
                `Random alliances`,
                `Group think`,
              ],
              correctIndex: 1,
              explanation: `"Politics makes strange bedfellows" recognizes that coalitions reform around different questions. The same people may be allies on one issue and opposing on another. Reading specific coalitions on specific issues matters more than assuming permanent alliances.`,
            },
            {
              id: `q5`,
              type: `multiple-choice`,
              question: `Why do most significant group decisions happen because of coalitions?`,
              options: [
                `Random fact`,
                `The CEO/leader/decision-maker may sign off, but the coalition that brought the proposal forward and built support is often more determinative; individual-actor analysis misses what coalition analysis reveals; coordination produces power neither individual member could exercise alone`,
                `Just numbers`,
                `Random pattern`,
              ],
              correctIndex: 1,
              explanation: `Understanding coalitions explains a lot of what individual-actor analysis misses. The senator votes but the coalition that built the bill matters more than any individual vote. The principal approves but the coalition that pushed the proposal matters more than the formal sign-off.`,
            },
            {
              id: `q6`,
              type: `multiple-choice`,
              question: `How do you read informal influence in a group?`,
              options: [
                `Read minds`,
                `Watch specific patterns: who consults whom before deciding, whose opinions matter even when not formally asked, whose objections actually slow things down, whose endorsement matters, whose absence creates uncertainty; the patterns reveal the actual influence network underneath formal structure`,
                `Ask leaders`,
                `Random observation`,
              ],
              correctIndex: 1,
              explanation: `Informal influence is harder to read than formal power because it's not documented. You infer it from observing what happens over time. The patterns reveal who actually has influence regardless of who has formal titles.`,
            },
            {
              id: `q7`,
              type: `multiple-choice`,
              question: `Is reading power dynamics the same as being Machiavellian?`,
              options: [
                `Yes`,
                `No. Reading power dynamics accurately is different from being Machiavellian; you don't have to manipulate to benefit from understanding what's happening; can be entirely ethical AND understand where influence flows; literacy serves both effectiveness in ethical engagement AND protection from being naive`,
                `Sometimes`,
                `Random claim`,
              ],
              correctIndex: 1,
              explanation: `The framing that power literacy is somehow inherently manipulative is wrong. Many ethical actors operate with high power literacy and use it for legitimate purposes (working through the right channels, building support for good ideas, protecting against bad-faith actors).`,
            },
            {
              id: `q8`,
              type: `multiple-choice`,
              question: `What happens when people only see formal structure and miss informal/coalition layers?`,
              options: [
                `Nothing`,
                `They miss where real influence operates and try to work through channels that don't move things; underestimate when formal authority actually matters too; skilled operators see all layers and choose which to engage based on the specific situation`,
                `They succeed`,
                `Random outcome`,
              ],
              correctIndex: 1,
              explanation: `Confusing the layers produces predictable mistakes. People who only see formal structure work through channels that don't move things. People who only see informal influence underestimate when formal authority actually matters. The skill is reading all three accurately.`,
            },
            {
              id: `q9`,
              type: `true-false`,
              question: `True or false: Formal authority is sufficient to make things happen in groups.`,
              correctAnswer: false,
              explanation: `False. Formal authority is rarely sufficient alone for actual action. People with formal authority often discover they have less actual influence than the role suggested. They give orders that get nominally followed but slowly subverted. The formal layer has to combine with sufficient informal influence to produce real action.`,
            },
            {
              id: `q10`,
              type: `inference`,
              question: `Your friend says "The drama teacher is officially in charge of casting, but everyone knows the senior students actually decide who gets the lead roles. They meet privately and the teacher just goes along with it." Based on this lesson, what's actually happening?`,
              options: [
                `Random situation`,
                `Coalition power operating underneath formal structure. The teacher has formal authority (officially in charge of casting). The senior students operate as a coalition: aligned interests, coordinated action, collective power that determines outcomes the formal structure alone wouldn't produce. The teacher's going along reflects awareness that fighting the coalition would create problems (rehearsals would suffer, students might disengage). Both layers are operating: formal authority signs off, coalition power determines what gets signed off on. Reading both is key; missing either misses what's happening.`,
                `Teacher is weak`,
                `Students rule`,
              ],
              correctIndex: 1,
              explanation: `Real applied power literacy. Don't simplify to "students rule" or "teacher is weak"; recognize that both layers are operating simultaneously. Naming the coalition dynamic specifically gives you tools to understand similar situations across many contexts in your life.`,
            },
          ],
        },

        {
          id: `l14-reflection`,
          type: `reflection`,
          headline: `Sit with this`,
          intro: `Pick the prompt that pulls at you most. Your answer is saved.`,
          prompts: [
            { id: `reflect-cognitive`, category: `Cognitive`, prompt: `Before this lesson, did you have explicit framework for reading power dynamics? Has anything shifted?` },
            { id: `reflect-meta`, category: `Metacognitive`, prompt: `Honestly: in groups you're in, which layer do you read most naturally? Which is hardest for you to see?` },
            { id: `reflect-identity`, category: `Identity`, prompt: `If you become someone who can accurately read power dynamics in any group across decades, what does that change about your effectiveness in groups and your protection from naivete?` },
            { id: `reflect-application`, category: `Application`, prompt: `Pick one specific group you're in (school class, sports team, family, friend group). Identify the formal power, informal influence, and coalition dynamics operating.` },
            { id: `reflect-critical`, category: `Critical`, prompt: `Are there groups where these frameworks don't apply well? What about new groups still forming? Highly informal friend groups? Pure expertise meritocracies?` },
            { id: `reflect-personal`, category: `Personal investigation`, prompt: `Watch one meeting or group event this week. Identify the layers in real time. What do you notice that you wouldn't have before?` },
          ],
        },

        {
          id: `l14-real-world`,
          type: `real-world`,
          headline: `Take it into your life`,
          guideContext: `Power literacy compounds across thousands of group situations over a lifetime. Two paths.`,
          familyActivity: {
            title: `The Family Power Dynamics Conversation`,
            duration: `45 minutes`,
            description: `Share the three layers framework. Then pick one organization a family member belongs to and analyze the power dynamics: where's formal authority, where's informal influence, what coalitions operate? Most adults haven't done this analysis explicitly even for organizations they've been in for years. The conversation often surfaces real insights about why certain organizational dynamics work or don't work.`,
          },
          projectOption: {
            title: `Read Pfeffer's "Power" or Robert Caro's "The Path to Power," 4-6 weeks (optional)`,
            duration: `4-6 weeks, ~30 minutes per session`,
            description: `Pick one: Jeffrey Pfeffer's "Power: Why Some People Have It and Others Don't" (2010, direct analysis of power dynamics) or Robert Caro's "The Path to Power" (first volume of his LBJ biography, demonstrates power dynamics in action). Apply the framework to situations in your community during the reading period. Write 1,500 words on what you learned. Real applied power literacy at 12 is rare and valuable.`,
            offerToParent: `Parent: opt your kid into this project. Reading real power-dynamics literature at 12 produces capability most working adults lack.`,
          },
          identityQuestion: `If you become someone who can accurately read power dynamics in any group across a lifetime, what does that change about your effectiveness in groups, your ability to work toward good outcomes, and your protection from being naive about how things actually work?`,
        },

        {
          id: `l14-identity-hook`,
          type: `identity-hook`,
          headline: `Who is this lesson making you?`,
          prompt: `One sentence. No wrong answer.`,
          placeholder: `Someone who...`,
          examples: [
            `Someone who reads formal, informal, and coalition power simultaneously.`,
            `A person who can see which channels actually move things in any group.`,
            `Someone with power literacy who uses it for ethical purposes rather than manipulation.`,
          ],
          saveKey: `identity_responses_sl_11_12_14`,
        },

        {
          id: `l14-celebration`,
          type: `celebration`,
          guideText: `{name}. Fourteenth Social Leadership lesson done. You now have a three-layer framework for power dynamics in groups: formal power, informal influence, coalition power. You can recognize each in scenarios and understand how they combine in real situations. The skill compounds across every group you'll be in for the next 70 years. Next time we go into one of the most contested questions in leadership: charisma vs substance. Source Evaluation format. Let's go. — Valor`,
          badge: `power-dynamics-reader`,
          badgeName: `Power Dynamics Reader`,
          xpEarned: 75,
          competencies: [
            `Distinguishes formal power, informal influence, and coalition power`,
            `Knows Pfeffer's work on power dynamics in organizations`,
            `Reads informal influence by watching specific behavioral patterns`,
            `Identifies coalitions by alignments around shared interests`,
            `Applies framework to recognize layered dynamics in real group situations`,
          ],
          nextLessonPreview: {
            title: `Lesson 15: Charisma vs Substance`,
            hook: `Three sources on whether charisma is the key leadership trait. Source Evaluation.`,
          },
        },
      ],
    },
  ],
};

export default SOCIALLEADERSHIP_VOYAGER_L14;

if (import.meta.env?.DEV) {
  const l = SOCIALLEADERSHIP_VOYAGER_L14.lessons[0];
  const mags = l.screens.filter((s) => s.type === `magazine`).length;
  const investigation = l.screens.find((s) => s.type === `investigation`);
  const quiz = l.screens.find((s) => s.type === `quiz`)?.questions?.length ?? 0;
  const reflect = l.screens.find((s) => s.type === `reflection`)?.prompts?.length ?? 0;
  console.log(
    `[LESSON-SL-VOYAGER-L14 ${VERSION}] "${l.title}" — ${mags} magazine, investigation w/ ${investigation?.items?.length ?? 0} items, ${quiz} quiz, ${reflect} reflection`
  );
}
