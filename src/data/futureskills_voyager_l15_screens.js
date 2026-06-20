// ─────────────────────────────────────────────────────────────────────────────
// FUTURE SKILLS VOYAGER  |  L15 — Resilience & Failure
// Age band : voyagers (11-12)   Guide: byte (Fox)
// Standards: Coreverse Original — Resilience Research, Decision Theory
// CALIBRATED: Voyager spec v1.1 (May 2026)
// Interaction format: ARGUMENT BUILDER (minimize failure / embrace failure / context-match)
// ─────────────────────────────────────────────────────────────────────────────

const VERSION = "voyager-fs-l15-v1";

const FUTURESKILLS_VOYAGER_L15 = {
  ageBand: `voyagers`,
  subjectId: `future-skills`,
  guide: `byte`,

  lessons: [
    {
      id: `fs-11-12-15`,
      title: `Resilience & Failure`,
      duration: 35,
      xpReward: 75,
      badge: `resilience-builder`,
      badgeName: `Resilience Builder`,

      screens: [
        {
          id: `l15-welcome`,
          type: `welcome`,
          guideText: `{name}, the right relationship to failure depends entirely on context. Minimizing failure is correct for surgeons and pilots. Embracing failure is correct for innovation and learning. The interesting question is how to match your approach to your situation. Three positions, honest tradeoffs, a real argument to make.`,
          headline: `Resilience & Failure`,
          subtitle: `Three positions on how to relate to failure. Pop framings oversimplify both sides.`,
          visual: `/voyager-assets/future-skills/l15-welcome.webp`,
        },

        {
          id: `l15-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `What "Failure" Actually Means`,
          paragraphs: [
            `Before debating how to relate to failure, we should be specific about what failure is. The word gets used in confusing ways. Sometimes "failure" means "the outcome wasn't what I wanted." Sometimes it means "my decision was wrong." Sometimes it means "something about me is bad because the result was bad." These are very different and they require very different responses.`,
            `Annie Duke, a former professional poker player turned decision researcher, distinguishes "decision quality" from "outcome quality." Decision quality is how good your decision was given what you knew at the time. Outcome quality is what actually happened. These can diverge. A good decision can produce a bad outcome (you made the right call, but the dice rolled the wrong way). A bad decision can produce a good outcome (you got lucky despite making a mistake). Confusing the two is one of the biggest sources of bad learning from experience.`,
            `When most people say "I failed," they're usually evaluating outcome quality. The result wasn't what they wanted. But that doesn't necessarily mean their decision was wrong. Sometimes you made the best available choice and circumstances played out badly anyway. Treating that as personal failure leads to overcorrection: avoiding the right decision next time because you got an unlucky outcome this time.`,
            `Real resilience research, including work by George Bonanno at Columbia, distinguishes outcomes that genuinely require recovery (trauma, loss, serious setback) from outcomes that are just normal variation in life. Bonanno's findings suggest that most people are more resilient to genuine setbacks than they expect to be, and that resilience is largely produced by specific patterns (strong relationships, sense of meaning, learned skills) rather than personality. Knowing these distinctions changes how you should respond to bad outcomes.`,
          ],
          image: `/voyager-assets/future-skills/l15-s1-failure.webp`,
          imageCaption: `Failure: decision quality vs outcome quality. Trauma vs normal variation. Different things require different responses.`,
          vocab: [
            {
              word: `outcome quality`,
              definition: `Annie Duke's distinction (from her book "Thinking in Bets," 2018). Decision quality: how good your decision was given what you knew at the time. Outcome quality: what actually happened. The two can diverge: good decisions can produce bad outcomes (unlucky), bad decisions can produce good outcomes (lucky). Confusing them is a major source of bad learning.`,
              audioPrompt: `Decision quality versus outcome quality is a distinction from Annie Duke, a former professional poker player turned decision researcher, in her 2018 book "Thinking in Bets," {name}. Decision quality is how good your decision was given what you knew at the time. Outcome quality is what actually happened. These can diverge. A good decision can produce a bad outcome: you made the right call, but the dice rolled the wrong way. A bad decision can produce a good outcome: you got lucky despite making a mistake. Confusing the two is one of the biggest sources of bad learning from experience. When most people say "I failed," they're usually evaluating outcome quality. The result wasn't what they wanted. But that doesn't necessarily mean their decision was wrong. Knowing this distinction changes how you respond to bad outcomes.`,
            },
            {
              word: `decision quality`,
              definition: `How good a decision was given what was known at the time it was made. Separate from outcome quality (what actually happened). You can make a high-quality decision that produces a bad outcome due to factors outside your control. Evaluating your own decision-making requires separating what you knew at the time from what you know now. Treating bad outcomes from good decisions as failures leads to overcorrection.`,
              audioPrompt: `Decision quality is how good a decision was given what was known at the time it was made, {name}. It is entirely separate from outcome quality, which is what actually happened. Annie Duke, in her book "Thinking in Bets," argues this is one of the most important distinctions in thinking about learning from experience. You can make a high-quality decision that produces a bad outcome because circumstances played out against you. A good call in poker can lose to a lucky card. A well-reasoned career decision can fail because the industry shifted unexpectedly. A carefully planned project can fail because a key person left. In all these cases, the decision quality was high even though the outcome quality was poor. Treating bad outcomes from good decisions as personal failures leads to overcorrection: you start avoiding the right decision next time because you associate it with a bad outcome that wasn't caused by the decision. Evaluating your own decision-making honestly requires separating what you knew at the time from what you know now. What information did you have? Given that information, was your reasoning sound? That's decision quality.`,
            },
            {
              word: `George Bonanno`,
              definition: `Psychologist at Columbia University whose resilience research distinguishes outcomes that genuinely require recovery (trauma, loss, serious setback) from outcomes that are normal variation in life. Findings show most people are more resilient to genuine setbacks than they expect to be, and that resilience is largely produced by specific learnable patterns (relationships, meaning, skills) rather than personality.`,
              audioPrompt: `George Bonanno is a psychologist at Columbia University who has conducted decades of resilience research, {name}. His work distinguishes outcomes that genuinely require recovery, such as trauma, serious loss, and major setbacks, from outcomes that are just normal variation in life. Much of what people fear as potentially devastating is actually within the range of normal recoverable difficulty. Bonanno's findings suggest that most people are more resilient to genuine setbacks than they expect to be. When people anticipate a devastating loss, they typically predict they'll be far more distressed than they actually are. Humans have a psychological immune system that's better at recovering than our predictions suggest. More importantly, Bonanno found that resilience is largely produced by specific patterns rather than innate personality. Strong relationships are the strongest predictor across many studies. Sense of meaning and purpose helps. Learned cognitive skills like reframing difficulties matter. Willingness to seek help matters. The patterns are learnable, which means resilience can be deliberately built.`,
            },
          ],
        },

        {
          id: `l15-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Position 1: Failure Is To Be Minimized`,
          paragraphs: [
            `The first position argues that failure is generally costly and should be minimized through careful planning, conservative choices, and avoiding unnecessary risks. The strategy: gather information thoroughly before acting, plan carefully, take calculated bets only when the math is clearly favorable, and avoid mistakes that compound or are hard to reverse.`,
            `This position has real strength. Some failures genuinely set you back significantly. Some are irreversible. Some compound (a financial mistake at 22 reverberates for decades; a reputation incident in early career follows you). The "fail forward" framing often ignores that some failures aren't recoverable on relevant timescales. People who systematically minimize unnecessary risks often produce better long-term outcomes than people who take many gambles.`,
            `Defenders include Nassim Taleb (whose work on "antifragility" specifically argues for asymmetric bets where downside is bounded), Warren Buffett (whose career was built on extremely selective high-conviction investments rather than many gambles), most engineering and medical professional cultures (where mistakes can be catastrophic), and many careful researchers. The position is right that some risk minimization is valuable and that not all failures are educational.`,
            `The limits. The position can become excessive risk aversion, where so much energy goes into avoiding failure that growth becomes impossible. The "minimize failure" mindset can produce paralysis. It can also reward conformity over necessary risk-taking. Some of the most important achievements (scientific breakthroughs, entrepreneurship, creative work) require accepting significant failure rates. The position works when downside is bounded and upside is asymmetric; it overstates when applied to domains where you have to take real risks to achieve anything.`,
          ],
          image: `/voyager-assets/future-skills/l15-s2-minimize.webp`,
          imageCaption: `Position 1: failure is costly; minimize through careful planning, calculated bets, avoiding compounding mistakes.`,
          vocab: [
            {
              word: `asymmetric bets`,
              definition: `Decisions where the downside is bounded but the upside is open-ended (or vice versa). Nassim Taleb's framework. Asymmetric bets in your favor: limited loss, large potential gain. Asymmetric bets against you: limited gain, potentially catastrophic loss. The skill is recognizing the asymmetry before deciding. Many "minimize failure" arguments are really about avoiding asymmetric bets against you.`,
              audioPrompt: `Asymmetric bets are decisions where the downside is bounded but the upside is open-ended, or vice versa, {name}. Concept developed by Nassim Taleb in his work on antifragility. Asymmetric bets in your favor: you can only lose a limited amount, but you might gain much more. Asymmetric bets against you: you can only gain a limited amount, but you might lose much more (potentially catastrophically). The skill is recognizing the asymmetry before deciding whether to take the bet. Many "minimize failure" arguments are really about avoiding asymmetric bets against you. The minimize-failure strategy works well when bets are asymmetrically against you. It works less well when bets are asymmetrically in your favor. Knowing the asymmetry changes the calculation.`,
            },
            {
              word: `antifragility`,
              definition: `Nassim Taleb's concept of systems that gain from disorder, stress, or volatility rather than just surviving it. Distinct from resilience (bouncing back to baseline) and robustness (resisting damage). Antifragile systems get stronger from challenge. The framework argues for seeking asymmetric bets in your favor: let upside be unlimited while bounding downside. Applied to risk-taking: structure situations so failures are bounded and successes compound.`,
              audioPrompt: `Antifragility is a concept developed by Nassim Taleb describing systems that gain from disorder, stress, or volatility rather than just surviving it, {name}. It's distinct from two more familiar concepts: resilience, which means bouncing back to baseline after a setback, and robustness, which means resisting damage. Antifragile systems actually get stronger from challenge and volatility. Muscles are antifragile: stress from exercise makes them stronger. Immune systems are antifragile: exposure to pathogens builds capability. Taleb's framework argues for structuring your decisions to be antifragile: seek situations where failures are bounded but successes can compound. The practical application is the asymmetric bets principle: let your upside be unlimited while ensuring your downside is capped at something recoverable. A career that involves some high-upside experiments alongside stable base income is more antifragile than one that's either all risk or all stability. Taleb's argument, alongside Warren Buffett's extremely selective high-conviction investments, forms the theoretical backbone of the "minimize failure" position's more sophisticated version.`,
            },
            {
              word: `excessive risk aversion`,
              definition: `Failure mode of the "minimize failure" position: so much energy goes into avoiding failure that growth becomes impossible. Excessive risk aversion produces paralysis, rewards conformity over necessary risk-taking, and prevents the experiments that most significant achievements require. The minimize-failure strategy works when downside is bounded; it becomes excessive when applied to domains where accepting real failure rates is required to achieve anything.`,
              audioPrompt: `Excessive risk aversion is the failure mode of the "minimize failure" approach to failure, {name}. The minimize-failure position has real strengths: some failures genuinely set you back significantly, some are irreversible, some compound over time. Warren Buffett built his career on extremely selective high-conviction investments rather than many gambles. Engineering and medical cultures rightly minimize mistakes that can be catastrophic. But the position becomes excessive risk aversion when so much energy goes into avoiding failure that growth becomes impossible. Excessive risk aversion produces paralysis. You never attempt anything significant because every attempt carries failure risk. It rewards conformity over necessary risk-taking. It prevents the scientific experiments, entrepreneurial attempts, and creative work that require accepting high failure rates. Some of the most important achievements require accepting significant failure rates. A researcher who can't tolerate failed experiments can't do effective science. A creator who can't tolerate discarded attempts can't produce meaningful work. The skill is calibrating how much failure-minimization is appropriate, which requires assessing the asymmetry of the specific bet rather than applying a universal rule.`,
            },
          ],
        },

        {
          id: `l15-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Position 2: Failure Is Essential To Growth`,
          paragraphs: [
            `The second position argues that failure is not just inevitable but actively essential for growth, learning, and achievement. The strategy: take risks regularly, accept that many attempts will fail, learn from each failure, iterate quickly, and treat failures as data rather than as judgments on your worth.`,
            `This position has real strength. Almost everything significant requires accepting failure rates. Scientific research has high failure rates by design. Entrepreneurship has very high failure rates. Creative work involves many discarded attempts for each successful one. Deliberate practice (Anders Ericsson's term) requires repeated attempts at the edge of your ability where failure is frequent. People who never fail are usually not attempting things significant enough to fail at.`,
            `Defenders include Carol Dweck (whose growth mindset research emphasizes engagement with challenge despite failure risk), Anders Ericsson (whose work on deliberate practice requires failure-rich conditions), the Lean Startup tradition (Eric Ries) and Silicon Valley "fail fast" culture, design thinkers and scientific researchers across many fields. The position is right that failure-avoidance often costs more than failure itself, and that learning from failure is one of the most efficient paths to capability.`,
            `The limits. The "embrace failure" framing can become a license for sloppy decision-making, where the failure is justified after the fact as "learning" rather than as the predictable consequence of poor decisions. It can also be insensitive to people who can't afford failure in the same way (someone with savings can fail entrepreneurially more easily than someone supporting a family). "Fail fast" only works when failure is cheap and recoverable; when failure is expensive and lasting, the same advice produces harm. The position works for low-stakes high-iteration domains; it overstates when applied to domains where individual failures matter more.`,
          ],
          image: `/voyager-assets/future-skills/l15-s3-embrace.webp`,
          imageCaption: `Position 2: failure is essential to growth; take risks, iterate, learn. Works when failure is cheap and recoverable.`,
          vocab: [
            {
              word: `fail fast`,
              definition: `Cultural strategy of running many small experiments quickly, accepting most will fail, and learning from each. Originated in software development and Lean Startup methodology. Works well when iteration is cheap and failures are bounded. Can be misleading when applied to domains where individual failures are expensive, slow to recover from, or compound badly.`,
              audioPrompt: `Fail fast is a cultural strategy of running many small experiments quickly, accepting most will fail, and learning from each, {name}. The framing originated in software development and Lean Startup methodology and spread through Silicon Valley to broader business and education contexts. Works well when iteration is cheap and failures are bounded. A failed software prototype costs hours; you build the next version. A failed marketing experiment costs a small budget; you try the next variation. In these contexts, fail fast is genuinely good strategy. The framing can be misleading when applied to domains where individual failures are expensive, slow to recover from, or compound badly. Failed medical surgery isn't bounded the way failed software is. Failed financial decisions in retirement can be unrecoverable. Knowing where fail fast works and where it doesn't is part of the skill of relating to failure.`,
            },
            {
              word: `deliberate practice`,
              definition: `Anders Ericsson's term for practice that builds expertise: working at the edge of your ability with immediate feedback and specific goals. Requires frequent failure because you're attempting things just beyond current capability. Explains why people who never fail usually aren't attempting things significant enough to develop real expertise. Produces skill through a failure-rich iterative cycle.`,
              audioPrompt: `Deliberate practice is Anders Ericsson's term for the kind of practice that actually builds expertise, {name}. Not just practice in general, but specifically working at the edge of your current ability, with immediate feedback and specific goals for improvement. This type of practice requires frequent failure because you're deliberately attempting things that are just beyond your current capability. That's why the practice is hard and why it works. If you only practice things you can already do, you don't grow. Ericsson's research, accumulated over decades studying experts across domains from music to chess to sports, showed that expertise develops through this failure-rich iterative cycle rather than through simple time investment. The "embrace failure" position draws heavily on this work: people who never fail are usually not attempting things significant enough to develop real expertise. The discomfort of deliberate practice, the repeated small failures that signal you're working at your edge, is not a sign that something is wrong. It's the mechanism through which capability develops.`,
            },
            {
              word: `growth mindset`,
              definition: `Carol Dweck's concept: the belief that abilities can be developed through effort and learning, as opposed to a fixed mindset that treats abilities as innate. Growth mindset supports engaging with challenge despite failure risk. Relevant here: growth mindset provides the psychological frame that makes the "embrace failure" strategy work. Without it, failures feel like evidence of fixed limitations rather than data for improvement.`,
              audioPrompt: `Growth mindset is Carol Dweck's concept: the belief that abilities can be developed through effort and learning, {name}. The contrasting fixed mindset treats abilities as innate — you either have them or you don't. Growth mindset supports engaging with challenge despite failure risk because failure is interpreted as data rather than as evidence of fixed limitations. When you believe you can improve through effort, a failed attempt is information about what to do differently next time. When you believe ability is fixed, a failed attempt is evidence of what you're not. Dweck's decades of research showed that mindset affects both what challenges people choose to take on and how they respond to setbacks within them. People with growth mindsets are more likely to embrace difficult problems, persist through failure, and improve over time. The "embrace failure" position in this lesson draws on this work: Carol Dweck, alongside Anders Ericsson's deliberate practice research, forms the academic backbone of the argument that engaging with failure rather than avoiding it is how real capability develops.`,
            },
          ],
        },

        {
          id: `l15-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Position 3: Match Strategy To Context`,
          paragraphs: [
            `The third position argues that neither universal minimization nor universal embrace is correct. The right relationship to failure depends on the specific context: how reversible the consequences are, how informative the failure would be, how the math of asymmetric bets actually works in this situation, and what kind of learning is at stake.`,
            `Key dimensions of context. First: reversibility. Some failures are fully recoverable (a failed school project), some take months or years to recover from (a financial setback, a damaged relationship), some are essentially permanent (some health decisions, some reputation incidents, some life-altering choices). The right risk tolerance depends on which category. For reversible failures, embrace; for irreversible failures, minimize.`,
            `Second: information value. Some failures teach you something specific that you couldn't have learned without trying. A scientific experiment that produces negative results is genuinely informative. A startup that fails because of poor product-market fit teaches you something real about the market. Other failures don't teach much (the failure was predictable from theory; you didn't need the data). Take risks that produce information you can't get otherwise; avoid risks that just confirm what you should already know.`,
            `Third: portfolio thinking. A single decision can be analyzed in isolation, but you make many decisions across a lifetime. A portfolio approach diversifies risk: some safer choices (which mostly succeed but produce modest gains), some riskier choices (most of which fail but the successes produce large gains). The right portfolio mix depends on your stage of life, resources, and what you're trying to accomplish.`,
            `Defenders of context-matching include Annie Duke (decision quality framework), Cal Newport (career strategies that match risk to circumstances), most working professionals across many domains who've learned that universal rules fail. The position is right that universal advice on failure is usually wrong; the right relationship varies enormously by situation. Its limit: "it depends" can become an excuse for not having any working framework. The skill is having internalized principles that adjust to context rather than rigid rules that don't.`,
          ],
          image: `/voyager-assets/future-skills/l15-s4-context.webp`,
          imageCaption: `Position 3: match strategy to context. Reversibility, information value, portfolio thinking. Universal rules usually fail.`,
          vocab: [
            {
              word: `portfolio thinking`,
              definition: `Approach where you analyze decisions not individually but as part of a portfolio over time. Some safer choices (mostly succeed, modest gains), some riskier choices (mostly fail, but successes produce larger gains). The right portfolio mix depends on stage of life, resources, and goals. From investing theory but applies broadly to career, education, relationships.`,
              audioPrompt: `Portfolio thinking in decisions means analyzing your decisions not individually but as part of a portfolio over time, {name}. Concept from investing theory but applies broadly. Investors don't expect every individual stock to succeed; they expect the portfolio as a whole to perform well, with some losses balanced by larger gains. Applied to life decisions: some safer choices (which mostly succeed but produce modest gains), some riskier choices (most of which fail but the successes produce large gains). The right portfolio mix depends on your stage of life, resources, and what you're trying to accomplish. Young people typically can afford more risky bets because they have time to recover from failures. Older people typically need more secure choices because the time to recover is shorter. The mix should shift over a lifetime.`,
            },
            {
              word: `reversibility`,
              definition: `Key dimension in the context-matching approach to failure: how recoverable the consequences of a decision are. Some failures are fully recoverable (a failed school project). Some take months or years to recover from (a financial setback, a damaged relationship). Some are essentially permanent (certain health decisions, some reputation incidents). Higher reversibility supports more risk-taking; lower reversibility calls for more caution.`,
              audioPrompt: `Reversibility is one of the key dimensions in the context-matching approach to failure, {name}. The right relationship to failure depends significantly on how recoverable the consequences are. Some failures are fully reversible: a failed school project takes an afternoon; you try again. Some take months or years to recover from: a financial setback at 22 can reverberate through compound effects for years; a damaged relationship takes sustained effort to repair. Some are essentially permanent on relevant timescales: certain health decisions can't be undone, some reputation incidents follow people permanently, some life-altering choices foreclose later options. The right risk tolerance depends on which category you're in. For fully reversible failures, embrace the experiment freely. For slow-to-recover failures, be more careful. For essentially irreversible failures, minimize very deliberately. Assessing reversibility before deciding is a concrete tool for the context-matching approach. It prevents applying universal rules to situations that call for different strategies.`,
            },
            {
              word: `information value`,
              definition: `The second key dimension in context-matching: how much a failure would teach you that you couldn't learn otherwise. A scientific experiment producing negative results is genuinely informative. A startup that fails due to poor product-market fit teaches real market information. Some risks worth taking are specifically because the failure would be informative. Avoid risks that just confirm what you should already know from theory.`,
              audioPrompt: `Information value is the second key dimension in the context-matching approach to failure, {name}. Not every risk is worth taking purely because it might succeed. The question is also what a failure would teach you that you couldn't learn otherwise. A scientific experiment that produces negative results is genuinely informative: you've eliminated a hypothesis, narrowed the search space, and the failure has real knowledge value. A startup that fails because of poor product-market fit teaches you something real about the market that theory alone couldn't have provided. Other risks don't produce informative failures. If the failure was entirely predictable from theory, you didn't need the data. If no failure could teach you anything new, the information value is low and the risk needs more justification. The context-matching position argues for taking risks that produce information you can't get otherwise. Fail in ways that teach you real things. Avoid risks that just confirm what you should already know. This dimension, combined with reversibility and portfolio thinking, gives you a practical framework for deciding when to risk failure rather than applying a universal rule.`,
            },
          ],
        },

        {
          id: `l15-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Before You Build Your Argument`,
          paragraphs: [
            `As you build your argument, notice that the three positions aren't entirely mutually exclusive. Most thoughtful people hold elements of all three: be selective about which risks to take, embrace the necessary ones, and match strategy to context. The exercise of committing to one primary framing forces you to articulate what you actually think.`,
            `One framing to consider. Each position implies different practical defaults. Position 1 defaults to "this risk needs justification; what's the case for taking it?" Position 2 defaults to "this risk is fine; what's the case against?" Position 3 defaults to "what kind of situation is this, and which default fits here?" Most people have one implicit default they apply unconsciously. Making it explicit is the first step toward choosing it deliberately.`,
            `Another framing. The honest answer for most people may be position 3, but that doesn't make it obviously right. Position 3 requires more judgment in each specific situation, which is more cognitively demanding than a consistent rule. Sometimes a worse rule applied consistently produces better outcomes than a better rule applied inconsistently. Knowing yourself and your decision quality matters in choosing your framing.`,
            `One final framing. Whatever position you take, the underlying skill of building resilience is real. George Bonanno's research and related work shows resilience is largely the product of specific patterns: strong relationships, sense of meaning, learned skills like cognitive reframing, willingness to seek help, ability to find positive meaning in difficult experiences. These compound over a lifetime and protect you from the genuinely hard failures that everyone faces.`,
          ],
          image: `/voyager-assets/future-skills/l15-s5-before.webp`,
          imageCaption: `Three positions, three default mindsets. Most people have an implicit default; making it explicit is the move.`,
          vocab: [
            {
              word: `resilience patterns`,
              definition: `Specific patterns that predict resilience to setbacks (per Bonanno and related research): strong relationships, sense of meaning and purpose, learned cognitive skills (reframing, finding positive meaning in difficulty), willingness to seek help. Resilience is largely the product of these patterns rather than innate personality. Patterns are learnable and compound over time.`,
              audioPrompt: `Resilience patterns are specific patterns that predict resilience to setbacks, {name}. Identified by George Bonanno at Columbia and related researchers. The patterns include strong relationships (the single strongest predictor across many studies), sense of meaning and purpose, learned cognitive skills like reframing and finding positive meaning in difficult experiences, willingness to seek help, and the ability to maintain functioning while experiencing distress. Resilience is largely the product of these patterns rather than innate personality. This is good news because patterns are learnable. People who build them deliberately become more resilient over time. People who don't are more vulnerable to setbacks that would otherwise have been recoverable. The patterns compound across decades, which is why building them early matters.`,
            },
            {
              word: `cognitive reframing`,
              definition: `Learned skill of finding alternative interpretations of difficult experiences, particularly interpretations that allow for positive meaning or forward progress. One of the resilience patterns identified in research. Not denying that something bad happened, but genuinely finding a frame in which the experience also contains something useful: information, growth, connection, or perspective.`,
              audioPrompt: `Cognitive reframing is a learned skill of finding alternative interpretations of difficult experiences, {name}. One of the resilience patterns identified by George Bonanno and related researchers. Not denying that something bad happened, and not forcing false positivity. Genuinely finding a frame in which the experience also contains something useful: information that improves future decisions, growth that wouldn't have happened without the challenge, connection from others who helped, perspective on what actually matters. The skill is learnable and becomes more automatic with practice. Someone who has practiced reframing over years will naturally find the useful element in setbacks faster and with less effort than someone who hasn't. The research shows that people who use cognitive reframing as a regular response to setbacks recover faster, maintain better functioning during difficulty, and are less likely to spiral from setback into extended distress. It works not by changing what happened but by changing how the brain processes what happened. Combining cognitive reframing with strong relationships and sense of meaning produces the most resilient outcomes across most types of setbacks.`,
            },
            {
              word: `implicit default`,
              definition: `The unconscious rule or tendency a person applies to decisions without explicitly choosing it. Each failure position implies a different default: "minimize" defaults to "this risk needs justification," "embrace" defaults to "this risk is fine unless argued against," "context-match" defaults to "what type of situation is this?" Most people have one default they apply without realizing it. Making the default explicit is the first step toward choosing deliberately.`,
              audioPrompt: `An implicit default is the unconscious rule or tendency a person applies to decisions without explicitly choosing it, {name}. Each of the three positions on failure implies a different default. The minimize-failure position defaults to: "this risk needs justification; what's the case for taking it?" The embrace-failure position defaults to: "this risk is fine; what's the case against?" The context-matching position defaults to: "what kind of situation is this, and which default fits here?" Most people have one implicit default they apply unconsciously across situations. Someone who grew up seeing failure as shameful applies the minimize default without noticing. Someone who grew up in a family that celebrated bold attempts applies the embrace default. The defaults are often invisible because they feel like just seeing clearly how things are rather than like a choice. Making your implicit default explicit is the first step toward choosing it deliberately rather than having it choose you. The exercise is worth doing: what's your actual default when you face a decision with real risk? Do you start from "justify this risk" or "why not try"? That default shapes thousands of decisions over a lifetime.`,
            },
          ],
        },

        // ───── ARGUMENT BUILDER ───────────────────────────────────────────────
        {
          id: `l15-argument-builder`,
          type: `argument-builder`,
          headline: `How Should You Actually Relate To Failure?`,
          intro: `Pick the position that best captures your current thinking. Build your case with 3-4 pieces of evidence. Then respond to the strongest counterargument.`,
          positions: [
            {
              id: `minimize-failure`,
              label: `Minimize failure: gather information, plan carefully, avoid mistakes that compound or don't recover`,
              summary: `Failure is generally costly; minimize through planning, calculated bets, avoiding unnecessary risks. Some failures don't recover on relevant timescales. Defenders include Nassim Taleb (asymmetric bets, antifragility), Warren Buffett (selective high-conviction bets), engineering and medical professional cultures, careful researchers. Strength: some risk minimization is valuable; not all failures are educational. Limit: can become excessive risk aversion, paralysis, conformity over necessary risk-taking; some achievements require accepting failure rates.`,
            },
            {
              id: `embrace-failure`,
              label: `Embrace failure: take risks regularly, iterate quickly, learn from each failure`,
              summary: `Failure is essential for growth and learning. Almost everything significant requires accepting failure rates. Defenders include Carol Dweck (growth mindset), Anders Ericsson (deliberate practice requires failure-rich conditions), Eric Ries (Lean Startup), Silicon Valley "fail fast" culture, design thinkers, scientists across many fields. Strength: failure-avoidance often costs more than failure itself; learning from failure is efficient path to capability. Limit: can become license for sloppy decision-making; insensitive to people who can't afford failure; "fail fast" only works when failure is cheap and recoverable.`,
            },
            {
              id: `match-context`,
              label: `Match strategy to context: different situations call for different relationships to failure`,
              summary: `Neither universal minimization nor universal embrace is correct. Right relationship depends on reversibility, information value, portfolio position, and what kind of learning is at stake. Defenders include Annie Duke (decision quality framework), Cal Newport (matching risk to circumstances), most working professionals across many domains. Strength: universal advice on failure is usually wrong; right relationship varies enormously by situation. Limit: "it depends" can become excuse for no working framework; requires more judgment than rigid rules.`,
            },
          ],
          evidence: [
            {
              id: `e1`,
              text: `Annie Duke distinguishes decision quality from outcome quality. Good decisions can produce bad outcomes (unlucky) and bad decisions can produce good outcomes (lucky). Confusing the two is a major source of bad learning from experience. "I failed" usually evaluates outcome quality without separating decision quality.`,
              source: `Duke 2018; cognitive psychology research on decision making`,
            },
            {
              id: `e2`,
              text: `Some failures are genuinely irreversible on relevant timescales. A financial mistake at 22 reverberates for decades through compound effects. Some reputation incidents follow people permanently. Some health decisions cannot be undone. The "fail forward" framing often ignores that some failures aren't recoverable.`,
              source: `Standard analysis of compound effects and path dependence`,
            },
            {
              id: `e3`,
              text: `Anders Ericsson's research on deliberate practice (the kind that builds expertise) requires working at the edge of your ability where failure is frequent. Experts develop their skills through many failed attempts that gradually improve toward competence. Practice without failure produces little growth.`,
              source: `Ericsson decades of expertise research`,
            },
            {
              id: `e4`,
              text: `Scientific research has high failure rates by design. Most experiments don't confirm initial hypotheses. Most attempted breakthroughs don't pan out. The scientific method requires accepting these failure rates because that's how discovery happens. Researchers who can't tolerate failure can't do effective science.`,
              source: `Philosophy and sociology of science; multiple researchers`,
            },
            {
              id: `e5`,
              text: `Lean Startup methodology (Eric Ries 2011) formalized the "fail fast, learn fast" approach for businesses. Build small experiments, measure user response, iterate. Has been applied successfully across thousands of businesses. The approach works when iteration is cheap and failures are bounded.`,
              source: `Ries 2011; widespread business practice`,
            },
            {
              id: `e6`,
              text: `Nassim Taleb's "antifragility" framework distinguishes asymmetric bets in your favor (limited loss, large potential gain) from asymmetric bets against you (limited gain, potentially catastrophic loss). The minimize-failure strategy works well for the second category and works less well for the first. Universal rules fail because the asymmetry matters.`,
              source: `Taleb antifragility and Black Swan work`,
            },
            {
              id: `e7`,
              text: `George Bonanno's resilience research shows most people are more resilient to genuine setbacks than they expect to be. Resilience is largely produced by specific patterns (relationships, meaning, learned skills) rather than personality. This suggests setbacks are often more recoverable than minimize-failure proponents fear.`,
              source: `Bonanno decades of resilience research`,
            },
            {
              id: `e8`,
              text: `"Fail fast" works in domains where iteration is cheap (software, marketing experiments) but produces harm in domains where individual failures are expensive (medical surgery, major financial decisions, some career choices). Applying the same framing universally produces good outcomes in some contexts and harm in others. Context matching is empirically necessary.`,
              source: `Cross-domain analysis; multiple sources in business and policy`,
            },
          ],
          counterargument: {
            id: `counter`,
            text: `"You picked your position. Here's the strongest objection. All three positions treat 'failure' as if it's a useful category for thinking about outcomes. But maybe the deeper move is to abandon outcome-thinking entirely and focus on decision quality regardless of outcome. Annie Duke makes essentially this argument: you can't control outcomes, only decisions. If you focus on making good decisions given what you know, the failure-or-success framing becomes a distraction. Outcomes will vary; some good decisions will produce bad outcomes and some bad decisions will produce good outcomes. The skill is decision quality, not 'relationship to failure.' Why think any of the three positions is the right level to think at, rather than the deeper move of separating decisions from outcomes?"`,
            promptInstruction: `In 3-4 sentences, respond. Should you think about "failure" at all, or should you focus on decision quality regardless of outcome? How does your position handle this challenge?`,
          },
          reflectionPrompt: `Looking at the positions you didn't pick, which has the strongest argument that you'd find hardest to dismiss? Why?`,
        },

        {
          id: `l15-quiz`,
          type: `quiz`,
          headline: `Check your understanding`,
          questions: [
            {
              id: `q1`,
              type: `multiple-choice`,
              question: `What is "decision quality vs outcome quality"?`,
              options: [
                `Same thing`,
                `Annie Duke's distinction (Thinking in Bets 2018): decision quality is how good your decision was given what you knew at the time; outcome quality is what actually happened; they can diverge (good decisions can produce bad outcomes from luck; bad decisions can produce good outcomes from luck); confusing them is major source of bad learning`,
                `Math problem`,
                `Two types of tests`,
              ],
              correctIndex: 1,
              explanation: `When most people say "I failed," they evaluate outcome quality. But that doesn't necessarily mean their decision was wrong. Treating bad outcomes from good decisions as personal failure leads to overcorrection: avoiding the right decision next time because you got unlucky this time.`,
            },
            {
              id: `q2`,
              type: `multiple-choice`,
              question: `What are "asymmetric bets"?`,
              options: [
                `Unfair games`,
                `Decisions where the downside is bounded but the upside is open-ended (or vice versa); Nassim Taleb's framework; asymmetric bets in your favor: limited loss, large potential gain; asymmetric bets against you: limited gain, potentially catastrophic loss; the asymmetry matters for the right strategy`,
                `Casino terms`,
                `Math gambling`,
              ],
              correctIndex: 1,
              explanation: `Many "minimize failure" arguments are really about avoiding asymmetric bets against you. The minimize-failure strategy works well when bets are asymmetrically against you; it works less well when bets are asymmetrically in your favor. Knowing the asymmetry changes the calculation.`,
            },
            {
              id: `q3`,
              type: `multiple-choice`,
              question: `What does the "minimize failure" position get right and where does it overstate?`,
              options: [
                `Always right`,
                `Right: some failures don't recover on relevant timescales; not all failures are educational; risk minimization can produce better long-term outcomes; defenders include Taleb, Buffett, engineering/medical cultures. Overstates: can become excessive risk aversion, paralysis, conformity over necessary risk-taking; some achievements require accepting significant failure rates`,
                `Always wrong`,
                `Just opinion`,
              ],
              correctIndex: 1,
              explanation: `The position is right that some risk minimization is valuable. It overstates when applied universally to domains where you have to take real risks to achieve anything significant.`,
            },
            {
              id: `q4`,
              type: `multiple-choice`,
              question: `When does "fail fast" actually work, and when does it fail?`,
              options: [
                `Always works`,
                `Works when iteration is cheap and failures are bounded (software development, marketing experiments, design prototyping); fails when individual failures are expensive, slow to recover from, or compound badly (medical surgery, major financial decisions, some life choices); applying same framing universally produces harm in non-iterative contexts`,
                `Never works`,
                `Random outcomes`,
              ],
              correctIndex: 1,
              explanation: `The same framing that produces good outcomes in software development produces harm when applied to surgery or major financial decisions. Context matters. Knowing where fail fast applies and where it doesn't is part of the skill.`,
            },
            {
              id: `q5`,
              type: `multiple-choice`,
              question: `What does the "embrace failure" position get right and where does it overstate?`,
              options: [
                `Always right`,
                `Right: failure-avoidance often costs more than failure itself; learning from failure is efficient path to capability; almost everything significant requires accepting failure rates; defenders include Dweck, Ericsson, Lean Startup tradition. Overstates: can become license for sloppy decision-making; insensitive to people who can't afford failure equally; "fail fast" only works when failure is cheap and recoverable`,
                `Always wrong`,
                `Pure motivation`,
              ],
              correctIndex: 1,
              explanation: `The position is right that failure-avoidance often costs more than expected. It overstates when applied universally, ignoring that some people can't afford the same failure rates and some domains aren't suited to fail-fast iteration.`,
            },
            {
              id: `q6`,
              type: `multiple-choice`,
              question: `What is "portfolio thinking" in decision-making?`,
              options: [
                `Stock investing`,
                `Approach where you analyze decisions not individually but as part of a portfolio over time; some safer choices, some riskier choices; right portfolio mix depends on stage of life, resources, and goals; from investing theory but applies broadly to career, education, relationships`,
                `Career change`,
                `Random spreading`,
              ],
              correctIndex: 1,
              explanation: `Young people typically can afford more risky bets because they have time to recover from failures. Older people typically need more secure choices because the time to recover is shorter. The mix should shift over a lifetime.`,
            },
            {
              id: `q7`,
              type: `multiple-choice`,
              question: `What are "resilience patterns" (per Bonanno research)?`,
              options: [
                `Personality traits`,
                `Specific patterns that predict resilience to setbacks: strong relationships (single strongest predictor), sense of meaning and purpose, learned cognitive skills like reframing, willingness to seek help, ability to find positive meaning in difficulty; resilience is largely product of patterns rather than innate personality; patterns are learnable and compound`,
                `Born tough`,
                `Random luck`,
              ],
              correctIndex: 1,
              explanation: `Most people are more resilient to genuine setbacks than they expect to be. The patterns are learnable and compound across decades. Building them early matters because they protect you from the genuinely hard failures everyone faces.`,
            },
            {
              id: `q8`,
              type: `multiple-choice`,
              question: `Why is "context-matching" sometimes worse than a consistent rule?`,
              options: [
                `Always worse`,
                `Position 3 requires more judgment in each specific situation, which is more cognitively demanding than a consistent rule; sometimes a worse rule applied consistently produces better outcomes than a better rule applied inconsistently; the right move depends on your decision quality in specific situations`,
                `Always better`,
                `Doesn't matter`,
              ],
              correctIndex: 1,
              explanation: `Context-matching is the most sophisticated approach but also the most error-prone. People with high decision quality benefit from context-matching; people with low decision quality may benefit more from consistent simple rules even if those rules are technically suboptimal.`,
            },
            {
              id: `q9`,
              type: `true-false`,
              question: `True or false: One of the three positions is clearly correct and the others are wrong.`,
              correctAnswer: false,
              explanation: `False. Each position has serious defenders and real strengths/limits. Most thoughtful people hold elements of all three. The exercise of committing to one primary framing forces clearer articulation; the honest answer involves context-matching for most people, but that doesn't make it obviously right because context-matching requires more judgment than rigid rules.`,
            },
            {
              id: `q10`,
              type: `inference`,
              question: `Your friend says "I'm too scared to try out for the team because I might not make it." Based on this lesson, what's the most useful response?`,
              options: [
                `"Don't try"`,
                `"Let's think about this. Trying out and not making the team is an asymmetric bet: bounded downside (you don't make the team), potentially significant upside (you might make it, you'll learn about your skill level, you'll have practiced trying out). The failure is fully reversible and probably educational. The 'don't try because you might fail' framing makes the most sense when failures are irreversible or compound badly, but tryouts aren't that. From a portfolio perspective at your age, this is exactly the kind of risk worth taking. The fear is real but the math is favorable. Try out."`,
                `"You're a coward"`,
                `"You'll fail anyway"`,
              ],
              correctIndex: 1,
              explanation: `Real applied resilience/failure literacy. Use the asymmetric bet framework, portfolio thinking, and the reversibility dimension to walk through why this specific decision is worth taking even given the friend's fear. This is the kind of advice that can shift someone's trajectory.`,
            },
          ],
        },

        {
          id: `l15-reflection`,
          type: `reflection`,
          headline: `Sit with this`,
          intro: `Pick the prompt that pulls at you most. Your answer is saved.`,
          prompts: [
            { id: `reflect-cognitive`, category: `Cognitive`, prompt: `Before this lesson, did you have an explicit framework for relating to failure, or was it mostly an implicit default? Has anything shifted?` },
            { id: `reflect-meta`, category: `Metacognitive`, prompt: `Honestly: do you currently lean toward minimize-failure or embrace-failure? What does that produce in your life right now?` },
            { id: `reflect-identity`, category: `Identity`, prompt: `If you become someone who relates to failure with calibrated context-matching, what does that change about the decisions you can make well over a lifetime?` },
            { id: `reflect-application`, category: `Application`, prompt: `Pick one decision you're currently avoiding. Apply the framework: how reversible is it? What's the asymmetry? What does portfolio thinking suggest at your stage of life?` },
            { id: `reflect-critical`, category: `Critical`, prompt: `Are there contexts the framework doesn't handle well? What about moral choices where failure isn't just about outcomes? What about decisions in highly uncertain domains where the math is unclear?` },
            { id: `reflect-personal`, category: `Personal investigation`, prompt: `Ask one adult about the biggest failure of their life. What did they learn? Was the failure a decision-quality failure or an outcome-quality one? How did they recover?` },
          ],
        },

        {
          id: `l15-real-world`,
          type: `real-world`,
          headline: `Take it into your life`,
          guideContext: `How you relate to failure compounds across thousands of decisions over a lifetime. Two paths.`,
          familyActivity: {
            title: `The Family Failure Conversation`,
            duration: `40 minutes`,
            description: `At dinner, share the three positions. Then ask each adult to share a significant failure they've experienced. Apply the framework: was it decision-quality or outcome-quality? Was it asymmetric? Was it reversible? Looking back, would they have made the same decision? Most adults will surface stories they've been carrying without explicit framework for. The conversation often reveals that some "failures" were actually good decisions with unlucky outcomes, and that some "successes" were actually bad decisions with lucky outcomes. The reframe changes how everyone thinks about their own decision history.`,
          },
          projectOption: {
            title: `Read Annie Duke's "Thinking in Bets" or Bonanno's "The End of Trauma," 3 weeks (optional)`,
            duration: `3 weeks, ~30 minutes per session`,
            description: `Pick one: Annie Duke's "Thinking in Bets" (2018) for decision-quality framework, or George Bonanno's "The End of Trauma" (2021) for the resilience research. Read carefully over 3 weeks. Apply concepts to your own decision history. Write 1,500 words on what you learned. Real applied work that few adults do at this level.`,
            offerToParent: `Parent: opt your kid into this project. Reading a real decision-theory or resilience book at 12 is genuinely transformative.`,
          },
          identityQuestion: `If you become someone who relates to failure with calibration (asymmetric bets, decision quality vs outcome quality, portfolio thinking, resilience patterns), what does that change about which decisions you take and how you recover from the inevitable bad outcomes?`,
        },

        {
          id: `l15-identity-hook`,
          type: `identity-hook`,
          headline: `Who is this lesson making you?`,
          prompt: `One sentence. No wrong answer.`,
          placeholder: `Someone who...`,
          examples: [
            `Someone who separates decision quality from outcome quality.`,
            `A person who knows when to minimize failure and when to embrace it.`,
            `Someone willing to take asymmetric bets in my favor even when they're scary.`,
          ],
          saveKey: `identity_responses_fs_11_12_15`,
        },

        {
          id: `l15-celebration`,
          type: `celebration`,
          guideText: `{name}. Fifteenth Future Skills lesson done. You can now articulate three positions on relating to failure (minimize, embrace, context-match), distinguish decision quality from outcome quality (Annie Duke), recognize asymmetric bets (Nassim Taleb), apply portfolio thinking to decisions, and know resilience patterns from real research (George Bonanno). You can engage with failure thoughtfully rather than either avoiding all risk or embracing every gamble. Most adults never explicitly develop this framework. Next time we go into one of the most practical applied skills: entrepreneurship. Three real cases of building something. Case Study format. Let's go. — Byte`,
          badge: `resilience-builder`,
          badgeName: `Resilience Builder`,
          xpEarned: 75,
          competencies: [
            `Articulates three positions on relating to failure (minimize, embrace, context-match)`,
            `Distinguishes decision quality from outcome quality (Annie Duke)`,
            `Recognizes asymmetric bets (Taleb antifragility)`,
            `Applies portfolio thinking to decisions over time`,
            `Knows resilience patterns from Bonanno and related research`,
          ],
          nextLessonPreview: {
            title: `Lesson 16: Entrepreneurship`,
            hook: `Three real cases of building something. Pricing, unit economics, scaling. Case Study format.`,
          },
        },
      ],
    },
  ],
};

export default FUTURESKILLS_VOYAGER_L15;

if (import.meta.env?.DEV) {
  const l = FUTURESKILLS_VOYAGER_L15.lessons[0];
  const mags = l.screens.filter((s) => s.type === `magazine`).length;
  const argEvi = l.screens.find((s) => s.type === `argument-builder`)?.evidence?.length ?? 0;
  const quiz = l.screens.find((s) => s.type === `quiz`)?.questions?.length ?? 0;
  const reflect = l.screens.find((s) => s.type === `reflection`)?.prompts?.length ?? 0;
  console.log(
    `[LESSON-FS-VOYAGER-L15 ${VERSION}] "${l.title}" — ${mags} magazine, argument-builder w/ ${argEvi} evidence, ${quiz} quiz, ${reflect} reflection`
  );
}
