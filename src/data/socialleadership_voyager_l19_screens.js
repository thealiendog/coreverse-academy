// ─────────────────────────────────────────────────────────────────────────────
// SOCIAL LEADERSHIP VOYAGER  |  L19 — When To Lead and When To Follow
// Age band : voyagers (11-12)   Guide: valor (Lion)
// Standards: Coreverse Original — Situational Leadership, Applied Judgment
// CALIBRATED: Voyager spec v1.1 (May 2026)
// Interaction format: INVESTIGATION GAME (sort 9 scenarios into lead/follow/shift)
// ─────────────────────────────────────────────────────────────────────────────

const VERSION = "voyager-sl-l19-v1";

const SOCIALLEADERSHIP_VOYAGER_L19 = {
  ageBand: `voyagers`,
  subjectId: `social-leadership`,
  guide: `valor`,

  lessons: [
    {
      id: `sl-11-12-19`,
      title: `When To Lead and When To Follow`,
      duration: 35,
      xpReward: 75,
      badge: `situational-judgment`,
      badgeName: `Situational Judgment`,

      screens: [
        {
          id: `l19-welcome`,
          type: `welcome`,
          guideText: `{name}, the most important leadership skill isn't always leading. It's knowing when to lead, when to follow, and when to shift between the two based on what the situation actually requires. People who try to lead everything fail at most of it. People who never lead miss the situations where they were the right person to step up. People who can read situations accurately and adapt their role accordingly outperform both. Today we work through nine specific scenarios and sort them into three buckets: lead this situation, follow here, or shift between depending on what's needed. By the end you'll have a working framework for reading any situation you find yourself in.`,
          headline: `When To Lead and When To Follow`,
          subtitle: `The most important leadership skill: reading situations accurately and adapting your role.`,
          visual: `/voyager-assets/social-leadership/l19-welcome.webp`,
        },

        {
          id: `l19-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Why Situational Judgment Matters Most`,
          paragraphs: [
            `Throughout this band you've learned about leadership and followership as separate skills. Lesson 11 covered followership directly and introduced "dynamic role-switching" as one possible orientation. This final substantive lesson goes deeper into the practical question: in any specific situation, what's actually the right role to take?`,
            `The question matters because most people get it wrong in predictable ways. Some people default to leading even when they shouldn't (because someone else has better expertise, because they're new to a context, because formal authority is operating well and shouldn't be undermined). Other people default to following even when they shouldn't (because no one else is stepping up, because they have specific knowledge that's needed, because the situation requires someone to act). Both defaults produce worse outcomes than accurate situational reading.`,
            `Several factors shape what the right role is in any specific situation. Who has relevant expertise on this specific question? Who has formal authority that's actually operating well? What does the situation require that no one is currently providing? What's your specific position (new to context, well-established, peer, junior, senior)? What are the consequences of getting the role wrong in this direction vs. the other? Skilled situational readers consider these factors quickly and reach reasonable conclusions; unskilled readers default to their general tendency without considering the specifics.`,
            `For 12-year-olds, the skill matters because your situations are varied. School: you'll be in classes where teachers lead, group projects where peers lead, individual work where you lead yourself, club situations where leadership rotates. Family: you'll have situations where parents lead, situations where you lead (caring for younger siblings, managing your own time), situations that require coordination across roles. Friends: every friend group involves shifting leadership across activities, decisions, and contexts. Reading each accurately produces dramatically different outcomes than applying a single default.`,
            `The framework you build now scales across decades. Adults face the same essential question in workplace situations, community involvement, family roles, and friendships. People who developed accurate situational reading early often become unusually effective in all these contexts because they're applying the right skill to each context.`,
          ],
          image: `/voyager-assets/social-leadership/l19-s1-matters.webp`,
          imageCaption: `Situational judgment is the meta-skill that determines which other skills you use when. Most people default; skilled readers consider specifics.`,
          vocab: [
            {
              word: `situational judgment (in leadership/followership)`,
              definition: `Meta-skill of reading specific situations to determine whether to lead, follow, or shift between roles. Considers factors like who has relevant expertise, who has formal authority operating well, what the situation requires that no one is providing, your specific position, consequences of getting role wrong. Distinguishes between people who default to their general tendency vs people who adapt to what each situation actually needs.`,
              audioPrompt: `Situational judgment in leadership and followership is the meta-skill of reading specific situations to determine whether to lead, follow, or shift between roles, {name}. Considers several factors. Who has relevant expertise on this specific question? Who has formal authority that's actually operating well? What does the situation require that no one is currently providing? What's your specific position — new to context, well-established, peer, junior, senior? What are the consequences of getting the role wrong in this direction versus the other? Skilled situational readers consider these factors quickly and reach reasonable conclusions. Unskilled readers default to their general tendency without considering the specifics. People who default to leading even when they shouldn't, and people who default to following even when they shouldn't, both produce worse outcomes than accurate situational reading. The skill is the meta-skill that determines which other leadership and followership skills you use in each specific situation. Develops across thousands of situations over a lifetime.`,
            },
          ],
        },

        {
          id: `l19-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `When To Lead: Specific Signals`,
          paragraphs: [
            `Several signals reliably indicate that you should be leading in a specific situation, even when you don't have formal authority and even when others might be expected to lead.`,
            `Signal 1: vacuum. No one is stepping up. The situation requires action. Whoever was supposed to lead isn't, for whatever reason. The vacuum will get filled by someone or by nothing happening; if nothing happening is bad, someone needs to fill the vacuum. When you see a vacuum and you're capable of filling it, the right move is usually to step up, even when it's not your formal role.`,
            `Signal 2: specific expertise. You have specific knowledge or skill that's directly relevant to what the situation requires. Even if someone else has formal authority, leading on the specific question where your expertise is dispositive often produces better outcomes than deferring. The leadership doesn't have to be domineering; it can be "here's what I know about this specifically — what do you think?"`,
            `Signal 3: stakes you can address. The situation involves real consequences and you're positioned to do something about them. You see a problem developing that others may not have noticed. You see a path forward that others may not have considered. Stepping up because you see something that needs doing is different from inserting yourself unnecessarily; the test is whether your action addresses real stakes.`,
            `Signal 4: position someone has to take. Sometimes situations require someone to make a call when consensus isn't going to emerge. If you have enough information to make the call and someone has to make it, taking responsibility for the decision is leadership. The decision might be wrong; taking responsibility for it lets the group move forward instead of staying stuck.`,
            `Signal 5: protecting people who can't protect themselves. Younger kids, newer members, people being unfairly treated. Even if you don't have formal authority, your presence and willingness to act provides protection that wouldn't exist otherwise. This signal often combines with vacuum (no formal authority is intervening) and stakes (real harm is happening).`,
            `Important caveat. These signals indicate that leadership is appropriate; they don't dictate HOW to lead. Even when these signals are clear, good leadership involves invitation, consultation, and proposal more than pure direction. Leading without authority (covered in L16) is the relevant framework: relationships, modeling, proposal pairing, building coalition. The signals say "lead here"; the L16 framework says "lead like this."`,
          ],
          image: `/voyager-assets/social-leadership/l19-s2-lead.webp`,
          imageCaption: `Five signals to lead: vacuum, specific expertise, stakes you can address, position requiring a call, protecting vulnerable people.`,
          vocab: [
            {
              word: `leadership vacuum`,
              definition: `Situation where no one is stepping up to provide direction or action that's needed, regardless of who was nominally supposed to. The vacuum gets filled by someone or by nothing happening; if nothing happening is bad, someone needs to fill it. Signal that leadership is appropriate even without formal authority. The capability to recognize and respond to vacuums distinguishes people who step up effectively from people who wait for permission that won't come.`,
              audioPrompt: `A leadership vacuum is a situation where no one is stepping up to provide direction or action that's needed, regardless of who was nominally supposed to, {name}. Whoever was supposed to lead isn't, for whatever reason. The team lead didn't show up. The teacher is absent and there's no substitute structure. The committee chair is failing to call meetings. The parent is overwhelmed and not coordinating something that needs coordinating. The vacuum gets filled by someone or by nothing happening. If nothing happening is bad, someone needs to fill the vacuum. Recognizing vacuums is the first part of the skill; willingness to fill them when you're capable is the second. When you see a vacuum and you're capable of filling it, the right move is usually to step up, even when it's not your formal role. The capability to recognize and respond to vacuums distinguishes people who step up effectively from people who wait for permission that won't come. For 12-year-olds, vacuums show up frequently: in groups without clear structure, in family situations where parents are distracted, in friend groups where coordination is needed and nobody's doing it.`,
            },
          ],
        },

        {
          id: `l19-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `When To Follow: Specific Signals`,
          paragraphs: [
            `Several signals reliably indicate that you should be following in a specific situation, even when you might want to lead and even when you have capable leadership skills.`,
            `Signal 1: someone with better expertise has the role. If someone with deeper knowledge or skill in the relevant domain has been designated to lead, following their lead usually produces better outcomes than challenging their direction. Your role becomes contributing through their leadership, not trying to substitute your judgment for theirs.`,
            `Signal 2: formal authority operating well. If formal authority exists and is operating reasonably (not abusively, not incompetently, not at cross-purposes with the situation), following it usually serves everyone better than undermining it. The institutional layer matters; following authorities operating well preserves the structure that produces good outcomes most of the time.`,
            `Signal 3: you're new to the context. New members of any team, organization, or community usually benefit from learning the existing patterns before trying to change them. Your fresh perspective may eventually contribute useful insights, but only after you've understood why things are done the way they are. New people who immediately try to lead often miss context they don't realize they're missing.`,
            `Signal 4: your role is execution. Some situations require coordinated execution where individual leadership initiative would actually undermine the coordination. Military units in operations, surgical teams during procedures, sports teams executing plays, orchestras performing pieces. In these contexts, doing your specific role well is leadership; trying to expand your role usually damages the whole.`,
            `Signal 5: someone else stepping up needs support. When someone else is stepping into leadership (especially when they're new at it), your support often serves better than competing for the same role. Effective followership of new leaders helps them develop while strengthening the team. Competing leadership claims often damage the new leader without producing better outcomes.`,
            `Important caveat. Following doesn't mean blind compliance (covered in L11). Effective followership includes raising concerns, asking questions, offering input, and refusing complicity in genuinely wrong actions. The signals say "follow here"; the L11 framework says "follow like this" — engaged critical followership rather than passive compliance.`,
          ],
          image: `/voyager-assets/social-leadership/l19-s3-follow.webp`,
          imageCaption: `Five signals to follow: someone with better expertise leads, formal authority operating well, you're new to context, execution role, supporting someone else stepping up.`,
          vocab: [
            {
              word: `following well (vs. blind compliance)`,
              definition: `Effective followership when situational signals indicate following is appropriate. Different from blind compliance: includes raising concerns through appropriate channels, asking questions, offering input, refusing complicity in genuinely wrong actions, supporting leader's success while maintaining your own judgment. The Chaleff framework (from L11) describes what this looks like. Following well is its own skill, distinct from leadership skill and from passive obedience.`,
              audioPrompt: `Following well, as distinct from blind compliance, is effective followership when situational signals indicate following is appropriate, {name}. Different from blind compliance in several specific ways. Includes raising concerns through appropriate channels when you see problems. Includes asking questions when you don't understand something or when you have different information. Includes offering input on decisions where your perspective could improve them. Includes refusing complicity in genuinely wrong actions even when the leader is directing them. Includes supporting the leader's success while maintaining your own judgment. The Chaleff framework from lesson 11 describes what this looks like specifically: courage to assume responsibility, courage to serve, courage to challenge, courage to participate in transformation, courage to take moral action. Following well is its own skill, distinct from leadership skill and from passive obedience. People who develop both leadership and followership skills explicitly are unusually effective compared to people who develop only one.`,
            },
          ],
        },

        {
          id: `l19-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `When To Shift: Dynamic Role Situations`,
          paragraphs: [
            `Some situations don't have a single right role; they require fluid shifting between leading and following based on what's happening moment-to-moment. These dynamic situations are common but get less attention than fixed-role situations because they're harder to describe.`,
            `Pattern 1: distributed expertise. In groups where different members have different specialized knowledge, leadership naturally shifts to whoever has the relevant expertise for the specific question at hand. The team analyzing the data follows the statistician on statistical questions. The team designing the user experience follows the designer on design questions. The team coordinating logistics follows the operations expert on logistics. Skilled members shift between leading on their domain and following on others' domains.`,
            `Pattern 2: peer collaboration. Among genuine peers (similar level, similar capability, no formal hierarchy), leadership often rotates based on energy, interest, and circumstance. One person initiates one project; another initiates the next. One person leads through a hard phase; another leads through a celebration. The peer relationship can hold when both members can move between leading and following without status concerns.`,
            `Pattern 3: evolving situations. Some situations change as they develop. Early phases may require one person's leadership (someone with initial vision); middle phases may require different leadership (someone with execution skill); late phases may require yet different leadership (someone with closing capability). The person who's right for one phase may not be right for another. Skilled groups recognize this and shift accordingly.`,
            `Pattern 4: contextual authority. Some situations involve overlapping authorities where different people lead different aspects simultaneously. Family vacation: parents lead on budget and timing, kids might lead on activity suggestions, whoever knows the destination best leads on geography. School project: assigned leader on overall coordination, member with subject expertise on content questions, member with design skill on presentation. Multiple leaderships operating in parallel rather than sequentially.`,
            `Pattern 5: learning situations. Some situations are explicitly about developing leadership in others. A coach or mentor might lead initially, gradually transferring leadership to the person they're developing. Each phase involves more leadership from the learner and less from the mentor. The shift is intentional; both parties know it's happening.`,
            `What makes dynamic situations harder. They require ongoing situational reading rather than a single decision. You can't decide once whether to lead or follow; you have to keep adjusting as situations evolve. This requires comfort with role ambiguity and willingness to give up the role you currently hold when conditions change. Many people find this uncomfortable; they prefer fixed roles. The skill of comfortable role-switching is distinct from either leadership or followership skill.`,
          ],
          image: `/voyager-assets/social-leadership/l19-s4-shift.webp`,
          imageCaption: `Five dynamic patterns: distributed expertise, peer collaboration, evolving situations, contextual authority, learning situations.`,
          vocab: [
            {
              word: `comfortable role-switching`,
              definition: `Skill of moving between leading and following based on situational requirements without status concerns or identity attachment to either role. Distinct from leadership skill and followership skill though related. Requires ongoing situational reading rather than single decisions. Many people prefer fixed roles; the skill of comfortable role-switching is distinct from either pure leadership or pure followership capability.`,
              audioPrompt: `Comfortable role-switching is the skill of moving between leading and following based on situational requirements without status concerns or identity attachment to either role, {name}. Distinct from leadership skill and followership skill though related to both. Requires ongoing situational reading rather than single decisions. You can't decide once whether to lead or follow; you have to keep adjusting as situations evolve. This requires comfort with role ambiguity and willingness to give up the role you currently hold when conditions change. Many people find this uncomfortable. They prefer fixed roles because fixed roles give clear identity (I'm the leader, I'm the follower) and clear expectations. Comfortable role-switching means letting go of that clarity in service of better situational fit. The skill is distinct from either pure leadership capability or pure followership capability. People who can lead well and follow well still might struggle with switching between them in the same situation. Developing this skill at 12 puts you ahead of most working adults who default to one role even when situations call for the other.`,
            },
          ],
        },

        {
          id: `l19-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Before You Sort The Scenarios`,
          paragraphs: [
            `In the investigation game that follows, you'll sort nine scenarios into the three categories. Each scenario shows the situation; your job is to identify which role is right.`,
            `One framing as you work through the scenarios. Pay attention to the specific signals discussed in sections 2, 3, and 4. Is there a vacuum that requires stepping up? Is someone with better expertise already in the role? Is this a dynamic situation where shifting is the actual answer? The signals are usually present in the situation if you look for them.`,
            `Another framing. The skill is reading the specific situation rather than applying a general rule. The same person might lead in one situation and follow in another within the same hour. The same kind of situation (school project) might require different roles depending on specifics (who else is in the team, what their expertise is, what's already been done).`,
            `One last framing. This skill compounds across decades of varied situations. Most adults default to one role and force situations into it. The unusually effective adults read situations accurately and adapt. Building explicit skill at 12 means you're developing the literacy that distinguishes people who lead well throughout their lives from people who try to lead everything or follow everything.`,
          ],
          image: `/voyager-assets/social-leadership/l19-s5-before.webp`,
          imageCaption: `Sort 9 scenarios. Read specific signals. Build the literacy that compounds across thousands of situations.`,
          vocab: [
            {
              word: `reading specific signals (vs. applying general rules)`,
              definition: `Approach to situational judgment that focuses on the specific signals present in each situation rather than applying a single general rule or default. People who read signals accurately adapt to what each situation actually requires. People who apply general rules force situations into their preferred framework. The first approach produces dramatically better outcomes across varied situations over time.`,
              audioPrompt: `Reading specific signals versus applying general rules is the central distinction in situational judgment, {name}. Reading signals means focusing on what's actually present in the specific situation in front of you. Who has expertise here? Is formal authority operating well? Is there a vacuum needing to be filled? What's your specific position in this context? What's the cost of getting it wrong in either direction? Applying general rules means using your default approach regardless of specifics. "I'm a natural leader so I always lead." "I respect authority so I always follow." "I'm a team player so I always defer." The default-application approach produces predictable failures in situations where the default is wrong. The signal-reading approach produces accurate adaptation to what each situation actually requires. Skilled situational readers consider specifics quickly and reach reasonable conclusions; unskilled readers default. Developing the signal-reading skill at 12 puts you ahead of most working adults who never develop it explicitly.`,
            },
          ],
        },

        // ───── INVESTIGATION GAME ─────────────────────────────────────────────
        {
          id: `l19-investigation-game`,
          type: `investigation`,
          headline: `Sort The Scenarios`,
          intro: `Nine scenarios. Three categories. Drag each scenario into the role that's right for the situation. The signals are present if you look for them.`,
          buckets: [
            {
              id: `lead`,
              label: `Lead This Situation`,
              description: `Signals indicate stepping up: vacuum, specific expertise, stakes you can address, position requires a call, protecting vulnerable`,
            },
            {
              id: `follow`,
              label: `Follow Here`,
              description: `Signals indicate following: someone with expertise leads, formal authority operating well, new to context, execution role, supporting someone stepping up`,
            },
            {
              id: `shift`,
              label: `Shift Between Roles`,
              description: `Dynamic situation requiring fluid role-switching: distributed expertise, peer collaboration, evolving phases, overlapping authorities, learning situations`,
            },
          ],
          items: [
            {
              id: `item-1`,
              label: `Your school project team's assigned leader hasn't shown up for the last two meetings and isn't responding to messages. The deadline is in three days. Three teammates are looking at you because you're the one who's been keeping notes. The work isn't done.`,
              correctBucket: `lead`,
              explanation: `Clear leadership vacuum. The assigned leader isn't operating; the work needs to happen; you have demonstrated capability (keeping notes); teammates are looking at you. The signals all point to stepping up. The leadership doesn't have to be domineering: "I think we need to get organized fast — what if we divide up what's left and check back in 24 hours?" addresses the vacuum without making it about you. The signal "vacuum + capability + others looking" is one of the clearest indicators that you should step up regardless of formal role.`,
            },
            {
              id: `item-2`,
              label: `You just joined a new club at school. The other members have been doing this for two or three years. They have systems, traditions, and ways of doing things that work for them. You have opinions about how things could be better, but you've only been there a week.`,
              correctBucket: `follow`,
              explanation: `Classic "new to context" signal. You may eventually contribute useful insights, but only after you've understood why things are done the way they are. New members who immediately try to lead often miss context they don't realize they're missing. Better: spend the first few weeks or months learning the systems, building relationships, asking questions to understand. Your fresh perspective will be more valuable later when it's grounded in understanding what already works and why. Following here doesn't mean being silent; it means learning before suggesting.`,
            },
            {
              id: `item-3`,
              label: `You're walking home and you see a younger kid being teased by some older kids. They're not physically harming the younger kid but they're making him cry. No adult is around. You're 12; the younger kid looks about 7. You don't know any of them.`,
              correctBucket: `lead`,
              explanation: `Protecting vulnerable people signal. Even though you have no formal authority, your presence and willingness to act provides protection that wouldn't exist otherwise. Lead in this situation: walk over, say something to the younger kid ("Hey, are you doing okay? Want to walk with me?"), let the older kids see that someone's watching. You don't need to confront them aggressively; just being there as an older kid who notices changes the dynamic. If they escalate, leave with the younger kid and tell an adult. The signal combines vacuum (no formal authority is intervening), stakes (real harm happening), and protection (someone needs to act).`,
            },
            {
              id: `item-4`,
              label: `Your robotics team is preparing for a competition. The team captain, Anika, has been doing competitive robotics for four years. She has a specific competition strategy based on what she's learned from past events. You think there might be a different approach, but you're in your first year and you've never been to a competition.`,
              correctBucket: `follow`,
              explanation: `Better expertise + new to context. Anika has four years of specific competition experience; you have zero. Even if your idea is interesting in theory, the chance that she's missing something obvious that you noticed in your first year is low. Better to follow her strategy this competition, observe carefully, and contribute your perspective AFTER you've experienced what she's seen. The "engaged critical followership" framing from L11 still applies: you can ask questions, offer input, raise concerns. But the primary role is following her lead, learning from her experience, and building your own competition knowledge before challenging her strategic direction.`,
            },
            {
              id: `item-5`,
              label: `Your family is planning a road trip. Your parents are handling the logistics (route, hotels, budget). Your sister wants to suggest specific activities. You've actually been to one of the destinations before with your grandparents and know specific places that would be cool. Different family members know different things.`,
              correctBucket: `shift`,
              explanation: `Contextual authority pattern: distributed expertise, overlapping authorities. Parents lead on budget and timing because that's their domain. Your sister leads on suggesting activities she's excited about. You lead on the destination you've been to because you have specific knowledge nobody else has. Nobody is "the leader" of the whole trip; leadership shifts to whoever has the relevant expertise for the specific question. The skill is recognizing when it's your turn to contribute leadership ("oh, I've been to that town — there's this cool ice cream place") and when it's someone else's turn (your sister gets to share her ideas, parents make budget calls). Multiple leaderships operating in parallel.`,
            },
            {
              id: `item-6`,
              label: `Your school's principal calls a school assembly. There's a serious situation that requires the whole school to respond as a group: a safety drill, a coordinated response to something happening in the community. The principal is giving directions about what everyone should do.`,
              correctBucket: `follow`,
              explanation: `Formal authority operating well + execution role. The principal has legitimate authority; the situation requires coordinated execution; individual initiative would undermine the coordination needed for safety. Your role is doing your specific part of the response well, not trying to lead it. Even if you have ideas about whether the response could be designed differently, the moment of execution isn't when to raise them. After the situation is resolved, you might appropriately raise feedback or questions. During execution, following the coordinated direction IS leadership in the specific sense of doing what's needed for the group to succeed.`,
            },
            {
              id: `item-7`,
              label: `You're in a study group with three friends preparing for the same test. Each of you has different strengths: Maya is best at math, you're best at writing essays, Ben is best at memorizing facts, Sarah is best at organizing the material. You're trying to figure out how to use your time together.`,
              correctBucket: `shift`,
              explanation: `Distributed expertise + peer collaboration. Different people lead on different topics based on their specific strengths. Maya leads when you're working on math problems; you lead when you're working on essay structure; Ben leads when you're memorizing facts; Sarah leads when you're organizing the overall approach. Nobody is "the study group leader"; leadership shifts naturally based on what you're currently working on. The skill is recognizing when to lead (you're working on your strength), when to follow (someone else's strength is needed), and how to keep shifting. Peer relationships hold when both members can move between roles without status concerns.`,
            },
            {
              id: `item-8`,
              label: `Your soccer team's normal goalkeeper, Sam, just sprained his ankle ten minutes into the game. The coach is looking around the bench. You played goalkeeper for one season three years ago. Nobody else on the bench has played that position. The team needs a goalkeeper now.`,
              correctBucket: `lead`,
              explanation: `Vacuum + specific (relative) expertise + stakes you can address. Nobody on the bench is more qualified than you for this specific role; the team needs someone to step up; the stakes are real (the game). Even though your goalkeeper experience is limited and distant, you're the best option available. Step up: "Coach, I played goalkeeper a few years ago — I can try." The leadership here is taking responsibility for a role nobody else can take in the moment. You might do poorly; the alternative (refusing to step up) is worse for the team. The signal combines several factors: vacuum, relative expertise, and stakes that require someone to fill the role even imperfectly.`,
            },
            {
              id: `item-9`,
              label: `You're learning a new instrument. Your teacher has been working with you for six months. Right now, she leads almost everything in your lessons — what you'll work on, how you'll approach it, what to practice. But she's mentioned that as you develop, she'll expect you to start taking more initiative in choosing what you want to focus on. You're at the early stages of that transition.`,
              correctBucket: `shift`,
              explanation: `Learning situation pattern. The teacher is explicitly developing your capability through deliberate transfer of leadership. Right now you follow most of her direction because you don't have the foundation to lead well. Over time, you'll lead more (choosing pieces, setting goals, identifying what you want to develop) and she'll lead less (offering feedback on choices you're making rather than dictating them). The shift is intentional and gradual; both of you know it's happening. The skill is recognizing where you are in the transition and acting accordingly: more follow in early stages, more lead in later stages, with ongoing adjustment based on your development. Many learning relationships involve this kind of deliberate role transfer.`,
            },
          ],
          reflectionPrompt: `Look across your sortings. Which signals were easiest to read? Which were hardest? Which scenarios mirror situations you're currently in?`,
        },

        {
          id: `l19-quiz`,
          type: `quiz`,
          headline: `Check your understanding`,
          questions: [
            {
              id: `q1`,
              type: `multiple-choice`,
              question: `What is "situational judgment" in leadership/followership?`,
              options: [
                `Random skill`,
                `Meta-skill of reading specific situations to determine whether to lead, follow, or shift between roles; considers factors like who has expertise, who has formal authority, what situation requires, your specific position, consequences of getting role wrong; distinguishes people who adapt from people who default to general tendency`,
                `Quick decisions`,
                `Random judgment`,
              ],
              correctIndex: 1,
              explanation: `People who default to leading even when they shouldn't, and people who default to following even when they shouldn't, both produce worse outcomes than accurate situational reading. The meta-skill determines which other leadership and followership skills you use in each specific situation.`,
            },
            {
              id: `q2`,
              type: `multiple-choice`,
              question: `What is a "leadership vacuum"?`,
              options: [
                `Empty room`,
                `Situation where no one is stepping up to provide direction or action that's needed, regardless of who was nominally supposed to; the vacuum gets filled by someone or by nothing happening; if nothing happening is bad, someone needs to fill it; signal that leadership is appropriate even without formal authority`,
                `Power vacuum`,
                `Random concept`,
              ],
              correctIndex: 1,
              explanation: `Recognizing vacuums is the first part of the skill; willingness to fill them when you're capable is the second. Distinguishes people who step up effectively from people who wait for permission that won't come.`,
            },
            {
              id: `q3`,
              type: `multiple-choice`,
              question: `What are the five signals to lead?`,
              options: [
                `Random list`,
                `Vacuum (no one stepping up); specific expertise (you have relevant knowledge or skill); stakes you can address (real consequences and you're positioned to help); position requires a call (someone has to make decision when consensus won't emerge); protecting vulnerable people (younger, newer, unfairly treated)`,
                `Just be assertive`,
                `Random signals`,
              ],
              correctIndex: 1,
              explanation: `These signals indicate leadership is appropriate; they don't dictate HOW to lead. Even when signals are clear, good leadership involves invitation, consultation, proposal (from L16 leading-without-authority framework) more than pure direction.`,
            },
            {
              id: `q4`,
              type: `multiple-choice`,
              question: `What are the five signals to follow?`,
              options: [
                `Be passive`,
                `Someone with better expertise has the role; formal authority operating well; you're new to context; your role is execution; someone else stepping up needs support; in each case, your contribution comes through following well rather than competing for leadership`,
                `Random signals`,
                `Just defer`,
              ],
              correctIndex: 1,
              explanation: `Following doesn't mean blind compliance. Effective followership (from L11 Chaleff framework) includes raising concerns, asking questions, offering input, and refusing complicity in genuinely wrong actions. The signals say "follow here"; L11 says "follow like this."`,
            },
            {
              id: `q5`,
              type: `multiple-choice`,
              question: `What are the five dynamic patterns requiring role-shifting?`,
              options: [
                `Random patterns`,
                `Distributed expertise (different members lead in their domains); peer collaboration (leadership rotates among genuine peers); evolving situations (different phases need different leadership); contextual authority (overlapping authorities operating in parallel); learning situations (deliberate gradual transfer of leadership)`,
                `Confusing roles`,
                `Random list`,
              ],
              correctIndex: 1,
              explanation: `These situations don't have a single right role; they require fluid shifting between leading and following based on what's happening moment-to-moment. Many people prefer fixed roles; the skill of comfortable role-switching is distinct from either pure leadership or pure followership capability.`,
            },
            {
              id: `q6`,
              type: `multiple-choice`,
              question: `What is "comfortable role-switching"?`,
              options: [
                `Random skill`,
                `Skill of moving between leading and following based on situational requirements without status concerns or identity attachment to either role; requires ongoing situational reading rather than single decisions; comfort with role ambiguity; willingness to give up the role you currently hold when conditions change; distinct from leadership or followership skills though related`,
                `Job hopping`,
                `Random concept`,
              ],
              correctIndex: 1,
              explanation: `Many people prefer fixed roles because they give clear identity and expectations. Comfortable role-switching means letting go of that clarity in service of better situational fit. People who can lead well and follow well still might struggle with switching between them. Developing this at 12 puts you ahead of most working adults.`,
            },
            {
              id: `q7`,
              type: `multiple-choice`,
              question: `What's "following well" versus "blind compliance"?`,
              options: [
                `Same thing`,
                `Following well: includes raising concerns through appropriate channels, asking questions, offering input, refusing complicity in wrong actions, supporting leader's success while maintaining own judgment; from Chaleff framework (L11); blind compliance: doing what authority directs without independent judgment; following well is distinct skill from leadership and from passive obedience`,
                `Just listening`,
                `Random distinction`,
              ],
              correctIndex: 1,
              explanation: `Chaleff's five dimensions describe what following well looks like specifically: courage to assume responsibility, courage to serve, courage to challenge, courage to participate in transformation, courage to take moral action. People who develop both leadership and followership skills are unusually effective.`,
            },
            {
              id: `q8`,
              type: `multiple-choice`,
              question: `What's the distinction between "reading specific signals" and "applying general rules"?`,
              options: [
                `Same thing`,
                `Reading signals: focusing on what's actually present in the specific situation (who has expertise, is authority operating well, is there vacuum, your specific position, cost of getting wrong); applying general rules: using your default approach regardless of specifics ("I'm a natural leader so I always lead"); first produces accurate adaptation, second produces predictable failures`,
                `Different methods`,
                `Random distinction`,
              ],
              correctIndex: 1,
              explanation: `Skilled situational readers consider specifics quickly and reach reasonable conclusions; unskilled readers default. Developing the signal-reading skill at 12 puts you ahead of most working adults who never develop it explicitly.`,
            },
            {
              id: `q9`,
              type: `true-false`,
              question: `True or false: The most important leadership skill is leading well at all times.`,
              correctAnswer: false,
              explanation: `False. The most important leadership skill isn't always leading; it's knowing when to lead, when to follow, and when to shift between the two based on what the situation actually requires. People who try to lead everything fail at most of it. People who can read situations accurately and adapt outperform both.`,
            },
            {
              id: `q10`,
              type: `inference`,
              question: `Your friend says "I want to be a leader so I always try to take charge in every group I'm in." Based on this lesson, what should you point out?`,
              options: [
                `"Great approach"`,
                `"That approach probably produces worse outcomes than you think. People who try to lead in every situation fail at most of them because most situations don't actually call for them to lead. Better signals: lead when there's a vacuum (nobody else is stepping up), when you have specific expertise that's relevant, when stakes are real and you can address them, when a call has to be made, or when you're protecting vulnerable people. Follow when someone else has better expertise, when formal authority is operating well, when you're new to the context, when your role is execution, when someone else needs support stepping up. And shift between roles in dynamic situations with distributed expertise or peer collaboration. The unusually effective people in groups read each situation specifically and adapt. The people who try to lead everything are often the ones nobody listens to anymore because they've burned credibility by leading badly in too many situations where they shouldn't have. Read signals, don't apply defaults."`,
                `"Be assertive"`,
                `"Lead more"`,
              ],
              correctIndex: 1,
              explanation: `Real applied situational judgment. Don't dismiss the friend's leadership ambition; redirect from the failure mode (always lead) to the actual skill (read situations and adapt). This is the kind of advice that produces real leadership development over time rather than burned credibility.`,
            },
          ],
        },

        {
          id: `l19-reflection`,
          type: `reflection`,
          headline: `Sit with this`,
          intro: `Pick the prompt that pulls at you most. Your answer is saved.`,
          prompts: [
            { id: `reflect-cognitive`, category: `Cognitive`, prompt: `Before this lesson, did you have explicit framework for when to lead vs follow? Has anything shifted?` },
            { id: `reflect-meta`, category: `Metacognitive`, prompt: `Honestly: do you default to leading too much or following too much? What does the honest answer suggest?` },
            { id: `reflect-identity`, category: `Identity`, prompt: `If you become someone who reads situations accurately and adapts role over thousands of situations across a lifetime, what does that change about your effectiveness?` },
            { id: `reflect-application`, category: `Application`, prompt: `Pick three current situations in your life (group project, sports team, family role). Apply the signals to each. What role is right for each?` },
            { id: `reflect-critical`, category: `Critical`, prompt: `Are there situations the framework doesn't capture well? What about situations of moral compromise? Cult-like groups? Abusive authority?` },
            { id: `reflect-personal`, category: `Personal investigation`, prompt: `Watch someone you know who reads situations well. What specifically do they do that allows them to adapt?` },
          ],
        },

        {
          id: `l19-real-world`,
          type: `real-world`,
          headline: `Take it into your life`,
          guideContext: `Situational judgment is the meta-skill that determines which other skills you use when. Two paths.`,
          familyActivity: {
            title: `The Family Role-Reading Conversation`,
            duration: `45 minutes`,
            description: `Share the framework. Then take three situations the family has been in recently and ask: who led, who followed, who shifted? Was it the right configuration for what the situation required? Most families operate with implicit role patterns without examining whether they're optimal. The conversation often surfaces situations where someone led who shouldn't have, or didn't lead when they should have, and produces useful learning.`,
          },
          projectOption: {
            title: `Apply the framework over four weeks (optional)`,
            duration: `4 weeks, 15 minutes daily reflection`,
            description: `For four weeks, end each day with a five-minute reflection: name one situation today where you led, one where you followed, and one where you shifted. Were those the right roles for each situation? What signals did you use to decide? Write a brief journal entry. After four weeks, write 1,500 words synthesizing what you learned about your own role-reading patterns. The reflection produces durable situational judgment skill.`,
            offerToParent: `Parent: opt your kid into this project. Four weeks of deliberate situation-reading produces capability most adults never develop.`,
          },
          identityQuestion: `If you become someone who reads situations accurately and adapts your role across thousands of varied situations over decades, what does that change about your effectiveness compared to people who default to one role?`,
        },

        {
          id: `l19-identity-hook`,
          type: `identity-hook`,
          headline: `Who is this lesson making you?`,
          prompt: `One sentence. No wrong answer.`,
          placeholder: `Someone who...`,
          examples: [
            `Someone who reads specific signals rather than applying a single default role.`,
            `A person comfortable shifting between leading and following based on what's needed.`,
            `Someone who steps up when there's a vacuum and supports well when someone else is leading.`,
          ],
          saveKey: `identity_responses_sl_11_12_19`,
        },

        {
          id: `l19-celebration`,
          type: `celebration`,
          guideText: `{name}. Nineteenth Social Leadership lesson done. You now have the meta-skill of situational judgment: five signals to lead (vacuum, expertise, stakes, position requiring call, protecting vulnerable), five signals to follow (someone with expertise leads, authority operating well, new to context, execution role, supporting someone stepping up), five dynamic patterns requiring shifting (distributed expertise, peer collaboration, evolving phases, contextual authority, learning situations). One lesson left: the CAPSTONE. You'll synthesize everything you've built across this band into your working philosophy of leadership. Argument Builder format. 100 XP. 45 minutes. Let's finish this. — Valor`,
          badge: `situational-judgment`,
          badgeName: `Situational Judgment`,
          xpEarned: 75,
          competencies: [
            `Articulates situational judgment as meta-skill that determines other skill use`,
            `Knows five signals indicating leadership is appropriate (vacuum, expertise, stakes, position, protection)`,
            `Knows five signals indicating following is appropriate (expertise leads, authority operating, new, execution, support)`,
            `Recognizes five dynamic patterns requiring role-shifting`,
            `Distinguishes reading specific signals from applying general default rules`,
          ],
          nextLessonPreview: {
            title: `Lesson 20 CAPSTONE: Your Leadership Practice`,
            hook: `Synthesize everything. Commit to your working philosophy. 100 XP, 45 minutes.`,
          },
        },
      ],
    },
  ],
};

export default SOCIALLEADERSHIP_VOYAGER_L19;

if (import.meta.env?.DEV) {
  const l = SOCIALLEADERSHIP_VOYAGER_L19.lessons[0];
  const mags = l.screens.filter((s) => s.type === `magazine`).length;
  const investigation = l.screens.find((s) => s.type === `investigation`);
  const quiz = l.screens.find((s) => s.type === `quiz`)?.questions?.length ?? 0;
  const reflect = l.screens.find((s) => s.type === `reflection`)?.prompts?.length ?? 0;
  console.log(
    `[LESSON-SL-VOYAGER-L19 ${VERSION}] "${l.title}" — ${mags} magazine, investigation w/ ${investigation?.items?.length ?? 0} items, ${quiz} quiz, ${reflect} reflection`
  );
}
