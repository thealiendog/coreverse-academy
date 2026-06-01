// ─────────────────────────────────────────────────────────────────────────────
// COSMOS VOYAGER  |  L15 — Information & Physics: The Black Hole Paradox
// Age band : voyagers (11-12)   Guide: nova (Owl)
// Standards: Coreverse Original — Theoretical Physics, Information Theory
// CALIBRATED: Voyager spec v1.1 (May 2026)
// Interaction format: MATCHING GAME (concept → physical/theoretical significance)
// ─────────────────────────────────────────────────────────────────────────────

const VERSION = "voyager-cosmos-l15-v1";

const COSMOS_VOYAGER_L15 = {
  ageBand: `voyagers`,
  subjectId: `cosmos`,
  guide: `nova`,

  lessons: [
    {
      id: `cs-11-12-15`,
      title: `Information & Physics: The Black Hole Paradox`,
      duration: 35,
      xpReward: 75,
      badge: `information-theorist`,
      badgeName: `Information Theorist`,

      screens: [
        {
          id: `l15-welcome`,
          type: `welcome`,
          guideText: `{name}, here's a problem that has obsessed theoretical physicists for over 50 years. Quantum mechanics says information can't be destroyed. Whatever the state of a quantum system is, that state evolves but never vanishes entirely. But Stephen Hawking showed in 1974 that black holes slowly evaporate via Hawking radiation, and the radiation appears to be purely thermal—random heat, with no memory of what fell in. If you throw a book into a black hole and wait for it to evaporate, where does the information in the book go? This is called the black hole information paradox. It is one of the most important unsolved problems in theoretical physics. Today we look at the paradox and the major proposed resolutions, then you match each idea to its meaning.`,
          headline: `Information & Physics`,
          subtitle: `The black hole information paradox. 50 years of theoretical work. Still unresolved.`,
          visual: `/voyager-assets/cosmos/l15-welcome.webp`,
        },

        {
          id: `l15-mag-1`,
          type: `magazine`,
          section: 1,
          headline: `What "Information" Means In Physics`,
          paragraphs: [
            `In everyday language, "information" means facts, knowledge, or data we can communicate. In physics, "information" has a more specific meaning. The complete quantum state of any physical system contains all the information about that system. The state can change over time, but according to quantum mechanics, the change happens through "unitary evolution"—a mathematical operation that preserves the total amount of information. Information can be transformed, scrambled, hidden, redistributed, but the principle of unitary evolution says it can never be destroyed.`,
            `Why does this principle matter? It's the foundation of how quantum physics describes the world. Without unitarity, quantum mechanics would lose its predictive power; the same starting conditions could produce different futures with no rule to relate them. Quantum mechanics has been tested to extraordinary precision and unitary evolution is built into every successful application.`,
            `Information conservation has practical consequences. In principle, if you knew the complete quantum state of a system at one time, you could reconstruct any earlier state by reversing the unitary evolution. If you burned a book in a fire, the information in the book isn't truly gone; it's encoded in the precise quantum state of the smoke, ash, and radiation. In practice, the information gets scrambled beyond any human ability to reconstruct, but the information itself remains. The system is reversible in principle.`,
          ],
          image: `/voyager-assets/cosmos/l15-s1-information.webp`,
          imageCaption: `Quantum information: preserved by unitary evolution. Can be scrambled but never destroyed.`,
          vocab: [
            {
              word: `unitary evolution`,
              definition: `Mathematical operation in quantum mechanics that describes how quantum states change over time. Preserves the total amount of information; information can be scrambled or redistributed but never destroyed. One of the foundational principles of quantum physics.`,
              audioPrompt: `Unitary evolution is the mathematical operation in quantum mechanics that describes how quantum states change over time, {name}. The key feature: it preserves the total amount of information. Information can be transformed, scrambled, hidden, redistributed. But the principle of unitary evolution says it can never be destroyed. If you knew the complete quantum state at one time, you could in principle reconstruct any earlier state by reversing the evolution. This isn't just a technical detail. Unitarity is one of the foundational principles of quantum physics. Without it, quantum mechanics would lose its predictive power, and the same starting conditions could produce different futures with no rule to relate them. Quantum mechanics has been tested to extraordinary precision, and unitary evolution is built into every successful application.`,
            },
          ],
        },

        {
          id: `l15-mag-2`,
          type: `magazine`,
          section: 2,
          headline: `Hawking's 1974 Surprise`,
          paragraphs: [
            `In 1974, Stephen Hawking applied quantum mechanics to the boundary region of a black hole (the event horizon) and discovered something startling. Black holes are not perfectly black. Through subtle quantum effects, they emit radiation. This radiation, now called Hawking radiation, carries energy away from the black hole. Over enormous timescales, the black hole eventually evaporates entirely.`,
            `The unsettling part. Hawking's calculation showed the radiation is purely thermal: it carries information about the black hole's mass, charge, and angular momentum (the three numbers describing it by the no-hair theorem from Lesson 5), but nothing else. The detailed information about whatever fell into the black hole (a book, a star, a planet's worth of complex matter) does not appear to come out in the radiation.`,
            `If this is correct, the information that went into the black hole is destroyed when the black hole evaporates. This directly contradicts unitary evolution. Quantum mechanics says information can't be destroyed. Hawking's calculation says it can, when black holes are involved. One of them must be wrong. This is the black hole information paradox.`,
            `Hawking himself initially thought information really was destroyed, and that we'd need to modify quantum mechanics. Most physicists found this unacceptable. Modifying unitary evolution would break too much established physics. So work has focused on understanding how Hawking's calculation might be incomplete and where the information actually goes. Decades later, we still don't have a complete consensus answer. But significant progress has been made.`,
          ],
          image: `/voyager-assets/cosmos/l15-s2-hawking.webp`,
          imageCaption: `Hawking 1974: black holes emit radiation. The radiation seems to carry no detailed info. The paradox.`,
          vocab: [
            {
              word: `black hole information paradox`,
              definition: `Problem identified by Stephen Hawking in 1974: black hole evaporation via Hawking radiation seems to destroy information about what fell in, contradicting quantum mechanics' unitary evolution. Major unsolved problem in theoretical physics. Multiple proposed resolutions; no consensus.`,
              audioPrompt: `The black hole information paradox is a problem identified by Stephen Hawking in 1974, {name}. Quantum mechanics says information is preserved by unitary evolution. Hawking showed that black holes emit thermal radiation and eventually evaporate. The radiation appears to carry no detailed information about what fell in. If correct, information is destroyed when black holes evaporate. This directly contradicts unitarity. One of these must be wrong. The paradox has driven 50 years of theoretical work. Multiple resolutions have been proposed: holographic principle, AdS/CFT correspondence, complementarity, Page curve calculations, soft hair theorems. None has won universal consensus, but the field has made significant progress. The paradox is one of the most important unsolved problems in theoretical physics.`,
            },
          ],
        },

        {
          id: `l15-mag-3`,
          type: `magazine`,
          section: 3,
          headline: `Resolution 1: Holographic Principle`,
          paragraphs: [
            `One major proposed resolution emerged from the work of Gerard 't Hooft (1993) and Leonard Susskind (1995). They proposed the "holographic principle." The idea sounds strange. All the information contained in a three-dimensional region can be encoded on its two-dimensional boundary. The black hole isn't really storing information in its three-dimensional volume; it's storing all information on its two-dimensional event horizon surface.`,
            `Why does this help with the paradox? Because if information lives on the horizon, then as the black hole evaporates and the horizon shrinks, the information that was on the horizon needs to go somewhere. The radiation that's leaving could carry the information out. The radiation just doesn't appear thermal when you look carefully at the subtle correlations between different parts of it. Hawking's original calculation didn't track these correlations precisely enough.`,
            `The holographic principle was put on remarkably firm mathematical footing in 1997 when Juan Maldacena, then at Harvard, proposed the AdS/CFT correspondence. This is a specific mathematical duality between a gravitational theory in a particular kind of spacetime (anti-de Sitter, "AdS") and a quantum field theory on its boundary (a "conformal field theory," CFT). The duality has been heavily studied for over 25 years. In the AdS/CFT framework, information can be tracked precisely through black hole formation and evaporation. The information is preserved; Hawking's original calculation was missing important details.`,
            `AdS/CFT works for a specific kind of spacetime (negatively curved AdS space, not the kind of spacetime our universe has on the largest scales). Whether the lessons learned there apply to actual black holes in our universe is still being worked out. But the framework has substantially shifted physicist confidence about the information paradox.`,
          ],
          image: `/voyager-assets/cosmos/l15-s3-holographic.webp`,
          imageCaption: `Holographic principle: 3D information lives on 2D boundary. AdS/CFT made this mathematically precise.`,
          vocab: [
            {
              word: `holographic principle`,
              definition: `Proposal by 't Hooft (1993) and Susskind (1995) that all information in a three-dimensional region can be encoded on its two-dimensional boundary. Black hole information lives on the event horizon. Put on mathematical footing by Maldacena's 1997 AdS/CFT correspondence.`,
              audioPrompt: `The holographic principle was proposed by Gerard 't Hooft in 1993 and developed by Leonard Susskind in 1995, {name}. The idea sounds strange. All the information contained in a three-dimensional region can be encoded on its two-dimensional boundary. The volume contains less actual information than its surface area. For a black hole, this means all information about what fell in is encoded on the two-dimensional event horizon, not stored in the three-dimensional interior. The holographic principle was put on firm mathematical footing in 1997 by Juan Maldacena with the AdS/CFT correspondence. This is a duality between a gravitational theory in anti-de Sitter space and a quantum field theory on its boundary. AdS/CFT has been heavily studied for over 25 years and has shifted physicist confidence that information is preserved in black hole evaporation.`,
            },
          ],
        },

        {
          id: `l15-mag-4`,
          type: `magazine`,
          section: 4,
          headline: `Resolutions 2 and 3: Complementarity And The Page Curve`,
          paragraphs: [
            `Leonard Susskind also proposed "black hole complementarity" in 1993. The idea: outside observers see information stored on the event horizon. Inside observers (someone falling into the black hole) experience smooth passage through the horizon with information continuing into the interior. These descriptions disagree, but since no single observer can verify both descriptions, there's no contradiction. The descriptions are "complementary" rather than incompatible, similar to the way wave and particle descriptions of quantum systems are complementary.`,
            `Complementarity solved the paradox for a while. Then in 2012, four physicists (Almheiri, Marolf, Polchinski, and Sully, often called "AMPS") pointed out a deeper problem: if complementarity is correct, an observer falling into a black hole might encounter a "firewall" of high-energy radiation at the event horizon, contradicting general relativity's prediction of smooth passage. The firewall paradox revived intense work on the information question.`,
            `In 2019 and 2020, multiple groups of physicists (including Geoff Penington, Ahmed Almheiri, Don Marolf, Henry Maxfield, and others) made significant progress using a result called the "Page curve." Don Page had proposed in 1993 that if information is preserved, the entropy of Hawking radiation should follow a specific curve over time: increasing during the first half of black hole evaporation, then decreasing during the second half as information is released. The recent calculations confirmed this Page curve emerges from quantum gravity calculations in specific frameworks, with information leaking out gradually via subtle correlations in the Hawking radiation.`,
            `The current state. Most theoretical physicists now believe information IS preserved in black hole evaporation. The exact mechanism is still being worked out, but the broad outlines are clearer than a decade ago. Hawking himself, before his death in 2018, accepted that information is preserved (after initially arguing otherwise). The paradox is partially resolved but not fully. New work continues monthly.`,
          ],
          image: `/voyager-assets/cosmos/l15-s4-complementarity.webp`,
          imageCaption: `Complementarity (Susskind 1993). Firewall paradox (AMPS 2012). Page curve breakthroughs (2019-2020).`,
          vocab: [
            {
              word: `Page curve`,
              definition: `Specific curve proposed by Don Page in 1993 for how the entropy of Hawking radiation should change over time if information is preserved. Recent calculations (2019-2020) showed the Page curve emerges from quantum gravity in specific frameworks. Significant evidence for information preservation.`,
              audioPrompt: `The Page curve is a specific curve proposed by physicist Don Page in 1993, {name}. It describes how the entropy of Hawking radiation from an evaporating black hole should change over time. If information is preserved, the entropy of radiation increases during the first half of evaporation, then decreases during the second half as information is gradually released back. If information is destroyed, the entropy keeps increasing. Recent calculations in 2019 and 2020 by multiple groups of physicists confirmed that the Page curve emerges from quantum gravity calculations in specific frameworks. This was a major breakthrough. It provides significant evidence that information is preserved in black hole evaporation, even though we still don't fully understand the mechanism. The work is recognized as one of the most important theoretical physics results of recent years.`,
            },
          ],
        },

        {
          id: `l15-mag-5`,
          type: `magazine`,
          section: 5,
          headline: `Before You Match The Concepts`,
          paragraphs: [
            `In the matching game that follows, you'll match major concepts in the information paradox to their physical or theoretical significance. The names are technical but the ideas are real and important. Information conservation, Hawking radiation, the holographic principle, AdS/CFT, black hole complementarity, the Page curve. Each of these is something working theoretical physicists actively use.`,
            `One framing as you work. The information paradox is the kind of problem that makes physicists genuinely uncertain. There's no popular pseudoscience version of this; "black hole information paradox" isn't trending on TikTok the way "quantum manifestation" is. The paradox is a real puzzle inside theoretical physics. The resolution debate involves rigorous mathematical work, not vague gestures.`,
            `Why does this matter for you? Beyond the specific physics, the information paradox is an example of how science actually works on genuinely hard problems. Hawking proposed a paradox that took 50 years to mostly resolve. Multiple resolution attempts were proposed, modified, partially refuted, and refined. Major progress came in waves: 1993 (complementarity), 1997 (AdS/CFT), 2012 (firewall), 2019-2020 (Page curve calculations). The field is still active. Real science doesn't always converge quickly. Sometimes the deepest problems take decades of sustained work by hundreds of physicists.`,
            `One last note. This lesson covers theoretical physics at a frontier. The mainstream textbook account hasn't caught up with the most recent developments. Many things you might read in older popular science books on black holes will be outdated relative to where the field actually is now. The information paradox isn't "solved," but the consensus has shifted significantly toward information preservation in the last decade.`,
          ],
          image: `/voyager-assets/cosmos/l15-s5-before.webp`,
          imageCaption: `Real theoretical physics at the frontier. 50 years of work. Not yet fully resolved.`,
          vocab: [
            {
              word: `AdS/CFT correspondence`,
              definition: `Mathematical duality proposed by Juan Maldacena in 1997 between a gravitational theory in anti-de Sitter (AdS) space and a quantum field theory on its boundary (a conformal field theory, CFT). Has been heavily studied for 25+ years. Provides framework for understanding how information is preserved in black hole evaporation.`,
              audioPrompt: `The AdS/CFT correspondence is a mathematical duality proposed by Juan Maldacena in 1997, {name}. Maldacena was at Harvard at the time. The duality relates a gravitational theory in anti-de Sitter space, which is "AdS," to a quantum field theory on the boundary of that space, which is the "conformal field theory" or CFT. The two theories are mathematically equivalent even though they describe very different physical situations. The correspondence has been heavily studied for over 25 years and has produced major insights into how quantum mechanics and gravity fit together. In the AdS/CFT framework, information can be tracked precisely through black hole formation and evaporation, showing it's preserved. Whether the lessons apply to actual black holes in our universe is still being worked out, but the framework has substantially shifted physicist confidence.`,
            },
          ],
        },

        // ───── MATCHING GAME ──────────────────────────────────────────────────
        {
          id: `l15-matching`,
          type: `matching`,
          headline: `Match each concept to its physical or theoretical significance`,
          intro: `{name}, you've just learned the major concepts in the black hole information paradox and its proposed resolutions. Now match each concept name on the left to what it actually means or accomplishes on the right. Real theoretical physics. Get all five right and you understand more about the paradox than most physics majors did before reaching graduate school.`,
          pairs: [
            {
              id: `pair-1`,
              left: `Unitary evolution`,
              right: `Mathematical principle in quantum mechanics that information is preserved over time; information can be scrambled or redistributed but never destroyed; foundation of why the paradox is a paradox`,
            },
            {
              id: `pair-2`,
              left: `Hawking radiation (1974)`,
              right: `Faint radiation emitted by black holes through quantum effects near the event horizon; appears purely thermal in Hawking's original calculation, which created the paradox; black holes slowly evaporate via this radiation`,
            },
            {
              id: `pair-3`,
              left: `Holographic principle ('t Hooft 1993, Susskind 1995)`,
              right: `All information in a three-dimensional region can be encoded on its two-dimensional boundary; suggests black hole information lives on the event horizon, not in the interior volume`,
            },
            {
              id: `pair-4`,
              left: `AdS/CFT correspondence (Maldacena 1997)`,
              right: `Mathematical duality between gravity in anti-de Sitter space and a quantum field theory on its boundary; provides framework where information preservation can be checked precisely; shifted physicist confidence the paradox is resolvable`,
            },
            {
              id: `pair-5`,
              left: `Page curve (Don Page 1993, confirmed 2019-2020)`,
              right: `Specific curve describing how entropy of Hawking radiation should change over time if information is preserved; emerges from quantum gravity calculations confirmed in recent years; significant evidence for information preservation`,
            },
          ],
          reflectionPrompt: `Which concept surprised you most? The holographic principle (3D info on 2D surfaces)? The Page curve calculation? Something else?`,
        },

        {
          id: `l15-quiz`,
          type: `quiz`,
          headline: `Check your understanding`,
          questions: [
            {
              id: `q1`,
              type: `multiple-choice`,
              question: `What does "information" mean in physics?`,
              options: [
                `Facts on the internet`,
                `The complete quantum state of any physical system contains all the information about that system; the state changes via "unitary evolution" which preserves total information; information can be scrambled but not destroyed`,
                `Just news`,
                `Random data`,
              ],
              correctIndex: 1,
              explanation: `Unitary evolution is one of the foundational principles of quantum mechanics. The conservation of information makes the black hole information paradox a real problem rather than just a curiosity.`,
            },
            {
              id: `q2`,
              type: `multiple-choice`,
              question: `What is the black hole information paradox?`,
              options: [
                `A confusing situation`,
                `Problem identified by Stephen Hawking in 1974: black hole evaporation via Hawking radiation seems to destroy information about what fell in, contradicting quantum mechanics' unitary evolution; major unsolved problem driving 50 years of theoretical work`,
                `A black hole magazine`,
                `Stephen Hawking's biography`,
              ],
              correctIndex: 1,
              explanation: `The paradox forces a contradiction: either quantum mechanics is wrong (unacceptable to most physicists), or Hawking's original calculation is incomplete (the current consensus direction). Resolving where information actually goes has occupied generations of theoretical physicists.`,
            },
            {
              id: `q3`,
              type: `multiple-choice`,
              question: `What is the holographic principle?`,
              options: [
                `A type of 3D image`,
                `Proposal by 't Hooft (1993) and Susskind (1995) that all information in a three-dimensional region can be encoded on its two-dimensional boundary; suggests black hole info lives on event horizon; put on firm footing by Maldacena's 1997 AdS/CFT`,
                `Hollywood physics`,
                `Optical illusion`,
              ],
              correctIndex: 1,
              explanation: `The holographic principle sounds strange but is mathematically rigorous. AdS/CFT correspondence has been studied for 25+ years and produced major insights into how quantum mechanics and gravity fit together.`,
            },
            {
              id: `q4`,
              type: `multiple-choice`,
              question: `What is the AdS/CFT correspondence?`,
              options: [
                `An abbreviation`,
                `Mathematical duality proposed by Juan Maldacena in 1997: gravitational theory in anti-de Sitter space is mathematically equivalent to quantum field theory on its boundary; provides framework for tracking information through black hole evaporation`,
                `An old theorem`,
                `Physics terminology`,
              ],
              correctIndex: 1,
              explanation: `One of the most important theoretical physics results of the last 30 years. Made the holographic principle mathematically precise and shifted physicist confidence that the information paradox is resolvable.`,
            },
            {
              id: `q5`,
              type: `multiple-choice`,
              question: `What is the Page curve?`,
              options: [
                `Bending a piece of paper`,
                `Specific curve proposed by Don Page (1993) for how entropy of Hawking radiation should change over time if information is preserved; entropy increases during first half of evaporation, decreases during second half; recent calculations (2019-2020) confirmed this emerges from quantum gravity`,
                `A book outline`,
                `Don Page's signature`,
              ],
              correctIndex: 1,
              explanation: `The Page curve provides specific testable predictions for what should happen as a black hole evaporates if information is preserved. Recent calculations confirming the curve are significant evidence for information conservation.`,
            },
            {
              id: `q6`,
              type: `multiple-choice`,
              question: `What is "black hole complementarity"?`,
              options: [
                `Compliments for black holes`,
                `Susskind 1993: outside observers see information stored on event horizon; inside observers experience smooth passage through with information continuing into interior; no single observer can verify both, so the descriptions are complementary rather than contradictory`,
                `A type of free coffee`,
                `Friendship between black holes`,
              ],
              correctIndex: 1,
              explanation: `Complementarity solved the paradox temporarily until the AMPS firewall paradox in 2012. The exchange between these ideas drove much of the subsequent work.`,
            },
            {
              id: `q7`,
              type: `multiple-choice`,
              question: `What did the "firewall paradox" reveal in 2012?`,
              options: [
                `Black holes are hot`,
                `Almheiri, Marolf, Polchinski, Sully (AMPS) pointed out: if complementarity is correct, an observer falling into a black hole might encounter a "firewall" of high-energy radiation at the event horizon, contradicting general relativity's prediction of smooth passage`,
                `Fires are bad`,
                `Light is on fire`,
              ],
              correctIndex: 1,
              explanation: `The firewall paradox revived intense work on the information question. It showed that earlier proposed resolutions had deeper problems than initially recognized.`,
            },
            {
              id: `q8`,
              type: `multiple-choice`,
              question: `What's the current state of the information paradox?`,
              options: [
                `Completely solved`,
                `Most theoretical physicists now believe information IS preserved in black hole evaporation; exact mechanism still being worked out; significant progress in 2019-2020 with Page curve calculations; partial resolution, not full; new work continues monthly`,
                `Completely unsolved`,
                `Abandoned`,
              ],
              correctIndex: 1,
              explanation: `Even Hawking himself, before his death in 2018, accepted that information is preserved. The broad direction is clearer than a decade ago, but the full mechanism remains under investigation.`,
            },
            {
              id: `q9`,
              type: `true-false`,
              question: `True or false: There is widespread pseudoscientific content about the information paradox that we need to evaluate carefully.`,
              correctAnswer: false,
              explanation: `False. Unlike "quantum healing" or "manifestation," the black hole information paradox doesn't have a popular pseudoscience version. It's a genuine theoretical physics problem that working researchers actively investigate. The lack of TikTok content about it doesn't make it less important; it just makes it harder for the public to encounter.`,
            },
            {
              id: `q10`,
              type: `inference`,
              question: `Someone asks "What's the most important unsolved problem in physics?" Based on this lesson, what's the most useful framing?`,
              options: [
                `"There aren't any"`,
                `"There are several. The black hole information paradox is one of the most prominent: how is quantum information preserved when black holes evaporate? Stephen Hawking identified it in 1974, multiple resolutions have been proposed and refined over 50 years, and major progress was made in 2019-2020 with the Page curve calculations. The exact mechanism is still being worked out, but most theoretical physicists now believe information is preserved. The persistence of this kind of problem across decades shows how real science works on the hardest questions: not in one breakthrough but through cumulative incremental progress."`,
                `"All of physics is solved"`,
                `"Nothing matters"`,
              ],
              correctIndex: 1,
              explanation: `Real applied science literacy. Knowing what working physicists actually consider important problems is more useful than abstract definitions of science. The information paradox is one such problem; it's not the only one but it's representative of how hard problems get worked on.`,
            },
          ],
        },

        {
          id: `l15-reflection`,
          type: `reflection`,
          headline: `Sit with this`,
          intro: `Pick the prompt that pulls at you most. Your answer is saved.`,
          prompts: [
            { id: `reflect-cognitive`, category: `Cognitive`, prompt: `Before this lesson, did you know there was a 50-year-old unsolved problem at the intersection of quantum mechanics and black holes? Has the picture sharpened?` },
            { id: `reflect-meta`, category: `Metacognitive`, prompt: `Which proposed resolution was hardest to wrap your mind around? The holographic principle? AdS/CFT? Why?` },
            { id: `reflect-identity`, category: `Identity`, prompt: `If you become someone who can engage with frontier theoretical physics, what does that change about how you understand what science actually does?` },
            { id: `reflect-application`, category: `Application`, prompt: `The information paradox shows real science taking 50+ years to make partial progress on a hard problem. How does that compare to popular framings of how science works? Faster? Slower? Different in kind?` },
            { id: `reflect-critical`, category: `Critical`, prompt: `Could the information paradox eventually be resolved by recognizing that information IS sometimes destroyed, and quantum mechanics needs modification? What would be lost if that were true?` },
            { id: `reflect-personal`, category: `Personal investigation`, prompt: `Search for "Page curve recent results" or "black hole information paradox 2020" news. What's the most recent development you can find?` },
          ],
        },

        {
          id: `l15-real-world`,
          type: `real-world`,
          headline: `Take it into your life`,
          guideContext: `Frontier theoretical physics shows you what real scientific progress looks like. Two paths.`,
          familyActivity: {
            title: `The Real Frontier Physics Conversation`,
            duration: `30 minutes`,
            description: `At dinner, share what you learned about the information paradox. Ask each adult: had they heard of the black hole information paradox? Most haven't; it's not famous outside physics. Walk through what makes it a paradox (quantum mechanics says information is preserved; Hawking said black holes destroy it), and what the proposed resolutions are. The conversation often produces real wonder: that there's a real unsolved problem at the frontier of physics, that working physicists have spent 50 years on it, that progress has been incremental rather than sudden. Most adults' picture of how science works is too dramatic. This conversation corrects it.`,
          },
          projectOption: {
            title: `Track One Frontier Physics Problem, 4 weeks (optional)`,
            duration: `4 weeks, ~30 minutes per session`,
            description: `Pick one unsolved problem in theoretical physics: the black hole information paradox, the cosmological constant problem (Lesson 7), quantum gravity, the measurement problem, or another. Spend 4 weeks following news about that problem. Find: who's working on it now? What were the most recent developments? Where is consensus building? Where do experts still disagree? After 4 weeks, write 2,000 words on what you learned about how real physics frontier work happens. Real applied science literacy at a depth few adults reach.`,
            offerToParent: `Parent: opt your kid into this project from the dashboard. Tracking a real frontier problem for a month develops genuine intuition about science.`,
          },
          identityQuestion: `If you become someone who can engage with frontier theoretical physics problems, what does that change about how you understand the actual pace and shape of scientific progress?`,
        },

        {
          id: `l15-identity-hook`,
          type: `identity-hook`,
          headline: `Who is this lesson making you?`,
          prompt: `One sentence. No wrong answer.`,
          placeholder: `Someone who...`,
          examples: [
            `Someone who can articulate the black hole information paradox and major proposed resolutions.`,
            `A person who knows what working theoretical physicists actually argue about.`,
            `Someone willing to engage with science at the frontier instead of just at the textbook level.`,
          ],
          saveKey: `identity_responses_cs_11_12_15`,
        },

        {
          id: `l15-celebration`,
          type: `celebration`,
          guideText: `{name}. Fifteenth Cosmos lesson done. You can now articulate the black hole information paradox, explain the major proposed resolutions (holographic principle, AdS/CFT, complementarity, Page curve), recognize the names of the physicists working on it (Hawking, 't Hooft, Susskind, Maldacena, Page, Penington, Almheiri), and understand how frontier theoretical physics actually progresses. Most adults have never engaged with any of this. Next time we go meta. We've talked about distinguishing real science from pseudoscience throughout the band. Now we look directly at that distinction itself, using one of the most common battlegrounds: astrology. Source Evaluation format. The lesson that ties together every source evaluation in the band. See you among the stars. — Nova`,
          badge: `information-theorist`,
          badgeName: `Information Theorist`,
          xpEarned: 75,
          competencies: [
            `Articulates the black hole information paradox and unitary evolution principle`,
            `Knows the major proposed resolutions: holographic principle, AdS/CFT, complementarity, Page curve`,
            `Recognizes the key physicists (Hawking, 't Hooft, Susskind, Maldacena, Page)`,
            `Understands how frontier theoretical physics actually progresses (decades of incremental work)`,
            `Distinguishes real frontier problems from popularized physics topics`,
          ],
          nextLessonPreview: {
            title: `Lesson 16: Science vs Pseudoscience`,
            hook: `The meta-lesson. Direct comparison of how science and pseudoscience differ structurally, using astrology as the case study. Source Evaluation that ties the band together.`,
          },
        },
      ],
    },
  ],
};

export default COSMOS_VOYAGER_L15;

if (import.meta.env?.DEV) {
  const l = COSMOS_VOYAGER_L15.lessons[0];
  const mags = l.screens.filter((s) => s.type === `magazine`).length;
  const matchingScreen = l.screens.find((s) => s.type === `matching`);
  const quiz = l.screens.find((s) => s.type === `quiz`)?.questions?.length ?? 0;
  const reflect = l.screens.find((s) => s.type === `reflection`)?.prompts?.length ?? 0;
  console.log(
    `[LESSON-COSMOS-VOYAGER-L15 ${VERSION}] "${l.title}" — ${mags} magazine, matching game w/ ${matchingScreen?.pairs?.length ?? 0} pairs, ${quiz} quiz, ${reflect} reflection`
  );
}
