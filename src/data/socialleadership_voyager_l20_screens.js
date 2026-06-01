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
          guideText: `{name}, you've made it. Twenty lessons. Real research from over thirty serious thinkers. Frameworks for what leadership is, how authority and power work, how to build trust, listen, make decisions, navigate conflict, distinguish persuasion from manipulation, lead through change, read status and hierarchy, engage civically, follow well, build teams, have difficult conversations, read power dynamics, weigh charisma against substance, lead without title, reason ethically, lead yourself, and read when to lead vs follow. Today's capstone forces synthesis. Which working philosophy will you take into the next 70 years of leadership? Three serious positions exist, drawing on different traditions across the band. Substance-first leadership. Relational leadership. Adaptive leadership. Each commits you to different defaults in hard situations. Build your argument. Respond to the strongest counterargument. By the end you'll have committed to a working philosophy that most working adults never explicitly articulate.`,
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
              word: `synthesis (in capstone learning)`,
              definition: `Process of integrating concepts from across many lessons into a coherent working framework. Different from review (which just remembers content). Synthesis requires identifying patterns across lessons, recognizing how frameworks complement and conflict, and committing to primary framings. The capstone format forces this synthesis by requiring you to take a position that draws on the whole band rather than just one lesson.`,
              audioPrompt: `Synthesis in capstone learning is the process of integrating concepts from across many lessons into a coherent working framework, {name}. Different from review, which just remembers content. Synthesis requires identifying patterns across lessons, recognizing how frameworks complement each other and where they conflict, and committing to primary framings even when other framings could also work. The capstone format forces this synthesis by requiring you to take a position that draws on the whole band rather than just one lesson. Most learning produces understanding of individual concepts without forcing the integration that synthesis requires. Capstone work matters because synthesis is where individual concepts become a working philosophy you can actually deploy in situations. Without synthesis, you have many concepts but no operating framework. With synthesis, the concepts cohere into something you can use.`,
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
            `Lessons across the band support this framing. Collins's Level 5 finding (L15) showed that sustained great companies were led by humility-plus-will, not by charisma. The "trust is the foundation" framing (L3) emphasizes that everything depends on whether people can rely on what you say and do. The ethics work (L17) treats character as the underlying source of good action across situations. The self-leadership work (L18) frames substance-development as foundational to leading others.`,
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
          ],
        },

        {
          id: `l20-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Position 2: Relational Leadership`,
          paragraphs: [
            `The second position: leadership is fundamentally about relationships. Real leadership emerges from sustained relationships, earned trust, deep listening, and the willingness to engage with people as people rather than as means to outcomes. Substance matters, situational skills matter, but the underlying medium of leadership is relationship. Without relational depth, even strong substance produces limited impact; with relational depth, even imperfect leaders can mobilize people to extraordinary things.`,
            `What "relational" specifically means in this framing. Building real relationships before you need them (Ganz's relational meetings from L16). Listening deeply enough that people feel heard (Rogers and Scharmer from L4). Building trust through consistent action over years (Lewicki from L3). Having difficult conversations skillfully when needed (Stone/Patton/Heen from L13). Engaging with conflict productively rather than avoiding it (Thomas-Kilmann from L6). Reading and respecting the relational dynamics in any group (Pfeffer and the three layers from L14).`,
            `Lessons across the band support this framing. The trust work (L3) and listening work (L4) place relational quality at the center of effective leadership. The leading-without-authority framework (L16) is built explicitly on relationship as the foundation of influence without title. The teams work (L12) shows psychological safety (a relational quality) as the foundational element of effective teams. The difficult conversations work (L13) treats relational skill as central to handling hard situations.`,
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
          ],
        },

        {
          id: `l20-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Position 3: Adaptive Leadership`,
          paragraphs: [
            `The third position: the most important leadership skill is reading situations accurately and responding to what each one requires. There's no single right approach to leadership; different situations require different combinations of substance, relationship, communication, decisiveness, listening, leading, following, shifting. The leader who masters one approach but can't shift to others produces predictable failures in situations that call for different approaches. The leader who can read situations and adapt outperforms both pure-substance and pure-relational approaches.`,
            `What "adaptive" specifically means in this framing. Reading each situation for its specific characteristics: who has expertise, where authority operates well, what's the actual problem, what's the time horizon, what's the political dynamic, what's the cultural context. Choosing approach based on signals rather than defaults. Holding multiple frameworks (substance, relational, communication-focused) and deploying the right one for the situation. Comfort with role-switching (L19) as the meta-skill that determines which other skills you use.`,
            `Lessons across the band support this framing. The decisions-under-uncertainty work (L5) emphasizes that different decisions need different approaches. The change leadership work (L8) covers adaptive leadership directly (Heifetz). The followership work (L11) frames dynamic role-switching as a serious position. The team-building work (L12) emphasizes diagnosing which specific element is weak before applying interventions. The when-to-lead-vs-follow work (L19) is explicitly about situational judgment as meta-skill. The ethics work (L17) recognizes ethical pluralism as how mature ethical reasoning actually works.`,
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
              word: `explicit philosophical commitment (in leadership development)`,
              definition: `Practice of consciously articulating your primary leadership framework rather than absorbing whichever framing your environment provides. Most adults operate with implicit frameworks they've never examined. Explicit commitment produces self-awareness, allows deliberate development toward the philosophy you've chosen, and creates the conditions for thoughtful revision later. Different from rigid commitment; the philosophy can be updated as you learn more.`,
              audioPrompt: `Explicit philosophical commitment in leadership development is the practice of consciously articulating your primary leadership framework rather than absorbing whichever framing your environment provides, {name}. Most adults operate with implicit frameworks they've never examined. They absorbed an approach from their parents or their early bosses or their cultural context without deliberate consideration of whether it serves them. Explicit commitment produces several specific benefits. Self-awareness: you know what you're doing and why. Deliberate development: you can pursue capabilities aligned with your chosen philosophy rather than developing randomly. Thoughtful revision: you can update your philosophy as you learn more, which requires having articulated it explicitly in the first place. Different from rigid commitment. The philosophy can and should evolve. The point isn't fixing your view for life; it's having an articulated view that you can deliberately work with. At 12, this is the developmental gift of the capstone: explicit articulation of your working philosophy at an age when most adults haven't developed one.`,
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
              summary: `The foundation of all leadership is substance: real capability in relevant domains, integrity (alignment between what you say, believe, do), judgment (reading situations and making decisions that serve people), and character (virtues developed over time). Communication skills, charisma, influence techniques are secondary, serving substance rather than substituting for it. Draws on Collins's Level 5 research, trust-as-foundation work (L3), virtue ethics (L17), self-leadership traditions (L18). Strength: addresses failure modes of charismatic-without-substance leaders, communication-skilled without integrity, influence-trained without judgment. Limit: pure substance without enough communication doesn't reach people.`,
            },
            {
              id: `relational`,
              label: `Relational leadership: relationships are the medium of leadership; trust, listening, dialogue central`,
              summary: `Leadership is fundamentally about relationships. Real leadership emerges from sustained relationships, earned trust, deep listening, engaging with people as people rather than as means to outcomes. Substance matters but its reach depends entirely on relational depth. Draws on trust work (L3, Lewicki and Edmondson), listening traditions (L4, Rogers and Scharmer), Ganz's organizing (L16), teams research on psychological safety (L12), difficult conversations work (L13). Strength: addresses why capable people often have limited impact (no relational depth) and why some less obviously capable people have outsized impact (deep relationships amplify whatever capability they have). Limit: pure relational without substance produces popularity without effectiveness.`,
            },
            {
              id: `adaptive`,
              label: `Adaptive leadership: situational judgment as meta-skill; read each situation and adapt approach`,
              summary: `The most important leadership skill is reading situations accurately and responding to what each requires. No single approach works for all situations. Different situations need different combinations of substance, relationship, communication, decisiveness, listening, leading, following, shifting. Draws on Heifetz's adaptive leadership (L8, L16), decisions-under-uncertainty work (L5), followership (L11), team diagnosis (L12), when-to-lead-vs-follow (L19), ethical pluralism (L17). Strength: addresses failure modes of leaders who mastered one approach but produce predictable failures in situations calling for different approaches. Limit: pure adaptiveness without commitment to deep development produces sophisticated reading without ability to actually do what situations require.`,
            },
          ],
          evidence: [
            {
              id: `e1`,
              text: `Jim Collins's "Good to Great" research (L15) found that companies sustaining great performance over 15 years disproportionately had "Level 5" leaders characterized by humility + will, not charisma. The empirical finding has held up in subsequent research. Distinguishes substance from surface skills.`,
              source: `Collins 2001 (covered in L15)`,
            },
            {
              id: `e2`,
              text: `Trust research (L3) consistently identifies trust as the foundation of all sustained leadership. Trust requires consistent alignment between what you say and what you do over years; without it, everything else collapses. The relational quality of trust is what produces leadership's reach.`,
              source: `Lewicki, Edmondson, related research (covered in L3)`,
            },
            {
              id: `e3`,
              text: `Project Aristotle's findings on teams (L12) showed that psychological safety — a relational quality — was the foundational element of effective teams. The other four elements all depend on the interpersonal risk-taking that psychological safety enables.`,
              source: `Google Project Aristotle research (covered in L12)`,
            },
            {
              id: `e4`,
              text: `Marshall Ganz's organizing work (L16) emphasized "relational meetings" — building real relationships before any specific need — as the foundation of authority-independent leadership. The pattern scaled across many movements that built durable change.`,
              source: `Ganz on organizing (covered in L16)`,
            },
            {
              id: `e5`,
              text: `Adaptive leadership work (L8) from Ronald Heifetz showed that complex situations require leadership that reads what each situation actually needs rather than applying default approaches. Heifetz's "adaptive vs technical" distinction emphasizes that different problems need different responses.`,
              source: `Heifetz adaptive leadership (covered in L8 and L16)`,
            },
            {
              id: `e6`,
              text: `Decisions-under-uncertainty research (L5) showed that different decision types require different approaches: Bezos's two-way doors for reversible decisions, Powell's 40/70 for incomplete information, Klein's recognition-primed for expertise-rich situations. Single decision frameworks fail across varied situations.`,
              source: `Kahneman, Klein, Annie Duke, Bezos (covered in L5)`,
            },
            {
              id: `e7`,
              text: `When-to-lead-vs-follow framing (L19) identified situational judgment as the meta-skill that determines which other leadership and followership skills you use. Five signals to lead, five to follow, five dynamic patterns requiring shifting. People who default rather than read signals produce predictable failures.`,
              source: `Situational judgment framework (covered in L19)`,
            },
            {
              id: `e8`,
              text: `Self-leadership work (L18) showed that substance development happens over years through deliberate cultivation. Stoic, Confucian, religious, and contemporary traditions converge on substance-building as foundational. Without underlying substance, external leadership amplifies whatever's inside; if what's inside is thin, the amplification doesn't help.`,
              source: `Self-leadership across traditions (covered in L18)`,
            },
            {
              id: `e9`,
              text: `Difficult conversations research (L13) showed that handling hard conversations skillfully is foundational to sustained relationships and effective leadership. The three conversations framework (Stone/Patton/Heen) addresses what most people get wrong in these critical relational moments.`,
              source: `Stone, Patton, Heen; Patterson et al (covered in L13)`,
            },
            {
              id: `e10`,
              text: `Power dynamics work (L14) showed that real influence operates through three layers (formal, informal, coalition). Skilled operators read all three and adapt their approach based on which is primary in specific situations. Single-layer focus produces predictable mistakes.`,
              source: `Pfeffer and power literacy (covered in L14)`,
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
              question: `Why does Collins's Level 5 finding (L15) support substance-first framing?`,
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
              question: `Why does Project Aristotle (L12) support relational framing?`,
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
              question: `Why does when-to-lead-vs-follow framing (L19) support adaptive philosophy?`,
              options: [
                `Random support`,
                `L19 identified situational judgment as the meta-skill that determines which other leadership and followership skills you use; five signals to lead, five to follow, five dynamic patterns; people who default rather than read signals produce predictable failures; directly supports adaptive claim that situational reading is foundational`,
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
