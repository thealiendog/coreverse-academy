// ─────────────────────────────────────────────────────────────────────────────
// SOCIAL LEADERSHIP VOYAGER  |  L12 — Building Teams
// Age band : voyagers (11-12)   Guide: valor (Lion)
// Standards: Coreverse Original — Team Dynamics, Organizational Psychology
// CALIBRATED: Voyager spec v1.1 (May 2026)
// Interaction format: MATCHING GAME (5 Project Aristotle elements to applications)
// ─────────────────────────────────────────────────────────────────────────────

const VERSION = "voyager-sl-l12-v1";

const SOCIALLEADERSHIP_VOYAGER_L12 = {
  ageBand: `voyagers`,
  subjectId: `social-leadership`,
  guide: `valor`,

  lessons: [
    {
      id: `sl-11-12-12`,
      title: `Building Teams`,
      duration: 35,
      xpReward: 75,
      badge: `team-builder`,
      badgeName: `Team Builder`,

      screens: [
        {
          id: `l12-welcome`,
          type: `welcome`,
          guideText: `{name}, teams matter. Almost everything significant gets done by teams. The question of what makes teams work has been studied seriously, and one of the largest empirical studies on the question came from Google. Between 2012 and 2015, Google's "Project Aristotle" studied hundreds of their own teams to identify what distinguished high-performing teams from underperforming ones. The findings were surprising — what mattered most wasn't who was on the team but how the team worked together. Five elements emerged as critical. Today you'll match each element to specific applications that demonstrate it. By the end you'll have a working framework for evaluating and building any team you're part of across your lifetime.`,
          headline: `Building Teams`,
          subtitle: `Google's Project Aristotle: five elements that distinguish effective teams. Match them to applications.`,
          visual: `/voyager-assets/social-leadership/l12-welcome.webp`,
        },

        {
          id: `l12-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Project Aristotle: How Google Studied Teams`,
          paragraphs: [
            `In 2012, Google launched an internal research effort called Project Aristotle to identify what makes their teams effective. They started with the assumption that the answer would be about WHO was on the team: the right combination of skills, personalities, expertise levels, or other individual characteristics. Plausible hypothesis. Wrong, as it turned out.`,
            `The research was substantial. Researchers studied 180+ teams across Google, analyzed how teams interacted, conducted interviews, ran experiments, and looked for patterns across hundreds of variables. The dataset was large enough to be empirically meaningful, not just impressionistic. The research ran from 2012 to 2015 and was eventually published in summary form through the New York Times Magazine, Re:Work (Google's own publication), and the work of Charles Duhigg.`,
            `The findings overturned the team composition hypothesis. Who was on the team mattered far less than expected. Teams with strong individual performers sometimes underperformed teams with average individual performers. Teams with diverse expertise sometimes underperformed less diverse teams. Teams with formal structure sometimes underperformed informal teams. The variation wasn't about who; it was about HOW the team functioned together.`,
            `Five elements emerged as the strongest predictors of team effectiveness. Of these, one was significantly more important than the others: psychological safety. The other four — dependability, structure and clarity, meaning of work, and impact of work — mattered too, but psychological safety was the foundation everything else built on.`,
            `The research has held up in subsequent work by other organizations and researchers. The framework isn't Google's invention; it consolidates findings that other researchers (especially Amy Edmondson at Harvard, who originated the concept of psychological safety) had been developing for years. But Google's scale made the framework widely visible and influential in subsequent team-building practice.`,
          ],
          image: `/voyager-assets/social-leadership/l12-s1-aristotle.webp`,
          imageCaption: `Project Aristotle (2012-2015): Google studied 180+ teams. Who was on the team mattered less than how the team functioned. Five elements emerged.`,
          vocab: [
            {
              word: `Project Aristotle (Google)`,
              definition: `Internal research effort at Google from 2012-2015 to identify what makes their teams effective. Studied 180+ teams across the company. Findings: who was on the team mattered far less than how the team functioned together. Five elements emerged as critical: psychological safety, dependability, structure and clarity, meaning of work, impact of work. Has been influential in subsequent team-building practice.`,
              audioPrompt: `Project Aristotle was an internal research effort at Google from 2012 to 2015 to identify what makes their teams effective, {name}. Studied more than 180 teams across the company. Started with the hypothesis that the answer would be about who was on the team: combinations of skills, personalities, expertise levels, individual characteristics. The hypothesis turned out to be wrong. Who was on the team mattered far less than expected. Teams with strong individual performers sometimes underperformed teams with average individual performers. The variation was about how the team functioned together, not who was on it. Five elements emerged as the strongest predictors of team effectiveness: psychological safety, dependability, structure and clarity, meaning of work, and impact of work. The research has held up in subsequent work by other organizations. The framework consolidates findings that other researchers, especially Amy Edmondson at Harvard, had been developing for years. Google's scale made the framework widely visible and influential in subsequent team-building practice.`,
            },
          ],
        },

        {
          id: `l12-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Element 1: Psychological Safety (The Foundation)`,
          paragraphs: [
            `Psychological safety is the shared belief among team members that the team is safe for interpersonal risk-taking. Specifically: it's safe to ask questions when you don't understand, admit when you've made a mistake, raise concerns about decisions, propose new ideas that might fail, and disagree with people who have more authority. Without psychological safety, none of these happen reliably even when they're needed.`,
            `Amy Edmondson at Harvard Business School coined the term and has researched it for decades. Her work found that psychological safety doesn't mean comfort or absence of conflict. Safe teams can disagree intensely. They just disagree about ideas rather than attacking people. Safe teams can have hard conversations. They just don't punish the people willing to bring up hard topics. The "safety" is about interpersonal risk, not about avoiding discomfort.`,
            `Why psychological safety is foundational. The other four elements all depend on people taking interpersonal risks. Dependability requires admitting when you can't meet a commitment so the team can adjust; in unsafe teams, people hide problems until they become bigger. Structure and clarity requires asking questions when expectations aren't clear; in unsafe teams, people pretend to understand. Meaning and impact require honest reflection on what the work is producing; in unsafe teams, people perform satisfaction rather than expressing real views.`,
            `What builds psychological safety. Leaders respond to questions with curiosity rather than judgment. Mistakes are treated as learning opportunities rather than failures to punish. Disagreement is welcomed openly. Quiet team members are deliberately drawn into conversations. People who raise concerns are thanked rather than dismissed. The behaviors compound: each demonstration of safety makes future risk-taking easier.`,
            `What destroys psychological safety. Public criticism. Punishing people who raise concerns. Dismissing questions as evidence of incompetence. Sarcasm at someone's expense. Visible favoritism. Tolerating one team member who treats others badly. The behaviors don't just affect their immediate targets; everyone watches and updates their expectations.`,
          ],
          image: `/voyager-assets/social-leadership/l12-s2-safety.webp`,
          imageCaption: `Psychological safety: shared belief team is safe for interpersonal risk-taking. Amy Edmondson's foundational research. Most important element from Project Aristotle.`,
          vocab: [
            {
              word: `psychological safety (Edmondson)`,
              definition: `Concept developed by Amy Edmondson at Harvard Business School. Shared belief among team members that the team is safe for interpersonal risk-taking: asking questions, admitting mistakes, raising concerns, proposing ideas that might fail, disagreeing with authority. Foundational element from Project Aristotle. Doesn't mean absence of conflict or discomfort; means safety from interpersonal punishment for legitimate risks.`,
              audioPrompt: `Psychological safety is a concept developed by Amy Edmondson at Harvard Business School over decades of research, {name}. Shared belief among team members that the team is safe for interpersonal risk-taking. Specifically: it's safe to ask questions when you don't understand, admit when you've made a mistake, raise concerns about decisions, propose new ideas that might fail, and disagree with people who have more authority. Without psychological safety, none of these happen reliably even when they're needed. Edmondson's work found that psychological safety doesn't mean comfort or absence of conflict. Safe teams can disagree intensely. They just disagree about ideas rather than attacking people. Safe teams can have hard conversations. They just don't punish the people willing to bring up hard topics. The "safety" is about interpersonal risk, not about avoiding discomfort. Was the most important element from Google's Project Aristotle research; subsequent research has confirmed its foundational role. Builds through specific behaviors over time; destroys through specific behaviors over time.`,
            },
          ],
        },

        {
          id: `l12-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Elements 2, 3: Dependability And Structure`,
          paragraphs: [
            `Element 2: dependability. Team members reliably deliver what they say they'll deliver, on time, at the agreed quality level. The element sounds simple. It's also one of the most common failure points in teams. Members who consistently miss commitments produce specific problems: others have to compensate, plans don't work, trust drains, the unreliable member often doesn't realize how much extra work they create for others.`,
            `Dependability is partly a personal characteristic and partly a function of team norms. Some people are individually more dependable than others; some teams produce more dependability from their members than others. The team-level factors include: clarity of commitments (people know what they're committing to), realistic loading (people aren't expected to do more than they can), psychological safety to renegotiate (people can say "I can't make this work by Friday" without being punished), and shared expectations about what dependability means.`,
            `One specific pattern. Reliable team members usually under-commit and over-deliver rather than the reverse. They say "I'll get you a draft by Wednesday" when they think they could do it by Tuesday, then deliver Tuesday. Unreliable team members often over-commit ("Sure, I can have it by Monday!") and under-deliver ("Sorry, I need until Wednesday"). The reliability difference compounds dramatically across many commitments over time.`,
            `Element 3: structure and clarity. Team members understand their roles, plans, and goals. There's enough explicit structure that people know what they're supposed to do, what others are doing, what success looks like, and how decisions get made. Without this, teams default to wasted effort, duplicated work, missed commitments because nobody knew they were committed, and confusion about who owns what.`,
            `Structure can be over-done too. Excessive process, meeting cadence, documentation requirements, and approval chains can damage teams by producing administrative burden that crowds out actual work. The right amount of structure depends on team size, work complexity, and member experience. New teams usually need more structure than mature teams; complex projects usually need more than simple ones.`,
            `Common structure elements: written roles and responsibilities, regular team meetings with clear agendas, documented decisions, agreed deadlines and milestones, escalation paths for when things go wrong, transparent goals everyone shares. None of these alone makes a team effective, but their absence often produces preventable problems.`,
          ],
          image: `/voyager-assets/social-leadership/l12-s3-dep-struct.webp`,
          imageCaption: `Element 2: dependability (reliable delivery on commitments). Element 3: structure and clarity (clear roles, plans, goals). Both build through team norms, not just individual character.`,
          vocab: [
            {
              word: `dependability (in team research)`,
              definition: `One of Project Aristotle's five elements. Team members reliably deliver what they say they'll deliver, on time, at the agreed quality level. Both an individual characteristic and a team-level function. Patterns: reliable members usually under-commit and over-deliver; unreliable members over-commit and under-deliver. The reliability difference compounds dramatically across many commitments over time.`,
              audioPrompt: `Dependability in team research refers to team members reliably delivering what they say they'll deliver, on time, at the agreed quality level, {name}. One of Project Aristotle's five elements of effective teams. Sounds simple. Is also one of the most common failure points in teams. Members who consistently miss commitments produce specific problems: others have to compensate, plans don't work, trust drains, the unreliable member often doesn't realize how much extra work they create for others. Dependability is partly a personal characteristic and partly a function of team norms. Team-level factors include clarity of commitments, realistic loading, psychological safety to renegotiate when needed, and shared expectations about what dependability means. One specific pattern: reliable team members usually under-commit and over-deliver. They say "I'll get you a draft by Wednesday" when they think they could do it by Tuesday, then deliver Tuesday. Unreliable team members often over-commit and under-deliver. The reliability difference compounds dramatically over many commitments.`,
            },
          ],
        },

        {
          id: `l12-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Elements 4, 5: Meaning And Impact`,
          paragraphs: [
            `Element 4: meaning of work. Team members find personal significance in what they're doing. The meaning doesn't have to be world-saving; it just has to connect to something the individual genuinely cares about. Different team members can find different meaning in the same work. A teacher might find meaning in shaping students; another might find meaning in subject mastery; another in their colleagues. All can be authentic.`,
            `Why meaning matters for team effectiveness. Work without personal meaning gets done at minimum level. People show up, do what's required, leave. They don't bring their best thinking or extra effort. They don't notice problems that aren't strictly theirs. They don't develop their capabilities beyond what's required. Over time, the difference between teams whose members find meaning and teams whose members are just doing a job is enormous.`,
            `Leaders can support meaning without faking it. Connecting work to individual values. Helping members see how their specific contributions matter. Sharing the larger context around what the team is doing. Making space for individuals to bring their genuine interests to the work. None of these manufactures meaning that isn't there, but they support the connection between people and work.`,
            `Element 5: impact of work. Team members believe the work matters and produces something real. Different from meaning (personal significance). Impact is whether the work actually achieves something in the world: helps people, builds something, solves problems, makes things better. Teams whose members believe their work has real impact perform better than teams whose members feel they're producing noise.`,
            `What undermines belief in impact. Work that gets done but never used. Work that gets approved and then ignored. Work whose connection to outcomes is unclear. Work that members suspect doesn't matter to leadership either. Bureaucratic process work that consumes time without producing visible value. These patterns drain team energy over time and reduce performance.`,
            `What supports belief in impact. Showing teams the effects of their work. Connecting them to people who use what they produce. Making impact visible through metrics, stories, or feedback. Eliminating work that genuinely doesn't matter. Being honest about what impact a project actually has rather than overhyping.`,
            `One pattern that connects meaning and impact. Teams whose members find both meaning AND impact in the work outperform teams with neither, but also teams with only one. Meaning without impact produces engaged people who feel their work doesn't matter. Impact without meaning produces people doing important work that doesn't connect to them personally. Both together produce sustained high performance.`,
          ],
          image: `/voyager-assets/social-leadership/l12-s4-mean-impact.webp`,
          imageCaption: `Element 4: meaning of work (personal significance). Element 5: impact of work (real effect in the world). Both together produce sustained high performance.`,
          vocab: [
            {
              word: `meaning vs impact distinction (in team research)`,
              definition: `Two related but distinct elements from Project Aristotle. Meaning: personal significance team members find in their work (varies by individual). Impact: whether the work actually achieves something in the world. Can have one without the other: meaning without impact (engaged but doing pointless work), impact without meaning (important work but not personally connecting). Both together produce sustained high performance.`,
              audioPrompt: `Meaning versus impact distinction in team research refers to two related but distinct elements from Project Aristotle, {name}. Meaning is the personal significance team members find in their work. The meaning doesn't have to be world-saving; it just has to connect to something the individual genuinely cares about. Different team members can find different meaning in the same work. Impact is whether the work actually achieves something in the world: helps people, builds something, solves problems, makes things better. Can have one without the other. Meaning without impact produces engaged people who feel their work doesn't matter. Impact without meaning produces people doing important work that doesn't connect to them personally. Both together produce sustained high performance. Teams whose members find both meaning AND impact in the work outperform teams with only one or neither. The distinction matters because addressing only one without the other leaves performance on the table; addressing both deliberately compounds team effectiveness.`,
            },
          ],
        },

        {
          id: `l12-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Before You Match The Pairs`,
          paragraphs: [
            `In the matching game that follows, you'll match each of the five elements to specific applications that demonstrate them. The applications come from different contexts: school project teams, sports teams, work teams, family situations, community groups. The pattern matters more than the specific context: the elements operate across all kinds of teams.`,
            `One framing as you work through the matches. Each element shows up in specific concrete behaviors and situations, not abstract concepts. Psychological safety isn't a vibe; it's specific things that happen when people ask questions, admit mistakes, or disagree. Dependability isn't a feeling; it's specific patterns of commitment and delivery. The skill of building teams involves recognizing these specific patterns in real situations.`,
            `Another framing. Most teams have some elements stronger than others. The skill of team improvement involves diagnosing which elements are weak and working on those specifically rather than generic team-building. A team with low psychological safety needs different interventions than a team with low structure. A team with weak meaning needs different work than a team with weak dependability.`,
            `One last framing. You'll be on many teams over your lifetime: school projects, sports teams, work teams, community groups, family situations. The framework you build now applies to all of them. Most adults don't have explicit team frameworks; they operate by intuition. The intuition is often partly correct but misses specific elements that explicit framework catches. Building this framework at 12 puts you ahead of most working adults.`,
          ],
          image: `/voyager-assets/social-leadership/l12-s5-before.webp`,
          imageCaption: `Five elements show up in specific concrete behaviors. The pattern applies across teams of any kind.`,
          vocab: [
            {
              word: `team diagnosis`,
              definition: `Practice of identifying which specific elements are weak in a particular team rather than treating all team problems as needing the same intervention. A team with low psychological safety needs different work than a team with low structure. Skilled team leaders diagnose before intervening rather than applying generic team-building techniques. Different elements respond to different interventions.`,
              audioPrompt: `Team diagnosis is the practice of identifying which specific elements are weak in a particular team rather than treating all team problems as needing the same intervention, {name}. A team with low psychological safety needs different work than a team with low structure. A team with weak meaning needs different work than a team with weak dependability. A team with low belief in impact needs different work than a team with low individual commitment. Skilled team leaders diagnose before intervening rather than applying generic team-building techniques. The diagnosis comes from observing the specific patterns: does the team raise concerns openly or hide them? Do members deliver consistently or miss commitments? Are roles clear or confused? Do members connect to the work personally? Do members believe the work matters? Each of these is a separate question and each requires different work to improve. Generic team-building activities often fail because they target the wrong element; targeted interventions usually produce real change.`,
            },
          ],
        },

        // ───── MATCHING GAME ──────────────────────────────────────────────────
        {
          id: `l12-matching-game`,
          type: `matching-game`,
          headline: `Match Each Element To Its Application`,
          intro: `Five Project Aristotle elements. Five real-world applications. Drag each application to the element it demonstrates. Each pairing teaches you what these elements actually look like in practice.`,
          pairs: [
            {
              id: `pair-1`,
              concept: {
                id: `psychological-safety`,
                label: `Psychological Safety`,
                description: `Shared belief team is safe for interpersonal risk-taking`,
              },
              application: {
                id: `app-1`,
                label: `In a project team meeting, one member says "I'm confused about this part — can someone explain again?" The team responds by walking them through it without any sighs, dismissive looks, or comments about how it was "already covered." The next meeting, three more members ask questions about other things they hadn't fully understood.`,
                explanation: `This demonstrates psychological safety in action. The team's response to one member's question shapes whether others feel safe asking. The willingness to ask questions, the absence of judgment in response, and the increased question-asking in subsequent meetings all show a team with strong psychological safety. Amy Edmondson's research consistently finds that question-asking patterns are one of the strongest indicators of psychological safety. The opposite would be a team where one questioner gets sighed at, dismissed, or implicitly punished — which then teaches everyone else not to ask.`,
              },
            },
            {
              id: `pair-2`,
              concept: {
                id: `dependability`,
                label: `Dependability`,
                description: `Team members reliably deliver what they say they'll deliver`,
              },
              application: {
                id: `app-2`,
                label: `A team member commits to having her section of the report done by Friday. On Wednesday, she realizes the work is taking longer than expected. She immediately tells the team: "I committed to Friday but I'm not going to make it. I can have a partial version Friday morning that covers X but not Y, or I can have the complete version Monday. Which would work better for the team?"`,
                explanation: `This demonstrates dependability done well. Notice what's happening: she's not just reliably delivering (though her track record presumably supports the team's trust); she's also reliably surfacing problems early enough for the team to adjust. The pattern matters because pure delivery without surfacing problems early produces last-minute failures when commitments slip silently. Real dependability includes the meta-skill of communicating about commitments accurately and giving the team information to plan around. Reliable members usually under-commit and over-deliver; even when they slip, they slip early and visibly, not late and silently.`,
              },
            },
            {
              id: `pair-3`,
              concept: {
                id: `structure-clarity`,
                label: `Structure & Clarity`,
                description: `Team members understand roles, plans, and goals`,
              },
              application: {
                id: `app-3`,
                label: `A team's shared document includes: who is responsible for what (written out by name), the project timeline with milestones, a list of decisions already made, an agenda for the next meeting, the team's main goals for this quarter, and the names of who to contact when specific problems arise. Anyone can find the answer to "what am I supposed to be doing" without asking anyone.`,
                explanation: `This demonstrates structure and clarity. The document captures the specific elements that prevent the most common team confusion: unclear ownership, unknown timelines, decisions that get re-litigated because nobody remembers what was decided, vague goals, and escalation paths when things go wrong. The structure isn't excessive (it's a document, not a bureaucratic process), but it's enough to remove ambiguity. New team members can orient themselves without extensive onboarding; current members don't waste time wondering who's doing what. The right amount of structure removes confusion without creating administrative burden.`,
              },
            },
            {
              id: `pair-4`,
              concept: {
                id: `meaning`,
                label: `Meaning Of Work`,
                description: `Team members find personal significance in what they do`,
              },
              application: {
                id: `app-4`,
                label: `On a nursing team, different members find meaning differently. One genuinely loves the medical problem-solving aspect of patient care. Another finds meaning in the relationships with patients during difficult times. A third is most engaged by mentoring new nurses on the unit. A fourth deeply values being part of an excellent team. The leader makes space for each to lean into what gives them personal significance rather than insisting everyone find meaning the same way.`,
                explanation: `This demonstrates meaning of work well. Notice the diversity: different team members find meaning in different aspects of the same work. All are authentic. None requires the work to be world-saving; each connects to something the individual genuinely cares about. The leader's role isn't to manufacture shared meaning but to make space for individual meaning to operate. Teams whose members find personal meaning in the work — even differently — outperform teams whose members are just doing a job, regardless of the work's external significance.`,
              },
            },
            {
              id: `pair-5`,
              concept: {
                id: `impact`,
                label: `Impact Of Work`,
                description: `Team members believe the work matters and produces something real`,
              },
              application: {
                id: `app-5`,
                label: `An engineering team builds water purification equipment for a humanitarian organization. Once a quarter, the organization shares specific stories with the team: this village now has clean water because of unit 47, this region's diarrhea rates dropped 60% after the equipment was installed. The team members see real photos of real people using what they built. Engagement is high; turnover is low; people work hard not because they're forced to but because they can see what their work produces.`,
                explanation: `This demonstrates impact of work. Notice that the impact isn't assumed; it's made visible. The quarterly stories transform abstract "we make water purification equipment" into concrete "village 47 now has clean water." Without that transformation, the team would still do the work but with lower energy and engagement. Impact has to be both real AND visible to function as a team-effectiveness element. Real impact that's invisible (work that matters but team can't see how) often doesn't produce the engagement benefits; visible impact that's exaggerated produces engagement that collapses when reality breaks through. Both real and visible matter.`,
              },
            },
          ],
          reflectionPrompt: `Look across the five matches. Which elements feel most familiar from teams you've been on? Which feel most absent in teams you've been part of?`,
        },

        {
          id: `l12-quiz`,
          type: `quiz`,
          headline: `Check your understanding`,
          questions: [
            {
              id: `q1`,
              type: `multiple-choice`,
              question: `What was Project Aristotle and what did it find?`,
              options: [
                `Random study`,
                `Google's 2012-2015 internal research studying 180+ teams to identify what made them effective; found that WHO was on the team mattered far less than HOW the team functioned together; five elements emerged: psychological safety, dependability, structure and clarity, meaning, impact; psychological safety was most important`,
                `Greek philosophy`,
                `Random research`,
              ],
              correctIndex: 1,
              explanation: `The research consolidated findings other researchers (especially Amy Edmondson on psychological safety) had been developing. Google's scale made the framework widely visible and influential in subsequent team-building practice. The hypothesis that team composition was the key turned out to be wrong.`,
            },
            {
              id: `q2`,
              type: `multiple-choice`,
              question: `What is "psychological safety" (Edmondson)?`,
              options: [
                `Just comfort`,
                `Shared belief among team members that the team is safe for interpersonal risk-taking: asking questions, admitting mistakes, raising concerns, proposing ideas that might fail, disagreeing with authority; foundational element from Project Aristotle; doesn't mean absence of conflict or comfort, means safety from interpersonal punishment`,
                `Feeling good`,
                `Random concept`,
              ],
              correctIndex: 1,
              explanation: `Safe teams can disagree intensely; they just disagree about ideas rather than attacking people. Safe teams can have hard conversations; they just don't punish the people willing to bring up hard topics. The "safety" is about interpersonal risk, not avoiding discomfort.`,
            },
            {
              id: `q3`,
              type: `multiple-choice`,
              question: `Why is psychological safety foundational to the other four elements?`,
              options: [
                `Random claim`,
                `The other four elements all depend on people taking interpersonal risks: dependability requires admitting when you can't meet a commitment; structure requires asking questions when expectations aren't clear; meaning and impact require honest reflection; in unsafe teams, people hide problems, pretend to understand, and perform satisfaction rather than share real views`,
                `Edmondson says so`,
                `It's first`,
              ],
              correctIndex: 1,
              explanation: `Without psychological safety, the other elements degrade because the behaviors they require involve interpersonal risk. The foundational role isn't just stated; it's structural: each other element depends on safety to operate.`,
            },
            {
              id: `q4`,
              type: `multiple-choice`,
              question: `What's the pattern that distinguishes reliable from unreliable team members?`,
              options: [
                `Personality`,
                `Reliable members usually under-commit and over-deliver ("I'll get you a draft by Wednesday" when they think Tuesday works); unreliable members over-commit and under-deliver ("Sure I can have it by Monday!" then deliver Wednesday); the reliability difference compounds dramatically across many commitments over time`,
                `Random`,
                `Just luck`,
              ],
              correctIndex: 1,
              explanation: `The pattern is observable and trainable. People who notice the pattern can deliberately shift toward under-committing and over-delivering. Most people drift toward over-commitment without realizing because the moment of commitment feels generous; the moment of failed delivery is what costs trust.`,
            },
            {
              id: `q5`,
              type: `multiple-choice`,
              question: `What is the right amount of "structure and clarity"?`,
              options: [
                `Maximum process`,
                `Enough that people know roles, plans, and goals (preventing confusion and duplicated work) without producing administrative burden that crowds out actual work; depends on team size, work complexity, member experience; new teams usually need more structure than mature teams; complex projects usually need more than simple ones`,
                `No structure`,
                `Random amount`,
              ],
              correctIndex: 1,
              explanation: `Common structure elements: written roles, regular meetings with clear agendas, documented decisions, agreed deadlines and milestones, escalation paths, transparent goals. None alone makes a team effective, but their absence often produces preventable problems.`,
            },
            {
              id: `q6`,
              type: `multiple-choice`,
              question: `What's the distinction between "meaning" and "impact" of work?`,
              options: [
                `Same thing`,
                `Meaning = personal significance individuals find in the work (varies by person, doesn't have to be world-saving); impact = whether the work actually achieves something in the world (real effect); can have one without the other; both together produce sustained high performance`,
                `Different words`,
                `Random distinction`,
              ],
              correctIndex: 1,
              explanation: `Meaning without impact produces engaged people who feel their work doesn't matter. Impact without meaning produces people doing important work that doesn't connect to them personally. Both together produce sustained high performance. The distinction matters because addressing only one leaves performance on the table.`,
            },
            {
              id: `q7`,
              type: `multiple-choice`,
              question: `Why does belief in impact need to be both real AND visible?`,
              options: [
                `Random pattern`,
                `Real impact that's invisible (work that matters but team can't see how) often doesn't produce engagement benefits; visible impact that's exaggerated produces engagement that collapses when reality breaks through; both real and visible matter; leaders can support impact by sharing specific stories and metrics that show what work produces`,
                `Just visibility`,
                `Just reality`,
              ],
              correctIndex: 1,
              explanation: `What undermines belief in impact: work that gets done but never used, work whose connection to outcomes is unclear, bureaucratic process work consuming time without value. What supports it: showing teams effects, connecting to people who use what they produce, eliminating genuinely pointless work.`,
            },
            {
              id: `q8`,
              type: `multiple-choice`,
              question: `What is "team diagnosis"?`,
              options: [
                `Medical term`,
                `Practice of identifying which specific elements are weak in a particular team rather than treating all team problems as needing the same intervention; team with low psychological safety needs different work than team with low structure; skilled team leaders diagnose before intervening rather than applying generic team-building`,
                `Doctor visit`,
                `Random concept`,
              ],
              correctIndex: 1,
              explanation: `Generic team-building activities often fail because they target the wrong element; targeted interventions usually produce real change. The diagnosis comes from observing specific patterns: are concerns raised, are commitments delivered, are roles clear, do members connect to the work, do they believe the work matters?`,
            },
            {
              id: `q9`,
              type: `true-false`,
              question: `True or false: The most important factor for team effectiveness is having the smartest people on the team.`,
              correctAnswer: false,
              explanation: `False. Project Aristotle's main finding: who was on the team mattered far less than how the team functioned together. Teams with strong individual performers sometimes underperformed teams with average individual performers. The variation was about how the team worked together, not who was on it. Five elements about team functioning emerged as the predictors.`,
            },
            {
              id: `q10`,
              type: `inference`,
              question: `Your friend says "Our project team isn't working well. Half the people don't deliver on time, and nobody asks questions when they don't understand. The leader keeps saying we need 'better communication.'" Based on this lesson, what should you point out?`,
              options: [
                `"He's right"`,
                `"'Better communication' is too generic and probably won't fix it. Apply team diagnosis from Project Aristotle. The 'nobody asks questions when they don't understand' is a psychological safety problem — people probably learned that asking questions gets dismissed or judged. The 'half don't deliver on time' might be dependability, but could also be structure (if commitments are unclear), or could be downstream from low psychological safety (people over-commit because they're afraid to renegotiate). Don't fix communication generally; fix the specific elements that are weak. For psychological safety: leader needs to respond to questions with curiosity, thank people who raise concerns, draw quiet members in. For dependability: clarify commitments specifically, make it safe to renegotiate when needed, model under-committing and over-delivering. Different interventions for different elements. Generic 'better communication' usually doesn't change anything because it doesn't target the actual problem."`,
                `"Random advice"`,
                `"Quit team"`,
              ],
              correctIndex: 1,
              explanation: `Real applied team diagnosis. Don't dismiss the leader's instinct; redirect from generic "communication" to specific Project Aristotle elements with specific interventions for each. This is the kind of analysis that can actually transform team performance.`,
            },
          ],
        },

        {
          id: `l12-reflection`,
          type: `reflection`,
          headline: `Sit with this`,
          intro: `Pick the prompt that pulls at you most. Your answer is saved.`,
          prompts: [
            { id: `reflect-cognitive`, category: `Cognitive`, prompt: `Before this lesson, did you have explicit framework for what makes teams work? Has anything shifted?` },
            { id: `reflect-meta`, category: `Metacognitive`, prompt: `Honestly: in teams you're on, which element is weakest? What specific intervention would help?` },
            { id: `reflect-identity`, category: `Identity`, prompt: `If you become someone who can diagnose and improve teams across many situations over a lifetime, what does that change about the projects you can complete and the groups you can lead?` },
            { id: `reflect-application`, category: `Application`, prompt: `Pick one team you're currently on. Apply the five elements. Which are strong, which are weak, what specific interventions would help?` },
            { id: `reflect-critical`, category: `Critical`, prompt: `Are there teams the framework doesn't apply well to? What about artistic collaborations? Romantic relationships? Distributed online groups?` },
            { id: `reflect-personal`, category: `Personal investigation`, prompt: `Watch one team you're part of this week. Without intervening, just observe the five elements. What patterns do you notice?` },
          ],
        },

        {
          id: `l12-real-world`,
          type: `real-world`,
          headline: `Take it into your life`,
          guideContext: `Team framework applies across many teams over a lifetime. Two paths.`,
          familyActivity: {
            title: `The Family Team Conversation`,
            duration: `45 minutes`,
            description: `Share the five elements. Ask family members about a team they've been on (work, sports, school, community). Apply the framework: which elements were strong, which were weak, what could have helped? Most adults have rich team experiences they haven't analyzed explicitly. The conversation often surfaces patterns adults have been operating with implicitly for years.`,
          },
          projectOption: {
            title: `Read Edmondson's "The Fearless Organization" or Duhigg's "Smarter Faster Better," 4 weeks (optional)`,
            duration: `4 weeks, ~30 minutes per session`,
            description: `Pick one: Amy Edmondson's "The Fearless Organization" (2018, on psychological safety) or Charles Duhigg's "Smarter Faster Better" (2016, which includes the Project Aristotle research). Apply concepts to teams you're observing during the reading period. Write 1,500 words on what you learned. Reading a real team research book at 12 produces capability most working adults lack.`,
            offerToParent: `Parent: opt your kid into this project. Real team-building literacy at 12 compounds dramatically.`,
          },
          identityQuestion: `If you become someone who can diagnose and improve any team you're on — recognizing which elements are weak and applying targeted interventions — what does that change about the quality of work you can do across many teams over a lifetime?`,
        },

        {
          id: `l12-identity-hook`,
          type: `identity-hook`,
          headline: `Who is this lesson making you?`,
          prompt: `One sentence. No wrong answer.`,
          placeholder: `Someone who...`,
          examples: [
            `Someone who can diagnose which element is weak in any team I'm on.`,
            `A person who under-commits and over-delivers rather than the reverse.`,
            `Someone who responds to others' questions with curiosity to build psychological safety.`,
          ],
          saveKey: `identity_responses_sl_11_12_12`,
        },

        {
          id: `l12-celebration`,
          type: `celebration`,
          guideText: `{name}. Twelfth Social Leadership lesson done. You now have Project Aristotle's five elements (psychological safety, dependability, structure and clarity, meaning, impact), know the key thinkers (Edmondson on psychological safety, Duhigg's accessible synthesis), can apply team diagnosis to identify weak elements, and can match interventions to specific elements rather than applying generic team-building. You're at 60% of the band. Next time we go into difficult conversations. Three case studies. Case Study format. Let's go. — Valor`,
          badge: `team-builder`,
          badgeName: `Team Builder`,
          xpEarned: 75,
          competencies: [
            `Knows Project Aristotle's five elements of effective teams`,
            `Articulates Amy Edmondson's psychological safety as foundational`,
            `Distinguishes meaning (personal significance) from impact (real effect)`,
            `Applies team diagnosis to identify specifically which elements are weak`,
            `Matches interventions to elements rather than applying generic team-building`,
          ],
          nextLessonPreview: {
            title: `Lesson 13: Difficult Conversations`,
            hook: `Three case studies. Case Study format.`,
          },
        },
      ],
    },
  ],
};

export default SOCIALLEADERSHIP_VOYAGER_L12;

if (import.meta.env?.DEV) {
  const l = SOCIALLEADERSHIP_VOYAGER_L12.lessons[0];
  const mags = l.screens.filter((s) => s.type === `magazine`).length;
  const matching = l.screens.find((s) => s.type === `matching-game`);
  const quiz = l.screens.find((s) => s.type === `quiz`)?.questions?.length ?? 0;
  const reflect = l.screens.find((s) => s.type === `reflection`)?.prompts?.length ?? 0;
  console.log(
    `[LESSON-SL-VOYAGER-L12 ${VERSION}] "${l.title}" — ${mags} magazine, matching-game w/ ${matching?.pairs?.length ?? 0} pairs, ${quiz} quiz, ${reflect} reflection`
  );
}
