// ─────────────────────────────────────────────────────────────────────────────
// COSMOS VOYAGER  |  L19 — What We Don't Know
// Age band : voyagers (11-12)   Guide: nova (Owl)
// Standards: Coreverse Original — Philosophy of Science, Epistemic Humility
// CALIBRATED: Voyager spec v1.1 (May 2026)
// Interaction format: ARGUMENT BUILDER (humility / optimism / mystery as cosmic stances)
// ─────────────────────────────────────────────────────────────────────────────

const VERSION = "voyager-cosmos-l19-v1";

const COSMOS_VOYAGER_L19 = {
  ageBand: `voyagers`,
  subjectId: `cosmos`,
  guide: `nova`,

  lessons: [
    {
      id: `cs-11-12-19`,
      title: `What We Don't Know`,
      duration: 35,
      xpReward: 75,
      badge: `humility-keeper`,
      badgeName: `Humility Keeper`,

      screens: [
        {
          id: `l19-welcome`,
          type: `welcome`,
          guideText: `{name}, we've spent eighteen lessons looking at what we know about the cosmos. Today we look directly at what we don't know. The list is long. We don't know what dark matter is. We don't know what dark energy is. We don't know what happens at the singularity inside a black hole. We don't know what the universe was like before inflation, or whether "before" is even meaningful. We don't know whether there are other universes. We don't know whether time has a fundamental existence. We don't know what consciousness is, fundamentally. We don't know if we're alone. How should we feel about all this ignorance? Three serious positions compete. Each one is defended by working scientists and philosophers. By the end, you'll build your own argument for how to hold cosmic ignorance.`,
          headline: `What We Don't Know`,
          subtitle: `The cosmic ignorance question. Three serious positions on how to hold it.`,
          visual: `/voyager-assets/cosmos/l19-welcome.webp`,
        },

        {
          id: `l19-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `The Actual List Of What We Don't Know`,
          paragraphs: [
            `Let's be specific. Across the eighteen lessons in this band, we've encountered a substantial list of major open questions in cosmology and physics. What is dark matter actually made of? (Lesson 7.) What is dark energy actually doing? Why is the cosmological constant 120 orders of magnitude smaller than quantum field theory predicts? What happens at the singularity inside a black hole? (Lesson 6.) Was there anything "before" the Big Bang, and is the question even meaningful? (Lesson 4.) Does inflation actually happen, and what physics drives it? (Lesson 4.)`,
            `More questions. What is consciousness, fundamentally? (Lesson 10.) Is the universe a unique thing, or one of many in a multiverse? (Lesson 8.) Is time fundamental, or emergent? (Lesson 11.) What interpretation of quantum mechanics best describes what's actually happening? (Lesson 17.) Why are the constants of physics fine-tuned for chemistry and life? (Lesson 12.) Are we alone, and if so, why? (Lesson 9.) What is the universe's ultimate fate? (Lesson 14.)`,
            `Even more questions that didn't fit cleanly in earlier lessons. Why does the universe have three spatial dimensions rather than some other number? Why does the universe have the specific particle types it does? Why does time have a single direction (the "arrow of time" problem)? How does quantum mechanics combine with general relativity (the quantum gravity problem)? What is information physically, and how does it relate to entropy and energy? Why is there something rather than nothing?`,
            `That's not an exhaustive list. Working cosmologists could extend it for hundreds of pages. What's striking isn't that we don't know these things; it's how many of them are at the foundations of physics. The unknown isn't peripheral or technical detail. It's central to what we're trying to understand.`,
          ],
          image: `/voyager-assets/cosmos/l19-s1-list.webp`,
          imageCaption: `The list of major unknowns is long and central, not peripheral. This is real cosmic ignorance.`,
          vocab: [
            {
              word: `epistemic state`,
              definition: `Your overall relationship to knowledge: what you know, what you don't know, what you know that you don't know, what you might be unaware you don't know. Engaging consciously with your epistemic state is one of the foundations of mature thinking. The opposite is moving through life without noticing what you do and don't actually know.`,
              audioPrompt: `Your epistemic state is your overall relationship to knowledge, {name}. What you know, what you don't know, what you know that you don't know, what you might be unaware that you don't know. Engaging consciously with your epistemic state is one of the foundations of mature thinking. The opposite is moving through life without noticing what you do and don't actually know. Most people operate with a fuzzy sense of their own knowledge: feeling confident about some things, vaguely uncertain about others, completely unaware of yet others. Developing a clear epistemic state involves regular self-examination: what's the evidence for this? How confident should I be? What would change my mind? How much do I not know in this area? These habits build slowly but compound enormously over a lifetime.`,
            },
            {
              word: `cosmological constant problem`,
              definition: `The major unsolved problem that quantum field theory predicts a value for the cosmological constant approximately 120 orders of magnitude larger than what is actually observed. Considered one of the worst prediction mismatches in all of physics. Relevant to understanding dark energy and the fate of the universe.`,
              audioPrompt: `The cosmological constant problem is one of the most striking unsolved problems in physics, {name}. Quantum field theory predicts a value for the cosmological constant that is approximately 120 orders of magnitude larger than what is actually observed in the universe. That is not a small discrepancy; 120 orders of magnitude is an almost incomprehensibly large mismatch. The cosmological constant is related to dark energy, the force accelerating the expansion of the universe. Why the observed value is so much smaller than theory predicts is completely unknown. It is one of the central open questions sitting at the boundary of quantum mechanics and cosmology, and no currently accepted framework resolves it. Understanding what the cosmological constant actually is remains one of the deepest unsolved problems in theoretical physics.`,
            },
            {
              word: `quantum gravity`,
              definition: `The unsolved problem of combining quantum mechanics with general relativity into a single coherent framework. Quantum mechanics governs the very small; general relativity governs the very large. The two theories are mathematically incompatible in certain regimes, including black hole singularities. Has resisted serious effort for nearly a century.`,
              audioPrompt: `Quantum gravity is the unsolved problem of combining quantum mechanics with general relativity into a single coherent framework, {name}. Quantum mechanics governs the behavior of very small things: particles, atoms, molecules. General relativity governs the behavior of very large things: planets, stars, black holes, the large-scale structure of the universe. In the regimes where both matter — such as at black hole singularities or at the moment of the Big Bang — the two theories give mathematically incompatible answers. No accepted theory of quantum gravity exists. String theory and loop quantum gravity are two serious research programs, but neither has produced confirmed experimental predictions. Quantum gravity has resisted nearly a century of brilliant effort from some of the world's leading physicists. It remains a genuinely open question at the foundations of physics.`,
            }
          ],
        },

        {
          id: `l19-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Position 1: Epistemic Humility (We Should Hold Ignorance Quietly)`,
          paragraphs: [
            `One major position argues that cosmic ignorance should produce humility. The universe is vast, ancient, and largely beyond our cognitive grasp. The fact that we know as much as we do (the age of the universe, the basic life cycles of stars, the structure of atoms) is remarkable, but it's a small island in a vast sea of what we don't know. The appropriate response is to hold our current knowledge tentatively and acknowledge how much remains unresolved.`,
            `This position has defenders across multiple traditions. Carl Sagan, despite confidence in naturalism, was famously humble about cosmic questions; he often emphasized how much remains beyond our understanding. The philosopher John Rawls, in different contexts, called for "epistemic humility" as a virtue in approaching contested questions. Many religious traditions emphasize humility before mystery. The Stoic philosophers (Marcus Aurelius, Seneca, Epictetus) developed sophisticated frameworks around accepting what we cannot know.`,
            `What does epistemic humility look like in practice? Holding strong opinions weakly. Acknowledging multiple positions on contested questions even when one seems more plausible. Distinguishing between what evidence strongly supports and what remains genuinely open. Updating beliefs when new evidence comes in. Avoiding overconfident claims about questions beyond current evidence. Recognizing that you are operating with limited cognitive tools.`,
            `The case for this position has empirical support. The history of science shows repeated cases of confident frameworks being overturned. Pre-Hubble: static universe seemed obvious. Pre-Penzias-Wilson: steady state was defensible. Pre-1998: nobody suspected dark energy. Pre-Aspect-Bell tests: classical hidden variables were still on the table. Each generation of physicists had confident frameworks that the next generation showed were incomplete. The lesson: be humble about your current frameworks; future generations may find them similarly incomplete.`,
            `Critics of pure humility argue it can become a form of intellectual paralysis. If we never commit to positions because we might be wrong, we can't make progress. Some humility is appropriate; total humility risks not engaging at all. The balance between humility and commitment is itself a real question. Most defenders of epistemic humility argue for commitment with humility, not against commitment.`,
          ],
          image: `/voyager-assets/cosmos/l19-s2-humility.webp`,
          imageCaption: `Epistemic humility: hold strong opinions weakly. History of science supports the wisdom of this.`,
          vocab: [
            {
              word: `Stoic philosophy`,
              definition: `Ancient Greek and Roman philosophical tradition (Marcus Aurelius, Seneca, Epictetus) emphasizing acceptance of what we cannot control, including what we cannot know. Has experienced revival in contemporary practice and academic philosophy. Provides specific frameworks for living well in the face of uncertainty.`,
              audioPrompt: `Stoic philosophy is the ancient Greek and Roman philosophical tradition that emphasized acceptance of what we cannot control, {name}. Major figures include Marcus Aurelius, the Roman emperor who wrote the Meditations, Seneca, a Roman senator and philosopher, and Epictetus, a former slave who became a major philosophical teacher. The tradition has experienced significant revival in contemporary culture, including in business literature and self-help, as well as in academic philosophy. Stoicism's relevance to cosmic ignorance: it provides specific frameworks for living well in the face of uncertainty. The Stoics argued that what we should care about is what's within our power, and what's not within our power should be accepted with equanimity. Cosmic questions are largely beyond our power to resolve, so the Stoic move is to acknowledge them without being destabilized by them.`,
            },
            {
              word: `epistemic humility`,
              definition: `The intellectual virtue of holding beliefs tentatively, acknowledging the limits of current knowledge, and remaining open to revision when evidence accumulates. Has empirical support from the history of science, which repeatedly shows confident frameworks being overturned. Defenders include Carl Sagan, John Rawls, and the Stoic philosophical tradition.`,
              audioPrompt: `Epistemic humility is the intellectual virtue of holding beliefs tentatively, acknowledging the limits of current knowledge, and remaining open to revision when evidence accumulates, {name}. It has genuine empirical support from the history of science. Before Hubble, a static universe seemed obvious. Before Penzias and Wilson detected the cosmic microwave background, the steady-state model was defensible. Before 1998, no one suspected dark energy. Before the Aspect experiments confirmed violations of Bell inequalities, classical hidden variables were still on the table. Each generation of physicists had confident frameworks that the next generation showed were incomplete. The lesson: be humble about your current frameworks. Carl Sagan, despite confidence in scientific naturalism, was famously humble about cosmic questions. The philosopher John Rawls called for epistemic humility as a virtue in approaching contested questions.`,
            },
            {
              word: `holding strong opinions weakly`,
              definition: `A practical description of epistemic humility: committing to positions that seem most supported by evidence while remaining genuinely open to updating when new evidence comes in. Distinguished from having no opinions. The goal is calibrated confidence, not paralysis. Defenders of epistemic humility argue for commitment with humility, not against commitment.`,
              audioPrompt: `Holding strong opinions weakly is a practical description of what epistemic humility looks like in action, {name}. It means committing to positions that seem most supported by available evidence while remaining genuinely open to updating those positions when new evidence comes in. It is not the same as having no opinions. You can hold a position firmly enough to act on it while still acknowledging that your current frameworks might be incomplete. In practice, this looks like distinguishing between what evidence strongly supports and what remains genuinely open, acknowledging multiple positions on contested questions even when one seems more plausible, and avoiding overconfident claims about questions that are beyond current evidence. Critics of pure humility argue it can become intellectual paralysis. Defenders argue that the right target is commitment with humility, not the absence of commitment.`,
            }
          ],
        },

        {
          id: `l19-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Position 2: Optimism (We Will Eventually Know)`,
          paragraphs: [
            `A second position argues that current cosmic ignorance is mostly a temporary state. Future generations will resolve the major open questions through better physics, better observations, better theory. We should hold ignorance not as something to accept but as an active research frontier.`,
            `This position has serious defenders, particularly among working physicists. David Deutsch (Oxford, quantum computing pioneer) has argued in books like "The Beginning of Infinity" (2011) that humans are capable of explaining anything that can be explained, and that the current limits of knowledge are mostly contingent rather than fundamental. The history of science supports a version of this: questions that seemed unanswerable in 1900 (the age of the universe, the composition of stars, the mechanism of inheritance) have been answered.`,
            `Different physicists hold different versions. Some are optimistic about specific problems: many quantum cosmologists believe quantum gravity will be solved this century, even though it has resisted serious work for nearly a century. Others are optimistic about general progress without specific predictions. The shared feature: confidence that the open questions will mostly yield to continued work.`,
            `The case for this position has historical support. Many problems that once seemed beyond science have yielded. The age of the universe was unknown in 1900; now we know it to within a few percent. The composition of stars was unknown until Cecilia Payne in 1925; now we know it in detail. The mechanism of inheritance was mysterious until DNA was identified in the 1950s. Optimism about future progress is based on a real track record.`,
            `Critics argue this position overgeneralizes from specific successes. Just because some hard problems have yielded doesn't mean all will. Some problems may be fundamentally limited by our cognitive architecture, by the inaccessibility of relevant evidence, or by the structure of the universe itself. Quantum gravity has resisted nearly a century of brilliant effort. The hard problem of consciousness has resisted 30+ years of dedicated research. Some questions may be permanently beyond science, or beyond humans specifically. Optimism shouldn't extrapolate without limit from past wins.`,
          ],
          image: `/voyager-assets/cosmos/l19-s3-optimism.webp`,
          imageCaption: `Optimism: cosmic ignorance is mostly temporary. Future work will resolve current open questions.`,
          vocab: [
            {
              word: `cognitive limits`,
              definition: `Boundaries on what human minds can understand, given the cognitive tools evolution provided us. Whether cognitive limits exist for ultimate cosmic questions is contested. Some philosophers (Colin McGinn, Noam Chomsky) argue some questions may be permanently beyond human understanding.`,
              audioPrompt: `Cognitive limits are boundaries on what human minds can understand, given the cognitive tools evolution provided us, {name}. Our brains evolved to navigate African savannas, find food, avoid predators, and form social bonds. The fact that we can do mathematics and physics at all is remarkable, given those origins. Whether cognitive limits exist for ultimate cosmic questions is contested. Some philosophers, including Colin McGinn at the University of Miami and the linguist Noam Chomsky at MIT, have argued some questions may be permanently beyond human understanding, not because we haven't tried hard enough but because the questions exceed the cognitive architecture we have. Other philosophers, like David Deutsch, argue that humans are capable of understanding anything that can be understood. The disagreement is genuine and hasn't been resolved.`,
            },
            {
              word: `David Deutsch`,
              definition: `British physicist at Oxford and pioneer of quantum computing who argues in "The Beginning of Infinity" (2011) that humans are capable of explaining anything that can be explained and that current cognitive limits are mostly contingent rather than fundamental. A major defender of the optimistic position on cosmic ignorance.`,
              audioPrompt: `David Deutsch is a British physicist at Oxford and a key figure in quantum computing who has argued for a strongly optimistic position on the limits of human knowledge, {name}. In his 2011 book "The Beginning of Infinity," Deutsch argues that humans are capable of explaining anything that can be explained, and that the current limits of our knowledge are mostly contingent rather than fundamental. The reasoning: the history of science shows many questions that seemed permanently beyond understanding have yielded to continued work. The age of the universe was unknown in 1900 and is now known to within a few percent. The composition of stars was unknown until Cecilia Payne's work in 1925. Deutsch argues this track record supports confidence that current open questions will similarly yield. Critics argue this overgeneralizes from past wins and does not account for potentially fundamental limits.`,
            },
            {
              word: `Cecilia Payne`,
              definition: `Astronomer who in 1925 determined that stars are composed primarily of hydrogen and helium — a result initially rejected but later recognized as one of the most important discoveries in 20th century astronomy. Used in the optimism argument as an example of a question that once seemed mysterious yielding to continued scientific work.`,
              audioPrompt: `Cecilia Payne was an astronomer who in 1925 determined that stars are composed primarily of hydrogen and helium, {name}. Her finding was initially rejected by prominent astronomers who believed the Sun and stars must have compositions similar to the Earth. She was right and they were wrong. Her discovery is now recognized as one of the most important results in 20th century astronomy. In the context of the optimist position on cosmic ignorance, Payne's work is an example of a question that once seemed genuinely mysterious — what are stars actually made of? — yielding to continued scientific work. The composition of stars is now known in great detail. Defenders of optimism point to cases like Payne's as evidence that even questions that seem intractable can be resolved when the right tools and methods are brought to bear.`,
            }
          ],
        },

        {
          id: `l19-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Position 3: Mystery (Some Things Are Beyond Knowing)`,
          paragraphs: [
            `A third position argues that some cosmic questions are genuinely beyond what we can or should ever expect to know. This isn't pessimism about science. It's a recognition that the universe might contain aspects that are inherently inaccessible to creatures evolved on a small planet to navigate medium-sized objects. Mystery is built into the structure of reality, not a temporary state we'll eventually move past.`,
            `Defenders of this position include philosophers like Colin McGinn (who developed "mysterianism" specifically about consciousness) and writers across multiple traditions. Religious thinkers from various traditions argue that some things are knowable only through traditions of practice, not through analytic investigation. Mystics across cultures have argued that direct experience of mystery is itself a form of knowing different from but not inferior to empirical knowing.`,
            `Some specific candidates for genuine mystery. The hard problem of consciousness (Lesson 10): how can felt experience emerge from physical processes? The question of why there's something rather than nothing: any answer seems to require a "something" to do the explaining. The meaning of the universe's origin: any "explanation" of the Big Bang seems to require explaining what the explanation rests on. The nature of fundamental physical laws: why these laws and not others?`,
            `The case for this position. Some questions seem to be the kind that can never have a definitive answer. The infinite regress problem: any explanation requires further explanation, and we never reach the bottom. The reference frame problem: we can't get outside ourselves to evaluate our own reasoning. The category problem: some questions may be category mistakes (asking what's north of the North Pole) rather than questions with answers we just haven't found.`,
            `Critics argue this position is sometimes a cop-out. Calling something "permanent mystery" can be a way of avoiding intellectual work. Some apparent mysteries are just unsolved problems we've grown comfortable with. The category of "permanent mystery" is itself contested; it's not clear which questions actually belong in it. Defenders respond that distinguishing genuine mystery from temporary ignorance is part of the work, not a reason to dismiss the category. Both views are taken seriously.`,
            `One important distinction. The "mystery" position is different from the popular spiritual framing of "the universe is mysterious and we should just feel it." The serious version is about specific epistemological arguments for the limits of human understanding, not vague claims about cosmic vibes. Defenders of mystery do rigorous philosophy; they don't sell courses on accepting mystery.`,
          ],
          image: `/voyager-assets/cosmos/l19-s4-mystery.webp`,
          imageCaption: `Some questions may be permanently beyond us. Not pessimism; rigorous epistemology of cognitive limits.`,
          vocab: [
            {
              word: `mysterianism`,
              definition: `Philosophical position, particularly associated with Colin McGinn, that the hard problem of consciousness (and possibly other deep questions) may be permanently beyond human cognitive grasp. Distinct from popular "everything is mystery" framings; based on specific arguments about cognitive architecture.`,
              audioPrompt: `Mysterianism is a philosophical position particularly associated with Colin McGinn at the University of Miami, {name}. The argument: the hard problem of consciousness, and possibly other deep philosophical questions, may be permanently beyond human cognitive grasp. Not because we haven't tried hard enough, but because the questions exceed the cognitive architecture we evolved with. McGinn distinguishes his position from popular "everything is mystery" framings. His version is based on specific arguments about the relationship between consciousness and our cognitive tools for thinking about it. Other philosophers disagree, arguing that nothing has been proven to be permanently beyond human understanding. The disagreement is real and ongoing in current philosophy of mind. Knowing that mysterianism exists as a serious philosophical position is useful, whether you ultimately accept it or not.`,
            },
            {
              word: `hard problem of consciousness`,
              definition: `The question of how felt subjective experience — what it is like to see red, to feel pain, to taste something — can arise from physical processes. Distinct from the easier "how does the brain process information" question. Has resisted 30+ years of dedicated research. A candidate for permanent mystery in Colin McGinn's mysterianism.`,
              audioPrompt: `The hard problem of consciousness is the question of how felt subjective experience can arise from physical processes, {name}. It is distinct from easier questions about how the brain processes information or produces behavior. The hard problem asks: why is there something it is like to see red, to feel pain, to taste coffee? How can physical processes in the brain give rise to inner experience? This question has resisted more than thirty years of dedicated research in neuroscience and philosophy of mind. It is one of the specific candidates Colin McGinn identifies as potentially beyond human cognitive grasp in his mysterianism argument. Whether the hard problem of consciousness is genuinely unsolvable by humans, or whether we simply haven't found the right approach yet, is itself one of the most contested questions in contemporary philosophy of mind.`,
            },
            {
              word: `infinite regress`,
              definition: `A problem in which any explanation requires a further explanation, and so on without end, never reaching a stopping point. Relevant to cosmic meaning questions: any explanation of why the universe exists seems to require explaining what that explanation rests on. A structural reason why some ultimate questions may resist definitive answers.`,
              audioPrompt: `The infinite regress is a structural problem in which any explanation requires a further explanation, and so on without end, never reaching a stopping point, {name}. It is particularly relevant to ultimate cosmic questions. Ask why the universe exists, and any answer seems to require explaining what that answer rests on. Ask why the laws of physics are what they are, and any answer seems to require explaining what grounds those laws. The regress never reaches a bottom. This is one reason why some questions — like "why is there something rather than nothing?" — may belong in the category of genuine mystery rather than solvable problem. Any answer to the question seems to require something to do the explaining, which brings back the same question at a higher level. Defenders of the mystery position argue this structural feature means some questions are not merely unsolved but may be unanswerable in principle.`,
            }
          ],
        },

        {
          id: `l19-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Before You Build Your Argument`,
          paragraphs: [
            `As you build your argument, notice that the three positions aren't entirely opposed. They overlap in important ways. Most defenders of epistemic humility expect at least some questions to yield to future work. Most optimists acknowledge that some current questions may be very hard. Most mystery defenders accept that we've made real progress on many questions. The differences are about the balance: how much of what we don't know is solvable vs permanent vs requires humility we don't yet have?`,
            `One framing. Position 1 (humility) is about how to hold what we don't know. Position 2 (optimism) is about what we will eventually know. Position 3 (mystery) is about what we may never know. These are different but related questions. Different working scientists hold different combinations: optimist about specific physics problems but humble about timing; humble about everything while still doing optimistic research work; defending mystery for the hard problem while expecting progress elsewhere.`,
            `What's at stake personally. Your position on cosmic ignorance shapes how you engage with hard questions for the rest of your life. Pure humility makes you cautious about strong claims. Pure optimism makes you confident that intelligent effort eventually yields. Pure mystery makes you accept some limits as permanent. Real living usually involves a combination, varying by topic. The position you build today is a starting point, not a final commitment.`,
            `One last note. None of these three positions endorses giving up. Even mysterianism is about distinguishing what's solvable from what isn't, then doing more work on what's solvable. Humility doesn't mean refusing to engage. Optimism doesn't mean blind faith. All three traditions involve continuing to do the work; they just differ on how to think about the work's possible end.`,
          ],
          image: `/voyager-assets/cosmos/l19-s5-before.webp`,
          imageCaption: `Three serious positions on holding cosmic ignorance. None says "give up." All require continued engagement.`,
          vocab: [
            {
              word: `the unknown unknown`,
              definition: `Things we don't know that we don't know. Distinct from "known unknowns" (things we know we don't know). Most important category for serious thinkers because we cannot directly investigate something we don't recognize as a question. Term popularized by Donald Rumsfeld but the underlying concept is much older.`,
              audioPrompt: `The unknown unknown refers to things we don't know that we don't know, {name}. The term was popularized by Donald Rumsfeld in a 2002 press conference, but the underlying concept is much older in philosophy. The category is distinguished from "known unknowns," which are things we know we don't know, like the value of dark energy's equation-of-state parameter. Known unknowns can be investigated directly. Unknown unknowns cannot, because we don't yet recognize them as questions. The unknown unknown is the most important category for serious thinkers because it represents the depth of our actual ignorance. The history of science is filled with cases where what seemed obvious turned out to be missing entire frameworks we hadn't recognized as needed. Mature thinking holds that the unknown unknown probably exists and remains open to recognizing it when it appears.`,
            },
            {
              word: `known unknowns`,
              definition: `Things we know that we do not know — recognized open questions that can be directly investigated. Distinguished from unknown unknowns. Examples include the composition of dark matter and the value of the cosmological constant's equation of state. Known unknowns represent active research frontiers in physics and cosmology.`,
              audioPrompt: `Known unknowns are things we know that we do not know, {name}. These are recognized open questions that can be directly investigated because we are aware they are questions. The composition of dark matter is a known unknown: we know it exists from its gravitational effects, we know we do not know what it is made of, and we are actively searching. The quantum gravity problem is a known unknown: we know the two frameworks are incompatible in certain regimes and we are working on resolving that. Known unknowns are distinguished from unknown unknowns, which are things we do not know that we do not know. Known unknowns can be approached directly; unknown unknowns cannot, because we do not yet recognize them as questions. The history of science is partly a story of unknown unknowns being recognized and converted into known unknowns that can then be investigated.`,
            },
            {
              word: `arrow of time`,
              definition: `The observed fact that time has a single direction — the past is fixed and the future is open — even though the fundamental laws of physics are symmetric with respect to time reversal. Why time appears to flow in only one direction is an unsolved problem. One of the major open questions in the foundations of physics.`,
              audioPrompt: `The arrow of time is the observed fact that time has a single direction, {name}. The past is fixed; the future is open. We remember yesterday and anticipate tomorrow, not the other way around. Physical processes like the breaking of a glass happen in one direction and not the other. But this is puzzling because the fundamental laws of physics are symmetric with respect to time reversal. The equations of quantum mechanics and general relativity do not prefer one direction of time over the other. Why time appears to flow in only one direction, when the underlying laws do not require it, is one of the major unsolved problems in the foundations of physics. It did not fit cleanly into earlier lessons in this band, but it belongs on the list of deep open questions at the foundations of what we are trying to understand.`,
            }
          ],
        },

        // ───── ARGUMENT BUILDER ───────────────────────────────────────────────
        {
          id: `l19-argument-builder`,
          type: `argument-builder`,
          headline: `How Should We Hold Cosmic Ignorance?`,
          intro: `Pick one of three positions. Build your case with 3-4 pieces of evidence. Then respond to the strongest counterargument. Real working scientists and philosophers defend each of these. Your position shapes how you engage with hard questions for the rest of your life.`,
          positions: [
            {
              id: `humility`,
              label: `Epistemic humility: hold current knowledge tentatively`,
              summary: `Cosmic ignorance should produce intellectual humility. The universe is vast and largely beyond our cognitive grasp. The history of science shows confident frameworks being repeatedly overturned. The appropriate stance is to hold strong opinions weakly, acknowledge multiple positions on contested questions, distinguish strongly supported claims from genuinely open ones, and update beliefs when evidence comes in. Defenders span scientific naturalism (Sagan), religious traditions, Stoic philosophy. Practical: be careful with confident claims about contested questions.`,
            },
            {
              id: `optimism`,
              label: `Optimism: current ignorance is mostly temporary`,
              summary: `Cosmic ignorance is mostly a temporary state that will yield to continued work. David Deutsch and others argue humans are capable of explaining anything that can be explained; current limits are mostly contingent, not fundamental. Historical track record supports this: many questions that seemed unanswerable in 1900 are well-understood now. Optimism doesn't mean blind faith; it means committing to research expecting eventual progress. Critics argue this overgeneralizes from past wins; some problems may be fundamentally beyond us.`,
            },
            {
              id: `mystery`,
              label: `Mystery: some questions are permanently beyond us`,
              summary: `Some cosmic questions are genuinely beyond what humans can or should expect to know. Not because we haven't tried hard enough, but because some questions exceed the cognitive architecture evolution gave us. Mysterianism (Colin McGinn) defends this position about consciousness specifically. Some questions may be category mistakes. The "why is there something rather than nothing" question may have no answerable form. Distinguish serious mystery from popular spiritual "feel the mystery" content; the serious version is rigorous epistemology.`,
            },
          ],
          evidence: [
            {
              id: `e1`,
              text: `History of science shows repeated cases of confident frameworks being overturned. Pre-Hubble static universe; pre-Penzias-Wilson steady state; pre-1998 no dark energy. Each generation had confident frameworks the next generation found incomplete. Supports epistemic humility.`,
              source: `Multiple history of science sources; Kuhn's "Structure of Scientific Revolutions" 1962`,
            },
            {
              id: `e2`,
              text: `Many questions that seemed permanently mysterious have yielded to continued work. Age of universe (unknown in 1900, known to ~1% precision now), composition of stars (unknown until Payne 1925), mechanism of inheritance (mysterious until DNA in 1950s). Supports optimism.`,
              source: `Standard history of science; specific cases well-documented`,
            },
            {
              id: `e3`,
              text: `Some major problems have resisted intense work for decades or longer. Quantum gravity (~100 years), hard problem of consciousness (~30+ years), cosmological constant problem (~50+ years). Suggests not all problems yield to time and effort.`,
              source: `Multiple physics and philosophy of mind literatures`,
            },
            {
              id: `e4`,
              text: `David Deutsch's "The Beginning of Infinity" (2011) argues humans can explain anything that can be explained; current cognitive limits are mostly contingent. Optimist defenders include many working physicists.`,
              source: `Deutsch 2011; subsequent work`,
            },
            {
              id: `e5`,
              text: `Colin McGinn's "mysterianism" argues hard problem of consciousness may exceed human cognitive architecture. Not "we haven't tried hard enough" but "we may not be capable." Defended in McGinn's "The Problem of Consciousness" (1991) and subsequent work.`,
              source: `McGinn 1991; subsequent literature`,
            },
            {
              id: `e6`,
              text: `Carl Sagan, despite being a confident scientific naturalist, was famously humble about cosmic questions. His public communication emphasized how much remains beyond our understanding while still defending science as the best tool we have. Models epistemic humility within naturalism.`,
              source: `Sagan's "Cosmos" series 1980; "Demon-Haunted World" 1995`,
            },
            {
              id: `e7`,
              text: `"Unknown unknowns" (things we don't know that we don't know) are probably the largest category of our ignorance. The history of science is filled with breakthroughs that revealed entire frameworks we hadn't recognized as needed.`,
              source: `Standard epistemology; Rumsfeld 2002 made the term popular`,
            },
            {
              id: `e8`,
              text: `Stoic philosophy (Marcus Aurelius, Seneca, Epictetus) provides practical frameworks for living well in the face of cosmic uncertainty. Acceptance of what we can't know combined with engagement with what we can. Has experienced significant contemporary revival.`,
              source: `Marcus Aurelius "Meditations"; Stoic revival literature`,
            },
          ],
          counterargument: {
            id: `counter`,
            text: `"You picked your position. Here's the strongest objection. All three positions assume that 'how to hold ignorance' is itself a meaningful question with serious answers. But maybe the real question is simpler: just keep doing the work and stop worrying about what category your ignorance falls into. The Stoic, the optimist, the mysterian all spend energy on a meta-question about ignorance that could be spent on actually reducing it. Why think your position on how-to-hold-ignorance is doing real intellectual work, rather than just being a form of philosophical avoidance? What does picking a meta-position actually let you do that just continuing to investigate doesn't?"`,
            promptInstruction: `In 3-4 sentences, respond. Does meta-thinking about ignorance do real work, or is it a distraction from actually reducing ignorance? Defend your position.`,
          },
          reflectionPrompt: `Looking at the positions you didn't choose, which has the strongest argument? Has your sense of what cosmic ignorance is shifted?`,
        },

        {
          id: `l19-quiz`,
          type: `quiz`,
          headline: `Check your understanding`,
          questions: [
            {
              id: `q1`,
              type: `multiple-choice`,
              question: `What is an "epistemic state"?`,
              options: [
                `Where you live`,
                `Your overall relationship to knowledge: what you know, what you don't know, what you know that you don't know, what you might be unaware you don't know; engaging consciously with it is a foundation of mature thinking`,
                `An emotional state`,
                `A type of dream`,
              ],
              correctIndex: 1,
              explanation: `Most people operate with a fuzzy sense of their own knowledge. Developing a clear epistemic state is one of the most useful intellectual habits available.`,
            },
            {
              id: `q2`,
              type: `multiple-choice`,
              question: `Why does the history of science support epistemic humility?`,
              options: [
                `It doesn't`,
                `Repeated cases of confident frameworks being overturned: pre-Hubble static universe, pre-Penzias-Wilson steady state, pre-1998 no dark energy; each generation had confident frameworks the next generation found incomplete`,
                `Scientists are always wrong`,
                `Science is fake`,
              ],
              correctIndex: 1,
              explanation: `The history of science is full of cases where the confident framework was incomplete. Current frameworks may follow the same pattern. This isn't pessimism; it's a calibration tool.`,
            },
            {
              id: `q3`,
              type: `multiple-choice`,
              question: `What is Stoic philosophy's relevance to cosmic ignorance?`,
              options: [
                `It rejects all questions`,
                `Ancient Greek and Roman tradition (Marcus Aurelius, Seneca, Epictetus) provides frameworks for living well in the face of uncertainty; what's within our power can be addressed; what's not should be accepted with equanimity; cosmic questions are largely beyond our power to resolve`,
                `It promotes giving up`,
                `It's depressing`,
              ],
              correctIndex: 1,
              explanation: `Stoicism is having a major contemporary revival, including in business literature and academic philosophy. Its practical frameworks for uncertainty are particularly useful for cosmic questions.`,
            },
            {
              id: `q4`,
              type: `multiple-choice`,
              question: `What does David Deutsch argue in "The Beginning of Infinity" (2011)?`,
              options: [
                `Math is infinite`,
                `Humans are capable of explaining anything that can be explained; current cognitive limits are mostly contingent rather than fundamental; supports optimism about progress on hard questions`,
                `Reading is unimportant`,
                `Physics is finished`,
              ],
              correctIndex: 1,
              explanation: `Deutsch's view supports the optimist position. The argument has historical support but critics argue it overgeneralizes from past wins.`,
            },
            {
              id: `q5`,
              type: `multiple-choice`,
              question: `What is "mysterianism"?`,
              options: [
                `Religious mysticism`,
                `Philosophical position (Colin McGinn) that hard problem of consciousness and possibly other deep questions may be permanently beyond human cognitive grasp; based on specific arguments about cognitive architecture, not vague "everything is mystery" claims`,
                `Mystery novels`,
                `Fantasy fiction`,
              ],
              correctIndex: 1,
              explanation: `Mysterianism is rigorous epistemology, distinct from popular spiritual "embrace the mystery" content. Whether McGinn is correct is contested; the position is academically serious.`,
            },
            {
              id: `q6`,
              type: `multiple-choice`,
              question: `What is the "unknown unknown"?`,
              options: [
                `A specific theorem`,
                `Things we don't know that we don't know; distinct from "known unknowns" (things we know we don't know); the most important category because we can't directly investigate something we don't recognize as a question; the history of science is filled with breakthroughs revealing such frameworks`,
                `Things we forget`,
                `Things we never learned`,
              ],
              correctIndex: 1,
              explanation: `Mature thinking acknowledges that unknown unknowns probably exist. The category was popularized by Donald Rumsfeld in 2002 but the underlying concept is much older in philosophy.`,
            },
            {
              id: `q7`,
              type: `multiple-choice`,
              question: `Which questions are good candidates for permanent mystery vs solvable problems?`,
              options: [
                `It doesn't matter`,
                `Hard problem of consciousness, "why something rather than nothing," meaning of universe's origin, and reference-frame problems (we can't get outside ourselves to evaluate our reasoning) are candidates for permanent mystery; questions like dark matter composition are likely solvable; distinguishing them is itself part of the work`,
                `All are solvable`,
                `All are mysteries`,
              ],
              correctIndex: 1,
              explanation: `Distinguishing genuine mystery from temporary ignorance is one of the most important intellectual tasks. Mysterianism defenders argue some questions belong in the first category; optimists argue most belong in the second.`,
            },
            {
              id: `q8`,
              type: `multiple-choice`,
              question: `How do the three positions on cosmic ignorance relate to each other?`,
              options: [
                `They contradict`,
                `Not entirely opposed; most defenders of humility expect some questions to yield; most optimists acknowledge some are hard; most mystery defenders accept progress on many questions; differences are about balance between solvable, permanent, and requiring humility`,
                `Identical`,
                `One must be right`,
              ],
              correctIndex: 1,
              explanation: `Real working thinkers usually combine elements of all three: optimist about specific problems, humble about timing, defending mystery for the hard problem while expecting progress elsewhere.`,
            },
            {
              id: `q9`,
              type: `true-false`,
              question: `True or false: All three positions on cosmic ignorance involve giving up on hard questions.`,
              correctAnswer: false,
              explanation: `False. Even mysterianism is about distinguishing what's solvable from what isn't, then doing more work on what's solvable. Humility doesn't mean refusing to engage; optimism doesn't mean blind faith. All three traditions involve continuing to do the work.`,
            },
            {
              id: `q10`,
              type: `inference`,
              question: `Someone says "We'll never know the answers to ultimate questions like why there's something rather than nothing—why even ask?" Based on this lesson, what's the most useful response?`,
              options: [
                `"You're right"`,
                `"Three serious positions engage with that exact question. Humility says: we may not know yet, but it's worth holding the question with care while we work on what we can. Optimism says: many questions that seemed unanswerable have yielded, and even ultimate questions may eventually clarify. Mysterianism says: some questions like 'why something rather than nothing' may be permanently beyond us, and recognizing this is itself useful knowledge. All three involve continuing to engage with the question seriously. None involves dismissing it."`,
                `"Stop asking"`,
                `"Just accept it"`,
              ],
              correctIndex: 1,
              explanation: `Real applied cosmic-ignorance literacy. The "why bother" framing collapses three serious traditions into one position. Engaging with the actual options is more rewarding than the dismissive shortcut.`,
            },
          ],
        },

        {
          id: `l19-reflection`,
          type: `reflection`,
          headline: `Sit with this`,
          intro: `Pick the prompt that pulls at you most. Your answer is saved.`,
          prompts: [
            { id: `reflect-cognitive`, category: `Cognitive`, prompt: `Before this lesson, what was your default relationship to cosmic ignorance? Has it shifted?` },
            { id: `reflect-meta`, category: `Metacognitive`, prompt: `Which position pulled you most? Was it because of the intellectual content, the emotional tone, or some prior commitment about how the universe works?` },
            { id: `reflect-identity`, category: `Identity`, prompt: `If you become someone who consciously engages with what you don't know, what does that change about how you engage with what you do know?` },
            { id: `reflect-application`, category: `Application`, prompt: `Pick one area where you feel confident. Apply epistemic humility. How much do you actually know vs assume? What's an unknown unknown that could change everything?` },
            { id: `reflect-critical`, category: `Critical`, prompt: `Is "epistemic humility" sometimes used as an excuse to avoid taking positions? Where's the line between healthy humility and intellectual evasion?` },
            { id: `reflect-personal`, category: `Personal investigation`, prompt: `Ask one adult: what's the most important thing they DON'T know? How do they hold that ignorance?` },
          ],
        },

        {
          id: `l19-real-world`,
          type: `real-world`,
          headline: `Take it into your life`,
          guideContext: `Knowing what you don't know is one of the most important skills available. Two paths.`,
          familyActivity: {
            title: `The Family "What We Don't Know" Conversation`,
            duration: `35 minutes`,
            description: `At dinner, share the cosmic-ignorance question and the three positions. Then ask each adult: what's something you used to think you knew, but later learned you didn't? What's something you currently feel uncertain about? What's something you think you'll never know? Most adults haven't been asked these questions explicitly. The conversation often produces real wisdom from family members who've never articulated their epistemic state. It also models healthy intellectual humility for the family going forward.`,
          },
          projectOption: {
            title: `Your Ignorance Inventory, 2 weeks (optional)`,
            duration: `2 weeks, ~30 minutes per session, 4-5 sessions`,
            description: `Spend 2 weeks consciously tracking your epistemic state across different domains. Keep a journal. Each day, write: what did I assume confidently today that I should be less confident about? What's a question I encountered that I realized I don't know the answer to? Where might unknown unknowns be hiding in my current beliefs? After 2 weeks, write 1,500 words analyzing what you learned about your own epistemic state. Real applied epistemology at a depth few adults reach.`,
            offerToParent: `Parent: opt your kid into this project from the dashboard. Sustained epistemic self-examination at 12 is unusual and valuable.`,
          },
          identityQuestion: `If you become someone who consciously tracks what you don't know, how does that change your relationship to your beliefs over a lifetime of learning?`,
        },

        {
          id: `l19-identity-hook`,
          type: `identity-hook`,
          headline: `Who is this lesson making you?`,
          prompt: `One sentence. No wrong answer.`,
          placeholder: `Someone who...`,
          examples: [
            `Someone who knows three serious positions on cosmic ignorance and can engage with each.`,
            `A person who consciously tracks what I don't know, not just what I do know.`,
            `Someone willing to hold "I don't know" as a real answer instead of pretending false certainty.`,
          ],
          saveKey: `identity_responses_cs_11_12_19`,
        },

        {
          id: `l19-celebration`,
          type: `celebration`,
          guideText: `{name}. Nineteenth Cosmos lesson done. You can now articulate three serious positions on how to hold cosmic ignorance (epistemic humility, optimism, mystery/mysterianism), distinguish "unknown unknowns" from "known unknowns," recognize the history of science as evidence for humility, and engage with cosmic ignorance as a mature intellectual posture. Most adults default to false confidence; you have the tools for something better. Next time is the capstone. We synthesize everything you've learned across nineteen lessons into one integrating argument about how to live in this universe. 100 XP final challenge. See you among the stars, one last time. — Nova`,
          badge: `humility-keeper`,
          badgeName: `Humility Keeper`,
          xpEarned: 75,
          competencies: [
            `Articulates three serious positions on cosmic ignorance (humility, optimism, mystery)`,
            `Knows major defenders: Sagan/Stoic tradition for humility; Deutsch for optimism; McGinn for mysterianism`,
            `Distinguishes "unknown unknowns" from "known unknowns"`,
            `Can identify candidates for permanent mystery vs solvable problems`,
            `Engages with epistemic humility as a foundation for mature thinking`,
          ],
          nextLessonPreview: {
            title: `Lesson 20: CAPSTONE — Living in This Universe`,
            hook: `Synthesis. Three integrating cosmic worldviews drawn from all 19 lessons. 100 XP. Final challenge.`,
          },
        },
      ],
    },
  ],
};

export default COSMOS_VOYAGER_L19;

if (import.meta.env?.DEV) {
  const l = COSMOS_VOYAGER_L19.lessons[0];
  const mags = l.screens.filter((s) => s.type === `magazine`).length;
  const argEvi = l.screens.find((s) => s.type === `argument-builder`)?.evidence?.length ?? 0;
  const quiz = l.screens.find((s) => s.type === `quiz`)?.questions?.length ?? 0;
  const reflect = l.screens.find((s) => s.type === `reflection`)?.prompts?.length ?? 0;
  console.log(
    `[LESSON-COSMOS-VOYAGER-L19 ${VERSION}] "${l.title}" — ${mags} magazine, argument-builder w/ ${argEvi} evidence, ${quiz} quiz, ${reflect} reflection`
  );
}
