// ─────────────────────────────────────────────────────────────────────────────
// FUTURE SKILLS VOYAGER  |  L10 — Collaboration & Teamwork
// Age band : voyagers (11-12)   Guide: byte (Fox)
// Standards: Coreverse Original — Team Dynamics, Organizational Research
// CALIBRATED: Voyager spec v1.1 (May 2026)
// Interaction format: ARGUMENT BUILDER (individual excellence / team dynamics / context-dependent)
// ─────────────────────────────────────────────────────────────────────────────

const VERSION = "voyager-fs-l10-v1";

const FUTURESKILLS_VOYAGER_L10 = {
  ageBand: `voyagers`,
  subjectId: `future-skills`,
  guide: `byte`,

  lessons: [
    {
      id: `fs-11-12-10`,
      title: `Collaboration & Teamwork`,
      duration: 35,
      xpReward: 75,
      badge: `team-thinker`,
      badgeName: `Team Thinker`,

      screens: [
        {
          id: `l10-welcome`,
          type: `welcome`,
          guideText: `{name}, almost everything significant you'll ever do will involve other people. Group projects, sports teams, jobs, startups, families, communities. Even "solo" work usually depends on collaboration somewhere upstream or downstream. So a real question: what actually makes teams work? You've probably been told "find great people," "build psychological safety," "communicate clearly." These are real ideas from real research, but they're often presented as if they were obviously true. They aren't all equally true, and they aren't all true in the same situations. Three serious positions compete for what actually drives team performance. Today we work through them and you build your argument for what really matters.`,
          headline: `Collaboration & Teamwork`,
          subtitle: `Three real positions on what makes teams work. Pop framings oversimplify.`,
          visual: `/voyager-assets/future-skills/l10-welcome.webp`,
        },

        {
          id: `l10-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Why "Teamwork" Is Trickier Than It Sounds`,
          paragraphs: [
            `Most advice about teamwork sounds reasonable in the abstract. "Communicate well." "Trust each other." "Find the right people." The problem is that these tell you almost nothing about what to do in specific situations. Real teams differ enormously: a basketball team is different from a research lab, which is different from a startup, which is different from a school group project. The advice that works in one context can be useless or counterproductive in another.`,
            `Researchers who study teams seriously have produced significant findings over the last 30 years. Amy Edmondson at Harvard Business School has spent decades studying what makes some teams in hospitals, factories, and offices work much better than others. Google's "Project Aristotle" (2012-2015) collected data on hundreds of internal Google teams to identify what predicted high performance. Anita Woolley at Carnegie Mellon has researched "collective intelligence" — what makes some groups solve problems better than others, beyond just the smartness of individual members.`,
            `These researchers don't all agree with each other. Their work points in different directions about what matters most. Some emphasize individual selection (get the right people and the team mostly works itself out). Others emphasize team dynamics (even mediocre individuals working well together outperform stars who don't). Still others argue context dominates — different work calls for different team structures, and there's no universal answer.`,
            `For a 12-year-old, this question isn't abstract. You'll be in teams for the rest of your life: school projects right now, eventually study groups, hobby groups, sports teams, work teams, leadership roles, your own family. The framework you build for thinking about what makes teams work shapes how you'll show up in all of them.`,
          ],
          image: `/voyager-assets/future-skills/l10-s1-question.webp`,
          imageCaption: `Teams differ enormously by context. Generic teamwork advice rarely tells you what to do in specific situations.`,
          vocab: [
            {
              word: `collective intelligence`,
              definition: `Term used by Anita Woolley (Carnegie Mellon) for the ability of a group to solve problems beyond what individual members could solve alone. Real measurable phenomenon: some groups outperform others consistently across many tasks. What predicts collective intelligence is partly individual ability but also distinctly group-level features.`,
              audioPrompt: `Collective intelligence is a term used by Anita Woolley at Carnegie Mellon and her collaborators, {name}. The ability of a group to solve problems beyond what individual members could solve alone. Some groups consistently outperform others across many tasks. The research has identified what predicts collective intelligence. Partly individual ability matters: groups with smarter individual members tend to do better. But group-level features also matter, often more than average individual intelligence. Specifically: turn-taking in conversation (no one dominates), social sensitivity (ability to read others' emotional states), and the presence of women in the group. These features predict collective performance better than average IQ. Knowing this prevents the false belief that "smart team = smart people thrown together." It's more complicated and more interesting.`,
            },
          ],
        },

        {
          id: `l10-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Position 1: Individual Excellence Dominates`,
          paragraphs: [
            `The first position argues that teams are made of individuals, and what most determines team performance is the quality of those individuals. Find great people, give them clear goals, get out of their way. Worry less about "team dynamics" and more about selection. This view is common in some parts of the tech world, professional sports, and elite research.`,
            `The case has real strength. Some teams clearly succeed because of one or two exceptional individuals. Some famous research breakthroughs came from individual genius. Many startups succeed largely because of one or two founders who could have succeeded in any team. The differences between merely good and truly great individual performers are often larger than the differences between okay and great team dynamics with average individuals. Selection matters; selection effects compound.`,
            `Defenders include Naval Ravikant (who has argued repeatedly that "specific knowledge" and individual excellence trump organizational systems), much of Silicon Valley venture capital (which invests in founders more than ideas), and some classic management thinkers. The view also has empirical support: studies of NBA teams suggest individual talent is the single largest predictor of team success, and studies of elite scientific research often credit specific individuals more than team structures.`,
            `The limits are real too. "Just find great people" assumes you can identify them in advance, which is harder than it sounds. The same individual can be high-performing in one team and low-performing in another (the team context affects what the individual can produce). Many tasks genuinely require coordination among multiple specialists; no single person can do them alone. And the "stars don't need team skills" assumption fails when stars who can't collaborate actively damage team output. The position is right that selection matters; it overstates by claiming team dynamics don't.`,
          ],
          image: `/voyager-assets/future-skills/l10-s2-individual.webp`,
          imageCaption: `Position 1: find great people, get out of their way. Real strength in selection; overstates by dismissing team dynamics.`,
          vocab: [
            {
              word: `selection effects`,
              definition: `Outcomes that depend largely on who is in a situation rather than on what happens within it. "This team succeeded" can mean the team functioned well OR can mean the selection process found great people who would have succeeded anywhere. Distinguishing the two requires comparing the same people in different teams or different teams with similar people.`,
              audioPrompt: `Selection effects are outcomes that depend largely on who is in a situation rather than on what happens within it, {name}. Important concept in many fields. "This team succeeded" can mean two very different things. The team functioned well together, producing better outcomes than the individuals would have alone. Or the selection process found great people who would have succeeded in many possible teams. Distinguishing the two requires comparing the same people in different teams or different teams with similar people. Without that comparison, you can't tell whether team dynamics produced the result or whether selection did. Many "great team" stories are really "great selection" stories that happened to have a team attached. Recognizing selection effects is one of the most useful intellectual tools for thinking about why some collaborations work and others don't.`,
            },
          ],
        },

        {
          id: `l10-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Position 2: Team Dynamics Dominate`,
          paragraphs: [
            `The second position argues that team dynamics matter more than individual excellence within a wide range of competence. Mediocre individuals working well together regularly outperform stars who don't collaborate. The team-level features (psychological safety, communication patterns, shared norms) shape how individuals can actually contribute. Optimize for the team, and decent individuals produce great outcomes.`,
            `Amy Edmondson's research on psychological safety (Harvard, 1999 onward) is foundational here. Her studies of hospital teams found that the highest-performing teams reported MORE errors than the worst-performing teams. Counterintuitive until you realized: the high-performers actually felt safe enough to report errors, learn from them, and prevent them. The low-performers hid errors, which let them recur. Psychological safety is the climate where team members feel they can take interpersonal risks (asking questions, admitting mistakes, raising concerns) without being punished. Teams with high psychological safety dramatically outperform teams without it across many domains.`,
            `Google's Project Aristotle (2012-2015) collected data on 180+ Google teams to find what predicted high performance. The expected answer was "have a mix of strong individuals." The actual answer surprised the researchers: who was on the team mattered less than how the team worked together. The five strongest predictors were psychological safety, dependability, structure and clarity, meaning, and impact. Most of these are team-level features, not individual selection.`,
            `Defenders include Edmondson, the Google Project Aristotle researchers, Patrick Lencioni ("The Five Dysfunctions of a Team," 2002), Anita Woolley on collective intelligence, and many practicing managers who've watched the same team succeed and fail depending on dynamics. The position has real strength for understanding why some teams of competent people fail and other teams of similar people succeed.`,
            `The limits. "Team dynamics over selection" can become an excuse for poor selection ("we have great culture, that's enough"). It can also be applied to teams where individual technical competence really is the binding constraint (you can't have great team dynamics produce great surgery if no surgeon is competent). The position is right that dynamics matter; it overstates by claiming selection doesn't.`,
          ],
          image: `/voyager-assets/future-skills/l10-s3-dynamics.webp`,
          imageCaption: `Position 2: team dynamics dominate. Psychological safety, dependability, clarity. Edmondson, Google's Aristotle, Lencioni.`,
          vocab: [
            {
              word: `psychological safety`,
              definition: `Amy Edmondson's term: climate in which team members feel they can take interpersonal risks (ask questions, admit mistakes, raise concerns) without being punished. Strongest single predictor of high-performing teams across many domains. Distinct from "feeling comfortable" (it's specifically about willingness to be vulnerable about errors and uncertainty).`,
              audioPrompt: `Psychological safety is Amy Edmondson's term for a climate in which team members feel they can take interpersonal risks without being punished, {name}. Asking questions even when they might seem dumb. Admitting mistakes. Raising concerns even when they might be unpopular. Disagreeing with senior people without fearing retaliation. Edmondson's research, starting in the 1990s and continuing through her 2018 book "The Fearless Organization," shows psychological safety as the strongest single predictor of high-performing teams across many domains. Hospital teams, factory floors, tech companies, schools. The finding is replicated and robust. Psychological safety is distinct from "feeling comfortable." Comfortable teams can still suppress dissent and hide errors. Psychologically safe teams are willing to be uncomfortable in productive ways. The distinction matters.`,
            },
          ],
        },

        {
          id: `l10-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Position 3: Context Dominates`,
          paragraphs: [
            `The third position argues that neither individual excellence nor team dynamics is universally most important. Different types of work require different team structures. The "right" approach depends on what the team is actually trying to do. Generic advice about teams typically fails because it ignores how much the right answer varies by context.`,
            `Some context dimensions that matter. First: interdependence. Some work requires constant tight coordination (surgical teams, jazz ensembles, military operations). Other work is mostly independent with occasional sync (research labs, sales teams, individual contributors with shared resources). High-interdependence work requires deep team dynamics; low-interdependence work doesn't and can actually be slowed down by trying to force collaboration.`,
            `Second: uncertainty. Some work is well-defined with clear right answers (data entry, routine surgery, scheduled maintenance). Other work has high uncertainty and requires exploration (research, creative projects, building something new). High-uncertainty work depends heavily on team dynamics (psychological safety, willingness to share half-formed ideas). Low-uncertainty work depends more on competence and consistent execution.`,
            `Third: timescale. Short-burst teams that work together for weeks have different dynamics than long-term teams that work together for years. The investment in deep team dynamics pays off more over longer time horizons. For a quick group project, surface coordination may be enough; for a long-term collaboration, deep psychological safety matters more.`,
            `Fourth: stakes and reversibility. High-stakes irreversible work (medicine, aerospace, financial decisions) needs different team structures than low-stakes reversible work (prototype design, hobby projects). High-stakes work needs more redundancy, double-checking, and clear escalation paths. Low-stakes work can tolerate more experimentation.`,
            `Defenders of the context-dominates view include researchers like J. Richard Hackman ("Leading Teams," 2002), Bruce Tuckman (forming/storming/norming/performing developmental model), and many practicing managers who've worked across very different team types. The position has real strength for explaining why advice that worked in one context fails in another. Its limit: "it depends" can become an excuse for not having any working framework. Generic advice has limits; saying "everything is contextual" doesn't replace the need for working principles.`,
          ],
          image: `/voyager-assets/future-skills/l10-s4-context.webp`,
          imageCaption: `Position 3: context dominates. Interdependence, uncertainty, timescale, stakes all shape what teams need. Hackman, Tuckman.`,
          vocab: [
            {
              word: `interdependence (in teams)`,
              definition: `Degree to which team members' work depends on each other's contributions. High interdependence: tight coordination required (surgical teams, sports teams, jazz ensembles). Low interdependence: mostly independent work with occasional sync. Different team structures and dynamics work for different interdependence levels.`,
              audioPrompt: `Interdependence in teams is the degree to which team members' work depends on each other's contributions, {name}. Important variable that shapes what teams actually need. High interdependence: surgical teams where everyone must coordinate in real time, sports teams executing plays, jazz ensembles where musicians respond to each other moment by moment, software teams building tightly integrated systems. These teams need deep dynamics, shared mental models, strong trust. Low interdependence: research labs where individuals mostly work alone with occasional collaboration, sales teams where each person handles their own clients, individual contributors who share resources but not tasks. These teams can function with lighter coordination. Trying to force tight team dynamics on low-interdependence work often slows it down; trying to use light coordination for high-interdependence work usually fails. Knowing the interdependence level is the first step to knowing what kind of team structure makes sense.`,
            },
          ],
        },

        {
          id: `l10-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Before You Build Your Argument`,
          paragraphs: [
            `As you build your argument, notice that the three positions aren't mutually exclusive. Most thoughtful researchers acknowledge all three matter to some degree. The question is which one is most important to optimize for. Different positions imply different practical choices: spend more time on selection, spend more time on dynamics, or spend time figuring out what context-specific approach fits.`,
            `One framing to consider. Each position implies a different theory of where leverage is. Position 1 says leverage is in selection (the upstream choice of who's on the team determines most of what happens later). Position 2 says leverage is in dynamics (how the team works together determines how much value individuals can produce). Position 3 says leverage is in diagnosis (knowing what kind of team and work you have determines which intervention helps). Which theory of leverage feels most accurate?`,
            `Another framing. You're 12. Most of your team experience so far has been school group projects, sports teams, friend groups, family. The teams you'll be part of for the rest of your life will vary enormously: sports teams, study groups, work teams, leadership roles, your own family. The framework you commit to today doesn't have to be permanent. But thinking carefully about what makes teams work now, before you're forced to figure it out under stress, builds capability that compounds.`,
            `One last framing. The honest position for most people may be "all three matter, in changing proportions depending on context." But forcing yourself to argue for one primary framing reveals what you actually think. Take the position that feels most accurate, build the strongest case you can, then notice the counterarguments. That's the move.`,
          ],
          image: `/voyager-assets/future-skills/l10-s5-before.webp`,
          imageCaption: `Three positions, different theories of leverage. Force yourself to argue one to reveal what you actually think.`,
          vocab: [
            {
              word: `Project Aristotle (Google)`,
              definition: `Internal Google research project (2012-2015) studying 180+ Google teams to identify what predicted high performance. The unexpected finding: who was on the team mattered less than how the team worked together. The five strongest predictors were psychological safety, dependability, structure and clarity, meaning, and impact.`,
              audioPrompt: `Project Aristotle was an internal Google research project conducted between 2012 and 2015, {name}. Google studied 180-plus of its own teams to identify what predicted high performance. They had unique data: many teams doing similar work in similar conditions, with clear performance metrics. The expected answer was that high-performing teams would have certain mixes of talent or expertise. The actual finding surprised the researchers: who was on the team mattered less than how the team worked together. The five strongest predictors of high performance were psychological safety (most important), dependability, structure and clarity, meaning (the work mattered to team members), and impact (the work mattered beyond the team). Project Aristotle is one of the strongest empirical findings supporting the team-dynamics-over-individuals position. The research has been replicated in other organizations with similar results.`,
            },
          ],
        },

        // ───── ARGUMENT BUILDER ───────────────────────────────────────────────
        {
          id: `l10-argument-builder`,
          type: `argument-builder`,
          headline: `What Actually Makes Teams Work?`,
          intro: `Pick the position that best captures your thinking. Build your case with 3-4 pieces of evidence. Then respond to the strongest counterargument. Real researchers and practicing managers defend each.`,
          positions: [
            {
              id: `individual-excellence`,
              label: `Individual excellence dominates: find great people, get out of their way`,
              summary: `Teams are made of individuals; quality of individuals determines most of team performance. Find great people, give them clear goals, worry less about "team dynamics" and more about selection. Defenders include Naval Ravikant, much of Silicon Valley VC, classic management thinkers. Strong evidence: NBA studies show individual talent is largest predictor; some breakthroughs clearly came from individual genius; selection effects compound. Limit: same individual can be high-performing in one team and low-performing in another; many tasks require coordination; stars who can't collaborate can damage output.`,
            },
            {
              id: `team-dynamics`,
              label: `Team dynamics dominate: psychological safety and working norms matter most`,
              summary: `Within a wide range of individual competence, team-level features (psychological safety, communication patterns, shared norms) determine how individuals can actually contribute. Amy Edmondson's psychological safety research (Harvard, 1999+); Google's Project Aristotle (2012-2015) found team dynamics outweighed individual mixing; Anita Woolley's collective intelligence research; Patrick Lencioni's "Five Dysfunctions" (2002). Strong evidence: hospital studies show high-performers report MORE errors (because they feel safe to report), Project Aristotle's five predictors are mostly team-level. Limit: can become excuse for poor selection; doesn't help when individual competence is binding constraint.`,
            },
            {
              id: `context-dependent`,
              label: `Context dominates: different work needs different team structures`,
              summary: `Neither individual nor team-dynamics is universally most important. Different types of work require different team structures. Key dimensions: interdependence, uncertainty, timescale, stakes, reversibility. Defenders include J. Richard Hackman ("Leading Teams" 2002), Bruce Tuckman (forming/storming/norming/performing model), practicing managers across many team types. Strong evidence: advice that worked in one context fails in another; surgical teams and research labs need fundamentally different structures. Limit: "it depends" can become excuse for no working framework; generic principles still useful as defaults.`,
            },
          ],
          evidence: [
            {
              id: `e1`,
              text: `NBA studies of team performance suggest individual talent is the single largest predictor of team success. The teams with the best individual players generally win most. This supports the individual-excellence position for high-skill, high-individual-contribution contexts.`,
              source: `Multiple sports analytics studies; basketball-specific research`,
            },
            {
              id: `e2`,
              text: `Amy Edmondson's 1999 research on hospital teams found that the highest-performing teams reported MORE errors than the worst-performing teams. The reason: high-performers felt safe enough to report errors and learn from them. Low-performers hid errors, which let them recur. Psychological safety became one of the most studied team variables in organizational research.`,
              source: `Edmondson 1999; subsequent decades of research`,
            },
            {
              id: `e3`,
              text: `Google's Project Aristotle (2012-2015) collected data on 180+ internal teams to find what predicted high performance. The expected answer was talent mix. The actual finding: who was on the team mattered less than how the team worked together. The top five predictors were psychological safety, dependability, structure and clarity, meaning, and impact. Most are team-level features.`,
              source: `Google Project Aristotle research; multiple published summaries`,
            },
            {
              id: `e4`,
              text: `Anita Woolley's research on "collective intelligence" found that group performance across many tasks was predicted more by turn-taking equality, social sensitivity, and gender diversity than by average individual IQ. Collective intelligence is a distinct variable from average individual intelligence. Supports the team-dynamics position.`,
              source: `Woolley et al. Science 2010; multiple replications`,
            },
            {
              id: `e5`,
              text: `Surgical teams and research labs are fundamentally different in interdependence and timescale. Optimal team structure for a 4-hour surgery (tight coordination, established protocols, clear roles) is wrong for a 3-year research project (exploration, distributed work, fluid roles). The "right team structure" varies enormously by context.`,
              source: `Hackman 2002; multiple cross-context studies`,
            },
            {
              id: `e6`,
              text: `Patrick Lencioni's "Five Dysfunctions of a Team" (2002) identified absence of trust, fear of conflict, lack of commitment, avoidance of accountability, and inattention to results as the dysfunctions that prevent teams from performing. The book has sold millions and influenced management practice. The dysfunctions are mostly team-level dynamics, not individual selection issues.`,
              source: `Lencioni 2002; widespread organizational practice`,
            },
            {
              id: `e7`,
              text: `The same individual can be high-performing in one team and low-performing in another. The Detroit Pistons' "Bad Boys" era (late 1980s) won championships with team play despite less star talent than several losing teams. Conversely, some teams with multiple superstars (early 2000s Lakers periods) failed when individual personalities clashed.`,
              source: `Sports history; multiple analyses`,
            },
            {
              id: `e8`,
              text: `Bruce Tuckman's developmental model (1965) describes team progression through forming, storming, norming, and performing stages. Different team needs at different stages. The model is influential in education and management even though specific empirical support is mixed. Suggests time and context shape what teams need.`,
              source: `Tuckman 1965; widespread educational and management use`,
            },
          ],
          counterargument: {
            id: `counter`,
            text: `"You picked your position. Here's the strongest objection. All three positions assume 'what makes teams work' has a stable answer that researchers can identify and people can apply. But maybe the question is wrong. Teams are made of specific people doing specific work in specific contexts at specific times. The same team in the same room can succeed Tuesday and fail Friday for reasons that don't fit any general framework. The researchers find patterns because they aggregate across many teams; the patterns may not apply to any specific team you'll actually be in. Why think your position helps you in real situations rather than just letting you sound smart about teams in the abstract?"`,
            promptInstruction: `In 3-4 sentences, respond. Does general research help with specific team situations, or is each team too contextual? How does your position handle the variation across specific instances?`,
          },
          reflectionPrompt: `Looking at the positions you didn't pick, which has the strongest argument that you'd find hardest to dismiss? Why?`,
        },

        {
          id: `l10-quiz`,
          type: `quiz`,
          headline: `Check your understanding`,
          questions: [
            {
              id: `q1`,
              type: `multiple-choice`,
              question: `What is "collective intelligence"?`,
              options: [
                `Smart groups`,
                `Anita Woolley's term for ability of a group to solve problems beyond what individual members could solve alone; real measurable phenomenon; predicted by turn-taking equality, social sensitivity, gender diversity more than by average individual IQ`,
                `Hive mind`,
                `Group voting`,
              ],
              correctIndex: 1,
              explanation: `Woolley's research published in Science (2010) showed collective intelligence is a distinct variable from average individual intelligence. Some groups consistently outperform others across many tasks because of group-level features, not just individual smartness.`,
            },
            {
              id: `q2`,
              type: `multiple-choice`,
              question: `What does "psychological safety" mean (Edmondson)?`,
              options: [
                `Feeling comfortable`,
                `Climate in which team members feel they can take interpersonal risks (ask questions, admit mistakes, raise concerns) without being punished; strongest single predictor of high-performing teams across many domains; distinct from comfort (it's specifically about willingness to be vulnerable about errors)`,
                `Safety from danger`,
                `Mental wellness`,
              ],
              correctIndex: 1,
              explanation: `Edmondson's 1999 hospital research found that highest-performing teams REPORTED MORE errors than worst-performing teams. Counterintuitive until you realize: high-performers felt safe enough to report errors and learn from them. Low-performers hid them. Psychological safety enables learning.`,
            },
            {
              id: `q3`,
              type: `multiple-choice`,
              question: `What was Google's Project Aristotle and what did it find?`,
              options: [
                `A philosophy project`,
                `Internal Google research (2012-2015) studying 180+ Google teams to identify what predicted high performance; found who was on the team mattered LESS than how the team worked together; top five predictors: psychological safety, dependability, structure and clarity, meaning, impact`,
                `Ancient Greek studies`,
                `Aristotle's writings`,
              ],
              correctIndex: 1,
              explanation: `The finding surprised Google researchers. The expected answer was talent mix; the actual answer was team dynamics. Project Aristotle is one of the strongest empirical findings supporting the team-dynamics position.`,
            },
            {
              id: `q4`,
              type: `multiple-choice`,
              question: `What does the "individual excellence dominates" position argue?`,
              options: [
                `Stars matter most`,
                `Teams are made of individuals; quality of individuals determines most of team performance; find great people, give clear goals, worry less about "team dynamics" and more about selection; defenders include Naval Ravikant, Silicon Valley VC, classic management; supported by selection-effect research`,
                `Teams don't matter`,
                `Money matters most`,
              ],
              correctIndex: 1,
              explanation: `Strong evidence: NBA studies show individual talent is largest predictor of team success; selection effects compound; many startup successes are about founders more than systems. Limit: same individual performs differently in different teams; coordination still matters.`,
            },
            {
              id: `q5`,
              type: `multiple-choice`,
              question: `What are "selection effects" and why do they matter?`,
              options: [
                `Voting effects`,
                `Outcomes that depend largely on who is in a situation rather than on what happens within it; "this team succeeded" can mean the team functioned well OR can mean selection found great people who would have succeeded anywhere; distinguishing the two requires comparing same people in different teams`,
                `Choice effects`,
                `Random selection`,
              ],
              correctIndex: 1,
              explanation: `Many "great team" stories are really "great selection" stories that happened to have a team attached. Recognizing selection effects is one of the most useful intellectual tools for thinking about why some collaborations work and others don't.`,
            },
            {
              id: `q6`,
              type: `multiple-choice`,
              question: `What does the "context dominates" position argue?`,
              options: [
                `Everything is relative`,
                `Different types of work require different team structures; key dimensions: interdependence, uncertainty, timescale, stakes, reversibility; surgical teams and research labs need fundamentally different structures; defenders include J. Richard Hackman, Bruce Tuckman, practicing managers across team types`,
                `Place matters`,
                `Time is important`,
              ],
              correctIndex: 1,
              explanation: `Strong evidence: advice that worked in one context fails in another. Optimal team structure for a 4-hour surgery is wrong for a 3-year research project. Limit: "it depends" can become excuse for no working framework; some principles transfer across contexts.`,
            },
            {
              id: `q7`,
              type: `multiple-choice`,
              question: `What is "interdependence" in teams?`,
              options: [
                `Working together`,
                `Degree to which team members' work depends on each other's contributions; high interdependence: surgical teams, jazz ensembles, sports plays; low interdependence: research labs, sales teams, individual contributors with shared resources; different interdependence levels need different team structures`,
                `Mutual support`,
                `Team building`,
              ],
              correctIndex: 1,
              explanation: `Trying to force tight team dynamics on low-interdependence work often slows it down; trying to use light coordination for high-interdependence work usually fails. Knowing the interdependence level is the first step to knowing what team structure makes sense.`,
            },
            {
              id: `q8`,
              type: `multiple-choice`,
              question: `What did Lencioni's "Five Dysfunctions" identify?`,
              options: [
                `Personality flaws`,
                `Absence of trust, fear of conflict, lack of commitment, avoidance of accountability, inattention to results; the dysfunctions that prevent teams from performing; mostly team-level dynamics issues rather than individual selection problems; widely influential in management practice`,
                `Five problems`,
                `Bad behaviors`,
              ],
              correctIndex: 1,
              explanation: `Lencioni's 2002 book has sold millions of copies and influenced management practice. The dysfunctions support the team-dynamics-dominates position because they describe team-level failures rather than individual selection issues.`,
            },
            {
              id: `q9`,
              type: `true-false`,
              question: `True or false: One of the three positions is clearly correct and the others are wrong.`,
              correctAnswer: false,
              explanation: `False. Each position has serious researchers and real evidence. Individual excellence, team dynamics, and context all matter; the disagreement is about which matters MOST in determining team performance. Most thoughtful researchers acknowledge all three matter to some degree. The question is which one is most important to optimize for.`,
            },
            {
              id: `q10`,
              type: `inference`,
              question: `Your friend says "Our group project would be fine if we just had smarter people on it. Team dynamics stuff is fluff." Based on this lesson, what's the most useful response?`,
              options: [
                `"Smarter people would solve it"`,
                `"That's one defensible position—the individual-excellence view—but it has real limits. Research like Google's Project Aristotle found that team dynamics (psychological safety, structure, clarity, meaning) predicted performance more than who was on the team. Anita Woolley's collective intelligence research showed group performance was predicted more by turn-taking and social sensitivity than by average IQ. 'Just smarter people' is one of the most common explanations for team problems and one of the least supported by evidence. Real teams often improve dramatically by changing dynamics without changing membership. Try focusing on what's blocking productive disagreement in your group, not just on who's in it."`,
                `"Team dynamics don't matter"`,
                `"You're right, fire everyone"`,
              ],
              correctIndex: 1,
              explanation: `Real applied team literacy. Don't dismiss the friend's intuition completely (individual quality does matter), but identify it as one defensible position with real limits. Point to specific research. Suggest a concrete alternative focus. This is the kind of conversation that can change how your friend approaches every team they're ever in.`,
            },
          ],
        },

        {
          id: `l10-reflection`,
          type: `reflection`,
          headline: `Sit with this`,
          intro: `Pick the prompt that pulls at you most. Your answer is saved.`,
          prompts: [
            { id: `reflect-cognitive`, category: `Cognitive`, prompt: `Before this lesson, what did you think made teams work? Has anything shifted?` },
            { id: `reflect-meta`, category: `Metacognitive`, prompt: `Think about the best team you've ever been on. What made it work? Which position best explains it?` },
            { id: `reflect-identity`, category: `Identity`, prompt: `If you become someone who can intentionally build psychological safety or other team-level features, what does that change about your ability to lead and collaborate over a lifetime?` },
            { id: `reflect-application`, category: `Application`, prompt: `Pick one team you're currently in. What's most blocking it? Apply the lesson's frameworks. What specific intervention would help?` },
            { id: `reflect-critical`, category: `Critical`, prompt: `Are there team types the lesson didn't address well? What about families? Friend groups? Online communities? Do the same principles apply, or do those need their own frameworks?` },
            { id: `reflect-personal`, category: `Personal investigation`, prompt: `Ask one adult who manages a team: what's the hardest team they've worked on, and why? Listen for which position their answer best supports.` },
          ],
        },

        {
          id: `l10-real-world`,
          type: `real-world`,
          headline: `Take it into your life`,
          guideContext: `Teams shape almost everything you'll do in life. Two paths.`,
          familyActivity: {
            title: `The Family Team Analysis`,
            duration: `40 minutes`,
            description: `At dinner, share the three positions on what makes teams work. Then ask each family member to pick a team they've been on (job, sports, volunteer, hobby) and analyze why it did or didn't work using the three frameworks. Most family members will discover they've been blaming individual people for what were actually team-dynamics problems, or blaming team dynamics for what were actually selection problems. The conversation often produces real insight about specific situations in everyone's lives.`,
          },
          projectOption: {
            title: `Run A Team Diagnostic On A Current Team, 3 weeks (optional)`,
            duration: `3 weeks, ~30 minutes per session`,
            description: `Pick a team you're currently in (school project group, sports team, friend group, family). Spend three weeks paying attention to: who's on it (selection), how it works together (dynamics), what kind of work it does (context). Write a 1,500-word diagnostic at the end: what's working, what's blocking, which intervention would help most. Real applied team analysis at a level most adults don't do.`,
            offerToParent: `Parent: opt your kid into this project from the dashboard. Running a team diagnostic at 12 is genuinely unusual and useful for the leadership skills they'll build later.`,
          },
          identityQuestion: `If you become someone who can intentionally improve teams you're on (whether you're leading or following), what does that change about your ability to make groups of people actually work well together over a lifetime?`,
        },

        {
          id: `l10-identity-hook`,
          type: `identity-hook`,
          headline: `Who is this lesson making you?`,
          prompt: `One sentence. No wrong answer.`,
          placeholder: `Someone who...`,
          examples: [
            `Someone who knows three real positions on what makes teams work, with serious defenders for each.`,
            `A person who can diagnose whether a team problem is selection, dynamics, or context.`,
            `Someone willing to build psychological safety in groups I'm part of.`,
          ],
          saveKey: `identity_responses_fs_11_12_10`,
        },

        {
          id: `l10-celebration`,
          type: `celebration`,
          guideText: `{name}. Tenth Future Skills lesson done. You're halfway through the band. You can now articulate three real positions on what makes teams work (individual excellence, team dynamics, context-dependence), know the major research (Edmondson on psychological safety, Google's Project Aristotle, Woolley on collective intelligence, Lencioni's Five Dysfunctions, Hackman on context), and apply this across the dozens of teams you'll be part of over your lifetime. Most adults make implicit assumptions about teams without ever examining them. You don't have to. Next time we go into another huge meta-skill: information literacy. The skill that ties together everything we've been doing with source evaluation, but as the focused lesson on it. Source Evaluation format. Let's go. — Byte`,
          badge: `team-thinker`,
          badgeName: `Team Thinker`,
          xpEarned: 75,
          competencies: [
            `Articulates three positions on team performance (individual excellence, team dynamics, context-dependence)`,
            `Knows major researchers: Edmondson, Woolley, Hackman, Lencioni, Project Aristotle`,
            `Understands psychological safety, collective intelligence, interdependence as concepts`,
            `Recognizes selection effects in team outcomes`,
            `Can diagnose team problems across multiple frameworks`,
          ],
          nextLessonPreview: {
            title: `Lesson 11: Information Literacy`,
            hook: `The focused meta-skill lesson on how to actually evaluate information sources. Source Evaluation format.`,
          },
        },
      ],
    },
  ],
};

export default FUTURESKILLS_VOYAGER_L10;

if (import.meta.env?.DEV) {
  const l = FUTURESKILLS_VOYAGER_L10.lessons[0];
  const mags = l.screens.filter((s) => s.type === `magazine`).length;
  const argEvi = l.screens.find((s) => s.type === `argument-builder`)?.evidence?.length ?? 0;
  const quiz = l.screens.find((s) => s.type === `quiz`)?.questions?.length ?? 0;
  const reflect = l.screens.find((s) => s.type === `reflection`)?.prompts?.length ?? 0;
  console.log(
    `[LESSON-FS-VOYAGER-L10 ${VERSION}] "${l.title}" — ${mags} magazine, argument-builder w/ ${argEvi} evidence, ${quiz} quiz, ${reflect} reflection`
  );
}
