// ─────────────────────────────────────────────────────────────────────────────
// FUTURE SKILLS VOYAGER  |  L11 — Information Literacy
// Age band : voyagers (11-12)   Guide: byte (Fox)
// Standards: Coreverse Original — Media Literacy, Information Evaluation
// CALIBRATED: Voyager spec v1.1 (May 2026) — the meta-skill lesson on source evaluation
// Interaction format: SOURCE EVALUATION (Haidt vs academic critics vs viral content; multi-credible-source case)
// ─────────────────────────────────────────────────────────────────────────────

const VERSION = "voyager-fs-l11-v1";

const FUTURESKILLS_VOYAGER_L11 = {
  ageBand: `voyagers`,
  subjectId: `future-skills`,
  guide: `byte`,

  lessons: [
    {
      id: `fs-11-12-11`,
      title: `Information Literacy`,
      duration: 35,
      xpReward: 75,
      badge: `information-evaluator`,
      badgeName: `Information Evaluator`,

      screens: [
        {
          id: `l11-welcome`,
          type: `welcome`,
          guideText: `{name}, information literacy is the meta-skill — without it, every other skill rests on potentially false premises. This lesson goes beyond 'check your sources' to the harder question: what do you do when credible sources disagree? And how do you build an information diet that actually keeps you informed?`,
          headline: `Information Literacy`,
          subtitle: `The meta-skill lesson. The hardest case: when credible experts disagree.`,
          visual: `/voyager-assets/future-skills/l11-welcome.webp`,
        },

        {
          id: `l11-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `Why Information Literacy Is The Meta-Skill`,
          paragraphs: [
            `Almost every important decision you'll make as an adult depends on the quality of information you base it on. What to study. Who to vote for. What to eat. How to invest. Which medical decisions to trust. How to interpret events. The amount of bad information you'll be exposed to over a lifetime is enormous; the cost of acting on bad information is also enormous. Information literacy is the meta-skill that determines how well you handle this.`,
            `Most information-literacy advice gives you a checklist: check the date, look at the URL, check who wrote it, see if other sources agree. These lists are not wrong. They're also not enough. They handle the easy cases (obvious propaganda, AI-generated nonsense, deliberate hoaxes) but fail at the hard cases (working scientists who reach different conclusions; well-credentialed authors who got something wrong; consensus that turns out to be premature).`,
            `The harder cases come up a lot. Climate science consensus is strong but specific predictions vary across reputable models. Nutrition research often produces conflicting findings from credible labs. Economic forecasts from reputable institutions disagree systematically. Medical guidelines change over decades as evidence accumulates. The Stanford History Education Group's research on "civic online reasoning" found that even sophisticated adults struggle with these harder cases; professional fact-checkers do measurably better, not because they have a better checklist but because they have better habits of mind.`,
            `What the professional fact-checkers do differently. They engage in "lateral reading" — opening multiple tabs to check the source against other sources before evaluating the source's own content. They take seriously the question "what's the incentive structure here?" without using incentives as automatic dismissal. They calibrate confidence to evidence rather than holding all claims at the same confidence level. They notice when they're motivated to believe something and apply extra scrutiny then. These habits are learnable. Most people never develop them because they never get explicit instruction.`,
          ],
          image: `/voyager-assets/future-skills/l11-s1-meta.webp`,
          imageCaption: `Information literacy is the meta-skill. Checklists handle easy cases; habits of mind handle the hard ones.`,
          vocab: [
            {
              word: `lateral reading`,
              definition: `Practice of opening multiple browser tabs to check a source against other sources before evaluating the source's own content. Documented by the Stanford History Education Group as a key habit of professional fact-checkers. Distinct from "vertical reading" (staying on a page and judging it from its own content), which is what most readers default to.`,
              audioPrompt: `Lateral reading is the practice of opening multiple browser tabs to check a source against other sources before evaluating the source's own content, {name}. Documented by the Stanford History Education Group as a key habit of professional fact-checkers. Distinct from "vertical reading," which is staying on a page and judging it from its own content. Vertical reading is what most readers default to. It often fails because a well-designed source can look credible from its own framing while being unreliable. Lateral reading catches this. The technique sounds basic but the Stanford researchers found that even sophisticated adults rarely do it without instruction. Professional fact-checkers do it automatically. They've trained the habit. Anyone can train it. The compound effect over a lifetime of information consumption is enormous.`,
            },
            {
              word: `civic online reasoning`,
              definition: `Term used by the Stanford History Education Group for the set of skills needed to evaluate information encountered online. Their research found that even sophisticated adults struggle with hard cases involving credible-source disagreement, while professional fact-checkers do measurably better through specific habits of mind rather than better checklists.`,
              audioPrompt: `Civic online reasoning is a term used by the Stanford History Education Group for the set of skills needed to evaluate information encountered online, {name}. The Stanford researchers studied how different types of readers handle information evaluation tasks. They found that even sophisticated adults, including historians and college students, struggle with the harder cases: credible sources disagreeing, well-designed misleading content, and sources with subtle conflicts of interest. Professional fact-checkers did measurably better. The difference wasn't a better checklist. It was specific habits of mind: lateral reading automatically, weighing incentive structure without using it as automatic dismissal, calibrating confidence to actual evidence. These habits are teachable. Most people never get explicit instruction in them. The research is a key finding in information literacy, demonstrating that the skill gap is real and specific and can be closed with deliberate practice.`,
            },
            {
              word: `vertical reading`,
              definition: `Evaluating a source by staying on the page and judging its content from within itself. The default approach most readers use. Often fails because a well-designed source can look credible from its own framing while being unreliable or misleading. Contrasted with lateral reading, which checks the source against external sources.`,
              audioPrompt: `Vertical reading is the default approach most readers use to evaluate sources: staying on the page and judging the content from within itself, {name}. It's the approach you use when you scroll through an article and decide whether it seems trustworthy based on how it reads, what it cites within itself, and how it presents its claims. The problem is that a well-designed source can look credible from its own framing while being unreliable, misleading, or funded by parties with conflicts of interest. Vertical reading can't catch this because you're evaluating the source using only information the source provides. Professional fact-checkers were found by Stanford researchers to spend very little time on vertical reading before moving to lateral reading. They check what other sources say about the source before evaluating the source's own content. The contrast between vertical and lateral reading is one of the most practical findings in information literacy research.`,
            },
          ],
        },

        {
          id: `l11-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `When Credible Sources Disagree`,
          paragraphs: [
            `The hardest information cases are when sources you'd consider credible reach different conclusions. This happens constantly in real life. Two academic researchers analyze the same dataset and reach different findings. A respected medical organization and an equally respected medical organization issue different guidelines. Two reputable news sources frame the same event differently. The standard "is this source credible?" question doesn't help; both are credible.`,
            `Several things produce credible-source disagreement. First: the underlying question is genuinely contested, with evidence mixed. Honest researchers reading the same evidence can reasonably reach different conclusions. Second: different methodological approaches yield different findings, and reasonable people disagree about which method is best. Third: different value frameworks lead to different interpretations of the same facts. Fourth: timing — one source has access to data the other doesn't yet, or one source is reading older evidence. Fifth: a source has subtle systematic bias that affects how they interpret evidence, even though they're credible overall.`,
            `What to do when credible sources disagree. First: notice the disagreement is real. Don't pretend one side has obviously won when the evidence is mixed. Second: hold your beliefs at calibrated confidence — high enough to act on but low enough to update when better evidence comes in. Third: read both sides carefully, not just summaries. Often the disagreement is narrower than it appears once you see the actual arguments. Fourth: pay attention to what BOTH sides are doing well and badly. Often each side has spotted real problems with the other; both critiques have value even if neither position is fully right.`,
            `One important note. "Credible sources disagree" is not the same as "no one knows." The disagreement is usually about specifics within a broader area of consensus. Climate change happening is consensus; specific magnitude estimates vary. Vaccines preventing infectious disease is consensus; some specific vaccine effectiveness rates vary. Knowing where consensus is real and where genuine disagreement exists prevents both false confidence ("the experts know everything") and false skepticism ("the experts can't agree on anything").`,
          ],
          image: `/voyager-assets/future-skills/l11-s2-disagree.webp`,
          imageCaption: `Credible sources can disagree. The skill is calibrating between them, not pretending one side has won.`,
          vocab: [
            {
              word: `epistemic peer`,
              definition: `Someone roughly equal to you in expertise, reasoning ability, and access to relevant evidence. When you and an epistemic peer reach different conclusions on the same question, you have a "peer disagreement," which philosophers treat as evidence you should reduce your confidence even if you don't change your mind entirely. Important concept for handling expert disagreement.`,
              audioPrompt: `An epistemic peer is someone roughly equal to you in expertise, reasoning ability, and access to relevant evidence, {name}. When you and an epistemic peer reach different conclusions on the same question, you have a "peer disagreement." Philosophers of epistemology treat peer disagreement as evidence that you should reduce your confidence in your view, even if you don't change your mind entirely. The reasoning: if someone roughly as well-positioned as you to evaluate the question disagrees with your conclusion, that disagreement is information. Not necessarily that you're wrong. But evidence that the question is harder than it might seem. The concept is useful for handling expert disagreement. When credible experts disagree, treating them as epistemic peers and adjusting confidence accordingly is more accurate than picking one and ignoring the other. Knowing the concept gives you language for what's actually happening when experts diverge.`,
            },
            {
              word: `peer disagreement`,
              definition: `A situation in which two people with roughly equal expertise and access to evidence reach different conclusions on the same question. Philosophers treat peer disagreement as evidence that confidence should be reduced, even without changing one's position entirely. Credible experts disagreeing is a real-world instance of peer disagreement at scale.`,
              audioPrompt: `Peer disagreement is a situation in which two people with roughly equal expertise and access to evidence reach different conclusions on the same question, {name}. Philosophers of epistemology have developed formal theories of peer disagreement. The core question: if someone roughly as well-positioned as you to evaluate a question disagrees with your conclusion, what should you do? Some philosophers argue you should "split the difference" and move significantly toward their view. Others argue you can "stand firm" if you have direct access to reasons they may have missed. The practical takeaway for information literacy: when credible academic researchers like Haidt and Odgers reach different conclusions on the same question using the same data, that peer disagreement is evidence the question is harder than either confident side suggests. It's not a reason to throw up your hands but a reason to hold your conclusion with appropriately lower confidence than you would if the experts agreed.`,
            },
            {
              word: `methodological approach`,
              definition: `The specific research design and analytical choices that determine how a researcher gathers and interprets evidence. Different methodological approaches can yield different findings even from the same data. Credible source disagreement often reflects genuine disagreement about which methodological approach is most valid, not dishonesty or error.`,
              audioPrompt: `Methodological approach refers to the specific research design and analytical choices that determine how a researcher gathers and interprets evidence, {name}. It is one of several things that can produce credible-source disagreement on the same question. Different methodological approaches can yield genuinely different findings. One researcher might use longitudinal data tracking the same individuals over time; another might use cross-sectional data comparing groups at one time point. One might analyze average effects; another might look for effects in specific subgroups. One might control for different confounding variables. All of these choices are reasonable; they produce different results. The Haidt and Odgers disagreement involves exactly this kind of methodological dispute. Odgers argues that effect sizes from rigorously controlled studies are typically small and that Haidt's stronger conclusions depend on less methodologically rigorous evidence. Haidt responds that the convergent evidence across methods justifies higher confidence. Both are engaging seriously with methodology. Neither is dishonest.`,
            },
          ],
        },

        {
          id: `l11-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `The Information Diet Question`,
          paragraphs: [
            `Beyond evaluating individual sources, there's a bigger question: what's your overall information diet? What you consume regularly shapes how you think about everything else. If you spend hours daily in algorithmic feeds optimized for emotional engagement, your sense of what's important, common, and worth caring about gets shaped by the feed's incentives. Most algorithmic feeds reward outrage, novelty, and tribal alignment, not accuracy.`,
            `This is a recent problem on this scale. Pre-internet, your information sources were limited (a few newspapers, a few TV channels, a few magazines), and most of them were edited by humans with some sense of accountability for what they published. The internet expanded sources dramatically. Social media added algorithmic filtering optimized for engagement rather than accuracy. The result: it's possible to spend hours daily consuming information without ever encountering anything credibly fact-checked.`,
            `Researchers who study information diets find clear patterns. People who consume more variety of sources, especially across political and methodological perspectives, tend to be more accurate in their beliefs about controversial topics. People who consume narrow tribally-aligned sources tend to be more confident in their beliefs and less accurate. The first group experiences more cognitive discomfort (encountering disagreement is uncomfortable); the second group experiences more confidence and accuracy errors. The trade-off is real.`,
            `One useful framing. Treat your information diet like your food diet. Mostly nutritious content (peer-reviewed work, careful journalism, books by careful thinkers). Some indulgent content (entertainment, casual reading) is fine. Very little junk (engagement-optimized algorithmic feeds, viral hot takes). Most people get this backwards: their information diet is mostly engagement-optimized content with occasional careful reading. The compound effect on what they believe over decades is dramatic.`,
            `One last thing. Information diet matters more than any individual evaluation. You can be excellent at evaluating one source while spending most of your time consuming content you don't evaluate at all. The leverage is in what you regularly consume, not just in what you carefully evaluate. Most adults have never explicitly thought about their information diet. The kids who do, starting now, will be dramatically better informed at 30 than peers who didn't.`,
          ],
          image: `/voyager-assets/future-skills/l11-s3-diet.webp`,
          imageCaption: `Information diet matters more than any individual evaluation. Mostly nutritious, some indulgent, very little junk.`,
          vocab: [
            {
              word: `algorithmic feed`,
              definition: `Content stream selected by software (algorithms) based on signals about what will hold your attention or generate engagement. Used by social media platforms, news aggregators, video sites. Optimized for engagement rather than accuracy, which produces systematic patterns in what gets shown (outrage, novelty, tribal alignment). Distinct from chronological or human-edited feeds.`,
              audioPrompt: `An algorithmic feed is a content stream selected by software based on signals about what will hold your attention or generate engagement, {name}. Used by social media platforms, news aggregators, video sites. Different from chronological feeds, which just show content in order, or human-edited feeds, which show what editors chose. Algorithmic feeds are optimized for engagement rather than accuracy. This produces systematic patterns in what gets shown: outrage tends to engage more than balanced reporting, novelty tends to engage more than depth, tribal alignment tends to engage more than challenge. These patterns aren't accidents; they're the algorithms doing what they were designed to do. Knowing how algorithmic feeds work helps you recognize what you're actually consuming. The same content presented in a chronological or edited feed would feel different from algorithmic curation.`,
            },
            {
              word: `information diet`,
              definition: `The overall pattern of what information sources you regularly consume. What you consume shapes how you think about everything. People with varied source diets across political and methodological perspectives tend to be more accurate; those with narrow tribally-aligned diets tend to be more confident and less accurate. Mostly nutritious, some indulgent, very little junk.`,
              audioPrompt: `Information diet is the overall pattern of information sources you regularly consume, {name}. Analogous to a food diet. What you consume regularly shapes how you think about everything else: what seems important, what seems common, what seems worth caring about. Researchers who study information diets find clear patterns. People who consume more variety of sources, especially across political and methodological perspectives, tend to be more accurate in their beliefs about controversial topics. People who consume narrow tribally-aligned sources tend to be more confident in their beliefs and less accurate. The trade-off is real: diverse diets produce more cognitive discomfort from encountering disagreement, and narrower diets produce more comfortable certainty that is less accurate. Useful framing: mostly nutritious content, meaning peer-reviewed work, careful journalism, and books by careful thinkers. Some indulgent content is fine. Very little junk, meaning engagement-optimized algorithmic feeds and viral hot takes. Most people get this backwards, and the compound effect on what they believe over decades is substantial.`,
            },
            {
              word: `tribal alignment`,
              definition: `Content that reinforces the beliefs, identity, and grievances of a particular group regardless of its accuracy. One of the patterns algorithmic feeds systematically promote because it generates strong engagement from in-group members. Consuming primarily tribally-aligned content produces higher confidence in group beliefs and lower accuracy on questions where the group's beliefs are wrong.`,
              audioPrompt: `Tribal alignment is content that reinforces the beliefs, identity, and grievances of a particular group regardless of its accuracy, {name}. It is one of the patterns that algorithmic feeds systematically promote because it generates strong engagement from in-group members. Sharing content that validates your group's view produces likes, comments, and shares from people who agree. This engagement signals to the algorithm that more similar content should be shown to more similar users. The result is that tribally-aligned content spreads quickly and widely in any engaged community. Consuming primarily tribally-aligned sources produces higher confidence in group beliefs, because everything you encounter confirms them, and lower accuracy on questions where the group's beliefs happen to be wrong. The mechanism is the same regardless of political or ideological direction. Left-aligned tribal content and right-aligned tribal content produce the same epistemic outcome: high confidence and lower accuracy. Recognizing tribal alignment as a feed pattern, rather than as simply content that happens to agree with you, is one of the most practically useful tools in managing your information diet.`,
            },
          ],
        },

        {
          id: `l11-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `The Source Evaluation Framework, Consolidated`,
          paragraphs: [
            `Across this band and the Cosmos band, you've been applying source evaluation to many specific cases. Let's consolidate the framework. When evaluating any source on any topic, several questions matter.`,
            `First: what are the author's credentials and conflicts of interest? Credentials don't make someone right (smart credentialed people get things wrong); they're context for evaluating whether the author engaged seriously with the topic. Conflicts of interest don't make someone wrong (people with conflicts can still be accurate); they're context for what to look for. The skill is weighing both as relevant context, not using either as automatic acceptance or dismissal.`,
            `Second: what's the methodology? How did the author reach their conclusions? Was it peer-reviewed research, careful journalism, personal experience, secondary sources, or speculation? Different methodologies produce different reliability. Specific findings from a randomized controlled trial are more reliable than the same findings from anecdote. A New York Times investigation is more reliable than a personal blog. None of these are automatic; you still have to read carefully. But methodology is real context.`,
            `Third: what's the evidence base? Does the source cite specific data, studies, or events? Does it engage with opposing evidence or dismiss it? Are the citations checkable? "I'll just trust my gut" is weak evidence; "here's a peer-reviewed study with this methodology and finding" is strong evidence. Many viral sources skip evidence entirely and rely on confident assertion. That's a signal.`,
            `Fourth: what's the financial incentive structure? Who pays for the source's work, and what would change if their conclusions changed? Industry-funded research isn't automatically wrong but should be read knowing the incentives. Course-and-affiliate viral content is structurally shaped by what makes sales. Academic researchers have their own incentives (publication, reputation). Government sources have political incentives. None of these are knockdown problems; they're context for what to look for in the work itself.`,
            `Fifth: does the source acknowledge uncertainty and limits? Confident overclaiming is a stronger signal of unreliability than admitting uncertainty. "This is what we know; this is what we don't" is a sign of careful work. "This is the SECRET they don't want you to know" is a sign of viral content.`,
            `Sixth: does the source engage with opposing views? Strong sources engage seriously with the strongest counterarguments. Weak sources strawman the other side or ignore it. This applies to both academic work and journalism. A source that only steelman cases agreeing with its conclusion is less reliable than one that engages with disagreement.`,
            `Seventh: does the methodology and conclusion match? Sometimes the methodology is sound but the conclusions overreach what the data supports. A small study might show a real effect; claiming the effect is large or universal goes beyond the data. Reading carefully reveals these gaps.`,
            `Apply all seven (or as many as you can) when evaluating any source. The framework compounds across thousands of sources you'll encounter.`,
          ],
          image: `/voyager-assets/future-skills/l11-s4-framework.webp`,
          imageCaption: `Seven questions for evaluating any source. Apply across thousands of sources over your lifetime.`,
          vocab: [
            {
              word: `steelmanning`,
              definition: `Practice of stating an opposing argument in its strongest possible form (the opposite of strawmanning, which states it in its weakest form) before responding to it. A signal of careful thinking. Sources that engage with the strongest version of opposing views are more reliable than sources that only attack the weakest versions.`,
              audioPrompt: `Steelmanning is the practice of stating an opposing argument in its strongest possible form before responding to it, {name}. The opposite of strawmanning, which is stating an opposing argument in its weakest form so it's easier to attack. Steelmanning is a signal of careful thinking. When a source steelmen the opposing position, you can trust that they engaged seriously with the strongest case against their view. When a source strawmens, you should suspect they couldn't actually engage with the strongest opposing arguments. The skill is learnable through deliberate practice. Steelman the opposing view in your own arguments and look for steelmanning in sources you read. Sources that engage with strongest opposing views are more reliable than sources that only attack the weakest versions.`,
            },
            {
              word: `incentive structure`,
              definition: `The financial, professional, or reputational rewards that shape how a source frames and communicates information. One of the seven source-evaluation questions. Industry-funded research isn't automatically wrong; viral monetized content isn't automatically right. Incentive structure is context for what to look for in the work, not automatic acceptance or dismissal.`,
              audioPrompt: `Incentive structure refers to the financial, professional, or reputational rewards that shape how a source frames and communicates information, {name}. It is one of the seven source-evaluation questions in the consolidated framework. Different sources have different incentive structures. Industry-funded research has financial incentives toward favorable findings. Viral content creators have incentives toward confident, shareable claims that drive sales. Academic researchers have incentives toward peer approval and reputation in their field, which reward accuracy but also novelty and citation. Government sources have political incentives. None of these are knockdown problems; they're context for what to look for in the work itself. The professional fact-checker skill is taking incentive structure seriously without using it as automatic dismissal. A source with a financial conflict isn't automatically wrong. But knowing the conflict tells you what kinds of errors are more likely and what to scrutinize most carefully. Incentive structure guides reading; it doesn't replace it.`,
            },
            {
              word: `overconfident conclusions`,
              definition: `Claims that go beyond what the supporting methodology and evidence actually warrant. A common pattern in both viral content and some academic work. When a small study shows a real effect, claiming the effect is large or universal overreaches the data. Viral content regularly presents moderate findings as settled certainties. Reading carefully reveals these gaps between evidence and conclusion.`,
              audioPrompt: `Overconfident conclusions are claims that go beyond what the supporting methodology and evidence actually warrant, {name}. They are the seventh source-evaluation concern: does the methodology and conclusion match? A study might be methodologically sound but the conclusions overreach what the data supports. A small study in one population might show a real effect; claiming the effect is large or universal goes beyond the data. Viral content regularly commits this error in both directions: it takes moderate findings and presents them as settled certainties. "Social media is LITERALLY destroying our children's brains" overreaches what even the most pro-concern academic research supports. But overconfident conclusions aren't only a viral content problem. Academic press releases and popular book-length arguments can also overstate specific findings. The skill is comparing the evidence base to the confidence of the conclusion. When the conclusion is much more confident than the evidence warrants, that's a signal to read more carefully and hold the conclusion with lower confidence than the source suggests.`,
            },
          ],
        },

        {
          id: `l11-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Before You Evaluate The Sources`,
          paragraphs: [
            `In the source evaluation that follows, you'll see three sources on a real contested question relevant to your generation: is social media bad for adolescent mental health? Two sources are credible academic researchers reaching different conclusions. The third is viral content. The exercise is calibrating between competing credible sources, which is the hardest case in information literacy.`,
            `One framing as you work. The point isn't to determine who's "right" — the question is genuinely contested in academic literature. The point is to engage with the disagreement seriously, notice what each side does well, and arrive at calibrated uncertainty. Both extreme positions ("social media is destroying youth" and "social media has no significant effects") are less accurate than the messy middle most researchers actually inhabit.`,
            `Another framing. The viral content in source C isn't a strawman; it's recognizable real content from the actual ecosystem. Some viral takes are aligned with one academic side, some with the other. The viral content's problems are usually about confidence levels, missing nuance, and engagement optimization rather than being wholly fabricated. Identifying this kind of content protects you from accepting one academic side's conclusions wholesale just because it agrees with content you've already seen.`,
            `One last framing. You're going to make many decisions over your lifetime about information sources, what to believe, how to act on uncertainty. The framework you build here is the load-bearing skill. Take it seriously. Most adults never explicitly develop it.`,
          ],
          image: `/voyager-assets/future-skills/l11-s5-before.webp`,
          imageCaption: `The hardest case: two credible academic sources disagree. Plus viral content. Real information literacy.`,
          vocab: [
            {
              word: `calibrated uncertainty`,
              definition: `Holding beliefs at confidence levels that match the actual evidence and degree of expert agreement. Not the same as "having no opinion." Distinct from "always uncertain" (paralysis) and "always confident" (overconfidence). When credible experts disagree, calibrated uncertainty means lower confidence in your view than if they all agreed, but you can still commit to a current best guess.`,
              audioPrompt: `Calibrated uncertainty is holding beliefs at confidence levels that match the actual evidence and degree of expert agreement, {name}. Not the same as "having no opinion." Distinct from "always uncertain," which produces paralysis, and "always confident," which produces overconfidence. When credible experts disagree, calibrated uncertainty means lower confidence in your view than if they all agreed. But you can still commit to a current best guess and act on it while remaining open to updating. This is one of the most useful skills in information literacy. Most people swing between false confidence ("I know the answer") and false skepticism ("nobody knows anything") depending on the topic. Real calibrated uncertainty stays steady: appropriate confidence in well-supported claims, appropriate uncertainty when experts diverge, appropriate skepticism for unsupported claims.`,
            },
            {
              word: `false skepticism`,
              definition: `The failure mode of dismissing claims indiscriminately, treating "nobody knows anything" as a correct response to genuine expert disagreement. Distinct from calibrated uncertainty, which reduces confidence appropriately without abandoning evidence-based claims entirely. Both false confidence and false skepticism are less accurate than calibrated uncertainty.`,
              audioPrompt: `False skepticism is the failure mode of dismissing claims indiscriminately, treating "nobody really knows anything" as the appropriate response to genuine expert disagreement, {name}. It is the opposite failure from false confidence but produces similarly inaccurate beliefs. When credible academics like Haidt and Odgers disagree about the magnitude of social media effects, false skepticism concludes that social media has no effects and the research is useless. False confidence concludes that the effects are huge and settled. Both are wrong. Real calibrated uncertainty treats the disagreement as evidence that the magnitude question is genuinely hard, while still recognizing that some effects are more clearly supported than others. "Experts disagree on the magnitude" is not the same as "we know nothing." Knowing this distinction prevents the common slide from discovering that experts disagree to concluding that no evidence matters. The evidence still matters; the uncertainty is about specific claims within a larger picture.`,
            },
            {
              word: `decision under uncertainty`,
              definition: `Making reasonable choices despite unresolved questions in the evidence. Calibrated uncertainty doesn't prevent action; it informs it. Limiting social media use, prioritizing sleep, and choosing where to direct attention are reasonable decisions about social media even without resolving the academic debate about specific effect sizes.`,
              audioPrompt: `Decision under uncertainty is the practice of making reasonable choices despite unresolved questions in the evidence, {name}. It is one of the most practical applications of information literacy and calibrated uncertainty. The academic debate between Haidt and Odgers on social media effects has not been resolved. But you don't need to wait for resolution to make reasonable decisions. Limiting personal social media use, prioritizing sleep, choosing to direct attention deliberately — these are reasonable choices that apply whether the effect sizes are large or moderate. Calibrated uncertainty doesn't prevent action; it informs it. You commit to a current best guess, act on it, and remain genuinely open to updating if better evidence comes in. This is how doctors, policymakers, and thoughtful individuals navigate areas of genuine uncertainty: not waiting for perfect evidence to exist, but not pretending the evidence is more settled than it is either. Decision under uncertainty is a skill you'll apply constantly across many domains as you grow up, and information literacy is the foundation it rests on.`,
            },
          ],
        },

        // ───── SOURCE EVALUATION ──────────────────────────────────────────────
        {
          id: `l11-source-evaluation`,
          type: `source-evaluation`,
          headline: `Three Sources On Social Media And Adolescent Mental Health`,
          intro: `Three sources discuss whether social media harms adolescent mental health. Two are credible academics reaching different conclusions; one is viral content. Rank them. Then see how a careful analyst would evaluate them.`,
          topic: `Does heavy social media use cause harm to adolescent mental health, and how do we evaluate when credible experts disagree?`,
          sources: [
            {
              id: `source-a`,
              name: `Jonathan Haidt, "The Anxious Generation" (2024) — academic book defending the "social media causes adolescent mental health crisis" position`,
              type: `Book by Jonathan Haidt, social psychologist at NYU Stern, accessible to general readers but built on extensive review of research; supported by his collaborator Jean Twenge's research`,
              claim: `Smartphones and social media (especially Instagram, TikTok, Snapchat used heavily on personal devices) are a major cause of the documented rise in adolescent mental health problems since the early 2010s. The timing, the demographic patterns (girls more affected), the dose-response relationships, and the underlying mechanisms (sleep disruption, comparison, fragmentation of attention) all point to social media as a primary driver. The book recommends specific policy responses including delayed smartphones until high school, no social media until 16, phone-free schools, and more independent childhood. Engages with critics; acknowledges some uncertainty; argues the evidence is strong enough to act on.`,
              evidence: `Author is an established academic with peer-reviewed publications and a strong track record. The book is grounded in extensive research review including peer-reviewed studies. Haidt engages with academic critics by name and addresses their counterarguments. The recommendations are specific and actionable. Some criticisms from other academics (see Source B) about whether the evidence base supports the strong causal claims. The book has been influential among parents and policymakers; whether the influence is justified by the evidence is itself contested.`,
            },
            {
              id: `source-b`,
              name: `Candice Odgers et al., critical reviews of Haidt's framing — peer-reviewed academic critique`,
              type: `Set of peer-reviewed reviews and commentary by Candice Odgers (Duke psychology professor) and other academic researchers arguing Haidt's evidence base doesn't support his strong causal conclusions; published in Nature (2024) and other venues`,
              claim: `The evidence linking social media to adolescent mental health outcomes is much weaker than Haidt presents. Correlations are typically small. Causal evidence is limited. Meta-analyses show modest at best effects. Confounding factors (timing of recession, post-2008 economic conditions, COVID, declining sleep generally) could account for much of the trend. Haidt's policy recommendations may be effective for other reasons but the causal social-media argument is overconfident. The position acknowledges social media has real downsides but argues we don't yet have evidence strong enough to support the dramatic claims and policy responses.`,
              evidence: `Author Odgers has an established academic record in developmental psychology with peer-reviewed publications. The critique is published in Nature and other respected venues, peer-reviewed. The methodological points (about effect sizes, confounding, causal vs correlational evidence) are technically careful. The position represents a substantial minority view in academic developmental psychology research; many other researchers (Andrew Przybylski, Amy Orben at Oxford) share elements of this critique. The disagreement with Haidt isn't fringe; it's a real academic debate. Both Haidt and Odgers are credible doing different intellectual work.`,
            },
            {
              id: `source-c`,
              name: `@AdolescentMentalHealthCrisis — Instagram account, 850K followers, sells $197 "Save Your Teen From Phone Addiction" parent course`,
              type: `Viral Instagram parent-influencer account claiming dramatic mental health crisis caused by phones, sharing personal anecdotes from her own children, selling courses and "device-free family programs"`,
              claim: `"Phones are LITERALLY destroying our children's brains. The science is CLEAR and SETTLED. Schools that take phones away see depression rates drop 50%. Suicide rates have TRIPLED because of Instagram. Every parent who lets their teen have a smartphone is risking their child's mental health and future. My students' families have transformed their teens through my $197 'Save Your Teen From Phone Addiction' program. Don't wait. Early-bird pricing ends Friday. The window to save your child is closing."`,
              evidence: `Specific statistics ("depression rates drop 50%," "suicide rates have TRIPLED because of Instagram") are presented confidently without citing peer-reviewed sources; the actual academic literature doesn't support these specific magnitudes. The "science is CLEAR and SETTLED" framing is wrong — the academic debate (see Sources A and B) is active and contested. Personal anecdotes about her own children are real stories but not evidence about populations. Course at the end with urgency pricing. Profit motive structural. Pulls real concerns into a sellable narrative. Notably, the strong-claim direction is closer to Haidt's position than Odgers's, but the academic Haidt-position is much more careful about evidence than this viral content suggests.`,
            },
          ],
          rankingPrompt: `Drag each source into one of the three slots: Most credible, Somewhat credible, Least credible.`,
          reasoningPrompt: `In 3-4 sentences: How did you handle the case where two credible academic sources disagree? What does that change about your final ranking?`,
          reveal: {
            title: `How a careful analyst would evaluate these`,
            content: [
              `Sources A and B are both credible. This is the hardest case in information literacy and one you'll encounter constantly. Jonathan Haidt is a serious academic with substantial research backing his book. Candice Odgers and the other critics are also serious academics with peer-reviewed critiques. The disagreement is genuine. Neither is fringe. The honest reading is that the academic debate is unsettled: there's a real signal that social media has SOME effect on adolescent mental health, but the magnitude and causal certainty are contested. Both confident positions ("social media is destroying youth" and "social media has no significant effects") are less accurate than the messy middle most researchers actually inhabit.`,
              `Source C is recognizable as viral parent-influencer content, even though it's aligned with one academic position. It overstates specific statistics that don't appear in the careful research. It claims "the science is CLEAR and SETTLED" when academic researchers are actively debating exactly that question. It uses personal anecdotes as if they were evidence about populations. The course-and-urgency-pricing structure shapes the content toward confident dramatic claims. Importantly, even strong defenders of the Haidt position (which is closer to where this content lands) would distance themselves from the specific overconfidence and uncited statistics here. Real academic work, even on the "social media is bad" side, is much more careful than this content.`,
              `The deeper lesson is what to do when credible experts disagree. First: notice the disagreement is real. Don't pretend one side has obviously won. Second: hold beliefs at calibrated confidence — likely SOME effect, magnitude uncertain. Third: read both Haidt and Odgers directly rather than summaries. Both have important things right and both have things their critics dispute. Fourth: don't let viral content tilt you toward one academic position just because it's aligned with content you've seen. Source C isn't a strawman; it's recognizable real viral content that happens to align with one academic position. Avoiding this trap is the skill.`,
              `One final framing. The question of social media and adolescent mental health is one you'll be thinking about as you grow up alongside these technologies. The honest answer involves uncertainty, AND it's possible to make reasonable choices under uncertainty (limit personal use, prioritize sleep, choose where you spend attention deliberately) without needing to resolve the academic debate. Calibrated decision-making under uncertainty is one of the most useful applications of information literacy. As you build the meta-skill, you'll find yourself in this situation many times across many topics. The framework transfers.`,
            ],
          },
        },

        {
          id: `l11-quiz`,
          type: `quiz`,
          headline: `Check your understanding`,
          questions: [
            {
              id: `q1`,
              type: `multiple-choice`,
              question: `What is "lateral reading"?`,
              options: [
                `Reading sideways`,
                `Practice of opening multiple browser tabs to check a source against other sources before evaluating the source's own content; documented by Stanford History Education Group as a key habit of professional fact-checkers; distinct from "vertical reading" (staying on a page and judging it from its own content)`,
                `Reading carefully`,
                `Reading widely`,
              ],
              correctIndex: 1,
              explanation: `Vertical reading often fails because a well-designed source can look credible from its own framing while being unreliable. Lateral reading catches this. Even sophisticated adults rarely do it without instruction; professional fact-checkers do it automatically.`,
            },
            {
              id: `q2`,
              type: `multiple-choice`,
              question: `What is an "epistemic peer"?`,
              options: [
                `A friend`,
                `Someone roughly equal to you in expertise, reasoning ability, and access to relevant evidence; when you and an epistemic peer reach different conclusions on the same question, that's a "peer disagreement," which philosophers treat as evidence you should reduce your confidence`,
                `Random expert`,
                `Equal teacher`,
              ],
              correctIndex: 1,
              explanation: `Peer disagreement is evidence the question is harder than it might seem. Not necessarily that you're wrong, but that you should hold your view with less confidence. Useful concept for handling expert disagreement.`,
            },
            {
              id: `q3`,
              type: `multiple-choice`,
              question: `Why is "what to do when credible sources disagree" the hardest case?`,
              options: [
                `It's frustrating`,
                `Standard "is this source credible?" question doesn't help; both are credible; the disagreement could be from contested evidence, different methodologies, different value frameworks, or subtle systematic bias; the skill is calibrating between them rather than picking one`,
                `It's confusing`,
                `It takes time`,
              ],
              correctIndex: 1,
              explanation: `Real life is full of these cases. The skill is recognizing genuine credible disagreement and holding beliefs at calibrated confidence rather than pretending one side has obviously won.`,
            },
            {
              id: `q4`,
              type: `multiple-choice`,
              question: `What is "calibrated uncertainty"?`,
              options: [
                `Always being uncertain`,
                `Holding beliefs at confidence levels that match actual evidence and expert agreement; not "no opinion"; distinct from "always uncertain" (paralysis) and "always confident" (overconfidence); when credible experts disagree, calibrated uncertainty means lower confidence in your view`,
                `Mathematical certainty`,
                `Religious doubt`,
              ],
              correctIndex: 1,
              explanation: `Most people swing between false confidence and false skepticism depending on topic. Real calibrated uncertainty stays steady: appropriate confidence in well-supported claims, appropriate uncertainty when experts diverge.`,
            },
            {
              id: `q5`,
              type: `multiple-choice`,
              question: `Why does "information diet" matter more than individual source evaluation?`,
              options: [
                `It doesn't`,
                `What you regularly consume shapes how you think about everything; algorithmic feeds optimize for engagement (outrage, novelty, tribal alignment), not accuracy; you can be excellent at evaluating one source while spending most time consuming content you don't evaluate at all; compound effect is dramatic`,
                `Diet trends`,
                `Health advice`,
              ],
              correctIndex: 1,
              explanation: `Treat information diet like food diet: mostly nutritious content, some indulgent, very little junk. Most people get this backwards. The compound effect over decades on what they believe is enormous.`,
            },
            {
              id: `q6`,
              type: `multiple-choice`,
              question: `What are seven questions for evaluating any source?`,
              options: [
                `Who, what, when, where, why, how, etc.`,
                `Credentials and conflicts of interest; methodology; evidence base; financial incentive structure; acknowledgment of uncertainty and limits; engagement with opposing views; whether methodology and conclusion match`,
                `Title, author, date, publisher, etc.`,
                `Topic, length, style, audience, etc.`,
              ],
              correctIndex: 1,
              explanation: `Apply all seven (or as many as relevant) when evaluating any source. None are knockdown criteria; they're context for engaging with the source's actual content. The framework compounds across thousands of sources you'll encounter.`,
            },
            {
              id: `q7`,
              type: `multiple-choice`,
              question: `What is "steelmanning"?`,
              options: [
                `A type of welding`,
                `Practice of stating an opposing argument in its strongest possible form (opposite of strawmanning) before responding to it; signal of careful thinking; sources that engage with the strongest version of opposing views are more reliable than sources that only attack the weakest versions`,
                `Bodybuilding metaphor`,
                `Military strategy`,
              ],
              correctIndex: 1,
              explanation: `Steelman the opposing view in your own arguments and look for steelmanning in sources you read. Sources that engage with strongest opposing views are more reliable. The habit is learnable.`,
            },
            {
              id: `q8`,
              type: `multiple-choice`,
              question: `What's the trap when viral content aligns with one academic position?`,
              options: [
                `No trap`,
                `Viral content's confidence and dramatic specifics can tilt you toward that academic position more strongly than the academic evidence actually supports; even academic defenders of that position would distance themselves from the viral overconfidence; the skill is not letting one inform the other when they shouldn't`,
                `Academic positions are wrong`,
                `Viral is always right`,
              ],
              correctIndex: 1,
              explanation: `Real academic work, even on contested questions, is much more careful than viral content. Avoiding the trap of letting viral content boost your confidence in one academic position is part of the skill.`,
            },
            {
              id: `q9`,
              type: `true-false`,
              question: `True or false: When credible sources disagree, it means the truth is somewhere in the middle.`,
              correctAnswer: false,
              explanation: `False. Sometimes the truth is in the middle; sometimes one side is mostly right. "Both sides have a point" isn't always true. The skill is reading both sides seriously and assessing the evidence, not assuming the middle position by default. Calibrated uncertainty is about holding the right confidence in what the evidence actually supports, which might be middle-ground or might lean clearly one way.`,
            },
            {
              id: `q10`,
              type: `inference`,
              question: `Your friend says "I read a Twitter thread saying social media is destroying kids' brains; we need to ban smartphones for everyone under 16." Based on this lesson, what should you notice?`,
              options: [
                `"You're right, ban them all"`,
                `"The Twitter thread is probably aligned with one academic position (Jonathan Haidt's). But the academic debate is contested: Candice Odgers and other researchers argue Haidt's causal claims overstate the evidence. The honest reading is the question is unsettled — likely SOME effect from social media, magnitude uncertain. Don't let viral content tilt you toward one academic position just because it's confident. Read Haidt AND his academic critics directly, not just Twitter summaries. Calibrated uncertainty: there are reasonable concerns about heavy use, AND the evidence doesn't support 'destroying brains' levels of confidence. You can make reasonable choices (limit personal use, prioritize sleep) without needing to resolve the academic debate first."`,
                `"Social media is fine"`,
                `"Don't read Twitter"`,
              ],
              correctIndex: 1,
              explanation: `Real applied information literacy. Don't reject the friend's concern; calibrate it to the actual state of evidence. Recommend reading both academic sides directly. This is what handling genuine expert disagreement looks like in practice.`,
            },
          ],
        },

        {
          id: `l11-reflection`,
          type: `reflection`,
          headline: `Sit with this`,
          intro: `Pick the prompt that pulls at you most. Your answer is saved.`,
          prompts: [
            { id: `reflect-cognitive`, category: `Cognitive`, prompt: `Before this lesson, did you have a working framework for when credible experts disagree? Has anything shifted?` },
            { id: `reflect-meta`, category: `Metacognitive`, prompt: `Honestly: what does your current information diet look like? How much is algorithmic feeds, how much is careful sources?` },
            { id: `reflect-identity`, category: `Identity`, prompt: `If you become someone who consistently lateral-reads, calibrates uncertainty, and curates information diet, what does that protect you from over a lifetime?` },
            { id: `reflect-application`, category: `Application`, prompt: `Pick one belief you hold strongly. Apply the framework: how strong is the evidence? Do credible experts disagree? Is your confidence calibrated to the evidence?` },
            { id: `reflect-critical`, category: `Critical`, prompt: `Are there cases where the framework breaks down? What about moral questions where "evidence" isn't quite the right category? How would you adapt the framework?` },
            { id: `reflect-personal`, category: `Personal investigation`, prompt: `Audit your information diet for one week. Track what you actually consume. Compare to what you wish you consumed. The gap is usually large.` },
          ],
        },

        {
          id: `l11-real-world`,
          type: `real-world`,
          headline: `Take it into your life`,
          guideContext: `Information literacy is the meta-skill that determines how well you handle everything else. Two paths.`,
          familyActivity: {
            title: `The Family Information Diet Audit`,
            duration: `45 minutes`,
            description: `At dinner, share what you learned about information diet. Then run an honest audit: each family member describes what they actually consumed today (apps, sites, conversations, content). Categorize each as nutritious (peer-reviewed, careful journalism, books, careful thinkers), indulgent (entertainment, casual reading), or junk (engagement-optimized algorithmic feeds, viral hot takes). Most families will discover they're heavily in the junk category. Then discuss small changes anyone could make. This conversation often shifts what people consume for weeks or months afterward.`,
          },
          projectOption: {
            title: `Run A 30-Day Information Diet Experiment, 30 days (optional)`,
            duration: `30 days, ~20 minutes daily reflection`,
            description: `For 30 days, intentionally curate your information diet. Choose 3-5 "nutritious" sources (specific newsletters, podcasts, books) you'll consume regularly. Reduce algorithmic feed time by setting specific limits. Practice lateral reading on at least one source per week. Track what you notice about your thinking, mood, and beliefs as the diet shifts. Write 2,000 words at the end on what changed. Real applied information literacy practice that few adults try.`,
            offerToParent: `Parent: opt your kid into this project from the dashboard. Running an information diet experiment at 12 is genuinely transformative for the long-run quality of thinking.`,
          },
          identityQuestion: `If you become someone with high information literacy (calibrated uncertainty, lateral reading habits, curated information diet, steelmanning practice), what does that mean for the accuracy of your beliefs over a lifetime of decisions?`,
        },

        {
          id: `l11-identity-hook`,
          type: `identity-hook`,
          headline: `Who is this lesson making you?`,
          prompt: `One sentence. No wrong answer.`,
          placeholder: `Someone who...`,
          examples: [
            `Someone who applies the seven-question source-evaluation framework automatically.`,
            `A person who notices when credible experts disagree and holds calibrated uncertainty.`,
            `Someone willing to lateral-read before trusting any source, especially the ones I agree with.`,
          ],
          saveKey: `identity_responses_fs_11_12_11`,
        },

        {
          id: `l11-celebration`,
          type: `celebration`,
          guideText: `{name}. Eleventh Future Skills lesson done. You now have the consolidated information literacy framework: seven questions for evaluating sources, lateral reading as the habit professional fact-checkers use, calibrated uncertainty for when credible experts disagree, the concept of epistemic peers, the information diet as the leverage point. You can handle the hardest case in information literacy (credible sources disagreeing) without retreating to false confidence or false skepticism. This is the meta-skill the rest of your intellectual life rests on. Most adults never explicitly develop it. Next time we go into one of the most practical applied skills: coding and computational thinking. Not just programming — the broader mental framework that makes programming a thinking tool. Matching game format. Let's go. — Byte`,
          badge: `information-evaluator`,
          badgeName: `Information Evaluator`,
          xpEarned: 75,
          competencies: [
            `Applies seven-question source evaluation framework`,
            `Uses lateral reading as default habit`,
            `Recognizes epistemic peer disagreement and calibrates accordingly`,
            `Distinguishes information diet quality (nutritious / indulgent / junk)`,
            `Handles credible-experts-disagree case without false confidence or skepticism`,
          ],
          nextLessonPreview: {
            title: `Lesson 12: Coding & Computational Thinking`,
            hook: `The mental framework beyond programming. Match five computational concepts to their real-world applications. Matching game.`,
          },
        },
      ],
    },
  ],
};

export default FUTURESKILLS_VOYAGER_L11;

if (import.meta.env?.DEV) {
  const l = FUTURESKILLS_VOYAGER_L11.lessons[0];
  const mags = l.screens.filter((s) => s.type === `magazine`).length;
  const sourceEval = l.screens.find((s) => s.type === `source-evaluation`);
  const quiz = l.screens.find((s) => s.type === `quiz`)?.questions?.length ?? 0;
  const reflect = l.screens.find((s) => s.type === `reflection`)?.prompts?.length ?? 0;
  console.log(
    `[LESSON-FS-VOYAGER-L11 ${VERSION}] "${l.title}" — ${mags} magazine, source-eval w/ ${sourceEval?.sources?.length ?? 0} sources, ${quiz} quiz, ${reflect} reflection`
  );
}
