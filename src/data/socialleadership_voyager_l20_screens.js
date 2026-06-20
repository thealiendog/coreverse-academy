// ─────────────────────────────────────────────────────────────────────────────
// SOCIAL LEADERSHIP VOYAGER  |  L20 — CAPSTONE: Your Leadership Practice
// Age band : voyagers (11-12)   Guide: valor (Lion)
// Standards: Coreverse Original — Synthesis, Applied Leadership Philosophy
// CALIBRATED: Voyager spec v1.1 (May 2026) — CAPSTONE: 100 XP, 45 min
// Interaction format: ARGUMENT BUILDER (substance-first / relational / adaptive)
// Synthesizes L01-L19; forces commitment to working philosophy
// ─────────────────────────────────────────────────────────────────────────────

const VERSION = "voyager-sl-l20-v1";

const SOCIALLEADERSHIP_VOYAGER_L20 = {
  ageBand: `voyagers`,
  subjectId: `social-leadership`,
  guide: `valor`,

  lessons: [
    {
      id: `sl-11-12-20`,
      title: `CAPSTONE: Your Leadership Practice`,
      duration: 45,
      xpReward: 100,
      badge: `leadership-philosophy`,
      badgeName: `Leadership Philosophy`,

      screens: [
        {
          id: `l20-welcome`,
          type: `welcome`,
          guideText: `{name}, nineteen lessons — what leadership is, power, trust, listening, decisions, conflict, persuasion, change, status, civic engagement, followership, teams, difficult conversations, power dynamics, charisma, authority, ethics, self-leadership, situational judgment. Your capstone: what is your leadership practice? Not the generic version. Yours.`,
          headline: `CAPSTONE: Your Leadership Practice`,
          subtitle: `Synthesize the band. Commit to your working philosophy. Three serious positions.`,
          visual: `/voyager-assets/social-leadership/l20-welcome.webp`,
        },

        {
          id: `l20-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `What You've Built Across 19 Lessons`,
          paragraphs: [
            `Before the capstone argument, take a moment to recognize what you've built. This isn't a participation note; it's the foundation the capstone draws on. The synthesis below shows how the band fits together.`,
            `Lessons 1-3 built the foundations. Lesson 1 worked through what leadership actually IS: three positions defended by Burns, Drucker, Collins, Greenleaf, Maxwell, Grant. Lesson 2 distinguished power, authority, and influence using French and Raven's five bases and addressed the alpha-wolf misconception. Lesson 3 worked through trust as the foundation everything else builds on, drawing on Lewicki and Edmondson.`,
            `Lessons 4-7 added core leadership skills. Lesson 4 covered listening as leadership (Rogers, Scharmer, Voss). Lesson 5 covered decisions under uncertainty (Kahneman, Annie Duke, Bezos's two-way doors, Klein's recognition-primed). Lesson 6 covered navigating conflict (Thomas-Kilmann, Fisher and Ury, Voss). Lesson 7 covered persuasion vs manipulation (Cialdini's three-question ethical test, Konnikova).`,
            `Lessons 8-12 expanded into systems and groups. Lesson 8 covered leading through change (Bridges on change vs transition, Heifetz adaptive, Kotter's 8-step). Lesson 9 covered status, hierarchy, and belonging. Lesson 10 covered civic engagement (Putnam, Nisbet, Murray, subsidiarity). Lesson 11 covered followership as distinct skill (Kelley, Chaleff, Kellerman, Arendt on the good German problem). Lesson 12 covered building teams (Project Aristotle's five elements, Edmondson on psychological safety).`,
            `Lessons 13-15 added advanced skills. Lesson 13 covered difficult conversations (Stone/Patton/Heen, Patterson et al). Lesson 14 covered power dynamics in groups (formal/informal/coalition layers, Pfeffer). Lesson 15 covered charisma vs substance (Collins on Level 5, Cabane on presence + power + warmth, viral charisma coaching).`,
            `Lessons 16-19 deepened into harder situations. Lesson 16 covered leading without authority (Ganz on organizing, Heifetz on adaptive leadership, Mary Parker Follett). Lesson 17 covered ethics of leadership (consequentialism with Bentham/Mill/Singer, deontology with Kant/Ross/Rawls, virtue ethics with Aristotle/MacIntyre/Nussbaum). Lesson 18 covered leading yourself first (Covey's private victory before public victory, Stoic, Confucian self-cultivation, James Clear's atomic habits). Lesson 19 covered when to lead vs follow as situational judgment.`,
            `Look at what you have. Frameworks across the whole landscape of leadership. Real research, not pop content. Names you can call on in arguments. Specific skills you can deploy. Tomorrow, next year, in ten years, you'll be drawing on this. Most working adults have nothing remotely this thorough. Today's capstone asks: given all this, which philosophy will you make primary?`,
          ],
          image: `/voyager-assets/social-leadership/l20-s1-built.webp`,
          imageCaption: `19 lessons. 30+ serious thinkers. Frameworks across the whole landscape of leadership. Most adults have nothing this thorough.`,
          vocab: [
            {
              word: `synthesis`,
              definition: `Process of integrating concepts from across many lessons into a coherent working framework. Different from review (which just remembers content). Synthesis requires identifying patterns across lessons, recognizing how frameworks complement and conflict, and committing to primary framings. The capstone format forces this synthesis by requiring you to take a position that draws on the whole band rather than just one lesson.`,
              audioPrompt: `Synthesis in capstone learning is the process of integrating concepts from across many lessons into a coherent working framework, {name}. Different from review, which just remembers content. Synthesis requires identifying patterns across lessons, recognizing how frameworks complement each other and where they conflict, and committing to primary framings even when other framings could also work. The capstone format forces this synthesis by requiring you to take a position that draws on the whole band rather than just one lesson. Most learning produces understanding of individual concepts without forcing the integration that synthesis requires. Capstone work matters because synthesis is where individual concepts become a working philosophy you can actually deploy in situations. Without synthesis, you have many concepts but no operating framework. With synthesis, the concepts cohere into something you can use.`,
            },
            {
              word: `working philosophy`,
              definition: `A personal framework for leadership that is sufficiently specific to actually guide decisions in hard situations, developed through deliberate engagement with research and experience. Different from a vague intention ("I'll lead with integrity") or a single borrowed principle. A working philosophy integrates multiple frameworks, identifies primary commitments, and has been explicitly chosen rather than absorbed. It can evolve as experience accumulates, but the explicit articulation is what makes it workable.`,
              audioPrompt: `A working philosophy of leadership is a personal framework sufficiently specific to actually guide decisions in hard situations, {name}. Different from a vague intention like "I'll be a good leader" or a single borrowed principle like "lead with integrity." A working philosophy integrates multiple frameworks — substance, relationship, situational judgment, ethics, followership — identifies which is primary when they conflict, and has been explicitly chosen rather than unconsciously absorbed from environment. The text distinguishes it from rigid commitment: a working philosophy can evolve as you gain experience and learn more. The explicit articulation is what makes it workable. Without articulation, the framework operates implicitly and you can't deliberately develop it, can't examine it critically, and can't update it when situations reveal its limits. With articulation, you have a foundation you can work with deliberately. The capstone format forces you to develop your working philosophy at twelve, when most adults haven't done this work. The philosophy you articulate now won't be your philosophy at forty — experience will refine it. But the explicit articulation at twelve is the developmental foundation that makes deliberate refinement possible.`,
            },
            {
              word: `foundations across the band`,
              definition: `The integrated set of frameworks built across 20 lessons covering: what leadership is (L1-L3), core leadership skills (L4-L7), systems and groups (L8-L12), advanced skills (Lessons 13-15), and harder situations (Lessons 16-19). Together these frameworks constitute what the text calls a "whole landscape of leadership" coverage that most adults lack. The capstone draws on all 19 prior lessons rather than any single one.`,
              audioPrompt: `Foundations across the band refers to the integrated set of frameworks built across all twenty lessons, now available for synthesis in the capstone, {name}. The text's review section maps the structure explicitly. Lessons 1 through 3 built foundations: what leadership is, power versus authority versus influence, trust as the base everything builds on. Lessons 4 through 7 added core skills: listening, decisions under uncertainty, conflict navigation, persuasion versus manipulation. Lessons 8 through 12 expanded into systems and groups: leading through change, status and hierarchy, civic engagement, followership, building effective teams. Lessons 13 through 15 added advanced skills: difficult conversations, power dynamics in groups, charisma versus substance. Lessons 16 through 19 deepened into harder situations: leading without authority, ethics of leadership, leading yourself first, when to lead versus follow. The capstone draws on all of this rather than any single lesson. The strength of the capstone argument comes from how well you've integrated the band: picking 3-4 lessons that most support your chosen philosophy and connecting them to the thinkers and research they cited. That integration — frameworks from different lessons coalescing into a coherent philosophy — is the synthesis the capstone requires.`,
            },
          ],
        },

        {
          id: `l20-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Position 1: Substance-First Leadership`,
          paragraphs: [
            `The first position: the foundation of all leadership is substance: competence, integrity, judgment, character. Without these, communication skills and influence techniques produce manipulation or performance rather than real leadership. With these, even imperfect communication can produce real outcomes. Substance is primary; everything else is secondary.`,
            `What "substance" specifically means in this framing. Competence: real capability in domains relevant to your leadership. Integrity: alignment between what you say, what you believe, and what you do; trustworthiness even under pressure. Judgment: ability to read situations accurately and make decisions that serve people affected. Character: virtues developed over time that produce good action across many situations (courage, justice, temperance, wisdom). Together these constitute the underlying substance that everything else builds on.`,
            `Lessons across the band support this framing. Collins's Level 5 finding (Lesson 15) showed that sustained great companies were led by humility-plus-will, not by charisma. The "trust is the foundation" framing (L3) emphasizes that everything depends on whether people can rely on what you say and do. The ethics work (Lesson 17) treats character as the underlying source of good action across situations. The self-leadership work (Lesson 18) frames substance-development as foundational to leading others.`,
            `What this position implies practically. Develop real capability in your specific domain. Build integrity through consistent alignment over years. Develop judgment through deliberate practice with real decisions and feedback. Cultivate character through sustained practice of virtues. These take time. Communication skills, charisma development, influence techniques all matter but are secondary; without substance underneath, they produce hollow leadership that fails when reality tests it.`,
            `The position's strength. Addresses the failure modes visible across leadership history: charismatic leaders without substance who damaged organizations, communication-skilled leaders who lacked integrity, influence-trained leaders who lacked judgment. Substance-first treats these as predictable consequences of inverting the priority. Build substance first; communication serves the substance; everything aligns.`,
            `The position's limit. Pure substance without enough communication doesn't reach people. The brilliant scientist who can't explain her work has limited impact regardless of her substance. The competent leader who can't articulate vision can't mobilize. The position works best when it doesn't dismiss communication entirely but treats it as serving the substance rather than substituting for it. The pure version of substance-first sometimes produces leaders with real capability but limited reach.`,
          ],
          image: `/voyager-assets/social-leadership/l20-s2-substance.webp`,
          imageCaption: `Position 1: substance-first leadership. Competence, integrity, judgment, character as foundation. Communication serves substance, not vice versa.`,
          vocab: [
            {
              word: `substance-first leadership philosophy`,
              definition: `Working philosophy that treats competence, integrity, judgment, and character as the foundation of all leadership. Communication skills, charisma, influence techniques are secondary, serving the substance rather than substituting for it. Draws on Collins's Level 5 research, trust-as-foundation work, virtue ethics, and self-leadership traditions. Primary failure mode it addresses: leaders with strong surface skills but inadequate underlying substance.`,
              audioPrompt: `Substance-first leadership philosophy is a working philosophy that treats competence, integrity, judgment, and character as the foundation of all leadership, {name}. Communication skills, charisma, influence techniques, and other "leadership skills" matter but are secondary. They serve the substance rather than substituting for it. The position draws on multiple research traditions covered in this band. Collins's Level 5 research found that sustained great companies were led by humility plus will, not by charisma. Trust-as-foundation work from lesson 3 emphasized that everything depends on consistency between what you say and do. Virtue ethics from lesson 17 treats character as the underlying source of good action. Self-leadership work from lesson 18 frames substance-development as foundational to leading others. Primary failure mode this philosophy addresses: leaders with strong surface skills but inadequate underlying substance. Charismatic leaders who damage organizations, communication-skilled leaders who lack integrity, influence-trained leaders without judgment. Substance-first treats these as predictable consequences of inverting the priority.`,
            },
            {
              word: `integrity in substance-first`,
              definition: `One of four components of substance in the substance-first leadership philosophy: alignment between what you say, what you believe, and what you do — trustworthiness even under pressure. Integrity isn't demonstrated in easy situations where it costs nothing; it's demonstrated in situations where maintaining it costs something. The trust-as-foundation work from lesson 3 treats integrity as the core of what produces lasting trust, and substance-first treats it as one of four foundational qualities without which other leadership skills are hollow.`,
              audioPrompt: `Integrity in the substance-first philosophy is alignment between what you say, what you believe, and what you do — trustworthiness even under pressure, {name}. The text defines the four components of substance explicitly: competence, integrity, judgment, and character. Integrity is the second of these. It isn't the same as being consistently nice or never making mistakes. It's the alignment between your stated values and your actions, especially in situations where maintaining that alignment costs something. It's saying you'll do something and doing it when it's inconvenient. It's being honest about what you know and don't know when being honest is uncomfortable. It's refusing to cut ethical corners when cutting them would be easy and undetected. The trust-as-foundation work from lesson 3 places integrity at the center of what produces lasting trust. Lewicki's research showed that trust is built through consistent alignment over time, especially under pressure. Substance-first treats integrity as one of four foundational qualities that must be developed before communication or influence skills can serve genuine leadership rather than hollow performance. Leaders who develop integrity over years — through consistent small choices that align behavior with values — build the foundation that all their other leadership skills rest on.`,
            },
            {
              word: `hollow leadership`,
              definition: `Leadership that has surface skills but lacks the underlying substance that makes those skills produce good outcomes. Communication skills without integrity become manipulation. Charisma without judgment leads teams enthusiastically in wrong directions. Influence techniques without character exploit rather than serve. The substance-first philosophy frames hollow leadership as the predictable result of prioritizing surface skills over the foundational qualities that make those skills meaningful.`,
              audioPrompt: `Hollow leadership is the failure mode that the substance-first philosophy most directly addresses, {name}. The text describes it through the patterns it produces. Communication skills without integrity become manipulation — the person knows how to say things persuasively and uses that skill to get what they want regardless of whether it serves others. Charisma without judgment leads teams enthusiastically in the wrong direction — the amplification dynamic described in lesson 18 operates, but what gets amplified is poor judgment. Influence techniques without character exploit followers rather than serving them — the person has learned to influence and uses it for extraction rather than contribution. All of these are forms of hollow leadership: the surface capabilities are present, but the substance underneath is insufficient or missing. The substance-first claim is that prioritizing surface skills over foundational qualities produces these failure modes predictably. Build substance first; then communication serves the substance and produces real leadership. Build surface skills first, without the substance; the result is hollow leadership that fails or harms when reality tests it. The text identifies this as the primary failure mode visible across leadership history.`,
            },
          ],
        },

        {
          id: `l20-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Position 2: Relational Leadership`,
          paragraphs: [
            `The second position: leadership is fundamentally about relationships. Real leadership emerges from sustained relationships, earned trust, deep listening, and the willingness to engage with people as people rather than as means to outcomes. Substance matters, situational skills matter, but the underlying medium of leadership is relationship. Without relational depth, even strong substance produces limited impact; with relational depth, even imperfect leaders can mobilize people to extraordinary things.`,
            `What "relational" specifically means in this framing. Building real relationships before you need them (Ganz's relational meetings from Lesson 16). Listening deeply enough that people feel heard (Rogers and Scharmer from L4). Building trust through consistent action over years (Lewicki from L3). Having difficult conversations skillfully when needed (Stone/Patton/Heen from Lesson 13). Engaging with conflict productively rather than avoiding it (Thomas-Kilmann from L6). Reading and respecting the relational dynamics in any group (Pfeffer and the three layers from Lesson 14).`,
            `Lessons across the band support this framing. The trust work (L3) and listening work (L4) place relational quality at the center of effective leadership. The leading-without-authority framework (Lesson 16) is built explicitly on relationship as the foundation of influence without title. The teams work (Lesson 12) shows psychological safety (a relational quality) as the foundational element of effective teams. The difficult conversations work (Lesson 13) treats relational skill as central to handling hard situations.`,
            `What this position implies practically. Invest in relationships over years, not just transactionally. Listen more than you talk. Build trust through consistent alignment between what you say and what you do. Develop the skills of difficult conversation. Engage with conflict directly rather than avoiding. Read group dynamics carefully. The substance you develop matters, but its reach depends entirely on the relational depth you've built around it.`,
            `The position's strength. Addresses why some highly capable people have limited impact (they haven't built the relational depth that allows their substance to reach others) and why some less obviously capable people have outsized impact (they've built deep relationships that amplify whatever capability they have). Real leadership is exercised through relationship with specific people, not in abstract; the position takes that seriously.`,
            `The position's limit. Pure relational focus without substance can produce leaders who are well-liked but ineffective. Some leadership situations require capability that no amount of relational skill can substitute for: technical decisions, crisis response, strategic judgment under pressure. The position works best when relational depth combines with substance, not when relational skill substitutes for it. Pure relational without substance produces popular failure rather than effective leadership.`,
          ],
          image: `/voyager-assets/social-leadership/l20-s3-relational.webp`,
          imageCaption: `Position 2: relational leadership. Relationships are the medium of leadership. Trust, listening, difficult conversations, group dynamics central.`,
          vocab: [
            {
              word: `relational leadership philosophy`,
              definition: `Working philosophy treating relationships as the fundamental medium of leadership. Substance matters but its reach depends entirely on relational depth. Draws on trust research (Lewicki, Edmondson), listening traditions (Rogers, Scharmer), Ganz's organizing, relationship-centered ethics traditions. Primary failure mode it addresses: capable people with limited impact because they haven't built the relationships that allow their capability to reach others.`,
              audioPrompt: `Relational leadership philosophy is a working philosophy treating relationships as the fundamental medium of leadership, {name}. Substance matters but its reach depends entirely on relational depth. Without relational quality, even strong substance produces limited impact. With relational depth, even imperfect leaders can mobilize people to extraordinary things. The position draws on multiple traditions covered in this band. Trust work from lesson 3 treats trust as the foundation everything else builds on. Listening work from lesson 4 places deep listening at the center of effective leadership. Ganz's organizing tradition from lesson 16 builds influence explicitly through relationship. Teams work from lesson 12 shows psychological safety as foundational. Difficult conversations work from lesson 13 treats relational skill as central. Primary failure mode this philosophy addresses: capable people with limited impact because they haven't built the relationships that allow their capability to reach others. The brilliant scientist whose work nobody adopts. The competent manager nobody wants to work with. Real leadership is exercised through relationship with specific people, not in abstract.`,
            },
            {
              word: `relational depth`,
              definition: `Quality of relationships that gives leadership its reach. Relational depth is built through sustained investment over time — relational meetings (Ganz), deep listening (Rogers, Scharmer), trust through consistent alignment (Lewicki), direct engagement with conflict (Thomas-Kilmann), skillful difficult conversations (Stone, Patton, Heen). The relational leadership philosophy argues that substance without relational depth has limited reach; relational depth is what allows capability to actually reach and move people.`,
              audioPrompt: `Relational depth is the quality of relationships that gives leadership its reach, {name}. It's the accumulated trust, genuine mutual understanding, and willingness to engage that are built through sustained investment over time. The relational leadership philosophy argues that substance without relational depth has limited reach. You can have real competence and integrity, but if you haven't built the relationships that allow your capability to reach people, your impact is constrained. The text describes what building relational depth looks like across multiple lessons in the band. Relational meetings from Ganz's tradition (lesson 16): one-on-one conversations where you listen deeply to understand people's interests, values, and concerns before any specific ask. Deep listening from Rogers and Scharmer (lesson 4): being fully present with what someone is communicating, listening to understand rather than respond. Trust built through consistent alignment over time from Lewicki's research (lesson 3). Direct engagement with conflict rather than avoidance from Thomas-Kilmann (lesson 6). Skillful difficult conversations from Stone, Patton, and Heen (lesson 13). Each of these practices builds relational depth in a specific way. Together they constitute what it means to develop the relational foundation that the relational leadership philosophy argues is the medium through which all leadership operates.`,
            },
            {
              word: `popular failure`,
              definition: `Failure mode of the relational leadership philosophy when pursued without sufficient substance: leaders who are well-liked but ineffective. Some leadership situations require capability that no amount of relational skill can substitute for. Pure relational without substance produces leaders who have strong following but can't deliver what the following needs. The relational philosophy works best when relational depth combines with real substance, not when relational skill substitutes for capability.`,
              audioPrompt: `Popular failure is the failure mode of the relational philosophy when pursued without sufficient substance, {name}. The text names it directly as the position's primary limit: pure relational without substance produces popularity without effectiveness. Some leadership situations require capability that no amount of relational skill can substitute for. Technical decisions that require specific knowledge. Crisis response that requires decisiveness and judgment under pressure. Strategic questions that require analytical thinking about complex tradeoffs. In all of these, being well-liked and deeply trusted cannot substitute for the actual capability the situation requires. A leader who has deep relationships but lacks the judgment to make good calls will be a leader people want to follow but can't follow effectively — the relationship draws people in, but the decisions drive them into bad outcomes. The distinction is between being liked and being effective. The relational philosophy at its best combines both: real substance AND the relational depth that allows that substance to reach people. At its worst — pursued as the only thing that matters — it produces leaders who are genuinely caring and trusted but don't know enough to make good calls. Knowing this limit is part of what choosing the relational philosophy responsibly requires.`,
            },
          ],
        },

        {
          id: `l20-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Position 3: Adaptive Leadership`,
          paragraphs: [
            `The third position: the most important leadership skill is reading situations accurately and responding to what each one requires. There's no single right approach to leadership; different situations require different combinations of substance, relationship, communication, decisiveness, listening, leading, following, shifting. The leader who masters one approach but can't shift to others produces predictable failures in situations that call for different approaches. The leader who can read situations and adapt outperforms both pure-substance and pure-relational approaches.`,
            `What "adaptive" specifically means in this framing. Reading each situation for its specific characteristics: who has expertise, where authority operates well, what's the actual problem, what's the time horizon, what's the political dynamic, what's the cultural context. Choosing approach based on signals rather than defaults. Holding multiple frameworks (substance, relational, communication-focused) and deploying the right one for the situation. Comfort with role-switching (Lesson 19) as the meta-skill that determines which other skills you use.`,
            `Lessons across the band support this framing. The decisions-under-uncertainty work (L5) emphasizes that different decisions need different approaches. The change leadership work (L8) covers adaptive leadership directly (Heifetz). The followership work (Lesson 11) frames dynamic role-switching as a serious position. The team-building work (Lesson 12) emphasizes diagnosing which specific element is weak before applying interventions. The when-to-lead-vs-follow work (Lesson 19) is explicitly about situational judgment as meta-skill. The ethics work (Lesson 17) recognizes ethical pluralism as how mature ethical reasoning actually works.`,
            `What this position implies practically. Develop multiple frameworks rather than committing fully to one. Practice reading situations: who has expertise, what's the actual problem, where's authority operating well, what's the time horizon. Develop the meta-skill of choosing approach based on signals. Be comfortable shifting between roles, frameworks, and approaches as situations require. Resist the temptation to commit fully to any single framing because situations vary too much.`,
            `The position's strength. Addresses the failure mode of leaders who mastered one approach but can't adapt: the substance-focused leader who can't navigate political situations, the relationally-focused leader who can't make hard calls, the communication-focused leader without substance, the decisive leader who can't listen. Adaptive leadership treats these as failures of meta-skill (situational judgment) rather than failures of any specific framework.`,
            `The position's limit. Pure adaptiveness without commitment can produce leaders who never develop deep capability in anything because they're always adapting. Some excellence requires sustained focus on one approach over years. The position works best when adaptive judgment combines with substantial development in core areas (substance, relationship, communication), not when it substitutes for development in any of them. Pure meta-skill without underlying capability produces sophisticated reading of situations without ability to actually do what each situation requires.`,
          ],
          image: `/voyager-assets/social-leadership/l20-s4-adaptive.webp`,
          imageCaption: `Position 3: adaptive leadership. Situational judgment as meta-skill. Read each situation specifically and choose approach accordingly.`,
          vocab: [
            {
              word: `adaptive leadership philosophy`,
              definition: `Working philosophy treating situational judgment as the meta-skill that determines which other leadership skills to use. No single approach works for all situations; reading each one accurately and adapting is the foundation. Draws on Heifetz's adaptive leadership work, decisions-under-uncertainty research, when-to-lead-vs-follow framing, ethical pluralism. Primary failure mode it addresses: leaders who mastered one approach but produce predictable failures in situations calling for different approaches.`,
              audioPrompt: `Adaptive leadership philosophy is a working philosophy treating situational judgment as the meta-skill that determines which other leadership skills you use, {name}. No single approach works for all situations. Reading each one accurately and adapting is the foundation. Different situations require different combinations of substance, relationship, communication, decisiveness, listening, leading, following, shifting. The position draws on multiple traditions covered in this band. Decisions-under-uncertainty work emphasizes different decisions need different approaches. Change leadership work covers adaptive leadership directly through Heifetz. Followership work frames dynamic role-switching. Team-building work emphasizes diagnosing which specific element is weak before intervening. When-to-lead-vs-follow work is explicitly about situational judgment as meta-skill. Ethics work recognizes ethical pluralism as how mature reasoning actually works. Primary failure mode this philosophy addresses: leaders who mastered one approach but produce predictable failures in situations calling for different approaches. Substance-focused leader who can't navigate politics, relationally-focused leader who can't make hard calls, decisive leader who can't listen.`,
            },
            {
              word: `Heifetz adaptive vs technical`,
              definition: `Core distinction in Heifetz's adaptive leadership framework: technical problems have known solutions that can be applied by existing expertise; adaptive challenges require learning and change by the people involved. Different problems need different leadership responses. Technical problems: bring expertise and apply solution. Adaptive challenges: engage people in the difficult work of changing values, beliefs, or behaviors. Heifetz argues that applying technical solutions to adaptive challenges is one of the most common leadership failures.`,
              audioPrompt: `Heifetz's adaptive versus technical distinction is a core concept from Ronald Heifetz's adaptive leadership framework, covered in lessons 8 and 16 and identified in the capstone as support for the adaptive philosophy, {name}. Heifetz distinguishes two types of problems. Technical problems have known solutions that can be applied by existing expertise. The organization needs a better inventory system — bring in someone who knows inventory systems and apply the solution. The team needs a new communication protocol — have someone with that expertise design and implement it. Adaptive challenges require something different: they require learning and change by the people actually involved in the situation. The organization is struggling with culture — the solution isn't a policy change but a shift in how people actually behave, which requires their own learning and development. The team is stuck in conflict — the solution isn't a procedure but a change in how team members relate to each other, which they have to develop themselves. Heifetz argues that one of the most common leadership failures is applying technical solutions to adaptive challenges: bringing in experts to solve what is actually a problem of learning and change in the people involved. Adaptive philosophy builds on this: the meta-skill of accurately reading what type of problem you're facing determines what leadership approach is appropriate.`,
            },
            {
              word: `sophisticated reading without capability`,
              definition: `Failure mode of the adaptive philosophy when pursued without underlying capability development: reading situations accurately but lacking the underlying skills to actually do what each situation requires. Pure meta-skill without substance produces sophisticated diagnosis without execution. The adaptive philosophy works best when situational judgment directs deep development in relevant areas, not when situational reading substitutes for actually developing those areas.`,
              audioPrompt: `Sophisticated reading without capability is the failure mode the text identifies in the adaptive philosophy when pursued without underlying development in core areas, {name}. The limit is stated directly: pure adaptiveness without commitment to deep development produces sophisticated reading without ability to actually do what situations require. You can read that a situation needs relational depth, but if you haven't built relational skills, reading that isn't enough. You can read that a situation needs technical capability, but if you haven't developed that capability, the accurate reading doesn't help. You can read that a situation calls for ethical judgment under pressure, but if you haven't cultivated the character and ethical framework that judgment requires, knowing you should have it doesn't produce it. The adaptive philosophy at its best develops deep capability in multiple areas — substance, relationship, communication, followership — and then deploys situational judgment to know which to use when. At its worst, pursued as a substitute for deep development, it produces a leader who can diagnose accurately but can't execute. The text's framing is exactly right: pure meta-skill without underlying capability produces sophisticated reading without ability to do what situations require. The adaptive philosophy requires the development, not just the reading.`,
            },
          ],
        },

        {
          id: `l20-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Before You Commit`,
          paragraphs: [
            `As you build your capstone argument, recognize what you're doing. You're committing to a primary framing that will shape how you approach thousands of leadership situations over decades. The commitment isn't permanent (you can update later as you learn more), but it's real (you have to default to something in hard moments). Choosing deliberately produces dramatically different outcomes than absorbing whatever framing your environment offers.`,
            `One framing to consider. The three positions aren't strictly mutually exclusive. Most mature leadership blends elements: substance, relationships, and adaptive judgment all matter. The commitment forces you to identify which is PRIMARY when they conflict, which gets the default in hard moments. Pure substance-first occasionally underweights relationship; pure relational occasionally underweights substance; pure adaptive occasionally underweights deep development in core areas. The choice is about defaults, not about ignoring the others.`,
            `Another framing. Each position has a specific danger if pursued purely. Substance without communication doesn't reach people. Relationship without substance produces popularity without impact. Adaptiveness without deep development produces sophisticated reading without ability to actually do what situations require. Your commitment to a primary position should be paired with awareness of what its pure version can miss.`,
            `One last framing. You're 12. Whatever position you take, you'll be living with it (consciously or not) for years. Most adults absorb whatever framing their environment offers and never explicitly articulate it. Explicit articulation at 12 produces self-awareness most adults never develop. You can change your mind later; the explicit articulation now is the developmental gift.`,
            `As you build, draw on specific lessons. Pick three or four from across the band that most support your position. Name them. Cite the thinkers. Make your argument concrete by anchoring it in the specific frameworks you've built across 19 lessons. The strength of the capstone argument comes from how well you've integrated the band, not from how cleverly you can defend a position in the abstract.`,
          ],
          image: `/voyager-assets/social-leadership/l20-s5-before.webp`,
          imageCaption: `Commit to primary framing while remaining aware of what the pure version misses. Build on specific lessons from across the band.`,
          vocab: [
            {
              word: `explicit philosophical commitment`,
              definition: `Practice of consciously articulating your primary leadership framework rather than absorbing whichever framing your environment provides. Most adults operate with implicit frameworks they've never examined. Explicit commitment produces self-awareness, allows deliberate development toward the philosophy you've chosen, and creates the conditions for thoughtful revision later. Different from rigid commitment; the philosophy can be updated as you learn more.`,
              audioPrompt: `Explicit philosophical commitment in leadership development is the practice of consciously articulating your primary leadership framework rather than absorbing whichever framing your environment provides, {name}. Most adults operate with implicit frameworks they've never examined. They absorbed an approach from their parents or their early bosses or their cultural context without deliberate consideration of whether it serves them. Explicit commitment produces several specific benefits. Self-awareness: you know what you're doing and why. Deliberate development: you can pursue capabilities aligned with your chosen philosophy rather than developing randomly. Thoughtful revision: you can update your philosophy as you learn more, which requires having articulated it explicitly in the first place. Different from rigid commitment. The philosophy can and should evolve. The point isn't fixing your view for life; it's having an articulated view that you can deliberately work with. At 12, this is the developmental gift of the capstone: explicit articulation of your working philosophy at an age when most adults haven't developed one.`,
            },
            {
              word: `the danger of each pure version`,
              definition: `Pattern identified in the lesson: each of the three positions has a specific danger when pursued purely and without awareness of its limits. Substance without communication doesn't reach people. Relationship without substance produces popularity without effectiveness. Adaptiveness without deep development produces sophisticated reading without ability to execute. Committing to a primary position should be paired with awareness of what its pure version misses.`,
              audioPrompt: `The danger of each pure version is a pattern the capstone text identifies as important to hold alongside your philosophical commitment, {name}. Each of the three positions has a specific danger when pursued purely. Substance-first pursued purely: brilliant, capable, high-integrity leaders whose substance never reaches people because they haven't invested in the relational depth and communication that would allow it. Relational pursued purely: popular, trusted, well-liked leaders who can't make hard calls or deliver on technical challenges because relational skill can't substitute for the underlying capability the situation requires. Adaptive pursued purely: sophisticated readers of situations who can diagnose accurately what each situation needs but lack the deep development in any area that would allow them to actually do what they've diagnosed. The text makes the implication explicit: your commitment to a primary position should be paired with awareness of what its pure version can miss. Committing to substance-first should go alongside genuine attention to relationship and communication. Committing to relational should go alongside genuine development of substance. Committing to adaptive should go alongside genuine development in the core areas that situational judgment directs you toward. The primary commitment gives you a default; the awareness of its limits keeps the default from becoming a blind spot.`,
            },
            {
              word: `development over decades`,
              definition: `The time horizon for applying the working philosophy built in this capstone. The philosophy articulated at 12 is not the final version but the foundation. Experience will refine it. Situations that don't fit neatly will reveal limits. New research will add framings not covered in the band. The explicit articulation at 12 is valuable not because it's final but because it's the starting point for deliberate refinement over decades. Most adults never have this starting point; they improvise.`,
              audioPrompt: `Development over decades is the time horizon that makes the capstone work meaningful, {name}. The working philosophy you articulate in this capstone is not your final philosophy. It's the foundation. The text is explicit about this: the commitment isn't permanent, it can be updated, the explicit articulation is the developmental gift, not the completed work. You're twelve. The leadership situations you'll face at twenty-five, at forty, at sixty will test the philosophy in ways that classroom frameworks can't anticipate. Some will confirm it. Some will reveal its limits. Some will add framings not covered in the twenty lessons of this band. The value of articulating it explicitly now is that you have a starting point for deliberate refinement rather than having to construct a framework under pressure in situations that require it. Most adults who never explicitly articulate a leadership philosophy improvise in each new situation, drawing on scattered influences without a coherent framework. Their approaches are often inconsistent — different in different situations not because they're reading situations and adapting, but because they never had a framework that gave their choices consistency. Explicit articulation at twelve gives you something to work with deliberately across the decades that follow.`,
            },
          ],
        },

        // ───── ARGUMENT BUILDER (CAPSTONE) ─────────────────────────────────────
        {
          id: `l20-argument-builder`,
          type: `argument-builder`,
          headline: `Your Working Philosophy Of Leadership`,
          intro: `This is the capstone. Pick the position that captures your primary framing. Build your case with 4-5 pieces of evidence drawn from across the band. Respond to the strongest counterargument. Commit to what you'll default to in hard situations.`,
          positions: [
            {
              id: `substance-first`,
              label: `Substance-first leadership: competence, integrity, judgment, character as foundation; everything else serves substance`,
              summary: `The foundation of all leadership is substance: real capability in relevant domains, integrity (alignment between what you say, believe, do), judgment (reading situations and making decisions that serve people), and character (virtues developed over time). Communication skills, charisma, influence techniques are secondary, serving substance rather than substituting for it. Draws on Collins's Level 5 research, trust-as-foundation work (L3), virtue ethics (Lesson 17), self-leadership traditions (Lesson 18). Strength: addresses failure modes of charismatic-without-substance leaders, communication-skilled without integrity, influence-trained without judgment. Limit: pure substance without enough communication doesn't reach people.`,
            },
            {
              id: `relational`,
              label: `Relational leadership: relationships are the medium of leadership; trust, listening, dialogue central`,
              summary: `Leadership is fundamentally about relationships. Real leadership emerges from sustained relationships, earned trust, deep listening, engaging with people as people rather than as means to outcomes. Substance matters but its reach depends entirely on relational depth. Draws on trust work (L3, Lewicki and Edmondson), listening traditions (L4, Rogers and Scharmer), Ganz's organizing (Lesson 16), teams research on psychological safety (Lesson 12), difficult conversations work (Lesson 13). Strength: addresses why capable people often have limited impact (no relational depth) and why some less obviously capable people have outsized impact (deep relationships amplify whatever capability they have). Limit: pure relational without substance produces popularity without effectiveness.`,
            },
            {
              id: `adaptive`,
              label: `Adaptive leadership: situational judgment as meta-skill; read each situation and adapt approach`,
              summary: `The most important leadership skill is reading situations accurately and responding to what each requires. No single approach works for all situations. Different situations need different combinations of substance, relationship, communication, decisiveness, listening, leading, following, shifting. Draws on Heifetz's adaptive leadership (L8, Lesson 16), decisions-under-uncertainty work (L5), followership (Lesson 11), team diagnosis (Lesson 12), when-to-lead-vs-follow (Lesson 19), ethical pluralism (Lesson 17). Strength: addresses failure modes of leaders who mastered one approach but produce predictable failures in situations calling for different approaches. Limit: pure adaptiveness without commitment to deep development produces sophisticated reading without ability to actually do what situations require.`,
            },
          ],
          evidence: [
            {
              id: `e1`,
              text: `Jim Collins's "Good to Great" research (Lesson 15) found that companies sustaining great performance over 15 years disproportionately had "Level 5" leaders characterized by humility + will, not charisma. The empirical finding has held up in subsequent research. Distinguishes substance from surface skills.`,
              source: `Collins 2001 (covered in Lesson 15)`,
            },
            {
              id: `e2`,
              text: `Trust research (L3) consistently identifies trust as the foundation of all sustained leadership. Trust requires consistent alignment between what you say and what you do over years; without it, everything else collapses. The relational quality of trust is what produces leadership's reach.`,
              source: `Lewicki, Edmondson, related research (covered in L3)`,
            },
            {
              id: `e3`,
              text: `Project Aristotle's findings on teams (Lesson 12) showed that psychological safety — a relational quality — was the foundational element of effective teams. The other four elements all depend on the interpersonal risk-taking that psychological safety enables.`,
              source: `Google Project Aristotle research (covered in Lesson 12)`,
            },
            {
              id: `e4`,
              text: `Marshall Ganz's organizing work (Lesson 16) emphasized "relational meetings" — building real relationships before any specific need — as the foundation of authority-independent leadership. The pattern scaled across many movements that built durable change.`,
              source: `Ganz on organizing (covered in Lesson 16)`,
            },
            {
              id: `e5`,
              text: `Adaptive leadership work (L8) from Ronald Heifetz showed that complex situations require leadership that reads what each situation actually needs rather than applying default approaches. Heifetz's "adaptive vs technical" distinction emphasizes that different problems need different responses.`,
              source: `Heifetz adaptive leadership (covered in L8 and Lesson 16)`,
            },
            {
              id: `e6`,
              text: `Decisions-under-uncertainty research (L5) showed that different decision types require different approaches: Bezos's two-way doors for reversible decisions, Powell's 40/70 for incomplete information, Klein's recognition-primed for expertise-rich situations. Single decision frameworks fail across varied situations.`,
              source: `Kahneman, Klein, Annie Duke, Bezos (covered in L5)`,
            },
            {
              id: `e7`,
              text: `When-to-lead-vs-follow framing (Lesson 19) identified situational judgment as the meta-skill that determines which other leadership and followership skills you use. Five signals to lead, five to follow, five dynamic patterns requiring shifting. People who default rather than read signals produce predictable failures.`,
              source: `Situational judgment framework (covered in Lesson 19)`,
            },
            {
              id: `e8`,
              text: `Self-leadership work (Lesson 18) showed that substance development happens over years through deliberate cultivation. Stoic, Confucian, religious, and contemporary traditions converge on substance-building as foundational. Without underlying substance, external leadership amplifies whatever's inside; if what's inside is thin, the amplification doesn't help.`,
              source: `Self-leadership across traditions (covered in Lesson 18)`,
            },
            {
              id: `e9`,
              text: `Difficult conversations research (Lesson 13) showed that handling hard conversations skillfully is foundational to sustained relationships and effective leadership. The three conversations framework (Stone/Patton/Heen) addresses what most people get wrong in these critical relational moments.`,
              source: `Stone, Patton, Heen; Patterson et al (covered in Lesson 13)`,
            },
            {
              id: `e10`,
              text: `Power dynamics work (Lesson 14) showed that real influence operates through three layers (formal, informal, coalition). Skilled operators read all three and adapt their approach based on which is primary in specific situations. Single-layer focus produces predictable mistakes.`,
              source: `Pfeffer and power literacy (covered in Lesson 14)`,
            },
          ],
          counterargument: {
            id: `counter`,
            text: `"You picked your position. Here's the strongest objection. You've been building toward this for 19 lessons, and the capstone forces a commitment that may be premature. You're 12. You don't have the leadership experience to actually know which framing serves best. The major leadership philosophers (Collins, Heifetz, Greenleaf, Aristotle, Confucius, Ganz, Edmondson) — disagree precisely because the question is hard, and most of them developed their views after decades of experience. Maybe the most honest answer at 12 is 'I don't know yet; I'll develop my view as I get experience leading.' Premature commitment risks locking you into a framing that doesn't fit your specific situations, and the confident-12-year-old who declared their leadership philosophy often becomes the confused-25-year-old who has to unlearn what they committed to too early. Why think you can choose well at 12, when the people you've been studying took decades to develop their positions?"`,
            promptInstruction: `In 4-5 sentences, respond. Is committing to a primary framing at 12 premature, or is explicit articulation the developmental gift that lets you grow deliberately? How does your position handle this challenge?`,
          },
          reflectionPrompt: `Looking at the positions you didn't pick, which has the strongest argument that you'd find hardest to dismiss? Why?`,
        },

        {
          id: `l20-quiz`,
          type: `quiz`,
          headline: `Synthesis check`,
          questions: [
            {
              id: `q1`,
              type: `multiple-choice`,
              question: `What does "substance-first leadership philosophy" argue?`,
              options: [
                `Random claim`,
                `Competence, integrity, judgment, character are foundation of all leadership; communication skills, charisma, influence techniques are secondary, serving substance rather than substituting for it; draws on Collins's Level 5 research, trust-as-foundation, virtue ethics, self-leadership traditions; primary failure mode addressed: leaders with strong surface skills but inadequate underlying substance`,
                `Be serious`,
                `Avoid charisma`,
              ],
              correctIndex: 1,
              explanation: `The position has real strength addressing failure modes visible across leadership history: charismatic-without-substance leaders, communication-skilled without integrity, influence-trained without judgment. Limit: pure substance without enough communication doesn't reach people.`,
            },
            {
              id: `q2`,
              type: `multiple-choice`,
              question: `What does "relational leadership philosophy" argue?`,
              options: [
                `Be nice`,
                `Leadership is fundamentally about relationships; real leadership emerges from sustained relationships, earned trust, deep listening, engaging with people as people; substance matters but reach depends entirely on relational depth; draws on trust work, listening traditions, Ganz's organizing, psychological safety, difficult conversations work; addresses why capable people often have limited impact`,
                `Be popular`,
                `Just be nice`,
              ],
              correctIndex: 1,
              explanation: `Real leadership is exercised through relationship with specific people, not in abstract. Limit: pure relational without substance produces popularity without effectiveness. Some situations require capability no amount of relational skill can substitute for.`,
            },
            {
              id: `q3`,
              type: `multiple-choice`,
              question: `What does "adaptive leadership philosophy" argue?`,
              options: [
                `Be flexible`,
                `Most important leadership skill is reading situations accurately and responding to what each requires; no single approach works for all situations; different situations need different combinations of substance, relationship, communication, decisiveness, listening; draws on Heifetz, decisions-under-uncertainty, when-to-lead-vs-follow, ethical pluralism`,
                `Be wishy-washy`,
                `Just adapt`,
              ],
              correctIndex: 1,
              explanation: `Addresses failure modes of leaders who mastered one approach but produce predictable failures in situations calling for different approaches. Limit: pure adaptiveness without commitment to deep development produces sophisticated reading without ability to actually do what situations require.`,
            },
            {
              id: `q4`,
              type: `multiple-choice`,
              question: `Why does Collins's Level 5 finding (Lesson 15) support substance-first framing?`,
              options: [
                `Random support`,
                `Collins's empirical research found that companies sustaining great performance over 15 years had Level 5 leaders (humility + will), NOT charismatic CEOs; the finding directly contradicts the charisma-is-everything framing; supports the substance-first claim that underlying qualities matter more than surface skills for sustained outcomes`,
                `It's old`,
                `Random research`,
              ],
              correctIndex: 1,
              explanation: `Foundational empirical finding against pure charisma as the key trait. The finding has held up in multiple replications. Substance-first treats charismatic-without-substance leaders as predictable failure mode that the empirical research confirms.`,
            },
            {
              id: `q5`,
              type: `multiple-choice`,
              question: `Why does Project Aristotle (Lesson 12) support relational framing?`,
              options: [
                `Random support`,
                `Project Aristotle found that psychological safety — a relational quality — was the foundational element of effective teams; the other four elements all depend on the interpersonal risk-taking that psychological safety enables; supports relational claim that the underlying medium of effective work is relational quality`,
                `Random research`,
                `Just a study`,
              ],
              correctIndex: 1,
              explanation: `Google's research on 180+ teams found that WHO was on the team mattered less than HOW the team functioned. Of the five elements that distinguished effective teams, psychological safety was most important and foundational. Supports the framing that relational quality is the underlying medium.`,
            },
            {
              id: `q6`,
              type: `multiple-choice`,
              question: `Why does when-to-lead-vs-follow framing (Lesson 19) support adaptive philosophy?`,
              options: [
                `Random support`,
                `Lesson 19 identified situational judgment as the meta-skill that determines which other leadership and followership skills you use; five signals to lead, five to follow, five dynamic patterns; people who default rather than read signals produce predictable failures; directly supports adaptive claim that situational reading is foundational`,
                `It's recent`,
                `Random framework`,
              ],
              correctIndex: 1,
              explanation: `The meta-skill framing (situational judgment determines what other skills you use) is the core of adaptive philosophy. The lesson explicitly showed that reading specific signals produces dramatically better outcomes than applying general default rules.`,
            },
            {
              id: `q7`,
              type: `multiple-choice`,
              question: `What is "explicit philosophical commitment" in leadership development?`,
              options: [
                `Random concept`,
                `Practice of consciously articulating your primary leadership framework rather than absorbing whichever framing your environment provides; produces self-awareness, allows deliberate development, creates conditions for thoughtful revision later; different from rigid commitment (philosophy can evolve); at 12, the developmental gift is explicit articulation when most adults haven't done it`,
                `Just opinions`,
                `Strict beliefs`,
              ],
              correctIndex: 1,
              explanation: `Most adults operate with implicit frameworks they've never examined. They absorbed an approach from parents, early bosses, or cultural context without deliberate consideration. Explicit commitment produces self-awareness, deliberate development, and thoughtful revision capability that implicit frameworks don't.`,
            },
            {
              id: `q8`,
              type: `multiple-choice`,
              question: `What does "synthesis in capstone learning" require?`,
              options: [
                `Just review`,
                `Process of integrating concepts from across many lessons into a coherent working framework; different from review (which just remembers content); requires identifying patterns across lessons, recognizing how frameworks complement and conflict, committing to primary framings; the capstone format forces synthesis by requiring positions drawing on whole band`,
                `Memorization`,
                `Random skill`,
              ],
              correctIndex: 1,
              explanation: `Without synthesis, you have many concepts but no operating framework. With synthesis, the concepts cohere into something you can actually use. Capstone work matters because synthesis is where individual concepts become a working philosophy you can deploy in situations.`,
            },
            {
              id: `q9`,
              type: `true-false`,
              question: `True or false: The three leadership philosophies (substance-first, relational, adaptive) are strictly mutually exclusive; you can only hold one.`,
              correctAnswer: false,
              explanation: `False. Most mature leadership blends elements from all three: substance, relationships, and adaptive judgment all matter. The commitment forces identifying which is PRIMARY when they conflict, which gets the default in hard moments. Pure versions of any single position have known limits; the choice is about defaults, not about ignoring the others.`,
            },
            {
              id: `q10`,
              type: `inference`,
              question: `You're 25, leading your first team at work. A team member is struggling. Your boss is pressuring you for results. You have to decide: invest time in the struggling team member (relational), apply your technical expertise to make the decision yourself (substance-first), or read whether this needs a different approach entirely (adaptive). How does your capstone philosophy guide you?`,
              options: [
                `"Just decide"`,
                `"Your philosophy provides the default; the situation provides the specifics. Substance-first default: invest in your own capability to make the right call AND develop the team member's underlying capability so the issue doesn't recur. Relational default: invest first in understanding what's actually going on for the team member through real conversation, AND in maintaining trust with your boss through clear communication. Adaptive default: read the specific signals — is this an expertise problem (substance solves it), a relationship problem (relational solves it), or a situational problem requiring shifted approach? The committed philosophy gives you a starting point; the situational specifics determine application. Notice what's NOT acceptable: the unexamined leader who just does whatever feels right without framework typically defaults to whatever their environment trained them to do, which may be the opposite of what the situation requires. Your explicit commitment, paired with situational reading, produces dramatically better outcomes than no commitment at all."`,
                `"Pick one"`,
                `"Random answer"`,
              ],
              correctIndex: 1,
              explanation: `Real applied capstone synthesis. The philosophy provides defaults; the situation provides specifics. Notice how the question integrates concepts from across the band: substance, relationships, situational judgment, ethical reasoning. This is what synthesis at 12 looks like.`,
            },
          ],
        },

        {
          id: `l20-reflection`,
          type: `reflection`,
          headline: `Sit with what you've built`,
          intro: `The capstone reflection. Pick the prompt that pulls at you most. Take real time with it.`,
          prompts: [
            { id: `reflect-cognitive`, category: `Cognitive`, prompt: `What's the most important thing you've learned across these 20 lessons? Why does it matter?` },
            { id: `reflect-meta`, category: `Metacognitive`, prompt: `Looking at the philosophy you chose, what's its biggest blind spot? What will you need to deliberately develop to counter it?` },
            { id: `reflect-identity`, category: `Identity`, prompt: `If you become someone who actually lives your chosen leadership philosophy across 70 years, what does that change about what you can contribute to the world?` },
            { id: `reflect-application`, category: `Application`, prompt: `Pick one current situation in your life. Apply your philosophy. What does it suggest doing that you wouldn't have done without the framework?` },
            { id: `reflect-critical`, category: `Critical`, prompt: `Where might your philosophy be wrong? What kinds of situations or evidence would lead you to update it?` },
            { id: `reflect-personal`, category: `Personal investigation`, prompt: `Tell one trusted adult about your chosen philosophy and why. Ask them what they think. What do you learn from their response?` },
            { id: `reflect-future`, category: `Future`, prompt: `Imagine yourself at 25, 50, and 70. Same philosophy or different? How might the same underlying values express themselves differently at different life stages?` },
            { id: `reflect-band`, category: `Band synthesis`, prompt: `Across all 20 lessons, which thinker or framework affected you most personally? What about it landed? How will you carry it forward?` },
          ],
        },

        {
          id: `l20-real-world`,
          type: `real-world`,
          headline: `Carry this forward`,
          guideContext: `The capstone work is done. What you do with it next determines everything. Two paths.`,
          familyActivity: {
            title: `The Family Leadership Philosophy Conversation`,
            duration: `60 minutes`,
            description: `Share the three philosophies (substance-first, relational, adaptive). Tell your family which you chose and why. Ask each family member which they default to and whether they chose it deliberately. Most family members will discover they've been operating with an implicit philosophy without examination. The conversation often surfaces real differences in how family members approach leadership across work, family, and community contexts. Hearing the differences makes everyone's implicit framework more visible.`,
          },
          projectOption: {
            title: `Build your "leadership practice document," ongoing (recommended)`,
            duration: `Ongoing, 30 minutes/week`,
            description: `Create a personal document that captures your leadership philosophy, the key frameworks you'll use, and specific commitments about how you'll develop. Update it once a month for the next two years. Track which lessons from this band you actually applied in situations. Note where your philosophy got refined through experience. This isn't a school assignment; it's the working document that becomes your accumulated wisdom across years. The 12-year-olds who do this become 22-year-olds with documented leadership development most working adults never have.`,
            offerToParent: `Parent: opt your kid into this project. The 30-minute weekly investment compounds across years into something genuinely valuable.`,
          },
          identityQuestion: `You're 12 and you have an explicitly chosen leadership philosophy grounded in real research across 20 lessons. Most working adults don't have this. Over the next 70 years of leadership across school, work, family, community — what does that change about who you become and what you can offer?`,
        },

        {
          id: `l20-identity-hook`,
          type: `identity-hook`,
          headline: `Who are you now?`,
          prompt: `One sentence. After 20 lessons, after the capstone synthesis, who are you becoming? No wrong answer.`,
          placeholder: `Someone who...`,
          examples: [
            `Someone with an explicitly chosen leadership philosophy that I'll develop across decades.`,
            `A person who can lead with substance, build through relationship, and adapt to what situations require.`,
            `Someone who's done real leadership work at 12 that most adults never do.`,
          ],
          saveKey: `identity_responses_sl_11_12_20`,
        },

        {
          id: `l20-celebration`,
          type: `celebration`,
          guideText: `{name}. You did it. Twenty Social Leadership lessons complete. You can now articulate three serious working philosophies of leadership (substance-first, relational, adaptive), know over thirty serious thinkers across leadership research, have frameworks for everything from trust and listening to power dynamics and ethics, can navigate difficult conversations and lead without authority, can read when to lead vs follow, have committed to your primary framing. Most working adults don't have any of this. You're 12 and you have it explicitly. This is the foundation. The next 70 years of leadership, across school, work, family, community — will be built on what you've developed here. The Social Leadership Voyager band is complete. You've earned it. — Valor`,
          badge: `leadership-philosophy`,
          badgeName: `Leadership Philosophy`,
          xpEarned: 100,
          competencies: [
            `Synthesizes 20 lessons into coherent working leadership philosophy`,
            `Articulates three primary philosophical positions (substance-first, relational, adaptive)`,
            `Connects philosophy to specific frameworks across the band (Collins, Edmondson, Heifetz, Ganz, Kant, Aristotle, etc.)`,
            `Commits to primary framing while remaining aware of its limits`,
            `Has done explicit leadership philosophy work most working adults never do`,
            `Ready to apply accumulated learning across decades of varied leadership situations`,
          ],
          bandComplete: true,
          nextLessonPreview: {
            title: `Social Leadership Voyager: COMPLETE`,
            hook: `20/20 lessons. Foundation built. Next band: Life Wellness (Terra/Wolf) or Caro's choice.`,
          },
        },
      ],
    },
  ],
};

export default SOCIALLEADERSHIP_VOYAGER_L20;

if (import.meta.env?.DEV) {
  const l = SOCIALLEADERSHIP_VOYAGER_L20.lessons[0];
  const mags = l.screens.filter((s) => s.type === `magazine`).length;
  const argEvi = l.screens.find((s) => s.type === `argument-builder`)?.evidence?.length ?? 0;
  const quiz = l.screens.find((s) => s.type === `quiz`)?.questions?.length ?? 0;
  const reflect = l.screens.find((s) => s.type === `reflection`)?.prompts?.length ?? 0;
  console.log(
    `[LESSON-SL-VOYAGER-L20 CAPSTONE ${VERSION}] "${l.title}" — ${mags} magazine, argument-builder w/ ${argEvi} evidence, ${quiz} quiz, ${reflect} reflection — 100 XP, 45 min`
  );
}
