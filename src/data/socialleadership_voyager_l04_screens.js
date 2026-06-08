// ─────────────────────────────────────────────────────────────────────────────
// SOCIAL LEADERSHIP VOYAGER  |  L04 — Listening as Leadership
// Age band : voyagers (11-12)   Guide: valor (Lion)
// Standards: Coreverse Original — Communication Research, Applied Leadership
// CALIBRATED: Voyager spec v1.1 (May 2026)
// Interaction format: CASE STUDY (three listening-as-leadership scenarios)
// ─────────────────────────────────────────────────────────────────────────────

const VERSION = "voyager-sl-l04-v1";

const SOCIALLEADERSHIP_VOYAGER_L04 = {
  ageBand: `voyagers`,
  subjectId: `social-leadership`,
  guide: `valor`,

  lessons: [
    {
      id: `sl-11-12-04`,
      title: `Listening as Leadership`,
      duration: 35,
      xpReward: 75,
      badge: `deep-listener`,
      badgeName: `Deep Listener`,

      screens: [
        {
          id: `l04-welcome`,
          type: `welcome`,
          guideText: `{name}, listening sounds passive. It isn't. Real listening is one of the highest-leverage leadership skills available, and most people do it badly without realizing. The default mode for most conversations is waiting to talk rather than actually listening. The leader who can listen genuinely gets access to information, perspectives, and relationships that non-listeners miss entirely. They also build trust faster because being truly heard is rare in most people's lives. Today we work through three situations where listening matters most: a friend confiding something hard, a group disagreement, and receiving feedback you don't want to hear. The case studies show what listening actually looks like and what it produces. By the end you'll have a working framework you can apply in any leadership situation across your lifetime.`,
          headline: `Listening as Leadership`,
          subtitle: `Sounds passive. Isn't. One of the highest-leverage leadership skills.`,
          visual: `/voyager-assets/social-leadership/l04-welcome.webp`,
        },

        {
          id: `l04-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `What Real Listening Actually Is`,
          paragraphs: [
            `Real listening is sustained attention to another person aimed at understanding what they actually mean rather than what you want them to mean. It involves quieting your own internal commentary, suspending your responses, and taking in what the other person is saying with genuine curiosity. Carl Rogers, a psychologist whose work in the 1950s shaped how listening is taught today, called this "unconditional positive regard" combined with "accurate empathic understanding." The person feels both accepted and genuinely understood.`,
            `What real listening isn't. It isn't waiting for your turn to talk. It isn't planning your response while the other person finishes. It isn't preparing rebuttals to what they're saying. It isn't using the time to think of related stories you can share. It isn't trying to solve the problem the person is describing before you've understood what they actually mean. All of these are normal default modes; they're not listening.`,
            `Research on listening across many fields (therapy, negotiation, education, management) has consistently shown that real listening produces specific effects. People share more accurate information when they feel heard. They generate better ideas through being asked questions and given space rather than being lectured. They feel safer in groups where leaders listen. They develop more trust with people who listen than with people who advise. The effects are real, measurable, and compound across thousands of conversations over a leadership career.`,
            `Kate Murphy, a journalist who spent years researching listening, found in her 2020 book "You're Not Listening" that almost everyone overestimates how well they listen. We tend to remember moments when we listened well and forget the many moments when we were just waiting to talk. Real listening is a skill that requires practice, attention, and honest feedback about what we're actually doing rather than what we think we're doing.`,
          ],
          image: `/voyager-assets/social-leadership/l04-s1-real.webp`,
          imageCaption: `Real listening: sustained attention aimed at understanding what they actually mean. Different from waiting to talk. Skill, not default.`,
          vocab: [
            {
              word: `active listening`,
              definition: `Listening approach developed by psychologist Carl Rogers in the 1950s as part of his client-centered therapy. Involves giving full attention, reflecting back what you heard to verify understanding, asking questions for clarification, suspending judgment, and showing the speaker they're genuinely heard. Foundational concept in modern communication training across many fields.`,
              audioPrompt: `Active listening is a listening approach developed by psychologist Carl Rogers in the 1950s as part of his client-centered therapy, {name}. Involves giving full attention to the speaker, reflecting back what you heard to verify understanding, asking questions for clarification, suspending your own judgment temporarily, and showing the speaker through your behavior that they're genuinely heard. Rogers identified two specific qualities as essential. Unconditional positive regard: accepting the speaker without judgment about whether what they're saying is right or wrong. Accurate empathic understanding: trying to actually understand what they're experiencing from their perspective rather than how you'd interpret it. Both qualities together produce the experience of being deeply heard. Active listening has become foundational in modern communication training across many fields including therapy, negotiation, education, conflict resolution, and management. The skills are learnable through practice and honest feedback.`,
            },
            {
              word: `unconditional positive regard`,
              definition: `Term from Carl Rogers's client-centered therapy. Accepting the speaker without judgment about whether what they're saying is right or wrong, as a precondition for genuine listening. Not agreement with what they say, but temporary suspension of evaluative judgment so you can genuinely understand their perspective. When people feel judged while speaking, they self-censor the most important things they need to say.`,
              audioPrompt: `Unconditional positive regard is a term from Carl Rogers's client-centered therapy, {name}. It means accepting the speaker without judgment about whether what they're saying is right or wrong — as a precondition for genuine listening. Not agreement with what they say. Not endorsement. Temporary suspension of your evaluative judgment so you can genuinely understand their perspective before you evaluate it. Rogers found this quality essential to real therapeutic listening. The same principle applies in leadership conversations. When people feel judged while speaking, they self-censor. They avoid the topics that matter most, because those are the topics where they feel most vulnerable to judgment. A listener who manages to hold back the judgment — who receives what's said without visibly evaluating or critiquing — gets access to the real content that a judgmental listener never reaches. The listener's internal state matters: if you're judging internally while performing neutrality externally, people often sense it. The skill involves genuinely suspending judgment temporarily, not just performing suspension.`,
            },
            {
              word: `empathic understanding`,
              definition: `The attempt to understand what another person is experiencing from their perspective rather than how you would interpret it through yours. A component of Carl Rogers's active listening framework. Distinguished from sympathy (feeling sorry for them) and from agreement (accepting their view). Empathic understanding means trying to inhabit their frame of reference temporarily to understand what things look like from inside their experience.`,
              audioPrompt: `Empathic understanding is the attempt to understand what another person is experiencing from their perspective rather than how you would interpret it through yours, {name}. A component of Carl Rogers's active listening framework. Distinguished from sympathy — feeling sorry for them — and from agreement — accepting that their view is correct. Empathic understanding means trying to inhabit their frame of reference temporarily to understand what things look like from inside their experience. You set aside how you would feel in their situation, or how you think they should feel, and genuinely try to understand how they actually do feel and why. The skill is harder than it sounds because we naturally interpret others through our own frameworks. What seems obviously a minor problem to you might be a significant one to them for reasons you haven't understood yet. Empathic understanding is what makes reflection back useful: you can only reflect back accurately what someone said if you understood it from their perspective rather than filtering it through your own.`,
            },
          ],
        },

        {
          id: `l04-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Why Listening Is Hard (And Why Leaders Especially Struggle)`,
          paragraphs: [
            `If listening is so powerful, why don't more people do it well? Several specific patterns make listening harder than it seems.`,
            `First: cognitive interference. Your brain runs at roughly 400 words per minute of thinking while people speak at roughly 125-150 words per minute. The gap leaves significant cognitive resources free. The natural tendency is to use that capacity for internal commentary, planning responses, and mental wandering rather than for deeper attention to what's being said. Real listening requires deliberately directing that extra capacity toward understanding rather than letting it wander.`,
            `Second: emotional reactivity. When the speaker says something that triggers an emotional response in you (disagreement, defensive feelings, judgment), the emotion redirects your attention from understanding to responding. You begin processing your reaction rather than continuing to take in their meaning. Real listening requires noticing the emotional reaction and choosing to continue listening rather than mentally switching to response mode.`,
            `Third: status considerations. People in leadership positions often feel pressure to demonstrate value through speaking rather than listening. The unspoken assumption: leaders provide answers; listeners receive them. This is backwards. The most effective leaders across many domains listen more than they speak, especially in early conversations. But the cultural pressure to perform leadership through talking is real and strong.`,
            `Fourth: solution orientation. Many capable people are wired to solve problems quickly. When someone shares a problem, the instinct is to start solving immediately. This is sometimes useful but often counterproductive: the person may need to be heard first, may know what to do but need help processing, or may have a different problem from what you assume. Premature problem-solving short-circuits real understanding.`,
            `Fifth: confirmation bias in listening. You tend to hear what fits your existing model of the person and situation. Information that doesn't fit gets filtered out or misinterpreted. The person notices when you're hearing them through your assumptions rather than taking in what they're actually saying. Real listening requires noticing your assumptions and being willing to update them based on what you actually hear.`,
            `Recognizing these patterns is the first step in overcoming them. Each one has specific techniques to address it. The composite skill of real listening involves managing all five.`,
          ],
          image: `/voyager-assets/social-leadership/l04-s2-hard.webp`,
          imageCaption: `Why listening is hard: cognitive interference, emotional reactivity, status pressure, solution orientation, confirmation bias.`,
          vocab: [
            {
              word: `cognitive interference`,
              definition: `Pattern where your own internal thoughts compete with attention to the speaker. Your brain runs at ~400 words per minute while speech is ~125-150 wpm; the gap leaves capacity that drifts toward internal commentary, planning responses, and mental wandering. Real listening requires deliberately directing that extra capacity toward deeper understanding rather than letting it wander.`,
              audioPrompt: `Cognitive interference in listening is the pattern where your own internal thoughts compete with attention to the speaker, {name}. Your brain runs at roughly 400 words per minute of thinking while people speak at roughly 125 to 150 words per minute. The gap leaves significant cognitive resources free. The natural tendency is to use that capacity for internal commentary, planning what you'll say next, mental wandering, or related distractions rather than for deeper attention to what's actually being said. The pattern explains why listening is harder than it appears: your brain is partly idle during conversation and naturally drifts. Real listening requires deliberately directing that extra cognitive capacity toward understanding rather than letting it wander. Specific techniques include silently noting key points the speaker is making, generating questions about what you're hearing, and actively trying to understand the perspective behind their words. These uses of your extra capacity support listening rather than competing with it.`,
            },
            {
              word: `emotional reactivity`,
              definition: `One of the five barriers to real listening. When a speaker says something that triggers an emotional response — disagreement, defensiveness, judgment — the emotion redirects attention from understanding to responding. You begin processing your reaction rather than continuing to take in their meaning. Real listening requires noticing the emotional reaction and choosing to continue listening rather than mentally switching to response mode.`,
              audioPrompt: `Emotional reactivity is one of the five barriers to real listening, {name}. When the speaker says something that triggers an emotional response in you — disagreement, defensive feelings, judgment about what they're saying — the emotion redirects your attention from understanding to responding. You begin processing your reaction rather than continuing to take in their meaning. The conversation in your head takes over the conversation in the room. This pattern is particularly strong when the speaker says something that challenges your identity, contradicts your view, or makes you feel criticized. Noticing that you've shifted from listening to reacting is the first step. The second is choosing to continue listening rather than switching into response mode. This is harder than it sounds because emotions create urgent pressure. The technique: notice the reaction, name it internally ("I'm feeling defensive right now"), and make a deliberate choice to keep listening before you respond. After you've fully understood, you can respond from a more considered position rather than from the reactive state.`,
            },
            {
              word: `solution orientation`,
              definition: `One of the five barriers to real listening. The pattern of capable people who are wired to solve problems quickly: when someone shares a problem, the instinct is to start solving immediately. This short-circuits real understanding because the person may need to be heard first, may know what to do but need help processing, or may have a different problem from what you're assuming. Premature problem-solving often makes people feel less heard rather than more helped.`,
              audioPrompt: `Solution orientation is one of the five barriers to real listening, {name}. The pattern of capable people who are wired to solve problems quickly. When someone shares a problem, the instinct is to start generating solutions immediately — you want to help, and helping means fixing. The problem with this instinct is that it short-circuits real understanding. The person may need to be heard first before they're ready for solutions. They may already know what to do but need help processing their feelings about it. They may have a different problem from what you assumed in the first two sentences. Jumping to solutions before fully understanding usually produces solutions to the wrong problem, which the speaker then has to politely redirect, leaving both parties frustrated. The skill is recognizing the solution-building impulse when it activates — you'll notice your mind starting to generate options — and deliberately waiting until you've fully understood the actual situation. Then asking "Would it be helpful if I shared some thoughts?" before offering solutions.`,
            },
          ],
        },

        {
          id: `l04-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `What Listening Actually Produces`,
          paragraphs: [
            `The effects of real listening have been studied across many fields and the patterns are consistent. Knowing what listening produces helps motivate the practice when it feels slower than just talking.`,
            `First effect: better information. People share more accurate information when they feel heard. They share more sensitive information when they feel safe. They share information they didn't initially know they had once questions surface it. Leaders who listen well have access to the underlying reality of their groups in ways non-listeners miss entirely. This compounds: better information produces better decisions, which produces better outcomes, which builds the leader's reputation, which makes people share even more.`,
            `Second effect: better ideas from others. When you ask questions and give space rather than lecturing or directing, people generate their own ideas more freely. Many people have valuable insights they don't share unless prompted in a way that invites them. Marshall Rosenberg's Nonviolent Communication work and Otto Scharmer's "generative listening" research both emphasize this: real listening creates the conditions for ideas to emerge that wouldn't otherwise.`,
            `Third effect: trust building. As covered in L03, trust grows through specific behaviors over time. Being genuinely listened to is rare enough in most people's lives that the experience builds significant trust capital quickly. People remember leaders who listened to them years afterward. The trust compounds across hundreds of interactions over a leadership career.`,
            `Fourth effect: reduced resistance. Many situations leaders treat as resistance are actually expressions of unaddressed concerns. When people feel heard, their resistance often drops dramatically because the underlying concern has been acknowledged. Pushing harder usually escalates resistance; listening usually dissolves much of it. Chris Voss's hostage negotiation work makes this concrete: even people in extreme situations respond to feeling genuinely heard.`,
            `Fifth effect: conflict prevention and resolution. Many conflicts emerge from misunderstanding compounded over time. Listening earlier prevents misunderstandings from becoming entrenched. Listening during conflict often surfaces the actual disagreement (which is usually different from the surface dispute). Real listening doesn't make all conflicts disappear, but it dissolves many that would have otherwise required harder intervention.`,
            `Sixth effect: deeper relationships. People share more of themselves with people who genuinely listen. The relationships that develop become richer, more honest, and more durable. Leadership effectiveness depends heavily on the quality of relationships with people you lead; relationships built through listening tend to outlast those built through performance.`,
            `The effects compound. Each one builds on the others. A leader who develops real listening as a habit over years accumulates information, ideas, trust, reduced friction, and relationships that produce capability well beyond what equivalent talking or directing would produce.`,
          ],
          image: `/voyager-assets/social-leadership/l04-s3-produces.webp`,
          imageCaption: `What listening produces: better information, better ideas, trust, reduced resistance, conflict resolution, deeper relationships. Compounds over time.`,
          vocab: [
            {
              word: `generative listening`,
              definition: `Listening approach developed by Otto Scharmer at MIT, beyond active listening. Generative listening creates conditions for new ideas, insights, and possibilities to emerge through the conversation that didn't exist before. Requires deep presence, willingness to be changed by what you hear, and suspension of preconceptions. Distinguished from "downloading" (only hearing what confirms existing views) and "factual listening" (hearing data without engagement).`,
              audioPrompt: `Generative listening is a listening approach developed by Otto Scharmer at MIT, {name}. Distinguishes itself from earlier listening frameworks by emphasizing what listening can create rather than just what it can receive. Generative listening creates conditions for new ideas, insights, and possibilities to emerge through the conversation that didn't exist before the conversation began. Requires deep presence, willingness to be changed by what you hear, and suspension of preconceptions about where the conversation might go. Scharmer distinguished four levels of listening. Downloading: only hearing what confirms what you already think. Factual listening: hearing accurate data but without deeper engagement. Empathic listening: feeling what the other person is feeling. Generative listening: opening to something new emerging from the conversation that neither party brought to it initially. The fourth level is rare but produces outsized creative and relational results. Building toward generative listening is part of mature leadership practice.`,
            },
            {
              word: `reduced resistance`,
              definition: `One of the major effects of real listening. Many situations leaders treat as resistance are actually expressions of unaddressed concerns. When people feel heard, their resistance often drops dramatically because the underlying concern has been acknowledged. Pushing harder typically escalates resistance; listening typically dissolves much of it. The pattern appears consistently across conflict research, negotiation research, and leadership research.`,
              audioPrompt: `Reduced resistance is one of the major effects of real listening, {name}. Many situations leaders treat as resistance — pushback, noncompliance, disengagement — are actually expressions of unaddressed concerns. The person isn't resistant because they're difficult; they're resistant because they feel unheard. When people feel genuinely heard, their resistance often drops dramatically. The underlying concern has been acknowledged, and the felt need to keep pushing against the leader's direction softens. Pushing harder in the face of resistance typically escalates it — the person digs in more, feeling both unheard and pressured. Listening typically dissolves much of it. Chris Voss's hostage negotiation work makes this concrete: even people in extreme situations respond to feeling genuinely heard. Once they feel heard, they become more open to considering other options. The same pattern at lower stakes: the teammate who seemed resistant to your idea often just needed you to actually listen to their concern before they could hear yours.`,
            },
            {
              word: `conflict prevention`,
              definition: `One of the effects of real listening. Many conflicts emerge from misunderstanding compounded over time — what started as a small miscommunication grows into an entrenched dispute as each party interprets subsequent interactions through their growing negative frame. Real listening earlier prevents these misunderstandings from becoming entrenched and surfaces the actual disagreement before it has grown layers of accumulated grievance. Listening during conflict often reveals the actual disagreement is different from the surface dispute.`,
              audioPrompt: `Conflict prevention through listening is one of the effects of real listening identified consistently across research, {name}. Many conflicts emerge from misunderstanding compounded over time. What started as a small miscommunication grows into an entrenched dispute as each party interprets subsequent interactions through their growing negative frame. Person A says something that Person B interprets as dismissive. Person B responds in a way that seems hostile to Person A. Both parties are now in a conflict that neither intended, built on a foundation of misunderstanding that listening earlier could have prevented. Real listening earlier in relationships and situations prevents many of these misunderstandings from becoming entrenched. And listening during conflict often surfaces the actual disagreement — which is usually different from the surface dispute. The argument about whose turn it is often has a deeper disagreement about fairness underneath. The argument about the project approach often has a disagreement about whose judgment is respected underneath. Real listening doesn't make all conflicts disappear, but it dissolves many that would have required harder intervention.`,
            },
          ],
        },

        {
          id: `l04-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Listening Techniques That Actually Work`,
          paragraphs: [
            `Real listening can be developed through specific techniques. Most of them are simple to describe and harder to actually do, but consistent practice builds the skill over time.`,
            `Technique 1: reflect back what you heard. After someone shares something significant, briefly say back what you understood in your own words. "It sounds like you're frustrated because X happened and you felt Y about it." The reflection serves three functions: it confirms your understanding, it shows the person they were heard, and it surfaces misunderstandings before they compound. This technique alone, used consistently, transforms conversations.`,
            `Technique 2: ask open questions. "Tell me more about that." "What's happening for you?" "What does that look like specifically?" "What would help?" Open questions invite the speaker to share more without directing them toward your assumptions. Closed questions (yes/no, or asking for specific information) have their place, but listening especially benefits from open questions that give the speaker space to develop their thinking.`,
            `Technique 3: tolerate silence. Most people fill silence with their own talking because silence feels uncomfortable. But silence often produces the most valuable parts of conversation. The speaker uses it to think, often arriving at deeper points they wouldn't have reached if you'd filled the space. Skilled listeners deliberately let silence happen and use it as a tool. This is one of the harder techniques to practice because the impulse to fill silence is strong.`,
            `Technique 4: notice and name emotion. "It sounds like that's really frustrating." "You seem to be carrying a lot of weight on this." Naming emotion you observe (without insisting on it if you're wrong) shows the speaker you're paying attention to more than just their words. Chris Voss calls this "tactical empathy" and considers it one of the highest-leverage techniques in hostage negotiation. The same technique works in everyday leadership conversations.`,
            `Technique 5: resist the urge to share related stories. When someone shares something, the natural impulse is to say "the same thing happened to me" and share your own version. This usually doesn't help the speaker; it shifts focus to you. Resist the urge in early conversation. After you've fully heard what they have to say and they feel understood, you can share if relevant. But early sharing of your own stories often shuts down theirs.`,
            `Technique 6: notice when you've stopped listening. Most people drift in and out of attention during conversations. The skill is noticing when you've drifted (planning your response, thinking about something else, mentally judging what they said) and gently returning to attention without self-criticism. The drift is normal; the recovery is the skill.`,
            `Technique 7: pause before responding. Even a brief pause before responding signals that you're actually considering what they said rather than rushing to your prepared response. The pause also gives you time to formulate a thoughtful response rather than your default one. Skilled listeners use intentional pauses as part of how they engage.`,
            `None of these techniques alone makes you a great listener. Together, practiced consistently, they build the composite skill over months and years. The compound effect on relationships and leadership capability is significant.`,
          ],
          image: `/voyager-assets/social-leadership/l04-s4-techniques.webp`,
          imageCaption: `Specific techniques: reflect back, open questions, tolerate silence, name emotion, resist sharing stories, notice drift, pause before responding.`,
          vocab: [
            {
              word: `tactical empathy`,
              definition: `Term from Chris Voss's negotiation work and his book "Never Split the Difference" (2016). Specific technique of acknowledging the emotion you observe in the other person, often by labeling it: "It sounds like you're frustrated by..." or "It seems like this matters a lot to you." Used to defuse conflict, build trust, and surface what's actually happening. Voss developed it through hostage negotiation but it applies broadly.`,
              audioPrompt: `Tactical empathy is a term from Chris Voss's negotiation work and his 2016 book "Never Split the Difference," {name}. Specific technique of acknowledging the emotion you observe in the other person, often by labeling it. "It sounds like you're frustrated by what happened." "It seems like this matters a lot to you." "You seem to be carrying a lot of weight on this." The labeling serves multiple functions. It shows the other person you're paying attention to more than just their words. It often defuses intensity because feeling acknowledged reduces the need to escalate. It surfaces emotional content the other person may not have explicitly named, which makes the conversation more honest. Voss developed the technique through hostage negotiation, where even people in extreme situations responded to feeling genuinely heard. The same technique works in everyday leadership conversations. Tactical empathy is one of the highest-leverage techniques in his framework precisely because most people don't do it naturally.`,
            },
            {
              word: `tolerating silence`,
              definition: `One of the specific listening techniques. Most people fill silence with their own talking because silence feels uncomfortable. But silence often produces the most valuable parts of conversation — the speaker uses it to think, often arriving at deeper points they wouldn't have reached if you'd filled the space. Skilled listeners deliberately let silence happen and use it as a tool. This is one of the harder techniques to practice because the impulse to fill silence is strong.`,
              audioPrompt: `Tolerating silence is one of the specific listening techniques, {name}. Most people fill silence with their own talking because silence in conversation feels uncomfortable. There's a strong social norm to keep conversation flowing. But silence often produces the most valuable parts of conversation. The speaker uses it to think. Often they arrive at deeper, more honest points they wouldn't have reached if you'd filled the space with your own talking. The silence is working — it's doing something. Skilled listeners deliberately let silence happen and use it as a tool rather than filling it reflexively. When the speaker pauses, wait. Count a beat. See what comes next. Often what comes next is more important than what came before. This is one of the harder techniques to practice because the impulse to fill silence is strong and feels like the right social thing to do. The skill is recognizing that in a listening context, the silence is often where the real conversation happens.`,
            },
            {
              word: `reflecting back`,
              definition: `Listening technique of briefly saying back what you understood in your own words after someone shares something significant. Serves three functions: confirms your understanding, shows the person they were heard, and surfaces misunderstandings before they compound. "It sounds like you're frustrated because X happened and you felt Y about it." This technique alone, used consistently, transforms conversations from talking-past-each-other to genuine communication.`,
              audioPrompt: `Reflecting back is a listening technique of briefly saying back what you understood in your own words after someone shares something significant, {name}. Three functions. First: it confirms your understanding. You find out immediately whether you got what they meant or missed something. Second: it shows the person they were heard. They experience someone receiving what they said rather than waiting to respond. Third: it surfaces misunderstandings before they compound. If you reflected back something inaccurate, they can correct it now rather than discovering later that the whole conversation was built on a misunderstanding. Example: "It sounds like you're frustrated because the project got changed without asking you, and you felt like your work wasn't valued." The speaker can confirm this or correct it. "Not exactly — I don't mind the changes, I just wish someone had told me before I'd done all that work." Now you actually understand what happened. This technique alone, used consistently, transforms conversations from talking-past-each-other to genuine communication.`,
            },
          ],
        },

        {
          id: `l04-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Before You Analyze The Cases`,
          paragraphs: [
            `In the case study that follows, three people face situations where their default would be talking but listening would serve better. Each case has an intuitive approach (talk, advise, fix) and a research-informed approach (listen, ask, validate before acting).`,
            `One framing as you work through the cases. Notice how often the listening approach feels slower or less leader-like than the talking approach. This is partly cultural: we associate leadership with action and speech. But the research shows listening usually produces better outcomes precisely because it gets you to the actual situation rather than what you assumed it was. The slower path is often the faster real path.`,
            `Another framing. The cases involve specific situations relevant to your life: a friend sharing something hard, a group disagreement, receiving difficult feedback. They're patterns you'll face throughout school, friendships, family, and any future leadership role. The lessons apply directly.`,
            `One last framing. Listening is one of those skills where small consistent improvements at 12 compound dramatically by 30. People who develop genuine listening early have access to information, relationships, and influence others can't easily reach. The investment is asymmetric: modest practice early, large compounded gains later.`,
          ],
          image: `/voyager-assets/social-leadership/l04-s5-before.webp`,
          imageCaption: `Three cases where listening matters most. Small consistent improvements compound over decades.`,
          vocab: [
            {
              word: `slowerbutfaster path`,
              definition: `Pattern across leadership and conflict research: taking time to listen genuinely often produces faster real progress than jumping immediately to action. The "fast" path of immediate response often gets the situation wrong, which requires going back to fix later. The "slow" path of listening first usually gets the situation right initially, which makes subsequent action more effective. Most experienced leaders learn this through accumulated experience.`,
              audioPrompt: `Listening as the slower-but-faster path is a pattern that shows up across leadership and conflict research, {name}. Taking time to listen genuinely often produces faster real progress than jumping immediately to action. The fast path of immediate response often gets the situation wrong, which requires going back to fix later. The slow path of listening first usually gets the situation right initially, which makes subsequent action more effective. The pattern feels counterintuitive because the fast path looks faster in the moment. But measured over the whole arc of solving the situation, listening-first usually beats acting-first. Most experienced leaders learn this through accumulated experience, often after enough situations where they jumped to action and discovered they had misunderstood. Learning the pattern explicitly at 12 lets you skip some of the painful learning by experience that adults eventually do.`,
            },
            {
              word: `intuitive approach`,
              definition: `In the case study format, the response that feels natural or obvious based on default social patterns — advising, fixing, deciding, defending. Intuitive approaches in listening situations often involve talking more and listening less: giving advice before hearing fully, making decisions before understanding the actual disagreement, defending before understanding the feedback. Research consistently shows these intuitive approaches produce worse outcomes than listening-first approaches.`,
              audioPrompt: `The intuitive approach in listening situations is the response that feels natural or obvious based on default social patterns, {name}. Advising when someone shares a problem. Making a decision to end a group disagreement quickly. Defending when you receive criticism. These intuitive approaches involve talking more and listening less. They feel leader-like — you're taking action, providing help, being decisive. Research consistently shows they produce worse outcomes than listening-first approaches in most situations. The intuitive approach gets the situation wrong because it substitutes your assumptions for actual understanding. You advise based on what you'd want if you were them, not what they actually need. You make the decision before you understood what was actually being disagreed about. You defend before you understood whether the criticism had merit. The case studies that follow each show the intuitive approach and the research-informed approach side by side, so you can see exactly why the intuitive approach backfires and what works instead.`,
            },
            {
              word: `open questions`,
              definition: `Questions that invite the speaker to develop their own thinking without directing them toward specific answers. "Tell me more about that." "What's happening for you?" "What would help?" Contrasted with closed questions (yes/no or specific information requests). Open questions give the speaker space to share what's actually on their mind rather than responding to the listener's agenda. One of the core techniques of real listening.`,
              audioPrompt: `Open questions are questions that invite the speaker to develop their own thinking without directing them toward specific answers, {name}. "Tell me more about that." "What's happening for you?" "What does that look like specifically?" "What would help?" Contrasted with closed questions, which ask for specific information or yes/no responses. Open questions give the speaker space to share what's actually on their mind rather than responding to the listener's agenda. They work because real listening involves following the speaker's meaning rather than the listener's preconceived map. When you ask "Are you upset because of the deadline?" you've inserted your assumption. When you ask "What's the hardest part right now?" you've given them space to tell you what's actually most relevant. Open questions also surface information you wouldn't have thought to ask for specifically. The speaker knows things you don't; open questions create the space for that information to emerge.`,
            },
          ],
        },

        // ───── CASE STUDY ─────────────────────────────────────────────────────
        {
          id: `l04-case-study`,
          type: `case-study`,
          headline: `Three Leadership Situations Where Listening Matters Most`,
          intro: `{name}, three people face situations where their default would be talking but listening would serve better. For each, identify what would actually serve them better.`,
          cases: [
            {
              id: `case-1`,
              title: `Friend Confides Something Hard`,
              context: `Your closest friend comes to you visibly upset. She's been struggling with anxiety lately and her parents won't let her see a therapist. She's frustrated, sad, and feels like nobody understands. She starts telling you about it. Your instinct is to help solve the problem. You know about helplines, you know about coping techniques, you want to fix it. What should you actually do first?`,
              question: `What's the most useful first response?`,
              options: [
                {
                  id: `case-1-opt-a`,
                  label: `Tell her about the resources you know — helplines, websites, what works for anxiety — to show her you care and have practical help to offer.`,
                  outcome: `This is the intuitive "fix it" move. It usually fails when the person isn't ready for solutions yet. The resources are real and may be useful later, but offering them first signals that you're not really hearing the deeper issue (that she feels unheard by her parents, that her feelings are valid, that she's carrying real pain). The fix-it move often makes the person feel less heard, not more. Practical help has its place, but after feeling fully heard, not before.`,
                  isOptimal: false,
                },
                {
                  id: `case-1-opt-b`,
                  label: `Listen first. Make eye contact. Don't interrupt. When she pauses, briefly reflect back what you heard ("It sounds like you're carrying a lot and feeling like nobody's taking your anxiety seriously"). Ask open questions ("What's the hardest part right now?"). Tolerate silences. Don't share your own stories. Don't offer solutions yet. After you've fully heard her and she's said what she needs to say, you can ask "Would it be helpful if I shared some things I know about?" — and only offer resources if she says yes.`,
                  outcome: `This is what listening research supports. Real listening creates the experience of being heard, which is often what someone in distress most needs. The reflection back ("It sounds like you're carrying a lot") shows you understood the deeper issue, not just the surface words. Asking permission before offering solutions ("Would it be helpful if...") respects her agency. The combined effect: she feels heard AND eventually gets the practical information you have, but in the right order. Trust deepens. The friendship strengthens. If she also has serious mental health concerns, your listening makes it more likely she'll keep talking to you, which is itself protective.`,
                  isOptimal: true,
                },
                {
                  id: `case-1-opt-c`,
                  label: `Share that you've felt something similar so she knows she's not alone. Tell her about what worked for you.`,
                  outcome: `This is the intuitive "I understand because I went through the same thing" move. It often backfires because it shifts focus from her to you. Even if you genuinely have related experience, sharing it before she's been fully heard centers your story rather than hers. She came to you to be heard; ending up listening to your story flips the dynamic. The technique can work LATER (after she feels heard and you sense she'd find your experience useful), but rarely as a first response. Resist the urge until she's had space to fully share.`,
                  isOptimal: false,
                },
              ],
              insight: `This case illustrates listening as the right response when someone is in distress. The intuitive "fix it" and "I understand because of my experience" moves both shift focus away from the person's actual experience. Real listening keeps focus on them, makes them feel genuinely heard, and creates space where any subsequent help (resources, your experience) lands better. The slower path is the faster real path.`,
            },
            {
              id: `case-2`,
              title: `Group Disagreement In A Meeting`,
              context: `You're leading a school project group. Two team members, Alex and Sam, have started disagreeing about how to organize the presentation. The disagreement has gotten louder over the past 10 minutes. The group is starting to take sides. Your instinct is to step in and make a decision so you can move on. What should you actually do first?`,
              question: `What's the most useful intervention?`,
              options: [
                {
                  id: `case-2-opt-a`,
                  label: `Make a decision: "Okay, we're going with Alex's approach because we're running out of time. Let's move on."`,
                  outcome: `This is the intuitive "decide and move on" move. It often makes the situation worse. Alex feels validated but the team didn't understand what was actually being disagreed about. Sam feels overruled without being heard. The rest of the group saw a leader make a decision without surfacing what the actual disagreement was. The unresolved underlying issue often resurfaces later in the project. The "efficiency" of fast decision-making usually costs more time later than the upfront listening would have.`,
                  isOptimal: false,
                },
                {
                  id: `case-2-opt-b`,
                  label: `Pause the disagreement and slow it down. "Wait — I want to make sure we understand what's actually being disagreed about. Alex, can you tell me what you're trying to accomplish with your approach? Sam, can you tell me what your concern is?" Listen to each. Reflect back what you heard. Often the disagreement turns out to be about different values, different assumptions, or different information rather than what it appeared to be on the surface. Once you and the group understand the actual disagreement, decide based on understanding rather than time pressure.`,
                  outcome: `This is what conflict research and listening research both support. The pause slows the escalation. The specific questions surface what's actually being disagreed about, which is often different from what appears on the surface. Reflecting back shows both Alex and Sam they were heard. Often the team realizes they have less disagreement than they thought, or that both views can be partly integrated. Even if you ultimately decide, the decision lands better because everyone has been heard. The total time investment is often shorter than the "decide and move on" approach when you include the followup time the unaddressed disagreement creates.`,
                  isOptimal: true,
                },
                {
                  id: `case-2-opt-c`,
                  label: `Take a vote. Whichever approach gets more votes wins. Most democratic.`,
                  outcome: `Voting can be useful but is often a substitute for understanding what's actually being disagreed about. The losing position's underlying concerns don't get addressed; they're just outvoted. The losing person often disengages from the rest of the project. Voting works best after the team understands the actual disagreement; voting before understanding usually papers over real issues rather than resolving them.`,
                  isOptimal: false,
                },
              ],
              insight: `This case illustrates listening as the right response to group disagreement. The intuitive "decide quickly" move often misses what's actually being disagreed about. The listening move surfaces the real issue, often producing better resolution AND faster overall progress because the underlying disagreement gets addressed rather than papered over. The slower path is the faster real path here too.`,
            },
            {
              id: `case-3`,
              title: `Receiving Feedback You Don't Want To Hear`,
              context: `A teammate pulls you aside after practice and says she thinks you've been too critical of younger players lately, that it's affecting team morale. You feel defensive immediately. You think she's overreacting. You're tempted to explain why you've been pushing them harder. What should you actually do?`,
              question: `What's the most useful response?`,
              options: [
                {
                  id: `case-3-opt-a`,
                  label: `Explain why you've been pushing them — it's because you care about the team's performance, you want them to improve, you have good reasons.`,
                  outcome: `This is the intuitive "defend yourself" move. It's the natural response when someone says something you don't want to hear. The problem: defending immediately signals you're not actually considering whether the feedback might be valid. Your teammate, who took the risk to share difficult feedback, walks away with "I told her and she just defended herself" — which usually means she won't bring up future concerns. The defensive response also makes you less likely to actually examine whether the feedback has merit, because once you've committed to defending, updating is harder. Trust drains on multiple sides.`,
                  isOptimal: false,
                },
                {
                  id: `case-3-opt-b`,
                  label: `Pause. Take a breath. Say "Thanks for telling me — that's not easy. Tell me more about what you've been seeing." Listen carefully. Resist the urge to defend or explain. Ask specific questions: "Can you tell me about a specific moment where I came across that way?" Reflect back what you heard. After you've fully understood, say "I need to sit with this. Can we talk again tomorrow?" Then actually sit with it — observe yourself in the next practice, consider whether the feedback is accurate. Come back with an honest response based on consideration, not defense.`,
                  outcome: `This is what feedback and listening research support. Pausing instead of defending gives your brain time to move past the defensive reaction. Asking for specifics surfaces whether the feedback is well-grounded or based on misperception (sometimes it's both). Thanking her acknowledges the courage it takes to give difficult feedback. Taking time to consider before responding shows you're treating the feedback seriously. Whether or not you ultimately agree with all of it, this approach preserves the relationship, makes future honest feedback more likely, and gives you the best chance of actually learning if there's something to learn. Even if you eventually disagree, the disagreement comes from consideration rather than defense.`,
                  isOptimal: true,
                },
                {
                  id: `case-3-opt-c`,
                  label: `Apologize immediately and promise to do better. Show you take feedback well.`,
                  outcome: `Premature apology has its own problems. It can be a way of ending the difficult conversation quickly rather than genuinely engaging with the feedback. If you apologize without actually understanding what behavior to change, you can't change it. The teammate may sense you're trying to end the conversation rather than engage with it. Worse: if the feedback isn't accurate (sometimes feedback contains real information mixed with the speaker's projections), you've committed to changing behavior that may not need changing. Better to listen, ask questions, consider, and respond honestly than to apologize reflexively.`,
                  isOptimal: false,
                },
              ],
              insight: `This case illustrates listening as the right response to difficult feedback. The intuitive moves (defend, apologize quickly) both prevent real understanding. The listening move (pause, ask specifics, sit with it, respond honestly later) produces the best outcomes whether the feedback turns out to be accurate or partially accurate or based on misperception. Receiving feedback well is a skill that builds trust enormously over time; receiving it badly is one of the fastest ways to lose trust.`,
            },
          ],
          reflectionPrompt: `All three cases share a pattern: the intuitive moves are about you (your fixes, your decisions, your defenses), while the listening moves are about them (their experience, their views, their concerns). Which case felt most personally relevant?`,
        },

        {
          id: `l04-quiz`,
          type: `quiz`,
          headline: `Check your understanding`,
          questions: [
            {
              id: `q1`,
              type: `multiple-choice`,
              question: `What is real listening, technically?`,
              options: [
                `Being quiet`,
                `Sustained attention to another person aimed at understanding what they actually mean rather than what you want them to mean; involves quieting your internal commentary, suspending responses, taking in with genuine curiosity; different from waiting to talk`,
                `Hearing words`,
                `Random skill`,
              ],
              correctIndex: 1,
              explanation: `Carl Rogers called this "unconditional positive regard" combined with "accurate empathic understanding." The person feels both accepted and genuinely understood. Real listening isn't waiting for your turn to talk, planning your response, or preparing rebuttals.`,
            },
            {
              id: `q2`,
              type: `multiple-choice`,
              question: `What is "active listening" in the Carl Rogers tradition?`,
              options: [
                `Energy listening`,
                `Approach developed by Rogers in 1950s as part of client-centered therapy: full attention, reflecting back to verify understanding, asking questions for clarification, suspending judgment, showing the speaker they're heard; involves unconditional positive regard and accurate empathic understanding; foundational in modern communication training`,
                `Listening loudly`,
                `Random method`,
              ],
              correctIndex: 1,
              explanation: `The skills are learnable through practice and honest feedback. Active listening has become foundational in modern communication training across many fields including therapy, negotiation, education, conflict resolution, management.`,
            },
            {
              id: `q3`,
              type: `multiple-choice`,
              question: `What is "cognitive interference" in listening?`,
              options: [
                `Brain damage`,
                `Pattern where your own internal thoughts compete with attention to the speaker; brain runs ~400 wpm while speech is ~125-150 wpm; the gap leaves capacity that drifts toward internal commentary, planning responses, mental wandering; real listening requires deliberately directing that extra capacity toward understanding`,
                `Confusion`,
                `Random term`,
              ],
              correctIndex: 1,
              explanation: `The pattern explains why listening is harder than it appears: your brain is partly idle during conversation and naturally drifts. Specific techniques (noting key points silently, generating questions, trying to understand the perspective) use the extra capacity to support listening.`,
            },
            {
              id: `q4`,
              type: `multiple-choice`,
              question: `Why do leaders especially struggle with listening?`,
              options: [
                `Random struggle`,
                `Status considerations (leaders pressured to demonstrate value through speaking); solution orientation (capable people wired to solve problems quickly); plus general patterns (cognitive interference, emotional reactivity, confirmation bias); the assumption "leaders provide answers" is backwards — most effective leaders listen more than they speak`,
                `Leaders are talkative`,
                `Personality types`,
              ],
              correctIndex: 1,
              explanation: `The cultural pressure to perform leadership through talking is real. Recognizing these patterns is the first step in overcoming them. The most effective leaders across many domains listen more than they speak, especially in early conversations.`,
            },
            {
              id: `q5`,
              type: `multiple-choice`,
              question: `What are the major effects of real listening?`,
              options: [
                `Random benefits`,
                `Better information (people share more accurate/sensitive info when heard); better ideas from others (questions invite ideas); trust building (compounds quickly); reduced resistance (often dissolves underlying concerns); conflict prevention; deeper relationships; effects compound over decades`,
                `Just kindness`,
                `Nothing measurable`,
              ],
              correctIndex: 1,
              explanation: `The effects compound across thousands of conversations over a leadership career. A leader who develops real listening as a habit over years accumulates information, ideas, trust, reduced friction, and relationships that produce capability well beyond equivalent talking.`,
            },
            {
              id: `q6`,
              type: `multiple-choice`,
              question: `What is "generative listening" (Scharmer)?`,
              options: [
                `Generic listening`,
                `Listening approach developed by Otto Scharmer at MIT; creates conditions for new ideas and possibilities to emerge from the conversation that didn't exist before; requires deep presence, willingness to be changed by what you hear, suspension of preconceptions; fourth level above downloading, factual listening, empathic listening`,
                `Power listening`,
                `Random theory`,
              ],
              correctIndex: 1,
              explanation: `Scharmer distinguished four levels: downloading (only what confirms), factual (data without engagement), empathic (feeling what they feel), generative (something new emerges). The fourth level is rare but produces outsized creative and relational results. Building toward it is part of mature leadership.`,
            },
            {
              id: `q7`,
              type: `multiple-choice`,
              question: `What is "tactical empathy" (Chris Voss)?`,
              options: [
                `Strategic manipulation`,
                `Technique from Voss's "Never Split the Difference" (2016): acknowledging the emotion you observe in the other person, often by labeling it ("It sounds like you're frustrated by..."); defuses conflict, builds trust, surfaces what's actually happening; developed through hostage negotiation but applies broadly`,
                `Fake caring`,
                `Random skill`,
              ],
              correctIndex: 1,
              explanation: `Even people in extreme situations respond to feeling genuinely heard. The same technique works in everyday leadership conversations. One of the highest-leverage techniques precisely because most people don't do it naturally.`,
            },
            {
              id: `q8`,
              type: `multiple-choice`,
              question: `Why is "listening as the slower-but-faster path" a pattern?`,
              options: [
                `Random observation`,
                `Taking time to listen genuinely often produces faster real progress than jumping to action; the "fast" path of immediate response often gets the situation wrong, requiring rework; the "slow" path of listening usually gets the situation right initially, making subsequent action more effective; most experienced leaders learn this through accumulated experience`,
                `Slow always better`,
                `Confusing claim`,
              ],
              correctIndex: 1,
              explanation: `Learning the pattern explicitly at 12 lets you skip some of the painful learning by experience that adults eventually do. The pattern feels counterintuitive in the moment but holds up consistently across leadership and conflict research.`,
            },
            {
              id: `q9`,
              type: `true-false`,
              question: `True or false: Most people accurately assess how well they listen.`,
              correctAnswer: false,
              explanation: `False. Kate Murphy's research in "You're Not Listening" (2020) found that almost everyone overestimates their listening. We remember moments when we listened well and forget the many moments we were just waiting to talk. Real listening is a skill requiring practice, attention, and honest feedback about what we're actually doing rather than what we think.`,
            },
            {
              id: `q10`,
              type: `inference`,
              question: `Your friend says "I always tell my younger sister exactly what to do when she's upset, but she just gets more upset. I'm trying to help!" Based on this lesson, what should you point out?`,
              options: [
                `"Try harder"`,
                `"The 'fix it' move is your default, but it's usually counterproductive when someone is upset. Solutions before listening usually make people feel less heard, not more. Try this instead: when she comes to you upset, listen first. Make eye contact, don't interrupt, reflect back what you heard ('It sounds like you're really frustrated about X'). Ask open questions ('What's the hardest part?'). Tolerate silence. Don't offer advice until she's been fully heard and you ask permission ('Would it help if I shared what I think?'). The slower path of listening first usually produces faster real progress than jumping to solutions. Your sister probably doesn't need your solutions yet; she needs to feel heard. Once she does, your solutions might land. Right now they're landing as 'you're not really hearing me.'"`,
                `"Stop helping"`,
                `"She's the problem"`,
              ],
              correctIndex: 1,
              explanation: `Real applied listening literacy. Don't dismiss the friend's desire to help; redirect from solutions-first to listening-first. Explain the pattern (fix-it move makes people feel unheard) and give specific techniques. This is the kind of advice that can transform sibling and friend relationships.`,
            },
          ],
        },

        {
          id: `l04-reflection`,
          type: `reflection`,
          headline: `Sit with this`,
          intro: `Pick the prompt that pulls at you most. Your answer is saved.`,
          prompts: [
            { id: `reflect-cognitive`, category: `Cognitive`, prompt: `Before this lesson, did you have explicit techniques for listening, or was it mostly something you assumed you did naturally?` },
            { id: `reflect-meta`, category: `Metacognitive`, prompt: `Honestly: which of the listening barriers (cognitive interference, emotional reactivity, status pressure, solution orientation, confirmation bias) most affects you?` },
            { id: `reflect-identity`, category: `Identity`, prompt: `If you become someone known for genuine listening across thousands of conversations over a lifetime, what does that change about the information, trust, and relationships you can build?` },
            { id: `reflect-application`, category: `Application`, prompt: `Pick one specific relationship where you want to listen more genuinely. What techniques from section 4 would help most? Try one this week.` },
            { id: `reflect-critical`, category: `Critical`, prompt: `Are there situations where listening is the wrong primary response? Crises requiring fast action? Situations where you have important information they need? How do you tell?` },
            { id: `reflect-personal`, category: `Personal investigation`, prompt: `Notice yourself in conversations this week. How often do you actually listen vs wait to talk? Honest observation often reveals patterns we don't see at first.` },
          ],
        },

        {
          id: `l04-real-world`,
          type: `real-world`,
          headline: `Take it into your life`,
          guideContext: `Listening is one of the highest-leverage skills available. Two paths.`,
          familyActivity: {
            title: `The Family Listening Experiment`,
            duration: `60 minutes (over a week)`,
            description: `Share the listening techniques from section 4. Then run a week-long family experiment: each family member commits to using two specific techniques (reflecting back, asking open questions, tolerating silence, naming emotion, resisting solution-jumping, pausing before responding). At the end of the week, talk about what changed. Most families discover that listening patterns shift across many conversations once made explicit. Some surface real issues that had been talked past for years.`,
          },
          projectOption: {
            title: `Read Kate Murphy's "You're Not Listening" or Scharmer's "Theory U" intro, 3-4 weeks (optional)`,
            duration: `3-4 weeks, ~30 minutes per session`,
            description: `Pick one: Kate Murphy's "You're Not Listening" (2020, accessible journalist's research synthesis) or the introductory chapters of Otto Scharmer's "Theory U" (more technical but covers generative listening). Read carefully. Practice techniques during the reading period. Write 1,500 words on what you learned about your own listening patterns. Real applied listening practice at a level most adults don't attempt.`,
            offerToParent: `Parent: opt your kid into this project. Reading a serious listening book at 12 produces a skill that compounds dramatically.`,
          },
          identityQuestion: `If you become someone with genuine listening as a habit across thousands of conversations over decades, what does that change about your leadership effectiveness, relationship quality, and access to the actual reality of groups you're part of?`,
        },

        {
          id: `l04-identity-hook`,
          type: `identity-hook`,
          headline: `Who is this lesson making you?`,
          prompt: `One sentence. No wrong answer.`,
          placeholder: `Someone who...`,
          examples: [
            `Someone who listens before solving.`,
            `A person who can tolerate silence in conversation.`,
            `Someone who reflects back what I heard instead of jumping to my response.`,
          ],
          saveKey: `identity_responses_sl_11_12_4`,
        },

        {
          id: `l04-celebration`,
          type: `celebration`,
          guideText: `{name}. Fourth Social Leadership lesson done. You now know what real listening actually is, why it's harder than it seems, what it produces, and specific techniques to develop it (Rogers's active listening, Scharmer's generative listening, Voss's tactical empathy). You can apply this framework to friends in distress, group disagreements, and difficult feedback you receive. The skill compounds across thousands of conversations over a lifetime. Next time we go into making decisions under uncertainty. Three positions defended by serious thinkers. Argument Builder format. Let's go. — Valor`,
          badge: `deep-listener`,
          badgeName: `Deep Listener`,
          xpEarned: 75,
          competencies: [
            `Articulates real listening as sustained attention aimed at understanding`,
            `Knows active listening (Rogers), generative listening (Scharmer), tactical empathy (Voss)`,
            `Identifies five barriers to listening (cognitive interference, emotional reactivity, status, solution orientation, confirmation bias)`,
            `Knows specific techniques (reflect back, open questions, tolerate silence, name emotion, resist sharing stories, notice drift, pause before responding)`,
            `Recognizes listening as slower-but-faster path in most leadership situations`,
          ],
          nextLessonPreview: {
            title: `Lesson 5: Making Decisions Under Uncertainty`,
            hook: `Three positions defended by serious thinkers. Argument Builder.`,
          },
        },
      ],
    },
  ],
};

export default SOCIALLEADERSHIP_VOYAGER_L04;

if (import.meta.env?.DEV) {
  const l = SOCIALLEADERSHIP_VOYAGER_L04.lessons[0];
  const mags = l.screens.filter((s) => s.type === `magazine`).length;
  const caseStudy = l.screens.find((s) => s.type === `case-study`);
  const quiz = l.screens.find((s) => s.type === `quiz`)?.questions?.length ?? 0;
  const reflect = l.screens.find((s) => s.type === `reflection`)?.prompts?.length ?? 0;
  console.log(
    `[LESSON-SL-VOYAGER-L04 ${VERSION}] "${l.title}" — ${mags} magazine, case-study w/ ${caseStudy?.cases?.length ?? 0} cases, ${quiz} quiz, ${reflect} reflection`
  );
}
