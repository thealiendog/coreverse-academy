// ─────────────────────────────────────────────────────────────────────────────
// LIFE WELLNESS VOYAGER  |  L14 — Tech and Screen Use
// Age band : voyagers (11-12)   Guide: terra (Wolf)
// Standards: Coreverse Original — Media Literacy, Tech and Adolescent Wellbeing
// CALIBRATED: Voyager spec v1.1 (May 2026)
// Interaction format: SOURCE EVALUATION (peer-reviewed / serious popular / viral)
// CALIBRATION: Science is genuinely contested; this lesson teaches navigation
//              of contested research, not a definitive answer
// ─────────────────────────────────────────────────────────────────────────────

const VERSION = "voyager-lw-l14-v1";

const LIFEWELLNESS_VOYAGER_L14 = {
  ageBand: `voyagers`,
  subjectId: `life-wellness`,
  guide: `terra`,

  lessons: [
    {
      id: `lw-11-12-14`,
      title: `Tech and Screen Use`,
      duration: 35,
      xpReward: 75,
      badge: `tech-literate`,
      badgeName: `Tech Literate`,

      screens: [
        {
          id: `l14-welcome`,
          type: `welcome`,
          guideText: `{name}, screen use and youth wellbeing is one of the most contested topics in current psychology — not because we lack data, but because the data is genuinely mixed. This lesson teaches you to evaluate sources on a contested topic: what peer-reviewed research actually shows, what serious popular books add, and what viral content gets wrong.`,
          headline: `Tech and Screen Use`,
          subtitle: `Three tiers of sources on a genuinely contested topic. Source evaluation under disagreement.`,
          visual: `/voyager-assets/life-wellness/l14-welcome.webp`,
        },

        {
          id: `l14-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Why This Topic Is Genuinely Contested`,
          paragraphs: [
            `Most wellness topics have research that converges on something close to consensus (sleep deprivation is bad, exercise helps, financial security matters). Tech and screen use is different: serious researchers using rigorous methods reach different conclusions. Understanding why this happens helps you navigate the disagreement rather than just picking a side.`,
            `What's being studied. The basic question is whether smartphone and social media use has caused (or contributed to) the documented rise in adolescent mental health problems since approximately 2012. Mental health measures (depression diagnoses, anxiety diagnoses, self-harm rates, suicide rates) rose substantially across many countries starting in roughly that period; smartphone and social media adoption became near-universal during the same period. The question is whether the correlation reflects causation.`,
            `Why this is hard to study. You can't run controlled experiments randomly assigning some adolescents to use smartphones and others not for years; the comparison is between adolescents already using vs not using, which has many confounding factors. Self-report data on screen time is unreliable (people are bad at estimating their own use). Effects might be different for different uses (passive scrolling vs active communication vs creating), different platforms, different individuals (some vulnerable, some not), different doses (1 hour vs 6 hours), and different ages. The research literature reflects this complexity with multiple credible findings.`,
            `What different serious researchers conclude. Jean Twenge (San Diego State) argues for substantial harm: her books "iGen" (2017) and "Generations" (2023), with extensive data analysis, conclude that smartphones and social media have caused major mental health declines, particularly in girls. Jonathan Haidt (NYU) argues for similar conclusions in "The Anxious Generation" (2024), proposing specific causal mechanisms. On the other side: Andrew Przybylski (Oxford) and Amy Orben (Cambridge) have published extensive research arguing the effects in observational studies are very small and that moral-panic narratives overstate the evidence. Pete Etchells's "Lost in a Good Game" makes a similar argument. The disagreement is substantive among credible researchers, not crank-vs-mainstream.`,
            `What this means for you. Different smart people looking at largely the same evidence reach different conclusions. This is normal in contested science. Your job isn't to pick the right team but to understand what's actually being argued, what's strong evidence vs weak, and what specific things you can do with the genuine uncertainty.`,
            `One framing. The contested research on tech and adolescents is a particularly clear example of a pattern that appears across many important topics: politics, climate communication, economics, health, education. Building skill in navigating contested research now (rather than just trusting whichever popular book you read most recently) protects you across many domains.`,
          ],
          image: `/voyager-assets/life-wellness/l14-s1-contested.webp`,
          imageCaption: `Tech-and-adolescents research genuinely contested: Twenge and Haidt argue for substantial harm; Przybylski and Orben argue effects are small. Disagreement among credible researchers, not crank-vs-mainstream.`,
          vocab: [
            {
              word: `adolescent wellbeing`,
              definition: `Research on whether smartphones/social media caused mental health rise since ~2012 is genuinely contested. Jean Twenge (San Diego State) and Jonathan Haidt (NYU) argue substantial harm; books "iGen" 2017, "Generations" 2023, "The Anxious Generation" 2024. Andrew Przybylski (Oxford) and Amy Orben (Cambridge) argue effects in observational studies are very small. Hard to study because no controlled experiments possible, screen-time self-report unreliable, effects vary by use type/platform/individual/dose/age. Disagreement among credible researchers using rigorous methods, not crank-vs-mainstream.`,
              audioPrompt: `Contested research on tech and adolescent wellbeing is the actual state of this topic, {name}. Most wellness topics have research that converges on something close to consensus, but tech and screen use is different: serious researchers using rigorous methods reach different conclusions. The basic question is whether smartphone and social media use has caused or contributed to the documented rise in adolescent mental health problems since approximately 2012. Jean Twenge at San Diego State argues for substantial harm: her books "iGen" from 2017 and "Generations" from 2023 conclude that smartphones and social media have caused major mental health declines, particularly in girls. Jonathan Haidt at NYU argues for similar conclusions in "The Anxious Generation" from 2024, proposing specific causal mechanisms. On the other side, Andrew Przybylski at Oxford and Amy Orben at Cambridge have published extensive research arguing the effects in observational studies are very small and that moral-panic narratives overstate the evidence. The disagreement is substantive among credible researchers, not crank versus mainstream. Different smart people looking at largely the same evidence reach different conclusions; this is normal in contested science.`,
            },
            {
              word: `moral panic`,
              definition: `A recurring cultural pattern in which a new medium or technology is blamed for harming youth, usually with high confidence and widespread concern disproportionate to what evidence actually supports. Previous examples include comic books, television, and video games. The lesson uses this historical pattern to contextualize some of the current claims about smartphones.`,
              audioPrompt: `Moral panic is a recurring cultural pattern in which a new medium or technology is blamed for harming youth, usually with high confidence and widespread concern disproportionate to what evidence actually supports, {name}. The lesson notes this historical pattern in the context of the contested tech-and-adolescents research. Comic books in the 1950s were accused of causing juvenile delinquency; rock music was accused of corrupting teenagers; television was blamed for violence; video games for shooting sprees. In each case, the framings were usually overstated and the mechanisms proposed were usually not supported by subsequent careful research. This doesn't mean smartphones are definitely fine — the research on smartphones and adolescent wellbeing is genuinely contested, not settled in favor of no effect. But it does mean that the confident "this new technology is destroying our kids" pattern is historically unreliable, and that recognizing it as a pattern is part of evaluating current claims carefully. The lesson's Tier C patterns include moral panic framings as one marker: confident claims about new technology causing harm, without engaging with researchers who disagree, with a predictable structure that recurs across media history.`,
            },
            {
              word: `contested science`,
              definition: `An area of research in which serious scientists using rigorous methods reach different conclusions from similar evidence. The tech-and-adolescent-wellbeing debate is an example. Contested science is different from settled consensus (sleep deprivation is harmful), and different from crank-vs-mainstream disagreement — it is genuine substantive disagreement among credible researchers.`,
              audioPrompt: `Contested science describes an area of research in which serious scientists using rigorous methods reach different conclusions from similar evidence, {name}. The tech-and-adolescent-wellbeing research is the lesson's primary example. Jean Twenge, Jonathan Haidt, and their colleagues argue for substantial causal harm from smartphones and social media. Andrew Przybylski, Amy Orben, Candice Odgers, and their colleagues argue the effects are small and the causal claims are overstated. Both sides publish in peer-reviewed journals. Both sides have research credentials. They disagree on methodology, interpretation, and conclusions. This is different from settled consensus: there is strong scientific consensus that sleep deprivation is harmful, that exercise improves health, that climate change is human-caused. On those topics, the crank-vs-mainstream framing applies: one credible side and one non-credible side. Contested science involves credible sides in genuine disagreement. Recognizing when you're in contested-science territory matters because the appropriate epistemic response is different: not picking the most persuasive-sounding position, but maintaining appropriate uncertainty, understanding what's actually being argued, and acting on what's supported across both sides.`,
            },
          ],
        },

        {
          id: `l14-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Tier A: Peer-Reviewed Research`,
          paragraphs: [
            `The highest tier of sources on this topic is peer-reviewed research published in academic journals. These are the actual studies that the popular books synthesize and that public debate is based on. Reading the actual research (or at least summaries of it from research-literate sources) gives you direct access to the evidence rather than secondhand framings.`,
            `What peer-reviewed research on this topic actually looks like. Studies are typically observational (correlating screen-time measures with mental health measures across populations) rather than experimental. Sample sizes vary from a few hundred to large national datasets. Methods include cross-sectional studies (single time point), longitudinal studies (following people over time), and rare experimental studies (assigning some people to reduce screen time). Findings typically include statistical effects that are technically significant but often small in absolute terms; meaning the correlation is real but the size of the effect is modest.`,
            `What Twenge's research shows. Her analyses use large national datasets (Monitoring the Future, National Survey of Drug Use and Health, others) to track changes over time. She finds substantial increases in adolescent mental health problems starting around 2012-2013, correlating with smartphone adoption and social media use. Her interpretation is causal: the timing pattern and dose-response pattern (more screen time correlating with worse outcomes) is consistent with social media causing the mental health decline. Her published peer-reviewed work has appeared in journals including Clinical Psychological Science, Emotion, Journal of Abnormal Psychology.`,
            `What Przybylski and Orben's research shows. Their analyses use large national datasets, sometimes including the same datasets Twenge uses, with different methodology. They find that effects of screen time on adolescent wellbeing are statistically detectable but very small, often comparable to or smaller than effects of "eating potatoes" or "wearing glasses" on wellbeing. They argue the effects are real but small enough that they don't support claims about smartphones causing major mental health declines. Their published peer-reviewed work has appeared in Nature Human Behaviour, Psychological Science, others.`,
            `Why both can be partly right. They're using different methodological approaches, focusing on different outcomes, weighting different evidence. The "substantial harm" position highlights timing patterns and dose-response patterns; the "small effects" position highlights cross-sectional effect sizes from specific datasets. The peer-reviewed literature contains both kinds of findings; which one is "correct" is partly a question of which framing you weight more, not just what the data shows.`,
            `What this tier provides. Direct access to evidence rather than secondhand framings. Detailed methodology you can evaluate. Specific findings with stated uncertainty. The cost is that peer-reviewed research is hard to read for non-specialists and often doesn't translate directly to practical guidance.`,
          ],
          image: `/voyager-assets/life-wellness/l14-s2-tier-a.webp`,
          imageCaption: `Tier A: peer-reviewed research. Twenge in Clinical Psychological Science, Emotion. Przybylski and Orben in Nature Human Behaviour, Psychological Science. Different methodology, different conclusions, same field.`,
          vocab: [
            {
              word: `peer-reviewed`,
              definition: `Highest source tier on contested topics: actual studies published in peer-reviewed academic journals. Typical methodology for tech/adolescent topic: observational studies, large national datasets, cross-sectional and longitudinal designs. Twenge's work in Clinical Psychological Science, Emotion, Journal of Abnormal Psychology; argues substantial harm based on timing and dose-response. Przybylski and Orben's work in Nature Human Behaviour, Psychological Science; argues effects detectable but very small. Provides direct evidence access and stated uncertainty; cost is hard to read for non-specialists.`,
              audioPrompt: `Tier A sources on contested research topics are peer-reviewed research published in academic journals, {name}. These are the actual studies that popular books synthesize and that public debate is based on. Reading the actual research, or at least summaries from research-literate sources, gives you direct access to the evidence rather than secondhand framings. What peer-reviewed research on tech and adolescents actually looks like: studies are typically observational, correlating screen-time measures with mental health measures across populations. Sample sizes vary from a few hundred to large national datasets. Twenge's analyses use large national datasets like Monitoring the Future to track changes over time. She finds substantial increases in adolescent mental health problems starting around 2012-2013 and interprets this causally. Her work appears in Clinical Psychological Science, Emotion, Journal of Abnormal Psychology. Przybylski and Orben's analyses use large national datasets, sometimes the same ones, with different methodology. They find effects that are statistically detectable but very small. Their work appears in Nature Human Behaviour, Psychological Science. Both can be partly right because they're using different methodological approaches and weighting different evidence.`,
            },
            {
              word: `observational studies`,
              definition: `Research designs that measure associations between variables in populations that have already made their own choices, rather than randomly assigning participants to conditions. Most tech-and-adolescents research is observational, which means it can detect correlations but cannot establish causation as cleanly as controlled experiments.`,
              audioPrompt: `Observational studies are research designs that measure associations between variables in populations that have already made their own choices, {name}. Most research on tech and adolescent wellbeing is observational: researchers measure screen time and mental health outcomes in populations of adolescents who have chosen their own levels of screen use. This contrasts with controlled experiments, in which researchers would randomly assign some adolescents to use smartphones and others not — and then track outcomes over time. Controlled experiments would allow cleaner causal conclusions, but they're not possible or ethical for years-long questions about smartphone use. The limitation of observational studies is that correlations can result from causation in either direction, or from a third variable causing both. More depressed adolescents might use screens more because they're depressed, rather than screens making them depressed. Adolescents from more disadvantaged backgrounds might have both more screen time and worse mental health due to broader structural factors. Different methodological approaches within observational research — how screen time is measured, which outcomes are tracked, what controls are included — produce different results, which is part of why Twenge's and Przybylski-Orben's analyses of similar datasets reach different conclusions.`,
            },
            {
              word: `specification curve`,
              definition: `A methodological approach used by Przybylski and Orben to test how findings change across many different analytic choices within the same dataset. By testing hundreds of plausible analytic specifications, specification curve analysis reveals whether a finding is robust or depends heavily on particular analytic choices.`,
              audioPrompt: `Specification curve analysis is a methodological approach used by Andrew Przybylski and Amy Orben in their research on tech and adolescent wellbeing, {name}. The method works by testing how findings change across many different plausible analytic choices within the same dataset: different ways of measuring screen time, different ways of measuring wellbeing, different control variables, different sample restrictions. By running hundreds of specifications and examining the distribution of results, the analyst can see whether a finding is robust across analytic choices or depends heavily on particular choices. Przybylski and Orben applied this approach to large nationally representative datasets and found that effects of screen time on wellbeing were statistically detectable but very small — often comparable to effects of wearing glasses or eating potatoes. Their specific finding is that the effects are real but tiny, not matching the "smartphones are causing a mental health epidemic" framing of the more alarmist side of the debate. Researchers on the other side, including Twenge, argue that different methodological framings highlight different and more meaningful effects. The methodological disagreement is itself part of what makes this research contested at the peer-reviewed Tier A level.`,
            },
          ],
        },

        {
          id: `l14-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Tier B: Serious Popular Books`,
          paragraphs: [
            `Tier B includes serious popular books written by researchers or research-literate authors synthesizing the underlying evidence for general audiences. These books are how most people encounter the research and form opinions about tech and adolescents. They're not direct evidence but they can be valuable for synthesis.`,
            `Jonathan Haidt's "The Anxious Generation" (2024) is currently the most influential book in the "tech caused harm" position. Haidt is an NYU social psychologist with substantial research credentials. The book synthesizes evidence supporting his position and proposes specific causal mechanisms (smartphone-based childhood vs play-based childhood, decline of in-person social activity, sleep deprivation, attention fragmentation). The book recommends specific interventions (no smartphones before high school, no social media until 16, phone-free schools, more independent play). It has been extensively discussed in mainstream media and has influenced policy in multiple states/countries.`,
            `Jean Twenge's "iGen" (2017) and "Generations" (2023) make similar arguments with more focus on generational comparison. Twenge has been making this argument longer than Haidt and from a different academic field (developmental psychology). The two books together represent the strongest popular case for the "tech caused substantial harm" position.`,
            `On the other side, Pete Etchells's "Lost in a Good Game" (2019, focused on video games but related) and various essays by Andrew Przybylski, Amy Orben, and others make the "effects are small" case for general audiences. There's less popular book infrastructure for the small-effects position partly because "tech is mostly fine" doesn't sell as well as "tech is destroying your kids."`,
            `Key reception of Haidt specifically. "The Anxious Generation" has been criticized by researchers including Orben, Przybylski, Candice Odgers (UC Irvine), and others for what they argue is overstatement of the evidence, selective citation of supportive research, and confidence beyond what the data supports. The criticism isn't ideological; it's methodological. The book has also been defended as making appropriate inferences from convergent evidence. The disagreement among credible researchers is ongoing.`,
            `What this tier provides. Synthesis accessible to non-specialists. Specific recommendations for action. Framework for understanding the underlying questions. The cost is that the synthesis reflects the author's interpretation and selection of evidence; reading a single popular book on a contested topic gives you one position presented persuasively, not balanced view of the evidence.`,
            `Important framing. Tier B sources can be excellent (serious researchers like Haidt and Twenge are not Tier C influencers) but they should be read alongside critical engagement and ideally alongside opposing positions. "I read Haidt's book and now I know what's true" is a Tier B-only reasoning pattern that misses the contested nature of the actual evidence.`,
          ],
          image: `/voyager-assets/life-wellness/l14-s3-tier-b.webp`,
          imageCaption: `Tier B: serious popular books. Haidt "The Anxious Generation" (2024), Twenge "iGen"/"Generations." Etchells, Przybylski, Orben essays on other side. Reflect authors' synthesis; read with critical engagement.`,
          vocab: [
            {
              word: `popular books`,
              definition: `Serious popular books by researchers or research-literate authors synthesizing evidence for general audiences. Tech/adolescents examples: Jonathan Haidt's "The Anxious Generation" 2024 (causal mechanisms, specific recommendations, criticized methodologically by Orben/Przybylski/Odgers); Jean Twenge's "iGen" 2017 and "Generations" 2023 (generational comparison framework); on other side, Pete Etchells's "Lost in a Good Game" and essays from Przybylski/Orben (less popular book infrastructure because "tech is fine" doesn't sell as well). Provides accessible synthesis and recommendations; cost is single-author selection and interpretation of evidence.`,
              audioPrompt: `Tier B sources are serious popular books written by researchers or research-literate authors synthesizing the underlying evidence for general audiences, {name}. These books are how most people encounter research and form opinions. They're not direct evidence but they can be valuable for synthesis. Jonathan Haidt's "The Anxious Generation" from 2024 is currently the most influential book in the "tech caused harm" position. Haidt is an NYU social psychologist with substantial research credentials. The book synthesizes evidence supporting his position, proposes specific causal mechanisms, and recommends specific interventions. Jean Twenge's "iGen" from 2017 and "Generations" from 2023 make similar arguments with more focus on generational comparison. On the other side, Pete Etchells's "Lost in a Good Game" and various essays by Andrew Przybylski and Amy Orben make the "effects are small" case for general audiences. There's less popular book infrastructure for the small-effects position partly because "tech is mostly fine" doesn't sell as well as "tech is destroying your kids." "The Anxious Generation" has been criticized by researchers for what they argue is overstatement of the evidence and selective citation; this criticism is methodological, not ideological. Tier B sources should be read alongside critical engagement and ideally alongside opposing positions.`,
            },
            {
              word: `selective citation`,
              definition: `A criticism leveled against "The Anxious Generation" by researchers including Amy Orben, Andrew Przybylski, and Candice Odgers. The charge is that the book synthesizes research supporting its position with more weight than research pointing in other directions, producing a confident conclusion that goes beyond what the full evidence base supports. Selective citation is a risk for any single-author synthesis on a contested topic.`,
              audioPrompt: `Selective citation is a criticism leveled against Jonathan Haidt's "The Anxious Generation" by researchers including Amy Orben, Andrew Przybylski, and Candice Odgers, {name}. The charge is that the book synthesizes and emphasizes research supporting the substantial-harm position more than research pointing toward small effects, producing a confident conclusion that goes beyond what the full contested evidence base actually supports. This criticism is methodological, not ideological — the researchers criticizing Haidt are not defending smartphones in general; they are arguing that the evidence for the specific causal claims in the book is weaker than the book presents. Selective citation is not a sign of dishonesty; it is a structural risk for any author writing a popular book on a contested topic, because the book naturally organizes around an argument and the author's interpretation shapes which evidence gets weight and which gets less. The lesson's practical implication is that reading a single popular book on a contested topic, even a rigorous one by a credible researcher, gives you that author's synthesis rather than the balanced state of the evidence. Reading the book alongside the critic responses from Orben, Przybylski, and Odgers gives substantially more balanced understanding of where the evidence actually stands.`,
            },
            {
              word: `Tier B reasoning`,
              definition: `The pattern of forming a confident belief from a single popular book on a contested topic, without engaging with the critical response or the opposing side's synthesis. "I read Haidt's book and now I know what's true about smartphones" is an example. Tier B reasoning misses the contested nature of the underlying evidence because Tier B books present one synthesized position persuasively rather than the full contested literature.`,
              audioPrompt: `Tier B reasoning is the pattern of forming a confident belief from a single popular book on a contested topic without engaging with the critical response or the opposing synthesis, {name}. "I read 'The Anxious Generation' and now I know what smartphones do to teenagers" is the lesson's example of Tier B reasoning. Jonathan Haidt is a credible researcher, not a Tier C influencer — but his book is still a single-author synthesis from one side of a contested literature, presented with high confidence. The researchers who have criticized the book, including Amy Orben, Andrew Przybylski, and Candice Odgers, are also credible researchers whose responses appear in peer-reviewed journals. Reading only the book gives you Haidt's synthesis. Reading the book alongside the critic responses gives you a substantially more accurate picture of where the evidence actually stands and where the genuine uncertainty is. The same pattern applies to Jean Twenge's books, and to any popular book on any genuinely contested topic. The skill the lesson builds is recognizing when you're in contested territory and not settling into confident belief from a single Tier B source, regardless of how persuasive or well-written it is.`,
            },
          ],
        },

        {
          id: `l14-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Tier C: Viral Content And Influencer Monetization`,
          paragraphs: [
            `Tier C includes viral content, influencer monetization, news media simplification, and pop content about tech and adolescents. This is most of what people actually encounter, much more than Tier A research or Tier B books. Recognizing Tier C patterns helps you not be shaped primarily by content that's optimized for engagement rather than accuracy.`,
            `What Tier C looks like on this topic. Viral videos with framings like "5 ways smartphones are destroying your teenager" or "the truth about screen time pediatricians don't want you to know." Influencer monetization through "digital detox" programs, screen-time control apps, parental control software, "kid-safe" phones, productivity courses. News media headlines that simplify complex research into dramatic claims. Politicians making confident claims about cause-and-effect that researchers haven't established. Memes and reels with definitive statements about what tech is doing.`,
            `Patterns to recognize. Confidence beyond what evidence supports. Single-cause framings of complex outcomes (smartphones caused the mental health crisis; smartphones are fine and the crisis is something else). Monetization tied to particular framings (the person selling the digital detox program needs you to believe digital detox is necessary). Click-driven simplification of nuanced research. Generational stereotyping ("Gen Z is broken because of phones"). Moral panic framings that have predictable shape across history (every new media has been blamed for harming youth (comic books, television, video games, smartphones), and the framings are usually wrong).`,
            `Important distinction. Tier C isn't always wrong. Some Tier C content reflects underlying research accurately enough for practical purposes. But Tier C is optimized for engagement (viral sharing, attention, conversion to product purchases) rather than accuracy. Even when it's right, it's right for the wrong reasons; the framing succeeded because it engaged you, not because it tracked the evidence.`,
            `Three questions for Tier C content on this topic. First: what specific evidence is cited and at what tier? "Studies show..." with no specific citation is Tier C reasoning. Second: what does this content sell? If the framing supports something the creator monetizes (digital detox app, parental control software, "tech-free" parenting consulting), the financial incentive shapes the framing in ways worth noticing. Third: does the content acknowledge the actual contested state of the research, or does it present a single position with high confidence? Genuine experts on this topic typically acknowledge uncertainty; confident pop framings usually reflect missing the contested reality.`,
            `For your generation specifically. You're being marketed to from all sides on this topic. The "tech is destroying your generation" framing sells books, apps, programs, and political agendas. The "tech is fine, ignore the panic" framing sells different things (game subscriptions, social media engagement, less-monitored phones). Recognizing both as Tier C when they appear in viral form helps you make decisions about your own tech use based on Tier A and B evidence rather than engagement-optimized content.`,
          ],
          image: `/voyager-assets/life-wellness/l14-s4-tier-c.webp`,
          imageCaption: `Tier C: viral content, influencer monetization, news simplification. Patterns: confidence beyond evidence, single-cause framings, monetization tied to framings, moral panic shape. Both directions ("tech destroys" and "tech is fine") have Tier C variants.`,
          vocab: [
            {
              word: `influencer monetization`,
              definition: `Viral content, influencer monetization, news media simplification, pop content on contested topics. Patterns: confidence beyond evidence; single-cause framings of complex outcomes; monetization tied to framings (digital detox apps, parental control software); click-driven simplification; generational stereotyping; moral panic framings (every new media historically blamed for harming youth). Three questions: what specific evidence at what tier? what does the content sell? does it acknowledge contested state of research? Both directions (alarmist and dismissive) have Tier C variants.`,
              audioPrompt: `Tier C sources are viral content, influencer monetization, news media simplification, and pop content about contested topics, {name}. This is most of what people actually encounter, much more than Tier A research or Tier B books. Patterns to recognize in Tier C content: confidence beyond what evidence supports. Single-cause framings of complex outcomes. Monetization tied to particular framings: the person selling the digital detox program needs you to believe digital detox is necessary. Click-driven simplification of nuanced research. Generational stereotyping. Moral panic framings that have predictable shape across history; every new media has been blamed for harming youth, including comic books, television, video games, and now smartphones, and the framings have historically been mostly wrong. Three questions for Tier C content: First, what specific evidence is cited and at what tier? Second, what does this content sell? Third, does the content acknowledge the actual contested state of the research, or does it present a single position with high confidence? Genuine experts typically acknowledge uncertainty.`,
            },
            {
              word: `single-cause framing`,
              definition: `A pattern in Tier C content that attributes complex outcomes to one cause with high confidence. On the tech-and-adolescents topic, examples include "smartphones caused the mental health crisis" and "smartphones are fine and the crisis is something else entirely." Both are single-cause framings of outcomes that research suggests are multifactorial and contested. Single-cause framings are engaging and shareable; they are also usually wrong about complex social phenomena.`,
              audioPrompt: `Single-cause framing is a pattern in Tier C content that attributes complex outcomes to one cause with high confidence, {name}. On the tech-and-adolescents topic, the lesson identifies examples in both directions: "smartphones caused the mental health crisis" is a single-cause alarmist framing; "smartphones are fine and the crisis is something else entirely" is a single-cause dismissive framing. The research on adolescent mental health does not support simple single-cause explanations. The mental health measures that have risen since approximately 2012 are complex social phenomena influenced by many factors. Serious researchers who argue for substantial smartphone harm, like Twenge and Haidt, still acknowledge other contributing factors even while emphasizing smartphones. Researchers who argue for small smartphone effects, like Przybylski and Orben, are not claiming teen mental health is fine — they're arguing the smartphone causal mechanism specifically is overstated. Single-cause framings perform well on social media because they are simple, emotionally clear, and shareable. That is exactly the kind of engagement-optimization that marks Tier C content rather than accuracy-oriented content. When you see confident single-cause framings on contested topics, that confidence itself is a Tier C pattern worth flagging.`,
            },
            {
              word: `digital detox`,
              definition: `A term used in Tier C content and consumer products referring to intentional reduction or elimination of device use, typically framed as a solution to harms caused by screens. The lesson notes that digital detox programs and apps represent a monetization pattern tied to alarmist framings: the creator of a digital detox product needs you to believe digital detox is necessary, which shapes the framing of their content.`,
              audioPrompt: `Digital detox is a term used in Tier C content and consumer products to describe intentional reduction or elimination of smartphone and social media use, framed as a solution to screen-related harm, {name}. The lesson uses digital detox as an example of monetization tied to particular framings. The person selling the digital detox program, the parental control software, or the screen-time management app has a financial incentive for you to believe that smartphone use is harmful enough to require their product. That financial incentive shapes the framing of their content in ways worth noticing when you evaluate what they're telling you. This doesn't mean everything said by digital detox proponents is wrong — some practices that get packaged into detox products, like keeping phones out of bedrooms and reducing passive scrolling, are actually supported across both sides of the contested research literature. But the packaging and the confidence level of the commercial Tier C claims around digital detox are driven by marketing incentives, not by the evidence. The second of the three Tier C questions the lesson gives you — what does this content sell? — is directly targeted at this pattern. When a creator's framing conveniently supports the product or program they're selling, that alignment is worth flagging.`,
            },
          ],
        },

        {
          id: `l14-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Before You Work The Source Evaluation`,
          paragraphs: [
            `The source evaluation that follows tests whether you can identify which tier different sources on tech-and-adolescents belong to. This generalizes far beyond this topic; contested research appears across nearly every domain that matters.`,
            `One framing as you evaluate. The three tiers don't map onto "correct vs wrong." A Tier A paper can be wrong; a Tier C influencer can stumble onto truth. The tiers are about reliability and how much weight to give. Tier A: direct evidence, stated uncertainty, hard to read. Tier B: synthesis, author selection and interpretation, accessible. Tier C: engagement-optimized, often monetized, simplified.`,
            `Another framing. On genuinely contested topics like this one, your best framework is exposure to both sides of the contested literature (or at least to credible critics of any popular book you read), recognition of Tier C patterns when they appear (in either direction), and humility about confident claims that go beyond what the evidence actually supports. This is more demanding than just trusting whichever book or influencer you encountered most recently, but it produces dramatically more accurate beliefs over time.`,
            `One practical framing. What does the contested research actually mean for your own tech use decisions? The honest answer: the absolute level of effects is uncertain, but several specific things are well-supported by both sides of the contested literature. Phones in bedrooms reliably reduce sleep. Constant interruption reduces focus and learning. Passive scrolling tends to produce worse outcomes than active communication or creating. Specific high-risk content (eating disorder content, self-harm content, extremist content) produces worse outcomes for vulnerable kids. These specific findings don't depend on resolving the broader contested question; they're supported across the literature.`,
            `One last framing. You're 12. The tech-use patterns you build now will shape your relationship with attention, social connection, and information for decades. Rather than picking a Tier C team, building deliberate framework based on what's actually supported across both sides of the contested literature protects you better. The tier evaluation skill you're building here applies to politics, climate communication, economics, health, education, and many other contested domains.`,
          ],
          image: `/voyager-assets/life-wellness/l14-s5-before.webp`,
          imageCaption: `Source evaluation skill generalizes far beyond tech and adolescents. On contested topics: expose to both sides, recognize Tier C patterns, build framework on what's actually supported across the literature.`,
          vocab: [
            {
              word: `navigating contested research`,
              definition: `On genuinely contested topics (tech/adolescents, politics, climate, economics, health, education), best framework is: expose to both sides of contested literature (or credible critics of any popular book); recognize Tier C patterns in either direction; humility about confident claims beyond what evidence supports. More demanding than trusting most recent book/influencer but produces dramatically more accurate beliefs. For tech specifically, several things are supported across both sides: phones in bedrooms reduce sleep, constant interruption reduces focus, passive scrolling correlates with worse outcomes than active use, high-risk content harms vulnerable kids.`,
              audioPrompt: `Navigating contested research is the actual skill you're building, {name}. On genuinely contested topics, your best framework is exposure to both sides of the contested literature, or at least to credible critics of any popular book you read, recognition of Tier C patterns when they appear in either direction, and humility about confident claims that go beyond what the evidence actually supports. This is more demanding than just trusting whichever book or influencer you encountered most recently, but it produces dramatically more accurate beliefs over time. For tech and adolescents specifically, the absolute level of effects is uncertain, but several specific things are well-supported by both sides of the contested literature. Phones in bedrooms reliably reduce sleep. Constant interruption reduces focus and learning. Passive scrolling tends to produce worse outcomes than active communication or creating. Specific high-risk content produces worse outcomes for vulnerable kids. These specific findings don't depend on resolving the broader contested question; they're supported across the literature. The tier evaluation skill you're building applies to politics, climate communication, economics, health, education, and many other contested domains.`,
            },
            {
              word: `passive scrolling`,
              definition: `Consuming a social media or video feed without producing content, messaging others, or engaging in active communication. The lesson notes that passive scrolling consistently correlates with worse wellbeing outcomes compared to active communication or creating content — and that this specific finding is supported across both sides of the contested tech-and-adolescents literature, making it a useful guide for personal tech decisions regardless of the broader contested question.`,
              audioPrompt: `Passive scrolling refers to consuming a social media or video feed without producing content, messaging others, or engaging in active communication, {name}. The lesson identifies this as one of the specific findings supported across both sides of the contested tech-and-adolescents literature. Jean Twenge, Jonathan Haidt, and their colleagues who argue for substantial smartphone harm have found passive scrolling associated with worse mental health outcomes. Andrew Przybylski, Amy Orben, and their colleagues who argue the overall effects are small also find that passive consumption specifically produces worse outcomes than active use. This is genuinely cross-cutting evidence: even researchers who disagree about the size of overall smartphone effects tend to find that passive scrolling in particular correlates with worse wellbeing outcomes compared to active communication, creating, or other engaged uses. The practical implication for your own tech decisions doesn't depend on resolving the broader contested question about whether smartphones have caused the rise in adolescent mental health problems. You can act on the passive-versus-active distinction with confidence because it's supported across the literature, whatever you conclude about the big causal question.`,
            },
            {
              word: `epistemic humility`,
              definition: `Appropriate uncertainty about the strength of your beliefs relative to the actual quality and state of the evidence. On contested research topics, epistemic humility means not forming confident conclusions from a single popular book or Tier C source, recognizing where genuine uncertainty exists, and updating beliefs when credible evidence warrants it. The lesson frames this as the correct response to the contested tech-and-adolescents literature.`,
              audioPrompt: `Epistemic humility is appropriate uncertainty about the strength of your beliefs relative to the actual quality and state of the evidence, {name}. The lesson identifies it as the correct epistemic response to genuinely contested research. On the tech-and-adolescents question, epistemic humility means not concluding from "The Anxious Generation" alone that smartphones are definitively causing the adolescent mental health crisis, and not concluding from Przybylski and Orben's work alone that smartphone effects are trivially small and the concerns are all moral panic. Both sets of researchers are credible. Both sets of methods are legitimate. The disagreement is genuine. Epistemic humility means holding appropriate uncertainty about a question where the evidence is genuinely contested, being willing to say "I'm not sure" rather than picking the most persuasively argued team, and making practical decisions based on what's actually supported across both sides of the literature rather than on what you read most recently. The lesson frames this as more demanding than just trusting whichever book or influencer you encountered last, but as producing dramatically more accurate beliefs over time across many contested domains — not just tech and adolescents, but politics, climate, economics, health, and education as well.`,
            },
          ],
        },

        // ───── SOURCE EVALUATION ─────────────────────────────────────────────
        {
          id: `l14-source-evaluation`,
          type: `source-evaluation`,
          headline: `Three Sources On Tech And Adolescents`,
          intro: `{name}, three sources on tech and adolescent wellbeing. Evaluate each: what tier? what evidence is cited? what's being sold? does it acknowledge the contested state of research?`,
          sources: [
            {
              id: `source-a`,
              tier: `A`,
              title: `Peer-reviewed research paper: "Screen time and well-being among adolescents: Effect sizes and the moderating role of sociodemographic factors" by Andrew Przybylski and Amy Orben, Nature Human Behaviour (2019)`,
              content: `Published in Nature Human Behaviour, a major peer-reviewed scientific journal. The paper uses three large nationally representative datasets covering hundreds of thousands of adolescents to analyze associations between screen time and adolescent wellbeing. The methodology is specification curve analysis, which tests how findings change across many analytic choices. The findings: effects of screen time on wellbeing are statistically detectable but very small in absolute terms, comparable to effects of "regular potato consumption" or "wearing glasses." The paper explicitly acknowledges its limitations: it can't establish causation; it relies on self-report screen time measures which are unreliable; it can't distinguish different types of screen use. The authors include extensive discussion of how their findings should and shouldn't be interpreted. They cite peer-reviewed work from researchers who have reached different conclusions and engage with that work substantively. The paper has been cited extensively in subsequent research, criticized by some researchers, and is one of the foundational publications for the "small effects" position in the contested literature.`,
              evaluation: {
                tier: `Tier A`,
                strengths: `Direct evidence from peer-reviewed research using rigorous methodology and large datasets. Explicit acknowledgment of limitations and uncertainty. Engagement with opposing positions. Published in major journal with peer review. Has been replicated and cited extensively. Foundational source for "small effects" position.`,
                concerns: `Hard to read for non-specialists. Doesn't tell you what to do with the findings. Reflects one methodological approach (specification curve analysis); other methodological approaches reach different conclusions. Single paper from a contested literature; reading only one paper in either direction doesn't give balanced view.`,
                weight: `High weight. Tier A peer-reviewed research from credible researchers with rigorous methodology is direct evidence rather than secondhand framing. Should be read alongside Tier A research from researchers reaching different conclusions (Twenge's work) for balanced view of the contested literature.`,
              },
            },
            {
              id: `source-b`,
              tier: `B`,
              title: `Popular book: "The Anxious Generation: How the Great Rewiring of Childhood Is Causing an Epidemic of Mental Illness" by Jonathan Haidt (2024)`,
              content: `Bestselling book by Jonathan Haidt, NYU social psychologist with substantial research credentials. Haidt argues that smartphones and social media have caused a major mental health decline in adolescents since approximately 2012, particularly in girls. The book synthesizes large amounts of research evidence supporting this position, proposes specific causal mechanisms (smartphone-based childhood replacing play-based childhood, decline of in-person social activity, sleep deprivation, attention fragmentation), and recommends specific interventions (no smartphones before high school, no social media until 16, phone-free schools, more independent play). The book is written for general audiences and is highly readable. It has been extensively discussed in mainstream media and has influenced policy in multiple states/countries (Australia smartphone ban for under-16s on social media, various US state laws, school phone bans). It has been criticized by researchers including Amy Orben, Andrew Przybylski, Candice Odgers, and others for what they argue is overstatement of evidence, selective citation of supportive research, and confidence beyond what the data supports. The criticism appears in peer-reviewed journals and credible media. Haidt has engaged with critics but maintains his position. The book has also been defended by other researchers as making appropriate inferences from convergent evidence. Haidt monetizes the book and has a related Substack with affiliated content.`,
              evaluation: {
                tier: `Tier B`,
                strengths: `Synthesis of research accessible to non-specialists. Specific actionable recommendations. Written by credible researcher with research credentials. Engages with mechanisms not just correlations. Has influenced real policy discussion.`,
                concerns: `Single-author selection and interpretation of contested evidence presented with high confidence. Criticized by multiple credible researchers for methodological issues. Reading only this book without engaging with critics gives one position from contested literature, not balanced view. Author has financial interest in the book's framing succeeding. The "high confidence" tone doesn't match the contested state of the underlying research.`,
                weight: `Moderate weight as one synthesis from one side of contested literature. Should be read alongside the critic response (Orben/Przybylski/Odgers) and alongside Tier A research from researchers reaching different conclusions, not as standalone source of truth.`,
              },
            },
            {
              id: `source-c`,
              tier: `C`,
              title: `Viral Instagram reel: "5 signs your teen is being destroyed by their phone (and what to do about it)" by TeenScreenCoach (1.2M followers, sells digital detox course $297)`,
              content: `48-second Instagram reel from an account called TeenScreenCoach with 1.2M followers. The reel lists five signs (mood changes when phone is taken away, less interest in family activities, sleep problems, less in-person social engagement, declining grades) and states confidently that smartphones cause these in essentially all teens. The reel cites "studies" without specific reference but mentions "research from major universities." It recommends the creator's "Digital Detox Method" course ($297) as the solution. The account's other content follows similar patterns: confident claims about smartphone harm, branded solutions, no engagement with researchers who disagree. The creator's bio mentions a non-research credential ("parenting coach certification") and includes affiliate links for parental control software. Comments are largely from concerned parents asking how to enroll in the course. The reel has 340K views and 12K shares.`,
              evaluation: {
                tier: `Tier C`,
                strengths: `Some of the listed signs are real correlates of high screen use found in research; the content isn't entirely false. Accessible format. Addresses real parental concern.`,
                concerns: `No specific evidence citations ("studies show," "research from major universities"). Confidence beyond what evidence supports; research is genuinely contested. Single-cause framing of complex outcomes (smartphones cause these signs in essentially all teens). Direct monetization tied to alarmist framing ($297 course solves problem the content created concern about). No engagement with researchers who disagree. Creator credentials are non-research. Optimized for engagement (5 signs, dramatic framing, viral format) rather than accuracy. Both correlation and causation collapsed.`,
                weight: `Low weight. This is engagement-optimized content with direct monetization tied to a confident framing of contested research. Even where individual claims are correct, the content succeeded because it engaged people, not because it tracked evidence. Should be recognized as Tier C and weighted accordingly.`,
              },
            },
          ],
          synthesisPrompt: `Looking at the three sources together, which one would shift your beliefs the most? Which ones would you trust to inform a specific decision about your own tech use? How does the contested nature of the underlying research change how you weight each source?`,
          reflectionPrompt: `The tier evaluation skill you just practiced generalizes to other contested topics (politics, climate, economics, health, education). What would Tier A, B, and C sources look like on a different contested topic you encounter?`,
        },

        {
          id: `l14-quiz`,
          type: `quiz`,
          headline: `Check your understanding`,
          questions: [
            {
              id: `q1`,
              type: `multiple-choice`,
              question: `Why is research on tech and adolescent wellbeing genuinely contested?`,
              options: [
                `Bad research`,
                `Serious researchers using rigorous methods reach different conclusions from largely the same data; can't run controlled experiments (no random assignment to phones vs no phones); self-report screen time is unreliable; effects might vary by use type/platform/individual/dose/age; the disagreement is substantive among credible researchers, not crank-vs-mainstream`,
                `Random`,
                `Just confusing`,
              ],
              correctIndex: 1,
              explanation: `Understanding why the research is contested is important. It's not because one side is clearly right and the other is crank; it's that the underlying questions are hard to answer cleanly and different methodological approaches reach different conclusions.`,
            },
            {
              id: `q2`,
              type: `multiple-choice`,
              question: `Who are the main credible researchers on opposite sides of the contested tech/adolescents debate?`,
              options: [
                `Random`,
                `Substantial harm position: Jean Twenge (San Diego State, "iGen" 2017, "Generations" 2023, peer-reviewed work in Clinical Psychological Science, Emotion); Jonathan Haidt (NYU, "The Anxious Generation" 2024). Small effects position: Andrew Przybylski (Oxford), Amy Orben (Cambridge), peer-reviewed work in Nature Human Behaviour, Psychological Science; Pete Etchells ("Lost in a Good Game" 2019); Candice Odgers (UC Irvine)`,
                `Just one`,
                `Random`,
              ],
              correctIndex: 1,
              explanation: `Both sides include credible researchers with research credentials and peer-reviewed publications. Recognizing the disagreement is among credible researchers (not crank-vs-mainstream) shifts how to engage with the debate.`,
            },
            {
              id: `q3`,
              type: `multiple-choice`,
              question: `What does Tier A research on this topic provide?`,
              options: [
                `Just opinions`,
                `Direct access to evidence rather than secondhand framings; detailed methodology you can evaluate; specific findings with stated uncertainty; engagement with opposing positions; published in journals with peer review. Cost: hard to read for non-specialists, doesn't translate directly to practical guidance`,
                `Random`,
                `Just complicated`,
              ],
              correctIndex: 1,
              explanation: `Tier A is the highest reliability tier but has costs. The trade-off is direct evidence access vs accessibility. On contested topics, even Tier A research from researchers using different methods can reach different conclusions; reading one Tier A paper doesn't give balanced view.`,
            },
            {
              id: `q4`,
              type: `multiple-choice`,
              question: `What does Tier B (serious popular books) provide and what are the limits?`,
              options: [
                `Random`,
                `Provides: synthesis accessible to non-specialists; specific actionable recommendations; framework for understanding underlying questions. Limits: synthesis reflects author's interpretation and selection of evidence; single book on contested topic gives one position presented persuasively, not balanced view; author may have financial incentive in the book's framing succeeding; should be read alongside critical engagement and opposing positions`,
                `Just books`,
                `Random`,
              ],
              correctIndex: 1,
              explanation: `Tier B sources can be excellent (Haidt and Twenge are not Tier C influencers) but they should be read with awareness that they reflect single-author synthesis. "I read this book and now I know what's true" is a Tier B-only reasoning pattern that misses contested reality.`,
            },
            {
              id: `q5`,
              type: `multiple-choice`,
              question: `What patterns mark Tier C content?`,
              options: [
                `Random`,
                `Confidence beyond what evidence supports; single-cause framings of complex outcomes; monetization tied to particular framings (digital detox app, parental control software); click-driven simplification; generational stereotyping; moral panic shape; "studies show" without specific citation; both alarmist ("destroys teens") and dismissive ("totally fine") directions have Tier C variants`,
                `Just bad content`,
                `Random`,
              ],
              correctIndex: 1,
              explanation: `Recognizing Tier C patterns is the most important skill from this lesson because Tier C is what people encounter most. The patterns appear in both directions of the contested debate.`,
            },
            {
              id: `q6`,
              type: `multiple-choice`,
              question: `What three questions help evaluate Tier C content?`,
              options: [
                `Random three`,
                `First: what specific evidence is cited and at what tier? ("Studies show..." with no specific citation is Tier C reasoning.) Second: what does this content sell? Financial incentive shapes the framing. Third: does the content acknowledge the contested state of the research, or does it present a single position with high confidence? Genuine experts acknowledge uncertainty; confident pop framings usually reflect missing contested reality`,
                `Just one`,
                `Random`,
              ],
              correctIndex: 1,
              explanation: `These three questions cut through most Tier C content reliably. They apply across many topics beyond tech and adolescents.`,
            },
            {
              id: `q7`,
              type: `multiple-choice`,
              question: `What findings about tech and adolescents are supported across both sides of the contested literature?`,
              options: [
                `Nothing`,
                `Phones in bedrooms reliably reduce sleep; constant interruption reduces focus and learning; passive scrolling tends to produce worse outcomes than active communication or creating; specific high-risk content (eating disorder content, self-harm content, extremist content) produces worse outcomes for vulnerable kids; these findings don't depend on resolving the broader contested question`,
                `Just one thing`,
                `Random`,
              ],
              correctIndex: 1,
              explanation: `Even with the broader question contested, several specific findings are well-supported across the literature. Building specific practices based on these supported findings doesn't require resolving the broader debate.`,
            },
            {
              id: `q8`,
              type: `multiple-choice`,
              question: `Why is the tier evaluation skill important beyond tech and adolescents?`,
              options: [
                `Random`,
                `Contested research appears across nearly every important domain: politics, climate communication, economics, health, education, food/nutrition, parenting. Building skill in navigating contested research now (rather than just trusting whichever popular book read most recently) protects across many domains. The tier framework (Tier A peer-reviewed, Tier B serious popular, Tier C viral/monetized) applies generally`,
                `Just tech`,
                `Random`,
              ],
              correctIndex: 1,
              explanation: `This is the most important transferable skill from this lesson. Tech and adolescents is one specific contested topic; the framework for navigating contested research applies to many topics that matter for your life across decades.`,
            },
            {
              id: `q9`,
              type: `true-false`,
              question: `True or false: Reading "The Anxious Generation" by Jonathan Haidt gives you balanced understanding of what research on tech and adolescents actually shows.`,
              correctAnswer: false,
              explanation: `False. "The Anxious Generation" is a Tier B serious popular book presenting one position from a contested literature with high confidence. Multiple credible researchers (Orben, Przybylski, Odgers) have criticized the book for what they argue is overstatement of evidence. Reading only this book gives one position; balanced understanding requires reading critic responses and Tier A research from researchers reaching different conclusions.`,
            },
            {
              id: `q10`,
              type: `inference`,
              question: `Your friend says "I just watched a TikTok that proved smartphones are destroying our brains. We should all get flip phones." Based on this lesson, what should you point out?`,
              options: [
                `"Yes flip phones"`,
                `"Several specific things. First, a TikTok hasn't 'proved' anything about smartphones and brains; that's Tier C confidence framing on a genuinely contested topic. The actual research on tech and adolescent wellbeing is contested among credible researchers: Jean Twenge and Jonathan Haidt argue for substantial harm, Andrew Przybylski and Amy Orben argue effects are small, and the disagreement is substantive. Whatever the TikTok claimed, it almost certainly didn't engage with the contested nature of the underlying research. Second, three questions to ask about the TikTok specifically: what specific evidence was cited and at what tier? what's the creator selling (digital detox app, course, parental control product, brand sponsorship)? did they acknowledge that the research is contested or did they present a single position confidently? My guess is it failed all three. Third, what's actually supported across both sides of the contested literature: phones in bedrooms reduce sleep; constant interruption reduces focus; passive scrolling produces worse outcomes than active use; specific high-risk content harms vulnerable kids. These specific findings could inform real decisions about how to use phones better. Fourth, 'we should all get flip phones' is the wrong intervention even from the substantial-harm side; Haidt's specific recommendations are no smartphones before high school, no social media until 16, phone-free schools, more independent play, which are different from blanket flip phones at all ages. The TikTok was probably wrong about the specifics even within the most alarmist framing of the research. Fifth, the skill that matters here isn't deciding whether smartphones are good or bad; it's navigating contested research with appropriate humility, recognizing Tier C patterns, and acting on what's actually supported."`,
                `"Just trust TikTok"`,
                `"Random"`,
              ],
              correctIndex: 1,
              explanation: `Real applied source evaluation literacy on contested research. Reference all three tiers, name the contested nature, ask the three Tier C questions, point to what's actually supported across the literature, distinguish the specific interventions even within alarmist framings from blanket recommendations.`,
            },
          ],
        },

        {
          id: `l14-reflection`,
          type: `reflection`,
          headline: `Sit with this`,
          intro: `Pick the prompt that pulls at you most. Your answer is saved.`,
          prompts: [
            { id: `reflect-cognitive`, category: `Cognitive`, prompt: `Before this lesson, what was your working framework for tech and adolescent wellbeing? Has anything shifted?` },
            { id: `reflect-meta`, category: `Metacognitive`, prompt: `Honestly: how do you currently encounter information about tech and adolescents? Mostly Tier C? What does that mean for what you believe?` },
            { id: `reflect-identity`, category: `Identity`, prompt: `If you become someone who navigates contested research across decades with appropriate humility, what does that change about your beliefs and decisions?` },
            { id: `reflect-application`, category: `Application`, prompt: `Pick one specific tech-use decision you face (phone in bedroom, social media account, screen time on weekends). Apply what's supported across both sides of the literature. What would help?` },
            { id: `reflect-critical`, category: `Critical`, prompt: `The lesson presented multiple credible positions on tech and adolescents. What position do you currently hold? What would change your mind?` },
            { id: `reflect-personal`, category: `Personal investigation`, prompt: `Pick another contested topic (politics, climate, economics, health). Find one Tier A, one Tier B, and one Tier C source on it. Compare what each tells you.` },
          ],
        },

        {
          id: `l14-real-world`,
          type: `real-world`,
          headline: `Take it into your life`,
          guideContext: `Source evaluation skill at 12 protects against decades of believing Tier C content as if it were settled truth. Two paths.`,
          familyActivity: {
            title: `The Family Tech-And-Research Conversation`,
            duration: `45 minutes`,
            description: `Share the contested nature of the research (Twenge/Haidt vs Przybylski/Orben), the three tiers, and the questions for evaluating Tier C content. Many parents have been heavily exposed to either alarmist Tier B/C content ("The Anxious Generation" plus viral framings) or dismissive content; the conversation often surfaces specific beliefs worth examining. Consider establishing family practices: tech-use decisions based on what's actually supported (phones out of bedrooms, deliberate active vs passive use distinctions, specific high-risk content recognition) rather than blanket framings.`,
          },
          projectOption: {
            title: `Read both sides of a contested topic, 4 weeks (optional)`,
            duration: `4 weeks, ~30 minutes per session`,
            description: `Pick the contested topic. For tech and adolescents: Haidt's "The Anxious Generation" alongside Orben/Przybylski critic responses. For another contested topic (politics, climate, economics, health), find Tier A research and Tier B books from credible researchers on opposite sides. Read both. Write 1,500 words on what each gets right, what each gets wrong, where you land, and what would change your mind.`,
            offerToParent: `Parent: opt your kid into this project. Source evaluation literacy on contested topics at 12 protects against decades of believing Tier C content as settled truth and is one of the highest-leverage epistemic investments available.`,
          },
          identityQuestion: `If you become someone who navigates contested research with appropriate humility across decades (recognizing tiers, holding genuine uncertainty when it's there, building beliefs on what's actually supported), what does that protect about your beliefs and decisions across politics, health, parenting, work, and more?`,
        },

        {
          id: `l14-identity-hook`,
          type: `identity-hook`,
          headline: `Who is this lesson making you?`,
          prompt: `One sentence. No wrong answer.`,
          placeholder: `Someone who...`,
          examples: [
            `Someone who recognizes Tier C content patterns and weights sources accordingly.`,
            `A person who holds appropriate uncertainty on genuinely contested topics.`,
            `Someone who reads critics of any book they're persuaded by.`,
          ],
          saveKey: `identity_responses_lw_11_12_14`,
        },

        {
          id: `l14-celebration`,
          type: `celebration`,
          guideText: `{name}. Fourteenth Life Wellness lesson done. You now have framework for navigating genuinely contested research (Twenge/Haidt vs Przybylski/Orben on tech and adolescents), three-tier source evaluation (peer-reviewed / serious popular / viral monetized), specific questions for Tier C content, and recognition of what's supported across both sides of contested literature. The source evaluation skill generalizes far beyond this topic. Six lessons to go. Next time: body image and self-perception. Argument Builder format; requires extra care. Let's go. — Terra`,
          badge: `tech-literate`,
          badgeName: `Tech Literate`,
          xpEarned: 75,
          competencies: [
            `Knows tech and adolescents research is genuinely contested among credible researchers`,
            `Identifies key researchers and their positions (Twenge, Haidt, Przybylski, Orben, Odgers)`,
            `Distinguishes Tier A peer-reviewed, Tier B serious popular, Tier C viral monetized sources`,
            `Applies three Tier C questions (evidence tier, what's sold, contested acknowledgment)`,
            `Recognizes findings supported across both sides of the contested literature`,
          ],
          nextLessonPreview: {
            title: `Lesson 15: Body Image and Self-Perception`,
            hook: `Three positions on body image. Argument Builder. Requires extra care.`,
          },
        },
      ],
    },
  ],
};

export default LIFEWELLNESS_VOYAGER_L14;

if (import.meta.env?.DEV) {
  const l = LIFEWELLNESS_VOYAGER_L14.lessons[0];
  const mags = l.screens.filter((s) => s.type === `magazine`).length;
  const sourceEval = l.screens.find((s) => s.type === `source-evaluation`);
  const quiz = l.screens.find((s) => s.type === `quiz`)?.questions?.length ?? 0;
  const reflect = l.screens.find((s) => s.type === `reflection`)?.prompts?.length ?? 0;
  console.log(
    `[LESSON-LW-VOYAGER-L14 ${VERSION}] "${l.title}" mags=${mags} sources=${sourceEval?.sources?.length ?? 0} q=${quiz} r=${reflect}`
  );
}
