// ─────────────────────────────────────────────────────────────────────────────
// LIFE WELLNESS VOYAGER  |  L07 — Habits and Behavior Change
// Age band : voyagers (11-12)   Guide: terra (Wolf)
// Standards: Coreverse Original — Behavior Science, Source Evaluation
// CALIBRATED: Voyager spec v1.1 (May 2026)
// Interaction format: SOURCE EVALUATION (peer-reviewed / serious popular / viral monetized)
// ─────────────────────────────────────────────────────────────────────────────

const VERSION = "voyager-lw-l07-v1";

const LIFEWELLNESS_VOYAGER_L07 = {
  ageBand: `voyagers`,
  subjectId: `life-wellness`,
  guide: `terra`,

  lessons: [
    {
      id: `lw-11-12-07`,
      title: `Habits and Behavior Change`,
      duration: 35,
      xpReward: 75,
      badge: `change-literate`,
      badgeName: `Change Literate`,

      screens: [
        {
          id: `l07-welcome`,
          type: `welcome`,
          guideText: `{name}, the habits industry is enormous and largely untested. Atomic Habits sold 15 million copies. James Clear is not a psychologist. This lesson teaches you to evaluate the claims — what the actual behavioral science says about habit formation, and how to read the three types of sources you'll encounter on this topic: peer-reviewed research, serious popular books, and viral self-help content.`,
          headline: `Habits and Behavior Change`,
          subtitle: `Three sources. Distinguishing real research from popular synthesis from viral content.`,
          visual: `/voyager-assets/life-wellness/l07-welcome.webp`,
        },

        {
          id: `l07-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `What Real Research Shows About Habits`,
          paragraphs: [
            `Start with what the research actually establishes. Habits are behaviors that occur automatically in response to specific contextual cues, with reduced conscious deliberation. Wendy Wood at USC has done some of the most extensive research on habits over decades; her synthesis is one of the most rigorous available. Habits are roughly distinct from goal-directed behavior in their neurological mechanisms and in how change happens.`,
            `Specific research findings that hold up. Habit formation timing varies widely between people and behaviors. The "21 days" claim has no research basis (it came from a 1960 plastic surgery book by Maxwell Maltz observing patients adjusting to changed appearances, not from habit research). The actual research on habit formation by Phillippa Lally and colleagues (2010) found median time to habit automaticity of around 66 days, with a wide range from about 18 days to over 250 days depending on the behavior and individual. Simple behaviors form habits faster than complex ones.`,
            `Context matters enormously. Habits are linked to specific contextual cues (time of day, location, preceding action, emotional state). Changing context disrupts habits both for good and ill: people who move to new places have a window to install new habits that's harder once they settle in. Habit research repeatedly shows that environment design beats willpower for habit change; the same person makes very different choices in different environments.`,
            `BJ Fogg at Stanford developed the Tiny Habits methodology and the Fogg Behavior Model: behavior happens when motivation, ability, and prompt come together at the same moment. The implications are practical: rather than relying on motivation (which fluctuates), make behaviors easier (high ability) and link them to existing routines (clear prompts). Tiny behaviors that succeed reliably are more powerful than ambitious behaviors that fail repeatedly.`,
            `One important distinction the research draws. Habits (automatic, cue-driven, low-conscious-deliberation) work well for behaviors you want happening consistently without thinking. Goal-directed behaviors (conscious, deliberative, flexible) work better for situations requiring judgment. Treating everything as a habit can backfire when judgment is needed; treating everything as goal-directed exhausts decision-making capacity. Real behavior change uses both.`,
          ],
          image: `/voyager-assets/life-wellness/l07-s1-research.webp`,
          imageCaption: `Real habit research: Wendy Wood, BJ Fogg, Lally et al. "21 days" is myth (median is 66 days, wide range). Context matters more than willpower. Tiny behaviors beat ambitious ones.`,
          vocab: [
            {
              word: `habit research`,
              definition: `Established research findings on habits. Habits are automatic, cue-driven behaviors with low conscious deliberation; distinct from goal-directed behavior. Wendy Wood (USC) synthesizes extensive research. Lally et al 2010: median time to habit automaticity ~66 days (range 18-250+); "21 days" is myth. BJ Fogg (Stanford): behavior = motivation + ability + prompt; tiny habits succeeding reliably beat ambitious ones failing. Environment design beats willpower; context shapes behavior more than people realize.`,
              audioPrompt: `Habit research from Wendy Wood at USC, BJ Fogg at Stanford, Phillippa Lally, and others has established several key findings, {name}. Habits are behaviors that occur automatically in response to specific contextual cues, with reduced conscious deliberation. They're distinct from goal-directed behavior in their neurological mechanisms and how change happens. The "21 days to form a habit" claim has no research basis. It came from a 1960 plastic surgery book by Maxwell Maltz observing patients adjusting to changed appearances, not from habit research. Phillippa Lally and colleagues' 2010 study found median time to habit automaticity of around 66 days, with a wide range from about 18 days to over 250 days depending on the behavior and individual. Context matters enormously. Habits are linked to specific contextual cues including time of day, location, preceding action, emotional state. Habit research repeatedly shows that environment design beats willpower for habit change. BJ Fogg developed the Tiny Habits methodology and the Fogg Behavior Model: behavior happens when motivation, ability, and prompt come together at the same moment. Tiny behaviors that succeed reliably are more powerful than ambitious behaviors that fail repeatedly.`,
            },
            {
              word: `Fogg Behavior Model`,
              definition: `A framework from BJ Fogg at Stanford stating that behavior happens when motivation, ability, and prompt come together at the same moment. The practical implication is that rather than relying on motivation — which fluctuates — effective behavior change makes behaviors easier (increases ability) and links them to existing routines (creates clear prompts). Tiny behaviors that succeed reliably are more powerful than ambitious behaviors that repeatedly fail.`,
              audioPrompt: `The Fogg Behavior Model is a framework from BJ Fogg at Stanford that describes what must be present for behavior to happen, {name}. Terra here — the model states that behavior occurs when three things come together at the same moment: motivation, ability, and prompt. Motivation is the desire or willingness to do the behavior. Ability is how easy or difficult the behavior is to perform. Prompt is the trigger or cue that initiates the behavior at the right time. The practical implications follow directly from the model. Relying on motivation alone fails because motivation fluctuates. When you feel motivated, you can do hard things; when you don't, you won't. A behavior that requires high motivation to execute will be done inconsistently. Instead, Fogg's Tiny Habits approach focuses on making behaviors easier — increasing ability — so that even modest motivation is sufficient. And it links new behaviors to existing routines — clear prompts — so that the cue happens reliably rather than waiting for willpower. The result: tiny behaviors that succeed reliably build more durable practice than ambitious behaviors that feel impossible when motivation is low. This connects directly to Wendy Wood's finding that environment design beats willpower: both frameworks point toward making desired behaviors easier and unavoidable rather than relying on motivation that varies.`,
            },
            {
              word: `environment design`,
              definition: `The practice of structuring one's physical and social context to make desired behaviors easier and undesired behaviors harder, without relying on willpower. Wendy Wood's research repeatedly finds that environment design is more effective for habit change than motivation or deliberate effort. Habit research shows that context — time of day, location, preceding actions — shapes behavior more powerfully than most people realize.`,
              audioPrompt: `Environment design is the practice of structuring your physical and social context to make desired behaviors easier and undesired behaviors harder, {name}. Terra here — Wendy Wood's research at USC repeatedly finds this to be more effective for habit change than motivation or willpower. The text makes this explicit: habit research shows that environment design beats willpower. The mechanism is that habits are automatically triggered by contextual cues — time of day, location, preceding actions, emotional state. The same person makes very different choices in different environments. Put healthy food at eye level in the refrigerator and you eat more of it. Put the phone in another room at night and you sleep better. Put workout clothes next to the bed and you exercise more often. None of these changes require more motivation; they change the environment so that the desired behavior is the path of least resistance. Conversely, people who move to new places have a window to install new habits that is harder once they settle in — because the new environment hasn't yet formed automatic cues for old patterns. This also explains why trying to change behavior through willpower alone often fails: the environment keeps sending the same cues that triggered the old behavior, making resistance the thing requiring constant effort.`,
            },
          ],
        },

        {
          id: `l07-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Why Source Evaluation Matters`,
          paragraphs: [
            `Behavior change is a topic where the gap between rigorous research and popular content is particularly wide. Real research is technical, nuanced, full of caveats and conditions. Popular content (books, podcasts, articles) often translates research into actionable advice with varying fidelity to the original findings. Viral content (social media, influencer videos, monetized courses) often invents claims, presents anecdotes as research, or extracts narrow findings from research and presents them as universal principles.`,
            `Three categories of sources are worth distinguishing. Peer-reviewed research is the foundation: studies published in academic journals after expert review, with methods you can scrutinize and findings you can check. The standard isn't perfect (replication crises have shown real problems in some fields) but it's the most accountable form of knowledge production we have. Serious popular synthesis is the middle category: books and articles by authors who engage seriously with research, often academics or science writers, that translate findings for general audiences. These can be excellent but vary widely in fidelity; even good popular books often simplify or extend research in ways that go beyond what the underlying evidence supports. Viral monetized content is the third category: social media posts, influencer videos, online courses optimized for engagement and revenue rather than accuracy. The economic model is the opposite of peer review; what spreads gets monetized regardless of whether it's true.`,
            `The skill of distinguishing these matters across every wellness topic. Sleep, nutrition, exercise, mental health, productivity, relationships, meaning all have the same three tiers of content, with the same gap between rigorous research and viral content. Building source evaluation skills now means you can navigate the rest of the wellness landscape across decades.`,
            `What specific markers distinguish the categories. Peer-reviewed research typically includes specific methodology, sample sizes, statistical analyses, limitations sections, citations to other research, and conclusions hedged appropriately. Serious popular synthesis typically engages with research seriously, includes citations to studies, acknowledges complexity, and identifies authors who can be checked. Viral monetized content typically promises dramatic transformation, lacks citations to specific research (or cites research without engaging with its actual findings), uses anecdotes as evidence, emphasizes the author's authority/success rather than methodological rigor, and sells products or services.`,
            `One critical pattern. The wellness industry has learned to mimic the surface features of serious content. Influencer videos cite "studies" without specifying which ones. Courses use academic-sounding language. Podcasts have credentialed-sounding guests. The deeper markers of rigor (specific methodology, hedged conclusions, acknowledgment of complexity) are harder to fake. Looking for those markers protects against sophisticated mimicry.`,
          ],
          image: `/voyager-assets/life-wellness/l07-s2-evaluation.webp`,
          imageCaption: `Three source categories: peer-reviewed research, serious popular synthesis, viral monetized content. Markers of rigor: specific methodology, hedged conclusions, acknowledgment of complexity.`,
          vocab: [
            {
              word: `source evaluation tiers`,
              definition: `Three categories of wellness/behavior content. Tier 1: peer-reviewed research (academic journals, expert review, specific methodology, hedged conclusions). Tier 2: serious popular synthesis (books/articles by authors engaging with research seriously, often academics or science writers; vary in fidelity but engage with evidence). Tier 3: viral monetized content (social media, influencer videos, online courses optimized for engagement and revenue rather than accuracy; promise dramatic transformation, use anecdotes as evidence, lack specific citations). Skill of distinguishing applies across every wellness topic.`,
              audioPrompt: `Source evaluation involves distinguishing three categories of wellness and behavior content, {name}. Tier 1 is peer-reviewed research: studies published in academic journals after expert review, with methods you can scrutinize and findings you can check. The standard isn't perfect (replication crises have shown real problems in some fields), but it's the most accountable form of knowledge production we have. Tier 2 is serious popular synthesis: books and articles by authors who engage seriously with research, often academics or science writers, that translate findings for general audiences. These can be excellent but vary widely in fidelity; even good popular books often simplify or extend research in ways that go beyond what the underlying evidence supports. Tier 3 is viral monetized content: social media posts, influencer videos, online courses optimized for engagement and revenue rather than accuracy. The economic model is the opposite of peer review; what spreads gets monetized regardless of whether it's true. Markers of rigor include specific methodology, hedged conclusions, acknowledgment of complexity. Looking for these markers protects against sophisticated mimicry.`,
            },
            {
              word: `peer-reviewed research`,
              definition: `Studies published in academic journals after review by expert peers in the field, with methods described in enough detail to scrutinize and findings checked against the data. The text identifies peer-reviewed research as the most accountable form of knowledge production available, while acknowledging its limits: replication crises have shown real problems in some fields, and peer-reviewed research often focuses on narrow questions without giving practical guidance.`,
              audioPrompt: `Peer-reviewed research is the publication system in which studies are reviewed by expert peers in a field before being published in academic journals, {name}. Terra here — the text identifies it as the most accountable form of knowledge production we have. The peer review process requires that methods be described in enough detail for other researchers to scrutinize, that findings be checked against the data, and that claims be evaluated by experts who can identify problems before publication. The result is not perfect — the text explicitly acknowledges that replication crises have shown real problems in some fields, meaning published findings have sometimes failed to replicate when other researchers tried to reproduce them. But the accountability structure of peer review is qualitatively different from content produced for engagement metrics. A researcher who falsifies findings or overstates conclusions faces professional consequences; an influencer who overstates claims often faces no consequences and may gain followers. Markers of peer-reviewed research include specific methodology described, sample sizes and statistical analyses reported, limitations sections acknowledging what the study cannot show, hedged conclusions that don't extend beyond what the data supports, and citations to other research that can be checked. Learning to recognize these markers is the foundation of source evaluation.`,
            },
            {
              word: `replication crisis`,
              definition: `A problem identified across several research fields in which published peer-reviewed findings have failed to replicate when other researchers attempted to reproduce them — meaning the original findings may have been false positives, due to small samples, publication bias, or other methodological issues. The text acknowledges this as a real limit of peer-reviewed research while maintaining that peer review is still the most accountable knowledge production system available.`,
              audioPrompt: `The replication crisis refers to a problem identified across several research fields in which published peer-reviewed findings have failed to hold up when other researchers attempted to reproduce them, {name}. Terra here — the text acknowledges this directly as a real limit of peer-reviewed research. The problem has been documented most visibly in psychology, where systematic attempts to replicate published studies found that a substantial proportion failed to replicate — meaning the original finding may have been a false positive rather than a real effect. The causes are several: studies with small sample sizes are more likely to produce false positives by chance; publication bias means studies with positive findings are more likely to be published than studies that found nothing; researcher degrees of freedom in analysis allow flexible choices that can produce publishable findings from noisy data. The replication crisis has led to improvements in research practice — pre-registration of studies, larger samples, more transparent reporting — but it has not been fully resolved. The text uses this as context for treating peer-reviewed research as the best available standard while still maintaining appropriate skepticism. The fact that peer review has produced replication problems does not make it equivalent to viral content with no accountability; it means treating peer-reviewed findings as evidence to be weighed, not as final truth.`,
            },
          ],
        },

        {
          id: `l07-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `The Three Sources You'll Evaluate`,
          paragraphs: [
            `The source evaluation activity that follows presents three sources on habits and behavior change. Each makes claims about how behavior actually changes. Your job is to evaluate which is most rigorous and why, while noting what each source gets right and wrong.`,
            `Source A is from Wendy Wood's research synthesis on habit formation. Wood is a Provost Professor of Psychology and Business at USC who has spent decades studying habits using experimental and longitudinal methods. Her work is published in top peer-reviewed psychology journals. Her 2019 book "Good Habits, Bad Habits" synthesizes her research and others' for a general audience while maintaining engagement with original studies. This represents serious peer-reviewed research engaged with popular synthesis.`,
            `Source B is from James Clear's "Atomic Habits" (2018), one of the bestselling popular books on habits. Clear is a writer and speaker, not an academic researcher; the book synthesizes research from multiple researchers (including some of the figures whose work you've already encountered in this lesson) and packages it as a practical framework. The book has substantial strengths (engages with real research, names actual researchers, presents specific actionable frameworks) and real limits (sometimes overgeneralizes from narrow findings, occasionally simplifies in ways that go beyond what evidence supports, the "1% better every day" claim is mathematically interesting but not specifically research-supported as a wellness principle). This represents serious popular synthesis.`,
            `Source C is from a viral social media post or short video by a productivity influencer promising a "morning routine that will transform your life" with specific behaviors guaranteed to produce dramatic results in short timeframes. Content of this form is common across TikTok, Instagram, YouTube, and similar platforms. The content typically promises dramatic transformation, presents the creator's personal results as evidence, lacks citations to specific research, and may sell associated courses, products, or coaching. This represents viral monetized content.`,
            `As you evaluate the sources, the question isn't which one is most popular or which sounds best; it's which one represents the most rigorous engagement with what's actually known about behavior change, and what each contributes (or distorts) about the underlying topic. Tier 1 sources aren't automatically right about everything; tier 3 sources aren't automatically wrong. But the markers of rigor differ in ways that matter, and the skill of recognizing those markers transfers across every wellness topic.`,
          ],
          image: `/voyager-assets/life-wellness/l07-s3-three-sources.webp`,
          imageCaption: `Three sources to evaluate: Wendy Wood research (Tier 1+2), James Clear "Atomic Habits" (Tier 2), viral influencer content (Tier 3). Markers of rigor differ in identifiable ways.`,
          vocab: [
            {
              word: `markers practice`,
              definition: `Specific things to look for when evaluating sources. Tier 1 markers: peer review, specific methodology described, sample sizes and statistical analyses, limitations acknowledged, hedged conclusions, citations to specific studies that can be checked. Tier 2 markers: author engages with research seriously, names specific researchers and studies, acknowledges complexity, identifies as synthesis rather than original research. Tier 3 markers: dramatic transformation promises, anecdotes as evidence, lack of specific research citations, monetized products/courses associated, content optimized for engagement metrics rather than accuracy.`,
              audioPrompt: `Specific markers help distinguish tier categories in practice, {name}. Tier 1 peer-reviewed research markers include peer review, specific methodology described, sample sizes and statistical analyses, limitations acknowledged, hedged conclusions, citations to specific studies that can be checked. Tier 2 serious popular synthesis markers include the author engaging with research seriously, naming specific researchers and studies, acknowledging complexity, identifying their work as synthesis rather than original research. Tier 3 viral monetized content markers include dramatic transformation promises, anecdotes as evidence, lack of specific research citations, monetized products or courses associated, content optimized for engagement metrics rather than accuracy. The wellness industry has learned to mimic surface features of serious content. Influencer videos cite "studies" without specifying which ones. Courses use academic-sounding language. The deeper markers of rigor (specific methodology, hedged conclusions, acknowledgment of complexity) are harder to fake. Looking for those markers protects against sophisticated mimicry.`,
            },
            {
              word: `serious popular synthesis`,
              definition: `The middle tier of source quality — books and articles by authors who engage seriously with research, often academics or science writers, that translate research findings for general audiences. Examples in the habit domain include Wendy Wood's "Good Habits, Bad Habits" and James Clear's "Atomic Habits." The text notes that even good tier-2 books often simplify in ways that go beyond what the underlying evidence supports — which is the trade-off for accessibility.`,
              audioPrompt: `Serious popular synthesis is the middle tier of source quality — books and articles by authors who engage seriously with research and translate findings for general audiences, {name}. Terra here — the text distinguishes this from both peer-reviewed research and viral monetized content. Serious popular synthesis at its best engages with original studies, names specific researchers, acknowledges complexity, and identifies as synthesis rather than original research. Wendy Wood's "Good Habits, Bad Habits" represents this done with exceptional fidelity to the underlying research. James Clear's "Atomic Habits" represents a case where the synthesis is less tight: the book engages with real researchers and real findings, but occasionally overgeneralizes, and the "1% better every day" claim is mathematically interesting but not specifically research-supported as a wellness principle. The text makes a practical point about how to engage with tier-2 sources: take the framework as a starting point while staying critical. The good ones are genuinely valuable; even the good ones have places where the translation from research to advice has introduced simplifications or extensions that go beyond what evidence supports. The user's job is to take what is useful while recognizing where to apply additional scrutiny — which requires knowing what tier-2 sources do and don't claim to be.`,
            },
            {
              word: `anecdotes as evidence`,
              definition: `A specific marker of viral monetized content in which the creator's personal experience or selected testimonials are presented as if they constitute evidence that a behavior change approach works generally. The text identifies this as a key distinguishing marker from peer-reviewed research, which instead uses controlled studies with defined samples, comparison conditions, and statistical analysis to establish what works across a population.`,
              audioPrompt: `Anecdotes as evidence is a specific marker of viral monetized content that the text identifies as one of the key things to look for when evaluating source quality, {name}. Terra here — an anecdote is a single person's account of their experience. The influencer video in the lesson describes exactly this pattern: the creator says the routine transformed their life and implies it will transform the viewer's. Comments include glowing testimonials from selected followers. This feels like evidence because personal stories are vivid and emotionally compelling. But a single person's experience — or even many testimonials collected because they support a claim — cannot tell you what works for a population, across different people with different contexts, motivations, life circumstances, and starting points. Peer-reviewed research addresses this by using controlled studies with defined samples, comparison conditions, and statistical analysis that account for the variation that personal stories cannot. The text notes that the influencer's previous video promoted a different "ultimate" morning routine, and older content has been deleted or hidden — a pattern consistent with someone whose claims are driven by what gets engagement rather than by what the evidence supports. Recognizing anecdotes as a marker of tier-3 content, rather than as evidence of what will work for you, is one of the most practical source evaluation skills available.`,
            },
          ],
        },

        {
          id: `l07-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `What Each Tier Adds (And Doesn't)`,
          paragraphs: [
            `One nuance worth holding as you evaluate. The tiers aren't a strict hierarchy of usefulness. Each tier serves different purposes; the question is matching the tier to the use.`,
            `Peer-reviewed research is essential for establishing what's actually true about a domain. Without it, claims float free of evidence. But peer-reviewed research is often not particularly readable for non-specialists, focuses on narrow questions that don't address broader practical decisions, and rarely gives clear practical guidance. Reading the research directly is sometimes valuable but usually not the most efficient way to get oriented.`,
            `Serious popular synthesis bridges the gap. Books like Wood's "Good Habits, Bad Habits," or Clear's "Atomic Habits," or many other tier-2 books across wellness topics, take research findings and package them for general audiences. The good ones engage seriously with the underlying evidence, acknowledge complexity, name specific researchers, and are honest about limits. Even good tier-2 books often simplify in ways that go beyond what evidence supports, which is the cost of accessibility. The user's job is to take the framework as a starting point while staying critical.`,
            `Viral monetized content is mostly the noise floor, but sometimes contains useful pointers. Occasionally a viral post will surface a real researcher worth investigating, or articulate something true that more rigorous content hasn't captured well. The right approach isn't to dismiss tier 3 entirely; it's to treat tier 3 claims as hypotheses requiring verification, never as evidence. The question is always: "is there research behind this, and what does it actually say?"`,
            `For wellness specifically, the failure mode is treating tier 3 content as if it's tier 1. Influencer content gets shared as if it's research. Anecdotes get treated as evidence. Dramatic transformation stories shape decisions that should be informed by population-scale evidence. Recognizing the tier you're encountering and treating it appropriately protects against this.`,
            `The skill you're building generalizes far beyond habits. The same source evaluation framework applies to sleep, nutrition, mental health, productivity, relationships, careers, and every other wellness or life-decision domain. Adults who navigate the wellness landscape well have largely built this skill; those who haven't get sold a lot of things that don't deliver.`,
          ],
          image: `/voyager-assets/life-wellness/l07-s4-tiers-add.webp`,
          imageCaption: `Each tier serves different purposes. Peer-reviewed = establishes what's true. Serious popular = bridges and applies. Viral = mostly noise, occasionally pointers. Match tier to use.`,
          vocab: [
            {
              word: `tier purpose`,
              definition: `Different source tiers serve different purposes. Tier 1 (peer-reviewed): essential for establishing what's actually true; often not readable for non-specialists; narrow questions, limited practical guidance. Tier 2 (serious popular): bridges research and practice; good ones engage seriously with evidence; even good ones simplify in ways that go beyond evidence. Tier 3 (viral monetized): mostly noise floor; occasionally surfaces real researchers; treat claims as hypotheses requiring verification, not as evidence. Skill generalizes across all wellness/life decisions.`,
              audioPrompt: `Matching tier to purpose is important because the tiers aren't a strict hierarchy of usefulness, {name}. Each tier serves different purposes. Peer-reviewed research is essential for establishing what's actually true about a domain; without it, claims float free of evidence. But peer-reviewed research is often not particularly readable for non-specialists, focuses on narrow questions, and rarely gives clear practical guidance. Serious popular synthesis bridges the gap. Good books take research findings and package them for general audiences while engaging seriously with the underlying evidence. Even good tier 2 books often simplify in ways that go beyond what evidence supports; that's the cost of accessibility. Viral monetized content is mostly the noise floor but sometimes contains useful pointers. The right approach is to treat tier 3 claims as hypotheses requiring verification, never as evidence. The question is always: is there research behind this, and what does it actually say? The skill generalizes far beyond habits; the same framework applies to every wellness and life-decision domain.`,
            },
            {
              word: `goal-directed behavior`,
              definition: `Conscious, deliberative, flexible behavior that involves judgment — as distinct from habit, which is automatic and cue-driven. The text explains that habits and goal-directed behavior involve distinct neurological mechanisms. Habits work well for behaviors that should happen consistently without thinking; goal-directed behavior works better when a situation requires judgment. Treating everything as a habit can backfire when judgment is needed.`,
              audioPrompt: `Goal-directed behavior is conscious, deliberative, flexible behavior that involves active judgment, {name}. Terra here — the text distinguishes it from habit, which is automatic, cue-driven, and low on conscious deliberation. The two involve distinct neurological mechanisms. Wendy Wood's research at USC has been particularly important in establishing this distinction. Habits happen when contextual cues trigger learned responses without much deliberate thought. Goal-directed behaviors involve evaluating options, considering consequences, and choosing based on current goals. Both are necessary for effective living; the skill is using each appropriately. Habits work well for behaviors you want happening consistently without thinking: brushing teeth, wearing a seatbelt, regular movement you've built as routine. Goal-directed behaviors work better for situations requiring judgment: deciding how to respond to a novel situation, navigating a complex conversation, choosing between real options. The text notes that treating everything as a habit can backfire when judgment is needed — you've automated a response to a situation that actually required thinking. And treating everything as goal-directed behavior exhausts decision-making capacity, because deliberate decision-making uses cognitive resources that habits don't. Real behavior change uses both, in their appropriate contexts.`,
            },
            {
              word: `dramatic transformation promises`,
              definition: `A specific marker of viral monetized content in which a creator promises universal, significant results in short timeframes from following their specific approach. The text identifies these promises as indicators of tier-3 content, noting that the behaviors that actually produce results across decades — adequate sleep, regular movement, real relationships, meaningful work — are not dramatic but sustained and contextual.`,
              audioPrompt: `Dramatic transformation promises are a specific marker of viral monetized content, {name}. Terra here — the text identifies them as one of the clearest signals that you are looking at tier-3 content rather than serious research. The influencer video in the lesson promises that the routine will "change your life" and suggests it "transforms" everyone who follows it. These promises are optimized for engagement — they attract clicks, shares, and purchases — not for accuracy. The text makes a specific observation about why this matters for behavior change content in particular. The behaviors that actually produce results across decades are not dramatic. They are boring, sustained, and contextual. Adequate sleep, regular movement, real social connection, meaningful work, professional help when needed. These are not transformation stories because they don't look transformative from the outside; they look like consistent ordinary practices. Tier-3 content sells the opposite precisely because it gets more engagement: dramatic quick transformation is emotionally compelling in a way that "sleep enough and move regularly" is not. Recognizing dramatic transformation promises as a marker of tier-3 content — and therefore as a signal to apply verification before acting — is one of the most practical applications of source evaluation skills in the wellness space.`,
            },
          ],
        },

        {
          id: `l07-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Before You Evaluate The Sources`,
          paragraphs: [
            `One last framing before the source evaluation activity. The question isn't whether you should adopt advice from any particular tier. It's whether you can recognize which tier you're encountering and treat claims appropriately. A piece of tier-3 viral content might happen to be true; it still needs verification before you treat it as evidence. A piece of tier-1 research might be highly specific and not directly applicable to your situation; understanding what it actually claims helps you use it appropriately.`,
            `Another framing. The tier isn't determined by who you are or where you found the content. The same researcher might write a tier-1 paper and a tier-2 popular book and a tier-3 social media post. The Twitter thread by the academic isn't the same as the academic's published research. Treating each piece of content for what it actually is (peer-reviewed paper, popular synthesis, social media post) rather than for who created it produces better assessment.`,
            `One important note about the tiers and behavior change specifically. Behavior change is a domain where simple, universal answers don't exist and most claims of dramatic transformation are wrong. The behaviors that actually produce results across decades (adequate sleep, regular movement, real relationships, meaningful work, professional help when needed) aren't dramatic. They're boring, sustained, contextual. Tier 3 content sells the opposite (dramatic, quick, transformative) because that's what gets engagement; treating tier 3 transformation promises with appropriate skepticism is a specific application of source evaluation.`,
            `You're 12. The wellness landscape you'll navigate across the rest of your life will be more sophisticated, more algorithmically optimized for engagement, and more monetized than any previous generation has faced. Source evaluation skills aren't optional; they're protection.`,
            `One last practical framing. After this lesson, when you encounter wellness content, try asking three questions: What tier is this? What specific research does it cite, and is the research saying what the content claims? What's being sold, directly or indirectly? Those three questions, applied consistently, will save you years of time and money.`,
          ],
          image: `/voyager-assets/life-wellness/l07-s5-before.webp`,
          imageCaption: `Three questions for any wellness content: What tier? What research, and does it say what's claimed? What's being sold? Applied consistently, this protects across decades.`,
          vocab: [
            {
              word: `wellness content`,
              definition: `Practical framework for evaluating any wellness content. (1) What tier is this: peer-reviewed research, serious popular synthesis, or viral monetized content? (2) What specific research does it cite, and is the research actually saying what the content claims? (3) What's being sold, directly or indirectly (products, courses, attention, identity)? Applied consistently, the three questions protect against decades of wellness industry messaging while preserving what's genuinely useful.`,
              audioPrompt: `Three questions provide a practical framework for evaluating any wellness content you encounter, {name}. First question: what tier is this? Peer-reviewed research, serious popular synthesis, or viral monetized content? Recognize what you're looking at before evaluating its claims. Second question: what specific research does it cite, and is the research actually saying what the content claims? This is critical because viral content often cites research without engaging with what the research actually found, or extracts narrow findings and presents them as universal principles. Third question: what's being sold, directly or indirectly? Products, courses, attention, identity, lifestyle aspiration? Knowing the economic model behind the content shapes how to assess its claims. Applied consistently, the three questions protect against decades of wellness industry messaging while preserving what's genuinely useful. The wellness landscape you'll navigate across your life will be more sophisticated, algorithmically optimized, and monetized than any previous generation has faced. Source evaluation isn't optional.`,
            },
            {
              word: `algorithmic optimization`,
              definition: `The process by which social media platforms prioritize content that generates the most engagement — clicks, shares, comments, and time spent — regardless of accuracy or quality. The text identifies algorithmic optimization as one reason the wellness landscape will be harder to navigate across future decades: content designed to maximize engagement tends to emphasize dramatic transformation promises, emotional triggers, and novelty rather than evidence and nuance.`,
              audioPrompt: `Algorithmic optimization refers to the process by which social media platforms prioritize content that generates the most engagement — clicks, shares, comments, and time spent watching — regardless of accuracy or quality, {name}. Terra here — the text identifies this as a key structural reason source evaluation skills are not optional but necessary protection. The economic model behind most viral content is engagement-driven: content creators are rewarded for what generates engagement, not for what accurately represents research. This creates selection pressure for content that is emotionally compelling, promises dramatic results, and tells people what they want to hear, rather than content that is accurate, nuanced, and appropriately hedged. The text notes that the wellness landscape you will navigate across the rest of your life will be more sophisticated, algorithmically optimized, and monetized than any previous generation has faced. The algorithms are improving at identifying and amplifying what generates engagement. The content will get better at seeming credible while remaining accuracy-optional. Source evaluation skills — recognizing tiers, looking for research citations and methodology, identifying what's being sold — are the specific protection against this environment. They work not by being exhausting to apply but by becoming habitual: the three questions (what tier, what research, what's being sold) applied quickly become automatic filters.`,
            },
            {
              word: `contextual cues`,
              definition: `The specific environmental triggers — time of day, location, preceding actions, emotional state — that automatically prompt habitual behavior. Wendy Wood's research identifies contextual cues as the mechanism through which habits operate: the same behavior happens reliably because the same cues trigger it. Changing context disrupts both good and bad habits, which is why environment design is more effective for habit change than willpower.`,
              audioPrompt: `Contextual cues are the specific environmental triggers that automatically prompt habitual behavior, {name}. Terra here — Wendy Wood's research at USC identifies contextual cues as the mechanism through which habits actually operate. The examples the text names: time of day, location, preceding actions, emotional state. When you have always checked your phone first thing in the morning, the act of waking up becomes a contextual cue that automatically triggers phone-checking before you've deliberated about whether to do it. When you have always eaten a snack after school while watching television, the combination of arriving home plus turning on the TV becomes the cue for the snack behavior. When you exercise at the same gym at the same time each week, the consistent time and place become cues that reduce the activation energy needed to go. This mechanism explains why environment design beats willpower. Willpower works against the contextual cues that are constantly triggering habitual responses; environment design changes the cues themselves. The text also notes that changing context — like moving to a new place — disrupts existing habits by removing the contextual cues that triggered them, creating a window to install new patterns before new cues form. This is why life transitions (new school, new home, new city) are particularly good windows for behavior change.`,
            },
          ],
        },

        // ───── SOURCE EVALUATION ───────────────────────────────────────────────
        {
          id: `l07-source-evaluation`,
          type: `source-evaluation`,
          headline: `Three Sources On Habits And Behavior Change`,
          intro: `{name}, evaluate three sources making claims about habits and behavior change. For each, identify the tier, what it gets right, what it gets wrong, and how much weight to give its claims.`,
          sources: [
            {
              id: `source-a`,
              tier: `peer-reviewed + serious popular`,
              title: `Wendy Wood, "Good Habits, Bad Habits" (2019) + research papers`,
              description: `Wendy Wood is a Provost Professor of Psychology and Business at USC. She has spent decades studying habits using experimental and longitudinal research methods. Her work is published in top peer-reviewed psychology journals (such as Psychological Review, Journal of Personality and Social Psychology). Her 2019 book "Good Habits, Bad Habits" synthesizes her research and others' for general audiences while maintaining engagement with original studies. Key claims in the book include: habits are automatic responses to specific contextual cues; environment design (changing physical and social context) beats willpower for habit change; habits and goal-directed behavior involve distinct neurological mechanisms; consistent context produces consistent behavior. She includes specific citations, acknowledges complexity, hedges where evidence is limited, and identifies competing views.`,
              markers: [
                `Author is established academic researcher with decades of peer-reviewed publications`,
                `Specific methodology described in original research papers`,
                `Citations to other researchers and studies that can be checked`,
                `Limitations acknowledged; conclusions hedged appropriately`,
                `Engages with complexity rather than offering universal simple answers`,
              ],
              question: `How much weight should you give this source's claims?`,
            },
            {
              id: `source-b`,
              tier: `serious popular synthesis`,
              title: `James Clear, "Atomic Habits" (2018)`,
              description: `James Clear is a writer and speaker, not an academic researcher. "Atomic Habits" (2018) has sold millions of copies and is one of the most popular books on habits ever published. The book synthesizes research from multiple researchers including Wood, Fogg, and others, and packages it as a practical framework with four "laws of behavior change" (make it obvious, attractive, easy, satisfying). The book has real strengths: engages with research; names actual researchers; presents specific actionable frameworks; acknowledges that habits take time and effort. The book has real limits: occasionally overgeneralizes from narrow findings; the "1% better every day" claim is mathematically interesting but not specifically research-supported as a wellness principle (it would compound to ~37x in a year, which obviously doesn't happen in real life); the book sometimes presents Clear's framework as more universal than research supports.`,
              markers: [
                `Author is not an academic researcher but engages seriously with research`,
                `Names specific researchers (Wood, Fogg, Duhigg, others) and studies`,
                `Provides specific actionable frameworks beyond what research alone provides`,
                `Acknowledges complexity but sometimes oversimplifies in service of frameworks`,
                `Bestseller status indicates effectiveness at packaging but doesn't indicate accuracy`,
              ],
              question: `How much weight should you give this source's claims?`,
            },
            {
              id: `source-c`,
              tier: `viral monetized content`,
              title: `"5 AM Morning Routine That Will Change Your Life": A Viral Influencer Video`,
              description: `A productivity influencer with millions of followers posts a video titled "The 5 AM Morning Routine That Will Change Your Life." The content includes specific behaviors (wake at 5am, cold shower, meditation, journaling, workout, specific breakfast, deep work) presented as universal advice. The influencer claims the routine transformed their life and "transforms" everyone who follows it. The video doesn't cite specific research; it includes phrases like "studies show" without naming any specific studies. The video has multiple sponsored product placements (specific journals, meditation apps, supplements) and links to the influencer's $497 online course on productivity. Comments under the video include both glowing testimonials and people reporting they tried it and couldn't sustain it. The influencer's previous video promoted a different "ultimate" morning routine; older content has been deleted or hidden.`,
              markers: [
                `No author credentials in research methodology`,
                `Promises dramatic transformation for "everyone" who follows the routine`,
                `Cites "studies" without naming specific research`,
                `Treats personal anecdote as evidence`,
                `Multiple monetization elements (sponsored products, $497 course)`,
                `Engagement-optimized framing rather than evidence-based hedging`,
              ],
              question: `How much weight should you give this source's claims?`,
            },
          ],
          comparison: {
            prompt: `Now compare the three sources. Specifically address: which tier does each represent? What does each get right about behavior change? What does each get wrong or overstate? And (most important): what's the most useful way to engage with each going forward?`,
            promptInstruction: `Write 4-6 sentences synthesizing your comparison. Use the tier markers from sections 2 and 3. Don't just rank them; explain what each tier contributes and what its limits are.`,
          },
          reflectionPrompt: `Which source's framing was hardest for you to evaluate critically? Why? What does that tell you about your own susceptibility to particular tiers?`,
        },

        {
          id: `l07-quiz`,
          type: `quiz`,
          headline: `Check your understanding`,
          questions: [
            {
              id: `q1`,
              type: `multiple-choice`,
              question: `What does the actual research show about habit formation timing?`,
              options: [
                `21 days`,
                `Lally et al 2010: median time to habit automaticity ~66 days, with wide range from ~18 to 250+ days depending on behavior and individual; "21 days" is myth (from 1960 Maxwell Maltz plastic surgery book, not habit research); simple behaviors form habits faster than complex ones; varies with context, motivation, and ability`,
                `Random`,
                `30 days`,
              ],
              correctIndex: 1,
              explanation: `The "21 days" claim is one of the most widely repeated wellness myths. Real research shows much more variability and longer median times. The myth persists because it's simple and feels actionable; the reality is more contextual.`,
            },
            {
              id: `q2`,
              type: `multiple-choice`,
              question: `What does Wendy Wood's research show about habit change?`,
              options: [
                `Just willpower`,
                `Habits are automatic responses to specific contextual cues; distinct from goal-directed behavior in neurological mechanisms; environment design beats willpower for habit change; consistent context produces consistent behavior; habit formation timing varies widely; published in top peer-reviewed psychology journals over decades`,
                `Random`,
                `Just discipline`,
              ],
              correctIndex: 1,
              explanation: `Wood's work is the most extensive peer-reviewed research synthesis on habits available. Her central finding (that environment design beats willpower) has practical implications: change your context to change your behavior, rather than relying on motivation that fluctuates.`,
            },
            {
              id: `q3`,
              type: `multiple-choice`,
              question: `What's BJ Fogg's Behavior Model?`,
              options: [
                `Random model`,
                `Behavior happens when motivation, ability, and prompt come together at the same moment; implications: rather than relying on motivation (fluctuates), make behaviors easier (high ability) and link to existing routines (clear prompts); tiny behaviors succeeding reliably beat ambitious behaviors failing repeatedly; from BJ Fogg at Stanford`,
                `Just steps`,
                `Random framework`,
              ],
              correctIndex: 1,
              explanation: `The model is practically powerful because it identifies what to change when behavior isn't happening. Low motivation? Either increase motivation OR make the behavior easier OR add clearer prompts. Treats behavior change as solvable rather than as a matter of will.`,
            },
            {
              id: `q4`,
              type: `multiple-choice`,
              question: `What are the three source tiers in wellness/behavior content?`,
              options: [
                `Same thing`,
                `Tier 1: peer-reviewed research (academic journals, expert review, specific methodology, hedged conclusions). Tier 2: serious popular synthesis (books/articles by authors engaging with research seriously, often academics or science writers, vary in fidelity but engage with evidence). Tier 3: viral monetized content (social media, influencer videos, online courses optimized for engagement and revenue rather than accuracy)`,
                `Random tiers`,
                `Just opinion`,
              ],
              correctIndex: 1,
              explanation: `Each tier serves different purposes. Recognizing which tier you're encountering shapes how to assess claims. The wellness industry has learned to mimic surface features of serious content; looking for deeper markers of rigor protects against sophisticated mimicry.`,
            },
            {
              id: `q5`,
              type: `multiple-choice`,
              question: `What are markers of Tier 1 (peer-reviewed) research?`,
              options: [
                `Just credentials`,
                `Peer review by experts; specific methodology described; sample sizes and statistical analyses; limitations acknowledged; hedged conclusions; citations to specific studies that can be checked; publication in academic journals; methodology can be scrutinized`,
                `Random markers`,
                `Just academic words`,
              ],
              correctIndex: 1,
              explanation: `The deeper markers are about how knowledge is produced and checked. Surface markers (academic-sounding language, credentials) can be mimicked; the deeper markers (specific methodology, hedged conclusions, acknowledged limits) are harder to fake.`,
            },
            {
              id: `q6`,
              type: `multiple-choice`,
              question: `What are markers of Tier 3 (viral monetized) content?`,
              options: [
                `Just popular`,
                `Promises dramatic transformation; treats personal anecdote as evidence; cites "studies" without naming specific research; monetization elements (sponsored products, courses for sale); engagement-optimized framing rather than evidence-based hedging; content often disappears or changes as new framings become popular`,
                `Random markers`,
                `Just viral`,
              ],
              correctIndex: 1,
              explanation: `The economic model of viral content is the opposite of peer review. What spreads gets monetized regardless of whether it's true. Recognizing this pattern protects against treating tier 3 content as evidence rather than as hypothesis requiring verification.`,
            },
            {
              id: `q7`,
              type: `multiple-choice`,
              question: `What's the right way to engage with serious popular synthesis (Tier 2)?`,
              options: [
                `Take as gospel`,
                `Take as starting point while staying critical; good Tier 2 sources engage seriously with research, name specific researchers, acknowledge complexity, identify their work as synthesis; even good Tier 2 books often simplify in ways that go beyond evidence; check Tier 2 claims against Tier 1 research when claims are important; use Tier 2 for practical orientation, Tier 1 for what's actually established`,
                `Ignore`,
                `Just memorize`,
              ],
              correctIndex: 1,
              explanation: `Tier 2 is often the most useful for practical purposes because it bridges research and application. But "useful" doesn't mean "perfectly accurate." Good Tier 2 books are starting points, not final answers. Checking important claims against Tier 1 research is how to use Tier 2 well.`,
            },
            {
              id: `q8`,
              type: `multiple-choice`,
              question: `What are the three questions for evaluating any wellness content?`,
              options: [
                `Random questions`,
                `(1) What tier is this: peer-reviewed research, serious popular synthesis, or viral monetized content? (2) What specific research does it cite, and is the research actually saying what the content claims? (3) What's being sold, directly or indirectly (products, courses, attention, identity)? Applied consistently, these questions protect against decades of wellness industry messaging`,
                `Just trust`,
                `Random framework`,
              ],
              correctIndex: 1,
              explanation: `The questions are practical and transferable. They work for sleep content, nutrition content, exercise content, mental health content, productivity content, relationship content, any wellness or life-decision domain. Adults who navigate the wellness landscape well have largely built this skill.`,
            },
            {
              id: `q9`,
              type: `true-false`,
              question: `True or false: A viral video by a credentialed-sounding person is automatically more reliable than a podcast episode by someone without academic credentials.`,
              correctAnswer: false,
              explanation: `False. The credibility of content depends on what it actually says and how it engages with evidence, not on the surface credentials of who delivers it. A credentialed influencer can produce Tier 3 content; a non-credentialed science writer can produce serious Tier 2 content. The markers of rigor are about how knowledge is engaged with, not about who's speaking.`,
            },
            {
              id: `q10`,
              type: `inference`,
              question: `Your friend says "I saw a TikTok where this guy with millions of followers says you can lose weight just by drinking cold water in the morning. Studies prove it. I'm going to try it." Based on this lesson, what should you point out?`,
              options: [
                `"Try it"`,
                `"Three questions to ask. First: what tier is this? A TikTok by an influencer with millions of followers is Tier 3 viral monetized content: the most reliable tier for engagement metrics, the least reliable tier for accuracy about how bodies work. Second: what specific research does it cite? 'Studies prove it' is the giveaway. Real research is named: author, year, journal. Studies that 'prove' things almost never exist in nutrition/metabolism research because that domain is too complex; even rigorous research hedges. The phrase 'studies prove' usually means 'someone vaguely referenced research without engaging with what the research actually says.' Third: what's being sold? Influencers with millions of followers monetize through products, courses, sponsorships, attention. The video is part of a business model. None of this proves the cold water claim is wrong; it does mean treating the claim as evidence rather than as a hypothesis requiring verification is what gets people sold things that don't work. Try checking what actual metabolism research says about cold water and weight; the answer is much less dramatic than the TikTok suggests. And remember from lesson 4: 'lose weight' framings in wellness content are mostly diet culture in newer packaging."`,
                `"More cold water"`,
                `"Random advice"`,
              ],
              correctIndex: 1,
              explanation: `Real applied source evaluation. Apply the three questions specifically. Identify the tier and the markers. Address the "studies prove" giveaway directly. Connect to the earlier lesson on diet culture. Don't shame the friend; redirect to better evaluation framework. This kind of literacy protects across decades of wellness messaging.`,
            },
          ],
        },

        {
          id: `l07-reflection`,
          type: `reflection`,
          headline: `Sit with this`,
          intro: `Pick the prompt that pulls at you most. Your answer is saved.`,
          prompts: [
            { id: `reflect-cognitive`, category: `Cognitive`, prompt: `Before this lesson, how were you thinking about source quality in wellness content? Has anything shifted?` },
            { id: `reflect-meta`, category: `Metacognitive`, prompt: `Honestly: how much of your current wellness understanding comes from Tier 3 sources you absorbed without examining?` },
            { id: `reflect-identity`, category: `Identity`, prompt: `If you become someone with strong source evaluation skills across decades, what does that protect?` },
            { id: `reflect-application`, category: `Application`, prompt: `Pick one wellness claim you've absorbed recently. Apply the three questions. What tier? What research? What's sold?` },
            { id: `reflect-critical`, category: `Critical`, prompt: `Are there situations where the tier framework doesn't apply well? When might Tier 3 content be useful? When might Tier 1 not be the right place to look?` },
            { id: `reflect-personal`, category: `Personal investigation`, prompt: `For one week, apply the three questions to every wellness/productivity content you encounter. Notice patterns in what you've been consuming.` },
          ],
        },

        {
          id: `l07-real-world`,
          type: `real-world`,
          headline: `Take it into your life`,
          guideContext: `Source evaluation skills transfer across every wellness topic across decades. Two paths.`,
          familyActivity: {
            title: `The Family Source Evaluation Conversation`,
            duration: `45 minutes`,
            description: `Share the three-tier framework and the three questions. Apply them together to wellness content the family has been seeing recently (podcasts, social media, books, articles). Most adults have absorbed substantial Tier 3 content without recognizing it; the conversation often surfaces specific claims worth re-examining. Consider establishing a family practice of applying the three questions to wellness/productivity content before adopting advice from it.`,
          },
          projectOption: {
            title: `Read Wendy Wood's "Good Habits, Bad Habits", 4 weeks (optional)`,
            duration: `4 weeks, ~30 minutes per session`,
            description: `Wood's book is a strong example of Tier 1 + Tier 2 done well: an established academic researcher synthesizing her own and others' research for general audiences while maintaining engagement with original studies. Read alongside one Tier 2 popular habit book (like Clear's "Atomic Habits") to see the difference between research-engaged synthesis and pure popular framing. Apply concepts during reading. Write 1,500 words on what you learned about both habits and source quality.`,
            offerToParent: `Parent: opt your kid into this project. Real behavior change literacy at 12, combined with source evaluation skills, protects across decades of wellness industry messaging.`,
          },
          identityQuestion: `If you become someone who can recognize tier-3 content immediately and apply the three questions automatically, what does that change about every wellness, productivity, and life-decision claim you'll encounter across decades?`,
        },

        {
          id: `l07-identity-hook`,
          type: `identity-hook`,
          headline: `Who is this lesson making you?`,
          prompt: `One sentence. No wrong answer.`,
          placeholder: `Someone who...`,
          examples: [
            `Someone who can spot Tier 3 viral content instantly.`,
            `A person who asks 'what tier? what research? what's sold?' automatically.`,
            `Someone who uses popular books as starting points, not final answers.`,
          ],
          saveKey: `identity_responses_lw_11_12_7`,
        },

        {
          id: `l07-celebration`,
          type: `celebration`,
          guideText: `{name}. Seventh Life Wellness lesson done. You now know real habit research (Wood, Fogg, Lally), the three source tiers (peer-reviewed / serious popular / viral monetized), the markers that distinguish them, and the three questions for evaluating any wellness content. The "21 days" myth is exposed. You can spot Tier 3 content and apply appropriate skepticism. This skill transfers across every wellness topic for the rest of your life. Next time we go into attention and focus: three serious positions on what attention is. Argument Builder format. Let's go. — Terra`,
          badge: `change-literate`,
          badgeName: `Change Literate`,
          xpEarned: 75,
          competencies: [
            `Knows real habit research (Wood, Fogg, Lally) and the "21 days" myth`,
            `Distinguishes three source tiers (peer-reviewed / serious popular / viral monetized)`,
            `Identifies tier markers (methodology, citations, hedging, monetization)`,
            `Applies three questions to wellness content (tier? research? sold?)`,
            `Recognizes how tier framework generalizes across wellness topics`,
          ],
          nextLessonPreview: {
            title: `Lesson 8: Attention and Focus`,
            hook: `Three serious positions on what attention is. Argument Builder.`,
          },
        },
      ],
    },
  ],
};

export default LIFEWELLNESS_VOYAGER_L07;

if (import.meta.env?.DEV) {
  const l = LIFEWELLNESS_VOYAGER_L07.lessons[0];
  const mags = l.screens.filter((s) => s.type === `magazine`).length;
  const sources = l.screens.find((s) => s.type === `source-evaluation`)?.sources?.length ?? 0;
  const quiz = l.screens.find((s) => s.type === `quiz`)?.questions?.length ?? 0;
  const reflect = l.screens.find((s) => s.type === `reflection`)?.prompts?.length ?? 0;
  console.log(
    `[LESSON-LW-VOYAGER-L07 ${VERSION}] "${l.title}" mags=${mags} sources=${sources} q=${quiz} r=${reflect}`
  );
}
