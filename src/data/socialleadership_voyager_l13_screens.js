// ─────────────────────────────────────────────────────────────────────────────
// SOCIAL LEADERSHIP VOYAGER  |  L13 — Difficult Conversations
// Age band : voyagers (11-12)   Guide: valor (Lion)
// Standards: Coreverse Original — Communication Research, Applied Leadership
// CALIBRATED: Voyager spec v1.1 (May 2026)
// Interaction format: CASE STUDY (three difficult conversation types: peer treatment / concerned feedback / navigating up)
// ─────────────────────────────────────────────────────────────────────────────

const VERSION = "voyager-sl-l13-v1";

const SOCIALLEADERSHIP_VOYAGER_L13 = {
  ageBand: `voyagers`,
  subjectId: `social-leadership`,
  guide: `valor`,

  lessons: [
    {
      id: `sl-11-12-13`,
      title: `Difficult Conversations`,
      duration: 35,
      xpReward: 75,
      badge: `hard-conversation-skilled`,
      badgeName: `Hard Conversation Skilled`,

      screens: [
        {
          id: `l13-welcome`,
          type: `welcome`,
          guideText: `{name}, difficult conversations are the conversations most people avoid. Telling someone their behavior is hurting you. Giving honest feedback to a friend who's doing something self-destructive. Having to raise a hard issue with a parent, teacher, or coach. Most people either avoid these conversations entirely (which lets the underlying issues fester) or do them badly (which often makes things worse). Real research on difficult conversations has been developing for decades, and the patterns of what works are clearer than most people realize. Today we work through three different types of difficult conversation you'll face throughout your life. By the end you'll have a working framework for any hard conversation you need to have.`,
          headline: `Difficult Conversations`,
          subtitle: `The conversations most people avoid. The patterns of what works are knowable.`,
          visual: `/voyager-assets/social-leadership/l13-welcome.webp`,
        },

        {
          id: `l13-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `What Makes A Conversation "Difficult"`,
          paragraphs: [
            `Difficult conversations share specific characteristics that distinguish them from ordinary ones. Both sides have stakes in the outcome. There's potential for disagreement or hurt feelings. The relationship matters enough that you don't want to damage it. The status quo is uncomfortable but breaking it feels risky. Often emotion is running high under the surface even when conversation is calm.`,
            `Douglas Stone, Bruce Patton, and Sheila Heen (researchers from the Harvard Negotiation Project) wrote "Difficult Conversations" (1999) based on years of studying what works. Their framework identifies three "conversations" happening simultaneously in any difficult exchange. The "what happened" conversation: who said and did what, who's right, who's to blame. The "feelings" conversation: what each side is experiencing emotionally, whether those feelings are appropriate, whether to express them. The "identity" conversation: what this situation means about who you are as a person.`,
            `Most people focus entirely on the "what happened" conversation and treat the others as distractions. This usually makes difficult conversations harder. The other two conversations are happening whether you address them or not. Pretending the "feelings" conversation isn't happening doesn't make the feelings go away; it just makes them operate outside your awareness. Pretending the "identity" conversation isn't happening makes you defensive about identity threats you don't realize you're feeling.`,
            `Kerry Patterson, Joseph Grenny, Ron McMillan, and Al Switzler wrote "Crucial Conversations" (2002), based on studying thousands of difficult conversations across organizations. Their core principle: when stakes are high, opinions differ, and emotions run strong, most people switch to one of two failure modes: silence (avoiding the conversation or saying nothing meaningful) or violence (verbal attacks, manipulation, escalation). Both prevent real dialogue. The skill is staying in dialogue even when both failure modes are tempting.`,
            `What dialogue requires. Making it safe (the other person feels safe engaging without being attacked). Mastering your stories (recognizing the interpretations you're imposing on facts and questioning them). Stating your path (sharing your facts, your story, asking for theirs). Exploring others' paths (genuinely understanding their perspective). Moving to action (deciding what's actually going to change).`,
          ],
          image: `/voyager-assets/social-leadership/l13-s1-what.webp`,
          imageCaption: `Difficult conversations have three layers ("what happened," "feelings," "identity") simultaneously. Most people focus only on the first.`,
          vocab: [
            {
              word: `three conversations framework`,
              definition: `Framework from "Difficult Conversations" (1999). Three layers happening simultaneously in any difficult exchange. The "what happened" conversation: who did what, who's right. The "feelings" conversation: what each side is experiencing emotionally. The "identity" conversation: what this means about who each person is. Most people focus only on "what happened" and treat the others as distractions, which makes difficult conversations harder.`,
              audioPrompt: `The three conversations framework comes from Douglas Stone, Bruce Patton, and Sheila Heen's 1999 book "Difficult Conversations," based on years of research at the Harvard Negotiation Project, {name}. Their framework identifies three layers happening simultaneously in any difficult exchange. The "what happened" conversation focuses on who said and did what, who's right, who's to blame. The "feelings" conversation focuses on what each side is experiencing emotionally, whether those feelings are appropriate, whether to express them. The "identity" conversation focuses on what this situation means about who you are as a person. Most people focus entirely on the "what happened" conversation and treat the others as distractions. This usually makes difficult conversations harder. The other two conversations are happening whether you address them or not. Pretending the feelings conversation isn't happening doesn't make the feelings go away; it just makes them operate outside your awareness. The skill is engaging with all three rather than only one.`,
            },
            {
              word: `identity conversation`,
              definition: `One of three simultaneous layers in difficult conversations (Stone, Patton, Heen framework). What the situation means about who each person is. Often operating implicitly beneath the surface. People become more defensive when conversations implicate their identity — their sense of competence, their goodness as a person, their image of themselves. Addressing the identity layer explicitly can defuse defensiveness that is blocking the other conversations.`,
              audioPrompt: `The identity conversation is one of the three simultaneous layers in any difficult exchange identified by Stone, Patton, and Heen, {name}. It asks: what does this situation mean about who I am as a person? Often operating below the surface of the "what happened" conversation, but powerfully shaping how people respond. When someone feels that a difficult conversation is calling into question their competence, their goodness as a person, their identity as a parent or friend or leader, they become more defensive — not about the facts, but about what the facts seem to say about them. This is why behavior framings work better than character framings: behavior framings address the "what happened" layer without triggering the identity layer. Character framings (you're selfish, you're a bad friend) directly engage the identity conversation, usually producing defensiveness that blocks everything else. The skill of addressing the identity layer explicitly — "I want you to know that I'm raising this because I care about our friendship, not because I think you're a bad person" — can defuse defensiveness that is otherwise blocking the more productive conversation.`,
            },
            {
              word: `silence or violence`,
              definition: `Two failure modes identified in Kerry Patterson and colleagues' "Crucial Conversations" (2002). When stakes are high, opinions differ, and emotions run strong, most people switch to silence (avoiding the conversation or saying nothing meaningful) or violence (verbal attacks, manipulation, escalation). Both prevent real dialogue. The skill is staying in dialogue when both failure modes are tempting.`,
              audioPrompt: `Silence or violence are the two failure modes identified by Kerry Patterson, Joseph Grenny, Ron McMillan, and Al Switzler in their 2002 book "Crucial Conversations," {name}. Based on studying thousands of difficult conversations across organizations, they found that when stakes are high, opinions differ, and emotions run strong, most people switch to one of these two failure modes. Silence means avoiding the conversation entirely, or saying nothing meaningful when the topic is nominally raised — nodding along, changing the subject, giving non-answers. Violence means verbal attacks, manipulation, emotional escalation, or forcing compliance rather than dialogue. Both prevent real dialogue. Neither addresses the actual issue. The silence mode preserves the relationship surface while leaving the underlying issue to fester. The violence mode forces the issue while often damaging the relationship. The skill Patterson and colleagues teach is staying in dialogue even when both failure modes are tempting — when the easier path is either to say nothing or to attack. The precondition for staying in dialogue is making it safe for both parties.`,
            },
          ],
        },

        {
          id: `l13-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Common Failure Modes`,
          paragraphs: [
            `Most people fail at difficult conversations through predictable patterns. Recognizing the patterns in advance helps you avoid them.`,
            `Failure mode 1: avoidance. The most common pattern. You don't have the conversation at all, hoping the situation will resolve itself. Sometimes it does. Often it doesn't, and the underlying issue continues while resentment builds. Avoidance compounds: each avoided conversation makes the next one harder because you're now also addressing why you avoided the earlier one. Major relationship breakdowns often involve long chains of avoided difficult conversations.`,
            `Failure mode 2: bringing it up in the wrong moment. Saving difficult feedback for moments when you're already upset, the other person is already stressed, or you have an audience. The result is that what could have been productive comes out as attack. Most difficult conversations need to be initiated deliberately rather than triggered by accumulated frustration.`,
            `Failure mode 3: making it about character rather than behavior. "You're so selfish" is harder to receive and harder to fix than "When you did X, I felt Y." Character framings put the other person on identity defense ("I'm not a selfish person!"); behavior framings allow specific change. The skill is naming specific behaviors and impacts rather than diagnosing character.`,
            `Failure mode 4: bringing receipts. Listing every example of the problem, all the related grievances, the longer pattern of behavior. This usually triggers defensiveness rather than reflection. One specific recent example is enough; piling on signals you're trying to win rather than resolve.`,
            `Failure mode 5: insisting on agreement. Treating the conversation as failed unless the other person fully agrees with your interpretation and apologizes appropriately. Many difficult conversations end without full agreement; some end with the other person needing time to process. Demanding immediate agreement often prevents the slower acknowledgment that would otherwise come.`,
            `Failure mode 6: not following through afterward. Having the conversation, getting agreement on what will change, and then not addressing it when the behavior continues. Failure to follow through makes the next difficult conversation harder and signals that your stated standards aren't real. The conversation only matters if it changes something; the follow-through is what makes the change real.`,
            `Each failure mode has a specific corresponding skill. Avoidance: initiating conversations deliberately when stakes warrant. Wrong moment: choosing the right time and setting. Character vs behavior: framing in terms of specific actions and impacts. Bringing receipts: focusing on one specific recent example. Insisting on agreement: aiming for shared understanding rather than immediate concession. Not following through: closing the loop after the conversation.`,
          ],
          image: `/voyager-assets/social-leadership/l13-s2-failure.webp`,
          imageCaption: `Six failure modes: avoidance, wrong moment, character not behavior, bringing receipts, insisting on agreement, not following through.`,
          vocab: [
            {
              word: `character framing`,
              definition: `Distinction in how to raise concerns. Behavior framing: "When you did X, I felt Y" names specific actions and their impacts. Character framing: "You're a selfish person" or "You always do this" diagnoses the other person's identity. Behavior framings allow specific change; character framings put the other person on identity defense. One of the most reliable distinctions across difficult-conversation research.`,
              audioPrompt: `Behavior framing versus character framing is a distinction in how to raise concerns during difficult conversations, {name}. Behavior framing names specific actions and their impacts: "When you did X yesterday, I felt Y." Character framing diagnoses the other person's identity: "You're so selfish" or "You always do this" or "That's just like you." Behavior framings are usually more productive because they allow specific change. The other person can hear that one specific action created a problem and consider whether to do that action differently. Character framings put the other person on identity defense. "I'm not a selfish person!" is the natural response to "You're so selfish," and from there the conversation is about defending versus attacking identity rather than addressing the actual problem. One of the most reliable distinctions across difficult-conversation research. The skill is catching yourself before you slip into character framings, even when you're frustrated. Specific. Concrete. Behavior, not character.`,
            },
            {
              word: `bringing receipts`,
              definition: `Failure mode in difficult conversations. Listing every example of the problem, adding all related grievances, and documenting the longer pattern of behavior rather than focusing on one specific recent instance. Usually triggers defensiveness rather than reflection. Signals you are trying to win generally rather than address the current issue. One specific recent example is enough; piling on escalates rather than resolves.`,
              audioPrompt: `Bringing receipts is a failure mode in difficult conversations identified in the text, {name}. It means listing every example of the problem, adding all the related grievances, documenting the longer pattern of behavior — essentially presenting a comprehensive case for why the other person has been consistently wrong or hurtful. The intention is usually to prove that the problem is real and serious. The actual effect is usually to trigger defensiveness rather than reflection. When you bring extensive documentation, the conversation becomes about the accuracy of each item on the list. The other person focuses on finding exceptions to dispute and defending each charge rather than engaging with the core issue. It also signals that you are trying to win generally — to establish overall that you have been right and they have been wrong — rather than addressing the specific current situation. The text's guidance is direct: one specific recent example is enough. The problem is real because of what happened last Tuesday, not because of an accumulated list. Focusing on one specific recent instance gives the other person something concrete to engage with rather than a comprehensive indictment to defend against.`,
            },
            {
              word: `own your contribution`,
              definition: `Practice of acknowledging your role in a difficult situation rather than presenting yourself as having contributed nothing. Most difficult situations have multiple contributors. Acknowledging your part where it is real reduces the other person's defensiveness and opens space for them to acknowledge theirs. The acknowledgment does not have to be proportionally equal; it has to be honest about what you actually contributed.`,
              audioPrompt: `Owning your contribution is the practice of acknowledging your role in a difficult situation rather than presenting yourself as entirely without fault, {name}. The text identifies it as the third element of what actually works in difficult conversations. Most difficult situations have multiple contributors. Pretending you contributed nothing to a conflict is usually not accurate, and the other person often knows it. When you claim total innocence, you implicitly assign total responsibility to them, which usually triggers defensiveness about whether they are really entirely to blame. When you acknowledge your part — even where it is genuinely minor — you reduce that defensiveness and often open space for them to acknowledge theirs. The acknowledgment does not have to be proportionally equal; it just has to be honest. "I should have said something sooner rather than letting this build up" is a real contribution to acknowledge even when the other person's contribution is larger. The combination of sharing observations, sharing impact, and owning your contribution creates a very different conversation than presenting yourself as an innocent victim explaining why the other person has been wrong.`,
            },
          ],
        },

        {
          id: `l13-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `What Actually Works (The Pattern)`,
          paragraphs: [
            `Several patterns reliably make difficult conversations more productive. None alone is sufficient; together they form the core skill.`,
            `First: state what you've observed, not what you've concluded. "I noticed you haven't responded to my last three texts" is observation. "You're avoiding me" is conclusion. Start with observations; let conclusions emerge from the conversation rather than being imposed on it. The other person can disagree with your conclusion but not with your observation.`,
            `Second: share the impact on you. "When that happened, I felt confused and started worrying I'd done something wrong." Impact on you is hard for the other person to dismiss because you're the authority on your own experience. Impact framings also distinguish your perspective from claims about reality: "I felt X" is different from "X happened" or "you did Y." You're sharing your experience, not making accusations.`,
            `Third: own your contribution where it exists. Most difficult situations have multiple contributors; pretending you contributed nothing usually isn't accurate. Acknowledging your contribution where it's real reduces the other person's defensiveness and opens space for them to acknowledge theirs. The acknowledgment doesn't have to be 50-50; it just has to be honest about your part.`,
            `Fourth: ask for their perspective with genuine curiosity. "I want to understand what's been going on for you. What's been happening on your end?" Genuine curiosity (not pretend curiosity that's actually a setup for your next point) often surfaces information that changes what you thought you knew. Many difficult conversations transform when one side discovers the other was navigating something the first side didn't know about.`,
            `Fifth: distinguish what you understand from what you accept. You can understand someone's perspective without agreeing with it. "I understand why that felt important to you, AND I still think we need a different approach going forward." Treating understanding and agreement as the same prevents real dialogue.`,
            `Sixth: aim for understanding and change, not for "winning." Most difficult conversations are between people who'll continue having relationships afterward. Treating them as battles to win damages the relationship even when you "win." The right outcome is usually shared understanding plus changed behavior, not the other person agreeing you were entirely right.`,
            `Seventh: separate the conversation from its aftermath. Sometimes the conversation goes well but the other person needs time to process before behavior changes. Sometimes the conversation feels rough but real change happens after. The conversation's quality and the result it produces are related but distinct; don't judge the conversation entirely on the immediate aftermath.`,
          ],
          image: `/voyager-assets/social-leadership/l13-s3-works.webp`,
          imageCaption: `What works: observations not conclusions, share impact, own your contribution, genuine curiosity, distinguish understanding from agreement.`,
          vocab: [
            {
              word: `understanding vs agreement`,
              definition: `Distinction critical to dialogue. You can understand someone's perspective without agreeing with it. "I understand why X felt important to you AND I still think Y." Treating understanding and agreement as the same prevents real dialogue because people refuse to understand positions they disagree with, fearing it means conceding. Skilled difficult-conversation practice involves understanding deeply while maintaining your own position.`,
              audioPrompt: `Understanding versus agreement is a distinction critical to dialogue in difficult conversations, {name}. You can understand someone's perspective without agreeing with it. "I understand why that felt important to you AND I still think we need a different approach going forward." Treating understanding and agreement as the same thing prevents real dialogue. People refuse to understand positions they disagree with, fearing that understanding will somehow mean conceding. The opposite is usually true. You can only really decide whether to agree with someone after you've understood them. And refusing to understand prevents the conversation from reaching anywhere productive. Skilled difficult-conversation practice involves understanding deeply while maintaining your own position. The combination is hard. Most people drift toward either understanding without maintaining (you concede whatever they want) or maintaining without understanding (you defend your position without engaging with theirs). Holding both is the skill.`,
            },
            {
              word: `mastering your stories`,
              definition: `Practice from "Crucial Conversations" framework. Recognizing the interpretations you are imposing on facts and questioning whether they are accurate before letting them drive your behavior. Events plus your story about those events equals your emotional response. You can observe the same facts and tell different stories about them. Checking your story before acting on it is one of the most powerful practices for preventing escalation.`,
              audioPrompt: `Mastering your stories is a practice from Patterson and colleagues' Crucial Conversations framework, {name}. The logic is direct. What you experience emotionally in a difficult situation is not produced by the facts alone. It is produced by the story you tell yourself about the facts. You see a specific behavior. You interpret it. You add motives, history, meanings, and predictions. The resulting story determines your emotional response and what you do next. Mastering your stories means recognizing the interpretations you are imposing on facts and questioning whether they are accurate. The same observable fact — a friend doesn't respond to your text — can support many different stories: she's ignoring you deliberately, she's busy, her phone died, she saw it and forgot, she's upset about something you don't know about. Acting immediately on the "she's ignoring me deliberately" story without checking it produces a reaction calibrated to a story that may be false. Pausing to notice the story you're telling — and asking whether it's the only story consistent with the facts — prevents a large proportion of the escalations that happen in difficult conversations. Most escalations involve people reacting to their own interpretations rather than to the actual situation.`,
            },
            {
              word: `navigating up`,
              definition: `Type of difficult conversation with authority figures: parents, teachers, coaches. Requires specific adaptations of the general framework. Explicit framing and specific situation focus are especially important. Honesty about your own behavior, including where it has been wrong, builds trust more than it damages it. Offering thought-out solutions demonstrates maturity. The way you handle navigating up shapes how much flexibility you receive going forward.`,
              audioPrompt: `Navigating up is the type of difficult conversation with authority figures — parents, teachers, coaches — and requires specific adaptations of the general framework, {name}. The general principles apply: explicit framing, observations not conclusions, sharing impact, genuine curiosity. But navigating up has additional considerations. The power differential is real; the authority figure has formal power to say no and enforce decisions. This means the approach that works is generally more respectful of their position than a peer conversation would need to be. Specific situation rather than general rule complaint is especially important when navigating up: asking for an exception to a specific situation gives them something concrete to engage with rather than requiring them to reconsider their general authority. Honesty about your own behavior, including where it has been wrong, typically builds trust rather than damaging it — it demonstrates maturity and good faith that most authority figures respond positively to. Offering thought-out solutions shows you have considered their perspective, not just your own wants. The case study in this lesson demonstrates the full pattern: asking for specific time, explaining the specific situation, admitting what you've been doing wrong (hiding the phone), proposing possible solutions, and genuinely engaging with their response. The way you handle navigating up shapes how much flexibility you get going forward — authority figures who feel respected and engaged become more flexible over time.`,
            },
          ],
        },

        {
          id: `l13-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Setting Up The Conversation`,
          paragraphs: [
            `How you set up a difficult conversation matters as much as what you say in it. Several practical considerations make conversations go better.`,
            `Timing. Initiate when both parties have capacity to engage. Not when either of you is exhausted, hungry, late for something, or already emotionally activated about something else. The right moment isn't always available; sometimes you have to wait. When the situation is genuinely urgent, you may have to engage even in suboptimal moments, but recognize what that costs.`,
            `Setting. Private rather than public when possible. Without an audience. With enough time that nobody has to leave in the middle. Sometimes a walk works better than face-to-face seated conversation because the movement and shared direction reduce intensity. Sometimes phone or video works better when face-to-face feels too charged. Sometimes asynchronous (a thoughtful letter or message) gives both people processing time.`,
            `Framing the opening. Most difficult conversations benefit from an explicit framing rather than sneaking up on the topic. "I want to talk about something that's been on my mind, and I want to do it well. Is now a good time?" This signals the conversation is intentional, gives the other person warning to engage rather than be ambushed, and respects that they may need to defer the timing.`,
            `Your internal state matters. Going in with the goal of "making them see they were wrong" usually fails. Going in with the goal of "sharing my perspective and hearing theirs" usually goes better. The goal you bring shapes everything you say. Spending some time before the conversation getting clear about what you actually want from it (not just what you want to say) makes the conversation more productive.`,
            `One specific practice: write out what you want to say beforehand. Not to read from, but to clarify your own thinking. The writing often surfaces problems with your framing that you can fix before they cause damage in the conversation. Some people draft hard messages or letters they don't send specifically to clarify what they actually think; the draft becomes the prep work for the spoken conversation.`,
            `Another practice: imagine the conversation going well. What would that look like specifically? What would they need to hear? What would you need to hear? The mental simulation, applied honestly, often suggests adjustments to your approach. Many difficult conversations go poorly because the initiator imagined the wrong outcome (winning the argument) rather than the actual outcome they wanted (real understanding and change).`,
          ],
          image: `/voyager-assets/social-leadership/l13-s4-setup.webp`,
          imageCaption: `Setup matters as much as content. Timing, setting, explicit framing, your internal state, written preparation, mental simulation.`,
          vocab: [
            {
              word: `explicit framing`,
              definition: `Practice of openly naming that a difficult conversation is happening rather than sneaking up on the topic. "I want to talk about something that's been on my mind." Gives the other person warning to engage rather than be ambushed. Respects that they may need to defer the timing. Signals the conversation is intentional and important. Counterintuitively often reduces defensiveness because it removes the surprise element.`,
              audioPrompt: `Explicit framing in difficult conversations is the practice of openly naming that a difficult conversation is happening rather than sneaking up on the topic, {name}. "I want to talk about something that's been on my mind, and I want to do it well. Is now a good time?" Gives the other person warning to engage rather than be ambushed. Respects that they may need to defer the timing to a moment when they have capacity. Signals the conversation is intentional and important rather than incidental. Counterintuitively often reduces defensiveness because it removes the surprise element. The other person can prepare to engage thoughtfully rather than reacting to what feels like an attack. Many failed difficult conversations involve one party ambushing the other with topics the other person wasn't prepared for. Explicit framing prevents this. The framing also models the kind of conversation you want to have: deliberate, careful, mutual. People often mirror the spirit of how a conversation is opened.`,
            },
            {
              word: `internal state`,
              definition: `The goal you bring into a difficult conversation shapes everything you say and how you say it. Going in to "make them see they were wrong" usually fails. Going in to "share my perspective and hear theirs" usually goes better. Getting clear on what you actually want from a conversation — not just what you want to say — is a critical part of preparation. The goal you bring determines the conversation's direction.`,
              audioPrompt: `Internal state in the context of difficult conversations refers to the goal you bring into the conversation — and the text makes clear that it shapes everything you say and how you say it, {name}. Going in with the goal of making the other person see they were wrong usually fails. The goal is written into every word, every tone, every reaction to what they say. The other person can feel it, and it puts them on the defensive before any content has been exchanged. Going in with the goal of sharing your perspective and genuinely hearing theirs usually goes better. The same content delivered from that goal sounds different — more open, less prosecutorial. The text's guidance is to spend some time before the conversation getting clear on what you actually want from it, not just what you want to say. Most people are clear on what they want to say. Fewer are clear on what outcome they actually want. Do you want them to understand how you felt? Do you want behavior change? Do you want to understand what's been happening for them? Getting clear on the actual goal — as distinct from the immediate emotional impulse — makes the conversation more productive because your words start to reflect the real goal rather than the emotional impulse.`,
            },
            {
              word: `written preparation`,
              definition: `Practice of writing out what you want to say before a difficult conversation — not to read from, but to clarify your own thinking. Writing often surfaces problems with your framing that can be fixed before they cause damage in the conversation. Some people draft hard messages or letters they don't intend to send specifically to clarify what they actually think. The draft becomes prep work for the spoken conversation.`,
              audioPrompt: `Written preparation is the practice of writing out what you want to say before a difficult conversation — not to read from during the conversation, but to clarify your own thinking beforehand, {name}. The text identifies it as one specific practice that reliably improves difficult conversations. The writing often surfaces problems with your framing that you can fix before they cause damage in the actual exchange. You might discover that what felt like a clear grievance is actually three separate issues tangled together. You might notice that you are using character framings when you intend to use behavior framings. You might realize that your framing assumes motivations you don't actually know to be true. The writing reveals all of this before the conversation happens, when you still have time to adjust. Some people take this practice further and draft full messages or letters they do not intend to send — hard texts, difficult emails, letters to parents — specifically to clarify what they actually think. The draft becomes the preparation for the spoken conversation. Sending is optional; the clarifying effect of the writing happens regardless. A difficult conversation that you enter having done written preparation is a very different conversation from one you enter on impulse.`,
            },
          ],
        },

        {
          id: `l13-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Before You Analyze The Cases`,
          paragraphs: [
            `In the case study that follows, three people face different types of difficult conversation. Each has an intuitive approach and a research-informed approach. The intuitive approaches often default to either avoidance, character framing, or insisting on agreement; the research-informed approaches use the patterns from sections 3 and 4.`,
            `One framing as you work through the cases. Notice how often the research-informed move involves slowing down, being explicit about what's happening, and engaging with the feelings and identity layers in addition to the "what happened" layer. The slower path is usually the faster real path because it surfaces what's actually going on.`,
            `Another framing. The cases cover three different difficult-conversation types: peer-level conversation about treatment (someone is hurting you), peer-level concerned feedback (someone you care about is doing something harmful), and navigating up to authority (raising something with a parent, teacher, or coach). All three are common; they require slightly different applications of the framework.`,
            `One last framing. The skill of difficult conversations compounds across thousands of interactions over a lifetime. Most adults learn through trial and error, often picking up bad patterns along with good ones. Building explicit skill at 12 lets you skip much of the painful learning. Even modest improvements at this age compound dramatically by 30 because the differences apply across every relationship.`,
          ],
          image: `/voyager-assets/social-leadership/l13-s5-before.webp`,
          imageCaption: `Three difficult conversation types: peer treatment, concerned feedback, navigating up. Slower path is faster real path.`,
          vocab: [
            {
              word: `the slower-is-faster pattern`,
              definition: `Pattern across difficult-conversation research: taking time to set up, frame, and engage carefully often produces faster real resolution than rushing through. The fast path of just confronting usually escalates or produces surface agreement without real change. The slow path of explicit framing, observations not conclusions, owning contributions, and genuine curiosity usually produces actual understanding and change. Most experienced practitioners learn this pattern through accumulated experience.`,
              audioPrompt: `The slower-is-faster pattern in hard conversations refers to a pattern across difficult-conversation research, {name}. Taking time to set up, frame, and engage carefully often produces faster real resolution than rushing through. The fast path of just confronting usually escalates the situation or produces surface agreement without real change. The slow path of explicit framing, observations not conclusions, owning your contributions where they exist, and genuine curiosity usually produces actual understanding and behavior change. The pattern feels counterintuitive because rushing through feels efficient in the moment. But measured over the whole arc of resolving the situation, the slow path usually beats the fast path. Many difficult conversations fail because the initiator wanted to "just get it over with" and produced a fast bad conversation rather than investing in a slower good one. Most experienced practitioners learn this pattern through accumulated experience, often after enough situations where they rushed through and made things worse.`,
            },
            {
              word: `difficult conversation types`,
              definition: `Three types of difficult conversation covered in the case study. Peer-level conversation about treatment: someone is hurting you and you need to address it directly. Peer-level concerned feedback: someone you care about is doing something harmful and you want to say something. Navigating up to authority: raising a hard issue with a parent, teacher, or coach. All three are common in adolescence. They require slightly different applications of the same underlying framework.`,
              audioPrompt: `Difficult conversation types is the organizing structure for the case study section of this lesson, {name}. The text identifies three types that are all common and all require slightly different applications of the same underlying framework. The first type is the peer-level conversation about treatment: someone is hurting you — excluding you, treating you poorly, damaging the friendship — and you need to address it directly. The second type is peer-level concerned feedback: someone you care about is doing something harmful to themselves, and you want to say something even though they may not want to hear it. The third type is navigating up to authority: raising a hard issue with a parent, teacher, or coach who has formal power and can enforce decisions you don't control. All three appear in the case study with characters facing each. The same core framework applies across all three — explicit framing, observations not conclusions, sharing impact, genuine curiosity, distinguishing understanding from agreement — but each type has specific considerations. Navigating up requires particular attention to the power differential and specific-situation framing. Concerned feedback in serious situations requires knowing when to involve trusted adults rather than handling it alone. Peer treatment requires the full sequence of setup, observations, impact, and curiosity without defaulting to character framing.`,
            },
            {
              word: `compounding skill`,
              definition: `The principle that difficult-conversation skill compounds across thousands of interactions over a lifetime. Most adults learn through trial and error, often picking up bad patterns alongside good ones. Building explicit skill at 12 allows skipping much of the painful learning. Even modest improvements at this age compound dramatically by 30 because the differences apply across every relationship and professional interaction over those years.`,
              audioPrompt: `Compounding skill is the principle described in the final framing of this lesson's magazine section, {name}. The text states it directly: the skill of difficult conversations compounds across thousands of interactions over a lifetime. Most adults learn through trial and error — having difficult conversations, having some go badly, eventually figuring out what works and what doesn't. Often they pick up bad patterns alongside good ones, developing reflexes that work in some situations and fail in others. Building explicit skill at twelve means skipping much of that painful learning. You enter your teenage years with a working framework rather than having to discover it through repeated costly mistakes. The compounding happens because the differences apply across every relationship — friendships, family, romantic relationships, teams, professional relationships — over the years that follow. Even modest improvements are not modest in their effects; they repeat across thousands of interactions. The text's exact framing: modest improvements at this age compound dramatically by thirty because the differences apply across every relationship. The lesson's framing of skill development is not about one or two conversations; it is about who you become across the full arc of your social life.`,
            },
          ],
        },

        // ───── CASE STUDY ─────────────────────────────────────────────────────
        {
          id: `l13-case-study`,
          type: `case-study`,
          headline: `Three Difficult Conversation Situations`,
          intro: `{name}, three people face different types of difficult conversation. For each, identify what would actually serve them better.`,
          cases: [
            {
              id: `case-1`,
              title: `Peer Treatment: Friend Has Been Excluding You`,
              context: `One of your closest friends has been subtly excluding you over the past few weeks. Group chats you used to be in. Plans with the broader friend group. Activities that used to include you. Nothing dramatic, but the pattern is clear and it's been hurting. You need to talk to her. Your sister says "just confront her — tell her she's being a bad friend." What should you actually do?`,
              question: `What's the most useful approach to this conversation?`,
              options: [
                {
                  id: `case-1-opt-a`,
                  label: `Text her: "You've been a bad friend lately. You're always excluding me from things. You need to stop."`,
                  outcome: `This combines several failure modes. Character framing ("you've been a bad friend") puts her on identity defense rather than allowing specific change. Generalization ("always excluding me") triggers defensiveness about exceptions she'll find. Text format reduces the chance of real dialogue (no tone, no real-time response, easier to type something escalating). Demanding behavior change ("you need to stop") without surfacing what's actually happening on her end skips the genuine curiosity step. She'll probably respond defensively, list times she included you, and the friendship will damage further. Even if she agrees in the moment, you haven't built the understanding that would actually change anything.`,
                  isOptimal: false,
                },
                {
                  id: `case-1-opt-b`,
                  label: `Ask her if you can talk in person when you both have time. Frame it explicitly: "There's something I want to talk about and I want to do it right. Can we hang out at the park Saturday?" Then share observations not conclusions: "I noticed I wasn't in the chat about the movie last week, and I wasn't invited to Sarah's thing, and a few other things over the past few weeks. I'm probably reading more into it than I should, but I want to check in." Share the impact: "It's been hard because I value our friendship and I started worrying I'd done something wrong." Ask with genuine curiosity: "What's been going on for you?" Listen carefully. Don't insist on a particular interpretation.`,
                  outcome: `This is what difficult-conversation research supports. Explicit framing gives her warning to engage thoughtfully. In-person allows real dialogue. Observations (specific things you noticed) are harder to dismiss than conclusions ("you're excluding me"). Impact on you is hard for her to dismiss because you're the authority on your experience. Genuine curiosity surfaces what's actually been happening, which might be intentional exclusion, might be drift she didn't notice, might be something going on in her life you didn't know about. The conversation might surface real issues either way. Done well, this approach preserves the friendship while addressing the actual situation.`,
                  isOptimal: true,
                },
                {
                  id: `case-1-opt-c`,
                  label: `Don't say anything. Hope it gets better on its own. Maybe she's just busy.`,
                  outcome: `Avoidance is the most common failure mode. Sometimes situations do resolve themselves; usually they don't. The avoidance compounds: weeks of unaddressed exclusion build up resentment that eventually surfaces in worse ways than the original conversation would have been. The friendship slowly erodes while the underlying issue continues. By the time you do have the conversation, you're also addressing why you waited so long. Better to have the conversation when the pattern is recent and specific than to wait for it to become bigger and harder to address.`,
                  isOptimal: false,
                },
              ],
              insight: `This case illustrates a peer-level conversation about treatment. The intuitive moves (character framing confrontation, avoidance) both fail. The research-informed move (explicit framing, observations not conclusions, share impact, genuine curiosity, real-time dialogue) preserves the relationship while addressing the actual issue. Even if the conversation reveals she's been intentionally distancing, you'll know what you're dealing with rather than carrying ambiguity for months.`,
            },
            {
              id: `case-2`,
              title: `Concerned Feedback: Friend Is Doing Something Self-Destructive`,
              context: `Your best friend has been talking about how she barely eats anything and is proud of how little she weighs. She's clearly losing weight in a way that worries you. She doesn't think it's a problem; she thinks she's "finally getting healthy." You're worried this is becoming an eating disorder. You care about her deeply and you don't want to push her away by being preachy, but you also can't pretend nothing is wrong. What should you actually do?`,
              question: `What's the most useful approach?`,
              options: [
                {
                  id: `case-2-opt-a`,
                  label: `Confront her: "You have an eating disorder. You need help. This is serious."`,
                  outcome: `Direct confrontation usually backfires in this kind of situation. Diagnostic framing ("you have an eating disorder") puts her on identity defense; she'll probably reject the label even if it's accurate. Demanding she "needs help" without engaging her perspective triggers resistance. The intensity of the framing also signals you may not have thought through whether you're equipped for this conversation (this is genuinely a situation where professional support matters — you're 12, this is beyond what friends should be solving alone). Better to surface concern without diagnosing, and to involve trusted adults rather than carrying this entirely alone. Eating disorders are serious medical conditions; concerned friend conversations help but aren't substitute for adult/professional involvement.`,
                  isOptimal: false,
                },
                {
                  id: `case-2-opt-b`,
                  label: `Share your specific observations with care: "I've noticed you've been skipping meals more often and seem really focused on how little you're eating. I care about you and I'm worried." Share impact: "When you talk about not eating, it scares me — partly because I don't know enough about this to know if you're okay." Ask: "What's been going on for you with food lately?" Listen carefully. Don't argue with her framing. Then — importantly — tell a trusted adult (your parent, the school counselor, her parent if you have a good relationship with them). Eating disorders are serious medical conditions that require adult and professional support. You can be a good friend AND involve the adults who can actually help; both matter.`,
                  outcome: `This is what concerned-friend conversations and serious-situation handling both support. Specific observations (skipping meals, focus on small amounts) are concrete and hard to dismiss. Impact on you is honest. Genuine curiosity surfaces her actual experience. The conversation alone won't fix things — but it does communicate that you see what's happening and you care, which matters. Crucially, involving a trusted adult isn't betrayal; it's recognizing that some situations are beyond what friends should handle alone. Real friends in serious situations get the adults who can help involved. The combination of caring conversation AND adult involvement is what good friendship looks like here.`,
                  isOptimal: true,
                },
                {
                  id: `case-2-opt-c`,
                  label: `Don't say anything. You don't want to seem like you're judging her body or being weird. It's her business.`,
                  outcome: `Avoidance in this category of situation can be genuinely dangerous. Eating disorders escalate; early intervention matters significantly more than late intervention. The "I don't want to seem weird" framing is real but it's outweighed by the actual risks involved. The "it's her business" framing isn't quite right either — when someone is engaging in behavior that may be seriously harming them, caring people share concern even at the risk of being seen as intrusive. The right form of intervention is conversation plus involving adults, not direct confrontation, but pure silence isn't the right response to genuine concerning signals.`,
                  isOptimal: false,
                },
              ],
              insight: `This case illustrates concerned feedback for serious situations. The intuitive moves (direct diagnostic confrontation, complete silence) both fail. The research-informed move (specific observations with care, share impact, genuine curiosity, AND involve trusted adults) addresses both the friendship and the actual risk. Important pattern: some difficult conversations are beyond what friends should handle alone. Knowing when to involve trusted adults is part of mature friendship, not failure of it. Eating disorders, mental health crises, self-harm, abuse, and similar situations are categories where adult/professional involvement is essential alongside friend conversation.`,
            },
            {
              id: `case-3`,
              title: `Navigating Up: Raising Hard Issue With Parent`,
              context: `Your parents have a rule about phones: no phones in your room after 8pm. You generally accept this rule. But there's a specific situation: a friend going through something hard (parents divorcing) who texts you in the evenings when she needs support. You've been hiding your phone to keep it accessible, which feels wrong. You want to talk to your parents about possibly changing the rule for this specific situation. Your friend says "just keep hiding it, they don't need to know." What should you actually do?`,
              question: `What's the most useful approach?`,
              options: [
                {
                  id: `case-3-opt-a`,
                  label: `Keep hiding the phone. Your parents won't understand and the rule is unreasonable anyway. They'll just say no.`,
                  outcome: `This combines avoidance with deception. Even if your parents would say no (which you don't actually know, you haven't asked), continuing to hide the phone produces real costs: stress from sneaking, vulnerability if discovered, and the bigger pattern of deciding to deceive parents on the assumption they wouldn't agree. Building this pattern at 12 makes future communication harder. Also, the assumption that they'd say no may be wrong — many parents respond well to specific reasoned requests even when they'd say no to general rule-loosening. Avoidance doesn't preserve the rule; it prevents the conversation that might change it appropriately.`,
                  isOptimal: false,
                },
                {
                  id: `case-3-opt-b`,
                  label: `Ask for a specific time to talk: "Mom/Dad, I want to talk about something important when you have a few minutes." When you have their attention, explain specifically: "I want to ask about a possible exception to the phone-in-room rule. My friend [name] has been having a really hard time with her parents' divorce, and she texts me in the evenings when she's struggling. I've actually been hiding my phone to be available for her, which feels wrong. I'd rather have the conversation with you about whether there could be a specific exception for this situation, or some other way to handle it that works for both of us." Share what you've thought about: maybe phone in shared family room rather than bedroom, maybe specific limited hours, maybe you check in with parents about when you're talking with her. Listen to their response carefully.`,
                  outcome: `This is what navigating-up research supports. Asking for specific time signals importance and respect. Specific situation rather than general rule complaint gives them something concrete to engage with. Honesty about what you've been doing wrong (hiding the phone) demonstrates maturity and builds trust rather than damaging it. Offering possible solutions shows you've thought about their concerns, not just your wants. Genuine engagement with their response respects their authority while inviting them to engage with you as a thoughtful person. Even if they say no, you've handled the situation maturely AND given them information they need (that you were hiding the phone) so the deception ends. Most parents respond better to honest specific conversations than to either continued deception or general complaints about rules.`,
                  isOptimal: true,
                },
                {
                  id: `case-3-opt-c`,
                  label: `Get angry: "Your rule is unfair! You don't understand! My friend needs me!" Make sure they know how much you disagree.`,
                  outcome: `Emotional confrontation usually backfires when navigating up to parents. Framing it as unfairness puts them on defense about the rule rather than engaging with your specific situation. "You don't understand" usually makes adults less willing to engage; they often have understandings the speaker hasn't considered. Performative anger ("make sure they know how much you disagree") signals immaturity, which makes parents less likely to grant exceptions or change rules. The combination of approaches usually produces worse outcomes than calm specific conversation would have.`,
                  isOptimal: false,
                },
              ],
              insight: `This case illustrates navigating up to authority figures. The intuitive moves (continued deception, emotional confrontation) both fail. The research-informed move (specific time, specific situation, honesty about your behavior including what's been wrong, offering thought-out solutions, genuine engagement with their response) handles the situation maturely. Parents who feel respected and engaged with rather than challenged or deceived usually become more flexible over time; parents who feel disrespected or deceived become less flexible. The way you handle navigating up shapes how much flexibility you get going forward.`,
            },
          ],
          reflectionPrompt: `All three cases share patterns: explicit framing, observations not conclusions, share impact, genuine curiosity, distinguish understanding from agreement, follow through. Which case felt most personally relevant?`,
        },

        {
          id: `l13-quiz`,
          type: `quiz`,
          headline: `Check your understanding`,
          questions: [
            {
              id: `q1`,
              type: `multiple-choice`,
              question: `What is the "three conversations framework" (Stone, Patton, Heen)?`,
              options: [
                `Random framework`,
                `From "Difficult Conversations" (1999): three layers happening simultaneously in any difficult exchange: "what happened" (who did what), "feelings" (what each side is experiencing emotionally), "identity" (what this means about who each person is); most people focus only on "what happened" and treat others as distractions, which makes conversations harder`,
                `Three speakers`,
                `Three steps`,
              ],
              correctIndex: 1,
              explanation: `The other two conversations are happening whether you address them or not. Pretending the feelings conversation isn't happening doesn't make feelings go away; it just makes them operate outside your awareness. The skill is engaging with all three rather than only one.`,
            },
            {
              id: `q2`,
              type: `multiple-choice`,
              question: `What's the distinction between "silence" and "violence" failure modes (Crucial Conversations)?`,
              options: [
                `Same thing`,
                `From Patterson et al's "Crucial Conversations" (2002): when stakes are high, opinions differ, emotions run strong, most people switch to silence (avoiding the conversation or saying nothing meaningful) or violence (verbal attacks, manipulation, escalation); both prevent real dialogue; skill is staying in dialogue when both failure modes are tempting`,
                `Loud vs quiet`,
                `Random pattern`,
              ],
              correctIndex: 1,
              explanation: `Most people use both failure modes in different situations rather than always one. Recognizing which mode you default to in which situations is the first step in developing the alternative skill of staying in dialogue.`,
            },
            {
              id: `q3`,
              type: `multiple-choice`,
              question: `What's the difference between "behavior framing" and "character framing"?`,
              options: [
                `Same thing`,
                `Behavior framing: "When you did X, I felt Y" gives specific actions and impacts; character framing: "You're a selfish person" or "You always do this" diagnoses the other person's identity; behavior framings allow specific change, character framings put the other person on identity defense; one of the most reliable distinctions across difficult-conversation research`,
                `Random distinction`,
                `Doesn't matter`,
              ],
              correctIndex: 1,
              explanation: `"I'm not a selfish person!" is the natural response to "You're so selfish." From there the conversation is about defending versus attacking identity rather than addressing the actual problem. The skill is catching yourself before slipping into character framings, even when frustrated.`,
            },
            {
              id: `q4`,
              type: `multiple-choice`,
              question: `What are the major failure modes in difficult conversations?`,
              options: [
                `Random list`,
                `Avoidance (not having it at all); wrong moment (when emotions are already high); character framing (not behavior); bringing receipts (listing every example); insisting on agreement (treating conversation as failed without full concession); not following through (failing to address continued behavior)`,
                `Being rude`,
                `Being soft`,
              ],
              correctIndex: 1,
              explanation: `Each failure mode has a specific corresponding skill. Recognizing the patterns in advance helps you avoid them. Most people use several of these reflexively without realizing the cost.`,
            },
            {
              id: `q5`,
              type: `multiple-choice`,
              question: `What does "explicit framing" mean for difficult conversations?`,
              options: [
                `Strict rules`,
                `Practice of openly naming that a difficult conversation is happening rather than sneaking up on the topic: "I want to talk about something that's been on my mind." Gives the other person warning to engage rather than be ambushed; respects timing; signals intentional and important; counterintuitively often reduces defensiveness by removing surprise element`,
                `Just talking`,
                `Random practice`,
              ],
              correctIndex: 1,
              explanation: `Many failed difficult conversations involve one party ambushing the other with topics they weren't prepared for. Explicit framing prevents this. People often mirror the spirit of how a conversation is opened.`,
            },
            {
              id: `q6`,
              type: `multiple-choice`,
              question: `What's the distinction between understanding and agreement?`,
              options: [
                `Same thing`,
                `You can understand someone's perspective without agreeing with it: "I understand why X felt important to you AND I still think Y." Treating them as the same prevents real dialogue because people refuse to understand positions they disagree with, fearing it means conceding. Skilled practice: understand deeply while maintaining own position`,
                `Just words`,
                `Different concepts`,
              ],
              correctIndex: 1,
              explanation: `Holding both understanding and maintaining your own position is the skill. Most people drift toward either understanding without maintaining (conceding) or maintaining without understanding (defending). Both fail at real dialogue.`,
            },
            {
              id: `q7`,
              type: `multiple-choice`,
              question: `Why does the "slower-is-faster" pattern apply to hard conversations?`,
              options: [
                `Random claim`,
                `Taking time to set up, frame, and engage carefully often produces faster real resolution than rushing; fast path of just confronting usually escalates or produces surface agreement without real change; slow path of explicit framing, observations not conclusions, owning contributions, genuine curiosity produces actual understanding and change`,
                `Patience is virtue`,
                `Slow always better`,
              ],
              correctIndex: 1,
              explanation: `The pattern feels counterintuitive because rushing through feels efficient in the moment. But measured over the whole arc of resolving the situation, the slow path usually beats the fast path. Most experienced practitioners learn this through accumulated experience.`,
            },
            {
              id: `q8`,
              type: `multiple-choice`,
              question: `When should friends involve adults in concerning friend situations?`,
              options: [
                `Never`,
                `When the situation involves potential serious harm: eating disorders, mental health crises, self-harm, abuse, and similar; some difficult conversations are beyond what friends should handle alone; knowing when to involve trusted adults is part of mature friendship, not failure of it`,
                `Always immediately`,
                `Never tell anyone`,
              ],
              correctIndex: 1,
              explanation: `Real friends in serious situations get the adults who can help involved. The combination of caring conversation AND adult involvement is what good friendship looks like for serious risks. Eating disorders are serious medical conditions; concerned friend conversations help but aren't substitute for adult/professional involvement.`,
            },
            {
              id: `q9`,
              type: `true-false`,
              question: `True or false: A successful difficult conversation should end with the other person fully agreeing and apologizing.`,
              correctAnswer: false,
              explanation: `False. Many difficult conversations end without full agreement; some end with the other person needing time to process. Demanding immediate agreement often prevents the slower acknowledgment that would otherwise come. The right outcome is usually shared understanding plus changed behavior, not the other person agreeing you were entirely right.`,
            },
            {
              id: `q10`,
              type: `inference`,
              question: `Your friend says "I need to tell my friend she's been a terrible friend. I'm going to text her right now and tell her exactly what I think." Based on this lesson, what should you point out?`,
              options: [
                `"Good plan"`,
                `"That approach combines several failure modes that usually backfire. Character framing ('terrible friend') puts her on identity defense rather than allowing specific change. Text format reduces real dialogue (no tone, easier to escalate). Doing it 'right now' while you're upset usually makes things worse. Try instead: ask for in-person time when you both have capacity ('I want to talk about something — when's a good time?'). Share specific observations not conclusions ('I noticed I wasn't in the chat last week, and...'). Share impact on you ('It's been hard because I value our friendship'). Ask with genuine curiosity ('what's been going on?'). Listen carefully. The slower path of explicit framing and real dialogue usually produces better outcomes — actual understanding and behavior change — than character-framing confrontation does."`,
                `"Don't do it"`,
                `"She's wrong"`,
              ],
              correctIndex: 1,
              explanation: `Real applied difficult-conversation literacy. Don't dismiss the friend's feelings; redirect from the failure-mode approach to specific research-informed alternatives. Give specific guidance on what to do instead. This is the kind of advice that can transform how friendships handle conflict.`,
            },
          ],
        },

        {
          id: `l13-reflection`,
          type: `reflection`,
          headline: `Sit with this`,
          intro: `Pick the prompt that pulls at you most. Your answer is saved.`,
          prompts: [
            { id: `reflect-cognitive`, category: `Cognitive`, prompt: `Before this lesson, did you have explicit frameworks for difficult conversations? Has anything shifted?` },
            { id: `reflect-meta`, category: `Metacognitive`, prompt: `Honestly: which failure mode do you default to (avoidance, character framing, insisting on agreement, etc.)? What does that produce?` },
            { id: `reflect-identity`, category: `Identity`, prompt: `If you become someone who can have any difficult conversation skillfully across a lifetime, what does that change about the relationships you can sustain and the leadership you can offer?` },
            { id: `reflect-application`, category: `Application`, prompt: `Pick one current difficult conversation you've been avoiding. Apply the framework. What would the actual conversation look like?` },
            { id: `reflect-critical`, category: `Critical`, prompt: `Are there difficult conversations where these frameworks don't apply well? What about conversations with people in active crisis? Conversations across deep cultural difference?` },
            { id: `reflect-personal`, category: `Personal investigation`, prompt: `Ask an adult about a difficult conversation they wish they'd had differently. What would they do differently now?` },
          ],
        },

        {
          id: `l13-real-world`,
          type: `real-world`,
          headline: `Take it into your life`,
          guideContext: `Difficult conversation skill compounds across thousands of interactions over a lifetime. Two paths.`,
          familyActivity: {
            title: `The Family Difficult Conversation Practice`,
            duration: `60 minutes`,
            description: `Share the framework. Then practice with a low-stakes situation: a family member picks a small thing they've wanted to bring up but haven't. Use the framework: explicit framing, observations not conclusions, share impact, genuine curiosity. The practice is awkward at first but builds capability for real difficult conversations. Many families discover that several small avoided conversations have been accumulating; surfacing them in a structured practice setting reduces the overall load.`,
          },
          projectOption: {
            title: `Read "Difficult Conversations" (Stone/Patton/Heen) or "Crucial Conversations" (Patterson et al), 4 weeks (optional)`,
            duration: `4 weeks, ~30 minutes per session`,
            description: `Pick one: Stone, Patton, and Heen's "Difficult Conversations" (1999, foundational Harvard Negotiation Project book) or Kerry Patterson et al's "Crucial Conversations" (2002, more action-oriented). Both accessible at 12 with attention. Apply concepts to conversations in your life during the reading period. Write 1,500 words on what you learned. Real applied difficult-conversation skill at 12 is rare and valuable.`,
            offerToParent: `Parent: opt your kid into this project. Reading real difficult-conversation literature at 12 produces durable capability.`,
          },
          identityQuestion: `If you become someone who can have any difficult conversation skillfully across thousands over a lifetime, preserving relationships while addressing real issues: what does that change about the depth of relationships you can have and the leadership you can offer?`,
        },

        {
          id: `l13-identity-hook`,
          type: `identity-hook`,
          headline: `Who is this lesson making you?`,
          prompt: `One sentence. No wrong answer.`,
          placeholder: `Someone who...`,
          examples: [
            `Someone who frames difficult conversations explicitly rather than sneaking up on the topic.`,
            `A person who can distinguish understanding from agreement.`,
            `Someone who shares observations rather than conclusions in hard conversations.`,
          ],
          saveKey: `identity_responses_sl_11_12_13`,
        },

        {
          id: `l13-celebration`,
          type: `celebration`,
          guideText: `{name}. Thirteenth Social Leadership lesson done. You now have the three conversations framework (Stone, Patton, Heen), the dialogue-vs-silence-or-violence pattern (Patterson et al), specific failure modes and corresponding skills, and the setup practices that make difficult conversations actually work. You can navigate peer treatment issues, concerned feedback for friends, and conversations with authority figures. The skill compounds across thousands of interactions. Next time we go into reading actual power dynamics in groups. Sort 9 scenarios. Investigation Game format. Let's go. — Valor`,
          badge: `hard-conversation-skilled`,
          badgeName: `Hard Conversation Skilled`,
          xpEarned: 75,
          competencies: [
            `Knows the three conversations framework (Stone, Patton, Heen)`,
            `Distinguishes silence vs violence failure modes (Patterson et al)`,
            `Distinguishes behavior framing from character framing`,
            `Recognizes when situations are beyond friend conversation and require adult involvement`,
            `Can apply framework to peer treatment, concerned feedback, and navigating up situations`,
          ],
          nextLessonPreview: {
            title: `Lesson 14: Power Dynamics in Groups`,
            hook: `Sort 9 scenarios. Investigation Game.`,
          },
        },
      ],
    },
  ],
};

export default SOCIALLEADERSHIP_VOYAGER_L13;

if (import.meta.env?.DEV) {
  const l = SOCIALLEADERSHIP_VOYAGER_L13.lessons[0];
  const mags = l.screens.filter((s) => s.type === `magazine`).length;
  const caseStudy = l.screens.find((s) => s.type === `case-study`);
  const quiz = l.screens.find((s) => s.type === `quiz`)?.questions?.length ?? 0;
  const reflect = l.screens.find((s) => s.type === `reflection`)?.prompts?.length ?? 0;
  console.log(
    `[LESSON-SL-VOYAGER-L13 ${VERSION}] "${l.title}" — ${mags} magazine, case-study w/ ${caseStudy?.cases?.length ?? 0} cases, ${quiz} quiz, ${reflect} reflection`
  );
}
