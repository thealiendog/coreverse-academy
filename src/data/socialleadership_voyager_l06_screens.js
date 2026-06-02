// ─────────────────────────────────────────────────────────────────────────────
// SOCIAL LEADERSHIP VOYAGER  |  L06 — Navigating Conflict
// Age band : voyagers (11-12)   Guide: valor (Lion)
// Standards: Coreverse Original — Conflict Resolution, Applied Leadership
// CALIBRATED: Voyager spec v1.1 (May 2026)
// Interaction format: CASE STUDY (three conflict types: friend conflict / authority conflict / group conflict)
// ─────────────────────────────────────────────────────────────────────────────

const VERSION = "voyager-sl-l06-v1";

const SOCIALLEADERSHIP_VOYAGER_L06 = {
  ageBand: `voyagers`,
  subjectId: `social-leadership`,
  guide: `valor`,

  lessons: [
    {
      id: `sl-11-12-06`,
      title: `Navigating Conflict`,
      duration: 35,
      xpReward: 75,
      badge: `conflict-navigator`,
      badgeName: `Conflict Navigator`,

      screens: [
        {
          id: `l06-welcome`,
          type: `welcome`,
          guideText: `{name}, conflict is unavoidable in any leadership situation. The question isn't whether you'll face it; it's whether you'll navigate it skillfully or badly. Real conflict research has identified specific patterns: most people use only one or two of the available conflict approaches and miss the others entirely. The skill is having multiple approaches available and matching them to specific situations. Today we work through three different conflict types you'll face: between friends pulling you to take sides, with an authority figure (teacher, coach, parent) you think is wrong, and within a group you're part of. Each case shows what conflict navigation looks like done well vs done badly. By the end you'll have a working framework for any conflict situation across your lifetime.`,
          headline: `Navigating Conflict`,
          subtitle: `Conflict is unavoidable. The skill is having multiple approaches and matching them to situations.`,
          visual: `/voyager-assets/social-leadership/l06-welcome.webp`,
        },

        {
          id: `l06-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `The Five Conflict Modes (Thomas-Kilmann)`,
          paragraphs: [
            `Kenneth Thomas and Ralph Kilmann developed the Thomas-Kilmann Conflict Mode Instrument (TKI) in the 1970s. It identifies five distinct conflict modes based on two dimensions: assertiveness (how much you advocate for your own concerns) and cooperativeness (how much you accommodate the other's concerns). The framework has been widely used and replicated for nearly 50 years. Knowing the five modes lets you have multiple approaches available rather than defaulting to one.`,
            `Competing (high assertive, low cooperative). You pursue your own concerns at the other's expense. "I win, you lose." Useful when the issue is genuinely important to you, when quick decisive action is needed, when you're confident you're right on substantive grounds. Limit: damages relationships if overused; doesn't work when both sides need to come to durable agreement.`,
            `Accommodating (low assertive, high cooperative). You sacrifice your own concerns to satisfy the other's. "You win, I lose." Useful when the issue matters more to them than to you, when preserving the relationship matters more than the specific outcome, when you realize you're wrong. Limit: produces resentment if overused; doesn't develop your own concerns over time; can be exploited.`,
            `Avoiding (low assertive, low cooperative). You sidestep the conflict, postpone it, or withdraw. "We both lose." Useful when the issue isn't important, when you need time to gather information, when emotions are too high for productive engagement, when the cost of confrontation exceeds the benefit. Limit: unaddressed conflicts often grow; chronic avoidance damages relationships and your own development.`,
            `Compromising (medium assertive, medium cooperative). Both sides give up some of what they want to reach a workable solution. "We both partially win, partially lose." Useful when complete satisfaction isn't possible, when time pressure requires resolution, when temporary solution is needed before deeper engagement. Limit: can become default that misses better solutions; doesn't address underlying issues.`,
            `Collaborating (high assertive, high cooperative). Both sides work together to find a solution that fully satisfies both. "We both win." Useful for important issues where both parties' concerns matter, for relationships that will continue, when there's enough time and trust. Limit: requires significant time and trust; not always possible; can be overused for trivial issues.`,
            `The framework's core insight: most people default to one or two modes (often competing or avoiding) without realizing other modes exist. Mature conflict navigation involves recognizing which mode you're defaulting to, considering whether it fits the situation, and being able to shift to a different mode when needed.`,
          ],
          image: `/voyager-assets/social-leadership/l06-s1-modes.webp`,
          imageCaption: `Thomas-Kilmann's five conflict modes: competing, accommodating, avoiding, compromising, collaborating. Most people default to one or two.`,
          vocab: [
            {
              word: `conflict modes (Thomas-Kilmann)`,
              definition: `Framework developed by Kenneth Thomas and Ralph Kilmann in the 1970s identifying five distinct conflict modes based on assertiveness and cooperativeness: competing, accommodating, avoiding, compromising, collaborating. Foundational conflict resolution framework. Most people default to one or two modes; mature navigation involves having multiple modes available and matching them to situations.`,
              audioPrompt: `Conflict modes is a framework developed by Kenneth Thomas and Ralph Kilmann in the 1970s, {name}. Identifies five distinct conflict modes based on two dimensions: assertiveness (how much you advocate for your own concerns) and cooperativeness (how much you accommodate the other's concerns). The five modes are competing, accommodating, avoiding, compromising, and collaborating. Each has its uses and its limits; none is universally right. Foundational conflict resolution framework that's been widely used and replicated for nearly 50 years. Most people default to one or two modes (often competing or avoiding) without realizing other modes exist. Mature conflict navigation involves recognizing which mode you're defaulting to, considering whether it fits the situation, and being able to shift to a different mode when needed. The framework gives you vocabulary and options that most adults operate without explicitly.`,
            },
          ],
        },

        {
          id: `l06-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Getting To Yes And Tactical Empathy`,
          paragraphs: [
            `Beyond the five conflict modes, two influential frameworks help with the collaborative and difficult-conversation cases. Both are widely used in negotiation, mediation, and leadership.`,
            `Roger Fisher and William Ury's "Getting to Yes" (1981), based on the Harvard Negotiation Project, distinguished "positions" (what people say they want) from "interests" (what they actually need). Most conflict negotiation gets stuck on positions because people defend stated positions even when they could meet their actual interests through different solutions. The framework's core move: focus on interests, not positions. Ask what people actually need underneath what they're saying they want. Often you can find solutions that meet both sides' real interests even when their stated positions seem incompatible.`,
            `The classic example: two children fight over an orange. Their positions are "I want the orange" vs "I want the orange." A compromising solution cuts it in half. But asking about interests reveals one child wanted the orange to make juice and the other wanted the peel to bake with. Both could have gotten what they actually needed if anyone had thought to ask. Real conflict often has this structure: positions seem incompatible while interests aren't.`,
            `Fisher and Ury also emphasize separating people from problems, generating multiple options before deciding, and using objective criteria when possible. The framework has been applied in international diplomacy, business negotiation, family mediation, and many other contexts with measurable effects. It's one of the most-cited works in negotiation literature.`,
            `Chris Voss's "Never Split the Difference" (2016) takes a different angle. Voss, a former FBI hostage negotiator, argues compromise often produces worse outcomes than fully understanding the other side. His core techniques: tactical empathy (labeling the emotion you observe — see L04), calibrated questions (open questions starting with "how" or "what" that lead the other person to think), mirroring (repeating back the last few words of what someone said to invite elaboration), and accusation audits (preemptively naming the negative things the other side might be thinking).`,
            `Voss's framework is most useful in adversarial conflicts where the other side isn't acting in good faith or isn't open to collaborative negotiation. The Fisher-Ury framework works better when both sides are willing to engage genuinely. Knowing both lets you adapt to the actual conflict you face rather than applying one approach universally.`,
          ],
          image: `/voyager-assets/social-leadership/l06-s2-frameworks.webp`,
          imageCaption: `Getting to Yes (1981): interests vs positions. Never Split the Difference (2016): tactical empathy, calibrated questions, mirroring.`,
          vocab: [
            {
              word: `positions vs interests (Fisher and Ury)`,
              definition: `Distinction from "Getting to Yes" (1981, Harvard Negotiation Project). Position: what people say they want. Interest: what they actually need underneath. Most conflict gets stuck on positions; finding solutions usually requires understanding interests. The classic example: two children fighting over an orange — both positions are "I want the orange" but interests might be juice vs peel.`,
              audioPrompt: `Positions versus interests is a distinction from Roger Fisher and William Ury's 1981 book "Getting to Yes," based on the Harvard Negotiation Project, {name}. Position is what people say they want. Interest is what they actually need underneath. Most conflict negotiation gets stuck on positions because people defend stated positions even when they could meet their actual interests through different solutions. The framework's core move: focus on interests, not positions. Ask what people actually need underneath what they're saying they want. Often you can find solutions that meet both sides' real interests even when their stated positions seem incompatible. The classic example: two children fight over an orange. Their positions are both "I want the orange." A compromise cuts it in half. But asking about interests might reveal one wanted juice and the other wanted peel for baking. Both could get what they need if anyone had asked. Real conflict often has this structure.`,
            },
          ],
        },

        {
          id: `l06-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `What Doesn't Work In Conflict`,
          paragraphs: [
            `Knowing what to do in conflict is helpful; knowing what to avoid is equally important. Several patterns consistently make conflicts worse and are worth recognizing because most people do them by default.`,
            `Pattern 1: making it personal. Attacking the person rather than addressing the issue almost always escalates conflict. "You're being stubborn" rather than "I see this differently." "You always do this" rather than "I noticed this happened." Personal attacks trigger defensive reactions that prevent any progress on the actual issue. Fisher and Ury's "separate the people from the problem" addresses this directly.`,
            `Pattern 2: assuming bad intent. When someone does something you don't like, the natural inference is often that they meant to. Usually they didn't; their behavior usually made sense to them given what they were trying to do. Assuming bad intent shapes how you engage in ways that often turn the assumption into a self-fulfilling prophecy. Hanlon's razor (don't attribute to malice what can be explained by other causes) is a useful default.`,
            `Pattern 3: trying to win the argument. Many conflicts have no "winner" available; the relationships continue and need to function regardless of who was right. Trying to win an argument often means trying to humiliate the other side, which damages the relationship and ensures the conflict resurfaces later. The right question is usually "how do we get past this?" not "how do I prove I was right?"`,
            `Pattern 4: bringing in old grievances. Adding past complaints to a current conflict expands its scope beyond what can be addressed in one conversation and often signals you're trying to win generally rather than address this specific issue. Conflicts get harder to resolve as they accumulate scope. Resist the urge to mention every related thing the other side has done; focus on the specific current issue.`,
            `Pattern 5: making demands without alternatives. "You need to stop doing X" without offering an alternative behavior leaves the other side with no path forward except complete capitulation. Productive conflict navigation usually involves "here's the problem AND here's what would work for me." The alternative makes the request actionable.`,
            `Pattern 6: refusing to acknowledge anything the other side has right. Most conflicts have legitimate elements on both sides. Refusing to acknowledge anything the other side has right makes you look unreasonable and prevents the conversation from moving forward. Acknowledging what they have right (without conceding what they have wrong) often opens space for them to acknowledge things on your side. This is sometimes called "yes, and" in improv but applies broadly to conflict.`,
            `Pattern 7: trying to resolve it in front of an audience. Conflicts almost always go worse in public than in private. Both sides face additional pressure not to lose face, which makes acknowledgment of any legitimacy in the other side's view much harder. Move conflicts to private conversations whenever possible. Group settings often require additional formal mediation to work well.`,
            `Recognizing these patterns in advance helps you avoid them and recognize when others are doing them to you. Most people use several of these patterns reflexively without realizing the cost.`,
          ],
          image: `/voyager-assets/social-leadership/l06-s3-doesnt-work.webp`,
          imageCaption: `What doesn't work: personal attacks, assuming bad intent, trying to win, bringing in old grievances, demands without alternatives, public conflicts.`,
          vocab: [
            {
              word: `Hanlon's razor`,
              definition: `Heuristic: don't attribute to malice what can be explained by other causes (incompetence, misunderstanding, different priorities, mistakes). Useful default in conflict because most behavior that frustrates us wasn't actually intended to harm us. Assuming malicious intent shapes how you engage in ways that often make the assumption self-fulfilling. The razor's stronger form: most apparent malice is actually misunderstanding.`,
              audioPrompt: `Hanlon's razor is a heuristic that says don't attribute to malice what can be explained by other causes, {name}. Incompetence, misunderstanding, different priorities, time pressure, ignorance, mistakes — many things can produce behavior that looks malicious from outside. Most of them are more common than actual malice. The razor is a useful default in conflict situations because most behavior that frustrates us wasn't actually intended to harm us. Other people are usually acting on their own goals and concerns, not specifically targeting us. Assuming malicious intent shapes how you engage in ways that often make the assumption self-fulfilling: you respond aggressively, the other person becomes defensive, the situation escalates, and now there's actual hostility where there wasn't before. The stronger form of Hanlon's razor: most apparent malice is actually misunderstanding. Starting from this assumption usually produces better outcomes even when wrong, because the recovery from "we misunderstood each other" is faster than recovery from "I assumed you were attacking me."`,
            },
          ],
        },

        {
          id: `l06-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `When You're In The Middle Of Other People's Conflict`,
          paragraphs: [
            `Sometimes you're not a primary party to a conflict but find yourself in the middle. A friend wants you to take their side against another friend. Two team members fight and the rest of the team has to navigate around it. Family members disagree and pull others into the dispute. These mediator-from-the-side situations have their own patterns worth knowing.`,
            `What works in the middle. First: don't take sides reflexively. Each side usually has some legitimate concerns and some misunderstandings. Taking one side reflexively closes off your ability to help. Stay genuinely open to both sides being partly right.`,
            `Second: refuse to be triangulated. "Triangulation" is when someone uses a third party (you) to communicate something to a fourth party rather than communicating directly. "Tell her I'm mad at her" or "Tell him he was wrong" puts you in the middle in ways that don't serve anyone. Redirect: "I think this is something you should talk to her about directly. Do you want help thinking about how to do that?"`,
            `Third: protect your own boundaries. Being asked to mediate or pick sides can cost you significant emotional energy and time. You're allowed to decline. "This is between you two; I care about both of you and I'd rather not be in the middle" is a legitimate position. Pushing yourself into the middle when neither side specifically wants you there usually creates problems.`,
            `Fourth: if you do mediate, do it explicitly and structurally. If both sides want help and you're willing to provide it, mediate properly: meet with each side separately first to understand their interests, look for areas of common ground, facilitate a structured conversation where each side speaks and is heard, don't pretend to neutrality you don't actually have, name your own perspective if relevant. Informal mediation is often worse than no mediation because it pretends to objectivity it lacks.`,
            `What doesn't work. Carrying messages between people. Promising to "fix" things between others. Taking sides based on friendship rather than understanding. Pretending to be neutral when you're not. Trying to be the hero who resolves their conflict. Most of these don't help and many actively make things worse.`,
            `One important pattern. Even when you're skilled at being in the middle, you have less power than people often expect. The actual resolution happens between the parties; your role is at most to create conditions where they can navigate. Many people in the middle exhaust themselves trying to fix things they can't fix because the real work has to happen between the people in the actual conflict.`,
          ],
          image: `/voyager-assets/social-leadership/l06-s4-middle.webp`,
          imageCaption: `In the middle: don't take sides reflexively, refuse triangulation, protect your boundaries, mediate explicitly if at all, accept your limits.`,
          vocab: [
            {
              word: `triangulation (in conflict)`,
              definition: `Pattern where someone uses a third party to communicate something to a fourth party rather than communicating directly. Common in friend groups, families, and workplaces. Examples: "Tell her I'm mad at her," "Make sure he knows what I think." Triangulation puts the middle person in an unfair position and prevents the direct communication that would actually resolve the issue. Healthy response: redirect toward direct communication.`,
              audioPrompt: `Triangulation in conflict is the pattern where someone uses a third party to communicate something to a fourth party rather than communicating directly, {name}. Common in friend groups, families, and workplaces. Examples include "Tell her I'm mad at her" or "Make sure he knows what I think" or "Can you let them know they were wrong?" Triangulation puts the middle person in an unfair position and prevents the direct communication that would actually resolve the issue. The person being triangulated through gets the emotional weight of the conflict without the agency to do anything productive about it. The healthy response: redirect toward direct communication. "I think this is something you should talk to her about directly. Do you want help thinking about how to do that?" This protects you from being triangulated AND helps the original conflict get addressed where it actually needs to be addressed. Many family and friend group dysfunctions involve chronic triangulation; learning to refuse it is a leadership skill.`,
            },
          ],
        },

        {
          id: `l06-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Before You Analyze The Cases`,
          paragraphs: [
            `In the case study that follows, three people face different conflict situations. Each has an intuitive approach available and a research-informed approach. The intuitive approaches often default to one or two of the Thomas-Kilmann modes (usually competing or avoiding); the research-informed approaches typically draw on multiple modes plus the patterns we've covered.`,
            `One framing as you work through the cases. Notice how often the research-informed approach involves moving the conflict to a different format (private vs public, conversation vs argument, structured vs ad hoc) rather than just behaving differently within the same format. Format change is often more powerful than content change.`,
            `Another framing. The cases cover three common conflict types: between friends pulling you to take sides, with an authority figure you think is wrong, and within a group you're part of. They're patterns you'll face throughout school, family, friendships, and any future work. The frameworks transfer directly.`,
            `One last framing. Most people develop their conflict navigation through trial and error over decades, often picking up bad patterns along with good ones. Building explicit conflict skills at 12 lets you skip much of the painful learning. The frameworks compound across thousands of conflicts over a lifetime.`,
          ],
          image: `/voyager-assets/social-leadership/l06-s5-before.webp`,
          imageCaption: `Three conflict types, research-informed responses. Format change often more powerful than content change.`,
          vocab: [
            {
              word: `format change in conflict`,
              definition: `Practice of changing the structure of conflict (private vs public, conversation vs argument, structured vs ad hoc, written vs spoken) rather than just behaving differently within the same structure. Often more powerful than content change because format shapes what's possible. Public conflicts can't be resolved as honestly as private ones; structured conversations surface what unstructured ones miss.`,
              audioPrompt: `Format change in conflict is the practice of changing the structure of how the conflict is happening rather than just changing your behavior within the existing structure, {name}. Private versus public. Conversation versus argument. Structured versus ad hoc. Written versus spoken. Same room versus separate rooms. Often more powerful than content change because format shapes what's possible. Public conflicts can't be resolved as honestly as private ones because both sides face additional pressure not to lose face. Structured conversations with explicit agreements about how to engage surface what unstructured ones miss. Written communication has different affordances than spoken. Same room intensifies; separate rooms allows perspective. Knowing format change as a tool gives you a move available when behavior change within the existing format isn't working. Many conflicts that seem stuck become solvable when the format changes.`,
            },
          ],
        },

        // ───── CASE STUDY ─────────────────────────────────────────────────────
        {
          id: `l06-case-study`,
          type: `case-study`,
          headline: `Three Conflict Situations`,
          intro: `{name}, three people face different conflict situations. For each, identify what would actually serve them better.`,
          cases: [
            {
              id: `case-1`,
              title: `Friends Pulling You To Take Sides`,
              context: `Two of your closest friends, Mia and Jordan, have had a falling out. They were best friends; now they don't speak. Both have separately come to you to vent and want you to "see how unreasonable" the other has been. They both expect you to take their side. What should you actually do?`,
              question: `What's the most useful approach to this situation?`,
              options: [
                {
                  id: `case-1-opt-a`,
                  label: `Pick whichever friend's reasoning you think is more correct. Tell the other one they need to apologize. Stick with the "right" friend.`,
                  outcome: `This is the intuitive "take the side that's correct" move. It usually fails on multiple levels. You're probably not seeing the full picture from outside; each side has stories the other isn't telling you. Picking a side ends one friendship and probably the other eventually (the "winner" of your judgment notices you can be moved against them too). It also reinforces the toxic pattern where conflicts get resolved by recruiting third parties rather than direct communication. The intuitive move costs you both friendships in the long run while feeling decisive in the short term.`,
                  isOptimal: false,
                },
                {
                  id: `case-1-opt-b`,
                  label: `Listen to each of them when they vent, but consistently say "I care about both of you and I'd rather not be in the middle. I think this is something you two need to work out directly. I'm happy to listen to your feelings about it, but I won't pick sides and I won't carry messages between you." Refuse triangulation gently but consistently. Stay friends with both. Don't pretend you have a position you don't have.`,
                  outcome: `This is what conflict research supports. Refusing triangulation protects both friendships AND your own wellbeing. Listening to feelings without taking sides shows care without enabling unhealthy patterns. Naming what you'll do and won't do is clear and respectful. Both friends may initially be frustrated that you won't take their side, but most will eventually appreciate that you've protected the friendship instead of using it as ammunition. The conflict between them isn't yours to fix; it's theirs. Your job is to be a good friend to each without being weaponized against the other.`,
                  isOptimal: true,
                },
                {
                  id: `case-1-opt-c`,
                  label: `Try to mediate. Set up a meeting where you sit them both down and force them to talk it out with your help.`,
                  outcome: `Well-intentioned but usually backfires when you're a friend rather than a trained mediator. Friends rarely have the structural objectivity to mediate well. You'll inevitably show preferences (subtle takes-the-side patterns) that make one friend feel ganged-up-on. Even if mediation succeeds, the dynamic where you're the one who "saved" their friendship can make the friendship feel dependent on your involvement. Better: support both individually, hold to your boundary about not being in the middle, and trust them to navigate their own conflict (or accept that the friendship ends if they can't).`,
                  isOptimal: false,
                },
              ],
              insight: `This case illustrates conflict where you're in the middle. The intuitive moves (pick sides, try to mediate) both fail because they put you in roles you can't effectively fill. The research-informed move (refuse triangulation, listen without taking sides, hold boundaries) protects both friendships and respects that the conflict isn't yours to fix. Sometimes the most helpful thing is to NOT solve the problem you're being recruited to solve.`,
            },
            {
              id: `case-2`,
              title: `Conflict With An Authority Figure`,
              context: `Your soccer coach has been benching you for the past three games. You think it's unfair. You've been working harder than usual and you don't understand why he's doing this. You're angry and tempted to confront him after the next practice. What should you actually do?`,
              question: `What's the most useful approach to this conflict?`,
              options: [
                {
                  id: `case-2-opt-a`,
                  label: `Confront the coach after practice in front of other players: "Why am I being benched? This isn't fair." Make sure he knows you're frustrated.`,
                  outcome: `This is the intuitive "assert myself" move. It usually backfires for several reasons. Public confrontation almost always escalates conflict because both sides face pressure not to back down in front of others. Starting with "this isn't fair" assumes bad intent without information. Approaching with anger triggers defensive response. Whatever the coach's reasons (some you might not know about), the public framing makes him less likely to engage thoughtfully. You're likely to either get a dismissive response or harder consequences for the public challenge. Format matters: this format guarantees the worst version of the conversation.`,
                  isOptimal: false,
                },
                {
                  id: `case-2-opt-b`,
                  label: `Ask for a private conversation when he's not rushed: "Coach, can I talk with you for a few minutes when you have time? I want to understand what I can be working on." Approach with curiosity rather than accusation. Ask open questions: "What are you seeing in practice that's leading to the playing-time decisions? What would I need to work on to earn more time?" Listen carefully. Even if you still disagree after hearing his reasoning, you'll know what's actually going on. Then you can decide how to respond — work on what he says he wants, accept that you disagree, or talk with your parents about whether to address it differently.`,
                  outcome: `This is what conflict research supports. Private format allows honest conversation. Approaching with curiosity rather than confrontation gets you actual information about what's happening. Open questions reveal whether his reasoning is good (in which case you have something to work on) or bad (in which case you know what you're dealing with). The framing also signals you're treating this as something to understand rather than a battle to win, which often shifts how he responds. Whether or not you end up agreeing, this conversation produces information you didn't have and preserves the relationship.`,
                  isOptimal: true,
                },
                {
                  id: `case-2-opt-c`,
                  label: `Have your parents call the coach and complain on your behalf. They have more authority and can advocate harder than you can.`,
                  outcome: `Skipping the direct conversation usually backfires. Coaches generally respond worse to parental complaints than to player conversations because parental complaints often signal the player isn't mature enough to address things directly. Even when parental advocacy is appropriate, it usually shouldn't be the first move. Try direct conversation first; involve parents only if direct conversation goes badly or if there's a deeper concern that warrants their involvement. Skipping the developmental opportunity to handle the situation yourself also misses the leadership growth.`,
                  isOptimal: false,
                },
              ],
              insight: `This case illustrates conflict with an authority figure. The intuitive moves (public confrontation, parental involvement) both fail because they either escalate or skip the direct conversation. The research-informed move (private conversation, curiosity not accusation, open questions) gets you information you need and preserves the relationship. The format change (private vs public) often matters more than the specific words used.`,
            },
            {
              id: `case-3`,
              title: `Conflict Within A Group You're Part Of`,
              context: `You're on a five-person school project team. Two team members, Devon and Riley, have been arguing about almost everything for the past two weeks. Everyone else on the team is sick of it. The team's work is suffering. Devon has hinted she wants you to "deal with Riley." What should you actually do?`,
              question: `What's the most useful approach to this group conflict?`,
              options: [
                {
                  id: `case-3-opt-a`,
                  label: `Confront Riley privately and tell him he needs to stop being so combative or he's hurting the team.`,
                  outcome: `This is the intuitive "fix the problem person" move. It often fails because (a) you're probably only seeing part of what's going on; Devon may be contributing as much as Riley but be more skilled at appearing reasonable, (b) Riley will feel singled out and ganged up on, which usually makes the situation worse, (c) you're taking Devon's framing as accurate when you don't actually know if it is, (d) you've now become a tool in Devon's conflict with Riley rather than a neutral team member. Better to address the actual problem (the conflict and its team effects) than to assume one specific person is "the problem."`,
                  isOptimal: false,
                },
                {
                  id: `case-3-opt-b`,
                  label: `Talk to Devon and Riley separately first, with genuine curiosity about each side. "I can see there's been some friction. Can you tell me what's been going on from your perspective?" Listen to both. Likely you'll discover both have legitimate concerns AND both have been contributing to the dynamic. Then propose a structured conversation: "The team can't keep going like this. Can the three of us — or all five of us — sit down and figure out how we work together going forward? Not to assign blame, just to figure out what we need from each other." Facilitate the conversation if you can, or ask the teacher to facilitate if appropriate.`,
                  outcome: `This is what group conflict research supports. Listening to both separately gives you the actual picture rather than one person's framing. Acknowledging both have legitimate concerns prevents the dynamic where one becomes "the problem" while the other becomes the victim. Moving to a structured conversation (whether the three of you or all five) addresses the actual issue rather than treating it as one person's behavior. The "what do we need from each other going forward" framing focuses on future functioning rather than past blame. This approach respects that group conflicts are usually about dynamics, not just individuals.`,
                  isOptimal: true,
                },
                {
                  id: `case-3-opt-c`,
                  label: `Ignore it. It's their conflict, not yours. Keep your head down and finish your part.`,
                  outcome: `Avoidance has its uses but not here. The team's work is suffering, which affects you. The group dynamic is unhealthy and isn't likely to fix itself. By not addressing it, you're complicit in the dysfunction. There's a difference between not getting in the middle of friends' personal conflict (which can be legitimate avoidance) and ignoring a group conflict that's actively damaging shared work (which is closer to abdication). The leadership move here is to help the group address what's happening even though you're not the one in the conflict.`,
                  isOptimal: false,
                },
              ],
              insight: `This case illustrates group conflict where you're a team member but not a primary party. The intuitive moves (singling out one person, ignoring it entirely) both fail. The research-informed move (listen to all sides, surface that this is a group dynamic problem, facilitate structured conversation) addresses the actual issue while respecting that conflicts in groups are usually dynamics rather than just individuals. Leadership in group conflict often means helping the group navigate rather than picking sides or staying out entirely.`,
            },
          ],
          reflectionPrompt: `All three cases share a pattern: the intuitive moves usually involve taking sides, escalating, or skipping the direct conversation that would actually help. The research-informed moves involve listening genuinely, refusing triangulation, and changing format when needed. Which case felt most personally relevant?`,
        },

        {
          id: `l06-quiz`,
          type: `quiz`,
          headline: `Check your understanding`,
          questions: [
            {
              id: `q1`,
              type: `multiple-choice`,
              question: `What are the five Thomas-Kilmann conflict modes?`,
              options: [
                `Random list`,
                `Competing (high assertive, low cooperative); accommodating (low assertive, high cooperative); avoiding (low assertive, low cooperative); compromising (medium both); collaborating (high assertive, high cooperative); foundational framework from 1970s; most people default to one or two modes`,
                `Five emotions`,
                `Personality types`,
              ],
              correctIndex: 1,
              explanation: `Mature conflict navigation involves recognizing which mode you're defaulting to, considering whether it fits the situation, and being able to shift to a different mode when needed. The framework gives vocabulary and options most adults operate without explicitly.`,
            },
            {
              id: `q2`,
              type: `multiple-choice`,
              question: `What's the distinction between "positions" and "interests" (Fisher and Ury)?`,
              options: [
                `Same thing`,
                `From "Getting to Yes" 1981: position = what people say they want; interest = what they actually need underneath; most conflict gets stuck on positions; finding solutions usually requires understanding interests; the classic two-children-and-orange example (one wanted juice, other wanted peel — both could win)`,
                `Job titles`,
                `Random words`,
              ],
              correctIndex: 1,
              explanation: `Real conflict often has the orange structure: positions seem incompatible while interests aren't. Asking what people actually need underneath what they're saying they want opens up solution space that pure position-focused negotiation misses entirely.`,
            },
            {
              id: `q3`,
              type: `multiple-choice`,
              question: `What is "Hanlon's razor"?`,
              options: [
                `Sharp tool`,
                `Heuristic: don't attribute to malice what can be explained by other causes (incompetence, misunderstanding, different priorities, mistakes); useful default in conflict because most behavior that frustrates us wasn't intended to harm us; assuming malice often becomes self-fulfilling`,
                `Cooking term`,
                `Math principle`,
              ],
              correctIndex: 1,
              explanation: `The stronger form: most apparent malice is actually misunderstanding. Starting from this assumption usually produces better outcomes even when wrong, because the recovery from "we misunderstood each other" is faster than recovery from "I assumed you were attacking me."`,
            },
            {
              id: `q4`,
              type: `multiple-choice`,
              question: `What is "triangulation" in conflict?`,
              options: [
                `Math concept`,
                `Pattern where someone uses a third party to communicate something to a fourth party rather than communicating directly; common in friend groups, families, workplaces; examples: "Tell her I'm mad," "Make sure he knows what I think"; healthy response is to redirect toward direct communication`,
                `Geometry`,
                `Random pattern`,
              ],
              correctIndex: 1,
              explanation: `Triangulation puts the middle person in an unfair position and prevents the direct communication that would actually resolve the issue. Many family and friend group dysfunctions involve chronic triangulation; learning to refuse it is a leadership skill.`,
            },
            {
              id: `q5`,
              type: `multiple-choice`,
              question: `What patterns make conflicts worse?`,
              options: [
                `Random behaviors`,
                `Making it personal (attacking person not issue); assuming bad intent; trying to win the argument; bringing in old grievances; making demands without alternatives; refusing to acknowledge anything the other side has right; trying to resolve in public/audience`,
                `Being too nice`,
                `Talking too much`,
              ],
              correctIndex: 1,
              explanation: `Most people use several of these patterns reflexively without realizing the cost. Recognizing them in advance helps you avoid them and recognize when others are doing them to you. Each one consistently makes conflicts worse rather than better.`,
            },
            {
              id: `q6`,
              type: `multiple-choice`,
              question: `What is "format change" in conflict?`,
              options: [
                `Different topic`,
                `Practice of changing the structure of how conflict is happening (private vs public, conversation vs argument, structured vs ad hoc) rather than just behaving differently within existing structure; often more powerful than content change; public conflicts can't be resolved as honestly as private ones`,
                `Different format file`,
                `Random change`,
              ],
              correctIndex: 1,
              explanation: `Same room intensifies; separate rooms allows perspective. Knowing format change as a tool gives you a move available when behavior change within the existing format isn't working. Many conflicts that seem stuck become solvable when the format changes.`,
            },
            {
              id: `q7`,
              type: `multiple-choice`,
              question: `When you're in the middle of others' conflict, what works?`,
              options: [
                `Pick sides`,
                `Don't take sides reflexively (each side usually has some legitimate concerns and misunderstandings); refuse triangulation (redirect toward direct communication); protect own boundaries (you're allowed to decline mediating); if mediating, do it explicitly and structurally; accept your limits (actual resolution happens between parties)`,
                `Solve everything`,
                `Stay quiet`,
              ],
              correctIndex: 1,
              explanation: `The actual resolution happens between the parties; your role is at most to create conditions where they can navigate. Many people in the middle exhaust themselves trying to fix things they can't fix because the real work has to happen between the people in the actual conflict.`,
            },
            {
              id: `q8`,
              type: `multiple-choice`,
              question: `When is "competing" the right Thomas-Kilmann mode?`,
              options: [
                `Always`,
                `When the issue is genuinely important to you, when quick decisive action is needed, when you're confident you're right on substantive grounds; limit: damages relationships if overused, doesn't work when both sides need to come to durable agreement`,
                `Never`,
                `Random situations`,
              ],
              correctIndex: 1,
              explanation: `Each mode has its uses and its limits. Competing isn't bad; using only competing is. Mature conflict navigation involves having multiple modes available and matching them to situations.`,
            },
            {
              id: `q9`,
              type: `true-false`,
              question: `True or false: Your goal in conflict should always be to "win" the argument.`,
              correctAnswer: false,
              explanation: `False. Many conflicts have no "winner" available; the relationships continue and need to function regardless of who was right. Trying to win an argument often means trying to humiliate the other side, which damages the relationship and ensures the conflict resurfaces later. The right question is usually "how do we get past this?" not "how do I prove I was right?"`,
            },
            {
              id: `q10`,
              type: `inference`,
              question: `Your friend says "I'm so mad at my brother. Tell him he's being a jerk." Based on this lesson, what should you do?`,
              options: [
                `"Sure, I'll tell him"`,
                `"That's triangulation, and accepting it would put me in an unfair position while preventing the conversation you actually need to have with him. I'm happy to listen to how you're feeling about it, but I won't carry messages between you two. If you want help thinking about how to talk to him directly, I can do that. What's actually going on?" This response refuses triangulation, offers genuine support, and redirects toward direct communication. It also protects the friendship with both your friend and her brother (you'd damage your relationship with her brother if you carried that message, and you'd enable an unhealthy pattern with your friend). The conflict between siblings needs to happen between siblings, not through messengers."`,
                `"Tell him yourself"`,
                `"Both of you suck"`,
              ],
              correctIndex: 1,
              explanation: `Real applied conflict literacy. Don't dismiss the friend's feelings; refuse the specific request while offering genuine support. Explain what you're doing and why. Redirect toward direct communication. This is the kind of response that protects multiple relationships while teaching healthier patterns.`,
            },
          ],
        },

        {
          id: `l06-reflection`,
          type: `reflection`,
          headline: `Sit with this`,
          intro: `Pick the prompt that pulls at you most. Your answer is saved.`,
          prompts: [
            { id: `reflect-cognitive`, category: `Cognitive`, prompt: `Before this lesson, did you have explicit conflict navigation frameworks? Has anything shifted?` },
            { id: `reflect-meta`, category: `Metacognitive`, prompt: `Honestly: which Thomas-Kilmann mode do you default to most? Which would benefit from deliberate development?` },
            { id: `reflect-identity`, category: `Identity`, prompt: `If you become someone who can navigate any conflict skillfully across thousands over a lifetime, what does that change about the relationships you can sustain and the leadership you can offer?` },
            { id: `reflect-application`, category: `Application`, prompt: `Pick one current conflict in your life (with friend, family, group). Apply the frameworks: what mode are you using, what mode would fit better, what's the actual interest underneath each position?` },
            { id: `reflect-critical`, category: `Critical`, prompt: `Are there conflicts where these frameworks don't apply well? What about values-based conflicts where compromise isn't appropriate? Conflicts involving real injustice?` },
            { id: `reflect-personal`, category: `Personal investigation`, prompt: `Watch one conflict happening in your environment this week (in your home, school, or media). Apply the frameworks. What patterns do you notice?` },
          ],
        },

        {
          id: `l06-real-world`,
          type: `real-world`,
          headline: `Take it into your life`,
          guideContext: `Conflict skill compounds across thousands of situations over a lifetime. Two paths.`,
          familyActivity: {
            title: `The Family Conflict Modes Conversation`,
            duration: `45 minutes`,
            description: `Share the five Thomas-Kilmann modes. Then ask family members which mode each typically defaults to in conflict. Most families have predictable patterns (one person tends to compete, another tends to accommodate, etc.). Notice how the defaults interact: a competer and an accommodator produce specific patterns; two avoiders produce other patterns. The conversation often surfaces why certain conflicts in your family keep recurring (it's usually about the interaction of default modes, not just the specific issues).`,
          },
          projectOption: {
            title: `Read "Getting to Yes" or "Never Split the Difference," 4 weeks (optional)`,
            duration: `4 weeks, ~30 minutes per session`,
            description: `Pick one: Fisher and Ury's "Getting to Yes" (1981, accessible at 12) for collaborative negotiation, or Chris Voss's "Never Split the Difference" (2016) for harder adversarial situations. Read carefully. Apply techniques during the reading period. Write 1,500 words on what you learned and how it changes your conflict navigation. Reading a real negotiation book at 12 produces skill most adults never develop.`,
            offerToParent: `Parent: opt your kid into this project. Real conflict literacy at 12 compounds dramatically.`,
          },
          identityQuestion: `If you become someone who can navigate any conflict skillfully — friend conflicts, authority conflicts, group conflicts, conflicts you're in, conflicts where you're in the middle — what does that change about the leadership and relationships you can have over a lifetime?`,
        },

        {
          id: `l06-identity-hook`,
          type: `identity-hook`,
          headline: `Who is this lesson making you?`,
          prompt: `One sentence. No wrong answer.`,
          placeholder: `Someone who...`,
          examples: [
            `Someone who has multiple conflict modes available, not just one default.`,
            `A person who refuses triangulation and redirects toward direct communication.`,
            `Someone who knows the difference between positions and interests.`,
          ],
          saveKey: `identity_responses_sl_11_12_6`,
        },

        {
          id: `l06-celebration`,
          type: `celebration`,
          guideText: `{name}. Sixth Social Leadership lesson done. You now have working conflict frameworks: the Thomas-Kilmann five modes (competing, accommodating, avoiding, compromising, collaborating), Fisher and Ury's positions vs interests from "Getting to Yes," Voss's tactical empathy from "Never Split the Difference," Hanlon's razor, triangulation, format change. You can navigate friend conflicts, authority conflicts, group conflicts. Most adults work through these by trial and error for decades; you have them at 12. Next time we go into one of the most subtle and powerful skills: persuasion vs manipulation. Three sources. Source Evaluation format. Let's go. — Valor`,
          badge: `conflict-navigator`,
          badgeName: `Conflict Navigator`,
          xpEarned: 75,
          competencies: [
            `Articulates Thomas-Kilmann's five conflict modes`,
            `Distinguishes positions from interests (Fisher and Ury "Getting to Yes" 1981)`,
            `Knows Voss's tactical empathy and Hanlon's razor`,
            `Recognizes triangulation and refuses it gracefully`,
            `Applies format change as a conflict navigation tool`,
          ],
          nextLessonPreview: {
            title: `Lesson 7: Persuasion vs Manipulation`,
            hook: `Where's the line? Three sources. Source Evaluation.`,
          },
        },
      ],
    },
  ],
};

export default SOCIALLEADERSHIP_VOYAGER_L06;

if (import.meta.env?.DEV) {
  const l = SOCIALLEADERSHIP_VOYAGER_L06.lessons[0];
  const mags = l.screens.filter((s) => s.type === `magazine`).length;
  const caseStudy = l.screens.find((s) => s.type === `case-study`);
  const quiz = l.screens.find((s) => s.type === `quiz`)?.questions?.length ?? 0;
  const reflect = l.screens.find((s) => s.type === `reflection`)?.prompts?.length ?? 0;
  console.log(
    `[LESSON-SL-VOYAGER-L06 ${VERSION}] "${l.title}" — ${mags} magazine, case-study w/ ${caseStudy?.cases?.length ?? 0} cases, ${quiz} quiz, ${reflect} reflection`
  );
}
