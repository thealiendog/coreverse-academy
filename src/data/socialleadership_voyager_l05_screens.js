// ─────────────────────────────────────────────────────────────────────────────
// SOCIAL LEADERSHIP VOYAGER  |  L05 — Making Decisions Under Uncertainty
// Age band : voyagers (11-12)   Guide: valor (Lion)
// Standards: Coreverse Original — Decision Theory, Applied Leadership
// CALIBRATED: Voyager spec v1.1 (May 2026)
// Interaction format: ARGUMENT BUILDER (deliberative / decisive / context-match)
// ─────────────────────────────────────────────────────────────────────────────

const VERSION = "voyager-sl-l05-v1";

const SOCIALLEADERSHIP_VOYAGER_L05 = {
  ageBand: `voyagers`,
  subjectId: `social-leadership`,
  guide: `valor`,

  lessons: [
    {
      id: `sl-11-12-05`,
      title: `Making Decisions Under Uncertainty`,
      duration: 35,
      xpReward: 75,
      badge: `decision-maker`,
      badgeName: `Decision Maker`,

      screens: [
        {
          id: `l05-welcome`,
          type: `welcome`,
          guideText: `{name}, leadership requires deciding under uncertainty. You usually won't have all the information you'd want. You'll often have to decide before things become clear. Whether you decide quickly or take time to gather more information shapes which kinds of mistakes you make. Both errors are real: deciding too fast on bad information vs. waiting so long that the moment passes. There are three serious positions on how to handle this defended by working decision researchers and practitioners. Today you build your argument for which framing fits your thinking. The skill matters because you'll make thousands of consequential decisions under uncertainty over your lifetime; your approach shapes how well most of them go.`,
          headline: `Making Decisions Under Uncertainty`,
          subtitle: `Three positions. The skill shapes thousands of decisions over a lifetime.`,
          visual: `/voyager-assets/social-leadership/l05-welcome.webp`,
        },

        {
          id: `l05-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `What "Decision Under Uncertainty" Actually Means`,
          paragraphs: [
            `Almost every consequential decision is made under uncertainty. You don't know exactly how things will turn out. You don't have all the information that would be useful. You can't perfectly predict how others will respond. The future is partly unpredictable. This is normal. Decision theory has been studying how to handle this for nearly a century, and the patterns are clearer than most people realize.`,
            `Two types of error are possible in any uncertain decision. Type 1: you decide before you should, based on incomplete information, and turn out wrong. Type 2: you delay deciding so long that the situation changes, the option closes, or someone else decides for you. Most decision frameworks focus on Type 1 (be careful, gather information, think things through). Type 2 errors are often less visible but equally costly. The skill is balancing both.`,
            `Daniel Kahneman, the Nobel-winning psychologist who studied decision-making for decades, distinguished "System 1" (fast, intuitive, automatic thinking) from "System 2" (slow, deliberate, effortful thinking) in his 2011 book "Thinking, Fast and Slow." Both have their place. System 1 is reliable for situations similar to ones you've seen before; System 2 is necessary for novel situations or when stakes are high. Most people use one or the other reflexively rather than choosing deliberately.`,
            `Herbert Simon, another Nobel-winning researcher in decision-making, introduced "bounded rationality" — the recognition that real people make decisions with limited information, limited time, and limited cognitive capacity. Simon argued that real decision-making is about "satisficing" (finding a good-enough option) rather than "optimizing" (finding the theoretically best option). The distinction matters because real life almost never gives you the resources to optimize.`,
            `One important reframe. Most decision research separates "decision quality" (how good your decision was given what you knew) from "outcome quality" (what actually happened). A good decision can produce a bad outcome from bad luck; a bad decision can produce a good outcome from good luck. Annie Duke's "Thinking in Bets" (2018) makes this concrete: most people evaluate decisions by outcomes, which produces bad learning. The skill is evaluating decision quality independently of outcome.`,
          ],
          image: `/voyager-assets/social-leadership/l05-s1-mean.webp`,
          imageCaption: `Decisions under uncertainty: two types of error possible. System 1 vs System 2. Satisficing vs optimizing. Decision quality vs outcome quality.`,
          vocab: [
            {
              word: `bounded rationality`,
              definition: `Concept introduced by Herbert Simon, Nobel-winning decision researcher. Recognition that real people make decisions with limited information, limited time, and limited cognitive capacity. Real decision-making is about "satisficing" (finding a good-enough option) rather than "optimizing" (finding the theoretically best). Distinction matters because real life almost never gives you the resources to optimize.`,
              audioPrompt: `Bounded rationality is a concept introduced by Herbert Simon, the Nobel-winning decision researcher, {name}. Recognition that real people make decisions with limited information, limited time, and limited cognitive capacity. We can't process all relevant information; we can't consider all possible options; we can't perfectly predict consequences. We have bounded rather than unlimited rationality. Simon argued that real decision-making is about "satisficing" — finding a good-enough option — rather than "optimizing" — finding the theoretically best option. The distinction matters because real life almost never gives you the resources to optimize. Trying to optimize when you can only satisfice produces decision paralysis or wastes resources searching for marginal improvements. Knowing the difference helps you decide deliberately when to invest in better decision-making and when "good enough" really is good enough. Simon's framework shaped how decision theory and behavioral economics developed.`,
            },
            {
              word: `System 1 and System 2`,
              definition: `Framework from Daniel Kahneman's 2011 book "Thinking, Fast and Slow." System 1 is fast, intuitive, and automatic; System 2 is slow, deliberate, and effortful. System 1 is reliable for situations similar to ones you've seen before; System 2 is necessary for novel situations or high stakes. Most people use one or the other reflexively rather than choosing deliberately.`,
              audioPrompt: `System 1 and System 2 is a framework from Daniel Kahneman, the Nobel-winning psychologist who studied decision-making for decades, {name}. Kahneman introduced this distinction in his 2011 book "Thinking, Fast and Slow." System 1 is fast, intuitive, and automatic thinking — the kind that recognizes a face, senses danger, or finishes a familiar sentence without effort. System 2 is slow, deliberate, and effortful thinking — the kind required for a math problem, a complex argument, or a novel unfamiliar situation. Both have their place. System 1 is reliable for situations similar to ones you've seen before, because it runs on patterns your brain has already built. System 2 is necessary for novel situations or when stakes are high and errors are costly. The key insight: most people use one or the other reflexively rather than choosing deliberately. You can improve your decision-making by learning when to trust fast System 1 intuition and when to slow down and activate System 2 analysis instead. The choice itself is a skill.`,
            },
            {
              word: `satisficing`,
              definition: `Term introduced by Herbert Simon combining "satisfying" and "sufficing." Finding a good-enough option rather than the theoretically best option. Reflects the reality of bounded rationality: real people decide with limited information, time, and cognitive capacity. The distinction from optimizing matters because real life almost never provides resources to optimize.`,
              audioPrompt: `Satisficing is a term introduced by Herbert Simon, {name}, combining the words "satisfying" and "sufficing." It means finding a good-enough option rather than the theoretically best option. Simon introduced it alongside his concept of bounded rationality — the recognition that real decision-makers have limited information, limited time, and limited cognitive capacity. Given those limits, trying to optimize (find the single best option among all possibilities) is usually impossible and often counterproductive. Satisficing — finding an option that meets your key criteria well enough — is the more realistic and often more effective approach. The distinction matters practically. When you face a decision, asking "what's the best possible option?" can produce paralysis because the answer requires more analysis than you have time for. Asking "what's a good enough option given what I know?" produces a workable decision you can actually make. Simon's insight is that satisficing isn't a failure to optimize — it's the appropriate strategy when you have bounded rather than unlimited rationality. Most real decisions are satisficing decisions.`,
            },
          ],
        },

        {
          id: `l05-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Position 1: Be Deliberative — Gather More Information`,
          paragraphs: [
            `The first position: when facing uncertainty, gather more information, consult others, think carefully, and decide deliberately. Acting on incomplete information leads to predictable mistakes. Slowing down to think things through produces better decisions over time. Many of the worst decisions in business, politics, and personal life came from people deciding too fast on inadequate information.`,
            `The case has real strength. Cognitive biases (covered in the L04 of Future Skills band — critical thinking) often distort fast decisions. Daniel Kahneman's work shows that System 1 (fast, intuitive) thinking systematically produces specific errors that System 2 (slow, deliberate) can catch. Confirmation bias, availability bias, anchoring, overconfidence all distort fast decisions in ways slower thinking can mitigate. The deliberative approach produces measurably better decisions in many contexts, especially for high-stakes novel situations.`,
            `Defenders include Daniel Kahneman, many academic decision researchers, much of professional decision-making in fields like medicine and law (where deliberation is built into the process), and many thoughtful working leaders. The position fits well with Robert Maxwell's "two-way doors" concept (and Jeff Bezos's adoption of it): most decisions are reversible, so taking time to make them well is usually worth it.`,
            `The limits. Pure deliberation has real costs. Decision paralysis is a real phenomenon: gathering information indefinitely is a way of avoiding deciding. Some opportunities close while you're still gathering information. Some situations require fast action where slow deliberation produces worse outcomes than imperfect fast decisions would. Pure deliberation also tends to overweight information that's easy to gather (data, written analysis) and underweight information that requires action to discover (what happens when you try). For some situations, you genuinely can't know what's right without trying.`,
          ],
          image: `/voyager-assets/social-leadership/l05-s2-deliberative.webp`,
          imageCaption: `Position 1: gather more, think carefully, decide deliberately. Kahneman's research on cognitive biases, professional decision-making fields.`,
          vocab: [
            {
              word: `doors bezos`,
              definition: `Decision framework popularized by Jeff Bezos at Amazon. Two-way door decisions are reversible: you can try them and come back if they don't work. One-way door decisions are largely irreversible: once you walk through, you can't easily return. Two-way doors should be decided quickly to allow learning; one-way doors deserve more deliberation. Most decisions are two-way doors; people often treat them as one-way doors and overthink them.`,
              audioPrompt: `Two-way doors versus one-way doors is a decision framework popularized by Jeff Bezos at Amazon, {name}. Two-way door decisions are reversible: you can try them and come back if they don't work. Hiring is usually a two-way door (you can change your mind, though painfully). Starting a new project is usually a two-way door. Changing direction on a strategy is usually a two-way door. One-way door decisions are largely irreversible: once you walk through, you can't easily return. Selling a company is mostly a one-way door. Some major commitments are one-way doors. Some kinds of professional credentialing are one-way doors. The framework's practical implication: two-way doors should be decided quickly to allow learning; one-way doors deserve more deliberation. Most decisions are two-way doors; people often treat them as one-way doors and overthink them. Knowing the difference helps you calibrate how much deliberation any given decision actually deserves.`,
            },
            {
              word: `decision paralysis`,
              definition: `Real phenomenon where gathering more information becomes a way of avoiding deciding. Identified as a key limit of the deliberative approach. Some opportunities close while information is still being gathered. Pure deliberation has real costs that proponents often underweight. The cost of delay is not zero.`,
              audioPrompt: `Decision paralysis is a real phenomenon where gathering information indefinitely becomes a way of avoiding deciding, {name}. It is identified in the text as the key limit of the deliberative approach — the position that says you should gather more information, consult others, and think carefully before deciding. The case for deliberation is real: cognitive biases distort fast decisions, and slowing down can catch errors System 1 thinking produces. But pure deliberation has costs that proponents often underweight. Some opportunities close while you're still gathering information. Some situations require fast action where slow deliberation produces worse outcomes than imperfect fast decisions would have. Pure deliberation also tends to overweight information that's easy to gather — data, written analysis — and underweight information you can only discover by acting. Decision paralysis is what you get when the search for better information displaces the decision itself. Knowing the cost of delay is not zero is what makes the deliberative position a real position rather than a simple prescription to always think more carefully.`,
            },
            {
              word: `cognitive biases`,
              definition: `Systematic errors in fast (System 1) thinking identified by Daniel Kahneman and behavioral economics research. Includes confirmation bias, availability bias, anchoring, and overconfidence. All distort fast decisions in predictable ways that slower System 2 deliberation can mitigate. Key evidence for the deliberative position.`,
              audioPrompt: `Cognitive biases are systematic errors in fast System 1 thinking identified by Daniel Kahneman and decades of behavioral economics research, {name}. The text names four specifically: confirmation bias, which is the tendency to seek information that confirms what you already believe; availability bias, which is overweighting information that comes easily to mind; anchoring, which is being disproportionately influenced by the first piece of information you encounter; and overconfidence, which is systematically overestimating how accurate your judgments are. All four distort fast decisions in predictable directions. They are key evidence for the deliberative position — the argument that slowing down and thinking carefully produces better decisions — because slower System 2 thinking can catch what System 1 misses. The fact that these biases are systematic and predictable is important. They are not random noise; they are consistent patterns that produce consistent errors. Understanding which biases apply in a given situation gives you a concrete reason to slow down rather than trusting your first intuitive response.`,
            },
          ],
        },

        {
          id: `l05-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Position 2: Be Decisive — Act With Available Information`,
          paragraphs: [
            `The second position: in most leadership situations, you should decide quickly with the information you have, then adjust based on what you learn. Waiting for more information often costs more than the cost of being slightly wrong. Decisive action creates information you couldn't have gathered through deliberation. Most of the leaders who built things, led through crises, or made significant change were comfortable deciding quickly under uncertainty.`,
            `The case has real strength. General Colin Powell developed his "40/70 rule": decide when you have 40-70% of the information you'd want. Less than 40% is reckless; waiting for more than 70% means you're missing opportunities while gathering. The rule reflects accumulated military experience: hesitation often costs more than imperfect decisions. Many entrepreneurs, military leaders, and crisis managers operate with similar implicit rules.`,
            `Gary Klein's research on "recognition-primed decision making" showed that expert decision-makers in high-pressure situations (firefighters, military commanders, ER doctors) don't use formal deliberation. They pattern-match to similar past situations and act quickly. Their fast intuitive decisions are usually better than slow analytical ones because the patterns have been built through experience. This suggests that decisive action, when grounded in real experience, often beats deliberative analysis.`,
            `Defenders include Klein and other experts on intuitive expertise, Colin Powell and military doctrine, much of the entrepreneurial tradition, Jeff Bezos's stated decision philosophy, and many working leaders across crisis-prone fields. The position recognizes that the deliberative position underweights the costs of delay and the value of action-generated learning.`,
            `The limits. Pure decisiveness without consideration can become recklessness. Some decisions deserve real deliberation: high stakes, hard to reverse, novel enough that pattern-matching doesn't apply. Decisive action in unfamiliar territory often produces worse outcomes than slower analysis. The decisive approach also tends to favor people with established positions over those with less experience: pattern-matching only works if you have relevant patterns from experience. Less experienced decision-makers using decisive shortcuts often miss things deliberation would have caught.`,
          ],
          image: `/voyager-assets/social-leadership/l05-s3-decisive.webp`,
          imageCaption: `Position 2: decide quickly with available information, adjust based on what you learn. Powell's 40/70 rule, Klein's expert decision-making research.`,
          vocab: [
            {
              word: `Colin Powell`,
              definition: `Decision heuristic from Colin Powell: decide when you have 40-70% of the information you'd ideally want. Less than 40% is reckless; waiting for more than 70% means missing opportunities. Reflects accumulated military experience that hesitation often costs more than imperfect decisions. Practical rule for action-oriented leadership in time-sensitive situations.`,
              audioPrompt: `Colin Powell's 40/70 rule is a decision heuristic from Colin Powell, the former Secretary of State and decorated military commander, {name}. The rule: decide when you have between 40 and 70 percent of the information you'd ideally want to have. Less than 40 percent is reckless because you're acting on too little information. Waiting for more than 70 percent means you're missing opportunities while gathering information you may not need. The sweet spot is somewhere between. The rule reflects accumulated military experience that hesitation often costs more than imperfect decisions. It's a practical rule for action-oriented leadership in time-sensitive situations. The specific numbers aren't sacred; the underlying principle is. Most decisions face the same tradeoff: more information vs faster action. Powell's framing helps calibrate where to land on that tradeoff in specific situations.`,
            },
            {
              word: `recognition-primed decision making`,
              definition: `Pattern identified by Gary Klein in research on expert decision-makers under pressure. Firefighters, military commanders, and ER doctors don't use formal deliberation; they pattern-match to similar past situations and act quickly. Fast intuitive decisions built from experience usually beat slow analytical ones in high-pressure familiar situations. Works when relevant patterns exist from experience; fails when situations are genuinely novel.`,
              audioPrompt: `Recognition-primed decision making is a pattern identified by Gary Klein in his research on expert decision-makers in high-pressure situations, {name}. Klein studied firefighters, military commanders, and emergency room doctors making decisions under time pressure, and what he found was striking. These experts do not use formal deliberation. They do not weigh options systematically or apply analytical frameworks. Instead, they pattern-match — they rapidly compare the current situation to similar situations they have encountered before, and they act on the match. Their fast intuitive decisions are usually better than slow analytical ones precisely because the patterns have been built through years of real experience. This is the key research base for the decisive position: the argument that acting quickly with available information is often the right call. The critical limit is equally clear in the text. Recognition-primed decision making works when you have relevant patterns from experience. It fails when situations are genuinely novel — when you are in territory you have never navigated before. In novel territory, the patterns don't match, and fast intuitive decisions can become recklessness.`,
            },
            {
              word: `recklessness`,
              definition: `The limit of pure decisiveness. Decisive action without sufficient consideration, particularly in high-stakes, hard-to-reverse, or genuinely novel situations where pattern-matching doesn't apply. Identified as what the decisive position risks becoming when applied without context-sensitivity. Distinct from appropriate decisiveness, which is grounded in relevant experience.`,
              audioPrompt: `Recklessness is the limit of pure decisiveness identified in the text, {name}. The decisive position — decide quickly with available information, adjust based on what you learn — has real strength. Colin Powell's 40/70 rule reflects genuine military experience. Gary Klein's research on recognition-primed decision making shows that expert intuitive decisions often beat slow analytical ones. But pure decisiveness without consideration can become recklessness. Some decisions deserve real deliberation: those with high stakes, those that are hard to reverse, and those that are novel enough that pattern-matching from experience doesn't apply. Decisive action in unfamiliar territory often produces worse outcomes than slower analysis would have. The decisive approach also tends to favor people with established patterns of relevant experience. Less experienced decision-makers using decisive shortcuts often miss things that deliberation would have caught. The distinction between appropriate decisiveness and recklessness is the presence of relevant experience. Deciding quickly when you have genuine pattern-matched knowledge of a type of situation is a skill. Deciding quickly when you don't is a gamble.`,
            },
          ],
        },

        {
          id: `l05-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Position 3: Match Approach To Context`,
          paragraphs: [
            `The third position: neither pure deliberation nor pure decisiveness is correct. The right approach depends on the specific decision: how reversible it is, how time-sensitive it is, how much you already know, and what kind of mistake would be worse. Different situations call for different decision approaches. The skill is recognizing which situation you're in and applying the appropriate approach.`,
            `Key dimensions for context-matching. First: reversibility. Two-way doors deserve faster decisions to allow learning; one-way doors deserve more deliberation. Second: time pressure. Decisions where waiting is genuinely costly (closing windows, escalating problems) deserve more decisive action; decisions where waiting is cheap deserve more deliberation. Third: experience level. If you have substantial pattern-matched experience in the type of situation, intuitive fast decisions often work well; if you don't, slower deliberation usually beats fast guessing. Fourth: which mistake is worse. Type 1 errors (deciding wrong by acting too fast) and Type 2 errors (missing opportunities by waiting too long) have different costs in different situations.`,
            `Defenders include Annie Duke (decision quality framework), many working practitioners who've internalized situation-matching through experience, much of decision theory after Simon, and people who study expert performance across fields. The position recognizes that universal rules ("always be decisive" or "always deliberate") usually fail because real decisions vary too widely for one approach to be right for all.`,
            `Annie Duke's "Thinking in Bets" framework helps with context-matching. She emphasizes evaluating decision quality independently of outcome quality (so you can learn from both good and bad outcomes), considering the actual probability distributions involved, and committing to decisions even when you're not certain (because waiting for certainty is usually too costly).`,
            `The limits. "It depends" can become an excuse for not having any working framework. Context-matching requires real judgment in each specific situation, which is more cognitively demanding than rigid rules. Sometimes a worse rule applied consistently produces better outcomes than a better rule applied inconsistently. Pure context-matching also relies on accurate assessment of which kind of situation you're in, which can itself be biased by what you want to do.`,
          ],
          image: `/voyager-assets/social-leadership/l05-s4-context.webp`,
          imageCaption: `Position 3: match approach to context. Reversibility, time pressure, experience, type of error. Annie Duke's decision quality framework.`,
          vocab: [
            {
              word: `annie duke`,
              definition: `Distinction from Annie Duke's "Thinking in Bets" (2018). Decision quality: how good your decision was given what you knew at the time. Outcome quality: what actually happened. They can diverge: good decisions can produce bad outcomes from bad luck, bad decisions can produce good outcomes from luck. Most people evaluate decisions by outcomes, producing bad learning. Real skill: evaluating decision quality independently of outcome.`,
              audioPrompt: `Decision quality versus outcome quality is a distinction from Annie Duke's 2018 book "Thinking in Bets," {name}. Duke was a professional poker player before becoming a decision researcher, and her framework comes from observing that poker requires separating good decisions from good outcomes. Decision quality is how good your decision was given what you knew at the time. Outcome quality is what actually happened. The two can diverge significantly. A good decision can produce a bad outcome because of bad luck or uncertainty you couldn't have known about. A bad decision can produce a good outcome because of luck. Most people evaluate decisions by their outcomes. This produces bad learning: you might think a good decision was actually bad because of an unlucky outcome, or think a bad decision was actually good because of a lucky outcome. Real skill is evaluating decision quality independently of outcome quality. This lets you learn from both good and bad outcomes accurately, building decision-making expertise over time.`,
            },
            {
              word: `reversibility`,
              definition: `Key dimension for context-matching decisions. How easily a decision can be undone if it turns out wrong. Two-way door decisions (reversible) deserve faster decisions to allow learning. One-way door decisions (largely irreversible) deserve more deliberation. Reversibility interacts with stakes: irreversible high-stakes decisions warrant the most care.`,
              audioPrompt: `Reversibility is the first key dimension for context-matching decisions identified in the text, {name}. It describes how easily a decision can be undone if it turns out wrong. The text connects it directly to Jeff Bezos's two-way doors versus one-way doors framework. Two-way door decisions are reversible: you can try them and come back if they don't work. They deserve faster decisions, because reversibility means you can learn from trying rather than having to get it right in advance. One-way door decisions are largely irreversible: once you commit, you can't easily return to where you were. They deserve more deliberation, because you won't have a chance to correct the mistake cheaply. Reversibility interacts with stakes: an irreversible low-stakes decision still deserves some care, but an irreversible high-stakes decision warrants the most deliberation of all. The context-matching position uses reversibility as the first filter precisely because it changes what kind of error is worse. For reversible decisions, the cost of a Type 1 error (acting too fast and being wrong) is low — you can correct it. For irreversible decisions, the same cost can be very high.`,
            },
            {
              word: `Type 1 and Type 2 errors`,
              definition: `Two types of error possible in any uncertain decision. Type 1: deciding before you should, based on incomplete information, and turning out wrong. Type 2: delaying deciding so long that the situation changes, the option closes, or someone else decides for you. Most decision frameworks focus on Type 1. Type 2 errors are often less visible but equally costly. The skill is balancing both.`,
              audioPrompt: `Type 1 and Type 2 errors are the two types of error possible in any uncertain decision, {name}. Type 1 error: you decide before you should, based on incomplete information, and you turn out to be wrong. Most decision-making advice focuses on this one. Be careful. Gather information. Think things through. Don't act on incomplete information. The risk is real. Type 2 error: you delay deciding so long that the situation changes, the option closes, or someone else decides for you. This error is often less visible — you don't always know what opportunity you missed because you were still deliberating when the window closed. But the text is explicit that Type 2 errors are equally costly. The skill is balancing both. Focusing only on avoiding Type 1 errors produces decision paralysis. Focusing only on avoiding Type 2 errors can produce recklessness. The context-matching position uses the question "which mistake is worse in this situation?" as one of its key filters for deciding how much deliberation any given decision deserves. Different situations tip the balance toward different types of error.`,
            },
          ],
        },

        {
          id: `l05-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Before You Build Your Argument`,
          paragraphs: [
            `As you build your argument, notice that the three positions aren't strictly mutually exclusive. Most mature decision-makers blend elements: deliberate for high-stakes irreversible decisions, decisive for reversible time-sensitive ones, context-matched for everything in between. The forcing function of the argument is committing to a primary framing.`,
            `One framing to consider. Each position implies a different default. Position 1 (deliberative) defaults to "let me gather more information first." Position 2 (decisive) defaults to "let me decide and adjust." Position 3 (context-match) defaults to "what kind of situation is this?" Most people have one implicit default they apply unconsciously. Making it explicit is the first step toward choosing it deliberately.`,
            `Another framing. The right default may depend on what kinds of decisions you typically face. Crisis-prone domains reward decisiveness because situations move faster than deliberation. Stable decision-rich domains often reward deliberation because there's time and the cost of being wrong is high. Knowing your typical environment helps calibrate the default that fits.`,
            `One last framing. Whatever you commit to, the underlying skill of distinguishing decision quality from outcome quality (Annie Duke) protects against bad learning. Most people experience some lucky outcomes from bad decisions and unlucky outcomes from good ones. Without the distinction, you learn the wrong lessons from both. With it, you can extract real learning from any outcome.`,
          ],
          image: `/voyager-assets/social-leadership/l05-s5-before.webp`,
          imageCaption: `Three positions, three defaults. Most people have implicit default; making it explicit lets you choose deliberately.`,
          vocab: [
            {
              word: `time pressure`,
              definition: `Specific subset of decision research focused on how good decisions get made when time is limited. Different from general decision-making because the cost of gathering more information is high. Gary Klein's "recognition-primed decision making" applies here: experts pattern-match quickly to similar past situations and act on the match. Works when patterns from experience apply; fails when situations are genuinely novel.`,
              audioPrompt: `Decision-making under time pressure is a specific subset of decision research focused on how good decisions get made when time is limited, {name}. Different from general decision-making because the cost of gathering more information becomes high when time is short. Gary Klein, who studied firefighters, military commanders, and ER doctors making decisions in high-pressure situations, identified "recognition-primed decision making" as the pattern experts use. Experts pattern-match quickly to similar past situations and act on the match without going through formal analysis. The fast intuitive decisions are usually better than slow analytical ones in time-pressured situations because the patterns have been built through experience. Works when patterns from experience apply; fails when situations are genuinely novel. For 12-year-olds, you don't yet have decades of experience to pattern-match against. But you can start building the experience, and you can recognize when adults around you are using this kind of expert intuition.`,
            },
            {
              word: `implicit default`,
              definition: `The unstated decision approach a person applies automatically without choosing it. Each of the three positions implies a different default: deliberative defaults to "let me gather more information first"; decisive defaults to "let me decide and adjust"; context-match defaults to "what kind of situation is this?" Most people have one implicit default applied unconsciously. Making it explicit is the first step toward choosing it deliberately.`,
              audioPrompt: `An implicit default is the unstated decision approach a person applies automatically without consciously choosing it, {name}. The text identifies implicit defaults as the practical expression of each decision position. Position 1, the deliberative position, defaults to "let me gather more information first." Position 2, the decisive position, defaults to "let me decide and adjust." Position 3, the context-matching position, defaults to "what kind of situation is this?" Most people have one implicit default they apply unconsciously across most situations — not because they have reasoned it through, but because it has become habit, or temperament, or the pattern they learned from whoever raised them. The insight in the text is that making your implicit default explicit is the first step toward choosing it deliberately. Until you know what your default is, you cannot decide whether it is the right one for your typical environment. A person whose implicit default is deliberation may apply it even in situations where decisiveness would serve better. A person whose implicit default is decisiveness may apply it even where careful deliberation was warranted. Knowing your default lets you override it when the situation calls for something different.`,
            },
            {
              word: `bad learning`,
              definition: `The pattern of drawing wrong lessons from decisions because you evaluate them by outcomes rather than decision quality. A good decision with a bad outcome gets filed as a bad decision; a bad decision with a good outcome gets filed as a good one. Identified by Annie Duke. Distinguishing decision quality from outcome quality is what protects against it.`,
              audioPrompt: `Bad learning is the pattern of drawing wrong lessons from decisions because you evaluate them by outcomes rather than by decision quality, {name}. The concept comes from Annie Duke's framework for distinguishing decision quality from outcome quality. Most people, when looking back at past decisions, judge them by what happened. If a decision turned out well, they conclude it was a good decision. If it turned out badly, they conclude it was a bad one. The problem is that outcomes and decision quality can diverge significantly. A good decision can produce a bad outcome because of bad luck or uncertainty you couldn't have known about at the time. A bad decision can produce a good outcome because of good luck. When you evaluate by outcomes, you get bad learning in both directions. You might think a genuinely good decision process was wrong because of an unlucky outcome, and stop doing it. Or you might think a genuinely bad decision process was right because of a lucky outcome, and repeat it. The text identifies this as the core problem that decision quality versus outcome quality thinking solves. Whatever decision framework you commit to, applying this distinction protects against compounding errors through faulty learning over time.`,
            },
          ],
        },

        // ───── ARGUMENT BUILDER ───────────────────────────────────────────────
        {
          id: `l05-argument-builder`,
          type: `argument-builder`,
          headline: `How Should You Make Decisions Under Uncertainty?`,
          intro: `Pick the position that best captures your current thinking. Build your case with 3-4 pieces of evidence. Then respond to the strongest counterargument. Serious decision researchers defend each.`,
          positions: [
            {
              id: `deliberative`,
              label: `Be deliberative: gather information, consult, think carefully before deciding`,
              summary: `Acting on incomplete information leads to predictable mistakes. Slowing down produces better decisions over time. Defenders include Daniel Kahneman (cognitive biases in fast thinking), professional decision-making in medicine/law, Bezos's two-way doors concept applied carefully. Strength: catches biases System 1 thinking produces; better for high-stakes novel situations; pure deliberation builds careful analysis habit. Limit: decision paralysis is real; opportunities close while gathering; underweights action-generated learning; some situations need fast imperfect decisions over slow accurate ones.`,
            },
            {
              id: `decisive`,
              label: `Be decisive: decide with available information, adjust based on what you learn`,
              summary: `Waiting for more information often costs more than being slightly wrong. Decisive action creates information you couldn't have gathered through deliberation. Defenders include Colin Powell's 40/70 rule, Gary Klein's research on expert intuitive decision-making, entrepreneurial tradition. Strength: avoids paralysis; pattern-matched fast decisions often beat slow analytical ones in familiar situations; respects time-cost of delay. Limit: can become recklessness without consideration; pattern-matching only works with relevant experience; bad for novel high-stakes situations.`,
            },
            {
              id: `context-match`,
              label: `Match approach to context: reversibility, time pressure, experience, type of error`,
              summary: `Neither pure deliberation nor pure decisiveness is correct. Right approach depends on specific decision dimensions: how reversible (two-way vs one-way doors), time-sensitive, how much you already know, which mistake is worse. Defenders include Annie Duke (decision quality framework), many working practitioners, much of decision theory after Simon. Strength: universal rules usually fail because real decisions vary; matching approach to situation produces best outcomes across diverse contexts. Limit: "it depends" can become excuse for no working framework; requires more judgment in each situation; relies on accurate situation assessment.`,
            },
          ],
          evidence: [
            {
              id: `e1`,
              text: `Daniel Kahneman's work shows System 1 (fast intuitive) thinking systematically produces specific errors (confirmation bias, availability bias, anchoring, overconfidence) that System 2 (slow deliberate) thinking can catch. The deliberative approach produces measurably better decisions in many contexts.`,
              source: `Kahneman 2011 "Thinking, Fast and Slow"; decades of behavioral economics research`,
            },
            {
              id: `e2`,
              text: `Colin Powell's 40/70 rule reflects accumulated military experience: decide when you have 40-70% of the information you'd want. Less than 40 is reckless; more than 70 means missing opportunities. Real rule for action-oriented leadership in time-sensitive situations.`,
              source: `Powell's published reflections and military training`,
            },
            {
              id: `e3`,
              text: `Gary Klein's research on "recognition-primed decision making" shows expert decision-makers in high-pressure situations (firefighters, military, ER doctors) pattern-match to past situations and act fast. Their intuitive decisions usually beat slow analytical ones because patterns have been built through experience.`,
              source: `Klein research on expert decision-making`,
            },
            {
              id: `e4`,
              text: `Herbert Simon's "bounded rationality" recognized real people decide with limited information, time, and cognitive capacity. Satisficing (finding good-enough) is more realistic than optimizing (finding theoretically best). Trying to optimize when you can only satisfice produces paralysis.`,
              source: `Simon's foundational decision theory work`,
            },
            {
              id: `e5`,
              text: `Annie Duke's "Thinking in Bets" (2018) emphasizes distinguishing decision quality (how good given what you knew) from outcome quality (what happened). Most people evaluate by outcomes; this produces bad learning. Real skill: evaluate decision quality independently.`,
              source: `Duke 2018; cognitive psychology of decision-making`,
            },
            {
              id: `e6`,
              text: `Jeff Bezos's "two-way doors vs one-way doors" framework: reversible decisions (two-way) deserve faster decisions to allow learning; irreversible (one-way) deserve more deliberation. Most decisions are two-way doors; people often treat them as one-way and overthink.`,
              source: `Bezos's published management philosophy and Amazon shareholder letters`,
            },
            {
              id: `e7`,
              text: `Decision paralysis is a real phenomenon. Gathering information indefinitely is a way of avoiding deciding. Some opportunities close while you're still gathering. Pure deliberation has real costs that pure-deliberation proponents often underweight.`,
              source: `Behavioral psychology of decision avoidance`,
            },
            {
              id: `e8`,
              text: `Real decision research increasingly converges on context-matching: different decisions deserve different approaches based on reversibility, time pressure, experience available, and stakes. Universal "always deliberate" or "always decisive" rules fail across the diversity of real decisions.`,
              source: `Modern decision theory across multiple researchers`,
            },
          ],
          counterargument: {
            id: `counter`,
            text: `"You picked your position. Here's the strongest objection. All three positions assume decision-making is about explicit cognitive processes — gathering information, thinking, choosing. But the best decisions in most domains may come from intuition built through experience, not from any explicit process. The expert firefighter doesn't deliberate or apply a context-match framework; they just see the right thing to do because they've seen many similar situations. If that's right, the deliberate cultivation of any framework might miss the point. The right move might be to gather as much real experience as possible and trust the intuition that builds over time, rather than trying to think systematically about how to decide. Why think any explicit decision framework is the right level, rather than just building real experience and trusting what emerges from it?"`,
            promptInstruction: `In 3-4 sentences, respond. Is explicit decision-making the right frame, or is experiential intuition the real skill? How does your position handle this challenge?`,
          },
          reflectionPrompt: `Looking at the positions you didn't pick, which has the strongest argument that you'd find hardest to dismiss? Why?`,
        },

        {
          id: `l05-quiz`,
          type: `quiz`,
          headline: `Check your understanding`,
          questions: [
            {
              id: `q1`,
              type: `multiple-choice`,
              question: `What are the two types of error in decisions under uncertainty?`,
              options: [
                `Random mistakes`,
                `Type 1: deciding before you should on incomplete information; Type 2: delaying so long the situation changes, options close, or someone else decides; most decision frameworks focus on Type 1 but Type 2 errors are often less visible and equally costly; skill is balancing both`,
                `Big and small`,
                `Math vs feeling`,
              ],
              correctIndex: 1,
              explanation: `Most decision-making advice focuses on Type 1 (be careful, gather information). Type 2 errors (missing opportunities by waiting) are often less visible but equally real. The skill is calibrating which error matters more in specific situations.`,
            },
            {
              id: `q2`,
              type: `multiple-choice`,
              question: `What's the difference between System 1 and System 2 thinking (Kahneman)?`,
              options: [
                `Computer terms`,
                `From Kahneman 2011: System 1 = fast, intuitive, automatic; System 2 = slow, deliberate, effortful; both have their place; System 1 reliable for familiar situations, System 2 necessary for novel/high-stakes; most people use one or other reflexively rather than choosing deliberately`,
                `Brain halves`,
                `Random framework`,
              ],
              correctIndex: 1,
              explanation: `Kahneman won the Nobel for related work. System 1 produces specific predictable biases (confirmation bias, availability bias, anchoring, overconfidence) that System 2 can catch. Knowing the distinction helps you deliberately engage System 2 when it's needed.`,
            },
            {
              id: `q3`,
              type: `multiple-choice`,
              question: `What is "bounded rationality" (Simon)?`,
              options: [
                `Limited thinking`,
                `Concept from Herbert Simon: real people make decisions with limited information, time, and cognitive capacity; "satisficing" (good-enough) more realistic than "optimizing" (theoretically best); real life almost never gives resources to optimize; trying to optimize when you can only satisfice produces paralysis`,
                `Rational borders`,
                `Random theory`,
              ],
              correctIndex: 1,
              explanation: `Simon's framework shaped how decision theory and behavioral economics developed. Knowing the difference between satisficing and optimizing helps you decide when good-enough really is good-enough and when more investment in decision-making is warranted.`,
            },
            {
              id: `q4`,
              type: `multiple-choice`,
              question: `What is the "two-way doors vs one-way doors" framework (Bezos)?`,
              options: [
                `Architecture`,
                `Decision framework: two-way doors are reversible (can try and come back); one-way doors are largely irreversible (can't easily return); two-way doors should be decided quickly to allow learning; one-way doors deserve more deliberation; most decisions are two-way doors but people often treat them as one-way and overthink`,
                `Building design`,
                `Random metaphor`,
              ],
              correctIndex: 1,
              explanation: `Knowing the difference helps you calibrate how much deliberation any given decision actually deserves. Hiring is usually two-way (painful to reverse but possible). Selling a company is usually one-way. Most decisions are in between but closer to two-way than people treat them.`,
            },
            {
              id: `q5`,
              type: `multiple-choice`,
              question: `What is Colin Powell's 40/70 rule?`,
              options: [
                `Random ratio`,
                `Decision heuristic from Powell: decide when you have 40-70% of the information you'd ideally want; less than 40% is reckless; more than 70% means missing opportunities; reflects accumulated military experience that hesitation often costs more than imperfect decisions`,
                `Sales rule`,
                `Probability framework`,
              ],
              correctIndex: 1,
              explanation: `The specific numbers aren't sacred; the underlying principle is. Most decisions face the same tradeoff: more information vs faster action. Powell's framing helps calibrate where to land on that tradeoff in specific situations.`,
            },
            {
              id: `q6`,
              type: `multiple-choice`,
              question: `What did Gary Klein's research show about expert decision-making?`,
              options: [
                `Experts are slow`,
                `"Recognition-primed decision making": expert decision-makers in high-pressure situations (firefighters, military, ER doctors) pattern-match to similar past situations and act fast; their intuitive decisions usually beat slow analytical ones because patterns have been built through experience; works when patterns apply, fails for novel situations`,
                `Experts cheat`,
                `Random study`,
              ],
              correctIndex: 1,
              explanation: `The research suggests that decisive action grounded in real experience often beats deliberative analysis in familiar situations. For situations where you have real experience, fast intuitive decisions are often correct. For genuinely novel situations, slower analysis usually works better.`,
            },
            {
              id: `q7`,
              type: `multiple-choice`,
              question: `What is "decision quality vs outcome quality" (Annie Duke)?`,
              options: [
                `Same thing`,
                `Distinction from "Thinking in Bets" (2018): decision quality = how good your decision was given what you knew; outcome quality = what actually happened; they can diverge (good decisions can produce bad outcomes from bad luck, vice versa); most people evaluate by outcomes producing bad learning; real skill is evaluating decision quality independently`,
                `Different concepts`,
                `Random distinction`,
              ],
              correctIndex: 1,
              explanation: `Most people experience some lucky outcomes from bad decisions and unlucky outcomes from good ones. Without the distinction, you learn the wrong lessons from both. With it, you can extract real learning from any outcome.`,
            },
            {
              id: `q8`,
              type: `multiple-choice`,
              question: `Why might the right decision-making default depend on environment?`,
              options: [
                `Random factor`,
                `Crisis-prone domains reward decisiveness (situations move faster than deliberation); stable decision-rich domains reward deliberation (time exists and cost of being wrong is high); knowing your typical environment helps calibrate the default that fits`,
                `Different cultures`,
                `Doesn't matter`,
              ],
              correctIndex: 1,
              explanation: `Crisis-prone fields like emergency response, military, entrepreneurship reward decisiveness. Fields like medicine (non-emergency), law, scientific research often reward deliberation. The same person might benefit from different defaults in different contexts.`,
            },
            {
              id: `q9`,
              type: `true-false`,
              question: `True or false: A good decision always produces a good outcome.`,
              correctAnswer: false,
              explanation: `False. Decision quality and outcome quality can diverge. A good decision can produce a bad outcome from bad luck or uncertainty you couldn't have known about. A bad decision can produce a good outcome from luck. Annie Duke's framework specifically addresses this: real skill is evaluating decision quality independently of outcome quality.`,
            },
            {
              id: `q10`,
              type: `inference`,
              question: `Your friend says "I think I made a bad decision because the project I worked on didn't get a good grade." Based on this lesson, what should you point out?`,
              options: [
                `"You're right"`,
                `"Decision quality and outcome quality can diverge — Annie Duke's framework. Sometimes good decisions produce bad outcomes from bad luck (the rubric changed, the teacher was harsher than usual, an unrelated issue affected the grade). Sometimes bad decisions produce good outcomes from luck. Before concluding your decision was bad, examine the decision itself: given what you knew at the time, was it the best choice you could have made? What information would have led you to choose differently? If the decision was good given what you knew, the bad outcome may be bad luck rather than a bad decision. If the decision was actually bad even given what you knew at the time, then you have something to learn. Evaluating decision quality independently of outcome is one of the most useful decision skills you can build."`,
                `"Try harder"`,
                `"Bad luck"`,
              ],
              correctIndex: 1,
              explanation: `Real applied decision literacy. Don't dismiss the friend's frustration; help separate decision quality from outcome quality so they can extract accurate learning rather than the wrong lesson. This protects against bad learning across many future decisions.`,
            },
          ],
        },

        {
          id: `l05-reflection`,
          type: `reflection`,
          headline: `Sit with this`,
          intro: `Pick the prompt that pulls at you most. Your answer is saved.`,
          prompts: [
            { id: `reflect-cognitive`, category: `Cognitive`, prompt: `Before this lesson, did you have an explicit framework for decision-making under uncertainty? Has anything shifted?` },
            { id: `reflect-meta`, category: `Metacognitive`, prompt: `Honestly: do you currently default to deliberation or decisiveness? What does that produce in your life?` },
            { id: `reflect-identity`, category: `Identity`, prompt: `If you become someone who can match decision approach to context and evaluate decision quality independently of outcome, what does that change about how well your decisions go over a lifetime?` },
            { id: `reflect-application`, category: `Application`, prompt: `Pick one decision you're currently facing. Apply the framework: is it a two-way door or one-way door? What's the right level of deliberation given those dimensions?` },
            { id: `reflect-critical`, category: `Critical`, prompt: `Are there decision contexts where neither deliberation nor decisiveness fits? What about moral decisions where any analysis feels inadequate? Decisions about identity?` },
            { id: `reflect-personal`, category: `Personal investigation`, prompt: `Ask an adult about a recent significant decision they made. What was their approach? Were they explicit about it or following intuition? What would they have done differently?` },
          ],
        },

        {
          id: `l05-real-world`,
          type: `real-world`,
          headline: `Take it into your life`,
          guideContext: `Decision skill compounds across thousands of choices over a lifetime. Two paths.`,
          familyActivity: {
            title: `The Family Decision Conversation`,
            duration: `45 minutes`,
            description: `Share the three positions. Then ask family members about a significant recent decision: what was their approach, what did they consider, how do they evaluate the decision now? Apply the decision-quality-vs-outcome-quality framework: separately from how things turned out, was the decision good given what they knew? Most adults haven't explicitly separated these dimensions. The conversation often surfaces real insights about decision patterns across the family.`,
          },
          projectOption: {
            title: `Read Annie Duke's "Thinking in Bets" or Kahneman's "Thinking, Fast and Slow," 4 weeks (optional)`,
            duration: `4 weeks, ~30 minutes per session`,
            description: `Pick one: Annie Duke's "Thinking in Bets" (2018, more accessible, focused on practical decision-making) or Daniel Kahneman's "Thinking, Fast and Slow" (2011, more comprehensive on cognitive biases). Apply the framework to your own decisions during the reading period. Write 1,500 words on what you learned. Real applied decision-making practice at a level most adults don't reach.`,
            offerToParent: `Parent: opt your kid into this project. Reading a real decision-making book at 12 is genuinely formative.`,
          },
          identityQuestion: `If you become someone with calibrated decision-making across thousands of choices over a lifetime, what does that change about how well your life and leadership go compared to peers who never developed this explicitly?`,
        },

        {
          id: `l05-identity-hook`,
          type: `identity-hook`,
          headline: `Who is this lesson making you?`,
          prompt: `One sentence. No wrong answer.`,
          placeholder: `Someone who...`,
          examples: [
            `Someone who matches decision approach to the specific situation.`,
            `A person who separates decision quality from outcome quality.`,
            `Someone who knows the difference between two-way doors and one-way doors.`,
          ],
          saveKey: `identity_responses_sl_11_12_5`,
        },

        {
          id: `l05-celebration`,
          type: `celebration`,
          guideText: `{name}. Fifth Social Leadership lesson done. You now have three working frameworks for decision-making under uncertainty (deliberative, decisive, context-match) plus several specific concepts (Powell's 40/70 rule, Bezos's two-way doors, Simon's bounded rationality, Klein's recognition-primed decision making, Duke's decision quality vs outcome quality). You can apply these to specific decisions and learn accurately from outcomes regardless of luck. Next time we go into one of the highest-leverage practical skills: navigating conflict. Three case studies. Case Study format. Let's go. — Valor`,
          badge: `decision-maker`,
          badgeName: `Decision Maker`,
          xpEarned: 75,
          competencies: [
            `Articulates three positions on decisions under uncertainty (deliberative, decisive, context-match)`,
            `Distinguishes System 1 / System 2 (Kahneman), satisficing vs optimizing (Simon)`,
            `Knows Powell's 40/70 rule, Bezos's two-way doors, Klein's recognition-primed decisions`,
            `Distinguishes decision quality from outcome quality (Annie Duke)`,
            `Can match decision approach to context based on reversibility, time pressure, experience, stakes`,
          ],
          nextLessonPreview: {
            title: `Lesson 6: Navigating Conflict`,
            hook: `Three case studies covering conflict types. Case Study format.`,
          },
        },
      ],
    },
  ],
};

export default SOCIALLEADERSHIP_VOYAGER_L05;

if (import.meta.env?.DEV) {
  const l = SOCIALLEADERSHIP_VOYAGER_L05.lessons[0];
  const mags = l.screens.filter((s) => s.type === `magazine`).length;
  const argEvi = l.screens.find((s) => s.type === `argument-builder`)?.evidence?.length ?? 0;
  const quiz = l.screens.find((s) => s.type === `quiz`)?.questions?.length ?? 0;
  const reflect = l.screens.find((s) => s.type === `reflection`)?.prompts?.length ?? 0;
  console.log(
    `[LESSON-SL-VOYAGER-L05 ${VERSION}] "${l.title}" — ${mags} magazine, argument-builder w/ ${argEvi} evidence, ${quiz} quiz, ${reflect} reflection`
  );
}
