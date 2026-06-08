// ─────────────────────────────────────────────────────────────────────────────
// COSMOS VOYAGER  |  L16 — Science vs Pseudoscience: The Meta-Lesson
// Age band : voyagers (11-12)   Guide: nova (Owl)
// Standards: NGSS Practices, Coreverse Original — Philosophy of Science, Critical Thinking
// CALIBRATED: Voyager spec v1.1 (May 2026) — Tier 2-3 on astrology (cultural value vs empirical claims)
// Interaction format: SOURCE EVALUATION (peer-reviewed test vs careful science communication vs viral astrology)
// ─────────────────────────────────────────────────────────────────────────────

const VERSION = "voyager-cosmos-l16-v1";

const COSMOS_VOYAGER_L16 = {
  ageBand: `voyagers`,
  subjectId: `cosmos`,
  guide: `nova`,

  lessons: [
    {
      id: `cs-11-12-16`,
      title: `Science vs Pseudoscience: The Meta-Lesson`,
      duration: 35,
      xpReward: 75,
      badge: `pseudoscience-spotter`,
      badgeName: `Pseudoscience Spotter`,

      screens: [
        {
          id: `l16-welcome`,
          type: `welcome`,
          guideText: `{name}, throughout this entire band we've practiced telling real science from pseudoscience. Quantum mechanics from "quantum manifestation." Black holes from "portals to other dimensions." Consciousness research from "consciousness creates reality." Today we go meta. We look directly at what makes something science vs pseudoscience, and we use one of the most common battlegrounds as our case study: astrology. Astrology has cultural and personal value for many people, which is real. But as a predictive empirical science, it consistently fails standard tests. Both of those statements are true. The distinction matters. Today's source evaluation teaches you the framework for telling them apart for the rest of your life.`,
          headline: `Science vs Pseudoscience`,
          subtitle: `The meta-lesson. The framework that applies to every claim you'll evaluate.`,
          visual: `/voyager-assets/cosmos/l16-welcome.webp`,
        },

        {
          id: `l16-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `What Makes Something Science`,
          paragraphs: [
            `Science isn't defined by topic. Cosmology is science; astrology is not. But cosmology is studying the same physical universe that astrology gestures at. The difference isn't the subject matter; it's the method. Several specific features distinguish scientific claims from pseudoscientific ones, and recognizing them is one of the most useful intellectual skills you can develop.`,
            `First: falsifiability. The philosopher Karl Popper argued that scientific claims must be falsifiable in principle. There must be some observation that could prove the claim wrong. "All swans are white" is falsifiable: find one black swan and it's refuted. "Some mysterious force affects events in mysterious ways" is not falsifiable; no observation could rule it out. Falsifiable claims have empirical content; unfalsifiable claims don't.`,
            `Second: specific predictions. Real science makes specific predictions that can be tested. The Standard Model of particle physics predicted the mass of the Higgs boson before it was discovered in 2012. Einstein's general relativity predicted gravitational lensing of starlight by the Sun before Eddington observed it in 1919. Vague claims like "Mercury retrograde affects communication" don't make specific predictions; they're "validated" by selectively noticing communication problems that fit while ignoring those that don't.`,
            `Third: replication. Scientific findings must be replicable by independent researchers. A single experiment doesn't settle a question; multiple independent groups must find the same result. The 1989 cold fusion announcement was greeted with intense excitement until other labs failed to replicate it; the original result was rejected. Replication is how the scientific community filters out bad results.`,
            `Fourth: updating with evidence. Science updates when evidence accumulates against earlier views. Theories die when they fail enough tests. Astronomers abandoned the steady-state cosmology when the cosmic microwave background was discovered. Plate tectonics was accepted after evidence accumulated. Pseudoscience, by contrast, often persists despite contrary evidence by adjusting claims, dismissing tests, or appealing to authority.`,
          ],
          image: `/voyager-assets/cosmos/l16-s1-science.webp`,
          imageCaption: `Science: falsifiability, specific predictions, replication, evidence-driven updating.`,
          vocab: [
            {
              word: `falsifiability`,
              definition: `Whether a claim can in principle be proven wrong by evidence. Karl Popper argued this distinguishes science from non-science. Specific predictions are falsifiable; vague unfalsifiable claims have no empirical content. Foundational concept in philosophy of science.`,
              audioPrompt: `Falsifiability is whether a claim can in principle be proven wrong by evidence, {name}. Karl Popper, an Austrian philosopher of science, argued in the 20th century that this is what distinguishes science from non-science. A scientific claim must be falsifiable: there must be some observation that could prove it wrong. "All swans are white" is falsifiable: find one black swan and it's refuted. "Some mysterious force affects events in mysterious ways" is not falsifiable; no observation could rule it out. Falsifiable claims have empirical content. Unfalsifiable claims don't. This doesn't make unfalsifiable claims worthless; they may still be meaningful as expressions of values, philosophy, or art. But they're not scientific. Knowing the distinction prevents you from being misled by pseudoscience that uses scientific vocabulary without scientific content.`,
            },
          ],
        },

        {
          id: `l16-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `What Makes Something Pseudoscience`,
          paragraphs: [
            `Pseudoscience shares certain recurring features. It typically claims scientific status without using scientific methods. It produces unfalsifiable claims that no observation could rule out. It cites scientific vocabulary without engaging with the underlying frameworks. It often relies on personal testimony and selective evidence rather than systematic measurement. And it tends to persist despite contrary evidence by adjusting claims rather than abandoning the framework.`,
            `Some of the most common pseudoscience patterns. First: appeals to ancient wisdom. "Ancient civilizations knew things modern science is just discovering." Sometimes ancient civilizations did know things modern science later confirmed (Mesopotamian astronomers predicted eclipses). But "this is ancient" is not by itself evidence that something is true. Many ancient beliefs were wrong.`,
            `Second: appeals to authority figures who lack relevant credentials. Celebrity endorsements, "experts" without actual training in the relevant field, fringe scientists speaking outside their expertise. Real science is built on peer review and methodological rigor, not on who endorses it. If someone tells you "PhD physicists support quantum healing," check whether they're PhD physicists publishing peer-reviewed work on quantum mechanics relevant to healing claims. Almost always, they're not.`,
            `Third: confirmation bias and selective evidence. Pseudoscience typically focuses on cases that seem to fit while ignoring cases that don't. The classic astrology pattern: you notice when something "happens during Mercury retrograde" and forget the many times nothing happens or things "happen" outside Mercury retrograde. Without systematic measurement comparing predicted outcomes to base rates, anecdotes don't establish anything.`,
            `Fourth: vague language that can't be tested. "Energy" without specifying what kind of energy, "vibrations" without measurable frequencies, "alignment" without specifying with what. Real physics has specific energies (electromagnetic, gravitational, kinetic, etc.) with specific units. Pseudoscience uses "energy" as an undefined term that can mean whatever the speaker needs it to mean. The vagueness isn't accidental; it's what makes the claims unfalsifiable.`,
            `Fifth: monetization. Pseudoscience commonly sells products, courses, readings, or consultations. The financial incentive structure means the source profits whether the claims work or not. Real scientific research is funded primarily through grants, universities, and labs whose income doesn't depend on the specific results being true.`,
          ],
          image: `/voyager-assets/cosmos/l16-s2-pseudoscience.webp`,
          imageCaption: `Pseudoscience patterns: vague terms, cherry-picked evidence, authority appeals, monetization.`,
          vocab: [
            {
              word: `confirmation bias`,
              definition: `Cognitive tendency to notice and remember evidence that supports beliefs we already hold, while ignoring evidence that contradicts them. Universal feature of human cognition. Particularly powerful in pseudoscience contexts where systematic measurement is rare and anecdotes feel definitive.`,
              audioPrompt: `Confirmation bias is the cognitive tendency to notice and remember evidence that supports beliefs we already hold, while ignoring evidence that contradicts them, {name}. It is a universal feature of human cognition, not a moral failing. Everyone does it. Particularly powerful in pseudoscience contexts where systematic measurement is rare and anecdotes feel definitive. The astrology example. You notice when something significant happens during Mercury retrograde and forget the many times nothing happens or things happen outside Mercury retrograde. Without systematic measurement comparing predicted outcomes to base rates, the anecdotes feel compelling even though they don't establish anything. The way science combats confirmation bias is through structured methodology: predefined predictions, blinded experimental designs, statistical analysis of all results not just impressive ones. Knowing your own bias exists helps you recognize when it might be at work.`,
            },
          ],
        },

        {
          id: `l16-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `The Astrology Case Study`,
          paragraphs: [
            `Astrology claims that the positions of celestial bodies at your birth determine your personality and life events. Different astrological traditions exist (Western, Vedic, Chinese, others) with different specific claims, but the core idea is shared. This is an empirical claim. It should be testable. Has it been tested?`,
            `Yes. Multiple times. In 1985, physicist Shawn Carlson published a double-blind test of astrology in the journal Nature, one of the most respected scientific journals. He worked with prominent astrologers to design a fair test. Subjects provided their birth data. Astrologers used their natal charts to identify which of three California Psychological Inventory profiles belonged to each subject. The result: astrologers performed at chance level. They did not match charts to personalities better than random guessing. The astrologers themselves had agreed before the test that this would be a fair evaluation.`,
            `Multiple subsequent studies have produced similar results. Geoffrey Dean (a former astrologer turned skeptical researcher) has published meta-analyses of dozens of studies, consistently finding that astrologers cannot match charts to personalities, life outcomes, or events at better-than-chance rates. Twin studies (twins have nearly identical natal charts but often very different personalities and outcomes) provide additional evidence against astrology's core claims. The 2000s longitudinal Time Twins study tracked 2,000 people born within minutes of each other; they did not show the similar life patterns astrology predicts.`,
            `One important distinction. Astrology has cultural and personal value for many people. It provides language for self-reflection. It creates community and shared meaning. It offers prompts that some people find useful for thinking about their lives. None of this is in dispute. What scientific tests show is something specific: the empirical claim that celestial positions at birth predict personality and life events does not survive controlled testing. You can value astrology as a contemplative or cultural practice while recognizing that its empirical predictions don't hold up. These are different domains.`,
          ],
          image: `/voyager-assets/cosmos/l16-s3-astrology.webp`,
          imageCaption: `Astrology as empirical science fails standardized tests. Its cultural/personal value is a separate question.`,
          vocab: [
            {
              word: `Carlson`,
              definition: `Influential double-blind test of astrology published in Nature by physicist Shawn Carlson. Designed with input from astrologers to ensure fairness. Found astrologers could not match natal charts to personality profiles at better than chance rates. Among the most rigorous tests of astrology ever conducted.`,
              audioPrompt: `The Carlson 1985 study was an influential double-blind test of astrology published in the journal Nature, {name}. Conducted by physicist Shawn Carlson. He worked with prominent astrologers to design the test, ensuring the methodology was fair to astrology's claims. The astrologers themselves agreed in advance that this would be a fair evaluation. Subjects provided their birth data. Astrologers used the resulting natal charts to identify which of three California Psychological Inventory personality profiles belonged to each subject. The result: astrologers performed at chance level. They did not match charts to personalities better than random guessing would predict. The study is one of the most rigorous tests of astrology ever conducted, and similar results have been replicated many times since. It remains a foundational reference in the scientific evaluation of astrology.`,
            },
          ],
        },

        {
          id: `l16-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Why Astrology Persists Despite Failing Tests`,
          paragraphs: [
            `If astrology consistently fails empirical tests, why does it remain popular? Several factors converge.`,
            `First: the Barnum effect. Astrological descriptions are typically vague enough that they apply to almost everyone. "You can be deeply thoughtful when alone but also enjoy being social." "You have unrealized potential you haven't fully expressed." These descriptions fit most people most of the time. People reading them feel "wow, that's so accurate" because nearly everything in them is true of nearly everyone. Psychologist Bertram Forer demonstrated this in 1948 with what's now called the Forer or Barnum effect.`,
            `Second: confirmation bias as we discussed in section 2. People remember hits and forget misses. "Mercury retrograde caused my electronics to break" feels meaningful when it happens; the many times electronics break outside Mercury retrograde get forgotten.`,
            `Third: the genuine cultural and personal value astrology can provide. It gives people language for thinking about themselves and others. It creates communities of shared meaning. It offers prompts for self-reflection. These are real benefits independent of whether the celestial predictions work. Many people use astrology this way without being deeply committed to the empirical claims.`,
            `Fourth: pattern recognition is a deep feature of human cognition. We see faces in clouds and meaning in random events. Astrology gives a framework for finding patterns in life events, and the framework feels satisfying even when the patterns aren't really there. This isn't a moral failing; it's how human cognition works. Knowing how it works helps you not be fooled by it.`,
            `One thing worth being careful about. Many astrologers genuinely believe in the predictive claims and have built their lives around the practice. Engaging with someone about astrology benefits from the distinction we made earlier: the empirical claims don't survive tests, AND the personal/cultural value is real. You can respect a friend's astrology practice without endorsing the predictive claims, and you can recognize the predictive claims fail without dismissing the practice's other dimensions.`,
          ],
          image: `/voyager-assets/cosmos/l16-s4-persistence.webp`,
          imageCaption: `Why astrology persists: Barnum effect, confirmation bias, real cultural value, human pattern-seeking.`,
          vocab: [
            {
              word: `Barnum effect`,
              definition: `Tendency for people to accept vague, general descriptions as personally accurate when told the descriptions are specifically about them. Demonstrated by Bertram Forer in 1948. Foundation of horoscopes, cold readings, and many personality tests.`,
              audioPrompt: `The Barnum effect, also called the Forer effect, is the tendency for people to accept vague, general descriptions as personally accurate when told the descriptions are specifically about them, {name}. Psychologist Bertram Forer demonstrated this in 1948 with a famous experiment. He gave students "personalized" personality assessments and asked them to rate accuracy. Most rated the descriptions as highly accurate. But Forer had given every student the same generic description, cobbled together from astrological columns. The descriptions fit because they were vague enough to apply to nearly everyone. "You have unrealized potential you haven't fully expressed." This is true of most people. The Barnum effect is the foundation of how horoscopes, cold readings, and many "personality tests" produce strong feelings of accuracy. Recognizing it protects you from being convinced by content that's actually applicable to almost anyone.`,
            },
          ],
        },

        {
          id: `l16-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Before You Evaluate The Sources`,
          paragraphs: [
            `In the source evaluation that follows, you'll see three sources discussing astrology. The first is the Carlson 1985 peer-reviewed Nature paper. The second is a careful science communication piece from a respected astronomical society. The third is a viral astrology Instagram account claiming "science proves astrology works."`,
            `As you rank them, apply the framework we built in sections 1 and 2. Does the source make falsifiable claims? Does it cite peer-reviewed evidence? Does it engage seriously with opposing data, or just dismiss it? Does it have a profit motive? Does it conflate scientific vocabulary with vague claims?`,
            `One framing as you work. The point of this lesson is not to crush astrology or anyone who enjoys it. It's to develop the framework that distinguishes empirical science from claims that use scientific vocabulary without scientific content. The same framework applies to "quantum healing" (Lesson 3), "consciousness creates reality" (Lesson 10), "the universe was made for you" (Lesson 12), and countless other claims you'll encounter for the rest of your life. Once you can apply the framework, you don't have to be misled. And you can still appreciate astrology, manifestation, or other practices for what they actually offer (community, self-reflection, meaning-making) without being confused about what they don't (predictive empirical accuracy).`,
            `One last note. Some manifestation and spiritual content tries to anchor its claims in cosmology specifically. "The universe is conspiring for you," "your consciousness collapses the wave function of reality," "manifesting works through quantum physics." Throughout this band we've shown these claims don't follow from actual physics. They may be psychologically useful as framings; they aren't scientific facts. Holding both at once (psychology yes, empirical science no) is a more accurate stance than either pure dismissal or full endorsement.`,
          ],
          image: `/voyager-assets/cosmos/l16-s5-before.webp`,
          imageCaption: `The framework applies to everything: distinguish empirical claims from cultural/personal value.`,
          vocab: [
            {
              word: `cold reading`,
              definition: `Technique used by mediums, "psychics," and some practitioners of fortune-telling to extract information from clients via subtle observation and leading questions, then present it back as supernatural insight. Combined with the Barnum effect, can feel highly impressive without involving any actual paranormal ability.`,
              audioPrompt: `Cold reading is a technique used by mediums, "psychics," and some practitioners of fortune-telling, {name}. The practitioner extracts information from the client via subtle observation (clothing, age, accent, body language) and carefully designed leading questions, then presents it back as supernatural insight. Combined with the Barnum effect, it can feel highly impressive without involving any actual paranormal ability. Stage mentalists like James Randi and Derren Brown have publicly demonstrated cold reading techniques to show how impressive results can be produced with ordinary skills. The technique is well-documented in the skeptical literature and in performance magic. Knowing how cold reading works protects you from being convinced by performances or readings that seem impressive but actually rely on practiced inference rather than genuine knowledge.`,
            },
          ],
        },

        // ───── SOURCE EVALUATION ──────────────────────────────────────────────
        {
          id: `l16-source-evaluation`,
          type: `source-evaluation`,
          headline: `Three Sources On Astrology`,
          intro: `Three sources discuss astrology. Rank them from most credible to least credible based on methodology, evidence, and how they handle astrology's empirical claims. Then see how a careful analyst would evaluate them.`,
          topic: `Does astrology work as predictive science, and how do we tell rigorous evaluation of astrology from astrology marketing?`,
          sources: [
            {
              id: `source-a`,
              name: `Shawn Carlson (1985), "A Double-Blind Test of Astrology," Nature, vol. 318 — peer-reviewed scientific test`,
              type: `Peer-reviewed scientific paper published in Nature, one of the most respected scientific journals in the world; conducted by physicist Shawn Carlson with input from astrologers to ensure methodology was fair`,
              claim: `Tested whether astrologers could match natal charts to California Psychological Inventory personality profiles at better than chance rates. Methodology was designed in consultation with astrologers themselves, who agreed it would be a fair test. Result: astrologers performed at chance level. They could not match charts to personalities better than random guessing. The paper concludes that astrological claims to predict personality from birth charts are not supported by controlled testing. Detailed methodology, statistical analysis, and discussion of limitations are included.`,
              evidence: `Published in Nature, one of the most prestigious scientific journals. Methodology designed with input from prominent astrologers to ensure fairness; the astrologers agreed in advance to the test design. Detailed statistical analysis; clear reporting of results; honest discussion of limitations. Has been replicated many times by subsequent researchers; Geoffrey Dean's meta-analyses of dozens of studies show consistent findings. Twin studies and Time Twins research provide independent supporting evidence. One of the most rigorous tests of astrology ever conducted; methodology stands up to scrutiny over 40 years later.`,
            },
            {
              id: `source-b`,
              name: `Andrew Fraknoi, "Activities for the Classroom: Your Astrology Defense Kit," Astronomical Society of the Pacific publication`,
              type: `Educational publication by Andrew Fraknoi (former Executive Director of the Astronomical Society of the Pacific, professor of astronomy at Foothill College) designed to help teachers explain why astrology fails as predictive science`,
              claim: `Walks through the actual astronomy of celestial positions (the constellations have drifted significantly since the zodiac was established 2000+ years ago, so the "signs" don't correspond to actual stellar positions anymore). Explains why proposed physical mechanisms for astrology don't work (gravitational pull of planets is minuscule compared to the doctor delivering the baby; no electromagnetic mechanism has ever been proposed). Reviews the controlled studies showing astrologers cannot demonstrate predictive accuracy. Distinguishes between astrology's empirical claims (don't survive testing) and its potential cultural or personal value (separate question).`,
              evidence: `Author is a working astronomer with decades of experience as both researcher and science communicator. Published by the Astronomical Society of the Pacific, a major astronomical organization. References primary literature including the Carlson study. Acknowledges legitimate cultural and personal aspects of astrology while focusing on its predictive empirical claims. Provides specific testable claims and the evidence against them. Good model of careful science communication that doesn't strawman astrology while clearly explaining why it fails as predictive science.`,
            },
            {
              id: `source-c`,
              name: `@CelestialPredictions — Instagram account, 3.4M followers, sells $197 "Quantum Astrology Mastery" course`,
              type: `Viral Instagram astrologer claiming modern science proves astrology and selling courses on "quantum astrology"`,
              claim: `"Science FINALLY confirms what astrologers always knew. The position of planets at your birth shapes your DNA, your personality, and your destiny through quantum entanglement and gravitational frequencies. Modern physics PROVES astrology. Mercury retrograde affects your communication because of magnetic field disturbances. Saturn's position controls major life challenges through gravitational resonance. The skeptics are decades behind the science. Join my $197 Quantum Astrology Mastery course to learn how to read your chart using the latest quantum-astrological techniques. Early-bird ends Friday!"`,
              evidence: `Claims contradict the actual state of astronomy and physics. "Quantum entanglement" doesn't operate at scales of human bodies or DNA; decoherence (Lesson 3) makes this physically impossible. Planetary gravitational effects on humans are minuscule; the gravitational pull of the doctor delivering a baby vastly exceeds that of distant planets. "Mercury retrograde" is an apparent backward motion in Earth's sky caused by relative orbital motion; it doesn't involve any physical disturbance. No peer-reviewed physics or astronomy supports the claims. No engagement with the Carlson study or its many replications. Vocabulary borrowed from physics without engagement. Course at the end. Profit motive structural. Real astronomers would not endorse any of the specific physics claims.`,
            },
          ],
          rankingPrompt: `Drag each source into one of the three slots: Most credible, Somewhat credible, Least credible.`,
          reasoningPrompt: `In 3-4 sentences: What signals did you use? How did the Source C claims compare to the actual physics and astronomy from earlier lessons?`,
          reveal: {
            title: `How a careful analyst would evaluate these`,
            content: [
              `Source A is the most credible for evaluating astrology's empirical claims. Carlson's 1985 Nature paper is among the most rigorous tests of astrology ever conducted. Methodology was designed in consultation with astrologers themselves who agreed it would be fair. The result is unambiguous: astrologers performed at chance level. Multiple subsequent studies have produced similar findings; Geoffrey Dean's meta-analyses consistently show astrologers cannot demonstrate predictive accuracy. When you want to know whether astrology works as predictive science, peer-reviewed controlled testing is bedrock.`,
              `Source B is credible for understanding both the astronomical facts and the science communication around astrology. Andrew Fraknoi has decades of experience as both astronomer and educator. The publication walks through specific astronomical facts (zodiac drift, gravitational comparisons, no proposed mechanism) and reviews controlled studies. Crucially, it distinguishes between astrology's empirical predictive claims (which fail testing) and its cultural or personal value (separate question). This is the structure of careful science communication: clear about what's testable and what's not, without strawmanning or dismissive language.`,
              `Source C is recognizable pseudoscience using scientific vocabulary borrowed without scientific content. The "quantum entanglement controls personality" claim contradicts the actual physics from Lesson 3; decoherence makes quantum effects at the scale of bodies and DNA essentially impossible. The "Saturn's gravitational resonance controls major life challenges" claim contradicts basic physics; the gravitational effects are minuscule compared to ordinary nearby masses. The "Mercury retrograde affects communication via magnetic fields" claim has no physical basis; Mercury retrograde is an apparent backward motion in the sky from orbital geometry. The profit motive is structural; course revenue depends on the claims being believed, not on them being correct.`,
              `The deeper lesson is the framework itself. Real science makes falsifiable claims, supports them with rigorous methodology, replicates results across independent groups, and updates when evidence accumulates. Pseudoscience uses scientific vocabulary without scientific content, makes unfalsifiable claims, cherry-picks evidence, and persists despite contrary data. This framework applies to astrology, to "quantum healing," to "consciousness creates reality," to fine-tuning manifestation claims, and to thousands of other claims you'll encounter for the rest of your life. Importantly, recognizing pseudoscience doesn't mean dismissing everything spiritual or contemplative. Many practices have genuine cultural and personal value that's independent of empirical predictive claims. The distinction lets you appreciate practices for what they actually offer without being confused about what they don't.`,
            ],
          },
        },

        {
          id: `l16-quiz`,
          type: `quiz`,
          headline: `Check your understanding`,
          questions: [
            {
              id: `q1`,
              type: `multiple-choice`,
              question: `What is "falsifiability"?`,
              options: [
                `Lying in science`,
                `Whether a claim can in principle be proven wrong by evidence; Karl Popper argued this distinguishes science from non-science; specific predictions are falsifiable; vague unfalsifiable claims have no empirical content`,
                `Faking results`,
                `Wrong answers`,
              ],
              correctIndex: 1,
              explanation: `Falsifiability is one of the foundational concepts in philosophy of science. Knowing the difference between falsifiable and unfalsifiable claims is one of the most useful intellectual tools available.`,
            },
            {
              id: `q2`,
              type: `multiple-choice`,
              question: `What are four key features of science?`,
              options: [
                `Math, physics, chemistry, biology`,
                `Falsifiability (claims can be proven wrong), specific predictions (testable), replication (independent researchers find the same result), updating with evidence (theories change when data contradicts)`,
                `Bigger, faster, stronger, smarter`,
                `Books, papers, articles, lectures`,
              ],
              correctIndex: 1,
              explanation: `These four features apply across every scientific domain. Recognizing whether a claim has these features helps distinguish science from pseudoscience reliably.`,
            },
            {
              id: `q3`,
              type: `multiple-choice`,
              question: `What is "confirmation bias"?`,
              options: [
                `Confirming results`,
                `Cognitive tendency to notice and remember evidence that supports beliefs we hold while ignoring contradicting evidence; universal human cognition feature; particularly powerful in pseudoscience contexts where systematic measurement is rare`,
                `Choosing not to believe`,
                `Being too skeptical`,
              ],
              correctIndex: 1,
              explanation: `Confirmation bias is universal and not a moral failing. Everyone does it. Science combats it through structured methodology: predefined predictions, blinded designs, statistical analysis of all results. Knowing it exists helps you recognize when it might be at work.`,
            },
            {
              id: `q4`,
              type: `multiple-choice`,
              question: `What did the Carlson 1985 study find about astrology?`,
              options: [
                `Astrology works perfectly`,
                `Double-blind test in Nature designed with input from astrologers themselves: astrologers performed at chance level matching natal charts to personality profiles; cannot demonstrate predictive accuracy; result replicated by multiple subsequent studies including Geoffrey Dean's meta-analyses`,
                `Astrologers were psychic`,
                `Stars affect everyone`,
              ],
              correctIndex: 1,
              explanation: `The methodology was designed with astrologers' input to ensure fairness. The astrologers agreed in advance the test would be valid. The result was clear and has been replicated many times.`,
            },
            {
              id: `q5`,
              type: `multiple-choice`,
              question: `What is the Barnum (Forer) effect?`,
              options: [
                `A circus trick`,
                `Tendency for people to accept vague, general descriptions as personally accurate when told the descriptions are about them; demonstrated by Bertram Forer in 1948; foundation of horoscopes, cold readings, and many personality tests`,
                `Big tent thinking`,
                `Carnival psychology`,
              ],
              correctIndex: 1,
              explanation: `Forer gave students the same generic description (cobbled from horoscopes) but told each one it was personalized. Most rated it as highly accurate. The descriptions fit because they apply to nearly everyone. Foundational concept for understanding pseudoscience.`,
            },
            {
              id: `q6`,
              type: `multiple-choice`,
              question: `Why does astrology persist despite failing empirical tests?`,
              options: [
                `Because it's true`,
                `Barnum effect (vague descriptions feel accurate), confirmation bias (remember hits, forget misses), genuine cultural and personal value (community, self-reflection), and human pattern-seeking cognition; the persistence isn't evidence of validity`,
                `Because tests are wrong`,
                `Because it's old`,
              ],
              correctIndex: 1,
              explanation: `Several factors converge to make astrology feel valid even though predictive claims don't survive testing. Knowing how these factors work doesn't require dismissing astrology's cultural value; it just clarifies what's actually happening.`,
            },
            {
              id: `q7`,
              type: `multiple-choice`,
              question: `What's the difference between astrology's empirical claims and its cultural value?`,
              options: [
                `There's no difference`,
                `The empirical predictive claims (positions at birth predict personality and events) don't survive controlled testing; the cultural and personal value (self-reflection, community, meaning-making) is a separate question; both can be true simultaneously`,
                `Empirical is fake, cultural is real`,
                `Cultural is fake, empirical is real`,
              ],
              correctIndex: 1,
              explanation: `Recognizing the distinction prevents two errors: dismissing astrology entirely (ignoring real cultural value), and endorsing predictive claims (which don't survive testing). The framework lets you engage thoughtfully with both dimensions.`,
            },
            {
              id: `q8`,
              type: `multiple-choice`,
              question: `What are common features of pseudoscience?`,
              options: [
                `It's always wrong`,
                `Uses scientific vocabulary without scientific content; makes unfalsifiable claims; cites authority without relevant credentials; cherry-picks evidence; vague language; commonly monetized through products and courses`,
                `It's always right`,
                `It uses fake science`,
              ],
              correctIndex: 1,
              explanation: `These patterns recur across pseudoscientific claims. Recognizing them protects you across many topics: astrology, quantum healing, consciousness-creates-reality, manifestation, fad diets, alternative medicine claims, etc.`,
            },
            {
              id: `q9`,
              type: `true-false`,
              question: `True or false: Recognizing pseudoscience means dismissing all spiritual or contemplative practices.`,
              correctAnswer: false,
              explanation: `False. Many practices (meditation, journaling, contemplation, traditional rituals) have genuine cultural, psychological, and personal value independent of empirical predictive claims. The framework distinguishes between predictive empirical claims (which require evidence) and cultural/personal value (a different question). You can appreciate practices for what they actually offer without endorsing claims they don't support.`,
            },
            {
              id: `q10`,
              type: `inference`,
              question: `A friend says "Don't be closed-minded—Mercury retrograde really does mess up communication. I've seen it happen too many times to be coincidence." Based on this lesson, what's the most useful response?`,
              options: [
                `"You're closed-minded"`,
                `"That feeling is real and worth acknowledging, but it likely reflects confirmation bias rather than a real pattern. You notice communication problems during Mercury retrograde and remember them; the many times communication is fine during retrograde or messed up outside retrograde get forgotten. Controlled tests of astrology (Carlson 1985 and many others) find no predictive accuracy. Mercury retrograde is an apparent backward motion in Earth's sky from orbital geometry; it doesn't involve any physical mechanism that would affect communication. The pattern you're seeing is your brain doing what brains do, not Mercury doing something."`,
                `"You're right, Mercury matters"`,
                `"Astrology is fake"`,
              ],
              correctIndex: 1,
              explanation: `Real applied pseudoscience literacy. Acknowledge the feeling without endorsing the framework. Name confirmation bias specifically. Reference the actual science (no mechanism, no controlled test support). This is mature engagement that respects the friend without endorsing claims that don't hold up.`,
            },
          ],
        },

        {
          id: `l16-reflection`,
          type: `reflection`,
          headline: `Sit with this`,
          intro: `Pick the prompt that pulls at you most. Your answer is saved.`,
          prompts: [
            { id: `reflect-cognitive`, category: `Cognitive`, prompt: `Before this lesson, did you have a working framework for distinguishing science from pseudoscience? Has it sharpened?` },
            { id: `reflect-meta`, category: `Metacognitive`, prompt: `Have you ever changed your mind about a pseudoscientific claim you used to believe? What changed you?` },
            { id: `reflect-identity`, category: `Identity`, prompt: `If you become someone who can apply the science/pseudoscience framework automatically across thousands of claims, what does that protect you from over a lifetime of media consumption?` },
            { id: `reflect-application`, category: `Application`, prompt: `Pick one practice or belief in your life (yours or someone you know). Apply the framework. What's empirically testable? What's personally/culturally valuable? Can both coexist clearly?` },
            { id: `reflect-critical`, category: `Critical`, prompt: `Where does "science" itself come closest to becoming pseudoscience? Are there cases where the framework breaks down or science gets used as authority without rigor?` },
            { id: `reflect-personal`, category: `Personal investigation`, prompt: `Ask one adult: have they ever changed their mind about a pseudoscientific claim? What evidence shifted them?` },
          ],
        },

        {
          id: `l16-real-world`,
          type: `real-world`,
          headline: `Take it into your life`,
          guideContext: `The science/pseudoscience framework is one of the most useful intellectual skills available. Two paths.`,
          familyActivity: {
            title: `The Family Pseudoscience Audit`,
            duration: `45 minutes`,
            description: `At dinner, share what you learned about the science vs pseudoscience framework. Then walk through claims your family encounters: in advertising, social media, alternative medicine, wellness products, news, etc. Apply the framework: is the claim falsifiable? Is there peer-reviewed evidence? Has it been replicated? Is there a profit motive? Most families have never done this systematically. After this conversation, your family has a shared framework for evaluating thousands of claims they'll encounter going forward. This is one of the highest-leverage family conversations possible.`,
          },
          projectOption: {
            title: `Build A Pseudoscience Field Guide, 3 weeks (optional)`,
            duration: `3 weeks, ~30 minutes per session, 5-6 sessions`,
            description: `Choose three popular topics where pseudoscience is widespread (e.g., astrology, manifestation, "natural" medicine, fad diets, anti-vaccine content, climate denial, evolution denial, quantum healing). For each: identify the central empirical claims, find the actual scientific evidence, identify the pseudoscience patterns at work. Write a 2,000-word field guide explaining the patterns and how to recognize them. Share it with friends and family. Real applied critical thinking at a level few adults reach.`,
            offerToParent: `Parent: opt your kid into this project from the dashboard. Building a pseudoscience field guide develops genuine intellectual independence.`,
          },
          identityQuestion: `If you become someone who automatically applies the science/pseudoscience framework, what does that change about how you engage with claims for the rest of your life?`,
        },

        {
          id: `l16-identity-hook`,
          type: `identity-hook`,
          headline: `Who is this lesson making you?`,
          prompt: `One sentence. No wrong answer.`,
          placeholder: `Someone who...`,
          examples: [
            `Someone who can apply the science/pseudoscience framework to any claim I encounter.`,
            `A person who distinguishes empirical claims from cultural value without dismissing either.`,
            `Someone willing to update beliefs when evidence contradicts them, even on topics I find personally meaningful.`,
          ],
          saveKey: `identity_responses_cs_11_12_16`,
        },

        {
          id: `l16-celebration`,
          type: `celebration`,
          guideText: `{name}. Sixteenth Cosmos lesson done. You now have the meta-framework that ties together every source evaluation in this band. Falsifiability. Specific predictions. Replication. Evidence-based updating. Recognition of confirmation bias and the Barnum effect. The astrology case study you just worked through. This framework applies to "quantum healing," "consciousness creates reality," "universe was made for you," manifestation claims, alternative medicine, conspiracy theories, and thousands of other claims you'll encounter. You also have the more sophisticated move: distinguishing empirical predictive claims (which need evidence) from cultural and personal value (which is a separate question). Most adults never develop either skill. You have both. Next time we go back into physics for what may be the strangest interpretation question in all of science: what does it mean for an observer to "measure" a quantum system? Argument Builder format. See you among the stars. — Nova`,
          badge: `pseudoscience-spotter`,
          badgeName: `Pseudoscience Spotter`,
          xpEarned: 75,
          competencies: [
            `Articulates the four key features of science (falsifiability, predictions, replication, evidence-driven updating)`,
            `Recognizes pseudoscience patterns (vague language, authority appeals, cherry-picking, monetization)`,
            `Knows the Carlson 1985 study and its replications as the bedrock astrology evidence`,
            `Distinguishes empirical predictive claims from cultural/personal value`,
            `Can apply the framework across thousands of claims (not just astrology)`,
          ],
          nextLessonPreview: {
            title: `Lesson 17: The Observer in Physics`,
            hook: `What does it mean for measurement to "collapse" a quantum state? Three interpretations: Copenhagen, many-worlds, decoherence. Argument Builder.`,
          },
        },
      ],
    },
  ],
};

export default COSMOS_VOYAGER_L16;

if (import.meta.env?.DEV) {
  const l = COSMOS_VOYAGER_L16.lessons[0];
  const mags = l.screens.filter((s) => s.type === `magazine`).length;
  const sourceEval = l.screens.find((s) => s.type === `source-evaluation`);
  const quiz = l.screens.find((s) => s.type === `quiz`)?.questions?.length ?? 0;
  const reflect = l.screens.find((s) => s.type === `reflection`)?.prompts?.length ?? 0;
  console.log(
    `[LESSON-COSMOS-VOYAGER-L16 ${VERSION}] "${l.title}" — ${mags} magazine, source-eval w/ ${sourceEval?.sources?.length ?? 0} sources, ${quiz} quiz, ${reflect} reflection`
  );
}
