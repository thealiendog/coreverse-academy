// ─────────────────────────────────────────────────────────────────────────────
// FUTURE SKILLS VOYAGER  |  L20 CAPSTONE — Your Future Skills Portfolio
// Age band : voyagers (11-12)   Guide: byte (Fox)
// Standards: Coreverse Original — Synthesis, Personal Strategy
// CALIBRATED: Voyager spec v1.1 (May 2026) — capstone synthesizing entire band
// Interaction format: ARGUMENT BUILDER (foundational meta-skills / specialized depth / AI-complement focus)
// XP: 100 (capstone rate, vs 75 standard)
// ─────────────────────────────────────────────────────────────────────────────

const VERSION = "voyager-fs-l20-v1";

const FUTURESKILLS_VOYAGER_L20 = {
  ageBand: `voyagers`,
  subjectId: `future-skills`,
  guide: `byte`,

  lessons: [
    {
      id: `fs-11-12-20`,
      title: `Your Future Skills Portfolio (Capstone)`,
      duration: 45,
      xpReward: 100,
      badge: `portfolio-architect`,
      badgeName: `Portfolio Architect`,

      screens: [
        {
          id: `l20-welcome`,
          type: `welcome`,
          guideText: `{name}, this is it. The capstone. We've spent nineteen lessons covering what future skills actually mean (L01), AI and the labor market (L02), learning how to learn (L03), critical thinking (L04), communication (L05), working with AI (L06), problem solving (L07), creativity in the AI era (L08), adaptability (L09), teamwork (L10), information literacy (L11), computational thinking (L12), systems thinking (L13), emotional intelligence (L14), resilience (L15), entrepreneurship (L16), tech ethics (L17), career paths (L18), and what won't be automated (L19). Today you build the synthesis. Out of everything we've covered, what's your personal future skills portfolio? Which combination do you commit to developing? There are three serious framings; pick the one that fits your thinking, build your case, then engage with the strongest counterargument. By the end of this lesson, you'll have done something rare: written your own deliberate strategy for the skills that will shape your next 50 years. Let's finish strong.`,
          headline: `Your Future Skills Portfolio`,
          subtitle: `The capstone. Synthesize 19 lessons. Build your strategy.`,
          visual: `/voyager-assets/future-skills/l20-welcome.webp`,
        },

        {
          id: `l20-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `What We Actually Covered`,
          paragraphs: [
            `Before synthesizing, take a moment to see the territory you've crossed. Nineteen lessons is a lot. The patterns are easier to see in summary.`,
            `Lessons 1-4 covered foundational meta-skills. What future skills actually mean (with Cowen, Newport, Epstein, Dweck, Autor). AI and the labor market (Autor, Acemoglu, Brynjolfsson, Anthropic Economic Index). Learning how to learn (Roediger, Ebbinghaus, Ericsson, Dweck, Bjork). Critical thinking with the three-bucket framework (well-supported, plausible uncertain, unsupported; with Popper, Roediger replication crisis, motivated reasoning).`,
            `Lessons 5-7 covered communication and reasoning. Communication skills (Rogers active listening, Rosenberg NVC, Voss tactical empathy, Edmondson psychological safety). Working with AI as a tool (Mollick "Co-Intelligence", cone of competence, hallucination, outsourcing thinking). Problem solving (Pólya, Schön reflection-in-action, Kahneman, top-down vs bottom-up vs hybrid).`,
            `Lessons 8-10 covered creative and social skills. Creativity in the AI era (Boden P-creativity, Hoel, Herndon, Eldagsen). Adaptability and change (Dweck honest growth mindset, Susan David emotional agility, Bonanno resilience). Teamwork (Edmondson psychological safety, Project Aristotle, Woolley collective intelligence, Lencioni, Hackman).`,
            `Lessons 11-13 covered information and thinking frameworks. Information literacy (Stanford History Education Group, lateral reading, epistemic peer, calibrated uncertainty, steelmanning, information diet). Computational thinking (Wing, Papert constructionism, decomposition, pattern recognition, abstraction, algorithms, debugging). Systems thinking (Meadows, Forrester, Senge, reinforcing/balancing/delays, leverage points).`,
            `Lessons 14-16 covered self-knowledge and practical skills. Emotional intelligence (Salovey & Mayer, Brackett RULER, the gap between research and Goleman's pop version). Resilience and failure (Annie Duke decision quality vs outcome quality, Taleb asymmetric bets, Bonanno resilience patterns). Entrepreneurship (Steve Blank customer development, Ries Lean Startup, Christensen Jobs to Be Done, unit economics).`,
            `Lessons 17-19 covered ethics, careers, and automation. Tech ethics (O'Neil, Zuboff, Buolamwini, Gebru, Russell). Career paths (Newport's career capital vs Epstein's range). What won't be automated (five automation-resistance patterns, Moravec's paradox, capability vs role thinking).`,
          ],
          image: `/voyager-assets/future-skills/l20-s1-territory.webp`,
          imageCaption: `Nineteen lessons. Many real thinkers. Substantial intellectual ground covered.`,
          vocab: [
            {
              word: `synthesis`,
              definition: `The skill of integrating many separate ideas into a coherent personal framework. Distinct from memorization (knowing each idea separately) and from summary (listing what was covered). Real synthesis produces something usable that didn't exist before: your own working framework for thinking about your future skills.`,
              audioPrompt: `Synthesis is the skill of integrating many separate ideas into a coherent personal framework, {name}. Distinct from memorization, which is knowing each idea separately. Distinct from summary, which is listing what was covered. Real synthesis produces something usable that didn't exist before: your own working framework for thinking about your future skills. Synthesis matters because nineteen separate lessons, however well-learned individually, don't add up to a strategy unless you integrate them. The integration is your work. It can't be done for you. Each person's synthesis will look different because each person's situation, interests, and goals are different. The capstone asks you to do the integration deliberately rather than letting it happen by accident or not at all.`,
            },
          ],
        },

        {
          id: `l20-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Position 1: Build Foundational Meta-Skills First`,
          paragraphs: [
            `The first position: prioritize building deep proficiency in the foundational meta-skills before specializing in any specific domain. Learning how to learn (L03), critical thinking (L04), communication (L05), information literacy (L11), and adaptability (L09) compound across everything else. Build these to a high level first; specific domains can be added later because the meta-skills accelerate learning of anything else.`,
            `The case has real strength. Meta-skills are domain-general: they help you learn coding faster, become a better communicator across industries, evaluate information across topics, adapt to whatever changes come. They're also more durable than specific domain knowledge: programming languages change, specific tech stacks become obsolete, particular industries shift. But the ability to learn quickly, think critically, communicate clearly, and evaluate information persists across decades of change.`,
            `This framing connects directly to Cal Newport's career capital concept (L18) and the foundational nature of these specific skills as building blocks. It's also implicit in the structure of this band itself: the first eleven lessons mostly cover meta-skills before the later lessons applied them.`,
            `Defenders of this framing include working educators who prioritize foundational skills, deep-skill researchers like Ericsson, and many older successful professionals who reflect on what mattered. The position fits well with capability-vs-role thinking from L19: if you can't predict specific roles, you invest in meta-capabilities that transfer across many possible roles.`,
            `The limits. Pure meta-skill focus can produce people who are good at thinking about things in the abstract but don't actually do anything specific. At some point you need to apply the meta-skills to specific domains to produce specific value. The meta-skills alone don't pay rent. The right balance probably involves substantial meta-skill development AND deliberate application to one or two specific domains.`,
          ],
          image: `/voyager-assets/future-skills/l20-s2-meta.webp`,
          imageCaption: `Position 1: meta-skills first; they compound across everything else. Cal Newport, Ericsson, capability-vs-role thinking.`,
          vocab: [
            {
              word: `domainspecific skills`,
              definition: `Distinction in skill development. Domain-general skills (critical thinking, communication, learning ability) transfer across many contexts. Domain-specific skills (knowing a specific programming language, knowing surgery, knowing accounting rules) apply within their specific domain. Both have real value; the right mix depends on your stage and goals.`,
              audioPrompt: `Domain-general versus domain-specific skills is a distinction in skill development, {name}. Domain-general skills are those that transfer across many contexts: critical thinking, communication, learning ability, problem solving, emotional regulation, basic numeracy. Domain-specific skills are those that apply within their specific domain: knowing a specific programming language, knowing surgery, knowing accounting rules, knowing how to repair a specific kind of car. Both have real value. Domain-general skills compound across everything you do. Domain-specific skills produce specific value in their domains. The right mix depends on your stage and goals. Earlier career stages often benefit from heavier investment in domain-general skills. Later career stages often benefit from deeper investment in domain-specific expertise. Both should be developed deliberately; treating one as the only thing that matters produces incomplete development.`,
            },
          ],
        },

        {
          id: `l20-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Position 2: Develop Specialized Depth In 2-3 Domains`,
          paragraphs: [
            `The second position: pick 2-3 specific domains and develop real depth in them. Meta-skills matter but they're support; the substantive expertise is what produces specific value. Coding (L12), systems thinking (L13), entrepreneurship (L16), AI tool use (L06), tech ethics (L17), or specific applied domains within these. Build real skill in chosen areas rather than spreading thin.`,
            `The case has real strength. Real depth produces real capability. Someone who has spent 5,000 hours becoming genuinely competent at coding can build software, automate processes, and contribute in ways that meta-skills alone don't enable. Real expertise compounds: each additional year of deep practice increases your capability faster than each additional general skill would. Specific expertise also creates leverage in the labor market in ways general skill rarely does.`,
            `This framing connects to Cal Newport's career capital theory directly: real career capital comes from rare and valuable specific skills, not from general intelligence or generic talent. Anders Ericsson's deliberate practice research also supports it: expertise requires sustained focused practice in specific domains rather than broad sampling.`,
            `Defenders include Cal Newport, Anders Ericsson, working professionals who've built careers on specific deep expertise, much of the science and engineering tradition. The position recognizes that depth produces capability that breadth alone doesn't, and that specific skills are what employers and customers actually pay for.`,
            `The limits. Excessive specialization without meta-skills produces people who can do one thing well but can't adapt when their specific domain shifts. The "narrow expert" model worked better in slower-changing labor markets than it does in 2026. Specialization without meta-skill support also tends to compound badly: when your domain changes, you have nothing to fall back on because you don't have the meta-skills to learn quickly. David Epstein's "Range" argument is a serious challenge to pure specialization.`,
          ],
          image: `/voyager-assets/future-skills/l20-s3-depth.webp`,
          imageCaption: `Position 2: depth in 2-3 chosen domains produces real value. Newport, Ericsson, deep skill compounds.`,
          vocab: [
            {
              word: `T-shaped skills`,
              definition: `Pattern named in business and design literature: deep expertise in one or two specific domains (the vertical bar of the T) combined with broader competence across related areas (the horizontal bar of the T). Both depth and breadth in specific proportions. Different from pure specialization (no horizontal bar) or pure generalism (no vertical bar). Often considered an effective career strategy.`,
              audioPrompt: `T-shaped skills is a pattern named in business and design literature, {name}. The image: deep expertise in one or two specific domains forms the vertical bar of the T. Broader competence across related areas forms the horizontal bar of the T. Both depth and breadth in specific proportions. T-shaped people have the depth that produces specific capability and the breadth that enables collaboration across domains and adaptation when their specific area shifts. Different from pure specialization, which would be just a vertical bar with no horizontal breadth. Different from pure generalism, which would be just a horizontal bar with no specific depth. T-shaped is often considered an effective career strategy because it combines real capability in specific domains with the adaptability that pure specialists lack. The right kind of T depends on what specific depth and what specific breadth fit your situation.`,
            },
          ],
        },

        {
          id: `l20-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Position 3: Optimize Specifically For AI-Complement`,
          paragraphs: [
            `The third position: develop skills specifically chosen to complement what AI does well, not duplicate it. AI handles pattern recognition with abundant data, routine cognitive work, scaled personalization (L06, L19). The skills worth building deliberately are the ones AI doesn't do well: full-context integration, real relationships, ethical judgment in specific situations, physical embodiment, novel reasoning, meaningful human presence.`,
            `The case has real strength. The marginal value of skills AI can do is decreasing because AI does them increasingly well at low cost. The marginal value of skills AI can't do is increasing because the AI-doable work gets cheaper while AI-resistant work gets relatively more valuable. Deliberately building toward what AI doesn't do well captures this trend rather than competing against AI's strengths.`,
            `Connecting back through the band. The five automation-resistance patterns from L19 (physical embodiment, real relationships, ethical judgment, full-context integration, meaningful human presence) are the specific guide. Skill integration as discussed in L18 fits here. The communication research from L05 emphasizing real human relationships fits here. The leadership and team-dynamics work from L10 fits here. The ethical-reasoning work from L17 fits here.`,
            `Defenders of AI-complement framing include some labor economists thinking about where human value persists, AI researchers thinking about complementarity rather than substitution, and many working professionals who've watched specific tasks automate within their fields. The position is empirically grounded in the real direction of AI development.`,
            `The limits. The AI-complement framing assumes you can reliably predict what AI won't do well over the next decades. The predictions are uncertain. Things that look automation-resistant in 2026 might not be in 2036. Building exclusively toward AI-complement could leave you on the wrong side of automation when AI develops further. The honest framing involves AI-complement as one consideration alongside others, not as the dominant frame for all decisions.`,
          ],
          image: `/voyager-assets/future-skills/l20-s4-ai-complement.webp`,
          imageCaption: `Position 3: build specifically what AI doesn't do well. Five automation-resistance patterns. Capture trend rather than competing with AI strengths.`,
          vocab: [
            {
              word: `complementarity vs substitution`,
              definition: `Distinction in how technology affects work. Complementarity: technology makes humans more effective in their roles (AI tools helping a doctor diagnose better). Substitution: technology replaces what humans do (AI doing the diagnosis instead of the doctor). Real AI impact involves both patterns in different proportions across different domains. Building specifically toward complementary roles is the AI-complement strategy.`,
              audioPrompt: `Complementarity versus substitution is a distinction in how technology affects work, {name}. Complementarity is when technology makes humans more effective in their roles. AI tools helping a doctor diagnose conditions more accurately or quickly. Software helping an engineer design buildings better. AI assistance making a writer more productive. The human role persists but with technology amplifying their capability. Substitution is when technology replaces what humans do. AI doing the diagnosis instead of the doctor. Automated design instead of human design. AI writing instead of human writing. Real AI impact involves both patterns in different proportions across different domains. Building specifically toward complementary roles is the AI-complement strategy: choose work where AI makes you better rather than work where AI replaces you. The strategy works when you can reliably predict which is which; it works less well when predictions are uncertain.`,
            },
          ],
        },

        {
          id: `l20-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Before You Build Your Argument`,
          paragraphs: [
            `As you build your argument for your own future skills portfolio, notice that the three positions aren't mutually exclusive. Most thoughtful synthesizers blend elements: substantial meta-skill foundation, real depth in 2-3 chosen domains, and deliberate orientation toward AI-complement where possible. The forcing function of the capstone is committing to a primary framing while engaging seriously with the others.`,
            `One framing to consider as you decide. Each position implies different daily and yearly decisions. Position 1 (meta-skills first) implies prioritizing reading widely, practicing thinking, developing communication skill, building learning ability, and developing adaptability before specializing. Position 2 (specialized depth) implies picking specific domains soon and investing thousands of hours in deliberate practice in them. Position 3 (AI-complement) implies actively evaluating choices against the five automation-resistance patterns and choosing domains/skills accordingly.`,
            `Another framing. The right position may shift over your lifetime. A 12-year-old probably benefits most from heavy meta-skill investment plus broad exposure (Epstein's range, position 1 with elements of 3). A 22-year-old who's identified a specific area probably benefits from deeper specialization (Newport's career capital, position 2). A 35-year-old likely benefits from refining T-shaped skills around their accumulated work. The portfolio strategy evolves; the question of which is right NOW depends on where you are NOW.`,
            `One last framing. Whatever position you commit to, the underlying skill of having a deliberate strategy matters more than which strategy you choose. Most people drift through their education and early career without any explicit framework for what skills they're building or why. The kids who do the synthesis deliberately end up with capability that compounds. As you make decisions over the next 15-20 years (which classes to take, which extracurriculars, which internships, which first jobs, which first significant projects), having a deliberate framework lets you align those decisions with a long-term strategy. The framework is the leverage; the specific position is less important than having one.`,
          ],
          image: `/voyager-assets/future-skills/l20-s5-before.webp`,
          imageCaption: `The framework is the leverage. Most people drift without one. You're building one deliberately at 12.`,
          vocab: [
            {
              word: `deliberate strategy`,
              definition: `Explicit framework for which skills you're developing and why, used to guide specific decisions over time. Distinct from "drift" (making each decision separately without coherent framework) and from "rigid plan" (committing to specific outcomes that may not survive contact with reality). Deliberate strategy provides direction with flexibility for adjustment.`,
              audioPrompt: `Deliberate strategy is an explicit framework for which skills you're developing and why, used to guide specific decisions over time, {name}. Distinct from drift, which is making each decision separately without coherent framework, often producing scattered skills that don't compound. Distinct from rigid plan, which is committing to specific outcomes that may not survive contact with reality, often producing brittleness when circumstances change. Deliberate strategy provides direction with flexibility for adjustment. You commit to a framework about which kinds of skills matter and why. You apply the framework to specific decisions: which classes, which projects, which jobs, which conversations to have. You adjust the framework as you learn and circumstances change. The framework persists; the specifics evolve. Most people drift through their education and early career without any explicit framework. The compound difference over decades is dramatic.`,
            },
          ],
        },

        // ───── ARGUMENT BUILDER (CAPSTONE) ────────────────────────────────────
        {
          id: `l20-argument-builder`,
          type: `argument-builder`,
          headline: `What's Your Future Skills Portfolio?`,
          intro: `{name}, the capstone synthesis. Pick the position that fits your thinking about your own portfolio. Build your case with 3-4 pieces of evidence drawn from the band. Then respond to the strongest counterargument. This is your deliberate strategy. Take it seriously.`,
          positions: [
            {
              id: `meta-skills-first`,
              label: `Build foundational meta-skills first (learning, thinking, communication, adaptability, information literacy)`,
              summary: `Prioritize deep proficiency in foundational meta-skills before specializing. Learning how to learn (L03), critical thinking (L04), communication (L05), information literacy (L11), adaptability (L09) compound across everything else. Meta-skills are domain-general and more durable than specific knowledge. Defenders: Newport's career capital concept, Ericsson on deliberate practice of foundational skills, capability-vs-role thinking from L19. Strength: meta-skills accelerate learning of anything; domain-general transfer; more durable than specific domains. Limit: pure meta-skill focus produces people who think well abstractly but don't do anything specific; the meta-skills alone don't pay rent.`,
            },
            {
              id: `specialized-depth`,
              label: `Develop specialized depth in 2-3 specific domains (real expertise produces real capability)`,
              summary: `Pick 2-3 specific domains and develop real depth. Meta-skills matter as support; substantive expertise produces specific value. Real depth compounds: each year of deep practice increases capability faster than each general skill. Specific expertise creates labor-market leverage. Defenders: Cal Newport (career capital), Anders Ericsson (deliberate practice), working professionals with specific expertise. Strength: depth produces real capability and labor-market leverage that breadth alone doesn't. Limit: pure specialization without meta-skill support compounds badly when your domain shifts; David Epstein's "Range" argument challenges it.`,
            },
            {
              id: `ai-complement`,
              label: `Optimize specifically for AI-complement (build what AI doesn't do well)`,
              summary: `Develop skills specifically complementing what AI does well, not duplicating it. AI handles pattern recognition, routine cognitive work, scaled personalization. The marginal value of AI-resistant skills (integration, relationships, ethical judgment, embodiment, novel reasoning, meaningful human presence) increases as AI does the rest. Defenders: labor economists thinking about complementarity, AI researchers, professionals who've watched specific tasks automate. Strength: captures actual AI trend; concentrated on increasing-value categories. Limit: assumes reliable prediction of what AI won't do well over decades; uncertain on long timescales; could leave you on wrong side as AI develops.`,
            },
          ],
          evidence: [
            {
              id: `e1`,
              text: `Meta-skills like learning how to learn, critical thinking, and information literacy transfer across domains and remain useful as specific knowledge becomes obsolete. The Stanford History Education Group's research on lateral reading, Roediger and Karpicke's work on active recall, and Carol Dweck's growth mindset research all support meta-skills as foundational.`,
              source: `Multiple sources covered in L03, L04, L11`,
            },
            {
              id: `e2`,
              text: `Cal Newport's career capital theory (L18) argues that rare and valuable specific skills produce real labor-market leverage. Career capital comes from depth, not from generic talent or general intelligence. Newport's framework reverses "follow your passion" advice in favor of building specific skills.`,
              source: `Newport 2012; career capital theory`,
            },
            {
              id: `e3`,
              text: `Anders Ericsson's research on deliberate practice (L03) shows expertise requires sustained focused practice in specific domains rather than broad sampling. The expertise that emerges from deliberate practice in chosen domains produces capability that breadth alone doesn't.`,
              source: `Ericsson decades of expertise research`,
            },
            {
              id: `e4`,
              text: `David Epstein's "Range" (2019, L18) argues that broad exposure across many areas often produces better long-term outcomes than early specialization. The argument has empirical support from cognitive science, sports research, and historical analysis. Genuinely disagrees with pure-specialization framing.`,
              source: `Epstein 2019; multiple disciplines`,
            },
            {
              id: `e5`,
              text: `The five automation-resistance patterns from L19 (physical embodiment, real relationships, ethical judgment, full-context integration, meaningful human presence) identify specific categories where human value persists. Skills built in these categories should hold value longer than skills competing directly with what AI does well.`,
              source: `L19 synthesis; Moravec's paradox; labor economics`,
            },
            {
              id: `e6`,
              text: `Erik Brynjolfsson's research on AI productivity gains (L02) shows AI complements many roles rather than replacing them. The complementarity pattern means workers who can effectively use AI alongside their other skills capture productivity benefits without being substituted.`,
              source: `Brynjolfsson research; multiple studies`,
            },
            {
              id: `e7`,
              text: `T-shaped skills (depth in 1-2 domains plus breadth across related areas) is often considered an effective career strategy. Combines real capability in specific domains with adaptability that pure specialists lack. Common across many successful careers.`,
              source: `Business and design literature; widespread adoption`,
            },
            {
              id: `e8`,
              text: `Most people drift through their education and early career without explicit framework for what skills they're building or why. The kids who do the synthesis deliberately (whatever specific framework) end up with capability that compounds dramatically over decades. The framework itself is the leverage point.`,
              source: `Career strategy literature; multiple working professionals`,
            },
          ],
          counterargument: {
            id: `counter`,
            text: `"You picked your position. Here's the strongest objection. All three positions assume you can plan a coherent skills portfolio in advance. But the most successful careers in your generation may not come from any planned framework; they may come from following interests, taking opportunities as they arise, and building skills your future-you couldn't predict your current-you would care about. The 'deliberate strategy' framing might itself be the wrong frame because the future you'll face at 30 is so uncertain that what looks deliberate now will look misguided in hindsight. Why think any portfolio strategy is better than just following interesting work and developing whatever skills it calls for? Maybe 'don't plan, just respond intelligently' is the right meta-strategy."`,
            promptInstruction: `In 3-4 sentences, respond. Is deliberate strategy worth committing to, or should you respond intelligently to opportunities as they arise? How does your position handle this challenge?`,
          },
          reflectionPrompt: `Looking at the positions you didn't pick, which has the strongest argument that you'd find hardest to dismiss? Why?`,
        },

        {
          id: `l20-quiz`,
          type: `quiz`,
          headline: `Final check — synthesis across the band`,
          questions: [
            {
              id: `q1`,
              type: `multiple-choice`,
              question: `What is "synthesis" as a skill?`,
              options: [
                `Memorization`,
                `Skill of integrating many separate ideas into a coherent personal framework; distinct from memorization (knowing each separately) and summary (listing what was covered); produces something usable that didn't exist before — your own working framework`,
                `Summary`,
                `Random combining`,
              ],
              correctIndex: 1,
              explanation: `Nineteen lessons don't add up to a strategy unless you integrate them. The integration is your work. Each person's synthesis will look different because situations and goals differ. The capstone asks you to do the integration deliberately rather than letting it happen by accident or not at all.`,
            },
            {
              id: `q2`,
              type: `multiple-choice`,
              question: `What does the "meta-skills first" position argue?`,
              options: [
                `Skills don't matter`,
                `Prioritize deep proficiency in foundational meta-skills (learning how to learn, critical thinking, communication, information literacy, adaptability) before specializing; they compound across everything else; domain-general and more durable than specific knowledge`,
                `Everything matters equally`,
                `Just be smart`,
              ],
              correctIndex: 1,
              explanation: `Meta-skills accelerate learning of any specific domain. They're also more durable than specific knowledge that becomes obsolete. Limit: pure meta-skill focus produces people who think well abstractly but don't actually do anything specific. The meta-skills alone don't pay rent.`,
            },
            {
              id: `q3`,
              type: `multiple-choice`,
              question: `What is the "specialized depth" position?`,
              options: [
                `Random specialization`,
                `Pick 2-3 specific domains and develop real depth; meta-skills matter as support but substantive expertise produces specific value; depth compounds (each year increases capability faster than each general skill); specific expertise creates labor-market leverage; defenders include Cal Newport, Anders Ericsson`,
                `Be a specialist forever`,
                `Pick one thing only`,
              ],
              correctIndex: 1,
              explanation: `Real depth produces real capability that breadth alone doesn't. Specific skills are what employers and customers actually pay for. Limit: pure specialization without meta-skill support compounds badly when your domain shifts; Epstein's "Range" argument is a serious challenge.`,
            },
            {
              id: `q4`,
              type: `multiple-choice`,
              question: `What is the "AI-complement" position?`,
              options: [
                `Use AI for everything`,
                `Develop skills specifically chosen to complement what AI does well, not duplicate it; AI handles pattern recognition, routine cognitive work, scaled personalization; the skills worth building deliberately are AI-resistant ones (integration, relationships, ethical judgment, embodiment, novel reasoning, meaningful presence)`,
                `Compete with AI`,
                `Ignore AI`,
              ],
              correctIndex: 1,
              explanation: `The marginal value of AI-doable skills is decreasing because AI does them increasingly well at low cost. The marginal value of AI-resistant skills is increasing. Building toward what AI doesn't do well captures this trend rather than competing against AI's strengths.`,
            },
            {
              id: `q5`,
              type: `multiple-choice`,
              question: `What is the "T-shaped skills" pattern?`,
              options: [
                `T-shirt design`,
                `Deep expertise in 1-2 specific domains (vertical bar of the T) combined with broader competence across related areas (horizontal bar); both depth and breadth in specific proportions; different from pure specialization (no horizontal bar) or pure generalism (no vertical bar); often considered effective career strategy`,
                `Letter game`,
                `Random skills`,
              ],
              correctIndex: 1,
              explanation: `T-shaped people have the depth that produces specific capability AND the breadth that enables collaboration across domains and adaptation when their specific area shifts. The right kind of T depends on what specific depth and what specific breadth fit your situation.`,
            },
            {
              id: `q6`,
              type: `multiple-choice`,
              question: `What's "complementarity vs substitution" in AI's effect on work?`,
              options: [
                `Same thing`,
                `Complementarity: technology makes humans more effective in their roles (AI tools helping a doctor diagnose better); substitution: technology replaces what humans do (AI doing the diagnosis instead); real AI impact involves both patterns in different proportions; building toward complementary roles is the AI-complement strategy`,
                `Random distinction`,
                `Just words`,
              ],
              correctIndex: 1,
              explanation: `The strategy works when you can reliably predict which is which. Works less well when predictions are uncertain. The honest framing involves AI-complement as one consideration alongside others, not as dominant frame for all decisions.`,
            },
            {
              id: `q7`,
              type: `multiple-choice`,
              question: `What is "deliberate strategy" and why does it matter?`,
              options: [
                `Careful planning`,
                `Explicit framework for which skills you're developing and why, used to guide specific decisions over time; distinct from "drift" (no coherent framework) and "rigid plan" (committing to specific outcomes); provides direction with flexibility; most people drift without one; compound difference over decades is dramatic`,
                `Detailed schedule`,
                `Career plan`,
              ],
              correctIndex: 1,
              explanation: `The framework is the leverage. The specific position you commit to matters less than having any deliberate framework rather than drifting. Even an imperfect framework deliberately chosen produces better long-term outcomes than no framework.`,
            },
            {
              id: `q8`,
              type: `multiple-choice`,
              question: `Why might the right position shift over your lifetime?`,
              options: [
                `Random change`,
                `12-year-old benefits most from meta-skill investment + broad exposure (Epstein-style range); 22-year-old who's identified a specific area benefits from deeper specialization (Newport's career capital); 35-year-old refines T-shaped skills around accumulated work; the portfolio strategy evolves`,
                `People change minds`,
                `Don't matter`,
              ],
              correctIndex: 1,
              explanation: `The right position depends on where you are NOW. Different stages call for different strategies. The point isn't to commit forever to one position; it's to be deliberate about which position fits your current situation.`,
            },
            {
              id: `q9`,
              type: `true-false`,
              question: `True or false: The three positions are mutually exclusive — you have to pick one and reject the others.`,
              correctAnswer: false,
              explanation: `False. Most thoughtful synthesizers blend elements of all three: substantial meta-skill foundation, real depth in 2-3 chosen domains, deliberate orientation toward AI-complement where possible. The forcing function of the capstone is committing to a primary framing while engaging seriously with the others. The integration is the skill.`,
            },
            {
              id: `q10`,
              type: `inference`,
              question: `Synthesis test: someone says "I just realized future skills means I should hustle harder on coding because everyone's doing it." Based on the entire band, what should you point out?`,
              options: [
                `"You're right, hustle"`,
                `"That's a viral-content framing of future skills, not what we covered. 'Everyone's doing it' suggests it'll be saturated. Coding for common patterns is exactly what AI handles well (L06, L19), so basic coding skills are decreasing in marginal value. Real future skills are about meta-skills (L03, L04, L05, L11), integrated capabilities (L18), AI-resistant work (L19), and deliberate strategy (capstone). Coding can be one of your 2-3 domains if you actually love it and want depth, but as 'hustle to compete' it's the wrong frame. Better question: what's your deliberate skills strategy, and which 2-3 domains does coding fit into if any, and how does it integrate with meta-skills and AI-complement thinking?"`,
                `"Don't learn coding"`,
                `"Become anything"`,
              ],
              correctIndex: 1,
              explanation: `Real applied synthesis. The capstone isn't memorizing positions; it's integrating across the band to produce useful guidance for specific situations. This response uses learning from L06, L18, L19, and the meta-skills lessons to engage with a common shallow framing of future skills.`,
            },
          ],
        },

        {
          id: `l20-reflection`,
          type: `reflection`,
          headline: `Final reflection — synthesis prompts`,
          intro: `Pick the prompt that pulls at you most. This is your synthesis. Your answer is saved.`,
          prompts: [
            { id: `reflect-cognitive`, category: `Cognitive`, prompt: `Of the 20 lessons in this band, which 3 most changed how you think? Why those specifically?` },
            { id: `reflect-meta`, category: `Metacognitive`, prompt: `Honestly: how much of this band do you think you'll actually apply over the next year? What would help you actually use it?` },
            { id: `reflect-identity`, category: `Identity`, prompt: `Who is the person you're becoming through this band of work? Be specific about what's actually different in how you think now.` },
            { id: `reflect-application`, category: `Application`, prompt: `Pick one specific decision you'll make in the next month (a class to take, a project to start, a conversation to have). Apply your synthesized future skills framework. What does it suggest?` },
            { id: `reflect-critical`, category: `Critical`, prompt: `What's missing from this band? What skills weren't covered that should have been? What would you add?` },
            { id: `reflect-personal`, category: `Personal commitment`, prompt: `Write down your deliberate future skills strategy in your own words. Two paragraphs. What are you actually committing to develop, and why? Save it somewhere you'll see it in a year.` },
          ],
        },

        {
          id: `l20-real-world`,
          type: `real-world`,
          headline: `Take this band into your life`,
          guideContext: `This is the synthesis. Two paths.`,
          familyActivity: {
            title: `Share Your Portfolio With Your Family`,
            duration: `60 minutes`,
            description: `Pick the family member whose career or skill development you most respect. Sit with them and share what you've built across this band — your synthesis, your deliberate strategy, which position you committed to in the capstone. Ask for their honest feedback: where do they think your synthesis is strong? Where do they see blind spots? How would they recommend you actually implement the strategy over the next year? Most adults haven't done this exercise themselves and may not have explicit frameworks, but the best conversations come from your synthesis meeting their experience. This is often the most useful single conversation you can have at the end of this band.`,
          },
          projectOption: {
            title: `Write And Maintain Your Future Skills Portfolio Document, ongoing`,
            duration: `Ongoing — initial document 8 hours, quarterly review 1 hour`,
            description: `Build a real document (3-5 pages) that captures your deliberate future skills strategy: which position you committed to (meta-skills first, specialized depth, or AI-complement), why, which specific skills you're actively developing, what your current focus is, what you're deliberately not focusing on, and how you'll review this over time. Update it every 3 months. The act of maintaining the document keeps your strategy deliberate rather than drifting. Most adults never have such a document; building one at 12 is one of the highest-leverage investments available. Save it where you can find it.`,
            offerToParent: `Parent: opt your kid into this project from the dashboard. Maintaining a deliberate future skills portfolio document for years compounds dramatically.`,
          },
          identityQuestion: `Twenty lessons. Real frameworks. Real thinkers. Real synthesis. Who have you become through this work, and what does that mean for the next 50 years of your life?`,
        },

        {
          id: `l20-identity-hook`,
          type: `identity-hook`,
          headline: `Who has this whole band made you?`,
          prompt: `One sentence capturing your synthesis. This is the final identity statement of the band.`,
          placeholder: `Someone who...`,
          examples: [
            `Someone who has a deliberate framework for future skills rather than drifting through education.`,
            `A person who can synthesize across many domains and commit to a coherent personal strategy.`,
            `Someone willing to build durable capabilities rather than chase the latest viral career predictions.`,
          ],
          saveKey: `identity_responses_fs_11_12_20`,
        },

        {
          id: `l20-celebration`,
          type: `celebration`,
          guideText: `{name}. You did it. Twentieth Future Skills lesson — the capstone. Done. You've completed the entire Future Skills Voyager band. Twenty lessons, real frameworks, real thinkers, real synthesis. You can articulate three positions on your own future skills portfolio. You have working frameworks for learning, critical thinking, communication, AI literacy, problem solving, creativity, adaptability, teamwork, information literacy, computational thinking, systems thinking, emotional intelligence, resilience, entrepreneurship, ethics, careers, and automation. You can apply real research from Salovey/Mayer to Newport to Epstein to Boden to Edmondson to Meadows to Duke to Bonanno to Brackett to Hoel to Mollick to Eldagsen to Buolamwini and many others. You've done synthesis few adults attempt. The Future Skills Voyager band — complete. Your work doesn't end here. The framework you've built compounds with every decision you make over the next 50 years. The skills you've internalized shape what you'll be capable of becoming. The deliberate strategy you commit to today protects you from drifting through education and early career like most people do. I'm proud of you, {name}. Real synthesis. Real work. Real future skills. Go build. — Byte`,
          badge: `portfolio-architect`,
          badgeName: `Portfolio Architect`,
          xpEarned: 100,
          competencies: [
            `Synthesizes 19 prior lessons into coherent personal framework`,
            `Articulates three positions on future skills portfolio strategy (meta-skills first, specialized depth, AI-complement)`,
            `Knows major thinkers across the band: Newport, Epstein, Ericsson, Duke, Bonanno, Brackett, Edmondson, Meadows, Wing, Hoel, Mollick, Salovey, Mayer, O'Neil, Zuboff, Buolamwini, Russell, and more`,
            `Understands T-shaped skills, complementarity vs substitution, deliberate strategy as concepts`,
            `Commits to a deliberate future skills strategy rather than drifting`,
            `Completes Future Skills Voyager band`,
          ],
          nextLessonPreview: {
            title: `Future Skills Voyager band — COMPLETE`,
            hook: `You've completed all 20 lessons. The framework you've built compounds for the next 50 years. Real work done. — Byte`,
          },
        },
      ],
    },
  ],
};

export default FUTURESKILLS_VOYAGER_L20;

if (import.meta.env?.DEV) {
  const l = FUTURESKILLS_VOYAGER_L20.lessons[0];
  const mags = l.screens.filter((s) => s.type === `magazine`).length;
  const argEvi = l.screens.find((s) => s.type === `argument-builder`)?.evidence?.length ?? 0;
  const quiz = l.screens.find((s) => s.type === `quiz`)?.questions?.length ?? 0;
  const reflect = l.screens.find((s) => s.type === `reflection`)?.prompts?.length ?? 0;
  console.log(
    `[LESSON-FS-VOYAGER-L20 CAPSTONE ${VERSION}] "${l.title}" — ${mags} magazine, argument-builder w/ ${argEvi} evidence, ${quiz} quiz, ${reflect} reflection, ${l.xpReward} XP`
  );
}
