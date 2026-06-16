// ─────────────────────────────────────────────────────────────────────────────
// SOCIAL LEADERSHIP VOYAGER  |  L16 — Leading Without Authority
// Age band : voyagers (11-12)   Guide: valor (Lion)
// Standards: Coreverse Original — Leadership Theory, Community Organizing
// CALIBRATED: Voyager spec v1.1 (May 2026)
// Interaction format: CASE STUDY (three scenarios of leading without title)
// ─────────────────────────────────────────────────────────────────────────────

const VERSION = "voyager-sl-l16-v1";

const SOCIALLEADERSHIP_VOYAGER_L16 = {
  ageBand: `voyagers`,
  subjectId: `social-leadership`,
  guide: `valor`,

  lessons: [
    {
      id: `sl-11-12-16`,
      title: `Leading Without Authority`,
      duration: 35,
      xpReward: 75,
      badge: `leader-without-title`,
      badgeName: `Leader Without Title`,

      screens: [
        {
          id: `l16-welcome`,
          type: `welcome`,
          guideText: `{name}, most of the leadership you'll do in your life will be without formal authority. You won't have the title that lets you give orders. You won't have the position that requires others to listen. You won't have the rank that grants automatic respect. You'll have to lead through influence, example, and earned credibility. This is harder than leading from position in some ways and more durable in others. The skills are specific and learnable. Today we work through three situations where you'd need to lead without title: seeing a problem at school that needs addressing, influencing a team you're not the leader of, and helping someone (sibling, friend, younger peer) who needs guidance. Real leaders have built movements, changed institutions, and shaped cultures without formal authority. The patterns of how they did it are knowable.`,
          headline: `Leading Without Authority`,
          subtitle: `Most leadership you'll do is without title. The patterns of how it actually works are knowable.`,
          visual: `/voyager-assets/social-leadership/l16-welcome.webp`,
        },

        {
          id: `l16-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Why Leading Without Authority Matters`,
          paragraphs: [
            `Most pop leadership content implicitly assumes you have formal authority: you're the CEO, the team captain, the manager, the elected official. The advice is about how to use the authority well. But most leadership opportunities in life don't come with formal authority. You see a problem at school but you're not the principal. You think your team is going in the wrong direction but you're not the captain. You want to help a friend or younger sibling but you have no position over them. You're 12 and most situations don't grant you formal power.`,
            `Leading without authority has been studied as its own subject. Ronald Heifetz's adaptive leadership work (covered in Lesson 8) explicitly addresses how to lead when you don't have formal authority. Mary Parker Follett, an early 20th-century pioneer in management theory, argued that the most important leadership in organizations happened informally through "circular response" rather than through formal direction. Marshall Ganz, who organized for the United Farm Workers and later taught at Harvard's Kennedy School, developed frameworks for movement leadership built explicitly on leading without formal power.`,
            `Several reasons leading without authority is harder. You can't compel anyone to do anything. You can't make decisions stick by signing off on them. You can't punish noncompliance through formal channels. You start with zero credit; nothing about your situation makes others required to listen. Building any influence requires earning it from scratch.`,
            `Several reasons leading without authority is also more durable. Influence you've earned doesn't disappear when you leave a role; it persists across contexts. People who follow you do so voluntarily, which produces deeper engagement than compliance. The skills you build (relationship, credibility, persuasion, vision-articulation) transfer to any future leadership context. Many of the most enduring leaders in history built their influence well before they had formal authority — and used the combination once it came.`,
            `For you at 12, the skill is foundational. The leadership patterns you build in the next few years will shape what you can accomplish across decades. People who develop authority-independent leadership skills early often become unusually effective adults because they've built influence that doesn't depend on titles that come later.`,
          ],
          image: `/voyager-assets/social-leadership/l16-s1-matters.webp`,
          imageCaption: `Most leadership is without title. Heifetz, Follett, Ganz on leading without authority. More durable than position-based leadership.`,
          vocab: [
            {
              word: `authority-independent leadership`,
              definition: `Leadership exercised through influence, example, and earned credibility rather than through formal title or position. Studied since Mary Parker Follett's early 20th century work, developed further in Heifetz's adaptive leadership and Ganz's organizing tradition. More durable than authority-based leadership in many cases because the influence persists across contexts. The dominant form of leadership most people will exercise in their lives.`,
              audioPrompt: `Authority-independent leadership is leadership exercised through influence, example, and earned credibility rather than through formal title or position, {name}. Has been studied as its own subject since Mary Parker Follett's early 20th century work on management. Developed further in Ronald Heifetz's adaptive leadership framework and Marshall Ganz's community organizing tradition. More durable than authority-based leadership in many cases because the influence persists across contexts. When you change roles, your formal authority transfers to the new role-holder; the influence you've earned stays with you. The dominant form of leadership most people will exercise in their lives. Most pop leadership content assumes formal authority, but most actual leadership opportunities (school situations, friend groups, family roles, early career, community work, eventually even much of senior career) involve significant authority-independent dimensions. Building this skill early shapes what you can accomplish across decades.`,
            },
            {
              word: `Marshall Ganz`,
              definition: `Organizer and Harvard Kennedy School professor who developed frameworks for movement leadership built explicitly on leading without formal power. Organized for the United Farm Workers under César Chávez. His organizing tradition centers on "relational meetings" and building real relationships before campaigns. One of the foundational thinkers on authority-independent leadership, drawing on decades of practical organizing experience combined with academic analysis.`,
              audioPrompt: `Marshall Ganz is an organizer and professor at Harvard's Kennedy School who developed frameworks for movement leadership built explicitly on leading without formal power, {name}. He organized for the United Farm Workers under César Chávez before moving to academic work, which means his frameworks are grounded in actual experience with authority-independent leadership at scale — real movements, real campaigns, real community change. His organizing tradition centers on relational meetings: one-on-one conversations with community members where the organizer listens deeply to understand interests, values, story, and concerns before any specific campaign ask. The core principle is that you build real relationships before you need them, and those relationships become the foundation of all authority-independent leadership that follows. Ganz is one of three foundational thinkers the text names alongside Mary Parker Follett and Ronald Heifetz as establishing the serious research tradition on leading without authority. His work is especially relevant for the question of how young people with no formal position can still build real influence in their communities — the answer is through the sustained investment in relationships that his framework describes.`,
            },
            {
              word: `circular response`,
              definition: `Concept from Mary Parker Follett, early 20th-century pioneer in management theory. Leadership in organizations happens informally through mutual influence among members rather than through top-down formal direction. Follett argued the most important leadership is the kind that emerges from groups working together — each person influencing and being influenced — rather than from individual directives. One of the earliest theoretical frameworks for authority-independent leadership.`,
              audioPrompt: `Circular response is a concept from Mary Parker Follett, an early 20th-century pioneer in management theory, {name}. Follett was among the first theorists to argue that the most important leadership in organizations happened informally through what she called circular response rather than through formal direction. The idea: members of a group mutually influence each other and the group's direction, rather than authority flowing only top-down from the formal leader. Leadership in this view isn't something a single person does to others; it's something that emerges from the interactions and relationships among people working together. Each person influences others through their behavior, their ideas, their responses, and their engagement — and is in turn influenced by theirs. The text uses Follett's circular response as one of the foundational intellectual ancestors of what is now called authority-independent leadership. Her work predates most modern leadership research but anticipated many of its core findings: that formal authority alone is insufficient, that influence networks matter more than org charts, and that the most durable leadership comes from genuine engagement rather than top-down direction.`,
            },
          ],
        },

        {
          id: `l16-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `What Works When You Have No Title`,
          paragraphs: [
            `Several patterns recur across research on leading without authority. None alone is sufficient; together they form the core skill.`,
            `Pattern 1: build relationships before you need them. People follow people they know and trust. If you only invest in relationships when you need something, those relationships will be transactional and weak. If you invest in relationships consistently before any specific ask, you build the trust capital that makes future leadership possible. Marshall Ganz's organizing framework starts here: "relational meetings" with people in the community, building real relationships before any campaign.`,
            `Pattern 2: develop demonstrated competence in something specific. You don't need to be the best at everything; you need to be genuinely good at something the group needs. Real expertise produces real influence through what French and Raven called "expert power" (covered in Lesson 2). The combination of relationships AND expertise opens doors that neither alone could.`,
            `Pattern 3: model what you want to see. People watch what you do far more than what you say (covered in Lesson 3 on trust). If you want a team to take work seriously, take work seriously yourself. If you want a friend group to treat people kindly, treat people kindly yourself. Modeling without preaching is one of the most powerful forms of influence available without formal authority.`,
            `Pattern 4: articulate a vision people can engage with. What's the situation you're trying to address? Why does it matter? What would better look like? People follow leaders who can articulate where things should go. The articulation doesn't require formal authority; it requires clarity about what you actually think and the willingness to say it.`,
            `Pattern 5: organize others rather than trying to do it alone. Real change rarely comes from a single person. Mary Parker Follett's "circular response" framework emphasized that leadership emerges from groups working together, not from individual brilliance. Heifetz's adaptive leadership emphasizes "giving the work back to the people" — engaging others as partners in solving problems rather than trying to solve them yourself. Building a coalition (covered in Lesson 14) multiplies what any individual could accomplish alone.`,
            `Pattern 6: start small and build through visible wins. People are more likely to follow you on bigger things if they've seen you succeed at smaller things. Movement organizers and authority-independent leaders typically start with achievable wins, demonstrate they can deliver, then build toward larger projects. Trying to start with the biggest possible change usually fails because you haven't built the credibility to deliver it.`,
            `Pattern 7: persist through resistance. People without formal authority face resistance other leaders don't: questions about why they're getting involved, dismissal because they don't have title, requests to "let the people in charge handle it." Persistence through this resistance is itself a leadership skill. Many movements failed when their authority-independent leaders gave up after initial pushback; others succeeded by maintaining engagement long enough for the resistance to soften.`,
          ],
          image: `/voyager-assets/social-leadership/l16-s2-works.webp`,
          imageCaption: `Seven patterns: build relationships first, develop competence, model the behavior, articulate vision, organize others, start small, persist through resistance.`,
          vocab: [
            {
              word: `relational meetings`,
              definition: `Practice from Marshall Ganz's community organizing tradition. One-on-one conversations between an organizer and a community member where the organizer listens deeply to understand the person's interests, values, story, and concerns. Different from transactional conversations (asking for something) or networking (instrumental relationship-building). Builds the real relationships that authority-independent leadership requires. Foundational practice across organizing traditions.`,
              audioPrompt: `Relational meetings is a practice from Marshall Ganz's community organizing tradition, {name}. One-on-one conversations between an organizer and a community member where the organizer listens deeply to understand the person's interests, values, story, and concerns. Different from transactional conversations where you're asking for something. Different from networking which is instrumental relationship-building aimed at career advantage. Relational meetings are about genuinely understanding another person. Builds the real relationships that authority-independent leadership requires. Foundational practice across many organizing traditions. The framework's core insight: relationships built before you need them are durable, while relationships built only when you want something are transactional and weak. Ganz developed this through his work with the United Farm Workers under César Chávez and later taught the practice at Harvard's Kennedy School. The principle scales beyond organizing: anyone leading without formal authority benefits from sustained genuine relationship-building before specific needs arise.`,
            },
            {
              word: `modeling without preaching`,
              definition: `One of seven patterns that work in authority-independent leadership. People watch what you do far more than what you say. If you want a team to take work seriously, take work seriously yourself. If you want a friend group to treat people kindly, treat people kindly yourself. Modeling without preaching produces influence because others observe the behavior and, if it's consistent and genuine, calibrate toward it over time. More effective without formal authority than moralizing because it doesn't require compliance — it invites imitation.`,
              audioPrompt: `Modeling without preaching is one of the seven patterns that work in authority-independent leadership, {name}. People watch what you do far more than what you say. If you want a team to take work seriously, take work seriously yourself first. If you want a friend group to treat people kindly, treat people kindly yourself consistently. If you want peers to engage more thoughtfully with difficult questions, engage thoughtfully yourself. Modeling without preaching produces influence because others observe the behavior over time, and if it's consistent and genuine, they calibrate toward it without anyone asking them to. This is especially powerful without formal authority because it doesn't require compliance. You're not telling anyone to do anything; you're demonstrating through your own behavior what you value and how you operate. People who want to dismiss a direct instruction find it harder to dismiss a pattern of behavior they observe consistently over time. The social exclusion case in this lesson illustrates the principle: sitting with a new student because you genuinely want to know her, not as a project, and over time other students observe how you treat her and calibrate accordingly. The modeling is the leadership.`,
            },
            {
              word: `start small and build`,
              definition: `One of seven patterns that work in authority-independent leadership. People are more likely to follow on bigger things if they've seen you succeed at smaller things. Movement organizers and authority-independent leaders typically start with achievable wins, demonstrate they can deliver, then build toward larger projects. Trying to start with the biggest possible change usually fails because credibility hasn't been built to carry it. Small wins are not just outcomes; they're credibility demonstrations that enable larger subsequent effort.`,
              audioPrompt: `Start small and build is one of the seven patterns that work in authority-independent leadership, {name}. People are more likely to follow you on bigger things if they've seen you succeed at smaller things first. Movement organizers and authority-independent leaders across research traditions typically start with achievable wins that demonstrate they can deliver, then build toward larger projects on the credibility those wins establish. Trying to start with the biggest possible change usually fails because you haven't built the credibility to carry it. Why does this work? Credibility is a product of visible demonstrated competence over time. Before people who don't have to follow you are willing to take on risk by following a larger, uncertain effort, they want evidence that you can deliver. Small wins are that evidence. They also build confidence within the group itself: team members who've seen the leader deliver on small things are more willing to invest in bigger efforts. The pattern operates across all five phases of the long arc the text describes: you build through visible wins at the vision-and-credibility phase precisely because those wins create the foundation for coalition building in the phase that follows.`,
            },
          ],
        },

        {
          id: `l16-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `What Doesn't Work (And Why)`,
          paragraphs: [
            `Knowing what works is helpful; knowing what doesn't work is equally important. Several patterns reliably fail in authority-independent leadership.`,
            `Failure mode 1: trying to compel without authority. Telling people what to do when you have no position to back it up usually fails. The natural response to "you should do X" from someone with no authority is "who are you to tell me what to do?" The same content delivered as observation, suggestion, or invitation usually lands better than as directive.`,
            `Failure mode 2: complaining without proposing. "This is broken" without "here's what could work" produces frustration in others rather than alignment. People without authority who only complain become annoying without becoming influential. The skill is pairing the diagnosis with a proposal, even an imperfect one.`,
            `Failure mode 3: getting morally righteous. Approaching situations with the assumption that you're right and others are wrong (or careless, or stupid) usually triggers resistance even if you ARE right. Authority-independent leaders especially can't afford to come across as superior because others have no obligation to engage with someone who's making them feel judged.`,
            `Failure mode 4: trying to do too much yourself. Without formal authority, you can't compel others to help. If you try to take on the whole effort alone, you'll exhaust yourself before achieving anything significant. The pattern is recurring: bright, motivated people see problems, try to fix them alone, burn out, conclude that "no one cared enough to help," and quit. The actual lesson is usually that they didn't invest enough in building the coalition that could carry the work.`,
            `Failure mode 5: expecting fairness. People without authority often face unfair situations: their ideas get ignored, then later credited to people with authority who said similar things. Their contributions get minimized. Their persistence gets framed as pushiness. Expecting this not to happen and getting upset when it does usually undermines your effectiveness. Effective authority-independent leaders develop thick skin about credit and keep focused on actual outcomes.`,
            `Failure mode 6: depending on a single relationship. Sometimes authority-independent leaders build one strong relationship (with a teacher, a parent, a mentor) and use that as their entire influence base. When that relationship changes (the teacher leaves, the parent shifts focus, the mentor becomes unavailable), the influence collapses. Sustainable authority-independent leadership requires building a network of relationships, not depending on a single one.`,
            `Failure mode 7: confusing influence with manipulation. Real authority-independent leadership operates ethically. Through Cialdini's three-question test (covered in Lesson 7). Trying to manipulate people into following you usually produces fragile influence that collapses when manipulation is detected. Real influence and durable leadership both require the kind of trust that manipulation erodes.`,
          ],
          image: `/voyager-assets/social-leadership/l16-s3-doesnt.webp`,
          imageCaption: `Seven failure modes: compelling without authority, complaining without proposing, moral righteousness, doing too much alone, expecting fairness, single-relationship dependence, confusing influence with manipulation.`,
          vocab: [
            {
              word: `proposal pairing`,
              definition: `Practice of pairing diagnoses ("this is broken") with proposals ("here's what could work"). Critical for authority-independent leadership because complaints alone produce frustration in others without alignment. Proposals can be imperfect or invite refinement; the act of proposing engages others as collaborators rather than just witnesses to your dissatisfaction. People follow proposals more easily than diagnoses alone.`,
              audioPrompt: `Proposal pairing is the practice of pairing diagnoses with proposals when raising concerns or trying to influence change, {name}. "This is broken" is a diagnosis. "This is broken and here's what could work" combines the diagnosis with a proposal. Critical for authority-independent leadership because complaints alone produce frustration in others without alignment. People without authority who only complain become annoying without becoming influential. The proposals don't have to be perfect or complete. An imperfect proposal that invites refinement is often better than no proposal at all. The act of proposing engages others as collaborators in shaping a solution rather than just witnesses to your dissatisfaction. People follow proposals more easily than diagnoses alone. The skill is catching yourself when you're about to raise a problem and adding "here's what I think could help" before delivering. Even when the proposal isn't adopted, it shifts the dynamic from complaint to engagement.`,
            },
            {
              word: `moral righteousness failure`,
              definition: `Failure mode in authority-independent leadership: approaching situations with the assumption that you're right and others are wrong, careless, or stupid. Usually triggers resistance even when you ARE right. People without authority especially cannot afford to come across as superior because others have no obligation to engage with someone who's making them feel judged. Moral righteousness signals are one of the most reliable ways to lose influence you don't have formal authority to maintain.`,
              audioPrompt: `Moral righteousness failure is one of the seven failure modes in authority-independent leadership, {name}. It means approaching situations with the assumption that you're right and others are wrong or careless or stupid — and letting that assumption show in how you engage. Even when you actually are right, the moral righteousness framing usually triggers resistance rather than alignment. People who have no formal obligation to follow you are especially sensitive to being made to feel judged. If the person without authority comes across as superior, the natural response is to disengage. "Who do you think you are?" is the internal reaction, even when it's never said out loud. Authority-independent leaders especially cannot afford this because they have no formal position to fall back on. People with formal authority can sometimes survive coming across as superior because compliance is required. People without formal authority lose all influence when they make others feel judged. The skill is holding your substantive assessment — maintaining clarity about what you actually think — while engaging without the self-righteous framing. You can be right and still engage from a posture of genuine curiosity and respect rather than judgment. The case study in this lesson shows the pattern: the lecture option fails in part because it positions the person as morally judging classmates, which triggers resistance to the message regardless of how accurate the message is.`,
            },
            {
              word: `credit asymmetry`,
              definition: `The predictable unfairness that people without authority often face: their ideas get ignored, then later credited to people with authority who said similar things. Their contributions get minimized. Expecting this not to happen usually undermines effectiveness. Effective authority-independent leaders develop thick skin about credit and keep focused on actual outcomes. The goal is change, not recognition; optimizing for recognition undermines both.`,
              audioPrompt: `Credit asymmetry is the predictable unfairness that people without authority often face, {name}. The text names it as one of the failure modes to avoid: expecting fairness about credit when you don't have formal authority. Ideas raised by people without title get ignored, then later when someone with authority says similar things, the idea gets credited to them. Contributions by people without formal positions get minimized in the story of what happened. Persistence gets framed as pushiness rather than as leadership. This is real and common. Expecting it not to happen — getting upset each time it does, losing motivation because your contributions aren't recognized — usually undermines effectiveness. Effective authority-independent leaders develop thick skin about credit and keep focused on actual outcomes. Did the situation improve? Did the team get a better result? Did the person you were trying to help actually get helped? If the outcomes you cared about happened, the credit allocation is secondary. This is genuinely hard, especially at twelve, when recognition from peers and adults feels very important. But the pattern the text describes is that optimizing for recognition undermines both the recognition and the outcomes; optimizing for outcomes often eventually produces recognition as a by-product.`,
            },
          ],
        },

        {
          id: `l16-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `The Long Arc Of Authority-Independent Leadership`,
          paragraphs: [
            `Authority-independent leadership operates on a longer time horizon than authority-based leadership. With formal authority, you can produce immediate results through directive action. Without it, you have to build the conditions for change over time. Understanding the long arc helps you stay engaged through periods where progress isn't visible.`,
            `Phase 1: relationship building and listening. Before you can influence change, you need to understand the situation deeply and have real relationships with the people involved. This phase often takes longer than authority-independent leaders expect. The temptation is to skip to action; the discipline is to invest in understanding and relationships first.`,
            `Phase 2: vision articulation and small wins. Once you understand the situation and have relationships, you can articulate what you think should change and start working on small visible improvements. The small wins build credibility for larger work. The vision gives people something to engage with even when the path to it isn't clear.`,
            `Phase 3: coalition building. Real change requires more than your individual effort. The coalition phase involves finding allies, aligning around shared interests, and coordinating action. This is often where authority-independent leaders fail: they try to skip from individual effort directly to large change without the coalition that could carry it.`,
            `Phase 4: sustained engagement and adaptation. Even with relationships, vision, small wins, and coalition, change takes longer than expected. Resistance emerges. Conditions shift. Allies move on. Sustained engagement through this phase is what distinguishes leaders who actually produce change from those who give up.`,
            `Phase 5: institutional anchoring. The most enduring authority-independent leadership eventually anchors changes in new structures, norms, or institutions that persist beyond the individual leader's involvement. Movements that achieve their goals usually do so by building lasting structures, not just by maintaining their initial energy.`,
            `One important pattern across the phases. Authority-independent leaders who tried to produce change quickly usually failed; leaders who invested in the longer arc, sometimes years before visible results — produced more durable change. This is uncomfortable in a world that rewards visible quick action, but the empirical pattern across organizing and movement research is clear.`,
            `For you at 12, this longer arc framing matters. The leadership you're building now operates on time scales of years. The relationships you're investing in, the credibility you're earning, the situations where you're modeling the behavior you want to see — these accumulate slowly and pay off later. Adolescents who quit on authority-independent leadership because they don't see immediate results miss what would have come from sustained engagement.`,
          ],
          image: `/voyager-assets/social-leadership/l16-s4-arc.webp`,
          imageCaption: `Five phases: relationships and listening, vision and small wins, coalition building, sustained engagement, institutional anchoring. Long time horizons matter.`,
          vocab: [
            {
              word: `without authority`,
              definition: `Pattern across organizing and movement research that authority-independent leadership operates on years-long time horizons. Five phases typically present: relationship building, vision articulation and small wins, coalition building, sustained engagement and adaptation, institutional anchoring. Leaders who tried to produce change quickly usually failed; those who invested in the longer arc produced more durable change.`,
              audioPrompt: `The long arc of leadership without authority is a pattern across organizing and movement research, {name}. Authority-independent leadership operates on years-long time horizons. Five phases typically present in successful work. Phase one: relationship building and listening, often taking longer than leaders expect. Phase two: vision articulation and small wins to build credibility. Phase three: coalition building because real change requires more than individual effort. Phase four: sustained engagement and adaptation through resistance and changing conditions. Phase five: institutional anchoring of changes in structures or norms that persist beyond the individual leader. The pattern across research: leaders who tried to produce change quickly usually failed; leaders who invested in the longer arc, sometimes years before visible results, produced more durable change. This is uncomfortable in a world that rewards visible quick action, but the empirical pattern is clear. For 12-year-olds, the framing matters because the leadership you build now operates on time scales of years; relationships and credibility accumulate slowly and pay off later.`,
            },
            {
              word: `institutional anchoring`,
              definition: `Fifth and final phase of the long arc of authority-independent leadership. The most enduring authority-independent leadership eventually anchors changes in new structures, norms, or institutions that persist beyond the individual leader's involvement. Movements that achieve goals usually do so by building lasting structures rather than just maintaining initial energy. Without anchoring, change tends to reverse when the leader moves on; with it, change becomes self-sustaining.`,
              audioPrompt: `Institutional anchoring is the fifth and final phase of the long arc of authority-independent leadership described in this lesson, {name}. The text states it directly: the most enduring authority-independent leadership eventually anchors changes in new structures, norms, or institutions that persist beyond the individual leader's involvement. Movements that actually achieve their goals usually do so by building lasting structures, not just by maintaining their initial energy and enthusiasm. Without anchoring, change tends to reverse when the leader moves on. The relationships were with that specific person, the energy came from that specific leader, and when they leave, the dynamic collapses back toward the old pattern. With anchoring, the change becomes self-sustaining. New norms have been established that others maintain. New structures have been built that create their own momentum. New institutions have been created that don't depend on any one person. For twelve-year-olds, the anchoring phase is mostly in the future — the first four phases (relationships, vision, coalition, sustained engagement) are what's immediately relevant. But understanding that the goal is eventually to anchor changes in structures that outlast your direct involvement gives the longer arc its proper scope. Even at school, anchoring looks like establishing norms the grade keeps after you've moved on, or getting policies changed, or creating structures that continue to produce the outcomes you wanted.`,
            },
            {
              word: `persistence through resistance`,
              definition: `One of seven patterns that work in authority-independent leadership. People without formal authority face specific resistance: questions about why they're getting involved, dismissal because they don't have title, requests to "let the people in charge handle it." Persistence through this resistance is itself a leadership skill. Many movements failed when their authority-independent leaders gave up after initial pushback; others succeeded by maintaining engagement long enough for the resistance to soften.`,
              audioPrompt: `Persistence through resistance is one of seven patterns that work in authority-independent leadership, {name}. People without formal authority face resistance that people with authority don't: questions about why they're getting involved, dismissal because they don't have a title backing their engagement, requests to "let the people in charge handle it." This resistance is predictable and common. The natural response to it is to give up — to conclude that nobody cares, that the situation can't change, that the effort isn't worth continuing. The text identifies persistence through this resistance as itself a leadership skill. It's not persistence through all resistance indefinitely regardless of feedback; it's the capacity to distinguish resistance that means your approach needs adjustment from resistance that means you should keep going. Many movements failed precisely because their authority-independent leaders gave up after initial pushback. Others succeeded by maintaining engagement long enough for the initial resistance to soften — for the relationships to develop, for the small wins to build credibility, for the coalition to form. The pattern the text describes is that the period immediately after initial resistance is often when giving up would have been the most costly mistake; sustained engagement through it is what produces the conditions for eventual change.`,
            },
          ],
        },

        {
          id: `l16-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Before You Analyze The Cases`,
          paragraphs: [
            `In the case study that follows, three people face situations where they want to lead but have no formal authority. Each has an intuitive approach and a research-informed approach. The intuitive approaches usually default to either trying to compel without authority, complaining without proposing, or giving up entirely; the research-informed approaches use the patterns from sections 2 and 4.`,
            `One framing as you work through the cases. Notice how often the effective move involves slowing down to build the conditions that make influence possible (relationships, credibility, coalition) rather than trying to leap directly to outcomes. The longer path is usually the more reliable path.`,
            `Another framing. The cases involve three different authority-independent leadership situations: addressing a problem you observe at school (no role granting authority), influencing a team you're not the leader of, and helping someone who needs guidance (no role granting you authority over them). Each requires somewhat different applications of the framework.`,
            `One last framing. The patterns you build in authority-independent leadership at 12 compound across decades. Most adults who never developed this skill early never develop it well. The people who became effective leaders later in life typically built authority-independent skills early. Building deliberately now produces outsized returns over a lifetime.`,
          ],
          image: `/voyager-assets/social-leadership/l16-s5-before.webp`,
          imageCaption: `Three situations of leading without title. Slower path usually more reliable. Skills compound across decades.`,
          vocab: [
            {
              word: `conditions influence`,
              definition: `Practice of investing in relationships, credibility, expertise, and coalition before specific influence needs arise. Distinguished from "transactional influence" (trying to influence specific outcomes when needed without prior investment). Authority-independent leadership requires this investment because there's no formal position to fall back on; the conditions ARE the leadership capacity.`,
              audioPrompt: `Building conditions for influence is the practice of investing in relationships, credibility, expertise, and coalition before specific influence needs arise, {name}. Distinguished from transactional influence, which is trying to influence specific outcomes when needed without prior investment. Authority-independent leadership requires this investment because there's no formal position to fall back on. The conditions ARE the leadership capacity. The pattern is similar to financial saving: you can't draw down resources you haven't built up first. People who only try to influence in moments of need find they have little to draw on. People who invested over time in relationships, demonstrated competence, earned trust, and engaged with others' concerns find they have substantial capacity available when needed. The discipline is investing during times when you don't need anything specific, which feels unnecessary in the moment but produces the conditions that make later influence possible. Most authority-independent leaders learn this through experience; learning it explicitly at 12 lets you skip painful years of trying to draw on capacity you hadn't built.`,
            },
            {
              word: `giving the work back`,
              definition: `Practice from Ronald Heifetz's adaptive leadership framework. Engaging others as partners in solving problems rather than trying to solve problems yourself. Authority-independent leaders who try to do everything themselves exhaust themselves before achieving anything significant. Real change rarely comes from a single person. "Giving the work back" means distributing the labor and ownership so the group carries what no individual could carry alone.`,
              audioPrompt: `Giving the work back is a practice from Ronald Heifetz's adaptive leadership framework described in this lesson, {name}. The principle: engage others as partners in solving problems rather than trying to solve them yourself. Heifetz's adaptive leadership emphasizes that effective leaders, especially authority-independent ones, do not heroically solve problems for the group. They return the adaptive challenge to the people who own it and must live with it, supporting rather than replacing their problem-solving work. This connects directly to pattern five of the seven that work: organize others rather than trying to do it alone. Without formal authority, you can't compel others to help. If you try to take on the whole effort yourself, you'll exhaust yourself before achieving anything significant. The text names the pattern explicitly: bright, motivated people see problems, try to fix them alone, burn out, and conclude that no one cared enough to help. The actual lesson is that they didn't invest in building the coalition that could carry the work. Giving the work back is the positive version: distributing both the labor and the ownership so the group carries what no individual could carry alone. The investment in building the group's capacity to carry the work is itself the leadership.`,
            },
            {
              word: `authority-independent leadership compounds`,
              definition: `The principle that skills in leading without authority compound across decades. Most adults who never developed these skills early never develop them well. People who became effective leaders later in life typically built authority-independent skills early. Building deliberately at 12 produces outsized returns because the patterns (relationship-building, modeling, coalition, persistence) accumulate across thousands of situations over a lifetime.`,
              audioPrompt: `Authority-independent leadership compounds is the compounding-skill principle applied to leading without authority, {name}. The text states it in the final framing of the pre-case-study magazine section: the patterns you build in authority-independent leadership at twelve compound across decades. Most adults who never developed these skills early never develop them well. They continue to try to compel without authority, complain without proposing, give up after initial resistance, or depend on single relationships. Each of these patterns persists unless deliberately replaced. People who became effective leaders later in life typically built authority-independent skills early — through school situations, family dynamics, community involvement, or organized activities where they had to lead without title. Building deliberately at twelve, with an explicit framework, produces outsized returns because the patterns accumulate across thousands of situations over a lifetime. Every time you build a relationship before you need it, every time you model rather than preach, every time you persist through initial resistance, the pattern reinforces. Over years those accumulated repetitions produce the kind of authority-independent leadership that most adults never develop.`,
            },
          ],
        },

        // ───── CASE STUDY ─────────────────────────────────────────────────────
        {
          id: `l16-case-study`,
          type: `case-study`,
          headline: `Three Situations Of Leading Without Title`,
          intro: `{name}, three people face situations where they want to lead but have no formal authority. For each, identify what would actually serve them better.`,
          cases: [
            {
              id: `case-1`,
              title: `School Problem: New Student Facing Subtle Exclusion`,
              context: `A new student at your school, Aisha, has been getting socially excluded, not aggressively, but consistently. She sits alone at lunch. She gets picked last for things. People are polite but distant. You're not the principal, the counselor, or anyone with authority. You're 12. But it's bothering you and you want to do something. Your sister tells you "it's not your problem, mind your own business." What should you actually do?`,
              question: `What's the most useful approach to leading on this without formal authority?`,
              options: [
                {
                  id: `case-1-opt-a`,
                  label: `Stand up in class and lecture everyone about how cruel they're being. Tell them they should all be including Aisha.`,
                  outcome: `This combines several failure modes. Trying to compel without authority (you have no position to lecture from). Getting morally righteous (positioning yourself as judging others triggers resistance). Public shaming (almost always backfires socially). The lecture will probably make things worse: peers resent being publicly judged, Aisha becomes more visible as "the kid the lecturer was defending," and the underlying social dynamics don't change. Doing nothing because "it's not my problem" is also wrong, but lecturing is worse than nothing.`,
                  isOptimal: false,
                },
                {
                  id: `case-1-opt-b`,
                  label: `Start with relationship building and modeling. Sit with Aisha at lunch, not as a project, but because you actually want to get to know her. Ask her about herself with genuine interest. Invite her into things you're already doing. Don't make it dramatic. Over time, when other classmates see you treating her as a person worth being around, some will follow your lead. Also: when you have natural opportunities (group projects, picking teams), include her thoughtfully. Eventually, if patterns continue, you might mention concerns to a trusted teacher who has authority you don't.`,
                  outcome: `This is what authority-independent leadership research supports. You start with relationship (actually getting to know her). You model the behavior you want to see (treating her as worth being around). You include without making it a project (preserves her dignity). You build slowly through visible action rather than dramatic declaration. The long arc operates: over weeks or months, the social dynamics around her can shift through your modeling. You're also working through your actual relationship rather than trying to compel others. Eventually, if larger intervention is needed, you can involve a teacher (someone with formal authority you don't have). This combination — your individual influence work AND knowing when to involve formal authority — is what mature authority-independent leadership looks like.`,
                  isOptimal: true,
                },
                {
                  id: `case-1-opt-c`,
                  label: `Tell the principal she needs to make people include Aisha. The principal has authority and should do something.`,
                  outcome: `Going only to formal authority without doing your own influence work isn't wrong but is incomplete. The principal has limited tools for social inclusion: she can't actually make peers want to include someone. Authority interventions in social dynamics often backfire, increasing rather than decreasing the exclusion ("the principal made them include her" can produce more resentment). Better: your own modeling work first, then potentially involve adult authority for situations beyond what you can address. The combination matters; pure authority approach without your own influence rarely fixes social dynamics.`,
                  isOptimal: false,
                },
              ],
              insight: `This case illustrates leading without authority on a social issue. The intuitive moves (public lecture, just call authority) both fail in different ways. The research-informed move (relationship, modeling, sustained action, knowing when to add adult involvement) actually changes the dynamics. The pattern: authority-independent leadership on social issues usually operates through your own behavior over time, not through trying to compel others through either moralizing or escalation.`,
            },
            {
              id: `case-2`,
              title: `Team Going Wrong: You're Not The Leader`,
              context: `Your school project team is heading toward a bad approach. The team leader, Marcus, is convinced his idea is right. You've been in similar situations before and you know his approach won't work. You're not the leader. The team is generally aligned with Marcus. If you just go along, you'll all do work that fails. If you challenge directly, it might damage the team dynamic and probably won't change anything. What should you do?`,
              question: `What's the most useful approach to influencing direction without being the leader?`,
              options: [
                {
                  id: `case-2-opt-a`,
                  label: `Confront Marcus in front of the team: "Your approach is wrong and I know better. We should do it my way."`,
                  outcome: `This is the worst of the available approaches. Trying to compel without authority almost always fails. You have no position from which to compel. Public confrontation puts Marcus on defense and makes him less likely to actually consider your input. "I know better" framing is condescending; even if true, it triggers resistance. The team is more likely to side with Marcus because public confrontation creates a coalition-formation moment that doesn't favor you. Almost guaranteed to damage the team dynamic without changing the direction.`,
                  isOptimal: false,
                },
                {
                  id: `case-2-opt-b`,
                  label: `Talk to Marcus privately first. Don't frame it as a challenge; frame it as a conversation. "Hey Marcus, I want to think through the approach with you. I've been worried about [specific concern] because of [specific reason from past experience]. What are you thinking on that?" Listen genuinely. Ask questions. Propose alternatives without insisting. If he updates based on the conversation, great. If he doesn't, and you still believe the approach will fail, you can raise the concern with the broader team — but framed as a question for the team to engage with, not as criticism of Marcus: "I want to bring something up for us to think through together..." Listen carefully to what others say.`,
                  outcome: `This is what authority-independent leadership and conflict navigation both support. Private conversation respects Marcus's position as leader while still allowing real engagement. Genuine curiosity (not pretend curiosity setting up your point) often surfaces information that changes either his thinking or yours. Proposal pairing (not just complaining, offering alternatives) gives him something to engage with. Framing larger team discussion as "let's think through this together" rather than "Marcus is wrong" preserves the team dynamic while still surfacing the concern. Whether or not your specific concern wins, you've handled the situation in a way that builds rather than damages your credibility for future leadership-without-authority moments.`,
                  isOptimal: true,
                },
                {
                  id: `case-2-opt-c`,
                  label: `Just go along with the team. You're not the leader. It's not your responsibility if the approach fails.`,
                  outcome: `This is failure mode 1 from the "what doesn't work" section: doing nothing because you don't have authority. Authority-independent leadership IS leadership; the fact that you're not the formal leader doesn't relieve you of the obligation to engage when you see problems. Pure passive followership when you have substantive concerns is its own kind of failure (the "good German" problem from Lesson 11 in milder form). Better to engage skillfully than to disengage entirely. Even if Marcus doesn't update, the team and the process are better off for you having tried.`,
                  isOptimal: false,
                },
              ],
              insight: `This case illustrates leading without authority within a team you're not leading. The intuitive moves (public challenge, complete deference) both fail. The research-informed move (private conversation first, genuine curiosity, proposal pairing, careful escalation if needed) influences direction while preserving the team dynamic. The pattern: authority-independent leadership within teams operates through skillful engagement with formal leaders, not through challenging them publicly or deferring entirely.`,
            },
            {
              id: `case-3`,
              title: `Helping Someone Who Needs Guidance`,
              context: `Your younger cousin, Theo (8 years old), is struggling at his new school. He's anxious, not making friends, and has been increasingly withdrawn. His parents are aware but don't seem to know what to do. You're 12, you're not his parent or his counselor, but you actually care about him and you've been through transitions yourself. You want to help. What's the right way to do this?`,
              question: `What's the most useful approach to authority-independent help here?`,
              options: [
                {
                  id: `case-3-opt-a`,
                  label: `Sit Theo down and lecture him about what he should be doing differently. Tell him to try harder, be more outgoing, talk to other kids. Give him a plan to follow.`,
                  outcome: `Lecturing an 8-year-old who's anxious and withdrawn usually backfires. He's already feeling inadequate; telling him to "try harder" adds shame to the anxiety without giving him actual capability to address either. The "give him a plan to follow" framing assumes the problem is execution when it's probably something deeper (anxiety, social skills development, the specific situation). Authority-independent leadership with younger kids especially fails through lecturing because they lack the cognitive tools to translate advice into behavior change without scaffolded support.`,
                  isOptimal: false,
                },
                {
                  id: `case-3-opt-b`,
                  label: `Build the relationship first. Spend time with him, not as a project, but actually enjoying his company. Find things you both like doing. Ask him questions about himself with real interest. Share your own experiences of being new somewhere when relevant ("I remember when I started at my school, I felt..."). Listen carefully. Model the behaviors you'd hope he'd develop without preaching them. Over time, if he opens up about specific situations, you can offer specific perspective. Also: gently mention what you've been observing to his parents (your aunt/uncle) in case they want to bring in adult support like a counselor.`,
                  outcome: `This is what authority-independent leadership with younger kids supports. Relationship first creates the conditions where any input you offer will land. Genuine interest in him as a person (not as a project) preserves his dignity. Sharing your own experience normalizes what he's going through without making it about you. Modeling without preaching is much more effective for young kids who can't easily process abstract advice. The patience-over-lecturing approach respects that his development takes time. Mentioning to parents acknowledges the limits of what you can do as a 12-year-old cousin and brings in appropriate adult support. The combination — your direct relationship work AND knowing when to involve adults — is what mature authority-independent care looks like.`,
                  isOptimal: true,
                },
                {
                  id: `case-3-opt-c`,
                  label: `Stay out of it. He's not your kid; his parents will handle it. You're 12 and shouldn't try to help an 8-year-old with serious problems.`,
                  outcome: `Withdrawal from family situations where someone is struggling isn't always the right move. While there are limits to what a 12-year-old should take on (real mental health concerns need adult professional support), you can be a real positive presence in Theo's life through your relationship even without "fixing" his problems. The framing "not my kid" understates the value of extended family relationships, especially for kids who may benefit from having someone slightly older who's not a parent to connect with. Better to engage thoughtfully within your capacity than to withdraw entirely. The combination of your engagement AND involving adults for what's beyond your capacity is healthier than either extreme.`,
                  isOptimal: false,
                },
              ],
              insight: `This case illustrates authority-independent care for someone younger. The intuitive moves (lecturing or withdrawing entirely) both fail. The research-informed move (relationship, genuine interest, modeling, sharing experience, gentle involvement of adults when beyond your capacity) creates real positive impact without overstepping. The pattern: helping younger people through influence rather than authority works by being someone they want to be around AND knowing when to involve adults for things beyond what you can do.`,
            },
          ],
          reflectionPrompt: `All three cases share patterns: build relationship first, model rather than lecture, propose rather than just complain, involve appropriate authority when beyond your capacity. Which case felt most personally relevant?`,
        },

        {
          id: `l16-quiz`,
          type: `quiz`,
          headline: `Check your understanding`,
          questions: [
            {
              id: `q1`,
              type: `multiple-choice`,
              question: `What is "authority-independent leadership"?`,
              options: [
                `Random concept`,
                `Leadership exercised through influence, example, and earned credibility rather than through formal title or position; studied since Mary Parker Follett's early 20th century work, developed in Heifetz's adaptive leadership and Ganz's organizing tradition; more durable than authority-based leadership in many cases because influence persists across contexts`,
                `Self-leadership`,
                `Solo work`,
              ],
              correctIndex: 1,
              explanation: `The dominant form of leadership most people exercise in their lives. Most pop leadership content assumes formal authority but most actual leadership opportunities (school, friends, family, early career, community work) involve significant authority-independent dimensions.`,
            },
            {
              id: `q2`,
              type: `multiple-choice`,
              question: `What are the seven patterns that work in authority-independent leadership?`,
              options: [
                `Random list`,
                `Build relationships before you need them; develop demonstrated competence in something specific; model what you want to see; articulate vision people can engage with; organize others rather than doing it alone; start small and build through visible wins; persist through resistance`,
                `Just lead`,
                `Be charismatic`,
              ],
              correctIndex: 1,
              explanation: `None alone is sufficient; together they form the core skill. Notice that none of them depend on having formal authority; all of them can be built without title.`,
            },
            {
              id: `q3`,
              type: `multiple-choice`,
              question: `What are "relational meetings" (Ganz)?`,
              options: [
                `Group meetings`,
                `Practice from Marshall Ganz's organizing tradition: one-on-one conversations between an organizer and community member where the organizer listens deeply to understand the person's interests, values, story, concerns; different from transactional conversations or networking; foundational for building real relationships that authority-independent leadership requires`,
                `Therapy session`,
                `Random practice`,
              ],
              correctIndex: 1,
              explanation: `Core insight: relationships built before you need them are durable, while relationships built only when you want something are transactional and weak. The principle scales beyond organizing — anyone leading without formal authority benefits from sustained genuine relationship-building before specific needs arise.`,
            },
            {
              id: `q4`,
              type: `multiple-choice`,
              question: `What are the seven failure modes in authority-independent leadership?`,
              options: [
                `Random failures`,
                `Trying to compel without authority; complaining without proposing; getting morally righteous; trying to do too much yourself; expecting fairness; depending on a single relationship; confusing influence with manipulation`,
                `Being too nice`,
                `Just bad luck`,
              ],
              correctIndex: 1,
              explanation: `Each failure mode has a specific corresponding skill. Most people use several of these reflexively when they try to lead without authority. Recognizing them in advance helps you avoid them.`,
            },
            {
              id: `q5`,
              type: `multiple-choice`,
              question: `What is "proposal pairing"?`,
              options: [
                `Random practice`,
                `Practice of pairing diagnoses ("this is broken") with proposals ("here's what could work"); critical for authority-independent leadership because complaints alone produce frustration without alignment; proposals can be imperfect or invite refinement; people follow proposals more easily than diagnoses alone`,
                `Working in pairs`,
                `Bringing dates`,
              ],
              correctIndex: 1,
              explanation: `The skill is catching yourself when you're about to raise a problem and adding "here's what I think could help" before delivering. Even when the proposal isn't adopted, it shifts the dynamic from complaint to engagement.`,
            },
            {
              id: `q6`,
              type: `multiple-choice`,
              question: `What is "the long arc of leadership without authority"?`,
              options: [
                `Random concept`,
                `Pattern across organizing/movement research: authority-independent leadership operates on years-long time horizons; five phases. Relationship building, vision and small wins, coalition building, sustained engagement and adaptation, institutional anchoring; leaders who tried to produce change quickly usually failed; those who invested in longer arc produced more durable change`,
                `Long working hours`,
                `Movement art`,
              ],
              correctIndex: 1,
              explanation: `This is uncomfortable in a world that rewards visible quick action, but the empirical pattern is clear. For 12-year-olds, the framing matters because the leadership you build now operates on time scales of years; relationships and credibility accumulate slowly and pay off later.`,
            },
            {
              id: `q7`,
              type: `multiple-choice`,
              question: `What is "building conditions for influence"?`,
              options: [
                `Just relationships`,
                `Practice of investing in relationships, credibility, expertise, and coalition before specific influence needs arise. Distinguished from "transactional influence" (trying to influence specific outcomes when needed without prior investment); authority-independent leadership requires this because there's no formal position to fall back on — the conditions ARE the leadership capacity`,
                `Just expertise`,
                `Random concept`,
              ],
              correctIndex: 1,
              explanation: `Similar to financial saving: you can't draw down resources you haven't built up first. People who only try to influence in moments of need find they have little to draw on. The discipline is investing during times when you don't need anything specific.`,
            },
            {
              id: `q8`,
              type: `multiple-choice`,
              question: `Why does "trying to compel without authority" fail?`,
              options: [
                `Random failure`,
                `Telling people what to do when you have no position to back it up usually fails; natural response to "you should do X" from someone with no authority is "who are you to tell me what to do?"; same content delivered as observation, suggestion, or invitation usually lands better than as directive`,
                `People are rude`,
                `Random reaction`,
              ],
              correctIndex: 1,
              explanation: `The framing matters more than the content. The same suggestion can land as helpful observation or as overreach depending entirely on how it's framed. Authority-independent leaders catch themselves before slipping into compelling framings.`,
            },
            {
              id: `q9`,
              type: `true-false`,
              question: `True or false: If you don't have formal authority in a situation, the right move is to stay out of it.`,
              correctAnswer: false,
              explanation: `False. Authority-independent leadership IS leadership; the fact that you're not the formal leader doesn't relieve you of the obligation to engage when you see problems. Pure passive followership when you have substantive concerns is its own kind of failure. The right move is to engage skillfully through influence, not to withdraw because you lack title.`,
            },
            {
              id: `q10`,
              type: `inference`,
              question: `Your friend says "I want to change how my soccer team practices, but I'm not the captain and the captain just does whatever he wants. I'm just going to quit." Based on this lesson, what should you point out?`,
              options: [
                `"Quitting is fine"`,
                `"Quitting forfeits the possibility of leading without authority on this. Try the authority-independent leadership pattern instead. Build relationships with teammates one-on-one (genuine, not transactional). Develop competence visibly in your specific role (earn credibility). Talk to the captain privately, not publicly — frame it as 'I want to think through some ideas with you' rather than 'you're doing it wrong.' Use proposal pairing: don't just complain about current practice, offer specific alternative ideas. Find allies among teammates who share concerns; work as a small coalition rather than alone. Start with small wins (one practice idea that improves things) and build credibility for larger changes. This won't work in a day. The long arc matters — months of consistent investment in relationships, credibility, and coalition. Most authority-independent leaders give up too early; the ones who stay engaged usually produce real change. Quitting forfeits the leadership opportunity entirely; engaging skillfully produces it."`,
                `"Stay quiet"`,
                `"Confront him"`,
              ],
              correctIndex: 1,
              explanation: `Real applied authority-independent leadership literacy. Don't dismiss the friend's frustration; redirect from quitting toward the specific skills that could produce change. Reference the framework (relationships, competence, proposal pairing, allies, small wins, long arc). This is the kind of advice that can transform whether your friend becomes someone who builds change without title or someone who gives up when frustrated.`,
            },
          ],
        },

        {
          id: `l16-reflection`,
          type: `reflection`,
          headline: `Sit with this`,
          intro: `Pick the prompt that pulls at you most. Your answer is saved.`,
          prompts: [
            { id: `reflect-cognitive`, category: `Cognitive`, prompt: `Before this lesson, did you have an explicit framework for leading without authority? Has anything shifted?` },
            { id: `reflect-meta`, category: `Metacognitive`, prompt: `Honestly: which failure mode (compelling, complaining without proposing, getting righteous, doing too much alone, etc.) do you default to when you see problems but lack authority?` },
            { id: `reflect-identity`, category: `Identity`, prompt: `If you become someone who can lead without title across decades, what does that change about your impact in groups regardless of whether you have formal positions?` },
            { id: `reflect-application`, category: `Application`, prompt: `Pick one current situation where you see something that should change but you have no authority. Apply the framework. What's the actual path forward?` },
            { id: `reflect-critical`, category: `Critical`, prompt: `Are there situations where authority-independent leadership isn't the right approach? Crises requiring immediate formal authority? Situations where bystander effect requires direct intervention?` },
            { id: `reflect-personal`, category: `Personal investigation`, prompt: `Identify one person you know who leads well without formal authority. What specifically do they do? Observe their patterns over a few weeks.` },
          ],
        },

        {
          id: `l16-real-world`,
          type: `real-world`,
          headline: `Take it into your life`,
          guideContext: `Authority-independent leadership compounds across decades. Two paths.`,
          familyActivity: {
            title: `The Family Authority-Independent Leadership Conversation`,
            duration: `45 minutes`,
            description: `Share the framework. Ask family members about times they led without formal authority: at work, in community, in family, in friendships. Most adults have examples but haven't analyzed them through this framework. The conversation often surfaces patterns about what made some attempts successful and others not. Ask which failure modes the family members have fallen into and what they've learned to do differently.`,
          },
          projectOption: {
            title: `Read Marshall Ganz organizing material or Heifetz's "Leadership Without Easy Answers," 4 weeks (optional)`,
            duration: `4 weeks, ~30 minutes per session`,
            description: `Pick one: Marshall Ganz's written work or video lectures on organizing (free online, much of it through Harvard Kennedy School) or Ronald Heifetz's "Leadership Without Easy Answers" (1994, foundational adaptive leadership book). Apply concepts to one situation where you want to lead without authority. Write 1,500 words on what you learned and tried. Real applied authority-independent leadership at 12 produces durable capability.`,
            offerToParent: `Parent: opt your kid into this project. Reading real organizing/leadership-without-authority material at 12 is genuinely formative.`,
          },
          identityQuestion: `If you become someone who can lead through influence rather than position across thousands of situations over a lifetime, what does that change about the impact you can have regardless of whether you ever hold formal authority?`,
        },

        {
          id: `l16-identity-hook`,
          type: `identity-hook`,
          headline: `Who is this lesson making you?`,
          prompt: `One sentence. No wrong answer.`,
          placeholder: `Someone who...`,
          examples: [
            `Someone who builds relationships before I need them.`,
            `A person who pairs diagnoses with proposals when raising concerns.`,
            `Someone who can lead through influence without needing a title.`,
          ],
          saveKey: `identity_responses_sl_11_12_16`,
        },

        {
          id: `l16-celebration`,
          type: `celebration`,
          guideText: `{name}. Sixteenth Social Leadership lesson done. You now have the framework for leading without authority: seven patterns that work, seven failure modes, the five-phase long arc, proposal pairing, building conditions for influence, relational meetings (Ganz). You can apply these to school situations, team dynamics, and helping people who need guidance. The skills compound across decades. Next time we go into the ethics of leadership. Three positions defended by serious moral philosophers. Argument Builder format. Let's go. — Valor`,
          badge: `leader-without-title`,
          badgeName: `Leader Without Title`,
          xpEarned: 75,
          competencies: [
            `Articulates authority-independent leadership as distinct skill from authority-based leadership`,
            `Knows seven patterns that work (relationships, competence, modeling, vision, organizing, small wins, persistence)`,
            `Recognizes seven failure modes including trying to compel, complaining without proposing, moral righteousness`,
            `Applies "relational meetings" (Ganz) and "proposal pairing" practices`,
            `Operates on the long arc time horizon rather than expecting immediate results`,
          ],
          nextLessonPreview: {
            title: `Lesson 17: Ethics of Leadership`,
            hook: `Three positions defended by serious moral philosophers. Argument Builder.`,
          },
        },
      ],
    },
  ],
};

export default SOCIALLEADERSHIP_VOYAGER_L16;

if (import.meta.env?.DEV) {
  const l = SOCIALLEADERSHIP_VOYAGER_L16.lessons[0];
  const mags = l.screens.filter((s) => s.type === `magazine`).length;
  const caseStudy = l.screens.find((s) => s.type === `case-study`);
  const quiz = l.screens.find((s) => s.type === `quiz`)?.questions?.length ?? 0;
  const reflect = l.screens.find((s) => s.type === `reflection`)?.prompts?.length ?? 0;
  console.log(
    `[LESSON-SL-VOYAGER-L16 ${VERSION}] "${l.title}" — ${mags} magazine, case-study w/ ${caseStudy?.cases?.length ?? 0} cases, ${quiz} quiz, ${reflect} reflection`
  );
}
