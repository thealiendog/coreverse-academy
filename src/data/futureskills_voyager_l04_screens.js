// ─────────────────────────────────────────────────────────────────────────────
// FUTURE SKILLS VOYAGER  |  L04 — Critical Thinking
// Age band : voyagers (11-12)   Guide: byte (Fox)
// Standards: Coreverse Original — Critical Thinking, Epistemology, Media Literacy
// CALIBRATED: Voyager spec v1.1 (May 2026)
// Interaction format: INVESTIGATION GAME (sort claims by epistemic quality into 3 buckets)
// ─────────────────────────────────────────────────────────────────────────────

const VERSION = "voyager-fs-l04-v1";

const FUTURESKILLS_VOYAGER_L04 = {
  ageBand: `voyagers`,
  subjectId: `future-skills`,
  guide: `byte`,

  lessons: [
    {
      id: `fs-11-12-04`,
      title: `Critical Thinking`,
      duration: 35,
      xpReward: 75,
      badge: `claim-sorter`,
      badgeName: `Claim Sorter`,

      screens: [
        {
          id: `l04-welcome`,
          type: `welcome`,
          guideText: `{name}, every day you encounter dozens of claims. Some are well-supported by strong evidence. Some are plausible but uncertain—they could turn out to be true or false. Some are outright pseudoscience that has failed every serious test. Most adults treat these categories as the same, which means they accept claims they shouldn't and reject claims they should accept. The skill of telling them apart is called critical thinking, and it's not the same as "being skeptical of everything." Real critical thinking is calibrated: high confidence in well-supported claims, low confidence in unsupported ones, genuine uncertainty for the middle. Today we cover the framework, then you sort nine real-world claims into the three buckets. This is one of the highest-leverage skills you'll learn in this entire band.`,
          headline: `Critical Thinking`,
          subtitle: `Three buckets. Nine claims. The skill that protects you for life.`,
          visual: `/voyager-assets/future-skills/l04-welcome.webp`,
        },

        {
          id: `l04-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `What Critical Thinking Actually Is`,
          paragraphs: [
            `Critical thinking gets used in confusing ways. Some people use it to mean "being skeptical of authority." Some use it to mean "questioning everything." Some use it to mean "thinking carefully before agreeing." None of these capture the actual skill well. Real critical thinking is something more specific: the ability to evaluate the evidence behind claims and hold each claim with confidence proportional to its actual support.`,
            `This means high confidence in claims that have strong evidence. Low confidence in claims that have weak evidence. Genuine uncertainty for claims where the evidence is mixed or absent. The key word is "proportional." A critical thinker doesn't accept everything, and doesn't reject everything; they treat each claim according to how well it's actually supported.`,
            `Why is this hard? Because human cognition has many shortcuts that work most of the time but fail in specific predictable ways. We have confirmation bias (notice evidence supporting beliefs we hold). We have authority bias (trust prestigious sources more than evidence warrants). We have anecdote bias (accept dramatic individual stories as proof of broader patterns). We have motivated reasoning (work harder to find flaws in claims we don't want to be true). All of these are normal cognitive features, not moral failings. But they predictably distort our evaluation of evidence.`,
            `Critical thinking is the trained skill of evaluating evidence despite these biases. It's not about being naturally smart. It's about applying specific frameworks that compensate for the predictable distortions. The frameworks can be learned. Anyone willing to do the work can develop strong critical thinking. The kids who do this consistently over a decade or two end up dramatically better at navigating information than those who don't.`,
          ],
          image: `/voyager-assets/future-skills/l04-s1-critical.webp`,
          imageCaption: `Critical thinking: evidence proportional confidence. Not skepticism of everything; not acceptance of everything.`,
          vocab: [
            {
              word: `epistemology`,
              definition: `Branch of philosophy that studies how we know things and what counts as evidence. Asks questions like "what makes a claim well-supported?" "How do we tell knowledge from belief?" Critical thinking is applied epistemology. Real working epistemologists include philosophers and cognitive scientists.`,
              audioPrompt: `Epistemology is the branch of philosophy that studies how we know things and what counts as evidence, {name}. It asks questions like "what makes a claim well-supported?" "How do we tell knowledge from belief?" "What's the difference between justified belief and lucky guess?" Critical thinking is applied epistemology. The framework you use to evaluate claims is built on epistemological foundations whether you realize it or not. Real working epistemologists include philosophers like Susan Haack and cognitive scientists like Daniel Kahneman. The field has produced useful tools for evaluating evidence, including frameworks for distinguishing well-supported claims from unsupported ones. You don't need to be a philosopher to use the tools. But you do benefit from knowing the underlying framework exists.`,
            },
            {
              word: `confirmation bias`,
              definition: `Tendency to notice and remember evidence that supports beliefs you already hold while overlooking or discounting contradicting evidence. A universal feature of human cognition, not a moral failing. Critical thinking is the trained skill of evaluating evidence despite this and other predictable cognitive biases.`,
              audioPrompt: `Confirmation bias is the tendency to notice and remember evidence that supports beliefs you already hold while overlooking or discounting contradicting evidence, {name}. It is one of the most documented patterns in cognitive psychology. Everyone has it. It's not a moral failing; it's a feature of how human cognition works that served us reasonably well in simpler information environments. In modern information environments with abundant data, it reliably distorts our evaluation of evidence. You don't notice yourself doing it. You just experience claims you already believe as "obvious" and claims you don't as "implausible." Critical thinking is the trained skill of evaluating evidence despite confirmation bias and other predictable cognitive shortcuts. The frameworks can compensate for the predictable distortions if you apply them consistently. One useful check: actively seek out the strongest version of the contrary evidence before committing to your conclusion. This doesn't eliminate confirmation bias but it directly counteracts its worst effects.`,
            },
            {
              word: `authority bias`,
              definition: `Tendency to trust sources with prestigious credentials or institutional affiliations more than the actual evidence behind their claims warrants. A useful shortcut that often fails in predictable ways: prestigious sources can be wrong, and non-prestigious sources can be right. Critical thinking evaluates evidence regardless of source prestige.`,
              audioPrompt: `Authority bias is the tendency to trust sources with prestigious credentials or institutional affiliations more than the actual evidence behind their claims warrants, {name}. It is a normal feature of human cognition. As a shortcut, it often works reasonably well: experts in a field usually know more than non-experts. But it fails in predictable ways. Prestigious sources can be wrong. The authority bias led many people to accept medical claims that later failed replication because a credentialed doctor or researcher made them. Conversely, correct findings are sometimes dismissed because the researcher was not yet well-known or the source was unfamiliar. Critical thinking evaluates claims according to evidence regardless of who is making them. This doesn't mean ignoring credentials entirely: expertise is one useful signal. It means not treating credentials as a substitute for evidence. The same question applies to a Nobel laureate's claim as to anyone else's: what is the actual evidence, has it been replicated, and does the mechanism make sense?`,
            },
          ],
        },

        {
          id: `l04-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `What "Well-Supported" Actually Means`,
          paragraphs: [
            `Well-supported claims are claims backed by strong evidence: multiple independent studies, large sample sizes, consistent results across many contexts, plausible mechanisms, and updates as new evidence comes in. Examples: smoking causes lung cancer, vaccines prevent specific infectious diseases, sleep deprivation impairs cognitive function, regular aerobic exercise has cardiovascular health benefits.`,
            `Several features make claims well-supported. First: replication. The finding has been observed by multiple independent research groups. A single study, no matter how well-designed, is not enough; replications across different labs, different populations, and different methodologies provide much stronger evidence. Second: mechanism. We understand at least roughly why the phenomenon occurs, which makes it less likely the apparent effect is a statistical fluke. Third: consilience. The finding is consistent with what we know from other related areas; isolated findings that contradict everything else are more likely to be wrong than findings that fit a larger consistent picture.`,
            `Importantly, "well-supported" doesn't mean "absolutely certain." Even the best-supported scientific claims could in principle be wrong. But the evidence base is strong enough that overturning them would require very strong contradicting evidence. The smoking-cancer link took decades to establish from many converging lines of evidence; overturning it would require many decades of similarly strong contradicting evidence. Critical thinkers hold well-supported claims with high but not absolute confidence.`,
            `One important caveat. Some claims that are well-supported in general have important exceptions, limits, or contexts where they don't apply. "Vaccines prevent specific infectious diseases" is well-supported but doesn't mean every vaccine works for every disease for every person. Critical thinkers note the precise claim being made and apply confidence accordingly. Treating "vaccines work" as more or less specific than the evidence supports is a different failure mode than rejecting it entirely.`,
          ],
          image: `/voyager-assets/future-skills/l04-s2-supported.webp`,
          imageCaption: `Well-supported: replication + mechanism + consilience. High but not absolute confidence.`,
          vocab: [
            {
              word: `replication`,
              definition: `Independent reproduction of a research finding by different researchers, in different settings, using different methods. The strongest single signal that a finding is real rather than a statistical fluke or methodological artifact. A single unreplicated study, no matter how well-designed, is much weaker evidence than multiple independent replications.`,
              audioPrompt: `Replication is the independent reproduction of a research finding by different researchers, in different settings, using different methods, {name}. The strongest single signal that a finding is real rather than a statistical fluke or methodological artifact. A single unreplicated study, no matter how well-designed, is much weaker evidence than multiple independent replications. The replication crisis in psychology and other fields, documented since around 2011, revealed that many influential findings could not be replicated when re-tested. Some failed because the original studies were too small. Some failed because of subtle methodological issues. Some failed for reasons still being investigated. The crisis taught researchers and consumers of research to weight single studies less heavily and to require multiple replications before treating findings as established.`,
            },
            {
              word: `consilience`,
              definition: `When a finding is consistent with and supported by what we already know from related areas of science. One of the features that makes claims well-supported. Isolated findings that contradict everything else are more likely to be wrong than findings that fit a larger consistent picture of what is known.`,
              audioPrompt: `Consilience is the quality of a finding being consistent with and supported by what we already know from related areas of science, {name}. It is one of the three main features that makes claims well-supported, alongside replication and plausible mechanism. The smoking-cancer link has consilience: the epidemiological evidence is consistent with what we know about carcinogens, cellular biology, and lung function. Isolated findings that contradict established science from multiple directions face a much higher burden of evidence. This doesn't mean established science is always right. It means the bar for overturning well-supported findings from multiple converging areas is higher than the bar for accepting a new finding that fits the existing picture. Consilience is one useful filter: when a dramatic claim conflicts with most of what is known, it warrants more skepticism than one that fits naturally into existing knowledge.`,
            },
            {
              word: `anecdote bias`,
              definition: `Tendency to treat dramatic individual stories as proof of broader patterns. A cognitive shortcut that often fails because vivid examples are remembered more easily than statistical averages. One person claiming crystals cured their illness is not evidence that crystals cure illnesses. Systematic research samples broadly and reports all results, not just the vivid ones.`,
              audioPrompt: `Anecdote bias is the tendency to treat dramatic individual stories as proof of broader patterns, {name}. It is one of the cognitive shortcuts that critical thinking must compensate for. Vivid individual examples are remembered more easily than statistical averages. When one person tells a compelling story about crystals healing their illness, the brain weighs it more heavily than its actual evidential value warrants. This is the core mechanism behind much pseudoscience: dramatic individual testimonials are presented as proof of broader effects. Systematic research is designed to overcome anecdote bias by sampling broadly and reporting all results, not just the vivid ones. Clinical trials enroll many participants precisely so that individual variation doesn't swamp the signal. When evaluating any health, self-improvement, or technology claim, asking "is this based on individual stories or systematic data?" is one of the most useful critical thinking moves available.`,
            },
          ],
        },

        {
          id: `l04-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `What "Plausible But Uncertain" Means`,
          paragraphs: [
            `Plausible-but-uncertain claims are claims that could turn out to be true but where the current evidence is insufficient to commit. Examples: specific dietary interventions affecting specific health outcomes, the size of certain economic effects, the specific impact of a new technology, the long-range trajectory of AI development.`,
            `Several features mark plausible-but-uncertain claims. First: the mechanism is reasonable, meaning the claim isn't impossible based on what we know. Second: some evidence exists but it's limited—few studies, small samples, mixed results, or short-term observations of phenomena that need long-term data. Third: experts in the field disagree, which signals genuine uncertainty rather than settled science. Fourth: confident predictions vary wildly across reasonable people, which is a sign no one really knows.`,
            `Critical thinkers handle plausible-but-uncertain claims by holding them with low to moderate confidence and being willing to update as evidence accumulates. They don't pretend to know things they don't. They don't reject claims just because the evidence isn't yet definitive. They wait for better data, hold multiple possibilities, and act on best current guesses while remaining open to revision.`,
            `Several common things fall into this bucket that often get treated as if they were settled. The specific long-term effects of social media on adolescent mental health (some evidence, but contested). The exact economic impact of AI on different industries over the next decade (real research happening, real uncertainty remains). The optimal diet for human health (centuries of competing claims; some patterns clear but specifics still actively researched). Many emerging therapy modalities (theoretical mechanisms plausible, evidence base still developing).`,
            `One trap to notice. Some people treat "plausible but uncertain" as if it were the same as "well-supported." They confidently advance specific dietary claims, specific therapy modalities, specific predictions about contested questions. Others treat "plausible but uncertain" as if it were the same as "pseudoscience" and dismiss the claims entirely. Both miss the actual epistemic situation. The skill is sitting with genuine uncertainty without forcing premature certainty in either direction.`,
          ],
          image: `/voyager-assets/future-skills/l04-s3-uncertain.webp`,
          imageCaption: `Plausible but uncertain: reasonable mechanism + limited evidence + expert disagreement. The hardest bucket.`,
          vocab: [
            {
              word: `epistemic humility`,
              definition: `Willingness to acknowledge the limits of your own knowledge and remain open to changing your mind as evidence accumulates. Distinct from "having no opinions" (paralysis) and "thinking all opinions are equally valid" (relativism). Compatible with confident commitment to well-supported claims AND genuine openness to revision on contested ones.`,
              audioPrompt: `Epistemic humility is willingness to acknowledge the limits of your own knowledge and remain open to changing your mind as evidence accumulates, {name}. Distinct from two failure modes. The first is having no opinions, which produces paralysis and prevents engagement with the world. The second is thinking all opinions are equally valid, which collapses important distinctions between well-supported and unsupported claims. Real epistemic humility is compatible with confident commitment to well-supported claims, like "vaccines work" or "smoking causes cancer." It's also compatible with genuine openness to revision on contested ones. The skill is calibrating your confidence to actual evidence rather than to your preferences. People with strong epistemic humility tend to be more accurate over time because they update faster when new evidence comes in.`,
            },
            {
              word: `premature certainty`,
              definition: `Forcing a definite conclusion in either direction before evidence is sufficient to support it. The failure mode of treating plausible-but-uncertain claims as if they were either well-supported or pseudoscience. Critical thinking requires sitting with genuine uncertainty on contested questions rather than forcing premature certainty in either direction.`,
              audioPrompt: `Premature certainty is forcing a definite conclusion in either direction before the evidence is sufficient to support it, {name}. It is the failure mode specifically associated with plausible-but-uncertain claims. Some people treat uncertain claims as if they were settled: they confidently advance specific dietary interventions or specific predictions about contested questions because uncertainty is uncomfortable. Others dismiss uncertain claims entirely, treating them as pseudoscience because the evidence isn't yet definitive. Both responses miss the actual epistemic situation. The long-term effects of specific social media patterns on adolescent mental health have some evidence, but the evidence is contested and the full picture isn't clear. Forcing premature certainty in either direction, either "definitely harmful" or "definitely not harmful," misrepresents what is actually known. Critical thinking requires the somewhat uncomfortable skill of sitting with genuine uncertainty, holding multiple possibilities, and acting on best current guesses while remaining genuinely open to revision.`,
            },
            {
              word: `plausible mechanism`,
              definition: `A reasonable explanation for why a phenomenon would occur, consistent with established science. One of the features that makes claims well-supported: knowing roughly why something works makes it less likely the apparent effect is a statistical fluke. Claims with implausible mechanisms, like "vibrational frequencies" healing disease, face a higher burden of evidence.`,
              audioPrompt: `A plausible mechanism is a reasonable explanation for why a phenomenon would occur, consistent with established science, {name}. It is one of the features that makes claims well-supported, alongside replication and consilience. Knowing roughly why something works makes it less likely the apparent effect is a statistical fluke or measurement artifact. The cardiovascular benefits of aerobic exercise have plausible mechanisms: physical activity strengthens heart muscle, improves circulation, reduces arterial stiffness, and affects metabolic function. These mechanisms are well understood from multiple research directions. Claims with implausible mechanisms face a higher burden of evidence. "Healing crystals cure disease through vibrational frequencies that align with body energies" describes a mechanism that contradicts established physics and biology. No known mechanism exists by which crystals at body temperatures could affect disease processes. This doesn't make the claim automatically wrong by logical necessity, but it raises the evidentiary bar significantly. Extraordinary claims require extraordinary evidence.`,
            },
          ],
        },

        {
          id: `l04-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `What "Unsupported / Pseudoscience" Means`,
          paragraphs: [
            `Unsupported claims have failed standard tests, lack plausible mechanisms, conflict with well-established science, or persist despite contrary evidence. Pseudoscience is the broader category that includes claims dressed in scientific vocabulary without scientific content. Examples: astrology predicting personality from birth dates, healing crystals with vibrational frequencies, manifestation through thoughts shaping physical reality, homeopathy at extreme dilutions, perpetual motion machines.`,
            `Several features mark unsupported claims. First: standard tests fail. When the claim has been carefully evaluated under controlled conditions, the predicted effect doesn't appear. Carlson 1985 for astrology (we covered this in Cosmos L16). Multiple controlled studies of homeopathy at high dilutions. Repeated demonstrations that "psychic" abilities don't work when proper controls prevent cold reading. Second: mechanism is implausible. The proposed mechanism either contradicts well-established physics, biology, or chemistry, or is so vague it can't be tested. Third: persistence despite contrary evidence. The claim adjusts to accommodate any contrary evidence rather than being abandoned.`,
            `Pseudoscience often uses real scientific vocabulary in misleading ways. "Quantum healing" uses quantum mechanics terminology without engaging with what quantum mechanics actually says. "Energy frequencies" uses physics terms but means something different from what physics means by them. "Detoxification" uses biological vocabulary without engaging with what livers and kidneys actually do. Pattern recognition for these vocabulary borrowings is one of the most useful critical thinking skills.`,
            `One important note: putting a claim in the "unsupported" bucket is not the same as dismissing the people who hold it. Many sincere people believe unsupported claims for understandable reasons. The claim being wrong doesn't make the believer foolish or malicious. Critical thinking is about evaluating claims, not judging people. Effective engagement with someone who holds an unsupported claim usually requires more than telling them they're wrong; it requires understanding why the claim is appealing to them and engaging with that appeal alongside the evidence.`,
            `Another important note. Some claims that look like pseudoscience are actually frontier science that hasn't been fully validated yet. The germ theory of disease was once considered fringe. Continental drift was rejected for decades. Critical thinkers stay open to the possibility that current orthodoxy might be wrong, while still applying the framework of evidence proportional to confidence. The bar for "this overturns established science" is higher than the bar for "this fits established science," but it's not infinite.`,
          ],
          image: `/voyager-assets/future-skills/l04-s4-unsupported.webp`,
          imageCaption: `Unsupported: failed tests + implausible mechanism + persistence despite evidence. The clearest bucket.`,
          vocab: [
            {
              word: `motivated reasoning`,
              definition: `Tendency to reason more rigorously when evaluating claims we don't want to be true and less rigorously when evaluating claims we do want to be true. Universal feature of human cognition. Particularly important to recognize in your own thinking because it operates below conscious awareness. The skill is noticing when you're applying different standards.`,
              audioPrompt: `Motivated reasoning is the tendency to reason more rigorously when evaluating claims we don't want to be true and less rigorously when evaluating claims we do want to be true, {name}. A universal feature of human cognition, not a moral failing. Everyone does it. Particularly important to recognize in your own thinking because it operates below conscious awareness. You don't notice yourself being more critical of unwelcome conclusions; you just experience them as "implausible" while welcome conclusions feel "obvious." The skill is noticing when you're applying different standards. One useful check: ask yourself "if a study showed the opposite of what I want to be true, would I find that study more or less compelling than this one?" If you'd find the opposite study less compelling, you're probably engaging in motivated reasoning.`,
            },
            {
              word: `scientific vocabulary`,
              definition: `The specific terms and concepts used in science to describe mechanisms and phenomena. Pseudoscience frequently uses real scientific vocabulary in misleading ways: "quantum healing," "energy frequencies," and "detoxification" borrow scientific terms while meaning something different from what science means by them. Recognizing this vocabulary borrowing is a practical critical thinking skill.`,
              audioPrompt: `Scientific vocabulary refers to the specific terms and concepts used in science to describe mechanisms and phenomena, {name}. One of the most useful critical thinking skills is recognizing when scientific vocabulary is being borrowed for pseudoscientific purposes. "Quantum healing" uses quantum mechanics terminology without engaging with what quantum mechanics actually says. "Energy frequencies" uses physics terms but means something different from what physics means by frequency and energy. "Detoxification" uses biological vocabulary without engaging with what livers and kidneys actually do, which is already to process and remove biological waste. The borrowing is strategic. Scientific vocabulary signals credibility. Attaching it to claims that don't actually derive from scientific findings makes those claims appear more rigorous than they are. Pattern recognition for these vocabulary borrowings is one of the most practical critical thinking skills you can develop. When a claim uses scientific terminology, the question to ask is not "does this sound scientific?" but "does the mechanism actually follow from what that science says?"`,
            },
            {
              word: `frontier science`,
              definition: `Legitimate scientific inquiry into phenomena that are not yet well-established. Some claims that initially look like pseudoscience are frontier science that hasn't been fully validated. Germ theory and continental drift were once considered fringe. Critical thinking stays open to current orthodoxy being wrong while still requiring evidence proportional to how much a claim challenges established science.`,
              audioPrompt: `Frontier science is legitimate scientific inquiry into phenomena that are not yet well-established, {name}. It is an important concept for avoiding overcorrection in critical thinking. Some claims that look like pseudoscience are actually frontier science that hasn't yet been fully validated. Germ theory of disease was once considered fringe. Continental drift was rejected by mainstream geology for decades before the evidence became overwhelming. Psychedelic-assisted therapy looked fringe for decades; it is now generating serious peer-reviewed research with promising early results. Critical thinkers stay open to the possibility that current orthodoxy might be wrong, while still applying the framework of evidence proportional to confidence. The bar for claims that overturn established science is higher than the bar for claims that fit it, but it is not infinite. Claims that were initially in the pseudoscience bucket sometimes graduate to plausible-but-uncertain, and sometimes to well-supported, as evidence accumulates. The framework is meant to track current evidence, not to freeze beliefs permanently.`,
            },
          ],
        },

        {
          id: `l04-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Before You Sort The Claims`,
          paragraphs: [
            `In the investigation that follows, you'll sort nine real-world claims into three buckets: well-supported, plausible but uncertain, and unsupported. As you sort, notice which bucket each claim feels like it should be in versus which bucket the evidence actually supports. Sometimes these match. Sometimes they don't. The skill of recognizing the mismatch is one of the most valuable applications of critical thinking.`,
            `Some sorting strategies that might help. First: identify the precise claim being made. Vague claims often need to be made precise before they can be evaluated. "Exercise is good" is too vague to evaluate; "regular aerobic exercise has cardiovascular health benefits" is more specific. Second: ask what evidence the claim is based on. Anecdotes, single studies, multiple replications, mechanisms—the type and amount of evidence matters. Third: notice whether the mechanism is plausible given established science. Claims that require physics or biology to work differently than they do face a much higher burden of evidence.`,
            `One important framing. The point of this exercise isn't to memorize which claims are in which buckets. The point is to develop the meta-skill of evaluating any claim using this framework. Once you have the meta-skill, you can apply it to claims you encounter for the rest of your life: in the news, on social media, from teachers, from friends, in your own thinking. The specific claims in this lesson are examples; the skill is what transfers.`,
            `One more thing. Some of the claims below might be in different buckets than you'd initially place them. That's by design. The investigation challenges your existing categories, which is how critical thinking actually develops. Wherever you end up, take seriously the reveal that follows: it explains why each claim belongs where it does based on current evidence.`,
          ],
          image: `/voyager-assets/future-skills/l04-s5-before.webp`,
          imageCaption: `Nine claims, three buckets, real evidence. The skill that transfers to everything you'll encounter.`,
          vocab: [
            {
              word: `falsifiability`,
              definition: `Whether a claim can in principle be proven wrong by evidence. Karl Popper argued this distinguishes scientific from non-scientific claims. Specific testable predictions are falsifiable; vague unfalsifiable claims have no empirical content. Foundational concept in philosophy of science (covered also in Cosmos L16).`,
              audioPrompt: `Falsifiability is whether a claim can in principle be proven wrong by evidence, {name}. Karl Popper, an Austrian philosopher of science, argued in the 20th century that this distinguishes scientific from non-scientific claims. Specific testable predictions are falsifiable: find one black swan and "all swans are white" is refuted. Vague claims like "some mysterious force affects events" are not falsifiable; no observation could rule them out. Falsifiable claims have empirical content. Unfalsifiable claims don't, which doesn't make them worthless but does mean they're not scientific. The concept is foundational to critical thinking. When evaluating a claim, asking "what evidence would convince the proponent they were wrong?" is a useful check. If the answer is "no possible evidence," the claim probably isn't really making an empirical commitment.`,
            },
            {
              word: `meta-skill of evaluating`,
              definition: `The transferable ability to apply a critical thinking framework to any claim, not just the specific claims you have already analyzed. The point of learning the three-bucket framework is not to memorize which claims belong where, but to develop the underlying skill that you can apply to new claims throughout your life.`,
              audioPrompt: `The meta-skill of evaluating is the transferable ability to apply a critical thinking framework to any claim, not just the specific examples you have already analyzed, {name}. The point of the three-bucket investigation is not to memorize which nine claims belong in which buckets. The point is to develop the underlying skill that you can apply to claims you encounter for the rest of your life: in the news, on social media, from teachers, from friends, in your own thinking. Once you have the meta-skill, you can apply the same questions to any new claim: What evidence supports this? Has it been replicated? Is the mechanism plausible? Are experts in genuine disagreement? Does the source have a conflict of interest? The specific claims in this lesson are examples. The skill is what transfers. Critical thinkers who have internalized the framework don't need to look up which claims are valid; they apply the same framework to new claims as they encounter them.`,
            },
            {
              word: `precise claim`,
              definition: `A specific, clearly-bounded statement that can be evaluated for its evidence. Vague claims must be made precise before they can be sorted into the three buckets. "Exercise is good" is too vague; "regular aerobic exercise has cardiovascular health benefits" is more specific and evaluable. Critical thinking requires identifying the precise claim being made.`,
              audioPrompt: `A precise claim is a specific, clearly-bounded statement that can actually be evaluated for its evidence base, {name}. Vague claims must be made precise before they can be placed into any of the three critical thinking buckets. "Exercise is good" is too vague to evaluate. "Regular aerobic exercise has cardiovascular health benefits and reduces all-cause mortality" is specific and can be evaluated against systematic research. "Social media is bad for teens" is vague. "Heavy social media use causes specific increases in adolescent depression rates, beyond correlation" is more specific and places itself in the plausible-but-uncertain bucket. Identifying the precise claim being made is the first step in sorting strategy. Many arguments happen because people are arguing about different levels of precision. One person defends a vague claim; another attacks a specific version. Asking "what exactly is the claim?" resolves many apparent disagreements and often reveals that the actual precise claim has different evidence support than the vague version suggests.`,
            },
          ],
        },

        // ───── INVESTIGATION GAME ─────────────────────────────────────────────
        {
          id: `l04-investigation`,
          type: `investigation`,
          headline: `Sort the claims by evidence quality`,
          intro: `{name}, you've just learned the three-bucket framework for evaluating claims. Now sort nine real-world claims into the bucket each one actually belongs in based on current evidence. Tap a claim, then tap the bucket where it fits. Some are easier than others. Get them all right and you have a working critical thinking framework.`,
          buckets: [
            {
              id: `well-supported`,
              label: `Well-supported by strong evidence`,
            },
            {
              id: `plausible-uncertain`,
              label: `Plausible but uncertain (evidence limited or mixed)`,
            },
            {
              id: `unsupported`,
              label: `Unsupported / pseudoscience (failed tests OR implausible mechanism)`,
            },
          ],
          items: [
            {
              id: `item-1`,
              label: `Smoking tobacco significantly increases the risk of lung cancer.`,
              correctBucket: `well-supported`,
            },
            {
              id: `item-2`,
              label: `Daily meditation reduces stress through mechanisms that involve reduced sympathetic nervous system activation and changes in default mode network function.`,
              correctBucket: `well-supported`,
            },
            {
              id: `item-3`,
              label: `Healing crystals can cure specific diseases through "vibrational frequencies" that align with body energies.`,
              correctBucket: `unsupported`,
            },
            {
              id: `item-4`,
              label: `Specific dietary interventions (e.g., intermittent fasting at specific protocols) significantly extend human lifespan in the general population.`,
              correctBucket: `plausible-uncertain`,
            },
            {
              id: `item-5`,
              label: `Your astrological sign at birth determines key features of your personality and life events.`,
              correctBucket: `unsupported`,
            },
            {
              id: `item-6`,
              label: `Regular aerobic exercise provides cardiovascular health benefits and reduces all-cause mortality.`,
              correctBucket: `well-supported`,
            },
            {
              id: `item-7`,
              label: `Heavy social media use causes specific increases in adolescent depression rates, beyond correlation.`,
              correctBucket: `plausible-uncertain`,
            },
            {
              id: `item-8`,
              label: `Thinking positive thoughts directly causes specific physical events to occur in the external world ("manifestation").`,
              correctBucket: `unsupported`,
            },
            {
              id: `item-9`,
              label: `Specific psychedelic-assisted therapy protocols may significantly reduce treatment-resistant depression in carefully selected patients.`,
              correctBucket: `plausible-uncertain`,
            },
          ],
          reflectionPrompt: `Which item did you initially place in a different bucket than its actual evidence supports? What does that reveal about your current thinking?`,
        },

        {
          id: `l04-quiz`,
          type: `quiz`,
          headline: `Check your understanding`,
          questions: [
            {
              id: `q1`,
              type: `multiple-choice`,
              question: `What does "critical thinking" actually mean?`,
              options: [
                `Being negative about things`,
                `Ability to evaluate the evidence behind claims and hold each claim with confidence proportional to its actual support; high confidence in well-supported claims, low in unsupported ones, genuine uncertainty for the middle`,
                `Questioning authority`,
                `Always being skeptical`,
              ],
              correctIndex: 1,
              explanation: `Critical thinking isn't "skepticism of everything" or "questioning authority." It's calibrated confidence: treating each claim according to its actual support. Both reflexive skepticism and reflexive acceptance fail this standard.`,
            },
            {
              id: `q2`,
              type: `multiple-choice`,
              question: `What is "epistemology"?`,
              options: [
                `A medical specialty`,
                `Branch of philosophy that studies how we know things and what counts as evidence; asks "what makes a claim well-supported?" "how do we tell knowledge from belief?"; critical thinking is applied epistemology`,
                `Religious studies`,
                `Brain science`,
              ],
              correctIndex: 1,
              explanation: `Epistemology is the philosophical foundation under critical thinking. You don't need to be a philosopher to use critical thinking tools, but knowing the underlying framework exists is useful.`,
            },
            {
              id: `q3`,
              type: `multiple-choice`,
              question: `What features make a claim "well-supported"?`,
              options: [
                `Famous people believe it`,
                `Replication (multiple independent studies); plausible mechanism (we know roughly why it works); consilience (consistent with related areas); typically high but not absolute confidence`,
                `It's on Wikipedia`,
                `Everyone agrees`,
              ],
              correctIndex: 1,
              explanation: `Replication is the strongest single signal that a finding is real. A single unreplicated study is weak evidence; multiple independent replications across labs, populations, and methods is much stronger.`,
            },
            {
              id: `q4`,
              type: `multiple-choice`,
              question: `What is "replication"?`,
              options: [
                `Copying`,
                `Independent reproduction of a research finding by different researchers, in different settings, using different methods; the strongest single signal that a finding is real rather than a statistical fluke; the replication crisis since 2011 has improved standards`,
                `Photocopying papers`,
                `Doing the same thing`,
              ],
              correctIndex: 1,
              explanation: `The replication crisis revealed that many influential findings couldn't be reproduced when re-tested. It taught researchers and consumers to require multiple independent replications before treating findings as established.`,
            },
            {
              id: `q5`,
              type: `multiple-choice`,
              question: `What does "plausible but uncertain" mean?`,
              options: [
                `Probably true`,
                `Reasonable mechanism + limited evidence (few studies, small samples, mixed results, or short-term data); experts disagree; confident predictions vary across reasonable people; the hardest bucket to handle correctly`,
                `Definitely false`,
                `Boring science`,
              ],
              correctIndex: 1,
              explanation: `Some people treat plausible-uncertain claims as if settled. Others dismiss them entirely. Both miss the actual epistemic situation. The skill is sitting with genuine uncertainty without forcing premature certainty either direction.`,
            },
            {
              id: `q6`,
              type: `multiple-choice`,
              question: `What is "epistemic humility"?`,
              options: [
                `Being modest`,
                `Willingness to acknowledge limits of your own knowledge and remain open to changing your mind as evidence accumulates; distinct from "having no opinions" (paralysis) and "all opinions equally valid" (relativism); compatible with confident commitment to well-supported claims`,
                `Religious humility`,
                `Being quiet`,
              ],
              correctIndex: 1,
              explanation: `People with strong epistemic humility tend to be more accurate over time because they update faster when new evidence comes in. The skill is calibrating confidence to actual evidence rather than to preferences.`,
            },
            {
              id: `q7`,
              type: `multiple-choice`,
              question: `What marks an "unsupported" claim?`,
              options: [
                `It's old`,
                `Standard tests fail; mechanism is implausible (contradicts well-established science or is too vague to test); persists despite contrary evidence by adjusting claims; often uses real scientific vocabulary in misleading ways`,
                `Famous people don't believe it`,
                `It's new`,
              ],
              correctIndex: 1,
              explanation: `Pattern recognition for these features is one of the most useful critical thinking skills. "Quantum healing," "energy frequencies," "detoxification" use real scientific vocabulary without engaging with what those terms actually mean.`,
            },
            {
              id: `q8`,
              type: `multiple-choice`,
              question: `What is "motivated reasoning"?`,
              options: [
                `Being motivated to think`,
                `Tendency to reason more rigorously when evaluating claims we don't want to be true and less rigorously when evaluating claims we do want to be true; universal feature of human cognition operating below conscious awareness; particularly important to recognize in your own thinking`,
                `Smart thinking`,
                `Inspired logic`,
              ],
              correctIndex: 1,
              explanation: `One useful check: ask yourself "if a study showed the opposite of what I want to be true, would I find that study more or less compelling than this one?" If you'd find the opposite study less compelling, you're probably engaging in motivated reasoning.`,
            },
            {
              id: `q9`,
              type: `true-false`,
              question: `True or false: Putting a claim in the "unsupported" bucket is the same as dismissing the people who hold it.`,
              correctAnswer: false,
              explanation: `False. Many sincere people believe unsupported claims for understandable reasons. The claim being wrong doesn't make the believer foolish or malicious. Critical thinking is about evaluating claims, not judging people. Effective engagement usually requires understanding why the claim is appealing alongside the evidence.`,
            },
            {
              id: `q10`,
              type: `inference`,
              question: `Your friend confidently says "Specific diets have been PROVEN to extend lifespan by 20+ years; you're foolish if you don't follow them." Based on this lesson, what should you notice?`,
              options: [
                `"You're right, I should start"`,
                `"The confidence level doesn't match the evidence. Specific dietary interventions for lifespan extension in humans are in the 'plausible but uncertain' bucket. Some evidence exists (caloric restriction in animal models, observed health benefits of specific dietary patterns). But specific lifespan extension claims in the 20+ year range are speculative; the human lifespan data is mixed and the long-term studies needed are still being conducted. A confident claim of '20+ years' overstates current evidence. I'm interested in the underlying patterns (some diets seem healthier than others) but I'd want better evidence before committing to specific extreme claims about life extension."`,
                `"Diet doesn't matter"`,
                `"Science is fake"`,
              ],
              correctIndex: 1,
              explanation: `Real applied critical thinking. Don't reject the underlying interest (diet and health is a real area). Don't accept the overconfident specific claim. Identify exactly which bucket the claim belongs in and adjust confidence accordingly. This is how the framework protects you from both over-acceptance and over-rejection.`,
            },
          ],
        },

        {
          id: `l04-reflection`,
          type: `reflection`,
          headline: `Sit with this`,
          intro: `Pick the prompt that pulls at you most. Your answer is saved.`,
          prompts: [
            { id: `reflect-cognitive`, category: `Cognitive`, prompt: `Before this lesson, did you have a working framework for distinguishing well-supported from unsupported claims? Has it sharpened?` },
            { id: `reflect-meta`, category: `Metacognitive`, prompt: `Which claim from the investigation did you place in the "wrong" bucket? Why? What does that reveal about how you currently evaluate claims?` },
            { id: `reflect-identity`, category: `Identity`, prompt: `If you become someone who automatically applies the three-bucket framework, what does that protect you from over a lifetime of media consumption?` },
            { id: `reflect-application`, category: `Application`, prompt: `Pick three claims you encountered in the last 48 hours (news, social media, conversations). Sort them into the three buckets. What does the exercise reveal?` },
            { id: `reflect-critical`, category: `Critical`, prompt: `Are there claim types the three-bucket framework doesn't handle well? Aesthetic claims ("this song is good")? Moral claims ("killing is wrong")? How would you adapt the framework?` },
            { id: `reflect-personal`, category: `Personal investigation`, prompt: `Ask one adult: have they ever changed their mind about a strongly-held belief due to evidence? What evidence shifted them? Most adults remember at least one such moment.` },
          ],
        },

        {
          id: `l04-real-world`,
          type: `real-world`,
          headline: `Take it into your life`,
          guideContext: `Critical thinking is one of the highest-leverage skills available. Two paths.`,
          familyActivity: {
            title: `The Family Claim-Sorting Conversation`,
            duration: `40 minutes`,
            description: `At dinner, share the three-bucket framework. Then ask family members to bring claims they've encountered recently (news, social media, ads, conversations). Sort them together as a family. The conversation usually reveals that family members have very different intuitions about which claims belong where. The framework gives everyone shared vocabulary for engaging with evidence going forward. This is one of the highest-leverage family conversations possible because it shapes how everyone evaluates information for years.`,
          },
          projectOption: {
            title: `Build A Personal Claims Tracker, 4 weeks (optional)`,
            duration: `4 weeks, ~20 minutes per session`,
            description: `Keep a daily log of claims you encounter that struck you (news, ads, social media, conversations). For each, briefly note: what's the specific claim, what evidence is offered, which bucket does it belong in, what would change your mind. After 4 weeks, write 2,000 words synthesizing patterns. What kinds of claims tend to be well-supported? What patterns of pseudoscience recur? What domains have the most "plausible but uncertain" claims? Real applied critical thinking practice.`,
            offerToParent: `Parent: opt your kid into this project from the dashboard. Sustained claim-tracking develops the meta-skill faster than any single lesson.`,
          },
          identityQuestion: `If you become someone who automatically applies the three-bucket framework to every claim you encounter, what does that mean for your accuracy and your protection from manipulation over a lifetime?`,
        },

        {
          id: `l04-identity-hook`,
          type: `identity-hook`,
          headline: `Who is this lesson making you?`,
          prompt: `One sentence. No wrong answer.`,
          placeholder: `Someone who...`,
          examples: [
            `Someone who can sort any claim into well-supported, plausible-uncertain, or unsupported.`,
            `A person who notices motivated reasoning in my own thinking.`,
            `Someone willing to hold genuine uncertainty without forcing premature certainty.`,
          ],
          saveKey: `identity_responses_fs_11_12_04`,
        },

        {
          id: `l04-celebration`,
          type: `celebration`,
          guideText: `{name}. Fourth Future Skills lesson done. You now have the three-bucket framework for evaluating any claim: well-supported, plausible but uncertain, and unsupported. You know what features mark each bucket (replication, mechanism, consilience for well-supported; reasonable mechanism plus limited evidence for plausible-uncertain; failed tests plus implausible mechanism for unsupported). You can identify motivated reasoning in your own thinking. You can apply this framework to any claim you'll encounter for the rest of your life. Most adults never develop this framework explicitly. You have it at 12. Next time we go into another huge meta-skill: communication. Three cases of real communication challenges with very different correct answers. Case Study format. Let's go. — Byte`,
          badge: `claim-sorter`,
          badgeName: `Claim Sorter`,
          xpEarned: 75,
          competencies: [
            `Articulates the three-bucket framework (well-supported, plausible-uncertain, unsupported)`,
            `Knows features that mark each bucket (replication, mechanism, consilience, etc.)`,
            `Recognizes motivated reasoning, confirmation bias, authority bias as predictable distortions`,
            `Understands epistemic humility as confident commitment + openness to revision`,
            `Can apply the framework to claims across many domains`,
          ],
          nextLessonPreview: {
            title: `Lesson 5: Communication Skills`,
            hook: `Three real communication challenges. Three different correct answers. The skill that mediates every other skill.`,
          },
        },
      ],
    },
  ],
};

export default FUTURESKILLS_VOYAGER_L04;

if (import.meta.env?.DEV) {
  const l = FUTURESKILLS_VOYAGER_L04.lessons[0];
  const mags = l.screens.filter((s) => s.type === `magazine`).length;
  const investigation = l.screens.find((s) => s.type === `investigation`);
  const quiz = l.screens.find((s) => s.type === `quiz`)?.questions?.length ?? 0;
  const reflect = l.screens.find((s) => s.type === `reflection`)?.prompts?.length ?? 0;
  console.log(
    `[LESSON-FS-VOYAGER-L04 ${VERSION}] "${l.title}" — ${mags} magazine, investigation game w/ ${investigation?.items?.length ?? 0} items in ${investigation?.buckets?.length ?? 0} buckets, ${quiz} quiz, ${reflect} reflection`
  );
}
