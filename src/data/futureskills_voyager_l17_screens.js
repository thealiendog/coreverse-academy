// ─────────────────────────────────────────────────────────────────────────────
// FUTURE SKILLS VOYAGER  |  L17 — Ethics & Responsibility in Tech
// Age band : voyagers (11-12)   Guide: byte (Fox)
// Standards: Coreverse Original — Tech Ethics, Applied Philosophy
// CALIBRATED: Voyager spec v1.1 (May 2026) — engages seriously with contested ethical questions
// Interaction format: ARGUMENT BUILDER (individual ethics / structural ethics / applied frameworks)
// ─────────────────────────────────────────────────────────────────────────────

const VERSION = "voyager-fs-l17-v1";

const FUTURESKILLS_VOYAGER_L17 = {
  ageBand: `voyagers`,
  subjectId: `future-skills`,
  guide: `byte`,

  lessons: [
    {
      id: `fs-11-12-17`,
      title: `Ethics & Responsibility in Tech`,
      duration: 35,
      xpReward: 75,
      badge: `tech-ethicist`,
      badgeName: `Tech Ethicist`,

      screens: [
        {
          id: `l17-welcome`,
          type: `welcome`,
          guideText: `{name}, technology shapes nearly every part of modern life. The decisions tech companies make about products, algorithms, data, and platforms affect billions of people. So who's responsible for the consequences? The engineers who built it? The companies who deployed it? The regulators who set the rules? The users who use it? The honest answer is "all of them, but in contested proportions." Today we work through three serious positions on tech ethics defended by working philosophers, engineers, and policy researchers. Build your argument for how to think about responsibility. The question matters because your generation will spend 50+ years either building this stuff, working alongside it, or being affected by it. Knowing how to think about the ethics is one of the highest-leverage skills available.`,
          headline: `Ethics & Responsibility in Tech`,
          subtitle: `Three positions defended by serious thinkers. The question shapes your relationship to tech for life.`,
          visual: `/voyager-assets/future-skills/l17-welcome.webp`,
        },

        {
          id: `l17-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Why Tech Ethics Is Genuinely Hard`,
          paragraphs: [
            `Tech ethics gets treated as if it should be obvious. "Don't be evil." "Don't build harmful things." "Treat users with respect." In practice, almost every difficult tech-ethics question involves trade-offs between legitimate goods. Privacy vs convenience. Free speech vs harm reduction. Innovation speed vs safety. Individual autonomy vs collective welfare. Profit vs broader impact. Reasonable people prioritize differently. The "obvious" answers usually only feel obvious because the person stating them isn't engaging with what's actually being traded off.`,
            `Tech ethics also differs from older ethical questions in specific ways. Speed: tech systems can affect billions of people within months of launch, faster than regulators or affected communities can respond. Scale: design choices in widely-deployed systems affect more people more deeply than most pre-digital choices did. Compounding: algorithmic and platform decisions create feedback loops that shape further behavior in ways no individual person fully controls. Opacity: many tech systems are difficult to understand even for their creators (especially AI), which makes accountability harder.`,
            `Several researchers have done serious work on tech ethics. Cathy O'Neil's "Weapons of Math Destruction" (2016) examined how mathematical models can encode unfairness and harm at scale. Shoshana Zuboff's "Age of Surveillance Capitalism" (2019) analyzed how data collection has become an economic system. Joy Buolamwini and the Algorithmic Justice League documented bias in facial recognition. Timnit Gebru and others have worked on AI ethics and the labor conditions of AI training. These aren't fringe critics; they're serious researchers whose work shapes ongoing policy debate.`,
            `The honest framing: tech ethics is real, contested, and genuinely difficult. Both reflexive techno-optimism ("innovation is always good, ignore the costs") and reflexive techno-pessimism ("everything tech does is harmful, return to simpler times") oversimplify. Real engagement with tech ethics means engaging with specific cases, specific trade-offs, and specific frameworks for thinking through them.`,
          ],
          image: `/voyager-assets/future-skills/l17-s1-hard.webp`,
          imageCaption: `Tech ethics is genuinely hard: trade-offs between legitimate goods, speed and scale that outpace response, real researchers doing serious work.`,
          vocab: [
            {
              word: `algorithmic harm`,
              definition: `Pattern documented by Cathy O'Neil, Joy Buolamwini, and others: algorithmic and mathematical systems can produce harmful outcomes at scale even without anyone intending harm. Examples include biased facial recognition, discriminatory loan algorithms, and amplification of misinformation. Distinct from individual bad actors; the harm emerges from system design and deployment.`,
              audioPrompt: `Algorithmic harm is a pattern documented by Cathy O'Neil, Joy Buolamwini, and other researchers, {name}. Algorithmic and mathematical systems can produce harmful outcomes at scale even without anyone intending harm. Examples include facial recognition systems that work less accurately on darker skin tones, loan algorithms that discriminate based on neighborhood, social media algorithms that amplify misinformation more than accurate content. The harm is distinct from individual bad actors. Nobody at the company necessarily wanted these outcomes. The harm emerges from system design and deployment: choices about training data, optimization targets, deployment contexts. Recognizing algorithmic harm as its own pattern of ethical concern, distinct from individual malice, is one of the key insights of contemporary tech ethics. The patterns can be studied, measured, and partly addressed through better design and oversight.`,
            },
            {
              word: `trade-off`,
              definition: `Situation where achieving more of one legitimate good requires accepting less of another. Tech ethics is full of genuine trade-offs: privacy vs convenience, free speech vs harm reduction, innovation speed vs safety, individual autonomy vs collective welfare. The "obvious" answers to ethical questions usually feel obvious because the person stating them isn't engaging with what's being traded off.`,
              audioPrompt: `A trade-off in tech ethics is a situation where achieving more of one legitimate good requires accepting less of another, {name}. Privacy versus convenience: systems that protect your data most strongly are usually less convenient to use. Free speech versus harm reduction: platforms that restrict harmful content most aggressively risk restricting legitimate speech; platforms that allow the most expression enable the most harmful content. Innovation speed versus safety: developing technology faster produces benefits sooner but skips testing that catches harmful uses. Individual autonomy versus collective welfare: letting individuals make their own choices produces better outcomes for some and worse outcomes for others. These trade-offs are genuine. They don't have obvious answers because they require choosing between things that both matter. The "obvious" answers to tech-ethics questions usually only feel obvious because the person stating them isn't engaging with what's actually being traded off. They've implicitly decided that one value matters far more than the other without saying so. Real engagement with tech ethics means naming the trade-off, taking both sides seriously, and making an explicit choice about which matters more in the specific situation.`,
            },
            {
              word: `opacity`,
              definition: `Feature of many tech systems, especially AI: the systems are difficult to understand even for their creators. Makes accountability harder because you can't explain why a decision was made. Distinct from intentional concealment: opacity can be built-in to how machine learning systems work. Ongoing challenge in AI ethics and regulation because you can't hold systems accountable for decisions you can't explain.`,
              audioPrompt: `Opacity is a feature of many tech systems where the systems are difficult to understand even for their creators, {name}. Tech ethics differs from older ethical questions partly because of opacity. In traditional engineering, you can audit a bridge design and explain exactly why each component is sized as it is. In many AI systems, especially large neural networks, the same explanation isn't available. The system produces outputs, but the internal reasoning pathway from input to output may be opaque even to the engineers who built it. This makes accountability harder. If a loan application is denied by an algorithm, and nobody can explain why the algorithm made that decision, it's difficult to determine whether the denial was discriminatory or appropriate. Opacity can be built-in to how machine learning systems work, not just intentional concealment. The EU AI Act and other regulatory efforts have tried to require explainability in certain high-stakes applications specifically because opacity makes accountability impossible. Addressing opacity is one of the ongoing challenges in AI ethics.`,
            },
          ],
        },

        {
          id: `l17-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Position 1: Individual Ethics Dominates`,
          paragraphs: [
            `The first position argues that tech ethics ultimately comes down to the people who build, deploy, and run these systems. Engineers, designers, product managers, and executives have personal ethical obligations that don't disappear because they're acting through a company. The "I just built the tool" defense is inadequate when the tool was specifically designed for harmful uses or when foreseeable harms were ignored.`,
            `This position has deep roots in engineering ethics. Professional codes from the ACM (Association for Computing Machinery) and IEEE require members to consider broader impacts of their work. Medical ethics, engineering ethics for bridges and aircraft, and accounting ethics all treat individual professional responsibility as central. The argument: software and AI engineers should be held to similar professional standards even where formal licensing doesn't exist.`,
            `Recent examples illustrate the position. Timnit Gebru, an AI ethics researcher, raised concerns about Google's AI work and was fired in 2020. The case became a focal point for arguments about whether engineers can speak up about ethical concerns inside their organizations. Software engineers at multiple companies have organized to push back on contracts they considered ethically problematic (immigration enforcement, military applications, certain advertising practices). The position holds that these are legitimate exercises of individual ethical responsibility.`,
            `Defenders include many working engineering ethicists, professional organizations, philosophers who treat institutions as composed of individuals, and tech workers who organize ethically. The position is right that individuals working in tech have real ethical agency and that "the company decided" isn't an automatic defense. Limit: individual ethics alone can't solve problems that emerge from market structures, regulatory gaps, and competitive pressures. The most ethical engineer working for a company with a fundamentally harmful business model can't fix the business model by personal choice. Individual ethics is necessary but often insufficient.`,
          ],
          image: `/voyager-assets/future-skills/l17-s2-individual.webp`,
          imageCaption: `Position 1: individual ethics matters; engineers, designers, executives have personal responsibility. Real but limited.`,
          vocab: [
            {
              word: `professional ethics`,
              definition: `Codes of ethical obligation that professionals accept by entering a field. Medical doctors swear oaths; engineers in many fields face professional licensing requirements; lawyers have bar rules. Software engineering has the ACM and IEEE codes but lacks formal licensing in most jurisdictions. Whether software professional ethics should be formalized is an active debate.`,
              audioPrompt: `Professional ethics are codes of ethical obligation that professionals accept by entering a field, {name}. Medical doctors swear ethical oaths. Engineers in fields like civil engineering face professional licensing requirements that include ethical obligations. Lawyers have bar rules they must follow. Accountants have professional standards. Software engineering and AI work have the ACM (Association for Computing Machinery) code and the IEEE code but generally lack formal licensing in most jurisdictions. This means software engineers can be fired for following ethical concerns but can't be officially disciplined for violating them. Whether software professional ethics should be formalized (with licensing, enforcement, and consequences for violations) is an active debate in tech-ethics literature. Some argue the parallels to other engineering disciplines justify formal professional ethics; others argue software is too varied for one-size-fits-all licensing.`,
            },
            {
              word: `ethical agency`,
              definition: `The capacity of individuals to make choices based on ethical principles, as opposed to simply following orders or structural incentives. The "individual ethics dominates" position holds that engineers, designers, and executives have real ethical agency: they can choose not to build harmful things, can speak up about concerns, and can organize with colleagues. "I just built the tool" is inadequate because it denies agency that actually exists.`,
              audioPrompt: `Ethical agency is the capacity of individuals to make choices based on ethical principles, {name}. In tech ethics, the individual-ethics position holds that engineers, designers, product managers, and executives have real ethical agency that doesn't disappear because they're acting through a company. The choice to build a specific tool, to deploy it in a specific way, to raise concerns about its effects, to refuse to work on something harmful, to organize with colleagues for better practices — all are exercises of ethical agency. "I just built the tool" is an inadequate defense, according to this position, because it treats the individual as having no agency when they actually have real choices. The Timnit Gebru case at Google in 2020 illustrates what ethical agency in practice looks like, and what it costs. Gebru raised AI ethics concerns inside Google and was fired. The case became a focal point for discussions about whether engineers can effectively exercise ethical agency within large tech companies, and what structural protections might be needed to make that agency effective rather than career-ending.`,
            },
            {
              word: `Timnit Gebru`,
              definition: `AI ethics researcher who was fired from Google in 2020 after raising concerns about the company's AI work, particularly about large language models' risks. Her case became a focal point for arguments about whether engineers can speak up about ethical concerns inside tech organizations. Co-founded the Distributed AI Research Institute (DAIR) to conduct AI ethics research outside corporate structures.`,
              audioPrompt: `Timnit Gebru is an AI ethics researcher who became a focal point for discussions about individual ethics in tech after her firing from Google in 2020, {name}. She raised concerns about Google's AI work, including concerns about large language models' risks and the environmental and labor conditions of AI training. The circumstances of her firing were disputed but the case illustrated the limits and possibilities of individual ethical agency inside large tech companies. An engineer with serious ethical concerns, fired when those concerns conflicted with employer interests. Gebru subsequently co-founded the Distributed AI Research Institute, known as DAIR, to conduct AI ethics research outside corporate structures where conflicts of interest could interfere. Her work and the case around her firing have shaped ongoing debates about whether professional ethics codes in software engineering need formal enforcement mechanisms analogous to those in medicine and law. The argument: individual ethical agency in tech exists but is structurally unprotected, which limits how effective it can be.`,
            },
          ],
        },

        {
          id: `l17-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Position 2: Structural Ethics Dominates`,
          paragraphs: [
            `The second position argues that individual ethics, while necessary, is insufficient. Most harmful tech outcomes emerge from structural factors: market incentives that reward engagement over accuracy, competitive pressures that punish slower more careful development, regulatory gaps that leave dangerous practices legal, and business models that depend on extracting maximum value from users. Addressing these structural factors matters more than individual ethical engineers operating within a fundamentally broken structure.`,
            `Shoshana Zuboff's "Age of Surveillance Capitalism" (2019) is the most prominent academic articulation of this position. Her argument: data-extraction business models create incentives that produce harm regardless of individual ethics within the companies. Even well-intentioned employees are constrained by what the business model requires for survival. Changing the business model (through regulation, competition policy, alternative models) matters more than improving the ethics of individuals working within it.`,
            `EU regulatory approach reflects this position. GDPR (2018) and the EU AI Act (2024) attempt to constrain what companies can legally do regardless of company-level ethics. The bet: laws can address structural problems that individual companies can't or won't fix on their own. The effectiveness is contested, but the approach reflects a serious philosophical position: ethics in tech requires structural intervention, not just better individuals.`,
            `Defenders of structural ethics include Zuboff, many tech policy researchers, EU regulators, antitrust researchers, and labor organizers in tech. The position is right that some problems are systemic and can't be addressed by individual choice. Limit: structural focus can absolve individual responsibility ("the system made me do it"); regulation lags innovation by years or decades; bad regulation can produce worse outcomes than market solutions; the right structural fix is often unclear and contested.`,
          ],
          image: `/voyager-assets/future-skills/l17-s3-structural.webp`,
          imageCaption: `Position 2: structural factors dominate; markets, regulations, business models shape what gets built. Zuboff, EU approach.`,
          vocab: [
            {
              word: `surveillance capitalism`,
              definition: `Term coined by Shoshana Zuboff in her 2019 book of the same name. Economic system in which companies extract personal data from users and use it for prediction and behavioral influence. The argument: this business model creates incentives that produce harm regardless of individual ethics within companies. Contested but influential framework.`,
              audioPrompt: `Surveillance capitalism is a term coined by Shoshana Zuboff in her 2019 book "The Age of Surveillance Capitalism," {name}. The economic system in which companies extract personal data from users and use it for prediction and behavioral influence. Zuboff's argument: this business model creates incentives that produce harm regardless of individual ethics within companies. Even well-intentioned employees are constrained by what the business model requires for survival. Recommendation services, targeted advertising, engagement-optimized feeds all reflect this structure. The framework is influential but contested. Some critics argue it overstates what's structurally inevitable and understates how individual companies could choose different paths within the same broad market. Others argue it underestimates the problem. The honest reading is that Zuboff identified real patterns that subsequent research and regulation have engaged with, while reasonable people disagree about how much structural change is needed.`,
            },
            {
              word: `GDPR`,
              definition: `General Data Protection Regulation, EU law enacted 2018 that constrains how companies collect and use personal data, regardless of company-level ethics. Gives users rights over their data, requires explicit consent for certain uses, and imposes large fines for violations. Represents the structural-ethics position: laws can address problems individual companies won't fix. Effectiveness is debated but it has shaped global data practices.`,
              audioPrompt: `GDPR stands for General Data Protection Regulation, an EU law enacted in 2018, {name}. It constrains how companies collect and use personal data, regardless of what individual companies decide about their own ethics. It gives users rights: the right to know what data is collected, the right to access it, the right to have it deleted. It requires explicit consent for certain uses of personal data. It imposes large fines for violations. GDPR represents the structural-ethics position applied: if individual companies won't protect user data voluntarily, law can require it. The regulation has had real effects on global data practices even for companies outside the EU, because companies with European users must comply. Effectiveness is debated: some argue it has improved privacy meaningfully; others argue it's produced consent popups nobody reads without substantively changing data practices. The EU AI Act, passed in 2024, attempts similar structural constraints on AI development and deployment. Both reflect the philosophical position that structural intervention matters more than improving the ethics of individuals within unregulated structures.`,
            },
            {
              word: `structural factors`,
              definition: `Market incentives, competitive pressures, regulatory gaps, and business models that shape what tech gets built and how it's deployed. The structural-ethics position argues these factors dominate over individual choice: even ethical engineers working in companies with harmful business models can't fix those models by personal choice. Addressing structural factors through regulation, competition policy, and alternative business models is the higher-leverage intervention.`,
              audioPrompt: `Structural factors are market incentives, competitive pressures, regulatory gaps, and business models that shape what tech gets built and how it's deployed, {name}. The structural-ethics position argues that these factors dominate over individual choice in producing tech outcomes. Consider social media engagement optimization: the business model depends on maximizing user time on platform, which generates advertising revenue. This creates an incentive to amplify emotionally provocative content, because it drives engagement. Even ethical engineers working within this business model are constrained by it. They can improve specific features, but they can't change the fundamental incentive unless the business model changes. Structural factors create this dynamic: individual choices operate within a structure that largely determines the range of possible outcomes. Addressing structural factors requires structural interventions: changing what's legally allowed, changing what business models are viable, creating competitive alternatives. Shoshana Zuboff's argument is that the data-extraction business model is the structural factor most in need of change, and that individual ethics within that model is insufficient to produce different outcomes.`,
            },
          ],
        },

        {
          id: `l17-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Position 3: Domain-Specific Applied Frameworks`,
          paragraphs: [
            `The third position argues that "tech ethics" as a universal category is too vague to be useful. Different tech domains face different ethical questions that require different applied frameworks. AI ethics has different considerations than social media platform ethics, which has different considerations than biotechnology ethics. Generic principles like "be ethical" don't help much; specific frameworks for specific domains do.`,
            `The model: medical ethics. Medical ethics didn't emerge as universal philosophy; it emerged from working through specific issues (informed consent after WWII Nuremberg trials, end-of-life decisions, research ethics) and produced specific frameworks (the Belmont Report's principles of respect for persons, beneficence, justice). These frameworks have real practical power because they're tied to specific domains where they apply. Tech ethics, the argument goes, needs analogous applied development for each major domain.`,
            `Examples of domain-specific work emerging. AI safety as a field has produced specific frameworks for thinking about alignment, capability evaluations, and deployment decisions (work by Stuart Russell, Paul Christiano, and many others at organizations like Anthropic and the broader AI safety community). Algorithmic justice has produced specific tools for auditing systems for bias (Joy Buolamwini's work, the Algorithmic Justice League). Platform governance has produced specific frameworks for thinking about content moderation, speech, and community standards (academic work plus practical experiments by platforms). Biotech ethics has its own developing frameworks for CRISPR, embryo research, and similar questions.`,
            `Defenders of domain-specific frameworks include working ethicists in specific domains, AI safety researchers, healthcare technology ethicists, and many practicing technologists who find generic ethics insufficient for the specific decisions they face. The position is right that "tech ethics" generically is often too vague to guide specific decisions. Limit: pure domain-specific focus can miss patterns that cross domains; some ethical questions (privacy, autonomy, fairness) recur across many tech domains and benefit from broader frameworks; the field is still young so the domain-specific frameworks themselves are incomplete and contested.`,
          ],
          image: `/voyager-assets/future-skills/l17-s4-applied.webp`,
          imageCaption: `Position 3: applied domain-specific frameworks. Like medical ethics. AI safety, algorithmic justice, platform governance.`,
          vocab: [
            {
              word: `applied ethics`,
              definition: `Branch of ethics focused on specific domains and concrete decisions rather than abstract universal principles. Medical ethics, business ethics, environmental ethics, AI ethics are all applied ethics fields. Each has developed specific frameworks for specific questions. Often more useful than pure philosophical ethics for actually deciding what to do.`,
              audioPrompt: `Applied ethics is the branch of ethics focused on specific domains and concrete decisions rather than abstract universal principles, {name}. Medical ethics, business ethics, environmental ethics, AI ethics are all applied ethics fields. Each has developed specific frameworks for specific questions. Medical ethics has the Belmont Report's principles of respect for persons, beneficence, and justice, plus extensive case law and professional norms. Business ethics has frameworks for conflicts of interest, accounting practices, fiduciary duty. AI ethics is still developing but has emerging frameworks for alignment, evaluation, deployment. Applied ethics is often more useful than pure philosophical ethics for actually deciding what to do because it engages with the specific decisions practitioners face. The trade-off: applied ethics can miss patterns that cross domains; pure philosophical ethics can fail to translate into specific guidance.`,
            },
            {
              word: `Belmont Report`,
              definition: `1979 US government document establishing core principles for the ethics of research involving human subjects: respect for persons (autonomy, informed consent), beneficence (maximizing benefit, minimizing harm), and justice (fair distribution of benefits and burdens). Emerged from specific cases of research abuse. Represents how applied ethics develops: from specific cases to codified principles. Model for how tech ethics might develop.`,
              audioPrompt: `The Belmont Report is a 1979 US government document that established core principles for the ethics of research involving human subjects, {name}. It identified three principles: respect for persons, which means treating people as autonomous agents capable of making their own decisions, including requiring informed consent. Beneficence, which means maximizing benefit and minimizing harm. Justice, which means distributing the benefits and burdens of research fairly. The Belmont Report didn't emerge from abstract philosophy. It emerged from specific cases of research abuse, including experiments conducted during World War II that were addressed in the Nuremberg trials, and subsequent cases like the Tuskegee syphilis study in the US. Working through those specific cases produced specific principles that could guide future decisions. This is the model the domain-specific frameworks position proposes for tech ethics: not imposing abstract philosophy, but working through specific cases and producing specific principles. AI ethics, platform governance ethics, and algorithmic justice are each developing this way. The Belmont Report's principles now underpin research ethics review boards at universities and research institutions worldwide. Tech ethics advocates for analogous applied development.`,
            },
            {
              word: `AI safety`,
              definition: `Field of research focused on ensuring AI systems behave as intended, including preventing harmful or catastrophic outcomes from advanced AI. Produces specific frameworks for alignment (ensuring AI goals match human intentions), capability evaluations, and deployment decisions. Distinct from AI ethics more broadly; focused particularly on long-term and large-scale risks. Organizations include Anthropic, the Machine Intelligence Research Institute, and the Center for Human-Compatible AI.`,
              audioPrompt: `AI safety is a field of research focused on ensuring AI systems behave as intended and don't produce harmful or catastrophic outcomes, {name}. It's distinct from AI ethics more broadly, though the two overlap. AI safety focuses particularly on alignment problems: ensuring that as AI systems become more capable, their goals and behaviors continue to match human intentions rather than pursuing objectives we didn't intend. It produces specific frameworks for evaluating capabilities, for red-teaming systems to find harmful behaviors, and for deployment decisions that reduce risk. Stuart Russell at UC Berkeley has worked on the alignment problem. Paul Christiano has worked on capability evaluations and scalable oversight. Organizations like Anthropic, the Machine Intelligence Research Institute, and the Center for Human-Compatible AI have developed research programs specifically on safety. AI safety represents the domain-specific frameworks position in action: rather than applying generic ethics, it develops specific frameworks for the specific risks that advanced AI presents. The field is still young, the frameworks are incomplete and contested, and the problems are genuinely difficult. But the approach of domain-specific applied framework development is real and active.`,
            },
          ],
        },

        {
          id: `l17-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Before You Build Your Argument`,
          paragraphs: [
            `As you build your argument, notice that the three positions aren't strictly mutually exclusive. Most thoughtful thinkers acknowledge all three matter. The question is which one is most important to prioritize when designing for ethical tech outcomes. Individual ethics, structural change, and domain-specific frameworks each address different parts of the problem.`,
            `One framing to consider. Each position implies a different theory of where leverage is. Position 1 says leverage is in the people (better engineers, designers, executives produce better outcomes). Position 2 says leverage is in the structures (better markets, regulations, business models produce better outcomes). Position 3 says leverage is in the specific frameworks (better applied ethics in each domain produces better outcomes). Which theory of leverage do you think best matches how tech actually works?`,
            `Another framing. You're 12. Over the next 50 years, you'll be either building tech, working alongside it, regulating it, or being affected by it as a citizen. Your position on this question shapes how you'll engage with these systems. Even if you never work in tech, you'll be making choices as a user, voter, and community member that depend on your framing.`,
            `One last framing. Whatever position you take, the underlying skill of taking tech ethics seriously is valuable. Most adults treat tech ethics either as obvious (their preferred answer) or as too complicated to engage with. The honest engagement (acknowledging real trade-offs, taking serious thinkers seriously, recognizing where you might be wrong) is rarer and more useful than either extreme.`,
          ],
          image: `/voyager-assets/future-skills/l17-s5-before.webp`,
          imageCaption: `Three positions, different theories of leverage. Your framing shapes 50 years of engagement with tech.`,
          vocab: [
            {
              word: `theory of leverage`,
              definition: `Implicit or explicit belief about where in a system small interventions produce the biggest effects. In tech ethics: leverage might be in individuals (Position 1), structures (Position 2), or domain-specific frameworks (Position 3). Different theories of leverage suggest different practical strategies. Knowing your theory of leverage helps you focus effort where it matters most.`,
              audioPrompt: `A theory of leverage is an implicit or explicit belief about where in a system small interventions produce the biggest effects, {name}. The concept comes from systems thinking (Donella Meadows wrote about leverage points). Applied to tech ethics: different positions suggest different theories of leverage. If you believe leverage is in individuals, you focus on engineer ethics, hiring better people, professional codes. If you believe leverage is in structures, you focus on regulation, markets, business model change. If you believe leverage is in domain-specific frameworks, you focus on developing applied ethics for AI, social media, biotech, and other specific areas. Different theories of leverage produce different practical strategies. Knowing your own theory makes your strategy more deliberate and effective.`,
            },
            {
              word: `techno-optimism`,
              definition: `Reflexive positive stance toward technology: innovation is always good, costs should be ignored, resistance to new technology is irrational or reactionary. Opposite of reflexive techno-pessimism. Both oversimplify. Real tech ethics engagement means engaging with specific cases and specific trade-offs rather than either reflexive position. Techno-optimism can enable ignoring genuine harms in the name of progress.`,
              audioPrompt: `Techno-optimism is a reflexive positive stance toward technology: innovation is always good, technology improves lives, costs should be ignored, and resistance to new technology is irrational or reactionary, {name}. It's the "don't be a luddite" argument taken to its reflexive extreme. The honest version of this concern is real: some opposition to technology is rooted in fear of change rather than rational assessment of trade-offs. But reflexive techno-optimism overcorrects. It treats "this technology produces benefits" as a sufficient answer to "this technology also produces specific harms." Benefits and harms are both real. Tech ethics requires engaging with both. The parallel error is reflexive techno-pessimism: "everything tech does is harmful, return to simpler times." Both reflexive positions substitute a bias for actual analysis of specific cases, specific trade-offs, and specific outcomes. Real engagement with tech ethics requires resisting both reflexes. Neither innovation nor reaction is automatically correct. The question is always: what are the actual trade-offs in this specific case, and how should they be weighed?`,
            },
            {
              word: `honest engagement`,
              definition: `Approach to tech ethics that acknowledges real trade-offs, takes serious thinkers seriously, and recognizes where you might be wrong. Rarer and more useful than either reflexive techno-optimism or reflexive techno-pessimism. Requires naming what's actually being traded off, taking the strongest version of opposing arguments, and being transparent about uncertainty rather than defending a predetermined position.`,
              audioPrompt: `Honest engagement with tech ethics means acknowledging real trade-offs, taking serious thinkers seriously, and recognizing where you might be wrong, {name}. Most adults treat tech ethics either as obvious, they know the right answer and only fools would disagree, or as too complicated to engage with, so they defer to whoever presents themselves as an authority. Honest engagement is rarer than either extreme. It involves naming what's actually being traded off. Privacy vs convenience: be specific about which users lose what privacy for what convenience gain. Free speech vs harm reduction: be specific about which speech is being moderated and what harm is being reduced. Honest engagement takes the strongest version of arguments you disagree with. The individual-ethics position is stronger than its critics often acknowledge. The structural-ethics position is stronger than its critics often acknowledge. The applied-frameworks position has real limits and real strengths. Honest engagement recognizes where you might be wrong, which is uncomfortable but more reliable than confident certainty. Over 50 years of engaging with technology as a citizen, worker, voter, and possibly builder, the habit of honest engagement produces better decisions than either reflexive stance.`,
            },
          ],
        },

        // ───── ARGUMENT BUILDER ───────────────────────────────────────────────
        {
          id: `l17-argument-builder`,
          type: `argument-builder`,
          headline: `How Should We Think About Tech Ethics?`,
          intro: `Pick the position that best captures your thinking. Build your case with 3-4 pieces of evidence. Then respond to the strongest counterargument. Serious thinkers defend each.`,
          positions: [
            {
              id: `individual-ethics`,
              label: `Individual ethics dominates: people who build and deploy tech have personal responsibility`,
              summary: `Engineers, designers, product managers, executives have personal ethical obligations that don't disappear because they're acting through a company. "I just built the tool" defense is inadequate. Defenders include working engineering ethicists, ACM and IEEE professional codes, philosophers who treat institutions as composed of individuals, tech workers who organize ethically (e.g., the Timnit Gebru case at Google 2020). Strong argument: individuals have real ethical agency; professional ethics works in other fields like medicine. Limit: individual ethics alone can't solve problems from market structures, regulatory gaps, competitive pressures.`,
            },
            {
              id: `structural-ethics`,
              label: `Structural ethics dominates: markets, regulations, and business models shape what gets built`,
              summary: `Most harmful tech outcomes emerge from structural factors: incentives that reward engagement over accuracy, competitive pressures that punish careful development, business models that depend on extracting value from users. Addressing structure matters more than individual ethical engineers in broken structures. Defenders include Shoshana Zuboff (Age of Surveillance Capitalism, 2019), EU regulators (GDPR, EU AI Act), antitrust researchers. Strong argument: some problems are systemic and require systemic fixes. Limit: structural focus can absolve individual responsibility; regulation lags innovation; bad regulation can produce worse outcomes; right structural fix is often unclear.`,
            },
            {
              id: `applied-frameworks`,
              label: `Applied domain-specific frameworks: like medical ethics, develop specific frameworks for each tech domain`,
              summary: `"Tech ethics" generically is too vague to guide specific decisions. Different domains face different ethical questions requiring different frameworks. AI ethics, social media ethics, biotech ethics each need their own applied development (parallel to medical ethics, which developed from specific cases into specific frameworks like the Belmont Report). Defenders include working ethicists in specific domains, AI safety researchers (Stuart Russell, Paul Christiano), algorithmic justice researchers (Joy Buolamwini), platform governance researchers. Strong argument: applied ethics works in other fields; generic ethics is often too vague. Limit: pure domain-specific can miss cross-domain patterns; the frameworks are still young and contested.`,
            },
          ],
          evidence: [
            {
              id: `e1`,
              text: `Professional ethics codes work in fields like medicine, civil engineering, and law. The Hippocratic Oath, professional engineering licensing, bar rules — all create real accountability for individual professionals. Software lacks similar formal structures but the underlying principle of professional responsibility transfers.`,
              source: `Comparative analysis of professional ethics across fields`,
            },
            {
              id: `e2`,
              text: `Cathy O'Neil's "Weapons of Math Destruction" (2016) documented how mathematical models can produce harm at scale even without anyone intending it. Predictive policing, hiring algorithms, criminal sentencing tools all encoded unfairness through their design choices. Individual engineers building these systems often didn't realize the broader effects.`,
              source: `O'Neil 2016; subsequent algorithmic fairness research`,
            },
            {
              id: `e3`,
              text: `Shoshana Zuboff's "Age of Surveillance Capitalism" (2019) argued that data-extraction business models create incentives producing harm regardless of individual ethics within companies. Even well-intentioned employees are constrained by what the business model requires for survival. Changing structure matters more than improving individuals within a broken structure.`,
              source: `Zuboff 2019; subsequent regulatory and academic engagement`,
            },
            {
              id: `e4`,
              text: `EU's GDPR (2018) and AI Act (2024) attempt to constrain what companies can legally do regardless of company-level ethics. The bet: laws can address structural problems individual companies can't or won't fix. Effectiveness is contested but the approach reflects a serious philosophical position about where leverage lies.`,
              source: `EU regulatory framework; ongoing analyses`,
            },
            {
              id: `e5`,
              text: `Medical ethics didn't emerge as universal philosophy; it emerged from specific cases (Nuremberg trials, end-of-life decisions, research ethics) producing specific frameworks (Belmont Report's principles). The applied approach has real practical power. Tech ethics may need analogous domain-specific development.`,
              source: `History of medical ethics; Belmont Report 1979`,
            },
            {
              id: `e6`,
              text: `AI safety as a field has produced specific frameworks for alignment, capability evaluation, and deployment that generic ethics couldn't provide. Stuart Russell's work on AI alignment, Paul Christiano's work on capability evaluations, and broader AI safety research generate specific guidance for specific decisions.`,
              source: `AI safety research; multiple sources`,
            },
            {
              id: `e7`,
              text: `Timnit Gebru's 2020 firing from Google after raising AI ethics concerns illustrated that individual ethical agency in tech companies has real limits when it conflicts with employer interests. Some structural change may be needed to make individual ethics actually effective.`,
              source: `Documented case history; tech worker organizing literature`,
            },
            {
              id: `e8`,
              text: `Joy Buolamwini's Algorithmic Justice League documented facial recognition bias and produced both specific technical tools for auditing systems and broader advocacy. The work is both individual (specific researcher decisions) and structural (changing what companies do) and applied (developing domain-specific tools). The three positions blend in practice.`,
              source: `Algorithmic Justice League work; Buolamwini's research`,
            },
          ],
          counterargument: {
            id: `counter`,
            text: `"You picked your position. Here's the strongest objection. All three positions assume there's a coherent enterprise called 'tech ethics' to do at all. But maybe 'tech ethics' is itself a misframing. Technologies are made by people and used by people. The ethics of those uses are just regular ethics applied to specific situations. Treating 'tech ethics' as its own field can make it feel more complicated and specialized than it needs to be, which can produce paralysis rather than action. Why think 'tech ethics' is a useful category at all, rather than just being clear about who's harming whom in specific cases using whatever tools are involved?"`,
            promptInstruction: `In 3-4 sentences, respond. Is "tech ethics" a useful category, or just regular ethics applied to tech cases? How does your position handle this challenge?`,
          },
          reflectionPrompt: `Looking at the positions you didn't pick, which has the strongest argument that you'd find hardest to dismiss? Why?`,
        },

        {
          id: `l17-quiz`,
          type: `quiz`,
          headline: `Check your understanding`,
          questions: [
            {
              id: `q1`,
              type: `multiple-choice`,
              question: `Why is tech ethics genuinely hard rather than obvious?`,
              options: [
                `It's new`,
                `Difficult questions involve trade-offs between legitimate goods (privacy vs convenience, free speech vs harm reduction, innovation speed vs safety); tech differs from older ethical questions in speed, scale, compounding, and opacity; reasonable people prioritize differently`,
                `Tech people are bad`,
                `Random complexity`,
              ],
              correctIndex: 1,
              explanation: `The "obvious" answers usually only feel obvious because the person stating them isn't engaging with what's actually being traded off. Real engagement with tech ethics means engaging with specific cases, trade-offs, and frameworks rather than reflexive techno-optimism or techno-pessimism.`,
            },
            {
              id: `q2`,
              type: `multiple-choice`,
              question: `What is "algorithmic harm"?`,
              options: [
                `Math problems`,
                `Pattern documented by Cathy O'Neil, Joy Buolamwini, and others: algorithmic systems can produce harmful outcomes at scale even without anyone intending harm; examples include biased facial recognition, discriminatory loan algorithms, amplification of misinformation; harm emerges from system design and deployment`,
                `Random errors`,
                `Computer bugs`,
              ],
              correctIndex: 1,
              explanation: `Algorithmic harm is distinct from individual bad actors. Nobody at the company necessarily wanted these outcomes. Recognizing this pattern as its own ethical concern, distinct from individual malice, is one of the key insights of contemporary tech ethics.`,
            },
            {
              id: `q3`,
              type: `multiple-choice`,
              question: `What does the "individual ethics dominates" position argue?`,
              options: [
                `One person matters`,
                `Engineers, designers, executives have personal ethical obligations that don't disappear because they're acting through a company; "I just built the tool" defense inadequate; defenders include working engineering ethicists, ACM/IEEE codes, tech workers organizing ethically; supported by parallels to medical ethics, civil engineering licensing`,
                `Companies don't matter`,
                `Random framing`,
              ],
              correctIndex: 1,
              explanation: `The position is right that individuals have real ethical agency and "the company decided" isn't an automatic defense. Limit: individual ethics alone can't solve problems from market structures, regulatory gaps, competitive pressures.`,
            },
            {
              id: `q4`,
              type: `multiple-choice`,
              question: `What is "surveillance capitalism" (Zuboff)?`,
              options: [
                `Spying for profit`,
                `Term coined by Shoshana Zuboff in 2019; economic system in which companies extract personal data from users and use it for prediction and behavioral influence; argument is that this business model creates incentives producing harm regardless of individual ethics within companies; influential but contested framework`,
                `Government surveillance`,
                `Marketing tactics`,
              ],
              correctIndex: 1,
              explanation: `Zuboff's argument: changing the business model (through regulation, competition policy, alternative models) matters more than improving the ethics of individuals working within it. Framework is contested; some critics argue it overstates structural inevitability.`,
            },
            {
              id: `q5`,
              type: `multiple-choice`,
              question: `What's the EU regulatory approach to tech ethics?`,
              options: [
                `No regulation`,
                `GDPR (2018) and EU AI Act (2024) attempt to constrain what companies can legally do regardless of company-level ethics; the bet is that laws can address structural problems individual companies can't or won't fix; effectiveness contested but reflects a serious philosophical position about where leverage lies`,
                `Heavy taxation`,
                `Ban all tech`,
              ],
              correctIndex: 1,
              explanation: `The EU approach represents the structural-ethics position in practice. Different from US approach which tends to favor industry self-regulation. Real-world test of which theory of leverage produces better outcomes.`,
            },
            {
              id: `q6`,
              type: `multiple-choice`,
              question: `What's the model for "domain-specific applied frameworks"?`,
              options: [
                `Software development`,
                `Medical ethics, which emerged not as universal philosophy but from specific cases (Nuremberg trials, end-of-life decisions, research ethics) producing specific frameworks (Belmont Report's principles of respect for persons, beneficence, justice); applied approach has real practical power; tech ethics may need analogous development`,
                `Legal ethics`,
                `Generic philosophy`,
              ],
              correctIndex: 1,
              explanation: `The medical ethics analogy is the strongest argument for the applied-frameworks position. Medical ethics didn't try to produce universal principles first; it engaged with specific cases and developed specific frameworks. AI safety, algorithmic justice, platform governance are early applied frameworks in tech.`,
            },
            {
              id: `q7`,
              type: `multiple-choice`,
              question: `Who is Joy Buolamwini and what did she document?`,
              options: [
                `Random researcher`,
                `Algorithmic Justice League founder; researcher who documented bias in facial recognition systems (e.g., works less accurately on darker skin tones); produced both specific technical tools for auditing systems and broader advocacy; her work blends individual ethics, applied frameworks, and structural change`,
                `AI engineer`,
                `Tech policy researcher`,
              ],
              correctIndex: 1,
              explanation: `Buolamwini's work illustrates how the three positions blend in practice. Individual ethics (her specific decisions to study this), applied frameworks (specific tools for auditing facial recognition), structural change (advocacy for changing what companies do). Real tech ethics work usually crosses positions.`,
            },
            {
              id: `q8`,
              type: `multiple-choice`,
              question: `What is "applied ethics"?`,
              options: [
                `Ethics homework`,
                `Branch of ethics focused on specific domains and concrete decisions rather than abstract universal principles; medical ethics, business ethics, environmental ethics, AI ethics are all applied ethics fields; each has specific frameworks for specific questions; often more useful than pure philosophical ethics for deciding what to do`,
                `Practical philosophy`,
                `Ethics in action`,
              ],
              correctIndex: 1,
              explanation: `The trade-off: applied ethics can miss patterns that cross domains; pure philosophical ethics can fail to translate into specific guidance. Both have real uses. AI ethics is currently in active development as an applied ethics field.`,
            },
            {
              id: `q9`,
              type: `true-false`,
              question: `True or false: One of the three positions is clearly correct and the others are wrong.`,
              correctAnswer: false,
              explanation: `False. Each position has serious defenders and real strengths/limits. Most thoughtful thinkers acknowledge all three matter. The question is which one is most important to prioritize. The honest answer involves recognizing that individual ethics, structural change, and domain-specific frameworks all address different parts of the problem.`,
            },
            {
              id: `q10`,
              type: `inference`,
              question: `Your friend says "All these tech ethics debates are useless. People just need to choose to use tech responsibly." Based on this lesson, what's the most useful response?`,
              options: [
                `"You're right"`,
                `"That's roughly position 1 (individual ethics dominates), and it's a defensible position but it has real limits. Many tech harms emerge from structural factors (market incentives, business models, regulatory gaps) that individual choices can't fully address. The most ethical engineer working for a company with a fundamentally harmful business model can't fix the business model by personal choice. Similarly, individual users 'choosing responsibly' can't fix algorithmic amplification of misinformation, biased facial recognition systems, or surveillance capitalism business models. Cathy O'Neil and Shoshana Zuboff have documented these structural patterns at length. Individual ethics is necessary but not sufficient. Real tech ethics engagement involves taking the structural side seriously too, even if you ultimately weight individual ethics more heavily."`,
                `"Tech is evil"`,
                `"Don't think about it"`,
              ],
              correctIndex: 1,
              explanation: `Real applied tech ethics literacy. Don't dismiss the friend; identify their position as defensible but limited. Walk through the structural arguments seriously. This is how productive engagement with tech ethics looks rather than reflexive agreement or dismissal.`,
            },
          ],
        },

        {
          id: `l17-reflection`,
          type: `reflection`,
          headline: `Sit with this`,
          intro: `Pick the prompt that pulls at you most. Your answer is saved.`,
          prompts: [
            { id: `reflect-cognitive`, category: `Cognitive`, prompt: `Before this lesson, what was your default framing on tech ethics? Has anything shifted?` },
            { id: `reflect-meta`, category: `Metacognitive`, prompt: `Which position do you find emotionally appealing vs intellectually convincing? Are they the same?` },
            { id: `reflect-identity`, category: `Identity`, prompt: `If you become someone who engages seriously with tech ethics over a 50-year career and citizenship, what does that change about your impact on the world?` },
            { id: `reflect-application`, category: `Application`, prompt: `Pick one specific tech you use daily (social media, search, AI tools). Apply the three positions. What does each suggest about ethical engagement with this specific technology?` },
            { id: `reflect-critical`, category: `Critical`, prompt: `Are there tech ethics questions the three positions don't capture well? What about questions about long-term existential risks? Questions about cultural impacts?` },
            { id: `reflect-personal`, category: `Personal investigation`, prompt: `Read one specific working tech ethicist (Cathy O'Neil, Shoshana Zuboff, Joy Buolamwini, Timnit Gebru). Notice how their framing differs from pop tech-ethics commentary.` },
          ],
        },

        {
          id: `l17-real-world`,
          type: `real-world`,
          headline: `Take it into your life`,
          guideContext: `Tech ethics shapes the world you'll live in. Two paths.`,
          familyActivity: {
            title: `The Family Tech Ethics Conversation`,
            duration: `45 minutes`,
            description: `Share the three positions. Then pick one specific technology your family uses (a platform, an app, an AI tool). Walk through the three positions on this specific technology. Do family members weight individual vs structural vs applied frameworks differently? The conversation often surfaces real disagreements about responsibility and produces more nuanced engagement with daily tech use.`,
          },
          projectOption: {
            title: `Read One Real Tech Ethics Book, 4 weeks (optional)`,
            duration: `4 weeks, ~30 minutes per session`,
            description: `Pick one: Cathy O'Neil's "Weapons of Math Destruction" (2016, accessible at 12), Stuart Russell's "Human Compatible" (2019, on AI safety), or Joy Buolamwini's "Unmasking AI" (2023, on algorithmic justice). Read carefully over 4 weeks. Write 2,000 words on what you learned and which position the author's work supports most. Real applied tech ethics engagement at a level most adults haven't reached.`,
            offerToParent: `Parent: opt your kid into this project. Reading a real tech ethics book at 12 is genuinely formative for how they'll engage with technology over their lifetime.`,
          },
          identityQuestion: `If you become someone who engages thoughtfully with tech ethics throughout your career and citizenship, what does that change about the kind of impact you can have on the technologies shaping your generation?`,
        },

        {
          id: `l17-identity-hook`,
          type: `identity-hook`,
          headline: `Who is this lesson making you?`,
          prompt: `One sentence. No wrong answer.`,
          placeholder: `Someone who...`,
          examples: [
            `Someone who can articulate three serious positions on tech ethics.`,
            `A person who takes both individual and structural responsibility seriously.`,
            `Someone willing to engage with hard ethical trade-offs instead of pretending answers are obvious.`,
          ],
          saveKey: `identity_responses_fs_11_12_17`,
        },

        {
          id: `l17-celebration`,
          type: `celebration`,
          guideText: `{name}. Seventeenth Future Skills lesson done. You can now articulate three serious positions on tech ethics (individual / structural / applied frameworks), know the working ethicists doing real research (O'Neil, Zuboff, Buolamwini, Gebru, Russell), understand algorithmic harm as a documented pattern, and engage with these questions at a level most adults don't. Next time we go into a related applied question: how to think about your own career path in a world where the rules are changing. Three sources, source evaluation format. Let's go. — Byte`,
          badge: `tech-ethicist`,
          badgeName: `Tech Ethicist`,
          xpEarned: 75,
          competencies: [
            `Articulates three positions on tech ethics (individual, structural, applied frameworks)`,
            `Knows major working ethicists: O'Neil, Zuboff, Buolamwini, Gebru, Russell`,
            `Recognizes algorithmic harm as documented pattern`,
            `Understands surveillance capitalism as a framework (Zuboff)`,
            `Engages with trade-offs in tech ethics without collapsing to obvious answers`,
          ],
          nextLessonPreview: {
            title: `Lesson 18: Career Paths in a Changing World`,
            hook: `How to think about careers when the rules are changing. Three sources. Source Evaluation.`,
          },
        },
      ],
    },
  ],
};

export default FUTURESKILLS_VOYAGER_L17;

if (import.meta.env?.DEV) {
  const l = FUTURESKILLS_VOYAGER_L17.lessons[0];
  const mags = l.screens.filter((s) => s.type === `magazine`).length;
  const argEvi = l.screens.find((s) => s.type === `argument-builder`)?.evidence?.length ?? 0;
  const quiz = l.screens.find((s) => s.type === `quiz`)?.questions?.length ?? 0;
  const reflect = l.screens.find((s) => s.type === `reflection`)?.prompts?.length ?? 0;
  console.log(
    `[LESSON-FS-VOYAGER-L17 ${VERSION}] "${l.title}" — ${mags} magazine, argument-builder w/ ${argEvi} evidence, ${quiz} quiz, ${reflect} reflection`
  );
}
