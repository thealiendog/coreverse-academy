// ─────────────────────────────────────────────────────────────────────────────
// SOCIAL LEADERSHIP VOYAGER  |  L08 — Leading Through Change
// Age band : voyagers (11-12)   Guide: valor (Lion)
// Standards: Coreverse Original — Change Leadership, Adaptive Leadership
// CALIBRATED: Voyager spec v1.1 (May 2026)
// Interaction format: ARGUMENT BUILDER (vision-driven / process-driven / adaptive-emergent)
// ─────────────────────────────────────────────────────────────────────────────

const VERSION = "voyager-sl-l08-v1";

const SOCIALLEADERSHIP_VOYAGER_L08 = {
  ageBand: `voyagers`,
  subjectId: `social-leadership`,
  guide: `valor`,

  lessons: [
    {
      id: `sl-11-12-08`,
      title: `Leading Through Change`,
      duration: 35,
      xpReward: 75,
      badge: `change-leader`,
      badgeName: `Change Leader`,

      screens: [
        {
          id: `l08-welcome`,
          type: `welcome`,
          guideText: `{name}, change is one of the hardest things leaders face. Most people resist change. Most organizational change efforts fail. Even when change is clearly necessary, getting people through it well is genuinely difficult. Real change leadership researchers have approached the problem differently and reached different conclusions about what works. Today you look at three serious positions: leading change through vision and inspiration, leading change through careful systematic process, and leading change through adaptive responses to genuinely complex situations. Each has serious defenders. Pick the position that fits your thinking, build your case, then engage with the strongest counterargument. The skill matters because you'll lead through change many times across your lifetime.`,
          headline: `Leading Through Change`,
          subtitle: `Three serious positions. Change is hard; how you approach it matters.`,
          visual: `/voyager-assets/social-leadership/l08-welcome.webp`,
        },

        {
          id: `l08-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Why Change Is Genuinely Hard`,
          paragraphs: [
            `Change is hard for reasons that have been well-studied. Knowing why helps explain why some change efforts succeed and others fail. The patterns aren't random; they reflect predictable features of how humans, groups, and systems respond to disruption.`,
            `First: status quo bias. Humans (and human groups) have measurable psychological preference for the status quo over equivalent change. Daniel Kahneman and Amos Tversky documented this in research on prospect theory: people consistently weight losses (what they'll give up through change) more heavily than equivalent gains (what they'll gain). The same outcome framed as gain vs loss produces different reactions. Status quo bias means change usually faces psychological headwinds beyond its actual costs.`,
            `Second: William Bridges's distinction between change and transition. "Change" is the external event (new job, new schedule, new structure). "Transition" is the internal process of letting go of the old, navigating the in-between, and committing to the new. Bridges's argument: leaders often manage change without managing transition, which produces resistance and dysfunction. The same external change can be navigated well or badly depending on whether the internal transition is supported.`,
            `Third: identity threats. Many changes threaten people's identity, status, or competence in ways the change itself doesn't directly address. A new technology may make experienced workers feel less competent. A new structure may threaten people's professional identity. Even small changes can trigger outsized resistance when they implicate identity. Effective change leadership acknowledges and addresses identity dimensions, not just functional ones.`,
            `Fourth: legitimate uncertainty. Most changes happen under genuine uncertainty: nobody knows for sure how they'll turn out. People who resist change aren't always wrong; sometimes they're correctly recognizing real risks the change advocates are underweighting. The honest framing acknowledges this rather than treating all resistance as irrational opposition.`,
            `Fifth: change fatigue. Organizations and people that have been through repeated changes often develop resistance to further change beyond what any specific change deserves. The cumulative effect of many changes (whether successful or not) is exhaustion that makes the next change harder. Effective change leaders pace change and allow stability between disruptions.`,
            `Knowing why change is hard helps you avoid the trap of treating resistance as irrational. Most resistance has real causes that need to be addressed, not just overridden.`,
          ],
          image: `/voyager-assets/social-leadership/l08-s1-hard.webp`,
          imageCaption: `Why change is hard: status quo bias, change vs transition, identity threats, legitimate uncertainty, change fatigue.`,
          vocab: [
            {
              word: `change vs transition`,
              definition: `Distinction from William Bridges's "Managing Transitions" (1991, multiple editions since). Change is the external event (new job, new structure, new schedule). Transition is the internal process of letting go of the old, navigating the in-between period, and committing to the new. Leaders often manage change without managing transition, which produces resistance and dysfunction.`,
              audioPrompt: `Change versus transition is a distinction from William Bridges's "Managing Transitions," first published 1991 and in multiple editions since, {name}. Change is the external event: a new job, new schedule, new organizational structure, new technology. It happens at a specific moment, externally visible, can be announced. Transition is the internal process of moving through change: letting go of the old (which may involve real grief or loss), navigating the in-between period (which is uncertain and uncomfortable), and eventually committing to the new (which takes time). Bridges's argument: leaders often manage change without managing transition. They announce the change, expect people to immediately adopt the new state, and treat ongoing resistance as failure to comply. But the transition takes time regardless of how clearly the change has been announced. Effective change leadership manages both: the external change and the internal transition that has to happen alongside it.`,
            },
          ],
        },

        {
          id: `l08-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Position 1: Vision-Driven Change`,
          paragraphs: [
            `The first position: change happens through compelling vision. The leader paints a picture of what's possible, helps people see why the change matters, and inspires commitment to the new direction. People need to understand and emotionally connect with the destination; otherwise they won't make the effort to get there.`,
            `The case has real strength. Many of the most successful historical change movements (civil rights, scientific revolutions, major reforms) involved leaders who articulated compelling visions that mobilized commitment. Simon Sinek's "Start With Why" (2009) argues that vision-driven leaders consistently outperform tactic-driven ones because vision creates intrinsic motivation that survives setbacks. Martin Luther King Jr.'s "I Have a Dream" speech is often cited as the canonical example of vision-driven change leadership.`,
            `John Kotter, a Harvard Business School professor, developed an influential 8-step change model that places vision prominently (Step 3 in his model: "Form a strategic vision"). His research on organizational change found that the most successful change efforts began with leaders articulating a clear, emotionally resonant vision before getting into tactical details. Without the vision, the tactics often failed because people didn't understand what they were working toward.`,
            `Defenders of vision-driven change include Sinek, Kotter (though his framework also includes process elements), much of the leadership development tradition, and many successful change leaders across business, politics, and social movements. The position recognizes that people work harder for purposes they believe in than for tactics they're following.`,
            `The limits. Vision without execution produces frustration. A leader who can articulate beautiful visions but can't follow through with the operational work of change usually fails. Vision-driven framing can also become substitute for actual work: "we have a vision" becomes the announcement of accomplishment rather than the start of effort. Pure vision focus tends to underweight the practical questions of how change actually happens. The position works best combined with substantial execution capability, not as a replacement for it.`,
          ],
          image: `/voyager-assets/social-leadership/l08-s2-vision.webp`,
          imageCaption: `Position 1: vision-driven change. Sinek's "Start With Why," Kotter's 8-step model, historical change movements.`,
          vocab: [
            {
              word: `change model`,
              definition: `Framework from John Kotter's "Leading Change" (1996) for organizational change: (1) create urgency, (2) form coalition, (3) develop vision, (4) communicate vision, (5) empower action, (6) generate short-term wins, (7) sustain acceleration, (8) institute change. Influential business framework. Has been critiqued as more useful for incremental change than for complex adaptive challenges; remains foundational in change management literature.`,
              audioPrompt: `Kotter's 8-step change model is a framework from John Kotter's 1996 book "Leading Change," {name}. The eight steps: create urgency (help people understand why change is necessary now), form a coalition (build a group of supporters with influence), develop a vision (articulate where you're going), communicate the vision (repeatedly, in multiple ways), empower action (remove obstacles, give people authority to act), generate short-term wins (visible progress that builds momentum), sustain acceleration (keep pushing through resistance), institute change (embed it in culture so it persists). Influential business framework that has shaped how many organizations approach change. Has been critiqued as more useful for incremental change than for genuinely complex adaptive challenges; the linear sequence works better when the change is well-defined than when the right answer has to emerge through the change process itself. Remains foundational in change management literature.`,
            },
          ],
        },

        {
          id: `l08-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Position 2: Process-Driven Change`,
          paragraphs: [
            `The second position: change happens through careful systematic process. Vision matters but isn't sufficient; the real work is in designing and running processes that handle the practical challenges (resistance, coordination, learning, adjustment). A leader with great vision but poor change process usually fails; a leader with adequate vision but excellent change process often succeeds.`,
            `The case has real strength. Most organizational changes that succeed do so through careful process work: stakeholder engagement, communication plans, training, pilot programs, feedback loops, and measured rollouts. The "vision and inspiration" model often underweights this work or treats it as secondary; the process-driven model centers it. Engineering organizations, healthcare systems, and many large institutions rely heavily on disciplined change process because the cost of failed change is too high to leave to vision alone.`,
            `John Kotter's 8-step model (though it includes vision) is largely process-driven: the steps describe a sequence of work that builds change capability over time. Lean methodology applied to change (drawn from Lean manufacturing, see L16 of Future Skills band on entrepreneurship) emphasizes small experiments, measured learning, and iterative adjustment over grand strategic plans. Modern organizational psychology research consistently finds that change success correlates more strongly with process quality than with vision quality.`,
            `Defenders include Kotter (with process emphasis), Edgar Schein's organizational culture work, change management as a professional discipline, lean and agile traditions, and many practitioners across many industries. The position recognizes that change happens through countless specific decisions and behaviors, not just through inspiring announcements.`,
            `The limits. Pure process focus without vision can become bureaucratic and lose meaning. Processes that worked in one context don't always transfer; treating change as a formula often produces worse outcomes than treating it as adaptive work. The process-driven framing also tends to overweight what can be measured and planned, underweighting the human dimensions (identity, meaning, emotional process) that vision-driven and adaptive approaches center. Process is necessary; it's not sufficient by itself.`,
          ],
          image: `/voyager-assets/social-leadership/l08-s3-process.webp`,
          imageCaption: `Position 2: process-driven change. Kotter, Schein, lean and agile traditions, change management as discipline.`,
          vocab: [
            {
              word: `pilot program approach`,
              definition: `Process technique for managing change: run small-scale experiments before full rollout. Lets you learn what works and what doesn't with limited risk. Generates evidence to refine the approach. Builds early supporters whose experience can persuade later adopters. Commonly used in organizational change, policy implementation, and product launches. From Eric Ries's "Lean Startup" tradition and broader change management literature.`,
              audioPrompt: `Pilot program approach is a process technique for managing change: run small-scale experiments before full rollout, {name}. Instead of changing everything at once, you change one team, one department, one location, one product line first. You learn what works and what doesn't with limited risk. The pilot generates evidence about whether the change works as intended, what unexpected effects emerge, and what adjustments are needed before broader rollout. The pilot also builds early supporters whose experience can persuade later adopters. Commonly used in organizational change, policy implementation, technology adoption, and product launches. From Eric Ries's "Lean Startup" tradition that we covered in the Future Skills band on entrepreneurship, and from broader change management literature. Pilots work well when the change is reversible if it fails and when there's value in learning before full commitment. They work less well when the change requires uniform adoption to succeed or when the pilot population isn't representative of the broader target population.`,
            },
          ],
        },

        {
          id: `l08-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Position 3: Adaptive-Emergent Change`,
          paragraphs: [
            `The third position: most significant change is too complex to plan in advance. The right answer emerges through the change process itself, as the people involved learn what works and adjust. Leadership in genuine change means creating conditions for adaptation rather than designing and implementing predetermined solutions.`,
            `The case has real strength. Ronald Heifetz, at Harvard Kennedy School, distinguished "technical problems" (well-defined, with known solutions, requiring application of existing expertise) from "adaptive challenges" (poorly defined, with no known solutions, requiring learning and behavioral change by the people affected). Most significant organizational change involves adaptive challenges, not technical problems. Treating an adaptive challenge as if it were technical produces failure; the right approach is genuinely different.`,
            `Heifetz's adaptive leadership framework emphasizes: defining the actual adaptive challenge (not the surface problem), protecting voices of dissent (since the right answer is unknown, diverse perspectives matter), helping the group hold the discomfort of uncertainty without prematurely fleeing to false certainty, and orchestrating learning rather than directing solutions. The leader doesn't have answers; the leader creates conditions where answers can emerge.`,
            `Dave Snowden's "Cynefin framework" identifies similar distinctions: simple problems (apparent cause-effect, can be solved with best practices), complicated problems (cause-effect requires analysis but is knowable, can be solved with expertise), complex problems (cause-effect only knowable in retrospect, require probing, sensing, and adapting), and chaotic problems (no cause-effect, require action to restore basic stability). Complex problems are the realm of adaptive change; treating them as merely complicated produces failure.`,
            `Defenders include Heifetz, Snowden, complexity science researchers applying their work to leadership, and many practitioners who've worked with situations where careful planning kept failing. The position recognizes that significant change is often less like a project to manage and more like an ecosystem to cultivate.`,
            `The limits. The adaptive framing can become excuse for not planning when planning would help. Some real change has substantial technical components that benefit from process discipline; treating everything as adaptive misses opportunities for legitimate process work. The position also requires real skill in holding uncertainty and orchestrating learning, which is harder than running predetermined plans. Pure adaptive framing can also leave people feeling unled if they need more direction than the framework provides.`,
          ],
          image: `/voyager-assets/social-leadership/l08-s4-adaptive.webp`,
          imageCaption: `Position 3: adaptive-emergent change. Heifetz adaptive leadership, Snowden Cynefin framework, complexity science.`,
          vocab: [
            {
              word: `challenges heifetz`,
              definition: `Distinction from Ronald Heifetz's adaptive leadership work. Technical problems: well-defined, with known solutions, requiring application of existing expertise. Adaptive challenges: poorly defined, with no known solutions, requiring learning and behavioral change by the people affected. Most significant organizational change involves adaptive challenges. Treating an adaptive challenge as technical produces failure; the right approach is genuinely different.`,
              audioPrompt: `Technical problems versus adaptive challenges is a distinction from Ronald Heifetz's adaptive leadership work at Harvard Kennedy School, {name}. Technical problems are well-defined, with known solutions, requiring application of existing expertise. Fixing a broken machine is technical: someone with the right expertise diagnoses the problem and applies the standard repair. Adaptive challenges are poorly defined, with no known solutions, requiring learning and behavioral change by the people affected. Helping a community improve public health outcomes is usually adaptive: the right interventions aren't known in advance, the affected people have to change their behaviors, and the work is ongoing learning rather than a discrete project. Most significant organizational change involves adaptive challenges. Treating an adaptive challenge as technical (assuming you have the answer and just need to implement it) produces predictable failure. The right approach for adaptive challenges is genuinely different: create conditions for learning, protect dissent, orchestrate process rather than direct solutions.`,
            },
          ],
        },

        {
          id: `l08-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Before You Build Your Argument`,
          paragraphs: [
            `As you build your argument, notice that the three positions aren't strictly mutually exclusive. Most mature change leaders blend elements: vision provides direction, process provides discipline, adaptive capacity handles complexity. The forcing function of the argument is committing to a primary framing while engaging with the others.`,
            `One framing to consider. Each position implies a different theory of where leadership effort should concentrate. Position 1 (vision) emphasizes inspiration and direction-setting. Position 2 (process) emphasizes design and execution discipline. Position 3 (adaptive) emphasizes creating conditions for emergence. Different primary commitments produce different daily behavior in change situations.`,
            `Another framing. The right position may depend on the kind of change. Well-defined technical changes often benefit from process-driven leadership. Mission-defining changes often benefit from vision-driven leadership. Complex novel changes often benefit from adaptive leadership. Many real change situations involve multiple kinds of change at once; the skill is recognizing which kinds and applying the right approach to each.`,
            `One last framing. Whatever you commit to, the underlying skill of distinguishing change from transition (Bridges) matters across all three positions. Change is the external event; transition is the internal process. All three positions can fail by managing change without managing transition. Knowing the distinction protects your change leadership across approaches.`,
          ],
          image: `/voyager-assets/social-leadership/l08-s5-before.webp`,
          imageCaption: `Three positions imply different leadership emphasis. Underlying skill: managing transition, not just change.`,
          vocab: [
            {
              word: `change happens`,
              definition: `Your underlying model of how change actually works in social systems. Vision-driven theory: change happens through inspiration that mobilizes effort. Process-driven theory: change happens through disciplined sequence of work. Adaptive theory: change happens through learning and emergence. Most leaders have an implicit theory; making it explicit helps you choose deliberately and recognize when your default doesn't fit the situation.`,
              audioPrompt: `Your theory of how change happens is your underlying model of how change actually works in social systems, {name}. Most leaders have an implicit theory shaped by their experiences, but few have articulated it explicitly. Vision-driven theory: change happens through inspiration that mobilizes effort. People work hard for purposes they believe in. The right starting point is articulating where you're going. Process-driven theory: change happens through disciplined sequence of work. People follow good processes more reliably than they follow good ideas. The right starting point is designing the process. Adaptive theory: change happens through learning and emergence. The right answers aren't known in advance. The right starting point is creating conditions for learning. Each theory implies different leadership behavior in change situations. Making your theory explicit lets you choose deliberately and notice when your default theory doesn't fit a specific situation that calls for a different approach.`,
            },
          ],
        },

        // ───── ARGUMENT BUILDER ───────────────────────────────────────────────
        {
          id: `l08-argument-builder`,
          type: `argument-builder`,
          headline: `How Should You Lead Through Change?`,
          intro: `Pick the position that best captures your thinking. Build your case with 3-4 pieces of evidence. Then respond to the strongest counterargument. Serious change researchers defend each.`,
          positions: [
            {
              id: `vision-driven`,
              label: `Vision-driven: change happens through compelling vision and inspiration`,
              summary: `People need to understand and emotionally connect with the destination; otherwise they won't make the effort to get there. Defenders include Simon Sinek ("Start With Why" 2009), John Kotter (vision is Step 3 of his model), much of the leadership development tradition, historical change movements (civil rights, scientific revolutions). Strength: people work harder for purposes they believe in than for tactics they follow; vision creates intrinsic motivation that survives setbacks. Limit: vision without execution produces frustration; "we have a vision" can become substitute for actual work; underweights practical questions of how change actually happens.`,
            },
            {
              id: `process-driven`,
              label: `Process-driven: change happens through careful systematic process`,
              summary: `Vision matters but isn't sufficient; the real work is in designing and running processes that handle practical challenges (resistance, coordination, learning, adjustment). Defenders include Kotter (with process emphasis), Edgar Schein, change management as professional discipline, lean and agile traditions. Strength: change success correlates more strongly with process quality than with vision quality; most failed changes failed at execution, not vision; process gives structure to disciplined work. Limit: pure process focus can become bureaucratic and lose meaning; processes don't always transfer; overweights what can be measured, underweights human dimensions.`,
            },
            {
              id: `adaptive-emergent`,
              label: `Adaptive-emergent: most significant change is too complex to plan; create conditions for adaptation`,
              summary: `The right answer emerges through the change process itself as people learn what works and adjust. Defenders include Ronald Heifetz (adaptive leadership at Harvard Kennedy School), Dave Snowden (Cynefin framework), complexity science researchers. Heifetz distinguishes technical problems (known solutions) from adaptive challenges (unknown). Strength: most significant organizational change involves adaptive challenges, not technical problems; treating adaptive as technical produces failure; preserves diverse perspectives in genuinely uncertain situations. Limit: can become excuse for not planning when planning would help; requires real skill in holding uncertainty; pure adaptive framing can leave people feeling unled.`,
            },
          ],
          evidence: [
            {
              id: `e1`,
              text: `Many successful historical change movements (civil rights, major reforms, scientific revolutions) involved leaders who articulated compelling visions that mobilized commitment. Martin Luther King Jr.'s "I Have a Dream" speech is often cited as canonical example of vision-driven change leadership producing real change.`,
              source: `Historical analysis; multiple sources`,
            },
            {
              id: `e2`,
              text: `John Kotter's research on organizational change found that successful efforts began with leaders articulating clear emotionally resonant vision before tactical details. His 8-step model formalized this insight while including substantial process elements.`,
              source: `Kotter "Leading Change" (1996); subsequent research`,
            },
            {
              id: `e3`,
              text: `William Bridges's distinction between change (external event) and transition (internal process) explains why many change efforts fail: leaders manage the announcement without managing the human transition. Transition takes time regardless of how clear the announcement is.`,
              source: `Bridges "Managing Transitions" (1991, multiple editions)`,
            },
            {
              id: `e4`,
              text: `Most organizational changes that succeed do so through careful process work: stakeholder engagement, communication plans, training, pilot programs, feedback loops, measured rollouts. Engineering organizations, healthcare systems, and many large institutions rely on disciplined change process.`,
              source: `Organizational psychology research; multiple sources`,
            },
            {
              id: `e5`,
              text: `Lean methodology applied to change emphasizes small experiments, measured learning, and iterative adjustment over grand strategic plans. Pilot program approaches generate evidence and build early supporters before full rollout. From Eric Ries's "Lean Startup" tradition.`,
              source: `Lean Startup tradition; Ries 2011 and subsequent`,
            },
            {
              id: `e6`,
              text: `Ronald Heifetz's distinction between technical problems (known solutions) and adaptive challenges (no known solutions, require learning by affected people) explains why some changes work through standard approaches and others require fundamentally different leadership. Most significant change involves adaptive challenges.`,
              source: `Heifetz adaptive leadership work; Harvard Kennedy School`,
            },
            {
              id: `e7`,
              text: `Dave Snowden's "Cynefin framework" distinguishes simple, complicated, complex, and chaotic problems. Complex problems require probing, sensing, and adapting rather than expert-driven planning. Treating complex problems as merely complicated produces failure.`,
              source: `Snowden's Cynefin framework; complexity science applications`,
            },
            {
              id: `e8`,
              text: `Status quo bias documented by Kahneman and Tversky shows humans psychologically weight losses (from change) more heavily than equivalent gains. Change usually faces psychological headwinds beyond its actual costs. Effective change leadership has to address these patterns rather than treating resistance as irrational.`,
              source: `Kahneman and Tversky prospect theory; behavioral economics`,
            },
          ],
          counterargument: {
            id: `counter`,
            text: `"You picked your position. Here's the strongest objection. All three positions assume change is something a leader makes happen to others. But the most durable change in real life often happens without anyone leading it: it emerges from many people responding to changing conditions, learning, and gradually shifting behavior. The most influential changes of the last 50 years (internet adoption, smartphone shift, cultural changes around identity) didn't come from change leaders running playbooks. They came from many people, many organizations, many small decisions adding up. If real change is mostly that, all three positions might be solving the wrong problem. Why think any leader-centric approach is right, when the actual mechanism may be much more distributed?"`,
            promptInstruction: `In 3-4 sentences, respond. Is leader-led change the right frame, or is most real change distributed and emergent? How does your position handle this challenge?`,
          },
          reflectionPrompt: `Looking at the positions you didn't pick, which has the strongest argument that you'd find hardest to dismiss? Why?`,
        },

        {
          id: `l08-quiz`,
          type: `quiz`,
          headline: `Check your understanding`,
          questions: [
            {
              id: `q1`,
              type: `multiple-choice`,
              question: `Why is change genuinely hard?`,
              options: [
                `Random difficulty`,
                `Status quo bias (humans weight losses more than equivalent gains); change vs transition gap (external event vs internal process); identity threats (change can implicate identity, status, competence); legitimate uncertainty (resisters sometimes correctly recognize real risks); change fatigue (cumulative exhaustion)`,
                `People are bad`,
                `Nothing changes`,
              ],
              correctIndex: 1,
              explanation: `Knowing why change is hard helps you avoid treating resistance as irrational. Most resistance has real causes that need to be addressed, not just overridden. The patterns aren't random; they reflect predictable features of how humans and groups respond to disruption.`,
            },
            {
              id: `q2`,
              type: `multiple-choice`,
              question: `What's the "change vs transition" distinction (Bridges)?`,
              options: [
                `Same thing`,
                `From "Managing Transitions" (1991+): change is the external event (new job, new schedule, new structure); transition is the internal process of letting go of old, navigating in-between, committing to new; leaders often manage change without managing transition, which produces resistance and dysfunction`,
                `Different terms`,
                `Random distinction`,
              ],
              correctIndex: 1,
              explanation: `Transition takes time regardless of how clearly the change has been announced. Effective change leadership manages both: the external change AND the internal transition that has to happen alongside it. Many change failures are actually transition failures dressed as change failures.`,
            },
            {
              id: `q3`,
              type: `multiple-choice`,
              question: `What is "Kotter's 8-step change model"?`,
              options: [
                `Random framework`,
                `Framework from John Kotter "Leading Change" (1996): (1) create urgency, (2) form coalition, (3) develop vision, (4) communicate vision, (5) empower action, (6) generate short-term wins, (7) sustain acceleration, (8) institute change; influential business framework; works better for incremental than for complex adaptive challenges`,
                `Diet plan`,
                `Exercise routine`,
              ],
              correctIndex: 1,
              explanation: `Influential business framework that has shaped how many organizations approach change. Has been critiqued as more useful for incremental change than for genuinely complex adaptive challenges; the linear sequence works better when the change is well-defined.`,
            },
            {
              id: `q4`,
              type: `multiple-choice`,
              question: `What's a "pilot program approach"?`,
              options: [
                `Plane training`,
                `Process technique for managing change: run small-scale experiments before full rollout; lets you learn what works with limited risk; generates evidence to refine approach; builds early supporters whose experience persuades later adopters; from Lean Startup tradition and broader change management`,
                `Lead user`,
                `Random method`,
              ],
              correctIndex: 1,
              explanation: `Pilots work well when the change is reversible if it fails and when there's value in learning before full commitment. Work less well when the change requires uniform adoption to succeed or when the pilot population isn't representative of the broader target.`,
            },
            {
              id: `q5`,
              type: `multiple-choice`,
              question: `What's the "technical problems vs adaptive challenges" distinction (Heifetz)?`,
              options: [
                `Tech vs people`,
                `From Heifetz's adaptive leadership work: technical problems are well-defined, with known solutions, requiring application of existing expertise; adaptive challenges are poorly defined, with no known solutions, requiring learning and behavioral change by affected people; most significant organizational change involves adaptive challenges`,
                `Same thing`,
                `Random distinction`,
              ],
              correctIndex: 1,
              explanation: `Treating an adaptive challenge as technical (assuming you have the answer and just need to implement it) produces predictable failure. The right approach for adaptive challenges is genuinely different: create conditions for learning, protect dissent, orchestrate process rather than direct solutions.`,
            },
            {
              id: `q6`,
              type: `multiple-choice`,
              question: `What is Dave Snowden's "Cynefin framework"?`,
              options: [
                `Welsh art form`,
                `Framework distinguishing four problem types: simple (apparent cause-effect, best practices), complicated (knowable cause-effect, requires expertise), complex (cause-effect only knowable in retrospect, requires probing/sensing/adapting), chaotic (no cause-effect, requires action to restore stability); helps match approach to problem type`,
                `Random model`,
                `Tech framework`,
              ],
              correctIndex: 1,
              explanation: `Complex problems are the realm of adaptive change; treating them as merely complicated produces failure. Snowden's framework refines Heifetz by distinguishing complex from chaotic and giving language for each kind of problem.`,
            },
            {
              id: `q7`,
              type: `multiple-choice`,
              question: `What's the case for vision-driven change leadership?`,
              options: [
                `Inspiration is nice`,
                `People need to understand and emotionally connect with the destination; otherwise they won't make the effort to get there; vision creates intrinsic motivation surviving setbacks; defenders include Sinek's "Start With Why," historical change movements (civil rights, scientific revolutions), Kotter's research`,
                `Easy approach`,
                `Random claim`,
              ],
              correctIndex: 1,
              explanation: `Many successful historical change movements involved leaders who articulated compelling visions. Limit: vision without execution produces frustration; "we have a vision" becomes substitute for work; underweights practical questions of how change actually happens.`,
            },
            {
              id: `q8`,
              type: `multiple-choice`,
              question: `Why might "adaptive-emergent" change leadership be necessary?`,
              options: [
                `Random preference`,
                `Most significant organizational change involves adaptive challenges, not technical problems; the right answer isn't known in advance; treating adaptive challenges with technical approaches (assume you have the answer, implement it) produces predictable failure; complex situations require probing, sensing, adapting rather than expert-driven planning`,
                `Easier`,
                `New trend`,
              ],
              correctIndex: 1,
              explanation: `Real change often emerges through learning rather than executing predetermined plans. The leader doesn't have answers; the leader creates conditions where answers can emerge. Requires real skill in holding uncertainty and orchestrating learning.`,
            },
            {
              id: `q9`,
              type: `true-false`,
              question: `True or false: One of the three positions is clearly correct and the others are wrong.`,
              correctAnswer: false,
              explanation: `False. Each position has serious defenders and real strengths/limits. Most mature change leaders blend elements: vision provides direction, process provides discipline, adaptive capacity handles complexity. The right approach depends on what kind of change you're leading. Many real change situations involve multiple kinds at once.`,
            },
            {
              id: `q10`,
              type: `inference`,
              question: `Your friend says "We need to completely change how our school handles bullying. I'm going to write a detailed plan with steps 1 through 50 and present it to administration." Based on this lesson, what should you point out?`,
              options: [
                `"Great plan"`,
                `"Bullying is probably an adaptive challenge, not a technical problem. There's no known solution that just needs implementing; the right approach involves learning what's actually happening in your school, what students and teachers and families need, and what interventions work in your specific context. A detailed 50-step plan written before that learning happens is likely to be wrong in important ways. Better: think about what specific kind of bullying you want to address, propose a pilot intervention you could try with one grade or one type of bullying, build in feedback mechanisms to learn what works, and treat the broader effort as ongoing adaptive learning rather than a single plan to execute. Vision (why this matters) plus pilot program approach plus adaptive learning often beats grand-plan thinking on this kind of issue."`,
                `"Don't try"`,
                `"Use the plan"`,
              ],
              correctIndex: 1,
              explanation: `Real applied change leadership. Don't dismiss the friend's desire to address bullying; identify the kind of change involved (adaptive challenge), suggest a more fitting approach (pilot, adaptive learning), explain why grand-plan thinking often fails on this kind of problem. This is the kind of guidance that produces better change outcomes.`,
            },
          ],
        },

        {
          id: `l08-reflection`,
          type: `reflection`,
          headline: `Sit with this`,
          intro: `Pick the prompt that pulls at you most. Your answer is saved.`,
          prompts: [
            { id: `reflect-cognitive`, category: `Cognitive`, prompt: `Before this lesson, what was your default theory of how change happens? Has anything shifted?` },
            { id: `reflect-meta`, category: `Metacognitive`, prompt: `When you've been resistant to change in your own life, what was actually going on? Status quo bias, identity threat, legitimate uncertainty, change fatigue, something else?` },
            { id: `reflect-identity`, category: `Identity`, prompt: `If you become someone who can lead change skillfully across many situations over a lifetime, what does that change about the impact you can have?` },
            { id: `reflect-application`, category: `Application`, prompt: `Pick one change you want to lead (in a group, family, school, club). Apply the three positions: which fits best? What kind of change is it (technical, adaptive, mixed)?` },
            { id: `reflect-critical`, category: `Critical`, prompt: `Are there changes where none of these leader-led approaches fit? What about cultural change that happens through millions of small decisions? Change driven by external events outside any leader's control?` },
            { id: `reflect-personal`, category: `Personal investigation`, prompt: `Ask an adult about a major change they led or were part of. Did it use vision-driven, process-driven, or adaptive approaches? What worked and what didn't?` },
          ],
        },

        {
          id: `l08-real-world`,
          type: `real-world`,
          headline: `Take it into your life`,
          guideContext: `Change leadership shapes your impact across many decades of leadership opportunities. Two paths.`,
          familyActivity: {
            title: `The Family Change Conversation`,
            duration: `45 minutes`,
            description: `Share the three positions. Then ask family members about a significant change they've been part of: was it vision-led, process-led, or adaptive? What worked? What didn't? Also discuss any change happening in your family right now (new schedule, new responsibility, new arrangement) — how should you approach it as a family?`,
          },
          projectOption: {
            title: `Read Kotter's "Leading Change," Bridges's "Managing Transitions," or Heifetz's "Leadership Without Easy Answers," 4 weeks (optional)`,
            duration: `4 weeks, ~30 minutes per session`,
            description: `Pick one: Kotter's "Leading Change" (1996, for process focus), Bridges's "Managing Transitions" (1991+, for change/transition distinction), or Heifetz's "Leadership Without Easy Answers" (1994, for adaptive leadership, harder reading). Read carefully. Apply concepts to one specific change happening around you. Write 1,500 words on what you learned about how change actually works.`,
            offerToParent: `Parent: opt your kid into this project. Reading a real change leadership book at 12 produces durable understanding.`,
          },
          identityQuestion: `If you become someone who can recognize what kind of change you're facing and apply the appropriate leadership approach (vision, process, or adaptive), what does that change about your effectiveness across many leadership opportunities over a lifetime?`,
        },

        {
          id: `l08-identity-hook`,
          type: `identity-hook`,
          headline: `Who is this lesson making you?`,
          prompt: `One sentence. No wrong answer.`,
          placeholder: `Someone who...`,
          examples: [
            `Someone who recognizes the difference between technical problems and adaptive challenges.`,
            `A person who manages both change and transition, not just the announcement.`,
            `Someone who can match change-leadership approach to the kind of change actually happening.`,
          ],
          saveKey: `identity_responses_sl_11_12_8`,
        },

        {
          id: `l08-celebration`,
          type: `celebration`,
          guideText: `{name}. Eighth Social Leadership lesson done. You can now articulate three positions on change leadership (vision-driven, process-driven, adaptive-emergent), know major thinkers (Kotter, Sinek, Bridges, Heifetz, Snowden), distinguish change from transition (Bridges) and technical problems from adaptive challenges (Heifetz). You can match change approach to the kind of change actually happening. Next time we go into one of the most useful frameworks for understanding groups: status, hierarchy, and belonging. Investigation game format. Let's go. — Valor`,
          badge: `change-leader`,
          badgeName: `Change Leader`,
          xpEarned: 75,
          competencies: [
            `Articulates three positions on change leadership (vision, process, adaptive)`,
            `Knows major thinkers: Kotter, Sinek, Bridges, Heifetz, Snowden`,
            `Distinguishes change from transition (Bridges)`,
            `Distinguishes technical problems from adaptive challenges (Heifetz)`,
            `Understands status quo bias and other patterns making change hard`,
          ],
          nextLessonPreview: {
            title: `Lesson 9: Status, Hierarchy, Belonging`,
            hook: `Three forces that shape every group. Investigation game.`,
          },
        },
      ],
    },
  ],
};

export default SOCIALLEADERSHIP_VOYAGER_L08;

if (import.meta.env?.DEV) {
  const l = SOCIALLEADERSHIP_VOYAGER_L08.lessons[0];
  const mags = l.screens.filter((s) => s.type === `magazine`).length;
  const argEvi = l.screens.find((s) => s.type === `argument-builder`)?.evidence?.length ?? 0;
  const quiz = l.screens.find((s) => s.type === `quiz`)?.questions?.length ?? 0;
  const reflect = l.screens.find((s) => s.type === `reflection`)?.prompts?.length ?? 0;
  console.log(
    `[LESSON-SL-VOYAGER-L08 ${VERSION}] "${l.title}" — ${mags} magazine, argument-builder w/ ${argEvi} evidence, ${quiz} quiz, ${reflect} reflection`
  );
}
