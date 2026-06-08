// ─────────────────────────────────────────────────────────────────────────────
// FUTURE SKILLS VOYAGER  |  L19 — What Won't Be Automated
// Age band : voyagers (11-12)   Guide: byte (Fox)
// Standards: Coreverse Original — Labor Economics, AI Literacy, Career Strategy
// CALIBRATED: Voyager spec v1.1 (May 2026) — honest about real automation uncertainty
// Interaction format: INVESTIGATION GAME (sort 9 work types into 3 automation-likelihood buckets)
// ─────────────────────────────────────────────────────────────────────────────

const VERSION = "voyager-fs-l19-v1";

const FUTURESKILLS_VOYAGER_L19 = {
  ageBand: `voyagers`,
  subjectId: `future-skills`,
  guide: `byte`,

  lessons: [
    {
      id: `fs-11-12-19`,
      title: `What Won't Be Automated`,
      duration: 35,
      xpReward: 75,
      badge: `automation-analyst`,
      badgeName: `Automation Analyst`,

      screens: [
        {
          id: `l19-welcome`,
          type: `welcome`,
          guideText: `{name}, after spending this band thinking carefully about AI, labor, careers, and the changing world, we get to the practical question: what kinds of work are most and least likely to be automated over the next 10-20 years? Nobody can predict this perfectly, but real researchers have identified patterns that make some work more AI-resistant than others. Today you sort nine specific kinds of work into three buckets: high automation likelihood, partial automation (AI augments but doesn't replace), and low automation likelihood. The skill isn't memorizing which job is which. The skill is the underlying framework that lets you evaluate any job, any time, against what AI actually does well and poorly.`,
          headline: `What Won't Be Automated`,
          subtitle: `Nine work types, three buckets. The framework that lets you evaluate any job against real automation patterns.`,
          visual: `/voyager-assets/future-skills/l19-welcome.webp`,
        },

        {
          id: `l19-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `What "Automation" Actually Means In 2026`,
          paragraphs: [
            `"Will AI take my job?" is the wrong question because it implies an all-or-nothing answer. The real situation is more nuanced. AI is currently affecting different jobs in different ways: some tasks within a job are getting automated while other tasks aren't, some jobs are getting easier (productivity gains) while others are getting harder (entry-level pipeline shifts), and the impact varies by industry, company size, and geographic location. The honest framing is about specific tasks, specific jobs, and specific timescales rather than dramatic blanket predictions.`,
            `What we know with reasonable confidence. AI has produced measurable productivity gains in many knowledge-work tasks since 2022. Erik Brynjolfsson's 2023 study found ~14% productivity gains for customer service workers using AI tools, with larger gains for less experienced workers. Other studies have found similar patterns in software development, writing, and analysis. The productivity effect is real and varies across tasks.`,
            `What's less certain. The long-term trajectory of which specific jobs disappear, which remain, and which change. Predictions from 2023-2024 about mass unemployment by 2025 didn't materialize. Predictions that "AI won't matter" also didn't materialize. The middle ground is genuinely uncertain. Real labor economists like David Autor, Daron Acemoglu, and Erik Brynjolfsson tend to make predictions with significant uncertainty ranges rather than confident specific claims.`,
            `Several patterns recur across automation research. Tasks that are routine, predictable, and well-defined are easier to automate than tasks requiring novel judgment. Tasks that don't require physical embodiment are easier to automate than ones that do. Tasks where being wrong is cheap are easier to automate than where wrong is costly. Tasks that AI can verify against ground truth are easier than tasks where success is hard to measure. These patterns aren't predictions about specific jobs; they're the underlying mechanics that produce specific predictions.`,
          ],
          image: `/voyager-assets/future-skills/l19-s1-mean.webp`,
          imageCaption: `Automation isn't all-or-nothing. Specific tasks, jobs, timescales. Real patterns underneath the headlines.`,
          vocab: [
            {
              word: `task-level automation`,
              definition: `Framing where you ask which specific tasks within a job get automated rather than asking whether the whole job disappears. Used by OpenAI's "GPTs are GPTs" paper (2023) and Anthropic Economic Index. Captures the actual pattern: most jobs have many tasks; some are more automatable than others. The job changes as automatable tasks shift, even if the job title persists.`,
              audioPrompt: `Task-level automation is a framing where you ask which specific tasks within a job get automated rather than asking whether the whole job disappears, {name}. Used by OpenAI's "GPTs are GPTs" research from 2023 and the Anthropic Economic Index. The framing captures the actual pattern: most jobs have many distinct tasks; some are more automatable than others. A doctor does many tasks: examining patients, ordering tests, interpreting results, explaining diagnoses, prescribing treatment, doing paperwork, coordinating with other staff. Some of these are more automatable than others. The job of being a doctor changes as the automatable tasks shift, even if the job title "doctor" persists. Task-level thinking is more accurate than "will doctors be replaced by AI" framing, and it produces better career-planning thinking than asking about whole jobs.`,
            },
            {
              word: `routine tasks`,
              definition: `Work that is predictable, well-defined, and follows clear patterns. Easier to automate than tasks requiring novel judgment. Examples: processing standard forms, answering common customer questions, drafting standard document types, recognizing familiar patterns in data. The share of routine tasks within a job is a key predictor of how much that job changes as AI improves. Jobs heavy in routine tasks are more exposed to automation.`,
              audioPrompt: `Routine tasks are work that is predictable, well-defined, and follows clear patterns, {name}. They're easier to automate than tasks requiring novel judgment. Routine cognitive work includes processing standard forms, answering common customer questions, drafting standard document types, and recognizing familiar patterns in data. Routine physical work includes repetitive manufacturing tasks in structured environments. The share of routine tasks within a job is one of the key predictors of how much that job changes as AI improves. Jobs that are heavy in routine tasks are more exposed to automation; the automatable parts shift away from human workers, either leaving fewer tasks for humans or requiring humans to move up to the judgment-intensive parts. Erik Brynjolfsson's research has shown measurable productivity gains as routine knowledge-work tasks get AI assistance. The honest implication for career planning: jobs with a high proportion of routine tasks are more likely to change significantly; jobs where routine tasks are a small fraction are less exposed.`,
            },
            {
              word: `Erik Brynjolfsson`,
              definition: `Economist at Stanford who has studied AI's effects on productivity and labor markets. His 2023 study found approximately 14% productivity gains for customer service workers using AI tools, with larger gains for less experienced workers. Works alongside David Autor and Daron Acemoglu on understanding how AI and automation reshape work. Represents the serious empirical research on automation as opposed to confident popular predictions.`,
              audioPrompt: `Erik Brynjolfsson is an economist at Stanford who has studied AI's effects on productivity and labor markets, {name}. His 2023 study of customer service workers using AI tools found approximately 14% productivity gains, with larger gains for less experienced workers. This research illustrates how AI affects work in practice: not through dramatic job elimination but through measurable productivity increases that shift what tasks humans do and which workers benefit most. Brynjolfsson works alongside David Autor and Daron Acemoglu at the intersection of technology economics and labor economics. Together they represent the serious empirical research tradition on automation: making predictions with significant uncertainty ranges rather than confident specific claims, following the data carefully, and acknowledging what isn't yet known. Their work is part of the honest intellectual backdrop for understanding how AI is affecting work, as opposed to the dramatic confident predictions that circulate in viral content but lack rigorous empirical grounding.`,
            },
          ],
        },

        {
          id: `l19-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Five Patterns That Predict Automation Resistance`,
          paragraphs: [
            `Across real research on AI and automation, several patterns predict which work resists automation longest. Knowing these patterns is more useful than memorizing specific job predictions.`,
            `First: physical embodiment in unstructured environments. AI can drive cars in well-mapped highway conditions but struggles with novel residential situations. Robots can perform repetitive factory tasks but struggle with unscripted physical work. Plumbing in arbitrary houses, eldercare involving physical assistance, skilled trades in varied environments — these tasks combine physical action with the ability to handle unexpected situations. Currently very hard for AI/robotics, likely to remain so for a long time.`,
            `Second: real human relationships over time. Some work requires genuine ongoing relationships with specific people. Therapy that actually helps requires the patient feeling truly understood by a human. Coaching that produces real change involves trust built over time. Caregiving that genuinely helps requires emotional presence AI doesn't have. These tasks can be partially supported by AI (scheduling, notes, suggested questions) but the core relational work resists automation in ways that aren't just about current technology limits.`,
            `Third: novel ethical judgment in specific contexts. Medical decisions involving end-of-life care. Legal cases requiring judgment about specific human circumstances. Educational decisions about individual students' development. Leadership decisions affecting many people. These tasks require integrating values, context, and accountability in ways that involve real moral responsibility. AI can suggest options; the human exercise of judgment in specific situations remains distinct.`,
            `Fourth: full-context integration with genuine accountability. Some work requires holding together many threads simultaneously and being accountable for the outcome. Surgery integrates anatomical knowledge, real-time judgment, manual skill, and consequence. Crisis management integrates information from many sources with rapid decision-making. Teaching specific children integrates curriculum, relationships, and adaptation. The integration plus accountability resists automation in ways narrow task replacement doesn't.`,
            `Fifth: meaningful presence that has to be human. Some experiences depend on knowing a human did them. A live concert isn't the same as recorded music even if the sound is identical. Hand-made craft has meaning the same machine-made object doesn't. Personal letters from a friend matter in ways AI-generated versions don't. These distinctions might erode over time as people get used to AI; they might also persist or strengthen as AI becomes more pervasive. The category is real even if the specific examples shift.`,
          ],
          image: `/voyager-assets/future-skills/l19-s2-patterns.webp`,
          imageCaption: `Five automation-resistance patterns: physical embodiment, real relationships, ethical judgment, full-context integration, meaningful presence.`,
          vocab: [
            {
              word: `Moravec's paradox`,
              definition: `Observation by AI researcher Hans Moravec (1980s): tasks that seem mentally hard for humans (chess, math, logical reasoning) are often easier for AI than tasks that seem mentally easy (walking on uneven ground, recognizing faces, manipulating objects). What's "hard" for AI is roughly opposite to what's "hard" for humans. Explains why physical embodiment and intuitive judgment resist automation longer than abstract reasoning.`,
              audioPrompt: `Moravec's paradox is an observation by AI researcher Hans Moravec in the 1980s, {name}. Tasks that seem mentally hard for humans (chess, math, logical reasoning, expert-level analysis) are often easier for AI than tasks that seem mentally easy (walking on uneven ground, recognizing faces, manipulating objects in novel ways). What's "hard" for AI is roughly opposite to what's "hard" for humans. The paradox emerged from observation that AI achieved superhuman performance in chess decades before robots could reliably navigate a typical living room. The reason: abstract reasoning involves explicit rules that can be programmed; embodied perception and action involve millions of years of evolutionary learning that has to be reconstructed somehow. Knowing Moravec's paradox explains why physical embodiment and intuitive judgment resist automation longer than abstract reasoning. AI can outperform doctors at certain diagnostic pattern recognition while still being unable to do basic physical examination tasks.`,
            },
            {
              word: `physical embodiment`,
              definition: `Work requiring physical presence and action in the world, especially in unstructured or unpredictable environments. Plumbing in arbitrary houses, eldercare involving physical assistance, skilled trades in varied environments — these combine physical action with handling unexpected situations. Currently very hard for AI and robotics to replicate. Likely to remain more automation-resistant than knowledge work for an extended period. Moravec's paradox explains why.`,
              audioPrompt: `Physical embodiment refers to work that requires physical presence and action in the world, especially in unstructured or unpredictable environments, {name}. It's one of the five automation-resistance patterns. Plumbing in arbitrary residential houses involves diagnosing problems in novel configurations, physically maneuvering in tight spaces, and adapting to whatever specific situation the house presents. Eldercare involving physical assistance requires adapting to each person's specific needs and responding to unpredictable situations. Skilled trades in varied environments combine physical skill with the ability to handle unexpected situations that don't match any standard template. These tasks are currently very hard for AI and robotics to replicate. AI can drive cars in well-mapped highway conditions but struggles with novel residential situations. Robots can perform repetitive factory tasks in structured environments but struggle with unscripted physical work in the varied conditions found in homes and natural environments. Moravec's paradox explains the underlying reason: what seems easy for humans, navigating a cluttered room, is actually the result of millions of years of evolutionary learning that's hard to reconstruct artificially. Physical embodiment work is likely to remain more automation-resistant than knowledge work for a longer period.`,
            },
            {
              word: `relational work`,
              definition: `Work requiring genuine ongoing relationships with specific people over time. Therapy that actually helps, coaching that produces change, caregiving that genuinely supports — these require trust and emotional presence that AI doesn't provide in the same way. Core relational work resists automation in ways that aren't just about current technology limits. AI can support relational work (scheduling, notes) but can't substitute for it in full-context relational roles.`,
              audioPrompt: `Relational work is work requiring genuine ongoing relationships with specific people over time, {name}. It's one of the five automation-resistance patterns. Therapy that actually helps requires the patient feeling truly understood by a human who knows their history, their patterns, and their specific situation. Coaching that produces real change involves trust built over months and years. Caregiving that genuinely helps requires emotional presence and adaptation to a specific person's changing needs. These tasks can be partially supported by AI: scheduling, summarizing session notes, suggesting questions, providing information between sessions. But the core relational work resists automation in ways that aren't just about current technology limits. Even if AI became more emotionally convincing, there would remain a real distinction between a genuine ongoing relationship with a human who cares and an AI simulation of that relationship. Some of this distinction might erode over time. Some might persist or strengthen as people more consciously value human connection as AI becomes more pervasive. For career planning, relational work roles are among the more automation-resistant, particularly roles where the relationship is the primary product rather than just part of the delivery.`,
            },
          ],
        },

        {
          id: `l19-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `What AI Does Well (And Therefore Automates)`,
          paragraphs: [
            `The other side of the question: what does AI do well right now, and what's the trajectory for what it'll do in the next decade? Knowing this is the other half of the automation-resistance framework.`,
            `AI currently does well at pattern recognition where training data is abundant. Detecting common cancers in medical imaging. Identifying defects in manufacturing visual inspection. Recognizing speech, faces, common objects. Translation between major languages. These tasks all involve patterns the AI can learn from many examples and apply to new cases. Specific tasks of this type within many jobs are being automated.`,
            `AI does well at routine cognitive work with clear patterns. Drafting standard documents, summarizing long materials, basic data analysis, routine coding of common patterns, customer service for common questions. These tasks involve recombination of existing patterns rather than novel reasoning. Many entry-level knowledge-work positions involve significant amounts of this kind of work; the entry-level pipeline shifts as these tasks become more automatable.`,
            `AI is improving rapidly at scaled personalization. Producing many variants of marketing copy for different audiences. Generating personalized educational content. Adapting communication for different recipients. The personalization work that used to require human time can now be done at scale by AI for many use cases.`,
            `AI is uncertain at: complex multi-step reasoning involving genuine novelty (still developing, with mixed results), tasks requiring physical embodiment in unstructured environments (slow progress), tasks requiring real ongoing relationships, tasks where being wrong is costly and verification is hard. These remain uncertain partly because the technology isn't there yet and partly because the deployment situations are more complex than they look.`,
            `Combining what AI does well with the automation-resistance patterns from section 2 produces the framework for evaluating any specific job: which tasks does it involve, how do those tasks map to AI capabilities, and what's the integration plus accountability the human brings? Jobs with many automatable tasks change significantly. Jobs with mostly automation-resistant patterns change less. Most jobs change in both directions: some tasks automate, some tasks become more central.`,
          ],
          image: `/voyager-assets/future-skills/l19-s3-ai-does.webp`,
          imageCaption: `AI does well: pattern recognition with training data, routine cognitive work, scaled personalization. Less well: novel reasoning, embodiment, relationships, costly-mistake domains.`,
          vocab: [
            {
              word: `handles well`,
              definition: `Current pattern in AI capability: pattern recognition with abundant training data, routine cognitive work with clear structure, scaled personalization of standard outputs, translation and summarization, drafting of common document types. These tasks are increasingly being automated where they appear in jobs. The list shifts as AI improves; the meta-pattern (some kinds of tasks are more automatable than others) persists.`,
              audioPrompt: `Tasks AI handles well in 2026 form a recognizable pattern, {name}. Pattern recognition where training data is abundant: detecting common cancers in imaging, identifying defects in manufacturing inspection, recognizing speech, faces, common objects. Routine cognitive work with clear structure: drafting standard documents, summarizing materials, basic data analysis, routine coding of common patterns, customer service for common questions. Scaled personalization: producing many variants for different audiences, adapting communication for different recipients. Translation and summarization between major languages and styles. These tasks are increasingly being automated where they appear within jobs. The specific list shifts as AI improves; tasks that are uncertain today may become routine in 5 years. The meta-pattern that some kinds of tasks are more automatable than others persists across the changes.`,
            },
            {
              word: `entry-level pipeline`,
              definition: `The sequence of early-career roles through which less experienced workers develop skills and move toward more senior positions. Currently shifting as AI automates many routine cognitive tasks that entry-level knowledge workers used to do. The concern: if AI handles the entry-level tasks, how do new workers develop the underlying skills and experience? This is one of the genuine structural challenges of AI in the workplace.`,
              audioPrompt: `The entry-level pipeline is the sequence of early-career roles through which less experienced workers traditionally develop skills and move toward more senior positions, {name}. A junior lawyer drafts standard contracts and learns legal writing. A junior consultant does data analysis and learns to structure business problems. A junior software engineer writes routine code and learns development practices. These entry-level tasks are exactly the kind of routine cognitive work that AI now handles well. As AI automates them, the entry-level pipeline shifts. Fewer entry-level positions are needed for the same amount of work. New workers have fewer opportunities to do the tasks that used to build foundational skills. This creates a genuine structural challenge: if AI handles the entry-level work, how do new workers develop the skills and judgment to eventually do the senior work that still requires humans? This isn't a solved problem. It's one of the real structural issues that AI creates in the workplace beyond simple job-count questions. Entry-level pipeline disruption is one reason some industries are rethinking how they develop junior talent in the AI era.`,
            },
            {
              word: `scaled personalization`,
              definition: `Producing many variants of communication or content tailored to different audiences or recipients at a scale that previously required significant human time. AI handles this well: generating personalized marketing copy for different segments, adapting educational content, producing communication variants. A task type shifting from human-intensive to AI-assisted in many marketing, education, and communication roles.`,
              audioPrompt: `Scaled personalization is producing many variants of communication or content tailored to different audiences or recipients at a scale that previously required significant human time, {name}. AI handles this well. Generating personalized marketing copy for fifty different audience segments that previously required a human to write each variant. Producing educational content adapted to different student profiles. Creating communication that adjusts tone, level of detail, and emphasis for different recipients. The personalization work that used to require human time per variant can now be done at scale by AI for many standard use cases. This is shifting the nature of some marketing, education, and communication roles. The work that remains distinctly human in these fields is the judgment about what the strategy should be, what truly resonates beyond pattern matching, and how to handle situations that fall outside the standard patterns. The routine personalization component of these roles is increasingly AI-assisted, while the judgment and strategy components remain more distinctly human. Recognizing scaled personalization as a current AI capability helps you understand which parts of communication and marketing roles are changing fastest.`,
            },
          ],
        },

        {
          id: `l19-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `What This Means For Career Planning (Practically)`,
          paragraphs: [
            `The framework from sections 2 and 3 produces several practical implications for thinking about your future career, connecting back to the work in L02 and L18.`,
            `First: building toward integrated skills rather than narrow expertise increases resilience. A great teacher integrates pedagogy, relationship, subject knowledge, social understanding, and adaptation. A great doctor integrates medical knowledge, patient relationship, examination, judgment. A great manager integrates strategy, communication, relationship, adaptation. These integration roles are more resistant to automation than narrow specialist roles where AI can replicate the specific expertise.`,
            `Second: physical-embodiment fields are likely to remain more automation-resistant for longer than knowledge-work fields. Skilled trades, healthcare with physical examination, eldercare, certain forms of teaching that involve physical demonstration, hands-on craft work. The "everyone should learn to code" advice from the 2010s was good advice at the time but may be partially reversing; the skills-of-hand fields that previous generations devalued may be more durable than narrow coding work over the next decade.`,
            `Third: relational work compounds across a lifetime in ways AI struggles to replicate. People who become genuinely trusted across many relationships have a kind of capital AI can't substitute for directly. This affects both what kinds of careers might be more durable and how to invest in building relationships throughout your working life.`,
            `Fourth: the meta-skill of adapting to AI changes is itself valuable. Workers who can effectively use AI tools, distinguish where they help from where they hurt, and learn new tools as they emerge are more durable than workers who either reject AI or rely on it without judgment. This is the L06 material applied at career level.`,
            `Fifth: predicting specific jobs is unreliable; building durable capabilities is reliable. The specific jobs that exist in 2040 are largely unpredictable from 2026. The capabilities you build (judgment under uncertainty, integrated skills, ability to learn quickly, real relationships, physical embodiment in your chosen domain) are the durable foundation that lets you take whatever roles exist in the future. Career planning under uncertainty means investing in capabilities rather than specific roles.`,
          ],
          image: `/voyager-assets/future-skills/l19-s4-career.webp`,
          imageCaption: `Practical implications: integrated skills, physical fields, relational work, AI-adaptation meta-skill, capabilities over specific roles.`,
          vocab: [
            {
              word: `role thinking`,
              definition: `Distinction in career planning. Role thinking: choose a specific job (doctor, lawyer, engineer) and prepare for it. Capability thinking: build durable capabilities (judgment, integrated skills, real relationships, adaptability) that let you take whatever roles exist in the future. Role thinking works when the future looks like the past; capability thinking works better when the future is uncertain.`,
              audioPrompt: `Capability versus role thinking is a useful distinction in career planning, {name}. Role thinking: choose a specific job like doctor, lawyer, or software engineer and prepare specifically for that role. Capability thinking: build durable capabilities (judgment under uncertainty, integrated skills across multiple domains, real relationships, adaptability, ability to learn quickly) that let you take whatever roles exist in the future. Role thinking works well when the future looks like the past, when specific occupations remain stable, and when paths to those occupations are clear. Capability thinking works better when the future is uncertain, when occupations are shifting, and when you don't yet know exactly what you'll be doing in 10-20 years. For your generation, capability thinking probably matters more than role thinking because the specific roles that will exist when you're 30 are genuinely hard to predict.`,
            },
            {
              word: `AI-adaptation meta-skill`,
              definition: `The ability to effectively use AI tools, distinguish where they help from where they hurt, and learn new tools as they emerge. Described as a meta-skill because it's a skill about using other capabilities. Workers who have this skill are more durable than workers who either reject AI entirely or rely on it without judgment. Connects to the L06 material on working with AI as a tool applied at career level.`,
              audioPrompt: `The AI-adaptation meta-skill is the ability to effectively use AI tools, distinguish where they help from where they hurt, and learn new tools as they emerge, {name}. It's a meta-skill because it's a skill about using other skills and capabilities. Workers who have it can extend their productivity with AI tools and maintain that extension as the tools change. Workers who reject AI entirely miss productivity gains that competitors capture. Workers who rely on AI without judgment produce outputs they can't verify or improve. The AI-adaptation meta-skill sits in the middle: strategic use with real judgment about quality. This connects to the lesson six material on working with AI as a tool, applied now at career level rather than just task level. Having developed the habit of evaluating AI outputs, knowing the limitations, maintaining your own capabilities in the domain, and using AI specifically where it extends rather than substitutes for your judgment — that habit is the AI-adaptation meta-skill. It's durable because it applies to any AI tool as the specific tools evolve over decades.`,
            },
            {
              word: `capability thinking`,
              definition: `Career planning approach that focuses on building durable capabilities (judgment under uncertainty, integrated skills, real relationships, adaptability) rather than preparing for specific job titles. Contrasts with role thinking, which prepares for specific occupations. Capability thinking is more robust when future occupations are unpredictable. The specific jobs that exist in 2040 are largely unpredictable from 2026; the capabilities you build are the foundation for whatever those jobs require.`,
              audioPrompt: `Capability thinking is a career planning approach that focuses on building durable capabilities rather than preparing for specific job titles, {name}. The capabilities include judgment under uncertainty, integrated skills across multiple domains, real relationships, adaptability, and the ability to learn quickly in new areas. Capability thinking contrasts with role thinking, which prepares for specific occupations: becoming a doctor, a software engineer, a lawyer. Role thinking works well when the future resembles the past and when specific occupations remain stable. Capability thinking works better when the future is uncertain and when occupations are shifting. The specific jobs that exist in 2040 are largely unpredictable from 2026. Confident predictions about which specific jobs will be in demand over the next twenty years are unreliable. What's more reliable: the capabilities you build now will be the foundation for whatever those jobs require. A person with strong judgment under uncertainty, integrated skills, the ability to build real relationships, and the ability to learn quickly can adapt to many different specific roles as they emerge. Building capabilities is investing in the foundation; role thinking is betting on a specific superstructure on top of it.`,
            },
          ],
        },

        {
          id: `l19-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Before You Sort The Work Types`,
          paragraphs: [
            `In the investigation that follows, you'll sort nine work types into three buckets: high automation likelihood (likely substantially automated in next 10-20 years), partial automation (AI augments but doesn't replace), and low automation likelihood (likely remains human-dominant).`,
            `Some sorting strategies. First: identify the dominant pattern of the work. Is it primarily pattern recognition with abundant training data (high automation)? Primarily physical embodiment in unstructured environments (low automation)? Primarily real relational work over time (low automation)? Many work types involve multiple patterns; pick the one most dominant.`,
            `Second: notice that some predictions involve real uncertainty. Surgery might end up partially automated (some procedures) or low automation (most procedures) depending on how the technology develops. Reasonable analysts could place borderline cases differently. The point isn't getting every item exactly right; it's developing the framework for thinking about any work this way.`,
            `Third: the predictions are over a 10-20 year horizon. Some work that's currently human-dominant might be partially automated in that window. Some work that's currently being automated might plateau as it hits the limits of what AI does well. Predictions over longer horizons (30-50 years) are more uncertain still.`,
            `One last framing. The point of this exercise isn't to memorize which jobs are safe and which aren't. The point is to develop the framework that lets you evaluate any specific job, any specific task, against the patterns. As AI continues to develop over your lifetime, the specific predictions will shift. The framework lets you keep updating your thinking with each new development.`,
          ],
          image: `/voyager-assets/future-skills/l19-s5-before.webp`,
          imageCaption: `Three buckets, 9 work types. The framework matters more than the specific predictions.`,
          vocab: [
            {
              word: `automation horizon`,
              definition: `Timescale over which automation predictions are made. Predictions over 5-10 years are more reliable than over 30-50 years because the technology trajectory is more uncertain over longer horizons. Most serious labor economics predictions specify horizons explicitly. Pop predictions often don't, which makes them harder to evaluate. Specifying the horizon is part of calibrated thinking about automation.`,
              audioPrompt: `Automation horizon is the timescale over which automation predictions are made, {name}. Predictions over 5-10 years are more reliable than predictions over 30-50 years because the technology trajectory is more uncertain over longer horizons. Most serious labor economics predictions specify the horizon explicitly. "X percent of these tasks could be automated within 10 years" is a different claim from "X percent of these tasks could be automated eventually." Pop predictions often don't specify horizons, which makes them harder to evaluate. Specifying the horizon is part of calibrated thinking about automation. For the investigation in this lesson, we're thinking about a 10-to-20-year horizon. Some predictions confident on that timescale would be much less confident on a 50-year timescale; that's the right calibration.`,
            },
            {
              word: `partial automation`,
              definition: `State where AI significantly augments a type of work without replacing the human doing it. AI suggests options and supports decisions while the human performs the consequential action and is accountable for outcomes. Surgery is a partial-automation example: AI can read imaging and suggest procedures, but the surgeon performs the operation and bears responsibility. Most high-stakes professional work is trending toward partial automation rather than full replacement.`,
              audioPrompt: `Partial automation is the state where AI significantly augments a type of work without replacing the human doing it, {name}. AI suggests options, supports decisions, and handles some tasks while the human performs the consequential action and is accountable for outcomes. Surgery is a clear partial-automation example: AI can read imaging more accurately than most humans for specific diagnostic tasks, can suggest surgical approaches, and can assist with navigation during procedures. But the surgeon performs the operation, integrates many information streams simultaneously, makes real-time adjustments when unexpected situations arise, and bears responsibility for outcomes. The role changes but the human remains essential. Many high-stakes professional roles are trending toward partial automation: doctors, lawyers, architects, teachers, managers. AI handles more of the routine components while the human exercises judgment for the complex and consequential parts. Understanding partial automation is important for career planning because it describes many of the most durable professional roles: ones where AI makes you more capable rather than replacing you entirely. Building toward partial-automation roles, where your human judgment is amplified by AI tools, is a realistic career strategy.`,
            },
            {
              word: `uncertain predictions`,
              definition: `Feature of honest automation analysis: serious labor economists make predictions with significant uncertainty ranges rather than confident specific claims. The contrast with viral content is sharp: pop predictions use dramatic confidence to drive engagement; real research acknowledges what isn't known. Recognizing which predictions carry genuine uncertainty protects against acting on overconfident automation forecasts.`,
              audioPrompt: `Uncertain predictions are a feature of honest automation analysis, {name}. Serious labor economists like David Autor, Daron Acemoglu, and Erik Brynjolfsson make predictions with significant uncertainty ranges rather than confident specific claims. They say things like "under certain assumptions, X percent of tasks could be automated in this timeframe, with considerable uncertainty" rather than "these EXACT jobs will be automated in 5 years." The contrast with viral career content is sharp. Pop predictions use dramatic confidence to drive engagement and sales. "These 5 jobs will be obsolete in 5 years" is a more engaging headline than "labor market patterns suggest these task categories face growing automation pressure, with timing and extent dependent on technology trajectories that are genuinely uncertain." The dramatic version feels more useful because it's specific. It's actually less useful because the specificity is false confidence. Recognizing which predictions carry genuine uncertainty protects against making major career decisions based on overconfident automation forecasts. The point of this lesson's investigation is to practice making calibrated assessments, distinguishing high-confidence from uncertain cases, rather than making uniformly confident predictions. That calibration skill serves you better across decades than any specific prediction.`,
            },
          ],
        },

        // ───── INVESTIGATION GAME ─────────────────────────────────────────────
        {
          id: `l19-investigation`,
          type: `investigation`,
          headline: `Sort the work types by automation likelihood (10-20 year horizon)`,
          intro: `{name}, nine specific work types. Sort each into the bucket that best describes its automation likelihood over the next 10-20 years. Some are borderline; pick the bucket that fits the dominant pattern.`,
          buckets: [
            {
              id: `high-automation`,
              label: `High automation likelihood (likely substantially automated in next 10-20 years)`,
            },
            {
              id: `partial-automation`,
              label: `Partial automation (AI augments significantly but doesn't replace the human)`,
            },
            {
              id: `low-automation`,
              label: `Low automation likelihood (likely remains human-dominant; integration, embodiment, or relational work)`,
            },
          ],
          items: [
            {
              id: `item-1`,
              label: `Tax preparation for straightforward individual returns (W-2 income, standard deductions, no special situations).`,
              correctBucket: `high-automation`,
            },
            {
              id: `item-2`,
              label: `Plumbing repair in residential homes, including diagnosing problems in older houses with non-standard configurations.`,
              correctBucket: `low-automation`,
            },
            {
              id: `item-3`,
              label: `Drafting standard legal contracts (employment agreements, basic NDAs, standard purchase agreements).`,
              correctBucket: `high-automation`,
            },
            {
              id: `item-4`,
              label: `Therapy with patients dealing with grief, trauma, or relationship issues where genuine trust over time matters.`,
              correctBucket: `low-automation`,
            },
            {
              id: `item-5`,
              label: `Reading X-rays in standard diagnostic cases (looking for common patterns of fractures, tumors, infections).`,
              correctBucket: `high-automation`,
            },
            {
              id: `item-6`,
              label: `Surgery, where AI suggests options and supports decisions but the surgeon performs the procedure and is accountable for outcomes.`,
              correctBucket: `partial-automation`,
            },
            {
              id: `item-7`,
              label: `Eldercare involving daily physical assistance, emotional companionship over months and years, and adaptation to specific individuals' needs.`,
              correctBucket: `low-automation`,
            },
            {
              id: `item-8`,
              label: `Teaching elementary school students where the work integrates curriculum, relationship with specific students, classroom management, family communication, and individual adaptation.`,
              correctBucket: `low-automation`,
            },
            {
              id: `item-9`,
              label: `Drafting marketing copy for advertising campaigns, with AI generating initial versions and a human strategist directing and refining.`,
              correctBucket: `partial-automation`,
            },
          ],
          reflectionPrompt: `Which item was hardest to sort? What does that reveal about real uncertainty in automation predictions?`,
        },

        {
          id: `l19-quiz`,
          type: `quiz`,
          headline: `Check your understanding`,
          questions: [
            {
              id: `q1`,
              type: `multiple-choice`,
              question: `Why is "will AI take my job?" the wrong question?`,
              options: [
                `It's depressing`,
                `Implies all-or-nothing answer when reality is more nuanced: some tasks within a job get automated while others don't, jobs change rather than disappearing, productivity gains vs entry-level pipeline shifts vary, impact varies by industry/company/location; honest framing is task-specific, time-specific, situation-specific`,
                `Wrong words`,
                `AI is nice`,
              ],
              correctIndex: 1,
              explanation: `Real labor economics treats automation as task-level rather than whole-job level. Most jobs have many tasks; some are more automatable than others. The job changes as automatable tasks shift, even if the job title persists.`,
            },
            {
              id: `q2`,
              type: `multiple-choice`,
              question: `What is "Moravec's paradox"?`,
              options: [
                `Time paradox`,
                `Observation by AI researcher Hans Moravec (1980s): tasks that seem mentally hard for humans (chess, math, abstract reasoning) are often easier for AI than tasks that seem mentally easy (walking on uneven ground, recognizing faces, manipulating objects); explains why physical embodiment and intuitive judgment resist automation longer than abstract reasoning`,
                `Robot logic`,
                `AI mistake`,
              ],
              correctIndex: 1,
              explanation: `AI achieved superhuman chess performance decades before robots could reliably navigate typical living rooms. Abstract reasoning involves explicit rules that can be programmed; embodied perception and action require reconstructing millions of years of evolutionary learning. Knowing this paradox explains many automation patterns.`,
            },
            {
              id: `q3`,
              type: `multiple-choice`,
              question: `What are the five patterns that predict automation resistance?`,
              options: [
                `Random patterns`,
                `Physical embodiment in unstructured environments; real human relationships over time; novel ethical judgment in specific contexts; full-context integration with genuine accountability; meaningful presence that has to be human`,
                `Just intelligence`,
                `Just creativity`,
              ],
              correctIndex: 1,
              explanation: `Knowing these patterns lets you evaluate any specific work type against the patterns rather than memorizing specific predictions. The patterns persist even as specific automation predictions shift over time.`,
            },
            {
              id: `q4`,
              type: `multiple-choice`,
              question: `What does AI currently do well?`,
              options: [
                `Everything`,
                `Pattern recognition where training data is abundant; routine cognitive work with clear structure (drafting, summarizing, basic data analysis); scaled personalization of standard outputs; translation; recognition tasks (faces, speech, common objects); routine coding of common patterns`,
                `Just art`,
                `Random tasks`,
              ],
              correctIndex: 1,
              explanation: `These tasks are increasingly being automated where they appear within jobs. The specific list shifts as AI improves; tasks that are uncertain today may become routine in 5 years. The meta-pattern persists across changes.`,
            },
            {
              id: `q5`,
              type: `multiple-choice`,
              question: `Why does physical embodiment in unstructured environments resist automation?`,
              options: [
                `Random difficulty`,
                `Combines physical action with ability to handle unexpected situations; AI can drive cars on well-mapped highways but struggles with novel residential conditions; robots can do repetitive factory tasks but not unscripted work; Moravec's paradox explains why this category is harder for AI than abstract reasoning`,
                `Physical bodies are sacred`,
                `Robots are expensive`,
              ],
              correctIndex: 1,
              explanation: `Plumbing in arbitrary houses, skilled trades in varied environments, eldercare involving physical assistance — these tasks combine physical action with unexpected-situation handling. Currently very hard for AI/robotics; likely to remain so for a long time.`,
            },
            {
              id: `q6`,
              type: `multiple-choice`,
              question: `What is "task-level automation"?`,
              options: [
                `Task lists`,
                `Framing where you ask which specific tasks within a job get automated rather than asking whether the whole job disappears; used by OpenAI's "GPTs are GPTs" paper (2023) and Anthropic Economic Index; captures actual pattern that most jobs have many tasks with different automatability`,
                `Daily automation`,
                `Random tasks`,
              ],
              correctIndex: 1,
              explanation: `A doctor does many tasks: examining patients, ordering tests, interpreting results, explaining diagnoses, prescribing, paperwork, coordinating. Some are more automatable than others. Task-level thinking is more accurate than "will doctors be replaced" framing.`,
            },
            {
              id: `q7`,
              type: `multiple-choice`,
              question: `What is "capability vs role thinking"?`,
              options: [
                `Career titles`,
                `Distinction in career planning. Role thinking: choose a specific job and prepare for it. Capability thinking: build durable capabilities (judgment, integrated skills, relationships, adaptability) that let you take whatever roles exist in future. Role thinking works when future looks like past; capability thinking better when future uncertain`,
                `Job hunting`,
                `Resume strategy`,
              ],
              correctIndex: 1,
              explanation: `For your generation, capability thinking probably matters more than role thinking because the specific roles that will exist when you're 30 are genuinely hard to predict. Building durable capabilities lets you adapt to whatever roles emerge.`,
            },
            {
              id: `q8`,
              type: `multiple-choice`,
              question: `What is "automation horizon"?`,
              options: [
                `Distance to AI`,
                `Timescale over which automation predictions are made; predictions over 5-10 years are more reliable than over 30-50 years because technology trajectory is more uncertain over longer horizons; serious predictions specify horizons explicitly; pop predictions often don't, making them harder to evaluate`,
                `When AI arrives`,
                `Future limits`,
              ],
              correctIndex: 1,
              explanation: `Specifying the horizon is part of calibrated thinking about automation. "X tasks could be automated within 10 years" is different from "X tasks could be automated eventually." For this lesson, we're thinking 10-20 year horizon; the same predictions on 50-year horizon would be much less confident.`,
            },
            {
              id: `q9`,
              type: `true-false`,
              question: `True or false: The framework in this lesson lets you predict exactly which jobs will exist in 20 years.`,
              correctAnswer: false,
              explanation: `False. Nobody can predict exactly which jobs will exist in 20 years; the technology trajectory is too uncertain. The framework lets you evaluate any specific job, any specific task, against the underlying patterns. The framework persists even as specific predictions shift. That's why it's useful: it gives you a way to update your thinking as evidence accumulates.`,
            },
            {
              id: `q10`,
              type: `inference`,
              question: `Your friend says "I should become an X-ray technician because everyone needs medical care." Based on this lesson, what should you point out?`,
              options: [
                `"Great choice"`,
                `"X-ray reading in standard diagnostic cases (looking for common patterns of fractures, tumors, infections) is exactly the kind of pattern-recognition task AI does well. Multiple research papers have shown AI can match or exceed human radiologists on standard cases. The 'X-ray technician' role specifically is likely to be substantially automated or significantly restructured in the next 10-20 years. Medical care is broad and important, but you'd want to look at which specific roles within healthcare are more automation-resistant — physical examination, complex case integration, patient relationships, surgery, eldercare with physical assistance. Capability thinking (what durable healthcare-related capabilities matter?) is more useful than role thinking (which specific job title?) for your generation."`,
                `"Don't enter healthcare"`,
                `"Become a robot"`,
              ],
              correctIndex: 1,
              explanation: `Real applied automation literacy. Don't dismiss the friend's interest in healthcare; identify that the specific role choice is exactly the kind of task AI handles well. Suggest capability thinking and direct toward more automation-resistant healthcare roles. This is the framework producing actionable career advice.`,
            },
          ],
        },

        {
          id: `l19-reflection`,
          type: `reflection`,
          headline: `Sit with this`,
          intro: `Pick the prompt that pulls at you most. Your answer is saved.`,
          prompts: [
            { id: `reflect-cognitive`, category: `Cognitive`, prompt: `Before this lesson, did you have an explicit framework for thinking about automation? Has anything shifted?` },
            { id: `reflect-meta`, category: `Metacognitive`, prompt: `Which of the five automation-resistance patterns most aligns with skills you naturally have or want to develop?` },
            { id: `reflect-identity`, category: `Identity`, prompt: `If you build career capabilities that integrate multiple human strengths, what does that change about your durability across decades of AI development?` },
            { id: `reflect-application`, category: `Application`, prompt: `Pick three specific careers you've considered. Apply the five patterns to each. Which is most automation-resistant? Most automation-vulnerable?` },
            { id: `reflect-critical`, category: `Critical`, prompt: `Are there work types the framework doesn't capture well? What about purely creative work? What about emergent jobs that don't exist yet?` },
            { id: `reflect-personal`, category: `Personal investigation`, prompt: `Pick one specific job in your community (a teacher, a plumber, a doctor, a manager). Apply the framework. Which tasks within that job are automating, which aren't?` },
          ],
        },

        {
          id: `l19-real-world`,
          type: `real-world`,
          headline: `Take it into your life`,
          guideContext: `Automation literacy shapes how you'll think about every career choice for decades. Two paths.`,
          familyActivity: {
            title: `The Family Automation Audit`,
            duration: `40 minutes`,
            description: `Share the five patterns and three buckets. Then ask each working adult to analyze their own job: which specific tasks are getting automated, which aren't, and what they're doing about it? Most adults will surface real patterns from their own work that match the framework. The conversation often produces real insight about how families should think about careers, education investments, and skill development for everyone.`,
          },
          projectOption: {
            title: `Build Your Personal Automation Map, 3 weeks (optional)`,
            duration: `3 weeks, ~30 minutes per session`,
            description: `Pick 5-10 careers you're seriously considering. For each, apply the five automation-resistance patterns. Identify which specific tasks within each career are likely automated, partially automated, or low-automation over the next 10-20 years. Write a 2,000-word analysis comparing them. Use real labor economics sources (Bureau of Labor Statistics, Anthropic Economic Index, OpenAI's "GPTs are GPTs" paper). Real applied automation literacy that few teens and most adults haven't done.`,
            offerToParent: `Parent: opt your kid into this project. Building a personal automation map at 12 is genuinely transformative for how they'll think about career choices over the next decade.`,
          },
          identityQuestion: `If you become someone who can evaluate any work against real automation patterns rather than reacting to viral predictions, what does that mean for the career and education choices you can make over the next 50 years?`,
        },

        {
          id: `l19-identity-hook`,
          type: `identity-hook`,
          headline: `Who is this lesson making you?`,
          prompt: `One sentence. No wrong answer.`,
          placeholder: `Someone who...`,
          examples: [
            `Someone who thinks task-by-task instead of whole-job-by-whole-job.`,
            `A person who builds capabilities rather than betting on specific predicted roles.`,
            `Someone who can evaluate any work against the five automation-resistance patterns.`,
          ],
          saveKey: `identity_responses_fs_11_12_19`,
        },

        {
          id: `l19-celebration`,
          type: `celebration`,
          guideText: `{name}. Nineteenth Future Skills lesson done. You now have a working framework for evaluating any kind of work against automation likelihood. You know the five patterns (physical embodiment, real relationships, ethical judgment, full-context integration, meaningful human presence), what AI does well (pattern recognition, routine cognitive work, scaled personalization), task-level automation, Moravec's paradox, and capability-vs-role thinking. You can apply this framework to your own career choices, your family's careers, anyone's. Most adults react to viral predictions; you have the framework underneath them. Next time is the capstone: you build the argument for your own future skills portfolio. The synthesis of everything we've done. Last lesson. Let's go. — Byte`,
          badge: `automation-analyst`,
          badgeName: `Automation Analyst`,
          xpEarned: 75,
          competencies: [
            `Articulates five automation-resistance patterns`,
            `Knows what AI does well vs poorly currently`,
            `Understands task-level automation framework`,
            `Knows Moravec's paradox`,
            `Applies capability-vs-role thinking to career decisions`,
          ],
          nextLessonPreview: {
            title: `Lesson 20 (CAPSTONE): Your Future Skills Portfolio`,
            hook: `Synthesize the band. Build the argument for your own future skills portfolio. 100 XP. Argument Builder.`,
          },
        },
      ],
    },
  ],
};

export default FUTURESKILLS_VOYAGER_L19;

if (import.meta.env?.DEV) {
  const l = FUTURESKILLS_VOYAGER_L19.lessons[0];
  const mags = l.screens.filter((s) => s.type === `magazine`).length;
  const investigation = l.screens.find((s) => s.type === `investigation`);
  const quiz = l.screens.find((s) => s.type === `quiz`)?.questions?.length ?? 0;
  const reflect = l.screens.find((s) => s.type === `reflection`)?.prompts?.length ?? 0;
  console.log(
    `[LESSON-FS-VOYAGER-L19 ${VERSION}] "${l.title}" — ${mags} magazine, investigation w/ ${investigation?.items?.length ?? 0} items in ${investigation?.buckets?.length ?? 0} buckets, ${quiz} quiz, ${reflect} reflection`
  );
}
